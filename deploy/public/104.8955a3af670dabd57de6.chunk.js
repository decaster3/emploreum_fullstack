webpackJsonp([104],{"./app/components/Company/TestEdit/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=t("./node_modules/react/index.js"),l=t.n(u),p=(t("./node_modules/prop-types/index.js"),t("./node_modules/react-loadable/lib/index.js")),a=t.n(p),s=a()({loader:function(){return t.e(103).then(t.bind(null,"./app/components/Company/TestEdit/TestEditWrapper/index.js"))},loading:function(){return null}}),f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,u=arguments.length-3;if(t||0===u||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===u)t.children=r;else if(u>1){for(var p=Array(u),a=0;a<u;a++)p[a]=arguments[a+3];t.children=p}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),c=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),d=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),c(n,[{key:"render",value:function(){return f(s,{name:this.props.testInfo.name,testId:this.props.testId},void 0,this.props.questions)}}]),n}(l.a.Component);n.default=d}});