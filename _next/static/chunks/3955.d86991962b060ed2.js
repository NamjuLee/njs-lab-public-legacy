"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3955],{3955:function(e,s,i){i.r(s),i.d(s,{DefinitionIndeCanvasCore:function(){return a}});var n=i(79309);class a{InitIndeCanvas(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:650,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:350;this.scene.implementation.app.needUI?this.indeCanvas=new n.D(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,50,50,e,s,!0):this.indeCanvas=new n.D(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,1,-25,e,s,!0),this.indeCanvas.title="TF Env",this.indeCanvas.btnHam.isHidden=!0,this.indeCanvas.btnMini.isHidden=!0,this.indeCanvas.RenderIndependentCanvas=e=>this.RenderIndependentCanvas(e)}get width(){return this.indeCanvas.canvas.width}get height(){return this.indeCanvas.canvas.height}Init(e){}RenderIndependentCanvas(e){}MouseMove(e,s){}MouseMovePre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseMove(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDown(e,s){}MouseDownPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseDown(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseUp(e,s){}MouseUpPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseUp(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDrag(e,s){}MouseDragPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseDrag(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseLeftClick(e,s){}MouseLeftClickPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseLeftClick(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseMiddleClick(e,s){}MouseMiddleClickPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseMiddleClick(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseRightClick(e,s){}MouseRightClickPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseRightClick(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDoubleClick(e,s){}MouseDoubleClickPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseDoubleClick(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseWheel(e,s,i){}MouseWheelPre(e,s,i){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseWheel(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY,i)}constructor(e,s=650,i=350){this.mOffX=-12,this.mOffY=-12,this.scene=e,this.scene.definitions.push(this),this.InitIndeCanvas(s,i)}}}}]);