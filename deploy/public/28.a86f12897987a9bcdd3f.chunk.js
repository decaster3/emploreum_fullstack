webpackJsonp([28],{"./app/containers/NotFoundPage/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/react/index.js"),u=n.n(a),f=n("./node_modules/react-intl/lib/index.js"),l=Object(f.defineMessages)({header:{id:"app.components.NotFoundPage.header",defaultMessage:"This is NotFoundPage component!"}}),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+3];n.children=f}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return c("h1",{},void 0,u.a.createElement(f.FormattedMessage,l.header))}}]),t}(u.a.PureComponent);t.default=p}});