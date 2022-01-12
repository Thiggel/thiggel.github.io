import{J as B,K as C,t as k,r as x,o as c,k as h,a as e,d as j,w as t,F as V,e as a,L as y,l as m,ac as z,D as F,m as s,c as N}from"./vendor.cf840546.js";import{V as S}from"./VFooter.e2ddd6b7.js";import{V as T}from"./VLabel.5699536f.js";import{a as d,V as u}from"./VBtn.664b448d.js";import{V as I}from"./VTextField.570e0fd3.js";import{V as U}from"./VSwitch.17c0d13c.js";import"./VSelectionControl.c2f89d3e.js";const H={class:"progress-bar"},L=a("h4",null," How many bedrooms do you have? ",-1),$=a("p",{class:"mb-10"},[s(" Add entries for all the bedrooms that your apartment features. To calculate your maximum rent, it is important to know the area, so go ahead and "),a("b",null,"measure"),s(" the "),a("b",null,"width"),s(" and "),a("b",null,"length"),s(" of your room(s) in meters. The final area is those two numbers multiplied ("),a("i",null,"width \xD7 length"),s("). ")],-1),D=s(" mdi-close "),q=s(" mdi-plus "),A=s("mdi-arrow-left"),E=a("span",null,"Previous",-1),G=a("span",null,"Next",-1),J=s("mdi-arrow-right"),X=B({props:{progress:Number},setup(g){const n=C(),v=k(()=>n.state.bedrooms);function b(){n.commit("addBedroom")}function w(r){n.commit("removeBedroom",r)}function f(r,_){n.commit("setBedroom",{index:r,bedroom:_})}return(r,_)=>{const p=x("router-link");return c(),h(V,null,[e(j,null,{default:t(()=>[a("div",H,[a("div",{class:"progress",style:y("width:"+g.progress+"%")},null,4)]),e(m,{class:"ma-4 mb-10",justify:"center"},{default:t(()=>[L]),_:1}),e(T,null,{default:t(()=>[$,(c(!0),h(V,null,z(F(v),(o,i)=>(c(),N(m,{key:i,class:"form-list-item"},{default:t(()=>[e(I,{"prepend-inner-icon":"mdi-ruler",label:"size (in m\xB2)",required:"",class:"pa-4",modelValue:o.size,"onUpdate:modelValue":l=>o.size=l,onInput:l=>f(i,o),type:"number"},null,8,["modelValue","onUpdate:modelValue","onInput"]),e(U,{label:"Is the room heated?",color:"green",class:"pa-4",modelValue:o.isHeated,"onUpdate:modelValue":l=>o.isHeated=l,onChange:l=>f(i,o)},null,8,["modelValue","onUpdate:modelValue","onChange"]),e(d,{onClick:l=>w(i),class:"ma-4",icon:""},{default:t(()=>[e(u,{dark:""},{default:t(()=>[D]),_:1})]),_:2},1032,["onClick"])]),_:2},1024))),128)),e(m,{justify:"center"},{default:t(()=>[e(d,{class:"mx-2",icon:"",size:"large",elevation:"3",onClick:b},{default:t(()=>[e(u,null,{default:t(()=>[q]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(S,{class:"d-flex align-center justify-space-between pa-8"},{default:t(()=>[e(p,{to:{name:"General"},custom:""},{default:t(({navigate:o})=>[e(d,{class:"ma-2 secondary",elevation:"1",size:"large",variant:"outlined",onClick:o},{default:t(()=>[e(u,null,{default:t(()=>[A]),_:1}),E]),_:2},1032,["onClick"])]),_:1}),e(p,{to:{name:"Bathrooms"},custom:""},{default:t(({navigate:o})=>[e(d,{class:"ma-2 success",elevation:"4",size:"large",variant:"outlined",onClick:o},{default:t(()=>[G,e(u,null,{default:t(()=>[J]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1})],64)}}});export{X as default};
