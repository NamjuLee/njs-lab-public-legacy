"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[99976],{99976:(t,i,e)=>{e.r(i),e.d(i,{SceneCreativeCoding:()=>T});var s=e(95976);class h{constructor(t){this.scene=void 0,this.indeCanvas=void 0,this.mOffX=-12,this.mOffY=-12,this.scene=t,this.scene.definitions.push(this),this.InitIndeCanvas()}InitIndeCanvas(){this.indeCanvas=new s.Dz(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,100,100,600,350,!0),this.indeCanvas.title="Circle Grid with Attractors 2",this.indeCanvas.btnHam.isHidden=!0,this.indeCanvas.btnMini.isHidden=!0,this.indeCanvas.RenderIndependentCanvas=t=>this.RenderIndependentCanvas(t)}get width(){return this.indeCanvas.canvas.width}get height(){return this.indeCanvas.canvas.height}Init(t){}RenderIndependentCanvas(t){}MouseMove(t,i){}MouseMovePre(t,i){this.indeCanvas.IsMouseInsidePanel(t,i)&&this.MouseMove(t-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDown(t,i){}MouseDownPre(t,i){this.indeCanvas.IsMouseInsidePanel(t,i)&&this.MouseDown(t-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseUp(t,i){}MouseUpPre(t,i){this.indeCanvas.IsMouseInsidePanel(t,i)&&this.MouseUp(t-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDrag(t,i){}MouseDragPre(t,i){this.indeCanvas.IsMouseInsidePanel(t,i)&&this.MouseDrag(t-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseLeftClick(t,i){}MouseLeftClickPre(t,i){this.indeCanvas.IsMouseInsidePanel(t,i)&&this.MouseLeftClick(t-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseMiddleClick(t,i){}MouseMiddleClickPre(t,i){this.indeCanvas.IsMouseInsidePanel(t,i)&&this.MouseMiddleClick(t-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseRightClick(t,i){}MouseRightClickPre(t,i){this.indeCanvas.IsMouseInsidePanel(t,i)&&this.MouseRightClick(t-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDoubleClick(t,i){}MouseDoubleClickPre(t,i){this.indeCanvas.IsMouseInsidePanel(t,i)&&this.MouseDoubleClick(t-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseWheel(t,i,e){}MouseWheelPre(t,i,e){this.indeCanvas.IsMouseInsidePanel(t,i)&&this.MouseWheel(t-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY,e)}}class o extends h{constructor(t){super(t),this.p=[0,0]}Init(){}RenderIndependentCanvas(t){t.fillStyle="#ff0000",t.beginPath(),t.arc(this.p[0],this.p[1],5,0,6.28),t.closePath(),t.fill()}MouseDown(t,i){this.p=[t,i]}}var n=e(13165);class l{constructor(t){this.scene=void 0,this.scene=t}MouseEventController(t){t.CLICK_TYPE!==n.uh.LEFT?t.CLICK_TYPE!==n.uh.MIDDLE?t.CLICK_TYPE!==n.uh.DOWN_RIGHT?t.CLICK_TYPE!==n.uh.DOUBLE?t.CLICK_TYPE!==n.uh.MOVE?t.CLICK_TYPE!==n.uh.DRAG?t.CLICK_TYPE!==n.uh.DOWN?t.CLICK_TYPE!==n.uh.WHEEL?t.CLICK_TYPE!==n.uh.UP||this.MouseUpPre(t):this.MouseWheelPre(t):this.MouseDownPre(t):this.MouseDragPre(t):this.MouseMovePre(t):this.MouseDoubleClickPre(t):this.MouseRightClickPre(t):this.MouseMiddleClickPre(t):this.MouseLeftClickPre(t)}MouseDown(t){}MouseDownPre(t){this.scene.MouseDown(t.x,t.y),this.MouseDown(t)}MouseLeftClick(t){}MouseLeftClickPre(t){this.scene.MouseLeftClick(t.x,t.y),this.MouseLeftClick(t)}MouseMiddleClick(t){}MouseMiddleClickPre(t){this.scene.MouseMiddleClick(t.x,t.y),this.MouseMiddleClick(t)}MouseRightClick(t){}MouseRightClickPre(t){this.scene.MouseRightClick(t.x,t.y),this.MouseRightClick(t)}MouseUp(t){}MouseUpPre(t){this.scene.MouseUp(t.x,t.y),this.MouseUp(t)}MouseDoubleClick(t){}MouseDoubleClickPre(t){this.scene.MouseDoubleClick(t.x,t.y),this.MouseDoubleClick(t)}MouseMove(t){}MouseMovePre(t){this.scene.MouseMove(t.x,t.y),this.MouseMove(t)}MouseDrag(t){}MouseDragPre(t){this.scene.MouseDrag(t.x,t.y),this.MouseDrag(t)}MouseWheel(t){}MouseWheelPre(t){this.scene.MouseWheel(t.x,t.y,t.wheel),this.MouseWheel(t)}}class r{constructor(t){this.scene=void 0,this.scene=t}}class a extends h{constructor(t){super(t),this.xpos=100,this.ypos=100,this.xspeed=10,this.yspeed=10,this.xdirection=1,this.ydirection=1,this.rad=50}Init(){}RenderIndependentCanvas(t){this.xpos=this.xpos+this.xspeed*this.xdirection,this.ypos=this.ypos+this.yspeed*this.ydirection,(this.xpos>this.width-this.rad||this.xpos<this.rad)&&(this.xdirection*=-1),(this.ypos>this.height-this.rad||this.ypos<this.rad)&&(this.ydirection*=-1),t.fillStyle="#ff0000",t.beginPath(),t.arc(this.xpos,this.ypos,this.rad,0,6.28),t.closePath(),t.fill()}}class d extends h{constructor(t){super(t),this.Balls=[]}RenderIndependentCanvas(t){for(let i of this.Balls)i.Render(t)}MouseDown(t,i){this.Balls.push(new c(this,t,i))}}class c{static GetRandomHex(){return this.RGBToHex(Math.round(255*Math.random()),Math.round(255*Math.random()),Math.round(255*Math.random()))}static RGBToHex(t,i,e){return"#"+[Math.round(t),Math.round(i),Math.round(e)].map((t=>{const i=t.toString(16);return 1===i.length?"0"+i:i})).join("")}constructor(t,i,e){this.xpos=100,this.ypos=100,this.xspeed=10,this.yspeed=10,this.xdirection=1,this.ydirection=1,this.rad=50,this.BallBounceClass=void 0,this.color=void 0,this.BallBounceClass=t,this.xpos=i,this.ypos=e,this.xdirection=2*Math.random()-1,this.ydirection=2*Math.random()-1,this.rad=50*Math.random()+10,this.color=c.GetRandomHex()}Render(t){this.xpos=this.xpos+this.xspeed*this.xdirection,this.ypos=this.ypos+this.yspeed*this.ydirection,(this.xpos>this.BallBounceClass.width-this.rad||this.xpos<this.rad)&&(this.xdirection*=-1),(this.ypos>this.BallBounceClass.height-this.rad||this.ypos<this.rad)&&(this.ydirection*=-1),t.fillStyle=this.color,t.beginPath(),t.arc(this.xpos,this.ypos,this.rad,0,6.28),t.closePath(),t.fill()}}class y extends h{constructor(t){super(t),this.mouse=[0,0],this.pts=void 0,this.Init()}Init(){this.mouse=[0,0]}RenderIndependentCanvas(t){this.pts=[];let i=this.width/40,e=this.height/40;for(let h=0;h<40;h+=1)for(let t=0;t<40;t+=1)this.pts.push([t*i,h*e]);let s=0;for(let h of this.pts){if(s%2===0){let i=[50,50,50,1],e=this.Distance(h[0],h[1],this.mouse[0],this.mouse[1]);i[0]=e,t.strokeStyle="rgba(".concat(i[0],",").concat(i[1],",").concat(i[2],",").concat(i[3],")"),t.beginPath(),t.arc(h[0],h[1],e/10,0,6.28),t.stroke()}s++}}Distance(t,i,e,s){return Math.sqrt((t-e)*(t-e)+(i-s)*(i-s))}MouseMove(t,i){this.mouse=[t,i]}}class p extends h{constructor(t){super(t),this.mouse=[0,0],this.pts=void 0,this.attrs=[[0,0]],this.strength=50,this.falloff=5e-5,this.Init()}Init(){this.mouse=[0,0]}RenderIndependentCanvas(t){this.pts=[];let i=this.width/40,e=this.height/40;for(let h=0;h<40;h+=1)for(let t=0;t<40;t+=1)this.pts.push([t*i,h*e]);let s=0;for(let h of this.pts){if(s%2===0){let i=[50,255,0,1],e=0;for(let t of this.attrs){let i=this.Attractor(h,t,this.strength,this.falloff);e<i&&(e=i)}i[2]+=3*e,t.strokeStyle="rgba(".concat(i[0],",").concat(i[1],",").concat(i[2],",").concat(i[3],")"),t.beginPath(),t.arc(h[0],h[1],10+e,0,6.28),t.stroke()}s++}}Attractor(t,i,e,s){let h=this.Sub(t,i),o=this.Length(h);return e*Math.exp(-s*o*o)}Sub(t,i){return[t[0]-i[0],t[1]-i[1]]}Unitize(t){let i=this.Length(t);return[t[0]/i,t[1]/i]}Length(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}MouseMove(t,i){this.attrs[this.attrs.length-1]=[t,i]}MouseDown(t,i){this.attrs.push([t,i])}MouseWheel(t,i,e){this.falloff+=1e-7*e}}class v extends h{constructor(t){super(t),this.mouse=[0,0],this.pts=void 0,this.attrs=[[0,0]],this.strength=50,this.falloff=5e-5,this.Init()}Init(){this.mouse=[0,0]}RenderIndependentCanvas(t){this.pts=[];let i=this.width/20,e=this.height/20;for(let h=0;h<20;h+=1)for(let t=0;t<20;t+=1)this.pts.push([t*i,h*e]);let s=0;for(let h of this.pts){if(s%2===0){let i=[0,20,0,1],e=0;for(let t of this.attrs){let i=this.Attractor(h,t,this.strength,this.falloff);e<i&&(e=i)}i[2]+=3*e,t.strokeStyle="rgba(".concat(i[0],",").concat(i[1],",").concat(i[2],",").concat(i[3],")"),t.beginPath(),t.arc(h[0],h[1],10+e,0,6.28),t.stroke()}s++}}Attractor(t,i,e,s){let h=this.Sub(t,i),o=this.Length(h);return e*Math.exp(-s*o*o)}Sub(t,i){return[t[0]-i[0],t[1]-i[1]]}Unitize(t){let i=this.Length(t);return[t[0]/i,t[1]/i]}Length(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}MouseMove(t,i){this.attrs[this.attrs.length-1]=[t,i]}MouseDown(t,i){this.attrs.push([t,i])}MouseWheel(t,i,e){this.falloff+=1e-7*e}}class u extends h{constructor(t){super(t),this.mouse=[0,0],this.lines=[],this.indeCanvas.title="Line",this.Init()}Init(){this.lines.push(new g(10,10,50,50))}RenderIndependentCanvas(t){for(let i of this.lines)i.Render(t)}MouseMove(t,i){this.mouse=[t,i]}MouseDown(){const t=this.lines[this.lines.length-1].p1;this.lines.push(new g(t[0],t[1],this.mouse[0],this.mouse[1]))}}class g{constructor(t,i,e,s){this.p0=void 0,this.p1=void 0,this.p0=[t,i],this.p1=[e,s]}Render(t){t.strokeStyle="red",t.beginPath(),t.moveTo(this.p0[0],this.p0[1]),t.lineTo(this.p1[0],this.p1[1]),t.closePath(),t.stroke()}}class x extends h{constructor(t){super(t),this.mouse=[0,0],this.lines=[],this.indeCanvas.title="Line",this.Init()}Init(){this.lines.push(new m(10,10,50,50))}RenderIndependentCanvas(t){for(let i of this.lines)i.Render(t)}MouseMove(t,i){this.mouse=[t,i]}MouseDown(){this.lines.length>5&&this.lines.shift();const t=this.lines[this.lines.length-1].p1;this.lines.push(new m(t[0],t[1],this.mouse[0],this.mouse[1]))}}class m{constructor(t,i,e,s){this.p0=void 0,this.p1=void 0,this.p0=[t,i],this.p1=[e,s]}Render(t){t.strokeStyle="red",t.beginPath(),t.moveTo(this.p0[0],this.p0[1]),t.lineTo(this.p1[0],this.p1[1]),t.closePath(),t.stroke()}}class C{static GetRandomPath(t,i,e,s){let h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,o=[];for(let l=0;l<h;++l){let h=n.$H.GetRandomIntInclusive(t,e),l=n.$H.GetRandomIntInclusive(i,s);o.push(new n.h9(h,l,0))}return o}constructor(){}}class f{constructor(t){this.boids=[],this.targets=void 0,this.boids=[],this.targets=t}AddAgent(t,i){let e=new M(new n.h9(t,i));e.InitTarget(this.targets),this.boids.push(e)}Update(){this.Col();for(let t of this.boids)t.Update()}Col(){for(let t of this.boids)t.col=!1;for(let t=0;t<this.boids.length;++t){let i=this.boids[t];if(!i.isRenderable)break;for(let e=t+1;e<this.boids.length;++e){let t=this.boids[e];if(i.p.Distance(t.p)<30){t.col=!0;break}}}}GetPoint(){let t=[];for(let i of this.boids)i.isRenderable&&t.push(i.p);return t}Render(t){this.boids.forEach((i=>{i.Render(t)}))}}class M{constructor(t){this.maxForce=5,this.maxVelocity=5,this.maxSpeed=5,this.mass=10.2,this.isRenderable=!0,this.p=void 0,this.targets=void 0,this.target=void 0,this.targetID=0,this.col=!1,this.desiredVelocity=void 0,this.steering=void 0,this.velocity=new n.h9(0,0,0),this.p=t,this.target=new n.h9(t.x,t.y,t.z)}InitTarget(t){this.targets=t,this.target=this.targets[this.targetID]}Update(){this.UpdateTarget(),this.UpdateVecSlowDown2()}UpdateTarget(){this.p.Distance(this.target)<9&&(this.targetID++,this.targetID<this.targets.length&&(this.target=this.targets[this.targetID],this.targetID,this.targets.length))}UpdateVec0(){this.desiredVelocity=new n.h9(this.target.x-this.p.x,this.target.y-this.p.y,this.target.z-this.p.z),this.desiredVelocity.Unitize(),this.desiredVelocity.x*=this.maxVelocity,this.desiredVelocity.y*=this.maxVelocity,this.desiredVelocity.z*=this.maxVelocity;let t=this.desiredVelocity.x-this.velocity.x<this.maxForce?this.desiredVelocity.x-this.velocity.x:this.maxForce,i=this.desiredVelocity.y-this.velocity.y<this.maxForce?this.desiredVelocity.y-this.velocity.y:this.maxForce,e=this.desiredVelocity.z-this.velocity.z<this.maxForce?this.desiredVelocity.z-this.velocity.z:this.maxForce;this.steering=new n.h9(t/this.mass,i/this.mass,e/this.mass),this.velocity.x=this.velocity.x+this.steering.x<this.maxSpeed?this.velocity.x+this.steering.x:this.maxSpeed,this.velocity.y=this.velocity.y+this.steering.y<this.maxSpeed?this.velocity.y+this.steering.y:this.maxSpeed,this.velocity.z=this.velocity.z+this.steering.z<this.maxSpeed?this.velocity.z+this.steering.z:this.maxSpeed,this.col?(this.p.x+=.8*-this.steering.x,this.p.y+=.8*-this.steering.y,this.p.z+=.8*-this.steering.z):(this.p.x+=this.velocity.x,this.p.y+=this.velocity.y,this.p.z+=this.velocity.z)}UpdateVec1(){this.desiredVelocity=new n.h9(this.target.x-this.p.x,this.target.y-this.p.y,this.target.z-this.p.z),this.desiredVelocity.Unitize(),this.desiredVelocity.x*=this.maxVelocity,this.desiredVelocity.y*=this.maxVelocity,this.desiredVelocity.z*=this.maxVelocity;let t=this.desiredVelocity.x-this.velocity.x,i=this.desiredVelocity.y-this.velocity.y,e=this.desiredVelocity.z-this.velocity.z;this.steering=new n.h9(t/this.mass,i/this.mass,e/this.mass),this.velocity.x=this.velocity.x+this.steering.x<this.maxSpeed?this.velocity.x+this.steering.x:this.maxSpeed,this.velocity.y=this.velocity.y+this.steering.y<this.maxSpeed?this.velocity.y+this.steering.y:this.maxSpeed,this.velocity.z=this.velocity.z+this.steering.z<this.maxSpeed?this.velocity.z+this.steering.z:this.maxSpeed,this.col?(this.p.x+=.8*-this.steering.x,this.p.y+=.8*-this.steering.y,this.p.z+=.8*-this.steering.z):(this.p.x+=this.velocity.x,this.p.y+=this.velocity.y,this.p.z+=this.velocity.z)}UpdateVecSlowDown1(){this.desiredVelocity=new n.h9(this.target.x-this.p.x,this.target.y-this.p.y,this.target.z-this.p.z),this.desiredVelocity.Unitize(),this.desiredVelocity.x*=this.maxVelocity,this.desiredVelocity.y*=this.maxVelocity,this.desiredVelocity.z*=this.maxVelocity;let t=this.desiredVelocity.x-this.velocity.x,i=this.desiredVelocity.y-this.velocity.y,e=this.desiredVelocity.z-this.velocity.z;if(this.steering=new n.h9(t/this.mass,i/this.mass,e/this.mass),this.velocity.x=this.velocity.x+this.steering.x<this.maxSpeed?this.velocity.x+this.steering.x:this.maxSpeed,this.velocity.y=this.velocity.y+this.steering.y<this.maxSpeed?this.velocity.y+this.steering.y:this.maxSpeed,this.velocity.z=this.velocity.z+this.steering.z<this.maxSpeed?this.velocity.z+this.steering.z:this.maxSpeed,this.col)this.p.x+=.8*-this.steering.x,this.p.y+=.8*-this.steering.y,this.p.z+=.8*-this.steering.z;else{let t=this.maxSpeed/this.velocity.Length();t=t<1?t:1,this.p.x+=this.velocity.x*t,this.p.y+=this.velocity.y*t,this.p.z+=this.velocity.z*t}}UpdateVecSlowDown2(){this.desiredVelocity=new n.h9(this.target.x-this.p.x,this.target.y-this.p.y,this.target.z-this.p.z);let t=150,i=this.desiredVelocity.Length();i<t?(this.desiredVelocity.Unitize(),this.desiredVelocity.x*=this.maxVelocity*(i/t),this.desiredVelocity.y*=this.maxVelocity*(i/t),this.desiredVelocity.z*=this.maxVelocity*(i/t)):(this.desiredVelocity.Unitize(),this.desiredVelocity.x*=this.maxVelocity,this.desiredVelocity.y*=this.maxVelocity,this.desiredVelocity.z*=this.maxVelocity);let e=this.desiredVelocity.x-this.velocity.x,s=this.desiredVelocity.y-this.velocity.y,h=this.desiredVelocity.z-this.velocity.z;if(this.steering=new n.h9(e,s,h),this.velocity.x=this.velocity.x+this.steering.x<this.maxSpeed?this.velocity.x+this.steering.x:this.maxSpeed,this.velocity.y=this.velocity.y+this.steering.y<this.maxSpeed?this.velocity.y+this.steering.y:this.maxSpeed,this.velocity.z=this.velocity.z+this.steering.z<this.maxSpeed?this.velocity.z+this.steering.z:this.maxSpeed,this.col)this.p.x+=.8*-this.steering.x,this.p.y+=.8*-this.steering.y,this.p.z+=.8*-this.steering.z;else{let t=this.maxSpeed/this.velocity.Length();t=t<1?t:1,this.p.x+=this.velocity.x*t,this.p.y+=this.velocity.y*t,this.p.z+=this.velocity.z*t}}Render(t){this.RenderDesiredVelocity(t),this.RenderCurrentVelocity(t),this.RenderCircle(t)}RenderDesiredVelocity(t){t.lineWidth=.5,t.strokeStyle="#00ff00",t.beginPath(),t.moveTo(this.p.x,this.p.y),t.lineTo(this.p.x+20*this.desiredVelocity.x,this.p.y+20*this.desiredVelocity.y),t.closePath(),t.stroke()}RenderCurrentVelocity(t){t.lineWidth=.5,t.strokeStyle="#ff0000",t.beginPath(),t.moveTo(this.p.x,this.p.y),t.lineTo(this.p.x+20*this.velocity.x,this.p.y+20*this.velocity.y),t.closePath(),t.stroke()}RenderCircle(t){t.strokeStyle="#000000",t.lineWidth=.5,t.beginPath(),t.moveTo(this.targets[0].x,this.targets[0].y);for(let i=1;i<this.targets.length;++i)t.lineTo(this.targets[i].x,this.targets[i].y);t.closePath(),t.stroke(),t.beginPath(),t.arc(this.p.x,this.p.y,10,0,6.28),t.closePath(),t.stroke()}}M.list=[];class w extends h{constructor(t){super(t),this.mouse=[0,0],this.BoidContoller1=void 0,this.indeCanvas.title="BoidSystem01",this.Init()}Init(){let t=C.GetRandomPath(0,0,this.width,this.height);this.BoidContoller1=new f(t)}RenderIndependentCanvas(t){this.BoidContoller1.Update(),this.BoidContoller1.Render(t),this.Circle(t)}MouseMove(t,i){this.mouse=[t,i]}MouseDown(){this.BoidContoller1.AddAgent(this.mouse[0],this.mouse[1])}Circle(t){for(let i=0;i<6.28;i+=.5)for(let e=0;e<3.14;e+=.5){let s=50*Math.cos(i)*Math.sin(e),h=50*Math.sin(i)*Math.sin(e);t.beginPath(),t.arc(s,h,2,0,6.28),t.closePath(),t.fill()}}}class I{constructor(){this.boids=[],this.boids=[]}AddAgent(t,i,e,s){let h=new S(new n.h9(t,i),new n.h9(0,0),new n.h9(e,s));this.boids.push(h)}Update(){for(let t of this.boids)t.Update()}GetPoint(){let t=[];for(let i of this.boids)i.isRenderable&&t.push(i.p);return t}Render(t){this.boids.forEach((i=>{i.Render(t)}))}}class S{constructor(t,i,e){this.maxForce=2,this.maxVelocity=2,this.maxSpeed=.9,this.mass=100.2,this.isRenderable=!0,this.p=void 0,this.p0=void 0,this.p1=void 0,this.targets=void 0,this.target=void 0,this.targetID=0,this.col=!1,this.desiredVelocity=void 0,this.steering=void 0,this.velocity=new n.h9(0,0,0),this.wanderAngle=0,this.CIRCLE_DISTANCE=50,this.CIRCLE_RADIUS=50,this.ANGLE_CHANGE=15,this.t=0,this.MAX_QUEUE_AHEAD=15,this.MAX_QUEUE_RADIUS=10,S.list.push(this),this.p=t,this.p0=i,this.p1=e,this.UpdateTarget()}Update(){this.UpdateVec1()}UpdateTarget(){let t=n.$H.GetRandomInt(this.p0.x,this.p1.x),i=n.$H.GetRandomInt(this.p0.y,this.p1.y);this.target=new n.h9(t,i)}UpdateVec1(){this.desiredVelocity=new n.h9(this.target.x-this.p.x,this.target.y-this.p.y,this.target.z-this.p.z),this.desiredVelocity.Unitize(),this.desiredVelocity.x*=this.maxVelocity,this.desiredVelocity.y*=this.maxVelocity,this.desiredVelocity.z*=this.maxVelocity;let t=this.desiredVelocity.x-this.velocity.x<this.maxForce?this.desiredVelocity.x-this.velocity.x:this.maxForce,i=this.desiredVelocity.y-this.velocity.y<this.maxForce?this.desiredVelocity.y-this.velocity.y:this.maxForce,e=this.desiredVelocity.z-this.velocity.z<this.maxForce?this.desiredVelocity.z-this.velocity.z:this.maxForce;this.steering=new n.h9(t/this.mass,i/this.mass,e/this.mass),this.velocity.x=this.velocity.x+this.steering.x<this.maxSpeed?this.velocity.x+this.steering.x:this.maxSpeed,this.velocity.y=this.velocity.y+this.steering.y<this.maxSpeed?this.velocity.y+this.steering.y:this.maxSpeed,this.velocity.z=this.velocity.z+this.steering.z<this.maxSpeed?this.velocity.z+this.steering.z:this.maxSpeed,this.Queue(),this.p.x+=this.velocity.x,this.p.y+=this.velocity.y,this.p.z+=this.velocity.z,this.t+=.01,this.t>3&&(this.t=0,this.UpdateTarget())}UpdateVec0(){this.steering=this.Wander(new n.h9(this.velocity.x,this.velocity.y,this.velocity.z)),this.steering.x=this.steering.x<this.maxForce?this.steering.x:this.maxForce,this.steering.y=this.steering.y<this.maxForce?this.steering.y:this.maxForce,this.steering.z=this.steering.z<this.maxForce?this.steering.z:this.maxForce,this.steering.x/=this.mass,this.steering.y/=this.mass,this.steering.z/=this.mass,this.velocity.x+this.steering.x<this.maxSpeed?this.velocity.x=this.velocity.x+this.steering.x:this.velocity.x=this.maxSpeed,this.velocity.y+this.steering.y<this.maxSpeed?this.velocity.y=this.velocity.y+this.steering.y:this.velocity.y=this.maxSpeed,this.velocity.z+this.steering.z<this.maxSpeed?this.velocity.z=this.velocity.z+this.steering.z:this.velocity.z=this.maxSpeed,this.Queue(),console.log(this.maxSpeed),this.p.x+=this.velocity.x,this.p.y+=this.velocity.y,this.p.z+=this.velocity.z}Wander(t){let i=new n.h9(t.x,t.y,t.z);i.Normalize(),i.Scale(this.CIRCLE_DISTANCE);let e=new n.h9(0,-1);return e.Scale(this.CIRCLE_RADIUS),e=this.SetAngle(e,this.wanderAngle),this.wanderAngle+=Math.random()*this.ANGLE_CHANGE-.5*this.ANGLE_CHANGE,i.Add(e)}SetAngle(t,i){let e=t.Length();return t.x=Math.cos(i)*e,t.y=Math.sin(i)*e,t}GetNeighborAhead(){var t=void 0,i=this.velocity.Clone();i.Normalize(),i.Scale(this.MAX_QUEUE_AHEAD);let e=this.p.Clone().Add(i);for(let s=0;s<S.list.length;s++){let i=S.list[s],h=n.h9.Distance(e,i.p);if(i!==this&&h<=this.MAX_QUEUE_RADIUS){t=i;break}}return t}Queue(){return void 0!==this.GetNeighborAhead()&&this.velocity.Scale(.3),new n.h9(0,0)}Render(t){this.RenderCircle(t)}RenderDesiredVelocity(t){}RenderCurrentVelocity(t){}RenderCircle(t){t.strokeStyle="#000000",t.lineWidth=.5,t.beginPath(),t.arc(this.p.x,this.p.y,10,0,6.28),t.closePath(),t.stroke()}}S.list=[];class z extends h{constructor(t){super(t),this.mouse=[0,0],this.BoidContoller=void 0,this.indeCanvas.title="BoidSystem01",this.Init()}Init(){this.BoidContoller=new I}RenderIndependentCanvas(t){this.BoidContoller.Update(),this.BoidContoller.Render(t)}MouseMove(t,i){this.mouse=[t,i]}MouseDown(){this.BoidContoller.AddAgent(this.mouse[0],this.mouse[1],this.width,this.height)}}class D{constructor(){this.boids=[],this.boids=[]}AddAgent(t,i,e,s){let h=new R(new n.h9(t,i),new n.h9(0,0),new n.h9(e,s));this.boids.push(h)}Update(){for(let t of this.boids)t.Update()}UpdateTarget(t,i){for(let e of this.boids)e.target.x=t,e.target.y=i}GetPoint(){let t=[];for(let i of this.boids)i.isRenderable&&t.push(i.p);return t}Render(t){this.boids.forEach((i=>{i.Render(t)}))}}class R{constructor(t,i,e){this.maxForce=2,this.maxVelocity=2,this.maxSpeed=.9,this.mass=100.2,this.isRenderable=!0,this.p=void 0,this.p0=void 0,this.p1=void 0,this.targets=void 0,this.target=void 0,this.targetID=0,this.col=!1,this.desiredVelocity=void 0,this.steering=void 0,this.velocity=new n.h9(0,0,0),this.wanderAngle=0,this.CIRCLE_DISTANCE=50,this.CIRCLE_RADIUS=50,this.ANGLE_CHANGE=15,this.t=0,this.MAX_QUEUE_AHEAD=15,this.MAX_QUEUE_RADIUS=15,this.SEPARATION_RADIUS=10,this.MAX_SEPARATION=.5,R.list.push(this),this.p=t,this.p0=i,this.p1=e,this.UpdateTarget()}Update(){this.UpdateVec1()}UpdateTarget(){let t=n.$H.GetRandomInt(this.p0.x,this.p1.x),i=n.$H.GetRandomInt(this.p0.y,this.p1.y);this.target=new n.h9(t,i)}UpdateVec1(){this.desiredVelocity=new n.h9(this.target.x-this.p.x,this.target.y-this.p.y,this.target.z-this.p.z),this.desiredVelocity.Unitize(),this.desiredVelocity.x*=this.maxVelocity,this.desiredVelocity.y*=this.maxVelocity,this.desiredVelocity.z*=this.maxVelocity;let t=this.desiredVelocity.x-this.velocity.x<this.maxForce?this.desiredVelocity.x-this.velocity.x:this.maxForce,i=this.desiredVelocity.y-this.velocity.y<this.maxForce?this.desiredVelocity.y-this.velocity.y:this.maxForce,e=this.desiredVelocity.z-this.velocity.z<this.maxForce?this.desiredVelocity.z-this.velocity.z:this.maxForce;this.steering=new n.h9(t/this.mass,i/this.mass,e/this.mass),this.velocity.x=this.velocity.x+this.steering.x<this.maxSpeed?this.velocity.x+this.steering.x:this.maxSpeed,this.velocity.y=this.velocity.y+this.steering.y<this.maxSpeed?this.velocity.y+this.steering.y:this.maxSpeed,this.velocity.z=this.velocity.z+this.steering.z<this.maxSpeed?this.velocity.z+this.steering.z:this.maxSpeed,this.Queue(),this.p.x+=this.velocity.x,this.p.y+=this.velocity.y,this.p.z+=this.velocity.z,this.t+=.01,this.t>3&&(this.t=0)}Queue(){var t=this.GetNeighborAhead();return void 0!==t&&this.BrakingForceOverlap(t),new n.h9(0,0)}BrakingForceOverlap(t){let i=new n.h9(0,0);i.x=.8*-this.steering.x,i.y=.8*-this.steering.y,this.velocity.Scale(-1),i=i.Add(this.velocity),n.h9.Distance(this.p,t.p)<=this.MAX_QUEUE_RADIUS?this.velocity.Scale(.3):this.velocity=i}HardStop(){this.velocity.Scale(.3)}BrakingForce(){let t=new n.h9(0,0);t.x=.8*-this.steering.x,t.y=.8*-this.steering.y,this.velocity.Scale(-1),t=t.Add(this.velocity),this.velocity=t}GetNeighborAhead(){var t=void 0,i=this.velocity.Clone();i.Normalize(),i.Scale(this.MAX_QUEUE_AHEAD);let e=this.p.Clone().Add(i);for(let s=0;s<R.list.length;s++){let i=R.list[s],h=n.h9.Distance(e,i.p);if(i!==this&&h<=this.MAX_QUEUE_RADIUS){t=i;break}}return t}Separation(){let t=new n.h9(0,0),i=0;for(let e=0;e<R.list.length;e++){let s=R.list[e];s!==this&&n.h9.Distance(s.p,this.p)<=this.SEPARATION_RADIUS&&(t.x+=s.p.x-this.p.x,t.y+=s.p.y-this.p.y,t.z+=s.p.z-this.p.z,i++)}return 0!==i&&(t.x/=i,t.y/=i,t.z/=i,t.Scale(-1)),t.Normalize(),t.Scale(this.MAX_SEPARATION),t}Render(t){this.RenderCircle(t)}RenderDesiredVelocity(t){}RenderCurrentVelocity(t){}RenderCircle(t){t.strokeStyle="#000000",t.lineWidth=.5,t.beginPath(),t.arc(this.p.x,this.p.y,10,0,6.28),t.closePath(),t.stroke()}}R.list=[];class V extends h{constructor(t){super(t),this.mouse=[0,0],this.BoidContoller=void 0,this.indeCanvas.title="BoidSystem01",this.Init()}Init(){this.BoidContoller=new D}RenderIndependentCanvas(t){this.BoidContoller.Update(),this.BoidContoller.Render(t)}MouseMove(t,i){this.mouse=[t,i],this.BoidContoller.UpdateTarget(t,i)}MouseDown(){this.BoidContoller.AddAgent(this.mouse[0],this.mouse[1],this.width,this.height)}}class P extends h{constructor(t){super(t),this.mouse=[0,0],this.lines=[],this.indeCanvas.title="BoidSystem04",this.Init()}Init(){this.lines.push(new U(10,10,50,50))}RenderIndependentCanvas(t){for(let i of this.lines)i.Render(t)}MouseMove(t,i){this.mouse=[t,i]}MouseDown(){this.lines.length>5&&this.lines.shift();const t=this.lines[this.lines.length-1].p1;this.lines.push(new U(t[0],t[1],this.mouse[0],this.mouse[1]))}}class U{constructor(t,i,e,s){this.p0=void 0,this.p1=void 0,this.p0=[t,i],this.p1=[e,s]}Render(t){t.strokeStyle="red",t.beginPath(),t.moveTo(this.p0[0],this.p0[1]),t.lineTo(this.p1[0],this.p1[1]),t.closePath(),t.stroke()}}class A{constructor(t,i,e){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;this.velocity=new n.h9(0,0,0),this.force=new n.h9(0,.01,0),this.gravity=new n.h9(0,.95,0),this.v=new n.h9(0,0,0),this.r=10,this.m=.1,this.v=new n.h9(t,i,0),this.m=s}Update(t,i,e,s){this.velocity.Add(this.gravity),this.velocity.Mult(s),this.force.Mult(e/this.m),this.velocity.Add(this.force),this.v.x+=this.velocity.x*e,this.v.y+=this.velocity.y*e,this.v.z+=this.velocity.z*e,console.log(this.velocity.x,this.velocity.y),this.UpdateEdge(t,i)}UpdateEdge(t,i){(this.v.x>t||this.v.x<0)&&(this.velocity.x=-1*this.velocity.x),this.v.y>i&&(this.velocity.y=-.95*this.velocity.y,this.v.y=i)}Render(t){t.beginPath(),t.arc(this.v.x,this.v.y,this.r,0,2*Math.PI),t.closePath(),t.fill()}}class b{constructor(t){this.Dynamic01=void 0,this.dNode=void 0,this.t=0,this.Dynamic01=t,this.dNode=new A(100,100,0)}Update(){this.dNode.Update(this.Dynamic01.width,this.Dynamic01.height,this.t,.9),this.t+=.1}Render(t){this.dNode.Render(t)}}class k extends h{constructor(t){super(t),this.mouse=[0,0],this.DynamicSystem=void 0,this.indeCanvas.title="Dynamic01",console.log("init Dynamic01"),this.Init()}Init(){this.DynamicSystem=new b(this)}RenderIndependentCanvas(t){this.DynamicSystem.Update(),this.DynamicSystem.Render(t)}MouseMove(t,i){this.mouse=[t,i]}MouseDown(){console.log(this.mouse)}}class E extends h{constructor(t){super(t),this.mouse=[0,0],this.DynamicSystem=void 0,this.indeCanvas.title="Dynamic02",console.log("init Dynamic02"),this.Init()}Init(){this.DynamicSystem=new b(this)}RenderIndependentCanvas(t){this.DynamicSystem.Update(),this.DynamicSystem.Render(t)}MouseMove(t,i){this.mouse=[t,i]}MouseDown(){}}class L extends h{constructor(t){super(t),this.mouse=[0,0],this.DynamicSystem=void 0,this.indeCanvas.title="Dynamic03",this.Init()}Init(){this.DynamicSystem=new b(this)}RenderIndependentCanvas(t){this.DynamicSystem.Update(),this.DynamicSystem.Render(t)}MouseMove(t,i){this.mouse=[t,i]}MouseDown(){}}class B extends h{constructor(t){super(t),this.mouse=[0,0],this.p=void 0,this.indeCanvas.title="OOP",this.Init()}Init(){this.p=new _(100,100,10),console.log("oop init")}RenderIndependentCanvas(t){console.log("oop loop"),this.p.Render(t),console.log(this.p.age)}MouseMove(t,i){this.mouse=[t,i]}MouseDown(){}}class _{constructor(t,i,e){this.age=void 0,this.height=void 0,this.weight=void 0,this.age=t,this.height=i,this.weight=e}Render(t){t.beginPath(),t.arc(this.age,this.height,this.weight,0,6.28),t.closePath(),t.fill(),this.age+=.01,this.age>102&&this.Compute()}Compute(){this.height+=.1}}class T{constructor(t){this.implementation=void 0,this.canvas=void 0,this.activeCommandController=void 0,this.geomeetryCommon=void 0,this.definitions=[],this.implementation=t,this.canvas=t.app.model.graphicsCoreWrapper.canvasWrapper.canvas,this.activeCommandController=new l(this),this.geomeetryCommon=new r(this),this.Init(),this.InitDefinition()}Init(){this.definitions=[]}get width(){return this.implementation.app.model.graphicsCoreWrapper.canvasWrapper.canvas.canvas.width}get height(){return this.implementation.app.model.graphicsCoreWrapper.canvasWrapper.canvas.canvas.height}InitDefinition(){for(let t of this.definitions)t.Init(this.implementation.app.model.graphicsCoreWrapper.canvasWrapper.canvas.ctx)}Render(t){}MouseMove(t,i){for(let e of this.definitions)e.MouseMovePre(t,i)}MouseLeftClick(t,i){for(let e of this.definitions)e.MouseLeftClickPre(t,i)}MouseDown(t,i){for(let e of this.definitions)e.MouseDownPre(t,i)}MouseUp(t,i){for(let e of this.definitions)e.MouseUpPre(t,i)}MouseDrag(t,i){for(let e of this.definitions)e.MouseDragPre(t,i)}MouseMiddleClick(t,i){for(let e of this.definitions)e.MouseMiddleClickPre(t,i)}MouseRightClick(t,i){for(let e of this.definitions)e.MouseRightClickPre(t,i)}MouseDoubleClick(t,i){for(let e of this.definitions)e.MouseDoubleClickPre(t,i)}MouseWheel(t,i,e){for(let s of this.definitions)s.MouseWheelPre(t,i,e)}Dispose(){this.definitions=[]}LoadDefinition(t){if("Blank"===t){const t=new o(this);console.log(t)}if("BallBounce"===t){const t=new a(this);console.log(t)}if("BallBounceClass"===t){const t=new d(this);console.log(t)}if("CircleGrid"===t){const t=new y(this);console.log(t)}if("CircleGridAttractors1"===t){const t=new p(this);console.log(t)}if("CircleGridAttractors2"===t){const t=new v(this);console.log(t)}if("Line"===t){const t=new u(this);console.log(t)}if("Line2"===t){const t=new x(this);console.log(t)}if("BoidSystem01"===t){const t=new w(this);console.log(t)}if("BoidSystem02"===t){const t=new z(this);console.log(t)}if("BoidSystem03"===t){const t=new V(this);console.log(t)}if("BoidSystem04"===t){const t=new P(this);console.log(t)}if("DynamicSystem01"===t){const t=new k(this);console.log(t)}if("DynamicSystem02"===t){const t=new E(this);console.log(t)}if("DynamicSystem03"===t){const t=new L(this);console.log(t)}if("OOP01"===t){const t=new B(this);console.log(t)}}}}}]);
//# sourceMappingURL=99976.4e27a78a.chunk.js.map