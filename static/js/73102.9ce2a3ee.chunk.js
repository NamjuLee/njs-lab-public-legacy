"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[73102,28934,61630],{28934:(t,r,i)=>{i.r(r),i.d(r,{Matrix4:()=>s});class s{static identity(){let t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}static perspective(t,r,i,s,a){let e=1/Math.tan(r/2),h=1/(s-a);t[0]=e/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+s)*h,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*s*h,t[15]=0}static ortho(t,r,i,s,a,e,h){let o=1/(r-i),n=1/(s-a),l=1/(e-h);t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(r+i)*o,t[13]=(a+s)*n,t[14]=(h+e)*l,t[15]=1}static transpose(t,r){if(t===r){let i=r[1],s=r[2],a=r[3],e=r[6],h=r[7],o=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=i,t[6]=r[9],t[7]=r[13],t[8]=s,t[9]=e,t[11]=r[14],t[12]=a,t[13]=h,t[14]=o}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}static normalMat3(t,r){let i=r[0],s=r[1],a=r[2],e=r[3],h=r[4],o=r[5],n=r[6],l=r[7],c=r[8],u=r[9],w=r[10],d=r[11],m=r[12],M=r[13],x=r[14],y=r[15],v=i*o-s*h,V=i*n-a*h,g=i*l-e*h,f=s*n-a*o,p=s*l-e*o,z=a*l-e*n,A=c*M-u*m,F=c*x-w*m,N=c*y-d*m,b=u*x-w*M,R=u*y-d*M,k=w*y-d*x,X=v*k-V*R+g*b+f*N-p*F+z*A;return X?(X=1/X,t[0]=(o*k-n*R+l*b)*X,t[1]=(n*N-h*k-l*F)*X,t[2]=(h*R-o*N+l*A)*X,t[3]=(a*R-s*k-e*b)*X,t[4]=(i*k-a*N+e*F)*X,t[5]=(s*N-i*R-e*A)*X,t[6]=(M*z-x*p+y*f)*X,t[7]=(x*g-m*z-y*V)*X,t[8]=(m*p-M*g+y*v)*X,t):null}static multiplyVector(t,r){let i=r[0],s=r[1],a=r[2],e=r[3],h=t[0],o=t[1],n=t[2],l=t[3],c=t[4],u=t[5],w=t[6],d=t[7],m=t[8],M=t[9],x=t[10],y=t[11];return[i*h+s*c+a*m+e*t[12],i*o+s*u+a*M+e*t[13],i*n+s*w+a*x+e*t[14],i*l+s*d+a*y+e*t[15]]}static transformVec4(t,r,i){return t[0]=i[0]*r[0]+i[4]*r[1]+i[8]*r[2]+i[12]*r[3],t[1]=i[1]*r[0]+i[5]*r[1]+i[9]*r[2]+i[13]*r[3],t[2]=i[2]*r[0]+i[6]*r[1]+i[10]*r[2]+i[14]*r[3],t[3]=i[3]*r[0]+i[7]*r[1]+i[11]*r[2]+i[15]*r[3],t}static mult(t,r,i){let s=r[0],a=r[1],e=r[2],h=r[3],o=r[4],n=r[5],l=r[6],c=r[7],u=r[8],w=r[9],d=r[10],m=r[11],M=r[12],x=r[13],y=r[14],v=r[15],V=i[0],g=i[1],f=i[2],p=i[3];return t[0]=V*s+g*o+f*u+p*M,t[1]=V*a+g*n+f*w+p*x,t[2]=V*e+g*l+f*d+p*y,t[3]=V*h+g*c+f*m+p*v,V=i[4],g=i[5],f=i[6],p=i[7],t[4]=V*s+g*o+f*u+p*M,t[5]=V*a+g*n+f*w+p*x,t[6]=V*e+g*l+f*d+p*y,t[7]=V*h+g*c+f*m+p*v,V=i[8],g=i[9],f=i[10],p=i[11],t[8]=V*s+g*o+f*u+p*M,t[9]=V*a+g*n+f*w+p*x,t[10]=V*e+g*l+f*d+p*y,t[11]=V*h+g*c+f*m+p*v,V=i[12],g=i[13],f=i[14],p=i[15],t[12]=V*s+g*o+f*u+p*M,t[13]=V*a+g*n+f*w+p*x,t[14]=V*e+g*l+f*d+p*y,t[15]=V*h+g*c+f*m+p*v,t}static scale(t,r,i,s){return t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r,t[4]*=i,t[5]*=i,t[6]*=i,t[7]*=i,t[8]*=s,t[9]*=s,t[10]*=s,t[11]*=s,t}static rotateY(t,r){let i=Math.sin(r),s=Math.cos(r),a=t[0],e=t[1],h=t[2],o=t[3],n=t[8],l=t[9],c=t[10],u=t[11];return t[0]=a*s-n*i,t[1]=e*s-l*i,t[2]=h*s-c*i,t[3]=o*s-u*i,t[8]=a*i+n*s,t[9]=e*i+l*s,t[10]=h*i+c*s,t[11]=o*i+u*s,t}static rotateX(t,r){let i=Math.sin(r),s=Math.cos(r),a=t[4],e=t[5],h=t[6],o=t[7],n=t[8],l=t[9],c=t[10],u=t[11];return t[4]=a*s+n*i,t[5]=e*s+l*i,t[6]=h*s+c*i,t[7]=o*s+u*i,t[8]=n*s-a*i,t[9]=l*s-e*i,t[10]=c*s-h*i,t[11]=u*s-o*i,t}static rotateZ(t,r){let i=Math.sin(r),s=Math.cos(r),a=t[0],e=t[1],h=t[2],o=t[3],n=t[4],l=t[5],c=t[6],u=t[7];return t[0]=a*s+n*i,t[1]=e*s+l*i,t[2]=h*s+c*i,t[3]=o*s+u*i,t[4]=n*s-a*i,t[5]=l*s-e*i,t[6]=c*s-h*i,t[7]=u*s-o*i,t}static rotate(t,r,i){let s,a,e,h,o,n,l,c,u,w,d,m,M,x,y,v,V,g,f,p,z,A,F,N,b=i[0],R=i[1],k=i[2],X=Math.sqrt(b*b+R*R+k*k);return Math.abs(X)<1e-6?null:(X=1/X,b*=X,R*=X,k*=X,s=Math.sin(r),a=Math.cos(r),e=1-a,h=t[0],o=t[1],n=t[2],l=t[3],c=t[4],u=t[5],w=t[6],d=t[7],m=t[8],M=t[9],x=t[10],y=t[11],v=b*b*e+a,V=R*b*e+k*s,g=k*b*e-R*s,f=b*R*e-k*s,p=R*R*e+a,z=k*R*e+b*s,A=b*k*e+R*s,F=R*k*e-b*s,N=k*k*e+a,t[0]=h*v+c*V+m*g,t[1]=o*v+u*V+M*g,t[2]=n*v+w*V+x*g,t[3]=l*v+d*V+y*g,t[4]=h*f+c*p+m*z,t[5]=o*f+u*p+M*z,t[6]=n*f+w*p+x*z,t[7]=l*f+d*p+y*z,t[8]=h*A+c*F+m*N,t[9]=o*A+u*F+M*N,t[10]=n*A+w*F+x*N,t[11]=l*A+d*F+y*N,t)}static invert(t,r){void 0===r&&(r=t);let i=r[0],s=r[1],a=r[2],e=r[3],h=r[4],o=r[5],n=r[6],l=r[7],c=r[8],u=r[9],w=r[10],d=r[11],m=r[12],M=r[13],x=r[14],y=r[15],v=i*o-s*h,V=i*n-a*h,g=i*l-e*h,f=s*n-a*o,p=s*l-e*o,z=a*l-e*n,A=c*M-u*m,F=c*x-w*m,N=c*y-d*m,b=u*x-w*M,R=u*y-d*M,k=w*y-d*x,X=v*k-V*R+g*b+f*N-p*F+z*A;return!!X&&(X=1/X,t[0]=(o*k-n*R+l*b)*X,t[1]=(a*R-s*k-e*b)*X,t[2]=(M*z-x*p+y*f)*X,t[3]=(w*p-u*z-d*f)*X,t[4]=(n*N-h*k-l*F)*X,t[5]=(i*k-a*N+e*F)*X,t[6]=(x*g-m*z-y*V)*X,t[7]=(c*z-w*g+d*V)*X,t[8]=(h*R-o*N+l*A)*X,t[9]=(s*N-i*R-e*A)*X,t[10]=(m*p-M*g+y*v)*X,t[11]=(u*g-c*p-d*v)*X,t[12]=(o*F-h*b-n*A)*X,t[13]=(i*b-s*F+a*A)*X,t[14]=(M*V-m*f-x*v)*X,t[15]=(c*f-u*V+w*v)*X,!0)}static translate(t,r,i,s){t[12]=t[0]*r+t[4]*i+t[8]*s+t[12],t[13]=t[1]*r+t[5]*i+t[9]*s+t[13],t[14]=t[2]*r+t[6]*i+t[10]*s+t[14],t[15]=t[3]*r+t[7]*i+t[11]*s+t[15]}constructor(){this.raw=void 0,this.raw=s.identity()}vtranslate(t){return s.translate(this.raw,t.x,t.y,t.z),this}translate(t,r,i){return s.translate(this.raw,t,r,i),this}rotateY(t){return s.rotateY(this.raw,t),this}rotateX(t){return s.rotateX(this.raw,t),this}rotateZ(t){return s.rotateZ(this.raw,t),this}vscale(t){return s.scale(this.raw,t.x,t.y,t.z),this}scale(t,r,i){return s.scale(this.raw,t,r,i),this}invert(){return s.invert(this.raw),this}resetRotation(){for(let t=0;t<this.raw.length;t++)t>=12&&t<=14||(this.raw[t]=t%5===0?1:0);return this}reset(){for(let t=0;t<this.raw.length;t++)this.raw[t]=t%5===0?1:0;return this}}},61630:(t,r,i)=>{i.r(r),i.d(r,{Vector3:()=>s});class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=r,this.z=i}magnitude(t){if(void 0===t)return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);let r=t.x-this.x,i=t.y-this.y,s=t.y-this.z;return Math.sqrt(r*r+i*i+s*s)}normalize(){let t=this.magnitude();return this.x/=t,this.y/=t,this.z/=t,this}set(t,r,i){return this.x=t,this.y=r,this.z=i,this}multiScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}getArray(){return[this.x,this.y,this.z]}getFloatArray(){return new Float32Array([this.x,this.y,this.z])}clone(){return new s(this.x,this.y,this.z)}}},73102:(t,r,i)=>{i.r(r),i.d(r,{Transform:()=>e});var s=i(61630),a=i(28934);class e{constructor(){this.position=void 0,this.scale=void 0,this.rotation=void 0,this.matView=void 0,this.matNormal=void 0,this.forward=void 0,this.up=void 0,this.right=void 0,this.position=new s.Vector3(0,0,0),this.scale=new s.Vector3(1,1,1),this.rotation=new s.Vector3(0,0,0),this.matView=new a.Matrix4,this.matNormal=new Float32Array(9),this.forward=new Float32Array(4),this.up=new Float32Array(4),this.right=new Float32Array(4)}updateMatrix(){return this.matView.reset().vtranslate(this.position).rotateX(this.rotation.x*e.deg2Rad).rotateZ(this.rotation.z*e.deg2Rad).rotateY(this.rotation.y*e.deg2Rad).vscale(this.scale),a.Matrix4.normalMat3(this.matNormal,this.matView.raw),a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this.matView.raw}updateDirection(){return a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this}getViewMatrix(){return this.matView.raw}getNormalMatrix(){return this.matNormal}reset(){this.position.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0)}}e.deg2Rad=Math.PI/180}}]);
//# sourceMappingURL=73102.9ce2a3ee.chunk.js.map