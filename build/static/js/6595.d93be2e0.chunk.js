"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[6595],{216:(e,o,l)=>{l.d(o,{A:()=>t});var n=l(5158),r=l(2107),i=l(579);const t=function(e){const{variant:o,children:l,...t}=e,s=(0,n.V)("Card",{variant:o});return(0,i.jsx)(r.a,{__css:s,height:"100%",...t,children:l})}},6914:(e,o,l)=>{l.d(o,{A:()=>i});var n=l(5043),r=l(579);const i=function(e){let{targetNumber:o}=e;const[l,i]=(0,n.useState)(0);return(0,n.useEffect)((()=>{const e=setInterval((()=>{l<o&&i((e=>e+1))}),o>500?0:20);return()=>{clearInterval(e)}}),[l,o]),(0,r.jsx)("span",{children:"number"===typeof o?l:o})}},6595:(e,o,l)=>{l.r(o),l.d(o,{default:()=>C});var n=l(6870),r=l(3533),i=l(5527),t=l(4093),s=l(5371),a=l(9081),d=l(511),c=l(3313),u=l(5395),v=l(3201),m=l(2595),x=l(7813),p=l(5043),g=l(1094),h=l(216),f=l(5369),j=l(1069),b=l(5475),S=l(6914),w=l(6178),y=l.n(w),H=l(9621),E=l(579);function P(e){const{columnsData:o}=e,l=(0,t.dU)("secondaryGray.900","white"),n=(0,t.dU)("gray.200","whiteAlpha.100"),r=(0,p.useMemo)((()=>o),[o]),[i,w]=(0,p.useState)([]),P=JSON.parse(localStorage.getItem("user")),C=(0,g.useTable)({columns:r,data:i},g.useGlobalFilter,g.useSortBy,g.usePagination),{getTableProps:T,getTableBodyProps:z,headerGroups:N,page:k,prepareRow:W,initialState:D,nextPage:_,previousPage:A,canNextPage:O,canPreviousPage:F,pageOptions:G,state:I}=C;D.pageSize=10;const{pageIndex:M}=I;return(0,p.useEffect)((()=>{(async()=>{let e=await(0,H.x4)("admin"===P.role?"api/text-msg":`api/text-msg?sender=${P._id}`);w(null===e||void 0===e?void 0:e.data)})()}),[e.isOpen]),(0,E.jsxs)(h.A,{direction:"column",w:"100%",px:"0px",overflowX:{sm:"scroll",lg:"scroll"},children:[(0,E.jsx)(s.s,{px:"25px",justify:"space-between",mb:"20px",align:"center",children:(0,E.jsxs)(a.E,{color:l,fontSize:"22px",fontWeight:"700",lineHeight:"100%",children:["Text Msg  (",(0,E.jsx)(S.A,{targetNumber:null===i||void 0===i?void 0:i.length}),")"]})}),(0,E.jsxs)(d.X,{...T(),variant:"simple",color:"gray.500",mb:"24px",children:[(0,E.jsx)(c.d,{children:null===N||void 0===N?void 0:N.map(((e,o)=>{var l;return(0,p.createElement)(u.Tr,{...e.getHeaderGroupProps(),key:o},null===(l=e.headers)||void 0===l?void 0:l.map(((e,o)=>(0,p.createElement)(v.Th,{...e.getHeaderProps(!1!==e.isSortable&&e.getSortByToggleProps()),pe:"10px",key:o,borderColor:n},(0,E.jsxs)(s.s,{justify:"space-between",align:"center",fontSize:{sm:"10px",lg:"12px"},color:"gray.400",children:[e.render("Header"),!1!==e.isSortable&&(0,E.jsx)("span",{children:e.isSorted?e.isSortedDesc?(0,E.jsx)(f.GOR,{}):(0,E.jsx)(f.XhJ,{}):(0,E.jsx)(f.MjW,{})})]})))))}))}),(0,E.jsxs)(m.N,{...z(),children:[0===(null===i||void 0===i?void 0:i.length)&&(0,E.jsx)(u.Tr,{children:(0,E.jsx)(x.Td,{colSpan:r.length,children:(0,E.jsx)(a.E,{textAlign:"center",width:"100%",color:l,fontSize:"sm",fontWeight:"700",children:"-- No Data Found --"})})}),null===k||void 0===k?void 0:k.map(((e,o)=>{var n;return W(e),(0,p.createElement)(u.Tr,{...null===e||void 0===e?void 0:e.getRowProps(),key:o},null===e||void 0===e||null===(n=e.cells)||void 0===n?void 0:n.map(((e,o)=>{let n="";var r;if("#"===(null===e||void 0===e?void 0:e.column.Header))n=(0,E.jsx)(s.s,{align:"center",children:(0,E.jsx)(a.E,{color:l,fontSize:"sm",fontWeight:"700",children:(null===e||void 0===e||null===(r=e.row)||void 0===r?void 0:r.index)+1})});else if("sender"===(null===e||void 0===e?void 0:e.column.Header)){var i,t;n=(0,E.jsx)(b.N_,{to:"admin"!==(null===P||void 0===P?void 0:P.role)?`/text-msg/${null===e||void 0===e||null===(i=e.row)||void 0===i?void 0:i.values._id}`:`/admin/text-msg/${null===e||void 0===e||null===(t=e.row)||void 0===t?void 0:t.values._id}`,children:(0,E.jsx)(a.E,{me:"10px",sx:{"&:hover":{color:"blue.500",textDecoration:"underline"}},color:"green.400",fontSize:"sm",fontWeight:"700",children:null!==e&&void 0!==e&&e.value?null===e||void 0===e?void 0:e.value:" - "})})}else if("to"===(null===e||void 0===e?void 0:e.column.Header))n=(0,E.jsx)(a.E,{me:"10px",color:l,fontSize:"sm",fontWeight:"700",children:null===e||void 0===e?void 0:e.value});else if("create From"===(null===e||void 0===e?void 0:e.column.Header)){var d,c,u,v;n=(0,E.jsx)(b.N_,{to:"admin"!==(null===P||void 0===P?void 0:P.role)?`/contactView/${null===e||void 0===e||null===(d=e.row)||void 0===d||null===(c=d.original)||void 0===c?void 0:c.createFor}`:`/admin/contactView/${null===e||void 0===e||null===(u=e.row)||void 0===u||null===(v=u.original)||void 0===v?void 0:v.createFor}`,children:(0,E.jsx)(a.E,{me:"10px",sx:{"&:hover":{color:"blue.500",textDecoration:"underline"}},color:"green.400",fontSize:"sm",fontWeight:"700",children:null!==e&&void 0!==e&&e.value?null===e||void 0===e?void 0:e.value:" - "})})}else if("timestamp"===(null===e||void 0===e?void 0:e.column.Header))n=(0,E.jsx)(a.E,{color:l,fontSize:"sm",fontWeight:"700",children:y()(null===e||void 0===e?void 0:e.value).toNow()});else if("Created"===(null===e||void 0===e?void 0:e.column.Header)){var m;n=(0,E.jsx)(a.E,{color:l,fontSize:"sm",fontWeight:"700",children:y()(null===e||void 0===e||null===(m=e.row)||void 0===m?void 0:m.values.timestamp).format("(DD/MM) h:mma")})}return(0,p.createElement)(x.Td,{...null===e||void 0===e?void 0:e.getCellProps(),key:o,fontSize:{sm:"14px"},minW:{sm:"150px",md:"200px",lg:"auto"},borderColor:"transparent"},n)})))}))]})]}),(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"left",alignItems:"center",margin:"1rem"},children:[(0,E.jsx)("button",{onClick:()=>A(),disabled:!F,children:(0,E.jsx)(j.xrT,{})}),(0,E.jsxs)("span",{style:{margin:"0 0.5rem"},children:["Page ",M+1," of ",G.length]}),(0,E.jsx)("button",{onClick:()=>_(),disabled:!O,children:(0,E.jsx)(j.Xor,{})})]})]})}const C=()=>{const{isOpen:e,onOpen:o,onClose:l}=(0,n.j)();return(0,E.jsxs)("div",{children:[(0,E.jsx)(r.x,{templateColumns:"repeat(6, 1fr)",mb:3,gap:1,children:(0,E.jsx)(i.E,{colStart:6,textAlign:"right"})}),(0,E.jsx)(P,{isOpen:e,columnsData:[{Header:"#",accessor:"_id",isSortable:!1,width:10},{Header:"sender",accessor:"senderName"},{Header:"to",accessor:"to"},{Header:"create From",accessor:"createByName"},{Header:"timestamp",accessor:"timestamp"},{Header:"Created"}]})]})}}}]);
//# sourceMappingURL=6595.d93be2e0.chunk.js.map