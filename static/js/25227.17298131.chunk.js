"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[25227,46672,46710,45338,11412,43727,59318,97989],{46672:(t,i,r)=>{r.r(i),r.d(i,{GeometryBase:()=>e});class e{constructor(t){this.scene=void 0,this.scene=t,this.scene.add(this)}render(){}}},25227:(t,i,r)=>{r.r(i),r.d(i,{PointScreen:()=>h});var e=r(97989),s=r(11412),a=r(46672),o=r(43727);class n extends o.Shader{constructor(t,i,r){super(t,i,r),this.uPointSize=void 0,this.uAngle=void 0,this.program&&(this.uPointSize=t.getUniformLocation(this.program,"uPointSize"),this.uAngle=t.getUniformLocation(this.program,"uAngle")),t.useProgram(null)}set(t,i){return this.gl.uniform1f(this.uPointSize,t),this.gl.uniform1f(this.uAngle,i),this}}class h extends a.GeometryBase{constructor(t){super(t.scene),this.vOld="#version 300 es\n        in vec3 a_position;\n\n        uniform float uPointSize;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = vec4(a_position, 1.0);\n        }\n    ",this.fOld="#version 300 es\n        precision mediump float;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            finalColor = vec4(1.0, 0.0, 0.0, 1.0);\n        }\n    ",this.v="#version 300 es\n\n        in vec3 a_position;\n\n        uniform mediump float uPointSize;\n        uniform float uAngle;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = vec4(cos(uAngle) * 0.8 + a_position.x, sin(uAngle) * 0.8 + a_position.y, a_position.z, 1.0);\n        }\n    ",this.f="#version 300 es\n        precision mediump float;\n\n        uniform float uPointSize;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            float c = (40. - uPointSize ) / 20.;\n            finalColor = vec4(c, c, c, 1.0);\n        }\n    ",this.app=void 0,this.gl=void 0,this.vao=void 0,this.model=void 0,this.shader=void 0,this.size=2.5,this.rotation=0,this.app=t,this.gl=t.canvas.gl,this.initShader(this.gl)}initShader(t){this.shader=new n(t,this.v,this.f),this.vao=new e.VAO(t,"dots",[0,0,0,.1,.1,0,.1,-.1,0,-.1,-.1,0,-.1,.1,0]),this.vao.drawMode=t.POINTS,this.model=new s.Model(this.vao)}render(){this.size+=.01;let t=10*Math.sin(this.size)+30;this.rotation+=.02,this.shader.activate(),this.shader.set(t,this.rotation),this.shader.renderModel(this.model)}}},46710:(t,i,r)=>{r.r(i),r.d(i,{Matrix4:()=>e});class e{static identity(){let t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}static perspective(t,i,r,e,s){let a=1/Math.tan(i/2),o=1/(e-s);t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(s+e)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*s*e*o,t[15]=0}static ortho(t,i,r,e,s,a,o){let n=1/(i-r),h=1/(e-s),l=1/(a-o);t[0]=-2*n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(i+r)*n,t[13]=(s+e)*h,t[14]=(o+a)*l,t[15]=1}static transpose(t,i){if(t===i){let r=i[1],e=i[2],s=i[3],a=i[6],o=i[7],n=i[11];t[1]=i[4],t[2]=i[8],t[3]=i[12],t[4]=r,t[6]=i[9],t[7]=i[13],t[8]=e,t[9]=a,t[11]=i[14],t[12]=s,t[13]=o,t[14]=n}else t[0]=i[0],t[1]=i[4],t[2]=i[8],t[3]=i[12],t[4]=i[1],t[5]=i[5],t[6]=i[9],t[7]=i[13],t[8]=i[2],t[9]=i[6],t[10]=i[10],t[11]=i[14],t[12]=i[3],t[13]=i[7],t[14]=i[11],t[15]=i[15];return t}static normalMat3(t,i){let r=i[0],e=i[1],s=i[2],a=i[3],o=i[4],n=i[5],h=i[6],l=i[7],d=i[8],u=i[9],c=i[10],m=i[11],v=i[12],A=i[13],f=i[14],g=i[15],T=r*n-e*o,R=r*h-s*o,_=r*l-a*o,M=e*h-s*n,x=e*l-a*n,L=s*l-a*h,w=d*A-u*v,S=d*f-c*v,p=d*g-m*v,O=u*f-c*A,C=u*g-m*A,b=c*g-m*f,P=T*b-R*C+_*O+M*p-x*S+L*w;return P?(P=1/P,t[0]=(n*b-h*C+l*O)*P,t[1]=(h*p-o*b-l*S)*P,t[2]=(o*C-n*p+l*w)*P,t[3]=(s*C-e*b-a*O)*P,t[4]=(r*b-s*p+a*S)*P,t[5]=(e*p-r*C-a*w)*P,t[6]=(A*L-f*x+g*M)*P,t[7]=(f*_-v*L-g*R)*P,t[8]=(v*x-A*_+g*T)*P,t):null}static multiplyVector(t,i){let r=i[0],e=i[1],s=i[2],a=i[3],o=t[0],n=t[1],h=t[2],l=t[3],d=t[4],u=t[5],c=t[6],m=t[7],v=t[8],A=t[9],f=t[10],g=t[11];return[r*o+e*d+s*v+a*t[12],r*n+e*u+s*A+a*t[13],r*h+e*c+s*f+a*t[14],r*l+e*m+s*g+a*t[15]]}static transformVec4(t,i,r){return t[0]=r[0]*i[0]+r[4]*i[1]+r[8]*i[2]+r[12]*i[3],t[1]=r[1]*i[0]+r[5]*i[1]+r[9]*i[2]+r[13]*i[3],t[2]=r[2]*i[0]+r[6]*i[1]+r[10]*i[2]+r[14]*i[3],t[3]=r[3]*i[0]+r[7]*i[1]+r[11]*i[2]+r[15]*i[3],t}static mult(t,i,r){let e=i[0],s=i[1],a=i[2],o=i[3],n=i[4],h=i[5],l=i[6],d=i[7],u=i[8],c=i[9],m=i[10],v=i[11],A=i[12],f=i[13],g=i[14],T=i[15],R=r[0],_=r[1],M=r[2],x=r[3];return t[0]=R*e+_*n+M*u+x*A,t[1]=R*s+_*h+M*c+x*f,t[2]=R*a+_*l+M*m+x*g,t[3]=R*o+_*d+M*v+x*T,R=r[4],_=r[5],M=r[6],x=r[7],t[4]=R*e+_*n+M*u+x*A,t[5]=R*s+_*h+M*c+x*f,t[6]=R*a+_*l+M*m+x*g,t[7]=R*o+_*d+M*v+x*T,R=r[8],_=r[9],M=r[10],x=r[11],t[8]=R*e+_*n+M*u+x*A,t[9]=R*s+_*h+M*c+x*f,t[10]=R*a+_*l+M*m+x*g,t[11]=R*o+_*d+M*v+x*T,R=r[12],_=r[13],M=r[14],x=r[15],t[12]=R*e+_*n+M*u+x*A,t[13]=R*s+_*h+M*c+x*f,t[14]=R*a+_*l+M*m+x*g,t[15]=R*o+_*d+M*v+x*T,t}static scale(t,i,r,e){return t[0]*=i,t[1]*=i,t[2]*=i,t[3]*=i,t[4]*=r,t[5]*=r,t[6]*=r,t[7]*=r,t[8]*=e,t[9]*=e,t[10]*=e,t[11]*=e,t}static rotateY(t,i){let r=Math.sin(i),e=Math.cos(i),s=t[0],a=t[1],o=t[2],n=t[3],h=t[8],l=t[9],d=t[10],u=t[11];return t[0]=s*e-h*r,t[1]=a*e-l*r,t[2]=o*e-d*r,t[3]=n*e-u*r,t[8]=s*r+h*e,t[9]=a*r+l*e,t[10]=o*r+d*e,t[11]=n*r+u*e,t}static rotateX(t,i){let r=Math.sin(i),e=Math.cos(i),s=t[4],a=t[5],o=t[6],n=t[7],h=t[8],l=t[9],d=t[10],u=t[11];return t[4]=s*e+h*r,t[5]=a*e+l*r,t[6]=o*e+d*r,t[7]=n*e+u*r,t[8]=h*e-s*r,t[9]=l*e-a*r,t[10]=d*e-o*r,t[11]=u*e-n*r,t}static rotateZ(t,i){let r=Math.sin(i),e=Math.cos(i),s=t[0],a=t[1],o=t[2],n=t[3],h=t[4],l=t[5],d=t[6],u=t[7];return t[0]=s*e+h*r,t[1]=a*e+l*r,t[2]=o*e+d*r,t[3]=n*e+u*r,t[4]=h*e-s*r,t[5]=l*e-a*r,t[6]=d*e-o*r,t[7]=u*e-n*r,t}static rotate(t,i,r){let e,s,a,o,n,h,l,d,u,c,m,v,A,f,g,T,R,_,M,x,L,w,S,p,O=r[0],C=r[1],b=r[2],P=Math.sqrt(O*O+C*C+b*b);return Math.abs(P)<1e-6?null:(P=1/P,O*=P,C*=P,b*=P,e=Math.sin(i),s=Math.cos(i),a=1-s,o=t[0],n=t[1],h=t[2],l=t[3],d=t[4],u=t[5],c=t[6],m=t[7],v=t[8],A=t[9],f=t[10],g=t[11],T=O*O*a+s,R=C*O*a+b*e,_=b*O*a-C*e,M=O*C*a-b*e,x=C*C*a+s,L=b*C*a+O*e,w=O*b*a+C*e,S=C*b*a-O*e,p=b*b*a+s,t[0]=o*T+d*R+v*_,t[1]=n*T+u*R+A*_,t[2]=h*T+c*R+f*_,t[3]=l*T+m*R+g*_,t[4]=o*M+d*x+v*L,t[5]=n*M+u*x+A*L,t[6]=h*M+c*x+f*L,t[7]=l*M+m*x+g*L,t[8]=o*w+d*S+v*p,t[9]=n*w+u*S+A*p,t[10]=h*w+c*S+f*p,t[11]=l*w+m*S+g*p,t)}static invert(t,i){void 0===i&&(i=t);let r=i[0],e=i[1],s=i[2],a=i[3],o=i[4],n=i[5],h=i[6],l=i[7],d=i[8],u=i[9],c=i[10],m=i[11],v=i[12],A=i[13],f=i[14],g=i[15],T=r*n-e*o,R=r*h-s*o,_=r*l-a*o,M=e*h-s*n,x=e*l-a*n,L=s*l-a*h,w=d*A-u*v,S=d*f-c*v,p=d*g-m*v,O=u*f-c*A,C=u*g-m*A,b=c*g-m*f,P=T*b-R*C+_*O+M*p-x*S+L*w;return!!P&&(P=1/P,t[0]=(n*b-h*C+l*O)*P,t[1]=(s*C-e*b-a*O)*P,t[2]=(A*L-f*x+g*M)*P,t[3]=(c*x-u*L-m*M)*P,t[4]=(h*p-o*b-l*S)*P,t[5]=(r*b-s*p+a*S)*P,t[6]=(f*_-v*L-g*R)*P,t[7]=(d*L-c*_+m*R)*P,t[8]=(o*C-n*p+l*w)*P,t[9]=(e*p-r*C-a*w)*P,t[10]=(v*x-A*_+g*T)*P,t[11]=(u*_-d*x-m*T)*P,t[12]=(n*S-o*O-h*w)*P,t[13]=(r*O-e*S+s*w)*P,t[14]=(A*R-v*M-f*T)*P,t[15]=(d*M-u*R+c*T)*P,!0)}static translate(t,i,r,e){t[12]=t[0]*i+t[4]*r+t[8]*e+t[12],t[13]=t[1]*i+t[5]*r+t[9]*e+t[13],t[14]=t[2]*i+t[6]*r+t[10]*e+t[14],t[15]=t[3]*i+t[7]*r+t[11]*e+t[15]}constructor(){this.raw=void 0,this.raw=e.identity()}vtranslate(t){return e.translate(this.raw,t.x,t.y,t.z),this}translate(t,i,r){return e.translate(this.raw,t,i,r),this}rotateY(t){return e.rotateY(this.raw,t),this}rotateX(t){return e.rotateX(this.raw,t),this}rotateZ(t){return e.rotateZ(this.raw,t),this}vscale(t){return e.scale(this.raw,t.x,t.y,t.z),this}scale(t,i,r){return e.scale(this.raw,t,i,r),this}invert(){return e.invert(this.raw),this}resetRotation(){for(let t=0;t<this.raw.length;t++)t>=12&&t<=14||(this.raw[t]=t%5===0?1:0);return this}reset(){for(let t=0;t<this.raw.length;t++)this.raw[t]=t%5===0?1:0;return this}}},45338:(t,i,r)=>{r.r(i),r.d(i,{Vector3:()=>e});class e{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=i,this.z=r}magnitude(t){if(void 0===t)return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);let i=t.x-this.x,r=t.y-this.y,e=t.y-this.z;return Math.sqrt(i*i+r*r+e*e)}normalize(){let t=this.magnitude();return this.x/=t,this.y/=t,this.z/=t,this}set(t,i,r){return this.x=t,this.y=i,this.z=r,this}multiScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}getArray(){return[this.x,this.y,this.z]}getFloatArray(){return new Float32Array([this.x,this.y,this.z])}clone(){return new e(this.x,this.y,this.z)}}},11412:(t,i,r)=>{r.r(i),r.d(i,{Model:()=>s});var e=r(59318);class s{constructor(t){this.vao=void 0,this.transform=void 0,this.transform=new e.Transform,this.vao=t}setScale(t,i,r){return this.transform.scale.set(t,i,r),this}setPosition(t,i,r){return this.transform.position.set(t,i,r),this}setRotation(t,i,r){return this.transform.rotation.set(t,i,r),this}addScale(t,i,r){return this.transform.scale.x+=t,this.transform.scale.y+=i,this.transform.scale.y+=i,this}addPosition(t,i,r){return this.transform.position.x+=t,this.transform.position.y+=i,this.transform.position.z+=r,this}addRotation(t,i,r){return this.transform.rotation.x+=t,this.transform.rotation.y+=i,this.transform.rotation.z+=r,this}preRender(){return this.transform.updateMatrix(),this}}},43727:(t,i,r)=>{let e;r.r(i),r.d(i,{ATTR:()=>e,AttribLocations:()=>s,Shader:()=>o,UniformLocations:()=>a}),function(t){t.ATTR_POSITION_NAME="a_position",t[t.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",t.ATTR_NORMAL_NAME="a_norm",t[t.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",t.ATTR_UV_NAME="a_uv",t[t.ATTR_UV_LOC=2]="ATTR_UV_LOC",t.ATTR_COLOR_NAME="a_color",t[t.ATTR_COLOR_LOC=4]="ATTR_COLOR_LOC"}(e||(e={}));class s{constructor(t,i){this.position=void 0,this.norm=void 0,this.uv=void 0,this.position=t.getAttribLocation(i,e.ATTR_POSITION_NAME),this.norm=t.getAttribLocation(i,e.ATTR_NORMAL_NAME),this.uv=t.getAttribLocation(i,e.ATTR_UV_NAME)}}class a{constructor(t,i){this.perspective=void 0,this.modelMatrix=void 0,this.cameraMatrix=void 0,this.mainTexture=void 0,this.perspective=t.getUniformLocation(i,"uPMatrix"),this.modelMatrix=t.getUniformLocation(i,"uMVMatrix"),this.cameraMatrix=t.getUniformLocation(i,"uCameraMatrix"),this.mainTexture=t.getUniformLocation(i,"uMainTex")}}class o{constructor(t,i,r){let e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(this.gl=void 0,this.program=void 0,this.attribLoc=void 0,this.uniformLoc=void 0,this.vShader=void 0,this.fShader=void 0,this.gl=t,this.vShader=n.CreateShader(t,t.VERTEX_SHADER,i),this.fShader=n.CreateShader(t,t.FRAGMENT_SHADER,r),this.vShader&&this.fShader){let i=n.CreateProgram(t,this.vShader,this.fShader,e);return i?(this.program=i,t.useProgram(this.program),this.attribLoc=new s(t,this.program),void(this.uniformLoc=new a(t,this.program))):void console.error("vertex fragment shader error")}console.error("vertex fragment shader error")}activate(){return this.gl.useProgram(this.program),this}deactivate(){return this.gl.useProgram(null),this}dispose(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.program&&this.gl.useProgram(null),this.gl.deleteProgram(this.program)}setPerspective(t){return this.gl.uniformMatrix4fv(this.uniformLoc.perspective,!1,t),this}setModelMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.modelMatrix,!1,t),this}setCameraMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.cameraMatrix,!1,t),this}preRender(){}renderModel(t){return this.setModelMatrix(t.transform.getViewMatrix()),this.gl.bindVertexArray(t.vao.vao),t.vao.noCulling&&this.gl.disable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.enable(this.gl.BLEND),t.vao.indexCount?this.gl.drawElements(t.vao.drawMode,t.vao.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(t.vao.drawMode,0,t.vao.vertexCount),this.gl.bindVertexArray(null),t.vao.noCulling&&this.gl.enable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.disable(this.gl.BLEND),this}}class n{static CreateProgram(t,i,r){let s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const a=t.createProgram();if(null===a)return null;if(t.attachShader(a,i),t.attachShader(a,r),t.bindAttribLocation(a,e.ATTR_POSITION_LOC,e.ATTR_POSITION_NAME),t.bindAttribLocation(a,e.ATTR_NORMAL_LOC,e.ATTR_NORMAL_NAME),t.bindAttribLocation(a,e.ATTR_UV_LOC,e.ATTR_UV_NAME),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS)){const e=t.getProgramInfoLog(a);return console.log("Failed to link program: "+e),t.deleteProgram(a),t.deleteShader(r),t.deleteShader(i),null}return s&&(t.validateProgram(a),!t.getProgramParameter(a,t.VALIDATE_STATUS))?(console.error("Failed to validate program",t.getProgramInfoLog(a)),t.deleteProgram(a),t.deleteShader(r),t.deleteShader(i),null):(t.deleteShader(r),t.deleteShader(i),a)}static CreateShader(t,i,r){const e=t.createShader(i);if(null===e)return null;t.shaderSource(e,r),t.compileShader(e);return t.getShaderParameter(e,t.COMPILE_STATUS)?e:(console.log(t.getShaderInfoLog(e)),t.deleteShader(e),null)}}},59318:(t,i,r)=>{r.r(i),r.d(i,{Transform:()=>a});var e=r(45338),s=r(46710);class a{constructor(){this.position=void 0,this.scale=void 0,this.rotation=void 0,this.matView=void 0,this.matNormal=void 0,this.forward=void 0,this.up=void 0,this.right=void 0,this.position=new e.Vector3(0,0,0),this.scale=new e.Vector3(1,1,1),this.rotation=new e.Vector3(0,0,0),this.matView=new s.Matrix4,this.matNormal=new Float32Array(9),this.forward=new Float32Array(4),this.up=new Float32Array(4),this.right=new Float32Array(4)}updateMatrix(){return this.matView.reset().vtranslate(this.position).rotateX(this.rotation.x*a.deg2Rad).rotateZ(this.rotation.z*a.deg2Rad).rotateY(this.rotation.y*a.deg2Rad).vscale(this.scale),s.Matrix4.normalMat3(this.matNormal,this.matView.raw),s.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),s.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),s.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this.matView.raw}updateDirection(){return s.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),s.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),s.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this}getViewMatrix(){return this.matView.raw}getNormalMatrix(){return this.matNormal}reset(){this.position.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0)}}a.deg2Rad=Math.PI/180},97989:(t,i,r)=>{r.r(i),r.d(i,{DRAW_MODE:()=>s,VAO:()=>a});var e=r(43727);let s;s||(s={});class a{constructor(t,i,r,s,a,o){this.name=void 0,this.noCulling=!0,this.doBlending=!0,this.vao=void 0,this.bufVertices=void 0,this.bufNormals=void 0,this.bufUV=void 0,this.bufIndex=void 0,this.vertexComponentLen=void 0,this.vertexCount=void 0,this.indexCount=void 0,this.drawMode=void 0,this.name=i,this.drawMode=t.TRIANGLES,this.vao=t.createVertexArray(),t.bindVertexArray(this.vao),void 0!==r&&null!=r&&(this.bufVertices=t.createBuffer(),this.vertexComponentLen=3,this.vertexCount=r.length/this.vertexComponentLen,t.bindBuffer(t.ARRAY_BUFFER,this.bufVertices),t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW),t.enableVertexAttribArray(e.ATTR.ATTR_POSITION_LOC),t.vertexAttribPointer(e.ATTR.ATTR_POSITION_LOC,3,t.FLOAT,!1,0,0)),void 0!==a&&null!==a&&(this.bufNormals=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.bufNormals),t.bufferData(t.ARRAY_BUFFER,new Float32Array(a),t.STATIC_DRAW),t.enableVertexAttribArray(e.ATTR.ATTR_NORMAL_LOC),t.vertexAttribPointer(e.ATTR.ATTR_NORMAL_LOC,3,t.FLOAT,!1,0,0)),void 0!==o&&null!==o&&(this.bufUV=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.bufUV),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),t.enableVertexAttribArray(e.ATTR.ATTR_UV_LOC),t.vertexAttribPointer(e.ATTR.ATTR_UV_LOC,2,t.FLOAT,!1,0,0)),void 0!==s&&null!==s&&(this.bufIndex=t.createBuffer(),this.indexCount=s.length,t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.bufIndex),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(s),t.STATIC_DRAW)),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null)}}}}]);
//# sourceMappingURL=25227.17298131.chunk.js.map