"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39596],{39596:function(e,t,s){s.d(t,{Eh:function(){return l},Kw:function(){return m},u4:function(){return c},P:function(){return a},Vv:function(){return p},ZV:function(){return v},Du:function(){return u}});var i=s(97776),n=s(78252);class o{initCanvas(){this.scene=new i.xsS,this.setBG(null),this.scene.castShadow=!0,i.Tme.DEFAULT_UP.set(0,0,1),this.renderer=new i.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(this.hostDiv.clientWidth/this.hostDiv.clientHeight),this.renderer.domElement.id="Three",this.renderer.domElement.style.position="absolute",this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight),this.hostDiv.appendChild(this.renderer.domElement),this.camera=new i.cPb(30,this.hostDiv.clientWidth/this.hostDiv.clientHeight,1,5e3),this.controls=new n.OrbitControls(this.camera,this.renderer.domElement),this.camera.position.set(20,-20,20),this.controls.update(),this.canvas=this.renderer.domElement,this.init()}setBG(e){null!==e?this.scene.background=new i.Ilk(e):this.scene.background=null}init(){this.eventBind()}eventBind(){this.renderer.domElement.onmousedown=e=>this.mouseDownPre(e),this.renderer.domElement.onmouseup=e=>this.mouseUpPre(e),this.renderer.domElement.onmousemove=e=>this.mouseMovePre(e),this.renderer.domElement.addEventListener("click",e=>this.mouseClickPre(e)),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){this.camera.aspect=this.hostDiv.clientWidth/this.hostDiv.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight)}start(){this.loop()}mouseDownPre(e){}mouseUpPre(e){}mouseClickPre(e){}mouseDClickPre(e){}mouseMovePre(e){}mouseDragPre(e){}update(e){}destroy(){for(window.removeEventListener("resize",()=>this.onWindowResize()),cancelAnimationFrame(this.requestFrame),this.requestFrame=void 0;this.hostDiv.lastChild;)this.hostDiv.removeChild(this.hostDiv.lastChild)}constructor(e){this.t=0,this.loop=()=>{this.requestFrame=requestAnimationFrame(this.loop),this.controls.update(),this.update(this.scene),this.renderer.render(this.scene,this.camera),this.t+=.01},this.hostDiv=document.getElementById(e),this.initCanvas()}}class r extends o{initPost(){let e=new i.Mig(5592405);this.scene.add(e),this.pointLight=new i.cek(16777215,100),this.pointLight.position.x=10,this.pointLight.castShadow=!0,this.scene.add(this.pointLight),this.axis=new i.y8_(5),this.axis.position.z=.001,this.scene.add(this.axis),this.grid=new i.VLJ(50,100,4473924,3289650),this.grid.rotation.x=-Math.PI/2,this.scene.add(this.grid);let t=new i._12(50,50),s=new i.vBJ({color:65793,side:i.ehD,transparent:!0,opacity:0});this.ground=new i.Kj0(t,s),this.scene.add(this.ground);let n=new i.vBJ({color:65280}),o=new i.xo$(.05,50,50),r=new i.Kj0(o,n);r.translateX(1),this.sphere=r,this.scene.add(r)}reset(){}set showGrid(e){this.grid.visible=e}set showAxis(e){this.axis.visible=e}picking(e,t){this.mouse.x=e.offsetX/this.renderer.domElement.clientWidth*2-1,this.mouse.y=-(e.offsetY/this.renderer.domElement.clientHeight*2)+1,this.rayCaster.setFromCamera(this.mouse,this.camera);let s=this.rayCaster.intersectObjects([...t]);if(s.length>0)return this.m.set(s[0].point.x,s[0].point.y,s[0].point.z),s[0].object!==this.sphere&&this.sphere.position.set(s[0].point.x,s[0].point.y,s[0].point.z),{intersects:s,ground:void 0};let i=this.rayCaster.intersectObjects([this.ground]);if(i.length>0)return this.m.set(i[0].point.x,i[0].point.y,i[0].point.z),this.sphere.position.set(i[0].point.x,i[0].point.y,i[0].point.z),{intersects:void 0,ground:i}}update(e){this.updatePost(e);let t=new i.yGw;t.makeRotationY(.011*Math.PI),this.pointLight.position.applyMatrix4(t)}mouseClickPre(e){let t=this.picking(e,this.sandboxVector.scene.mesh);t.intersects&&t.intersects[0]&&t.intersects[0].object.userData.onClick(t.intersects[0])}constructor(e,t="main",s="#00000000"){super(t),this.rayCaster=new i.iMs,this.mouse=new i.FM8,this.m=new i.Pa4,this.updatePost=e=>{},this.onMouseClick=e=>{},this.onMouseMove=e=>{},this.mouseMovePre=e=>{let t=this.picking(e,this.sandboxVector.scene.mesh);this.onMouseMove({e,intersect:t})},i.Tme.DEFAULT_UP.set(0,1,0),this.sandboxVector=e,this.initPost(),this.start()}}class h{reset(){for(let e=this.mesh.length-1;e>=0;e--){let t=this.mesh[e];this.scene.remove(t)}}add(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];this.scene.add(e),t&&this.mesh.push(e)}remove(e){this.scene.remove(e),this.mesh.splice(this.mesh.indexOf(e),1)}constructor(e){this.mesh=[],this.sandboxVector=e,this.scene=e.renderer.scene}}class d{pick(){}constructor(e){this.app=e}}class a{constructor(e,t,s){this.x=0,this.y=0,this.z=0,this.x=e,this.y=t,this.z=s}}class c{destroy(){m.app.scene.remove(this.mesh)}onClick(e){this.update()}update(){this.mesh.position.set(this.vec.x,this.vec.y,this.vec.z)}init(){this.material=new i.vBJ({color:16777215}),this.geometry=new i.xo$(this.radius,20,20),this.mesh=new i.Kj0(this.geometry,this.material),this.mesh.position.set(this.vec.x,this.vec.y,this.vec.z),this.mesh.userData=this,m.app.scene.add(this.mesh)}constructor(e,t=.1){this.radius=.5,this.vec=e,this.radius=t,this.init()}}class l{onClick(e){console.log(e)}update(){this.meshArrow.position.x=this.vec.x,this.meshArrow.position.y=this.vec.y,this.meshArrow.position.z=this.vec.z;let e=new i.Pa4(this.dir.x,this.dir.y,this.dir.z),t=e.length();this.meshArrow.setLength(t,.1,.1),this.meshArrow.setDirection(e.normalize())}init(){let e=new i.Pa4(this.dir.x,this.dir.y,this.dir.z),t=e.length();this.meshArrow=new i.tGC(e.normalize(),new i.Pa4(this.vec.x,this.vec.y,this.vec.z),t,"#f00"),this.meshArrow.userData=this,m.app.scene.add(this.meshArrow)}constructor(e,t){this.vec=e,this.dir=t,this.init()}}class m{destroy(){this.renderer.destroy()}initRenderer(){this.renderer=new r(this,this.id,this.themeColor),this.renderer.updatePost=e=>this.updateBinding(),this.renderer.onMouseMove=e=>this.onMouseMove(e),this.renderer.onMouseClick=e=>this.onMouseClick(e),this.scene=new h(this),this.common=new d(this)}set showAxis(e){this.renderer.showAxis=e}set showGrid(e){this.renderer.showGrid=e}reset(){this.renderer.reset(),this.scene.reset(),this.start()}start(){}updateBinding(){}onMouseMove(e){}onMouseClick(e){}constructor(e,t="#00000000"){this.themeColor="#222",m.app=this,this.id=e,this.themeColor=t,this.initRenderer()}}let u=(e,t,s)=>{let i=document.createElement("div");i.style.display="flex";let n=document.createElement("input");n.type="range",n.min="".concat(t),n.max="".concat(s);let o=document.createElement("div");return o.textContent=e,o.style.color="#aaa",i.appendChild(n),i.appendChild(o),{div:i,slider:n,text:o}},p=e=>{let t=document.createElement("div");t.style.display="flex";let s=document.createElement("input");s.type="checkbox",s.defaultChecked=!1;let i=document.createElement("div");return i.textContent=e,i.style.color="#aaa",t.appendChild(s),t.appendChild(i),{div:t,checkBox:s}},v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["Link 1","Link 2","Link 3"],t=arguments.length>1?arguments[1]:void 0,s=document.createElement("div");s.classList.add("dropdown");let i=document.createElement("button");i.classList.add("dropdown-toggle"),i.textContent="Dropdown Menu",s.appendChild(i);let n=document.createElement("div");return n.classList.add("dropdown-menu"),s.appendChild(n),e.forEach(e=>{let s=document.createElement("a");s.href="#",s.textContent=e,s.addEventListener("click",s=>{s.preventDefault(),i.textContent="Selected: ".concat(e),n.style.display="none",t(e)}),n.appendChild(s)}),i.addEventListener("click",()=>{n.style.display="block"===n.style.display?"none":"block"}),window.addEventListener("click",e=>{e.target.matches(".dropdown-toggle")||"block"!==n.style.display||(n.style.display="none")}),document.body.style.fontFamily="Arial, sans-serif",s.style.position="relative",s.style.display="inline-block",i.style.padding="10px 20px",i.style.border="none",i.style.cursor="pointer",i.addEventListener("mouseover",()=>{i.style.backgroundColor="#eee"}),i.addEventListener("mouseout",()=>{i.style.backgroundColor="#ccc"}),n.style.display="none",n.style.position="absolute",n.style.backgroundColor="#ccc",n.style.boxShadow="0px 8px 16px 0px rgba(0,0,0,0.2)",n.style.zIndex="1",n.querySelectorAll("a").forEach(e=>{e.style.color="black",e.style.padding="12px 16px",e.style.textDecoration="none",e.style.display="block",e.addEventListener("mouseover",()=>{e.style.backgroundColor="#f1f1f1"}),e.addEventListener("mouseout",()=>{e.style.backgroundColor="#ccc"})}),s}}}]);