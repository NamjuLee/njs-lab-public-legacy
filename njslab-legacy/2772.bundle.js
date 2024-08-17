"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2772],{2772:(t,o,n)=>{n.r(o),n.d(o,{AppCanvasTemplate:()=>i});var e=function(){function t(t){this.t=0,this.InitCanvas(t)}return t.prototype.InitCanvas=function(t){var o=document.createElement("canvas"),n=document.getElementById(t);if(n&&(n.appendChild(o),this.host=n),o){this.canvas=o,this.canvas.width=this.host.clientWidth,this.canvas.height=this.host.clientHeight;var e=this.canvas.getContext("2d");e&&(this.ctx=e,this.Init())}},t.prototype.Init=function(){this.EventBind(),this.Loop()},t.prototype.EventBind=function(){var t=this;this.canvas.onmousedown=function(o){return t.MouseDown(o)},this.canvas.onmouseup=function(o){return t.MouseUp(o)},this.canvas.onmousemove=function(o){return t.MouseMove(o)},window.onresize=function(o){return t.Resize(o)}},t.prototype.Resize=function(t){console.log(t),this.canvas.width=this.host.clientWidth,this.canvas.height=this.host.clientHeight},t.prototype.Loop=function(){var t=this;requestAnimationFrame((function(){t.Loop()})),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.Render(this.ctx)},t.prototype.Render=function(t){console.log(t)},t.prototype.MouseDown=function(t){console.log(t)},t.prototype.MouseUp=function(t){console.log(t)},t.prototype.MouseMove=function(t){console.log(t)},t}(),s=function(){function t(t){this.pos=[],this.col=[],this.canvasCore=t;for(var o=0;o<300;++o){var n=Math.random()*this.canvasCore.canvas.height;this.pos.push([Math.random()*this.canvasCore.canvas.width,n,n,Math.random()]),this.col.push([100+250*Math.random(),0,0,Math.random()])}}return t.prototype.Render=function(t){t.fillStyle="#eeeeee",t.beginPath(),t.rect(0,0,t.canvas.width,t.canvas.height),t.fill();for(var o=0;o<this.pos.length;++o)this.pos[o][1]+=7*this.pos[o][3],this.pos[o][1]>t.canvas.height&&(this.pos[o][1]=0),t.fillStyle="rgba("+this.col[o][0]+","+this.col[o][1]+","+this.col[o][2]+", "+this.col[o][3]+")",t.beginPath(),t.arc(this.pos[o][0],this.pos[o][1],10,0,2*Math.PI),t.closePath(),t.fill()},t.prototype.MouseDown=function(t){console.log(t,"core")},t.prototype.MouseUp=function(t){console.log(t,"core")},t.prototype.MouseMove=function(t){console.log(t,"core")},t.prototype.MouseDrag=function(t){console.log(t,"core")},t}(),i=function(){function t(t){void 0===t&&(t="SandBox"),this.canvasCore=new e(t),this.core=new s(this.canvasCore),this.BindEvent(),this.BindRenderer()}return t.Init=function(o){new t(o).Dummy()},t.prototype.Dummy=function(){},t.prototype.BindEvent=function(){var t=this;this.canvasCore.MouseDown=function(o){return t.core.MouseDown(o)},this.canvasCore.MouseMove=function(o){return t.core.MouseMove(o)},this.canvasCore.MouseUp=function(o){return t.core.MouseUp(o)}},t.prototype.BindRenderer=function(){var t=this;this.canvasCore.Render=function(o){return t.core.Render(o)}},t}()}}]);