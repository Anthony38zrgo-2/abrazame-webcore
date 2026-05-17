(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Te=!1,Ne=!1,I=[],$e=-1,Ke=!1;function Hn(e){Wn(e)}function Un(){Ke=!0}function Kn(){Ke=!1,Ct()}function Wn(e){I.includes(e)||I.push(e),Ct()}function Jn(e){let t=I.indexOf(e);t!==-1&&t>$e&&I.splice(t,1)}function Ct(){if(!Ne&&!Te){if(Ke)return;Te=!0,queueMicrotask(Vn)}}function Vn(){Te=!1,Ne=!0;for(let e=0;e<I.length;e++)I[e](),$e=e;I.length=0,$e=-1,Ne=!1}var W,F,J,Mt,Pe=!0;function Gn(e){Pe=!1,e(),Pe=!0}function Yn(e){W=e.reactive,J=e.release,F=t=>e.effect(t,{scheduler:n=>{Pe?Hn(n):n()}}),Mt=e.raw}function _t(e){F=e}function Qn(e){let t=()=>{};return[r=>{let i=F(r);return e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(a=>a())}),e._x_effects.add(i),t=()=>{i!==void 0&&(e._x_effects.delete(i),J(i))},i},()=>{t()}]}function Tt(e,t){let n=!0,r,i,a=F(()=>{let o=e(),s=JSON.stringify(o);if(!n&&(typeof o=="object"||o!==r)){let l=typeof r=="object"?JSON.parse(i):r;queueMicrotask(()=>{t(o,l)})}r=o,i=s,n=!1});return()=>J(a)}async function Xn(e){Un();try{await e(),await Promise.resolve()}finally{Kn()}}var Nt=[],$t=[],Pt=[];function Zn(e){Pt.push(e)}function We(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,$t.push(t))}function jt(e){Nt.push(e)}function It(e,t,n){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(n)}function Rt(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([n,r])=>{(t===void 0||t.includes(n))&&(r.forEach(i=>i()),delete e._x_attributeCleanups[n])})}function er(e){for(e._x_effects?.forEach(Jn);e._x_cleanups?.length;)e._x_cleanups.pop()()}var Je=new MutationObserver(Qe),Ve=!1;function Ge(){Je.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Ve=!0}function Lt(){tr(),Je.disconnect(),Ve=!1}var Q=[];function tr(){let e=Je.takeRecords();Q.push(()=>e.length>0&&Qe(e));let t=Q.length;queueMicrotask(()=>{if(Q.length===t)for(;Q.length>0;)Q.shift()()})}function h(e){if(!Ve)return e();Lt();let t=e();return Ge(),t}var Ye=!1,_e=[];function nr(){Ye=!0}function rr(){Ye=!1,Qe(_e),_e=[]}function Qe(e){if(Ye){_e=_e.concat(e);return}let t=[],n=new Set,r=new Map,i=new Map;for(let a=0;a<e.length;a++)if(!e[a].target._x_ignoreMutationObserver&&(e[a].type==="childList"&&(e[a].removedNodes.forEach(o=>{o.nodeType===1&&o._x_marker&&n.add(o)}),e[a].addedNodes.forEach(o=>{if(o.nodeType===1){if(n.has(o)){n.delete(o);return}o._x_marker||t.push(o)}})),e[a].type==="attributes")){let o=e[a].target,s=e[a].attributeName,l=e[a].oldValue,c=()=>{r.has(o)||r.set(o,[]),r.get(o).push({name:s,value:o.getAttribute(s)})},u=()=>{i.has(o)||i.set(o,[]),i.get(o).push(s)};o.hasAttribute(s)&&l===null?c():o.hasAttribute(s)?(u(),c()):u()}i.forEach((a,o)=>{Rt(o,a)}),r.forEach((a,o)=>{Nt.forEach(s=>s(o,a))});for(let a of n)t.some(o=>o.contains(a))||$t.forEach(o=>o(a));for(let a of t)a.isConnected&&Pt.forEach(o=>o(a));t=null,n=null,r=null,i=null}function qt(e){return z(k(e))}function oe(e,t,n){return e._x_dataStack=[t,...k(n||e)],()=>{e._x_dataStack=e._x_dataStack.filter(r=>r!==t)}}function k(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?k(e.host):e.parentNode?k(e.parentNode):[]}function z(e){return new Proxy({objects:e},ir)}function kt(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:kt(Object.getPrototypeOf(e),t)}var ir={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(n=>Object.prototype.hasOwnProperty.call(n,t)||Reflect.has(n,t))},get({objects:e},t,n){return t=="toJSON"?ar:Reflect.get(e.find(r=>Reflect.has(r,t))||{},t,n)},set({objects:e},t,n,r){let i;for(const o of e)if(i=kt(o,t),i)break;i||(i=e[e.length-1]);const a=Object.getOwnPropertyDescriptor(i,t);return a?.set&&a?.get?a.set.call(r,n)||!0:Reflect.set(i,t,n)}};function ar(){return Reflect.ownKeys(this).reduce((t,n)=>(t[n]=Reflect.get(this,n),t),{})}function Xe(e){let t=r=>typeof r=="object"&&!Array.isArray(r)&&r!==null,n=(r,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([a,{value:o,enumerable:s}])=>{if(s===!1||o===void 0||typeof o=="object"&&o!==null&&o.__v_skip)return;let l=i===""?a:`${i}.${a}`;typeof o=="object"&&o!==null&&o._x_interceptor?r[a]=o.initialize(e,l,a):t(o)&&o!==r&&!(o instanceof Element)&&n(o,l)})};return n(e)}function zt(e,t=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(r,i,a){return e(this.initialValue,()=>or(r,i),o=>je(r,i,o),i,a)}};return t(n),r=>{if(typeof r=="object"&&r!==null&&r._x_interceptor){let i=n.initialize.bind(n);n.initialize=(a,o,s)=>{let l=r.initialize(a,o,s);return n.initialValue=l,i(a,o,s)}}else n.initialValue=r;return n}}function or(e,t){return t.split(".").reduce((n,r)=>n[r],e)}function je(e,t,n){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=n;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),je(e[t[0]],t.slice(1),n)}}var Dt={};function E(e,t){Dt[e]=t}function re(e,t){let n=sr(t);return Object.entries(Dt).forEach(([r,i])=>{Object.defineProperty(e,`$${r}`,{get(){return i(t,n)},enumerable:!1})}),e}function sr(e){let[t,n]=Jt(e),r={interceptor:zt,...t};return We(e,n),r}function lr(e,t,n,...r){try{return n(...r)}catch(i){ie(i,e,t)}}function ie(...e){return Ft(...e)}var Ft=ur;function cr(e){Ft=e}function ur(e,t,n=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:n}),console.warn(`Alpine Expression Error: ${e.message}

${n?'Expression: "'+n+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var U=!0;function Bt(e){let t=U;U=!1;let n=e();return U=t,n}function R(e,t,n={}){let r;return x(e,t)(i=>r=i,n),r}function x(...e){return Ht(...e)}var Ht=()=>{};function fr(e){Ht=e}var Ut;function dr(e){Ut=e}function pr(e,t){let n={};re(n,e);let r=[n,...k(e)],i=typeof t=="function"?_r(r,t):gr(r,t,e);return lr.bind(null,e,t,i)}function _r(e,t){return(n=()=>{},{scope:r={},params:i=[],context:a}={})=>{if(!U){ae(n,t,z([r,...e]),i);return}let o=t.apply(z([r,...e]),i);ae(n,o)}}var Se={};function hr(e,t){if(Se[e])return Se[e];let n=Object.getPrototypeOf(async function(){}).constructor,r=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,a=(()=>{try{let o=new n(["__self","scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);return Object.defineProperty(o,"name",{value:`[Alpine] ${e}`}),o}catch(o){return ie(o,t,e),Promise.resolve()}})();return Se[e]=a,a}function gr(e,t,n){let r=hr(t,n);return(i=()=>{},{scope:a={},params:o=[],context:s}={})=>{r.result=void 0,r.finished=!1;let l=z([a,...e]);if(typeof r=="function"){let c=r.call(s,r,l).catch(u=>ie(u,n,t));r.finished?(ae(i,r.result,l,o,n),r.result=void 0):c.then(u=>{ae(i,u,l,o,n)}).catch(u=>ie(u,n,t)).finally(()=>r.result=void 0)}}}function ae(e,t,n,r,i){if(U&&typeof t=="function"){let a=t.apply(n,r);a instanceof Promise?a.then(o=>ae(e,o,n,r)).catch(o=>ie(o,i,t)):e(a)}else typeof t=="object"&&t instanceof Promise?t.then(a=>e(a)):e(t)}function br(...e){return Ut(...e)}function mr(e,t,n={}){let r={};re(r,e);let i=[r,...k(e)],a=z([n.scope??{},...i]),o=n.params??[];if(t.includes("await")){let s=Object.getPrototypeOf(async function(){}).constructor,l=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new s(["scope"],`with (scope) { let __result = ${l}; return __result }`).call(n.context,a)}else{let s=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,c=new Function(["scope"],`with (scope) { let __result = ${s}; return __result }`).call(n.context,a);return typeof c=="function"&&U?c.apply(a,o):c}}var Ze="x-";function V(e=""){return Ze+e}function vr(e){Ze=e}var he={};function g(e,t){return he[e]=t,{before(n){if(!he[n]){console.warn(String.raw`Cannot find directive \`${n}\`. \`${e}\` will use the default order of execution`);return}const r=j.indexOf(n);j.splice(r>=0?r:j.indexOf("DEFAULT"),0,e)}}}function xr(e){return Object.keys(he).includes(e)}function et(e,t,n){if(t=Array.from(t),e._x_virtualDirectives){let a=Object.entries(e._x_virtualDirectives).map(([s,l])=>({name:s,value:l})),o=Kt(a);a=a.map(s=>o.find(l=>l.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),t=t.concat(a)}let r={};return t.map(Yt((a,o)=>r[a]=o)).filter(Xt).map(Er(r,n)).sort(Ar).map(a=>wr(e,a))}function Kt(e){return Array.from(e).map(Yt()).filter(t=>!Xt(t))}var Ie=!1,ee=new Map,Wt=Symbol();function yr(e){Ie=!0;let t=Symbol();Wt=t,ee.set(t,[]);let n=()=>{for(;ee.get(t).length;)ee.get(t).shift()();ee.delete(t)},r=()=>{Ie=!1,n()};e(n),r()}function Jt(e){let t=[],n=s=>t.push(s),[r,i]=Qn(e);return t.push(i),[{Alpine:Y,effect:r,cleanup:n,evaluateLater:x.bind(x,e),evaluate:R.bind(R,e)},()=>t.forEach(s=>s())]}function wr(e,t){let n=()=>{},r=he[t.type]||n,[i,a]=Jt(e);It(e,t.original,a);let o=()=>{e._x_ignore||e._x_ignoreSelf||(r.inline&&r.inline(e,t,i),r=r.bind(r,e,t,i),Ie?ee.get(Wt).push(r):r())};return o.runCleanups=a,o}var Vt=(e,t)=>({name:n,value:r})=>(n.startsWith(e)&&(n=n.replace(e,t)),{name:n,value:r}),Gt=e=>e;function Yt(e=()=>{}){return({name:t,value:n})=>{let{name:r,value:i}=Qt.reduce((a,o)=>o(a),{name:t,value:n});return r!==t&&e(r,t),{name:r,value:i}}}var Qt=[];function tt(e){Qt.push(e)}function Xt({name:e}){return Zt().test(e)}var Zt=()=>new RegExp(`^${Ze}([^:^.]+)\\b`);function Er(e,t){return({name:n,value:r})=>{n===r&&(r="");let i=n.match(Zt()),a=n.match(/:([a-zA-Z0-9\-_:]+)/),o=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],s=t||e[n]||n;return{type:i?i[1]:null,value:a?a[1]:null,modifiers:o.map(l=>l.replace(".","")),expression:r,original:s}}}var Re="DEFAULT",j=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",Re,"teleport"];function Ar(e,t){let n=j.indexOf(e.type)===-1?Re:e.type,r=j.indexOf(t.type)===-1?Re:t.type;return j.indexOf(n)-j.indexOf(r)}function te(e,t,n={},r={}){return e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0,cancelable:!0,...r}))}function D(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>D(i,t));return}let n=!1;if(t(e,()=>n=!0),n)return;let r=e.firstElementChild;for(;r;)D(r,t),r=r.nextElementSibling}function S(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var ht=!1;function Sr(){ht&&S("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),ht=!0,document.body||S("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),te(document,"alpine:init"),te(document,"alpine:initializing"),Ge(),Zn(t=>C(t,D)),We(t=>G(t)),jt((t,n)=>{et(t,n).forEach(r=>r())});let e=t=>!me(t.parentElement,!0);Array.from(document.querySelectorAll(nn().join(","))).filter(e).forEach(t=>{C(t)}),te(document,"alpine:initialized"),setTimeout(()=>{Tr()})}var nt=[],en=[];function tn(){return nt.map(e=>e())}function nn(){return nt.concat(en).map(e=>e())}function rn(e){nt.push(e)}function an(e){en.push(e)}function me(e,t=!1){return O(e,n=>{if((t?nn():tn()).some(i=>n.matches(i)))return!0})}function O(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return O(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return O(e.parentNode.host,t);if(e.parentElement)return O(e.parentElement,t)}}function Or(e){return tn().some(t=>e.matches(t))}var on=[];function Cr(e){on.push(e)}var Mr=1;function C(e,t=D,n=()=>{}){O(e,r=>r._x_ignore)||yr(()=>{t(e,(r,i)=>{r._x_marker||(n(r,i),on.forEach(a=>a(r,i)),et(r,r.attributes).forEach(a=>a()),r._x_ignore||(r._x_marker=Mr++),r._x_ignore&&i())})})}function G(e,t=D){t(e,n=>{er(n),Rt(n),delete n._x_marker})}function Tr(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,n,r])=>{xr(n)||r.some(i=>{if(document.querySelector(i))return S(`found "${i}", but missing ${t} plugin`),!0})})}var Le=[],rt=!1;function it(e=()=>{}){return queueMicrotask(()=>{rt||setTimeout(()=>{qe()})}),new Promise(t=>{Le.push(()=>{e(),t()})})}function qe(){for(rt=!1;Le.length;)Le.shift()()}function Nr(){rt=!0}function at(e,t){return Array.isArray(t)?gt(e,t.join(" ")):typeof t=="object"&&t!==null?$r(e,t):typeof t=="function"?at(e,t()):gt(e,t)}function ke(e){return e.split(/\s/).filter(Boolean)}function gt(e,t){let n=i=>ke(i).filter(a=>!e.classList.contains(a)).filter(Boolean),r=i=>(e.classList.add(...i),()=>{e.classList.remove(...i)});return t=t===!0?t="":t||"",r(n(t))}function $r(e,t){let n=Object.entries(t).flatMap(([o,s])=>s?ke(o):!1).filter(Boolean),r=Object.entries(t).flatMap(([o,s])=>s?!1:ke(o)).filter(Boolean),i=[],a=[];return r.forEach(o=>{e.classList.contains(o)&&(e.classList.remove(o),a.push(o))}),n.forEach(o=>{e.classList.contains(o)||(e.classList.add(o),i.push(o))}),()=>{a.forEach(o=>e.classList.add(o)),i.forEach(o=>e.classList.remove(o))}}function ve(e,t){return typeof t=="object"&&t!==null?Pr(e,t):jr(e,t)}function Pr(e,t){let n={};return Object.entries(t).forEach(([r,i])=>{n[r]=e.style[r],r.startsWith("--")||(r=Ir(r)),e.style.setProperty(r,i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{ve(e,n)}}function jr(e,t){let n=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",n||"")}}function Ir(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function ze(e,t=()=>{}){let n=!1;return function(){n?t.apply(this,arguments):(n=!0,e.apply(this,arguments))}}g("transition",(e,{value:t,modifiers:n,expression:r},{evaluate:i})=>{typeof r=="function"&&(r=i(r)),r!==!1&&(!r||typeof r=="boolean"?Lr(e,n,t):Rr(e,r,t))});function Rr(e,t,n){sn(e,at,""),{enter:i=>{e._x_transition.enter.during=i},"enter-start":i=>{e._x_transition.enter.start=i},"enter-end":i=>{e._x_transition.enter.end=i},leave:i=>{e._x_transition.leave.during=i},"leave-start":i=>{e._x_transition.leave.start=i},"leave-end":i=>{e._x_transition.leave.end=i}}[n](t)}function Lr(e,t,n){sn(e,ve);let r=!t.includes("in")&&!t.includes("out")&&!n,i=r||t.includes("in")||["enter"].includes(n),a=r||t.includes("out")||["leave"].includes(n);t.includes("in")&&!r&&(t=t.filter((v,B)=>B<t.indexOf("out"))),t.includes("out")&&!r&&(t=t.filter((v,B)=>B>t.indexOf("out")));let o=!t.includes("opacity")&&!t.includes("scale"),s=o||t.includes("opacity"),l=o||t.includes("scale"),c=s?0:1,u=l?X(t,"scale",95)/100:1,d=X(t,"delay",0)/1e3,b=X(t,"origin","center"),_="opacity, transform",y=X(t,"duration",150)/1e3,f=X(t,"duration",75)/1e3,m="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:b,transitionDelay:`${d}s`,transitionProperty:_,transitionDuration:`${y}s`,transitionTimingFunction:m},e._x_transition.enter.start={opacity:c,transform:`scale(${u})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),a&&(e._x_transition.leave.during={transformOrigin:b,transitionDelay:`${d}s`,transitionProperty:_,transitionDuration:`${f}s`,transitionTimingFunction:m},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function sn(e,t,n={}){e._x_transition||(e._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(r=()=>{},i=()=>{}){De(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},r,i)},out(r=()=>{},i=()=>{}){De(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},r,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,n,r){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let a=()=>i(n);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(n):a():e._x_transition?e._x_transition.in(n):a();return}e._x_hidePromise=e._x_transition?new Promise((o,s)=>{e._x_transition.out(()=>{},()=>o(r)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(r),queueMicrotask(()=>{let o=ln(e);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(e)):i(()=>{let s=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(s)]).then(([u])=>u?.());return delete l._x_hidePromise,delete l._x_hideChildren,c};s(e).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function ln(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:ln(t)}function De(e,t,{during:n,start:r,end:i}={},a=()=>{},o=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(r).length===0&&Object.keys(i).length===0){a(),o();return}let s,l,c;qr(e,{start(){s=t(e,r)},during(){l=t(e,n)},before:a,end(){s(),c=t(e,i)},after:o,cleanup(){l(),c()}})}function qr(e,t){let n,r,i,a=ze(()=>{h(()=>{n=!0,r||t.before(),i||(t.end(),qe()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(o){this.beforeCancels.push(o)},cancel:ze(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();a()}),finish:a},h(()=>{t.start(),t.during()}),Nr(),requestAnimationFrame(()=>{if(n)return;let o=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,s=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;o===0&&(o=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),h(()=>{t.before()}),r=!0,requestAnimationFrame(()=>{n||(h(()=>{t.end()}),qe(),setTimeout(e._x_transitioning.finish,o+s),i=!0)})})}function X(e,t,n){if(e.indexOf(t)===-1)return n;const r=e[e.indexOf(t)+1];if(!r||t==="scale"&&isNaN(r))return n;if(t==="duration"||t==="delay"){let i=r.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[r,e[e.indexOf(t)+2]].join(" "):r}var T=!1;function $(e,t=()=>{}){return(...n)=>T?t(...n):e(...n)}function kr(e){return(...t)=>T&&e(...t)}var cn=[];function xe(e){cn.push(e)}function zr(e,t){cn.forEach(n=>n(e,t)),T=!0,un(()=>{C(t,(n,r)=>{r(n,()=>{})})}),T=!1}var Fe=!1;function Dr(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),T=!0,Fe=!0,un(()=>{Fr(t)}),T=!1,Fe=!1}function Fr(e){let t=!1;C(e,(r,i)=>{D(r,(a,o)=>{if(t&&Or(a))return o();t=!0,i(a,o)})})}function un(e){let t=F;_t((n,r)=>{let i=t(n);return J(i),()=>{}}),e(),_t(t)}function fn(e,t,n,r=[]){switch(e._x_bindings||(e._x_bindings=W({})),e._x_bindings[t]=n,t=r.includes("camel")?Gr(t):t,t){case"value":Br(e,n);break;case"style":Ur(e,n);break;case"class":Hr(e,n);break;case"selected":case"checked":Kr(e,t,n);break;default:dn(e,t,n);break}}function Br(e,t){if(ot(e))e.attributes.value===void 0&&(e.value=t);else if(ge(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(n=>Yr(n,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Vr(e,t);else{if(e.value===t)return;e.value=t===void 0?"":t}}function Hr(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=at(e,t)}function Ur(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=ve(e,t)}function Kr(e,t,n){dn(e,t,n),Jr(e,t,n)}function dn(e,t,n){[null,void 0,!1].includes(n)&&Xr(t)?e.removeAttribute(t):(pn(t)&&(n=t),Wr(e,t,n))}function Wr(e,t,n){e.getAttribute(t)!=n&&e.setAttribute(t,n)}function Jr(e,t,n){e[t]!==n&&(e[t]=n)}function Vr(e,t){const n=[].concat(t).map(r=>r+"");Array.from(e.options).forEach(r=>{r.selected=n.includes(r.value)})}function Gr(e){return e.toLowerCase().replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function Yr(e,t){return e==t}function pe(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var Qr=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function pn(e){return Qr.has(e)}function Xr(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function Zr(e,t,n){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:_n(e,t,n)}function ei(e,t,n,r=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let i=e._x_inlineBindings[t];return i.extract=r,Bt(()=>R(e,i.expression))}return _n(e,t,n)}function _n(e,t,n){let r=e.getAttribute(t);return r===null?typeof n=="function"?n():n:r===""?!0:pn(t)?!![t,"true"].includes(r):r}function ge(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function ot(e){return e.type==="radio"||e.localName==="ui-radio"}function hn(e,t){let n;return function(){const r=this,i=arguments,a=function(){n=null,e.apply(r,i)};clearTimeout(n),n=setTimeout(a,t)}}function gn(e,t){let n;return function(){let r=this,i=arguments;n||(e.apply(r,i),n=!0,setTimeout(()=>n=!1,t))}}function bn({get:e,set:t},{get:n,set:r}){let i=!0,a,o=F(()=>{let s=e(),l=n();if(i)r(Oe(s)),i=!1;else{let c=JSON.stringify(s),u=JSON.stringify(l);c!==a?r(Oe(s)):c!==u&&t(Oe(l))}a=JSON.stringify(e()),JSON.stringify(n())});return()=>{J(o)}}function Oe(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function ti(e){(Array.isArray(e)?e:[e]).forEach(n=>n(Y))}var P={},bt=!1;function ni(e,t){if(bt||(P=W(P),bt=!0),t===void 0)return P[e];P[e]=t,Xe(P[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&P[e].init()}function ri(){return P}var mn={};function ii(e,t){let n=typeof t!="function"?()=>t:t;return e instanceof Element?vn(e,n()):(mn[e]=n,()=>{})}function ai(e){return Object.entries(mn).forEach(([t,n])=>{Object.defineProperty(e,t,{get(){return(...r)=>n(...r)}})}),e}function vn(e,t,n){let r=[];for(;r.length;)r.pop()();let i=Object.entries(t).map(([o,s])=>({name:o,value:s})),a=Kt(i);return i=i.map(o=>a.find(s=>s.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),et(e,i,n).map(o=>{r.push(o.runCleanups),o()}),()=>{for(;r.length;)r.pop()()}}var xn={};function oi(e,t){xn[e]=t}function si(e,t){return Object.entries(xn).forEach(([n,r])=>{Object.defineProperty(e,n,{get(){return(...i)=>r.bind(t)(...i)},enumerable:!1})}),e}var li={get reactive(){return W},get release(){return J},get effect(){return F},get raw(){return Mt},get transaction(){return Xn},version:"3.15.12",flushAndStopDeferringMutations:rr,dontAutoEvaluateFunctions:Bt,disableEffectScheduling:Gn,startObservingMutations:Ge,stopObservingMutations:Lt,setReactivityEngine:Yn,onAttributeRemoved:It,onAttributesAdded:jt,closestDataStack:k,skipDuringClone:$,onlyDuringClone:kr,addRootSelector:rn,addInitSelector:an,setErrorHandler:cr,interceptClone:xe,addScopeToNode:oe,deferMutations:nr,mapAttributes:tt,evaluateLater:x,interceptInit:Cr,initInterceptors:Xe,injectMagics:re,setEvaluator:fr,setRawEvaluator:dr,mergeProxies:z,extractProp:ei,findClosest:O,onElRemoved:We,closestRoot:me,destroyTree:G,interceptor:zt,transition:De,setStyles:ve,mutateDom:h,directive:g,entangle:bn,throttle:gn,debounce:hn,evaluate:R,evaluateRaw:br,initTree:C,nextTick:it,prefixed:V,prefix:vr,plugin:ti,magic:E,store:ni,start:Sr,clone:Dr,cloneNode:zr,bound:Zr,$data:qt,watch:Tt,walk:D,data:oi,bind:ii},Y=li;function ci(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return i=>!!n[i]}var ui=Object.freeze({}),fi=Object.prototype.hasOwnProperty,ye=(e,t)=>fi.call(e,t),L=Array.isArray,ne=e=>yn(e)==="[object Map]",di=e=>typeof e=="string",st=e=>typeof e=="symbol",we=e=>e!==null&&typeof e=="object",pi=Object.prototype.toString,yn=e=>pi.call(e),wn=e=>yn(e).slice(8,-1),lt=e=>di(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_i=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},hi=_i(e=>e.charAt(0).toUpperCase()+e.slice(1)),En=(e,t)=>e!==t&&(e===e||t===t),Be=new WeakMap,Z=[],A,q=Symbol("iterate"),He=Symbol("Map key iterate");function gi(e){return e&&e._isEffect===!0}function bi(e,t=ui){gi(e)&&(e=e.raw);const n=xi(e,t);return t.lazy||n(),n}function mi(e){e.active&&(An(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var vi=0;function xi(e,t){const n=function(){if(!n.active)return e();if(!Z.includes(n)){An(n);try{return wi(),Z.push(n),A=n,e()}finally{Z.pop(),Sn(),A=Z[Z.length-1]}}};return n.id=vi++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function An(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}var K=!0,ct=[];function yi(){ct.push(K),K=!1}function wi(){ct.push(K),K=!0}function Sn(){const e=ct.pop();K=e===void 0?!0:e}function w(e,t,n){if(!K||A===void 0)return;let r=Be.get(e);r||Be.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(A)||(i.add(A),A.deps.push(i),A.options.onTrack&&A.options.onTrack({effect:A,target:e,type:t,key:n}))}function N(e,t,n,r,i,a){const o=Be.get(e);if(!o)return;const s=new Set,l=u=>{u&&u.forEach(d=>{(d!==A||d.allowRecurse)&&s.add(d)})};if(t==="clear")o.forEach(l);else if(n==="length"&&L(e))o.forEach((u,d)=>{(d==="length"||d>=r)&&l(u)});else switch(n!==void 0&&l(o.get(n)),t){case"add":L(e)?lt(n)&&l(o.get("length")):(l(o.get(q)),ne(e)&&l(o.get(He)));break;case"delete":L(e)||(l(o.get(q)),ne(e)&&l(o.get(He)));break;case"set":ne(e)&&l(o.get(q));break}const c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:e,key:n,type:t,newValue:r,oldValue:i,oldTarget:a}),u.options.scheduler?u.options.scheduler(u):u()};s.forEach(c)}var Ei=ci("__proto__,__v_isRef,__isVue"),On=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(st)),Ai=Cn(),Si=Cn(!0),mt=Oi();function Oi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=p(this);for(let a=0,o=this.length;a<o;a++)w(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(p)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){yi();const r=p(this)[t].apply(this,n);return Sn(),r}}),e}function Cn(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_raw"&&a===(e?t?Di:$n:t?zi:Nn).get(r))return r;const o=L(r);if(!e&&o&&ye(mt,i))return Reflect.get(mt,i,a);const s=Reflect.get(r,i,a);return(st(i)?On.has(i):Ei(i))||(e||w(r,"get",i),t)?s:Ue(s)?!o||!lt(i)?s.value:s:we(s)?e?Pn(s):pt(s):s}}var Ci=Mi();function Mi(e=!1){return function(n,r,i,a){let o=n[r];if(!e&&(i=p(i),o=p(o),!L(n)&&Ue(o)&&!Ue(i)))return o.value=i,!0;const s=L(n)&&lt(r)?Number(r)<n.length:ye(n,r),l=Reflect.set(n,r,i,a);return n===p(a)&&(s?En(i,o)&&N(n,"set",r,i,o):N(n,"add",r,i)),l}}function Ti(e,t){const n=ye(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&N(e,"delete",t,void 0,r),i}function Ni(e,t){const n=Reflect.has(e,t);return(!st(t)||!On.has(t))&&w(e,"has",t),n}function $i(e){return w(e,"iterate",L(e)?"length":q),Reflect.ownKeys(e)}var Pi={get:Ai,set:Ci,deleteProperty:Ti,has:Ni,ownKeys:$i},ji={get:Si,set(e,t){return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},ut=e=>we(e)?pt(e):e,ft=e=>we(e)?Pn(e):e,dt=e=>e,Ee=e=>Reflect.getPrototypeOf(e);function se(e,t,n=!1,r=!1){e=e.__v_raw;const i=p(e),a=p(t);t!==a&&!n&&w(i,"get",t),!n&&w(i,"get",a);const{has:o}=Ee(i),s=r?dt:n?ft:ut;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function le(e,t=!1){const n=this.__v_raw,r=p(n),i=p(e);return e!==i&&!t&&w(r,"has",e),!t&&w(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ce(e,t=!1){return e=e.__v_raw,!t&&w(p(e),"iterate",q),Reflect.get(e,"size",e)}function vt(e){e=p(e);const t=p(this);return Ee(t).has.call(t,e)||(t.add(e),N(t,"add",e,e)),this}function xt(e,t){t=p(t);const n=p(this),{has:r,get:i}=Ee(n);let a=r.call(n,e);a?Tn(n,r,e):(e=p(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?En(t,o)&&N(n,"set",e,t,o):N(n,"add",e,t),this}function yt(e){const t=p(this),{has:n,get:r}=Ee(t);let i=n.call(t,e);i?Tn(t,n,e):(e=p(e),i=n.call(t,e));const a=r?r.call(t,e):void 0,o=t.delete(e);return i&&N(t,"delete",e,void 0,a),o}function wt(){const e=p(this),t=e.size!==0,n=ne(e)?new Map(e):new Set(e),r=e.clear();return t&&N(e,"clear",void 0,void 0,n),r}function ue(e,t){return function(r,i){const a=this,o=a.__v_raw,s=p(o),l=t?dt:e?ft:ut;return!e&&w(s,"iterate",q),o.forEach((c,u)=>r.call(i,l(c),l(u),a))}}function fe(e,t,n){return function(...r){const i=this.__v_raw,a=p(i),o=ne(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),u=n?dt:t?ft:ut;return!t&&w(a,"iterate",l?He:q),{next(){const{value:d,done:b}=c.next();return b?{value:d,done:b}:{value:s?[u(d[0]),u(d[1])]:u(d),done:b}},[Symbol.iterator](){return this}}}}function M(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${hi(e)} operation ${n}failed: target is readonly.`,p(this))}return e==="delete"?!1:this}}function Ii(){const e={get(a){return se(this,a)},get size(){return ce(this)},has:le,add:vt,set:xt,delete:yt,clear:wt,forEach:ue(!1,!1)},t={get(a){return se(this,a,!1,!0)},get size(){return ce(this)},has:le,add:vt,set:xt,delete:yt,clear:wt,forEach:ue(!1,!0)},n={get(a){return se(this,a,!0)},get size(){return ce(this,!0)},has(a){return le.call(this,a,!0)},add:M("add"),set:M("set"),delete:M("delete"),clear:M("clear"),forEach:ue(!0,!1)},r={get(a){return se(this,a,!0,!0)},get size(){return ce(this,!0)},has(a){return le.call(this,a,!0)},add:M("add"),set:M("set"),delete:M("delete"),clear:M("clear"),forEach:ue(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=fe(a,!1,!1),n[a]=fe(a,!0,!1),t[a]=fe(a,!1,!0),r[a]=fe(a,!0,!0)}),[e,n,t,r]}var[Ri,Li]=Ii();function Mn(e,t){const n=e?Li:Ri;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ye(n,i)&&i in r?n:r,i,a)}var qi={get:Mn(!1)},ki={get:Mn(!0)};function Tn(e,t,n){const r=p(n);if(r!==n&&t.call(e,r)){const i=wn(e);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Nn=new WeakMap,zi=new WeakMap,$n=new WeakMap,Di=new WeakMap;function Fi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bi(e){return e.__v_skip||!Object.isExtensible(e)?0:Fi(wn(e))}function pt(e){return e&&e.__v_isReadonly?e:jn(e,!1,Pi,qi,Nn)}function Pn(e){return jn(e,!0,ji,ki,$n)}function jn(e,t,n,r,i){if(!we(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Bi(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function p(e){return e&&p(e.__v_raw)||e}function Ue(e){return!!(e&&e.__v_isRef===!0)}E("nextTick",()=>it);E("dispatch",e=>te.bind(te,e));E("watch",(e,{evaluateLater:t,cleanup:n})=>(r,i)=>{let a=t(r),s=Tt(()=>{let l;return a(c=>l=c),l},i);n(s)});E("store",ri);E("data",e=>qt(e));E("root",e=>me(e));E("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=z(Hi(e))),e._x_refs_proxy));function Hi(e){let t=[];return O(e,n=>{n._x_refs&&t.push(n._x_refs)}),t}var Ce={};function In(e){return Ce[e]||(Ce[e]=0),++Ce[e]}function Ui(e,t){return O(e,n=>{if(n._x_ids&&n._x_ids[t])return!0})}function Ki(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=In(t))}E("id",(e,{cleanup:t})=>(n,r=null)=>{let i=`${n}${r?`-${r}`:""}`;return Wi(e,i,t,()=>{let a=Ui(e,n),o=a?a._x_ids[n]:In(n);return r?`${n}-${o}-${r}`:`${n}-${o}`})});xe((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Wi(e,t,n,r){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let i=r();return e._x_id[t]=i,n(()=>{delete e._x_id[t]}),i}E("el",e=>e);Rn("Focus","focus","focus");Rn("Persist","persist","persist");function Rn(e,t,n){E(t,r=>S(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}g("modelable",(e,{expression:t},{effect:n,evaluateLater:r,cleanup:i})=>{let a=r(t),o=()=>{let u;return a(d=>u=d),u},s=r(`${t} = __placeholder`),l=u=>s(()=>{},{scope:{__placeholder:u}}),c=o();l(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let u=e._x_model.get,d=e._x_model.setWithModifiers,b=bn({get(){return u()},set(_){d(_)}},{get(){return o()},set(_){l(_)}});i(b)})});g("teleport",(e,{modifiers:t,expression:n},{cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&S("x-teleport can only be used on a <template> tag",e);let i=Et(n),a=e.content.cloneNode(!0).firstElementChild;e._x_teleport=a,a._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),a.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(s=>{a.addEventListener(s,l=>{l.stopPropagation(),e.dispatchEvent(new l.constructor(l.type,l))})}),oe(a,{},e);let o=(s,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(s,l):c.includes("append")?l.parentNode.insertBefore(s,l.nextSibling):l.appendChild(s)};h(()=>{$(()=>{o(a,i,t),C(a)})()}),e._x_teleportPutBack=()=>{let s=Et(n);h(()=>{o(e._x_teleport,s,t)})},r(()=>h(()=>{a.remove(),G(a)}))});var Ji=document.createElement("div");function Et(e){let t=$(()=>document.querySelector(e),()=>Ji)();return t||S(`Cannot find x-teleport element for selector: "${e}"`),t}var Ln=()=>{};Ln.inline=(e,{modifiers:t},{cleanup:n})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,n(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};g("ignore",Ln);g("effect",$((e,{expression:t},{effect:n})=>{n(x(e,t))}));function H(e,t,n,r){let i=e,a=l=>r(l),o={},s=(l,c)=>u=>c(l,u);return n.includes("dot")&&(t=Vi(t)),n.includes("camel")&&(t=Gi(t)),n.includes("capture")&&(o.capture=!0),n.includes("window")&&(i=window),n.includes("document")&&(i=document),n.includes("passive")&&(o.passive=n[n.indexOf("passive")+1]!=="false"),a=qn(n,a),n.includes("prevent")&&(a=s(a,(l,c)=>{c.preventDefault(),l(c)})),n.includes("stop")&&(a=s(a,(l,c)=>{c.stopPropagation(),l(c)})),n.includes("once")&&(a=s(a,(l,c)=>{l(c),i.removeEventListener(t,a,o)})),(n.includes("away")||n.includes("outside"))&&(i=document,a=s(a,(l,c)=>{e.contains(c.target)||c.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&l(c))})),n.includes("self")&&(a=s(a,(l,c)=>{c.target===e&&l(c)})),t==="submit"&&(a=s(a,(l,c)=>{c.target._x_pendingModelUpdates&&c.target._x_pendingModelUpdates.forEach(u=>u()),l(c)})),(Qi(t)||kn(t))&&(a=s(a,(l,c)=>{Xi(c,n)||l(c)})),i.addEventListener(t,a,o),()=>{i.removeEventListener(t,a,o)}}function qn(e,t){if(e.includes("debounce")){let n=e[e.indexOf("debounce")+1]||"invalid-wait",r=be(n.split("ms")[0])?Number(n.split("ms")[0]):250;t=hn(t,r)}if(e.includes("throttle")){let n=e[e.indexOf("throttle")+1]||"invalid-wait",r=be(n.split("ms")[0])?Number(n.split("ms")[0]):250;t=gn(t,r)}return t}function Vi(e){return e.replace(/-/g,".")}function Gi(e){return e.toLowerCase().replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function be(e){return!Array.isArray(e)&&!isNaN(e)}function Yi(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Qi(e){return["keydown","keyup"].includes(e)}function kn(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}function Xi(e,t){let n=t.filter(a=>!["window","document","prevent","stop","once","capture","self","away","outside","passive","preserve-scroll","blur","change","lazy"].includes(a));if(n.includes("debounce")){let a=n.indexOf("debounce");n.splice(a,be((n[a+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let a=n.indexOf("throttle");n.splice(a,be((n[a+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&At(e.key).includes(n[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(a=>n.includes(a));return n=n.filter(a=>!i.includes(a)),!(i.length>0&&i.filter(o=>((o==="cmd"||o==="super")&&(o="meta"),e[`${o}Key`])).length===i.length&&(kn(e.type)||At(e.key).includes(n[0])))}function At(e){if(!e)return[];e=Yi(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(n=>{if(t[n]===e)return n}).filter(n=>n)}g("model",(e,{modifiers:t,expression:n},{effect:r,cleanup:i})=>{let a=e;t.includes("parent")&&(a=O(e,f=>f!==e));let o=x(a,n),s;typeof n=="string"?s=x(a,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?s=x(a,`${n()} = __placeholder`):s=()=>{};let l=()=>{let f;return o(m=>f=m),St(f)?f.get():f},c=f=>{let m;o(v=>m=v),St(m)?m.set(f):s(()=>{},{scope:{__placeholder:f}})};typeof n=="string"&&e.type==="radio"&&h(()=>{e.hasAttribute("name")||e.setAttribute("name",n)});let u=t.includes("change")||t.includes("lazy"),d=t.includes("blur"),b=t.includes("enter"),_=u||d||b,y;if(T)y=()=>{};else if(_){let f=[],m=v=>c(de(e,t,v,l()));if(u&&f.push(H(e,"change",t,m)),d&&(f.push(H(e,"blur",t,m)),e.form)){let v=e.form,B=()=>m({target:e});v._x_pendingModelUpdates||(v._x_pendingModelUpdates=[]),v._x_pendingModelUpdates.push(B),i(()=>{v._x_pendingModelUpdates&&v._x_pendingModelUpdates.splice(v._x_pendingModelUpdates.indexOf(B),1)})}b&&f.push(H(e,"keydown",t,v=>{v.key==="Enter"&&m(v)})),y=()=>f.forEach(v=>v())}else{let f=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";y=H(e,f,t,m=>{c(de(e,t,m,l()))})}if(t.includes("fill")&&([void 0,null,""].includes(l())||ge(e)&&Array.isArray(l())||e.tagName.toLowerCase()==="select"&&e.multiple)&&c(de(e,t,{target:e},l())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=y,i(()=>e._x_removeModelListeners.default()),e.form){let f=H(e.form,"reset",[],m=>{it(()=>e._x_model&&e._x_model.set(de(e,t,{target:e},l())))});i(()=>f())}e._x_model={get(){return l()},set(f){c(f)},setWithModifiers:qn(t,c)},e._x_forceModelUpdate=f=>{f===void 0&&typeof n=="string"&&n.match(/\./)&&(f=""),h(()=>{ge(e)?Array.isArray(f)?e.checked=f.some(m=>m==e.value):e.checked=!!f:ot(e)?typeof f=="boolean"?e.checked=pe(e.value)===f:e.checked=e.value==f:fn(e,"value",f)})},r(()=>{let f=l();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(f)})});function de(e,t,n,r){return h(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail!==null&&n.detail!==void 0?n.detail:n.target.value;if(ge(e))if(Array.isArray(r)){let i=null;return t.includes("number")?i=Me(n.target.value):t.includes("boolean")?i=pe(n.target.value):i=n.target.value,n.target.checked?r.includes(i)?r:r.concat([i]):r.filter(a=>!Zi(a,i))}else return n.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(n.target.selectedOptions).map(i=>{let a=i.value||i.text;return Me(a)}):t.includes("boolean")?Array.from(n.target.selectedOptions).map(i=>{let a=i.value||i.text;return pe(a)}):Array.from(n.target.selectedOptions).map(i=>i.value||i.text);{let i;return ot(e)?n.target.checked?i=n.target.value:i=r:i=n.target.value,t.includes("number")?Me(i):t.includes("boolean")?pe(i):t.includes("trim")?i.trim():i}}})}function Me(e){let t=e?parseFloat(e):null;return ea(t)?t:e}function Zi(e,t){return e==t}function ea(e){return!Array.isArray(e)&&!isNaN(e)}function St(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}g("cloak",e=>queueMicrotask(()=>h(()=>e.removeAttribute(V("cloak")))));an(()=>`[${V("init")}]`);g("init",$((e,{expression:t},{evaluate:n})=>typeof t=="string"?!!t.trim()&&n(t,{},!1):n(t,{},!1)));g("text",(e,{expression:t},{effect:n,evaluateLater:r})=>{let i=r(t);n(()=>{i(a=>{h(()=>{e.textContent=a})})})});g("html",(e,{expression:t},{effect:n,evaluateLater:r})=>{let i=r(t);n(()=>{i(a=>{h(()=>{e.innerHTML=a??"",e._x_ignoreSelf=!0,C(e),delete e._x_ignoreSelf})})})});tt(Vt(":",Gt(V("bind:"))));var zn=(e,{value:t,modifiers:n,expression:r,original:i},{effect:a,cleanup:o})=>{if(!t){let l={};ai(l),x(e,r)(u=>{vn(e,u,i)},{scope:l});return}if(t==="key")return ta(e,r);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let s=x(e,r);a(()=>s(l=>{l===void 0&&typeof r=="string"&&r.match(/\./)&&(l=""),h(()=>fn(e,t,l,n))})),o(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};zn.inline=(e,{value:t,modifiers:n,expression:r})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:r,extract:!1})};g("bind",zn);function ta(e,t){e._x_keyExpression=t}rn(()=>`[${V("data")}]`);g("data",(e,{expression:t},{cleanup:n})=>{if(na(e))return;t=t===""?"{}":t;let r={};re(r,e);let i={};si(i,r);let a=R(e,t,{scope:i});(a===void 0||a===!0)&&(a={}),re(a,e);let o=W(a);Xe(o);let s=oe(e,o);o.init&&R(e,o.init),n(()=>{o.destroy&&R(e,o.destroy),s()})});xe((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function na(e){return T?Fe?!0:e.hasAttribute("data-has-alpine-state"):!1}g("show",(e,{modifiers:t,expression:n},{effect:r})=>{let i=x(e,n);e._x_doHide||(e._x_doHide=()=>{h(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{h(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let a=()=>{e._x_doHide(),e._x_isShown=!1},o=()=>{e._x_doShow(),e._x_isShown=!0},s=()=>setTimeout(o),l=ze(d=>d?o():a(),d=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,d,o,a):d?s():a()}),c,u=!0;r(()=>i(d=>{!u&&d===c||(t.includes("immediate")&&(d?s():a()),l(d),c=d,u=!1)}))});g("for",(e,{expression:t},{effect:n,cleanup:r})=>{let i=aa(t),a=x(e,i.items),o=x(e,e._x_keyExpression||"index");e._x_lookup=new Map,n(()=>ia(e,i,a,o)),r(()=>{e._x_lookup.forEach(s=>h(()=>{G(s),s.remove()})),delete e._x_lookup})});function ra(e){return t=>{Object.entries(t).forEach(([n,r])=>{e[n]=r})}}function ia(e,t,n,r){n(i=>{sa(i)&&(i=Array.from({length:i},(c,u)=>u+1)),i==null&&(i=[]),i instanceof Set&&(i=Array.from(i)),i instanceof Map&&(i=Array.from(i));let a=e._x_lookup,o=new Map;e._x_lookup=o;let s=la(i),l=Object.entries(i).map(([c,u])=>{s||(c=parseInt(c));let d=oa(t,u,c,i),b;return r(_=>{typeof _=="object"&&S("x-for key cannot be an object, it must be a string or an integer",e),a.has(_)&&(o.set(_,a.get(_)),a.delete(_)),b=_},{scope:{index:c,...d}}),[b,d]});h(()=>{a.forEach(d=>{G(d),d.remove()});let c=new Set,u=e;l.forEach(([d,b])=>{if(o.has(d)){let f=o.get(d);f._x_refreshXForScope(b),u.nextElementSibling!==f&&(u.nextElementSibling&&f.replaceWith(u.nextElementSibling),u.after(f)),u=f,f._x_currentIfEl&&(f.nextElementSibling!==f._x_currentIfEl&&u.after(f._x_currentIfEl),u=f._x_currentIfEl);return}e.content.children.length>1&&S("x-for templates require a single root element, additional elements will be ignored.",e);let _=document.importNode(e.content,!0).firstElementChild,y=W(b);oe(_,y,e),_._x_refreshXForScope=ra(y),o.set(d,_),c.add(_),u.after(_),u=_}),$(()=>c.forEach(d=>C(d)))()})})}function aa(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,r=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=e.match(r);if(!i)return;let a={};a.items=i[2].trim();let o=i[1].replace(n,"").trim(),s=o.match(t);return s?(a.item=o.replace(t,"").trim(),a.index=s[1].trim(),s[2]&&(a.collection=s[2].trim())):a.item=o,a}function oa(e,t,n,r){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(o=>o.trim()).forEach((o,s)=>{i[o]=t[s]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(o=>o.trim()).forEach(o=>{i[o]=t[o]}):i[e.item]=t,e.index&&(i[e.index]=n),e.collection&&(i[e.collection]=r),i}function sa(e){return typeof e!="object"&&!isNaN(e)}function la(e){return typeof e=="object"&&!Array.isArray(e)}function Dn(){}Dn.inline=(e,{expression:t},{cleanup:n})=>{let r=me(e);r&&(r._x_refs||(r._x_refs={}),r._x_refs[t]=e,n(()=>delete r._x_refs[t]))};g("ref",Dn);g("if",(e,{expression:t},{effect:n,cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&S("x-if can only be used on a <template> tag",e);let i=x(e,t),a=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let s=e.content.cloneNode(!0).firstElementChild;return oe(s,{},e),h(()=>{e.after(s),$(()=>C(s))()}),e._x_currentIfEl=s,e._x_undoIf=()=>{h(()=>{G(s),s.remove()}),delete e._x_currentIfEl},s},o=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};n(()=>i(s=>{s?a():o()})),r(()=>e._x_undoIf&&e._x_undoIf())});g("id",(e,{expression:t},{evaluate:n})=>{n(t).forEach(i=>Ki(e,i))});xe((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});tt(Vt("@",Gt(V("on:"))));g("on",$((e,{value:t,modifiers:n,expression:r},{cleanup:i})=>{let a=r?x(e,r):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let o=H(e,t,n,s=>{a(()=>{},{scope:{$event:s},params:[s]})});i(()=>o())}));Ae("Collapse","collapse","collapse");Ae("Intersect","intersect","intersect");Ae("Focus","trap","focus");Ae("Mask","mask","mask");function Ae(e,t,n){g(t,r=>S(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}Y.setEvaluator(pr);Y.setRawEvaluator(mr);Y.setReactivityEngine({reactive:pt,effect:bi,release:mi,raw:p});var ca=Y,Fn=ca;function ua(){return`
        <header class="win98-window">

            <div class="win98-titlebar">

                <span>
                    ¡Abrázame!, después del apocalipsis
                </span>

                <div class="win98-title-buttons">
                    <div class="win98-button"></div>
                    <div class="win98-button"></div>
                    <div class="win98-button"></div>
                </div>

            </div>
        </header>
    `}const fa=`<main class="layout-body">\r
  <!-- Left Texture -->\r
  <aside class="layout-texture"></aside>\r
\r
  <!-- Main Content -->\r
  <section class="layout-content">\r
    <!-- RAIN_COMPONENT -->\r
    <div class="relative z-10">\r
      <!-- DYNAMIC_CONTENT -->\r
      <!-- NAVIGATION_COMPONENT -->\r
    </div>\r
  </section>\r
\r
  <!-- Right Texture -->\r
  <aside class="layout-texture"></aside>\r
</main>\r
`,da=`<div class="cross-rain">\r
  <!-- RAIN_DROPS -->\r
</div>\r
`;function pa(e){const{count:t=120,symbols:n=["✝","☩","✞","†","☨"],minSize:r=12,maxSize:i=34,minDuration:a=6,maxDuration:o=18,minOpacity:s=.25,maxOpacity:l=.95}=e||{},c=Array.from({length:t}).map(()=>{const u=n[Math.floor(Math.random()*n.length)],d=Math.random()*100,b=a+Math.random()*(o-a),_=Math.random()*8,y=r+Math.random()*(i-r),f=s+Math.random()*(l-s);return`
                <span
                    style="
                        left: ${d}%;

                        animation-duration: ${b}s;

                        animation-delay: ${_}s;

                        font-size: ${y}px;

                        opacity: ${f};
                    "
                >
                    ${u}
                </span>
            `}).join("");return da.replace("<!-- RAIN_DROPS -->",c)}function _a(){return`
        <div class="win98-window max-w-5xl mx-auto">

            <div class="win98-titlebar win98-titlebar-rgb">

                <span>
                    intro.txt
                </span>

            </div>

            <div class="win98-panel p-8 text-black">

                <h2 class="text-5xl">
                    Soledad, luto, pensamientos y náuseas.
                </h2>

                <p class="text-3xl mt-6 leading-relaxed">
                    Sin nadie a quien abrazar.
                    Sin nadie a quien amar.
                    ¿Algún día cambiará?
                </p>

                <img
                    src="./textures/liminal.jpg"
                    class="mt-8 border-4 border-black w-full"
                />

                <div
                    class="
                        mt-10

                        flex
                        justify-center
                    "
                >

                    <a
                        href="#/c1"

                        class="
                            inline-flex
                            items-center
                            gap-4

                            px-6
                            py-4

                            border-2
                            border-red-700

                            bg-black
                            text-red-500

                            text-2xl

                            hover:bg-red-950
                            hover:text-red-300

                            transition-all
                            duration-300
                        "
                    >

                        <span class="text-4xl">
                            ✞
                        </span>

                        <span>
                            LEER CAPÍTULO UNO
                        </span>

                        <span class="text-4xl">
                            ✞
                        </span>

                    </a>

                </div>

            </div>

        </div>
    `}function ha(){return`
        <div class="win98-window max-w-5xl mx-auto">

            <!-- Window Header -->
            <div class="win98-titlebar win98-titlebar-lore">

                <span>
                    chapter_1.txt
                </span>

                <div class="win98-title-buttons">

                    <div class="win98-button"></div>

                    <div class="win98-button"></div>

                    <div class="win98-button"></div>

                </div>

            </div>

            <!-- Window Content -->
            <div class="win98-panel p-8 text-black">

                <!-- Title -->
                <h2 class="text-5xl leading-tight">
                    Pensamientos y Náuseas
                </h2>

                <!-- Intro Image -->
                <img
                    src="./images/c1a.jpg"
                    class="
                        mt-8

                        border-4
                        border-black

                        w-1/2

                        mx-auto

                        block
                    "
                />

                <!-- Chapter Text -->
                <div
                    class="
                        mt-10

                        text-2xl
                        leading-relaxed

                        space-y-8
                    "
                >

                    <p>
                        Contemplaba el atardecer y mi mente regresó
                        a la última cena con mis padres, justo la
                        noche antes de que el apocalipsis llegara al
                        pueblo y me dejara sola.
                    </p>

                    <p>
                        En el horizonte, el sol dibujaba pinceladas
                        cálidas, tonos anaranjados y rosáceos que
                        contrastaban con el gris profundo de las
                        nubes de lluvia.
                    </p>

                    <p>
                        Mientras tanto, mis manos seguían cosechando
                        café mecánicamente, aferradas a una rutina
                        que mantengo incluso años después de que
                        todas las personas del mundo desaparecieran.
                    </p>

                    <p>
                        Junto a mí descansaba la escultura de
                        arcilla con forma de conejo que modelé hace
                        tanto tiempo.
                    </p>

                    <p>
                        Buscando consuelo en su figura estática,
                        acaricié sus orejas frías y rompí el
                        silencio:
                    </p>

                    <blockquote
                        class="
                            border-l-4
                            border-red-700

                            pl-6

                            italic

                            text-red-700
                        "
                    >
                        —¿No crees que a papá y a mamá les habría
                        encantado esta nueva cosecha?
                    </blockquote>

                    <p>
                        Mi voz sonó frágil, un intento desesperado
                        por llenar el vacío con una conversación que
                        solo existía en mi cabeza.
                    </p>

                    <p>
                        Aunque la arcilla permanecía inmóvil, mi
                        mente dibujaba respuestas y gestos
                        familiares.
                    </p>

                    <p>
                        Cuando las primeras gotas de lluvia me
                        obligaron a buscar refugio, me despedí de él
                        como si fuera de carne y hueso:
                    </p>

                    <blockquote
                        class="
                            border-l-4
                            border-red-700

                            pl-6

                            italic

                            text-red-700
                        "
                    >
                        —Espero que disfrutes del agua, vecino
                        Antonio.
                    </blockquote>

                    <p>
                        Me detuve en el umbral para verlo una última
                        vez; la lluvia comenzaba a oscurecer la
                        arcilla y sonreí con tristeza.
                    </p>

                    <p>
                        De pronto, el rugido de un motor viejo rompió
                        la tranquilidad del valle.
                    </p>

                    <p>
                        Solté un pequeño grito, asustada.
                    </p>

                    <p>
                        Mi corazón se detuvo un instante antes de
                        volver a latir violentamente; la taquicardia
                        se apoderó de mi pecho.
                    </p>

                    <p>
                        Al girarme, distinguí la silueta borrosa de
                        un hombre con sombrero negro descendiendo de
                        una moto oscura.
                    </p>

                    <p>
                        “No es real”, pensé, frotándome los ojos con
                        fuerza.
                    </p>

                    <p>
                        Pero la figura no desapareció.
                    </p>

                    <p>
                        Cuando el forastero se desplomó en el barro,
                        la urgencia superó al miedo.
                    </p>

                    <p>
                        Corrí a su lado, ignorando la lluvia que ya
                        empezaba a calar mi ropa.
                    </p>

                    <p>
                        Al tocarlo, el impacto fue eléctrico:
                        era sólido, real.
                    </p>

                    <p>
                        Una vez a salvo, el cuerpo me pasó factura.
                    </p>

                    <p>
                        Me refugié en una esquina, respirando hondo
                        hasta domar la taquicardia.
                    </p>

                    <p>
                        Cuando mi mente se despejó, noté que él me
                        observaba.
                    </p>

                    <p>
                        Gateé hacia él y toqué su mano.
                    </p>

                    <p>
                        El calor de su piel fue la prueba definitiva.
                    </p>

                    <p>
                        Sentí una sacudida que no experimentaba hacía
                        años:
                        alguien más respiraba el mismo aire que yo.
                    </p>

                    <p>
                        A diferencia de mi conejo de arcilla,
                        él era innegablemente real.
                    </p>

                    <p>
                        Más tarde, él levantó la mirada agotada hacia
                        mí para susurrar:
                    </p>

                    <blockquote
                        class="
                            border-l-4
                            border-blue-700

                            pl-6

                            italic

                            text-blue-700
                        "
                    >
                        —Gracias por dejarme pasar.
                        Hace tiempo que no veía a alguien con vida.
                        ¿Eres real o estoy delirando?
                    </blockquote>

                    <p>
                        No hablamos más aquella noche.
                    </p>

                    <p>
                        Cuando el cansancio lo venció, lo acomodé
                        junto a las mantas y me quedé observándolo
                        hasta que el sueño también me venció a mí.
                    </p>

                    <p>
                        Al despertar, descubrí que la manta me cubría
                        a mí y que una almohada sostenía mi cabeza.
                    </p>

                    <p>
                        El motero ya estaba de pie, contemplando los
                        murales que había pintado en las paredes.
                    </p>

                    <blockquote
                        class="
                            border-l-4
                            border-blue-700

                            pl-6

                            italic

                            text-blue-700
                        "
                    >
                        —¿Te gustan los conejos?
                        Esta pintura parece especial.
                        ¿Qué significa?
                    </blockquote>

                    <p>
                        Un dolor agudo me atravesó el pecho.
                    </p>

                    <p>
                        Quise responder, pero la garganta se me
                        cerró.
                    </p>

                    <p>
                        Ese dibujo era la última cena con mis padres
                        y vecinos, la noche antes de que el mundo se
                        acabara.
                    </p>

                    <p>
                        Él se acercó despacio y pasó su mano por mi
                        cabello con torpeza.
                    </p>

                    <p>
                        Ese contacto humano fue demasiado:
                        mis defensas cayeron y las lágrimas brotaron
                        sin control.
                    </p>

                    <blockquote
                        class="
                            border-l-4
                            border-blue-700

                            pl-6

                            italic

                            text-blue-700
                        "
                    >
                        —Has vivido cosas muy difíciles,
                        ¿verdad?
                    </blockquote>

                    <blockquote
                        class="
                            border-l-4
                            border-blue-700

                            pl-6

                            italic

                            text-blue-700
                        "
                    >
                        —Me llamo Iván.
                        Es un placer conocerte.
                    </blockquote>

                    <p>
                        Le estreché la mano y, con señas, le pedí un
                        momento a solas.
                    </p>

                    <p>
                        Me encerré en el baño y me quité la ropa que
                        llevaba puesta desde hacía años.
                    </p>

                    <p>
                        Mientras el agua caliente corría sobre mi
                        cuerpo, intenté despejar mi mente.
                    </p>

                    <p>
                        Sabía que al salir tendría que enfrentar algo
                        para lo que no estaba lista:
                        interactuar con una persona después de haber
                        visto a tantos morir.
                    </p>

                </div>
            </div>

        </div>
    `}function ga(){return(window.location.hash||"#/")==="#/c1"?ha():_a()}function ba(){const e=window.location.hash||"#/",t=Number(e.replace("#/c","")),n=e==="#/";let r="#/",i="HOME",a="#/c1",o="CAPÍTULO 1";return!n&&!Number.isNaN(t)&&(r=t<=1?"#/":`#/c${t-1}`,i=t<=1?"HOME":`CAPÍTULO ${t-1}`,a=`#/c${t+1}`,o=`CAPÍTULO ${t+1}`),`
        <div
            class="
                mt-10

                flex
                items-center
                justify-between

                gap-6
                flex-wrap
            "
        >

            <!-- Previous -->
            <a
                href="${r}"

                class="
                    inline-flex
                    items-center
                    gap-3

                    px-5
                    py-3

                    border-2
                    border-blue-700

                    bg-black
                    text-blue-400

                    text-xl

                    hover:bg-blue-950
                    hover:text-blue-200

                    transition-all
                    duration-300
                "
            >

                <span class="material-icons text-3xl">
                    arrow_back
                </span>

                <span>
                    ${i}
                </span>

            </a>

            <!-- Next -->
            <a
                href="${a}"

                class="
                    inline-flex
                    items-center
                    gap-3

                    px-5
                    py-3

                    border-2
                    border-red-700

                    bg-black
                    text-red-500

                    text-xl

                    hover:bg-red-950
                    hover:text-red-300

                    transition-all
                    duration-300
                "
            >

                <span>
                    ${o}
                </span>

                <span class="material-icons text-3xl">
                    arrow_forward
                </span>

            </a>

        </div>
    `}function ma(){let e=fa;return e=e.replace("<!-- RAIN_COMPONENT -->",pa({count:180,symbols:["✝","☩","✞","†","☨"]})),e=e.replace("<!-- DYNAMIC_CONTENT -->",ga()),e=e.replace("<!-- NAVIGATION_COMPONENT -->",ba()),e}const va="/abrazame-webcore/gifs/tubos.gif";function xa(){return`
        <footer
            class="
                win98-window
                overflow-hidden
            "
        >

            <!-- Titlebar -->
            <div class="win98-titlebar">

                <span>
                    footer_information.sys
                </span>

                <div class="win98-title-buttons">

                    <div class="win98-button"></div>

                    <div class="win98-button"></div>

                    <div class="win98-button"></div>

                </div>

            </div>

            <!-- Footer Content -->
            <div
                class="
                    relative
                    overflow-hidden

                    bg-black

                    px-6
                    py-10
                "
            >

                <!-- Animated GIF Background -->
                <div
                    class="
                        absolute
                        inset-0

                        pointer-events-none
                    "
                    style="
                        background-image: url('${va}');

                        background-size: auto 100%;

                        background-position: center;

                        background-repeat: repeat-x;
                    "
                ></div>

                <!-- Overlay -->
                <div
                    class="
                        absolute
                        inset-0

                        bg-black/40
                    "
                ></div>

                <!-- Centered Content -->
                <div
                    class="
                        relative
                        z-10

                        min-h-[220px]

                        flex
                        items-center
                        justify-center
                    "
                >

                    <!-- Inner Box -->
                    <div
                        class="
                            bg-black/70

                            border
                            border-red-700

                            px-8
                            py-6

                            flex
                            flex-col
                            items-center
                            justify-center

                            text-center

                            shadow-[0_0_25px_rgba(255,0,0,0.35)]
                        "
                    >

                        <!-- Top Symbol -->
                        <div
                            class="
                                text-4xl
                                text-red-500
                            "
                        >
                            ✞ 666 ✞
                        </div>

                        <!-- Main Text -->
                        <div
                            class="
                                text-2xl
                                text-white

                                mt-4
                            "
                        >
                            © 2026
                            <br />
                            Abrázame después del apocalipsis
                        </div>

                        <!-- Author -->
                        <div
                            class="
                                text-xl
                                text-red-400

                                mt-4
                            "
                        >
                            escrito por DoomerDoge
                        </div>

                        <!-- Bottom Symbols -->
                        <div
                            class="
                                mt-6

                                flex
                                items-center
                                gap-6

                                text-red-500
                                text-3xl
                            "
                        >
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    `}function ya(){return`
        <div
            x-data="{ open: false }"

            class="
                fixed

                bottom-6
                right-6

                z-[9999]
            "
        >

            <!-- Hover Text -->
            <div
                class="
                    absolute

                    bottom-24
                    right-0

                    whitespace-nowrap

                    bg-black
                    text-red-500

                    border-2
                    border-red-700

                    px-4
                    py-2

                    text-xl

                    opacity-0
                    pointer-events-none

                    transition-all
                    duration-300

                    group-hover:opacity-100
                "
            >
                ¿Quieres saber qué demonios es esto?
            </div>

            <!-- Floating Button -->
            <div
                class="group relative"
            >

                <button
                    @click="open = !open"

                    class="
                        bg-black

                        border-2
                        border-red-700

                        p-2

                        hover:bg-red-950

                        transition-all
                        duration-300
                    "
                >

                    <img
                        src="./gifs/romero.gif"

                        class="
                            w-20
                            h-20

                            object-contain
                        "
                    />

                </button>

            </div>

            <!-- Popup -->
            <div
                x-show="open"

                x-transition

                class="
                    absolute

                    bottom-28
                    right-0

                    w-[420px]

                    win98-window
                "
            >

                <!-- Window Header -->
                <div class="win98-titlebar">

                    <span>
                        README.txt
                    </span>

                   <div class="win98-title-buttons">

                <button
                    @click="open = false"

                    class="
                        w-6
                        h-6

                        rounded-full

                        bg-red-600

                        border
                        border-white

                        flex
                        items-center
                        justify-center

                        text-white
                        text-sm
                        font-bold

                        hover:bg-red-500

                        transition-all
                        duration-200
                    "
                >
                    ✕
                </button>
            </div>

                </div>

                <!-- Window Content -->
                <div
                    class="
                        win98-panel

                        p-5

                        text-black
                        text-xl
                        leading-relaxed
                    "
                >

                    <p>
                        Hola.
                    </p>

                    <p class="mt-4">
                        Este sitio es un experimento visual inspirado
                        en Webcore, Dreamcore y la vieja internet de
                        finales de los 90s y principios de los 2000.
                    </p>

                    <p class="mt-4">
                        “Abrázame después del apocalipsis”
                        es una novela sobre soledad, ansiedad,
                        amor y supervivencia emocional
                        después del fin del mundo.
                    </p>

                    <p class="mt-4 text-red-700">
                        Bienvenido a Prosperidad.
                    </p>

                </div>

            </div>

        </div>
    `}function wa(){return`
        <div class="layout-wrapper">

            ${ua()}

            ${ma()}

            ${xa()}

            ${ya()}

        </div>
    `}window.Alpine=Fn;Fn.start();const Ot=document.querySelector("#app");function Bn(){Ot&&(Ot.innerHTML=wa())}Bn();window.addEventListener("hashchange",Bn);
