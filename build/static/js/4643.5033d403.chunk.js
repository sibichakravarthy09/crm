"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[4643],{216:(e,r,i)=>{i.d(r,{A:()=>o});var n=i(5158),t=i(2107),s=i(579);const o=function(e){const{variant:r,children:i,...o}=e,a=(0,n.V)("Card",{variant:r});return(0,s.jsx)(t.a,{__css:a,height:"100%",...o,children:i})}},9488:(e,r,i)=>{i.d(r,{A:()=>t});var n=i(579);const t=()=>(0,n.jsx)("div",{className:"loader"})},6092:(e,r,i)=>{i.d(r,{pq:()=>h,pj:()=>j,yo:()=>t,L8:()=>u,y4:()=>c,aq:()=>a,X5:()=>d,Ar:()=>m,jq:()=>o,qU:()=>p,vJ:()=>l});var n=i(899);const t=n.Ik({firstName:n.Yj().min(2).required("First Name is required"),lastName:n.Yj().min(2).required("Last Name is required"),title:n.Yj().required("Title is required"),email:n.Yj().email().required("Email is required"),phoneNumber:n.ai().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("Phonenumber is Required"),mobileNumber:n.ai().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").notRequired(),physicalAddress:n.Yj().required("Physical address is required"),mailingAddress:n.Yj(),preferredContactMethod:n.Yj().required("Preferred contact method is required"),leadSource:n.Yj(),referralSource:n.Yj(),campaignSource:n.Yj(),leadStatus:n.Yj(),leadRating:n.ai(),leadConversionProbability:n.Yj(),emailHistory:n.Yj(),phoneCallHistory:n.Yj(),meetingHistory:n.Yj(),notesandComments:n.Yj(),tagsOrLabelsForcategorizingcontacts:n.Yj(),birthday:n.p6(),anniversary:n.p6(),keyMilestones:n.Yj(),dob:n.Yj(),gender:n.Yj(),occupation:n.Yj(),interestsOrHobbies:n.Yj(),communicationFrequency:n.Yj(),preferences:n.Yj(),linkedInProfile:n.Yj(),facebookProfile:n.Yj(),twitterHandle:n.Yj(),otherProfiles:n.Yj(),agentOrTeamMember:n.Yj(),internalNotesOrComments:n.Yj(),createBy:n.Yj()}),s=(new Date).getFullYear(),o=n.Ik({propertyType:n.Yj().required("Property Type Is required"),propertyAddress:n.Yj().required("Property Address Is required"),listingPrice:n.Yj().required("Listing Price Is required"),squareFootage:n.Yj().required("Square Footage Is required"),numberofBedrooms:n.ai().required("Number Of Bedrooms Is required"),numberofBathrooms:n.ai().required("Number Of Bathrooms Is required"),yearBuilt:n.ai().min(1e3).max(s).required("Year Built Is required"),propertyDescription:n.Yj().required("Property Description Is required"),lotSize:n.Yj(),parkingAvailability:n.Yj(),appliancesIncluded:n.Yj(),heatingAndCoolingSystems:n.Yj(),flooringType:n.Yj(),exteriorFeatures:n.Yj(),communityAmenities:n.Yj(),propertyPhotos:n.Yj(),virtualToursOrVideos:n.Yj(),floorPlans:n.Yj(),propertyDocuments:n.Yj(),listingStatus:n.Yj(),listingAgentOrTeam:n.Yj(),listingDate:n.Yj(),marketingDescription:n.Yj(),multipleListingService:n.Yj(),previousOwners:n.ai().min(0),purchaseHistory:n.Yj(),propertyTaxes:n.Yj(),homeownersAssociation:n.Yj(),mortgageInformation:n.Yj(),sellers:n.Yj(),buyers:n.Yj(),propertyManagers:n.Yj(),contractorsOrServiceProviders:n.Yj(),internalNotesOrComments:n.Yj()}),a=n.Ik({leadName:n.Yj().required("Lead Name Is required"),leadEmail:n.Yj().email().required("Lead Email Is required"),leadPhoneNumber:n.Yj().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("Lead Phone Number Is required"),leadAddress:n.Yj().required("Lead Address Is required"),leadSource:n.Yj(),leadStatus:n.Yj(),leadSourceDetails:n.Yj(),leadCampaign:n.Yj(),leadSourceChannel:n.Yj(),leadSourceMedium:n.Yj(),leadSourceCampaign:n.Yj(),leadSourceReferral:n.Yj(),leadAssignedAgent:n.Yj(),leadOwner:n.Yj(),leadCommunicationPreferences:n.Yj(),leadCreationDate:n.p6().required("Lead Creation Date Is required"),leadConversionDate:n.p6().required("Lead Conversion Date Is required"),leadFollowUpDate:n.p6().required("lead Follow Up Date  Is required"),leadFollowUpStatus:n.Yj(),leadScore:n.ai().required("Lead Score Is required"),leadNurturingWorkflow:n.Yj(),leadEngagementLevel:n.Yj(),leadConversionRate:n.ai().required("lead Conversion Rate Is required"),leadNurturingStage:n.Yj(),leadNextAction:n.Yj()}),l=n.Ik({firstName:n.Yj().required("First Name Is required"),lastName:n.Yj(),phoneNumber:n.Yj().required("Phone Number Is required").matches(/^\d{10}$/,"Phone Number must be exactly 10 digits"),username:n.Yj().email().required("Email Is required")}),d=n.Ik({username:n.Yj().email().required("Email Is required"),password:n.Yj().required("Password Is required")}),c=n.Ik({sender:n.Yj().required("Sender Is required"),recipient:n.Yj().email().required("Recipient Is required"),cc:n.Yj().email(),bcc:n.Yj().email(),relatedToContact:n.Yj(),relatedToLead:n.Yj(),subject:n.Yj(),message:n.Yj(),createBy:n.Yj(),createByLead:n.Yj()}).test("createBy-or-createByLead-required","Recipient Is required",(function(e){if(!e.createBy&&!e.createByLead)return this.createError({path:"createBy",message:"Recipient Is required"})})),u=n.Ik().shape({folderName:n.Yj().required("Folder Name is required"),filename:n.Yj().min(2,"File Name Must Be At Least 2 Characters"),createBy:n.Yj().required()}),m=n.Ik({sender:n.Yj().required("Sender Is required"),recipient:n.ai().required("Recipient Is required"),callDuration:n.Yj(),callNotes:n.Yj(),createBy:n.Yj(),createByLead:n.Yj(),category:n.Yj()}).test("createBy-or-createByLead-required","Recipient Is required",(function(e){if(!e.createBy&&!e.createByLead)return this.createError({path:"createBy",message:"Recipient Is required"})})),p=n.Ik({sender:n.Yj().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("Sender Is required"),to:n.Yj().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("To Is required"),message:n.Yj(),createFor:n.Yj().required("Create By Is required")}),j=n.Ik({title:n.Yj().required("Title Is required"),category:n.Yj(),description:n.Yj(),notes:n.Yj(),reminder:n.Yj(),start:n.Yj().required("Start Is required"),end:n.Yj(),backgroundColor:n.Yj(),borderColor:n.Yj(),textColor:n.Yj(),display:n.Yj(),url:n.Yj(),createBy:n.Yj()}),h=n.Ik({agenda:n.Yj().required("Agenda Is required"),attendes:n.YO().of(n.Yj().trim()),attendesLead:n.YO().of(n.Yj().trim()),location:n.Yj(),related:n.Yj(),dateTime:n.Yj().required("Date Time Is required"),notes:n.Yj(),createFor:n.Yj(),createdBy:n.Yj()})},4643:(e,r,i)=>{i.r(r),i.d(r,{default:()=>_});var n=i(3109),t=i(1411),s=i(4566),o=i(1794),a=i(227),l=i(216),d=i(5043),c=i(6870),u=i(3533),m=i(5527),p=i(8846),j=i(6668),h=i(9081),x=i(5699),b=i(7781),f=i(9077),g=i(9301),v=i(9488),y=i(3516),Y=i(2127),S=i(2145),q=i(6092),C=i(9621),I=i(579);const N=()=>{const[e,r]=(0,d.useState)([]),i=JSON.parse(localStorage.getItem("user")),{isOpen:n,onOpen:t,onClose:s}=(0,c.j)(),[o,a]=(0,d.useState)(!1),l={sender:null===i||void 0===i?void 0:i._id,recipient:"",cc:"",bcc:"",subject:"",message:"",createBy:""},N=(0,y.Wx)({initialValues:l,validationSchema:q.y4,onSubmit:(e,r)=>{let{resetForm:i}=r;R()}}),{errors:B,touched:w,values:E,handleBlur:_,handleChange:T,handleSubmit:k,setFieldValue:F}=N;w.recipient&&B.createBy&&(S.oR.error("Please select an authorized recipient"),N.resetForm());const R=async()=>{try{a(!0),200===(await(0,C.d_)("api/email/add",E)).status&&(S.oR.success("Email Send successfully"),N.resetForm())}catch(e){console.log(e)}finally{a(!1)}};return(0,d.useEffect)((()=>{(async()=>{let e=await(0,C.x4)("admin"===i.role?"api/contact/":`api/contact/?createBy=${i._id}`);E.createBy=null===e||void 0===e?void 0:e._id,r(e.data)})()}),[]),(0,d.useEffect)((()=>{null===e||void 0===e||e.map((e=>{e.email===E.recipient&&(E.createBy=e._id,F("createBy",e._id))}))}),[E]),(0,I.jsxs)(u.x,{templateColumns:"repeat(12, 1fr)",gap:3,children:[(0,I.jsx)(m.E,{colSpan:{base:12},children:(0,I.jsx)(p.D,{as:"h2",size:"xl",noOfLines:1,children:"Send Email"})}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsxs)(j.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["To",(0,I.jsx)(h.E,{color:"red",children:"*"})]}),(0,I.jsx)(x.p,{onFocus:t,fontSize:"sm",onChange:T,onBlur:()=>setTimeout(s,200),value:E.recipient,name:"recipient",placeholder:"Recipient",fontWeight:"500",borderColor:null!==B&&void 0!==B&&B.recipient&&null!==w&&void 0!==w&&w.recipient?"red.300":null}),n&&(null===E||void 0===E?void 0:E.recipient)&&(0,I.jsx)(b.B8,{position:"relative",border:"1px solid",bg:"gray.100",width:"100%",borderRadius:"0px 0px 20px 20px",lineHeight:1,children:null===e||void 0===e?void 0:e.filter((e=>{var r;return null===e||void 0===e||null===(r=e.email)||void 0===r?void 0:r.includes(null===E||void 0===E?void 0:E.recipient.toLowerCase())})).map(((e,r)=>(0,I.jsx)(b.ck,{p:3,borderBottom:"2px solid #efefef",sx:{"&:last-child":{borderBottom:"none"}},cursor:"pointer",onClick:()=>{F("createBy",null===e||void 0===e?void 0:e._id),F("recipient",null===e||void 0===e?void 0:e.email)},children:null===e||void 0===e?void 0:e.email},null===e||void 0===e?void 0:e._id)))}),(0,I.jsxs)(h.E,{mb:"10px",color:"red",children:[" ",B.recipient&&w.recipient&&B.recipient]})]}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsx)(j.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Sc"}),(0,I.jsx)(x.p,{fontSize:"sm",onChange:T,value:E.cc,name:"cc",placeholder:"cc",fontWeight:"500",borderColor:null!==B&&void 0!==B&&B.cc&&null!==w&&void 0!==w&&w.cc?"red.300":null}),(0,I.jsxs)(h.E,{mb:"10px",color:"red",children:[" ",B.cc&&w.cc&&B.cc]})]}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsx)(j.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Bcc"}),(0,I.jsx)(x.p,{fontSize:"sm",onChange:T,value:E.bcc,name:"bcc",placeholder:"bcc",fontWeight:"500",borderColor:null!==B&&void 0!==B&&B.bcc&&null!==w&&void 0!==w&&w.bcc?"red.300":null}),(0,I.jsxs)(h.E,{mb:"10px",color:"red",children:[" ",B.bcc&&w.bcc&&B.bcc]})]}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsx)(j.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Subject"}),(0,I.jsx)(x.p,{fontSize:"sm",onChange:T,value:E.subject,name:"subject",placeholder:"Subject",fontWeight:"500",borderColor:null!==B&&void 0!==B&&B.subject&&null!==w&&void 0!==w&&w.subject?"red.300":null}),(0,I.jsxs)(h.E,{mb:"10px",color:"red",children:[" ",B.subject&&w.subject&&B.subject]})]}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsxs)(j.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Message",(0,I.jsx)(h.E,{color:"red",children:"*"})]}),(0,I.jsx)(f.T,{height:240,resize:"none",fontSize:"sm",onChange:T,value:E.message,name:"message",placeholder:"Enter Message Hear",fontWeight:"500",borderColor:null!==B&&void 0!==B&&B.message&&null!==w&&void 0!==w&&w.message?"red.300":null}),(0,I.jsxs)(h.E,{mb:"10px",color:"red",children:[" ",B.message&&w.message&&B.message]})]}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsxs)(g.$,{variant:"brand",onClick:k,disabled:!!o,rightIcon:(0,I.jsx)(Y.qYP,{}),children:[" ",o?(0,I.jsx)(v.A,{}):"Send"]}),(0,I.jsx)(g.$,{onClick:()=>N.resetForm(),children:"Clear"})]})]})},B=()=>{const[e,r]=(0,d.useState)([]),i=JSON.parse(localStorage.getItem("user")),{isOpen:n,onOpen:t,onClose:s}=(0,c.j)(),[o,a]=(0,d.useState)(!1),l={sender:null===i||void 0===i?void 0:i._id,recipient:"",callDuration:"",callNotes:"",createBy:""},N=(0,y.Wx)({initialValues:l,validationSchema:q.Ar,onSubmit:(e,r)=>{let{resetForm:i}=r;R()}}),{errors:B,touched:w,values:E,handleBlur:_,handleChange:T,handleSubmit:k,setFieldValue:F}=N;w.recipient&&B.createBy&&(S.oR.error("Please select an authorized recipient"),N.resetForm());const R=async()=>{try{a(!0),200===(await(0,C.d_)("api/phoneCall/add",E)).status&&(S.oR.success(`Call ${E.recipient} successfully`),N.resetForm())}catch(e){console.error(e)}finally{a(!1)}};return(0,d.useEffect)((()=>{(async()=>{let e=await(0,C.x4)("admin"===i.role?"api/contact/":`api/contact/?createBy=${i._id}`);E.createBy=null===e||void 0===e?void 0:e._id,r(e.data)})()}),[]),(0,d.useEffect)((()=>{null===e||void 0===e||e.map((e=>{(null===e||void 0===e?void 0:e.phoneNumber)===E.recipient&&(E.createBy=e._id,F("createBy",e._id))}))}),[E]),(0,I.jsxs)(u.x,{templateColumns:"repeat(12, 1fr)",gap:3,children:[(0,I.jsx)(m.E,{colSpan:{base:12},children:(0,I.jsx)(p.D,{as:"h2",size:"xl",noOfLines:1,children:"Call"})}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsxs)(j.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["To",(0,I.jsx)(h.E,{color:"red",children:"*"})]}),(0,I.jsx)(x.p,{onFocus:t,fontSize:"sm",type:"number",onChange:T,onBlur:()=>setTimeout(s,200),value:E.recipient,name:"recipient",placeholder:"Recipient",fontWeight:"500",borderColor:null!==B&&void 0!==B&&B.recipient&&null!==w&&void 0!==w&&w.recipient?"red.300":null}),n&&(null===E||void 0===E?void 0:E.recipient)&&(0,I.jsx)(b.B8,{position:"relative",border:"1px solid",bg:"gray.100",width:"100%",borderRadius:"0px 0px 20px 20px",lineHeight:1,children:null===e||void 0===e?void 0:e.filter((e=>!(!e||!e.phoneNumber||"number"!==typeof e.phoneNumber)&&e.phoneNumber.toString().includes(E.recipient.toString().toLowerCase()))).map(((e,r)=>(0,I.jsx)(b.ck,{p:3,borderBottom:"2px solid #efefef",sx:{"&:last-child":{borderBottom:"none"}},cursor:"pointer",onClick:()=>{F("createBy",null===e||void 0===e?void 0:e._id),F("recipient",e.phoneNumber.toString())},children:e.phoneNumber},null===e||void 0===e?void 0:e._id)))}),(0,I.jsxs)(h.E,{mb:"10px",color:"red",children:[" ",B.recipient&&w.recipient&&B.recipient]})]}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsx)(j.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Call Notes"}),(0,I.jsx)(f.T,{fontSize:"sm",height:"20vh",resize:"none",onChange:T,value:E.callNotes,name:"callNotes",placeholder:"callNotes",fontWeight:"500",borderColor:null!==B&&void 0!==B&&B.callNotes&&null!==w&&void 0!==w&&w.callNotes?"red.300":null}),(0,I.jsxs)(h.E,{mb:"10px",color:"red",children:[" ",B.callNotes&&w.callNotes&&B.callNotes]})]}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsx)(g.$,{variant:"brand",disabled:!!o,onClick:k,leftIcon:(0,I.jsx)(Y.s91,{}),children:o?(0,I.jsx)(v.A,{}):"Call"}),(0,I.jsx)(g.$,{onClick:()=>N.resetForm(),children:"Clear"})]})]})};var w=i(7149);const E=()=>{const[e,r]=(0,d.useState)([]),i=JSON.parse(localStorage.getItem("user")),{isOpen:n,onOpen:t,onClose:s}=(0,c.j)(),[o,a]=(0,d.useState)(!1),l={sender:null===i||void 0===i?void 0:i._id,to:"",message:"",createFor:""},Y=(0,y.Wx)({initialValues:l,validationSchema:q.qU,onSubmit:(e,r)=>{let{resetForm:i}=r;F()}}),{errors:N,touched:B,values:E,handleChange:_,handleSubmit:T,setFieldValue:k}=Y;B.to&&N.createFor&&(S.oR.error("Please select an authorized to"),Y.resetForm());const F=async()=>{try{a(!0),200===(await(0,C.d_)("api/text-msg/add",E)).status&&(S.oR.success(`Text Msg send successfully to ${E.to} `),Y.resetForm())}catch(e){console.log(e)}finally{a(!1)}};return(0,d.useEffect)((()=>{(async()=>{let e=await(0,C.x4)("admin"===i.role?"api/contact/":`api/contact/?createBy=${i._id}`);E.createFor=null===e||void 0===e?void 0:e._id,r(e.data)})()}),[]),(0,d.useEffect)((()=>{null===e||void 0===e||e.map((e=>{(null===e||void 0===e?void 0:e.phoneNumber)===E.to&&(E.createFor=e._id,k("createFor",e._id))}))}),[E]),(0,I.jsxs)(u.x,{templateColumns:"repeat(12, 1fr)",gap:3,children:[(0,I.jsx)(m.E,{colSpan:{base:12},children:(0,I.jsx)(p.D,{as:"h2",size:"xl",noOfLines:1,children:"Text Message"})}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsxs)(j.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["To",(0,I.jsx)(h.E,{color:"red",children:"*"})]}),(0,I.jsx)(x.p,{onFocus:t,fontSize:"sm",type:"number",onChange:_,onBlur:()=>setTimeout(s,200),value:E.to,name:"to",placeholder:"to",fontWeight:"500",borderColor:null!==N&&void 0!==N&&N.to&&null!==B&&void 0!==B&&B.to?"red.300":null}),n&&(null===E||void 0===E?void 0:E.to)&&(0,I.jsx)(b.B8,{position:"relative",border:"1px solid",bg:"gray.100",width:"100%",borderRadius:"0px 0px 20px 20px",lineHeight:1,children:null===e||void 0===e?void 0:e.filter((e=>!(!e||!e.phoneNumber||"number"!==typeof e.phoneNumber)&&e.phoneNumber.toString().includes(E.to.toString().toLowerCase()))).map(((e,r)=>(0,I.jsx)(b.ck,{p:3,borderBottom:"2px solid #efefef",sx:{"&:last-child":{borderBottom:"none"}},cursor:"pointer",onClick:()=>{k("createFor",null===e||void 0===e?void 0:e._id),k("to",e.phoneNumber.toString())},children:e.phoneNumber},null===e||void 0===e?void 0:e._id)))}),(0,I.jsxs)(h.E,{mb:"10px",color:"red",children:[" ",N.to&&B.to&&N.to]})]}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsx)(j.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Message"}),(0,I.jsx)(f.T,{height:"20vh",fontSize:"sm",resize:"none",onChange:_,value:E.message,name:"message",placeholder:"message",fontWeight:"500",borderColor:null!==N&&void 0!==N&&N.message&&null!==B&&void 0!==B&&B.message?"red.300":null}),(0,I.jsxs)(h.E,{mb:"10px",color:"red",children:[" ",N.message&&B.message&&N.message]})]}),(0,I.jsxs)(m.E,{colSpan:{base:12},children:[(0,I.jsxs)(g.$,{variant:"brand",onClick:T,disabled:!!o,leftIcon:(0,I.jsx)(w.liL,{}),children:["  ",o?(0,I.jsx)(v.A,{}):"Send Msg"]}),(0,I.jsx)(g.$,{onClick:()=>Y.resetForm(),children:"Clear"})]})]})},_=()=>(0,I.jsx)("div",{children:(0,I.jsxs)(n.t,{children:[(0,I.jsxs)(t.w,{sx:{"& button:focus":{boxShadow:"none"}},children:[(0,I.jsx)(s.o,{children:"Email"}),(0,I.jsx)(s.o,{children:"Call"}),(0,I.jsx)(s.o,{children:"Text Msg"})]}),(0,I.jsxs)(o.T,{children:[(0,I.jsx)(a.K,{children:(0,I.jsx)(l.A,{children:(0,I.jsx)(N,{})})}),(0,I.jsx)(a.K,{children:(0,I.jsx)(l.A,{children:(0,I.jsx)(B,{})})}),(0,I.jsx)(a.K,{children:(0,I.jsx)(l.A,{children:(0,I.jsx)(E,{})})})]})]})})},7212:(e,r,i)=>{i.d(r,{i:()=>s});var n=i(5043),t=i(940);function s(e){const{value:r,defaultValue:i,onChange:s,shouldUpdate:o=(e,r)=>e!==r}=e,a=(0,t.c)(s),l=(0,t.c)(o),[d,c]=(0,n.useState)(i),u=void 0!==r,m=u?r:d,p=(0,t.c)((e=>{const r="function"===typeof e?e(m):e;l(m,r)&&(u||c(r),a(r))}),[u,a,m,l]);return[m,p]}},5527:(e,r,i)=>{i.d(r,{E:()=>d});var n=i(579),t=i(2470),s=i(3019),o=i(5003),a=i(5334);function l(e){return(0,t.bk)(e,(e=>"auto"===e?"auto":`span ${e}/span ${e}`))}const d=(0,o.R)((function(e,r){const{area:i,colSpan:t,colStart:o,colEnd:d,rowEnd:c,rowSpan:u,rowStart:m,...p}=e,j=(0,s.o)({gridArea:i,gridColumn:l(t),gridRow:l(u),gridColumnStart:o,gridColumnEnd:d,gridRowStart:m,gridRowEnd:c});return(0,n.jsx)(a.B.div,{ref:r,__css:j,...p})}));d.displayName="GridItem"},3533:(e,r,i)=>{i.d(r,{x:()=>o});var n=i(579),t=i(5003),s=i(5334);const o=(0,t.R)((function(e,r){const{templateAreas:i,gap:t,rowGap:o,columnGap:a,column:l,row:d,autoFlow:c,autoRows:u,templateRows:m,autoColumns:p,templateColumns:j,...h}=e,x={display:"grid",gridTemplateAreas:i,gridGap:t,gridRowGap:o,gridColumnGap:a,gridAutoColumns:p,gridColumn:l,gridRow:d,gridAutoFlow:c,gridAutoRows:u,gridTemplateRows:m,gridTemplateColumns:j};return(0,n.jsx)(s.B.div,{ref:r,__css:x,...h})}));o.displayName="Grid"},7781:(e,r,i)=>{i.d(r,{B8:()=>p,ck:()=>j,kp:()=>h});var n=i(579),t=i(3033),s=i(6417),o=i(4881),a=i(5011),l=i(5003),d=i(5158),c=i(5334);const[u,m]=(0,s.q)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),p=(0,l.R)((function(e,r){const i=(0,d.o)("List",e),{children:s,styleType:a="none",stylePosition:l,spacing:m,...p}=(0,t.M)(e),j=(0,o.a)(s),h="& > *:not(style) ~ *:not(style)",x=m?{[h]:{mt:m}}:{};return(0,n.jsx)(u,{value:i,children:(0,n.jsx)(c.B.ul,{ref:r,listStyleType:a,listStylePosition:l,role:"list",__css:{...i.container,...x},...p,children:j})})}));p.displayName="List";(0,l.R)(((e,r)=>{const{as:i,...t}=e;return(0,n.jsx)(p,{ref:r,as:"ol",styleType:"decimal",marginStart:"1em",...t})})).displayName="OrderedList";(0,l.R)((function(e,r){const{as:i,...t}=e;return(0,n.jsx)(p,{ref:r,as:"ul",styleType:"initial",marginStart:"1em",...t})})).displayName="UnorderedList";const j=(0,l.R)((function(e,r){const i=m();return(0,n.jsx)(c.B.li,{ref:r,...e,__css:i.item})}));j.displayName="ListItem";const h=(0,l.R)((function(e,r){const i=m();return(0,n.jsx)(a.I,{ref:r,role:"presentation",...e,__css:i.icon})}));h.displayName="ListIcon"},1411:(e,r,i)=>{i.d(r,{w:()=>c});var n=i(579),t=i(3130),s=i(4765),o=i(3109),a=i(7547),l=i(5003),d=i(5334);const c=(0,l.R)((function(e,r){const i=(0,a.$c)({...e,ref:r}),l=(0,o.e)(),c=(0,t.H2)({display:"flex",...l.tablist});return(0,n.jsx)(d.B.div,{...i,className:(0,s.cx)("chakra-tabs__tablist",e.className),__css:c})}));c.displayName="TabList"},227:(e,r,i)=>{i.d(r,{K:()=>d});var n=i(579),t=i(4765),s=i(3109),o=i(7547),a=i(5003),l=i(5334);const d=(0,a.R)((function(e,r){const i=(0,o.Jn)({...e,ref:r}),a=(0,s.e)();return(0,n.jsx)(l.B.div,{outline:"0",...i,className:(0,t.cx)("chakra-tabs__tab-panel",e.className),__css:a.tabpanel})}));d.displayName="TabPanel"},1794:(e,r,i)=>{i.d(r,{T:()=>d});var n=i(579),t=i(4765),s=i(3109),o=i(7547),a=i(5003),l=i(5334);const d=(0,a.R)((function(e,r){const i=(0,o.uo)(e),a=(0,s.e)();return(0,n.jsx)(l.B.div,{...i,width:"100%",ref:r,className:(0,t.cx)("chakra-tabs__tab-panels",e.className),__css:a.tabpanels})}));d.displayName="TabPanels"},4566:(e,r,i)=>{i.d(r,{o:()=>c});var n=i(579),t=i(3130),s=i(4765),o=i(3109),a=i(7547),l=i(5003),d=i(5334);const c=(0,l.R)((function(e,r){const i=(0,o.e)(),l=(0,a.Vh)({...e,ref:r}),c=(0,t.H2)({outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...i.tab});return(0,n.jsx)(d.B.button,{...l,className:(0,s.cx)("chakra-tabs__tab",e.className),__css:c})}));c.displayName="Tab"},3109:(e,r,i)=>{i.d(r,{e:()=>p,t:()=>j});var n=i(579),t=i(3033),s=i(6417),o=i(4765),a=i(5043),l=i(7547),d=i(5003),c=i(5158),u=i(5334);const[m,p]=(0,s.q)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),j=(0,d.R)((function(e,r){const i=(0,c.o)("Tabs",e),{children:s,className:d,...p}=(0,t.M)(e),{htmlProps:j,descendants:h,...x}=(0,l.uc)(p),b=(0,a.useMemo)((()=>x),[x]),{isFitted:f,...g}=j,v={position:"relative",...i.root};return(0,n.jsx)(l.at,{value:h,children:(0,n.jsx)(l.O_,{value:b,children:(0,n.jsx)(m,{value:i,children:(0,n.jsx)(u.B.div,{className:(0,o.cx)("chakra-tabs",d),ref:r,...g,__css:v,children:s})})})})}));j.displayName="Tabs"},7547:(e,r,i)=>{i.d(r,{$c:()=>g,Jn:()=>q,O_:()=>b,Vh:()=>v,at:()=>m,uc:()=>x,uo:()=>S});var n=i(7212),t=i(3194),s=i(6417),o=i(7246),a=i(4881),l=i(2398),d=i(5043),c=i(2315),u=i(6814);const[m,p,j,h]=(0,c.D)();function x(e){const{defaultIndex:r,onChange:i,index:t,isManual:s,isLazy:o,lazyBehavior:a="unmount",orientation:l="horizontal",direction:c="ltr",...u}=e,[m,p]=(0,d.useState)(r??0),[h,x]=(0,n.i)({defaultValue:r??0,value:t,onChange:i});(0,d.useEffect)((()=>{null!=t&&p(t)}),[t]);const b=j(),f=(0,d.useId)();return{id:`tabs-${e.id??f}`,selectedIndex:h,focusedIndex:m,setSelectedIndex:x,setFocusedIndex:p,isManual:s,isLazy:o,lazyBehavior:a,orientation:l,descendants:b,direction:c,htmlProps:u}}const[b,f]=(0,s.q)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function g(e){const{focusedIndex:r,orientation:i,direction:n}=f(),t=p(),s=(0,d.useCallback)((e=>{const s=()=>{const e=t.nextEnabled(r);e&&e.node?.focus()},o=()=>{const e=t.prevEnabled(r);e&&e.node?.focus()},a="horizontal"===i,l="vertical"===i,d=e.key,c="ltr"===n?"ArrowLeft":"ArrowRight",u="ltr"===n?"ArrowRight":"ArrowLeft",m={[c]:()=>a&&o(),[u]:()=>a&&s(),ArrowDown:()=>l&&s(),ArrowUp:()=>l&&o(),Home:()=>{const e=t.firstEnabled();e&&e.node?.focus()},End:()=>{const e=t.lastEnabled();e&&e.node?.focus()}}[d];m&&(e.preventDefault(),m(e))}),[t,r,i,n]);return{...e,role:"tablist","aria-orientation":i,onKeyDown:(0,o.H)(e.onKeyDown,s)}}function v(e){const{isDisabled:r=!1,isFocusable:i=!1,...n}=e,{setSelectedIndex:s,isManual:a,id:l,setFocusedIndex:d,selectedIndex:c}=f(),{index:m,register:p}=h({disabled:r&&!i}),j=m===c;return{...(0,u.I)({...n,ref:(0,t.Px)(p,e.ref),isDisabled:r,isFocusable:i,onClick:(0,o.H)(e.onClick,(()=>{s(m)}))}),id:C(l,m),role:"tab",tabIndex:j?0:-1,type:"button","aria-selected":j,"aria-controls":I(l,m),onFocus:r?void 0:(0,o.H)(e.onFocus,(()=>{d(m);!a&&!(r&&i)&&s(m)}))}}const[y,Y]=(0,s.q)({});function S(e){const r=f(),{id:i,selectedIndex:n}=r,t=(0,a.a)(e.children).map(((e,r)=>(0,d.createElement)(y,{key:e.key??r,value:{isSelected:r===n,id:I(i,r),tabId:C(i,r),selectedIndex:n}},e)));return{...e,children:t}}function q(e){const{children:r,...i}=e,{isLazy:n,lazyBehavior:t}=f(),{isSelected:s,id:o,tabId:a}=Y(),c=(0,d.useRef)(!1);s&&(c.current=!0);return{tabIndex:0,...i,children:(0,l.q)({wasSelected:c.current,isSelected:s,enabled:n,mode:t})?r:null,role:"tabpanel","aria-labelledby":a,hidden:!s,id:o}}function C(e,r){return`${e}--tab-${r}`}function I(e,r){return`${e}--tabpanel-${r}`}},9077:(e,r,i)=>{i.d(r,{T:()=>m});var n=i(579),t=i(3033),s=i(4079),o=i(4765),a=i(3635),l=i(5003),d=i(5158),c=i(5334);const u=["h","minH","height","minHeight"],m=(0,l.R)(((e,r)=>{const i=(0,d.V)("Textarea",e),{className:l,rows:m,...p}=(0,t.M)(e),j=(0,a.t)(p),h=m?(0,s.c)(i,u):i;return(0,n.jsx)(c.B.textarea,{ref:r,rows:m,...j,className:(0,o.cx)("chakra-textarea",l),__css:h})}));m.displayName="Textarea"}}]);
//# sourceMappingURL=4643.5033d403.chunk.js.map