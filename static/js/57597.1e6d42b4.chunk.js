"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[57597],{57597:(t,i,e)=>{e.r(i),e.d(i,{ViewWrapper:()=>s});class s{constructor(t,i){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;this.modelViewCoreWrapper=void 0,this.divHost=void 0,this.div=void 0,this.modelViewCoreWrapper=t,this.InitDiv(i,e,s),this.AppendEvent()}InitDiv(t,i,e){const s=document.createElement("div");s.style.position="absolute",this.div=document.createElement("div"),s.appendChild(this.div);const d=document.getElementById(t);d&&(this.divHost=d,this.divHost.parentNode&&this.divHost.appendChild(s)),this.div.id="NCanvas",this.div.style.width=this.divHost.clientWidth+"px",this.div.style.height=this.divHost.clientHeight+"px",this.div.style.zIndex="1"}AppendEvent(){window.addEventListener("resize",(()=>{this.div.style.width=this.divHost.clientWidth+"px",this.div.style.height=this.divHost.clientHeight+"px"}),!0)}}}}]);
//# sourceMappingURL=57597.1e6d42b4.chunk.js.map