"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[8301],{6354:(e,i,n)=>{n.d(i,{A:()=>u});var r=n(4093),o=n(5371),t=n(5699),a=n(9301),l=n(9081),s=n(5043),d=n(3155),c=n(579);const u=function(e){const{content:i,img:n,onFileSelect:u,accept:m,maxSize:p=10485760,...h}=e,[j,x]=(0,s.useState)(null),{getRootProps:v,getInputProps:f}=(0,d.VB)({multiple:!0,accept:"img"===n?"image/*":m,maxSize:p,onDrop:(e,i)=>{i.length>0?x("File too large or invalid file type"):(x(null),e.length>0&&u(e))}}),g=(0,r.dU)("gray.100","navy.700"),b=(0,r.dU)("secondaryGray.100","whiteAlpha.100"),y=(0,r.dU)("gray.200","navy.600");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.s,{align:"center",justify:"center",bg:g,border:"1px dashed",borderColor:b,borderRadius:"16px",w:"100%",h:"max-content",minH:"100%",cursor:"pointer",_hover:{bg:y},_focusWithin:{borderColor:"blue.500"},...v({className:"dropzone"}),...h,children:[(0,c.jsx)(t.p,{type:"file",variant:"main",multiple:!0,...f()}),(0,c.jsx)(a.$,{variant:"no-effects",children:i})]}),j&&(0,c.jsx)(l.E,{color:"red.500",fontSize:"sm",mt:2,children:j})]})}},962:(e,i,n)=>{n.d(i,{A:()=>M});var r=n(6205),o=n(2825),t=n(8797),a=n(8584),l=n(7781),s=n(9081),d=n(5371),c=n(9883),u=n(6236),m=n(1872),p=n(3560),h=n(3407),j=n(5043),x=n(243),v=n(1009),f=n(4960),g=n(7149),b=n(3216),y=n(8460),Y=n(1054),k=n(5421),C=n(5071),S=n(5929),q=n(7516),N=n(6529),I=n(9301),L=n(9621),w=n(579);const B=e=>(0,w.jsx)("div",{children:(0,w.jsxs)(y.aF,{onClose:e.onClose,isOpen:e.isOpen,isCentered:!0,children:[(0,w.jsx)(Y.m,{}),(0,w.jsxs)(k.$,{children:[(0,w.jsxs)(C.r,{children:["Delete Document","one"===e.method?"":"s"]}),(0,w.jsx)(S.s,{}),(0,w.jsxs)(q.c,{children:["Are You Sure To Delete selated Document","one"===e.method?"":"s"," ?"]}),(0,w.jsxs)(N.j,{children:[(0,w.jsx)(I.$,{colorScheme:"red",mr:2,onClick:async()=>{if("one"===e.method)e.deleteFile(e.id),e.onClose(!1);else if("many"===e.method)try{200===(await(0,L.Vn)(e.url,e.data)).status&&(e.setSelectedValues([]),e.onClose(!1))}catch(i){console.log(i)}},children:"Yes"}),(0,w.jsx)(I.$,{variant:"outline",onClick:()=>{e.onClose(!1)},children:"No"})]})]})]})});var F=n(6870),P=n(3533),E=n(5527),D=n(6668),R=n(6686),_=n(9904),A=n(4812),O=n(5699),W=n(3516),z=n(2145);const H=e=>{const{setLinkDocument:i}=e,[n,o]=(0,j.useState)(!1),{isOpen:t,onOpen:a,onClose:d}=(0,F.j)(),[c,u]=(0,j.useState)([]),m=JSON.parse(localStorage.getItem("user")),p=(0,W.Wx)({initialValues:{linkWith:"",linkContact:"",linkLead:""},onSubmit:(e,i)=>{let{resetForm:n}=i;T(),n()}}),{errors:h,touched:x,values:v,handleBlur:f,handleChange:g,handleSubmit:b,setFieldValue:B,resetForm:H}=p,T=async()=>{try{o(!0);let r=v.linkContact?{linkContact:v.linkContact}:{linkLead:v.linkLead},t=await(0,L.d_)(`api/document/link-document/${e.id}`,r);var n;if(t&&200===t.status)i((e=>!e)),e.onClose();else z.oR.error(null===(n=t.response.data)||void 0===n?void 0:n.message)}catch(r){console.log(r)}finally{o(!1)}};return(0,j.useEffect)((()=>{(async()=>{if("contact"===v.linkWith){let e=await(0,L.x4)("admin"===m.role?"api/contact/":`api/contact/?createBy=${m._id}`);v.createBy=null===e||void 0===e?void 0:e._id,u((i=>{var n;return[...(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.map((e=>({label:e.firstName+" "+e.lastName,value:e._id}))))||[]]}))}else if("lead"===v.linkWith){let e=await(0,L.x4)("admin"===m.role?"api/lead/":`api/lead/?createBy=${m._id}`);v.createBy=null===e||void 0===e?void 0:e._id,u((i=>{var n;return[...(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.map((e=>({label:e.leadName,value:e._id}))))||[]]}))}})()}),[v]),(0,w.jsxs)(y.aF,{onClose:e.onClose,isOpen:e.isOpen,children:[(0,w.jsx)(Y.m,{}),(0,w.jsxs)(k.$,{children:[(0,w.jsx)(C.r,{children:"Link With Document"}),(0,w.jsx)(S.s,{}),(0,w.jsx)(q.c,{children:(0,w.jsxs)(P.x,{templateColumns:"repeat(12, 1fr)",gap:3,children:[(0,w.jsxs)(E.E,{colSpan:{base:12},children:[(0,w.jsx)(D.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Link With"}),(0,w.jsx)(R.z,{onChange:e=>{H(),B("linkWith",e)},value:v.linkWith,children:(0,w.jsxs)(_.B,{direction:"row",children:[(0,w.jsx)(A.s,{value:"contact",children:"Contact"}),(0,w.jsx)(A.s,{value:"lead",children:"Lead"})]})}),(0,w.jsxs)(s.E,{mb:"10px",color:"red",children:[" ",h.linkWith&&x.linkWith&&h.linkWith]})]}),"contact"===v.linkWith?(0,w.jsxs)(E.E,{colSpan:{base:12},children:[(0,w.jsx)(D.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Link Contact"}),(0,w.jsx)(O.p,{onFocus:a,fontSize:"sm",onChange:g,onBlur:()=>setTimeout(d,200),value:null===v||void 0===v?void 0:v.linkLabel,name:"linkLabel",placeholder:"Link Contact",fontWeight:"500",borderColor:null!==h&&void 0!==h&&h.linkLabel&&null!==x&&void 0!==x&&x.linkLabel?"red.300":null}),t&&(null===v||void 0===v?void 0:v.linkLabel)&&(0,w.jsx)(l.B8,{position:"relative",border:"1px solid",bg:"gray.100",width:"100%",borderRadius:"0px 0px 20px 20px",lineHeight:1,children:null===c||void 0===c?void 0:c.filter((e=>{var i,n;return null===e||void 0===e||null===(i=e.label)||void 0===i||null===(n=i.toLowerCase())||void 0===n?void 0:n.includes(null===v||void 0===v?void 0:v.linkLabel.toLowerCase())})).map(((e,i)=>(0,w.jsx)(l.ck,{p:3,borderBottom:"2px solid #efefef",sx:{"&:last-child":{borderBottom:"none"}},cursor:"pointer",onClick:()=>{B("linkContact",null===e||void 0===e?void 0:e.value),B("linkLabel",null===e||void 0===e?void 0:e.label)},children:null===e||void 0===e?void 0:e.label},null===e||void 0===e?void 0:e.value)))}),(0,w.jsxs)(s.E,{mb:"10px",color:"red",children:[" ",h.linkContact&&x.linkContact&&h.linkContact]})]}):"lead"===v.linkWith&&(0,w.jsxs)(E.E,{colSpan:{base:12},children:[(0,w.jsx)(D.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Link Lead"}),(0,w.jsx)(O.p,{onFocus:a,fontSize:"sm",onChange:g,onBlur:()=>setTimeout(d,200),value:null===v||void 0===v?void 0:v.linkLabel,name:"linkLabel",placeholder:"Link Lead",fontWeight:"500",borderColor:null!==h&&void 0!==h&&h.linkLabel&&null!==x&&void 0!==x&&x.linkLabel?"red.300":null}),t&&(null===v||void 0===v?void 0:v.linkLabel)&&(0,w.jsx)(l.B8,{position:"relative",border:"1px solid",bg:"gray.100",width:"100%",borderRadius:"0px 0px 20px 20px",lineHeight:1,children:null===c||void 0===c?void 0:c.filter((e=>{var i,n;return null===e||void 0===e||null===(i=e.label)||void 0===i||null===(n=i.toLowerCase())||void 0===n?void 0:n.includes(null===v||void 0===v?void 0:v.linkLabel.toLowerCase())})).map(((e,i)=>(0,w.jsx)(l.ck,{p:3,borderBottom:"2px solid #efefef",sx:{"&:last-child":{borderBottom:"none"}},cursor:"pointer",onClick:()=>{B("linkLead",null===e||void 0===e?void 0:e.value),B("linkLabel",null===e||void 0===e?void 0:e.label)},children:null===e||void 0===e?void 0:e.label},null===e||void 0===e?void 0:e.value)))}),(0,w.jsxs)(s.E,{mb:"10px",color:"red",children:[" ",h.linkLead&&x.linkLead&&h.linkLead]})]})]})}),(0,w.jsxs)(N.j,{children:[(0,w.jsx)(I.$,{colorScheme:"brand",rightIcon:(0,w.jsx)(r.q,{}),mr:2,onClick:T,children:"Link"}),(0,w.jsx)(I.$,{variant:"outline",colorScheme:"red",onClick:()=>{e.onClose(!1)},children:"Cancel"})]})]})]})};var T=n(7368);const M=e=>{let{data:i,deleteFile:n,item:y,download:Y,name:k,isFile:C,children:S,setLinkDocument:q,from:N}=e;const[I,L]=(0,j.useState)(!1),[F,P]=(0,j.useState)(!1),[E,D]=(0,j.useState)(!1),[R,_]=(0,j.useState)(!1),A=(0,b.Zp)(),O=!C&&!!S,W=JSON.parse(localStorage.getItem("user"));return(0,w.jsxs)(l.B8,{width:"100%",children:[(0,w.jsx)(l.ck,{alignItems:"center",display:"flex",children:(0,w.jsxs)(s.E,{alignItems:"center",justifyContent:"space-between",display:"flex",width:"100%",onClick:O?()=>{L(!I)}:void 0,_hover:{cursor:"pointer",textDecoration:"none"},children:[(0,w.jsxs)(d.s,{width:"70%",alignItems:"center",children:[(0,w.jsx)(l.kp,{as:C?v.QuH:x.NVk}),O&&(I?(0,w.jsx)(v.fK4,{}):(0,w.jsx)(v.fOo,{})),k]}),null!==y&&void 0!==y&&y.createByName?(0,w.jsxs)(s.E,{children:["(",null===y||void 0===y?void 0:y.createByName,") "]}):null,!O&&(0,w.jsx)(d.s,{justifyContent:"right",width:"100%",children:(0,w.jsxs)(c.W,{isLazy:!0,children:[(0,w.jsx)(u.I,{children:(0,w.jsx)(T.txp,{})}),(0,w.jsxs)(m.c,{position:"absolute",right:-5,pl:"0.5em",minW:"fit-content",children:[!N&&null!==i&&void 0!==i&&i.linkContact?(0,w.jsx)(p.D,{pr:2,w:"180px",onClick:()=>A("admin"!==(null===W||void 0===W?void 0:W.role)?`/contactView/${null===i||void 0===i?void 0:i.linkContact}`:`/admin/contactView/${null===i||void 0===i?void 0:i.linkContact}`),icon:(0,w.jsx)(f.oau,{fontSize:15}),children:"Linked Contact"}):!N&&(null===i||void 0===i?void 0:i.linkLead)&&(0,w.jsx)(p.D,{pr:2,w:"180px",onClick:()=>A("admin"!==(null===W||void 0===W?void 0:W.role)?`/leadView/${null===i||void 0===i?void 0:i.linkLead}`:`/admin/leadView/${null===i||void 0===i?void 0:i.linkLead}`),icon:(0,w.jsx)(g.ju$,{fontSize:15}),children:"Linked Lead"}),!N&&(0,w.jsx)(p.D,{pr:10,color:"blue",onClick:()=>(e=>{D(!0),_(e)})(null===i||void 0===i?void 0:i._id),icon:(0,w.jsx)(r.q,{fontSize:15}),children:"Link"}),function(e){const i=e.substring(e.lastIndexOf(".")).toLowerCase();return[".jpg",".jpeg",".png",".gif",".bmp"].includes(i)}(null===i||void 0===i?void 0:i.img)&&(0,w.jsx)(p.D,{pr:10,color:"green",onClick:()=>window.open(null===i||void 0===i?void 0:i.img),icon:(0,w.jsx)(o.t,{fontSize:15}),children:"View"}),(0,w.jsx)(p.D,{pr:10,onClick:()=>(e=>{Y(e)})(null===i||void 0===i?void 0:i._id),icon:(0,w.jsx)(t.s,{fontSize:15}),children:"Download"}),!N&&(0,w.jsx)(p.D,{pr:10,color:"red",onClick:()=>(e=>{P(!0),_(e)})(null===i||void 0===i?void 0:i._id),icon:(0,w.jsx)(a.d,{fontSize:15}),children:"Delete"})]})]})}),(0,w.jsx)(B,{isOpen:F,onClose:P,method:"one",deleteFile:n,id:R}),(0,w.jsx)(H,{isOpen:E,setLinkDocument:q,onClose:D,id:R})]})}),O&&(0,w.jsx)(h.S,{in:I,animateOpacity:!0,children:(0,w.jsx)(l.B8,{styleType:"disc",ml:4,children:S})})]})}},216:(e,i,n)=>{n.d(i,{A:()=>a});var r=n(5158),o=n(2107),t=n(579);const a=function(e){const{variant:i,children:n,...a}=e,l=(0,r.V)("Card",{variant:i});return(0,t.jsx)(o.a,{__css:l,height:"100%",...a,children:n})}},9488:(e,i,n)=>{n.d(i,{A:()=>o});var r=n(579);const o=()=>(0,r.jsx)("div",{className:"loader"})},6092:(e,i,n)=>{n.d(i,{pq:()=>j,pj:()=>h,yo:()=>o,L8:()=>u,y4:()=>c,aq:()=>l,X5:()=>d,Ar:()=>m,jq:()=>a,qU:()=>p,vJ:()=>s});var r=n(899);const o=r.Ik({firstName:r.Yj().min(2).required("First Name is required"),lastName:r.Yj().min(2).required("Last Name is required"),title:r.Yj().required("Title is required"),email:r.Yj().email().required("Email is required"),phoneNumber:r.ai().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("Phonenumber is Required"),mobileNumber:r.ai().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").notRequired(),physicalAddress:r.Yj().required("Physical address is required"),mailingAddress:r.Yj(),preferredContactMethod:r.Yj().required("Preferred contact method is required"),leadSource:r.Yj(),referralSource:r.Yj(),campaignSource:r.Yj(),leadStatus:r.Yj(),leadRating:r.ai(),leadConversionProbability:r.Yj(),emailHistory:r.Yj(),phoneCallHistory:r.Yj(),meetingHistory:r.Yj(),notesandComments:r.Yj(),tagsOrLabelsForcategorizingcontacts:r.Yj(),birthday:r.p6(),anniversary:r.p6(),keyMilestones:r.Yj(),dob:r.Yj(),gender:r.Yj(),occupation:r.Yj(),interestsOrHobbies:r.Yj(),communicationFrequency:r.Yj(),preferences:r.Yj(),linkedInProfile:r.Yj(),facebookProfile:r.Yj(),twitterHandle:r.Yj(),otherProfiles:r.Yj(),agentOrTeamMember:r.Yj(),internalNotesOrComments:r.Yj(),createBy:r.Yj()}),t=(new Date).getFullYear(),a=r.Ik({propertyType:r.Yj().required("Property Type Is required"),propertyAddress:r.Yj().required("Property Address Is required"),listingPrice:r.Yj().required("Listing Price Is required"),squareFootage:r.Yj().required("Square Footage Is required"),numberofBedrooms:r.ai().required("Number Of Bedrooms Is required"),numberofBathrooms:r.ai().required("Number Of Bathrooms Is required"),yearBuilt:r.ai().min(1e3).max(t).required("Year Built Is required"),propertyDescription:r.Yj().required("Property Description Is required"),lotSize:r.Yj(),parkingAvailability:r.Yj(),appliancesIncluded:r.Yj(),heatingAndCoolingSystems:r.Yj(),flooringType:r.Yj(),exteriorFeatures:r.Yj(),communityAmenities:r.Yj(),propertyPhotos:r.Yj(),virtualToursOrVideos:r.Yj(),floorPlans:r.Yj(),propertyDocuments:r.Yj(),listingStatus:r.Yj(),listingAgentOrTeam:r.Yj(),listingDate:r.Yj(),marketingDescription:r.Yj(),multipleListingService:r.Yj(),previousOwners:r.ai().min(0),purchaseHistory:r.Yj(),propertyTaxes:r.Yj(),homeownersAssociation:r.Yj(),mortgageInformation:r.Yj(),sellers:r.Yj(),buyers:r.Yj(),propertyManagers:r.Yj(),contractorsOrServiceProviders:r.Yj(),internalNotesOrComments:r.Yj()}),l=r.Ik({leadName:r.Yj().required("Lead Name Is required"),leadEmail:r.Yj().email().required("Lead Email Is required"),leadPhoneNumber:r.Yj().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("Lead Phone Number Is required"),leadAddress:r.Yj().required("Lead Address Is required"),leadSource:r.Yj(),leadStatus:r.Yj(),leadSourceDetails:r.Yj(),leadCampaign:r.Yj(),leadSourceChannel:r.Yj(),leadSourceMedium:r.Yj(),leadSourceCampaign:r.Yj(),leadSourceReferral:r.Yj(),leadAssignedAgent:r.Yj(),leadOwner:r.Yj(),leadCommunicationPreferences:r.Yj(),leadCreationDate:r.p6().required("Lead Creation Date Is required"),leadConversionDate:r.p6().required("Lead Conversion Date Is required"),leadFollowUpDate:r.p6().required("lead Follow Up Date  Is required"),leadFollowUpStatus:r.Yj(),leadScore:r.ai().required("Lead Score Is required"),leadNurturingWorkflow:r.Yj(),leadEngagementLevel:r.Yj(),leadConversionRate:r.ai().required("lead Conversion Rate Is required"),leadNurturingStage:r.Yj(),leadNextAction:r.Yj()}),s=r.Ik({firstName:r.Yj().required("First Name Is required"),lastName:r.Yj(),phoneNumber:r.Yj().required("Phone Number Is required").matches(/^\d{10}$/,"Phone Number must be exactly 10 digits"),username:r.Yj().email().required("Email Is required")}),d=r.Ik({username:r.Yj().email().required("Email Is required"),password:r.Yj().required("Password Is required")}),c=r.Ik({sender:r.Yj().required("Sender Is required"),recipient:r.Yj().email().required("Recipient Is required"),cc:r.Yj().email(),bcc:r.Yj().email(),relatedToContact:r.Yj(),relatedToLead:r.Yj(),subject:r.Yj(),message:r.Yj(),createBy:r.Yj(),createByLead:r.Yj()}).test("createBy-or-createByLead-required","Recipient Is required",(function(e){if(!e.createBy&&!e.createByLead)return this.createError({path:"createBy",message:"Recipient Is required"})})),u=r.Ik().shape({folderName:r.Yj().required("Folder Name is required"),filename:r.Yj().min(2,"File Name Must Be At Least 2 Characters"),createBy:r.Yj().required()}),m=r.Ik({sender:r.Yj().required("Sender Is required"),recipient:r.ai().required("Recipient Is required"),callDuration:r.Yj(),callNotes:r.Yj(),createBy:r.Yj(),createByLead:r.Yj(),category:r.Yj()}).test("createBy-or-createByLead-required","Recipient Is required",(function(e){if(!e.createBy&&!e.createByLead)return this.createError({path:"createBy",message:"Recipient Is required"})})),p=r.Ik({sender:r.Yj().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("Sender Is required"),to:r.Yj().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("To Is required"),message:r.Yj(),createFor:r.Yj().required("Create By Is required")}),h=r.Ik({title:r.Yj().required("Title Is required"),category:r.Yj(),description:r.Yj(),notes:r.Yj(),reminder:r.Yj(),start:r.Yj().required("Start Is required"),end:r.Yj(),backgroundColor:r.Yj(),borderColor:r.Yj(),textColor:r.Yj(),display:r.Yj(),url:r.Yj(),createBy:r.Yj()}),j=r.Ik({agenda:r.Yj().required("Agenda Is required"),attendes:r.YO().of(r.Yj().trim()),attendesLead:r.YO().of(r.Yj().trim()),location:r.Yj(),related:r.Yj(),dateTime:r.Yj().required("Date Time Is required"),notes:r.Yj(),createFor:r.Yj(),createdBy:r.Yj()})},8301:(e,i,n)=>{n.r(i),n.d(i,{default:()=>F});var r=n(6870),o=n(3533),t=n(5527),a=n(8846),l=n(202),s=n(5371),d=n(9081),c=n(6668),u=n(5699),m=n(7781),p=n(9301),h=n(962),j=n(216),x=n(3994),v=n(9488),f=n(2770),g=n(3516),b=n(5043),y=n(3216),Y=n(2145),k=n(6092),C=n(9621),S=n(4093),q=n(2107),N=n(5011),I=n(6354),L=n(7149),w=n(579);function B(e){const{used:i,total:n,count:r,...a}=e,l=(0,S.dU)("secondaryGray.900","white"),c=(0,S.dU)("brand.500","white");return(0,w.jsxs)(o.x,{templateColumns:"repeat(12, 1fr)",mb:3,gap:2,children:[(0,w.jsx)(t.E,{colSpan:{base:12,"2xl":5},children:(0,w.jsx)(I.A,{w:{base:"100%","2xl":"240px"},me:"36px",minH:200,height:"100%",onFileSelect:e.onFileSelect,content:(0,w.jsxs)(q.a,{children:[(0,w.jsx)(N.I,{as:L.vpy,w:"70px",h:"70px",color:c}),(0,w.jsx)(s.s,{justify:"center",mx:"auto",mb:"12px",children:(0,w.jsx)(d.E,{fontSize:"xl",fontWeight:"700",color:c,children:"Upload Files"})}),(0,w.jsx)(d.E,{fontSize:"sm",fontWeight:"500",color:"secondaryGray.500",children:r>0&&(0,w.jsxs)(d.E,{fontSize:"sm",fontWeight:"500",color:"secondaryGray.500",children:["Selected Files : ",r]})})]})})}),(0,w.jsx)(t.E,{colSpan:{base:12,"2xl":7},children:(0,w.jsxs)(s.s,{direction:"column",children:[(0,w.jsx)(d.E,{color:l,fontWeight:"bold",textAlign:"start",fontSize:"2xl",mt:{base:"20px","2xl":"50px"},children:"Upload Files"}),(0,w.jsx)(d.E,{color:"gray.400",fontSize:"md",my:{base:"auto","2xl":"10px"},mx:"auto",textAlign:"start",children:"Accepted File Types (Images, PDFs, Word docs, Powerpoint, Excel, ZIP, and video files - 15MB max)"})]})})]})}const F=()=>{const[e,i]=(0,b.useState)([]),{isOpen:n,onOpen:S,onClose:q}=(0,r.j)(),N=JSON.parse(localStorage.getItem("user")),[I,L]=(0,b.useState)(!1),[F,P]=(0,b.useState)(!1),E=async()=>{L(!0);let e=await(0,C.x4)("admin"===N.role?"api/document":`api/document?createBy=${N._id}`);i(null===e||void 0===e?void 0:e.data),L(!1)},D={folderName:"",files:"",filename:"",createBy:N._id},R=(0,g.Wx)({initialValues:D,validationSchema:k.L8,onSubmit:(e,i)=>{let{resetForm:n}=i;V()}}),{errors:_,touched:A,values:O,handleBlur:W,handleChange:z,handleSubmit:H,setFieldValue:T,resetForm:M}=R,$=((0,y.Zp)(),async e=>{if(e){let i=await(0,C.x4)("api/document/download/",e);i&&200===i.status?(window.open(`${f.d.baseUrl}api/document/download/${e}`),Y.oR.success("file Download successful")):i&&404===i.response.status&&Y.oR.error("file Not Found")}}),U=async e=>{if(e){let i=await(0,C.Gx)("api/document/delete/",e);i&&200===i.status&&E()}},V=async()=>{try{L(!0);const e=new FormData;null===e||void 0===e||e.append("folderName",O.folderName),null===e||void 0===e||e.append("createBy",O.createBy),null===e||void 0===e||e.append("filename",O.filename),O.files.forEach((i=>{null===e||void 0===e||e.append("files",i)}));let i=await(0,C.d_)("api/document/add",e);i&&200===i.status&&(E(),R.resetForm())}catch(e){console.log(e)}finally{L(!1)}};return(0,b.useEffect)((()=>{E()}),[F,H]),(0,w.jsx)("div",{children:(0,w.jsxs)(o.x,{templateColumns:"repeat(12, 1fr)",mb:3,gap:2,children:[(0,w.jsx)(t.E,{colSpan:{base:12,md:7},children:(0,w.jsxs)(j.A,{minH:"20em",children:[(0,w.jsx)(a.D,{size:"lg",mb:4,children:"File Explorer"}),(0,w.jsx)(x.E,{}),(0,w.jsx)(l.T,{mt:4,alignItems:"flex-start",children:I?(0,w.jsx)(s.s,{justifyContent:"center",alignItems:"center",width:"100%",children:(0,w.jsx)(v.A,{})}):0===(null===e||void 0===e?void 0:e.length)?(0,w.jsx)(d.E,{textAlign:"center",width:"100%",fontSize:"sm",fontWeight:"700",children:"-- No Document Found --"}):null===e||void 0===e?void 0:e.map((e=>{var i;return(0,w.jsx)(h.A,{name:e.folderName,item:e,children:null===e||void 0===e||null===(i=e.files)||void 0===i?void 0:i.map((e=>(0,w.jsx)(h.A,{download:$,setLinkDocument:P,deleteFile:U,data:e,name:e.fileName,isFile:!0})))})}))})]})}),(0,w.jsx)(t.E,{colSpan:{base:12,md:5},colStart:{base:1,md:8},children:(0,w.jsxs)(j.A,{children:[(0,w.jsxs)(t.E,{colSpan:{base:12},children:[(0,w.jsxs)(c.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Folder Name",(0,w.jsx)(d.E,{color:"red",children:"*"})]}),(0,w.jsx)(u.p,{onFocus:S,fontSize:"sm",onChange:z,onBlur:()=>setTimeout(q,200),value:O.folderName,name:"folderName",placeholder:"Enter Folder Name",fontWeight:"500",borderColor:null!==_&&void 0!==_&&_.folderName&&null!==A&&void 0!==A&&A.folderName?"red.300":null}),n&&(null===O||void 0===O?void 0:O.folderName)&&(null===e||void 0===e?void 0:e.filter((e=>{var i,n;return null===e||void 0===e||null===(i=e.folderName)||void 0===i||null===(n=i.toLowerCase())||void 0===n?void 0:n.includes(null===O||void 0===O?void 0:O.folderName.toLowerCase())})).length)>0&&(0,w.jsx)(m.B8,{position:"relative",border:"1px solid",bg:"gray.100",width:"100%",borderRadius:"0px 0px 20px 20px",lineHeight:1,children:null===e||void 0===e?void 0:e.filter((e=>{var i,n;return null===e||void 0===e||null===(i=e.folderName)||void 0===i||null===(n=i.toLowerCase())||void 0===n?void 0:n.includes(null===O||void 0===O?void 0:O.folderName.toLowerCase())})).map(((e,i)=>(0,w.jsx)(m.ck,{p:3,borderBottom:"2px solid #efefef",sx:{"&:last-child":{borderBottom:"none"}},cursor:"pointer",onClick:()=>{T("folderName",null===e||void 0===e?void 0:e.folderName)},children:null===e||void 0===e?void 0:e.folderName},null===e||void 0===e?void 0:e._id)))}),(0,w.jsxs)(d.E,{mb:"10px",color:"red",children:[" ",_.folderName&&A.folderName&&_.folderName]})]}),(0,w.jsxs)(t.E,{colSpan:{base:12},children:[(0,w.jsx)(c.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"File Name"}),(0,w.jsx)(u.p,{fontSize:"sm",onChange:z,onBlur:()=>setTimeout(q,200),value:O.filename,name:"filename",placeholder:"Enter File Name",fontWeight:"500",borderColor:null!==_&&void 0!==_&&_.filename&&null!==A&&void 0!==A&&A.filename?"red.300":null}),(0,w.jsxs)(d.E,{mb:"10px",color:"red",children:[" ",_.filename&&A.filename&&_.filename]})]}),(0,w.jsx)(B,{count:O.files.length,onFileSelect:e=>T("files",e)}),(0,w.jsx)(p.$,{disabled:!!I,onClick:H,variant:"brand",fontWeight:"500",children:I?(0,w.jsx)(v.A,{}):"Publish now"})]})})]})})}},5421:(e,i,n)=>{n.d(i,{$:()=>g});var r=n(579),o=n(3130),t=n(4765),a=n(8460),l=n(7436),s=n(5206),d=n(5043),c=n(1195),u=n(2615);const m={initial:"initial",animate:"enter",exit:"exit",variants:{initial:e=>{let{offsetX:i,offsetY:n,transition:r,transitionEnd:o,delay:t}=e;return{opacity:0,x:i,y:n,transition:r?.exit??u.yA.exit(u.jd.exit,t),transitionEnd:o?.exit}},enter:e=>{let{transition:i,transitionEnd:n,delay:r}=e;return{opacity:1,x:0,y:0,transition:i?.enter??u.yA.enter(u.jd.enter,r),transitionEnd:n?.enter}},exit:e=>{let{offsetY:i,offsetX:n,transition:r,transitionEnd:o,reverse:t,delay:a}=e;const l={x:n,y:i};return{opacity:0,transition:r?.exit??u.yA.exit(u.jd.exit,a),...t?{...l,transitionEnd:o?.exit}:{transitionEnd:{...l,...o?.exit}}}}}};(0,d.forwardRef)((function(e,i){const{unmountOnExit:n,in:o,reverse:a=!0,className:l,offsetX:d=0,offsetY:u=8,transition:p,transitionEnd:h,delay:j,animatePresenceProps:x,...v}=e,f=!n||o&&n,g=o||n?"enter":"exit",b={offsetX:d,offsetY:u,reverse:a,transition:p,transitionEnd:h,delay:j};return(0,r.jsx)(c.N,{...x,custom:b,children:f&&(0,r.jsx)(s.P.div,{ref:i,className:(0,t.cx)("chakra-offset-slide",l),custom:b,...m,animate:g,...v})})})).displayName="SlideFade";const p={initial:"exit",animate:"enter",exit:"exit",variants:{exit:e=>{let{reverse:i,initialScale:n,transition:r,transitionEnd:o,delay:t}=e;return{opacity:0,...i?{scale:n,transitionEnd:o?.exit}:{transitionEnd:{scale:n,...o?.exit}},transition:r?.exit??u.yA.exit(u.jd.exit,t)}},enter:e=>{let{transitionEnd:i,transition:n,delay:r}=e;return{opacity:1,scale:1,transition:n?.enter??u.yA.enter(u.jd.enter,r),transitionEnd:i?.enter}}}};(0,d.forwardRef)((function(e,i){const{unmountOnExit:n,in:o,reverse:a=!0,initialScale:l=.95,className:d,transition:u,transitionEnd:m,delay:h,animatePresenceProps:j,...x}=e,v=!n||o&&n,f=o||n?"enter":"exit",g={initialScale:l,reverse:a,transition:u,transitionEnd:m,delay:h};return(0,r.jsx)(c.N,{...j,custom:g,children:v&&(0,r.jsx)(s.P.div,{ref:i,className:(0,t.cx)("chakra-offset-slide",d),...p,animate:f,custom:g,...x})})})).displayName="ScaleFade";var h=n(5334);const j={slideInBottom:{...m,custom:{offsetY:16,reverse:!0}},slideInRight:{...m,custom:{offsetX:16,reverse:!0}},slideInTop:{...m,custom:{offsetY:-16,reverse:!0}},slideInLeft:{...m,custom:{offsetX:-16,reverse:!0}},scale:{...p,custom:{initialScale:.95,reverse:!0}},none:{}},x=(0,h.B)(s.P.section),v=e=>j[e||"none"],f=(0,d.forwardRef)(((e,i)=>{const{preset:n,motionProps:o=v(n),...t}=e;return(0,r.jsx)(x,{ref:i,...o,...t})}));f.displayName="ModalTransition";const g=(0,n(5003).R)(((e,i)=>{const{className:n,children:s,containerProps:d,motionProps:c,...u}=e,{getDialogProps:m,getDialogContainerProps:p}=(0,a.k3)(),j=m(u,i),x=p(d),v=(0,t.cx)("chakra-modal__content",n),g=(0,a.x5)(),b=(0,o.H2)({display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...g.dialog}),y=(0,o.H2)({display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...g.dialogContainer}),{motionPreset:Y}=(0,a.k3)();return(0,r.jsx)(l.u,{children:(0,r.jsx)(h.B.div,{...x,className:"chakra-modal__content-container",tabIndex:-1,__css:y,children:(0,r.jsx)(f,{preset:Y,motionProps:c,className:v,...j,__css:b,children:s})})})}));g.displayName="ModalContent"},6529:(e,i,n)=>{n.d(i,{j:()=>d});var r=n(579),o=n(3130),t=n(4765),a=n(8460),l=n(5003),s=n(5334);const d=(0,l.R)(((e,i)=>{const{className:n,...l}=e,d=(0,t.cx)("chakra-modal__footer",n),c=(0,a.x5)(),u=(0,o.H2)({display:"flex",alignItems:"center",justifyContent:"flex-end",...c.footer});return(0,r.jsx)(s.B.footer,{ref:i,...l,__css:u,className:d})}));d.displayName="ModalFooter"},5071:(e,i,n)=>{n.d(i,{r:()=>c});var r=n(579),o=n(3130),t=n(4765),a=n(5043),l=n(8460),s=n(5003),d=n(5334);const c=(0,s.R)(((e,i)=>{const{className:n,...s}=e,{headerId:c,setHeaderMounted:u}=(0,l.k3)();(0,a.useEffect)((()=>(u(!0),()=>u(!1))),[u]);const m=(0,t.cx)("chakra-modal__header",n),p=(0,l.x5)(),h=(0,o.H2)({flex:0,...p.header});return(0,r.jsx)(d.B.header,{ref:i,className:m,id:c,...s,__css:h})}));c.displayName="ModalHeader"},6686:(e,i,n)=>{n.d(i,{z:()=>h,R:()=>p});var r=n(579),o=n(6417),t=n(4765),a=n(5043),l=n(3194),s=n(3108);function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{onChange:i,value:n,defaultValue:r,name:o,isDisabled:t,isFocusable:d,isNative:c,...u}=e,[m,p]=(0,a.useState)(r||""),h="undefined"!==typeof n,j=h?n:m,x=(0,a.useRef)(null),v=(0,a.useCallback)((()=>{const e=x.current;if(!e)return;let i="input:not(:disabled):checked";const n=e.querySelector(i);if(n)return void n.focus();i="input:not(:disabled)";const r=e.querySelector(i);r?.focus()}),[]),f=(0,a.useId)(),g=o||`radio-${f}`,b=(0,a.useCallback)((e=>{const n=function(e){return e&&(0,s.Gv)(e)&&(0,s.Gv)(e.target)}(e)?e.target.value:e;h||p(n),i?.(String(n))}),[i,h]),y=(0,a.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,l.Px)(e,x),role:"radiogroup"}}),[]),Y=(0,a.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=c?"checked":"isChecked";return{...e,ref:i,name:g,[n]:null!=j?e.value===j:void 0,onChange(e){b(e)},"data-radiogroup":!0}}),[c,g,b,j]);return{getRootProps:y,getRadioProps:Y,name:g,ref:x,focus:v,setValue:p,value:j,onChange:b,isDisabled:t,isFocusable:d,htmlProps:u}}var c=n(5003),u=n(5334);const[m,p]=(0,o.q)({name:"RadioGroupContext",strict:!1}),h=(0,c.R)(((e,i)=>{const{colorScheme:n,size:o,variant:l,children:s,className:c,isDisabled:p,isFocusable:h,...j}=e,{value:x,onChange:v,getRootProps:f,name:g,htmlProps:b}=d(j),y=(0,a.useMemo)((()=>({name:g,size:o,onChange:v,colorScheme:n,value:x,variant:l,isDisabled:p,isFocusable:h})),[g,o,v,n,x,l,p,h]);return(0,r.jsx)(m,{value:y,children:(0,r.jsx)(u.B.div,{...f(b,i),className:(0,t.cx)("chakra-radio-group",c),children:s})})}));h.displayName="RadioGroup"},4812:(e,i,n)=>{n.d(i,{s:()=>f});var r=n(579),o=n(3033),t=n(6501),a=n(7246),l=n(6712),s=n(6686),d=n(8813),c=n(8952),u=n(5043),m=n(3225),p=n(5814);function h(e){e.preventDefault(),e.stopPropagation()}var j=n(5003),x=n(5158),v=n(5334);const f=(0,j.R)(((e,i)=>{const n=(0,s.R)(),{onChange:j,value:f}=e,g=(0,x.o)("Radio",{...n,...e}),b=(0,o.M)(e),{spacing:y="0.5rem",children:Y,isDisabled:k=n?.isDisabled,isFocusable:C=n?.isFocusable,inputProps:S,...q}=b;let N=e.isChecked;null!=n?.value&&null!=f&&(N=n.value===f);let I=j;n?.onChange&&null!=f&&(I=(0,a.O)(n.onChange,j));const L=e?.name??n?.name,{getInputProps:w,getRadioProps:B,getLabelProps:F,getRootProps:P,htmlProps:E}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{defaultChecked:i,isChecked:n,isFocusable:r,isDisabled:o,isReadOnly:t,isRequired:l,onChange:j,isInvalid:x,name:v,value:f,id:g,"data-radiogroup":b,"aria-describedby":y,...Y}=e,k=`radio-${(0,u.useId)()}`,C=(0,m.Uc)(),S=(0,s.R)();let q=!C||S||b?k:C.id;q=g??q;const N=o??C?.isDisabled,I=t??C?.isReadOnly,L=l??C?.isRequired,w=x??C?.isInvalid,[B,F]=(0,u.useState)(!1),[P,E]=(0,u.useState)(!1),[D,R]=(0,u.useState)(!1),[_,A]=(0,u.useState)(!1),[O,W]=(0,u.useState)(Boolean(i)),z="undefined"!==typeof n,H=z?n:O;(0,u.useEffect)((()=>(0,c.Yy)(F)),[]);const T=(0,u.useCallback)((e=>{I||N?e.preventDefault():(z||W(e.currentTarget.checked),j?.(e))}),[z,N,I,j]),M=(0,u.useCallback)((e=>{" "===e.key&&A(!0)}),[A]),$=(0,u.useCallback)((e=>{" "===e.key&&A(!1)}),[A]),U=(0,u.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:i,"data-active":(0,d.s)(_),"data-hover":(0,d.s)(D),"data-disabled":(0,d.s)(N),"data-invalid":(0,d.s)(w),"data-checked":(0,d.s)(H),"data-focus":(0,d.s)(P),"data-focus-visible":(0,d.s)(P&&B),"data-readonly":(0,d.s)(I),"aria-hidden":!0,onMouseDown:(0,a.H)(e.onMouseDown,(()=>A(!0))),onMouseUp:(0,a.H)(e.onMouseUp,(()=>A(!1))),onMouseEnter:(0,a.H)(e.onMouseEnter,(()=>R(!0))),onMouseLeave:(0,a.H)(e.onMouseLeave,(()=>R(!1)))}}),[_,D,N,w,H,P,I,B]),{onFocus:V,onBlur:G}=C??{},X=(0,u.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=N&&!r;return{...e,id:q,ref:i,type:"radio",name:v,value:f,onChange:(0,a.H)(e.onChange,T),onBlur:(0,a.H)(G,e.onBlur,(()=>E(!1))),onFocus:(0,a.H)(V,e.onFocus,(()=>E(!0))),onKeyDown:(0,a.H)(e.onKeyDown,M),onKeyUp:(0,a.H)(e.onKeyUp,$),checked:H,disabled:n,readOnly:I,required:L,"aria-invalid":(0,d.r)(w),"aria-disabled":(0,d.r)(n),"aria-required":(0,d.r)(L),"data-readonly":(0,d.s)(I),"aria-describedby":y,style:p.f}}),[N,r,q,v,f,T,G,V,M,$,H,I,L,w,y]);return{state:{isInvalid:w,isFocused:P,isChecked:H,isActive:_,isHovered:D,isDisabled:N,isReadOnly:I,isRequired:L},getRadioProps:U,getInputProps:X,getLabelProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:i,onMouseDown:(0,a.H)(e.onMouseDown,h),"data-disabled":(0,d.s)(N),"data-checked":(0,d.s)(H),"data-invalid":(0,d.s)(w)}},getRootProps:function(e){return{htmlFor:q,...e,ref:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,"data-disabled":(0,d.s)(N),"data-checked":(0,d.s)(H),"data-invalid":(0,d.s)(w)}},htmlProps:Y}}({...q,isChecked:N,isFocusable:C,isDisabled:k,onChange:I,name:L}),[D,R]=(0,l.l)(E,t.GF),_=B(R),A=w(S,i),O=F(),W=Object.assign({},D,P()),z={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...g.container},H={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...g.control},T={userSelect:"none",marginStart:y,...g.label};return(0,r.jsxs)(v.B.label,{className:"chakra-radio",...W,__css:z,children:[(0,r.jsx)("input",{className:"chakra-radio__input",...A}),(0,r.jsx)(v.B.span,{className:"chakra-radio__control",..._,__css:H}),Y&&(0,r.jsx)(v.B.span,{className:"chakra-radio__label",...O,__css:T,children:Y})]})}));f.displayName="Radio"},6712:(e,i,n)=>{function r(e,i){const n={},r={};for(const[o,t]of Object.entries(e))i.includes(o)?n[o]=t:r[o]=t;return[n,r]}n.d(i,{l:()=>r})}}]);
//# sourceMappingURL=8301.1dbfdad0.chunk.js.map