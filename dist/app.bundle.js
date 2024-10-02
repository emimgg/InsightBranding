(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]),i.push([n.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --main-blue: #00264c;\n    --secondary-blue: #012b558f;\n    --main-yellow: #ffb800;\n    --main-bg: #f7f7f7;\n    font-family: 'Montserrat';\n}\n\nbody {\n    background-color: var(--main-bg);\n}\n\nli {\n    list-style: none;\n}\n\nheader {\n    border-bottom: 0.2px solid var(--main-blue);\n    background-color: #fff;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    gap: 8px;\n    width: 100%;\n    position: fixed;\n    height: 70px;\n    top: 0;\n    left: 0;\n    z-index: 100;\n}\n\n.logo-wrapper {\n    height: 42px;\n    display: flex;\n    justify-content: center;\n    align-items: end;\n    flex-shrink: 1;\n}\n\n.logo-wrapper h1 {\n    width: 50px;\n    font-size: 0.5rem;\n    font-family: 'Montserrat';\n    font-weight: 300;\n    letter-spacing: 2px;\n}\n\n\n#logo {\n    max-height: 25px;\n    max-width: 100%;\n    object-fit: contain; /* Ensures the image fits within the wrapper without distortion */\n}\n\n\nul {\n    display: flex;\n    gap: 8px;\n    justify-content: center;\n}\n\n.navbar .nav-item button {\n    background-color: transparent;\n    font-size: 0.8rem;\n\n}\n\n.title {\n    color: var(--main-blue);\n}\n\n.highlighted {\n    color: var(--main-yellow);\n}\n\n.hero {\n    padding: 80px 12px;\n    margin-top: 70px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.hero-title {\n    font-size: 1.8rem;\n}\n\nbutton {\n    background: none;\n    border: none;\n    padding: 0;\n    margin: 0;\n    font: inherit;\n    color: inherit;\n    cursor: pointer;\n    outline: none;\n}\n\nbutton:focus {\n    outline: none;\n}\n\n.cta {\n    background-color: var(--main-yellow); \n    color: white; \n    padding: 10px 15px; \n    border: none; \n    border-radius: 10px; \n    font-size: 16px; \n    cursor: pointer; \n    text-align: center; \n    width: 100%; \n    transition: background-color 0.3s ease; \n    font-weight: 700;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.whatsapp-icon {\n    margin-left: 5px; \n    width: 20px; \n    height: 20px; \n}\n\np {\n    max-width: 35ch; \n    margin: 0;\n    padding: 0.5em 0;\n    line-height: 1.5;\n    font-size: 1rem;\n    color: #333;\n    overflow-wrap: break-word;\n}\n\n/*TESTIMONIALS*/\n\n.ratings-container {\n    display: flex;\n    align-items: center; \n    padding: 20px; \n    background-color: #f9f9f9;\n    border-radius: 8px; \n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); \n}\n\n.ratings-container img {\n    max-width: 80px; \n    height: auto; \n    border-radius: 50%; \n    margin-right: 20px; \n}\n\n.review-wrapper {\n    flex: 1; \n}\n\n.review-wrapper blockquote {\n    font-size: 1.2rem; \n    color: #333; \n    font-style: italic; \n    margin: 0; \n}\n\n.company-goal {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n}\n\n.company-goal div {\n    text-align: left; \n    border-top: 1px solid var(--secondary-blue);\n    padding: 14px 0;\n}\n\n.company-goal div:nth-child(2) {\n    text-align: right;\n}\n\n.company-goal div:nth-child(2) p {\n    margin-left: auto;\n}\n\n.company-goal div:nth-child(3) {\n    border-bottom: 1px solid var(--secondary-blue);\n}\n\n\n.team {\n    padding: 20px;\n}\n\n.card {\n    display: flex;\n    gap: 8px;\n    background-color: #fff; \n    border-radius: 8px; \n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); \n    margin: 16px; \n    overflow: hidden; \n    max-width: 350px; \n    height: 140px;\n    padding: 12px;\n}\n\n.avatar-wrapper {\n    width: 82px;\n    height: 82px;\n    border-radius: 50%;\n    outline: 1px solid var(--main-yellow);\n    margin: auto; \n    overflow: hidden; \n    position: relative; \n    display: flex; \n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n}\n\n.avatar {\n    width: 140%; \n    height: 140%; \n    object-fit: cover; \n    position: absolute; \n    bottom: -20px;\n}\n\n.member-info {\n    margin: auto 0;\n}\n\n.member-bio {\n    display: flex;\n    flex-direction: column;\n    font-size: 8px;\n    gap: 3px;\n}\n\n.name {\n    font-size: 1rem;\n    margin-bottom: 6px;\n    color: var(--main-blue);\n}\n\n.feedback {\n    padding: 20px;\n    background-color: #f9f9f9;\n    border-radius: 8px;\n    max-width: 400px;\n    margin: 0 auto;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.feedback h1 {\n    margin-bottom: 16px;\n}\n\n.feedback label {\n    display: block;\n    font-size: 1rem;\n    margin-bottom: 5px;\n    color: #333;\n}\n\n.feedback #name,\n.feedback #surname,\n.feedback input[type='email'],\n.feedback select,\n.feedback textarea {\n    width: 100%;\n    padding: 12px;\n    margin-bottom: 15px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    font-size: 1rem;\n    background-color: #fff;\n    box-sizing: border-box;\n}\n\n.feedback div {\n    display: flex;\n    justify-content: left;\n    gap: 16px;\n    margin: 12px 0;\n}\n\n.feedback textarea {\n    resize: none;\n}\n\n.feedback button {\n    width: 100%;\n    padding: 12px;\n    font-size: 1rem;\n    color: #fff;\n    background-color: #007bff;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.feedback button:hover {\n    background-color: #0056b3;\n}\n\n@media (min-width: 768px) {\n    .feedback {\n        padding: 40px;\n        max-width: 600px;\n    }\n\n    .feedback h1 {\n        font-size: 2rem;\n    }\n\n    .feedback input,\n    .feedback select,\n    .feedback textarea {\n        font-size: 1.1rem;\n    }\n\n    .feedback button {\n        font-size: 1.1rem;\n    }\n}\n\n/*FOOTER*/\n\nfooter {\n    background-color: #333;\n    color: #fff;\n    text-align: center;\n    padding: 2px;\n  }\n  \n  footer p {\n    padding: 0.2px;\n    color: #a5a4a4;\n    font-size: 0.6em;\n    margin: 0 auto;\n\n  }\n  \n  footer .university-info {\n    font-weight: bold;\n  }\n\n\n  /*REVIEWS CAROUSEL*/\n\n  .ratings-container {\n    position: relative;\n    max-width: 600px; /* Adjust the width as needed */\n    margin: auto;\n    overflow: hidden;\n}\n\n.carousel {\n    display: flex;\n    transition: transform 0.5s ease; /* Enable smooth sliding */\n    width: 100%; /* Keep all reviews in the same line */\n}\n\n.review-wrapper {\n    min-width: 100%; /* Ensure each review takes full width */\n    padding: 20px;\n    box-sizing: border-box;\n    text-align: center;\n}\n\n.review-wrapper img {\n    min-width: 100px; /* Adjust as needed */\n    height: 100px;\n    border-radius: 50%;\n    flex-shrink: 0;\n    flex-grow: 0;\n    margin: 0;\n    object-fit: cover;\n    position: absolute;\n    left: 50%; /* Center the image horizontally */\n    transform: translateX(-50%) scale(0.9); /* Scale down by 20% */\n}\n\nbutton.carousel {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    background-color: rgba(255, 255, 255, 0.8);\n    border: none;\n    cursor: pointer;\n    font-size: 2rem;\n}\n\n.prev {\n    left: 10px;\n}\n\n.next {\n    right: 10px;\n}\n\n.top-card {\n    display: flex;\n    align-items: center;\n}\n\n.customer-info {\n    flex-grow: 1;\n}\n\nblockquote {\n    padding: 18px 0 0 0;\n}",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var f=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var m=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),d=t.n(c),s=t(56),l=t.n(s),p=t(540),f=t.n(p),u=t(113),m=t.n(u),g=t(208),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),o()(g.A,b),g.A&&g.A.locals&&g.A.locals;const h=t.p+"65a80d46d36460f7d0be.png",x=(t.p,[{name:"Mgtr. Lourdes Arévalos",bio:["Psicóloga Clínica, Universidad Columbia (2014)","Maestría en Psicología del Consumidor, Universidad de Palermo","Certificación en Investigación de Mercado y Psicología del Consumidor","Licenciada en Marketing, Univ. Americana (2010)"],image:t.p+"ecc1a9ff02d5222eb053.png"},{name:"Mgtr. Milagros Maqueda",bio:["Psicóloga Clínica, Universidad Columbia (2016)","Maestría en Psicología del Consumidor, Universidad de Barcelona","Certificación en Psicología Aplicada a la Innovación de Productos"],image:t.p+"3eabed6886139bab4f78.png"},{name:"Mgtr. Rocío Morales",bio:["Psicóloga Clínica, Universidad Columbia (2015)","Maestría en Psicología del marketing, Universidad de Buenos Aires","Certificación en Investigación de Mercado y Psicología del Consumidor"],image:t.p+"fae7c0c1fc55b27cd191.png"},{name:"Mgtr. Alheli Saifildin",bio:["Psicóloga Clínica, Universidad Columbia (2015)","Maestría en Psicología del Consumidor, Universidad de Palermo","Certificación en Psicología del Consumidor y Estrategias de Marketing"],image:t.p+"36c990ad5f7a767cbdd3.png"}]),v=document.querySelector(".team");x.forEach((n=>{const e=document.createElement("article");e.classList.add("card");const t=document.createElement("div");t.classList.add("avatar-wrapper");const r=document.createElement("img");r.classList.add("avatar"),r.src=n.image,r.alt=n.name;const o=document.createElement("div");o.classList.add("member-info");const a=document.createElement("h3");a.classList.add("name"),a.textContent=n.name;const i=document.createElement("ul");i.classList.add("member-bio"),n.bio.forEach((n=>{const e=document.createElement("li");e.textContent=n,i.appendChild(e)})),t.appendChild(r),o.appendChild(a),o.appendChild(i),e.appendChild(t),e.appendChild(o),v.appendChild(e)})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelector("#logo").src=h}));let y=0;setInterval((()=>function(){const n=document.querySelectorAll(".review-wrapper").length;y+=1,y<0?y=n-1:y>=n&&(y=0);const e=100*-y;document.querySelector(".carousel").style.transform=`translateX(${e}%)`}()),5e3)})();