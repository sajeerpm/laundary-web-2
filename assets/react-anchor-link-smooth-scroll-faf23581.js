import{c as P,g as j}from"./object-assign-b1cffce8.js";import{r as R}from"./react-39a4f03e.js";var B={exports:{}};(function(M,D){(function(d,c){M.exports=c(R)})(typeof self<"u"?self:P,function(X){return function(d){var c={};function f(a){if(c[a])return c[a].exports;var t=c[a]={i:a,l:!1,exports:{}};return d[a].call(t.exports,t,t.exports,f),t.l=!0,t.exports}return f.m=d,f.c=c,f.d=function(a,t,s){f.o(a,t)||Object.defineProperty(a,t,{configurable:!1,enumerable:!0,get:s})},f.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return f.d(t,"a",t),t},f.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},f.p="",f(f.s=0)}([function(d,c,f){Object.defineProperty(c,"__esModule",{value:!0});var a=f(1),t=s(a);function s(p){return p&&p.__esModule?p:{default:p}}c.default=t.default},function(d,c,f){Object.defineProperty(c,"__esModule",{value:!0});var a=Object.assign||function(o){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o[n]=i[n])}return o},t=function(){function o(r,i){for(var n=0;n<i.length;n++){var m=i[n];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(r,m.key,m)}}return function(r,i,n){return i&&o(r.prototype,i),n&&o(r,n),r}}(),s=f(2),p=E(s);function E(o){return o&&o.__esModule?o:{default:o}}function h(o,r){var i={};for(var n in o)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(o,n)&&(i[n]=o[n]);return i}function w(o,r){if(!(o instanceof r))throw new TypeError("Cannot call a class as a function")}function L(o,r){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:o}function O(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);o.prototype=Object.create(r&&r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(o,r):o.__proto__=r)}var S=function(o){O(r,o);function r(i){w(this,r);var n=L(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return n.smoothScroll=n.smoothScroll.bind(n),n}return t(r,[{key:"componentDidMount",value:function(){f(3).polyfill()}},{key:"smoothScroll",value:function(n){var m=this;n.preventDefault();var _=function(){return 0};typeof this.props.offset<"u"&&(this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?_=this.props.offset:_=function(){return parseInt(m.props.offset)});var T=n.currentTarget.getAttribute("href").slice(1),b=document.getElementById(T),e=b.getBoundingClientRect().top+window.pageYOffset;window.scroll({top:e-_(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(n)}},{key:"render",value:function(){var n=this.props;n.offset;var m=h(n,["offset"]);return p.default.createElement("a",a({},m,{onClick:this.smoothScroll}))}}]),r}(s.Component);c.default=S},function(d,c){d.exports=X},function(d,c,f){(function(){function a(){var t=window,s=document;if("scrollBehavior"in s.documentElement.style&&t.__forceSmoothScrollPolyfill__!==!0)return;var p=t.HTMLElement||t.Element,E=468,h={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:p.prototype.scroll||S,scrollIntoView:p.prototype.scrollIntoView},w=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;function L(e){var l=["MSIE ","Trident/","Edge/"];return new RegExp(l.join("|")).test(e)}var O=L(t.navigator.userAgent)?1:0;function S(e,l){this.scrollLeft=e,this.scrollTop=l}function o(e){return .5*(1-Math.cos(Math.PI*e))}function r(e){if(e===null||typeof e!="object"||e.behavior===void 0||e.behavior==="auto"||e.behavior==="instant")return!0;if(typeof e=="object"&&e.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function i(e,l){if(l==="Y")return e.clientHeight+O<e.scrollHeight;if(l==="X")return e.clientWidth+O<e.scrollWidth}function n(e,l){var u=t.getComputedStyle(e,null)["overflow"+l];return u==="auto"||u==="scroll"}function m(e){var l=i(e,"Y")&&n(e,"Y"),u=i(e,"X")&&n(e,"X");return l||u}function _(e){var l;do e=e.parentNode,l=e===s.body;while(l===!1&&m(e)===!1);return l=null,e}function T(e){var l=w(),u,v,y,g=(l-e.startTime)/E;g=g>1?1:g,u=o(g),v=e.startX+(e.x-e.startX)*u,y=e.startY+(e.y-e.startY)*u,e.method.call(e.scrollable,v,y),(v!==e.x||y!==e.y)&&t.requestAnimationFrame(T.bind(t,e))}function b(e,l,u){var v,y,g,Y,k=w();e===s.body?(v=t,y=t.scrollX||t.pageXOffset,g=t.scrollY||t.pageYOffset,Y=h.scroll):(v=e,y=e.scrollLeft,g=e.scrollTop,Y=S),T({scrollable:v,method:Y,startTime:k,startX:y,startY:g,x:l,y:u})}t.scroll=t.scrollTo=function(){if(arguments[0]!==void 0){if(r(arguments[0])===!0){h.scroll.call(t,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:t.scrollX||t.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:t.scrollY||t.pageYOffset);return}b.call(t,s.body,arguments[0].left!==void 0?~~arguments[0].left:t.scrollX||t.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:t.scrollY||t.pageYOffset)}},t.scrollBy=function(){if(arguments[0]!==void 0){if(r(arguments[0])){h.scrollBy.call(t,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}b.call(t,s.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))}},p.prototype.scroll=p.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(r(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");h.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var e=arguments[0].left,l=arguments[0].top;b.call(this,this,typeof e>"u"?this.scrollLeft:~~e,typeof l>"u"?this.scrollTop:~~l)}},p.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(r(arguments[0])===!0){h.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},p.prototype.scrollIntoView=function(){if(r(arguments[0])===!0){h.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var e=_(this),l=e.getBoundingClientRect(),u=this.getBoundingClientRect();e!==s.body?(b.call(this,e,e.scrollLeft+u.left-l.left,e.scrollTop+u.top-l.top),t.getComputedStyle(e).position!=="fixed"&&t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):t.scrollBy({left:u.left,top:u.top,behavior:"smooth"})}}d.exports={polyfill:a}})()}])})})(B);var x=B.exports;const C=j(x);export{C as A};