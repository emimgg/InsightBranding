(()=>{var n={734:()=>{const n=document.querySelector("form"),e=document.querySelector("#email"),t=document.querySelector("#error-msg");n.addEventListener("submit",(e=>{e.preventDefault(),a(),r()&&n.checkValidity()&&a()?(t.classList.add("hidden"),n.dispatchEvent(new Event("validSubmit"))):console.log("lol")})),document.addEventListener("DOMContentLoaded",(()=>{o()}));const r=()=>{let n=!0;return document.querySelectorAll('input[type="text"][required]').forEach((e=>{e.value.trim()?e.classList.remove("invalid"):(e.classList.add("invalid"),n=!1)})),n},o=()=>{n.addEventListener("submit",(()=>{e.validity.typeMismatch||""===e.value?(e.setCustomValidity("Please enter a valid email"),e.reportValidity(),e.classList.add("invalid")):(e.setCustomValidity(""),e.classList.remove("invalid"),e.classList.add("valid"))}))},a=()=>{const n=document.querySelectorAll('input[name="rating"]');let e=!1;return n.forEach((n=>{n.checked&&(e=!0)})),e?document.querySelector("#error-msg").classList.add("hidden"):document.querySelector("#error-msg").classList.remove("hidden"),e}},208:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),d=t.n(c),s=new URL(t(903),t.b),l=i()(o());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]);var p=d()(s);l.push([n.id,`* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --main-blue: #00264c;\n    --secondary-blue: #012b558f;\n    --main-yellow: #ffb800;\n    --secondary-yellow: #ffb700a2;\n    --main-bg: #fefefe;\n    font-family: 'Montserrat';\n    --header-height: 80px;\n}\n\nbutton {\n    background: none;\n    border: none;\n    padding: 0;\n    margin: 0;\n    font: inherit;\n    color: inherit;\n    cursor: pointer;\n    outline: none;\n}\n\nbutton:focus {\n    outline: none;\n}\n\nhtml, body {\n    width: 100%;\n    overflow-x: hidden;\n}\n\nbody {\n    background-color: var(--main-bg);\n    line-height: 1.6;\n}\n\nli {\n    list-style: none;\n}\n\nheader {\n    /* border-bottom: 0.2px solid var(--main-blue); */\n    background-color: var(--main-bg);\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    width: 100%;\n    height: var(--header-height);\n\n    z-index: 100;\n    position: fixed;\n    gap: 6px;\n    padding: 12px;\n}\n\n\n.logo-wrapper {\n    height: 42px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 1;\n}\n\n.logo-wrapper h1 {\n    width: 50px;\n    font-size: 0.5rem;\n    font-family: 'Montserrat';\n    font-weight: 300;\n    letter-spacing: 2px;\n}\n\n\n#logo {\n    max-height: 25px;\n    max-width: 100%;\n    object-fit: contain; \n}\n\n\n.navbar {\n    display: flex;\n    justify-content: center; /* Aligns the nav items to the right */\n    align-items: center;\n    gap: 20px;\n    padding: 0 8px;\n}\n\n\n/* Button styles */\n.navBtn {\n    font-size: 12px;\n    color: #00254d; /* Dark blue text color */\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.3s ease, color 0.3s ease;\n    border-bottom: 1px solid var(--main-blue);\n    white-space: nowrap;\n}\n\n\n\n.navBtn:hover {\n    background-color: #00254d;\n    color: white;\n}\n\n.title {\n    color: var(--main-blue);\n}\n\n.hero .highlighted {\n    color: var(--main-yellow);\n    text-shadow: \n    -1px -1px 2px transparent,\n    -1px 1px 1px rgba(0, 0, 0, 0.2),\n    -1px 1px 1px rgba(0, 0, 0, 0.2),\n    1px 1px 1px transparent;\n    font-size: 1.4rem;\n    background-color: #09305bc9;\n}\n\n.videowrapper {\n    display: none;\n}\n\niframe {\n    display: none;\n}\n\n.hero-section {\n    height: calc(90svh - var(--header-height));\n    margin-top: var(--header-height);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${p});\n    background-size: cover; \n    background-position: center; \n    background-repeat: no-repeat; \n\n\n}\n\n.hero {\n    padding: 80px 30px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.hero-title {\n    font-size: 1.2rem;\n}\n\n.hero-subtitle {\n    margin-top: 20px;\n    font-size: 1rem;\n    font-weight: 600;\n    color: black;\n}\n\n\n\n.cta {\n    background-color: var(--main-yellow);\n    color: black;\n    padding: 4px;\n    border: none;\n    border-radius: 50px;\n    font-size: 16px;\n    cursor: pointer;\n    text-align: center;\n    width: 80%;\n    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;\n    font-weight: 700;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n}\n\n#nav-cta {\n    width: 40%;\n    font-size: 14px;\n}\n\n.hero > .cta {\n    padding: 12px;\n}\n\n.cta:hover {\n    background-color: rgb(255, 204, 0);\n    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n    transform: translateY(-2px);\n}\n\n.cta:active {\n    background-color: rgb(230, 190, 0);\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n    transform: translateY(0);\n}\n\n.whatsapp-icon {\n    margin-left: 5px; \n    width: 20px; \n    height: 20px; \n}\n\np {\n    max-width: 35ch; \n    margin: 0;\n    padding: 0.5em 0;\n    line-height: 1.5;\n    font-size: 0.8rem;\n    color: #333;\n    overflow-wrap: break-word;\n}\n\n/*TESTIMONIALS*/\n\n\n.ratings-container .review-avatar {\n    max-width: 80px; \n    height: auto; \n    border-radius: 50%; \n    margin-right: 20px; \n}\n\n.top-card {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    width: max-content;\n    margin: 0 auto;\n}\n\n.customer-info h3 {\n    font-size: 0.7rem;\n}\n\n.review-wrapper {\n    flex: 1; \n    background-color: #ececec;    \n}\n\n.review-wrapper blockquote {\n    color: #333; \n    font-style: italic; \n    margin: 0; \n    text-align: left;\n    font-weight: 500;\n    font-size: 1rem;\n}\n\n.ratings-container {\n    position: relative;\n    overflow: hidden;\n    padding: 50px 20px;\n    display: grid;\n    width: 100vw;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    grid-template-rows: min-content;\n    grid-auto-rows: 1fr;\n    gap: 8px;\n    /* border-bottom: 1px solid var(--main-blue); */\n    /* box-shadow: 0 2px 5px rgba(0,0,0,0.1); */\n}\n\n\n.review-wrapper {\n    padding: 18px;\n    padding-bottom: 0;\n    box-sizing: border-box;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    align-items: center;\n    border-radius: 20px;\n    justify-content: space-between;\n}\n\n.review-wrapper .review-avatar {\n    min-width: 100%; \n    height: 100%;\n    border-radius: 50%;\n    flex-shrink: 0;\n    flex-grow: 0;\n    margin: 0;\n    object-fit: cover;\n    position: absolute;\n}\n\n.review-wrapper .avatar-wrapper {\n    height: 32px;\n    width: 32px;\n}\n\n\n.stars {\n    width: 84px;\n    height: auto;\n    border-radius: none;\n}\n\n/*COMPANY GOALS*/\n\n.company-goal {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n}\n\n.company-goal div {\n    text-align: left; \n    border-bottom: 1px solid var(--secondary-blue);\n    padding: 40px 0;\n    position: relative;\n}\n\n.company-goal div > h1  {\n    margin-bottom: 8px;\n}\n\n.company-goal div:nth-child(2),\n.company-goal div:nth-child(4) {\n    text-align: right;\n}\n\n.company-goal div:nth-child(2) p,\n.company-goal div:nth-child(4) p {\n    margin-left: auto;\n}\n\n.company-goal div:nth-child(3) {\n    border-bottom: 1px solid var(--secondary-blue);\n}\n\n.iso {\n    max-width: 150px;\n}\n\n#iso2 {\n    max-width: 80px;\n    padding-bottom: 18px;\n}\n\ndiv.wrapper1 {\n    border: none;\n    padding-bottom: 0;\n}\n\n.team {\n    padding: 70px 24px;\n    width: 100vw;\n}\n\n.title-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 12px;\n}\n\n.title-wrapper h1 {\n    margin-right: 24px;\n}\n\n\n.separator {\n    border: 1px solid #fff;\n    height: 30px;\n    margin-left: -10px;\n    margin-right: 10px;\n}\n\n.iconImg {\n    max-width: 70px;\n}\n\n#vision-icon {\n    position: absolute;\n    left: 190px;\n    width: 35px;\n    top: 40px;\n\n}\n\n#goal-icon {\n    position: absolute;\n    right: 202px;\n    width: 35px;\n    top: 40px;\n}\n\n.cards-wrapper {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    grid-auto-rows: 1fr;\n    gap: 24px;\n}\n\n.card {\n    display: flex;\n    gap: 8px;\n    background-color: #fff; \n    border-radius: 8px; \n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); \n    overflow: hidden; \n    padding: 12px;\n}\n\n.avatar-wrapper {\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    outline: 1px solid var(--main-yellow);\n    margin: auto; \n    overflow: hidden; \n    position: relative; \n    display: flex; \n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n}\n\n\n.avatar {\n    width: 140%; \n    height: 140%; \n    object-fit: cover; \n    position: absolute; \n    bottom: -20px;\n}\n\n.member-info {\n    margin: auto 0;\n}\n\n.member-bio {\n    display: flex;\n    flex-direction: column;\n    font-size: 8px;\n    gap: 3px;\n}\n\n.name {\n    font-size: 1rem;\n    color: var(--main-blue);\n    font-weight: 700;\n    text-wrap: nowrap;\n}\n\n.role {\n    color: var(--secondary-blue);\n    font-size: 0.8rem;\n    display: block;\n    font-weight: 500;\n}\n\n.feedback {\n    padding: 20px;\n    background-color: #f9f9f9;\n    border-radius: 8px;\n    max-width: 400px;\n    margin: 0 auto;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n    transition: height 500ms ease, background-color 500ms ease;\n    height: min-content;\n    margin-bottom: 10px;\n    margin-top: 16px;\n}\n\n.feedback h1 {\n    margin-bottom: 16px;\n}\n\n.feedback label {\n    display: block;\n    font-size: 0.8rem;\n    margin-bottom: 5px;\n    color: #333;\n}\n\n.feedback #name,\n.feedback #surname,\n.feedback input[type='email'],\n.feedback select,\n.feedback textarea {\n    width: 100%;\n    padding: 12px;\n    margin-bottom: 15px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    font-size: 0.8rem;\n    background-color: #fff;\n    box-sizing: border-box;\n}\n\n.feedback div {\n    display: flex;\n    justify-content: left;\n    gap: 16px;\n    margin: 12px 0;\n}\n\n.feedback textarea {\n    resize: none;\n}\n\n.feedback button {\n    width: 100%;\n    padding: 12px;\n    font-size: 1rem;\n    color: #fff;\n    background-color: #007bff;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.feedback button:hover {\n    background-color: #0056b3;\n}\n\n\n.iso-wrapper {\n    display: block;\n    text-align: center;\n}\n\n@media (min-width: 768px) {\n\n    .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .feedback {\n        padding: 40px;\n        max-width: 600px;\n    }\n\n    .feedback h1 {\n        font-size: 2rem;\n    }\n\n    .feedback input,\n    .feedback select,\n    .feedback textarea {\n        font-size: 1.1rem;\n    }\n\n    .feedback button {\n        font-size: 1.1rem;\n    }\n\n    .hero {\n        max-width: 700px;\n        margin: 0 auto;\n        padding-right: 0;\n        background-image: none;\n        text-align: left;\n        align-items: start;\n    }\n\n    .hero-subtitle {\n        max-width: 100%;\n    }\n\n    .hero-section {\n        display: flex;\n        max-width: 100%;\n        align-items: center;\n        margin: auto 7%;\n        height: calc(90dvh - var(--header-height));\n        margin-top: var(--header-height);\n        background-image: none;\n\n    }\n\n    .cta {\n        max-width: 300px;\n        padding: 8px;\n    }\n\n    .videowrapper {\n        width: 100%; \n        max-width: 650px; \n        display: flex;\n        justify-content: center;\n    }\n\n    #hero-img {\n        width: 100%; /* Image takes full width of the container */\n        height: auto; /* Maintains aspect ratio */\n    }\n\n    .company-goal {\n        width: 70%;\n        max-width: 1000px;\n    }\n\n    .team {\n        margin: 0 auto;\n        padding-right: 150px;\n        padding-left: 150px;\n\n    }\n\n\n\n    .services {\n        margin: 0 auto;\n        padding: 50px;\n    }\n\n    #whyUs {\n        box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n        width: 100vw;\n    }   \n\n    .whyUsWrapper {\n        max-width: 1000px;\n        margin: 0 auto;\n    }\n\n    header {\n        flex-direction: row;\n        justify-content: space-between;\n        padding: 0 300px;\n        align-items: center;\n        box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n    }\n\n\n    #logo {\n        max-height: 40px;  \n    }\n\n    h1.company-name {\n        font-size: 0.9rem;\n    }\n\n    p {\n        font-size: 1.2rem;\n    }\n\n    .hero-title {\n        font-size: 2rem;\n    }\n\n    .company-goal h1 {\n        font-size: 2rem;\n    }\n\n    .team h1 {\n        font-size: 2rem;\n    }\n\n    .card {\n        padding: 24px;\n        height: auto;\n        max-width: 100%;\n        flex-direction: column;\n        margin: 0;\n    }\n\n    .member-bio li {\n        font-size: 0.8rem ;\n        list-style-type: circle;\n        margin-left: 6px;\n    }\n\n    .name, .role {\n        font-size: 1.2rem;\n        display: block;\n        text-align: center;\n    }\n\n    .role {\n        font-size: 0.9rem;\n        margin-bottom: 12px;\n    }\n\n    .avatar-wrapper {\n        width: 120px;\n        height: 120px;\n        margin: 0 auto;\n    }\n\n    .member-info {\n        margin: 0;\n    }\n\n    .title-wrapper {\n        margin-bottom: 36px;\n    }\n\n    .company-goal, .ratings-container, .feedback, .services {\n        margin-top: 24px;\n    }\n\n    .iso-wrapper {\n        text-align: end;\n    }\n\n    .services h1 {\n        font-size: 2rem;\n    }\n\n    .services span {\n        font-size: 1rem;\n    }\n\n    .ratings-container h1 {\n        align-self: center;\n        text-align: center;\n    }\n\n    .ratings-container {\n        padding-right: 80px;\n        margin-top: 0;\n    }\n\n    .ratings-container blockquote {\n        font-size: 1.3rem;\n    }\n\n    .hero .highlighted {\n        font-size: 2rem;\n    }\n\n    .top-card {\n        display: flex;\n        align-items: center;\n    }\n\n    #vision-icon {\n        position: absolute;\n        left: 250px;\n        width: 40px;\n        top: 45px;\n    \n    }\n    \n    #goal-icon {\n        position: absolute;\n        right: 265px;\n        width: 40px;\n        top: 45px;\n    }\n\n}\n\n\n/*FOOTER*/\n\nfooter {\n    background-color: #333;\n    color: #fff;\n    text-align: center;\n    padding: 18px;\n    grid-area: footer;\n    width: 100vw\n  }\n  \n  footer p {\n    padding: 2px;\n    color: #a5a4a4;\n    font-size: 0.9em;\n    margin: 0 auto;\n\n  }\n  \n  footer .university-info {\n    font-weight: bold;\n  }\n\n\n  /*REVIEWS CAROUSEL*/\n\n  \n\n\n\n.customer-info {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n\ninput.invalid {\n    outline: 1px solid red;\n}\n\ninput.valid {\n    outline: 1px solid green;\n}\n\n.hidden {\n    display: none;\n}\n\n#error-msg {\n    font-size: 0.8rem;\n    color: red;\n}\n\n.success {\n    height: 100px;\n    width: 85%;\n    background-color: lightgreen;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.success h1 {\n    color: #006622;\n    margin: 0;\n    font-size: 2rem;\n}\n\n.blue-text {\n    color: var(--main-blue);\n    margin-bottom: 6px;\n}\n\n#whyUs h1 {\n    font-size: 2.5rem;\n}\n\n#whyUs p {\n    max-width: 62ch;\n}\n\n#whyUs {\n    margin: 0;\n    padding: 0;\n    padding-top: 32px;\n\n}\n\n.servicecard-wrapper {\n    display: grid;\n    max-width: 90vw;\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr) );\n    grid-auto-rows: 1fr;\n    gap: 18px;\n    margin: 0 auto;\n}\n\n.service {\n    border-radius: 15px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); \n    padding: 20px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    font-size: 0.7rem;\n    gap: 12px;\n    font-weight: 600;\n    background-color: #fff;\n}\n\n.services {\n    text-align: center;\n    width: 100vw;\n    padding: 24px;\n}\n\n.whyUsWrapper{\n    padding: 20px;\n}\n\n.icon-wrapper {\n    max-height: 60px;\n}\n\n.icon-wrapper > img {\n    max-height: 100%;\n    aspect-ratio: 1/1 ;\n}\n\n.white-text {\n    color: #fff;\n}\n\n.blue-bg {\n    background-color: var(--main-blue);\n\n}\n\n.services > h1 {\n    margin-bottom: 25px;\n}\n\n\n\n/* For WebKit browsers */\n::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #888;\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background-color: #555;\n}\n\n::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 10px;\n}\n\n/* For Firefox */\n* {\n    scrollbar-width: thin; /* Makes the scrollbar thin */\n    scrollbar-color: #888 #f1f1f1; /* scrollbar thumb and track colors */\n}\n`,""]);const u=l},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},903:(n,e,t)=>{"use strict";n.exports=t.p+"d378da990ecf7747b089.webp"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),d=t.n(c),s=t(540),l=t.n(s),p=t(113),u=t.n(p),m=t(208),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(m.A,g),m.A&&m.A.locals&&m.A.locals;const f=t.p+"65a80d46d36460f7d0be.png",h=(t.p,[{name:"Mgtr. Lourdes Arévalos",bio:["Licenciatura en Psicología Clínica, Universidad Columbia, Asunción (2014) ","Especialización en Psicología del Consumidor, Universidad de Palermo, Buenos Aires (2015)","Especialización en Psicología Social, Universidad de Palermo, Buenos Aires (2015)","Licenciada en Marketing, Universidad Americana, Asunción (2010)"],role:"Directora",image:t.p+"ecc1a9ff02d5222eb053.png"},{name:"Mgtr. Milagros Maqueda",bio:["Licenciatura en Psicología clínica, Universidad Columbia, Asunción (2016) ","Maestría en Psicología del Consumidor, Universidad Autónoma de Barcelona, Barcelona (2017)","Certificación en Psicología Aplicada a la Innovación de Productos, Universidad Autónoma de Madrid, Madrid (2018)"],role:"Gerente de Análisis de Psicología del Consumidor",image:t.p+"3eabed6886139bab4f78.png"},{name:"Mgtr. Rocío Morales",bio:["Licenciatura en Psicología Clínica, Universidad Columbia, Asunción (2015)","Maestría en Psicología del Marketing, Universidad de Palermo, Buenos Aires (2016)","Especialización en Psicología del Color, Universidad de Alcalá, Barcelona (2017)"],role:"Gerente de Estrategia del Consumidor",image:t.p+"fae7c0c1fc55b27cd191.png"},{name:"Mgtr. Alheli Saifildin",bio:["Licenciatura en Psicología, Universidad Columbia, Asuncion (2015)","Maestría en Psicología del Marketing, Universidad de Palermo, Buenos Aires (2016)","Certificación en Psicología del Consumidor y Estrategias de Marketing, Universidad Palermo, Buenos Aires (2016)"],role:"Gerente General",image:t.p+"36c990ad5f7a767cbdd3.png"}]),x=document.querySelector(".cards-wrapper");h.forEach((n=>{const e=document.createElement("article");e.classList.add("card");const t=document.createElement("div");t.classList.add("avatar-wrapper");const r=document.createElement("img");r.classList.add("avatar"),r.src=n.image,r.alt=n.name;const o=document.createElement("div");o.classList.add("member-info");const a=document.createElement("span");a.classList.add("name"),a.textContent=n.name;const i=document.createElement("span");i.classList.add("role"),i.textContent=n.role;const c=document.createElement("ul");c.classList.add("member-bio"),n.bio.forEach((n=>{const e=document.createElement("li");e.textContent=n,c.appendChild(e)})),t.appendChild(r),o.appendChild(a),o.appendChild(i),o.appendChild(c),e.appendChild(t),e.appendChild(o),x.appendChild(e)})),t(734),document.querySelector("form").addEventListener("validSubmit",(function(n){const e=document.getElementById("name").value,t=document.getElementById("surname").value,r=document.querySelector("#email").value,o=document.querySelector("#career").value,a=document.querySelector("#semester").value,i=document.querySelector('input[name="rating"]:checked').value;emailjs.send("service_ybjy8ih","template_3ptksec",{from_name:`${e} ${t}`,email:r,career:o,semester:a,rating:i,message:document.getElementById("opinion").value}).then((function(n){console.log("SUCCESS!",n.status,n.text),(()=>{const n=document.querySelector(".feedback");n.innerHTML="",n.classList.add("success");const e=document.createElement("h1");e.textContent="Gracias!",n.appendChild(e)})()}),(function(n){console.log("FAILED...",n)}))}));const b=t.p+"13920e38f5f838eb385e.png",v=t.p+"1918b2fa37b91f9bfc7d.png",y=t.p+"efeefc9ec4f3b3fe9496.png",w=t.p+"7336b686f40e4237061b.png",k=t.p+"fea05ec68dbaba238c9e.png",z=t.p+"09f8c3353a51b35e945e.png",S=t.p+"1f7814fce45ad8171482.png",E=t.p+"cdca07a29198c25086e0.png",C=t.p+"0a1f2748c7828b8c8ecd.png",L=t.p+"d5ba04493c47eb1bc7c0.png",A=t.p+"4bd9867698904247dab6.png",q=t.p+"b91e94676fc63eb3e62f.png",M=t.p+"b6160da3b7a9362a9098.png",j=t.p+"831b7bbdd3c019a8ae0d.png",P=t.p+"c67856c4ae18bb983fdc.png";document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector("#logo");n.src=f,n.loading="lazy";const e=document.querySelector("#iso1"),t=document.querySelector("#iso2"),r=document.querySelector("#hero-img"),o=document.querySelector("#brain"),a=document.querySelector("#ads"),i=document.querySelector("#consumer"),c=document.querySelector("#products"),d=document.querySelector("#consultory"),s=document.querySelectorAll(".stars"),l=document.querySelector("#customer-1"),p=document.querySelector("#customer-2"),u=document.querySelector("#customer-3"),m=document.querySelector("#teamIconImg"),g=document.querySelector("#vision-icon"),h=document.querySelector("#goal-icon");e.src=b,e.loading="lazy",t.src=v,t.loading="lazy",r.src=w,r.loading="lazy",o.src=k,o.loading="lazy",a.src=z,a.loading="lazy",i.src=E,i.loading="lazy",c.src=C,c.loading="lazy",d.src=S,d.loading="lazy",l.src=A,l.loading="lazy",p.src=q,p.loading="lazy",u.src=M,u.loading="lazy",s.forEach((n=>{n.src=L,n.loading="lazy"})),m.src=y,m.loading="lazy",g.src=j,g.loading="lazy",h.src=P,h.loading="lazy"})),document.getElementById("scrollToTeam").addEventListener("click",(function(){document.querySelector(".team").scrollIntoView({behavior:"smooth"})})),document.getElementById("scrollToHero").addEventListener("click",(function(){document.querySelector(".hero-section").scrollIntoView({behavior:"smooth"})}))})()})();