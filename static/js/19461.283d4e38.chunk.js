"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[19461],{19461:(s,i,t)=>{t.r(i),t.d(i,{RenderLoop:()=>a});class a{constructor(s,i){this.msLastFrame=void 0,this.callBack=void 0,this.isActive=void 0,this.fps=void 0,this.msFpsLimit=void 0,this.msLastFrame=0,this.callBack=s,this.isActive=!1,this.fps=0,!i&&i>0?(this.msFpsLimit=1e3/i,this.run=()=>{var s=performance.now(),i=s-this.msLastFrame,t=i/1e3;i>=this.msFpsLimit&&(this.fps=Math.floor(1/t),this.msLastFrame=s,this.callBack(t)),this.isActive&&window.requestAnimationFrame(this.run)}):this.run=()=>{var s=performance.now(),i=(s-this.msLastFrame)/1e3;this.fps=Math.floor(1/i),this.msLastFrame=s,this.callBack(i),this.isActive&&window.requestAnimationFrame(this.run)}}run(){}start(){return this.isActive=!0,this.msLastFrame=performance.now(),window.requestAnimationFrame(this.run),this}stop(){this.isActive=!1}}}}]);
//# sourceMappingURL=19461.283d4e38.chunk.js.map