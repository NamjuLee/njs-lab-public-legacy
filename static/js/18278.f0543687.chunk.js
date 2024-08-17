"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[18278],{18278:(t,e,i)=>{i.r(e),i.d(e,{WaterHyacinth:()=>k});var s=i(5483),o=i.n(s);class h{constructor(t){var e=this;this.map=void 0,this.center=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-99.292649,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:39.043903;e.map.setCenter({lat:i,lng:t})},this.toMap=(t,e)=>{const i=this.map.unproject({x:t,y:e});return[i.lng,i.lat]},this.toScreen=(t,e)=>{const i=this.map.project([t,e]);return[i.x,i.y]},this.mouseDown=t=>{},this.mouseUp=t=>{},this.mouseMove=t=>{},this.mouseClick=t=>{},this.mouseDClick=t=>{},this.initMap(t)}initMap(t){o().accessToken="pk.eyJ1IjoiZGVzaWduanUiLCJhIjoiY2xhNGU0YWo4MDlhYzNwdHBwenVvang4eiJ9.P3sX4l_3KjdPeRRbVS1VVg",this.map=new(o().Map)({container:t,zoom:15,center:[-71.093161,42.358871],style:"mapbox://styles/mapbox/dark-v10"}),this.map.dragRotate.disable(),this.map.on("mousemove",(t=>{this.mouseMove(t)})),this.map.on("click",(t=>{this.mouseClick(t)})),this.map.on("mousedown",(t=>{this.mouseDown(t)})),this.map.on("dblclick",(t=>{this.mouseDClick(t)})),this.map.on("mouseup",(t=>{this.mouseUp(t)}));let e=document.getElementsByClassName("mapboxgl-canvas")[0];e.style.position="absolute",e=document.getElementsByClassName("mapboxgl-control-container")[0],e.style.display="none"}get zoom(){return this.map.getZoom()}set zoom(t){this.map.setZoom(t)}}var r=i(28113);class a extends r.Dv{constructor(t){super(t),this.time=0,this.pts=[],this.mouseDown=(t,e)=>{},this.mouseUp=(t,e)=>{},this.mouseDrag=(t,e)=>{},this.canvas.id="mapboxCustom",this.canvas.style.position="absolute",this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.pointerEvents="none",this.start()}render(t){}}class n{constructor(t){this.app=void 0,this.map=void 0,this.canvasCustom=void 0,this.originalZoom=3,this.originalCenter=[-98.292649,39.043903],this.render=t=>{t.globalCompositeOperation="screen",this.app.core.scene.render(t)},this.processEventData=t=>{const e=t.lngLat.lng,i=t.lngLat.lat;return[t.point.x,t.point.y,e,i]},this.app=t,t.divHost.style.position="relative",this.map=new h(t.divHost.id),this.map.mouseClick=t=>this.mouseClick(t),this.map.mouseDown=t=>this.mouseDown(t),this.map.mouseUp=t=>this.mouseUp(t),this.map.mouseMove=t=>this.mouseMove(t),this.canvasCustom=new a(t.divHost),this.canvasCustom.render=this.render}init(){this.zoomOut()}zoomOut(){this.map.zoom=this.originalZoom,this.map.center(this.originalCenter[0],this.originalCenter[1])}keyDown(t){}mouseDown(t){const e=this.processEventData(t);this.app.core.activeCommand.mouseDown(e[0],e[1]),this.canvasCustom.forceRender()}mouseUp(t){const e=this.processEventData(t);this.app.core.activeCommand.mouseUp(e[0],e[1])}mouseClick(t){const e=this.processEventData(t);this.app.core.activeCommand.mouseClick(e[0],e[1])}mouseMove(t){const e=this.processEventData(t);this.app.core.activeCommand.mouseMove(e[0],e[1],e[2],e[3])}}class c{constructor(t){this.solution=void 0,this.solution=t;const e={color:"#fff",background:"rgba(173, 216, 230, 0.2)",backdropFilter:"blur(10px)"};let i=document.createElement("div");i.style.position="absolute",i.style.width="200px",i.style.height="100%",i.style.padding="10px",i.style.color=e.color,i.style.background=e.background,i.style.backdropFilter=e.backdropFilter,this.solution.divHost.append(i);l(i,"Map");l(i,"Zoom out").onclick=()=>{this.solution.core.activeCommand.zoomOut()};l(i," "),l(i,"Addon");l(i,"BoundaryTracer").onclick=()=>{this.solution.addon.appendTracer()}}}const l=(t,e)=>{const i=document.createElement("div");return t.appendChild(i),i.style.borderTop="5px",i.style.margin="5px",i.textContent=e,i};class d{constructor(t){this.core=void 0,this.m=[0,0,0,0],this.core=t}mouseDown(t,e){}mouseUp(t,e){}mouseDrag(t,e){}mouseMove(t,e,i,s){this.m[0]=t,this.m[1]=e,this.m[2]=i,this.m[3]=s,this.core.common.checkHover(t,e)}mouseClick(t,e){if(this.core.app.addon.click(t,e))return;if(this.core.scene.capture)return void this.core.scene.capture.click(t,e);const i=this.core.common.getCloseSite(t,e);1===i.length?this.core.scene.capture=i[0]:i.length>1&&(this.core.common.zoom+=this.core.common.zoom,this.core.common.center(i[0].properties.lon,i[0].properties.lat))}zoomOut(){this.core.app.renderer.zoomOut()}}class p{constructor(t){this.core=void 0,this.toScreen=(t,e)=>this.core.app.renderer.map.toScreen(t,e),this.toMap=(t,e)=>this.core.app.renderer.map.toMap(t,e),this.core=t}getCloseSite(t,e){const i=[];for(let s=0;s<this.core.app.project.sites.length;++s){const o=this.core.app.project.sites[s];(0,r.hI)(o.vec.x,o.vec.y,0,t,e,0)<o.r&&i.push(o)}return i}get zoom(){return this.core.app.renderer.map.zoom}set zoom(t){this.core.app.renderer.map.zoom=t}center(t,e){return this.core.app.renderer.map.center(t,e)}checkHover(t,e){this.core.app.project.sites.forEach((i=>{i.isHover(t,e)}))}}var m=i(87968);class v{constructor(t){this.core=void 0,this.scene=void 0,this.colorArray1=[],this.colorArray2=[],this._capture=void 0,this.core=t}init(){this.colorArray1=[];for(let t=0;t<255;++t){const e=(0,m.getFalseColor)(t/255);this.colorArray1.push(e)}this.colorArray2=[]}render(t){const e=t.canvas.width-300,i=t.canvas.height-50;for(let o=0;o<this.colorArray1.length;++o)t.beginPath(),t.rect(1*o+e,i,1,10),t.closePath(),t.fillStyle="rgba(".concat(this.colorArray1[o][0],", ").concat(this.colorArray1[o][1],", ").concat(this.colorArray1[o][2],", 1)"),t.fill();this.core.app.project.sites.forEach((e=>{e.renderDot(t)})),void 0!==this._capture&&this._capture.render(t),this.core.app.addon.render(t),t.beginPath(),t.font="14px Arial",t.fillStyle="#fff";const s="latitude: ".concat(this.core.activeCommand.m[3].toFixed(4),", longitude: ").concat(this.core.activeCommand.m[2].toFixed(4));if(t.fillText(s,.5*t.canvas.width-100,50),this.capture){const e=this.capture.getLog();t.fillText(e,.5*t.canvas.width-100,80)}}set capture(t){void 0!==this._capture&&(this._capture.isActivated=!1,this._capture.blur()),this._capture=t,void 0!==this._capture&&(this._capture.isActivated=!0,this._capture.focus())}get capture(){return this._capture}}class y{constructor(t){this.app=void 0,this.activeCommand=void 0,this.common=void 0,this.scene=void 0,this.app=t,this.activeCommand=new d(this),this.common=new p(this),this.scene=new v(this)}}class u{constructor(t,e,i){this.BoidContollerWander0=void 0,this.maxForce=1e-4,this.maxVelocity=1e-4,this.maxSpeed=1e-4,this.mass=10,this.isRenderable=!0,this.p=void 0,this.targets=void 0,this.target=void 0,this.targetID=0,this.col=!1,this.desiredVelocity=void 0,this.steering=void 0,this.velocity=new r.P(0,0,0),this.wanderAngle=0,this.CIRCLE_DISTANCE=50,this.CIRCLE_RADIUS=50,this.ANGLE_CHANGE=15,this.t=0,this.MAX_QUEUE_AHEAD=15,this.MAX_QUEUE_RADIUS=10,this.trajectory=[],this.timerTrajectory=0,this.scaleBounding=0,this.boundary=void 0,this.BoidContollerWander0=t,u.list.push(this),this.p=e,i&&(this.boundary=i),this.UpdateTarget()}Update(){this.UpdateVec1()}UpdateTarget(){this.target=this.BoidContollerWander0.site.boundary.getRandomSpot()}UpdateVec1(){this.desiredVelocity=new r.P(this.target.x-this.p.x,this.target.y-this.p.y,this.target.z-this.p.z),this.desiredVelocity.unitize(),this.desiredVelocity.x*=this.maxVelocity,this.desiredVelocity.y*=this.maxVelocity,this.desiredVelocity.z*=this.maxVelocity;let t=this.desiredVelocity.x-this.velocity.x<this.maxForce?this.desiredVelocity.x-this.velocity.x:this.maxForce,e=this.desiredVelocity.y-this.velocity.y<this.maxForce?this.desiredVelocity.y-this.velocity.y:this.maxForce,i=this.desiredVelocity.z-this.velocity.z<this.maxForce?this.desiredVelocity.z-this.velocity.z:this.maxForce;this.steering=new r.P(t/this.mass,e/this.mass,i/this.mass),this.velocity.x=this.velocity.x+this.steering.x<this.maxSpeed?this.velocity.x+this.steering.x:this.maxSpeed,this.velocity.y=this.velocity.y+this.steering.y<this.maxSpeed?this.velocity.y+this.steering.y:this.maxSpeed,this.velocity.z=this.velocity.z+this.steering.z<this.maxSpeed?this.velocity.z+this.steering.z:this.maxSpeed,this.Queue(),this.p.x+=this.velocity.x,this.p.y+=this.velocity.y,this.p.z+=this.velocity.z,this.t+=.01,this.t>3&&(this.t=0,this.UpdateTarget())}UpdateVec0(){this.steering=this.Wander(new r.P(this.velocity.x,this.velocity.y,this.velocity.z)),this.steering.x=this.steering.x<this.maxForce?this.steering.x:this.maxForce,this.steering.y=this.steering.y<this.maxForce?this.steering.y:this.maxForce,this.steering.z=this.steering.z<this.maxForce?this.steering.z:this.maxForce,this.steering.x/=this.mass,this.steering.y/=this.mass,this.steering.z/=this.mass,this.velocity.x+this.steering.x<this.maxSpeed?this.velocity.x=this.velocity.x+this.steering.x:this.velocity.x=this.maxSpeed,this.velocity.y+this.steering.y<this.maxSpeed?this.velocity.y=this.velocity.y+this.steering.y:this.velocity.y=this.maxSpeed,this.velocity.z+this.steering.z<this.maxSpeed?this.velocity.z=this.velocity.z+this.steering.z:this.velocity.z=this.maxSpeed,this.Queue(),this.p.x+=this.velocity.x,this.p.y+=this.velocity.y,this.p.z+=this.velocity.z}Wander(t){let e=new r.P(t.x,t.y,t.z);e.normalize(),e.scale(this.CIRCLE_DISTANCE);let i=new r.P(0,-1);return i.scale(this.CIRCLE_RADIUS),i=this.setAngle(i,this.wanderAngle),this.wanderAngle+=Math.random()*this.ANGLE_CHANGE-.5*this.ANGLE_CHANGE,e.add(i)}setAngle(t,e){let i=t.length();return t.x=Math.cos(e)*i,t.y=Math.sin(e)*i,t}GetNeighborAhead(){var t=void 0,e=this.velocity.clone();e.normalize(),e.scale(this.MAX_QUEUE_AHEAD);let i=this.p.clone().add(e);for(let s=0;s<u.list.length;s++){let e=u.list[s],o=r.P.distanceTo(i,e.p);if(e!==this&&o<=this.MAX_QUEUE_RADIUS){t=e;break}}return t}Queue(){return void 0!==this.GetNeighborAhead()&&this.velocity.scale(.3),new r.P(0,0)}Render(t){this.RenderCircle(t)}RenderDesiredVelocity(t){}RenderCurrentVelocity(t){}RenderCircle(t){const e=this.BoidContollerWander0.site.project.app.core.common.toScreen(this.p.x,this.p.y);this.t+=.05,this.timerTrajectory+=1,this.timerTrajectory%5===0&&(this.trajectory.length>30&&this.trajectory.shift(),this.trajectory.push(new r.P(this.p.x,this.p.y)),this.timerTrajectory=0);for(let i=0;i<this.trajectory.length;++i)t.fillStyle="rgba(100, 100, 100 ,0.1)",t.beginPath(),t.arc(this.trajectory[i].x,this.trajectory[i].y,.2*i,0,6.28),t.closePath(),t.fill();t.strokeStyle="#000000",t.lineWidth=.5,t.fillStyle="#000000",t.beginPath(),t.arc(this.target.x,this.target.y,2.5,0,6.28),t.closePath(),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(e[0],e[1],2.5,0,6.28),t.closePath(),t.fill(),t.beginPath(),t.arc(e[0],e[1],10+5*Math.sin(this.t),0,6.28),t.closePath(),t.stroke(),t.lineWidth=.5,t.strokeStyle="rgba(".concat(255,", ",255,", ",0,", ",1-.07*this.scaleBounding,")"),t.fillStyle="rgba(".concat(255,", ",255,", ",0,", ",1-.07*this.scaleBounding,")"),t.beginPath(),t.arc(e[0],e[1],this.scaleBounding,0,6.28),t.closePath(),t.fill(),t.stroke(),this.scaleBounding+=.2,1-.07*this.scaleBounding<0&&(this.scaleBounding=0)}}u.list=[];class g{constructor(t){this.site=void 0,this.boids=[],this.vsBoundary=void 0,this.site=t,this.boids=[],this.vsBoundary=t.boundary.vsBoundary}AddAgent(t,e){const i=this.site.project.app.core.common.toMap(t,e);console.log(i);let s=new u(this,new r.P(i[0],i[1]),this.vsBoundary);this.boids.push(s)}Update(){for(let t of this.boids)t.Update()}GetPoint(){let t=[];for(let e of this.boids)e.isRenderable&&t.push(e.p);return t}Render(t){}}var x=i(63870);class f{constructor(t,e){this.site=void 0,this.lon=void 0,this.lat=void 0,this.vsBoundary=[],this.pMin=new r.P(180,90,0),this.pMax=new r.P(-180,-90,0),this.pCenter=new r.P(0,0,0),this.ctxTemp=void 0,this.selID=[],this.selVal=0,this.selInside=!1,this.divViz=void 0,this.chartVizWaters=[],this.site=t;for(let s=0;s<e.length;s+=2)this.pCenter.x+=e[s],this.pCenter.y+=e[s+1],e[s]<this.pMin.x&&(this.pMin.x=e[s]),e[s+1]<this.pMin.y&&(this.pMin.y=e[s+1]),e[s]>this.pMax.x&&(this.pMax.x=e[s]),e[s+1]>this.pMax.y&&(this.pMax.y=e[s+1]),this.vsBoundary.push(new r.P(e[s],e[s+1],0));this.pCenter.x/=.2*e.length,this.pCenter.y/=.2*e.length;const i=new Image;i.src="/njs-lab-public/static/data/Watabot/freshPond.jpg",i.crossOrigin="Anonymous",i.onload=()=>{const t=i.width,e=i.height,s=document.createElement("canvas");s.width=t,s.height=e;const o=s.getContext("2d",{willReadFrequently:!0});o.drawImage(i,0,0),this.ctxTemp=o}}getRandomSpot(){let t=(0,r.a2)(Math.random(),0,1,this.pMin.x,this.pMax.x),e=(0,r.a2)(Math.random(),0,1,this.pMin.y,this.pMax.y),i=new r.P(t,e),s=0;for(;!(0,r.X0)(i,this.vsBoundary)&&(i.x=(0,r.a2)(Math.random(),0,1,this.pMin.x,this.pMax.x),i.y=(0,r.a2)(Math.random(),0,1,this.pMin.y,this.pMax.y),!(s++>1e3)););return i}click(t,e){void 0===this.divViz&&this.appendViz()}render(t){if(this.vsBoundary.length<1){let e="#ff0000";this.site.properties.probability<.3&&(e="#00ff00"),t.fillStyle=e,t.beginPath(),t.arc(this.site.vec.x,this.site.vec.y,10,0,2*Math.PI),t.closePath(),t.fill()}else{let e=this.site.project.app.core.common.toScreen(this.vsBoundary[0].x,this.vsBoundary[0].y);t.moveTo(e[0],e[1]);for(let i=1;i<this.vsBoundary.length;i+=1)e=this.site.project.app.core.common.toScreen(this.vsBoundary[i].x,this.vsBoundary[i].y),t.lineTo(e[0],e[1]);t.lineWidth=2,t.strokeStyle="#000000",t.stroke()}const e=20,i=(this.pMax.x-this.pMin.x)/19,s=(this.pMax.y-this.pMin.y)/19,o=this.ctxTemp.canvas.width/19,h=this.ctxTemp.canvas.height/19;let a=Number.MAX_SAFE_INTEGER,n=[0,0];for(let c=0;c<e;++c){const l=this.pMin.x+i*c;for(let i=0;i<e;++i){const e=this.pMin.y+s*i;if((0,r.X0)(new r.P(l,e),this.vsBoundary)){const s=this.site.project.app.core.common.toScreen(l,e);let d=this.ctxTemp.getImageData(c*o,i*h,1,1).data;t.strokeStyle="rgba(".concat(d[0],", ").concat(d[1],", ").concat(d[2],", 1)"),t.beginPath(),t.arc(s[0],s[1],10,0,2*Math.PI),t.stroke();let p=(0,r.hI)(this.site.project.app.core.activeCommand.m[0],this.site.project.app.core.activeCommand.m[1],0,s[0],s[1],0);p<a&&(a=p,n=[c,i],this.selVal=d[0]/255)}}}if(a<10?(this.selInside=!0,this.site.project.updatePopup(this.site.project.app.core.activeCommand.m[0],this.site.project.app.core.activeCommand.m[1])):this.selInside=!1,this.site.project.setHidePopup(this.selInside),this.selInside){this.selID=n;let e=this.ctxTemp.getImageData(n[0]*o,n[1]*h,1,1).data;t.fillStyle="rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", 1)");let r=this.pMin.x+i*n[0],a=this.pMin.y+s*n[1];const c=this.site.project.app.core.common.toScreen(r,a);t.strokeStyle="rgba(255, 255,255, 1)",t.beginPath(),t.arc(c[0],c[1],10,0,2*Math.PI),t.fill()}}appendViz(){this.chartVizWaters=[],this.divViz=[];for(let t=0;t<5;++t){const e=document.createElement("div");e.style.width="".concat(300,"px"),e.style.height="150px",e.style.margin="15px",e.style.position="absolute",e.style.left="".concat(200+310*t,"px"),this.divViz.push(e),this.site.project.app.divHost.appendChild(e),this.chartVizWaters.push(new x.G(e,t))}}destroy(){for(let t=0;t<this.chartVizWaters.length;++t)this.chartVizWaters[t].destroy();for(let t=0;t<this.divViz.length;++t)this.divViz[t].parentElement.removeChild(this.divViz[t]);this.divViz=void 0}}class b{constructor(){this.probability=0,this.lon=void 0,this.lat=void 0,this.zoom=void 0,this.name=void 0}}class C{constructor(t,e){this.project=void 0,this.properties=void 0,this.vec=new r.P(0,0,0),this.r=15,this.boundary=void 0,this.pMin=new r.P(180,90,0),this.pMax=new r.P(-180,-90,0),this.BoidContollerWander0=void 0,this.needAgent=!1,this.isActivated=!1,this.hover=!1,this.project=t,this.properties=new b,this.properties.lon=e.loc[0],this.properties.lat=e.loc[1],this.properties.zoom=e.zoom,this.properties.name=e.name,this.properties.probability=e.probability,this.r=15,this.boundary=new f(this,e.boundary)}initAgent(){this.BoidContollerWander0=new g(this),this.needAgent=!0}focus(){this.project.app.core.common.center(this.properties.lon,this.properties.lat),this.project.app.core.common.zoom=this.properties.zoom}blur(){this.destroy()}getLog(){return"".concat(this.properties.name,", id: ").concat(this.boundary.selID,", probability: ").concat(this.boundary.selVal.toFixed(2))}click(t,e){void 0===this.BoidContollerWander0&&(this.initAgent(),this.BoidContollerWander0.AddAgent(this.vec.x,this.vec.y)),this.boundary.click(t,e),this.BoidContollerWander0&&this.needAgent&&this.BoidContollerWander0.AddAgent(t,e)}isHover(t,e){(0,r.hI)(t,e,0,this.vec.x,this.vec.y,0)<this.r?this.hover=!0:this.hover=!1}renderDot(t){let e=this.project.app.core.common.toScreen(this.properties.lon,this.properties.lat);if(this.vec.x=e[0],this.vec.y=e[1],this.project.app.core.common.zoom<this.properties.zoom-2){let e="#ff0000";this.properties.probability<.3&&(e="#00ff00");let i=1;t.fillStyle=e,t.beginPath(),t.arc(this.vec.x,this.vec.y,2*(Math.sin(.8*i)+4),0,2*Math.PI),t.closePath(),t.fill(),this.hover&&(t.lineWidth=3,t.strokeStyle="#ffffff",t.stroke()),this.hover&&(t.beginPath(),t.font="12px Arial",t.fillText(this.properties.name,this.vec.x+15,this.vec.y))}this.project.app.core.common.zoom<this.properties.zoom-2&&this.project.app.core.scene.capture===this&&(this.project.app.core.scene.capture=void 0)}render(t){this.isActivated&&(this.project.app.core.common.zoom>=this.properties.zoom-2&&this.boundary.render(t),this.BoidContollerWander0&&(this.BoidContollerWander0.Update(),this.BoidContollerWander0.Render(t)))}destroy(){this.boundary.destroy()}}class w{constructor(t,e){this.rawSiteData=void 0,this.app=void 0,this.sites=[],this.divPopup=void 0,this.divText=void 0,this.divTextProb=void 0,this._popup=!1,this.app=t,this.initSite(e)}initSite(t){this.rawSiteData=t;for(let e=0;e<t.length;++e){const i=new C(this,t[e]);this.sites.push(i)}this.divPopup=document.createElement("div"),this.divPopup.style.width="220px",this.divPopup.style.height="70px",this.divPopup.style.zIndex="1",this.divPopup.style.position="absolute",this.divPopup.style.pointerEvents="none",this.divPopup.style.borderRadius="10px",this.divPopup.style.display="none",this.divPopup.style.padding="10px",this.divPopup.style.background="#fff",this.app.divHost.appendChild(this.divPopup),this.divText=document.createElement("div"),this.divText.style.fontWeight="500",this.divText.style.color="#000",this.divText.textContent="Probability of algae bloom",this.divPopup.appendChild(this.divText),this.divTextProb=document.createElement("div"),this.divTextProb.style.fontWeight="500",this.divTextProb.style.color="#000",this.divTextProb.style.fontSize="24px",this.divTextProb.style.textAlign="center",this.divTextProb.textContent="00.00%",this.divPopup.appendChild(this.divTextProb)}updatePopup(t,e){this.divPopup.style.left=t-110+"px",this.divPopup.style.top=e-90+"px"}setHidePopup(t){t!==this._popup&&(this.divPopup.style.display=t?"block":"none",this._popup=t)}}class P{constructor(t,e,i,s){this.scene=void 0,this.divHost=void 0,this.div=void 0,this.ptsGeoTracing=void 0,this.toMap=void 0,this.toScreen=void 0,this.destroyApp=void 0,this.destroy=()=>{this.div.parentElement.removeChild(this.div),this.destroyApp()},this.divHost=t,this.toScreen=i,this.toMap=e,this.destroyApp=s,this.ptsGeoTracing=[],this.initHTML()}initHTML(){const t=document.createElement("div");this.div=t,t.style.left="200px",t.style.width="100px",t.style.height="200px",t.style.padding="10px",t.style.position="absolute",t.style.background="#000",this.divHost.appendChild(t);let e=document.createElement("div");e.style.marginBottom="5px",e.style.width="20px",e.style.height="20px",e.textContent="Tracer",e.style.color="#fff",t.appendChild(e),e=document.createElement("div"),e.style.marginBottom="5px",e.style.height="20px",e.textContent="X",e.style.color="#fff",t.appendChild(e),e.onclick=()=>{this.ptsGeoTracing=[],this.destroy()},e=document.createElement("div"),e.style.marginBottom="5px",e.style.height="20px",e.textContent="Reset",e.style.color="#fff",e.onclick=()=>{this.ptsGeoTracing=[]},t.appendChild(e),e=document.createElement("div"),e.style.marginBottom="5px",e.style.height="20px",e.textContent="Print",e.style.color="#fff",e.onclick=()=>{console.log(this.ptsGeoTracing)},t.appendChild(e)}click(t,e){const i=this.toMap(t,e);console.log("Lon:".concat(i[0],", Lat:").concat(i[1])),this.ptsGeoTracing.push(i[0],i[1])}startCapture(){this.ptsGeoTracing=[]}endCapture(){this.ptsGeoTracing=void 0}render(t){if(void 0!==this.ptsGeoTracing){if(this.ptsGeoTracing.length>3){t.beginPath();let e=this.toScreen(this.ptsGeoTracing[0],this.ptsGeoTracing[1]);t.moveTo(e[0],e[1]);for(let i=2;i<this.ptsGeoTracing.length;i+=2)e=this.toScreen(this.ptsGeoTracing[i],this.ptsGeoTracing[i+1]),t.lineTo(e[0],e[1]);t.lineWidth=2,t.strokeStyle="#000000",t.stroke()}for(let e=0;e<this.ptsGeoTracing.length;e+=2){let i=this.toScreen(this.ptsGeoTracing[e],this.ptsGeoTracing[e+1]);t.beginPath(),t.arc(i[0],i[1],10,0,2*Math.PI),t.closePath(),t.fillStyle="#fff",t.fill()}}}}class z{constructor(t){this.app=void 0,this.tracer=void 0,this.app=t,this.app.param.dev&&this.initDev()}initDev(){this.appendTracer()}appendTracer(){this.tracer=new P(this.app.divHost,this.app.core.common.toMap,this.app.core.common.toScreen,(()=>{this.tracer=void 0}))}click(t,e){return!!this.tracer&&(this.tracer.click(t,e),!0)}render(t){this.tracer&&this.tracer.render(t)}}var M=i(12554);const T=[{name:"Lake, Hills Pond",loc:[-71.16562914640474,42.410989862313016],zoom:18,boundary:[],probability:.2},{name:"Fresh Pond, MA",loc:[-71.149732,42.384607],zoom:15,boundary:[-71.1471427741205,42.38369829310599,-71.1454147151241,42.3832249146333,-71.14483106749,42.3832249146333,-71.144361859028,42.3833770728034,-71.1441215328383,42.383732105164675,-71.14404142410845,42.383918074064034,-71.14333189076628,42.38393498100385,-71.14304578890791,42.38390962107612,-71.14250791563302,42.38439990023337,-71.14218748071345,42.38483100457135,-71.14194715583345,42.385515693014376,-71.1419242679991,42.38611584616517,-71.14195859975062,42.38675825758481,-71.14258802305322,42.38719779779073,-71.14291990319965,42.38732458778373,-71.14453352040498,42.386800521078975,-71.14480817834618,42.386682182643234,-71.1458152574639,42.386614560234314,-71.14628446723574,42.38642014715624,-71.14731443549749,42.386310260185624,-71.1480583005912,42.386825879355264,-71.14865339345197,42.38736685138028,-71.14920271064405,42.38786555599473,-71.14972913869208,42.38809377527334,-71.15045011595143,42.38839806619294,-71.150770550871,42.38855866418817,-71.15119398235481,42.38851640139403,-71.15201795748807,42.38808532284766,-71.152601605122,42.387831745678575,-71.1531280344797,42.38768805126903,-71.15357435379786,42.38762888291559,-71.15443266068266,42.38764578837241,-71.15494764481353,42.387510546041405,-71.15566862272772,42.38729077717622,-71.15596616784842,42.38674135140531,-71.15580595169831,42.38591297834076,-71.15579450647148,42.38537199330331,-71.15533674389097,42.38487326936299,-71.15510786096365,42.38474647441903,-71.15506208529494,42.38436608756697,-71.15518797034836,42.38398569889383,-71.1550048643994,42.383698293105994,-71.15437543978712,42.38314883589375,-71.15383756651222,42.382548654862966,-71.15368879427928,42.382109081622424,-71.15355146596352,42.381661052013705,-71.152897722045,42.38158391447455,-71.15219963196516,42.3816473151721,-71.1516159836764,42.38149092663678,-71.1510380566914,42.38128804386745,-71.15056884888406,42.38108515995885,-71.1502713024538,42.380882275394804,-71.15031135681876,42.38053990659923,-71.1502713024538,42.380205989424546,-71.15002525430553,42.37991856585079,-71.14973915179233,42.37980021492652,-71.1489151773139,42.379817122007765,-71.1484173590588,42.380003102503316,-71.1477135476752,42.38003691703571,-71.14716995244171,42.380015782773704,-71.14683807425982,42.380176401728896,-71.14592826974774,42.380844234617186,-71.14588249276937,42.381038665446106,-71.14597976737502,42.3811739212357,-71.14702690151253,42.381672675046346,-71.14758194000835,42.381985450580224,-71.14785087664579,42.38231935829161,-71.14782798881144,42.382619450861974,-71.14754188629824,42.383080153525164,-71.14754188629824,42.383342202953166,-71.14743888907917,42.38349858687732,-71.14730156010857,42.38364651714675,-71.1471427741205,42.38369829310599],probability:.8},{name:"Lake, Atkinson County",loc:[-82.716073,31.205917],zoom:18,boundary:[1,18],probability:.2}];class k{constructor(t){this.divHost=void 0,this.core=void 0,this.renderer=void 0,this.ui=void 0,this.project=void 0,this.param=void 0,this.addon=void 0,!0===Boolean(M.xf.demo)&&this.init(t)}init(t){this.divHost=t,this.divHost.id="mapboxgl-container",this.param=M.xf,this.renderer=new n(this),this.core=new y(this),this.project=new w(this,T),this.addon=new z(this),this.ui=new c(this),this.renderer.init()}destroy(){if(this.divHost)for(;this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}},63870:(t,e,i)=>{i.d(e,{G:()=>a});var s=i(87968);class o{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.data={},this.day=24,this.scale=.25,this.dataSampling=4,this.margin=25,this.ctx=void 0,this.m=[0,0],this.selVal=0,this.selID=0,this.dataRaw=[],this.index=0,this.id=["mass_concentration_of_blue_green_algae_in_sea_water_rfu (RFU)","chlorophyll_fluorescence (RFU)","sea_water_turbidity (1)","sea_water_temperature (K)","sea_water_ph_reported_on_total_scale (1)"],this.vizData=(t,e,i,o,h,r,a,n)=>{let c=t.canvas.height-a;t.beginPath();let l=a,d=(0,s.remap)(e[0],i[0],i[1],c,a);n=Math.floor((n-a)/o),t.moveTo(l,d);for(let p=1;p<e.length;p+=r){l+=1;const h=a+l*o*r;let d=0+a,m=0;if("mean"==="max"){for(let t=0;t<r;++t)m+=e[p+t];d=m/r*c,d=(0,s.remap)(d,i[0],i[1],c,a),t.lineTo(h,d)}else{let o=!1;for(let t=0;t<r;++t){const i=p+t;i===n&&(o=!0,this.selID=i),m<e[i]&&(m=e[i])}d=(0,s.remap)(m,i[0],i[1],c,a),o&&(this.selVal=d),t.lineTo(h,d)}}t.stroke(),t.save(),t.scale(-1,1),t.fillText(this.dataRaw[this.selID].split(",")[0],10,10),t.restore()},this.ctx=t,this.index=e,document.onkeydown=t=>{this.dataSampling++},(0,s.getCSVFromURL)("/njs-lab-public/static/data/Watabot/obs_104_1928_d047_15c7.csv").then((t=>{const i=t.split(/\r\n|\r|\n/g);this.dataRaw=i;const s=i[0].split(","),o={};let h=!0;for(let e=0;e<s.length;++e)h&&"time (UTC)"===s[e]?(o[s[e]]=[],h=!1):o[s[e]]=new Float32Array(i.length-1);for(let e=1;e<i.length;++e){const t=i[e].split(",");for(let i=0;i<s.length;++i){const h=s.indexOf(s[i]);-1!==h&&(o[s[i]][e-1]=t[h])}}this.data=o;const r=document.createElement("div");r.style.zIndex="1",r.style.color="#000",r.style.fontSize="11px",r.style.position="absolute",r.style.left="10px",r.style.top="5px",r.textContent=this.id[e],this.ctx.canvas.parentElement.appendChild(r),this.render(this.ctx)}))}Offset(t){}wheel(t){t.deltaY<0?this.scale+=.25*this.scale:this.scale-=.25*this.scale,this.scale=this.scale<.012?.012:this.scale}mouseMove(t,e){this.m[0]=t,this.m[1]=e}render(t){const e=-1*this.m[0]+this.ctx.canvas.width;let i=this.data[this.id[this.index]];if(void 0===i)return;r(t,i,this.scale,this.day,this.margin);const s=h(i,this.dataSampling);t.lineWidth=4,t.strokeStyle="#000",this.vizData(t,i,s,this.scale,this.day,this.dataSampling,this.margin,e),t.lineWidth=.5,t.beginPath(),t.moveTo(e,0),t.lineTo(e,this.ctx.canvas.height),t.stroke(),t.beginPath(),t.arc(e,this.m[1],1,0,2*Math.PI),t.fill(),t.fillStyle="#f00",t.beginPath(),t.arc(e,this.selVal,7,0,2*Math.PI),t.fill()}}const h=(t,e)=>{let i=Number.MAX_VALUE,s=Number.MIN_VALUE;for(let o=1;o<t.length;o+=e){let h=t[o];if("mean"==="max")for(let t=0;t<e;++t)i=i>h?h:i,s=s<h?h:s;else for(let t=0;t<e;++t)i=i>h?h:i,s=s<h?h:s}return[i,s]},r=(t,e,i,s,o)=>{t.setLineDash([2,2]),t.lineWidth=1;for(let h=0;h<e.length;h++){if(t.strokeStyle="rgba(200, 200, 200, 0.8)",i>.1&&h%(12*s)===0){const e=o+h*i;t.beginPath(),t.moveTo(e,o),t.lineTo(e,t.canvas.height-o),t.stroke()}if(t.strokeStyle="rgba(0, 0, 255, 0.8)",i>.02&&h%(12*s*7)===0){const e=o+h*i;t.beginPath(),t.moveTo(e,o),t.lineTo(e,t.canvas.height-o),t.stroke()}if(t.strokeStyle="rgba(0, 255, 0, 0.8)",h%(12*s*30)===0){const e=o+h*i;t.beginPath(),t.moveTo(e,o),t.lineTo(e,t.canvas.height-o),t.stroke()}}t.setLineDash([])};class a{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;this.divHost=void 0,this.canvas=void 0,this.ctx=void 0,this.isDown=!1,this.debugMode=!1,this.isStatic=!1,this.waterQualityInspector=void 0,this.prevent=!1,this.delay=250,this.timer=void 0,this.isDrag=!1,this.resize=()=>{const t=this.divHost.getBoundingClientRect();this.canvas.width=t.width,this.canvas.height=t.height,this.loop(this.ctx)},this.divHost=t;const i=this.divHost.getBoundingClientRect();this.canvas=document.createElement("canvas"),this.canvas.style.position="relative",this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.background="rgba(255, 255, 255, 1.0)",this.canvas.style.borderRadius="15px",this.canvas.width=i.width,this.canvas.height=i.height,this.divHost.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.scale(-1,1),this.ctx.translate(-this.ctx.canvas.width,0),this.canvas.onclick=t=>{this.timer=setTimeout((()=>{this.prevent||this.mouseClick(t.offsetX,t.offsetY),this.isDrag=!1,this.prevent=!1}),this.delay),this.loop(this.ctx)},this.canvas.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.mouseDoubleClick(t.offsetX,t.offsetY),this.loop(this.ctx)},this.canvas.onmousedown=t=>{this.isDown=!0,this.mouseDown(t.offsetX,t.offsetY),this.loop(this.ctx)},this.canvas.onmouseup=t=>{this.isDown=!1,this.isDrag=!1,this.mouseUp(t.offsetX,t.offsetY),this.loop(this.ctx)},this.canvas.onmousemove=t=>{this.isDown?(this.isDrag=!0,this.prevent=!0,this.mouseDrag(t.offsetX,t.offsetY)):this.mouseMove(t.offsetX,t.offsetY)},this.canvas.onwheel=t=>{this.waterQualityInspector.wheel(t),this.loop(this.ctx)},this.waterQualityInspector=new o(this.ctx,e),window.addEventListener("resize",this.resize),this.start()}start(){this.loop(this.ctx)}destroy(){window.removeEventListener("resize",this.resize),this.isStatic=!0;try{for(;void 0!==this.divHost&&void 0!==this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}catch(t){}}renderUpdate(t){t.clearRect(0,0,t.canvas.width,t.canvas.height),this.render(t)}loop(t){this.isStatic||requestAnimationFrame((()=>{this.renderUpdate(t)}))}render(t){this.waterQualityInspector.render(this.ctx)}mouseClick(t,e){this.debugMode&&console.log("click")}mouseDoubleClick(t,e){this.debugMode&&console.log("d-click")}mouseDown(t,e){this.debugMode&&console.log("down")}mouseUp(t,e){this.debugMode&&console.log("up")}mouseMove(t,e){this.debugMode&&console.log("move"),this.waterQualityInspector.mouseMove(t,e),this.loop(this.ctx)}mouseDrag(t,e){this.debugMode&&console.log("drag")}mouseWheel(t){this.debugMode&&console.log("wheel",t)}}}}]);
//# sourceMappingURL=18278.f0543687.chunk.js.map