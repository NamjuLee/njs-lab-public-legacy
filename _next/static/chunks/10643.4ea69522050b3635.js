"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10643],{10643:function(e,t,r){r.r(t),r.d(t,{Solution:function(){return h},WebGL2GLSL:function(){return l}});class o{loop(e){requestAnimationFrame(()=>{this.loop(e)}),this.clear(e),this.Render(e)}Render(e){}clear(e){e.clearColor(1,1,1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}constructor(e){this.app=e,this.canvas=document.createElement("canvas"),this.app.divHost&&(this.app.divHost.appendChild(this.canvas),this.canvas.width=this.app.divHost.clientWidth,this.canvas.height=this.app.divHost.clientHeight);let t=this.canvas.getContext("webgl2");t&&(this.gl=t),this.loop(this.gl)}}class i{static getShader(e,t,r){let o=e.createShader(t);return null===o?null:(e.shaderSource(o,r),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))?o:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(o)),e.deleteShader(o),null)}static createProgram(e,t,r){let o=!(arguments.length>3)||void 0===arguments[3]||arguments[3],i=e.createProgram();return null===i?null:(e.attachShader(i,t),e.attachShader(i,r),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS))?o&&(e.validateProgram(i),!e.getProgramParameter(i,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(i)),e.deleteProgram(i),e.deleteShader(r),e.deleteShader(t),null):(e.deleteShader(r),e.deleteShader(t),i):(console.log("Failed to link program: "+e.getProgramInfoLog(i)),e.deleteProgram(i),e.deleteShader(r),e.deleteShader(t),null)}static createShader(e,t,r){let o=e.createShader(t);return null===o?null:(e.shaderSource(o,r),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))?o:(console.log(e.getShaderInfoLog(o)),e.deleteShader(o),null)}static createShaderFromPath(e,t,r){let o=e.createShader(t);return null===o?null:(e.shaderSource(o,i.getSourceSynch(r)),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))?o:(console.log(e.getShaderInfoLog(o)),e.deleteShader(o),null)}static getSourceSynch(e){let t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),200===t.status?t.responseText:null}static loadImage(e,t){let r=new Image;r.onload=function(){t(null,r)},r.src=e}}class s{Render(e){}constructor(e){this.scene=e,this.scene.list.push(this)}}class n extends s{initShader(e){let t=i.createShader(e,e.VERTEX_SHADER,this.v),r=i.createShader(e,e.FRAGMENT_SHADER,this.f);if(t&&r){this.vShader=t,this.fShader=r;let o=i.createProgram(e,this.vShader,this.fShader,!0);o&&(this.program=o,e.useProgram(this.program),this.aPositionLoc=e.getAttribLocation(this.program,"a_position"),this.uMouseLoc=e.getUniformLocation(this.program,"uMouseLoc"),e.useProgram(null),this.initGeo(e))}else console.error("vertex fragment shader error")}initGeo(e){let t=new Float32Array([-.5,.5,0,.5,-.5,0,-.5,-.5,0,-.5,.5,0,.5,-.5,0,.5,.5,0]),r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.useProgram(this.program),e.uniform2f(this.uMouseLoc,10,10),e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(this.aPositionLoc),e.vertexAttribPointer(this.aPositionLoc,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null)}Render(e){e.uniform2f(this.uMouseLoc,this.scene.app.m[0],this.scene.app.m[1]),e.drawArrays(e.TRIANGLE_STRIP,0,3),this.time+=.1}constructor(e,t){super(e),this.v="#version 300 es\n        in vec3 a_position;\n\n        uniform vec2 uMouseLoc;\n\n        out vec3 color;\n\n        void main(void) {\n            float d = distance(uMouseLoc, vec2(a_position.xy)) * 0.001;\n            color = vec3(d, 0, 0);\n            gl_Position = vec4(a_position, 1.0);\n        }\n    ",this.f="#version 300 es\n        precision mediump float;\n\n        in vec3 color;\n        out vec4 finalColor;\n\n        void main(void) {\n            finalColor = vec4(color, 1.0);\n        }\n    ",this.size=100,this.time=0,this.gl=t,this.initShader(t)}}class a{Init(){new n(this,this.app.coreWebg2.gl)}Render(e){for(let t=0;t<this.list.length;++t)this.list[t].Render(e)}constructor(e){this.list=[],this.app=e,this.app.coreWebg2.Render=this.Render.bind(this),this.Init()}}class l{static Init(e){new l(e)}constructor(e){this.m=[];let t=document.getElementById(e);t&&(this.divHost=t,this.divHost.onmousemove=e=>{this.m[0]=e.x,this.m[1]=e.y}),this.coreWebg2=new o(this),this.scene=new a(this)}}class h{destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(e){console.error("Error in destroy method:",e)}else console.warn("divHost is undefined in destroy method")}constructor(e){this.divHost=document.getElementById(e),l.Init(e)}}}}]);