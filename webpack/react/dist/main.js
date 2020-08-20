!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){e.exports=n(2)("./node_modules/react/index.js")},function(e,t,n){e.exports=n(5)()},function(e,t){e.exports=react},function(e,t,n){e.exports=n(2)("./node_modules/react-dom/index.js")},function(e,t){e.exports=jQuery},function(e,t,n){"use strict";var r=n(6);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){e.exports=n(2)("./node_modules/prop-types/lib/ReactPropTypesSecret.js")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),u=n(4),c=n.n(u),l=n(1),f=n.n(l),s=function(e){var t=e.label,n=e.text,r=e.type,i=e.id,a=e.value,u=e.handleChange;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:t},n),o.a.createElement("input",{type:r,className:"form-control",id:i,value:a,onChange:u,required:!0}))};s.propTypes={label:f.a.string.isRequired,text:f.a.string.isRequired,type:f.a.string.isRequired,id:f.a.string.isRequired,value:f.a.string.isRequired,handleChange:f.a.func.isRequired};var p=s;function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,i=m(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this)).state={seo_title:""},e.handleChange=e.handleChange.bind(v(e)),e}return t=a,(n=[{key:"handleChange",value:function(e){var t,n,r;console.log(c()("#article-form")),this.setState((t={},n=e.target.id,r=e.target.value,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}},{key:"render",value:function(){var e=this.state.seo_title;return o.a.createElement("form",{id:"article-form"},o.a.createElement(p,{text:"SEO title",label:"seo_title",type:"text",id:"seo_title",value:e,handleChange:this.handleChange}))}}])&&d(t.prototype,n),r&&d(t,r),a}(r.Component),j=document.getElementById("create-article-form");j&&a.a.render(o.a.createElement(O,null),j)}]);