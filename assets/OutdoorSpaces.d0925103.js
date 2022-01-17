import{k as B,u as S,l as F,r as I,o as l,m as u,a,d as T,w as t,e as s,O as N,n as h,G as b,ae as g,p as m,q as n,c as V,L as U,Q as $,t as D,s as v}from"./vendor.4ce89900.js";import{O as r}from"./index.822ffb3f.js";import{V as G}from"./VFooter.26d14a5f.js";import{V as L}from"./VLabel.3ba5f2d4.js";import{V as p,a as _}from"./VBtn.86f2e4d2.js";import{V as q}from"./VSwitch.c38a71d1.js";import{V as E}from"./VTextField.eed1247e.js";import"./VSelectionControl.a4d88afd.js";const P={class:"progress-bar"},H=s("h4",null," How many Outdoor Spaces do you have? ",-1),K=s("p",{class:"mb-10"},[n(" Whether you have a "),s("b",null,"garden, terrace or balcony"),n(" also makes a difference to your maximum rent. If you do, please again provide the size ("),s("i",null,"width \xD7 length"),n(") and whether it's shared or not. ")],-1),M=["onUpdate:modelValue","onInput"],Q=s("option",{class:"placeholder"},"Choose type",-1),R=["value"],W={key:0},A=n(" mdi-close "),J=n(" mdi-plus "),X=n("mdi-arrow-left"),Y=s("span",null,"Previous",-1),Z=s("span",null,"Next",-1),ee=n("mdi-arrow-right"),de=B({props:{progress:Number},setup(k){const d=S(),w=F(()=>d.state.outdoorSpaces),x=[{label:"Garden",value:r.Garden},{label:"Terrace",value:r.Terrace},{label:"Balcony",value:r.Balcony},{label:"Carport",value:r.Carport}];function j(){d.commit("addOutdoorSpace")}function O(c){d.commit("removeOutdoorSpace",c)}function f(c,y){d.commit("setOutdoorSpace",{index:c,outdoorSpace:y})}return(c,y)=>{const C=I("router-link");return l(),u("div",null,[a(T,null,{default:t(()=>[s("div",P,[s("div",{class:"progress",style:N("width:"+k.progress+"%")},null,4)]),a(h,{class:"ma-4 mb-10",justify:"center"},{default:t(()=>[H]),_:1}),a(L,null,{default:t(()=>[K,(l(!0),u(b,null,g(m(w),(e,i)=>(l(),V(h,{key:i,class:"form-list-item"},{default:t(()=>[U(s("select",{class:"select-input ma-4","onUpdate:modelValue":o=>e.type=o,onInput:o=>f(i,e)},[Q,(l(),u(b,null,g(x,(o,z)=>s("option",{key:"type"+z,value:o.value},D(o.label),9,R)),64))],40,M),[[$,e.type]]),e.type===m(r).Carport?(l(),u("p",W," For carports, size doesn't matter. ")):v("",!0),e.type!==m(r).Carport?(l(),V(q,{key:1,label:"Is it shared?",color:"green",class:"pa-4",modelValue:e.isShared,"onUpdate:modelValue":o=>e.isShared=o,onChange:o=>f(i,e)},null,8,["modelValue","onUpdate:modelValue","onChange"])):v("",!0),e.type!==m(r).Carport?(l(),V(E,{key:2,"prepend-inner-icon":"mdi-ruler",label:"size (in m\xB2)",required:"",class:"pa-4",modelValue:e.size,"onUpdate:modelValue":o=>e.size=o,onInput:o=>f(i,e),type:"number"},null,8,["modelValue","onUpdate:modelValue","onInput"])):v("",!0),a(p,{onClick:o=>O(i),class:"ma-4",icon:""},{default:t(()=>[a(_,{dark:""},{default:t(()=>[A]),_:1})]),_:2},1032,["onClick"])]),_:2},1024))),128)),a(h,{justify:"center"},{default:t(()=>[a(p,{class:"mx-2",icon:"",size:"large",elevation:"3",onClick:j},{default:t(()=>[a(_,null,{default:t(()=>[J]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(G,{class:"d-flex align-center justify-space-between pa-8"},{default:t(()=>[a(C,{to:{name:"Kitchen"},custom:""},{default:t(({navigate:e})=>[a(p,{class:"ma-2 secondary",elevation:"1",size:"large",variant:"outlined",onClick:e},{default:t(()=>[a(_,null,{default:t(()=>[X]),_:1}),Y]),_:2},1032,["onClick"])]),_:1}),a(C,{to:{name:"EnergyPerformance"},custom:""},{default:t(({navigate:e})=>[a(p,{class:"ma-2 success",elevation:"4",size:"large",variant:"outlined",onClick:e},{default:t(()=>[Z,a(_,null,{default:t(()=>[ee]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1})])}}});export{de as default};
