import { defaultModules } from './modules/root';
import { cloneDeep } from '../utils/helper';
import Combo from './combo.vue';
import Frame from './frame/frame.vue';
import ToolsWidget from './tools/widget.vue';
import ToolsPreview from './tools/preview.vue';
import Editor from './editor/editor.vue';

export default (modules = defaultModules, opts = {}) => {
	try {
		let newCombo = cloneDeep(opts.Combo || Combo);
		let newFrame = cloneDeep(opts.Frame || Frame);
		let newToolsWidget = cloneDeep(opts.ToolsWidget || ToolsWidget);
		let newToolsPreview = cloneDeep(opts.ToolsPreview || ToolsPreview);
		let newEditor = cloneDeep(opts.Editor || Editor);

		let viewers = {};
		let editors = {};
		Object.keys(modules).forEach((item, index) => {
			let { Viewer: _Vditor, Editor: _Editor } = modules[item]; 
			viewers[`vm-${item}-viewer`] = _Vditor;
			editors[`vm-${item}-editor`] = _Editor;
		});
		// $options
		newCombo.modules = modules;
		newCombo.viewers = viewers;
		newCombo.editors = editors;

		// components
		newFrame.components = {
			...newFrame.components,
			...viewers
		};
		newEditor.components = {
			...newEditor.components,
			...editors
		};
		newCombo.components = {
			...newCombo.components,
			'vm-frame': newFrame,
			'vm-editor': newEditor,
			'vm-tools-widget': newToolsWidget,
		};

		newToolsPreview.components = {
			...newToolsPreview.components,
			...viewers
		};
		
		return {
			Combo: newCombo,
			Preview: newToolsPreview
		};
	} catch (e) {
		console.error(`[wya-vm/register]`, e);
		throw new Error(e);
	}
};
