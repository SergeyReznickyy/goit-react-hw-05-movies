"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[150],{377:function(n,e,t){t.d(e,{Hg:function(){return o},IQ:function(){return p},Jh:function(){return l},pm:function(){return s},yK:function(){return f}});var r=t(861),a=t(757),u=t.n(a),c=t(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="171cb119fb2bebf41fcc8130ecf25138",o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&include_adult=false&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=171cb119fb2bebf41fcc8130ecf25138&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=171cb119fb2bebf41fcc8130ecf25138&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},150:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,u,c=t(439),i=t(168),o=t(867),s=t(128),f=o.ZP.div(r||(r=(0,i.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin-bottom: 16px;\n"]))),p=o.ZP.input(a||(a=(0,i.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n  width: 300px;\n"]))),l=(0,o.ZP)(s.G4C)(u||(u=(0,i.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),v=t(184),d=function(n){var e=n.value,t=n.onChange;return(0,v.jsxs)(f,{children:[(0,v.jsx)(l,{}),(0,v.jsx)(p,{type:"text",value:e,onChange:function(n){return t(n.target.value)}})]})},h=t(689),x=t(87),g=t(629),m=function(n){var e=n.movies,t=(0,h.TH)();return e?(0,v.jsx)("ul",{children:e.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(x.rU,{to:"".concat(n.id),state:{from:t},children:n.title})},n.id)}))}):(0,v.jsx)(g.Z,{})},b=t(433),Z=t(377),w=t(791),y=function(){var n,e=(0,x.lr)(),t=(0,c.Z)(e,2),r=t[0],a=t[1],u=null!==(n=r.get("query"))&&void 0!==n?n:"",i=function(n){var e=(0,w.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1];return(0,w.useEffect)((function(){""!==n&&(0,Z.pm)(n).then((function(n){a((0,b.Z)(n.results))}))}),[n]),{movies:r}}(u),o=i.movies.filter((function(n){return n.title.toLowerCase().includes(u.toLowerCase())}));return(0,v.jsxs)("div",{children:[(0,v.jsx)(d,{value:u,onChange:function(n){a(""!==n?{query:n}:{})}}),(0,v.jsx)(m,{movies:o})]})}}}]);
//# sourceMappingURL=150.1da3c667.chunk.js.map