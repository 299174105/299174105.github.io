(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){},128:function(e,t,a){var c={"./article-1.md":[131,3],"./article-2.md":[132,4],"./article-3.md":[133,5],"./article-4.md":[134,6]};function n(e){if(!a.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],n=t[0];return a.e(t[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(c)},n.id=128,e.exports=n},129:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(40),s=a.n(r),i=a(23),j=a(24),b=a(27),o=a(26),l=a(22),d=a(10),h=(a(113),a(130)),O=a(2);function x(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"ui  segment",children:Object(O.jsx)(h.a,{src:"/images/paragraph.png"})}),Object(O.jsx)("div",{className:"ui segment",children:Object(O.jsx)(h.a,{src:"/images/paragraph.png"})})]})}a(120);var u=function(e){Object(b.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"about",children:"about me:?"})}}]),a}(n.a.Component),m=a(149),p=(a(121),function(e){Object(b.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"ui  segment",children:Object(O.jsx)(h.a,{src:"/images/short-paragraph.png"})}),Object(O.jsx)("div",{className:"ui segment",children:Object(O.jsx)(h.a,{src:"/images/paragraph.png"})})]})}}]),a}(n.a.Component)),v=a(96),f=a(97),g=a(77),y=a(148),k=function(e){Object(b.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{style:{margin:"10px 20px"},children:Object(O.jsxs)(v.a,{itemsPerRow:"4",children:[Object(O.jsxs)(f.a,{raised:!0,as:l.b,to:"/blog/1",children:[Object(O.jsxs)(f.a.Content,{children:[Object(O.jsx)(h.a,{avatar:!0,floated:"right",size:"tiny",src:"/images/avatar(blue).png"}),Object(O.jsx)(f.a.Header,{children:"Docker-redis"}),Object(O.jsx)(f.a.Meta,{children:"accel"}),Object(O.jsx)(f.a.Description,{children:"install redis on docker"})]}),Object(O.jsx)(g.a,{extra:!0,children:Object(O.jsx)(y.a,{children:"redis"})})]}),Object(O.jsxs)(f.a,{raised:!0,as:l.b,to:"/blog/2",children:[Object(O.jsxs)(f.a.Content,{children:[Object(O.jsx)(h.a,{avatar:!0,floated:"right",size:"tiny",src:"/images/avatar(blue).png"}),Object(O.jsx)(f.a.Header,{children:"Docker-rabbitMQ"}),Object(O.jsx)(f.a.Meta,{children:"accel"}),Object(O.jsx)(f.a.Description,{children:"install rabbitMQ on docker"})]}),Object(O.jsx)(g.a,{extra:!0,children:Object(O.jsx)(y.a,{children:"rabbitMQ"})})]}),Object(O.jsxs)(f.a,{as:l.b,to:"/blog/3",children:[Object(O.jsxs)(f.a.Content,{children:[Object(O.jsx)(h.a,{avatar:!0,floated:"right",size:"tiny",src:"/images/avatar(blue).png"}),Object(O.jsx)(f.a.Header,{children:"Docker-bitwarden"}),Object(O.jsx)(f.a.Meta,{children:"accel"}),Object(O.jsx)(f.a.Description,{children:"install bitwarden on docker"})]}),Object(O.jsx)(g.a,{extra:!0,children:Object(O.jsx)(y.a,{children:"bitwarden"})})]}),Object(O.jsxs)(f.a,{as:l.b,to:"/blog/4",children:[Object(O.jsxs)(f.a.Content,{children:[Object(O.jsx)(h.a,{avatar:!0,floated:"right",size:"tiny",src:"/images/avatar(blue).png"}),Object(O.jsx)(f.a.Header,{children:"Docker-jellyfin"}),Object(O.jsx)(f.a.Meta,{children:"accel"}),Object(O.jsx)(f.a.Description,{children:"install jellyfin on docker"})]}),Object(O.jsx)(g.a,{extra:!0,children:Object(O.jsx)(y.a,{children:"jellyfin"})})]})]})})}}]),a}(n.a.Component),w=a(86),D=a(85),M=a.n(D),N=a(99),C=a(100),I=function(e){Object(b.a)(c,e);var t=Object(o.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this,e)).state={markdown:""},a}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=Object(N.a)(M.a.mark((function e(){var t,c,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(128)("./article-".concat(this.props.match.params.id,".md"));case 2:return t=e.sent,e.next=5,fetch(t.default);case 5:return c=e.sent,e.next=8,c.text();case 8:n=e.sent,this.setState({markdown:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)("div",{className:"markdown-body",children:Object(O.jsx)(C.a,{children:this.state.markdown})},this.props.match.params.id)}}]),c}(n.a.Component),z=function(e){return Object(c.createElement)(I,Object(w.a)(Object(w.a)({},e),{},{key:e.match.params.id}))},E=function(e){Object(b.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)("div",{className:"my-nav-bar",children:Object(O.jsxs)(m.a,{pointing:!0,secondary:!0,children:[Object(O.jsx)(m.a.Item,{name:"\u4e3b\u9875",as:l.b,to:"/home"}),Object(O.jsx)(m.a.Item,{name:"\u6280\u672f",as:l.b,to:"/tech"}),Object(O.jsx)(m.a.Item,{name:"\u535a\u5ba2",as:l.b,to:"/blog"}),Object(O.jsx)(m.a.Menu,{position:"right",children:Object(O.jsx)(m.a.Item,{name:"\u5173\u4e8e",as:l.b,to:"/about"})})]})}),Object(O.jsx)("div",{className:"blogs-urls",children:Object(O.jsx)(d.c,{children:Object(O.jsx)(d.a,{path:"/blog",children:Object(O.jsx)(k,{})})})}),Object(O.jsx)("div",{className:"my-container",children:Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{exact:!0,path:["/","/home"],children:Object(O.jsx)(p,{})}),Object(O.jsx)(d.a,{path:"/tech",children:Object(O.jsx)(x,{})}),Object(O.jsx)(d.a,{path:"/blog/:id",component:z}),Object(O.jsx)(d.a,{path:"/about",children:Object(O.jsx)(u,{})})]})})]})})}}]),a}(n.a.Component);s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.8f54c48d.chunk.js.map