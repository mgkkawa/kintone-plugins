/*! For license information please see config.js.LICENSE.txt */
(()=>{var e={455:function(e){e.exports=function(){"use strict";var e={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const t=e=>{const t={};for(const i in e)t[e[i]]="swal2-"+e[i];return t},i=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","no-war"]),n=t(["success","warning","info","question","error"]),o="SweetAlert2:",a=e=>e.charAt(0).toUpperCase()+e.slice(1),s=e=>{console.warn("".concat(o," ").concat("object"==typeof e?e.join(" "):e))},r=e=>{console.error("".concat(o," ").concat(e))},l=[],d=(e,t)=>{var i;i='"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'),l.includes(i)||(l.push(i),s(i))},u=e=>"function"==typeof e?e():e,c=e=>e&&"function"==typeof e.toPromise,h=e=>c(e)?e.toPromise():Promise.resolve(e),p=e=>e&&Promise.resolve(e)===e,_=()=>document.body.querySelector(".".concat(i.container)),b=e=>{const t=_();return t?t.querySelector(e):null},m=e=>b(".".concat(e)),g=()=>m(i.popup),f=()=>m(i.icon),v=()=>m(i.title),y=()=>m(i["html-container"]),k=()=>m(i.image),x=()=>m(i["progress-steps"]),w=()=>m(i["validation-message"]),$=()=>b(".".concat(i.actions," .").concat(i.confirm)),C=()=>b(".".concat(i.actions," .").concat(i.deny)),I=()=>b(".".concat(i.loader)),S=()=>b(".".concat(i.actions," .").concat(i.cancel)),E=()=>m(i.actions),T=()=>m(i.footer),A=()=>m(i["timer-progress-bar"]),V=()=>m(i.close),D=()=>{const e=Array.from(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((e,t)=>{const i=parseInt(e.getAttribute("tabindex")),n=parseInt(t.getAttribute("tabindex"));return i>n?1:i<n?-1:0})),t=Array.from(g().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter((e=>"-1"!==e.getAttribute("tabindex")));return(e=>{const t=[];for(let i=0;i<e.length;i++)-1===t.indexOf(e[i])&&t.push(e[i]);return t})(e.concat(t)).filter((e=>J(e)))},L=()=>O(document.body,i.shown)&&!O(document.body,i["toast-shown"])&&!O(document.body,i["no-backdrop"]),H=()=>g()&&O(g(),i.toast),M={previousBodyPadding:null},B=(e,t)=>{if(e.textContent="",t){const i=(new DOMParser).parseFromString(t,"text/html");Array.from(i.querySelector("head").childNodes).forEach((t=>{e.appendChild(t)})),Array.from(i.querySelector("body").childNodes).forEach((t=>{t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(!0)):e.appendChild(t)}))}},O=(e,t)=>{if(!t)return!1;const i=t.split(/\s+/);for(let t=0;t<i.length;t++)if(!e.classList.contains(i[t]))return!1;return!0},N=(e,t,o)=>{if(((e,t)=>{Array.from(e.classList).forEach((o=>{Object.values(i).includes(o)||Object.values(n).includes(o)||Object.values(t.showClass).includes(o)||e.classList.remove(o)}))})(e,t),t.customClass&&t.customClass[o]){if("string"!=typeof t.customClass[o]&&!t.customClass[o].forEach)return void s("Invalid type of customClass.".concat(o,'! Expected string or iterable object, got "').concat(typeof t.customClass[o],'"'));R(e,t.customClass[o])}},P=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(i.popup," > .").concat(i[t]));case"checkbox":return e.querySelector(".".concat(i.popup," > .").concat(i.checkbox," input"));case"radio":return e.querySelector(".".concat(i.popup," > .").concat(i.radio," input:checked"))||e.querySelector(".".concat(i.popup," > .").concat(i.radio," input:first-child"));case"range":return e.querySelector(".".concat(i.popup," > .").concat(i.range," input"));default:return e.querySelector(".".concat(i.popup," > .").concat(i.input))}},z=e=>{if(e.focus(),"file"!==e.type){const t=e.value;e.value="",e.value=t}},U=(e,t,i)=>{e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach((t=>{Array.isArray(e)?e.forEach((e=>{i?e.classList.add(t):e.classList.remove(t)})):i?e.classList.add(t):e.classList.remove(t)})))},R=(e,t)=>{U(e,t,!0)},j=(e,t)=>{U(e,t,!1)},G=(e,t)=>{const i=Array.from(e.children);for(let e=0;e<i.length;e++){const n=i[e];if(n instanceof HTMLElement&&O(n,t))return n}},F=(e,t,i)=>{i==="".concat(parseInt(i))&&(i=parseInt(i)),i||0===parseInt(i)?e.style[t]="number"==typeof i?"".concat(i,"px"):i:e.style.removeProperty(t)},W=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";e.style.display=t},q=e=>{e.style.display="none"},K=(e,t,i,n)=>{const o=e.querySelector(t);o&&(o.style[i]=n)},Y=function(e,t){t?W(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"flex"):q(e)},J=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),Z=e=>!!(e.scrollHeight>e.clientHeight),X=e=>{const t=window.getComputedStyle(e),i=parseFloat(t.getPropertyValue("animation-duration")||"0"),n=parseFloat(t.getPropertyValue("transition-duration")||"0");return i>0||n>0},Q=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=A();J(i)&&(t&&(i.style.transition="none",i.style.width="100%"),setTimeout((()=>{i.style.transition="width ".concat(e/1e3,"s linear"),i.style.width="0%"}),10))},ee={},te=e=>new Promise((t=>{if(!e)return t();const i=window.scrollX,n=window.scrollY;ee.restoreFocusTimeout=setTimeout((()=>{ee.previousActiveElement instanceof HTMLElement?(ee.previousActiveElement.focus(),ee.previousActiveElement=null):document.body&&document.body.focus(),t()}),100),window.scrollTo(i,n)})),ie=()=>"undefined"==typeof window||"undefined"==typeof document,ne='\n <div aria-labelledby="'.concat(i.title,'" aria-describedby="').concat(i["html-container"],'" class="').concat(i.popup,'" tabindex="-1">\n   <button type="button" class="').concat(i.close,'"></button>\n   <ul class="').concat(i["progress-steps"],'"></ul>\n   <div class="').concat(i.icon,'"></div>\n   <img class="').concat(i.image,'" />\n   <h2 class="').concat(i.title,'" id="').concat(i.title,'"></h2>\n   <div class="').concat(i["html-container"],'" id="').concat(i["html-container"],'"></div>\n   <input class="').concat(i.input,'" />\n   <input type="file" class="').concat(i.file,'" />\n   <div class="').concat(i.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(i.select,'"></select>\n   <div class="').concat(i.radio,'"></div>\n   <label for="').concat(i.checkbox,'" class="').concat(i.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(i.label,'"></span>\n   </label>\n   <textarea class="').concat(i.textarea,'"></textarea>\n   <div class="').concat(i["validation-message"],'" id="').concat(i["validation-message"],'"></div>\n   <div class="').concat(i.actions,'">\n     <div class="').concat(i.loader,'"></div>\n     <button type="button" class="').concat(i.confirm,'"></button>\n     <button type="button" class="').concat(i.deny,'"></button>\n     <button type="button" class="').concat(i.cancel,'"></button>\n   </div>\n   <div class="').concat(i.footer,'"></div>\n   <div class="').concat(i["timer-progress-bar-container"],'">\n     <div class="').concat(i["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),oe=()=>{ee.currentInstance.resetValidationMessage()},ae=e=>{const t=(()=>{const e=_();return!!e&&(e.remove(),j([document.documentElement,document.body],[i["no-backdrop"],i["toast-shown"],i["has-column"]]),!0)})();if(ie())return void r("SweetAlert2 requires document to initialize");const n=document.createElement("div");n.className=i.container,t&&R(n,i["no-transition"]),B(n,ne);const o="string"==typeof(a=e.target)?document.querySelector(a):a;var a;o.appendChild(n),(e=>{const t=g();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")})(e),(e=>{"rtl"===window.getComputedStyle(e).direction&&R(_(),i.rtl)})(o),(()=>{const e=g(),t=G(e,i.input),n=G(e,i.file),o=e.querySelector(".".concat(i.range," input")),a=e.querySelector(".".concat(i.range," output")),s=G(e,i.select),r=e.querySelector(".".concat(i.checkbox," input")),l=G(e,i.textarea);t.oninput=oe,n.onchange=oe,s.onchange=oe,r.onchange=oe,l.oninput=oe,o.oninput=()=>{oe(),a.value=o.value},o.onchange=()=>{oe(),a.value=o.value}})()},se=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"==typeof e?re(e,t):e&&B(t,e)},re=(e,t)=>{e.jquery?le(t,e):B(t,e.toString())},le=(e,t)=>{if(e.textContent="",0 in t)for(let i=0;i in t;i++)e.appendChild(t[i].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},de=(()=>{if(ie())return!1;const e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&void 0!==e.style[i])return t[i];return!1})(),ue=(e,t)=>{const n=E(),o=I();t.showConfirmButton||t.showDenyButton||t.showCancelButton?W(n):q(n),N(n,t,"actions"),function(e,t,n){const o=$(),a=C(),s=S();ce(o,"confirm",n),ce(a,"deny",n),ce(s,"cancel",n),function(e,t,n,o){o.buttonsStyling?(R([e,t,n],i.styled),o.confirmButtonColor&&(e.style.backgroundColor=o.confirmButtonColor,R(e,i["default-outline"])),o.denyButtonColor&&(t.style.backgroundColor=o.denyButtonColor,R(t,i["default-outline"])),o.cancelButtonColor&&(n.style.backgroundColor=o.cancelButtonColor,R(n,i["default-outline"]))):j([e,t,n],i.styled)}(o,a,s,n),n.reverseButtons&&(n.toast?(e.insertBefore(s,o),e.insertBefore(a,o)):(e.insertBefore(s,t),e.insertBefore(a,t),e.insertBefore(o,t)))}(n,o,t),B(o,t.loaderHtml),N(o,t,"loader")};function ce(e,t,n){Y(e,n["show".concat(a(t),"Button")],"inline-block"),B(e,n["".concat(t,"ButtonText")]),e.setAttribute("aria-label",n["".concat(t,"ButtonAriaLabel")]),e.className=i[t],N(e,n,"".concat(t,"Button")),R(e,n["".concat(t,"ButtonClass")])}const he=(e,t)=>{const n=_();n&&(function(e,t){"string"==typeof t?e.style.background=t:t||R([document.documentElement,document.body],i["no-backdrop"])}(n,t.backdrop),function(e,t){t in i?R(e,i[t]):(s('The "position" parameter is not valid, defaulting to "center"'),R(e,i.center))}(n,t.position),function(e,t){if(t&&"string"==typeof t){const n="grow-".concat(t);n in i&&R(e,i[n])}}(n,t.grow),N(n,t,"container"))};const pe=["input","file","range","select","radio","checkbox","textarea"],_e=e=>{if(!ke[e.input])return void r('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));const t=ve(e.input),i=ke[e.input](t,e);W(t),setTimeout((()=>{z(i)}))},be=(e,t)=>{const i=P(g(),e);if(i){(e=>{for(let t=0;t<e.attributes.length;t++){const i=e.attributes[t].name;["type","value","style"].includes(i)||e.removeAttribute(i)}})(i);for(const e in t)i.setAttribute(e,t[e])}},me=e=>{const t=ve(e.input);"object"==typeof e.customClass&&R(t,e.customClass.input)},ge=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},fe=(e,t,n)=>{if(n.inputLabel){e.id=i.input;const o=document.createElement("label"),a=i["input-label"];o.setAttribute("for",e.id),o.className=a,"object"==typeof n.customClass&&R(o,n.customClass.inputLabel),o.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",o)}},ve=e=>G(g(),i[e]||i.input),ye=(e,t)=>{["string","number"].includes(typeof t)?e.value="".concat(t):p(t)||s('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t,'"'))},ke={};ke.text=ke.email=ke.password=ke.number=ke.tel=ke.url=(e,t)=>(ye(e,t.inputValue),fe(e,e,t),ge(e,t),e.type=t.input,e),ke.file=(e,t)=>(fe(e,e,t),ge(e,t),e),ke.range=(e,t)=>{const i=e.querySelector("input"),n=e.querySelector("output");return ye(i,t.inputValue),i.type=t.input,ye(n,t.inputValue),fe(i,e,t),e},ke.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const i=document.createElement("option");B(i,t.inputPlaceholder),i.value="",i.disabled=!0,i.selected=!0,e.appendChild(i)}return fe(e,e,t),e},ke.radio=e=>(e.textContent="",e),ke.checkbox=(e,t)=>{const n=P(g(),"checkbox");n.value="1",n.id=i.checkbox,n.checked=Boolean(t.inputValue);const o=e.querySelector("span");return B(o,t.inputPlaceholder),n},ke.textarea=(e,t)=>{ye(e,t.inputValue),ge(e,t),fe(e,e,t);return setTimeout((()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(g()).width);new MutationObserver((()=>{const i=e.offsetWidth+(n=e,parseInt(window.getComputedStyle(n).marginLeft)+parseInt(window.getComputedStyle(n).marginRight));var n;g().style.width=i>t?"".concat(i,"px"):null})).observe(e,{attributes:!0,attributeFilter:["style"]})}})),e};const xe=(t,n)=>{const o=y();N(o,n,"htmlContainer"),n.html?(se(n.html,o),W(o,"block")):n.text?(o.textContent=n.text,W(o,"block")):q(o),((t,n)=>{const o=g(),a=e.innerParams.get(t),s=!a||n.input!==a.input;pe.forEach((e=>{const t=G(o,i[e]);be(e,n.inputAttributes),t.className=i[e],s&&q(t)})),n.input&&(s&&_e(n),me(n))})(t,n)},we=(e,t)=>{for(const i in n)t.icon!==i&&j(e,n[i]);R(e,n[t.icon]),Ie(e,t),$e(),N(e,t,"icon")},$e=()=>{const e=g(),t=window.getComputedStyle(e).getPropertyValue("background-color"),i=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<i.length;e++)i[e].style.backgroundColor=t},Ce=(e,t)=>{let i,n=e.innerHTML;t.iconHtml?i=Se(t.iconHtml):"success"===t.icon?(i='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',n=n.replace(/ style=".*?"/g,"")):i="error"===t.icon?'\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n':Se({question:"?",warning:"!",info:"i"}[t.icon]),n.trim()!==i.trim()&&B(e,i)},Ie=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const i of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])K(e,i,"backgroundColor",t.iconColor);K(e,".swal2-success-ring","borderColor",t.iconColor)}},Se=e=>'<div class="'.concat(i["icon-content"],'">').concat(e,"</div>"),Ee=(e,t)=>{e.className="".concat(i.popup," ").concat(J(e)?t.showClass.popup:""),t.toast?(R([document.documentElement,document.body],i["toast-shown"]),R(e,i.toast)):R(e,i.modal),N(e,t,"popup"),"string"==typeof t.customClass&&R(e,t.customClass),t.icon&&R(e,i["icon-".concat(t.icon)])},Te=e=>{const t=document.createElement("li");return R(t,i["progress-step"]),B(t,e),t},Ae=e=>{const t=document.createElement("li");return R(t,i["progress-step-line"]),e.progressStepsDistance&&F(t,"width",e.progressStepsDistance),t},Ve=(t,o)=>{((e,t)=>{const i=_(),n=g();t.toast?(F(i,"width",t.width),n.style.width="100%",n.insertBefore(I(),f())):F(n,"width",t.width),F(n,"padding",t.padding),t.color&&(n.style.color=t.color),t.background&&(n.style.background=t.background),q(w()),Ee(n,t)})(0,o),he(0,o),((e,t)=>{const n=x();t.progressSteps&&0!==t.progressSteps.length?(W(n),n.textContent="",t.currentProgressStep>=t.progressSteps.length&&s("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(((e,o)=>{const a=Te(e);if(n.appendChild(a),o===t.currentProgressStep&&R(a,i["active-progress-step"]),o!==t.progressSteps.length-1){const e=Ae(t);n.appendChild(e)}}))):q(n)})(0,o),((t,i)=>{const o=e.innerParams.get(t),a=f();if(o&&i.icon===o.icon)return Ce(a,i),void we(a,i);if(i.icon||i.iconHtml){if(i.icon&&-1===Object.keys(n).indexOf(i.icon))return r('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(i.icon,'"')),void q(a);W(a),Ce(a,i),we(a,i),R(a,i.showClass.icon)}else q(a)})(t,o),((e,t)=>{const n=k();t.imageUrl?(W(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt),F(n,"width",t.imageWidth),F(n,"height",t.imageHeight),n.className=i.image,N(n,t,"image")):q(n)})(0,o),((e,t)=>{const i=v();Y(i,t.title||t.titleText,"block"),t.title&&se(t.title,i),t.titleText&&(i.innerText=t.titleText),N(i,t,"title")})(0,o),((e,t)=>{const i=V();B(i,t.closeButtonHtml),N(i,t,"closeButton"),Y(i,t.showCloseButton),i.setAttribute("aria-label",t.closeButtonAriaLabel)})(0,o),xe(t,o),ue(0,o),((e,t)=>{const i=T();Y(i,t.footer),t.footer&&se(t.footer,i),N(i,t,"footer")})(0,o),"function"==typeof o.didRender&&o.didRender(g())};function De(){const t=e.innerParams.get(this);if(!t)return;const n=e.domCache.get(this);q(n.loader),H()?t.icon&&W(f()):Le(n),j([n.popup,n.actions],i.loading),n.popup.removeAttribute("aria-busy"),n.popup.removeAttribute("data-loading"),n.confirmButton.disabled=!1,n.denyButton.disabled=!1,n.cancelButton.disabled=!1}const Le=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?W(t[0],"inline-block"):!J($())&&!J(C())&&!J(S())&&q(e.actions)};const He=()=>$()&&$().click(),Me=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Be=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},Oe=(e,t,i)=>{const n=D();if(n.length)return(t+=i)===n.length?t=0:-1===t&&(t=n.length-1),n[t].focus();g().focus()},Ne=["ArrowRight","ArrowDown"],Pe=["ArrowLeft","ArrowUp"],ze=(t,i,n)=>{const o=e.innerParams.get(t);o&&(i.isComposing||229===i.keyCode||(o.stopKeydownPropagation&&i.stopPropagation(),"Enter"===i.key?Ue(t,i,o):"Tab"===i.key?Re(i,o):[...Ne,...Pe].includes(i.key)?je(i.key):"Escape"===i.key&&Ge(i,o,n)))},Ue=(e,t,i)=>{if(u(i.allowEnterKey)&&t.target&&e.getInput()&&t.target instanceof HTMLElement&&t.target.outerHTML===e.getInput().outerHTML){if(["textarea","file"].includes(i.input))return;He(),t.preventDefault()}},Re=(e,t)=>{const i=e.target,n=D();let o=-1;for(let e=0;e<n.length;e++)if(i===n[e]){o=e;break}e.shiftKey?Oe(0,o,-1):Oe(0,o,1),e.stopPropagation(),e.preventDefault()},je=e=>{const t=$(),i=C(),n=S();if(document.activeElement instanceof HTMLElement&&![t,i,n].includes(document.activeElement))return;const o=Ne.includes(e)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;for(let e=0;e<E().children.length;e++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&J(a))break}a instanceof HTMLButtonElement&&a.focus()},Ge=(e,t,i)=>{u(t.allowEscapeKey)&&(e.preventDefault(),i(Me.esc))};var Fe={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const We=()=>{Array.from(document.body.children).forEach((e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))},qe=()=>{const e=navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),i=!!e.match(/WebKit/i);if(t&&i&&!e.match(/CriOS/i)){const e=44;g().scrollHeight>window.innerHeight-e&&(_().style.paddingBottom="".concat(e,"px"))}},Ke=()=>{const e=_();let t;e.ontouchstart=e=>{t=Ye(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},Ye=e=>{const t=e.target,i=_();return!(Je(e)||Ze(e)||t!==i&&(Z(i)||!(t instanceof HTMLElement)||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||Z(y())&&y().contains(t)))},Je=e=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,Ze=e=>e.touches&&e.touches.length>1,Xe=()=>{null===M.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(M.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(M.previousBodyPadding+(()=>{const e=document.createElement("div");e.className=i["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t})(),"px"))};function Qe(e,t,n,o){H()?st(e,o):(te(n).then((()=>st(e,o))),Be(ee)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),L()&&(null!==M.previousBodyPadding&&(document.body.style.paddingRight="".concat(M.previousBodyPadding,"px"),M.previousBodyPadding=null),(()=>{if(O(document.body,i.iosfix)){const e=parseInt(document.body.style.top,10);j(document.body,i.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}})(),We()),j([document.documentElement,document.body],[i.shown,i["height-auto"],i["no-backdrop"],i["toast-shown"]])}function et(e){e=nt(e);const t=Fe.swalPromiseResolve.get(this),i=tt(this);this.isAwaitingPromise()?e.isDismissed||(it(this),t(e)):i&&t(e)}const tt=t=>{const i=g();if(!i)return!1;const n=e.innerParams.get(t);if(!n||O(i,n.hideClass.popup))return!1;j(i,n.showClass.popup),R(i,n.hideClass.popup);const o=_();return j(o,n.showClass.backdrop),R(o,n.hideClass.backdrop),ot(t,i,n),!0};const it=t=>{t.isAwaitingPromise()&&(e.awaitingPromise.delete(t),e.innerParams.get(t)||t._destroy())},nt=e=>void 0===e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),ot=(e,t,i)=>{const n=_(),o=de&&X(t);"function"==typeof i.willClose&&i.willClose(t),o?at(e,t,n,i.returnFocus,i.didClose):Qe(e,n,i.returnFocus,i.didClose)},at=(e,t,i,n,o)=>{ee.swalCloseEventFinishedCallback=Qe.bind(null,e,i,n,o),t.addEventListener(de,(function(e){e.target===t&&(ee.swalCloseEventFinishedCallback(),delete ee.swalCloseEventFinishedCallback)}))},st=(e,t)=>{setTimeout((()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy()}))};function rt(t,i,n){const o=e.domCache.get(t);i.forEach((e=>{o[e].disabled=n}))}function lt(e,t){if(e)if("radio"===e.type){const i=e.parentNode.parentNode.querySelectorAll("input");for(let e=0;e<i.length;e++)i[e].disabled=t}else e.disabled=t}const dt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},ut=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],ct={},ht=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],pt=e=>Object.prototype.hasOwnProperty.call(dt,e),_t=e=>-1!==ut.indexOf(e),bt=e=>ct[e],mt=e=>{pt(e)||s('Unknown parameter "'.concat(e,'"'))},gt=e=>{ht.includes(e)&&s('The parameter "'.concat(e,'" is incompatible with toasts'))},ft=e=>{bt(e)&&d(e,bt(e))};const vt=e=>{const t={};return Object.keys(e).forEach((i=>{_t(i)?t[i]=e[i]:s("Invalid parameter to update: ".concat(i))})),t};const yt=e=>{kt(e),delete e.params,delete ee.keydownHandler,delete ee.keydownTarget,delete ee.currentInstance},kt=t=>{t.isAwaitingPromise()?(xt(e,t),e.awaitingPromise.set(t,!0)):(xt(Fe,t),xt(e,t))},xt=(e,t)=>{for(const i in e)e[i].delete(t)};var wt=Object.freeze({hideLoading:De,disableLoading:De,getInput:function(t){const i=e.innerParams.get(t||this),n=e.domCache.get(t||this);return n?P(n.popup,i.input):null},close:et,isAwaitingPromise:function(){return!!e.awaitingPromise.get(this)},rejectPromise:function(e){const t=Fe.swalPromiseReject.get(this);it(this),t&&t(e)},handleAwaitingPromise:it,closePopup:et,closeModal:et,closeToast:et,enableButtons:function(){rt(this,["confirmButton","denyButton","cancelButton"],!1)},disableButtons:function(){rt(this,["confirmButton","denyButton","cancelButton"],!0)},enableInput:function(){lt(this.getInput(),!1)},disableInput:function(){lt(this.getInput(),!0)},showValidationMessage:function(t){const n=e.domCache.get(this),o=e.innerParams.get(this);B(n.validationMessage,t),n.validationMessage.className=i["validation-message"],o.customClass&&o.customClass.validationMessage&&R(n.validationMessage,o.customClass.validationMessage),W(n.validationMessage);const a=this.getInput();a&&(a.setAttribute("aria-invalid",!0),a.setAttribute("aria-describedby",i["validation-message"]),z(a),R(a,i.inputerror))},resetValidationMessage:function(){const t=e.domCache.get(this);t.validationMessage&&q(t.validationMessage);const n=this.getInput();n&&(n.removeAttribute("aria-invalid"),n.removeAttribute("aria-describedby"),j(n,i.inputerror))},getProgressSteps:function(){return e.domCache.get(this).progressSteps},update:function(t){const i=g(),n=e.innerParams.get(this);if(!i||O(i,n.hideClass.popup))return s("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const o=vt(t),a=Object.assign({},n,o);Ve(this,a),e.innerParams.set(this,a),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})},_destroy:function(){const t=e.domCache.get(this),i=e.innerParams.get(this);i?(t.popup&&ee.swalCloseEventFinishedCallback&&(ee.swalCloseEventFinishedCallback(),delete ee.swalCloseEventFinishedCallback),"function"==typeof i.didDestroy&&i.didDestroy(),yt(this)):kt(this)}});const $t=e=>{let t=g();t||new Ii,t=g();const i=I();H()?q(f()):Ct(t,e),W(i),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},Ct=(e,t)=>{const n=E(),o=I();!t&&J($())&&(t=$()),W(n),t&&(q(t),o.setAttribute("data-button-to-replace",t.className)),o.parentNode.insertBefore(o,t),R([e,n],i.loading)},It=e=>e.checked?1:0,St=e=>e.checked?e.value:null,Et=e=>e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,Tt=(e,t)=>{const i=g(),n=e=>{Vt[t.input](i,Dt(e),t)};c(t.inputOptions)||p(t.inputOptions)?($t($()),h(t.inputOptions).then((t=>{e.hideLoading(),n(t)}))):"object"==typeof t.inputOptions?n(t.inputOptions):r("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof t.inputOptions))},At=(e,t)=>{const i=e.getInput();q(i),h(t.inputValue).then((n=>{i.value="number"===t.input?"".concat(parseFloat(n)||0):"".concat(n),W(i),i.focus(),e.hideLoading()})).catch((t=>{r("Error in inputValue promise: ".concat(t)),i.value="",W(i),i.focus(),e.hideLoading()}))},Vt={select:(e,t,n)=>{const o=G(e,i.select),a=(e,t,i)=>{const o=document.createElement("option");o.value=i,B(o,t),o.selected=Lt(i,n.inputValue),e.appendChild(o)};t.forEach((e=>{const t=e[0],i=e[1];if(Array.isArray(i)){const e=document.createElement("optgroup");e.label=t,e.disabled=!1,o.appendChild(e),i.forEach((t=>a(e,t[1],t[0])))}else a(o,i,t)})),o.focus()},radio:(e,t,n)=>{const o=G(e,i.radio);t.forEach((e=>{const t=e[0],a=e[1],s=document.createElement("input"),r=document.createElement("label");s.type="radio",s.name=i.radio,s.value=t,Lt(t,n.inputValue)&&(s.checked=!0);const l=document.createElement("span");B(l,a),l.className=i.label,r.appendChild(s),r.appendChild(l),o.appendChild(r)}));const a=o.querySelectorAll("input");a.length&&a[0].focus()}},Dt=e=>{const t=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach(((e,i)=>{let n=e;"object"==typeof n&&(n=Dt(n)),t.push([i,n])})):Object.keys(e).forEach((i=>{let n=e[i];"object"==typeof n&&(n=Dt(n)),t.push([i,n])})),t},Lt=(e,t)=>t&&t.toString()===e.toString(),Ht=(t,i)=>{const n=e.innerParams.get(t);if(!n.input)return void r('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(i)));const o=((e,t)=>{const i=e.getInput();if(!i)return null;switch(t.input){case"checkbox":return It(i);case"radio":return St(i);case"file":return Et(i);default:return t.inputAutoTrim?i.value.trim():i.value}})(t,n);n.inputValidator?Mt(t,o,i):t.getInput().checkValidity()?"deny"===i?Bt(t,o):Pt(t,o):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},Mt=(t,i,n)=>{const o=e.innerParams.get(t);t.disableInput(),Promise.resolve().then((()=>h(o.inputValidator(i,o.validationMessage)))).then((e=>{t.enableButtons(),t.enableInput(),e?t.showValidationMessage(e):"deny"===n?Bt(t,i):Pt(t,i)}))},Bt=(t,i)=>{const n=e.innerParams.get(t||void 0);n.showLoaderOnDeny&&$t(C()),n.preDeny?(e.awaitingPromise.set(t||void 0,!0),Promise.resolve().then((()=>h(n.preDeny(i,n.validationMessage)))).then((e=>{!1===e?(t.hideLoading(),it(t)):t.close({isDenied:!0,value:void 0===e?i:e})})).catch((e=>Nt(t||void 0,e)))):t.close({isDenied:!0,value:i})},Ot=(e,t)=>{e.close({isConfirmed:!0,value:t})},Nt=(e,t)=>{e.rejectPromise(t)},Pt=(t,i)=>{const n=e.innerParams.get(t||void 0);n.showLoaderOnConfirm&&$t(),n.preConfirm?(t.resetValidationMessage(),e.awaitingPromise.set(t||void 0,!0),Promise.resolve().then((()=>h(n.preConfirm(i,n.validationMessage)))).then((e=>{J(w())||!1===e?(t.hideLoading(),it(t)):Ot(t,void 0===e?i:e)})).catch((e=>Nt(t||void 0,e)))):Ot(t,i)},zt=(t,i,n)=>{i.popup.onclick=()=>{const i=e.innerParams.get(t);i&&(Ut(i)||i.timer||i.input)||n(Me.close)}},Ut=e=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton;let Rt=!1;const jt=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(Rt=!0)}}},Gt=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,(t.target===e.popup||e.popup.contains(t.target))&&(Rt=!0)}}},Ft=(t,i,n)=>{i.container.onclick=o=>{const a=e.innerParams.get(t);Rt?Rt=!1:o.target===i.container&&u(a.allowOutsideClick)&&n(Me.backdrop)}},Wt=e=>e instanceof Element||(e=>"object"==typeof e&&e.jquery)(e);const qt=()=>{if(ee.timeout)return(()=>{const e=A(),t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const i=t/parseInt(window.getComputedStyle(e).width)*100;e.style.removeProperty("transition"),e.style.width="".concat(i,"%")})(),ee.timeout.stop()},Kt=()=>{if(ee.timeout){const e=ee.timeout.start();return Q(e),e}};let Yt=!1;const Jt={};const Zt=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in Jt){const i=t.getAttribute(e);if(i)return void Jt[e].fire({template:i})}};var Xt=Object.freeze({isValidParameter:pt,isUpdatableParameter:_t,isDeprecatedParameter:bt,argsToParams:e=>{const t={};return"object"!=typeof e[0]||Wt(e[0])?["title","html","icon"].forEach(((i,n)=>{const o=e[n];"string"==typeof o||Wt(o)?t[i]=o:void 0!==o&&r("Unexpected type of ".concat(i,'! Expected "string" or "Element", got ').concat(typeof o))})):Object.assign(t,e[0]),t},isVisible:()=>J(g()),clickConfirm:He,clickDeny:()=>C()&&C().click(),clickCancel:()=>S()&&S().click(),getContainer:_,getPopup:g,getTitle:v,getHtmlContainer:y,getImage:k,getIcon:f,getInputLabel:()=>m(i["input-label"]),getCloseButton:V,getActions:E,getConfirmButton:$,getDenyButton:C,getCancelButton:S,getLoader:I,getFooter:T,getTimerProgressBar:A,getFocusableElements:D,getValidationMessage:w,isLoading:()=>g().hasAttribute("data-loading"),fire:function(){const e=this;for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return new e(...i)},mixin:function(e){return class extends(this){_main(t,i){return super._main(t,Object.assign({},e,i))}}},showLoading:$t,enableLoading:$t,getTimerLeft:()=>ee.timeout&&ee.timeout.getTimerLeft(),stopTimer:qt,resumeTimer:Kt,toggleTimer:()=>{const e=ee.timeout;return e&&(e.running?qt():Kt())},increaseTimer:e=>{if(ee.timeout){const t=ee.timeout.increase(e);return Q(t,!0),t}},isTimerRunning:()=>ee.timeout&&ee.timeout.isRunning(),bindClickHandler:function(){Jt[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template"]=this,Yt||(document.body.addEventListener("click",Zt),Yt=!0)}});class Qt{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const ei=["swal-title","swal-html","swal-footer"],ti=e=>{const t={};return Array.from(e.querySelectorAll("swal-param")).forEach((e=>{di(e,["name","value"]);const i=e.getAttribute("name"),n=e.getAttribute("value");t[i]="boolean"==typeof dt[i]?"false"!==n:"object"==typeof dt[i]?JSON.parse(n):n})),t},ii=e=>{const t={};return Array.from(e.querySelectorAll("swal-function-param")).forEach((e=>{const i=e.getAttribute("name"),n=e.getAttribute("value");t[i]=new Function("return ".concat(n))()})),t},ni=e=>{const t={};return Array.from(e.querySelectorAll("swal-button")).forEach((e=>{di(e,["type","color","aria-label"]);const i=e.getAttribute("type");t["".concat(i,"ButtonText")]=e.innerHTML,t["show".concat(a(i),"Button")]=!0,e.hasAttribute("color")&&(t["".concat(i,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(t["".concat(i,"ButtonAriaLabel")]=e.getAttribute("aria-label"))})),t},oi=e=>{const t={},i=e.querySelector("swal-image");return i&&(di(i,["src","width","height","alt"]),i.hasAttribute("src")&&(t.imageUrl=i.getAttribute("src")),i.hasAttribute("width")&&(t.imageWidth=i.getAttribute("width")),i.hasAttribute("height")&&(t.imageHeight=i.getAttribute("height")),i.hasAttribute("alt")&&(t.imageAlt=i.getAttribute("alt"))),t},ai=e=>{const t={},i=e.querySelector("swal-icon");return i&&(di(i,["type","color"]),i.hasAttribute("type")&&(t.icon=i.getAttribute("type")),i.hasAttribute("color")&&(t.iconColor=i.getAttribute("color")),t.iconHtml=i.innerHTML),t},si=e=>{const t={},i=e.querySelector("swal-input");i&&(di(i,["type","label","placeholder","value"]),t.input=i.getAttribute("type")||"text",i.hasAttribute("label")&&(t.inputLabel=i.getAttribute("label")),i.hasAttribute("placeholder")&&(t.inputPlaceholder=i.getAttribute("placeholder")),i.hasAttribute("value")&&(t.inputValue=i.getAttribute("value")));const n=Array.from(e.querySelectorAll("swal-input-option"));return n.length&&(t.inputOptions={},n.forEach((e=>{di(e,["value"]);const i=e.getAttribute("value"),n=e.innerHTML;t.inputOptions[i]=n}))),t},ri=(e,t)=>{const i={};for(const n in t){const o=t[n],a=e.querySelector(o);a&&(di(a,[]),i[o.replace(/^swal-/,"")]=a.innerHTML.trim())}return i},li=e=>{const t=ei.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach((e=>{const i=e.tagName.toLowerCase();t.includes(i)||s("Unrecognized element <".concat(i,">"))}))},di=(e,t)=>{Array.from(e.attributes).forEach((i=>{-1===t.indexOf(i.name)&&s(['Unrecognized attribute "'.concat(i.name,'" on <').concat(e.tagName.toLowerCase(),">."),"".concat(t.length?"Allowed attributes are: ".concat(t.join(", ")):"To set the value, use HTML within the element.")])}))},ui=e=>{const t=_(),n=g();"function"==typeof e.willOpen&&e.willOpen(n);const o=window.getComputedStyle(document.body).overflowY;_i(t,n,e),setTimeout((()=>{hi(t,n)}),10),L()&&(pi(t,e.scrollbarPadding,o),Array.from(document.body.children).forEach((e=>{e===_()||e.contains(_())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}))),H()||ee.previousActiveElement||(ee.previousActiveElement=document.activeElement),"function"==typeof e.didOpen&&setTimeout((()=>e.didOpen(n))),j(t,i["no-transition"])},ci=e=>{const t=g();if(e.target!==t)return;const i=_();t.removeEventListener(de,ci),i.style.overflowY="auto"},hi=(e,t)=>{de&&X(t)?(e.style.overflowY="hidden",t.addEventListener(de,ci)):e.style.overflowY="auto"},pi=(e,t,n)=>{(()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!O(document.body,i.iosfix)){const e=document.body.scrollTop;document.body.style.top="".concat(-1*e,"px"),R(document.body,i.iosfix),Ke(),qe()}})(),t&&"hidden"!==n&&Xe(),setTimeout((()=>{e.scrollTop=0}))},_i=(e,t,n)=>{R(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),W(t,"grid"),setTimeout((()=>{R(t,n.showClass.popup),t.style.removeProperty("opacity")}),10),R([document.documentElement,document.body],i.shown),n.heightAuto&&n.backdrop&&!n.toast&&R([document.documentElement,document.body],i["height-auto"])};var bi={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function mi(e){(function(e){e.inputValidator||Object.keys(bi).forEach((t=>{e.input===t&&(e.inputValidator=bi[t])}))})(e),e.showLoaderOnConfirm&&!e.preConfirm&&s("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),function(e){(!e.target||"string"==typeof e.target&&!document.querySelector(e.target)||"string"!=typeof e.target&&!e.target.appendChild)&&(s('Target parameter is not valid, defaulting to "body"'),e.target="body")}(e),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),ae(e)}let gi;class fi{constructor(){if("undefined"==typeof window)return;gi=this;for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];const o=Object.freeze(this.constructor.argsToParams(i));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});const a=gi._main(gi.params);e.promise.set(this,a)}_main(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(e=>{!1===e.backdrop&&e.allowOutsideClick&&s('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const t in e)mt(t),e.toast&&gt(t),ft(t)})(Object.assign({},i,t)),ee.currentInstance&&(ee.currentInstance._destroy(),L()&&We()),ee.currentInstance=gi;const n=yi(t,i);mi(n),Object.freeze(n),ee.timeout&&(ee.timeout.stop(),delete ee.timeout),clearTimeout(ee.restoreFocusTimeout);const o=ki(gi);return Ve(gi,n),e.innerParams.set(gi,n),vi(gi,o,n)}then(t){return e.promise.get(this).then(t)}finally(t){return e.promise.get(this).finally(t)}}const vi=(t,i,n)=>new Promise(((o,a)=>{const s=e=>{t.close({isDismissed:!0,dismiss:e})};Fe.swalPromiseResolve.set(t,o),Fe.swalPromiseReject.set(t,a),i.confirmButton.onclick=()=>{(t=>{const i=e.innerParams.get(t);t.disableButtons(),i.input?Ht(t,"confirm"):Pt(t,!0)})(t)},i.denyButton.onclick=()=>{(t=>{const i=e.innerParams.get(t);t.disableButtons(),i.returnInputValueOnDeny?Ht(t,"deny"):Bt(t,!1)})(t)},i.cancelButton.onclick=()=>{((e,t)=>{e.disableButtons(),t(Me.cancel)})(t,s)},i.closeButton.onclick=()=>{s(Me.close)},((t,i,n)=>{e.innerParams.get(t).toast?zt(t,i,n):(jt(i),Gt(i),Ft(t,i,n))})(t,i,s),((e,t,i,n)=>{Be(t),i.toast||(t.keydownHandler=t=>ze(e,t,n),t.keydownTarget=i.keydownListenerCapture?window:g(),t.keydownListenerCapture=i.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)})(t,ee,n,s),((e,t)=>{"select"===t.input||"radio"===t.input?Tt(e,t):["text","email","number","tel","textarea"].includes(t.input)&&(c(t.inputValue)||p(t.inputValue))&&($t($()),At(e,t))})(t,n),ui(n),xi(ee,n,s),wi(i,n),setTimeout((()=>{i.container.scrollTop=0}))})),yi=(e,t)=>{const i=(e=>{const t="string"==typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};const i=t.content;return li(i),Object.assign(ti(i),ii(i),ni(i),oi(i),ai(i),si(i),ri(i,ei))})(e),n=Object.assign({},dt,t,i,e);return n.showClass=Object.assign({},dt.showClass,n.showClass),n.hideClass=Object.assign({},dt.hideClass,n.hideClass),n},ki=t=>{const i={popup:g(),container:_(),actions:E(),confirmButton:$(),denyButton:C(),cancelButton:S(),loader:I(),closeButton:V(),validationMessage:w(),progressSteps:x()};return e.domCache.set(t,i),i},xi=(e,t,i)=>{const n=A();q(n),t.timer&&(e.timeout=new Qt((()=>{i("timer"),delete e.timeout}),t.timer),t.timerProgressBar&&(W(n),N(n,t,"timerProgressBar"),setTimeout((()=>{e.timeout&&e.timeout.running&&Q(t.timer)}))))},wi=(e,t)=>{t.toast||(u(t.allowEnterKey)?$i(e,t)||Oe(0,-1,1):Ci())},$i=(e,t)=>t.focusDeny&&J(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&J(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!J(e.confirmButton)||(e.confirmButton.focus(),0)),Ci=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};"undefined"!=typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)&&(document.body.style.pointerEvents="none"),Object.assign(fi.prototype,wt),Object.assign(fi,Xt),Object.keys(wt).forEach((e=>{fi[e]=function(){if(gi)return gi[e](...arguments)}})),fi.DismissReason=Me,fi.version="11.5.2";const Ii=fi;return Ii.default=Ii,Ii}(),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2),"undefined"!=typeof document&&function(e,t){var i=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=t);else try{i.innerHTML=t}catch(e){i.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=i(455),t=i.n(e);const n=["RECORD_NUMBER","CATEGORY","CREATED_TIME","CREATOR","UPDATED_TIME","STATUS","STATUS_ASSIGNEE","REFERENCE_TABLE","MODIFIER"],o=window,a=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class l{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}}const d=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new l("string"==typeof e?e:e+"",void 0,s))(t)})(e):e;var u;const c=window,h=c.trustedTypes,p=h?h.emptyScript:"",_=c.reactiveElementPolyfillSupport,b={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},m=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:m};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{a?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),n=o.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=g){var n;const o=this.constructor._$Ep(e,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:b).toAttribute(t,i.type);this._$El=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,o=n._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=n.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:b;this._$El=o,this[o]=a.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var v;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:f}),(null!==(u=c.reactiveElementVersions)&&void 0!==u?u:c.reactiveElementVersions=[]).push("1.4.2");const y=window,k=y.trustedTypes,x=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,C=`<${$}>`,I=document,S=(e="")=>I.createComment(e),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,D=/>/g,L=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),H=/'/g,M=/"/g,B=/^(?:script|style|textarea|title)$/i,O=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),N=O(1),P=O(2),z=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),R=new WeakMap,j=I.createTreeWalker(I,129,null,!1),G=(e,t)=>{const i=e.length-1,n=[];let o,a=2===t?"<svg>":"",s=A;for(let t=0;t<i;t++){const i=e[t];let r,l,d=-1,u=0;for(;u<i.length&&(s.lastIndex=u,l=s.exec(i),null!==l);)u=s.lastIndex,s===A?"!--"===l[1]?s=V:void 0!==l[1]?s=D:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=L):void 0!==l[3]&&(s=L):s===L?">"===l[0]?(s=null!=o?o:A,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?L:'"'===l[3]?M:H):s===M||s===H?s=L:s===V||s===D?s=A:(s=L,o=void 0);const c=s===L&&e[t+1].startsWith("/>")?" ":"";a+=s===A?i+C:d>=0?(n.push(r),i.slice(0,d)+"$lit$"+i.slice(d)+w+c):i+w+(-2===d?(n.push(void 0),t):c)}const r=a+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(r):r,n]};class F{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,a=0;const s=e.length-1,r=this.parts,[l,d]=G(e,t);if(this.el=F.createElement(l,i),j.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=j.nextNode())&&r.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(w)){const i=d[a++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+"$lit$").split(w),t=/([.?@])?(.*)/.exec(i);r.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?J:"?"===t[1]?X:"@"===t[1]?Q:Y})}else r.push({type:6,index:o})}for(const t of e)n.removeAttribute(t)}if(B.test(n.tagName)){const e=n.textContent.split(w),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],S()),j.nextNode(),r.push({type:2,index:++o});n.append(e[t],S())}}}else if(8===n.nodeType)if(n.data===$)r.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(w,e+1));)r.push({type:7,index:o}),e+=w.length-1}o++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function W(e,t,i=e,n){var o,a,s,r;if(t===z)return t;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const d=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,n)),void 0!==n?(null!==(s=(r=i)._$Co)&&void 0!==s?s:r._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=W(e,l._$AS(e,t.values),l,n)),t}class q{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:n}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:I).importNode(i,!0);j.currentNode=o;let a=j.nextNode(),s=0,r=0,l=n[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new K(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new ee(a,this,e)),this.u.push(t),l=n[++r]}s!==(null==l?void 0:l.index)&&(a=j.nextNode(),s++)}return o}p(e){let t=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class K{constructor(e,t,i,n){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cm=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),E(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==z&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==U&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=F.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(i);else{const e=new q(o,this),t=e.v(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return void 0===t&&R.set(e.strings,t=new F(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const o of e)n===t.length?t.push(i=new K(this.O(S()),this.O(S()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Y{constructor(e,t,i,n,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const o=this.strings;let a=!1;if(void 0===o)e=W(this,e,t,0),a=!E(e)||e!==this._$AH&&e!==z,a&&(this._$AH=e);else{const n=e;let s,r;for(e=o[0],s=0;s<o.length-1;s++)r=W(this,n[i+s],t,s),r===z&&(r=this._$AH[s]),a||(a=!E(r)||r!==this._$AH[s]),r===U?e=U:e!==U&&(e+=(null!=r?r:"")+o[s+1]),this._$AH[s]=r}a&&!n&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class J extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}const Z=k?k.emptyScript:"";class X extends Y{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends Y{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=W(this,e,t,0))&&void 0!==i?i:U)===z)return;const n=this._$AH,o=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==U&&(n===U||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class ee{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const te=y.litHtmlPolyfillSupport;var ie,ne;null==te||te(F,K),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.4.0");class oe extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var n,o;const a=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let s=a._$litPart$;if(void 0===s){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;a._$litPart$=s=new K(t.insertBefore(S(),e),e,void 0,null!=i?i:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return z}}oe.finalized=!0,oe._$litElement$=!0,null===(ie=globalThis.litElementHydrateSupport)||void 0===ie||ie.call(globalThis,{LitElement:oe});const ae=globalThis.litElementPolyfillSupport;null==ae||ae({LitElement:oe}),(null!==(ne=globalThis.litElementVersions)&&void 0!==ne?ne:globalThis.litElementVersions=[]).push("3.2.2");const se=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function re(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):se(e,t)}function le(e){return re({...e,state:!0})}const de=({finisher:e,descriptor:t})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,a=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(i.key)}:{...i,key:n};return null!=e&&(a.finisher=function(t){e(t,n)}),a}{const o=i.constructor;void 0!==t&&Object.defineProperty(i,n,t(n)),null==e||e(o,n)}};function ue(e,t){return de({descriptor:i=>{const n={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[t]&&(this[t]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}function ce(e){return de({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}var he;null===(he=window.HTMLSlotElement)||void 0===he||he.prototype.assignedElements;const pe={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let _e;const be=new Uint8Array(16);function me(){if(!_e&&(_e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!_e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return _e(be)}const ge=[];for(let e=0;e<256;++e)ge.push((e+256).toString(16).slice(1));const fe=function(e,t,i){if(pe.randomUUID&&!t&&!e)return pe.randomUUID();const n=(e=e||{}).random||(e.rng||me)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){i=i||0;for(let e=0;e<16;++e)t[i+e]=n[e];return t}return function(e,t=0){return(ge[e[t+0]]+ge[e[t+1]]+ge[e[t+2]]+ge[e[t+3]]+"-"+ge[e[t+4]]+ge[e[t+5]]+"-"+ge[e[t+6]]+ge[e[t+7]]+"-"+ge[e[t+8]]+ge[e[t+9]]+"-"+ge[e[t+10]]+ge[e[t+11]]+ge[e[t+12]]+ge[e[t+13]]+ge[e[t+14]]+ge[e[t+15]]).toLowerCase()}(n)};class ve extends oe{createRenderRoot(){return this}}const ye=(e,t,i)=>{const n=new CustomEvent(t,{detail:i,bubbles:!0,composed:!0});return e.dispatchEvent(n)},ke=e=>{const t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)},xe=()=>fe();class we{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class $e extends we{constructor(e){if(super(e),this.it=U,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||null==e)return this._t=void 0,this.it=e;if(e===z)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}$e.directiveName="unsafeHTML",$e.resultType=1;const Ce=(lt=$e,(...e)=>({_$litDirective$:lt,values:e})),Ie={MONTH_SELECT:["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],YEAR_SELECT_POSTFIX:"",WEEK_DAYS:[{text:"SUN",abbr:"Sunday"},{text:"MON",abbr:"Monday"},{text:"TUE",abbr:"Tuesday"},{text:"WED",abbr:"Wednesday"},{text:"THU",abbr:"Thursday"},{text:"FRI",abbr:"Friday"},{text:"SAT",abbr:"Saturday"}],INVALID_FORMAT:"Format is not valid.",INVALID_TIME_FORMAT:"Format is not valid.",CALENDAR_FOOTER_TEXT:{none:"None",today:"Today",close:"Close"},TIME_IS_OUT_OF_VALID_RANGE:"Time is out of valid range."},Se={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"日",abbr:"日"},{text:"月",abbr:"月"},{text:"火",abbr:"火"},{text:"水",abbr:"水"},{text:"木",abbr:"木"},{text:"金",abbr:"金"},{text:"土",abbr:"土"}],INVALID_FORMAT:"日付の形式が不正です。",INVALID_TIME_FORMAT:"時刻の形式が不正です。",CALENDAR_FOOTER_TEXT:{none:"選択を解除",today:"今日",close:"閉じる"},TIME_IS_OUT_OF_VALID_RANGE:"時刻が有効な範囲外です。"},Ee={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"周日",abbr:"周日"},{text:"周一",abbr:"周一"},{text:"周二",abbr:"周二"},{text:"周三",abbr:"周三"},{text:"周四",abbr:"周四"},{text:"周五",abbr:"周五"},{text:"周六",abbr:"周六"}],INVALID_FORMAT:"日期格式不正确。",INVALID_TIME_FORMAT:"时间格式不正确。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天",close:"关闭"},TIME_IS_OUT_OF_VALID_RANGE:"时间超出有效范围。"},Te={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"周日",abbr:"周日"},{text:"周一",abbr:"周一"},{text:"周二",abbr:"周二"},{text:"周三",abbr:"周三"},{text:"周四",abbr:"周四"},{text:"周五",abbr:"周五"},{text:"周六",abbr:"周六"}],INVALID_FORMAT:"日期格式不正確。",INVALID_TIME_FORMAT:"時間格式不正確。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天",close:"關閉"},TIME_IS_OUT_OF_VALID_RANGE:"時間超出有效範圍。"},Ae=24,Ve=12,De="AM",Le="PM",He='"max" must be greater than or equal to "min".',Me="Time is out of valid range.",Be="'timeStep' property is not number.",Oe="00:00",Ne="23:59",Pe="'value' property format is not valid.",ze="'max' property format is not valid.",Ue="'min' property format is not valid.",Re="'timeStep' property format is not valid.",je=(e,t)=>{const i=ot(e,t);let n=new Date(i.start),o=[];const a=[];for(;n<=i.end;)o.push(Ze(n)),7===o.length&&(a.push(o),o=[]),n.setDate(n.getDate()+1),n=new Date(n);return a},Ge=(e,t)=>{let i,n;i=Math.floor(e/60),n=e%60;const o=i%Ae<Ve?De:Le;return i=t?i%Ve:i%Ae,0===i&&t&&(i=Ve),i<10&&(i="0"+i),n<10&&(n="0"+n),{label:i+":"+n+(t?" "+o:""),value:i+":"+n+(t?" "+o:"")}},Fe=e=>{const t=e.split(":");let i=parseInt(t[0],10),n=parseInt(t[1],10);return isNaN(i)||isNaN(n)?0:(i<0?i=0:i>=Ae&&(i=23),n<0?n=0:n>=60&&(n=59),60*i+n)},We=(e,t)=>{const i=Fe(e),n=Fe(t);return i>n?1:i===n?0:-1},qe=e=>{let t=e%Ve;return t=0===t?Ve:t,t},Ke=e=>e>=Ve?Le:De,Ye=e=>{const[t,i]=e.split(" "),[n,o]=t.split(":");return i?`${Je(n,i)}:${o}`:e},Je=(e,t)=>{const i=parseInt(e,10);return nt(t===Le?i===Ve?12:i+12:i===Ve?0:i)},Ze=e=>{const t=new Date(e),i=t.getFullYear(),n=nt(t.getMonth()+1),o=nt(t.getDate());return{text:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,attr:`${i}-${n}-${o}`}},Xe=(e,t)=>{if(t&&!et(t)){const i=t.split("-");if(3!==i.length)return t;const n=i[0],o=i[1],a=i[2];return"en"===e?`${o}/${a}/${n}`:`${n}-${o}-${a}`}return t},Qe=(e,t)=>{if(et(t))return t;const i="en"===e,n=i?"/":"-",o=t.split(n);return`${i?o[2]:o[0]}-${i?o[0]:o[1]}-${i?o[1]:o[2]}`},et=e=>null==e||0===e.length||!/[^(^\s*)|(\s*$)]/.test(e),tt=(e="ja")=>{const t=new Date,i=t.getFullYear(),n=nt(t.getMonth()+1),o=nt(t.getDate());return"ja"===e||"zh"===e?i+"-"+n+"-"+o:n+"/"+o+"/"+i},it=(e,t)=>{if(t&&!et(t)){const i="en"===e,n=i?"/":"-";if(new Date(t).getDate()!==parseInt(t.split(n)[i?1:2],10))return!1;const o=/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;if("en"===e)return null!==t.match(o);const a=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;return null!==t.match(a)}return!1},nt=(e,t=2)=>{const i=`0000000000${e}`;return i.substr(i.length-t)},ot=(e,t)=>{const i=new Date(e,t);i.setDate(1);const n=new Date(i);n.setDate(n.getDate()-n.getDay());const o=new Date(e,t);o.setMonth(o.getMonth()+1,0);const a=new Date(o);a.setDate(a.getDate()+(6-a.getDay()));const s=(a.getTime()-n.getTime())/864e5;return a.setDate(a.getDate()+(42-s)),{start:n,end:a}},at=e=>{switch(e){case"en":default:return Ie;case"zh":return Ee;case"ja":return Se;case"zh-TW":return Te}},st=e=>{const t=[];t.push({value:`${e} 12`,label:`${e} 12`});for(let i=1;i<=11;i++)t.push({value:`${e} ${nt(i)}`,label:`${e} ${nt(i)}`});return t},rt=()=>P`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `;var lt;function dt(e,t){const i=e.querySelector(".kuc-base-datetime-listbox__listbox"),n=ut(e);if(!e.parentElement||!i||!n)return;const{inputToBottom:o,inputToTop:a}=n,s="KUC-BASE-DATETIME-HEADER-MONTH"===e.tagName?360:300,r=e.parentElement.getBoundingClientRect().height;return i.style.maxHeight=s+"px",e.parentElement.style.position="relative",o>=s?(i.style.height=s+"px","bottom"===t?void(i.style.top=r+"px"):void(i.style.bottom=r+"px")):"bottom"===t?(i.style.top=r+"px",void(i.style.height=o-18+"px")):(i.style.height=a-18+"px",i.style.top="auto",void(i.style.bottom=e.parentElement.getBoundingClientRect().height+"px"))}const ut=e=>e.parentElement?{inputToBottom:window.innerHeight-e.parentElement.getBoundingClientRect().bottom,inputToTop:e.parentElement.getBoundingClientRect().top,inputToRight:window.innerWidth-e.parentElement.getBoundingClientRect().left,inputToLeft:e.parentElement.getBoundingClientRect().left+100}:{inputToBottom:0,inputToTop:0,inputToRight:0,inputToLeft:0},ct={fromAttribute:e=>null===e,toAttribute:e=>e?null:""},ht={fromAttribute:e=>!e||-1===["en","ja","zh","zh-TW"].indexOf(e),toAttribute:e=>{const t=["en","ja","zh","zh-TW"];return-1!==t.indexOf(e)?e:-1!==t.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}},pt=e=>e instanceof HTMLElement?e:Ce(e),_t=e=>{if(void 0===e||""===e)return"";let t=[];return e.indexOf("-")>0&&(t=e.split("-")),t.length<2?`${e}-01-01`:2===t.length?`${nt(t[0],4)}-${nt(t[1])}-01`:t.length>2?`${nt(t[0],4)}-${nt(t[1])}-${nt(t[2])}`:""},bt=e=>{if(5===e.length||""===e)return e;const t=e.indexOf(":"),i=e.substr(0,t),n=e.substr(t+1,5);return`${nt(i)}:${nt(n)}`};function mt(e){if(!e||"object"!=typeof e)return{};const t={...e};for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&void 0===t[e]&&delete t[e];return t}function gt(e){return!(""!==e&&void 0!==e&&!/(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g.test(e))}function ft(e){return!(""!==e&&!/^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/.test(e))}function vt(e){return"number"==typeof e}function yt(e,t,i){const n=Math.round(e),o=Fe(t),a=Fe(i);return!isNaN(n)&&n>0&&n<=o-a}function kt(e){const[t,i,n]=e.split("-"),o=new Date(e),a=o.getFullYear(),s=o.getMonth(),r=o.getDate();return a===Number(t)&&s===Number(i)-1&&r===Number(n)}function xt(e){return!!Array.isArray(e)}function wt(e){return!!Array.isArray(e)}function $t(e){return"string"==typeof e}function Ct(e){return!!Array.isArray(e)}function It(e){return"number"==typeof e}function St(e,t){return!(!/(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g.test(e)||!/(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/.test(t))}async function Et(e,t){throw await e.updateComplete,new Error(t)}var Tt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let At;(()=>{if(At=window.customElements.get("kuc-button-1-7-0"),!At){class e extends ve{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.disabled=!1,this.visible=!0;const t=mt(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),ye(this,"click")}_getButtonColorType(){return"normal"===this.type||"submit"===this.type||"alert"===this.type?this.type:"normal"}render(){return N`
        <button
          type="button"
          class="kuc-button-1-7-0__button kuc-button-1-7-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.text}
        </button>
      `}}Tt([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Tt([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Tt([re({type:String})],e.prototype,"text",void 0),Tt([re({type:String})],e.prototype,"type",void 0),Tt([re({type:Boolean})],e.prototype,"disabled",void 0),Tt([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),window.customElements.define("kuc-button-1-7-0",e),ke('\n  kuc-button-1-7-0,\n  kuc-button-1-7-0 *,\n  kuc-button-1-7-0:lang(en),\n  kuc-button-1-7-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial, "Hiragino Kaku Gothic ProN",\n      Meiryo, sans-serif;\n  }\n  kuc-button-1-7-0:lang(ja),\n  kuc-button-1-7-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-button-1-7-0:lang(zh),\n  kuc-button-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,\n      "Heiti SC", sans-serif;\n  }\n  kuc-button-1-7-0:lang(zh-TW),\n  kuc-button-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-button-1-7-0 {\n    display: inline-block;\n    vertical-align: top;\n  }\n  kuc-button-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-button-1-7-0__button {\n    font-size: var(--kuc-button-font-size, 16px);\n    width: var(--kuc-button-width, "auto");\n    height: var(--kuc-button-height, 48px);\n    min-width: 163px;\n    padding: 0px 16px;\n    user-select: none;\n  }\n  .kuc-button-1-7-0__button--normal {\n    background-color: var(--kuc-button-background-color, #f7f9fa);\n    color: var(--kuc-button-text-color, #3498db);\n    border: 1px solid #e3e7e8;\n  }\n  .kuc-button-1-7-0__button--normal:hover,\n  .kuc-button-1-7-0__button--normal:focus-visible,\n  .kuc-button-1-7-0__button--normal:active {\n    cursor: pointer;\n  }\n  .kuc-button-1-7-0__button--normal:hover {\n    background-color: var(--kuc-button-background-hover, #c8d6dd);\n  }\n  .kuc-button-1-7-0__button--normal:focus-visible {\n    background-color: var(--kuc-button-background-focus, #c8d6dd);\n  }\n  .kuc-button-1-7-0__button--normal:active {\n    background-color: var(--kuc-button-background-active, #c8d6dd);\n  }\n  .kuc-button-1-7-0__button--submit {\n    background-color: var(--kuc-button-background-color, #3498db);\n    color: var(--kuc-button-text-color, #ffffff);\n    border: 1px solid #e3e7e8;\n  }\n  .kuc-button-1-7-0__button--submit:hover,\n  .kuc-button-1-7-0__button--submit:focus-visible,\n  .kuc-button-1-7-0__button--submit:active {\n    cursor: pointer;\n  }\n  .kuc-button-1-7-0__button--submit:hover {\n    background-color: var(--kuc-button-background-hover, #1d6fa5);\n  }\n  .kuc-button-1-7-0__button--submit:focus-visible {\n    background-color: var(--kuc-button-background-focus, #1d6fa5);\n  }\n  .kuc-button-1-7-0__button--submit:active {\n    background-color: var(--kuc-button-background-active, #1d6fa5);\n  }\n  .kuc-button-1-7-0__button--alert {\n    background-color: var(--kuc-button-background-color, #e74c3c);\n    color: var(--kuc-button-text-color, #ffffff);\n    border: 1px solid #e3e7e8;\n  }\n  .kuc-button-1-7-0__button--alert:hover,\n  .kuc-button-1-7-0__button--alert:focus-visible,\n  .kuc-button-1-7-0__button--alert:active {\n    cursor: pointer;\n  }\n  .kuc-button-1-7-0__button--alert:hover {\n    background-color: var(--kuc-button-background-hover, #bf2718);\n  }\n  .kuc-button-1-7-0__button--alert:focus-visible {\n    background-color: var(--kuc-button-background-focus, #bf2718);\n  }\n  .kuc-button-1-7-0__button--alert:active {\n    background-color: var(--kuc-button-background-active, #bf2718);\n  }\n  .kuc-button-1-7-0__button:disabled {\n    background-color: var(--kuc-button-background-color, #d4d7d7);\n    border: 1px solid #e3e7e8;\n    color: var(--kuc-button-text-color, #888888);\n    cursor: default;\n  }\n  .kuc-button-1-7-0__button--normal:focus-visible,\n  .kuc-button-1-7-0__button--submit:focus-visible,\n  .kuc-button-1-7-0__button--alert:focus-visible {\n    outline: 1px solid #3498db;\n  }\n'),At=e}})();const Vt=At,Dt="'items' property is not array.",Lt="'value' property is not array.",Ht="'value' property is not string.",Mt="'selectedIndex' property is not array.",Bt="'selectedIndex' property is not number.";var Ot=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Nt extends ve{constructor(){super(...arguments),this.ariaLive="",this.guid="",this.text=""}render(){return N`
      ${this.ariaLive&&""!==this.ariaLive?N`
            <div
              class="kuc-base-error-1-7-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:N`
            <div
              class="kuc-base-error-1-7-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}}Ot([re({type:String})],Nt.prototype,"ariaLive",void 0),Ot([re({type:String})],Nt.prototype,"guid",void 0),Ot([re({type:String})],Nt.prototype,"text",void 0),window.customElements.get("kuc-base-error-1-7-0")||(ke('\n  kuc-base-error-1-7-0,\n  kuc-base-error-1-7-0 *,\n  kuc-base-error-1-7-0:lang(en),\n  kuc-base-error-1-7-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-base-error-1-7-0:lang(ja),\n  kuc-base-error-1-7-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-base-error-1-7-0:lang(zh),\n  kuc-base-error-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-base-error-1-7-0:lang(zh-TW),\n  kuc-base-error-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-base-error-1-7-0 {\n    width: 100%;\n    font-size: 14px;\n    display: inline-table;\n    vertical-align: top;\n  }\n  kuc-base-error-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-base-error-1-7-0__error {\n    line-height: 1.5;\n    padding: 4px 18px;\n    box-sizing: border-box;\n    background-color: #e74c3c;\n    color: #ffffff;\n    margin: 8px 0px;\n    word-break: break-all;\n    white-space: normal;\n  }\n  .kuc-base-error-1-7-0__error[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-error-1-7-0",Nt));var Pt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class zt extends ve{constructor(){super(...arguments),this.requiredIcon=!1,this.guid="",this.text=""}render(){return N`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label-1-7-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&""!==this.guid?N`
          <span class="kuc-base-label-1-7-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:N` <span class="kuc-base-label-1-7-0__text">${this.text}</span> `}}Pt([re({type:Boolean})],zt.prototype,"requiredIcon",void 0),Pt([re({type:String})],zt.prototype,"guid",void 0),Pt([re({type:String})],zt.prototype,"text",void 0),window.customElements.get("kuc-base-label-1-7-0")||(ke('\n  kuc-base-label-1-7-0,\n  kuc-base-label-1-7-0 *,\n  kuc-base-label-1-7-0:lang(en),\n  kuc-base-label-1-7-0:lang(en) * {\n      font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-base-label-1-7-0:lang(ja),\n  kuc-base-label-1-7-0:lang(ja) * {\n      font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-base-label-1-7-0:lang(zh),\n  kuc-base-label-1-7-0:lang(zh) * {\n      font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-base-label-1-7-0:lang(zh-TW),\n  kuc-base-label-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-base-label-1-7-0 {\n      font-size: 14px;\n      color: #333333;\n      display: inline-table;\n      vertical-align: top;\n  }\n  kuc-base-label-1-7-0[hidden] {\n      display: none;\n  }\n  .kuc-base-label-1-7-0__required-icon {\n      font-size: 20px;\n      vertical-align: -3px;\n      color: #e74c3c;\n      margin-left: 4px;\n      line-height: 1;\n  }\n  .kuc-base-label-1-7-0__required-icon[hidden] {\n      display: none;\n  }\n'),window.customElements.define("kuc-base-label-1-7-0",zt));var Ut=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Rt;(()=>{if(Rt=window.customElements.get("kuc-checkbox-1-7-0"),!Rt){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=xe();const t=mt(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Ct(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}shouldUpdate(e){return e.has("items")&&!xt(this.items)?(Et(this,Dt),!1):e.has("value")&&!wt(this.value)?(Et(this,Lt),!1):!(e.has("selectedIndex")&&!Ct(this.selectedIndex)&&(Et(this,Mt),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.dataset.index||"0",n=t.value,o=this.value?[...this.value]:this.value,a=this._getNewValueMapping(n,i),s=this.items.map((e=>e.value)),r=Object.values(a).filter((e=>s.indexOf(e)>-1));if(r===o)return;const l=Object.keys(a).map((e=>parseInt(e,10)));this.value=r,this.selectedIndex=l,ye(this,"change",{oldValue:o,value:r})}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getCheckboxIconSvgTemplate(e,t){return P`
    <svg
      class="kuc-checkbox-1-7-0__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="19"
        height="19"
        rx="1"
        fill="white"
        stroke="${this._getSVGStrokeValue(e,t)}"
        stroke-width="2"/>
      ${t?P`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?"#d8d8d8":"#3498db"}"/>`:""}
    </svg>
  `}_getSVGStrokeValue(e,t){return e?"#d8d8d8":t?"#3498db":"#d8d8d8"}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return N`
        <div
          class="kuc-checkbox-1-7-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="checkbox"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-7-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${void 0!==e.value?e.value:""}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            for="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-7-0__group__select-menu__item__label"
            >${this._getCheckboxIconSvgTemplate(this.disabled,i)}${void 0===e.label?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return N`
        <div
          class="kuc-checkbox-1-7-0__group"
          role="group"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-checkbox-1-7-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-7-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-7-0>
          </div>
          <div
            class="kuc-checkbox-1-7-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-error-1-7-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-7-0>
        </div>
      `}updated(){this._inputEls.forEach((e=>{e.checked=this.value.indexOf(e.value)>-1}))}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}}Ut([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ut([re({type:String})],e.prototype,"error",void 0),Ut([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ut([re({type:String})],e.prototype,"itemLayout",void 0),Ut([re({type:String})],e.prototype,"label",void 0),Ut([re({type:Boolean})],e.prototype,"borderVisible",void 0),Ut([re({type:Boolean})],e.prototype,"disabled",void 0),Ut([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Ut([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),Ut([re({type:Array})],e.prototype,"items",void 0),Ut([re({type:Array})],e.prototype,"selectedIndex",void 0),Ut([re({type:Array})],e.prototype,"value",void 0),Ut([ce(".kuc-checkbox-1-7-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),Ut([le()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-checkbox-1-7-0",e),ke('\n  kuc-checkbox-1-7-0,\n  kuc-checkbox-1-7-0 *,\n  kuc-checkbox-1-7-0:lang(en),\n  kuc-checkbox-1-7-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-checkbox-1-7-0:lang(ja),\n  kuc-checkbox-1-7-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-checkbox-1-7-0:lang(zh),\n  kuc-checkbox-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-checkbox-1-7-0:lang(zh-TW),\n  kuc-checkbox-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-checkbox-1-7-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    vertical-align: top;\n    width: 239px;\n    min-width: 239px;\n   line-height: 1.5;\n  }\n  kuc-checkbox-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-checkbox-1-7-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-checkbox-1-7-0__group__select-menu {\n    white-space: nowrap;\n  }\n  .kuc-checkbox-1-7-0__group__label {\n    display: inline-block;\n    padding: 4px 0 8px 0;\n    white-space: nowrap;\n  }\n  .kuc-checkbox-1-7-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-checkbox-1-7-0__group__select-menu[borderVisible] {\n    border-color: #e3e7e8;\n    border-width: 1px;\n    border-style: solid;\n    padding: 4px 0 0 4px;\n  }\n  .kuc-checkbox-1-7-0__group__select-menu__item {\n    margin-bottom: 4px;\n    margin-right: 16px;\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    display: inline-block;\n    height: 24px;\n    line-height: 24px;\n  }\n  .kuc-checkbox-1-7-0__group__select-menu__item[itemLayout="vertical"] {\n    display: block;\n  }\n  .kuc-checkbox-1-7-0__group__select-menu__item[focused] {\n    border: 1px solid #3498db;\n  }\n  .kuc-checkbox-1-7-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  .kuc-checkbox-1-7-0__group__select-menu__item__input:hover\n    + .kuc-checkbox-1-7-0__group__select-menu__item__label {\n    color: #666666;\n  }\n  .kuc-checkbox-1-7-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    left: -30px;\n    box-sizing: border-box;\n    margin-top: -11px;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n  }\n  .kuc-checkbox-1-7-0__group__select-menu__item__input[disabled]\n    + .kuc-checkbox-1-7-0__group__select-menu__item__label {\n    color: #888888;\n    cursor: not-allowed;\n  }\n  .kuc-checkbox-1-7-0__group__select-menu__item__label {\n    cursor: pointer;\n    position: relative;\n    margin-left: 32px;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: nowrap;\n  }'),Rt=e}})();const jt=e=>{const t=(e=>{const t=document.createElement("div");return t.style.cssText=`\n  height: 0px;\n  overflow: hidden;\n  display: inline-block;\n  font-size: 14px;\n  font-family: ${window.getComputedStyle(e).fontFamily};\n  `,t})(e),i=e.cloneNode(!0);if(i.hasAttribute("hidden"))return 0;t.appendChild(i),document.body.appendChild(t);const n=t.getBoundingClientRect().width;return document.body.removeChild(t),n};var Gt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ft;(()=>{if(Ft=window.customElements.get("kuc-dropdown-1-7-0"),!Ft){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._GUID=xe();const t=mt(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}_getSelectedLabel(){const e=this.items.filter(((e,t)=>this._isCheckedItem(e,t)));return 0===e.length?"":void 0===e[0].label?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return P`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}shouldUpdate(e){return e.has("items")&&!xt(this.items)?(Et(this,Dt),!1):e.has("value")&&!$t(this.value)?(Et(this,Ht),!1):!(e.has("selectedIndex")&&!It(this.selectedIndex)&&(Et(this,Bt),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}render(){return N`
        <div class="kuc-dropdown-1-7-0__group">
          <div
            class="kuc-dropdown-1-7-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-7-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-7-0>
          </div>
          <button
            class="kuc-dropdown-1-7-0__group__toggle"
            id="${this._GUID}-toggle"
            type="button"
            aria-haspopup="true"
            aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @mouseup="${this._handleMouseUpDropdownToggle}"
            @mousedown="${this._handleMouseDownDropdownToggle}"
            @click="${this._handleClickDropdownToggle}"
            @keydown="${this._handleKeyDownDropdownToggle}"
          >
            <span class="kuc-dropdown-1-7-0__group__toggle__selected-item-label"
              >${this._getSelectedLabel()}</span
            >
            <span class="kuc-dropdown-1-7-0__group__toggle__icon">
              ${this._getToggleIconSvgTemplate()}
            </span>
          </button>
          <ul
            class="kuc-dropdown-1-7-0__group__select-menu"
            role="listbox"
            aria-hidden="${!this._selectorVisible}"
            ?hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </ul>
          <kuc-base-error-1-7-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-7-0>
        </div>
      `}firstUpdated(){window.addEventListener("resize",(()=>{this._actionResizeScrollWindow()})),window.addEventListener("scroll",(()=>{this._actionResizeScrollWindow()}))}async updated(){await this.updateComplete,this._updateContainerWidth(),this._selectorVisible?(this._setMenuPosition(),this._scrollToView(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument,!0)}),1)):setTimeout((()=>{document.removeEventListener("click",this._handleClickDocument,!0)}),1)}_handleMouseDownDropdownItem(e){const t=e.target,i=t.getAttribute("value"),n=t.dataset.index||"0";this._actionUpdateValue(i,n)}_handleMouseOverDropdownItem(e){const t=e.target;this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),this._actionHideMenu()}_handleKeyDownDropdownToggle(e){switch(e.key){case"Up":case"ArrowUp":if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case"Tab":this._selectorVisible&&this._actionHideMenu();break;case"Down":case"ArrowDown":if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case"Enter":{if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}const t=this._highlightItemEl;if(null===t)break;const i=t.getAttribute("value"),n=t.dataset.index||"0";this._actionUpdateValue(i,n),this._actionHideMenu();break}case"Escape":e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break;case"Home":this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case"End":this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_actionShowMenu(){this._buttonEl.focus(),this._selectorVisible=!0,null!==this._selectedItemEl&&this._setHighlightAndActiveDescendantMenu(this._selectedItemEl)}_actionHideMenu(){this._selectorVisible=!1,this._actionRemoveActiveDescendant()}_actionToggleMenu(){this._selectorVisible?this._actionHideMenu():this._actionShowMenu()}_actionHighlightFirstMenuItem(){this._setHighlightAndActiveDescendantMenu(this._firstItemEl)}_actionHighlightLastMenuItem(){this._setHighlightAndActiveDescendantMenu(this._lastItemEl)}_actionHighlightPrevMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.previousElementSibling,this._highlightItemEl.classList.remove("kuc-dropdown-1-7-0__group__select-menu__highlight")),null===e&&(e=this._lastItemEl),this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.nextElementSibling,this._highlightItemEl.classList.remove("kuc-dropdown-1-7-0__group__select-menu__highlight")),null===e&&(e=this._firstItemEl),this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach((e=>{e.classList.remove("kuc-dropdown-1-7-0__group__select-menu__highlight")})),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add("kuc-dropdown-1-7-0__group__select-menu__highlight")}_actionUpdateValue(e,t){const i=parseInt(t,10);if(this.value===e&&this.selectedIndex===i)return;const n={oldValue:this.value,value:e};this.value=e,this.selectedIndex=i,ye(this,"change",n)}_actionSetActiveDescendant(e){void 0!==e&&null!==this._buttonEl&&this._buttonEl.setAttribute("aria-activedescendant",e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute("aria-activedescendant")}_updateContainerWidth(){let e=this._labelEl.getBoundingClientRect().width;0===e&&(e=jt(this._labelEl)),e=e>180?e:180,this._groupEl.style.width=e+"px"}_getScrollbarWidthHeight(){const e=document.createElement("div");e.style.cssText="overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{scrollbarWidth:t,scrollbarHeight:i}}_getDistanceToggleButton(){const{scrollbarWidth:e,scrollbarHeight:t}=this._getScrollbarWidthHeight(),i=document.body.scrollHeight>window.innerHeight,n=document.body.scrollWidth>window.innerWidth;return{toTop:this._buttonEl.getBoundingClientRect().top,toBottom:window.innerHeight-this._buttonEl.getBoundingClientRect().bottom-(n?t:0),toLeft:this._buttonEl.getBoundingClientRect().left,toRight:window.innerWidth-this._buttonEl.getBoundingClientRect().left-(i?e:0)}}_setMenuPositionAboveOrBelow(){this._menuEl.style.height="auto",this._menuEl.style.bottom="auto",this._menuEl.style.overflowY="";const e=this._menuEl.getBoundingClientRect().height,t=this._getDistanceToggleButton();if(!(t.toBottom>=e))if(t.toBottom<t.toTop){const i=this._errorEl.offsetHeight?this._errorEl.offsetHeight+16:0;if(this._menuEl.style.bottom=`${this._buttonEl.offsetHeight+i}px`,t.toTop>=e)return;this._menuEl.style.height=`${t.toTop}px`,this._menuEl.style.overflowY="scroll"}else this._menuEl.style.height=`${t.toBottom}px`,this._menuEl.style.overflowY="scroll"}_setMenuPositionLeftOrRight(){this._menuEl.style.right="auto";const e=this._menuEl.getBoundingClientRect().width,t=this._getDistanceToggleButton();if(t.toRight>=e||t.toLeft<e||t.toRight<0)return;const i=this._buttonEl.offsetWidth-t.toRight;this._menuEl.style.right=i>0?`${i}px`:"0px"}_setMenuPosition(){this._setMenuPositionAboveOrBelow(),this._setMenuPositionLeftOrRight()}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;const e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout((()=>{this._timeoutID=null,this._setMenuPosition()}),50))}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return N`
        <li
          class="kuc-dropdown-1-7-0__group__select-menu__item"
          role="option"
          tabindex="${i?"0":"-1"}"
          aria-selected="${i?"true":"false"}"
          data-index="${t}"
          value="${void 0!==e.value?e.value:""}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${this._handleMouseDownDropdownItem}"
          @mouseover="${this._handleMouseOverDropdownItem}"
        >
          ${this._getDropdownIconSvgTemplate(i)}
          ${void 0===e.label?e.value:e.label}
        </li>
      `}_getDropdownIconSvgTemplate(e){return P`
      ${e?P`<svg
          class="kuc-dropdown-1-7-0__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="#3498db"/>
        </svg>`:""}`}}Gt([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Gt([re({type:String})],e.prototype,"error",void 0),Gt([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Gt([re({type:String})],e.prototype,"label",void 0),Gt([re({type:String})],e.prototype,"value",void 0),Gt([re({type:Number})],e.prototype,"selectedIndex",void 0),Gt([re({type:Boolean})],e.prototype,"disabled",void 0),Gt([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Gt([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),Gt([re({type:Array})],e.prototype,"items",void 0),Gt([le()],e.prototype,"_selectorVisible",void 0),Gt([ue(".kuc-dropdown-1-7-0__group")],e.prototype,"_groupEl",void 0),Gt([ue(".kuc-dropdown-1-7-0__group__select-menu")],e.prototype,"_menuEl",void 0),Gt([ce(".kuc-dropdown-1-7-0__group__select-menu__item")],e.prototype,"_itemsEl",void 0),Gt([ue("button.kuc-dropdown-1-7-0__group__toggle")],e.prototype,"_buttonEl",void 0),Gt([ue(".kuc-dropdown-1-7-0__group__label")],e.prototype,"_labelEl",void 0),Gt([ue(".kuc-dropdown-1-7-0__group__select-menu__item")],e.prototype,"_firstItemEl",void 0),Gt([ue(".kuc-dropdown-1-7-0__group__select-menu__item:last-child")],e.prototype,"_lastItemEl",void 0),Gt([ue(".kuc-dropdown-1-7-0__group__select-menu__item[aria-selected=true]")],e.prototype,"_selectedItemEl",void 0),Gt([ue(".kuc-dropdown-1-7-0__group__select-menu__highlight")],e.prototype,"_highlightItemEl",void 0),Gt([ue(".kuc-base-error-1-7-0__error")],e.prototype,"_errorEl",void 0),window.customElements.define("kuc-dropdown-1-7-0",e),ke('\n  kuc-dropdown-1-7-0,\n  kuc-dropdown-1-7-0 *,\n  kuc-dropdown-1-7-0:lang(en),\n  kuc-dropdown-1-7-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-dropdown-1-7-0:lang(ja),\n  kuc-dropdown-1-7-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-dropdown-1-7-0:lang(zh),\n  kuc-dropdown-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-dropdown-1-7-0:lang(zh-TW),\n  kuc-dropdown-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-dropdown-1-7-0 {\n    display: inline-table;\n    font-size: 14px;\n    color: #333333;\n    vertical-align: top;\n    width: 180px;\n    min-width: 180px;\n    line-height: 1.5;\n  }\n  kuc-dropdown-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-7-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    margin: 0px;\n    position: relative;\n  }\n  .kuc-dropdown-1-7-0__group__label {\n    padding: 4px 0px 8px 0px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .kuc-dropdown-1-7-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-7-0__group__toggle {\n    height: 40px;\n    box-sizing: border-box;\n    box-shadow: 1px 1px 1px #ffffff inset;\n    border: 1px solid #e3e7e8;\n    color: #3498db;\n    background-color: #f7f9fa;\n    padding: 0 0 0 24px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    cursor: pointer;\n  }\n  .kuc-dropdown-1-7-0__group__toggle:focus {\n    outline: none;\n    border: 1px solid #3498db;\n  }\n  .kuc-dropdown-1-7-0__group__toggle:disabled {\n    background-color: #d4d7d7;\n    box-shadow: none;\n    cursor: not-allowed;\n    color: #888888;\n  }\n  .kuc-dropdown-1-7-0__group__toggle__selected-item-label {\n    font-size: 14px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .kuc-dropdown-1-7-0__group__toggle__icon {\n    flex: none;\n    width: 38px;\n    height: 38px;\n  }\n  .kuc-dropdown-1-7-0__group__select-menu {\n    position: absolute;\n    min-width: 280px;\n    margin: 0;\n    padding: 8px 0;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n    background-color: #ffffff;\n    z-index: 2000;\n    list-style: none;\n    box-sizing: border-box;\n  }\n  .kuc-dropdown-1-7-0__group__select-menu[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-7-0__group__select-menu__item {\n    padding: 8px 16px 8px 24px;\n    line-height: 1;\n    position: relative;\n    cursor: pointer;\n    white-space: nowrap;\n\n  }\n  .kuc-dropdown-1-7-0__group__select-menu__item__icon {\n    position: absolute;\n    top: 50%;\n    left: 6px;\n    margin-top: -5px;\n  }\n  .kuc-dropdown-1-7-0__group__select-menu__item[aria-selected="true"] {\n    color: #3498db;\n  }\n  .kuc-dropdown-1-7-0__group__select-menu__highlight[role="option"] {\n    background-color: #e2f2fe;\n  }\n'),Ft=e}})();var Wt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let qt;(()=>{if(qt=window.customElements.get("kuc-multi-choice-1-7-0"),!qt){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=xe();const t=mt(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Ct(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}shouldUpdate(e){return e.has("items")&&!xt(this.items)?(Et(this,Dt),!1):e.has("value")&&!wt(this.value)?(Et(this,Lt),!1):!(e.has("selectedIndex")&&!Ct(this.selectedIndex)&&(Et(this,Mt),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return N`
        <div class="kuc-multi-choice-1-7-0__group">
          <div
            class="kuc-multi-choice-1-7-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-7-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-7-0>
          </div>
          <div
            class="kuc-multi-choice-1-7-0__group__menu"
            role="listbox"
            aria-multiselectable="true"
            aria-describedby="${this._GUID}-error"
            aria-labelledby="${this._GUID}-label"
            ?disabled="${this.disabled}"
            tabindex="${this.disabled?"-1":"0"}"
            @keydown="${this._handleKeyDownMultiChoice}"
          >
            ${this.items.map(((e,t)=>this._getMenuItemTemplate(e,t)))}
          </div>
          <kuc-base-error-1-7-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-7-0>
        </div>
      `}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;const t=e.target,i=t.getAttribute("value"),n=t.dataset.index||"0";this._handleChangeValue(i,n)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach((e=>{e.classList.contains("kuc-multi-choice-1-7-0__group__menu__highlight")&&e.classList.remove("kuc-multi-choice-1-7-0__group__menu__highlight")}));const t=e.currentTarget;t.classList.add("kuc-multi-choice-1-7-0__group__menu__highlight"),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){this.disabled||(e.currentTarget.classList.remove("kuc-multi-choice-1-7-0__group__menu__highlight"),this._setActiveDescendant())}_handleKeyDownMultiChoice(e){if(this.disabled)return;let t=0;switch(e.key){case"Up":case"ArrowUp":{e.preventDefault(),this._itemsEl.forEach(((e,i)=>{e.classList.contains("kuc-multi-choice-1-7-0__group__menu__highlight")&&(e.classList.remove("kuc-multi-choice-1-7-0__group__menu__highlight"),t=i-1)})),t=t<=-1?this._itemsEl.length-1:t;const i=this._itemsEl[t];i.classList.add("kuc-multi-choice-1-7-0__group__menu__highlight"),this._setActiveDescendant(i.id);break}case"Down":case"ArrowDown":{e.preventDefault(),this._itemsEl.forEach(((e,i)=>{e.classList.contains("kuc-multi-choice-1-7-0__group__menu__highlight")&&(e.classList.remove("kuc-multi-choice-1-7-0__group__menu__highlight"),t=i+1)})),t=t>=this._itemsEl.length?0:t;const i=this._itemsEl[t];i.classList.add("kuc-multi-choice-1-7-0__group__menu__highlight"),this._setActiveDescendant(i.id);break}case"Spacebar":case" ":e.preventDefault(),this._itemsEl.forEach((e=>{if(e.classList.contains("kuc-multi-choice-1-7-0__group__menu__highlight")){const t=e.getAttribute("value"),i=e.dataset.index||"0";this._handleChangeValue(t,i)}}))}}_getMultiChoiceCheckedIconSvgTemplate(e,t){return P`
        ${t?P`<svg
            class="kuc-multi-choice-1-7-0__group__menu__item__icon"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
              fill="${e?"#888888":"#3498db"}"
            />
          </svg>`:""}`}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getMenuItemTemplate(e,t){const i=this._isCheckedItem(e,t);return N`
        <div
          class="kuc-multi-choice-1-7-0__group__menu__item"
          role="option"
          aria-selected="${i}"
          aria-required="${this.requiredIcon}"
          data-index="${t}"
          value="${void 0!==e.value?e.value:""}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${this._handleMouseDownMultiChoiceItem}"
          @mouseover="${this._handleMouseOverMultiChoiceItem}"
          @mouseleave="${this._handleMouseLeaveMultiChoiceItem}"
        >
          ${this._getMultiChoiceCheckedIconSvgTemplate(this.disabled,i)}
          ${void 0===e.label?e.value:e.label}
        </div>
      `}_setActiveDescendant(e){void 0!==e&&null!==this._menuEl?this._menuEl.setAttribute("aria-activedescendant",e):this._menuEl.removeAttribute("aria-activedescendant")}_handleChangeValue(e,t){const i=this.value?[...this.value]:this.value,n=this._getNewValueMapping(e,t),o=this.items.map((e=>e.value)),a=Object.values(n).filter((e=>o.indexOf(e)>-1));if(a===i)return;const s=Object.keys(n).map((e=>parseInt(e,10)));this.value=a,this.selectedIndex=s,ye(this,"change",{oldValue:i,value:a})}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}}Wt([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Wt([re({type:String})],e.prototype,"error",void 0),Wt([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Wt([re({type:String})],e.prototype,"label",void 0),Wt([re({type:Boolean})],e.prototype,"disabled",void 0),Wt([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Wt([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),Wt([re({type:Array})],e.prototype,"items",void 0),Wt([re({type:Array})],e.prototype,"selectedIndex",void 0),Wt([re({type:Array})],e.prototype,"value",void 0),Wt([ue(".kuc-multi-choice-1-7-0__group__menu")],e.prototype,"_menuEl",void 0),Wt([ce(".kuc-multi-choice-1-7-0__group__menu__item")],e.prototype,"_itemsEl",void 0),Wt([le()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-multi-choice-1-7-0",e),ke('\n  kuc-multi-choice-1-7-0,\n  kuc-multi-choice-1-7-0 *,\n  kuc-multi-choice-1-7-0:lang(en),\n  kuc-multi-choice-1-7-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-multi-choice-1-7-0:lang(ja),\n  kuc-multi-choice-1-7-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-multi-choice-1-7-0:lang(zh),\n  kuc-multi-choice-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-multi-choice-1-7-0:lang(zh-TW),\n  kuc-multi-choice-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-multi-choice-1-7-0 {\n    display: inline-table;\n    font-size: 14px;\n    color: #333333;\n    width: 180px;\n    min-width: 180px;\n    line-height: 1.5;\n  }\n  kuc-multi-choice-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-multi-choice-1-7-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-multi-choice-1-7-0__group__label {\n    padding: 4px 0px 8px 0px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .kuc-multi-choice-1-7-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-multi-choice-1-7-0__group__menu {\n    position: relative;\n    background: #ffffff;\n    border: 1px solid #e3e7e8;\n    box-sizing: border-box;\n    box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;\n    padding: 6px 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 134px;\n    width: 100%;\n  }\n  .kuc-multi-choice-1-7-0__group__menu:not([disabled]):focus {\n    outline: none;\n    border: 1px solid #3498db;\n  }\n  .kuc-multi-choice-1-7-0__group__menu[disabled] {\n    background-color: #dbdcdd;\n    box-shadow: none;\n    cursor: not-allowed;\n    color: #888888;\n    outline: none;\n  }\n  .kuc-multi-choice-1-7-0__group__menu__item {\n    padding: 4px 16px;\n    margin-bottom: 2px;\n    line-height: 1;\n    position: relative;\n    white-space: nowrap;\n  }\n  .kuc-multi-choice-1-7-0__group__menu__item__icon {\n    position: absolute;\n    top: 50%;\n    left: 16px;\n    margin-top: -6px;\n    pointer-events: none;\n  }\n  .kuc-multi-choice-1-7-0__group__menu__item[aria-selected="true"] {\n    color: #3498db;\n    padding-left: 32px;\n  }\n  .kuc-multi-choice-1-7-0__group__menu[disabled]\n    .kuc-multi-choice-1-7-0__group__menu__item[aria-selected="true"] {\n    color: #888888;\n  }\n  .kuc-multi-choice-1-7-0__group__menu__highlight[role="option"] {\n    background-color: #e2f2fe;\n    cursor: pointer;\n  }\n'),qt=e}})();var Kt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Yt;(()=>{if(Yt=window.customElements.get("kuc-notification-1-7-0"),!Yt){class e extends ve{constructor(e){super(),this.className="",this.text="",this.type="danger",this.duration=-1,this._isOpened=!1;const t=mt(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonColor(){switch(this.type){case"info":return"#448aca";case"success":return"#9bbc65";default:return"#c65040"}}_getCloseButtonSvgTemplate(){return P`
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>close button</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="${this._getCloseButtonColor()}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="white"
          />
        </svg>
      `}_setAutoCloseTimer(){!Number.isFinite(this.duration)||this.duration<0||(this._clearAutoCloseTimer(),this._timeoutID=window.setTimeout((()=>{this.close()}),this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){document.body.appendChild(this),this.performUpdate(),this.classList.remove("kuc-notification-fadeout-1-7-0"),this.classList.add("kuc-notification-fadein-1-7-0"),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._isOpened=!1,this.classList.remove("kuc-notification-fadein-1-7-0"),this.classList.add("kuc-notification-fadeout-1-7-0"),this._clearAutoCloseTimer(),ye(this,"close")}render(){return N`
        <div
          class="kuc-notification-1-7-0__notification kuc-notification-1-7-0__notification--${this.type}"
        >
          <pre
            class="kuc-notification-1-7-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?"alert":""}"
          ><!--
          -->${this.text}</pre>
          <button
            class="kuc-notification-1-7-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}Kt([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Kt([re({type:String})],e.prototype,"text",void 0),Kt([re({type:String})],e.prototype,"type",void 0),Kt([re({type:Number})],e.prototype,"duration",void 0),Kt([le()],e.prototype,"_isOpened",void 0),window.customElements.define("kuc-notification-1-7-0",e),ke('\n  kuc-notification-1-7-0,\n  kuc-notification-1-7-0 *,\n  kuc-notification-1-7-0:lang(en),\n  kuc-notification-1-7-0:lang(en) * {\n    font-family: "HelveticaNeueW02-65Medi", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-notification-1-7-0:lang(ja),\n  kuc-notification-1-7-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-notification-1-7-0:lang(zh),\n  kuc-notification-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-notification-1-7-0:lang(zh-TW),\n  kuc-notification-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-notification-1-7-0 {\n    color: #ffffff;\n    font-weight: 700;\n    text-align: center;\n    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);\n  }\n  kuc-notification-1-7-0 {\n    position: fixed;\n    display: inline-block;\n    top: 0;\n    width: 100%;\n    line-height: 1.5;\n    z-index: 10000;\n    margin-top: 16px;\n    pointer-events: none;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n  }\n  .kuc-notification-fadein-1-7-0 {\n    animation-name: kuc-notification-fade-in-1-7-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n  }\n  .kuc-notification-fadeout-1-7-0 {\n    animation-name: kuc-notification-fade-out-1-7-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n  }\n  .kuc-notification-1-7-0__notification {\n    position: relative;\n    display: inline-block;\n    text-align: left;\n    padding: 16px 56px 16px 24px;\n    background-color: #e74c3c;\n  }\n  .kuc-notification-1-7-0__notification--info {\n    background-color: #3498db;\n  }\n  .kuc-notification-1-7-0__notification--success {\n    background-color: #91c36c;\n  }\n  .kuc-notification-1-7-0__notification--danger {\n    background-color: #e74c3c;\n  }\n  .kuc-notification-1-7-0__notification__title {\n    display: block;\n    margin: 0px;\n    font-size: 16px;\n    max-width: 500px;\n    min-height: 24px;\n    word-break: break-word;\n    white-space: pre-wrap;\n  }\n  .kuc-notification-1-7-0__notification__close-button {\n    position: absolute;\n    top: 5px;\n    right: 0px;\n    width: 48px;\n    height: 48px;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    pointer-events: auto;\n    cursor: pointer;\n  }\n  @keyframes kuc-notification-fade-in-1-7-0 {\n    0% {\n      visibility: visible;\n      top: -56px;\n    }\n    100% {\n      visibility: visible;\n      top: 0;\n    }\n  }\n  @keyframes kuc-notification-fade-out-1-7-0 {\n    0% {\n      visibility: visible;\n      top: 0;\n    }\n    10% {\n      visibility: visible;\n      top: 14px;\n    }\n    100% {\n      top: -56px;\n    }\n  }\n'),Yt=e}})();var Jt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Zt;(()=>{if(Zt=window.customElements.get("kuc-radio-button-1-7-0"),!Zt){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=xe();const t=mt(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}shouldUpdate(e){return e.has("items")&&!xt(this.items)?(Et(this,Dt),!1):e.has("value")&&!$t(this.value)?(Et(this,Ht),!1):!(e.has("selectedIndex")&&!It(this.selectedIndex)&&(Et(this,Bt),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value,n=t.dataset.index||"0",o=parseInt(n,10);if(this.value===i&&this.selectedIndex===o)return;const a={oldValue:this.value,value:i};this.value=i,this.selectedIndex=o,ye(this,"change",a)}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getRadioIconSvgTemplate(e,t){return P`
    <svg
      class="kuc-radio-button-1-7-0__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        fill="white"
        stroke="#e3e7e8" stroke-width="1"/>
      ${t?P`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?"#e3e7e8":"#3498db"}"/>`:""}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return N`
        <div
          class="kuc-radio-button-1-7-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="radio"
            aria-checked="${i}"
            aria-describedby="${this._GUID}-error"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-radio-button-1-7-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${void 0!==e.value?e.value:""}"
            tabindex="${this._getTabIndex(t,e,this.items)}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            class="kuc-radio-button-1-7-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(this.disabled,i)}${void 0===e.label?e.value:e.label}
          </label>
        </div>
      `}_getTabIndex(e,t,i){return 0===e&&0===i.filter((e=>e.value===this.value)).length||t.value===this.value?"0":"-1"}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return N`
        <div
          class="kuc-radio-button-1-7-0__group"
          role="radiogroup"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-radio-button-1-7-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-7-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-7-0>
          </div>
          <div
            class="kuc-radio-button-1-7-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-error-1-7-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-7-0>
        </div>
      `}async updated(){await this.updateComplete,this._updateErrorWidth()}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}_updateErrorWidth(){const e=jt(this._labelEl),t=jt(this._selectMenuEl);let i=e>239?e:239;t>i&&(i=t),this._errorEl.style.width=i+"px"}}Jt([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Jt([re({type:String})],e.prototype,"error",void 0),Jt([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Jt([re({type:String})],e.prototype,"itemLayout",void 0),Jt([re({type:String})],e.prototype,"label",void 0),Jt([re({type:String})],e.prototype,"value",void 0),Jt([re({type:Number})],e.prototype,"selectedIndex",void 0),Jt([re({type:Boolean})],e.prototype,"borderVisible",void 0),Jt([re({type:Boolean})],e.prototype,"disabled",void 0),Jt([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Jt([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),Jt([re({type:Array})],e.prototype,"items",void 0),Jt([ue(".kuc-radio-button-1-7-0__group__label")],e.prototype,"_labelEl",void 0),Jt([ue(".kuc-base-error-1-7-0__error")],e.prototype,"_errorEl",void 0),Jt([ue(".kuc-radio-button-1-7-0__group__select-menu")],e.prototype,"_selectMenuEl",void 0),window.customElements.define("kuc-radio-button-1-7-0",e),ke('\n  kuc-radio-button-1-7-0,\n  kuc-radio-button-1-7-0 *,\n  kuc-radio-button-1-7-0:lang(en),\n  kuc-radio-button-1-7-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-radio-button-1-7-0:lang(ja),\n  kuc-radio-button-1-7-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-radio-button-1-7-0:lang(zh),\n  kuc-radio-button-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-radio-button-1-7-0:lang(zh-TW),\n  kuc-radio-button-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-radio-button-1-7-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    min-width: 239px;\n    vertical-align: top;\n    line-height: 1.5;\n  }\n\n  kuc-radio-button-1-7-0[hidden] {\n    display: none;\n  }\n\n  .kuc-radio-button-1-7-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    margin: 0px;\n    width: 100%;\n  }\n\n  .kuc-radio-button-1-7-0__group__label {\n    display: inline-block;\n    padding: 4px 0 8px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-radio-button-1-7-0__group__label[hidden] {\n    display: none;\n  }\n\n  .kuc-radio-button-1-7-0__group__select-menu {\n    display: block;\n    min-width: 239px;\n    width: 100%;\n  }\n\n  .kuc-radio-button-1-7-0__group__select-menu[bordervisible] {\n    border-color: #e3e7e8;\n    border-width: 1px;\n    border-style: solid;\n    padding-top: 4px;\n    box-sizing: border-box;\n  }\n\n  .kuc-radio-button-1-7-0__group__select-menu__item {\n    margin-left: 4px;\n    margin-bottom: 4px;\n    margin-right: 16px;\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    display: inline-block;\n    height: 24px;\n    line-height: 24px;\n  }\n\n  .kuc-radio-button-1-7-0__group__select-menu__item[itemlayout="vertical"] {\n    display: block;\n  }\n\n  .kuc-radio-button-1-7-0__group__select-menu__item[focused] {\n    border: 1px solid #3498db;\n  }\n\n  .kuc-radio-button-1-7-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  .kuc-radio-button-1-7-0__group__select-menu__item__input:hover\n    + .kuc-radio-button-1-7-0__group__select-menu__item__label {\n    color: #666666;\n  }\n\n  .kuc-radio-button-1-7-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    left: -30px;\n    box-sizing: border-box;\n    margin-top: -11px;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n    border-radius: 9px;\n  }\n\n  .kuc-radio-button-1-7-0__group__select-menu__item__input[disabled]\n    + .kuc-radio-button-1-7-0__group__select-menu__item__label {\n    color: #888888;\n    cursor: not-allowed;\n  }\n\n  .kuc-radio-button-1-7-0__group__select-menu__item__label {\n    cursor: pointer;\n    position: relative;\n    margin-left: 32px;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: nowrap;\n  }\n'),Zt=e}})();let Xt;(()=>{if(Xt=window.customElements.get("kuc-spinner-1-7-0"),!Xt){class e extends ve{constructor(e){super(),this.text="",this._body=document.getElementsByTagName("BODY")[0];const t=mt(e);Object.assign(this,t)}_getSpinnerSvgTemplate(){return P`
        <svg
          class="kuc-spinner-1-7-0__spinner__loader"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle r="4" cx="30.43" cy="4.72" opacity="0.3" />
          <circle r="4" cx="39.85" cy="10.15" opacity="0.3" />
          <circle r="4" cx="45.28" cy="19.56" opacity="0.3" />
          <circle r="4" cx="45.28" cy="30.43" opacity="0.3" />
          <circle r="4" cx="39.85" cy="39.85" opacity="0.3" />
          <circle r="4" cx="30.44" cy="45.28" opacity="0.4" />
          <circle r="4" cx="19.56" cy="45.28" opacity="0.5" />
          <circle r="4" cx="10.15" cy="39.85" opacity="0.6" />
          <circle r="4" cx="4.7" cy="30.44" opacity="0.7" />
          <circle r="4" cx="4.7" cy="19.56" opacity="0.8" />
          <circle r="4" cx="10.15" cy="10.15" opacity="0.9" />
          <circle r="4" cx="19.56" cy="4.72" opacity="1" />
        </svg>
      `}open(){!1===this._body.classList.contains("kuc--has-spinner")&&this._body.classList.add("kuc--has-spinner"),this._body.appendChild(this)}close(){this._body.classList.remove("kuc--has-spinner"),this.parentNode&&this.parentNode.removeChild(this)}render(){return N`
        <div class="kuc-spinner-1-7-0__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner-1-7-0__spinner__text${this.text?"":" visually-hidden"}"
          >
            ${this.text?this.text:"now loading…"}
          </div>
        </div>
        <div class="kuc-spinner-1-7-0__mask"></div>
      `}}(function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);a>3&&s&&Object.defineProperty(t,i,s)})([re({type:String})],e.prototype,"text",void 0),window.customElements.define("kuc-spinner-1-7-0",e),ke('\n  kuc-spinner-1-7-0,\n  kuc-spinner-1-7-0 *,\n  kuc-spinner-1-7-0:lang(en),\n  kuc-spinner-1-7-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-spinner-1-7-0:lang(ja),\n  kuc-spinner-1-7-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-spinner-1-7-0:lang(zh),\n  kuc-spinner-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-spinner-1-7-0:lang(zh-TW),\n  kuc-spinner-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-spinner-1-7-0 {\n    font-size: 14px;\n    color: #333333;\n  }\n  .kuc-spinner-1-7-0__spinner {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10000;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .kuc-spinner-1-7-0__spinner__loader {\n    width: 50px;\n    height: 50px;\n    animation: rotate-loading 1s steps(12) infinite;\n    fill: #99ccff;\n  }\n  .kuc-spinner-1-7-0__spinner__text {\n    margin: 10px 0;\n  }\n  .visually-hidden {\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    border: 0;\n    padding: 0;\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    margin: -1px;\n  }\n  .kuc-spinner-1-7-0__mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #666666;\n    opacity: 0.6;\n    z-index: 9999;\n  }\n  .kuc--has-spinner {\n    overflow: hidden;\n  }\n  @keyframes rotate-loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n'),Xt=e}})();var Qt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ei;(()=>{if(ei=window.customElements.get("kuc-text-1-7-0"),!ei){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=xe();const t=mt(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};ye(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,ye(this,"change",i)}_handleInputText(e){e.stopPropagation();const t={value:e.target.value,data:e.data};ye(this,"input",t)}render(){return N`
        <div class="kuc-text-1-7-0__group">
          <label
            class="kuc-text-1-7-0__group__label"
            for="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-7-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-7-0>
          </label>
          <div class="kuc-text-1-7-0__group__input-form">
            <div class="kuc-text-1-7-0__group__input-form__prefix-outer">
              <span
                class="kuc-text-1-7-0__group__input-form__prefix-outer__prefix"
                ?hidden="${!this.prefix}"
                >${this.prefix}</span
              >
            </div>
            <div class="kuc-text-1-7-0__group__input-form__input-outer">
              <input
                class="kuc-text-1-7-0__group__input-form__input-outer__input"
                id="${this._GUID}-label"
                placeholder="${this.placeholder}"
                textAlign="${this.textAlign}"
                type="text"
                .value="${this.value}"
                aria-required="${this.requiredIcon}"
                aria-invalid="${""!==this.error}"
                aria-describedby="${this._GUID}-error"
                @focus="${this._handleFocusInput}"
                @change="${this._handleChangeInput}"
                @input="${this._handleInputText}"
                ?disabled="${this.disabled}"
              />
            </div>
            <div class="kuc-text-1-7-0__group__input-form__suffix-outer">
              <span
                class="kuc-text-1-7-0__group__input-form__suffix-outer__suffix"
                ?hidden="${!this.suffix}"
                >${this.suffix}</span
              >
            </div>
          </div>
          <kuc-base-error-1-7-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-7-0>
        </div>
      `}}Qt([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Qt([re({type:String})],e.prototype,"error",void 0),Qt([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Qt([re({type:String})],e.prototype,"label",void 0),Qt([re({type:String})],e.prototype,"placeholder",void 0),Qt([re({type:String})],e.prototype,"prefix",void 0),Qt([re({type:String})],e.prototype,"suffix",void 0),Qt([re({type:String})],e.prototype,"textAlign",void 0),Qt([re({type:String})],e.prototype,"value",void 0),Qt([re({type:Boolean})],e.prototype,"disabled",void 0),Qt([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Qt([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),window.customElements.define("kuc-text-1-7-0",e),ke('\nkuc-text-1-7-0,\nkuc-text-1-7-0 *,\nkuc-text-1-7-0:lang(en),\nkuc-text-1-7-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-text-1-7-0:lang(ja),\nkuc-text-1-7-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-text-1-7-0:lang(zh),\nkuc-text-1-7-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-text-1-7-0:lang(zh-TW),\nkuc-text-1-7-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\nkuc-text-1-7-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  min-width: 177px;\n  width: 177px;\n  line-height: 1.5;\n}\nkuc-text-1-7-0[hidden] {\n  display: none;\n}\n.kuc-text-1-7-0__group {\n  border: none;\n  padding: 0px;\n  height: auto;\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n  margin: 0px;\n}\n.kuc-text-1-7-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-text-1-7-0__group__label[hidden] {\n  display: none;\n}\n.kuc-text-1-7-0__group__input-form {\n  display: table;\n  width: 100%;\n}\n.kuc-text-1-7-0__group__input-form__prefix-outer,\n.kuc-text-1-7-0__group__input-form__input-outer,\n.kuc-text-1-7-0__group__input-form__suffix-outer {\n  display: table-cell;\n}\n.kuc-text-1-7-0__group__input-form__prefix-outer__prefix {\n  padding-right: 4px;\n  white-space: nowrap;\n}\n.kuc-text-1-7-0__group__input-form__input-outer {\n  min-width: 26px;\n  width: 100%;\n}\ninput[type="text"].kuc-text-1-7-0__group__input-form__input-outer__input {\n  width: var(--kuc-text-input-width, 100%);\n  height: var(--kuc-text-input-height, 40px);\n  font-size: var(--kuc-text-input-font-size, 14px);\n  color: var(--kuc-text-input-color, #000000);\n  min-width: 100%;\n  padding: 0 8px;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n.kuc-text-1-7-0__group__input-form__input-outer__input[textAlign="left"] {\n  text-align: left;\n}\n.kuc-text-1-7-0__group__input-form__input-outer__input[textAlign="right"] {\n  text-align: right;\n}\n.kuc-text-1-7-0__group__input-form__input-outer__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-text-1-7-0__group__input-form__input-outer__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.kuc-text-1-7-0__group__input-form__suffix-outer__suffix {\n  padding-left: 4px;\n  white-space: nowrap;\n}\n'),ei=e}})();var ti=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ii;(()=>{if(ii=window.customElements.get("kuc-textarea-1-7-0"),ii)return;class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=xe();const t=mt(e);Object.assign(this,t)}_handleFocusTextarea(e){const t={value:this.value};ye(this,"focus",t)}_handleChangeTextarea(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,ye(this,"change",i)}_handleInputTextArea(e){e.stopPropagation();const t={value:e.target.value,data:e.data};ye(this,"input",t)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(e){if(!this._onResize)return;const t=this._textarea.getBoundingClientRect();let i=e.clientX-t.left,n=e.clientY-t.top;i<299&&(i=299),n<125&&(n=125),this.style.width=i+"px",this._textarea.style.height=n+"px"}_getResizerButtonSvgTemplate(){return P`
      <svg height="16" width="16">
        <g fill="none" stroke="#b6b6b6" stroke-width="2">
          <line x1="14" x2="16" y1="15" y2="15" />
          <line x1="14" x2="16" y1="11" y2="11" />
          <line x1="14" x2="16" y1="7" y2="7" />
          <line x1="10" x2="12" y1="15" y2="15" />
          <line x1="6" x2="8" y1="15" y2="15" />
          <line x1="10" x2="12" y1="11" y2="11" />
        </g>
      </svg>
      `}firstUpdated(){document.addEventListener("mousemove",(e=>this._handleMouseMoveDocument(e))),document.addEventListener("mouseup",(e=>this._handleMouseUpDocument()))}render(){return N`
        <div class="kuc-textarea-1-7-0__group">
          <label
            class="kuc-textarea-1-7-0__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-label"
          >
            <kuc-base-label-1-7-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-7-0>
          </label>
          <textarea
            id="${this._GUID}-label"
            class="kuc-textarea-1-7-0__group__textarea"
            placeholder="${this.placeholder}"
            .value="${this.value}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            aria-invalid="${""!==this.error}"
            @change="${this._handleChangeTextarea}"
            @focus="${this._handleFocusTextarea}"
            @input="${this._handleInputTextArea}"
            ?disabled="${this.disabled}"
          >
          </textarea>
          <div
            class="kuc-textarea-1-7-0__group__resizer"
            @mousedown="${this._handleMouseDownResize}"
            ?hidden="${this.disabled}"
          >
            ${this._getResizerButtonSvgTemplate()}
          </div>
          <kuc-base-error-1-7-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-7-0>
        </div>
      `}}ti([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),ti([re({type:String})],e.prototype,"error",void 0),ti([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),ti([re({type:String})],e.prototype,"label",void 0),ti([re({type:String})],e.prototype,"placeholder",void 0),ti([re({type:String})],e.prototype,"value",void 0),ti([re({type:Boolean})],e.prototype,"disabled",void 0),ti([re({type:Boolean})],e.prototype,"requiredIcon",void 0),ti([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),ti([ue(".kuc-textarea-1-7-0__group__textarea")],e.prototype,"_textarea",void 0),window.customElements.define("kuc-textarea-1-7-0",e),ke('\n  kuc-textarea-1-7-0,\n  kuc-textarea-1-7-0 *,\n  kuc-textarea-1-7-0:lang(en),\n  kuc-textarea-1-7-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-textarea-1-7-0:lang(ja),\n  kuc-textarea-1-7-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-textarea-1-7-0:lang(zh),\n  kuc-textarea-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-textarea-1-7-0:lang(zh-TW),\n  kuc-textarea-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-textarea-1-7-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    vertical-align: top;\n    width: 299px;\n    line-height: 1.5;\n  }\n  kuc-textarea-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-textarea-1-7-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-textarea-1-7-0__group__label {\n    white-space: nowrap;\n    display: inline-block;\n    padding: 4px 0px 8px 0px;\n  }\n  .kuc-textarea-1-7-0__group__label[hidden] {\n    display: none;\n  }\n  textarea.kuc-textarea-1-7-0__group__textarea {\n    display: block;\n    border: 1px solid #e3e7e8;\n    box-sizing: border-box;\n    font-size: 14px;\n    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n    min-width: 299px;\n    min-height: 125px;\n    padding: 8px;\n    resize: none;\n    width: 100%;\n    background-color: #ffffff;\n  }\n  .kuc-textarea-1-7-0__group__textarea:focus {\n    outline: none;\n    border-color: #3498db;\n    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n    border: 1px solid #3498db;\n    background-color: #ffffff;\n    color: #333333;\n  }\n  .kuc-textarea-1-7-0__group__textarea:disabled {\n    color: #888888;\n    background-color: #d4d7d7;\n    box-shadow: none;\n    cursor: not-allowed;\n    resize: none;\n  }\n  .kuc-textarea-1-7-0__group__resizer {\n    position: relative;\n    width: 16px;\n    height: 16px;\n    cursor: se-resize;\n    float: right;\n    margin: -16px 0px;\n  }\n'),ii=e})();var ni=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let oi;(()=>{if(oi=window.customElements.get("kuc-dialog-1-7-0"),!oi){class e extends ve{constructor(e){super(),this.icon="",this.title="",this.content="",this.footer="",this._triggeredElement=null,this._content="",this._footer="",this._GUID=xe();const t=mt(e);Object.assign(this,t)}_handleFocusFirstDummy(){const e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_handleKeyDownDialog(e){"Escape"===e.key&&(e.preventDefault(),this.close())}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return P`
        <svg
          class="kuc-dialog-1-7-0__dialog__header__close-button-svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="#f7f9fa"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="#888888"
          />
        </svg>
      `}_getIconTemplate(){switch(this.icon){case"info":return P`
            <svg
              class="kuc-dialog-1-7-0__dialog__content__icon-info"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#448aca"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.71195 7.96235C8.81719 7.69023 8.67929 7.5524 8.5559 7.5524C7.98977 7.5524 7.24945 8.87059 6.97364 8.87059C6.86531 8.86323 6.77965 8.7783 6.77405 8.67269C6.77405 8.40057 7.44905 7.76444 7.64864 7.57007C8.25505 6.95498 9.08189 6.59163 9.95671 6.5558C10.6172 6.5558 11.3249 6.94808 10.7696 8.4147L9.66276 11.3656C9.53205 11.6338 9.44394 11.9198 9.40147 12.2138C9.3955 12.2661 9.41197 12.3186 9.44701 12.3587C9.48204 12.3988 9.53253 12.4231 9.58655 12.4258C10.0474 12.4258 10.893 11.1394 11.1107 11.1394C11.221 11.1597 11.2987 11.2565 11.2922 11.3656C11.2922 11.8038 9.49582 13.6804 7.9426 13.6804C7.38735 13.6804 7.00268 13.4224 7.00268 12.8499C7.00268 12.1219 7.52889 10.8815 7.63413 10.6235L8.71195 7.96235ZM9.53937 4.97962C9.55317 4.3095 10.114 3.77277 10.8023 3.77099C11.0868 3.75724 11.364 3.86105 11.5658 4.05686C11.7675 4.25267 11.8751 4.52229 11.862 4.79939C11.8604 5.12532 11.7247 5.43704 11.4853 5.66484C11.2459 5.89264 10.9228 6.01752 10.5882 6.01156C10.3033 6.02775 10.0251 5.92385 9.82434 5.72636C9.62362 5.52886 9.51981 5.25684 9.53937 4.97962Z"
                fill="white"
              />
            </svg>
          `;case"success":return P`
            <svg
              class="kuc-dialog-1-7-0__dialog__content__icon-success"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#2ecc71"
              />
              <path 
                d="M7.45159 10.3666L4.64513 7.44514L2.9032 9.32996L7.45159 13.9478L15.0967 6.59697L13.258 4.8064L7.45159 10.3666Z"
                fill="white"
              />
            </svg>
          `;case"error":return P`
            <svg
              class="kuc-dialog-1-7-0__dialog__content__icon-error"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#e74c3c"
              />
              <path
                d="M10.1497 8.99989L12.7572 6.39244L12.9339 6.21567L12.7572 6.03889L11.9617 5.24339L11.7849 5.06661L11.6081 5.24339L9.00063 7.85084L6.39317 5.24339L6.2164 5.06661L6.03962 5.24339L5.24412 6.03889L5.06734 6.21567L5.24412 6.39244L7.85159 8.99989L5.24412 11.6074L5.06734 11.7842L5.24412 11.9609L6.03962 12.7564L6.2164 12.9332L6.39317 12.7564L9.00063 10.1489L11.6081 12.7564L11.7849 12.9332L11.9617 12.7564L12.7572 11.9609L12.9339 11.7842L12.7572 11.6074L10.1497 8.99989Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
          `;case"warning":return P`
            <svg
              class="kuc-dialog-1-7-0__dialog__content__icon-warning"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#ffcc00"
              />
              <path
                d="M7.74182 3.76978H10.645L9.91924 9.42423H8.46763L7.74182 3.76978Z"
                fill="#333333"
              />
              <rect
                x="7.74182"
                y="11.3088"
                width="2.90323"
                height="2.82722"
                rx="1"
                fill="#333333"
              />
            </svg>
          `;case"question":return P`
            <svg
              class="kuc-dialog-1-7-0__dialog__content__icon-question"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.87676C10.383 9.34006 10.1707 9.73991 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90432C7.89783 9.11869 8.32111 8.42752 9.1947 7.79043C9.2632 7.7432 9.91722 7.31559 9.91722 6.72573C9.91722 6.23647 9.54947 5.89467 9.022 5.89467C8.27063 5.89467 7.85168 6.27144 7.81166 6.99037C7.80589 7.08736 7.72549 7.16344 7.62815 7.16344H7.53044H5.64914C5.59902 7.16344 5.54999 7.14252 5.51574 7.10611C5.48149 7.07005 5.46274 7.02066 5.46562 6.97054C5.56802 4.97527 6.86452 3.83053 9.02416 3.83053C10.6614 3.83053 12.4248 4.71892 12.4248 6.66984C12.4248 7.97683 12.1266 8.22381 11.0933 8.87676ZM8.99982 0C4.02976 0 0 4.02948 0 9C0 13.9709 4.02976 18 8.99982 18C13.9702 18 18 13.9709 18 9C18 4.02948 13.9702 0 8.99982 0ZM10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1038 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1038 10.503 12.3061V14.5101Z"
                fill="#666666"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.8768C10.383 9.3401 10.1707 9.73995 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90436C7.89783 9.11872 8.32111 8.42755 9.1947 7.79047C9.2632 7.74323 9.91722 7.31562 9.91722 6.72577C9.91722 6.2365 9.54947 5.8947 9.022 5.8947C8.27063 5.8947 7.85168 6.27148 7.81166 6.99041C7.80589 7.0874 7.72549 7.16347 7.62815 7.16347H7.53044H5.64914C5.59902 7.16347 5.54999 7.14256 5.51574 7.10615C5.48149 7.07009 5.46274 7.0207 5.46562 6.97058C5.56802 4.97531 6.86452 3.83057 9.02416 3.83057C10.6614 3.83057 12.4248 4.71896 12.4248 6.66988C12.4248 7.97687 12.1266 8.22384 11.0933 8.8768V8.8768Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1039 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1039 10.503 12.3061V14.5101Z"
                fill="white"
              />
            </svg>
          `;default:return""}}update(e){e.has("content")&&(this._content=pt(this.content)),e.has("footer")&&(this._footer=pt(this.footer)),super.update(e)}open(){const e=document.getElementsByTagName("body")[0];e.appendChild(this),e.classList.add("kuc--has-dialog"),this.performUpdate(),this.setAttribute("opened",""),this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()}close(){document.getElementsByTagName("body")[0].classList.remove("kuc--has-dialog"),this.removeAttribute("opened"),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus(),ye(this,"close")}render(){return N`
        <span
          class="kuc-dialog-1-7-0__first-dummy"
          tabIndex="0"
          @focus="${this._handleFocusFirstDummy}"
        ></span>
        <div
          class="kuc-dialog-1-7-0__dialog"
          role="dialog"
          tabindex="-1"
          aria-labelledby="${this._GUID}-title"
          aria-modal="true"
          @keydown="${this._handleKeyDownDialog}"
        >
          <div class="kuc-dialog-1-7-0__dialog__header">
            <h2
              class="kuc-dialog-1-7-0__dialog__header__title"
              id="${this._GUID}-title"
            >
              ${this.title}
            </h2>
            <button
              class="kuc-dialog-1-7-0__dialog__header__close-button"
              type="button"
              aria-label="close"
              @click="${this._handleClickCloseButton}"
            >
              ${this._getCloseButtonSvgTemplate()}
            </button>
          </div>
          <div class="kuc-dialog-1-7-0__dialog__content">
            <div class="kuc-dialog-1-7-0__dialog__content__icon">
              ${this._getIconTemplate()}
            </div>
            <div class="kuc-dialog-1-7-0__dialog__content__content">
              ${this._content}
            </div>
          </div>
          <div class="kuc-dialog-1-7-0__dialog__footer">${this._footer}</div>
        </div>
        <span
          class="kuc-dialog-1-7-0__last-dummy"
          tabIndex="0"
          @focus="${this._handleFocusLastDummy}"
        ></span>
        <div class="kuc-dialog-1-7-0__mask"></div>
      `}}ni([re({type:String})],e.prototype,"icon",void 0),ni([re({type:String})],e.prototype,"title",void 0),ni([re()],e.prototype,"content",void 0),ni([re()],e.prototype,"footer",void 0),ni([ue(".kuc-dialog-1-7-0__dialog")],e.prototype,"_dialogEl",void 0),ni([ce("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']")],e.prototype,"_focusableElements",void 0),window.customElements.define("kuc-dialog-1-7-0",e),ke('\n  kuc-dialog-1-7-0,\n  kuc-dialog-1-7-0 *,\n  kuc-dialog-1-7-0:lang(en),\n  kuc-dialog-1-7-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-dialog-1-7-0:lang(ja),\n  kuc-dialog-1-7-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-dialog-1-7-0:lang(zh),\n  kuc-dialog-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-dialog-1-7-0:lang(zh-TW),\n  kuc-dialog-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n\n  kuc-dialog-1-7-0 {\n    display: none;\n  }\n\n  kuc-dialog-1-7-0[opened] {\n    display: block;\n  }\n\n  .kuc-dialog-1-7-0__dialog {\n    min-width: 320px;\n    font-size: 20px;\n    background-color: #ffffff;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10000;\n  }\n  \n  .kuc-dialog-1-7-0__dialog:focus-visible {\n    outline: 1px solid #3498db;\n  }\n\n  .kuc-dialog-1-7-0__dialog__header {\n    min-height: 64px;\n    border-bottom: 1px solid #e3e7e8;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .kuc-dialog-1-7-0__dialog__header__title {\n    font-size: 24px;\n    padding: 0 24px;\n    align-self: center;\n    font-weight: 400;\n  }\n\n  .kuc-dialog-1-7-0__dialog__header__close-button {\n    width: 48px;\n    height: 48px;\n    border: none;\n    background-color: #ffffff;\n    margin-right: 12px;\n    margin-top: 11px;\n    cursor: pointer;\n  }\n\n  .kuc-dialog-1-7-0__dialog__header__close-button:focus-visible {\n    outline: 1px solid #3498db;\n  }\n\n  .kuc-dialog-1-7-0__dialog__header__close-button-svg {\n    vertical-align: middle;\n  }\n\n  .kuc-dialog-1-7-0__dialog__content {\n    border-bottom: #e3e7e8 solid 1px;\n    background-color: #f7f9fa;\n    padding: 24px;\n    display: flex;\n  }\n\n  .kuc-dialog-1-7-0__dialog__content__icon-info,\n  .kuc-dialog-1-7-0__dialog__content__icon-success,\n  .kuc-dialog-1-7-0__dialog__content__icon-error,\n  .kuc-dialog-1-7-0__dialog__content__icon-warning,\n  .kuc-dialog-1-7-0__dialog__content__icon-question {\n    margin-right: 16px;\n    width: 24px;\n    height: 24px;\n  }\n\n  .kuc-dialog-1-7-0__dialog__footer {\n    padding: 24px;\n  }\n\n  .kuc-dialog-1-7-0__mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #000000;\n    opacity: 0.6;\n    z-index: 9999;\n  }\n\n  .kuc--has-dialog {\n    overflow: hidden;\n  }\n\n  .kuc--has-dialog .kuc-dialog-1-7-0__dialog {\n    overflow-x: hidden;\n    overflow-y: auto;\n    max-height: 80vh;\n  }\n'),oi=e}})();var ai=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class si extends ve{constructor(){super(),this.year=2021,this.postfix="",this._listBoxVisible=!1,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("scroll",this._handleScrollDocument)}),1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(e){this._listBoxItems=this._getYearOptions().map((e=>({value:`${e}`,label:`${e}${this.postfix}`}))),super.update(e)}render(){return N`
      <button
        class="kuc-base-datetime-header-year-1-7-0__toggle"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?"-1":"0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year-1-7-0__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year-1-7-0__toggle__icon"
          >${rt()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,e.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),super.update(e)}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleScrollDocument(){const e=ut(this);e.inputToBottom>=e.inputToTop?dt(this,"bottom"):dt(this,"top")}_getListBoxTemplate(){return this._listBoxVisible?N`
          <kuc-base-datetime-listbox-1-7-0
            .items="${this._listBoxItems||[]}"
            .value="${this.year.toString()}"
            class="kuc-base-datetime-header-year-1-7-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-7-0>
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleClickDropdownYearToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),ye(this,"kuc:year-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(e){"Tab"!==e.key&&(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(e)>-1&&this._openListBox()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.year=Number(e.detail.value);const t={value:`${this.year}`};ye(this,"kuc:year-dropdown-change",t)}_openListBox(){this._listBoxVisible=!0}_getYearOptions(){const e=[];Number.isInteger(this.year)||(this.year=2021);let t=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(;t<=i;t++)e.push(t);return e}}ai([re({type:Number})],si.prototype,"year",void 0),ai([re({type:String})],si.prototype,"postfix",void 0),ai([le()],si.prototype,"_listBoxVisible",void 0),ai([ue(".kuc-base-datetime-header-year-1-7-0__toggle")],si.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-year-1-7-0")||(ke("\n.kuc-base-datetime-header-year-1-7-0__toggle {\n  position: relative;\n  box-sizing: border-box;\n  height: 32px;\n  padding: 0 24px 0 8px;\n  line-height: 30px;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.kuc-base-datetime-header-year-1-7-0__toggle__icon {\n  position: absolute;\n  flex: none;\n  width: 24px;\n  height: 32px;\n}\n.kuc-base-datetime-header-year-1-7-0__toggle__label {\n  font-size: 13px;\n  color: #333333;\n}\n.kuc-base-datetime-header-year-1-7-0__toggle:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n"),window.customElements.define("kuc-base-datetime-header-year-1-7-0",si));var ri=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class li extends ve{constructor(){super(),this.language="auto",this.month=1,this._listBoxVisible=!1,this._locale=at("en"),this._monthLabel="",this._maxHeight=1e3,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("scroll",this._handleScrollDocument)}),1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(e){e.has("language")&&(this._locale=at(this.language),this._listBoxItems=this._getListBoxItems()),e.has("month")&&(this._monthLabel=this._getMonthLabel()),super.update(e)}render(){return N`
      <button
        class="kuc-base-datetime-header-month-1-7-0__toggle"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?"-1":"0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month-1-7-0__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month-1-7-0__toggle__icon"
          >${rt()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,e.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),super.update(e)}_handleScrollDocument(){const e=ut(this);e.inputToBottom>=e.inputToTop?dt(this,"bottom"):dt(this,"top")}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_getListBoxTemplate(){return this._listBoxVisible?N`
          <kuc-base-datetime-listbox-1-7-0
            .items="${this._listBoxItems||[]}"
            .value="${this.month.toString()}"
            .maxHeight="${this._maxHeight}"
            class="kuc-base-datetime-header-month-1-7-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-7-0>
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleClickDropdownMonthToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),ye(this,"kuc:month-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleKeyDownMonthToggle(e){this._handleTabKey(e.key)||(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(e)>-1&&this._openListBox()}_handleTabKey(e){return"Tab"===e}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.month=Number(e.detail.value);const t={value:`${this.month}`};ye(this,"kuc:month-dropdown-change",t)}_openListBox(){this._listBoxVisible=!0}_getListBoxItems(){return this._locale.MONTH_SELECT.map(((e,t)=>({value:`${t+1}`,label:`${e}`})))}_getMonthLabel(){const e=this._locale.MONTH_SELECT.filter(((e,t)=>this.month===t+1));return e.length>0?e[0]:"JANUARY"}}ri([re({type:String,attribute:"lang",reflect:!0})],li.prototype,"language",void 0),ri([re({type:Number})],li.prototype,"month",void 0),ri([le()],li.prototype,"_listBoxVisible",void 0),ri([ue(".kuc-base-datetime-header-month-1-7-0__toggle")],li.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-month-1-7-0")||(ke("\n.kuc-base-datetime-header-month-1-7-0__toggle {\n  position: relative;\n  box-sizing: border-box;\n  height: 32px;\n  padding: 0 24px 0 8px;\n  line-height: 30px;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.kuc-base-datetime-header-month-1-7-0__toggle__icon {\n  position: absolute;\n  flex: none;\n  width: 24px;\n  height: 32px;\n}\n.kuc-base-datetime-header-month-1-7-0__toggle__label {\n  font-size: 13px;\n  color: #333333;\n}\n.kuc-base-datetime-header-month-1-7-0__toggle:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n"),window.customElements.define("kuc-base-datetime-header-month-1-7-0",li));var di=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class ui extends ve{constructor(){super(...arguments),this.language="en",this.month=1,this.year=2021,this._locale=at("en")}update(e){e.has("language")&&(this._locale=at(this.language)),super.update(e)}render(){return N`
      <div class="kuc-base-datetime-calendar-header-1-7-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-7-0__group__button kuc-base-datetime-calendar-header-1-7-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${P`
    <svg
      class="kuc-base-datetime-calendar-header__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.06077 7L8.53044 1.53033L7.46978 0.469666L0.939453 7L7.46978 13.5303L8.53044 12.4697L3.06077 7Z"
        fill="#888888"
      />
    </svg>`}
        </button>
        <div class="kuc-base-datetime-calendar-header-1-7-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-7-0__group__button kuc-base-datetime-calendar-header-1-7-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${P`
    <svg
      class="kuc-base-datetime-calendar-header__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.93923 7L0.469557 1.53033L1.53022 0.469666L8.06055 7L1.53022 13.5303L0.469557 12.4697L5.93923 7Z"
        fill="#888888"
      />
    </svg>`}
        </button>
      </div>
    `}_getYearTemplate(){return N`
      <kuc-base-datetime-header-year-1-7-0
        class="kuc-base-datetime-calendar-header-1-7-0__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year-1-7-0>
    `}_getMonthTemplate(){return N`
      <kuc-base-datetime-header-month-1-7-0
        class="kuc-base-datetime-calendar-header-1-7-0__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month-1-7-0>
    `}_getYearMonthTemplate(){return"zh"===this.language||"ja"===this.language||"zh-TW"===this.language?N` ${this._getYearTemplate()}${this._getMonthTemplate()} `:N` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleMonthDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.month=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.year=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),1===this.month?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),ye(this,"kuc:calendar-header-previous-shifttab"))}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),12===this.month?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const e=this.year,t=this.month;ye(this,"kuc:calendar-header-change",{value:`${e}-${t}`})}}di([re({type:String,attribute:"lang",reflect:!0})],ui.prototype,"language",void 0),di([re({type:Number,hasChanged(e){return(t=e)>0&&t<13;var t}})],ui.prototype,"month",void 0),di([re({type:Number,hasChanged(e){return(t=e)>=0&&t<1e4;var t}})],ui.prototype,"year",void 0),di([ue(".kuc-base-datetime-calendar-header-1-7-0__month")],ui.prototype,"_baseDateTimeHeaderMonthEl",void 0),di([ue(".kuc-base-datetime-calendar-header-1-7-0__year")],ui.prototype,"_baseDateTimeHeaderYearEl",void 0),di([ue(".kuc-base-datetime-header-month-1-7-0__listbox")],ui.prototype,"_listBoxMonthEl",void 0),di([ue(".kuc-base-datetime-header-year-1-7-0__listbox")],ui.prototype,"_listBoxYearEl",void 0),window.customElements.get("kuc-base-datetime-calendar-header-1-7-0")||(ke('\nkuc-base-datetime-calendar-header-1-7-0,\nkuc-base-datetime-calendar-header-1-7-0 *,\nkuc-base-datetime-calendar-header-1-7-0:lang(en),\nkuc-base-datetime-calendar-header-1-7-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-calendar-header-1-7-0:lang(ja),\nkuc-base-datetime-calendar-header-1-7-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n  font-weight: 700;\n}\nkuc-base-datetime-calendar-header-1-7-0:lang(zh),\nkuc-base-datetime-calendar-header-1-7-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-calendar-header-1-7-0:lang(zh-TW),\nkuc-base-datetime-calendar-header-1-7-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\nkuc-base-datetime-calendar-header-1-7-0:lang(ja) kuc-base-datetime-listbox-1-7-0 * {\n  font-weight: 400;\n}\n.kuc-base-datetime-calendar-header-1-7-0__group {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e3e7e8;\n  padding: 0;\n  white-space: nowrap;\n  width: 266px;\n  height: 44px;\n}\n.kuc-base-datetime-calendar-header-1-7-0__group__button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  width: 38px;\n  height: 32px;\n  margin: 0;\n  text-align: center;\n}\n.kuc-base-datetime-calendar-header-1-7-0__group__button:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n.kuc-base-datetime-calendar-header-1-7-0__group__button-icon {\n  vertical-align: middle;\n}\n.kuc-base-datetime-calendar-header-1-7-0__group__center {\n  width: 190px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n.kuc-base-datetime-calendar-header-1-7-0__month {\n  margin: 0 4px 0 4px;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-header-1-7-0",ui));var ci=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class hi extends ve{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=at("en"),this._handleClickDocument=this._handleClickDocument.bind(this),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument),document.addEventListener("keydown",this._handleKeyDownDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),document.removeEventListener("keydown",this._handleKeyDownDocument),super.disconnectedCallback()}update(e){if(e.forEach(((e,t)=>{"language"===t&&(this._locale=at(this.language))})),e.has("month")&&(this._month=this.month),e.has("year")&&(this._year=this.year),e.has("value")){const{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return N`
      <table class="kuc-base-datetime-calendar-body-1-7-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(e){e.has("value")&&this._focusDateEl(),super.update(e)}_handleClickDocument(){ye(this,"kuc:calendar-body-blur",{})}_handleKeyDownDocument(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),ye(this,"kuc:calendar-body-blur",{}))}_handleClickDate(e){e.preventDefault(),e.stopPropagation();const t=e.target;t.setAttribute("aria-selected","true");const i=t.getAttribute("data-date")||"";this._dispatchClickEvent(i)}_handleKeyDownDate(e){let t=!1;switch(e.key){case"Up":case"ArrowUp":t=!0,this._moveToDate(-7);break;case"Down":case"ArrowDown":t=!0,this._moveToDate(7);break;case"Left":case"ArrowLeft":t=!0,this._moveToDate(-1);break;case"Right":case"ArrowRight":t=!0,this._moveToDate(1);break;case" ":case"Enter":{t=!0;const e=this._getSelectedValue();this._dispatchClickEvent(e);break}}t&&(e.stopPropagation(),e.preventDefault())}_dispatchClickEvent(e){const t={oldValue:this.value,value:e};ye(this,"kuc:calendar-body-click-date",t),this.value=e}_isToday(e){const t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_moveToDate(e){let t=this.value;const i=this._getSelectedValue(),{day:n}=this._separateDateValue(i);t=`${this._year}-${nt(this._month)}-${n}`;const o=new Date(t||this._getValueItemFocused());if(isNaN(o.getTime()))return;o.setDate(o.getDate()+e);const a=this._getDateString(o),s=t;this.value=a,ye(this,"kuc:calendar-body-change-date",{oldValue:s,value:a})}_separateDateValue(e=this.value){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.dataset.date||"":this._selectedItem&&this._selectedItem.getAttribute("data-date")||""}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute("data-date")||""}_getDateClass(e,t){return t?this._isToday(e)?" kuc-base-datetime-calendar-body-1-7-0__table__date--selected--today":"":this._isToday(e)?" kuc-base-datetime-calendar-body-1-7-0__table__date--selected--today":" kuc-base-datetime-calendar-body-1-7-0__table__date--other-month"}_getDateString(e=new Date){return`${e.getFullYear()}-${nt(e.getMonth()+1)}-${nt(e.getDate())}`}_isSameDayOfMoment(e){const t=parseInt(e[1],10),i=parseInt(e[2],10),n=parseInt(e[0],10);let o=(new Date).getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(o=new Date(this.value).getDate()),o===i&&t===this._month)return!0;const a=new Date(n,this._month,0).getDate();return o>a&&a===i&&t===this._month}_getHeaderItemsTemplate(){return N`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map((e=>N`
              <th
                class="kuc-base-datetime-calendar-body-1-7-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `))}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){const e=je(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return N`
      <tbody>
        ${e.map((e=>N`
            <tr>
              ${e.map((e=>{const i=e.text.split("-"),n=this._isSameDayOfMoment(i),o=parseInt(i[1],10)===this._month,a=(this.value===e.attr||n)&&o;return N`
                  <td
                    role="gridcell"
                    class="kuc-base-datetime-calendar-body-1-7-0__table__date${a?"--selected":""}${this._getDateClass(i,o)}"
                    aria-selected="${this.value===e.attr}"
                    tabindex="${a?"0":"-1"}"
                    aria-current="${!!this._isToday(i)&&"date"}"
                    aria-label="${i[2]} ${t}"
                    data-date="${e.attr}"
                    @click="${this._handleClickDate}"
                    @keydown="${this._handleKeyDownDate}"
                  >
                    ${i[2]||""}
                  </td>
                `}))}
            </tr>
          `))}
      </tbody>
    `}_focusDateEl(){this._focusedItem&&this._focusedItem.focus({preventScroll:!0})}}ci([re({type:Number})],hi.prototype,"month",void 0),ci([re({type:Number})],hi.prototype,"year",void 0),ci([re({type:String,attribute:"lang",reflect:!0})],hi.prototype,"language",void 0),ci([re({type:String,reflect:!0})],hi.prototype,"value",void 0),ci([le()],hi.prototype,"_month",void 0),ci([le()],hi.prototype,"_year",void 0),ci([ue('.kuc-base-datetime-calendar-body-1-7-0__table__date--selected[aria-selected="true"]')],hi.prototype,"_selectedItem",void 0),ci([ue(".kuc-base-datetime-calendar-body-1-7-0__table__date--selected")],hi.prototype,"_highlightItem",void 0),ci([ue('.kuc-base-datetime-calendar-body-1-7-0__table__date--selected[tabindex="0"]')],hi.prototype,"_focusedItem",void 0),window.customElements.get("kuc-base-datetime-calendar-body-1-7-0")||(ke('\nkuc-base-datetime-calendar-body-1-7-0,\nkuc-base-datetime-calendar-body-1-7-0 *,\nkuc-base-datetime-calendar-body-1-7-0:lang(en),\nkuc-base-datetime-calendar-body-1-7-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-calendar-body-1-7-0:lang(ja),\nkuc-base-datetime-calendar-body-1-7-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-calendar-body-1-7-0:lang(zh),\nkuc-base-datetime-calendar-body-1-7-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\n\nkuc-base-datetime-calendar-body-1-7-0:lang(zh-TW),\nkuc-base-datetime-calendar-body-1-7-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table,\n.kuc-base-datetime-calendar-body-1-7-0__table tr {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table__date,\n.kuc-base-datetime-calendar-body-1-7-0__table__date--selected {\n  border-spacing: 1px;\n  padding: 0px;\n  border: 1px solid #ffffff;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table__header {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 400;\n  color: #333333;\n}\n:lang(ja) th.kuc-base-datetime-calendar-body-1-7-0__table__header {\n  font-weight: 700;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table__date--selected,\n.kuc-base-datetime-calendar-body-1-7-0__table__date,\n.kuc-base-datetime-calendar-body-1-7-0__table__header {\n  box-sizing: border-box;\n  padding: 8px 0;\n  width: 36px;\n  height: 31px;\n  border: 1px solid #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 400;\n  color: #333333;\n  cursor: pointer;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table__header:nth-child(1),\n.kuc-base-datetime-calendar-body-1-7-0__table__header:nth-child(7) {\n  color: #d4d7d7;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table__date:focus,\n.kuc-base-datetime-calendar-body-1-7-0__table__date--selected:focus {\n  outline: none;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table__date\n  .kuc-base-datetime-calendar-body-1-7-0__table__date__button:hover {\n  color: #000000;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table__date--selected {\n  border-color: #3498db;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table__date--selected--today,\n.kuc-base-datetime-calendar-body-1-7-0__table__date--today {\n  color: #ffffff;\n  background: #888888;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table__date--today:hover {\n  color: #333333;\n}\n.kuc-base-datetime-calendar-body-1-7-0__table__date--other-month,\n.kuc-base-datetime-calendar-body-1-7-0__table__date--other-month:hover {\n  color: #d4d7d7;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-body-1-7-0",hi));var pi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class _i extends ve{constructor(){super(...arguments),this.language="en",this._locale=at("en")}update(e){e.has("language")&&(this._locale=at(this.language)),super.update(e)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),ye(this,"kuc:calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),ye(this,"kuc:calendar-footer-click-today")}_handleKeyDownCalendarFooterButtonNone(e){"Tab"===e.key&&(e.shiftKey||(e.preventDefault(),ye(this,"kuc:calendar-footer-tab-none")))}render(){return N`
      <div class="kuc-base-datetime-calendar-footer-1-7-0__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-7-0__group__button kuc-base-datetime-calendar-footer-1-7-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <span class="kuc-base-datetime-calendar-footer-1-7-0__group__center"></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-7-0__group__button kuc-base-datetime-calendar-footer-1-7-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
          @keydown="${this._handleKeyDownCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
      </div>
    `}}pi([re({type:String,attribute:"lang",reflect:!0})],_i.prototype,"language",void 0),pi([le()],_i.prototype,"_locale",void 0),window.customElements.get("kuc-base-datetime-calendar-footer-1-7-0")||(ke('\nkuc-base-datetime-calendar-footer-1-7-0,\nkuc-base-datetime-calendar-footer-1-7-0 *,\nkuc-base-datetime-calendar-footer-1-7-0:lang(en),\nkuc-base-datetime-calendar-footer-1-7-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-7-0:lang(ja),\nkuc-base-datetime-calendar-footer-1-7-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-7-0:lang(zh),\nkuc-base-datetime-calendar-footer-1-7-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-7-0:lang(zh-TW),\nkuc-base-datetime-calendar-footer-1-7-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\n.kuc-base-datetime-calendar-footer-1-7-0__group {\n  display: flex;\n  align-items: flex-end;\n  box-sizing: border-box;\n  padding: 0;\n  height: 27px;\n  white-space: nowrap;\n  width: 272px;\n}\n.kuc-base-datetime-calendar-footer-1-7-0__group__button {\n  background: transparent;\n  border: 1px solid transparent;\n  color: #3498db;\n  cursor: pointer;\n  font-size: 13px;\n  outline: none;\n}\n.kuc-base-datetime-calendar-footer-1-7-0__group__button:hover {\n  color: #217dbb;\n}\n.kuc-base-datetime-calendar-footer-1-7-0__group__button:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n.kuc-base-datetime-calendar-footer-1-7-0__group__center {\n  width: 100%;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-footer-1-7-0",_i));var bi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class mi extends ve{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=2021}update(e){e.has("value")&&this._updateValue(),super.update(e)}render(){return N`
      <div
        class="kuc-base-datetime-calendar-1-7-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
        @keydown="${this._handleKeyDownCalendarGroup}"
      >
        <kuc-base-datetime-calendar-header-1-7-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header-1-7-0>
        <kuc-base-datetime-calendar-body-1-7-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
        ></kuc-base-datetime-calendar-body-1-7-0>
        <kuc-base-datetime-calendar-footer-1-7-0
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer-1-7-0>
      </div>
    `}async updated(e){await this.updateComplete,this._calculateBodyCalendarPosition(),super.updated(e)}_handleKeyDownCalendarGroup(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),ye(this,"kuc:calendar-escape",{}))}_handleClickCalendarGroup(e){e.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_calculateBodyCalendarPosition(){const{inputToBottom:e,inputToTop:t,inputToRight:i,inputToLeft:n}=ut(this);e>=this._baseCalendarGroupEl.getBoundingClientRect().height||t<0||e>t?this._calculateCalendarPosition(i,n,"bottom"):this._calculateCalendarPosition(i,n,"top")}_calculateCalendarPosition(e,t,i){if(!this.parentElement)return;if(e<336&&e<t){const e=this.parentElement.getBoundingClientRect().width,t="bottom"===i?40:"auto",n="bottom"===i?"auto":40,o=e>100?e-100:0;return void this._setCalendarPosition({top:t,bottom:n,right:o})}const n="bottom"===i?40:"auto",o="bottom"===i?"auto":40;this._setCalendarPosition({bottom:o,top:n,left:0})}_setCalendarPosition({top:e="auto",left:t="auto",right:i="auto",bottom:n="auto"}){const o=this._baseCalendarGroupEl.parentElement;this.parentElement&&o&&(this.parentElement.style.position="relative",o.style.bottom="auto"===n?n:n+"px",o.style.top="auto"===e?e:e+"px",o.style.left="auto"===t?t:t+"px",o.style.right="auto"===i?i:i+"px")}_handleCalendarHeaderChange(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_handleCalendarBodyChangeDate(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_updateValue(){""===this.value&&(this.value=tt().slice(0,7)+"-01");const{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){const t=e.split("-");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}}bi([re({type:String,attribute:"lang",reflect:!0})],mi.prototype,"language",void 0),bi([re({type:String,reflect:!0})],mi.prototype,"value",void 0),bi([ue(".kuc-base-datetime-calendar-1-7-0__group")],mi.prototype,"_baseCalendarGroupEl",void 0),bi([ue(".kuc-base-datetime-calendar-header-1-7-0__month")],mi.prototype,"_monthEl",void 0),bi([ue(".kuc-base-datetime-calendar-header-1-7-0__year")],mi.prototype,"_yearEl",void 0),bi([ue(".kuc-base-datetime-header-month-1-7-0__listbox")],mi.prototype,"_listBoxMonthEl",void 0),bi([ue(".kuc-base-datetime-header-year-1-7-0__listbox")],mi.prototype,"_listBoxYearEl",void 0),bi([le()],mi.prototype,"_month",void 0),bi([le()],mi.prototype,"_year",void 0),window.customElements.get("kuc-base-datetime-calendar-1-7-0")||(ke("\n.kuc-base-datetime-calendar-1-7-0__group {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 336px;\n  padding: 32px 32px 24px;\n  background: #ffffff;\n  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);\n  text-align: center;\n  font-size: 13px;\n}\n"),window.customElements.define("kuc-base-datetime-calendar-1-7-0",mi));var gi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class fi extends ve{constructor(){super(...arguments),this.inputAriaLabel="",this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._locale=at("en"),this._calendarValue="",this._inputValue="",this._valueForReset=""}update(e){e.has("inputId")&&(this._GUID=this.inputId),e.has("language")&&(this._locale=at(this.language),this._updateValueProp()),e.has("value")&&this._updateValueProp(),super.update(e)}render(){return N`
      <input
        class="kuc-base-date-1-7-0__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${this._inputValue}"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        aria-required="${this.required}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @click="${this._handleClickInput}"
        @change="${this._handleChangeInput}"
        @keydown="${this._handleKeyDownInput}"
        @input="${this._handleInputValue}"
      />
      <button
        aria-haspopup="dialog"
        aria-expanded="${this._dateTimeCalendarVisible}"
        class="kuc-base-date-1-7-0__assistive-text"
        @click="${this._handleClickButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show date picker
      </button>
      ${this._dateTimeCalendarVisible?N`
            <kuc-base-datetime-calendar-1-7-0
              class="kuc-base-date-1-7-0__calendar"
              .language="${this.language}"
              .value="${this._calendarValue}"
              ?hidden="${!this._dateTimeCalendarVisible}"
              @kuc:calendar-header-previous-shifttab="${this._handleShiftTabCalendarPrevMonth}"
              @kuc:calendar-body-change-date="${this._handleClickCalendarChangeDate}"
              @kuc:calendar-body-click-date="${this._handleClickCalendarClickDate}"
              @kuc:calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
              @kuc:calendar-footer-tab-none="${this._handleTabCalendarFooterButtonNone}"
              @kuc:calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
              @kuc:calendar-escape="${this._handleCalendarEscape}"
              @kuc:calendar-body-blur="${this._handleCalendarBlurBody}"
            >
            </kuc-base-datetime-calendar-1-7-0>
          `:""}
    `}updated(e){e.has("inputAriaLabel")&&this.inputAriaLabel&&this._dateInput.setAttribute("aria-label",this.inputAriaLabel),super.updated(e)}_handleInputValue(e){const t=e.target.value;this._inputValue=t||""}_handleClickInput(){if(!this._dateTimeCalendarVisible)return this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),void this._openCalendar();this._closeCalendar()}_updateValueProp(){if(this.value){const e=this._setCalendarValueWhenInvalidValue();return this._inputValue=Xe(this.language,this.value),void(this._calendarValue=e||this.value)}const e=tt();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)}_setCalendarValueWhenInvalidValue(){if(this.value&&!kt(this.value)){const e=tt();return this._calendarValue||e.slice(0,7)}return""}_getNewCalendarValue(e){if(it(this.language,e))return Qe(this.language,e);if(!this._calendarValue)return"";let t=this._calendarValue.slice(0,7);return""===e&&(t=this._calendarValue.slice(0,7)+"-01"),t}_handleChangeInput(e){e.stopPropagation();const t=(null==e?void 0:e.target).value;if(this._calendarValue=this._getNewCalendarValue(t),this._calendarValue.length>7)return void this._dispathDateChangeCustomEvent(Qe(this.language,t));const i={value:void 0,oldValue:this.value,error:this._locale.INVALID_FORMAT};this._inputValue=t,ye(this,"kuc:base-date-change",i)}_handleKeyDownInput(e){"Escape"===e.key&&this._closeCalendar()}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleShiftTabCalendarPrevMonth(){this._footerNoneBtn.focus()}_handleClickCalendarChangeDate(e){e.detail.oldValue=this.value,this.value=e.detail.value,ye(this,"kuc:base-date-change",e.detail)}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,this._dateInput.focus(),e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,ye(this,"kuc:base-date-change",e.detail))}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._dateInput.focus(),this._inputValue="";const e=tt();let t=this._setCalendarValueWhenInvalidValue();t||(t=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)+"-01"),this._calendarValue=t,this._dispathDateChangeCustomEvent(void 0)}_handleTabCalendarFooterButtonNone(){this._previousMonth.focus()}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const e=tt();this._dateInput.focus(),this._dispathDateChangeCustomEvent(e)}_handleCalendarEscape(){const e=this._valueForReset;if(this._closeCalendar(),this._dateInput.focus(),e===this.value)return;const t={oldValue:this.value,value:e};this.value=e,ye(this,"kuc:base-date-change",t)}_handleCalendarBlurBody(e){e.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(e){const t={value:e,oldValue:this.value};this.value=void 0===e?"":e,ye(this,"kuc:base-date-change",t)}_handleClickButton(){if(!this._dateTimeCalendarVisible)return this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),void this._openCalendar();this._closeCalendar()}_handleBlurButton(){this._dateInput.classList.remove("kuc-base-date-1-7-0__input--focus")}_handleFocusButton(){this._dateInput.classList.add("kuc-base-date-1-7-0__input--focus")}}gi([re({type:String})],fi.prototype,"inputAriaLabel",void 0),gi([re({type:String})],fi.prototype,"inputId",void 0),gi([re({type:String,attribute:"lang",reflect:!0})],fi.prototype,"language",void 0),gi([re({type:String,reflect:!0})],fi.prototype,"value",void 0),gi([re({type:Boolean})],fi.prototype,"disabled",void 0),gi([re({type:Boolean})],fi.prototype,"inputAriaInvalid",void 0),gi([re({type:Boolean})],fi.prototype,"required",void 0),gi([ue(".kuc-base-date-1-7-0__input")],fi.prototype,"_dateInput",void 0),gi([ue(".kuc-base-datetime-calendar-header-1-7-0__group__button--previous-month")],fi.prototype,"_previousMonth",void 0),gi([ue(".kuc-base-datetime-calendar-footer-1-7-0__group__button--none")],fi.prototype,"_footerNoneBtn",void 0),gi([le()],fi.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-base-date-1-7-0")||(ke("\ninput.kuc-base-date-1-7-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  color: #333333;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\ninput.kuc-base-date-1-7-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\ninput.kuc-base-date-1-7-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-datetime-picker-1-7-0__group__inputs--date\n  input.kuc-base-date-1-7-0__input--focus {\n  border-color: #3498db;\n}\ninput.kuc-base-date-1-7-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.kuc-base-date-1-7-0__calendar {\n  position: absolute;\n  z-index: 2000;\n  background-color: #ffffff;\n  text-align: center;\n  box-sizing: border-box;\n}\n.kuc-base-date-1-7-0__assistive-text {\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n  position: absolute !important;\n  padding: 0px !important;\n  border: 0px !important;\n  height: 1px !important;\n  width: 1px !important;\n}\n"),window.customElements.define("kuc-base-date-1-7-0",fi));var vi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let yi;(()=>{if(yi=window.customElements.get("kuc-date-picker-1-7-0"),!yi){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._errorFormat="",this._errorText="",this._inputValue="",this._invalidValue="",this._valueConverted="",this._GUID=xe();const t=mt(e);Object.assign(this,t)}shouldUpdate(e){return!(void 0!==this.value&&""!==this.value&&("string"==typeof this.value&&gt(this.value)?(this._valueConverted=_t(this.value),this._valueConverted&&!kt(this._valueConverted)&&(Et(this,Pe),1)):(Et(this,Pe),1)))}willUpdate(e){e.has("value")&&(void 0===this.value?this._inputValue=this._invalidValue:(this.value=""===this.value?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat="")),this._updateErrorText()}render(){return N`
        <div class="kuc-date-picker-1-7-0__group">
          <label
            class="kuc-date-picker-1-7-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-7-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-7-0>
          </label>
          <kuc-base-date-1-7-0
            .inputId="${this._GUID}"
            .inputAriaInvalid="${""!==this.error}"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:base-date-change="${this._handleDateChange}"
          >
          </kuc-base-date-1-7-0>
          <kuc-base-error-1-7-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-7-0>
        </div>
      `}updated(){this._invalidValue=""}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const t={oldValue:this.value,value:""};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error="",t.value=void 0):(this._errorFormat="",this.value=void 0===e.detail.value?"":e.detail.value,t.value=this.value),this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){ye(this,"change",e)}}vi([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),vi([re({type:String})],e.prototype,"error",void 0),vi([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),vi([re({type:String})],e.prototype,"label",void 0),vi([re({type:Boolean})],e.prototype,"disabled",void 0),vi([re({type:Boolean})],e.prototype,"requiredIcon",void 0),vi([re({type:String,attribute:"lang",reflect:!0,converter:ht})],e.prototype,"language",void 0),vi([re({type:String})],e.prototype,"value",void 0),vi([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),vi([ue(".kuc-base-date-1-7-0__input")],e.prototype,"_dateInput",void 0),window.customElements.define("kuc-date-picker-1-7-0",e),ke('\nkuc-date-picker-1-7-0,\nkuc-date-picker-1-7-0 *,\nkuc-date-picker-1-7-0:lang(en),\nkuc-date-picker-1-7-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-date-picker-1-7-0:lang(ja),\nkuc-date-picker-1-7-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-date-picker-1-7-0:lang(zh),\nkuc-date-picker-1-7-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-date-picker-1-7-0:lang(zh-TW),\nkuc-date-picker-1-7-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-date-picker-1-7-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  max-width: 100px;\n  width: 100px;\n  line-height: 1.5;\n}\nkuc-date-picker-1-7-0[hidden] {\n  display: none;\n}\n.kuc-date-picker-1-7-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-date-picker-1-7-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-date-picker-1-7-0__group__label[hidden] {\n  display: none;\n}\n.kuc-date-picker-1-7-0__group input.kuc-base-date-1-7-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\n.kuc-date-picker-1-7-0__group input.kuc-base-date-1-7-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-date-picker-1-7-0__group input.kuc-base-date-1-7-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-date-picker-1-7-0__group input.kuc-base-date-1-7-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n'),yi=e}})();var ki=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class xi extends ve{constructor(){super(),this.value="",this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}render(){return N`
      <ul
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox-1-7-0__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map((e=>this._getListBoxItemTemplate(e)))}
      </ul>
    `}updated(e){e.has("value")&&this._highlightSelectedItem(),this._setListBoxPosition(),this._scrollToView(),super.updated(e)}_handleClickDocument(){ye(this,"kuc:listbox-blur",{})}_handleClickListBox(e){e.stopPropagation()}_handleKeyDownListBox(e){switch(e.preventDefault(),e.stopPropagation(),e.key){case"Up":case"ArrowUp":this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Down":case"ArrowDown":this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Home":this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case"End":this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case"Tab":ye(this,"kuc:listbox-click",{});break;case"Escape":ye(this,"kuc:listbox-escape",{});break;case" ":case"Enter":{const e=this._highlightItemEl.getAttribute("value");ye(this,"kuc:listbox-click",{value:e||""});break}}}_handleMouseDownListBox(e){if(e.preventDefault(),e.stopPropagation(),e.target===e.currentTarget)return;const t=e.target.getAttribute("value")||"";ye(this,"kuc:listbox-click",{value:t})}_handleMouseOverItem(e){if(this._actionKeyboard)return void(this._actionKeyboard=!1);const t=e.target;this._setHighlightItemEl(t),this.doFocus&&this._focusHighlightItemEl(!1)}_setListBoxPosition(){const e=this._listBoxEl.getBoundingClientRect().height;if(!this._listBoxEl.parentElement||!this.parentElement)return;const t=window.innerHeight-this.parentElement.getBoundingClientRect().bottom,i=this.parentElement.offsetHeight;this._listBoxEl.style.bottom="auto",this._listBoxEl.style.left="auto",t>=e||(this.parentElement.style.position="relative",this._listBoxEl.style.bottom=i+"px",this._listBoxEl.style.left="0px")}_setHighlightItemEl(e){this._removeHighlight(),e.classList.add("kuc-base-datetime-listbox-1-7-0__listbox--highlight"),e.setAttribute("tabindex","0")}_highlightSelectedItem(){if(!this.doFocus)return;const e=Array.from(this._itemsEl).filter((e=>"true"===e.getAttribute("aria-selected")))[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(null===this._highlightItemEl||null===this._iconChecked)return void this._highlightFirstItem();const e=this._getNextItemEl();if(e)return this._setHighlightItemEl(e),this._firstHighlight=!1,void(this._itemSelectedEl=e);this._highlightFirstItem()}_getNextItemEl(){const e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(t=this._itemSelectedEl.nextElementSibling,t):this._firstItemEl:t}_highlightPrevItemEl(){if(null===this._highlightItemEl||null===this._iconChecked)return void this._highlightLastItem();const e=this._getPreviousItemEl();if(e)return this._setHighlightItemEl(e),this._firstHighlight=!1,void(this._itemSelectedEl=e);this._highlightLastItem()}_getPreviousItemEl(){const e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(t=this._itemSelectedEl.previousElementSibling,t):this._lastItemEl:t}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute("tabindex","-1"),this._highlightItemEl.classList.remove("kuc-base-datetime-listbox-1-7-0__listbox--highlight"))}_focusHighlightItemEl(e){const t=this._highlightItemEl;t&&(t.focus({preventScroll:!0}),!1!==e&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){const e=this._highlightItemEl.getAttribute("value")||"";ye(this,"kuc:listbox-focus-change",{value:e})}_scrollToView(){const e=this._highlightItemEl||this._getHighlightItemByValue();if(!e||!this._listBoxEl)return;const t=e.offsetHeight,i=this._listBoxEl.clientHeight/t/2;let n=e.offsetTop-i*t;n<0&&(n=0),this._listBoxEl.scrollTop=n}_getHighlightItemByValue(){const e=Array.from(this._listBoxEl.children),t=new Date(Date.parse(`2021/01/01 ${this.value}`));let i=e.find((e=>new Date(Date.parse(`2021/01/01 ${e.title}`))>=t));return i||(i=e[e.length-1]),this.doFocus&&i?(this._setHighlightItemEl(i),this._focusHighlightItemEl(),i):i}_getListBoxItemTemplate(e){const t=this.value===e.value&&this.doFocus;return N`
      <li
        class="kuc-base-datetime-listbox-1-7-0__listbox__item"
        role="option"
        tabindex="${t?"0":"-1"}"
        aria-selected="${t}"
        title="${e.label||""}"
        value="${void 0!==e.value?e.value:""}"
        @mouseover="${this._handleMouseOverItem}"
        @keydown="${this._handleKeyDownListBox}"
      >
        ${t?this._getCheckedIconSvgTemplate():""}
        ${void 0===e.label?e.value:e.label}
      </li>
    `}_getCheckedIconSvgTemplate(){return P`<svg
          class="kuc-base-datetime-listbox-1-7-0__listbox__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="#3498db"
          />
        </svg>`}}ki([re({type:String})],xi.prototype,"value",void 0),ki([re({type:Array})],xi.prototype,"items",void 0),ki([re({type:Number})],xi.prototype,"maxHeight",void 0),ki([re({type:Boolean})],xi.prototype,"doFocus",void 0),ki([ue(".kuc-base-datetime-listbox-1-7-0__listbox")],xi.prototype,"_listBoxEl",void 0),ki([ce(".kuc-base-datetime-listbox-1-7-0__listbox__item")],xi.prototype,"_itemsEl",void 0),ki([ue(".kuc-base-datetime-listbox-1-7-0__listbox__item")],xi.prototype,"_firstItemEl",void 0),ki([ue(".kuc-base-datetime-listbox-1-7-0__listbox__item:last-child")],xi.prototype,"_lastItemEl",void 0),ki([ue(".kuc-base-datetime-listbox-1-7-0__listbox--highlight")],xi.prototype,"_highlightItemEl",void 0),ki([ue(".kuc-base-datetime-listbox-1-7-0__listbox__item__icon")],xi.prototype,"_iconChecked",void 0),ki([le()],xi.prototype,"_actionKeyboard",void 0),ki([le()],xi.prototype,"_firstHighlight",void 0),ki([le()],xi.prototype,"_itemSelectedEl",void 0),window.customElements.get("kuc-base-datetime-listbox-1-7-0")||(ke('\nkuc-base-datetime-listbox-1-7-0,\nkuc-base-datetime-listbox-1-7-0 *,\nkuc-base-datetime-listbox-1-7-0:lang(en),\nkuc-base-datetime-listbox-1-7-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-listbox-1-7-0:lang(ja),\nkuc-base-datetime-listbox-1-7-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-listbox-1-7-0:lang(zh),\nkuc-base-datetime-listbox-1-7-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-listbox-1-7-0:lang(zh-TW),\nkuc-base-datetime-listbox-1-7-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\n.kuc-base-datetime-listbox-1-7-0__listbox {\n  position: absolute;\n  z-index: 2000;\n  min-width: 280px;\n  margin: 0;\n  padding: 8px 0;\n  border: 1px solid #e3e7e8;\n  background-color: #ffffff;\n  list-style: none;\n  line-height: 1;\n  overflow-y: auto;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);\n}\n.kuc-base-datetime-listbox-1-7-0__listbox__item {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 8px 16px 8px 25px;\n  color: #333333;\n  cursor: pointer;\n  -webkit-tap-highlight-color: initial;\n  text-align: left;\n  font-size: 14px;\n  user-select: none;\n}\n.kuc-base-datetime-listbox-1-7-0__listbox__item[aria-selected="true"] {\n  color: #3498db;\n}\n.kuc-base-datetime-listbox-1-7-0__listbox--highlight {\n  background-color: #e2f2fe;\n  cursor: pointer;\n}\n.kuc-base-datetime-listbox-1-7-0__listbox__item__icon {\n  position: absolute;\n  left: 8px;\n  top: 10px;\n  background-color: transparent;\n}\n.kuc-base-datetime-listbox-1-7-0__listbox__item:focus {\n  outline: none;\n}\n'),window.customElements.define("kuc-base-datetime-listbox-1-7-0",xi));var wi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class $i extends ve{constructor(){super(...arguments),this.language="en",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.timeStep=30,this._listBoxVisible=!1,this._valueLabel="",this._doFocusListBox=!1,this._hours="",this._minutes="",this._suffix="",this._valueForReset="",this._locale=at("en")}update(e){(e.has("hour12")||e.has("timeStep")||e.has("max")||e.has("min"))&&(this._listBoxItems=((e,t,i,n)=>{const o=[],a=Math.round(t),s=Fe(n),r=Fe(i);if(a>0){const t=Math.floor((s-r)/a)+1;for(let i=0;i<t;i++){const t=Ge(r+i*a,e);o.push(t)}}return o})(this.hour12,this.timeStep,this.min,this.max),this._updateInputValue()),e.has("value")&&this._updateInputValue(),e.has("language")&&(this._locale=at(this.language)),super.update(e)}render(){return N`
      <div class="kuc-base-time-1-7-0__group" @click="${this._handleClickInputGroup}">
        <input
          type="text"
          class="kuc-base-time-1-7-0__group__hours"
          role="spinbutton"
          tabindex="${this._hours?"0":"-1"}"
          aria-label="Hour"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        ${this._getColonTemplate()}
        <input
          type="text"
          class="kuc-base-time-1-7-0__group__minutes"
          role="spinbutton"
          tabindex="${this._minutes?"0":"-1"}"
          aria-label="Minute"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this._getSuffixTemplate()}
      </div>
      <button
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        class="kuc-base-time-1-7-0__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show time picker
      </button>
      ${this._getListBoxTemplate()}
    `}updated(e){e.has("disabled")&&this._toggleDisabledGroup(),super.update(e)}_handleClickInputGroup(e){if(this.disabled)return;if(""===this.value)return this._toggleEl.focus(),void this._openListBox();const t=e.target;this._openListBox(),"INPUT"!==t.tagName.toUpperCase()?this._hoursEl.select():t.select()}_handleBlurListBox(e){e.preventDefault(),this._inputFocusEl||(this._listBoxVisible=!1)}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add("kuc-base-time-1-7-0__group--disabled"):this._inputGroupEl.classList.remove("kuc-base-time-1-7-0__group--disabled")}_updateInputValue(){var e;const t=((e,t)=>{const i=e.split(":"),n=parseInt(i[0],10),o=parseInt(i[1],10),a=n%Ae;return isNaN(a)||isNaN(o)?{hours:"",minutes:"",suffix:""}:t?((e,t)=>{const i=Ke(e),n=qe(e);return{hours:nt(n),minutes:nt(t),suffix:i}})(n,o):{hours:nt(a),minutes:nt(o),suffix:""}})(this.value,this.hour12);this._hours=t.hours,this._minutes=t.minutes,this._suffix=t.suffix||"",this._valueLabel=this._getValueLabel(t),this._inputGroupEl&&(this._setValueToInput(t),null===(e=this._inputFocusEl)||void 0===e||e.select())}_getValueLabel(e){if(!e.hours||!e.minutes)return"";const t=`${e.hours}:${e.minutes}`;return e.suffix?t+` ${e.suffix}`:t}_setValueToInput(e){this._hoursEl.value=e.hours,this._minutesEl.value=e.minutes,this._suffixEl&&(this._suffixEl.value=e.suffix||"")}_handleKeyDownButton(e){switch(e.key){case"Tab":case"Escape":if("Escape"===e.key&&e.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case"Enter":case" ":case"ArrowUp":case"ArrowDown":e.preventDefault(),e.stopPropagation(),this._openListBoxByKey();break;default:e.preventDefault(),e.stopPropagation(),this._handleDefaultKeyButton(e.key)}}_handleBlurButton(){this._inputGroupEl.classList.remove("kuc-base-time-1-7-0__group--focus")}_handleFocusButton(e){e.stopPropagation(),this._inputGroupEl.classList.add("kuc-base-time-1-7-0__group--focus")}_openListBoxByKey(){return!this._listBoxVisible&&(this._valueForReset=this.value,this._doFocusListBox=!0,this._listBoxVisible=!0,this._inputGroupEl.classList.remove("kuc-base-time-1-7-0__group--focus"),!0)}_handleListBoxEscape(){this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),""!==this.value?this._hoursEl.select():this._toggleEl.focus()}_handleDefaultKeyButton(e){if(!/^[0-9]$/i.test(e)||""!==this.value)return;const t=this._computeNumberKeyValueHours(e);this._actionUpdateInputValue(t),this._hoursEl.select()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!e.detail.value)return;const t=e.detail.value;this._actionUpdateInputValue(t)}_handleListBoxFocusChange(e){const t=e.detail.value,i=Ye(t);this._actionUpdateInputValue(i)}_handleFocusInput(e){this._inputFocusEl=e.target,this._inputFocusEl.select(),this._inputGroupEl.classList.add("kuc-base-time-1-7-0__group--focus")}_handleBlurInput(e){this._inputFocusEl=null;const t=e.relatedTarget;t&&t instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(t)>-1||(this._closeListBox(),this._inputGroupEl.classList.remove("kuc-base-time-1-7-0__group--focus"))}_handleTabKey(e){return"Tab"===e.key}_handleKeyDownInput(e){this._closeListBox(),this._handleTabKey(e)||this._handleSupportedKey(e)}_handlePasteInput(e){e.preventDefault()}_handleSupportedKey(e){e.preventDefault();const t=e.key;let i;switch(t){case"Enter":case"ArrowRight":this._actionSelectNextRange();break;case"ArrowLeft":this._actionSelectPreviousRange();break;case"ArrowUp":i=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(i);break;case"ArrowDown":i=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(i);break;case"Backspace":case"Delete":i=this._computeDeleteValue(),this._actionUpdateInputValue(i);break;default:i=this._computeDefaultKeyValue(t),this._actionUpdateInputValue(i)}}_actionUpdateInputValue(e){const t=""===this.value?this.value:this._formatKeyDownValue(),i=Ye(t),n=Ye(e);i!==n&&(this.value=n,this._dispatchEventTimeChange(n,i))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:"00"}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:"00"}):this._formatKeyDownValue()}_computeArrowUpDownValue(e){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(e):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(e):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(e){if(!e){const e=this._suffix===De?Le:De;return this._formatKeyDownValue({suffix:e})}if(-1===["a","A","p","P"].indexOf(e))return this._formatKeyDownValue();const t="a"===e||"A"===e?De:Le;return""===this.value&&this._hoursEl.select(),this._formatKeyDownValue({suffix:t})}_computeArrowUpDownHourValue(e){let t=parseInt(this._hours,10)+e;return this.hour12?(t%=Ve,t=t<=0?Ve:t):(t%=Ae,t=t<0?23:t),this._formatKeyDownValue({hours:t.toString()})}_computeArrowUpDownMinuteValue(e){let t=parseInt(this._minutes,10)+e;return t%=60,t=t<0?59:t,this._formatKeyDownValue({minutes:t.toString()})}_computeDefaultKeyValue(e){return/^[0-9]$/i.test(e)?this._computeNumberKeyValue(e):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(e):this._formatKeyDownValue()}_computeNumberKeyValue(e){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(e):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(e):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(e){const t=this._getPreviousMinutes(this._minutes),i=nt(t+e);return""===this.value?(this._hoursEl.select(),this._computeNumberKeyValueHours(e)):this._formatKeyDownValue({minutes:i})}_computeNumberKeyValueHours(e){const t=this._getPreviousHours(this._hours,e),i=nt(t+e);return""===this.value?this._formatKeyDownValue({hours:i,minutes:"00"}):this._formatKeyDownValue({hours:i})}_getPreviousMinutes(e){let t;return t=parseInt(e,10)>10?(""+e)[1]:""+e,t=parseInt(t,10)>5?"0":t,t}_getPreviousHours(e,t){let i;i=parseInt(e,10)>10?(""+e)[1]:""+e;const n=parseInt(i+t,10);return i=this.hour12&&n>Ve||!this.hour12&&n>=Ae?"0":i,i}_actionSelectNextRange(){this._inputFocusEl!==this._hoursEl?this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select():this._minutesEl.select()}_actionSelectPreviousRange(){this._inputFocusEl!==this._suffixEl?this._inputFocusEl===this._minutesEl&&this._hoursEl.select():this._minutesEl.select()}_dispatchEventTimeChange(e,t){const i={value:e,oldValue:t};(We(e,this.min)<0||We(this.max,e)<0)&&(i.error=this._locale.TIME_IS_OUT_OF_VALID_RANGE),ye(this,"kuc:base-time-change",i)}_formatKeyDownValue(e={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){const t=e.hours||this._hours,i=e.minutes||this._minutes,n=e.suffix||this._suffix,o=`${nt(t)}:${nt(i)}`;return n?`${o} ${n}`:o}_openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0)}_closeListBox(){this._doFocusListBox=!1,this._listBoxVisible=!1}_getColonTemplate(){return this._hours?N` <span class="kuc-base-time-1-7-0__group__colon">:</span> `:""}_getSuffixTemplate(){return this.hour12?N`
          <input
            class="kuc-base-time-1-7-0__group__suffix"
            role="spinbutton"
            tabindex="${this._suffix?"0":"-1"}"
            aria-label="${this._suffix||"suffix"}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            @paste="${this._handlePasteInput}"
            ?disabled="${this.disabled}"
            value="${this._suffix}"
          />
        `:""}_getListBoxTemplate(){return this._listBoxVisible?N`
          <kuc-base-datetime-listbox-1-7-0
            maxHeight="165"
            aria-hidden="${!this._listBoxVisible}"
            class="kuc-base-time-1-7-0__group__listbox"
            .items="${this._listBoxItems||[]}"
            .value="${this._valueLabel}"
            .doFocus="${this._doFocusListBox}"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleBlurListBox}"
            @kuc:listbox-focus-change="${this._handleListBoxFocusChange}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
          ></kuc-base-datetime-listbox-1-7-0>
        `:""}}wi([re({type:String,attribute:"lang",reflect:!0})],$i.prototype,"language",void 0),wi([re({type:String})],$i.prototype,"max",void 0),wi([re({type:String})],$i.prototype,"min",void 0),wi([re({type:String})],$i.prototype,"value",void 0),wi([re({type:Boolean})],$i.prototype,"disabled",void 0),wi([re({type:Boolean})],$i.prototype,"hour12",void 0),wi([re({type:Number})],$i.prototype,"timeStep",void 0),wi([le()],$i.prototype,"_listBoxVisible",void 0),wi([le()],$i.prototype,"_valueLabel",void 0),wi([le()],$i.prototype,"_doFocusListBox",void 0),wi([le()],$i.prototype,"_hours",void 0),wi([le()],$i.prototype,"_minutes",void 0),wi([le()],$i.prototype,"_suffix",void 0),wi([le()],$i.prototype,"_inputFocusEl",void 0),wi([ue(".kuc-base-time-1-7-0__group__hours")],$i.prototype,"_hoursEl",void 0),wi([ue(".kuc-base-time-1-7-0__group__minutes")],$i.prototype,"_minutesEl",void 0),wi([ue(".kuc-base-time-1-7-0__group__suffix")],$i.prototype,"_suffixEl",void 0),wi([ue(".kuc-base-time-1-7-0__assistive-text")],$i.prototype,"_toggleEl",void 0),wi([ue(".kuc-base-time-1-7-0__group")],$i.prototype,"_inputGroupEl",void 0),window.customElements.get("kuc-base-time-1-7-0")||(ke("\n:lang(ja) .kuc-base-time-1-7-0__group input.kuc-base-time-1-7-0__group__hours,\n:lang(ja) .kuc-base-time-1-7-0__group input.kuc-base-time-1-7-0__group__minutes {\n  width: 18px;\n}\n.kuc-base-time-1-7-0__group {\n  display: inline-flex;\n  position: relative;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  max-width: 85px;\n  width: 85px;\n  height: 40px;\n  color: #333333;\n  border: solid 1px #e3e7e8;\n  box-sizing: border-box;\n  padding: 0px 8px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  background-color: #ffffff;\n}\n.kuc-base-time-1-7-0__group input.kuc-base-time-1-7-0__group__hours {\n  border: 0px;\n  padding: 0px;\n  width: 16px;\n  font-size: 14px;\n  outline: none;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-7-0__group input.kuc-base-time-1-7-0__group__minutes {\n  border: 0px;\n  padding: 0px;\n  width: 16px;\n  font-size: 14px;\n  outline: none;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-7-0__group input.kuc-base-time-1-7-0__group__hours:focus {\n  border: 0px;\n}\n.kuc-base-time-1-7-0__group input.kuc-base-time-1-7-0__group__minutes:focus {\n  border: 0px;\n}\n.kuc-base-time-1-7-0__group__colon {\n  width: 4px;\n  text-align: center;\n}\n.kuc-base-time-1-7-0__group input.kuc-base-time-1-7-0__group__suffix {\n  border: 0px;\n  width: 24px;\n  text-align: right;\n  font-size: 14px;\n  outline: none;\n  appearance: none;\n  margin-left: 1px;\n  padding: 0px;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-7-0__group--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-base-time-1-7-0__assistive-text {\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n  position: absolute !important;\n  padding: 0px !important;\n  border: 0px !important;\n  height: 1px !important;\n  width: 1px !important;\n}\n.kuc-base-time-1-7-0__group--disabled {\n  background-color: #d4d7d7;\n  box-shadow: none;\n  color: #888888;\n  cursor: not-allowed;\n}\n.kuc-base-time-1-7-0__group--disabled input {\n  cursor: not-allowed;\n  color: #888888;\n  -webkit-text-fill-color: #888888;\n}\n"),window.customElements.define("kuc-base-time-1-7-0",$i));var Ci=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ii;(()=>{if(Ii=window.customElements.get("kuc-datetime-picker-1-7-0"),!Ii){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorText="",this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._inputMax="",this._inputMin="",this._timeConverted="",this._errorInvalidTime="",this._inputTimeStep=30,this._GUID=xe();const t=mt(e);Object.assign(this,t)}shouldUpdate(e){return!((e.has("max")||e.has("min"))&&!this._checkAndUpdateMaxMinProperty())&&(!(e.has("timeStep")&&!this._checkAndUpdateTimeStepProperty())&&(void 0===this.value||""===this.value||("string"!=typeof this.value?(Et(this,Pe),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=_t(this._dateAndTime.date),St(this._dateAndTime.date,this._dateAndTime.time)&&kt(this._dateConverted)?(this._timeConverted=bt(this._dateAndTime.time.slice(0,5)),!e.has("value")||!(We(this._timeConverted,this._inputMin)<0||We(this._inputMax,this._timeConverted)<0)||(Et(this,Me),!1)):(Et(this,Pe),!1)))))}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueChangeByUI():this._updateValueWhenSetter()}_checkAndUpdateMaxMinProperty(){let e=this._inputMin,t=this._inputMax;if(void 0===this.max||""===this.max)t=Ne;else{if(!ft(this.max))return Et(this,ze),!1;t=this.max=bt(this.max)}if(void 0===this.min||""===this.min)e=Oe;else{if(!ft(this.min))return Et(this,Ue),!1;e=this.min=bt(this.min)}return We(t,e)<0?(Et(this,He),!1):(this._inputMin=e,this._inputMax=t,!0)}_checkAndUpdateTimeStepProperty(){return vt(this.timeStep)?yt(this.timeStep,this._inputMax,this._inputMin)?(this._inputTimeStep=this.timeStep,!0):(Et(this,Re),!1):(Et(this,Be),!1)}_updateValueChangeByUI(){const e=this._validateDateTimeFormat();this.value=e?this.value:void 0,!e||this._dateValue||this._timeValue||(this.value="");const t=!this._dateValue&&this._timeValue,i=this._dateValue&&!this._timeValue;this._errorText=t||i?this.error||this._errorFormat||this._errorInvalidTime:e?this.error:this._errorFormat||this._errorInvalidTime}_validateDateTimeFormat(){const e=Boolean(this._timeValue)&&!this._dateValue,t=Boolean(this._dateValue)&&!this._timeValue;return!(this._errorFormat||this._errorInvalidTime||e||t)}_updateValueWhenSetter(){if(this._errorText=this.error,""===this.value||void 0===this.value)return this._previousTimeValue="",this._errorFormat="",void(this._errorInvalidTime="");this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t||this._dateInput.value,this._timeValue=this._dateValue&&kt(t)?bt(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has("value")&&(void 0===this.value&&this._setUndefinedValue(),""===this.value&&this._setEmptyValue()),(e.has("max")||e.has("min")||e.has("value"))&&void 0!==this.value&&(this._errorInvalidTime=""),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat)return this._changeDateByUI?void(this._dateValue=this._dateInput.value):(this._dateValue="",void(this._timeValue=""));this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorInvalidTime=""}render(){return N`
        <fieldset
          class="kuc-datetime-picker-1-7-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-datetime-picker-1-7-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-7-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-7-0>
          </legend>
          <div class="kuc-datetime-picker-1-7-0__group__inputs">
            <kuc-base-date-1-7-0
              class="kuc-datetime-picker-1-7-0__group__inputs--date"
              .value="${this._dateValue}"
              .language="${this._getLanguage()}"
              .disabled="${this.disabled}"
              inputAriaLabel="date"
              @kuc:base-date-change="${this._handleDateChange}"
            ></kuc-base-date-1-7-0
            ><kuc-base-time-1-7-0
              class="kuc-datetime-picker-1-7-0__group__inputs--time"
              .value="${this._timeValue}"
              .hour12="${this.hour12}"
              .disabled="${this.disabled}"
              .timeStep="${this._inputTimeStep}"
              .min="${this._inputMin}"
              .max="${this._inputMax}"
              .language="${this._getLanguage()}"
              @kuc:base-time-change="${this._handleTimeChange}"
            ></kuc-base-time-1-7-0>
          </div>
          <kuc-base-error-1-7-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-7-0>
        </fieldset>
      `}updated(){this._resetState(),this._baseLabelEl.updateComplete.then((e=>{this._updateErrorWidth()}))}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorWidth(){const e=jt(this._baseLabelEl);this._baseErrorEl.style.width=e>185?e+"px":"185px"}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):(t=e.detail.value,this._errorFormat=""),this._updateDateTimeValue(t,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;const t=e.detail.value;e.detail.error?(this._errorInvalidTime=e.detail.error,this.error=""):this._errorInvalidTime="",this._updateDateTimeValue(t,"time")}_updateDateTimeValue(e,t){const i=this.value;"date"===t?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const n=this._errorFormat||this._errorInvalidTime?void 0:this._getDateTimeString(),o=this._errorFormat||this._errorInvalidTime?void 0:n;this.value=o,!this._validateDateTimeFormat()||this._dateValue||this._timeValue||(this.value="");const a={value:this.value,oldValue:i,changedPart:t};ye(this,"change",a)}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return 3===e.length?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(""===e||void 0===e)return{date:"",time:""};const t=e.split("T"),i=t[0],n=t[1];if(e.indexOf("T")===e.length-1||t.length>2)return{date:i,time:""};if(!n)return{date:i,time:Oe};const[o,a,s]=n.split(":");if(""===o||""===a||""===s)return{date:i,time:n};const r=`${o}:${a||"00"}`;return s?{date:i,time:`${r}:${s}`}:{date:i,time:r}}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}Ci([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ci([re({type:String})],e.prototype,"error",void 0),Ci([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ci([re({type:String})],e.prototype,"label",void 0),Ci([re({type:String,attribute:"lang",reflect:!0,converter:ht})],e.prototype,"language",void 0),Ci([re({type:String})],e.prototype,"max",void 0),Ci([re({type:String})],e.prototype,"min",void 0),Ci([re({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),Ci([re({type:Boolean})],e.prototype,"disabled",void 0),Ci([re({type:Boolean})],e.prototype,"hour12",void 0),Ci([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Ci([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),Ci([re({type:Number})],e.prototype,"timeStep",void 0),Ci([ue(".kuc-base-date-1-7-0__input")],e.prototype,"_dateInput",void 0),Ci([ue("kuc-base-label-1-7-0")],e.prototype,"_baseLabelEl",void 0),Ci([ue("kuc-base-error-1-7-0")],e.prototype,"_baseErrorEl",void 0),window.customElements.define("kuc-datetime-picker-1-7-0",e),ke('\nkuc-datetime-picker-1-7-0,\nkuc-datetime-picker-1-7-0 *,\nkuc-datetime-picker-1-7-0:lang(en),\nkuc-datetime-picker-1-7-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-datetime-picker-1-7-0:lang(ja),\nkuc-datetime-picker-1-7-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-datetime-picker-1-7-0:lang(zh),\nkuc-datetime-picker-1-7-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-datetime-picker-1-7-0:lang(zh-TW),\nkuc-datetime-picker-1-7-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-datetime-picker-1-7-0 {\n  font-size: 14px;\n  display: inline-table;\n  vertical-align: top;\n  line-height: 1.5;\n}\nkuc-datetime-picker-1-7-0[hidden] {\n  display: none;\n}\n.kuc-datetime-picker-1-7-0__group {\n  border: none;\n  padding: 0px;\n  height: auto;\n  display: inline-block;\n  margin: 0px;\n}\n.kuc-datetime-picker-1-7-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-datetime-picker-1-7-0__group__label[hidden] {\n  display: none;\n}\n.kuc-datetime-picker-1-7-0__group__inputs {\n  display: flex;\n  max-width: 185px;\n}\n'),Ii=e}})();var Si=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ei;(()=>{if(Ei=window.customElements.get("kuc-time-picker-1-7-0"),!Ei){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._errorText="",this._inputValue="",this._errorInvalid="",this._inputMax="",this._inputMin="",this._inputTimeStep=30,this._valueConverted="",this._GUID=xe();const t=mt(e);Object.assign(this,t)}shouldUpdate(e){if(e.has("max")||e.has("min")){let e=this._inputMin,t=this._inputMax;if(void 0===this.max||""===this.max)t=Ne;else{if(!ft(this.max))return Et(this,ze),!1;t=this.max=bt(this.max)}if(void 0===this.min||""===this.min)e=Oe;else{if(!ft(this.min))return Et(this,Ue),!1;e=this.min=bt(this.min)}if(We(t,e)<0)return Et(this,He),!1;this._inputMin=e,this._inputMax=t}if(e.has("timeStep")){if(!vt(this.timeStep))return Et(this,Be),!1;if(!yt(this.timeStep,this._inputMax,this._inputMin))return Et(this,Re),!1;this._inputTimeStep=this.timeStep}return!(void 0!==this.value&&""!==this.value&&(ft(this.value)?(this._valueConverted=bt(this.value),e.has("value")&&(We(this._valueConverted,this._inputMin)<0||We(this._inputMax,this._valueConverted)<0)&&(Et(this,Me),1)):(Et(this,Pe),1)))}update(e){e.has("value")&&(void 0===this.value?""===this._errorInvalid&&(this._inputValue=""):(this.value=""===this.value?this.value:this._valueConverted,this._inputValue=this.value)),(e.has("max")||e.has("min")||e.has("value"))&&void 0!==this.value&&(this._errorInvalid=""),this._errorText=this._errorInvalid||this.error,super.update(e)}render(){return N`
        <fieldset
          class="kuc-time-picker-1-7-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-time-picker-1-7-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-7-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-7-0>
          </legend>
          <kuc-base-time-1-7-0
            class="kuc-time-picker-1-7-0__group__input"
            .value="${this._inputValue}"
            .hour12="${this.hour12}"
            .disabled="${this.disabled}"
            .timeStep="${this._inputTimeStep}"
            .min="${this._inputMin}"
            .max="${this._inputMax}"
            .language="${this._getLanguage()}"
            @kuc:base-time-change="${this._handleTimeChange}"
          >
          </kuc-base-time-1-7-0>
          <kuc-base-error-1-7-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-7-0>
        </fieldset>
      `}updated(){this._baseLabelEl.updateComplete.then((e=>{this._updateErrorWidth()}))}_updateErrorWidth(){const e=jt(this._baseLabelEl);this._baseErrorEl.style.width=e>85?e+"px":"85px"}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const t={value:e.detail.value,oldValue:this.value};e.detail.error?(t.value=void 0,this.value=void 0,this._errorInvalid=e.detail.error,this.error=""):(this.value=e.detail.value,this._errorInvalid=""),this._inputValue=e.detail.value,ye(this,"change",t)}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}Si([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Si([re({type:String})],e.prototype,"error",void 0),Si([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Si([re({type:String})],e.prototype,"label",void 0),Si([re({type:String,attribute:"lang",reflect:!0,converter:ht})],e.prototype,"language",void 0),Si([re({type:String})],e.prototype,"max",void 0),Si([re({type:String})],e.prototype,"min",void 0),Si([re({type:String})],e.prototype,"value",void 0),Si([re({type:Boolean})],e.prototype,"disabled",void 0),Si([re({type:Boolean})],e.prototype,"hour12",void 0),Si([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Si([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),Si([re({type:Number})],e.prototype,"timeStep",void 0),Si([ue("kuc-base-label-1-7-0")],e.prototype,"_baseLabelEl",void 0),Si([ue("kuc-base-error-1-7-0")],e.prototype,"_baseErrorEl",void 0),window.customElements.define("kuc-time-picker-1-7-0",e),ke('\nkuc-time-picker-1-7-0,\nkuc-time-picker-1-7-0 *,\nkuc-time-picker-1-7-0:lang(en),\nkuc-time-picker-1-7-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-time-picker-1-7-0:lang(ja),\nkuc-time-picker-1-7-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-time-picker-1-7-0:lang(zh),\nkuc-time-picker-1-7-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-time-picker-1-7-0:lang(zh-TW),\nkuc-time-picker-1-7-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-time-picker-1-7-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-block;\n  vertical-align: top;\n  line-height: 1.5;\n}\n.kuc-time-picker-1-7-0__group__input {\n  position: relative;\n}\nkuc-time-picker-1-7-0[hidden] {\n  display: none;\n}\n.kuc-time-picker-1-7-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-time-picker-1-7-0__group__label {\n  padding: 4px 0px 8px 0px;\n  display: inline-block;\n  white-space: nowrap;\n}\n.kuc-time-picker-1-7-0__group__label[hidden] {\n  display: none;\n}\n'),Ei=e}})();var Ti=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ai;(()=>{if(Ai=window.customElements.get("kuc-mobile-button-1-7-0"),!Ai){class e extends ve{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.disabled=!1,this.visible=!0;const t=mt(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),ye(this,"click")}_getButtonColorType(){return"normal"===this.type||"submit"===this.type?this.type:"normal"}render(){return N`
        <button
          type="button"
          class="kuc-mobile-button-1-7-0__button kuc-mobile-button-1-7-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.text}
        </button>
      `}}Ti([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ti([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ti([re({type:String})],e.prototype,"text",void 0),Ti([re({type:String})],e.prototype,"type",void 0),Ti([re({type:Boolean})],e.prototype,"disabled",void 0),Ti([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-button-1-7-0",e),ke('\n  kuc-mobile-button-1-7-0,\n  kuc-mobile-button-1-7-0 * {\n    font-size: 14px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-button-1-7-0:lang(zh),\n  kuc-mobile-button-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-button-1-7-0:lang(zh-TW),\n  kuc-mobile-button-1-7-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-button-1-7-0 {\n    display: inline-block;\n    vertical-align: top;\n  }\n  kuc-mobile-button-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-button-1-7-0__button {\n    min-width: 100px;\n    height: 42px;\n    padding: 12px 12px;\n    user-select: none;\n    font-weight: 700;\n    line-height: 1;\n  }\n  .kuc-mobile-button-1-7-0__button:focus {\n    outline: none;\n  }\n  .kuc-mobile-button-1-7-0__button--submit {\n    border: 2px solid #206694;\n    background-color: #206694;\n    color: #ffffff;\n    border-radius: 6px;\n  }\n  .kuc-mobile-button-1-7-0__button--submit:disabled {\n    border-color: #a5a5a5;\n    background: #a5a5a5;\n  }\n  .kuc-mobile-button-1-7-0__button--normal {\n    border: 2px solid #206694;\n    background-color: #ffffff;\n    color: #206694;\n    border-radius: 6px;\n  }\n  .kuc-mobile-button-1-7-0__button--normal:disabled {\n    color: #a5a5a5;\n    border-color: #a5a5a5;\n    cursor: default;\n  }\n'),Ai=e}})();var Vi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Di extends ve{constructor(){super(...arguments),this.requiredIcon=!1,this.guid="",this.text=""}render(){return N`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label-1-7-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&""!==this.guid?N`
          <span class="kuc-base-mobile-label-1-7-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:N` <span class="kuc-base-mobile-label-1-7-0__text">${this.text}</span> `}}Vi([re({type:Boolean})],Di.prototype,"requiredIcon",void 0),Vi([re({type:String})],Di.prototype,"guid",void 0),Vi([re({type:String})],Di.prototype,"text",void 0),window.customElements.get("kuc-base-mobile-label-1-7-0")||(ke('\n  kuc-base-mobile-label-1-7-0 {\n    display: inline-table;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-base-mobile-label-1-7-0:lang(zh) ,\n  kuc-base-mobile-label-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-base-mobile-label-1-7-0:lang(zh-TW),\n  kuc-base-mobile-label-1-7-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-base-mobile-label-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-base-mobile-label-1-7-0__text {\n    text-shadow: 0 1px 0 #ffffff;\n    color: #888888;\n    white-space: normal;\n    font-size: 86%;\n  }\n  .kuc-base-mobile-label-1-7-0__required-icon {\n    font-size: 86%;\n    position: relative;\n    left: 3px;\n    color: #d01212;\n  }\n  .kuc-base-mobile-label-1-7-0__required-icon[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-mobile-label-1-7-0",Di));var Li=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Hi extends ve{constructor(){super(...arguments),this.ariaLive="",this.guid="",this.text=""}render(){return N`
      ${this.ariaLive&&""!==this.ariaLive?N`
            <div
              class="kuc-base-mobile-error-1-7-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:N`
            <div
              class="kuc-base-mobile-error-1-7-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}}Li([re({type:String})],Hi.prototype,"ariaLive",void 0),Li([re({type:String})],Hi.prototype,"guid",void 0),Li([re({type:String})],Hi.prototype,"text",void 0),window.customElements.get("kuc-base-mobile-error-1-7-0")||(ke('\n  kuc-base-mobile-error-1-7-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-base-mobile-error-1-7-0:lang(zh),\n  kuc-base-mobile-error-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-base-mobile-error-1-7-0:lang(zh-TW),\n  kuc-base-mobile-error-1-7-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-base-mobile-error-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-base-mobile-error-1-7-0__error {\n    line-height: 1.5;\n    color: #000000;\n    background-color: #fdffc9;\n    border: 1px solid #e5db68;\n    border-radius: 0.4em;\n    padding: 0.4em 1em;\n    margin-top: 0.3em;\n    margin-left: 0.5em;\n  }\n  .kuc-base-mobile-error-1-7-0__error[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-mobile-error-1-7-0",Hi));var Mi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Bi;(()=>{if(Bi=window.customElements.get("kuc-mobile-checkbox-1-7-0"),!Bi){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=xe();const t=mt(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Ct(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.dataset.index||"0",n=t.value,o=this.value?[...this.value]:this.value,a=this._getNewValueMapping(n,i),s=this.items.map((e=>e.value)),r=Object.values(a).filter((e=>s.indexOf(e)>-1));if(r===o)return;const l=Object.keys(a).map((e=>parseInt(e,10)));this.value=r,this.selectedIndex=l,ye(this,"change",{oldValue:o,value:r})}_getCheckboxIconSvgTemplate(e){return P`
       <svg
         class="kuc-mobile-checkbox-1-7-0__group__select-menu__item__label__icon"
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="44px"
         height="34px"
         viewBox="0 0 44 34"
         enable-background="new 0 0 44 34"
         xml:space="preserve">
         <image width="44" height="34" x="0" y="0" href="${this._getSVGStrokeValue(e)}"/>
      </svg>
       `}_getSVGStrokeValue(e){return e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC"}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return N`
        <label
          for="${this._GUID}-item-${t}"
          class="kuc-mobile-checkbox-1-7-0__group__select-menu__item"
          ?borderVisible="${this.borderVisible}"
        >
          <input
            type="checkbox"
            id="${this._GUID}-item-${t}"
            class="kuc-mobile-checkbox-1-7-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            data-index="${t}"
            value="${void 0!==e.value?e.value:""}"
            aria-describedby="${this._GUID}-error}"
            aria-required="${this.requiredIcon}"
            aria-invalid="${""!==this.error}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <div class="kuc-mobile-checkbox-1-7-0__group__select-menu__item__label">
            ${this._getCheckboxIconSvgTemplate(i)}${void 0===e.label?e.value:e.label}
          </div>
        </label>
      `}shouldUpdate(e){return e.has("items")&&!xt(this.items)?(Et(this,Dt),!1):e.has("value")&&!wt(this.value)?(Et(this,Lt),!1):!(e.has("selectedIndex")&&!Ct(this.selectedIndex)&&(Et(this,Mt),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return N`
        <fieldset class="kuc-mobile-checkbox-1-7-0__group">
          <legend
            class="kuc-mobile-checkbox-1-7-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-7-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-7-0>
          </legend>
          <div
            class="kuc-mobile-checkbox-1-7-0__group__select-menu ${this.requiredIcon?"kuc-mobile-checkbox-1-7-0__group__select-menu--required":""}"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-mobile-error-1-7-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-7-0>
        </fieldset>
      `}updated(){this._inputEls.forEach((e=>{e.checked=this.value.indexOf(e.value)>-1}))}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}}Mi([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Mi([re({type:String})],e.prototype,"error",void 0),Mi([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Mi([re({type:String})],e.prototype,"label",void 0),Mi([re({type:Boolean})],e.prototype,"borderVisible",void 0),Mi([re({type:Boolean})],e.prototype,"disabled",void 0),Mi([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Mi([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),Mi([re({type:Array})],e.prototype,"items",void 0),Mi([re({type:Array})],e.prototype,"selectedIndex",void 0),Mi([re({type:Array})],e.prototype,"value",void 0),Mi([ce(".kuc-mobile-checkbox-1-7-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),Mi([le()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-mobile-checkbox-1-7-0",e),ke('\n  kuc-mobile-checkbox-1-7-0,\n  kuc-mobile-checkbox-1-7-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-checkbox-1-7-0:lang(zh),\n  kuc-mobile-checkbox-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-checkbox-1-7-0:lang(zh-TW),\n  kuc-mobile-checkbox-1-7-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-checkbox-1-7-0 {\n    width: 100%;\n    display: inline-block;\n  }\n  kuc-mobile-checkbox-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-7-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    box-sizing: border-box;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__label__text {\n    text-shadow: 0 1px 0 #ffffff;\n    color: #888888;\n    white-space: normal;\n    font-size: inherit;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__label__required-icon {\n    position: relative;\n    left: 3px;\n    color: #d01212;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__label__required-icon[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu[bordervisible] {\n    border-color: #b3b3b3;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 8px;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu[disabled] {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu--required[bordervisible] {\n    border-color: #cf4a38;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 8px;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu__item[bordervisible] {\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 30px;\n    display: block;\n    border-bottom: 1px solid #b3b3b3;\n    padding: 8px;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu__item {\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 30px;\n    display: block;\n    padding: 8px;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu__item:last-child {\n    border-bottom: 0px;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu__item__input[disabled]\n    + .kuc-mobile-checkbox-1-7-0__group__select-menu__item__label {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu__item__label {\n    position: relative;\n    margin: -7px 0px 0px 34px;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: nowrap;\n    padding: 11px 13px 13px 0px;\n    font-size: 14.04px;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    left: -30px;\n    margin-top: -13px;\n    box-sizing: border-box;\n    width: 22px;\n    height: 22px;\n    background-size: 22px 17px;\n    content: "";\n  }\n  .kuc-mobile-checkbox-1-7-0__group__error {\n    line-height: 1.5;\n    border: 1px solid #e5db68;\n    background-color: #fdffc9;\n    margin-top: 0.3em;\n    margin-left: 0.5em;\n    padding: 0.4em 1em;\n    border-radius: 0.4em;\n    color: #000000;\n  }\n  .kuc-mobile-checkbox-1-7-0__group__error[hidden] {\n    display: none;\n  }\n'),Bi=e}})();var Oi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ni;(()=>{if(Ni=window.customElements.get("kuc-mobile-dropdown-1-7-0"),!Ni){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=xe();const t=mt(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value;if(this.value===i&&this.selectedIndex===t.selectedIndex)return;const n={oldValue:this.value,value:i};this.value=i,this.selectedIndex=t.selectedIndex,ye(this,"change",n)}shouldUpdate(e){return e.has("items")&&!xt(this.items)?(Et(this,Dt),!1):e.has("value")&&!$t(this.value)?(Et(this,Ht),!1):!(e.has("selectedIndex")&&!It(this.selectedIndex)&&(Et(this,Bt),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return N`
        <option value="${e.value||""}" ?selected="${i}">
          ${void 0===e.label?e.value:e.label}
        </option>
      `}render(){return N`
        <label
          class="kuc-mobile-dropdown-1-7-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-7-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-7-0>
        </label>
        <div class="kuc-mobile-dropdown-1-7-0__input-form">
          <div
            class="kuc-mobile-dropdown-1-7-0__input-form__select
            ${this.requiredIcon?"kuc--required":""}"
          >
            <select
              class="kuc-mobile-dropdown-1-7-0__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${""!==this.error}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            >
              ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-7-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-7-0>
      `}updated(e){e.has("selectedIndex")&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}}Oi([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Oi([re({type:String})],e.prototype,"error",void 0),Oi([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Oi([re({type:String})],e.prototype,"label",void 0),Oi([re({type:String})],e.prototype,"value",void 0),Oi([re({type:Number})],e.prototype,"selectedIndex",void 0),Oi([re({type:Boolean})],e.prototype,"disabled",void 0),Oi([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Oi([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),Oi([re({type:Array})],e.prototype,"items",void 0),Oi([ue(".kuc-mobile-dropdown-1-7-0__input-form__select__input")],e.prototype,"_selectEl",void 0),window.customElements.define("kuc-mobile-dropdown-1-7-0",e),ke('\n  kuc-mobile-dropdown-1-7-0,\n  kuc-mobile-dropdown-1-7-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-dropdown-1-7-0:lang(zh),\n  kuc-mobile-dropdown-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-dropdown-1-7-0:lang(zh-TW),\n  kuc-mobile-dropdown-1-7-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-dropdown-1-7-0 {\n    display: inline-block;\n    width: 100%;\n  }\n\n  kuc-mobile-dropdown-1-7-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-dropdown-1-7-0__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-dropdown-1-7-0__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-dropdown-1-7-0__input-form {\n    word-wrap: break-word;\n    min-height: 1em;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n\n  .kuc-mobile-dropdown-1-7-0__input-form__select {\n    display: inline-block;\n    border-radius: 0.4em;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-dropdown-1-7-0__input-form__select.kuc--required {\n    border: 1px solid #cf4a38;\n  }\n\n  .kuc-mobile-dropdown-1-7-0__input-form__select__input {\n    min-width: 100px;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-dropdown-1-7-0__input-form__select__input:disabled {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),Ni=e}})();var Pi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let zi;(()=>{if(zi=window.customElements.get("kuc-mobile-multi-choice-1-7-0"),!zi){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=xe();const t=mt(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Ct(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=this.value?[...this.value]:this.value,n=Array.from(t.selectedOptions,(e=>e.value)),o=Array.from(t.selectedOptions,(e=>e.dataset.index)),a={value:n,oldValue:i};this.value=n,this.selectedIndex=o.map((e=>e?parseInt(e,10):0)),ye(this,"change",a)}shouldUpdate(e){return e.has("items")&&!xt(this.items)?(Et(this,Dt),!1):e.has("value")&&!wt(this.value)?(Et(this,Lt),!1):!(e.has("selectedIndex")&&!Ct(this.selectedIndex)&&(Et(this,Mt),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return N`
        <option
          value="${e.value||""}"
          data-index="${t}"
          ?selected="${void 0!==e.value&&i}"
        >
          ${void 0===e.label?e.value:e.label}
        </option>
      `}render(){return N`
        <label
          class="kuc-mobile-multi-choice-1-7-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-7-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-7-0>
        </label>
        <div class="kuc-mobile-multi-choice-1-7-0__input-form">
          <div
            class="kuc-mobile-multi-choice-1-7-0__input-form__select
            ${this.requiredIcon?"kuc--required":""}"
          >
            <select
              class="kuc-mobile-multi-choice-1-7-0__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${""!==this.error}"
              ?disabled="${this.disabled}"
              multiple
              @change="${this._handleChangeInput}"
            >
              ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-7-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-7-0>
      `}}Pi([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Pi([re({type:String})],e.prototype,"error",void 0),Pi([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Pi([re({type:String})],e.prototype,"label",void 0),Pi([re({type:Boolean})],e.prototype,"disabled",void 0),Pi([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Pi([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),Pi([re({type:Array})],e.prototype,"items",void 0),Pi([re({type:Array})],e.prototype,"selectedIndex",void 0),Pi([re({type:Array})],e.prototype,"value",void 0),Pi([le()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-mobile-multi-choice-1-7-0",e),ke('\n  kuc-mobile-multi-choice-1-7-0,\n  kuc-mobile-multi-choice-1-7-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n\n  kuc-mobile-multi-choice-1-7-0:lang(zh),\n  kuc-mobile-multi-choice-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-multi-choice-1-7-0:lang(zh-TW),\n  kuc-mobile-multi-choice-1-7-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-multi-choice-1-7-0 {\n    display: inline-block;\n    width: 100%;\n  }\n\n  kuc-mobile-multi-choice-1-7-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-multi-choice-1-7-0__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-multi-choice-1-7-0__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-multi-choice-1-7-0__input-form {\n    word-wrap: break-word;\n    min-height: 1em;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n\n  .kuc-mobile-multi-choice-1-7-0__input-form__select {\n    display: inline-block;\n    border-radius: 0.4em;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-multi-choice-1-7-0__input-form__select.kuc--required {\n    border: 1px solid #cf4a38;\n  }\n\n  .kuc-mobile-multi-choice-1-7-0__input-form__select__input {\n    min-width: 100px;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-multi-choice-1-7-0__input-form__select__input:disabled {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),zi=e}})();var Ui=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ri;(()=>{if(Ri=window.customElements.get("kuc-mobile-radio-button-1-7-0"),!Ri){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=xe();const t=mt(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value,n=t.dataset.index||"0",o=parseInt(n,10);if(this.value===i&&this.selectedIndex===o)return;const a={oldValue:this.value,value:i};this.value=i,this.selectedIndex=o,ye(this,"change",a)}_getRadioIconSvgTemplate(e,t){return P`
      <svg
        class="kuc-mobile-radio-button-1-7-0__group__select-menu__item__label__icon"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs>
        <radialGradient id="${this._GUID}-shadow">
          <stop offset="0%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="30%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="80%" style="stop-color:#5b5b5b;stop-opacity:0.1" />
          <stop offset="90%" style="stop-color:#5b5b5b;stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:#5b5b5b;stop-opacity:0.2" />
        </radialGradient>
      </defs>
        <circle
          fill="url(#shadow)"
          cx="10.5"
          cy="10.5"
          r="10.15"
          stroke="#bbbbbb" stroke-width="1"/>
        ${t?P`<circle cx="10.5" cy="10.5" r="6.5" fill="${"#5b5b5b"}"/>`:""}
      </svg>
    `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return N`
        <div class="kuc-mobile-radio-button-1-7-0__group__select-menu__item">
          <input
            type="radio"
            aria-describedby="${this._GUID}-error"
            id="${this._GUID}-item-${t}"
            data-index="${t}"
            class="kuc-mobile-radio-button-1-7-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${void 0!==e.value?e.value:""}"
            aria-invalid="${""!==this.error}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <label
            class="kuc-mobile-radio-button-1-7-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(this.disabled,i)}
            <div
              class="kuc-mobile-radio-button-1-7-0__group__select-menu__item__label__value"
            >
              ${void 0===e.label?e.value:e.label}
            </div>
          </label>
        </div>
      `}shouldUpdate(e){return e.has("items")&&!xt(this.items)?(Et(this,Dt),!1):e.has("value")&&!$t(this.value)?(Et(this,Ht),!1):!(e.has("selectedIndex")&&!It(this.selectedIndex)&&(Et(this,Bt),1))}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return N`
        <div class="kuc-mobile-radio-button-1-7-0__group">
          <div
            class="kuc-mobile-radio-button-1-7-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-7-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-7-0>
          </div>
          <div
            class="kuc-mobile-radio-button-1-7-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-mobile-error-1-7-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-7-0>
        </div>
      `}updated(){this._inputEls.forEach(((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex}))}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}}Ui([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ui([re({type:String})],e.prototype,"error",void 0),Ui([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ui([re({type:String})],e.prototype,"label",void 0),Ui([re({type:String})],e.prototype,"value",void 0),Ui([re({type:Number})],e.prototype,"selectedIndex",void 0),Ui([re({type:Boolean})],e.prototype,"borderVisible",void 0),Ui([re({type:Boolean})],e.prototype,"disabled",void 0),Ui([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Ui([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),Ui([re({type:Array})],e.prototype,"items",void 0),Ui([ce(".kuc-mobile-radio-button-1-7-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),window.customElements.define("kuc-mobile-radio-button-1-7-0",e),ke('\n  kuc-mobile-radio-button-1-7-0,\n  kuc-mobile-radio-button-1-7-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n\n  kuc-mobile-radio-button-1-7-0:lang(zh) ,\n  kuc-mobile-radio-button-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-radio-button-1-7-0:lang(zh-TW),\n  kuc-mobile-radio-button-1-7-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-radio-button-1-7-0 {\n    width: 100%;\n    display: inline-block;\n  }\n\n  kuc-mobile-radio-button-1-7-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group {\n    border: none;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    vertical-align: top;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__select-menu {\n    margin-right: 0.5em;\n    margin-left: 0.5em;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__select-menu[bordervisible] {\n    border-color: #b3b3b3;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 0.4em;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__select-menu__item {\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 45px;\n    display: block;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__select-menu[bordervisible]\n    .kuc-mobile-radio-button-1-7-0__group__select-menu__item {\n    border-bottom: 1px solid #b3b3b3;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__select-menu[bordervisible]\n    .kuc-mobile-radio-button-1-7-0__group__select-menu__item:last-child {\n    border-bottom: 0px;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    box-sizing: border-box;\n    margin-top: -11px;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n    border-radius: 9px;\n    left: 8px;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__select-menu__item__label__value {\n    height: 45px;\n    line-height: 45px;\n    padding-left: 35px;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__select-menu[disabled] {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n\n  .kuc-mobile-radio-button-1-7-0__group__select-menu__item__label {\n    position: absolute;\n    white-space: nowrap;\n    width: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 100%;\n    padding: 0px;\n  }\n'),Ri=e}})();var ji=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Gi;(()=>{if(Gi=window.customElements.get("kuc-mobile-text-1-7-0"),!Gi){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=xe();const t=mt(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};ye(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,ye(this,"change",i)}_handleInputText(e){e.stopPropagation();const t={value:e.target.value,data:e.data};ye(this,"input",t)}render(){return N`
        <label
          class="kuc-mobile-text-1-7-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-7-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-7-0>
        </label>
        <div class="kuc-mobile-text-1-7-0__input-form">
          <span
            class="kuc-mobile-text-1-7-0__input-form__prefix"
            ?hidden="${!this.prefix}"
            >${this.prefix}</span
          >
          <input
            class="kuc-mobile-text-1-7-0__input-form__input"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            textAlign="${this.textAlign}"
            type="text"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            aria-invalid="${""!==this.error}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputText}"
          />
          <span
            class="kuc-mobile-text-1-7-0__input-form__suffix"
            ?hidden="${!this.suffix}"
            >${this.suffix}</span
          >
        </div>
        <kuc-base-mobile-error-1-7-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-7-0>
      `}}ji([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),ji([re({type:String})],e.prototype,"error",void 0),ji([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),ji([re({type:String})],e.prototype,"label",void 0),ji([re({type:String})],e.prototype,"placeholder",void 0),ji([re({type:String})],e.prototype,"prefix",void 0),ji([re({type:String})],e.prototype,"suffix",void 0),ji([re({type:String})],e.prototype,"textAlign",void 0),ji([re({type:String})],e.prototype,"value",void 0),ji([re({type:Boolean})],e.prototype,"disabled",void 0),ji([re({type:Boolean})],e.prototype,"requiredIcon",void 0),ji([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-text-1-7-0",e),ke('\nkuc-mobile-text-1-7-0 {\n  display: block;\n  font-size: 13px;\n  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-text-1-7-0:lang(zh),\nkuc-mobile-text-1-7-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-text-1-7-0:lang(zh-TW),\nkuc-mobile-text-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-text-1-7-0[hidden] {\n  display: none;\n}\n.kuc-mobile-text-1-7-0__label {\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.5;\n  padding: 0;\n  margin: 0 0 4px 0;\n  white-space: nowrap;\n}\n.kuc-mobile-text-1-7-0__label[hidden] {\n  display: none;\n}\n.kuc-mobile-text-1-7-0__input-form {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  display: flex;\n  align-items: center;\n}\n.kuc-mobile-text-1-7-0__input-form__prefix {\n  margin-right: 4px;\n  color: #888888;\n}\n.kuc-mobile-text-1-7-0__input-form__prefix[hidden] {\n  display: none;\n}\n.kuc-mobile-text-1-7-0__input-form__input {\n  width: 100%;\n  min-width: 20px;\n  padding: 0.4em;\n  border: 1px solid #b3b3b3;\n  outline: 0;\n  box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;\n  border-radius: 0.4em;\n  box-sizing: border-box;\n  text-align: left;\n}\n.kuc-mobile-text-1-7-0__input-form__input[aria-required="true"] {\n  border: 1px solid #cf4a38;\n}\n.kuc-mobile-text-1-7-0__input-form__input[textAlign="right"] {\n  text-align: right;\n}\n.kuc-mobile-text-1-7-0__input-form__input:disabled {\n  color: #999999;\n  background-color: #d5d7d9;\n  -webkit-text-fill-color: #999999;\n  opacity: 1;\n  -webkit-opacity: 1;\n}\n.kuc-mobile-text-1-7-0__input-form__suffix {\n  margin-left: 4px;\n  color: #888888;\n}\n.kuc-mobile-text-1-7-0__input-form__suffix[hidden] {\n  display: none;\n}\n'),Gi=e}})();var Fi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Wi;(()=>{if(Wi=window.customElements.get("kuc-mobile-textarea-1-7-0"),!Wi){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=xe();const t=mt(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};ye(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,ye(this,"change",i)}_handleInputTextArea(e){e.stopPropagation();const t={value:e.target.value,data:e.data};ye(this,"input",t)}render(){return N`
        <label
          class="kuc-mobile-textarea-1-7-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-7-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-7-0>
        </label>
        <div class="kuc-mobile-textarea-1-7-0__form">
          <textarea
            class="kuc-mobile-textarea-1-7-0__form__textarea"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            .value="${this.value}"
            aria-invalid="${""!==this.error}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputTextArea}"
          /></textarea>
        </div>
        <kuc-base-mobile-error-1-7-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-7-0>
      `}}Fi([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Fi([re({type:String})],e.prototype,"error",void 0),Fi([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Fi([re({type:String})],e.prototype,"label",void 0),Fi([re({type:String})],e.prototype,"placeholder",void 0),Fi([re({type:String})],e.prototype,"value",void 0),Fi([re({type:Boolean})],e.prototype,"disabled",void 0),Fi([re({type:Boolean})],e.prototype,"requiredIcon",void 0),Fi([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-textarea-1-7-0",e),ke('\n  kuc-mobile-textarea-1-7-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-textarea-1-7-0:lang(zh),\n  kuc-mobile-textarea-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-textarea-1-7-0:lang(zh-TW),\n  kuc-mobile-textarea-1-7-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-textarea-1-7-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-textarea-1-7-0__label {\n    padding: 0;\n    margin: 0 0 4px 0;\n    display: inline-block;\n    font-weight: bold;\n    line-height: 1.5;\n    white-space: nowrap;\n  }\n  .kuc-mobile-textarea-1-7-0__label[hidden] {\n    display: none;\n  }\n  .kuc-mobile-textarea-1-7-0__form {\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n  .kuc-mobile-textarea-1-7-0__form__textarea {\n    width: 100%;\n    height: 120px;\n    padding: 0.4em;\n    border: 1px solid #b3b3b3;\n    outline: 0;\n    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;\n    border-radius: 0.4em;\n    box-sizing: border-box;\n    vertical-align: top;\n  }\n  .kuc-mobile-textarea-1-7-0__form__textarea[aria-required="true"] {\n    border: 1px solid #cf4a38;\n  }\n  .kuc-mobile-textarea-1-7-0__form__textarea:disabled {\n    color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),Wi=e}})();var qi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ki;(()=>{if(Ki=window.customElements.get("kuc-mobile-notification-1-7-0"),!Ki){class e extends ve{constructor(e){super(),this.className="",this.text="",this.duration=-1,this._isOpened=!1;const t=mt(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return P`
      <svg
        height="12"
        width="12"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"/>
          </g>
        </svg>
      `}_setAutoCloseTimer(){!Number.isFinite(this.duration)||this.duration<0||(this._clearAutoCloseTimer(),this._timeoutID=window.setTimeout((()=>{this.close()}),this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){document.body.appendChild(this),this.performUpdate(),this.classList.remove("kuc-mobile-notification-fadeout-1-7-0"),this.classList.add("kuc-mobile-notification-fadein-1-7-0"),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._isOpened=!1,this.classList.remove("kuc-mobile-notification-fadein-1-7-0"),this.classList.add("kuc-mobile-notification-fadeout-1-7-0"),this._clearAutoCloseTimer(),ye(this,"close")}render(){return N`
        <div class="kuc-mobile-notification-1-7-0__notification">
          <pre
            class="kuc-mobile-notification-1-7-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?"alert":""}"
          ><!---->${this.text}</pre>
          <button
            class="kuc-mobile-notification-1-7-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}qi([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),qi([re({type:String})],e.prototype,"text",void 0),qi([re({type:Number})],e.prototype,"duration",void 0),qi([le()],e.prototype,"_isOpened",void 0),window.customElements.define("kuc-mobile-notification-1-7-0",e),ke('\n  kuc-mobile-notification-1-7-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n    position: relative;\n    top: -100px;\n    left: 0;\n  }\n\n  kuc-mobile-notification-1-7-0:lang(zh),\n  kuc-mobile-notification-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-notification-1-7-0:lang(zh-TW),\n  kuc-mobile-notification-1-7-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  .kuc-mobile-notification-fadein-1-7-0 {\n    animation-name: kuc-mobile-notification-fade-in-1-7-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n    width: 100%;\n    position: fixed;\n    visibility: visible;\n  }\n\n  .kuc-mobile-notification-fadeout-1-7-0 {\n    animation-name: kuc-mobile-notification-fade-out-1-7-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n    width: 100%;\n    position: fixed;\n  }\n\n  .kuc-mobile-notification-1-7-0__notification {\n    background-color: #ffffcf;\n    background: linear-gradient(#ffda4a, #ffc32c);\n    width: 100%;\n    min-height: 48px;\n    z-index: 20;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 14px;\n    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;\n    color: #333333;\n    text-align: center;\n    vertical-align: top;\n  }\n\n  .kuc-mobile-notification-1-7-0__notification__title {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 17px 44px 11px 44px;\n    margin: 0 0 0 -20px;\n    text-align: left;\n    font-weight: inherit;\n    font-family: inherit;\n    word-break: break-word;\n    white-space: pre-wrap;\n  }\n\n  .kuc-mobile-notification-1-7-0__notification__close-button {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 44px;\n    height: 48px;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    vertical-align: middle;\n    pointer-events: auto;\n    outline: none;\n  }\n  @keyframes kuc-mobile-notification-fade-in-1-7-0 {\n    0% {\n      top: -100px;\n      left: 0;\n    }\n    50% {\n      top: -50px;\n      left: 0;\n    }\n    100% {\n      top: 0;\n      left: 0;\n    }\n  }\n  @keyframes kuc-mobile-notification-fade-out-1-7-0 {\n    0% {\n      visibility: visible;\n      top: 0;\n      left: 0;\n    }\n    50% {\n      visibility: visible;\n      top: -50px;\n      left: 0;\n    }\n    100% {\n      top: -100px;\n      left: 0;\n    }\n  }\n'),Ki=e}})();var Yi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Ji extends ve{constructor(){super(...arguments),this.language="en",this.month=1,this.year=2021,this._locale=at("en")}update(e){e.has("language")&&(this._locale=at(this.language)),this._monthOptions=this._generateMonthOptions(),this._yearOptions=this._generateYearOptions(),super.update(e)}render(){return N`
      <div class="kuc-base-mobile-datetime-calendar-header-1-7-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-7-0__group__button kuc-base-mobile-datetime-calendar-header-1-7-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
        >
          ${this._getLeftArrowIconSvgTemplate()}
        </button>
        <div class="kuc-base-mobile-datetime-calendar-header-1-7-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-7-0__group__button kuc-base-mobile-datetime-calendar-header-1-7-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${this._getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `}updated(e){e.has("month")&&this._setSelectMonthWidth(this.month),e.has("year")&&this._setYearSelectedIndex(),super.update(e)}_setSelectMonthWidth(e){const t=this._monthOptions[e-1].label;if(!t)return;const i=document.createElement("span");i.innerText=t;const n=jt(i);this._selectMonthEl.selectedIndex=this.month-1,this._selectMonthEl.style.width=n+35+"px"}_setYearSelectedIndex(){this.year<100?this._selectYearEl.selectedIndex=this.year:this._selectYearEl.selectedIndex=100}_generateMonthOptions(){return this._locale.MONTH_SELECT.map(((e,t)=>({value:`${t+1}`,label:`${e}`})))}_generateYearOptions(){return this._getYearOptions().map((e=>({value:`${e}`,label:`${e}${this._locale.YEAR_SELECT_POSTFIX}`})))}_getYearOptions(){const e=[];Number.isInteger(this.year)||(this.year=(new Date).getFullYear());let t=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(t>=i&&(t=i-100);t<=i;t++)e.push(t);return e}_getYearMonthTemplate(){return"zh"===this.language||"ja"===this.language||"zh-TW"===this.language?N` ${this._getYearTemplate()}${this._getMonthTemplate()} `:N` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleChangeMonthDropdown(e){e.stopPropagation(),e.preventDefault();const t=e.target;this.month=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleChangeYearDropdown(e){e.stopPropagation(),e.preventDefault();const t=e.target;this.year=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),1===this.month?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),12===this.month?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const e=this.year,t=this.month;ye(this,"kuc:mobile-calendar-header-change",{value:`${e}-${t}`})}_getOptionsMonthTemplate(){return this._monthOptions.map((e=>N`
          <option
            ?selected="${parseInt(e.value,10)===this.month}"
            value="${e.value}"
          >
            ${e.label}
          </option>
        `))}_getOptionsYearTemplate(){return this._yearOptions.map((e=>N`
          <option
            ?selected="${parseInt(e.value,10)===this.year}"
            value="${e.value}"
          >
            ${e.label}
          </option>
        `))}_getMonthTemplate(){return N`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__month"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__month__select"
          @change="${this._handleChangeMonthDropdown}"
        >
          ${this._getOptionsMonthTemplate()}
        </select>
      </div>
    `}_getYearTemplate(){return N`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__year"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__year__select"
          @change="${this._handleChangeYearDropdown}"
        >
          ${this._getOptionsYearTemplate()}
        </select>
      </div>
    `}_getLeftArrowIconSvgTemplate(){return P`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.70788 11.9567C9.0984 12.3472 9.0984 12.9804 8.70788 13.3709C8.31735 13.7614 7.68419 13.7614 7.29366 13.3709L2.34392 8.42118L0.929703 7.00696L2.34392 5.59275L7.29366 0.643003C7.68419 0.25248 8.31735 0.25248 8.70788 0.643003C9.0984 1.03353 9.0984 1.66669 8.70788 2.05722L4.68709 6.07801L14.0718 6.07801C14.6241 6.07801 15.0718 6.52572 15.0718 7.07801C15.0718 7.63029 14.6241 8.07801 14.0718 8.07801L4.82917 8.07801L8.70788 11.9567Z"
        fill="#206694"
      />
    </svg>`}_getRightArrowIconSvgTemplate(){return P`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29396 2.0572C6.90344 1.66668 6.90344 1.03351 7.29396 0.642991C7.68449 0.252466 8.31765 0.252467 8.70817 0.642991L13.6579 5.59274L15.0721 7.00695L13.6579 8.42117L8.70817 13.3709C8.31765 13.7614 7.68448 13.7614 7.29396 13.3709C6.90344 12.9804 6.90344 12.3472 7.29396 11.9567L11.3148 7.93591L1.93 7.93591C1.37772 7.93591 0.93 7.48819 0.93 6.93591C0.93 6.38362 1.37772 5.93591 1.93 5.93591L11.1727 5.93591L7.29396 2.0572Z"
        fill="#206694"
      />
    </svg>`}}Yi([re({type:String,attribute:"lang",reflect:!0})],Ji.prototype,"language",void 0),Yi([re({type:Number,hasChanged(e){return(t=e)>0&&t<13;var t}})],Ji.prototype,"month",void 0),Yi([re({type:Number,hasChanged(e){return(t=e)>=0&&t<1e4;var t}})],Ji.prototype,"year",void 0),Yi([le()],Ji.prototype,"_monthOptions",void 0),Yi([le()],Ji.prototype,"_yearOptions",void 0),Yi([ue(".kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__month__select")],Ji.prototype,"_selectMonthEl",void 0),Yi([ue(".kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__year__select")],Ji.prototype,"_selectYearEl",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-header-1-7-0")||(ke('\nkuc-base-mobile-datetime-calendar-header-1-7-0,\nkuc-base-mobile-datetime-calendar-header-1-7-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-header-1-7-0:lang(zh),\nkuc-base-mobile-datetime-calendar-header-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-header-1-7-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-header-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    border-bottom: 1px solid #e3e7e8;\n    padding: 0;\n    white-space: nowrap;\n}\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    min-width: 40px;\n    width: 40px;\n    height: 40px;\n    overflow: hidden;\n    text-indent: 100%;\n    white-space: nowrap;\n    word-wrap: normal;\n    cursor: pointer;\n    -webkit-appearance: button;\n}\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__button-icon {\n    vertical-align: middle;\n}\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__button:focus {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__center {\n    text-align: center;\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    min-width: 186px;\n}\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__center\n    > :first-child {\n    padding-left: 13px;\n}\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__month,\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__year {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__month__select,\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__year__select {\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0 22.4px 0 0;\n    line-height: 40px;\n    border: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: url("data:image/svg+xml,%3Csvg%0A%20%20%20%20width%3D%2211%22%0A%20%20%20%20height%3D%226%22%0A%20%20%20%20viewBox%3D%220%200%2011%206%22%0A%20%20%20%20fill%3D%22none%22%0A%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill-rule%3D%22evenodd%22%0A%20%20%20%20%20%20clip-rule%3D%22evenodd%22%0A%20%20%20%20%20%20d%3D%22M5.5061%206L0%200L11%200L5.5061%206Z%22%0A%20%20%20%20%20%20fill%3D%22%234b4b4b%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E")\n    no-repeat center right 0.6em #ffffff;\n}\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__month__select:focus,\n.kuc-base-mobile-datetime-calendar-header-1-7-0__group__center__year__select:focus {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-header-1-7-0__month {\n    margin: 0 4px 0 4px;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-header-1-7-0",Ji));var Zi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Xi extends ve{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=at("en"),this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}update(e){if(e.forEach(((e,t)=>{"language"===t&&(this._locale=at(this.language))})),e.has("month")&&(this._month=this.month),e.has("year")&&(this._year=this.year),e.has("value")){const{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return N`
      <table class="kuc-base-mobile-datetime-calendar-body-1-7-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}_handleClickDocument(){ye(this,"kuc:mobile-calendar-body-blur",{})}_handleClickDate(e){e.preventDefault(),e.stopPropagation();const t=e.target;t.setAttribute("aria-selected","true");const i=t.getAttribute("data-date");this._dispatchClickEvent(i)}_dispatchClickEvent(e){const t={oldValue:this.value,value:e};ye(this,"kuc:mobile-calendar-body-click-date",t),this.value=e}_isToday(e){const t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_separateDateValue(e=this.value){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}_getDateClass(e,t){return t?this._isToday(e)?" kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--today":"":" kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--other-month"}_isSameDayOfMoment(e){const t=parseInt(e[1],10),i=parseInt(e[2],10),n=parseInt(e[0],10);let o=(new Date).getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(o=new Date(this.value).getDate()),o===i&&t===this._month)return!0;const a=new Date(n,this._month,0).getDate();return o>a&&a===i&&t===this._month}_getHeaderItemsTemplate(){return N`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map((e=>N`
              <th
                class="kuc-base-mobile-datetime-calendar-body-1-7-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `))}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){const e=je(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return N`
      <tbody>
        ${e.map((e=>N`
            <tr>
              ${e.map((e=>{const i=e.text.split("-"),n=this._isSameDayOfMoment(i),o=parseInt(i[1],10)===this._month,a=(this.value===e.attr||n)&&o;return N`
                  <td
                    role="gridcell"
                    tabindex="${a?0:-1}"
                    aria-selected="${this.value===e.attr}"
                    aria-current="${!!this._isToday(i)&&"date"}"
                    class="kuc-base-mobile-datetime-calendar-body-1-7-0__table__date${a?"--selected":""}${this._getDateClass(i,o)}"
                    data-date="${e.attr}"
                    aria-label="${i[2]} ${t}"
                    @click="${this._handleClickDate}"
                  >
                    ${i[2]||""}
                  </td>
                `}))}
            </tr>
          `))}
      </tbody>
    `}}Zi([re({type:Number})],Xi.prototype,"month",void 0),Zi([re({type:Number})],Xi.prototype,"year",void 0),Zi([re({type:String,attribute:"lang",reflect:!0})],Xi.prototype,"language",void 0),Zi([re({type:String,reflect:!0})],Xi.prototype,"value",void 0),Zi([le()],Xi.prototype,"_month",void 0),Zi([le()],Xi.prototype,"_year",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-body-1-7-0")||(ke('\nkuc-base-mobile-datetime-calendar-body-1-7-0,\nkuc-base-mobile-datetime-calendar-body-1-7-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-body-1-7-0:lang(zh),\nkuc-base-mobile-datetime-calendar-body-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-body-1-7-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-body-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table,\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table tr {\n    border-collapse: separate;\n    border-spacing: 0;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--selected {\n    border-spacing: 1px;\n    padding: 0px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date {\n    max-width: 40px;\n    border-spacing: 1px;\n    cursor: pointer;\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    border: 1px solid #ffffff;\n    text-align: center;\n    vertical-align: middle;\n    user-select: none;\n    color: #333333;\n    font-size: 14px;\n    font-weight: 400;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-7-0__table__date__button {\n    border-spacing: 1px;\n    cursor: pointer;\n    box-sizing: border-box;\n    text-align: center;\n    vertical-align: middle;\n    color: #333333;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date,\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--selected,\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__header {\n    box-sizing: border-box;\n    height: 40px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-weight: 400;\n    font-size: 12px;\n    color: #333333;\n    padding: 0;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date {\n    font-size: 14px;\n}\nth.kuc-base-mobile-datetime-calendar-body-1-7-0__table__header {\n    font-weight: 700;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-7-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-7-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__header {\n    box-sizing: border-box;\n    border: 1px solid #ffffff;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-7-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-7-0__table__date__button {\n    background: none;\n    cursor: pointer;\n    max-width: 40px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--selected {\n    border: 1px solid #206694;\n    box-sizing: border-box;\n    text-align: center;\n    font-size: 14px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-7-0__table__date__button {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-7-0__table__date__button:focus-visible {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--today {\n    color: #333333;\n    background: #d8d8d8;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--other-month {\n    color: #a5a5a5;\n}\n.kuc-base-mobile-datetime-calendar-body-1-7-0__table__date--selected:focus {\n    outline: none;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-body-1-7-0",Xi));var Qi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class en extends ve{constructor(){super(...arguments),this.language="en",this._locale=at("en")}update(e){e.has("language")&&(this._locale=at(this.language)),super.update(e)}_handleClickCalendarFooterButtonClose(e){e.stopPropagation(),ye(this,"kuc:mobile-calendar-footer-click-close")}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),ye(this,"kuc:mobile-calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),ye(this,"kuc:mobile-calendar-footer-click-today")}render(){return N`
      <div class="kuc-base-mobile-datetime-calendar-footer-1-7-0__group">
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-7-0__group__button kuc-base-mobile-datetime-calendar-footer-1-7-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-7-0__group__button kuc-base-mobile-datetime-calendar-footer-1-7-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-7-0__group__button kuc-base-mobile-datetime-calendar-footer-1-7-0__group__button--close"
          @click="${this._handleClickCalendarFooterButtonClose}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.close}
        </button>
      </div>
    `}}Qi([re({type:String,attribute:"lang",reflect:!0})],en.prototype,"language",void 0),Qi([le()],en.prototype,"_locale",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-footer-1-7-0")||(ke('\nkuc-base-mobile-datetime-calendar-footer-1-7-0,\nkuc-base-mobile-datetime-calendar-footer-1-7-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-footer-1-7-0:lang(zh),\nkuc-base-mobile-datetime-calendar-footer-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-footer-1-7-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-footer-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n.kuc-base-mobile-datetime-calendar-footer-1-7-0__group {\n    display: flex;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 0;\n    white-space: nowrap;\n}\n.kuc-base-mobile-datetime-calendar-footer-1-7-0__group__button {\n    background: transparent;\n    border: 1px solid transparent;\n    color: #206694;\n    height: 40px;\n    cursor: pointer;\n    font-size: 14px;\n    outline: none;\n    padding: 0;\n    margin: 0;\n    font-weight: 700;\n}\n.kuc-base-mobile-datetime-calendar-footer-1-7-0__group__center {\n    width: 100%;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-footer-1-7-0",en));var tn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class nn extends ve{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=2021}update(e){e.has("value")&&this._updateValue(),super.update(e)}render(){return N`
      <div
        class="kuc-base-mobile-datetime-calendar-1-7-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
      >
        <kuc-base-mobile-datetime-calendar-header-1-7-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:mobile-calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-mobile-datetime-calendar-header-1-7-0>
        <kuc-base-mobile-datetime-calendar-body-1-7-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-body-1-7-0>
        <kuc-base-mobile-datetime-calendar-footer-1-7-0
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-footer-1-7-0>
      </div>
    `}updated(e){super.updated(e)}_handleClickCalendarGroup(e){e.stopPropagation()}_handleCalendarHeaderChange(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_updateValue(){""===this.value&&(this.value=tt().slice(0,7)+"-01");const{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){const t=e.split("-");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}}tn([re({type:String,attribute:"lang",reflect:!0})],nn.prototype,"language",void 0),tn([re({type:String,reflect:!0})],nn.prototype,"value",void 0),tn([le()],nn.prototype,"_month",void 0),tn([le()],nn.prototype,"_year",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-1-7-0")||(ke("\n.kuc-base-mobile-datetime-calendar-1-7-0__group {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 290px;\n    padding: 0 10px;\n    background: #ffffff;\n    text-align: center;\n    font-size: 13px;\n    border: 1px solid #d8d8d8;\n}\n"),window.customElements.define("kuc-base-mobile-datetime-calendar-1-7-0",nn));var on=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class an extends ve{constructor(){super(...arguments),this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._calendarValue="",this._inputValue=""}update(e){e.has("inputId")&&(this._GUID=this.inputId),(e.has("value")||e.has("language"))&&this._updateValueProp(),super.update(e)}render(){return N`
      <div class="kuc-mobile-base-date-1-7-0__group${this._getGroupClass()}">
        <input
          class="kuc-mobile-base-date-1-7-0__group__input"
          type="text"
          id="${this._GUID}-label"
          readonly="readonly"
          .value="${this._inputValue}"
          aria-label="Date"
          aria-describedby="${this._GUID}-error"
          aria-invalid="${this.inputAriaInvalid}"
          aria-required="${this.required}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickOpenCalendar}"
        />
        <button
          type="button"
          class="kuc-mobile-base-date-1-7-0__group__button"
          aria-label="calendar"
          @click="${this._handleClickOpenCalendar}"
          ?disabled="${this.disabled}"
        >
          ${this._getCalendarIconTemplate()}
        </button>
        ${this._getCalendarTemplate()}
      </div>
    `}updated(e){this._dateTimeCalendarVisible&&this._setCalendarPosition(),super.updated(e)}_setCalendarPosition(){const{inputToBottom:e,inputToTop:t}=ut(this),i=this._inputEl.getBoundingClientRect().height;e>=t||(this._calendarEl.style.bottom=i+2+"px",this._calendarEl.style.top="auto")}_getGroupClass(){let e="";return this.disabled&&(e+=" kuc-mobile-base-date-1-7-0__group--disabled"),this.required&&(e+=" kuc-mobile-base-date-1-7-0__group--required"),e}_handleClickOpenCalendar(e){if(this._dateTimeCalendarVisible)return e.preventDefault(),void e.stopPropagation();this._calendarValue=this._getNewCalendarValue(this._inputValue||""),this._openCalendar()}_updateValueProp(){if(this.value)return this._inputValue=Xe(this.language,this.value),void(this._calendarValue=this.value);const e=tt();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)}_getNewCalendarValue(e){if(it(this.language,e))return Qe(this.language,e);let t=this._calendarValue.slice(0,7);return""===e&&(t=this._calendarValue.slice(0,7)+"-01"),t}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,ye(this,"kuc:mobile-base-date-change",e.detail),this._btnToggleEl.focus())}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._inputValue="";let e=this.value?this.value.slice(0,7)+"-01":"";e||(e=this._calendarValue.slice(0,7)+"-01"),this._calendarValue=e,this._dispathDateChangeCustomEvent("")}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const e=tt();this._dispathDateChangeCustomEvent(e)}_handleClickCalendarFooterButtonClose(){this._closeCalendar(),this._btnToggleEl.focus()}_handleCalendarBlurBody(e){e.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(e){const t={value:e,oldValue:this.value};this.value=e,ye(this,"kuc:mobile-base-date-change",t),this._btnToggleEl.focus()}_getCalendarTemplate(){return this._dateTimeCalendarVisible?N`
          <kuc-base-mobile-datetime-calendar-1-7-0
            class="kuc-base-mobile-date-1-7-0__calendar"
            .language="${this.language}"
            .value="${this._calendarValue}"
            ?hidden="${!this._dateTimeCalendarVisible}"
            @kuc:mobile-calendar-body-click-date="${this._handleClickCalendarClickDate}"
            @kuc:mobile-calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
            @kuc:mobile-calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
            @kuc:mobile-calendar-footer-click-close="${this._handleClickCalendarFooterButtonClose}"
            @kuc:mobile-calendar-body-blur="${this._handleCalendarBlurBody}"
          >
          </kuc-base-mobile-datetime-calendar-1-7-0>
        `:""}_getCalendarIconTemplate(){return N`
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C9.44772 4 9 4.44772 9 5V6H6C4.89543 6 4 6.89543 4 8V21C4 22.1046 4.89543 23 6 23H22C23.1046 23 24 22.1046 24 21V8C24 6.89543 23.1046 6 22 6H19V5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5V6H11V5C11 4.44772 10.5523 4 10 4ZM9 8V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V8H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V8H22V11H6V8H9ZM6 13V21H22V13H6Z"
          fill="#4b4b4b"
        />
      </svg>
    `}}on([re({type:String})],an.prototype,"inputId",void 0),on([re({type:String,attribute:"lang",reflect:!0})],an.prototype,"language",void 0),on([re({type:String,reflect:!0})],an.prototype,"value",void 0),on([re({type:Boolean})],an.prototype,"disabled",void 0),on([re({type:Boolean})],an.prototype,"inputAriaInvalid",void 0),on([re({type:Boolean})],an.prototype,"required",void 0),on([ue(".kuc-mobile-base-date-1-7-0__group__button")],an.prototype,"_btnToggleEl",void 0),on([ue(".kuc-mobile-base-date-1-7-0__group__input")],an.prototype,"_inputEl",void 0),on([ue(".kuc-base-mobile-date-1-7-0__calendar")],an.prototype,"_calendarEl",void 0),on([le()],an.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-mobile-base-date-1-7-0")||(ke('\nkuc-mobile-base-date-1-7-0,\nkuc-mobile-base-date-1-7-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-base-date-1-7-0:lang(zh),\nkuc-mobile-base-date-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-base-date-1-7-0:lang(zh-TW),\nkuc-mobile-base-date-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n.kuc-mobile-base-date-1-7-0__group {\n    display: flex;\n    align-items: center;\n    position: relative;\n    border-radius: 5.148px;\n    background-color: #ffffff;\n}\n.kuc-mobile-base-date-1-7-0__group__input[aria-required="true"] {\n    border-color: #cf4a38;\n}\ninput.kuc-mobile-base-date-1-7-0__group__input {\n    color: #000000;\n    width: 100%;\n    height: 31.28px;\n    font-size: 99%;\n    -webkit-flex-grow: 1;\n    flex-grow: 1;\n    padding: 5.148px;\n    border-radius: 5.148px;\n    box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;\n    border: 1px solid #b3b3b3;\n    font-weight: 400;\n    -webkit-appearance: none;\n    appearance: none;\n    outline: 0;\n    background: transparent;\n    box-sizing: border-box;\n}\n.kuc-mobile-base-date-1-7-0__group--disabled {\n    background-color: #d5d7d9;\n    opacity: 1;\n}\n.kuc-mobile-base-date-1-7-0__group--disabled input {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n}\n.kuc-base-mobile-date-1-7-0__calendar {\n    position: absolute;\n    left: 0;\n    top: 39px;\n    z-index: 1000;\n}\n.kuc-mobile-base-date-1-7-0__group__button {\n    position: absolute;\n    display: flex;\n    right: 10px;\n    background-color: transparent;\n    border: 0;\n    padding: 0;\n    height: 100%;\n    align-items: center;\n}\n'),window.customElements.define("kuc-mobile-base-date-1-7-0",an));var sn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let rn;(()=>{if(rn=window.customElements.get("kuc-mobile-date-picker-1-7-0"),!rn){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._dateConverted="",this._inputValue="",this._GUID=xe();const t=mt(e);Object.assign(this,t)}shouldUpdate(e){return!(void 0!==this.value&&""!==this.value&&(gt(this.value)?(this._dateConverted=_t(this.value),""!==this._dateConverted&&!kt(this._dateConverted)&&(Et(this,Pe),1)):(Et(this,Pe),1)))}willUpdate(e){e.has("value")&&void 0!==this.value&&""!==this.value&&(this.value=this._dateConverted)}update(e){e.has("value")&&this._updateInputValue(),super.update(e)}render(){return N`
        <div class="kuc-mobile-date-picker-1-7-0__group">
          <label
            class="kuc-mobile-date-picker-1-7-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-7-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-7-0>
          </label>
          <kuc-mobile-base-date-1-7-0
            class="kuc-mobile-date-picker-1-7-0__group__base__date"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${""!==this.error}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date-1-7-0>
          <kuc-base-mobile-error-1-7-0 .guid="${this._GUID}" .text="${this.error}">
          </kuc-base-mobile-error-1-7-0>
        </div>
      `}_updateInputValue(){void 0!==this.value&&""!==this.value?this._inputValue=this.value:this._inputValue=""}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const t={oldValue:this.value,value:""};this.value=e.detail.value,t.value=this.value,this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){ye(this,"change",e)}}sn([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),sn([re({type:String})],e.prototype,"error",void 0),sn([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),sn([re({type:String})],e.prototype,"label",void 0),sn([re({type:Boolean})],e.prototype,"disabled",void 0),sn([re({type:Boolean})],e.prototype,"requiredIcon",void 0),sn([re({type:String,attribute:"lang",reflect:!0,converter:ht})],e.prototype,"language",void 0),sn([re({type:String})],e.prototype,"value",void 0),sn([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),sn([le()],e.prototype,"_inputValue",void 0),window.customElements.define("kuc-mobile-date-picker-1-7-0",e),ke('\nkuc-mobile-date-picker-1-7-0,\nkuc-mobile-date-picker-1-7-0 * {\n  color: #333333;\n  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-date-picker-1-7-0:lang(zh),\nkuc-mobile-date-picker-1-7-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-date-picker-1-7-0:lang(zh-TW),\nkuc-mobile-date-picker-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-date-picker-1-7-0 {\n  font-size: 13px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  width: 100%;\n}\nkuc-mobile-date-picker-1-7-0[hidden] {\n  display: none;\n}\n.kuc-mobile-date-picker-1-7-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-mobile-date-picker-1-7-0__group__label {\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.5;\n  padding: 0px;\n  white-space: nowrap;\n  margin: 0 0 4px 0;\n}\n.kuc-mobile-date-picker-1-7-0__group__base__date {\n  width: 130px;\n  margin-right: 0.5em;\n  margin-left: 0.5em;\n}\n.kuc-mobile-date-picker-1-7-0__group__label[hidden] {\n  display: none;\n}\n.kuc-mobile-date-picker-1-7-0__group input.kuc-base-date-1-7-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\n.kuc-mobile-date-picker-1-7-0__group input.kuc-base-date-1-7-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-mobile-date-picker-1-7-0__group input.kuc-base-date-1-7-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-mobile-date-picker-1-7-0__group input.kuc-base-date-1-7-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n'),rn=e}})();var ln=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class dn extends ve{constructor(e){super(),this.guid="",this.language="en",this.value="",this.disabled=!1,this.hour12=!1,this.required=!1,this._timeStep=1,this._hours="",this._minutes="",this._suffix="",this._locale=at("en");const t=mt(e);Object.assign(this,t)}update(e){e.has("language")&&(this._locale=at(this.language)),e.has("hour12")&&(this._hourOptions=((e=!1)=>e?st("AM").concat(st("PM")):(()=>{const e=[];e.push({value:"00",label:"00"});for(let t=1;t<=23;t++)e.push({value:nt(t),label:`${nt(t)}`});return e})())(this.hour12)),e.has("_timeStep")&&(this._minuteOptions=((e=1)=>{const t=[];for(let i=0;i<=59;i+=e)t.push({value:nt(i),label:nt(i)});return t})(this._timeStep)),super.update(e)}render(){return N`
      <fieldset
        class="kuc-base-mobile-time-1-7-0__group${this.disabled?" kuc-base-mobile-time-1-7-0__group--disabled":""}${this.required?" kuc-base-mobile-time-1-7-0__group--required":""}"
        aria-label="label-text"
      >
        <select
          class="kuc-base-mobile-time-1-7-0__group__hours"
          aria-label="Hour"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeHours}"
        >
          <option value selected></option>
          ${this._getOptionsHourTemplate()}
        </select>
        <span class="kuc-base-mobile-time-1-7-0__group__colon">:</span>
        <select
          class="kuc-base-mobile-time-1-7-0__group__minutes"
          aria-label="Minute"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeMinutes}"
        >
          <option value selected></option>
          ${this._getOptionsMinuteTemplate()}
        </select>
      </fieldset>
    `}updated(e){e.has("value")&&this._updateInputValue(),super.update(e)}_updateInputValue(){const e=((e,t)=>{const i={hours:"",minutes:"",suffix:""},n=e.split(":"),o=parseInt(n[0],10),a=parseInt(n[1],10),s=o%Ae;return isNaN(s)||(i.hours=nt(t?qe(s):s),i.suffix=t?Ke(s):""),isNaN(a)||(i.minutes=nt(a)),i})(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||"",this._setValueToInput(e)}_setValueToInput(e){this._minutesEl.value=e.minutes,e.suffix?this._hoursEl.value=e.suffix+" "+e.hours:this._hoursEl.value=e.hours}_handleChangeMinutes(e){e.preventDefault(),e.stopPropagation();const t=this._getTimeValueString(),i=e.target.value;this._minutes=i;const n=this._getTimeValueString();this.value=n,this._dispatchEventTimeChange(n,t)}_handleChangeHours(e){e.preventDefault(),e.stopPropagation();const t=this._getTimeValueString(),i=e.target.value.split(" ");2===i.length?(this._hours=i[1],this._suffix=i[0]):(this._hours=i[0],this._suffix="");const n=this._getTimeValueString();this.value=n,this._dispatchEventTimeChange(n,t)}_getTimeValueString(){const e=`${this._hours}:${this._minutes}`;return this._suffix?Ye(`${e} ${this._suffix}`):Ye(e)}_dispatchEventTimeChange(e,t){const i=":"===e?"":e,n={value:i,oldValue:":"===t?"":t};n.error=ft(i)?"":this._locale.INVALID_TIME_FORMAT,ye(this,"kuc:base-mobile-time-change",n)}_getOptionsMinuteTemplate(){return this._minuteOptions.map((e=>N` <option value="${e.value}">${e.label}</option> `))}_getOptionsHourTemplate(){return this._hourOptions.map((e=>N` <option value="${e.value}">${e.label}</option> `))}}ln([re({type:String})],dn.prototype,"guid",void 0),ln([re({type:String,attribute:"lang",reflect:!0})],dn.prototype,"language",void 0),ln([re({type:String})],dn.prototype,"value",void 0),ln([re({type:Boolean})],dn.prototype,"disabled",void 0),ln([re({type:Boolean})],dn.prototype,"hour12",void 0),ln([re({type:Boolean})],dn.prototype,"required",void 0),ln([le()],dn.prototype,"_timeStep",void 0),ln([le()],dn.prototype,"_hours",void 0),ln([le()],dn.prototype,"_minutes",void 0),ln([le()],dn.prototype,"_suffix",void 0),ln([le()],dn.prototype,"_hourOptions",void 0),ln([le()],dn.prototype,"_minuteOptions",void 0),ln([ue(".kuc-base-mobile-time-1-7-0__group__hours")],dn.prototype,"_hoursEl",void 0),ln([ue(".kuc-base-mobile-time-1-7-0__group__minutes")],dn.prototype,"_minutesEl",void 0),window.customElements.get("kuc-base-mobile-time-1-7-0")||(ke('\n    kuc-base-mobile-time-1-7-0,\n    kuc-base-mobile-time-1-7-0 * {\n        font-size: 13px;\n        font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n        "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n        "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n    }\n    kuc-base-mobile-time-1-7-0:lang(zh),\n    kuc-base-mobile-time-1-7-0:lang(zh) * {\n        font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n        Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n        Verdana, sans-serif;\n    }\n    kuc-base-mobile-time-1-7-0:lang(zh-TW),\n    kuc-base-mobile-time-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n        Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n        Verdana,sans-serif\n    }\n    kuc-base-mobile-time-1-7-0 {\n        width: 100%;\n        display: inline-block;\n        vertical-align: top;\n    }\n    kuc-base-mobile-time-1-7-0[hidden] {\n        display: none;\n    }\n    .kuc-base-mobile-time-1-7-0__group {\n        padding: 0;\n        margin: 0;\n        height: 31.28px;\n        border: 1px solid #b3b3b3;\n        border-radius: 5.2px;\n        box-sizing: border-box;\n        background-color: #ffffff;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-align-items: center;\n        align-items: center;\n        box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;\n    }\n    .kuc-base-mobile-time-1-7-0__group--required {\n        border-color: #cf4a38;\n    }\n    .kuc-base-mobile-time-1-7-0__group__hours {\n        padding: 5.148px 7.722px;\n    }\n    .kuc-base-mobile-time-1-7-0__group__minutes {\n        padding: 5.148px 7.722px;\n        -webkit-flex-grow: 1;\n        flex-grow: 1;\n    }\n    .kuc-base-mobile-time-1-7-0__group__hours,\n    .kuc-base-mobile-time-1-7-0__group__minutes {\n        font-size: 99%;\n        height: 100%;\n        color: #000000;\n        border: none;\n        border-radius: 5.148px;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background-color: transparent;\n    }\n    .kuc-base-mobile-time-1-7-0__group__colon {\n        color: #000000;\n    }\n    .kuc-base-mobile-time-1-7-0__group__hours:disabled\n        + .kuc-base-mobile-time-1-7-0__group__colon {\n        color: #999999;\n        -webkit-text-fill-color: #999999;\n        opacity: 1;\n    }\n    .kuc-base-mobile-time-1-7-0__group--disabled {\n        color: #999999;\n        -webkit-text-fill-color: #999999;\n        background-color: #d5d7d9;\n        opacity: 1;\n    }\n    .kuc-base-mobile-time-1-7-0__group__hours:disabled,\n    .kuc-base-mobile-time-1-7-0__group__minutes:disabled {\n        color: #999999;\n        -webkit-text-fill-color: #999999;\n        opacity: 1;\n    }\n    .kuc-base-mobile-time-1-7-0__group__hours:focus {\n        outline: none;\n    }\n    .kuc-base-mobile-time-1-7-0__group__minutes:focus {\n        outline: none;\n    }\n'),window.customElements.define("kuc-base-mobile-time-1-7-0",dn));var un=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let cn;(()=>{if(cn=window.customElements.get("kuc-mobile-time-picker-1-7-0"),!cn){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue="",this._errorFormat="",this._isSelectError=!1,this._GUID=xe();const t=mt(e);Object.assign(this,t)}shouldUpdate(e){return void 0===this.value||""===this.value||!!ft(this.value)||(Et(this,Pe),!1)}willUpdate(){void 0!==this.value&&""!==this.value&&(this.value=bt(this.value))}update(e){e.has("value")&&!this._isSelectError&&(void 0===this.value?this._inputValue="":this._inputValue=this.value||"",this._errorFormat=""),super.update(e)}render(){return N`
        <div class="kuc-mobile-time-picker-1-7-0__group">
          <label
            class="kuc-mobile-time-picker-1-7-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-7-0
              .guid="${this._GUID}"
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-7-0>
          </label>
          <div class="kuc-base-mobile-time-1-7-0__group__wrapper">
            <kuc-base-mobile-time-1-7-0
              .value="${this._inputValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-7-0>
          </div>
          <kuc-base-mobile-error-1-7-0
            .guid="${this._GUID}"
            .text="${this._errorFormat||this.error}"
            ariaLive="assertive"
          ></kuc-base-mobile-error-1-7-0>
        </div>
      `}updated(){this._isSelectError=!1}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const t={value:e.detail.value,oldValue:this.value};if(this._inputValue=e.detail.value,e.detail.error)return this._isSelectError=!0,this._errorFormat=e.detail.error,this.value=void 0,t.value=void 0,this.error="",void ye(this,"change",t);this._isSelectError=!1,this._errorFormat="",this.value=e.detail.value,ye(this,"change",t)}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}un([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),un([re({type:String})],e.prototype,"error",void 0),un([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),un([re({type:String})],e.prototype,"label",void 0),un([re({type:String,attribute:"lang",reflect:!0,converter:ht})],e.prototype,"language",void 0),un([re({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),un([re({type:Boolean})],e.prototype,"disabled",void 0),un([re({type:Boolean})],e.prototype,"hour12",void 0),un([re({type:Boolean})],e.prototype,"requiredIcon",void 0),un([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),un([le()],e.prototype,"_inputValue",void 0),un([le()],e.prototype,"_errorFormat",void 0),window.customElements.define("kuc-mobile-time-picker-1-7-0",e),ke('\n    kuc-mobile-time-picker-1-7-0,\n    kuc-mobile-time-picker-1-7-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n        "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n        "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n    }\n    kuc-mobile-time-picker-1-7-0:lang(zh),\n    kuc-mobile-time-picker-1-7-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n        Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n        Verdana, sans-serif;\n    }\n    kuc-mobile-time-picker-1-7-0:lang(zh-TW),\n    kuc-mobile-time-picker-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n        Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n        Verdana,sans-serif\n    }\n    kuc-mobile-time-picker-1-7-0 {\n    font-size: 13px;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    }\n    kuc-mobile-time-picker-1-7-0[hidden] {\n    display: none;\n    }\n    .kuc-mobile-time-picker-1-7-0__group__label {\n    display: inline-block;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n    }\n    .kuc-mobile-time-picker-1-7-0__group__label[hidden] {\n    display: none;\n    }\n    .kuc-base-mobile-time-1-7-0__group__wrapper {\n    padding-left: 0.5em;\n    max-width: 10px;\n    }\n'),cn=e}})();var hn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let pn;(()=>{if(pn=window.customElements.get("kuc-mobile-datetime-picker-1-7-0"),!pn){class e extends ve{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._previousTimeValue="",this._previousDateValue="",this._dateValue="",this._timeValue="",this._errorFormat="",this._errorText="",this._GUID=xe();const t=mt(e);Object.assign(this,t)}shouldUpdate(e){return void 0===this.value||""===this.value||("string"!=typeof this.value?(Et(this,Pe),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=_t(this._dateAndTime.date),!(!St(this._dateAndTime.date,this._dateAndTime.time)||!kt(this._dateConverted))||(Et(this,Pe),!1)))}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueAndErrorWhenUIChange():(this._errorFormat="",this._updateErrorText(),this._updateValueWhenSetter())}update(e){e.has("value")&&(void 0===this.value&&this._setUndefinedValue(),""===this.value&&this._setEmptyValue()),super.update(e)}_updateValueWhenSetter(){this._errorFormat="",""!==this.value&&void 0!==this.value?(this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()):this._previousTimeValue=""}_setDateTimeValueSeparate(e,t){this._dateValue=t,this._timeValue=this._dateValue&&kt(t)?bt(e.time.slice(0,5)):this._previousTimeValue}_updateValueAndErrorWhenUIChange(){const e=this._checkDateTimeFormat();this.value=e?this.value:void 0,this._updateErrorText()}_checkDateTimeFormat(){const e=Boolean(this._timeValue)&&!this._dateValue,t=Boolean(this._dateValue)&&!this._timeValue;return!this._errorFormat&&!e&&!t}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI)return;return this._dateValue="",void(this._timeValue="")}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue=""}_getDateTimeValue(e){if(""===e||void 0===e)return{date:"",time:""};const t=e.split("T"),i=t[0],n=t[1];if(e.indexOf("T")===e.length-1||t.length>2)return{date:i,time:""};if(!n)return{date:i,time:"00:00"};const[o,a,s]=n.split(":"),r=`${o}:${a||"00"}`;return s?{date:i,time:`${r}:${s}`}:{date:i,time:r}}render(){return N`
        <fieldset
          class="kuc-mobile-datetime-picker-1-7-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-mobile-datetime-picker-1-7-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-7-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-7-0>
          </legend>
          <div class="kuc-mobile-datetime-picker-1-7-0__group__input">
            <kuc-mobile-base-date-1-7-0
              class="kuc-mobile-datetime-picker-1-7-0__group__input--date"
              .disabled="${this.disabled}"
              .value="${this._dateValue}"
              .inputId="${this._GUID}"
              .inputAriaInvalid="${""!==this.error}"
              .required="${this.requiredIcon}"
              .language="${this._getLanguage()}"
              @kuc:mobile-base-date-change="${this._handleDateChange}"
            >
            </kuc-mobile-base-date-1-7-0>
            <kuc-base-mobile-time-1-7-0
              class="kuc-mobile-datetime-picker-1-7-0__group__input--time"
              .value="${this._timeValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-7-0>
          </div>
          <kuc-base-mobile-error-1-7-0
            .guid="${this._GUID}"
            .text="${this._errorText}"
          >
          </kuc-base-mobile-error-1-7-0>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleDateChange(e){if(e.stopPropagation(),e.preventDefault(),e.detail.value===this._dateValue)return;this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):t=e.detail.value,this._updateDateTimeValue(t,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=this._timeValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):this._errorFormat="",t=e.detail.value,this._updateDateTimeValue(t,"time")}_updateDateTimeValue(e,t){const i=this.value;"date"===t?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const n=this._errorFormat?void 0:this._getDateTimeString(),o=this._errorFormat?void 0:n;this.value=o;const a=this._errorFormat?void 0:n;this.value=a,ye(this,"change",{value:o,oldValue:i,changedPart:t})}_getDateTimeString(){if(""===this._dateValue&&""===this._timeValue)return"";if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return 3===e.length?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}}hn([re({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),hn([re({type:String})],e.prototype,"error",void 0),hn([re({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),hn([re({type:String})],e.prototype,"label",void 0),hn([re({type:String,attribute:"lang",reflect:!0,converter:ht})],e.prototype,"language",void 0),hn([re({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),hn([re({type:Boolean})],e.prototype,"disabled",void 0),hn([re({type:Boolean})],e.prototype,"hour12",void 0),hn([re({type:Boolean})],e.prototype,"requiredIcon",void 0),hn([re({type:Boolean,attribute:"hidden",reflect:!0,converter:ct})],e.prototype,"visible",void 0),hn([le()],e.prototype,"_dateValue",void 0),hn([le()],e.prototype,"_timeValue",void 0),hn([le()],e.prototype,"_errorFormat",void 0),hn([le()],e.prototype,"_errorText",void 0),window.customElements.define("kuc-mobile-datetime-picker-1-7-0",e),ke('\nkuc-mobile-datetime-picker-1-7-0,\nkuc-mobile-datetime-picker-1-7-0 * {\ncolor: #333333;\nfont-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-datetime-picker-1-7-0:lang(zh),\nkuc-mobile-datetime-picker-1-7-0:lang(zh) * {\nfont-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-datetime-picker-1-7-0:lang(zh-TW),\nkuc-mobile-datetime-picker-1-7-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-datetime-picker-1-7-0 {\nfont-size: 13px;\ncolor: #333333;\ndisplay: inline-table;\nvertical-align: top;\nwidth: 100%;\n}\nkuc-mobile-datetime-picker-1-7-0[hidden] {\ndisplay: none;\n}\n.kuc-mobile-datetime-picker-1-7-0__group {\nborder: 0;\npadding: 0;\n}\n.kuc-mobile-datetime-picker-1-7-0__group__label {\ndisplay: inline-block;\nfont-weight: bold;\nline-height: 1.5;\npadding: 0px;\nwhite-space: nowrap;\nmargin: 0 0 4px 0;\n}\n.kuc-mobile-datetime-picker-1-7-0__group__label[hidden] {\ndisplay: none;\n}\n.kuc-mobile-datetime-picker-1-7-0__group__input {\ndisplay: flex;\nalign-items: center;\nmargin-right: 0.5em;\nmargin-left: 0.5em;\n}\n.kuc-mobile-datetime-picker-1-7-0__group__input--date {\nwidth: 130px;\nmargin-right: 10px;\n}\n.kuc-mobile-datetime-picker-1-7-0__group__input--time {\nmax-width: 10px;\n}\n'),pn=e}})();var _n={d:(e,t)=>{for(var i in t)_n.o(t,i)&&!_n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};_n.d({},{i:()=>bn});const bn="1.7.0";var mn={d:(e,t)=>{for(var i in t)mn.o(t,i)&&!mn.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};mn.d({},{t:()=>gn});const gn=void 0;new Vt({text:"保存",type:"submit",id:"callhistory-submit",visible:!0,disabled:!1});const fn=e=>(e=(e=e.replace(/\\n/g,"\\n").replace(/\\'/g,"\\'").replace(/\\"/g,'\\"').replace(/\\&/g,"\\&").replace(/\\r/g,"\\r").replace(/\\t/g,"\\t").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f")).replace(/[\u0000-\u0019]+/g,""),JSON.parse(e)),vn=window,yn=vn.ShadowRoot&&(void 0===vn.ShadyCSS||vn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kn=Symbol(),xn=new WeakMap;class wn{constructor(e,t,i){if(this._$cssResult$=!0,i!==kn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(yn&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=xn.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&xn.set(t,e))}return e}toString(){return this.cssText}}const $n=yn?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new wn("string"==typeof e?e:e+"",void 0,kn))(t)})(e):e;var Cn;const In=window,Sn=In.trustedTypes,En=Sn?Sn.emptyScript:"",Tn=In.reactiveElementPolyfillSupport,An={toAttribute(e,t){switch(t){case Boolean:e=e?En:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Vn=(e,t)=>t!==e&&(t==t||e==e),Dn={attribute:!0,type:String,converter:An,reflect:!1,hasChanged:Vn};class Ln extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=Dn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Dn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift($n(e))}else void 0!==e&&t.push($n(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{yn?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),n=vn.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Dn){var n;const o=this.constructor._$Ep(e,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:An).toAttribute(t,i.type);this._$El=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,o=n._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=n.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:An;this._$El=o,this[o]=a.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Vn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var Hn;Ln.finalized=!0,Ln.elementProperties=new Map,Ln.elementStyles=[],Ln.shadowRootOptions={mode:"open"},null==Tn||Tn({ReactiveElement:Ln}),(null!==(Cn=In.reactiveElementVersions)&&void 0!==Cn?Cn:In.reactiveElementVersions=[]).push("1.4.1");const Mn=window,Bn=Mn.trustedTypes,On=Bn?Bn.createPolicy("lit-html",{createHTML:e=>e}):void 0,Nn=`lit$${(Math.random()+"").slice(9)}$`,Pn="?"+Nn,zn=`<${Pn}>`,Un=document,Rn=(e="")=>Un.createComment(e),jn=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Gn=Array.isArray,Fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wn=/-->/g,qn=/>/g,Kn=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),Yn=/'/g,Jn=/"/g,Zn=/^(?:script|style|textarea|title)$/i,Xn=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Qn=Xn(1),eo=Xn(2),to=Symbol.for("lit-noChange"),io=Symbol.for("lit-nothing"),no=new WeakMap,oo=Un.createTreeWalker(Un,129,null,!1);class ao{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,a=0;const s=e.length-1,r=this.parts,[l,d]=((e,t)=>{const i=e.length-1,n=[];let o,a=2===t?"<svg>":"",s=Fn;for(let t=0;t<i;t++){const i=e[t];let r,l,d=-1,u=0;for(;u<i.length&&(s.lastIndex=u,l=s.exec(i),null!==l);)u=s.lastIndex,s===Fn?"!--"===l[1]?s=Wn:void 0!==l[1]?s=qn:void 0!==l[2]?(Zn.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=Kn):void 0!==l[3]&&(s=Kn):s===Kn?">"===l[0]?(s=null!=o?o:Fn,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?Kn:'"'===l[3]?Jn:Yn):s===Jn||s===Yn?s=Kn:s===Wn||s===qn?s=Fn:(s=Kn,o=void 0);const c=s===Kn&&e[t+1].startsWith("/>")?" ":"";a+=s===Fn?i+zn:d>=0?(n.push(r),i.slice(0,d)+"$lit$"+i.slice(d)+Nn+c):i+Nn+(-2===d?(n.push(void 0),t):c)}const r=a+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==On?On.createHTML(r):r,n]})(e,t);if(this.el=ao.createElement(l,i),oo.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=oo.nextNode())&&r.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(Nn)){const i=d[a++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+"$lit$").split(Nn),t=/([.?@])?(.*)/.exec(i);r.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?co:"?"===t[1]?po:"@"===t[1]?_o:uo})}else r.push({type:6,index:o})}for(const t of e)n.removeAttribute(t)}if(Zn.test(n.tagName)){const e=n.textContent.split(Nn),t=e.length-1;if(t>0){n.textContent=Bn?Bn.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],Rn()),oo.nextNode(),r.push({type:2,index:++o});n.append(e[t],Rn())}}}else if(8===n.nodeType)if(n.data===Pn)r.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(Nn,e+1));)r.push({type:7,index:o}),e+=Nn.length-1}o++}}static createElement(e,t){const i=Un.createElement("template");return i.innerHTML=e,i}}function so(e,t,i=e,n){var o,a,s,r;if(t===to)return t;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const d=jn(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,n)),void 0!==n?(null!==(s=(r=i)._$Co)&&void 0!==s?s:r._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=so(e,l._$AS(e,t.values),l,n)),t}class ro{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:n}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Un).importNode(i,!0);oo.currentNode=o;let a=oo.nextNode(),s=0,r=0,l=n[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new lo(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new bo(a,this,e)),this.u.push(t),l=n[++r]}s!==(null==l?void 0:l.index)&&(a=oo.nextNode(),s++)}return o}p(e){let t=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class lo{constructor(e,t,i,n){var o;this.type=2,this._$AH=io,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cm=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=so(this,e,t),jn(e)?e===io||null==e||""===e?(this._$AH!==io&&this._$AR(),this._$AH=io):e!==this._$AH&&e!==to&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Gn(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==io&&jn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Un.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=ao.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(i);else{const e=new ro(o,this),t=e.v(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=no.get(e.strings);return void 0===t&&no.set(e.strings,t=new ao(e)),t}k(e){Gn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const o of e)n===t.length?t.push(i=new lo(this.O(Rn()),this.O(Rn()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class uo{constructor(e,t,i,n,o){this.type=1,this._$AH=io,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=io}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const o=this.strings;let a=!1;if(void 0===o)e=so(this,e,t,0),a=!jn(e)||e!==this._$AH&&e!==to,a&&(this._$AH=e);else{const n=e;let s,r;for(e=o[0],s=0;s<o.length-1;s++)r=so(this,n[i+s],t,s),r===to&&(r=this._$AH[s]),a||(a=!jn(r)||r!==this._$AH[s]),r===io?e=io:e!==io&&(e+=(null!=r?r:"")+o[s+1]),this._$AH[s]=r}a&&!n&&this.j(e)}j(e){e===io?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class co extends uo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===io?void 0:e}}const ho=Bn?Bn.emptyScript:"";class po extends uo{constructor(){super(...arguments),this.type=4}j(e){e&&e!==io?this.element.setAttribute(this.name,ho):this.element.removeAttribute(this.name)}}class _o extends uo{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=so(this,e,t,0))&&void 0!==i?i:io)===to)return;const n=this._$AH,o=e===io&&n!==io||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==io&&(n===io||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class bo{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){so(this,e)}}const mo=Mn.litHtmlPolyfillSupport;var go,fo;null==mo||mo(ao,lo),(null!==(Hn=Mn.litHtmlVersions)&&void 0!==Hn?Hn:Mn.litHtmlVersions=[]).push("2.4.0");class vo extends Ln{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var n,o;const a=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let s=a._$litPart$;if(void 0===s){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;a._$litPart$=s=new lo(t.insertBefore(Rn(),e),e,void 0,null!=i?i:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return to}}vo.finalized=!0,vo._$litElement$=!0,null===(go=globalThis.litElementHydrateSupport)||void 0===go||go.call(globalThis,{LitElement:vo});const yo=globalThis.litElementPolyfillSupport;null==yo||yo({LitElement:vo}),(null!==(fo=globalThis.litElementVersions)&&void 0!==fo?fo:globalThis.litElementVersions=[]).push("3.2.2");const ko=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function xo(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ko(e,t)}function wo(e){return xo({...e,state:!0})}const $o=({finisher:e,descriptor:t})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,a=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(i.key)}:{...i,key:n};return null!=e&&(a.finisher=function(t){e(t,n)}),a}{const o=i.constructor;void 0!==t&&Object.defineProperty(i,n,t(n)),null==e||e(o,n)}};function Co(e,t){return $o({descriptor:i=>{const n={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[t]&&(this[t]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}function Io(e){return $o({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}var So;null===(So=window.HTMLSlotElement)||void 0===So||So.prototype.assignedElements;var Eo,To=new Uint8Array(16);function Ao(){if(!Eo&&!(Eo="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Eo(To)}const Vo=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Do=function(e){return"string"==typeof e&&Vo.test(e)};for(var Lo=[],Ho=0;Ho<256;++Ho)Lo.push((Ho+256).toString(16).substr(1));const Mo=function(e,t,i){var n=(e=e||{}).random||(e.rng||Ao)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){i=i||0;for(var o=0;o<16;++o)t[i+o]=n[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(Lo[e[t+0]]+Lo[e[t+1]]+Lo[e[t+2]]+Lo[e[t+3]]+"-"+Lo[e[t+4]]+Lo[e[t+5]]+"-"+Lo[e[t+6]]+Lo[e[t+7]]+"-"+Lo[e[t+8]]+Lo[e[t+9]]+"-"+Lo[e[t+10]]+Lo[e[t+11]]+Lo[e[t+12]]+Lo[e[t+13]]+Lo[e[t+14]]+Lo[e[t+15]]).toLowerCase();if(!Do(i))throw TypeError("Stringified UUID is invalid");return i}(n)};class Bo extends vo{createRenderRoot(){return this}}const Oo=(e,t,i)=>{const n=new CustomEvent(t,{detail:i,bubbles:!0,composed:!0});return e.dispatchEvent(n)},No=e=>{const t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)},Po=()=>Mo();class zo{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class Uo extends zo{constructor(e){if(super(e),this.it=io,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===io||null==e)return this._t=void 0,this.it=e;if(e===to)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Uo.directiveName="unsafeHTML",Uo.resultType=1;const Ro=(e=>(...t)=>({_$litDirective$:e,values:t}))(Uo),jo={MONTH_SELECT:["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],YEAR_SELECT_POSTFIX:"",WEEK_DAYS:[{text:"SUN",abbr:"Sunday"},{text:"MON",abbr:"Monday"},{text:"TUE",abbr:"Tuesday"},{text:"WED",abbr:"Wednesday"},{text:"THU",abbr:"Thursday"},{text:"FRI",abbr:"Friday"},{text:"SAT",abbr:"Saturday"}],INVALID_FORMAT:"Format is not valid.",INVALID_TIME_FORMAT:"Format is not valid.",CALENDAR_FOOTER_TEXT:{none:"None",today:"Today",close:"Close"},TIME_IS_OUT_OF_VALID_RANGE:"Time is out of valid range."},Go={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"日",abbr:"日"},{text:"月",abbr:"月"},{text:"火",abbr:"火"},{text:"水",abbr:"水"},{text:"木",abbr:"木"},{text:"金",abbr:"金"},{text:"土",abbr:"土"}],INVALID_FORMAT:"日付の形式が不正です。",INVALID_TIME_FORMAT:"時刻の形式が不正です。",CALENDAR_FOOTER_TEXT:{none:"選択を解除",today:"今日",close:"閉じる"},TIME_IS_OUT_OF_VALID_RANGE:"時刻が有効な範囲外です。"},Fo={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"周日",abbr:"周日"},{text:"周一",abbr:"周一"},{text:"周二",abbr:"周二"},{text:"周三",abbr:"周三"},{text:"周四",abbr:"周四"},{text:"周五",abbr:"周五"},{text:"周六",abbr:"周六"}],INVALID_FORMAT:"日期格式不正确。",INVALID_TIME_FORMAT:"时间格式不正确。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天",close:"关闭"},TIME_IS_OUT_OF_VALID_RANGE:"时间超出有效范围。"},Wo={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"周日",abbr:"周日"},{text:"周一",abbr:"周一"},{text:"周二",abbr:"周二"},{text:"周三",abbr:"周三"},{text:"周四",abbr:"周四"},{text:"周五",abbr:"周五"},{text:"周六",abbr:"周六"}],INVALID_FORMAT:"日期格式不正確。",INVALID_TIME_FORMAT:"時間格式不正確。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天",close:"關閉"},TIME_IS_OUT_OF_VALID_RANGE:"時間超出有效範圍。"},qo=24,Ko=12,Yo="AM",Jo="PM",Zo='"max" must be greater than or equal to "min".',Xo="Time is out of valid range.",Qo="'timeStep' property is not number.",ea="00:00",ta="23:59",ia="'value' property format is not valid.",na="'max' property format is not valid.",oa="'min' property format is not valid.",aa="'timeStep' property format is not valid.",sa=(e,t)=>{const i=ka(e,t);let n=new Date(i.start),o=[];const a=[];for(;n<=i.end;)o.push(_a(n)),7===o.length&&(a.push(o),o=[]),n.setDate(n.getDate()+1),n=new Date(n);return a},ra=(e,t)=>{let i,n;i=Math.floor(e/60),n=e%60;const o=i%qo<Ko?Yo:Jo;return i=t?i%Ko:i%qo,0===i&&t&&(i=Ko),i<10&&(i="0"+i),n<10&&(n="0"+n),{label:i+":"+n+(t?" "+o:""),value:i+":"+n+(t?" "+o:"")}},la=e=>{const t=e.split(":");let i=parseInt(t[0],10),n=parseInt(t[1],10);return isNaN(i)||isNaN(n)?0:(i<0?i=0:i>=qo&&(i=23),n<0?n=0:n>=60&&(n=59),60*i+n)},da=(e,t)=>{const i=la(e),n=la(t);return i>n?1:i===n?0:-1},ua=e=>{let t=e%Ko;return t=0===t?Ko:t,t},ca=e=>e>=Ko?Jo:Yo,ha=e=>{const[t,i]=e.split(" "),[n,o]=t.split(":");return i?`${pa(n,i)}:${o}`:e},pa=(e,t)=>{const i=parseInt(e,10);return ya(t===Jo?i===Ko?12:i+12:i===Ko?0:i)},_a=e=>{const t=new Date(e),i=t.getFullYear(),n=ya(t.getMonth()+1),o=ya(t.getDate());return{text:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,attr:`${i}-${n}-${o}`}},ba=(e,t)=>{if(t&&!ga(t)){const i=t.split("-");if(3!==i.length)return t;const n=i[0],o=i[1],a=i[2];return"en"===e?`${o}/${a}/${n}`:`${n}-${o}-${a}`}return t},ma=(e,t)=>{if(ga(t))return t;const i="en"===e,n=i?"/":"-",o=t.split(n);return`${i?o[2]:o[0]}-${i?o[0]:o[1]}-${i?o[1]:o[2]}`},ga=e=>null==e||0===e.length||!/[^(^\s*)|(\s*$)]/.test(e),fa=(e="ja")=>{const t=new Date,i=t.getFullYear(),n=ya(t.getMonth()+1),o=ya(t.getDate());return"ja"===e||"zh"===e?i+"-"+n+"-"+o:n+"/"+o+"/"+i},va=(e,t)=>{if(t&&!ga(t)){const i="en"===e,n=i?"/":"-";if(new Date(t).getDate()!==parseInt(t.split(n)[i?1:2],10))return!1;const o=/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;if("en"===e)return null!==t.match(o);const a=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;return null!==t.match(a)}return!1},ya=(e,t=2)=>{const i=`0000000000${e}`;return i.substr(i.length-t)},ka=(e,t)=>{const i=new Date(e,t);i.setDate(1);const n=new Date(i);n.setDate(n.getDate()-n.getDay());const o=new Date(e,t);o.setMonth(o.getMonth()+1,0);const a=new Date(o);a.setDate(a.getDate()+(6-a.getDay()));const s=(a.getTime()-n.getTime())/864e5;return a.setDate(a.getDate()+(42-s)),{start:n,end:a}},xa=e=>{switch(e){case"en":default:return jo;case"zh":return Fo;case"ja":return Go;case"zh-TW":return Wo}},wa=e=>{const t=[];t.push({value:`${e} 12`,label:`${e} 12`});for(let i=1;i<=11;i++)t.push({value:`${e} ${ya(i)}`,label:`${e} ${ya(i)}`});return t},$a=()=>eo`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `;function Ca(e,t){const i=e.querySelector(".kuc-base-datetime-listbox__listbox"),n=Ia(e);if(!e.parentElement||!i||!n)return;const{inputToBottom:o,inputToTop:a}=n,s="KUC-BASE-DATETIME-HEADER-MONTH"===e.tagName?360:300,r=e.parentElement.getBoundingClientRect().height;return i.style.maxHeight=s+"px",e.parentElement.style.position="relative",o>=s?(i.style.height=s+"px","bottom"===t?void(i.style.top=r+"px"):void(i.style.bottom=r+"px")):"bottom"===t?(i.style.top=r+"px",void(i.style.height=o-18+"px")):(i.style.height=a-18+"px",i.style.top="auto",void(i.style.bottom=e.parentElement.getBoundingClientRect().height+"px"))}const Ia=e=>e.parentElement?{inputToBottom:window.innerHeight-e.parentElement.getBoundingClientRect().bottom,inputToTop:e.parentElement.getBoundingClientRect().top,inputToRight:window.innerWidth-e.parentElement.getBoundingClientRect().left,inputToLeft:e.parentElement.getBoundingClientRect().left+100}:{inputToBottom:0,inputToTop:0,inputToRight:0,inputToLeft:0},Sa={fromAttribute:e=>null===e,toAttribute:e=>e?null:""},Ea={fromAttribute:e=>!e||-1===["en","ja","zh","zh-TW"].indexOf(e),toAttribute:e=>{const t=["en","ja","zh","zh-TW"];return-1!==t.indexOf(e)?e:-1!==t.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}},Ta=e=>e instanceof HTMLElement?e:Ro(e),Aa=e=>{if(void 0===e||""===e)return"";let t=[];return e.indexOf("-")>0&&(t=e.split("-")),t.length<2?`${e}-01-01`:2===t.length?`${ya(t[0],4)}-${ya(t[1])}-01`:t.length>2?`${ya(t[0],4)}-${ya(t[1])}-${ya(t[2])}`:""},Va=e=>{if(5===e.length||""===e)return e;const t=e.indexOf(":"),i=e.substr(0,t),n=e.substr(t+1,5);return`${ya(i)}:${ya(n)}`};function Da(e){if(!e||"object"!=typeof e)return{};const t={...e};for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&void 0===t[e]&&delete t[e];return t}function La(e){return!(""!==e&&void 0!==e&&!/(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g.test(e))}function Ha(e){return!(""!==e&&!/^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/.test(e))}function Ma(e){return"number"==typeof e}function Ba(e,t,i){const n=Math.round(e),o=la(t),a=la(i);return!isNaN(n)&&n>0&&n<=o-a}function Oa(e){const[t,i,n]=e.split("-"),o=new Date(e),a=o.getFullYear(),s=o.getMonth(),r=o.getDate();return a===Number(t)&&s===Number(i)-1&&r===Number(n)}function Na(e){return!!Array.isArray(e)}function Pa(e){return!!Array.isArray(e)}function za(e){return"string"==typeof e}function Ua(e){return!!Array.isArray(e)}function Ra(e){return"number"==typeof e}function ja(e,t){return!(!/(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g.test(e)||!/(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/.test(t))}async function Ga(e,t){throw await e.updateComplete,new Error(t)}var Fa=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Wa;(()=>{if(Wa=window.customElements.get("kuc-button-1-6-0"),!Wa){class e extends Bo{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.disabled=!1,this.visible=!0;const t=Da(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),Oo(this,"click")}_getButtonColorType(){return"normal"===this.type||"submit"===this.type||"alert"===this.type?this.type:"normal"}render(){return Qn`
        <button
          type="button"
          class="kuc-button-1-6-0__button kuc-button-1-6-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.text}
        </button>
      `}}Fa([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Fa([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Fa([xo({type:String})],e.prototype,"text",void 0),Fa([xo({type:String})],e.prototype,"type",void 0),Fa([xo({type:Boolean})],e.prototype,"disabled",void 0),Fa([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),window.customElements.define("kuc-button-1-6-0",e),No('\n  kuc-button-1-6-0,\n  kuc-button-1-6-0 *,\n  kuc-button-1-6-0:lang(en),\n  kuc-button-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial, "Hiragino Kaku Gothic ProN",\n      Meiryo, sans-serif;\n  }\n  kuc-button-1-6-0:lang(ja),\n  kuc-button-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-button-1-6-0:lang(zh),\n  kuc-button-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,\n      "Heiti SC", sans-serif;\n  }\n  kuc-button-1-6-0:lang(zh-TW),\n  kuc-button-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-button-1-6-0 {\n    display: inline-block;\n    vertical-align: top;\n  }\n  kuc-button-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-button-1-6-0__button {\n    font-size: var(--kuc-button-font-size, 16px);\n    width: var(--kuc-button-width, "auto");\n    height: var(--kuc-button-height, 48px);\n    min-width: 163px;\n    padding: 0px 16px;\n    user-select: none;\n  }\n  .kuc-button-1-6-0__button--normal {\n    background-color: var(--kuc-button-background-color, #f7f9fa);\n    color: var(--kuc-button-text-color, #3498db);\n    border: 1px solid #e3e7e8;\n    box-shadow: 1px 1px 1px #ffffff inset;\n  }\n  .kuc-button-1-6-0__button--normal:hover,\n  .kuc-button-1-6-0__button--normal:focus-visible,\n  .kuc-button-1-6-0__button--normal:active {\n    box-shadow: none;\n    cursor: pointer;\n  }\n  .kuc-button-1-6-0__button--normal:hover {\n    background-color: var(--kuc-button-background-hover, #c8d6dd);\n  }\n  .kuc-button-1-6-0__button--normal:focus-visible {\n    background-color: var(--kuc-button-background-focus, #c8d6dd);\n  }\n  .kuc-button-1-6-0__button--normal:active {\n    background-color: var(--kuc-button-background-active, #c8d6dd);\n  }\n  .kuc-button-1-6-0__button--submit {\n    background-color: var(--kuc-button-background-color, #3498db);\n    color: var(--kuc-button-text-color, #ffffff);\n    border: 1px solid #e3e7e8;\n  }\n  .kuc-button-1-6-0__button--submit:hover,\n  .kuc-button-1-6-0__button--submit:focus-visible,\n  .kuc-button-1-6-0__button--submit:active {\n    cursor: pointer;\n  }\n  .kuc-button-1-6-0__button--submit:hover {\n    background-color: var(--kuc-button-background-hover, #1d6fa5);\n  }\n  .kuc-button-1-6-0__button--submit:focus-visible {\n    background-color: var(--kuc-button-background-focus, #1d6fa5);\n  }\n  .kuc-button-1-6-0__button--submit:active {\n    background-color: var(--kuc-button-background-active, #1d6fa5);\n  }\n  .kuc-button-1-6-0__button--alert {\n    background-color: var(--kuc-button-background-color, #e74c3c);\n    color: var(--kuc-button-text-color, #ffffff);\n    border: 0 none;\n    box-shadow: 1px 1px 1px #ffffff inset;\n  }\n  .kuc-button-1-6-0__button--alert:hover,\n  .kuc-button-1-6-0__button--alert:focus-visible,\n  .kuc-button-1-6-0__button--alert:active {\n    box-shadow: none;\n    cursor: pointer;\n  }\n  .kuc-button-1-6-0__button--alert:hover {\n    background-color: var(--kuc-button-background-hover, #bf2718);\n  }\n  .kuc-button-1-6-0__button--alert:focus-visible {\n    background-color: var(--kuc-button-background-focus, #bf2718);\n  }\n  .kuc-button-1-6-0__button--alert:active {\n    background-color: var(--kuc-button-background-active, #bf2718);\n  }\n  .kuc-button-1-6-0__button:disabled {\n    background-color: var(--kuc-button-background-color, #d4d7d7);\n    border: 1px solid #e3e7e8;\n    box-shadow: none;\n    color: var(--kuc-button-text-color, #888888);\n    cursor: default;\n  }\n  .kuc-button-1-6-0__button--normal:focus-visible,\n  .kuc-button-1-6-0__button--submit:focus-visible,\n  .kuc-button-1-6-0__button--alert:focus-visible {\n    outline: 1px solid #3498db;\n  }\n'),Wa=e}})();const qa="'items' property is not array.",Ka="'value' property is not array.",Ya="'value' property is not string.",Ja="'selectedIndex' property is not array.",Za="'selectedIndex' property is not number.";var Xa=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Qa extends Bo{constructor(){super(...arguments),this.ariaLive="",this.guid="",this.text=""}render(){return Qn`
      ${this.ariaLive&&""!==this.ariaLive?Qn`
            <div
              class="kuc-base-error-1-6-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:Qn`
            <div
              class="kuc-base-error-1-6-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}}Xa([xo({type:String})],Qa.prototype,"ariaLive",void 0),Xa([xo({type:String})],Qa.prototype,"guid",void 0),Xa([xo({type:String})],Qa.prototype,"text",void 0),window.customElements.get("kuc-base-error-1-6-0")||(No('\n  kuc-base-error-1-6-0,\n  kuc-base-error-1-6-0 *,\n  kuc-base-error-1-6-0:lang(en),\n  kuc-base-error-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-base-error-1-6-0:lang(ja),\n  kuc-base-error-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-base-error-1-6-0:lang(zh),\n  kuc-base-error-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-base-error-1-6-0:lang(zh-TW),\n  kuc-base-error-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-base-error-1-6-0 {\n    width: 100%;\n    font-size: 14px;\n    display: inline-table;\n    vertical-align: top;\n  }\n  kuc-base-error-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-base-error-1-6-0__error {\n    line-height: 1.5;\n    padding: 4px 18px;\n    box-sizing: border-box;\n    background-color: #e74c3c;\n    color: #ffffff;\n    margin: 8px 0px;\n    word-break: break-all;\n    white-space: normal;\n  }\n  .kuc-base-error-1-6-0__error[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-error-1-6-0",Qa));var es=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class ts extends Bo{constructor(){super(...arguments),this.requiredIcon=!1,this.guid="",this.text=""}render(){return Qn`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label-1-6-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&""!==this.guid?Qn`
          <span class="kuc-base-label-1-6-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:Qn` <span class="kuc-base-label-1-6-0__text">${this.text}</span> `}}es([xo({type:Boolean})],ts.prototype,"requiredIcon",void 0),es([xo({type:String})],ts.prototype,"guid",void 0),es([xo({type:String})],ts.prototype,"text",void 0),window.customElements.get("kuc-base-label-1-6-0")||(No('\n  kuc-base-label-1-6-0,\n  kuc-base-label-1-6-0 *,\n  kuc-base-label-1-6-0:lang(en),\n  kuc-base-label-1-6-0:lang(en) * {\n      font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-base-label-1-6-0:lang(ja),\n  kuc-base-label-1-6-0:lang(ja) * {\n      font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-base-label-1-6-0:lang(zh),\n  kuc-base-label-1-6-0:lang(zh) * {\n      font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-base-label-1-6-0:lang(zh-TW),\n  kuc-base-label-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-base-label-1-6-0 {\n      font-size: 14px;\n      color: #333333;\n      display: inline-table;\n      vertical-align: top;\n  }\n  kuc-base-label-1-6-0[hidden] {\n      display: none;\n  }\n  .kuc-base-label-1-6-0__required-icon {\n      font-size: 20px;\n      vertical-align: -3px;\n      color: #e74c3c;\n      margin-left: 4px;\n      line-height: 1;\n  }\n  .kuc-base-label-1-6-0__required-icon[hidden] {\n      display: none;\n  }\n'),window.customElements.define("kuc-base-label-1-6-0",ts));var is=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ns;(()=>{if(ns=window.customElements.get("kuc-checkbox-1-6-0"),!ns){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=Po();const t=Da(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Ua(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}shouldUpdate(e){return e.has("items")&&!Na(this.items)?(Ga(this,qa),!1):e.has("value")&&!Pa(this.value)?(Ga(this,Ka),!1):!(e.has("selectedIndex")&&!Ua(this.selectedIndex)&&(Ga(this,Ja),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.dataset.index||"0",n=t.value,o=this.value?[...this.value]:this.value,a=this._getNewValueMapping(n,i),s=this.items.map((e=>e.value)),r=Object.values(a).filter((e=>s.indexOf(e)>-1));if(r===o)return;const l=Object.keys(a).map((e=>parseInt(e,10)));this.value=r,this.selectedIndex=l,Oo(this,"change",{oldValue:o,value:r})}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getCheckboxIconSvgTemplate(e,t){return eo`
    <svg
      class="kuc-checkbox-1-6-0__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="19"
        height="19"
        rx="1"
        fill="white"
        stroke="${this._getSVGStrokeValue(e,t)}"
        stroke-width="2"/>
      ${t?eo`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?"#d8d8d8":"#3498db"}"/>`:""}
    </svg>
  `}_getSVGStrokeValue(e,t){return e?"#d8d8d8":t?"#3498db":"#d8d8d8"}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return Qn`
        <div
          class="kuc-checkbox-1-6-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="checkbox"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-6-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${void 0!==e.value?e.value:""}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            for="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-6-0__group__select-menu__item__label"
            >${this._getCheckboxIconSvgTemplate(this.disabled,i)}${void 0===e.label?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return Qn`
        <div
          class="kuc-checkbox-1-6-0__group"
          role="group"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-checkbox-1-6-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-6-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-6-0>
          </div>
          <div
            class="kuc-checkbox-1-6-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-error-1-6-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-6-0>
        </div>
      `}updated(){this._inputEls.forEach((e=>{e.checked=this.value.indexOf(e.value)>-1}))}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}}is([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),is([xo({type:String})],e.prototype,"error",void 0),is([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),is([xo({type:String})],e.prototype,"itemLayout",void 0),is([xo({type:String})],e.prototype,"label",void 0),is([xo({type:Boolean})],e.prototype,"borderVisible",void 0),is([xo({type:Boolean})],e.prototype,"disabled",void 0),is([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),is([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),is([xo({type:Array})],e.prototype,"items",void 0),is([xo({type:Array})],e.prototype,"selectedIndex",void 0),is([xo({type:Array})],e.prototype,"value",void 0),is([Io(".kuc-checkbox-1-6-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),is([wo()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-checkbox-1-6-0",e),No('\n  kuc-checkbox-1-6-0,\n  kuc-checkbox-1-6-0 *,\n  kuc-checkbox-1-6-0:lang(en),\n  kuc-checkbox-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-checkbox-1-6-0:lang(ja),\n  kuc-checkbox-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-checkbox-1-6-0:lang(zh),\n  kuc-checkbox-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-checkbox-1-6-0:lang(zh-TW),\n  kuc-checkbox-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-checkbox-1-6-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    vertical-align: top;\n    width: 239px;\n    min-width: 239px;\n   line-height: 1.5;\n  }\n  kuc-checkbox-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-checkbox-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu {\n    white-space: nowrap;\n  }\n  .kuc-checkbox-1-6-0__group__label {\n    display: inline-block;\n    padding: 4px 0 8px 0;\n    white-space: nowrap;\n  }\n  .kuc-checkbox-1-6-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu[borderVisible] {\n    border-color: #e3e7e8;\n    border-width: 1px;\n    border-style: solid;\n    padding: 4px 0 0 4px;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item {\n    margin-bottom: 4px;\n    margin-right: 16px;\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    display: inline-block;\n    height: 24px;\n    line-height: 24px;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item[itemLayout="vertical"] {\n    display: block;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item[focused] {\n    border: 1px solid #3498db;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item__input:hover\n    + .kuc-checkbox-1-6-0__group__select-menu__item__label {\n    color: #666666;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    left: -30px;\n    box-sizing: border-box;\n    margin-top: -11px;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item__input[disabled]\n    + .kuc-checkbox-1-6-0__group__select-menu__item__label {\n    color: #888888;\n    cursor: not-allowed;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item__label {\n    cursor: pointer;\n    position: relative;\n    margin-left: 32px;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: nowrap;\n  }'),ns=e}})();const os=e=>{const t=(e=>{const t=document.createElement("div");return t.style.cssText=`\n  height: 0px;\n  overflow: hidden;\n  display: inline-block;\n  font-size: 14px;\n  font-family: ${window.getComputedStyle(e).fontFamily};\n  `,t})(e),i=e.cloneNode(!0);if(i.hasAttribute("hidden"))return 0;t.appendChild(i),document.body.appendChild(t);const n=t.getBoundingClientRect().width;return document.body.removeChild(t),n};var as=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ss;(()=>{if(ss=window.customElements.get("kuc-dropdown-1-6-0"),!ss){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._GUID=Po();const t=Da(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}_getSelectedLabel(){const e=this.items.filter(((e,t)=>this._isCheckedItem(e,t)));return 0===e.length?"":void 0===e[0].label?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return eo`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}shouldUpdate(e){return e.has("items")&&!Na(this.items)?(Ga(this,qa),!1):e.has("value")&&!za(this.value)?(Ga(this,Ya),!1):!(e.has("selectedIndex")&&!Ra(this.selectedIndex)&&(Ga(this,Za),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}render(){return Qn`
        <div class="kuc-dropdown-1-6-0__group">
          <div
            class="kuc-dropdown-1-6-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-6-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-6-0>
          </div>
          <button
            class="kuc-dropdown-1-6-0__group__toggle"
            id="${this._GUID}-toggle"
            type="button"
            aria-haspopup="true"
            aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @mouseup="${this._handleMouseUpDropdownToggle}"
            @mousedown="${this._handleMouseDownDropdownToggle}"
            @click="${this._handleClickDropdownToggle}"
            @keydown="${this._handleKeyDownDropdownToggle}"
          >
            <span class="kuc-dropdown-1-6-0__group__toggle__selected-item-label"
              >${this._getSelectedLabel()}</span
            >
            <span class="kuc-dropdown-1-6-0__group__toggle__icon">
              ${this._getToggleIconSvgTemplate()}
            </span>
          </button>
          <ul
            class="kuc-dropdown-1-6-0__group__select-menu"
            role="listbox"
            aria-hidden="${!this._selectorVisible}"
            ?hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </ul>
          <kuc-base-error-1-6-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-6-0>
        </div>
      `}firstUpdated(){window.addEventListener("resize",(()=>{this._actionResizeScrollWindow()})),window.addEventListener("scroll",(()=>{this._actionResizeScrollWindow()}))}async updated(){await this.updateComplete,this._updateContainerWidth(),this._selectorVisible?(this._setMenuPosition(),this._scrollToView(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument,!0)}),1)):setTimeout((()=>{document.removeEventListener("click",this._handleClickDocument,!0)}),1)}_handleMouseDownDropdownItem(e){const t=e.target,i=t.getAttribute("value"),n=t.dataset.index||"0";this._actionUpdateValue(i,n)}_handleMouseOverDropdownItem(e){const t=e.target;this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),this._actionHideMenu()}_handleKeyDownDropdownToggle(e){switch(e.key){case"Up":case"ArrowUp":if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case"Tab":this._selectorVisible&&this._actionHideMenu();break;case"Down":case"ArrowDown":if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case"Enter":{if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}const t=this._highlightItemEl;if(null===t)break;const i=t.getAttribute("value"),n=t.dataset.index||"0";this._actionUpdateValue(i,n),this._actionHideMenu();break}case"Escape":e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break;case"Home":this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case"End":this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_actionShowMenu(){this._buttonEl.focus(),this._selectorVisible=!0,null!==this._selectedItemEl&&this._setHighlightAndActiveDescendantMenu(this._selectedItemEl)}_actionHideMenu(){this._selectorVisible=!1,this._actionRemoveActiveDescendant()}_actionToggleMenu(){this._selectorVisible?this._actionHideMenu():this._actionShowMenu()}_actionHighlightFirstMenuItem(){this._setHighlightAndActiveDescendantMenu(this._firstItemEl)}_actionHighlightLastMenuItem(){this._setHighlightAndActiveDescendantMenu(this._lastItemEl)}_actionHighlightPrevMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.previousElementSibling,this._highlightItemEl.classList.remove("kuc-dropdown-1-6-0__group__select-menu__highlight")),null===e&&(e=this._lastItemEl),this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.nextElementSibling,this._highlightItemEl.classList.remove("kuc-dropdown-1-6-0__group__select-menu__highlight")),null===e&&(e=this._firstItemEl),this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach((e=>{e.classList.remove("kuc-dropdown-1-6-0__group__select-menu__highlight")})),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add("kuc-dropdown-1-6-0__group__select-menu__highlight")}_actionUpdateValue(e,t){const i=parseInt(t,10);if(this.value===e&&this.selectedIndex===i)return;const n={oldValue:this.value,value:e};this.value=e,this.selectedIndex=i,Oo(this,"change",n)}_actionSetActiveDescendant(e){void 0!==e&&null!==this._buttonEl&&this._buttonEl.setAttribute("aria-activedescendant",e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute("aria-activedescendant")}_updateContainerWidth(){let e=this._labelEl.getBoundingClientRect().width;0===e&&(e=os(this._labelEl)),e=e>180?e:180,this._groupEl.style.width=e+"px"}_getScrollbarWidthHeight(){const e=document.createElement("div");e.style.cssText="overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{scrollbarWidth:t,scrollbarHeight:i}}_getDistanceToggleButton(){const{scrollbarWidth:e,scrollbarHeight:t}=this._getScrollbarWidthHeight(),i=document.body.scrollHeight>window.innerHeight,n=document.body.scrollWidth>window.innerWidth;return{toTop:this._buttonEl.getBoundingClientRect().top,toBottom:window.innerHeight-this._buttonEl.getBoundingClientRect().bottom-(n?t:0),toLeft:this._buttonEl.getBoundingClientRect().left,toRight:window.innerWidth-this._buttonEl.getBoundingClientRect().left-(i?e:0)}}_setMenuPositionAboveOrBelow(){this._menuEl.style.height="auto",this._menuEl.style.bottom="auto",this._menuEl.style.overflowY="";const e=this._menuEl.getBoundingClientRect().height,t=this._getDistanceToggleButton();if(!(t.toBottom>=e))if(t.toBottom<t.toTop){const i=this._errorEl.offsetHeight?this._errorEl.offsetHeight+16:0;if(this._menuEl.style.bottom=`${this._buttonEl.offsetHeight+i}px`,t.toTop>=e)return;this._menuEl.style.height=`${t.toTop}px`,this._menuEl.style.overflowY="scroll"}else this._menuEl.style.height=`${t.toBottom}px`,this._menuEl.style.overflowY="scroll"}_setMenuPositionLeftOrRight(){this._menuEl.style.right="auto";const e=this._menuEl.getBoundingClientRect().width,t=this._getDistanceToggleButton();if(t.toRight>=e||t.toLeft<e||t.toRight<0)return;const i=this._buttonEl.offsetWidth-t.toRight;this._menuEl.style.right=i>0?`${i}px`:"0px"}_setMenuPosition(){this._setMenuPositionAboveOrBelow(),this._setMenuPositionLeftOrRight()}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;const e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout((()=>{this._timeoutID=null,this._setMenuPosition()}),50))}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return Qn`
        <li
          class="kuc-dropdown-1-6-0__group__select-menu__item"
          role="option"
          tabindex="${i?"0":"-1"}"
          aria-selected="${i?"true":"false"}"
          data-index="${t}"
          value="${void 0!==e.value?e.value:""}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${this._handleMouseDownDropdownItem}"
          @mouseover="${this._handleMouseOverDropdownItem}"
        >
          ${this._getDropdownIconSvgTemplate(i)}
          ${void 0===e.label?e.value:e.label}
        </li>
      `}_getDropdownIconSvgTemplate(e){return eo`
      ${e?eo`<svg
          class="kuc-dropdown-1-6-0__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="#3498db"/>
        </svg>`:""}`}}as([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),as([xo({type:String})],e.prototype,"error",void 0),as([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),as([xo({type:String})],e.prototype,"label",void 0),as([xo({type:String})],e.prototype,"value",void 0),as([xo({type:Number})],e.prototype,"selectedIndex",void 0),as([xo({type:Boolean})],e.prototype,"disabled",void 0),as([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),as([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),as([xo({type:Array})],e.prototype,"items",void 0),as([wo()],e.prototype,"_selectorVisible",void 0),as([Co(".kuc-dropdown-1-6-0__group")],e.prototype,"_groupEl",void 0),as([Co(".kuc-dropdown-1-6-0__group__select-menu")],e.prototype,"_menuEl",void 0),as([Io(".kuc-dropdown-1-6-0__group__select-menu__item")],e.prototype,"_itemsEl",void 0),as([Co("button.kuc-dropdown-1-6-0__group__toggle")],e.prototype,"_buttonEl",void 0),as([Co(".kuc-dropdown-1-6-0__group__label")],e.prototype,"_labelEl",void 0),as([Co(".kuc-dropdown-1-6-0__group__select-menu__item")],e.prototype,"_firstItemEl",void 0),as([Co(".kuc-dropdown-1-6-0__group__select-menu__item:last-child")],e.prototype,"_lastItemEl",void 0),as([Co(".kuc-dropdown-1-6-0__group__select-menu__item[aria-selected=true]")],e.prototype,"_selectedItemEl",void 0),as([Co(".kuc-dropdown-1-6-0__group__select-menu__highlight")],e.prototype,"_highlightItemEl",void 0),as([Co(".kuc-base-error-1-6-0__error")],e.prototype,"_errorEl",void 0),window.customElements.define("kuc-dropdown-1-6-0",e),No('\n  kuc-dropdown-1-6-0,\n  kuc-dropdown-1-6-0 *,\n  kuc-dropdown-1-6-0:lang(en),\n  kuc-dropdown-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-dropdown-1-6-0:lang(ja),\n  kuc-dropdown-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-dropdown-1-6-0:lang(zh),\n  kuc-dropdown-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-dropdown-1-6-0:lang(zh-TW),\n  kuc-dropdown-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-dropdown-1-6-0 {\n    display: inline-table;\n    font-size: 14px;\n    color: #333333;\n    vertical-align: top;\n    width: 180px;\n    min-width: 180px;\n    line-height: 1.5;\n  }\n  kuc-dropdown-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    margin: 0px;\n    position: relative;\n  }\n  .kuc-dropdown-1-6-0__group__label {\n    padding: 4px 0px 8px 0px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .kuc-dropdown-1-6-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-6-0__group__toggle {\n    height: 40px;\n    box-sizing: border-box;\n    box-shadow: 1px 1px 1px #ffffff inset;\n    border: 1px solid #e3e7e8;\n    color: #3498db;\n    background-color: #f7f9fa;\n    padding: 0 0 0 24px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    cursor: pointer;\n  }\n  .kuc-dropdown-1-6-0__group__toggle:focus {\n    outline: none;\n    border: 1px solid #3498db;\n  }\n  .kuc-dropdown-1-6-0__group__toggle:disabled {\n    background-color: #d4d7d7;\n    box-shadow: none;\n    cursor: not-allowed;\n    color: #888888;\n  }\n  .kuc-dropdown-1-6-0__group__toggle__selected-item-label {\n    font-size: 14px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .kuc-dropdown-1-6-0__group__toggle__icon {\n    flex: none;\n    width: 38px;\n    height: 38px;\n  }\n  .kuc-dropdown-1-6-0__group__select-menu {\n    position: absolute;\n    min-width: 280px;\n    margin: 0;\n    padding: 8px 0;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n    background-color: #ffffff;\n    z-index: 2000;\n    list-style: none;\n    box-sizing: border-box;\n  }\n  .kuc-dropdown-1-6-0__group__select-menu[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-6-0__group__select-menu__item {\n    padding: 8px 16px 8px 24px;\n    line-height: 1;\n    position: relative;\n    cursor: pointer;\n    white-space: nowrap;\n\n  }\n  .kuc-dropdown-1-6-0__group__select-menu__item__icon {\n    position: absolute;\n    top: 50%;\n    left: 6px;\n    margin-top: -5px;\n  }\n  .kuc-dropdown-1-6-0__group__select-menu__item[aria-selected="true"] {\n    color: #3498db;\n  }\n  .kuc-dropdown-1-6-0__group__select-menu__highlight[role="option"] {\n    background-color: #e2f2fe;\n  }\n'),ss=e}})();const rs=ss;var ls=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ds;(()=>{if(ds=window.customElements.get("kuc-multi-choice-1-6-0"),!ds){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=Po();const t=Da(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Ua(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}shouldUpdate(e){return e.has("items")&&!Na(this.items)?(Ga(this,qa),!1):e.has("value")&&!Pa(this.value)?(Ga(this,Ka),!1):!(e.has("selectedIndex")&&!Ua(this.selectedIndex)&&(Ga(this,Ja),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return Qn`
        <div class="kuc-multi-choice-1-6-0__group">
          <div
            class="kuc-multi-choice-1-6-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-6-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-6-0>
          </div>
          <div
            class="kuc-multi-choice-1-6-0__group__menu"
            role="listbox"
            aria-multiselectable="true"
            aria-describedby="${this._GUID}-error"
            aria-labelledby="${this._GUID}-label"
            ?disabled="${this.disabled}"
            tabindex="${this.disabled?"-1":"0"}"
            @keydown="${this._handleKeyDownMultiChoice}"
          >
            ${this.items.map(((e,t)=>this._getMenuItemTemplate(e,t)))}
          </div>
          <kuc-base-error-1-6-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-6-0>
        </div>
      `}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;const t=e.target,i=t.getAttribute("value"),n=t.dataset.index||"0";this._handleChangeValue(i,n)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach((e=>{e.classList.contains("kuc-multi-choice-1-6-0__group__menu__highlight")&&e.classList.remove("kuc-multi-choice-1-6-0__group__menu__highlight")}));const t=e.currentTarget;t.classList.add("kuc-multi-choice-1-6-0__group__menu__highlight"),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){this.disabled||(e.currentTarget.classList.remove("kuc-multi-choice-1-6-0__group__menu__highlight"),this._setActiveDescendant())}_handleKeyDownMultiChoice(e){if(this.disabled)return;let t=0;switch(e.key){case"Up":case"ArrowUp":{e.preventDefault(),this._itemsEl.forEach(((e,i)=>{e.classList.contains("kuc-multi-choice-1-6-0__group__menu__highlight")&&(e.classList.remove("kuc-multi-choice-1-6-0__group__menu__highlight"),t=i-1)})),t=t<=-1?this._itemsEl.length-1:t;const i=this._itemsEl[t];i.classList.add("kuc-multi-choice-1-6-0__group__menu__highlight"),this._setActiveDescendant(i.id);break}case"Down":case"ArrowDown":{e.preventDefault(),this._itemsEl.forEach(((e,i)=>{e.classList.contains("kuc-multi-choice-1-6-0__group__menu__highlight")&&(e.classList.remove("kuc-multi-choice-1-6-0__group__menu__highlight"),t=i+1)})),t=t>=this._itemsEl.length?0:t;const i=this._itemsEl[t];i.classList.add("kuc-multi-choice-1-6-0__group__menu__highlight"),this._setActiveDescendant(i.id);break}case"Spacebar":case" ":e.preventDefault(),this._itemsEl.forEach((e=>{if(e.classList.contains("kuc-multi-choice-1-6-0__group__menu__highlight")){const t=e.getAttribute("value"),i=e.dataset.index||"0";this._handleChangeValue(t,i)}}))}}_getMultiChoiceCheckedIconSvgTemplate(e,t){return eo`
        ${t?eo`<svg
            class="kuc-multi-choice-1-6-0__group__menu__item__icon"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
              fill="${e?"#888888":"#3498db"}"
            />
          </svg>`:""}`}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getMenuItemTemplate(e,t){const i=this._isCheckedItem(e,t);return Qn`
        <div
          class="kuc-multi-choice-1-6-0__group__menu__item"
          role="option"
          aria-selected="${i}"
          aria-required="${this.requiredIcon}"
          data-index="${t}"
          value="${void 0!==e.value?e.value:""}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${this._handleMouseDownMultiChoiceItem}"
          @mouseover="${this._handleMouseOverMultiChoiceItem}"
          @mouseleave="${this._handleMouseLeaveMultiChoiceItem}"
        >
          ${this._getMultiChoiceCheckedIconSvgTemplate(this.disabled,i)}
          ${void 0===e.label?e.value:e.label}
        </div>
      `}_setActiveDescendant(e){void 0!==e&&null!==this._menuEl?this._menuEl.setAttribute("aria-activedescendant",e):this._menuEl.removeAttribute("aria-activedescendant")}_handleChangeValue(e,t){const i=this.value?[...this.value]:this.value,n=this._getNewValueMapping(e,t),o=this.items.map((e=>e.value)),a=Object.values(n).filter((e=>o.indexOf(e)>-1));if(a===i)return;const s=Object.keys(n).map((e=>parseInt(e,10)));this.value=a,this.selectedIndex=s,Oo(this,"change",{oldValue:i,value:a})}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}}ls([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),ls([xo({type:String})],e.prototype,"error",void 0),ls([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),ls([xo({type:String})],e.prototype,"label",void 0),ls([xo({type:Boolean})],e.prototype,"disabled",void 0),ls([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),ls([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),ls([xo({type:Array})],e.prototype,"items",void 0),ls([xo({type:Array})],e.prototype,"selectedIndex",void 0),ls([xo({type:Array})],e.prototype,"value",void 0),ls([Co(".kuc-multi-choice-1-6-0__group__menu")],e.prototype,"_menuEl",void 0),ls([Io(".kuc-multi-choice-1-6-0__group__menu__item")],e.prototype,"_itemsEl",void 0),ls([wo()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-multi-choice-1-6-0",e),No('\n  kuc-multi-choice-1-6-0,\n  kuc-multi-choice-1-6-0 *,\n  kuc-multi-choice-1-6-0:lang(en),\n  kuc-multi-choice-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-multi-choice-1-6-0:lang(ja),\n  kuc-multi-choice-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-multi-choice-1-6-0:lang(zh),\n  kuc-multi-choice-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-multi-choice-1-6-0:lang(zh-TW),\n  kuc-multi-choice-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-multi-choice-1-6-0 {\n    display: inline-table;\n    font-size: 14px;\n    color: #333333;\n    width: 180px;\n    min-width: 180px;\n    line-height: 1.5;\n  }\n  kuc-multi-choice-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-multi-choice-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-multi-choice-1-6-0__group__label {\n    padding: 4px 0px 8px 0px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .kuc-multi-choice-1-6-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-multi-choice-1-6-0__group__menu {\n    position: relative;\n    background: #ffffff;\n    border: 1px solid #e3e7e8;\n    box-sizing: border-box;\n    box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;\n    padding: 6px 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 134px;\n    width: 100%;\n  }\n  .kuc-multi-choice-1-6-0__group__menu:not([disabled]):focus {\n    outline: none;\n    border: 1px solid #3498db;\n  }\n  .kuc-multi-choice-1-6-0__group__menu[disabled] {\n    background-color: #dbdcdd;\n    box-shadow: none;\n    cursor: not-allowed;\n    color: #888888;\n    outline: none;\n  }\n  .kuc-multi-choice-1-6-0__group__menu__item {\n    padding: 4px 16px;\n    margin-bottom: 2px;\n    line-height: 1;\n    position: relative;\n    white-space: nowrap;\n  }\n  .kuc-multi-choice-1-6-0__group__menu__item__icon {\n    position: absolute;\n    top: 50%;\n    left: 16px;\n    margin-top: -6px;\n    pointer-events: none;\n  }\n  .kuc-multi-choice-1-6-0__group__menu__item[aria-selected="true"] {\n    color: #3498db;\n    padding-left: 32px;\n  }\n  .kuc-multi-choice-1-6-0__group__menu[disabled]\n    .kuc-multi-choice-1-6-0__group__menu__item[aria-selected="true"] {\n    color: #888888;\n  }\n  .kuc-multi-choice-1-6-0__group__menu__highlight[role="option"] {\n    background-color: #e2f2fe;\n    cursor: pointer;\n  }\n'),ds=e}})();var us=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let cs;(()=>{if(cs=window.customElements.get("kuc-notification-1-6-0"),!cs){class e extends Bo{constructor(e){super(),this.className="",this.text="",this.type="danger",this.duration=-1,this._isOpened=!1;const t=Da(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonColor(){switch(this.type){case"info":return"#448aca";case"success":return"#9bbc65";default:return"#c65040"}}_getCloseButtonSvgTemplate(){return eo`
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>close button</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="${this._getCloseButtonColor()}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="white"
          />
        </svg>
      `}_setAutoCloseTimer(){!Number.isFinite(this.duration)||this.duration<0||(this._clearAutoCloseTimer(),this._timeoutID=window.setTimeout((()=>{this.close()}),this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){document.body.appendChild(this),this.performUpdate(),this.classList.remove("kuc-notification-fadeout-1-6-0"),this.classList.add("kuc-notification-fadein-1-6-0"),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._isOpened=!1,this.classList.remove("kuc-notification-fadein-1-6-0"),this.classList.add("kuc-notification-fadeout-1-6-0"),this._clearAutoCloseTimer(),Oo(this,"close")}render(){return Qn`
        <div
          class="kuc-notification-1-6-0__notification kuc-notification-1-6-0__notification--${this.type}"
        >
          <pre
            class="kuc-notification-1-6-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?"alert":""}"
          ><!--
          -->${this.text}</pre>
          <button
            class="kuc-notification-1-6-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}us([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),us([xo({type:String})],e.prototype,"text",void 0),us([xo({type:String})],e.prototype,"type",void 0),us([xo({type:Number})],e.prototype,"duration",void 0),us([wo()],e.prototype,"_isOpened",void 0),window.customElements.define("kuc-notification-1-6-0",e),No('\n  kuc-notification-1-6-0,\n  kuc-notification-1-6-0 *,\n  kuc-notification-1-6-0:lang(en),\n  kuc-notification-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-65Medi", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-notification-1-6-0:lang(ja),\n  kuc-notification-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-notification-1-6-0:lang(zh),\n  kuc-notification-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-notification-1-6-0:lang(zh-TW),\n  kuc-notification-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-notification-1-6-0 {\n    color: #ffffff;\n    font-weight: 700;\n    text-align: center;\n    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);\n  }\n  kuc-notification-1-6-0 {\n    position: fixed;\n    display: inline-block;\n    top: 0;\n    width: 100%;\n    line-height: 1.5;\n    z-index: 10000;\n    margin-top: 16px;\n    pointer-events: none;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n  }\n  .kuc-notification-fadein-1-6-0 {\n    animation-name: kuc-notification-fade-in-1-6-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n  }\n  .kuc-notification-fadeout-1-6-0 {\n    animation-name: kuc-notification-fade-out-1-6-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n  }\n  .kuc-notification-1-6-0__notification {\n    position: relative;\n    display: inline-block;\n    text-align: left;\n    padding: 16px 56px 16px 24px;\n    background-color: #e74c3c;\n  }\n  .kuc-notification-1-6-0__notification--info {\n    background-color: #3498db;\n  }\n  .kuc-notification-1-6-0__notification--success {\n    background-color: #91c36c;\n  }\n  .kuc-notification-1-6-0__notification--danger {\n    background-color: #e74c3c;\n  }\n  .kuc-notification-1-6-0__notification__title {\n    display: block;\n    margin: 0px;\n    font-size: 16px;\n    max-width: 500px;\n    min-height: 24px;\n    word-break: break-word;\n    white-space: pre-wrap;\n  }\n  .kuc-notification-1-6-0__notification__close-button {\n    position: absolute;\n    top: 5px;\n    right: 0px;\n    width: 48px;\n    height: 48px;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    pointer-events: auto;\n    cursor: pointer;\n  }\n  @keyframes kuc-notification-fade-in-1-6-0 {\n    0% {\n      visibility: visible;\n      top: -56px;\n    }\n    100% {\n      visibility: visible;\n      top: 0;\n    }\n  }\n  @keyframes kuc-notification-fade-out-1-6-0 {\n    0% {\n      visibility: visible;\n      top: 0;\n    }\n    10% {\n      visibility: visible;\n      top: 14px;\n    }\n    100% {\n      top: -56px;\n    }\n  }\n'),cs=e}})();var hs=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ps;(()=>{if(ps=window.customElements.get("kuc-radio-button-1-6-0"),!ps){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=Po();const t=Da(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}shouldUpdate(e){return e.has("items")&&!Na(this.items)?(Ga(this,qa),!1):e.has("value")&&!za(this.value)?(Ga(this,Ya),!1):!(e.has("selectedIndex")&&!Ra(this.selectedIndex)&&(Ga(this,Za),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value,n=t.dataset.index||"0",o=parseInt(n,10);if(this.value===i&&this.selectedIndex===o)return;const a={oldValue:this.value,value:i};this.value=i,this.selectedIndex=o,Oo(this,"change",a)}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getRadioIconSvgTemplate(e,t){return eo`
    <svg
      class="kuc-radio-button-1-6-0__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        fill="white"
        stroke="#e3e7e8" stroke-width="1"/>
      ${t?eo`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?"#e3e7e8":"#3498db"}"/>`:""}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return Qn`
        <div
          class="kuc-radio-button-1-6-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="radio"
            aria-checked="${i}"
            aria-describedby="${this._GUID}-error"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-radio-button-1-6-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${void 0!==e.value?e.value:""}"
            tabindex="${this._getTabIndex(t,e,this.items)}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            class="kuc-radio-button-1-6-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(this.disabled,i)}${void 0===e.label?e.value:e.label}
          </label>
        </div>
      `}_getTabIndex(e,t,i){return 0===e&&0===i.filter((e=>e.value===this.value)).length||t.value===this.value?"0":"-1"}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return Qn`
        <div
          class="kuc-radio-button-1-6-0__group"
          role="radiogroup"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-radio-button-1-6-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-6-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-6-0>
          </div>
          <div
            class="kuc-radio-button-1-6-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-error-1-6-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-6-0>
        </div>
      `}async updated(){await this.updateComplete,this._updateErrorWidth()}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}_updateErrorWidth(){const e=os(this._labelEl),t=os(this._selectMenuEl);let i=e>239?e:239;t>i&&(i=t),this._errorEl.style.width=i+"px"}}hs([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),hs([xo({type:String})],e.prototype,"error",void 0),hs([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),hs([xo({type:String})],e.prototype,"itemLayout",void 0),hs([xo({type:String})],e.prototype,"label",void 0),hs([xo({type:String})],e.prototype,"value",void 0),hs([xo({type:Number})],e.prototype,"selectedIndex",void 0),hs([xo({type:Boolean})],e.prototype,"borderVisible",void 0),hs([xo({type:Boolean})],e.prototype,"disabled",void 0),hs([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),hs([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),hs([xo({type:Array})],e.prototype,"items",void 0),hs([Co(".kuc-radio-button-1-6-0__group__label")],e.prototype,"_labelEl",void 0),hs([Co(".kuc-base-error-1-6-0__error")],e.prototype,"_errorEl",void 0),hs([Co(".kuc-radio-button-1-6-0__group__select-menu")],e.prototype,"_selectMenuEl",void 0),window.customElements.define("kuc-radio-button-1-6-0",e),No('\n  kuc-radio-button-1-6-0,\n  kuc-radio-button-1-6-0 *,\n  kuc-radio-button-1-6-0:lang(en),\n  kuc-radio-button-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-radio-button-1-6-0:lang(ja),\n  kuc-radio-button-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-radio-button-1-6-0:lang(zh),\n  kuc-radio-button-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-radio-button-1-6-0:lang(zh-TW),\n  kuc-radio-button-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-radio-button-1-6-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    min-width: 239px;\n    vertical-align: top;\n    line-height: 1.5;\n  }\n\n  kuc-radio-button-1-6-0[hidden] {\n    display: none;\n  }\n\n  .kuc-radio-button-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    margin: 0px;\n    width: 100%;\n  }\n\n  .kuc-radio-button-1-6-0__group__label {\n    display: inline-block;\n    padding: 4px 0 8px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-radio-button-1-6-0__group__label[hidden] {\n    display: none;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu {\n    display: block;\n    min-width: 239px;\n    width: 100%;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu[bordervisible] {\n    border-color: #e3e7e8;\n    border-width: 1px;\n    border-style: solid;\n    padding-top: 4px;\n    box-sizing: border-box;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item {\n    margin-left: 4px;\n    margin-bottom: 4px;\n    margin-right: 16px;\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    display: inline-block;\n    height: 24px;\n    line-height: 24px;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item[itemlayout="vertical"] {\n    display: block;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item[focused] {\n    border: 1px solid #3498db;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item__input:hover\n    + .kuc-radio-button-1-6-0__group__select-menu__item__label {\n    color: #666666;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    left: -30px;\n    box-sizing: border-box;\n    margin-top: -11px;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n    border-radius: 9px;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item__input[disabled]\n    + .kuc-radio-button-1-6-0__group__select-menu__item__label {\n    color: #888888;\n    cursor: not-allowed;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item__label {\n    cursor: pointer;\n    position: relative;\n    margin-left: 32px;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: nowrap;\n  }\n'),ps=e}})();let _s;(()=>{if(_s=window.customElements.get("kuc-spinner-1-6-0"),!_s){class e extends Bo{constructor(e){super(),this.text="",this._body=document.getElementsByTagName("BODY")[0];const t=Da(e);Object.assign(this,t)}_getSpinnerSvgTemplate(){return eo`
        <svg
          class="kuc-spinner-1-6-0__spinner__loader"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle r="4" cx="30.43" cy="4.72" opacity="0.3" />
          <circle r="4" cx="39.85" cy="10.15" opacity="0.3" />
          <circle r="4" cx="45.28" cy="19.56" opacity="0.3" />
          <circle r="4" cx="45.28" cy="30.43" opacity="0.3" />
          <circle r="4" cx="39.85" cy="39.85" opacity="0.3" />
          <circle r="4" cx="30.44" cy="45.28" opacity="0.4" />
          <circle r="4" cx="19.56" cy="45.28" opacity="0.5" />
          <circle r="4" cx="10.15" cy="39.85" opacity="0.6" />
          <circle r="4" cx="4.7" cy="30.44" opacity="0.7" />
          <circle r="4" cx="4.7" cy="19.56" opacity="0.8" />
          <circle r="4" cx="10.15" cy="10.15" opacity="0.9" />
          <circle r="4" cx="19.56" cy="4.72" opacity="1" />
        </svg>
      `}open(){!1===this._body.classList.contains("kuc--has-spinner")&&this._body.classList.add("kuc--has-spinner"),this._body.appendChild(this)}close(){this._body.classList.remove("kuc--has-spinner"),this.parentNode&&this.parentNode.removeChild(this)}render(){return Qn`
        <div class="kuc-spinner-1-6-0__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner-1-6-0__spinner__text${this.text?"":" visually-hidden"}"
          >
            ${this.text?this.text:"now loading…"}
          </div>
        </div>
        <div class="kuc-spinner-1-6-0__mask"></div>
      `}}(function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);a>3&&s&&Object.defineProperty(t,i,s)})([xo({type:String})],e.prototype,"text",void 0),window.customElements.define("kuc-spinner-1-6-0",e),No('\n  kuc-spinner-1-6-0,\n  kuc-spinner-1-6-0 *,\n  kuc-spinner-1-6-0:lang(en),\n  kuc-spinner-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-spinner-1-6-0:lang(ja),\n  kuc-spinner-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-spinner-1-6-0:lang(zh),\n  kuc-spinner-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-spinner-1-6-0:lang(zh-TW),\n  kuc-spinner-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-spinner-1-6-0 {\n    font-size: 14px;\n    color: #333333;\n  }\n  .kuc-spinner-1-6-0__spinner {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10000;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .kuc-spinner-1-6-0__spinner__loader {\n    width: 50px;\n    height: 50px;\n    animation: rotate-loading 1s steps(12) infinite;\n    fill: #99ccff;\n  }\n  .kuc-spinner-1-6-0__spinner__text {\n    margin: 10px 0;\n  }\n  .visually-hidden {\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    border: 0;\n    padding: 0;\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    margin: -1px;\n  }\n  .kuc-spinner-1-6-0__mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #666666;\n    opacity: 0.6;\n    z-index: 9999;\n  }\n  .kuc--has-spinner {\n    overflow: hidden;\n  }\n  @keyframes rotate-loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n'),_s=e}})();var bs=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ms;(()=>{if(ms=window.customElements.get("kuc-text-1-6-0"),!ms){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=Po();const t=Da(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};Oo(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,Oo(this,"change",i)}_handleInputText(e){e.stopPropagation();const t={value:e.target.value,data:e.data};Oo(this,"input",t)}render(){return Qn`
        <div class="kuc-text-1-6-0__group">
          <label
            class="kuc-text-1-6-0__group__label"
            for="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-6-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-6-0>
          </label>
          <div class="kuc-text-1-6-0__group__input-form">
            <div class="kuc-text-1-6-0__group__input-form__prefix-outer">
              <span
                class="kuc-text-1-6-0__group__input-form__prefix-outer__prefix"
                ?hidden="${!this.prefix}"
                >${this.prefix}</span
              >
            </div>
            <div class="kuc-text-1-6-0__group__input-form__input-outer">
              <input
                class="kuc-text-1-6-0__group__input-form__input-outer__input"
                id="${this._GUID}-label"
                placeholder="${this.placeholder}"
                textAlign="${this.textAlign}"
                type="text"
                .value="${this.value}"
                aria-required="${this.requiredIcon}"
                aria-invalid="${""!==this.error}"
                aria-describedby="${this._GUID}-error"
                @focus="${this._handleFocusInput}"
                @change="${this._handleChangeInput}"
                @input="${this._handleInputText}"
                ?disabled="${this.disabled}"
              />
            </div>
            <div class="kuc-text-1-6-0__group__input-form__suffix-outer">
              <span
                class="kuc-text-1-6-0__group__input-form__suffix-outer__suffix"
                ?hidden="${!this.suffix}"
                >${this.suffix}</span
              >
            </div>
          </div>
          <kuc-base-error-1-6-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-6-0>
        </div>
      `}}bs([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),bs([xo({type:String})],e.prototype,"error",void 0),bs([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),bs([xo({type:String})],e.prototype,"label",void 0),bs([xo({type:String})],e.prototype,"placeholder",void 0),bs([xo({type:String})],e.prototype,"prefix",void 0),bs([xo({type:String})],e.prototype,"suffix",void 0),bs([xo({type:String})],e.prototype,"textAlign",void 0),bs([xo({type:String})],e.prototype,"value",void 0),bs([xo({type:Boolean})],e.prototype,"disabled",void 0),bs([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),bs([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),window.customElements.define("kuc-text-1-6-0",e),No('\nkuc-text-1-6-0,\nkuc-text-1-6-0 *,\nkuc-text-1-6-0:lang(en),\nkuc-text-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-text-1-6-0:lang(ja),\nkuc-text-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-text-1-6-0:lang(zh),\nkuc-text-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-text-1-6-0:lang(zh-TW),\nkuc-text-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\nkuc-text-1-6-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  min-width: 177px;\n  width: 177px;\n  line-height: 1.5;\n}\nkuc-text-1-6-0[hidden] {\n  display: none;\n}\n.kuc-text-1-6-0__group {\n  border: none;\n  padding: 0px;\n  height: auto;\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n  margin: 0px;\n}\n.kuc-text-1-6-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-text-1-6-0__group__label[hidden] {\n  display: none;\n}\n.kuc-text-1-6-0__group__input-form {\n  display: table;\n  width: 100%;\n}\n.kuc-text-1-6-0__group__input-form__prefix-outer,\n.kuc-text-1-6-0__group__input-form__input-outer,\n.kuc-text-1-6-0__group__input-form__suffix-outer {\n  display: table-cell;\n}\n.kuc-text-1-6-0__group__input-form__prefix-outer__prefix {\n  padding-right: 4px;\n  white-space: nowrap;\n}\n.kuc-text-1-6-0__group__input-form__input-outer {\n  min-width: 26px;\n  width: 100%;\n}\ninput[type="text"].kuc-text-1-6-0__group__input-form__input-outer__input {\n  width: var(--kuc-text-input-width, 100%);\n  height: var(--kuc-text-input-height, 40px);\n  font-size: var(--kuc-text-input-font-size, 14px);\n  color: var(--kuc-text-input-color, #000000);\n  min-width: 100%;\n  padding: 0 8px;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n.kuc-text-1-6-0__group__input-form__input-outer__input[textAlign="left"] {\n  text-align: left;\n}\n.kuc-text-1-6-0__group__input-form__input-outer__input[textAlign="right"] {\n  text-align: right;\n}\n.kuc-text-1-6-0__group__input-form__input-outer__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-text-1-6-0__group__input-form__input-outer__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.kuc-text-1-6-0__group__input-form__suffix-outer__suffix {\n  padding-left: 4px;\n  white-space: nowrap;\n}\n'),ms=e}})();var gs=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let fs;(()=>{if(fs=window.customElements.get("kuc-textarea-1-6-0"),fs)return;class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=Po();const t=Da(e);Object.assign(this,t)}_handleFocusTextarea(e){const t={value:this.value};Oo(this,"focus",t)}_handleChangeTextarea(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,Oo(this,"change",i)}_handleInputTextArea(e){e.stopPropagation();const t={value:e.target.value,data:e.data};Oo(this,"input",t)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(e){if(!this._onResize)return;const t=this._textarea.getBoundingClientRect();let i=e.clientX-t.left,n=e.clientY-t.top;i<299&&(i=299),n<125&&(n=125),this.style.width=i+"px",this._textarea.style.height=n+"px"}_getResizerButtonSvgTemplate(){return eo`
      <svg height="16" width="16">
        <g fill="none" stroke="#b6b6b6" stroke-width="2">
          <line x1="14" x2="16" y1="15" y2="15" />
          <line x1="14" x2="16" y1="11" y2="11" />
          <line x1="14" x2="16" y1="7" y2="7" />
          <line x1="10" x2="12" y1="15" y2="15" />
          <line x1="6" x2="8" y1="15" y2="15" />
          <line x1="10" x2="12" y1="11" y2="11" />
        </g>
      </svg>
      `}firstUpdated(){document.addEventListener("mousemove",(e=>this._handleMouseMoveDocument(e))),document.addEventListener("mouseup",(e=>this._handleMouseUpDocument()))}render(){return Qn`
        <div class="kuc-textarea-1-6-0__group">
          <label
            class="kuc-textarea-1-6-0__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-label"
          >
            <kuc-base-label-1-6-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-6-0>
          </label>
          <textarea
            id="${this._GUID}-label"
            class="kuc-textarea-1-6-0__group__textarea"
            placeholder="${this.placeholder}"
            .value="${this.value}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            aria-invalid="${""!==this.error}"
            @change="${this._handleChangeTextarea}"
            @focus="${this._handleFocusTextarea}"
            @input="${this._handleInputTextArea}"
            ?disabled="${this.disabled}"
          >
          </textarea>
          <div
            class="kuc-textarea-1-6-0__group__resizer"
            @mousedown="${this._handleMouseDownResize}"
            ?hidden="${this.disabled}"
          >
            ${this._getResizerButtonSvgTemplate()}
          </div>
          <kuc-base-error-1-6-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-6-0>
        </div>
      `}}gs([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),gs([xo({type:String})],e.prototype,"error",void 0),gs([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),gs([xo({type:String})],e.prototype,"label",void 0),gs([xo({type:String})],e.prototype,"placeholder",void 0),gs([xo({type:String})],e.prototype,"value",void 0),gs([xo({type:Boolean})],e.prototype,"disabled",void 0),gs([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),gs([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),gs([Co(".kuc-textarea-1-6-0__group__textarea")],e.prototype,"_textarea",void 0),window.customElements.define("kuc-textarea-1-6-0",e),No('\n  kuc-textarea-1-6-0,\n  kuc-textarea-1-6-0 *,\n  kuc-textarea-1-6-0:lang(en),\n  kuc-textarea-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-textarea-1-6-0:lang(ja),\n  kuc-textarea-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-textarea-1-6-0:lang(zh),\n  kuc-textarea-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-textarea-1-6-0:lang(zh-TW),\n  kuc-textarea-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-textarea-1-6-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    vertical-align: top;\n    width: 299px;\n    line-height: 1.5;\n  }\n  kuc-textarea-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-textarea-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-textarea-1-6-0__group__label {\n    white-space: nowrap;\n    display: inline-block;\n    padding: 4px 0px 8px 0px;\n  }\n  .kuc-textarea-1-6-0__group__label[hidden] {\n    display: none;\n  }\n  textarea.kuc-textarea-1-6-0__group__textarea {\n    display: block;\n    border: 1px solid #e3e7e8;\n    box-sizing: border-box;\n    font-size: 14px;\n    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n    min-width: 299px;\n    min-height: 125px;\n    padding: 8px;\n    resize: none;\n    width: 100%;\n    background-color: #ffffff;\n  }\n  .kuc-textarea-1-6-0__group__textarea:focus {\n    outline: none;\n    border-color: #3498db;\n    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n    border: 1px solid #3498db;\n    background-color: #ffffff;\n    color: #333333;\n  }\n  .kuc-textarea-1-6-0__group__textarea:disabled {\n    color: #888888;\n    background-color: #d4d7d7;\n    box-shadow: none;\n    cursor: not-allowed;\n    resize: none;\n  }\n  .kuc-textarea-1-6-0__group__resizer {\n    position: relative;\n    width: 16px;\n    height: 16px;\n    cursor: se-resize;\n    float: right;\n    margin: -16px 0px;\n  }\n'),fs=e})();const vs=fs;var ys=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ks;(()=>{if(ks=window.customElements.get("kuc-dialog-1-6-0"),!ks){class e extends Bo{constructor(e){super(),this.icon="",this.title="",this.content="",this.footer="",this._triggeredElement=null,this._content="",this._footer="",this._GUID=Po();const t=Da(e);Object.assign(this,t)}_handleFocusFirstDummy(){const e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_handleKeyDownDialog(e){"Escape"===e.key&&(e.preventDefault(),this.close())}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return eo`
        <svg
          class="kuc-dialog-1-6-0__dialog__header__close-button-svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="#f7f9fa"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="#888888"
          />
        </svg>
      `}_getIconTemplate(){switch(this.icon){case"info":return eo`
            <svg
              class="kuc-dialog-1-6-0__dialog__content__icon-info"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#448aca"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.71195 7.96235C8.81719 7.69023 8.67929 7.5524 8.5559 7.5524C7.98977 7.5524 7.24945 8.87059 6.97364 8.87059C6.86531 8.86323 6.77965 8.7783 6.77405 8.67269C6.77405 8.40057 7.44905 7.76444 7.64864 7.57007C8.25505 6.95498 9.08189 6.59163 9.95671 6.5558C10.6172 6.5558 11.3249 6.94808 10.7696 8.4147L9.66276 11.3656C9.53205 11.6338 9.44394 11.9198 9.40147 12.2138C9.3955 12.2661 9.41197 12.3186 9.44701 12.3587C9.48204 12.3988 9.53253 12.4231 9.58655 12.4258C10.0474 12.4258 10.893 11.1394 11.1107 11.1394C11.221 11.1597 11.2987 11.2565 11.2922 11.3656C11.2922 11.8038 9.49582 13.6804 7.9426 13.6804C7.38735 13.6804 7.00268 13.4224 7.00268 12.8499C7.00268 12.1219 7.52889 10.8815 7.63413 10.6235L8.71195 7.96235ZM9.53937 4.97962C9.55317 4.3095 10.114 3.77277 10.8023 3.77099C11.0868 3.75724 11.364 3.86105 11.5658 4.05686C11.7675 4.25267 11.8751 4.52229 11.862 4.79939C11.8604 5.12532 11.7247 5.43704 11.4853 5.66484C11.2459 5.89264 10.9228 6.01752 10.5882 6.01156C10.3033 6.02775 10.0251 5.92385 9.82434 5.72636C9.62362 5.52886 9.51981 5.25684 9.53937 4.97962Z"
                fill="white"
              />
            </svg>
          `;case"success":return eo`
            <svg
              class="kuc-dialog-1-6-0__dialog__content__icon-success"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#2ecc71"
              />
              <path 
                d="M7.45159 10.3666L4.64513 7.44514L2.9032 9.32996L7.45159 13.9478L15.0967 6.59697L13.258 4.8064L7.45159 10.3666Z"
                fill="white"
              />
            </svg>
          `;case"error":return eo`
            <svg
              class="kuc-dialog-1-6-0__dialog__content__icon-error"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#e74c3c"
              />
              <path
                d="M10.1497 8.99989L12.7572 6.39244L12.9339 6.21567L12.7572 6.03889L11.9617 5.24339L11.7849 5.06661L11.6081 5.24339L9.00063 7.85084L6.39317 5.24339L6.2164 5.06661L6.03962 5.24339L5.24412 6.03889L5.06734 6.21567L5.24412 6.39244L7.85159 8.99989L5.24412 11.6074L5.06734 11.7842L5.24412 11.9609L6.03962 12.7564L6.2164 12.9332L6.39317 12.7564L9.00063 10.1489L11.6081 12.7564L11.7849 12.9332L11.9617 12.7564L12.7572 11.9609L12.9339 11.7842L12.7572 11.6074L10.1497 8.99989Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
          `;case"warning":return eo`
            <svg
              class="kuc-dialog-1-6-0__dialog__content__icon-warning"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#ffcc00"
              />
              <path
                d="M7.74182 3.76978H10.645L9.91924 9.42423H8.46763L7.74182 3.76978Z"
                fill="#333333"
              />
              <rect
                x="7.74182"
                y="11.3088"
                width="2.90323"
                height="2.82722"
                rx="1"
                fill="#333333"
              />
            </svg>
          `;case"question":return eo`
            <svg
              class="kuc-dialog-1-6-0__dialog__content__icon-question"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.87676C10.383 9.34006 10.1707 9.73991 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90432C7.89783 9.11869 8.32111 8.42752 9.1947 7.79043C9.2632 7.7432 9.91722 7.31559 9.91722 6.72573C9.91722 6.23647 9.54947 5.89467 9.022 5.89467C8.27063 5.89467 7.85168 6.27144 7.81166 6.99037C7.80589 7.08736 7.72549 7.16344 7.62815 7.16344H7.53044H5.64914C5.59902 7.16344 5.54999 7.14252 5.51574 7.10611C5.48149 7.07005 5.46274 7.02066 5.46562 6.97054C5.56802 4.97527 6.86452 3.83053 9.02416 3.83053C10.6614 3.83053 12.4248 4.71892 12.4248 6.66984C12.4248 7.97683 12.1266 8.22381 11.0933 8.87676ZM8.99982 0C4.02976 0 0 4.02948 0 9C0 13.9709 4.02976 18 8.99982 18C13.9702 18 18 13.9709 18 9C18 4.02948 13.9702 0 8.99982 0ZM10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1038 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1038 10.503 12.3061V14.5101Z"
                fill="#666666"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.8768C10.383 9.3401 10.1707 9.73995 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90436C7.89783 9.11872 8.32111 8.42755 9.1947 7.79047C9.2632 7.74323 9.91722 7.31562 9.91722 6.72577C9.91722 6.2365 9.54947 5.8947 9.022 5.8947C8.27063 5.8947 7.85168 6.27148 7.81166 6.99041C7.80589 7.0874 7.72549 7.16347 7.62815 7.16347H7.53044H5.64914C5.59902 7.16347 5.54999 7.14256 5.51574 7.10615C5.48149 7.07009 5.46274 7.0207 5.46562 6.97058C5.56802 4.97531 6.86452 3.83057 9.02416 3.83057C10.6614 3.83057 12.4248 4.71896 12.4248 6.66988C12.4248 7.97687 12.1266 8.22384 11.0933 8.8768V8.8768Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1039 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1039 10.503 12.3061V14.5101Z"
                fill="white"
              />
            </svg>
          `;default:return""}}update(e){e.has("content")&&(this._content=Ta(this.content)),e.has("footer")&&(this._footer=Ta(this.footer)),super.update(e)}open(){const e=document.getElementsByTagName("body")[0];e.appendChild(this),e.classList.add("kuc--has-dialog"),this.performUpdate(),this.setAttribute("opened",""),this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()}close(){document.getElementsByTagName("body")[0].classList.remove("kuc--has-dialog"),this.removeAttribute("opened"),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus(),Oo(this,"close")}render(){return Qn`
        <span
          class="kuc-dialog-1-6-0__first-dummy"
          tabIndex="0"
          @focus="${this._handleFocusFirstDummy}"
        ></span>
        <div
          class="kuc-dialog-1-6-0__dialog"
          role="dialog"
          tabindex="-1"
          aria-labelledby="${this._GUID}-title"
          aria-modal="true"
          @keydown="${this._handleKeyDownDialog}"
        >
          <div class="kuc-dialog-1-6-0__dialog__header">
            <h2
              class="kuc-dialog-1-6-0__dialog__header__title"
              id="${this._GUID}-title"
            >
              ${this.title}
            </h2>
            <button
              class="kuc-dialog-1-6-0__dialog__header__close-button"
              type="button"
              aria-label="close"
              @click="${this._handleClickCloseButton}"
            >
              ${this._getCloseButtonSvgTemplate()}
            </button>
          </div>
          <div class="kuc-dialog-1-6-0__dialog__content">
            <div class="kuc-dialog-1-6-0__dialog__content__icon">
              ${this._getIconTemplate()}
            </div>
            <div class="kuc-dialog-1-6-0__dialog__content__content">
              ${this._content}
            </div>
          </div>
          <div class="kuc-dialog-1-6-0__dialog__footer">${this._footer}</div>
        </div>
        <span
          class="kuc-dialog-1-6-0__last-dummy"
          tabIndex="0"
          @focus="${this._handleFocusLastDummy}"
        ></span>
        <div class="kuc-dialog-1-6-0__mask"></div>
      `}}ys([xo({type:String})],e.prototype,"icon",void 0),ys([xo({type:String})],e.prototype,"title",void 0),ys([xo()],e.prototype,"content",void 0),ys([xo()],e.prototype,"footer",void 0),ys([Co(".kuc-dialog-1-6-0__dialog")],e.prototype,"_dialogEl",void 0),ys([Io("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']")],e.prototype,"_focusableElements",void 0),window.customElements.define("kuc-dialog-1-6-0",e),No('\n  kuc-dialog-1-6-0,\n  kuc-dialog-1-6-0 *,\n  kuc-dialog-1-6-0:lang(en),\n  kuc-dialog-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-dialog-1-6-0:lang(ja),\n  kuc-dialog-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-dialog-1-6-0:lang(zh),\n  kuc-dialog-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-dialog-1-6-0:lang(zh-TW),\n  kuc-dialog-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n\n  kuc-dialog-1-6-0 {\n    display: none;\n  }\n\n  kuc-dialog-1-6-0[opened] {\n    display: block;\n  }\n\n  .kuc-dialog-1-6-0__dialog {\n    min-width: 320px;\n    font-size: 20px;\n    background-color: #ffffff;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10000;\n  }\n  \n  .kuc-dialog-1-6-0__dialog:focus-visible {\n    outline: 1px solid #3498db;\n  }\n\n  .kuc-dialog-1-6-0__dialog__header {\n    min-height: 64px;\n    border-bottom: 1px solid #e3e7e8;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .kuc-dialog-1-6-0__dialog__header__title {\n    font-size: 24px;\n    padding: 0 24px;\n    align-self: center;\n    font-weight: 400;\n  }\n\n  .kuc-dialog-1-6-0__dialog__header__close-button {\n    width: 48px;\n    height: 48px;\n    border: none;\n    background-color: #ffffff;\n    margin-right: 12px;\n    margin-top: 11px;\n    cursor: pointer;\n  }\n\n  .kuc-dialog-1-6-0__dialog__header__close-button:focus-visible {\n    outline: 1px solid #3498db;\n  }\n\n  .kuc-dialog-1-6-0__dialog__header__close-button-svg {\n    vertical-align: middle;\n  }\n\n  .kuc-dialog-1-6-0__dialog__content {\n    border-bottom: #e3e7e8 solid 1px;\n    background-color: #f7f9fa;\n    padding: 24px;\n    display: flex;\n  }\n\n  .kuc-dialog-1-6-0__dialog__content__icon-info,\n  .kuc-dialog-1-6-0__dialog__content__icon-success,\n  .kuc-dialog-1-6-0__dialog__content__icon-error,\n  .kuc-dialog-1-6-0__dialog__content__icon-warning,\n  .kuc-dialog-1-6-0__dialog__content__icon-question {\n    margin-right: 16px;\n    width: 24px;\n    height: 24px;\n  }\n\n  .kuc-dialog-1-6-0__dialog__footer {\n    padding: 24px;\n  }\n\n  .kuc-dialog-1-6-0__mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #000000;\n    opacity: 0.6;\n    z-index: 9999;\n  }\n\n  .kuc--has-dialog {\n    overflow: hidden;\n  }\n\n  .kuc--has-dialog .kuc-dialog-1-6-0__dialog {\n    overflow-x: hidden;\n    overflow-y: auto;\n    max-height: 80vh;\n  }\n'),ks=e}})();var xs=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class ws extends Bo{constructor(){super(),this.year=2021,this.postfix="",this._listBoxVisible=!1,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("scroll",this._handleScrollDocument)}),1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(e){this._listBoxItems=this._getYearOptions().map((e=>({value:`${e}`,label:`${e}${this.postfix}`}))),super.update(e)}render(){return Qn`
      <button
        class="kuc-base-datetime-header-year-1-6-0__toggle"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?"-1":"0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year-1-6-0__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year-1-6-0__toggle__icon"
          >${$a()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,e.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),super.update(e)}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleScrollDocument(){const e=Ia(this);e.inputToBottom>=e.inputToTop?Ca(this,"bottom"):Ca(this,"top")}_getListBoxTemplate(){return this._listBoxVisible?Qn`
          <kuc-base-datetime-listbox-1-6-0
            .items="${this._listBoxItems||[]}"
            .value="${this.year.toString()}"
            class="kuc-base-datetime-header-year-1-6-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-6-0>
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleClickDropdownYearToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),Oo(this,"kuc:year-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(e){"Tab"!==e.key&&(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(e)>-1&&this._openListBox()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.year=Number(e.detail.value);const t={value:`${this.year}`};Oo(this,"kuc:year-dropdown-change",t)}_openListBox(){this._listBoxVisible=!0}_getYearOptions(){const e=[];Number.isInteger(this.year)||(this.year=2021);let t=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(;t<=i;t++)e.push(t);return e}}xs([xo({type:Number})],ws.prototype,"year",void 0),xs([xo({type:String})],ws.prototype,"postfix",void 0),xs([wo()],ws.prototype,"_listBoxVisible",void 0),xs([Co(".kuc-base-datetime-header-year-1-6-0__toggle")],ws.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-year-1-6-0")||(No("\n.kuc-base-datetime-header-year-1-6-0__toggle {\n  position: relative;\n  box-sizing: border-box;\n  height: 32px;\n  padding: 0 24px 0 8px;\n  line-height: 30px;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.kuc-base-datetime-header-year-1-6-0__toggle__icon {\n  position: absolute;\n  flex: none;\n  width: 24px;\n  height: 32px;\n}\n.kuc-base-datetime-header-year-1-6-0__toggle__label {\n  font-size: 13px;\n  color: #333333;\n}\n.kuc-base-datetime-header-year-1-6-0__toggle:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n"),window.customElements.define("kuc-base-datetime-header-year-1-6-0",ws));var $s=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Cs extends Bo{constructor(){super(),this.language="auto",this.month=1,this._listBoxVisible=!1,this._locale=xa("en"),this._monthLabel="",this._maxHeight=1e3,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("scroll",this._handleScrollDocument)}),1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(e){e.has("language")&&(this._locale=xa(this.language),this._listBoxItems=this._getListBoxItems()),e.has("month")&&(this._monthLabel=this._getMonthLabel()),super.update(e)}render(){return Qn`
      <button
        class="kuc-base-datetime-header-month-1-6-0__toggle"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?"-1":"0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month-1-6-0__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month-1-6-0__toggle__icon"
          >${$a()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,e.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),super.update(e)}_handleScrollDocument(){const e=Ia(this);e.inputToBottom>=e.inputToTop?Ca(this,"bottom"):Ca(this,"top")}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_getListBoxTemplate(){return this._listBoxVisible?Qn`
          <kuc-base-datetime-listbox-1-6-0
            .items="${this._listBoxItems||[]}"
            .value="${this.month.toString()}"
            .maxHeight="${this._maxHeight}"
            class="kuc-base-datetime-header-month-1-6-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-6-0>
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleClickDropdownMonthToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),Oo(this,"kuc:month-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleKeyDownMonthToggle(e){this._handleTabKey(e.key)||(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(e)>-1&&this._openListBox()}_handleTabKey(e){return"Tab"===e}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.month=Number(e.detail.value);const t={value:`${this.month}`};Oo(this,"kuc:month-dropdown-change",t)}_openListBox(){this._listBoxVisible=!0}_getListBoxItems(){return this._locale.MONTH_SELECT.map(((e,t)=>({value:`${t+1}`,label:`${e}`})))}_getMonthLabel(){const e=this._locale.MONTH_SELECT.filter(((e,t)=>this.month===t+1));return e.length>0?e[0]:"JANUARY"}}$s([xo({type:String,attribute:"lang",reflect:!0})],Cs.prototype,"language",void 0),$s([xo({type:Number})],Cs.prototype,"month",void 0),$s([wo()],Cs.prototype,"_listBoxVisible",void 0),$s([Co(".kuc-base-datetime-header-month-1-6-0__toggle")],Cs.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-month-1-6-0")||(No("\n.kuc-base-datetime-header-month-1-6-0__toggle {\n  position: relative;\n  box-sizing: border-box;\n  height: 32px;\n  padding: 0 24px 0 8px;\n  line-height: 30px;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.kuc-base-datetime-header-month-1-6-0__toggle__icon {\n  position: absolute;\n  flex: none;\n  width: 24px;\n  height: 32px;\n}\n.kuc-base-datetime-header-month-1-6-0__toggle__label {\n  font-size: 13px;\n  color: #333333;\n}\n.kuc-base-datetime-header-month-1-6-0__toggle:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n"),window.customElements.define("kuc-base-datetime-header-month-1-6-0",Cs));var Is=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Ss extends Bo{constructor(){super(...arguments),this.language="en",this.month=1,this.year=2021,this._locale=xa("en")}update(e){e.has("language")&&(this._locale=xa(this.language)),super.update(e)}render(){return Qn`
      <div class="kuc-base-datetime-calendar-header-1-6-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-6-0__group__button kuc-base-datetime-calendar-header-1-6-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${eo`
    <svg
      class="kuc-base-datetime-calendar-header__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.06077 7L8.53044 1.53033L7.46978 0.469666L0.939453 7L7.46978 13.5303L8.53044 12.4697L3.06077 7Z"
        fill="#888888"
      />
    </svg>`}
        </button>
        <div class="kuc-base-datetime-calendar-header-1-6-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-6-0__group__button kuc-base-datetime-calendar-header-1-6-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${eo`
    <svg
      class="kuc-base-datetime-calendar-header__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.93923 7L0.469557 1.53033L1.53022 0.469666L8.06055 7L1.53022 13.5303L0.469557 12.4697L5.93923 7Z"
        fill="#888888"
      />
    </svg>`}
        </button>
      </div>
    `}_getYearTemplate(){return Qn`
      <kuc-base-datetime-header-year-1-6-0
        class="kuc-base-datetime-calendar-header-1-6-0__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year-1-6-0>
    `}_getMonthTemplate(){return Qn`
      <kuc-base-datetime-header-month-1-6-0
        class="kuc-base-datetime-calendar-header-1-6-0__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month-1-6-0>
    `}_getYearMonthTemplate(){return"zh"===this.language||"ja"===this.language||"zh-TW"===this.language?Qn` ${this._getYearTemplate()}${this._getMonthTemplate()} `:Qn` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleMonthDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.month=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.year=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),1===this.month?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),Oo(this,"kuc:calendar-header-previous-shifttab"))}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),12===this.month?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const e=this.year,t=this.month;Oo(this,"kuc:calendar-header-change",{value:`${e}-${t}`})}}Is([xo({type:String,attribute:"lang",reflect:!0})],Ss.prototype,"language",void 0),Is([xo({type:Number,hasChanged(e){return(t=e)>0&&t<13;var t}})],Ss.prototype,"month",void 0),Is([xo({type:Number,hasChanged(e){return(t=e)>=0&&t<1e4;var t}})],Ss.prototype,"year",void 0),Is([Co(".kuc-base-datetime-calendar-header-1-6-0__month")],Ss.prototype,"_baseDateTimeHeaderMonthEl",void 0),Is([Co(".kuc-base-datetime-calendar-header-1-6-0__year")],Ss.prototype,"_baseDateTimeHeaderYearEl",void 0),Is([Co(".kuc-base-datetime-header-month-1-6-0__listbox")],Ss.prototype,"_listBoxMonthEl",void 0),Is([Co(".kuc-base-datetime-header-year-1-6-0__listbox")],Ss.prototype,"_listBoxYearEl",void 0),window.customElements.get("kuc-base-datetime-calendar-header-1-6-0")||(No('\nkuc-base-datetime-calendar-header-1-6-0,\nkuc-base-datetime-calendar-header-1-6-0 *,\nkuc-base-datetime-calendar-header-1-6-0:lang(en),\nkuc-base-datetime-calendar-header-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-calendar-header-1-6-0:lang(ja),\nkuc-base-datetime-calendar-header-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n  font-weight: 700;\n}\nkuc-base-datetime-calendar-header-1-6-0:lang(zh),\nkuc-base-datetime-calendar-header-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-calendar-header-1-6-0:lang(zh-TW),\nkuc-base-datetime-calendar-header-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\n.kuc-base-datetime-calendar-header-1-6-0__group {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e3e7e8;\n  padding: 0;\n  white-space: nowrap;\n  width: 266px;\n  height: 44px;\n}\n.kuc-base-datetime-calendar-header-1-6-0__group__button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  width: 38px;\n  height: 32px;\n  margin: 0;\n  text-align: center;\n}\n.kuc-base-datetime-calendar-header-1-6-0__group__button:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n.kuc-base-datetime-calendar-header-1-6-0__group__button-icon {\n  vertical-align: middle;\n}\n.kuc-base-datetime-calendar-header-1-6-0__group__center {\n  width: 190px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n.kuc-base-datetime-calendar-header-1-6-0__month {\n  margin: 0 4px 0 4px;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-header-1-6-0",Ss));var Es=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Ts extends Bo{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=xa("en"),this._handleClickDocument=this._handleClickDocument.bind(this),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument),document.addEventListener("keydown",this._handleKeyDownDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),document.removeEventListener("keydown",this._handleKeyDownDocument),super.disconnectedCallback()}update(e){if(e.forEach(((e,t)=>{"language"===t&&(this._locale=xa(this.language))})),e.has("month")&&(this._month=this.month),e.has("year")&&(this._year=this.year),e.has("value")){const{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return Qn`
      <table class="kuc-base-datetime-calendar-body-1-6-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(e){e.has("value")&&this._focusDateEl(),super.update(e)}_handleClickDocument(){Oo(this,"kuc:calendar-body-blur",{})}_handleKeyDownDocument(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),Oo(this,"kuc:calendar-body-blur",{}))}_handleClickDate(e){e.preventDefault(),e.stopPropagation();const t=e.target;t.setAttribute("aria-selected","true");const i=t.getAttribute("data-date")||"";this._dispatchClickEvent(i)}_handleKeyDownDate(e){let t=!1;switch(e.key){case"Up":case"ArrowUp":t=!0,this._moveToDate(-7);break;case"Down":case"ArrowDown":t=!0,this._moveToDate(7);break;case"Left":case"ArrowLeft":t=!0,this._moveToDate(-1);break;case"Right":case"ArrowRight":t=!0,this._moveToDate(1);break;case" ":case"Enter":{t=!0;const e=this._getSelectedValue();this._dispatchClickEvent(e);break}}t&&(e.stopPropagation(),e.preventDefault())}_dispatchClickEvent(e){const t={oldValue:this.value,value:e};Oo(this,"kuc:calendar-body-click-date",t),this.value=e}_isToday(e){const t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_moveToDate(e){let t=this.value;const i=this._getSelectedValue(),{day:n}=this._separateDateValue(i);t=`${this._year}-${ya(this._month)}-${n}`;const o=new Date(t||this._getValueItemFocused());if(isNaN(o.getTime()))return;o.setDate(o.getDate()+e);const a=this._getDateString(o),s=t;this.value=a,Oo(this,"kuc:calendar-body-change-date",{oldValue:s,value:a})}_separateDateValue(e=this.value){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.dataset.date||"":this._selectedItem&&this._selectedItem.getAttribute("data-date")||""}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute("data-date")||""}_getDateClass(e,t){return t?this._isToday(e)?" kuc-base-datetime-calendar-body-1-6-0__table__date--selected--today":"":this._isToday(e)?" kuc-base-datetime-calendar-body-1-6-0__table__date--selected--today":" kuc-base-datetime-calendar-body-1-6-0__table__date--other-month"}_getDateString(e=new Date){return`${e.getFullYear()}-${ya(e.getMonth()+1)}-${ya(e.getDate())}`}_isSameDayOfMoment(e){const t=parseInt(e[1],10),i=parseInt(e[2],10),n=parseInt(e[0],10);let o=(new Date).getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(o=new Date(this.value).getDate()),o===i&&t===this._month)return!0;const a=new Date(n,this._month,0).getDate();return o>a&&a===i&&t===this._month}_getHeaderItemsTemplate(){return Qn`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map((e=>Qn`
              <th
                class="kuc-base-datetime-calendar-body-1-6-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `))}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){const e=sa(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return Qn`
      <tbody>
        ${e.map((e=>Qn`
            <tr>
              ${e.map((e=>{const i=e.text.split("-"),n=this._isSameDayOfMoment(i),o=parseInt(i[1],10)===this._month,a=(this.value===e.attr||n)&&o;return Qn`
                  <td
                    role="gridcell"
                    class="kuc-base-datetime-calendar-body-1-6-0__table__date${a?"--selected":""}${this._getDateClass(i,o)}"
                    aria-selected="${this.value===e.attr}"
                    tabindex="${a?"0":"-1"}"
                    aria-current="${!!this._isToday(i)&&"date"}"
                    aria-label="${i[2]} ${t}"
                    data-date="${e.attr}"
                    @click="${this._handleClickDate}"
                    @keydown="${this._handleKeyDownDate}"
                  >
                    ${i[2]||""}
                  </td>
                `}))}
            </tr>
          `))}
      </tbody>
    `}_focusDateEl(){this._focusedItem&&this._focusedItem.focus({preventScroll:!0})}}Es([xo({type:Number})],Ts.prototype,"month",void 0),Es([xo({type:Number})],Ts.prototype,"year",void 0),Es([xo({type:String,attribute:"lang",reflect:!0})],Ts.prototype,"language",void 0),Es([xo({type:String,reflect:!0})],Ts.prototype,"value",void 0),Es([wo()],Ts.prototype,"_month",void 0),Es([wo()],Ts.prototype,"_year",void 0),Es([Co('.kuc-base-datetime-calendar-body-1-6-0__table__date--selected[aria-selected="true"]')],Ts.prototype,"_selectedItem",void 0),Es([Co(".kuc-base-datetime-calendar-body-1-6-0__table__date--selected")],Ts.prototype,"_highlightItem",void 0),Es([Co('.kuc-base-datetime-calendar-body-1-6-0__table__date--selected[tabindex="0"]')],Ts.prototype,"_focusedItem",void 0),window.customElements.get("kuc-base-datetime-calendar-body-1-6-0")||(No('\nkuc-base-datetime-calendar-body-1-6-0,\nkuc-base-datetime-calendar-body-1-6-0 *,\nkuc-base-datetime-calendar-body-1-6-0:lang(en),\nkuc-base-datetime-calendar-body-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-calendar-body-1-6-0:lang(ja),\nkuc-base-datetime-calendar-body-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-calendar-body-1-6-0:lang(zh),\nkuc-base-datetime-calendar-body-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\n\nkuc-base-datetime-calendar-body-1-6-0:lang(zh-TW),\nkuc-base-datetime-calendar-body-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table,\n.kuc-base-datetime-calendar-body-1-6-0__table tr {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date,\n.kuc-base-datetime-calendar-body-1-6-0__table__date--selected {\n  border-spacing: 1px;\n  padding: 0px;\n  border: 1px solid #ffffff;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__header {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 400;\n  color: #333333;\n}\n:lang(ja) th.kuc-base-datetime-calendar-body-1-6-0__table__header {\n  font-weight: 700;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date--selected,\n.kuc-base-datetime-calendar-body-1-6-0__table__date,\n.kuc-base-datetime-calendar-body-1-6-0__table__header {\n  box-sizing: border-box;\n  padding: 8px 0;\n  width: 36px;\n  height: 31px;\n  border: 1px solid #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 400;\n  color: #333333;\n  cursor: pointer;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__header:nth-child(1),\n.kuc-base-datetime-calendar-body-1-6-0__table__header:nth-child(7) {\n  color: #d4d7d7;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date:focus,\n.kuc-base-datetime-calendar-body-1-6-0__table__date--selected:focus {\n  outline: none;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date\n  .kuc-base-datetime-calendar-body-1-6-0__table__date__button:hover {\n  color: #000000;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date--selected {\n  border-color: #3498db;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date--selected--today,\n.kuc-base-datetime-calendar-body-1-6-0__table__date--today {\n  color: #ffffff;\n  background: #888888;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date--today:hover {\n  color: #333333;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date--other-month,\n.kuc-base-datetime-calendar-body-1-6-0__table__date--other-month:hover {\n  color: #d4d7d7;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-body-1-6-0",Ts));var As=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Vs extends Bo{constructor(){super(...arguments),this.language="en",this._locale=xa("en")}update(e){e.has("language")&&(this._locale=xa(this.language)),super.update(e)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),Oo(this,"kuc:calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),Oo(this,"kuc:calendar-footer-click-today")}_handleKeyDownCalendarFooterButtonNone(e){"Tab"===e.key&&(e.shiftKey||(e.preventDefault(),Oo(this,"kuc:calendar-footer-tab-none")))}render(){return Qn`
      <div class="kuc-base-datetime-calendar-footer-1-6-0__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-6-0__group__button kuc-base-datetime-calendar-footer-1-6-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <span class="kuc-base-datetime-calendar-footer-1-6-0__group__center"></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-6-0__group__button kuc-base-datetime-calendar-footer-1-6-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
          @keydown="${this._handleKeyDownCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
      </div>
    `}}As([xo({type:String,attribute:"lang",reflect:!0})],Vs.prototype,"language",void 0),As([wo()],Vs.prototype,"_locale",void 0),window.customElements.get("kuc-base-datetime-calendar-footer-1-6-0")||(No('\nkuc-base-datetime-calendar-footer-1-6-0,\nkuc-base-datetime-calendar-footer-1-6-0 *,\nkuc-base-datetime-calendar-footer-1-6-0:lang(en),\nkuc-base-datetime-calendar-footer-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-6-0:lang(ja),\nkuc-base-datetime-calendar-footer-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-6-0:lang(zh),\nkuc-base-datetime-calendar-footer-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-6-0:lang(zh-TW),\nkuc-base-datetime-calendar-footer-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\n.kuc-base-datetime-calendar-footer-1-6-0__group {\n  display: flex;\n  align-items: flex-end;\n  box-sizing: border-box;\n  padding: 0;\n  height: 27px;\n  white-space: nowrap;\n  width: 272px;\n}\n.kuc-base-datetime-calendar-footer-1-6-0__group__button {\n  background: transparent;\n  border: 1px solid transparent;\n  color: #3498db;\n  cursor: pointer;\n  font-size: 13px;\n  outline: none;\n}\n.kuc-base-datetime-calendar-footer-1-6-0__group__button:hover {\n  color: #217dbb;\n}\n.kuc-base-datetime-calendar-footer-1-6-0__group__button:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n.kuc-base-datetime-calendar-footer-1-6-0__group__center {\n  width: 100%;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-footer-1-6-0",Vs));var Ds=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Ls extends Bo{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=2021}update(e){e.has("value")&&this._updateValue(),super.update(e)}render(){return Qn`
      <div
        class="kuc-base-datetime-calendar-1-6-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
        @keydown="${this._handleKeyDownCalendarGroup}"
      >
        <kuc-base-datetime-calendar-header-1-6-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header-1-6-0>
        <kuc-base-datetime-calendar-body-1-6-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
        ></kuc-base-datetime-calendar-body-1-6-0>
        <kuc-base-datetime-calendar-footer-1-6-0
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer-1-6-0>
      </div>
    `}async updated(e){await this.updateComplete,this._calculateBodyCalendarPosition(),super.updated(e)}_handleKeyDownCalendarGroup(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),Oo(this,"kuc:calendar-escape",{}))}_handleClickCalendarGroup(e){e.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_calculateBodyCalendarPosition(){const{inputToBottom:e,inputToTop:t,inputToRight:i,inputToLeft:n}=Ia(this);e>=this._baseCalendarGroupEl.getBoundingClientRect().height||t<0||e>t?this._calculateCalendarPosition(i,n,"bottom"):this._calculateCalendarPosition(i,n,"top")}_calculateCalendarPosition(e,t,i){if(!this.parentElement)return;if(e<336&&e<t){const e=this.parentElement.getBoundingClientRect().width,t="bottom"===i?40:"auto",n="bottom"===i?"auto":40,o=e>100?e-100:0;return void this._setCalendarPosition({top:t,bottom:n,right:o})}const n="bottom"===i?40:"auto",o="bottom"===i?"auto":40;this._setCalendarPosition({bottom:o,top:n,left:0})}_setCalendarPosition({top:e="auto",left:t="auto",right:i="auto",bottom:n="auto"}){const o=this._baseCalendarGroupEl.parentElement;this.parentElement&&o&&(this.parentElement.style.position="relative",o.style.bottom="auto"===n?n:n+"px",o.style.top="auto"===e?e:e+"px",o.style.left="auto"===t?t:t+"px",o.style.right="auto"===i?i:i+"px")}_handleCalendarHeaderChange(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_handleCalendarBodyChangeDate(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_updateValue(){""===this.value&&(this.value=fa().slice(0,7)+"-01");const{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){const t=e.split("-");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}}Ds([xo({type:String,attribute:"lang",reflect:!0})],Ls.prototype,"language",void 0),Ds([xo({type:String,reflect:!0})],Ls.prototype,"value",void 0),Ds([Co(".kuc-base-datetime-calendar-1-6-0__group")],Ls.prototype,"_baseCalendarGroupEl",void 0),Ds([Co(".kuc-base-datetime-calendar-header-1-6-0__month")],Ls.prototype,"_monthEl",void 0),Ds([Co(".kuc-base-datetime-calendar-header-1-6-0__year")],Ls.prototype,"_yearEl",void 0),Ds([Co(".kuc-base-datetime-header-month-1-6-0__listbox")],Ls.prototype,"_listBoxMonthEl",void 0),Ds([Co(".kuc-base-datetime-header-year-1-6-0__listbox")],Ls.prototype,"_listBoxYearEl",void 0),Ds([wo()],Ls.prototype,"_month",void 0),Ds([wo()],Ls.prototype,"_year",void 0),window.customElements.get("kuc-base-datetime-calendar-1-6-0")||(No("\n.kuc-base-datetime-calendar-1-6-0__group {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 336px;\n  padding: 32px 32px 24px;\n  background: #ffffff;\n  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);\n  text-align: center;\n  font-size: 13px;\n}\n"),window.customElements.define("kuc-base-datetime-calendar-1-6-0",Ls));var Hs=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Ms extends Bo{constructor(){super(...arguments),this.inputAriaLabel="",this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._locale=xa("en"),this._calendarValue="",this._inputValue="",this._valueForReset=""}update(e){e.has("inputId")&&(this._GUID=this.inputId),e.has("language")&&(this._locale=xa(this.language),this._updateValueProp()),e.has("value")&&this._updateValueProp(),super.update(e)}render(){return Qn`
      <input
        class="kuc-base-date-1-6-0__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${this._inputValue}"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        aria-required="${this.required}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @click="${this._handleClickInput}"
        @change="${this._handleChangeInput}"
        @keydown="${this._handleKeyDownInput}"
        @input="${this._handleInputValue}"
      />
      <button
        aria-haspopup="dialog"
        aria-expanded="${this._dateTimeCalendarVisible}"
        class="kuc-base-date-1-6-0__assistive-text"
        @click="${this._handleClickButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show date picker
      </button>
      ${this._dateTimeCalendarVisible?Qn`
            <kuc-base-datetime-calendar-1-6-0
              class="kuc-base-date-1-6-0__calendar"
              .language="${this.language}"
              .value="${this._calendarValue}"
              ?hidden="${!this._dateTimeCalendarVisible}"
              @kuc:calendar-header-previous-shifttab="${this._handleShiftTabCalendarPrevMonth}"
              @kuc:calendar-body-change-date="${this._handleClickCalendarChangeDate}"
              @kuc:calendar-body-click-date="${this._handleClickCalendarClickDate}"
              @kuc:calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
              @kuc:calendar-footer-tab-none="${this._handleTabCalendarFooterButtonNone}"
              @kuc:calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
              @kuc:calendar-escape="${this._handleCalendarEscape}"
              @kuc:calendar-body-blur="${this._handleCalendarBlurBody}"
            >
            </kuc-base-datetime-calendar-1-6-0>
          `:""}
    `}updated(e){e.has("inputAriaLabel")&&this.inputAriaLabel&&this._dateInput.setAttribute("aria-label",this.inputAriaLabel),super.updated(e)}_handleInputValue(e){const t=e.target.value;this._inputValue=t||""}_handleClickInput(){if(!this._dateTimeCalendarVisible)return this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),void this._openCalendar();this._closeCalendar()}_updateValueProp(){if(this.value){const e=this._setCalendarValueWhenInvalidValue();return this._inputValue=ba(this.language,this.value),void(this._calendarValue=e||this.value)}const e=fa();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)}_setCalendarValueWhenInvalidValue(){if(this.value&&!Oa(this.value)){const e=fa();return this._calendarValue||e.slice(0,7)}return""}_getNewCalendarValue(e){if(va(this.language,e))return ma(this.language,e);if(!this._calendarValue)return"";let t=this._calendarValue.slice(0,7);return""===e&&(t=this._calendarValue.slice(0,7)+"-01"),t}_handleChangeInput(e){e.stopPropagation();const t=(null==e?void 0:e.target).value;if(this._calendarValue=this._getNewCalendarValue(t),this._calendarValue.length>7)return void this._dispathDateChangeCustomEvent(ma(this.language,t));const i={value:void 0,oldValue:this.value,error:this._locale.INVALID_FORMAT};this._inputValue=t,Oo(this,"kuc:base-date-change",i)}_handleKeyDownInput(e){"Escape"===e.key&&this._closeCalendar()}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleShiftTabCalendarPrevMonth(){this._footerNoneBtn.focus()}_handleClickCalendarChangeDate(e){e.detail.oldValue=this.value,this.value=e.detail.value,Oo(this,"kuc:base-date-change",e.detail)}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,this._dateInput.focus(),e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,Oo(this,"kuc:base-date-change",e.detail))}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._dateInput.focus(),this._inputValue="";const e=fa();let t=this._setCalendarValueWhenInvalidValue();t||(t=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)+"-01"),this._calendarValue=t,this._dispathDateChangeCustomEvent(void 0)}_handleTabCalendarFooterButtonNone(){this._previousMonth.focus()}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const e=fa();this._dateInput.focus(),this._dispathDateChangeCustomEvent(e)}_handleCalendarEscape(){const e=this._valueForReset;if(this._closeCalendar(),this._dateInput.focus(),e===this.value)return;const t={oldValue:this.value,value:e};this.value=e,Oo(this,"kuc:base-date-change",t)}_handleCalendarBlurBody(e){e.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(e){const t={value:e,oldValue:this.value};this.value=void 0===e?"":e,Oo(this,"kuc:base-date-change",t)}_handleClickButton(){if(!this._dateTimeCalendarVisible)return this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),void this._openCalendar();this._closeCalendar()}_handleBlurButton(){this._dateInput.classList.remove("kuc-base-date-1-6-0__input--focus")}_handleFocusButton(){this._dateInput.classList.add("kuc-base-date-1-6-0__input--focus")}}Hs([xo({type:String})],Ms.prototype,"inputAriaLabel",void 0),Hs([xo({type:String})],Ms.prototype,"inputId",void 0),Hs([xo({type:String,attribute:"lang",reflect:!0})],Ms.prototype,"language",void 0),Hs([xo({type:String,reflect:!0})],Ms.prototype,"value",void 0),Hs([xo({type:Boolean})],Ms.prototype,"disabled",void 0),Hs([xo({type:Boolean})],Ms.prototype,"inputAriaInvalid",void 0),Hs([xo({type:Boolean})],Ms.prototype,"required",void 0),Hs([Co(".kuc-base-date-1-6-0__input")],Ms.prototype,"_dateInput",void 0),Hs([Co(".kuc-base-datetime-calendar-header-1-6-0__group__button--previous-month")],Ms.prototype,"_previousMonth",void 0),Hs([Co(".kuc-base-datetime-calendar-footer-1-6-0__group__button--none")],Ms.prototype,"_footerNoneBtn",void 0),Hs([wo()],Ms.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-base-date-1-6-0")||(No("\ninput.kuc-base-date-1-6-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  color: #333333;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\ninput.kuc-base-date-1-6-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\ninput.kuc-base-date-1-6-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-datetime-picker-1-6-0__group__inputs--date\n  input.kuc-base-date-1-6-0__input--focus {\n  border-color: #3498db;\n}\ninput.kuc-base-date-1-6-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.kuc-base-date-1-6-0__calendar {\n  position: absolute;\n  z-index: 2000;\n  background-color: #ffffff;\n  text-align: center;\n  box-sizing: border-box;\n}\n.kuc-base-date-1-6-0__assistive-text {\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n  position: absolute !important;\n  padding: 0px !important;\n  border: 0px !important;\n  height: 1px !important;\n  width: 1px !important;\n}\n"),window.customElements.define("kuc-base-date-1-6-0",Ms));var Bs=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Os;(()=>{if(Os=window.customElements.get("kuc-date-picker-1-6-0"),!Os){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._errorFormat="",this._errorText="",this._inputValue="",this._invalidValue="",this._valueConverted="",this._GUID=Po();const t=Da(e);Object.assign(this,t)}shouldUpdate(e){return!(void 0!==this.value&&""!==this.value&&("string"==typeof this.value&&La(this.value)?(this._valueConverted=Aa(this.value),this._valueConverted&&!Oa(this._valueConverted)&&(Ga(this,ia),1)):(Ga(this,ia),1)))}willUpdate(e){e.has("value")&&(void 0===this.value?this._inputValue=this._invalidValue:(this.value=""===this.value?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat="")),this._updateErrorText()}render(){return Qn`
        <div class="kuc-date-picker-1-6-0__group">
          <label
            class="kuc-date-picker-1-6-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-6-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-6-0>
          </label>
          <kuc-base-date-1-6-0
            .inputId="${this._GUID}"
            .inputAriaInvalid="${""!==this.error}"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:base-date-change="${this._handleDateChange}"
          >
          </kuc-base-date-1-6-0>
          <kuc-base-error-1-6-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-6-0>
        </div>
      `}updated(){this._invalidValue=""}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const t={oldValue:this.value,value:""};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error="",t.value=void 0):(this._errorFormat="",this.value=void 0===e.detail.value?"":e.detail.value,t.value=this.value),this._disptchChangeEvent(t)}_disptchChangeEvent(e){Oo(this,"change",e)}}Bs([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Bs([xo({type:String})],e.prototype,"error",void 0),Bs([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Bs([xo({type:String})],e.prototype,"label",void 0),Bs([xo({type:Boolean})],e.prototype,"disabled",void 0),Bs([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),Bs([xo({type:String,attribute:"lang",reflect:!0,converter:Ea})],e.prototype,"language",void 0),Bs([xo({type:String})],e.prototype,"value",void 0),Bs([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),Bs([Co(".kuc-base-date-1-6-0__input")],e.prototype,"_dateInput",void 0),window.customElements.define("kuc-date-picker-1-6-0",e),No('\nkuc-date-picker-1-6-0,\nkuc-date-picker-1-6-0 *,\nkuc-date-picker-1-6-0:lang(en),\nkuc-date-picker-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-date-picker-1-6-0:lang(ja),\nkuc-date-picker-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-date-picker-1-6-0:lang(zh),\nkuc-date-picker-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-date-picker-1-6-0:lang(zh-TW),\nkuc-date-picker-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-date-picker-1-6-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  max-width: 100px;\n  width: 100px;\n  line-height: 1.5;\n}\nkuc-date-picker-1-6-0[hidden] {\n  display: none;\n}\n.kuc-date-picker-1-6-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-date-picker-1-6-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-date-picker-1-6-0__group__label[hidden] {\n  display: none;\n}\n.kuc-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\n.kuc-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n'),Os=e}})();var Ns=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Ps extends Bo{constructor(){super(),this.value="",this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}render(){return Qn`
      <ul
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox-1-6-0__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map((e=>this._getListBoxItemTemplate(e)))}
      </ul>
    `}updated(e){e.has("value")&&this._highlightSelectedItem(),this._setListBoxPosition(),this._scrollToView(),super.updated(e)}_handleClickDocument(){Oo(this,"kuc:listbox-blur",{})}_handleClickListBox(e){e.stopPropagation()}_handleKeyDownListBox(e){switch(e.preventDefault(),e.stopPropagation(),e.key){case"Up":case"ArrowUp":this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Down":case"ArrowDown":this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Home":this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case"End":this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case"Tab":Oo(this,"kuc:listbox-click",{});break;case"Escape":Oo(this,"kuc:listbox-escape",{});break;case" ":case"Enter":{const e=this._highlightItemEl.getAttribute("value");Oo(this,"kuc:listbox-click",{value:e||""});break}}}_handleMouseDownListBox(e){if(e.preventDefault(),e.stopPropagation(),e.target===e.currentTarget)return;const t=e.target.getAttribute("value")||"";Oo(this,"kuc:listbox-click",{value:t})}_handleMouseOverItem(e){if(this._actionKeyboard)return void(this._actionKeyboard=!1);const t=e.target;this._setHighlightItemEl(t),this.doFocus&&this._focusHighlightItemEl(!1)}_setListBoxPosition(){const e=this._listBoxEl.getBoundingClientRect().height;if(!this._listBoxEl.parentElement||!this.parentElement)return;const t=window.innerHeight-this.parentElement.getBoundingClientRect().bottom,i=this.parentElement.offsetHeight;this._listBoxEl.style.bottom="auto",this._listBoxEl.style.left="auto",t>=e||(this.parentElement.style.position="relative",this._listBoxEl.style.bottom=i+"px",this._listBoxEl.style.left="0px")}_setHighlightItemEl(e){this._removeHighlight(),e.classList.add("kuc-base-datetime-listbox-1-6-0__listbox--highlight"),e.setAttribute("tabindex","0")}_highlightSelectedItem(){if(!this.doFocus)return;const e=Array.from(this._itemsEl).filter((e=>"true"===e.getAttribute("aria-selected")))[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(null===this._highlightItemEl||null===this._iconChecked)return void this._highlightFirstItem();const e=this._getNextItemEl();if(e)return this._setHighlightItemEl(e),this._firstHighlight=!1,void(this._itemSelectedEl=e);this._highlightFirstItem()}_getNextItemEl(){const e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(t=this._itemSelectedEl.nextElementSibling,t):this._firstItemEl:t}_highlightPrevItemEl(){if(null===this._highlightItemEl||null===this._iconChecked)return void this._highlightLastItem();const e=this._getPreviousItemEl();if(e)return this._setHighlightItemEl(e),this._firstHighlight=!1,void(this._itemSelectedEl=e);this._highlightLastItem()}_getPreviousItemEl(){const e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(t=this._itemSelectedEl.previousElementSibling,t):this._lastItemEl:t}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute("tabindex","-1"),this._highlightItemEl.classList.remove("kuc-base-datetime-listbox-1-6-0__listbox--highlight"))}_focusHighlightItemEl(e){const t=this._highlightItemEl;t&&(t.focus({preventScroll:!0}),!1!==e&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){const e=this._highlightItemEl.getAttribute("value")||"";Oo(this,"kuc:listbox-focus-change",{value:e})}_scrollToView(){const e=this._highlightItemEl||this._getHighlightItemByValue();if(!e||!this._listBoxEl)return;const t=e.offsetHeight,i=this._listBoxEl.clientHeight/t/2;let n=e.offsetTop-i*t;n<0&&(n=0),this._listBoxEl.scrollTop=n}_getHighlightItemByValue(){const e=Array.from(this._listBoxEl.children),t=new Date(Date.parse(`2021/01/01 ${this.value}`));let i=e.find((e=>new Date(Date.parse(`2021/01/01 ${e.title}`))>=t));return i||(i=e[e.length-1]),this.doFocus&&i?(this._setHighlightItemEl(i),this._focusHighlightItemEl(),i):i}_getListBoxItemTemplate(e){const t=this.value===e.value&&this.doFocus;return Qn`
      <li
        class="kuc-base-datetime-listbox-1-6-0__listbox__item"
        role="option"
        tabindex="${t?"0":"-1"}"
        aria-selected="${t}"
        title="${e.label||""}"
        value="${void 0!==e.value?e.value:""}"
        @mouseover="${this._handleMouseOverItem}"
        @keydown="${this._handleKeyDownListBox}"
      >
        ${t?this._getCheckedIconSvgTemplate():""}
        ${void 0===e.label?e.value:e.label}
      </li>
    `}_getCheckedIconSvgTemplate(){return eo`<svg
          class="kuc-base-datetime-listbox-1-6-0__listbox__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="#3498db"
          />
        </svg>`}}Ns([xo({type:String})],Ps.prototype,"value",void 0),Ns([xo({type:Array})],Ps.prototype,"items",void 0),Ns([xo({type:Number})],Ps.prototype,"maxHeight",void 0),Ns([xo({type:Boolean})],Ps.prototype,"doFocus",void 0),Ns([Co(".kuc-base-datetime-listbox-1-6-0__listbox")],Ps.prototype,"_listBoxEl",void 0),Ns([Io(".kuc-base-datetime-listbox-1-6-0__listbox__item")],Ps.prototype,"_itemsEl",void 0),Ns([Co(".kuc-base-datetime-listbox-1-6-0__listbox__item")],Ps.prototype,"_firstItemEl",void 0),Ns([Co(".kuc-base-datetime-listbox-1-6-0__listbox__item:last-child")],Ps.prototype,"_lastItemEl",void 0),Ns([Co(".kuc-base-datetime-listbox-1-6-0__listbox--highlight")],Ps.prototype,"_highlightItemEl",void 0),Ns([Co(".kuc-base-datetime-listbox-1-6-0__listbox__item__icon")],Ps.prototype,"_iconChecked",void 0),Ns([wo()],Ps.prototype,"_actionKeyboard",void 0),Ns([wo()],Ps.prototype,"_firstHighlight",void 0),Ns([wo()],Ps.prototype,"_itemSelectedEl",void 0),window.customElements.get("kuc-base-datetime-listbox-1-6-0")||(No('\nkuc-base-datetime-listbox-1-6-0,\nkuc-base-datetime-listbox-1-6-0 *,\nkuc-base-datetime-listbox-1-6-0:lang(en),\nkuc-base-datetime-listbox-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-listbox-1-6-0:lang(ja),\nkuc-base-datetime-listbox-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-listbox-1-6-0:lang(zh),\nkuc-base-datetime-listbox-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-listbox-1-6-0:lang(zh-TW),\nkuc-base-datetime-listbox-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\n.kuc-base-datetime-listbox-1-6-0__listbox {\n  position: absolute;\n  z-index: 2000;\n  min-width: 280px;\n  margin: 0;\n  padding: 8px 0;\n  border: 1px solid #e3e7e8;\n  background-color: #ffffff;\n  list-style: none;\n  line-height: 1;\n  overflow-y: auto;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);\n}\n.kuc-base-datetime-listbox-1-6-0__listbox__item {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 8px 16px 8px 25px;\n  color: #333333;\n  cursor: pointer;\n  -webkit-tap-highlight-color: initial;\n  text-align: left;\n  font-size: 14px;\n  user-select: none;\n}\n.kuc-base-datetime-listbox-1-6-0__listbox__item[aria-selected="true"] {\n  color: #3498db;\n}\n.kuc-base-datetime-listbox-1-6-0__listbox--highlight {\n  background-color: #e2f2fe;\n  cursor: pointer;\n}\n.kuc-base-datetime-listbox-1-6-0__listbox__item__icon {\n  position: absolute;\n  left: 8px;\n  top: 10px;\n  background-color: transparent;\n}\n.kuc-base-datetime-listbox-1-6-0__listbox__item:focus {\n  outline: none;\n}\n'),window.customElements.define("kuc-base-datetime-listbox-1-6-0",Ps));var zs=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Us extends Bo{constructor(){super(...arguments),this.language="en",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.timeStep=30,this._listBoxVisible=!1,this._valueLabel="",this._doFocusListBox=!1,this._hours="",this._minutes="",this._suffix="",this._valueForReset="",this._locale=xa("en")}update(e){(e.has("hour12")||e.has("timeStep")||e.has("max")||e.has("min"))&&(this._listBoxItems=((e,t,i,n)=>{const o=[],a=Math.round(t),s=la(n),r=la(i);if(a>0){const t=Math.floor((s-r)/a)+1;for(let i=0;i<t;i++){const t=ra(r+i*a,e);o.push(t)}}return o})(this.hour12,this.timeStep,this.min,this.max),this._updateInputValue()),e.has("value")&&this._updateInputValue(),e.has("language")&&(this._locale=xa(this.language)),super.update(e)}render(){return Qn`
      <div class="kuc-base-time-1-6-0__group" @click="${this._handleClickInputGroup}">
        <input
          type="text"
          class="kuc-base-time-1-6-0__group__hours"
          role="spinbutton"
          tabindex="${this._hours?"0":"-1"}"
          aria-label="Hour"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        ${this._getColonTemplate()}
        <input
          type="text"
          class="kuc-base-time-1-6-0__group__minutes"
          role="spinbutton"
          tabindex="${this._minutes?"0":"-1"}"
          aria-label="Minute"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this._getSuffixTemplate()}
      </div>
      <button
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        class="kuc-base-time-1-6-0__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show time picker
      </button>
      ${this._getListBoxTemplate()}
    `}updated(e){e.has("disabled")&&this._toggleDisabledGroup(),super.update(e)}_handleClickInputGroup(e){if(this.disabled)return;if(""===this.value)return this._toggleEl.focus(),void this._openListBox();const t=e.target;this._openListBox(),"INPUT"!==t.tagName.toUpperCase()?this._hoursEl.select():t.select()}_handleBlurListBox(e){e.preventDefault(),this._inputFocusEl||(this._listBoxVisible=!1)}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add("kuc-base-time-1-6-0__group--disabled"):this._inputGroupEl.classList.remove("kuc-base-time-1-6-0__group--disabled")}_updateInputValue(){var e;const t=((e,t)=>{const i=e.split(":"),n=parseInt(i[0],10),o=parseInt(i[1],10),a=n%qo;return isNaN(a)||isNaN(o)?{hours:"",minutes:"",suffix:""}:t?((e,t)=>{const i=ca(e),n=ua(e);return{hours:ya(n),minutes:ya(t),suffix:i}})(n,o):{hours:ya(a),minutes:ya(o),suffix:""}})(this.value,this.hour12);this._hours=t.hours,this._minutes=t.minutes,this._suffix=t.suffix||"",this._valueLabel=this._getValueLabel(t),this._inputGroupEl&&(this._setValueToInput(t),null===(e=this._inputFocusEl)||void 0===e||e.select())}_getValueLabel(e){if(!e.hours||!e.minutes)return"";const t=`${e.hours}:${e.minutes}`;return e.suffix?t+` ${e.suffix}`:t}_setValueToInput(e){this._hoursEl.value=e.hours,this._minutesEl.value=e.minutes,this._suffixEl&&(this._suffixEl.value=e.suffix||"")}_handleKeyDownButton(e){switch(e.key){case"Tab":case"Escape":if("Escape"===e.key&&e.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case"Enter":case" ":case"ArrowUp":case"ArrowDown":e.preventDefault(),e.stopPropagation(),this._openListBoxByKey();break;default:e.preventDefault(),e.stopPropagation(),this._handleDefaultKeyButton(e.key)}}_handleBlurButton(){this._inputGroupEl.classList.remove("kuc-base-time-1-6-0__group--focus")}_handleFocusButton(e){e.stopPropagation(),this._inputGroupEl.classList.add("kuc-base-time-1-6-0__group--focus")}_openListBoxByKey(){return!this._listBoxVisible&&(this._valueForReset=this.value,this._doFocusListBox=!0,this._listBoxVisible=!0,this._inputGroupEl.classList.remove("kuc-base-time-1-6-0__group--focus"),!0)}_handleListBoxEscape(){this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),""!==this.value?this._hoursEl.select():this._toggleEl.focus()}_handleDefaultKeyButton(e){if(!/^[0-9]$/i.test(e)||""!==this.value)return;const t=this._computeNumberKeyValueHours(e);this._actionUpdateInputValue(t),this._hoursEl.select()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!e.detail.value)return;const t=e.detail.value;this._actionUpdateInputValue(t)}_handleListBoxFocusChange(e){const t=e.detail.value,i=ha(t);this._actionUpdateInputValue(i)}_handleFocusInput(e){this._inputFocusEl=e.target,this._inputFocusEl.select(),this._inputGroupEl.classList.add("kuc-base-time-1-6-0__group--focus")}_handleBlurInput(e){this._inputFocusEl=null;const t=e.relatedTarget;t&&t instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(t)>-1||(this._closeListBox(),this._inputGroupEl.classList.remove("kuc-base-time-1-6-0__group--focus"))}_handleTabKey(e){return"Tab"===e.key}_handleKeyDownInput(e){this._closeListBox(),this._handleTabKey(e)||this._handleSupportedKey(e)}_handlePasteInput(e){e.preventDefault()}_handleSupportedKey(e){e.preventDefault();const t=e.key;let i;switch(t){case"Enter":case"ArrowRight":this._actionSelectNextRange();break;case"ArrowLeft":this._actionSelectPreviousRange();break;case"ArrowUp":i=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(i);break;case"ArrowDown":i=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(i);break;case"Backspace":case"Delete":i=this._computeDeleteValue(),this._actionUpdateInputValue(i);break;default:i=this._computeDefaultKeyValue(t),this._actionUpdateInputValue(i)}}_actionUpdateInputValue(e){const t=""===this.value?this.value:this._formatKeyDownValue(),i=ha(t),n=ha(e);i!==n&&(this.value=n,this._dispatchEventTimeChange(n,i))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:"00"}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:"00"}):this._formatKeyDownValue()}_computeArrowUpDownValue(e){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(e):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(e):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(e){if(!e){const e=this._suffix===Yo?Jo:Yo;return this._formatKeyDownValue({suffix:e})}if(-1===["a","A","p","P"].indexOf(e))return this._formatKeyDownValue();const t="a"===e||"A"===e?Yo:Jo;return""===this.value&&this._hoursEl.select(),this._formatKeyDownValue({suffix:t})}_computeArrowUpDownHourValue(e){let t=parseInt(this._hours,10)+e;return this.hour12?(t%=Ko,t=t<=0?Ko:t):(t%=qo,t=t<0?23:t),this._formatKeyDownValue({hours:t.toString()})}_computeArrowUpDownMinuteValue(e){let t=parseInt(this._minutes,10)+e;return t%=60,t=t<0?59:t,this._formatKeyDownValue({minutes:t.toString()})}_computeDefaultKeyValue(e){return/^[0-9]$/i.test(e)?this._computeNumberKeyValue(e):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(e):this._formatKeyDownValue()}_computeNumberKeyValue(e){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(e):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(e):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(e){const t=this._getPreviousMinutes(this._minutes),i=ya(t+e);return""===this.value?(this._hoursEl.select(),this._computeNumberKeyValueHours(e)):this._formatKeyDownValue({minutes:i})}_computeNumberKeyValueHours(e){const t=this._getPreviousHours(this._hours,e),i=ya(t+e);return""===this.value?this._formatKeyDownValue({hours:i,minutes:"00"}):this._formatKeyDownValue({hours:i})}_getPreviousMinutes(e){let t;return t=parseInt(e,10)>10?(""+e)[1]:""+e,t=parseInt(t,10)>5?"0":t,t}_getPreviousHours(e,t){let i;i=parseInt(e,10)>10?(""+e)[1]:""+e;const n=parseInt(i+t,10);return i=this.hour12&&n>Ko||!this.hour12&&n>=qo?"0":i,i}_actionSelectNextRange(){this._inputFocusEl!==this._hoursEl?this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select():this._minutesEl.select()}_actionSelectPreviousRange(){this._inputFocusEl!==this._suffixEl?this._inputFocusEl===this._minutesEl&&this._hoursEl.select():this._minutesEl.select()}_dispatchEventTimeChange(e,t){const i={value:e,oldValue:t};(da(e,this.min)<0||da(this.max,e)<0)&&(i.error=this._locale.TIME_IS_OUT_OF_VALID_RANGE),Oo(this,"kuc:base-time-change",i)}_formatKeyDownValue(e={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){const t=e.hours||this._hours,i=e.minutes||this._minutes,n=e.suffix||this._suffix,o=`${ya(t)}:${ya(i)}`;return n?`${o} ${n}`:o}_openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0)}_closeListBox(){this._doFocusListBox=!1,this._listBoxVisible=!1}_getColonTemplate(){return this._hours?Qn` <span class="kuc-base-time-1-6-0__group__colon">:</span> `:""}_getSuffixTemplate(){return this.hour12?Qn`
          <input
            class="kuc-base-time-1-6-0__group__suffix"
            role="spinbutton"
            tabindex="${this._suffix?"0":"-1"}"
            aria-label="${this._suffix||"suffix"}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            @paste="${this._handlePasteInput}"
            ?disabled="${this.disabled}"
            value="${this._suffix}"
          />
        `:""}_getListBoxTemplate(){return this._listBoxVisible?Qn`
          <kuc-base-datetime-listbox-1-6-0
            maxHeight="165"
            aria-hidden="${!this._listBoxVisible}"
            class="kuc-base-time-1-6-0__group__listbox"
            .items="${this._listBoxItems||[]}"
            .value="${this._valueLabel}"
            .doFocus="${this._doFocusListBox}"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleBlurListBox}"
            @kuc:listbox-focus-change="${this._handleListBoxFocusChange}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
          ></kuc-base-datetime-listbox-1-6-0>
        `:""}}zs([xo({type:String,attribute:"lang",reflect:!0})],Us.prototype,"language",void 0),zs([xo({type:String})],Us.prototype,"max",void 0),zs([xo({type:String})],Us.prototype,"min",void 0),zs([xo({type:String})],Us.prototype,"value",void 0),zs([xo({type:Boolean})],Us.prototype,"disabled",void 0),zs([xo({type:Boolean})],Us.prototype,"hour12",void 0),zs([xo({type:Number})],Us.prototype,"timeStep",void 0),zs([wo()],Us.prototype,"_listBoxVisible",void 0),zs([wo()],Us.prototype,"_valueLabel",void 0),zs([wo()],Us.prototype,"_doFocusListBox",void 0),zs([wo()],Us.prototype,"_hours",void 0),zs([wo()],Us.prototype,"_minutes",void 0),zs([wo()],Us.prototype,"_suffix",void 0),zs([wo()],Us.prototype,"_inputFocusEl",void 0),zs([Co(".kuc-base-time-1-6-0__group__hours")],Us.prototype,"_hoursEl",void 0),zs([Co(".kuc-base-time-1-6-0__group__minutes")],Us.prototype,"_minutesEl",void 0),zs([Co(".kuc-base-time-1-6-0__group__suffix")],Us.prototype,"_suffixEl",void 0),zs([Co(".kuc-base-time-1-6-0__assistive-text")],Us.prototype,"_toggleEl",void 0),zs([Co(".kuc-base-time-1-6-0__group")],Us.prototype,"_inputGroupEl",void 0),window.customElements.get("kuc-base-time-1-6-0")||(No("\n:lang(ja) .kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__hours,\n:lang(ja) .kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__minutes {\n  width: 18px;\n}\n.kuc-base-time-1-6-0__group {\n  display: inline-flex;\n  position: relative;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  max-width: 85px;\n  width: 85px;\n  height: 40px;\n  color: #333333;\n  border: solid 1px #e3e7e8;\n  box-sizing: border-box;\n  padding: 0px 8px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  background-color: #ffffff;\n}\n.kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__hours {\n  border: 0px;\n  padding: 0px;\n  width: 16px;\n  font-size: 14px;\n  outline: none;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__minutes {\n  border: 0px;\n  padding: 0px;\n  width: 16px;\n  font-size: 14px;\n  outline: none;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__hours:focus {\n  border: 0px;\n}\n.kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__minutes:focus {\n  border: 0px;\n}\n.kuc-base-time-1-6-0__group__colon {\n  width: 4px;\n  text-align: center;\n}\n.kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__suffix {\n  border: 0px;\n  width: 24px;\n  text-align: right;\n  font-size: 14px;\n  outline: none;\n  appearance: none;\n  margin-left: 1px;\n  padding: 0px;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-6-0__group--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-base-time-1-6-0__assistive-text {\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n  position: absolute !important;\n  padding: 0px !important;\n  border: 0px !important;\n  height: 1px !important;\n  width: 1px !important;\n}\n.kuc-base-time-1-6-0__group--disabled {\n  background-color: #d4d7d7;\n  box-shadow: none;\n  color: #888888;\n  cursor: not-allowed;\n}\n.kuc-base-time-1-6-0__group--disabled input {\n  cursor: not-allowed;\n  color: #888888;\n  -webkit-text-fill-color: #888888;\n}\n"),window.customElements.define("kuc-base-time-1-6-0",Us));var Rs=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let js;(()=>{if(js=window.customElements.get("kuc-datetime-picker-1-6-0"),!js){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorText="",this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._inputMax="",this._inputMin="",this._timeConverted="",this._errorInvalidTime="",this._inputTimeStep=30,this._GUID=Po();const t=Da(e);Object.assign(this,t)}shouldUpdate(e){if(e.has("max")||e.has("min")){let e=this._inputMin,t=this._inputMax;if(void 0===this.max||""===this.max)t=ta;else{if(!Ha(this.max))return Ga(this,na),!1;t=this.max=Va(this.max)}if(void 0===this.min||""===this.min)e=ea;else{if(!Ha(this.min))return Ga(this,oa),!1;e=this.min=Va(this.min)}if(da(t,e)<0)return Ga(this,Zo),!1;this._inputMin=e,this._inputMax=t}if(e.has("timeStep")){if(!Ma(this.timeStep))return Ga(this,Qo),!1;if(!Ba(this.timeStep,this._inputMax,this._inputMin))return Ga(this,aa),!1;this._inputTimeStep=this.timeStep}return void 0===this.value||""===this.value||("string"!=typeof this.value?(Ga(this,ia),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=Aa(this._dateAndTime.date),ja(this._dateAndTime.date,this._dateAndTime.time)&&Oa(this._dateConverted)?(this._timeConverted=Va(this._dateAndTime.time.slice(0,5)),!e.has("value")||!(da(this._timeConverted,this._inputMin)<0||da(this._inputMax,this._timeConverted)<0)||(Ga(this,Xo),!1)):(Ga(this,ia),!1)))}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueChangeByUI():this._updateValueWhenSetter()}_updateValueChangeByUI(){const e=this._validateDateTimeFormat();this.value=e?this.value:void 0,!e||this._dateValue||this._timeValue||(this.value="");const t=!this._dateValue&&this._timeValue,i=this._dateValue&&!this._timeValue;this._errorText=t||i?this.error||this._errorFormat||this._errorInvalidTime:e?this.error:this._errorFormat||this._errorInvalidTime}_validateDateTimeFormat(){const e=Boolean(this._timeValue)&&!this._dateValue,t=Boolean(this._dateValue)&&!this._timeValue;return!(this._errorFormat||this._errorInvalidTime||e||t)}_updateValueWhenSetter(){if(this._errorText=this.error,""===this.value||void 0===this.value)return this._previousTimeValue="",this._errorFormat="",void(this._errorInvalidTime="");this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t||this._dateInput.value,this._timeValue=this._dateValue&&Oa(t)?Va(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has("value")&&(void 0===this.value&&this._setUndefinedValue(),""===this.value&&this._setEmptyValue()),(e.has("max")||e.has("min")||e.has("value"))&&void 0!==this.value&&(this._errorInvalidTime=""),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat)return this._changeDateByUI?void(this._dateValue=this._dateInput.value):(this._dateValue="",void(this._timeValue=""));this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorInvalidTime=""}render(){return Qn`
        <fieldset
          class="kuc-datetime-picker-1-6-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-datetime-picker-1-6-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-6-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-6-0>
          </legend>
          <div class="kuc-datetime-picker-1-6-0__group__inputs">
            <kuc-base-date-1-6-0
              class="kuc-datetime-picker-1-6-0__group__inputs--date"
              .value="${this._dateValue}"
              .language="${this._getLanguage()}"
              .disabled="${this.disabled}"
              inputAriaLabel="date"
              @kuc:base-date-change="${this._handleDateChange}"
            ></kuc-base-date-1-6-0
            ><kuc-base-time-1-6-0
              class="kuc-datetime-picker-1-6-0__group__inputs--time"
              .value="${this._timeValue}"
              .hour12="${this.hour12}"
              .disabled="${this.disabled}"
              .timeStep="${this._inputTimeStep}"
              .min="${this._inputMin}"
              .max="${this._inputMax}"
              .language="${this._getLanguage()}"
              @kuc:base-time-change="${this._handleTimeChange}"
            ></kuc-base-time-1-6-0>
          </div>
          <kuc-base-error-1-6-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-6-0>
        </fieldset>
      `}updated(){this._resetState(),this._baseLabelEl.updateComplete.then((e=>{this._updateErrorWidth()}))}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorWidth(){const e=os(this._baseLabelEl);this._baseErrorEl.style.width=e>185?e+"px":"185px"}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):(t=e.detail.value,this._errorFormat=""),this._updateDateTimeValue(t,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;const t=e.detail.value;e.detail.error?(this._errorInvalidTime=e.detail.error,this.error=""):this._errorInvalidTime="",this._updateDateTimeValue(t,"time")}_updateDateTimeValue(e,t){const i=this.value;"date"===t?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const n=this._errorFormat||this._errorInvalidTime?void 0:this._getDateTimeString(),o=this._errorFormat||this._errorInvalidTime?void 0:n;this.value=o,!this._validateDateTimeFormat()||this._dateValue||this._timeValue||(this.value="");const a={value:this.value,oldValue:i,changedPart:t};Oo(this,"change",a)}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return 3===e.length?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(""===e||void 0===e)return{date:"",time:""};const t=e.split("T"),i=t[0],n=t[1];if(e.indexOf("T")===e.length-1||t.length>2)return{date:i,time:""};if(!n)return{date:i,time:ea};const[o,a,s]=n.split(":");if(""===o||""===a||""===s)return{date:i,time:n};const r=`${o}:${a||"00"}`;return s?{date:i,time:`${r}:${s}`}:{date:i,time:r}}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}Rs([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Rs([xo({type:String})],e.prototype,"error",void 0),Rs([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Rs([xo({type:String})],e.prototype,"label",void 0),Rs([xo({type:String,attribute:"lang",reflect:!0,converter:Ea})],e.prototype,"language",void 0),Rs([xo({type:String})],e.prototype,"max",void 0),Rs([xo({type:String})],e.prototype,"min",void 0),Rs([xo({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),Rs([xo({type:Boolean})],e.prototype,"disabled",void 0),Rs([xo({type:Boolean})],e.prototype,"hour12",void 0),Rs([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),Rs([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),Rs([xo({type:Number})],e.prototype,"timeStep",void 0),Rs([Co(".kuc-base-date-1-6-0__input")],e.prototype,"_dateInput",void 0),Rs([Co("kuc-base-label-1-6-0")],e.prototype,"_baseLabelEl",void 0),Rs([Co("kuc-base-error-1-6-0")],e.prototype,"_baseErrorEl",void 0),window.customElements.define("kuc-datetime-picker-1-6-0",e),No('\nkuc-datetime-picker-1-6-0,\nkuc-datetime-picker-1-6-0 *,\nkuc-datetime-picker-1-6-0:lang(en),\nkuc-datetime-picker-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-datetime-picker-1-6-0:lang(ja),\nkuc-datetime-picker-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-datetime-picker-1-6-0:lang(zh),\nkuc-datetime-picker-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-datetime-picker-1-6-0:lang(zh-TW),\nkuc-datetime-picker-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-datetime-picker-1-6-0 {\n  font-size: 14px;\n  display: inline-table;\n  vertical-align: top;\n  line-height: 1.5;\n}\nkuc-datetime-picker-1-6-0[hidden] {\n  display: none;\n}\n.kuc-datetime-picker-1-6-0__group {\n  border: none;\n  padding: 0px;\n  height: auto;\n  display: inline-block;\n  margin: 0px;\n}\n.kuc-datetime-picker-1-6-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-datetime-picker-1-6-0__group__label[hidden] {\n  display: none;\n}\n.kuc-datetime-picker-1-6-0__group__inputs {\n  display: flex;\n  max-width: 185px;\n}\n'),js=e}})();var Gs=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Fs;(()=>{if(Fs=window.customElements.get("kuc-time-picker-1-6-0"),!Fs){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._errorText="",this._inputValue="",this._errorInvalid="",this._inputMax="",this._inputMin="",this._inputTimeStep=30,this._valueConverted="",this._GUID=Po();const t=Da(e);Object.assign(this,t)}shouldUpdate(e){if(e.has("max")||e.has("min")){let e=this._inputMin,t=this._inputMax;if(void 0===this.max||""===this.max)t=ta;else{if(!Ha(this.max))return Ga(this,na),!1;t=this.max=Va(this.max)}if(void 0===this.min||""===this.min)e=ea;else{if(!Ha(this.min))return Ga(this,oa),!1;e=this.min=Va(this.min)}if(da(t,e)<0)return Ga(this,Zo),!1;this._inputMin=e,this._inputMax=t}if(e.has("timeStep")){if(!Ma(this.timeStep))return Ga(this,Qo),!1;if(!Ba(this.timeStep,this._inputMax,this._inputMin))return Ga(this,aa),!1;this._inputTimeStep=this.timeStep}return!(void 0!==this.value&&""!==this.value&&(Ha(this.value)?(this._valueConverted=Va(this.value),e.has("value")&&(da(this._valueConverted,this._inputMin)<0||da(this._inputMax,this._valueConverted)<0)&&(Ga(this,Xo),1)):(Ga(this,ia),1)))}update(e){e.has("value")&&(void 0===this.value?""===this._errorInvalid&&(this._inputValue=""):(this.value=""===this.value?this.value:this._valueConverted,this._inputValue=this.value)),(e.has("max")||e.has("min")||e.has("value"))&&void 0!==this.value&&(this._errorInvalid=""),this._errorText=this._errorInvalid||this.error,super.update(e)}render(){return Qn`
        <fieldset
          class="kuc-time-picker-1-6-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-time-picker-1-6-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-6-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-6-0>
          </legend>
          <kuc-base-time-1-6-0
            class="kuc-time-picker-1-6-0__group__input"
            .value="${this._inputValue}"
            .hour12="${this.hour12}"
            .disabled="${this.disabled}"
            .timeStep="${this._inputTimeStep}"
            .min="${this._inputMin}"
            .max="${this._inputMax}"
            .language="${this._getLanguage()}"
            @kuc:base-time-change="${this._handleTimeChange}"
          >
          </kuc-base-time-1-6-0>
          <kuc-base-error-1-6-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-6-0>
        </fieldset>
      `}updated(){this._baseLabelEl.updateComplete.then((e=>{this._updateErrorWidth()}))}_updateErrorWidth(){const e=os(this._baseLabelEl);this._baseErrorEl.style.width=e>85?e+"px":"85px"}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const t={value:e.detail.value,oldValue:this.value};e.detail.error?(t.value=void 0,this.value=void 0,this._errorInvalid=e.detail.error,this.error=""):(this.value=e.detail.value,this._errorInvalid=""),this._inputValue=e.detail.value,Oo(this,"change",t)}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}Gs([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Gs([xo({type:String})],e.prototype,"error",void 0),Gs([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Gs([xo({type:String})],e.prototype,"label",void 0),Gs([xo({type:String,attribute:"lang",reflect:!0,converter:Ea})],e.prototype,"language",void 0),Gs([xo({type:String})],e.prototype,"max",void 0),Gs([xo({type:String})],e.prototype,"min",void 0),Gs([xo({type:String})],e.prototype,"value",void 0),Gs([xo({type:Boolean})],e.prototype,"disabled",void 0),Gs([xo({type:Boolean})],e.prototype,"hour12",void 0),Gs([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),Gs([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),Gs([xo({type:Number})],e.prototype,"timeStep",void 0),Gs([Co("kuc-base-label-1-6-0")],e.prototype,"_baseLabelEl",void 0),Gs([Co("kuc-base-error-1-6-0")],e.prototype,"_baseErrorEl",void 0),window.customElements.define("kuc-time-picker-1-6-0",e),No('\nkuc-time-picker-1-6-0,\nkuc-time-picker-1-6-0 *,\nkuc-time-picker-1-6-0:lang(en),\nkuc-time-picker-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-time-picker-1-6-0:lang(ja),\nkuc-time-picker-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-time-picker-1-6-0:lang(zh),\nkuc-time-picker-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-time-picker-1-6-0:lang(zh-TW),\nkuc-time-picker-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-time-picker-1-6-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-block;\n  vertical-align: top;\n  line-height: 1.5;\n}\n.kuc-time-picker-1-6-0__group__input {\n  position: relative;\n}\nkuc-time-picker-1-6-0[hidden] {\n  display: none;\n}\n.kuc-time-picker-1-6-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-time-picker-1-6-0__group__label {\n  padding: 4px 0px 8px 0px;\n  display: inline-block;\n  white-space: nowrap;\n}\n.kuc-time-picker-1-6-0__group__label[hidden] {\n  display: none;\n}\n'),Fs=e}})();var Ws=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let qs;(()=>{if(qs=window.customElements.get("kuc-mobile-button-1-6-0"),!qs){class e extends Bo{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.disabled=!1,this.visible=!0;const t=Da(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),Oo(this,"click")}_getButtonColorType(){return"normal"===this.type||"submit"===this.type?this.type:"normal"}render(){return Qn`
        <button
          type="button"
          class="kuc-mobile-button-1-6-0__button kuc-mobile-button-1-6-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.text}
        </button>
      `}}Ws([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ws([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ws([xo({type:String})],e.prototype,"text",void 0),Ws([xo({type:String})],e.prototype,"type",void 0),Ws([xo({type:Boolean})],e.prototype,"disabled",void 0),Ws([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-button-1-6-0",e),No('\n  kuc-mobile-button-1-6-0,\n  kuc-mobile-button-1-6-0 * {\n    font-size: 14px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-button-1-6-0:lang(zh),\n  kuc-mobile-button-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-button-1-6-0:lang(zh-TW),\n  kuc-mobile-button-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-button-1-6-0 {\n    display: inline-block;\n    vertical-align: top;\n  }\n  kuc-mobile-button-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-button-1-6-0__button {\n    min-width: 100px;\n    height: 42px;\n    padding: 12px 12px;\n    user-select: none;\n    font-weight: 700;\n    line-height: 1;\n  }\n  .kuc-mobile-button-1-6-0__button:focus {\n    outline: none;\n  }\n  .kuc-mobile-button-1-6-0__button--submit {\n    border: 2px solid #206694;\n    background-color: #206694;\n    color: #ffffff;\n    border-radius: 6px;\n  }\n  .kuc-mobile-button-1-6-0__button--submit:disabled {\n    border-color: #a5a5a5;\n    background: #a5a5a5;\n  }\n  .kuc-mobile-button-1-6-0__button--normal {\n    border: 2px solid #206694;\n    background-color: #ffffff;\n    color: #206694;\n    border-radius: 6px;\n  }\n  .kuc-mobile-button-1-6-0__button--normal:disabled {\n    color: #a5a5a5;\n    border-color: #a5a5a5;\n    cursor: default;\n  }\n'),qs=e}})();var Ks=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Ys extends Bo{constructor(){super(...arguments),this.requiredIcon=!1,this.guid="",this.text=""}render(){return Qn`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label-1-6-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&""!==this.guid?Qn`
          <span class="kuc-base-mobile-label-1-6-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:Qn` <span class="kuc-base-mobile-label-1-6-0__text">${this.text}</span> `}}Ks([xo({type:Boolean})],Ys.prototype,"requiredIcon",void 0),Ks([xo({type:String})],Ys.prototype,"guid",void 0),Ks([xo({type:String})],Ys.prototype,"text",void 0),window.customElements.get("kuc-base-mobile-label-1-6-0")||(No('\n  kuc-base-mobile-label-1-6-0 {\n    display: inline-table;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-base-mobile-label-1-6-0:lang(zh) ,\n  kuc-base-mobile-label-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-base-mobile-label-1-6-0:lang(zh-TW),\n  kuc-base-mobile-label-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-base-mobile-label-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-base-mobile-label-1-6-0__text {\n    text-shadow: 0 1px 0 #ffffff;\n    color: #888888;\n    white-space: normal;\n    font-size: 86%;\n  }\n  .kuc-base-mobile-label-1-6-0__required-icon {\n    font-size: 86%;\n    position: relative;\n    left: 3px;\n    color: #d01212;\n  }\n  .kuc-base-mobile-label-1-6-0__required-icon[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-mobile-label-1-6-0",Ys));var Js=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Zs extends Bo{constructor(){super(...arguments),this.ariaLive="",this.guid="",this.text=""}render(){return Qn`
      ${this.ariaLive&&""!==this.ariaLive?Qn`
            <div
              class="kuc-base-mobile-error-1-6-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:Qn`
            <div
              class="kuc-base-mobile-error-1-6-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}}Js([xo({type:String})],Zs.prototype,"ariaLive",void 0),Js([xo({type:String})],Zs.prototype,"guid",void 0),Js([xo({type:String})],Zs.prototype,"text",void 0),window.customElements.get("kuc-base-mobile-error-1-6-0")||(No('\n  kuc-base-mobile-error-1-6-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-base-mobile-error-1-6-0:lang(zh),\n  kuc-base-mobile-error-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-base-mobile-error-1-6-0:lang(zh-TW),\n  kuc-base-mobile-error-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-base-mobile-error-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-base-mobile-error-1-6-0__error {\n    line-height: 1.5;\n    color: #000000;\n    background-color: #fdffc9;\n    border: 1px solid #e5db68;\n    border-radius: 0.4em;\n    padding: 0.4em 1em;\n    margin-top: 0.3em;\n    margin-left: 0.5em;\n  }\n  .kuc-base-mobile-error-1-6-0__error[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-mobile-error-1-6-0",Zs));var Xs=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Qs;(()=>{if(Qs=window.customElements.get("kuc-mobile-checkbox-1-6-0"),!Qs){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=Po();const t=Da(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Ua(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.dataset.index||"0",n=t.value,o=this.value?[...this.value]:this.value,a=this._getNewValueMapping(n,i),s=this.items.map((e=>e.value)),r=Object.values(a).filter((e=>s.indexOf(e)>-1));if(r===o)return;const l=Object.keys(a).map((e=>parseInt(e,10)));this.value=r,this.selectedIndex=l,Oo(this,"change",{oldValue:o,value:r})}_getCheckboxIconSvgTemplate(e){return eo`
       <svg
         class="kuc-mobile-checkbox-1-6-0__group__select-menu__item__label__icon"
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="44px"
         height="34px"
         viewBox="0 0 44 34"
         enable-background="new 0 0 44 34"
         xml:space="preserve">
         <image width="44" height="34" x="0" y="0" href="${this._getSVGStrokeValue(e)}"/>
      </svg>
       `}_getSVGStrokeValue(e){return e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC"}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return Qn`
        <label
          for="${this._GUID}-item-${t}"
          class="kuc-mobile-checkbox-1-6-0__group__select-menu__item"
          ?borderVisible="${this.borderVisible}"
        >
          <input
            type="checkbox"
            id="${this._GUID}-item-${t}"
            class="kuc-mobile-checkbox-1-6-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            data-index="${t}"
            value="${void 0!==e.value?e.value:""}"
            aria-describedby="${this._GUID}-error}"
            aria-required="${this.requiredIcon}"
            aria-invalid="${""!==this.error}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <div class="kuc-mobile-checkbox-1-6-0__group__select-menu__item__label">
            ${this._getCheckboxIconSvgTemplate(i)}${void 0===e.label?e.value:e.label}
          </div>
        </label>
      `}shouldUpdate(e){return e.has("items")&&!Na(this.items)?(Ga(this,qa),!1):e.has("value")&&!Pa(this.value)?(Ga(this,Ka),!1):!(e.has("selectedIndex")&&!Ua(this.selectedIndex)&&(Ga(this,Ja),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return Qn`
        <fieldset class="kuc-mobile-checkbox-1-6-0__group">
          <legend
            class="kuc-mobile-checkbox-1-6-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-6-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-6-0>
          </legend>
          <div
            class="kuc-mobile-checkbox-1-6-0__group__select-menu ${this.requiredIcon?"kuc-mobile-checkbox-1-6-0__group__select-menu--required":""}"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-mobile-error-1-6-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-6-0>
        </fieldset>
      `}updated(){this._inputEls.forEach((e=>{e.checked=this.value.indexOf(e.value)>-1}))}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}}Xs([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Xs([xo({type:String})],e.prototype,"error",void 0),Xs([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Xs([xo({type:String})],e.prototype,"label",void 0),Xs([xo({type:Boolean})],e.prototype,"borderVisible",void 0),Xs([xo({type:Boolean})],e.prototype,"disabled",void 0),Xs([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),Xs([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),Xs([xo({type:Array})],e.prototype,"items",void 0),Xs([xo({type:Array})],e.prototype,"selectedIndex",void 0),Xs([xo({type:Array})],e.prototype,"value",void 0),Xs([Io(".kuc-mobile-checkbox-1-6-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),Xs([wo()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-mobile-checkbox-1-6-0",e),No('\n  kuc-mobile-checkbox-1-6-0,\n  kuc-mobile-checkbox-1-6-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-checkbox-1-6-0:lang(zh),\n  kuc-mobile-checkbox-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-checkbox-1-6-0:lang(zh-TW),\n  kuc-mobile-checkbox-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-checkbox-1-6-0 {\n    width: 100%;\n    display: inline-block;\n  }\n  kuc-mobile-checkbox-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    box-sizing: border-box;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__label__text {\n    text-shadow: 0 1px 0 #ffffff;\n    color: #888888;\n    white-space: normal;\n    font-size: inherit;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__label__required-icon {\n    position: relative;\n    left: 3px;\n    color: #d01212;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__label__required-icon[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu[bordervisible] {\n    border-color: #b3b3b3;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 8px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu[disabled] {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu--required[bordervisible] {\n    border-color: #cf4a38;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 8px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item[bordervisible] {\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 30px;\n    display: block;\n    border-bottom: 1px solid #b3b3b3;\n    padding: 8px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item {\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 30px;\n    display: block;\n    padding: 8px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item:last-child {\n    border-bottom: 0px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item__input[disabled]\n    + .kuc-mobile-checkbox-1-6-0__group__select-menu__item__label {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item__label {\n    position: relative;\n    margin: -7px 0px 0px 34px;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: nowrap;\n    padding: 11px 13px 13px 0px;\n    font-size: 14.04px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    left: -30px;\n    margin-top: -13px;\n    box-sizing: border-box;\n    width: 22px;\n    height: 22px;\n    background-size: 22px 17px;\n    content: "";\n  }\n  .kuc-mobile-checkbox-1-6-0__group__error {\n    line-height: 1.5;\n    border: 1px solid #e5db68;\n    background-color: #fdffc9;\n    margin-top: 0.3em;\n    margin-left: 0.5em;\n    padding: 0.4em 1em;\n    border-radius: 0.4em;\n    color: #000000;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__error[hidden] {\n    display: none;\n  }\n'),Qs=e}})();var er=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let tr;(()=>{if(tr=window.customElements.get("kuc-mobile-dropdown-1-6-0"),!tr){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=Po();const t=Da(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value;if(this.value===i&&this.selectedIndex===t.selectedIndex)return;const n={oldValue:this.value,value:i};this.value=i,this.selectedIndex=t.selectedIndex,Oo(this,"change",n)}shouldUpdate(e){return e.has("items")&&!Na(this.items)?(Ga(this,qa),!1):e.has("value")&&!za(this.value)?(Ga(this,Ya),!1):!(e.has("selectedIndex")&&!Ra(this.selectedIndex)&&(Ga(this,Za),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return Qn`
        <option value="${e.value||""}" ?selected="${i}">
          ${void 0===e.label?e.value:e.label}
        </option>
      `}render(){return Qn`
        <label
          class="kuc-mobile-dropdown-1-6-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-6-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-6-0>
        </label>
        <div class="kuc-mobile-dropdown-1-6-0__input-form">
          <div
            class="kuc-mobile-dropdown-1-6-0__input-form__select
            ${this.requiredIcon?"kuc--required":""}"
          >
            <select
              class="kuc-mobile-dropdown-1-6-0__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${""!==this.error}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            >
              ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-6-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-6-0>
      `}updated(e){e.has("selectedIndex")&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}}er([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),er([xo({type:String})],e.prototype,"error",void 0),er([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),er([xo({type:String})],e.prototype,"label",void 0),er([xo({type:String})],e.prototype,"value",void 0),er([xo({type:Number})],e.prototype,"selectedIndex",void 0),er([xo({type:Boolean})],e.prototype,"disabled",void 0),er([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),er([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),er([xo({type:Array})],e.prototype,"items",void 0),er([Co(".kuc-mobile-dropdown-1-6-0__input-form__select__input")],e.prototype,"_selectEl",void 0),window.customElements.define("kuc-mobile-dropdown-1-6-0",e),No('\n  kuc-mobile-dropdown-1-6-0,\n  kuc-mobile-dropdown-1-6-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-dropdown-1-6-0:lang(zh),\n  kuc-mobile-dropdown-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-dropdown-1-6-0:lang(zh-TW),\n  kuc-mobile-dropdown-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-dropdown-1-6-0 {\n    display: inline-block;\n    width: 100%;\n  }\n\n  kuc-mobile-dropdown-1-6-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__input-form {\n    word-wrap: break-word;\n    min-height: 1em;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__input-form__select {\n    display: inline-block;\n    border-radius: 0.4em;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__input-form__select.kuc--required {\n    border: 1px solid #cf4a38;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__input-form__select__input {\n    min-width: 100px;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__input-form__select__input:disabled {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),tr=e}})();var ir=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let nr;(()=>{if(nr=window.customElements.get("kuc-mobile-multi-choice-1-6-0"),!nr){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=Po();const t=Da(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Ua(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=this.value?[...this.value]:this.value,n=Array.from(t.selectedOptions,(e=>e.value)),o=Array.from(t.selectedOptions,(e=>e.dataset.index)),a={value:n,oldValue:i};this.value=n,this.selectedIndex=o.map((e=>e?parseInt(e,10):0)),Oo(this,"change",a)}shouldUpdate(e){return e.has("items")&&!Na(this.items)?(Ga(this,qa),!1):e.has("value")&&!Pa(this.value)?(Ga(this,Ka),!1):!(e.has("selectedIndex")&&!Ua(this.selectedIndex)&&(Ga(this,Ja),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return Qn`
        <option
          value="${e.value||""}"
          data-index="${t}"
          ?selected="${void 0!==e.value&&i}"
        >
          ${void 0===e.label?e.value:e.label}
        </option>
      `}render(){return Qn`
        <label
          class="kuc-mobile-multi-choice-1-6-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-6-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-6-0>
        </label>
        <div class="kuc-mobile-multi-choice-1-6-0__input-form">
          <div
            class="kuc-mobile-multi-choice-1-6-0__input-form__select
            ${this.requiredIcon?"kuc--required":""}"
          >
            <select
              class="kuc-mobile-multi-choice-1-6-0__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${""!==this.error}"
              ?disabled="${this.disabled}"
              multiple
              @change="${this._handleChangeInput}"
            >
              ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-6-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-6-0>
      `}}ir([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),ir([xo({type:String})],e.prototype,"error",void 0),ir([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),ir([xo({type:String})],e.prototype,"label",void 0),ir([xo({type:Boolean})],e.prototype,"disabled",void 0),ir([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),ir([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),ir([xo({type:Array})],e.prototype,"items",void 0),ir([xo({type:Array})],e.prototype,"selectedIndex",void 0),ir([xo({type:Array})],e.prototype,"value",void 0),ir([wo()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-mobile-multi-choice-1-6-0",e),No('\n  kuc-mobile-multi-choice-1-6-0,\n  kuc-mobile-multi-choice-1-6-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n\n  kuc-mobile-multi-choice-1-6-0:lang(zh),\n  kuc-mobile-multi-choice-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-multi-choice-1-6-0:lang(zh-TW),\n  kuc-mobile-multi-choice-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-multi-choice-1-6-0 {\n    display: inline-block;\n    width: 100%;\n  }\n\n  kuc-mobile-multi-choice-1-6-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__input-form {\n    word-wrap: break-word;\n    min-height: 1em;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__input-form__select {\n    display: inline-block;\n    border-radius: 0.4em;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__input-form__select.kuc--required {\n    border: 1px solid #cf4a38;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__input-form__select__input {\n    min-width: 100px;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__input-form__select__input:disabled {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),nr=e}})();var or=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ar;(()=>{if(ar=window.customElements.get("kuc-mobile-radio-button-1-6-0"),!ar){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=Po();const t=Da(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value,n=t.dataset.index||"0",o=parseInt(n,10);if(this.value===i&&this.selectedIndex===o)return;const a={oldValue:this.value,value:i};this.value=i,this.selectedIndex=o,Oo(this,"change",a)}_getRadioIconSvgTemplate(e,t){return eo`
      <svg
        class="kuc-mobile-radio-button-1-6-0__group__select-menu__item__label__icon"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs>
        <radialGradient id="${this._GUID}-shadow">
          <stop offset="0%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="30%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="80%" style="stop-color:#5b5b5b;stop-opacity:0.1" />
          <stop offset="90%" style="stop-color:#5b5b5b;stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:#5b5b5b;stop-opacity:0.2" />
        </radialGradient>
      </defs>
        <circle
          fill="url(#shadow)"
          cx="10.5"
          cy="10.5"
          r="10.15"
          stroke="#bbbbbb" stroke-width="1"/>
        ${t?eo`<circle cx="10.5" cy="10.5" r="6.5" fill="${"#5b5b5b"}"/>`:""}
      </svg>
    `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return Qn`
        <div class="kuc-mobile-radio-button-1-6-0__group__select-menu__item">
          <input
            type="radio"
            aria-describedby="${this._GUID}-error"
            id="${this._GUID}-item-${t}"
            data-index="${t}"
            class="kuc-mobile-radio-button-1-6-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${void 0!==e.value?e.value:""}"
            aria-invalid="${""!==this.error}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <label
            class="kuc-mobile-radio-button-1-6-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(this.disabled,i)}
            <div
              class="kuc-mobile-radio-button-1-6-0__group__select-menu__item__label__value"
            >
              ${void 0===e.label?e.value:e.label}
            </div>
          </label>
        </div>
      `}shouldUpdate(e){return e.has("items")&&!Na(this.items)?(Ga(this,qa),!1):e.has("value")&&!za(this.value)?(Ga(this,Ya),!1):!(e.has("selectedIndex")&&!Ra(this.selectedIndex)&&(Ga(this,Za),1))}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return Qn`
        <div class="kuc-mobile-radio-button-1-6-0__group">
          <div
            class="kuc-mobile-radio-button-1-6-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-6-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-6-0>
          </div>
          <div
            class="kuc-mobile-radio-button-1-6-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-mobile-error-1-6-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-6-0>
        </div>
      `}updated(){this._inputEls.forEach(((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex}))}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}}or([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),or([xo({type:String})],e.prototype,"error",void 0),or([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),or([xo({type:String})],e.prototype,"label",void 0),or([xo({type:String})],e.prototype,"value",void 0),or([xo({type:Number})],e.prototype,"selectedIndex",void 0),or([xo({type:Boolean})],e.prototype,"borderVisible",void 0),or([xo({type:Boolean})],e.prototype,"disabled",void 0),or([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),or([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),or([xo({type:Array})],e.prototype,"items",void 0),or([Io(".kuc-mobile-radio-button-1-6-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),window.customElements.define("kuc-mobile-radio-button-1-6-0",e),No('\n  kuc-mobile-radio-button-1-6-0,\n  kuc-mobile-radio-button-1-6-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n\n  kuc-mobile-radio-button-1-6-0:lang(zh) ,\n  kuc-mobile-radio-button-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-radio-button-1-6-0:lang(zh-TW),\n  kuc-mobile-radio-button-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-radio-button-1-6-0 {\n    width: 100%;\n    display: inline-block;\n  }\n\n  kuc-mobile-radio-button-1-6-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group {\n    border: none;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    vertical-align: top;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu {\n    margin-right: 0.5em;\n    margin-left: 0.5em;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu[bordervisible] {\n    border-color: #b3b3b3;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 0.4em;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu__item {\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 45px;\n    display: block;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu[bordervisible]\n    .kuc-mobile-radio-button-1-6-0__group__select-menu__item {\n    border-bottom: 1px solid #b3b3b3;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu[bordervisible]\n    .kuc-mobile-radio-button-1-6-0__group__select-menu__item:last-child {\n    border-bottom: 0px;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    box-sizing: border-box;\n    margin-top: -11px;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n    border-radius: 9px;\n    left: 8px;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu__item__label__value {\n    height: 45px;\n    line-height: 45px;\n    padding-left: 35px;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu[disabled] {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu__item__label {\n    position: absolute;\n    white-space: nowrap;\n    width: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 100%;\n    padding: 0px;\n  }\n'),ar=e}})();var sr=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let rr;(()=>{if(rr=window.customElements.get("kuc-mobile-text-1-6-0"),!rr){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=Po();const t=Da(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};Oo(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,Oo(this,"change",i)}_handleInputText(e){e.stopPropagation();const t={value:e.target.value,data:e.data};Oo(this,"input",t)}render(){return Qn`
        <label
          class="kuc-mobile-text-1-6-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-6-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-6-0>
        </label>
        <div class="kuc-mobile-text-1-6-0__input-form">
          <span
            class="kuc-mobile-text-1-6-0__input-form__prefix"
            ?hidden="${!this.prefix}"
            >${this.prefix}</span
          >
          <input
            class="kuc-mobile-text-1-6-0__input-form__input"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            textAlign="${this.textAlign}"
            type="text"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            aria-invalid="${""!==this.error}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputText}"
          />
          <span
            class="kuc-mobile-text-1-6-0__input-form__suffix"
            ?hidden="${!this.suffix}"
            >${this.suffix}</span
          >
        </div>
        <kuc-base-mobile-error-1-6-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-6-0>
      `}}sr([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),sr([xo({type:String})],e.prototype,"error",void 0),sr([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),sr([xo({type:String})],e.prototype,"label",void 0),sr([xo({type:String})],e.prototype,"placeholder",void 0),sr([xo({type:String})],e.prototype,"prefix",void 0),sr([xo({type:String})],e.prototype,"suffix",void 0),sr([xo({type:String})],e.prototype,"textAlign",void 0),sr([xo({type:String})],e.prototype,"value",void 0),sr([xo({type:Boolean})],e.prototype,"disabled",void 0),sr([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),sr([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-text-1-6-0",e),No('\nkuc-mobile-text-1-6-0 {\n  display: block;\n  font-size: 13px;\n  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-text-1-6-0:lang(zh),\nkuc-mobile-text-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-text-1-6-0:lang(zh-TW),\nkuc-mobile-text-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-text-1-6-0[hidden] {\n  display: none;\n}\n.kuc-mobile-text-1-6-0__label {\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.5;\n  padding: 0;\n  margin: 0 0 4px 0;\n  white-space: nowrap;\n}\n.kuc-mobile-text-1-6-0__label[hidden] {\n  display: none;\n}\n.kuc-mobile-text-1-6-0__input-form {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  display: flex;\n  align-items: center;\n}\n.kuc-mobile-text-1-6-0__input-form__prefix {\n  margin-right: 4px;\n  color: #888888;\n}\n.kuc-mobile-text-1-6-0__input-form__prefix[hidden] {\n  display: none;\n}\n.kuc-mobile-text-1-6-0__input-form__input {\n  width: 100%;\n  min-width: 20px;\n  padding: 0.4em;\n  border: 1px solid #b3b3b3;\n  outline: 0;\n  box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;\n  border-radius: 0.4em;\n  box-sizing: border-box;\n  text-align: left;\n}\n.kuc-mobile-text-1-6-0__input-form__input[aria-required="true"] {\n  border: 1px solid #cf4a38;\n}\n.kuc-mobile-text-1-6-0__input-form__input[textAlign="right"] {\n  text-align: right;\n}\n.kuc-mobile-text-1-6-0__input-form__input:disabled {\n  color: #999999;\n  background-color: #d5d7d9;\n  -webkit-text-fill-color: #999999;\n  opacity: 1;\n  -webkit-opacity: 1;\n}\n.kuc-mobile-text-1-6-0__input-form__suffix {\n  margin-left: 4px;\n  color: #888888;\n}\n.kuc-mobile-text-1-6-0__input-form__suffix[hidden] {\n  display: none;\n}\n'),rr=e}})();var lr=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let dr;(()=>{if(dr=window.customElements.get("kuc-mobile-textarea-1-6-0"),!dr){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=Po();const t=Da(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};Oo(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,Oo(this,"change",i)}_handleInputTextArea(e){e.stopPropagation();const t={value:e.target.value,data:e.data};Oo(this,"input",t)}render(){return Qn`
        <label
          class="kuc-mobile-textarea-1-6-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-6-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-6-0>
        </label>
        <div class="kuc-mobile-textarea-1-6-0__form">
          <textarea
            class="kuc-mobile-textarea-1-6-0__form__textarea"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            .value="${this.value}"
            aria-invalid="${""!==this.error}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputTextArea}"
          /></textarea>
        </div>
        <kuc-base-mobile-error-1-6-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-6-0>
      `}}lr([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),lr([xo({type:String})],e.prototype,"error",void 0),lr([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),lr([xo({type:String})],e.prototype,"label",void 0),lr([xo({type:String})],e.prototype,"placeholder",void 0),lr([xo({type:String})],e.prototype,"value",void 0),lr([xo({type:Boolean})],e.prototype,"disabled",void 0),lr([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),lr([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-textarea-1-6-0",e),No('\n  kuc-mobile-textarea-1-6-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-textarea-1-6-0:lang(zh),\n  kuc-mobile-textarea-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-textarea-1-6-0:lang(zh-TW),\n  kuc-mobile-textarea-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-textarea-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-textarea-1-6-0__label {\n    padding: 0;\n    margin: 0 0 4px 0;\n    display: inline-block;\n    font-weight: bold;\n    line-height: 1.5;\n    white-space: nowrap;\n  }\n  .kuc-mobile-textarea-1-6-0__label[hidden] {\n    display: none;\n  }\n  .kuc-mobile-textarea-1-6-0__form {\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n  .kuc-mobile-textarea-1-6-0__form__textarea {\n    width: 100%;\n    height: 120px;\n    padding: 0.4em;\n    border: 1px solid #b3b3b3;\n    outline: 0;\n    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;\n    border-radius: 0.4em;\n    box-sizing: border-box;\n    vertical-align: top;\n  }\n  .kuc-mobile-textarea-1-6-0__form__textarea[aria-required="true"] {\n    border: 1px solid #cf4a38;\n  }\n  .kuc-mobile-textarea-1-6-0__form__textarea:disabled {\n    color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),dr=e}})();var ur=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let cr;(()=>{if(cr=window.customElements.get("kuc-mobile-notification-1-6-0"),!cr){class e extends Bo{constructor(e){super(),this.className="",this.text="",this.duration=-1,this._isOpened=!1;const t=Da(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return eo`
      <svg
        height="12"
        width="12"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"/>
          </g>
        </svg>
      `}_setAutoCloseTimer(){!Number.isFinite(this.duration)||this.duration<0||(this._clearAutoCloseTimer(),this._timeoutID=window.setTimeout((()=>{this.close()}),this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){document.body.appendChild(this),this.performUpdate(),this.classList.remove("kuc-mobile-notification-fadeout-1-6-0"),this.classList.add("kuc-mobile-notification-fadein-1-6-0"),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._isOpened=!1,this.classList.remove("kuc-mobile-notification-fadein-1-6-0"),this.classList.add("kuc-mobile-notification-fadeout-1-6-0"),this._clearAutoCloseTimer(),Oo(this,"close")}render(){return Qn`
        <div class="kuc-mobile-notification-1-6-0__notification">
          <pre
            class="kuc-mobile-notification-1-6-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?"alert":""}"
          ><!---->${this.text}</pre>
          <button
            class="kuc-mobile-notification-1-6-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}ur([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),ur([xo({type:String})],e.prototype,"text",void 0),ur([xo({type:Number})],e.prototype,"duration",void 0),ur([wo()],e.prototype,"_isOpened",void 0),window.customElements.define("kuc-mobile-notification-1-6-0",e),No('\n  kuc-mobile-notification-1-6-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n    position: relative;\n    top: -100px;\n    left: 0;\n  }\n\n  kuc-mobile-notification-1-6-0:lang(zh),\n  kuc-mobile-notification-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-notification-1-6-0:lang(zh-TW),\n  kuc-mobile-notification-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  .kuc-mobile-notification-fadein-1-6-0 {\n    animation-name: kuc-mobile-notification-fade-in-1-6-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n    width: 100%;\n    position: fixed;\n    visibility: visible;\n  }\n\n  .kuc-mobile-notification-fadeout-1-6-0 {\n    animation-name: kuc-mobile-notification-fade-out-1-6-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n    width: 100%;\n    position: fixed;\n  }\n\n  .kuc-mobile-notification-1-6-0__notification {\n    background-color: #ffffcf;\n    background: linear-gradient(#ffda4a, #ffc32c);\n    width: 100%;\n    min-height: 48px;\n    z-index: 20;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 14px;\n    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;\n    color: #333333;\n    text-align: center;\n    vertical-align: top;\n  }\n\n  .kuc-mobile-notification-1-6-0__notification__title {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 17px 44px 11px 44px;\n    margin: 0 0 0 -20px;\n    text-align: left;\n    font-weight: inherit;\n    font-family: inherit;\n    word-break: break-word;\n    white-space: pre-wrap;\n  }\n\n  .kuc-mobile-notification-1-6-0__notification__close-button {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 44px;\n    height: 48px;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    vertical-align: middle;\n    pointer-events: auto;\n    outline: none;\n  }\n  @keyframes kuc-mobile-notification-fade-in-1-6-0 {\n    0% {\n      top: -100px;\n      left: 0;\n    }\n    50% {\n      top: -50px;\n      left: 0;\n    }\n    100% {\n      top: 0;\n      left: 0;\n    }\n  }\n  @keyframes kuc-mobile-notification-fade-out-1-6-0 {\n    0% {\n      visibility: visible;\n      top: 0;\n      left: 0;\n    }\n    50% {\n      visibility: visible;\n      top: -50px;\n      left: 0;\n    }\n    100% {\n      top: -100px;\n      left: 0;\n    }\n  }\n'),cr=e}})();var hr=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class pr extends Bo{constructor(){super(...arguments),this.language="en",this.month=1,this.year=2021,this._locale=xa("en")}update(e){e.has("language")&&(this._locale=xa(this.language)),this._monthOptions=this._generateMonthOptions(),this._yearOptions=this._generateYearOptions(),super.update(e)}render(){return Qn`
      <div class="kuc-base-mobile-datetime-calendar-header-1-6-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-6-0__group__button kuc-base-mobile-datetime-calendar-header-1-6-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
        >
          ${this._getLeftArrowIconSvgTemplate()}
        </button>
        <div class="kuc-base-mobile-datetime-calendar-header-1-6-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-6-0__group__button kuc-base-mobile-datetime-calendar-header-1-6-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${this._getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `}updated(e){e.has("month")&&this._setSelectMonthWidth(this.month),e.has("year")&&this._setYearSelectedIndex(),super.update(e)}_setSelectMonthWidth(e){const t=this._monthOptions[e-1].label;if(!t)return;const i=document.createElement("span");i.innerText=t;const n=os(i);this._selectMonthEl.selectedIndex=this.month-1,this._selectMonthEl.style.width=n+35+"px"}_setYearSelectedIndex(){this.year<100?this._selectYearEl.selectedIndex=this.year:this._selectYearEl.selectedIndex=100}_generateMonthOptions(){return this._locale.MONTH_SELECT.map(((e,t)=>({value:`${t+1}`,label:`${e}`})))}_generateYearOptions(){return this._getYearOptions().map((e=>({value:`${e}`,label:`${e}${this._locale.YEAR_SELECT_POSTFIX}`})))}_getYearOptions(){const e=[];Number.isInteger(this.year)||(this.year=(new Date).getFullYear());let t=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(t>=i&&(t=i-100);t<=i;t++)e.push(t);return e}_getYearMonthTemplate(){return"zh"===this.language||"ja"===this.language||"zh-TW"===this.language?Qn` ${this._getYearTemplate()}${this._getMonthTemplate()} `:Qn` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleChangeMonthDropdown(e){e.stopPropagation(),e.preventDefault();const t=e.target;this.month=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleChangeYearDropdown(e){e.stopPropagation(),e.preventDefault();const t=e.target;this.year=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),1===this.month?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),12===this.month?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const e=this.year,t=this.month;Oo(this,"kuc:mobile-calendar-header-change",{value:`${e}-${t}`})}_getOptionsMonthTemplate(){return this._monthOptions.map((e=>Qn`
          <option
            ?selected="${parseInt(e.value,10)===this.month}"
            value="${e.value}"
          >
            ${e.label}
          </option>
        `))}_getOptionsYearTemplate(){return this._yearOptions.map((e=>Qn`
          <option
            ?selected="${parseInt(e.value,10)===this.year}"
            value="${e.value}"
          >
            ${e.label}
          </option>
        `))}_getMonthTemplate(){return Qn`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__month"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__month__select"
          @change="${this._handleChangeMonthDropdown}"
        >
          ${this._getOptionsMonthTemplate()}
        </select>
      </div>
    `}_getYearTemplate(){return Qn`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__year"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__year__select"
          @change="${this._handleChangeYearDropdown}"
        >
          ${this._getOptionsYearTemplate()}
        </select>
      </div>
    `}_getLeftArrowIconSvgTemplate(){return eo`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.70788 11.9567C9.0984 12.3472 9.0984 12.9804 8.70788 13.3709C8.31735 13.7614 7.68419 13.7614 7.29366 13.3709L2.34392 8.42118L0.929703 7.00696L2.34392 5.59275L7.29366 0.643003C7.68419 0.25248 8.31735 0.25248 8.70788 0.643003C9.0984 1.03353 9.0984 1.66669 8.70788 2.05722L4.68709 6.07801L14.0718 6.07801C14.6241 6.07801 15.0718 6.52572 15.0718 7.07801C15.0718 7.63029 14.6241 8.07801 14.0718 8.07801L4.82917 8.07801L8.70788 11.9567Z"
        fill="#206694"
      />
    </svg>`}_getRightArrowIconSvgTemplate(){return eo`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29396 2.0572C6.90344 1.66668 6.90344 1.03351 7.29396 0.642991C7.68449 0.252466 8.31765 0.252467 8.70817 0.642991L13.6579 5.59274L15.0721 7.00695L13.6579 8.42117L8.70817 13.3709C8.31765 13.7614 7.68448 13.7614 7.29396 13.3709C6.90344 12.9804 6.90344 12.3472 7.29396 11.9567L11.3148 7.93591L1.93 7.93591C1.37772 7.93591 0.93 7.48819 0.93 6.93591C0.93 6.38362 1.37772 5.93591 1.93 5.93591L11.1727 5.93591L7.29396 2.0572Z"
        fill="#206694"
      />
    </svg>`}}hr([xo({type:String,attribute:"lang",reflect:!0})],pr.prototype,"language",void 0),hr([xo({type:Number,hasChanged(e){return(t=e)>0&&t<13;var t}})],pr.prototype,"month",void 0),hr([xo({type:Number,hasChanged(e){return(t=e)>=0&&t<1e4;var t}})],pr.prototype,"year",void 0),hr([wo()],pr.prototype,"_monthOptions",void 0),hr([wo()],pr.prototype,"_yearOptions",void 0),hr([Co(".kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__month__select")],pr.prototype,"_selectMonthEl",void 0),hr([Co(".kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__year__select")],pr.prototype,"_selectYearEl",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-header-1-6-0")||(No('\nkuc-base-mobile-datetime-calendar-header-1-6-0,\nkuc-base-mobile-datetime-calendar-header-1-6-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-header-1-6-0:lang(zh),\nkuc-base-mobile-datetime-calendar-header-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-header-1-6-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-header-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    border-bottom: 1px solid #e3e7e8;\n    padding: 0;\n    white-space: nowrap;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    min-width: 40px;\n    width: 40px;\n    height: 40px;\n    overflow: hidden;\n    text-indent: 100%;\n    white-space: nowrap;\n    word-wrap: normal;\n    cursor: pointer;\n    -webkit-appearance: button;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__button-icon {\n    vertical-align: middle;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__button:focus {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center {\n    text-align: center;\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    min-width: 186px;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center\n    > :first-child {\n    padding-left: 13px;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__month,\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__year {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__month__select,\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__year__select {\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0 22.4px 0 0;\n    line-height: 40px;\n    border: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: url("data:image/svg+xml,%3Csvg%0A%20%20%20%20width%3D%2211%22%0A%20%20%20%20height%3D%226%22%0A%20%20%20%20viewBox%3D%220%200%2011%206%22%0A%20%20%20%20fill%3D%22none%22%0A%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill-rule%3D%22evenodd%22%0A%20%20%20%20%20%20clip-rule%3D%22evenodd%22%0A%20%20%20%20%20%20d%3D%22M5.5061%206L0%200L11%200L5.5061%206Z%22%0A%20%20%20%20%20%20fill%3D%22%234b4b4b%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E")\n    no-repeat center right 0.6em #ffffff;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__month__select:focus,\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__year__select:focus {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__month {\n    margin: 0 4px 0 4px;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-header-1-6-0",pr));var _r=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class br extends Bo{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=xa("en"),this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}update(e){if(e.forEach(((e,t)=>{"language"===t&&(this._locale=xa(this.language))})),e.has("month")&&(this._month=this.month),e.has("year")&&(this._year=this.year),e.has("value")){const{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return Qn`
      <table class="kuc-base-mobile-datetime-calendar-body-1-6-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}_handleClickDocument(){Oo(this,"kuc:mobile-calendar-body-blur",{})}_handleClickDate(e){e.preventDefault(),e.stopPropagation();const t=e.target;t.setAttribute("aria-selected","true");const i=t.getAttribute("data-date");this._dispatchClickEvent(i)}_dispatchClickEvent(e){const t={oldValue:this.value,value:e};Oo(this,"kuc:mobile-calendar-body-click-date",t),this.value=e}_isToday(e){const t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_separateDateValue(e=this.value){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}_getDateClass(e,t){return t?this._isToday(e)?" kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--today":"":" kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--other-month"}_isSameDayOfMoment(e){const t=parseInt(e[1],10),i=parseInt(e[2],10),n=parseInt(e[0],10);let o=(new Date).getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(o=new Date(this.value).getDate()),o===i&&t===this._month)return!0;const a=new Date(n,this._month,0).getDate();return o>a&&a===i&&t===this._month}_getHeaderItemsTemplate(){return Qn`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map((e=>Qn`
              <th
                class="kuc-base-mobile-datetime-calendar-body-1-6-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `))}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){const e=sa(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return Qn`
      <tbody>
        ${e.map((e=>Qn`
            <tr>
              ${e.map((e=>{const i=e.text.split("-"),n=this._isSameDayOfMoment(i),o=parseInt(i[1],10)===this._month,a=(this.value===e.attr||n)&&o;return Qn`
                  <td
                    role="gridcell"
                    tabindex="${a?0:-1}"
                    aria-selected="${this.value===e.attr}"
                    aria-current="${!!this._isToday(i)&&"date"}"
                    class="kuc-base-mobile-datetime-calendar-body-1-6-0__table__date${a?"--selected":""}${this._getDateClass(i,o)}"
                    data-date="${e.attr}"
                    aria-label="${i[2]} ${t}"
                    @click="${this._handleClickDate}"
                  >
                    ${i[2]||""}
                  </td>
                `}))}
            </tr>
          `))}
      </tbody>
    `}}_r([xo({type:Number})],br.prototype,"month",void 0),_r([xo({type:Number})],br.prototype,"year",void 0),_r([xo({type:String,attribute:"lang",reflect:!0})],br.prototype,"language",void 0),_r([xo({type:String,reflect:!0})],br.prototype,"value",void 0),_r([wo()],br.prototype,"_month",void 0),_r([wo()],br.prototype,"_year",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-body-1-6-0")||(No('\nkuc-base-mobile-datetime-calendar-body-1-6-0,\nkuc-base-mobile-datetime-calendar-body-1-6-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-body-1-6-0:lang(zh),\nkuc-base-mobile-datetime-calendar-body-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-body-1-6-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-body-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table tr {\n    border-collapse: separate;\n    border-spacing: 0;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected {\n    border-spacing: 1px;\n    padding: 0px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date {\n    max-width: 40px;\n    border-spacing: 1px;\n    cursor: pointer;\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    border: 1px solid #ffffff;\n    text-align: center;\n    vertical-align: middle;\n    user-select: none;\n    color: #333333;\n    font-size: 14px;\n    font-weight: 400;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button {\n    border-spacing: 1px;\n    cursor: pointer;\n    box-sizing: border-box;\n    text-align: center;\n    vertical-align: middle;\n    color: #333333;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__header {\n    box-sizing: border-box;\n    height: 40px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-weight: 400;\n    font-size: 12px;\n    color: #333333;\n    padding: 0;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date {\n    font-size: 14px;\n}\nth.kuc-base-mobile-datetime-calendar-body-1-6-0__table__header {\n    font-weight: 700;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__header {\n    box-sizing: border-box;\n    border: 1px solid #ffffff;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button {\n    background: none;\n    cursor: pointer;\n    max-width: 40px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected {\n    border: 1px solid #206694;\n    box-sizing: border-box;\n    text-align: center;\n    font-size: 14px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button:focus-visible {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--today {\n    color: #333333;\n    background: #d8d8d8;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--other-month {\n    color: #a5a5a5;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected:focus {\n    outline: none;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-body-1-6-0",br));var mr=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class gr extends Bo{constructor(){super(...arguments),this.language="en",this._locale=xa("en")}update(e){e.has("language")&&(this._locale=xa(this.language)),super.update(e)}_handleClickCalendarFooterButtonClose(e){e.stopPropagation(),Oo(this,"kuc:mobile-calendar-footer-click-close")}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),Oo(this,"kuc:mobile-calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),Oo(this,"kuc:mobile-calendar-footer-click-today")}render(){return Qn`
      <div class="kuc-base-mobile-datetime-calendar-footer-1-6-0__group">
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-6-0__group__button kuc-base-mobile-datetime-calendar-footer-1-6-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-6-0__group__button kuc-base-mobile-datetime-calendar-footer-1-6-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-6-0__group__button kuc-base-mobile-datetime-calendar-footer-1-6-0__group__button--close"
          @click="${this._handleClickCalendarFooterButtonClose}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.close}
        </button>
      </div>
    `}}mr([xo({type:String,attribute:"lang",reflect:!0})],gr.prototype,"language",void 0),mr([wo()],gr.prototype,"_locale",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-footer-1-6-0")||(No('\nkuc-base-mobile-datetime-calendar-footer-1-6-0,\nkuc-base-mobile-datetime-calendar-footer-1-6-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-footer-1-6-0:lang(zh),\nkuc-base-mobile-datetime-calendar-footer-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-footer-1-6-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-footer-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n.kuc-base-mobile-datetime-calendar-footer-1-6-0__group {\n    display: flex;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 0;\n    white-space: nowrap;\n}\n.kuc-base-mobile-datetime-calendar-footer-1-6-0__group__button {\n    background: transparent;\n    border: 1px solid transparent;\n    color: #206694;\n    height: 40px;\n    cursor: pointer;\n    font-size: 14px;\n    outline: none;\n    padding: 0;\n    margin: 0;\n    font-weight: 700;\n}\n.kuc-base-mobile-datetime-calendar-footer-1-6-0__group__center {\n    width: 100%;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-footer-1-6-0",gr));var fr=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class vr extends Bo{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=2021}update(e){e.has("value")&&this._updateValue(),super.update(e)}render(){return Qn`
      <div
        class="kuc-base-mobile-datetime-calendar-1-6-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
      >
        <kuc-base-mobile-datetime-calendar-header-1-6-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:mobile-calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-mobile-datetime-calendar-header-1-6-0>
        <kuc-base-mobile-datetime-calendar-body-1-6-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-body-1-6-0>
        <kuc-base-mobile-datetime-calendar-footer-1-6-0
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-footer-1-6-0>
      </div>
    `}updated(e){super.updated(e)}_handleClickCalendarGroup(e){e.stopPropagation()}_handleCalendarHeaderChange(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_updateValue(){""===this.value&&(this.value=fa().slice(0,7)+"-01");const{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){const t=e.split("-");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}}fr([xo({type:String,attribute:"lang",reflect:!0})],vr.prototype,"language",void 0),fr([xo({type:String,reflect:!0})],vr.prototype,"value",void 0),fr([wo()],vr.prototype,"_month",void 0),fr([wo()],vr.prototype,"_year",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-1-6-0")||(No("\n.kuc-base-mobile-datetime-calendar-1-6-0__group {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 290px;\n    padding: 0 10px;\n    background: #ffffff;\n    text-align: center;\n    font-size: 13px;\n    border: 1px solid #d8d8d8;\n}\n"),window.customElements.define("kuc-base-mobile-datetime-calendar-1-6-0",vr));var yr=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class kr extends Bo{constructor(){super(...arguments),this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._calendarValue="",this._inputValue=""}update(e){e.has("inputId")&&(this._GUID=this.inputId),(e.has("value")||e.has("language"))&&this._updateValueProp(),super.update(e)}render(){return Qn`
      <div class="kuc-mobile-base-date-1-6-0__group${this._getGroupClass()}">
        <input
          class="kuc-mobile-base-date-1-6-0__group__input"
          type="text"
          id="${this._GUID}-label"
          readonly="readonly"
          .value="${this._inputValue}"
          aria-label="Date"
          aria-describedby="${this._GUID}-error"
          aria-invalid="${this.inputAriaInvalid}"
          aria-required="${this.required}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickOpenCalendar}"
        />
        <button
          type="button"
          class="kuc-mobile-base-date-1-6-0__group__button"
          aria-label="calendar"
          @click="${this._handleClickOpenCalendar}"
          ?disabled="${this.disabled}"
        >
          ${this._getCalendarIconTemplate()}
        </button>
        ${this._getCalendarTemplate()}
      </div>
    `}updated(e){this._dateTimeCalendarVisible&&this._setCalendarPosition(),super.updated(e)}_setCalendarPosition(){const{inputToBottom:e,inputToTop:t}=Ia(this),i=this._inputEl.getBoundingClientRect().height;e>=t||(this._calendarEl.style.bottom=i+2+"px",this._calendarEl.style.top="auto")}_getGroupClass(){let e="";return this.disabled&&(e+=" kuc-mobile-base-date-1-6-0__group--disabled"),this.required&&(e+=" kuc-mobile-base-date-1-6-0__group--required"),e}_handleClickOpenCalendar(e){if(this._dateTimeCalendarVisible)return e.preventDefault(),void e.stopPropagation();this._calendarValue=this._getNewCalendarValue(this._inputValue||""),this._openCalendar()}_updateValueProp(){if(this.value)return this._inputValue=ba(this.language,this.value),void(this._calendarValue=this.value);const e=fa();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)}_getNewCalendarValue(e){if(va(this.language,e))return ma(this.language,e);let t=this._calendarValue.slice(0,7);return""===e&&(t=this._calendarValue.slice(0,7)+"-01"),t}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,Oo(this,"kuc:mobile-base-date-change",e.detail),this._btnToggleEl.focus())}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._inputValue="";let e=this.value?this.value.slice(0,7)+"-01":"";e||(e=this._calendarValue.slice(0,7)+"-01"),this._calendarValue=e,this._dispathDateChangeCustomEvent("")}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const e=fa();this._dispathDateChangeCustomEvent(e)}_handleClickCalendarFooterButtonClose(){this._closeCalendar(),this._btnToggleEl.focus()}_handleCalendarBlurBody(e){e.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(e){const t={value:e,oldValue:this.value};this.value=e,Oo(this,"kuc:mobile-base-date-change",t),this._btnToggleEl.focus()}_getCalendarTemplate(){return this._dateTimeCalendarVisible?Qn`
          <kuc-base-mobile-datetime-calendar-1-6-0
            class="kuc-base-mobile-date-1-6-0__calendar"
            .language="${this.language}"
            .value="${this._calendarValue}"
            ?hidden="${!this._dateTimeCalendarVisible}"
            @kuc:mobile-calendar-body-click-date="${this._handleClickCalendarClickDate}"
            @kuc:mobile-calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
            @kuc:mobile-calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
            @kuc:mobile-calendar-footer-click-close="${this._handleClickCalendarFooterButtonClose}"
            @kuc:mobile-calendar-body-blur="${this._handleCalendarBlurBody}"
          >
          </kuc-base-mobile-datetime-calendar-1-6-0>
        `:""}_getCalendarIconTemplate(){return Qn`
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C9.44772 4 9 4.44772 9 5V6H6C4.89543 6 4 6.89543 4 8V21C4 22.1046 4.89543 23 6 23H22C23.1046 23 24 22.1046 24 21V8C24 6.89543 23.1046 6 22 6H19V5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5V6H11V5C11 4.44772 10.5523 4 10 4ZM9 8V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V8H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V8H22V11H6V8H9ZM6 13V21H22V13H6Z"
          fill="#4b4b4b"
        />
      </svg>
    `}}yr([xo({type:String})],kr.prototype,"inputId",void 0),yr([xo({type:String,attribute:"lang",reflect:!0})],kr.prototype,"language",void 0),yr([xo({type:String,reflect:!0})],kr.prototype,"value",void 0),yr([xo({type:Boolean})],kr.prototype,"disabled",void 0),yr([xo({type:Boolean})],kr.prototype,"inputAriaInvalid",void 0),yr([xo({type:Boolean})],kr.prototype,"required",void 0),yr([Co(".kuc-mobile-base-date-1-6-0__group__button")],kr.prototype,"_btnToggleEl",void 0),yr([Co(".kuc-mobile-base-date-1-6-0__group__input")],kr.prototype,"_inputEl",void 0),yr([Co(".kuc-base-mobile-date-1-6-0__calendar")],kr.prototype,"_calendarEl",void 0),yr([wo()],kr.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-mobile-base-date-1-6-0")||(No('\nkuc-mobile-base-date-1-6-0,\nkuc-mobile-base-date-1-6-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-base-date-1-6-0:lang(zh),\nkuc-mobile-base-date-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-base-date-1-6-0:lang(zh-TW),\nkuc-mobile-base-date-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n.kuc-mobile-base-date-1-6-0__group {\n    display: flex;\n    align-items: center;\n    position: relative;\n    border-radius: 5.148px;\n    background-color: #ffffff;\n}\n.kuc-mobile-base-date-1-6-0__group__input[aria-required="true"] {\n    border-color: #cf4a38;\n}\ninput.kuc-mobile-base-date-1-6-0__group__input {\n    color: #000000;\n    width: 100%;\n    height: 31.28px;\n    font-size: 99%;\n    -webkit-flex-grow: 1;\n    flex-grow: 1;\n    padding: 5.148px;\n    border-radius: 5.148px;\n    box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;\n    border: 1px solid #b3b3b3;\n    font-weight: 400;\n    -webkit-appearance: none;\n    appearance: none;\n    outline: 0;\n    background: transparent;\n    box-sizing: border-box;\n}\n.kuc-mobile-base-date-1-6-0__group--disabled {\n    background-color: #d5d7d9;\n    opacity: 1;\n}\n.kuc-mobile-base-date-1-6-0__group--disabled input {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n}\n.kuc-base-mobile-date-1-6-0__calendar {\n    position: absolute;\n    left: 0;\n    top: 39px;\n    z-index: 1000;\n}\n.kuc-mobile-base-date-1-6-0__group__button {\n    position: absolute;\n    display: flex;\n    right: 10px;\n    background-color: transparent;\n    border: 0;\n    padding: 0;\n    height: 100%;\n    align-items: center;\n}\n'),window.customElements.define("kuc-mobile-base-date-1-6-0",kr));var xr=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let wr;(()=>{if(wr=window.customElements.get("kuc-mobile-date-picker-1-6-0"),!wr){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._dateConverted="",this._inputValue="",this._GUID=Po();const t=Da(e);Object.assign(this,t)}shouldUpdate(e){return!(void 0!==this.value&&""!==this.value&&(La(this.value)?(this._dateConverted=Aa(this.value),""!==this._dateConverted&&!Oa(this._dateConverted)&&(Ga(this,ia),1)):(Ga(this,ia),1)))}willUpdate(e){e.has("value")&&void 0!==this.value&&""!==this.value&&(this.value=this._dateConverted)}update(e){e.has("value")&&this._updateInputValue(),super.update(e)}render(){return Qn`
        <div class="kuc-mobile-date-picker-1-6-0__group">
          <label
            class="kuc-mobile-date-picker-1-6-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-6-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-6-0>
          </label>
          <kuc-mobile-base-date-1-6-0
            class="kuc-mobile-date-picker-1-6-0__group__base__date"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${""!==this.error}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date-1-6-0>
          <kuc-base-mobile-error-1-6-0 .guid="${this._GUID}" .text="${this.error}">
          </kuc-base-mobile-error-1-6-0>
        </div>
      `}_updateInputValue(){void 0!==this.value&&""!==this.value?this._inputValue=this.value:this._inputValue=""}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const t={oldValue:this.value,value:""};this.value=e.detail.value,t.value=this.value,this._disptchChangeEvent(t)}_disptchChangeEvent(e){Oo(this,"change",e)}}xr([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),xr([xo({type:String})],e.prototype,"error",void 0),xr([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),xr([xo({type:String})],e.prototype,"label",void 0),xr([xo({type:Boolean})],e.prototype,"disabled",void 0),xr([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),xr([xo({type:String,attribute:"lang",reflect:!0,converter:Ea})],e.prototype,"language",void 0),xr([xo({type:String})],e.prototype,"value",void 0),xr([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),xr([wo()],e.prototype,"_inputValue",void 0),window.customElements.define("kuc-mobile-date-picker-1-6-0",e),No('\nkuc-mobile-date-picker-1-6-0,\nkuc-mobile-date-picker-1-6-0 * {\n  color: #333333;\n  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-date-picker-1-6-0:lang(zh),\nkuc-mobile-date-picker-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-date-picker-1-6-0:lang(zh-TW),\nkuc-mobile-date-picker-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-date-picker-1-6-0 {\n  font-size: 13px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  width: 100%;\n}\nkuc-mobile-date-picker-1-6-0[hidden] {\n  display: none;\n}\n.kuc-mobile-date-picker-1-6-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-mobile-date-picker-1-6-0__group__label {\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.5;\n  padding: 0px;\n  white-space: nowrap;\n  margin: 0 0 4px 0;\n}\n.kuc-mobile-date-picker-1-6-0__group__base__date {\n  width: 130px;\n  margin-right: 0.5em;\n  margin-left: 0.5em;\n}\n.kuc-mobile-date-picker-1-6-0__group__label[hidden] {\n  display: none;\n}\n.kuc-mobile-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\n.kuc-mobile-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-mobile-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-mobile-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n'),wr=e}})();var $r=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Cr extends Bo{constructor(e){super(),this.guid="",this.language="en",this.value="",this.disabled=!1,this.hour12=!1,this.required=!1,this._timeStep=1,this._hours="",this._minutes="",this._suffix="",this._locale=xa("en");const t=Da(e);Object.assign(this,t)}update(e){e.has("language")&&(this._locale=xa(this.language)),e.has("hour12")&&(this._hourOptions=((e=!1)=>e?wa("AM").concat(wa("PM")):(()=>{const e=[];e.push({value:"00",label:"00"});for(let t=1;t<=23;t++)e.push({value:ya(t),label:`${ya(t)}`});return e})())(this.hour12)),e.has("_timeStep")&&(this._minuteOptions=((e=1)=>{const t=[];for(let i=0;i<=59;i+=e)t.push({value:ya(i),label:ya(i)});return t})(this._timeStep)),super.update(e)}render(){return Qn`
      <fieldset
        class="kuc-base-mobile-time-1-6-0__group${this.disabled?" kuc-base-mobile-time-1-6-0__group--disabled":""}${this.required?" kuc-base-mobile-time-1-6-0__group--required":""}"
        aria-label="label-text"
      >
        <select
          class="kuc-base-mobile-time-1-6-0__group__hours"
          aria-label="Hour"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeHours}"
        >
          <option value selected></option>
          ${this._getOptionsHourTemplate()}
        </select>
        <span class="kuc-base-mobile-time-1-6-0__group__colon">:</span>
        <select
          class="kuc-base-mobile-time-1-6-0__group__minutes"
          aria-label="Minute"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeMinutes}"
        >
          <option value selected></option>
          ${this._getOptionsMinuteTemplate()}
        </select>
      </fieldset>
    `}updated(e){e.has("value")&&this._updateInputValue(),super.update(e)}_updateInputValue(){const e=((e,t)=>{const i={hours:"",minutes:"",suffix:""},n=e.split(":"),o=parseInt(n[0],10),a=parseInt(n[1],10),s=o%qo;return isNaN(s)||(i.hours=ya(t?ua(s):s),i.suffix=t?ca(s):""),isNaN(a)||(i.minutes=ya(a)),i})(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||"",this._setValueToInput(e)}_setValueToInput(e){this._minutesEl.value=e.minutes,e.suffix?this._hoursEl.value=e.suffix+" "+e.hours:this._hoursEl.value=e.hours}_handleChangeMinutes(e){e.preventDefault(),e.stopPropagation();const t=this._getTimeValueString(),i=e.target.value;this._minutes=i;const n=this._getTimeValueString();this.value=n,this._dispatchEventTimeChange(n,t)}_handleChangeHours(e){e.preventDefault(),e.stopPropagation();const t=this._getTimeValueString(),i=e.target.value.split(" ");2===i.length?(this._hours=i[1],this._suffix=i[0]):(this._hours=i[0],this._suffix="");const n=this._getTimeValueString();this.value=n,this._dispatchEventTimeChange(n,t)}_getTimeValueString(){const e=`${this._hours}:${this._minutes}`;return this._suffix?ha(`${e} ${this._suffix}`):ha(e)}_dispatchEventTimeChange(e,t){const i=":"===e?"":e,n={value:i,oldValue:":"===t?"":t};n.error=Ha(i)?"":this._locale.INVALID_TIME_FORMAT,Oo(this,"kuc:base-mobile-time-change",n)}_getOptionsMinuteTemplate(){return this._minuteOptions.map((e=>Qn` <option value="${e.value}">${e.label}</option> `))}_getOptionsHourTemplate(){return this._hourOptions.map((e=>Qn` <option value="${e.value}">${e.label}</option> `))}}$r([xo({type:String})],Cr.prototype,"guid",void 0),$r([xo({type:String,attribute:"lang",reflect:!0})],Cr.prototype,"language",void 0),$r([xo({type:String})],Cr.prototype,"value",void 0),$r([xo({type:Boolean})],Cr.prototype,"disabled",void 0),$r([xo({type:Boolean})],Cr.prototype,"hour12",void 0),$r([xo({type:Boolean})],Cr.prototype,"required",void 0),$r([wo()],Cr.prototype,"_timeStep",void 0),$r([wo()],Cr.prototype,"_hours",void 0),$r([wo()],Cr.prototype,"_minutes",void 0),$r([wo()],Cr.prototype,"_suffix",void 0),$r([wo()],Cr.prototype,"_hourOptions",void 0),$r([wo()],Cr.prototype,"_minuteOptions",void 0),$r([Co(".kuc-base-mobile-time-1-6-0__group__hours")],Cr.prototype,"_hoursEl",void 0),$r([Co(".kuc-base-mobile-time-1-6-0__group__minutes")],Cr.prototype,"_minutesEl",void 0),window.customElements.get("kuc-base-mobile-time-1-6-0")||(No('\n    kuc-base-mobile-time-1-6-0,\n    kuc-base-mobile-time-1-6-0 * {\n        font-size: 13px;\n        font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n        "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n        "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n    }\n    kuc-base-mobile-time-1-6-0:lang(zh),\n    kuc-base-mobile-time-1-6-0:lang(zh) * {\n        font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n        Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n        Verdana, sans-serif;\n    }\n    kuc-base-mobile-time-1-6-0:lang(zh-TW),\n    kuc-base-mobile-time-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n        Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n        Verdana,sans-serif\n    }\n    kuc-base-mobile-time-1-6-0 {\n        width: 100%;\n        display: inline-block;\n        vertical-align: top;\n    }\n    kuc-base-mobile-time-1-6-0[hidden] {\n        display: none;\n    }\n    .kuc-base-mobile-time-1-6-0__group {\n        padding: 0;\n        margin: 0;\n        height: 31.28px;\n        border: 1px solid #b3b3b3;\n        border-radius: 5.2px;\n        box-sizing: border-box;\n        background-color: #ffffff;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-align-items: center;\n        align-items: center;\n        box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;\n    }\n    .kuc-base-mobile-time-1-6-0__group--required {\n        border-color: #cf4a38;\n    }\n    .kuc-base-mobile-time-1-6-0__group__hours {\n        padding: 5.148px 7.722px;\n    }\n    .kuc-base-mobile-time-1-6-0__group__minutes {\n        padding: 5.148px 7.722px;\n        -webkit-flex-grow: 1;\n        flex-grow: 1;\n    }\n    .kuc-base-mobile-time-1-6-0__group__hours,\n    .kuc-base-mobile-time-1-6-0__group__minutes {\n        font-size: 99%;\n        height: 100%;\n        color: #000000;\n        border: none;\n        border-radius: 5.148px;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background-color: transparent;\n    }\n    .kuc-base-mobile-time-1-6-0__group__colon {\n        color: #000000;\n    }\n    .kuc-base-mobile-time-1-6-0__group__hours:disabled\n        + .kuc-base-mobile-time-1-6-0__group__colon {\n        color: #999999;\n        -webkit-text-fill-color: #999999;\n        opacity: 1;\n    }\n    .kuc-base-mobile-time-1-6-0__group--disabled {\n        color: #999999;\n        -webkit-text-fill-color: #999999;\n        background-color: #d5d7d9;\n        opacity: 1;\n    }\n    .kuc-base-mobile-time-1-6-0__group__hours:disabled,\n    .kuc-base-mobile-time-1-6-0__group__minutes:disabled {\n        color: #999999;\n        -webkit-text-fill-color: #999999;\n        opacity: 1;\n    }\n    .kuc-base-mobile-time-1-6-0__group__hours:focus {\n        outline: none;\n    }\n    .kuc-base-mobile-time-1-6-0__group__minutes:focus {\n        outline: none;\n    }\n'),window.customElements.define("kuc-base-mobile-time-1-6-0",Cr));var Ir=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Sr;(()=>{if(Sr=window.customElements.get("kuc-mobile-time-picker-1-6-0"),!Sr){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue="",this._errorFormat="",this._isSelectError=!1,this._GUID=Po();const t=Da(e);Object.assign(this,t)}shouldUpdate(e){return void 0===this.value||""===this.value||!!Ha(this.value)||(Ga(this,ia),!1)}willUpdate(){void 0!==this.value&&""!==this.value&&(this.value=Va(this.value))}update(e){e.has("value")&&!this._isSelectError&&(void 0===this.value?this._inputValue="":this._inputValue=this.value||"",this._errorFormat=""),super.update(e)}render(){return Qn`
        <div class="kuc-mobile-time-picker-1-6-0__group">
          <label
            class="kuc-mobile-time-picker-1-6-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-6-0
              .guid="${this._GUID}"
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-6-0>
          </label>
          <div class="kuc-base-mobile-time-1-6-0__group__wrapper">
            <kuc-base-mobile-time-1-6-0
              .value="${this._inputValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-6-0>
          </div>
          <kuc-base-mobile-error-1-6-0
            .guid="${this._GUID}"
            .text="${this._errorFormat||this.error}"
            ariaLive="assertive"
          ></kuc-base-mobile-error-1-6-0>
        </div>
      `}updated(){this._isSelectError=!1}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const t={value:e.detail.value,oldValue:this.value};if(this._inputValue=e.detail.value,e.detail.error)return this._isSelectError=!0,this._errorFormat=e.detail.error,this.value=void 0,t.value=void 0,this.error="",void Oo(this,"change",t);this._isSelectError=!1,this._errorFormat="",this.value=e.detail.value,Oo(this,"change",t)}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}Ir([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ir([xo({type:String})],e.prototype,"error",void 0),Ir([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ir([xo({type:String})],e.prototype,"label",void 0),Ir([xo({type:String,attribute:"lang",reflect:!0,converter:Ea})],e.prototype,"language",void 0),Ir([xo({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),Ir([xo({type:Boolean})],e.prototype,"disabled",void 0),Ir([xo({type:Boolean})],e.prototype,"hour12",void 0),Ir([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),Ir([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),Ir([wo()],e.prototype,"_inputValue",void 0),Ir([wo()],e.prototype,"_errorFormat",void 0),window.customElements.define("kuc-mobile-time-picker-1-6-0",e),No('\n    kuc-mobile-time-picker-1-6-0,\n    kuc-mobile-time-picker-1-6-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n        "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n        "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n    }\n    kuc-mobile-time-picker-1-6-0:lang(zh),\n    kuc-mobile-time-picker-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n        Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n        Verdana, sans-serif;\n    }\n    kuc-mobile-time-picker-1-6-0:lang(zh-TW),\n    kuc-mobile-time-picker-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n        Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n        Verdana,sans-serif\n    }\n    kuc-mobile-time-picker-1-6-0 {\n    font-size: 13px;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    }\n    kuc-mobile-time-picker-1-6-0[hidden] {\n    display: none;\n    }\n    .kuc-mobile-time-picker-1-6-0__group__label {\n    display: inline-block;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n    }\n    .kuc-mobile-time-picker-1-6-0__group__label[hidden] {\n    display: none;\n    }\n    .kuc-base-mobile-time-1-6-0__group__wrapper {\n    padding-left: 0.5em;\n    max-width: 10px;\n    }\n'),Sr=e}})();var Er=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Tr;(()=>{if(Tr=window.customElements.get("kuc-mobile-datetime-picker-1-6-0"),!Tr){class e extends Bo{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._previousTimeValue="",this._previousDateValue="",this._dateValue="",this._timeValue="",this._errorFormat="",this._errorText="",this._GUID=Po();const t=Da(e);Object.assign(this,t)}shouldUpdate(e){return void 0===this.value||""===this.value||("string"!=typeof this.value?(Ga(this,ia),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=Aa(this._dateAndTime.date),!(!ja(this._dateAndTime.date,this._dateAndTime.time)||!Oa(this._dateConverted))||(Ga(this,ia),!1)))}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueAndErrorWhenUIChange():(this._errorFormat="",this._updateErrorText(),this._updateValueWhenSetter())}update(e){e.has("value")&&(void 0===this.value&&this._setUndefinedValue(),""===this.value&&this._setEmptyValue()),super.update(e)}_updateValueWhenSetter(){this._errorFormat="",""!==this.value&&void 0!==this.value?(this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()):this._previousTimeValue=""}_setDateTimeValueSeparate(e,t){this._dateValue=t,this._timeValue=this._dateValue&&Oa(t)?Va(e.time.slice(0,5)):this._previousTimeValue}_updateValueAndErrorWhenUIChange(){const e=this._checkDateTimeFormat();this.value=e?this.value:void 0,this._updateErrorText()}_checkDateTimeFormat(){const e=Boolean(this._timeValue)&&!this._dateValue,t=Boolean(this._dateValue)&&!this._timeValue;return!this._errorFormat&&!e&&!t}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI)return;return this._dateValue="",void(this._timeValue="")}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue=""}_getDateTimeValue(e){if(""===e||void 0===e)return{date:"",time:""};const t=e.split("T"),i=t[0],n=t[1];if(e.indexOf("T")===e.length-1||t.length>2)return{date:i,time:""};if(!n)return{date:i,time:"00:00"};const[o,a,s]=n.split(":"),r=`${o}:${a||"00"}`;return s?{date:i,time:`${r}:${s}`}:{date:i,time:r}}render(){return Qn`
        <fieldset
          class="kuc-mobile-datetime-picker-1-6-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-mobile-datetime-picker-1-6-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-6-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-6-0>
          </legend>
          <div class="kuc-mobile-datetime-picker-1-6-0__group__input">
            <kuc-mobile-base-date-1-6-0
              class="kuc-mobile-datetime-picker-1-6-0__group__input--date"
              .disabled="${this.disabled}"
              .value="${this._dateValue}"
              .inputId="${this._GUID}"
              .inputAriaInvalid="${""!==this.error}"
              .required="${this.requiredIcon}"
              .language="${this._getLanguage()}"
              @kuc:mobile-base-date-change="${this._handleDateChange}"
            >
            </kuc-mobile-base-date-1-6-0>
            <kuc-base-mobile-time-1-6-0
              class="kuc-mobile-datetime-picker-1-6-0__group__input--time"
              .value="${this._timeValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-6-0>
          </div>
          <kuc-base-mobile-error-1-6-0
            .guid="${this._GUID}"
            .text="${this._errorText}"
          >
          </kuc-base-mobile-error-1-6-0>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleDateChange(e){if(e.stopPropagation(),e.preventDefault(),e.detail.value===this._dateValue)return;this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):t=e.detail.value,this._updateDateTimeValue(t,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=this._timeValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):this._errorFormat="",t=e.detail.value,this._updateDateTimeValue(t,"time")}_updateDateTimeValue(e,t){const i=this.value;"date"===t?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const n=this._errorFormat?void 0:this._getDateTimeString(),o=this._errorFormat?void 0:n;this.value=o;const a=this._errorFormat?void 0:n;this.value=a,Oo(this,"change",{value:o,oldValue:i,changedPart:t})}_getDateTimeString(){if(""===this._dateValue&&""===this._timeValue)return"";if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return 3===e.length?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}}Er([xo({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Er([xo({type:String})],e.prototype,"error",void 0),Er([xo({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Er([xo({type:String})],e.prototype,"label",void 0),Er([xo({type:String,attribute:"lang",reflect:!0,converter:Ea})],e.prototype,"language",void 0),Er([xo({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),Er([xo({type:Boolean})],e.prototype,"disabled",void 0),Er([xo({type:Boolean})],e.prototype,"hour12",void 0),Er([xo({type:Boolean})],e.prototype,"requiredIcon",void 0),Er([xo({type:Boolean,attribute:"hidden",reflect:!0,converter:Sa})],e.prototype,"visible",void 0),Er([wo()],e.prototype,"_dateValue",void 0),Er([wo()],e.prototype,"_timeValue",void 0),Er([wo()],e.prototype,"_errorFormat",void 0),Er([wo()],e.prototype,"_errorText",void 0),window.customElements.define("kuc-mobile-datetime-picker-1-6-0",e),No('\nkuc-mobile-datetime-picker-1-6-0,\nkuc-mobile-datetime-picker-1-6-0 * {\ncolor: #333333;\nfont-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-datetime-picker-1-6-0:lang(zh),\nkuc-mobile-datetime-picker-1-6-0:lang(zh) * {\nfont-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-datetime-picker-1-6-0:lang(zh-TW),\nkuc-mobile-datetime-picker-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-datetime-picker-1-6-0 {\nfont-size: 13px;\ncolor: #333333;\ndisplay: inline-table;\nvertical-align: top;\nwidth: 100%;\n}\nkuc-mobile-datetime-picker-1-6-0[hidden] {\ndisplay: none;\n}\n.kuc-mobile-datetime-picker-1-6-0__group {\nborder: 0;\npadding: 0;\n}\n.kuc-mobile-datetime-picker-1-6-0__group__label {\ndisplay: inline-block;\nfont-weight: bold;\nline-height: 1.5;\npadding: 0px;\nwhite-space: nowrap;\nmargin: 0 0 4px 0;\n}\n.kuc-mobile-datetime-picker-1-6-0__group__label[hidden] {\ndisplay: none;\n}\n.kuc-mobile-datetime-picker-1-6-0__group__input {\ndisplay: flex;\nalign-items: center;\nmargin-right: 0.5em;\nmargin-left: 0.5em;\n}\n.kuc-mobile-datetime-picker-1-6-0__group__input--date {\nwidth: 130px;\nmargin-right: 10px;\n}\n.kuc-mobile-datetime-picker-1-6-0__group__input--time {\nmax-width: 10px;\n}\n'),Tr=e}})();var Ar={d:(e,t)=>{for(var i in t)Ar.o(t,i)&&!Ar.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};Ar.d({},{i:()=>Vr});const Vr="1.6.0";var Dr={d:(e,t)=>{for(var i in t)Dr.o(t,i)&&!Dr.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};Dr.d({},{t:()=>Lr});const Lr=void 0;jQuery.noConflict(),(async(e,i)=>{const o=(e=>{let t=kintone.plugin.app.getConfig(e);for(let e in t){const i=t[e];try{t[e]=fn(i)}catch{continue}}return t})(kintone.$PLUGIN_ID);o.appId||(o.appId=kintone.app.getId()),console.log(o);const a=e("#config-submit"),s=e(".js-cancel-button");if(!o.fields){const e=await(async e=>{const t=await kintone.api(kintone.api.url("/k/v1/app/form/fields",!0),"GET",{app:e}).then((e=>{const t=e.properties;for(let e in t)n.includes(e)&&delete t[e];return t}));return await t})(o.appId);o.fields=e}const r=e("#configs"),l=((e,t=!1)=>{const i=[];for(let o in e){const a=e[o];n.includes(a.type)||i.push({label:a.label,value:t?a.label:a.code})}return i.sort(((e,t)=>{if(!e.label||!t.label)return!0;const i=e.label.split("").map((e=>e.codePointAt(0)));let n,o;const a=t.label.split("").map((e=>e.codePointAt(0)));return i.forEach(((e,t)=>{!n&&a[t]&&e!=a[t]&&(o=e-a[t],n=!0)})),o})),i.unshift({label:"-----",value:"-----"}),i})(o.fields,!0);if(o.settings){for(let t of o.settings)r.append(e("<tr>").append(e("<th>").append(e("<td>").append(new rs({items:l,className:"middle-dropdown",value:t.field})).append(new vs({className:"tips",value:t.tips}))).append(e("<td>").addClass("kintoneplugin-table-td-operation").append(e('<button type="button" title="Add row">').addClass("kintoneplugin-button-add-row-image").attr("id","add-row")).append(e('<button type="button" title="Delete this row">').addClass("kintoneplugin-button-remove-row-image").attr("id","delete-row")))));r.append(e("<tr>").append(e("<th>").append(e("<td>").append(new rs({items:l,className:"middle-dropdown",selectedIndex:0})).append(new vs({className:"tips"}))).append(e("<td>").addClass("kintoneplugin-table-td-operation").append(e('<button type="button" title="Add row">').addClass("kintoneplugin-button-add-row-image").attr("id","add-row")).append(e('<button type="button" title="Delete this row">').addClass("kintoneplugin-button-remove-row-image").attr("id","delete-row")))))}else r.append(e("<tr>").append(e("<th>").append(e("<td>").append(new rs({items:l,className:"middle-dropdown",selectedIndex:0})).append(new vs({className:"tips"}))).append(e("<td>").addClass("kintoneplugin-table-td-operation").append(e('<button type="button" title="Add row">').addClass("kintoneplugin-button-add-row-image").attr("id","add-row")).append(e('<button type="button" title="Delete this row">').addClass("kintoneplugin-button-remove-row-image").attr("id","delete-row")))));a.on("click",(i=>{i.preventDefault();const n=e(".middle-dropdown"),a=e(".tips"),s=[];n.each(((t,i)=>{const n=e(i).val(),o=e(a[t]).val();n&&o&&s.push({field:n,tips:o})})),o.settings=s,kintone.plugin.app.setConfig((e=>{for(let t in e){const i=e[t];try{e[t]=JSON.stringify(i)}catch{e[t]=String(i)}}return e})(o),(async()=>{await t().fire({html:"プラグイン設定が保存されました。<br>アプリの更新も忘れずに！"}),window.location.href="../../flow?app="+kintone.app.getId()}))})),s.on("click",(()=>{window.location.href="../../"+kintone.app.getId()+"/plugin/"})),e(document).on("click","#add-row",(t=>{r.append(e("<tr>").append(e("<th>").append(e("<td>").append(new rs({items:l,className:"middle-dropdown",selectedIndex:0})).append(new vs({className:"tips"}))).append(e("<td>").addClass("kintoneplugin-table-td-operation").append(e('<button type="button" title="Add row">').addClass("kintoneplugin-button-add-row-image").attr("id","add-row")).append(e('<button type="button" title="Delete this row">').addClass("kintoneplugin-button-remove-row-image").attr("id","delete-row")))))})),e(document).on("click","#delete-row",(t=>{t.preventDefault(),e(t.target).parents("tr")[0].remove()}))})(jQuery)})()})();