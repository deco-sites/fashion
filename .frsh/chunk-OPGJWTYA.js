var c="__frsh_c",g=typeof document<"u";function i(s){if(!s.startsWith("/")||s.startsWith("//"))return s;try{let t=new URL(s,"https://freshassetcache.local");return t.protocol!=="https:"||t.host!=="freshassetcache.local"||t.searchParams.has(c)?s:(t.searchParams.set(c,"fbe0c9218fc9ac95868aa1bac8d1a0610742fe58"),t.pathname+t.search+t.hash)}catch(t){return console.warn(`Failed to create asset() URL, falling back to regular path ('${s}'):`,t),s}}function h(s){if(s.includes("("))return s;let t=s.split(","),o=[];for(let n of t){let r=n.trimStart(),a=n.length-r.length;if(r==="")return s;let e=r.indexOf(" ");e===-1&&(e=r.length);let f=n.substring(0,a),l=r.substring(0,e),u=r.substring(e);o.push(f+i(l)+u)}return o.join(",")}function p(s){if(s.type==="img"||s.type==="source"){let{props:t}=s;if(t["data-fresh-disable-lock"])return;typeof t.src=="string"&&(t.src=i(t.src)),typeof t.srcset=="string"&&(t.srcset=h(t.srcset))}}export{g as a,i as b,p as c};
========
var c="__frsh_c",g=typeof document<"u";function i(s){if(!s.startsWith("/")||s.startsWith("//"))return s;try{let t=new URL(s,"https://freshassetcache.local");return t.protocol!=="https:"||t.host!=="freshassetcache.local"||t.searchParams.has(c)?s:(t.searchParams.set(c,"1bf32c502df98d76e83984fd9825294807861ffc"),t.pathname+t.search+t.hash)}catch(t){return console.warn(`Failed to create asset() URL, falling back to regular path ('${s}'):`,t),s}}function h(s){if(s.includes("("))return s;let t=s.split(","),o=[];for(let n of t){let r=n.trimStart(),a=n.length-r.length;if(r==="")return s;let e=r.indexOf(" ");e===-1&&(e=r.length);let f=n.substring(0,a),l=r.substring(0,e),u=r.substring(e);o.push(f+i(l)+u)}return o.join(",")}function p(s){if(s.type==="img"||s.type==="source"){let{props:t}=s;if(t["data-fresh-disable-lock"])return;typeof t.src=="string"&&(t.src=i(t.src)),typeof t.srcset=="string"&&(t.srcset=h(t.srcset))}}export{g as a,i as b,p as c};
>>>>>>>> fba69e9 (lazy tailwind):.frsh/js/chunk-3PKJ32AD.js
