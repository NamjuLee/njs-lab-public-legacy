"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9773],{9773:(t,e,n)=>{n.r(e),n.d(e,{ImageEditor:()=>a});var i=n(8892),o=function(){function t(t){var e=document.getElementById(t);e&&(this.divHost=e,this.divHost.style.backgroundColor="#999999",this.InitApp())}return t.prototype.InitApp=function(){var t=this;this.rect=new s;var e=document.createElement("button");e.textContent="Capture",this.divHost.append(e),e.onclick=function(){p.push(new i.h9(d,l)),console.log(p)},(e=document.createElement("button")).textContent="Play",this.divHost.append(e),e.onclick=function(){console.log("play.....")};var n=document.createElement("div");n.style.width="400px",n.style.height="400px",n.style.margin="50px",n.style.overflow="hidden",n.style.backgroundColor="#ffffff",this.divHost.append(n);var o=new Image;o.src="https://raw.githubusercontent.com/NamjuLee/data/master/img/bg/zoom-James-River-Kayaking.jpg",o.style.pointerEvents="none",o.onload=function(){n.style.width=o.width+"px",n.style.height=o.height+"px",t.InitCanvas(o),n.append(o)};var a=!1,r=1,h=0,c=0,d=0,l=0,p=[];n.addEventListener("mousedown",(function(t){a=!0,console.log("down",t),h=t.x,c=t.y})),n.addEventListener("mousemove",(function(e){if(a){var n=h-e.x,i=c-e.y,s=["translate("+(d+=-n)+"px, "+(l+=-i)+"px)","scale3d("+r+", "+r+", 1)","rotate(0deg)"];t.UpdateValue(o,s),h=e.x,c=e.y,t.rect.render(t.ctx)}})),n.addEventListener("mouseup",(function(t){console.log("up",t),a=!1})),n.addEventListener("wheel",(function(e){var n=.001*-e.deltaY;r+=n,console.log(.01*e.deltaY);var i=["translate("+d+"px, "+l+"px)","scale3d("+r+", "+r+", 1)","rotate(0deg)"];t.UpdateValue(o,i)})),this.div=n},t.prototype.InitCanvas=function(t){var e=document.createElement("canvas");e.style.width=t.width+"px",e.style.height=t.height+"px",e.style.zIndex="10",e.style.position="absolute",this.div.append(e),this.ctx=e.getContext("2d"),this.rect.render(this.ctx)},t.prototype.UpdateValue=function(t,e){var n=e.join(" ");t.style.webkitTransform=n,t.style.transform=n},t.prototype.Render=function(){},t}(),s=function(){function t(){this.x=100,this.y=50,this.width=50,this.height=50,this.r=50,this.isHover=!1}return t.prototype.render=function(t){t.fillStyle="rgba(255, 0, 0, 1)",t.beginPath(),t.rect(0,0,t.canvas.width,this.y),t.rect(0,this.y+this.height,t.canvas.width,t.canvas.height),t.rect(0,0,this.x,t.canvas.height),t.rect(this.x+this.width,0,t.canvas.width,t.canvas.height),t.fill()},t.prototype.IsHover=function(t,e){return n=t,i=e,o=this.x,s=this.y,Math.sqrt((n-o)*(n-o)+(i-s)*(i-s))<this.r?(this.isHover=!0,!0):(this.isHover=!1,!1);var n,i,o,s},t}(),a=function(){function t(t){void 0===t&&(t="SandBox"),this.implementation=new o(t)}return t.Init=function(e){new t(e).Dummy()},t.prototype.Dummy=function(){},t}()}}]);