var _=Object.defineProperty,g=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var u=(t,e,n)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))P.call(e,n)&&u(t,n,e[n]);if(r)for(var n of r(e))$.call(e,n)&&u(t,n,e[n]);return t},d=(t,e)=>g(t,x(e));import{u as y,g as A,f as B,c as j}from"./VLabel.5cc3e278.js";import{V as I}from"./VSelectionControl.f87febb1.js";import{k as N,W as R,N as U,a as s,$ as p}from"./vendor.69980f57.js";const q=N({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,loading:[Boolean,String],flat:Boolean},emits:{"update:indeterminate":t=>!0},setup(t,e){let{attrs:n,slots:v}=e;const o=y(t,"indeterminate");function f(){o.value&&(o.value=!1)}return R(()=>{const[m,h]=A(n),[V,k]=B(h),i=U();function C(){var a,l;(a=i.value)==null||(l=a.input)==null||l.click()}return s(j,p({class:["v-switch",{"v-switch--indeterminate":o.value}]},m,V),d(c({},v),{default:a=>{let{isDisabled:l,isReadonly:b}=a;return s(I,p({type:"checkbox",disabled:l.value,readonly:b.value,"onUpdate:modelValue":f,"aria-checked":o.value?"mixed":void 0,ref:i},k),{default:()=>s("div",{class:"v-switch__track",onClick:C},null,8,["onClick"]),input:w=>{let{textColorClasses:S}=w;return s("div",{class:["v-switch__thumb",S.value]},null,2)}},16,["disabled","readonly","onUpdate:modelValue","aria-checked"])}}),16,["class"])}),{}}});export{q as V};
