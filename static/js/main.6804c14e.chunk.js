(this["webpackJsonpgoit-react-hw-007-phonebook"]=this["webpackJsonpgoit-react-hw-007-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={block:"Filter_block__3V2lr",title:"Filter_title__1Mzn3",input:"Filter_input__2ENIb"}},21:function(t,e,n){t.exports={btn:"ContactListItem_btn__q6usd",textContent:"ContactListItem_textContent__3WVWg"}},31:function(t,e,n){t.exports={ul:"ContactList_ul__2BZUh"}},6:function(t,e,n){t.exports={form:"ContactForm_form__s-t3n",title:"ContactForm_title__XLU-1",inputContact:"ContactForm_inputContact__3Z0Ak",btn:"ContactForm_btn__jaX6b"}},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(14),r=n.n(a),s=n(22),o=n(64),u=n(6),i=n.n(u),b=n(3),l=n(7),j=n.n(l),d=n(16),f=n(10),m=n.n(f),O=n(2),p=(Object(O.b)("contact/addNewContactsRequest"),Object(O.b)("contact/addNewContactsSuccess")),h=Object(O.b)("contact/addNewContactsError"),x=(Object(O.b)("contact/setContactsRequest"),Object(O.b)("contact/setContactsSuccess")),v=Object(O.b)("contact/setContactsError"),C=Object(O.b)("contact/handleChange"),_=(Object(O.b)("contact/handleDeleteRequest"),Object(O.b)("contact/handleDeleteSuccess")),N=Object(O.b)("contact/handleDeleteError");m.a.defaults.baseURL="http://localhost:3001/";var k,w=n(1),g=Object(b.b)((function(t){return{contacts:t.contacts.items}}))((function(t){var e=t.contacts,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],u=a[1],l=Object(b.c)(),f=Object(c.useState)(""),O=Object(s.a)(f,2),x=O[0],v=O[1],C=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":u(c);break;case"number":v(c);break;default:return}},_=function(t){if(t){var n=e.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}));if(n)alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442: "+t.name+" \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 ");else{var c,a={id:Object(o.a)(),name:t.name,number:t.number};l((c=a,function(){var t=Object(d.a)(j.a.mark((function t(e){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.post("contacts",c);case 3:n=t.sent,a=n.data,e(p(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e(h(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}}else alert("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!")};return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("form",{className:i.a.form,onSubmit:function(t){t.preventDefault(),_({name:r,number:x}),u(""),v("")},children:[Object(w.jsx)("span",{className:i.a.title,children:"Name"}),Object(w.jsx)("input",{onChange:C,className:i.a.inputContact,value:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"\u0438\u043c\u044f:"}),Object(w.jsx)("span",{className:i.a.title,children:"Number"}),Object(w.jsx)("input",{className:i.a.inputContact,name:"number",type:"tel",onChange:C,value:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"\u0442\u0435\u043b:"}),Object(w.jsx)("button",{className:i.a.btn,type:"submit",children:"Add contact"})]})})})),y=n(8),F=Object(y.a)([function(t){return t.contacts.items},function(t){return t.contacts.filter}],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),L=n(21),A=n.n(L),q=function(t){var e=t.item,n=e.name,c=e.number,a=e.id,r=Object(b.c)();return Object(w.jsx)("li",{children:Object(w.jsxs)("div",{className:A.a.textContent,children:[Object(w.jsxs)("span",{children:[n,": ",c]}),Object(w.jsx)("button",{className:A.a.btn,onClick:function(){return r(function(t){return function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.delete("contacts/".concat(t));case 3:n(_(t)),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n(N(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}(a))},children:"X"})]})})},E=n(31),S=n.n(E),z=function(){var t=Object(b.d)(F);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("ul",{className:S.a.ul,children:t.map((function(t){return Object(w.jsx)(q,{item:t},t.id)}))})})},Z=n(17),D=n.n(Z),I=function(t){var e=t.filter,n=t.handleChange;return Object(w.jsxs)("div",{className:D.a.block,children:[Object(w.jsx)("label",{className:D.a.title,htmlFor:"filter",children:"Find contacts by name:"}),Object(w.jsx)("input",{id:"filter",name:"filter",type:"text",className:D.a.input,onChange:function(t){var e=t.target.value;n(e)},value:e})]})},R=function(){var t=Object(b.d)((function(t){return t.contacts.filter})),e=Object(b.c)();return Object(w.jsx)(I,{filter:t,handleChange:function(t){return e(C(t))}})},B=function(){var t=Object(b.c)();return Object(c.useEffect)((function(){t(function(){var t=Object(d.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("contacts");case 3:n=t.sent,c=n.data,e(x(c)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e(v(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("h1",{children:"Phonebook"}),Object(w.jsx)(g,{}),Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsxs)("div",{children:[Object(w.jsx)(R,{}),Object(w.jsx)(z,{})]})]})},J=(n(61),n(4)),U=n(11),X=n(32),M=Object(O.c)([],(k={},Object(U.a)(k,p,(function(t,e){var n=e.payload;return[].concat(Object(X.a)(t),[n])})),Object(U.a)(k,x,(function(t,e){return e.payload})),Object(U.a)(k,_,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),k)),V=Object(O.c)("",Object(U.a)({},C,(function(t,e){return e.payload}))),W=Object(J.b)({items:M,filter:V}),P=Object(J.b)({contacts:W}),T=Object(O.a)({reducer:P});r.a.render(Object(w.jsx)(b.a,{store:T,children:Object(w.jsx)(B,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.6804c14e.chunk.js.map