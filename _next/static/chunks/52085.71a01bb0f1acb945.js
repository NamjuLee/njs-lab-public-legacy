(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52085,384],{15510:function(t){function e(t){return Promise.resolve().then(function(){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}e.keys=function(){return[]},e.resolve=e,e.id=15510,t.exports=e},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){},21322:function(t,e,i){"use strict";i.d(e,{P:function(){return r}});var n=i(88405);class r{predict1d(t){return t.mul(this.weights[0]).add(this.bias)}predict2d(t){return t.square().mul(this.weights[1]).add(t.mul(this.weights[0])).add(this.bias)}predict3d(t){return t.pow(n.scalar(3)).mul(this.weights[2]).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict4d(t){return t.pow(n.scalar(4)).mul(this.weights[3]).add(t.pow(n.scalar(3)).mul(this.weights[2])).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict5d(t){return t.pow(n.scalar(5)).mul(this.weights[4]).add(t.pow(n.scalar(4)).mul(this.weights[3])).add(t.pow(n.scalar(3)).mul(this.weights[2])).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict(t){return 5===this.dim?this.predict5d(t):4===this.dim?this.predict4d(t):3===this.dim?this.predict3d(t):2===this.dim?this.predict2d(t):(this.dim,this.predict1d(t))}loss(t,e){return t.sub(e).square().mean()}train(t,e){n.tidy(()=>{let i=n.tensor1d(t),r=n.tensor1d(e);this.optimizer.minimize(()=>this.loss(this.predict(i),r))})}constructor(t=0){this.weights=[],this.dim=3,this.leraningRate=.2,this.dim=t;for(let t=0;t<5;++t){let t=n.variable(n.scalar(2*Math.random()-1));t.print(),this.weights.push(t)}this.bias=n.variable(n.scalar(2*Math.random()-1)),this.optimizer=n.train.adam(this.leraningRate)}}},88876:function(t,e,i){"use strict";i.d(e,{NJSCORE:function(){return o},PolynomialRegression:function(){return s.P},RendererThree:function(){return n.T}});var n=i(14540),r=i(45169);i.o(r,"AStart")&&i.d(e,{AStart:function(){return r.AStart}}),i.o(r,"COLOR_BLENDING")&&i.d(e,{COLOR_BLENDING:function(){return r.COLOR_BLENDING}}),i.o(r,"Graph")&&i.d(e,{Graph:function(){return r.Graph}}),i.o(r,"KNN")&&i.d(e,{KNN:function(){return r.KNN}}),i.o(r,"LinearRegression")&&i.d(e,{LinearRegression:function(){return r.LinearRegression}}),i.o(r,"LinearRegressionGradientDescent")&&i.d(e,{LinearRegressionGradientDescent:function(){return r.LinearRegressionGradientDescent}}),i.o(r,"MercatorProjection")&&i.d(e,{MercatorProjection:function(){return r.MercatorProjection}}),i.o(r,"PolynomialRegression")&&i.d(e,{PolynomialRegression:function(){return r.PolynomialRegression}}),i.o(r,"RGBtoGray")&&i.d(e,{RGBtoGray:function(){return r.RGBtoGray}}),i.o(r,"RendererCanvas")&&i.d(e,{RendererCanvas:function(){return r.RendererCanvas}}),i.o(r,"RendererJSAPI")&&i.d(e,{RendererJSAPI:function(){return r.RendererJSAPI}}),i.o(r,"TypeDithering")&&i.d(e,{TypeDithering:function(){return r.TypeDithering}}),i.o(r,"Vector3")&&i.d(e,{Vector3:function(){return r.Vector3}}),i.o(r,"buildNetwork")&&i.d(e,{buildNetwork:function(){return r.buildNetwork}}),i.o(r,"crossProduct")&&i.d(e,{crossProduct:function(){return r.crossProduct}}),i.o(r,"deepCopy")&&i.d(e,{deepCopy:function(){return r.deepCopy}}),i.o(r,"distanceEuclidean")&&i.d(e,{distanceEuclidean:function(){return r.distanceEuclidean}}),i.o(r,"distanceTo")&&i.d(e,{distanceTo:function(){return r.distanceTo}}),i.o(r,"dithering4_4")&&i.d(e,{dithering4_4:function(){return r.dithering4_4}}),i.o(r,"ditheringFloydSteinberg")&&i.d(e,{ditheringFloydSteinberg:function(){return r.ditheringFloydSteinberg}}),i.o(r,"getArrayBinaryImgFromCtx")&&i.d(e,{getArrayBinaryImgFromCtx:function(){return r.getArrayBinaryImgFromCtx}}),i.o(r,"getCSVFromURL")&&i.d(e,{getCSVFromURL:function(){return r.getCSVFromURL}}),i.o(r,"getCheckBox")&&i.d(e,{getCheckBox:function(){return r.getCheckBox}}),i.o(r,"getImgFromURL")&&i.d(e,{getImgFromURL:function(){return r.getImgFromURL}}),i.o(r,"getJSONFromURL")&&i.d(e,{getJSONFromURL:function(){return r.getJSONFromURL}}),i.o(r,"getLineSeg")&&i.d(e,{getLineSeg:function(){return r.getLineSeg}}),i.o(r,"getRandomHex")&&i.d(e,{getRandomHex:function(){return r.getRandomHex}}),i.o(r,"getSlider")&&i.d(e,{getSlider:function(){return r.getSlider}}),i.o(r,"getUUID")&&i.d(e,{getUUID:function(){return r.getUUID}}),i.o(r,"hex2RGBA")&&i.d(e,{hex2RGBA:function(){return r.hex2RGBA}}),i.o(r,"isInsideOfVecs")&&i.d(e,{isInsideOfVecs:function(){return r.isInsideOfVecs}}),i.o(r,"normalize")&&i.d(e,{normalize:function(){return r.normalize}}),i.o(r,"reflect")&&i.d(e,{reflect:function(){return r.reflect}}),i.o(r,"remap")&&i.d(e,{remap:function(){return r.remap}}),i.o(r,"shuffleArray")&&i.d(e,{shuffleArray:function(){return r.shuffleArray}});var s=i(21322),o=i(8483)},14540:function(t,e,i){"use strict";i.d(e,{T:function(){return s}});var n=i(97776),r=i(78252);class s{initCanvas(){this.scene=new n.xsS,this.scene.background=new n.Ilk(0),this.scene.castShadow=!0,this.renderer=new n.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(this.hostDiv.clientWidth/this.hostDiv.clientHeight),this.renderer.domElement.id="Three",this.renderer.domElement.style.position="absolute",this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight),this.hostDiv.appendChild(this.renderer.domElement),this.camera=new n.cPb(30,this.hostDiv.clientWidth/this.hostDiv.clientHeight,1,5e3),this.controls=new r.OrbitControls(this.camera,this.renderer.domElement),this.camera.position.set(0,0,5),this.controls.update(),this.canvas=this.renderer.domElement,this.init()}init(){this.eventBind()}eventBind(){this.renderer.domElement.onmousedown=t=>this.mouseDown(t),this.renderer.domElement.onmouseup=t=>this.mouseUp(t),this.renderer.domElement.onmousemove=t=>this.mouseMove(t),this.renderer.domElement.addEventListener("click",t=>this.mouseClick(t)),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){this.camera.aspect=this.hostDiv.clientWidth/this.hostDiv.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.hostDiv.clientWidth,this.hostDiv.clientHeight)}start(){this.loop()}mouseDown(t){}mouseUp(t){}mouseClick(t){}mouseDClick(t){}mouseMove(t){}mouseDrag(t){}update(t){}destroy(){for(window.removeEventListener("resize",()=>this.onWindowResize()),cancelAnimationFrame(this.requestFrame),this.requestFrame=void 0;this.hostDiv.lastChild;)this.hostDiv.removeChild(this.hostDiv.lastChild)}constructor(t){this.t=0,this.requestFrame=void 0,this.loop=()=>{this.requestFrame=requestAnimationFrame(this.loop),this.controls.update(),this.update(this.scene),this.renderer.render(this.scene,this.camera),this.t+=.01},this.hostDiv=document.getElementById(t),this.initCanvas()}}},384:function(t,e,i){"use strict";i.r(e),i.d(e,{Solution:function(){return m},addData:function(){return f},analyticsFirebase:function(){return c},appFirebase:function(){return h},auth:function(){return l},dbFirestore:function(){return u},deleteData:function(){return v},readData:function(){return g},setData:function(){return p},updateData:function(){return y}});var n=i(15236),r=i(97175),s=i(69842),o=i(5186),a=i(20357);let d={apiKey:a.env.REACT_APP_FIREBASE_API_KEY,authDomain:a.env.REACT_APP_FIREBASE_DOMAIN,projectId:a.env.REACT_APP_FIREBASE_PROJECT_ID,storageBucket:a.env.REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:a.env.REACT_APP_FIREBASE_MEASUREMENT_SENDER_ID,appId:a.env.REACT_APP_FIREBASE_APP_ID,measurementId:a.env.REACT_APP_FIREBASE_MEASUREMENT_ID},h=(0,n.ZF)(d),c=(0,r.IH)(h),l=(0,o.v0)(h),u=(0,s.ad)(h);class m{async getData(){console.log(await g("cities"))}destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}constructor(t){document.getElementById(t)}}let g=async t=>{let e=await (0,s.PL)((0,s.hJ)(u,t)),i=[];return e.forEach(t=>{console.log("".concat(t.id," => ").concat(t.data()));let e={id:t.id,data:t.data()};i.push(e)}),i},p=async(t,e,i)=>{await (0,s.pl)((0,s.JU)(u,t,e),{...i,timestamp:(0,s.Bt)()})},f=async(t,e,i)=>{let n=(0,s.JU)((0,s.hJ)(u,t,e));await (0,s.pl)(n,{...i,timestamp:(0,s.Bt)()})},y=async(t,e,i)=>{let n=(0,s.JU)(u,t,e);await (0,s.r7)(n,i)},v=async(t,e)=>{await (0,s.oe)((0,s.JU)(u,t,e))}},26847:function(t,e,i){"use strict";i.r(e),i.d(e,{Renderer:function(){return o},Solution:function(){return s},getJSONFromURL:function(){return l}});var n=i(88876),r=i(384);class s{destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}constructor(t){this.divHost=document.getElementById(t),this.divHost.style.display="flex",this.divHost.style.alignItems="center";let e=document.createElement("div");e.style.marginLeft="auto",e.style.marginRight="auto",e.style.backgroundColor="#555",e.style.margin="50px",e.style.background="rgba(0,0,0,0)",this.divHost.appendChild(e),this.renderer=new o(e)}}class o extends n.RendererCanvas{async getByAPI(){l("http://127.0.0.1:5001/njs-lab/us-central1/ditheringString?url=https://img.mbn.co.kr/filewww/news/other/2015/12/16/060081001581.png").then(t=>{console.log("ddddd",t)})}update(t){this.img=t,this.canvas.width=this.img.width,this.canvas.height=this.img.height,this.render(this.ctx,this.typeDithering)}render(t,e){if(void 0!==this.img){switch(t.clearRect(0,0,t.canvas.width,t.canvas.height),this.img&&this.ctx.drawImage(this.img,0,0),this.ctx.restore(),e){case n.TypeDithering.FloydSteinberg:(0,n.ditheringFloydSteinberg)(t);break;case n.TypeDithering.BayerOrderedDithering:(0,n.dithering4_4)(t)}this.isStatic=!0}}constructor(t){super(t),this.img=void 0,this.rotation=0,this.m=[0,0],this.switch=!0,this.typeDithering=n.TypeDithering.FloydSteinberg,this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.canvas.style.position="relative",this.canvas.style.width="100%",this.canvas.style.height="100%",(0,n.getImgFromURL)("https://www.glenstone.org/wp-content/uploads/2018/07/AV_Landscape-Hero-Contour-2993-1276x800.jpg").then(t=>{t&&(this.img=t,this.img.onload=e=>{this.update(t)})});let e=document.createElement("input");e.value="https://raw.githubusercontent.com/NamjuLee/data/master/img/person/HaminHaram.jpg",e.addEventListener("keydown",t=>{"Enter"===t.code&&(0,n.getImgFromURL)(e.value).then(t=>{t&&(this.img=t,this.img.onload=e=>{this.update(t)})})}),this.divHost.appendChild(e);let i=document.createElement("div");i.style.display="flex",i.style.marginTop="15px",this.divHost.appendChild(i);let s=a(n.TypeDithering.FloydSteinberg,0,2);s.slider.defaultValue="0",this.divHost.appendChild(s.div),s.slider.oninput=()=>{let t=parseInt(s.slider.value);0===t?(this.typeDithering=n.TypeDithering.FloydSteinberg,s.text.textContent=n.TypeDithering.FloydSteinberg):1===t?(this.typeDithering=n.TypeDithering.BayerOrderedDithering,s.text.textContent=n.TypeDithering.BayerOrderedDithering):(this.typeDithering=n.TypeDithering.None,s.text.textContent=n.TypeDithering.None),this.render(this.ctx,this.typeDithering)};let o=d(t=>{this.img=t,this.canvas.width=this.img.width,this.canvas.height=this.img.height,this.render(this.ctx,this.typeDithering)});i.appendChild(o);let l=document.createElement("div");i.appendChild(l),l.style.width="100px",l.style.background="#fff",l.style.paddingRight="50px",l.contentEditable="true",l.textContent="id";let u=document.createElement("div");i.appendChild(u),u.textContent="Base64 to clipboard",u.style.paddingRight="50px",u.onclick=()=>{let t=this.ctx.canvas.toDataURL();this.getByAPI(),c(t),(0,r.setData)("image",l.textContent,{base64:t})};let m=document.createElement("div");i.appendChild(m),m.textContent="Download",m.style.paddingLeft="50px",m.style.paddingRight="50px",m.onclick=()=>{h((0,n.getArrayBinaryImgFromCtx)(this.ctx))},this.start()}}let a=(t,e,i)=>{let n=document.createElement("div");n.style.display="flex";let r=document.createElement("input");r.type="range",r.min="".concat(e),r.max="".concat(i);let s=document.createElement("div");return s.textContent=t,s.style.color="#aaa",n.appendChild(r),n.appendChild(s),{div:n,slider:r,text:s}},d=t=>{let e=document.createElement("input");return e.type="file",e.onchange=e=>{if(e.target.files){let n=e.target.files[0];var i=new FileReader;i.readAsDataURL(n),i.onloadend=e=>{let i=new Image;i.src=e.target.result,i.onload=e=>{t(i)}}}},e},h=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"img.txt",i=new Blob(t,{type:"text/plain"}),n=document.createElement("a");n.download=e,n.href=URL.createObjectURL(i),n.click(),URL.revokeObjectURL(n.href)},c=async t=>{try{await navigator.clipboard.writeText(t),console.log("Content copied to clipboard")}catch(t){console.error("Failed to copy: ",t)}},l=async t=>await await (await fetch(t)).text}}]);