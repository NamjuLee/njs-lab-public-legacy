(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10064],{15510:function(e){function t(e){return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=15510,e.exports=t},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){},21322:function(e,t,i){"use strict";i.d(t,{P:function(){return n}});var r=i(88405);class n{predict1d(e){return e.mul(this.weights[0]).add(this.bias)}predict2d(e){return e.square().mul(this.weights[1]).add(e.mul(this.weights[0])).add(this.bias)}predict3d(e){return e.pow(r.scalar(3)).mul(this.weights[2]).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict4d(e){return e.pow(r.scalar(4)).mul(this.weights[3]).add(e.pow(r.scalar(3)).mul(this.weights[2])).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict5d(e){return e.pow(r.scalar(5)).mul(this.weights[4]).add(e.pow(r.scalar(4)).mul(this.weights[3])).add(e.pow(r.scalar(3)).mul(this.weights[2])).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict(e){return 5===this.dim?this.predict5d(e):4===this.dim?this.predict4d(e):3===this.dim?this.predict3d(e):2===this.dim?this.predict2d(e):(this.dim,this.predict1d(e))}loss(e,t){return e.sub(t).square().mean()}train(e,t){r.tidy(()=>{let i=r.tensor1d(e),n=r.tensor1d(t);this.optimizer.minimize(()=>this.loss(this.predict(i),n))})}constructor(e=0){this.weights=[],this.dim=3,this.leraningRate=.2,this.dim=e;for(let e=0;e<5;++e){let e=r.variable(r.scalar(2*Math.random()-1));e.print(),this.weights.push(e)}this.bias=r.variable(r.scalar(2*Math.random()-1)),this.optimizer=r.train.adam(this.leraningRate)}}},88876:function(e,t,i){"use strict";i.d(t,{NJSCORE:function(){return o},PolynomialRegression:function(){return s.P},RendererThree:function(){return r.T}});var r=i(14540),n=i(45169);i.o(n,"AStart")&&i.d(t,{AStart:function(){return n.AStart}}),i.o(n,"COLOR_BLENDING")&&i.d(t,{COLOR_BLENDING:function(){return n.COLOR_BLENDING}}),i.o(n,"Graph")&&i.d(t,{Graph:function(){return n.Graph}}),i.o(n,"KNN")&&i.d(t,{KNN:function(){return n.KNN}}),i.o(n,"LinearRegression")&&i.d(t,{LinearRegression:function(){return n.LinearRegression}}),i.o(n,"LinearRegressionGradientDescent")&&i.d(t,{LinearRegressionGradientDescent:function(){return n.LinearRegressionGradientDescent}}),i.o(n,"MercatorProjection")&&i.d(t,{MercatorProjection:function(){return n.MercatorProjection}}),i.o(n,"PolynomialRegression")&&i.d(t,{PolynomialRegression:function(){return n.PolynomialRegression}}),i.o(n,"RGBtoGray")&&i.d(t,{RGBtoGray:function(){return n.RGBtoGray}}),i.o(n,"RendererCanvas")&&i.d(t,{RendererCanvas:function(){return n.RendererCanvas}}),i.o(n,"RendererJSAPI")&&i.d(t,{RendererJSAPI:function(){return n.RendererJSAPI}}),i.o(n,"TypeDithering")&&i.d(t,{TypeDithering:function(){return n.TypeDithering}}),i.o(n,"Vector3")&&i.d(t,{Vector3:function(){return n.Vector3}}),i.o(n,"buildNetwork")&&i.d(t,{buildNetwork:function(){return n.buildNetwork}}),i.o(n,"crossProduct")&&i.d(t,{crossProduct:function(){return n.crossProduct}}),i.o(n,"deepCopy")&&i.d(t,{deepCopy:function(){return n.deepCopy}}),i.o(n,"distanceEuclidean")&&i.d(t,{distanceEuclidean:function(){return n.distanceEuclidean}}),i.o(n,"distanceTo")&&i.d(t,{distanceTo:function(){return n.distanceTo}}),i.o(n,"dithering4_4")&&i.d(t,{dithering4_4:function(){return n.dithering4_4}}),i.o(n,"ditheringFloydSteinberg")&&i.d(t,{ditheringFloydSteinberg:function(){return n.ditheringFloydSteinberg}}),i.o(n,"getArrayBinaryImgFromCtx")&&i.d(t,{getArrayBinaryImgFromCtx:function(){return n.getArrayBinaryImgFromCtx}}),i.o(n,"getCSVFromURL")&&i.d(t,{getCSVFromURL:function(){return n.getCSVFromURL}}),i.o(n,"getCheckBox")&&i.d(t,{getCheckBox:function(){return n.getCheckBox}}),i.o(n,"getImgFromURL")&&i.d(t,{getImgFromURL:function(){return n.getImgFromURL}}),i.o(n,"getJSONFromURL")&&i.d(t,{getJSONFromURL:function(){return n.getJSONFromURL}}),i.o(n,"getLineSeg")&&i.d(t,{getLineSeg:function(){return n.getLineSeg}}),i.o(n,"getRandomHex")&&i.d(t,{getRandomHex:function(){return n.getRandomHex}}),i.o(n,"getSlider")&&i.d(t,{getSlider:function(){return n.getSlider}}),i.o(n,"getUUID")&&i.d(t,{getUUID:function(){return n.getUUID}}),i.o(n,"hex2RGBA")&&i.d(t,{hex2RGBA:function(){return n.hex2RGBA}}),i.o(n,"isInsideOfVecs")&&i.d(t,{isInsideOfVecs:function(){return n.isInsideOfVecs}}),i.o(n,"normalize")&&i.d(t,{normalize:function(){return n.normalize}}),i.o(n,"reflect")&&i.d(t,{reflect:function(){return n.reflect}}),i.o(n,"remap")&&i.d(t,{remap:function(){return n.remap}}),i.o(n,"shuffleArray")&&i.d(t,{shuffleArray:function(){return n.shuffleArray}});var s=i(21322),o=i(8483)},14540:function(e,t,i){"use strict";i.d(t,{T:function(){return s}});var r=i(97776),n=i(78252);class s{initCanvas(){this.scene=new r.xsS,this.scene.background=new r.Ilk(0),this.scene.castShadow=!0,this.renderer=new r.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(this.hostDiv.clientWidth/this.hostDiv.clientHeight),this.renderer.domElement.id="Three",this.renderer.domElement.style.position="absolute",this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight),this.hostDiv.appendChild(this.renderer.domElement),this.camera=new r.cPb(30,this.hostDiv.clientWidth/this.hostDiv.clientHeight,1,5e3),this.controls=new n.OrbitControls(this.camera,this.renderer.domElement),this.camera.position.set(0,0,5),this.controls.update(),this.canvas=this.renderer.domElement,this.init()}init(){this.eventBind()}eventBind(){this.renderer.domElement.onmousedown=e=>this.mouseDown(e),this.renderer.domElement.onmouseup=e=>this.mouseUp(e),this.renderer.domElement.onmousemove=e=>this.mouseMove(e),this.renderer.domElement.addEventListener("click",e=>this.mouseClick(e)),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){this.camera.aspect=this.hostDiv.clientWidth/this.hostDiv.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight)}start(){this.loop()}mouseDown(e){}mouseUp(e){}mouseClick(e){}mouseDClick(e){}mouseMove(e){}mouseDrag(e){}update(e){}destroy(){for(window.removeEventListener("resize",()=>this.onWindowResize()),cancelAnimationFrame(this.requestFrame),this.requestFrame=void 0;this.hostDiv.lastChild;)this.hostDiv.removeChild(this.hostDiv.lastChild)}constructor(e){this.t=0,this.requestFrame=void 0,this.loop=()=>{this.requestFrame=requestAnimationFrame(this.loop),this.controls.update(),this.update(this.scene),this.renderer.render(this.scene,this.camera),this.t+=.01},this.hostDiv=document.getElementById(e),this.initCanvas()}}},68805:function(e,t,i){"use strict";i.r(t),i.d(t,{Solution:function(){return s}});var r=i(88876),n=i(45169);class s extends r.RendererJSAPI{initPost(){(0,n.getCSVFromURL)("/static/data/EN_flower_dataset_clean.csv").then(e=>{let t=0,i=0,r=0,n=e.split(/\r\n|\r|\n/g);for(let e=1;e<n.length;++e){let s=n[e].split(","),o=+s[4],d=+s[5];(0!==o||0!==d)&&(this.pts.push([o,d]),r+=o,i+=d,t++)}this.center(r/t,i/t),this.zoom(11)})}render(e){e.globalCompositeOperation="screen";for(let t=0;t<this.pts.length;++t){let i=this.toScreen(this.pts[t][0],this.pts[t][1]);o(e,i[0],i[1],this.time+3,"rgba(255, 0, 0, 0.85)")}}keyDown(e){}mouseDown(e,t){}mouseUp(e,t){}mouseClick(e,t){let i=this.toMap(e,t);this.pts.push(i)}mouseMove(e,t){}constructor(e){super(e),this.pts=[]}}let o=(e,t,i,r,n)=>{e.fillStyle=n,e.beginPath(),e.arc(t,i,(Math.sin(.8*r)+4)*2,0,2*Math.PI),e.closePath(),e.fill()}}}]);