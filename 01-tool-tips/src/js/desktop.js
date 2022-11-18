/*! For license information please see desktop.js.LICENSE.txt */
(()=>{"use strict";const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class o{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=n.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(i,e))}return e}toString(){return this.cssText}}const a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,i))(t)})(e):e;var s;const r=window,l=r.trustedTypes,d=l?l.emptyScript:"",u=r.reactiveElementPolyfillSupport,c={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},h=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:h};class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var i;const n=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{t?i.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=p){var n;const o=this.constructor._$Ep(e,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:c).toAttribute(t,i.type);this._$El=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,o=n._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=n.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:c;this._$El=o,this[o]=a.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var b;_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(s=r.reactiveElementVersions)&&void 0!==s?s:r.reactiveElementVersions=[]).push("1.4.1");const g=window,m=g.trustedTypes,f=m?m.createPolicy("lit-html",{createHTML:e=>e}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,k="?"+v,y=`<${k}>`,x=document,w=(e="")=>x.createComment(e),$=e=>null===e||"object"!=typeof e&&"function"!=typeof e,I=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,E=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),A=/'/g,V=/"/g,D=/^(?:script|style|textarea|title)$/i,H=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),L=H(1),M=H(2),B=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),O=new WeakMap,z=x.createTreeWalker(x,129,null,!1),U=(e,t)=>{const i=e.length-1,n=[];let o,a=2===t?"<svg>":"",s=S;for(let t=0;t<i;t++){const i=e[t];let r,l,d=-1,u=0;for(;u<i.length&&(s.lastIndex=u,l=s.exec(i),null!==l);)u=s.lastIndex,s===S?"!--"===l[1]?s=C:void 0!==l[1]?s=E:void 0!==l[2]?(D.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=T):void 0!==l[3]&&(s=T):s===T?">"===l[0]?(s=null!=o?o:S,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?T:'"'===l[3]?V:A):s===V||s===A?s=T:s===C||s===E?s=S:(s=T,o=void 0);const c=s===T&&e[t+1].startsWith("/>")?" ":"";a+=s===S?i+y:d>=0?(n.push(r),i.slice(0,d)+"$lit$"+i.slice(d)+v+c):i+v+(-2===d?(n.push(void 0),t):c)}const r=a+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(r):r,n]};class P{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,a=0;const s=e.length-1,r=this.parts,[l,d]=U(e,t);if(this.el=P.createElement(l,i),z.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=z.nextNode())&&r.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(v)){const i=d[a++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+"$lit$").split(v),t=/([.?@])?(.*)/.exec(i);r.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?W:"?"===t[1]?q:"@"===t[1]?Y:F})}else r.push({type:6,index:o})}for(const t of e)n.removeAttribute(t)}if(D.test(n.tagName)){const e=n.textContent.split(v),t=e.length-1;if(t>0){n.textContent=m?m.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],w()),z.nextNode(),r.push({type:2,index:++o});n.append(e[t],w())}}}else if(8===n.nodeType)if(n.data===k)r.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(v,e+1));)r.push({type:7,index:o}),e+=v.length-1}o++}}static createElement(e,t){const i=x.createElement("template");return i.innerHTML=e,i}}function R(e,t,i=e,n){var o,a,s,r;if(t===B)return t;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const d=$(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,n)),void 0!==n?(null!==(s=(r=i)._$Co)&&void 0!==s?s:r._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=R(e,l._$AS(e,t.values),l,n)),t}class j{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:n}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:x).importNode(i,!0);z.currentNode=o;let a=z.nextNode(),s=0,r=0,l=n[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new G(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new J(a,this,e)),this.u.push(t),l=n[++r]}s!==(null==l?void 0:l.index)&&(a=z.nextNode(),s++)}return o}p(e){let t=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class G{constructor(e,t,i,n){var o;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cm=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),$(e)?e===N||null==e||""===e?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==B&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>I(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==N&&$(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=P.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(i);else{const e=new j(o,this),t=e.v(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=O.get(e.strings);return void 0===t&&O.set(e.strings,t=new P(e)),t}k(e){I(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const o of e)n===t.length?t.push(i=new G(this.O(w()),this.O(w()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class F{constructor(e,t,i,n,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const o=this.strings;let a=!1;if(void 0===o)e=R(this,e,t,0),a=!$(e)||e!==this._$AH&&e!==B,a&&(this._$AH=e);else{const n=e;let s,r;for(e=o[0],s=0;s<o.length-1;s++)r=R(this,n[i+s],t,s),r===B&&(r=this._$AH[s]),a||(a=!$(r)||r!==this._$AH[s]),r===N?e=N:e!==N&&(e+=(null!=r?r:"")+o[s+1]),this._$AH[s]=r}a&&!n&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class W extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}}const K=m?m.emptyScript:"";class q extends F{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Y extends F{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=R(this,e,t,0))&&void 0!==i?i:N)===B)return;const n=this._$AH,o=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==N&&(n===N||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class J{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const Z=g.litHtmlPolyfillSupport;var Q,X;null==Z||Z(P,G),(null!==(b=g.litHtmlVersions)&&void 0!==b?b:g.litHtmlVersions=[]).push("2.4.0");class ee extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var n,o;const a=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let s=a._$litPart$;if(void 0===s){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;a._$litPart$=s=new G(t.insertBefore(w(),e),e,void 0,null!=i?i:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return B}}ee.finalized=!0,ee._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:ee});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:ee}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const ie=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function ne(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ie(e,t)}function oe(e){return ne({...e,state:!0})}const ae=({finisher:e,descriptor:t})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,a=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(i.key)}:{...i,key:n};return null!=e&&(a.finisher=function(t){e(t,n)}),a}{const o=i.constructor;void 0!==t&&Object.defineProperty(i,n,t(n)),null==e||e(o,n)}};function se(e,t){return ae({descriptor:i=>{const n={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[t]&&(this[t]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}function re(e){return ae({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}var le;null===(le=window.HTMLSlotElement)||void 0===le||le.prototype.assignedElements;var de,ue=new Uint8Array(16);function ce(){if(!de&&!(de="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return de(ue)}const he=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,pe=function(e){return"string"==typeof e&&he.test(e)};for(var _e=[],be=0;be<256;++be)_e.push((be+256).toString(16).substr(1));const ge=function(e,t,i){var n=(e=e||{}).random||(e.rng||ce)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){i=i||0;for(var o=0;o<16;++o)t[i+o]=n[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(_e[e[t+0]]+_e[e[t+1]]+_e[e[t+2]]+_e[e[t+3]]+"-"+_e[e[t+4]]+_e[e[t+5]]+"-"+_e[e[t+6]]+_e[e[t+7]]+"-"+_e[e[t+8]]+_e[e[t+9]]+"-"+_e[e[t+10]]+_e[e[t+11]]+_e[e[t+12]]+_e[e[t+13]]+_e[e[t+14]]+_e[e[t+15]]).toLowerCase();if(!pe(i))throw TypeError("Stringified UUID is invalid");return i}(n)};class me extends ee{createRenderRoot(){return this}}const fe=(e,t,i)=>{const n=new CustomEvent(t,{detail:i,bubbles:!0,composed:!0});return e.dispatchEvent(n)},ve=e=>{const t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)},ke=()=>ge();class ye{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class xe extends ye{constructor(e){if(super(e),this.it=N,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||null==e)return this._t=void 0,this.it=e;if(e===B)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}xe.directiveName="unsafeHTML",xe.resultType=1;const we=(st=xe,(...e)=>({_$litDirective$:st,values:e})),$e={MONTH_SELECT:["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],YEAR_SELECT_POSTFIX:"",WEEK_DAYS:[{text:"SUN",abbr:"Sunday"},{text:"MON",abbr:"Monday"},{text:"TUE",abbr:"Tuesday"},{text:"WED",abbr:"Wednesday"},{text:"THU",abbr:"Thursday"},{text:"FRI",abbr:"Friday"},{text:"SAT",abbr:"Saturday"}],INVALID_FORMAT:"Format is not valid.",INVALID_TIME_FORMAT:"Format is not valid.",CALENDAR_FOOTER_TEXT:{none:"None",today:"Today",close:"Close"},TIME_IS_OUT_OF_VALID_RANGE:"Time is out of valid range."},Ie={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"日",abbr:"日"},{text:"月",abbr:"月"},{text:"火",abbr:"火"},{text:"水",abbr:"水"},{text:"木",abbr:"木"},{text:"金",abbr:"金"},{text:"土",abbr:"土"}],INVALID_FORMAT:"日付の形式が不正です。",INVALID_TIME_FORMAT:"時刻の形式が不正です。",CALENDAR_FOOTER_TEXT:{none:"選択を解除",today:"今日",close:"閉じる"},TIME_IS_OUT_OF_VALID_RANGE:"時刻が有効な範囲外です。"},Se={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"周日",abbr:"周日"},{text:"周一",abbr:"周一"},{text:"周二",abbr:"周二"},{text:"周三",abbr:"周三"},{text:"周四",abbr:"周四"},{text:"周五",abbr:"周五"},{text:"周六",abbr:"周六"}],INVALID_FORMAT:"日期格式不正确。",INVALID_TIME_FORMAT:"时间格式不正确。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天",close:"关闭"},TIME_IS_OUT_OF_VALID_RANGE:"时间超出有效范围。"},Ce={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"周日",abbr:"周日"},{text:"周一",abbr:"周一"},{text:"周二",abbr:"周二"},{text:"周三",abbr:"周三"},{text:"周四",abbr:"周四"},{text:"周五",abbr:"周五"},{text:"周六",abbr:"周六"}],INVALID_FORMAT:"日期格式不正確。",INVALID_TIME_FORMAT:"時間格式不正確。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天",close:"關閉"},TIME_IS_OUT_OF_VALID_RANGE:"時間超出有效範圍。"},Ee=24,Te=12,Ae="AM",Ve="PM",De='"max" must be greater than or equal to "min".',He="Time is out of valid range.",Le="'timeStep' property is not number.",Me="00:00",Be="23:59",Ne="'value' property format is not valid.",Oe="'max' property format is not valid.",ze="'min' property format is not valid.",Ue="'timeStep' property format is not valid.",Pe=(e,t)=>{const i=it(e,t);let n=new Date(i.start),o=[];const a=[];for(;n<=i.end;)o.push(Ye(n)),7===o.length&&(a.push(o),o=[]),n.setDate(n.getDate()+1),n=new Date(n);return a},Re=(e,t)=>{let i,n;i=Math.floor(e/60),n=e%60;const o=i%Ee<Te?Ae:Ve;return i=t?i%Te:i%Ee,0===i&&t&&(i=Te),i<10&&(i="0"+i),n<10&&(n="0"+n),{label:i+":"+n+(t?" "+o:""),value:i+":"+n+(t?" "+o:"")}},je=e=>{const t=e.split(":");let i=parseInt(t[0],10),n=parseInt(t[1],10);return isNaN(i)||isNaN(n)?0:(i<0?i=0:i>=Ee&&(i=23),n<0?n=0:n>=60&&(n=59),60*i+n)},Ge=(e,t)=>{const i=je(e),n=je(t);return i>n?1:i===n?0:-1},Fe=e=>{let t=e%Te;return t=0===t?Te:t,t},We=e=>e>=Te?Ve:Ae,Ke=e=>{const[t,i]=e.split(" "),[n,o]=t.split(":");return i?`${qe(n,i)}:${o}`:e},qe=(e,t)=>{const i=parseInt(e,10);return tt(t===Ve?i===Te?12:i+12:i===Te?0:i)},Ye=e=>{const t=new Date(e),i=t.getFullYear(),n=tt(t.getMonth()+1),o=tt(t.getDate());return{text:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,attr:`${i}-${n}-${o}`}},Je=(e,t)=>{if(t&&!Qe(t)){const i=t.split("-");if(3!==i.length)return t;const n=i[0],o=i[1],a=i[2];return"en"===e?`${o}/${a}/${n}`:`${n}-${o}-${a}`}return t},Ze=(e,t)=>{if(Qe(t))return t;const i="en"===e,n=i?"/":"-",o=t.split(n);return`${i?o[2]:o[0]}-${i?o[0]:o[1]}-${i?o[1]:o[2]}`},Qe=e=>null==e||0===e.length||!/[^(^\s*)|(\s*$)]/.test(e),Xe=(e="ja")=>{const t=new Date,i=t.getFullYear(),n=tt(t.getMonth()+1),o=tt(t.getDate());return"ja"===e||"zh"===e?i+"-"+n+"-"+o:n+"/"+o+"/"+i},et=(e,t)=>{if(t&&!Qe(t)){const i="en"===e,n=i?"/":"-";if(new Date(t).getDate()!==parseInt(t.split(n)[i?1:2],10))return!1;const o=/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;if("en"===e)return null!==t.match(o);const a=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;return null!==t.match(a)}return!1},tt=(e,t=2)=>{const i=`0000000000${e}`;return i.substr(i.length-t)},it=(e,t)=>{const i=new Date(e,t);i.setDate(1);const n=new Date(i);n.setDate(n.getDate()-n.getDay());const o=new Date(e,t);o.setMonth(o.getMonth()+1,0);const a=new Date(o);a.setDate(a.getDate()+(6-a.getDay()));const s=(a.getTime()-n.getTime())/864e5;return a.setDate(a.getDate()+(42-s)),{start:n,end:a}},nt=e=>{switch(e){case"en":default:return $e;case"zh":return Se;case"ja":return Ie;case"zh-TW":return Ce}},ot=e=>{const t=[];t.push({value:`${e} 12`,label:`${e} 12`});for(let i=1;i<=11;i++)t.push({value:`${e} ${tt(i)}`,label:`${e} ${tt(i)}`});return t},at=()=>M`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `;var st;function rt(e,t){const i=e.querySelector(".kuc-base-datetime-listbox__listbox"),n=lt(e);if(!e.parentElement||!i||!n)return;const{inputToBottom:o,inputToTop:a}=n,s="KUC-BASE-DATETIME-HEADER-MONTH"===e.tagName?360:300,r=e.parentElement.getBoundingClientRect().height;return i.style.maxHeight=s+"px",e.parentElement.style.position="relative",o>=s?(i.style.height=s+"px","bottom"===t?void(i.style.top=r+"px"):void(i.style.bottom=r+"px")):"bottom"===t?(i.style.top=r+"px",void(i.style.height=o-18+"px")):(i.style.height=a-18+"px",i.style.top="auto",void(i.style.bottom=e.parentElement.getBoundingClientRect().height+"px"))}const lt=e=>e.parentElement?{inputToBottom:window.innerHeight-e.parentElement.getBoundingClientRect().bottom,inputToTop:e.parentElement.getBoundingClientRect().top,inputToRight:window.innerWidth-e.parentElement.getBoundingClientRect().left,inputToLeft:e.parentElement.getBoundingClientRect().left+100}:{inputToBottom:0,inputToTop:0,inputToRight:0,inputToLeft:0},dt={fromAttribute:e=>null===e,toAttribute:e=>e?null:""},ut={fromAttribute:e=>!e||-1===["en","ja","zh","zh-TW"].indexOf(e),toAttribute:e=>{const t=["en","ja","zh","zh-TW"];return-1!==t.indexOf(e)?e:-1!==t.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}},ct=e=>e instanceof HTMLElement?e:we(e),ht=e=>{if(void 0===e||""===e)return"";let t=[];return e.indexOf("-")>0&&(t=e.split("-")),t.length<2?`${e}-01-01`:2===t.length?`${tt(t[0],4)}-${tt(t[1])}-01`:t.length>2?`${tt(t[0],4)}-${tt(t[1])}-${tt(t[2])}`:""},pt=e=>{if(5===e.length||""===e)return e;const t=e.indexOf(":"),i=e.substr(0,t),n=e.substr(t+1,5);return`${tt(i)}:${tt(n)}`};function _t(e){if(!e||"object"!=typeof e)return{};const t={...e};for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&void 0===t[e]&&delete t[e];return t}function bt(e){return!(""!==e&&void 0!==e&&!/(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g.test(e))}function gt(e){return!(""!==e&&!/^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/.test(e))}function mt(e){return"number"==typeof e}function ft(e,t,i){const n=Math.round(e),o=je(t),a=je(i);return!isNaN(n)&&n>0&&n<=o-a}function vt(e){const[t,i,n]=e.split("-"),o=new Date(e),a=o.getFullYear(),s=o.getMonth(),r=o.getDate();return a===Number(t)&&s===Number(i)-1&&r===Number(n)}function kt(e){return!!Array.isArray(e)}function yt(e){return!!Array.isArray(e)}function xt(e){return"string"==typeof e}function wt(e){return!!Array.isArray(e)}function $t(e){return"number"==typeof e}function It(e,t){return!(!/(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g.test(e)||!/(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/.test(t))}async function St(e,t){throw await e.updateComplete,new Error(t)}var Ct=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Et;(()=>{if(Et=window.customElements.get("kuc-button-1-6-0"),!Et){class e extends me{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.disabled=!1,this.visible=!0;const t=_t(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),fe(this,"click")}_getButtonColorType(){return"normal"===this.type||"submit"===this.type||"alert"===this.type?this.type:"normal"}render(){return L`
        <button
          type="button"
          class="kuc-button-1-6-0__button kuc-button-1-6-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.text}
        </button>
      `}}Ct([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ct([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ct([ne({type:String})],e.prototype,"text",void 0),Ct([ne({type:String})],e.prototype,"type",void 0),Ct([ne({type:Boolean})],e.prototype,"disabled",void 0),Ct([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),window.customElements.define("kuc-button-1-6-0",e),ve('\n  kuc-button-1-6-0,\n  kuc-button-1-6-0 *,\n  kuc-button-1-6-0:lang(en),\n  kuc-button-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial, "Hiragino Kaku Gothic ProN",\n      Meiryo, sans-serif;\n  }\n  kuc-button-1-6-0:lang(ja),\n  kuc-button-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-button-1-6-0:lang(zh),\n  kuc-button-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,\n      "Heiti SC", sans-serif;\n  }\n  kuc-button-1-6-0:lang(zh-TW),\n  kuc-button-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-button-1-6-0 {\n    display: inline-block;\n    vertical-align: top;\n  }\n  kuc-button-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-button-1-6-0__button {\n    font-size: var(--kuc-button-font-size, 16px);\n    width: var(--kuc-button-width, "auto");\n    height: var(--kuc-button-height, 48px);\n    min-width: 163px;\n    padding: 0px 16px;\n    user-select: none;\n  }\n  .kuc-button-1-6-0__button--normal {\n    background-color: var(--kuc-button-background-color, #f7f9fa);\n    color: var(--kuc-button-text-color, #3498db);\n    border: 1px solid #e3e7e8;\n    box-shadow: 1px 1px 1px #ffffff inset;\n  }\n  .kuc-button-1-6-0__button--normal:hover,\n  .kuc-button-1-6-0__button--normal:focus-visible,\n  .kuc-button-1-6-0__button--normal:active {\n    box-shadow: none;\n    cursor: pointer;\n  }\n  .kuc-button-1-6-0__button--normal:hover {\n    background-color: var(--kuc-button-background-hover, #c8d6dd);\n  }\n  .kuc-button-1-6-0__button--normal:focus-visible {\n    background-color: var(--kuc-button-background-focus, #c8d6dd);\n  }\n  .kuc-button-1-6-0__button--normal:active {\n    background-color: var(--kuc-button-background-active, #c8d6dd);\n  }\n  .kuc-button-1-6-0__button--submit {\n    background-color: var(--kuc-button-background-color, #3498db);\n    color: var(--kuc-button-text-color, #ffffff);\n    border: 1px solid #e3e7e8;\n  }\n  .kuc-button-1-6-0__button--submit:hover,\n  .kuc-button-1-6-0__button--submit:focus-visible,\n  .kuc-button-1-6-0__button--submit:active {\n    cursor: pointer;\n  }\n  .kuc-button-1-6-0__button--submit:hover {\n    background-color: var(--kuc-button-background-hover, #1d6fa5);\n  }\n  .kuc-button-1-6-0__button--submit:focus-visible {\n    background-color: var(--kuc-button-background-focus, #1d6fa5);\n  }\n  .kuc-button-1-6-0__button--submit:active {\n    background-color: var(--kuc-button-background-active, #1d6fa5);\n  }\n  .kuc-button-1-6-0__button--alert {\n    background-color: var(--kuc-button-background-color, #e74c3c);\n    color: var(--kuc-button-text-color, #ffffff);\n    border: 0 none;\n    box-shadow: 1px 1px 1px #ffffff inset;\n  }\n  .kuc-button-1-6-0__button--alert:hover,\n  .kuc-button-1-6-0__button--alert:focus-visible,\n  .kuc-button-1-6-0__button--alert:active {\n    box-shadow: none;\n    cursor: pointer;\n  }\n  .kuc-button-1-6-0__button--alert:hover {\n    background-color: var(--kuc-button-background-hover, #bf2718);\n  }\n  .kuc-button-1-6-0__button--alert:focus-visible {\n    background-color: var(--kuc-button-background-focus, #bf2718);\n  }\n  .kuc-button-1-6-0__button--alert:active {\n    background-color: var(--kuc-button-background-active, #bf2718);\n  }\n  .kuc-button-1-6-0__button:disabled {\n    background-color: var(--kuc-button-background-color, #d4d7d7);\n    border: 1px solid #e3e7e8;\n    box-shadow: none;\n    color: var(--kuc-button-text-color, #888888);\n    cursor: default;\n  }\n  .kuc-button-1-6-0__button--normal:focus-visible,\n  .kuc-button-1-6-0__button--submit:focus-visible,\n  .kuc-button-1-6-0__button--alert:focus-visible {\n    outline: 1px solid #3498db;\n  }\n'),Et=e}})();const Tt=Et,At="'items' property is not array.",Vt="'value' property is not array.",Dt="'value' property is not string.",Ht="'selectedIndex' property is not array.",Lt="'selectedIndex' property is not number.";var Mt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Bt extends me{constructor(){super(...arguments),this.ariaLive="",this.guid="",this.text=""}render(){return L`
      ${this.ariaLive&&""!==this.ariaLive?L`
            <div
              class="kuc-base-error-1-6-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:L`
            <div
              class="kuc-base-error-1-6-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}}Mt([ne({type:String})],Bt.prototype,"ariaLive",void 0),Mt([ne({type:String})],Bt.prototype,"guid",void 0),Mt([ne({type:String})],Bt.prototype,"text",void 0),window.customElements.get("kuc-base-error-1-6-0")||(ve('\n  kuc-base-error-1-6-0,\n  kuc-base-error-1-6-0 *,\n  kuc-base-error-1-6-0:lang(en),\n  kuc-base-error-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-base-error-1-6-0:lang(ja),\n  kuc-base-error-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-base-error-1-6-0:lang(zh),\n  kuc-base-error-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-base-error-1-6-0:lang(zh-TW),\n  kuc-base-error-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-base-error-1-6-0 {\n    width: 100%;\n    font-size: 14px;\n    display: inline-table;\n    vertical-align: top;\n  }\n  kuc-base-error-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-base-error-1-6-0__error {\n    line-height: 1.5;\n    padding: 4px 18px;\n    box-sizing: border-box;\n    background-color: #e74c3c;\n    color: #ffffff;\n    margin: 8px 0px;\n    word-break: break-all;\n    white-space: normal;\n  }\n  .kuc-base-error-1-6-0__error[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-error-1-6-0",Bt));var Nt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Ot extends me{constructor(){super(...arguments),this.requiredIcon=!1,this.guid="",this.text=""}render(){return L`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label-1-6-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&""!==this.guid?L`
          <span class="kuc-base-label-1-6-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:L` <span class="kuc-base-label-1-6-0__text">${this.text}</span> `}}Nt([ne({type:Boolean})],Ot.prototype,"requiredIcon",void 0),Nt([ne({type:String})],Ot.prototype,"guid",void 0),Nt([ne({type:String})],Ot.prototype,"text",void 0),window.customElements.get("kuc-base-label-1-6-0")||(ve('\n  kuc-base-label-1-6-0,\n  kuc-base-label-1-6-0 *,\n  kuc-base-label-1-6-0:lang(en),\n  kuc-base-label-1-6-0:lang(en) * {\n      font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-base-label-1-6-0:lang(ja),\n  kuc-base-label-1-6-0:lang(ja) * {\n      font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-base-label-1-6-0:lang(zh),\n  kuc-base-label-1-6-0:lang(zh) * {\n      font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-base-label-1-6-0:lang(zh-TW),\n  kuc-base-label-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-base-label-1-6-0 {\n      font-size: 14px;\n      color: #333333;\n      display: inline-table;\n      vertical-align: top;\n  }\n  kuc-base-label-1-6-0[hidden] {\n      display: none;\n  }\n  .kuc-base-label-1-6-0__required-icon {\n      font-size: 20px;\n      vertical-align: -3px;\n      color: #e74c3c;\n      margin-left: 4px;\n      line-height: 1;\n  }\n  .kuc-base-label-1-6-0__required-icon[hidden] {\n      display: none;\n  }\n'),window.customElements.define("kuc-base-label-1-6-0",Ot));var zt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ut;(()=>{if(Ut=window.customElements.get("kuc-checkbox-1-6-0"),!Ut){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=ke();const t=_t(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!wt(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}shouldUpdate(e){return e.has("items")&&!kt(this.items)?(St(this,At),!1):e.has("value")&&!yt(this.value)?(St(this,Vt),!1):!(e.has("selectedIndex")&&!wt(this.selectedIndex)&&(St(this,Ht),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.dataset.index||"0",n=t.value,o=this.value?[...this.value]:this.value,a=this._getNewValueMapping(n,i),s=this.items.map((e=>e.value)),r=Object.values(a).filter((e=>s.indexOf(e)>-1));if(r===o)return;const l=Object.keys(a).map((e=>parseInt(e,10)));this.value=r,this.selectedIndex=l,fe(this,"change",{oldValue:o,value:r})}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getCheckboxIconSvgTemplate(e,t){return M`
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
      ${t?M`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?"#d8d8d8":"#3498db"}"/>`:""}
    </svg>
  `}_getSVGStrokeValue(e,t){return e?"#d8d8d8":t?"#3498db":"#d8d8d8"}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return L`
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
      `}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return L`
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
      `}updated(){this._inputEls.forEach((e=>{e.checked=this.value.indexOf(e.value)>-1}))}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}}zt([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),zt([ne({type:String})],e.prototype,"error",void 0),zt([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),zt([ne({type:String})],e.prototype,"itemLayout",void 0),zt([ne({type:String})],e.prototype,"label",void 0),zt([ne({type:Boolean})],e.prototype,"borderVisible",void 0),zt([ne({type:Boolean})],e.prototype,"disabled",void 0),zt([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),zt([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),zt([ne({type:Array})],e.prototype,"items",void 0),zt([ne({type:Array})],e.prototype,"selectedIndex",void 0),zt([ne({type:Array})],e.prototype,"value",void 0),zt([re(".kuc-checkbox-1-6-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),zt([oe()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-checkbox-1-6-0",e),ve('\n  kuc-checkbox-1-6-0,\n  kuc-checkbox-1-6-0 *,\n  kuc-checkbox-1-6-0:lang(en),\n  kuc-checkbox-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-checkbox-1-6-0:lang(ja),\n  kuc-checkbox-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-checkbox-1-6-0:lang(zh),\n  kuc-checkbox-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-checkbox-1-6-0:lang(zh-TW),\n  kuc-checkbox-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-checkbox-1-6-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    vertical-align: top;\n    width: 239px;\n    min-width: 239px;\n   line-height: 1.5;\n  }\n  kuc-checkbox-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-checkbox-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu {\n    white-space: nowrap;\n  }\n  .kuc-checkbox-1-6-0__group__label {\n    display: inline-block;\n    padding: 4px 0 8px 0;\n    white-space: nowrap;\n  }\n  .kuc-checkbox-1-6-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu[borderVisible] {\n    border-color: #e3e7e8;\n    border-width: 1px;\n    border-style: solid;\n    padding: 4px 0 0 4px;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item {\n    margin-bottom: 4px;\n    margin-right: 16px;\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    display: inline-block;\n    height: 24px;\n    line-height: 24px;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item[itemLayout="vertical"] {\n    display: block;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item[focused] {\n    border: 1px solid #3498db;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item__input:hover\n    + .kuc-checkbox-1-6-0__group__select-menu__item__label {\n    color: #666666;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    left: -30px;\n    box-sizing: border-box;\n    margin-top: -11px;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item__input[disabled]\n    + .kuc-checkbox-1-6-0__group__select-menu__item__label {\n    color: #888888;\n    cursor: not-allowed;\n  }\n  .kuc-checkbox-1-6-0__group__select-menu__item__label {\n    cursor: pointer;\n    position: relative;\n    margin-left: 32px;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: nowrap;\n  }'),Ut=e}})();const Pt=e=>{const t=(e=>{const t=document.createElement("div");return t.style.cssText=`\n  height: 0px;\n  overflow: hidden;\n  display: inline-block;\n  font-size: 14px;\n  font-family: ${window.getComputedStyle(e).fontFamily};\n  `,t})(e),i=e.cloneNode(!0);if(i.hasAttribute("hidden"))return 0;t.appendChild(i),document.body.appendChild(t);const n=t.getBoundingClientRect().width;return document.body.removeChild(t),n};var Rt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let jt;(()=>{if(jt=window.customElements.get("kuc-dropdown-1-6-0"),!jt){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._GUID=ke();const t=_t(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}_getSelectedLabel(){const e=this.items.filter(((e,t)=>this._isCheckedItem(e,t)));return 0===e.length?"":void 0===e[0].label?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return M`
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
    `}shouldUpdate(e){return e.has("items")&&!kt(this.items)?(St(this,At),!1):e.has("value")&&!xt(this.value)?(St(this,Dt),!1):!(e.has("selectedIndex")&&!$t(this.selectedIndex)&&(St(this,Lt),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}render(){return L`
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
      `}firstUpdated(){window.addEventListener("resize",(()=>{this._actionResizeScrollWindow()})),window.addEventListener("scroll",(()=>{this._actionResizeScrollWindow()}))}async updated(){await this.updateComplete,this._updateContainerWidth(),this._selectorVisible?(this._setMenuPosition(),this._scrollToView(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument,!0)}),1)):setTimeout((()=>{document.removeEventListener("click",this._handleClickDocument,!0)}),1)}_handleMouseDownDropdownItem(e){const t=e.target,i=t.getAttribute("value"),n=t.dataset.index||"0";this._actionUpdateValue(i,n)}_handleMouseOverDropdownItem(e){const t=e.target;this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),this._actionHideMenu()}_handleKeyDownDropdownToggle(e){switch(e.key){case"Up":case"ArrowUp":if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case"Tab":this._selectorVisible&&this._actionHideMenu();break;case"Down":case"ArrowDown":if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case"Enter":{if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}const t=this._highlightItemEl;if(null===t)break;const i=t.getAttribute("value"),n=t.dataset.index||"0";this._actionUpdateValue(i,n),this._actionHideMenu();break}case"Escape":e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break;case"Home":this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case"End":this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_actionShowMenu(){this._buttonEl.focus(),this._selectorVisible=!0,null!==this._selectedItemEl&&this._setHighlightAndActiveDescendantMenu(this._selectedItemEl)}_actionHideMenu(){this._selectorVisible=!1,this._actionRemoveActiveDescendant()}_actionToggleMenu(){this._selectorVisible?this._actionHideMenu():this._actionShowMenu()}_actionHighlightFirstMenuItem(){this._setHighlightAndActiveDescendantMenu(this._firstItemEl)}_actionHighlightLastMenuItem(){this._setHighlightAndActiveDescendantMenu(this._lastItemEl)}_actionHighlightPrevMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.previousElementSibling,this._highlightItemEl.classList.remove("kuc-dropdown-1-6-0__group__select-menu__highlight")),null===e&&(e=this._lastItemEl),this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.nextElementSibling,this._highlightItemEl.classList.remove("kuc-dropdown-1-6-0__group__select-menu__highlight")),null===e&&(e=this._firstItemEl),this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach((e=>{e.classList.remove("kuc-dropdown-1-6-0__group__select-menu__highlight")})),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add("kuc-dropdown-1-6-0__group__select-menu__highlight")}_actionUpdateValue(e,t){const i=parseInt(t,10);if(this.value===e&&this.selectedIndex===i)return;const n={oldValue:this.value,value:e};this.value=e,this.selectedIndex=i,fe(this,"change",n)}_actionSetActiveDescendant(e){void 0!==e&&null!==this._buttonEl&&this._buttonEl.setAttribute("aria-activedescendant",e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute("aria-activedescendant")}_updateContainerWidth(){let e=this._labelEl.getBoundingClientRect().width;0===e&&(e=Pt(this._labelEl)),e=e>180?e:180,this._groupEl.style.width=e+"px"}_getScrollbarWidthHeight(){const e=document.createElement("div");e.style.cssText="overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{scrollbarWidth:t,scrollbarHeight:i}}_getDistanceToggleButton(){const{scrollbarWidth:e,scrollbarHeight:t}=this._getScrollbarWidthHeight(),i=document.body.scrollHeight>window.innerHeight,n=document.body.scrollWidth>window.innerWidth;return{toTop:this._buttonEl.getBoundingClientRect().top,toBottom:window.innerHeight-this._buttonEl.getBoundingClientRect().bottom-(n?t:0),toLeft:this._buttonEl.getBoundingClientRect().left,toRight:window.innerWidth-this._buttonEl.getBoundingClientRect().left-(i?e:0)}}_setMenuPositionAboveOrBelow(){this._menuEl.style.height="auto",this._menuEl.style.bottom="auto",this._menuEl.style.overflowY="";const e=this._menuEl.getBoundingClientRect().height,t=this._getDistanceToggleButton();if(!(t.toBottom>=e))if(t.toBottom<t.toTop){const i=this._errorEl.offsetHeight?this._errorEl.offsetHeight+16:0;if(this._menuEl.style.bottom=`${this._buttonEl.offsetHeight+i}px`,t.toTop>=e)return;this._menuEl.style.height=`${t.toTop}px`,this._menuEl.style.overflowY="scroll"}else this._menuEl.style.height=`${t.toBottom}px`,this._menuEl.style.overflowY="scroll"}_setMenuPositionLeftOrRight(){this._menuEl.style.right="auto";const e=this._menuEl.getBoundingClientRect().width,t=this._getDistanceToggleButton();if(t.toRight>=e||t.toLeft<e||t.toRight<0)return;const i=this._buttonEl.offsetWidth-t.toRight;this._menuEl.style.right=i>0?`${i}px`:"0px"}_setMenuPosition(){this._setMenuPositionAboveOrBelow(),this._setMenuPositionLeftOrRight()}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;const e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout((()=>{this._timeoutID=null,this._setMenuPosition()}),50))}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return L`
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
      `}_getDropdownIconSvgTemplate(e){return M`
      ${e?M`<svg
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
        </svg>`:""}`}}Rt([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Rt([ne({type:String})],e.prototype,"error",void 0),Rt([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Rt([ne({type:String})],e.prototype,"label",void 0),Rt([ne({type:String})],e.prototype,"value",void 0),Rt([ne({type:Number})],e.prototype,"selectedIndex",void 0),Rt([ne({type:Boolean})],e.prototype,"disabled",void 0),Rt([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),Rt([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),Rt([ne({type:Array})],e.prototype,"items",void 0),Rt([oe()],e.prototype,"_selectorVisible",void 0),Rt([se(".kuc-dropdown-1-6-0__group")],e.prototype,"_groupEl",void 0),Rt([se(".kuc-dropdown-1-6-0__group__select-menu")],e.prototype,"_menuEl",void 0),Rt([re(".kuc-dropdown-1-6-0__group__select-menu__item")],e.prototype,"_itemsEl",void 0),Rt([se("button.kuc-dropdown-1-6-0__group__toggle")],e.prototype,"_buttonEl",void 0),Rt([se(".kuc-dropdown-1-6-0__group__label")],e.prototype,"_labelEl",void 0),Rt([se(".kuc-dropdown-1-6-0__group__select-menu__item")],e.prototype,"_firstItemEl",void 0),Rt([se(".kuc-dropdown-1-6-0__group__select-menu__item:last-child")],e.prototype,"_lastItemEl",void 0),Rt([se(".kuc-dropdown-1-6-0__group__select-menu__item[aria-selected=true]")],e.prototype,"_selectedItemEl",void 0),Rt([se(".kuc-dropdown-1-6-0__group__select-menu__highlight")],e.prototype,"_highlightItemEl",void 0),Rt([se(".kuc-base-error-1-6-0__error")],e.prototype,"_errorEl",void 0),window.customElements.define("kuc-dropdown-1-6-0",e),ve('\n  kuc-dropdown-1-6-0,\n  kuc-dropdown-1-6-0 *,\n  kuc-dropdown-1-6-0:lang(en),\n  kuc-dropdown-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-dropdown-1-6-0:lang(ja),\n  kuc-dropdown-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-dropdown-1-6-0:lang(zh),\n  kuc-dropdown-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-dropdown-1-6-0:lang(zh-TW),\n  kuc-dropdown-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-dropdown-1-6-0 {\n    display: inline-table;\n    font-size: 14px;\n    color: #333333;\n    vertical-align: top;\n    width: 180px;\n    min-width: 180px;\n    line-height: 1.5;\n  }\n  kuc-dropdown-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    margin: 0px;\n    position: relative;\n  }\n  .kuc-dropdown-1-6-0__group__label {\n    padding: 4px 0px 8px 0px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .kuc-dropdown-1-6-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-6-0__group__toggle {\n    height: 40px;\n    box-sizing: border-box;\n    box-shadow: 1px 1px 1px #ffffff inset;\n    border: 1px solid #e3e7e8;\n    color: #3498db;\n    background-color: #f7f9fa;\n    padding: 0 0 0 24px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    cursor: pointer;\n  }\n  .kuc-dropdown-1-6-0__group__toggle:focus {\n    outline: none;\n    border: 1px solid #3498db;\n  }\n  .kuc-dropdown-1-6-0__group__toggle:disabled {\n    background-color: #d4d7d7;\n    box-shadow: none;\n    cursor: not-allowed;\n    color: #888888;\n  }\n  .kuc-dropdown-1-6-0__group__toggle__selected-item-label {\n    font-size: 14px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .kuc-dropdown-1-6-0__group__toggle__icon {\n    flex: none;\n    width: 38px;\n    height: 38px;\n  }\n  .kuc-dropdown-1-6-0__group__select-menu {\n    position: absolute;\n    min-width: 280px;\n    margin: 0;\n    padding: 8px 0;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n    background-color: #ffffff;\n    z-index: 2000;\n    list-style: none;\n    box-sizing: border-box;\n  }\n  .kuc-dropdown-1-6-0__group__select-menu[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-6-0__group__select-menu__item {\n    padding: 8px 16px 8px 24px;\n    line-height: 1;\n    position: relative;\n    cursor: pointer;\n    white-space: nowrap;\n\n  }\n  .kuc-dropdown-1-6-0__group__select-menu__item__icon {\n    position: absolute;\n    top: 50%;\n    left: 6px;\n    margin-top: -5px;\n  }\n  .kuc-dropdown-1-6-0__group__select-menu__item[aria-selected="true"] {\n    color: #3498db;\n  }\n  .kuc-dropdown-1-6-0__group__select-menu__highlight[role="option"] {\n    background-color: #e2f2fe;\n  }\n'),jt=e}})();var Gt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ft;(()=>{if(Ft=window.customElements.get("kuc-multi-choice-1-6-0"),!Ft){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=ke();const t=_t(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!wt(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}shouldUpdate(e){return e.has("items")&&!kt(this.items)?(St(this,At),!1):e.has("value")&&!yt(this.value)?(St(this,Vt),!1):!(e.has("selectedIndex")&&!wt(this.selectedIndex)&&(St(this,Ht),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return L`
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
      `}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;const t=e.target,i=t.getAttribute("value"),n=t.dataset.index||"0";this._handleChangeValue(i,n)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach((e=>{e.classList.contains("kuc-multi-choice-1-6-0__group__menu__highlight")&&e.classList.remove("kuc-multi-choice-1-6-0__group__menu__highlight")}));const t=e.currentTarget;t.classList.add("kuc-multi-choice-1-6-0__group__menu__highlight"),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){this.disabled||(e.currentTarget.classList.remove("kuc-multi-choice-1-6-0__group__menu__highlight"),this._setActiveDescendant())}_handleKeyDownMultiChoice(e){if(this.disabled)return;let t=0;switch(e.key){case"Up":case"ArrowUp":{e.preventDefault(),this._itemsEl.forEach(((e,i)=>{e.classList.contains("kuc-multi-choice-1-6-0__group__menu__highlight")&&(e.classList.remove("kuc-multi-choice-1-6-0__group__menu__highlight"),t=i-1)})),t=t<=-1?this._itemsEl.length-1:t;const i=this._itemsEl[t];i.classList.add("kuc-multi-choice-1-6-0__group__menu__highlight"),this._setActiveDescendant(i.id);break}case"Down":case"ArrowDown":{e.preventDefault(),this._itemsEl.forEach(((e,i)=>{e.classList.contains("kuc-multi-choice-1-6-0__group__menu__highlight")&&(e.classList.remove("kuc-multi-choice-1-6-0__group__menu__highlight"),t=i+1)})),t=t>=this._itemsEl.length?0:t;const i=this._itemsEl[t];i.classList.add("kuc-multi-choice-1-6-0__group__menu__highlight"),this._setActiveDescendant(i.id);break}case"Spacebar":case" ":e.preventDefault(),this._itemsEl.forEach((e=>{if(e.classList.contains("kuc-multi-choice-1-6-0__group__menu__highlight")){const t=e.getAttribute("value"),i=e.dataset.index||"0";this._handleChangeValue(t,i)}}))}}_getMultiChoiceCheckedIconSvgTemplate(e,t){return M`
        ${t?M`<svg
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
          </svg>`:""}`}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getMenuItemTemplate(e,t){const i=this._isCheckedItem(e,t);return L`
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
      `}_setActiveDescendant(e){void 0!==e&&null!==this._menuEl?this._menuEl.setAttribute("aria-activedescendant",e):this._menuEl.removeAttribute("aria-activedescendant")}_handleChangeValue(e,t){const i=this.value?[...this.value]:this.value,n=this._getNewValueMapping(e,t),o=this.items.map((e=>e.value)),a=Object.values(n).filter((e=>o.indexOf(e)>-1));if(a===i)return;const s=Object.keys(n).map((e=>parseInt(e,10)));this.value=a,this.selectedIndex=s,fe(this,"change",{oldValue:i,value:a})}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}}Gt([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Gt([ne({type:String})],e.prototype,"error",void 0),Gt([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Gt([ne({type:String})],e.prototype,"label",void 0),Gt([ne({type:Boolean})],e.prototype,"disabled",void 0),Gt([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),Gt([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),Gt([ne({type:Array})],e.prototype,"items",void 0),Gt([ne({type:Array})],e.prototype,"selectedIndex",void 0),Gt([ne({type:Array})],e.prototype,"value",void 0),Gt([se(".kuc-multi-choice-1-6-0__group__menu")],e.prototype,"_menuEl",void 0),Gt([re(".kuc-multi-choice-1-6-0__group__menu__item")],e.prototype,"_itemsEl",void 0),Gt([oe()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-multi-choice-1-6-0",e),ve('\n  kuc-multi-choice-1-6-0,\n  kuc-multi-choice-1-6-0 *,\n  kuc-multi-choice-1-6-0:lang(en),\n  kuc-multi-choice-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-multi-choice-1-6-0:lang(ja),\n  kuc-multi-choice-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-multi-choice-1-6-0:lang(zh),\n  kuc-multi-choice-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-multi-choice-1-6-0:lang(zh-TW),\n  kuc-multi-choice-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-multi-choice-1-6-0 {\n    display: inline-table;\n    font-size: 14px;\n    color: #333333;\n    width: 180px;\n    min-width: 180px;\n    line-height: 1.5;\n  }\n  kuc-multi-choice-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-multi-choice-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-multi-choice-1-6-0__group__label {\n    padding: 4px 0px 8px 0px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .kuc-multi-choice-1-6-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-multi-choice-1-6-0__group__menu {\n    position: relative;\n    background: #ffffff;\n    border: 1px solid #e3e7e8;\n    box-sizing: border-box;\n    box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;\n    padding: 6px 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 134px;\n    width: 100%;\n  }\n  .kuc-multi-choice-1-6-0__group__menu:not([disabled]):focus {\n    outline: none;\n    border: 1px solid #3498db;\n  }\n  .kuc-multi-choice-1-6-0__group__menu[disabled] {\n    background-color: #dbdcdd;\n    box-shadow: none;\n    cursor: not-allowed;\n    color: #888888;\n    outline: none;\n  }\n  .kuc-multi-choice-1-6-0__group__menu__item {\n    padding: 4px 16px;\n    margin-bottom: 2px;\n    line-height: 1;\n    position: relative;\n    white-space: nowrap;\n  }\n  .kuc-multi-choice-1-6-0__group__menu__item__icon {\n    position: absolute;\n    top: 50%;\n    left: 16px;\n    margin-top: -6px;\n    pointer-events: none;\n  }\n  .kuc-multi-choice-1-6-0__group__menu__item[aria-selected="true"] {\n    color: #3498db;\n    padding-left: 32px;\n  }\n  .kuc-multi-choice-1-6-0__group__menu[disabled]\n    .kuc-multi-choice-1-6-0__group__menu__item[aria-selected="true"] {\n    color: #888888;\n  }\n  .kuc-multi-choice-1-6-0__group__menu__highlight[role="option"] {\n    background-color: #e2f2fe;\n    cursor: pointer;\n  }\n'),Ft=e}})();var Wt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Kt;(()=>{if(Kt=window.customElements.get("kuc-notification-1-6-0"),!Kt){class e extends me{constructor(e){super(),this.className="",this.text="",this.type="danger",this.duration=-1,this._isOpened=!1;const t=_t(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonColor(){switch(this.type){case"info":return"#448aca";case"success":return"#9bbc65";default:return"#c65040"}}_getCloseButtonSvgTemplate(){return M`
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
      `}_setAutoCloseTimer(){!Number.isFinite(this.duration)||this.duration<0||(this._clearAutoCloseTimer(),this._timeoutID=window.setTimeout((()=>{this.close()}),this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){document.body.appendChild(this),this.performUpdate(),this.classList.remove("kuc-notification-fadeout-1-6-0"),this.classList.add("kuc-notification-fadein-1-6-0"),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._isOpened=!1,this.classList.remove("kuc-notification-fadein-1-6-0"),this.classList.add("kuc-notification-fadeout-1-6-0"),this._clearAutoCloseTimer(),fe(this,"close")}render(){return L`
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
      `}}Wt([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Wt([ne({type:String})],e.prototype,"text",void 0),Wt([ne({type:String})],e.prototype,"type",void 0),Wt([ne({type:Number})],e.prototype,"duration",void 0),Wt([oe()],e.prototype,"_isOpened",void 0),window.customElements.define("kuc-notification-1-6-0",e),ve('\n  kuc-notification-1-6-0,\n  kuc-notification-1-6-0 *,\n  kuc-notification-1-6-0:lang(en),\n  kuc-notification-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-65Medi", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-notification-1-6-0:lang(ja),\n  kuc-notification-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-notification-1-6-0:lang(zh),\n  kuc-notification-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-notification-1-6-0:lang(zh-TW),\n  kuc-notification-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-notification-1-6-0 {\n    color: #ffffff;\n    font-weight: 700;\n    text-align: center;\n    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);\n  }\n  kuc-notification-1-6-0 {\n    position: fixed;\n    display: inline-block;\n    top: 0;\n    width: 100%;\n    line-height: 1.5;\n    z-index: 10000;\n    margin-top: 16px;\n    pointer-events: none;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n  }\n  .kuc-notification-fadein-1-6-0 {\n    animation-name: kuc-notification-fade-in-1-6-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n  }\n  .kuc-notification-fadeout-1-6-0 {\n    animation-name: kuc-notification-fade-out-1-6-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n  }\n  .kuc-notification-1-6-0__notification {\n    position: relative;\n    display: inline-block;\n    text-align: left;\n    padding: 16px 56px 16px 24px;\n    background-color: #e74c3c;\n  }\n  .kuc-notification-1-6-0__notification--info {\n    background-color: #3498db;\n  }\n  .kuc-notification-1-6-0__notification--success {\n    background-color: #91c36c;\n  }\n  .kuc-notification-1-6-0__notification--danger {\n    background-color: #e74c3c;\n  }\n  .kuc-notification-1-6-0__notification__title {\n    display: block;\n    margin: 0px;\n    font-size: 16px;\n    max-width: 500px;\n    min-height: 24px;\n    word-break: break-word;\n    white-space: pre-wrap;\n  }\n  .kuc-notification-1-6-0__notification__close-button {\n    position: absolute;\n    top: 5px;\n    right: 0px;\n    width: 48px;\n    height: 48px;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    pointer-events: auto;\n    cursor: pointer;\n  }\n  @keyframes kuc-notification-fade-in-1-6-0 {\n    0% {\n      visibility: visible;\n      top: -56px;\n    }\n    100% {\n      visibility: visible;\n      top: 0;\n    }\n  }\n  @keyframes kuc-notification-fade-out-1-6-0 {\n    0% {\n      visibility: visible;\n      top: 0;\n    }\n    10% {\n      visibility: visible;\n      top: 14px;\n    }\n    100% {\n      top: -56px;\n    }\n  }\n'),Kt=e}})();var qt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Yt;(()=>{if(Yt=window.customElements.get("kuc-radio-button-1-6-0"),!Yt){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=ke();const t=_t(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}shouldUpdate(e){return e.has("items")&&!kt(this.items)?(St(this,At),!1):e.has("value")&&!xt(this.value)?(St(this,Dt),!1):!(e.has("selectedIndex")&&!$t(this.selectedIndex)&&(St(this,Lt),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value,n=t.dataset.index||"0",o=parseInt(n,10);if(this.value===i&&this.selectedIndex===o)return;const a={oldValue:this.value,value:i};this.value=i,this.selectedIndex=o,fe(this,"change",a)}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getRadioIconSvgTemplate(e,t){return M`
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
      ${t?M`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?"#e3e7e8":"#3498db"}"/>`:""}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return L`
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
      `}_getTabIndex(e,t,i){return 0===e&&0===i.filter((e=>e.value===this.value)).length||t.value===this.value?"0":"-1"}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return L`
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
      `}async updated(){await this.updateComplete,this._updateErrorWidth()}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}_updateErrorWidth(){const e=Pt(this._labelEl),t=Pt(this._selectMenuEl);let i=e>239?e:239;t>i&&(i=t),this._errorEl.style.width=i+"px"}}qt([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),qt([ne({type:String})],e.prototype,"error",void 0),qt([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),qt([ne({type:String})],e.prototype,"itemLayout",void 0),qt([ne({type:String})],e.prototype,"label",void 0),qt([ne({type:String})],e.prototype,"value",void 0),qt([ne({type:Number})],e.prototype,"selectedIndex",void 0),qt([ne({type:Boolean})],e.prototype,"borderVisible",void 0),qt([ne({type:Boolean})],e.prototype,"disabled",void 0),qt([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),qt([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),qt([ne({type:Array})],e.prototype,"items",void 0),qt([se(".kuc-radio-button-1-6-0__group__label")],e.prototype,"_labelEl",void 0),qt([se(".kuc-base-error-1-6-0__error")],e.prototype,"_errorEl",void 0),qt([se(".kuc-radio-button-1-6-0__group__select-menu")],e.prototype,"_selectMenuEl",void 0),window.customElements.define("kuc-radio-button-1-6-0",e),ve('\n  kuc-radio-button-1-6-0,\n  kuc-radio-button-1-6-0 *,\n  kuc-radio-button-1-6-0:lang(en),\n  kuc-radio-button-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-radio-button-1-6-0:lang(ja),\n  kuc-radio-button-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-radio-button-1-6-0:lang(zh),\n  kuc-radio-button-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-radio-button-1-6-0:lang(zh-TW),\n  kuc-radio-button-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-radio-button-1-6-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    min-width: 239px;\n    vertical-align: top;\n    line-height: 1.5;\n  }\n\n  kuc-radio-button-1-6-0[hidden] {\n    display: none;\n  }\n\n  .kuc-radio-button-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    margin: 0px;\n    width: 100%;\n  }\n\n  .kuc-radio-button-1-6-0__group__label {\n    display: inline-block;\n    padding: 4px 0 8px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-radio-button-1-6-0__group__label[hidden] {\n    display: none;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu {\n    display: block;\n    min-width: 239px;\n    width: 100%;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu[bordervisible] {\n    border-color: #e3e7e8;\n    border-width: 1px;\n    border-style: solid;\n    padding-top: 4px;\n    box-sizing: border-box;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item {\n    margin-left: 4px;\n    margin-bottom: 4px;\n    margin-right: 16px;\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    display: inline-block;\n    height: 24px;\n    line-height: 24px;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item[itemlayout="vertical"] {\n    display: block;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item[focused] {\n    border: 1px solid #3498db;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item__input:hover\n    + .kuc-radio-button-1-6-0__group__select-menu__item__label {\n    color: #666666;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    left: -30px;\n    box-sizing: border-box;\n    margin-top: -11px;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n    border-radius: 9px;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item__input[disabled]\n    + .kuc-radio-button-1-6-0__group__select-menu__item__label {\n    color: #888888;\n    cursor: not-allowed;\n  }\n\n  .kuc-radio-button-1-6-0__group__select-menu__item__label {\n    cursor: pointer;\n    position: relative;\n    margin-left: 32px;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: nowrap;\n  }\n'),Yt=e}})();let Jt;(()=>{if(Jt=window.customElements.get("kuc-spinner-1-6-0"),!Jt){class e extends me{constructor(e){super(),this.text="",this._body=document.getElementsByTagName("BODY")[0];const t=_t(e);Object.assign(this,t)}_getSpinnerSvgTemplate(){return M`
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
      `}open(){!1===this._body.classList.contains("kuc--has-spinner")&&this._body.classList.add("kuc--has-spinner"),this._body.appendChild(this)}close(){this._body.classList.remove("kuc--has-spinner"),this.parentNode&&this.parentNode.removeChild(this)}render(){return L`
        <div class="kuc-spinner-1-6-0__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner-1-6-0__spinner__text${this.text?"":" visually-hidden"}"
          >
            ${this.text?this.text:"now loading…"}
          </div>
        </div>
        <div class="kuc-spinner-1-6-0__mask"></div>
      `}}(function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);a>3&&s&&Object.defineProperty(t,i,s)})([ne({type:String})],e.prototype,"text",void 0),window.customElements.define("kuc-spinner-1-6-0",e),ve('\n  kuc-spinner-1-6-0,\n  kuc-spinner-1-6-0 *,\n  kuc-spinner-1-6-0:lang(en),\n  kuc-spinner-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-spinner-1-6-0:lang(ja),\n  kuc-spinner-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-spinner-1-6-0:lang(zh),\n  kuc-spinner-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-spinner-1-6-0:lang(zh-TW),\n  kuc-spinner-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-spinner-1-6-0 {\n    font-size: 14px;\n    color: #333333;\n  }\n  .kuc-spinner-1-6-0__spinner {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10000;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .kuc-spinner-1-6-0__spinner__loader {\n    width: 50px;\n    height: 50px;\n    animation: rotate-loading 1s steps(12) infinite;\n    fill: #99ccff;\n  }\n  .kuc-spinner-1-6-0__spinner__text {\n    margin: 10px 0;\n  }\n  .visually-hidden {\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    border: 0;\n    padding: 0;\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    margin: -1px;\n  }\n  .kuc-spinner-1-6-0__mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #666666;\n    opacity: 0.6;\n    z-index: 9999;\n  }\n  .kuc--has-spinner {\n    overflow: hidden;\n  }\n  @keyframes rotate-loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n'),Jt=e}})();var Zt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Qt;(()=>{if(Qt=window.customElements.get("kuc-text-1-6-0"),!Qt){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=ke();const t=_t(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};fe(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,fe(this,"change",i)}_handleInputText(e){e.stopPropagation();const t={value:e.target.value,data:e.data};fe(this,"input",t)}render(){return L`
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
      `}}Zt([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Zt([ne({type:String})],e.prototype,"error",void 0),Zt([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Zt([ne({type:String})],e.prototype,"label",void 0),Zt([ne({type:String})],e.prototype,"placeholder",void 0),Zt([ne({type:String})],e.prototype,"prefix",void 0),Zt([ne({type:String})],e.prototype,"suffix",void 0),Zt([ne({type:String})],e.prototype,"textAlign",void 0),Zt([ne({type:String})],e.prototype,"value",void 0),Zt([ne({type:Boolean})],e.prototype,"disabled",void 0),Zt([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),Zt([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),window.customElements.define("kuc-text-1-6-0",e),ve('\nkuc-text-1-6-0,\nkuc-text-1-6-0 *,\nkuc-text-1-6-0:lang(en),\nkuc-text-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-text-1-6-0:lang(ja),\nkuc-text-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-text-1-6-0:lang(zh),\nkuc-text-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-text-1-6-0:lang(zh-TW),\nkuc-text-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\nkuc-text-1-6-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  min-width: 177px;\n  width: 177px;\n  line-height: 1.5;\n}\nkuc-text-1-6-0[hidden] {\n  display: none;\n}\n.kuc-text-1-6-0__group {\n  border: none;\n  padding: 0px;\n  height: auto;\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n  margin: 0px;\n}\n.kuc-text-1-6-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-text-1-6-0__group__label[hidden] {\n  display: none;\n}\n.kuc-text-1-6-0__group__input-form {\n  display: table;\n  width: 100%;\n}\n.kuc-text-1-6-0__group__input-form__prefix-outer,\n.kuc-text-1-6-0__group__input-form__input-outer,\n.kuc-text-1-6-0__group__input-form__suffix-outer {\n  display: table-cell;\n}\n.kuc-text-1-6-0__group__input-form__prefix-outer__prefix {\n  padding-right: 4px;\n  white-space: nowrap;\n}\n.kuc-text-1-6-0__group__input-form__input-outer {\n  min-width: 26px;\n  width: 100%;\n}\ninput[type="text"].kuc-text-1-6-0__group__input-form__input-outer__input {\n  width: var(--kuc-text-input-width, 100%);\n  height: var(--kuc-text-input-height, 40px);\n  font-size: var(--kuc-text-input-font-size, 14px);\n  color: var(--kuc-text-input-color, #000000);\n  min-width: 100%;\n  padding: 0 8px;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n.kuc-text-1-6-0__group__input-form__input-outer__input[textAlign="left"] {\n  text-align: left;\n}\n.kuc-text-1-6-0__group__input-form__input-outer__input[textAlign="right"] {\n  text-align: right;\n}\n.kuc-text-1-6-0__group__input-form__input-outer__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-text-1-6-0__group__input-form__input-outer__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.kuc-text-1-6-0__group__input-form__suffix-outer__suffix {\n  padding-left: 4px;\n  white-space: nowrap;\n}\n'),Qt=e}})();var Xt=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ei;(()=>{if(ei=window.customElements.get("kuc-textarea-1-6-0"),ei)return;class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=ke();const t=_t(e);Object.assign(this,t)}_handleFocusTextarea(e){const t={value:this.value};fe(this,"focus",t)}_handleChangeTextarea(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,fe(this,"change",i)}_handleInputTextArea(e){e.stopPropagation();const t={value:e.target.value,data:e.data};fe(this,"input",t)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(e){if(!this._onResize)return;const t=this._textarea.getBoundingClientRect();let i=e.clientX-t.left,n=e.clientY-t.top;i<299&&(i=299),n<125&&(n=125),this.style.width=i+"px",this._textarea.style.height=n+"px"}_getResizerButtonSvgTemplate(){return M`
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
      `}firstUpdated(){document.addEventListener("mousemove",(e=>this._handleMouseMoveDocument(e))),document.addEventListener("mouseup",(e=>this._handleMouseUpDocument()))}render(){return L`
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
      `}}Xt([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Xt([ne({type:String})],e.prototype,"error",void 0),Xt([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Xt([ne({type:String})],e.prototype,"label",void 0),Xt([ne({type:String})],e.prototype,"placeholder",void 0),Xt([ne({type:String})],e.prototype,"value",void 0),Xt([ne({type:Boolean})],e.prototype,"disabled",void 0),Xt([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),Xt([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),Xt([se(".kuc-textarea-1-6-0__group__textarea")],e.prototype,"_textarea",void 0),window.customElements.define("kuc-textarea-1-6-0",e),ve('\n  kuc-textarea-1-6-0,\n  kuc-textarea-1-6-0 *,\n  kuc-textarea-1-6-0:lang(en),\n  kuc-textarea-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-textarea-1-6-0:lang(ja),\n  kuc-textarea-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-textarea-1-6-0:lang(zh),\n  kuc-textarea-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-textarea-1-6-0:lang(zh-TW),\n  kuc-textarea-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-textarea-1-6-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    vertical-align: top;\n    width: 299px;\n    line-height: 1.5;\n  }\n  kuc-textarea-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-textarea-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-textarea-1-6-0__group__label {\n    white-space: nowrap;\n    display: inline-block;\n    padding: 4px 0px 8px 0px;\n  }\n  .kuc-textarea-1-6-0__group__label[hidden] {\n    display: none;\n  }\n  textarea.kuc-textarea-1-6-0__group__textarea {\n    display: block;\n    border: 1px solid #e3e7e8;\n    box-sizing: border-box;\n    font-size: 14px;\n    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n    min-width: 299px;\n    min-height: 125px;\n    padding: 8px;\n    resize: none;\n    width: 100%;\n    background-color: #ffffff;\n  }\n  .kuc-textarea-1-6-0__group__textarea:focus {\n    outline: none;\n    border-color: #3498db;\n    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n    border: 1px solid #3498db;\n    background-color: #ffffff;\n    color: #333333;\n  }\n  .kuc-textarea-1-6-0__group__textarea:disabled {\n    color: #888888;\n    background-color: #d4d7d7;\n    box-shadow: none;\n    cursor: not-allowed;\n    resize: none;\n  }\n  .kuc-textarea-1-6-0__group__resizer {\n    position: relative;\n    width: 16px;\n    height: 16px;\n    cursor: se-resize;\n    float: right;\n    margin: -16px 0px;\n  }\n'),ei=e})();var ti=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ii;(()=>{if(ii=window.customElements.get("kuc-dialog-1-6-0"),!ii){class e extends me{constructor(e){super(),this.icon="",this.title="",this.content="",this.footer="",this._triggeredElement=null,this._content="",this._footer="",this._GUID=ke();const t=_t(e);Object.assign(this,t)}_handleFocusFirstDummy(){const e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_handleKeyDownDialog(e){"Escape"===e.key&&(e.preventDefault(),this.close())}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return M`
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
      `}_getIconTemplate(){switch(this.icon){case"info":return M`
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
          `;case"success":return M`
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
          `;case"error":return M`
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
          `;case"warning":return M`
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
          `;case"question":return M`
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
          `;default:return""}}update(e){e.has("content")&&(this._content=ct(this.content)),e.has("footer")&&(this._footer=ct(this.footer)),super.update(e)}open(){const e=document.getElementsByTagName("body")[0];e.appendChild(this),e.classList.add("kuc--has-dialog"),this.performUpdate(),this.setAttribute("opened",""),this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()}close(){document.getElementsByTagName("body")[0].classList.remove("kuc--has-dialog"),this.removeAttribute("opened"),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus(),fe(this,"close")}render(){return L`
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
      `}}ti([ne({type:String})],e.prototype,"icon",void 0),ti([ne({type:String})],e.prototype,"title",void 0),ti([ne()],e.prototype,"content",void 0),ti([ne()],e.prototype,"footer",void 0),ti([se(".kuc-dialog-1-6-0__dialog")],e.prototype,"_dialogEl",void 0),ti([re("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']")],e.prototype,"_focusableElements",void 0),window.customElements.define("kuc-dialog-1-6-0",e),ve('\n  kuc-dialog-1-6-0,\n  kuc-dialog-1-6-0 *,\n  kuc-dialog-1-6-0:lang(en),\n  kuc-dialog-1-6-0:lang(en) * {\n    font-family: "HelveticaNeueW02-45Ligh", Arial,\n      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-dialog-1-6-0:lang(ja),\n  kuc-dialog-1-6-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-dialog-1-6-0:lang(zh),\n  kuc-dialog-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-dialog-1-6-0:lang(zh-TW),\n  kuc-dialog-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n\n  kuc-dialog-1-6-0 {\n    display: none;\n  }\n\n  kuc-dialog-1-6-0[opened] {\n    display: block;\n  }\n\n  .kuc-dialog-1-6-0__dialog {\n    min-width: 320px;\n    font-size: 20px;\n    background-color: #ffffff;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10000;\n  }\n  \n  .kuc-dialog-1-6-0__dialog:focus-visible {\n    outline: 1px solid #3498db;\n  }\n\n  .kuc-dialog-1-6-0__dialog__header {\n    min-height: 64px;\n    border-bottom: 1px solid #e3e7e8;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .kuc-dialog-1-6-0__dialog__header__title {\n    font-size: 24px;\n    padding: 0 24px;\n    align-self: center;\n    font-weight: 400;\n  }\n\n  .kuc-dialog-1-6-0__dialog__header__close-button {\n    width: 48px;\n    height: 48px;\n    border: none;\n    background-color: #ffffff;\n    margin-right: 12px;\n    margin-top: 11px;\n    cursor: pointer;\n  }\n\n  .kuc-dialog-1-6-0__dialog__header__close-button:focus-visible {\n    outline: 1px solid #3498db;\n  }\n\n  .kuc-dialog-1-6-0__dialog__header__close-button-svg {\n    vertical-align: middle;\n  }\n\n  .kuc-dialog-1-6-0__dialog__content {\n    border-bottom: #e3e7e8 solid 1px;\n    background-color: #f7f9fa;\n    padding: 24px;\n    display: flex;\n  }\n\n  .kuc-dialog-1-6-0__dialog__content__icon-info,\n  .kuc-dialog-1-6-0__dialog__content__icon-success,\n  .kuc-dialog-1-6-0__dialog__content__icon-error,\n  .kuc-dialog-1-6-0__dialog__content__icon-warning,\n  .kuc-dialog-1-6-0__dialog__content__icon-question {\n    margin-right: 16px;\n    width: 24px;\n    height: 24px;\n  }\n\n  .kuc-dialog-1-6-0__dialog__footer {\n    padding: 24px;\n  }\n\n  .kuc-dialog-1-6-0__mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #000000;\n    opacity: 0.6;\n    z-index: 9999;\n  }\n\n  .kuc--has-dialog {\n    overflow: hidden;\n  }\n\n  .kuc--has-dialog .kuc-dialog-1-6-0__dialog {\n    overflow-x: hidden;\n    overflow-y: auto;\n    max-height: 80vh;\n  }\n'),ii=e}})();var ni=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class oi extends me{constructor(){super(),this.year=2021,this.postfix="",this._listBoxVisible=!1,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("scroll",this._handleScrollDocument)}),1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(e){this._listBoxItems=this._getYearOptions().map((e=>({value:`${e}`,label:`${e}${this.postfix}`}))),super.update(e)}render(){return L`
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
          >${at()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,e.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),super.update(e)}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleScrollDocument(){const e=lt(this);e.inputToBottom>=e.inputToTop?rt(this,"bottom"):rt(this,"top")}_getListBoxTemplate(){return this._listBoxVisible?L`
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
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleClickDropdownYearToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),fe(this,"kuc:year-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(e){"Tab"!==e.key&&(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(e)>-1&&this._openListBox()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.year=Number(e.detail.value);const t={value:`${this.year}`};fe(this,"kuc:year-dropdown-change",t)}_openListBox(){this._listBoxVisible=!0}_getYearOptions(){const e=[];Number.isInteger(this.year)||(this.year=2021);let t=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(;t<=i;t++)e.push(t);return e}}ni([ne({type:Number})],oi.prototype,"year",void 0),ni([ne({type:String})],oi.prototype,"postfix",void 0),ni([oe()],oi.prototype,"_listBoxVisible",void 0),ni([se(".kuc-base-datetime-header-year-1-6-0__toggle")],oi.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-year-1-6-0")||(ve("\n.kuc-base-datetime-header-year-1-6-0__toggle {\n  position: relative;\n  box-sizing: border-box;\n  height: 32px;\n  padding: 0 24px 0 8px;\n  line-height: 30px;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.kuc-base-datetime-header-year-1-6-0__toggle__icon {\n  position: absolute;\n  flex: none;\n  width: 24px;\n  height: 32px;\n}\n.kuc-base-datetime-header-year-1-6-0__toggle__label {\n  font-size: 13px;\n  color: #333333;\n}\n.kuc-base-datetime-header-year-1-6-0__toggle:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n"),window.customElements.define("kuc-base-datetime-header-year-1-6-0",oi));var ai=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class si extends me{constructor(){super(),this.language="auto",this.month=1,this._listBoxVisible=!1,this._locale=nt("en"),this._monthLabel="",this._maxHeight=1e3,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("scroll",this._handleScrollDocument)}),1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(e){e.has("language")&&(this._locale=nt(this.language),this._listBoxItems=this._getListBoxItems()),e.has("month")&&(this._monthLabel=this._getMonthLabel()),super.update(e)}render(){return L`
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
          >${at()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,e.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),super.update(e)}_handleScrollDocument(){const e=lt(this);e.inputToBottom>=e.inputToTop?rt(this,"bottom"):rt(this,"top")}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_getListBoxTemplate(){return this._listBoxVisible?L`
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
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleClickDropdownMonthToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),fe(this,"kuc:month-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleKeyDownMonthToggle(e){this._handleTabKey(e.key)||(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(e)>-1&&this._openListBox()}_handleTabKey(e){return"Tab"===e}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.month=Number(e.detail.value);const t={value:`${this.month}`};fe(this,"kuc:month-dropdown-change",t)}_openListBox(){this._listBoxVisible=!0}_getListBoxItems(){return this._locale.MONTH_SELECT.map(((e,t)=>({value:`${t+1}`,label:`${e}`})))}_getMonthLabel(){const e=this._locale.MONTH_SELECT.filter(((e,t)=>this.month===t+1));return e.length>0?e[0]:"JANUARY"}}ai([ne({type:String,attribute:"lang",reflect:!0})],si.prototype,"language",void 0),ai([ne({type:Number})],si.prototype,"month",void 0),ai([oe()],si.prototype,"_listBoxVisible",void 0),ai([se(".kuc-base-datetime-header-month-1-6-0__toggle")],si.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-month-1-6-0")||(ve("\n.kuc-base-datetime-header-month-1-6-0__toggle {\n  position: relative;\n  box-sizing: border-box;\n  height: 32px;\n  padding: 0 24px 0 8px;\n  line-height: 30px;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.kuc-base-datetime-header-month-1-6-0__toggle__icon {\n  position: absolute;\n  flex: none;\n  width: 24px;\n  height: 32px;\n}\n.kuc-base-datetime-header-month-1-6-0__toggle__label {\n  font-size: 13px;\n  color: #333333;\n}\n.kuc-base-datetime-header-month-1-6-0__toggle:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n"),window.customElements.define("kuc-base-datetime-header-month-1-6-0",si));var ri=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class li extends me{constructor(){super(...arguments),this.language="en",this.month=1,this.year=2021,this._locale=nt("en")}update(e){e.has("language")&&(this._locale=nt(this.language)),super.update(e)}render(){return L`
      <div class="kuc-base-datetime-calendar-header-1-6-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-6-0__group__button kuc-base-datetime-calendar-header-1-6-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${M`
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
          ${M`
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
    `}_getYearTemplate(){return L`
      <kuc-base-datetime-header-year-1-6-0
        class="kuc-base-datetime-calendar-header-1-6-0__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year-1-6-0>
    `}_getMonthTemplate(){return L`
      <kuc-base-datetime-header-month-1-6-0
        class="kuc-base-datetime-calendar-header-1-6-0__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month-1-6-0>
    `}_getYearMonthTemplate(){return"zh"===this.language||"ja"===this.language||"zh-TW"===this.language?L` ${this._getYearTemplate()}${this._getMonthTemplate()} `:L` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleMonthDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.month=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.year=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),1===this.month?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),fe(this,"kuc:calendar-header-previous-shifttab"))}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),12===this.month?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const e=this.year,t=this.month;fe(this,"kuc:calendar-header-change",{value:`${e}-${t}`})}}ri([ne({type:String,attribute:"lang",reflect:!0})],li.prototype,"language",void 0),ri([ne({type:Number,hasChanged(e){return(t=e)>0&&t<13;var t}})],li.prototype,"month",void 0),ri([ne({type:Number,hasChanged(e){return(t=e)>=0&&t<1e4;var t}})],li.prototype,"year",void 0),ri([se(".kuc-base-datetime-calendar-header-1-6-0__month")],li.prototype,"_baseDateTimeHeaderMonthEl",void 0),ri([se(".kuc-base-datetime-calendar-header-1-6-0__year")],li.prototype,"_baseDateTimeHeaderYearEl",void 0),ri([se(".kuc-base-datetime-header-month-1-6-0__listbox")],li.prototype,"_listBoxMonthEl",void 0),ri([se(".kuc-base-datetime-header-year-1-6-0__listbox")],li.prototype,"_listBoxYearEl",void 0),window.customElements.get("kuc-base-datetime-calendar-header-1-6-0")||(ve('\nkuc-base-datetime-calendar-header-1-6-0,\nkuc-base-datetime-calendar-header-1-6-0 *,\nkuc-base-datetime-calendar-header-1-6-0:lang(en),\nkuc-base-datetime-calendar-header-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-calendar-header-1-6-0:lang(ja),\nkuc-base-datetime-calendar-header-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n  font-weight: 700;\n}\nkuc-base-datetime-calendar-header-1-6-0:lang(zh),\nkuc-base-datetime-calendar-header-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-calendar-header-1-6-0:lang(zh-TW),\nkuc-base-datetime-calendar-header-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\n.kuc-base-datetime-calendar-header-1-6-0__group {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e3e7e8;\n  padding: 0;\n  white-space: nowrap;\n  width: 266px;\n  height: 44px;\n}\n.kuc-base-datetime-calendar-header-1-6-0__group__button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  width: 38px;\n  height: 32px;\n  margin: 0;\n  text-align: center;\n}\n.kuc-base-datetime-calendar-header-1-6-0__group__button:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n.kuc-base-datetime-calendar-header-1-6-0__group__button-icon {\n  vertical-align: middle;\n}\n.kuc-base-datetime-calendar-header-1-6-0__group__center {\n  width: 190px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n.kuc-base-datetime-calendar-header-1-6-0__month {\n  margin: 0 4px 0 4px;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-header-1-6-0",li));var di=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class ui extends me{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=nt("en"),this._handleClickDocument=this._handleClickDocument.bind(this),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument),document.addEventListener("keydown",this._handleKeyDownDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),document.removeEventListener("keydown",this._handleKeyDownDocument),super.disconnectedCallback()}update(e){if(e.forEach(((e,t)=>{"language"===t&&(this._locale=nt(this.language))})),e.has("month")&&(this._month=this.month),e.has("year")&&(this._year=this.year),e.has("value")){const{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return L`
      <table class="kuc-base-datetime-calendar-body-1-6-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(e){e.has("value")&&this._focusDateEl(),super.update(e)}_handleClickDocument(){fe(this,"kuc:calendar-body-blur",{})}_handleKeyDownDocument(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),fe(this,"kuc:calendar-body-blur",{}))}_handleClickDate(e){e.preventDefault(),e.stopPropagation();const t=e.target;t.setAttribute("aria-selected","true");const i=t.getAttribute("data-date")||"";this._dispatchClickEvent(i)}_handleKeyDownDate(e){let t=!1;switch(e.key){case"Up":case"ArrowUp":t=!0,this._moveToDate(-7);break;case"Down":case"ArrowDown":t=!0,this._moveToDate(7);break;case"Left":case"ArrowLeft":t=!0,this._moveToDate(-1);break;case"Right":case"ArrowRight":t=!0,this._moveToDate(1);break;case" ":case"Enter":{t=!0;const e=this._getSelectedValue();this._dispatchClickEvent(e);break}}t&&(e.stopPropagation(),e.preventDefault())}_dispatchClickEvent(e){const t={oldValue:this.value,value:e};fe(this,"kuc:calendar-body-click-date",t),this.value=e}_isToday(e){const t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_moveToDate(e){let t=this.value;const i=this._getSelectedValue(),{day:n}=this._separateDateValue(i);t=`${this._year}-${tt(this._month)}-${n}`;const o=new Date(t||this._getValueItemFocused());if(isNaN(o.getTime()))return;o.setDate(o.getDate()+e);const a=this._getDateString(o),s=t;this.value=a,fe(this,"kuc:calendar-body-change-date",{oldValue:s,value:a})}_separateDateValue(e=this.value){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.dataset.date||"":this._selectedItem&&this._selectedItem.getAttribute("data-date")||""}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute("data-date")||""}_getDateClass(e,t){return t?this._isToday(e)?" kuc-base-datetime-calendar-body-1-6-0__table__date--selected--today":"":this._isToday(e)?" kuc-base-datetime-calendar-body-1-6-0__table__date--selected--today":" kuc-base-datetime-calendar-body-1-6-0__table__date--other-month"}_getDateString(e=new Date){return`${e.getFullYear()}-${tt(e.getMonth()+1)}-${tt(e.getDate())}`}_isSameDayOfMoment(e){const t=parseInt(e[1],10),i=parseInt(e[2],10),n=parseInt(e[0],10);let o=(new Date).getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(o=new Date(this.value).getDate()),o===i&&t===this._month)return!0;const a=new Date(n,this._month,0).getDate();return o>a&&a===i&&t===this._month}_getHeaderItemsTemplate(){return L`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map((e=>L`
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
    `}_getDateItemsTemplate(){const e=Pe(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return L`
      <tbody>
        ${e.map((e=>L`
            <tr>
              ${e.map((e=>{const i=e.text.split("-"),n=this._isSameDayOfMoment(i),o=parseInt(i[1],10)===this._month,a=(this.value===e.attr||n)&&o;return L`
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
    `}_focusDateEl(){this._focusedItem&&this._focusedItem.focus({preventScroll:!0})}}di([ne({type:Number})],ui.prototype,"month",void 0),di([ne({type:Number})],ui.prototype,"year",void 0),di([ne({type:String,attribute:"lang",reflect:!0})],ui.prototype,"language",void 0),di([ne({type:String,reflect:!0})],ui.prototype,"value",void 0),di([oe()],ui.prototype,"_month",void 0),di([oe()],ui.prototype,"_year",void 0),di([se('.kuc-base-datetime-calendar-body-1-6-0__table__date--selected[aria-selected="true"]')],ui.prototype,"_selectedItem",void 0),di([se(".kuc-base-datetime-calendar-body-1-6-0__table__date--selected")],ui.prototype,"_highlightItem",void 0),di([se('.kuc-base-datetime-calendar-body-1-6-0__table__date--selected[tabindex="0"]')],ui.prototype,"_focusedItem",void 0),window.customElements.get("kuc-base-datetime-calendar-body-1-6-0")||(ve('\nkuc-base-datetime-calendar-body-1-6-0,\nkuc-base-datetime-calendar-body-1-6-0 *,\nkuc-base-datetime-calendar-body-1-6-0:lang(en),\nkuc-base-datetime-calendar-body-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-calendar-body-1-6-0:lang(ja),\nkuc-base-datetime-calendar-body-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-calendar-body-1-6-0:lang(zh),\nkuc-base-datetime-calendar-body-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\n\nkuc-base-datetime-calendar-body-1-6-0:lang(zh-TW),\nkuc-base-datetime-calendar-body-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table,\n.kuc-base-datetime-calendar-body-1-6-0__table tr {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date,\n.kuc-base-datetime-calendar-body-1-6-0__table__date--selected {\n  border-spacing: 1px;\n  padding: 0px;\n  border: 1px solid #ffffff;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__header {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 400;\n  color: #333333;\n}\n:lang(ja) th.kuc-base-datetime-calendar-body-1-6-0__table__header {\n  font-weight: 700;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date--selected,\n.kuc-base-datetime-calendar-body-1-6-0__table__date,\n.kuc-base-datetime-calendar-body-1-6-0__table__header {\n  box-sizing: border-box;\n  padding: 8px 0;\n  width: 36px;\n  height: 31px;\n  border: 1px solid #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 400;\n  color: #333333;\n  cursor: pointer;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__header:nth-child(1),\n.kuc-base-datetime-calendar-body-1-6-0__table__header:nth-child(7) {\n  color: #d4d7d7;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date:focus,\n.kuc-base-datetime-calendar-body-1-6-0__table__date--selected:focus {\n  outline: none;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date\n  .kuc-base-datetime-calendar-body-1-6-0__table__date__button:hover {\n  color: #000000;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date--selected {\n  border-color: #3498db;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date--selected--today,\n.kuc-base-datetime-calendar-body-1-6-0__table__date--today {\n  color: #ffffff;\n  background: #888888;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date--today:hover {\n  color: #333333;\n}\n.kuc-base-datetime-calendar-body-1-6-0__table__date--other-month,\n.kuc-base-datetime-calendar-body-1-6-0__table__date--other-month:hover {\n  color: #d4d7d7;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-body-1-6-0",ui));var ci=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class hi extends me{constructor(){super(...arguments),this.language="en",this._locale=nt("en")}update(e){e.has("language")&&(this._locale=nt(this.language)),super.update(e)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),fe(this,"kuc:calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),fe(this,"kuc:calendar-footer-click-today")}_handleKeyDownCalendarFooterButtonNone(e){"Tab"===e.key&&(e.shiftKey||(e.preventDefault(),fe(this,"kuc:calendar-footer-tab-none")))}render(){return L`
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
    `}}ci([ne({type:String,attribute:"lang",reflect:!0})],hi.prototype,"language",void 0),ci([oe()],hi.prototype,"_locale",void 0),window.customElements.get("kuc-base-datetime-calendar-footer-1-6-0")||(ve('\nkuc-base-datetime-calendar-footer-1-6-0,\nkuc-base-datetime-calendar-footer-1-6-0 *,\nkuc-base-datetime-calendar-footer-1-6-0:lang(en),\nkuc-base-datetime-calendar-footer-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-6-0:lang(ja),\nkuc-base-datetime-calendar-footer-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-6-0:lang(zh),\nkuc-base-datetime-calendar-footer-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-6-0:lang(zh-TW),\nkuc-base-datetime-calendar-footer-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\n.kuc-base-datetime-calendar-footer-1-6-0__group {\n  display: flex;\n  align-items: flex-end;\n  box-sizing: border-box;\n  padding: 0;\n  height: 27px;\n  white-space: nowrap;\n  width: 272px;\n}\n.kuc-base-datetime-calendar-footer-1-6-0__group__button {\n  background: transparent;\n  border: 1px solid transparent;\n  color: #3498db;\n  cursor: pointer;\n  font-size: 13px;\n  outline: none;\n}\n.kuc-base-datetime-calendar-footer-1-6-0__group__button:hover {\n  color: #217dbb;\n}\n.kuc-base-datetime-calendar-footer-1-6-0__group__button:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n.kuc-base-datetime-calendar-footer-1-6-0__group__center {\n  width: 100%;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-footer-1-6-0",hi));var pi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class _i extends me{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=2021}update(e){e.has("value")&&this._updateValue(),super.update(e)}render(){return L`
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
    `}async updated(e){await this.updateComplete,this._calculateBodyCalendarPosition(),super.updated(e)}_handleKeyDownCalendarGroup(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),fe(this,"kuc:calendar-escape",{}))}_handleClickCalendarGroup(e){e.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_calculateBodyCalendarPosition(){const{inputToBottom:e,inputToTop:t,inputToRight:i,inputToLeft:n}=lt(this);e>=this._baseCalendarGroupEl.getBoundingClientRect().height||t<0||e>t?this._calculateCalendarPosition(i,n,"bottom"):this._calculateCalendarPosition(i,n,"top")}_calculateCalendarPosition(e,t,i){if(!this.parentElement)return;if(e<336&&e<t){const e=this.parentElement.getBoundingClientRect().width,t="bottom"===i?40:"auto",n="bottom"===i?"auto":40,o=e>100?e-100:0;return void this._setCalendarPosition({top:t,bottom:n,right:o})}const n="bottom"===i?40:"auto",o="bottom"===i?"auto":40;this._setCalendarPosition({bottom:o,top:n,left:0})}_setCalendarPosition({top:e="auto",left:t="auto",right:i="auto",bottom:n="auto"}){const o=this._baseCalendarGroupEl.parentElement;this.parentElement&&o&&(this.parentElement.style.position="relative",o.style.bottom="auto"===n?n:n+"px",o.style.top="auto"===e?e:e+"px",o.style.left="auto"===t?t:t+"px",o.style.right="auto"===i?i:i+"px")}_handleCalendarHeaderChange(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_handleCalendarBodyChangeDate(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_updateValue(){""===this.value&&(this.value=Xe().slice(0,7)+"-01");const{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){const t=e.split("-");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}}pi([ne({type:String,attribute:"lang",reflect:!0})],_i.prototype,"language",void 0),pi([ne({type:String,reflect:!0})],_i.prototype,"value",void 0),pi([se(".kuc-base-datetime-calendar-1-6-0__group")],_i.prototype,"_baseCalendarGroupEl",void 0),pi([se(".kuc-base-datetime-calendar-header-1-6-0__month")],_i.prototype,"_monthEl",void 0),pi([se(".kuc-base-datetime-calendar-header-1-6-0__year")],_i.prototype,"_yearEl",void 0),pi([se(".kuc-base-datetime-header-month-1-6-0__listbox")],_i.prototype,"_listBoxMonthEl",void 0),pi([se(".kuc-base-datetime-header-year-1-6-0__listbox")],_i.prototype,"_listBoxYearEl",void 0),pi([oe()],_i.prototype,"_month",void 0),pi([oe()],_i.prototype,"_year",void 0),window.customElements.get("kuc-base-datetime-calendar-1-6-0")||(ve("\n.kuc-base-datetime-calendar-1-6-0__group {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 336px;\n  padding: 32px 32px 24px;\n  background: #ffffff;\n  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);\n  text-align: center;\n  font-size: 13px;\n}\n"),window.customElements.define("kuc-base-datetime-calendar-1-6-0",_i));var bi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class gi extends me{constructor(){super(...arguments),this.inputAriaLabel="",this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._locale=nt("en"),this._calendarValue="",this._inputValue="",this._valueForReset=""}update(e){e.has("inputId")&&(this._GUID=this.inputId),e.has("language")&&(this._locale=nt(this.language),this._updateValueProp()),e.has("value")&&this._updateValueProp(),super.update(e)}render(){return L`
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
      ${this._dateTimeCalendarVisible?L`
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
    `}updated(e){e.has("inputAriaLabel")&&this.inputAriaLabel&&this._dateInput.setAttribute("aria-label",this.inputAriaLabel),super.updated(e)}_handleInputValue(e){const t=e.target.value;this._inputValue=t||""}_handleClickInput(){if(!this._dateTimeCalendarVisible)return this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),void this._openCalendar();this._closeCalendar()}_updateValueProp(){if(this.value){const e=this._setCalendarValueWhenInvalidValue();return this._inputValue=Je(this.language,this.value),void(this._calendarValue=e||this.value)}const e=Xe();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)}_setCalendarValueWhenInvalidValue(){if(this.value&&!vt(this.value)){const e=Xe();return this._calendarValue||e.slice(0,7)}return""}_getNewCalendarValue(e){if(et(this.language,e))return Ze(this.language,e);if(!this._calendarValue)return"";let t=this._calendarValue.slice(0,7);return""===e&&(t=this._calendarValue.slice(0,7)+"-01"),t}_handleChangeInput(e){e.stopPropagation();const t=(null==e?void 0:e.target).value;if(this._calendarValue=this._getNewCalendarValue(t),this._calendarValue.length>7)return void this._dispathDateChangeCustomEvent(Ze(this.language,t));const i={value:void 0,oldValue:this.value,error:this._locale.INVALID_FORMAT};this._inputValue=t,fe(this,"kuc:base-date-change",i)}_handleKeyDownInput(e){"Escape"===e.key&&this._closeCalendar()}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleShiftTabCalendarPrevMonth(){this._footerNoneBtn.focus()}_handleClickCalendarChangeDate(e){e.detail.oldValue=this.value,this.value=e.detail.value,fe(this,"kuc:base-date-change",e.detail)}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,this._dateInput.focus(),e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,fe(this,"kuc:base-date-change",e.detail))}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._dateInput.focus(),this._inputValue="";const e=Xe();let t=this._setCalendarValueWhenInvalidValue();t||(t=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)+"-01"),this._calendarValue=t,this._dispathDateChangeCustomEvent(void 0)}_handleTabCalendarFooterButtonNone(){this._previousMonth.focus()}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const e=Xe();this._dateInput.focus(),this._dispathDateChangeCustomEvent(e)}_handleCalendarEscape(){const e=this._valueForReset;if(this._closeCalendar(),this._dateInput.focus(),e===this.value)return;const t={oldValue:this.value,value:e};this.value=e,fe(this,"kuc:base-date-change",t)}_handleCalendarBlurBody(e){e.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(e){const t={value:e,oldValue:this.value};this.value=void 0===e?"":e,fe(this,"kuc:base-date-change",t)}_handleClickButton(){if(!this._dateTimeCalendarVisible)return this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),void this._openCalendar();this._closeCalendar()}_handleBlurButton(){this._dateInput.classList.remove("kuc-base-date-1-6-0__input--focus")}_handleFocusButton(){this._dateInput.classList.add("kuc-base-date-1-6-0__input--focus")}}bi([ne({type:String})],gi.prototype,"inputAriaLabel",void 0),bi([ne({type:String})],gi.prototype,"inputId",void 0),bi([ne({type:String,attribute:"lang",reflect:!0})],gi.prototype,"language",void 0),bi([ne({type:String,reflect:!0})],gi.prototype,"value",void 0),bi([ne({type:Boolean})],gi.prototype,"disabled",void 0),bi([ne({type:Boolean})],gi.prototype,"inputAriaInvalid",void 0),bi([ne({type:Boolean})],gi.prototype,"required",void 0),bi([se(".kuc-base-date-1-6-0__input")],gi.prototype,"_dateInput",void 0),bi([se(".kuc-base-datetime-calendar-header-1-6-0__group__button--previous-month")],gi.prototype,"_previousMonth",void 0),bi([se(".kuc-base-datetime-calendar-footer-1-6-0__group__button--none")],gi.prototype,"_footerNoneBtn",void 0),bi([oe()],gi.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-base-date-1-6-0")||(ve("\ninput.kuc-base-date-1-6-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  color: #333333;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\ninput.kuc-base-date-1-6-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\ninput.kuc-base-date-1-6-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-datetime-picker-1-6-0__group__inputs--date\n  input.kuc-base-date-1-6-0__input--focus {\n  border-color: #3498db;\n}\ninput.kuc-base-date-1-6-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.kuc-base-date-1-6-0__calendar {\n  position: absolute;\n  z-index: 2000;\n  background-color: #ffffff;\n  text-align: center;\n  box-sizing: border-box;\n}\n.kuc-base-date-1-6-0__assistive-text {\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n  position: absolute !important;\n  padding: 0px !important;\n  border: 0px !important;\n  height: 1px !important;\n  width: 1px !important;\n}\n"),window.customElements.define("kuc-base-date-1-6-0",gi));var mi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let fi;(()=>{if(fi=window.customElements.get("kuc-date-picker-1-6-0"),!fi){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._errorFormat="",this._errorText="",this._inputValue="",this._invalidValue="",this._valueConverted="",this._GUID=ke();const t=_t(e);Object.assign(this,t)}shouldUpdate(e){return!(void 0!==this.value&&""!==this.value&&("string"==typeof this.value&&bt(this.value)?(this._valueConverted=ht(this.value),this._valueConverted&&!vt(this._valueConverted)&&(St(this,Ne),1)):(St(this,Ne),1)))}willUpdate(e){e.has("value")&&(void 0===this.value?this._inputValue=this._invalidValue:(this.value=""===this.value?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat="")),this._updateErrorText()}render(){return L`
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
      `}updated(){this._invalidValue=""}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const t={oldValue:this.value,value:""};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error="",t.value=void 0):(this._errorFormat="",this.value=void 0===e.detail.value?"":e.detail.value,t.value=this.value),this._disptchChangeEvent(t)}_disptchChangeEvent(e){fe(this,"change",e)}}mi([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),mi([ne({type:String})],e.prototype,"error",void 0),mi([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),mi([ne({type:String})],e.prototype,"label",void 0),mi([ne({type:Boolean})],e.prototype,"disabled",void 0),mi([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),mi([ne({type:String,attribute:"lang",reflect:!0,converter:ut})],e.prototype,"language",void 0),mi([ne({type:String})],e.prototype,"value",void 0),mi([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),mi([se(".kuc-base-date-1-6-0__input")],e.prototype,"_dateInput",void 0),window.customElements.define("kuc-date-picker-1-6-0",e),ve('\nkuc-date-picker-1-6-0,\nkuc-date-picker-1-6-0 *,\nkuc-date-picker-1-6-0:lang(en),\nkuc-date-picker-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-date-picker-1-6-0:lang(ja),\nkuc-date-picker-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-date-picker-1-6-0:lang(zh),\nkuc-date-picker-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-date-picker-1-6-0:lang(zh-TW),\nkuc-date-picker-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-date-picker-1-6-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  max-width: 100px;\n  width: 100px;\n  line-height: 1.5;\n}\nkuc-date-picker-1-6-0[hidden] {\n  display: none;\n}\n.kuc-date-picker-1-6-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-date-picker-1-6-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-date-picker-1-6-0__group__label[hidden] {\n  display: none;\n}\n.kuc-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\n.kuc-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n'),fi=e}})();var vi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class ki extends me{constructor(){super(),this.value="",this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}render(){return L`
      <ul
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox-1-6-0__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map((e=>this._getListBoxItemTemplate(e)))}
      </ul>
    `}updated(e){e.has("value")&&this._highlightSelectedItem(),this._setListBoxPosition(),this._scrollToView(),super.updated(e)}_handleClickDocument(){fe(this,"kuc:listbox-blur",{})}_handleClickListBox(e){e.stopPropagation()}_handleKeyDownListBox(e){switch(e.preventDefault(),e.stopPropagation(),e.key){case"Up":case"ArrowUp":this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Down":case"ArrowDown":this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Home":this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case"End":this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case"Tab":fe(this,"kuc:listbox-click",{});break;case"Escape":fe(this,"kuc:listbox-escape",{});break;case" ":case"Enter":{const e=this._highlightItemEl.getAttribute("value");fe(this,"kuc:listbox-click",{value:e||""});break}}}_handleMouseDownListBox(e){if(e.preventDefault(),e.stopPropagation(),e.target===e.currentTarget)return;const t=e.target.getAttribute("value")||"";fe(this,"kuc:listbox-click",{value:t})}_handleMouseOverItem(e){if(this._actionKeyboard)return void(this._actionKeyboard=!1);const t=e.target;this._setHighlightItemEl(t),this.doFocus&&this._focusHighlightItemEl(!1)}_setListBoxPosition(){const e=this._listBoxEl.getBoundingClientRect().height;if(!this._listBoxEl.parentElement||!this.parentElement)return;const t=window.innerHeight-this.parentElement.getBoundingClientRect().bottom,i=this.parentElement.offsetHeight;this._listBoxEl.style.bottom="auto",this._listBoxEl.style.left="auto",t>=e||(this.parentElement.style.position="relative",this._listBoxEl.style.bottom=i+"px",this._listBoxEl.style.left="0px")}_setHighlightItemEl(e){this._removeHighlight(),e.classList.add("kuc-base-datetime-listbox-1-6-0__listbox--highlight"),e.setAttribute("tabindex","0")}_highlightSelectedItem(){if(!this.doFocus)return;const e=Array.from(this._itemsEl).filter((e=>"true"===e.getAttribute("aria-selected")))[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(null===this._highlightItemEl||null===this._iconChecked)return void this._highlightFirstItem();const e=this._getNextItemEl();if(e)return this._setHighlightItemEl(e),this._firstHighlight=!1,void(this._itemSelectedEl=e);this._highlightFirstItem()}_getNextItemEl(){const e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(t=this._itemSelectedEl.nextElementSibling,t):this._firstItemEl:t}_highlightPrevItemEl(){if(null===this._highlightItemEl||null===this._iconChecked)return void this._highlightLastItem();const e=this._getPreviousItemEl();if(e)return this._setHighlightItemEl(e),this._firstHighlight=!1,void(this._itemSelectedEl=e);this._highlightLastItem()}_getPreviousItemEl(){const e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(t=this._itemSelectedEl.previousElementSibling,t):this._lastItemEl:t}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute("tabindex","-1"),this._highlightItemEl.classList.remove("kuc-base-datetime-listbox-1-6-0__listbox--highlight"))}_focusHighlightItemEl(e){const t=this._highlightItemEl;t&&(t.focus({preventScroll:!0}),!1!==e&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){const e=this._highlightItemEl.getAttribute("value")||"";fe(this,"kuc:listbox-focus-change",{value:e})}_scrollToView(){const e=this._highlightItemEl||this._getHighlightItemByValue();if(!e||!this._listBoxEl)return;const t=e.offsetHeight,i=this._listBoxEl.clientHeight/t/2;let n=e.offsetTop-i*t;n<0&&(n=0),this._listBoxEl.scrollTop=n}_getHighlightItemByValue(){const e=Array.from(this._listBoxEl.children),t=new Date(Date.parse(`2021/01/01 ${this.value}`));let i=e.find((e=>new Date(Date.parse(`2021/01/01 ${e.title}`))>=t));return i||(i=e[e.length-1]),this.doFocus&&i?(this._setHighlightItemEl(i),this._focusHighlightItemEl(),i):i}_getListBoxItemTemplate(e){const t=this.value===e.value&&this.doFocus;return L`
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
    `}_getCheckedIconSvgTemplate(){return M`<svg
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
        </svg>`}}vi([ne({type:String})],ki.prototype,"value",void 0),vi([ne({type:Array})],ki.prototype,"items",void 0),vi([ne({type:Number})],ki.prototype,"maxHeight",void 0),vi([ne({type:Boolean})],ki.prototype,"doFocus",void 0),vi([se(".kuc-base-datetime-listbox-1-6-0__listbox")],ki.prototype,"_listBoxEl",void 0),vi([re(".kuc-base-datetime-listbox-1-6-0__listbox__item")],ki.prototype,"_itemsEl",void 0),vi([se(".kuc-base-datetime-listbox-1-6-0__listbox__item")],ki.prototype,"_firstItemEl",void 0),vi([se(".kuc-base-datetime-listbox-1-6-0__listbox__item:last-child")],ki.prototype,"_lastItemEl",void 0),vi([se(".kuc-base-datetime-listbox-1-6-0__listbox--highlight")],ki.prototype,"_highlightItemEl",void 0),vi([se(".kuc-base-datetime-listbox-1-6-0__listbox__item__icon")],ki.prototype,"_iconChecked",void 0),vi([oe()],ki.prototype,"_actionKeyboard",void 0),vi([oe()],ki.prototype,"_firstHighlight",void 0),vi([oe()],ki.prototype,"_itemSelectedEl",void 0),window.customElements.get("kuc-base-datetime-listbox-1-6-0")||(ve('\nkuc-base-datetime-listbox-1-6-0,\nkuc-base-datetime-listbox-1-6-0 *,\nkuc-base-datetime-listbox-1-6-0:lang(en),\nkuc-base-datetime-listbox-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-base-datetime-listbox-1-6-0:lang(ja),\nkuc-base-datetime-listbox-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-listbox-1-6-0:lang(zh),\nkuc-base-datetime-listbox-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-listbox-1-6-0:lang(zh-TW),\nkuc-base-datetime-listbox-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\n.kuc-base-datetime-listbox-1-6-0__listbox {\n  position: absolute;\n  z-index: 2000;\n  min-width: 280px;\n  margin: 0;\n  padding: 8px 0;\n  border: 1px solid #e3e7e8;\n  background-color: #ffffff;\n  list-style: none;\n  line-height: 1;\n  overflow-y: auto;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);\n}\n.kuc-base-datetime-listbox-1-6-0__listbox__item {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 8px 16px 8px 25px;\n  color: #333333;\n  cursor: pointer;\n  -webkit-tap-highlight-color: initial;\n  text-align: left;\n  font-size: 14px;\n  user-select: none;\n}\n.kuc-base-datetime-listbox-1-6-0__listbox__item[aria-selected="true"] {\n  color: #3498db;\n}\n.kuc-base-datetime-listbox-1-6-0__listbox--highlight {\n  background-color: #e2f2fe;\n  cursor: pointer;\n}\n.kuc-base-datetime-listbox-1-6-0__listbox__item__icon {\n  position: absolute;\n  left: 8px;\n  top: 10px;\n  background-color: transparent;\n}\n.kuc-base-datetime-listbox-1-6-0__listbox__item:focus {\n  outline: none;\n}\n'),window.customElements.define("kuc-base-datetime-listbox-1-6-0",ki));var yi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class xi extends me{constructor(){super(...arguments),this.language="en",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.timeStep=30,this._listBoxVisible=!1,this._valueLabel="",this._doFocusListBox=!1,this._hours="",this._minutes="",this._suffix="",this._valueForReset="",this._locale=nt("en")}update(e){(e.has("hour12")||e.has("timeStep")||e.has("max")||e.has("min"))&&(this._listBoxItems=((e,t,i,n)=>{const o=[],a=Math.round(t),s=je(n),r=je(i);if(a>0){const t=Math.floor((s-r)/a)+1;for(let i=0;i<t;i++){const t=Re(r+i*a,e);o.push(t)}}return o})(this.hour12,this.timeStep,this.min,this.max),this._updateInputValue()),e.has("value")&&this._updateInputValue(),e.has("language")&&(this._locale=nt(this.language)),super.update(e)}render(){return L`
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
    `}updated(e){e.has("disabled")&&this._toggleDisabledGroup(),super.update(e)}_handleClickInputGroup(e){if(this.disabled)return;if(""===this.value)return this._toggleEl.focus(),void this._openListBox();const t=e.target;this._openListBox(),"INPUT"!==t.tagName.toUpperCase()?this._hoursEl.select():t.select()}_handleBlurListBox(e){e.preventDefault(),this._inputFocusEl||(this._listBoxVisible=!1)}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add("kuc-base-time-1-6-0__group--disabled"):this._inputGroupEl.classList.remove("kuc-base-time-1-6-0__group--disabled")}_updateInputValue(){var e;const t=((e,t)=>{const i=e.split(":"),n=parseInt(i[0],10),o=parseInt(i[1],10),a=n%Ee;return isNaN(a)||isNaN(o)?{hours:"",minutes:"",suffix:""}:t?((e,t)=>{const i=We(e),n=Fe(e);return{hours:tt(n),minutes:tt(t),suffix:i}})(n,o):{hours:tt(a),minutes:tt(o),suffix:""}})(this.value,this.hour12);this._hours=t.hours,this._minutes=t.minutes,this._suffix=t.suffix||"",this._valueLabel=this._getValueLabel(t),this._inputGroupEl&&(this._setValueToInput(t),null===(e=this._inputFocusEl)||void 0===e||e.select())}_getValueLabel(e){if(!e.hours||!e.minutes)return"";const t=`${e.hours}:${e.minutes}`;return e.suffix?t+` ${e.suffix}`:t}_setValueToInput(e){this._hoursEl.value=e.hours,this._minutesEl.value=e.minutes,this._suffixEl&&(this._suffixEl.value=e.suffix||"")}_handleKeyDownButton(e){switch(e.key){case"Tab":case"Escape":if("Escape"===e.key&&e.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case"Enter":case" ":case"ArrowUp":case"ArrowDown":e.preventDefault(),e.stopPropagation(),this._openListBoxByKey();break;default:e.preventDefault(),e.stopPropagation(),this._handleDefaultKeyButton(e.key)}}_handleBlurButton(){this._inputGroupEl.classList.remove("kuc-base-time-1-6-0__group--focus")}_handleFocusButton(e){e.stopPropagation(),this._inputGroupEl.classList.add("kuc-base-time-1-6-0__group--focus")}_openListBoxByKey(){return!this._listBoxVisible&&(this._valueForReset=this.value,this._doFocusListBox=!0,this._listBoxVisible=!0,this._inputGroupEl.classList.remove("kuc-base-time-1-6-0__group--focus"),!0)}_handleListBoxEscape(){this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),""!==this.value?this._hoursEl.select():this._toggleEl.focus()}_handleDefaultKeyButton(e){if(!/^[0-9]$/i.test(e)||""!==this.value)return;const t=this._computeNumberKeyValueHours(e);this._actionUpdateInputValue(t),this._hoursEl.select()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!e.detail.value)return;const t=e.detail.value;this._actionUpdateInputValue(t)}_handleListBoxFocusChange(e){const t=e.detail.value,i=Ke(t);this._actionUpdateInputValue(i)}_handleFocusInput(e){this._inputFocusEl=e.target,this._inputFocusEl.select(),this._inputGroupEl.classList.add("kuc-base-time-1-6-0__group--focus")}_handleBlurInput(e){this._inputFocusEl=null;const t=e.relatedTarget;t&&t instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(t)>-1||(this._closeListBox(),this._inputGroupEl.classList.remove("kuc-base-time-1-6-0__group--focus"))}_handleTabKey(e){return"Tab"===e.key}_handleKeyDownInput(e){this._closeListBox(),this._handleTabKey(e)||this._handleSupportedKey(e)}_handlePasteInput(e){e.preventDefault()}_handleSupportedKey(e){e.preventDefault();const t=e.key;let i;switch(t){case"Enter":case"ArrowRight":this._actionSelectNextRange();break;case"ArrowLeft":this._actionSelectPreviousRange();break;case"ArrowUp":i=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(i);break;case"ArrowDown":i=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(i);break;case"Backspace":case"Delete":i=this._computeDeleteValue(),this._actionUpdateInputValue(i);break;default:i=this._computeDefaultKeyValue(t),this._actionUpdateInputValue(i)}}_actionUpdateInputValue(e){const t=""===this.value?this.value:this._formatKeyDownValue(),i=Ke(t),n=Ke(e);i!==n&&(this.value=n,this._dispatchEventTimeChange(n,i))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:"00"}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:"00"}):this._formatKeyDownValue()}_computeArrowUpDownValue(e){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(e):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(e):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(e){if(!e){const e=this._suffix===Ae?Ve:Ae;return this._formatKeyDownValue({suffix:e})}if(-1===["a","A","p","P"].indexOf(e))return this._formatKeyDownValue();const t="a"===e||"A"===e?Ae:Ve;return""===this.value&&this._hoursEl.select(),this._formatKeyDownValue({suffix:t})}_computeArrowUpDownHourValue(e){let t=parseInt(this._hours,10)+e;return this.hour12?(t%=Te,t=t<=0?Te:t):(t%=Ee,t=t<0?23:t),this._formatKeyDownValue({hours:t.toString()})}_computeArrowUpDownMinuteValue(e){let t=parseInt(this._minutes,10)+e;return t%=60,t=t<0?59:t,this._formatKeyDownValue({minutes:t.toString()})}_computeDefaultKeyValue(e){return/^[0-9]$/i.test(e)?this._computeNumberKeyValue(e):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(e):this._formatKeyDownValue()}_computeNumberKeyValue(e){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(e):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(e):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(e){const t=this._getPreviousMinutes(this._minutes),i=tt(t+e);return""===this.value?(this._hoursEl.select(),this._computeNumberKeyValueHours(e)):this._formatKeyDownValue({minutes:i})}_computeNumberKeyValueHours(e){const t=this._getPreviousHours(this._hours,e),i=tt(t+e);return""===this.value?this._formatKeyDownValue({hours:i,minutes:"00"}):this._formatKeyDownValue({hours:i})}_getPreviousMinutes(e){let t;return t=parseInt(e,10)>10?(""+e)[1]:""+e,t=parseInt(t,10)>5?"0":t,t}_getPreviousHours(e,t){let i;i=parseInt(e,10)>10?(""+e)[1]:""+e;const n=parseInt(i+t,10);return i=this.hour12&&n>Te||!this.hour12&&n>=Ee?"0":i,i}_actionSelectNextRange(){this._inputFocusEl!==this._hoursEl?this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select():this._minutesEl.select()}_actionSelectPreviousRange(){this._inputFocusEl!==this._suffixEl?this._inputFocusEl===this._minutesEl&&this._hoursEl.select():this._minutesEl.select()}_dispatchEventTimeChange(e,t){const i={value:e,oldValue:t};(Ge(e,this.min)<0||Ge(this.max,e)<0)&&(i.error=this._locale.TIME_IS_OUT_OF_VALID_RANGE),fe(this,"kuc:base-time-change",i)}_formatKeyDownValue(e={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){const t=e.hours||this._hours,i=e.minutes||this._minutes,n=e.suffix||this._suffix,o=`${tt(t)}:${tt(i)}`;return n?`${o} ${n}`:o}_openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0)}_closeListBox(){this._doFocusListBox=!1,this._listBoxVisible=!1}_getColonTemplate(){return this._hours?L` <span class="kuc-base-time-1-6-0__group__colon">:</span> `:""}_getSuffixTemplate(){return this.hour12?L`
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
        `:""}_getListBoxTemplate(){return this._listBoxVisible?L`
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
        `:""}}yi([ne({type:String,attribute:"lang",reflect:!0})],xi.prototype,"language",void 0),yi([ne({type:String})],xi.prototype,"max",void 0),yi([ne({type:String})],xi.prototype,"min",void 0),yi([ne({type:String})],xi.prototype,"value",void 0),yi([ne({type:Boolean})],xi.prototype,"disabled",void 0),yi([ne({type:Boolean})],xi.prototype,"hour12",void 0),yi([ne({type:Number})],xi.prototype,"timeStep",void 0),yi([oe()],xi.prototype,"_listBoxVisible",void 0),yi([oe()],xi.prototype,"_valueLabel",void 0),yi([oe()],xi.prototype,"_doFocusListBox",void 0),yi([oe()],xi.prototype,"_hours",void 0),yi([oe()],xi.prototype,"_minutes",void 0),yi([oe()],xi.prototype,"_suffix",void 0),yi([oe()],xi.prototype,"_inputFocusEl",void 0),yi([se(".kuc-base-time-1-6-0__group__hours")],xi.prototype,"_hoursEl",void 0),yi([se(".kuc-base-time-1-6-0__group__minutes")],xi.prototype,"_minutesEl",void 0),yi([se(".kuc-base-time-1-6-0__group__suffix")],xi.prototype,"_suffixEl",void 0),yi([se(".kuc-base-time-1-6-0__assistive-text")],xi.prototype,"_toggleEl",void 0),yi([se(".kuc-base-time-1-6-0__group")],xi.prototype,"_inputGroupEl",void 0),window.customElements.get("kuc-base-time-1-6-0")||(ve("\n:lang(ja) .kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__hours,\n:lang(ja) .kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__minutes {\n  width: 18px;\n}\n.kuc-base-time-1-6-0__group {\n  display: inline-flex;\n  position: relative;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  max-width: 85px;\n  width: 85px;\n  height: 40px;\n  color: #333333;\n  border: solid 1px #e3e7e8;\n  box-sizing: border-box;\n  padding: 0px 8px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  background-color: #ffffff;\n}\n.kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__hours {\n  border: 0px;\n  padding: 0px;\n  width: 16px;\n  font-size: 14px;\n  outline: none;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__minutes {\n  border: 0px;\n  padding: 0px;\n  width: 16px;\n  font-size: 14px;\n  outline: none;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__hours:focus {\n  border: 0px;\n}\n.kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__minutes:focus {\n  border: 0px;\n}\n.kuc-base-time-1-6-0__group__colon {\n  width: 4px;\n  text-align: center;\n}\n.kuc-base-time-1-6-0__group input.kuc-base-time-1-6-0__group__suffix {\n  border: 0px;\n  width: 24px;\n  text-align: right;\n  font-size: 14px;\n  outline: none;\n  appearance: none;\n  margin-left: 1px;\n  padding: 0px;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-6-0__group--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-base-time-1-6-0__assistive-text {\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n  position: absolute !important;\n  padding: 0px !important;\n  border: 0px !important;\n  height: 1px !important;\n  width: 1px !important;\n}\n.kuc-base-time-1-6-0__group--disabled {\n  background-color: #d4d7d7;\n  box-shadow: none;\n  color: #888888;\n  cursor: not-allowed;\n}\n.kuc-base-time-1-6-0__group--disabled input {\n  cursor: not-allowed;\n  color: #888888;\n  -webkit-text-fill-color: #888888;\n}\n"),window.customElements.define("kuc-base-time-1-6-0",xi));var wi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let $i;(()=>{if($i=window.customElements.get("kuc-datetime-picker-1-6-0"),!$i){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorText="",this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._inputMax="",this._inputMin="",this._timeConverted="",this._errorInvalidTime="",this._inputTimeStep=30,this._GUID=ke();const t=_t(e);Object.assign(this,t)}shouldUpdate(e){if(e.has("max")||e.has("min")){let e=this._inputMin,t=this._inputMax;if(void 0===this.max||""===this.max)t=Be;else{if(!gt(this.max))return St(this,Oe),!1;t=this.max=pt(this.max)}if(void 0===this.min||""===this.min)e=Me;else{if(!gt(this.min))return St(this,ze),!1;e=this.min=pt(this.min)}if(Ge(t,e)<0)return St(this,De),!1;this._inputMin=e,this._inputMax=t}if(e.has("timeStep")){if(!mt(this.timeStep))return St(this,Le),!1;if(!ft(this.timeStep,this._inputMax,this._inputMin))return St(this,Ue),!1;this._inputTimeStep=this.timeStep}return void 0===this.value||""===this.value||("string"!=typeof this.value?(St(this,Ne),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=ht(this._dateAndTime.date),It(this._dateAndTime.date,this._dateAndTime.time)&&vt(this._dateConverted)?(this._timeConverted=pt(this._dateAndTime.time.slice(0,5)),!e.has("value")||!(Ge(this._timeConverted,this._inputMin)<0||Ge(this._inputMax,this._timeConverted)<0)||(St(this,He),!1)):(St(this,Ne),!1)))}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueChangeByUI():this._updateValueWhenSetter()}_updateValueChangeByUI(){const e=this._validateDateTimeFormat();this.value=e?this.value:void 0,!e||this._dateValue||this._timeValue||(this.value="");const t=!this._dateValue&&this._timeValue,i=this._dateValue&&!this._timeValue;this._errorText=t||i?this.error||this._errorFormat||this._errorInvalidTime:e?this.error:this._errorFormat||this._errorInvalidTime}_validateDateTimeFormat(){const e=Boolean(this._timeValue)&&!this._dateValue,t=Boolean(this._dateValue)&&!this._timeValue;return!(this._errorFormat||this._errorInvalidTime||e||t)}_updateValueWhenSetter(){if(this._errorText=this.error,""===this.value||void 0===this.value)return this._previousTimeValue="",this._errorFormat="",void(this._errorInvalidTime="");this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t||this._dateInput.value,this._timeValue=this._dateValue&&vt(t)?pt(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has("value")&&(void 0===this.value&&this._setUndefinedValue(),""===this.value&&this._setEmptyValue()),(e.has("max")||e.has("min")||e.has("value"))&&void 0!==this.value&&(this._errorInvalidTime=""),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat)return this._changeDateByUI?void(this._dateValue=this._dateInput.value):(this._dateValue="",void(this._timeValue=""));this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorInvalidTime=""}render(){return L`
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
      `}updated(){this._resetState(),this._baseLabelEl.updateComplete.then((e=>{this._updateErrorWidth()}))}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorWidth(){const e=Pt(this._baseLabelEl);this._baseErrorEl.style.width=e>185?e+"px":"185px"}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):(t=e.detail.value,this._errorFormat=""),this._updateDateTimeValue(t,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;const t=e.detail.value;e.detail.error?(this._errorInvalidTime=e.detail.error,this.error=""):this._errorInvalidTime="",this._updateDateTimeValue(t,"time")}_updateDateTimeValue(e,t){const i=this.value;"date"===t?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const n=this._errorFormat||this._errorInvalidTime?void 0:this._getDateTimeString(),o=this._errorFormat||this._errorInvalidTime?void 0:n;this.value=o,!this._validateDateTimeFormat()||this._dateValue||this._timeValue||(this.value="");const a={value:this.value,oldValue:i,changedPart:t};fe(this,"change",a)}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return 3===e.length?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(""===e||void 0===e)return{date:"",time:""};const t=e.split("T"),i=t[0],n=t[1];if(e.indexOf("T")===e.length-1||t.length>2)return{date:i,time:""};if(!n)return{date:i,time:Me};const[o,a,s]=n.split(":");if(""===o||""===a||""===s)return{date:i,time:n};const r=`${o}:${a||"00"}`;return s?{date:i,time:`${r}:${s}`}:{date:i,time:r}}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}wi([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),wi([ne({type:String})],e.prototype,"error",void 0),wi([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),wi([ne({type:String})],e.prototype,"label",void 0),wi([ne({type:String,attribute:"lang",reflect:!0,converter:ut})],e.prototype,"language",void 0),wi([ne({type:String})],e.prototype,"max",void 0),wi([ne({type:String})],e.prototype,"min",void 0),wi([ne({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),wi([ne({type:Boolean})],e.prototype,"disabled",void 0),wi([ne({type:Boolean})],e.prototype,"hour12",void 0),wi([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),wi([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),wi([ne({type:Number})],e.prototype,"timeStep",void 0),wi([se(".kuc-base-date-1-6-0__input")],e.prototype,"_dateInput",void 0),wi([se("kuc-base-label-1-6-0")],e.prototype,"_baseLabelEl",void 0),wi([se("kuc-base-error-1-6-0")],e.prototype,"_baseErrorEl",void 0),window.customElements.define("kuc-datetime-picker-1-6-0",e),ve('\nkuc-datetime-picker-1-6-0,\nkuc-datetime-picker-1-6-0 *,\nkuc-datetime-picker-1-6-0:lang(en),\nkuc-datetime-picker-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-datetime-picker-1-6-0:lang(ja),\nkuc-datetime-picker-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-datetime-picker-1-6-0:lang(zh),\nkuc-datetime-picker-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-datetime-picker-1-6-0:lang(zh-TW),\nkuc-datetime-picker-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-datetime-picker-1-6-0 {\n  font-size: 14px;\n  display: inline-table;\n  vertical-align: top;\n  line-height: 1.5;\n}\nkuc-datetime-picker-1-6-0[hidden] {\n  display: none;\n}\n.kuc-datetime-picker-1-6-0__group {\n  border: none;\n  padding: 0px;\n  height: auto;\n  display: inline-block;\n  margin: 0px;\n}\n.kuc-datetime-picker-1-6-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-datetime-picker-1-6-0__group__label[hidden] {\n  display: none;\n}\n.kuc-datetime-picker-1-6-0__group__inputs {\n  display: flex;\n  max-width: 185px;\n}\n'),$i=e}})();var Ii=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Si;(()=>{if(Si=window.customElements.get("kuc-time-picker-1-6-0"),!Si){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._errorText="",this._inputValue="",this._errorInvalid="",this._inputMax="",this._inputMin="",this._inputTimeStep=30,this._valueConverted="",this._GUID=ke();const t=_t(e);Object.assign(this,t)}shouldUpdate(e){if(e.has("max")||e.has("min")){let e=this._inputMin,t=this._inputMax;if(void 0===this.max||""===this.max)t=Be;else{if(!gt(this.max))return St(this,Oe),!1;t=this.max=pt(this.max)}if(void 0===this.min||""===this.min)e=Me;else{if(!gt(this.min))return St(this,ze),!1;e=this.min=pt(this.min)}if(Ge(t,e)<0)return St(this,De),!1;this._inputMin=e,this._inputMax=t}if(e.has("timeStep")){if(!mt(this.timeStep))return St(this,Le),!1;if(!ft(this.timeStep,this._inputMax,this._inputMin))return St(this,Ue),!1;this._inputTimeStep=this.timeStep}return!(void 0!==this.value&&""!==this.value&&(gt(this.value)?(this._valueConverted=pt(this.value),e.has("value")&&(Ge(this._valueConverted,this._inputMin)<0||Ge(this._inputMax,this._valueConverted)<0)&&(St(this,He),1)):(St(this,Ne),1)))}update(e){e.has("value")&&(void 0===this.value?""===this._errorInvalid&&(this._inputValue=""):(this.value=""===this.value?this.value:this._valueConverted,this._inputValue=this.value)),(e.has("max")||e.has("min")||e.has("value"))&&void 0!==this.value&&(this._errorInvalid=""),this._errorText=this._errorInvalid||this.error,super.update(e)}render(){return L`
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
      `}updated(){this._baseLabelEl.updateComplete.then((e=>{this._updateErrorWidth()}))}_updateErrorWidth(){const e=Pt(this._baseLabelEl);this._baseErrorEl.style.width=e>85?e+"px":"85px"}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const t={value:e.detail.value,oldValue:this.value};e.detail.error?(t.value=void 0,this.value=void 0,this._errorInvalid=e.detail.error,this.error=""):(this.value=e.detail.value,this._errorInvalid=""),this._inputValue=e.detail.value,fe(this,"change",t)}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}Ii([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ii([ne({type:String})],e.prototype,"error",void 0),Ii([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ii([ne({type:String})],e.prototype,"label",void 0),Ii([ne({type:String,attribute:"lang",reflect:!0,converter:ut})],e.prototype,"language",void 0),Ii([ne({type:String})],e.prototype,"max",void 0),Ii([ne({type:String})],e.prototype,"min",void 0),Ii([ne({type:String})],e.prototype,"value",void 0),Ii([ne({type:Boolean})],e.prototype,"disabled",void 0),Ii([ne({type:Boolean})],e.prototype,"hour12",void 0),Ii([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),Ii([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),Ii([ne({type:Number})],e.prototype,"timeStep",void 0),Ii([se("kuc-base-label-1-6-0")],e.prototype,"_baseLabelEl",void 0),Ii([se("kuc-base-error-1-6-0")],e.prototype,"_baseErrorEl",void 0),window.customElements.define("kuc-time-picker-1-6-0",e),ve('\nkuc-time-picker-1-6-0,\nkuc-time-picker-1-6-0 *,\nkuc-time-picker-1-6-0:lang(en),\nkuc-time-picker-1-6-0:lang(en) * {\n  font-family: "HelveticaNeueW02-45Ligh", Arial,\n    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n}\nkuc-time-picker-1-6-0:lang(ja),\nkuc-time-picker-1-6-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-time-picker-1-6-0:lang(zh),\nkuc-time-picker-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-time-picker-1-6-0:lang(zh-TW),\nkuc-time-picker-1-6-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-time-picker-1-6-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-block;\n  vertical-align: top;\n  line-height: 1.5;\n}\n.kuc-time-picker-1-6-0__group__input {\n  position: relative;\n}\nkuc-time-picker-1-6-0[hidden] {\n  display: none;\n}\n.kuc-time-picker-1-6-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-time-picker-1-6-0__group__label {\n  padding: 4px 0px 8px 0px;\n  display: inline-block;\n  white-space: nowrap;\n}\n.kuc-time-picker-1-6-0__group__label[hidden] {\n  display: none;\n}\n'),Si=e}})();var Ci=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ei;(()=>{if(Ei=window.customElements.get("kuc-mobile-button-1-6-0"),!Ei){class e extends me{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.disabled=!1,this.visible=!0;const t=_t(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),fe(this,"click")}_getButtonColorType(){return"normal"===this.type||"submit"===this.type?this.type:"normal"}render(){return L`
        <button
          type="button"
          class="kuc-mobile-button-1-6-0__button kuc-mobile-button-1-6-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.text}
        </button>
      `}}Ci([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ci([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ci([ne({type:String})],e.prototype,"text",void 0),Ci([ne({type:String})],e.prototype,"type",void 0),Ci([ne({type:Boolean})],e.prototype,"disabled",void 0),Ci([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-button-1-6-0",e),ve('\n  kuc-mobile-button-1-6-0,\n  kuc-mobile-button-1-6-0 * {\n    font-size: 14px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-button-1-6-0:lang(zh),\n  kuc-mobile-button-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-button-1-6-0:lang(zh-TW),\n  kuc-mobile-button-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-button-1-6-0 {\n    display: inline-block;\n    vertical-align: top;\n  }\n  kuc-mobile-button-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-button-1-6-0__button {\n    min-width: 100px;\n    height: 42px;\n    padding: 12px 12px;\n    user-select: none;\n    font-weight: 700;\n    line-height: 1;\n  }\n  .kuc-mobile-button-1-6-0__button:focus {\n    outline: none;\n  }\n  .kuc-mobile-button-1-6-0__button--submit {\n    border: 2px solid #206694;\n    background-color: #206694;\n    color: #ffffff;\n    border-radius: 6px;\n  }\n  .kuc-mobile-button-1-6-0__button--submit:disabled {\n    border-color: #a5a5a5;\n    background: #a5a5a5;\n  }\n  .kuc-mobile-button-1-6-0__button--normal {\n    border: 2px solid #206694;\n    background-color: #ffffff;\n    color: #206694;\n    border-radius: 6px;\n  }\n  .kuc-mobile-button-1-6-0__button--normal:disabled {\n    color: #a5a5a5;\n    border-color: #a5a5a5;\n    cursor: default;\n  }\n'),Ei=e}})();var Ti=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Ai extends me{constructor(){super(...arguments),this.requiredIcon=!1,this.guid="",this.text=""}render(){return L`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label-1-6-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&""!==this.guid?L`
          <span class="kuc-base-mobile-label-1-6-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:L` <span class="kuc-base-mobile-label-1-6-0__text">${this.text}</span> `}}Ti([ne({type:Boolean})],Ai.prototype,"requiredIcon",void 0),Ti([ne({type:String})],Ai.prototype,"guid",void 0),Ti([ne({type:String})],Ai.prototype,"text",void 0),window.customElements.get("kuc-base-mobile-label-1-6-0")||(ve('\n  kuc-base-mobile-label-1-6-0 {\n    display: inline-table;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-base-mobile-label-1-6-0:lang(zh) ,\n  kuc-base-mobile-label-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-base-mobile-label-1-6-0:lang(zh-TW),\n  kuc-base-mobile-label-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-base-mobile-label-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-base-mobile-label-1-6-0__text {\n    text-shadow: 0 1px 0 #ffffff;\n    color: #888888;\n    white-space: normal;\n    font-size: 86%;\n  }\n  .kuc-base-mobile-label-1-6-0__required-icon {\n    font-size: 86%;\n    position: relative;\n    left: 3px;\n    color: #d01212;\n  }\n  .kuc-base-mobile-label-1-6-0__required-icon[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-mobile-label-1-6-0",Ai));var Vi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Di extends me{constructor(){super(...arguments),this.ariaLive="",this.guid="",this.text=""}render(){return L`
      ${this.ariaLive&&""!==this.ariaLive?L`
            <div
              class="kuc-base-mobile-error-1-6-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:L`
            <div
              class="kuc-base-mobile-error-1-6-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}}Vi([ne({type:String})],Di.prototype,"ariaLive",void 0),Vi([ne({type:String})],Di.prototype,"guid",void 0),Vi([ne({type:String})],Di.prototype,"text",void 0),window.customElements.get("kuc-base-mobile-error-1-6-0")||(ve('\n  kuc-base-mobile-error-1-6-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-base-mobile-error-1-6-0:lang(zh),\n  kuc-base-mobile-error-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-base-mobile-error-1-6-0:lang(zh-TW),\n  kuc-base-mobile-error-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-base-mobile-error-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-base-mobile-error-1-6-0__error {\n    line-height: 1.5;\n    color: #000000;\n    background-color: #fdffc9;\n    border: 1px solid #e5db68;\n    border-radius: 0.4em;\n    padding: 0.4em 1em;\n    margin-top: 0.3em;\n    margin-left: 0.5em;\n  }\n  .kuc-base-mobile-error-1-6-0__error[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-mobile-error-1-6-0",Di));var Hi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Li;(()=>{if(Li=window.customElements.get("kuc-mobile-checkbox-1-6-0"),!Li){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=ke();const t=_t(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!wt(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.dataset.index||"0",n=t.value,o=this.value?[...this.value]:this.value,a=this._getNewValueMapping(n,i),s=this.items.map((e=>e.value)),r=Object.values(a).filter((e=>s.indexOf(e)>-1));if(r===o)return;const l=Object.keys(a).map((e=>parseInt(e,10)));this.value=r,this.selectedIndex=l,fe(this,"change",{oldValue:o,value:r})}_getCheckboxIconSvgTemplate(e){return M`
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
       `}_getSVGStrokeValue(e){return e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC"}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return L`
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
      `}shouldUpdate(e){return e.has("items")&&!kt(this.items)?(St(this,At),!1):e.has("value")&&!yt(this.value)?(St(this,Vt),!1):!(e.has("selectedIndex")&&!wt(this.selectedIndex)&&(St(this,Ht),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return L`
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
      `}updated(){this._inputEls.forEach((e=>{e.checked=this.value.indexOf(e.value)>-1}))}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}}Hi([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Hi([ne({type:String})],e.prototype,"error",void 0),Hi([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Hi([ne({type:String})],e.prototype,"label",void 0),Hi([ne({type:Boolean})],e.prototype,"borderVisible",void 0),Hi([ne({type:Boolean})],e.prototype,"disabled",void 0),Hi([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),Hi([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),Hi([ne({type:Array})],e.prototype,"items",void 0),Hi([ne({type:Array})],e.prototype,"selectedIndex",void 0),Hi([ne({type:Array})],e.prototype,"value",void 0),Hi([re(".kuc-mobile-checkbox-1-6-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),Hi([oe()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-mobile-checkbox-1-6-0",e),ve('\n  kuc-mobile-checkbox-1-6-0,\n  kuc-mobile-checkbox-1-6-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-checkbox-1-6-0:lang(zh),\n  kuc-mobile-checkbox-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-checkbox-1-6-0:lang(zh-TW),\n  kuc-mobile-checkbox-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-checkbox-1-6-0 {\n    width: 100%;\n    display: inline-block;\n  }\n  kuc-mobile-checkbox-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-6-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    box-sizing: border-box;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__label__text {\n    text-shadow: 0 1px 0 #ffffff;\n    color: #888888;\n    white-space: normal;\n    font-size: inherit;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__label__required-icon {\n    position: relative;\n    left: 3px;\n    color: #d01212;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__label__required-icon[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu[bordervisible] {\n    border-color: #b3b3b3;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 8px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu[disabled] {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu--required[bordervisible] {\n    border-color: #cf4a38;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 8px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item[bordervisible] {\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 30px;\n    display: block;\n    border-bottom: 1px solid #b3b3b3;\n    padding: 8px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item {\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 30px;\n    display: block;\n    padding: 8px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item:last-child {\n    border-bottom: 0px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item__input[disabled]\n    + .kuc-mobile-checkbox-1-6-0__group__select-menu__item__label {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item__label {\n    position: relative;\n    margin: -7px 0px 0px 34px;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: nowrap;\n    padding: 11px 13px 13px 0px;\n    font-size: 14.04px;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    left: -30px;\n    margin-top: -13px;\n    box-sizing: border-box;\n    width: 22px;\n    height: 22px;\n    background-size: 22px 17px;\n    content: "";\n  }\n  .kuc-mobile-checkbox-1-6-0__group__error {\n    line-height: 1.5;\n    border: 1px solid #e5db68;\n    background-color: #fdffc9;\n    margin-top: 0.3em;\n    margin-left: 0.5em;\n    padding: 0.4em 1em;\n    border-radius: 0.4em;\n    color: #000000;\n  }\n  .kuc-mobile-checkbox-1-6-0__group__error[hidden] {\n    display: none;\n  }\n'),Li=e}})();var Mi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Bi;(()=>{if(Bi=window.customElements.get("kuc-mobile-dropdown-1-6-0"),!Bi){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=ke();const t=_t(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value;if(this.value===i&&this.selectedIndex===t.selectedIndex)return;const n={oldValue:this.value,value:i};this.value=i,this.selectedIndex=t.selectedIndex,fe(this,"change",n)}shouldUpdate(e){return e.has("items")&&!kt(this.items)?(St(this,At),!1):e.has("value")&&!xt(this.value)?(St(this,Dt),!1):!(e.has("selectedIndex")&&!$t(this.selectedIndex)&&(St(this,Lt),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return L`
        <option value="${e.value||""}" ?selected="${i}">
          ${void 0===e.label?e.value:e.label}
        </option>
      `}render(){return L`
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
      `}updated(e){e.has("selectedIndex")&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}}Mi([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Mi([ne({type:String})],e.prototype,"error",void 0),Mi([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Mi([ne({type:String})],e.prototype,"label",void 0),Mi([ne({type:String})],e.prototype,"value",void 0),Mi([ne({type:Number})],e.prototype,"selectedIndex",void 0),Mi([ne({type:Boolean})],e.prototype,"disabled",void 0),Mi([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),Mi([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),Mi([ne({type:Array})],e.prototype,"items",void 0),Mi([se(".kuc-mobile-dropdown-1-6-0__input-form__select__input")],e.prototype,"_selectEl",void 0),window.customElements.define("kuc-mobile-dropdown-1-6-0",e),ve('\n  kuc-mobile-dropdown-1-6-0,\n  kuc-mobile-dropdown-1-6-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-dropdown-1-6-0:lang(zh),\n  kuc-mobile-dropdown-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-dropdown-1-6-0:lang(zh-TW),\n  kuc-mobile-dropdown-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-dropdown-1-6-0 {\n    display: inline-block;\n    width: 100%;\n  }\n\n  kuc-mobile-dropdown-1-6-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__input-form {\n    word-wrap: break-word;\n    min-height: 1em;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__input-form__select {\n    display: inline-block;\n    border-radius: 0.4em;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__input-form__select.kuc--required {\n    border: 1px solid #cf4a38;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__input-form__select__input {\n    min-width: 100px;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-dropdown-1-6-0__input-form__select__input:disabled {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),Bi=e}})();var Ni=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Oi;(()=>{if(Oi=window.customElements.get("kuc-mobile-multi-choice-1-6-0"),!Oi){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=ke();const t=_t(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!wt(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=this.value?[...this.value]:this.value,n=Array.from(t.selectedOptions,(e=>e.value)),o=Array.from(t.selectedOptions,(e=>e.dataset.index)),a={value:n,oldValue:i};this.value=n,this.selectedIndex=o.map((e=>e?parseInt(e,10):0)),fe(this,"change",a)}shouldUpdate(e){return e.has("items")&&!kt(this.items)?(St(this,At),!1):e.has("value")&&!yt(this.value)?(St(this,Vt),!1):!(e.has("selectedIndex")&&!wt(this.selectedIndex)&&(St(this,Ht),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return L`
        <option
          value="${e.value||""}"
          data-index="${t}"
          ?selected="${void 0!==e.value&&i}"
        >
          ${void 0===e.label?e.value:e.label}
        </option>
      `}render(){return L`
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
      `}}Ni([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ni([ne({type:String})],e.prototype,"error",void 0),Ni([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ni([ne({type:String})],e.prototype,"label",void 0),Ni([ne({type:Boolean})],e.prototype,"disabled",void 0),Ni([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),Ni([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),Ni([ne({type:Array})],e.prototype,"items",void 0),Ni([ne({type:Array})],e.prototype,"selectedIndex",void 0),Ni([ne({type:Array})],e.prototype,"value",void 0),Ni([oe()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-mobile-multi-choice-1-6-0",e),ve('\n  kuc-mobile-multi-choice-1-6-0,\n  kuc-mobile-multi-choice-1-6-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n\n  kuc-mobile-multi-choice-1-6-0:lang(zh),\n  kuc-mobile-multi-choice-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-multi-choice-1-6-0:lang(zh-TW),\n  kuc-mobile-multi-choice-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-multi-choice-1-6-0 {\n    display: inline-block;\n    width: 100%;\n  }\n\n  kuc-mobile-multi-choice-1-6-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__input-form {\n    word-wrap: break-word;\n    min-height: 1em;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__input-form__select {\n    display: inline-block;\n    border-radius: 0.4em;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__input-form__select.kuc--required {\n    border: 1px solid #cf4a38;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__input-form__select__input {\n    min-width: 100px;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-multi-choice-1-6-0__input-form__select__input:disabled {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),Oi=e}})();var zi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ui;(()=>{if(Ui=window.customElements.get("kuc-mobile-radio-button-1-6-0"),!Ui){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=ke();const t=_t(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value,n=t.dataset.index||"0",o=parseInt(n,10);if(this.value===i&&this.selectedIndex===o)return;const a={oldValue:this.value,value:i};this.value=i,this.selectedIndex=o,fe(this,"change",a)}_getRadioIconSvgTemplate(e,t){return M`
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
        ${t?M`<circle cx="10.5" cy="10.5" r="6.5" fill="${"#5b5b5b"}"/>`:""}
      </svg>
    `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return L`
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
      `}shouldUpdate(e){return e.has("items")&&!kt(this.items)?(St(this,At),!1):e.has("value")&&!xt(this.value)?(St(this,Dt),!1):!(e.has("selectedIndex")&&!$t(this.selectedIndex)&&(St(this,Lt),1))}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return L`
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
      `}updated(){this._inputEls.forEach(((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex}))}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}}zi([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),zi([ne({type:String})],e.prototype,"error",void 0),zi([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),zi([ne({type:String})],e.prototype,"label",void 0),zi([ne({type:String})],e.prototype,"value",void 0),zi([ne({type:Number})],e.prototype,"selectedIndex",void 0),zi([ne({type:Boolean})],e.prototype,"borderVisible",void 0),zi([ne({type:Boolean})],e.prototype,"disabled",void 0),zi([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),zi([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),zi([ne({type:Array})],e.prototype,"items",void 0),zi([re(".kuc-mobile-radio-button-1-6-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),window.customElements.define("kuc-mobile-radio-button-1-6-0",e),ve('\n  kuc-mobile-radio-button-1-6-0,\n  kuc-mobile-radio-button-1-6-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n\n  kuc-mobile-radio-button-1-6-0:lang(zh) ,\n  kuc-mobile-radio-button-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-radio-button-1-6-0:lang(zh-TW),\n  kuc-mobile-radio-button-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-radio-button-1-6-0 {\n    width: 100%;\n    display: inline-block;\n  }\n\n  kuc-mobile-radio-button-1-6-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group {\n    border: none;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    vertical-align: top;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu {\n    margin-right: 0.5em;\n    margin-left: 0.5em;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu[bordervisible] {\n    border-color: #b3b3b3;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 0.4em;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu__item {\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 45px;\n    display: block;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu[bordervisible]\n    .kuc-mobile-radio-button-1-6-0__group__select-menu__item {\n    border-bottom: 1px solid #b3b3b3;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu[bordervisible]\n    .kuc-mobile-radio-button-1-6-0__group__select-menu__item:last-child {\n    border-bottom: 0px;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    box-sizing: border-box;\n    margin-top: -11px;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n    border-radius: 9px;\n    left: 8px;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu__item__label__value {\n    height: 45px;\n    line-height: 45px;\n    padding-left: 35px;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu[disabled] {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n\n  .kuc-mobile-radio-button-1-6-0__group__select-menu__item__label {\n    position: absolute;\n    white-space: nowrap;\n    width: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 100%;\n    padding: 0px;\n  }\n'),Ui=e}})();var Pi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ri;(()=>{if(Ri=window.customElements.get("kuc-mobile-text-1-6-0"),!Ri){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=ke();const t=_t(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};fe(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,fe(this,"change",i)}_handleInputText(e){e.stopPropagation();const t={value:e.target.value,data:e.data};fe(this,"input",t)}render(){return L`
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
      `}}Pi([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Pi([ne({type:String})],e.prototype,"error",void 0),Pi([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Pi([ne({type:String})],e.prototype,"label",void 0),Pi([ne({type:String})],e.prototype,"placeholder",void 0),Pi([ne({type:String})],e.prototype,"prefix",void 0),Pi([ne({type:String})],e.prototype,"suffix",void 0),Pi([ne({type:String})],e.prototype,"textAlign",void 0),Pi([ne({type:String})],e.prototype,"value",void 0),Pi([ne({type:Boolean})],e.prototype,"disabled",void 0),Pi([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),Pi([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-text-1-6-0",e),ve('\nkuc-mobile-text-1-6-0 {\n  display: block;\n  font-size: 13px;\n  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-text-1-6-0:lang(zh),\nkuc-mobile-text-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-text-1-6-0:lang(zh-TW),\nkuc-mobile-text-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-text-1-6-0[hidden] {\n  display: none;\n}\n.kuc-mobile-text-1-6-0__label {\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.5;\n  padding: 0;\n  margin: 0 0 4px 0;\n  white-space: nowrap;\n}\n.kuc-mobile-text-1-6-0__label[hidden] {\n  display: none;\n}\n.kuc-mobile-text-1-6-0__input-form {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  display: flex;\n  align-items: center;\n}\n.kuc-mobile-text-1-6-0__input-form__prefix {\n  margin-right: 4px;\n  color: #888888;\n}\n.kuc-mobile-text-1-6-0__input-form__prefix[hidden] {\n  display: none;\n}\n.kuc-mobile-text-1-6-0__input-form__input {\n  width: 100%;\n  min-width: 20px;\n  padding: 0.4em;\n  border: 1px solid #b3b3b3;\n  outline: 0;\n  box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;\n  border-radius: 0.4em;\n  box-sizing: border-box;\n  text-align: left;\n}\n.kuc-mobile-text-1-6-0__input-form__input[aria-required="true"] {\n  border: 1px solid #cf4a38;\n}\n.kuc-mobile-text-1-6-0__input-form__input[textAlign="right"] {\n  text-align: right;\n}\n.kuc-mobile-text-1-6-0__input-form__input:disabled {\n  color: #999999;\n  background-color: #d5d7d9;\n  -webkit-text-fill-color: #999999;\n  opacity: 1;\n  -webkit-opacity: 1;\n}\n.kuc-mobile-text-1-6-0__input-form__suffix {\n  margin-left: 4px;\n  color: #888888;\n}\n.kuc-mobile-text-1-6-0__input-form__suffix[hidden] {\n  display: none;\n}\n'),Ri=e}})();var ji=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Gi;(()=>{if(Gi=window.customElements.get("kuc-mobile-textarea-1-6-0"),!Gi){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=ke();const t=_t(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};fe(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,fe(this,"change",i)}_handleInputTextArea(e){e.stopPropagation();const t={value:e.target.value,data:e.data};fe(this,"input",t)}render(){return L`
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
      `}}ji([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),ji([ne({type:String})],e.prototype,"error",void 0),ji([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),ji([ne({type:String})],e.prototype,"label",void 0),ji([ne({type:String})],e.prototype,"placeholder",void 0),ji([ne({type:String})],e.prototype,"value",void 0),ji([ne({type:Boolean})],e.prototype,"disabled",void 0),ji([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),ji([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-textarea-1-6-0",e),ve('\n  kuc-mobile-textarea-1-6-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-textarea-1-6-0:lang(zh),\n  kuc-mobile-textarea-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-textarea-1-6-0:lang(zh-TW),\n  kuc-mobile-textarea-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-textarea-1-6-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-textarea-1-6-0__label {\n    padding: 0;\n    margin: 0 0 4px 0;\n    display: inline-block;\n    font-weight: bold;\n    line-height: 1.5;\n    white-space: nowrap;\n  }\n  .kuc-mobile-textarea-1-6-0__label[hidden] {\n    display: none;\n  }\n  .kuc-mobile-textarea-1-6-0__form {\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n  .kuc-mobile-textarea-1-6-0__form__textarea {\n    width: 100%;\n    height: 120px;\n    padding: 0.4em;\n    border: 1px solid #b3b3b3;\n    outline: 0;\n    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;\n    border-radius: 0.4em;\n    box-sizing: border-box;\n    vertical-align: top;\n  }\n  .kuc-mobile-textarea-1-6-0__form__textarea[aria-required="true"] {\n    border: 1px solid #cf4a38;\n  }\n  .kuc-mobile-textarea-1-6-0__form__textarea:disabled {\n    color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),Gi=e}})();var Fi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Wi;(()=>{if(Wi=window.customElements.get("kuc-mobile-notification-1-6-0"),!Wi){class e extends me{constructor(e){super(),this.className="",this.text="",this.duration=-1,this._isOpened=!1;const t=_t(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return M`
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
      `}_setAutoCloseTimer(){!Number.isFinite(this.duration)||this.duration<0||(this._clearAutoCloseTimer(),this._timeoutID=window.setTimeout((()=>{this.close()}),this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){document.body.appendChild(this),this.performUpdate(),this.classList.remove("kuc-mobile-notification-fadeout-1-6-0"),this.classList.add("kuc-mobile-notification-fadein-1-6-0"),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._isOpened=!1,this.classList.remove("kuc-mobile-notification-fadein-1-6-0"),this.classList.add("kuc-mobile-notification-fadeout-1-6-0"),this._clearAutoCloseTimer(),fe(this,"close")}render(){return L`
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
      `}}Fi([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Fi([ne({type:String})],e.prototype,"text",void 0),Fi([ne({type:Number})],e.prototype,"duration",void 0),Fi([oe()],e.prototype,"_isOpened",void 0),window.customElements.define("kuc-mobile-notification-1-6-0",e),ve('\n  kuc-mobile-notification-1-6-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n    position: relative;\n    top: -100px;\n    left: 0;\n  }\n\n  kuc-mobile-notification-1-6-0:lang(zh),\n  kuc-mobile-notification-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-notification-1-6-0:lang(zh-TW),\n  kuc-mobile-notification-1-6-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  .kuc-mobile-notification-fadein-1-6-0 {\n    animation-name: kuc-mobile-notification-fade-in-1-6-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n    width: 100%;\n    position: fixed;\n    visibility: visible;\n  }\n\n  .kuc-mobile-notification-fadeout-1-6-0 {\n    animation-name: kuc-mobile-notification-fade-out-1-6-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n    width: 100%;\n    position: fixed;\n  }\n\n  .kuc-mobile-notification-1-6-0__notification {\n    background-color: #ffffcf;\n    background: linear-gradient(#ffda4a, #ffc32c);\n    width: 100%;\n    min-height: 48px;\n    z-index: 20;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 14px;\n    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;\n    color: #333333;\n    text-align: center;\n    vertical-align: top;\n  }\n\n  .kuc-mobile-notification-1-6-0__notification__title {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 17px 44px 11px 44px;\n    margin: 0 0 0 -20px;\n    text-align: left;\n    font-weight: inherit;\n    font-family: inherit;\n    word-break: break-word;\n    white-space: pre-wrap;\n  }\n\n  .kuc-mobile-notification-1-6-0__notification__close-button {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 44px;\n    height: 48px;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    vertical-align: middle;\n    pointer-events: auto;\n    outline: none;\n  }\n  @keyframes kuc-mobile-notification-fade-in-1-6-0 {\n    0% {\n      top: -100px;\n      left: 0;\n    }\n    50% {\n      top: -50px;\n      left: 0;\n    }\n    100% {\n      top: 0;\n      left: 0;\n    }\n  }\n  @keyframes kuc-mobile-notification-fade-out-1-6-0 {\n    0% {\n      visibility: visible;\n      top: 0;\n      left: 0;\n    }\n    50% {\n      visibility: visible;\n      top: -50px;\n      left: 0;\n    }\n    100% {\n      top: -100px;\n      left: 0;\n    }\n  }\n'),Wi=e}})();var Ki=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class qi extends me{constructor(){super(...arguments),this.language="en",this.month=1,this.year=2021,this._locale=nt("en")}update(e){e.has("language")&&(this._locale=nt(this.language)),this._monthOptions=this._generateMonthOptions(),this._yearOptions=this._generateYearOptions(),super.update(e)}render(){return L`
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
    `}updated(e){e.has("month")&&this._setSelectMonthWidth(this.month),e.has("year")&&this._setYearSelectedIndex(),super.update(e)}_setSelectMonthWidth(e){const t=this._monthOptions[e-1].label;if(!t)return;const i=document.createElement("span");i.innerText=t;const n=Pt(i);this._selectMonthEl.selectedIndex=this.month-1,this._selectMonthEl.style.width=n+35+"px"}_setYearSelectedIndex(){this.year<100?this._selectYearEl.selectedIndex=this.year:this._selectYearEl.selectedIndex=100}_generateMonthOptions(){return this._locale.MONTH_SELECT.map(((e,t)=>({value:`${t+1}`,label:`${e}`})))}_generateYearOptions(){return this._getYearOptions().map((e=>({value:`${e}`,label:`${e}${this._locale.YEAR_SELECT_POSTFIX}`})))}_getYearOptions(){const e=[];Number.isInteger(this.year)||(this.year=(new Date).getFullYear());let t=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(t>=i&&(t=i-100);t<=i;t++)e.push(t);return e}_getYearMonthTemplate(){return"zh"===this.language||"ja"===this.language||"zh-TW"===this.language?L` ${this._getYearTemplate()}${this._getMonthTemplate()} `:L` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleChangeMonthDropdown(e){e.stopPropagation(),e.preventDefault();const t=e.target;this.month=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleChangeYearDropdown(e){e.stopPropagation(),e.preventDefault();const t=e.target;this.year=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),1===this.month?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),12===this.month?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const e=this.year,t=this.month;fe(this,"kuc:mobile-calendar-header-change",{value:`${e}-${t}`})}_getOptionsMonthTemplate(){return this._monthOptions.map((e=>L`
          <option
            ?selected="${parseInt(e.value,10)===this.month}"
            value="${e.value}"
          >
            ${e.label}
          </option>
        `))}_getOptionsYearTemplate(){return this._yearOptions.map((e=>L`
          <option
            ?selected="${parseInt(e.value,10)===this.year}"
            value="${e.value}"
          >
            ${e.label}
          </option>
        `))}_getMonthTemplate(){return L`
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
    `}_getYearTemplate(){return L`
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
    `}_getLeftArrowIconSvgTemplate(){return M`
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
    </svg>`}_getRightArrowIconSvgTemplate(){return M`
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
    </svg>`}}Ki([ne({type:String,attribute:"lang",reflect:!0})],qi.prototype,"language",void 0),Ki([ne({type:Number,hasChanged(e){return(t=e)>0&&t<13;var t}})],qi.prototype,"month",void 0),Ki([ne({type:Number,hasChanged(e){return(t=e)>=0&&t<1e4;var t}})],qi.prototype,"year",void 0),Ki([oe()],qi.prototype,"_monthOptions",void 0),Ki([oe()],qi.prototype,"_yearOptions",void 0),Ki([se(".kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__month__select")],qi.prototype,"_selectMonthEl",void 0),Ki([se(".kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__year__select")],qi.prototype,"_selectYearEl",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-header-1-6-0")||(ve('\nkuc-base-mobile-datetime-calendar-header-1-6-0,\nkuc-base-mobile-datetime-calendar-header-1-6-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-header-1-6-0:lang(zh),\nkuc-base-mobile-datetime-calendar-header-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-header-1-6-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-header-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    border-bottom: 1px solid #e3e7e8;\n    padding: 0;\n    white-space: nowrap;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    min-width: 40px;\n    width: 40px;\n    height: 40px;\n    overflow: hidden;\n    text-indent: 100%;\n    white-space: nowrap;\n    word-wrap: normal;\n    cursor: pointer;\n    -webkit-appearance: button;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__button-icon {\n    vertical-align: middle;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__button:focus {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center {\n    text-align: center;\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    min-width: 186px;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center\n    > :first-child {\n    padding-left: 13px;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__month,\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__year {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__month__select,\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__year__select {\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0 22.4px 0 0;\n    line-height: 40px;\n    border: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: url("data:image/svg+xml,%3Csvg%0A%20%20%20%20width%3D%2211%22%0A%20%20%20%20height%3D%226%22%0A%20%20%20%20viewBox%3D%220%200%2011%206%22%0A%20%20%20%20fill%3D%22none%22%0A%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill-rule%3D%22evenodd%22%0A%20%20%20%20%20%20clip-rule%3D%22evenodd%22%0A%20%20%20%20%20%20d%3D%22M5.5061%206L0%200L11%200L5.5061%206Z%22%0A%20%20%20%20%20%20fill%3D%22%234b4b4b%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E")\n    no-repeat center right 0.6em #ffffff;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__month__select:focus,\n.kuc-base-mobile-datetime-calendar-header-1-6-0__group__center__year__select:focus {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-header-1-6-0__month {\n    margin: 0 4px 0 4px;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-header-1-6-0",qi));var Yi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Ji extends me{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=nt("en"),this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}update(e){if(e.forEach(((e,t)=>{"language"===t&&(this._locale=nt(this.language))})),e.has("month")&&(this._month=this.month),e.has("year")&&(this._year=this.year),e.has("value")){const{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return L`
      <table class="kuc-base-mobile-datetime-calendar-body-1-6-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}_handleClickDocument(){fe(this,"kuc:mobile-calendar-body-blur",{})}_handleClickDate(e){e.preventDefault(),e.stopPropagation();const t=e.target;t.setAttribute("aria-selected","true");const i=t.getAttribute("data-date");this._dispatchClickEvent(i)}_dispatchClickEvent(e){const t={oldValue:this.value,value:e};fe(this,"kuc:mobile-calendar-body-click-date",t),this.value=e}_isToday(e){const t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_separateDateValue(e=this.value){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}_getDateClass(e,t){return t?this._isToday(e)?" kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--today":"":" kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--other-month"}_isSameDayOfMoment(e){const t=parseInt(e[1],10),i=parseInt(e[2],10),n=parseInt(e[0],10);let o=(new Date).getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(o=new Date(this.value).getDate()),o===i&&t===this._month)return!0;const a=new Date(n,this._month,0).getDate();return o>a&&a===i&&t===this._month}_getHeaderItemsTemplate(){return L`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map((e=>L`
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
    `}_getDateItemsTemplate(){const e=Pe(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return L`
      <tbody>
        ${e.map((e=>L`
            <tr>
              ${e.map((e=>{const i=e.text.split("-"),n=this._isSameDayOfMoment(i),o=parseInt(i[1],10)===this._month,a=(this.value===e.attr||n)&&o;return L`
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
    `}}Yi([ne({type:Number})],Ji.prototype,"month",void 0),Yi([ne({type:Number})],Ji.prototype,"year",void 0),Yi([ne({type:String,attribute:"lang",reflect:!0})],Ji.prototype,"language",void 0),Yi([ne({type:String,reflect:!0})],Ji.prototype,"value",void 0),Yi([oe()],Ji.prototype,"_month",void 0),Yi([oe()],Ji.prototype,"_year",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-body-1-6-0")||(ve('\nkuc-base-mobile-datetime-calendar-body-1-6-0,\nkuc-base-mobile-datetime-calendar-body-1-6-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-body-1-6-0:lang(zh),\nkuc-base-mobile-datetime-calendar-body-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-body-1-6-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-body-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table tr {\n    border-collapse: separate;\n    border-spacing: 0;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected {\n    border-spacing: 1px;\n    padding: 0px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date {\n    max-width: 40px;\n    border-spacing: 1px;\n    cursor: pointer;\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    border: 1px solid #ffffff;\n    text-align: center;\n    vertical-align: middle;\n    user-select: none;\n    color: #333333;\n    font-size: 14px;\n    font-weight: 400;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button {\n    border-spacing: 1px;\n    cursor: pointer;\n    box-sizing: border-box;\n    text-align: center;\n    vertical-align: middle;\n    color: #333333;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__header {\n    box-sizing: border-box;\n    height: 40px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-weight: 400;\n    font-size: 12px;\n    color: #333333;\n    padding: 0;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date {\n    font-size: 14px;\n}\nth.kuc-base-mobile-datetime-calendar-body-1-6-0__table__header {\n    font-weight: 700;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__header {\n    box-sizing: border-box;\n    border: 1px solid #ffffff;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button {\n    background: none;\n    cursor: pointer;\n    max-width: 40px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected {\n    border: 1px solid #206694;\n    box-sizing: border-box;\n    text-align: center;\n    font-size: 14px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-6-0__table__date__button:focus-visible {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--today {\n    color: #333333;\n    background: #d8d8d8;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--other-month {\n    color: #a5a5a5;\n}\n.kuc-base-mobile-datetime-calendar-body-1-6-0__table__date--selected:focus {\n    outline: none;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-body-1-6-0",Ji));var Zi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Qi extends me{constructor(){super(...arguments),this.language="en",this._locale=nt("en")}update(e){e.has("language")&&(this._locale=nt(this.language)),super.update(e)}_handleClickCalendarFooterButtonClose(e){e.stopPropagation(),fe(this,"kuc:mobile-calendar-footer-click-close")}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),fe(this,"kuc:mobile-calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),fe(this,"kuc:mobile-calendar-footer-click-today")}render(){return L`
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
    `}}Zi([ne({type:String,attribute:"lang",reflect:!0})],Qi.prototype,"language",void 0),Zi([oe()],Qi.prototype,"_locale",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-footer-1-6-0")||(ve('\nkuc-base-mobile-datetime-calendar-footer-1-6-0,\nkuc-base-mobile-datetime-calendar-footer-1-6-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-footer-1-6-0:lang(zh),\nkuc-base-mobile-datetime-calendar-footer-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-footer-1-6-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-footer-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n.kuc-base-mobile-datetime-calendar-footer-1-6-0__group {\n    display: flex;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 0;\n    white-space: nowrap;\n}\n.kuc-base-mobile-datetime-calendar-footer-1-6-0__group__button {\n    background: transparent;\n    border: 1px solid transparent;\n    color: #206694;\n    height: 40px;\n    cursor: pointer;\n    font-size: 14px;\n    outline: none;\n    padding: 0;\n    margin: 0;\n    font-weight: 700;\n}\n.kuc-base-mobile-datetime-calendar-footer-1-6-0__group__center {\n    width: 100%;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-footer-1-6-0",Qi));var Xi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class en extends me{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=2021}update(e){e.has("value")&&this._updateValue(),super.update(e)}render(){return L`
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
    `}updated(e){super.updated(e)}_handleClickCalendarGroup(e){e.stopPropagation()}_handleCalendarHeaderChange(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_updateValue(){""===this.value&&(this.value=Xe().slice(0,7)+"-01");const{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){const t=e.split("-");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}}Xi([ne({type:String,attribute:"lang",reflect:!0})],en.prototype,"language",void 0),Xi([ne({type:String,reflect:!0})],en.prototype,"value",void 0),Xi([oe()],en.prototype,"_month",void 0),Xi([oe()],en.prototype,"_year",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-1-6-0")||(ve("\n.kuc-base-mobile-datetime-calendar-1-6-0__group {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 290px;\n    padding: 0 10px;\n    background: #ffffff;\n    text-align: center;\n    font-size: 13px;\n    border: 1px solid #d8d8d8;\n}\n"),window.customElements.define("kuc-base-mobile-datetime-calendar-1-6-0",en));var tn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class nn extends me{constructor(){super(...arguments),this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._calendarValue="",this._inputValue=""}update(e){e.has("inputId")&&(this._GUID=this.inputId),(e.has("value")||e.has("language"))&&this._updateValueProp(),super.update(e)}render(){return L`
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
    `}updated(e){this._dateTimeCalendarVisible&&this._setCalendarPosition(),super.updated(e)}_setCalendarPosition(){const{inputToBottom:e,inputToTop:t}=lt(this),i=this._inputEl.getBoundingClientRect().height;e>=t||(this._calendarEl.style.bottom=i+2+"px",this._calendarEl.style.top="auto")}_getGroupClass(){let e="";return this.disabled&&(e+=" kuc-mobile-base-date-1-6-0__group--disabled"),this.required&&(e+=" kuc-mobile-base-date-1-6-0__group--required"),e}_handleClickOpenCalendar(e){if(this._dateTimeCalendarVisible)return e.preventDefault(),void e.stopPropagation();this._calendarValue=this._getNewCalendarValue(this._inputValue||""),this._openCalendar()}_updateValueProp(){if(this.value)return this._inputValue=Je(this.language,this.value),void(this._calendarValue=this.value);const e=Xe();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)}_getNewCalendarValue(e){if(et(this.language,e))return Ze(this.language,e);let t=this._calendarValue.slice(0,7);return""===e&&(t=this._calendarValue.slice(0,7)+"-01"),t}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,fe(this,"kuc:mobile-base-date-change",e.detail),this._btnToggleEl.focus())}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._inputValue="";let e=this.value?this.value.slice(0,7)+"-01":"";e||(e=this._calendarValue.slice(0,7)+"-01"),this._calendarValue=e,this._dispathDateChangeCustomEvent("")}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const e=Xe();this._dispathDateChangeCustomEvent(e)}_handleClickCalendarFooterButtonClose(){this._closeCalendar(),this._btnToggleEl.focus()}_handleCalendarBlurBody(e){e.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(e){const t={value:e,oldValue:this.value};this.value=e,fe(this,"kuc:mobile-base-date-change",t),this._btnToggleEl.focus()}_getCalendarTemplate(){return this._dateTimeCalendarVisible?L`
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
        `:""}_getCalendarIconTemplate(){return L`
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C9.44772 4 9 4.44772 9 5V6H6C4.89543 6 4 6.89543 4 8V21C4 22.1046 4.89543 23 6 23H22C23.1046 23 24 22.1046 24 21V8C24 6.89543 23.1046 6 22 6H19V5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5V6H11V5C11 4.44772 10.5523 4 10 4ZM9 8V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V8H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V8H22V11H6V8H9ZM6 13V21H22V13H6Z"
          fill="#4b4b4b"
        />
      </svg>
    `}}tn([ne({type:String})],nn.prototype,"inputId",void 0),tn([ne({type:String,attribute:"lang",reflect:!0})],nn.prototype,"language",void 0),tn([ne({type:String,reflect:!0})],nn.prototype,"value",void 0),tn([ne({type:Boolean})],nn.prototype,"disabled",void 0),tn([ne({type:Boolean})],nn.prototype,"inputAriaInvalid",void 0),tn([ne({type:Boolean})],nn.prototype,"required",void 0),tn([se(".kuc-mobile-base-date-1-6-0__group__button")],nn.prototype,"_btnToggleEl",void 0),tn([se(".kuc-mobile-base-date-1-6-0__group__input")],nn.prototype,"_inputEl",void 0),tn([se(".kuc-base-mobile-date-1-6-0__calendar")],nn.prototype,"_calendarEl",void 0),tn([oe()],nn.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-mobile-base-date-1-6-0")||(ve('\nkuc-mobile-base-date-1-6-0,\nkuc-mobile-base-date-1-6-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-base-date-1-6-0:lang(zh),\nkuc-mobile-base-date-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-base-date-1-6-0:lang(zh-TW),\nkuc-mobile-base-date-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n.kuc-mobile-base-date-1-6-0__group {\n    display: flex;\n    align-items: center;\n    position: relative;\n    border-radius: 5.148px;\n    background-color: #ffffff;\n}\n.kuc-mobile-base-date-1-6-0__group__input[aria-required="true"] {\n    border-color: #cf4a38;\n}\ninput.kuc-mobile-base-date-1-6-0__group__input {\n    color: #000000;\n    width: 100%;\n    height: 31.28px;\n    font-size: 99%;\n    -webkit-flex-grow: 1;\n    flex-grow: 1;\n    padding: 5.148px;\n    border-radius: 5.148px;\n    box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;\n    border: 1px solid #b3b3b3;\n    font-weight: 400;\n    -webkit-appearance: none;\n    appearance: none;\n    outline: 0;\n    background: transparent;\n    box-sizing: border-box;\n}\n.kuc-mobile-base-date-1-6-0__group--disabled {\n    background-color: #d5d7d9;\n    opacity: 1;\n}\n.kuc-mobile-base-date-1-6-0__group--disabled input {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n}\n.kuc-base-mobile-date-1-6-0__calendar {\n    position: absolute;\n    left: 0;\n    top: 39px;\n    z-index: 1000;\n}\n.kuc-mobile-base-date-1-6-0__group__button {\n    position: absolute;\n    display: flex;\n    right: 10px;\n    background-color: transparent;\n    border: 0;\n    padding: 0;\n    height: 100%;\n    align-items: center;\n}\n'),window.customElements.define("kuc-mobile-base-date-1-6-0",nn));var on=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let an;(()=>{if(an=window.customElements.get("kuc-mobile-date-picker-1-6-0"),!an){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._dateConverted="",this._inputValue="",this._GUID=ke();const t=_t(e);Object.assign(this,t)}shouldUpdate(e){return!(void 0!==this.value&&""!==this.value&&(bt(this.value)?(this._dateConverted=ht(this.value),""!==this._dateConverted&&!vt(this._dateConverted)&&(St(this,Ne),1)):(St(this,Ne),1)))}willUpdate(e){e.has("value")&&void 0!==this.value&&""!==this.value&&(this.value=this._dateConverted)}update(e){e.has("value")&&this._updateInputValue(),super.update(e)}render(){return L`
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
      `}_updateInputValue(){void 0!==this.value&&""!==this.value?this._inputValue=this.value:this._inputValue=""}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const t={oldValue:this.value,value:""};this.value=e.detail.value,t.value=this.value,this._disptchChangeEvent(t)}_disptchChangeEvent(e){fe(this,"change",e)}}on([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),on([ne({type:String})],e.prototype,"error",void 0),on([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),on([ne({type:String})],e.prototype,"label",void 0),on([ne({type:Boolean})],e.prototype,"disabled",void 0),on([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),on([ne({type:String,attribute:"lang",reflect:!0,converter:ut})],e.prototype,"language",void 0),on([ne({type:String})],e.prototype,"value",void 0),on([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),on([oe()],e.prototype,"_inputValue",void 0),window.customElements.define("kuc-mobile-date-picker-1-6-0",e),ve('\nkuc-mobile-date-picker-1-6-0,\nkuc-mobile-date-picker-1-6-0 * {\n  color: #333333;\n  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-date-picker-1-6-0:lang(zh),\nkuc-mobile-date-picker-1-6-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-date-picker-1-6-0:lang(zh-TW),\nkuc-mobile-date-picker-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-date-picker-1-6-0 {\n  font-size: 13px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  width: 100%;\n}\nkuc-mobile-date-picker-1-6-0[hidden] {\n  display: none;\n}\n.kuc-mobile-date-picker-1-6-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-mobile-date-picker-1-6-0__group__label {\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.5;\n  padding: 0px;\n  white-space: nowrap;\n  margin: 0 0 4px 0;\n}\n.kuc-mobile-date-picker-1-6-0__group__base__date {\n  width: 130px;\n  margin-right: 0.5em;\n  margin-left: 0.5em;\n}\n.kuc-mobile-date-picker-1-6-0__group__label[hidden] {\n  display: none;\n}\n.kuc-mobile-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\n.kuc-mobile-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-mobile-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-mobile-date-picker-1-6-0__group input.kuc-base-date-1-6-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n'),an=e}})();var sn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class rn extends me{constructor(e){super(),this.guid="",this.language="en",this.value="",this.disabled=!1,this.hour12=!1,this.required=!1,this._timeStep=1,this._hours="",this._minutes="",this._suffix="",this._locale=nt("en");const t=_t(e);Object.assign(this,t)}update(e){e.has("language")&&(this._locale=nt(this.language)),e.has("hour12")&&(this._hourOptions=((e=!1)=>e?ot("AM").concat(ot("PM")):(()=>{const e=[];e.push({value:"00",label:"00"});for(let t=1;t<=23;t++)e.push({value:tt(t),label:`${tt(t)}`});return e})())(this.hour12)),e.has("_timeStep")&&(this._minuteOptions=((e=1)=>{const t=[];for(let i=0;i<=59;i+=e)t.push({value:tt(i),label:tt(i)});return t})(this._timeStep)),super.update(e)}render(){return L`
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
    `}updated(e){e.has("value")&&this._updateInputValue(),super.update(e)}_updateInputValue(){const e=((e,t)=>{const i={hours:"",minutes:"",suffix:""},n=e.split(":"),o=parseInt(n[0],10),a=parseInt(n[1],10),s=o%Ee;return isNaN(s)||(i.hours=tt(t?Fe(s):s),i.suffix=t?We(s):""),isNaN(a)||(i.minutes=tt(a)),i})(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||"",this._setValueToInput(e)}_setValueToInput(e){this._minutesEl.value=e.minutes,e.suffix?this._hoursEl.value=e.suffix+" "+e.hours:this._hoursEl.value=e.hours}_handleChangeMinutes(e){e.preventDefault(),e.stopPropagation();const t=this._getTimeValueString(),i=e.target.value;this._minutes=i;const n=this._getTimeValueString();this.value=n,this._dispatchEventTimeChange(n,t)}_handleChangeHours(e){e.preventDefault(),e.stopPropagation();const t=this._getTimeValueString(),i=e.target.value.split(" ");2===i.length?(this._hours=i[1],this._suffix=i[0]):(this._hours=i[0],this._suffix="");const n=this._getTimeValueString();this.value=n,this._dispatchEventTimeChange(n,t)}_getTimeValueString(){const e=`${this._hours}:${this._minutes}`;return this._suffix?Ke(`${e} ${this._suffix}`):Ke(e)}_dispatchEventTimeChange(e,t){const i=":"===e?"":e,n={value:i,oldValue:":"===t?"":t};n.error=gt(i)?"":this._locale.INVALID_TIME_FORMAT,fe(this,"kuc:base-mobile-time-change",n)}_getOptionsMinuteTemplate(){return this._minuteOptions.map((e=>L` <option value="${e.value}">${e.label}</option> `))}_getOptionsHourTemplate(){return this._hourOptions.map((e=>L` <option value="${e.value}">${e.label}</option> `))}}sn([ne({type:String})],rn.prototype,"guid",void 0),sn([ne({type:String,attribute:"lang",reflect:!0})],rn.prototype,"language",void 0),sn([ne({type:String})],rn.prototype,"value",void 0),sn([ne({type:Boolean})],rn.prototype,"disabled",void 0),sn([ne({type:Boolean})],rn.prototype,"hour12",void 0),sn([ne({type:Boolean})],rn.prototype,"required",void 0),sn([oe()],rn.prototype,"_timeStep",void 0),sn([oe()],rn.prototype,"_hours",void 0),sn([oe()],rn.prototype,"_minutes",void 0),sn([oe()],rn.prototype,"_suffix",void 0),sn([oe()],rn.prototype,"_hourOptions",void 0),sn([oe()],rn.prototype,"_minuteOptions",void 0),sn([se(".kuc-base-mobile-time-1-6-0__group__hours")],rn.prototype,"_hoursEl",void 0),sn([se(".kuc-base-mobile-time-1-6-0__group__minutes")],rn.prototype,"_minutesEl",void 0),window.customElements.get("kuc-base-mobile-time-1-6-0")||(ve('\n    kuc-base-mobile-time-1-6-0,\n    kuc-base-mobile-time-1-6-0 * {\n        font-size: 13px;\n        font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n        "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n        "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n    }\n    kuc-base-mobile-time-1-6-0:lang(zh),\n    kuc-base-mobile-time-1-6-0:lang(zh) * {\n        font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n        Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n        Verdana, sans-serif;\n    }\n    kuc-base-mobile-time-1-6-0:lang(zh-TW),\n    kuc-base-mobile-time-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n        Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n        Verdana,sans-serif\n    }\n    kuc-base-mobile-time-1-6-0 {\n        width: 100%;\n        display: inline-block;\n        vertical-align: top;\n    }\n    kuc-base-mobile-time-1-6-0[hidden] {\n        display: none;\n    }\n    .kuc-base-mobile-time-1-6-0__group {\n        padding: 0;\n        margin: 0;\n        height: 31.28px;\n        border: 1px solid #b3b3b3;\n        border-radius: 5.2px;\n        box-sizing: border-box;\n        background-color: #ffffff;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-align-items: center;\n        align-items: center;\n        box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;\n    }\n    .kuc-base-mobile-time-1-6-0__group--required {\n        border-color: #cf4a38;\n    }\n    .kuc-base-mobile-time-1-6-0__group__hours {\n        padding: 5.148px 7.722px;\n    }\n    .kuc-base-mobile-time-1-6-0__group__minutes {\n        padding: 5.148px 7.722px;\n        -webkit-flex-grow: 1;\n        flex-grow: 1;\n    }\n    .kuc-base-mobile-time-1-6-0__group__hours,\n    .kuc-base-mobile-time-1-6-0__group__minutes {\n        font-size: 99%;\n        height: 100%;\n        color: #000000;\n        border: none;\n        border-radius: 5.148px;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background-color: transparent;\n    }\n    .kuc-base-mobile-time-1-6-0__group__colon {\n        color: #000000;\n    }\n    .kuc-base-mobile-time-1-6-0__group__hours:disabled\n        + .kuc-base-mobile-time-1-6-0__group__colon {\n        color: #999999;\n        -webkit-text-fill-color: #999999;\n        opacity: 1;\n    }\n    .kuc-base-mobile-time-1-6-0__group--disabled {\n        color: #999999;\n        -webkit-text-fill-color: #999999;\n        background-color: #d5d7d9;\n        opacity: 1;\n    }\n    .kuc-base-mobile-time-1-6-0__group__hours:disabled,\n    .kuc-base-mobile-time-1-6-0__group__minutes:disabled {\n        color: #999999;\n        -webkit-text-fill-color: #999999;\n        opacity: 1;\n    }\n    .kuc-base-mobile-time-1-6-0__group__hours:focus {\n        outline: none;\n    }\n    .kuc-base-mobile-time-1-6-0__group__minutes:focus {\n        outline: none;\n    }\n'),window.customElements.define("kuc-base-mobile-time-1-6-0",rn));var ln=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let dn;(()=>{if(dn=window.customElements.get("kuc-mobile-time-picker-1-6-0"),!dn){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue="",this._errorFormat="",this._isSelectError=!1,this._GUID=ke();const t=_t(e);Object.assign(this,t)}shouldUpdate(e){return void 0===this.value||""===this.value||!!gt(this.value)||(St(this,Ne),!1)}willUpdate(){void 0!==this.value&&""!==this.value&&(this.value=pt(this.value))}update(e){e.has("value")&&!this._isSelectError&&(void 0===this.value?this._inputValue="":this._inputValue=this.value||"",this._errorFormat=""),super.update(e)}render(){return L`
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
      `}updated(){this._isSelectError=!1}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const t={value:e.detail.value,oldValue:this.value};if(this._inputValue=e.detail.value,e.detail.error)return this._isSelectError=!0,this._errorFormat=e.detail.error,this.value=void 0,t.value=void 0,this.error="",void fe(this,"change",t);this._isSelectError=!1,this._errorFormat="",this.value=e.detail.value,fe(this,"change",t)}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}ln([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),ln([ne({type:String})],e.prototype,"error",void 0),ln([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),ln([ne({type:String})],e.prototype,"label",void 0),ln([ne({type:String,attribute:"lang",reflect:!0,converter:ut})],e.prototype,"language",void 0),ln([ne({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),ln([ne({type:Boolean})],e.prototype,"disabled",void 0),ln([ne({type:Boolean})],e.prototype,"hour12",void 0),ln([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),ln([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),ln([oe()],e.prototype,"_inputValue",void 0),ln([oe()],e.prototype,"_errorFormat",void 0),window.customElements.define("kuc-mobile-time-picker-1-6-0",e),ve('\n    kuc-mobile-time-picker-1-6-0,\n    kuc-mobile-time-picker-1-6-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n        "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n        "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n    }\n    kuc-mobile-time-picker-1-6-0:lang(zh),\n    kuc-mobile-time-picker-1-6-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n        Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n        Verdana, sans-serif;\n    }\n    kuc-mobile-time-picker-1-6-0:lang(zh-TW),\n    kuc-mobile-time-picker-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n        Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n        Verdana,sans-serif\n    }\n    kuc-mobile-time-picker-1-6-0 {\n    font-size: 13px;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    }\n    kuc-mobile-time-picker-1-6-0[hidden] {\n    display: none;\n    }\n    .kuc-mobile-time-picker-1-6-0__group__label {\n    display: inline-block;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n    }\n    .kuc-mobile-time-picker-1-6-0__group__label[hidden] {\n    display: none;\n    }\n    .kuc-base-mobile-time-1-6-0__group__wrapper {\n    padding-left: 0.5em;\n    max-width: 10px;\n    }\n'),dn=e}})();var un=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let cn;(()=>{if(cn=window.customElements.get("kuc-mobile-datetime-picker-1-6-0"),!cn){class e extends me{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._previousTimeValue="",this._previousDateValue="",this._dateValue="",this._timeValue="",this._errorFormat="",this._errorText="",this._GUID=ke();const t=_t(e);Object.assign(this,t)}shouldUpdate(e){return void 0===this.value||""===this.value||("string"!=typeof this.value?(St(this,Ne),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=ht(this._dateAndTime.date),!(!It(this._dateAndTime.date,this._dateAndTime.time)||!vt(this._dateConverted))||(St(this,Ne),!1)))}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueAndErrorWhenUIChange():(this._errorFormat="",this._updateErrorText(),this._updateValueWhenSetter())}update(e){e.has("value")&&(void 0===this.value&&this._setUndefinedValue(),""===this.value&&this._setEmptyValue()),super.update(e)}_updateValueWhenSetter(){this._errorFormat="",""!==this.value&&void 0!==this.value?(this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()):this._previousTimeValue=""}_setDateTimeValueSeparate(e,t){this._dateValue=t,this._timeValue=this._dateValue&&vt(t)?pt(e.time.slice(0,5)):this._previousTimeValue}_updateValueAndErrorWhenUIChange(){const e=this._checkDateTimeFormat();this.value=e?this.value:void 0,this._updateErrorText()}_checkDateTimeFormat(){const e=Boolean(this._timeValue)&&!this._dateValue,t=Boolean(this._dateValue)&&!this._timeValue;return!this._errorFormat&&!e&&!t}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI)return;return this._dateValue="",void(this._timeValue="")}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue=""}_getDateTimeValue(e){if(""===e||void 0===e)return{date:"",time:""};const t=e.split("T"),i=t[0],n=t[1];if(e.indexOf("T")===e.length-1||t.length>2)return{date:i,time:""};if(!n)return{date:i,time:"00:00"};const[o,a,s]=n.split(":"),r=`${o}:${a||"00"}`;return s?{date:i,time:`${r}:${s}`}:{date:i,time:r}}render(){return L`
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
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){const e=["en","ja","zh","zh-TW"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleDateChange(e){if(e.stopPropagation(),e.preventDefault(),e.detail.value===this._dateValue)return;this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):t=e.detail.value,this._updateDateTimeValue(t,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=this._timeValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):this._errorFormat="",t=e.detail.value,this._updateDateTimeValue(t,"time")}_updateDateTimeValue(e,t){const i=this.value;"date"===t?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const n=this._errorFormat?void 0:this._getDateTimeString(),o=this._errorFormat?void 0:n;this.value=o;const a=this._errorFormat?void 0:n;this.value=a,fe(this,"change",{value:o,oldValue:i,changedPart:t})}_getDateTimeString(){if(""===this._dateValue&&""===this._timeValue)return"";if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return 3===e.length?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}}un([ne({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),un([ne({type:String})],e.prototype,"error",void 0),un([ne({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),un([ne({type:String})],e.prototype,"label",void 0),un([ne({type:String,attribute:"lang",reflect:!0,converter:ut})],e.prototype,"language",void 0),un([ne({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),un([ne({type:Boolean})],e.prototype,"disabled",void 0),un([ne({type:Boolean})],e.prototype,"hour12",void 0),un([ne({type:Boolean})],e.prototype,"requiredIcon",void 0),un([ne({type:Boolean,attribute:"hidden",reflect:!0,converter:dt})],e.prototype,"visible",void 0),un([oe()],e.prototype,"_dateValue",void 0),un([oe()],e.prototype,"_timeValue",void 0),un([oe()],e.prototype,"_errorFormat",void 0),un([oe()],e.prototype,"_errorText",void 0),window.customElements.define("kuc-mobile-datetime-picker-1-6-0",e),ve('\nkuc-mobile-datetime-picker-1-6-0,\nkuc-mobile-datetime-picker-1-6-0 * {\ncolor: #333333;\nfont-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-datetime-picker-1-6-0:lang(zh),\nkuc-mobile-datetime-picker-1-6-0:lang(zh) * {\nfont-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-datetime-picker-1-6-0:lang(zh-TW),\nkuc-mobile-datetime-picker-1-6-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-datetime-picker-1-6-0 {\nfont-size: 13px;\ncolor: #333333;\ndisplay: inline-table;\nvertical-align: top;\nwidth: 100%;\n}\nkuc-mobile-datetime-picker-1-6-0[hidden] {\ndisplay: none;\n}\n.kuc-mobile-datetime-picker-1-6-0__group {\nborder: 0;\npadding: 0;\n}\n.kuc-mobile-datetime-picker-1-6-0__group__label {\ndisplay: inline-block;\nfont-weight: bold;\nline-height: 1.5;\npadding: 0px;\nwhite-space: nowrap;\nmargin: 0 0 4px 0;\n}\n.kuc-mobile-datetime-picker-1-6-0__group__label[hidden] {\ndisplay: none;\n}\n.kuc-mobile-datetime-picker-1-6-0__group__input {\ndisplay: flex;\nalign-items: center;\nmargin-right: 0.5em;\nmargin-left: 0.5em;\n}\n.kuc-mobile-datetime-picker-1-6-0__group__input--date {\nwidth: 130px;\nmargin-right: 10px;\n}\n.kuc-mobile-datetime-picker-1-6-0__group__input--time {\nmax-width: 10px;\n}\n'),cn=e}})();var hn={d:(e,t)=>{for(var i in t)hn.o(t,i)&&!hn.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};hn.d({},{i:()=>pn});const pn="1.6.0";var _n={d:(e,t)=>{for(var i in t)_n.o(t,i)&&!_n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};_n.d({},{t:()=>bn});const bn=void 0;new Tt({text:"保存",type:"submit",id:"callhistory-submit",visible:!0,disabled:!1});const gn=e=>(e=(e=e.replace(/\\n/g,"\\n").replace(/\\'/g,"\\'").replace(/\\"/g,'\\"').replace(/\\&/g,"\\&").replace(/\\r/g,"\\r").replace(/\\t/g,"\\t").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f")).replace(/[\u0000-\u0019]+/g,""),JSON.parse(e));jQuery.noConflict(),((e,t)=>{kintone.events.on("app.record.detail.show",(i=>{const n=(e=>{let t=kintone.plugin.app.getConfig(e);for(let e in t){const i=t[e];try{t[e]=gn(i)}catch{continue}}return t})(t);if(console.log(n),!n.app)return i;const o=n.settings,a=o.map((e=>e.field));e("#record-gaia").children().children().children().each(((t,i)=>{const n=e(i).children(),s=e(n[0]),r=s.text();if(!a.includes(s.text()))return;const l=a.indexOf(r),d=o[l].tips.replace(/\n|\r\n|\r/g,"<br>");s.append(e("<span>").addClass("tips-icon").attr("id","tool-tips-"+t).text("？").append(e("<div>").addClass("baloon").html(d).hide()).on({mouseenter:function(){e(this).children(".baloon").fadeIn("fast")},mouseleave:function(){e(this).children(".baloon").fadeOut("fast")}})),console.log(s.children())}))}))})(jQuery,kintone.$PLUGIN_ID)})();