import{a as o}from"./chunk-FWYLAB5B.js";import{a as g}from"./chunk-AGTHCVLB.js";import{a as p}from"./chunk-X2U7WVKR.js";import{a as s,b as f,c as v}from"./chunk-DSHYIDCS.js";import{f as i}from"./chunk-IAMGS6YL.js";var r=s(null),a=s(!0),u=t=>async e=>{try{a.value=!0,r.value=await t(e)}finally{a.value=!1}},B=u(o.create("deco-sites/std/actions/vtex/wishlist/addItem.ts")),D=u(o.create("deco-sites/std/actions/vtex/wishlist/removeItem.ts")),R=u(o.create("deco-sites/std/loaders/vtex/wishlist.ts"));typeof document<"u"&&R();var C=t=>r.value&&r.value.find(e=>e.productId==t.productId),z={wishlist:r,loading:a,addItem:B,getItem:C,removeItem:D},I=()=>z;var y=s(null),h=s(!0),A=t=>async e=>{try{h.value=!0,y.value=await t(e)}finally{h.value=!1}},F=A(o.create("deco-sites/std/loaders/vtex/user.ts"));typeof document<"u"&&F();var G={user:y},w=()=>G;function H({variant:t="icon",productGroupID:e,productID:W}){let{user:b}=w(),c={sku:W,productId:e},{loading:x,addItem:P,removeItem:T,getItem:U}=I(),d=v(()=>U(c)),l=f(!1),k=!!b.value?.email,n=!!d.value;return i(p,{class:t==="icon"?"btn-circle btn-ghost gap-2":"btn-outline gap-2",loading:l.value,"aria-label":"Add to wishlist",onClick:async m=>{if(m.stopPropagation(),m.preventDefault(),!k){window.alert("Please log in before adding to your wishlist");return}if(!x.value)try{l.value=!0,n?await T({id:d.value.id}):await P(c)}finally{l.value=!1}},children:[i(g,{id:"Heart",size:20,strokeWidth:2,fill:n?"black":"none"}),t==="icon"?null:n?"Remover":"Favoritar"]})}var L=H;export{L as a};
