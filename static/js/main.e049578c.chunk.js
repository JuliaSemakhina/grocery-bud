(this.webpackJsonptours=this.webpackJsonptours||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(8),i=c.n(r),a=(c(14),c(9)),l=c(4),o=c(2),u=c(7),j=c(0),b=function(e){var t=e.items,c=e.removeItem,n=e.editItem;return Object(j.jsx)("div",{className:"grocery-list",children:t.map((function(e){var t=e.id,s=e.title;return Object(j.jsxs)("article",{className:"grocery-item",children:[Object(j.jsx)("p",{className:"title",children:s}),Object(j.jsxs)("div",{className:"btn-container",children:[Object(j.jsx)("button",{type:"button",className:"edit-btn",onClick:function(){return n(t)},children:Object(j.jsx)(u.a,{})}),Object(j.jsx)("button",{type:"button",className:"delete-btn",onClick:function(){return c(t)},children:Object(j.jsx)(u.b,{})})]})]},t)}))})},m=function(e){var t=e.msg,c=e.type,s=e.removeAlert,r=e.list;return Object(n.useEffect)((function(){var e=setTimeout((function(){s()}),3e3);return function(){return clearTimeout(e)}}),[r]),Object(j.jsx)("p",{className:"alert alert-".concat(c),children:t})},d=function(){return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]};var O=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(d),i=Object(o.a)(r,2),u=i[0],O=i[1],f=Object(n.useState)(!1),g=Object(o.a)(f,2),h=g[0],v=g[1],x=Object(n.useState)(null),p=Object(o.a)(x,2),y=p[0],N=p[1],S=Object(n.useState)({show:!1,msg:"",type:""}),I=Object(o.a)(S,2),w=I[0],k=I[1],C=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";k({show:e,type:t,msg:c})};return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(u))}),[u]),Object(j.jsxs)("section",{className:"section-center",children:[Object(j.jsxs)("form",{className:"grocery-form",onSubmit:function(e){if(e.preventDefault(),c)if(c&&h)O(u.map((function(e){return e.id===y?Object(l.a)(Object(l.a)({},e),{},{title:c}):e}))),s(""),N(null),v(!1),C(!0,"success","value changed");else{C(!0,"success","item added to the list");var t={id:(new Date).getTime().toString(),title:c};O([].concat(Object(a.a)(u),[t])),s("")}else C(!0,"danger","please enter value")},children:[w.show&&Object(j.jsx)(m,Object(l.a)(Object(l.a)({},w),{},{removeAlert:C,list:u})),Object(j.jsx)("h3",{children:"Grocery bud"}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("input",{type:"text",className:"grocery",placeholder:"e.g. eggs",onChange:function(e){return s(e.target.value)},value:c}),Object(j.jsx)("button",{type:"submit",className:"submit-btn",children:h?"edit":"submit"})]})]}),u.length>0&&Object(j.jsxs)("div",{className:"grocery-container",children:[Object(j.jsx)(b,{items:u,removeItem:function(e){C(!0,"danger","item removed"),O(u.filter((function(t){return t.id!==e})))},editItem:function(e){var t=u.find((function(t){return t.id!==e}));v(!0),N(e),s(t.title)}}),Object(j.jsx)("button",{className:"clear-btn",onClick:function(){C(!0,"danger","emty list"),O([])},children:"clear items"})]})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e049578c.chunk.js.map