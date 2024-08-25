"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30464,77470],{77470:function(e,r,t){var a,i;t.r(r),t.d(r,{ATTR:function(){return a},AttribLocations:function(){return o},Shader:function(){return s},ShaderUtility:function(){return l},UniformLocations:function(){return n}}),(i=a||(a={})).ATTR_POSITION_NAME="a_position",i[i.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",i.ATTR_NORMAL_NAME="a_norm",i[i.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",i.ATTR_UV_NAME="a_uv",i[i.ATTR_UV_LOC=2]="ATTR_UV_LOC",i.ATTR_COLOR_NAME="a_color",i[i.ATTR_COLOR_LOC=4]="ATTR_COLOR_LOC";class o{constructor(e,r){this.position=e.getAttribLocation(r,"a_position"),this.norm=e.getAttribLocation(r,"a_norm"),this.uv=e.getAttribLocation(r,"a_uv")}}class n{constructor(e,r){this.perspective=e.getUniformLocation(r,"uPMatrix"),this.modelMatrix=e.getUniformLocation(r,"uMVMatrix"),this.cameraMatrix=e.getUniformLocation(r,"uCameraMatrix"),this.mainTexture=e.getUniformLocation(r,"uMainTex")}}class s{activate(){return this.gl.useProgram(this.program),this}deactivate(){return this.gl.useProgram(null),this}dispose(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.program&&this.gl.useProgram(null),this.gl.deleteProgram(this.program)}setPerspective(e){return this.gl.uniformMatrix4fv(this.uniformLoc.perspective,!1,e),this}setModelMatrix(e){return this.gl.uniformMatrix4fv(this.uniformLoc.modelMatrix,!1,e),this}setCameraMatrix(e){return this.gl.uniformMatrix4fv(this.uniformLoc.cameraMatrix,!1,e),this}preRender(){}renderModel(e){return this.setModelMatrix(e.transform.getViewMatrix()),this.gl.bindVertexArray(e.vao.vao),e.vao.noCulling&&this.gl.disable(this.gl.CULL_FACE),e.vao.doBlending&&this.gl.enable(this.gl.BLEND),e.vao.indexCount?this.gl.drawElements(e.vao.drawMode,e.vao.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(e.vao.drawMode,0,e.vao.vertexCount),this.gl.bindVertexArray(null),e.vao.noCulling&&this.gl.enable(this.gl.CULL_FACE),e.vao.doBlending&&this.gl.disable(this.gl.BLEND),this}constructor(e,r,t,a=!0){if(this.gl=e,this.vShader=l.CreateShader(e,e.VERTEX_SHADER,r),this.fShader=l.CreateShader(e,e.FRAGMENT_SHADER,t),this.vShader&&this.fShader){let r=l.CreateProgram(e,this.vShader,this.fShader,a);if(r){this.program=r,e.useProgram(this.program),this.attribLoc=new o(e,this.program),this.uniformLoc=new n(e,this.program);return}console.error("vertex fragment shader error");return}console.error("vertex fragment shader error");return}}class l{static CreateProgram(e,r,t){let a=!(arguments.length>3)||void 0===arguments[3]||arguments[3],i=e.createProgram();return null===i?null:(e.attachShader(i,r),e.attachShader(i,t),e.bindAttribLocation(i,0,"a_position"),e.bindAttribLocation(i,1,"a_norm"),e.bindAttribLocation(i,2,"a_uv"),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS))?a&&(e.validateProgram(i),!e.getProgramParameter(i,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(i)),e.deleteProgram(i),e.deleteShader(t),e.deleteShader(r),null):(e.deleteShader(t),e.deleteShader(r),i):(console.log("Failed to link program: "+e.getProgramInfoLog(i)),e.deleteProgram(i),e.deleteShader(t),e.deleteShader(r),null)}static CreateShader(e,r,t){let a=e.createShader(r);return null===a?null:(e.shaderSource(a,t),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(console.log(e.getShaderInfoLog(a)),e.deleteShader(a),null)}static LoadTexture(e,r,t){let a=e.createTexture();return!0===t&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1),e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_NEAREST),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),!0===t&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1),a}}},30464:function(e,r,t){t.r(r),t.d(r,{DRAW_MODE:function(){return a},VAO:function(){return o}});var a,i=t(77470);a||(a={});class o{constructor(e,r,t,a,o,n){this.noCulling=!0,this.doBlending=!0,this.name=r,this.drawMode=e.TRIANGLES,this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),void 0!==t&&null!=t&&(this.bufVertices=e.createBuffer(),this.vertexComponentLen=3,this.vertexCount=t.length/this.vertexComponentLen,e.bindBuffer(e.ARRAY_BUFFER,this.bufVertices),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t),e.STATIC_DRAW),e.enableVertexAttribArray(i.ATTR.ATTR_POSITION_LOC),e.vertexAttribPointer(i.ATTR.ATTR_POSITION_LOC,3,e.FLOAT,!1,0,0)),null!=o&&(this.bufNormals=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.bufNormals),e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),e.enableVertexAttribArray(i.ATTR.ATTR_NORMAL_LOC),e.vertexAttribPointer(i.ATTR.ATTR_NORMAL_LOC,3,e.FLOAT,!1,0,0)),null!=n&&(this.bufUV=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.bufUV),e.bufferData(e.ARRAY_BUFFER,new Float32Array(n),e.STATIC_DRAW),e.enableVertexAttribArray(i.ATTR.ATTR_UV_LOC),e.vertexAttribPointer(i.ATTR.ATTR_UV_LOC,2,e.FLOAT,!1,0,0)),null!=a&&(this.bufIndex=e.createBuffer(),this.indexCount=a.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.bufIndex),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(a),e.STATIC_DRAW)),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)}}}}]);