(function(t){function e(e){for(var s,o,i=e[0],c=e[1],u=e[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},n={app:0},a=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+".js"}function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,s){r=n[t]=[e,s]}));e.push(r[2]=s);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=n[t];if(0!==r){if(r){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",u.name="ChunkLoadError",u.type=s,u.request=a,r[1](u)}n[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"029e":function(t,e,r){"use strict";r.r(e);r("96cf");var s=r("3b8d"),n=r("bc3a").default;e["default"]={get:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.get(e);case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}(),post:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,r){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.post(e,r);case 3:return s=t.sent,t.abrupt("return",s);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e,r){return t.apply(this,arguments)}return e}()}},"034f":function(t,e,r){"use strict";var s=r("64a9"),n=r.n(s);n.a},"0a3c":function(t,e,r){},"32d1":function(t,e,r){"use strict";var s=r("0a3c"),n=r.n(s);n.a},4318:function(t,e,r){"use strict";var s=r("938b"),n=r.n(s);n.a},4678:function(t,e,r){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3cd","./es-do.js":"0a3cd","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=a(t);return r(e)}function a(t){if(!r.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="4678"},"56d7":function(t,e,r){"use strict";r.r(e);r("96cf");var s=r("3b8d"),n=(r("cadf"),r("551c"),r("f751"),r("097d"),r("2b0e")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),r("router-link",{staticClass:"btn btn-link",attrs:{to:"/expense"}},[t._v("Expense Form")]),t.userDetails.user.isAuthenticated?t._e():r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:t.login}},[t._v("Login")]),t.userDetails.user.isAuthenticated?r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:t.logout}},[t._v("Logout")]):t._e()],1),r("router-view")],1)},o=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("2f62"),u=r("8c4f"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"jumbotron"},[t._m(0),r("p",{staticClass:"lead"},[t._v("This is a simple, yet functional expense submission form.")]),r("p",{staticClass:"lead"},[t._v("Developed as TDD and deployed to Cloud via CI/CD Pipeline!")]),r("hr",{staticClass:"my-4"}),r("h4",[t._v("Built with following technologies")]),t._m(1),r("p"),r("p",{staticClass:"lead"},[r("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/about"}},[t._v("Learn more")])],1)])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"display-5"},[r("span",{staticClass:"text-primary"},[t._v("Expense Application")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"list-group"},[r("li",{staticClass:"list-group-item list-group-item-primary"},[r("b",[t._v("Front End:")]),t._v(" Vue.js + VUEX for store management + Bootstrap + Jest Unit Testing\n    ")]),r("li",{staticClass:"list-group-item list-group-item-info"},[r("b",[t._v("Back End:")]),t._v(" ASP.Net MVC Core, serves the compiled vuejs client pages and secure calls to REST Apis (No CORS)\n    ")]),r("li",{staticClass:"list-group-item list-group-item-primary"},[r("b",[t._v("Back End - REST Api:")]),t._v(" ASP.Net Core 2.2 + Dapper for data access + xUnit Test with Moq\n    ")]),r("li",{staticClass:"list-group-item list-group-item-info"},[r("b",[t._v("Database:")]),t._v(" SQL Server\n    ")]),r("li",{staticClass:"list-group-item list-group-item-primary"},[r("b",[t._v("Deployment:")]),t._v(" Github + CI/CD: Continuous deploment to Azure Cloud\n    ")]),r("li",{staticClass:"list-group-item list-group-item-info"},[r("b",[t._v("Hosting:")]),t._v(" Azure Cloud hosts application, api and sql database\n    ")])])}],p={name:"login",components:{}},f=p,m=r("2877"),b=Object(m["a"])(f,l,d,!1,null,null,null),v=b.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ExpensePage")},g=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-content"},[t.loggedIn?t._e():r("div",[r("b",[t._v("Please login before accessing the form!")])]),t.loggedIn&&t.expenseDetails.expense.isShowExpenses?r("div",{attrs:{id:"expense-content"}},[r("UserInfo"),r("ExpenseGridView"),r("AddExpenseModalPage"),r("p"),r("ApproverInfo"),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 text-right"},[r("button",{staticClass:"btn btn-secondary",attrs:{id:"add-expense",type:"button"}},[t._v("Cancel")]),r("button",{staticClass:"btn btn-success ml-1",attrs:{id:"add-expense",type:"button"},on:{click:t.save}},[t._v("Submit")])])])])],1):t._e(),t.expenseDetails.expense.isShowExpenses?t._e():r("div",[r("div",[t._v("Message: "+t._s(t.expenseDetails.expense.submissionMessage))])])])},y=[],x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",{staticClass:"container-fluid",attrs:{id:"grid"}},[t._m(0),t._m(1),t._l(t.transactions,(function(e){return r("div",{key:e.id,staticClass:"row"},[r("div",{staticClass:"col-md-2 border-bottom"},[t._v(t._s(e.transDate))]),r("div",{staticClass:"col-md-3 border-bottom"},[t._v(t._s(e.description))]),r("div",{staticClass:"col-md-2 border-bottom text-right"},[t._v(t._s(e.amount))]),r("div",{staticClass:"col-md-2 border-bottom"},[t._v(t._s(e.category))]),r("div",{staticClass:"col-md-1 border-bottom text-center"},[e.isOutOfPocket?t._e():r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"personal-"+e.id},on:{click:function(r){return t.onchangeIsPersonal(r,e.id)}}})]),r("div",{staticClass:"col-md-2 text-center"},[r("button",{staticClass:"btn btn-danger btn-sm",attrs:{id:"remove",type:"button"},on:{click:function(r){return t.remove(r,e.id)}}},[t._v("x")])])])}))],2)])},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 text-right p-1"},[r("button",{staticClass:"btn btn-primary btn-sm",attrs:{id:"add-expense",type:"button","data-toggle":"modal","data-target":"#addExpenseModal"}},[t._v("Add Expense")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-2 bg-primary text-white"},[t._v("Date")]),r("div",{staticClass:"col-md-3 bg-primary text-white"},[t._v("Description")]),r("div",{staticClass:"col-md-2 bg-primary text-white text-right"},[t._v("Amount")]),r("div",{staticClass:"col-md-2 bg-primary text-white"},[t._v("Category")]),r("div",{staticClass:"col-md-1 bg-primary text-white text-center"},[t._v("Personal")]),r("div",{staticClass:"col-md-2 bg-primary text-white text-center"},[t._v("Remove")])])}];function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"expense",computed:C({},Object(c["b"])({transactions:function(t){return t.expenseDetails.transactions}})),methods:{onchangeIsPersonal:function(t,e){var r={id:e,status:t.target.checked};this.$store.commit("expenseDetails/setIsPersonal",r)},onchangeIsRemove:function(t,e){var r={id:e,status:t.target.checked};this.$store.commit("expenseDetails/setIsRemove",r)},remove:function(t,e){var r={id:e,status:t.target.checked};this.$store.commit("expenseDetails/setIsRemove",r)}}},D=_,P=Object(m["a"])(D,x,w,!1,null,"3f98669c",null),k=P.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",{staticClass:"modal fade",attrs:{id:"addExpenseModal",tabindex:"-1",role:"dialog","aria-labelledby":"addExpenseModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(0),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"form-group"},[t._m(1),r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 mb-2"},[r("input",{staticClass:"form-control",attrs:{type:"date",placeholder:"YYYYMMDD"},domProps:{value:t.date},on:{change:t.onchangeDate}})])]),t._m(2),r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 mb-2"},[r("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.description},on:{change:t.onchangeDescription}}),t.errors.description?r("div",{staticClass:"text-danger"},[t._v(t._s(t.errors.description))]):t._e()])]),t._m(3),r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 mb-2"},[r("input",{staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.amount},on:{change:t.onchangeAmount}}),t.errors.amount?r("div",{staticClass:"text-danger"},[t._v(t._s(t.errors.amount))]):t._e()])]),t._m(4),r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 mb-2"},[r("input",{staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.tax},on:{change:t.onchangeTax}})])]),t._m(5),r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 mb-2"},[r("select",{staticClass:"form-control",on:{change:t.onchangeCategory}},[r("option",{attrs:{value:"",selected:""}},[t._v("Select")]),t._l(t.categoryLookup,(function(e){return r("option",{key:e.key,domProps:{value:e.key}},[t._v(t._s(e.value))])}))],2),t.errors.category?r("div",{staticClass:"text-danger"},[t._v(t._s(t.errors.category))]):t._e()])]),t._m(6),r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 mb-2"},[r("textarea",{staticClass:"form-control",domProps:{value:t.notes},on:{change:t.onchangeNotes}})])])])])]),r("div",{staticClass:"modal-footer"},[r("button",{ref:"button-close",staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveExpense}},[t._v("Save")])])])])])])},I=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title",attrs:{id:"addExpenseModalLabel"}},[t._v("Add Expense")]),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 text-primary font-weight-bold"},[t._v("Date")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 text-primary font-weight-bold"},[t._v("Description")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 text-primary font-weight-bold"},[t._v("Amount")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 text-primary font-weight-bold"},[t._v("Tax")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 text-primary font-weight-bold"},[t._v("Expense Type")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row",attrs:{id:"row-header"}},[r("div",{staticClass:"col-md-6 text-primary font-weight-bold"},[t._v("Notes")])])}];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var $={name:"addExpenseModalPage",data:function(){return{date:"",description:"",amount:"",tax:"",category:"",notes:"",categoryLookup:[{key:"TRVL",value:"Travel"},{key:"FOOD",value:"Food and Bev"},{key:"SUPL",value:"Office Supplies"},{key:"TAXI",value:"Taxi and Transportation"},{key:"ACCM",value:"Hotel Accomodation"},{key:"ENT1",value:"Entertainment"},{key:"PROM",value:"Business Promotions"},{key:"OTHR",value:"Other"}],errors:{date:"",description:"",amount:"",expenseType:""}}},methods:{onchangeDate:function(t){this.date=t.target.value},onchangeDescription:function(t){this.errors.description="",this.description=t.target.value},onchangeAmount:function(t){this.errors.amount="",this.amount=t.target.value},onchangeTax:function(t){this.tax=t.target.value},onchangeCategory:function(t){this.errors.category="",this.category=t.target.value},onchangeNotes:function(t){this.notes=t.target.value},saveExpense:function(t){if(!this.isValidForm())return!1;var e={transType:"OP",description:this.description,amount:this.amount,tax:this.tax,category:this.category,transDate:this.date};this.$store.commit("expenseDetails/addTransaction",e),this.clearInputData(),this.$refs["button-close"].click()},clearInputData:function(){this.date="",this.description="",this.amount="",this.tax="",this.category="",this.notes=""},isValidForm:function(){var t={};return this.description||(t.description="Description is required"),this.amount||(t.amount="Amount is required"),this.category||(t.category="Expense type is required"),this.errors=A({},this.errors,{},t),0===Object.keys(t).length}}},R=$,T=(r("7f9f"),Object(m["a"])(R,E,I,!1,null,"421bbd04",null)),U=T.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-content"},[r("div",{staticClass:"container-fluid",attrs:{id:"grid"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-1 text-primary font-weight-bold"},[t._v("User:")]),r("div",{staticClass:"col-md-6 text-info font-weight-bold"},[t._v(t._s(t.userDetails.userId)+" - "+t._s(t.userDetails.firstName)+" "+t._s(t.userDetails.lastName))])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-1 text-primary font-weight-bold"},[t._v("MgrID:")]),r("div",{staticClass:"col-md-6 text-info font-weight-bold"},[t._v(t._s(t.userDetails.managerId))])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-1 text-primary font-weight-bold"},[t._v("CC:")]),r("div",{staticClass:"col-md-6 text-info font-weight-bold"},[t._v(t._s(t.userDetails.costCentre))])])])])},z=[];function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var q={name:"userinfo",computed:N({},Object(c["b"])({userDetails:function(t){return t.expenseDetails.user}}))},F=q,B=Object(m["a"])(F,M,z,!1,null,"6224aacc",null),V=B.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-content"},[r("div",{staticClass:"container-fluid",attrs:{id:"grid"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2 text-primary font-weight-bold"},[t._v("Approver ID")]),r("div",{staticClass:"col-md-4 text-info font-weight-bold"},[r("input",{staticClass:"form-control",attrs:{type:"text",id:"approverId"},domProps:{value:t.userDetails.approverId},on:{change:t.onchangeApproverId}}),t.errorDetails.approverId?r("div",{staticClass:"text-danger"},[t._v(t._s(t.errorDetails.approverId))]):t._e()])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2 text-primary font-weight-bold"},[t._v("Cost Centre")]),r("div",{staticClass:"col-md-4 text-info font-weight-bold"},[r("input",{staticClass:"form-control",attrs:{type:"text",id:"costCentre"},domProps:{value:t.userDetails.costCentre},on:{change:t.onchangeCostCentre}}),t.errorDetails.costCentre?r("div",{staticClass:"text-danger"},[t._v(t._s(t.errorDetails.costCentre))]):t._e()])])])])},G=[];function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function J(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var X={name:"approverInfo",computed:J({},Object(c["b"])({userDetails:function(t){return t.expenseDetails.user},errorDetails:function(t){return t.expenseDetails.errors}})),methods:{onchangeApproverId:function(t){var e=t.target.value;this.$store.commit("expenseDetails/setApproverId",e),this.$store.commit("expenseDetails/resetError","approverId")},onchangeCostCentre:function(t){var e=t.target.value;this.$store.commit("expenseDetails/setCostCentre",e),this.$store.commit("expenseDetails/resetError","costCentre")}}},Q=X,W=Object(m["a"])(Q,Y,G,!1,null,"3885ca52",null),K=W.exports;function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function tt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var et={name:"expense",components:{ExpenseGridView:k,AddExpenseModalPage:U,UserInfo:V,ApproverInfo:K},data:function(){return{loggedIn:!1}},created:function(){var t=sessionStorage.getItem("userId");console.log(">>>From Session: logged in user:",t),t&&this.expenseDetails.user?(this.loadData(t),this.loggedIn=!0):this.loggedIn=!1},computed:tt({},Object(c["b"])({expenseDetails:function(t){return t.expenseDetails},transactions:function(t){return t.expenseDetails.transactions},errorDetails:function(t){return t.expenseDetails.errors}})),methods:{loadData:function(t){this.$store.dispatch("expenseDetails/loadData",t)},save:function(){var t=!1;if(this.expenseDetails.user.userId||alert("User Id missing. Please refresh and login again"),!this.expenseDetails.user.approverId){var e={errorId:"approverId",errorDesc:"Approver id is required"};this.$store.commit("expenseDetails/setError",e),t=!0}if(!this.expenseDetails.user.costCentre){var r={errorId:"costCentre",errorDesc:"Cost centre is required"};this.$store.commit("expenseDetails/setError",r),t=!0}if(t)return!1;this.$store.dispatch("expenseDetails/save")}}},rt=et,st=(r("4318"),Object(m["a"])(rt,j,y,!1,null,"24378f9d",null)),nt=st.exports,at={name:"expense",components:{ExpensePage:nt}},ot=at,it=Object(m["a"])(ot,h,g,!1,null,null,null),ct=it.exports,ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("form",{staticClass:"form-signin"},[r("h2",{staticClass:"form-signin-heading"},[t._v("Login")]),r("input",{staticClass:"form-control",attrs:{type:"text",id:"userId",name:"userId",placeholder:"User Name",required:"",autofocus:""},domProps:{value:t.userId},on:{change:t.onchangeuserId}}),r("input",{staticClass:"form-control",attrs:{type:"password",id:"password",name:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{change:t.onchangePassword}}),r("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"},on:{click:t.login}},[t._v("Login")]),r("div",[r("span",{staticClass:"error",attrs:{id:"error"}},[t._v(t._s(t.authenticationError))])])])])},lt=[],dt=(r("a481"),r("e54c")),pt=r("029e").default,ft={authenticateUser:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,r){var s,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=dt.api.postAuthenticateUser.url,n={UserId:e,Password:r},t.next=5,pt.post(s,n);case 5:if(a=t.sent,200!==a.status){t.next=8;break}return t.abrupt("return",!0);case 8:return t.abrupt("return",!1);case 11:return t.prev=11,t.t0=t["catch"](0),console.log(t.t0.message),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));function e(e,r){return t.apply(this,arguments)}return e}(),getUser:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=dt.api.getUserById.url,r=r.replace("{userId}",e),t.next=4,pt.get(r);case 4:return s=t.sent,t.abrupt("return",s.data);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),setUserInSessionStorage:function(t){this.saveToSessionStorage(t)},saveToSessionStorage:function(t){"undefined"!==typeof Storage?sessionStorage.setItem("userId",t):console.log(">>>Error: your browser does not support Web Storage...")}};function mt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function bt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?mt(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):mt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var vt={name:"Login",data:function(){return{userId:"",password:"",authenticationError:""}},computed:bt({},Object(c["b"])({commonDetails:function(t){return t.commonDetails},userDetails:function(t){return t.expenseDetails}})),methods:{onchangeuserId:function(t){this.userId=t.target.value},onchangePassword:function(t){this.password=t.target.value},login:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.authenticationError="",t.next=3,ft.authenticateUser(this.userId,this.password);case 3:if(e=t.sent,console.log(">>>isAuthenticated: ",e),!e){t.next=16;break}return t.next=8,ft.getUser(this.userId);case 8:r=t.sent,ft.setUserInSessionStorage(r.userId),this.$store.commit("commonDetails/setAuthenticationSuccess"),this.$store.commit("expenseDetails/setUser",r),this.$store.commit("expenseDetails/setApproverId",r.managerId),yt.push({name:"expense"}),t.next=17;break;case 16:this.authenticationError="Authentication failed!";case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},ht=vt,gt=(r("32d1"),Object(m["a"])(ht,ut,lt,!1,null,"3c270aae",null)),jt=gt.exports;n["a"].use(u["a"]);var yt=new u["a"]({routes:[{path:"/",name:"home",component:v},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/expense",name:"expense",component:ct},{path:"/login",name:"login",component:jt}]});function xt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function wt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?xt(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):xt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ot={name:"App",mounted:function(){var t=sessionStorage.getItem("user");t?this.$store.commit("commonDetails/setAuthenticationSuccess"):this.$store.commit("commonDetails/setAuthenticationFail")},computed:wt({},Object(c["b"])({userDetails:function(t){return t.commonDetails},expenseDetails:function(t){return t.expenseDetails}})),methods:{login:function(){yt.push({name:"login"})},logout:function(){sessionStorage.clear(),this.$store.commit("commonDetails/logout"),this.$store.commit("expenseDetails/resetTransactions"),yt.push({name:"home"})}}},Ct=Ot,_t=(r("034f"),Object(m["a"])(Ct,a,o,!1,null,null,null)),Dt=_t.exports,Pt=(r("4989"),r("ab8b"),r("ba5a")),kt=r.n(Pt),Et=r("e54c"),It=r("029e").default,St={getAll:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=Et.api.getTransactions.url,t.next=3,It.get(e);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getTransactionsByUserId:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=Et.api.getUserTransactions.url,r=r.replace("{userId}",e),t.next=4,It.get(r);case 4:return s=t.sent,t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),save:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,r){var s,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.map((function(t){var e={id:t.id,description:t.description,amount:parseFloat(t.amount),tax:parseFloat(t.tax),category:t.category,transdate:t.transDate};return e})),n={userId:r.userId,costCentre:r.costCentre,approverId:r.approverId,status:"Submitted",expenseItems:s},console.log(">>>>>Exp to be submitted: ",n),t.prev=3,a=Et.api.postExpenses.url,o=n,t.next=8,It.post(a,o);case 8:if(i=t.sent,200!==i.status&&201!==i.status){t.next=13;break}return t.abrupt("return",i);case 13:console.log(">>>Error: Expense submission:",i.response.data);case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t["catch"](3),console.log(">>>Error: Expense submission: ",t.t0.message),t.abrupt("return",t.t0);case 20:case"end":return t.stop()}}),t,null,[[3,16]])})));function e(e,r){return t.apply(this,arguments)}return e}(),getByUserId:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="".concat(Et.api.getGithubusers.url,"/").concat(e.userId),t.next=3,It.get(r);case 3:return s=t.sent,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},At=r("c1df"),$t=r.n(At),Rt={namespaced:!0,state:{transactions:[],user:{},expense:{isShowExpenses:!0,submissionMessage:""},errors:{userId:"",approverId:"",costCentre:""}},actions:{loadData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,r){var s,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.commit,n=e.state,0!==n.transactions.length){t.next=6;break}return t.next=4,St.getTransactionsByUserId(r);case 4:a=t.sent,a&&200===a.status?(console.log("Data sussessfully fetched: ",a),s("setTransactionData",a.data)):console.log("Error in fetching transaction data:");case 6:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),save:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,s=e.state,t.next=3,St.save(s.transactions,s.user);case 3:n=t.sent,201===n.status||200===n.status?(r("setHideExpenses"),r("setSubmissionMessage",n.data)):r("setSubmissionMessage",n.data);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},mutations:{setTransactionData:function(t,e){e.forEach((function(e){var r=new kt.a;r.id=e.id,r.description=e.description,r.amount=e.amount,r.tax=e.tax,r.transDate=$t()(e.transDate).format("YYYY-MM-DD"),r.category=e.category,r.isPersonal=!1,r.isRemove=!1,r.isOutOfPocket=!1,t.transactions.push(r)}))},addTransaction:function(t,e){var r=0,s=new kt.a;s.id=r,s.description=e.description,s.amount=e.amount,s.tax=e.tax,s.transDate=e.transDate,s.category=e.category,s.isPersonal=!1,s.isRemove=!1,s.isOutOfPocket=!0,t.transactions.push(s)},setIsPersonal:function(t,e){t.transactions.forEach((function(t){t.id===e.id&&(t.isPersonal=e.status)}))},setIsRemove:function(t,e){t.transactions.forEach((function(r,s){r.id===e.id&&t.transactions.splice(s,1)}))},resetTransactions:function(t){t.transactions=[]},setUserid:function(t,e){t.user.userId=e},setCostCentre:function(t,e){t.user.costCentre=e},setApproverId:function(t,e){t.user.approverId=e},setHideExpenses:function(t){t.expense.isShowExpenses=!1},setSubmissionMessage:function(t,e){t.expense.submissionMessage=e},setError:function(t,e){t.errors[e.errorId]=e.errorDesc},resetError:function(t,e){t.errors[e]=""},setUser:function(t,e){t.user=e}}},Tt={namespaced:!0,state:{user:{isAuthenticated:!1}},mutations:{setAuthenticationSuccess:function(t){t.user.isAuthenticated=!0},setAuthenticationFail:function(t){t.user.isAuthenticated=!1},logout:function(t){t.user.isAuthenticated=!1}}};function Ut(t){return Mt.apply(this,arguments)}function Mt(){return Mt=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new c["a"].Store({modules:{expenseDetails:Rt,commonDetails:Tt}}));case 1:case"end":return t.stop()}}),t)}))),Mt.apply(this,arguments)}n["a"].use(c["a"]);var zt=Ut,Lt=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n["a"].config.productionTip=!1,n["a"].use(c["a"]),t.next=4,zt();case 4:e=t.sent,new n["a"]({router:yt,store:e,render:function(t){return t(Dt)}}).$mount("#app");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Lt()},"64a9":function(t,e,r){},"710e":function(t,e,r){},"7f9f":function(t,e,r){"use strict";var s=r("710e"),n=r.n(s);n.a},"938b":function(t,e,r){},ba5a:function(t,e){function r(){id="",transType="",description="",amount=0,tax=0,transDate="",category="",isPersonal=!1,isRemove=!1,isOutOfPocket=!1}t.exports=r},e54c:function(t){t.exports=JSON.parse('{"api":{"postAuthenticateUser":{"url":"/api/authentication"},"getUserById":{"url":"/api/users/{userId}"},"getUserTransactions":{"url":"/api/users/{userId}/transactions"},"postExpenses":{"url":"/api/expenses"},"getTransactions":{"url":"/api/transactions"},"getGithubusers":{"url":"https://api.github.com/users"}}}')}});
//# sourceMappingURL=app.js.map