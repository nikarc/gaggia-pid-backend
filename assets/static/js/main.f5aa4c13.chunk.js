(this["webpackJsonppid-frontend"]=this["webpackJsonppid-frontend"]||[]).push([[0],{14:function(n,e,t){n.exports=t(26)},19:function(n,e,t){},20:function(n,e,t){},21:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(8),o=t.n(c),i=(t(19),t(20),t(21),t(1)),l=t(2);function s(){var n=Object(i.a)(["\n    width: auto;\n    height: ","px;\n    border-radius: ","px;\n    box-shadow: 0px, 4px, 4px, rgba(0, 0, 0, 0.25);\n    color: white;\n    background-color: #7d7d7d;\n    text-transform: uppercase;\n"]);return s=function(){return n},n}var u=l.a.button(s(),40,20),m=function(n){var e=n.children,t=n.className;return r.a.createElement(u,{className:t},e)},f=t(13),d=t(28),p=t(12),g="hsl(356.1,75.4%,52.2%)",v=200,b=25,h=function(n){return Math.floor((n-180)/35*500)};function w(){var n=Object(i.a)(["\n    font-size: 40px;\n"]);return w=function(){return n},n}function x(){var n=Object(i.a)(["\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, calc(-50% - 10px));\n"]);return x=function(){return n},n}function E(){var n=Object(i.a)(["\n    position: relative;\n"]);return E=function(){return n},n}function k(){var n=Object(i.a)(["\n    @keyframes RingProgress {\n        0% {\n            stroke-dasharray: 0 ",";\n        }\n    }\n    width: ","px;\n    height: ","px;\n    transform: rotate(125deg);\n\n    circle {\n        fill: none;\n    }\n\n    .ring {\n        transform-origin: 50%;\n\n        .ring__background {\n            stroke: ",";\n        }\n        .ring__completed {\n            stroke-linecap: round;\n            stroke: ",";\n            animation: RingProgress 0.4s ease-in-out forwards;\n        }\n    }\n"]);return k=function(){return n},n}var j=l.a.svg(k(),500,v,v,Object(p.a)(.6,g),g),N=l.a.div(E()),O=l.a.div(x()),_=l.a.p(w()),y=function(){var n=v,e=b,t=500/(2*Math.PI),c=Object(a.useState)(204),o=Object(f.a)(c,2),i=o[0];o[1];return r.a.createElement(N,null,r.a.createElement(j,{className:"temperature-ring",viewBox:"0 0 ".concat(n," ").concat(n)},r.a.createElement("g",{className:"ring"},r.a.createElement("circle",{className:"ring__background",cx:"50%",cy:"50%",strokeWidth:e,r:t}),r.a.createElement("circle",{onMouseMove:function(){return console.log("drag end")},className:"ring__completed",cx:"50%",cy:"50%",strokeWidth:e,r:t,strokeDasharray:"".concat(h(i),", ").concat(500)}))),r.a.createElement(O,null,r.a.createElement(d.a,{color:"black",size:24}),r.a.createElement(_,null,"".concat(i,"\xba")),r.a.createElement("small",null,"198\xba")))};function M(){var n=Object(i.a)(["\n    flex: 0 0 100%;\n    display: flex;\n"]);return M=function(){return n},n}function B(){var n=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n"]);return B=function(){return n},n}function W(){var n=Object(i.a)(["\n    width: 320px;\n"]);return W=function(){return n},n}var P=Object(l.a)(m)(W()),z=l.a.div(B()),I=l.a.div(M()),J=function(n){var e=n.className;return r.a.createElement("div",{className:"brew-panel"},r.a.createElement(z,{className:"brew-panel__wrap"},r.a.createElement(I,{className:"brew-panel__settings"},r.a.createElement(y,null)),r.a.createElement(P,{className:e},"Brew")))};var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,{className:"brew-panel"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.f5aa4c13.chunk.js.map