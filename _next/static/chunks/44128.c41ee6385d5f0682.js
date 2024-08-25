"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44128],{44128:function(t,i,s){s.r(i),s.d(i,{AppGridSystem:function(){return c},Solution:function(){return l}});class e{InitCanvas(t){let i=document.createElement("canvas"),s=document.getElementById(t);if(s&&(s.appendChild(i),this.host=s),i){this.canvas=i,this.canvas.width=this.host.clientWidth,this.canvas.height=this.host.clientHeight;let t=this.canvas.getContext("2d");t&&(this.ctx=t,this.Init())}}Init(){this.active=!0,this.EventBind(),this.Loop()}EventBind(){this.canvas.onmousedown=t=>this.MouseDown(t),this.canvas.onmouseup=t=>this.MouseUp(t),this.canvas.onmousemove=t=>this.MouseMove(t),window.onresize=t=>this.Resize(t)}Resize(t){this.canvas.width=this.host.clientWidth,this.canvas.height=this.host.clientHeight}Loop(){requestAnimationFrame(()=>{this.Loop()}),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.beginPath(),this.ctx.rect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.closePath(),this.ctx.fillStyle="#eeeeee",this.ctx.fill(),this.Render(this.ctx)}Render(t){}MouseDown(t){}MouseUp(t){}MouseMove(t){}destroy(){for(this.active=!1;this.host.lastChild;)this.host.removeChild(this.host.lastChild)}constructor(t){this.t=0,this.active=!1,this.InitCanvas(t)}}var h=s(8483);class n{static GetID(){return n.ID++}ToString(){return"Pixel"+this.id}Update(){}Render(){}constructor(t,i=new h.h9(0,0,0)){this.nPix=[],this.i=-1,this.j=-1,this.k=-1,this.u=-1,this.v=-1,this.map=t,this.vec=i,this.nPix=[],this.recVec=[],this.i=-1,this.j=-1,this.k=-1,this.id=n.GetID(),this.data={}}}n.ID=0;class r{Init(){this.ddx=(this.v1.x-this.v0.x)/(this.rx-1),this.ddy=(this.v1.y-this.v0.y)/(this.ry-1),this.InitGrid()}InitGrid(){for(let t=0;t<this.ry;++t)for(let i=0;i<this.rx;++i){let s=this.v0.x+i*this.ddx,e=this.v0.y+t*this.ddy,r=new n(this);r.i=i,r.j=t,r.vec=new h.h9(s,e,0),r.recVec.push(new h.h9(s-.5*this.ddx,e-.5*this.ddy,0)),r.recVec.push(new h.h9(s+.5*this.ddx,e-.5*this.ddy,0)),r.recVec.push(new h.h9(s+.5*this.ddx,e+.5*this.ddy,0)),r.recVec.push(new h.h9(s-.5*this.ddx,e+.5*this.ddy,0)),this.listPixel.push(r)}this.InitGridNeighbor()}InitGridNeighbor(){for(let t=0;t<this.ry;++t)for(let i=0;i<this.rx;++i){let s=t*this.rx+i,e=this.listPixel[s];i>0&&e.nPix.push(this.listPixel[s-1]),i<this.rx-1&&e.nPix.push(this.listPixel[s+1]),t>0&&e.nPix.push(this.listPixel[s-this.rx]),t<this.ry-1&&e.nPix.push(this.listPixel[s+this.rx]),i>0&&t<this.ry-1&&e.nPix.push(this.listPixel[s+this.rx-1]),i>0&&t>0&&e.nPix.push(this.listPixel[s-this.rx-1]),i<this.rx-1&&t<this.ry-1&&e.nPix.push(this.listPixel[s+this.rx+1]),i<this.rx-1&&t>0&&e.nPix.push(this.listPixel[s-this.rx+1])}}GetPixelAtPoint(t){let i=new h.h9(t.x-this.v0.x,t.y-this.v0.y,t.z-this.v0.z),s=Math.round(i.x/this.ddx),e=Math.round(i.y/this.ddy);return s>=this.rx&&(s=this.rx-1),e>=this.ry&&(e=this.ry-1),s<0&&(s=0),e<0&&(e=0),this.listPixel[e*this.rx+s]}MouseMove(t,i,s){this.GetPixelAtPoint(new h.h9(t,i,s))}onDocumentMouseMove(){}onmouseenter(){}CVisLineGrid(t){for(let i=0;i<this.listPixel.length;++i){t.lineWidth=.5,t.beginPath(),t.moveTo(this.listPixel[i].recVec[0].x,this.listPixel[i].recVec[0].y);for(let s=1;s<this.listPixel[i].recVec.length;++s)t.lineTo(this.listPixel[i].recVec[s].x,this.listPixel[i].recVec[s].y);t.closePath(),t.strokeStyle="#ff0000",t.stroke()}}VisMeshGrid(){for(let t=0;t<this.listPixel.length;++t);}VisCenterPoints(t){t.fillStyle="#0ff00f";for(let i=0;i<this.listPixel.length;++i)t.beginPath(),t.arc(this.listPixel[i].vec.x,this.listPixel[i].vec.y,5,0,6.28),t.closePath(),t.fill()}Render(t){this.CVisLineGrid(t),this.VisCenterPoints(t)}constructor(t,i,s=10,e=10){this.listPixel=[],this.rx=0,this.ry=0,this.ddx=0,this.ddy=0,this.v0=h.h9.Origin(),this.v1=h.h9.Origin(),this.rx=s,this.ry=e,this.ddx=0,this.ddy=0,this.v0=t,this.v1=i,this.Init()}}class o{Render(t){this.pMap.Render(t)}MouseDown(t){}MouseUp(t){}MouseMove(t){}MouseDrag(t){}constructor(){this.pMap=new r(new h.h9(10,10),new h.h9(200,200))}}class c{BindEvent(){this.canvasCore.MouseDown=t=>this.core.MouseDown(t),this.canvasCore.MouseMove=t=>this.core.MouseMove(t),this.canvasCore.MouseUp=t=>this.core.MouseUp(t)}BindRenderer(){this.canvasCore.Render=t=>this.core.Render(t)}destroy(){this.canvasCore.destroy()}constructor(t="SandBox"){this.core=new o,this.canvasCore=new e(t),this.BindEvent(),this.BindRenderer()}}class l{destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}constructor(t){this.divHost=document.getElementById(t),new c(t)}}}}]);