"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[2148],{6914:(e,n,l)=>{l.d(n,{A:()=>i});var s=l(5043),o=l(579);const i=function(e){let{targetNumber:n}=e;const[l,i]=(0,s.useState)(0);return(0,s.useEffect)((()=>{const e=setInterval((()=>{l<n&&i((e=>e+1))}),n>500?0:20);return()=>{clearInterval(e)}}),[l,n]),(0,o.jsx)("span",{children:"number"===typeof n?l:n})}},100:(e,n,l)=>{l.d(n,{A:()=>v});var s=l(4167),o=l(4261),i=l(3856),t=l(9938),a=l(5371),r=l(1221),c=l(2703),d=l(9081),u=l(4860),h=l(1724),x=l(5043),g=l(579);const v=e=>{const{gotoPage:n,gopageValue:l,setGopageValue:v,pageCount:m,canPreviousPage:p,previousPage:j,canNextPage:f,pageOptions:b,setPageSize:S,nextPage:k,pageSize:C,pageIndex:y}=e;return(0,x.useEffect)((()=>{v(1)}),[]),(0,g.jsxs)(a.s,{justifyContent:"space-between",mt:2,alignItems:"center",children:[1!==(null===b||void 0===b?void 0:b.length)&&(0,g.jsxs)(a.s,{children:[(0,g.jsx)(r.m,{label:"First Page",children:(0,g.jsx)(c.K,{onClick:()=>{n(0),v(1)},isDisabled:!p,icon:(0,g.jsx)(s.A,{h:3,w:3}),mr:4})}),(0,g.jsx)(r.m,{label:"Previous Page",children:(0,g.jsx)(c.K,{onClick:()=>{j(),v((e=>e-1))},isDisabled:!p,icon:(0,g.jsx)(o.Y,{h:6,w:6})})})]}),(0,g.jsxs)(a.s,{alignItems:"center",children:[1!==(null===b||void 0===b?void 0:b.length)&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(d.E,{flexShrink:"0",mr:8,children:["Page"," ",(0,g.jsx)(d.E,{fontWeight:"bold",as:"span",children:y+1})," ","of"," ",(0,g.jsx)(d.E,{fontWeight:"bold",as:"span",children:null===b||void 0===b?void 0:b.length})]}),(0,g.jsx)(d.E,{flexShrink:"0",children:"Go to page:"})," ",(0,g.jsxs)(u.Q7,{ml:2,mr:8,w:28,min:1,max:null===b||void 0===b?void 0:b.length,value:l,onChange:e=>{n(e?e-1:0),v(e)},defaultValue:y+1,children:[(0,g.jsx)(u.OO,{}),(0,g.jsxs)(u.lw,{children:[(0,g.jsx)(u.Q0,{}),(0,g.jsx)(u.Sh,{})]})]})]}),(0,g.jsx)(h.l,{w:32,value:C,onChange:e=>{S(Number(e.target.value))},children:[5,10,20,30,40,50].map((e=>(0,g.jsxs)("option",{value:e,children:["Show ",e]},e)))})]}),1!==(null===b||void 0===b?void 0:b.length)&&(0,g.jsxs)(a.s,{children:[(0,g.jsx)(r.m,{label:"Next Page",children:(0,g.jsx)(c.K,{onClick:()=>{k(),v((e=>e+1))},isDisabled:!f,icon:(0,g.jsx)(i.v,{h:6,w:6})})}),(0,g.jsx)(r.m,{label:"Last Page",children:(0,g.jsx)(c.K,{onClick:()=>{n(m-1),v(m)},isDisabled:!f,icon:(0,g.jsx)(t.f,{h:3,w:3}),ml:4})})]})]})}},4439:(e,n,l)=>{l.r(n),l.d(n,{default:()=>D});var s=l(7492),o=l(6870),i=l(3533),t=l(5527),a=l(9301),r=l(9201),c=l(4093),d=l(5371),u=l(9081),h=l(2107),x=l(511),g=l(3313),v=l(5395),m=l(3201),p=l(2595),j=l(7813),f=l(9918),b=l(5043),S=l(1094),k=l(8584),C=l(216),y=l(6914),P=l(100),w=l(9488),N=l(5369),I=l(5475),E=l(9621),z=l(2151),_=l(579);function A(e){const{columnsData:n}=e,l=(0,c.dU)("secondaryGray.900","white"),s=(0,c.dU)("gray.200","whiteAlpha.100"),o=(0,b.useMemo)((()=>n),[n]),[i,t]=(0,b.useState)([]),a=JSON.parse(localStorage.getItem("user")),[r,A]=(0,b.useState)(!1),[D,H]=(0,b.useState)([]),[O,W]=(0,b.useState)(!1),[T,B]=(0,b.useState)(),G=(0,S.useTable)({columns:o,data:D,initialState:{pageIndex:0}},S.useGlobalFilter,S.useSortBy,S.usePagination),{getTableProps:V,getTableBodyProps:R,headerGroups:$,prepareRow:M,page:X,canPreviousPage:F,canNextPage:K,pageOptions:U,pageCount:J,gotoPage:L,nextPage:Q,previousPage:Y,setPageSize:q,state:{pageIndex:Z,pageSize:ee}}=G;U.length<T&&B(U.length);return(0,b.useEffect)((()=>{(async()=>{var e;W(!0);let n=await(0,E.x4)("api/user/");H(null===(e=n.data)||void 0===e?void 0:e.user),W(!1)})()}),[r,e.isOpen]),(0,_.jsxs)(C.A,{direction:"column",w:"100%",px:"0px",overflowX:{sm:"scroll",lg:"hidden"},children:[(0,_.jsxs)(d.s,{px:"25px",justify:"space-between",mb:"20px",align:"center",children:[(0,_.jsxs)(u.E,{color:l,fontSize:"22px",fontWeight:"700",lineHeight:"100%",children:["Users (",(0,_.jsx)(y.A,{targetNumber:null===D||void 0===D?void 0:D.length}),")"]}),i.length>0&&(0,_.jsx)(k.d,{onClick:()=>A(!0),color:"red"})]}),(0,_.jsx)(z.A,{isOpen:r,onClose:A,setSelectedValues:t,url:"api/user/deleteMany",data:i,method:"many"}),(0,_.jsx)(h.a,{overflowY:"auto",className:"table-fix-container",children:(0,_.jsxs)(x.X,{...V(),variant:"simple",color:"gray.500",mb:"24px",children:[(0,_.jsx)(g.d,{children:null===$||void 0===$?void 0:$.map(((e,n)=>{var l;return(0,b.createElement)(v.Tr,{...e.getHeaderGroupProps(),key:n},null===(l=e.headers)||void 0===l?void 0:l.map(((e,n)=>(0,b.createElement)(m.Th,{...e.getHeaderProps(!1!==e.isSortable&&e.getSortByToggleProps()),pe:"10px",key:n,borderColor:s},(0,_.jsxs)(d.s,{justify:"space-between",align:"center",fontSize:{sm:"10px",lg:"12px"},color:"gray.400",children:[e.render("Header"),!1!==e.isSortable&&(0,_.jsx)("span",{children:e.isSorted?e.isSortedDesc?(0,_.jsx)(N.GOR,{}):(0,_.jsx)(N.XhJ,{}):(0,_.jsx)(N.MjW,{})})]})))))}))}),(0,_.jsx)(p.N,{...R(),children:O?(0,_.jsx)(v.Tr,{children:(0,_.jsx)(j.Td,{colSpan:null===o||void 0===o?void 0:o.length,children:(0,_.jsx)(d.s,{justifyContent:"center",alignItems:"center",width:"100%",color:l,fontSize:"sm",fontWeight:"700",children:(0,_.jsx)(w.A,{})})})}):0===(null===D||void 0===D?void 0:D.length)?(0,_.jsx)(v.Tr,{children:(0,_.jsx)(j.Td,{colSpan:o.length,children:(0,_.jsx)(u.E,{textAlign:"center",width:"100%",color:l,fontSize:"sm",fontWeight:"700",children:"-- No Data Found --"})})}):null===X||void 0===X?void 0:X.map(((e,n)=>{var s;return M(e),(0,b.createElement)(v.Tr,{...null===e||void 0===e?void 0:e.getRowProps(),key:n},null===e||void 0===e||null===(s=e.cells)||void 0===s?void 0:s.map(((e,n)=>{let s="";var o,r,c;if("#"===(null===e||void 0===e?void 0:e.column.Header))s=(0,_.jsxs)(d.s,{align:"center",children:["admin"!==(null===e||void 0===e||null===(o=e.row)||void 0===o||null===(r=o.original)||void 0===r?void 0:r.role)?(0,_.jsx)(f.S,{colorScheme:"brandScheme",value:i,isChecked:i.includes(null===e||void 0===e?void 0:e.value),onChange:n=>((e,n)=>{e.target.checked?t((e=>[...e,n])):t((e=>e.filter((e=>e!==n))))})(n,null===e||void 0===e?void 0:e.value),me:"10px"}):(0,_.jsx)(u.E,{me:"28px"}),(0,_.jsx)(u.E,{color:l,fontSize:"sm",fontWeight:"700",children:(null===e||void 0===e||null===(c=e.row)||void 0===c?void 0:c.index)+1})]});else if("email Id"===(null===e||void 0===e?void 0:e.column.Header)){var h,x;s=(0,_.jsx)(I.N_,{to:"admin"!==(null===a||void 0===a?void 0:a.role)?`/userView/${null===e||void 0===e||null===(h=e.row)||void 0===h?void 0:h.values._id}`:`/admin/userView/${null===e||void 0===e||null===(x=e.row)||void 0===x?void 0:x.values._id}`,children:(0,_.jsx)(u.E,{me:"10px",sx:{"&:hover":{color:"blue.500",textDecoration:"underline"}},color:"green.400",fontSize:"sm",fontWeight:"700",children:null===e||void 0===e?void 0:e.value})})}else"first Name"===(null===e||void 0===e?void 0:e.column.Header)||"last Name"===(null===e||void 0===e?void 0:e.column.Header)?s=(0,_.jsx)(u.E,{me:"10px",color:l,fontSize:"sm",fontWeight:"700",children:null!==e&&void 0!==e&&e.value?null===e||void 0===e?void 0:e.value:" - "}):"role"===(null===e||void 0===e?void 0:e.column.Header)&&(s=(0,_.jsx)(u.E,{color:l,fontSize:"sm",fontWeight:"700",children:null===e||void 0===e?void 0:e.value}));return(0,b.createElement)(j.Td,{...null===e||void 0===e?void 0:e.getCellProps(),key:n,fontSize:{sm:"14px"},minW:{sm:"150px",md:"200px",lg:"auto"},borderColor:"transparent"},s)})))}))})]})}),(null===D||void 0===D?void 0:D.length)>5&&(0,_.jsx)(P.A,{gotoPage:L,gopageValue:T,setGopageValue:B,pageCount:J,canPreviousPage:F,previousPage:Y,canNextPage:K,pageOptions:U,setPageSize:q,nextPage:Q,pageSize:ee,pageIndex:Z})]})}const D=()=>{const{isOpen:e,onOpen:n,onClose:l}=(0,o.j)();return(0,_.jsxs)("div",{children:[(0,_.jsx)(i.x,{templateColumns:"repeat(6, 1fr)",mb:3,gap:1,children:(0,_.jsx)(t.E,{colStart:6,textAlign:"right",children:(0,_.jsx)(a.$,{onClick:()=>{n()},leftIcon:(0,_.jsx)(s.R,{}),variant:"brand",children:"Add"})})}),(0,_.jsx)(A,{isOpen:e,columnsData:[{Header:"#",accessor:"_id",isSortable:!1,width:10},{Header:"email Id",accessor:"username"},{Header:"first Name",accessor:"firstName"},{Header:"last Name",accessor:"lastName"},{Header:"role",accessor:"role"}]}),(0,_.jsx)(r.A,{isOpen:e,size:"lg",onClose:l})]})}},9918:(e,n,l)=>{l.d(n,{S:()=>P});var s=l(579),o=l(3033),i=l(7246),t=l(3019),a=l(4765),r=l(3290),c=l(5043),d=l(6417);const[u,h]=(0,d.q)({name:"CheckboxGroupContext",strict:!1});var x=l(5334);function g(e){return(0,s.jsx)(x.B.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:(0,s.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function v(e){return(0,s.jsx)(x.B.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:(0,s.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function m(e){const{isIndeterminate:n,isChecked:l,...o}=e,i=n?v:g;return l||n?(0,s.jsx)(x.B.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,s.jsx)(i,{...o})}):null}var p=l(4069);var j=l(5003),f=l(5158);const b={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},S={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},k=(0,r.keyframes)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),C=(0,r.keyframes)({from:{opacity:0},to:{opacity:1}}),y=(0,r.keyframes)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),P=(0,j.R)((function(e,n){const l=h(),r={...l,...e},d=(0,f.o)("Checkbox",r),u=(0,o.M)(e),{spacing:g="0.5rem",className:v,children:j,iconColor:P,iconSize:w,icon:N=(0,s.jsx)(m,{}),isChecked:I,isDisabled:E=l?.isDisabled,onChange:z,inputProps:_,...A}=u;let D=I;l?.value&&u.value&&(D=l.value.includes(u.value));let H=z;l?.onChange&&u.value&&(H=(0,i.O)(l.onChange,z));const{state:O,getInputProps:W,getCheckboxProps:T,getLabelProps:B,getRootProps:G}=(0,p.v)({...A,isDisabled:E,isChecked:D,onChange:H}),V=function(e){const[n,l]=(0,c.useState)(e),[s,o]=(0,c.useState)(!1);return e!==n&&(o(!0),l(e)),s}(O.isChecked),R=(0,c.useMemo)((()=>({animation:V?O.isIndeterminate?`${C} 20ms linear, ${y} 200ms linear`:`${k} 200ms linear`:void 0,...d.icon,...(0,t.o)({fontSize:w,color:P})})),[P,w,V,O.isIndeterminate,d.icon]),$=(0,c.cloneElement)(N,{__css:R,isIndeterminate:O.isIndeterminate,isChecked:O.isChecked});return(0,s.jsxs)(x.B.label,{__css:{...S,...d.container},className:(0,a.cx)("chakra-checkbox",v),...G(),children:[(0,s.jsx)("input",{className:"chakra-checkbox__input",...W(_,n)}),(0,s.jsx)(x.B.span,{__css:{...b,...d.control},className:"chakra-checkbox__control",...T(),children:$}),j&&(0,s.jsx)(x.B.span,{className:"chakra-checkbox__label",...B(),__css:{marginStart:g,...d.label},children:j})]})}));P.displayName="Checkbox"}}]);
//# sourceMappingURL=2148.7c91e58b.chunk.js.map