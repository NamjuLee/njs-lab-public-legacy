"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[85307],{85307:(t,s,i)=>{i.r(s),i.d(s,{Solution:()=>C});var e=i(458);class h{constructor(){this.nodes=[],this.edges=[],this.m=void 0,this.capture=void 0,this.m=new e.h9(500,500),this.AddNode(50,50),this.AddNode(100,100),this.AddNode(100,50),this.AddEdge(this.nodes[0],this.nodes[1]),this.AddEdge(this.nodes[1],this.nodes[2]),this.AddEdge(this.nodes[2],this.nodes[0])}MouseDown(t,s){this.m.x=t,this.m.y=s,this.capture=this.FindNode(t,s)}MouseLeftClick(t,s){const i=this.AddNode(t,s),e=this.FindCloseNode(i);e&&this.AddEdge(i,e)}MouseMove(t,s){this.m.x=t,this.m.y=s}MouseDrag(t,s){this.capture&&(this.capture.v.x=t,this.capture.v.y=s)}AddNode(t,s){const i=new o(new e.h9(t,s),e.h9.Zero(),2);return this.nodes.push(i),i}AddEdge(t,s){const i=new n(t,s);return this.edges.push(i),i}FindCloseNode(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e4,i=-1;for(let e=0;e<this.nodes.length;++e)if(this.nodes[e]!==t){let h=this.nodes[e].v.Distance(t.v);h<s&&(s=h,i=e)}if(-1!==i)return this.nodes[i]}FindNode(t,s){this.m.x=t,this.m.y=s;for(let i=0;i<this.nodes.length;++i){if(this.nodes[i].v.Distance(this.m)<10)return this.capture=this.nodes[i],this.nodes[i]}this.capture=void 0}Move(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-.3,h=arguments.length>3?arguments[3]:void 0;for(let n=0;n<this.nodes.length;++n){const o=this.nodes[n];o.f.x*=i,o.f.y*=i,o.f.z*=i;const a=new e.h9(t.x-o.v.x,t.y-o.v.y,t.z-o.v.z),d=a.Length();a.Unitize();const r=a.x*Math.exp(-.001*d*d)*10.1,l=a.y*Math.exp(-.001*d*d)*10.1,c=a.z*Math.exp(-.001*d*d)*10.1;isNaN(r)||(o.f.x=r,o.f.y=l,o.f.z=c),o.Move(h,s)}for(let e=0;e<this.edges.length;++e)this.edges[e].ApplySpringForce();for(let e=0;e<this.nodes.length;++e)this.nodes[e].CheckLine(this.edges);for(let e=0;e<this.nodes.length;++e)this.nodes[e].Move(h,s)}Render(t){this.Move(this.m,.9,0,.1),t.strokeStyle="#000ff0",t.lineWidth=1;for(let s=0;s<this.edges.length;++s)t.beginPath(),t.moveTo(this.edges[s].n0.v.x,this.edges[s].n0.v.y),t.lineTo(this.edges[s].n1.v.x,this.edges[s].n1.v.y),t.closePath(),t.stroke();t.fillStyle="#0000ff";for(let s=0;s<this.nodes.length;++s)t.beginPath(),t.arc(this.nodes[s].v.x,this.nodes[s].v.y,5*this.nodes[s].m,0,2*Math.PI),t.closePath(),t.fill()}}class n{constructor(t,s){this.n0=void 0,this.n1=void 0,this.targetLength=1.05,this.SpringConstant=10.5,this.n0=t,this.n1=s;const i=this.n0.v.Distance(this.n1.v)-10;this.targetLength=i<50?60:i}ApplySpringForce(){const t=new e.h9(this.n1.v.x-this.n0.v.x,this.n1.v.y-this.n0.v.y,this.n1.v.z-this.n0.v.z),s=t.Length();t.Unitize(),this.n0.f.x+=t.x*(s-this.targetLength)*this.SpringConstant,this.n0.f.y+=t.y*(s-this.targetLength)*this.SpringConstant,this.n0.f.z+=t.z*(s-this.targetLength)*this.SpringConstant,this.n1.f.x-=t.x*(s-this.targetLength)*this.SpringConstant,this.n1.f.y-=t.y*(s-this.targetLength)*this.SpringConstant,this.n1.f.z-=t.z*(s-this.targetLength)*this.SpringConstant}}class o{constructor(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.fixed=!1,this.needCompute=!0,this.v=void 0,this.u=void 0,this.f=void 0,this.m=1,this.v=t,this.u=s,this.f=e.h9.Origin(),this.m=i}Move(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.99;this.fixed||(this.u.x*=s,this.u.y*=s,this.u.z*=s,this.u.x+=this.f.x*(t/this.m),this.u.y+=this.f.y*(t/this.m),this.u.z+=this.f.z*(t/this.m),this.v.x+=this.u.x*t,this.v.y+=this.u.y*t,this.v.z+=this.u.z*t,this.needCompute=!0)}CheckLine(t){for(let s=0;s<t.length;++s){let i=t[s];if(i.n0!==this&&i.n1!==this){const t=this.PointCloseToLine(i.n0.v,i.n1.v,this.v);if(t[0]){const s=new e.h9(t[0],t[1]);if(s.Distance(this.v)<5){this.needCompute=!1,s.Unitize();const t=e.h9.Normalize(this.v),i=new e.h9(s.x-t.x,s.y-t.y,s.z-t.z);this.f=i}}}}}PointCloseToLine(t,s,i){let e=i.x-s.x,h=i.y-s.y,n=((t.x-s.x)*e+(t.y-s.y)*h)/(e*e+h*h);return[this.Lerp(s.x,i.x,n),this.Lerp(s.y,i.y,n)]}Lerp(t,s,i){return t+i*(s-t)}}class a{constructor(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;this.graphSystem=void 0,this.canvas=void 0,this.host=void 0,this.divLocalMain=void 0,this.divCanvas=void 0,this.divUI=void 0,this.ctx=void 0,this.timer=void 0,this.click=!1,this.pressed=!1,this.prevent=!1,this.delay=500,this.down=!1,this.t=0,this.width=void 0,this.height=void 0,this.graphSystem=t,this.width=s,this.height=i;const e=document.getElementById(t.id);e&&(this.host=e,this.InitCanvas())}InitCanvas(){const t=document.createElement("div");if(!t)return;this.divLocalMain=t,this.divLocalMain.style.display="flex",this.divLocalMain.style.width=this.width+"px",this.divLocalMain.style.height=this.height+"px",this.divLocalMain.style.margin="10px",this.divLocalMain.style.padding="10px",this.host.append(t);const s=document.createElement("div");if(!s)return;this.divCanvas=s,this.divLocalMain.append(s);const i=document.createElement("canvas");if(i){this.canvas=i,this.divCanvas.append(this.canvas),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.backgroundColor="#aaaaaa";const t=this.canvas.getContext("2d");t&&(this.ctx=t,this.InitUI(),this.Init())}}InitUI(){const t=document.createElement("div");if(!t)return;this.divUI=t,this.divLocalMain.append(t),this.divUI.style.marginLeft="10px",this.divUI.style.width="100%";const s=document.createElement("button");s.textContent="reset",s.onclick=()=>{this.graphSystem.InitGraph()},this.divUI.append(s);const i=document.createElement("p");i&&(this.divUI.append(i),i.style.width="max-content",i.innerHTML="1. clikc on canvas to populate a node! <br> ",i.innerHTML+="2. drag a node to move! <br> ")}Init(){this.ctx.translate(.5*this.ctx.canvas.width,.5*this.ctx.canvas.height),this.ctx.scale(1,1),this.EventBind(),this.Loop()}EventBind(){this.canvas.onclick=t=>{this.prevent=!1,this.timer=setTimeout((()=>{if(!this.prevent){if(!this.click)return;this.MouseClick(t)}this.prevent=!1}),this.delay)},this.canvas.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClick(t)},this.canvas.addEventListener("wheel",(t=>this.MouseWheel(t,t.deltaY))),this.canvas.onmousedown=t=>{this.click=!0,this.pressed=!0,this.MouseDown(t)},this.canvas.onmouseup=t=>{this.pressed=!1,this.MouseUp(t)},this.canvas.onmousemove=t=>{this.pressed&&(this.click=!1,this.MouseDrag(t)),this.MouseMove(t)},window.onresize=t=>this.Resize(t)}Resize(t){}Loop(){requestAnimationFrame((()=>{this.Loop()})),this.ctx.clearRect(-10,-10,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.fillStyle="#dddddd",this.ctx.beginPath(),this.ctx.rect(-500,-500,1e3,1e3),this.ctx.closePath(),this.ctx.fill(),this.Render(this.ctx)}Render(t){}MouseClick(t){}MouseDoubleClick(t){}MouseDown(t){}MouseUp(t){}MouseMove(t){}MouseDrag(t){}MouseWheel(t,s){}}class d{constructor(t){this.CanvasCore=void 0,this.graph=void 0,this.t=.9,this.id=void 0,this.m=new e.h9(0,0,0),this.id=t,this.CanvasCore=new a(this),this.Init(),this.InitGraph()}Init(){this.CanvasCore.Render=t=>this.Render(t),this.CanvasCore.MouseDown=t=>this.MouseDown(t),this.CanvasCore.MouseClick=t=>this.MouseClick(t),this.CanvasCore.MouseDoubleClick=t=>this.MouseDoubleClick(t),this.CanvasCore.MouseUp=t=>this.MouseUp(t),this.CanvasCore.MouseMove=t=>this.MouseMove(t),this.CanvasCore.MouseDrag=t=>this.MouseDrag(t)}InitGraph(){this.graph=new h}Render(t){this.graph.Render(t),t.fillStyle="rgba(255, 0, 0, 0.9)",t.beginPath(),t.arc(this.m.x,this.m.y,2.5,0,2*Math.PI),t.closePath(),t.fill()}Grid(t){for(let s=-10;s<10;++s)for(let i=-10;i<10;++i)t.beginPath(),t.fillStyle="rgba(255, 0, 0, 0.9)",t.arc(s,i,.05,0,2*Math.PI),t.closePath(),t.fill()}mouseRemap(t){this.m.x=t.offsetX-.5*this.CanvasCore.canvas.width,this.m.y=t.offsetY-.5*this.CanvasCore.canvas.height}MouseDown(t){this.mouseRemap(t),this.graph.MouseDown(this.m.x,this.m.y)}MouseUp(t){this.mouseRemap(t)}MouseMove(t){this.mouseRemap(t),this.graph.MouseMove(this.m.x,this.m.y)}MouseDrag(t){this.mouseRemap(t),this.graph.MouseDrag(this.m.x,this.m.y)}MouseClick(t){this.mouseRemap(t),this.graph.MouseLeftClick(this.m.x,this.m.y)}MouseDoubleClick(t){this.mouseRemap(t)}}class r{constructor(){this.nodes=[],this.edges=[],this.m=void 0,this.capture=void 0,this.m=new e.h9(500,500),this.AddNode(50,50),this.AddNode(100,100),this.AddNode(100,50),this.AddEdge(this.nodes[0],this.nodes[1]),this.AddEdge(this.nodes[1],this.nodes[2]),this.AddEdge(this.nodes[2],this.nodes[0])}UpdateLength(t){for(let s=0;s<this.edges.length;++s)this.edges[s].targetLength=t}MouseDown(t,s){this.m.x=t,this.m.y=s,this.capture=this.FindNode(t,s)}MouseLeftClick(t,s){const i=this.AddNode(t,s),e=this.FindCloseNode(i);e&&this.AddEdge(i,e)}MouseMove(t,s){this.m.x=t,this.m.y=s}MouseDrag(t,s){this.capture&&(this.capture.v.x=t,this.capture.v.y=s)}AddNode(t,s){const i=new c(new e.h9(t,s),e.h9.Zero(),2);return this.nodes.push(i),i}AddEdge(t,s){const i=new l(t,s);return this.edges.push(i),i}FindCloseNode(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e4,i=-1;for(let e=0;e<this.nodes.length;++e)if(this.nodes[e]!==t){let h=this.nodes[e].v.Distance(t.v);h<s&&(s=h,i=e)}if(-1!==i)return this.nodes[i]}FindNode(t,s){this.m.x=t,this.m.y=s;for(let i=0;i<this.nodes.length;++i){if(this.nodes[i].v.Distance(this.m)<10)return this.capture=this.nodes[i],this.nodes[i]}this.capture=void 0}Move(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-.3,h=arguments.length>3?arguments[3]:void 0;for(let n=0;n<this.nodes.length;++n){const o=this.nodes[n];o.f.x*=i,o.f.y*=i,o.f.z*=i;const a=new e.h9(t.x-o.v.x,t.y-o.v.y,t.z-o.v.z),d=a.Length();a.Unitize();const r=a.x*Math.exp(-.001*d*d)*10.1,l=a.y*Math.exp(-.001*d*d)*10.1,c=a.z*Math.exp(-.001*d*d)*10.1;isNaN(r)||(o.f.x=r,o.f.y=l,o.f.z=c),o.Move(h,s)}for(let e=0;e<this.edges.length;++e)this.edges[e].ApplySpringForce();for(let e=0;e<this.nodes.length;++e)this.nodes[e].CheckLine(this.edges);for(let e=0;e<this.nodes.length;++e)this.nodes[e].Move(h,s)}Render(t){this.Move(this.m,.9,0,.1),t.strokeStyle="#000ff0",t.lineWidth=1;for(let s=0;s<this.edges.length;++s)t.beginPath(),t.moveTo(this.edges[s].n0.v.x,this.edges[s].n0.v.y),t.lineTo(this.edges[s].n1.v.x,this.edges[s].n1.v.y),t.closePath(),t.stroke();t.fillStyle="#0000ff";for(let s=0;s<this.nodes.length;++s)t.beginPath(),t.arc(this.nodes[s].v.x,this.nodes[s].v.y,5*this.nodes[s].m,0,2*Math.PI),t.closePath(),t.fill()}}class l{constructor(t,s){this.n0=void 0,this.n1=void 0,this.targetLength=1.05,this.SpringConstant=10.5,this.n0=t,this.n1=s;const i=this.n0.v.Distance(this.n1.v)-10;this.targetLength=i<50?60:i}ApplySpringForce(){const t=new e.h9(this.n1.v.x-this.n0.v.x,this.n1.v.y-this.n0.v.y,this.n1.v.z-this.n0.v.z),s=t.Length();t.Unitize(),this.n0.f.x+=t.x*(s-this.targetLength)*this.SpringConstant,this.n0.f.y+=t.y*(s-this.targetLength)*this.SpringConstant,this.n0.f.z+=t.z*(s-this.targetLength)*this.SpringConstant,this.n1.f.x-=t.x*(s-this.targetLength)*this.SpringConstant,this.n1.f.y-=t.y*(s-this.targetLength)*this.SpringConstant,this.n1.f.z-=t.z*(s-this.targetLength)*this.SpringConstant}}class c{constructor(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.fixed=!1,this.needCompute=!0,this.v=void 0,this.u=void 0,this.f=void 0,this.m=1,this.v=t,this.u=s,this.f=e.h9.Origin(),this.m=i}Move(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.99;this.fixed||(this.u.x*=s,this.u.y*=s,this.u.z*=s,this.u.x+=this.f.x*(t/this.m),this.u.y+=this.f.y*(t/this.m),this.u.z+=this.f.z*(t/this.m),this.v.x+=this.u.x*t,this.v.y+=this.u.y*t,this.v.z+=this.u.z*t,this.needCompute=!0)}CheckLine(t){for(let s=0;s<t.length;++s){let i=t[s];if(i.n0!==this&&i.n1!==this){const t=this.PointCloseToLine(i.n0.v,i.n1.v,this.v);if(t[0]){const s=new e.h9(t[0],t[1]);if(s.Distance(this.v)<5){this.needCompute=!1,s.Unitize();const t=e.h9.Normalize(this.v),i=new e.h9(s.x-t.x,s.y-t.y,s.z-t.z);this.f=i}}}}}PointCloseToLine(t,s,i){let e=i.x-s.x,h=i.y-s.y,n=((t.x-s.x)*e+(t.y-s.y)*h)/(e*e+h*h);return[this.Lerp(s.x,i.x,n),this.Lerp(s.y,i.y,n)]}Lerp(t,s,i){return t+i*(s-t)}}class v{constructor(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;this.graphSystem=void 0,this.canvas=void 0,this.host=void 0,this.divLocalMain=void 0,this.divCanvas=void 0,this.divUI=void 0,this.ctx=void 0,this.timer=void 0,this.click=!1,this.pressed=!1,this.prevent=!1,this.delay=500,this.down=!1,this.t=0,this.width=void 0,this.height=void 0,this.graphSystem=t,this.width=s,this.height=i;const e=document.getElementById(t.id);e&&(this.host=e,this.InitCanvas())}InitCanvas(){const t=document.createElement("div");if(!t)return;this.divLocalMain=t,this.divLocalMain.style.display="flex",this.divLocalMain.style.width=this.width+"px",this.divLocalMain.style.height=this.height+"px",this.divLocalMain.style.margin="10px",this.divLocalMain.style.padding="10px",this.host.append(t);const s=document.createElement("div");if(!s)return;this.divCanvas=s,this.divLocalMain.append(s);const i=document.createElement("canvas");if(i){this.canvas=i,this.divCanvas.append(this.canvas),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.backgroundColor="#aaaaaa";const t=this.canvas.getContext("2d");t&&(this.ctx=t,this.InitUI(),this.Init())}}InitUI(){const t=document.createElement("div");if(!t)return;this.divUI=t,this.divLocalMain.append(t),this.divUI.style.marginLeft="10px",this.divUI.style.width="100%";const s=document.createElement("button");s.textContent="reset",s.onclick=()=>{this.graphSystem.InitGraph()},this.divUI.append(s);let i=document.createElement("p");if(!i)return;this.divUI.append(i),i.textContent="length";let e=document.createElement("input");e.oninput=()=>{const t=+e.value;this.graphSystem.graph.UpdateLength(t)},e.type="range",e.min="10",e.max="100.0",e.value="10",this.divUI.append(e),i=document.createElement("p"),i&&(this.divUI.append(i),i.innerHTML="1. clikc on canvas to populate a node! <br> ",i.innerHTML+="2. drag a node to move! <br> ")}Init(){this.ctx.translate(.5*this.ctx.canvas.width,.5*this.ctx.canvas.height),this.ctx.scale(1,1),this.EventBind(),this.Loop()}EventBind(){this.canvas.onclick=t=>{this.prevent=!1,this.timer=setTimeout((()=>{if(!this.prevent){if(!this.click)return;this.MouseClick(t)}this.prevent=!1}),this.delay)},this.canvas.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClick(t)},this.canvas.addEventListener("wheel",(t=>this.MouseWheel(t,t.deltaY))),this.canvas.onmousedown=t=>{this.click=!0,this.pressed=!0,this.MouseDown(t)},this.canvas.onmouseup=t=>{this.pressed=!1,this.MouseUp(t)},this.canvas.onmousemove=t=>{this.pressed&&(this.click=!1,this.MouseDrag(t)),this.MouseMove(t)},window.onresize=t=>this.Resize(t)}Resize(t){}Loop(){requestAnimationFrame((()=>{this.Loop()})),this.ctx.clearRect(-10,-10,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.fillStyle="#dddddd",this.ctx.beginPath(),this.ctx.rect(-500,-500,1e3,1e3),this.ctx.closePath(),this.ctx.fill(),this.Render(this.ctx)}Render(t){}MouseClick(t){}MouseDoubleClick(t){}MouseDown(t){}MouseUp(t){}MouseMove(t){}MouseDrag(t){}MouseWheel(t,s){}}class u{constructor(t){this.CanvasCore=void 0,this.graph=void 0,this.t=.9,this.id=void 0,this.m=new e.h9(0,0,0),this.id=t,this.CanvasCore=new v(this),this.Init(),this.InitGraph()}Init(){this.CanvasCore.Render=t=>this.Render(t),this.CanvasCore.MouseDown=t=>this.MouseDown(t),this.CanvasCore.MouseClick=t=>this.MouseClick(t),this.CanvasCore.MouseDoubleClick=t=>this.MouseDoubleClick(t),this.CanvasCore.MouseUp=t=>this.MouseUp(t),this.CanvasCore.MouseMove=t=>this.MouseMove(t),this.CanvasCore.MouseDrag=t=>this.MouseDrag(t)}InitGraph(){this.graph=new r}Render(t){this.graph.Render(t),t.fillStyle="rgba(255, 0, 0, 0.9)",t.beginPath(),t.arc(this.m.x,this.m.y,2.5,0,2*Math.PI),t.closePath(),t.fill()}Grid(t){for(let s=-10;s<10;++s)for(let i=-10;i<10;++i)t.beginPath(),t.fillStyle="rgba(255, 0, 0, 0.9)",t.arc(s,i,.05,0,2*Math.PI),t.closePath(),t.fill()}mouseRemap(t){this.m.x=t.offsetX-.5*this.CanvasCore.canvas.width,this.m.y=t.offsetY-.5*this.CanvasCore.canvas.height}MouseDown(t){this.mouseRemap(t),this.graph.MouseDown(this.m.x,this.m.y)}MouseUp(t){this.mouseRemap(t)}MouseMove(t){this.mouseRemap(t),this.graph.MouseMove(this.m.x,this.m.y)}MouseDrag(t){this.mouseRemap(t),this.graph.MouseDrag(this.m.x,this.m.y)}MouseClick(t){this.mouseRemap(t),this.graph.MouseLeftClick(this.m.x,this.m.y)}MouseDoubleClick(t){console.log("d click")}}class g{constructor(){this.nodes=[],this.edges=[],this.m=void 0,this.capture=void 0,this.historyTimer=0,this.collisionTrajectory=[],this.m=new e.h9(500,500),this.AddNode(50,50),this.AddNode(100,100),this.AddNode(100,50),this.AddEdge(this.nodes[0],this.nodes[1]),this.AddEdge(this.nodes[1],this.nodes[2]),this.AddEdge(this.nodes[2],this.nodes[0])}UpdateLength(t){for(let s=0;s<this.edges.length;++s)this.edges[s].targetLength=t}MouseDown(t,s){this.m.x=t,this.m.y=s,this.capture=this.FindNode(t,s)}MouseLeftClick(t,s){const i=this.AddNode(t,s),e=this.FindCloseNode(i);e&&this.AddEdge(i,e)}MouseMove(t,s){this.m.x=t,this.m.y=s}MouseDrag(t,s){this.capture&&(this.capture.v.x=t,this.capture.v.y=s)}AddNode(t,s){const i=new m(new e.h9(t,s),e.h9.Zero(),2);return this.nodes.push(i),i}AddEdge(t,s){const i=new p(t,s);return this.edges.push(i),i}FindCloseNode(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e4,i=-1;for(let e=0;e<this.nodes.length;++e)if(this.nodes[e]!==t){let h=this.nodes[e].v.Distance(t.v);h<s&&(s=h,i=e)}if(-1!==i)return this.nodes[i]}FindNode(t,s){this.m.x=t,this.m.y=s;for(let i=0;i<this.nodes.length;++i){if(this.nodes[i].v.Distance(this.m)<10)return this.capture=this.nodes[i],console.log(this.capture.colNodes),this.nodes[i]}this.capture=void 0}Move(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-.3,h=arguments.length>3?arguments[3]:void 0;for(let n=0;n<this.nodes.length;++n){const s=this.nodes[n];s.f.x*=i,s.f.y*=i,s.f.z*=i;const h=new e.h9(t.x-s.v.x,t.y-s.v.y,t.z-s.v.z),o=h.Length();h.Unitize();const a=h.x*Math.exp(-.001*o*o)*10.1,d=h.y*Math.exp(-.001*o*o)*10.1,r=h.z*Math.exp(-.001*o*o)*10.1;isNaN(a)||(s.f.x=a,s.f.y=d,s.f.z=r)}for(let e=0;e<this.edges.length;++e)this.edges[e].ApplySpringForce();for(let e=0;e<this.nodes.length;++e)this.nodes[e].CheckLine(this.edges);for(let e=0;e<this.nodes.length;++e)this.nodes[e].isCol=!1;for(let n=0;n<this.nodes.length;++n){let t=this.nodes[n];for(let s=0;s<this.nodes.length;++s){let i=this.nodes[s];if(t!==i&&t.v.Distance(i.v)<40){const s=e.h9.Sub(t.u,i.u),h=e.h9.Normalize(s),n=e.h9.Scale(h,1);if(t.u=e.h9.Add(t.u,n),t.isCol=!0,this.historyTimer+=.1,this.historyTimer>5){t.colNodes.push(i),this.historyTimer=0,this.collisionTrajectory.push(new e.h9(t.v.x,t.v.y,3*(Math.random()+3)));const s=Math.random();s<.3?this.collisionTrajectory.push(new e.h9(100,0,0)):.3<s&&s<.6?this.collisionTrajectory.push(new e.h9(0,100,0)):this.collisionTrajectory.push(new e.h9(0,0,100))}}}}for(let e=0;e<this.nodes.length;++e)this.nodes[e].Move(h,s)}Render(t){for(let s=0;s<this.collisionTrajectory.length;s+=2){const i=this.collisionTrajectory[s],e=this.collisionTrajectory[s+1];t.beginPath(),t.fillStyle="rgba(".concat(e.x,", ").concat(e.y,", ").concat(e.z,", 0.1)"),t.arc(i.x,i.y,i.z,0,2*Math.PI),t.closePath(),t.fill()}this.Move(this.m,.9,0,.1),t.strokeStyle="#000ff0",t.lineWidth=1;for(let s=0;s<this.edges.length;++s)t.beginPath(),e.h9.Distance(this.edges[s].n0.v,this.edges[s].n1.v)<this.edges[s].targetLength-5&&(t.strokeStyle="#ff0000",this.edges[s].n0.isShort=!0,this.edges[s].n1.isShort=!0),t.moveTo(this.edges[s].n0.v.x,this.edges[s].n0.v.y),t.lineTo(this.edges[s].n1.v.x,this.edges[s].n1.v.y),t.closePath(),t.stroke();t.fillStyle="#0000ff";for(let s=0;s<this.nodes.length;++s)t.beginPath(),this.nodes[s].isShort&&(t.fillStyle="#fff000",this.nodes[s].isShort=!1),t.arc(this.nodes[s].v.x,this.nodes[s].v.y,5*this.nodes[s].m,0,2*Math.PI),t.closePath(),t.fill(),t.beginPath(),t.arc(this.nodes[s].v.x,this.nodes[s].v.y,20,0,2*Math.PI),t.closePath(),this.nodes[s].isCol?(t.lineWidth=4.5,t.strokeStyle="#ff0000"):(t.lineWidth=1,t.strokeStyle="#000000"),t.stroke()}}class p{constructor(t,s){this.n0=void 0,this.n1=void 0,this.targetLength=1.05,this.SpringConstant=10.5,this.n0=t,this.n1=s;const i=this.n0.v.Distance(this.n1.v)-10;this.targetLength=i<50?60:i}ApplySpringForce(){const t=new e.h9(this.n1.v.x-this.n0.v.x,this.n1.v.y-this.n0.v.y,this.n1.v.z-this.n0.v.z),s=t.Length();t.Unitize(),this.n0.f.x+=t.x*(s-this.targetLength)*this.SpringConstant,this.n0.f.y+=t.y*(s-this.targetLength)*this.SpringConstant,this.n0.f.z+=t.z*(s-this.targetLength)*this.SpringConstant,this.n1.f.x-=t.x*(s-this.targetLength)*this.SpringConstant,this.n1.f.y-=t.y*(s-this.targetLength)*this.SpringConstant,this.n1.f.z-=t.z*(s-this.targetLength)*this.SpringConstant}}class m{constructor(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.fixed=!1,this.needCompute=!0,this.v=void 0,this.u=void 0,this.f=void 0,this.m=1,this.isShort=!1,this.isCol=!1,this.colNodes=[],this.v=t,this.u=s,this.f=e.h9.Origin(),this.m=i}Move(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.99;this.fixed||(this.u.x*=s,this.u.y*=s,this.u.z*=s,this.u.x+=this.f.x*(t/this.m),this.u.y+=this.f.y*(t/this.m),this.u.z+=this.f.z*(t/this.m),this.v.x+=this.u.x*t,this.v.y+=this.u.y*t,this.v.z+=this.u.z*t,this.needCompute=!0)}CheckLine(t){for(let s=0;s<t.length;++s){let i=t[s];if(i.n0!==this&&i.n1!==this){const t=this.PointCloseToLine(i.n0.v,i.n1.v,this.v);if(t[0]){const s=new e.h9(t[0],t[1]);if(s.Distance(this.v)<5){this.needCompute=!1,s.Unitize();const t=e.h9.Normalize(this.v),i=new e.h9(s.x-t.x,s.y-t.y,s.z-t.z);this.f=i}}}}}PointCloseToLine(t,s,i){let e=i.x-s.x,h=i.y-s.y,n=((t.x-s.x)*e+(t.y-s.y)*h)/(e*e+h*h);return[this.Lerp(s.x,i.x,n),this.Lerp(s.y,i.y,n)]}Lerp(t,s,i){return t+i*(s-t)}}class f{constructor(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;this.graphSystem=void 0,this.canvas=void 0,this.host=void 0,this.divLocalMain=void 0,this.divCanvas=void 0,this.divUI=void 0,this.ctx=void 0,this.timer=void 0,this.click=!1,this.pressed=!1,this.prevent=!1,this.delay=500,this.down=!1,this.t=0,this.width=void 0,this.height=void 0,this.graphSystem=t,this.width=s,this.height=i;const e=document.getElementById(t.id);e&&(this.host=e,this.InitCanvas())}InitCanvas(){const t=document.createElement("div");if(!t)return;this.divLocalMain=t,this.divLocalMain.style.display="flex",this.divLocalMain.style.width=this.width+"px",this.divLocalMain.style.height=this.height+"px",this.divLocalMain.style.margin="10px",this.divLocalMain.style.padding="10px",this.host.append(t);const s=document.createElement("div");if(!s)return;this.divCanvas=s,this.divLocalMain.append(s);const i=document.createElement("canvas");if(i){this.canvas=i,this.divCanvas.append(this.canvas),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.backgroundColor="#aaaaaa";const t=this.canvas.getContext("2d");t&&(this.ctx=t,this.InitUI(),this.Init())}}InitUI(){const t=document.createElement("div");if(!t)return;this.divUI=t,this.divLocalMain.append(t),this.divUI.style.marginLeft="10px",this.divUI.style.width="100%";const s=document.createElement("button");s.textContent="reset",s.onclick=()=>{this.graphSystem.InitGraph()},this.divUI.append(s);let i=document.createElement("p");if(!i)return;this.divUI.append(i),i.textContent="length";let e=document.createElement("input");e.oninput=()=>{const t=+e.value;this.graphSystem.graph.UpdateLength(t)},e.type="range",e.min="10",e.max="100.0",e.value="10",this.divUI.append(e),i=document.createElement("p"),i&&(this.divUI.append(i),i.innerHTML="1. clikc on canvas to populate a node! <br> ",i.innerHTML+="2. drag a node to move! <br> ")}Init(){this.ctx.translate(.5*this.ctx.canvas.width,.5*this.ctx.canvas.height),this.ctx.scale(1,1),this.EventBind(),this.Loop()}EventBind(){this.canvas.onclick=t=>{this.prevent=!1,this.timer=setTimeout((()=>{if(!this.prevent){if(!this.click)return;this.MouseClick(t)}this.prevent=!1}),this.delay)},this.canvas.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClick(t)},this.canvas.addEventListener("wheel",(t=>this.MouseWheel(t,t.deltaY))),this.canvas.onmousedown=t=>{this.click=!0,this.pressed=!0,this.MouseDown(t)},this.canvas.onmouseup=t=>{this.pressed=!1,this.MouseUp(t)},this.canvas.onmousemove=t=>{this.pressed&&(this.click=!1,this.MouseDrag(t)),this.MouseMove(t)},window.onresize=t=>this.Resize(t)}Resize(t){}Loop(){requestAnimationFrame((()=>{this.Loop()})),this.ctx.clearRect(-10,-10,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.fillStyle="#dddddd",this.ctx.beginPath(),this.ctx.rect(-500,-500,1e3,1e3),this.ctx.closePath(),this.ctx.fill(),this.Render(this.ctx)}Render(t){}MouseClick(t){}MouseDoubleClick(t){}MouseDown(t){}MouseUp(t){}MouseMove(t){}MouseDrag(t){}MouseWheel(t,s){}}class y{constructor(t){this.CanvasCore=void 0,this.graph=void 0,this.t=.9,this.id=void 0,this.m=new e.h9(0,0,0),this.id=t,this.CanvasCore=new f(this),this.Init(),this.InitGraph()}Init(){this.CanvasCore.Render=t=>this.Render(t),this.CanvasCore.MouseDown=t=>this.MouseDown(t),this.CanvasCore.MouseClick=t=>this.MouseClick(t),this.CanvasCore.MouseDoubleClick=t=>this.MouseDoubleClick(t),this.CanvasCore.MouseUp=t=>this.MouseUp(t),this.CanvasCore.MouseMove=t=>this.MouseMove(t),this.CanvasCore.MouseDrag=t=>this.MouseDrag(t)}InitGraph(){this.graph=new g}Render(t){this.graph.Render(t),t.fillStyle="rgba(255, 0, 0, 0.9)",t.beginPath(),t.arc(this.m.x,this.m.y,2.5,0,2*Math.PI),t.closePath(),t.fill()}Grid(t){for(let s=-10;s<10;++s)for(let i=-10;i<10;++i)t.beginPath(),t.fillStyle="rgba(255, 0, 0, 0.9)",t.arc(s,i,.05,0,2*Math.PI),t.closePath(),t.fill()}mouseRemap(t){this.m.x=t.offsetX-.5*this.CanvasCore.canvas.width,this.m.y=t.offsetY-.5*this.CanvasCore.canvas.height}MouseDown(t){this.mouseRemap(t),this.graph.MouseDown(this.m.x,this.m.y)}MouseUp(t){this.mouseRemap(t)}MouseMove(t){this.mouseRemap(t),this.graph.MouseMove(this.m.x,this.m.y)}MouseDrag(t){this.mouseRemap(t),this.graph.MouseDrag(this.m.x,this.m.y)}MouseClick(t){this.mouseRemap(t),this.graph.MouseLeftClick(this.m.x,this.m.y)}MouseDoubleClick(t){this.mouseRemap(t),console.log("d click")}}class M{constructor(t){new d(t),new u(t),new y(t)}}class x{static Init(t){new x(t).Dummy()}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SandBox";this.canvasCore=void 0,this.implementation=void 0,this.host=void 0;const s=document.getElementById(t);s&&(this.host=s,this.host.style.overflow="auto"),this.implementation=new M(t)}Dummy(){}}class C{constructor(t){this.divHost=void 0,this.divHost=document.getElementById(t);const s=document.createElement("div");s.id="ngl3d",s.style.width="100%",s.style.height="100%",this.divHost.appendChild(s),x.Init(s.id)}destroy(){try{for(;void 0!==this.divHost&&void 0!==this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}catch(t){console.debug(t)}}}}}]);
//# sourceMappingURL=85307.669a6332.chunk.js.map