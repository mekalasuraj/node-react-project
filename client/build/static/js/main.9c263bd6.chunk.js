(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[1],{11:function(t,e,c){"use strict";c.d(e,"c",(function(){return n})),c.d(e,"a",(function(){return a})),c.d(e,"d",(function(){return r})),c.d(e,"b",(function(){return o}));var n="GET_PRODUCTS",a="ADD_TO_CART",r="TOTAL_COST",o="GET_PRODUCT"},35:function(t,e,c){},37:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c(0),r=c.n(a),o=c(13),s=c.n(o),i=c(20),u=c(2),d=c(21),l=c(9),b=c(24),j=c(25),O=c(8),p=c(11),h={items:[],cartItems:[],totalCost:0,productItem:{}};var m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case p.c:return Object(O.a)(Object(O.a)({},t),{},{items:n});case p.a:return Object(O.a)(Object(O.a)({},t),{},{cartItems:n.cartItems});case p.d:return Object(O.a)(Object(O.a)({},t),{},{totalCost:t.totalCost+n});case p.b:return Object(O.a)(Object(O.a)({},t),{},{productItem:n});default:return t}},f=Object(l.combineReducers)({productReducer:m}),T=[j.a],v=Object(l.createStore)(f,{},Object(b.composeWithDevTools)(l.applyMiddleware.apply(void 0,T))),x=(v.getState(),v),y=(c(35),r.a.lazy((function(){return Promise.all([c.e(0),c.e(4)]).then(c.bind(null,70))}))),C=r.a.lazy((function(){return Promise.all([c.e(0),c.e(5)]).then(c.bind(null,69))})),I=function(){return Object(n.jsx)(d.a,{store:x,children:Object(n.jsx)(i.a,{children:Object(n.jsxs)(r.a.Suspense,{fallback:Object(n.jsx)("div",{children:"Loading..."}),children:[Object(n.jsx)(u.a,{exact:!0,path:"/",component:y}),Object(n.jsx)(u.a,{exact:!0,path:"/product/:id",component:C})]})})})};s.a.render(Object(n.jsx)(I,{}),document.getElementById("root"))}},[[37,2,3]]]);
//# sourceMappingURL=main.9c263bd6.chunk.js.map