"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[14085],{14085:(t,r,e)=>{e.r(r),e.d(r,{Matrix4:()=>a});class a{static identity(){let t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}static perspective(t,r,e,a,s){let i=1/Math.tan(r/2),n=1/(a-s);t[0]=i/e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(s+a)*n,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*s*a*n,t[15]=0}static ortho(t,r,e,a,s,i,n){let h=1/(r-e),l=1/(a-s),c=1/(i-n);t[0]=-2*h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(r+e)*h,t[13]=(s+a)*l,t[14]=(n+i)*c,t[15]=1}static transpose(t,r){if(t===r){let e=r[1],a=r[2],s=r[3],i=r[6],n=r[7],h=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=e,t[6]=r[9],t[7]=r[13],t[8]=a,t[9]=i,t[11]=r[14],t[12]=s,t[13]=n,t[14]=h}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}static normalMat3(t,r){let e=r[0],a=r[1],s=r[2],i=r[3],n=r[4],h=r[5],l=r[6],c=r[7],u=r[8],o=r[9],w=r[10],M=r[11],v=r[12],p=r[13],f=r[14],y=r[15],b=e*h-a*n,d=e*l-s*n,k=e*c-i*n,m=a*l-s*h,x=a*c-i*h,X=s*c-i*l,Y=u*p-o*v,Z=u*f-w*v,g=u*y-M*v,z=o*f-w*p,C=o*y-M*p,J=w*y-M*f,L=b*J-d*C+k*z+m*g-x*Z+X*Y;return L?(L=1/L,t[0]=(h*J-l*C+c*z)*L,t[1]=(l*g-n*J-c*Z)*L,t[2]=(n*C-h*g+c*Y)*L,t[3]=(s*C-a*J-i*z)*L,t[4]=(e*J-s*g+i*Z)*L,t[5]=(a*g-e*C-i*Y)*L,t[6]=(p*X-f*x+y*m)*L,t[7]=(f*k-v*X-y*d)*L,t[8]=(v*x-p*k+y*b)*L,t):null}static multiplyVector(t,r){let e=r[0],a=r[1],s=r[2],i=r[3],n=t[0],h=t[1],l=t[2],c=t[3],u=t[4],o=t[5],w=t[6],M=t[7],v=t[8],p=t[9],f=t[10],y=t[11];return[e*n+a*u+s*v+i*t[12],e*h+a*o+s*p+i*t[13],e*l+a*w+s*f+i*t[14],e*c+a*M+s*y+i*t[15]]}static transformVec4(t,r,e){return t[0]=e[0]*r[0]+e[4]*r[1]+e[8]*r[2]+e[12]*r[3],t[1]=e[1]*r[0]+e[5]*r[1]+e[9]*r[2]+e[13]*r[3],t[2]=e[2]*r[0]+e[6]*r[1]+e[10]*r[2]+e[14]*r[3],t[3]=e[3]*r[0]+e[7]*r[1]+e[11]*r[2]+e[15]*r[3],t}static mult(t,r,e){let a=r[0],s=r[1],i=r[2],n=r[3],h=r[4],l=r[5],c=r[6],u=r[7],o=r[8],w=r[9],M=r[10],v=r[11],p=r[12],f=r[13],y=r[14],b=r[15],d=e[0],k=e[1],m=e[2],x=e[3];return t[0]=d*a+k*h+m*o+x*p,t[1]=d*s+k*l+m*w+x*f,t[2]=d*i+k*c+m*M+x*y,t[3]=d*n+k*u+m*v+x*b,d=e[4],k=e[5],m=e[6],x=e[7],t[4]=d*a+k*h+m*o+x*p,t[5]=d*s+k*l+m*w+x*f,t[6]=d*i+k*c+m*M+x*y,t[7]=d*n+k*u+m*v+x*b,d=e[8],k=e[9],m=e[10],x=e[11],t[8]=d*a+k*h+m*o+x*p,t[9]=d*s+k*l+m*w+x*f,t[10]=d*i+k*c+m*M+x*y,t[11]=d*n+k*u+m*v+x*b,d=e[12],k=e[13],m=e[14],x=e[15],t[12]=d*a+k*h+m*o+x*p,t[13]=d*s+k*l+m*w+x*f,t[14]=d*i+k*c+m*M+x*y,t[15]=d*n+k*u+m*v+x*b,t}static scale(t,r,e,a){return t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r,t[4]*=e,t[5]*=e,t[6]*=e,t[7]*=e,t[8]*=a,t[9]*=a,t[10]*=a,t[11]*=a,t}static rotateY(t,r){let e=Math.sin(r),a=Math.cos(r),s=t[0],i=t[1],n=t[2],h=t[3],l=t[8],c=t[9],u=t[10],o=t[11];return t[0]=s*a-l*e,t[1]=i*a-c*e,t[2]=n*a-u*e,t[3]=h*a-o*e,t[8]=s*e+l*a,t[9]=i*e+c*a,t[10]=n*e+u*a,t[11]=h*e+o*a,t}static rotateX(t,r){let e=Math.sin(r),a=Math.cos(r),s=t[4],i=t[5],n=t[6],h=t[7],l=t[8],c=t[9],u=t[10],o=t[11];return t[4]=s*a+l*e,t[5]=i*a+c*e,t[6]=n*a+u*e,t[7]=h*a+o*e,t[8]=l*a-s*e,t[9]=c*a-i*e,t[10]=u*a-n*e,t[11]=o*a-h*e,t}static rotateZ(t,r){let e=Math.sin(r),a=Math.cos(r),s=t[0],i=t[1],n=t[2],h=t[3],l=t[4],c=t[5],u=t[6],o=t[7];return t[0]=s*a+l*e,t[1]=i*a+c*e,t[2]=n*a+u*e,t[3]=h*a+o*e,t[4]=l*a-s*e,t[5]=c*a-i*e,t[6]=u*a-n*e,t[7]=o*a-h*e,t}static rotate(t,r,e){let a,s,i,n,h,l,c,u,o,w,M,v,p,f,y,b,d,k,m,x,X,Y,Z,g,z=e[0],C=e[1],J=e[2],L=Math.sqrt(z*z+C*C+J*J);return Math.abs(L)<1e-6?null:(L=1/L,z*=L,C*=L,J*=L,a=Math.sin(r),s=Math.cos(r),i=1-s,n=t[0],h=t[1],l=t[2],c=t[3],u=t[4],o=t[5],w=t[6],M=t[7],v=t[8],p=t[9],f=t[10],y=t[11],b=z*z*i+s,d=C*z*i+J*a,k=J*z*i-C*a,m=z*C*i-J*a,x=C*C*i+s,X=J*C*i+z*a,Y=z*J*i+C*a,Z=C*J*i-z*a,g=J*J*i+s,t[0]=n*b+u*d+v*k,t[1]=h*b+o*d+p*k,t[2]=l*b+w*d+f*k,t[3]=c*b+M*d+y*k,t[4]=n*m+u*x+v*X,t[5]=h*m+o*x+p*X,t[6]=l*m+w*x+f*X,t[7]=c*m+M*x+y*X,t[8]=n*Y+u*Z+v*g,t[9]=h*Y+o*Z+p*g,t[10]=l*Y+w*Z+f*g,t[11]=c*Y+M*Z+y*g,t)}static invert(t,r){void 0===r&&(r=t);let e=r[0],a=r[1],s=r[2],i=r[3],n=r[4],h=r[5],l=r[6],c=r[7],u=r[8],o=r[9],w=r[10],M=r[11],v=r[12],p=r[13],f=r[14],y=r[15],b=e*h-a*n,d=e*l-s*n,k=e*c-i*n,m=a*l-s*h,x=a*c-i*h,X=s*c-i*l,Y=u*p-o*v,Z=u*f-w*v,g=u*y-M*v,z=o*f-w*p,C=o*y-M*p,J=w*y-M*f,L=b*J-d*C+k*z+m*g-x*Z+X*Y;return!!L&&(L=1/L,t[0]=(h*J-l*C+c*z)*L,t[1]=(s*C-a*J-i*z)*L,t[2]=(p*X-f*x+y*m)*L,t[3]=(w*x-o*X-M*m)*L,t[4]=(l*g-n*J-c*Z)*L,t[5]=(e*J-s*g+i*Z)*L,t[6]=(f*k-v*X-y*d)*L,t[7]=(u*X-w*k+M*d)*L,t[8]=(n*C-h*g+c*Y)*L,t[9]=(a*g-e*C-i*Y)*L,t[10]=(v*x-p*k+y*b)*L,t[11]=(o*k-u*x-M*b)*L,t[12]=(h*Z-n*z-l*Y)*L,t[13]=(e*z-a*Z+s*Y)*L,t[14]=(p*d-v*m-f*b)*L,t[15]=(u*m-o*d+w*b)*L,!0)}static translate(t,r,e,a){t[12]=t[0]*r+t[4]*e+t[8]*a+t[12],t[13]=t[1]*r+t[5]*e+t[9]*a+t[13],t[14]=t[2]*r+t[6]*e+t[10]*a+t[14],t[15]=t[3]*r+t[7]*e+t[11]*a+t[15]}constructor(){this.raw=void 0,this.raw=a.identity()}vtranslate(t){return a.translate(this.raw,t.x,t.y,t.z),this}translate(t,r,e){return a.translate(this.raw,t,r,e),this}rotateY(t){return a.rotateY(this.raw,t),this}rotateX(t){return a.rotateX(this.raw,t),this}rotateZ(t){return a.rotateZ(this.raw,t),this}vscale(t){return a.scale(this.raw,t.x,t.y,t.z),this}scale(t,r,e){return a.scale(this.raw,t,r,e),this}invert(){return a.invert(this.raw),this}resetRotation(){for(let t=0;t<this.raw.length;t++)t>=12&&t<=14||(this.raw[t]=t%5===0?1:0);return this}reset(){for(let t=0;t<this.raw.length;t++)this.raw[t]=t%5===0?1:0;return this}}}}]);
//# sourceMappingURL=14085.700be9ef.chunk.js.map