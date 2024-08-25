"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85460],{57812:function(e,t,r){r.d(t,{z:function(){return s}});var i=r(85515);class s{constructor(e,t){this._storage=new i.WJ,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),t&&this._storage.registerRemoveFunc("",t)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(e,t,r=1){this._storage.put(this,e,t,r,1)}pop(e){return this._storage.pop(this,e)}get(e){return this._storage.get(this,e)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}resetHitRate(){}}},85515:function(e,t,r){r.d(t,{WJ:function(){return o},Xq:function(){return l}});var i,s,n=r(35313);(i=s||(s={}))[i.ALL=0]="ALL",i[i.SOME=1]="SOME";class l{constructor(e,t,r){this.name=e,this._storage=t,this.id=a+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),r&&(this._storage.registerRemoveFunc(this.id,r),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(e){return this._storage.getSize(this,e)}resetHitRate(){this._hit=this._miss=0}put(e,t,r,i=0){this._storage.put(this,e,t,r,i)}pop(e){let t=this._storage.pop(this,e);return void 0===t?++this._miss:++this._hit,t}get(e){let t=this._storage.get(this,e);return void 0===t?++this._miss:++this._hit,t}peek(e){return this._storage.peek(this,e)}updateSize(e,t,r){this._storage.updateSize(this,e,t,r)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class o{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new n.Z,this._users=new n.Z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace(t=>t[0]!==e)}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,t){let r=this._db.get(e.id+t);return r?.size??0}put(e,t,r,i,n){t=e.id+t;let l=this._db.get(t);return(l&&(this._size-=l.size,e.size-=l.size,this._db.delete(t),l.entry!==r&&this._notifyRemove(t,l.entry,l.size,s.ALL)),i>this._maxSize)?void this._notifyRemove(t,r,i,s.ALL):void 0===r?void console.warn("Refusing to cache undefined entry "):!i||i<0?(console.warn(`Refusing to cache entry with size ${i} for key ${t}`),void this._notifyRemove(t,r,0,s.ALL)):void(this._db.set(t,new u(r,i,1+Math.max(n,-4)- -3)),this._size+=i,e.size+=i,this._checkSize())}updateSize(e,t,r,i){t=e.id+t;let n=this._db.get(t);if(n&&n.entry===r){for(this._size-=n.size,e.size-=n.size;i>this._maxSize;){let e=this._notifyRemove(t,r,i,s.SOME);if(!(null!=e&&e>0))return void this._db.delete(t);i=e}n.size=i,this._size+=i,e.size+=i,this._checkSize()}}pop(e,t){t=e.id+t;let r=this._db.get(t);if(r)return this._size-=r.size,e.size-=r.size,this._db.delete(t),++this._hit,r.entry;++this._miss}get(e,t){t=e.id+t;let r=this._db.get(t);if(void 0!==r)return this._db.delete(t),r.lives=r.lifetime,this._db.set(t,r),++this._hit,r.entry;++this._miss}peek(e,t){let r=this._db.get(e.id+t);return r?++this._hit:++this._miss,r?.entry}get performanceInfo(){let e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},r=[];this._db.forEach((e,i)=>{let s=e.lifetime;r[s]=(r[s]||0)+e.size,this._users.forAll(r=>{let{id:s,name:n}=r;if(i.startsWith(s)){let r=t[n]||0;t[n]=r+e.size}})});let i={};this._users.forAll(e=>{let r=e.name;if("hitRate"in e&&"number"==typeof e.hitRate&&!isNaN(e.hitRate)&&e.hitRate>0){let s=t[r]||0;t[r]=s,i[r]=Math.round(100*e.hitRate)+"%"}else i[r]="0%"});let s=Object.keys(t);s.sort((e,r)=>t[r]-t[e]),s.forEach(r=>e[r]=Math.round(t[r]/1048576)+"MB / "+i[r]);for(let t=r.length-1;t>=0;--t){let i=r[t];i&&(e["Priority "+(t+-3-1)]=Math.round(i/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){let t=e.id;this._db.forEach((e,r)=>{r.startsWith(t)&&(this._size-=e.size,this._db.delete(r),this._notifyRemove(r,e.entry,e.size,s.ALL))}),e.size=0}clearAll(){this._db.forEach((e,t)=>this._notifyRemove(t,e.entry,e.size,s.ALL)),this._users.forAll(e=>e.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,r,i){let s;return this._removeFuncs.some(n=>{if(e.startsWith(n[0])){let e=n[1](t,i,r);return"number"==typeof e&&(s=e),!0}return!1}),s}_checkSize(){this._users.forAll(e=>this._checkSizeLimits(e)),this._checkSizeLimits()}_checkSizeLimits(e){let t=e??this;if(t.maxSize<0||t.size<=t.maxSize)return;let r=e?.id,i=!0;for(;i;)for(let[s,n]of(i=!1,this._db))if(0===n.lifetime&&(!r||s.startsWith(r))){if(this._purgeItem(s,n,e),t.size<=.9*t.maxSize)return;i||=this._db.has(s)}for(let[i,s]of this._db)if((!r||i.startsWith(r))&&(this._purgeItem(i,s,e),t.size<=.9*t.maxSize))return}_purgeItem(e,t,r=this._users.find(t=>e.startsWith(t.id))){if(this._db.delete(e),t.lives<=1){this._size-=t.size,r&&(r.size-=t.size);let i=this._notifyRemove(e,t.entry,t.size,s.SOME);null!=i&&i>0&&(this._size+=i,r&&(r.size+=i),t.lives=t.lifetime,t.size=i,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}let a=0;class u{constructor(e,t,r){this.entry=e,this.size=t,this.lifetime=r,this.lives=r}}},97558:function(e,t,r){r.d(t,{$c:function(){return y},Hg:function(){return m},jW:function(){return c},uD:function(){return f}});var i=r(94761),s=r(50973),n=r(56529);let l=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function o(e){return e instanceof i.Z}function a(e){return e instanceof s.Z?Object.keys(e.items):o(e)?(0,n.vw)(e).keys():e?Object.keys(e):[]}function u(e,t){return e instanceof s.Z?e.items[t]:e[t]}function h(e){return e?e.declaredClass:null}function c(e,t){return f(e,t)}function f(e,t){if(null==e)return!1;let r=t.split("."),i=e;for(let e of r){if("complete"===i.type)break;if("partial"!==i.type)return!1;{let t=i.diff[e];if(!t)return!1;i=t}}return!0}function y(e,t){if(!e)return!1;if("partial"===e.type){let r=Object.keys(e.diff);return 1===r.length&&r[0]===t}return!1}function m(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&h(e)!==h(t)?{type:"complete",oldValue:e,newValue:t}:function e(t,r){let i;let s=t.diff;if(s&&"function"==typeof s)return s(t,r);let n=a(t),c=a(r);if(0===n.length&&0===c.length)return;if(!n.length||!c.length||!(!Array.isArray(t)||!Array.isArray(r))&&t.length!==r.length)return{type:"complete",oldValue:t,newValue:r};let f=c.filter(e=>!n.includes(e)),y=n.filter(e=>!c.includes(e)),m=n.filter(e=>c.includes(e)&&u(t,e)!==u(r,e)).concat(f,y).sort(),p=h(t);if(p&&l.has(p)&&m.length)return{type:"complete",oldValue:t,newValue:r};let d=o(t)&&o(r);for(let n of m){let l;let o=u(t,n),a=u(r,n);if((d||"function"!=typeof o&&"function"!=typeof a)&&o!==a&&(null!=o||null!=a)){if(s&&s[n]&&"function"==typeof s[n])l=s[n]?.(o,a);else if(o instanceof Date&&a instanceof Date){if(o.getTime()===a.getTime())continue;l={type:"complete",oldValue:o,newValue:a}}else l="object"==typeof o&&"object"==typeof a&&h(o)===h(a)?e(o,a):{type:"complete",oldValue:o,newValue:a};null!=l&&(null!=i?i.diff[n]=l:i={type:"partial",diff:{[n]:l}})}}return i}(e,t)}},12261:function(e,t,r){r.d(t,{N:function(){return l}});var i=r(86641),s=r(89312);r(37180),r(65223),r(3457);var n=r(64186);let l=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,i._)([(0,s.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,i._)([(0,n.j)("esri.layers.mixins.CustomParametersMixin")],t)}},3482:function(e,t,r){r.d(t,{Q:function(){return g}});var i=r(86641);r(37180);var s=r(65223),n=r(31124),l=r(89312),o=r(1275);r(3457);var a=r(64186),u=r(57111),h=r(50973);r(27817),r(94605),r(22926);var c=r(19164);let f=new h.Z,y=new WeakMap,m=0,p=0;function d(){let e=Date.now(),t=!1;for(let r of f){let i=r.deref();i?i.refreshInterval&&e-(y.get(i)??0)+5>=6e4*i.refreshInterval&&(y.set(i,e),i.refresh(e)):t=!0}if(t)for(let e=f.length-1;e>=0;e--)f.at(e).deref()||f.removeAt(e)}(0,c.EH)(()=>{let e=Date.now(),t=0;for(let r of f){let i=r.deref();i&&(t=function e(t,r){return Number.isFinite(t)&&Number.isFinite(r)?r<=0?t:e(r,t%r):0}(Math.round(6e4*i.refreshInterval),t),i.refreshInterval?y.get(i)||y.set(i,e):y.delete(i))}if(t!==p){if(p=t,clearInterval(m),0===p)return void(m=0);m=setInterval(d,p)}});let g=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,n.Ds)(()=>this.hasDataChanged()),this.when().then(()=>{this.destroyed||null!=this&&"object"==typeof this&&"refreshInterval"in this&&"refresh"in this&&f.push(new WeakRef(this))},()=>{})}destroy(){!function(e){let t=f.find(t=>t.deref()===e);t&&f.remove(t)}(this)}castRefreshInterval(e){return e>=.1?e:e<=0?0:.1}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,n.R8)(this._debounceHasDataChanged()).then(t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})},e=>{s.Z.getLogger(this).error(e),this.emit("refresh",{dataChanged:!1,error:e})})}async hasDataChanged(){return!0}get test(){}};return(0,i._)([(0,l.Cb)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:u.C}}}}})],t.prototype,"refreshInterval",void 0),(0,i._)([(0,o.p)("refreshInterval")],t.prototype,"castRefreshInterval",null),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"refreshParameters",null),t=(0,i._)([(0,a.j)("esri.layers.mixins.RefreshableLayer")],t)}},9158:function(e,t,r){r.d(t,{Z:function(){return b}});var i,s=r(86641),n=r(55066),l=r(19637),o=r(740),a=r(689),u=r(61764),h=r(89312);r(37180),r(65223);var c=r(37647),f=r(64186),y=r(50713),m=r(36502),p=r(5005),d=r(40041);let g=new o.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null}),_=i=class extends a.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){let r=m.Z.fromJSON(t.spatialReference),i=[];for(let t=0;t<e.length;t++){let s=e[t],n=l.Z.fromJSON(s),o=s.geometry?.spatialReference;null==n.geometry||o||(n.geometry.spatialReference=r);let a=s.aggregateGeometries,u=n.aggregateGeometries;if(a&&null!=u)for(let e in u){let t=u[e],i=a[e],s=i?.spatialReference;null==t||s||(t.spatialReference=r)}i.push(n)}return i}writeGeometryType(e,t,r,i){if(e)return void g.write(e,t,r,i);let{features:s}=this;if(s){for(let e of s)if(null!=e?.geometry)return void g.write(e.geometry.type,t,r,i)}}readQueryGeometry(e,t){if(!e)return null;let r=!!e.spatialReference,i=(0,p.im)(e);return i&&!r&&t.spatialReference&&(i.spatialReference=m.Z.fromJSON(t.spatialReference)),i}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());let{features:r}=this;if(r){for(let e of r)if(e&&null!=e.geometry&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new i(this.cloneProperties())}cloneProperties(){return(0,u.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){let t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){let i=t.features[r];if(i.geometry){let t=e?.[r];i.geometry=t?.toJSON()||i.geometry}}return t}quantize(e){let{scale:[t,r],translate:[i,s]}=e,n=this.features,l=this._getQuantizationFunction(this.geometryType,e=>Math.round((e-i)/t),e=>Math.round((s-e)/r));for(let e=0,t=n.length;e<t;e++)l?.(n[e].geometry)||(n.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){let{geometryType:e,features:t,transform:r}=this;if(!r)return this;let{translate:[i,s],scale:[n,l]}=r,o=null,a=null;if(this.hasZ&&null!=r?.scale?.[2]){let{translate:[,,e],scale:[,,t]}=r;o=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){let{translate:[,,,e],scale:[,,,t]}=r;a=r=>null==r?r:r*t+e}let u=this._getHydrationFunction(e,e=>e*n+i,e=>s-e*l,o,a);for(let{geometry:e}of t)null!=e&&u&&u(e);return this.transform=null,this}_quantizePoints(e,t,r){let i,s;let n=[];for(let l=0,o=e.length;l<o;l++){let o=e[l];if(l>0){let e=t(o[0]),l=r(o[1]);e===i&&l===s||(n.push([e-i,l-s]),i=e,s=l)}else i=t(o[0]),s=r(o[1]),n.push([i,s])}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{let i=(0,p.oU)(e)?e.rings:e.paths,s=[];for(let e=0,n=i.length;e<n;e++){let n=i[e],l=this._quantizePoints(n,t,r);l&&s.push(l)}return s.length>0?((0,p.oU)(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{let i=this._quantizePoints(e.points,t,r);return i&&i.length>0?(e.points=i,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,i,s){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),i&&(e.z=i(e.z))}:"polyline"===e||"polygon"===e?e=>{let n,l;let o=(0,p.oU)(e)?e.rings:e.paths;for(let e=0,i=o.length;e<i;e++){let i=o[e];for(let e=0,s=i.length;e<s;e++){let s=i[e];e>0?(n+=s[0],l+=s[1]):(n=s[0],l=s[1]),s[0]=t(n),s[1]=r(l)}}if(i&&s)for(let e=0,t=o.length;e<t;e++){let t=o[e];for(let e=0,r=t.length;e<r;e++){let r=t[e];r[2]=i(r[2]),r[3]=s(r[3])}}else if(i)for(let e=0,t=o.length;e<t;e++){let t=o[e];for(let e=0,r=t.length;e<r;e++){let r=t[e];r[2]=i(r[2])}}else if(s)for(let e=0,t=o.length;e<t;e++){let t=o[e];for(let e=0,r=t.length;e<r;e++){let r=t[e];r[2]=s(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),i&&null!=e.zmax&&null!=e.zmin&&(e.zmax=i(e.zmax),e.zmin=i(e.zmin)),s&&null!=e.mmax&&null!=e.mmin&&(e.mmax=s(e.mmax),e.mmin=s(e.mmin))}:"multipoint"===e?e=>{let n,l;let o=e.points;for(let e=0,i=o.length;e<i;e++){let i=o[e];e>0?(n+=i[0],l+=i[1]):(n=i[0],l=i[1]),i[0]=t(n),i[1]=r(l)}if(i&&s)for(let e=0,t=o.length;e<t;e++){let t=o[e];t[2]=i(t[2]),t[3]=s(t[3])}else if(i)for(let e=0,t=o.length;e<t;e++){let t=o[e];t[2]=i(t[2])}else if(s)for(let e=0,t=o.length;e<t;e++){let t=o[e];t[2]=s(t[2])}}:null}};(0,s._)([(0,h.Cb)({type:String,json:{write:!0}})],_.prototype,"displayFieldName",void 0),(0,s._)([(0,h.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"exceededTransferLimit",void 0),(0,s._)([(0,h.Cb)({type:[l.Z],json:{write:!0}})],_.prototype,"features",void 0),(0,s._)([(0,c.r)("features")],_.prototype,"readFeatures",null),(0,s._)([(0,h.Cb)({type:[d.Z],json:{write:!0}})],_.prototype,"fields",void 0),(0,s._)([(0,h.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],_.prototype,"geometryType",void 0),(0,s._)([(0,y.c)("geometryType")],_.prototype,"writeGeometryType",null),(0,s._)([(0,h.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"hasM",void 0),(0,s._)([(0,h.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"hasZ",void 0),(0,s._)([(0,h.Cb)({types:n.qM,json:{write:!0}})],_.prototype,"queryGeometry",void 0),(0,s._)([(0,c.r)("queryGeometry")],_.prototype,"readQueryGeometry",null),(0,s._)([(0,h.Cb)({type:m.Z,json:{write:!0}})],_.prototype,"spatialReference",void 0),(0,s._)([(0,y.c)("spatialReference")],_.prototype,"writeSpatialReference",null),(0,s._)([(0,h.Cb)({json:{write:!0}})],_.prototype,"transform",void 0),(_=i=(0,s._)([(0,f.j)("esri.rest.support.FeatureSet")],_)).prototype.toJSON.isDefaultToJSON=!0;let b=_},55182:function(e,t,r){r.d(t,{ZB:function(){return o},iW:function(){return n}});var i=r(87585),s=r(88421);function n(e){let t=[];return function e(t,r){let i;if(!t)return;i="CIMTextSymbol"===t.type?t.symbol:t;let n="CIMPolygonSymbol"===t.type;if(i?.symbolLayers){for(let t of i.symbolLayers)if(!(t.colorLocked||n&&((0,s.yL)(t)||(0,s.zL)(t)&&t.markerPlacement&&(0,s.gJ)(t.markerPlacement))))switch(t.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":t.tintColor&&l(r,t.tintColor);break;case"CIMVectorMarker":t.markerGraphics?.forEach(t=>{e(t.symbol,r)});break;case"CIMSolidStroke":case"CIMSolidFill":l(r,t.color);break;case"CIMHatchFill":e(t.lineSymbol,r)}}}((0,s.be)(e),t),t.length?new i.Z((0,s.oY)(t[0])):null}function l(e,t){for(let r of e)if(r.join(".")===t.join("."))return;e.push(t)}function o(e,t,r){t instanceof i.Z||(t=new i.Z(t));let n=(0,s.be)(e);n&&function e(t,r,i){let n;if(!t)return;n="CIMTextSymbol"===t.type?t.symbol:t;let l="CIMPolygonSymbol"===n?.type;if(n?.symbolLayers)for(let t of n.symbolLayers){if(t.colorLocked)continue;if(l){if(i){let{layersToColor:e}=i;if(((0,s.yL)(t)||(0,s.zL)(t)&&t.markerPlacement&&(0,s.gJ)(t.markerPlacement))&&"fill"===e||(0,s.k5)(t)&&"outline"===e)continue}else if((0,s.yL)(t)||(0,s.zL)(t)&&t.markerPlacement&&(0,s.gJ)(t.markerPlacement))continue}let n=r.toArray();switch(t.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":t.tintColor=n;break;case"CIMVectorMarker":t.markerGraphics?.forEach(t=>{e(t.symbol,r,i)});break;case"CIMSolidStroke":case"CIMSolidFill":t.color=n;break;case"CIMHatchFill":e(t.lineSymbol,r,i)}}}(n,t,r)}},35312:function(e,t,r){r.d(t,{Ne:function(){return _},Od:function(){return p},Sp:function(){return g},_M:function(){return m},iI:function(){return d},mx:function(){return function e(t){if(!t)return null;let r=null;switch(t.type){case h:case u:case c:r=e(t.outline);break;case"simple-line":{let e=(0,o.F2)(t.width);null!=t.style&&"none"!==t.style&&0!==e&&((r={color:t.color,style:g(t.style),width:e,cap:t.cap,join:"miter"===t.join?(0,o.F2)(t.miterLimit):t.join}).dashArray=d(r).join(",")||"none");break}default:r=null}return r}}});var i=r(99547),s=r(87585),n=r(54748),l=r(57812),o=r(4392),a=r(55182);let u="picture-fill",h="simple-fill",c="simple-marker",f=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),y=new l.z(1e3);function m(e){let t=e.style,r=null;if(e)switch(e.type){case c:"cross"!==t&&"x"!==t&&(r=e.color);break;case h:t&&"solid"!==t?"none"!==t&&(r={type:"pattern",x:0,y:0,src:(0,i.V)(`esri/symbols/patterns/${t}.png`),width:5,height:5}):r=e.color;break;case u:r={type:"pattern",src:e.url,width:(0,o.F2)(e.width)*e.xscale,height:(0,o.F2)(e.height)*e.yscale,x:(0,o.F2)(e.xoffset),y:(0,o.F2)(e.yoffset)};break;case"text":r=e.color;break;case"cim":r=(0,a.iW)(e)}return r}function p(e,t){let r=e+"-"+t;return void 0!==y.get(r)?Promise.resolve(y.get(r)):(0,n.Z)(e,{responseType:"image"}).then(e=>{let i=e.data,s=i.naturalWidth,n=i.naturalHeight,l=document.createElement("canvas");l.width=s,l.height=n;let o=l.getContext("2d");o.fillStyle=t,o.fillRect(0,0,s,n),o.globalCompositeOperation="destination-in",o.drawImage(i,0,0);let a=l.toDataURL();return y.put(r,a),a})}function d(e){if(!e?.style)return[];let{dashArray:t,style:r,width:i}=e;if("string"==typeof t&&"none"!==t)return t.split(",").map(e=>Number(e));let s=i??0,n=f.has(r)?f.get(r).map(e=>e*s):[];if("butt"!==e.cap)for(let[e,t]of n.entries())n[e]=e%2==1?t+s:Math.max(t-s,1);return n}let g=(()=>{let e={};return t=>{if(e[t])return e[t];let r=t.replaceAll("-","");return e[t]=r,r}})(),_=new s.Z([128,128,128])},44658:function(e,t,r){r.d(t,{BR:function(){return M},Q8:function(){return L},Y6:function(){return y},YW:function(){return m},_h:function(){return d},e3:function(){return R},nf:function(){return p},tb:function(){return _},wJ:function(){return C}});var i=r(87585),s=r(21161),n=r(27817);r(37180);var l=r(4392),o=r(82955),a=r(3112),u=r(55182),h=r(35312),c=r(47224);let f=new i.Z("white");function y(e){if(!e)return 0;if((0,s.dU)(e)){let t=function(e){let t=e.symbolLayers?.at(-1);if(t&&"outline"in t)return t?.outline?.size}(e);return null!=t?t:0}return(0,l.Wz)(h.mx(e)?.width)}function m(e){if(null==e||!("symbolLayers"in e)||null==e.symbolLayers)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some(e=>"object"===e.type);case"line-3d":return e.symbolLayers.some(e=>"path"===e.type);case"polygon-3d":return e.symbolLayers.some(e=>"object"===e.type||"extrude"===e.type);default:return!1}}function p(e){return e.resource?.href??""}function d(e,t){if(!e)return null;let r=null;return(0,s.dU)(e)?r=function(e){let t=e.symbolLayers;if(!t)return null;let r=null;return t.forEach(e=>{"object"===e.type&&e.resource?.href||(r="water"===e.type?e.color:e.material?e.material.color:null)}),r?new i.Z(r):null}(e):(0,s.cT)(e)&&(r="cim"===e.type?(0,u.iW)(e):e.color?new i.Z(e.color):null),r?g(r,t):null}function g(e,t){if(null==t||null==e)return e;let r=e.toRgba();return r[3]=r[3]*t,new i.Z(r)}function _(e,t,r){var n;e&&(t||null!=r)&&(t&&(t=new i.Z(t)),(0,s.dU)(e)?function(e,t,r){let i=e.symbolLayers;if(!i)return;let s=e=>g(t=t??e??(null!=r?f:null),r);i.forEach(e=>{if("object"!==e.type||!e.resource?.href||t){if("water"===e.type)e.color=s(e.color);else{let t=s(null!=e.material?e.material.color:null);null==e.material?e.material=new c.b({color:t}):e.material.color=t,null!=r&&"outline"in e&&null!=e.outline?.color&&(e.outline.color=g(e.outline.color,r))}}})}(e,t,r):(0,s.cT)(e)&&((n=(n=t)??e.color)&&(e.color=g(n,r)),null!=r&&"outline"in e&&e.outline?.color&&(e.outline.color=g(e.outline.color,r))))}async function b(e,t){let r=e.symbolLayers;r&&await (0,n.Ed)(r,async e=>z(e,t))}async function z(e,t){switch(e.type){case"extrude":e.size="number"==typeof t[2]?t[2]:0;break;case"icon":case"line":case"text":!function(e,t){let r=v(t);null!=r&&(e.size=r)}(e,t);break;case"path":!function(e,t){let r=S(t,o.hq,[e.width,void 0,e.height]);e.width=x(t[0],e.width,1,r),e.height=x(t[2],e.height,1,r)}(e,t);break;case"object":await w(e,t)}}function v(e){for(let t of e)if("number"==typeof t)return t;return null}async function w(e,t){let{resourceSize:r,symbolSize:i}=await k(e),s=S(t,r,i);e.width=x(t[0],i[0],r[0],s),e.depth=x(t[1],i[1],r[1],s),e.height=x(t[2],i[2],r[2],s)}function S(e,t,r){for(let i=0;i<3;i++){let s=e[i];switch(s){case"symbol-value":{let e=r[i];return null!=e?e/t[i]:1}case"proportional":break;default:if(s&&t[i])return s/t[i]}}return 1}async function k(e){let{computeObjectLayerResourceSize:t}=await r.e(7420).then(r.bind(r,7420)),i=await t(e,10),{width:s,height:n,depth:l}=e,o=[s,l,n],a=1;for(let e=0;e<3;e++){let t=o[e];if(null!=t){a=t/i[e];break}}for(let e=0;e<3;e++)null==o[e]&&(o[e]=i[e]*a);return{resourceSize:i,symbolSize:o}}function x(e,t,r,i){switch(e){case"proportional":return r*i;case"symbol-value":return null!=t?t:r;default:return e}}async function R(e,t){if(e&&t)return(0,s.dU)(e)?b(e,t):void((0,s.cT)(e)&&function(e,t){let r=v(t);if(null!=r)switch(e.type){case"simple-marker":e.size=r;break;case"picture-marker":{let t=e.width/e.height;t>1?(e.width=r,e.height=r*t):(e.width=r*t,e.height=r);break}case"simple-line":e.width=r;break;case"text":e.font.size=r}}(e,t))}function M(e,t,r){if(e&&null!=t){if((0,s.dU)(e)){let i=e.symbolLayers;i&&i.forEach(e=>{if(e&&"object"===e.type)switch(r){case"tilt":e.tilt=(e.tilt??0)+t;break;case"roll":e.roll=(e.roll??0)+t;break;default:e.heading=(e.heading??0)+t}})}else(0,s.cT)(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle+=t))}}function C(e){if(!e)return null;let t=e.effects.filter(e=>"bloom"!==e.type).map(e=>e.toJSON());return(0,a.rM)(t)}async function L(e,t){return await e.fetchSymbol(t)||e.fetchCIMSymbol(t)}}}]);