import{a as f}from"./chunk-CRHUVIOK.js";import{a as p}from"./chunk-3UT4DBOD.js";import"./chunk-KVKEBKS6.js";import"./chunk-FWYLAB5B.js";import{a as c}from"./chunk-4QO3HHI3.js";import"./chunk-WXMPKNLH.js";import{a as u}from"./chunk-X2U7WVKR.js";import"./chunk-WP3JSBEJ.js";import"./chunk-KVWQSCDP.js";import"./chunk-U37GBM4D.js";import{b as m}from"./chunk-DSHYIDCS.js";import{d,f as l}from"./chunk-IAMGS6YL.js";import"./chunk-CRNLDV6W.js";import"./chunk-GGCEL3NW.js";var v=({skuId:t,sellerId:r,price:e,discount:a,name:n,productGroupId:i})=>{let o=m(!1),{displayCart:C}=c(),{addItems:g}=p();return{onClick:d(async s=>{if(s.preventDefault(),s.stopPropagation(),!!r)try{o.value=!0,await g({orderItems:[{id:t,seller:r,quantity:1}]}),f({name:"add_to_cart",params:{items:[{item_id:i,quantity:1,price:e,discount:a,item_name:n,item_variant:t}]}}),C.value=!0}finally{o.value=!1}},[t,r]),loading:o.value}};function A({skuId:t,sellerId:r,discount:e,price:a,productGroupId:n,name:i}){let o=v({skuId:t,sellerId:r,discount:e,price:a,productGroupId:n,name:i});return l(u,{"data-deco":"add-to-cart",...o,class:"w-full",children:"Adicionar \xE0 Sacola"})}var y=A;export{y as default};
