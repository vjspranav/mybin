(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{123:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),s=(a(123),a(10)),o=a(23),l=a.n(o),d=a(41),j=a(72),b=a(12),h=a(76),u=a(53),g=a.n(u),O=a(2),x={},p=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("https://api.stagbin.tk/paste/get",{custom_url_code:a}).catch((function(e){window.location.href="https://stagbin.tk"}));case 2:n=e.sent,console.log(n),200===n.status&&(x=n.data,console.log(x),t(x.data)),x.isUrl&&(window.location.href=x.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function m(e){var t=e.curTheme,a=e.readOnly,n=e.language,r=e.setReadOnly,c=e.setUrl,i=[e.data,e.setData],s=i[0],o=i[1],l=Object(b.f)().id;l&&(r(!0),c(l),p(o,l));h.a;var d=Object(O.jsx)("div",{style:{overflow:"hidden"},children:Object(O.jsx)(h.b,{theme:"light"===t?"light":"vs-dark",height:"88vh",language:n,value:s,colorDecorators:"true",options:{readOnly:a},onChange:function(e,t){o(e)}})});return console.log(n),d}var v=a(18),f=a(189),y=a(190),k=a(155),w=a(182),S=a(6),C=a(188),I=a(186),F=a(198),T=a(66),U=a.n(T),N=a(187),L=a(197),B=a(65),_=a.n(B),D=a(64),E=a.n(D),R=a(63),A=a.n(R),H=a(62),z=a.n(H),J=a(61),P=a.n(J),K=a(60),M=a.n(K),W=a(191),q=a(200),V=a(193),G=a(194),Q=a(192),X=a(201),Y=a(199),Z=a(157),$=Object(w.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(1),right:e.spacing(2),minHeight:"10px"},centerItems:{justifyContent:"space-between"},urlEdit:{justifyContent:"center",marginLeft:"500px",paddingBottom:"15px"}}})),ee=Object(S.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(Z.a);function te(e){var t=e.children,a=e.window,n=$(),r=Object(I.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(O.jsx)(N.a,{in:r,children:Object(O.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root,children:t})})}function ae(e){var t=e.curTheme,a=Object(n.useState)("dark"===t),c=Object(s.a)(a,2),i=c[0],o=c[1],l=[e.url,e.setUrl],d=l[0],j=l[1],b=e.readOnly,h=e.invokeSave,u=$();return console.log(b),Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(C.a,{}),Object(O.jsx)(f.a,{style:{background:"inherit",color:"inherit"},children:Object(O.jsxs)(y.a,{className:u.centerItems,children:[Object(O.jsx)(k.a,{variant:"h6",children:"StagBIN"}),Object(O.jsxs)(W.a,{style:{marginLeft:"30px",marginTop:"0"},children:[Object(O.jsx)(q.a,{htmlFor:"custom-url",children:"URL"}),Object(O.jsx)(Q.a,{id:"custom-url",disabled:!!b,type:"text",value:d,onChange:function(e){console.log(e.target.value),j(e.target.value)},style:{color:"inherit",width:"50%"},endAdornment:b?Object(O.jsx)(V.a,{position:"end",children:Object(O.jsx)(G.a,{"aria-label":"cop",onClick:function(){navigator.clipboard.writeText("https://stagbin.tk/"+d)},children:Object(O.jsx)(M.a,{})})}):""})]}),Object(O.jsxs)("div",{style:{display:"inline-flex"},children:[Object(O.jsxs)(W.a,{className:u.margin,children:[Object(O.jsx)(q.a,{id:"demo-customized-select-label",children:"Option"}),Object(O.jsxs)(Y.a,{labelId:"demo-customized-select-label",id:"demo-customized-select",onChange:function(e){switch(e.target.value){case"save":h();break;case"new":window.location.href="https://stagbin.tk"}},input:Object(O.jsx)(ee,{}),children:[b?Object(O.jsx)(X.a,{value:"edit",children:Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(P.a,{}),Object(O.jsx)("div",{children:"Edit"})]})}):Object(O.jsx)(X.a,{value:"save",children:Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(z.a,{}),Object(O.jsx)("div",{children:"Save"})]})}),Object(O.jsx)(X.a,{value:"new",children:Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(A.a,{}),Object(O.jsx)("div",{children:"New"})]})})]})]}),Object(O.jsx)(L.a,{color:"inherit",onClick:function(){e.toggle(),o(!i)},children:i?Object(O.jsx)(E.a,{}):Object(O.jsx)(_.a,{})})]})]})}),Object(O.jsx)(y.a,{id:"back-to-top-anchor"}),Object(O.jsx)(te,Object(v.a)(Object(v.a)({},e),{},{children:Object(O.jsx)(F.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(O.jsx)(U.a,{})})}))]})}var ne=a(202),re=Object(w.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(1),right:e.spacing(2),minHeight:"10px"},centerItems:{justifyContent:"space-between"},urlEdit:{justifyContent:"center",marginLeft:"500px",paddingBottom:"15px"},formControl:{margin:e.spacing(1),minWidth:120,marginTop:"-5px",color:"inherit"},selectEmpty:{marginTop:e.spacing(2)}}}));function ce(e){var t=e.children,a=e.window,n=re(),r=Object(I.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(O.jsx)(N.a,{in:r,children:Object(O.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root,children:t})})}function ie(e){var t=e.curTheme,a=Object(n.useState)("dark"===t),c=Object(s.a)(a,2),i=c[0],o=c[1],l=[e.url,e.setUrl],d=l[0],j=l[1],b=e.readOnly;console.log(b);var h=re(),u=e.invokeSave,g=e.setLanguage;return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(C.a,{}),Object(O.jsx)(f.a,{style:{background:"inherit",color:"inherit"},children:Object(O.jsxs)(y.a,{className:h.centerItems,children:[Object(O.jsx)(k.a,{variant:"h6",children:"StagBIN"}),Object(O.jsxs)(W.a,{children:[Object(O.jsx)(q.a,{style:{color:"inherit"},htmlFor:"custom-url",children:"URL"}),Object(O.jsx)(Q.a,{id:"custom-url",type:"text",disabled:!!b,value:d,onChange:function(e){console.log(e.target.value),j(e.target.value)},style:{color:"inherit"},endAdornment:b?Object(O.jsx)(V.a,{position:"end",children:Object(O.jsx)(G.a,{"aria-label":"cop",color:"inherit",onClick:function(){navigator.clipboard.writeText("https://stagbin.tk/"+d)},children:Object(O.jsx)(M.a,{})})}):""})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)(W.a,{className:h.formControl,children:[Object(O.jsx)(q.a,{style:{color:"inherit"},id:"demo-simple-select-label",children:"Language"}),Object(O.jsxs)(Y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",style:{color:"inherit"},onChange:function(e){g(e.target.value)},children:[Object(O.jsx)(X.a,{style:{color:"inherit"},value:"javascript",children:"Javascript"}),Object(O.jsx)(X.a,{value:"python",children:"Python"}),Object(O.jsx)(X.a,{value:"go",children:"Go Lang"}),Object(O.jsx)(X.a,{value:"html",children:"HTML"}),Object(O.jsx)(X.a,{value:"css",children:"CSS"}),Object(O.jsx)(X.a,{value:"cpp",children:"C/C++"}),Object(O.jsx)(X.a,{value:"java",children:"Java"})]})]}),b?Object(O.jsx)(ne.a,{title:"Edit",children:Object(O.jsx)(G.a,{edge:"end",color:"inherit","aria-label":"Save",children:Object(O.jsx)(P.a,{})})}):Object(O.jsx)(ne.a,{title:"Save",children:Object(O.jsx)(G.a,{edge:"end",color:"inherit","aria-label":"Save",onClick:u,children:Object(O.jsx)(z.a,{})})}),Object(O.jsx)(ne.a,{title:"New Paste",children:Object(O.jsx)(G.a,{edge:"end",color:"inherit","aria-label":"Save",onClick:function(){window.location.href="https://stagbin.tk"},children:Object(O.jsx)(A.a,{})})}),Object(O.jsx)(L.a,{color:"inherit",onClick:function(){e.toggle(),o(!i)},children:i?Object(O.jsx)(E.a,{}):Object(O.jsx)(_.a,{})})]})]})}),Object(O.jsx)(y.a,{id:"back-to-top-anchor"}),Object(O.jsx)(ce,Object(v.a)(Object(v.a)({},e),{},{children:Object(O.jsx)(F.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(O.jsx)(U.a,{})})}))]})}var se=Object(w.a)((function(e){return{appBar:{bottom:0,top:"auto"},toolbar:{minHeight:"30px"}}}));function oe(e){var t=se();return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(C.a,{}),Object(O.jsx)(f.a,{position:"fixed",style:{background:"inherit",color:"inherit"},className:t.appBar,children:Object(O.jsxs)(y.a,{className:t.toolbar,children:[Object(O.jsx)("a",{href:"https://stagbin.tk",style:{color:"inherit"},children:Object(O.jsx)("small",{children:"\xa9 Copyright 2021, vjspranav"})}),Object(O.jsx)("div",{style:{margin:"8px"},children:Object(O.jsx)("a",{href:"https://github.com/vjspranav/Stagbin",style:{color:"inherit"},children:Object(O.jsx)("h4",{style:{margin:0},children:"Source"})})})]})})]})}var le,de=a(67),je=a(99),be=Object(de.b)(le||(le=Object(je.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.1s linear;\n  }\n  "])),(function(e){return e.theme.body}),(function(e){return e.theme.text})),he={body:"#FFF",text:"#363537",toggleBorder:"#FFF",background:"#363537"},ue={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"},ge=a(75),Oe=a.n(ge),xe=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("stagbin_system_id")){e.next=7;break}return e.next=4,g.a.get("https://api.stagbin.tk/paste/newSystemID");case 4:a=e.sent,t=a.data.system_id,localStorage.setItem("stagbin_system_id",t);case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(d.a)(l.a.mark((function e(t,a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(function(e){return encodeURI(e).split(/%..|./).length-1}(t)/1048576>5)){e.next=5;break}return alert("Cannot save data larger than 5mb"),e.abrupt("return");case 5:return e.next=7,g.a.post("https://api.stagbin.tk/paste/new",{data:t,system_id:n,custom_url_code:a});case 7:200===(r=e.sent).status?(navigator.clipboard.writeText(r.data.shortUrl),alert("Url copied to clipboard"),window.location.href=r.data.shortUrl):(console.log(r.status),console.log(r.data));case 9:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();var me=function(){var e=localStorage.getItem("stagbin_theme"),t=Object(n.useState)(e||"light"),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),h=o[0],u=o[1],g=Object(n.useState)("python"),x=Object(s.a)(g,2),p=x[0],v=x[1],f=Object(n.useState)(""),y=Object(s.a)(f,2),k=y[0],w=y[1],S=Object(n.useState)("//Enter text and press ctrl + s to save, this also acts as a url shortner if you paste a http(s) url instead"),C=Object(s.a)(S,2),I=C[0],F=C[1],T=function(){c("light"===r?"dark":"light"),localStorage.setItem("stagbin_theme","light"===r?"dark":"light")},U=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=String.fromCharCode(t.which).toLowerCase(),t.ctrlKey&&"s"===a&&(t.preventDefault(),N()),t.metaKey&&"s"===a&&(t.preventDefault(),console.log("Cmd + S pressed"),N());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe();case 2:t=e.sent,pe(I,k,t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(de.a,{theme:"light"===r?he:ue,children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(be,{}),Object(O.jsx)("div",{onKeyDown:U,className:"App",style:{},children:Object(O.jsxs)(j.a,{basename:"",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(Oe.a,{maxWidth:480,children:Object(O.jsx)(ae,{toggle:T,readOnlyToggle:u,readOnly:h,curTheme:r,isEditing:!0,url:k,setUrl:w,invokeSave:N})}),Object(O.jsx)(Oe.a,{minWidth:480,children:Object(O.jsx)(ie,{toggle:T,readOnly:h,readOnlyToggle:u,curTheme:r,isEditing:!0,url:k,setUrl:w,invokeSave:N,setLanguage:v})})]}),Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{exact:!0,path:"/",children:Object(O.jsx)(m,{curTheme:r,readOnly:h,setReadOnly:u,url:k,setUrl:w,data:I,setData:F,invokeSave:N,language:p})}),Object(O.jsx)(b.a,{path:"/:id",children:Object(O.jsx)(m,{curTheme:r,readOnly:h,setReadOnly:u,url:k,setUrl:w,data:I,setData:F,language:p})})]}),Object(O.jsx)("div",{children:Object(O.jsx)(oe,{curTheme:r})})]})})]})})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,203)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(me,{})}),document.getElementById("root")),ve()}},[[152,1,2]]]);
//# sourceMappingURL=main.8ff3c535.chunk.js.map