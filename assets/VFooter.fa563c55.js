var f=Object.defineProperty;var t=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var n=(e,s,o)=>s in e?f(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,a=(e,s)=>{for(var o in s||(s={}))P.call(s,o)&&n(e,o,s[o]);if(t)for(var o of t(s))k.call(s,o)&&n(e,o,s[o]);return e};import{m as C,b as V,c as g,d as h,e as p,u as y,f as B,g as F,h as T,i as b}from"./VBtn.160188da.js";import{A as j,B as r,J as D,K as E,a as R}from"./vendor.69980f57.js";const J=j({name:"VFooter",props:a(a(a(a(a(a(a(a({},C()),V()),g()),h()),p()),r()),r({tag:"footer"})),D()),setup(e,s){let{slots:o}=s;const{themeClasses:l}=E(e),{borderClasses:i}=y(e,"v-footer"),{dimensionStyles:m}=B(e),{elevationClasses:u}=F(e),{positionClasses:v,positionStyles:d}=T(e,"v-footer"),{roundedClasses:c}=b(e,"v-footer");return()=>R(e.tag,{class:["v-footer",l.value,i.value,u.value,v.value,c.value],style:[m.value,d.value]},o,8,["class","style"])}});export{J as V};
