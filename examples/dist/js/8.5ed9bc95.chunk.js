(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@wya/vc-loader/src/loader.js?!./src/pages/components/home/draggable/modules/array/editor.vue?vue&type=style&index=0&lang=scss&":function(e,t,n){(e.exports=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".v-x input{border:1px solid #000;margin:10px}",""])},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@wya/vc-loader/src/loader.js?!./src/pages/components/home/draggable/modules/array/editor.vue?vue&type=style&index=0&lang=scss&":function(e,t,n){var r=n("./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@wya/vc-loader/src/loader.js?!./src/pages/components/home/draggable/modules/array/editor.vue?vue&type=style&index=0&lang=scss&");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("2e6fc9e9",r,!0,{})},"./src/pages/components/home/draggable/modules/array/editor.vue?vue&type=style&index=0&lang=scss&":function(e,t,n){"use strict";var r=n("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@wya/vc-loader/src/loader.js?!./src/pages/components/home/draggable/modules/array/editor.vue?vue&type=style&index=0&lang=scss&");n.n(r).a},"./src/pages/containers/home/modules/home-draggable.vue":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/@wya/vc/lib/message/index.js"),a=n.n(r),o=n("./src/libs/vm.min.js"),s={name:"vm-tpl-viewer",components:{},props:{vm:{type:Object,default:function(){return{}}},id:String,x:Number,y:Number,z:Number,w:Number,h:Number,r:Number,name:[Number,String]},data:function(){return{}},computed:{},created:function(){},methods:{}},i=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:[{height:e.h?e.h+"px":"auto",width:e.w?e.w+"px":"auto",color:"black"}]},[e._v("\n\tid: "+e._s(e.id)+" "),n("br"),e._v("\n\tX: "+e._s(e.x)+" "),n("br"),e._v("\n\tY: "+e._s(e.y)+" "),n("br"),e._v("\n\tZ: "+e._s(e.z)+" "),n("br"),e._v("\n\tWidth: "+e._s(e.w?e.w:"auto")+" "),n("br"),e._v("\n\tHeight: "+e._s(e.h?e.h:"auto")+" "),n("br"),e._v("\n\tRotate: "+e._s(e.r)+" "),n("br"),e._v("\n\tName: "+e._s(e.name)+" "),n("br")])}),[],!1,null,"5aeac6fa",null).exports;var u={name:"vm-tpl-editor",components:{},inheritAttrs:!1,props:{w:Number,h:Number,r:Number,x:Number,y:Number,z:Number,name:[Number,String]},data:function(){return{}},computed:{},created:function(){},methods:{handleChange:function(e,t){this.$emit("change",function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,e.target.value))},handleClick:function(){this.$emit("change",{x:this.x+1})}}},d={module:"tpl",type:"基础",name:"模版",Viewer:l,Editor:Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex","flex-direction":"column"}},[e._v("\n\t"+e._s(e.x)+"\n\t"),n("div",[e._v("w: "),n("input",{domProps:{value:e.w},on:{input:function(t){return e.handleChange(t,"w")}}})]),e._v(" "),n("div",[e._v("h: "),n("input",{domProps:{value:e.h},on:{input:function(t){return e.handleChange(t,"h")}}})]),e._v(" "),n("div",[e._v("x: "),n("input",{domProps:{value:e.x},on:{input:function(t){return e.handleChange(t,"x")}}})]),e._v(" "),n("div",[e._v("y: "),n("input",{domProps:{value:e.y},on:{input:function(t){return e.handleChange(t,"y")}}})]),e._v(" "),n("div",[e._v("z: "),n("input",{domProps:{value:e.z},on:{input:function(t){return e.handleChange(t,"z")}}})]),e._v(" "),n("div",[e._v("r: "),n("input",{domProps:{value:e.r},on:{input:function(t){return e.handleChange(t,"r")}}})]),e._v(" "),n("div",[e._v("name: "),n("input",{domProps:{value:e.name},on:{input:function(t){return e.handleChange(t,"name")}}})])])}),[],!1,null,null,null).exports,data:{w:200,h:150,r:0,x:0,y:0,z:1,parent:!0,draggable:!0,rotatable:!0,resizable:!0,closeable:!0,active:!1,name:"名称"},dataValidity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.name?null:{error:"输入框内容必填"}}},c={name:"vm-tpl-viewer",components:{},props:{vm:{type:Object,default:function(){return{}}},id:String,x:Number,y:Number,z:Number,w:Number,h:Number,r:Number,name:[Number,String]},data:function(){return{}},computed:{},created:function(){},methods:{}},m=Object(i.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:[{height:e.h?e.h+"px":"auto",width:e.w?e.w+"px":"auto",color:"black"}]},[e._v("\n\tid: "+e._s(e.id)+" "),n("br"),e._v("\n\tX: "+e._s(e.x)+" "),n("br"),e._v("\n\tY: "+e._s(e.y)+" "),n("br"),e._v("\n\tZ: "+e._s(e.z)+" "),n("br"),e._v("\n\tWidth: "+e._s(e.w?e.w:"auto")+" "),n("br"),e._v("\n\tHeight: "+e._s(e.h?e.h:"auto")+" "),n("br"),e._v("\n\tRotate: "+e._s(e.r)+" "),n("br"),e._v("\n\tName: "+e._s(e.name)+" "),n("br")])}),[],!1,null,null,null).exports;var p={name:"vm-array-editor",components:{},inheritAttrs:!1,props:{},data:function(){return{}},computed:{},created:function(){},methods:{handleChange:function(e,t){this.$emit("change",function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,e.target.value))},handleClick:function(){this.$emit("change",{x:this.x+1})}}},h=(n("./src/pages/components/home/draggable/modules/array/editor.vue?vue&type=style&index=0&lang=scss&"),{module:"array",type:"营销",name:"数组模版",widgets:[{render:function(e,t){return e("div",["一行两列"])}},{name:"一行两列",image:"https://avatars3.githubusercontent.com/u/34465004?s=200&v=4"}],Viewer:m,Editor:Object(i.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-x",staticStyle:{display:"flex","flex-direction":"column"}},[n("div",[e._v("w: "),n("input",{domProps:{value:e.$attrs.w},on:{input:function(t){return e.handleChange(t,"w")}}})]),e._v(" "),n("div",[e._v("h: "),n("input",{domProps:{value:e.$attrs.h},on:{input:function(t){return e.handleChange(t,"h")}}})]),e._v(" "),n("div",[e._v("x: "),n("input",{domProps:{value:e.$attrs.x},on:{input:function(t){return e.handleChange(t,"x")}}})]),e._v(" "),n("div",[e._v("y: "),n("input",{domProps:{value:e.$attrs.y},on:{input:function(t){return e.handleChange(t,"y")}}})]),e._v(" "),n("div",[e._v("z: "),n("input",{domProps:{value:e.$attrs.z},on:{input:function(t){return e.handleChange(t,"z")}}})]),e._v(" "),n("div",[e._v("r: "),n("input",{domProps:{value:e.$attrs.r},on:{input:function(t){return e.handleChange(t,"r")}}})]),e._v(" "),n("div",[e._v("name: "),n("input",{domProps:{value:e.$attrs.name},on:{input:function(t){return e.handleChange(t,"name")}}})])])}),[],!1,null,null,null).exports,data:function(e){return{w:200,h:150,r:0,x:0,y:0,z:1,parent:!1,closeable:!0,name:"名称".concat(e)}},dataValidity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.name?null:{error:"输入框内容必填"}}}),v=n("./node_modules/@wya/vc/lib/input/index.js"),b=n.n(v);var g={name:"vm-page-editor",components:{"vc-input-number":b.a.Number},inheritAttrs:!1,props:{},data:function(){return{}},computed:{},created:function(){},methods:{handleChange:function(e,t){this.$emit("change",function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,e))},handleClick:function(){this.$emit("change",{x:this.x+1})}}},_={module:"page",Viewer:{render:function(e){return null}},Editor:Object(i.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex","flex-direction":"column"}},[n("div",{staticStyle:{padding:"20px"}},[n("span",[e._v("屏幕大小：")]),e._v(" "),n("vc-input-number",{staticStyle:{width:"88px","margin-right":"23px"},attrs:{value:e.$attrs.w},on:{input:function(t){return e.handleChange(arguments[0],"w")}}}),e._v(" "),n("vc-input-number",{staticStyle:{width:"88px"},on:{input:function(t){return e.handleChange(arguments[0],"h")}},model:{value:e.$attrs.h,callback:function(t){e.$set(e.$attrs,"h",t)},expression:"$attrs.h"}})],1)])}),[],!1,null,null,null).exports,data:{w:window.screen.width,h:window.screen.height,parent:!1,draggable:!1,rotatable:!1,resizable:!1,closeable:!1,active:!1},dataValidity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.w||e.h?null:{error:"输入框内容必填"}}},f=n("./node_modules/@wya/vc/lib/echarts/index.js"),x={name:"vc-echarts-basic",components:{"vc-echarts":n.n(f).a},props:{id:String,w:Number,h:Number,x:Number,y:Number,z:Number,r:Number,name:String,bg:String},data:function(){for(var e=[],t=0;t<=360;t++){var n=t/180*Math.PI,r=Math.sin(2*n)*Math.cos(2*n);e.push([r,t])}return{fakeData:e}},computed:{options:function(){return{title:{text:this.name},legend:{data:["line"]},polar:{center:["50%","54%"]},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},angleAxis:{type:"value",startAngle:0},radiusAxis:{min:0},series:[{coordinateSystem:"polar",name:"line",type:"line",showSymbol:!1,data:this.fakeData}],animationDuration:2e3}}}},y=Object(i.a)(x,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{style:{width:this.w+"px",height:this.h+"px",background:this.bg,zIndex:this.z}},[t("vc-echarts",{attrs:{options:this.options,"auto-resize":!0}})],1)}),[],!1,null,null,null).exports;var w={name:"vm-echart-editor",components:{"vc-input-number":b.a.Number,"vc-input":b.a},inheritAttrs:!1,props:{},data:function(){return{}},computed:{},created:function(){},methods:{handleChange:function(e,t){this.$emit("change",function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,e))},handleClick:function(){this.$emit("change",{x:this.x+1})}}},j={tpl:d,array:h,page:_,echart:{module:"echart",type:"基础",name:"图表",widgets:[{render:function(e,t){return e("div",["图表一"])}},{name:"图表二"}],Viewer:y,Editor:Object(i.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex","flex-direction":"column"}},[n("div",{staticStyle:{padding:"20px"}},[n("span",[e._v("大小：")]),e._v(" "),n("vc-input-number",{staticStyle:{width:"88px","margin-right":"23px"},attrs:{value:e.$attrs.w},on:{input:function(t){return e.handleChange(arguments[0],"w")}}}),e._v(" "),n("vc-input-number",{staticStyle:{width:"88px"},on:{input:function(t){return e.handleChange(arguments[0],"h")}},model:{value:e.$attrs.h,callback:function(t){e.$set(e.$attrs,"h",t)},expression:"$attrs.h"}})],1),e._v(" "),n("div",{staticStyle:{padding:"20px"}},[n("span",[e._v("位置：")]),e._v(" "),n("vc-input-number",{staticStyle:{width:"88px","margin-right":"23px"},attrs:{value:e.$attrs.x},on:{input:function(t){return e.handleChange(arguments[0],"x")}}}),e._v(" "),n("vc-input-number",{staticStyle:{width:"88px"},on:{input:function(t){return e.handleChange(arguments[0],"y")}},model:{value:e.$attrs.y,callback:function(t){e.$set(e.$attrs,"y",t)},expression:"$attrs.y"}})],1),e._v(" "),n("div",{staticStyle:{padding:"20px"}},[n("span",[e._v("角度：")]),e._v(" "),n("vc-input-number",{staticStyle:{width:"88px","margin-right":"23px"},attrs:{value:e.$attrs.r},on:{input:function(t){return e.handleChange(arguments[0],"r")}}})],1),e._v(" "),n("div",{staticStyle:{padding:"20px"}},[n("span",[e._v("层级：")]),e._v(" "),n("vc-input-number",{staticStyle:{width:"88px","margin-right":"23px"},attrs:{value:e.$attrs.z},on:{input:function(t){return e.handleChange(arguments[0],"z")}}})],1),e._v(" "),n("div",{staticStyle:{padding:"20px"}},[n("span",[e._v("名字：")]),e._v(" "),n("vc-input",{staticStyle:{width:"88px","margin-right":"23px"},attrs:{value:e.$attrs.name},on:{input:function(t){return e.handleChange(arguments[0],"name")}}})],1)])}),[],!1,null,null,null).exports,data:function(e){return{w:200,h:150,r:0,x:0,y:0,z:e+1,parent:!0,draggable:!0,rotatable:!0,resizable:!0,closeable:!0,active:!1,name:"样式".concat(e+1),bg:e?"red":"blue"}},dataValidity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.name?null:{error:"输入框内容必填"}}}},$=Object(o.createVMDrags)(j),C=$.Combo,S=($.Preview,{name:"tpl-links",components:{"vm-combo":C},data:function(){return{list:[{id:Math.random(),module:"page",w:window.screen.width,h:window.screen.height}],style:{},theme:"dark",showRuler:!0}},computed:{},mounted:function(){this.style={width:window.innerWidth-40+"px",height:window.innerHeight-40+"px"}},methods:{handleSave:function(e){console.log(e,this.list)},handleError:function(e){e.type;var t=e.msg;a.a.error(t)}}}),N={name:"vm-home-draggable",components:{"vm-content":Object(i.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{position:"absolute",top:"0"},on:{click:function(t){e.theme}}},[e._v("\n\t\t主题: "+e._s(e.theme)+" (点我切换)\n\t")]),e._v(" "),n("div",{staticStyle:{position:"absolute",top:"0",left:"200px"},on:{click:function(t){e.showRuler=!e.showRuler}}},[e._v("\n\t\t标尺: "+e._s(e.showRuler?"展示":"隐藏")+" (点我切换)\n\t")]),e._v(" "),n("vm-combo",{style:e.style,attrs:{"frame-style":{border:"1px solid #5495f6",background:"#191C34"},"frame-w":1920,"frame-h":1080,"show-lines":!1,"show-ruler":e.showRuler,theme:e.theme},on:{save:e.handleSave,error:e.handleError},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}})],1)}),[],!1,null,"9192f5a6",null).exports},data:function(){return{}},created:function(){},methods:{}},P=Object(i.a)(N,(function(){var e=this.$createElement,t=this._self._c||e;return t("set-title",{staticStyle:{padding:"20px"},attrs:{title:"home-draggable"}},[t("vm-content")],1)}),[],!1,null,"7d84cb8a",null);t.default=P.exports}}]);