"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[6096,51914,62087],{51914:(t,e,r)=>{r.r(e),r.d(e,{MeshBase:()=>o});class o{constructor(t){this.scene=void 0,this.scene=t,this.scene.add(this)}render(){}}},6096:(t,e,r)=>{r.r(e),r.d(e,{RectScreen:()=>a});var o=r(62087),i=r(51914);class a extends i.MeshBase{constructor(t){super(t.scene),this.v="#version 300 es\n\n    in vec2 a_position;\n    uniform vec2 u_resolution;\n\n    void main() {\n        gl_Position = vec4(a_position , 0, 1);\n    }\n    ",this.f="#version 300 es\n\n    precision mediump float;\n    uniform vec4 u_color;\n\n    out vec4 outColor;\n\n    void main() {\n        outColor = u_color;\n    }\n    ",this.app=void 0,this.gl=void 0,this.program=void 0,this.positionAttributeLocation=void 0,this.resolutionUniformLocation=void 0,this.colorLocation=void 0,this.positionBuffer=void 0,this.vao=void 0,this.translation=[],this.color=[],this.width=void 0,this.height=void 0,this.mesh=void 0,this.gl=t.canvas.gl,this.program=o.GLShaderCommon.getShaderProgram(this.gl,this.v,this.f),this.program&&(this.positionAttributeLocation=this.gl.getAttribLocation(this.program,"a_position"),this.resolutionUniformLocation=this.gl.getUniformLocation(this.program,"u_resolution"),this.colorLocation=this.gl.getUniformLocation(this.program,"u_color")),this.positionBuffer=this.gl.createBuffer(),this.vao=this.gl.createVertexArray(),this.gl.bindVertexArray(this.vao),this.gl.enableVertexAttribArray(this.positionAttributeLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer);var e=this.gl.FLOAT;this.gl.vertexAttribPointer(this.positionAttributeLocation,2,e,!1,0,0),this.translation=[-1,-1],this.color=[Math.random(),Math.random(),Math.random(),1],this.width=.5,this.height=.5,this.mesh=new Float32Array(this.getRectangle(this.translation[0],this.translation[1],this.width,this.height)),this.gl.useProgram(this.program),this.gl.uniform2f(this.resolutionUniformLocation,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform4fv(this.colorLocation,this.color),this.gl.useProgram(null)}getRectangle(t,e,r,o){let i=t+r,a=e+o;return[t,e,i,e,t,a,t,a,i,e,i,a]}render(){this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.mesh,this.gl.STATIC_DRAW);var t=this.gl.TRIANGLES;this.gl.drawArrays(t,0,6)}}},62087:(t,e,r)=>{r.r(e),r.d(e,{GLShaderCommon:()=>o});class o{static getShaderProgram(t,e,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=o.createShader(t,t.VERTEX_SHADER,e),s=o.createShader(t,t.FRAGMENT_SHADER,r);if(a&&s){let e=o.createProgram(t,a,s,i);return e||(console.error("vertex fragment shader error"),null)}return console.error("vertex fragment shader error"),null}static getShader(t,e,r){const o=t.createShader(e);return null===o?null:(t.shaderSource(o,r),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(console.log("An error occurred compiling the shaders:"+t.getShaderInfoLog(o)),t.deleteShader(o),null))}static createProgram(t,e,r){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const i=t.createProgram();if(null===i)return null;if(t.attachShader(i,e),t.attachShader(i,r),t.linkProgram(i),!t.getProgramParameter(i,t.LINK_STATUS)){const o=t.getProgramInfoLog(i);return console.log("Failed to link program: "+o),t.deleteProgram(i),t.deleteShader(r),t.deleteShader(e),null}return o&&(t.validateProgram(i),!t.getProgramParameter(i,t.VALIDATE_STATUS))?(console.error("Failed to validate program",t.getProgramInfoLog(i)),t.deleteProgram(i),t.deleteShader(r),t.deleteShader(e),null):(t.deleteShader(r),t.deleteShader(e),i)}static createShader(t,e,r){const o=t.createShader(e);if(null===o)return null;t.shaderSource(o,r),t.compileShader(o);return t.getShaderParameter(o,t.COMPILE_STATUS)?o:(console.log(t.getShaderInfoLog(o)),t.deleteShader(o),null)}static createShaderFromPath(t,e,r){const i=t.createShader(e);if(null===i)return null;t.shaderSource(i,o.getSourceSynch(r)),t.compileShader(i);return t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.log(t.getShaderInfoLog(i)),t.deleteShader(i),null)}static getSourceSynch(t){const e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),200===e.status?e.responseText:null}static loadImage(t,e){const r=new Image;r.onload=function(){e(null,r)},r.src=t}}}}]);
//# sourceMappingURL=6096.49f3de25.chunk.js.map