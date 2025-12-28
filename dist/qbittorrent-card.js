/*! For license information please see qbittorrent-card.js.LICENSE.txt */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(i,t,s)},n=(s,i)=>{if(e)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,_=g?g.emptyScript:"",v=f.reactiveElementPolyfillSupport,$=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i;const o=r.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??y)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,v?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.1.1");const w=globalThis,x=w.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+C,P=`<${k}>`,U=document,O=()=>U.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,q=/^(?:script|style|textarea|title)$/i,I=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),B=I(1),V=(I(2),I(3),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),J=new WeakMap,K=U.createTreeWalker(U,129);function F(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(n.lastIndex=c,l=n.exec(s),null!==l);)c=n.lastIndex,n===H?"!--"===l[1]?n=N:void 0!==l[1]?n=R:void 0!==l[2]?(q.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=r??H,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?D:'"'===l[3]?j:L):n===j||n===L?n=D:n===N||n===R?n=H:(n=D,r=void 0);const d=n===D&&t[e+1].startsWith("/>")?" ":"";o+=n===H?s+P:h>=0?(i.push(a),s.slice(0,h)+E+s.slice(h)+C+d):s+C+(-2===h?e:d)}return[F(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class G{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,h]=Z(t,e);if(this.el=G.createElement(l,s),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=K.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=h[o++],s=i.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?et:"?"===n[1]?st:"@"===n[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(q.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),K.nextNode(),a.push({type:2,index:++r});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){if(e===V)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=M(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);K.currentNode=i;let r=K.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=K.nextNode(),o++)}return K.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(F(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new G(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Y(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=Q(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Q(this,i[s+n],e,n),a===V&&(a=this._$AH[n]),o||=!M(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends tt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??W)===V)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(G,Y),(w.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;class at extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Y(e.insertBefore(O(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.1");const ht=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y},dt=(t=ct,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function pt(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function ut(t){return pt({...t,state:!0,attribute:!1})}const ft={hu:JSON.parse('{"states":{"downloading":"Letöltés","seeding":"Seedelés","uploading":"Seedelés","stalledUP":"Seedelés (várakozik)","pausedDL":"Szüneteltetve (letöltés)","pausedUP":"Szüneteltetve (feltöltés)","queuedDL":"Sorban (letöltés)","queuedUP":"Sorban (feltöltés)","checkingDL":"Ellenőrzés (letöltés)","checkingUP":"Ellenőrzés (feltöltés)","checkingResumeData":"Adatok ellenőrzése","moving":"Mozgatás","missingFiles":"Hiányzó fájlok","error":"Hiba","unknown":"Ismeretlen"},"ui":{"no_downloads":"Nincsenek aktív letöltések","remaining_time":"Hátralévő idő:","config_error":"Konfigurációs hiba","entity_not_found":"Entitás nem található","failed_to_load":"Nem sikerült betölteni a torrenteket"}}'),en:JSON.parse('{"states":{"downloading":"Downloading","seeding":"Seeding","uploading":"Seeding","stalledUP":"Seedelés (várakozik)","pausedDL":"Szüneteltetve (letöltés)","pausedUP":"Szüneteltetve (feltöltés)","queuedDL":"Sorban (letöltés)","queuedUP":"Sorban (feltöltés)","checkingDL":"Ellenőrzés (letöltés)","checkingUP":"Ellenőrzés (feltöltés)","checkingResumeData":"Adatok ellenőrzése","moving":"Mozgatás","missingFiles":"Hiányzó fájlok","error":"Hiba","unknown":"Ismeretlen"},"ui":{"no_downloads":"Nincsenek aktív letöltések","remaining_time":"Hátralévő idő:","config_error":"Konfigurációs hiba","entity_not_found":"Entitás nem található","failed_to_load":"Nem sikerült betölteni a torrenteket"}}')};function gt(t){const e=t.split("-")[0].toLowerCase();return ft[e]||ft.en}var _t=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n};let vt=class extends at{constructor(){super(...arguments),this._torrents=[],this._loading=!1,this._error=null,this._translations=null}static getConfigElement(){return document.createElement("qbittorrent-card-editor")}static getStubConfig(){return{type:"custom:qbittorrent-card",title:"qBittorrent Letöltések",entity:"sensor.qBittorrent_state",show_speed:!0,show_eta:!0,refresh_interval:30}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={...t,type:"custom:qbittorrent-card",title:t.title||"qBittorrent Downloads",show_speed:!1!==t.show_speed,show_eta:!1!==t.show_eta,refresh_interval:t.refresh_interval||30}}connectedCallback(){super.connectedCallback(),this._loadTorrents(),this._config?.refresh_interval&&(this._refreshInterval=window.setInterval(()=>this._loadTorrents(),1e3*this._config.refresh_interval))}disconnectedCallback(){super.disconnectedCallback(),this._refreshInterval&&clearInterval(this._refreshInterval)}updated(t){if(t.has("hass")&&this.hass){const t=this.hass.locale?.language||"en";this._translations=gt(t)}if(t.has("hass")&&this.hass&&this._config?.entity){const e=this.hass.states[this._config.entity];if(e&&t.get("hass")){const s=t.get("hass"),i=s?.states[this._config.entity];i&&i.last_updated===e.last_updated||this._loadTorrents()}}}async _loadTorrents(){if(this.hass&&this._config?.entity){this._loading=!0,this._error=null;try{let t="";this.hass.states[this._config.entity],t=await this.getDeviceId("sensor.qbittorrent_status")??"",console.error("Device ID:"+t);const e=await this.hass.callWS({type:"call_service",domain:"qbittorrent",service:"get_torrents",service_data:{torrent_filter:"all",device_id:t},return_response:!0});console.error(JSON.stringify(e,null,2));let s=[];s=Object.entries(e.response.torrents).map(([t,e])=>({name:t,info:e})),Array.isArray(s)&&s.length>0?this._torrents=s.map(t=>({name:t.name||t.title||"Unknown",state:t.info.status||"unknown",progress:parseFloat(t.info.percent_done),size:t.size||t.total_size||0,dlspeed:t.dlspeed||t.download_speed||0,upspeed:t.upspeed||t.upload_speed||0,eta:t.info.eta||"",category:t.category||"",hash:t.hash||""})):this._torrents=[]}catch(t){console.error("Error loading torrents:",t),this._error=t.message||this._localize("failed_to_load"),this._torrents=[]}finally{this._loading=!1}}}async getDeviceId(t){try{return(await this.hass.callWS({type:"config/entity_registry/get",entity_id:t})).device_id}catch(t){return console.error("Nem sikerült lekérni a device_id-t:",t),null}}_formatBytes(t){if(0===t)return"0 B";const e=Math.floor(Math.log(t)/Math.log(1024));return Math.round(t/Math.pow(1024,e)*100)/100+" "+["B","KB","MB","GB","TB"][e]}_formatSpeed(t){return this._formatBytes(t)+"/s"}_formatETA(t){if(t<=0||864e4===t)return"∞";const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60);return e>0?`${e}h ${s}m`:s>0?`${s}m ${i}s`:`${i}s`}_getTranslations(){if(!this._translations){const t=this.hass?.locale?.language||"en";this._translations=gt(t)}return this._translations}_getStateLabel(t){return this._getTranslations().states[t]||t}_getStateColor(t){return{downloading:"var(--primary-color)",seeding:"var(--success-color)",uploading:"var(--success-color)",stalledUP:"var(--secondary-text-color)",pausedDL:"var(--warning-color)",pausedUP:"var(--warning-color)",queuedDL:"var(--info-color)",queuedUP:"var(--info-color)",checkingDL:"var(--info-color)",checkingUP:"var(--info-color)",error:"var(--error-color)",unknown:"var(--disabled-color)"}[t]||"var(--disabled-color)"}_localize(t){return this._getTranslations().ui[t]}render(){return this._config?B`
      <ha-card>
        <div class="card-header">
          <div class="header-title">${this._config.title}</div>
          ${this._loading?B`<ha-circular-progress size="small"></ha-circular-progress>`:""}
        </div>
        
        ${this._error?B`
          <div class="error-message">
            <ha-icon icon="mdi:alert-circle"></ha-icon>
            ${this._error}
          </div>
        `:""}

        ${0!==this._torrents.length||this._loading?"":B`
          <div class="empty-state">
            <ha-icon icon="mdi:download-off"></ha-icon>
            <p>${this._localize("no_downloads")}</p>
          </div>
        `}

        <div class="torrent-list">
          ${this._torrents.map(t=>B`
            <div class="torrent-item">
              <div class="torrent-header">
                <div class="torrent-name" title="${t.name}">${t.name}</div>
                <div class="torrent-state" style="color: ${this._getStateColor(t.state)}">
                  ${this._getStateLabel(t.state)}
                </div>
              </div>
              
              <div class="torrent-progress">
                <div class="progress-bar">
                  <div 
                    class="progress-fill" 
                    style="width: ${t.progress}%; background-color: ${this._getStateColor(t.state)}"
                  ></div>
                </div>
                <div class="progress-text">${Math.round(t.progress)}%</div>
              </div>

              ${"None"!=t.eta?B`
                <div class="torrent-info">
                <span>${this._localize("remaining_time")} ${t.eta}</span>
                </div>
                `:""}
            </div>
          `)}
        </div>
      </ha-card>
    `:B`<div class="error">${this._localize("config_error")}</div>`}};vt.styles=o`
    :host {
      display: block;
    }

    ha-card {
      padding: 16px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .header-title {
      font-size: 1.2em;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .error-message {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px;
      background-color: var(--error-color);
      color: var(--text-primary-color);
      border-radius: 4px;
      margin-bottom: 16px;
    }

    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: var(--secondary-text-color);
    }

    .empty-state ha-icon {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .torrent-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .torrent-item {
      padding: 8px;
      background-color: var(--card-background-color);
      transition: box-shadow 0.2s;
    }

    .torrent-item2 {
      padding: 16px;
      background-color: var(--card-background-color);
      border-radius: 8px;
      border: 1px solid var(--divider-color);
      transition: box-shadow 0.2s;
    }

    .torrent-item:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .torrent-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 4px;
      gap: 12px;
    }

    .torrent-name {
      flex: 1;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.95em;
    }

    .torrent-state {
      font-size: 0.85em;
      font-weight: 500;
      white-space: nowrap;
      padding: 4px 8px;
      border-radius: 4px;
      background-color: var(--card-background-color);
    }

    .torrent-progress {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .progress-bar {
      flex: 1;
      height: 8px;
      background-color: var(--divider-color);
      border-radius: 4px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      transition: width 0.3s ease;
      border-radius: 4px;
    }

    .progress-text {
      font-size: 0.85em;
      font-weight: 500;
      color: var(--secondary-text-color);
      min-width: 40px;
      text-align: right;
    }

    .torrent-info {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-top: 8px;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.85em;
      color: var(--secondary-text-color);
    }

    .info-item ha-icon {
      width: 16px;
      height: 16px;
    }

    .error {
      padding: 16px;
      color: var(--error-color);
      text-align: center;
    }
  `,_t([pt({attribute:!1})],vt.prototype,"hass",void 0),_t([ut()],vt.prototype,"_config",void 0),_t([ut()],vt.prototype,"_torrents",void 0),_t([ut()],vt.prototype,"_loading",void 0),_t([ut()],vt.prototype,"_error",void 0),vt=_t([ht("qbittorrent-card")],vt);var $t=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n};let mt=class extends at{setConfig(t){this.config=t}_valueChanged(t){if(!this.config)return;const e=t.target;let s,i;if(t instanceof CustomEvent&&void 0!==t.detail?.value?(s=t.detail.value,i=e.configValue):"input"===t.type?(s=e.value,i=e.configValue):(s=void 0!==e.checked?e.checked:e.value,i=e.configValue),this.config[i]===s)return;const r={...this.config};void 0===s||""===s?delete r[i]:"refresh_interval"===i?r.refresh_interval=parseInt(String(s),10):"title"===i?r.title=String(s):"entity"===i&&(r.entity=String(s));const o=new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0});this.dispatchEvent(o)}render(){return this.hass&&this.config?B`
      <div class="card-config">
        <div class="config-row">
          <ha-entity-picker
            label="Entity"
            .hass=${this.hass}
            .value=${this.config.entity||""}
            .configValue=${"entity"}
            @value-changed=${this._valueChanged}
            .includeDomains=${["sensor","switch","button"]}
            allow-custom-entity
            required
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <ha-textfield
            label="Title"
            .configValue=${"title"}
            .value=${this.config.title||"qBittorrent Downloads"}
            @change=${this._valueChanged}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="config-row">
          <ha-textfield
            label="Refresh Interval (seconds)"
            type="number"
            .configValue=${"refresh_interval"}
            .value=${String(this.config.refresh_interval||30)}
            @change=${this._valueChanged}
            @input=${this._valueChanged}
            min="5"
            step="1"
          ></ha-textfield>
        </div>
      </div>
    `:B``}};mt.styles=o`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    .config-row {
      display: flex;
      flex-direction: column;
    }

    ha-textfield {
      width: 100%;
    }
  `,$t([pt({attribute:!1})],mt.prototype,"hass",void 0),$t([pt({attribute:!1})],mt.prototype,"config",void 0),mt=$t([ht("qbittorrent-card-editor")],mt);