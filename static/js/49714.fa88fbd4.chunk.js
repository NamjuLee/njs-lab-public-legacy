"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[49714],{49714:(t,i,s)=>{s.r(i),s.d(i,{AppCanvasTemplate:()=>M,Solution:()=>m});var e=s(458);class o{static GetPoint(t,i,s){return new o(t,i,s,arguments.length>3&&void 0!==arguments[3]?arguments[3]:0)}constructor(t,i,s){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this.v=void 0,this.render=void 0,this.r=5,this.fillColor="",this.v=new e.h9(i,s,o),this.render=t,this.render.pointList.push(this),this.fillColor="rgb(".concat(Math.round(255*Math.random()),",").concat(Math.round(255*Math.random()),",").concat(Math.round(255*Math.random()),",").concat(Math.random(),")")}Render(t){t.fillStyle=this.fillColor,t.beginPath(),t.arc(this.v.x,this.v.y,this.r,0,2*Math.PI),t.closePath(),t.fill()}}class h{static GetLine(t,i,s){return new h(t,i,s)}constructor(t,i,s){this.p0=void 0,this.p1=void 0,this.render=void 0,this.width=5,this.strokeColor="",this.p0=i,this.p1=s,this.render=t,this.render.lineList.push(this),this.strokeColor="rgb(".concat(Math.round(255*Math.random()),",").concat(Math.round(255*Math.random()),",").concat(Math.round(255*Math.random()),",").concat(Math.random(),")")}Render(t){this.p0&&this.p1&&(t.strokeStyle=this.strokeColor,t.beginPath(),t.moveTo(this.p0.v.x,this.p0.v.y),t.lineTo(this.p1.v.x,this.p1.v.y),t.closePath(),t.stroke())}ToJson(){const t=this.p0,i=this.p1;return{p0:{x:t.v.x,y:t.v.y},p1:{x:i.v.x,y:i.v.y}}}}class n{static GetCircle(t,i,s){return new n(t,i,s)}constructor(t,i,s){this.cv=void 0,this.radius=5,this.render=void 0,this.width=5,this.strokeColor="",this.fillColor="",this.cv=i,this.radius=s,this.render=t,this.render.circleList.push(this),this.strokeColor="rgb(".concat(Math.round(255*Math.random()),",").concat(Math.round(255*Math.random()),",").concat(255*Math.random(),",").concat(Math.random(),")"),this.fillColor="rgb(".concat(Math.round(255*Math.random()),",").concat(Math.round(255*Math.random()),",").concat(255*Math.random(),",").concat(Math.random(),")")}Render(t){t.strokeStyle=this.strokeColor,t.fillStyle=this.fillColor,t.beginPath(),t.arc(this.cv.x,this.cv.y,this.radius,0,2*Math.PI),t.closePath(),t.stroke(),t.fill()}}class a{constructor(t){this.appCore=void 0,this.render=void 0,this.commander=void 0,this.mouse=new e.h9(0,0),this.capture=void 0,this.appCore=t,this.render=this.appCore.render,this.commander=new r(this)}MouseMove(t,i){this.mouse.x=t,this.mouse.y=i}MouseDClick(t,i){this.mouse.x=t,this.mouse.y=i,this.commander.ToggleAutoPopulation()}MouseDown(t,i){this.mouse.x=t,this.mouse.y=i,this.appCore.io.GetGraph(this.render.lineList)}MouseLeftClick(t,i){const s=o.GetPoint(this.render,t,i);if(this.render.pointList.length>1){const e=this.commander.FindPoint(t,i);if(e){const t=h.GetLine(this.render,s,e);this.commander.GetCircleByLine(t)}}}MouseUp(t,i){this.mouse.x=t,this.mouse.y=i}MouseDrag(t,i){this.mouse.x=t,this.mouse.y=i}}class r{constructor(t){this.controller=void 0,this.autoPopulation=!1,this.controller=t}ToggleAutoPopulation(){this.autoPopulation=!this.autoPopulation}FindPoint(t,i){const s=this.controller.render;let o,h=Number.MAX_SAFE_INTEGER,n=new e.h9(t,i);for(let e of s.pointList){let t=n.Distance(e.v);t>.1&&t<h&&(h=t,o=e)}return o||void 0}GetCircleByLine(t){const i=e.h9.MidVec(t.p0.v,t.p1.v),s=e.h9.Distance(t.p0.v,t.p1.v);n.GetCircle(this.controller.render,i,.5*s)}}class c{constructor(t){this.appCore=void 0,this.pointList=[],this.lineList=[],this.circleList=[],this.dt=0,this.appCore=t}RenderPre(t){this.Render(t)}Render(t){for(let i=0;i<this.circleList.length;++i)this.circleList[i].Render(t);for(let i=0;i<this.lineList.length;++i)this.lineList[i].Render(t);for(let i=0;i<this.pointList.length;++i)this.pointList[i].Render(t);this.dt+=.1}RenderPost(t){}}class l{constructor(t){this.appCore=void 0,this.appCore=t}GetGraph(t){console.log("get Graph",t);const i={};let s=0;t.forEach((t=>{i[s]=t.ToJson(),s++})),console.log(i)}}class d{constructor(t,i,s){this.DynamicGrid=void 0,this.width=void 0,this.height=void 0,this.controller=void 0,this.render=void 0,this.io=void 0,this.frame=0,this.DynamicGrid=t,this.Init(i-100,s-100)}Init(t,i){this.io=new l(this),this.render=new c(this),this.controller=new a(this)}MouseMove(t,i){this.controller.MouseMove(t,i)}MouseDClick(t,i){this.controller.MouseDClick(t,i)}MouseDown(t,i){this.controller.MouseDown(t,i)}MouseLeftClick(t,i){this.controller.MouseLeftClick(t,i)}MouseUp(t,i){this.controller.MouseUp(t,i)}MouseDrag(t,i){this.controller.MouseDrag(t,i)}Render(t){if(this.render.RenderPre(t),this.controller.commander.autoPopulation){let t=this.DynamicGrid.CanvasCore.canvas.width,i=this.DynamicGrid.CanvasCore.canvas.height,s=Math.random()*t-.5*t+10,e=Math.random()*i-.5*i+10;this.MouseLeftClick(s,e)}}}class u{constructor(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:600,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400;this.app=void 0,this.canvas=void 0,this.host=void 0,this.divLocalMain=void 0,this.divCanvas=void 0,this.divUI=void 0,this.ctx=void 0,this.timer=void 0,this.click=!1,this.pressed=!1,this.prevent=!1,this.delay=500,this.down=!1,this.t=0,this.width=void 0,this.height=void 0,this.divConsole=void 0,this.app=t,this.width=i,this.height=s;const e=document.getElementById(t.id);e&&(this.host=e,this.InitCanvas())}InitCanvas(){const t=document.createElement("div");if(!t)return;this.divLocalMain=t,this.divLocalMain.style.display="flex",this.divLocalMain.style.width=this.width+"px",this.divLocalMain.style.height=this.height+"px",this.divLocalMain.style.margin="10px",this.divLocalMain.style.padding="10px",this.host.append(t);const i=document.createElement("div");if(!i)return;this.divCanvas=i,this.divLocalMain.append(i);const s=document.createElement("canvas");if(s){this.canvas=s,this.divCanvas.append(this.canvas),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.backgroundColor="#aaaaaa";const t=this.canvas.getContext("2d");t&&(this.ctx=t,this.Init())}}Init(){this.ctx.translate(.5*this.ctx.canvas.width,.5*this.ctx.canvas.height),this.ctx.scale(1,1),this.EventBind(),this.Loop()}EventBind(){this.divCanvas.onclick=t=>{this.prevent=!1,this.timer=setTimeout((()=>{if(!this.prevent){if(!this.click)return;this.MouseClickPre(t)}this.prevent=!1}),this.delay)},this.divCanvas.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClickPre(t)},this.divCanvas.addEventListener("wheel",(t=>this.MouseWheel(t,t.deltaY))),this.canvas.onmousedown=t=>{this.click=!0,this.pressed=!0,this.MouseDownPre(t)},this.canvas.onmouseup=t=>{this.pressed=!1,this.MouseUpPre(t)},this.canvas.onmousemove=t=>{this.pressed&&(this.click=!1,this.MouseDragPre(t)),this.MouseMovePre(t)},window.onresize=t=>this.Resize(t)}Resize(t){}Loop(){requestAnimationFrame((()=>{this.Loop()})),this.ctx.clearRect(.5*-this.ctx.canvas.width,.5*-this.ctx.canvas.height,this.ctx.canvas.width,this.ctx.canvas.height),this.Grid(this.ctx),this.ctx.fillStyle="#dddddd",this.ctx.beginPath(),this.ctx.rect(.5*-this.ctx.canvas.width,.5*-this.ctx.canvas.height,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.closePath(),this.ctx.fill(),this.Render(this.ctx)}Grid(t){for(let i=-10;i<10;++i)for(let s=-10;s<10;++s)t.beginPath(),t.fillStyle="rgba(255, 0, 0, 0.9)",t.arc(i,s,.05,0,2*Math.PI),t.closePath(),t.fill()}Render(t){}MouseClickPre(t){this.MouseClick(t)}MouseClick(t){}MouseDoubleClickPre(t){this.MouseDoubleClick(t)}MouseDoubleClick(t){}MouseDownPre(t){this.MouseDown(t)}MouseDown(t){}MouseUpPre(t){this.MouseUp(t)}MouseUp(t){}MouseMovePre(t){this.MouseMove(t)}MouseMove(t){}MouseDragPre(t){this.MouseDrag(t)}MouseDrag(t){}MouseWheel(t,i){}}class v{constructor(t){this.CanvasCore=void 0,this.appCore=void 0,this.t=.9,this.id=void 0,this.m=new e.h9(0,0,0),this.id=t,this.CanvasCore=new u(this),this.Init(),this.InitApp()}InitApp(){this.appCore=new d(this,this.CanvasCore.canvas.width,this.CanvasCore.canvas.height)}Init(){this.CanvasCore.Render=t=>this.Render(t),this.CanvasCore.MouseDown=t=>this.MouseDown(t),this.CanvasCore.MouseClick=t=>this.MouseClick(t),this.CanvasCore.MouseDoubleClick=t=>this.MouseDoubleClick(t),this.CanvasCore.MouseUp=t=>this.MouseUp(t),this.CanvasCore.MouseMove=t=>this.MouseMove(t),this.CanvasCore.MouseDrag=t=>this.MouseDrag(t)}Render(t){this.appCore.Render(t),t.fillStyle="rgba(255, 0, 0, 0.9)",t.beginPath(),t.arc(this.m.x,this.m.y,2.5,0,2*Math.PI),t.closePath(),t.fill()}Grid(t){}mouseRemap(t){const i=this.CanvasCore.ctx.canvas.getBoundingClientRect();this.m.x=t.x-i.left-.5*this.CanvasCore.canvas.width,this.m.y=t.y-i.top-.5*this.CanvasCore.canvas.height}MouseDown(t){this.mouseRemap(t),this.appCore.MouseDown(this.m.x,this.m.y)}MouseUp(t){this.mouseRemap(t),this.appCore.MouseUp(this.m.x,this.m.y)}MouseMove(t){this.mouseRemap(t),this.appCore.MouseMove(this.m.x,this.m.y)}MouseDrag(t){this.mouseRemap(t),this.appCore.MouseDrag(this.m.x,this.m.y)}MouseClick(t){this.mouseRemap(t),this.appCore.MouseLeftClick(this.m.x,this.m.y)}MouseDoubleClick(t){this.mouseRemap(t),this.appCore.MouseDClick(this.m.x,this.m.y)}}class p{constructor(t){this.DynamicGridA=void 0,this.DynamicGridA=new v(t)}}class M{static Init(t){new M(t).Dummy()}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SandBox";this.implementation=void 0,this.implementation=new p(t),console.log("AppCanvasTemplate 1000")}Dummy(){}}class m{constructor(t){this.divHost=void 0,this.divHost=document.getElementById(t),M.Init(t)}destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}}}}]);
//# sourceMappingURL=49714.fa88fbd4.chunk.js.map