"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[32872,97795,75975],{97795:(e,i,s)=>{s.r(i),s.d(i,{DefinitionIndeCanvasCore:()=>n});var t=s(12850);class n{constructor(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:650,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:350;this.scene=void 0,this.indeCanvas=void 0,this.mOffX=-12,this.mOffY=-12,this.scene=e,this.scene.definitions.push(this),this.InitIndeCanvas(i,s)}InitIndeCanvas(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:650,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:350;this.scene.implementation.app.needUI?this.indeCanvas=new t.D(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,50,50,e,i,!0):this.indeCanvas=new t.D(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,1,-25,e,i,!0),this.indeCanvas.title="TF Env",this.indeCanvas.btnHam.isHidden=!0,this.indeCanvas.btnMini.isHidden=!0,this.indeCanvas.RenderIndependentCanvas=e=>this.RenderIndependentCanvas(e)}get width(){return this.indeCanvas.canvas.width}get height(){return this.indeCanvas.canvas.height}Init(e){}RenderIndependentCanvas(e){}MouseMove(e,i){}MouseMovePre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseMove(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDown(e,i){}MouseDownPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseDown(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseUp(e,i){}MouseUpPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseUp(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDrag(e,i){}MouseDragPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseDrag(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseLeftClick(e,i){}MouseLeftClickPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseLeftClick(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseMiddleClick(e,i){}MouseMiddleClickPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseMiddleClick(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseRightClick(e,i){}MouseRightClickPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseRightClick(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDoubleClick(e,i){}MouseDoubleClickPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseDoubleClick(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseWheel(e,i,s){}MouseWheelPre(e,i,s){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseWheel(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY,s)}}},32872:(e,i,s)=>{s.r(i),s.d(i,{JSLinearRegression01:()=>a});var t=s(97795),n=s(75975);class a extends t.DefinitionIndeCanvasCore{constructor(e){super(e),this.xpos=100,this.ypos=100,this.xspeed=10,this.yspeed=10,this.xdirection=1,this.ydirection=1,this.rad=50,this.vs=[],this.a=1,this.bias=0,this.indeCanvas.title="LinearRegression",this.Init()}Init(){}MouseDown(e,i){this.vs.push(new n.NVector3(this.MapX(e),this.MapY(i)))}MapX(e){return n.MathUtility.Remap(e,0,this.width,0,1)}MapY(e){return n.MathUtility.Remap(e,0,this.height,1,0)}RenderIndependentCanvas(e){e.fillStyle="#000000",e.beginPath(),e.rect(0,0,e.canvas.width,e.canvas.height),e.closePath(),e.fill(),this.LinearRegression(),this.RenderLine(e),e.fillStyle="#00ff00";for(let i=0;i<this.vs.length;++i)e.beginPath(),e.arc(n.MathUtility.Remap(this.vs[i].x,0,1,0,this.width),n.MathUtility.Remap(this.vs[i].y,0,1,this.height,0),5,0,2*Math.PI),e.closePath(),e.fill()}RenderLine(e){let i=0*this.a+this.bias,s=1*this.a+this.bias;e.lineWidth=3,e.strokeStyle="#00fff0",e.beginPath(),e.moveTo(n.MathUtility.Remap(0,0,1,0,this.width),n.MathUtility.Remap(i,0,1,this.height,0)),e.lineTo(n.MathUtility.Remap(1,0,1,0,this.width),n.MathUtility.Remap(s,0,1,this.height,0)),e.stroke()}LinearRegression(){let e=0,i=0;for(let h=0;h<this.vs.length;++h)e+=this.vs[h].x,i+=this.vs[h].y;let s=e/this.vs.length,t=i/this.vs.length,n=0,a=0;for(let h=0;h<this.vs.length;++h)n+=(this.vs[h].x-s)*(this.vs[h].y-t),a+=(this.vs[h].x-s)*(this.vs[h].x-s);this.a=n/a,this.bias=t-this.a*s}}},75975:(e,i,s)=>{s.r(i),s.d(i,{ACTION_TYPE:()=>t.KW,ACTIVECOMMAND_MODE:()=>t.AG,ActiveCommandBase:()=>t.wm,AppAccessibility:()=>t.Wv,AppProperties:()=>t.gj,ArrayUtility:()=>t.R3,BrowserUtility:()=>t.R7,CLICK_TYPE:()=>t.uh,CLOGTYPE:()=>t.g6,COMPILE_MODE:()=>t.Iq,ColorUtility:()=>t.mK,Deltatime:()=>t.gk,EVENT_LISTENER_TYPE:()=>t.GZ,FHTYPE:()=>t.OH,GTYPE:()=>t.OB,GeometryBase:()=>t.bx,INTERACTION_MODE:()=>t.WU,LINECAP:()=>t.EQ,MathUtility:()=>t.$H,NDataUtility:()=>t.eu,NUI:()=>t.Fc,NVector3:()=>t.h9,NumericalMotion:()=>t.aX,OPTIMIZER:()=>t.sg,PRESS_TYPE:()=>t.dc,TEXTALIGN:()=>t.mH,TEXTBOX:()=>t.SE,TOUCH_TYPE:()=>t.KV,UNIT:()=>t.iI});var t=s(458)}}]);
//# sourceMappingURL=32872.2a941697.chunk.js.map