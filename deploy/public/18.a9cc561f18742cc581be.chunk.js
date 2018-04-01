webpackJsonp([18],{"./app/containers/Vacancy/TestStart/index.js":function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;switch(arguments[1].type){case g:return e.set("startingTest",!e.get("startingTest"));default:return e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{startingTest:x(e),vacancyId:y(e)}}function u(e){return{startTest:function(t){return e(E(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var c=n("./node_modules/react/index.js"),l=n.n(c),f=(n("./node_modules/prop-types/index.js"),n("./node_modules/react-redux/lib/index.js")),d=n("./node_modules/redux/lib/index.js"),p=n("./app/utils/injectReducer.js"),h=n("./node_modules/reselect/lib/index.js"),m=function(e){return e.get("testStart")},b=function(e){return e.get("route")},x=Object(h.createSelector)(m,function(e){return e.get("startingTest")}),y=Object(h.createSelector)(b,function(e){return e.get("location").get("pathname").split("/")[3]}),j=n("./node_modules/immutable/dist/immutable.js"),g="CHANGE_START_TEST_BUTTON_STATUS",v=Object(j.fromJS)({startingTest:!1}),w=o,_=n("./node_modules/react-router-redux/index.js"),T=n("./app/services/api/VacanciesSearch.js"),S=function(){return{type:g}},E=function(e){return function(t){t(S()),Object(T.g)(e,function(){t(S()),t(Object(_.push)("/employee/vacancy/"+e+"/test/"))},function(e){console.log(e),t(S())},t)}},C=n("./node_modules/react-loadable/lib/index.js"),R=n.n(C),O=R()({loader:function(){return n.e(49).then(n.bind(null,"./app/components/Vacancy/Test/StartTest/index.js"))},loading:function(){return null}});n.d(t,"TestStart",function(){return P});var A=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var s=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a]);else n||(n=s||{});if(1===i)n.children=r;else if(i>1){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),P=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),L(t,[{key:"render",value:function(){return A(O,{startingTest:this.props.startingTest,vacancyId:this.props.vacancyId,startTest:this.props.startTest})}}]),t}(l.a.Component),U=Object(f.connect)(a,u),B=Object(p.a)({key:"testStart",reducer:w});t.default=Object(d.compose)(B,U)(P)},"./app/global-constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o="http://89.223.28.86:5000"},"./app/services/AxiosService.js":function(e,t,n){"use strict";function o(e,t,n,o){return a.a.get(e,{withCredentials:!0}).then(function(e){return new Promise(function(n){return n(t(e.data))})}).catch(function(e){return e.response?401!==e.response.status&&403!==e.response.status||(o({type:l.b,payload:{userState:l.a,userInformation:{}}}),o(Object(u.push)("/")),p()):(c.toast.dismiss(),d()),new Promise(function(t){return t(n(e))})})}function r(e,t,n,o,r){var s=(arguments.length<=5?void 0:arguments[5])||1e3;return a.a.post(e,t,{withCredentials:!0,timeout:s}).then(function(e){return new Promise(function(t){return t(n(e.data))})}).catch(function(e){return e.response.status?401!==e.response.status&&403!==e.response.status||(r({type:l.b,payload:{userState:l.a,userInformation:{}}}),r(Object(u.push)("/")),p()):(c.toast.dismiss(),d()),new Promise(function(t){return t(o(e))})})}function s(e,t,n,o,r){return a.a.post(e,t,{withCredentials:!0,headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return new Promise(function(t){return t(n(e.data))})}).catch(function(e){return e.response.status&&(401===e.response.status||403===e.response.status?(r({type:l.b,payload:{userState:l.a,userInformation:{}}}),r(Object(u.push)("/")),p()):(c.toast.dismiss(),d())),new Promise(function(t){return t(o(e))})})}var i=n("./node_modules/axios/index.js"),a=n.n(i),u=n("./node_modules/react-router-redux/index.js"),c=(n.n(u),n("./node_modules/react-toastify/lib/index.js")),l=(n.n(c),n("./app/containers/UserSession/constants.js")),f={get:o,post:r,postFile:s},d=function(){return Object(c.toast)("Lost connection to the server. Please check the connection to the Internet.",{hideProgressBar:!0,autoClose:1e4,type:c.toast.TYPE.ERROR})},p=function(){return Object(c.toast)("Your session is deprecated, for security reasons, please re-enter the application",{hideProgressBar:!0,autoClose:1e4,type:c.toast.TYPE.ERROR})};t.a=f},"./app/services/api/VacanciesSearch.js":function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"d",function(){return i}),n.d(t,"g",function(){return a}),n.d(t,"b",function(){return u}),n.d(t,"f",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"h",function(){return d});var o=n("./app/services/AxiosService.js"),r=n("./app/global-constants.js"),s=function(e,t,n){o.a.get(r.a+"/employee/vacancy/recommended",e,t,n)},i=function(e,t,n,s){o.a.get(r.a+"/user/search?filters="+e,t,n,s)},a=function(e,t,n,s){o.a.get(r.a+"/test/"+e+"/start",t,n,s)},u=function(e,t,n,s){var i=e.id;o.a.get(r.a+"/employee/vacancy/enroll/"+i,t,n,s)},c=function(e,t,n,s){var i=e.id;o.a.get(r.a+"/company/vacancy/info/"+i,t,n,s)},l=function(e,t,n,s){var i=e.id;o.a.get(r.a+"/company/vacancy/"+i+"/specification",t,n,s)},f=function(e,t,n,s){o.a.get(r.a+"/company/vacancy/"+e+"/available",t,n,s)},d=function(e,t,n,o){o(),setTimeout(1e3,function(){t()})}},"./node_modules/axios/index.js":function(e,t,n){e.exports=n("./node_modules/axios/lib/axios.js")},"./node_modules/axios/lib/adapters/xhr.js":function(e,t,n){"use strict";var o=n("./node_modules/axios/lib/utils.js"),r=n("./node_modules/axios/lib/core/settle.js"),s=n("./node_modules/axios/lib/helpers/buildURL.js"),i=n("./node_modules/axios/lib/helpers/parseHeaders.js"),a=n("./node_modules/axios/lib/helpers/isURLSameOrigin.js"),u=n("./node_modules/axios/lib/core/createError.js"),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("./node_modules/axios/lib/helpers/btoa.js");e.exports=function(e){return new Promise(function(t,l){var f=e.data,d=e.headers;o.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var b=e.auth.username||"",x=e.auth.password||"";d.Authorization="Basic "+c(b+":"+x)}if(p.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,o=e.responseType&&"text"!==e.responseType?p.response:p.responseText,s={data:o,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};r(t,l,s),p=null}},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},o.isStandardBrowserEnv()){var y=n("./node_modules/axios/lib/helpers/cookies.js"),j=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;j&&(d[e.xsrfHeaderName]=j)}if("setRequestHeader"in p&&o.forEach(d,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},"./node_modules/axios/lib/axios.js":function(e,t,n){"use strict";function o(e){var t=new i(e),n=s(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var r=n("./node_modules/axios/lib/utils.js"),s=n("./node_modules/axios/lib/helpers/bind.js"),i=n("./node_modules/axios/lib/core/Axios.js"),a=n("./node_modules/axios/lib/defaults.js"),u=o(a);u.Axios=i,u.create=function(e){return o(r.merge(a,e))},u.Cancel=n("./node_modules/axios/lib/cancel/Cancel.js"),u.CancelToken=n("./node_modules/axios/lib/cancel/CancelToken.js"),u.isCancel=n("./node_modules/axios/lib/cancel/isCancel.js"),u.all=function(e){return Promise.all(e)},u.spread=n("./node_modules/axios/lib/helpers/spread.js"),e.exports=u,e.exports.default=u},"./node_modules/axios/lib/cancel/Cancel.js":function(e,t,n){"use strict";function o(e){this.message=e}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,e.exports=o},"./node_modules/axios/lib/cancel/CancelToken.js":function(e,t,n){"use strict";function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}var r=n("./node_modules/axios/lib/cancel/Cancel.js");o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},"./node_modules/axios/lib/cancel/isCancel.js":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"./node_modules/axios/lib/core/Axios.js":function(e,t,n){"use strict";function o(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var r=n("./node_modules/axios/lib/defaults.js"),s=n("./node_modules/axios/lib/utils.js"),i=n("./node_modules/axios/lib/core/InterceptorManager.js"),a=n("./node_modules/axios/lib/core/dispatchRequest.js");o.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(r,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.forEach(["delete","get","head","options"],function(e){o.prototype[e]=function(t,n){return this.request(s.merge(n||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){o.prototype[e]=function(t,n,o){return this.request(s.merge(o||{},{method:e,url:t,data:n}))}}),e.exports=o},"./node_modules/axios/lib/core/InterceptorManager.js":function(e,t,n){"use strict";function o(){this.handlers=[]}var r=n("./node_modules/axios/lib/utils.js");o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},"./node_modules/axios/lib/core/createError.js":function(e,t,n){"use strict";var o=n("./node_modules/axios/lib/core/enhanceError.js");e.exports=function(e,t,n,r,s){var i=new Error(e);return o(i,t,n,r,s)}},"./node_modules/axios/lib/core/dispatchRequest.js":function(e,t,n){"use strict";function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=n("./node_modules/axios/lib/utils.js"),s=n("./node_modules/axios/lib/core/transformData.js"),i=n("./node_modules/axios/lib/cancel/isCancel.js"),a=n("./node_modules/axios/lib/defaults.js"),u=n("./node_modules/axios/lib/helpers/isAbsoluteURL.js"),c=n("./node_modules/axios/lib/helpers/combineURLs.js");e.exports=function(e){return o(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return o(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(o(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},"./node_modules/axios/lib/core/enhanceError.js":function(e,t,n){"use strict";e.exports=function(e,t,n,o,r){return e.config=t,n&&(e.code=n),e.request=o,e.response=r,e}},"./node_modules/axios/lib/core/settle.js":function(e,t,n){"use strict";var o=n("./node_modules/axios/lib/core/createError.js");e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"./node_modules/axios/lib/core/transformData.js":function(e,t,n){"use strict";var o=n("./node_modules/axios/lib/utils.js");e.exports=function(e,t,n){return o.forEach(n,function(n){e=n(e,t)}),e}},"./node_modules/axios/lib/defaults.js":function(e,t,n){"use strict";(function(t){function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var r=n("./node_modules/axios/lib/utils.js"),s=n("./node_modules/axios/lib/helpers/normalizeHeaderName.js"),i={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n("./node_modules/axios/lib/adapters/xhr.js"):void 0!==t&&(e=n("./node_modules/axios/lib/adapters/xhr.js")),e}(),transformRequest:[function(e,t){return s(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){a.headers[e]={}}),r.forEach(["post","put","patch"],function(e){a.headers[e]=r.merge(i)}),e.exports=a}).call(t,n("./node_modules/process/browser.js"))},"./node_modules/axios/lib/helpers/bind.js":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},"./node_modules/axios/lib/helpers/btoa.js":function(e,t,n){"use strict";function o(){this.message="String contains an invalid character"}function r(e){for(var t,n,r=String(e),i="",a=0,u=s;r.charAt(0|a)||(u="=",a%1);i+=u.charAt(63&t>>8-a%1*8)){if((n=r.charCodeAt(a+=.75))>255)throw new o;t=t<<8|n}return i}var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=r},"./node_modules/axios/lib/helpers/buildURL.js":function(e,t,n){"use strict";function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=n("./node_modules/axios/lib/utils.js");e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},"./node_modules/axios/lib/helpers/combineURLs.js":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"./node_modules/axios/lib/helpers/cookies.js":function(e,t,n){"use strict";var o=n("./node_modules/axios/lib/utils.js");e.exports=o.isStandardBrowserEnv()?function(){return{write:function(e,t,n,r,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),o.isString(r)&&a.push("path="+r),o.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"./node_modules/axios/lib/helpers/isAbsoluteURL.js":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"./node_modules/axios/lib/helpers/isURLSameOrigin.js":function(e,t,n){"use strict";var o=n("./node_modules/axios/lib/utils.js");e.exports=o.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return t=e(window.location.href),function(n){var r=o.isString(n)?e(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},"./node_modules/axios/lib/helpers/normalizeHeaderName.js":function(e,t,n){"use strict";var o=n("./node_modules/axios/lib/utils.js");e.exports=function(e,t){o.forEach(e,function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])})}},"./node_modules/axios/lib/helpers/parseHeaders.js":function(e,t,n){"use strict";var o=n("./node_modules/axios/lib/utils.js"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(o.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=o.trim(e.substr(0,s)).toLowerCase(),n=o.trim(e.substr(s+1)),t){if(i[t]&&r.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},"./node_modules/axios/lib/helpers/spread.js":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"./node_modules/axios/lib/utils.js":function(e,t,n){"use strict";function o(e){return"[object Array]"===T.call(e)}function r(e){return"[object ArrayBuffer]"===T.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===T.call(e)}function d(e){return"[object File]"===T.call(e)}function p(e){return"[object Blob]"===T.call(e)}function h(e){return"[object Function]"===T.call(e)}function m(e){return l(e)&&h(e.pipe)}function b(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function j(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function g(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=g(t[n],e):t[n]=e}for(var t={},n=0,o=arguments.length;n<o;n++)j(arguments[n],e);return t}function v(e,t,n){return j(t,function(t,o){e[o]=n&&"function"==typeof t?w(t,n):t}),e}var w=n("./node_modules/axios/lib/helpers/bind.js"),_=n("./node_modules/is-buffer/index.js"),T=Object.prototype.toString;e.exports={isArray:o,isArrayBuffer:r,isBuffer:_,isFormData:s,isArrayBufferView:i,isString:a,isNumber:u,isObject:l,isUndefined:c,isDate:f,isFile:d,isBlob:p,isFunction:h,isStream:m,isURLSearchParams:b,isStandardBrowserEnv:y,forEach:j,merge:g,extend:v,trim:x}},"./node_modules/is-buffer/index.js":function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function o(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||o(e)||!!e._isBuffer)}},"./node_modules/process/browser.js":function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function s(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){m&&p&&(m=!1,p.length?h=p.concat(h):b=-1,h.length&&a())}function a(){if(!m){var e=r(i);m=!0;for(var t=h.length;t;){for(p=h,h=[];++b<t;)p&&p[b].run();b=-1,t=h.length}p=null,m=!1,s(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var p,h=[],m=!1,b=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||m||r(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}}});