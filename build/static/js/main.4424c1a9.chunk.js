(this["webpackJsonpcolour-clock-app"]=this["webpackJsonpcolour-clock-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(10),i=n.n(a),s=(n(16),n(4)),u=(n(17),n(5)),c=n(2),l=function(e,t){var n,r=e.toString(),o=[],a=Object(c.a)(r);try{for(a.s();!(n=a.n()).done;){var i=n.value;o.push(parseInt(i,10))}}catch(l){a.e(l)}finally{a.f()}if(t&&o.length<t)for(var s=t-o.length,u=0;u<s;u++)o.unshift(0);return o},d=function(e,t){return l(e,t).join("")},g=function(e){var t=e.getFullYear();return 0===(3&t)&&(t%100!==0||t%400===0)},f=function(e,t){return e/t*100},p=function(e,t,n,r){if(t){var o=e+1;return n&&void 0!==r&&o>=n&&(o=r),[l(e,t).join(""),l(o,t).join("")]}return[e,e+1]},j=function(e){return new Date(e.valueOf())},b={year:{getRotationMarkers:function(e){return p(e.getFullYear())},getProgress:function(e){var t=function(e){var t=e.getMonth(),n=e.getDate(),r=[0,31,59,90,120,151,181,212,243,273,304,334][t]+n;return t>1&&g(e)&&r++,r}(e),n=g(e)?366:365;return f(t,n)},split:function(e){return l(e.getFullYear())},getDurationUntilNext:function(e){var t=j(e);return t.setFullYear(e.getFullYear()+1,0,1),t.setHours(0,0,0,0),t.getTime()-e.getTime()}},month:{getRotationMarkers:function(e){var t=j(e);return t.setMonth(e.getMonth()+1),[e.toLocaleDateString("en-GB",{month:"short"}),t.toLocaleDateString("en-GB",{month:"short"})]},getProgress:function(e){var t=e.getDate(),n=j(e);n.setMonth(e.getMonth()+1),n.setDate(0);var r=n.getDate();return f(t,r+1)},split:function(e){return l(e.getMonth()+1,2)},getDurationUntilNext:function(e){var t=j(e);return t.setMonth(e.getMonth()+1,1),t.setHours(0,0,0,0),t.getTime()-e.getTime()}},date:{getRotationMarkers:function(e){var t=e.getDate(),n=j(e);return n.setDate(t+1),[l(t,2).join(""),l(n.getDate(),2).join("")]},getProgress:function(e){return f(e.getHours(),24)},split:function(e){return l(e.getDate(),2)},getDurationUntilNext:function(e){var t=j(e);return t.setDate(e.getDate()+1),t.setHours(0,0,0,0),t.getTime()-e.getTime()}},hour:{getRotationMarkers:function(e){return p(e.getHours(),2,24,0)},getProgress:function(e){return f(e.getMinutes(),60)},split:function(e){return l(e.getHours(),2)},getDurationUntilNext:function(e){var t=j(e);return t.setHours(e.getHours()+1,0,0,0),t.getTime()-e.getTime()}},minute:{getRotationMarkers:function(e){return p(e.getMinutes(),2,60,0)},getProgress:function(e){return f(e.getSeconds(),60)},split:function(e){return l(e.getMinutes(),2)},getDurationUntilNext:function(e){var t=j(e);return t.setMinutes(e.getMinutes()+1,0,0),t.getTime()-e.getTime()}},second:{getRotationMarkers:function(e){return p(e.getSeconds(),2,60,0)},getProgress:function(e){return f(e.getMilliseconds(),999)},split:function(e){return l(e.getSeconds(),2)},getDurationUntilNext:function(e){var t=j(e);return t.setSeconds(e.getSeconds()+1,0),t.getTime()-e.getTime()}}};window.timeApi=b;var v=n(3),h=n(11),m=n.n(h),O=[0,1,2,3,4,5,6,7,8,9],x=function(e){return"hsla(".concat(e[0],", ").concat(e[1],"%, ").concat(e[2],"%, 1)")},D={};!function(){var e,t=330/(O.length-1),n=Object(c.a)(O);try{for(n.s();!(e=n.n()).done;){var r=e.value;D[r]=[0+t*r,100,50]}}catch(o){n.e(o)}finally{n.f()}}();var y,M=function(e){var t=[],n=e.length,r=360/e.length,o=r/2;if(1===n)t.push([D[0],0]),t.push([D[e[0]],360]);else{var a=0-o;t.push([D[e[e.length-1]],a]),a+=r,e.forEach((function(e){t.push([D[e],a]),a+=r})),t.push([D[e[0]],a])}var i=t.map((function(e){return"".concat(x(e[0])," ").concat(e[1],"deg")}));return"conic-gradient(from 0deg at 50% 50%, ".concat(i.join(", "),")")},k=new URLSearchParams(window.location.search),S=function(e,t){var n=k.get(e),r=n;return"function"===typeof t&&(r=t(n)),r};!function(e){e.DATE="d",e.PAUSED="p"}(y||(y={}));var R=S(y.DATE,(function(e){return e?new Date(e):null})),w=S(y.PAUSED,Boolean),E=m()((function(e,t){var n=function(){return setInterval((function(e,t){var n=t(),r=j(n.date);r.setMilliseconds(r.getMilliseconds()+100),e({date:r})}),100,e,t)};return{paused:w,date:R?new Date(R):new Date,currentGroup:null,interval:w?void 0:n(),refreshRate:100,pause:function(){var n=t();clearInterval(n.interval),e({paused:!0,interval:void 0})},unpause:function(){var t=n();e({paused:!1,interval:t})},resetInterval:function(){var r=t();clearInterval(r.interval);var o=n();e({interval:o})}}}));console.log(E);var T=n(9),C=n.n(T),P=n(0),I=["year","month","date","hour","minute","second"],U=Object(u.a)("div",{marginTop:10,width:"100%",height:400,display:"flex",justifyContent:"center",alignItems:"center"}),L=Object(u.a)("div",{position:"absolute",top:3,width:2,height:10,borderRadius:"30%",opacity:1,backgroundColor:"hsla(0, 0%, 0%, 0.75)",transition:"top 0.175s ease"}),F=Object(u.a)("div",{width:2,height:10,margin:"0 5px"}),A=Object(u.a)("code",Object(s.a)({variants:{show:{true:{transform:"translate(0px, 0px)",opacity:1},false:{transform:"translate(0px, 20px)",opacity:0}}},$$color:"hsla(0, 0%, 0%, 0.35)",position:"absolute",display:"flex",alignItems:"center",top:5,color:"$$color",fontSize:14,fontWeight:"bold",transition:"all 0.175s ease",userSelect:"none"},"& ".concat(F),{backgroundColor:"$$color"})),H=Object(u.a)("div",{position:"absolute",aspectRatio:"1/1",pointerEvents:"none",display:"flex",justifyContent:"center",alignItems:"center",transition:"transform 0.175s ease"}),N=Object(u.a)("div",Object(s.a)({width:"100%",height:"100%",cursor:"grab",pointerEvents:"all",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center",filter:"drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3))",transition:"transform 0.175s ease","&:active":{cursor:"grabbing"},"&:hover":{transform:"scale(1.075)"}},"&:hover ".concat(L),{top:9})),G=function(e){var t=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),o=Object(r.useRef)(null),a=b[e],i=Object(r.useReducer)((function(t,r){if(!n.current)return r;var o=n.current;return r?(o.style.transform="scale(1.05)",E.setState({currentGroup:e})):(o.style.transform="scale(1.0)",E.setState({currentGroup:null})),r}),!1),s=Object(v.a)(i,2),u=s[0],c=s[1],l=Object(r.useReducer)((function(e,t){return a.getRotationMarkers(t)}),["",""]),d=Object(v.a)(l,2),g=d[0],f=d[1],p=Object(r.useCallback)((function(){if(t.current){E.setState({date:new Date});var e=E.getState().date,n=t.current,r=a.getDurationUntilNext(e),i=j(e);i.setMilliseconds(e.getMilliseconds()+r),(o.current=n.animate([{transform:"rotate(0deg)",background:M(a.split(e))},{transform:"rotate(360deg)",background:M(a.split(i))}],{duration:r,iterations:1,easing:"linear"})).addEventListener("finish",p)}}),[a]),h=Object(r.useCallback)((function(){if(t.current){var e=E.getState().date,n=t.current;n.style.background=M(a.split(e));var r=3.6*a.getProgress(e);return n.style.transform="rotate(".concat(r,"deg)"),r}}),[a]);Object(r.useEffect)((function(){if(t.current){var e=E.getState(),n=e.date,r=e.paused;f(n);var i=t.current,s=h(),u=function(){return c(!0)};i.addEventListener("mouseover",u);var l=function(){return c(!1)};return i.addEventListener("mouseout",l),r||(o.current=i.animate([{transform:"rotate(".concat(s,"deg)")},{transform:"rotate(360deg)"}],{duration:a.getDurationUntilNext(n),iterations:1,easing:"linear"})).addEventListener("finish",p),function(){i.removeEventListener("mouseover",u),i.removeEventListener("mouseout",l)}}}),[p,h,a]);var m=E((function(e){return e.paused}));return Object(r.useEffect)((function(){o.current&&(m?o.current.pause():o.current.play())}),[m]),{innerRef:t,outerRef:n,hovered:u,rotationMarkers:g}}(e.representing),n=t.innerRef,o=t.outerRef,a=t.rotationMarkers,i=t.hovered,s=Object(r.useRef)(300-40*I.indexOf(e.representing));return Object(P.jsxs)(H,{"data-representing":e.representing,"data-value":a[0],title:"".concat(e.representing,": ").concat(a[0]),css:{width:s.current},ref:o,children:[Object(P.jsx)(N,{ref:n,children:Object(P.jsx)(L,{})}),Object(P.jsxs)(A,{show:i,children:[a[0],Object(P.jsx)(F,{}),a[1]]})]})},B=function(){return Object(P.jsxs)(U,{css:{position:"relative"},children:[Object(P.jsx)(G,{representing:"year"}),Object(P.jsx)(G,{representing:"month"}),Object(P.jsx)(G,{representing:"date"}),Object(P.jsx)(G,{representing:"hour"}),Object(P.jsx)(G,{representing:"minute"}),Object(P.jsx)(G,{representing:"second"})]})},Y=Object(u.a)("code",{fontSize:"18pt"}),$=Object(r.memo)(Object(u.a)("span",{variants:{bold:{true:{fontWeight:"bold"},false:{fontWeight:"normal"}}}}),(function(e,t){return e.bold===t.bold&&e.children===t.children})),W=function(){var e=E(Object(r.useCallback)((function(e){return{date:e.date,currentGroup:e.currentGroup}}),[]),C.a),t=e.date,n=e.currentGroup,o=t.getMilliseconds().toString();return o=2===o.length?"0":o[0],Object(P.jsxs)(Y,{children:[Object(P.jsx)($,{bold:"year"===n,children:t.getFullYear()}),"/",Object(P.jsx)($,{bold:"month"===n,children:d(t.getMonth()+1,2)}),"/",Object(P.jsx)($,{bold:"date"===n,children:d(t.getDate(),2)})," ",Object(P.jsx)($,{bold:"hour"===n,children:d(t.getHours(),2)}),":",Object(P.jsx)($,{bold:"minute"===n,children:d(t.getMinutes(),2)}),":",Object(P.jsxs)($,{bold:"second"===n,children:[d(t.getSeconds(),2),":",o]})]})},z=function(){var e=E(Object(r.useCallback)((function(e){return{paused:e.paused,pause:e.pause,unpause:e.unpause}}),[]),C.a),t=Object(r.useCallback)((function(t){t.preventDefault(),e.pause()}),[e]),n=Object(r.useCallback)((function(t){t.preventDefault(),e.unpause()}),[e]);return Object(P.jsxs)("div",{children:[Object(P.jsx)("button",{disabled:!e.paused,onClick:n,children:"play"}),Object(P.jsx)("button",{disabled:e.paused,onClick:t,children:"pause"})]})},J=Object(u.a)("div",{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"8px"});var q=function(){return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsxs)("div",{children:[Object(P.jsx)(J,{children:Object(P.jsx)(z,{})}),Object(P.jsxs)("form",{children:[Object(P.jsx)("input",{type:"datetime-local",name:y.DATE,defaultValue:R?k.get(y.DATE)+"":void 0,required:!0}),Object(P.jsx)("input",{type:"hidden",name:y.PAUSED,value:"1"}),Object(P.jsx)("button",{type:"submit",children:"set"})]})]}),Object(P.jsx)(W,{}),Object(P.jsx)(B,{})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),a(e),i(e)}))};i.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(q,{})}),document.getElementById("root")),V(console.log)}},[[19,1,2]]]);
//# sourceMappingURL=main.4424c1a9.chunk.js.map