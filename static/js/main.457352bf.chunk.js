(this["webpackJsonpen-list"]=this["webpackJsonpen-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(3),s=n.n(r),j=(n(13),n(14),n(7)),o=n(8),d=n(4),h=n(5),O=function(){function e(){Object(d.a)(this,e)}return Object(h.a)(e,null,[{key:"getWordsJSON",value:function(){return Object({NODE_ENV:"production",PUBLIC_URL:"/en-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_TOKEN_NAME:"token"}).REACT_WORDS_JSON||"words.json"}},{key:"getToken",value:function(){return"token"}}]),e}(),l=n(0),u=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("../".concat(O.getWordsJSON()),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),Object(l.jsxs)(o.a,{striped:!0,bordered:!0,hover:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"English"}),Object(l.jsx)("th",{children:"Czech"}),Object(l.jsx)("th",{children:"Definition"}),Object(l.jsx)("th",{children:"Example"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t+1}),Object(l.jsx)("td",{children:e.english}),Object(l.jsx)("td",{children:e.czech}),Object(l.jsx)("td",{children:e.definition}),Object(l.jsx)("td",{children:e.example})]})}))})]})};var b=function(){return Object(l.jsx)("section",{className:"App",children:Object(l.jsx)(u,{})})},a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.457352bf.chunk.js.map