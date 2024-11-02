"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[3395],{1538:(e,l,n)=>{n.d(l,{A:()=>y});var o=n(4093),i=n(5371),t=n(9081),d=n(9301),a=n(2107),s=n(511),r=n(3313),c=n(5395),v=n(3201),u=n(2595),h=n(7813),m=n(5043),x=n(1094),p=n(7492),f=n(216),g=n(6914),j=n(100),b=n(9488),k=n(5369),S=n(2942),E=n(579);function y(e){const{columnsData:l,fetchData:n,data:y,isLoding:T,setTaskModel:w,className:z}=e,A=(0,o.dU)("secondaryGray.900","white"),P=(0,o.dU)("gray.200","whiteAlpha.100"),C=(0,m.useMemo)((()=>l),[l]),[W,L]=(0,m.useState)(!1),[_,D]=(0,m.useState)(),[O,N]=(0,m.useState)(),H=(0,x.useTable)({columns:C,data:y,initialState:{pageIndex:0}},x.useGlobalFilter,x.useSortBy,x.usePagination),{getTableProps:R,getTableBodyProps:$,headerGroups:G,prepareRow:I,page:M,canPreviousPage:B,canNextPage:V,pageOptions:K,pageCount:q,gotoPage:F,nextPage:J,previousPage:U,setPageSize:X,state:{pageIndex:Q,pageSize:Y}}=H;K.length<O&&N(K.length);return(0,E.jsxs)(f.A,{direction:"column",w:"100%",px:"0px",overflowX:{sm:"scroll",lg:"hidden"},children:[(0,E.jsx)(S.A,{fetchData:n,isOpen:W,onClose:L,info:_}),(0,E.jsxs)(i.s,{px:"25px",justify:"space-between",mb:"20px",align:"center",children:[(0,E.jsxs)(t.E,{color:"secondaryGray.900",fontSize:"22px",fontWeight:"700",lineHeight:"100%",children:["Tasks (",(0,E.jsx)(g.A,{targetNumber:null===y||void 0===y?void 0:y.length}),")"]}),w&&(0,E.jsx)(d.$,{onClick:()=>w(!0),leftIcon:(0,E.jsx)(p.R,{}),colorScheme:"gray",children:"Create Task"})]}),(0,E.jsx)(a.a,{overflowY:"auto",className:z,children:(0,E.jsxs)(s.X,{...R(),variant:"simple",color:"gray.500",mb:"24px",children:[(0,E.jsx)(r.d,{children:null===G||void 0===G?void 0:G.map(((e,l)=>{var n;return(0,m.createElement)(c.Tr,{...e.getHeaderGroupProps(),key:l},null===(n=e.headers)||void 0===n?void 0:n.map(((e,l)=>(0,m.createElement)(v.Th,{...e.getHeaderProps(!1!==e.isSortable&&e.getSortByToggleProps()),pe:"10px",key:l,borderColor:P},(0,E.jsxs)(i.s,{justify:"space-between",align:"center",fontSize:{sm:"10px",lg:"12px"},color:"gray.400",children:[e.render("Header"),!1!==e.isSortable&&(0,E.jsx)("span",{children:e.isSorted?e.isSortedDesc?(0,E.jsx)(k.GOR,{}):(0,E.jsx)(k.XhJ,{}):(0,E.jsx)(k.MjW,{})})]})))))}))}),(0,E.jsx)(u.N,{...$(),children:T?(0,E.jsx)(c.Tr,{children:(0,E.jsx)(h.Td,{colSpan:null===C||void 0===C?void 0:C.length,children:(0,E.jsx)(i.s,{justifyContent:"center",alignItems:"center",width:"100%",color:A,fontSize:"sm",fontWeight:"700",children:(0,E.jsx)(b.A,{})})})}):0===(null===y||void 0===y?void 0:y.length)?(0,E.jsx)(c.Tr,{children:(0,E.jsx)(h.Td,{colSpan:C.length,children:(0,E.jsx)(t.E,{textAlign:"center",width:"100%",color:A,fontSize:"sm",fontWeight:"700",children:"-- No Data Found --"})})}):null===M||void 0===M?void 0:M.map(((e,l)=>{var n;return I(e),(0,m.createElement)(c.Tr,{...null===e||void 0===e?void 0:e.getRowProps(),key:l},null===e||void 0===e||null===(n=e.cells)||void 0===n?void 0:n.map(((e,l)=>{let n="";var o;if("#"===(null===e||void 0===e?void 0:e.column.Header))n=(0,E.jsx)(i.s,{align:"center",children:(0,E.jsx)(t.E,{color:A,fontSize:"sm",fontWeight:"700",children:(null===e||void 0===e||null===(o=e.row)||void 0===o?void 0:o.index)+1})});else if("Title"===(null===e||void 0===e?void 0:e.column.Header))n=(0,E.jsx)(t.E,{onClick:()=>(e=>{var l,n;D(null===e||void 0===e||null===(l=e.row)||void 0===l||null===(n=l.values)||void 0===n?void 0:n._id),L(!0)})(e),me:"10px",sx:{"&:hover":{color:"blue.500",textDecoration:"underline"},cursor:"pointer"},color:"green.400",fontSize:"sm",fontWeight:"700",children:null===e||void 0===e?void 0:e.value});else if("Related"===(null===e||void 0===e?void 0:e.column.Header))n=(0,E.jsx)(t.E,{me:"10px",color:A,fontSize:"sm",fontWeight:"700",children:null!==e&&void 0!==e&&e.value?null===e||void 0===e?void 0:e.value:" - "});else if("Assignment To"===(null===e||void 0===e?void 0:e.column.Header))n=(0,E.jsx)(t.E,{me:"10px",color:A,fontSize:"sm",fontWeight:"700",children:null!==e&&void 0!==e&&e.value?null===e||void 0===e?void 0:e.value:" - "});else if("Start Date"===(null===e||void 0===e?void 0:e.column.Header))n=(0,E.jsx)(t.E,{color:A,fontSize:"sm",fontWeight:"700",children:null===e||void 0===e?void 0:e.value});else if("End Date"===(null===e||void 0===e?void 0:e.column.Header)){var d;n=(0,E.jsx)(t.E,{color:A,fontSize:"sm",fontWeight:"700",children:null!==e&&void 0!==e&&e.value?null===e||void 0===e?void 0:e.value:null===e||void 0===e||null===(d=e.row)||void 0===d?void 0:d.values.start})}return(0,m.createElement)(h.Td,{...null===e||void 0===e?void 0:e.getCellProps(),key:l,fontSize:{sm:"14px"},minW:{sm:"150px",md:"200px",lg:"auto"},borderColor:"transparent"},n)})))}))})]})}),(null===y||void 0===y?void 0:y.length)>5&&(0,E.jsx)(j.A,{gotoPage:F,gopageValue:O,setGopageValue:N,pageCount:q,canPreviousPage:B,previousPage:U,canNextPage:V,pageOptions:K,setPageSize:X,nextPage:J,pageSize:Y,pageIndex:Q})]})}},2942:(e,l,n)=>{n.d(l,{A:()=>P});var o=n(7575),i=n(2825),t=n(9973),d=n(8584),a=n(8460),s=n(1054),r=n(5421),c=n(5071),v=n(2703),u=n(5371),h=n(7516),m=n(3533),x=n(5527),p=n(9081),f=n(6529),g=n(9488),j=n(6178),b=n.n(j),k=n(5043),S=n(7805),E=n(5475),y=n(9621),T=n(9644),w=n(591),z=n(3216),A=n(579);const P=e=>{var l,n,j,P,C,W;const{onClose:L,isOpen:_,info:D,fetchData:O}=e,[N,H]=(0,k.useState)(),[R,$]=(0,k.useState)(!1),[G,I]=(0,k.useState)(!1),M=JSON.parse(localStorage.getItem("user")),[B,V]=(0,k.useState)(!1),K=(0,z.Zp)();(0,k.useEffect)((()=>{(async()=>{if(D){var e,l,n;V(!0);let o=await(0,y.x4)("api/task/view/",null!==D&&void 0!==D&&D.event?null===D||void 0===D||null===(e=D.event)||void 0===e||null===(l=e._def)||void 0===l||null===(n=l.extendedProps)||void 0===n?void 0:n._id:D);H(null===o||void 0===o?void 0:o.data),V(!1)}})()}),[D]);return(0,A.jsxs)(a.aF,{isOpen:_,size:"md",isCentered:!0,children:[(0,A.jsx)(s.m,{}),(0,A.jsxs)(r.$,{children:[(0,A.jsxs)(c.r,{justifyContent:"space-between",display:"flex",children:["Task",(0,A.jsx)(v.K,{onClick:()=>L(!1),icon:(0,A.jsx)(o.U,{})})]}),B?(0,A.jsx)(u.s,{justifyContent:"center",alignItems:"center",mb:30,width:"100%",children:(0,A.jsx)(g.A,{})}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(h.c,{children:(0,A.jsxs)(m.x,{templateColumns:"repeat(12, 1fr)",gap:3,children:[(0,A.jsxs)(x.E,{colSpan:{base:12,md:6},children:[(0,A.jsx)(p.E,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Task Title "}),(0,A.jsx)(p.E,{children:null!==N&&void 0!==N&&N.title?null===N||void 0===N?void 0:N.title:" - "})]}),(0,A.jsxs)(x.E,{colSpan:{base:12,md:6},children:[(0,A.jsx)(p.E,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Task Related To "}),(0,A.jsx)(p.E,{children:null!==N&&void 0!==N&&N.category?null===N||void 0===N?void 0:N.category:" - "})]}),(0,A.jsxs)(x.E,{colSpan:{base:12,md:6},children:[(0,A.jsx)(p.E,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Task start "}),(0,A.jsx)(p.E,{children:null!==N&&void 0!==N&&N.start?b()(null===N||void 0===N?void 0:N.start).format("L LT"):" - "})]}),(0,A.jsxs)(x.E,{colSpan:{base:12,md:6},children:[(0,A.jsx)(p.E,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Task end  "}),(0,A.jsx)(p.E,{children:null!==N&&void 0!==N&&N.end?b()(null===N||void 0===N?void 0:N.end).format("L LT"):b()(null===N||void 0===N?void 0:N.start).format("L")})]}),(0,A.jsxs)(x.E,{colSpan:{base:12,md:6},children:[(0,A.jsx)(p.E,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Task Link "}),null!==N&&void 0!==N&&N.url?(0,A.jsx)("a",{target:"_blank",href:null===N||void 0===N?void 0:N.url,children:(0,A.jsx)(v.K,{borderRadius:"10px",size:"md",icon:(0,A.jsx)(S.o9J,{})})}):"-"]}),(0,A.jsxs)(x.E,{colSpan:{base:12,md:6},children:[(0,A.jsx)(p.E,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Task reminder "}),(0,A.jsx)(p.E,{children:null!==N&&void 0!==N&&N.reminder?null===N||void 0===N?void 0:N.reminder:" - "})]}),(0,A.jsxs)(x.E,{colSpan:{base:12,md:6},children:[(0,A.jsx)(p.E,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" assignment To  "}),(0,A.jsx)(E.N_,{to:null!==N&&void 0!==N&&N.assignmentTo?"admin"!==(null===M||void 0===M?void 0:M.role)?`/contactView/${null===N||void 0===N?void 0:N.assignmentTo}`:`/admin/contactView/${null===N||void 0===N?void 0:N.assignmentTo}`:"admin"!==(null===M||void 0===M?void 0:M.role)?`/leadView/${null===N||void 0===N?void 0:N.assignmentToLead}`:`/admin/leadView/${null===N||void 0===N?void 0:N.assignmentToLead}`,children:(0,A.jsx)(p.E,{color:"green.400",sx:{"&:hover":{color:"blue.500",textDecoration:"underline"}},children:null!==N&&void 0!==N&&N.assignmentToName?null===N||void 0===N?void 0:N.assignmentToName:" - "})})]}),(0,A.jsxs)(x.E,{colSpan:{base:12,md:6},children:[(0,A.jsx)(p.E,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Task createBy "}),(0,A.jsx)(p.E,{children:null!==N&&void 0!==N&&N.createByName?null===N||void 0===N?void 0:N.createByName:" - "})]}),(0,A.jsxs)(x.E,{colSpan:{base:12},children:[(0,A.jsx)(p.E,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Task Description"}),(0,A.jsx)(p.E,{children:null!==N&&void 0!==N&&N.description?null===N||void 0===N?void 0:N.description:" - "})]}),(0,A.jsxs)(x.E,{colSpan:{base:12},children:[(0,A.jsx)(p.E,{fontSize:"sm",fontWeight:"bold",color:"blackAlpha.900",children:" Task notes "}),(0,A.jsx)(p.E,{children:null!==N&&void 0!==N&&N.notes?null===N||void 0===N?void 0:N.notes:" - "})]})]})}),(0,A.jsxs)(f.j,{children:[(0,A.jsx)(v.K,{variant:"outline",onClick:()=>(()=>{var e,l,n,o,i,t;null!==D&&void 0!==D&&D.event?K("admin"!==(null===M||void 0===M?void 0:M.role)?`/view/${null===D||void 0===D||null===(e=D.event)||void 0===e||null===(l=e._def)||void 0===l||null===(n=l.extendedProps)||void 0===n?void 0:n._id}`:`/admin/view/${null===D||void 0===D||null===(o=D.event)||void 0===o||null===(i=o._def)||void 0===i||null===(t=i.extendedProps)||void 0===t?void 0:t._id}`):K("admin"!==(null===M||void 0===M?void 0:M.role)?`/view/${D}`:`/admin/view/${D}`)})(),borderRadius:"10px",size:"md",icon:(0,A.jsx)(i.t,{})}),(0,A.jsx)(v.K,{variant:"outline",onClick:()=>$(!0),ml:3,borderRadius:"10px",size:"md",icon:(0,A.jsx)(t.q,{})}),(0,A.jsx)(v.K,{colorScheme:"red",onClick:()=>I(!0),ml:3,borderRadius:"10px",size:"md",icon:(0,A.jsx)(d.d,{})}),(0,A.jsx)(w.A,{fetchData:O,isOpen:R,onClose:$,viewClose:L,id:null!==D&&void 0!==D&&D.event?null===D||void 0===D||null===(l=D.event)||void 0===l||null===(n=l._def)||void 0===n||null===(j=n.extendedProps)||void 0===j?void 0:j._id:D}),(0,A.jsx)(T.A,{fetchData:e.fetchData,isOpen:G,onClose:I,viewClose:L,url:"api/task/delete/",method:"one",id:null!==D&&void 0!==D&&D.event?null===D||void 0===D||null===(P=D.event)||void 0===P||null===(C=P._def)||void 0===C||null===(W=C.extendedProps)||void 0===W?void 0:W._id:D})]})]})]})]})}},9973:(e,l,n)=>{n.d(l,{q:()=>i});var o=n(579);const i=(0,n(4010).w)({displayName:"EditIcon",path:(0,o.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,o.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,o.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})})},8876:(e,l,n)=>{n.d(l,{A:()=>r});var o=n(3108),i=n(2470);var t=n(5043),d=n(2923);var a=n(7841);function s(e){const l=(0,o.Gv)(e)?e:{fallback:e??"base"},n=(0,a.D)().__breakpoints.details.map((e=>{let{minMaxQuery:l,breakpoint:n}=e;return{breakpoint:n,query:l.replace("@media screen and ","")}})),i=n.map((e=>e.breakpoint===l.fallback)),s=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ssr:n=!0,fallback:o}=l,{getWindow:i}=(0,d.O)(),a=Array.isArray(e)?e:[e];let s=Array.isArray(o)?o:[o];s=s.filter((e=>null!=e));const[r,c]=(0,t.useState)((()=>a.map(((e,l)=>({media:e,matches:n?!!s[l]:i().matchMedia(e).matches})))));return(0,t.useEffect)((()=>{const e=i();c(a.map((l=>({media:l,matches:e.matchMedia(l).matches}))));const l=a.map((l=>e.matchMedia(l))),n=e=>{c((l=>l.slice().map((l=>l.media===e.media?{...l,matches:e.matches}:l))))};return l.forEach((e=>{"function"===typeof e.addListener?e.addListener(n):e.addEventListener("change",n)})),()=>{l.forEach((e=>{"function"===typeof e.removeListener?e.removeListener(n):e.removeEventListener("change",n)}))}}),[i]),r.map((e=>e.matches))}(n.map((e=>e.query)),{fallback:i,ssr:l.ssr}),r=s.findIndex((e=>1==e));return n[r]?.breakpoint??l.fallback}function r(e,l){const n=s((0,o.Gv)(l)?l:{fallback:l??"base"}),t=(0,a.D)();if(!n)return;const d=Array.from(t.__breakpoints?.keys||[]);return function(e,l){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.fi,o=Object.keys(e).indexOf(l);if(-1!==o)return e[l];let t=n.indexOf(l);for(;t>=0;){const l=n[t];if(e.hasOwnProperty(l)){o=t;break}t-=1}if(-1!==o)return e[n[o]]}(Array.isArray(e)?Object.fromEntries(Object.entries((0,i.a1)(e,d)).map((e=>{let[l,n]=e;return[l,n]}))):e,n,d)}}}]);
//# sourceMappingURL=3395.971451bf.chunk.js.map