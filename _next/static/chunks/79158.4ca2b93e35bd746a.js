"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79158,56122,99473],{56122:function(t,e,i){i.r(e),i.d(e,{MouseEventData:function(){return s},MouseInteraction:function(){return o}});var n=i(99473);class s{DeepCopy(){let t=new s(this.model);return t.x=this.x,t.y=this.y,t.z=this.z,t.preX=this.preX,t.preY=this.preY,t.preZ=this.preZ,t.pressedAlt=this.pressedAlt,t.pressedShift=this.pressedShift,t.pressedCtrl=this.pressedCtrl,t.isDoubleClick=this.isDoubleClick,t.isDown=this.isDown,t.isMove=this.isMove,t.lat=this.lat,t.long=this.long,t.wheel=this.wheel,t.preWheel=this.preWheel,t.yGLPicking=this.yGLPicking,t.CLICK_TYPE=this.CLICK_TYPE,t.command=this.command,t.native=this.native,t}constructor(t){this.x=-1,this.y=-1,this.z=-1,this.preX=-1,this.preY=-1,this.preZ=-1,this.CLICK_TYPE=n.CLICK_TYPE.MOVE,this.isDown=!1,this.isDoubleClick=!1,this.isMove=!1,this.pressedShift=!1,this.pressedAlt=!1,this.pressedCtrl=!1,this.lat=-1,this.long=-1,this.wheel=0,this.preWheel=0,this.isActive=!0,null!=t&&(this.model=t)}}class o{InitNativeMouseEvent(t){t.onclick=t=>{this.prevent=!1,this.timer=setTimeout(()=>{this.prevent||this.MouseClick(t),this.prevent=!1},this.delay)},t.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClick(t)},t.onmousedown=t=>{this.MouseDown(t)},t.onmouseup=t=>{this.MouseUp(t)},t.onmousemove=t=>{this.MouseMove(t)},t.addEventListener("wheel",t=>this.MouseWheel(t,t.deltaY))}MouseDown(t){this.click=!0,this.down=!0;let e=this.CommonEventBuilder(t);e.CLICK_TYPE=n.CLICK_TYPE.DOWN,e.isDown=!0,this.MouseEvenEmitting(e)}MouseClick(t){if(!this.click)return;let e=this.CommonEventBuilder(t);0===t.button?e.CLICK_TYPE=n.CLICK_TYPE.LEFT:1===t.button?e.CLICK_TYPE=n.CLICK_TYPE.MIDDLE:2===t.button&&(e.CLICK_TYPE=n.CLICK_TYPE.RIGHT),this.MouseEvenEmitting(e)}MouseDoubleClick(t){let e=this.CommonEventBuilder(t);e.CLICK_TYPE=n.CLICK_TYPE.DOUBLE,this.MouseEvenEmitting(e)}MouseDrag(t){this.click=!1,this.prevent=!0;let e=this.CommonEventBuilder(t);e.CLICK_TYPE=n.CLICK_TYPE.DRAG,e.isDown=!0,1===t.buttons?e.CLICK_TYPE=n.CLICK_TYPE.DRAG:4===t.buttons?e.CLICK_TYPE=n.CLICK_TYPE.DRAG_MIDDLE:2===t.buttons&&(e.CLICK_TYPE=n.CLICK_TYPE.DRAG_RIGHT),this.MouseEvenEmitting(e)}MouseMove(t){if(this.down){this.MouseDrag(t);return}let e=this.CommonEventBuilder(t);e.CLICK_TYPE=n.CLICK_TYPE.MOVE,e.isDown=!0,this.prevent=!0,this.MouseEvenEmitting(e)}MouseUp(t){this.down=!1,this.click=!0;let e=this.CommonEventBuilder(t);e.CLICK_TYPE=n.CLICK_TYPE.UP,e.isDown=!1,this.MouseEvenEmitting(e)}MouseWheel(t,e){let i=this.CommonEventBuilder(t);i.wheel=e,i.CLICK_TYPE=n.CLICK_TYPE.WHEEL,this.MouseEvenEmitting(i)}CommonEventBuilder(t){let e=new s(this.model);return e.preX=this.mouseEventDataPre.x,e.preY=this.mouseEventDataPre.y,e.pressedShift=t.shiftKey,e.pressedAlt=t.altKey,e.pressedCtrl=t.ctrlKey,e.x=t.offsetX,e.y=t.offsetY,e.preWheel=this.mouseEventDataPre.wheel,e.wheel=0,e.native=t,this.mouseEventDataPre=e,this.e=e,e}get stopPropagation(){return this._stopPropagation}set stopPropagation(t){t?this._stopPropagation=t:setTimeout(()=>{this._stopPropagation=t},500)}MouseEvenEmitting(t){this.MouseEventEmittingForViewController(t),this._stopPropagation||this.MouseEventEmittingForModel(t)}MouseEventEmittingForViewController(t){this.mouseInteractionUI&&this.mouseInteractionUI.MouseInteractionMenu(t)}MouseEventEmittingForModel(t){t.model.controllerCoreWrapper.activeCommandController.MouseEventController(t)}constructor(t){this.mouseEventDataPre=new s,this.isEnable=!0,this.clickCount=0,this.click=!1,this.prevent=!1,this.delay=250,this.down=!1,this._stopPropagation=!1,this.model=t}}},79158:function(t,e,i){i.r(e),i.d(e,{IOWrapper:function(){return s}});var n=i(56122);class s{InitEventListener(t){this.mouseInteraction.InitNativeMouseEvent(t),this.Resize()}Resize(){window.addEventListener("resize",t=>this.ReSizeWindow(t))}ReSizeWindow(t){let e=this.appCoreWrapper.model.modelViewCoreWrapper.viewWrapper.divHost;this.appCoreWrapper.model.graphicsCoreWrapper.canvasWrapper.canvas.ResizeCanvas(e.clientWidth,e.clientHeight)}constructor(t){this.appCoreWrapper=t,this.mouseInteraction=new n.MouseInteraction(this.appCoreWrapper.model)}}},99473:function(t,e,i){i.r(e),i.d(e,{ACTION_TYPE:function(){return n.KW},ACTIVECOMMAND_MODE:function(){return n.AG},ActiveCommandBase:function(){return n.wm},AppAccessibility:function(){return n.Wv},AppProperties:function(){return n.gj},ArrayUtility:function(){return n.R3},BrowserUtility:function(){return n.R7},CLICK_TYPE:function(){return n.uh},CLOGTYPE:function(){return n.g6},COMPILE_MODE:function(){return n.Iq},ColorUtility:function(){return n.mK},Deltatime:function(){return n.gk},EVENT_LISTENER_TYPE:function(){return n.GZ},FHTYPE:function(){return n.OH},GTYPE:function(){return n.OB},GeometryBase:function(){return n.bx},INTERACTION_MODE:function(){return n.WU},LINECAP:function(){return n.EQ},MathUtility:function(){return n.$H},NDataUtility:function(){return n.eu},NUI:function(){return n.Fc},NVector3:function(){return n.h9},NumericalMotion:function(){return n.aX},OPTIMIZER:function(){return n.sg},PRESS_TYPE:function(){return n.dc},TEXTALIGN:function(){return n.mH},TEXTBOX:function(){return n.SE},TOUCH_TYPE:function(){return n.KV},UNIT:function(){return n.iI}});var n=i(8483)}}]);