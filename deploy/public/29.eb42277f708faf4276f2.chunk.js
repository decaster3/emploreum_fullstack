webpackJsonp([29],{"./app/containers/Chat/index.js":function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=(r("./node_modules/react/index.js"),r("./node_modules/prop-types/index.js"),r("./node_modules/react-loadable/lib/index.js")),t=r.n(o),a=t()({loader:function(){return r.e(33).then(r.bind(null,"./app/containers/Chat/Interlocators/index.js"))},loading:function(){return null}});r.d(n,"ChatCreator",function(){return i});var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,r,o,t){var a=n&&n.defaultProps,l=arguments.length-3;if(r||0===l||(r={}),r&&a)for(var i in a)void 0===r[i]&&(r[i]=a[i]);else r||(r=a||{});if(1===l)r.children=t;else if(l>1){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+3];r.children=d}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),i=function(e){return l("div",{className:"col-lg-12"},void 0,l("div",{className:"chat-view"},void 0,l(a,{chatId:e.match.params.chatId})))};n.default=i}});