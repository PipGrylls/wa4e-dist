import{b as t,a as e,i,d as s,T as a,p as o,S as n,m as p}from"./3c57a059.js";function l(){}function r(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function c(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}r.prototype=t(l.prototype),r.prototype.constructor=r,c.prototype=t(l.prototype),c.prototype.constructor=c;var d=Object.prototype.hasOwnProperty;function h(t){if(i(t)&&!s(t)&&!(t instanceof r)){if(t instanceof c)return t;if(d.call(t,"__wrapped__"))return function(t){if(t instanceof r)return t.clone();var i=new c(t.__wrapped__,t.__chain__);return i.__actions__=e(t.__actions__),i.__index__=t.__index__,i.__values__=t.__values__,i}(t)}return new c(t)}h.prototype=l.prototype,h.prototype.constructor=h;let u,m,f,C,_,b=t=>t;customElements.define("radio-tile",class extends a{render(){return this.checkOptions=this.appConf.options,this.checks=this.makeCheckCallBacks(),[super.render(),o(u||(u=b`
        <h2>${0}</h2>
        ${0}
      `),o([this.appConf.title]),this.checks)]}makeCheckCallBacks(){return o(m||(m=b`${0}`),Object.keys(this.checkOptions).map((t=>o(f||(f=b`<div
        class="form-check form-check-inline"
        style="display: ${0};"
      >
        ${0}
        <label class="form-check-label" for="${0}">
          ${0}
        </label>
      </div>`),this.appConf.options[t][2],this.appConf.options[t][0]?o(C||(C=b`<input
              class="form-check-input"
              type="radio"
              name="${0}"
              id="${0}"
              .value="${0}"
              @click=${0}
              checked
            />`),this.appConf.title,t,t,(e=>{this.appConf.options[t][0]=e.target.checked,this.checkValue=t,Object.keys(this.checkOptions).map((i=>{i!==t&&(this.appConf.options[i][0]=!e.target.checked)})),this.appConf.clearOnClick&&this.clearOutput(),this.appConf.modifyOnClick&&this.modifyForm(this.checkValue)})):o(_||(_=b`<input
              class="form-check-input"
              type="radio"
              name="${0}"
              id="${0}"
              .value="${0}"
              @click=${0}
            />`),this.appConf.title,t,t,(e=>{this.appConf.options[t][0]=e.target.checked,this.checkValue=t,Object.keys(this.checkOptions).map((i=>{i!==t&&(this.appConf.options[i][0]=!e.target.checked)})),this.appConf.clearOnClick&&this.clearOutput(),this.appConf.modifyOnClick&&this.modifyForm(this.checkValue)})),t,o([this.checkOptions[t][1]])))))}modifyForm(t){const e=new CustomEvent("modifyForm",{detail:{changeFields:this.appConf.onChange[t]},bubbles:!0,composed:!0});this.dispatchEvent(e)}clearOutput(){const t=new CustomEvent("clear",{bubbles:!0,composed:!0});this.dispatchEvent(t)}});let y,v=t=>t;customElements.define("test-tile",class extends a{render(){return this.testText=this.appConf.testText,window.console.log("rendering test"),[super.render(),o(y||(y=v`
        <h2>'Hello world'</h2>
        <p>${0}</p>
      `),this.testText)]}});let $,g,k,w,O=t=>t;customElements.define("table-tile",class extends a{render(){return this.tableContent=this.appConf.content,this.htmlTableContent=this.arrangeFields(),[super.render(),o($||($=O`
        <div class="table-responsive">
          <table class="table">
            ${0}
          </table>
        </div>
      `),this.htmlTableContent)]}arrangeFields(){return o(g||(g=O`${0}`),Object.values(this.tableContent).map((t=>o(k||(k=O`
        <tr>
          ${0}
        </tr>
      `),t.map((t=>o(w||(w=O`<td>${0}</td>`),t)))))))}});let x,W,F,j,T,M,E,z,L,U,N,A,V=t=>t;customElements.define("input-table",class extends a{render(){return this.tableContent=this.appConf.content,this.htmlTableContent=this.arrangeFields(),[super.render(),o(x||(x=V`
        <div class="table-responsive">
          <table class="table">
            ${0}
          </table>
        </div>
      `),this.htmlTableContent)]}arrangeFields(){return o(W||(W=V`${0}`),Object.values(this.tableContent).map((t=>o(F||(F=V`
        <div class="input-group">${0}</div>
      `),this.makeRow(t)))))}makeRow(t){let e;return e=void 0===t.header?o(j||(j=V` ${0}
      ${0}`),null!==t.label?o(T||(T=V`<label class="input-group-text col-3"
            >${0}</label
          >`),o([t.label])):o(M||(M=V``)),t.values.map((t=>o(E||(E=V` ${0}`),3===t.length?o(z||(z=V` <input
                  class="form-control bg-light col-2"
                  disabled
                  .value="${0}"
                />
                <label class="input-group-text col-1"
                  >${0}</label
                >`),t[0],o([t[1]])):4===t.length?o(L||(L=V` <label class="input-group-text col-1"
                  >${0}</label
                >
                <input
                  class="form-control bg-light col-1"
                  disabled
                  .value="${0}"
                />
                <label class="input-group-text col-1"
                  >${0}</label
                >`),o([t[2]]),t[0],o([t[1]])):o(U||(U=V`<p>input group of unsupported length ${0}</p>`),t.length))))):o(N||(N=V`${0}`),t.header.map((t=>o(A||(A=V`<label class="input-group-text col-3">${0}</label>`),t)))),e}});let P,R,S,B,D,I,H,q,G,J,K,Q,X,Y,Z=t=>t;function tt(t){return new Promise((e=>setTimeout(e,t)))}class et extends n{static get properties(){return{appWebComponents:{type:Object},title:{type:String},appName:{type:String},output:{type:Object},appTiles:{type:o},appCalc:{type:Function},resetApp:{type:Object},masonryLayout:{type:Object}}}render(){return[super.render(),o(P||(P=Z`
        <div class="row">
          <header-element .pageTitle=${0}></header-element>
        </div>
        <div class="container-fluid bg-light">
          <div
            id="msnry-tiles"
            class="msnry-tiles row row-cols-sm-1 row-cols-lg-2 row-cols-xxl-3 g-2"
            data-masonry='{"percentPosition": true }'
          >
            ${0}
          </div>
        </div>
        <div class="row">
          <footer-element></footer-element>
        </div>
      `),this.title,this.appTiles)]}async getMasonryLayout(){for(this.masonryLayout=p.data(".msnry-tiles");void 0===this.masonryLayout;)this.masonryLayout=p.data(".msnry-tiles"),await tt(2)}async reloadMasonry(){await this.getMasonryLayout(),this.masonryLayout.reloadItems()}updateComponents(){this.output=this.appCalc(this.appWebComponents),this.childUpdate()}runCloneCalc(t){this.appCalc(t.appConfClone)}resetComponents(){}childUpdate(){const t=new CustomEvent("update-children",{bubbles:!0,composed:!0});this.dispatchEvent(t)}modifyForm(t){const e=[];!function t(e,i,...s){let a=[...s];for(const[o,n]of Object.entries(e))a.push(o),h.isObject(n)&&!h.isArray(n)?t(n,i,...a):i.push([...a]),a=[...s]}(t.changeFields,e);for(const i of this.appWebComponents)for(const s of e)h.has(i,s)&&h.set(i,s,h.get(t.changeFields,s));const i=this.appWebComponents.findIndex((t=>"graph-tile"===t.type));-1!==i&&(this.appWebComponents[i].updateConf.noNewData=!0,this.appWebComponents[i].updateConf.clearData=!0),this.childUpdate()}optimize(){this.output=this.appOptimize(this.appWebComponents),this.childUpdate()}makeAppTiles(){return o(R||(R=Z`
      ${0}
    `),this.appWebComponents.map(((t,e)=>o(S||(S=Z` ${0}`),"input-tile"===t.type?o(B||(B=Z`<div class="col">
                <div class="card ">
                  <input-tile
                    .appConf=${0}
                    @updated="${0}"
                    @reset="${0}"
                    @loaded="${0}"
                    @modifyForm="${0}"
                    @clear="${0}"
                  ></input-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.updateComponents()}),(()=>{this.resetComponents()}),(()=>{this.reloadMasonry()}),(t=>{this.modifyForm(t.detail)}),(()=>{this.childUpdate()})):"derived-input-tile"===t.type?o(D||(D=Z`<div class="col">
                <div class="card  ">
                  <derived-input-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></derived-input-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):"output-tile"===t.type?o(I||(I=Z`<div class="col">
                <div class="card  ">
                  <output-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></output-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):"coeff-tile"===t.type?o(H||(H=Z`<div class="col">
                <div class="card  ">
                  <coeff-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></coeff-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):"optimisation-tile"===t.type?o(q||(q=Z`<div class="col">
                <div class="card  ">
                  <optimisation-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></optimisation-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):"image-tile"===t.type?o(G||(G=Z`<div class="col">
                <div class="card  ">
                  <image-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></image-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):"optimization-tile"===t.type?o(J||(J=Z`<div class="col">
                <div class="card  ">
                  <optimization-tile
                    .appConf=${0}
                    @loaded="${0}"
                    @optimize="${0}"
                    @clear="${0}"
                    @modifyForm="${0}"
                  ></optimization-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()}),(t=>{this.optimize(t.detail)}),(()=>{this.childUpdate()}),(t=>{this.modifyForm(t.detail)})):"text-tile"===t.type?o(K||(K=Z`<div class="col">
                <div class="card  ">
                  <text-tile
                    .appConf=${0}
                  ></text-tile>
                </div>
              </div>`),this.appWebComponents[e]):"batch-tile"===t.type?o(Q||(Q=Z`<div class="col">
                <div class="card  ">
                  <batch-tile
                    @cloneCalc="${0}"
                    .appConf=${0}
                    .appName=${0}
                  ></batch-tile>
                </div>
              </div>`),(t=>{this.runCloneCalc(t.detail)}),this.appWebComponents,this.appName):"graph-tile"===t.type?o(X||(X=Z`<graph-tile
                .appConf=${0}
                @loaded="${0}"
              ></graph-tile>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):o(Y||(Y=Z`<p>Component ${0} Not Recognised</p>`),t.type)))))}}export{et as A};
