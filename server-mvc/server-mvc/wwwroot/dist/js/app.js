(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=s[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}s[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"029e":function(t,e,n){"use strict";n.r(e);n("96cf");var r=n("3b8d"),s=n("bc3a").default;e["default"]={get:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get(e);case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}(),post:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.post(e,n);case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e,n){return t.apply(this,arguments)}return e}()}},"034f":function(t,e,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},1357:function(t,e,n){"use strict";var r=n("4c25"),s=n.n(r);s.a},"185f":function(t,e,n){"use strict";var r=n("2432"),s=n.n(r);s.a},2432:function(t,e,n){},"4c25":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("96cf");var r=n("3b8d"),s=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t.userDetails.isAuthenticated?t._e():n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:t.login}},[t._v("Login")]),t.userDetails.isAuthenticated?n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:t.logout}},[t._v("Logout")]):t._e(),n("hr")],1),n("router-view")],1)},o=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),c=n("2f62"),u=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},p=[],d={name:"login",components:{}},f=d,m=n("2877"),v=Object(m["a"])(f,l,p,!1,null,null,null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ExpensePage")},b=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-content"},[t.expenseDetails.expense.isShowExpenses?n("div",{attrs:{id:"expense-content"}},[n("hr"),n("div",[n("span",{staticClass:"field-label"},[t._v("User Id:")]),n("span",{staticClass:"field-value"},[t._v(t._s(t.expenseDetails.user.userId))])]),n("hr"),n("ExpenseGridView"),n("AddExpenseModalPage"),n("div",{staticClass:"container-fluid",attrs:{id:"action-buttons-footer"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 text-left"},[n("span",[t._v("Approvar Id")]),n("input",{attrs:{type:"text",id:"approverId"},domProps:{value:t.expenseDetails.user.approverId},on:{change:t.onchangeApproverId}})]),n("div",{staticClass:"col-md-4 text-left"},[t._v("\n          Cost Centre\n          "),n("input",{attrs:{type:"text",id:"costCentre"},domProps:{value:t.expenseDetails.user.costCentre},on:{change:t.onchangeCostCentre}})]),n("div",{staticClass:"col-md-12 text-right"},[t._m(0),n("span",{staticClass:"action-buttons"},[n("button",{staticClass:"btn btn-success",attrs:{id:"add-expense",type:"button"},on:{click:t.save}},[t._v("Submit")])])])])])],1):t._e(),t.expenseDetails.expense.isShowExpenses?t._e():n("div",[n("div",[t._v("\n      Message: "+t._s(t.expenseDetails.expense.submissionMessage)+"\n    ")])])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"action-buttons"},[n("button",{staticClass:"btn btn-secondary",attrs:{id:"add-expense",type:"button"}},[t._v("Cancel")])])}],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"container-fluid",attrs:{id:"grid"}},[t._m(0),t._m(1),t._l(t.transactions,(function(e){return n("div",{key:e.id,staticClass:"row"},[n("div",{staticClass:"col-md-2"},[t._v(t._s(e.transDate))]),n("div",{staticClass:"col-md-3"},[t._v(t._s(e.description))]),n("div",{staticClass:"col-md-2 text-right"},[t._v(t._s(e.amount))]),n("div",{staticClass:"col-md-2"},[t._v(t._s(e.category))]),n("div",{staticClass:"col-md-1 text-center"},[e.isOutOfPocket?t._e():n("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"personal-"+e.id},on:{click:function(n){return t.onchangeIsPersonal(n,e.id)}}})]),n("div",{staticClass:"col-md-2 text-center"},[n("button",{attrs:{id:"remove",type:"button"},on:{click:function(n){return t.remove(n,e.id)}}},[t._v("x")])])])}))],2)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 text-right"},[n("button",{staticClass:"btn btn-primary btn-sm",attrs:{id:"add-expense",type:"button","data-toggle":"modal","data-target":"#addExpenseModal"}},[t._v("+")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-2"},[t._v("Date")]),n("div",{staticClass:"col-md-3"},[t._v("Description")]),n("div",{staticClass:"col-md-2 text-right"},[t._v("Amount")]),n("div",{staticClass:"col-md-2"},[t._v("Category")]),n("div",{staticClass:"col-md-1 text-center"},[t._v("Personal")]),n("div",{staticClass:"col-md-2 text-center"},[t._v("Remove")])])}];function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var D={name:"expense",computed:_({},Object(c["b"])({transactions:function(t){return t.expenseDetails.transactions}})),methods:{onchangeIsPersonal:function(t,e){var n={id:e,status:t.target.checked};this.$store.commit("expenseDetails/setIsPersonal",n)},onchangeIsRemove:function(t,e){var n={id:e,status:t.target.checked};this.$store.commit("expenseDetails/setIsRemove",n)},remove:function(t,e){var n={id:e,status:t.target.checked};this.$store.commit("expenseDetails/setIsRemove",n)}}},j=D,P=(n("60de"),Object(m["a"])(j,w,O,!1,null,"59da5c4a",null)),E=P.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"modal fade",attrs:{id:"addExpenseModal",tabindex:"-1",role:"dialog","aria-labelledby":"addExpenseModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._m(0),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"form-group"},[t._m(1),n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[n("input",{staticClass:"form-control",attrs:{type:"date",placeholder:"YYYYMMDD"},domProps:{value:t.date},on:{change:t.onchangeDate}})])]),t._m(2),n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[n("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.description},on:{change:t.onchangeDescription}})])]),t._m(3),n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[n("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.amount},on:{change:t.onchangeAmount}})])]),t._m(4),n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[n("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tax},on:{change:t.onchangeTax}})])]),t._m(5),n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[n("select",{staticClass:"form-control",on:{change:t.onchangeCategory}},[n("option",{attrs:{value:"select",selected:""}},[t._v("Select")]),n("option",{attrs:{value:"trvl"}},[t._v("Travel")]),n("option",{attrs:{value:"food"}},[t._v("Food and Bev")]),n("option",{attrs:{value:"Other"}},[t._v("Other")])])])]),t._m(6),n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[n("textarea",{staticClass:"form-control",domProps:{value:t.notes},on:{change:t.onchangeNotes}})])])])])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveExpense}},[t._v("Save")])])])])])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"addExpenseModalLabel"}},[t._v("Add Expense")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[t._v("Date")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[t._v("Description")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[t._v("Amount")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[t._v("Tax")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[t._v("Expense Type")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"row-header"}},[n("div",{staticClass:"col-md-6"},[t._v("Notes")])])}],S={name:"addExpenseModalPage",data:function(){return{date:"",description:"",amount:"",tax:"",category:"",notes:""}},methods:{onchangeDate:function(t){this.date=t.target.value},onchangeDescription:function(t){this.description=t.target.value},onchangeAmount:function(t){this.amount=t.target.value},onchangeTax:function(t){this.tax=t.target.value},onchangeCategory:function(t){this.category=t.target.value},onchangeNotes:function(t){this.notes=t.target.value},saveExpense:function(){var t={transType:"OP",description:this.description,amount:this.amount,tax:this.tax,category:this.category,transDate:this.date};this.$store.commit("expenseDetails/addTransaction",t),this.clearInputData()},clearInputData:function(){this.date="",this.description="",this.amount="",this.tax="",this.category="",this.notes=""}}},R=S,$=(n("185f"),Object(m["a"])(R,I,k,!1,null,"6aebe3a4",null)),A=$.exports;function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M={name:"expense",components:{ExpenseGridView:E,AddExpenseModalPage:A},created:function(){var t=JSON.parse(sessionStorage.getItem("user"));console.log(">>> From Session ",t),t&&(this.loadData(t.userId),this.setUserData(t))},computed:U({},Object(c["b"])({userDetails:function(t){return t.commonDetails.user},expenseDetails:function(t){return t.expenseDetails},transactions:function(t){return t.expenseDetails.transactions}})),methods:{loadData:function(t){this.$store.dispatch("expenseDetails/loadData",t)},setUserData:function(t){this.$store.dispatch("expenseDetails/setUserData",t)},save:function(){this.$store.dispatch("expenseDetails/save")},onchangeCostCentre:function(t){this.$store.commit("expenseDetails/setCostCentre",t.target.value)},onchangeApproverId:function(t){this.$store.commit("expenseDetails/setApproverId",t.target.value)}}},L=M,N=(n("67af"),Object(m["a"])(L,x,y,!1,null,"57ecde08",null)),B=N.exports,J={name:"expense",components:{ExpensePage:B}},F=J,G=Object(m["a"])(F,g,b,!1,null,null,null),Y=G.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("form",{staticClass:"form-signin"},[n("h2",{staticClass:"form-signin-heading"},[t._v("Login")]),n("input",{staticClass:"form-control",attrs:{type:"text",id:"userId",name:"userId",placeholder:"User Name",required:"",autofocus:""},domProps:{value:t.userId},on:{change:t.onchangeuserId}}),n("input",{staticClass:"form-control",attrs:{type:"password",id:"password",name:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{change:t.onchangePassword}}),n("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"},on:{click:t.login}},[t._v("Login")]),n("div",[n("span",{staticClass:"error",attrs:{id:"error"}},[t._v(t._s(t.authenticationError))])])])])},H=[],V=(n("a481"),n("e54c")),W=n("029e").default,z={authenticateUser:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=V.api.postAuthenticateUser.url,console.log(">>>>URL: ",r),s={UserId:e,Password:n},t.next=6,W.post(r,s);case 6:if(a=t.sent,console.log("user authentication passed. ",a),200!==a.status){t.next=10;break}return t.abrupt("return",!0);case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t["catch"](0),console.log(t.t0.message),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));function e(e,n){return t.apply(this,arguments)}return e}(),getUser:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=V.api.getUserById.url,n=n.replace("{userId}",e),t.next=4,W.get(n);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),setUserInSessionStorage:function(t){this.saveToSessionStorage(t)},saveToSessionStorage:function(t){"undefined"!==typeof Storage?sessionStorage.setItem("user",JSON.stringify(t)):console.log("Error: your browser does not support Web Storage...")}};function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var X={name:"Login",data:function(){return{userId:"",password:"",authenticationError:""}},mounted:function(){sessionStorage.getItem("user")},computed:Q({},Object(c["b"])({userDetails:function(t){return t.commonDetails.user}})),methods:{onchangeuserId:function(t){this.userId=t.target.value},onchangePassword:function(t){this.password=t.target.value},login:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.authenticationError="",t.next=3,z.authenticateUser(this.userId,this.password);case 3:if(e=t.sent,!e){t.next=14;break}return this.$store.commit("commonDetails/setAuthenticationSuccess"),t.next=8,z.getUser(this.userId);case 8:n=t.sent,console.log(">>>before safe to session",n),z.setUserInSessionStorage(n),nt.push({name:"expense"}),t.next=15;break;case 14:this.authenticationError="Authentication failed!";case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},Z=X,tt=(n("1357"),Object(m["a"])(Z,q,H,!1,null,"1f28b1f2",null)),et=tt.exports;s["a"].use(u["a"]);var nt=new u["a"]({routes:[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/expense",name:"expense",component:Y},{path:"/login",name:"login",component:et}]});function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var at={name:"App",mounted:function(){var t=sessionStorage.getItem("user");t?this.$store.commit("commonDetails/setAuthenticationSuccess"):this.$store.commit("commonDetails/setAuthenticationFail")},computed:st({},Object(c["b"])({userDetails:function(t){return t.commonDetails.user},expenseDetails:function(t){return t.expenseDetails}})),methods:{login:function(){nt.push({name:"login"})},logout:function(){sessionStorage.clear(),this.$store.commit("commonDetails/logout"),this.$store.commit("expenseDetails/resetTransactions"),nt.push({name:"home"})}}},ot=at,it=(n("034f"),Object(m["a"])(ot,a,o,!1,null,null,null)),ct=it.exports,ut=(n("4989"),n("ab8b"),n("ba5a")),lt=n.n(ut),pt=n("e54c"),dt=n("029e").default,ft={getAll:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=pt.api.getTransactions.url,t.next=3,dt.get(e);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getTransactionsByUserId:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=pt.api.getUserTransactions.url,console.log(">>>tr"),n=n.replace("{userId}",e),console.log(">>>trurl",n),t.next=6,dt.get(n);case 6:return r=t.sent,t.abrupt("return",r.data);case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),save:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,s,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.map((function(t){var e={id:t.id,description:t.description,amount:t.amount,tax:t.tax,category:t.category,transdate:t.transDate};return e})),s={userId:n.userId,costCentre:n.costCentre,approverId:n.approverId,status:"submitted",expenseItems:r},console.log(">>>>>Exp to be submitted: ",s),t.prev=3,a=pt.api.postExpenses.url,o=s,t.next=8,dt.post(a,o);case 8:if(i=t.sent,200!==i.status&&201!=i.status){t.next=11;break}return t.abrupt("return",i);case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t["catch"](3),console.log("Error: Expense submission: ",t.t0.message),t.abrupt("return",t.t0);case 17:case"end":return t.stop()}}),t,null,[[3,13]])})));function e(e,n){return t.apply(this,arguments)}return e}(),getByUserId:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="".concat(pt.api.getGithubusers.url,"/").concat(e.userId),t.next=3,dt.get(n);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},mt={namespaced:!0,state:{transactions:[],user:{userId:"",approverId:"",costCentre:""},expense:{isShowExpenses:!0,submissionMessage:""}},actions:{loadData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,e.state,t.next=3,ft.getTransactionsByUserId(n);case 3:s=t.sent,s?(console.log("Data sussessfully fetched: ",s),r("setTransactionData",s)):console.log("Error in fetching data: ",error);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),setUserData:function(t,e){var n=t.commit;t.state;n("setUserid",e.userId),n("setCostCentre",e.costCentre),n("setApproverId",e.managerId)},save:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.next=3,ft.save(r.transactions,r.user);case 3:s=t.sent,201===s.status||200===s.status?(n("setHideExpenses"),n("setSubmissionMessage",s.data)):n("setSubmissionMessage",s.data);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},mutations:{setTransactionData:function(t,e){e.forEach((function(e){var n=new lt.a;n.id=e.id,n.description=e.description,n.amount=e.amount,n.tax=e.tax,n.transDate=e.transDate,n.category=e.category,n.isPersonal=!1,n.isRemove=!1,n.isOutOfPocket=!1,t.transactions.push(n)}))},addTransaction:function(t,e){var n=0,r=new lt.a;r.id=n,r.description=e.description,r.amount=e.amount,r.tax=e.tax,r.transDate=e.transDate,r.category=e.category,r.isPersonal=!1,r.isRemove=!1,r.isOutOfPocket=!0,t.transactions.push(r)},setIsPersonal:function(t,e){t.transactions.forEach((function(t){t.id===e.id&&(t.isPersonal=e.status)}))},setIsRemove:function(t,e){t.transactions.forEach((function(n,r){n.id===e.id&&t.transactions.splice(r,1)}))},resetTransactions:function(t){t.transactions=[]},setUserid:function(t,e){t.user.userId=e},setCostCentre:function(t,e){t.user.costCentre=e},setApproverId:function(t,e){t.user.approverId=e},setHideExpenses:function(t){t.expense.isShowExpenses=!1},setSubmissionMessage:function(t,e){t.expense.submissionMessage=e}}},vt={namespaced:!0,state:{user:{isAuthenticated:!1}},actions:{},mutations:{setAuthenticationSuccess:function(t){t.user.isAuthenticated=!0},setAuthenticationFail:function(t){t.user.isAuthenticated=!1},logout:function(t){t.user.isAuthenticated=!1}}};function ht(t){return gt.apply(this,arguments)}function gt(){return gt=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new c["a"].Store({modules:{expenseDetails:mt,commonDetails:vt}}));case 1:case"end":return t.stop()}}),t)}))),gt.apply(this,arguments)}s["a"].use(c["a"]);var bt=ht,xt=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s["a"].config.productionTip=!1,s["a"].use(c["a"]),t.next=4,bt();case 4:e=t.sent,new s["a"]({router:nt,store:e,render:function(t){return t(ct)}}).$mount("#app");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();xt()},"60de":function(t,e,n){"use strict";var r=n("77ed"),s=n.n(r);s.a},"64a9":function(t,e,n){},"67af":function(t,e,n){"use strict";var r=n("91fd"),s=n.n(r);s.a},"77ed":function(t,e,n){},"91fd":function(t,e,n){},ba5a:function(t,e){function n(){id="",transType="",description="",amount=0,tax=0,transDate="",category="",isPersonal=!1,isRemove=!1,isOutOfPocket=!1}t.exports=n},e54c:function(t){t.exports=JSON.parse('{"api":{"postAuthenticateUser":{"url":"/api/authentication"},"getUserById":{"url":"/api/users/{userId}"},"getUserTransactions":{"url":"/api/users/{userId}/transactions"},"postExpenses":{"url":"/api/expenses"},"getTransactions":{"url":"/api/transactions"},"getGithubusers":{"url":"https://api.github.com/users"}}}')}});
//# sourceMappingURL=app.js.map