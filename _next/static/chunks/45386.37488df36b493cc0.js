"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45386,3955,99473],{3955:function(e,i,t){t.r(i),t.d(i,{DefinitionIndeCanvasCore:function(){return s}});var n=t(79309);class s{InitIndeCanvas(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:650,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:350;this.scene.implementation.app.needUI?this.indeCanvas=new n.D(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,50,50,e,i,!0):this.indeCanvas=new n.D(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,1,-25,e,i,!0),this.indeCanvas.title="TF Env",this.indeCanvas.btnHam.isHidden=!0,this.indeCanvas.btnMini.isHidden=!0,this.indeCanvas.RenderIndependentCanvas=e=>this.RenderIndependentCanvas(e)}get width(){return this.indeCanvas.canvas.width}get height(){return this.indeCanvas.canvas.height}Init(e){}RenderIndependentCanvas(e){}MouseMove(e,i){}MouseMovePre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseMove(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDown(e,i){}MouseDownPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseDown(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseUp(e,i){}MouseUpPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseUp(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDrag(e,i){}MouseDragPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseDrag(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseLeftClick(e,i){}MouseLeftClickPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseLeftClick(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseMiddleClick(e,i){}MouseMiddleClickPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseMiddleClick(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseRightClick(e,i){}MouseRightClickPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseRightClick(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDoubleClick(e,i){}MouseDoubleClickPre(e,i){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseDoubleClick(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseWheel(e,i,t){}MouseWheelPre(e,i,t){this.indeCanvas.IsMouseInsidePanel(e,i)&&this.MouseWheel(e-this.indeCanvas.vec.x+this.mOffX,i-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY,t)}constructor(e,i=650,t=350){this.mOffX=-12,this.mOffY=-12,this.scene=e,this.scene.definitions.push(this),this.InitIndeCanvas(i,t)}}},45386:function(e,i,t){t.r(i),t.d(i,{JSLinearRegression01:function(){return a}});var n=t(3955),s=t(99473);class a extends n.DefinitionIndeCanvasCore{Init(){}MouseDown(e,i){this.vs.push(new s.NVector3(this.MapX(e),this.MapY(i)))}MapX(e){return s.MathUtility.Remap(e,0,this.width,0,1)}MapY(e){return s.MathUtility.Remap(e,0,this.height,1,0)}RenderIndependentCanvas(e){e.fillStyle="#000000",e.beginPath(),e.rect(0,0,e.canvas.width,e.canvas.height),e.closePath(),e.fill(),this.LinearRegression(),this.RenderLine(e),e.fillStyle="#00ff00";for(let i=0;i<this.vs.length;++i)e.beginPath(),e.arc(s.MathUtility.Remap(this.vs[i].x,0,1,0,this.width),s.MathUtility.Remap(this.vs[i].y,0,1,this.height,0),5,0,2*Math.PI),e.closePath(),e.fill()}RenderLine(e){let i=0*this.a+this.bias,t=1*this.a+this.bias;e.lineWidth=3,e.strokeStyle="#00fff0",e.beginPath(),e.moveTo(s.MathUtility.Remap(0,0,1,0,this.width),s.MathUtility.Remap(i,0,1,this.height,0)),e.lineTo(s.MathUtility.Remap(1,0,1,0,this.width),s.MathUtility.Remap(t,0,1,this.height,0)),e.stroke()}LinearRegression(){let e=0,i=0;for(let t=0;t<this.vs.length;++t)e+=this.vs[t].x,i+=this.vs[t].y;let t=e/this.vs.length,n=i/this.vs.length,s=0,a=0;for(let e=0;e<this.vs.length;++e)s+=(this.vs[e].x-t)*(this.vs[e].y-n),a+=(this.vs[e].x-t)*(this.vs[e].x-t);this.a=s/a,this.bias=n-this.a*t}constructor(e){super(e),this.xpos=100,this.ypos=100,this.xspeed=10,this.yspeed=10,this.xdirection=1,this.ydirection=1,this.rad=50,this.vs=[],this.a=1,this.bias=0,this.indeCanvas.title="LinearRegression",this.Init()}}},99473:function(e,i,t){t.r(i),t.d(i,{ACTION_TYPE:function(){return n.KW},ACTIVECOMMAND_MODE:function(){return n.AG},ActiveCommandBase:function(){return n.wm},AppAccessibility:function(){return n.Wv},AppProperties:function(){return n.gj},ArrayUtility:function(){return n.R3},BrowserUtility:function(){return n.R7},CLICK_TYPE:function(){return n.uh},CLOGTYPE:function(){return n.g6},COMPILE_MODE:function(){return n.Iq},ColorUtility:function(){return n.mK},Deltatime:function(){return n.gk},EVENT_LISTENER_TYPE:function(){return n.GZ},FHTYPE:function(){return n.OH},GTYPE:function(){return n.OB},GeometryBase:function(){return n.bx},INTERACTION_MODE:function(){return n.WU},LINECAP:function(){return n.EQ},MathUtility:function(){return n.$H},NDataUtility:function(){return n.eu},NUI:function(){return n.Fc},NVector3:function(){return n.h9},NumericalMotion:function(){return n.aX},OPTIMIZER:function(){return n.sg},PRESS_TYPE:function(){return n.dc},TEXTALIGN:function(){return n.mH},TEXTBOX:function(){return n.SE},TOUCH_TYPE:function(){return n.KV},UNIT:function(){return n.iI}});var n=t(8483)}}]);