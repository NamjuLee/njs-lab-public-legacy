"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[18558],{18558:(e,s,i)=>{i.r(s),i.d(s,{SceneVis:()=>l});var t=i(80051);class o{constructor(e){this.scene=void 0,this.scene=e}MouseEventController(e){e.CLICK_TYPE!==t.uh.LEFT?e.CLICK_TYPE!==t.uh.MIDDLE?e.CLICK_TYPE!==t.uh.DOWN_RIGHT?e.CLICK_TYPE!==t.uh.DOUBLE?e.CLICK_TYPE!==t.uh.MOVE?e.CLICK_TYPE!==t.uh.DRAG?e.CLICK_TYPE!==t.uh.DOWN?e.CLICK_TYPE!==t.uh.WHEEL?e.CLICK_TYPE!==t.uh.UP||this.MouseUpPre(e):this.MouseWheelPre(e):this.MouseDownPre(e):this.MouseDragPre(e):this.MouseMovePre(e):this.MouseDoubleClickPre(e):this.MouseRightClickPre(e):this.MouseMiddleClickPre(e):this.MouseLeftClickPre(e)}MouseDown(e){}MouseDownPre(e){this.scene.MouseDown(e.x,e.y),this.MouseDown(e)}MouseLeftClick(e){}MouseLeftClickPre(e){this.scene.MouseLeftClick(e.x,e.y),this.MouseLeftClick(e)}MouseMiddleClick(e){}MouseMiddleClickPre(e){this.scene.MouseMiddleClick(e.x,e.y),this.MouseMiddleClick(e)}MouseRightClick(e){}MouseRightClickPre(e){this.scene.MouseRightClick(e.x,e.y),this.MouseRightClick(e)}MouseUp(e){}MouseUpPre(e){this.scene.MouseUp(e.x,e.y),this.MouseUp(e)}MouseDoubleClick(e){}MouseDoubleClickPre(e){this.scene.MouseDoubleClick(e.x,e.y),this.MouseDoubleClick(e)}MouseMove(e){}MouseMovePre(e){this.scene.MouseMove(e.x,e.y),this.MouseMove(e)}MouseDrag(e){}MouseDragPre(e){this.scene.MouseDrag(e.x,e.y),this.MouseDrag(e)}MouseWheel(e){}MouseWheelPre(e){this.scene.MouseWheel(e.wheel),this.MouseWheel(e)}}class h{constructor(e){this.scene=void 0,this.scene=e}}class n{constructor(e){this.scene=void 0,this.scene=e,this.scene.definitions.push(this)}get width(){return this.scene.width}get height(){return this.scene.height}Init(e){}Render(e){}MouseMove(e,s){}MouseDown(e,s){}MouseUp(e,s){}MouseDrag(e,s){}MouseLeftClick(e,s){}MouseMiddleClick(e,s){}MouseRightClick(e,s){}MouseDoubleClick(e,s){}MouseWheel(e){}}class u extends n{constructor(e){super(e),this.mouse=[0,0],this.pts=void 0,this.scale=30,this.dataVis=[],this.linspace=void 0,this.v=1,this.Init()}Init(){this.linspace=t.eu.Linspace(-5,5,100)}Render(e){this.dataVis=[],this.pts=[];const s=[[0,1+this.v],[0,2+this.v],[1,.5+this.v],[1,.75+this.v],[1,1+this.v],[1,2+this.v]];for(let o of s){const e=[];for(let s of this.linspace){const i=t.eu.GetGaussian(s,o[0],o[1]);e.push([s*this.scale,i*-this.scale])}this.dataVis.push(e)}let i=0;for(let t of this.dataVis){for(let s of t){let t=[50,50,50,1];t[0]=this.Distance(s[0]+300,s[1]+150,this.mouse[0],this.mouse[1]),e.fillStyle="rgba(".concat(t[0],",").concat(t[1],",").concat(t[2],",").concat(t[3],")"),e.beginPath(),e.arc(s[0]+300,s[1]+150*i,2,0,6.28),e.fill()}i++}e.fillStyle="rgba(0,0,0,1)",e.beginPath(),e.arc(this.mouse[0],this.mouse[1],2,0,6.28),e.fill()}Distance(e,s,i,t){return Math.sqrt((e-i)*(e-i)+(s-t)*(s-t))}MouseMove(e,s){this.mouse=[e,s]}MouseWheel(e){this.v+=.001*e}}class l{constructor(e){this.implementation=void 0,this.canvas=void 0,this.activeCommandController=void 0,this.geomeetryCommon=void 0,this.definitions=[],this.implementation=e,this.canvas=e.app.model.graphicsCoreWrapper.canvasWrapper.canvas,this.activeCommandController=new o(this),this.geomeetryCommon=new h(this),this.Init(),this.InitDefinition()}Init(){}get width(){return this.implementation.app.model.graphicsCoreWrapper.canvasWrapper.canvas.canvas.width}get height(){return this.implementation.app.model.graphicsCoreWrapper.canvasWrapper.canvas.canvas.height}InitDefinition(){for(let e of this.definitions)e.Init(this.implementation.app.model.graphicsCoreWrapper.canvasWrapper.canvas.ctx)}Render(e){for(let s of this.definitions)s.Render(e)}MouseMove(e,s){for(let i of this.definitions)i.MouseMove(e,s)}MouseLeftClick(e,s){for(let i of this.definitions)i.MouseLeftClick(e,s)}MouseDown(e,s){for(let i of this.definitions)i.MouseDown(e,s)}MouseUp(e,s){for(let i of this.definitions)i.MouseUp(e,s)}MouseDrag(e,s){for(let i of this.definitions)i.MouseDrag(e,s)}MouseMiddleClick(e,s){for(let i of this.definitions)i.MouseMiddleClick(e,s)}MouseRightClick(e,s){for(let i of this.definitions)i.MouseRightClick(e,s)}MouseDoubleClick(e,s){for(let i of this.definitions)i.MouseDoubleClick(e,s)}MouseWheel(e){for(let s of this.definitions)s.MouseWheel(e)}Dispose(){}LoadDefinition(e){if(this.definitions=[],"GaussianDistribution"===e){const e=new u(this);console.log(e)}}}}}]);
//# sourceMappingURL=18558.2d44e0d8.chunk.js.map