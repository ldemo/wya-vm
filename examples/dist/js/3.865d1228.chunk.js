(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./node_modules/@wya/vc/lib/copy/copy.js":function(e,s,o){"use strict";var t=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=t(o("./node_modules/@babel/runtime/regenerator/index.js")),l=t(o("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),a=t(o("./node_modules/@wya/vc/lib/message/index.js")),d=o("./node_modules/@wya/vc/lib/copy/utils.js"),r={name:"vc-copy",props:{value:String,tag:{type:[String,Object,Function],default:"div"}},data:function(){return{}},computed:{},methods:{handleClick:function(){var e=(0,l.default)(n.default.mark(function e(s){var o,t,l,r;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o=this.value,t=this.$listeners,l=t.after,r=t.before,e.t0=r,!e.t0){e.next=7;break}return e.next=6,r(s,o);case 6:o=e.sent;case 7:(0,d.copyToClipboard)(o)&&(l&&l(o),!l&&a.default.success({content:"复制成功"})),e.next=14;break;case 11:e.prev=11,e.t1=e.catch(0),this.$emit("error",e.t1);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(s){return e.apply(this,arguments)}}()},render:function(e){return e(this.tag,{on:{click:this.handleClick}},this.$slots.default)}};s.default=r},"./node_modules/@wya/vc/lib/copy/index.js":function(e,s,o){"use strict";var t=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return n.default}});var n=t(o("./node_modules/@wya/vc/lib/copy/copy.js"))},"./node_modules/@wya/vc/lib/copy/utils.js":function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.copyToClipboard=s.toggleSelection=void 0;var t=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var s=document.activeElement,o=[],t=0;t<e.rangeCount;t++)o.push(e.getRangeAt(t));switch(s.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":s.blur();break;default:s=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach(function(s){e.addRange(s)}),s&&s.focus()}};s.toggleSelection=t;s.copyToClipboard=function(e){var s,o,n,l,a;arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(s=t(),o=document.createRange(),n=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",document.body.appendChild(l),o.selectNode(l),n.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");a=!0}catch(s){try{window.clipboardData.setData("text",e),a=!0}catch(e){console.log(e)}}finally{n&&("function"==typeof n.removeRange?n.removeRange(o):n.removeAllRanges()),l&&document.body.removeChild(l),s()}return a}},"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@wya/vc-loader/src/loader.js!./src/pages/components/home/basic/content.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".v-home-basic-main li{padding:5px}",""])},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@wya/vc-loader/src/loader.js!./src/pages/components/home/basic/content.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){var t=o("./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@wya/vc-loader/src/loader.js!./src/pages/components/home/basic/content.vue?vue&type=style&index=0&lang=scss&");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,o("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("4f0ab706",t,!0,{})},"./src/pages/components/home/basic/content.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){"use strict";var t=o("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@wya/vc-loader/src/loader.js!./src/pages/components/home/basic/content.vue?vue&type=style&index=0&lang=scss&");o.n(t).a},"./src/pages/containers/home/modules/home-basic.vue":function(e,s,o){"use strict";o.r(s);var t=o("./node_modules/@wya/vc/lib/copy/index.js"),n=o.n(t),l=o("./src/pages/containers/home/app.js"),a={name:"tpl-links",components:{"vc-copy":n.a},data:function(){return{list:l.a}},created:function(){},methods:{}},d=(o("./src/pages/components/home/basic/content.vue?vue&type=style&index=0&lang=scss&"),o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),r={name:"vm-home-basic",components:{"vm-content":Object(d.a)(a,function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"v-home-basic-main"},[o("ul",e._l(e.list,function(s,t){return String(t)?o("li",{key:t},[o("router-link",{attrs:{to:s.path}},[e._v(e._s(s.name))]),e._v(" "),o("vc-copy",{attrs:{value:s.path,tag:"span"}},[e._v("复制")])],1):e._e()}),0)])},[],!1,null,null,null).exports},data:function(){return{}},created:function(){},methods:{}},c=Object(d.a)(r,function(){var e=this.$createElement,s=this._self._c||e;return s("set-title",{staticStyle:{padding:"20px"},attrs:{title:"home-basic"}},[s("vm-content")],1)},[],!1,null,"d9b9f6c6",null);s.default=c.exports}}]);