async function a(t,r,o){const[e,n]=await Promise.all([t().offset(r).limit(o).toArray(),t().count()]);return{rows:e,total:n}}function s(t,r){return r?t?t.toLowerCase().includes(r.toLowerCase()):!1:!0}export{s as m,a as p};
//# sourceMappingURL=pagination-k59hRasP.js.map
