function f(e){const r=e<0,o=Math.abs(e),n=Math.floor(o/100),a=o-n*100,t=n.toString();let s;if(t.length<=3)s=t;else{const i=t.slice(-3);s=`${t.slice(0,-3).replace(/\B(?=(\d{2})+(?!\d))/g,",")},${i}`}const c=a.toString().padStart(2,"0");return`${r?"-":""}${s}.${c}`}export{f};
//# sourceMappingURL=money-BhGy7NaT.js.map
