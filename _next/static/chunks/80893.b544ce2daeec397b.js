"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80893],{79578:function(e,t,i){i.d(t,{SR:function(){return d},Ui:function(){return u}});var s=i(689),r=i(20795),n=i(87394),a=i(20058),h=i(5005),o=i(12206),l=i(62329);function u(e){return c(e,!0)}function d(e){return c(e,!1)}function c(e,t){if(null==e)return null;let i=e.spatialReference,r=(0,l.C5)(i),a=(0,s.AK)(e)?e.toJSON():e;if(!r)return a;let u=(0,l.sS)(i)?102100:4326,d=o.UZ[u].maxX,c=o.UZ[u].minX;if((0,h.wp)(a))return p(a,d,c);if((0,h.aW)(a))return a.points=a.points.map(e=>p(e,d,c)),a;if((0,h.YX)(a))return function(e,t){if(!t)return e;let i=(function(e,t){let i=[],{ymin:s,ymax:r,xmin:n,xmax:a}=e,h=e.xmax-e.xmin,[o,l]=t.valid,{x:u,frameId:d}=_(e.xmin,t),{x:c,frameId:p}=_(e.xmax,t),y=u===c&&h>0;if(h>2*l){let e={xmin:n<a?u:c,ymin:s,xmax:l,ymax:r},t={xmin:o,ymin:s,xmax:n<a?c:u,ymax:r},h={xmin:0,ymin:s,xmax:l,ymax:r},_={xmin:o,ymin:s,xmax:0,ymax:r},y=[],f=[];m(e,h)&&y.push(d),m(e,_)&&f.push(d),m(t,h)&&y.push(p),m(t,_)&&f.push(p);for(let e=d+1;e<p;e++)y.push(e),f.push(e);i.push(new g(e,[d]),new g(t,[p]),new g(h,y),new g(_,f))}else u>c||y?i.push(new g({xmin:u,ymin:s,xmax:l,ymax:r},[d]),new g({xmin:o,ymin:s,xmax:c,ymax:r},[p])):i.push(new g({xmin:u,ymin:s,xmax:c,ymax:r},[d]));return i})(e,t).map(e=>e.extent);return i.length<2?i[0]||e:i.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:i.map(e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]])}}(a,r);if((0,h.oU)(a)||(0,h.l9)(a)){let e=(0,n.$P)(b,a),i={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},s=(0,o.XZ)(i.xmin,c)*(2*d),r=0===s?a:(0,o.Sy)(a,s);return i.xmin+=s,i.xmax+=s,i.xmax>d?f(r,d,t):i.xmin<c?f(r,c,t):r}return a}function p(e,t,i){if(Array.isArray(e)){let s=e[0];if(s>t){let i=(0,o.XZ)(s,t);e[0]=s+-2*t*i}else if(s<i){let t=(0,o.XZ)(s,i);e[0]=s+-2*i*t}}else{let s=e.x;if(s>t){let i=(0,o.XZ)(s,t);e.x+=-2*t*i}else if(s<i){let t=(0,o.XZ)(s,i);e.x+=-2*i*t}}return e}function _(e,t){let[i,s]=t.valid,r=2*s,n,a=0;return e>s?(n=Math.ceil(Math.abs(e-s)/r),e-=n*r,a=n):e<i&&(n=Math.ceil(Math.abs(e-i)/r),e+=n*r,a=-n),{x:e,frameId:a}}function m(e,t){let{xmin:i,ymin:s,xmax:r,ymax:n}=t;return y(e,i,s)&&y(e,i,n)&&y(e,r,n)&&y(e,r,s)}function y(e,t,i){return t>=e.xmin&&t<=e.xmax&&i>=e.ymin&&i<=e.ymax}function f(e,t,i=!0){let s=!(0,h.l9)(e);if(s&&(0,a.Zy)(e),i)return(new x).cut(e,t);let r=s?e.rings:e.paths,n=s?4:2,o=r.length,l=-2*t;for(let e=0;e<o;e++){let t=r[e];if(t&&t.length>=n){let e=[];for(let i of t)e.push([i[0]+l,i[1]]);r.push(e)}}return s?e.rings=r:e.paths=r,e}class g{constructor(e,t){this.extent=e,this.frameIds=t}}let b=(0,r.Ue)();class x{constructor(){this._linesIn=[],this._linesOut=[]}cut(e,t){let i;if(this._xCut=t,e.rings)this._closed=!0,i=e.rings,this._minPts=4;else{if(!e.paths)return null;this._closed=!1,i=e.paths,this._minPts=2}for(let e of i){if(!e||e.length<this._minPts)continue;let t=!0;for(let i of e)t?(this.moveTo(i),t=!1):this.lineTo(i);this._closed&&this.close()}for(let e of(this._pushLineIn(),this._pushLineOut(),i=[],this._linesIn))e&&e.length>=this._minPts&&i.push(e);let s=-2*this._xCut;for(let e of this._linesOut)if(e&&e.length>=this._minPts){for(let t of e)t[0]+=s;i.push(e)}return this._closed?e.rings=i:e.paths=i,e}moveTo(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}lineTo(e){let t=this._side(e[0]);if(t*this._prevSide==-1){let i=this._intersect(this._prevPt,e);this._lineTo(this._xCut,i,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}close(){let e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(e,t,i){this._closed?(this._lineIn.push([i<=0?e:this._xCut,t]),this._lineOut.push([i>=0?e:this._xCut,t])):(i<=0&&this._lineIn.push([e,t]),i>=0&&this._lineOut.push([e,t]))}_lineTo(e,t,i){this._closed?(w(this._lineIn,i<=0?e:this._xCut,t),w(this._lineOut,i>=0?e:this._xCut,t)):i<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([e,t])):i>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([e,t])):this._prevSide<0?(this._lineIn.push([e,t]),this._lineOut.push([e,t])):this._prevSide>0&&(this._lineOut.push([e,t]),this._lineIn.push([e,t]))}_checkClosingPt(e){let t=e.length;t>3&&e[0][0]===this._xCut&&e[t-2][0]===this._xCut&&e[1][0]===this._xCut&&(e[0][1]=e[t-2][1],e.pop())}_side(e){return e<this._xCut?-1:e>this._xCut?1:0}_intersect(e,t){let i=(this._xCut-e[0])/(t[0]-e[0]);return e[1]+i*(t[1]-e[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}function w(e,t,i){let s=e.length;s>1&&e[s-1][0]===t&&e[s-2][0]===t?e[s-1][1]=i:e.push([t,i])}},80893:function(e,t,i){i.d(t,{Z:function(){return K}});var s=i(86641),r=i(94761),n=i(78628),a=i(37180),h=i(2090),o=i(36152),l=i(31124),u=i(20128),d=i(89312);i(65223);var c=i(64186),p=i(20795),_=i(5005),m=i(32370),y=i(43335),f=i(43139),g=i(98499),b=i(36091),x=i(58638),w=i(89019),I=i(1604),v=i(55434),S=i(74451);async function T(e,t,i){let s=[],r={scaleInfo:(0,S.UX)(e),scaleExpression:null};for(let e of t)switch(e.type){case"marker":s.push(...(0,S.zw)(i.instances.marker,e,v.Jh,r));break;case"fill":null==e.spriteRasterizationParam?s.push(...(0,S.U9)(i.instances.fill,e,r)):s.push(...(0,S.ep)(i.instances.complexFill,e,!1,r));break;case"line":e.spriteRasterizationParam?s.push(...(0,S.cs)(i.instances.texturedLine,e,!1,r)):s.push(...(0,S.KR)(i.instances.line,e,!1,r));break;case"text":s.push(...(0,S.QA)(i.instances.text,e,v.Jh,r))}return s}var R=i(54747),C=i(63520),M=i(92266),G=i(82278),O=i(24458),P=i(83339),U=i(73503),Z=i(59854);class k extends Z.s{static from(e,t,i){return new k(e,t,i)}constructor(e,t,i){super(i),this._items=e,this._tile=t,this._index=-1,this._cachedGeometry=null;let s=t.lod;s.wrap&&(this._wrappingInfo={worldSizeX:s.worldSize[0]})}get _current(){return this._items[this._index]}getItem(){return this._current}getZOrder(){return this._current.zOrder}getMeshWriters(){return this._current.symbolResource?.symbolInfo.meshWriters??[]}hasField(e){return null!=this._current.attributes[e]}field(e){return this.readAttribute(e)}get geometryType(){let e=(0,_.Ji)(this._current.geometry);return"esriGeometryPoint"===e?"esriGeometryMultipoint":e}getCursor(){return this.copy()}copy(){let e=new k(this._items,this._tile,this.metadata);return this.copyInto(e),e}copyInto(e){super.copyInto(e),e._cachedGeometry=this._cachedGeometry,e._index=this._index}get fields(){throw Error("Fields reading not supported to graphics.")}get hasFeatures(){return!!this._items.length}get hasNext(){return this._index+1<this._items.length}get exceededTransferLimit(){throw Error("InternalError: exceededTransferLimit not implemented for graphics.")}get hasZ(){return!1}get hasM(){return!1}getInTransform(){return this._tile.transform}getSize(){return this._items.length}getAttributeHash(){let e="";for(let t in this._current.attributes)e+=this._current.attributes[t];return e}getObjectId(){return this._items[this._index].objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){throw Error("InternalError: Setting displayId not supported for graphics.")}setIndex(e){this._index=e}getIndex(){return this._index}next(){for(this._cachedGeometry=null;++this._index<this._items.length&&!this._getExists(););return this._index<this._items.length}readGeometryArea(){throw Error("InternalError: readGeometryArea not supported for graphics.")}_readGeometry(){if(!this._cachedGeometry){let e=(0,P.GH)(this._current.projectedGeometry,this.hasZ,this.hasM);if("esriGeometryPolyline"===this.geometryType&&(e=(0,P.zj)(new U.Z,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform.scale[0])),this._cachedGeometry=(0,P.Nh)(new U.Z,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform),!this._cachedGeometry)return null;this._wrapGeometry(this._cachedGeometry)}return this._cachedGeometry}_wrapGeometry(e){if(!this._wrappingInfo)return;let{worldSizeX:t}=this._wrappingInfo;if(e.isPoint)return 1===t?(e.coords.push(b.i9,0),e.coords.push(-(2*b.i9),0),void e.lengths.push(3)):2===t?(e.coords.push(2*b.i9,0),e.coords.push(-(4*b.i9),0),void e.lengths.push(3)):void this._wrapVertex(e.coords,0,2,t);if("esriGeometryMultipoint"!==this.geometryType);else{if(1===t){let t=e.coords.slice();t[0]-=512;let i=e.coords.slice();i[0]+=512,e.coords.push(...t,...i);let s=e.lengths[0];return void e.lengths.push(s,s)}this._wrapVertex(e.coords,0,2,t)}}_wrapVertex(e,t,i,s){let r=t*i,n=e[r];n<-b.i9*(s-2)?e[r]=n+b.i9*s:n>b.i9*(s-1)&&(e[r]=n-b.i9*s)}_readX(){let e=this._readGeometry();return null!=e?e.coords[0]:0}_readY(){let e=this._readGeometry();return null!=e?e.coords[1]:0}_readServerCentroid(){switch(this.geometryType){case"esriGeometryPolygon":{let e=(0,O.tO)(this._current.projectedGeometry),t=new U.Z([],e);return(0,P.Nh)(new U.Z,t,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}case"esriGeometryPolyline":{let e=this._current.projectedGeometry,t=(0,O.a)(e.paths,this.hasZ),i=new U.Z([],t);return(0,P.Nh)(new U.Z,i,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}}return null}_readAttribute(e,t){let i=this._current.attributes[e];if(void 0!==i)return i;let s=e.toLowerCase();for(let e in this._current.attributes)if(e.toLowerCase()===s)return this._current.attributes[e]}_readAttributes(){return this._current.attributes}}var z=i(4392),E=i(41663),A=i(87394),F=i(38028),q=i(62329),j=i(20172),V=i(20058),D=i(79578),L=i(26978),X=i(75739);class ${static fromGraphic(e,t,i,s){return new $(e.geometry,t,{...e.attributes},e.visible,e.uid,i,s)}constructor(e,t,i,s,r,n,a){this.geometry=e,this.symbol=t,this.attributes=i,this.visible=s,this.objectId=r,this.zOrder=n,this.displayId=a,this.bounds=(0,p.Ue)(),this.prevBounds=(0,p.Ue)(),this.size=[0,0,0,0]}get linearCIM(){return this.symbolResource?.symbolInfo.linearCIM}update(e,t,i){return(this.geometry!==e.geometry||JSON.stringify(this.attributes)!==JSON.stringify(e.attributes)||this.symbol!==t||this.zOrder!==i||this.visible!==e.visible)&&(this.prevBounds=this.bounds,this.bounds=(0,p.Ue)(),this.zOrder=i,this.geometry=e.geometry,this.attributes={...e.attributes},this.symbol=t,this.visible=e.visible,this.symbolResource=null,this.projectedGeometry=null,!0)}async projectAndNormalize(e){let t=this.geometry;if(!t||!t.spatialReference||"mesh"===t.type)return;"extent"===t.type&&(t=(0,X.XA)(t)),await (0,L._W)(t.spatialReference,e);let i=(0,D.SR)(t);if(!i)return;let s=(0,L.iV)(i,t.spatialReference,e);s&&(0,V.pW)(s),this.projectedGeometry=(0,_.YX)(s)?(0,X.XA)(s):s}}class N{constructor(e,t,i){this.added=e,this.updated=t,this.removed=i}hasAnyUpdate(){return!!(this.added.length||this.updated.length||this.removed.length)}}function W(e,t){return t.zOrder-e.zOrder}class H{constructor(e,t,i,s,r){this._items=new Map,this._boundsDirty=!1,this._outSpatialReference=e,this._cimResourceManager=t,this._hittestDrawHelper=new j.Tu(t),this._tileInfoView=i,this._store=r;let n=i.getClosestInfoForScale(s);this._resolution=this._tileInfoView.getTileResolution(n.level)}items(){return this._items.values()}getItem(e){return this._items.get(e)}async update(e,t,i){let s=[],r=[],n=[],a=new Set,h=[],o=0;for(let n of e.items){o++;let e=n.uid,l=this._items.get(e),u=t(n);if(a.add(e),l){l.update(n,u,o)&&(r.push(l),h.push(this._updateItem(l,i)));continue}let d=this._store.createDisplayIdForObjectId(e),c=$.fromGraphic(n,u,o,d);h.push(this._updateItem(c,i)),this._items.set(c.objectId,c),s.push(c)}for(let[e,t]of this._items.entries())a.has(e)||(this._store.releaseDisplayIdForObjectId(e),this._items.delete(e),n.push(t));return await Promise.all(h),this._index=null,new N(s,r,n)}updateLevel(e){this._resolution!==e&&(this._index=null,this._boundsDirty=!0,this._resolution=e)}hitTest(e,t,i,s,r){let n=(0,a.Z)("esri-mobile"),h=n?b.wN:b.S3,o=h+(n?0:b.pd);e=(0,F.or)(e,this._tileInfoView.spatialReference);let l=s*window.devicePixelRatio*o,u=(0,p.Ue)();u[0]=e-l,u[1]=t-l,u[2]=e+l,u[3]=t+l;let d=s*window.devicePixelRatio*h,c=(0,p.Ue)();c[0]=e-d,c[1]=t-d,c[2]=e+d,c[3]=t+d;let _=.5*s*(o+X.OC),m=this._searchIndex(e-_,t-_,e+_,t+_);if(!m||0===m.length)return[];let y=[],f=(0,p.Ue)(),g=(0,p.Ue)();for(let e of m){if(!e.visible)continue;let{projectedGeometry:t,symbolResource:i}=e;this._getSymbolBounds(f,i,t,g,r),g[3]=g[2]=g[1]=g[0]=0,(0,p.kK)(f,u)&&y.push(e)}if(0===y.length)return[];let x=this._hittestDrawHelper,w=[];for(let e of y){let{projectedGeometry:t,symbolResource:i}=e;if(!i)continue;let{textInfo:n,symbolInfo:a}=i,h=a.cimSymbol;x.hitTest(c,h.symbol,t,n,r,s)&&w.push(e)}return w.sort(W),w.map(e=>e.objectId)}queryItems(e){return 0===this._items.size?[]:this._searchForItems(e)}clear(){this._items.clear(),this._index=null}async _updateItem(e,t){await e.projectAndNormalize(this._outSpatialReference),await t(e);let{size:i}=e;i[0]=i[1]=i[2]=i[3]=0,this._getSymbolBounds(e.bounds,e.symbolResource,e.projectedGeometry,e.size,0)}_searchIndex(e,t,i,s){return this._boundsDirty&&(this._items.forEach(e=>this._getSymbolBounds(e.bounds,e.symbolResource,e.projectedGeometry,e.size,0)),this._boundsDirty=!1),this._index||(this._index=(0,E.r)(9,e=>({minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]})),this._index.load(Array.from(this._items.values()))),this._index.search({minX:e,minY:t,maxX:i,maxY:s})}_searchForItems(e){let t=this._tileInfoView.spatialReference,i=e.bounds,s=(0,q.C5)(t);if(s&&t.isWrappable){let[t,r]=s.valid,n=1e-5>Math.abs(i[2]-r),a=1e-5>Math.abs(i[0]-t);if((!n||!a)&&(n||a)){let s;let a=e.resolution;return s=(0,p.Ue)(n?[t,i[1],t+a*X.OC,i[3]]:[r-a*X.OC,i[1],r,i[3]]),[...new Set([...this._searchIndex(i[0],i[1],i[2],i[3]),...this._searchIndex(s[0],s[1],s[2],s[3])])]}}return this._searchIndex(i[0],i[1],i[2],i[3])}_getSymbolBounds(e,t,i,s,r){if(!t||!t.symbolInfo.linearCIM||!i)return null;if(e||(e=(0,p.Ue)()),(0,A.$P)(e,i),!s||0===s[0]&&0===s[1]&&0===s[2]&&0===s[3]){let{textInfo:e,symbolInfo:i}=t,n=i.cimSymbol;s||(s=[0,0,0,0]);let a=y.bP.getSymbolInflateSize(s,n.symbol,this._cimResourceManager,r,e);s[0]=(0,z.F2)(a[0]),s[1]=(0,z.F2)(a[1]),s[2]=(0,z.F2)(a[2]),s[3]=(0,z.F2)(a[3])}let n=this._resolution,a=y.bP.safeSize(s);return e[0]-=a*n,e[1]-=a*n,e[2]+=a*n,e[3]+=a*n,e}}var B=i(25101),Y=i(44973);class J{static getOrCreate(e,t,i){let s=t.get(e.id);return s||(s=new J(e,i),t.set(e.id,s)),s}static fromItems(e,t,i){let s=new J(e,i);return s.addedOrModified.push(...t),s}constructor(e,t){this.tile=e,this.metadata=t,this.addedOrModified=[],this.removed=[]}get reader(){return this._reader||(this._reader=k.from(this.addedOrModified,this.tile,this.metadata)),this._reader}}let Q=class extends(0,h.IG)(r.Z){constructor(e){super(e),this._attached=!1,this._tiles=new Map,this._controller=new AbortController,this._hashToSymbolInfo=new Map,this._lastCleanup=performance.now(),this._cleanupRequired=!0,this.lastUpdateId=-1,this.renderer=null,this._updateTracking=new Y.x({debugName:"GraphicsView2D"}),this.updateRequested=!1,this.defaultPointSymbolEnabled=!0,this._commandQueue=new B.Z({process:e=>{if("update"===e.type)return this._update();throw Error("InternalError: Unsupported command")}}),this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this.container.destroy(),this.view=null,this.renderer=null,this._set("graphics",null),this._controller.abort(),this._graphicStore.clear(),this._attributeStore=null,this._hashToSymbolInfo.clear(),this._updateTracking.destroy(),this._commandQueue.destroy()}_initAttributeStore(){this._storage=new M.O({spatialReference:this.view.spatialReference,fields:new m.Z}),this._attributeStore=new C.p({isLocal:!0,update:e=>{(0,a.Z)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`,{message:e}),this.container.attributeView.requestUpdate(e),this.container.requestRender(),(0,a.Z)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`,{message:e})}});let e=(0,R.$F)(null,[]);this._attributeStore.update(e,this._storage,null),this.container.checkHighlight=()=>this._attributeStore.hasHighlight}initialize(){this._initAttributeStore(),this._metadata=G.m.create(this.view.spatialReference),this._resourceProxy=new I.f({fetch:e=>Promise.all(e.map(e=>this.view.stage.textureManager.rasterizeItem(e))),fetchDictionary:e=>{throw Error("InternalError: Graphics do not support Dictionary requests")}}),this.addHandles([(0,u.YP)(()=>this._effectiveRenderer,()=>this._pushUpdate()),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",()=>{this.addHandles([this.graphics.on("change",()=>this._pushUpdate())]),this._graphicStore=new H(this.view.spatialReference,this._cimResourceManager,this.view.featuresTilingScheme,this.view.state.scale,this._attributeStore),this._attached=!0,this.requestUpdate(),this._pushUpdate()})]),this._updateTracking.addUpdateTracking("CommandQueue",this._commandQueue.updateTracking);let e=this.view.graphicsTileStore.tiles;this._onTileUpdate({added:e,removed:[]})}get _effectiveRenderer(){return"function"==typeof this.renderer?this.renderer():this.renderer}get _cimResourceManager(){return this.view.stage.textureManager.resourceManager}get updating(){let e=!this._attached||this._updateTracking.updating;return(0,a.Z)("esri-2d-log-updating")&&console.log(`Updating GraphicsView2D: ${e}
  -> attaching ${!this._attached}
  -> updateTracking ${this._updateTracking.updating}`),e}hitTest(e){if(!this.view||this.view.suspended)return[];let{resolution:t,rotation:i}=this.view.state,s=this._graphicStore.hitTest(e.x,e.y,2,t,i),r=new Set(s),a=this.graphics.items.reduce((e,t)=>(r.has(t.uid)&&e.set(t.uid,t),e),new Map);return s.map(e=>a.get(e)).filter(n.pC)}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback()),this.notifyChange("updating")}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))}viewChange(){this.requestUpdate()}setHighlight(e){let t=[];for(let{objectId:i,highlightFlags:s}of e){let e=this._graphicStore.getItem(i)?.displayId;t.push({objectId:i,highlightFlags:s,displayId:e})}this._attributeStore.setHighlight(t,e),this._pushUpdate()}graphicUpdateHandler(e){this._pushUpdate()}update(e){this.updateRequested=!1,this._attached&&this._graphicStore.updateLevel(e.state.resolution)}pushUpdate(){this._pushUpdate()}_pushUpdate(){(0,l.R8)(this._commandQueue.push({type:"update"}))}async _update(){try{(0,a.Z)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);let e=await this._graphicStore.update(this.graphics,e=>this._getSymbolForGraphic(e),e=>this._ensureSymbolResource(e));if(!e.hasAnyUpdate())return void this._attributeStore.sendUpdates();e.removed.length&&(this._cleanupRequired=!0),(0,a.Z)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`,e);let t=this._createTileMessages(e);for(let i of(await this._fetchResources(t),this._write(t),e.added))this._setFilterState(i);for(let t of e.updated)this._setFilterState(t);(0,a.Z)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`,e),this._attributeStore.sendUpdates(),(0,a.Z)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`,e)}catch(e){}this._cleanupSharedResources()}_createTileMessages(e){let t=new Map;for(let i of e.added)for(let e of this.view.graphicsTileStore.getIntersectingTiles(i.bounds))J.getOrCreate(e,t,this._metadata).addedOrModified.push(i);for(let i of e.updated){let e=this.view.graphicsTileStore.getIntersectingTiles(i.prevBounds),s=this.view.graphicsTileStore.getIntersectingTiles(i.bounds);for(let s of e)J.getOrCreate(s,t,this._metadata).removed.push(i.displayId);for(let e of s)J.getOrCreate(e,t,this._metadata).addedOrModified.push(i)}for(let i of e.removed)for(let e of this.view.graphicsTileStore.getIntersectingTiles(i.bounds))J.getOrCreate(e,t,this._metadata).removed.push(i.displayId);return Array.from(t.values())}async _fetchResources(e){for(let{tile:t,reader:i}of e){(0,a.Z)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.id}] GraphicsView fetchResources`,e);let s=i.getCursor();for(;s.next();)for(let e of s.getMeshWriters())e.enqueueRequest(this._resourceProxy,s,t.createArcadeEvaluationOptions(this.view.timeZone))}await this._resourceProxy.fetchEnqueuedResources()}_write(e){for(let t of e){(0,a.Z)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.tile.id}] GraphicsView write`,t);let e=this._writeMeshes(t),i=this._tiles.get(t.tile.key);i||(i=this._createFeatureTile(t.tile.key)),(0,a.Z)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.tile.id}] GraphicsView onTileData`,t),this.container.onTileData(i,{type:"update",modify:e,remove:t.removed,end:!1,attributeEpoch:this._attributeStore.epoch}),this.container.requestRender()}}_writeMeshes(e){let t=new w._(e.tile.id),i=e.reader.getCursor();for(;i.next();){for(let s of(t.entityStart(i.getDisplayId(),i.getZOrder()),i.getMeshWriters()))s.write(t,this._resourceProxy,i,e.tile.createArcadeEvaluationOptions(this.view.timeZone),e.tile.level);t.entityEnd()}return{...t.serialize().message,tileId:e.tile.id}}_setFilterState(e){let t=e.displayId,i=this._attributeStore.getHighlightFlags(e.objectId);this._attributeStore.setData(t,0,0,i|(e.visible?b.g3:0))}_getSymbolForGraphic(e){return null!=e.symbol?e.symbol:null!=this._effectiveRenderer?this._effectiveRenderer.getSymbol(e):this._getNullSymbol(e)}async _ensureSymbolResource(e){if(!e.symbol)return;let t=await this._getSymbolInfo(e.symbol);if(!t)return;let i=t.linearCIM.filter(e=>"text"===e.type);if(i.length>0){let s=await this._getTextResources(e,i);e.symbolResource={symbolInfo:t,textInfo:s}}else e.symbolResource={symbolInfo:t}}_getSymbolInfo(e){let t=e.hash();return this._hashToSymbolInfo.has(t)||this._hashToSymbolInfo.set(t,this._createSymbolInfo(t,e).catch(e=>null)),this._hashToSymbolInfo.get(t)}async _createSymbolInfo(e,t){let i=await this._convertToCIMSymbol(t),s=await this._createLinearCIM(i);return{hash:e,cimSymbol:i,linearCIM:s,meshWriters:await this._createMeshWriters(i,s)}}async _convertToCIMSymbol(e){let t=(0,y.rW)(e);return"web-style"===t.type?(await t.fetchCIMSymbol()).data:t}async _createLinearCIM(e){return await Promise.all(y.B$.fetchResources(e.symbol,this._cimResourceManager,[])),this.view.stage.cimAnalyzer.analyzeSymbolReference(e,!1)}async _createMeshWriters(e,t){(0,l.k_)(this._controller.signal);let i=this.container.instanceStore,s=this.view.stage.meshWriterRegistry;return Promise.all((await T(e,t,i)).map(e=>s.createMeshWriter(this._storage,this._resourceProxy,{tileInfo:this.view.featuresTilingScheme.tileInfo},e)))}_onTileUpdate(e){if(e.added&&e.added.length>0)for(let t of e.added)this._updateTracking.addPromise(this._addTile(t));if(e.removed&&e.removed.length>0)for(let t of e.removed)this._removeTile(t.key)}_createFeatureTile(e){let t=this.view.featuresTilingScheme.getTileBounds((0,p.Ue)(),e),i=this.view.featuresTilingScheme.getTileResolution(e.level),s=new x.$(e,i,t[0],t[3]);return this._tiles.set(e,s),this.container.addChild(s),s}async _addTile(e){if(!this._attached)return;let t=this._graphicStore.queryItems(e);if(!t.length)return;let i=this._createFeatureTile(e.key),s=J.fromItems(e,t,this._metadata);await this._fetchResources([s]);let r=this._writeMeshes(s);i.onMessage({type:"append",append:r,clear:!1,end:!0,attributeEpoch:this._attributeStore.epoch})}_removeTile(e){if(!this._tiles.has(e))return;let t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}_getNullSymbol(e){let t=e.geometry;return(0,_.l9)(t)?g.mW:(0,_.oU)(t)||(0,_.YX)(t)?g.kD:this.defaultPointSymbolEnabled?g.G:null}async _getTextResources(e,t){let i=[],s=[];for(let r=0;r<t.length;r++){let n=t[r],{resource:a,overrides:h}=n.textRasterizationParam;if(h?.length>0){let t=f.E.resolveSymbolOverrides({type:"CIMSymbolReference",primitiveOverrides:h,symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:a.symbol.height,anchorPointUnits:"Relative",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:a.symbol,textString:a.textString}],scaleSymbolsProportionally:!0,respectFrame:!0}]}},e,this.view.spatialReference,null,(0,_.Ji)(e.projectedGeometry),null,null);t.then(e=>{let{textString:t}=e.symbolLayers[0].markerGraphics[0];s.push({type:"cim-rasterization-info",resource:{type:"text",textString:t||"",font:a.font}}),n.text=a.textString=t||""}),i.push(t)}else s.push({type:"cim-rasterization-info",resource:a})}i.length>0&&await Promise.all(i);let r=s.map(e=>this.view.stage.textureManager.rasterizeItem(e)),n=await Promise.all(r);(0,o.O3)(n);let a=new Map;for(let e=0;e<t.length;e++){let i=t[e];a.set(i.textRasterizationParam.resource.symbol,{text:i.text,glyphMosaicItems:n[e]})}return a}_cleanupSharedResources(){if(!this._cleanupRequired)return;let e=performance.now();if(e-this._lastCleanup<5e3)return;this._cleanupRequired=!1,this._lastCleanup=e;let t=new Set;for(let e of this._graphicStore.items()){let i=e.symbolResource?.symbolInfo.hash;t.add(i)}for(let e of new Set(this._hashToSymbolInfo.keys()).values())t.has(e)||this._hashToSymbolInfo.delete(e)}};(0,s._)([(0,d.Cb)()],Q.prototype,"_effectiveRenderer",null),(0,s._)([(0,d.Cb)({constructOnly:!0})],Q.prototype,"layerId",void 0),(0,s._)([(0,d.Cb)({constructOnly:!0})],Q.prototype,"requestUpdateCallback",void 0),(0,s._)([(0,d.Cb)()],Q.prototype,"container",void 0),(0,s._)([(0,d.Cb)({constructOnly:!0})],Q.prototype,"graphics",void 0),(0,s._)([(0,d.Cb)()],Q.prototype,"renderer",void 0),(0,s._)([(0,d.Cb)()],Q.prototype,"_updateTracking",void 0),(0,s._)([(0,d.Cb)()],Q.prototype,"updating",null),(0,s._)([(0,d.Cb)()],Q.prototype,"view",void 0),(0,s._)([(0,d.Cb)()],Q.prototype,"updateRequested",void 0),(0,s._)([(0,d.Cb)()],Q.prototype,"defaultPointSymbolEnabled",void 0);let K=Q=(0,s._)([(0,c.j)("esri.views.2d.layers.graphics.GraphicsView2D")],Q)}}]);