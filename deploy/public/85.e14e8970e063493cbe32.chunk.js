webpackJsonp([85],{"./app/components/SpecificationsSkills/ChoosenSkill/index.js":function(e,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=i("./node_modules/react/index.js"),l=(i.n(n),i("./node_modules/prop-types/index.js")),r=(i.n(l),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,i,n,l){var r=o&&o.defaultProps,t=arguments.length-3;if(i||0===t||(i={}),i&&r)for(var a in r)void 0===i[a]&&(i[a]=r[a]);else i||(i=r||{});if(1===t)i.children=l;else if(t>1){for(var s=Array(t),c=0;c<t;c++)s[c]=arguments[c+3];i.children=s}return{$$typeof:e,type:o,key:void 0===n?null:""+n,ref:null,props:i,_owner:null}}}()),t=r("i",{className:"fa fa-trash"}),a=function(e){var o=e.photoPath,i=e.skill,n=e.skillName,l=e.deleteSkill,a=e.specification;return r("div",{className:"col-md-3 col-sm-6",style:{marginTop:"15px"}},void 0,r("div",{className:"award-item"},void 0,r("div",{className:"hexagon"},void 0,r("img",{src:o,alt:"Skill"})),r("span",{},void 0,n),r("button",{onClick:function(){return l(a,i)}},void 0,t)))};o.default=a}});