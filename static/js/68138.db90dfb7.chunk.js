"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[68138,45255,81292,65385,82305,89043,26461,96498,75975],{45255:(e,r,i)=>{i.r(r),i.d(r,{NUIWrapper:()=>t});var o=i(75975);class t{constructor(e,r){this.NUI=void 0,this.viewController=void 0,this.viewController=e,console.log("NUIWrapper"),this.NUI=new o.NUI(this.viewController.app.model.modelViewCoreWrapper.viewWrapper.div,r),console.log(this.NUI),this.BindingActiveCommandController(),console.log("done bind")}BindingActiveCommandController(){this.NUI.BindingActiveCommandController("NTF",this.viewController.app.model.controllerCoreWrapper.activeCommandController)}Resize(e,r){this.NUI.Resize(e,r)}Destroy(){this.NUI.Destroy()}}},82305:(e,r,i)=>{i.r(r),i.d(r,{EventInteraction:()=>o});class o{constructor(e){this.viewIO=void 0,this._propagation=!1,this.viewIO=e;this.viewIO.viewAppCoreWrapper.viewController.app.model.appCoreWrapper.ioWrapper.mouseInteraction.mouseInteractionUI=this}MouseInteractionMenu(e){this.viewIO.viewAppCoreWrapper.viewController.NUIWrapper.NUI.MouseInteractionMenu(e)}set stopPropagation(e){this.viewIO.viewAppCoreWrapper.viewController.app.model.appCoreWrapper.ioWrapper.mouseInteraction.stopPropagation=e,this._propagation=e}get stopPropagation(){return this._propagation}}},65385:(e,r,i)=>{i.r(r),i.d(r,{ViewIOWrapper:()=>t});var o=i(82305);class t{constructor(e){this.viewAppCoreWrapper=void 0,this.eventInteraction=void 0,this.viewAppCoreWrapper=e,this.eventInteraction=new o.EventInteraction(this)}}},81292:(e,r,i)=>{i.r(r),i.d(r,{ViewAppCoreWrapper:()=>t});var o=i(65385);class t{constructor(e){this.viewController=void 0,this.viewIOWrapper=void 0,this.viewController=e,this.viewIOWrapper=new o.ViewIOWrapper(this)}}},89043:(e,r,i)=>{i.r(r),i.d(r,{ViewAssetWrapper:()=>o});class o{constructor(e){this.viewController=void 0,this.viewController=e}}},96498:(e,r,i)=>{i.r(r),i.d(r,{ViewActiveCommand:()=>o});class o{constructor(e){this.viewControllerWrapper=void 0,this.viewControllerWrapper=e}Resize(e,r){this.viewControllerWrapper.viewController.NUIWrapper.Resize(e,r)}}},26461:(e,r,i)=>{i.r(r),i.d(r,{ViewControllerWrapper:()=>t});var o=i(96498);class t{constructor(e){this.viewController=void 0,this.viewActiveCommandController=void 0,this.viewController=e,this.viewActiveCommandController=new o.ViewActiveCommand(this)}}},68138:(e,r,i)=>{i.r(r),i.d(r,{ViewController:()=>a});var o=i(81292),t=i(89043),p=i(26461),s=i(45255);class a{constructor(e,r){this.app=void 0,this.viewAppCoreWrapper=void 0,this.viewAssetWrapper=void 0,this.viewControllerWrapper=void 0,this.NUIWrapper=void 0,this.app=e,this.viewAssetWrapper=new t.ViewAssetWrapper(this),this.viewAppCoreWrapper=new o.ViewAppCoreWrapper(this),this.viewControllerWrapper=new p.ViewControllerWrapper(this),console.log("00"),this.NUIWrapper=new s.NUIWrapper(this,r),console.log("10")}Resize(e,r){this.viewControllerWrapper.viewActiveCommandController.Resize(e,r)}Destroy(){this.NUIWrapper.Destroy()}}},75975:(e,r,i)=>{i.r(r),i.d(r,{ACTION_TYPE:()=>o.KW,ACTIVECOMMAND_MODE:()=>o.AG,ActiveCommandBase:()=>o.wm,AppAccessibility:()=>o.Wv,AppProperties:()=>o.gj,ArrayUtility:()=>o.R3,BrowserUtility:()=>o.R7,CLICK_TYPE:()=>o.uh,CLOGTYPE:()=>o.g6,COMPILE_MODE:()=>o.Iq,ColorUtility:()=>o.mK,Deltatime:()=>o.gk,EVENT_LISTENER_TYPE:()=>o.GZ,FHTYPE:()=>o.OH,GTYPE:()=>o.OB,GeometryBase:()=>o.bx,INTERACTION_MODE:()=>o.WU,LINECAP:()=>o.EQ,MathUtility:()=>o.$H,NDataUtility:()=>o.eu,NUI:()=>o.Fc,NVector3:()=>o.h9,NumericalMotion:()=>o.aX,OPTIMIZER:()=>o.sg,PRESS_TYPE:()=>o.dc,TEXTALIGN:()=>o.mH,TEXTBOX:()=>o.SE,TOUCH_TYPE:()=>o.KV,UNIT:()=>o.iI});var o=i(458)}}]);
//# sourceMappingURL=68138.db90dfb7.chunk.js.map