import{_ as N}from"./YunCard.vue_vue_type_script_setup_true_lang-Cf6Fz81y.js";import{_ as j}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-GwiHKJ32.js";import{as as z,at as P,d as B,o as e,e as S,g as _,t as T,aa as D,ab as I,a as M,u as H,S as K,m as O,K as U,h as Y,x as W,U as G,a7 as J,i as Q,c,w as a,r as X,q as u,ac as Z,f as t,F as V,k as tt,s as et,j as st,a9 as nt}from"./app-pzrIQ4ao.js";import{_ as ot}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BDONsJfm.js";import{u as at}from"./helper-Cl9WRpqQ.js";function rt(g={primary:"#0078E7"}){const s=z(),m=new P("#999999"),f=new P(g.primary);return{tags:s,getTagStyle:o=>{const r=Array.from(s.value).map(([v,x])=>x.count),y=Math.max(...r),n=Math.min(...r),h=y-n,p=(o-n)/h;return{"--yun-tag-color":m.mix(f,p*100).toString(),fontSize:`${p*36+12}px`}}}}const lt={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},it={"inline-flex":""},ct={"inline-flex":"",text:"xs"},ut=B({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(g){return(s,m)=>(e(),S("span",lt,[_("span",it,"#"+T(s.title),1),_("span",ct,"["+T(s.count)+"]",1)]))}}),mt={class:"yun-text-light",text:"center",p:"2"},pt={class:"justify-center items-end",flex:"~ wrap",gap:"1"},vt=B({__name:"tags",setup(g){D([I({"@type":"CollectionPage"})]);const s=M(),m=H(),f=K(),{t:d}=O(),o=U(),{tags:r,getTagStyle:y}=rt({primary:f.value.colors.primary}),n=Y(()=>s.query.tag||""),h=W(),p=Y(()=>h.postList.filter(i=>i.tags?typeof i.tags=="string"?i.tags===n.value:i.tags.includes(n.value):!1)),v=G(),{show:x}=at(v);function L(l){m.push({query:{tag:l}}),x()}const R=J(o);return(l,i)=>{const $=nt,w=ot,q=ut,b=Q("RouterView"),A=j,E=N;return e(),S(V,null,[l.$slots["sidebar-child"]?(e(),c($,{key:0},{default:a(()=>[X(l.$slots,"sidebar-child")]),_:3})):(e(),c($,{key:1})),u(b,null,{default:a(({Component:F})=>[(e(),c(Z(F),null,{"main-header":a(()=>[u(w,{title:t(R)||t(d)("menu.tags"),icon:t(o).icon||"i-ri-tag-line",color:t(o).color,"page-title-class":t(o).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":a(()=>[_("div",mt,T(t(d)("counter.tags",Array.from(t(r)).length)),1),_("div",pt,[(e(!0),S(V,null,tt(Array.from(t(r)).sort(),([C,k])=>(e(),c(q,{key:C,title:C,count:k.count,style:et(t(y)(k.count)),onClick:_t=>L(C.toString())},null,8,["title","count","style","onClick"]))),128))]),u(b)]),"main-nav-before":a(()=>[n.value?(e(),c(E,{key:0,ref_key:"collapse",ref:v,m:"t-4",w:"full"},{default:a(()=>[u(w,{title:n.value,icon:"i-ri-hashtag"},null,8,["title"]),u(A,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:p.value},null,8,["posts"])]),_:1},512)):st("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{vt as default};