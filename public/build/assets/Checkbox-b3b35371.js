import{q as n,l as r,s as u,o as d,e as p}from"./app-4c15df97.js";const i=["value"],k={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(e,{emit:c}){const s=e,t=n({get(){return s.checked},set(o){c("update:checked",o)}});return(o,a)=>r((d(),p("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),type:"checkbox",value:e.value,class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,i)),[[u,t.value]])}};export{k as _};
