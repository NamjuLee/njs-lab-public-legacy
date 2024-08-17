"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[72711],{72711:(t,s,i)=>{i.r(s),i.d(s,{Solution:()=>a});var e=i(17760),h=i(55913),o=i(458);class n{constructor(t,s){this.width=void 0,this.height=void 0,this.nodes=[],this.edges=[],this.dt=0,this.mouse=new o.h9(0,0),this.damping=.96,this.gravity=-.032,this.timeStep=.16,this.groundZ=-9.26,this.capture=void 0,this.Init(t,s)}Init(t,s){this.InitGridR(t,s),this.nodes[0].fixed=!0,this.nodes[9].fixed=!0,this.nodes[this.nodes.length-1].fixed=!0,this.nodes[this.nodes.length-1-9].fixed=!0}updateOptionA(t){this.damping=.1*t,console.log(this.damping,"damping")}updateOptionB(t){this.timeStep=.05*t,console.log(this.timeStep,"timeStep")}updateOptionC(t){}InitGridR(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;const h=t/i+1,n=s/e+1,r=this.nodes.length;for(let d=0;d<e;++d)for(let e=0;e<i;++e){let i=0+h*e-.5*t,r=0+n*d-.5*s;this.AddNode(new o.h9(i,0,r),o.h9.Zero(),1)}for(let o=0;o<e;++o)for(let t=0;t<i;++t){let s=o*i+t;0!==t&&this.AddEdge(this.nodes[r+s-1],this.nodes[r+s]),0!==o&&this.AddEdge(this.nodes[r+s-i],this.nodes[r+s])}}Clear(){this.nodes=[],this.edges=[]}AddNode(t,s,i){const e=new d(t,s,i);return this.nodes.push(e),e}AddEdge(t,s){const i=new r(t,s);return this.edges.push(i),i}MouseMove(t,s){this.mouse.x=t,this.mouse.y=s}MouseDClick(t,s){this.mouse.x=t,this.mouse.y=s;const i=this.FindNode(this.mouse);i&&(i.fixed=!i.fixed)}MouseDown(t,s){this.mouse.x=t,this.mouse.y=s,this.capture=this.FindNode(this.mouse),this.capture&&(this.capture.fixed=!0,this.capture.isCapture=!0),console.log("down",t,s,this.capture)}MouseLeftClick(t,s){console.log("click",t,s,this.capture)}MouseUp(t,s){this.mouse.x=t,this.mouse.y=s,this.capture&&(this.capture.isCapture=!1,this.capture=void 0),console.log("up",t,s)}MouseDrag(t,s){this.mouse.x=t,this.mouse.y=s,this.capture&&(this.capture.v.x=t,this.capture.v.y=s),console.log("drag",t,s)}Render(t){this.dt+=.1,this.Move(this.mouse.x,this.mouse.y,this.mouse.z,this.damping,0,this.timeStep,this.groundZ,1)}FindNode(t){for(let s of this.nodes)if(s.v.Distance(t)<s.m+3)return s}Move(t,s,i,e){let h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.01,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:-10,d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;const a=new o.h9(t,s,i);for(let c=0;c<d;++c){for(const t of this.nodes){const s=o.h9.Sub(a,t.v),i=s.Length();s.Unitize(),t.f=o.h9.Add(o.h9.Scale(s,.1*Math.exp(-.1*i*i)),o.h9.Scale(o.h9.YAxis(),h))}for(const t of this.edges)t.ApplySpringForce();for(const t of this.nodes)t.Move(n,e,r)}}}class r{constructor(t,s){this.n0=void 0,this.n1=void 0,this.targetLength=0,this.springConstant=.8,this.n0=t,this.n1=s,this.targetLength=1*this.n0.v.Distance(this.n1.v)}Render(t){t.strokeStyle="#ff0000",o.h9.Distance(this.n0.v,this.n1.v)<2*this.targetLength&&(t.strokeStyle="#0000ff"),t.beginPath(),t.moveTo(this.n0.v.x,this.n0.v.y),t.lineTo(this.n1.v.x,this.n1.v.y),t.closePath(),t.stroke()}ApplySpringForce(){let t=o.h9.Sub(this.n1.v,this.n0.v),s=t.Length();t.Unitize();const i=o.h9.Scale(t,(s-this.targetLength)*this.springConstant);this.n0.f=o.h9.Add(this.n0.f,i),this.n1.f=o.h9.Sub(this.n1.f,i)}}class d{constructor(t,s,i){this.nNodes=[],this.v=o.h9.Origin(),this.f=o.h9.Origin(),this.u=o.h9.Origin(),this.m=0,this.fixed=!1,this.isCapture=!1,this.v=new o.h9(t.x,t.y,t.z),this.u=new o.h9(s.x,s.y,s.z),this.m=i}Move(t,s){if(this.fixed||this.isCapture)return;this.u.Mult(s),this.u.Add(o.h9.Scale(this.f,t/this.m));const i=o.h9.Scale(this.u,t);this.v.x+=i.x,this.v.y+=i.y}Render(t,s){t.beginPath(),s.Distance(this.v)<this.m+3?(t.fillStyle="#000000",t.arc(this.v.x,this.v.y,this.m+6,0,2*Math.PI)):(t.fillStyle="#f90000",t.arc(this.v.x,this.v.y,this.m+3,0,2*Math.PI)),this.fixed&&(t.fillStyle="#000000",t.arc(this.v.x,this.v.y,this.m+7.5,0,2*Math.PI)),t.closePath(),t.fill()}}class a extends h.TF{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main"),this.pointLight=void 0,this.pointer=new e.FM8,this.raycaster=new e.iMs,this.sphere=void 0,this.mesh=void 0,this.graph=void 0,this.camera.position.set(0,40,48);const t=new e.Mig(13421772,.25);this.scene.add(t),this.pointLight=new e.cek(16777215,.75),this.pointLight.position.x=10,this.pointLight.castShadow=!0,this.scene.add(this.pointLight),this.raycaster=new e.iMs,this.raycaster.params.Points.threshold=.8,this.raycaster.far=1e3;const s=new e.xo$(.1,32,32),i=new e.vBJ({color:16777215}),h=new e.Kj0(s,i);this.sphere=h,this.scene.add(h),this.graph=new n(20,20);const o=[],r=[];for(let e=0;e<this.graph.nodes.length;++e){const t=this.graph.nodes[e].v.x,s=this.graph.nodes[e].v.y,i=this.graph.nodes[e].v.z;o.push(t,s,i),r.push(.5,.5,.5)}const d=new e.u9r;d.setAttribute("position",new e.a$l(o,3)),d.setAttribute("color",new e.a$l(r,3));const a=new e.UY4({vertexColors:!0,size:2}),c=new e.woe(d,a);d.computeBoundingSphere(),this.scene.add(c),this.mesh=c,this.start()}mouseMove(t){this.pointer.x=t.offsetX/this.hostDiv.clientWidth*2-1,this.pointer.y=-t.offsetY/this.hostDiv.clientHeight*2+1}mouseDown(t){this.pointer.x=t.offsetX/this.hostDiv.clientWidth*2-1,this.pointer.y=-t.offsetY/this.hostDiv.clientHeight*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const s=this.raycaster.intersectObjects([this.mesh],!1),i=s.length>0?s[0]:null;null!==i&&(this.sphere.position.set(i.point.x,i.point.y+1,i.point.z),this.graph.nodes[i.index].v.y+=5)}update(t){this.graph.Render();let s=this.mesh.geometry.attributes.position.count;for(let h=0;h<s;h++){this.mesh.geometry.attributes.position;let t=this.graph.nodes[h].v.x,s=this.graph.nodes[h].v.y,i=this.graph.nodes[h].v.z;this.mesh.geometry.attributes.position.setXYZ(h,t,s,i),this.mesh.geometry.attributes.color.setXYZ(h,.3,.3,.3)}this.raycaster.setFromCamera(this.pointer,this.camera);const i=this.raycaster.intersectObjects([this.mesh],!1),e=i.length>0?i[0]:null;null!==e&&this.sphere.position.set(e.point.x,e.point.y,e.point.z),this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0,this.mesh.geometry.computeVertexNormals()}}}}]);
//# sourceMappingURL=72711.2584bc18.chunk.js.map