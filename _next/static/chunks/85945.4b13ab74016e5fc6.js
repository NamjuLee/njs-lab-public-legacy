"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85945,99473],{85945:function(t,n,r){r.r(n),r.d(n,{Renderer:function(){return i}});var e=r(99473);class i{Init(){this.ctx=this.rendererWrapper.graphicsCoreWrapper.canvasWrapper.canvas.ctx,this.deltatime=new e.Deltatime,this.Loop()}Loop(){this.isActive&&(requestAnimationFrame(()=>{this.Loop()}),this.OnRender())}OnRender(){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.deltatime.UpdateFPS(),this.sceneWrapper&&this.sceneWrapper.Render(this.ctx)}Stop(){this.isActive=!1}constructor(t){this.isActive=!0,this.msLastFrame=0,this.msFpsLimit=30,this.rendererWrapper=t,this.Init()}}},99473:function(t,n,r){r.r(n),r.d(n,{ACTION_TYPE:function(){return e.KW},ACTIVECOMMAND_MODE:function(){return e.AG},ActiveCommandBase:function(){return e.wm},AppAccessibility:function(){return e.Wv},AppProperties:function(){return e.gj},ArrayUtility:function(){return e.R3},BrowserUtility:function(){return e.R7},CLICK_TYPE:function(){return e.uh},CLOGTYPE:function(){return e.g6},COMPILE_MODE:function(){return e.Iq},ColorUtility:function(){return e.mK},Deltatime:function(){return e.gk},EVENT_LISTENER_TYPE:function(){return e.GZ},FHTYPE:function(){return e.OH},GTYPE:function(){return e.OB},GeometryBase:function(){return e.bx},INTERACTION_MODE:function(){return e.WU},LINECAP:function(){return e.EQ},MathUtility:function(){return e.$H},NDataUtility:function(){return e.eu},NUI:function(){return e.Fc},NVector3:function(){return e.h9},NumericalMotion:function(){return e.aX},OPTIMIZER:function(){return e.sg},PRESS_TYPE:function(){return e.dc},TEXTALIGN:function(){return e.mH},TEXTBOX:function(){return e.SE},TOUCH_TYPE:function(){return e.KV},UNIT:function(){return e.iI}});var e=r(8483)}}]);