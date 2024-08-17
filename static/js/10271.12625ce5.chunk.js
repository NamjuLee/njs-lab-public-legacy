"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[10271],{10271:(t,i,e)=>{e.r(i),e.d(i,{Demo200GridOptimizer:()=>A,Solution:()=>b});class s{constructor(){}}class h{constructor(t){this.app=void 0,this.app=t}}var r=e(17760),o=e(98925),n=(e(59008),e(458));let a;!function(t){t.PERSPECTIVE="PERSPECTIVE",t.ORTHOGRAPHIC="ORTHOGRAPHIC",t.STEREO="STEREO"}(a||(a={}));class c{constructor(t,i,e){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.PERSPECTIVE;this.canvas=void 0,this.cameraP=void 0,this.cameraO=void 0,this.controls=void 0,this.initX=0,this.initY=0,this.prevX=0,this.prevY=0,this.yRotRate=void 0,this.xRotRate=void 0,this.xPanRate=void 0,this.yPanRate=void 0,this.zPanRate=void 0,this.rotateRate=150,this.panRate=50,this.zoomRate=200,this.zoomFactor=1,this.frustumSize=.001,this.type=void 0,this.cameraShift=0,this.width=void 0,this.height=void 0,this.ableToMove=!0,this.stereoCamera=void 0,this.canvas=t,this.type=s,this.width=i,this.height=e,this.type===a.PERSPECTIVE?this.GetPerspective(0,10,50):this.type===a.ORTHOGRAPHIC?this.GetOrthographic():this.type===a.STEREO&&this.GetStereo(),this.stereoCamera=new r.u37}GetStereo(){}set aspect(t){this.type===a.PERSPECTIVE?this.cameraP.aspect=t:(this.type,a.ORTHOGRAPHIC)}get aspect(){return this.width/this.height}get camera(){return this.type===a.PERSPECTIVE?this.cameraP:this.type===a.ORTHOGRAPHIC?this.cameraO:this.cameraP}GetPerspective(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;this.cameraP=new r.cPb(45,this.width/this.height,.01,1e4),this.cameraP.position.set(t,i,e),this.InitOrbitController()}GetOrthographic(){this.cameraO=new r.iKG(this.frustumSize*this.aspect/-2,this.frustumSize*this.aspect/2,this.frustumSize/2,this.frustumSize/-2,.01,5e4),this.cameraO.position.set(0,1,0),this.InitOrbitController()}InitOrbitController(){this.type===a.PERSPECTIVE?this.controls=new o.OrbitControls(this.cameraP,this.canvas.renderer.domElement):this.type===a.ORTHOGRAPHIC&&(this.controls=new o.OrbitControls(this.cameraO,this.canvas.renderer.domElement)),this.controls.minDistance=.01,this.controls.maxDistance=500,this.controls.enablePan=!0,this.controls.enableZoom=!0,this.yRotRate=this.rotateRate/this.width*Math.PI/90,this.xRotRate=this.rotateRate/this.height*Math.PI/180,this.xPanRate=this.panRate/this.width*this.zoomFactor,this.yPanRate=this.panRate/this.height*this.zoomFactor,this.zPanRate=this.zoomRate/this.height}EnableDamping(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.35;this.controls.enableDamping=t,this.controls.dampingFactor=i}MouseDown(t,i){this.initX=this.prevX=t,this.initY=this.prevY=i}MouseMove(t,i){let e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=t-this.prevX,h=i-this.prevY;e?(this.controls.panLeft(s*this.xPanRate,this.cameraP.matrix),this.controls.panUp(h*this.yPanRate,this.cameraP.matrix)):(this.controls.rotateLeft(s*this.xRotRate),this.controls.rotateUp(h*this.yRotRate)),this.prevX=t,this.prevY=i}MouseWheel(t){this.controls.enableZoom=!0,t*=.1;const i=100*this.cameraP.position.length();this.zoomFactor=i,t>0?(this.cameraP.position.x*=.9,this.cameraP.position.y*=.9,this.cameraP.position.z*=.9):(this.cameraP.position.x*=1.1,this.cameraP.position.y*=1.1,this.cameraP.position.z*=1.1)}ShiftCamera(){this.cameraShift++,2===this.cameraShift&&(this.cameraShift=0),0===this.cameraShift?this.GetPerspective():1===this.cameraShift&&this.GetOrthographic()}MouseEventController(t){t.CLICK_TYPE===n.uh.DOWN&&this.MouseDown(t.x,t.y),t.CLICK_TYPE===n.uh.DRAG&&this.MouseMove(t.x,t.y,t.pressedShift),t.CLICK_TYPE===n.uh.WHEEL&&this.MouseWheel(t.wheel)}}class p{constructor(t,i){this.hostDiv=void 0,this.camera=void 0,this.scene=void 0,this.renderer=void 0,this.canvasWrapper=void 0,this.vrBtn=void 0,this.bg=0,this.isActive=!0,this.canvasWrapper=t,this.hostDiv=i,this.Init()}Init(){const t=this.hostDiv.clientWidth,i=this.hostDiv.clientHeight;this.renderer=new r.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(t/i),this.camera=new c(this,t,i),this.scene=new r.xsS,this.renderer.domElement.id="dynamic-spring",this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.pointerEvents="none",this.renderer.setSize(t,i),this.hostDiv.appendChild(this.renderer.domElement),this.RenderLoop(this)}RenderLoop(t){this.isActive&&(requestAnimationFrame((()=>{this.RenderLoop(this)})),this.UpdateBinding(),this.camera.controls.update(),this.renderer.render(this.scene,this.camera.camera))}UpdateBinding(){}ResizeCanvas(t,i){this.camera.aspect=t/i,this.camera.camera.updateProjectionMatrix(),this.renderer.setSize(t,i)}ResizeEffect(t,i){}Remove(){for(;this.scene.children.length;)this.scene.remove(this.scene.children[0])}}class d{constructor(t){this.graphicsCoreWrapper=void 0,this.canvasThree=void 0,this.graphicsCoreWrapper=t,this.canvasThree=new p(this,this.graphicsCoreWrapper.app.divHost)}}class l{constructor(t){this.app=void 0,this.canvasWrapper=void 0,this.app=t,this.canvasWrapper=new d(this)}Resize(t,i){this.canvasWrapper.canvasThree.ResizeCanvas(t,i)}Dispose(){this.canvasWrapper.canvasThree.isActive=!1}}class v{constructor(t){this.scene=void 0,this.scene=t}MouseEventController(t){this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.camera.MouseEventController(t),t.CLICK_TYPE!==n.uh.LEFT?t.CLICK_TYPE!==n.uh.MIDDLE?t.CLICK_TYPE!==n.uh.DOWN_RIGHT?t.CLICK_TYPE!==n.uh.DOUBLE?t.CLICK_TYPE!==n.uh.MOVE?t.CLICK_TYPE!==n.uh.DRAG?t.CLICK_TYPE!==n.uh.DOWN?t.CLICK_TYPE!==n.uh.UP||this.MouseUpPre(t):this.MouseDownPre(t):this.MouseDragPre(t):this.MouseMovePre(t):this.MouseDoubleClickPre(t):this.MouseRightClickPre(t):this.MouseMiddleClickPre(t):this.MouseLeftClickPre(t)}MouseDown(t){}MouseDownPre(t){this.scene.MouseDown(t.x,t.y),this.MouseDown(t)}MouseLeftClick(t){}MouseLeftClickPre(t){this.MouseLeftClick(t)}MouseMiddleClick(t){}MouseMiddleClickPre(t){this.MouseMiddleClick(t)}MouseRightClick(t){}MouseRightClickPre(t){this.MouseRightClick(t)}MouseUp(t){}MouseUpPre(t){this.scene.MouseUp(t.x,t.y),this.MouseUp(t)}MouseDoubleClick(t){}MouseDoubleClickPre(t){this.MouseDoubleClick(t)}MouseMove(t){}MouseMovePre(t){this.scene.MouseMove(t.x,t.y),this.MouseMove(t)}MouseDrag(t){}MouseDragPre(t){this.scene.MouseDrag(t.x,t.y),this.MouseDrag(t)}}class m{constructor(t){this.scene=void 0,this.listMesh=[],this.raycaster=new r.iMs,this.m=new r.FM8(0,0),this.point=void 0,this.scene=t,this.raycaster.params.Points={threshold:.1}}Raycast(t,i,e){this.m.x=t/this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.renderer.domElement.clientWidth*2-1,this.m.y=-i/this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.renderer.domElement.clientHeight*2+1,this.raycaster.setFromCamera(this.m,this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.camera.camera);const s=this.raycaster.intersectObjects(e);if(s.length>0){const t=s[0];console.log(t.point)}}RaycastPoint(t,i,e){this.raycaster.params.Points={threshold:5},this.m.x=t/this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.renderer.domElement.clientWidth*2-1,this.m.y=-i/this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.renderer.domElement.clientHeight*2+1,this.raycaster.setFromCamera(this.m,this.scene.app.graphicsCoreWrapper.canvasWrapper.canvasThree.camera.camera);const s=this.raycaster.intersectObjects(e);if(s.length>0){const t=s[0];return[t.point.x,t.point.y,t.point.z]}return null}}class u{constructor(t){this.sceneWrapper=void 0,this.hemiLight=void 0,this.dirLight=void 0,this.sceneWrapper=t,this.Init()}Init(){this.hemiLight=new r.vmT(16777215,16777215,.6),this.hemiLight.color.setHSL(.6,1,.6),this.hemiLight.groundColor.setHSL(.095,1,.75),this.hemiLight.position.set(0,50,0),this.sceneWrapper.scene.add(this.hemiLight),this.dirLight=new r.Ox3(16777215,1),this.dirLight.color.setHSL(.1,1,.95),this.dirLight.position.set(-1,1.75,1),this.dirLight.position.multiplyScalar(30),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=4096,this.dirLight.shadow.mapSize.height=4096;this.dirLight.shadow.camera.left=-50,this.dirLight.shadow.camera.right=50,this.dirLight.shadow.camera.top=50,this.dirLight.shadow.camera.bottom=-50,this.dirLight.shadow.bias=-1e-4,this.dirLight.shadow.camera.near=.001,this.dirLight.shadow.camera.far=350,this.sceneWrapper.scene.add(this.dirLight)}Dispose(){this.dirLight.visible=!1,this.hemiLight.visible=!1,this.sceneWrapper.scene.remove(this.dirLight),this.sceneWrapper.scene.remove(this.hemiLight)}}class g{constructor(t){this.definition=void 0,this.definition=t}AddPolyline(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"red";const e=new r.u9r,s=new Float32Array(3*t.length);t.forEach(((t,i)=>{s[3*i]=t[0],s[3*i+1]=t[1],s[3*i+2]=t[2]})),e.setAttribute("position",new r.TlE(s,3));const h=new r.nls({color:i,linewidth:1,transparent:!0,opacity:.55}),o=new r.x12(e,h);this.definition.scene.add(o)}AddRect(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"red";const e=new r.u9r,s=new Float32Array(3*t.length);t.forEach(((t,i)=>{s[3*i]=t[0],s[3*i+1]=t[1],s[3*i+2]=t[2]})),e.setAttribute("position",new r.TlE(s,3));const h=new r.nls({color:i,linewidth:5}),o=new r.x12(e,h);this.definition.scene.add(o)}AddRectMesh(t){const i=new r.u9r,e=new Float32Array(3*t.length);t.forEach(((t,i)=>{e[3*i]=t[0],e[3*i+1]=t[1],e[3*i+2]=t[2]})),i.setAttribute("position",new r.TlE(e,3));const s=new Uint16Array([0,1,2,0,2,3]);i.setIndex(new r.TlE(s,1));const h=new r.vBJ({color:16776960,side:r.ehD}),o=new r.Kj0(i,h);this.definition.scene.add(o)}AddPoint(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#00afaf";const e=new r.u9r,s=new Float32Array([t[0],t[1],t[2]]);e.setAttribute("position",new r.TlE(s,3));const h=new r.UY4({size:4,sizeAttenuation:!1,color:i}),o=new r.woe(e,h);this.definition.scene.add(o)}}class E{constructor(){this.min=new n.h9(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER),this.max=new n.h9(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)}Update(t){this.min=new n.h9(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER),this.max=new n.h9(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);for(let i=0;i<t.length;++i)t[i].x<this.min.x&&(this.min.x=t[i].x),t[i].y<this.min.y&&(this.min.y=t[i].y),t[i].z<this.min.z&&(this.min.z=t[i].z),t[i].x>this.max.x&&(this.max.x=t[i].x),t[i].y>this.max.y&&(this.max.y=t[i].y),t[i].z>this.max.z&&(this.max.z=t[i].z)}}class C{static GetPolylineTemp(){const t=new C;return t.Add(10,10),t.Add(-5,8),t.Add(-7,-10),t.Add(-1,-8),t.Add(10,10),t}constructor(){this.boundingBox=void 0,this.vertices=[],this.boundingBox=new E}Add(t,i){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.vertices.push(new n.h9(t,i,e)),this.boundingBox.Update(this.vertices)}GetVerticesForThree(){const t=[];return this.vertices.forEach((i=>{t.push([i.x,i.z,i.y])})),t}GetCenterVec(){const t=new n.h9(0,0,0);for(let i=0;i<this.vertices.length-1;++i)t.x+=this.vertices[i].x,t.y+=this.vertices[i].y,t.z+=this.vertices[i].z;return t.x/=this.vertices.length-1,t.y/=this.vertices.length-1,t.z/=this.vertices.length-1,t}}const w=(t,i)=>{let e=Math.cos(.017453292519943278*i),s=Math.sin(.017453292519943278*i);t.x=t.x*e-t.y*s,t.y=t.x*s+t.y*e};class P{constructor(t,i,e,s){this.boundingBox=void 0,this.vertices=[],this.color="green",this.vertices=[t,i,e,s]}GetVerticesForThree(){return[[this.vertices[0].x,this.vertices[0].z,this.vertices[0].y],[this.vertices[1].x,this.vertices[1].z,this.vertices[1].y],[this.vertices[2].x,this.vertices[2].z,this.vertices[2].y],[this.vertices[3].x,this.vertices[3].z,this.vertices[3].y],[this.vertices[0].x,this.vertices[0].z,this.vertices[0].y]]}}class y{constructor(t,i,e,s,h,r){this.grid=void 0,this.i=void 0,this.j=void 0,this.v=void 0,this.width=void 0,this.height=void 0,this.rect=void 0,this.isInside=!0,this.grid=t,this.i=i,this.j=e,this.v=s,this.width=h,this.height=r,this.rect=new P(new n.h9(this.v.x-.5*this.width,this.v.y-.5*this.height),new n.h9(this.v.x+.5*this.width,this.v.y-.5*this.height),new n.h9(this.v.x+.5*this.width,this.v.y+.5*this.height),new n.h9(this.v.x-.5*this.width,this.v.y+.5*this.height))}GetVerticesForThree(){return this.rect.GetVerticesForThree()}Rotate(t){((t,i)=>{for(let e=0;e<t.length;++e)w(t[e],i)})([this.v,...this.rect.vertices],t)}get color(){return this.rect.color}}class M{constructor(t,i,e){this.optimizer=void 0,this.min=void 0,this.max=void 0,this.rx=void 0,this.ry=void 0,this.intervalX=void 0,this.intervalY=void 0,this.pts=[],this.cells=[],this.optimizer=t,this.min=i,this.max=e}Init(t,i){this.rx=t,this.ry=i,this.intervalX=(this.max.x-this.min.x)/(this.rx-1),this.intervalY=(this.max.y-this.min.y)/(this.ry-1),this.cells=[],this.InitCell(),this.Rotate(),this.UpdateInside()}InitCell(){for(let t=0;t<this.ry;++t){const i=this.min.y+t*this.intervalY,e=[];for(let s=0;s<this.rx;++s){const h=this.min.x+s*this.intervalX,r=new n.h9(h,i);this.pts.push(r),e.push(new y(this,s,t,r,this.intervalX,this.intervalY))}this.cells.push(e)}}Rotate(){for(let t=0;t<this.ry;++t)for(let i=0;i<this.rx;++i){this.cells[t][i].Rotate(15)}}UpdateInside(){for(let t=0;t<this.ry;++t)for(let i=0;i<this.rx;++i){const e=this.cells[t][i];n.h9.IsInsideOfVecsWtihVecs(e.rect.vertices,this.optimizer.polyline.vertices)?(e.rect.color="black",e.v.color="black",e.isInside=!0):(e.rect.color="#efefef",e.v.color="efefef",e.isInside=!1,e.rect.vertices.forEach((t=>{t.x-=.1})))}}}class I{constructor(t,i,e){this.gridOptimizerApp=void 0,this.rx=void 0,this.ry=void 0,this.polyline=void 0,this.gridSystem=void 0,this.gridOptimizerApp=t,this.rx=i,this.ry=e,this.InitPolyline(),this.InitGridSyste()}InitPolyline(){this.polyline=C.GetPolylineTemp()}InitGridSyste(){this.gridSystem=new M(this,this.polyline.boundingBox.min,this.polyline.boundingBox.max),this.gridSystem.Init(this.rx,this.ry)}}class R{constructor(t){this.definition=void 0,this.optimizer=void 0,this.definition=t,this.optimizer=new I(this,15,8),this.AddPolyline(),this.AddPoints(),this.AddRects()}AddPolyline(){this.definition.renderer.AddPolyline(this.optimizer.polyline.GetVerticesForThree())}AddPoints(){this.optimizer.gridSystem.pts.forEach((t=>{this.definition.renderer.AddPoint([t.x,t.z,t.y],t.color)}))}AddRects(){for(let t=0;t<this.optimizer.gridSystem.cells.length;++t)for(let i=0;i<this.optimizer.gridSystem.cells[t].length;++i){const e=this.optimizer.gridSystem.cells[t][i].GetVerticesForThree();e&&this.definition.renderer.AddRect(e,this.optimizer.gridSystem.cells[t][i].color)}}}class T{constructor(t){this.scene=void 0,this.renderer=void 0,this._capture=void 0,this.m=new n.h9(0,0,0),this.gridOptimizerApp=void 0,this.appRectOptimizer=void 0,this.scene=t,this.renderer=new g(this),this.init()}init(){this.gridOptimizerApp=new R(this)}update(){}mouseMove(t,i,e){}mouseDrag(t,i){}mouseDown(t,i,e){}mouseUp(){}dispose(){}}class f{constructor(t){this.app=void 0,this.activeCommandController=void 0,this.geometryCommon=void 0,this.lightingController=void 0,this.scene=void 0,this.definition=void 0,this.app=t,this.activeCommandController=new v(this),this.scene=this.app.graphicsCoreWrapper.canvasWrapper.canvasThree.scene,this.app.graphicsCoreWrapper.canvasWrapper.canvasThree.UpdateBinding=()=>{this.Update()},this.lightingController=new u(this),this.geometryCommon=new m(this),this.Init()}Init(){this.definition=new T(this.scene);const t=new r.VLJ(10,10,13421772,15658734);this.scene.add(t)}Update(){this.definition.update()}MouseMove(t,i){this.definition.mouseMove(t,i,0)}MouseDown(t,i){this.app.graphicsCoreWrapper.canvasWrapper.canvasThree.camera.ableToMove=!1,this.definition.mouseDown(t,i,0)}MouseUp(t,i){this.definition.mouseUp(),this.app.graphicsCoreWrapper.canvasWrapper.canvasThree.camera.ableToMove=!0}MouseDrag(t,i){this.definition.mouseDrag(t,i)}Dispose(){this.definition.dispose()}}class x{constructor(t){this.app=void 0,this.x=-1,this.y=-1,this.z=-1,this.preX=-1,this.preY=-1,this.preZ=-1,this.yGLPicking=void 0,this.CLICK_TYPE=n.uh.MOVE,this.isDown=!1,this.isDoubleClick=!1,this.isMove=!1,this.pressedShift=!1,this.pressedAlt=!1,this.pressedCtrl=!1,this.lat=-1,this.long=-1,this.wheel=0,this.preWheel=0,this.isActive=!0,this.native=void 0,null!==t&&void 0!==t&&(this.app=t)}DeepCopy(){let t=new x(this.app);return t.x=this.x,t.y=this.y,t.z=this.z,t.preX=this.preX,t.preY=this.preY,t.preZ=this.preZ,t.pressedAlt=this.pressedAlt,t.pressedShift=this.pressedShift,t.pressedCtrl=this.pressedCtrl,t.isDoubleClick=this.isDoubleClick,t.isDown=this.isDown,t.isMove=this.isMove,t.lat=this.lat,t.long=this.long,t.wheel=this.wheel,t.preWheel=this.preWheel,t.yGLPicking=this.yGLPicking,t.CLICK_TYPE=this.CLICK_TYPE,t.native=this.native,t}}class D{constructor(t){this.mouseInteractionUI=void 0,this.mouseEventDataPre=new x,this.app=void 0,this.isEnable=!0,this.clickCount=0,this.click=!1,this.prevent=!1,this.delay=250,this.timer=void 0,this.down=!1,this.e=void 0,this._stopPropagation=!1,this.app=t}InitNativeMouseEvent(t){t.onclick=t=>{this.prevent=!1,this.timer=setTimeout((()=>{this.prevent||(this.MouseClick(t),t.stopPropagation()),this.prevent=!1}),this.delay)},t.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClick(t)},t.onmousedown=t=>{this.MouseDown(t),t.stopPropagation()},t.onmouseup=t=>{this.MouseUp(t),t.stopPropagation()},t.onmousemove=t=>{this.MouseMove(t),t.stopPropagation()},t.addEventListener("wheel",(t=>{this.MouseWheel(t,t.deltaY),t.stopPropagation()}))}MouseDown(t){this.click=!0,this.down=!0;let i=this.CommonEventBuilder(t);i.CLICK_TYPE=n.uh.DOWN,i.isDown=!0,this.MouseEvenEmitting(i)}MouseClick(t){if(!this.click)return;let i=this.CommonEventBuilder(t);0===t.button?i.CLICK_TYPE=n.uh.LEFT:1===t.button?i.CLICK_TYPE=n.uh.MIDDLE:2===t.button&&(i.CLICK_TYPE=n.uh.RIGHT),this.MouseEvenEmitting(i)}MouseDoubleClick(t){let i=this.CommonEventBuilder(t);i.CLICK_TYPE=n.uh.DOUBLE,this.MouseEvenEmitting(i)}MouseDrag(t){this.click=!1,this.prevent=!0;let i=this.CommonEventBuilder(t);i.CLICK_TYPE=n.uh.DRAG,i.isDown=!0,1===t.buttons?i.CLICK_TYPE=n.uh.DRAG:4===t.buttons?i.CLICK_TYPE=n.uh.DRAG_MIDDLE:2===t.buttons&&(i.CLICK_TYPE=n.uh.DRAG_RIGHT),this.MouseEvenEmitting(i)}MouseMove(t){if(this.down)return void this.MouseDrag(t);let i=this.CommonEventBuilder(t);i.CLICK_TYPE=n.uh.MOVE,i.isDown=!0,this.prevent=!0,this.MouseEvenEmitting(i)}MouseUp(t){this.down=!1,this.click=!0;let i=this.CommonEventBuilder(t);i.CLICK_TYPE=n.uh.UP,i.isDown=!1,this.MouseEvenEmitting(i)}MouseWheel(t,i){let e=this.CommonEventBuilder(t);e.wheel=i,e.CLICK_TYPE=n.uh.WHEEL,this.MouseEvenEmitting(e)}CommonEventBuilder(t){let i=new x(this.app);return i.preX=this.mouseEventDataPre.x,i.preY=this.mouseEventDataPre.y,i.pressedShift=t.shiftKey,i.pressedAlt=t.altKey,i.pressedCtrl=t.ctrlKey,i.x=t.offsetX,i.y=t.offsetY,i.preWheel=this.mouseEventDataPre.wheel,i.wheel=0,i.native=t,this.mouseEventDataPre=i,this.e=i,i}get stopPropagation(){return this._stopPropagation}set stopPropagation(t){t?this._stopPropagation=t:setTimeout((()=>{this._stopPropagation=t}),500)}MouseEvenEmitting(t){this.app.MouseEventController(t)}}class L{constructor(t){this.app=void 0,this.mouseInteraction=void 0,this.app=t,this.mouseInteraction=new D(this.app),this.mouseInteraction.InitNativeMouseEvent(this.app.divHost)}}class A{static Init(t){new A(t)}constructor(t){this.divHost=void 0,this.asset=void 0,this.viewWrapper=void 0,this.graphicsCoreWrapper=void 0,this.sceneWrapper=void 0,this.io=void 0;const i=document.getElementById(t);i&&(this.divHost=i),this.asset=new s,this.viewWrapper=new h(this),this.graphicsCoreWrapper=new l(this),this.sceneWrapper=new f(this),this.io=new L(this)}MouseEventController(t){this.sceneWrapper.activeCommandController.MouseEventController(t)}Resize(t,i){this.graphicsCoreWrapper.Resize(t,i)}Dispose(){this.graphicsCoreWrapper.Dispose(),this.sceneWrapper.Dispose()}Dummy(){}}class b{constructor(t){this.divHost=void 0,this.divHost=document.getElementById(t),A.Init(t)}destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}}}}]);
//# sourceMappingURL=10271.12625ce5.chunk.js.map