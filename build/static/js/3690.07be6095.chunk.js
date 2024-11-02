"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[3690],{8860:(e,a,n)=>{n.d(a,{NLY:()=>s});var t=n(6688);function s(e){return(0,t.k5)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.15 269.75a133.197 133.197 0 0 1-55.862 179.975l-42.782 22.541-10.52 5.533a71.277 71.277 0 0 1-62.966 1.685l-167.077-71.38 15.733-46.676 99.363 19.194-51.458-97.78-82.843-157.411 40.357-21.232 82.844 157.457 19.934-10.485-36.521-69.445 40.335-21.22 36.52 69.445 19.935-10.485-28.2-53.598 40.358-21.232 28.2 53.598 19.945-10.576-19.354-36.886 40.346-21.174 19.354 36.885 54.348 103.301zM73.268 146.674a60.03 60.03 0 0 1 42.361-102.459 60.098 60.098 0 0 1 56.58 80.169l10.588 20.013A78.29 78.29 0 0 0 115.708 26a78.233 78.233 0 0 0-5.635 156.262L99.428 162.02a59.688 59.688 0 0 1-26.16-15.346z"}}]})(e)}},3388:(e,a,n)=>{n.d(a,{G2h:()=>s});var t=n(6688);function s(e){return(0,t.k5)({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9 2.59375 L 9 28.15625 L 10.65625 26.78125 L 14.6875 23.40625 L 16.71875 27.4375 L 17.15625 28.34375 L 18.0625 27.875 L 21.15625 26.28125 L 22.03125 25.84375 L 21.59375 24.9375 L 19.75 21.3125 L 24.8125 20.6875 L 26.84375 20.4375 L 25.40625 19 L 10.71875 4.28125 Z M 11 7.4375 L 22.5625 18.96875 L 18.0625 19.5 L 16.65625 19.6875 L 17.3125 20.96875 L 19.375 24.96875 L 18.0625 25.65625 L 15.90625 21.34375 L 15.3125 20.21875 L 14.34375 21.03125 L 11 23.84375 Z"}}]})(e)}},9918:(e,a,n)=>{n.d(a,{S:()=>_});var t=n(579),s=n(3033),o=n(7246),i=n(3019),r=n(4765),l=n(3290),c=n(5043),d=n(6417);const[u,h]=(0,d.q)({name:"CheckboxGroupContext",strict:!1});var p=n(5334);function g(e){return(0,t.jsx)(p.B.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:(0,t.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function m(e){return(0,t.jsx)(p.B.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:(0,t.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function v(e){const{isIndeterminate:a,isChecked:n,...s}=e,o=a?m:g;return n||a?(0,t.jsx)(p.B.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,t.jsx)(o,{...s})}):null}var f=n(4069);var k=n(5003),b=n(5158);const C={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},x={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},y=(0,l.keyframes)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),R=(0,l.keyframes)({from:{opacity:0},to:{opacity:1}}),w=(0,l.keyframes)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),_=(0,k.R)((function(e,a){const n=h(),l={...n,...e},d=(0,b.o)("Checkbox",l),u=(0,s.M)(e),{spacing:g="0.5rem",className:m,children:k,iconColor:_,iconSize:L,icon:S=(0,t.jsx)(v,{}),isChecked:j,isDisabled:D=n?.isDisabled,onChange:P,inputProps:B,...N}=u;let I=j;n?.value&&u.value&&(I=n.value.includes(u.value));let M=P;n?.onChange&&u.value&&(M=(0,o.O)(n.onChange,P));const{state:F,getInputProps:G,getCheckboxProps:H,getLabelProps:A,getRootProps:q}=(0,f.v)({...N,isDisabled:D,isChecked:I,onChange:M}),E=function(e){const[a,n]=(0,c.useState)(e),[t,s]=(0,c.useState)(!1);return e!==a&&(s(!0),n(e)),t}(F.isChecked),z=(0,c.useMemo)((()=>({animation:E?F.isIndeterminate?`${R} 20ms linear, ${w} 200ms linear`:`${y} 200ms linear`:void 0,...d.icon,...(0,i.o)({fontSize:L,color:_})})),[_,L,E,F.isIndeterminate,d.icon]),O=(0,c.cloneElement)(S,{__css:z,isIndeterminate:F.isIndeterminate,isChecked:F.isChecked});return(0,t.jsxs)(p.B.label,{__css:{...x,...d.container},className:(0,r.cx)("chakra-checkbox",m),...q(),children:[(0,t.jsx)("input",{className:"chakra-checkbox__input",...G(B,a)}),(0,t.jsx)(p.B.span,{__css:{...C,...d.control},className:"chakra-checkbox__control",...H(),children:O}),k&&(0,t.jsx)(p.B.span,{className:"chakra-checkbox__label",...A(),__css:{marginStart:g,...d.label},children:k})]})}));_.displayName="Checkbox"},5527:(e,a,n)=>{n.d(a,{E:()=>c});var t=n(579),s=n(2470),o=n(3019),i=n(5003),r=n(5334);function l(e){return(0,s.bk)(e,(e=>"auto"===e?"auto":`span ${e}/span ${e}`))}const c=(0,i.R)((function(e,a){const{area:n,colSpan:s,colStart:i,colEnd:c,rowEnd:d,rowSpan:u,rowStart:h,...p}=e,g=(0,o.o)({gridArea:n,gridColumn:l(s),gridRow:l(u),gridColumnStart:i,gridColumnEnd:c,gridRowStart:h,gridRowEnd:d});return(0,t.jsx)(r.B.div,{ref:a,__css:g,...p})}));c.displayName="GridItem"},3533:(e,a,n)=>{n.d(a,{x:()=>i});var t=n(579),s=n(5003),o=n(5334);const i=(0,s.R)((function(e,a){const{templateAreas:n,gap:s,rowGap:i,columnGap:r,column:l,row:c,autoFlow:d,autoRows:u,templateRows:h,autoColumns:p,templateColumns:g,...m}=e,v={display:"grid",gridTemplateAreas:n,gridGap:s,gridRowGap:i,gridColumnGap:r,gridAutoColumns:p,gridColumn:l,gridRow:c,gridAutoFlow:d,gridAutoRows:u,gridTemplateRows:h,gridTemplateColumns:g};return(0,t.jsx)(o.B.div,{ref:a,__css:v,...m})}));i.displayName="Grid"},6686:(e,a,n)=>{n.d(a,{z:()=>g,R:()=>p});var t=n(579),s=n(6417),o=n(4765),i=n(5043),r=n(3194),l=n(3108);function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{onChange:a,value:n,defaultValue:t,name:s,isDisabled:o,isFocusable:c,isNative:d,...u}=e,[h,p]=(0,i.useState)(t||""),g="undefined"!==typeof n,m=g?n:h,v=(0,i.useRef)(null),f=(0,i.useCallback)((()=>{const e=v.current;if(!e)return;let a="input:not(:disabled):checked";const n=e.querySelector(a);if(n)return void n.focus();a="input:not(:disabled)";const t=e.querySelector(a);t?.focus()}),[]),k=(0,i.useId)(),b=s||`radio-${k}`,C=(0,i.useCallback)((e=>{const n=function(e){return e&&(0,l.Gv)(e)&&(0,l.Gv)(e.target)}(e)?e.target.value:e;g||p(n),a?.(String(n))}),[a,g]),x=(0,i.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,r.Px)(e,v),role:"radiogroup"}}),[]),y=(0,i.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=d?"checked":"isChecked";return{...e,ref:a,name:b,[n]:null!=m?e.value===m:void 0,onChange(e){C(e)},"data-radiogroup":!0}}),[d,b,C,m]);return{getRootProps:x,getRadioProps:y,name:b,ref:v,focus:f,setValue:p,value:m,onChange:C,isDisabled:o,isFocusable:c,htmlProps:u}}var d=n(5003),u=n(5334);const[h,p]=(0,s.q)({name:"RadioGroupContext",strict:!1}),g=(0,d.R)(((e,a)=>{const{colorScheme:n,size:s,variant:r,children:l,className:d,isDisabled:p,isFocusable:g,...m}=e,{value:v,onChange:f,getRootProps:k,name:b,htmlProps:C}=c(m),x=(0,i.useMemo)((()=>({name:b,size:s,onChange:f,colorScheme:n,value:v,variant:r,isDisabled:p,isFocusable:g})),[b,s,f,n,v,r,p,g]);return(0,t.jsx)(h,{value:x,children:(0,t.jsx)(u.B.div,{...k(C,a),className:(0,o.cx)("chakra-radio-group",d),children:l})})}));g.displayName="RadioGroup"},4812:(e,a,n)=>{n.d(a,{s:()=>k});var t=n(579),s=n(3033),o=n(6501),i=n(7246),r=n(6712),l=n(6686),c=n(8813),d=n(8952),u=n(5043),h=n(3225),p=n(5814);function g(e){e.preventDefault(),e.stopPropagation()}var m=n(5003),v=n(5158),f=n(5334);const k=(0,m.R)(((e,a)=>{const n=(0,l.R)(),{onChange:m,value:k}=e,b=(0,v.o)("Radio",{...n,...e}),C=(0,s.M)(e),{spacing:x="0.5rem",children:y,isDisabled:R=n?.isDisabled,isFocusable:w=n?.isFocusable,inputProps:_,...L}=C;let S=e.isChecked;null!=n?.value&&null!=k&&(S=n.value===k);let j=m;n?.onChange&&null!=k&&(j=(0,i.O)(n.onChange,m));const D=e?.name??n?.name,{getInputProps:P,getRadioProps:B,getLabelProps:N,getRootProps:I,htmlProps:M}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{defaultChecked:a,isChecked:n,isFocusable:t,isDisabled:s,isReadOnly:o,isRequired:r,onChange:m,isInvalid:v,name:f,value:k,id:b,"data-radiogroup":C,"aria-describedby":x,...y}=e,R=`radio-${(0,u.useId)()}`,w=(0,h.Uc)(),_=(0,l.R)();let L=!w||_||C?R:w.id;L=b??L;const S=s??w?.isDisabled,j=o??w?.isReadOnly,D=r??w?.isRequired,P=v??w?.isInvalid,[B,N]=(0,u.useState)(!1),[I,M]=(0,u.useState)(!1),[F,G]=(0,u.useState)(!1),[H,A]=(0,u.useState)(!1),[q,E]=(0,u.useState)(Boolean(a)),z="undefined"!==typeof n,O=z?n:q;(0,u.useEffect)((()=>(0,d.Yy)(N)),[]);const T=(0,u.useCallback)((e=>{j||S?e.preventDefault():(z||E(e.currentTarget.checked),m?.(e))}),[z,S,j,m]),$=(0,u.useCallback)((e=>{" "===e.key&&A(!0)}),[A]),U=(0,u.useCallback)((e=>{" "===e.key&&A(!1)}),[A]),K=(0,u.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:a,"data-active":(0,c.s)(H),"data-hover":(0,c.s)(F),"data-disabled":(0,c.s)(S),"data-invalid":(0,c.s)(P),"data-checked":(0,c.s)(O),"data-focus":(0,c.s)(I),"data-focus-visible":(0,c.s)(I&&B),"data-readonly":(0,c.s)(j),"aria-hidden":!0,onMouseDown:(0,i.H)(e.onMouseDown,(()=>A(!0))),onMouseUp:(0,i.H)(e.onMouseUp,(()=>A(!1))),onMouseEnter:(0,i.H)(e.onMouseEnter,(()=>G(!0))),onMouseLeave:(0,i.H)(e.onMouseLeave,(()=>G(!1)))}}),[H,F,S,P,O,I,j,B]),{onFocus:V,onBlur:W}=w??{},X=(0,u.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=S&&!t;return{...e,id:L,ref:a,type:"radio",name:f,value:k,onChange:(0,i.H)(e.onChange,T),onBlur:(0,i.H)(W,e.onBlur,(()=>M(!1))),onFocus:(0,i.H)(V,e.onFocus,(()=>M(!0))),onKeyDown:(0,i.H)(e.onKeyDown,$),onKeyUp:(0,i.H)(e.onKeyUp,U),checked:O,disabled:n,readOnly:j,required:D,"aria-invalid":(0,c.r)(P),"aria-disabled":(0,c.r)(n),"aria-required":(0,c.r)(D),"data-readonly":(0,c.s)(j),"aria-describedby":x,style:p.f}}),[S,t,L,f,k,T,W,V,$,U,O,j,D,P,x]);return{state:{isInvalid:P,isFocused:I,isChecked:O,isActive:H,isHovered:F,isDisabled:S,isReadOnly:j,isRequired:D},getRadioProps:K,getInputProps:X,getLabelProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:a,onMouseDown:(0,i.H)(e.onMouseDown,g),"data-disabled":(0,c.s)(S),"data-checked":(0,c.s)(O),"data-invalid":(0,c.s)(P)}},getRootProps:function(e){return{htmlFor:L,...e,ref:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,"data-disabled":(0,c.s)(S),"data-checked":(0,c.s)(O),"data-invalid":(0,c.s)(P)}},htmlProps:y}}({...L,isChecked:S,isFocusable:w,isDisabled:R,onChange:j,name:D}),[F,G]=(0,r.l)(M,o.GF),H=B(G),A=P(_,a),q=N(),E=Object.assign({},F,I()),z={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...b.container},O={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...b.control},T={userSelect:"none",marginStart:x,...b.label};return(0,t.jsxs)(f.B.label,{className:"chakra-radio",...E,__css:z,children:[(0,t.jsx)("input",{className:"chakra-radio__input",...A}),(0,t.jsx)(f.B.span,{className:"chakra-radio__control",...H,__css:O}),y&&(0,t.jsx)(f.B.span,{className:"chakra-radio__label",...q,__css:T,children:y})]})}));k.displayName="Radio"},9077:(e,a,n)=>{n.d(a,{T:()=>h});var t=n(579),s=n(3033),o=n(4079),i=n(4765),r=n(3635),l=n(5003),c=n(5158),d=n(5334);const u=["h","minH","height","minHeight"],h=(0,l.R)(((e,a)=>{const n=(0,c.V)("Textarea",e),{className:l,rows:h,...p}=(0,s.M)(e),g=(0,r.t)(p),m=h?(0,o.c)(n,u):n;return(0,t.jsx)(d.B.textarea,{ref:a,rows:h,...g,className:(0,i.cx)("chakra-textarea",l),__css:m})}));h.displayName="Textarea"}}]);
//# sourceMappingURL=3690.07be6095.chunk.js.map