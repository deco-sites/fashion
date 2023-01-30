/* esm.sh - esbuild bundle(preact@10.11.0/debug) deno production */
import{Fragment as U,options as i,Component as T}from"/stable/preact@10.11.0/deno/preact.js";import"/stable/preact@10.11.0/deno/devtools.js";var C={};function X(){C={}}function _(r){return r.type===U?"Fragment":typeof r.type=="function"?r.type.displayName||r.type.name:typeof r.type=="string"?r.type:"#text"}var k=[],w=[];function P(){return k.length>0?k[k.length-1]:null}var M=!1;function x(r){return typeof r.type=="function"&&r.type!=U}function c(r){for(var l=[r],f=r;f.__o!=null;)l.push(f.__o),f=f.__o;return l.reduce(function(u,d){u+="  in "+_(d);var p=d.__source;return p?u+=" (at "+p.fileName+":"+p.lineNumber+")":M||(M=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),u+`
`},"")}var L=typeof WeakMap=="function";function W(r){return r?typeof r.type=="function"?W(r.__):r:{}}var R=T.prototype.setState;T.prototype.setState=function(r,l){return this.__v==null&&this.state==null&&console.warn(`Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

`+c(P())),R.call(this,r,l)};var D=T.prototype.forceUpdate;function h(r){var l=r.props,f=_(r),u="";for(var d in l)if(l.hasOwnProperty(d)&&d!=="children"){var p=l[d];typeof p=="function"&&(p="function "+(p.displayName||p.name)+"() {}"),p=Object(p)!==p||p.toString?p+"":Object.prototype.toString.call(p),u+=" "+d+"="+JSON.stringify(p)}var g=l.children;return"<"+f+u+(g&&g.length?">..</"+f+">":" />")}T.prototype.forceUpdate=function(r){return this.__v==null?console.warn(`Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

`+c(P())):this.__P==null&&console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

`+c(this.__v)),D.call(this,r)},function(){(function(){var t=i.__b,e=i.diffed,o=i.__,a=i.vnode,s=i.__r;i.diffed=function(n){x(n)&&w.pop(),k.pop(),e&&e(n)},i.__b=function(n){x(n)&&k.push(n),t&&t(n)},i.__=function(n,y){w=[],o&&o(n,y)},i.vnode=function(n){n.__o=w.length>0?w[w.length-1]:null,a&&a(n)},i.__r=function(n){x(n)&&w.push(n),s&&s(n)}})();var r=!1,l=i.__b,f=i.diffed,u=i.vnode,d=i.__e,p=i.__,g=i.__h,O=L?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,v=[];i.__e=function(t,e,o,a){if(e&&e.__c&&typeof t.then=="function"){var s=t;t=new Error("Missing Suspense. The throwing component was: "+_(e));for(var n=e;n;n=n.__)if(n.__c&&n.__c.__c){t=s;break}if(t instanceof Error)throw t}try{(a=a||{}).componentStack=c(e),d(t,e,o,a),typeof t.then!="function"&&setTimeout(function(){throw t})}catch(y){throw y}},i.__=function(t,e){if(!e)throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);var o;switch(e.nodeType){case 1:case 11:case 9:o=!0;break;default:o=!1}if(!o){var a=_(t);throw new Error("Expected a valid HTML node as a second argument to render.	Received "+e+" instead: render(<"+a+" />, "+e+");")}p&&p(t,e)},i.__b=function(t){var e=t.type,o=W(t.__);if(r=!0,e===void 0)throw new Error(`Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports`+h(t)+`

`+c(t));if(e!=null&&typeof e=="object")throw e.__k!==void 0&&e.__e!==void 0?new Error("Invalid type passed to createElement(): "+e+`

Did you accidentally pass a JSX literal as JSX twice?

  let My`+_(t)+" = "+h(e)+`;
  let vnode = <My`+_(t)+` />;

This usually happens when you export a JSX literal and not the component.

`+c(t)):new Error("Invalid type passed to createElement(): "+(Array.isArray(e)?"array":e));if(e!=="thead"&&e!=="tfoot"&&e!=="tbody"||o.type==="table"?e==="tr"&&o.type!=="thead"&&o.type!=="tfoot"&&o.type!=="tbody"&&o.type!=="table"?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+h(t)+`

`+c(t)):e==="td"&&o.type!=="tr"?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+h(t)+`

`+c(t)):e==="th"&&o.type!=="tr"&&console.error("Improper nesting of table. Your <th> should have a <tr>."+h(t)+`

`+c(t)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+h(t)+`

`+c(t)),t.ref!==void 0&&typeof t.ref!="function"&&typeof t.ref!="object"&&!("$$typeof"in t))throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [`+typeof t.ref+`] instead
`+h(t)+`

`+c(t));if(typeof t.type=="string"){for(var a in t.props)if(a[0]==="o"&&a[1]==="n"&&typeof t.props[a]!="function"&&t.props[a]!=null)throw new Error(`Component's "`+a+'" property should be a function, but got ['+typeof t.props[a]+`] instead
`+h(t)+`

`+c(t))}if(typeof t.type=="function"&&t.type.propTypes){if(t.type.displayName==="Lazy"&&O&&!O.lazyPropTypes.has(t.type)){var s="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var n=t.type();O.lazyPropTypes.set(t.type,!0),console.warn(s+"Component wrapped in lazy() is "+_(n))}catch{console.warn(s+"We will log the wrapped component's name once it is loaded.")}}var y=t.props;t.type.__f&&delete(y=function(m,E){for(var j in E)m[j]=E[j];return m}({},y)).ref,function(m,E,j,A,I){Object.keys(m).forEach(function(N){var b;try{b=m[N](E,N,A,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(F){b=F}b&&!(b.message in C)&&(C[b.message]=!0,console.error("Failed prop type: "+b.message+(I&&`
`+I()||"")))})}(t.type.propTypes,y,0,_(t),function(){return c(t)})}l&&l(t)},i.__h=function(t,e,o){if(!t||!r)throw new Error("Hook can only be invoked from render methods.");g&&g(t,e,o)};var S=function(t,e){return{get:function(){var o="get"+t+e;v&&v.indexOf(o)<0&&(v.push(o),console.warn("getting vnode."+t+" is deprecated, "+e))},set:function(){var o="set"+t+e;v&&v.indexOf(o)<0&&(v.push(o),console.warn("setting vnode."+t+" is not allowed, "+e))}}},z={nodeName:S("nodeName","use vnode.type"),attributes:S("attributes","use vnode.props"),children:S("children","use vnode.props.children")},Y=Object.create({},z);i.vnode=function(t){var e=t.props;if(t.type!==null&&e!=null&&("__source"in e||"__self"in e)){var o=t.props={};for(var a in e){var s=e[a];a==="__source"?t.__source=s:a==="__self"?t.__self=s:o[a]=s}}t.__proto__=Y,u&&u(t)},i.diffed=function(t){if(t.__k&&t.__k.forEach(function(n){if(n&&n.type===void 0){delete n.__,delete n.__b;var y=Object.keys(n).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+y+`}.

`+c(t))}}),r=!1,f&&f(t),t.__k!=null)for(var e=[],o=0;o<t.__k.length;o++){var a=t.__k[o];if(a&&a.key!=null){var s=a.key;if(e.indexOf(s)!==-1){console.error('Following component has two or more children with the same key attribute: "'+s+`". This may cause glitches and misbehavior in rendering process. Component: 

`+h(t)+`

`+c(t));break}e.push(s)}}}}();export{X as resetPropWarnings};
