(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25762],{15510:function(t){function e(t){return Promise.resolve().then(function(){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}e.keys=function(){return[]},e.resolve=e,e.id=15510,t.exports=e},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){},21322:function(t,e,i){"use strict";i.d(e,{P:function(){return n}});var s=i(88405);class n{predict1d(t){return t.mul(this.weights[0]).add(this.bias)}predict2d(t){return t.square().mul(this.weights[1]).add(t.mul(this.weights[0])).add(this.bias)}predict3d(t){return t.pow(s.scalar(3)).mul(this.weights[2]).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict4d(t){return t.pow(s.scalar(4)).mul(this.weights[3]).add(t.pow(s.scalar(3)).mul(this.weights[2])).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict5d(t){return t.pow(s.scalar(5)).mul(this.weights[4]).add(t.pow(s.scalar(4)).mul(this.weights[3])).add(t.pow(s.scalar(3)).mul(this.weights[2])).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict(t){return 5===this.dim?this.predict5d(t):4===this.dim?this.predict4d(t):3===this.dim?this.predict3d(t):2===this.dim?this.predict2d(t):(this.dim,this.predict1d(t))}loss(t,e){return t.sub(e).square().mean()}train(t,e){s.tidy(()=>{let i=s.tensor1d(t),n=s.tensor1d(e);this.optimizer.minimize(()=>this.loss(this.predict(i),n))})}constructor(t=0){this.weights=[],this.dim=3,this.leraningRate=.2,this.dim=t;for(let t=0;t<5;++t){let t=s.variable(s.scalar(2*Math.random()-1));t.print(),this.weights.push(t)}this.bias=s.variable(s.scalar(2*Math.random()-1)),this.optimizer=s.train.adam(this.leraningRate)}}},88876:function(t,e,i){"use strict";i.d(e,{NJSCORE:function(){return o},PolynomialRegression:function(){return r.P},RendererThree:function(){return s.T}});var s=i(14540),n=i(45169);i.o(n,"AStart")&&i.d(e,{AStart:function(){return n.AStart}}),i.o(n,"COLOR_BLENDING")&&i.d(e,{COLOR_BLENDING:function(){return n.COLOR_BLENDING}}),i.o(n,"Graph")&&i.d(e,{Graph:function(){return n.Graph}}),i.o(n,"KNN")&&i.d(e,{KNN:function(){return n.KNN}}),i.o(n,"LinearRegression")&&i.d(e,{LinearRegression:function(){return n.LinearRegression}}),i.o(n,"LinearRegressionGradientDescent")&&i.d(e,{LinearRegressionGradientDescent:function(){return n.LinearRegressionGradientDescent}}),i.o(n,"MercatorProjection")&&i.d(e,{MercatorProjection:function(){return n.MercatorProjection}}),i.o(n,"PolynomialRegression")&&i.d(e,{PolynomialRegression:function(){return n.PolynomialRegression}}),i.o(n,"RGBtoGray")&&i.d(e,{RGBtoGray:function(){return n.RGBtoGray}}),i.o(n,"RendererCanvas")&&i.d(e,{RendererCanvas:function(){return n.RendererCanvas}}),i.o(n,"RendererJSAPI")&&i.d(e,{RendererJSAPI:function(){return n.RendererJSAPI}}),i.o(n,"TypeDithering")&&i.d(e,{TypeDithering:function(){return n.TypeDithering}}),i.o(n,"Vector3")&&i.d(e,{Vector3:function(){return n.Vector3}}),i.o(n,"buildNetwork")&&i.d(e,{buildNetwork:function(){return n.buildNetwork}}),i.o(n,"crossProduct")&&i.d(e,{crossProduct:function(){return n.crossProduct}}),i.o(n,"deepCopy")&&i.d(e,{deepCopy:function(){return n.deepCopy}}),i.o(n,"distanceEuclidean")&&i.d(e,{distanceEuclidean:function(){return n.distanceEuclidean}}),i.o(n,"distanceTo")&&i.d(e,{distanceTo:function(){return n.distanceTo}}),i.o(n,"dithering4_4")&&i.d(e,{dithering4_4:function(){return n.dithering4_4}}),i.o(n,"ditheringFloydSteinberg")&&i.d(e,{ditheringFloydSteinberg:function(){return n.ditheringFloydSteinberg}}),i.o(n,"getArrayBinaryImgFromCtx")&&i.d(e,{getArrayBinaryImgFromCtx:function(){return n.getArrayBinaryImgFromCtx}}),i.o(n,"getCSVFromURL")&&i.d(e,{getCSVFromURL:function(){return n.getCSVFromURL}}),i.o(n,"getCheckBox")&&i.d(e,{getCheckBox:function(){return n.getCheckBox}}),i.o(n,"getImgFromURL")&&i.d(e,{getImgFromURL:function(){return n.getImgFromURL}}),i.o(n,"getJSONFromURL")&&i.d(e,{getJSONFromURL:function(){return n.getJSONFromURL}}),i.o(n,"getLineSeg")&&i.d(e,{getLineSeg:function(){return n.getLineSeg}}),i.o(n,"getRandomHex")&&i.d(e,{getRandomHex:function(){return n.getRandomHex}}),i.o(n,"getSlider")&&i.d(e,{getSlider:function(){return n.getSlider}}),i.o(n,"getUUID")&&i.d(e,{getUUID:function(){return n.getUUID}}),i.o(n,"hex2RGBA")&&i.d(e,{hex2RGBA:function(){return n.hex2RGBA}}),i.o(n,"isInsideOfVecs")&&i.d(e,{isInsideOfVecs:function(){return n.isInsideOfVecs}}),i.o(n,"normalize")&&i.d(e,{normalize:function(){return n.normalize}}),i.o(n,"reflect")&&i.d(e,{reflect:function(){return n.reflect}}),i.o(n,"remap")&&i.d(e,{remap:function(){return n.remap}}),i.o(n,"shuffleArray")&&i.d(e,{shuffleArray:function(){return n.shuffleArray}});var r=i(21322),o=i(8483)},14540:function(t,e,i){"use strict";i.d(e,{T:function(){return r}});var s=i(97776),n=i(78252);class r{initCanvas(){this.scene=new s.xsS,this.scene.background=new s.Ilk(0),this.scene.castShadow=!0,this.renderer=new s.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(this.hostDiv.clientWidth/this.hostDiv.clientHeight),this.renderer.domElement.id="Three",this.renderer.domElement.style.position="absolute",this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight),this.hostDiv.appendChild(this.renderer.domElement),this.camera=new s.cPb(30,this.hostDiv.clientWidth/this.hostDiv.clientHeight,1,5e3),this.controls=new n.OrbitControls(this.camera,this.renderer.domElement),this.camera.position.set(0,0,5),this.controls.update(),this.canvas=this.renderer.domElement,this.init()}init(){this.eventBind()}eventBind(){this.renderer.domElement.onmousedown=t=>this.mouseDown(t),this.renderer.domElement.onmouseup=t=>this.mouseUp(t),this.renderer.domElement.onmousemove=t=>this.mouseMove(t),this.renderer.domElement.addEventListener("click",t=>this.mouseClick(t)),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){this.camera.aspect=this.hostDiv.clientWidth/this.hostDiv.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight)}start(){this.loop()}mouseDown(t){}mouseUp(t){}mouseClick(t){}mouseDClick(t){}mouseMove(t){}mouseDrag(t){}update(t){}destroy(){for(window.removeEventListener("resize",()=>this.onWindowResize()),cancelAnimationFrame(this.requestFrame),this.requestFrame=void 0;this.hostDiv.lastChild;)this.hostDiv.removeChild(this.hostDiv.lastChild)}constructor(t){this.t=0,this.requestFrame=void 0,this.loop=()=>{this.requestFrame=requestAnimationFrame(this.loop),this.controls.update(),this.update(this.scene),this.renderer.render(this.scene,this.camera),this.t+=.01},this.hostDiv=document.getElementById(t),this.initCanvas()}}},98797:function(t,e,i){"use strict";i.d(e,{B:function(){return n}});var s=i(8483);class n{InitShader(){let t=s.Ui.CreateShader(this.gl,this.gl.VERTEX_SHADER,this.v),e=s.Ui.CreateShader(this.gl,this.gl.FRAGMENT_SHADER,this.f);if(t&&e){this.vShader=t,this.fShader=e;let i=s.Ui.CreateProgram(this.gl,t,e);i&&(this.program=i)}}Render(t){this.vertexs=new Float32Array([-1,-1,1,1,1,1,-1,1,.1,0,0,1,1,-1,.1,0,0,1,-1,1,1,1,1,1,1,-1,.1,0,0,1,1,1,.1,0,0,1]),this.posBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.posBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(this.vertexs),t.STATIC_DRAW),this.posLocAtt=this.gl.getAttribLocation(this.program,"a_position");let e=t.FLOAT,i=6*Float32Array.BYTES_PER_ELEMENT,s=0;t.vertexAttribPointer(this.posLocAtt,2,e,!1,i,s),t.enableVertexAttribArray(this.posLocAtt),t.useProgram(this.program);let n=t.TRIANGLES;s=0,t.drawArrays(n,s,6)}constructor(t,e=100,i=100,s=0,n=1,r=1,o=1){this.v="\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    \n    varying vec4 f_color;\n\n    void main() {\n\n        vec2 mouse_distance = vec2(0,0) - (a_position.xy /vec2(2,2));\n        float red = 1.0 - length(mouse_distance);\n        f_color = vec4(a_position, 0, 1.0);\n    \n        // float dis = distance(vec2(a_position.xy), vec2(0,0));\n\n        // f_color = vec4(dis * 0.6, 0,0,1);\n        gl_Position = vec4( a_position, 0, 1);\n    }\n    ",this.f="\n    precision highp float;\n\n    varying vec4 f_color;\n    \n    void main() {\n        vec2 mouse_distance = vec2(0,0) - (f_color.xy /vec2(5,5));\n\n        float col =  length(mouse_distance*5.);\n        float val = 1.0 - length(mouse_distance*8.);\n        \n        gl_FragColor = vec4(0.19,0.19,0.19, col);\n\n    }\n    ",this.gl=t,this.color=[Math.random(),Math.random(),Math.random(),1],this.InitShader()}}},98720:function(t,e,i){"use strict";i.d(e,{UI:function(){return s}});class s{appendUI(){let t=document.createElement("div");t.style.position="absolute",this.hostDiv.append(t);let e=n("main street");t.append(e.div),e.checkBox.checked=!0,e.checkBox.onchange=()=>{!0===e.checkBox.checked?this.isActive_Paris_main_st=!0:this.isActive_Paris_main_st=!1};let i=n("OSM street");t.append(i.div),i.checkBox.onchange=()=>{!0===i.checkBox.checked?this.isActive_streetOSM=!0:this.isActive_streetOSM=!1};let s=n("treated street");t.append(s.div),s.checkBox.onchange=()=>{!0===s.checkBox.checked?this.isActive_treated_st=!0:this.isActive_treated_st=!1};let o=n("control street");t.append(o.div),o.checkBox.onchange=()=>{!0===o.checkBox.checked?this.isActive_control_st=!0:this.isActive_control_st=!1};let h=n("zones 30");t.append(h.div),h.checkBox.onchange=()=>{!0===h.checkBox.checked?this.isActive_zones_30=!0:this.isActive_zones_30=!1};let a=n("Node");t.append(a.div),a.checkBox.onchange=()=>{!0===a.checkBox.checked?this.isActive_twitter=!0:this.isActive_twitter=!1};let c=r("Month");t.append(c.div),c.slider.onchange=()=>{this.month=+c.slider.value}}constructor(t){this.isActive_high_low_connectedness_user=!1,this.isActive_Paris_main_st=!0,this.isActive_treated_st=!1,this.isActive_control_st=!1,this.isActive_zones_30=!1,this.isActive_streetOSM=!1,this.isActive_twitter=!1,this.month=-1,this.solution=t,this.hostDiv=t.hostDiv,this.appendUI()}}let n=t=>{let e=document.createElement("div");e.style.display="flex";let i=document.createElement("input");i.type="checkbox";let s=document.createElement("div");return s.textContent=t,s.style.color="#aaa",e.appendChild(i),e.appendChild(s),{div:e,checkBox:i}},r=t=>{let e=document.createElement("div");e.style.display="flex";let i=document.createElement("input");i.type="range",i.min="0",i.max="12";let s=document.createElement("div");return s.textContent=t,s.style.color="#aaa",e.appendChild(i),e.appendChild(s),{div:e,slider:i}}},49255:function(t,e,i){"use strict";i.r(e),i.d(e,{Solution:function(){return d}});var s=i(88876),n=i(45169),r=i(98720);class o{render(t,e){this.t+=.1,t.fillStyle=this.color,t.beginPath();let i=e(this.lon,this.lat);t.arc(i[0],i[1],(Math.sin(.8*this.t)+4)*2,0,2*Math.PI),t.closePath(),t.fill()}constructor(t,e){this.t=.1,this.color="rgba(10, 250, 10, 0.8)",this.lon=t,this.lat=e}}class h{render(t){this.active&&this.tweetDataArray.map(e=>((e.month===this.solution.ui.month||this.solution.ui.month<1)&&e.render(t,this.solution.toScreen),0))}constructor(t,e){this.tweetDataArray=[],this.active=!1,this.solution=t,this.domains={userID:new a("user-id"),streetID:new a("street-id"),year:new a("year"),month:new a("month"),day:new a("day")},(0,n.getJSONFromURL)(e).then(t=>{let e=0,i=0,s=0;for(let n=0;n<t.cells.length;++n){let r=t.cells[n],h=+r.lon,a=+r.lat;if(r.noNeighbsLog,0!==h&&0!==a){let t=new o(h,a);this.tweetDataArray.push(t),s+=h,i+=a,e++}this.active=!0}this.solution.center(s/e,i/e),this.solution.zoom(12)})}}class a{compute(t){this.min=t<this.min?t:this.min,this.max=t>this.max?t:this.max}constructor(t){this.min=Number.MAX_VALUE,this.max=Number.MIN_VALUE,this.title=t}}var c=i(98797);class d extends s.RendererJSAPI{initPost(){let t=document.createElement("canvas");t.style.position="absolute",t.style.pointerEvents="none",t.style.mixBlendMode="overlay",t.width=this.mView.container.clientWidth,t.height=this.mView.container.clientHeight,this.mView.container.appendChild(t);let e=t.getContext("webgl");new c.B(e,.5,5).Render(e);let i=document.createElement("canvas");i.id="layer",i.width=this.mView.container.clientWidth,i.height=this.mView.container.clientHeight,i.style.background="rgba(0, 15, 0, 0.4)",i.style.position="absolute",i.style.pointerEvents="none",this.mView.container.appendChild(i),this.ui=new r.UI(this),(0,n.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then(t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates)}),(0,n.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/Paris-main-st.geojson").then(t=>{for(let e=0;e<t.features.length;++e)this.routesMain.push(t.features[e].geometry.coordinates)}),(0,n.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/treated-st.geojson").then(t=>{for(let e=0;e<t.features.length;++e)this.routesTreated.push(t.features[e].geometry.coordinates)}),(0,n.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/control-st.geojson").then(t=>{for(let e=0;e<t.features.length;++e)this.routesControl.push(t.features[e].geometry.coordinates)}),(0,n.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/zones-30.geojson").then(t=>{for(let e=0;e<t.features.length;++e)this.zones30.push(t.features[e].geometry.coordinates);this.start()}),this.dataProcessTweets=new h(this,"https://raw.githubusercontent.com/NamjuLee/data/master/Paris/twitter_data_2010-2015.json")}render(t){t.globalCompositeOperation="screen",this.ui.isActive_streetOSM&&l(t,this.streetOSM,"#00FFFF",.5,this.toScreen),this.ui.isActive_zones_30&&u(t,this.zones30,"#0000ff39",.5,this.toScreen),this.ui.isActive_Paris_main_st&&l(t,this.routesMain,"#00FFFF",.5,this.toScreen),this.ui.isActive_control_st&&l(t,this.routesControl,"#ff0000",.5,this.toScreen),this.ui.isActive_treated_st&&l(t,this.routesTreated,"#00ff00",.5,this.toScreen),this.ui.isActive_twitter&&this.dataProcessTweets.render(t)}keyDown(t){}mouseDown(t,e){}mouseUp(t,e){}mouseClick(t,e){let i=this.toMap(t,e);this.pts.push(i)}mouseMove(t,e){}constructor(t){super(t),this.pts=[],this.streetOSM=[],this.routesMain=[],this.routesTreated=[],this.routesControl=[],this.zones30=[]}}let l=(t,e,i,s,n)=>{t.strokeStyle=i;for(let i=0;i<e.length;++i){let r=e[i];for(let e=0;e<r.length;++e){let i=n(r[e][0][0],r[e][0][1]),o=new Path2D;o.moveTo(i[0],i[1]);for(let t=1;t<r[e].length;++t)i=n(r[e][t][0],r[e][t][1]),o.lineTo(i[0],i[1]);t.lineWidth=s,t.stroke(o)}}},u=(t,e,i,s,n)=>{t.fillStyle=i;for(let i=0;i<e.length;++i){let s=e[i];for(let e=0;e<s.length;++e){let i=s[e];if(1===i.length){let e=i[0],s=e[0],r=s[0],o=s[1],h=n(r,o);t.beginPath(),t.moveTo(h[0],h[1]);for(let i=1;i<e.length;++i)h=n(r=(s=e[i])[0],o=s[1]),t.lineTo(h[0],h[1]);t.closePath(),t.fill()}}}}}}]);