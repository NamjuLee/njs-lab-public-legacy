(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88616],{15510:function(e){function t(e){return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=15510,e.exports=t},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){},21322:function(e,t,i){"use strict";i.d(t,{P:function(){return r}});var n=i(88405);class r{predict1d(e){return e.mul(this.weights[0]).add(this.bias)}predict2d(e){return e.square().mul(this.weights[1]).add(e.mul(this.weights[0])).add(this.bias)}predict3d(e){return e.pow(n.scalar(3)).mul(this.weights[2]).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict4d(e){return e.pow(n.scalar(4)).mul(this.weights[3]).add(e.pow(n.scalar(3)).mul(this.weights[2])).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict5d(e){return e.pow(n.scalar(5)).mul(this.weights[4]).add(e.pow(n.scalar(4)).mul(this.weights[3])).add(e.pow(n.scalar(3)).mul(this.weights[2])).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict(e){return 5===this.dim?this.predict5d(e):4===this.dim?this.predict4d(e):3===this.dim?this.predict3d(e):2===this.dim?this.predict2d(e):(this.dim,this.predict1d(e))}loss(e,t){return e.sub(t).square().mean()}train(e,t){n.tidy(()=>{let i=n.tensor1d(e),r=n.tensor1d(t);this.optimizer.minimize(()=>this.loss(this.predict(i),r))})}constructor(e=0){this.weights=[],this.dim=3,this.leraningRate=.2,this.dim=e;for(let e=0;e<5;++e){let e=n.variable(n.scalar(2*Math.random()-1));e.print(),this.weights.push(e)}this.bias=n.variable(n.scalar(2*Math.random()-1)),this.optimizer=n.train.adam(this.leraningRate)}}},88876:function(e,t,i){"use strict";i.d(t,{NJSCORE:function(){return o},PolynomialRegression:function(){return s.P},RendererThree:function(){return n.T}});var n=i(14540),r=i(45169);i.o(r,"AStart")&&i.d(t,{AStart:function(){return r.AStart}}),i.o(r,"COLOR_BLENDING")&&i.d(t,{COLOR_BLENDING:function(){return r.COLOR_BLENDING}}),i.o(r,"Graph")&&i.d(t,{Graph:function(){return r.Graph}}),i.o(r,"KNN")&&i.d(t,{KNN:function(){return r.KNN}}),i.o(r,"LinearRegression")&&i.d(t,{LinearRegression:function(){return r.LinearRegression}}),i.o(r,"LinearRegressionGradientDescent")&&i.d(t,{LinearRegressionGradientDescent:function(){return r.LinearRegressionGradientDescent}}),i.o(r,"MercatorProjection")&&i.d(t,{MercatorProjection:function(){return r.MercatorProjection}}),i.o(r,"PolynomialRegression")&&i.d(t,{PolynomialRegression:function(){return r.PolynomialRegression}}),i.o(r,"RGBtoGray")&&i.d(t,{RGBtoGray:function(){return r.RGBtoGray}}),i.o(r,"RendererCanvas")&&i.d(t,{RendererCanvas:function(){return r.RendererCanvas}}),i.o(r,"RendererJSAPI")&&i.d(t,{RendererJSAPI:function(){return r.RendererJSAPI}}),i.o(r,"TypeDithering")&&i.d(t,{TypeDithering:function(){return r.TypeDithering}}),i.o(r,"Vector3")&&i.d(t,{Vector3:function(){return r.Vector3}}),i.o(r,"buildNetwork")&&i.d(t,{buildNetwork:function(){return r.buildNetwork}}),i.o(r,"crossProduct")&&i.d(t,{crossProduct:function(){return r.crossProduct}}),i.o(r,"deepCopy")&&i.d(t,{deepCopy:function(){return r.deepCopy}}),i.o(r,"distanceEuclidean")&&i.d(t,{distanceEuclidean:function(){return r.distanceEuclidean}}),i.o(r,"distanceTo")&&i.d(t,{distanceTo:function(){return r.distanceTo}}),i.o(r,"dithering4_4")&&i.d(t,{dithering4_4:function(){return r.dithering4_4}}),i.o(r,"ditheringFloydSteinberg")&&i.d(t,{ditheringFloydSteinberg:function(){return r.ditheringFloydSteinberg}}),i.o(r,"getArrayBinaryImgFromCtx")&&i.d(t,{getArrayBinaryImgFromCtx:function(){return r.getArrayBinaryImgFromCtx}}),i.o(r,"getCSVFromURL")&&i.d(t,{getCSVFromURL:function(){return r.getCSVFromURL}}),i.o(r,"getCheckBox")&&i.d(t,{getCheckBox:function(){return r.getCheckBox}}),i.o(r,"getImgFromURL")&&i.d(t,{getImgFromURL:function(){return r.getImgFromURL}}),i.o(r,"getJSONFromURL")&&i.d(t,{getJSONFromURL:function(){return r.getJSONFromURL}}),i.o(r,"getLineSeg")&&i.d(t,{getLineSeg:function(){return r.getLineSeg}}),i.o(r,"getRandomHex")&&i.d(t,{getRandomHex:function(){return r.getRandomHex}}),i.o(r,"getSlider")&&i.d(t,{getSlider:function(){return r.getSlider}}),i.o(r,"getUUID")&&i.d(t,{getUUID:function(){return r.getUUID}}),i.o(r,"hex2RGBA")&&i.d(t,{hex2RGBA:function(){return r.hex2RGBA}}),i.o(r,"isInsideOfVecs")&&i.d(t,{isInsideOfVecs:function(){return r.isInsideOfVecs}}),i.o(r,"normalize")&&i.d(t,{normalize:function(){return r.normalize}}),i.o(r,"reflect")&&i.d(t,{reflect:function(){return r.reflect}}),i.o(r,"remap")&&i.d(t,{remap:function(){return r.remap}}),i.o(r,"shuffleArray")&&i.d(t,{shuffleArray:function(){return r.shuffleArray}});var s=i(21322),o=i(8483)},14540:function(e,t,i){"use strict";i.d(t,{T:function(){return s}});var n=i(97776),r=i(78252);class s{initCanvas(){this.scene=new n.xsS,this.scene.background=new n.Ilk(0),this.scene.castShadow=!0,this.renderer=new n.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(this.hostDiv.clientWidth/this.hostDiv.clientHeight),this.renderer.domElement.id="Three",this.renderer.domElement.style.position="absolute",this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight),this.hostDiv.appendChild(this.renderer.domElement),this.camera=new n.cPb(30,this.hostDiv.clientWidth/this.hostDiv.clientHeight,1,5e3),this.controls=new r.OrbitControls(this.camera,this.renderer.domElement),this.camera.position.set(0,0,5),this.controls.update(),this.canvas=this.renderer.domElement,this.init()}init(){this.eventBind()}eventBind(){this.renderer.domElement.onmousedown=e=>this.mouseDown(e),this.renderer.domElement.onmouseup=e=>this.mouseUp(e),this.renderer.domElement.onmousemove=e=>this.mouseMove(e),this.renderer.domElement.addEventListener("click",e=>this.mouseClick(e)),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){this.camera.aspect=this.hostDiv.clientWidth/this.hostDiv.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight)}start(){this.loop()}mouseDown(e){}mouseUp(e){}mouseClick(e){}mouseDClick(e){}mouseMove(e){}mouseDrag(e){}update(e){}destroy(){for(window.removeEventListener("resize",()=>this.onWindowResize()),cancelAnimationFrame(this.requestFrame),this.requestFrame=void 0;this.hostDiv.lastChild;)this.hostDiv.removeChild(this.hostDiv.lastChild)}constructor(e){this.t=0,this.requestFrame=void 0,this.loop=()=>{this.requestFrame=requestAnimationFrame(this.loop),this.controls.update(),this.update(this.scene),this.renderer.render(this.scene,this.camera),this.t+=.01},this.hostDiv=document.getElementById(e),this.initCanvas()}}},28497:function(e,t,i){"use strict";i.r(t),i.d(t,{Solution:function(){return s}});var n=i(88876);let r=(e,t)=>{let i=document.createElement("div"),n=document.createElement("span");n.textContent=e;let r=document.createElement("input");return r.oninput=e=>t(e),i.append(n),i.append(r),i};class s{compute(e){let t=e=>e.param[0]*e.param[1]+e.param[2],i=new n.NJSCORE.$h(3),r=i.evolution(function(i){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.02,r=t(i);return Math.pow(1-n,Math.abs(r-=e))}),s=i.history;i.historyScore,this.outHis.textContent=JSON.stringify(s),this.out.textContent=JSON.stringify(r)}destroy(){for(;this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}constructor(e){this.divHost=document.getElementById(e);let t=document.createElement("div");t.style.display="flex",this.divHost.append(t);let i=r("A * B + C === Target: ",e=>{let t=+e.target.value;this.compute(t)});t.append(i),this.out=document.createElement("div"),this.out.style.marginTop="10px",this.divHost.append(this.out),this.outHis=document.createElement("div"),this.outHis.style.marginTop="10px",this.divHost.append(this.outHis)}}}}]);