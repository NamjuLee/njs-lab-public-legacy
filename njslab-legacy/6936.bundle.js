"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6936],{6936:(t,n,o)=>{o.r(n),o.d(n,{AppCanvasTemplate:()=>s});var e=function(){function t(t){this.t=0,this.InitCanvas(t)}return t.prototype.InitCanvas=function(t){var n=document.createElement("canvas"),o=document.getElementById(t);if(o&&(o.appendChild(n),this.host=o),n){this.canvas=n,this.canvas.width=this.host.clientWidth,this.canvas.height=this.host.clientHeight;var e=this.canvas.getContext("2d");e&&(this.ctx=e,this.Init())}},t.prototype.Init=function(){this.EventBind(),this.Loop()},t.prototype.EventBind=function(){var t=this;this.canvas.onmousedown=function(n){return t.MouseDown(n)},this.canvas.onmouseup=function(n){return t.MouseUp(n)},this.canvas.onmousemove=function(n){return t.MouseMove(n)},window.onresize=function(n){return t.Resize(n)}},t.prototype.Resize=function(t){this.canvas.width=this.host.clientWidth,this.canvas.height=this.host.clientHeight},t.prototype.Loop=function(){var t=this;requestAnimationFrame((function(){t.Loop()})),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.Render(this.ctx)},t.prototype.Render=function(t){},t.prototype.MouseDown=function(t){},t.prototype.MouseUp=function(t){},t.prototype.MouseMove=function(t){},t}(),i=function(){function t(t){this.pos=[],this.col=[],this.canvasCore=t;for(var n=0;n<300;++n){var o=Math.random()*this.canvasCore.canvas.height;this.pos.push([Math.random()*this.canvasCore.canvas.width,o,o,Math.random()]),this.col.push([100+250*Math.random(),0,0,Math.random()])}}return t.prototype.Render=function(t){t.fillStyle="#eeeeee",t.beginPath(),t.rect(0,0,t.canvas.width,t.canvas.height),t.fill();for(var n=0;n<this.pos.length;++n)this.pos[n][1]+=7*this.pos[n][3],this.pos[n][1]>t.canvas.height&&(this.pos[n][1]=0),t.fillStyle="rgba("+this.col[n][0]+","+this.col[n][1]+","+this.col[n][2]+", "+this.col[n][3]+")",t.beginPath(),t.arc(this.pos[n][0],this.pos[n][1],10,0,2*Math.PI),t.closePath(),t.fill()},t.prototype.MouseDown=function(t){},t.prototype.MouseUp=function(t){},t.prototype.MouseMove=function(t){},t.prototype.MouseDrag=function(t){},t}(),s=function(){function t(t){void 0===t&&(t="SandBox"),this.canvasCore=new e(t),this.core=new i(this.canvasCore),this.BindEvent(),this.BindRenderer()}return t.Init=function(n){new t(n).Dummy()},t.prototype.Dummy=function(){},t.prototype.BindEvent=function(){var t=this;this.canvasCore.MouseDown=function(n){return t.core.MouseDown(n)},this.canvasCore.MouseMove=function(n){return t.core.MouseMove(n)},this.canvasCore.MouseUp=function(n){return t.core.MouseUp(n)}},t.prototype.BindRenderer=function(){var t=this;this.canvasCore.Render=function(n){return t.core.Render(n)}},t}()}}]);