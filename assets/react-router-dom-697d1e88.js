import{r as s}from"./react-39a4f03e.js";import{R as C,N as E,u as x,a as O,b as P,c as B}from"./react-router-e246df07.js";import{c as j,s as K,b as w}from"./@remix-run-1dd2da88.js";/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},m.apply(this,arguments)}function F(e,t){if(e==null)return{};var o={},r=Object.keys(e),a,n;for(n=0;n<r.length;n++)a=r[n],!(t.indexOf(a)>=0)&&(o[a]=e[a]);return o}function _(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function H(e,t){return e.button===0&&(!t||t==="_self")&&!_(e)}const N=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function G(e){let{basename:t,children:o,window:r}=e,a=s.useRef();a.current==null&&(a.current=j({window:r,v5Compat:!0}));let n=a.current,[l,u]=s.useState({action:n.action,location:n.location});return s.useLayoutEffect(()=>n.listen(u),[n]),s.createElement(C,{basename:t,children:o,location:l.location,navigationType:l.action,navigator:n})}const W=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=s.forwardRef(function(t,o){let{onClick:r,relative:a,reloadDocument:n,replace:l,state:u,target:f,to:i,preventScrollReset:d}=t,h=F(t,N),{basename:L}=s.useContext(E),g,R=!1;if(typeof i=="string"&&z.test(i)&&(g=i,W))try{let c=new URL(window.location.href),p=i.startsWith("//")?new URL(c.protocol+i):new URL(i),v=K(p.pathname,L);p.origin===c.origin&&v!=null?i=v+p.search+p.hash:R=!0}catch{}let S=x(i,{relative:a}),U=D(i,{replace:l,state:u,target:f,preventScrollReset:d,relative:a});function k(c){r&&r(c),c.defaultPrevented||U(c)}return s.createElement("a",m({},h,{href:g||S,onClick:R||n?r:k,ref:o,target:f}))});var y;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(y||(y={}));var b;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(b||(b={}));function D(e,t){let{target:o,replace:r,state:a,preventScrollReset:n,relative:l}=t===void 0?{}:t,u=O(),f=P(),i=B(e,{relative:l});return s.useCallback(d=>{if(H(d,o)){d.preventDefault();let h=r!==void 0?r:w(f)===w(i);u(e,{replace:h,state:a,preventScrollReset:n,relative:l})}},[f,u,i,r,a,o,e,n,l])}export{G as B,M as L};
