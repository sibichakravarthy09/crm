"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[5821],{8688:(e,o,r)=>{r.r(o),r.d(o,{default:()=>R});var a=r(7492),l=r(6870),t=r(3533),n=r(5527),i=r(9301),s=r(5043),d=r(8700),c=r(4093),u=r(5371),p=r(9081),g=r(2107),m=r(511),v=r(3313),h=r(5395),x=r(3201),f=r(2595),j=r(7813),S=r(9918),y=r(1094),w=r(8584),b=r(216),C=r(6914),P=r(100),A=r(9488),H=r(5369),z=r(5475),E=r(9621),T=r(2132),N=r(579);function B(e){const{columnsData:o}=e,r=(0,c.dU)("secondaryGray.900","white"),a=(0,c.dU)("gray.200","whiteAlpha.100"),l=(0,s.useMemo)((()=>o),[o]),[t,n]=(0,s.useState)([]),[i,d]=(0,s.useState)(!1),[B,R]=(0,s.useState)(!1),[k,G]=(0,s.useState)([]),D=JSON.parse(localStorage.getItem("user")),[O,W]=(0,s.useState)(),_=(0,y.useTable)({columns:l,data:k,initialState:{pageIndex:0}},y.useGlobalFilter,y.useSortBy,y.usePagination),{getTableProps:I,getTableBodyProps:F,headerGroups:V,prepareRow:M,page:$,canPreviousPage:q,canNextPage:X,pageOptions:J,pageCount:U,gotoPage:L,nextPage:Y,previousPage:K,setPageSize:Q,state:{pageIndex:Z,pageSize:ee}}=_;J.length<O&&W(J.length);return(0,s.useEffect)((()=>{(async()=>{d(!0);let e=await(0,E.x4)("admin"===D.role?"api/property/":`api/property/?createBy=${D._id}`);G(e.data),d(!1)})()}),[B,e.isOpen]),(0,N.jsxs)(b.A,{direction:"column",w:"100%",px:"0px",overflowX:{sm:"scroll",lg:"hidden"},children:[(0,N.jsxs)(u.s,{px:"25px",justify:"space-between",mb:"15px",align:"center",children:[(0,N.jsxs)(p.E,{color:r,fontSize:"22px",fontWeight:"700",lineHeight:"100%",children:["Properties (",(0,N.jsx)(C.A,{targetNumber:null===k||void 0===k?void 0:k.length}),")"]}),t.length>0&&(0,N.jsx)(w.d,{onClick:()=>R(!0),color:"red"})]}),(0,N.jsx)(T.A,{isOpen:B,onClose:R,setSelectedValues:n,url:"api/property/deleteMany",data:t,method:"many"}),(0,N.jsx)(g.a,{overflowY:"auto",className:"table-fix-container",children:(0,N.jsxs)(m.X,{...I(),variant:"simple",color:"gray.500",mb:"24px",children:[(0,N.jsx)(v.d,{children:null===V||void 0===V?void 0:V.map(((e,o)=>{var r;return(0,s.createElement)(h.Tr,{...e.getHeaderGroupProps(),key:o},null===(r=e.headers)||void 0===r?void 0:r.map(((e,o)=>(0,s.createElement)(x.Th,{...e.getHeaderProps(!1!==e.isSortable&&e.getSortByToggleProps()),pe:"10px",key:o,borderColor:a},(0,N.jsxs)(u.s,{justify:"space-between",align:"center",fontSize:{sm:"10px",lg:"12px"},color:"gray.400",children:[e.render("Header"),!1!==e.isSortable&&(0,N.jsx)("span",{children:e.isSorted?e.isSortedDesc?(0,N.jsx)(H.GOR,{}):(0,N.jsx)(H.XhJ,{}):(0,N.jsx)(H.MjW,{})})]})))))}))}),(0,N.jsx)(f.N,{...F(),children:i?(0,N.jsx)(h.Tr,{children:(0,N.jsx)(j.Td,{colSpan:null===l||void 0===l?void 0:l.length,children:(0,N.jsx)(u.s,{justifyContent:"center",alignItems:"center",width:"100%",color:r,fontSize:"sm",fontWeight:"700",children:(0,N.jsx)(A.A,{})})})}):0===(null===k||void 0===k?void 0:k.length)?(0,N.jsx)(h.Tr,{children:(0,N.jsx)(j.Td,{colSpan:l.length,className:"tableData",children:(0,N.jsx)(p.E,{textAlign:"center",width:"100%",color:r,fontSize:"sm",fontWeight:"700",children:"-- No Data Found --"})})}):null===$||void 0===$?void 0:$.map(((e,o)=>{var a;return M(e),(0,s.createElement)(h.Tr,{...null===e||void 0===e?void 0:e.getRowProps(),key:o},null===e||void 0===e||null===(a=e.cells)||void 0===a?void 0:a.map(((e,o)=>{let a="";var l;if("#"===(null===e||void 0===e?void 0:e.column.Header))a=(0,N.jsxs)(u.s,{align:"center",children:[(0,N.jsx)(S.S,{colorScheme:"brandScheme",value:t,isChecked:t.includes(null===e||void 0===e?void 0:e.value),onChange:o=>((e,o)=>{e.target.checked?n((e=>[...e,o])):n((e=>e.filter((e=>e!==o))))})(o,null===e||void 0===e?void 0:e.value),me:"10px"}),(0,N.jsx)(p.E,{color:r,fontSize:"sm",fontWeight:"700",children:(null===e||void 0===e||null===(l=e.row)||void 0===l?void 0:l.index)+1})]});else if("property Type"===(null===e||void 0===e?void 0:e.column.Header)){var i,d;a=(0,N.jsx)(z.N_,{to:"admin"!==(null===D||void 0===D?void 0:D.role)?`/propertyView/${null===e||void 0===e||null===(i=e.row)||void 0===i?void 0:i.values._id}`:`/admin/propertyView/${null===e||void 0===e||null===(d=e.row)||void 0===d?void 0:d.values._id}`,children:(0,N.jsx)(p.E,{className:"tableData",me:"10px",sx:{"&:hover":{color:"blue.500",textDecoration:"underline"}},color:"green.400",fontSize:"sm",fontWeight:"700",children:null===e||void 0===e?void 0:e.value})})}else"property Address"===(null===e||void 0===e?void 0:e.column.Header)||"listing Price"===(null===e||void 0===e?void 0:e.column.Header)?a=(0,N.jsx)(p.E,{className:"tableData",me:"10px",color:r,fontSize:"sm",fontWeight:"700",children:null===e||void 0===e?void 0:e.value}):("square Footage"===(null===e||void 0===e?void 0:e.column.Header)||"year Built"===(null===e||void 0===e?void 0:e.column.Header)||"number of Bedrooms"===(null===e||void 0===e?void 0:e.column.Header)||"number of Bathrooms"===(null===e||void 0===e?void 0:e.column.Header))&&(a=(0,N.jsx)(p.E,{color:r,fontSize:"sm",fontWeight:"700",className:"tableData",children:null===e||void 0===e?void 0:e.value}));return(0,s.createElement)(j.Td,{className:"tableData",...null===e||void 0===e?void 0:e.getCellProps(),key:o,fontSize:{sm:"14px"},minW:{sm:"150px",md:"200px",lg:"auto"},borderColor:"transparent"},a)})))}))})]})}),(null===k||void 0===k?void 0:k.length)>5&&(0,N.jsx)(P.A,{gotoPage:L,gopageValue:O,setGopageValue:W,pageCount:U,canPreviousPage:q,previousPage:K,canNextPage:X,pageOptions:J,setPageSize:Q,nextPage:Y,pageSize:ee,pageIndex:Z})]})}const R=()=>{const[e,o]=(0,s.useState)([]),r=[{Header:"#",accessor:"_id",isSortable:!1,width:10},{Header:"property Type",accessor:"propertyType"},{Header:"property Address",accessor:"propertyAddress"},{Header:"listing Price",accessor:"listingPrice"},{Header:"square Footage",accessor:"squareFootage"},{Header:"year Built",accessor:"yearBuilt"},{Header:"number of Bedrooms",accessor:"numberofBedrooms"},{Header:"number of Bathrooms",accessor:"numberofBathrooms"}],{isOpen:c,onOpen:u,onClose:p}=(0,l.j)();(0,s.useEffect)((()=>{o(r)}),[p]);return(0,N.jsxs)("div",{children:[(0,N.jsx)(t.x,{templateColumns:"repeat(6, 1fr)",mb:3,gap:1,children:(0,N.jsx)(n.E,{colStart:6,textAlign:"right",children:(0,N.jsx)(i.$,{onClick:()=>{u()},leftIcon:(0,N.jsx)(a.R,{}),variant:"brand",children:"Add"})})}),(0,N.jsx)(B,{columnsData:e,isOpen:c}),(0,N.jsx)(d.A,{isOpen:c,size:"lg",onClose:p})]})}},8584:(e,o,r)=>{r.d(o,{d:()=>l});var a=r(579);const l=(0,r(4010).w)({displayName:"DeleteIcon",path:(0,a.jsx)("g",{fill:"currentColor",children:(0,a.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})})},5527:(e,o,r)=>{r.d(o,{E:()=>d});var a=r(579),l=r(2470),t=r(3019),n=r(5003),i=r(5334);function s(e){return(0,l.bk)(e,(e=>"auto"===e?"auto":`span ${e}/span ${e}`))}const d=(0,n.R)((function(e,o){const{area:r,colSpan:l,colStart:n,colEnd:d,rowEnd:c,rowSpan:u,rowStart:p,...g}=e,m=(0,t.o)({gridArea:r,gridColumn:s(l),gridRow:s(u),gridColumnStart:n,gridColumnEnd:d,gridRowStart:p,gridRowEnd:c});return(0,a.jsx)(i.B.div,{ref:o,__css:m,...g})}));d.displayName="GridItem"},3533:(e,o,r)=>{r.d(o,{x:()=>n});var a=r(579),l=r(5003),t=r(5334);const n=(0,l.R)((function(e,o){const{templateAreas:r,gap:l,rowGap:n,columnGap:i,column:s,row:d,autoFlow:c,autoRows:u,templateRows:p,autoColumns:g,templateColumns:m,...v}=e,h={display:"grid",gridTemplateAreas:r,gridGap:l,gridRowGap:n,gridColumnGap:i,gridAutoColumns:g,gridColumn:s,gridRow:d,gridAutoFlow:c,gridAutoRows:u,gridTemplateRows:p,gridTemplateColumns:m};return(0,a.jsx)(t.B.div,{ref:o,__css:h,...v})}));n.displayName="Grid"}}]);
//# sourceMappingURL=5821.37a3540f.chunk.js.map