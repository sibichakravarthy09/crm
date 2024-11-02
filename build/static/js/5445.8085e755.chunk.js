"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[5445],{9465:(e,l,a)=>{a.r(l),a.d(l,{default:()=>pe});var n=a(5874),d=a(7492),o=a(9973),i=a(8584),s=a(6870),r=a(5371),t=a(3533),c=a(5527),u=a(9883),m=a(6236),h=a(9301),x=a(7639),p=a(1872),S=a(3560),j=a(3109),g=a(1411),f=a(4566),v=a(1794),b=a(227),E=a(2107),C=a(8846),A=a(9081),N=a(202),D=a(962),z=a(216),W=a(3994),L=a(9488),w=a(2770),k=a(6178),y=a.n(k),F=a(5043),R=a(2127),B=a(4960),U=a(3784),P=a(3216),O=a(5475),M=a(2145),H=a(9621),I=a(3278),$=a(4406),T=a(6),_=a(6654),q=a(618),K=a(9250),V=a(1538),J=a(7930),Y=a(4799),Z=a(2417),G=a(7575),Q=a(7467),X=a(3935),ee=a(1054),le=a(9542),ae=a(5071),ne=a(2703),de=a(7516),oe=a(6668),ie=a(5699),se=a(5973),re=a(9244),te=a(1724),ce=a(6529),ue=a(3516),me=a(6092),he=a(579);const xe=e=>{const[l,a]=(0,F.useState)(!1),n={leadName:"",leadEmail:"",leadPhoneNumber:"",leadAddress:"",leadSource:"",leadStatus:"",leadSourceDetails:"",leadCampaign:"",leadSourceChannel:"",leadSourceMedium:"",leadSourceCampaign:"",leadSourceReferral:"",leadAssignedAgent:"",leadOwner:"",leadCommunicationPreferences:"",leadCreationDate:"",leadConversionDate:"",leadFollowUpDate:"",leadFollowUpStatus:"",leadScore:"",leadNurturingWorkflow:"",leadEngagementLevel:"",leadConversionRate:"",leadNurturingStage:"",leadNextAction:"",createBy:JSON.parse(localStorage.getItem("user"))._id},d=(0,P.g)(),o=(0,ue.Wx)({initialValues:n,validationSchema:me.aq,onSubmit:(e,l)=>{let{resetForm:a}=l;S()}}),{errors:i,touched:s,values:r,handleBlur:u,handleChange:m,handleSubmit:x,setFieldValue:p}=o,S=async()=>{try{a(!0),200===(await(0,H.yP)(`api/lead/edit/${d.id}`,r)).status&&e.onClose()}catch(l){console.log(l)}finally{a(!1)}},j=()=>{e.onClose(!1)};let g;return(0,F.useEffect)((()=>{(async()=>{var e,l,a,n,o,i,s,t,c,u,m,h,x,p,S,j,f,v,b,E,C,A,N,D,z,W,L,w,k,y,F,R,B,U,P,O,M,I,$,T,_,q,K,V,J,Y,Z,G,Q,X;g=await(0,H.x4)("api/lead/view/",d.id),r.leadName=null===(e=g)||void 0===e||null===(l=e.data)||void 0===l?void 0:l.leadName,r.leadEmail=null===(a=g)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.leadEmail,r.leadPhoneNumber=null===(o=g)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.leadPhoneNumber,r.leadAddress=null===(s=g)||void 0===s||null===(t=s.data)||void 0===t?void 0:t.leadAddress,r.leadSource=null===(c=g)||void 0===c||null===(u=c.data)||void 0===u?void 0:u.leadSource,r.leadStatus=null===(m=g)||void 0===m||null===(h=m.data)||void 0===h?void 0:h.leadStatus,r.leadSourceDetails=null===(x=g)||void 0===x||null===(p=x.data)||void 0===p?void 0:p.leadSourceDetails,r.leadCampaign=null===(S=g)||void 0===S||null===(j=S.data)||void 0===j?void 0:j.leadCampaign,r.leadSourceChannel=null===(f=g)||void 0===f||null===(v=f.data)||void 0===v?void 0:v.leadSourceChannel,r.leadSourceMedium=null===(b=g)||void 0===b||null===(E=b.data)||void 0===E?void 0:E.leadSourceMedium,r.leadSourceCampaign=null===(C=g)||void 0===C||null===(A=C.data)||void 0===A?void 0:A.leadSourceCampaign,r.leadSourceReferral=null===(N=g)||void 0===N||null===(D=N.data)||void 0===D?void 0:D.leadSourceReferral,r.leadAssignedAgent=null===(z=g)||void 0===z||null===(W=z.data)||void 0===W?void 0:W.leadAssignedAgent,r.leadOwner=null===(L=g)||void 0===L||null===(w=L.data)||void 0===w?void 0:w.leadOwner,r.leadCommunicationPreferences=null===(k=g)||void 0===k||null===(y=k.data)||void 0===y?void 0:y.leadCommunicationPreferences,r.leadCreationDate=null===(F=g)||void 0===F||null===(R=F.data)||void 0===R?void 0:R.leadCreationDate,r.leadConversionDate=null===(B=g)||void 0===B||null===(U=B.data)||void 0===U?void 0:U.leadConversionDate,r.leadFollowUpDate=null===(P=g)||void 0===P||null===(O=P.data)||void 0===O?void 0:O.leadFollowUpDate,r.leadFollowUpStatus=null===(M=g)||void 0===M||null===(I=M.data)||void 0===I?void 0:I.leadFollowUpStatus,r.leadScore=null===($=g)||void 0===$||null===(T=$.data)||void 0===T?void 0:T.leadScore,r.leadNurturingWorkflow=null===(_=g)||void 0===_||null===(q=_.data)||void 0===q?void 0:q.leadNurturingWorkflow,r.leadEngagementLevel=null===(K=g)||void 0===K||null===(V=K.data)||void 0===V?void 0:V.leadEngagementLevel,r.leadConversionRate=null===(J=g)||void 0===J||null===(Y=J.data)||void 0===Y?void 0:Y.leadConversionRate,r.leadNurturingStage=null===(Z=g)||void 0===Z||null===(G=Z.data)||void 0===G?void 0:G.leadNurturingStage,r.leadNextAction=null===(Q=g)||void 0===Q||null===(X=Q.data)||void 0===X?void 0:X.leadNextAction})()}),[]),(0,he.jsx)("div",{children:(0,he.jsxs)(X._s,{isOpen:e.isOpen,size:e.size,children:[(0,he.jsx)(ee.m,{}),(0,he.jsxs)(le.z,{children:[(0,he.jsxs)(ae.r,{justifyContent:"space-between",display:"flex",children:["Edit leads",(0,he.jsx)(ne.K,{onClick:j,icon:(0,he.jsx)(G.U,{})})]}),(0,he.jsx)(de.c,{children:(0,he.jsxs)(t.x,{templateColumns:"repeat(12, 1fr)",gap:3,children:[(0,he.jsx)(c.E,{colSpan:{base:12},children:(0,he.jsx)(C.D,{as:"h1",size:"md",children:"1. Basic Lead Information"})}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsxs)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Lead Name",(0,he.jsx)(A.E,{color:"red",children:"*"})]}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadName,name:"leadName",placeholder:"Enter Lead Name",fontWeight:"500",borderColor:i.leadName&&s.leadName?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadName&&s.leadName&&i.leadName]})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsxs)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Lead Email",(0,he.jsx)(A.E,{color:"red",children:"*"})]}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadEmail,type:"email",name:"leadEmail",placeholder:"mail@simmmple.com",fontWeight:"500",borderColor:i.leadEmail&&s.leadEmail?"red.300":null}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadEmail&&s.leadEmail&&i.leadEmail})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsxs)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Lead Phone Number",(0,he.jsx)(A.E,{color:"red",children:"*"})]}),(0,he.jsxs)(se.M,{children:[(0,he.jsx)(re.W,{pointerEvents:"none",children:(0,he.jsx)(Q.E,{color:"gray.300",borderRadius:"16px"})}),(0,he.jsx)(ie.p,{type:"tel",fontSize:"sm",onChange:m,onBlur:u,value:r.leadPhoneNumber,name:"leadPhoneNumber",fontWeight:"500",borderColor:i.title&&s.title?"red.300":null,placeholder:"Phone number",borderRadius:"16px"})]}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadPhoneNumber&&s.leadPhoneNumber&&i.leadPhoneNumber})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsxs)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:["Lead Address",(0,he.jsx)(A.E,{color:"red",children:"*"})]}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadAddress,name:"leadAddress",placeholder:"Enter Lead Address",fontWeight:"500",borderColor:i.leadAddress&&s.leadAddress?"red.300":null}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadAddress&&s.leadAddress&&i.leadAddress})]}),(0,he.jsxs)(c.E,{colSpan:{base:12},children:[(0,he.jsx)(W.E,{}),(0,he.jsx)(C.D,{mt:2,as:"h1",size:"md",children:"2. Lead Source and Details"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Source"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadSource,name:"leadSource",placeholder:"Enter Lead Source",fontWeight:"500",borderColor:i.leadSource&&s.leadSource?"red.300":null}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadSource&&s.leadSource&&i.leadSource})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Status"}),(0,he.jsxs)(te.l,{value:r.leadStatus,name:"leadStatus",onChange:m,fontWeight:"500",placeholder:"Select Lead Source",borderColor:i.leadStatus&&s.leadStatus?"red.300":null,children:[(0,he.jsx)("option",{value:"active",children:"active"}),(0,he.jsx)("option",{value:"pending",children:"pending"}),(0,he.jsx)("option",{value:"sold",children:"sold"})]}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadStatus&&s.leadStatus&&i.leadStatus})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Source Details"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadSourceDetails,name:"leadSourceDetails",placeholder:"Enter Lead Source Details",fontWeight:"500",borderColor:i.leadSourceDetails&&s.leadSourceDetails?"red.300":null}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadSourceDetails&&s.leadSourceDetails&&i.leadSourceDetails})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Campaign"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadCampaign,name:"leadCampaign",placeholder:"Enter Lead Campaign",fontWeight:"500",borderColor:i.leadCampaign&&s.leadCampaign?"red.300":null}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadCampaign&&s.leadCampaign&&i.leadCampaign})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Source Channel"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadSourceChannel,name:"leadSourceChannel",placeholder:"Enter Lead Source Channel",fontWeight:"500",borderColor:i.leadSourceChannel&&s.leadSourceChannel?"red.300":null}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadSourceChannel&&s.leadSourceChannel&&i.leadSourceChannel})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Source Medium"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadSourceMedium,name:"leadSourceMedium",placeholder:"Enter Lead Source Medium",fontWeight:"500",borderColor:i.leadSourceMedium&&s.leadSourceMedium?"red.300":null}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadSourceMedium&&s.leadSourceMedium&&i.leadSourceMedium})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"lead Source Campaign"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadSourceCampaign,name:"leadSourceCampaign",placeholder:"Enter lead Source Campaign",fontWeight:"500",borderColor:i.leadSourceCampaign&&s.leadSourceCampaign?"red.300":null}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadSourceCampaign&&s.leadSourceCampaign&&i.leadSourceCampaign})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Source Referral"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadSourceReferral,name:"leadSourceReferral",placeholder:"Enter Lead Source Referral",fontWeight:"500",borderColor:i.leadSourceReferral&&s.leadSourceReferral?"red.300":null}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadSourceReferral&&s.leadSourceReferral&&i.leadSourceReferral})]}),(0,he.jsxs)(c.E,{colSpan:{base:12},children:[(0,he.jsx)(W.E,{}),(0,he.jsx)(C.D,{mt:2,as:"h1",size:"md",children:"3. Lead Assignment and Ownership"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Assigned Agent"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadAssignedAgent,name:"leadAssignedAgent",placeholder:"Enter Lead Assigned Agent",fontWeight:"500",borderColor:i.leadAssignedAgent&&s.leadAssignedAgent?"red.300":null}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadAssignedAgent&&s.leadAssignedAgent&&i.leadAssignedAgent})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Owner"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadOwner,name:"leadOwner",placeholder:"Enter Lead Owner",fontWeight:"500",borderColor:i.leadOwner&&s.leadOwner?"red.300":"none"}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadOwner&&s.leadOwner&&i.leadOwner})]}),(0,he.jsxs)(c.E,{colSpan:{base:12},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Communication Preferences"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadCommunicationPreferences,name:"leadCommunicationPreferences",placeholder:"Enter Lead Communication Preferences",fontWeight:"500",borderColor:i.leadCommunicationPreferences&&s.leadCommunicationPreferences?"red.300":"none"}),(0,he.jsx)(A.E,{mb:"10px",color:"red",children:i.leadCommunicationPreferences&&s.leadCommunicationPreferences&&i.leadCommunicationPreferences})]}),(0,he.jsxs)(c.E,{colSpan:{base:12},children:[(0,he.jsx)(W.E,{}),(0,he.jsx)(C.D,{mt:2,as:"h1",size:"md",children:"4. Lead Dates and Follow-up"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Creation Date"}),(0,he.jsx)(ie.p,{type:"date",fontSize:"sm",onChange:m,onBlur:u,value:r.leadCreationDate,name:"leadCreationDate",fontWeight:"500",borderColor:i.leadCreationDate&&s.leadCreationDate?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadCreationDate&&s.leadCreationDate&&i.leadCreationDate]})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Conversion Date"}),(0,he.jsx)(ie.p,{type:"date",fontSize:"sm",onChange:m,onBlur:u,value:r.leadConversionDate,name:"leadConversionDate",fontWeight:"500",borderColor:i.leadConversionDate&&s.leadConversionDate?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadConversionDate&&s.leadConversionDate&&i.leadConversionDate]})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead FollowUp Date"}),(0,he.jsx)(ie.p,{type:"date",fontSize:"sm",onChange:m,onBlur:u,value:r.leadFollowUpDate,name:"leadFollowUpDate",fontWeight:"500",borderColor:i.leadFollowUpDate&&s.leadFollowUpDate?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadFollowUpDate&&s.leadFollowUpDate&&i.leadFollowUpDate]})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead FollowUp Status"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadFollowUpStatus,name:"leadFollowUpStatus",placeholder:"lead FollowUp Status",fontWeight:"500",borderColor:i.leadFollowUpStatus&&s.leadFollowUpStatus?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadFollowUpStatus&&s.leadFollowUpStatus&&i.leadFollowUpStatus]})]}),(0,he.jsxs)(c.E,{colSpan:{base:12},children:[(0,he.jsx)(W.E,{}),(0,he.jsx)(C.D,{mt:2,as:"h1",size:"md",children:"5. Lead Scoring and Nurturing"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Score"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadScore,name:"leadScore",placeholder:"lead Score",type:"number",fontWeight:"500",borderColor:i.leadScore&&s.leadScore?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadScore&&s.leadScore&&i.leadScore]})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Nurturing Workflow"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadNurturingWorkflow,name:"leadNurturingWorkflow",placeholder:" lead Nurturing Workflow",fontWeight:"500",borderColor:i.leadNurturingWorkflow&&s.leadNurturingWorkflow?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadNurturingWorkflow&&s.leadNurturingWorkflow&&i.leadNurturingWorkflow]})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Engagement Level"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadEngagementLevel,name:"leadEngagementLevel",placeholder:"Lead Engagement Level",fontWeight:"500",borderColor:i.leadEngagementLevel&&s.leadEngagementLevel?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadEngagementLevel&&s.leadEngagementLevel&&i.leadEngagementLevel]})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Conversion Rate"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadConversionRate,name:"leadConversionRate",type:"number",placeholder:"Lead Conversion Rate",fontWeight:"500",borderColor:i.leadConversionRate&&s.leadConversionRate?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadConversionRate&&s.leadConversionRate&&i.leadConversionRate]})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Nurturing Stage"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadNurturingStage,name:"leadNurturingStage",placeholder:"lead Nurturing Stage",fontWeight:"500",borderColor:i.leadNurturingStage&&s.leadNurturingStage?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadNurturingStage&&s.leadNurturingStage&&i.leadNurturingStage]})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,sm:6},children:[(0,he.jsx)(oe.l,{display:"flex",ms:"4px",fontSize:"sm",fontWeight:"500",mb:"8px",children:"Lead Next Action"}),(0,he.jsx)(ie.p,{fontSize:"sm",onChange:m,onBlur:u,value:r.leadNextAction,name:"leadNextAction",placeholder:"Lead Next Action",fontWeight:"500",borderColor:i.leadNextAction&&s.leadNextAction?"red.300":null}),(0,he.jsxs)(A.E,{mb:"10px",color:"red",children:[" ",i.leadNextAction&&s.leadNextAction&&i.leadNextAction]})]})]})}),(0,he.jsxs)(ce.j,{children:[(0,he.jsx)(h.$,{sx:{textTransform:"capitalize"},variant:"solid",colorScheme:"green",type:"submit",disabled:!!l,onClick:x,children:l?(0,he.jsx)(L.A,{}):"Update Data"}),(0,he.jsx)(h.$,{variant:"outline",colorScheme:"red",sx:{marginLeft:2,textTransform:"capitalize"},onClick:j,children:"Cancel"})]})]})]})})},pe=()=>{var e,l,a,k,G,Q;const X=(0,P.g)(),[ee,le]=(0,F.useState)(),[ae,ne]=(0,F.useState)([]),{isOpen:de,onOpen:oe,onClose:ie}=(0,s.j)(),[se,re]=(0,F.useState)(!1),[te,ce]=(0,F.useState)(!1),[ue,me]=(0,F.useState)(!1),[pe,Se]=(0,F.useState)(!1),[je,ge]=(0,F.useState)(!1),[fe,ve]=(0,F.useState)(!1),[be,Ee]=(0,F.useState)(!1),Ce=[{Header:"sender",accessor:"senderName"},{Header:"recipient",accessor:"createByName"},{Header:"time stamp",accessor:"timestamp"},{Header:"Created",accessor:"createBy"}],Ae=async e=>{if(e){let l=await(0,H.x4)("api/document/download/",e);l&&200===l.status?(window.open(`${w.d.baseUrl}api/document/download/${e}`),M.oR.success("file Download successful")):l&&404===l.response.status&&M.oR.error("file Not Found")}},Ne=async()=>{var e;me(!0);let l=await(0,H.x4)("api/lead/view/",X.id);le(null===(e=l.data)||void 0===e?void 0:e.lead),ne(l.data),me(!1)};return(0,F.useEffect)((()=>{Ne()}),[se,fe,be]),(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(Y.A,{isOpen:de,size:"lg",onClose:ie}),(0,he.jsx)(xe,{isOpen:se,size:"lg",onClose:re}),(0,he.jsx)(Z.A,{isOpen:te,onClose:ce,method:"one",url:"api/lead/delete/",id:X.id}),ue?(0,he.jsx)(r.s,{justifyContent:"center",alignItems:"center",width:"100%",children:(0,he.jsx)(L.A,{})}):(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(t.x,{templateColumns:"repeat(6, 1fr)",mb:3,gap:1,children:(0,he.jsx)(c.E,{colStart:6,children:(0,he.jsxs)(r.s,{justifyContent:"right",children:[(0,he.jsxs)(u.W,{children:[(0,he.jsx)(m.I,{variant:"outline",colorScheme:"blackAlpha",va:!0,mr:2.5,as:h.$,rightIcon:(0,he.jsx)(n.D,{}),children:"Actions"}),(0,he.jsx)(x.N,{}),(0,he.jsxs)(p.c,{children:[(0,he.jsx)(S.D,{onClick:()=>oe(),icon:(0,he.jsx)(d.R,{}),children:"Add"}),(0,he.jsx)(S.D,{onClick:()=>re(!0),icon:(0,he.jsx)(o.q,{}),children:"Edit"}),(0,he.jsx)(x.N,{}),(0,he.jsx)(S.D,{onClick:()=>ce(!0),icon:(0,he.jsx)(i.d,{}),children:"Delete"})]})]}),(0,he.jsx)(O.N_,{to:"/lead",children:(0,he.jsx)(h.$,{leftIcon:(0,he.jsx)(B.m6W,{}),variant:"brand",children:"Back"})})]})})}),(0,he.jsxs)(j.t,{children:[(0,he.jsxs)(g.w,{sx:{"& button:focus":{boxShadow:"none"}},children:[(0,he.jsx)(f.o,{children:"Information"}),(0,he.jsx)(f.o,{children:"Activity"}),(0,he.jsx)(f.o,{children:"Document"})]}),(0,he.jsxs)(v.T,{children:[(0,he.jsx)(b.K,{pt:4,p:0,children:(0,he.jsxs)(t.x,{templateColumns:"repeat(12, 1fr)",gap:3,children:[(0,he.jsx)(c.E,{colSpan:{base:12,md:6},children:(0,he.jsx)(z.A,{children:(0,he.jsxs)(t.x,{templateColumns:"repeat(12, 1fr)",gap:4,children:[(0,he.jsx)(c.E,{colSpan:12,children:(0,he.jsxs)(E.a,{children:[(0,he.jsx)(C.D,{size:"md",mb:3,children:"Basic Lead Information"}),(0,he.jsx)(W.E,{})]})}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Name"}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadName?null===ee||void 0===ee?void 0:ee.leadName:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Email"}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadEmail?null===ee||void 0===ee?void 0:ee.leadEmail:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Phone Number"}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadPhoneNumber?null===ee||void 0===ee?void 0:ee.leadPhoneNumber:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Address"}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadAddress?null===ee||void 0===ee?void 0:ee.leadAddress:"N/A"})]})]})})}),(0,he.jsx)(c.E,{colSpan:{base:12,md:6},children:(0,he.jsx)(z.A,{children:(0,he.jsxs)(t.x,{templateColumns:"repeat(12, 1fr)",gap:4,children:[(0,he.jsx)(c.E,{colSpan:12,children:(0,he.jsxs)(E.a,{children:[(0,he.jsx)(C.D,{size:"md",mb:3,children:"Lead Assignment and Ownership"}),(0,he.jsx)(W.E,{})]})}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Assigned Agent"}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadAssignedAgent?null===ee||void 0===ee?void 0:ee.leadAssignedAgent:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Assigned Agent"}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadAssignedAgent?null===ee||void 0===ee?void 0:ee.leadAssignedAgent:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Communication Preferences"}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadCommunicationPreferences?null===ee||void 0===ee?void 0:ee.leadCommunicationPreferences:"N/A"})]})]})})}),(0,he.jsx)(c.E,{colSpan:{base:12,md:6},children:(0,he.jsx)(z.A,{children:(0,he.jsxs)(t.x,{templateColumns:"repeat(12, 1fr)",gap:4,children:[(0,he.jsx)(c.E,{colSpan:12,children:(0,he.jsxs)(E.a,{children:[(0,he.jsx)(C.D,{size:"md",mb:3,children:"Lead Source and Details"}),(0,he.jsx)(W.E,{})]})}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Source "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadSource?null===ee||void 0===ee?void 0:ee.leadSource:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Status "}),(0,he.jsx)(A.E,{textTransform:"capitalize",children:null!==ee&&void 0!==ee&&ee.leadStatus?(De=null===ee||void 0===ee?void 0:ee.leadStatus,null===De||void 0===De?void 0:De.replace(/([a-z])([A-Z])/g,"$1 $2")):"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Source Details "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadSourceDetails?null===ee||void 0===ee?void 0:ee.leadSourceDetails:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Campaign "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadCampaign?null===ee||void 0===ee?void 0:ee.leadCampaign:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Source Channel "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadSourceChannel?null===ee||void 0===ee?void 0:ee.leadSourceChannel:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Source Medium "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadSourceMedium?null===ee||void 0===ee?void 0:ee.leadSourceMedium:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Source Campaign "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadSourceCampaign?null===ee||void 0===ee?void 0:ee.leadSourceCampaign:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Source Referral "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadSourceReferral?null===ee||void 0===ee?void 0:ee.leadSourceReferral:"N/A"})]})]})})}),(0,he.jsx)(c.E,{colSpan:{base:12,md:6},children:(0,he.jsx)(z.A,{children:(0,he.jsxs)(t.x,{templateColumns:"repeat(12, 1fr)",gap:4,children:[(0,he.jsx)(c.E,{colSpan:12,children:(0,he.jsxs)(E.a,{children:[(0,he.jsx)(C.D,{size:"md",mb:3,children:"Lead Dates and Follow-up"}),(0,he.jsx)(W.E,{})]})}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead FollowUp Status "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadFollowUpStatus?null===ee||void 0===ee?void 0:ee.leadFollowUpStatus:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Creation Date "}),(0,he.jsx)(A.E,{children:y()(null===ee||void 0===ee?void 0:ee.leadCreationDate).format("L")})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Conversion Date "}),(0,he.jsx)(A.E,{children:y()(null===ee||void 0===ee?void 0:ee.leadConversionDate).format("L")})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:"  Lead FollowUp Date "}),(0,he.jsx)(A.E,{children:y()(null===ee||void 0===ee?void 0:ee.leadFollowUpDate).format("L")})]})]})})}),(0,he.jsx)(c.E,{colSpan:{base:12},children:(0,he.jsx)(z.A,{children:(0,he.jsxs)(t.x,{templateColumns:"repeat(12, 1fr)",gap:4,children:[(0,he.jsx)(c.E,{colSpan:12,children:(0,he.jsxs)(E.a,{children:[(0,he.jsx)(C.D,{size:"md",mb:3,children:"Lead Scoring and Nurturing"}),(0,he.jsx)(W.E,{})]})}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Score "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadScore?null===ee||void 0===ee?void 0:ee.leadScore:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Nurturing Workflow "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadNurturingWorkflow?null===ee||void 0===ee?void 0:ee.leadNurturingWorkflow:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Engagement Level "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadEngagementLevel?null===ee||void 0===ee?void 0:ee.leadEngagementLevel:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Conversion Rate "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadConversionRate?null===ee||void 0===ee?void 0:ee.leadConversionRate:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Nurturing Stage "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadNurturingStage?null===ee||void 0===ee?void 0:ee.leadNurturingStage:"N/A"})]}),(0,he.jsxs)(c.E,{colSpan:{base:12,md:6},children:[(0,he.jsx)(A.E,{color:"blackAlpha.900",fontSize:"sm",fontWeight:"bold",children:" Lead Next Action "}),(0,he.jsx)(A.E,{children:null!==ee&&void 0!==ee&&ee.leadNextAction?null===ee||void 0===ee?void 0:ee.leadNextAction:"N/A"})]})]})})})]})}),(0,he.jsx)(b.K,{pt:4,p:0,children:(0,he.jsx)(c.E,{colSpan:{base:4},children:(0,he.jsx)(z.A,{children:(0,he.jsxs)(t.x,{overflow:"hidden",templateColumns:{base:"1fr"},gap:4,children:[(0,he.jsx)(c.E,{colSpan:2,children:(0,he.jsxs)(E.a,{children:[(0,he.jsx)(C.D,{size:"md",mb:3,children:"Communication"}),(0,he.jsx)(W.E,{})]})}),(0,he.jsxs)(t.x,{templateColumns:"repeat(2, 1fr)",gap:4,children:[(0,he.jsxs)(c.E,{colSpan:{base:2},children:[null!==ae&&void 0!==ae&&ae.Email&&null!==ae&&void 0!==ae&&null!==(e=ae.Email)&&void 0!==e&&e.length?(0,he.jsx)(I.A,{fetchData:Ne,columnsData:Ce,lead:"true",tableData:ae.Email,title:"Email "}):(0,he.jsx)(h.$,{onClick:()=>ve(!0),leftIcon:(0,he.jsx)(R.qYP,{}),colorScheme:"gray",children:"Send Email "}),(0,he.jsx)(T.A,{fetchData:Ne,isOpen:fe,onClose:ve,data:null===ee||void 0===ee?void 0:ee.contact,lead:"true",id:X.id})]}),(0,he.jsxs)(c.E,{colSpan:{base:2},children:[(null===ae||void 0===ae||null===(l=ae.phoneCall)||void 0===l?void 0:l.length)>0?(0,he.jsx)($.A,{fetchData:Ne,columnsData:Ce,lead:"true",tableData:null===ae||void 0===ae?void 0:ae.phoneCall,title:"Call "}):(0,he.jsx)(h.$,{onClick:()=>Ee(!0),leftIcon:(0,he.jsx)(R.s91,{}),colorScheme:"gray",children:" Call "}),(0,he.jsx)(K.A,{fetchData:Ne,isOpen:be,onClose:Ee,data:null===ee||void 0===ee?void 0:ee.contact,id:X.id,lead:"true"})]}),(0,he.jsxs)(c.E,{colSpan:{base:2},children:[(null===ae||void 0===ae||null===(a=ae.task)||void 0===a?void 0:a.length)>0?(0,he.jsx)(V.A,{className:"table-container",setTaskModel:Se,fetchData:Ne,columnsData:[{Header:"#",accessor:"_id",isSortable:!1,width:5},{Header:"Title",accessor:"title"},{Header:"Category",accessor:"category"},{Header:"Assignment To",accessor:"assignmentToName"},{Header:"Start Date",accessor:"start"},{Header:"End Date",accessor:"end"}],data:null===ae||void 0===ae?void 0:ae.task,title:"Task "}):(0,he.jsx)(h.$,{onClick:()=>Se(!0),leftIcon:(0,he.jsx)(d.R,{}),colorScheme:"gray",children:"Create Task"}),(0,he.jsx)(J.A,{fetchData:Ne,isOpen:pe,onClose:Se,from:"lead",id:X.id})]}),(0,he.jsxs)(c.E,{colSpan:{base:2},children:[(null===ae||void 0===ae||null===(k=ae.meeting)||void 0===k?void 0:k.length)>0?(0,he.jsx)(q.A,{className:"table-container",setMeeting:ge,fetchData:Ne,columnsData:[{Header:"#",accessor:"_id",isSortable:!1,width:10},{Header:"agenda",accessor:"agenda"},{Header:"date Time",accessor:"dateTime"},{Header:"times tamp",accessor:"timestamp"},{Header:"create By",accessor:"createdByName"}],data:null===ae||void 0===ae?void 0:ae.meeting,title:"meeting "}):(0,he.jsx)(h.$,{onClick:()=>ge(!0),leftIcon:(0,he.jsx)(U.xwM,{}),colorScheme:"gray",children:"Add Meeting "}),(0,he.jsx)(_.A,{fetchData:Ne,isOpen:je,onClose:ge,from:"lead",id:X.id})]})]})]})})})}),(0,he.jsx)(b.K,{pt:4,p:0,children:(0,he.jsx)(c.E,{colSpan:{base:4},children:(0,he.jsxs)(z.A,{minH:"50vh",children:[(0,he.jsx)(C.D,{size:"lg",mb:4,children:"Documents"}),(0,he.jsx)(W.E,{}),(0,he.jsx)(N.T,{mt:4,alignItems:"flex-start",children:(null===ae||void 0===ae||null===(G=ae.Document)||void 0===G?void 0:G.length)>0?null===ae||void 0===ae||null===(Q=ae.Document)||void 0===Q?void 0:Q.map((e=>{var l;return(0,he.jsx)(D.A,{name:e.folderName,item:e,children:null===e||void 0===e||null===(l=e.files)||void 0===l?void 0:l.map((e=>(0,he.jsx)(D.A,{download:Ae,data:e,name:e.fileName,isFile:!0,from:"lead"})))})})):(0,he.jsx)(A.E,{children:" No Documents Found"})})]})})})]})]}),(0,he.jsx)(z.A,{mt:3,children:(0,he.jsx)(t.x,{templateColumns:"repeat(6, 1fr)",gap:1,children:(0,he.jsx)(c.E,{colStart:6,children:(0,he.jsxs)(r.s,{justifyContent:"right",children:[(0,he.jsx)(h.$,{onClick:()=>re(!0),leftIcon:(0,he.jsx)(o.q,{}),mr:2.5,variant:"outline",colorScheme:"green",children:"Edit"}),(0,he.jsx)(h.$,{style:{background:"red.800"},onClick:()=>ce(!0),leftIcon:(0,he.jsx)(i.d,{}),colorScheme:"red",children:"Delete"})]})})})})]})]});var De}},7212:(e,l,a)=>{a.d(l,{i:()=>o});var n=a(5043),d=a(940);function o(e){const{value:l,defaultValue:a,onChange:o,shouldUpdate:i=(e,l)=>e!==l}=e,s=(0,d.c)(o),r=(0,d.c)(i),[t,c]=(0,n.useState)(a),u=void 0!==l,m=u?l:t,h=(0,d.c)((e=>{const l="function"===typeof e?e(m):e;r(m,l)&&(u||c(l),s(l))}),[u,s,m,r]);return[m,h]}}}]);
//# sourceMappingURL=5445.8085e755.chunk.js.map