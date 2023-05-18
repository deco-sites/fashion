import{a as A}from"./chunk-WP3JSBEJ.js";import{a as v}from"./chunk-U37GBM4D.js";import{f}from"./chunk-IAMGS6YL.js";import{c as O}from"./chunk-GGCEL3NW.js";function m(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(t){return typeof t}:m=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(e)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t&&N(e.prototype,t),n&&N(e,n),e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?E(Object(n),!0).forEach(function(r){b(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var x="1.5.4",u={MANDATORY_INITIALIZATION_MISSING:{message:"Missing urlEndpoint during SDK initialization",help:""},INVALID_TRANSFORMATION_POSITION:{message:"Invalid transformationPosition parameter",help:""},PRIVATE_KEY_CLIENT_SIDE:{message:"privateKey should not be passed on the client side",help:""},MISSING_UPLOAD_DATA:{message:"Missing data for upload",help:""},MISSING_UPLOAD_FILE_PARAMETER:{message:"Missing file parameter for upload",help:""},MISSING_UPLOAD_FILENAME_PARAMETER:{message:"Missing fileName parameter for upload",help:""},MISSING_AUTHENTICATION_ENDPOINT:{message:"Missing authentication endpoint for upload",help:""},MISSING_PUBLIC_KEY:{message:"Missing public key for upload",help:""},AUTH_ENDPOINT_TIMEOUT:{message:"The authenticationEndpoint you provided timed out in 60 seconds",help:""},AUTH_ENDPOINT_NETWORK_ERROR:{message:"Request to authenticationEndpoint failed due to network error",help:""},AUTH_INVALID_RESPONSE:{message:"Invalid response from authenticationEndpoint. The SDK expects a JSON response with three fields i.e. signature, token and expire.",help:""},UPLOAD_ENDPOINT_NETWORK_ERROR:{message:"Request to ImageKit upload endpoint failed due to network error",help:""},INVALID_UPLOAD_OPTIONS:{message:"Invalid uploadOptions parameter",help:""}};function p(e,t,n){typeof n=="function"&&(e?n(t,null):n(null,t))}function L(e){var t={},n=e.getAllResponseHeaders();return Object.keys(n).length&&n.trim().split(/[\r\n]+/).map(function(r){return r.split(/: /)}).forEach(function(r){t[r[0].trim()]=r[1].trim()}),t}var P=function(e,t){var n=l({},e),r={statusCode:t.status,headers:L(t)};return Object.defineProperty(n,"$ResponseMetadata",{value:r,enumerable:!1,writable:!1}),n},U=function(e,t,n,r){j(n.authenticationEndpoint).then(function(o){t.append("signature",o.signature),t.append("expire",String(o.expire)),t.append("token",o.token),k(e,t).then(function(a){return p(!1,a,r)},function(a){return p(!0,a,r)})},function(o){return p(!0,o,r)})},j=function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.timeout=6e4;var o=new URL(e);o.searchParams.set("t",Math.random().toString()),r.open("GET",o.toString()),r.ontimeout=function(a){return n(u.AUTH_ENDPOINT_TIMEOUT)},r.onerror=function(){return n(u.AUTH_ENDPOINT_NETWORK_ERROR)},r.onload=function(){if(r.status===200)try{var a=JSON.parse(r.responseText),i={signature:a.signature,expire:a.expire,token:a.token};return!i.signature||!i.expire||!i.token?n(u.AUTH_INVALID_RESPONSE):t(i)}catch{return n(u.AUTH_INVALID_RESPONSE)}else return n(u.AUTH_INVALID_RESPONSE)},r.send()})},k=function(e,t){return new Promise(function(n,r){e.open("POST","https://upload.imagekit.io/api/v1/files/upload"),e.onerror=function(o){return r(u.UPLOAD_ENDPOINT_NETWORK_ERROR)},e.onload=function(){if(e.status===200)try{var o=JSON.parse(e.responseText),a=P(o,e);return n(a)}catch(s){return r(s)}else try{var o=JSON.parse(e.responseText),i=P(o,e);return r(i)}catch(s){return r(s)}},e.send(t)})},K=function(e,t,n,r){if(!t.file){p(!0,u.MISSING_UPLOAD_FILE_PARAMETER,r);return}if(!t.fileName){p(!0,u.MISSING_UPLOAD_FILENAME_PARAMETER,r);return}if(!n.authenticationEndpoint){p(!0,u.MISSING_AUTHENTICATION_ENDPOINT,r);return}if(!n.publicKey){p(!0,u.MISSING_PUBLIC_KEY,r);return}var o=new FormData,a;for(a in t)a&&(a==="file"&&typeof t.file!="string"?o.append("file",t.file,String(t.fileName)):a==="tags"&&Array.isArray(t.tags)?o.append("tags",t.tags.join(",")):a==="responseFields"&&Array.isArray(t.responseFields)?o.append("responseFields",t.responseFields.join(",")):a==="extensions"&&Array.isArray(t.extensions)?o.append("extensions",JSON.stringify(t.extensions)):a==="customMetadata"&&m(t.customMetadata)==="object"&&!Array.isArray(t.customMetadata)&&t.customMetadata!==null?o.append("customMetadata",JSON.stringify(t.customMetadata)):t[a]!==void 0&&o.append(a,String(t[a])));o.append("publicKey",n.publicKey),U(e,o,l(l({},n),{},{authenticationEndpoint:n.authenticationEndpoint}),r)},S={width:"w",height:"h",aspectRatio:"ar",quality:"q",crop:"c",cropMode:"cm",focus:"fo",x:"x",y:"y",format:"f",radius:"r",background:"bg",border:"b",rotation:"rt",rotate:"rt",blur:"bl",named:"n",overlayImage:"oi",overlayImageAspectRatio:"oiar",overlayImageBackground:"oibg",overlayImageBorder:"oib",overlayImageDPR:"oidpr",overlayImageQuality:"oiq",overlayImageCropping:"oic",overlayImageTrim:"oit",overlayX:"ox",overlayY:"oy",overlayFocus:"ofo",overlayHeight:"oh",overlayWidth:"ow",overlayText:"ot",overlayTextFontSize:"ots",overlayTextFontFamily:"otf",overlayTextColor:"otc",overlayTextTransparency:"oa",overlayAlpha:"oa",overlayTextTypography:"ott",overlayBackground:"obg",overlayTextEncoded:"ote",overlayTextWidth:"otw",overlayTextBackground:"otbg",overlayTextPadding:"otp",overlayTextInnerAlignment:"otia",overlayRadius:"or",progressive:"pr",lossless:"lo",trim:"t",metadata:"md",colorProfile:"cp",defaultImage:"di",dpr:"dpr",effectSharpen:"e-sharpen",effectUSM:"e-usm",effectContrast:"e-contrast",effectGray:"e-grayscale",original:"orig",raw:"raw"},R="path",w="query",H=[R,w],C=":",F=",",G="-",c={getDefault:function(){return R},addAsQueryParameter:function(e){return e.transformationPosition===w},validParameters:function(e){return typeof e.transformationPosition>"u"?!1:H.indexOf(e.transformationPosition)!=-1},getTransformKey:function(e){return e&&(S[e]||S[e.toLowerCase()])||""},getChainTransformDelimiter:function(){return C},getTransformDelimiter:function(){return F},getTransformKeyValueDelimiter:function(){return G}},_="tr";function V(e){return typeof e=="string"&&e[e.length-1]=="/"&&(e=e.substring(0,e.length-1)),e}function q(e){return typeof e=="string"&&e[0]=="/"&&(e=e.slice(1)),e}function y(e,t){var n=t||"/",r=new RegExp(n+"{1,}","g");return e.join(n).replace(r,n)}var J=function(e){if(!e.path&&!e.src)return"";var t,n,r;try{e.path?(r=new URL(e.urlEndpoint).pathname,t=new URL(y([e.urlEndpoint.replace(r,""),e.path]))):(t=new URL(e.src),n=!0)}catch(i){return console.error(i),""}for(var o in e.queryParameters)t.searchParams.append(o,String(e.queryParameters[o]));var a=B(e.transformation);return a&&a.length&&(c.addAsQueryParameter(e)||n?t.searchParams.append(_,a):t.pathname=y([_+c.getChainTransformDelimiter()+a,t.pathname])),r?t.pathname=y([r,t.pathname]):t.pathname=y([t.pathname]),t.href};function B(e){if(!Array.isArray(e))return"";for(var t=[],n=0,r=e.length;n<r;n++){var o=[];for(var a in e[n]){var i=c.getTransformKey(a);if(i||(i=a),e[n][a]==="-")o.push(i);else if(a==="raw")o.push(e[n][a]);else{var s=e[n][a];(i==="oi"||i==="di")&&(s=V(q(s||"")),s=s.replace(/\//g,"@@")),o.push([i,s].join(c.getTransformKeyValueDelimiter()))}}t.push(o.join(c.getTransformDelimiter()))}return t.join(c.getChainTransformDelimiter())}var W=function(e,t){return J(l(l({},t),e))};function Y(e){return e.urlEndpoint}var z=function(e,t){return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];if(r.length===t.length&&typeof r[r.length-1]<"u"){if(typeof r[r.length-1]!="function")throw new Error("Callback must be a function.");t.call.apply(t,[e].concat(r))}else return new Promise(function(a,i){var s=function(d){if(d)return i(d);for(var I=arguments.length,g=new Array(I>1?I-1:0),h=1;h<I;h++)g[h-1]=arguments[h];a(g.length>1?g:g[0])};r.pop(),r.push(s),t.call.apply(t,[e].concat(r))})}},X=function(){function e(t){if(D(this,e),b(this,"options",{sdkVersion:"javascript-".concat(x),publicKey:"",urlEndpoint:"",transformationPosition:c.getDefault()}),this.options=l(l({},this.options),t||{}),!Y(this.options))throw u.MANDATORY_INITIALIZATION_MISSING;if(!c.validParameters(this.options))throw u.INVALID_TRANSFORMATION_POSITION}return M(e,[{key:"url",value:function(t){return W(t,this.options)}},{key:"upload",value:function(t,n,r){var o;if(typeof n=="function"?o=n:r=n||{},!t||m(t)!=="object")return p(!0,u.INVALID_UPLOAD_OPTIONS,o);var a=l(l({},this.options),r),i=t||{},s=i.xhr;delete t.xhr;var d=s||new XMLHttpRequest;return z(this,K)(d,t,a,o)}}]),e}(),T=X;var $=new T({urlEndpoint:"https://ik.imagekit.io/decocx"}),Q=[1,1.5,2],Z=(e,t,n)=>Q.map(r=>`${$.url({path:e,transformation:[{width:`${Math.trunc(r*t)}`,height:n?`${Math.trunc(r*n)}`:void 0}]})} ${Math.trunc(r*t)}w`).join(", "),ee=v((e,t)=>{let{preload:n,loading:r="lazy"}=e,o=Z(e.src,e.width,e.height),a={imagesrcset:o,imagesizes:e.sizes,fetchpriority:e.fetchPriority,media:e.media};return f(O,{children:[n&&f(A,{children:f("link",{as:"image",rel:"preload",href:e.src,...a})}),f("img",{...e,preload:void 0,src:e.src,srcSet:o,loading:r,ref:t})]})}),ue=ee;export{ue as a};
