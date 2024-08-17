"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[85165,7894,37854,23365],{7894:(t,r,i)=>{i.r(r),i.d(r,{Matrix4:()=>s});class s{static identity(){let t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}static perspective(t,r,i,s,a){let e=1/Math.tan(r/2),h=1/(s-a);t[0]=e/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+s)*h,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*s*h,t[15]=0}static ortho(t,r,i,s,a,e,h){let o=1/(r-i),n=1/(s-a),l=1/(e-h);t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(r+i)*o,t[13]=(a+s)*n,t[14]=(h+e)*l,t[15]=1}static transpose(t,r){if(t===r){let i=r[1],s=r[2],a=r[3],e=r[6],h=r[7],o=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=i,t[6]=r[9],t[7]=r[13],t[8]=s,t[9]=e,t[11]=r[14],t[12]=a,t[13]=h,t[14]=o}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}static normalMat3(t,r){let i=r[0],s=r[1],a=r[2],e=r[3],h=r[4],o=r[5],n=r[6],l=r[7],c=r[8],u=r[9],w=r[10],m=r[11],d=r[12],f=r[13],v=r[14],x=r[15],y=i*o-s*h,M=i*n-a*h,V=i*l-e*h,p=s*n-a*o,g=s*l-e*o,z=a*l-e*n,A=c*f-u*d,R=c*v-w*d,F=c*x-m*d,N=u*v-w*f,b=u*x-m*f,S=w*x-m*v,k=y*S-M*b+V*N+p*F-g*R+z*A;return k?(k=1/k,t[0]=(o*S-n*b+l*N)*k,t[1]=(n*F-h*S-l*R)*k,t[2]=(h*b-o*F+l*A)*k,t[3]=(a*b-s*S-e*N)*k,t[4]=(i*S-a*F+e*R)*k,t[5]=(s*F-i*b-e*A)*k,t[6]=(f*z-v*g+x*p)*k,t[7]=(v*V-d*z-x*M)*k,t[8]=(d*g-f*V+x*y)*k,t):null}static multiplyVector(t,r){let i=r[0],s=r[1],a=r[2],e=r[3],h=t[0],o=t[1],n=t[2],l=t[3],c=t[4],u=t[5],w=t[6],m=t[7],d=t[8],f=t[9],v=t[10],x=t[11];return[i*h+s*c+a*d+e*t[12],i*o+s*u+a*f+e*t[13],i*n+s*w+a*v+e*t[14],i*l+s*m+a*x+e*t[15]]}static transformVec4(t,r,i){return t[0]=i[0]*r[0]+i[4]*r[1]+i[8]*r[2]+i[12]*r[3],t[1]=i[1]*r[0]+i[5]*r[1]+i[9]*r[2]+i[13]*r[3],t[2]=i[2]*r[0]+i[6]*r[1]+i[10]*r[2]+i[14]*r[3],t[3]=i[3]*r[0]+i[7]*r[1]+i[11]*r[2]+i[15]*r[3],t}static mult(t,r,i){let s=r[0],a=r[1],e=r[2],h=r[3],o=r[4],n=r[5],l=r[6],c=r[7],u=r[8],w=r[9],m=r[10],d=r[11],f=r[12],v=r[13],x=r[14],y=r[15],M=i[0],V=i[1],p=i[2],g=i[3];return t[0]=M*s+V*o+p*u+g*f,t[1]=M*a+V*n+p*w+g*v,t[2]=M*e+V*l+p*m+g*x,t[3]=M*h+V*c+p*d+g*y,M=i[4],V=i[5],p=i[6],g=i[7],t[4]=M*s+V*o+p*u+g*f,t[5]=M*a+V*n+p*w+g*v,t[6]=M*e+V*l+p*m+g*x,t[7]=M*h+V*c+p*d+g*y,M=i[8],V=i[9],p=i[10],g=i[11],t[8]=M*s+V*o+p*u+g*f,t[9]=M*a+V*n+p*w+g*v,t[10]=M*e+V*l+p*m+g*x,t[11]=M*h+V*c+p*d+g*y,M=i[12],V=i[13],p=i[14],g=i[15],t[12]=M*s+V*o+p*u+g*f,t[13]=M*a+V*n+p*w+g*v,t[14]=M*e+V*l+p*m+g*x,t[15]=M*h+V*c+p*d+g*y,t}static scale(t,r,i,s){return t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r,t[4]*=i,t[5]*=i,t[6]*=i,t[7]*=i,t[8]*=s,t[9]*=s,t[10]*=s,t[11]*=s,t}static rotateY(t,r){let i=Math.sin(r),s=Math.cos(r),a=t[0],e=t[1],h=t[2],o=t[3],n=t[8],l=t[9],c=t[10],u=t[11];return t[0]=a*s-n*i,t[1]=e*s-l*i,t[2]=h*s-c*i,t[3]=o*s-u*i,t[8]=a*i+n*s,t[9]=e*i+l*s,t[10]=h*i+c*s,t[11]=o*i+u*s,t}static rotateX(t,r){let i=Math.sin(r),s=Math.cos(r),a=t[4],e=t[5],h=t[6],o=t[7],n=t[8],l=t[9],c=t[10],u=t[11];return t[4]=a*s+n*i,t[5]=e*s+l*i,t[6]=h*s+c*i,t[7]=o*s+u*i,t[8]=n*s-a*i,t[9]=l*s-e*i,t[10]=c*s-h*i,t[11]=u*s-o*i,t}static rotateZ(t,r){let i=Math.sin(r),s=Math.cos(r),a=t[0],e=t[1],h=t[2],o=t[3],n=t[4],l=t[5],c=t[6],u=t[7];return t[0]=a*s+n*i,t[1]=e*s+l*i,t[2]=h*s+c*i,t[3]=o*s+u*i,t[4]=n*s-a*i,t[5]=l*s-e*i,t[6]=c*s-h*i,t[7]=u*s-o*i,t}static rotate(t,r,i){let s,a,e,h,o,n,l,c,u,w,m,d,f,v,x,y,M,V,p,g,z,A,R,F,N=i[0],b=i[1],S=i[2],k=Math.sqrt(N*N+b*b+S*S);return Math.abs(k)<1e-6?null:(k=1/k,N*=k,b*=k,S*=k,s=Math.sin(r),a=Math.cos(r),e=1-a,h=t[0],o=t[1],n=t[2],l=t[3],c=t[4],u=t[5],w=t[6],m=t[7],d=t[8],f=t[9],v=t[10],x=t[11],y=N*N*e+a,M=b*N*e+S*s,V=S*N*e-b*s,p=N*b*e-S*s,g=b*b*e+a,z=S*b*e+N*s,A=N*S*e+b*s,R=b*S*e-N*s,F=S*S*e+a,t[0]=h*y+c*M+d*V,t[1]=o*y+u*M+f*V,t[2]=n*y+w*M+v*V,t[3]=l*y+m*M+x*V,t[4]=h*p+c*g+d*z,t[5]=o*p+u*g+f*z,t[6]=n*p+w*g+v*z,t[7]=l*p+m*g+x*z,t[8]=h*A+c*R+d*F,t[9]=o*A+u*R+f*F,t[10]=n*A+w*R+v*F,t[11]=l*A+m*R+x*F,t)}static invert(t,r){void 0===r&&(r=t);let i=r[0],s=r[1],a=r[2],e=r[3],h=r[4],o=r[5],n=r[6],l=r[7],c=r[8],u=r[9],w=r[10],m=r[11],d=r[12],f=r[13],v=r[14],x=r[15],y=i*o-s*h,M=i*n-a*h,V=i*l-e*h,p=s*n-a*o,g=s*l-e*o,z=a*l-e*n,A=c*f-u*d,R=c*v-w*d,F=c*x-m*d,N=u*v-w*f,b=u*x-m*f,S=w*x-m*v,k=y*S-M*b+V*N+p*F-g*R+z*A;return!!k&&(k=1/k,t[0]=(o*S-n*b+l*N)*k,t[1]=(a*b-s*S-e*N)*k,t[2]=(f*z-v*g+x*p)*k,t[3]=(w*g-u*z-m*p)*k,t[4]=(n*F-h*S-l*R)*k,t[5]=(i*S-a*F+e*R)*k,t[6]=(v*V-d*z-x*M)*k,t[7]=(c*z-w*V+m*M)*k,t[8]=(h*b-o*F+l*A)*k,t[9]=(s*F-i*b-e*A)*k,t[10]=(d*g-f*V+x*y)*k,t[11]=(u*V-c*g-m*y)*k,t[12]=(o*R-h*N-n*A)*k,t[13]=(i*N-s*R+a*A)*k,t[14]=(f*M-d*p-v*y)*k,t[15]=(c*p-u*M+w*y)*k,!0)}static translate(t,r,i,s){t[12]=t[0]*r+t[4]*i+t[8]*s+t[12],t[13]=t[1]*r+t[5]*i+t[9]*s+t[13],t[14]=t[2]*r+t[6]*i+t[10]*s+t[14],t[15]=t[3]*r+t[7]*i+t[11]*s+t[15]}constructor(){this.raw=void 0,this.raw=s.identity()}vtranslate(t){return s.translate(this.raw,t.x,t.y,t.z),this}translate(t,r,i){return s.translate(this.raw,t,r,i),this}rotateY(t){return s.rotateY(this.raw,t),this}rotateX(t){return s.rotateX(this.raw,t),this}rotateZ(t){return s.rotateZ(this.raw,t),this}vscale(t){return s.scale(this.raw,t.x,t.y,t.z),this}scale(t,r,i){return s.scale(this.raw,t,r,i),this}invert(){return s.invert(this.raw),this}resetRotation(){for(let t=0;t<this.raw.length;t++)t>=12&&t<=14||(this.raw[t]=t%5===0?1:0);return this}reset(){for(let t=0;t<this.raw.length;t++)this.raw[t]=t%5===0?1:0;return this}}},37854:(t,r,i)=>{i.r(r),i.d(r,{Vector3:()=>s});class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=r,this.z=i}magnitude(t){if(void 0===t)return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);let r=t.x-this.x,i=t.y-this.y,s=t.y-this.z;return Math.sqrt(r*r+i*i+s*s)}normalize(){let t=this.magnitude();return this.x/=t,this.y/=t,this.z/=t,this}set(t,r,i){return this.x=t,this.y=r,this.z=i,this}multiScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}getArray(){return[this.x,this.y,this.z]}getFloatArray(){return new Float32Array([this.x,this.y,this.z])}clone(){return new s(this.x,this.y,this.z)}}},85165:(t,r,i)=>{i.r(r),i.d(r,{Model:()=>a});var s=i(23365);class a{constructor(t){this.vao=void 0,this.transform=void 0,this.transform=new s.Transform,this.vao=t}setScale(t,r,i){return this.transform.scale.set(t,r,i),this}setPosition(t,r,i){return this.transform.position.set(t,r,i),this}setRotation(t,r,i){return this.transform.rotation.set(t,r,i),this}addScale(t,r,i){return this.transform.scale.x+=t,this.transform.scale.y+=r,this.transform.scale.y+=r,this}addPosition(t,r,i){return this.transform.position.x+=t,this.transform.position.y+=r,this.transform.position.z+=i,this}addRotation(t,r,i){return this.transform.rotation.x+=t,this.transform.rotation.y+=r,this.transform.rotation.z+=i,this}preRender(){return this.transform.updateMatrix(),this}}},23365:(t,r,i)=>{i.r(r),i.d(r,{Transform:()=>e});var s=i(37854),a=i(7894);class e{constructor(){this.position=void 0,this.scale=void 0,this.rotation=void 0,this.matView=void 0,this.matNormal=void 0,this.forward=void 0,this.up=void 0,this.right=void 0,this.position=new s.Vector3(0,0,0),this.scale=new s.Vector3(1,1,1),this.rotation=new s.Vector3(0,0,0),this.matView=new a.Matrix4,this.matNormal=new Float32Array(9),this.forward=new Float32Array(4),this.up=new Float32Array(4),this.right=new Float32Array(4)}updateMatrix(){return this.matView.reset().vtranslate(this.position).rotateX(this.rotation.x*e.deg2Rad).rotateZ(this.rotation.z*e.deg2Rad).rotateY(this.rotation.y*e.deg2Rad).vscale(this.scale),a.Matrix4.normalMat3(this.matNormal,this.matView.raw),a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this.matView.raw}updateDirection(){return a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this}getViewMatrix(){return this.matView.raw}getNormalMatrix(){return this.matNormal}reset(){this.position.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0)}}e.deg2Rad=Math.PI/180}}]);
//# sourceMappingURL=85165.5fa5762b.chunk.js.map