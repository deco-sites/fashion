import{a as u}from"./chunk-AGTHCVLB.js";import{a as d}from"./chunk-X2U7WVKR.js";import{a as n}from"./chunk-KVWQSCDP.js";import{b as m}from"./chunk-DSHYIDCS.js";import{a as f,b as c,f as e}from"./chunk-IAMGS6YL.js";n&&typeof window.HTMLDialogElement>"u"&&await import("./dialog-polyfill.esm-LPK4FENA.js");var h={"sidebar-right":"animate-slide-left","sidebar-left":"animate-slide-right",center:"animate-fade-in"},y={"sidebar-right":"justify-end","sidebar-left":"justify-start",center:"justify-center items-center"},x={"sidebar-right":"h-full w-full sm:max-w-lg","sidebar-left":"h-full w-full sm:max-w-lg",center:""},w=({open:l,title:g,mode:s="sidebar-right",onClose:a,children:r,loading:b,...i})=>{let o=m(!1),t=c(null);return f(()=>{l===!1?(document.getElementsByTagName("body").item(0)?.classList.remove("no-scroll"),t.current?.open===!0&&t.current.close()):l===!0&&(document.getElementsByTagName("body").item(0)?.classList.add("no-scroll"),t.current?.open===!1&&t.current.showModal(),o.value=!0)},[l]),e("dialog",{...i,ref:t,class:`bg-transparent p-0 m-0 max-w-full w-full max-h-full h-full backdrop-opacity-50 ${h[s]} ${i.class??""}`,onClick:p=>p.target.tagName==="SECTION"&&a?.(),onClose:a,children:e("section",{class:`w-full h-full flex bg-transparent ${y[s]}`,children:e("div",{class:`bg-base-100 flex flex-col max-h-full ${x[s]}`,children:[e("header",{class:"flex px-4 py-6 justify-between items-center border-b border-base-200",children:[e("h1",{children:e("span",{class:"font-medium text-2xl",children:g})}),e(d,{class:"btn btn-ghost",onClick:a,children:e(u,{id:"XMark",width:20,height:20,strokeWidth:2})})]}),e("div",{class:"overflow-y-auto flex-grow flex flex-col",children:b==="lazy"?o.value&&r:r})]})})})},k=w;export{k as a};
