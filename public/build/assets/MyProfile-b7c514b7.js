import{_ as l}from"./AppLayout-edf966f1.js";import{o as n,c as r,w as i,a as t,t as o}from"./app-4c15df97.js";const c={class:"font-sans leading-normal tracking-normal from-teal-300 to-emerald-400"},d={class:"flex flex-row items-center justify-between bg-gray-600 p-2 w-full bg-opacity-50"},h=["href"],_=t("svg",{class:"h-6 w-6 fill-current",viewBox:"0 0 24 24"},[t("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"})],-1),m=[_],u=t("button",{class:"text-white inline-block mr-2 rounded-full"},[t("svg",{class:"h-6 w-6 fill-current",viewBox:"0 0 24 24"},[t("path",{d:"M8 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8zm6 14H8V6h6v12z"})])],-1),f={class:"ml-4 py-6"},p={class:"flex flex-col items-start mb-4"},x=t("div",{class:"w-16 h-16 bg-gray-300 rounded-full mr-4"},null,-1),g={class:"text-4xl font-medium text-gray-200 pt-4"},b={class:"text-xl font-medium text-gray-200 pt-4"},v=t("section",{class:"ml-4 py-6"},[t("div",{class:"py-4"})],-1),y=["href"],z={__name:"MyProfile",props:{user:Array},setup(a){const s=a;return console.log(s),(e,w)=>(n(),r(l,null,{default:i(()=>[t("div",c,[t("nav",d,[t("a",{href:e.route("dashboard"),class:"text-white inline-block mx-2 py-2 px-4 basis-2/3"},m,8,h),u]),t("section",f,[t("div",p,[x,t("div",null,[t("h3",g,o(s.user.name),1),t("h2",b,o(s.user.email),1)])])]),v,t("a",{class:"bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-6 rounded-2xl ml-4 mb-8",href:e.route("add")}," Ajouter un activité ",8,y)])]),_:1}))}};export{z as default};