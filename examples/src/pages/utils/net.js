/**
 * ajax
 * @param  {[type]} url     地址
 * @param  {[type]} method  请求类型
 * @param  {[type]} body    请求的参数
 * @param  {Object} options 扩展
 *
 */
import { ajaxFn } from 'wya-fetch';
import { Message } from 'iview';

const loadingFn = (msg) => {
	Message.destroy();
	Message.loading(msg || '加载中...', 0);
};
const loadedFn = () => {
	Message.destroy();
};

const otherFn = (res, resolve, reject) => {
	switch (res.status) {
		case -1:
			// clearLoginAuth();
			break;
		default:
			break;
	}
};
const defaultOptions = {
	onLoading: loadingFn,
	onLoaded: loadedFn,
	onOther: otherFn,
	// requestType: 'form-data:json',
};

const ajax = ajaxFn(defaultOptions);
const net = {
	ajax
};
export default net;
