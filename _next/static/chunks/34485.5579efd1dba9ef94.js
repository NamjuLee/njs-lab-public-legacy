"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34485,90512,33913,39704,24278,77470,53066,30464],{90512:function(t,r,e){e.r(r),e.d(r,{GeometryBase:function(){return i}});class i{render(){}constructor(t){this.scene=t,this.scene.add(this)}}},34485:function(t,r,e){e.r(r),e.d(r,{PointScreen:function(){return h}});var i=e(30464),a=e(24278),n=e(90512),s=e(77470);class o extends s.Shader{set(t,r){return this.gl.uniform1f(this.uPointSize,t),this.gl.uniform1f(this.uAngle,r),this}constructor(t,r,e){super(t,r,e),this.program&&(this.uPointSize=t.getUniformLocation(this.program,"uPointSize"),this.uAngle=t.getUniformLocation(this.program,"uAngle")),t.useProgram(null)}}class h extends n.GeometryBase{initShader(t){this.shader=new o(t,this.v,this.f),this.vao=new i.VAO(t,"dots",[0,0,0,.1,.1,0,.1,-.1,0,-.1,-.1,0,-.1,.1,0]),this.vao.drawMode=t.POINTS,this.model=new a.Model(this.vao)}render(){this.size+=.01;let t=10*Math.sin(this.size)+30;this.rotation+=.02,this.shader.activate(),this.shader.set(t,this.rotation),this.shader.renderModel(this.model)}constructor(t){super(t.scene),this.vOld="#version 300 es\n        in vec3 a_position;\n\n        uniform float uPointSize;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = vec4(a_position, 1.0);\n        }\n    ",this.fOld="#version 300 es\n        precision mediump float;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            finalColor = vec4(1.0, 0.0, 0.0, 1.0);\n        }\n    ",this.v="#version 300 es\n\n        in vec3 a_position;\n\n        uniform mediump float uPointSize;\n        uniform float uAngle;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = vec4(cos(uAngle) * 0.8 + a_position.x, sin(uAngle) * 0.8 + a_position.y, a_position.z, 1.0);\n        }\n    ",this.f="#version 300 es\n        precision mediump float;\n\n        uniform float uPointSize;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            float c = (40. - uPointSize ) / 20.;\n            finalColor = vec4(c, c, c, 1.0);\n        }\n    ",this.size=2.5,this.rotation=0,this.app=t,this.gl=t.canvas.gl,this.initShader(this.gl)}}},33913:function(t,r,e){e.r(r),e.d(r,{Matrix4:function(){return i}});class i{static identity(){let t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}static perspective(t,r,e,i,a){let n=1/Math.tan(r/2),s=1/(i-a);t[0]=n/e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+i)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*i*s,t[15]=0}static ortho(t,r,e,i,a,n,s){let o=1/(r-e),h=1/(i-a),l=1/(n-s);t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(r+e)*o,t[13]=(a+i)*h,t[14]=(s+n)*l,t[15]=1}static transpose(t,r){if(t===r){let e=r[1],i=r[2],a=r[3],n=r[6],s=r[7],o=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=e,t[6]=r[9],t[7]=r[13],t[8]=i,t[9]=n,t[11]=r[14],t[12]=a,t[13]=s,t[14]=o}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}static normalMat3(t,r){let e=r[0],i=r[1],a=r[2],n=r[3],s=r[4],o=r[5],h=r[6],l=r[7],u=r[8],c=r[9],d=r[10],m=r[11],f=r[12],A=r[13],g=r[14],T=r[15],_=e*o-i*s,R=e*h-a*s,v=e*l-n*s,x=i*h-a*o,M=i*l-n*o,L=a*l-n*h,S=u*A-c*f,w=u*g-d*f,p=u*T-m*f,E=c*g-d*A,P=c*T-m*A,C=d*T-m*g,b=_*C-R*P+v*E+x*p-M*w+L*S;return b?(b=1/b,t[0]=(o*C-h*P+l*E)*b,t[1]=(h*p-s*C-l*w)*b,t[2]=(s*P-o*p+l*S)*b,t[3]=(a*P-i*C-n*E)*b,t[4]=(e*C-a*p+n*w)*b,t[5]=(i*p-e*P-n*S)*b,t[6]=(A*L-g*M+T*x)*b,t[7]=(g*v-f*L-T*R)*b,t[8]=(f*M-A*v+T*_)*b,t):null}static multiplyVector(t,r){let e=r[0],i=r[1],a=r[2],n=r[3],s=t[0],o=t[1],h=t[2],l=t[3],u=t[4],c=t[5],d=t[6],m=t[7],f=t[8],A=t[9],g=t[10],T=t[11];return[e*s+i*u+a*f+n*t[12],e*o+i*c+a*A+n*t[13],e*h+i*d+a*g+n*t[14],e*l+i*m+a*T+n*t[15]]}static transformVec4(t,r,e){return t[0]=e[0]*r[0]+e[4]*r[1]+e[8]*r[2]+e[12]*r[3],t[1]=e[1]*r[0]+e[5]*r[1]+e[9]*r[2]+e[13]*r[3],t[2]=e[2]*r[0]+e[6]*r[1]+e[10]*r[2]+e[14]*r[3],t[3]=e[3]*r[0]+e[7]*r[1]+e[11]*r[2]+e[15]*r[3],t}static mult(t,r,e){let i=r[0],a=r[1],n=r[2],s=r[3],o=r[4],h=r[5],l=r[6],u=r[7],c=r[8],d=r[9],m=r[10],f=r[11],A=r[12],g=r[13],T=r[14],_=r[15],R=e[0],v=e[1],x=e[2],M=e[3];return t[0]=R*i+v*o+x*c+M*A,t[1]=R*a+v*h+x*d+M*g,t[2]=R*n+v*l+x*m+M*T,t[3]=R*s+v*u+x*f+M*_,R=e[4],v=e[5],x=e[6],M=e[7],t[4]=R*i+v*o+x*c+M*A,t[5]=R*a+v*h+x*d+M*g,t[6]=R*n+v*l+x*m+M*T,t[7]=R*s+v*u+x*f+M*_,R=e[8],v=e[9],x=e[10],M=e[11],t[8]=R*i+v*o+x*c+M*A,t[9]=R*a+v*h+x*d+M*g,t[10]=R*n+v*l+x*m+M*T,t[11]=R*s+v*u+x*f+M*_,R=e[12],v=e[13],x=e[14],M=e[15],t[12]=R*i+v*o+x*c+M*A,t[13]=R*a+v*h+x*d+M*g,t[14]=R*n+v*l+x*m+M*T,t[15]=R*s+v*u+x*f+M*_,t}static scale(t,r,e,i){return t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r,t[4]*=e,t[5]*=e,t[6]*=e,t[7]*=e,t[8]*=i,t[9]*=i,t[10]*=i,t[11]*=i,t}static rotateY(t,r){let e=Math.sin(r),i=Math.cos(r),a=t[0],n=t[1],s=t[2],o=t[3],h=t[8],l=t[9],u=t[10],c=t[11];return t[0]=a*i-h*e,t[1]=n*i-l*e,t[2]=s*i-u*e,t[3]=o*i-c*e,t[8]=a*e+h*i,t[9]=n*e+l*i,t[10]=s*e+u*i,t[11]=o*e+c*i,t}static rotateX(t,r){let e=Math.sin(r),i=Math.cos(r),a=t[4],n=t[5],s=t[6],o=t[7],h=t[8],l=t[9],u=t[10],c=t[11];return t[4]=a*i+h*e,t[5]=n*i+l*e,t[6]=s*i+u*e,t[7]=o*i+c*e,t[8]=h*i-a*e,t[9]=l*i-n*e,t[10]=u*i-s*e,t[11]=c*i-o*e,t}static rotateZ(t,r){let e=Math.sin(r),i=Math.cos(r),a=t[0],n=t[1],s=t[2],o=t[3],h=t[4],l=t[5],u=t[6],c=t[7];return t[0]=a*i+h*e,t[1]=n*i+l*e,t[2]=s*i+u*e,t[3]=o*i+c*e,t[4]=h*i-a*e,t[5]=l*i-n*e,t[6]=u*i-s*e,t[7]=c*i-o*e,t}static rotate(t,r,e){let i=e[0],a=e[1],n=e[2],s=Math.sqrt(i*i+a*a+n*n),o,h,l,u,c,d,m,f,A,g,T,_,R,v,x,M,L,S,w,p,E,P,C,b;return 1e-6>Math.abs(s)?null:(i*=s=1/s,a*=s,n*=s,o=Math.sin(r),l=1-(h=Math.cos(r)),u=t[0],c=t[1],d=t[2],m=t[3],f=t[4],A=t[5],g=t[6],T=t[7],_=t[8],R=t[9],v=t[10],x=t[11],M=i*i*l+h,L=a*i*l+n*o,S=n*i*l-a*o,w=i*a*l-n*o,p=a*a*l+h,E=n*a*l+i*o,P=i*n*l+a*o,C=a*n*l-i*o,b=n*n*l+h,t[0]=u*M+f*L+_*S,t[1]=c*M+A*L+R*S,t[2]=d*M+g*L+v*S,t[3]=m*M+T*L+x*S,t[4]=u*w+f*p+_*E,t[5]=c*w+A*p+R*E,t[6]=d*w+g*p+v*E,t[7]=m*w+T*p+x*E,t[8]=u*P+f*C+_*b,t[9]=c*P+A*C+R*b,t[10]=d*P+g*C+v*b,t[11]=m*P+T*C+x*b,t)}static invert(t,r){void 0===r&&(r=t);let e=r[0],i=r[1],a=r[2],n=r[3],s=r[4],o=r[5],h=r[6],l=r[7],u=r[8],c=r[9],d=r[10],m=r[11],f=r[12],A=r[13],g=r[14],T=r[15],_=e*o-i*s,R=e*h-a*s,v=e*l-n*s,x=i*h-a*o,M=i*l-n*o,L=a*l-n*h,S=u*A-c*f,w=u*g-d*f,p=u*T-m*f,E=c*g-d*A,P=c*T-m*A,C=d*T-m*g,b=_*C-R*P+v*E+x*p-M*w+L*S;return!!b&&(b=1/b,t[0]=(o*C-h*P+l*E)*b,t[1]=(a*P-i*C-n*E)*b,t[2]=(A*L-g*M+T*x)*b,t[3]=(d*M-c*L-m*x)*b,t[4]=(h*p-s*C-l*w)*b,t[5]=(e*C-a*p+n*w)*b,t[6]=(g*v-f*L-T*R)*b,t[7]=(u*L-d*v+m*R)*b,t[8]=(s*P-o*p+l*S)*b,t[9]=(i*p-e*P-n*S)*b,t[10]=(f*M-A*v+T*_)*b,t[11]=(c*v-u*M-m*_)*b,t[12]=(o*w-s*E-h*S)*b,t[13]=(e*E-i*w+a*S)*b,t[14]=(A*R-f*x-g*_)*b,t[15]=(u*x-c*R+d*_)*b,!0)}static translate(t,r,e,i){t[12]=t[0]*r+t[4]*e+t[8]*i+t[12],t[13]=t[1]*r+t[5]*e+t[9]*i+t[13],t[14]=t[2]*r+t[6]*e+t[10]*i+t[14],t[15]=t[3]*r+t[7]*e+t[11]*i+t[15]}vtranslate(t){return i.translate(this.raw,t.x,t.y,t.z),this}translate(t,r,e){return i.translate(this.raw,t,r,e),this}rotateY(t){return i.rotateY(this.raw,t),this}rotateX(t){return i.rotateX(this.raw,t),this}rotateZ(t){return i.rotateZ(this.raw,t),this}vscale(t){return i.scale(this.raw,t.x,t.y,t.z),this}scale(t,r,e){return i.scale(this.raw,t,r,e),this}invert(){return i.invert(this.raw),this}resetRotation(){for(let t=0;t<this.raw.length;t++)t>=12&&t<=14||(this.raw[t]=t%5==0?1:0);return this}reset(){for(let t=0;t<this.raw.length;t++)this.raw[t]=t%5==0?1:0;return this}constructor(){this.raw=i.identity()}}},39704:function(t,r,e){e.r(r),e.d(r,{Vector3:function(){return i}});class i{magnitude(t){if(void 0===t)return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);let r=t.x-this.x,e=t.y-this.y,i=t.y-this.z;return Math.sqrt(r*r+e*e+i*i)}normalize(){let t=this.magnitude();return this.x/=t,this.y/=t,this.z/=t,this}set(t,r,e){return this.x=t,this.y=r,this.z=e,this}multiScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}getArray(){return[this.x,this.y,this.z]}getFloatArray(){return new Float32Array([this.x,this.y,this.z])}clone(){return new i(this.x,this.y,this.z)}constructor(t=0,r=0,e=0){this.x=t,this.y=r,this.z=e}}},24278:function(t,r,e){e.r(r),e.d(r,{Model:function(){return a}});var i=e(53066);class a{setScale(t,r,e){return this.transform.scale.set(t,r,e),this}setPosition(t,r,e){return this.transform.position.set(t,r,e),this}setRotation(t,r,e){return this.transform.rotation.set(t,r,e),this}addScale(t,r,e){return this.transform.scale.x+=t,this.transform.scale.y+=r,this.transform.scale.y+=r,this}addPosition(t,r,e){return this.transform.position.x+=t,this.transform.position.y+=r,this.transform.position.z+=e,this}addRotation(t,r,e){return this.transform.rotation.x+=t,this.transform.rotation.y+=r,this.transform.rotation.z+=e,this}preRender(){return this.transform.updateMatrix(),this}constructor(t){this.transform=new i.Transform,this.vao=t}}},77470:function(t,r,e){var i,a;e.r(r),e.d(r,{ATTR:function(){return i},AttribLocations:function(){return n},Shader:function(){return o},ShaderUtility:function(){return h},UniformLocations:function(){return s}}),(a=i||(i={})).ATTR_POSITION_NAME="a_position",a[a.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",a.ATTR_NORMAL_NAME="a_norm",a[a.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",a.ATTR_UV_NAME="a_uv",a[a.ATTR_UV_LOC=2]="ATTR_UV_LOC",a.ATTR_COLOR_NAME="a_color",a[a.ATTR_COLOR_LOC=4]="ATTR_COLOR_LOC";class n{constructor(t,r){this.position=t.getAttribLocation(r,"a_position"),this.norm=t.getAttribLocation(r,"a_norm"),this.uv=t.getAttribLocation(r,"a_uv")}}class s{constructor(t,r){this.perspective=t.getUniformLocation(r,"uPMatrix"),this.modelMatrix=t.getUniformLocation(r,"uMVMatrix"),this.cameraMatrix=t.getUniformLocation(r,"uCameraMatrix"),this.mainTexture=t.getUniformLocation(r,"uMainTex")}}class o{activate(){return this.gl.useProgram(this.program),this}deactivate(){return this.gl.useProgram(null),this}dispose(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.program&&this.gl.useProgram(null),this.gl.deleteProgram(this.program)}setPerspective(t){return this.gl.uniformMatrix4fv(this.uniformLoc.perspective,!1,t),this}setModelMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.modelMatrix,!1,t),this}setCameraMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.cameraMatrix,!1,t),this}preRender(){}renderModel(t){return this.setModelMatrix(t.transform.getViewMatrix()),this.gl.bindVertexArray(t.vao.vao),t.vao.noCulling&&this.gl.disable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.enable(this.gl.BLEND),t.vao.indexCount?this.gl.drawElements(t.vao.drawMode,t.vao.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(t.vao.drawMode,0,t.vao.vertexCount),this.gl.bindVertexArray(null),t.vao.noCulling&&this.gl.enable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.disable(this.gl.BLEND),this}constructor(t,r,e,i=!0){if(this.gl=t,this.vShader=h.CreateShader(t,t.VERTEX_SHADER,r),this.fShader=h.CreateShader(t,t.FRAGMENT_SHADER,e),this.vShader&&this.fShader){let r=h.CreateProgram(t,this.vShader,this.fShader,i);if(r){this.program=r,t.useProgram(this.program),this.attribLoc=new n(t,this.program),this.uniformLoc=new s(t,this.program);return}console.error("vertex fragment shader error");return}console.error("vertex fragment shader error");return}}class h{static CreateProgram(t,r,e){let i=!(arguments.length>3)||void 0===arguments[3]||arguments[3],a=t.createProgram();return null===a?null:(t.attachShader(a,r),t.attachShader(a,e),t.bindAttribLocation(a,0,"a_position"),t.bindAttribLocation(a,1,"a_norm"),t.bindAttribLocation(a,2,"a_uv"),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS))?i&&(t.validateProgram(a),!t.getProgramParameter(a,t.VALIDATE_STATUS))?(console.error("Failed to validate program",t.getProgramInfoLog(a)),t.deleteProgram(a),t.deleteShader(e),t.deleteShader(r),null):(t.deleteShader(e),t.deleteShader(r),a):(console.log("Failed to link program: "+t.getProgramInfoLog(a)),t.deleteProgram(a),t.deleteShader(e),t.deleteShader(r),null)}static CreateShader(t,r,e){let i=t.createShader(r);return null===i?null:(t.shaderSource(i,e),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS))?i:(console.log(t.getShaderInfoLog(i)),t.deleteShader(i),null)}static LoadTexture(t,r,e){let i=t.createTexture();return!0===e&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_NEAREST),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),!0===e&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),i}}},53066:function(t,r,e){e.r(r),e.d(r,{Transform:function(){return n}});var i=e(39704),a=e(33913);class n{updateMatrix(){return this.matView.reset().vtranslate(this.position).rotateX(this.rotation.x*n.deg2Rad).rotateZ(this.rotation.z*n.deg2Rad).rotateY(this.rotation.y*n.deg2Rad).vscale(this.scale),a.Matrix4.normalMat3(this.matNormal,this.matView.raw),a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this.matView.raw}updateDirection(){return a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this}getViewMatrix(){return this.matView.raw}getNormalMatrix(){return this.matNormal}reset(){this.position.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0)}constructor(){this.position=new i.Vector3(0,0,0),this.scale=new i.Vector3(1,1,1),this.rotation=new i.Vector3(0,0,0),this.matView=new a.Matrix4,this.matNormal=new Float32Array(9),this.forward=new Float32Array(4),this.up=new Float32Array(4),this.right=new Float32Array(4)}}n.deg2Rad=Math.PI/180},30464:function(t,r,e){e.r(r),e.d(r,{DRAW_MODE:function(){return i},VAO:function(){return n}});var i,a=e(77470);i||(i={});class n{constructor(t,r,e,i,n,s){this.noCulling=!0,this.doBlending=!0,this.name=r,this.drawMode=t.TRIANGLES,this.vao=t.createVertexArray(),t.bindVertexArray(this.vao),void 0!==e&&null!=e&&(this.bufVertices=t.createBuffer(),this.vertexComponentLen=3,this.vertexCount=e.length/this.vertexComponentLen,t.bindBuffer(t.ARRAY_BUFFER,this.bufVertices),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.enableVertexAttribArray(a.ATTR.ATTR_POSITION_LOC),t.vertexAttribPointer(a.ATTR.ATTR_POSITION_LOC,3,t.FLOAT,!1,0,0)),null!=n&&(this.bufNormals=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.bufNormals),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW),t.enableVertexAttribArray(a.ATTR.ATTR_NORMAL_LOC),t.vertexAttribPointer(a.ATTR.ATTR_NORMAL_LOC,3,t.FLOAT,!1,0,0)),null!=s&&(this.bufUV=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.bufUV),t.bufferData(t.ARRAY_BUFFER,new Float32Array(s),t.STATIC_DRAW),t.enableVertexAttribArray(a.ATTR.ATTR_UV_LOC),t.vertexAttribPointer(a.ATTR.ATTR_UV_LOC,2,t.FLOAT,!1,0,0)),null!=i&&(this.bufIndex=t.createBuffer(),this.indexCount=i.length,t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.bufIndex),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(i),t.STATIC_DRAW)),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null)}}}}]);