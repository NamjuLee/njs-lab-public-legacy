(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37173],{15510:function(e){function t(e){return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=15510,e.exports=t},33830:function(e){"use strict";e.exports='export default "#define GLSLIFY 1\\n// vertex shader\\n\\nstruct Uniforms {\\n    mvpMatrix : mat4x4<f32>,\\n    // uniform Mouse : vec4<f32>; \\n\\n};\\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\\n\\n// @binding(1) @group(0) var<uniform> u_mouse : Uniforms;\\n\\n// [[block]]\\nstruct MouseData {\\n    mousePosition : vec3<f32>\\n};\\n// [[group(0), binding(0)]]\\n@binding(0) @group(1) var<uniform> mouseData: MouseData;\\n@binding(0) @group(2) var<uniform> frame : u32;\\n\\nstruct Output {\\n    @builtin(position) Position : vec4<f32>,\\n    @location(0) vColor : vec4<f32>,\\n    @location(1) vPos : vec4<f32>,\\n};\\n\\n@vertex\\nfn vs_main(@location(0) pos: vec4<f32>, @location(1) color: vec4<f32>) -> Output {\\n    var output: Output;\\n    let thePos: vec4<f32> = uniforms.mvpMatrix * pos;\\n\\n    output.Position = vec4<f32>(thePos);\\n    output.vPos = vec4<f32>(1,1,1,1);\\n\\n    return output;\\n}\\n\\n// fragment shader\\n// [[uniform(0)]] var<vec2<f32>> u_mouse;\\n\\nstruct Input {\\n    @builtin(position) Position : vec4<f32>,\\n    @location(0) vColor : vec4<f32>,\\n    @location(1) vPos : vec4<f32>,\\n};\\n\\n@fragment\\n// fn fs_main(input: Input) -> @location(0) vec4<f32> {\\nfn fs_main(@location(0) vColor: vec4<f32>) -> @location(0) vec4<f32> {\\n    // \\n    // var outputColor = vec4<f32>(mouseData, 0.0, 1.0);\\n    // return outputColor;\\n    // if (mouseData.mousePosition.x > 1) {\\n//    var mouseX = mouseData.mousePosition.x;\\n//     var mouseY = mouseData.mousePosition.y;\\n//     // }\\n//     if (mouseX > 1 ) {\\n//         mouseX = 1;\\n//     }\\n    // var radi: f32 = 2.;\\n    // var dist: f32 = distance(vec2<f32>(0, 0), vec2<f32>(2,2));\\n    // var alpha: f32 = smoothstep(radi - 0.01, radi, dist);\\n    // return vec4<f32>(1.0, 0.0, 0.0, 20); // Red circle with varying alpha (transparency)\\n\\n    // input.position.xy;\\n\\n    // var len = distance(pos.xy, mouseData.mousePosition.xy);\\n    // color.x = len;\\n    // output.vColor = color;\\n\\n    //    // Calculate the distance from the center of the circle\\n    // var center: vec2<f32> = vec2<f32>(0.5, 0.5); // Assuming circle center at (0.5, 0.5) in normalized coordinates\\n    // var distance: f32 = distance(center, gl_FragCoord.xy);\\n\\n    // // Inside the circle if the distance is less than the radius\\n    // if (distance < uniforms.radius) {\\n    //     return vec4<f32>(1.0, 0.0, 0.0, 1.0); // Red color for the circle\\n    // } else {\\n    //     discard; // Discard fragments outside the circle\\n    // }\\n\\n    var outputColor: vec4<f32> = vec4<f32>((sin((mouseData.mousePosition.z + 0.5) * 2) * 0.5) + 0.5, mouseData.mousePosition.xy, 1);\\n    // var outputColor: vec4<f32> = vec4<f32>(input.position.xy , 1.0, 1.0);\\n    return outputColor;\\n    // // return vColor;\\n}\\n\\n// // Vertex shader input\\n// struct VertexInput {\\n//     [[location(0)]] position: vec2<f32>;\\n// };\\n\\n// // Vertex shader output\\n// struct VertexOutput {\\n//     [[builtin(position)]] position: vec4<f32>;\\n// };\\n\\n// // Uniforms\\n// [[block]]\\n// struct Uniforms {\\n//     radius: f32;\\n// };\\n\\n// [[binding(0), group(0)]]\\n// var<uniform> uniforms: Uniforms;\\n\\n// // Vertex shader function\\n// [[stage(vertex)]]\\n// fn main_vertex(input: VertexInput) -> VertexOutput {\\n//     var output: VertexOutput;\\n//     output.position = vec4<f32>(input.position, 0.0, 1.0);\\n//     return output;\\n// }\\n\\n// // Fragment shader function\\n// [[stage(fragment)]]\\n// fn main_fragment() -> [[location(0)]] vec4<f32> {\\n//     // Calculate the distance from the center of the circle\\n//     var center: vec2<f32> = vec2<f32>(0.5, 0.5); // Assuming circle center at (0.5, 0.5) in normalized coordinates\\n//     var distance: f32 = distance(center, gl_FragCoord.xy);\\n\\n//     // Inside the circle if the distance is less than the radius\\n//     if (distance < uniforms.radius) {\\n//         return vec4<f32>(1.0, 0.0, 0.0, 1.0); // Red color for the circle\\n//     } else {\\n//         discard; // Discard fragments outside the circle\\n//     }\\n// }\\n";'},57911:function(e,t,i){"use strict";i.r(t),i.d(t,{App:function(){return S},Renderer:function(){return P},Solution:function(){return E}});class r{init(){this.appendEvent()}appendEvent(){this.controller.app.renderer.canvas.addEventListener("drag",e=>{},!1),this.controller.app.renderer.canvas.addEventListener("click",e=>{},!1),this.controller.app.renderer.canvas.addEventListener("dblclick",e=>{},!1),this.controller.app.renderer.canvas.addEventListener("drag",e=>{},!0),this.controller.app.renderer.canvas.addEventListener("mouseup",e=>{},!1),this.controller.app.renderer.canvas.addEventListener("mousedown",e=>{this.isDown=!0,this.pos[0]=e.offsetX,this.pos[1]=e.offsetY},!1),this.controller.app.renderer.canvas.addEventListener("mouseup",e=>{this.isDown=!1},!1),this.controller.app.renderer.canvas.addEventListener("mousemove",e=>{if(this.isDown){let t=this.pos[0]-e.offsetX,i=this.pos[1]-e.offsetY;this.controller.app.renderer.cameraController.moveCamera(t,i),this.pos[0]=e.offsetX,this.pos[1]=e.offsetY}else{let t=this.controller.app.renderer.canvas.getBoundingClientRect();this.mNormalized[0]=(e.clientX-t.left)/this.controller.app.renderer.canvas.width,this.mNormalized[1]=(e.clientY-t.top)/this.controller.app.renderer.canvas.height}},!1),this.controller.app.renderer.canvas.addEventListener("wheel",e=>{this.controller.app.renderer.cameraController.zoomWheel(e.deltaY)},!1),window.addEventListener("keydown",e=>{this.controller.keyboard(e)},!1)}constructor(e){this.pos=[0,0],this.mNormalized=new Float32Array([0,0]),this.isDown=!1,this.controller=e}}class s{init(){this.eventController.init()}keyboard(e){"p"===e.key&&this.app.renderer.cameraController.shiftCamera()}constructor(e){this.app=e,this.eventController=new r(this)}}var n,a,o=i(81519),h=i(49644),c=i(50023);class u{zoom(e){}update(){o.zB(this.viewMatrix,this.eye,this.center,this.up),o.Jp(this.viewProjectionMatrix,this.projectionMatrix,this.viewMatrix)}constructor(e=100,t=100,i=[2,2,4],r=[0,0,0],s=[0,1,0],n=5){this.viewMatrix=o.Ue(),this.projectionMatrix=o.Ue(),this.viewProjectionMatrix=o.Ue(),this.zoomMax=100,this.zoomSpeed=2,this.near=.01,this.far=1e4,this.mvpMatrix=o.Ue(),this.eye=h.al(0,0,0),this.center=h.al(0,0,0),this.up=h.al(0,1,0),this.type="camera",this.angleXY=Math.PI,this.angleZ=.25*Math.PI,this.distance=1,this.distance=n,this.width=e,this.height=t,this.respectRatio=e/t,this.eye=i,this.center=r,this.up=s}}class l extends u{init(){o.G3(this.projectionMatrix,2*Math.PI/5,this.respectRatio,this.near,this.far),this.update()}zoom(e){this.distance+=.01*e}constructor(e=100,t=100,i=[2,2,4],r=[0,0,0],s=[0,1,0],n=3){super(e,t,i,r,s,n),this.type="CameraPerspective",this.init()}}class d extends u{init(){p(this.projectionMatrix,this.width,this.height,this.near,this.far,this.distance),this.angleXY=0,this.angleZ=0,this.update()}zoom(e){this.distance+=e+50/this.distance,this.distance<1e-6&&(this.distance=1e-6),this.distance>1e5&&(this.distance=1e5),p(this.projectionMatrix,this.width,this.height,this.near,this.far,this.distance)}constructor(e=100,t=100,i=[0,0,1],r=[0,0,0],s=[0,1,0],n=300.1){super(e,t,i,r,s,n),this.type="CameraOrth",this.init()}}let p=(e,t,i,r,s,n)=>(e[0]=2/t*n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2/i*n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=-2/(s-r),e[11]=0,e[12]=0,e[13]=0,e[14]=.1,e[15]=1,e);class f{update(){this.camera.update(),m(this.modelMatrix,this.translation,this.rotation),o.Jp(this.mvpMatrix,this.camera.viewProjectionMatrix,this.modelMatrix)}rotateZ(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1;this.rotation[2]+=e,this.update()}translateX(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1;this.translation[0]+=e,this.update()}get getMatrix(){return this.mvpMatrix}shiftCamera(){this.camera===this.cameraPerspective?this.camera=this.cameraOrth:this.camera=this.cameraPerspective,this.update()}moveCamera(e,t){this.camera===this.cameraPerspective?this.arcRotation(e,t):this.pan(e,t)}arcRotation(e,t){e*=-.01,t*=-.01,this.camera.angleXY+=e,this.camera.angleZ+=t,this.camera.eye[0]=this.camera.center[0]+Math.sin(this.camera.angleXY)*Math.cos(this.camera.angleZ)*this.camera.distance,this.camera.eye[1]=this.camera.center[1]+Math.cos(this.camera.angleXY)*Math.cos(this.camera.angleZ)*this.camera.distance,this.camera.eye[2]=this.camera.center[2]+Math.sin(this.camera.angleZ)*this.camera.distance,this.update()}zoomWheel(e){this.camera===this.cameraPerspective?(this.camera.zoom(e),this.arcRotation(0,0)):this.camera.zoom(e),this.update()}pan(e,t){this.camera.center[0]+=e/this.camera.distance,this.camera.center[1]-=t/this.camera.distance,this.camera.eye[0]+=e/this.camera.distance,this.camera.eye[1]-=t/this.camera.distance,this.update()}constructor(e){this.modelMatrix=o.Ue(),this.mvpMatrix=o.Ue(),this.rotation=h.al(0,0,0),this.translation=h.al(0,0,0),this.screen2=c.al(0,0),this.solution=e,this.canvas=e.canvas;let t=h.al(2.6451475620269775,3.130298137664795,2.864337205886841),i=h.al(0,0,0),r=h.al(0,0,1);this.cameraPerspective=new l(this.canvas.width,this.canvas.height,t,i,r),this.camera=this.cameraPerspective,this.arcRotation(0,0),this.cameraOrth=new d(this.canvas.width,this.canvas.height),this.camera=this.cameraOrth,this.update()}}let m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0,0],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[1,1,1],s=o.Ue(),n=o.Ue(),a=o.Ue(),h=o.Ue(),c=o.Ue();o.vc(h,t),o.aC(s,i[0]),o.gT(n,i[1]),o.QO(a,i[2]),o.xJ(c,r),o.Jp(e,s,c),o.Jp(e,n,e),o.Jp(e,a,e),o.Jp(e,h,e)};(n=a||(a={})).PointList="point-list",n.LineList="line-list",n.LineStrip="line-strip",n.TriangleList="triangle-list",n.TriangleStrip="triangle-strip";class v{async initWebGPU(){if(!navigator.gpu)throw Error("Not Support WebGPU");let e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw Error("No Adapter Found");let t=await e.requestDevice();this.ctx=this.renderer.canvas.getContext("webgpu"),this.format="bgra8unorm",this.ctx.configure({device:t,format:this.format,alphaMode:"opaque"}),this.device=t,this.textureView=this.ctx.getCurrentTexture().createView(),this.depthTexture=this.device.createTexture({size:[this.ctx.canvas.width,this.ctx.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTexture.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}}}destroy(){this.device.destroy()}constructor(e){this.PrimitiveTopology=a,this.renderer=e}}class P{async init(){await this.webGPU.initWebGPU(),this.cameraController=new f(this),this.requestAni=requestAnimationFrame(this.loop)}drawing(){this.app.scene.render()}destroy(){for(this.webGPU.destroy(),cancelAnimationFrame(this.requestAni);this.app.divHost.lastElementChild;)this.app.divHost.removeChild(this.app.divHost.lastElementChild)}constructor(e){this.isAnimation=!0,this.loop=()=>{this.isAnimation&&(this.requestAni=requestAnimationFrame(this.loop)),this.drawing()},this.app=e,this.canvas=document.createElement("canvas"),this.canvas.width=this.app.divHost.clientWidth,this.canvas.height=this.app.divHost.clientHeight,this.app.divHost.appendChild(this.canvas),this.webGPU=new v(this)}}let g=async e=>fetch("".concat(e)).then(e=>e.text()).catch(e=>{console.debug(e)}),w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0,0],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[1,1,1],s=o.Ue(),n=o.Ue(),a=o.Ue(),h=o.Ue(),c=o.Ue();o.vc(h,t),o.aC(s,i[0]),o.gT(n,i[1]),o.QO(a,i[2]),o.xJ(c,r),o.Jp(e,s,c),o.Jp(e,n,e),o.Jp(e,a,e),o.Jp(e,h,e)},b=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,r=e.createBuffer({size:t.byteLength,usage:i,mappedAtCreation:!0});return new Float32Array(r.getMappedRange()).set(t),r.unmap(),r};var U=i(45169);class x{async init(){await (0,U.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then(e=>{for(let t=0;t<e.features.length;++t)this.streetOSM.push(e.features[t].geometry.coordinates);this.renderLines(this.streetOSM,[0,1,1])})}constructor(){this.streetOSM=[],this.renderLines=(e,t)=>{let i=[],r=[],s=[],n=0,a=0,o=0;for(let h=0;h<e.length;++h){let c=e[h];for(let e=0;e<c.length;++e)for(let h=0;h<c[e].length-1;++h){let[u,l]=(0,U.MercatorProjection)(c[e][h][0],c[e][h][1]),[d,p]=(0,U.MercatorProjection)(c[e][h+1][0],c[e][h+1][1]);n+=u,a+=l,o+=1;let f=(u-15478749.591872748)*1e-4,m=(l-4766690.415614613)*1e-4,v=(d-15478749.591872748)*1e-4,P=(p-4766690.415614613)*1e-4;i.push(f,m,0),r.push(t[0],t[1],t[2]),i.push(v,P,0),r.push(t[0],t[1],t[2]),h<c[e].length-1&&s.push(Math.floor(i.length/3)-1,Math.floor(i.length/3))}}console.log(i),console.log(n/o,a/o),this.pos=new Float32Array(i.flat()),this.colors=new Float32Array(r.flat())}}}class G{async initPipeline(){}update(){}render(){}constructor(e){this.scene=e,this.webGPU=e.app.renderer.webGPU,this.scene.objects.push(this)}}let M=i(33830);class y extends G{async initPipeline(){this.geometry=new x,await this.geometry.init(),console.log(this.geometry),this.numberOfVertices=this.geometry.pos.length/3,this.vertexBuffer=b(this.webGPU.device,this.geometry.pos),this.colorBuffer=b(this.webGPU.device,this.geometry.colors);let e=await g(M);this.pipeline=this.webGPU.device.createRenderPipeline({layout:"auto",vertex:{module:this.webGPU.device.createShaderModule({code:e}),entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]},{arrayStride:12,attributes:[{shaderLocation:1,format:"float32x3",offset:0}]}]},fragment:{module:this.webGPU.device.createShaderModule({code:e}),entryPoint:"fs_main",targets:[{format:this.webGPU.format}]},primitive:{topology:this.webGPU.PrimitiveTopology.PointList},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.modelMatrix=o.Ue(),this.rotation=h.al(0,0,0),this.uniformBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.frameBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.uniformBindGroup=this.webGPU.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer,offset:0,size:64}}]}),this.uniformBindGroup1=this.webGPU.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.mouseBuffer}}]}),this.textureView=this.webGPU.ctx.getCurrentTexture().createView();let t=this.webGPU.device.createTexture({size:[this.webGPU.ctx.canvas.width,this.webGPU.ctx.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:.2,g:.247,b:.314,a:1},loadValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:t.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},this.isRenderable=!0}async render(){this.isRenderable&&(this.webGPU.device.queue.writeBuffer(this.mouseBuffer,0,new Float32Array([this.scene.app.controller.eventController.mNormalized[0],this.scene.app.controller.eventController.mNormalized[1],this.t])),this.webGPU.device.queue.writeBuffer(this.frameBuffer,0,new Float32Array([this.t,0])),w(this.modelMatrix,this.translation,this.rotation),o.Jp(this.modelMatrix,this.webGPU.renderer.cameraController.getMatrix,this.modelMatrix),this.webGPU.device.queue.writeBuffer(this.uniformBuffer,0,this.modelMatrix),this.webGPU.renderPass.setPipeline(this.pipeline),this.webGPU.renderPass.setVertexBuffer(0,this.vertexBuffer),this.webGPU.renderPass.setVertexBuffer(1,this.colorBuffer),this.webGPU.renderPass.setBindGroup(0,this.uniformBindGroup),this.webGPU.renderPass.setBindGroup(1,this.uniformBindGroup1),this.webGPU.renderPass.draw(this.numberOfVertices),this.t+=.01)}constructor(e){super(e),this.isRenderable=!1,this.numberOfVertices=0,this.isAnimation=!1,this.translation=h.al(0,0,0),this.rotation=h.al(0,0,0),this.t=0,this.initPipeline()}}class B{async init(){await (0,U.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then(e=>{for(let t=0;t<e.features.length;++t)this.streetOSM.push(e.features[t].geometry.coordinates);this.renderLines(this.streetOSM,[0,1,1])})}constructor(){this.streetOSM=[],this.renderLines=(e,t)=>{let i=[],r=[],s=[],n=0,a=0,o=0;for(let h=0;h<e.length;++h){let c=e[h];for(let e=0;e<c.length;++e)for(let h=0;h<c[e].length-1;++h){let[u,l]=(0,U.MercatorProjection)(c[e][h][0],c[e][h][1]),[d,p]=(0,U.MercatorProjection)(c[e][h+1][0],c[e][h+1][1]);n+=u,a+=l,o+=1;let f=(u-15478749.591872748)*1e-4,m=(l-4766690.415614613)*1e-4,v=(d-15478749.591872748)*1e-4,P=(p-4766690.415614613)*1e-4;i.push(f,m,0),r.push(t[0],t[1],t[2]),i.push(v,P,0),r.push(t[0],t[1],t[2]),h<c[e].length-1&&s.push(Math.floor(i.length/3)-1,Math.floor(i.length/3))}}console.log(i),console.log(n/o,a/o),this.pos=new Float32Array(i.flat()),this.colors=new Float32Array(r.flat())}}}class C extends G{async initPipeline(){this.geometry=new B,await this.geometry.init(),console.log(this.geometry),this.numberOfVertices=this.geometry.pos.length/3,this.vertexBuffer=b(this.webGPU.device,this.geometry.pos),this.colorBuffer=b(this.webGPU.device,this.geometry.colors);let e='export default "#define GLSLIFY 1\\n// vertex shader\\n\\nstruct Uniforms {\\n    mvpMatrix : mat4x4<f32>,\\n    // uniform Mouse : vec4<f32>; \\n\\n};\\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\\n\\n// @binding(1) @group(0) var<uniform> u_mouse : Uniforms;\\n\\n// [[block]]\\nstruct MouseData {\\n    mousePosition : vec3<f32>\\n};\\n// [[group(0), binding(0)]]\\n@binding(0) @group(1) var<uniform> mouseData: MouseData;\\n@binding(0) @group(2) var<uniform> frame : u32;\\n\\nstruct Output {\\n    @builtin(position) Position : vec4<f32>,\\n    @location(0) vColor : vec4<f32>,\\n    @location(1) vPos : vec4<f32>,\\n};\\n\\n@vertex\\nfn vs_main(@location(0) pos: vec4<f32>, @location(1) color: vec4<f32>) -> Output {\\n    var output: Output;\\n    output.Position = uniforms.mvpMatrix * pos;\\n    output.vPos = vec4<f32>(1,1,1,1);\\n\\n    return output;\\n}\\n\\n// fragment shader\\n// [[uniform(0)]] var<vec2<f32>> u_mouse;\\n\\nstruct Input {\\n    @builtin(position) Position : vec4<f32>,\\n    @location(0) vColor : vec4<f32>,\\n    @location(1) vPos : vec4<f32>,\\n};\\n\\n@fragment\\n// fn fs_main(input: Input) -> @location(0) vec4<f32> {\\nfn fs_main(@location(0) vColor: vec4<f32>, @location(1) vPos: vec4<f32>) -> @location(0) vec4<f32> {\\n    // \\n    // var outputColor = vec4<f32>(mouseData, 0.0, 1.0);\\n    // return outputColor;\\n    // if (mouseData.mousePosition.x > 1) {\\n//    var mouseX = mouseData.mousePosition.x;\\n//     var mouseY = mouseData.mousePosition.y;\\n//     // }\\n//     if (mouseX > 1 ) {\\n//         mouseX = 1;\\n//     }\\n\\n    // input.position.xy;\\n\\n    // var len = distance(pos.xy, mouseData.mousePosition.xy);\\n    // color.x = len;\\n    // output.vColor = color;\\n\\n    var outputColor: vec4<f32> = vec4<f32>(mouseData.mousePosition.xy , sin(mouseData.mousePosition.z), 1.0);\\n    // var outputColor: vec4<f32> = vec4<f32>(input.position.xy , 1.0, 1.0);\\n    return outputColor;\\n    // return vColor;\\n}\\n";';this.pipeline=this.webGPU.device.createRenderPipeline({layout:"auto",vertex:{module:this.webGPU.device.createShaderModule({code:e}),entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]},{arrayStride:12,attributes:[{shaderLocation:1,format:"float32x3",offset:0}]}]},fragment:{module:this.webGPU.device.createShaderModule({code:e}),entryPoint:"fs_main",targets:[{format:this.webGPU.format}]},primitive:{topology:this.webGPU.PrimitiveTopology.LineList},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.modelMatrix=o.Ue(),this.rotation=h.al(0,0,0),this.uniformBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.frameBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.uniformBindGroup=this.webGPU.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer,offset:0,size:64}}]}),this.uniformBindGroup1=this.webGPU.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.mouseBuffer}}]}),this.textureView=this.webGPU.ctx.getCurrentTexture().createView();let t=this.webGPU.device.createTexture({size:[this.webGPU.ctx.canvas.width,this.webGPU.ctx.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:.2,g:.247,b:.314,a:1},loadValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:t.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},this.isRenderable=!0}async render(){this.isRenderable&&(this.webGPU.device.queue.writeBuffer(this.mouseBuffer,0,new Float32Array([this.scene.app.controller.eventController.mNormalized[0],this.scene.app.controller.eventController.mNormalized[1],this.t])),this.webGPU.device.queue.writeBuffer(this.frameBuffer,0,new Float32Array([this.t,0])),w(this.modelMatrix,this.translation,this.rotation),o.Jp(this.modelMatrix,this.webGPU.renderer.cameraController.getMatrix,this.modelMatrix),this.webGPU.device.queue.writeBuffer(this.uniformBuffer,0,this.modelMatrix),this.webGPU.renderPass.setPipeline(this.pipeline),this.webGPU.renderPass.setVertexBuffer(0,this.vertexBuffer),this.webGPU.renderPass.setVertexBuffer(1,this.colorBuffer),this.webGPU.renderPass.setBindGroup(0,this.uniformBindGroup),this.webGPU.renderPass.setBindGroup(1,this.uniformBindGroup1),this.webGPU.renderPass.draw(this.numberOfVertices),this.t+=.01)}constructor(e){super(e),this.isRenderable=!1,this.numberOfVertices=0,this.isAnimation=!1,this.translation=h.al(0,0,0),this.rotation=h.al(0,0,0),this.t=0,this.initPipeline()}}class O extends G{async initPipeline(){let e=V(1.5,70,40);this.pos=null==e?void 0:e.vertexData,this.numberOfVertices=(null==e?void 0:e.vertexData).length/3,this.vertexBuffer=b(this.webGPU.device,null==e?void 0:e.vertexData),this.normalBuffer=b(this.webGPU.device,null==e?void 0:e.normalData),this.uvBuffer=b(this.webGPU.device,null==e?void 0:e.uvData);let t=D();this.pipeline=this.webGPU.device.createRenderPipeline({layout:"auto",vertex:{module:this.webGPU.device.createShaderModule({code:t.vertex}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]}]},fragment:{module:this.webGPU.device.createShaderModule({code:t.fragment}),entryPoint:"main",targets:[{format:this.webGPU.format}]},primitive:{topology:this.webGPU.PrimitiveTopology.PointList},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.modelMatrix=o.Ue(),this.rotation=h.al(.15*Math.PI,0,0),this.uniformBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.uniformBindGroup=this.webGPU.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer,offset:0,size:64}}]}),this.textureView=this.webGPU.ctx.getCurrentTexture().createView();let i=this.webGPU.device.createTexture({size:[this.webGPU.ctx.canvas.width,this.webGPU.ctx.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:.2,g:.247,b:.314,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:i.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}}}render(){this.isAnimation,this.rotation[1]+=.005,w(this.modelMatrix,this.translation,this.rotation),o.Jp(this.modelMatrix,this.webGPU.renderer.cameraController.getMatrix,this.modelMatrix),this.webGPU.device.queue.writeBuffer(this.uniformBuffer,0,this.modelMatrix),this.webGPU.renderPass.setPipeline(this.pipeline),this.webGPU.renderPass.setVertexBuffer(0,this.vertexBuffer),this.webGPU.renderPass.setBindGroup(0,this.uniformBindGroup),this.webGPU.renderPass.draw(this.numberOfVertices),this.t+=.01}constructor(e){super(e),this.numberOfVertices=0,this.isAnimation=!0,this.translation=h.al(0,0,0),this.rotation=h.al(0,0,0),this.t=0,this.initPipeline()}}let D=()=>({vertex:"\n        struct Uniforms {\n            mvpMatrix : mat4x4<f32>,\n        };\n        @binding(0) @group(0) var<uniform> uniforms : Uniforms;\n        \n        @vertex\n        fn main(@location(0) pos: vec4<f32>) ->  @builtin(position) vec4<f32> {\n            return uniforms.mvpMatrix * pos;     \n        }",fragment:"\n        @fragment\n        fn main() -> @location(0) vec4<f32> {\n            return vec4<f32>(1.0, 1.0, 0.0, 1.0);            \n        }"}),V=function(){let e,t,i,r,s,n,a,o,c,u,l,d,p,f,m,v=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,P=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,g=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,w=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0],b=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,U=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(P<2||g<2)return;let x=[];for(let t=0;t<P;t++){let i=[];for(let r=0;r<g;r++)e=A(v,180*t/(P-1),360*r/(g-1),w),i.push(e);x.push(i)}let G=[],M=[],y=[];for(let e=0;e<P-1;e++)for(let P=0;P<g-1;P++)u=x[e][P],l=x[e+1][P],d=x[e+1][P+1],p=x[e][P+1],f=h.Ue(),m=h.Ue(),h.$X(f,d,u),h.$X(m,l,p),G.push([u[0],u[1],u[2],l[0],l[1],l[2],p[0],p[1],p[2],l[0],l[1],l[2],d[0],d[1],d[2],p[0],p[1],p[2]]),M.push([u[0]/v,u[1]/v,u[2]/v,l[0]/v,l[1]/v,l[2]/v,p[0]/v,p[1]/v,p[2]/v,l[0]/v,l[1]/v,l[2]/v,d[0]/v,d[1]/v,d[2]/v,p[0]/v,p[1]/v,p[2]/v]),t=b*(.5+Math.atan2(u[0]/v,u[2]/v)/Math.PI/2),i=b*(.5+Math.atan2(l[0]/v,l[2]/v)/Math.PI/2),r=b*(.5+Math.atan2(d[0]/v,d[2]/v)/Math.PI/2),s=b*(.5+Math.atan2(p[0]/v,p[2]/v)/Math.PI/2),n=U*(.5-Math.asin(u[1]/v)/Math.PI),a=U*(.5-Math.asin(l[1]/v)/Math.PI),o=U*(.5-Math.asin(d[1]/v)/Math.PI),y.push([t,n,i,a,s,c=U*(.5-Math.asin(p[1]/v)/Math.PI),i,a,r,o,s,c]);return{vertexData:new Float32Array(G.flat()),normalData:new Float32Array(M.flat()),uvData:new Float32Array(y.flat())}},A=function(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0],s=Math.sin(t*Math.PI/180);return h.al(e*s*Math.cos(i*Math.PI/180)+r[0],e*Math.cos(t*Math.PI/180)+r[1],-e*s*Math.sin(i*Math.PI/180)+r[2])};class L{async init(){new O(this),new y(this),new C(this)}render(){this.independentPipeline?this.renderObject():this.renderScene(),this.t+=1}renderObject(){for(let e=0;e<this.objects.length;++e)this.objects[e].update(),this.objects[e].render()}renderScene(){this.app.renderer.webGPU.textureView=this.app.renderer.webGPU.ctx.getCurrentTexture().createView(),this.app.renderer.webGPU.renderPassDescription.colorAttachments[0].view=this.app.renderer.webGPU.textureView,this.app.renderer.webGPU.commandEncoder=this.app.renderer.webGPU.device.createCommandEncoder(),this.app.renderer.webGPU.renderPass=this.app.renderer.webGPU.commandEncoder.beginRenderPass(this.app.renderer.webGPU.renderPassDescription);for(let e=0;e<this.objects.length;++e)this.objects[e].update(),this.objects[e].render();this.t,this.app.renderer.webGPU.renderPass.end(),this.app.renderer.webGPU.device.queue.submit([this.app.renderer.webGPU.commandEncoder.finish()])}constructor(e){this.objects=[],this.independentPipeline=!1,this.t=0,this.app=e}}class S{async init(){this.controller.init(),await this.renderer.init(),await this.scene.init()}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}constructor(e){this.divHost=document.getElementById(e),this.renderer=new P(this),this.controller=new s(this),this.scene=new L(this),this.init()}}class E{destroy(){this.app.destroy()}constructor(e){this.app=new S(e)}}}}]);