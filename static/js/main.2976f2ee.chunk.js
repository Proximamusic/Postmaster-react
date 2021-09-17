(this["webpackJsonpmy-tailwind-project"]=this["webpackJsonpmy-tailwind-project"]||[]).push([[0],{36:function(t,e,n){},38:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var s=n(0),o=n(29),a=n.n(o),r=(n(36),n(10)),c=n.n(r),l=n(12),i=n(8),d=n(19),u=(n(38),n(13)),m=n(1);var b=function(t){var e=t.post,n=t.id,o=Object(s.useContext)(v);return Object(m.jsx)(u.b,{to:"/post",children:Object(m.jsxs)("div",{onClick:function(){o.dispatch({type:"add-post",item:{id:n,body:e}})},className:"lg:w-max h-16 bg-blue-400 rounded-md text-lg box-content mt-5  py-3 px-6 mr-auto ml-auto shadow-lg hover:shadow-xl text-white cursor-pointer transition-all transform hover:scale-95 hover:bg-blue-500 flex items-center md:auto",children:[Object(m.jsx)("svg",{className:"w-6 h-6 transform scale-150 mr-3 hover:rotate-90 transition-all",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.slice(0,70)+"..."]})})},j=n(14),x=n.n(j),h=n(2);var p=function(t){var e=t.name,n=t.body,s=t.email;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"flex flex-col mt-9 text-xl bg-white font-mono px-10 py-7 shadow-2xl",children:[Object(m.jsxs)("span",{className:" mt-4 text-lg",children:[" ",Object(m.jsx)("label",{htmlFor:"",className:"mr-2",children:"Name:"}),e]}),Object(m.jsxs)("span",{className:" mt-4 mb-4 text-lg",children:[Object(m.jsx)("label",{htmlFor:"",className:"mr-2",children:"E-mail:"}),s]}),Object(m.jsx)("label",{htmlFor:"",className:"mr-2",children:"Comment:"}),Object(m.jsx)("q",{className:" mt-4",children:n})]})})};var O=function(){var t,e=Object(s.useState)("none"),n=Object(i.a)(e,2),o=n[0],a=n[1],r=Object(s.useState)([]),d=Object(i.a)(r,2),u=d[0],b=d[1],j=Object(s.useContext)(v),h=(null===(t=j.postState.post[0])||void 0===t?void 0:t.body)||" <= go back and click on a comment you want to open";return Object(s.useEffect)((function(){function t(){return(t=Object(l.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://jsonplaceholder.typicode.com/comments");case 2:e=t.sent,n=e.data,b(n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{onClick:function(){a("none"===o?"block":"none")},className:"w-3/4 h-28 bg-blue-500 rounded-md text-xl uppercase xs:text-base xs:h-36 md:text-xl motion-reduce:animate-bounce mt-5  py-3 px-6 mr-auto ml-auto shadow-lg hover:shadow-xl text-white cursor-pointer transition-all transform hover:scale-95 hover:bg-blue-400 flex items-center",children:h}),Object(m.jsxs)("div",{style:{display:o},className:"text-3xl",children:[Object(m.jsx)("h1",{className:"font-bold transition-all mt-11 text-2xl text-gray-500 text-center",children:"Comments On This Post"}),u.map((function(t){var e;return t.postId===(null===(e=j.postState.post[0])||void 0===e?void 0:e.id)&&Object(m.jsx)(p,{email:t.email,body:t.body,name:t.name})}))]})]})};var f=function(t){return Object(m.jsxs)("div",{className:"lg:w-3/5 mx-auto mt-8 mb-11 h-24 px-5 flex items-center justify-between  bg-white rounded-md shadow-2xl md:auto xs:w-auto ",children:[Object(m.jsx)("input",{onChange:function(e){t.setInputNumber(Number(e.target.value))},className:"h-20 rounded-md  font-bold px-2 py-3 outline-none text-2xl flex-1 xs:flex-shrink",placeholder:"Enter Number of posts",type:"number"}),Object(m.jsxs)("select",{onChange:function(e){return t.setfrom(e.target.value)},className:" font-bold mr-3 sm:w-auto",name:"Number of comments",children:[Object(m.jsx)("option",{value:"From the Start",children:"From Start"}),Object(m.jsx)("option",{value:"From the End",children:"From the End"}),Object(m.jsx)("option",{value:"All",children:"All"})]}),Object(m.jsx)("button",{onClick:function(){t.setfunc(!t.displaystate)},className:" bg-blue-500 px-6 py-4 rounded-sm transition-all hover:bg-gray-400  shadow-xl ",children:Object(m.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})},v=Object(s.createContext)(),w={post:[]},g=function(t,e){return"add-post"===e.type?Object(d.a)(Object(d.a)({},t),{},{post:[e.item]}):t};var y=function(){var t=Object(s.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],a=Object(s.useReducer)(g,w),r=Object(i.a)(a,2),d=r[0],j=r[1],p=Object(s.useState)(!1),y=Object(i.a)(p,2),k=y[0],N=y[1],C=Object(s.useState)(0),S=Object(i.a)(C,2),F=S[0],L=S[1],E=Object(s.useState)("From the Start"),M=Object(i.a)(E,2),z=M[0],B=M[1];return Object(s.useEffect)((function(){function t(){return(t=Object(l.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://jsonplaceholder.typicode.com/posts");case 2:e=t.sent,n=e.data,o(n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(m.jsx)(v.Provider,{value:{postState:d,dispatch:j},children:Object(m.jsx)(u.a,{basename:"/Postmaster-react",children:Object(m.jsx)(h.c,{children:Object(m.jsxs)("div",{className:"App p-8 bg-gray-100",children:[Object(m.jsxs)("h1",{className:"font-bold transition-all text-5xl text-gray-500 text-center relative",children:["PostMaster",Object(m.jsx)("svg",{className:"w-6 h-6 absolute inset-x-1/2 -top-5  transition-all animate-bounce transform scale-125",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})})]}),Object(m.jsxs)(h.a,{exact:!0,path:"/",children:[Object(m.jsx)(f,{setfunc:N,displaystate:k,setInputNumber:L,inputNumber:F,setfrom:B}),Object(m.jsxs)("div",{style:{display:k?"block":"none"},children:["All"===z&&n.map((function(t){return Object(m.jsx)(b,{post:t.body,id:t.id})})),"From the Start"===z?n.slice(0,F).map((function(t){return Object(m.jsx)(b,{post:t.body,id:t.id})})):n.slice(-F).map((function(t){return Object(m.jsx)(b,{post:t.body,id:t.id})}))]}),Object(m.jsxs)("svg",{style:{display:k?"none":"block"},className:"w-24 h-24 absolute transform transition-all text-gray-600 bottom-80 animate-pulse inset-x-1/2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})]}),Object(m.jsx)(h.a,{exact:!0,path:"/post",children:Object(m.jsx)(O,{})})]})})})})};a.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.2976f2ee.chunk.js.map