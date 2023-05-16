function f(o){const t=new Date(o),n=t.getDate(),a=t.toLocaleDateString("fr-FR",{month:"long"});return`${n}${n===1?"er":""} ${a}`}export{f};
