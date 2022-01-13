var ie=Object.defineProperty,se=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var N=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))ae.call(t,n)&&N(e,n,t[n]);if(z)for(var n of z(t))le.call(t,n)&&N(e,n,t[n]);return e},P=(e,t)=>se(e,oe(t));import{v as f,l,x as d,y as R,z as I,A as V,B as H,C as re,D as ue,E as D,a as g,G as ce,F as de,p as W,H as ve,I as j,J as me,K as fe,L as he,M as pe}from"./vendor.69980f57.js";const F=["x-small","small","default","large","x-large"],O=f({size:{type:[String,Number],default:"default"}},"size");function Y(e,t){const n=l(()=>F.includes(e.size)?`${t}--size-${e.size}`:null),i=l(()=>!F.includes(e.size)&&e.size?{width:d(e.size),height:d(e.size)}:null);return{sizeClasses:n,sizeStyles:i}}function w(e){const t=l(()=>I(e.value.background)),n=l(()=>I(e.value.text)),i=l(()=>{const s=[];return e.value.background&&!t.value&&s.push(`bg-${e.value.background}`),e.value.text&&!n.value&&s.push(`text-${e.value.text}`),s}),o=l(()=>{const s={};return e.value.background&&t.value&&(s.backgroundColor=e.value.background),e.value.text&&n.value&&(s.color=e.value.text,s.caretColor=e.value.text),s});return{colorClasses:i,colorStyles:o}}function ge(e,t){const n=l(()=>({text:R(e)?e.value:t?e[t]:null})),{colorClasses:i,colorStyles:o}=w(n);return{textColorClasses:i,textColorStyles:o}}function Xe(e,t){const n=l(()=>({background:R(e)?e.value:t?e[t]:null})),{colorClasses:i,colorStyles:o}=w(n);return{backgroundColorClasses:i,backgroundColorStyles:o}}const x=V({name:"VIcon",props:u(u({color:String,left:Boolean,right:Boolean,icon:{type:[String,Object]}},O()),H({tag:"i"})),setup(e,t){let{slots:n}=t,i;n.default&&(i=l(()=>{var v,m;const h=(v=n.default)==null?void 0:v.call(n);if(!!h)return(m=re(h).filter(p=>p.children&&typeof p.children=="string")[0])==null?void 0:m.children}));const{iconData:o}=ue(i||e),{sizeClasses:s}=Y(e,"v-icon"),{textColorClasses:a,textColorStyles:r}=ge(D(e,"color"));return()=>g(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,a.value,{"v-icon--left":e.left,"v-icon--right":e.right}],style:[s.value?void 0:{fontSize:d(e.size),width:d(e.size),height:d(e.size)},r.value],"aria-hidden":"true"},null,8,["tag","icon","class","style"])}}),be=f({border:[Boolean,Number,String]},"border");function ye(e,t){return{borderClasses:l(()=>{const i=[];if(e.border!=null&&e.border!==!1&&i.push(`${t}--border`),typeof e.border=="string"&&e.border!==""||e.border===0)for(const o of String(e.border).split(" "))i.push(`border-${o}`);return i})}}const _e=[null,"default","comfortable","compact"],Ce=f({density:{type:String,default:"default",validator:e=>_e.includes(e)}},"density");function ke(e,t){return{densityClasses:l(()=>`${t}--density-${e.density}`)}}const Se=f({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function we(e){return{dimensionStyles:l(()=>({height:d(e.height),maxHeight:d(e.maxHeight),maxWidth:d(e.maxWidth),minHeight:d(e.minHeight),minWidth:d(e.minWidth),width:d(e.width)}))}}const xe=f({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function $e(e){return{elevationClasses:l(()=>{const n=[];return e.elevation==null||n.push(`elevation-${e.elevation}`),n})}}const Ee=["static","relative","fixed","absolute","sticky"],Le=f({absolute:Boolean,bottom:[Boolean,Number,String],fixed:Boolean,left:[Boolean,Number,String],position:{type:String,validator:e=>Ee.includes(e)},right:[Boolean,Number,String],top:[Boolean,Number,String]},"position");function Te(e,t){const n=["top","right","bottom","left"],i=l(()=>e.fixed?`${t}--fixed`:e.absolute?`${t}--absolute`:e.position?`position-${e.position}`:void 0),o=l(()=>{const s={};for(const a of n){const r=e[a];r==null||r===!1||(s[a]=d(r===!0?"0":String(r)))}return s});return{positionClasses:i,positionStyles:o}}const Be=f({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ze(e,t){return{roundedClasses:l(()=>{const i=[];if(e.tile)i.push(`${t}--tile`);else if(e.rounded===!0||e.rounded==="")i.push(`${t}--rounded`);else if(typeof e.rounded=="string"||e.rounded===0)for(const o of String(e.rounded).split(" "))i.push(`rounded-${o}`);return i})}}function Ne(e,t){const n=ce("RouterLink"),i=l(()=>!!(e.href||e.to)),o=l(()=>(i==null?void 0:i.value)||!!(t.onClick||t.onClickOnce));if(typeof n=="string")return{isLink:i,isClickable:o,href:D(e,"href")};const s=e.to?n.useLink(e):void 0;return P(u({},s),{isLink:i,isClickable:o,href:l(()=>e.to?s==null?void 0:s.route.value.href:e.href)})}const Pe=f({href:String,replace:Boolean,to:[String,Object]},"router"),Re=["contained","outlined","plain","text","contained-text"];function Ie(e,t){return g(de,null,[e&&g("div",{class:`${t}__overlay`},null),g("div",{class:`${t}__underlay`},null)])}const Ve=f({color:String,textColor:String,variant:{type:String,default:"contained",validator:e=>Re.includes(e)}},"variant");function He(e,t){const n=l(()=>{const{variant:s}=W(e);return`${t}--variant-${s}`}),{colorClasses:i,colorStyles:o}=w(l(()=>{const{textColor:s,variant:a,color:r}=W(e);return{text:s,[a==="contained"?"background":"text"]:r}}));return{colorClasses:i,colorStyles:o,variantClasses:n}}const A=Symbol("rippleStop"),De=80;function M(e,t){e.style.transform=t,e.style.webkitTransform=t}function $(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function E(e){return e.constructor.name==="TouchEvent"}function X(e){return e.constructor.name==="KeyboardEvent"}const We=function(e,t){var n;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=0,s=0;if(!X(e)){const b=t.getBoundingClientRect(),y=E(e)?e.touches[e.touches.length-1]:e;o=y.clientX-b.left,s=y.clientY-b.top}let a=0,r=.3;(n=t._ripple)!=null&&n.circle?(r=.15,a=t.clientWidth/2,a=i.center?a:a+Math.sqrt((o-a)**2+(s-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const v=`${(t.clientWidth-a*2)/2}px`,m=`${(t.clientHeight-a*2)/2}px`,h=i.center?v:`${o-a}px`,p=i.center?m:`${s-a}px`;return{radius:a,scale:r,x:h,y:p,centerX:v,centerY:m}},S={show(e,t){var n;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(t!=null&&(n=t._ripple)!=null&&n.enabled))return;const o=document.createElement("span"),s=document.createElement("span");o.appendChild(s),o.className="v-ripple__container",i.class&&(o.className+=` ${i.class}`);const{radius:a,scale:r,x:v,y:m,centerX:h,centerY:p}=We(e,t,i),b=`${a*2}px`;s.className="v-ripple__animation",s.style.width=b,s.style.height=b,t.appendChild(o);const y=window.getComputedStyle(t);y&&y.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),M(s,`translate(${v}, ${m}) scale3d(${r},${r},${r})`),$(s,0),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),M(s,`translate(${h}, ${p}) scale3d(1,1,1)`),$(s,.08)},0)},hide(e){var t;if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const i=n[n.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const o=performance.now()-Number(i.dataset.activated),s=Math.max(250-o,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),$(i,0),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),i.parentNode&&e.removeChild(i.parentNode)},300)},s)}};function K(e){return typeof e=="undefined"||!!e}function _(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[A])){if(e[A]=!0,E(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||X(e),n._ripple.class&&(t.class=n._ripple.class),E(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{S.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var i;n!=null&&(i=n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},De)}else S.show(e,n,t)}}function c(e){const t=e.currentTarget;if(!(!t||!t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{c(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),S.hide(t)}}function q(e){const t=e.currentTarget;!t||!t._ripple||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let C=!1;function G(e){!C&&(e.keyCode===j.enter||e.keyCode===j.space)&&(C=!0,_(e))}function J(e){C=!1,c(e)}function U(e){C&&(C=!1,c(e))}function Q(e,t,n){var i;const{value:o,modifiers:s}=t,a=K(o);a||S.hide(e),e._ripple=(i=e._ripple)!=null?i:{},e._ripple.enabled=a,e._ripple.centered=s.center,e._ripple.circle=s.circle,ve(o)&&o.class&&(e._ripple.class=o.class),a&&!n?(e.addEventListener("touchstart",_,{passive:!0}),e.addEventListener("touchend",c,{passive:!0}),e.addEventListener("touchmove",q,{passive:!0}),e.addEventListener("touchcancel",c),e.addEventListener("mousedown",_),e.addEventListener("mouseup",c),e.addEventListener("mouseleave",c),e.addEventListener("keydown",G),e.addEventListener("keyup",J),e.addEventListener("blur",U),e.addEventListener("dragstart",c,{passive:!0})):!a&&n&&Z(e)}function Z(e){e.removeEventListener("mousedown",_),e.removeEventListener("touchstart",_),e.removeEventListener("touchend",c),e.removeEventListener("touchmove",q),e.removeEventListener("touchcancel",c),e.removeEventListener("mouseup",c),e.removeEventListener("mouseleave",c),e.removeEventListener("keydown",G),e.removeEventListener("keyup",J),e.removeEventListener("dragstart",c),e.removeEventListener("blur",U)}function je(e,t){Q(e,t,!1)}function Fe(e){delete e._ripple,Z(e)}function Oe(e,t){if(t.value===t.oldValue)return;const n=K(t.oldValue);Q(e,t,n)}const Ye={mounted:je,unmounted:Fe,updated:Oe},Ke=V({name:"VBtn",directives:{Ripple:Ye},props:u(u(u(u(u(u(u(u(u(u(u({flat:Boolean,icon:[Boolean,String],prependIcon:String,appendIcon:String,block:Boolean,stacked:Boolean,disabled:Boolean,ripple:{type:Boolean,default:!0}},be()),Be()),Ce()),Se()),xe()),Le()),Pe()),O()),H({tag:"button"})),me()),Ve({variant:"contained"})),setup(e,t){let{attrs:n,slots:i}=t;const{themeClasses:o}=fe(e),{borderClasses:s}=ye(e,"v-btn"),{colorClasses:a,colorStyles:r,variantClasses:v}=He(e,"v-btn"),{densityClasses:m}=ke(e,"v-btn"),{dimensionStyles:h}=we(e),{elevationClasses:p}=$e(e),{positionClasses:b,positionStyles:y}=Te(e,"v-btn"),{roundedClasses:ee}=ze(e,"v-btn"),{sizeClasses:te}=Y(e,"v-btn"),k=Ne(e,n),ne=l(()=>e.variant==="contained"&&!(e.disabled||e.flat||e.border));return()=>{var L,T;const B=k.isLink.value?"a":e.tag;return he(g(B,{type:B==="a"?void 0:"button",class:["v-btn",{"v-btn--active":(L=k.isExactActive)==null?void 0:L.value,"v-btn--block":e.block,"v-btn--disabled":e.disabled,"v-btn--elevated":ne.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--stacked":e.stacked},o.value,s.value,a.value,m.value,p.value,b.value,ee.value,te.value,v.value],style:[r.value,h.value,y.value],disabled:e.disabled||void 0,href:k.href.value,onClick:e.disabled||k.navigate},{default:()=>[Ie(!0,"v-btn"),!e.icon&&e.prependIcon&&g(x,{class:"v-btn__icon",icon:e.prependIcon,left:!e.stacked},null,8,["icon","left"]),typeof e.icon=="boolean"?(T=i.default)==null?void 0:T.call(i):g(x,{class:"v-btn__icon",icon:e.icon,size:e.size},null,8,["icon","size"]),!e.icon&&e.appendIcon&&g(x,{class:"v-btn__icon",icon:e.appendIcon,right:!e.stacked},null,8,["icon","right"])],_:1},8,["type","class","style","disabled","href","onClick"]),[[pe("ripple"),!e.disabled&&e.ripple,null]])}}});export{Ye as R,Ke as V,x as a,Se as b,xe as c,Le as d,Be as e,we as f,$e as g,Te as h,ze as i,Ce as j,ke as k,ge as l,be as m,Xe as n,ye as u};
