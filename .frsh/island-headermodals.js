import{a as r}from"./chunk-TOUNTMGJ.js";import"./chunk-CQCRCOLX.js";import{a as p}from"./chunk-4QO3HHI3.js";import{a as s}from"./chunk-NNCH5KOV.js";import"./chunk-ZR3TPMCG.js";import"./chunk-X2U7WVKR.js";import"./chunk-MPA76XDY.js";import"./chunk-QFLNQWT3.js";import{b as a,c as o}from"./chunk-U37GBM4D.js";import"./chunk-DSHYIDCS.js";import{f as e}from"./chunk-IAMGS6YL.js";import"./chunk-CRNLDV6W.js";import{c as i}from"./chunk-GGCEL3NW.js";var c=o(()=>import("./Menu-4LCXZC2Z.js")),u=o(()=>import("./Cart-GSN3XKH4.js")),f=o(()=>import("./Searchbar-CYGJZ2BN.js"));function h({menu:d,searchbar:m}){let{displayCart:l,displayMenu:t,displaySearchbar:n}=p();return e(i,{children:[e(s,{title:"Menu",mode:"sidebar-left",loading:"lazy",open:t.value,onClose:()=>{t.value=!1},children:e(a,{fallback:e(r,{}),children:e(c,{...d})})}),e(s,{title:"Buscar",mode:"sidebar-right",loading:"lazy",open:n.value&&window?.matchMedia("(max-width: 767px)")?.matches,onClose:()=>{n.value=!1},children:e(a,{fallback:e(r,{}),children:e(f,{...m})})}),e(s,{title:"Minha sacola",mode:"sidebar-right",loading:"lazy",open:l.value,onClose:()=>{l.value=!1},children:e(a,{fallback:e(r,{}),children:e(u,{})})})]})}var M=h;export{M as default};
