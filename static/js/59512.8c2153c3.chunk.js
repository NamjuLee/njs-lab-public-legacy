"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[59512],{59512:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var a=i(27366),r=i(76200),l=i(10064),n=i(92026),o=i(97642),s=i(66978),c=i(35995),h=i(49861),p=i(63780),d=(i(25243),i(38511)),u=i(69912),v=i(90724),m=i(30651),y=i(17775),f=i(11936),_=i(6061),b=i(29598),g=i(45948),w=i(42537),S=i(32718),C=i(31009);class T{constructor(e,t,i,a){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,C.bA)(e,{...r,schedule:a}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,r.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>S.Z.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(e," worker: ").concat(t))))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,w.kB)((()=>{i.removed=!0,(0,p.Od)(this._listeners,i),this._thread&&(0,n.pC)(i.threadHandle)&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const a=this._transferLists[e],r=a?a(t):[];return this._thread.invoke(e,t,{transferList:r,signal:i})}return this._promise?this._promise.then((()=>((0,s.k_)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}class L extends T{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(D.forEach(((e,t)=>{e===this&&D.delete(t)})),this.destroy())}}const D=new Map;let O=class extends((0,y.Z)((0,f.Y)((0,_.q)((0,b.I)((0,o.R)(m.Z)))))){constructor(){super(...arguments),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=D.get((0,n.Wg)(e));return t||((0,n.pC)(e)?(t=new L((t=>e.schedule(t))),D.set(e,t)):(t=new L,D.set(null,t))),++t.ref,t}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=(0,n.RY)(this._lercDecoder)}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=(0,n.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new l.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(s.r9).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,i,a){const l=(0,n.pC)((a=a||{signal:null}).signal)?a.signal:a.signal=(new AbortController).signal,o={responseType:"array-buffer",signal:l},s={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,a))).then((()=>(0,r.default)(this.getTileUrl(e,t,i),o))).then((e=>this._lercDecoder.decode(e.data,s,l))).then((e=>{var t;return{values:e.pixelData,width:e.width,height:e.height,maxZError:null===(t=e.fileInfo)||void 0===t?void 0:t.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}}))}getTileUrl(e,t,i){const a=!this.tilemapCache&&this.supportsBlankTile,r=(0,c.B7)({...this.parsedUrl.query,blankTile:!a&&null});return"".concat(this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(i).concat(r?"?"+r:"")}async queryElevation(e,t){const{ElevationQuery:a}=await i.e(35887).then(i.bind(i,35887));return(0,s.k_)(t),(new a).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:a}=await i.e(35887).then(i.bind(i,35887));return(0,s.k_)(t),(new a).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,a):Promise.resolve("unknown")}async _fetchImageService(e){var t;if(this.sourceJSON)return this.sourceJSON;const i={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},a=await(0,r.default)(this.parsedUrl.path,i);a.ssl&&(this.url=null===(t=this.url)||void 0===t?void 0:t.replace(/^http:/i,"https:")),this.sourceJSON=a.data,this.read(a.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,a._)([(0,h.Cb)({json:{read:{source:"copyrightText"}}})],O.prototype,"copyright",void 0),(0,a._)([(0,h.Cb)({readOnly:!0,type:v.Z})],O.prototype,"heightModelInfo",void 0),(0,a._)([(0,h.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),(0,a._)([(0,h.Cb)({type:["show","hide"]})],O.prototype,"listMode",void 0),(0,a._)([(0,h.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],O.prototype,"minScale",void 0),(0,a._)([(0,h.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],O.prototype,"maxScale",void 0),(0,a._)([(0,h.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],O.prototype,"opacity",void 0),(0,a._)([(0,h.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],O.prototype,"operationalLayerType",void 0),(0,a._)([(0,h.Cb)()],O.prototype,"sourceJSON",void 0),(0,a._)([(0,h.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],O.prototype,"type",void 0),(0,a._)([(0,h.Cb)(g.HQ)],O.prototype,"url",void 0),(0,a._)([(0,h.Cb)()],O.prototype,"version",void 0),(0,a._)([(0,d.r)("version",["currentVersion"])],O.prototype,"readVersion",null),O=(0,a._)([(0,u.j)("esri.layers.ElevationLayer")],O),O.prototype.fetchTile.__isDefault__=!0;const A=O},17775:(e,t,i)=>{i.d(t,{Z:()=>h});var a=i(27366),r=(i(59486),i(49861)),l=(i(63780),i(25243),i(38511)),n=i(69912),o=i(71466),s=i(23638),c=i(78952);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.includes("Tilemap")?new s.y({layer:this}):null}};return(0,a._)([(0,r.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,a._)([(0,r.Cb)()],t.prototype,"minScale",void 0),(0,a._)([(0,l.r)("service","minScale")],t.prototype,"readMinScale",null),(0,a._)([(0,r.Cb)()],t.prototype,"maxScale",void 0),(0,a._)([(0,l.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,a._)([(0,r.Cb)({type:c.Z})],t.prototype,"spatialReference",void 0),(0,a._)([(0,r.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,a._)([(0,r.Cb)(o.h)],t.prototype,"tileInfo",void 0),(0,a._)([(0,r.Cb)()],t.prototype,"tilemapCache",void 0),(0,a._)([(0,l.r)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),(0,a._)([(0,r.Cb)()],t.prototype,"version",void 0),t=(0,a._)([(0,n.j)("esri.layers.mixins.ArcGISCachedService")],t),t}},23638:(e,t,i)=>{i.d(t,{y:()=>L});var a,r=i(27366),l=i(76200),n=i(85015),o=i(59896),s=i(10064),c=i(41691),h=i(32718),p=i(16054),d=i(27546),u=i(66978),v=i(94172),m=i(99346),y=i(35995),f=i(49861),_=i(63780),b=i(89125),g=i(69912),w=i(87960),S=i(84652);class C{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%8,r=i>>3,l=this._tileAvailabilityBitSet;return r<0||r>l.length?"unknown":l[r]&1<<a?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let a=!0,r=!0;const l=Math.ceil(t*i/8),n=new Uint8Array(l);let o=0;for(let s=0;s<e.length;s++){const t=s%8;e[s]?(r=!1,n[o]|=1<<t):a=!1,7===t&&++o}r?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(e,t){const i=e.service.request||l.default,{row:a,col:r,width:n,height:o}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){let t;if("vector-tile"===e.service.type)t="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);else{const i=e.service.tileServers;t="".concat(i&&i.length?i[e.row%i.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}const i=e.service.query;return i&&(t="".concat(t,"?").concat(i)),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:r,width:n,height:o},valid:!0,data:(0,_.a9)(n*o,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==a||e.location.left!==r||e.location.width!==n||e.location.height!==o))throw new s.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:r,width:n,height:o}});return C.fromJSON(e)}))}static fromJSON(e){C._validateJSON(e);const t=new C;return t.location=Object.freeze((0,S.d9)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static _validateJSON(e){if(!e||!e.location)throw new s.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new s.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new s.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new s.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new s.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function T(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}let L=a=class extends((0,c.p)(n.Z)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*o.Y8.MEGABYTES,this.request=l.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new p.Z(this.cacheByteSize),this.addHandles([(0,v.YP)((()=>{const{layer:e}=this;return[null===e||void 0===e?void 0:e.parsedUrl,null===e||void 0===e?void 0:e.tileServers,null===e||void 0===e?void 0:e.apiKey,null===e||void 0===e?void 0:e.customParameters]}),(()=>this._initializeTilemapDefinition())),(0,v.YP)((()=>{var e,t;return null===(e=this.layer)||void 0===e||null===(t=e.tileInfo)||void 0===t?void 0:t.lods}),(e=>this._initializeAvailableLevels(e)),v.tX)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(h.Z.getLogger(this.declaredClass).error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,a){if(!this._availableLevels[e])return Promise.reject(new s.Z("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));const r=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,i,r);if(l)return Promise.resolve(l);const n=a&&a.signal;return a={...a,signal:null},new Promise(((e,t)=>{(0,u.fu)(n,(()=>t((0,u.zE)())));const i=T(r);let l=this._pendingTilemapRequests[i];if(!l){l=C.fromDefinition(r,a).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,a){return this._availableLevels[e]?this.fetchTilemap(e,t,i,a).catch((e=>e)).then((a=>{if(a instanceof C){const r=a.getAvailability(t,i);if("unavailable"===r)throw new s.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return r}if((0,u.D_)(a))throw a;return"unknown"})):Promise.reject(new s.Z("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")))}fetchAvailabilityUpsample(e,t,i,a,r){a.level=e,a.row=t,a.col=i;const l=this.layer.tileInfo;l.updateTileInfo(a);const n=this.fetchAvailability(e,t,i,r).catch((e=>{if((0,u.D_)(e))throw e;if(l.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e}));return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,r,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,l,n){if(!this._prefetchingEnabled)return;const o="prefetch-".concat(e);if(this.handles.has(o))return;const s=new AbortController;n.then((()=>s.abort()),(()=>s.abort()));let c=!1;const h={remove(){c||(c=!0,s.abort())}};if(this.handles.add(h,o),await(0,m.MU)(10,s.signal).catch((()=>{})),c||(c=!0,this.handles.remove(o)),(0,u.Hc)(s))return;const p=new w.f(e,t,i,r),d={...l,signal:s.signal},v=this.layer.tileInfo;for(let u=0;a._prefetches.length<a._maxPrefetch&&v.upsampleTile(p);++u){const e=this.fetchAvailability(p.level,p.row,p.col,d);a._prefetches.push(e);const t=()=>{a._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:(0,y.B7)({...t.query,...a,token:null!==i&&void 0!==i?i:null===(e=t.query)||void 0===e?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const r=T(a);return this._tilemapCache.get(r)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};L._maxPrefetch=4,L._prefetches=new d.Z({initialSize:a._maxPrefetch}),(0,r._)([(0,f.Cb)({constructOnly:!0,type:Number})],L.prototype,"levels",void 0),(0,r._)([(0,b.p)("levels")],L.prototype,"castLevels",null),(0,r._)([(0,f.Cb)({readOnly:!0,type:Number})],L.prototype,"size",null),(0,r._)([(0,f.Cb)({constructOnly:!0,type:Number})],L.prototype,"cacheByteSize",void 0),(0,r._)([(0,f.Cb)({constructOnly:!0})],L.prototype,"layer",void 0),(0,r._)([(0,f.Cb)({constructOnly:!0})],L.prototype,"request",void 0),L=a=(0,r._)([(0,g.j)("esri.layers.support.TilemapCache")],L)},71466:(e,t,i)=>{i.d(t,{d:()=>l,h:()=>r});var a=i(22824);const r={type:a.Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,i,r){if(!e)return null;const{minScale:l,maxScale:n,minLOD:o,maxLOD:s}=t;if(null!=o&&null!=s)return r&&r.ignoreMinMaxLOD?a.Z.fromJSON(e):a.Z.fromJSON({...e,lods:e.lods.filter((e=>{let{level:t}=e;return null!=t&&t>=o&&t<=s}))});if(0!==l&&0!==n){const t=e=>Math.round(1e4*e)/1e4,i=l?t(l):1/0,r=n?t(n):-1/0;return a.Z.fromJSON({...e,lods:e.lods.filter((e=>{const a=t(e.scale);return a<=i&&a>=r}))})}return a.Z.fromJSON(e)}}}]);
//# sourceMappingURL=59512.8c2153c3.chunk.js.map