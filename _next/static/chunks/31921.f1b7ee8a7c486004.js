"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31921,90512,58219],{90512:function(e,t,r){r.r(t),r.d(t,{GeometryBase:function(){return o}});class o{render(){}constructor(e){this.scene=e,this.scene.add(this)}}},31921:function(e,t,r){r.r(t),r.d(t,{RectScreen:function(){return i}});var o=r(58219),a=r(90512);class i extends a.GeometryBase{getRectangle(e,t,r,o){let a=e+r,i=t+o;return[e,t,a,t,e,i,e,i,a,t,a,i]}render(){this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.mesh,this.gl.STATIC_DRAW);var e=this.gl.TRIANGLES;this.gl.drawArrays(e,0,6)}constructor(e){super(e.scene),this.v="#version 300 es\n\n    in vec2 a_position;\n    uniform vec2 u_resolution;\n\n    void main() {\n        gl_Position = vec4(a_position , 0, 1);\n    }\n    ",this.f="#version 300 es\n\n    precision mediump float;\n    uniform vec4 u_color;\n\n    out vec4 outColor;\n\n    void main() {\n        outColor = u_color;\n    }\n    ",this.translation=[],this.color=[],this.gl=e.canvas.gl,this.program=o.GLShaderCommon.getShaderProgram(this.gl,this.v,this.f),this.program&&(this.positionAttributeLocation=this.gl.getAttribLocation(this.program,"a_position"),this.resolutionUniformLocation=this.gl.getUniformLocation(this.program,"u_resolution"),this.colorLocation=this.gl.getUniformLocation(this.program,"u_color")),this.positionBuffer=this.gl.createBuffer(),this.vao=this.gl.createVertexArray(),this.gl.bindVertexArray(this.vao),this.gl.enableVertexAttribArray(this.positionAttributeLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer);var t=this.gl.FLOAT;this.gl.vertexAttribPointer(this.positionAttributeLocation,2,t,!1,0,0),this.translation=[-1,-1],this.color=[Math.random(),Math.random(),Math.random(),1],this.width=.5,this.height=.5,this.mesh=new Float32Array(this.getRectangle(this.translation[0],this.translation[1],this.width,this.height)),this.gl.useProgram(this.program),this.gl.uniform2f(this.resolutionUniformLocation,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform4fv(this.colorLocation,this.color),this.gl.useProgram(null)}}},58219:function(e,t,r){r.r(t),r.d(t,{GLShaderCommon:function(){return o}});class o{static getShaderProgram(e,t,r){let a=!(arguments.length>3)||void 0===arguments[3]||arguments[3],i=o.createShader(e,e.VERTEX_SHADER,t),n=o.createShader(e,e.FRAGMENT_SHADER,r);return i&&n&&o.createProgram(e,i,n,a)||(console.error("vertex fragment shader error"),null)}static getShader(e,t,r){let o=e.createShader(t);return null===o?null:(e.shaderSource(o,r),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))?o:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(o)),e.deleteShader(o),null)}static createProgram(e,t,r){let o=!(arguments.length>3)||void 0===arguments[3]||arguments[3],a=e.createProgram();return null===a?null:(e.attachShader(a,t),e.attachShader(a,r),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS))?o&&(e.validateProgram(a),!e.getProgramParameter(a,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(a)),e.deleteProgram(a),e.deleteShader(r),e.deleteShader(t),null):(e.deleteShader(r),e.deleteShader(t),a):(console.log("Failed to link program: "+e.getProgramInfoLog(a)),e.deleteProgram(a),e.deleteShader(r),e.deleteShader(t),null)}static createShader(e,t,r){let o=e.createShader(t);return null===o?null:(e.shaderSource(o,r),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))?o:(console.log(e.getShaderInfoLog(o)),e.deleteShader(o),null)}static createShaderFromPath(e,t,r){let a=e.createShader(t);return null===a?null:(e.shaderSource(a,o.getSourceSynch(r)),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(console.log(e.getShaderInfoLog(a)),e.deleteShader(a),null)}static getSourceSynch(e){let t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),200===t.status?t.responseText:null}static loadImage(e,t){let r=new Image;r.onload=function(){t(null,r)},r.src=e}}}}]);