"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56377],{60431:function(e,t,r){r.d(t,{dp:function(){return l},o2:function(){return s},yZ:function(){return o}});var i=r(13507),n=r(9266);function o(e,t){let r=t||e.extent,i=e.width,o=(0,n.c9)(r?.spatialReference);return r&&i?r.width/i*o*n.hd*96:0}function l(e,t){return e/((0,n.c9)(t)*n.hd*96)}function s(e,t,r){return(0===t||(0,i.W8)(e,t)||e<t)&&(0===r||(0,i.W8)(e,r)||e>r)}},7990:function(e,t,r){function i(e){let t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?o(e.view.floors,t.floorInfo.floorField):null}function n(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?o(e,t.floorInfo.floorField):null}function o(e,t){if(!e?.length)return null;let r=e.filter(e=>""!==e).map(e=>`'${e}'`);return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,{c:function(){return i},f:function(){return n}})},35396:function(e,t,r){r.d(t,{FN:function(){return o},QV:function(){return n},ac:function(){return s}});var i=r(39553);function n(e,t,r){return t.flatten(({sublayers:e})=>e).length!==e.length||!!e.some(e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r)||!l(e,t)}function o(e,t,r){return!!e.some(e=>{let t=e.source,n=!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(null==t.gdbVersion||t.gdbVersion===r);return e.commitProperty("renderer"),e.commitProperty("labelingInfo"),e.commitProperty("opacity"),e.commitProperty("labelsVisible"),!n||e.originIdOf("renderer")>i.s3.SERVICE||e.originIdOf("labelingInfo")>i.s3.SERVICE||e.originIdOf("opacity")>i.s3.SERVICE||e.originIdOf("labelsVisible")>i.s3.SERVICE})||!l(e,t)}function l(e,t){if(!e?.length||null==t)return!0;let r=t.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).map(e=>e.id).toArray();if(e.length>r.length)return!1;let i=0,n=r.length;for(let{id:t}of e){for(;i<n&&r[i]!==t;)i++;if(i>=n)return!1}return!0}function s(e){return!!e&&e.some(e=>null!=e.minScale||null!=e.layerDefinition?.minScale)}},29119:function(e,t,r){r.d(t,{VF:function(){return K},Uf:function(){return W}});var i,n=r(86641),o=r(19637),l=r(94761),s=r(78628),a=r(50973),u=r(94605),p=r(1662),y=r(37180),f=r(59528),c=r(31124),h=r(20128),d=r(15963),m=r(9266),g=r(89312);r(65223);var b=r(64186),w=r(9377),v=r(60431),x=r(67009),_=r(7990);function I(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function S(e,t){return"number"==typeof e?e:e?.stops?.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){let n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}(e.stops):t}function F(e){let t=e?.renderer,r="touch"===e?.pointerType?9:6;if(!t)return r;let i="visualVariables"in t?function(e,t){if(!t)return e;let r=t.filter(e=>"size"===e.type).map(t=>{let{maxSize:r,minSize:i}=t;return(S(r,e)+S(i,e))/2}),i=0,n=r.length;if(0===n)return e;for(let e=0;e<n;e++)i+=r[e];return Math.max(Math.floor(i/n),e)}(r,t.visualVariables):r;if("simple"===t.type)return I(i,t.symbol);if("unique-value"===t.type){let e=i;return t.uniqueValueInfos?.forEach(t=>{e=I(e,t.symbol)}),e}if("class-breaks"===t.type){let e=i;return t.classBreakInfos.forEach(t=>{e=I(e,t.symbol)}),e}return"dot-density"===t.type||t.type,i}var O=r(54748),C=r(38028),E=r(30563),R=r(5005),V=r(62329),j=r(35396),N=r(55066),P=r(14627),M=r(689),G=r(61733);r(3457);var T=r(50713),Z=r(36502);let A=i=class extends M.wq{static from(e){return(0,G.TJ)(i,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}};(0,n._)([(0,g.Cb)({type:Number,json:{write:!0}})],A.prototype,"dpi",void 0),(0,n._)([(0,g.Cb)()],A.prototype,"floors",void 0),(0,n._)([(0,g.Cb)({type:String,json:{write:!0}})],A.prototype,"gdbVersion",void 0),(0,n._)([(0,g.Cb)({types:N.qM,json:{read:R.im,write:!0}})],A.prototype,"geometry",void 0),(0,n._)([(0,g.Cb)({type:Number,json:{write:!0}})],A.prototype,"geometryPrecision",void 0),(0,n._)([(0,g.Cb)({type:Number,json:{write:!0}})],A.prototype,"height",void 0),(0,n._)([(0,g.Cb)({type:Date})],A.prototype,"historicMoment",void 0),(0,n._)([(0,T.c)("historicMoment")],A.prototype,"writeHistoricMoment",null),(0,n._)([(0,g.Cb)({type:[Number],json:{write:!0}})],A.prototype,"layerIds",void 0),(0,n._)([(0,g.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],A.prototype,"layerOption",void 0),(0,n._)([(0,g.Cb)({type:w.Z,json:{write:!0}})],A.prototype,"mapExtent",void 0),(0,n._)([(0,g.Cb)({type:Number,json:{write:!0}})],A.prototype,"maxAllowableOffset",void 0),(0,n._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],A.prototype,"returnFieldName",void 0),(0,n._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],A.prototype,"returnGeometry",void 0),(0,n._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],A.prototype,"returnM",void 0),(0,n._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],A.prototype,"returnUnformattedValues",void 0),(0,n._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],A.prototype,"returnZ",void 0),(0,n._)([(0,g.Cb)({type:Z.Z,json:{write:!0}})],A.prototype,"spatialReference",void 0),(0,n._)([(0,g.Cb)()],A.prototype,"sublayers",void 0),(0,n._)([(0,g.Cb)({type:P.Z,json:{write:!0}})],A.prototype,"timeExtent",void 0),(0,n._)([(0,g.Cb)({type:Number,json:{write:!0}})],A.prototype,"tolerance",void 0),(0,n._)([(0,g.Cb)({type:Number,json:{write:!0}})],A.prototype,"width",void 0);let L=A=i=(0,n._)([(0,b.j)("esri.rest.support.IdentifyParameters")],A);var U=r(37647),k=r(67828);let H=class extends M.wq{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return o.Z.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;let{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),null!=i&&(t.geometry=i.toJSON(),t.geometryType=k.P.toJSON(i.type))}};(0,n._)([(0,g.Cb)({type:String,json:{write:!0}})],H.prototype,"displayFieldName",void 0),(0,n._)([(0,g.Cb)({type:o.Z})],H.prototype,"feature",void 0),(0,n._)([(0,U.r)("feature",["attributes","geometry"])],H.prototype,"readFeature",null),(0,n._)([(0,T.c)("feature")],H.prototype,"writeFeature",null),(0,n._)([(0,g.Cb)({type:Number,json:{write:!0}})],H.prototype,"layerId",void 0),(0,n._)([(0,g.Cb)({type:String,json:{write:!0}})],H.prototype,"layerName",void 0);let q=H=(0,n._)([(0,b.j)("esri.rest.support.IdentifyResult")],H);async function J(e,t,r){var i;let n=(i=t,t=i=L.from(i)).geometry?[t.geometry]:[],o=(0,E.en)(e);return o.path+="/identify",(0,C.aX)(n).then(e=>{let i=function(e,t){let{dpi:r,gdbVersion:i,geometry:n,geometryPrecision:o,height:l,historicMoment:s,layerOption:a,mapExtent:u,maxAllowableOffset:p,returnFieldName:y,returnGeometry:f,returnUnformattedValues:c,returnZ:h,spatialReference:m,timeExtent:g,tolerance:b,width:w}=e.toJSON(),{dynamicLayers:x,layerDefs:I,layerIds:S}=function(e){let{mapExtent:t,floors:r,width:i,sublayers:n,layerIds:o,layerOption:l,gdbVersion:s}=e,a=n?.find(e=>null!=e.layer)?.layer?.serviceSublayers,u="popup"===l,p={},y=(0,v.yZ)({extent:t,width:i,spatialReference:t?.spatialReference}),f=[],c=e=>{let t=0===e.minScale||y<=e.minScale,r=0===e.maxScale||y>=e.maxScale;if(e.visible&&(0===y||t&&r)){if(e.sublayers)e.sublayers.forEach(c);else{if(!1===o?.includes(e.id)||u&&(!e.popupTemplate||!e.popupEnabled))return;f.unshift(e)}}};if(n?.forEach(c),n&&!f.length)p.layerIds=[];else{let e=(0,j.FN)(f,a,s),t=f.map(e=>{let t=(0,_.f)(r,e);return e.toExportImageJSON(t)});if(e)p.dynamicLayers=JSON.stringify(t);else{if(n){let e=f.map(({id:e})=>e);o&&(e=e.filter(e=>o.includes(e))),p.layerIds=e}else o?.length&&(p.layerIds=o);let e=function(e,t){let r=!!e?.length,i=t.filter(e=>null!=e.definitionExpression||r&&null!=e.floorInfo);return i.length?i.map(t=>{let r=(0,_.f)(e,t),i=(0,d._)(r,t.definitionExpression);return{id:t.id,definitionExpression:i??void 0}}):null}(r,f);if(null!=e&&e.length){let t={};for(let r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(p.layerDefs=JSON.stringify(t))}}}return p}(e),F=null!=t?.geometry?t.geometry:null,O={historicMoment:s,geometryPrecision:o,maxAllowableOffset:p,returnFieldName:y,returnGeometry:f,returnUnformattedValues:c,returnZ:h,tolerance:b},C=F?.toJSON()||n;O.imageDisplay=`${w},${l},${r}`,i&&(O.gdbVersion=i),C&&(delete C.spatialReference,O.geometry=JSON.stringify(C),O.geometryType=(0,R.Ji)(C));let E=m??C?.spatialReference??u?.spatialReference;if(E&&(O.sr=(0,V.B9)(E)),O.time=g?[g.start,g.end].join(","):null,u){let{xmin:e,ymin:t,xmax:r,ymax:i}=u;O.mapExtent=`${e},${t},${r},${i}`}return I&&(O.layerDefs=I),x&&!I&&(O.dynamicLayers=x),O.layers="popup"===a?"visible":a,S&&!x&&(O.layers+=`:${S.join(",")}`),O}(t,{geometry:e?.[0]}),n=(0,E.cv)({...o.query,f:"json",...i}),l=(0,E.lA)(n,r);return(0,O.Z)(o.path,l).then(Q).then(e=>(function(e,t){if(!t?.length)return e;let r=new Map;for(let i of(t.forEach(function e(t){r.set(t.id,t),t.sublayers&&t.sublayers.forEach(e)}),e.results))i.feature.sourceLayer=r.get(i.layerId);return e})(e,t.sublayers))})}function Q(e){let t=e.data;return t.results=t.results||[],t.exceededTransferLimit=!!t.exceededTransferLimit,t.results=t.results.map(e=>q.fromJSON(e)),t}var $=r(771),z=r(96938),B=r(30369);let D=null;function W(e,t){return"tile"===t.type||"map-image"===t.type}let K=class extends l.Z{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,c.Ds)(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){let e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,h.on)(()=>this.highlightGraphics,"change",t=>e(t.added),{onListenerAdd:t=>e(t)})])}async fetchPopupFeaturesAtLocation(e,t){let{layerView:{layer:r,view:{scale:i}}}=this;if(!e)throw new u.Z("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:r});let n=function(e,t,r){let i=[];if(!e)return i;let n=e=>{let o=0===e.minScale||t<=e.minScale,l=0===e.maxScale||t>=e.maxScale;if(e.visible&&o&&l){if(e.sublayers)e.sublayers.forEach(n);else if(e.popupEnabled){let t=(0,B.V5)(e,{...r,defaultPopupTemplateEnabled:!1});null!=t&&i.unshift({sublayer:e,popupTemplate:t})}}};return e.map(n),i}(r.sublayers,i,t);if(!n.length)return[];let o=await X(r,n);if(!((r.capabilities?.operations?.supportsIdentify??!0)&&r.version>=10.5)&&!o)throw new u.Z("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:r});return o?this._fetchPopupFeaturesUsingQueries(e,n,t):this._fetchPopupFeaturesUsingIdentify(e,n,t)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(e){let t=this.highlightGraphics;if(!t)return(0,p.kB)();let r=null;if(e instanceof o.Z?r=[e]:a.Z.isCollection(e)&&e.length>0?r=e.toArray():Array.isArray(e)&&e.length>0&&(r=e),r=r?.filter(s.pC),!r?.length)return(0,p.kB)();for(let e of r){let t=e.sourceLayer;null!=t&&"geometryType"in t&&"point"===t.geometryType&&(e.visible=!1)}return t.addMany(r),(0,p.kB)(()=>t.removeMany(r??[]))}async _updateHighlightedFeaturesSymbols(e){let{layerView:{view:t},highlightGraphics:i,highlightGraphicUpdated:n}=this;if(i&&n)for(let o of e){let e=o.sourceLayer&&"renderer"in o.sourceLayer&&o.sourceLayer.renderer;o.sourceLayer&&"geometryType"in o.sourceLayer&&"point"===o.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(o).then(async l=>{l||=new z.Z;let s=null,a="visualVariables"in e?e.visualVariables?.find(e=>"size"===e.type):void 0;a&&(D||(D=(await r.e(69021).then(r.bind(r,69021))).getSize),s=D(a,o,{view:t.type,scale:t.scale,shape:"simple-marker"===l.type?l.style:null})),s||="width"in l&&"height"in l&&null!=l.width&&null!=l.height?Math.max(l.width,l.height):"size"in l?l.size:16,i.includes(o)&&(o.symbol=new z.Z({style:"square",size:s,xoffset:"xoffset"in l?l.xoffset:0,yoffset:"yoffset"in l?l.yoffset:0}),n(o,"symbol"),o.visible=!0)})}}async _updateHighlightedFeaturesGeometries(e){let{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:n}=this;if(this._highlightGeometriesResolution=e,!n||!i?.length||!t.capabilities.operations.supportsQuery)return;let o=this._getTargetResolution(e),l=new Map;for(let e of i)if(!this._featuresResolutions.has(e)||this._featuresResolutions.get(e)>o){let t=e.sourceLayer;(0,f.s1)(l,t,()=>new Map).set(e.getObjectId(),e)}let s=Array.from(l,([e,t])=>{let i=e.createQuery();return i.objectIds=[...t.keys()],i.outFields=[e.objectIdField],i.returnGeometry=!0,i.maxAllowableOffset=o,i.outSpatialReference=r.spatialReference,e.queryFeatures(i)}),a=await Promise.all(s);if(!this.destroyed)for(let{features:e}of a)for(let t of e){let e=t.sourceLayer,r=l.get(e).get(t.getObjectId());r&&i.includes(r)&&(r.geometry=t.geometry,n(r,"geometry"),this._featuresResolutions.set(r,o))}}_getTargetResolution(e){let t=e*(0,m.c9)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){let i=await this._createIdentifyParameters(e,t,r);if(null==i)return[];let{results:n}=await J(this.layerView.layer.parsedUrl,i,r);return n.map(e=>e.feature)}async _createIdentifyParameters(e,t,r){let{floors:i,layer:n,timeExtent:o,view:{spatialReference:l,scale:s}}=this.layerView;if(!t.length)return null;await Promise.all(t.map(({sublayer:e})=>e.load(r).catch(()=>{})));let a=Math.min((0,y.Z)("mapservice-popup-identify-max-tolerance"),n.allSublayers.reduce((e,t)=>t.renderer?F({renderer:t.renderer,pointerType:r?.pointerType}):e,2)),u=this.createFetchPopupFeaturesQueryGeometry(e,a),p=(0,v.dp)(s,l),f=Math.round(u.width/p),c=new w.Z({xmin:u.center.x-p*f,ymin:u.center.y-p*f,xmax:u.center.x+p*f,ymax:u.center.y+p*f,spatialReference:u.spatialReference});return new L({floors:i,gdbVersion:"gdbVersion"in n?n.gdbVersion:void 0,geometry:e,height:f,layerOption:"popup",mapExtent:c,returnGeometry:!0,spatialReference:l,sublayers:n.sublayers,timeExtent:o,tolerance:a,width:f})}async _fetchPopupFeaturesUsingQueries(e,t,r){let{layerView:{floors:i,timeExtent:n}}=this,o=t.map(async({sublayer:t,popupTemplate:o})=>{if(await t.load(r).catch(()=>{}),t.capabilities&&!t.capabilities.operations.supportsQuery)return[];let l=t.createQuery(),s=F({renderer:t.renderer,pointerType:r?.pointerType}),a=this.createFetchPopupFeaturesQueryGeometry(e,s),u=new Set,[p]=await Promise.all([(0,B.e7)(t,o),t.renderer?.collectRequiredFields(u,t.fieldsIndex)]);(0,c.k_)(r),(0,x.gd)(u,t.fieldsIndex,p);let y=Array.from(u).sort();l.geometry=a,l.outFields=y,l.timeExtent=n;let f=(0,_.f)(i,t);l.where=(0,d._)(l.where,f);let h=this._getTargetResolution(a.width/s),m=await (o.expressionInfos?.length||Array.isArray(o.content)&&o.content.some(e=>"expression"===e.type)?(0,$.LC)():Promise.resolve());(0,c.k_)(r);let g="point"===t.geometryType||m&&m.arcadeUtils.hasGeometryOperations(o);g||(l.maxAllowableOffset=h);let{features:b}=await t.queryFeatures(l,r),w=g?0:h;for(let e of b=await Y(t,b,r))this._featuresResolutions.set(e,w);return b});return(await Promise.allSettled(o)).reduce((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e,[]).filter(s.pC)}};async function X(e,t){if(e.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(t.map(({sublayer:e})=>e.load().then(()=>e.capabilities.operations.supportsQuery)))}catch{return!1}}async function Y(e,t,r){let i=e.renderer;return i&&"defaultSymbol"in i&&!i.defaultSymbol&&(t=i.valueExpression?await Promise.all(t.map(e=>i.getSymbolAsync(e,r).then(t=>t?e:null))).then(e=>e.filter(e=>null!=e)):t.filter(e=>null!=i.getSymbol(e))),t}(0,n._)([(0,g.Cb)({constructOnly:!0})],K.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,n._)([(0,g.Cb)({constructOnly:!0})],K.prototype,"layerView",void 0),(0,n._)([(0,g.Cb)({constructOnly:!0})],K.prototype,"highlightGraphics",void 0),(0,n._)([(0,g.Cb)({constructOnly:!0})],K.prototype,"highlightGraphicUpdated",void 0),(0,n._)([(0,g.Cb)({constructOnly:!0})],K.prototype,"updatingHandles",void 0),K=(0,n._)([(0,b.j)("esri.views.layers.support.MapServiceLayerViewHelper")],K)},86225:function(e,t,r){r.d(t,{K:function(){return o}}),r(55066);var i=r(9266),n=r(9377);function o(e,t,r,o=new n.Z){let l=0;if("2d"===r.type)l=t*(r.resolution??0);else if("3d"===r.type){let n=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;l=null==o||o.equals(r.spatialReference)?t*n:(0,i.c9)(o)/(0,i.c9)(r.spatialReference)}let s=e.x-l,a=e.y-l,u=e.x+l,p=e.y+l,{spatialReference:y}=r;return o.xmin=Math.min(s,u),o.ymin=Math.min(a,p),o.xmax=Math.max(s,u),o.ymax=Math.max(a,p),o.spatialReference=y,o}new n.Z}}]);