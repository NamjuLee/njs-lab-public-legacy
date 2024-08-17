"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[20587,6503],{31001:(t,e,o)=>{o.d(e,{L:()=>i});class i{constructor(t,e){this.firebaseConfig={apiKey:"AIzaSyA1yKg85WGZoshbk8xR23cXr3SwpqXVgIc",authDomain:"njs-data.firebaseapp.com",projectId:"njs-data",storageBucket:"njs-data.appspot.com",messagingSenderId:"635991152770",appId:"1:635991152770:web:722f5356e0d14cea50fc9b"},this.getData=t=>{let e=t.val();for(let o in e);},this.getError=t=>{console.error(t)}}sendData(t){}}},6503:(t,e,o)=>{o.r(e),o.d(e,{SmartDrawing:()=>a});var i=o(65812),s=o(37415),r=o(31001);class a{constructor(){this.modelLogisticRegression=void 0,this.modelMultiClassification=void 0,this.divText=void 0,this.firebaseWrapper=void 0,this.AppendDiv(),this.LoadModelFromPublic(),console.log(i.version),this.firebaseWrapper=new r.L("smartDrawing",this.callback)}callback(t){let e=t.val();console.log("callback -------- get data",e);for(let o in e)console.log(o,e[o])}AppendDiv(){const t=document.getElementById("main"),e=document.createElement("div");t&&e&&(this.divText=e,t.insertBefore(this.divText,null),this.divText.style.marginLeft="20px")}async LoadModelFromJsons(){}async LoadModelFromPublic(){let t="https://raw.githubusercontent.com/NamjuLee/data/master/smart-drawing/model/modelLogisticRegression0/model.json";this.modelLogisticRegression=await this.LoadModelFromPath(t),t="https://raw.githubusercontent.com/NamjuLee/data/master/smart-drawing/model/modelMultiClassification0/model.json",this.modelMultiClassification=await this.LoadModelFromPath(t)}async LoadModelFromPath(t){return await i.loadLayersModel(t)}PredictByLogisticRegression(t){if(void 0!==this.modelLogisticRegression)return(0,i.tidy)((()=>{const e=(0,i.tensor2d)([t]),o=this.modelLogisticRegression.predict(e).dataSync();return this.PredictionPostProcessingLogisticRegression(o[0])}));console.error("no model loaded")}PredictByMultiClassification(t){if(void 0!==this.modelMultiClassification)return(0,i.tidy)((()=>{const e=i.tensor2d([t]),o=this.modelMultiClassification.predict(e);{const t=Array.from(o.dataSync()),e=this.GetIndexBySortDescending(t),i=[];for(let o of e){const e=t[o],s="class:"+a.CLASS_TYPE[o]+", probability:"+e.toFixed(5);console.log(s),i.push(s)}this.UpdateDivWithText(i)}const s=o.argMax(-1).dataSync()[0];return a.CLASS_TYPE[s]}));console.error("no model loaded")}UpdateDivWithText(t){let e="<p>*** FROM DEEP LEARNING MODEL B *** </p>";for(let o=0;o<t.length;++o)e+="<p> ".concat(t[o],"</p>");this.divText.innerHTML=e}PredictionPostProcessingLogisticRegression(t){const e=Math.floor(t+.5);return a.CLASS_TYPE[e]}GetIndexBySortDescending(t){let e=t.length,o=new Array(e);for(var i=0;i<e;++i)o[i]=i;return o.sort(((e,o)=>t[e]>t[o]?-1:t[e]<t[o]?1:0)),o}Remove(){}Predict(t){const e=[];for(let a of t)e.push(new s.NVector3(a[0],a[1],0));const o=s.NVector3.ComputeDotProducts(e),i=this.GetInterpolatedArray(o,501);console.log("*** FROM DEEP LEARNING MODELS ***");const r=this.PredictByMultiClassification(i);return console.debug("pridiction:%c ".concat(r," from MC model"),"background: #4e2c7e; color: white"),this.firebaseWrapper.sendData({class:r,vec:t}),r}LinearInterpolate(t,e,o){return t+(e-t)*o}GetInterpolatedArray(t,e){let o={},i=(t.length-1)/(e-1);o[0]=t[0];for(let s=1;s<e-1;s++){let e=s*i,r=+Math.floor(e).toFixed(),a=+Math.ceil(e).toFixed(),n=e-r;o[s]=this.LinearInterpolate(t[r],t[a],n)}return o[e-1]=t[t.length-1],o}}a.CLASS_TYPE={0:"CIRCLE",1:"TRI-GON",2:"ARROW_SINGLE",3:"ARROW_DOUBLE",4:"RECTANGLE",5:"TEXT",6:"CURVE",7:"HEART",8:"CLOUD"}},20587:(t,e,o)=>{o.r(e),o.d(e,{Implementation:()=>s});var i=o(6503);class s{constructor(t){this.app=void 0,this.smartDrawing=void 0,this.app=t,this.smartDrawing=new i.SmartDrawing}}}}]);
//# sourceMappingURL=20587.5574fb50.chunk.js.map