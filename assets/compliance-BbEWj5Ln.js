import{l as d}from"./index-CB7kOaIh.js";function n(r,t,a){const i=(r??"").trim();if(!(!i||(t?/^\d{6}$/.test(i):/^(?:\d{4}|\d{6}|\d{8})$/.test(i))))throw d.warn("compliance","HSN/SAC validation failed",{context:a,isService:t}),new Error(t?`${a} SAC must be exactly 6 digits`:`${a} HSN must be 4, 6, or 8 digits`)}export{n as v};
//# sourceMappingURL=compliance-BbEWj5Ln.js.map
