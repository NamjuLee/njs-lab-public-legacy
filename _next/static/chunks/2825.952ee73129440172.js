"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2825],{16203:function(t,s,e){e.d(s,{b:function(){return i}});class i{start(){this.loop(this.ctx)}destroy(){window.removeEventListener("resize",this.resize),this.isStatic=!0;try{for(;this.divHost&&this.divHost.lastElementChild;){let t=this.divHost.lastElementChild;this.divHost.removeChild(t)}}catch(t){}this.destroyPost()}destroyPost(){}loop(t){this.isStatic||(requestAnimationFrame(()=>{this.loop(t)}),t.clearRect(-.5*t.canvas.width,-.5*t.canvas.height,t.canvas.width,t.canvas.height),this.render(t),this.renderPost())}renderPost(){this.renderMouse(this.ctx,this.m[0],this.m[1])}render(t){}mouseClick(t,s){this.debugMode&&console.log("click")}mouseDoubleClick(t,s){this.debugMode&&console.log("d-click")}mouseDown(t,s){this.debugMode&&console.log("down")}mouseUp(t,s){this.debugMode&&console.log("up")}mouseMove(t,s){this.debugMode&&console.log("move")}mouseDrag(t,s){this.debugMode&&console.log("drag")}mouseWheel(t){this.debugMode&&console.log("wheel",t)}renderMouse(t,s,e){t.fillStyle="#f00",t.beginPath(),t.arc(this.m[0],this.m[1],3,0,2*Math.PI),t.fillText("x: ".concat(this.m[0],", y:").concat(this.m[1]),this.m[0]-15,this.m[1]-8),t.closePath(),t.fill()}mouseUpdate(t,s){this.m[0]=Math.floor(t-.5*this.canvas.width),this.m[1]=Math.floor(s-.5*this.canvas.height)}constructor(t){this.isDown=!1,this.debugMode=!1,this.isStatic=!1,this.m=[0,0],this.prevent=!1,this.delay=250,this.isDrag=!1,this.resize=()=>{let t=this.divHost.getBoundingClientRect();this.canvas.width=t.width,this.canvas.height=t.height},this.divHost=t;let s=this.divHost.getBoundingClientRect();this.canvas=document.createElement("canvas"),this.canvas.width=s.width,this.canvas.height=s.height,this.divHost.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.canvas.onclick=t=>{this.timer=setTimeout(()=>{this.prevent||this.mouseClick(t.offsetX,t.offsetY),this.isDrag=!1,this.prevent=!1},this.delay)},this.canvas.onwheel=t=>{this.mouseWheel(t)},this.canvas.ondblclick=t=>{this.mouseUpdate(t.offsetX,t.offsetY),clearTimeout(this.timer),this.prevent=!0,this.mouseDoubleClick(t.offsetX,t.offsetY)},this.canvas.onmousedown=t=>{this.mouseUpdate(t.offsetX,t.offsetY),this.isDown=!0,this.mouseDown(t.offsetX,t.offsetY)},this.canvas.onmouseup=t=>{this.mouseUpdate(t.offsetX,t.offsetY),this.isDown=!1,this.isDrag=!1,this.mouseUp(t.offsetX,t.offsetY)},this.canvas.onmousemove=t=>{this.mouseUpdate(t.offsetX,t.offsetY),this.isDown?(this.isDrag=!0,this.prevent=!0,this.mouseDrag(t.offsetX,t.offsetY)):this.mouseMove(t.offsetX,t.offsetY)},window.addEventListener("resize",this.resize)}}},2825:function(t,s,e){e.r(s),e.d(s,{Solution:function(){return o}});var i=e(16203);class o extends i.b{init(){this.start()}render(t){new h(0,0,0).render(t),new h(0,100,0).render(t),new h(100,0,0).render(t)}constructor(t){super(document.getElementById(t)),this.ctx.translate(.5*this.ctx.canvas.width,.5*this.ctx.canvas.height),this.init()}}class h{render(t){t.fillStyle="#333",t.beginPath(),t.arc(this.x,this.y,this.r,0,2*Math.PI),t.closePath(),t.fill()}constructor(t,s,e){this.x=0,this.y=0,this.z=0,this.r=10,this.x=t,this.y=s,this.z=e}}}}]);