"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46182],{46182:function(t,s,e){e.r(s),e.d(s,{Canvas:function(){return a}});class a{loop(t){this.clear(t),requestAnimationFrame(()=>{this.loop(t)}),this.app.renderer.render(t)}clear(t){t.clearColor(1,1,1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)}constructor(t){this.app=t,this.canvas=document.createElement("canvas"),this.app.host&&(this.app.host.appendChild(this.canvas),this.canvas.width=this.app.host.clientWidth,this.canvas.height=this.app.host.clientHeight);let s=this.canvas.getContext("webgl2");null!==s&&(this.gl=s),this.loop(this.gl)}}}}]);