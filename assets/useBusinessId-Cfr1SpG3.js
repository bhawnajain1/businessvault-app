import{r,v as i}from"./index-BmRuTQ95.js";function c(){const[t,n]=r.useState(null),[u,a]=r.useState(null);return r.useEffect(()=>{let e=!0;return i().then(s=>{e&&n(s)}).catch(s=>{e&&a(s instanceof Error?s.message:String(s))}),()=>{e=!1}},[]),{businessId:t,error:u}}export{c as u};
//# sourceMappingURL=useBusinessId-Cfr1SpG3.js.map
