"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[65900],{61769:(t,s,i)=>{i.r(s),i.d(s,{Renderer:()=>n,Solution:()=>h,pointOnSegment2D:()=>d});var e=i(55913);class h{constructor(t){this.divHost=void 0,this.renderer=void 0,this.divHost=document.getElementById(t),this.divHost.style.display="flex",this.divHost.style.alignItems="center";const s=document.createElement("div");s.style.marginLeft="auto",s.style.marginRight="auto",s.style.backgroundColor="#555",s.style.width="1000px",s.style.height="600px",this.divHost.appendChild(s),this.renderer=new n(s)}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class n extends e.bb{constructor(t){super(t),this.walls=[],this.sun=void 0,this.t=0,this.canvas.style.position="relative",this.canvas.style.width="100%",this.canvas.style.height="100%",this.sun=new a(new e.P(300,100,0)),this.walls.push(new l(100,200,400,500)),this.walls.push(new l(100,500,500,600)),this.walls.push(new l(500,100,400,400)),this.start()}mouseMove(t,s){this.sun.updateDirection(t,s)}render(t){this.t+=.01,this.update(t),this.walls.forEach((s=>{s.draw(t)})),this.sun.draw(t,this.t)}update(t){const s=this.sun.getSunLine();for(let e=0;e<this.walls.length;++e){const i=p(s.p0.x,s.p0.y,s.p1.x,s.p1.y,this.walls[e].p0.x,this.walls[e].p0.y,this.walls[e].p1.x,this.walls[e].p1.y);if(void 0!==i){const s=y(this.sun.rayVec,this.walls[e].nVec);t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(i.x+s.x,i.y+s.y),t.closePath(),t.stroke()}}const i=r(s,this.walls);for(let e=0;e<i.length;++e){const s=i[e];t.beginPath(),t.arc(s.x,s.y,5,0,2*Math.PI),t.closePath(),t.stroke()}}}const r=(t,s)=>{let i,e,h=[],n=1e4;for(let r=0;r<s.length;++r){const h=s[r],a=p(t.p0.x,t.p0.y,t.p1.x,t.p1.y,h.p0.x,h.p0.y,h.p1.x,h.p1.y);if(void 0!==a){const s=o(t.p0.x,t.p0.y,0,a.x,a.y,0);s<n&&(i=a,e=h,n=s)}}return void 0!==i&&h.push(i),h},o=(t,s,i,e,h,n)=>Math.sqrt((t-e)*(t-e)+(s-h)*(s-h)+(i-n)*(i-n));class a{constructor(t){this.v=void 0,this.target=new e.P(0,0,0),this.rayVec=new e.P(0,0,0),this.v=t}draw(t,s){t.lineWidth=.1,t.beginPath(),t.moveTo(this.v.x,this.v.y),t.lineTo(this.target.x,this.target.y),t.stroke(),t.lineWidth=.5,t.beginPath(),t.moveTo(this.v.x,this.v.y),t.lineTo(this.v.x+50*this.rayVec.x,this.v.y+50*this.rayVec.y),t.stroke(),t.fillStyle="#FDB813",t.beginPath(),t.arc(this.v.x,this.v.y,Math.sin(9*s)+9,0,2*Math.PI),t.fill()}updateDirection(t,s){this.target.x=t,this.target.y=s,this.rayVec.x=this.v.x+this.target.x,this.rayVec.y=this.v.y+this.target.y,this.rayVec.x=this.target.x-this.v.x,this.rayVec.y=this.target.y-this.v.y}getSunLine(){return{p0:this.v,p1:new e.P(this.v.x+1e3*this.rayVec.x,this.v.y+1e3*this.rayVec.y)}}}class l{constructor(t,s,i,h){this.p0=void 0,this.p1=void 0,this.nVec=void 0,this.p0=new e.P(t,s),this.p1=new e.P(i,h),this.computeNormal()}draw(t){t.lineWidth=3,t.beginPath(),t.moveTo(this.p0.x,this.p0.y),t.lineTo(this.p1.x,this.p1.y),t.stroke()}computeNormal(){const t=new e.P(this.p1.x-this.p0.x,this.p1.y-this.p0.y,0);this.nVec=(0,e.ir)(t,new e.P(0,0,1)),this.nVec=(0,e.Fv)(this.nVec)}}const y=function(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const h=c(t,s);return new e.P((2*h*s.x-t.x)*-i,(2*h*s.y-t.y)*-i,(2*h*s.z-t.z)*-i)},c=(t,s)=>t.x*s.x+t.y*s.y+t.z*s.z,d=(t,s,i,e,h,n)=>{if(i!==h){if(i<=t&&t<=h)return!0;if(i>=t&&t>=h)return!0}else{if(e<=s&&s<=n)return!0;if(e>=s&&s>=n)return!0}return!1},p=(t,s,i,e,h,n,r,o)=>{const a=(o-n)*(i-t)-(r-h)*(e-s),l=(r-h)*(s-n)-(o-n)*(t-h),y=(i-t)*(s-n)-(e-s)*(t-h);if(0===a)return void 0;const c=l/a,d=y/a;return c>=0&&c<=1&&d>=0&&d<=1?{x:t+c*(i-t),y:s+c*(e-s)}:void 0}}}]);
//# sourceMappingURL=65900.e087da9c.chunk.js.map