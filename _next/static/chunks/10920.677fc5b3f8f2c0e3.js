"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10920,3955],{3955:function(e,s,i){i.r(s),i.d(s,{DefinitionIndeCanvasCore:function(){return t}});var n=i(79309);class t{InitIndeCanvas(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:650,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:350;this.scene.implementation.app.needUI?this.indeCanvas=new n.D(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,50,50,e,s,!0):this.indeCanvas=new n.D(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,1,-25,e,s,!0),this.indeCanvas.title="TF Env",this.indeCanvas.btnHam.isHidden=!0,this.indeCanvas.btnMini.isHidden=!0,this.indeCanvas.RenderIndependentCanvas=e=>this.RenderIndependentCanvas(e)}get width(){return this.indeCanvas.canvas.width}get height(){return this.indeCanvas.canvas.height}Init(e){}RenderIndependentCanvas(e){}MouseMove(e,s){}MouseMovePre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseMove(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDown(e,s){}MouseDownPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseDown(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseUp(e,s){}MouseUpPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseUp(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDrag(e,s){}MouseDragPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseDrag(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseLeftClick(e,s){}MouseLeftClickPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseLeftClick(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseMiddleClick(e,s){}MouseMiddleClickPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseMiddleClick(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseRightClick(e,s){}MouseRightClickPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseRightClick(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDoubleClick(e,s){}MouseDoubleClickPre(e,s){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseDoubleClick(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseWheel(e,s,i){}MouseWheelPre(e,s,i){this.indeCanvas.IsMouseInsidePanel(e,s)&&this.MouseWheel(e-this.indeCanvas.vec.x+this.mOffX,s-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY,i)}constructor(e,s=650,i=350){this.mOffX=-12,this.mOffY=-12,this.scene=e,this.scene.definitions.push(this),this.InitIndeCanvas(s,i)}}},10920:function(e,s,i){i.r(s),i.d(s,{TFModel03Iris:function(){return h}});var n=i(88405),t=i(3955),a=i(49738);class h extends t.DefinitionIndeCanvasCore{Init(){this.tfModel=new d}RenderIndependentCanvas(e){n.tidy(()=>{})}constructor(e,s=650,i=350){super(e,s,i),this.xpos=100,this.ypos=100,this.xspeed=10,this.yspeed=10,this.xdirection=1,this.ydirection=1,this.rad=50,this.inputs=[],this.indeCanvas.title="TF Horsepower and Miles Per Gallon",this.Init()}}class d{async trainLoop(){await this.model.save("downloads://my-model"),console.log(await this.model.save("localstorage://ml/my-model-1")),this.train().then(e=>{console.log(e.history.loss[0]),setTimeout(()=>this.trainLoop(),1)})}async train(){return await this.model.fit(this.inputsTensor,this.labelsTensor,{epochs:50,shuffle:!0,validationData:[this.inputsTensor,this.labelsTensor]})}constructor(){let e=a.TFDataUtility.GetIrisData();n.util.shuffle(e);let s=[];for(let i=0;i<e.length;++i){let n=[];for(let s=0;s<e[i].length-1;++s)n.push(e[i][s]);s.push(n)}let i=[];for(let s=0;s<e.length;++s)0===e[s][e[s].length-1]?i.push([1,0,0]):1===e[s][e[s].length-1]?i.push([0,1,0]):2===e[s][e[s].length-1]&&i.push([0,0,1]);this.inputsTensor=n.tensor2d(s),this.labelsTensor=n.tensor2d(i),this.inputsTensor.print(),this.labelsTensor.print(),this.model=n.sequential();let t=n.layers.dense({inputShape:[this.inputsTensor.shape[1]],units:10,activation:"sigmoid"}),h=n.layers.dense({units:3,activation:"softmax"});this.model.add(t),this.model.add(h),this.model.compile({optimizer:n.train.adam(),loss:n.losses.softmaxCrossEntropy,metrics:["accuracy"]}),this.model.summary(),this.trainLoop()}}}}]);