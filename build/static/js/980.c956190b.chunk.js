"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[980],{6654:(e,a,t)=>{t.d(a,{A:()=>B});var l=t(7492),s=t(8460),n=t(1054),o=t(5421),d=t(5071),i=t(5929),r=t(7516),c=t(3533),u=t(5527),x=t(6668),m=t(9081),h=t(5699),p=t(6686),g=t(9904),j=t(4812),v=t(5371),f=t(2703),S=t(9077),b=t(6529),C=t(9301),y=t(8587),N=t(5043),w=t(1046),A=t(9621),E=t(9488),H=t(8860),T=t(579);const z=e=>{const{onClose:a,isOpen:t,fieldName:l,setFieldValue:c}=e,[u,x]=(0,N.useState)([]),[m,h]=(0,N.useState)(!1),[p,g]=(0,N.useState)([]),j=JSON.parse(localStorage.getItem("user")),f=[...new Set(u)];return(0,N.useEffect)((()=>{(async()=>{h(!0);let e=await(0,A.x4)("admin"===j.role?"api/contact/":`api/contact/?createBy=${j._id}`);e&&200==e.status&&g(null===e||void 0===e?void 0:e.data),h(!1)})()}),[]),(0,T.jsxs)(s.aF,{onClose:a,size:"full",isOpen:t,children:[(0,T.jsx)(n.m,{}),(0,T.jsxs)(o.$,{children:[(0,T.jsx)(d.r,{children:"Select Contact"}),(0,T.jsx)(i.s,{}),(0,T.jsx)(r.c,{children:m?(0,T.jsx)(v.s,{justifyContent:"center",alignItems:"center",width:"100%",children:(0,T.jsx)(E.A,{})}):(0,T.jsx)(w.A,{tableData:p,type:"multi",selectedValues:u,setSelectedValues:x,columnsData:[{Header:"#",accessor:"_id",isSortable:!1,width:10},{Header:"title",accessor:"title"},{Header:"first Name",accessor:"firstName"},{Header:"last Name",accessor:"lastName"},{Header:"phone Number",accessor:"phoneNumber"},{Header:"Email Address",accessor:"email"},{Header:"physical Address",accessor:"physicalAddress"},{Header:"mailing Address",accessor:"mailingAddress"},{Header:"Contact Method",accessor:"preferredContactMethod"}],title:"Contact"})}),(0,T.jsxs)(b.j,{children:[(0,T.jsxs)(C.$,{variant:"brand",onClick:async()=>{try{h(!0),c(l,f),a()}catch(e){console.log(e)}finally{h(!1)}},disabled:!!m,leftIcon:(0,T.jsx)(H.NLY,{}),children:[" ",m?(0,T.jsx)(E.A,{}):"Select"]}),(0,T.jsx)(C.$,{onClick:()=>a(),children:"Close"})]})]})]})};var P=t(7214);const L=e=>{const{onClose:a,isOpen:t,fieldName:l,setFieldValue:c}=e,[u,x]=(0,N.useState)([]),[m,h]=(0,N.useState)(!1),[p,g]=(0,N.useState)([]),j=JSON.parse(localStorage.getItem("user")),f=[...new Set(u)];return(0,N.useEffect)((()=>{(async()=>{h(!0);let e=await(0,A.x4)("admin"===j.role?"api/lead/":`api/lead/?createBy=${j._id}`);e&&200==e.status&&g(null===e||void 0===e?void 0:e.data),h(!1)})()}),[]),(0,T.jsxs)(s.aF,{onClose:a,size:"full",isOpen:t,children:[(0,T.jsx)(n.m,{}),(0,T.jsxs)(o.$,{children:[(0,T.jsx)(d.r,{children:"Select Lead"}),(0,T.jsx)(i.s,{}),(0,T.jsx)(r.c,{children:m?(0,T.jsx)(v.s,{justifyContent:"center",alignItems:"center",width:"100%",children:(0,T.jsx)(E.A,{})}):(0,T.jsx)(P.A,{tableData:p,type:"multi",selectedValues:u,setSelectedValues:x,columnsData:[{Header:"#",accessor:"_id",isSortable:!1,width:10},{Header:"Lead Name",accessor:"leadName",width:20},{Header:"Lead Email",accessor:"leadEmail"},{Header:"Lead PhoneNumber",accessor:"leadPhoneNumber"},{Header:"Lead Address",accessor:"leadAddress"},{Header:"Lead Status",accessor:"leadStatus"},{Header:"Lead Owner",accessor:"leadOwner"},{Header:"Lead Score",accessor:"leadScore"}],title:"Lead"})}),(0,T.jsxs)(b.j,{children:[(0,T.jsxs)(C.$,{variant:"brand",onClick:async()=>{try{h(!0),c(l,f),a()}catch(e){console.log(e)}finally{h(!1)}},disabled:!!m,leftIcon:(0,T.jsx)(H.NLY,{}),children:[" ",m?(0,T.jsx)(E.A,{}):"Select"]}),(0,T.jsx)(C.$,{onClick:()=>a(),children:"Close"})]})]})]})};var I=t(3516),$=t(3388),O=t(2145),W=t(6092);const B=e=>{const{onClose:a,isOpen:t,fetchData:w,from:H}=e,[P,B]=(0,N.useState)([]),[k,_]=(0,N.useState)(!1),[D,F]=(0,N.useState)(!1),[M,V]=(0,N.useState)(!1),G=JSON.parse(localStorage.getItem("user")),R={agenda:"",attendes:[],attendesLead:[],location:"",related:H||"",dateTime:"",notes:"",createdBy:null===G||void 0===G?void 0:G._id},Y=(0,I.Wx)({initialValues:R,validationSchema:W.pq,onSubmit:(e,a)=>{let{resetForm:t}=a;ee()}}),{errors:J,touched:U,values:X,handleBlur:q,handleChange:K,handleSubmit:Q,setFieldValue:Z}=Y,ee=async()=>{try{if(_(!0),X.attendes.length>0||X.attendesLead.length>0){200===(await(0,A.d_)("api/meeting/add",X)).status&&(Y.resetForm(),e.onClose(),w())}else O.oR.error("Select Related To")}catch(a){console.log(a)}finally{_(!1)}};(0,N.useEffect)((()=>{(async()=>{var e;let a;"contact"===X.related?a=await(0,A.x4)("admin"===G.role?"api/contact/":`api/contact/?createBy=${G._id}`):"lead"===X.related&&(a=await(0,A.x4)("admin"===G.role?"api/lead/":`api/lead/?createBy=${G._id}`)),B(null===(e=a)||void 0===e?void 0:e.data)})()}),[e.id,X.related]);const ae=null===P||void 0===P?void 0:P.map((e=>({...e,value:e._id,label:"contact"===X.related?`${e.firstName} ${e.lastName}`:e.leadName})));return(0,T.jsxs)(s.aF,{onClose:a,isOpen:t,children:[(0,T.jsx)(n.m,{}),(0,T.jsxs)(o.$,{children:[(0,T.jsx)(d.r,{children:"Add Meeting "}),(0,T.jsx)(i.s,{}),(0,T.jsxs)(r.c,{children:[(0,T.jsx)(z,{isOpen:D,onClose:F,fieldName:"attendes",setFieldValue:Z}),(0,T.jsx)(L,{isOpen:M,onClose:V,fieldName:"attendesLead",setFieldValue:Z}),(0,T.jsxs)(c.x,{templateColumns:"repeat(12, 1fr)",gap:3,children:[(0,T.jsxs)(u.E,{colSpan:{base:12},children:[(0,T.jsxs)(x.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Agenda",(0,T.jsx)(m.E,{color:"red",children:"*"})]}),(0,T.jsx)(h.p,{fontSize:"sm",onChange:K,onBlur:q,value:X.agenda,name:"agenda",placeholder:"Agenda",fontWeight:"500",borderColor:J.agenda&&U.agenda?"red.300":null}),(0,T.jsxs)(m.E,{mb:"10px",color:"red",children:[" ",J.agenda&&U.agenda&&J.agenda]})]}),(0,T.jsxs)(u.E,{colSpan:{base:12},children:[(0,T.jsx)(x.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"related To"}),(0,T.jsx)(p.z,{onChange:e=>Z("related",e),value:X.related,children:(0,T.jsxs)(g.B,{direction:"row",children:[(0,T.jsx)(j.s,{value:"contact",children:"Contact"}),(0,T.jsx)(j.s,{value:"lead",children:"Lead"})]})}),(0,T.jsxs)(m.E,{mb:"10px",color:"red",children:[" ",J.related&&U.related&&J.related]})]}),(null===P||void 0===P?void 0:P.length)>0&&X.related&&(0,T.jsxs)(u.E,{colSpan:{base:12},children:[(0,T.jsxs)(v.s,{alignItems:"end",justifyContent:"space-between",children:[(0,T.jsx)(m.E,{w:"100%",children:(0,T.jsx)(y.CUIAutoComplete,{label:`Choose Preferred Attendes ${"contact"===X.related?"Contact":"lead"===X.related&&"Lead"}`,placeholder:"Type a Name",name:"attendes",items:ae,selectedItems:null===ae||void 0===ae?void 0:ae.filter((e=>"contact"===X.related?null===X||void 0===X?void 0:X.attendes.includes(e._id):"lead"===X.related&&(null===X||void 0===X?void 0:X.attendesLead.includes(e._id)))),onSelectedItemsChange:e=>{const a=e.selectedItems.map((e=>e._id));"contact"===X.related?Z("attendes",a):"lead"===X.related&&Z("attendesLead",a)}})}),(0,T.jsx)(f.K,{mb:6,onClick:()=>"contact"===X.related?F(!0):"lead"===X.related&&V(!0),fontSize:"25px",icon:(0,T.jsx)($.G2h,{})})]}),(0,T.jsxs)(m.E,{color:"red",children:[" ",J.attendes&&U.attendes&&J.attendes]})]}),(0,T.jsxs)(u.E,{colSpan:{base:12},children:[(0,T.jsx)(x.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Location"}),(0,T.jsx)(h.p,{fontSize:"sm",onChange:K,onBlur:q,value:X.location,name:"location",placeholder:"Location",fontWeight:"500",borderColor:J.location&&U.location?"red.300":null}),(0,T.jsxs)(m.E,{mb:"10px",color:"red",children:[" ",J.location&&U.location&&J.location]})]}),(0,T.jsxs)(u.E,{colSpan:{base:12},children:[(0,T.jsx)(x.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Date Time"}),(0,T.jsx)(h.p,{fontSize:"sm",type:"datetime-local",onChange:K,onBlur:q,value:X.dateTime,name:"dateTime",placeholder:"Date Time",fontWeight:"500",borderColor:J.dateTime&&U.dateTime?"red.300":null}),(0,T.jsxs)(m.E,{mb:"10px",color:"red",children:[" ",J.dateTime&&U.dateTime&&J.dateTime]})]}),(0,T.jsxs)(u.E,{colSpan:{base:12},children:[(0,T.jsx)(x.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Notes"}),(0,T.jsx)(S.T,{resize:"none",fontSize:"sm",placeholder:"Notes",onChange:K,onBlur:q,value:X.notes,name:"notes",fontWeight:"500",borderColor:J.notes&&U.notes?"red.300":null}),(0,T.jsxs)(m.E,{mb:"10px",color:"red",children:[" ",J.notes&&U.notes&&J.notes]})]})]})]}),(0,T.jsxs)(b.j,{children:[(0,T.jsx)(C.$,{variant:"brand",leftIcon:(0,T.jsx)(l.R,{}),disabled:!!k,onClick:Q,children:k?(0,T.jsx)(E.A,{}):"Add"}),(0,T.jsx)(C.$,{onClick:()=>{Y.resetForm(),a()},children:"Close"})]})]})]})}},618:(e,a,t)=>{t.d(a,{A:()=>A});var l=t(4093),s=t(5371),n=t(9081),o=t(9301),d=t(2107),i=t(511),r=t(3313),c=t(5395),u=t(3201),x=t(2595),m=t(7813),h=t(5043),p=t(1094),g=t(216),j=t(6914),v=t(100),f=t(9488),S=t(6178),b=t.n(S),C=t(5369),y=t(3784),N=t(5475),w=t(579);function A(e){const{columnsData:a,data:t,isLoding:S,setMeeting:A,className:E}=e,H=(0,l.dU)("secondaryGray.900","white"),T=(0,l.dU)("gray.200","whiteAlpha.100"),z=(0,h.useMemo)((()=>a),[a]),P=JSON.parse(localStorage.getItem("user")),[L,I]=(0,h.useState)(),$=(0,p.useTable)({columns:z,data:t,initialState:{pageIndex:0}},p.useGlobalFilter,p.useSortBy,p.usePagination),{getTableProps:O,getTableBodyProps:W,headerGroups:B,prepareRow:k,page:_,canPreviousPage:D,canNextPage:F,pageOptions:M,pageCount:V,gotoPage:G,nextPage:R,previousPage:Y,setPageSize:J,state:{pageIndex:U,pageSize:X}}=$;return M.length<L&&I(M.length),(0,w.jsxs)(g.A,{direction:"column",w:"100%",px:"0px",overflowX:{sm:"scroll",lg:"hidden"},children:[(0,w.jsxs)(s.s,{px:"25px",justify:"space-between",mb:"20px",align:"center",children:[(0,w.jsxs)(n.E,{color:H,fontSize:"22px",fontWeight:"700",lineHeight:"100%",children:["Meetings (",(0,w.jsx)(j.A,{targetNumber:null===t||void 0===t?void 0:t.length}),")"]}),A&&(0,w.jsx)(o.$,{onClick:()=>A(!0),leftIcon:(0,w.jsx)(y.xwM,{}),colorScheme:"gray",children:"Add Meeting "})]}),(0,w.jsx)(d.a,{overflowY:"auto",className:E,children:(0,w.jsxs)(i.X,{...O(),variant:"simple",color:"gray.500",mb:"24px",children:[(0,w.jsx)(r.d,{children:null===B||void 0===B?void 0:B.map(((e,a)=>{var t;return(0,h.createElement)(c.Tr,{...e.getHeaderGroupProps(),key:a},null===(t=e.headers)||void 0===t?void 0:t.map(((e,a)=>(0,h.createElement)(u.Th,{...e.getHeaderProps(!1!==e.isSortable&&e.getSortByToggleProps()),pe:"10px",key:a,borderColor:T},(0,w.jsxs)(s.s,{justify:"space-between",align:"center",fontSize:{sm:"10px",lg:"12px"},color:"gray.400",children:[e.render("Header"),!1!==e.isSortable&&(0,w.jsx)("span",{children:e.isSorted?e.isSortedDesc?(0,w.jsx)(C.GOR,{}):(0,w.jsx)(C.XhJ,{}):(0,w.jsx)(C.MjW,{})})]})))))}))}),(0,w.jsx)(x.N,{...W(),children:S?(0,w.jsx)(c.Tr,{children:(0,w.jsx)(m.Td,{colSpan:null===z||void 0===z?void 0:z.length,children:(0,w.jsx)(s.s,{justifyContent:"center",alignItems:"center",width:"100%",color:H,fontSize:"sm",fontWeight:"700",children:(0,w.jsx)(f.A,{})})})}):0===(null===t||void 0===t?void 0:t.length)?(0,w.jsx)(c.Tr,{children:(0,w.jsx)(m.Td,{colSpan:z.length,children:(0,w.jsx)(n.E,{textAlign:"center",width:"100%",color:H,fontSize:"sm",fontWeight:"700",children:"-- No Data Found --"})})}):(null===t||void 0===t?void 0:t.length)>0&&(null===_||void 0===_?void 0:_.map(((e,a)=>{var t;return k(e),(0,h.createElement)(c.Tr,{...null===e||void 0===e?void 0:e.getRowProps(),key:a},null===e||void 0===e||null===(t=e.cells)||void 0===t?void 0:t.map(((e,a)=>{let t="";var l;if("#"===(null===e||void 0===e?void 0:e.column.Header))t=(0,w.jsx)(s.s,{align:"center",children:(0,w.jsx)(n.E,{color:H,fontSize:"sm",fontWeight:"700",children:(null===e||void 0===e||null===(l=e.row)||void 0===l?void 0:l.index)+1})});else if("agenda"===(null===e||void 0===e?void 0:e.column.Header)){var o,d;t=(0,w.jsx)(N.N_,{to:"admin"!==(null===P||void 0===P?void 0:P.role)?`/metting/${null===e||void 0===e||null===(o=e.row)||void 0===o?void 0:o.values._id}`:`/admin/metting/${null===e||void 0===e||null===(d=e.row)||void 0===d?void 0:d.values._id}`,children:(0,w.jsx)(n.E,{me:"10px",sx:{"&:hover":{color:"blue.500",textDecoration:"underline"}},color:"green.400",fontSize:"sm",fontWeight:"700",children:null!==e&&void 0!==e&&e.value?null===e||void 0===e?void 0:e.value:" - "})})}else"date Time"===(null===e||void 0===e?void 0:e.column.Header)?t=(0,w.jsx)(n.E,{me:"10px",color:H,fontSize:"sm",fontWeight:"700",children:b()(null===e||void 0===e?void 0:e.value).format("D/MM/YYYY LT")}):"create By"===(null===e||void 0===e?void 0:e.column.Header)?t=(0,w.jsx)(n.E,{me:"10px",color:H,fontSize:"sm",fontWeight:"700",children:null!==e&&void 0!==e&&e.value?null===e||void 0===e?void 0:e.value:" - "}):"times tamp"===(null===e||void 0===e?void 0:e.column.Header)&&(t=(0,w.jsx)(n.E,{color:H,fontSize:"sm",fontWeight:"700",children:b()(null===e||void 0===e?void 0:e.value).format("(DD/MM) LT")}));return(0,h.createElement)(m.Td,{...null===e||void 0===e?void 0:e.getCellProps(),key:a,fontSize:{sm:"14px"},minW:{sm:"150px",md:"200px",lg:"auto"},borderColor:"transparent"},t)})))})))})]})}),(null===t||void 0===t?void 0:t.length)>5&&(0,w.jsx)(v.A,{gotoPage:G,gopageValue:L,setGopageValue:I,pageCount:V,canPreviousPage:D,previousPage:Y,canNextPage:F,pageOptions:M,setPageSize:J,nextPage:R,pageSize:X,pageIndex:U})]})}},2775:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var l=t(7492),s=t(3533),n=t(5527),o=t(9301),d=t(5043),i=t(9621),r=t(6654),c=t(618),u=t(579);const x=()=>{const[e,a]=(0,d.useState)([]),t=JSON.parse(localStorage.getItem("user")),[x,m]=(0,d.useState)(!1),[h,p]=(0,d.useState)(!1);return(0,d.useEffect)((()=>{(async()=>{m(!0);let e=await(0,i.x4)("admin"===t.role?"api/meeting":`api/meeting?createdBy=${t._id}`);a(null===e||void 0===e?void 0:e.data),m(!1)})()}),[h]),(0,u.jsxs)("div",{children:[(0,u.jsx)(s.x,{templateColumns:"repeat(6, 1fr)",mb:3,gap:1,children:(0,u.jsx)(n.E,{colStart:6,textAlign:"right",children:(0,u.jsx)(o.$,{onClick:()=>p(!0),leftIcon:(0,u.jsx)(l.R,{}),variant:"brand",children:"Add"})})}),(0,u.jsx)(c.A,{isOpen:h,isLoding:x,data:e,columnsData:[{Header:"#",accessor:"_id",isSortable:!1,width:10},{Header:"agenda",accessor:"agenda"},{Header:"date Time",accessor:"dateTime"},{Header:"time stamp",accessor:"timestamp"},{Header:"create By",accessor:"createdByName"}],className:"table-fix-container"}),(0,u.jsx)(r.A,{isOpen:h,onClose:p})]})}}}]);
//# sourceMappingURL=980.c956190b.chunk.js.map