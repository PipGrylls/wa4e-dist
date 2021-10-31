const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),r=new Map;class n{constructor(t,r){if(this._$cssResult$=!0,r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=r.get(this.cssText);return t&&void 0===e&&(r.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let r="";for(const e of t.cssRules)r+=e.cssText;return(t=>new n("string"==typeof t?t:t+"",e))(r)})(t):t;var i;const o=window.reactiveElementPolyfillSupport,s={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},l=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:s,reflect:!1,hasChanged:l};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const n=this._$Eh(r,e);void 0!==n&&(this._$Eu.set(n,r),t.push(n))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const a=this[t];this[e]=n,this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const r=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{t?e.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((t=>{const r=document.createElement("style"),n=window.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,e.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$Eg(t,e,r=u){var n,a;const i=this.constructor._$Eh(t,r);if(void 0!==i&&!0===r.reflect){const o=(null!==(a=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==a?a:s.toAttribute)(e,r.type);this._$Ei=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Ei=null}}_$AK(t,e){var r,n,a;const i=this.constructor,o=i._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=i.getPropertyOptions(o),l=t.converter,u=null!==(a=null!==(n=null===(r=l)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof l?l:null)&&void 0!==a?a:s.fromAttribute;this._$Ei=o,this[o]=u(e,t.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||l)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var h;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null==o||o({ReactiveElement:c}),(null!==(i=globalThis.reactiveElementVersions)&&void 0!==i?i:globalThis.reactiveElementVersions=[]).push("1.0.1");const f=globalThis.trustedTypes,p=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,d=`lit$${(Math.random()+"").slice(9)}$`,m="?"+d,v=`<${m}>`,g=document,y=(t="")=>g.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,M=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,A=/"/g,S=/^(?:script|style|textarea)$/i,E=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),C=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),I=new WeakMap,P=g.createTreeWalker(g,129,null,!1),O=(t,e)=>{const r=t.length-1,n=[];let a,i=2===e?"<svg>":"",o=b;for(let e=0;e<r;e++){const r=t[e];let s,l,u=-1,c=0;for(;c<r.length&&(o.lastIndex=c,l=o.exec(r),null!==l);)c=o.lastIndex,o===b?"!--"===l[1]?o=w:void 0!==l[1]?o=M:void 0!==l[2]?(S.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=T):void 0!==l[3]&&(o=T):o===T?">"===l[0]?(o=null!=a?a:b,u=-1):void 0===l[1]?u=-2:(u=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?T:'"'===l[3]?A:k):o===A||o===k?o=T:o===w||o===M?o=b:(o=T,a=void 0);const h=o===T&&t[e+1].startsWith("/>")?" ":"";i+=o===b?r+v:u>=0?(n.push(s),r.slice(0,u)+"$lit$"+r.slice(u)+d+h):r+d+(-2===u?(n.push(void 0),e):h)}const s=i+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==p?p.createHTML(s):s,n]};class z{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let a=0,i=0;const o=t.length-1,s=this.parts,[l,u]=O(t,e);if(this.el=z.createElement(l,r),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=P.nextNode())&&s.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(d)){const r=u[i++];if(t.push(e),void 0!==r){const t=n.getAttribute(r.toLowerCase()+"$lit$").split(d),e=/([.?@])?(.*)/.exec(r);s.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?j:"@"===e[1]?U:N})}else s.push({type:6,index:a})}for(const e of t)n.removeAttribute(e)}if(S.test(n.tagName)){const t=n.textContent.split(d),e=t.length-1;if(e>0){n.textContent=f?f.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],y()),P.nextNode(),s.push({type:2,index:++a});n.append(t[e],y())}}}else if(8===n.nodeType)if(n.data===m)s.push({type:2,index:a});else{let t=-1;for(;-1!==(t=n.data.indexOf(d,t+1));)s.push({type:7,index:a}),t+=d.length-1}a++}}static createElement(t,e){const r=g.createElement("template");return r.innerHTML=t,r}}function D(t,e,r=t,n){var a,i,o,s;if(e===C)return e;let l=void 0!==n?null===(a=r._$Cl)||void 0===a?void 0:a[n]:r._$Cu;const u=x(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==u&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===u?l=void 0:(l=new u(t),l._$AT(t,r,n)),void 0!==n?(null!==(o=(s=r)._$Cl)&&void 0!==o?o:s._$Cl=[])[n]=l:r._$Cu=l),void 0!==l&&(e=D(t,l._$AS(t,e.values),l,n)),e}class R{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:g).importNode(r,!0);P.currentNode=a;let i=P.nextNode(),o=0,s=0,l=n[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new F(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new V(i,this,t)),this.v.push(e),l=n[++s]}o!==(null==l?void 0:l.index)&&(i=P.nextNode(),o++)}return a}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class F{constructor(t,e,r,n){var a;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=null===(a=null==n?void 0:n.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),x(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==C&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return _(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==L&&x(this._$AH)?this._$AA.nextSibling.data=t:this.S(g.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,a="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=z.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.m(r);else{const t=new R(a,this),e=t.p(this.options);t.m(r),this.S(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new z(t)),e}M(t){_(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const a of t)n===e.length?e.push(r=new F(this.A(y()),this.A(y()),this,this.options)):r=e[n],r._$AI(a),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class N{constructor(t,e,r,n,a){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const a=this.strings;let i=!1;if(void 0===a)t=D(this,t,e,0),i=!x(t)||t!==this._$AH&&t!==C,i&&(this._$AH=t);else{const n=t;let o,s;for(t=a[0],o=0;o<a.length-1;o++)s=D(this,n[r+o],e,o),s===C&&(s=this._$AH[o]),i||(i=!x(s)||s!==this._$AH[o]),s===L?t=L:t!==L&&(t+=(null!=s?s:"")+a[o+1]),this._$AH[o]=s}i&&!n&&this.k(t)}k(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends N{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===L?void 0:t}}class j extends N{constructor(){super(...arguments),this.type=4}k(t){t&&t!==L?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class U extends N{constructor(t,e,r,n,a){super(t,e,r,n,a),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=D(this,t,e,0))&&void 0!==r?r:L)===C)return;const n=this._$AH,a=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==L&&(n===L||a);a&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const H=window.litHtmlPolyfillSupport;var q,G;null==H||H(z,F),(null!==(h=globalThis.litHtmlVersions)&&void 0!==h?h:globalThis.litHtmlVersions=[]).push("2.0.1");class Y extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,r)=>{var n,a;const i=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let o=i._$litPart$;if(void 0===o){const t=null!==(a=null==r?void 0:r.renderBefore)&&void 0!==a?a:null;i._$litPart$=o=new F(e.insertBefore(y(),t),t,void 0,null!=r?r:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return C}}Y.finalized=!0,Y._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:Y});const W=globalThis.litElementPolyfillSupport;null==W||W({LitElement:Y}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.0.1");class Z extends Y{createRenderRoot(){return this}}let X,$=t=>t;customElements.define("menu-tile",class extends Z{static get properties(){return{appConf:{type:Object,attribute:!1}}}constructor(){super(),this.appConf={}}render(){return this.appPage=`/public/app_modules/${this.appConf.appName}/index.html`,this.appImg=`/public/img/${this.appConf.appName}.png`,[super.render(),E(X||(X=$`
        <div
          class="card text-center text-wrap align-items-center p-3"
          style="height: 325px; width: 325px; background-color: ${0}"
        >
          <img
            class="card-img-top"
            style="max-width: 150px; max-height: 150px;"
            src=${0}
            alt="${0} icon"
          />
          <div class="card-body">
            <h5 class="card-title">${0}</h5>
            <p class="card-text">${0}</p>
            <a href=${0} class="stretched-link"></a>
          </div>
        </div>
      `),this.appConf.appColour,this.appImg,this.appConf.appName,E([this.appConf.appTitle]),this.appConf.appDescription,this.appPage)]}});let K,J=t=>t;customElements.define("footer-element",class extends Z{constructor(){super(),this.contactEmail="susan.gourvenec@southampton.ac.uk",this.contactEmailLink=this.contactEmail.link(`mailto:${this.contactEmail}`),this.footerText="The author shall not be liable for any direct, consequential or incidental damages arising out of the use of this program. The entire risk as to the quality, performance and application of the program lies with the user. This page was established and is maintained by Professor Susan Gourvenec, University of Southampton, as a teaching tool and to assist research dissemination."}render(){return[super.render(),E(K||(K=J`
        <hr class="width-constrained" id="footer-hr" />
        <div class='container'>
        <footer class="footer footer-text">
          <span>
            ${0}
            <a href=${0}>${0}</a>
          </span>
        </footer>
        </div>
      `),this.footerText,this.contactEmailLink,this.contactEmail)]}});let Q,tt=t=>t;customElements.define("header-element",class extends Z{constructor(){super(),this.homePage="/public/index.html"}static get properties(){return{pageTitle:{type:String}}}render(){return[super.render(),E(Q||(Q=tt`
        <nav class="navbar navbar-expand-lg" style="background-color: #03a9f4">
          <div class="col-2">
            <a href="${0}"
              ><img
                class="img-fluid mx-auto d-block"
                src="/public/img/home.png"
                alt="Home"
            /></a>
          </div>
          <div class="col-6">
            <p class="h3 text-center text-wrap text-white">
              ${0}
            </p>
          </div>
          <div class="col">
            <p class="h6 text-center text-white">Web Apps for Engineers</p>
          </div>
        </nav>
      `),this.homePage,E([this.pageTitle]))]}});let et,rt,nt,at,it,ot,st,lt,ut,ct,ht=t=>t;class ft extends Z{static get properties(){return{appConf:{type:Object},appName:{type:String}}}connectedCallback(){super.connectedCallback(),window.addEventListener("update-children",(()=>this.requestUpdate()))}disconnectedCallback(){window.removeEventListener("update-children",(()=>this.requestUpdate())),super.disconnectedCallback()}updated(t){super.updated(t),this.tileLoaded()}async tileLoaded(){const t=new CustomEvent("loaded",{bubbles:!0,composed:!0});await this.updateComplete,this.dispatchEvent(t)}makeNestedFields(t){return E(et||(et=ht`${0}`),Object.keys(this.appConf.fields[`${t}`]).map((e=>E(rt||(rt=ht`<div
          class="input-group"
          style="display: ${0};"
        >
          <label
            class="input-group-text text-wrap text-break font-size-sm"
            for="${0}"
            style="width: 30%; text-align: left;"
            >${0}</label
          >
          <input
            class="form-control bg-light"
            disabled
            id="${0}"
            .value="${0}"
          />
          <label
            class="input-group-text text-wrap text-break"
            for="${0}"
            style="min-width: 20%; text-align: left;"
            >${0}</label
          >
        </div>`),this.appConf.fields[t][e][3],e,E([this.appConf.fields[t][e][2]]),e,this.appConf.fields[t][e][0],e,E([this.appConf.fields[t][e][1]])))))}makeNestedCallbackFields(t){return E(nt||(nt=ht` ${0}`),Object.keys(this.appConf.fields[`${t}`]).map((e=>E(at||(at=ht`<div
          class="input-group"
          style="display: ${0};"
        >
          <span
            class="input-group-text col-auto text-wrap text-break"
            for="${0}"
            style="width: 25%; text-align: right;"
            >${0}</span
          >
          <input
            class="form-control"
            id="${0}"
            .value="${0}"
            @change=${0}
          />
          <span
            class="input-group-text col-auto text-wrap text-break"
            for="${0}"
            style="width: 20%; text-align: left;"
            >${0}</span
          >
        </div>`),this.appConf.fields[t][e][3],e,E([this.appConf.fields[t][e][2]]),e,this.appConf.fields[t][e][0],(r=>{this.appConf.fields[t][e][0]=Number(r.target.value)}),e,E([this.appConf.fields[t][e][1]])))))}getSubComponents(t,e){const r=[],n=[],a=[];for(const[i,o]of t.entries())o.index===e&&("beforeTitle"===o.position?r.push(i):"afterTitle"===o.position?n.push(i):"afterContent"===o.position&&a.push(i));return[r,n,a]}makeSubComponent(t){const e=this.subComponents[t];return E(it||(it=ht`
      ${0}
    `),"radio-tile"===e.type?E(ot||(ot=ht` <div style="display: ${0};">
            <radio-tile
              .appConf=${0}
              @clear="${0}"
            ></radio-tile>
          </div>`),e.display,e,(()=>{this.clearOutput()})):"table-tile"===e.type?E(st||(st=ht` <div>
            <table-tile .appConf=${0}></table-tile>
          </div>`),e):"input-table"===e.type?E(lt||(lt=ht` <div>
            <input-table .appConf=${0}></input-table>
          </div>`),e):"test-tile"===e.type?E(ut||(ut=ht` <div>
            <test-tile .appConf=${0}></test-tile>
          </div>`),e):E(ct||(ct=ht`<p>Component ${0} Not Recognised</p>`),e.type))}}let pt,dt,mt,vt,gt,yt,xt=t=>t;customElements.define("input-tile",class extends ft{render(){return this.formFields=this.appConf.fields,this.subComponents=this.appConf.subComponents,this.input_fields=this.arrangeFields(),[super.render(),E(pt||(pt=xt`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${0}</h2>
          <!-- input form autogenerated fields -->
          <div>${0}</div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
            <!-- buttons -->
            <button
              class="btn btn-primary col-sm-12 col-md-6"
              @click=${0}
            >
              SUBMIT
            </button>
            <button
              class="btn btn-outline-secondary col"
              @click=${0}
            >
              RESET
            </button>
            <button
              class="btn btn-outline-info col"
              @click=${0}
            >
              HELP
            </button>
          </div>
        </div>
      `),E([this.appConf.title]),this.input_fields,(()=>this.appUpdate()),(()=>this.tileReload()),(()=>this.showHelp()))]}arrangeFields(){return E(dt||(dt=xt`${0}`),Object.keys(this.formFields).map(((t,e)=>{const[r,n,a]=this.getSubComponents(this.subComponents,e);return E(mt||(mt=xt`
        <div>
          ${0}
        </div>
        <h3>${0}</h3>
        <div>
          ${0}
        </div>
        <div>${0}</div>
        <div>
          ${0}
        </div>
      `),E(vt||(vt=xt`${0}`),r.map((t=>this.makeSubComponent(t)))),E([t]),E(gt||(gt=xt`${0}`),n.map((t=>this.makeSubComponent(t)))),this.makeNestedCallbackFields(t),E(yt||(yt=xt`${0}`),a.map((t=>this.makeSubComponent(t)))))})))}appUpdate(){const t=new CustomEvent("updated",{bubbles:!0,composed:!0});this.dispatchEvent(t)}tileReload(){const t=new CustomEvent("reset",{bubbles:!0,composed:!0});this.dispatchEvent(t)}showHelp(){window.alert(this.appConf.helpText)}});let _t,bt,wt,Mt,Tt,kt,At=t=>t;customElements.define("derived-input-tile",class extends ft{render(){return this.formFields=this.appConf.fields,this.subComponents=this.appConf.subComponents,this.derivedInputFields=this.arrangeFields(),[super.render(),E(_t||(_t=At`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${0}</h2>
          <!-- input form autogenerated fields -->
          ${0}
        </div>
      `),E([this.appConf.title]),this.derivedInputFields)]}arrangeFields(){return E(bt||(bt=At`${0}`),Object.keys(this.formFields).map(((t,e)=>{const[r,n,a]=this.getSubComponents(this.subComponents,e);return E(wt||(wt=At`
        <div>
          ${0}
        </div>
        <h3>${0}</h3>
        <div>
          ${0}
        </div>
        <div>${0}</div>
        <div>
          ${0}
        </div>
      `),E(Mt||(Mt=At`${0}`),r.map((t=>this.makeSubComponent(t)))),E([t]),E(Tt||(Tt=At`${0}`),n.map((t=>this.makeSubComponent(t)))),this.makeNestedFields(t),E(kt||(kt=At`${0}`),a.map((t=>this.makeSubComponent(t)))))})))}});let St,Et=t=>t;customElements.define("image-tile",class extends ft{render(){return[super.render(),E(St||(St=Et`
        <img
          class="img-fluid"
          width=${0}
          height=${0}
          src=${0}
          alt="caisson diagrams"
        />
      `),this.appConf.img_w,this.appConf.img_h,this.appConf.img_pth)]}});let Ct,Lt,It,Pt,Ot,zt,Dt=t=>t;function Rt(){return(Rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}customElements.define("output-tile",class extends ft{render(){return this.formFields=this.appConf.fields,this.subComponents=this.appConf.subComponents,this.outputFields=this.arrangeFields(),[super.render(),E(Ct||(Ct=Dt`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${0}</h2>
          <!-- Here are the forms attributes -->
          <p>${0}</p>
        </div>
      `),E([this.appConf.title]),this.outputFields)]}arrangeFields(){return E(Lt||(Lt=Dt`${0}`),Object.keys(this.formFields).map(((t,e)=>{const[r,n,a]=this.getSubComponents(this.subComponents,e);return E(It||(It=Dt`
        <div>
          ${0}
        </div>
        <h3>${0}</h3>
        <div>
          ${0}
        </div>
        <div>${0}</div>
        <div>
          ${0}
        </div>
      ${0}
    `),Object.entries(this.appConf.plots).map((t=>E(rw||(rw=nw`
            <div class="col py-2">
              <div class="card" style="display: ${0};">
                <div class="responsive-plot" id=${0}></div>
              </div>
            </div>
          `),t[1].display,t[0])))),[super.render(),this.graphHtml]}firstUpdated(t){super.firstUpdated(t),this.renderGraph()}async renderGraph(){await this.updateComplete,Object.entries(this.appConf.plots).map((t=>Yb.newPlot(document.getElementById(t[0]),null,t[1].layout)))}async configGraph(){await this.updateComplete,Object.entries(this.appConf.plots).map((t=>this.updateGraph(t))),this.appConf.updateConf.noNewData=!1,this.appConf.updateConf.clearData=!1}async updateGraph(t){this.appConf.updateConf.clearData&&(this.appConf.plots[t[0]].data=[]),this.appConf.updateConf.noNewData||(t[1].addLines?this.appConf.plots[t[0]].data=this.appConf.plots[t[0]].data.concat(t[1].dataFun.apply(this,Object.entries(t[1].args).map((t=>this.appConf.fields[t[1]])))):this.appConf.plots[t[0]].data=t[1].dataFun.apply(this,Object.entries(t[1].args).map((t=>this.appConf.fields[t[1]])))),Yb.react(document.getElementById(t[0]),this.appConf.plots[t[0]].data,this.appConf.plots[t[0]].layout)}});let aw,iw,ow,sw,lw,uw,cw=t=>t;customElements.define("optimization-tile",class extends ft{render(){return this.checkOptions=this.appConf.options,this.formFields=this.appConf.fields,this.subComponents=this.appConf.subComponents,this.outputFields=this.arrangeFields(),[super.render(),E(aw||(aw=cw`
        <h2>${0}</h2>
        <p>${0}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
          <!-- buttons -->
          <button
            class="btn btn-primary col-sm-12 col-md-6"
            @click=${0}
          >
            OPTIMIZE
          </button>
        </div>
      `),E([this.appConf.title]),this.outputFields,(()=>this.appOptimize()))]}connectedCallback(){super.connectedCallback(),window.addEventListener("clear",(()=>this.requestUpdate()))}disconnectedCallback(){window.removeEventListener("clear",(()=>this.requestUpdate())),super.disconnectedCallback()}appOptimize(){const t=new CustomEvent("optimize",{bubbles:!0,composed:!0});this.clearOutput(),this.dispatchEvent(t)}clearOutput(){this.formFields[""].solution[0]=null}arrangeFields(){return E(iw||(iw=cw`${0}`),Object.keys(this.formFields).map(((t,e)=>{const[r,n,a]=this.getSubComponents(this.subComponents,e);return E(ow||(ow=cw`
        <div>
          ${0}
        </div>
        <h3>${0}</h3>
        <div>
          ${0}
        </div>
        <div>${0}</div>
        <div>
          ${0}
        </div>
      `),E(sw||(sw=cw`${0}`),r.map((t=>this.makeSubComponent(t)))),E([t]),E(lw||(lw=cw`${0}`),n.map((t=>this.makeSubComponent(t)))),this.makeNestedFields(t),E(uw||(uw=cw`${0}`),a.map((t=>this.makeSubComponent(t)))))})))}});let hw,fw,pw,dw,mw,vw,gw=t=>t;customElements.define("text-tile",class extends ft{render(){return this.subComponents=this.appConf.subComponents,this.text=this.appConf.text,this.tileContent=this.arrangeFields(),[super.render(),E(hw||(hw=gw`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${0}</h2>
          <!-- Here are the forms attributes -->
          <p>${0}</p>
        </div>
      `),E([this.appConf.title]),this.tileContent)]}arrangeFields(){return E(fw||(fw=gw`${0}`),Object.keys(this.text).map(((t,e)=>{let r,n,a;void 0===this.subComponents?[r,n,a]=[[],[],[]]:[r,n,a]=this.getSubComponents(this.subComponents,e);return E(pw||(pw=gw`
        <div>
          ${0}
        </div>
        <p class="${0}">
          ${0}
        </p>
        <div>
          ${0}
        </div>
        <div>
          ${0}
        </div>
      `),E(dw||(dw=gw`${0}`),r.map((t=>this.makeSubComponent(t)))),this.text[t].format,E([this.text[t].text]),E(mw||(mw=gw`${0}`),n.map((t=>this.makeSubComponent(t)))),E(vw||(vw=gw`${0}`),a.map((t=>this.makeSubComponent(t)))))})))}});var yw="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0;function xw(t,e,r){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){Mw(n.response,e,r)},n.onerror=function(){console.error("could not download file")},n.send()}function _w(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return e.status>=200&&e.status<=299}function bw(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var ww=yw.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),Mw=yw.saveAs||("object"!=typeof window||window!==yw?function(){}:"download"in HTMLAnchorElement.prototype&&!ww?function(t,e,r){var n=yw.URL||yw.webkitURL,a=document.createElement("a");e=e||t.name||"download",a.download=e,a.rel="noopener","string"==typeof t?(a.href=t,a.origin!==location.origin?_w(a.href)?xw(t,e,r):bw(a,a.target="_blank"):bw(a)):(a.href=n.createObjectURL(t),setTimeout((function(){n.revokeObjectURL(a.href)}),4e4),setTimeout((function(){bw(a)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,e,r){if(e=e||t.name||"download","string"==typeof t)if(_w(t))xw(t,e,r);else{var n=document.createElement("a");n.href=t,n.target="_blank",setTimeout((function(){bw(n)}))}else navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}(t,r),e)}:function(t,e,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof t)return xw(t,e,r);var a="application/octet-stream"===t.type,i=/constructor/i.test(yw.HTMLElement)||yw.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||a&&i||ww)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=o?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=t:location=t,n=null},s.readAsDataURL(t)}else{var l=yw.URL||yw.webkitURL,u=l.createObjectURL(t);n?n.location=u:location.href=u,n=null,setTimeout((function(){l.revokeObjectURL(u)}),4e4)}});yw.saveAs=Mw.saveAs=Mw;var Tw="object"==typeof global&&global&&global.Object===Object&&global,kw="object"==typeof self&&self&&self.Object===Object&&self,Aw=Tw||kw||Function("return this")(),Sw=Aw.Symbol,Ew=Object.prototype,Cw=Ew.hasOwnProperty,Lw=Ew.toString,Iw=Sw?Sw.toStringTag:void 0;var Pw=Object.prototype.toString;var Ow=Sw?Sw.toStringTag:void 0;function zw(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Ow&&Ow in Object(t)?function(t){var e=Cw.call(t,Iw),r=t[Iw];try{t[Iw]=void 0;var n=!0}catch(t){}var a=Lw.call(t);return n&&(e?t[Iw]=r:delete t[Iw]),a}(t):function(t){return Pw.call(t)}(t)}function Dw(t){return null!=t&&"object"==typeof t}var Rw=Array.isArray;function Fw(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Nw(t){return t}function Bw(t){if(!Fw(t))return!1;var e=zw(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}var jw=Aw["__core-js_shared__"],Uw=function(){var t=/[^.]+$/.exec(jw&&jw.keys&&jw.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var Vw=Function.prototype.toString;function Hw(t){if(null!=t){try{return Vw.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var qw=/^\[object .+?Constructor\]$/,Gw=Function.prototype,Yw=Object.prototype,Ww=Gw.toString,Zw=Yw.hasOwnProperty,Xw=RegExp("^"+Ww.call(Zw).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $w(t){return!(!Fw(t)||function(t){return!!Uw&&Uw in t}(t))&&(Bw(t)?Xw:qw).test(Hw(t))}function Kw(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return $w(r)?r:void 0}var Jw=Kw(Aw,"WeakMap"),Qw=Object.create,tM=function(){function t(){}return function(e){if(!Fw(e))return{};if(Qw)return Qw(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();function eM(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function rM(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var nM=Date.now;var aM=function(){try{var t=Kw(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),iM=function(t){var e=0,r=0;return function(){var n=nM(),a=16-(n-r);if(r=n,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(aM?function(t,e){return aM(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:Nw);var oM=/^(?:0|[1-9]\d*)$/;function sM(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&oM.test(t))&&t>-1&&t%1==0&&t<e}function lM(t,e,r){"__proto__"==e&&aM?aM(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function uM(t,e){return t===e||t!=t&&e!=e}var cM=Object.prototype.hasOwnProperty;function hM(t,e,r){var n=t[e];cM.call(t,e)&&uM(n,r)&&(void 0!==r||e in t)||lM(t,e,r)}function fM(t,e,r,n){var a=!r;r||(r={});for(var i=-1,o=e.length;++i<o;){var s=e[i],l=n?n(r[s],t[s],s,r,t):void 0;void 0===l&&(l=t[s]),a?lM(r,s,l):hM(r,s,l)}return r}var pM=Math.max;function dM(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function mM(t){return null!=t&&dM(t.length)&&!Bw(t)}var vM=Object.prototype;function gM(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||vM)}function yM(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}function xM(t){return Dw(t)&&"[object Arguments]"==zw(t)}var _M=Object.prototype,bM=_M.hasOwnProperty,wM=_M.propertyIsEnumerable,MM=xM(function(){return arguments}())?xM:function(t){return Dw(t)&&bM.call(t,"callee")&&!wM.call(t,"callee")};var TM="object"==typeof exports&&exports&&!exports.nodeType&&exports,kM=TM&&"object"==typeof module&&module&&!module.nodeType&&module,AM=kM&&kM.exports===TM?Aw.Buffer:void 0,SM=(AM?AM.isBuffer:void 0)||function(){return!1},EM={};function CM(t){return function(e){return t(e)}}EM["[object Float32Array]"]=EM["[object Float64Array]"]=EM["[object Int8Array]"]=EM["[object Int16Array]"]=EM["[object Int32Array]"]=EM["[object Uint8Array]"]=EM["[object Uint8ClampedArray]"]=EM["[object Uint16Array]"]=EM["[object Uint32Array]"]=!0,EM["[object Arguments]"]=EM["[object Array]"]=EM["[object ArrayBuffer]"]=EM["[object Boolean]"]=EM["[object DataView]"]=EM["[object Date]"]=EM["[object Error]"]=EM["[object Function]"]=EM["[object Map]"]=EM["[object Number]"]=EM["[object Object]"]=EM["[object RegExp]"]=EM["[object Set]"]=EM["[object String]"]=EM["[object WeakMap]"]=!1;var LM="object"==typeof exports&&exports&&!exports.nodeType&&exports,IM=LM&&"object"==typeof module&&module&&!module.nodeType&&module,PM=IM&&IM.exports===LM&&Tw.process,OM=function(){try{var t=IM&&IM.require&&IM.require("util").types;return t||PM&&PM.binding&&PM.binding("util")}catch(t){}}(),zM=OM&&OM.isTypedArray,DM=zM?CM(zM):function(t){return Dw(t)&&dM(t.length)&&!!EM[zw(t)]},RM=Object.prototype.hasOwnProperty;function FM(t,e){var r=Rw(t),n=!r&&MM(t),a=!r&&!n&&SM(t),i=!r&&!n&&!a&&DM(t),o=r||n||a||i,s=o?yM(t.length,String):[],l=s.length;for(var u in t)!e&&!RM.call(t,u)||o&&("length"==u||a&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||sM(u,l))||s.push(u);return s}function NM(t,e){return function(r){return t(e(r))}}var BM=NM(Object.keys,Object),jM=Object.prototype.hasOwnProperty;function UM(t){return mM(t)?FM(t):function(t){if(!gM(t))return BM(t);var e=[];for(var r in Object(t))jM.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}var VM=Object.prototype.hasOwnProperty;function HM(t){if(!Fw(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=gM(t),r=[];for(var n in t)("constructor"!=n||!e&&VM.call(t,n))&&r.push(n);return r}function qM(t){return mM(t)?FM(t,!0):HM(t)}var GM=Kw(Object,"create");var YM=Object.prototype.hasOwnProperty;var WM=Object.prototype.hasOwnProperty;function ZM(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function XM(t,e){for(var r=t.length;r--;)if(uM(t[r][0],e))return r;return-1}ZM.prototype.clear=function(){this.__data__=GM?GM(null):{},this.size=0},ZM.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ZM.prototype.get=function(t){var e=this.__data__;if(GM){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return YM.call(e,t)?e[t]:void 0},ZM.prototype.has=function(t){var e=this.__data__;return GM?void 0!==e[t]:WM.call(e,t)},ZM.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=GM&&void 0===e?"__lodash_hash_undefined__":e,this};var $M=Array.prototype.splice;function KM(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}KM.prototype.clear=function(){this.__data__=[],this.size=0},KM.prototype.delete=function(t){var e=this.__data__,r=XM(e,t);return!(r<0)&&(r==e.length-1?e.pop():$M.call(e,r,1),--this.size,!0)},KM.prototype.get=function(t){var e=this.__data__,r=XM(e,t);return r<0?void 0:e[r][1]},KM.prototype.has=function(t){return XM(this.__data__,t)>-1},KM.prototype.set=function(t,e){var r=this.__data__,n=XM(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var JM=Kw(Aw,"Map");function QM(t,e){var r,n,a=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?a["string"==typeof e?"string":"hash"]:a.map}function tT(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function eT(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t}tT.prototype.clear=function(){this.size=0,this.__data__={hash:new ZM,map:new(JM||KM),string:new ZM}},tT.prototype.delete=function(t){var e=QM(this,t).delete(t);return this.size-=e?1:0,e},tT.prototype.get=function(t){return QM(this,t).get(t)},tT.prototype.has=function(t){return QM(this,t).has(t)},tT.prototype.set=function(t,e){var r=QM(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var rT=NM(Object.getPrototypeOf,Object);function nT(t){var e=this.__data__=new KM(t);this.size=e.size}nT.prototype.clear=function(){this.__data__=new KM,this.size=0},nT.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},nT.prototype.get=function(t){return this.__data__.get(t)},nT.prototype.has=function(t){return this.__data__.has(t)},nT.prototype.set=function(t,e){var r=this.__data__;if(r instanceof KM){var n=r.__data__;if(!JM||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new tT(n)}return r.set(t,e),this.size=r.size,this};var aT="object"==typeof exports&&exports&&!exports.nodeType&&exports,iT=aT&&"object"==typeof module&&module&&!module.nodeType&&module,oT=iT&&iT.exports===aT?Aw.Buffer:void 0,sT=oT?oT.allocUnsafe:void 0;function lT(t,e){for(var r=-1,n=null==t?0:t.length,a=0,i=[];++r<n;){var o=t[r];e(o,r,t)&&(i[a++]=o)}return i}function uT(){return[]}var cT=Object.prototype.propertyIsEnumerable,hT=Object.getOwnPropertySymbols,fT=hT?function(t){return null==t?[]:(t=Object(t),lT(hT(t),(function(e){return cT.call(t,e)})))}:uT;var pT=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)eT(e,fT(t)),t=rT(t);return e}:uT;function dT(t,e,r){var n=e(t);return Rw(t)?n:eT(n,r(t))}function mT(t){return dT(t,UM,fT)}function vT(t){return dT(t,qM,pT)}var gT=Kw(Aw,"DataView"),yT=Kw(Aw,"Promise"),xT=Kw(Aw,"Set"),_T=Hw(gT),bT=Hw(JM),wT=Hw(yT),MT=Hw(xT),TT=Hw(Jw),kT=zw;(gT&&"[object DataView]"!=kT(new gT(new ArrayBuffer(1)))||JM&&"[object Map]"!=kT(new JM)||yT&&"[object Promise]"!=kT(yT.resolve())||xT&&"[object Set]"!=kT(new xT)||Jw&&"[object WeakMap]"!=kT(new Jw))&&(kT=function(t){var e=zw(t),r="[object Object]"==e?t.constructor:void 0,n=r?Hw(r):"";if(n)switch(n){case _T:return"[object DataView]";case bT:return"[object Map]";case wT:return"[object Promise]";case MT:return"[object Set]";case TT:return"[object WeakMap]"}return e});var AT=kT,ST=Object.prototype.hasOwnProperty;var ET=Aw.Uint8Array;function CT(t){var e=new t.constructor(t.byteLength);return new ET(e).set(new ET(t)),e}var LT=/\w*$/;var IT=Sw?Sw.prototype:void 0,PT=IT?IT.valueOf:void 0;function OT(t,e,r){var n,a=t.constructor;switch(e){case"[object ArrayBuffer]":return CT(t);case"[object Boolean]":case"[object Date]":return new a(+t);case"[object DataView]":return function(t,e){var r=e?CT(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?CT(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,r);case"[object Map]":return new a;case"[object Number]":case"[object String]":return new a(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,LT.exec(t));return e.lastIndex=t.lastIndex,e}(t);case"[object Set]":return new a;case"[object Symbol]":return n=t,PT?Object(PT.call(n)):{}}}var zT=OM&&OM.isMap,DT=zT?CM(zT):function(t){return Dw(t)&&"[object Map]"==AT(t)};var RT=OM&&OM.isSet,FT=RT?CM(RT):function(t){return Dw(t)&&"[object Set]"==AT(t)},NT={};function BT(t,e,r,n,a,i){var o,s=1&e,l=2&e,u=4&e;if(r&&(o=a?r(t,n,a,i):r(t)),void 0!==o)return o;if(!Fw(t))return t;var c=Rw(t);if(c){if(o=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&ST.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(t),!s)return rM(t,o)}else{var h=AT(t),f="[object Function]"==h||"[object GeneratorFunction]"==h;if(SM(t))return function(t,e){if(e)return t.slice();var r=t.length,n=sT?sT(r):new t.constructor(r);return t.copy(n),n}(t,s);if("[object Object]"==h||"[object Arguments]"==h||f&&!a){if(o=l||f?{}:function(t){return"function"!=typeof t.constructor||gM(t)?{}:tM(rT(t))}(t),!s)return l?function(t,e){return fM(t,pT(t),e)}(t,function(t,e){return t&&fM(e,qM(e),t)}(o,t)):function(t,e){return fM(t,fT(t),e)}(t,function(t,e){return t&&fM(e,UM(e),t)}(o,t))}else{if(!NT[h])return a?t:{};o=OT(t,h,s)}}i||(i=new nT);var p=i.get(t);if(p)return p;i.set(t,o),FT(t)?t.forEach((function(n){o.add(BT(n,e,r,n,t,i))})):DT(t)&&t.forEach((function(n,a){o.set(a,BT(n,e,r,a,t,i))}));var d=c?void 0:(u?l?vT:mT:l?qM:UM)(t);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););}(d||t,(function(n,a){d&&(n=t[a=n]),hM(o,a,BT(n,e,r,a,t,i))})),o}NT["[object Arguments]"]=NT["[object Array]"]=NT["[object ArrayBuffer]"]=NT["[object DataView]"]=NT["[object Boolean]"]=NT["[object Date]"]=NT["[object Float32Array]"]=NT["[object Float64Array]"]=NT["[object Int8Array]"]=NT["[object Int16Array]"]=NT["[object Int32Array]"]=NT["[object Map]"]=NT["[object Number]"]=NT["[object Object]"]=NT["[object RegExp]"]=NT["[object Set]"]=NT["[object String]"]=NT["[object Symbol]"]=NT["[object Uint8Array]"]=NT["[object Uint8ClampedArray]"]=NT["[object Uint16Array]"]=NT["[object Uint32Array]"]=!0,NT["[object Error]"]=NT["[object Function]"]=NT["[object WeakMap]"]=!1;var jT=Math.max;var UT=function(t,e){return iM(function(t,e,r){return e=pM(void 0===e?t.length-1:e,0),function(){for(var n=arguments,a=-1,i=pM(n.length-e,0),o=Array(i);++a<i;)o[a]=n[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=n[a];return s[e]=r(o),eM(t,this,s)}}(t,e,Nw),t+"")}((function(t){if(!t||!t.length)return[];var e=0;return t=lT(t,(function(t){if(Dw(r=t)&&mM(r))return e=jT(t.length,e),!0;var r})),yM(e,(function(e){return function(t,e){for(var r=-1,n=null==t?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a}(t,(r=e,function(t){return null==t?void 0:t[r]}));var r}))}));let VT,HT=t=>t;customElements.define("batch-tile",class extends ft{render(){return this.localAppConf=this.appConf.find((t=>"batch-tile"===t.type)),this.formFields=this.appConf.find((t=>"input-tile"===t.type)).fields,this.subComponents=this.appConf.find((t=>"input-tile"===t.type)).subComponents,this.fileData=null,[super.render(),E(VT||(VT=HT`
        <h2>${0}</h2>
        <h4>1. Get the template</h4>
        <button
          class="btn btn-outline-secondary"
          @click=${0}
        >
          Download Template
        </button>
        <h4>2. Fill the template.</h4>
        <p>
          Each column is a single calculation that will be run. Columns must be
          complete. Do not edit the generated fields. Any data that extends
          below the generated fields will not be used.
        </p>
        <h4>3. Upload the file</h4>
        <div class="input-group">
          <input class="form-control" type="file" id="dropbox" accept=".csv" />
          <button
            id="dropbox-button"
            class="btn btn-outline-secondary"
            @click=${0}
          >
            Submit file
          </button>
        </div>
      `),E([this.localAppConf.title]),(()=>this.generateCSV()),(()=>this.runCalc()))]}firstUpdated(t){let e;super.firstUpdated(t),e=document.getElementById("dropbox"),e.addEventListener("change",(t=>this.clickFile(t)),!1),e.addEventListener("dragenter",(t=>this.dragenter(t)),!1),e.addEventListener("dragover",(t=>this.dragover(t)),!1),e.addEventListener("drop",(t=>this.drop(t)),!1)}dragenter(t){t.stopPropagation(),t.preventDefault()}dragover(t){t.stopPropagation(),t.preventDefault()}drop(t){t.stopPropagation(),t.preventDefault();const e=t.dataTransfer,{files:r}=e;1!==r.length?window.alert("Single file upload only. All files removed."):this.handleFile(r[0])}clickFile(t){const{files:e}=t.currentTarget;1!==e.length?window.alert("Single file upload only. All files removed."):this.handleFile(e[0])}async handleFile(t){null!==this.fileData&&window.alert("Single file upload only. Previous file is removed.");t.text().then((t=>{this.fileData=t}),(t=>{window.alert(`file load failed with error ${t}`),this.fileData=null}))}generateCSV(){const t=[];let e,r=0;this.subComponents.forEach(((n,a)=>{"radio-tile"===n.type&&(t[r]=["Radio Choice:",n.title,a].join(","),r+=1,e=1,Object.entries(n.options).forEach((([n,a])=>{t[r]=[e,n,a[0]].join(","),r+=1,e+=1})))})),t[r]=["Main Fields:"].join(","),r+=1,Object.keys(this.formFields).forEach((e=>{Object.entries(this.formFields[e]).forEach((([n,a])=>{t[r]=[e,n,a[0]].join(","),r+=1}))}));const n=t.join("\n"),a=new Blob([n],{type:"text,csv;charset=utf-8;"});Mw(a,`${this.appName}-template.csv`)}runCalc(){let t=this.fileData.split("\n").map((t=>t.split(",").map((t=>t.replace(/(\r\n|\n|\r)/gm,"")))));t=UT(...t);const e=BT(this.appConf,5);const r=[];let n,a,i,o=0,s=!0;e.forEach((t=>{["input-tile","derived-input-tile","output-tile"].includes(t.type)&&(Object.entries(t.subComponents).forEach((([t,e])=>{"radio-tile"===e.type&&(r[o]=["radio choice",e.title,t].join(","),o+=1,n=1,Object.entries(e.options).forEach((([t,e])=>{r[o]=[n,t].join(","),o+=1,n+=1})))})),!0===s&&(r[o]=["Main Fields:"].join(","),o+=1,s=!1),Object.keys(t.fields).forEach((e=>{Object.entries(t.fields[e]).forEach((([t,n])=>{r[o]=[e,t].join(","),o+=1}))})))})),t.slice(2).forEach((n=>{n.forEach(((r,n)=>{var o;"Radio Choice:"===t[0][n]?(a="radio",i=t[2][n]):"Main Fields:"===t[0][n]?a="main":"radio"===a?e.find((t=>"input-tile"===t.type)).subComponents[i].options[t[1][n]][0]=!![1,"1","TRUE","True","true","T","t","y","yes"].includes(o=r)||![0,"0","FALSE","False","false","F","f","n","no",""].includes(o)&&void window.alert(`${o} is not a valid boolean option in input csv`):"main"===a&&(e.find((t=>"input-tile"===t.type)).fields[t[0][n]][t[1][n]][0]=Number(r))})),this.launchCloneCalc(e),o=0,s=!0,e.forEach((t=>{["input-tile","derived-input-tile","output-tile"].includes(t.type)&&(Object.entries(t.subComponents).forEach((([t,e])=>{"radio-tile"===e.type&&(o+=1,Object.entries(e.options).forEach((([t,e])=>{r[o]=[r[o],e[0]].join(","),o+=1})))})),!0===s&&(o+=1,s=!1),Object.keys(t.fields).forEach((e=>{Object.entries(t.fields[e]).forEach((([t,e])=>{r[o]=[r[o],e[0]].join(","),o+=1}))})))}))}));const l=r.join("\n"),u=new Blob([l],{type:"text,csv;charset=utf-8;"});Mw(u,`${this.appName}-output.csv`),document.getElementById("dropbox").value="",this.fileData=null}launchCloneCalc(t){const e=new CustomEvent("cloneCalc",{detail:{appConfClone:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}});export{Z as S,ft as T,rM as a,tM as b,so as c,Rw as d,bg as e,Mg as f,Tg as g,kg as h,Dw as i,Ag as j,Cg as k,Nb as l,tw as m,Bb as n,Eg as o,E as p,jb as q,Vb as r,Hb as s,qb as t};