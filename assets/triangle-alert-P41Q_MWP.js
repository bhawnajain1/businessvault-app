import{r as l}from"./index-0tZbEZ2g.js";/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=t=>t?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function j(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:_(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=t=>{let e="",n=!1;for(const o of t){if(o==="-"||o==="_"||o<=" "){n=e.length>0;continue}e.length===0?e+=o.toLowerCase():e+=n?o.toUpperCase():o,n=!1}return e};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=t=>{const e=E(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(...t)=>t.filter((e,n,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function m(t){return t!=null}function M(t,e={}){const n=e.attributeNames??{},o=i=>n[i]??i,a=t.size??t.width??c.width,h=t.size??t.height??c.height,u=t.aliases?.filter(i=>typeof i=="string"&&i.trim()!=="").map(i=>`lucide-${i}`)??[],f=[...t.name?[`lucide-${t.name}`]:[],...u],s=e.className?.split(" ").filter(Boolean)??[],k=e.includeDefaultClasses===!1?x(...s):x("lucide",...f,...s),b=e.absoluteStrokeWidth?Number(e.strokeWidth??c["stroke-width"])*Number(t.size??t.width??c.width)/Number(e.size??e.width??c.width):e.strokeWidth??c["stroke-width"];return["svg",{...Object.entries(c).reduce((i,[r,d])=>(i[o(r)]=d,i),{}),..."color"in e&&e.color&&{[o("stroke")]:e.color},..."size"in e&&m(e.size)&&{[o("width")]:e.size,[o("height")]:e.size},..."width"in e&&m(e.width)&&{[o("width")]:e.width},..."height"in e&&m(e.height)&&{[o("height")]:e.height},[o("stroke-width")]:b,...k&&{[o("class")]:k},[o("viewBox")]:`0 0 ${a} ${h}`,...e.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(i=>{const[r,d,w]=i,g=e.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...d}:d;return w?[r,g,w]:[r,g]})]}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function P(t,e={}){return M(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},q=l.createContext({}),F=()=>l.useContext(q),H=l.forwardRef(({color:t,size:e,width:n,height:o,strokeWidth:a,absoluteStrokeWidth:h,nonScalingStroke:u,className:f="",children:s,iconNode:k=[],icon:b={node:k,aliases:[],size:24},...C},i)=>{const{size:r=24,strokeWidth:d=2,absoluteStrokeWidth:w=!1,nonScalingStroke:g=!1,color:A="currentColor",className:p=""}=F()??{},v=!!s||R(C),[W,L,$=[]]=P(b,{color:t??A,width:n??e??r,height:o??e??r,strokeWidth:a??d,absoluteStrokeWidth:h??w,nonScalingStroke:u??g,className:x(p,f),hasA11yProp:v,attributes:C});return l.createElement(W,{ref:i,...L},[...$.map(([B,D])=>l.createElement(B,D)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function z(t,e=[],n=[]){const o=typeof t=="string"?j(t,e,n):t,a=l.forwardRef(({className:h,...u},f)=>l.createElement(H,{ref:f,icon:o,className:h,...u}));return o.name&&(a.displayName=I(o.name)),a}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};y.node;const U=z(y);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};N.node;const V=z(N);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};S.node;const K=z(S);export{U as D,V as S,K as T,z as c};
//# sourceMappingURL=triangle-alert-P41Q_MWP.js.map
