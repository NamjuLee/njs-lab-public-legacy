"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29311],{15819:function(t,e,s){s.r(e),s.d(e,{Canvas:function(){return a}});class a{loop(){this.clear(this.gl),requestAnimationFrame(()=>{this.loop()}),this.app.renderer.render()}clear(t){t.cullFace(t.BACK),t.frontFace(t.CCW),t.enable(t.DEPTH_TEST),t.enable(t.CULL_FACE),t.depthFunc(t.LEQUAL),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.clearColor(1,1,1,1)}constructor(t){this.app=t,this.canvas=document.createElement("canvas"),this.app.host&&(this.app.host.appendChild(this.canvas),this.canvas.width=this.app.host.clientWidth,this.canvas.height=this.app.host.clientHeight);let e=this.canvas.getContext("webgl2");null!==e&&(this.gl=e,this.gl.cullFace(e.BACK),this.gl.frontFace(e.CCW),this.gl.enable(e.DEPTH_TEST),this.gl.enable(e.CULL_FACE),this.gl.depthFunc(e.LEQUAL),this.gl.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA)),this.loop()}}}}]);