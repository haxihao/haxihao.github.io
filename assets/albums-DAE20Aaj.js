import{d as m,o as t,c as r,w as l,g as c,f as s,t as f,v as k,e as i,F as g,k as $,m as C,K as Y,aj as A,al as w,am as B,h as L,i as P,r as S,q as u,an as V,ak as F}from"./app-CCwOMQ8g.js";import{o as D}from"./index-JUqU34u_.js";import{_ as E}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-D0CxYhle.js";const I=["title"],N=["src","alt","on-error"],R=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,a)=>{const n=k;return t(),r(n,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":s(D)},null,40,N),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,I)]),_:1},8,["to"])}}}),T={class:"yun-album-list"},j=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,a)=>{const n=R;return t(),i("div",T,[(t(!0),i(g,null,$(e.albums,o=>(t(),r(n,{key:o.url,album:o},null,8,["album"]))),128))])}}}),q={text:"center",class:"yun-text-light",p:"2"},W=m({__name:"albums",setup(_){const{t:e}=C(),a=Y(),n=A(a);w([B({"@type":"CollectionPage"})]);const o=L(()=>a.value.albums||[]);return(p,z)=>{const d=F,h=E,y=j,b=P("RouterView");return t(),i(g,null,[p.$slots["sidebar-child"]?(t(),r(d,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(d,{key:1})),u(b,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(h,{title:s(n)||s(e)("title.album"),icon:s(a).icon||"i-ri-gallery-line",color:s(a).color,"page-title-class":s(a).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":l(()=>[c("div",q,f(s(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(b)]),_:2},1024))]),_:1})],64)}}});export{W as default};