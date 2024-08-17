"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[79650],{79650:(t,e,i)=>{i.r(e),i.d(e,{Solution:()=>E});var s=i(39880),r=i(88679),h=i(99874);class o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[2,2,4],h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,1,0],a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:5;this.viewMatrix=s.Ue(),this.projectionMatrix=s.Ue(),this.viewProjectionMatrix=s.Ue(),this.zoomMax=100,this.zoomSpeed=2,this.near=.01,this.far=1e4,this.mvpMatrix=s.Ue(),this.eye=r.al(0,0,0),this.center=r.al(0,0,0),this.up=r.al(0,1,0),this.type="camera",this.respectRatio=void 0,this.width=void 0,this.height=void 0,this.angleXY=Math.PI,this.angleZ=.25*Math.PI,this.distance=1,this.distance=a,this.width=t,this.height=e,this.respectRatio=t/e,this.eye=i,this.center=h,this.up=o}zoom(t){}update(){s.zB(this.viewMatrix,this.eye,this.center,this.up),s.Jp(this.viewProjectionMatrix,this.projectionMatrix,this.viewMatrix)}}class a extends o{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[2,2,4],arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0],arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,1,0],arguments.length>5&&void 0!==arguments[5]?arguments[5]:3),this.type="CameraPerspective",this.init()}init(){s.G3(this.projectionMatrix,2*Math.PI/5,this.respectRatio,this.near,this.far),this.update()}zoom(t){this.distance+=.01*t}}class n extends o{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0,1],arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0],arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,1,0],arguments.length>5&&void 0!==arguments[5]?arguments[5]:300.1),this.type="CameraOrth",this.init()}init(){c(this.projectionMatrix,this.width,this.height,this.near,this.far,this.distance),this.angleXY=0,this.angleZ=0,this.update()}zoom(t){this.width+=.001*this.width*t,this.height+=.001*this.height*t,this.distance<1e-6&&(this.distance=1e-6),this.distance>1e5&&(this.distance=1e5),c(this.projectionMatrix,this.width,this.height,this.near,this.far,this.distance)}}const c=(t,e,i,s,r,h)=>(t[0]=2/e*h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2/i*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=-2/(r-s),t[11]=0,t[12]=0,t[13]=0,t[14]=.1,t[15]=1,t);class d{constructor(t){this.renderer=void 0,this.canvas=void 0,this.cameraOrth=void 0,this.cameraPerspective=void 0,this.camera=void 0,this.modelMatrix=s.Ue(),this.mvpMatrix=s.Ue(),this.rotation=r.al(0,0,0),this.translation=r.al(0,0,0),this.screen2=h.al(0,0),this.pos=[0,0],this.isDown=!1,this.isShift=!1,this.renderer=t,this.canvas=t.canvas;const e=r.al(2.6451475620269775,3.130298137664795,2.864337205886841),i=r.al(0,0,0),o=r.al(0,0,1);this.cameraPerspective=new a(this.canvas.width,this.canvas.height,e,i,o),this.camera=this.cameraPerspective,this.arcRotation(0,0),this.cameraOrth=new n(this.canvas.width,this.canvas.height),this.camera=this.cameraOrth,this.appendEvent(this.canvas),this.update()}update(){this.camera.update(),l(this.modelMatrix,this.translation,this.rotation),s.Jp(this.mvpMatrix,this.camera.viewProjectionMatrix,this.modelMatrix)}rotateZ(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1;this.rotation[2]+=t,this.update()}translateX(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1;this.translation[0]+=t,this.update()}get getMatrix(){return this.mvpMatrix}shiftCamera(){this.camera===this.cameraPerspective?this.camera=this.cameraOrth:this.camera=this.cameraPerspective,this.update()}moveCamera(t,e){this.camera===this.cameraPerspective?this.arcRotation(t,e):this.pan(t,e)}arcRotation(t,e){t*=-.01,e*=-.01,this.isShift?this.panPerspective(t,e):(this.camera.angleXY+=t,this.camera.angleZ+=e,this.camera.eye[0]=this.camera.center[0]+Math.sin(this.camera.angleXY)*Math.cos(this.camera.angleZ)*this.camera.distance,this.camera.eye[1]=this.camera.center[1]+Math.cos(this.camera.angleXY)*Math.cos(this.camera.angleZ)*this.camera.distance,this.camera.eye[2]=this.camera.center[2]+Math.sin(this.camera.angleZ)*this.camera.distance),this.update()}zoomWheel(t){this.camera===this.cameraPerspective?(this.camera.zoom(t),this.arcRotation(0,0)):this.camera.zoom(t),this.update()}panPerspective(t,e){this.camera.center[0]+=t/this.camera.distance,this.camera.center[2]+=e/this.camera.distance,this.camera.eye[0]+=t/this.camera.distance,this.camera.eye[2]+=e/this.camera.distance,this.update()}pan(t,e){this.camera.center[0]+=t/this.camera.distance,this.camera.center[1]-=e/this.camera.distance,this.camera.eye[0]+=t/this.camera.distance,this.camera.eye[1]-=e/this.camera.distance,this.update()}appendEvent(t){t.addEventListener("ondrag",(t=>{}),!1),t.addEventListener("click",(t=>{}),!1),t.addEventListener("dblclick",(t=>{}),!1),t.addEventListener("drag",(t=>{}),!0),t.addEventListener("mouseup",(t=>{}),!1),t.addEventListener("mousedown",(t=>{this.isDown=!0,this.pos[0]=t.offsetX,this.pos[1]=t.offsetY}),!1),t.addEventListener("mouseup",(t=>{this.isDown=!1}),!1),t.addEventListener("mousemove",(e=>{if(this.isDown){const t=this.pos[0]-e.offsetX,i=this.pos[1]-e.offsetY;this.moveCamera(t,i),this.pos[0]=e.offsetX,this.pos[1]=e.offsetY}else{t.getBoundingClientRect()}this.pos[0]=e.offsetX,this.pos[1]=e.offsetY}),!1),t.addEventListener("wheel",(t=>{this.zoomWheel(t.deltaY)}),!1),window.addEventListener("keydown",(t=>{"p"===t.key&&this.shiftCamera(),t.shiftKey&&(this.isShift=!0)}),!1),window.addEventListener("keyup",(t=>{this.isShift=!1}),!1)}}const l=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0,0],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[1,1,1];const h=s.Ue(),o=s.Ue(),a=s.Ue(),n=s.Ue(),c=s.Ue();s.vc(n,e),s.aC(h,i[0]),s.gT(o,i[1]),s.QO(a,i[2]),s.xJ(c,r),s.Jp(t,h,c),s.Jp(t,o,t),s.Jp(t,a,t),s.Jp(t,n,t)};class m{constructor(t){this.core=void 0,this.gl=void 0,this.cameraController=void 0,this.divHost=void 0,this.canvas=void 0,this.isActive=!0,this.core=t,this.divHost=document.getElementById(this.core.id),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.init()}init(){this.gl=this.canvas.getContext("webgl2"),this.cameraController=new d(this)}draw(){this.isActive&&(requestAnimationFrame((()=>this.draw())),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.DEPTH_TEST),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.cameraController.update(),this.core.scene.render())}destroy(){this.isActive=!1,this.divHost.removeChild(this.canvas)}}const g=async t=>fetch("".concat(t)).then((t=>t.text())).catch((t=>{console.debug(t)})),f=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0,0],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[1,1,1];const h=s.Ue(),o=s.Ue(),a=s.Ue(),n=s.Ue(),c=s.Ue();s.vc(n,e),s.aC(h,i[0]),s.gT(o,i[1]),s.QO(a,i[2]),s.xJ(c,r),s.Jp(t,h,c),s.Jp(t,o,t),s.Jp(t,a,t),s.Jp(t,n,t)};var v=i(87968);class u{constructor(){this.streetOSM=[],this.pos=void 0,this.colors=void 0,this.renderLines=(t,e)=>{const i=[],s=[],r=[],h=15478749.591872748,o=4766690.415614613,a=.001;let n=0,c=0,d=0;for(let l=0;l<t.length;++l){const m=t[l];for(let t=0;t<m.length;++t)for(let l=0;l<m[t].length-1;++l){const[g,f]=(0,v.MercatorProjection)(m[t][l][0],m[t][l][1]),[u,p]=(0,v.MercatorProjection)(m[t][l+1][0],m[t][l+1][1]);n+=g,c+=f,d+=1;const A=(g-h)*a,L=(f-o)*a,R=(u-h)*a,B=(p-o)*a;i.push(A,L,0),s.push(e[0],e[1],e[2]),i.push(R,B,0),s.push(e[0],e[1],e[2]),l<m[t].length-1&&r.push(Math.floor(i.length/3)-1,Math.floor(i.length/3))}}this.pos=new Float32Array(i.flat()),this.colors=new Float32Array(s.flat())}}async init(){await(0,v.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates);this.renderLines(this.streetOSM,[0,0,0])}))}}class p{constructor(t){this.scene=void 0,this.gl=void 0,this.modelMatrix=s.Ue(),this.translation=r.al(2,0,0),this.rotation=r.al(0,0,0),this.scale=r.al(1,1,1),this.program=void 0,this.modelLoc=void 0,this.cameraLoc=void 0,this.isRenderable=!1,this.scene=t,this.gl=t.core.renderer.gl,this.scene.add(this)}async init(){}render(){}}const A=i(34298),L=i(86150);class R extends p{constructor(t){super(t),this.numberOfVertices=0,this.vertexBuffer=void 0,this.colorBuffer=void 0,this.normalBuffer=void 0,this.uvBuffer=void 0,this.uniformBindGroup=void 0,this.uniformBindGroup1=void 0,this.uniformBindGroup2=void 0,this.uniformBuffer=void 0,this.commandEncoder=void 0,this.textureView=void 0,this.renderPassDescription=void 0,this.pipeline=void 0,this.isAnimation=!1,this.mouseBuffer=void 0,this.frameBuffer=void 0,this.t=0,this.resultBuffer=void 0,this.geometry=void 0,this.posLoc=void 0,this.buf=void 0,this.buf2=void 0,this.colorLoc=void 0,this.frameLoc=void 0,this.mouseLoc=void 0,this.init()}async init(){this.geometry=new u,await this.geometry.init(),console.log(this.geometry);const t=await g(A),e=await g(L),i=this.gl;this.vertexBuffer=i.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer),i.bufferData(i.ARRAY_BUFFER,this.geometry.pos,i.STATIC_DRAW),this.colorBuffer=i.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),i.bufferData(i.ARRAY_BUFFER,this.geometry.colors,i.STATIC_DRAW),this.program=i.createProgram();const s=i.createShader(i.VERTEX_SHADER);i.shaderSource(s,t),i.compileShader(s),i.attachShader(this.program,s);const r=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(r,e),i.compileShader(r),i.attachShader(this.program,r),i.linkProgram(this.program),this.modelLoc=i.getUniformLocation(this.program,"uModel"),this.cameraLoc=i.getUniformLocation(this.program,"cameraProjection"),this.frameLoc=i.getUniformLocation(this.program,"uFrame"),this.mouseLoc=i.getUniformLocation(this.program,"uMouse"),this.isRenderable=!0}render(){this.isRenderable&&(f(this.modelMatrix,this.translation,this.rotation,this.scale),this.gl.useProgram(this.program),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer),this.gl.enableVertexAttribArray(0),this.gl.vertexAttribPointer(0,3,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.enableVertexAttribArray(1),this.gl.vertexAttribPointer(1,3,this.gl.FLOAT,!1,0,0),this.gl.uniformMatrix4fv(this.modelLoc,!1,this.modelMatrix),this.gl.uniformMatrix4fv(this.cameraLoc,!1,this.scene.core.renderer.cameraController.getMatrix),this.gl.uniform1f(this.frameLoc,this.t),this.gl.uniform2f(this.mouseLoc,.01*this.scene.core.renderer.cameraController.pos[0],.01*this.scene.core.renderer.cameraController.pos[1]),this.gl.drawArrays(this.gl.LINES,0,this.geometry.pos.length/3),this.t+=.1)}}class B{constructor(){this.streetOSM=[],this.pos=void 0,this.colors=void 0,this.renderLines=(t,e)=>{const i=[],s=[];let r=0,h=0,o=0;for(let a=0;a<t.length;++a){const n=t[a];for(let t=0;t<n.length;++t)for(let a=0;a<n[t].length-1;++a){const[c,d]=(0,v.MercatorProjection)(n[t][a][0],n[t][a][1]);r+=c,h+=d,o+=1;const l=.001*(c-15478749.591872748),m=.001*(d-4766690.415614613);i.push(l,m,0),s.push(e[0],e[1],e[2])}}this.pos=new Float32Array(i.flat()),this.colors=new Float32Array(s.flat())}}async init(){await(0,v.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates);this.renderLines(this.streetOSM,[0,0,0])}))}}const w=i(51482),x=i(9520);class y extends p{constructor(t){super(t),this.numberOfVertices=0,this.vertexBuffer=void 0,this.colorBuffer=void 0,this.normalBuffer=void 0,this.uvBuffer=void 0,this.uniformBindGroup=void 0,this.uniformBindGroup1=void 0,this.uniformBindGroup2=void 0,this.uniformBuffer=void 0,this.commandEncoder=void 0,this.textureView=void 0,this.renderPassDescription=void 0,this.pipeline=void 0,this.isAnimation=!1,this.mouseBuffer=void 0,this.frameBuffer=void 0,this.t=0,this.resultBuffer=void 0,this.geometry=void 0,this.posLoc=void 0,this.buf=void 0,this.buf2=void 0,this.colorLoc=void 0,this.frameLoc=void 0,this.mouseLoc=void 0,this.init()}async init(){this.geometry=new B,await this.geometry.init(),console.log(this.geometry);const t=await g(w),e=await g(x),i=this.gl;this.vertexBuffer=i.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer),i.bufferData(i.ARRAY_BUFFER,this.geometry.pos,i.STATIC_DRAW),this.colorBuffer=i.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),i.bufferData(i.ARRAY_BUFFER,this.geometry.colors,i.STATIC_DRAW),this.program=i.createProgram();const s=i.createShader(i.VERTEX_SHADER);i.shaderSource(s,t),i.compileShader(s),i.attachShader(this.program,s);const r=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(r,e),i.compileShader(r),i.attachShader(this.program,r),i.linkProgram(this.program),this.modelLoc=i.getUniformLocation(this.program,"uModel"),this.cameraLoc=i.getUniformLocation(this.program,"cameraProjection"),this.frameLoc=i.getUniformLocation(this.program,"uFrame"),this.mouseLoc=i.getUniformLocation(this.program,"uMouse"),this.isRenderable=!0}render(){this.isRenderable&&(f(this.modelMatrix,this.translation,this.rotation,this.scale),this.gl.useProgram(this.program),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer),this.gl.enableVertexAttribArray(0),this.gl.vertexAttribPointer(0,3,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.enableVertexAttribArray(1),this.gl.vertexAttribPointer(1,3,this.gl.FLOAT,!1,0,0),this.gl.uniformMatrix4fv(this.modelLoc,!1,this.modelMatrix),this.gl.uniformMatrix4fv(this.cameraLoc,!1,this.scene.core.renderer.cameraController.getMatrix),this.gl.uniform1f(this.frameLoc,this.t),this.gl.uniform2f(this.mouseLoc,.01*this.scene.core.renderer.cameraController.pos[0],.01*this.scene.core.renderer.cameraController.pos[1]),this.gl.drawArrays(this.gl.POINTS,0,this.geometry.pos.length/3),this.t+=.1)}}class M{constructor(t){this.core=void 0,this.objectList=[],this.core=t}async init(){new R(this),new y(this)}render(){for(let t=0;t<this.objectList.length;++t)this.objectList[t].render()}add(t){this.objectList.push(t)}}class b{constructor(t){this.id=void 0,this.renderer=void 0,this.scene=void 0,this.id=t,this.init()}async init(){this.renderer=new m(this),this.scene=new M(this),this.scene.init(),this.renderer.draw()}destroy(){this.renderer.destroy()}}class E{constructor(t){this.core=void 0,this.core=new b(t)}destroy(){this.core.destroy()}}},86150:(t,e,i)=>{t.exports=i.p+"static/media/frag.f7d70bc18c7c69fe5bec.glsl"},34298:(t,e,i)=>{t.exports=i.p+"static/media/vert.66af2f714a7c383dd32b.glsl"},9520:(t,e,i)=>{t.exports=i.p+"static/media/frag.cba70fdd6ed17c478d90.glsl"},51482:(t,e,i)=>{t.exports=i.p+"static/media/vert.0f53c761e545fd40368e.glsl"}}]);
//# sourceMappingURL=79650.d5382a6a.chunk.js.map