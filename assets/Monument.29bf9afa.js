import{J as d,K as f,t as h,r as _,o as p,k as V,a as e,d as g,w as t,F as w,l as y,D as b,x as v,e as o,m as i}from"./vendor.daafe9ea.js";import{V as k}from"./VFooter.6e447db3.js";import{V as C}from"./VInput.3f9109cb.js";import{V as j}from"./VSwitch.8d4421d3.js";import{V as c,a as m}from"./VBtn.b16b5b73.js";const x=o("div",{class:"progress-bar"},[o("div",{class:"progress",style:"width: 94%"})],-1),F=o("h4",null," Is your house a monument? ",-1),I=o("p",{class:"mb-5"}," We're almost there. We only need to know whether your house is considered a monument or not. Many houses in the city center are monument, especially if you've got high ceilings and there is relief present on them, this might be the case. The outer appearance of a house can also give a clue about whether it's a monument. If you don't know, leave it out for now, but be aware that this can make a crucial difference to your score. ",-1),B=i("mdi-arrow-left"),M=o("span",null,"Previous",-1),N=o("span",null,"Finish",-1),R=i("mdi-arrow-right"),D=d({setup(S){const n=f(),a=h({get:()=>n.state.isMonument,set:l=>n.commit("setIsMonument",l)});return(l,r)=>{const u=_("router-link");return p(),V(w,null,[e(g,null,{default:t(()=>[x,e(y,{class:"ma-4 mb-10",justify:"center"},{default:t(()=>[F]),_:1}),e(C,null,{default:t(()=>[I,e(j,{label:"Is your house a monument?",color:"green",class:"pa-4",modelValue:b(a),"onUpdate:modelValue":r[0]||(r[0]=s=>v(a)?a.value=s:null)},null,8,["modelValue"])]),_:1})]),_:1}),e(k,{class:"d-flex align-center justify-space-between pa-8"},{default:t(()=>[e(u,{to:{name:"EnergyPerformance"},custom:""},{default:t(({navigate:s})=>[e(m,{class:"ma-2 secondary",elevation:"1",size:"large",variant:"outlined",onClick:s},{default:t(()=>[e(c,null,{default:t(()=>[B]),_:1}),M]),_:2},1032,["onClick"])]),_:1}),e(u,{to:{name:"Results"},custom:""},{default:t(({navigate:s})=>[e(m,{class:"ma-2 success",elevation:"4",size:"large",variant:"outlined",onClick:s},{default:t(()=>[N,e(c,null,{default:t(()=>[R]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1})],64)}}});export{D as default};
