"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[18650],{18650:(t,s,i)=>{i.r(s),i.d(s,{Solution:()=>n});var e=i(17760),h=i(55913);class n extends h.TF{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main"),this.pointLight=void 0,this.pointer=new e.FM8,this.raycaster=new e.iMs,this.sphere=void 0,this.mesh=void 0,this.vex=[];const t=this.scene;this.raycaster=new e.iMs,this.raycaster.params.Points.threshold=.8,this.raycaster.far=1e3;const s=new e.xo$(.1,32,32),i=new e.vBJ({color:16777215}),h=new e.Kj0(s,i);this.sphere=h,this.scene.add(h),this.camera.position.set(0,50,50);const n=new e.Mig(13421772,.25);this.scene.add(n),this.pointLight=new e.cek(16777215,.75),this.pointLight.position.x=10,this.pointLight.position.y=10,this.pointLight.castShadow=!0,this.scene.add(this.pointLight);const o=[];for(let p=0;p<2;p++){const t=p,s=0,i=0;o.push(t,s,i),this.vex.push(new e.Pa4(t,s,i))}const a=new e.u9r;a.setAttribute("position",new e.a$l(o,3));const r=new e.UY4({color:65520}),c=new e.woe(a,r);t.add(c),this.mesh=c,this.start()}mouseMove(t){this.pointer.x=t.offsetX/this.hostDiv.clientWidth*2-1,this.pointer.y=-t.offsetY/this.hostDiv.clientHeight*2+1}update(t){let s=new e.yGw;s.makeRotationY(.011*Math.PI),this.pointLight.position.applyMatrix4(s),this.raycaster.setFromCamera(this.pointer,this.camera);const i=this.raycaster.intersectObjects([this.mesh],!1),h=i.length>0?i[0]:null;null!==h&&this.sphere.position.set(h.point.x,h.point.y,h.point.z)}}}}]);
//# sourceMappingURL=18650.69d65c09.chunk.js.map