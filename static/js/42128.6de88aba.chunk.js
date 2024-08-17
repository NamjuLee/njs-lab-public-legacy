"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[42128],{42128:(t,e,i)=>{i.r(e),i.d(e,{LandBox:()=>w,Solution:()=>L});class s{constructor(){}}class h{constructor(t){this.app=void 0,this.app=t}}var o=i(17760),r=i(98925),a=i(458);let n;!function(t){t.PERSPECTIVE="PERSPECTIVE",t.ORTHOGRAPHIC="ORTHOGRAPHIC",t.STEREO="STEREO"}(n||(n={}));class c{constructor(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.PERSPECTIVE;this.canvas=void 0,this.cameraP=void 0,this.cameraO=void 0,this.controls=void 0,this.initX=0,this.initY=0,this.prevX=0,this.prevY=0,this.yRotRate=void 0,this.xRotRate=void 0,this.xPanRate=void 0,this.yPanRate=void 0,this.zPanRate=void 0,this.rotateRate=150,this.panRate=50,this.zoomRate=200,this.zoomFactor=1,this.frustumSize=.001,this.type=void 0,this.cameraShift=0,this.width=void 0,this.height=void 0,this.ableToMove=!0,this.stereoCamera=void 0,this.canvas=t,this.type=s,this.width=e,this.height=i,this.type===n.PERSPECTIVE?this.GetPerspective(0,10,50):this.type===n.ORTHOGRAPHIC?this.GetOrthographic():this.type===n.STEREO&&this.GetStereo(),this.stereoCamera=new o.u37}GetStereo(){}set aspect(t){this.type===n.PERSPECTIVE?this.cameraP.aspect=t:(this.type,n.ORTHOGRAPHIC)}get aspect(){return this.width/this.height}get camera(){return this.type===n.PERSPECTIVE?this.cameraP:this.type===n.ORTHOGRAPHIC?this.cameraO:this.cameraP}GetPerspective(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;this.cameraP=new o.cPb(45,this.width/this.height,.01,1e4),this.cameraP.position.set(t,e,i),this.InitOrbitController()}GetOrthographic(){this.cameraO=new o.iKG(this.frustumSize*this.aspect/-2,this.frustumSize*this.aspect/2,this.frustumSize/2,this.frustumSize/-2,.01,5e4),this.cameraO.position.set(0,1,0),this.InitOrbitController()}InitOrbitController(){this.type===n.PERSPECTIVE?this.controls=new r.OrbitControls(this.cameraP,this.canvas.renderer.domElement):this.type===n.ORTHOGRAPHIC&&(this.controls=new r.OrbitControls(this.cameraO,this.canvas.renderer.domElement)),this.controls.minDistance=.01,this.controls.maxDistance=500,this.controls.enablePan=!0,this.controls.enableZoom=!0,this.yRotRate=this.rotateRate/this.width*Math.PI/90,this.xRotRate=this.rotateRate/this.height*Math.PI/180,this.xPanRate=this.panRate/this.width*this.zoomFactor,this.yPanRate=this.panRate/this.height*this.zoomFactor,this.zPanRate=this.zoomRate/this.height}EnableDamping(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.35;this.controls.enableDamping=t,this.controls.dampingFactor=e}MouseDown(t,e){this.initX=this.prevX=t,this.initY=this.prevY=e}MouseMove(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!this.ableToMove)return;const s=t-this.prevX,h=e-this.prevY;i?(this.controls.panLeft(s*this.xPanRate,this.cameraP.matrix),this.controls.panUp(h*this.yPanRate,this.cameraP.matrix)):(this.controls.rotateLeft(s*this.xRotRate),this.controls.rotateUp(h*this.yRotRate)),this.prevX=t,this.prevY=e}MouseWheel(t){this.controls.enableZoom=!0,t*=.1;const e=100*this.cameraP.position.length();this.zoomFactor=e,t>0?(this.cameraP.position.x*=.9,this.cameraP.position.y*=.9,this.cameraP.position.z*=.9):(this.cameraP.position.x*=1.1,this.cameraP.position.y*=1.1,this.cameraP.position.z*=1.1)}ShiftCamera(){this.cameraShift++,2===this.cameraShift&&(this.cameraShift=0),0===this.cameraShift?this.GetPerspective():1===this.cameraShift&&this.GetOrthographic()}MouseEventController(t){t.CLICK_TYPE===a.uh.DOWN&&this.MouseDown(t.x,t.y),t.CLICK_TYPE===a.uh.DRAG&&this.MouseMove(t.x,t.y,t.pressedShift),t.CLICK_TYPE===a.uh.WHEEL&&this.MouseWheel(t.wheel)}}class p{constructor(t,e){this.hostDiv=void 0,this.camera=void 0,this.scene=void 0,this.renderer=void 0,this.canvasWrapper=void 0,this.vrBtn=void 0,this.bg=0,this.isActive=!0,this.canvasWrapper=t,this.hostDiv=e,this.Init()}Init(){const t=this.hostDiv.clientWidth,e=this.hostDiv.clientHeight;this.renderer=new o.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(t/e),this.camera=new c(this,t,e),this.scene=new o.xsS,this.renderer.domElement.id="dynamic-spring",this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.pointerEvents="none",this.renderer.setSize(t,e),this.hostDiv.appendChild(this.renderer.domElement),this.RenderLoop(this)}RenderLoop(t){this.isActive&&(requestAnimationFrame((()=>{this.RenderLoop(this)})),this.UpdateBinding(),this.camera.controls.update(),this.renderer.render(this.scene,this.camera.camera))}UpdateBinding(){}ResizeCanvas(t,e){this.camera.aspect=t/e,this.camera.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}ResizeEffect(t,e){}Remove(){for(;this.scene.children.length;)this.scene.remove(this.scene.children[0])}}class l{constructor(t){this.graphicsCoreWrapper=void 0,this.canvasThree=void 0,this.graphicsCoreWrapper=t,this.canvasThree=new p(this,this.graphicsCoreWrapper.app.divHost)}}class d{constructor(t){this.app=void 0,this.canvasWrapper=void 0,this.app=t,this.canvasWrapper=new l(this)}Resize(t,e){this.canvasWrapper.canvasThree.ResizeCanvas(t,e)}Dispose(){this.canvasWrapper.canvasThree.isActive=!1}}class u{constructor(t){this.scene=void 0,this.scene=t}MouseEventController(t){this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.camera.MouseEventController(t),t.CLICK_TYPE!==a.uh.LEFT?t.CLICK_TYPE!==a.uh.MIDDLE?t.CLICK_TYPE!==a.uh.DOWN_RIGHT?t.CLICK_TYPE!==a.uh.DOUBLE?t.CLICK_TYPE!==a.uh.MOVE?t.CLICK_TYPE!==a.uh.DRAG?t.CLICK_TYPE!==a.uh.DOWN?t.CLICK_TYPE!==a.uh.UP||this.MouseUpPre(t):this.MouseDownPre(t):this.MouseDragPre(t):this.MouseMovePre(t):this.MouseDoubleClickPre(t):this.MouseRightClickPre(t):this.MouseMiddleClickPre(t):this.MouseLeftClickPre(t)}MouseDown(t){}MouseDownPre(t){this.scene.MouseDown(t.x,t.y),this.MouseDown(t)}MouseLeftClick(t){}MouseLeftClickPre(t){this.MouseLeftClick(t)}MouseMiddleClick(t){}MouseMiddleClickPre(t){this.MouseMiddleClick(t)}MouseRightClick(t){}MouseRightClickPre(t){this.MouseRightClick(t)}MouseUp(t){}MouseUpPre(t){this.scene.MouseUp(t.x,t.y),this.MouseUp(t)}MouseDoubleClick(t){}MouseDoubleClickPre(t){this.MouseDoubleClick(t)}MouseMove(t){}MouseMovePre(t){this.scene.MouseMove(t.x,t.y),this.MouseMove(t)}MouseDrag(t){}MouseDragPre(t){this.scene.MouseDrag(t.x,t.y),this.MouseDrag(t)}}class v{constructor(t){this.scene=void 0,this.listMesh=[],this.raycaster=new o.iMs,this.m=new o.FM8(0,0),this.point=void 0,this.scene=t,this.raycaster.params.Points={threshold:.1}}Raycast(t,e,i){this.m.x=t/this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.renderer.domElement.clientWidth*2-1,this.m.y=-e/this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.renderer.domElement.clientHeight*2+1,this.raycaster.setFromCamera(this.m,this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.camera.camera);const s=this.raycaster.intersectObjects(i);if(s.length>0){const t=s[0];console.log(t.point)}}RaycastPoint(t,e,i){this.raycaster.params.Points={threshold:5},this.m.x=t/this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.renderer.domElement.clientWidth*2-1,this.m.y=-e/this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.renderer.domElement.clientHeight*2+1,this.raycaster.setFromCamera(this.m,this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.camera.camera);const s=this.raycaster.intersectObjects(i);if(s.length>0){const t=s[0];return[t.point.x,t.point.y,t.point.z]}return null}}class m{constructor(t){this.sceneWrapper=void 0,this.hemiLight=void 0,this.dirLight=void 0,this.sceneWrapper=t,this.Init()}Init(){this.hemiLight=new o.vmT(16777215,16777215,.6),this.hemiLight.color.setHSL(.6,1,.6),this.hemiLight.groundColor.setHSL(.095,1,.75),this.hemiLight.position.set(0,50,0),this.sceneWrapper.scene.add(this.hemiLight),this.dirLight=new o.Ox3(16777215,1),this.dirLight.color.setHSL(.1,1,.95),this.dirLight.position.set(-1,1.75,1),this.dirLight.position.multiplyScalar(30),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=4096,this.dirLight.shadow.mapSize.height=4096;this.dirLight.shadow.camera.left=-50,this.dirLight.shadow.camera.right=50,this.dirLight.shadow.camera.top=50,this.dirLight.shadow.camera.bottom=-50,this.dirLight.shadow.bias=-1e-4,this.dirLight.shadow.camera.near=.001,this.dirLight.shadow.camera.far=350,this.sceneWrapper.scene.add(this.dirLight)}Dispose(){this.dirLight.visible=!1,this.hemiLight.visible=!1,this.sceneWrapper.scene.remove(this.dirLight),this.sceneWrapper.scene.remove(this.hemiLight)}}class C{constructor(t){this.scene=void 0,this.damping=.96,this.gravity=-.032,this.timeStep=.316,this.groundZ=-9.26,this._capture=void 0,this.m=new a.h9(0,0,0),this.scene=t;var e=new o.VLJ(10,10);this.scene.add(e),this.Init()}Init(){const t=new Image;t.src="https://upload.wikimedia.org/wikipedia/commons/5/57/Heightmap.png",t.crossOrigin="Anonymous",t.onload=()=>{console.log("LandboxByImage")}}get capture(){return this._capture}set capture(t){}GetPointForRaycast(){}Update(){}MouseMove(t,e,i){this.capture&&console.log(this.capture)}MouseDrag(t,e){this.capture}MouseDown(t,e,i){}MouseUp(){this.capture=void 0}Dispose(){}}class g{constructor(t){this.app=void 0,this.activeCommandController=void 0,this.geometryCommon=void 0,this.lightingController=void 0,this.scene=void 0,this.definition=void 0,this.app=t,this.activeCommandController=new u(this),this.scene=this.app.graphicsCoreWrapper.canvasWrapper.canvasThree.scene,this.app.graphicsCoreWrapper.canvasWrapper.canvasThree.UpdateBinding=()=>{this.Update()},this.lightingController=new m(this),this.geometryCommon=new v(this),this.Init()}Init(){this.definition=new C(this.scene)}Update(){this.definition.Update()}MouseMove(t,e){}MouseDown(t,e){}MouseUp(t,e){this.definition.MouseUp(),this.app.graphicsCoreWrapper.canvasWrapper.canvasThree.camera.ableToMove=!0}MouseDrag(t,e){}Dispose(){this.definition.Dispose()}}class E{constructor(t){this.app=void 0,this.x=-1,this.y=-1,this.z=-1,this.preX=-1,this.preY=-1,this.preZ=-1,this.yGLPicking=void 0,this.CLICK_TYPE=a.uh.MOVE,this.isDown=!1,this.isDoubleClick=!1,this.isMove=!1,this.pressedShift=!1,this.pressedAlt=!1,this.pressedCtrl=!1,this.lat=-1,this.long=-1,this.wheel=0,this.preWheel=0,this.isActive=!0,this.native=void 0,null!==t&&void 0!==t&&(this.app=t)}DeepCopy(){let t=new E(this.app);return t.x=this.x,t.y=this.y,t.z=this.z,t.preX=this.preX,t.preY=this.preY,t.preZ=this.preZ,t.pressedAlt=this.pressedAlt,t.pressedShift=this.pressedShift,t.pressedCtrl=this.pressedCtrl,t.isDoubleClick=this.isDoubleClick,t.isDown=this.isDown,t.isMove=this.isMove,t.lat=this.lat,t.long=this.long,t.wheel=this.wheel,t.preWheel=this.preWheel,t.yGLPicking=this.yGLPicking,t.CLICK_TYPE=this.CLICK_TYPE,t.native=this.native,t}}class P{constructor(t){this.mouseInteractionUI=void 0,this.mouseEventDataPre=new E,this.app=void 0,this.isEnable=!0,this.clickCount=0,this.click=!1,this.prevent=!1,this.delay=250,this.timer=void 0,this.down=!1,this.e=void 0,this._stopPropagation=!1,this.app=t}InitNativeMouseEvent(t){t.onclick=t=>{this.prevent=!1,this.timer=setTimeout((()=>{this.prevent||(this.MouseClick(t),t.stopPropagation()),this.prevent=!1}),this.delay)},t.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClick(t)},t.onmousedown=t=>{this.MouseDown(t),t.stopPropagation()},t.onmouseup=t=>{this.MouseUp(t),t.stopPropagation()},t.onmousemove=t=>{this.MouseMove(t),t.stopPropagation()},t.addEventListener("wheel",(t=>{this.MouseWheel(t,t.deltaY),t.stopPropagation()}))}MouseDown(t){this.click=!0,this.down=!0;let e=this.CommonEventBuilder(t);e.CLICK_TYPE=a.uh.DOWN,e.isDown=!0,this.MouseEvenEmitting(e)}MouseClick(t){if(!this.click)return;let e=this.CommonEventBuilder(t);0===t.button?e.CLICK_TYPE=a.uh.LEFT:1===t.button?e.CLICK_TYPE=a.uh.MIDDLE:2===t.button&&(e.CLICK_TYPE=a.uh.RIGHT),this.MouseEvenEmitting(e)}MouseDoubleClick(t){let e=this.CommonEventBuilder(t);e.CLICK_TYPE=a.uh.DOUBLE,this.MouseEvenEmitting(e)}MouseDrag(t){this.click=!1,this.prevent=!0;let e=this.CommonEventBuilder(t);e.CLICK_TYPE=a.uh.DRAG,e.isDown=!0,1===t.buttons?e.CLICK_TYPE=a.uh.DRAG:4===t.buttons?e.CLICK_TYPE=a.uh.DRAG_MIDDLE:2===t.buttons&&(e.CLICK_TYPE=a.uh.DRAG_RIGHT),this.MouseEvenEmitting(e)}MouseMove(t){if(this.down)return void this.MouseDrag(t);let e=this.CommonEventBuilder(t);e.CLICK_TYPE=a.uh.MOVE,e.isDown=!0,this.prevent=!0,this.MouseEvenEmitting(e)}MouseUp(t){this.down=!1,this.click=!0;let e=this.CommonEventBuilder(t);e.CLICK_TYPE=a.uh.UP,e.isDown=!1,this.MouseEvenEmitting(e)}MouseWheel(t,e){let i=this.CommonEventBuilder(t);i.wheel=e,i.CLICK_TYPE=a.uh.WHEEL,this.MouseEvenEmitting(i)}CommonEventBuilder(t){let e=new E(this.app);return e.preX=this.mouseEventDataPre.x,e.preY=this.mouseEventDataPre.y,e.pressedShift=t.shiftKey,e.pressedAlt=t.altKey,e.pressedCtrl=t.ctrlKey,e.x=t.offsetX,e.y=t.offsetY,e.preWheel=this.mouseEventDataPre.wheel,e.wheel=0,e.native=t,this.mouseEventDataPre=e,this.e=e,e}get stopPropagation(){return this._stopPropagation}set stopPropagation(t){t?this._stopPropagation=t:setTimeout((()=>{this._stopPropagation=t}),500)}MouseEvenEmitting(t){this.app.MouseEventController(t)}}class M{constructor(t){this.app=void 0,this.mouseInteraction=void 0,this.app=t,this.mouseInteraction=new P(this.app),this.mouseInteraction.InitNativeMouseEvent(this.app.divHost)}}class w{static Init(t){new w(t)}constructor(t){this.divHost=void 0,this.asset=void 0,this.viewWrapper=void 0,this.graphicsCoreWrapper=void 0,this.sceneWrapper=void 0,this.io=void 0;const e=document.getElementById(t);e&&(this.divHost=e),this.asset=new s,this.viewWrapper=new h(this),this.graphicsCoreWrapper=new d(this),this.sceneWrapper=new g(this),this.io=new M(this)}MouseEventController(t){this.sceneWrapper.activeCommandController.MouseEventController(t)}Resize(t,e){this.graphicsCoreWrapper.Resize(t,e)}Dispose(){this.graphicsCoreWrapper.Dispose(),this.sceneWrapper.Dispose()}Dummy(){}}class L{constructor(t){this.divHost=void 0,this.divHost=document.getElementById(t),w.Init(t)}destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}}}}]);
//# sourceMappingURL=42128.6de88aba.chunk.js.map