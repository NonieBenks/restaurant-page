(()=>{"use strict";var e,n,t={716:(e,n,t)=>{t.r(n),t.d(n,{Home:()=>a});const r=t.p+"7c6f2fc8a5898e3e61bb.jpeg",o=new Image;class a{constructor(){}buildHeader(){const e=document.createElement("header"),n=document.createElement("nav"),t=document.createElement("div"),r=document.createElement("div");t.className="logo-block",r.className="button-container",t.innerText="Chez \n Adeline",e.appendChild(n),n.appendChild(t),n.appendChild(r),["Home","Menu","About"].forEach((e=>{const n=document.createElement("button");n.className=`${e.toLowerCase()}-button`,r.appendChild(n),n.innerText=e})),document.body.appendChild(n)}buildContent(){o.src=r;const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),a=document.createElement("button");n.classList.add("content-block","home-content-block"),e.className="content-container",t.className="description-block",a.className="menu-button",a.innerText="Menu",t.innerText="Welcome to Chez Adeline! \n Bringing you the most delicate french culinary experience since 1965.",n.appendChild(e),e.appendChild(t),e.appendChild(a),n.appendChild(o),document.body.appendChild(n)}}},988:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(168),o=t.n(r),a=t(433),i=t.n(a),c=t(220),l=t.n(c),s=new URL(t(581),t.b),d=new URL(t(694),t.b),u=i()(o()),p=l()(s),f=l()(d);u.push([e.id,`@font-face {\n    font-family: 'regularFont';\n    src: url(${p}) format('ttf');\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'boldFont';\n    src: url(${f}) format('ttf');\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    font-family: 'regularFont', serif;\n    font-weight: 400;\n    background-color: #EFC38D;\n    button {\n        font-family: 'regularFont', serif;\n        font-weight: 700;\n        font-size: 20px;\n        background-color: black;\n        color: white;\n        border-radius: 3px;\n        border: none;\n        height: 40px;\n        padding: 0px 12px;\n        margin: auto;\n        grid-area: button;\n    }\n}\n\n/* Header styles */\n\nnav {\n    width: 100vw;\n    height: 12vh;\n    background-color: #792820;\n    display: flex;\n    justify-content: space-between;\n    .logo-block {\n        background-color: #F8F8F8;\n        height: 70px;\n        width: 70px;\n        border-radius: 50px;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        text-align: center;\n        margin: auto 12px auto;\n    }\n    .button-container {\n        display: flex;\n        width: 35vw;\n        button {\n            height: 100%;\n            font-size: 24px;\n            background-color: #792820;\n        }\n    }\n}\n\n/* Content styles */\n\n.content-block {\n    height: 100%;\n    margin: 20px;\n    display: flex;\n    text-align: center;\n    justify-content: space-around;\n}\n\n.home-content-block {\n    .content-container {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        grid-template-areas:\n            "logo . ."\n            "desc desc desc"\n            ". button . ";\n        height: fit-content;\n        \n        .description-block {\n            margin: 20px;\n            grid-area: desc;\n            font-size: 20px;\n            max-width: 400px;\n            text-align: center;\n        }\n    }\n    img {\n        height: calc(60vh - 40px);\n        border: 3px solid white;\n    }\n}\n\n.about-content-block {\n    flex-direction: column;\n    .about-content-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        font-size: 20px;\n        margin: 20px;\n        img {\n            margin: 20px;\n            height: calc(60vh - 40px);\n            border: 3px solid white;\n        }\n    }\n    .contacts-container {\n        display: flex;\n        flex-direction: column;\n        font-size: 20px;\n        align-items: center;\n        width: fit-content;\n        margin: auto;\n        border: 2px solid #792820;\n        border-radius: 5px;\n        padding: 20px;\n        text-align: center;\n        .order-info {\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n    }\n}\n\n\n.menu-container {\n    display: grid;\n        @media (max-width: 1100px) {\n            grid-template-columns: 1fr 1fr;\n        }\n\n        @media (min-width: 1101px) {\n        grid-template-columns: 1fr 1fr 1fr;\n        }\n    .menu-item {\n        text-align: center;\n        margin: 15px auto;\n        img {\n            border-radius: 3px;\n            border: 3px solid #792820;\n        }\n        h4 {\n            margin: 5px;\n            font-size: 18px;\n            color:#792820; \n        }\n        p{\n            text-align: end;\n            padding: 15px;\n            margin: 0;\n            font-size: 18px;\n            color: white;\n            font-weight: 600;\n        }\n    }\n}\n\n\n\n\n\n`,""]);const m=u},433:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},220:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},168:e=>{e.exports=function(e){return e[1]}},673:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var l=r(e,o),s=0;s<a.length;s++){var d=t(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},262:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},357:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},657:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},598:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},626:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},694:(e,n,t)=>{e.exports=t.p+"16239a224fed93f024de.ttf"},581:(e,n,t)=>{e.exports=t.p+"041fa3a6481f853c4e05.ttf"}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={id:e,exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((n,t)=>(o.f[t](e,n),n)),[])),o.u=e=>e+".main.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e={},n="restaurant-page:",o.l=(t,r,a,i)=>{if(e[t])e[t].push(r);else{var c,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+a){c=u;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",n+a),c.src=t),e[t]=[r];var p=(n,r)=>{c.onerror=c.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),n)return n(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={792:0};o.f.j=(n,t)=>{var r=o.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(((t,o)=>r=e[n]=[t,o]));t.push(r[2]=a);var i=o.p+o.u(n),c=new Error;o.l(i,(t=>{if(o.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}}),"chunk-"+n,n)}};var n=(n,t)=>{var r,a,[i,c,l]=t,s=0;if(i.some((n=>0!==e[n]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);l&&l(o)}for(n&&n(t);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkrestaurant_page=self.webpackChunkrestaurant_page||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),o.nc=void 0,(()=>{var e=o(716),n=o(673),t=o.n(n),r=o(598),a=o.n(r),i=o(262),c=o.n(i),l=o(657),s=o.n(l),d=o(357),u=o.n(d),p=o(626),f=o.n(p),m=o(988),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals;let g=new e.Home("../assets/img/noodles.jpeg");g.buildHeader(),g.buildContent();const b=document.querySelector(".home-button"),v=document.querySelectorAll(".menu-button"),x=document.querySelector(".about-button");function y(){let e=document.querySelector(".content-block");null!==e&&e.remove()}b.addEventListener("click",(()=>{Promise.resolve().then(o.bind(o,716)).then((e=>{y(),(new e.Home).buildContent()}))})),v.forEach((e=>{e.addEventListener("click",(()=>{o.e(773).then(o.bind(o,684)).then((e=>{y(),(new e.Menu).requestMenuItems()}))}))})),x.addEventListener("click",(()=>{o.e(833).then(o.bind(o,715)).then((e=>{y(),new e.About("../assets/img/restaurant.jpeg").buildAboutContent()}))}))})()})();