import{T as m,d,o as c,e as u,b as o,u as e,w as r,F as p,Z as f,a,n as _,g as w,k as b}from"./app-4c15df97.js";import{A as g}from"./AuthenticationCard-8526d1ae.js";import{_ as h}from"./AuthenticationCardLogo-4e536562.js";import{_ as x,a as v}from"./TextInput-4702cd30.js";import{_ as y}from"./InputLabel-4a91b009.js";import{_ as V}from"./PrimaryButton-8f8f1d84.js";import"./_plugin-vue_export-helper-c27b6911.js";const k=a("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C=["onSubmit"],$={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup(A){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(B,i)=>(c(),u(p,null,[o(e(f),{title:"Secure Area"}),o(g,null,{logo:r(()=>[o(h)]),default:r(()=>[k,a("form",{onSubmit:b(n,["prevent"])},[a("div",null,[o(y,{for:"password",value:"Password"}),o(x,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(v,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),a("div",$,[o(V,{class:_(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,C)]),_:1})],64))}};export{q as default};
