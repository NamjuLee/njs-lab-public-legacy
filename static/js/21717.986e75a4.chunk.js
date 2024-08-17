"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[21717,20542,51914,98216,74061,36328,87634,49359,85363,44518],{20542:(t,r,e)=>{e.r(r),e.d(r,{Geometry:()=>i});class i{static GetPlan(){let t=new i;return t.vert=[-.5,.5,0,-.5,-.5,0,.5,-.5,0,.5,.5,0],t.UV=[0,0,0,1,1,1,1,0],t.index=[0,1,2,2,3,0],t}static GetQuad(){let t=new i;return t.vert=[-.5,.5,0,-.5,-.5,0,.5,-.5,0,.5,.5,0],t.UV=[0,0,0,1,1,1,1,0],t.index=[0,1,2,2,3,0],t}static GetMulitQuad(){let t=new i;t.vert=[],t.index=[],t.UV=[];for(let r=0;r<10;r++){let e=.5*(.2+.8*Math.random()),i=2*Math.PI*Math.random(),a=e*Math.cos(i),s=e*Math.sin(i),o=5*Math.random()-2.5,n=5*Math.random()-2.5,h=2.5-5*Math.random(),l=4*r;t.vert.push(o-a,n+e,h-s),t.vert.push(o-a,n-e,h-s),t.vert.push(o+a,n-e,h+s),t.vert.push(o+a,n+e,h+s),t.UV.push(0,0,0,1,1,1,1,0),t.index.push(l,l+1,l+2,l+2,l+3,l)}return t}static GetCube(t,r,e,a,s,o){let n=new i,h=.5*t,l=.5*r,d=.5*e,u=a-h,c=a+h,v=s-l,m=s+l,T=o-d,A=o+d;n.vert=[u,m,A,0,u,v,A,0,c,v,A,0,c,m,A,0,c,m,T,1,c,v,T,1,u,v,T,1,u,m,T,1,u,m,T,2,u,v,T,2,u,v,A,2,u,m,A,2,u,v,A,3,u,v,T,3,c,v,T,3,c,v,A,3,c,m,A,4,c,v,A,4,c,v,T,4,c,m,T,4,u,m,T,5,u,m,A,5,c,m,A,5,c,m,T,5];for(let i=0;i<n.vert.length/4;i+=2)n.index.push(i,i+1,4*Math.floor(i/4)+(i+2)%4);for(let i=0;i<6;i++)n.UV.push(0,0,0,1,1,1,1,0);return n.normal=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0],n}constructor(){this.vert=[],this.UV=[],this.index=[],this.normal=[]}}},51914:(t,r,e)=>{e.r(r),e.d(r,{MeshBase:()=>i});class i{constructor(t){this.scene=void 0,this.scene=t,this.scene.add(this)}render(){}}},21717:(t,r,e)=>{e.r(r),e.d(r,{Cube:()=>u});var i=e(36328),a=e(44518),s=e(87634),o=e(20542),n=e(49359),h=e(51914),l=e(98216);class d extends n.Shader{constructor(t,r,e,i){if(super(t,r,e),this.uPointSize=void 0,this.uAngle=void 0,this.uColor=void 0,this.uTime=void 0,this.texture=void 0,this.pMatrix=void 0,this.pMatrix=i,this.program){t.useProgram(this.program),this.setPerspective(i);const r=l.Color.rgbArray(["#FF0000","00FF00","0000FF","909090","C0C0C0","404040"]);r&&(this.uColor=t.getUniformLocation(this.program,"uColor"),t.uniform3fv(this.uColor,new Float32Array(r))),this.uTime=t.getUniformLocation(this.program,"uTime"),t.useProgram(null)}}set(t,r){return this}setTime(t){return this.gl.uniform1f(this.uTime,t),this}setTexture(t){return this.texture=t,this}}class u extends h.MeshBase{constructor(t){super(t.scene),this.v="#version 300 es\n\n        in vec3 a_position;\t// Standard position data.\n        in vec2 a_uv;\n\n        layout(location=4) in float a_color;\n\n        uniform mat4 uPMatrix;\n        uniform mat4 uMVMatrix;\n        uniform mat4 uCameraMatrix;\n\n        uniform vec3 uColor[4];\n\n        out vec2 uv;\n        out lowp vec4 color;\n\n        void main(void) {\n            uv = a_uv;\n            // uv = vec2(0.5, 1);\n\n            color = vec4(uColor[ int(a_color) ], 1.0);\n\n            gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(a_position, 1.0);\n        }\n    ",this.f="#version 300 es\n\n    precision mediump float;\n\n    in highp vec2 uv;\n    in vec4 color;\n\n    uniform sampler2D uMainTex;\n\n    out vec4 finalColor;\n\n    void main(void) {\n\n        //Square Border\n        // float c = (uv.x <= 0.1 || uv.x >=0.9 || uv.y <= 0.1 || uv.y >= 0.9)? 0.0 : 1.0;\n\n        // finalColor = vec4(1.0, uv.x, uv.y ,1.0-c);\n        // finalColor = vec4(color.xyz, 1.0 -c);\n\n        finalColor = texture(uMainTex, vec2(uv.s, uv.t));  //Get the color of the pixel at that UV location\n\n        // //Circle\n        // //  /*\n        // vec2 delta = uv - vec2(0.5,0.5); //delta position from center;\n        // float dist = 0.5 - sqrt(delta.x*delta.x + delta.y*delta.y);\n\n        // float border = 0.01;\n        // float a = 0.0;\n        // if(dist > border) a = 1.0;\n        // else if(dist > 0.0) a = dist / border;\n\n        // finalColor = vec4(0.0,0.0,0.0,a);\n        // //  */\n    }\n    ",this.app=void 0,this.vao=void 0,this.shader=void 0,this.model=void 0,this.geo=void 0,this.size=20.5,this.rotation=0,this.app=t,this.geo=o.Geometry.GetCube(1,1,1,0,0,0),this.shader=new d(this.app.canvas.gl,this.v,this.f,this.app.camera.projectionMatrix),this.shader.setTexture(this.app.texture.uvGridWebGLTexture),this.vao=new a.VAO(t.canvas.gl,"Cube",this.geo.vert,this.geo.index,this.geo.normal,this.geo.UV,4),this.vao.noCulling=!0,this.vao.doBlending=!0,this.model=new s.Model(this.vao),this.SetTexture(this.app.canvas.gl)}SetTexture(t){t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.shader.texture)}render(){this.model.transform.position=new i.Vector3(0,0,this.model.transform.position.z+-.01),this.shader.activate(),this.shader.setPerspective(this.shader.pMatrix),this.shader.setCameraMatrix(this.app.camera.viewMatrix),this.shader.renderModel(this.model.preRender())}}},98216:(t,r,e)=>{e.r(r),e.d(r,{Color:()=>i});class i{static rgbArray(t){if(0===t.length)return null;let r=[];for(let e,i,a=0;a<t.length;a++)t[a].length<6||(e=t[a],i="#"===e[0]?1:0,r.push(parseInt(e[i]+e[i+1],16)/255,parseInt(e[i+2]+e[i+3],16)/255,parseInt(e[i+4]+e[i+5],16)/255));return r}constructor(){}}},74061:(t,r,e)=>{e.r(r),e.d(r,{Matrix4:()=>i});class i{static identity(){let t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}static perspective(t,r,e,i,a){let s=1/Math.tan(r/2),o=1/(i-a);t[0]=s/e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+i)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*i*o,t[15]=0}static ortho(t,r,e,i,a,s,o){let n=1/(r-e),h=1/(i-a),l=1/(s-o);t[0]=-2*n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(r+e)*n,t[13]=(a+i)*h,t[14]=(o+s)*l,t[15]=1}static transpose(t,r){if(t===r){let e=r[1],i=r[2],a=r[3],s=r[6],o=r[7],n=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=e,t[6]=r[9],t[7]=r[13],t[8]=i,t[9]=s,t[11]=r[14],t[12]=a,t[13]=o,t[14]=n}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}static normalMat3(t,r){let e=r[0],i=r[1],a=r[2],s=r[3],o=r[4],n=r[5],h=r[6],l=r[7],d=r[8],u=r[9],c=r[10],v=r[11],m=r[12],T=r[13],A=r[14],f=r[15],g=e*n-i*o,x=e*h-a*o,M=e*l-s*o,R=i*h-a*n,_=i*l-s*n,p=a*l-s*h,L=d*T-u*m,C=d*A-c*m,w=d*f-v*m,E=u*A-c*T,b=u*f-v*T,S=c*f-v*A,V=g*S-x*b+M*E+R*w-_*C+p*L;return V?(V=1/V,t[0]=(n*S-h*b+l*E)*V,t[1]=(h*w-o*S-l*C)*V,t[2]=(o*b-n*w+l*L)*V,t[3]=(a*b-i*S-s*E)*V,t[4]=(e*S-a*w+s*C)*V,t[5]=(i*w-e*b-s*L)*V,t[6]=(T*p-A*_+f*R)*V,t[7]=(A*M-m*p-f*x)*V,t[8]=(m*_-T*M+f*g)*V,t):null}static multiplyVector(t,r){let e=r[0],i=r[1],a=r[2],s=r[3],o=t[0],n=t[1],h=t[2],l=t[3],d=t[4],u=t[5],c=t[6],v=t[7],m=t[8],T=t[9],A=t[10],f=t[11];return[e*o+i*d+a*m+s*t[12],e*n+i*u+a*T+s*t[13],e*h+i*c+a*A+s*t[14],e*l+i*v+a*f+s*t[15]]}static transformVec4(t,r,e){return t[0]=e[0]*r[0]+e[4]*r[1]+e[8]*r[2]+e[12]*r[3],t[1]=e[1]*r[0]+e[5]*r[1]+e[9]*r[2]+e[13]*r[3],t[2]=e[2]*r[0]+e[6]*r[1]+e[10]*r[2]+e[14]*r[3],t[3]=e[3]*r[0]+e[7]*r[1]+e[11]*r[2]+e[15]*r[3],t}static mult(t,r,e){let i=r[0],a=r[1],s=r[2],o=r[3],n=r[4],h=r[5],l=r[6],d=r[7],u=r[8],c=r[9],v=r[10],m=r[11],T=r[12],A=r[13],f=r[14],g=r[15],x=e[0],M=e[1],R=e[2],_=e[3];return t[0]=x*i+M*n+R*u+_*T,t[1]=x*a+M*h+R*c+_*A,t[2]=x*s+M*l+R*v+_*f,t[3]=x*o+M*d+R*m+_*g,x=e[4],M=e[5],R=e[6],_=e[7],t[4]=x*i+M*n+R*u+_*T,t[5]=x*a+M*h+R*c+_*A,t[6]=x*s+M*l+R*v+_*f,t[7]=x*o+M*d+R*m+_*g,x=e[8],M=e[9],R=e[10],_=e[11],t[8]=x*i+M*n+R*u+_*T,t[9]=x*a+M*h+R*c+_*A,t[10]=x*s+M*l+R*v+_*f,t[11]=x*o+M*d+R*m+_*g,x=e[12],M=e[13],R=e[14],_=e[15],t[12]=x*i+M*n+R*u+_*T,t[13]=x*a+M*h+R*c+_*A,t[14]=x*s+M*l+R*v+_*f,t[15]=x*o+M*d+R*m+_*g,t}static scale(t,r,e,i){return t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r,t[4]*=e,t[5]*=e,t[6]*=e,t[7]*=e,t[8]*=i,t[9]*=i,t[10]*=i,t[11]*=i,t}static rotateY(t,r){let e=Math.sin(r),i=Math.cos(r),a=t[0],s=t[1],o=t[2],n=t[3],h=t[8],l=t[9],d=t[10],u=t[11];return t[0]=a*i-h*e,t[1]=s*i-l*e,t[2]=o*i-d*e,t[3]=n*i-u*e,t[8]=a*e+h*i,t[9]=s*e+l*i,t[10]=o*e+d*i,t[11]=n*e+u*i,t}static rotateX(t,r){let e=Math.sin(r),i=Math.cos(r),a=t[4],s=t[5],o=t[6],n=t[7],h=t[8],l=t[9],d=t[10],u=t[11];return t[4]=a*i+h*e,t[5]=s*i+l*e,t[6]=o*i+d*e,t[7]=n*i+u*e,t[8]=h*i-a*e,t[9]=l*i-s*e,t[10]=d*i-o*e,t[11]=u*i-n*e,t}static rotateZ(t,r){let e=Math.sin(r),i=Math.cos(r),a=t[0],s=t[1],o=t[2],n=t[3],h=t[4],l=t[5],d=t[6],u=t[7];return t[0]=a*i+h*e,t[1]=s*i+l*e,t[2]=o*i+d*e,t[3]=n*i+u*e,t[4]=h*i-a*e,t[5]=l*i-s*e,t[6]=d*i-o*e,t[7]=u*i-n*e,t}static rotate(t,r,e){let i,a,s,o,n,h,l,d,u,c,v,m,T,A,f,g,x,M,R,_,p,L,C,w,E=e[0],b=e[1],S=e[2],V=Math.sqrt(E*E+b*b+S*S);return Math.abs(V)<1e-6?null:(V=1/V,E*=V,b*=V,S*=V,i=Math.sin(r),a=Math.cos(r),s=1-a,o=t[0],n=t[1],h=t[2],l=t[3],d=t[4],u=t[5],c=t[6],v=t[7],m=t[8],T=t[9],A=t[10],f=t[11],g=E*E*s+a,x=b*E*s+S*i,M=S*E*s-b*i,R=E*b*s-S*i,_=b*b*s+a,p=S*b*s+E*i,L=E*S*s+b*i,C=b*S*s-E*i,w=S*S*s+a,t[0]=o*g+d*x+m*M,t[1]=n*g+u*x+T*M,t[2]=h*g+c*x+A*M,t[3]=l*g+v*x+f*M,t[4]=o*R+d*_+m*p,t[5]=n*R+u*_+T*p,t[6]=h*R+c*_+A*p,t[7]=l*R+v*_+f*p,t[8]=o*L+d*C+m*w,t[9]=n*L+u*C+T*w,t[10]=h*L+c*C+A*w,t[11]=l*L+v*C+f*w,t)}static invert(t,r){void 0===r&&(r=t);let e=r[0],i=r[1],a=r[2],s=r[3],o=r[4],n=r[5],h=r[6],l=r[7],d=r[8],u=r[9],c=r[10],v=r[11],m=r[12],T=r[13],A=r[14],f=r[15],g=e*n-i*o,x=e*h-a*o,M=e*l-s*o,R=i*h-a*n,_=i*l-s*n,p=a*l-s*h,L=d*T-u*m,C=d*A-c*m,w=d*f-v*m,E=u*A-c*T,b=u*f-v*T,S=c*f-v*A,V=g*S-x*b+M*E+R*w-_*C+p*L;return!!V&&(V=1/V,t[0]=(n*S-h*b+l*E)*V,t[1]=(a*b-i*S-s*E)*V,t[2]=(T*p-A*_+f*R)*V,t[3]=(c*_-u*p-v*R)*V,t[4]=(h*w-o*S-l*C)*V,t[5]=(e*S-a*w+s*C)*V,t[6]=(A*M-m*p-f*x)*V,t[7]=(d*p-c*M+v*x)*V,t[8]=(o*b-n*w+l*L)*V,t[9]=(i*w-e*b-s*L)*V,t[10]=(m*_-T*M+f*g)*V,t[11]=(u*M-d*_-v*g)*V,t[12]=(n*C-o*E-h*L)*V,t[13]=(e*E-i*C+a*L)*V,t[14]=(T*x-m*R-A*g)*V,t[15]=(d*R-u*x+c*g)*V,!0)}static translate(t,r,e,i){t[12]=t[0]*r+t[4]*e+t[8]*i+t[12],t[13]=t[1]*r+t[5]*e+t[9]*i+t[13],t[14]=t[2]*r+t[6]*e+t[10]*i+t[14],t[15]=t[3]*r+t[7]*e+t[11]*i+t[15]}constructor(){this.raw=void 0,this.raw=i.identity()}vtranslate(t){return i.translate(this.raw,t.x,t.y,t.z),this}translate(t,r,e){return i.translate(this.raw,t,r,e),this}rotateY(t){return i.rotateY(this.raw,t),this}rotateX(t){return i.rotateX(this.raw,t),this}rotateZ(t){return i.rotateZ(this.raw,t),this}vscale(t){return i.scale(this.raw,t.x,t.y,t.z),this}scale(t,r,e){return i.scale(this.raw,t,r,e),this}invert(){return i.invert(this.raw),this}resetRotation(){for(let t=0;t<this.raw.length;t++)t>=12&&t<=14||(this.raw[t]=t%5===0?1:0);return this}reset(){for(let t=0;t<this.raw.length;t++)this.raw[t]=t%5===0?1:0;return this}}},36328:(t,r,e)=>{e.r(r),e.d(r,{Vector3:()=>i});class i{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=r,this.z=e}magnitude(t){if(void 0===t)return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);let r=t.x-this.x,e=t.y-this.y,i=t.y-this.z;return Math.sqrt(r*r+e*e+i*i)}normalize(){let t=this.magnitude();return this.x/=t,this.y/=t,this.z/=t,this}set(t,r,e){return this.x=t,this.y=r,this.z=e,this}multiScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}getArray(){return[this.x,this.y,this.z]}getFloatArray(){return new Float32Array([this.x,this.y,this.z])}clone(){return new i(this.x,this.y,this.z)}}},87634:(t,r,e)=>{e.r(r),e.d(r,{Model:()=>a});var i=e(85363);class a{constructor(t){this.vao=void 0,this.transform=void 0,this.transform=new i.Transform,this.vao=t}setScale(t,r,e){return this.transform.scale.set(t,r,e),this}setPosition(t,r,e){return this.transform.position.set(t,r,e),this}setRotation(t,r,e){return this.transform.rotation.set(t,r,e),this}addScale(t,r,e){return this.transform.scale.x+=t,this.transform.scale.y+=r,this.transform.scale.y+=r,this}addPosition(t,r,e){return this.transform.position.x+=t,this.transform.position.y+=r,this.transform.position.z+=e,this}addRotation(t,r,e){return this.transform.rotation.x+=t,this.transform.rotation.y+=r,this.transform.rotation.z+=e,this}preRender(){return this.transform.updateMatrix(),this}}},49359:(t,r,e)=>{let i;e.r(r),e.d(r,{ATTR:()=>i,AttribLocations:()=>a,Shader:()=>o,ShaderUtility:()=>n,UniformLocations:()=>s}),function(t){t.ATTR_POSITION_NAME="a_position",t[t.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",t.ATTR_NORMAL_NAME="a_norm",t[t.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",t.ATTR_UV_NAME="a_uv",t[t.ATTR_UV_LOC=2]="ATTR_UV_LOC",t.ATTR_COLOR_NAME="a_color",t[t.ATTR_COLOR_LOC=4]="ATTR_COLOR_LOC"}(i||(i={}));class a{constructor(t,r){this.position=void 0,this.norm=void 0,this.uv=void 0,this.position=t.getAttribLocation(r,i.ATTR_POSITION_NAME),this.norm=t.getAttribLocation(r,i.ATTR_NORMAL_NAME),this.uv=t.getAttribLocation(r,i.ATTR_UV_NAME)}}class s{constructor(t,r){this.perspective=void 0,this.modelMatrix=void 0,this.cameraMatrix=void 0,this.mainTexture=void 0,this.perspective=t.getUniformLocation(r,"uPMatrix"),this.modelMatrix=t.getUniformLocation(r,"uMVMatrix"),this.cameraMatrix=t.getUniformLocation(r,"uCameraMatrix"),this.mainTexture=t.getUniformLocation(r,"uMainTex")}}class o{constructor(t,r,e){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(this.gl=void 0,this.program=void 0,this.attribLoc=void 0,this.uniformLoc=void 0,this.vShader=void 0,this.fShader=void 0,this.gl=t,this.vShader=n.CreateShader(t,t.VERTEX_SHADER,r),this.fShader=n.CreateShader(t,t.FRAGMENT_SHADER,e),this.vShader&&this.fShader){let r=n.CreateProgram(t,this.vShader,this.fShader,i);return r?(this.program=r,t.useProgram(this.program),this.attribLoc=new a(t,this.program),void(this.uniformLoc=new s(t,this.program))):void console.error("vertex fragment shader error")}console.error("vertex fragment shader error")}activate(){return this.gl.useProgram(this.program),this}deactivate(){return this.gl.useProgram(null),this}dispose(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.program&&this.gl.useProgram(null),this.gl.deleteProgram(this.program)}setPerspective(t){return this.gl.uniformMatrix4fv(this.uniformLoc.perspective,!1,t),this}setModelMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.modelMatrix,!1,t),this}setCameraMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.cameraMatrix,!1,t),this}preRender(){}renderModel(t){return this.setModelMatrix(t.transform.getViewMatrix()),this.gl.bindVertexArray(t.vao.vao),t.vao.noCulling&&this.gl.disable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.enable(this.gl.BLEND),t.vao.indexCount?this.gl.drawElements(t.vao.drawMode,t.vao.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(t.vao.drawMode,0,t.vao.vertexCount),this.gl.bindVertexArray(null),t.vao.noCulling&&this.gl.enable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.disable(this.gl.BLEND),this}}class n{static CreateProgram(t,r,e){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const s=t.createProgram();if(null===s)return null;if(t.attachShader(s,r),t.attachShader(s,e),t.bindAttribLocation(s,i.ATTR_POSITION_LOC,i.ATTR_POSITION_NAME),t.bindAttribLocation(s,i.ATTR_NORMAL_LOC,i.ATTR_NORMAL_NAME),t.bindAttribLocation(s,i.ATTR_UV_LOC,i.ATTR_UV_NAME),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const i=t.getProgramInfoLog(s);return console.log("Failed to link program: "+i),t.deleteProgram(s),t.deleteShader(e),t.deleteShader(r),null}return a&&(t.validateProgram(s),!t.getProgramParameter(s,t.VALIDATE_STATUS))?(console.error("Failed to validate program",t.getProgramInfoLog(s)),t.deleteProgram(s),t.deleteShader(e),t.deleteShader(r),null):(t.deleteShader(e),t.deleteShader(r),s)}static CreateShader(t,r,e){const i=t.createShader(r);if(null===i)return null;t.shaderSource(i,e),t.compileShader(i);return t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.log(t.getShaderInfoLog(i)),t.deleteShader(i),null)}static LoadTexture(t,r,e){let i=t.createTexture();return!0===e&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_NEAREST),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),!0===e&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),i}}},85363:(t,r,e)=>{e.r(r),e.d(r,{Transform:()=>s});var i=e(36328),a=e(74061);class s{constructor(){this.position=void 0,this.scale=void 0,this.rotation=void 0,this.matView=void 0,this.matNormal=void 0,this.forward=void 0,this.up=void 0,this.right=void 0,this.position=new i.Vector3(0,0,0),this.scale=new i.Vector3(1,1,1),this.rotation=new i.Vector3(0,0,0),this.matView=new a.Matrix4,this.matNormal=new Float32Array(9),this.forward=new Float32Array(4),this.up=new Float32Array(4),this.right=new Float32Array(4)}updateMatrix(){return this.matView.reset().vtranslate(this.position).rotateX(this.rotation.x*s.deg2Rad).rotateZ(this.rotation.z*s.deg2Rad).rotateY(this.rotation.y*s.deg2Rad).vscale(this.scale),a.Matrix4.normalMat3(this.matNormal,this.matView.raw),a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this.matView.raw}updateDirection(){return a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this}getViewMatrix(){return this.matView.raw}getNormalMatrix(){return this.matNormal}reset(){this.position.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0)}}s.deg2Rad=Math.PI/180},44518:(t,r,e)=>{e.r(r),e.d(r,{DRAW_MODE:()=>a,VAO:()=>s});var i=e(49359);let a;a||(a={});class s{constructor(t,r,e,a,s,o){let n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:3;this.name=void 0,this.noCulling=!0,this.doBlending=!0,this.vao=void 0,this.bufVertices=void 0,this.bufNormals=void 0,this.bufUV=void 0,this.bufIndex=void 0,this.vertexComponentLen=void 0,this.vertexCount=void 0,this.indexCount=void 0,this.drawMode=void 0,this.name=r,this.drawMode=t.TRIANGLES,this.vao=t.createVertexArray(),t.bindVertexArray(this.vao),void 0!==e&&null!=e&&(this.bufVertices=t.createBuffer(),this.vertexComponentLen=n,this.vertexCount=e.length/this.vertexComponentLen,t.bindBuffer(t.ARRAY_BUFFER,this.bufVertices),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.enableVertexAttribArray(i.ATTR.ATTR_POSITION_LOC),t.vertexAttribPointer(i.ATTR.ATTR_POSITION_LOC,this.vertexComponentLen,t.FLOAT,!1,0,0)),void 0!==s&&null!==s&&(this.bufNormals=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.bufNormals),t.bufferData(t.ARRAY_BUFFER,new Float32Array(s),t.STATIC_DRAW),t.enableVertexAttribArray(i.ATTR.ATTR_NORMAL_LOC),t.vertexAttribPointer(i.ATTR.ATTR_NORMAL_LOC,3,t.FLOAT,!1,0,0)),void 0!==o&&null!==o&&(this.bufUV=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.bufUV),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),t.enableVertexAttribArray(i.ATTR.ATTR_UV_LOC),t.vertexAttribPointer(i.ATTR.ATTR_UV_LOC,2,t.FLOAT,!1,0,0)),void 0!==a&&null!==a&&(this.bufIndex=t.createBuffer(),this.indexCount=a.length,t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.bufIndex),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(a),t.STATIC_DRAW)),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null)}}}}]);
//# sourceMappingURL=21717.986e75a4.chunk.js.map