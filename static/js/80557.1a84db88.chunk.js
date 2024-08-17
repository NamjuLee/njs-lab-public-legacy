"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[80557],{80557:(t,i,s)=>{s.r(i),s.d(i,{Renderer:()=>x,Solution:()=>o});var e=s(55913);class h{constructor(){this.pixelList=[],this.minV=void 0,this.maxV=void 0,this.rx=10,this.ry=10,this.intervalX=void 0,this.intervalY=void 0}init(t,i,s){this.minV=t,this.maxV=i,this.pixelList=[];const e=this.minV.x,h=this.minV.y;this.intervalX=(this.maxV.x-this.minV.x)/(this.rx-1),this.intervalY=(this.maxV.y-this.minV.y)/(this.ry-1);const n=(t,i)=>4*t+i*s.width*4;for(let r=0;r<this.ry;r++)for(let t=0;t<this.rx;t++){const i=e+t*this.intervalX,c=h+r*this.intervalY;let d=n(t,r);const l=s.data[d],o=s.data[d+1],x=s.data[d+2],v=s.data[d+3];let p=new a(this,i,c,0);p.xi=t,p.yi=r,p.color=[l,o,x,v],this.pixelList.push(p)}}initGridNeighbor(){for(let t=0;t<this.ry;++t)for(let i=0;i<this.rx;++i){let s=i+t*this.rx,e=this.pixelList[s];i>0&&e.nPix.push(this.pixelList[s-1]),i<this.rx-1&&e.nPix.push(this.pixelList[s+1]),t>0&&e.nPix.push(this.pixelList[s-this.rx]),t<this.ry-1&&e.nPix.push(this.pixelList[s+this.rx]),i>0&&t<this.ry-1&&e.nPix.push(this.pixelList[s+this.rx-1]),i>0&&t>0&&e.nPix.push(this.pixelList[s-this.rx-1]),i<this.rx-1&&t<this.ry-1&&e.nPix.push(this.pixelList[s+this.rx+1]),i<this.rx-1&&t>0&&e.nPix.push(this.pixelList[s-this.rx+1])}}picking(t,i){const s=new n(t,i,0);let e=Number.MAX_VALUE,h=-1;for(let a=0;a<this.pixelList.length;++a){const t=r(this.pixelList[a].vec,s);e>t&&(e=t,h=a),this.pixelList[a].hover=!1}h>-1&&(this.pixelList[h].hover=!0)}render(t){this.pixelList.forEach((i=>{i.render(t)}))}}class a{constructor(t,i,s,e){this.xi=void 0,this.yi=void 0,this.pMap=void 0,this.vec=void 0,this.hover=!1,this.nPix=[],this.color=[],this.pMap=t,this.vec=new n(i,s,e)}render(t){const i=this.pMap.intervalX,s=this.pMap.intervalY;if(t.beginPath(),t.rect(this.vec.x-.5*i,this.vec.y-.5*s,i,s),t.closePath(),t.stroke(),t.fillStyle="rgb(".concat(this.color[0],", ").concat(this.color[1],", ").concat(this.color[2],")"),t.fill(),t.beginPath(),t.arc(this.vec.x,this.vec.y,this.vec.r,0,2*Math.PI),t.closePath(),this.hover?t.fillStyle="#999":t.fillStyle="#333",t.fill(),this.hover){for(let i=0;i<this.nPix.length;++i)t.beginPath(),t.moveTo(this.vec.x,this.vec.y),t.lineTo(this.nPix[i].vec.x,this.nPix[i].vec.y),t.closePath(),t.stroke();t.strokeText("x: ".concat(this.xi,", y: ").concat(this.yi),this.vec.x,this.vec.y)}}}class n{constructor(t,i,s){this.x=0,this.y=0,this.z=0,this.r=1,this.x=t,this.y=i,this.z=s}}const r=(t,i)=>Math.sqrt(c(t,i)),c=(t,i)=>(t.x-i.x)*(t.x-i.x)+(t.y-i.y)*(t.y-i.y)+(t.z-i.z)*(t.z-i.z);class d{constructor(){this.img=void 0,this.width=void 0,this.height=void 0}}class l{constructor(){this.canvas=document.createElement("canvas"),this.canvasView=document.createElement("canvas"),this.imgData=new d,this.rx=50,this.ry=50}init(t){return this.imgData.img=t,this.imgData.width=t.width,this.imgData.height=t.height,this.canvasView.width=t.width,this.canvasView.height=t.height,this.canvas.width=this.rx,this.canvas.height=this.ry,this.compute()}updateRes(t,i){return this.rx=t,this.ry=i,this.canvas.width=this.rx,this.canvas.height=this.ry,this.compute()}compute(){const t=this.canvas.getContext("2d"),i=this.canvasView.getContext("2d");t.drawImage(this.imgData.img,0,0,this.imgData.width,this.imgData.height,0,0,this.rx,this.ry);const s=t.getImageData(0,0,this.canvas.width,this.canvas.height);return i.drawImage(this.canvas,0,0,this.rx,this.ry,0,0,this.imgData.width,this.imgData.height),s}}class o{constructor(t){this.divHost=void 0,this.renderer=void 0,this.divHost=document.getElementById(t),this.divHost.style.display="flex",this.divHost.style.alignItems="center";const i=document.createElement("div");i.style.marginLeft="auto",i.style.marginRight="auto",i.style.backgroundColor="#555",i.style.margin="50px",i.style.background="rgba(0,0,0,0)",this.divHost.appendChild(i),this.renderer=new x(i)}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class x extends e.bb{constructor(t){super(t),this.img=void 0,this.rotation=0,this.m=[0,0],this.switch=!0,this.isDithering=!1,this.imageResizer=void 0,this.rx=10,this.ry=10,this.pixelMap=void 0,this.canvasPixelated=document.createElement("canvas"),this.ctxPixelated=void 0,this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.isStatic=!0,this.canvas.style.position="relative",this.canvas.style.width="100%",this.canvas.style.height="100%";let i=new Image(20,20);i.src="/njs-lab-public-legacy/static/svg/moon.svg",t.appendChild(i),this.imageResizer=new l,this.pixelMap=new h,(0,e.t4)("https://raw.githubusercontent.com/NamjuLee/data/master/img/bg/zoom-James-River-Kayaking.jpg").then((t=>{this.img=t,this.img.onload=i=>{this.update(t)}}));const s=document.createElement("input");s.value="https://raw.githubusercontent.com/NamjuLee/data/master/img/heightMap/Heightmap_01.png",s.addEventListener("keydown",(t=>{"Enter"===t.code&&(0,e.t4)(s.value).then((t=>{this.img=t,this.img.onload=i=>{this.update(t)}}))})),this.divHost.appendChild(s);const a=v("rx",10,200);a.slider.defaultValue="10",this.divHost.appendChild(a.div),a.slider.oninput=()=>{const t=parseInt(a.slider.value);this.rx=t,this.updatePixelatedImage()};const n=v("ry",10,200);n.slider.defaultValue="10",this.divHost.appendChild(n.div),n.slider.oninput=()=>{const t=parseInt(n.slider.value);this.ry=t,this.updatePixelatedImage()},this.divHost.appendChild(this.imageResizer.canvasView),this.ctxPixelated=this.canvasPixelated.getContext("2d"),this.divHost.appendChild(this.canvasPixelated),this.divHost.appendChild(this.imageResizer.canvas),this.start()}updatePixelatedImage(){const t=this.imageResizer.updateRes(this.rx,this.ry);this.ctxPixelated.clearRect(0,0,this.ctxPixelated.canvas.width,this.ctxPixelated.canvas.height),this.pixelMap.rx=this.rx,this.pixelMap.ry=this.ry,this.pixelMap.init(new n(0,0,0),new n(this.img.width,this.img.height,0),t),this.pixelMap.render(this.ctxPixelated)}update(t){this.img=t,this.canvas.width=this.img.width,this.canvas.height=this.img.height,this.canvasPixelated.width=this.img.width,this.canvasPixelated.height=this.img.height,this.imageResizer.init(t),this.render(this.ctx)}render(t){void 0!==this.img&&(t.clearRect(0,0,t.canvas.width,t.canvas.height),t.drawImage(this.img,0,0))}destroyPost(){}}const v=(t,i,s)=>{const e=document.createElement("div");e.style.display="flex";const h=document.createElement("input");h.type="range",h.min="".concat(i),h.max="".concat(s);const a=document.createElement("div");return a.textContent=t,a.style.color="#aaa",e.appendChild(h),e.appendChild(a),{div:e,slider:h,text:a}}}}]);
//# sourceMappingURL=80557.1a84db88.chunk.js.map