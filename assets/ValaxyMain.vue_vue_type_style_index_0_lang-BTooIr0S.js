import{z as L,A as dn,B as un,C as nt,D as ot,E as be,G as mn,H as pt,a as ht,h as N,x as fn,I as Re,y as ue,J as me,K as fe,L as vt,M as at,N as pn,O as hn,P as vn,Q as st,R as gt,d as T,m as pe,i as he,o as g,e as z,F as Pe,k as _t,f as v,g as h,t as D,c as O,j as w,n as G,_ as Ve,S as gn,U as ne,V as yt,W as bt,q as R,X as $t,Y as wt,Z as _n,r as k,$ as yn,a0 as bn,a1 as $n,a2 as wn,w as F,a3 as En,a4 as kn,a5 as Cn,a6 as zn,a7 as Ln,u as An,a8 as xn,s as Sn}from"./app-TAD4M7uW.js";import{t as In,_ as Mn}from"./YunFooter.vue_vue_type_script_setup_true_lang-DhyKJFy5.js";import{_ as Et}from"./YunCard.vue_vue_type_script_setup_true_lang-KzpQnSpD.js";import{i as qe,a as Be}from"./index-C5okkQwF.js";import{_ as On}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BSEizNIl.js";import{u as Tn}from"./post-CEP680ku.js";function ke(e,t){const n=L(e),o=L(t),a=n.getTime()-o.getTime();return a<0?-1:a>0?1:a}function Hn(e){return dn(e,Date.now())}function Nn(e,t){const n=L(e),o=L(t),a=n.getFullYear()-o.getFullYear(),s=n.getMonth()-o.getMonth();return a*12+s}function Dn(e){return t=>{const o=(e?Math[e]:Math.trunc)(t);return o===0?0:o}}function kt(e,t){return+L(e)-+L(t)}function Yn(e){const t=L(e);return t.setHours(23,59,59,999),t}function Rn(e){const t=L(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Pn(e){const t=L(e);return+Yn(t)==+Rn(t)}function Vn(e,t){const n=L(e),o=L(t),a=ke(n,o),s=Math.abs(Nn(n,o));let l;if(s<1)l=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-a*s);let i=ke(n,o)===-a;Pn(L(e))&&s===1&&ke(e,o)===1&&(i=!1),l=a*(s-Number(i))}return l===0?0:l}function qn(e,t,n){const o=kt(e,t)/1e3;return Dn(n==null?void 0:n.roundingMethod)(o)}function Bn(e,t,n){const o=mn(),a=(n==null?void 0:n.locale)??o.locale??un,s=2520,l=ke(e,t);if(isNaN(l))throw new RangeError("Invalid time value");const i=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:l});let c,m;l>0?(c=L(t),m=L(e)):(c=L(e),m=L(t));const d=qn(m,c),q=(nt(m)-nt(c))/1e3,$=Math.round((d-q)/60);let A;if($<2)return n!=null&&n.includeSeconds?d<5?a.formatDistance("lessThanXSeconds",5,i):d<10?a.formatDistance("lessThanXSeconds",10,i):d<20?a.formatDistance("lessThanXSeconds",20,i):d<40?a.formatDistance("halfAMinute",0,i):d<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):$===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",$,i);if($<45)return a.formatDistance("xMinutes",$,i);if($<90)return a.formatDistance("aboutXHours",1,i);if($<ot){const _=Math.round($/60);return a.formatDistance("aboutXHours",_,i)}else{if($<s)return a.formatDistance("xDays",1,i);if($<be){const _=Math.round($/ot);return a.formatDistance("xDays",_,i)}else if($<be*2)return A=Math.round($/be),a.formatDistance("aboutXMonths",A,i)}if(A=Vn(m,c),A<12){const _=Math.round($/be);return a.formatDistance("xMonths",_,i)}else{const _=A%12,H=Math.trunc(A/12);return _<3?a.formatDistance("aboutXYears",H,i):_<9?a.formatDistance("overXYears",H,i):a.formatDistance("almostXYears",H+1,i)}}function Fn(e,t){return Bn(e,Hn(e),t)}function Un(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function jn(e=document){e.querySelectorAll("table").forEach(t=>{var o;if((o=t.parentElement)!=null&&o.classList.contains("table-container"))return;const n=document.createElement("div");n.className="table-container",Un(t,"table-container")})}let Ce=[];function Fe(e){Ce.push(e),pt(()=>{Ce=Ce.filter(t=>t!==e)})}const Xn=()=>Ce.forEach(e=>e()),$e=Xn;function Ct(e,t,n={smooth:!0,targetPadding:-64}){let o=null;try{o=e.classList.contains("header-anchor")?e:decodeURIComponent(t)&&document.querySelector(decodeURIComponent(t))||null}catch(a){console.warn(a)}if(o){const a=(n==null?void 0:n.targetPadding)||-64,s=window.scrollY+o.getBoundingClientRect().top+a;!n.smooth||Math.abs(s-window.scrollY)>window.innerHeight?window.scrollTo(0,s):window.scrollTo({top:s,behavior:"smooth"})}}function Wn(e){window.addEventListener("click",async t=>{const n=t.target.closest("a");if(n){const{protocol:o,hostname:a,pathname:s,hash:l,target:i}=n,c=window.location,m=s.match(/\.\w+$/);!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey&&i!=="_blank"&&o===c.protocol&&a===c.hostname&&!(m&&m[0]!==".html")&&s===c.pathname&&(t.preventDefault(),l&&l!==c.hash&&(await e.push({hash:decodeURIComponent(l)}),Ct(n,l,{smooth:n.classList.contains("header-anchor")})))}},{capture:!0})}function Gn(e){const t=ht(),n=N(()=>t.path),o=fn(),a=N(()=>{let i=-1;return o.postList.find((c,m)=>c.path===n.value?(i=m,!0):!1),i}),s=N(()=>a.value-1>=0?o.postList[a.value-1]:null),l=N(()=>a.value+1<o.postList.length?o.postList[a.value+1]:null);return[s,l]}function Zn(){if(Re){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,s=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!s)return;const l=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let i="";s.querySelectorAll("span.line:not(.diff.remove)").forEach(c=>i+=`${c.textContent||""}
`),i=i.slice(0,-1),l&&(i=i.replace(/^ *(\$|>) /gm,"").trim()),Kn(i).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const c=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,c)})}})}}async function Kn(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},we=function(t){return t.tagName==="IMG"},Jn=function(t){return NodeList.prototype.isPrototypeOf(t)},ze=function(t){return t&&t.nodeType===1},rt=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},it=function(t){try{return Array.isArray(t)?t.filter(we):Jn(t)?[].slice.call(t).filter(we):ze(t)?[t].filter(we):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(we):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Qn=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},eo=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,s=n.width,l=n.height,i=t.cloneNode(),c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,m=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=o+c+"px",i.style.left=a+m+"px",i.style.width=s+"px",i.style.height=l+"px",i.style.transform="",i},te=function(t,n){var o=W({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},to=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(u){function f(){}u(f,f)},a=function(u){var f=u.target;if(f===_e){_();return}x.indexOf(f)!==-1&&H({target:f})},s=function(){if(!(Q||!r.original)){var u=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(et-u)>y.scrollOffset&&setTimeout(_,150)}},l=function(u){var f=u.key||u.keyCode;(f==="Escape"||f==="Esc"||f===27)&&_()},i=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=u;if(u.background&&(_e.style.background=u.background),u.container&&u.container instanceof Object&&(f.container=W({},y.container,u.container)),u.template){var b=ze(u.template)?u.template:document.querySelector(u.template);f.template=b}return y=W({},y,f),x.forEach(function(E){E.dispatchEvent(te("medium-zoom:update",{detail:{zoom:C}}))}),C},c=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(W({},y,u))},m=function(){for(var u=arguments.length,f=Array(u),b=0;b<u;b++)f[b]=arguments[b];var E=f.reduce(function(p,I){return[].concat(p,it(I))},[]);return E.filter(function(p){return x.indexOf(p)===-1}).forEach(function(p){x.push(p),p.classList.add("medium-zoom-image")}),J.forEach(function(p){var I=p.type,Y=p.listener,ee=p.options;E.forEach(function(B){B.addEventListener(I,Y,ee)})}),C},d=function(){for(var u=arguments.length,f=Array(u),b=0;b<u;b++)f[b]=arguments[b];r.zoomed&&_();var E=f.length>0?f.reduce(function(p,I){return[].concat(p,it(I))},[]):x;return E.forEach(function(p){p.classList.remove("medium-zoom-image"),p.dispatchEvent(te("medium-zoom:detach",{detail:{zoom:C}}))}),x=x.filter(function(p){return E.indexOf(p)===-1}),C},q=function(u,f){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return x.forEach(function(E){E.addEventListener("medium-zoom:"+u,f,b)}),J.push({type:"medium-zoom:"+u,listener:f,options:b}),C},$=function(u,f){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return x.forEach(function(E){E.removeEventListener("medium-zoom:"+u,f,b)}),J=J.filter(function(E){return!(E.type==="medium-zoom:"+u&&E.listener.toString()===f.toString())}),C},A=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=u.target,b=function(){var p={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},I=void 0,Y=void 0;if(y.container)if(y.container instanceof Object)p=W({},p,y.container),I=p.width-p.left-p.right-y.margin*2,Y=p.height-p.top-p.bottom-y.margin*2;else{var ee=ze(y.container)?y.container:document.querySelector(y.container),B=ee.getBoundingClientRect(),Me=B.width,Jt=B.height,Qt=B.left,en=B.top;p=W({},p,{width:Me,height:Jt,left:Qt,top:en})}I=I||p.width-y.margin*2,Y=Y||p.height-y.margin*2;var le=r.zoomedHd||r.original,tn=rt(le)?I:le.naturalWidth||I,nn=rt(le)?Y:le.naturalHeight||Y,ye=le.getBoundingClientRect(),on=ye.top,an=ye.left,Oe=ye.width,Te=ye.height,sn=Math.min(Math.max(Oe,tn),I)/Oe,rn=Math.min(Math.max(Te,nn),Y)/Te,He=Math.min(sn,rn),ln=(-an+(I-Oe)/2+y.margin+p.left)/He,cn=(-on+(Y-Te)/2+y.margin+p.top)/He,tt="scale("+He+") translate3d("+ln+"px, "+cn+"px, 0)";r.zoomed.style.transform=tt,r.zoomedHd&&(r.zoomedHd.style.transform=tt)};return new o(function(E){if(f&&x.indexOf(f)===-1){E(C);return}var p=function Me(){Q=!1,r.zoomed.removeEventListener("transitionend",Me),r.original.dispatchEvent(te("medium-zoom:opened",{detail:{zoom:C}})),E(C)};if(r.zoomed){E(C);return}if(f)r.original=f;else if(x.length>0){var I=x;r.original=I[0]}else{E(C);return}if(r.original.dispatchEvent(te("medium-zoom:open",{detail:{zoom:C}})),et=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,Q=!0,r.zoomed=eo(r.original),document.body.appendChild(_e),y.template){var Y=ze(y.template)?y.template:document.querySelector(y.template);r.template=document.createElement("div"),r.template.appendChild(Y.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",_),r.zoomed.addEventListener("transitionend",p),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(ee),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,b()};var ee=setInterval(function(){r.zoomedHd.complete&&(clearInterval(ee),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",_),document.body.appendChild(r.zoomedHd),b())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var B=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",B),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",_),document.body.appendChild(r.zoomedHd),b()})}else b()})},_=function(){return new o(function(u){if(Q||!r.original){u(C);return}var f=function b(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(_e),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),Q=!1,r.zoomed.removeEventListener("transitionend",b),r.original.dispatchEvent(te("medium-zoom:closed",{detail:{zoom:C}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,u(C)};Q=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(te("medium-zoom:close",{detail:{zoom:C}})),r.zoomed.addEventListener("transitionend",f)})},H=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=u.target;return r.original?_():A({target:f})},se=function(){return y},re=function(){return x},ie=function(){return r.original},x=[],J=[],Q=!1,et=0,y=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?y=t:(t||typeof t=="string")&&m(t),y=W({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},y);var _e=Qn(y.background);document.addEventListener("click",a),document.addEventListener("keyup",l),document.addEventListener("scroll",s),window.addEventListener("resize",_);var C={open:A,close:_,toggle:H,update:i,clone:c,attach:m,detach:d,on:q,off:$,getOptions:se,getImages:re,getZoomedImage:ie};return C};function no(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var oo=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";no(oo);function ao(){const t=ue().value.mediumZoom;me(()=>{t.enable&&to(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function so(){const e=ue(),t=fe();Re&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),me(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let s;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;s=o}else s=a;for(const l of Array.from(n))l.scrollHeight>s&&l.classList.add("folded")})}function ro(){const e=ue(),t=N(()=>e.value.cdn.prefix);vt({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),at(`${t.value}aplayer/dist/APlayer.min.js`,()=>{at(`${t.value}meting@2/dist/Meting.min.js`)})}function io(){vt({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}function lo(e,t){let n=[];return e=e.map(o=>({...o})),e.forEach((o,a)=>{o.level>=t[0]&&o.level<=t[1]&&co(a,e,t)&&n.push(o)}),n}function co(e,t,n){if(e===0)return!0;let o=t[e];for(let a=e-1;a>=0;a--){let s=t[a];if(s.level<o.level&&s.level>=n[0]&&s.level<=n[1])return s.children==null&&(s.children=[]),s.children.push(o),!1}return!0}function uo(e,t=[2,4]){return lo(e,typeof t=="number"?[t,t]:t==="deep"?[2,6]:t)}function mo(e){let t="";for(let n of Array.from(e.childNodes))if(n.nodeType===1){if(n.classList.contains("VABadge")||n.classList.contains("header-anchor"))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function fo(e={range:[2,4],selector:".markdown-body"}){let t=e.selector||".markdown-body",n=document.querySelectorAll(t),o=n[n.length-1],a=Array.from(o.querySelectorAll(`${t} :where(h1,h2,h3,h4,h5,h6)`)).filter(s=>e.filter?e.filter(s):!0).map(s=>{let l=Number(s.tagName[1]);return{title:mo(s),link:`#${s.id}`,level:l,lang:s.lang}});return uo(a,e.range)}function po(){const e=fe(),t=pn(),n=hn([]),o=N(()=>e.value.outline??t.value.outline);return Fe(()=>{o.value!==!1&&(n.value=fo({range:o.value,selector:".markdown-body",filter:s=>!!s.id&&s.hasChildNodes()}))}),{headers:n,handleClick:({target:s})=>{const l=s.href.split("#")[1],i=document.getElementById(decodeURIComponent(l));i==null||i.focus({preventScroll:!0})}}}function ho(){const{hasSidebar:e}=vn(),t=st("(min-width: 960px)"),n=st("(min-width: 1280px)");return{isAsideEnabled:N(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const vo=56,Ee=33;function go(e,t){const{isAsideEnabled:n}=ho(),o=In(s,100);let a=null;me(()=>{requestAnimationFrame(s),window.addEventListener("scroll",o)}),gt(()=>{i(location.hash)}),pt(()=>{window.removeEventListener("scroll",o)});function s(){if(!n.value)return;const c=[].slice.call(e.value.querySelectorAll(".outline-link")),m=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(_=>c.some(H=>H.hash===_.hash&&_.offsetParent!==null)),d=window.scrollY,q=window.innerHeight,$=document.body.offsetHeight,A=Math.abs(d+q-$)<1;if(m.length&&A){i(m[m.length-1].hash);return}for(let _=0;_<m.length;_++){const H=m[_],se=m[_+1],[re,ie]=_o(_,H,se);if(re){i(ie);return}}}const l=()=>{const c=a;if(!c)return;const m=c.getBoundingClientRect().top,d=c.getBoundingClientRect().bottom;(m<Ee||d>window.innerHeight-Ee)&&c.scrollIntoView()};function i(c){a&&a.classList.remove("active"),c==null?a=null:a=e.value.querySelector(`a[href="${decodeURIComponent(c)}"]`);const m=a;l(),m?(m.classList.add("active"),t.value.style.top=`${m.offsetTop+Ee}px`,t.value.style.opacity="1"):(t.value.style.top=`${Ee}px`,t.value.style.opacity="0")}}function lt(e){return e.parentElement.offsetTop-vo-15}function _o(e,t,n){const o=window.scrollY;return e===0&&o===0?[!0,null]:o<lt(t)?[!1,null]:!n||o<lt(n)?[!0,t.hash]:[!1,null]}const yo=["lang"],bo=["href"],$o=T({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(e){const{locale:t}=pe();return(n,o)=>{const a=he("YunOutlineItem",!0);return g(),z("ul",{class:G(n.root?"root":"nested")},[(g(!0),z(Pe,null,_t(n.headers,({children:s,link:l,title:i,lang:c})=>(g(),z("li",{key:l,class:"va-toc-item",lang:c||v(t)},[h("a",{class:"outline-link",href:l,onClick:o[0]||(o[0]=(...m)=>n.onClick&&n.onClick(...m))},D(i),9,bo),s!=null&&s.length?(g(),O(a,{key:0,headers:s,"on-click":n.onClick},null,8,["headers","on-click"])):w("v-if",!0)],8,yo))),128))],2)}}}),wo=Ve($o,[["__scopeId","data-v-0a83ce21"]]),Eo=e=>($t("data-v-0b8cb264"),e=e(),wt(),e),ko={class:"content"},Co={class:"outline-title"},zo={"aria-labelledby":"doc-outline-aria-label"},Lo=Eo(()=>h("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),Ao=T({__name:"YunOutline",setup(e){const t=gn(),n=ne(),o=ne();go(n,o);const{headers:a,handleClick:s}=po();return(l,i)=>{const c=wo;return yt((g(),z("div",{ref_key:"container",ref:n},[h("div",ko,[h("div",Co,D(v(t).outlineTitle||"On this page"),1),h("div",{ref_key:"marker",ref:o,class:"outline-marker"},null,512),h("nav",zo,[Lo,R(c,{class:"va-toc relative z-1 css-i18n-toc",headers:v(a),"on-click":v(s),root:""},null,8,["headers","on-click"])])])],512)),[[bt,v(a).length]])}}}),xo=Ve(Ao,[["__scopeId","data-v-0b8cb264"]]),So=h("div",{"i-ri-file-list-line":""},null,-1),Io=[So],Mo={class:"aside-container",flex:"~ col"},Oo={key:0,m:"t-6 b-2",font:"serif black"},To=h("div",{class:"flex-grow"},null,-1),Ho={key:2,class:"custom-container"},No=T({__name:"YunAside",setup(e){const t=fe(),{t:n}=pe(),o=_n();return(a,s)=>{const l=yn,i=xo;return g(),z(Pe,null,[h("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:s[0]||(s[0]=c=>v(o).toggleRightSidebar())},Io),R(l,{show:v(o).isRightSidebarOpen,onClick:s[1]||(s[1]=c=>v(o).toggleRightSidebar())},null,8,["show"]),w("  "),h("aside",{class:G(["va-card yun-aside",v(o).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[h("div",Mo,[v(t).toc!==!1?(g(),z("h2",Oo,D(v(n)("sidebar.toc")),1)):w("v-if",!0),v(t).toc!==!1?(g(),O(i,{key:1})):w("v-if",!0),To,a.$slots.default?(g(),z("div",Ho,[k(a.$slots,"default")])):w("v-if",!0)])],2)],64)}}}),Do=T({__name:"YunArtalk",setup(e){return qe(Be)||(void 0)(),(t,n)=>{const o=he("ArtalkClient");return g(),O(o)}}}),Yo=h("div",{id:"tcomment",w:"full"},null,-1),Ro=[Yo],Po=T({__name:"YunTwikoo",setup(e){return qe(Be)||(void 0)(),(t,n)=>(g(),z("div",null,Ro))}}),Vo=T({__name:"YunWaline",setup(e){if(qe(Be))throw new Error("Please install valaxy-addon-waline");const t=(void 0)();return(n,o)=>{const a=he("WalineClient");return g(),O(a,{w:"full",options:v(t).options||{serverURL:""}},null,8,["options"])}}}),qo=e=>($t("data-v-c68a3084"),e=e(),wt(),e),Bo={"case-capital":"","op-90":""},Fo=qo(()=>h("div",{"inline-flex":"","i-ri-arrow-down-s-line":""},null,-1)),Uo={class:"shadow-lg select-options absolute translate-y-1 left-0 top-full w-full bg-$va-c-bg-light overflow-hidden rounded-1"},jo=["onClick"],Xo=T({__name:"YunSelect",props:bn({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=$n(e,"modelValue"),n=ne(!1);wn("click",()=>{n.value=!1});function o(a){a.preventDefault(),a.stopImmediatePropagation(),a.stopPropagation(),n.value=!n.value}return(a,s)=>(g(),z("div",{class:"relative h-8 w-30 text-$va-c-text-2 z-10",onMousedown:s[0]||(s[0]=kn(()=>{},["stop"]))},[h("button",{class:G(["flex h-full w-full px-2 items-center justify-between border rounded transition",n.value?"border-$va-c-primary":""]),onClick:o},[h("span",Bo,D(t.value),1),Fo],2),R(En,{persisted:""},{default:F(()=>[yt(h("ul",Uo,[(g(!0),z(Pe,null,_t(a.options,l=>(g(),z("li",{key:l,class:G(["cursor-pointer list-none px-2 hover:bg-$va-c-primary-light hover:text-white case-capital",{"bg-$va-c-primary text-white":t.value===l}]),onClick:i=>t.value=l},D(l),11,jo))),128))],512),[[bt,n.value]])]),_:1})],32))}}),Wo=Ve(Xo,[["__scopeId","data-v-c68a3084"]]),Go={key:0,class:"flex justify-end w-full mb-2"},Zo=T({__name:"YunComment",setup(e){const t=Cn(),n=["valaxy-addon-waline","valaxy-addon-twikoo","valaxy-addon-artalk"],o=N(()=>n.filter(s=>t.value.addons[s]).map(s=>s.split("-")[2])),a=ne(o.value[0]);return(s,l)=>{const i=Wo,c=Vo,m=Po,d=Do,q=he("ClientOnly"),$=Et;return g(),O($,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:F(()=>[R(q,null,{default:F(()=>[o.value.length>1?(g(),z("div",Go,[R(i,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=A=>a.value=A),options:o.value},null,8,["modelValue","options"])])):w("v-if",!0),a.value==="waline"?(g(),O(c,{key:1})):w("v-if",!0),a.value==="twikoo"?(g(),O(m,{key:2})):w("v-if",!0),a.value==="artalk"?(g(),O(d,{key:3})):w("v-if",!0),k(s.$slots,"default")]),_:3})]),_:3})}}}),Ko={class:"post-nav"},Jo={class:"post-nav-item"},Qo=h("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),ea={class:"title truncate",text:"sm"},ta={class:"post-nav-item"},na={class:"title truncate",text:"sm"},oa=h("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),aa=T({__name:"YunPostNav",setup(e){const[t,n]=Gn();return(o,a)=>{const s=he("RouterLink");return g(),z("div",Ko,[h("div",Jo,[v(t)?(g(),O(s,{key:0,class:"post-nav-prev",to:v(t).path||"",title:v(t).title},{default:F(()=>[Qo,h("span",ea,D(v(t).title),1)]),_:1},8,["to","title"])):w("v-if",!0)]),h("div",ta,[v(n)?(g(),O(s,{key:0,to:v(n).path||"",title:v(n).title,class:"post-nav-next"},{default:F(()=>[h("span",na,D(v(n).title),1),oa]),_:1},8,["to","title"])):w("v-if",!0)])])}}}),j=typeof window<"u",zt=j&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),Lt=j&&window.devicePixelRatio>1,sa={elements_selector:".lazy",container:zt||j?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},At=e=>Object.assign({},sa,e),ct=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},ra=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)ct(e,n);else ct(e,t)},V="src",Ue="srcset",je="sizes",xt="poster",ve="llOriginalAttrs",St="data",Xe="loading",It="loaded",Mt="applied",ia="entered",We="error",Ot="native",Tt="data-",Ht="ll-status",M=(e,t)=>e.getAttribute(Tt+t),la=(e,t,n)=>{const o=Tt+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},ge=e=>M(e,Ht),K=(e,t)=>la(e,Ht,t),Ae=e=>K(e,null),Ge=e=>ge(e)===null,ca=e=>ge(e)===Xe,da=e=>ge(e)===We,Ze=e=>ge(e)===Ot,ua=[Xe,It,Mt,We],ma=e=>ua.indexOf(ge(e))>=0,X=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},ae=(e,t)=>{j&&t!==""&&e.classList.add(t)},P=(e,t)=>{j&&t!==""&&e.classList.remove(t)},fa=e=>{e.llTempImage=document.createElement("IMG")},pa=e=>{delete e.llTempImage},Nt=e=>e.llTempImage,xe=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},ha=e=>{e.disconnect()},va=(e,t,n)=>{t.unobserve_entered&&xe(e,n)},Ke=(e,t)=>{e&&(e.loadingCount+=t)},ga=e=>{e&&(e.toLoadCount-=1)},Dt=(e,t)=>{e&&(e.toLoadCount=t)},_a=e=>e.loadingCount>0,ya=e=>e.toLoadCount>0,Yt=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},Je=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&Yt(n).forEach(t)},Rt=(e,t)=>{Yt(e).forEach(t)},Se=[V],Pt=[V,xt],de=[V,Ue,je],Vt=[St],Ie=e=>!!e[ve],qt=e=>e[ve],Bt=e=>delete e[ve],oe=(e,t)=>{if(Ie(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[ve]=n},ba=e=>{Ie(e)||(e[ve]={backgroundImage:e.style.backgroundImage})},Z=(e,t)=>{if(!Ie(e))return;const n=qt(e);t.forEach(o=>{((a,s,l)=>{l?a.setAttribute(s,l):a.removeAttribute(s)})(e,o,n[o])})},$a=e=>{if(!Ie(e))return;const t=qt(e);e.style.backgroundImage=t.backgroundImage},Ft=(e,t,n)=>{ae(e,t.class_applied),K(e,Mt),n&&(t.unobserve_completed&&xe(e,t),X(t.callback_applied,e,n))},Ut=(e,t,n)=>{ae(e,t.class_loading),K(e,Xe),n&&(Ke(n,1),X(t.callback_loading,e,n))},U=(e,t,n)=>{n&&e.setAttribute(t,n)},dt=(e,t)=>{U(e,je,M(e,t.data_sizes)),U(e,Ue,M(e,t.data_srcset)),U(e,V,M(e,t.data_src))},wa=(e,t)=>{Je(e,n=>{oe(n,de),dt(n,t)}),oe(e,de),dt(e,t)},Ea=(e,t)=>{oe(e,Se),U(e,V,M(e,t.data_src))},ka=(e,t)=>{Rt(e,n=>{oe(n,Se),U(n,V,M(n,t.data_src))}),oe(e,Pt),U(e,xt,M(e,t.data_poster)),U(e,V,M(e,t.data_src)),e.load()},Ca=(e,t)=>{oe(e,Vt),U(e,St,M(e,t.data_src))},za=(e,t,n)=>{const o=M(e,t.data_bg),a=M(e,t.data_bg_hidpi),s=Lt&&a?a:o;s&&(e.style.backgroundImage=`url("${s}")`,Nt(e).setAttribute(V,s),Ut(e,t,n))},La=(e,t,n)=>{const o=M(e,t.data_bg_multi),a=M(e,t.data_bg_multi_hidpi),s=Lt&&a?a:o;s&&(e.style.backgroundImage=s,Ft(e,t,n))},Aa=(e,t,n)=>{const o=M(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(s=>`image-set(${s})`);e.style.backgroundImage=a.join(),Ft(e,t,n)},jt={IMG:wa,IFRAME:Ea,VIDEO:ka,OBJECT:Ca},xa=(e,t)=>{const n=jt[e.tagName];n&&n(e,t)},Sa=(e,t,n)=>{const o=jt[e.tagName];o&&(o(e,t),Ut(e,t,n))},Ia=["IMG","IFRAME","VIDEO","OBJECT"],Ma=e=>Ia.indexOf(e.tagName)>-1,Xt=(e,t)=>{!t||_a(t)||ya(t)||X(e.callback_finish,t)},ut=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},Oa=(e,t,n)=>{e.removeEventListener(t,n)},Qe=e=>!!e.llEvLisnrs,Ta=(e,t,n)=>{Qe(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";ut(e,o,t),ut(e,"error",n)},Ne=e=>{if(!Qe(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];Oa(e,n,o)}delete e.llEvLisnrs},Wt=(e,t,n)=>{pa(e),Ke(n,-1),ga(n),P(e,t.class_loading),t.unobserve_completed&&xe(e,n)},Ha=(e,t,n,o)=>{const a=Ze(t);Wt(t,n,o),ae(t,n.class_loaded),K(t,It),X(n.callback_loaded,t,o),a||Xt(n,o)},Na=(e,t,n,o)=>{const a=Ze(t);Wt(t,n,o),ae(t,n.class_error),K(t,We),X(n.callback_error,t,o),n.restore_on_error&&Z(t,de),a||Xt(n,o)},De=(e,t,n)=>{const o=Nt(e)||e;Qe(o)||Ta(o,a=>{Ha(0,e,t,n),Ne(o)},a=>{Na(0,e,t,n),Ne(o)})},Ye=(e,t,n)=>{Ma(e)?((o,a,s)=>{De(o,a,s),Sa(o,a,s)})(e,t,n):((o,a,s)=>{fa(o),De(o,a,s),ba(o),za(o,a,s),La(o,a,s),Aa(o,a,s)})(e,t,n)},Da=(e,t,n)=>{e.setAttribute("loading","lazy"),De(e,t,n),xa(e,t),K(e,Ot)},mt=e=>{e.removeAttribute(V),e.removeAttribute(Ue),e.removeAttribute(je)},Ya=e=>{Je(e,t=>{mt(t)}),mt(e)},Gt=e=>{Je(e,t=>{Z(t,de)}),Z(e,de)},Ra=e=>{Rt(e,t=>{Z(t,Se)}),Z(e,Pt),e.load()},Pa=e=>{Z(e,Se)},Va=e=>{Z(e,Vt)},qa={IMG:Gt,IFRAME:Pa,VIDEO:Ra,OBJECT:Va},Ba=(e,t)=>{(n=>{const o=qa[n.tagName];o?o(n):$a(n)})(e),((n,o)=>{Ge(n)||Ze(n)||(P(n,o.class_entered),P(n,o.class_exited),P(n,o.class_applied),P(n,o.class_loading),P(n,o.class_loaded),P(n,o.class_error))})(e,t),Ae(e),Bt(e)},Fa=(e,t,n,o)=>{n.cancel_on_exit&&ca(e)&&e.tagName==="IMG"&&(Ne(e),Ya(e),Gt(e),P(e,n.class_loading),Ke(o,-1),Ae(e),X(n.callback_cancel,e,t,o))},Ua=(e,t,n,o)=>{const a=ma(e);K(e,ia),ae(e,n.class_entered),P(e,n.class_exited),va(e,n,o),X(n.callback_enter,e,t,o),a||Ye(e,n,o)},ja=(e,t,n,o)=>{Ge(e)||(ae(e,n.class_exited),Fa(e,t,n,o),X(n.callback_exit,e,t,o))},Xa=["IMG","IFRAME","VIDEO"],Zt=e=>e.use_native&&"loading"in HTMLImageElement.prototype,Wa=(e,t,n)=>{e.forEach(o=>{Xa.indexOf(o.tagName)!==-1&&Da(o,t,n)}),Dt(n,0)},Ga=e=>e.isIntersecting||e.intersectionRatio>0,Za=(e,t)=>{t.forEach(n=>{e.observe(n)})},Ka=(e,t)=>{ha(e),Za(e,t)},Ja=(e,t)=>{Zt(e)||(t._observer=new IntersectionObserver(n=>{((o,a,s)=>{o.forEach(l=>Ga(l)?Ua(l.target,l,a,s):ja(l.target,l,a,s))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},Kt=e=>Array.prototype.slice.call(e),Le=e=>e.container.querySelectorAll(e.elements_selector),Qa=e=>Kt(e).filter(Ge),es=e=>da(e),ts=e=>Kt(e).filter(es),ft=(e,t)=>Qa(e||Le(t)),ns=(e,t)=>{ts(Le(e)).forEach(n=>{P(n,e.class_error),Ae(n)}),t.update()},os=(e,t)=>{j&&(t._onlineHandler=()=>{ns(e,t)},window.addEventListener("online",t._onlineHandler))},as=e=>{j&&window.removeEventListener("online",e._onlineHandler)},ce=function(e,t){const n=At(e);this._settings=n,this.loadingCount=0,Ja(n,this),os(n,this),this.update(t)};ce.prototype={update:function(e){const t=this._settings,n=ft(e,t);Dt(this,n.length),zt?this.loadAll(n):Zt(t)?Wa(n,t,this):Ka(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),as(this),Le(this._settings).forEach(e=>{Bt(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;ft(e,t).forEach(n=>{xe(n,this),Ye(n,t,this)})},restoreAll:function(){const e=this._settings;Le(e).forEach(t=>{Ba(t,e)})}},ce.load=(e,t)=>{const n=At(t);Ye(e,n)},ce.resetStatus=e=>{Ae(e)},j&&ra(ce,window.lazyLoadOptions);function ss(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new ce({elements_selector:".lazy",...e})}function rs(){const e=ue();e.value.vanillaLazyload.enable&&me(()=>{ss(e.value.vanillaLazyload)})}function is(){Re&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const s=o.querySelector(".blocks");if(!s)return;const l=Array.from(s.children).find(m=>m.classList.contains("active"));if(!l)return;const i=s.children[a];if(!i||l===i)return;l.classList.remove("active"),i.classList.add("active");const c=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);c==null||c.scrollIntoView({block:"nearest"})}})}const ls={key:0,text:"center"},cs=["href"],ds={m:"y-4",class:"end flex justify-center items-center"},us=h("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),ms={p:"x-4",font:"bold",class:"whitespace-nowrap"},fs=h("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),ps=T({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=pe(),o=ne();return Fe(()=>{jn(o.value)}),me(()=>{$e()}),gt(()=>{$e()}),t.frontmatter.aplayer&&ro(),t.frontmatter.codepen&&io(),Zn(),is(),so(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&ao(),rs(),(a,s)=>a.$slots.default?(g(),z("article",{key:0,class:G(a.frontmatter.markdownClass||"markdown-body")},[k(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:s[0]||(s[0]=(...l)=>v($e)&&v($e)(...l))}),a.frontmatter.url?(g(),z("div",ls,[h("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},D(v(n)("post.view_link")),9,cs)])):w("v-if",!0),a.frontmatter.end!==void 0?k(a.$slots,"end",{key:1},()=>[h("div",ds,[us,h("span",ms,D(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),fs])]):w("v-if",!0)],2)):w("v-if",!0)}}),hs={key:0,class:"yun-time-warning",op:"80"},vs=T({__name:"YunMdTimeWarning",setup(e){const t=fe(),{t:n,locale:o}=pe(),a=N(()=>t.value.updated||t.value.date||new Date),s=ne("");zn(o,()=>{const i=Fn(a.value,{addSuffix:!0});s.value=/^\d/.test(i)?` ${i}`:i},{immediate:!0});const l=N(()=>{const i=kt(new Date,a.value);return typeof t.value.time_warning=="number"?i>t.value.time_warning:t.value.time_warning});return(i,c)=>l.value?(g(),z("blockquote",hs,D(v(n)("post.time_warning",{ago:s.value})),1)):w("v-if",!0)}}),gs={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},_s={font:"black",flex:"","items-center":""},ys=h("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1),bs={op:"90","mt-1":""},$s=T({__name:"YunAiExcerpt",setup(e){const t=fe(),{t:n}=pe();return(o,a)=>(g(),z("div",gs,[h("div",_s,[ys,h("div",null,D(v(n)("excerpt.ai")),1)]),h("div",bs,D(v(t).excerpt),1)]))}}),ws={class:"yun-main md:pl-$va-sidebar-width lt-md:ml-0",flex:"~"},Es={w:"full",flex:"~"},ks={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},Is=T({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=e,n=ue(),{styles:o,icon:a,color:s}=Tn(t.frontmatter.type),l=Ln(N(()=>t.frontmatter)),i=N(()=>t.frontmatter.aside!==!1),c=ht(),m=An();return xn(()=>{c.hash&&setTimeout(()=>{Ct(document.body,c.hash,{smooth:!0})},0)}),Fe(()=>{Wn(m)}),(d,q)=>{const $=On,A=$s,_=vs,H=ps,se=Et,re=aa,ie=Zo,x=Mn,J=No;return g(),z("main",ws,[h("div",Es,[k(d.$slots,"main",{},()=>[h("div",{class:G(["content",!i.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[R(se,{cover:d.frontmatter.cover,m:"0",class:"relative",style:Sn(v(o))},{default:F(()=>[k(d.$slots,"main-header",{},()=>[R($,{class:"mb-2",title:v(l),icon:d.frontmatter.icon||v(a),color:d.frontmatter.color||v(s),cover:d.frontmatter.cover,"page-title-class":d.frontmatter.pageTitleClass},null,8,["title","icon","color","cover","page-title-class"])]),k(d.$slots,"main-header-after"),h("div",ks,[k(d.$slots,"main-content",{},()=>[w(" <Transition appear> "),R(H,{frontmatter:d.frontmatter},{default:F(()=>[d.frontmatter.excerpt_type==="ai"&&d.frontmatter.excerpt?(g(),O(A,{key:0})):w("v-if",!0),R(_),k(d.$slots,"main-content-md"),k(d.$slots,"default")]),_:3},8,["frontmatter"]),w(" </Transition> ")]),k(d.$slots,"main-content-after")])]),_:3},8,["cover","style"]),k(d.$slots,"main-nav-before"),k(d.$slots,"main-nav",{},()=>[d.frontmatter.nav!==!1?(g(),O(re,{key:0})):w("v-if",!0)]),k(d.$slots,"main-nav-after"),v(n).comment.enable&&d.frontmatter.comment!==!1?k(d.$slots,"comment",{key:0},()=>[R(ie,{class:G(d.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):w("v-if",!0),k(d.$slots,"main-footer-before"),R(x),k(d.$slots,"main-footer-after")],2)]),k(d.$slots,"aside",{},()=>[i.value?(g(),O(J,{key:0},{default:F(()=>[k(d.$slots,"aside-custom")]),_:3})):w("v-if",!0)])])])}}});export{Is as _};
