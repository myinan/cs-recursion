(()=>{var e={205:()=>{console.log(function(e){const t=[0,1];for(let e=2;e<8;e+=1){const n=t[e-2]+t[e-1];t.push(n)}return t}()),console.log(function(e){const t=[];function n(e){return e<=1?e:n(e-1)+n(e-2)}for(let e=0;e<8;e+=1)t.push(n(e));return t}())},845:()=>{const e=function e(t){if(t.length<=1)return t;const n=Math.floor(t.length/2),r=t.slice(0,n),o=t.slice(n);return function(e,t){const n=[];let r=0,o=0;for(;r<e.length&&o<t.length;)e[r]<t[o]?(n.push(e[r]),r+=1):(n.push(t[o]),o+=1);return n.concat(e.slice(r),t.slice(o))}(e(r),e(o))}([3,2,1,13,8,5,0,1]);console.log(e)},426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(537),o=n.n(r),s=n(645),a=n.n(s)()(o());a.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  background-color: gray;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,sBAAsB;AACxB",sourcesContent:["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  background-color: gray;\n}"],sourceRoot:""}]);const c=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(a[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),s="/*# ".concat(o," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},a=[],c=0;c<e.length;c++){var i=e[c],u=r.base?i[0]+r.base:i[0],l=s[u]||0,p="".concat(u," ").concat(l);s[u]=l+1;var f=n(p),d={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var v=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:v,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var c=n(s[a]);t[c].references--}for(var i=r(e,o),u=0;u<s.length;u++){var l=n(s[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=i}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),s=n(569),a=n.n(s),c=n(565),i=n.n(c),u=n(216),l=n.n(u),p=n(589),f=n.n(p),d=n(426),v={};v.styleTagTransform=f(),v.setAttributes=i(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(d.Z,v),d.Z&&d.Z.locals&&d.Z.locals,n(205),n(845)})()})();
//# sourceMappingURL=bundle.js.map