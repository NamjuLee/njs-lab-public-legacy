(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32642,18342],{15510:function(t){function e(t){return Promise.resolve().then(function(){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}e.keys=function(){return[]},e.resolve=e,e.id=15510,t.exports=e},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){},21322:function(t,e,i){"use strict";i.d(e,{P:function(){return r}});var s=i(88405);class r{predict1d(t){return t.mul(this.weights[0]).add(this.bias)}predict2d(t){return t.square().mul(this.weights[1]).add(t.mul(this.weights[0])).add(this.bias)}predict3d(t){return t.pow(s.scalar(3)).mul(this.weights[2]).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict4d(t){return t.pow(s.scalar(4)).mul(this.weights[3]).add(t.pow(s.scalar(3)).mul(this.weights[2])).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict5d(t){return t.pow(s.scalar(5)).mul(this.weights[4]).add(t.pow(s.scalar(4)).mul(this.weights[3])).add(t.pow(s.scalar(3)).mul(this.weights[2])).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict(t){return 5===this.dim?this.predict5d(t):4===this.dim?this.predict4d(t):3===this.dim?this.predict3d(t):2===this.dim?this.predict2d(t):(this.dim,this.predict1d(t))}loss(t,e){return t.sub(e).square().mean()}train(t,e){s.tidy(()=>{let i=s.tensor1d(t),r=s.tensor1d(e);this.optimizer.minimize(()=>this.loss(this.predict(i),r))})}constructor(t=0){this.weights=[],this.dim=3,this.leraningRate=.2,this.dim=t;for(let t=0;t<5;++t){let t=s.variable(s.scalar(2*Math.random()-1));t.print(),this.weights.push(t)}this.bias=s.variable(s.scalar(2*Math.random()-1)),this.optimizer=s.train.adam(this.leraningRate)}}},88876:function(t,e,i){"use strict";i.d(e,{NJSCORE:function(){return o},PolynomialRegression:function(){return n.P},RendererThree:function(){return s.T}});var s=i(14540),r=i(45169);i.o(r,"AStart")&&i.d(e,{AStart:function(){return r.AStart}}),i.o(r,"COLOR_BLENDING")&&i.d(e,{COLOR_BLENDING:function(){return r.COLOR_BLENDING}}),i.o(r,"Graph")&&i.d(e,{Graph:function(){return r.Graph}}),i.o(r,"KNN")&&i.d(e,{KNN:function(){return r.KNN}}),i.o(r,"LinearRegression")&&i.d(e,{LinearRegression:function(){return r.LinearRegression}}),i.o(r,"LinearRegressionGradientDescent")&&i.d(e,{LinearRegressionGradientDescent:function(){return r.LinearRegressionGradientDescent}}),i.o(r,"MercatorProjection")&&i.d(e,{MercatorProjection:function(){return r.MercatorProjection}}),i.o(r,"PolynomialRegression")&&i.d(e,{PolynomialRegression:function(){return r.PolynomialRegression}}),i.o(r,"RGBtoGray")&&i.d(e,{RGBtoGray:function(){return r.RGBtoGray}}),i.o(r,"RendererCanvas")&&i.d(e,{RendererCanvas:function(){return r.RendererCanvas}}),i.o(r,"RendererJSAPI")&&i.d(e,{RendererJSAPI:function(){return r.RendererJSAPI}}),i.o(r,"TypeDithering")&&i.d(e,{TypeDithering:function(){return r.TypeDithering}}),i.o(r,"Vector3")&&i.d(e,{Vector3:function(){return r.Vector3}}),i.o(r,"buildNetwork")&&i.d(e,{buildNetwork:function(){return r.buildNetwork}}),i.o(r,"crossProduct")&&i.d(e,{crossProduct:function(){return r.crossProduct}}),i.o(r,"deepCopy")&&i.d(e,{deepCopy:function(){return r.deepCopy}}),i.o(r,"distanceEuclidean")&&i.d(e,{distanceEuclidean:function(){return r.distanceEuclidean}}),i.o(r,"distanceTo")&&i.d(e,{distanceTo:function(){return r.distanceTo}}),i.o(r,"dithering4_4")&&i.d(e,{dithering4_4:function(){return r.dithering4_4}}),i.o(r,"ditheringFloydSteinberg")&&i.d(e,{ditheringFloydSteinberg:function(){return r.ditheringFloydSteinberg}}),i.o(r,"getArrayBinaryImgFromCtx")&&i.d(e,{getArrayBinaryImgFromCtx:function(){return r.getArrayBinaryImgFromCtx}}),i.o(r,"getCSVFromURL")&&i.d(e,{getCSVFromURL:function(){return r.getCSVFromURL}}),i.o(r,"getCheckBox")&&i.d(e,{getCheckBox:function(){return r.getCheckBox}}),i.o(r,"getImgFromURL")&&i.d(e,{getImgFromURL:function(){return r.getImgFromURL}}),i.o(r,"getJSONFromURL")&&i.d(e,{getJSONFromURL:function(){return r.getJSONFromURL}}),i.o(r,"getLineSeg")&&i.d(e,{getLineSeg:function(){return r.getLineSeg}}),i.o(r,"getRandomHex")&&i.d(e,{getRandomHex:function(){return r.getRandomHex}}),i.o(r,"getSlider")&&i.d(e,{getSlider:function(){return r.getSlider}}),i.o(r,"getUUID")&&i.d(e,{getUUID:function(){return r.getUUID}}),i.o(r,"hex2RGBA")&&i.d(e,{hex2RGBA:function(){return r.hex2RGBA}}),i.o(r,"isInsideOfVecs")&&i.d(e,{isInsideOfVecs:function(){return r.isInsideOfVecs}}),i.o(r,"normalize")&&i.d(e,{normalize:function(){return r.normalize}}),i.o(r,"reflect")&&i.d(e,{reflect:function(){return r.reflect}}),i.o(r,"remap")&&i.d(e,{remap:function(){return r.remap}}),i.o(r,"shuffleArray")&&i.d(e,{shuffleArray:function(){return r.shuffleArray}});var n=i(21322),o=i(8483)},14540:function(t,e,i){"use strict";i.d(e,{T:function(){return n}});var s=i(97776),r=i(78252);class n{initCanvas(){this.scene=new s.xsS,this.scene.background=new s.Ilk(0),this.scene.castShadow=!0,this.renderer=new s.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(this.hostDiv.clientWidth/this.hostDiv.clientHeight),this.renderer.domElement.id="Three",this.renderer.domElement.style.position="absolute",this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight),this.hostDiv.appendChild(this.renderer.domElement),this.camera=new s.cPb(30,this.hostDiv.clientWidth/this.hostDiv.clientHeight,1,5e3),this.controls=new r.OrbitControls(this.camera,this.renderer.domElement),this.camera.position.set(0,0,5),this.controls.update(),this.canvas=this.renderer.domElement,this.init()}init(){this.eventBind()}eventBind(){this.renderer.domElement.onmousedown=t=>this.mouseDown(t),this.renderer.domElement.onmouseup=t=>this.mouseUp(t),this.renderer.domElement.onmousemove=t=>this.mouseMove(t),this.renderer.domElement.addEventListener("click",t=>this.mouseClick(t)),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){this.camera.aspect=this.hostDiv.clientWidth/this.hostDiv.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight)}start(){this.loop()}mouseDown(t){}mouseUp(t){}mouseClick(t){}mouseDClick(t){}mouseMove(t){}mouseDrag(t){}update(t){}destroy(){for(window.removeEventListener("resize",()=>this.onWindowResize()),cancelAnimationFrame(this.requestFrame),this.requestFrame=void 0;this.hostDiv.lastChild;)this.hostDiv.removeChild(this.hostDiv.lastChild)}constructor(t){this.t=0,this.requestFrame=void 0,this.loop=()=>{this.requestFrame=requestAnimationFrame(this.loop),this.controls.update(),this.update(this.scene),this.renderer.render(this.scene,this.camera),this.t+=.01},this.hostDiv=document.getElementById(t),this.initCanvas()}}},86975:function(t,e,i){"use strict";i.r(e),i.d(e,{InteractivePoint:function(){return o},Line:function(){return h},Point:function(){return a},Solution:function(){return n}});var s=i(88876),r=i(45169);class n extends s.RendererJSAPI{initPost(){this.mView.on("drag",t=>{t.stopPropagation()}),this.mView.navigation.mouseWheelZoomEnabled=!1,this.center(-71.102761,42.366946),this.zoom(15),this.ptStart=new o(315,90),this.ptEnd=new o(1268,1120),this.start()}render(t){if(this.lns.map(e=>e.render(t,this.time)),this.pts.map(e=>e.render(t,this.time)),this.path){t.beginPath(),t.moveTo(this.path[0].x,this.path[0].y);for(let e=1;e<this.path.length;++e)t.lineTo(this.path[e].x,this.path[e].y);t.lineWidth=2,t.strokeStyle="#f00",t.stroke()}this.ptStart.Render(t,this.time),this.ptEnd.Render(t,this.time)}mouseDown(t,e){if(this.ptStart.inInside(t,e)){this.captured=this.ptStart;return}if(this.ptEnd.inInside(t,e)){this.captured=this.ptEnd;return}}mouseUp(t,e){this.captured=void 0}mouseDrag(t,e){}mouseClick(t,e){if(void 0===this.previousPt){let i=new a(t,e);this.previousPt=i,this.pts.push(i)}else{let i=new a(t,e);this.pts.push(i),this.lns.push(new h(this.previousPt,i)),this.previousPt=void 0}}mouseMove(t,e){this.captured&&(this.captured.x=t,this.captured.y=e)}constructor(t){super(t),this.pts=[],this.lns=[],this.previousPt=void 0,this.captured=void 0}}class o{Render(t,e){t.beginPath(),t.arc(this.x,this.y,Math.sin(e)+this.r,0,2*Math.PI),t.closePath(),t.fillStyle="#00f",t.fill(),t.strokeStyle="#fff",t.stroke()}inInside(t,e){return(0,r.distanceTo)(t,e,0,this.x,this.y,0)<this.r+2}constructor(t,e){this.r=10,this.x=t,this.y=e}}class h{render(t,e){t.beginPath(),t.moveTo(this.p0.x,this.p0.y),t.lineTo(this.p1.x,this.p1.y),t.closePath(),t.lineWidth=this.lineWidth,t.strokeStyle="#fff",t.stroke()}constructor(t,e){this.lineWidth=2,this.p0=t,this.p1=e}}class a{render(t,e){t.beginPath(),t.arc(this.x,this.y,Math.sin(e)+this.r,0,2*Math.PI),t.closePath(),t.fillStyle="#0f0",t.fill(),t.strokeStyle="#fff",t.stroke()}constructor(t,e){this.z=0,this.r=6,this.x=t,this.y=e}}},5670:function(t,e,i){"use strict";i.r(e),i.d(e,{Solution:function(){return n}});var s=i(88876),r=i(86975);class n extends s.RendererJSAPI{initPost(){this.mView.on("drag",t=>{t.stopPropagation()}),this.mView.navigation.mouseWheelZoomEnabled=!1,this.center(-71.102761,42.366946),this.zoom(15),this.network=new o,this.ptStart=new r.InteractivePoint(315,90),this.ptEnd=new r.InteractivePoint(1268,1120),this.start()}render(t){if(this.lns.map(e=>e.render(t,this.time)),this.pts.map(e=>e.render(t,this.time)),this.network.render(t),this.path){t.beginPath(),t.moveTo(this.path[0].x,this.path[0].y);for(let e=1;e<this.path.length;++e)t.lineTo(this.path[e].x,this.path[e].y);t.lineWidth=2,t.strokeStyle="#f00",t.stroke()}this.ptStart.Render(t,this.time),this.ptEnd.Render(t,this.time)}mouseDown(t,e){if(this.ptStart.inInside(t,e)){this.captured=this.ptStart;return}if(this.ptEnd.inInside(t,e)){this.captured=this.ptEnd;return}}mouseUp(t,e){this.captured=void 0}mouseDrag(t,e){}mouseClick(t,e){if(void 0===this.previousPt){let i=new r.Point(t,e);this.previousPt=i,this.pts.push(i)}else{let i=new r.Point(t,e);this.pts.push(i),this.lns.push(new r.Line(this.previousPt,i)),this.previousPt=void 0;let n=JSON.parse(JSON.stringify(this.lns));console.log((0,s.getLineSeg)(n)),this.network=new o,this.network.addLine(n),this.path=this.network.getPath({x:this.ptStart.x,y:this.ptStart.y,z:0},{x:this.ptEnd.x,y:this.ptEnd.y,z:0}),this.nodeAStart=(0,s.buildNetwork)((0,s.getLineSeg)(n))}}mouseMove(t,e){this.captured&&(this.captured.x=t,this.captured.y=e,this.network.isActivated&&(this.path=this.network.getPath({x:this.ptStart.x,y:this.ptStart.y,z:0},{x:this.ptEnd.x,y:this.ptEnd.y,z:0})))}constructor(t){super(t),this.pts=[],this.lns=[],this.previousPt=void 0,this.captured=void 0,this.nodeAStart=[]}}class o{addLine(t){let e=(0,s.getLineSeg)(t);this.graph.initByLines(e),this.isActivated=!0}render(t){this.graph.edges.map((e,i)=>{t.beginPath(),t.moveTo(e.n0.x,e.n0.y),t.lineTo(e.n1.x,e.n1.y),t.lineWidth=1,t.strokeStyle="#fff",t.stroke()}),this.graph.nodes.map(e=>{t.beginPath(),t.arc(e.x,e.y,5,0,2*Math.PI),t.fillStyle="#fff",t.fill()}),this.graph.nodeOrigin&&(t.beginPath(),t.arc(this.graph.nodeOrigin.x,this.graph.nodeOrigin.y,7,0,2*Math.PI),t.closePath(),t.fillStyle="#f00",t.fill()),this.graph.nodeTarget&&(t.beginPath(),t.arc(this.graph.nodeTarget.x,this.graph.nodeTarget.y,7,0,2*Math.PI),t.closePath(),t.fillStyle="#f00",t.fill())}getPath(t,e){let i=this.graph.findClosestNode(t),s=this.graph.findClosestNode(e);return this.graph.propagationByNode(i),this.graph.backpropagation(s)}constructor(){this.isActivated=!1,this.graph=new s.Graph}}}}]);