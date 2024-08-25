"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23767],{23767:function(e,i,t){t.r(i),t.d(i,{default:function(){return l}});var n=t(86641),s=t(37180),a=t(20128);t(65223),t(3457),t(94605);var d=t(64186),r=t(18964);let u=class extends r.default{initialize(){this.addHandles([(0,a.YP)(()=>this.view.scale,()=>this._update(),a.nn)],"constructor")}isUpdating(){let e=this.layer.sublayers.some(e=>null!=e.renderer),i=this._commandsQueue.updateTracking.updating,t=null!=this._updatingRequiredFieldsPromise,n=!this._workerProxy,a=this.dataUpdating,d=e&&(i||t||n||a);return(0,s.Z)("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${d}
  -> hasRenderer ${e}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${t}
  -> updatingProxy ${n}
  -> updatingPipeline ${a}
`),d}},l=u=(0,n._)([(0,d.j)("esri.views.2d.layers.SubtypeGroupLayerView2D")],u)}}]);