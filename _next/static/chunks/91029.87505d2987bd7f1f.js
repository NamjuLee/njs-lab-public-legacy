(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91029],{15510:function(e){function t(e){return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=15510,e.exports=t},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){},21322:function(e,t,i){"use strict";i.d(t,{P:function(){return s}});var n=i(88405);class s{predict1d(e){return e.mul(this.weights[0]).add(this.bias)}predict2d(e){return e.square().mul(this.weights[1]).add(e.mul(this.weights[0])).add(this.bias)}predict3d(e){return e.pow(n.scalar(3)).mul(this.weights[2]).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict4d(e){return e.pow(n.scalar(4)).mul(this.weights[3]).add(e.pow(n.scalar(3)).mul(this.weights[2])).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict5d(e){return e.pow(n.scalar(5)).mul(this.weights[4]).add(e.pow(n.scalar(4)).mul(this.weights[3])).add(e.pow(n.scalar(3)).mul(this.weights[2])).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict(e){return 5===this.dim?this.predict5d(e):4===this.dim?this.predict4d(e):3===this.dim?this.predict3d(e):2===this.dim?this.predict2d(e):(this.dim,this.predict1d(e))}loss(e,t){return e.sub(t).square().mean()}train(e,t){n.tidy(()=>{let i=n.tensor1d(e),s=n.tensor1d(t);this.optimizer.minimize(()=>this.loss(this.predict(i),s))})}constructor(e=0){this.weights=[],this.dim=3,this.leraningRate=.2,this.dim=e;for(let e=0;e<5;++e){let e=n.variable(n.scalar(2*Math.random()-1));e.print(),this.weights.push(e)}this.bias=n.variable(n.scalar(2*Math.random()-1)),this.optimizer=n.train.adam(this.leraningRate)}}},88876:function(e,t,i){"use strict";i.d(t,{NJSCORE:function(){return o},PolynomialRegression:function(){return r.P},RendererThree:function(){return n.T}});var n=i(14540),s=i(45169);i.o(s,"AStart")&&i.d(t,{AStart:function(){return s.AStart}}),i.o(s,"COLOR_BLENDING")&&i.d(t,{COLOR_BLENDING:function(){return s.COLOR_BLENDING}}),i.o(s,"Graph")&&i.d(t,{Graph:function(){return s.Graph}}),i.o(s,"KNN")&&i.d(t,{KNN:function(){return s.KNN}}),i.o(s,"LinearRegression")&&i.d(t,{LinearRegression:function(){return s.LinearRegression}}),i.o(s,"LinearRegressionGradientDescent")&&i.d(t,{LinearRegressionGradientDescent:function(){return s.LinearRegressionGradientDescent}}),i.o(s,"MercatorProjection")&&i.d(t,{MercatorProjection:function(){return s.MercatorProjection}}),i.o(s,"PolynomialRegression")&&i.d(t,{PolynomialRegression:function(){return s.PolynomialRegression}}),i.o(s,"RGBtoGray")&&i.d(t,{RGBtoGray:function(){return s.RGBtoGray}}),i.o(s,"RendererCanvas")&&i.d(t,{RendererCanvas:function(){return s.RendererCanvas}}),i.o(s,"RendererJSAPI")&&i.d(t,{RendererJSAPI:function(){return s.RendererJSAPI}}),i.o(s,"TypeDithering")&&i.d(t,{TypeDithering:function(){return s.TypeDithering}}),i.o(s,"Vector3")&&i.d(t,{Vector3:function(){return s.Vector3}}),i.o(s,"buildNetwork")&&i.d(t,{buildNetwork:function(){return s.buildNetwork}}),i.o(s,"crossProduct")&&i.d(t,{crossProduct:function(){return s.crossProduct}}),i.o(s,"deepCopy")&&i.d(t,{deepCopy:function(){return s.deepCopy}}),i.o(s,"distanceEuclidean")&&i.d(t,{distanceEuclidean:function(){return s.distanceEuclidean}}),i.o(s,"distanceTo")&&i.d(t,{distanceTo:function(){return s.distanceTo}}),i.o(s,"dithering4_4")&&i.d(t,{dithering4_4:function(){return s.dithering4_4}}),i.o(s,"ditheringFloydSteinberg")&&i.d(t,{ditheringFloydSteinberg:function(){return s.ditheringFloydSteinberg}}),i.o(s,"getArrayBinaryImgFromCtx")&&i.d(t,{getArrayBinaryImgFromCtx:function(){return s.getArrayBinaryImgFromCtx}}),i.o(s,"getCSVFromURL")&&i.d(t,{getCSVFromURL:function(){return s.getCSVFromURL}}),i.o(s,"getCheckBox")&&i.d(t,{getCheckBox:function(){return s.getCheckBox}}),i.o(s,"getImgFromURL")&&i.d(t,{getImgFromURL:function(){return s.getImgFromURL}}),i.o(s,"getJSONFromURL")&&i.d(t,{getJSONFromURL:function(){return s.getJSONFromURL}}),i.o(s,"getLineSeg")&&i.d(t,{getLineSeg:function(){return s.getLineSeg}}),i.o(s,"getRandomHex")&&i.d(t,{getRandomHex:function(){return s.getRandomHex}}),i.o(s,"getSlider")&&i.d(t,{getSlider:function(){return s.getSlider}}),i.o(s,"getUUID")&&i.d(t,{getUUID:function(){return s.getUUID}}),i.o(s,"hex2RGBA")&&i.d(t,{hex2RGBA:function(){return s.hex2RGBA}}),i.o(s,"isInsideOfVecs")&&i.d(t,{isInsideOfVecs:function(){return s.isInsideOfVecs}}),i.o(s,"normalize")&&i.d(t,{normalize:function(){return s.normalize}}),i.o(s,"reflect")&&i.d(t,{reflect:function(){return s.reflect}}),i.o(s,"remap")&&i.d(t,{remap:function(){return s.remap}}),i.o(s,"shuffleArray")&&i.d(t,{shuffleArray:function(){return s.shuffleArray}});var r=i(21322),o=i(8483)},14540:function(e,t,i){"use strict";i.d(t,{T:function(){return r}});var n=i(97776),s=i(78252);class r{initCanvas(){this.scene=new n.xsS,this.scene.background=new n.Ilk(0),this.scene.castShadow=!0,this.renderer=new n.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(this.hostDiv.clientWidth/this.hostDiv.clientHeight),this.renderer.domElement.id="Three",this.renderer.domElement.style.position="absolute",this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight),this.hostDiv.appendChild(this.renderer.domElement),this.camera=new n.cPb(30,this.hostDiv.clientWidth/this.hostDiv.clientHeight,1,5e3),this.controls=new s.OrbitControls(this.camera,this.renderer.domElement),this.camera.position.set(0,0,5),this.controls.update(),this.canvas=this.renderer.domElement,this.init()}init(){this.eventBind()}eventBind(){this.renderer.domElement.onmousedown=e=>this.mouseDown(e),this.renderer.domElement.onmouseup=e=>this.mouseUp(e),this.renderer.domElement.onmousemove=e=>this.mouseMove(e),this.renderer.domElement.addEventListener("click",e=>this.mouseClick(e)),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){this.camera.aspect=this.hostDiv.clientWidth/this.hostDiv.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight)}start(){this.loop()}mouseDown(e){}mouseUp(e){}mouseClick(e){}mouseDClick(e){}mouseMove(e){}mouseDrag(e){}update(e){}destroy(){for(window.removeEventListener("resize",()=>this.onWindowResize()),cancelAnimationFrame(this.requestFrame),this.requestFrame=void 0;this.hostDiv.lastChild;)this.hostDiv.removeChild(this.hostDiv.lastChild)}constructor(e){this.t=0,this.requestFrame=void 0,this.loop=()=>{this.requestFrame=requestAnimationFrame(this.loop),this.controls.update(),this.update(this.scene),this.renderer.render(this.scene,this.camera),this.t+=.01},this.hostDiv=document.getElementById(e),this.initCanvas()}}},75885:function(e,t,i){"use strict";i.r(t),i.d(t,{Solution:function(){return s}});var n=i(88876);class s extends n.RendererCanvas{init(){this.graph=new r,this.graph.divLog=this.divText,this.mouseClick(300,300),this.start()}populate(){let e=Math.random()*this.canvas.width,t=Math.random()*this.canvas.height;this.mouseClick(e,t)}render(e){this.needPopulate&&this.populate(),this.graph.render(e),e.beginPath(),e.arc(this.m.x,this.m.y,2,0,6.28),e.closePath(),e.fillStyle="#888",e.fill()}mouseClick(e,t){let i=this.graph.addNode(e,t,0);this.graph.addEdgeClosestByNode(i)}mouseDown(e,t){let i=this.graph.getNodeVec(e,t);this.graph.captured=i}mouseMove(e,t){this.m.x=e,this.m.y=t}mouseDrag(e,t){this.graph.captured&&(this.graph.captured.vec.x=e,this.graph.captured.vec.y=t)}mouseUp(){this.graph.mouseUp()}keyDown(e){console.log(e)}constructor(e){super(document.getElementById(e)),this.m=new h(0,0,0),this.needPopulate=!1,this.canvas.style.position="absolute";let t=document.createElement("div");t.style.position="absolute",this.divHost.appendChild(t);let i=document.createElement("button");i.textContent="run",i.onclick=()=>{this.needPopulate=!this.needPopulate},t.appendChild(i);let n=document.createElement("div");n.textContent="N:0, E:0",t.appendChild(n),this.divText=n;let s=document.createElement("div");s.innerHTML="1 Edge splitting <br> 2 Drag a node ",t.appendChild(s),this.init()}}class r{mouseUp(){this.captured&&this.captured.edges.forEach((e,t)=>{setTimeout(()=>{this.edgeSplitByEdge(e)},100)})}updatePost(){this.divLog.textContent="N:".concat(this.nodes.length,", E:").concat(this.edges.length)}addNode(e,t,i){let n=new d(e,t,0);return this.nodes.push(n),this.updatePost(),n}addEdgeClosestByNode(e){let t=this.getNode(e);t&&this.addEdge(e,t)}addEdge(e,t){let i=new o(e,t);return e.edges.push(i),t.edges.push(i),this.edges.push(i),this.edgeSplitByEdge(i),this.updatePost(),i}edgeSplitByEdge(e){let t=[];for(let i=this.edges.length-1;i>-1;--i){let n=this.edges[i];if(e.n0!==n.n0&&e.n0!==n.n1&&e.n1!==n.n0&&e.n1!==n.n1){let i=u(e,n);if(i){let e=new d(i[0],i[1]);this.nodes.push(e),this.addEdgeSlipt(e,n.n0),this.addEdgeSlipt(e,n.n1),this.removeEdge(n),t.push(e)}}}if(t.length>0){let i=e.n0;t.push(e.n1);let n=t.map(t=>a(t.vec,e.n0.vec)),s=n.map((e,t)=>t).sort((e,t)=>n[e]-n[t]);this.addEdgeSlipt(i,t[s[0]]);for(let e=0;e<s.length-1;++e)this.addEdgeSlipt(t[s[e]],t[s[e+1]]);this.removeEdge(e)}}addEdgeSlipt(e,t){let i=new o(e,t);return e.edges.push(i),t.edges.push(i),this.edges.push(i),i}removeEdge(e){e.n0.removeEdge(e),e.n1.removeEdge(e),this.edges.splice(this.edges.indexOf(e),1)}getNode(e){let t=Number.MAX_VALUE,i=-1;for(let n=0;n<this.nodes.length;++n){if(this.nodes[n]===e)continue;let s=a(this.nodes[n].vec,e.vec);t>s&&(t=s,i=n)}if(i>-1)return this.nodes[i]}getNodeVec(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,n=Number.MAX_VALUE,s=-1,r=new h(e,t);for(let e=0;e<this.nodes.length;++e){let t=a(this.nodes[e].vec,r);n>t&&(n=t,s=e)}if(s>-1&&n<i)return this.nodes[s]}render(e){this.edges.forEach(t=>{t.render(e)}),this.nodes.forEach(t=>{t.render(e)})}constructor(){this.captured=void 0,this.nodes=[],this.edges=[]}}class o{render(e){e.beginPath(),e.moveTo(this.n0.vec.x,this.n0.vec.y),e.lineTo(this.n1.vec.x,this.n1.vec.y),e.strokeStyle="#0f0",e.stroke()}constructor(e,t){this.n0=e,this.n1=t}}class d{removeEdge(e){this.edges.splice(this.edges.indexOf(e),1)}render(e){e.beginPath(),e.arc(this.vec.x,this.vec.y,this.r,0,6.28),e.closePath(),e.fillStyle="#ff0000",e.fill()}constructor(e,t,i=0){this.r=5,this.edges=[],this.vec=new h(e,t,i)}}class h{constructor(e,t,i=0){this.x=e,this.y=t,this.z=i}}let a=(e,t)=>Math.sqrt(c(e,t)),c=(e,t)=>(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z),u=(e,t)=>l(e.n0,e.n1,t.n0,t.n1),l=(e,t,i,n)=>g(e.vec.x,e.vec.y,t.vec.x,t.vec.y,i.vec.x,i.vec.y,n.vec.x,n.vec.y),g=(e,t,i,n,s,r,o,d)=>{if(e===i&&t===n||s===o&&r===d)return;let h=(d-r)*(i-e)-(o-s)*(n-t);if(0===h)return;let a=((o-s)*(t-r)-(d-r)*(e-s))/h,c=((i-e)*(t-r)-(n-t)*(e-s))/h;if(!(a<0)&&!(a>1)&&!(c<0)&&!(c>1))return[e+a*(i-e),t+a*(n-t)]}}}]);