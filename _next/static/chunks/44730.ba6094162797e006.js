"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44730,49674,24093,45166,66651,11036,97592,48328,28366],{49674:function(t,r,i){i.r(r),i.d(r,{GeometryBase:function(){return e}});class e{render(t){}constructor(t){this.scene=t,this.scene.add(this)}}},44730:function(t,r,i){i.r(r),i.d(r,{PointScreen:function(){return h}});var e=i(28366),a=i(11036),n=i(49674),s=i(97592);class o extends s.Shader{set(t,r){return this.gl.uniform1f(this.uPointSize,t),this.gl.uniform1f(this.uAngle,r),this}constructor(t,r,i){super(t,r,i),this.program&&(this.uPointSize=t.getUniformLocation(this.program,"uPointSize"),this.uAngle=t.getUniformLocation(this.program,"uAngle")),t.useProgram(null)}}class h extends n.GeometryBase{initShader(t){this.shader=new o(t,this.v,this.f),this.vao=new e.VAO(t,"dots",[0,0,0,.1,.1,0,.1,-.1,0,-.1,-.1,0,-.1,.1,0]),this.vao.drawMode=t.POINTS,this.model=new a.Model(this.vao)}render(){this.size+=.01;let t=10*Math.sin(this.size)+30;this.rotation+=.02,this.shader.activate(),this.shader.set(t,this.rotation),this.shader.renderModel(this.model)}constructor(t){super(t.scene),this.vOld="#version 300 es\n        in vec3 a_position;\n\n        uniform float uPointSize;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = vec4(a_position, 1.0);\n        }\n    ",this.fOld="#version 300 es\n        precision mediump float;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            finalColor = vec4(1.0, 0.0, 0.0, 1.0);\n        }\n    ",this.v="#version 300 es\n\n        in vec3 a_position;\n\n        uniform mediump float uPointSize;\n        uniform float uAngle;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = vec4(cos(uAngle) * 0.8 + a_position.x, sin(uAngle) * 0.8 + a_position.y, a_position.z, 1.0);\n        }\n    ",this.f="#version 300 es\n        precision mediump float;\n\n        uniform float uPointSize;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            float c = (40. - uPointSize ) / 20.;\n            finalColor = vec4(c, c, c, 1.0);\n        }\n    ",this.size=2.5,this.rotation=0,this.app=t,this.gl=t.canvas.gl,this.initShader(this.gl)}}},24093:function(t,r,i){i.r(r),i.d(r,{Matrix4:function(){return e}});class e{static identity(){let t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}static perspective(t,r,i,e,a){let n=1/Math.tan(r/2),s=1/(e-a);t[0]=n/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+e)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*e*s,t[15]=0}static ortho(t,r,i,e,a,n,s){let o=1/(r-i),h=1/(e-a),l=1/(n-s);t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(r+i)*o,t[13]=(a+e)*h,t[14]=(s+n)*l,t[15]=1}static transpose(t,r){if(t===r){let i=r[1],e=r[2],a=r[3],n=r[6],s=r[7],o=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=i,t[6]=r[9],t[7]=r[13],t[8]=e,t[9]=n,t[11]=r[14],t[12]=a,t[13]=s,t[14]=o}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}static normalMat3(t,r){let i=r[0],e=r[1],a=r[2],n=r[3],s=r[4],o=r[5],h=r[6],l=r[7],u=r[8],c=r[9],d=r[10],m=r[11],f=r[12],A=r[13],g=r[14],T=r[15],_=i*o-e*s,R=i*h-a*s,v=i*l-n*s,M=e*h-a*o,L=e*l-n*o,x=a*l-n*h,O=u*A-c*f,w=u*g-d*f,p=u*T-m*f,S=c*g-d*A,C=c*T-m*A,P=d*T-m*g,b=_*P-R*C+v*S+M*p-L*w+x*O;return b?(b=1/b,t[0]=(o*P-h*C+l*S)*b,t[1]=(h*p-s*P-l*w)*b,t[2]=(s*C-o*p+l*O)*b,t[3]=(a*C-e*P-n*S)*b,t[4]=(i*P-a*p+n*w)*b,t[5]=(e*p-i*C-n*O)*b,t[6]=(A*x-g*L+T*M)*b,t[7]=(g*v-f*x-T*R)*b,t[8]=(f*L-A*v+T*_)*b,t):null}static multiplyVector(t,r){let i=r[0],e=r[1],a=r[2],n=r[3],s=t[0],o=t[1],h=t[2],l=t[3],u=t[4],c=t[5],d=t[6],m=t[7],f=t[8],A=t[9],g=t[10],T=t[11];return[i*s+e*u+a*f+n*t[12],i*o+e*c+a*A+n*t[13],i*h+e*d+a*g+n*t[14],i*l+e*m+a*T+n*t[15]]}static transformVec4(t,r,i){return t[0]=i[0]*r[0]+i[4]*r[1]+i[8]*r[2]+i[12]*r[3],t[1]=i[1]*r[0]+i[5]*r[1]+i[9]*r[2]+i[13]*r[3],t[2]=i[2]*r[0]+i[6]*r[1]+i[10]*r[2]+i[14]*r[3],t[3]=i[3]*r[0]+i[7]*r[1]+i[11]*r[2]+i[15]*r[3],t}static mult(t,r,i){let e=r[0],a=r[1],n=r[2],s=r[3],o=r[4],h=r[5],l=r[6],u=r[7],c=r[8],d=r[9],m=r[10],f=r[11],A=r[12],g=r[13],T=r[14],_=r[15],R=i[0],v=i[1],M=i[2],L=i[3];return t[0]=R*e+v*o+M*c+L*A,t[1]=R*a+v*h+M*d+L*g,t[2]=R*n+v*l+M*m+L*T,t[3]=R*s+v*u+M*f+L*_,R=i[4],v=i[5],M=i[6],L=i[7],t[4]=R*e+v*o+M*c+L*A,t[5]=R*a+v*h+M*d+L*g,t[6]=R*n+v*l+M*m+L*T,t[7]=R*s+v*u+M*f+L*_,R=i[8],v=i[9],M=i[10],L=i[11],t[8]=R*e+v*o+M*c+L*A,t[9]=R*a+v*h+M*d+L*g,t[10]=R*n+v*l+M*m+L*T,t[11]=R*s+v*u+M*f+L*_,R=i[12],v=i[13],M=i[14],L=i[15],t[12]=R*e+v*o+M*c+L*A,t[13]=R*a+v*h+M*d+L*g,t[14]=R*n+v*l+M*m+L*T,t[15]=R*s+v*u+M*f+L*_,t}static scale(t,r,i,e){return t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r,t[4]*=i,t[5]*=i,t[6]*=i,t[7]*=i,t[8]*=e,t[9]*=e,t[10]*=e,t[11]*=e,t}static rotateY(t,r){let i=Math.sin(r),e=Math.cos(r),a=t[0],n=t[1],s=t[2],o=t[3],h=t[8],l=t[9],u=t[10],c=t[11];return t[0]=a*e-h*i,t[1]=n*e-l*i,t[2]=s*e-u*i,t[3]=o*e-c*i,t[8]=a*i+h*e,t[9]=n*i+l*e,t[10]=s*i+u*e,t[11]=o*i+c*e,t}static rotateX(t,r){let i=Math.sin(r),e=Math.cos(r),a=t[4],n=t[5],s=t[6],o=t[7],h=t[8],l=t[9],u=t[10],c=t[11];return t[4]=a*e+h*i,t[5]=n*e+l*i,t[6]=s*e+u*i,t[7]=o*e+c*i,t[8]=h*e-a*i,t[9]=l*e-n*i,t[10]=u*e-s*i,t[11]=c*e-o*i,t}static rotateZ(t,r){let i=Math.sin(r),e=Math.cos(r),a=t[0],n=t[1],s=t[2],o=t[3],h=t[4],l=t[5],u=t[6],c=t[7];return t[0]=a*e+h*i,t[1]=n*e+l*i,t[2]=s*e+u*i,t[3]=o*e+c*i,t[4]=h*e-a*i,t[5]=l*e-n*i,t[6]=u*e-s*i,t[7]=c*e-o*i,t}static rotate(t,r,i){let e=i[0],a=i[1],n=i[2],s=Math.sqrt(e*e+a*a+n*n),o,h,l,u,c,d,m,f,A,g,T,_,R,v,M,L,x,O,w,p,S,C,P,b;return 1e-6>Math.abs(s)?null:(e*=s=1/s,a*=s,n*=s,o=Math.sin(r),l=1-(h=Math.cos(r)),u=t[0],c=t[1],d=t[2],m=t[3],f=t[4],A=t[5],g=t[6],T=t[7],_=t[8],R=t[9],v=t[10],M=t[11],L=e*e*l+h,x=a*e*l+n*o,O=n*e*l-a*o,w=e*a*l-n*o,p=a*a*l+h,S=n*a*l+e*o,C=e*n*l+a*o,P=a*n*l-e*o,b=n*n*l+h,t[0]=u*L+f*x+_*O,t[1]=c*L+A*x+R*O,t[2]=d*L+g*x+v*O,t[3]=m*L+T*x+M*O,t[4]=u*w+f*p+_*S,t[5]=c*w+A*p+R*S,t[6]=d*w+g*p+v*S,t[7]=m*w+T*p+M*S,t[8]=u*C+f*P+_*b,t[9]=c*C+A*P+R*b,t[10]=d*C+g*P+v*b,t[11]=m*C+T*P+M*b,t)}static invert(t,r){void 0===r&&(r=t);let i=r[0],e=r[1],a=r[2],n=r[3],s=r[4],o=r[5],h=r[6],l=r[7],u=r[8],c=r[9],d=r[10],m=r[11],f=r[12],A=r[13],g=r[14],T=r[15],_=i*o-e*s,R=i*h-a*s,v=i*l-n*s,M=e*h-a*o,L=e*l-n*o,x=a*l-n*h,O=u*A-c*f,w=u*g-d*f,p=u*T-m*f,S=c*g-d*A,C=c*T-m*A,P=d*T-m*g,b=_*P-R*C+v*S+M*p-L*w+x*O;return!!b&&(b=1/b,t[0]=(o*P-h*C+l*S)*b,t[1]=(a*C-e*P-n*S)*b,t[2]=(A*x-g*L+T*M)*b,t[3]=(d*L-c*x-m*M)*b,t[4]=(h*p-s*P-l*w)*b,t[5]=(i*P-a*p+n*w)*b,t[6]=(g*v-f*x-T*R)*b,t[7]=(u*x-d*v+m*R)*b,t[8]=(s*C-o*p+l*O)*b,t[9]=(e*p-i*C-n*O)*b,t[10]=(f*L-A*v+T*_)*b,t[11]=(c*v-u*L-m*_)*b,t[12]=(o*w-s*S-h*O)*b,t[13]=(i*S-e*w+a*O)*b,t[14]=(A*R-f*M-g*_)*b,t[15]=(u*M-c*R+d*_)*b,!0)}static translate(t,r,i,e){t[12]=t[0]*r+t[4]*i+t[8]*e+t[12],t[13]=t[1]*r+t[5]*i+t[9]*e+t[13],t[14]=t[2]*r+t[6]*i+t[10]*e+t[14],t[15]=t[3]*r+t[7]*i+t[11]*e+t[15]}vtranslate(t){return e.translate(this.raw,t.x,t.y,t.z),this}translate(t,r,i){return e.translate(this.raw,t,r,i),this}rotateY(t){return e.rotateY(this.raw,t),this}rotateX(t){return e.rotateX(this.raw,t),this}rotateZ(t){return e.rotateZ(this.raw,t),this}vscale(t){return e.scale(this.raw,t.x,t.y,t.z),this}scale(t,r,i){return e.scale(this.raw,t,r,i),this}invert(){return e.invert(this.raw),this}resetRotation(){for(let t=0;t<this.raw.length;t++)t>=12&&t<=14||(this.raw[t]=t%5==0?1:0);return this}reset(){for(let t=0;t<this.raw.length;t++)this.raw[t]=t%5==0?1:0;return this}constructor(){this.raw=e.identity()}}},45166:function(t,r,i){i.r(r),i.d(r,{Vector3:function(){return e}});class e{magnitude(t){if(void 0===t)return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);let r=t.x-this.x,i=t.y-this.y,e=t.y-this.z;return Math.sqrt(r*r+i*i+e*e)}normalize(){let t=this.magnitude();return this.x/=t,this.y/=t,this.z/=t,this}set(t,r,i){return this.x=t,this.y=r,this.z=i,this}multiScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}getArray(){return[this.x,this.y,this.z]}getFloatArray(){return new Float32Array([this.x,this.y,this.z])}clone(){return new e(this.x,this.y,this.z)}constructor(t=0,r=0,i=0){this.x=t,this.y=r,this.z=i}}},66651:function(t,r,i){var e,a;i.r(r),i.d(r,{ATTR:function(){return e},AttribLocations:function(){return n},UniformLocations:function(){return s}}),(a=e||(e={})).ATTR_POSITION_NAME="a_position",a[a.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",a.ATTR_NORMAL_NAME="a_norm",a[a.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",a.ATTR_UV_NAME="a_uv",a[a.ATTR_UV_LOC=2]="ATTR_UV_LOC",a[a.ATTR_COLOR_LOC=4]="ATTR_COLOR_LOC",a.ATTR_COLOR_NAME="a_color";class n{constructor(t,r){this.position=t.getAttribLocation(r,"a_norm"),this.normal=t.getAttribLocation(r,"a_norm"),this.uv=t.getAttribLocation(r,"a_uv")}}class s{constructor(t,r){this.perspective=t.getUniformLocation(r,"uPMatrix"),this.modelMatrix=t.getUniformLocation(r,"uMVMatrix"),this.cameraMatrix=t.getUniformLocation(r,"uCameraMatrix"),this.mainTexture=t.getUniformLocation(r,"uMainTex")}}},11036:function(t,r,i){i.r(r),i.d(r,{Model:function(){return a}});var e=i(48328);class a{setScale(t,r,i){return this.transform.scale.set(t,r,i),this}setPosition(t,r,i){return this.transform.position.set(t,r,i),this}setRotation(t,r,i){return this.transform.rotation.set(t,r,i),this}addScale(t,r,i){return this.transform.scale.x+=t,this.transform.scale.y+=r,this.transform.scale.y+=r,this}addPosition(t,r,i){return this.transform.position.x+=t,this.transform.position.y+=r,this.transform.position.z+=i,this}addRotation(t,r,i){return this.transform.rotation.x+=t,this.transform.rotation.y+=r,this.transform.rotation.z+=i,this}preRender(){return this.transform.updateMatrix(),this}constructor(t){this.transform=new e.Transform,this.vao=t}}},97592:function(t,r,i){var e,a;i.r(r),i.d(r,{ATTR:function(){return e},AttribLocations:function(){return n},Shader:function(){return o},UniformLocations:function(){return s}}),(a=e||(e={})).ATTR_POSITION_NAME="a_position",a[a.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",a.ATTR_NORMAL_NAME="a_norm",a[a.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",a.ATTR_UV_NAME="a_uv",a[a.ATTR_UV_LOC=2]="ATTR_UV_LOC",a.ATTR_COLOR_NAME="a_color",a[a.ATTR_COLOR_LOC=4]="ATTR_COLOR_LOC";class n{constructor(t,r){this.position=t.getAttribLocation(r,"a_position"),this.norm=t.getAttribLocation(r,"a_norm"),this.uv=t.getAttribLocation(r,"a_uv")}}class s{constructor(t,r){this.perspective=t.getUniformLocation(r,"uPMatrix"),this.modelMatrix=t.getUniformLocation(r,"uMVMatrix"),this.cameraMatrix=t.getUniformLocation(r,"uCameraMatrix"),this.mainTexture=t.getUniformLocation(r,"uMainTex")}}class o{activate(){return this.gl.useProgram(this.program),this}deactivate(){return this.gl.useProgram(null),this}dispose(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.program&&this.gl.useProgram(null),this.gl.deleteProgram(this.program)}setPerspective(t){return this.gl.uniformMatrix4fv(this.uniformLoc.perspective,!1,t),this}setModelMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.modelMatrix,!1,t),this}setCameraMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.cameraMatrix,!1,t),this}preRender(){}renderModel(t){return this.setModelMatrix(t.transform.getViewMatrix()),this.gl.bindVertexArray(t.vao.vao),t.vao.noCulling&&this.gl.disable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.enable(this.gl.BLEND),t.vao.indexCount?this.gl.drawElements(t.vao.drawMode,t.vao.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(t.vao.drawMode,0,t.vao.vertexCount),this.gl.bindVertexArray(null),t.vao.noCulling&&this.gl.enable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.disable(this.gl.BLEND),this}constructor(t,r,i,e=!0){if(this.gl=t,this.vShader=h.CreateShader(t,t.VERTEX_SHADER,r),this.fShader=h.CreateShader(t,t.FRAGMENT_SHADER,i),this.vShader&&this.fShader){let r=h.CreateProgram(t,this.vShader,this.fShader,e);if(r){this.program=r,t.useProgram(this.program),this.attribLoc=new n(t,this.program),this.uniformLoc=new s(t,this.program);return}}}}class h{static CreateProgram(t,r,i){let e=!(arguments.length>3)||void 0===arguments[3]||arguments[3],a=t.createProgram();return null===a?null:(t.attachShader(a,r),t.attachShader(a,i),t.bindAttribLocation(a,0,"a_position"),t.bindAttribLocation(a,1,"a_norm"),t.bindAttribLocation(a,2,"a_uv"),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS))?e&&(t.validateProgram(a),!t.getProgramParameter(a,t.VALIDATE_STATUS))?(console.error("Failed to validate program",t.getProgramInfoLog(a)),t.deleteProgram(a),t.deleteShader(i),t.deleteShader(r),null):(t.deleteShader(i),t.deleteShader(r),a):(console.log("Failed to link program: "+t.getProgramInfoLog(a)),t.deleteProgram(a),t.deleteShader(i),t.deleteShader(r),null)}static CreateShader(t,r,i){let e=t.createShader(r);return null===e?null:(t.shaderSource(e,i),t.compileShader(e),t.getShaderParameter(e,t.COMPILE_STATUS))?e:(console.log(t.getShaderInfoLog(e)),t.deleteShader(e),null)}}},48328:function(t,r,i){i.r(r),i.d(r,{Transform:function(){return n}});var e=i(45166),a=i(24093);class n{updateMatrix(){return this.matView.reset().vtranslate(this.position).rotateX(this.rotation.x*n.deg2Rad).rotateZ(this.rotation.z*n.deg2Rad).rotateY(this.rotation.y*n.deg2Rad).vscale(this.scale),a.Matrix4.normalMat3(this.matNormal,this.matView.raw),a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this.matView.raw}updateDirection(){return a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this}getViewMatrix(){return this.matView.raw}getNormalMatrix(){return this.matNormal}reset(){this.position.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0)}constructor(){this.position=new e.Vector3(0,0,0),this.scale=new e.Vector3(1,1,1),this.rotation=new e.Vector3(0,0,0),this.matView=new a.Matrix4,this.matNormal=new Float32Array(9),this.forward=new Float32Array(4),this.up=new Float32Array(4),this.right=new Float32Array(4)}}n.deg2Rad=Math.PI/180},28366:function(t,r,i){i.r(r),i.d(r,{DRAW_MODE:function(){return e},RTN:function(){return n},VAO:function(){return s}});var e,a=i(66651);e||(e={});class n{constructor(){}}class s{constructor(t,r,i,e,n,s){this.noCulling=!0,this.doBlending=!0,this.name=r,this.drawMode=t.TRIANGLES,this.vao=t.createVertexArray(),t.bindVertexArray(this.vao),void 0!==i&&null!=i&&(this.bufVertices=t.createBuffer(),this.vertexComponentLen=3,this.vertexCount=i.length/this.vertexComponentLen,t.bindBuffer(t.ARRAY_BUFFER,this.bufVertices),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),t.enableVertexAttribArray(a.ATTR.ATTR_POSITION_LOC),t.vertexAttribPointer(a.ATTR.ATTR_POSITION_LOC,3,t.FLOAT,!1,0,0)),void 0!==n&&null!=n&&(this.bufNormals=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.bufNormals),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW),t.enableVertexAttribArray(a.ATTR.ATTR_NORMAL_LOC),t.vertexAttribPointer(a.ATTR.ATTR_NORMAL_LOC,3,t.FLOAT,!1,0,0)),void 0!==s&&null!=s&&(this.bufUV=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.bufUV),t.bufferData(t.ARRAY_BUFFER,new Float32Array(s),t.STATIC_DRAW),t.enableVertexAttribArray(a.ATTR.ATTR_UV_LOC),t.vertexAttribPointer(a.ATTR.ATTR_UV_LOC,2,t.FLOAT,!1,0,0)),void 0!==e&&null!=e&&(this.bufIndex=t.createBuffer(),this.indexCount=e.length,console.log(this),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.bufIndex),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(e),t.STATIC_DRAW)),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null)}}}}]);