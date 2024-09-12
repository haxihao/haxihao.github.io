import{r as H,_ as M}from"./YunFooter.vue_vue_type_script_setup_true_lang-DbETum6v.js";import{d as f,o as t,e as s,g as u,r as S,S as Y,U as b,J as V,t as g,j as _,_ as L,aj as z,h as p,n as w,F as B,k as A,f as v,c as $,q as k,s as C,ak as D,a as E,al as F,i as R,a9 as j}from"./app-pzrIQ4ao.js";const P={class:"yun-notice m-auto"},G=["innerHTML"],I=f({__name:"YunNotice",props:{content:{}},setup(d){return(n,o)=>(t(),s("div",P,[u("span",{innerHTML:n.content},null,8,G),S(n.$slots,"default")]))}}),q={class:"say"},J={key:0,class:"say-content animate-fade-in animate-iteration-1"},O={key:1,class:"say-author"},U={key:2,class:"say-from"},W=f({__name:"YunSay",setup(d){const n=Y(),o=b(""),l=b(""),a=b("");function h(){const r=n.value.say.hitokoto.enable?n.value.say.hitokoto.api:n.value.say.api;r&&fetch(r).then(e=>{if(e.ok)e.json().then(c=>{if(n.value.say.hitokoto.enable)o.value=c.hitokoto,l.value=c.from_who,a.value=c.from;else{const i=c[Math.floor(Math.random()*c.length)];i.content?(o.value=i.content,l.value=i.author,a.value=i.from):o.value=i}});else throw new Error(`${n.value.say.api}, HTTP error, status = ${e.status}`)}).catch(e=>{console.error(e.message)})}return V(()=>{h()}),(r,e)=>(t(),s("div",q,[o.value?(t(),s("span",J,g(o.value),1)):_("v-if",!0),l.value?(t(),s("span",O,g(l.value),1)):_("v-if",!0),a.value?(t(),s("span",U,g(a.value),1)):_("v-if",!0)]))}}),K=u("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),Q=[K],X=f({__name:"YunGoDown",setup(d){function n(){const o=document.getElementById("yun-banner");o&&window.scrollTo({top:o.clientHeight,behavior:"smooth"})}return(o,l)=>(t(),s("button",{class:"go-down","aria-label":"go-down",onClick:n},Q))}}),Z={},ee={class:"yun-cloud"},ne=z('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),te=[ne];function oe(d,n){return t(),s("div",ee,te)}const se=L(Z,[["render",oe]]),ae={class:"banner-line-container"},re={class:"banner-char-container"},ce={class:"char"},le={class:"banner-line-container bottom"},ie=f({__name:"YunBanner",setup(d){const n=Y(),o=p(()=>{const r=[];for(let e=0;e<n.value.banner.title.length;e++){const c=H(1.5,3.5);r.push(c)}return r}),l=p(()=>o.value.reduce((r,e)=>r+e,0)/2),a=p(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${l.value}rem)`})),h=b(!0);return(r,e)=>{var y;const c=se,i=X;return t(),s("div",{id:"yun-banner",style:C(a.value)},[u("div",ae,[u("div",{class:w(["banner-line vertical-line-top",{active:h.value}])},null,2)]),u("div",re,[(t(!0),s(B,null,A(v(n).banner.title,(x,m)=>(t(),s("div",{key:m,class:"char-box"},[u("span",{class:w([m%2!==0?"char-right":"char-left"]),style:C({"--banner-char-size":`${o.value[m]}rem`})},[u("span",ce,g(x),1)],6)]))),128))]),u("div",le,[u("div",{class:w(["banner-line vertical-line-bottom",{active:h.value}])},null,2)]),(y=v(n).banner.cloud)!=null&&y.enable?(t(),$(c,{key:0})):_("v-if",!0),k(i)],4)}}}),he=f({__name:"home",setup(d){const n=D(),o=E(),l=F("home"),a=Y(),h=p(()=>o.path.startsWith("/page")),r=p(()=>{const e=a.value.notice;return e.enable&&(h.value?!e.hideInPages:!0)});return(e,c)=>{const i=j,y=ie,x=W,m=I,N=R("RouterView"),T=M;return t(),s("main",{class:w(["yun-main flex-center",v(l)&&!v(n).leftSidebar.isOpen?"pl-0":"md:pl-$va-sidebar-width"]),flex:"~ col",w:"full"},[k(i,{"show-hamburger":!0}),h.value?_("v-if",!0):(t(),s(B,{key:0},[v(a).banner.enable?(t(),$(y,{key:0})):_("v-if",!0),v(a).say.enable?(t(),$(x,{key:1,w:"full"})):_("v-if",!0)],64)),r.value?(t(),$(m,{key:1,content:v(a).notice.content,mt:"4"},null,8,["content"])):_("v-if",!0),S(e.$slots,"board"),S(e.$slots,"default",{},()=>[k(N)]),k(T)],2)}}});export{he as default};