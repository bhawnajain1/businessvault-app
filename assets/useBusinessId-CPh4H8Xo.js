import{r,c as i}from"./index-CTnztrwi.js";function c(){const[t,n]=r.useState(null),[u,a]=r.useState(null);return r.useEffect(()=>{let e=!0;return i().then(s=>{e&&n(s)}).catch(s=>{e&&a(s instanceof Error?s.message:String(s))}),()=>{e=!1}},[]),{businessId:t,error:u}}export{c as u};
//# sourceMappingURL=useBusinessId-CPh4H8Xo.js.map
