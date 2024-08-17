/*! For license information please see 67994.3c15cc7d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[67994],{67994:(t,e,n)=>{n.r(e),n.d(e,{CalciteListItem:()=>_,defineCustomElement:()=>A});var i=n(51554),a=n(92358),o=n(19432),c=n(13160);const r="container",s="content-container",l="nested-container",d="content-container--button",u="content",f="actions-start",m="content-start",b="label",h="description",v="content-end",p="actions-end",y="has-center-content",g="actions-start",x="content-start",k="content-end",w="actions-end",E=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.nonInteractive=!1,this.disabled=!1}componentDidRender(){(0,c.u)(this)}connectedCallback(){(0,o.c)(this)}disconnectedCallback(){(0,o.d)(this)}async setFocus(){var t;null===(t=this.focusEl)||void 0===t||t.focus()}renderActionsStart(){const{el:t}=this;return(0,a.b)(t,g)?(0,i.h)("div",{class:f},(0,i.h)("slot",{name:g})):null}renderActionsEnd(){const{el:t}=this;return(0,a.b)(t,w)?(0,i.h)("div",{class:p},(0,i.h)("slot",{name:w})):null}renderContentStart(){const{el:t}=this;return(0,a.b)(t,x)?(0,i.h)("div",{class:m},(0,i.h)("slot",{name:x})):null}renderContentEnd(){const{el:t}=this;return(0,a.b)(t,k)?(0,i.h)("div",{class:v},(0,i.h)("slot",{name:k})):null}renderContent(){const{label:t,description:e}=this;return t||e?(0,i.h)("div",{class:u},t?(0,i.h)("div",{class:b},t):null,e?(0,i.h)("div",{class:h},e):null):null}renderContentContainer(){const{description:t,disabled:e,label:n,nonInteractive:a}=this,o=!!n||!!t,c=[this.renderContentStart(),this.renderContent(),this.renderContentEnd()];return a?(0,i.h)("div",{class:{[s]:!0,[y]:o},ref:()=>this.focusEl=null},c):(0,i.h)("button",{class:{[s]:!0,[d]:!0,[y]:o},disabled:e,ref:t=>this.focusEl=t},c)}render(){return(0,i.h)(i.AA,{role:"listitem"},(0,i.h)("div",{class:r},this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),(0,i.h)("div",{class:l},(0,i.h)("slot",null)))}get el(){return this}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-direction:column}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family)}.container *{box-sizing:border-box}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);outline-color:transparent}.content-container--button{cursor:pointer;border-style:none;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;text-align:initial}.content-container--button:hover{background-color:var(--calcite-ui-foreground-2)}.content-container--button:hover .label,.content-container--button:hover .description{color:var(--calcite-ui-text-1)}.content-container--button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.content-container--button .content-start,.content-container--button .content-end{pointer-events:none}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.has-center-content .content-start,.has-center-content .content-end{flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item-group),::slotted(calcite-list-item){padding-inline-start:0.5rem}"}},[1,"calcite-list-item",{nonInteractive:[516,"non-interactive"],description:[1],disabled:[516],label:[1],setFocus:[64]}]);function C(){if("undefined"===typeof customElements)return;["calcite-list-item"].forEach((t=>{if("calcite-list-item"===t)customElements.get(t)||customElements.define(t,E)}))}C();const _=E,A=C},19432:(t,e,n)=>{n.d(e,{c:()=>s,d:()=>l});var i=n(51554),a=n(72021);const o=new Set;let c;const r={childList:!0};function s(t){c||(c=(0,a.c)("mutation",d)),c.observe(t.el,r)}function l(t){o.delete(t.el),d(c.takeRecords()),c.disconnect();for(const[e]of o.entries())c.observe(e,r)}function d(t){t.forEach((t=>{let{target:e}=t;(0,i.xE)(e)}))}},13160:(t,e,n)=>{function i(){}function a(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=i);t.el.click=HTMLElement.prototype.click,"function"===typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}n.d(e,{u:()=>a})},72021:(t,e,n)=>{n.d(e,{c:()=>a});var i=n(51554);function a(t,e,n){if(!i.Z5.isBrowser)return;const a=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new a(e,n)}}}]);
//# sourceMappingURL=67994.3c15cc7d.chunk.js.map