"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[86521],{86521:(t,e,i)=>{i.r(e),i.d(e,{Solution:()=>o});var s=i(17760),n=i(55913);class o extends n.TF{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main"),this.pointLight=void 0,this.raycaster=new s.iMs,this.mouse=new s.FM8,this.m=new s.Pa4,this.sphere=void 0,this.obj=[];const t=new s.Mig(5592405);this.scene.add(t),this.pointLight=new s.cek(16777215,100),this.pointLight.position.x=10,this.pointLight.castShadow=!0,this.scene.add(this.pointLight);const e=new s.y8_(5);e.position.y=.001,this.scene.add(e),this.scene.add(new s.VLJ(10,10)),this.initPost(),this.start()}initPost(){const t=new s.vBJ({color:65280,emissive:65280,emissiveIntensity:1}),e=new s.xo$(.05,50,50),i=new s.Kj0(e,t);i.translateX(1),this.sphere=i,this.scene.add(i);let n=new s.xo$(1,50,50),o=new s.Kj0(n,new s.xoR);o.translateX(-1),this.add(o),n=new s.xo$(1,50,50),o=new s.Kj0(n,new s.xoR),o.translateX(1),this.add(o)}add(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.scene.add(t),e&&this.obj.push(t)}mouseMove(t){this.picking(t)}picking(t){this.mouse.x=t.offsetX/this.renderer.domElement.clientWidth*2-1,this.mouse.y=-t.offsetY/this.renderer.domElement.clientHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.obj);if(e.length>0)return this.m.set(e[0].point.x,e[0].point.y,e[0].point.z),e[0].object!==this.sphere&&this.sphere.position.set(e[0].point.x,e[0].point.y,e[0].point.z),e}mouseClick(t){this.picking(t)}update(t){const e=new s.yGw;e.makeRotationY(.011*Math.PI),this.pointLight.position.applyMatrix4(e)}}}}]);
//# sourceMappingURL=86521.4d16510d.chunk.js.map