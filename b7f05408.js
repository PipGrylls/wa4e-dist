import{b as t,a as e,i,d as s,T as o,p as a,S as n,m as p}from"./418e0498.js";function l(){}function r(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function c(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}r.prototype=t(l.prototype),r.prototype.constructor=r,c.prototype=t(l.prototype),c.prototype.constructor=c;var d=Object.prototype.hasOwnProperty;function h(t){if(i(t)&&!s(t)&&!(t instanceof r)){if(t instanceof c)return t;if(d.call(t,"__wrapped__"))return function(t){if(t instanceof r)return t.clone();var i=new c(t.__wrapped__,t.__chain__);return i.__actions__=e(t.__actions__),i.__index__=t.__index__,i.__values__=t.__values__,i}(t)}return new c(t)}h.prototype=l.prototype,h.prototype.constructor=h;let u,m,f,C,_,b=t=>t;customElements.define("radio-tile",class extends o{render(){return this.checkOptions=this.appConf.options,this.checks=this.makeCheckCallBacks(),[super.render(),a(u||(u=b`
        <h2>${0}</h2>
        ${0}
      `),a([this.appConf.title]),this.checks)]}makeCheckCallBacks(){return a(m||(m=b`${0}`),Object.keys(this.checkOptions).map((t=>a(f||(f=b`<div
        class="form-check form-check-inline"
        style="display: ${0};"
      >
        ${0}
        <label class="form-check-label" for="${0}">
          ${0}
        </label>
      </div>`),this.appConf.options[t][2],this.appConf.options[t][0]?a(C||(C=b`<input
              class="form-check-input"
              type="radio"
              name="${0}"
              id="${0}"
              .value="${0}"
              @click=${0}
              checked
            />`),this.appConf.title,t,t,(e=>{this.appConf.options[t][0]=e.target.checked,this.checkValue=t,Object.keys(this.checkOptions).map((i=>{i!==t&&(this.appConf.options[i][0]=!e.target.checked)})),this.appConf.clearOnClick&&this.clearOutput(),this.appConf.modifyOnClick&&this.modifyForm(this.checkValue)})):a(_||(_=b`<input
              class="form-check-input"
              type="radio"
              name="${0}"
              id="${0}"
              .value="${0}"
              @click=${0}
            />`),this.appConf.title,t,t,(e=>{this.appConf.options[t][0]=e.target.checked,this.checkValue=t,Object.keys(this.checkOptions).map((i=>{i!==t&&(this.appConf.options[i][0]=!e.target.checked)})),this.appConf.clearOnClick&&this.clearOutput(),this.appConf.modifyOnClick&&this.modifyForm(this.checkValue)})),t,a([this.checkOptions[t][1]])))))}modifyForm(t){const e=new CustomEvent("modifyForm",{detail:{changeFields:this.appConf.onChange[t]},bubbles:!0,composed:!0});this.dispatchEvent(e)}clearOutput(){const t=new CustomEvent("clear",{bubbles:!0,composed:!0});this.dispatchEvent(t)}});let y,v=t=>t;customElements.define("test-tile",class extends o{render(){return this.testText=this.appConf.testText,window.console.log("rendering test"),[super.render(),a(y||(y=v`
        <h2>'Hello world'</h2>
        <p>${0}</p>
      `),this.testText)]}});let $,g,k,w,O=t=>t;customElements.define("table-tile",class extends o{render(){return this.tableContent=this.appConf.content,this.htmlTableContent=this.arrangeFields(),[super.render(),a($||($=O`
        <div class="table-responsive">
          <table class="table">
            ${0}
          </table>
        </div>
      `),this.htmlTableContent)]}arrangeFields(){return a(g||(g=O`${0}`),Object.values(this.tableContent).map((t=>a(k||(k=O`
        <tr>
          ${0}
        </tr>
      `),t.map((t=>a(w||(w=O`<td>${0}</td>`),t)))))))}});let x,W,F,j,T,M,E,z,L,U,N,A,V=t=>t;customElements.define("input-table",class extends o{render(){return this.tableContent=this.appConf.content,this.htmlTableContent=this.arrangeFields(),[super.render(),a(x||(x=V`
        <div class="table-responsive">
          <table class="table">
            ${0}
          </table>
        </div>
      `),this.htmlTableContent)]}arrangeFields(){return a(W||(W=V`${0}`),Object.values(this.tableContent).map((t=>a(F||(F=V`
        <div class="input-group">${0}</div>
      `),this.makeRow(t)))))}makeRow(t){let e;return e=void 0===t.header?a(j||(j=V` ${0}
      ${0}`),null!==t.label?a(T||(T=V`<label class="input-group-text col-3"
            >${0}</label
          >`),a([t.label])):a(M||(M=V``)),t.values.map((t=>a(E||(E=V` ${0}`),3===t.length?a(z||(z=V` <input
                  class="form-control bg-light col-2"
                  disabled
                  .value="${0}"
                />
                <label class="input-group-text col-1"
                  >${0}</label
                >`),t[0],a([t[1]])):4===t.length?a(L||(L=V` <label class="input-group-text col-1"
                  >${0}</label
                >
                <input
                  class="form-control bg-light col-1"
                  disabled
                  .value="${0}"
                />
                <label class="input-group-text col-1"
                  >${0}</label
                >`),a([t[2]]),t[0],a([t[1]])):a(U||(U=V`<p>input group of unsupported length ${0}</p>`),t.length))))):a(N||(N=V`${0}`),t.header.map((t=>a(A||(A=V`<label class="input-group-text col-3">${0}</label>`),t)))),e}});let P,R,S,B,D,I,H,q,G,J,K,Q,X,Y,Z=t=>t;function tt(t){return new Promise((e=>setTimeout(e,t)))}class et extends n{static get properties(){return{appWebComponents:{type:Object},title:{type:String},appName:{type:String},output:{type:Object},appTiles:{type:a},appCalc:{type:Function},resetApp:{type:Object},masonryLayout:{type:Object}}}render(){return[super.render(),a(P||(P=Z`
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
      `),this.title,this.appTiles)]}async getMasonryLayout(){for(this.masonryLayout=p.data(".msnry-tiles");void 0===this.masonryLayout;)this.masonryLayout=p.data(".msnry-tiles"),await tt(2)}async reloadMasonry(){await this.getMasonryLayout(),this.masonryLayout.reloadItems()}updateComponents(){this.output=this.appCalc(this.appWebComponents),this.childUpdate()}runCloneCalc(t){this.appCalc(t.appConfClone)}resetComponents(){}childUpdate(){const t=new CustomEvent("update-children",{bubbles:!0,composed:!0});this.dispatchEvent(t)}modifyForm(t){const e=[];!function t(e,i,...s){let o=[...s];for(const[a,n]of Object.entries(e))o.push(a),h.isObject(n)&&!h.isArray(n)?t(n,i,...o):i.push([...o]),o=[...s]}(t.changeFields,e);for(const i of this.appWebComponents)for(const s of e)h.has(i,s)&&h.set(i,s,h.get(t.changeFields,s));const i=this.appWebComponents.findIndex((t=>"graph-tile"===t.type));-1!==i&&(this.appWebComponents[i].updateConf.noNewData=!0,this.appWebComponents[i].updateConf.clearData=!0),this.childUpdate()}optimize(){this.output=this.appOptimize(this.appWebComponents),this.childUpdate()}makeAppTiles(){return a(R||(R=Z`
      ${0}
    `),this.appWebComponents.map(((t,e)=>a(S||(S=Z` ${0}`),"input-tile"===t.type?a(B||(B=Z`<div class="col">
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
              </div>`),this.appWebComponents[e],(()=>{this.updateComponents()}),(()=>{this.resetComponents()}),(()=>{this.reloadMasonry()}),(t=>{this.modifyForm(t.detail)}),(()=>{this.childUpdate()})):"derived-input-tile"===t.type?a(D||(D=Z`<div class="col">
                <div class="card  ">
                  <derived-input-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></derived-input-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):"output-tile"===t.type?a(I||(I=Z`<div class="col">
                <div class="card  ">
                  <output-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></output-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):"coeff-tile"===t.type?a(H||(H=Z`<div class="col">
                <div class="card  ">
                  <coeff-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></coeff-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):"optimisation-tile"===t.type?a(q||(q=Z`<div class="col">
                <div class="card  ">
                  <optimisation-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></optimisation-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):"image-tile"===t.type?a(G||(G=Z`<div class="col">
                <div class="card  ">
                  <image-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></image-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):"optimization-tile"===t.type?a(J||(J=Z`<div class="col">
                <div class="card  ">
                  <optimization-tile
                    .appConf=${0}
                    @loaded="${0}"
                    @optimize="${0}"
                    @clear="${0}"
                    @modifyForm="${0}"
                  ></optimization-tile>
                </div>
              </div>`),this.appWebComponents[e],(()=>{this.reloadMasonry()}),(t=>{this.optimize(t.detail)}),(()=>{this.childUpdate()}),(t=>{this.modifyForm(t.detail)})):"text-tile"===t.type?a(K||(K=Z`<div class="col">
                <div class="card  ">
                  <text-tile
                    .appConf=${0}
                  ></text-tile>
                </div>
              </div>`),this.appWebComponents[e]):"batch-tile"===t.type?a(Q||(Q=Z`<div class="col">
                <div class="card  ">
                  <batch-tile
                    @cloneCalc="${0}"
                    .appConf=${0}
                    .appName=${0}
                  ></batch-tile>
                </div>
              </div>`),(t=>{this.runCloneCalc(t.detail)}),this.appWebComponents,this.appName):"graph-tile"===t.type?a(X||(X=Z`<graph-tile
                .appConf=${0}
                @loaded="${0}"
              ></graph-tile>`),this.appWebComponents[e],(()=>{this.reloadMasonry()})):a(Y||(Y=Z`<p>Component ${0} Not Recognised</p>`),t.type)))))}}export{et as A};
