"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[12461],{80391:(e,t,s)=>{s.d(t,{T:()=>z});var i=s(66978),r=s(43e3),n=s(10064),a=s(93169),o=s(32718),h=s(92026),d=s(94109),u=s(84328),l=s(46640),c=s(64668),_=s(8548),p=s(53634),x=s(51378);const E=o.Z.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),R=(0,c.g)(c.J,E);class f{constructor(e,t,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:i,pixelType:r,textureOnly:n}=e,a=(0,l.UK)(r);this.shared=s,this.pixelType=r,this.size=t,this.textureOnly=n,n||(this.data=new a((0,h.Wg)(i))),this._resetRange()}destroy(){(0,h.yw)(this._texture,(e=>e.dispose()));for(const e in this._fbos)(0,h.yw)(this._fbos[e],(t=>{"0"===e&&t.detachColorTexture(),t.dispose()})),this._fbos[e]=null;this._texture=null}get _textureDesc(){return{target:_.No.TEXTURE_2D,wrapMode:_.e8.CLAMP_TO_EDGE,pixelFormat:_.VI.RGBA,dataType:this.pixelType,samplingMode:_.cw.NEAREST,width:this.size,height:this.size}}setData(e,t,s){const i=(0,u.jL)(e),r=(0,h.Wg)(this.data),n=i*this.texelSize+t;!r||n>=r.length||(r[n]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(e,t){if((0,h.Wi)(this.data))return null;const s=(0,u.jL)(e)*this.texelSize+t;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(e){return(0,h.Pt)(this._texture,(()=>this._initTexture(e)))}getFBO(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if((0,h.Wi)(this._fbos[t])){const s={colorTarget:_.Lm.TEXTURE,depthStencilTarget:_.OU.NONE},i=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new p.X(e,s,i)}return this._fbos[t]}get locked(){return!(this.pixelType!==_.Br.UNSIGNED_BYTE||!this.shared||this.textureOnly||!(0,a.Z)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){if(!this.locked){try{const t=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const i=(0,h.Wg)(this.data).buffer,r=this.getTexture(e),a=4,o=(t-t%this.size)/this.size,d=(s-s%this.size)/this.size,u=o,c=this.size,_=d,p=o*this.size*a,x=(c+_*this.size)*a-p,R=(0,l.UK)(this.pixelType),f=new R(i,p*R.BYTES_PER_ELEMENT,x),g=this.size,v=_-u+1;if(v>this.size)return void E.error(new n.Z("mapview-webgl","Out-of-bounds index when updating AttributeData"));r.updateData(0,0,u,g,v,f)}catch(s){}t()}}update(e){const{data:t,start:s,end:i}=e;if((0,h.pC)(t)){const i=this.data,r=s*this.texelSize;for(let s=0;s<t.length;s++){const n=1<<s%this.texelSize;e.layout&n&&(i[r+s]=t[s])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(e,t){const s=this.size;if(this.size=t,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const i=(0,l.UK)(this.pixelType);this.destroy(),this.data=new i((0,h.Wg)(e.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new x.x(e,this._textureDesc,(0,h.Pt)(this.data,void 0));if((0,h.pC)(this._lastTexture)&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(e),o=(0,l.Yw)(r),h=new((0,l.UK)(r))(new ArrayBuffer(s*i*o*this.texelSize)),d=e.getBoundFramebufferObject(),{x:u,y:c,width:_,height:p}=e.getViewport();e.bindFramebuffer(a),a.readPixels(0,0,s,i,n,r,h),t.updateData(0,0,0,2*s,i/2,h),e.setViewport(u,c,_,p),e.bindFramebuffer(d)}return this.destroy(),this._texture=t,this._texture}}class g{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){const{blocks:t,shared:s,size:i}=e;if(this.shared=s,this.size=i,R("Initializing AttributeStoreView",e),(0,h.Wi)(this._data))this._data=(0,h.Fd)(t,(e=>new f(e,i,s)));else for(let r=0;r<this._data.length;r++){const e=this._data[r],n=t[r];(0,h.pC)(n)&&((0,h.Wi)(e)?this._data[r]=new f(n,i,s):e.resize(n,i))}this._initialized=!0}destroy(){(0,h.yw)(this._data,(e=>(0,h.Fd)(e,(e=>e.destroy())))),(0,h.yw)(this._defaultTexture,(e=>e.dispose()))}isEmpty(){const e=this._data;return(0,h.Wi)(e)}isUpdating(){const e=(0,h.pC)(this._pendingAttributeUpdate),t=e;return(0,a.Z)("esri-2d-log-updating")&&console.log("Updating AttributeStoreView ".concat(t,"\n  -> hasPendingUpdate ").concat(e)),t}getBlock(e){return(0,h.Wi)(this._data)?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,d.aK,0,0)}getData(e,t,s,i){if(!this._data)return 0;const r=(0,h.Wg)(this._data)[t];if((0,h.Wi)(r))return 0;const n=r.getData(e,s);return(0,h.pC)(n)?n:i}setData(e,t,s,i){const r=(0,h.Wg)(this._data)[t];(0,h.Wg)(r).setData(e,s,i)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void E.error(new n.Z("mapview-webgl","Tried to update attribute data with a pending update"));const t=(0,i.hh)();return R("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},this._onUpdate(),t.promise}update(){if(this._initialized&&(0,h.pC)(this._pendingAttributeUpdate)){(0,a.Z)("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:e,resolver:t}=this._pendingAttributeUpdate,s=(0,h.Wg)(this._data);for(let i=0;i<e.blocks.length;i++){const t=e.blocks[i],r=s[i];(0,h.yw)(r,(e=>(0,h.yw)(t,(t=>{R("Updating block ".concat(i),t),e.update(t)}))))}this._pendingAttributeUpdate=null,t(),this._onUpdate()}}bindTextures(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const s=this._getDefaultTexture(e);if(!this._initialized)return e.bindTexture(s,d.iJ),void(t&&(e.bindTexture(s,d.nM),e.bindTexture(s,d.Ij),e.bindTexture(s,d.f2),e.bindTexture(s,d.By),e.bindTexture(s,d.mx),e.bindTexture(s,d.Xj)));const i=(0,h.Wg)(this._data);this._locked&&!this._forceNextUpload||((0,h.JR)(i,(t=>t.updateTexture(e,(()=>this._onUpdate())))),this._forceNextUpload=!1),e.bindTexture((0,h.R2)(i[d._5],s,(t=>t.getTexture(e))),d.iJ),t&&(e.bindTexture((0,h.R2)(i[d.pU],s,(t=>t.getTexture(e))),d.Xj),e.bindTexture((0,h.R2)(i[d.xl],s,(t=>t.getTexture(e))),d.nM),e.bindTexture((0,h.R2)(i[d.aK],s,(t=>t.getTexture(e))),d.Ij),e.bindTexture((0,h.R2)(i[d.lK],s,(t=>t.getTexture(e))),d.f2),e.bindTexture((0,h.R2)(i[d.By],s,(t=>t.getTexture(e))),d.By),e.bindTexture((0,h.R2)(i[d.mx],s,(t=>t.getTexture(e))),d.mx))}_getDefaultTexture(e){if((0,h.Wi)(this._defaultTexture)){const t={wrapMode:_.e8.CLAMP_TO_EDGE,pixelFormat:_.VI.RGBA,dataType:_.Br.UNSIGNED_BYTE,samplingMode:_.cw.NEAREST,width:1,height:1};this._defaultTexture=new x.x(e,t,new Uint8Array(4))}return this._defaultTexture}}var v=s(55067),y=s(17842),m=s(68860),T=s(49229),b=s(10435),S=s(8848),k=s(90316);function w(e,t){const s=t.length;if(e<t[0].value||1===s)return t[0].size;for(let i=1;i<s;i++)if(e<t[i].value){const s=(e-t[i-1].value)/(t[i].value-t[i-1].value);return t[i-1].size+s*(t[i].size-t[i-1].size)}return t[s-1].size}class C{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=b.v}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;switch(t.type){case"static":return t;case"level-dependent":return(0,h.Pt)(t.levels[e],(()=>{let s=1/0,i=0;for(const o in t.levels){const t=parseFloat(o),r=Math.abs(e-t);r<s&&(s=r,i=t)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-i)/2),n=(0,h.Wg)(t.levels[i]),a=new Float32Array(n.values);return a[2]*=r,a[3]*=r,{sizes:(0,h.Wg)(n.sizes),values:a}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){(0,h.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,s){this._updateEffects(s),this._vvInfo=t,this._technique=(0,S.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,k.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){(0,h.pC)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!e)return;const i=e.size;if(i){if(s.vvSizeEnabled=!0,i.minMaxValue){const e=i.minMaxValue;let s,r;if((0,l.$K)(e.minSize)&&(0,l.$K)(e.maxSize))if((0,l.hj)(e.minSize)&&(0,l.hj)(e.maxSize))s=(0,y.F2)(e.minSize),r=(0,y.F2)(e.maxSize);else{const i=t.scale;s=(0,y.F2)(w(i,e.minSize.stops)),r=(0,y.F2)(w(i,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,s,r])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=(0,y.F2)(w(t.scale,i.scaleStops.stops))),i.unitValue){const e=(0,m.c9)(t.spatialReference)/T.a[i.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const r=e.color;r&&(s.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const n=e.opacity;n&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities));const a=e.rotation;a&&(s.vvRotationEnabled=!0,s.vvRotationType=a.type)}}class z extends v.Z{constructor(e){super(e),this._rendererInfo=new C,this._materialItemsRequestQueue=new r.Z,this.attributeView=new g((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,s){this._rendererInfo.setInfo(e,t,s),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return null;const s=(0,i.hh)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:s}),this.requestRender(),s.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some((e=>e.hasData)))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,t){let{items:s,abortOptions:i,resolver:r}=t;const{painter:n,pixelRatio:a}=e,o=s.map((e=>n.textureManager.rasterizeItem(e.symbol,a,e.glyphIds,i)));Promise.all(o).then((e=>{if(!this.stage)return void r.reject();const t=e.map(((e,t)=>({id:s[t].id,mosaicItem:e})));r.resolve(t)}),r.reject)}}},55067:(e,t,s)=>{s.d(t,{Z:()=>d});var i=s(93169),r=s(80613),n=s(64510),a=s(60418),o=s(40655);const h=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class d extends n.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(h),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),s}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,i.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const s of this.children)s.stencilRef=t++}}},72900:(e,t,s)=>{s.d(t,{I:()=>a});var i=s(22753),r=s(87422),n=s(73828);class a extends r.s{constructor(e,t,s,i,r,a){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:a;super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n.Z(e),this.resolution=t,this.x=s,this.y=i,this.width=r,this.height=a,this.rangeX=o,this.rangeY=h}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),s=this.transforms.tileMat3,[r,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,o=this.height/this.rangeY*t;(0,i.s)(s,a,0,0,0,o,0,r,n,1),(0,i.m)(this.transforms.dvs,e.displayViewMat3,s)}}},98774:(e,t,s)=>{s.d(t,{o:()=>d});var i=s(22018),r=s(11245),n=s(22753),a=s(23588),o=s(94109),h=s(72900);class d extends h.I{constructor(e,t,s,i){super(e,t,s,i,o.I_,o.I_)}destroy(){super.destroy(),this._transforms&&d.TransformCache.release(this.key.hash)}setTransform(e){const t=this.resolution/e.resolution,s=this.transforms.tileMat3,[a,o]=e.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*t,d=this.height/this.rangeY*t;(0,n.s)(s,h,0,0,0,d,0,a,o,1),(0,n.m)(this.transforms.dvs,e.displayViewMat3,s);const u=this.transforms.labelMat2d,l=window.devicePixelRatio,c=(0,i.d)((0,r.c)(),h*l,0,0,d*l,a*l,o*l);(0,i.m)(u,e.viewMat2d,c)}_createTransforms(){return d.TransformCache.acquire(this.key.hash)}}d.TransformCache=new class{acquire(e){return{refCount:1,version:-1,labelMat2d:(0,a.c)(),tileMat3:(0,a.c)(),dvs:(0,a.c)()}}release(e){}}},50477:(e,t,s)=>{s.d(t,{$:()=>a});var i=s(92026),r=s(94109);const n=2147483647;class a{constructor(e){this._head=e,this._cursor=e}static from(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.byteLength/o.BYTES_PER_RECORD-t;const i=new o(new Int32Array(e,t*o.BYTES_PER_RECORD,s*o.ELEMENTS_PER_RECORD));return new a(i)}size(){let e=this._cursor,t=0;for(;e;)t+=e.size(),e=e._link;return t}get id(){return this._cursor.id}set id(e){this._cursor.id=e}get materialKey(){return this._cursor.materialKey}set materialKey(e){this._cursor.materialKey=e}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(e){this._cursor.indexFrom=e}get indexCount(){return this._cursor.indexCount}set indexCount(e){this._cursor.indexCount=e}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(e){this._cursor.vertexFrom=e}get vertexCount(){return this._cursor.vertexCount}set vertexCount(e){this._cursor.vertexCount=e}get sortKey(){return this._cursor.sortKey}set sortKey(e){this._cursor.sortKey=e}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(e){let t=e;for(this._cursor=this._head;this._cursor;){const e=this._cursor.size();if(t<e)return this._cursor._index=t,!0;t-=e,this._cursor=this._cursor._link}return!1}forEach(e){const t=this.getCursor();for(;t.next();)e(t)}link(e){if(!this._head)return void(this._head=e._head);let t=this._head;for(;t._link;)t=t._link;t._link=e._head,t._link._indexStart=t._indexStart+t.size()}getCursor(){return this.copy()}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){var e;const t=new a(null===(e=this._head)||void 0===e?void 0:e.copy());if(!t._head)return t;let s=t._head,i=t._head._link;for(;i;)s._link=i.copy(),s=i,i=s._link;return t}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var e;return null!==(e=this._cursor.peekId())&&void 0!==e?e:this._cursor._link.peekId()}delete(e){let t=this._head,s=null;for(;t;){if(t.delete(e))return t.isEmpty()&&((0,i.pC)(s)&&(s._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0;s=t,t=t._link}return!1}}a.ELEMENTS_PER_RECORD=r.XJ,a.BYTES_PER_RECORD=a.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class o{constructor(e){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}static from(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.byteLength/this.BYTES_PER_RECORD-t;return new o(new Int32Array(e,t*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(e){const t=this._index,s=this.lookup(e);if(s)for(this.id=n,++this._deletedCount;this.next()&&this.id===e;)this.id=n,++this._deletedCount;return this._index=t,s}isEmpty(){return this._deletedCount===this.size()}link(e){this._link?this._link.link(e):this._link=e}lookup(e){if((0,i.Wi)(this._offsets.instance)){this._offsets.instance=new Map;const e=this.copy();e._index=-1;let t=0;for(;e.next();)e.id!==t&&(this._offsets.instance.set(e.id,e._index),t=e.id)}if(!this._offsets.instance.has(e))return!1;const t=this._index;return this._index=this._offsets.instance.get(e),this.id!==n||(this._index=t,!1)}get id(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD]}set id(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD]=e}get materialKey(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+1]}set materialKey(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+1]=e}get insertAfter(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+3]}set indexFrom(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+3]=e}get indexCount(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+4]}set indexCount(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+4]=e}get vertexFrom(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+5]}set vertexFrom(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+5]=e}get vertexCount(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+6]}set vertexCount(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+6]=e}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*o.ELEMENTS_PER_RECORD+7]}set sortKey(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*o.ELEMENTS_PER_RECORD+7]=e}get index(){return this._index}size(){return this._packedRecords.length/o.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===n;);return this._index<this.size()}peekId(){const e=(this._index+1)*o.ELEMENTS_PER_RECORD;return e>=this._packedRecords.length?0:this._packedRecords[e]}getCursor(){return this.copy()}copy(){const e=new o(this._packedRecords);return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}}o.ELEMENTS_PER_RECORD=r.XJ,o.BYTES_PER_RECORD=o.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT}}]);
//# sourceMappingURL=12461.a10290ba.chunk.js.map