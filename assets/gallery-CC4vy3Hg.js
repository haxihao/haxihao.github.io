const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery-3bY40bEz.js","assets/app-CCwOMQ8g.js","assets/app-tSfq1-Zv.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-D0CxYhle.js"])))=>i.map(i=>d[i]);
import{y as A,d as w,i as C,o as s,c as d,U as g,e as f,g as l,V as P,a7 as D,n as S,aq as V,q as h,u as K,m as $,K as B,aj as E,al as G,am as O,h as T,ae as j,ar as F,w as v,r as R,an as U,f as a,t as Y,F as M,ak as I,as as N}from"./app-CCwOMQ8g.js";import{_ as q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-D0CxYhle.js";function z(r){const o=new TextEncoder;return window.crypto.subtle.importKey("raw",o.encode(r),"PBKDF2",!1,["deriveBits","deriveKey"])}function H(r,o){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:o,iterations:1e5,hash:"SHA-256"},r,{name:"AES-CBC",length:256},!0,["encrypt","decrypt"])}function J(){const r=A(),{encrypt:o}=r.value,n=Uint8Array.from(Object.values(o.iv)),e=Uint8Array.from(Object.values(o.salt));return{decrypt:async(c,u)=>{if(!c)return;const y=await z(c),_=await H(y,e),i=Uint8Array.from(u,p=>p.charCodeAt(0)),t=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:n},_,i);return new TextDecoder().decode(t)}}}const L=w({__name:"YunGallery",props:{photos:{}},setup(r){return(o,n)=>{const e=C("VAGallery");return s(),d(e,{photos:o.photos},null,8,["photos"])}}}),W={key:0,"w-full":"","pt-14":"","pb-10":""},Q={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},X={key:1},Z=w({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(r){const o=r,n=g(""),e=g(""),c=g(!1),{decrypt:u}=J();async function y(){const i=o.encryptedPhotos;if(i)try{const t=await u(n.value,i);e.value=t||""}catch{c.value=!0}}function _(){e.value="",n.value=""}return(i,t)=>{const p=L;return s(),f("div",null,[e.value?(s(),f("div",X,[h(p,{photos:JSON.parse(e.value)},null,8,["photos"]),l("div",{"w-full":"","text-center":"","mt-8":""},[l("button",{"m-auto":"",class:"btn","font-bold":"",onClick:_}," Encrypt Again ")])])):(s(),f("div",W,[l("div",Q,[P(l("input",{"onUpdate:modelValue":t[0]||(t[0]=m=>n.value=m),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:S(c.value&&"border-red"),onInput:t[1]||(t[1]=m=>c.value=!1),onKeyup:V(y,["enter"])},null,34),[[D,n.value]]),l("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:y})])]))])}}}),ee={text:"center",class:"yun-text-light",p:"2"},te={class:"page-action",text:"center"},oe=["title"],ne=w({__name:"gallery",setup(r){const o=K(),{t:n}=$(),e=B(),c=E(e);G([O({"@type":"CollectionPage"})]);const u=T(()=>e.value.photos||[]),_=j().value.addons["valaxy-addon-lightgallery"]?F(()=>N(()=>import("./YunGallery-3bY40bEz.js"),__vite__mapDeps([0,1,2,3]))):()=>null;return(i,t)=>{const p=I,m=q,k=Z,b=C("RouterView");return s(),f(M,null,[i.$slots["sidebar-child"]?(s(),d(p,{key:0},{default:v(()=>[R(i.$slots,"sidebar-child")]),_:3})):(s(),d(p,{key:1})),h(b,null,{default:v(({Component:x})=>[(s(),d(U(x),null,{"main-header":v(()=>[h(m,{title:a(c)||a(n)("title.gallery"),icon:a(e).icon||"i-ri-gallery-line",color:a(e).color,"page-title-class":a(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":v(()=>[l("div",ee,Y(a(n)("counter.photos",u.value.length)),1),l("div",te,[l("a",{class:"yun-icon-btn",title:a(n)("accessibility.back"),onClick:t[0]||(t[0]=()=>a(o).back())},t[1]||(t[1]=[l("div",{"i-ri-arrow-go-back-line":""},null,-1)]),8,oe)]),a(e).encryptedPhotos?(s(),d(k,{key:0,"encrypted-photos":a(e).encryptedPhotos},null,8,["encrypted-photos"])):(s(),d(a(_),{key:1,photos:u.value},null,8,["photos"])),h(b)]),_:2},1024))]),_:1})],64)}}}),re=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));export{L as _,re as g};