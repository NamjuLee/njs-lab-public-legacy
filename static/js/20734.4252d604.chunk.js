"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[20734],{20734:(t,i,s)=>{s.r(i),s.d(i,{Renderer:()=>c,Solution:()=>d});var e=s(55913);class h{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;this.selPix=void 0,this.pMap=void 0,this.vs=[],this.min=new r(Number.MAX_VALUE,Number.MAX_VALUE),this.max=new r(Number.MIN_VALUE,Number.MIN_VALUE);for(let e=0;e<t.length;++e){const i=new r(t[e][0],t[e][1]);i.id=this.vs.length,this.vs.push(i),this.min.x>t[e][0]&&(this.min.x=t[e][0]),this.min.y>t[e][1]&&(this.min.y=t[e][1]),this.max.x<t[e][0]&&(this.max.x=t[e][0]),this.max.y<t[e][1]&&(this.max.y=t[e][1])}this.pMap=new n(this.min,this.max,i,s),this.pMap.init();for(let e=0;e<this.vs.length;++e)this.pMap.getPixelAtPoint(this.vs[e].x,this.vs[e].y).dataList.push(this.vs[e])}picking(t,i){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.selPix=[this.pMap.getPixelAtPoint(t,i)],s&&this.selPix.push(...this.selPix[0].nPix);let e=Number.MAX_VALUE,h=-1;for(let n=0;n<this.selPix.length;++n){const t=this.selPix[n];for(let i=0;i<t.dataList.length;++i){const s=o(t.dataList[i],this.pMap.pointer);s<e&&(e=s,h=t.dataList[i].id)}}return h>-1?[this.vs[h].x,this.vs[h].y]:void 0}getCell(){return this.selPix}getCellGrid(){return this.pMap.listPixel}}class n{constructor(t,i){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;this.listPixel=[],this.rx=0,this.ry=0,this.ddx=0,this.ddy=0,this.v0=void 0,this.v1=void 0,this.pointer=new r(-1,-1,-1),this.rx=s,this.ry=e,this.ddx=0,this.ddy=0,this.v0=t,this.v1=i}init(){this.ddx=(this.v1.x-this.v0.x)/(this.rx-1),this.ddy=(this.v1.y-this.v0.y)/(this.ry-1),this.initGrid()}initGrid(){for(let t=0;t<this.ry;++t)for(let i=0;i<this.rx;++i){let s=this.v0.x+i*this.ddx,e=this.v0.y+t*this.ddy,h=new l(this);h.i=i,h.j=t,h.vec=new r(s,e,0),h.recVec.push(new r(s-.5*this.ddx,e-.5*this.ddy,0)),h.recVec.push(new r(s+.5*this.ddx,e-.5*this.ddy,0)),h.recVec.push(new r(s+.5*this.ddx,e+.5*this.ddy,0)),h.recVec.push(new r(s-.5*this.ddx,e+.5*this.ddy,0)),this.listPixel.push(h)}this.initGridNeighbor()}initGridNeighbor(){for(let t=0;t<this.ry;++t)for(let i=0;i<this.rx;++i){let s=t*this.rx+i,e=this.listPixel[s];i>0&&e.nPix.push(this.listPixel[s-1]),i<this.rx-1&&e.nPix.push(this.listPixel[s+1]),t>0&&e.nPix.push(this.listPixel[s-this.rx]),t<this.ry-1&&e.nPix.push(this.listPixel[s+this.rx]),i>0&&t<this.ry-1&&e.nPix.push(this.listPixel[s+this.rx-1]),i>0&&t>0&&e.nPix.push(this.listPixel[s-this.rx-1]),i<this.rx-1&&t<this.ry-1&&e.nPix.push(this.listPixel[s+this.rx+1]),i<this.rx-1&&t>0&&e.nPix.push(this.listPixel[s-this.rx+1])}}getPixelAtPoint(t,i){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.pointer.x=t-this.v0.x,this.pointer.y=i-this.v0.y,this.pointer.z=s-this.v0.z;let e=Math.round(this.pointer.x/this.ddx),h=Math.round(this.pointer.y/this.ddy);return e>=this.rx&&(e=this.rx-1),h>=this.ry&&(h=this.ry-1),e<0&&(e=0),h<0&&(h=0),this.listPixel[h*this.rx+e]}}class l{constructor(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new r(0,0,0);this.map=void 0,this.vec=void 0,this.nPix=[],this.recVec=[],this.i=-1,this.j=-1,this.k=-1,this.dataList=[],this.map=t,this.vec=i}}class r{constructor(t,i){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.id=-1,this.x=0,this.y=0,this.z=0,this.x=t,this.y=i,this.z=s}}const o=(t,i)=>Math.sqrt((t.x-i.x)*(t.x-i.x)+(t.y-i.y)*(t.y-i.y)+(t.z-i.z)*(t.z-i.z));class d{constructor(t){this.divHost=void 0,this.renderer=void 0,this.divHost=document.getElementById(t),this.divHost.style.display="flex",this.divHost.style.alignItems="center";const i=document.createElement("div");i.style.marginLeft="auto",i.style.marginRight="auto",i.style.backgroundColor="#555",i.style.width="1000px",i.style.height="600px",this.divHost.appendChild(i),this.renderer=new c(i)}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class c extends e.bb{constructor(t){super(t),this.tradition=!1,this.debugger=!1,this.text=void 0,this.pts=[],this.selPt=[],this.log=!1,this.picking=void 0,this.canvas.style.position="relative",this.canvas.style.width="100%",this.canvas.style.height="100%";const i=document.createElement("div");t.appendChild(i);const s=document.createElement("div");s.style.width="100px",s.style.height="50px",s.textContent="1000",s.contentEditable="true",s.style.background="#fff",s.style.height="28px",s.onkeydown=()=>{this.init(+s.textContent)},i.appendChild(s);const e=document.createElement("button");e.style.width="100px",e.style.height="50px",e.textContent="Search type",e.onclick=()=>{this.tradition=!this.tradition},i.appendChild(e);const h=document.createElement("button");h.style.width="80px",h.style.height="50px",h.textContent="debugger",h.onclick=()=>{this.debugger=!this.debugger},i.appendChild(h);const n=document.createElement("div");n.style.height="50px",n.onclick=()=>{this.tradition=!this.tradition},t.appendChild(n),this.text=n,this.init()}init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e6;this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.pts=[];for(let i=0;i<t;++i){const t=[Math.random()*this.canvas.width,Math.random()*this.canvas.height];this.pts.push(t)}this.picking=new h(this.pts),this.render(this.ctx)}render(t){for(let i=0;i<this.pts.length;i++)t.fillStyle="#f00",t.beginPath(),t.arc(this.pts[i][0],this.pts[i][1],2,0,2*Math.PI),t.closePath(),t.fill();this.log,this.selPt&&(this.ctx.fillStyle="#0ff",this.ctx.beginPath(),this.ctx.arc(this.selPt[0],this.selPt[1],4,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()),this.isStatic=!0}mouseMove(t,i){if(this.tradition){var s=performance.now();this.selPt=x(this.pts,[t,i]);var e=performance.now()-s;this.text.textContent="total num pts: "+this.pts.length+", time: "+e.toFixed(8).toString()+"ms"}else{let s=performance.now();this.selPt&&console.log(this.selPt),this.selPt=this.picking.picking(t,i);var h=performance.now()-s;if(this.text.textContent="total num pts: "+this.pts.length+", time: "+h.toFixed(8).toString()+"ms",this.debugger){const t=this.picking.getCell();for(let i=0;i<t.length;++i){this.ctx.beginPath(),this.ctx.moveTo(t[i].recVec[0].x,t[i].recVec[0].y);for(let s=1;s<t[i].recVec.length;++s)this.ctx.lineTo(t[i].recVec[s].x,t[i].recVec[s].y);this.ctx.closePath(),this.ctx.strokeStyle="#00f",this.ctx.stroke()}}}this.selPt&&(this.ctx.fillStyle="#0ff",this.ctx.beginPath(),this.ctx.arc(this.selPt[0],this.selPt[1],4,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill())}}const x=(t,i)=>{let s=Number.MAX_VALUE,h=[];for(let n=0;n<t.length;++n){const l=(0,e.hI)(t[n][0],t[n][1],0,i[0],i[1],0);l<s&&(s=l,h=t[n])}return h}}}]);
//# sourceMappingURL=20734.4252d604.chunk.js.map