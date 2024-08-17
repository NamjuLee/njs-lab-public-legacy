"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[97957],{43244:(e,t,s)=>{s.d(t,{Z:()=>r});var i=s(92026);class r{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if((0,i.pC)(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;(0,i.pC)(t);)e&&e(t),t=this.dequeue()}}},39484:(e,t,s)=>{s.d(t,{Q:()=>u,g:()=>o});var i=s(93169),r=s(92026),n=s(70734);const a=(0,i.Z)("esri-2d-log-allocations");class o{constructor(e,t){this._array=e,this._pool=t}get array(){return this._array}get length(){return this._array.length}static create(e,t){const s=t.acquire(e);return new o(s,t)}expand(e){const t=this._pool.acquire(e);t.set(this._array),this._pool.release(this._array),this._array=t}destroy(){this._pool.release(this._array)}set(e,t){this._array.set(e._array,t)}slice(){const e=this._pool.acquire(this._array.byteLength);return e.set(this._array),new o(e,this._pool)}}class h{constructor(){this._data=new ArrayBuffer(h.BYTE_LENGTH),this._freeList=new n.m({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(e){const t=this._freeList.firstFit(e);return(0,r.Wi)(t)?null:new Uint32Array(this._data,t,e/Uint32Array.BYTES_PER_ELEMENT)}free(e){this._freeList.free(e.byteOffset,e.byteLength)}}class u{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}destroy(){this._pages=[],this._pagesByBuffer=null}get _bytesTotal(){return this._pages.length*h.BYTE_LENGTH}acquire(e){if(this._bytesAllocated+=e,a&&console.log("Allocating ".concat(e,", (").concat(this._bytesAllocated," / ").concat(this._bytesTotal,")")),e>h.BYTE_LENGTH)return new Uint32Array(e/Uint32Array.BYTES_PER_ELEMENT);for(const t of this._pages){const s=t.allocate(e);if((0,r.pC)(s))return s}return(0,r.s3)(this._addPage().allocate(e),"Expected to allocate page")}release(e){this._bytesAllocated-=e.byteLength,a&&console.log("Freeing ".concat(e.byteLength,", (").concat(this._bytesAllocated," / ").concat(this._bytesTotal,")"));const t=this._pagesByBuffer.get(e.buffer);t&&t.free(e)}_addPage(){const e=new h;return this._pages.push(e),this._pagesByBuffer.set(e.buffer,e),e}}},84328:(e,t,s)=>{s.d(t,{KS:()=>u,PX:()=>n,QS:()=>l,_I:()=>i,jL:()=>h,nE:()=>d,vs:()=>o,xp:()=>a});const i=8388607,r=8388608,n=0,a=1,o=e=>(e&r)>>>23,h=e=>e&i,u=e=>o(e)===a?254:255;function d(e){return o(e)===a}function l(e,t){return((t?r:0)|e)>>>0}},70734:(e,t,s)=>{s.d(t,{a:()=>r,m:()=>n});var i=s(92026);class r{constructor(e){if(this.next=null,!Array.isArray(e))return void(this.data=e);this.data=e[0];let t=this;for(let s=1;s<e.length;s++)t.next=new r([e[s]]),t=t.next}*values(){let e=this;for(;e;)yield e.data,e=e.next}forEach(e){let t=this;for(;t;)e(t.data),t=t.next}find(e){var t;return e(this.data)?this:null===(t=this.next)||void 0===t?void 0:t.find(e)}max(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;const s=e(this.data)>e(t.data)?this:t;return this.next?this.next.max(e,s):s}remove(e){var t,s;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this===e?i?(i.next=this.next,i):this.next:null!==(t=null===(s=this.next)||void 0===s?void 0:s.remove(e,this))&&void 0!==t?t:null}get last(){return this.next?this.next.last:this}}class n{constructor(e){this._head=null,(0,i.Wi)(e)||(this._head=new r(e))}get head(){return this._head}maxAvailableSpace(){if((0,i.Wi)(this._head))return 0;const e=this._head.max((e=>e.end-e.start));return e.data.end-e.data.start}firstFit(e){if((0,i.Wi)(this._head))return null;let t=null,s=this._head;for(;s;){const i=s.data.end-s.data.start;if(i===e)return t?t.next=s.next:this._head=s.next,s.data.start;if(i>e){const t=s.data.start;return s.data.start+=e,t}t=s,s=s.next}return null}free(e,t){const s=e+t;if((0,i.Wi)(this._head)){const t=new r({start:e,end:s});return void(this._head=t)}if(s<=this._head.data.start){if(s===this._head.data.start)return void(this._head.data.start-=t);const i=new r({start:e,end:s});return i.next=this._head,void(this._head=i)}let n=this._head,a=n.next;for(;a;){if(a.data.start>=s){if(n.data.end===e){if(n.data.end+=t,n.data.end===a.data.start){const e=a.data.end-a.data.start;return n.data.end+=e,void(n.next=a.next)}return}if(a.data.start===s)return void(a.data.start-=t);const i=new r({start:e,end:s});return i.next=n.next,void(n.next=i)}n=a,a=a.next}if(e===n.data.end)return void(n.data.end+=t);const o=new r({start:e,end:s});n.next=o}}},64668:(e,t,s)=>{s.d(t,{J:()=>r,g:()=>i});const i=(e,t)=>e&&function(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return t.warn("DEBUG:",...s)}||(()=>null),r=!1},40639:(e,t,s)=>{s.d(t,{Z:()=>h});var i=s(27366),r=s(41691),n=s(49861),a=(s(63780),s(25243),s(69912));let o=class extends r.r{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,i._)([(0,n.Cb)()],o.prototype,"layer",void 0),(0,i._)([(0,n.Cb)()],o.prototype,"layerView",void 0),(0,i._)([(0,n.Cb)()],o.prototype,"tileInfoView",void 0),(0,i._)([(0,n.Cb)()],o.prototype,"updating",null),o=(0,i._)([(0,a.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],o);const h=o},8263:(e,t,s)=>{s.r(t),s.d(t,{default:()=>P});var i=s(27366),r=s(93169),n=s(66978),a=(s(32718),s(25243),s(63780),s(10064),s(69912)),o=s(65156),h=s(43244),u=s(92026),d=s(11245),l=s(80613),f=s(46640),c=s(98774);const _=4294967296;class p{constructor(e){this._savedCursor=null,this._savedOffset=null,this._head=e,this._cursor=e}static from(e){const t=y.from(new Float32Array(e));return new p(t)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(e){return this._cursor.setComputedMinZoom(e)}boundsComputedAnchorX(e){return this._cursor.boundsComputedAnchorX(e)}boundsComputedAnchorY(e){return this._cursor.boundsComputedAnchorY(e)}setBoundsComputedAnchorX(e,t){return this._cursor.setBoundsComputedAnchorX(e,t)}setBoundsComputedAnchorY(e,t){return this._cursor.setBoundsComputedAnchorY(e,t)}boundsX(e){return this._cursor.boundsX(e)}boundsY(e){return this._cursor.boundsY(e)}boundsWidth(e){return this._cursor.boundsWidth(e)}boundsHeight(e){return this._cursor.boundsHeight(e)}link(e){if((0,u.pC)(e._head))return this._cursor.link(e._head)}getCursor(){return this.copy()}copy(){var e;const t=new p(null===(e=this._head)||void 0===e?void 0:e.copy());if(!t._head)return t;let s=t._head,i=t._head._link;for(;i;)s._link=i.copy(),s=i,i=s._link;return t}peekId(){var e;return null!==(e=this._cursor.peekId())&&void 0!==e?e:this._cursor._link.peekId()}nextId(){const e=this.id;for(;e===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._savedCursor&&(this._cursor=this._savedCursor),null!=this._savedOffset&&(this._cursor._offset=this._savedOffset)}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(e){let t=this._head,s=null;for(;t;){if(t.delete(e))return t.isEmpty()&&(0,u.pC)(s)&&(s._link=t._link),!0;s=t,t=t._link}return!1}}class y{constructor(e){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=e}static from(e){return new y(new Float32Array(e))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(e){this._buffer[this._offset+0]=e}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(e){this._buffer[this._offset+8]=e}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(e){return this._buffer[this._offset+10+6*e+0]}boundsComputedAnchorY(e){return this._buffer[this._offset+10+6*e+1]}setBoundsComputedAnchorX(e,t){this._buffer[this._offset+10+6*e+0]=t}setBoundsComputedAnchorY(e,t){this._buffer[this._offset+10+6*e+1]=t}boundsX(e){return this._buffer[this._offset+10+6*e+2]}boundsY(e){return this._buffer[this._offset+10+6*e+3]}boundsWidth(e){return this._buffer[this._offset+10+6*e+4]}boundsHeight(e){return this._buffer[this._offset+10+6*e+5]}link(e){let t=this;for(;t._link;)t=t._link;t._link=e}getCursor(){return this.copy()}copy(){const e=new y(this._buffer);return e._link=this._link,e._offset=this._offset,e._deletedCount=this._deletedCount,e._offsets=this._offsets,e._count=this._count,e}peekId(){const e=this._offset+10+6*this.boundsCount+0;return e>=this._buffer.length?0:this._buffer[e]}next(){let e=0;for(;this._offset<this._buffer.length&&e++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,this.id===_););return this.id!==_&&this._offset<this._buffer.length}delete(e){const t=this._offset,s=this.lookup(e);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===e;)this.id=4294967295,++this._deletedCount;return this._offset=t,s}lookup(e){const t=this._offset;if((0,u.Wi)(this._offsets.instance)){this._offsets.instance=new Map;const e=this.copy();e._offset=-1;let t=0;for(;e.next();)e.id!==t&&(this._offsets.instance.set(e.id,e._offset),t=e.id)}return!!this._offsets.instance.has(e)&&(this._offset=this._offsets.instance.get(e),this.id!==_||(this._offset=t,!1))}_computeCount(){const e=this._offset;let t=0;for(this._offset=-1;this.next();)t++;return this._offset=e,t}}var g=s(70734);class m{constructor(e,t,s,i,r){this.target=e,this.geometryType=t,this.materialKey=s,this.indexFrom=i,this.indexCount=r}get indexEnd(){return this.indexFrom+this.indexCount}extend(e){this.indexCount+=e}}class b{constructor(e,t){this.geometryType=0,this._target=e,this.geometryType=t}static from(e,t,s,i){const r=new b(e,t);if((0,u.pC)(i))for(const n of i)s.seekIndex(n),r.addRecord(s);else for(;s.next();)r.addRecord(s);return r}addRecord(e){const t=this._target,s=this.geometryType,i=e.materialKey;let r=e.indexFrom,n=e.indexCount;const a=e.vertexFrom,o=e.vertexCount;if(n||(r=a,n=o),(0,u.Wi)(this._head)){const e=new m(t,s,i,r,n);return void(this._head=new g.a(e))}let h=null,d=this._head;for(;d;){if(r<d.data.indexFrom)return this._insert(i,r,n,h,d);h=d,d=d.next}this._insert(i,r,n,h,null)}forEach(e){(0,u.pC)(this._head)&&this._head.forEach(e)}*infos(){if((0,u.pC)(this._head))for(const e of this._head.values())yield e}_insert(e,t,s,i,r){if((0,u.Wi)(i)&&(0,u.Wi)(r)){const i=new m(this._target,this.geometryType,e,t,s);this._head=new g.a(i)}return(0,u.Wi)(i)&&(0,u.pC)(r)?this._insertAtHead(e,t,s,r):(0,u.pC)(i)&&(0,u.Wi)(r)?this._insertAtEnd(e,t,s,i):(0,u.pC)(i)&&(0,u.pC)(r)?this._insertAtMiddle(e,t,s,i,r):void 0}_insertAtHead(e,t,s,i){const r=t+s;if(e===i.data.materialKey&&r===i.data.indexFrom)i.data.indexFrom=t,i.data.indexCount+=s;else{const r=new m(this._target,this.geometryType,e,t,s);this._head=new g.a(r),this._head.next=i}}_insertAtEnd(e,t,s,i){if(i.data.materialKey===e&&i.data.indexEnd===t)i.data.indexCount+=s;else{const r=new m(this._target,this.geometryType,e,t,s),n=new g.a(r);i.next=n}}_insertAtMiddle(e,t,s,i,r){const n=t+s;if(i.data.materialKey===e&&i.data.indexEnd===t)i.data.indexCount+=s,i.data.materialKey===r.data.materialKey&&i.data.indexEnd===r.data.indexFrom&&(i.data.indexCount+=r.data.indexCount,i.next=r.next);else if(e===r.data.materialKey&&n===r.data.indexFrom)r.data.indexFrom=t,r.data.indexCount+=s;else{const n=new m(this._target,this.geometryType,e,t,s),a=new g.a(n);i.next=a,a.next=r}}}var x=s(39484),v=s(44070),w=s(8548);class C{constructor(e,t,s,i){const r=x.g.create(t*s*Uint32Array.BYTES_PER_ELEMENT,i);this.size=t,this.strideInt=s,this.bufferType=e,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=r,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize&&!this._gpu}get invalidatedComputeBuffer(){return this.bufferSize&&!this._gpuComputeTriangles}invalidate(){this._invalidateTriangleBuffer(),(0,u.yw)(this._gpu,(e=>e.dispose())),this._gpu=null}_invalidateTriangleBuffer(){(0,u.yw)(this._gpuComputeTriangles,(e=>e.dispose())),this._gpuComputeTriangles=null}destroy(){(0,u.yw)(this._gpu,(e=>e.dispose())),(0,u.yw)(this._gpuComputeTriangles,(e=>e.dispose())),(0,u.yw)(this._cpu,(e=>e.destroy())),(0,u.yw)(this._cpu2,(e=>e.destroy()))}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new g.m({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(e){if(!(this.maxAvailableSpace()>=e)&&e*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const t=this._cpu.length/this.strideInt,s=Math.round(1.25*(t+e)),i=s*this.strideInt;this._cpu.expand(i*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(t,s-t)}}set(e,t){this._cpu.array[e]!==t&&(this._cpu.array[e]=t,this.dirty.start=Math.min(e,this.dirty.start),this.dirty.end=Math.max(e,this.dirty.end))}getGPUBuffer(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.bufferSize)return null;if(t){if("index"!==this.bufferType)throw new Error("Tired to get triangle buffer, but target is not an index buffer");return(0,u.Wi)(this._gpuComputeTriangles)&&(this._gpuComputeTriangles=this._createComputeBuffer(e)),this._gpuComputeTriangles}return(0,u.Wi)(this._gpu)&&(this._gpu=this._createBuffer(e)),this._gpu}getCPUBuffer(){if(!this._cpu2){const e=this._cpu.slice();this._cpu2=e}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(e,t,s,i){const r=s*this.strideInt;if(!r)return 0;const n=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,a=new Uint32Array(e,n,r),o=(0,u.s3)(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,h=r,d=o/this.strideInt-t;if(0!==i)for(let u=0;u<a.length;u++)a[u]+=i;return this._cpu.array.set(a,o),this.dirty.start=Math.min(this.dirty.start,o),this.dirty.end=Math.max(this.dirty.end,o+h),this.fillPointer=Math.max(this.fillPointer,o+h),d}free(e,t,s){const i=e*this.strideInt,r=(e+t)*this.strideInt;if(!0===s)for(let n=e;n!==e+t;n++)this._cpu.array[n*this.strideInt]=2147450879;this.dirty.start=Math.min(this.dirty.start,i),this.dirty.end=Math.max(this.dirty.end,r),this.freeList.free(e,t)}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),(0,u.Wi)(this._gpu))return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubData(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(e){const t=w.l1.DYNAMIC_DRAW;return"index"===this.bufferType?v.f.createIndex(e,t,this._cpu.array):v.f.createVertex(e,t,this._cpu.array)}_createComputeBuffer(e){const t=w.l1.DYNAMIC_DRAW,s=new Uint32Array(this.fillPointer/3);for(let i=0;i<this.fillPointer;i+=3)s[i/3]=this._cpu.array[i];return v.f.createIndex(e,t,s)}}var E=s(50477),S=s(45412);class T{constructor(e,t){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=e,this._stage=t}destroy(){for(const[e,t]of this._vaos)(0,u.pC)(t)&&t.dispose(!1);this._indexBuffer=(0,u.SC)(this._indexBuffer),this._vertexBuffer=(0,u.SC)(this._vertexBuffer)}insert(e,t,s){if(!e.records.byteLength)return;const i=e.stride;if(this._vertexBuffer&&this._indexBuffer){const s=e.indices.byteLength/4,r=e.vertices.byteLength/i;this._indexBuffer.ensure(s),this._vertexBuffer.ensure(r);const{vertices:n,indices:a}=e,o=E.$.from(e.records),h=this._vertexBuffer.insert(n,0,n.byteLength/i,0),d=this._indexBuffer.insert(a,0,a.byteLength/4,h);if(o.forEach((e=>{e.indexFrom+=d,e.vertexFrom+=h})),(0,u.s3)(this._records,"Expected records to be defined").link(o),t)this._indicesInvalid=!0;else if(this._displayList){const e=o.getCursor();for(;e.next();)this._displayList.addRecord(e)}}else{const s=e.indices.byteLength/4,r=e.vertices.byteLength/i,n=i/Uint32Array.BYTES_PER_ELEMENT,a=this._stage.bufferPool;this._records=E.$.from(e.records),this._indexBuffer=new C("index",s,1,a),this._vertexBuffer=new C("vertex",r,n,a),this._indexBuffer.insert(e.indices,0,e.indices.byteLength/4,0),this._vertexBuffer.insert(e.vertices,0,e.vertices.byteLength/i,0),t&&(this._indicesInvalid=!0)}}remove(e){if(!(0,u.Wi)(this._records))for(const t of e){const e=this._records.getCursor();if(!e.lookup(t))continue;const s=e.indexFrom,i=e.vertexFrom;let r=e.indexCount,n=e.vertexCount;for(;e.next()&&e.id===t;)r+=e.indexCount,n+=e.vertexCount;this._indexBuffer.free(s,r),this._vertexBuffer.free(i,n,!0),this._records.delete(t)}}getVAO(e,t,s,i){if(!this._vertexBuffer||!this._indexBuffer||(0,u.Wi)(this._records)||!this._vertexBuffer.bufferSize)return null;const r=i?1:0;let n=this._vaos.get(r);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated||i&&this._indexBuffer.invalidatedComputeBuffer)&&((0,u.yw)(n,(e=>e.dispose(!1))),n=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const a=this._indexBuffer.getGPUBuffer(e,1===r),o=this._vertexBuffer.getGPUBuffer(e);return n||(n=new S.U(e,s,t,{geometry:o},a),this._vaos.set(r,n)),n}forEachCommand(e){if(!(0,u.Wi)(this._records)){if(this._sortIndices(this._records),!this._displayList){const e=this._cursorIndexOrder;this._displayList=b.from(this,this.geometryType,this._records.getCursor(),e)}this._displayList.forEach(e)}}_sortIndices(e){const t=!!this._indexBuffer.bufferSize;if(!this._indicesInvalid)return;this._indicesInvalid=!1;let s=0;const i=e.getCursor(),r=[],n=[],a=[];for(;i.next();)n.push(i.index),a.push(i.sortKey),r.push(i.id);n.sort(((e,t)=>{const s=a[t],i=a[e];return i===s?r[t]-r[e]:s-i}));const o=e.getCursor(),h=t?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const u of n){if(!o.seekIndex(u))throw new Error("Expected to find index");if(t){const{indexFrom:e,indexCount:t}=o;o.indexFrom=s;for(let i=0;i<t;i++)this._indexBuffer.set(s++,h.array[e+i])}else{const{vertexFrom:e,vertexCount:t}=o,i=this._vertexBuffer.strideInt,r=e*i,n=r+t*i;o.vertexFrom=s/i;for(let a=r;a<n;a++)this._vertexBuffer.set(s++,h.array[a])}}this._cursorIndexOrder=n,this._displayList=null}}let B=0;class V extends c.o{constructor(e,t,s,i,r,n){super(e,t,s,i),this.instanceId=B++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new h.Z(100),this._bufferPatches=new h.Z(100),this._lastCommitTime=0,this.transforms.labelMat2d=(0,d.c)(),this._store=r,this._requestLabelUpdate=n}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy())),(0,u.pC)(this._renderState.next)&&this._renderState.next.geometry.forEach((e=>e.destroy())),this._renderState.current=null,this._renderState.next=null}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}patch(e,t){this.patchCount++,e.clear&&this._patches.size>=50&&this._dropPatches();const s=e,i=s.addOrUpdate&&this.key.id!==s.addOrUpdate.tileKeyOrigin;t&&i?this._bufferPatches.enqueue(s):(s.sort=s.sort&&!t,this._patches.enqueue(s)),this.requestRender()}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<4;e++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();this._renderState.swap=!0,this._swap()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,(0,u.pC)(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const e=this._bufferPatches.peek();if(!(0,u.pC)(e)||!e.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const e=this._bufferPatches.dequeue();(0,u.pC)(e)&&this._patchBuffer(e)}}_updateMesh(){const e=this._patches.dequeue();if((0,u.pC)(e)){if((0,r.Z)("esri-2d-update-debug")){var t;const r=e,a=null===(t=r.addOrUpdate)||void 0===t?void 0:t.tileKeyOrigin,o=this.key.id===a?"SELF":a;let h="";for(let e=0;e<5;e++){var s,i,n;h+=null!==(s=r.addOrUpdate)&&void 0!==s&&null!==(i=s.data[e])&&void 0!==i&&null!==(n=i.records)&&void 0!==n&&n.byteLength?1:0}console.debug(this.key.id,"FeatureTile:patch","[clear: ".concat(r.clear," origin: ").concat(o,", end:").concat(r.end," data:").concat(h,"]"))}!0===e.clear&&((0,u.pC)(this._renderState.next)&&(this._renderState.next.geometry.forEach((e=>e.destroy())),this._renderState.next=null),this._renderState.next={geometry:new Map,metrics:null},(0,r.Z)("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Creating new renderState")),this.requestRender(),this._patch(e),e.end&&((0,r.Z)("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Encountered end message"),this.ready(),this._swapRenderStates())}}_patch(e){(0,f.Z_)((t=>{this._remove(t,e.remove),this._insert(t,e,!1)}))}_patchBuffer(e){(0,f.Z_)((t=>{this._insert(t,e,!0)}))}_insert(e,t,s){try{var i;const n=(0,u.Pt)(this._renderState.next,this._renderState.current),a=null===(i=t.addOrUpdate)||void 0===i?void 0:i.data[e],o=n.geometry;if((0,u.Wi)(a))return;o.has(e)||((0,r.Z)("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_insert - Creating geometry buffer ".concat(e)),o.set(e,new T(e,this.stage))),(0,r.Z)("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_insert - Inserting into ".concat(e,", version=").concat(t.addOrUpdate.version," stride=").concat(a.stride)),o.get(e).insert(a,t.sort,s),e===l.LW.LABEL&&this._insertLabelMetrics(t.type,a.metrics,t.clear)}catch(m){}}_insertLabelMetrics(e,t,s){const i=(0,u.Pt)(this._renderState.next,this._renderState.current);if((0,u.Wi)(t))return;const r=p.from(t);if((0,u.Wi)(i.metrics))i.metrics=r;else{if("update"===e){const e=r.getCursor();for(;e.next();)i.metrics.delete(e.id)}i.metrics.link(r)}}_remove(e,t){const s=(0,u.Pt)(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t))}_removeLabelMetrics(e){const{metrics:t}=(0,u.Pt)(this._renderState.next,this._renderState.current);if(!(0,u.Wi)(t)&&e.length)for(const s of e)for(;t.delete(s););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const s=this._patches.dequeue();if((0,u.Wi)(s))break;if(s.clear){if(t)break;t=!0}e.push(s)}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)))}}var U=s(91370),A=s(40639),L=s(98290),k=s(98533),I=s(80391);const R=(0,r.Z)("featurelayer-order-by-server-enabled");class M extends I.T{constructor(e,t,s,i){super(e),this._hitTestsRequests=[],this._layer=s,this._layerView=t,this._onUpdate=i}renderChildren(e){this.attributeView.update(),this.hasAnimation&&e.painter.effects.integrate.draw(e,e.attributeView),super.renderChildren(e)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(e){let t=this._hitTestsRequests.find((t=>{let{x:s,y:i}=t;return s===e.x&&i===e.y}));const s=(0,n.hh)();return t?t.resolvers.push(s):(t={x:e.x,y:e.y,resolvers:[s]},this._hitTestsRequests.push(t)),this.requestRender(),s.promise}onTileData(e,t){const s=R&&"orderBy"in this._layer&&this._layer.orderBy,i=(null===s||void 0===s?void 0:s.length)&&!s[0].valueExpression&&s[0].field,r=s&&this._layerView.orderByFields===i;e.patch(t,r),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){this.contains(e)||this.addChild(e)}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._layerView.featureEffectView.transitionStep(e,t),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(e){const{minScale:t,maxScale:s}=this._layer,i=e.state.scale;i<=(t||1/0)&&i>=s&&super.doRender(e)}afterRender(e){super.afterRender(e),this._hitTestsRequests.length&&this.requestRender()}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(e){const{rendererSchema:t}=e.rendererInfo;if("dot-density"===(null===t||void 0===t?void 0:t.type)&&(null===t||void 0===t?void 0:t.dotSize)>1||"heatmap"===(null===t||void 0===t?void 0:t.type)){const e=1;for(const t of this.children)t.stencilRef=t.key.level+e}else super.setStencilReference(e)}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some((e=>e.labelingInfo&&e.labelingInfo.length&&e.labelsVisible));const e=this._layer.featureReduction,t=e&&"labelingInfo"in e&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}prepareRenderPasses(e){const t=e.registerRenderPass({name:"label",brushes:[k.U.label],target:()=>this.hasLabels?this.children:null,drawPhase:l.jx.LABEL|l.jx.LABEL_ALPHA}),s=e.registerRenderPass({name:"geometry",brushes:[k.U.fill,k.U.dotDensity,k.U.line,k.U.marker,k.U.heatmap,k.U.pieChart,k.U.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:e.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:e.effects.hittest,enable:()=>!!this._hitTestsRequests.length,args:()=>this._hitTestsRequests}]}),i=e.registerRenderPass({name:"highlight",brushes:[k.U.fill,k.U.dotDensity,k.U.line,k.U.marker,k.U.pieChart,k.U.text],target:()=>this.children,drawPhase:l.jx.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),s,i,t]}}let z=class extends A.Z{constructor(){super(...arguments),this.type="symbol"}install(e){const t=new M(this.tileInfoView,this.layerView,this.layer,(()=>this.notifyChange("updating")));this.featuresView=t,e.addChild(t)}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy(),this.featuresView=null}fetchResource(e,t){const{url:s}=e,i=this.featuresView.stage;try{return i.resourceManager.fetchResource(s,{signal:t.signal})}catch(b){return(0,n.D_)(b)?Promise.resolve({width:0,height:0}):Promise.reject(b)}}isUpdating(){var e;const t=super.isUpdating(),s=!this.featuresView||this.featuresView.isUpdating(),i=null===(e=this.featuresView)||void 0===e?void 0:e.hasEmptyAttributeView(),n=t||s||t&&i;return(0,r.Z)("esri-2d-log-updating")&&console.log("Updating SymbolTileRenderer ".concat(n,"\n  -> updatingTiles ").concat(t,"\n  -> hasFeaturesView ").concat(!!this.featuresView,"\n  -> updatingFeaturesView ").concat(s)),n}hitTest(e){return this.featuresView.hitTest(e)}supportsRenderer(e){return null!=e&&["simple","class-breaks","unique-value","dot-density","dictionary","heatmap","pie-chart"].includes(e.type)}onConfigUpdate(e){let t=null;if(e&&"visualVariables"in e){const s=((0,U.aR)(e).visualVariables||[]).map((e=>{const t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=(0,L.I)(s)}this.featuresView.setRendererInfo(e,t,this.layerView.featureEffect)}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()))}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()))}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(e){const t=this.tileInfoView.getTileBounds((0,o.Ue)(),e),s=this.tileInfoView.getTileResolution(e.level),i=this.featuresView.attributeView;return new V(e,s,t[0],t[3],i,(()=>this.layerView.view.labelManager.requestUpdate()))}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()}};z=(0,i._)([(0,a.j)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],z);const P=z},98290:(e,t,s)=>{s.d(t,{I:()=>c,qc:()=>u});var i=s(92026),r=s(17842),n=s(65800),a=s(94109),o=s(80613),h=s(18745);function u(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function d(e){return e.map((e=>function(e){return{value:e.value,size:(0,r.t_)(e.size)}}(e)))}function l(e){if("string"==typeof e||"number"==typeof e)return(0,r.t_)(e);const t=e;return{type:"size",expression:t.expression,stops:d(t.stops)}}const f=e=>{const t=[],s=[],i=d(e),n=i.length;for(let o=0;o<6;o++){const e=i[Math.min(o,n-1)];t.push(e.value),s.push(null==e.size?a.AI:(0,r.F2)(e.size))}return{values:new Float32Array(t),sizes:new Float32Array(s)}};function c(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t)return{vvFields:t,vvRanges:s};for(const i of e)if(i.field&&(t[i.type]=i.field),"size"===i.type){s.size||(s.size={});const e=i;switch((0,h.a)(e)){case o.X.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:l(e.minSize),maxSize:l(e.maxSize)};break;case o.X.SIZE_SCALE_STOPS:s.size.scaleStops={stops:d(e.stops)};break;case o.X.SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=f(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t}}else s.size.fieldStops={type:"static",...f(e.stops)};break;case o.X.SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===i.type)s.color=y(i);else if("opacity"===i.type)s.opacity=_(i);else if("rotation"===i.type){const e=i;s.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:s}}function _(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const i=s[Math.min(e,s.length-1)];t.values[e]=i.value,t.opacities[e]=i.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s}}return t}function p(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a}function y(e){if((0,i.Wi)(e))return null;if(e.normalizationField)return null;const t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;t.field=e.field;const s=e.stops;for(let e=0;e<8;++e){const i=s[Math.min(e,s.length-1)];t.values[e]=i.value,p(t.colors,e,i.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].color;for(let e=0;e<8;e++)t.values[e]=1/0,p(t.colors,e,s)}}for(let s=0;s<32;s+=4)(0,n.pr)(t.colors,s,!0);return t}}}]);
//# sourceMappingURL=97957.0891a675.chunk.js.map