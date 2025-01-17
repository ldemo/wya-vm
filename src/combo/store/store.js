import BaseWatcher from './base';
import { cloneDeep, isEqualWith } from '../../utils/helper';

class Store extends BaseWatcher {
	constructor(combo, initialState = {}) {
		super();

		if (!combo) {
			throw new Error('combo必传');
		}
		this.combo = combo;

		/**
		 * 初始化配置项信息
		 */
		Object.keys(initialState).forEach(key => {
			this.states[key] = initialState[key];
		});
	}

	mutations = {
		INIT(states, data) {
			// 用户是否修改了数据或引用。TODO: 去掉isEqualWith
			if (
				states._data === data 
				|| isEqualWith(data, states.data)
			) {
				return;
			}

			const rebuildData = this._makeRebuildData(data);

			states._data = rebuildData; // clone
			states.data = rebuildData; // reset

			// 页面设置
			this.updatePageEditor(rebuildData);
			// 更新当前设置
			this.updateCurrentEditor();
		},
		CREATE(states, payload) {
			let { id, index, data } = payload;

			states.data.splice(index, 0, data);

			this.updateHistory('CREATE', {
				...payload,
				data,
				index
			});
		},
		DELETE(states, payload) {
			let { id } = payload;
			let index = states.data.findIndex(i => i.id === id);
			let data = states.data[index];

			states.data.splice(index, 1);

			this.resetCurrentEditor();
			this.updateHistory('DELETE', {
				...payload,
				data,
				index
			});
		},
		/**
		 * changed 修改的字段
		 * original 原始字段
		 */
		UPDATE(states, payload) {
			let { id, changed, original = {} } = payload;
			let index = states.data.findIndex(i => i.id === id);
			// 只有original时已经同步修改
			changed && Object.keys(changed).forEach(key => {
				original[key] = states.data[index][key];
				states.data[index][key] = changed[key];
			});
			
			this.updateHistory('UPDATE', { 
				...payload, 
				original, 
				data: states.data[index],
				index
			});
		},

		/**
		 * changed 修改的字段（sorting）
		 * original 原始字段（sorted）
		 * history 为true时记录历史
		 */
		SORT(states, payload) {
			let { changed, original, history } = payload;
			// 是否记录历史
			if (changed && changed[0] !== changed[1]) {

				let current = states.data[changed[0]];
				let target = states.data[changed[1]];

				if (
					target.z 
					&& current.z 
					&& current.z != target.z
				) {
					current.z = target.z;
				}

				states.data.splice(changed[1] + (changed[0] < changed[1]), 0, current);
				states.data.splice(changed[0] + (changed[0] > changed[1]), 1);
			}
			if (history && (!original || original[0] !== original[1])) {
				this.updateHistory('SORT', { original: changed || original });
			}
			
		},
		UNDO(states, payload) {
			let { current } = payload;
			states.currentSnapshot = current;

			let { type, id, data, index, original } = this.historyData[current] || {};
			let fn = {
				CREATE: () => states.data.splice(index, 1),
				DELETE: () => states.data.splice(index, 0, data),
				UPDATE: () => states.data.splice(index, 1, cloneDeep({ ...data, ...original })),
				SORT: () => this.commit('SORT', { changed: original, history: false }),
			};
			fn[type] && fn[type]();

			states.pagesEditor 
				&& states.pagesEditor.id === id
				&& this.resetCurrentEditor(states.data[index]);
		},
		REDO(states, payload) {
			let { current } = payload;
			states.currentSnapshot = current;

			let { type, id, data, index, original } = this.historyData[current - 1] || {};
			let fn = {
				CREATE: () => states.data.splice(index, 1, data),
				DELETE: () => states.data.splice(index, 1),
				UPDATE: () => states.data.splice(index, 1, data),
				SORT: () => this.commit('SORT', { changed: original, history: false }),
			};
			fn[type] && fn[type]();

			states.pagesEditor 
				&& states.pagesEditor.id === id
				&& this.resetCurrentEditor(states.data[index]);
		}
	}

	commit(name, ...args) {
		name = name.toUpperCase();

		const { mutations } = this;
		if (mutations[name]) {
			mutations[name].apply(this, [this.states].concat(args));
		} else {
			throw new Error(`[wya-vm/combo]: mutation 未定义 - ${name}`);
		}
	}

	/**
	 * 数据与初始数据合并，避免修改时无响应
	 */
	_makeRebuildData(source) {
		let { modules } = this.combo.$options;
		let result = cloneDeep(source).map((it) => {
			let { data = {}, rebuilder = {} } = modules[it.module] || {};

			typeof data === 'function' && (data = data());
			typeof rebuilder === 'function' && (rebuilder = rebuilder());

			// TODO: 深度遍历，目前仅一层
			Object.keys(it).forEach(key => {
				if (!rebuilder[key]) return;
				if (it[key] instanceof Array) {
					it[key] = it[key].map((children) => {
						return {
							...rebuilder[key],
							...children
						};
					});
				} else if (it[key] instanceof Object) {
					it[key] = {
						...rebuilder[key],
						...it[key]
					};
				}
			});

			return {
				...data,
				...it
			};
		});
		return result;
	}
}

export default Store;
