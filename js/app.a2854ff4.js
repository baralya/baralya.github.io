(function(t){function e(e){for(var r,s,a=e[0],c=e[1],u=e[2],l=0,d=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},s={app:0},o={app:0},i=[];function a(t){return c.p+"js/"+({post:"post",posts:"posts",write:"write"}[t]||t)+"."+{post:"4a8f7827",posts:"1b313483",write:"f1893491"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={post:1,posts:1,write:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var r="css/"+({post:"post",posts:"posts",write:"write"}[t]||t)+"."+{post:"1b4a2708",posts:"8b8e7a9b",write:"49441eb4"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){s[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4b5e":function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("img",{staticClass:"navBack",attrs:{src:n("d6e2")}}),r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:n("cf05")}}),r("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isHome?r("img",{staticClass:"logoType",attrs:{src:n("4b5e")}}):t._e()])],1),r("router-link",{staticClass:"navBtn quill",class:{selected:"Write"==t.$route.name},attrs:{to:"/write"}},[r("svg",{attrs:{width:"65",height:"68",viewBox:"0 0 65 68",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M29.7351 31.8191L29.7351 31.8191L29.7342 31.8182C29.0061 31.1086 27.8358 31.118 27.115 31.8462L27.1133 31.8479C15.5607 43.6309 7.77376 52.8395 2.37101 64.886C1.95241 65.8194 2.3669 66.9176 3.30253 67.337L3.30269 67.3371C3.54996 67.4478 3.80932 67.5 4.06223 67.5C4.76694 67.5 5.44462 67.0926 5.75558 66.4041L5.75611 66.4029C10.9183 54.8928 18.441 45.9884 29.7634 34.4413C30.4818 33.7115 30.4641 32.5333 29.7351 31.8191Z"}}),r("path",{attrs:{d:"M56.5256 28.6558L56.5264 28.6543C56.8499 28.0502 56.8356 27.3163 56.4822 26.7272L56.4816 26.7262C56.1278 26.1391 55.4924 25.7751 54.8031 25.7751H52.0464L59.0773 21.7568C59.0777 21.7566 59.078 21.7564 59.0784 21.7562C59.4928 21.5212 59.8056 21.1422 59.9585 20.693C61.9052 15.0282 62.8917 9.19364 62.8917 3.35421C62.8917 2.27534 62.0164 1.4 60.9375 1.4C31.4861 1.4 7.525 25.3611 7.525 54.8125C7.525 55.8914 8.40034 56.7667 9.47921 56.7667C29.1515 56.7667 47.1777 45.9934 56.5256 28.6558ZM44.6876 29.6834H51.402C42.7188 43.5012 27.8145 52.1649 11.4734 52.8182C12.4945 27.1051 33.2264 6.37266 58.9422 5.34846C58.7541 9.84845 57.9333 14.3391 56.494 18.7315L43.7183 26.0301L43.7154 26.0318C42.9493 26.4751 42.5728 27.3725 42.7993 28.2288C43.026 29.0888 43.801 29.6834 44.6876 29.6834Z","stroke-width":"1.8"}})])]),r("router-link",{staticClass:"navBtn posts",class:{selected:"Posts"==t.$route.name},attrs:{to:"/posts"}},[r("svg",{attrs:{width:"60",height:"66",viewBox:"0 0 60 66",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M24.7148 63.4219C24.7148 64.8459 23.5607 66 22.1367 66H10.793C5.10649 66 0.480469 61.374 0.480469 55.6875V10.3125C0.480469 4.62602 5.10649 0 10.793 0H42.4898C48.1758 0 52.8023 4.62602 52.8023 10.3125V34.9336C52.8023 36.3576 51.6477 37.5117 50.2242 37.5117C48.8002 37.5117 47.6461 36.3576 47.6461 34.9336V10.3125C47.6461 7.46951 45.3328 5.15625 42.4898 5.15625H10.793C7.94998 5.15625 5.63672 7.46951 5.63672 10.3125V55.6875C5.63672 58.5305 7.94998 60.8438 10.793 60.8438H22.1367C23.5607 60.8438 24.7148 61.9979 24.7148 63.4219ZM39.9117 15.4688H13.357C11.933 15.4688 10.7789 16.6229 10.7789 18.0469C10.7789 19.4709 11.933 20.625 13.357 20.625H39.9117C41.3352 20.625 42.4898 19.4709 42.4898 18.0469C42.4898 16.6229 41.3352 15.4688 39.9117 15.4688ZM42.4898 28.3594C42.4898 26.9354 41.3352 25.7812 39.9117 25.7812H13.357C11.933 25.7812 10.7789 26.9354 10.7789 28.3594C10.7789 29.7834 11.933 30.9375 13.357 30.9375H39.9117C41.3352 30.9375 42.4898 29.7834 42.4898 28.3594ZM13.357 36.0938C11.933 36.0938 10.7789 37.2479 10.7789 38.6719C10.7789 40.0959 11.933 41.25 13.357 41.25H26.9062C28.3303 41.25 29.4844 40.0959 29.4844 38.6719C29.4844 37.2479 28.3303 36.0938 26.9062 36.0938H13.357ZM59.1796 54.978C59.089 55.1074 58.7783 55.547 58.5855 55.7902C57.7219 56.8764 55.7007 59.4187 52.8884 61.663C49.2826 64.5407 45.572 66 41.8594 66C38.1468 66 34.4362 64.5407 30.8303 61.663C28.0181 59.4187 25.9969 56.8759 25.1338 55.7902C24.9404 55.547 24.6297 55.1069 24.5391 54.978C23.9142 54.0888 23.9142 52.9029 24.5391 52.0137C24.6297 51.8848 24.9404 51.4447 25.1338 51.2015C25.9969 50.1158 28.0181 47.5735 30.8303 45.3292C34.4362 42.4514 38.1468 40.9922 41.8594 40.9922C45.572 40.9922 49.2826 42.4514 52.8884 45.3292C55.7007 47.5735 57.7219 50.1163 58.585 51.202C58.7783 51.4452 59.089 51.8853 59.1796 52.0142C59.8045 52.9034 59.8045 54.0888 59.1796 54.978ZM53.8018 53.4961C49.7025 48.6193 45.6888 46.1484 41.8594 46.1484C38.0305 46.1484 34.0162 48.6188 29.9169 53.4961C34.0162 58.3729 38.0299 60.8438 41.8594 60.8438C45.6888 60.8438 49.7025 58.3734 53.8018 53.4961ZM41.9883 48.5977C39.2828 48.5977 37.0898 50.7906 37.0898 53.4961C37.0898 56.2016 39.2828 58.3945 41.9883 58.3945C44.6938 58.3945 46.8867 56.2016 46.8867 53.4961C46.8867 50.7906 44.6938 48.5977 41.9883 48.5977Z","stroke-width":"0.4"}})])])],1),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)},o=[],i=(n("b0c0"),{methods:{},created:function(){window.oncontextmenu=function(t){return t.preventDefault(),t.stopPropagation(),!1}},computed:{isHome:function(){return"Home"===this.$route.name}}}),a=i,c=(n("5c0b"),n("2877")),u=Object(c["a"])(a,s,o,!1,null,null,null),l=u.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Vue2InteractDraggable",{key:t.resetThis,attrs:{"interact-max-rotation":22,"interact-x-threshold":110,"interact-out-of-sight-x-coordinate":700,"interact-block-drag-up":"","interact-block-drag-down":""},on:{draggedRight:t.draggedRight,draggedLeft:t.draggedLeft,moving:t.moving,resetPosition:t.resetMoving}},[n("div",{ref:"cardStack",staticClass:"card postCard",class:{hasBg:t.hasBg}},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"text"},[t._v(t._s(t.text))]),t.hasBg?n("div",{staticClass:"bg topOfStack"},[n("img",{attrs:{src:t.bg}})]):n("div",{staticClass:"message"},[n("input",{ref:"message",attrs:{type:"text"},on:{focus:t.messageFocused,blur:t.messageBlurred}}),n("input",{staticClass:"messageBtn",attrs:{type:"button"}})]),t.accepting?n("div",{ref:"overlayAccept",staticClass:"overlay accept",style:{opacity:t.overlayOpacity}},[n("svg",{attrs:{viewBox:"0 -28 512.00002 512",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"}})])]):t._e(),t.rejecting?n("div",{ref:"overlayReject",staticClass:"overlay reject",style:{opacity:t.overlayOpacity}},[n("svg",{attrs:{height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm94.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"}})])]):t._e()])]),n("div",{staticClass:"card postCard",class:{hasBg:t.hasBgNext},attrs:{id:"bottomCard"}},[n("div",{staticClass:"title"},[t._v(t._s(t.nextTitle))]),n("div",{staticClass:"text"},[t._v(t._s(t.nextText))]),t.hasBgNext?n("div",{staticClass:"bg"},[n("img",{attrs:{src:t.bgNext}})]):n("div",{staticClass:"message"},[n("input",{ref:"message",attrs:{type:"text"}}),n("input",{staticClass:"messageBtn",attrs:{type:"button"}})])]),t._m(0)],1)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("a",{attrs:{href:"https://niravko.com/"}},[t._v("निरबको")])])}],h=n("66b6"),m=n("b012"),C=n.n(m),v={name:"Home",components:{Vue2InteractDraggable:h["Vue2InteractDraggable"]},data:function(){return{windowHeight:0,resetThis:1,tempLipsum:[{title:"क गरेर बिताउने दिनहरु?",text:"घर बस्ने । फलफुल खाने, शान्तिसँग बस्ने र किताब पढने । कुराहरु गर्ने । किन्डलमा मास्टर र मार्घरीटा पढने । नया कुरा सिक्ने । जापानिज पढने । क्रिकेट नखेल्ने ।"},{title:"चिया बगानमा लकडाउन उल्लंघन",text:"जेनेस हासलाई अहिले पनि राम्रोसँग सम्झना छ । जति बेला उनलाई लागेको थियो, आफ्ना साथी योर्गन क्लोपमा फुटबलको व्यवस्थापक हुने गुण छ । उनीहरू भर्खर ११ वर्ष टेकेका थिए । सीभी ग्लाटेनको युवा टिमका लागि खेलिरहेका थिए अनि त्यति बेला उनीहरू खुबै चाख मानेर रेडियोमा स्टुटगार्टले बुन्डेसलिगामा खेल्दाको कमेन्ट्री सुन्थे । "},{title:"क गरेर बिताउने दिनहरु?",text:"घर बस्ने । फलफुल खाने, शान्तिसँग बस्ने र किताब पढने । कुराहरु गर्ने । किन्डलमा मास्टर र मार्घरीटा पढने । नया कुरा सिक्ने । जापानिज पढने । क्रिकेट नखेल्ने ।"},{title:"चिया बगानमा लकडाउन उल्लंघन",text:"जेनेस हासलाई अहिले पनि राम्रोसँग सम्झना छ । जति बेला उनलाई लागेको थियो, आफ्ना साथी योर्गन क्लोपमा फुटबलको व्यवस्थापक हुने गुण छ । उनीहरू भर्खर ११ वर्ष टेकेका थिए । सीभी ग्लाटेनको युवा टिमका लागि खेलिरहेका थिए अनि त्यति बेला उनीहरू खुबै चाख मानेर रेडियोमा स्टुटगार्टले बुन्डेसलिगामा खेल्दाको कमेन्ट्री सुन्थे । "},{title:"सुन न मा स्वागत छ",text:"सुन न नया नेपाली एप हो । यो एप प्रयोग गरी तिमी आफ्ना कुराहरु अरुलाई सुनाउन सक्छौ, र अरुका कुराहरु सुन्न सक्छौ । ",bg:"clip1.png"},{title:"सुन न कसरी चलाउने",text:"यो स्क्रीनमा अन्जान मान्छेहरुले सुनाएका करुाहरु पढ । केही भन्न मन लागे तलको मेसेज पठाउने भाँडोमा लेखेर पठाउ । हामी सुरक्षित लेख्ने मान्छेसम्म पुर्याउने छऔँ । देब्रे स्क्रीनमा आफ्ना कुराहरु लेख । दाहिने स्क्रीनमा पठाएको तथा आएका मेसेजहरु पढ ।"},{bg:"welcome.png",title:"ल bro अब चिलसँग सुन न चलाउ",text:"सबै साथी हुन्, त्यसैले भेदभाव, गालीहरु अनी अरु कुराहरु नगर ल।"}],tempCount:0,cardDragOffset:0}},created:function(){window.addEventListener("resize",this.resizeHandler)},mounted:function(){this.windowHeight=window.innerHeight,this.resetThis++,this.updateStack()},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},methods:{messageFocused:function(){document.body.classList.add("enableAndroidKeyboard")},messageBlurred:function(){document.body.classList.remove("enableAndroidKeyboard"),window.scrollTo(0,0)},sendMessage:function(){alert("Sending Message :p")},resizeHandler:function(){var t=this;C()((function(){t.windowHeight=window.innerHeight}),200)()},moving:function(t){this.cardDragOffset=t.x},resetMoving:function(){this.cardDragOffset=0},draggedRight:function(){this.resetCard(),console.log("right")},draggedLeft:function(){this.resetCard(),console.log("left")},resetCard:function(){var t=this;this.cardDragOffset=0,setTimeout((function(){t.resetThis++,t.$nextTick((function(){t.$refs.cardStack.classList.add("animateStackUp")})),t.updateStack()}),200)},updateStack:function(){this.tempCount=this.nextCount}},computed:{nextCount:function(){return(this.tempCount+1)%this.tempLipsum.length},title:function(){return this.tempLipsum[this.tempCount].title},nextTitle:function(){return this.tempLipsum[this.nextCount].title},text:function(){return this.tempLipsum[this.tempCount].text},nextText:function(){return this.tempLipsum[this.nextCount].text},hasBg:function(){return!!this.tempLipsum[this.tempCount].bg},hasBgNext:function(){return!!this.tempLipsum[this.nextCount].bg},bg:function(){return this.tempLipsum[this.tempCount].bg},bgNext:function(){return this.tempLipsum[this.nextCount].bg},overlayOpacity:function(){var t=this.cardDragOffset/window.innerWidth*100;return t=Math.pow(1.137,Math.abs(t)),t>94&&(t=94),t/100},accepting:function(){return this.cardDragOffset>0},rejecting:function(){return this.cardDragOffset<0}}},w=v,y=(n("7772"),Object(c["a"])(w,f,g,!1,null,"0218fee0",null)),b=y.exports;r["a"].use(p["a"]);var x=[{path:"/",name:"Home",component:b},{path:"/write",name:"Write",component:function(){return n.e("write").then(n.bind(null,"ed6a"))}},{path:"/posts",name:"Posts",component:function(){return n.e("posts").then(n.bind(null,"17c3"))}},{path:"/post",name:"Post",component:function(){return n.e("post").then(n.bind(null,"37d3"))}}],A=new p["a"]({mode:"history",base:"/",routes:x}),k=A,j=n("2f62");r["a"].use(j["a"]);var O=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=n("3f9d");r["a"].config.productionTip=!1,r["a"].use(T["a"]),new r["a"]({router:k,store:O,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},7772:function(t,e,n){"use strict";var r=n("88bc"),s=n.n(r);s.a},"88bc":function(t,e,n){},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.34a1f42a.png"},d6e2:function(t,e,n){t.exports=n.p+"img/navBack.04a9455d.svg"}});
//# sourceMappingURL=app.a2854ff4.js.map