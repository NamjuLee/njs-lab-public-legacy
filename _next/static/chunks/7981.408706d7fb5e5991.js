(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7981,62977],{15510:function(t){function e(t){return Promise.resolve().then(function(){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}e.keys=function(){return[]},e.resolve=e,e.id=15510,t.exports=e},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){},871:function(t,e,i){"use strict";i.r(e),i.d(e,{AppSmartDrawing:function(){return o},Solution:function(){return a}});var r=i(44393),s=i(45169);class o{Predict(t){let e=[];for(let i of t)e.push(new s.Vector3(i[0],i[1],0));let i=n(e),r=(0,s.getInterpolatedArray)(i,501),o=this.smartDrawing.predictByLogisticRegression(r);console.debug("pridiction:%c ".concat(o," from LR Model"),"background: #ddb137; color: black");let[a,d]=this.smartDrawing.predictByMultiClassification(r);return console.debug("pridiction:%c ".concat(a," from MC model"),"background: #4e2c7e; color: white"),this.updateDivWithText(d),a}updateDivWithText(t){let e="<p>*** FROM DEEP LEARNING MODEL B *** </p>";for(let i=0;i<t.length;++i)e+="<p> ".concat(t[i],"</p>");this.divText.innerHTML=e}destroy(){try{for(;this.divHost&&this.divHost.lastElementChild;){let t=this.divHost.lastElementChild;this.divHost.removeChild(t)}}catch(t){console.error("Error removing child elements:",t)}}constructor(t){this.vec=[],this.render=t=>{for(let e=0;e<this.vec.length;++e)t.fillStyle="rgba(255, 0, 0, 0.15)",t.beginPath(),t.arc(this.vec[e][0],this.vec[e][1],5,0,2*Math.PI),t.closePath(),t.fill()},this.mouseDrag=(t,e)=>{this.vec.push([t,e])},this.mouseUp=(t,e)=>{this.Predict(this.vec),this.vec=[]},this.divHost=document.getElementById(t);let e=document.createElement("div");this.divHost.appendChild(e),e.style.alignItems="center",e.style.marginTop="80px",e.style.marginLeft="auto",e.style.marginRight="auto",e.style.width="300px",e.style.height="400px",this.smartDrawing=new r.SmartDrawing,this.rendererCanvas=new s.RendererCanvas(e),this.rendererCanvas.canvas.style.position="unset",this.rendererCanvas.canvas.width=300,this.rendererCanvas.canvas.height=300,this.rendererCanvas.canvas.style.background="#999",this.divText=document.createElement("div"),this.divText.textContent="*** FROM DEEP LEARNING MODEL B ***",e.append(this.divText),this.rendererCanvas.start(),this.rendererCanvas.render=t=>this.render(t),this.rendererCanvas.mouseDrag=(t,e)=>this.mouseDrag(t,e),this.rendererCanvas.mouseUp=(t,e)=>this.mouseUp(t,e)}}let n=t=>{let e=[];for(let i=0;i<t.length;++i)if(i<t.length-1){let r=new s.Vector3(t[i].x,t[i].y,t[i].z),o=new s.Vector3(t[i+1].x,t[i+1].y,t[i+1].z);o.x-=r.x,o.y-=r.y,o.z-=r.z;let n=(0,s.dotProduct)(new s.Vector3(1,0,0),(0,s.normalize)(o));Number.isNaN(n)?e.push(e[e.length-1]):e.push(n)}else{let r=new s.Vector3(t[i].x,t[i].y,t[i].z),o=new s.Vector3(t[0].x,t[0].y,t[0].z);o.x-=r.x,o.y-=r.y,o.z-=r.z;let n=(0,s.dotProduct)(new s.Vector3(1,0,0),(0,s.normalize)(o));Number.isNaN(n)?e.push(e[e.length-1]):e.push(n)}return e};class a{destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}constructor(t){this.divHost=document.getElementById(t),new o(t)}}},44393:function(t,e,i){"use strict";i.r(e),i.d(e,{SmartDrawing:function(){return s}});var r=i(88405);class s{predictByLogisticRegression(t){if(void 0===this.modelLogisticRegression){console.error("no model loaded");return}return(0,r.tidy)(()=>{let e=(0,r.tensor2d)([t]),i=this.modelLogisticRegression.predict(e).dataSync();return this.PredictionPostProcessingLogisticRegression(i[0])})}PredictionPostProcessingLogisticRegression(t){return s.CLASS_TYPE[Math.floor(t+.5)]}predictByMultiClassification(t){if(void 0===this.modelMultiClassification){console.error("no model loaded");return}return(0,r.tidy)(()=>{let e=r.tensor2d([t]),i=this.modelMultiClassification.predict(e),o=[];{let t=Array.from(i.dataSync());for(let e of n(t)){let i=t[e],r="class:"+s.CLASS_TYPE[e]+", probability:"+i.toFixed(5);o.push(r)}}let a=i.argMax(-1).dataSync()[0];return[s.CLASS_TYPE[a],o]})}constructor(){this.isLoaded=!1,o().then(t=>{[this.modelLogisticRegression,this.modelMultiClassification]=t,this.isLoaded=!0})}}s.CLASS_TYPE={0:"CIRCLE",1:"TRI-GON",2:"ARROW_SINGLE",3:"ARROW_DOUBLE",4:"RECTANGLE",5:"TEXT",6:"CURVE",7:"HEART",8:"CLOUD"};let o=async()=>{let t="https://raw.githubusercontent.com/NamjuLee/data/master/smart-drawing/model/modelLogisticRegression0/model.json",e=await (0,r.loadLayersModel)(t);return t="https://raw.githubusercontent.com/NamjuLee/data/master/smart-drawing/model/modelMultiClassification0/model.json",[e,await (0,r.loadLayersModel)(t)]},n=t=>{let e=Array(t.length);for(let i=0;i<t.length;++i)e[i]=i;return e.sort((e,i)=>t[e]>t[i]?-1:t[e]<t[i]?1:0),e}}}]);