(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91229],{15510:function(t){function e(t){return Promise.resolve().then(function(){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}e.keys=function(){return[]},e.resolve=e,e.id=15510,t.exports=e},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){},21322:function(t,e,i){"use strict";i.d(e,{P:function(){return n}});var s=i(88405);class n{predict1d(t){return t.mul(this.weights[0]).add(this.bias)}predict2d(t){return t.square().mul(this.weights[1]).add(t.mul(this.weights[0])).add(this.bias)}predict3d(t){return t.pow(s.scalar(3)).mul(this.weights[2]).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict4d(t){return t.pow(s.scalar(4)).mul(this.weights[3]).add(t.pow(s.scalar(3)).mul(this.weights[2])).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict5d(t){return t.pow(s.scalar(5)).mul(this.weights[4]).add(t.pow(s.scalar(4)).mul(this.weights[3])).add(t.pow(s.scalar(3)).mul(this.weights[2])).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict(t){return 5===this.dim?this.predict5d(t):4===this.dim?this.predict4d(t):3===this.dim?this.predict3d(t):2===this.dim?this.predict2d(t):(this.dim,this.predict1d(t))}loss(t,e){return t.sub(e).square().mean()}train(t,e){s.tidy(()=>{let i=s.tensor1d(t),n=s.tensor1d(e);this.optimizer.minimize(()=>this.loss(this.predict(i),n))})}constructor(t=0){this.weights=[],this.dim=3,this.leraningRate=.2,this.dim=t;for(let t=0;t<5;++t){let t=s.variable(s.scalar(2*Math.random()-1));t.print(),this.weights.push(t)}this.bias=s.variable(s.scalar(2*Math.random()-1)),this.optimizer=s.train.adam(this.leraningRate)}}},88876:function(t,e,i){"use strict";i.d(e,{NJSCORE:function(){return o},PolynomialRegression:function(){return r.P},RendererThree:function(){return s.T}});var s=i(14540),n=i(45169);i.o(n,"AStart")&&i.d(e,{AStart:function(){return n.AStart}}),i.o(n,"COLOR_BLENDING")&&i.d(e,{COLOR_BLENDING:function(){return n.COLOR_BLENDING}}),i.o(n,"Graph")&&i.d(e,{Graph:function(){return n.Graph}}),i.o(n,"KNN")&&i.d(e,{KNN:function(){return n.KNN}}),i.o(n,"LinearRegression")&&i.d(e,{LinearRegression:function(){return n.LinearRegression}}),i.o(n,"LinearRegressionGradientDescent")&&i.d(e,{LinearRegressionGradientDescent:function(){return n.LinearRegressionGradientDescent}}),i.o(n,"MercatorProjection")&&i.d(e,{MercatorProjection:function(){return n.MercatorProjection}}),i.o(n,"PolynomialRegression")&&i.d(e,{PolynomialRegression:function(){return n.PolynomialRegression}}),i.o(n,"RGBtoGray")&&i.d(e,{RGBtoGray:function(){return n.RGBtoGray}}),i.o(n,"RendererCanvas")&&i.d(e,{RendererCanvas:function(){return n.RendererCanvas}}),i.o(n,"RendererJSAPI")&&i.d(e,{RendererJSAPI:function(){return n.RendererJSAPI}}),i.o(n,"TypeDithering")&&i.d(e,{TypeDithering:function(){return n.TypeDithering}}),i.o(n,"Vector3")&&i.d(e,{Vector3:function(){return n.Vector3}}),i.o(n,"buildNetwork")&&i.d(e,{buildNetwork:function(){return n.buildNetwork}}),i.o(n,"crossProduct")&&i.d(e,{crossProduct:function(){return n.crossProduct}}),i.o(n,"deepCopy")&&i.d(e,{deepCopy:function(){return n.deepCopy}}),i.o(n,"distanceEuclidean")&&i.d(e,{distanceEuclidean:function(){return n.distanceEuclidean}}),i.o(n,"distanceTo")&&i.d(e,{distanceTo:function(){return n.distanceTo}}),i.o(n,"dithering4_4")&&i.d(e,{dithering4_4:function(){return n.dithering4_4}}),i.o(n,"ditheringFloydSteinberg")&&i.d(e,{ditheringFloydSteinberg:function(){return n.ditheringFloydSteinberg}}),i.o(n,"getArrayBinaryImgFromCtx")&&i.d(e,{getArrayBinaryImgFromCtx:function(){return n.getArrayBinaryImgFromCtx}}),i.o(n,"getCSVFromURL")&&i.d(e,{getCSVFromURL:function(){return n.getCSVFromURL}}),i.o(n,"getCheckBox")&&i.d(e,{getCheckBox:function(){return n.getCheckBox}}),i.o(n,"getImgFromURL")&&i.d(e,{getImgFromURL:function(){return n.getImgFromURL}}),i.o(n,"getJSONFromURL")&&i.d(e,{getJSONFromURL:function(){return n.getJSONFromURL}}),i.o(n,"getLineSeg")&&i.d(e,{getLineSeg:function(){return n.getLineSeg}}),i.o(n,"getRandomHex")&&i.d(e,{getRandomHex:function(){return n.getRandomHex}}),i.o(n,"getSlider")&&i.d(e,{getSlider:function(){return n.getSlider}}),i.o(n,"getUUID")&&i.d(e,{getUUID:function(){return n.getUUID}}),i.o(n,"hex2RGBA")&&i.d(e,{hex2RGBA:function(){return n.hex2RGBA}}),i.o(n,"isInsideOfVecs")&&i.d(e,{isInsideOfVecs:function(){return n.isInsideOfVecs}}),i.o(n,"normalize")&&i.d(e,{normalize:function(){return n.normalize}}),i.o(n,"reflect")&&i.d(e,{reflect:function(){return n.reflect}}),i.o(n,"remap")&&i.d(e,{remap:function(){return n.remap}}),i.o(n,"shuffleArray")&&i.d(e,{shuffleArray:function(){return n.shuffleArray}});var r=i(21322),o=i(8483)},14540:function(t,e,i){"use strict";i.d(e,{T:function(){return r}});var s=i(97776),n=i(78252);class r{initCanvas(){this.scene=new s.xsS,this.scene.background=new s.Ilk(0),this.scene.castShadow=!0,this.renderer=new s.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(this.hostDiv.clientWidth/this.hostDiv.clientHeight),this.renderer.domElement.id="Three",this.renderer.domElement.style.position="absolute",this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight),this.hostDiv.appendChild(this.renderer.domElement),this.camera=new s.cPb(30,this.hostDiv.clientWidth/this.hostDiv.clientHeight,1,5e3),this.controls=new n.OrbitControls(this.camera,this.renderer.domElement),this.camera.position.set(0,0,5),this.controls.update(),this.canvas=this.renderer.domElement,this.init()}init(){this.eventBind()}eventBind(){this.renderer.domElement.onmousedown=t=>this.mouseDown(t),this.renderer.domElement.onmouseup=t=>this.mouseUp(t),this.renderer.domElement.onmousemove=t=>this.mouseMove(t),this.renderer.domElement.addEventListener("click",t=>this.mouseClick(t)),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){this.camera.aspect=this.hostDiv.clientWidth/this.hostDiv.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight)}start(){this.loop()}mouseDown(t){}mouseUp(t){}mouseClick(t){}mouseDClick(t){}mouseMove(t){}mouseDrag(t){}update(t){}destroy(){for(window.removeEventListener("resize",()=>this.onWindowResize()),cancelAnimationFrame(this.requestFrame),this.requestFrame=void 0;this.hostDiv.lastChild;)this.hostDiv.removeChild(this.hostDiv.lastChild)}constructor(t){this.t=0,this.requestFrame=void 0,this.loop=()=>{this.requestFrame=requestAnimationFrame(this.loop),this.controls.update(),this.update(this.scene),this.renderer.render(this.scene,this.camera),this.t+=.01},this.hostDiv=document.getElementById(t),this.initCanvas()}}},46391:function(t,e,i){"use strict";i.r(e),i.d(e,{Solution:function(){return d}});var s=i(88876);class n{init(t,e,i,s){this.initGridR(t,e,i,s),this.nodes[0].fixed=!0,this.nodes[9].fixed=!0,this.nodes[this.nodes.length-1].fixed=!0,this.nodes[this.nodes.length-1-9].fixed=!0}updateOptionA(t){this.damping=.1*t}updateOptionB(t){this.timeStep=.05*t}updateOptionC(t){}initGridR(t,e,i,s){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:10,o=i/n+1,d=s/r+1,a=this.nodes.length;for(let i=0;i<r;++i)for(let s=0;s<n;++s){let n=t+0+o*s,r=e+0+d*i;this.addNode(new h(n,r,0),h.zero(),1)}for(let t=0;t<r;++t)for(let e=0;e<n;++e){let i=t*n+e;0!==e&&this.addEdge(this.nodes[a+i-1],this.nodes[a+i]),0!==t&&this.addEdge(this.nodes[a+i-n],this.nodes[a+i])}}clear(){this.nodes=[],this.edges=[]}addNode(t,e,i){let s=new o(t,e,i);return this.nodes.push(s),s}addEdge(t,e){let i=new r(t,e);return this.edges.push(i),i}mouseMove(t,e){this.mouse.x=t,this.mouse.y=e}mouseDClick(t,e){this.mouse.x=t,this.mouse.y=e;let i=this.findNode(this.mouse);i&&(i.fixed=!i.fixed)}mouseDown(t,e){this.mouse.x=t,this.mouse.y=e,this.capture=this.findNode(this.mouse),this.capture&&(this.capture.fixed=!0,this.capture.isCapture=!0)}mouseLeftClick(t,e){}mouseUp(t,e){this.mouse.x=t,this.mouse.y=e,this.capture&&(this.capture.isCapture=!1,this.capture=void 0)}mouseDrag(t,e){this.mouse.x=t,this.mouse.y=e,this.capture&&(this.capture.v.x=t,this.capture.v.y=e)}render(t){for(let e of(this.dt+=.1,this.move(this.mouse.x,this.mouse.y,this.mouse.z,this.damping,0,this.timeStep,this.groundZ,1),this.edges))e.render(t);for(let e of this.nodes)e.render(t,this.mouse)}findNode(t){for(let e of this.nodes)if(e.v.distance(t)<e.m+3)return e}move(t,e,i,s){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.01,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:-10,d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,a=new h(t,e,i);for(let t=0;t<d;++t){for(let t of this.nodes){let e=h.sub(a,t.v),i=e.length();e.normalize(),t.f=h.add(h.scale(e,.1*Math.exp(-.1*i*i)),h.scale(h.YAxis(),n))}for(let t of this.edges)t.applySpringForce();for(let t of this.nodes)t.move(r,s,o)}}constructor(t,e,i,s){this.nodes=[],this.edges=[],this.dt=0,this.mouse=new h(0,0),this.damping=.96,this.gravity=-.032,this.timeStep=.16,this.groundZ=-9.26,this.capture=void 0,this.init(t,e,i,s)}}class r{render(t){t.strokeStyle="#ff0000",h.distance(this.n0.v,this.n1.v)<2*this.targetLength&&(t.strokeStyle="#0000ff"),t.beginPath(),t.moveTo(this.n0.v.x,this.n0.v.y),t.lineTo(this.n1.v.x,this.n1.v.y),t.closePath(),t.stroke()}applySpringForce(){let t=h.sub(this.n1.v,this.n0.v),e=t.length();t.normalize();let i=h.scale(t,(e-this.targetLength)*this.springConstant);this.n0.f=h.add(this.n0.f,i),this.n1.f=h.sub(this.n1.f,i)}constructor(t,e){this.targetLength=0,this.springConstant=.8,this.n0=t,this.n1=e,this.targetLength=1*this.n0.v.distance(this.n1.v)}}class o{move(t,e){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2],this.fixed||this.isCapture)return;this.u.scale(e),this.u.add(h.scale(this.f,t/this.m));let i=h.scale(this.u,t);this.v.x+=i.x,this.v.y+=i.y}render(t,e){t.beginPath(),e.distance(this.v)<this.m+3?(t.fillStyle="#000000",t.arc(this.v.x,this.v.y,this.m+6,0,2*Math.PI)):(t.fillStyle="#f90000",t.arc(this.v.x,this.v.y,this.m+3,0,2*Math.PI)),this.fixed&&(t.fillStyle="#000000",t.arc(this.v.x,this.v.y,this.m+7.5,0,2*Math.PI)),t.closePath(),t.fill()}constructor(t,e,i){this.nNodes=[],this.v=h.zero(),this.f=h.zero(),this.u=h.zero(),this.m=0,this.fixed=!1,this.isCapture=!1,this.v=new h(t.x,t.y,t.z),this.u=new h(e.x,e.y,e.z),this.m=i}}class h{static zero(){return new h(0,0,0)}static YAxis(){return new h(0,1,0)}static distance(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)+(t.z-e.z)*(t.z-e.z))}static add(t,e){return new h(t.x+e.x,t.y+e.y,t.z+e.z)}static sub(t,e){return new h(t.x-e.x,t.y-e.y,t.z-e.z)}static scale(t,e){return new h(t.x*e,t.y*e,t.z*e)}distance(t){return h.distance(new h(this.x,this.y,this.z),t)}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}scale(t){return this.x*=t,this.y*=t,this.z*=t,this}length(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);return t<1e-5?1e-5:t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);return t<1e-4||(this.x=this.x/t,this.y=this.y/t,this.z=this.z/t),this}constructor(t,e,i=0){this.x=0,this.y=0,this.z=0,this.x=t,this.y=e,this.z=i}}class d extends s.RendererCanvas{init(){this.graph=new n(100,100,500,500),this.mouseClick(100,100),this.start()}populate(){let t=Math.random()*this.canvas.width,e=Math.random()*this.canvas.height;this.mouseClick(t,e)}render(t){this.graph.render(t),t.beginPath(),t.arc(this.m.x,this.m.y,3,0,6.28),t.closePath(),t.fillStyle="#888",t.fill()}mouseDown(t,e){this.graph.mouseDown(t,e)}mouseClick(t,e){this.graph.mouseLeftClick(t,e)}mouseMove(t,e){this.m.x=t,this.m.y=e,this.graph.mouseMove(t,e)}mouseDrag(t,e){this.graph.mouseDrag(t,e)}constructor(t){super(document.getElementById(t)),this.m=new h(0,0,0),this.canvas.style.position="absolute",this.init()}}}}]);