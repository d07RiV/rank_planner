(this.webpackJsonprank_planner=this.webpackJsonprank_planner||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),c=n.n(l),o=(n(16),n(17),n(1)),u=n(4),i=n.n(u);n(18);function m(e,t){var n=r.a.useState((function(){return JSON.parse(localStorage.getItem(e))||("function"===typeof t?t():t)})),a=Object(o.a)(n,2),l=a[0],c=a[1];return r.a.useEffect((function(){localStorage.setItem(e,JSON.stringify(l))}),[e,l]),[l,c]}var s=[0,0,2e3,5e3,1e4,15e3,2e4,25e3,3e4,35e3,4e4,45e3,5e4,55e3,6e4],h=[0,13e3,12e3,11e3,1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400];function f(){for(var e=m("plan",[]),t=Object(o.a)(e,2),n=t[0],a=t[1],l=m("current",0),c=Object(o.a)(l,2),u=c[0],i=c[1],f=m("goal",14),d=Object(o.a)(f,2),g=d[0],p=d[1],v=[],E=u;E<s[g];){v.push(E),n.length<v.length&&n.push(1);var b=h[n[v.length-1]]-.2*E;b<0&&(b=Math.max(b/2,-2500)),E+=b}n.length=v.length,v.push(E);var k=function(e){if(e<n.length){return r.a.createElement("select",{value:n[e],onChange:function(t){return function(t){var r=n.slice();r[e]=t,a(r)}(parseInt(t.target.value))}},h.map((function(e,t){return r.a.createElement("option",{value:t,key:t},t||"None")})))}return""};return r.a.createElement("div",{className:"RankPlanner"},r.a.createElement("div",{className:"header"},"To find your current RP, use this macro (for rank 3 and higher):",r.a.createElement("br",null),r.a.createElement("code",{onClick:function(e){return function(e){if(window.getSelection&&document.createRange){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}}(e.target)}},'/script print("Current RP: "..math.floor(GetPVPRankProgress()*5000+(UnitPVPRank("player")-6)*5000))')),r.a.createElement("div",{className:"header"},r.a.createElement("span",null,"Current RP: ",r.a.createElement("input",{type:"number",min:0,max:6e4,step:1,value:u,onChange:function(e){return i(parseInt(e.target.value||0))}})),r.a.createElement("span",null,"Target rank: ",r.a.createElement("input",{type:"number",min:2,max:14,step:1,value:g,onChange:function(e){return p(parseInt(e.target.value||0))}}))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"RP"),r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Bracket"))),r.a.createElement("tbody",null,v.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.toFixed(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}(e)),r.a.createElement("td",null,function(e){for(var t=0;t<14&&e>=s[t+1];)t+=1;return 14===t?"".concat(t):"".concat(t," (").concat((100*(e-s[t])/(s[t+1]-s[t])).toFixed(0),"%)")}(e)),r.a.createElement("td",null,k(t)))})))))}var d=n(5),g=n(6),p=n(7),v=n(8),E={"48,1":[32,2],"48,2":[34,0],"48,3":[36,0],"48,4":[38,0],"48,5":[40,0],"48,6":[42,0],"48,7":[44,0],"48,8":[47,0],"49,1":[40,2],"49,2":[42,2],"49,3":[44,0],"49,4":[47,0],"49,5":[49,0],"49,6":[52,0],"49,7":[55,0],"49,8":[58,0],"49,9":[61,0],"50,1":[49,2],"50,2":[52,0],"50,3":[55,2],"50,4":[58,0],"50,5":[61,0],"50,6":[65,0],"50,7":[68,0],"50,8":[72,0],"50,9":[76,0],"51,1":[59,2],"51,2":[62,0],"51,3":[66,0],"51,4":[69,0],"51,5":[73,0],"51,6":[77,0],"51,7":[82,0],"51,8":[86,0],"51,9":[91,0],"51,10":[96,0],"52,1":[70,2],"52,2":[74,0],"52,3":[78,0],"52,4":[82,0],"52,5":[87,0],"52,6":[92,0],"52,7":[97,0],"52,8":[102,0],"52,9":[108,0],"52,10":[114,0],"53,1":[82,2],"53,2":[87,1],"53,3":[91,0],"53,4":[96,0],"53,5":[102,0],"53,6":[107,0],"53,7":[113,0],"53,8":[120,0],"53,9":[126,0],"53,10":[133,0],"53,11":[141,0],"54,1":[95,2],"54,2":[100,2],"54,3":[106,1],"54,4":[111,0],"54,5":[118,0],"54,6":[124,0],"54,7":[131,0],"54,8":[138,0],"54,9":[146,0],"54,10":[154,0],"54,11":[163,0],"55,1":[109,2],"55,2":[115,2],"55,3":[121,2],"55,4":[128,0],"55,5":[135,0],"55,6":[142,0],"55,7":[150,0],"55,8":[159,0],"55,9":[166,0],"55,10":[177,0],"55,11":[186,0],"55,12":[197,0],"56,1":[124,2],"56,2":[131,2],"56,3":[138,0],"56,4":[146,0],"56,5":[154,0],"56,6":[163,0],"56,7":[172,0],"56,8":[181,0],"56,9":[191,0],"56,10":[202,0],"56,11":[213,0],"56,12":[225,0],"57,1":[141,2],"57,2":[148,2],"57,3":[156,0],"57,4":[165,0],"57,5":[174,0],"57,6":[184,0],"57,7":[194,0],"57,8":[205,0],"57,9":[216,0],"57,10":[228,0],"57,11":[241,0],"57,12":[254,0],"57,13":[268,0],"58,1":[159,2],"58,2":[168,0],"58,3":[176,2],"58,4":[186,0],"58,5":[196,0],"58,6":[207,0],"58,7":[218,0],"58,8":[231,0],"58,9":[243,0],"58,10":[257,0],"58,11":[271,0],"58,12":[286,0],"58,13":[302,0],"59,1":[178,2],"59,2":[188,2],"59,3":[198,0],"59,4":[209,0],"59,5":[221,0],"59,6":[233,0],"59,7":[246,0],"59,8":[260,0],"59,9":[274,0],"59,10":[290,0],"59,11":[306,0],"59,12":[323,0],"59,13":[341,0],"59,14":[360,0],"60,1":[199,2],"60,2":[210,2],"60,3":[221,2],"60,4":[233,2],"60,5":[246,2],"60,6":[260,2],"60,7":[274,2],"60,8":[289,2],"60,9":[305,1],"60,10":[321,2],"60,11":[339,2],"60,12":[358,2],"60,13":[377,2],"60,14":[398,2]},b=["uncertain","probably","confirmed"],k=function(){for(var e={},t=0,n=Object.entries(E);t<n.length;t++){var a=Object(o.a)(n[t],2),r=a[0],l=Object(o.a)(a[1],2)[1],c=r.split(",").map((function(e){return parseInt(e)})),u=Object(o.a)(c,2),i=u[0],m=u[1];2!==l||60!==i&&1!==m||(e[r]=!0)}return e},y={horde:["Scout","Grunt","Sergeant","Senior Sergeant","First Sergeant","Stone Guard","Blood Guard","Legionnaire","Centurion","Champion","Lieutenant General","General","Warlord","High Warlord"],alliance:["Private","Corporal","Sergeant","Master Sergeant","Sergeant Major","Knight","Knight-Lieutenant","Knight-Captain","Knight-Champion","Lieutenant Commander","Commander","Marshal","Field Marshal","Grand Marshal"]},O=function(e,t){return Object(v.a)(Array(t-e+1)).map((function(t,n){return e+n}))};function j(){var e=m("honorUsed",k),t=Object(o.a)(e,2),n=t[0],a=t[1],l=m("faction","horde"),c=Object(o.a)(l,2),u=c[0],s=c[1],h=m("needed",0),f=Object(o.a)(h,2),j=f[0],C=f[1];j>500&&C(500);var S=r.a.useState([]),N=Object(o.a)(S,2),w=N[0],R=N[1],P=r.a.useMemo((function(){for(var e=O(0,500).map((function(){return[]})),t=0,a=Object.entries(E);t<a.length;t++){var r=Object(o.a)(a[t],2),l=r[0],c=Object(o.a)(r[1],1)[0];if(n[l])for(var u=0;u+c<=500;++u)(0===u||e[u].length)&&e[u+c].push(c)}return console.log(e,n),e}),[n]),M=r.a.useMemo((function(){for(var e=j;e>0&&(!P[e]||!P[e].length);)--e;var t=[];return function e(n,a,r){if(0!==n){var l,c=Object(p.a)(P[n]);try{for(c.s();!(l=c.n()).done;){var o=l.value;o<=a&&e(n-o,o,[].concat(Object(v.a)(r),[o]))}}catch(u){c.e(u)}finally{c.f()}}else r.length>0&&t.push(r)}(e,500,[]),t.sort((function(e,t){for(var n=0;n<e.length||n<t.length;++n)if(e[n]!==t[n])return(t[n]||0)-(e[n]||0);return 0})),[e,t]}),[P,j]),x=Object(o.a)(M,2),I=x[0],G=x[1];return r.a.createElement("div",{className:"HonorCap"},r.a.createElement("div",{className:"header"},"Only highlighted cells will be used in calculations. Click on cells to toggle selection."),r.a.createElement("table",{className:"honorTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("select",{value:u,onChange:function(e){return s(e.target.value)}},r.a.createElement("option",{value:"horde"},"Horde"),r.a.createElement("option",{value:"alliance"},"Alliance"))),y[u].map((function(e,t){return r.a.createElement("th",{key:t},r.a.createElement("span",{title:e},e))}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Level"),y[u].map((function(e,t){return r.a.createElement("th",{key:t},t+1)})))),r.a.createElement("tbody",null,O(48,60).map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e),O(1,14).map((function(t){var l="".concat(e,",").concat(t),c=E[l];if(c){return r.a.createElement("td",{key:t,className:i()(b[c[1]],{used:n[l],hover:w.includes(c[0])}),title:b[c[1]],onClick:function(){return a(Object(g.a)(Object(g.a)({},n),{},Object(d.a)({},l,!n[l])))}},c[0])}return r.a.createElement("td",{key:t})})))})))),r.a.createElement("div",null,"Honor needed: ",r.a.createElement("input",{type:"number",min:0,max:500,step:1,value:j,onChange:function(e){return C(parseInt(e.target.value||0))}}),I<j&&I>0&&r.a.createElement("span",{className:"warning"},"(closest possible honor: ",I,")")),r.a.createElement("div",{className:"results"},r.a.createElement("ul",null,0===G.length&&r.a.createElement("li",{className:"empty"},"Honor below lowest value"),G.length>0&&G.map((function(e,t){var n,a=[],l=Object(p.a)(e);try{for(l.s();!(n=l.n()).done;){var c=n.value;a.length&&a[a.length-1][0]===c?a[a.length-1][1]+=1:a.push([c,1])}}catch(u){l.e(u)}finally{l.f()}return r.a.createElement("li",{key:t,onMouseEnter:function(){return R(e)},onMouseLeave:function(){return R([])}},a.map((function(e,t){var n=Object(o.a)(e,2),a=n[0],l=n[1];return r.a.createElement("span",{key:a},t>0&&" + ",a,l>1&&" x".concat(l))})))})))))}var C=function(){var e=r.a.useState("rank"),t=Object(o.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("ul",{className:"tabs"},r.a.createElement("li",{className:i()({active:"rank"===n}),onClick:function(){return a("rank")}},"Rank Planner"),r.a.createElement("li",{className:i()({active:"honor"===n}),onClick:function(){return a("honor")}},"Honor Cap")),"rank"===n&&r.a.createElement(f,null),"honor"===n&&r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.61aa76db.chunk.js.map