"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[57793],{57793:(t,s,e)=>{e.r(s),e.d(s,{Solution:()=>h});var i=e(55913);class h extends i.bb{constructor(t){super(document.getElementById(t)),this.nodes=[],this.m=new o(0,0,0),this.canvas.style.position="absolute";const s=document.createElement("div");s.textContent="1 Click to add a node",this.divHost.appendChild(s),this.init()}init(){const t=new n(100,100,0);this.nodes.push(t),this.start()}render(t){this.nodes.forEach((s=>{s.render(t)})),t.beginPath(),t.arc(this.m.x,this.m.y,2,0,6.28),t.closePath(),t.fillStyle="#888",t.fill()}mouseClick(t,s){const e=new n(t,s,0);this.nodes.push(e)}mouseMove(t,s){this.m.x=t,this.m.y=s}}class n{constructor(t,s){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.vec=void 0,this.r=5,this.vec=new o(t,s,e)}render(t){t.beginPath(),t.arc(this.vec.x,this.vec.y,this.r,0,6.28),t.closePath(),t.fillStyle="#ff0000",t.fill()}}class o{constructor(t,s){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=s,this.z=e}}}}]);
//# sourceMappingURL=57793.5a01812a.chunk.js.map