"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[14091],{14091:(t,s,i)=>{i.r(s),i.d(s,{Renderer:()=>C,Solution:()=>w});var o=i(55913);class e{constructor(t,s,i,o){this.distort=void 0,this.width=20,this.height=20,this.id=void 0,this.x=void 0,this.y=void 0,this.dom=void 0,this.distort=t,this.id=s,this.x=i,this.y=o,this.dom=h(this.width,this.height,5),this.dom.style.pointerEvents="none",this.distort.hostDiv.appendChild(this.dom),this.move(i,o)}translation(t,s){this.x=parseInt(this.dom.style.left)+t,this.y=parseInt(this.dom.style.top)+s,this.dom.style.left=this.x+"px",this.dom.style.top=this.y+"px"}move(t,s){this.x=t-.5*this.width,this.y=s-.5*this.height,this.dom.style.left=this.x+"px",this.dom.style.top=this.y+"px"}destroy(){this.dom.parentElement.removeChild(this.dom)}}const h=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#ffffff",e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#CBDAE2",r=document.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("x","1"),r.setAttribute("y","1"),r.setAttribute("width","".concat(t)),r.setAttribute("height","".concat(s)),r.setAttribute("stroke-width","".concat(e)),r.setAttribute("rx","".concat(i)),r.setAttribute("fill","".concat(o)),r.setAttribute("stroke","".concat(h));let n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.appendChild(r),n.setAttribute("width","".concat(t+2*e)),n.setAttribute("height","".concat(s+2*e)),n.style.position="absolute",n};class r{constructor(){this.distort=void 0}distortPerspective(t){this.distort.Controllers[0].translation(t,0),this.distort.Controllers[1].translation(-t,0),this.distort.Controllers[2].translation(t,0),this.distort.Controllers[3].translation(-t,0)}renderDistortion(t,s){}}const n=(t,s,i,o)=>Math.sqrt((t-i)*(t-i)+(s-o)*(s-o));class d extends r{constructor(t){super(),this.distort=t}renderDistortion(t,s){const i=[];let o=0,e=0;for(let n=0;n<this.distort.Controllers.length;++n){const t=(this.distort.Controllers[n].x-this.distort.domRect.x)*this.distort.domRect.width/this.distort.hostImg.width,s=(this.distort.Controllers[n].y-this.distort.domRect.y)*this.distort.domRect.height/this.distort.hostImg.height;o+=t,e+=s,i.push([t,s])}i.push([o/this.distort.Controllers.length,e/this.distort.Controllers.length]);const h=this.distort.hosCanvas.width,r=this.distort.hosCanvas.height;l(t,s,[0,0],[h/2,r/2],[0,r],i[0],i[4],i[3]),l(t,s,[0,0],[h/2,r/2],[h,0],i[0],i[4],i[1]),l(t,s,[h,0],[h/2,r/2],[h,r],i[1],i[4],i[2]),l(t,s,[0,r],[h/2,r/2],[h,r],i[3],i[4],i[2])}}const l=(t,s,i,o,e,h,r,n)=>{const[d,l,c]=a(h,r,n,.3),[m,v,u]=a(i,o,e,.3);((t,s,i,o,e,h,r,n)=>{const d=g(i[0],i[1],h[0],o[0],o[1],r[0],e[0],e[1],n[0]),l=g(i[0],i[1],h[1],o[0],o[1],r[1],e[0],e[1],n[1]);t.save(),t.setTransform(d[0],l[0],d[1],l[1],d[2],l[2]),t.beginPath(),t.moveTo(i[0],i[1]),t.lineTo(o[0],o[1]),t.lineTo(e[0],e[1]),t.closePath(),t.clip(),t.drawImage(s,0,0,s.width,s.height),t.restore()})(t,s,m,v,u,d,l,c)},c=(t,s,i)=>{const o=t[0]-s[0],e=t[1]-s[1];return[o*i+s[0],e*i+s[1]]},a=(t,s,i,o)=>{const e=m(t,s,i),h=(e[2]+o)/e[2];return[c(t,e,h),c(s,e,h),c(i,e,h)]},m=(t,s,i)=>{const o=n(s[0],s[1],i[0],i[1]),e=n(i[0],i[1],t[0],t[1]),h=n(t[0],t[1],s[0],s[1]),r=o+e+h,d=r/2,l=Math.sqrt(d*(d-o)*(d-e)*(d-h))/d,c=(o*t[0]+e*s[0]+h*i[0])/r,a=(o*t[1]+e*s[1]+h*i[1])/r;return new Float32Array([c,a,l])},g=(t,s,i,o,e,h,r,n,d)=>{const l=((h-d)*(s-e)-(i-h)*(e-n))/((o-r)*(s-e)-(t-o)*(e-n)),c=((h-d)*(t-o)-(i-h)*(o-r))/((e-n)*(t-o)-(s-e)*(o-r));return[l,c,i-t*l-s*c]};class v extends r{constructor(t){super(),this.distort=t}renderDistortion(t,s){const i=[];let o=0,e=0;for(let h=0;h<this.distort.Controllers.length;++h){const t=(this.distort.Controllers[h].x-this.distort.domRect.x)*this.distort.domRect.width/this.distort.hostImg.width,s=(this.distort.Controllers[h].y-this.distort.domRect.y)*this.distort.domRect.height/this.distort.hostImg.height;o+=t,e+=s,i.push([t,s])}i.push([o/this.distort.Controllers.length,e/this.distort.Controllers.length]);this.distort.hosCanvas.width,this.distort.hosCanvas.height}}let u;!function(t){t.Projection="projection",t.Subdivision="subdivision"}(u||(u={}));class p{constructor(t,s,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u.Subdivision;this.projection=void 0,this.Controllers=[],this.hostDiv=void 0,this.hosCanvas=void 0,this.hostImg=void 0,this.domRect=void 0,this.id=-1,this.DISTORTION_TYPE=void 0,this.mPre=[0,0],this.DISTORTION_TYPE=o,this.hostDiv=t,this.hosCanvas=i,this.hostImg=s,this.DISTORTION_TYPE===u.Projection?this.projection=new v(this):this.projection=new d(this),this.init()}reset(){this.destroy(),this.init()}init(){const t=this.hostDiv.getBoundingClientRect();this.domRect=t,this.Controllers=[new e(this,0,t.x,t.y),new e(this,1,t.x+t.width,t.y),new e(this,2,t.x+t.width,t.y+t.height),new e(this,3,t.x,t.y+t.height)]}distortPerspective(t){this.projection.distortPerspective(t),this.renderForce()}updateCaptured(t,s){this.id=-1;for(let i=0;i<this.Controllers.length;++i)n(t+this.domRect.x,s+this.domRect.y,this.Controllers[i].x,this.Controllers[i].y)<50&&(this.id=this.Controllers[i].id)}mouseDown(t,s){this.updateCaptured(t,s),this.mPre=[t,s]}mouseUp(t,s){this.id=-1}mouseMove(t,s){if(this.id>-1){const i=t-this.mPre[0],o=s-this.mPre[1];this.Controllers[this.id].translation(i,o),this.mPre=[t,s]}}render(t){this.projection.renderDistortion(t,this.hostImg)}renderForce(){}destroy(){this.Controllers.forEach((t=>{t.destroy()}))}}class w{constructor(t){this.divHost=void 0,this.renderer=void 0,this.divHost=document.getElementById(t);const s=document.createElement("div");s.style.marginLeft="auto",s.style.marginRight="auto",s.style.backgroundColor="#555",s.style.width="1200px",s.style.height="1000px",this.divHost.appendChild(s),this.renderer=new C(s)}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class C extends o.bb{constructor(t){super(t),this.img=void 0,this.rotation=0,this.x=void 0,this.y=void 0,this.width=void 0,this.height=void 0,this.m=[0,0],this.distort=void 0,(0,o.t4)("https://raw.githubusercontent.com/NamjuLee/data/master/img/MITBuilding7_small.jpg").then((s=>{s.onload=()=>{this.img=s,this.x=100,this.y=100,this.width=s.width,this.height=s.height,this.distort=new p(t,s,this.canvas)}})),this.start()}render(t){this.ctx.save(),this.ctx.translate(.5*this.canvas.width,.5*this.canvas.height),this.ctx.rotate(this.rotation),this.img&&this.ctx.drawImage(this.img,.5*-this.img.width,.5*-this.img.height),this.ctx.restore(),t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.closePath(),t.lineWidth=5,t.stroke(),t.beginPath(),t.arc(this.m[0],this.m[1],5,0,2*Math.PI),t.closePath(),t.lineWidth=5,t.stroke(),this.distort&&this.distort.render(t)}mouseDown(t,s){this.distort.mouseDown(t,s)}mouseUp(t,s){this.distort.mouseUp(t,s)}mouseDrag(t,s){}mouseClick(t,s){}mouseMove(t,s){this.m=[t,s],this.distort.mouseMove(t,s)}keyDown(t){}}}}]);
//# sourceMappingURL=14091.6442fd80.chunk.js.map