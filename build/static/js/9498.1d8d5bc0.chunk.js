"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[9498],{9488:(e,r,i)=>{i.d(r,{A:()=>a});var s=i(579);const a=()=>(0,s.jsx)("div",{className:"loader"})},6092:(e,r,i)=>{i.d(r,{pq:()=>h,pj:()=>p,yo:()=>a,L8:()=>u,y4:()=>c,aq:()=>o,X5:()=>l,Ar:()=>m,jq:()=>t,qU:()=>j,vJ:()=>d});var s=i(899);const a=s.Ik({firstName:s.Yj().min(2).required("First Name is required"),lastName:s.Yj().min(2).required("Last Name is required"),title:s.Yj().required("Title is required"),email:s.Yj().email().required("Email is required"),phoneNumber:s.ai().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("Phonenumber is Required"),mobileNumber:s.ai().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").notRequired(),physicalAddress:s.Yj().required("Physical address is required"),mailingAddress:s.Yj(),preferredContactMethod:s.Yj().required("Preferred contact method is required"),leadSource:s.Yj(),referralSource:s.Yj(),campaignSource:s.Yj(),leadStatus:s.Yj(),leadRating:s.ai(),leadConversionProbability:s.Yj(),emailHistory:s.Yj(),phoneCallHistory:s.Yj(),meetingHistory:s.Yj(),notesandComments:s.Yj(),tagsOrLabelsForcategorizingcontacts:s.Yj(),birthday:s.p6(),anniversary:s.p6(),keyMilestones:s.Yj(),dob:s.Yj(),gender:s.Yj(),occupation:s.Yj(),interestsOrHobbies:s.Yj(),communicationFrequency:s.Yj(),preferences:s.Yj(),linkedInProfile:s.Yj(),facebookProfile:s.Yj(),twitterHandle:s.Yj(),otherProfiles:s.Yj(),agentOrTeamMember:s.Yj(),internalNotesOrComments:s.Yj(),createBy:s.Yj()}),n=(new Date).getFullYear(),t=s.Ik({propertyType:s.Yj().required("Property Type Is required"),propertyAddress:s.Yj().required("Property Address Is required"),listingPrice:s.Yj().required("Listing Price Is required"),squareFootage:s.Yj().required("Square Footage Is required"),numberofBedrooms:s.ai().required("Number Of Bedrooms Is required"),numberofBathrooms:s.ai().required("Number Of Bathrooms Is required"),yearBuilt:s.ai().min(1e3).max(n).required("Year Built Is required"),propertyDescription:s.Yj().required("Property Description Is required"),lotSize:s.Yj(),parkingAvailability:s.Yj(),appliancesIncluded:s.Yj(),heatingAndCoolingSystems:s.Yj(),flooringType:s.Yj(),exteriorFeatures:s.Yj(),communityAmenities:s.Yj(),propertyPhotos:s.Yj(),virtualToursOrVideos:s.Yj(),floorPlans:s.Yj(),propertyDocuments:s.Yj(),listingStatus:s.Yj(),listingAgentOrTeam:s.Yj(),listingDate:s.Yj(),marketingDescription:s.Yj(),multipleListingService:s.Yj(),previousOwners:s.ai().min(0),purchaseHistory:s.Yj(),propertyTaxes:s.Yj(),homeownersAssociation:s.Yj(),mortgageInformation:s.Yj(),sellers:s.Yj(),buyers:s.Yj(),propertyManagers:s.Yj(),contractorsOrServiceProviders:s.Yj(),internalNotesOrComments:s.Yj()}),o=s.Ik({leadName:s.Yj().required("Lead Name Is required"),leadEmail:s.Yj().email().required("Lead Email Is required"),leadPhoneNumber:s.Yj().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("Lead Phone Number Is required"),leadAddress:s.Yj().required("Lead Address Is required"),leadSource:s.Yj(),leadStatus:s.Yj(),leadSourceDetails:s.Yj(),leadCampaign:s.Yj(),leadSourceChannel:s.Yj(),leadSourceMedium:s.Yj(),leadSourceCampaign:s.Yj(),leadSourceReferral:s.Yj(),leadAssignedAgent:s.Yj(),leadOwner:s.Yj(),leadCommunicationPreferences:s.Yj(),leadCreationDate:s.p6().required("Lead Creation Date Is required"),leadConversionDate:s.p6().required("Lead Conversion Date Is required"),leadFollowUpDate:s.p6().required("lead Follow Up Date  Is required"),leadFollowUpStatus:s.Yj(),leadScore:s.ai().required("Lead Score Is required"),leadNurturingWorkflow:s.Yj(),leadEngagementLevel:s.Yj(),leadConversionRate:s.ai().required("lead Conversion Rate Is required"),leadNurturingStage:s.Yj(),leadNextAction:s.Yj()}),d=s.Ik({firstName:s.Yj().required("First Name Is required"),lastName:s.Yj(),phoneNumber:s.Yj().required("Phone Number Is required").matches(/^\d{10}$/,"Phone Number must be exactly 10 digits"),username:s.Yj().email().required("Email Is required")}),l=s.Ik({username:s.Yj().email().required("Email Is required"),password:s.Yj().required("Password Is required")}),c=s.Ik({sender:s.Yj().required("Sender Is required"),recipient:s.Yj().email().required("Recipient Is required"),cc:s.Yj().email(),bcc:s.Yj().email(),relatedToContact:s.Yj(),relatedToLead:s.Yj(),subject:s.Yj(),message:s.Yj(),createBy:s.Yj(),createByLead:s.Yj()}).test("createBy-or-createByLead-required","Recipient Is required",(function(e){if(!e.createBy&&!e.createByLead)return this.createError({path:"createBy",message:"Recipient Is required"})})),u=s.Ik().shape({folderName:s.Yj().required("Folder Name is required"),filename:s.Yj().min(2,"File Name Must Be At Least 2 Characters"),createBy:s.Yj().required()}),m=s.Ik({sender:s.Yj().required("Sender Is required"),recipient:s.ai().required("Recipient Is required"),callDuration:s.Yj(),callNotes:s.Yj(),createBy:s.Yj(),createByLead:s.Yj(),category:s.Yj()}).test("createBy-or-createByLead-required","Recipient Is required",(function(e){if(!e.createBy&&!e.createByLead)return this.createError({path:"createBy",message:"Recipient Is required"})})),j=s.Ik({sender:s.Yj().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("Sender Is required"),to:s.Yj().min(1e9,"Phone number is invalid").max(999999999999,"Phone number is invalid").required("To Is required"),message:s.Yj(),createFor:s.Yj().required("Create By Is required")}),p=s.Ik({title:s.Yj().required("Title Is required"),category:s.Yj(),description:s.Yj(),notes:s.Yj(),reminder:s.Yj(),start:s.Yj().required("Start Is required"),end:s.Yj(),backgroundColor:s.Yj(),borderColor:s.Yj(),textColor:s.Yj(),display:s.Yj(),url:s.Yj(),createBy:s.Yj()}),h=s.Ik({agenda:s.Yj().required("Agenda Is required"),attendes:s.YO().of(s.Yj().trim()),attendesLead:s.YO().of(s.Yj().trim()),location:s.Yj(),related:s.Yj(),dateTime:s.Yj().required("Date Time Is required"),notes:s.Yj(),createFor:s.Yj(),createdBy:s.Yj()})},3410:(e,r,i)=>{i.r(r),i.d(r,{default:()=>R});var s=i(5043),a=i(3216),n=i(3516),t=i(4093),o=i(5371),d=i(2107),l=i(8846),c=i(9081),u=i(3225),m=i(6668),j=i(5699),p=i(579),h=i(3033),x=i(6417),Y=i(4765),g=i(5011),y=i(5003),b=i(5158),f=i(5334);const[q,v]=(0,x.q)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),I=(0,y.R)(((e,r)=>{const i=(0,b.o)("FormError",e),s=(0,h.M)(e),a=(0,u.Uc)();return a?.isInvalid?(0,p.jsx)(q,{value:i,children:(0,p.jsx)(f.B.div,{...a?.getErrorMessageProps(s,r),className:(0,Y.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...i.text}})}):null}));I.displayName="FormErrorMessage";(0,y.R)(((e,r)=>{const i=v(),s=(0,u.Uc)();if(!s?.isInvalid)return null;const a=(0,Y.cx)("chakra-form__error-icon",e.className);return(0,p.jsx)(g.I,{ref:r,"aria-hidden":!0,...e,__css:i.icon,className:a,children:(0,p.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})})).displayName="FormErrorIcon";var k=i(5973),C=i(9244),S=i(9918),w=i(9301);function B(){(0,t.dU)("gray.400","white"),(0,t.dU)({base:"gray.400",lg:"gray.400"},"gray.400");return(0,p.jsx)(o.s,{zIndex:"3",flexDirection:{base:"column",lg:"row"},alignItems:{base:"center",xl:"start"},justifyContent:"space-between",px:{base:"30px",md:"0px"},pb:"30px"})}const N=function(e){const{children:r,illustrationBackground:i}=e;return(0,p.jsx)(o.s,{h:"max-content",children:(0,p.jsxs)(o.s,{h:{sm:"initial",md:"unset",lg:"100vh",xl:"97vh"},w:"100%",maxW:{md:"66%",lg:"1313px"},mx:"auto",pt:{sm:"50px",md:"0px"},px:{lg:"30px",xl:"0px"},ps:{xl:"70px"},justifyContent:"center",direction:"column",children:[r,(0,p.jsx)(d.a,{display:{base:"none",md:"flex"},h:"100%",minH:"100vh",w:{lg:"50vw","2xl":"44vw"},borderBottomLeftRadius:{lg:"120px",xl:"200px"},justifyContent:"center",position:"absolute",flexDirection:"column",alignItems:"center",overflow:"hidden",right:"0px"}),(0,p.jsx)(B,{})]})})};var P=i(9488);const A=i.p+"static/media/PNG-02.e61ccd0d5917f5d21528.png";var D=i(7149),L=i(2285),F=i(9621),_=i(6092),E=i(2145);const R=function(){const e=(0,t.dU)("navy.700","white"),r="gray.400",i=(0,t.dU)("brand.500","brand.400"),[h,x]=s.useState(!1),[Y,y]=s.useState(!0),[b,f]=s.useState(!1),q=(0,a.Zp)(),{errors:v,values:B,touched:R,handleBlur:M,handleChange:z,resetForm:O,handleSubmit:T}=(0,n.Wx)({initialValues:{username:"",password:""},validationSchema:_.X5,onSubmit:async()=>{await W()}}),W=async()=>{try{x(!0);const i=await(0,F.d_)("/user/login",B,Y);var e,r;if(200===(null===i||void 0===i?void 0:i.status))E.oR.success("Login Successfully!"),q("/admin"),O();else E.oR.error((null===i||void 0===i||null===(e=i.response)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.error)||"Login Failed")}catch(i){console.error(i),E.oR.error("An error occurred during login.")}finally{x(!1)}};return(0,p.jsx)(N,{illustrationBackground:A,image:A,children:(0,p.jsxs)(o.s,{maxW:{base:"100%",md:"max-content"},w:"100%",mx:{base:"auto",lg:"0px"},me:"auto",h:"fit-content",alignItems:"start",justifyContent:"center",mb:{base:"30px",md:"60px"},px:{base:"25px",md:"0px"},mt:{base:"40px",md:"14vh"},flexDirection:"column",children:[(0,p.jsxs)(d.a,{me:"auto",children:[(0,p.jsx)(l.D,{color:e,fontSize:"36px",mb:"10px",children:"Sign In"}),(0,p.jsx)(c.E,{mb:"36px",ms:"4px",color:r,fontWeight:"400",fontSize:"md",children:"Enter your email and password to sign in!"})]}),(0,p.jsx)(o.s,{zIndex:"2",direction:"column",w:{base:"100%",md:"420px"},maxW:"100%",background:"transparent",borderRadius:"15px",mx:{base:"auto",lg:"unset"},me:"auto",mb:{base:"20px",md:"auto"},children:(0,p.jsxs)("form",{onSubmit:T,children:[(0,p.jsxs)(u.MJ,{isInvalid:v.username&&R.username,mb:"24px",children:[(0,p.jsxs)(m.l,{ms:"4px",fontSize:"sm",fontWeight:"500",color:e,children:["Email",(0,p.jsx)(c.E,{color:i,children:"*"})]}),(0,p.jsx)(j.p,{fontSize:"sm",onChange:z,onBlur:M,value:B.username,name:"username",type:"email",placeholder:"mail@simmmple.com",size:"lg",borderColor:v.username&&R.username?"red.300":null}),v.username&&R.username&&(0,p.jsx)(I,{mb:"24px",children:v.username})]}),(0,p.jsxs)(u.MJ,{isInvalid:v.password&&R.password,mb:"24px",children:[(0,p.jsxs)(m.l,{ms:"4px",fontSize:"sm",fontWeight:"500",color:e,children:["Password",(0,p.jsx)(c.E,{color:i,children:"*"})]}),(0,p.jsxs)(k.M,{size:"md",children:[(0,p.jsx)(j.p,{fontSize:"sm",placeholder:"Enter Your Password",name:"password",type:b?"text":"password",value:B.password,onChange:z,onBlur:M,size:"lg",borderColor:v.password&&R.password?"red.300":null}),(0,p.jsx)(C.t,{mt:"4px",children:(0,p.jsx)(g.I,{color:r,_hover:{cursor:"pointer"},as:b?L.B6J:D.kIi,onClick:()=>f(!b)})})]}),v.password&&R.password&&(0,p.jsx)(I,{mb:"24px",children:v.password})]}),(0,p.jsx)(o.s,{justifyContent:"space-between",align:"center",mb:"24px",children:(0,p.jsxs)(u.MJ,{display:"flex",alignItems:"center",children:[(0,p.jsx)(S.S,{isChecked:Y,onChange:e=>y(e.target.checked),id:"remember-login",colorScheme:"brandScheme",me:"10px"}),(0,p.jsx)(m.l,{htmlFor:"remember-login",mb:"0",fontWeight:"normal",color:e,fontSize:"sm",children:"Keep me logged in"})]})}),(0,p.jsx)(w.$,{fontSize:"sm",variant:"brand",fontWeight:"500",w:"100%",h:"50",type:"submit",mb:"24px",isDisabled:h,children:h?(0,p.jsx)(P.A,{}):"Sign In"})]})})]})})}},9918:(e,r,i)=>{i.d(r,{S:()=>k});var s=i(579),a=i(3033),n=i(7246),t=i(3019),o=i(4765),d=i(3290),l=i(5043),c=i(6417);const[u,m]=(0,c.q)({name:"CheckboxGroupContext",strict:!1});var j=i(5334);function p(e){return(0,s.jsx)(j.B.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:(0,s.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function h(e){return(0,s.jsx)(j.B.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:(0,s.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function x(e){const{isIndeterminate:r,isChecked:i,...a}=e,n=r?h:p;return i||r?(0,s.jsx)(j.B.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,s.jsx)(n,{...a})}):null}var Y=i(4069);var g=i(5003),y=i(5158);const b={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},f={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},q=(0,d.keyframes)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),v=(0,d.keyframes)({from:{opacity:0},to:{opacity:1}}),I=(0,d.keyframes)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),k=(0,g.R)((function(e,r){const i=m(),d={...i,...e},c=(0,y.o)("Checkbox",d),u=(0,a.M)(e),{spacing:p="0.5rem",className:h,children:g,iconColor:k,iconSize:C,icon:S=(0,s.jsx)(x,{}),isChecked:w,isDisabled:B=i?.isDisabled,onChange:N,inputProps:P,...A}=u;let D=w;i?.value&&u.value&&(D=i.value.includes(u.value));let L=N;i?.onChange&&u.value&&(L=(0,n.O)(i.onChange,N));const{state:F,getInputProps:_,getCheckboxProps:E,getLabelProps:R,getRootProps:M}=(0,Y.v)({...A,isDisabled:B,isChecked:D,onChange:L}),z=function(e){const[r,i]=(0,l.useState)(e),[s,a]=(0,l.useState)(!1);return e!==r&&(a(!0),i(e)),s}(F.isChecked),O=(0,l.useMemo)((()=>({animation:z?F.isIndeterminate?`${v} 20ms linear, ${I} 200ms linear`:`${q} 200ms linear`:void 0,...c.icon,...(0,t.o)({fontSize:C,color:k})})),[k,C,z,F.isIndeterminate,c.icon]),T=(0,l.cloneElement)(S,{__css:O,isIndeterminate:F.isIndeterminate,isChecked:F.isChecked});return(0,s.jsxs)(j.B.label,{__css:{...f,...c.container},className:(0,o.cx)("chakra-checkbox",h),...M(),children:[(0,s.jsx)("input",{className:"chakra-checkbox__input",..._(P,r)}),(0,s.jsx)(j.B.span,{__css:{...b,...c.control},className:"chakra-checkbox__control",...E(),children:T}),g&&(0,s.jsx)(j.B.span,{className:"chakra-checkbox__label",...R(),__css:{marginStart:p,...c.label},children:g})]})}));k.displayName="Checkbox"}}]);
//# sourceMappingURL=9498.1d8d5bc0.chunk.js.map