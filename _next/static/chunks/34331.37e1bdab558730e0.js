"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34331],{34331:function(t,i,s){s.r(i),s.d(i,{Solution:function(){return h}});var e=s(16203);class h extends e.b{init(){this.pMap=new o(new r(-300,-300,0),new r(300,300,0),5,5),this.start()}render(t){this.pMap.render(t)}mouseMove(t,i){this.pMap.picking(t-.5*this.ctx.canvas.width,i-.5*this.ctx.canvas.height)}mouseClick(t,i){}constructor(t){super(document.getElementById(t)),this.t=0,this.pMap=void 0,this.ctx.translate(.5*this.ctx.canvas.width,.5*this.ctx.canvas.height),this.init()}}class o{init(){this.pixelList=[];let t=this.minV.x,i=this.minV.y;this.intervalX=(this.maxV.x-this.minV.x)/(this.rx-1),this.intervalY=(this.maxV.y-this.minV.y)/(this.ry-1);for(let s=0;s<this.ry;s++)for(let e=0;e<this.rx;e++){let h=new n(this,t+e*this.intervalX,i+s*this.intervalY,0);h.xi=e,h.yi=s,this.pixelList.push(h)}}initGridNeighbor(){for(let t=0;t<this.ry;++t)for(let i=0;i<this.rx;++i){let s=i+t*this.rx,e=this.pixelList[s];i>0&&e.nPix.push(this.pixelList[s-1]),i<this.rx-1&&e.nPix.push(this.pixelList[s+1]),t>0&&e.nPix.push(this.pixelList[s-this.rx]),t<this.ry-1&&e.nPix.push(this.pixelList[s+this.rx]),i>0&&t<this.ry-1&&e.nPix.push(this.pixelList[s+this.rx-1]),i>0&&t>0&&e.nPix.push(this.pixelList[s-this.rx-1]),i<this.rx-1&&t<this.ry-1&&e.nPix.push(this.pixelList[s+this.rx+1]),i<this.rx-1&&t>0&&e.nPix.push(this.pixelList[s-this.rx+1])}}picking(t,i){let s=new r(t,i,0),e=Number.MAX_VALUE,h=-1;for(let t=0;t<this.pixelList.length;++t){let i=l(this.pixelList[t].vec,s);e>i&&(e=i,h=t),this.pixelList[t].hover=!1}h>-1&&(this.pixelList[h].hover=!0)}render(t){this.pixelList.forEach(i=>{i.render(t)})}constructor(t,i,s,e){this.pixelList=[],this.rx=10,this.ry=10,this.minV=t,this.maxV=i,this.rx=s,this.ry=e,this.init(),this.initGridNeighbor()}}class n{render(t){let i=this.pMap.intervalX,s=this.pMap.intervalY;if(t.beginPath(),t.rect(this.vec.x-.5*i,this.vec.y-.5*s,i,s),t.closePath(),t.stroke(),this.hover&&(t.fillStyle="#555",t.fill()),t.beginPath(),t.arc(this.vec.x,this.vec.y,this.vec.r,0,2*Math.PI),t.closePath(),this.hover?t.fillStyle="#999":t.fillStyle="#333",t.fill(),this.hover){for(let i=0;i<this.nPix.length;++i)t.beginPath(),t.moveTo(this.vec.x,this.vec.y),t.lineTo(this.nPix[i].vec.x,this.nPix[i].vec.y),t.closePath(),t.stroke();t.strokeText("x: ".concat(this.xi,", y: ").concat(this.yi),this.vec.x,this.vec.y)}}constructor(t,i,s,e){this.hover=!1,this.nPix=[],this.pMap=t,this.vec=new r(i,s,e)}}class r{constructor(t,i,s){this.x=0,this.y=0,this.z=0,this.r=3,this.x=t,this.y=i,this.z=s}}let l=(t,i)=>Math.sqrt(a(t,i)),a=(t,i)=>(t.x-i.x)*(t.x-i.x)+(t.y-i.y)*(t.y-i.y)+(t.z-i.z)*(t.z-i.z)},16203:function(t,i,s){s.d(i,{b:function(){return e}});class e{start(){this.loop(this.ctx)}destroy(){window.removeEventListener("resize",this.resize),this.isStatic=!0;try{for(;this.divHost&&this.divHost.lastElementChild;){let t=this.divHost.lastElementChild;this.divHost.removeChild(t)}}catch(t){}this.destroyPost()}destroyPost(){}loop(t){this.isStatic||(requestAnimationFrame(()=>{this.loop(t)}),t.clearRect(-.5*t.canvas.width,-.5*t.canvas.height,t.canvas.width,t.canvas.height),this.render(t),this.renderPost())}renderPost(){this.renderMouse(this.ctx,this.m[0],this.m[1])}render(t){}mouseClick(t,i){this.debugMode&&console.log("click")}mouseDoubleClick(t,i){this.debugMode&&console.log("d-click")}mouseDown(t,i){this.debugMode&&console.log("down")}mouseUp(t,i){this.debugMode&&console.log("up")}mouseMove(t,i){this.debugMode&&console.log("move")}mouseDrag(t,i){this.debugMode&&console.log("drag")}mouseWheel(t){this.debugMode&&console.log("wheel",t)}renderMouse(t,i,s){t.fillStyle="#f00",t.beginPath(),t.arc(this.m[0],this.m[1],3,0,2*Math.PI),t.fillText("x: ".concat(this.m[0],", y:").concat(this.m[1]),this.m[0]-15,this.m[1]-8),t.closePath(),t.fill()}mouseUpdate(t,i){this.m[0]=Math.floor(t-.5*this.canvas.width),this.m[1]=Math.floor(i-.5*this.canvas.height)}constructor(t){this.isDown=!1,this.debugMode=!1,this.isStatic=!1,this.m=[0,0],this.prevent=!1,this.delay=250,this.isDrag=!1,this.resize=()=>{let t=this.divHost.getBoundingClientRect();this.canvas.width=t.width,this.canvas.height=t.height},this.divHost=t;let i=this.divHost.getBoundingClientRect();this.canvas=document.createElement("canvas"),this.canvas.width=i.width,this.canvas.height=i.height,this.divHost.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.canvas.onclick=t=>{this.timer=setTimeout(()=>{this.prevent||this.mouseClick(t.offsetX,t.offsetY),this.isDrag=!1,this.prevent=!1},this.delay)},this.canvas.onwheel=t=>{this.mouseWheel(t)},this.canvas.ondblclick=t=>{this.mouseUpdate(t.offsetX,t.offsetY),clearTimeout(this.timer),this.prevent=!0,this.mouseDoubleClick(t.offsetX,t.offsetY)},this.canvas.onmousedown=t=>{this.mouseUpdate(t.offsetX,t.offsetY),this.isDown=!0,this.mouseDown(t.offsetX,t.offsetY)},this.canvas.onmouseup=t=>{this.mouseUpdate(t.offsetX,t.offsetY),this.isDown=!1,this.isDrag=!1,this.mouseUp(t.offsetX,t.offsetY)},this.canvas.onmousemove=t=>{this.mouseUpdate(t.offsetX,t.offsetY),this.isDown?(this.isDrag=!0,this.prevent=!0,this.mouseDrag(t.offsetX,t.offsetY)):this.mouseMove(t.offsetX,t.offsetY)},window.addEventListener("resize",this.resize)}}}}]);