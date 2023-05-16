import{o,e as n,a as e,k as w,O as m,d as v,q as u,K as _,C as g,n as c,f as i,t as f,b as d,u as k,Z as x,r as p}from"./app-4c15df97.js";const b={class:"flex justify-evenly bg-white border-b border-gray-100 fixed bottom-0 left-0 w-full h-13"},$=["href"],y=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})],-1),M=[y],B=["href"],j=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})],-1),C=[j],L=["href"],z=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),S=[z],V=["onSubmit"],N=e("button",{type:"submit",class:"p-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])],-1),H=[N],A={__name:"NavBar",setup(a){const t=()=>{m.post(route("logout"))};return(s,l)=>(o(),n("nav",b,[e("a",{href:s.route("dashboard"),class:"p-3"},M,8,$),e("a",{href:s.route("profile.show"),class:"p-3"},C,8,B),e("a",{href:s.route("add"),class:"p-3"},S,8,L),e("form",{onSubmit:w(t,["prevent"]),method:"post"},H,40,V)]))}},D={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},O={class:"flex items-center justify-between flex-wrap"},q={class:"w-0 flex-1 flex items-center min-w-0"},E={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},K=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Z=[K],F={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},G=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),I=[G],J={class:"ml-3 font-medium text-sm text-white truncate"},P={class:"shrink-0 sm:ml-3"},Q=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),R=[Q],T={__name:"Banner",setup(a){const t=v(!0),s=u(()=>{var r;return((r=_().props.jetstream.flash)==null?void 0:r.bannerStyle)||"success"}),l=u(()=>{var r;return((r=_().props.jetstream.flash)==null?void 0:r.banner)||""});return g(l,async()=>{t.value=!0}),(r,h)=>(o(),n("div",null,[t.value&&l.value?(o(),n("div",{key:0,class:c({"bg-indigo-500":s.value=="success","bg-red-700":s.value=="danger"})},[e("div",D,[e("div",O,[e("div",q,[e("span",{class:c(["flex p-2 rounded-lg",{"bg-indigo-600":s.value=="success","bg-red-600":s.value=="danger"}])},[s.value=="success"?(o(),n("svg",E,Z)):i("",!0),s.value=="danger"?(o(),n("svg",F,I)):i("",!0)],2),e("p",J,f(l.value),1)]),e("div",P,[e("button",{type:"button",class:c(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":s.value=="success","hover:bg-red-600 focus:bg-red-600":s.value=="danger"}]),"aria-label":"Dismiss",onClick:h[0]||(h[0]=w(Y=>t.value=!1,["prevent"]))},R,2)])])])],2)):i("",!0)]))}},U={class:"min-h-screen bg-gradient-to-b from-teal-400 to-cyan-700 pb-12"},W={key:0,class:""},X={class:"mx-auto py-6 px-4 sm:px-6 lg:px-8"},se={__name:"AppLayout",props:{title:String},setup(a){return v(!1),(t,s)=>(o(),n("div",null,[d(k(x),{title:a.title},null,8,["title"]),d(T),e("div",U,[t.$slots.header?(o(),n("header",W,[e("div",X,[p(t.$slots,"header")])])):i("",!0),e("main",null,[p(t.$slots,"default")]),d(A)])]))}};export{se as _};