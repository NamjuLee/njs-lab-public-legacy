"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[65069],{65069:(i,e,t)=>{t.r(e),t.d(e,{default:()=>M});var s=t(27366),l=t(77178),r=t(93002),o=t(92026),a=t(97642),n=t(94172),y=t(49861),h=(t(63780),t(23879)),d=(t(25243),t(69912)),b=t(31201),p=t(30651),v=t(6693),u=t(6061),c=t(29598),_=t(56811),f=t(19610),C=t(30219),w=t(84938),L=t(16791),g=t(41190);let m=class extends((0,v.h)((0,_.M)((0,u.q)((0,c.I)((0,L.Q)((0,w.K)((0,a.R)(p.Z)))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new l.Z({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=(0,C.a)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles((0,n.YP)((()=>this.visible),this._onVisibilityChange.bind(this),n.Z_))}_writeLayers(i,e,t,s){const l=[];if(!i)return l;i.forEach((i=>{const e=(0,g.Nw)(i,s.webmap?s.webmap.getLayerJSONFromResourceInfo(i):null,s);(0,o.pC)(e)&&e.layerType&&l.push(e)})),e.layers=l}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:f.T},i)),Promise.resolve(this)}loadAll(){return(0,r.G)(this,(i=>{i(this.layers,this.tables)}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=(0,n.YP)((()=>i.visible),(e=>this._onChildVisibilityChange(i,e)),n.Z_)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1)}))}_enforceVisibility(i,e){if(!(0,h.vw)(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e}))}}_onVisibilityChange(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i}))}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};(0,s._)([(0,y.Cb)({readOnly:!0,dependsOn:[]})],m.prototype,"allLayers",void 0),(0,s._)([(0,y.Cb)({readOnly:!0})],m.prototype,"allTables",void 0),(0,s._)([(0,y.Cb)()],m.prototype,"fullExtent",void 0),(0,s._)([(0,y.Cb)({json:{read:!0,write:!0}})],m.prototype,"blendMode",void 0),(0,s._)([(0,y.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),(0,s._)([(0,b.c)("layers")],m.prototype,"_writeLayers",null),(0,s._)([(0,y.Cb)({type:["GroupLayer"]})],m.prototype,"operationalLayerType",void 0),(0,s._)([(0,y.Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",null),(0,s._)([(0,y.Cb)()],m.prototype,"spatialReference",void 0),(0,s._)([(0,y.Cb)({json:{read:!1},readOnly:!0,value:"group"})],m.prototype,"type",void 0),(0,s._)([(0,y.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],m.prototype,"visibilityMode",null),m=(0,s._)([(0,d.j)("esri.layers.GroupLayer")],m);const M=m}}]);
//# sourceMappingURL=65069.945314de.chunk.js.map