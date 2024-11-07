import{r as c}from"./index.DhYZZe0J.js";var p={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=c,d=Symbol.for("react.element"),m=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,E=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function _(s,r,t){var e,l={},o=null,i=null;t!==void 0&&(o=""+t),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(i=r.ref);for(e in r)x.call(r,e)&&!y.hasOwnProperty(e)&&(l[e]=r[e]);if(s&&s.defaultProps)for(e in r=s.defaultProps,r)l[e]===void 0&&(l[e]=r[e]);return{$$typeof:d,type:s,key:o,ref:i,props:l,_owner:E.current}}a.Fragment=m;a.jsx=_;a.jsxs=_;p.exports=a;var g=p.exports;let n=[],f=0;const u=4;let R=s=>{let r=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},lc:0,listen(e){return t.lc=r.push(e),()=>{for(let o=f+u;o<n.length;)n[o]===e?n.splice(o,u):o+=u;let l=r.indexOf(e);~l&&(r.splice(l,1),--t.lc||t.off())}},notify(e,l){let o=!n.length;for(let i of r)n.push(i,t.value,e,l);if(o){for(f=0;f<n.length;f+=u)n[f](n[f+1],n[f+2],n[f+3]);n.length=0}},off(){},set(e){let l=t.value;l!==e&&(t.value=e,t.notify(l))},subscribe(e){let l=t.listen(e);return e(t.value),l},value:s};return t};const h=R(0);function b(s){h.set(s)}export{h as a,g as j,b as s};
