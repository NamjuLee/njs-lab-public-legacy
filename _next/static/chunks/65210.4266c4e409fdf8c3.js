"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65210],{56938:function(e,t,r){function n(e,t){let r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,{m:function(){return n}}),Object.freeze(Object.defineProperty({__proto__:null,makeDense:n},Symbol.toStringTag,{value:"Module"}))},72756:function(e,t,r){r.d(t,{a:function(){return o},f:function(){return i},n:function(){return a}});var n=r(13677);function o(e,t){a(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r=2,o=r){let a=t.length/2,i=0,s=0;if((0,n.kJ)(t)||(0,n.Q7)(t)){for(let n=0;n<a;++n)e[i]=t[s],e[i+1]=t[s+1],i+=r,s+=o;return}let u=(0,n.Op)(t);if((0,n.B3)(t))for(let n=0;n<a;++n)e[i]=Math.max(t[s]/u,-1),e[i+1]=Math.max(t[s+1]/u,-1),i+=r,s+=o;else for(let n=0;n<a;++n)e[i]=t[s]/u,e[i+1]=t[s+1]/u,i+=r,s+=o}function i(e,t,r,n){let o=e.typedBuffer,a=e.typedBufferStride,i=n?.count??e.count,s=(n?.dstIndex??0)*a;for(let e=0;e<i;++e)o[s]=t,o[s+1]=r,s+=a}Object.freeze(Object.defineProperty({__proto__:null,fill:i,normalizeIntegerBuffer:a,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}))},57798:function(e,t,r){function n(e,t){o(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r=3,n=r){let o=t.length/n,a=0,i=0;for(let s=0;s<o;++s)e[a]=t[i],e[a+1]=t[i+1],e[a+2]=t[i+2],a+=r,i+=n}function a(e,t,r,n,o){let a=e.typedBuffer,i=e.typedBufferStride,s=o?.count??e.count,u=(o?.dstIndex??0)*i;for(let e=0;e<s;++e)a[u]=t,a[u+1]=r,a[u+2]=n,u+=i}r.d(t,{a:function(){return n},c:function(){return o},f:function(){return a}}),Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:a},Symbol.toStringTag,{value:"Module"}))},14327:function(e,t,r){function n(e,t){o(e.typedBuffer,t,e.typedBufferStride)}function o(e,t,r=4){let n=t.typedBuffer,o=t.typedBufferStride,a=t.count,i=0,s=0;for(let t=0;t<a;++t)e[i]=n[s],e[i+1]=n[s+1],e[i+2]=n[s+2],e[i+3]=n[s+3],i+=r,s+=o}function a(e,t,r,n,o,a){let i=e.typedBuffer,s=e.typedBufferStride,u=a?.count??e.count,l=(a?.dstIndex??0)*s;for(let e=0;e<u;++e)i[l]=t,i[l+1]=r,i[l+2]=n,i[l+3]=o,l+=s}r.d(t,{a:function(){return n},c:function(){return o},f:function(){return a}}),Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:a},Symbol.toStringTag,{value:"Module"}))},15635:function(e,t,r){r.d(t,{n1:function(){return n}});function n(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}},70126:function(e,t,r){r.d(t,{C:function(){return u}});var n=r(54748),o=r(27817),a=r(94605),i=r(31124),s=r(72659);class u{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,s.HK)(e)?((0,i.k_)(t),(0,s.AH)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if(null==this._streamDataRequester)return(await (0,n.Z)(t,{responseType:l[e]})).data;let s=await (0,o.q6)(this._streamDataRequester.request(t,e,r));if(!0===s.ok)return s.value;throw(0,i.r9)(s.error),new a.Z("",`Request for resource failed: ${s.error}`)}}let l={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},35518:function(e,t,r){r.d(t,{p:function(){return i}});var n=r(13677),o=r(20911),a=r(71193);function i(e,t){switch(t){case a.MX.TRIANGLES:return"number"==typeof e?(0,o.KF)(e):(0,n.lq)(e)?new Uint16Array(e):e;case a.MX.TRIANGLE_STRIP:return function(e){let t="number"==typeof e?e:e.length;if(t<3)return[];let r=t-2,n=(0,o.$z)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1):(n[e++]=t+1,n[e++]=t),n[e++]=t+2}else{let t=0;for(let o=0;o<r;o+=1)o%2==0?(n[t++]=e[o],n[t++]=e[o+1]):(n[t++]=e[o+1],n[t++]=e[o]),n[t++]=e[o+2]}return n}(e);case a.MX.TRIANGLE_FAN:return function(e){let t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);let r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}let o=e[0],a=e[1],i=0;for(let t=0;t<r;++t){let r=e[t+2];n[i++]=o,n[i++]=a,n[i++]=r,a=r}return n}(e)}}},10582:function(e,t,r){r.d(t,{$A:function(){return i},Ml:function(){return u},NM:function(){return a},i$:function(){return s}});var n=r(37180),o=r(73295);class a{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=o.Ti.KTX2_ENCODING}}function i(e){return"encoded-mesh-texture"===e?.type}async function s(e){let t=new Blob([e]);return JSON.parse(await t.text())}async function u(e,t){if(t===o.Ti.KTX2_ENCODING)return new a(e);let r=new Blob([e],{type:t}),i=URL.createObjectURL(r),s=new Image;if((0,n.Z)("esri-iPhone"))return new Promise((e,t)=>{let r=()=>{o(),e(s)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(i),s.removeEventListener("load",r),s.removeEventListener("error",n)};s.addEventListener("load",r),s.addEventListener("error",n),s.src=i});try{s.src=i,await s.decode()}catch(e){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(i),s}},62750:function(e,t,r){r.d(t,{Q:function(){return k}});var n,o,a,i,s=r(65223),u=r(77244),l=r(71193),f=r(94605),d=r(59528),c=r(31124),p=r(72659),m=r(68872),h=r(94807),g=r(41174),T=r(57079),w=r(12287),y=r(56938);r(37180);class _{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){let e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){let t=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,t,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}}(n=a||(a={})).SCALAR="SCALAR",n.VEC2="VEC2",n.VEC3="VEC3",n.VEC4="VEC4",n.MAT2="MAT2",n.MAT3="MAT3",n.MAT4="MAT4",(o=i||(i={}))[o.ARRAY_BUFFER=34962]="ARRAY_BUFFER",o[o.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER";var b=r(39928);let x={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},O={pbrMetallicRoughness:x,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},S={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},N=(e={})=>{let t={...x,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,b.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...S,...e.extras});return{...O,...e,pbrMetallicRoughness:t,extras:r}},E={magFilter:l.cw.LINEAR,minFilter:l.cw.LINEAR_MIPMAP_LINEAR,wrapS:l.e8.REPEAT,wrapT:l.e8.REPEAT},A=e=>({...E,...e});var R=r(10582);let v={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562};class C{constructor(e,t,r,n){let o,a;if(this._context=e,this.uri=t,this.json=r,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=(this.uri.replace(/^(.*\/)?([^/]*)$/,(e,t,r)=>(o=t||"",a=r||"","")),{dirPart:o,filePart:a}).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==r.scenes)throw new f.Z("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==r.meshes)throw new f.Z("gltf-loader-unsupported-feature","Meshes must be defined");if(null==r.nodes)throw new f.Z("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,t,r){if((0,p.HK)(t)){let r=(0,p.sJ)(t);if(r&&"model/gltf-binary"!==r.mediaType)try{let n=JSON.parse(r.isBase64?atob(r.data):r.data);return new C(e,t,n)}catch{}let n=(0,p.AH)(t);if(C._isGLBData(n))return this._fromGLBData(e,t,n)}if(G.test(t)||"gltf"===r?.expectedType){let n=await e.loadJSON(t,r);return new C(e,t,n)}let n=await e.loadBinary(t,r);if(C._isGLBData(n))return this._fromGLBData(e,t,n);if(P.test(t)||"glb"===r?.expectedType)throw new f.Z("gltf-loader-invalid-glb","This is not a valid glb file.");let o=await e.loadJSON(t,r);return new C(e,t,o)}static _isGLBData(e){if(null==e)return!1;let t=new _(e);return t.remainingBytes()>=4&&t.readUint32()===v.MAGIC}static async _fromGLBData(e,t,r){let n=await C._parseGLBData(r);return new C(e,t,n.json,n.binaryData)}static async _parseGLBData(e){let t=new _(e);if(12>t.remainingBytes())throw new f.Z("gltf-loader-error","glb binary data is insufficiently large.");let r=t.readUint32(),n=t.readUint32(),o=t.readUint32();if(r!==v.MAGIC)throw new f.Z("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<o)throw new f.Z("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==n)throw new f.Z("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,i,u=0;for(;t.remainingBytes()>=8;){let e=t.readUint32(),r=t.readUint32();if(0===u){if(r!==v.CHUNK_TYPE_JSON)throw new f.Z("gltf-loader-error","First glb chunk must be JSON.");if(e<0)throw new f.Z("gltf-loader-error","No JSON data found.");a=await (0,R.i$)(t.readUint8Array(e))}else if(1===u){if(r!==v.CHUNK_TYPE_BIN)throw new f.Z("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");i=t.readUint8Array(e)}else s.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");u+=1}if(!a)throw new f.Z("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:i}}async getBuffer(e,t){let r=this.json.buffers[e];if(null==r.uri){if(null==this._glbBuffer)throw new f.Z("gltf-loader-error","glb buffer not present");return this._glbBuffer}let n=await this._getBufferLoader(e,t);if(n.byteLength!==r.byteLength)throw new f.Z("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,t){let r=this._bufferLoaders.get(e);if(r)return r;let n=this.json.buffers[e].uri,o=this._context.loadBinary(this._resolveUri(n),t).then(e=>new Uint8Array(e));return this._bufferLoaders.set(e,o),o}async getAccessor(e,t){if(!this.json.accessors)throw new f.Z("gltf-loader-unsupported-feature","Accessors missing.");let r=this.json.accessors[e];if(null==r?.bufferView)throw new f.Z("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(r.type in[a.MAT2,a.MAT3,a.MAT4])throw new f.Z("gltf-loader-unsupported-feature",`AttributeType ${r.type} is not supported`);let n=this.json.bufferViews[r.bufferView],o=await this.getBuffer(n.buffer,t),i=U[r.type],s=B[r.componentType],u=i*s,l=n.byteStride||u;return{raw:o.buffer,byteStride:l,byteOffset:o.byteOffset+(n.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===u,componentCount:i,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return;let r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case l.g.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case l.g.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case l.g.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case l.g.UNSIGNED_BYTE:return(0,y.m)(F(w.D_,r));case l.g.UNSIGNED_SHORT:return(0,y.m)(F(w.av,r));case l.g.UNSIGNED_INT:return(0,y.m)(F(w.Nu,r))}}async getPositionData(e,t){if(null==e.attributes.POSITION)throw new f.Z("gltf-loader-unsupported-feature","No POSITION vertex data found.");let r=await this.getAccessor(e.attributes.POSITION,t);if(r.componentType!==l.g.FLOAT)throw new f.Z("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+l.g[r.componentType]);if(3!==r.componentCount)throw new f.Z("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return F(w.ct,r)}async getNormalData(e,t){if(null==e.attributes.NORMAL)throw new f.Z("gltf-loader-error","No NORMAL vertex data found.");let r=await this.getAccessor(e.attributes.NORMAL,t);if(r.componentType!==l.g.FLOAT)throw new f.Z("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+l.g[r.componentType]);if(3!==r.componentCount)throw new f.Z("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return F(w.ct,r)}async getTangentData(e,t){if(null==e.attributes.TANGENT)throw new f.Z("gltf-loader-error","No TANGENT vertex data found.");let r=await this.getAccessor(e.attributes.TANGENT,t);if(r.componentType!==l.g.FLOAT)throw new f.Z("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+l.g[r.componentType]);if(4!==r.componentCount)throw new f.Z("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed());return new w.ek(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){if(null==e.attributes.TEXCOORD_0)throw new f.Z("gltf-loader-error","No TEXCOORD_0 vertex data found.");let r=await this.getAccessor(e.attributes.TEXCOORD_0,t);if(2!==r.componentCount)throw new f.Z("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed());if(r.componentType===l.g.FLOAT)return F(w.Eu,r);if(!r.normalized)throw new f.Z("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return function(e){switch(e.componentType){case l.g.BYTE:return new w.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case l.g.UNSIGNED_BYTE:return new w.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case l.g.SHORT:return new w.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case l.g.UNSIGNED_SHORT:return new w.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case l.g.UNSIGNED_INT:return new w.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case l.g.FLOAT:return new w.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}(r)}async getVertexColors(e,t){if(null==e.attributes.COLOR_0)throw new f.Z("gltf-loader-error","No COLOR_0 vertex data found.");let r=await this.getAccessor(e.attributes.COLOR_0,t);if(4!==r.componentCount&&3!==r.componentCount)throw new f.Z("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed());if(4===r.componentCount){if(r.componentType===l.g.FLOAT)return F(w.ek,r);if(r.componentType===l.g.UNSIGNED_BYTE)return F(w.mc,r);if(r.componentType===l.g.UNSIGNED_SHORT)return F(w.v6,r)}else if(3===r.componentCount){if(r.componentType===l.g.FLOAT)return F(w.ct,r);if(r.componentType===l.g.UNSIGNED_BYTE)return F(w.ne,r);if(r.componentType===l.g.UNSIGNED_SHORT)return F(w.mw,r)}throw new f.Z("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+l.g[r.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=e.material?this._materialCache.get(e.material):void 0;if(!n){let o=null!=e.material?N(this.json.materials[e.material]):N(),a=o.pbrMetallicRoughness,i=this.hasVertexColors(e),s=this.getTexture(a.baseColorTexture,t),u=this.getTexture(o.normalTexture,t),l=r?this.getTexture(o.occlusionTexture,t):void 0,f=r?this.getTexture(o.emissiveTexture,t):void 0,d=r?this.getTexture(a.metallicRoughnessTexture,t):void 0,c=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:a.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await s,normalTexture:await u,name:o.name,id:c,occlusionTexture:await l,emissiveTexture:await f,emissiveFactor:o.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:await d,hasVertexColors:i,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode,colorTextureTransform:a?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:o.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:o.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:o.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:a?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:o.extras.ESRI_receiveAmbientOcclusion,receiveShadows:o.extras.ESRI_receiveShadows}}return n}async getTexture(e,t){if(!e)return;if(0!==(e.texCoord||0))throw new f.Z("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");let r=e.index,n=this.json.textures[r],o=A(null!=n.sampler?this.json.samplers[n.sampler]:{}),a=D(n),i=this.json.images[a],s=await this._loadTextureImageData(r,n,t);return(0,d.s1)(this._textureCache,r,()=>{let e,t;let n=e=>{throw new f.Z("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${e}`)};return{data:s,wrapS:33071===(e=o.wrapS)||33648===e||10497===e?o.wrapS:n(o.wrapS),wrapT:33071===(t=o.wrapT)||33648===t||10497===t?o.wrapT:n(o.wrapT),minFilter:o.minFilter,name:i.name,id:r}})}getNodeTransform(e){if(void 0===e)return M;let t=this._nodeTransformCache.get(e);if(!t){let r=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,h.Jp)((0,u.Ue)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,u.d9)(r),n.translation&&(0,h.Iu)(t,t,n.translation),n.rotation&&(L[3]=(0,g.Bh)(L,n.rotation),(0,h.U1)(t,t,L[3],L)),n.scale&&(0,h.bA)(t,t,n.scale)):t=(0,u.d9)(r),this._nodeTransformCache.set(e,t)}return t}_resolveUri(e){return(0,p.hF)(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){let e=m.G.parse(this.json.asset.version,"glTF");I.validate(e)}_checkRequiredExtensionsSupported(){let e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(e=>this._supportedExtensions.includes(e)))throw new f.Z("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(e=>{this._nodeParentMap.set(e,t)})})}async _loadTextureImageData(e,t,r){let n=this._textureLoaders.get(e);if(n)return n;let o=this._createTextureLoader(t,r);return this._textureLoaders.set(e,o),o}async _createTextureLoader(e,t){let r=D(e),n=this.json.images[r];if(n.uri){if(n.uri.endsWith(".ktx2")){let e=await this._context.loadBinary(this._resolveUri(n.uri),t);return new R.NM(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(n.uri),t)}if(null==n.bufferView)throw new f.Z("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new f.Z("gltf-loader-unsupported-feature","Image mimeType must be defined.");let o=this.json.bufferViews[n.bufferView],a=await this.getBuffer(o.buffer,t);if(null!=o.byteStride)throw new f.Z("gltf-loader-unsupported-feature","byteStride not supported for image buffer");let i=a.byteOffset+(o.byteOffset||0);return(0,R.Ml)(new Uint8Array(a.buffer,i,o.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;let e=await (0,c.OT)(Array.from(this._bufferLoaders.values())),t=await (0,c.OT)(Array.from(this._textureLoaders.values()));return e.reduce((e,t)=>e+(t?.byteLength??0),0)+t.reduce((e,t)=>e+(t?(0,R.$A)(t)?t.data.byteLength:t.width*t.height*4:0),0)}}let M=(0,h.aC)((0,u.Ue)(),Math.PI/2),I=new m.G(2,0,"glTF"),L=(0,T.Ue)(),U={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},B={[l.g.BYTE]:1,[l.g.UNSIGNED_BYTE]:1,[l.g.SHORT]:2,[l.g.UNSIGNED_SHORT]:2,[l.g.HALF_FLOAT]:2,[l.g.FLOAT]:4,[l.g.INT]:4,[l.g.UNSIGNED_INT]:4};function F(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}function D(e){if(null!=e.extensions?.KHR_texture_basisu)return e.extensions.KHR_texture_basisu.source;if(null!==e.source)return e.source;throw new f.Z("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}let G=/\.gltf$/i,P=/\.glb$/i,Z=0;async function k(e,t,r={},n=!0){let o=await C.load(e,t,r),a="gltf_"+Z++,i={lods:[],materials:new Map,textures:new Map,meta:function(e){let t=e.json,r=null;return t.nodes.forEach(e=>{let t=e.extras;null!=t&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)}),r}(o)},f=!(!o.json.asset.extras||"symbolResource"!==o.json.asset.extras.ESRI_type),d=o.json.asset.extras?.ESRI_webstyleSymbol?.webstyle,c=new Map;for(let e of(await j(o,async(e,t,f,d)=>{let p=c.get(f)??0;c.set(f,p+1);let m=void 0!==e.mode?e.mode:l.MX.TRIANGLES,h=m===l.MX.TRIANGLES||m===l.MX.TRIANGLE_STRIP||m===l.MX.TRIANGLE_FAN?m:null;if(null==h)return void s.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+l.MX[m]+"). Skipping primitive.");if(!o.hasPositions(e))return void s.Z.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");let g=o.getPositionData(e,r),T=o.getMaterial(e,r,n),w=o.hasNormals(e)?o.getNormalData(e,r):null,y=o.hasTangents(e)?o.getTangentData(e,r):null,_=o.hasTextureCoordinates(e)?o.getTextureCoordinates(e,r):null,b=o.hasVertexColors(e)?o.getVertexColors(e,r):null,x=o.getIndexData(e,r),O={name:d,transform:(0,u.d9)(t),attributes:{position:await g,normal:w?await w:null,texCoord0:_?await _:null,color:b?await b:null,tangent:y?await y:null},indices:await x,primitiveType:h,material:function(e,t,r){let n=t=>{let n=`${r}_tex_${t&&t.id}${t?.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){let r=function(e,t={}){return{data:e,parameters:{wrap:{s:l.e8.REPEAT,t:l.e8.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:V.has(t.minFilter),noUnpackFlip:!0});e.textures.set(n,r)}return n},o=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(o)){let r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor,receiveShadows:t.receiveShadows,receiveAmbientOcclustion:t.receiveAmbientOcclusion});e.materials.set(o,r)}return o}(i,await T,a)},S=null;null!=i.meta?.ESRI_lod&&"screenSpaceRadius"===i.meta.ESRI_lod.metric&&(S=i.meta.ESRI_lod.thresholds[f]),i.lods[f]=i.lods[f]||{parts:[],name:d,lodThreshold:S},i.lods[f].parts[p]=O}),i.lods))e.parts=e.parts.filter(e=>!!e);let p=await o.getLoadedBuffersSize();return{model:i,meta:{isEsriSymbolResource:f,uri:o.uri,ESRI_webstyle:d},customMeta:{},size:p}}async function j(e,t){let r=e.json,n=r.scenes[r.scene||0].nodes,o=n.length>1,a=[];for(let e of n){let t=r.nodes[e];a.push(i(e,0)),t.extensions?.MSFT_lod&&Array.isArray(t.extensions.MSFT_lod.ids)&&!o&&t.extensions.MSFT_lod.ids.forEach((e,t)=>i(e,t+1))}async function i(n,o){let u=r.nodes[n],l=e.getNodeTransform(n);if(null!=u.weights&&s.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=u.mesh){let e=r.meshes[u.mesh];for(let r of e.primitives)a.push(t(r,l,o,e.name))}for(let e of u.children||[])a.push(i(e,o))}await Promise.all(a)}let V=new Set([l.cw.LINEAR_MIPMAP_LINEAR,l.cw.LINEAR_MIPMAP_NEAREST])},73295:function(e,t,r){var n,o,a,i,s,u,l,f,d,c,p,m,h,g,T,w,y,_;r.d(t,{Gv:function(){return o},Iq:function(){return f},JJ:function(){return l},Rw:function(){return i},Ti:function(){return d},V_:function(){return u},Vr:function(){return n},Xx:function(){return a},hU:function(){return s}}),(c=n||(n={}))[c.None=0]="None",c[c.Front=1]="Front",c[c.Back=2]="Back",c[c.COUNT=3]="COUNT",(p=o||(o={}))[p.Less=0]="Less",p[p.Lequal=1]="Lequal",p[p.COUNT=2]="COUNT",(m=a||(a={}))[m.BACKGROUND=0]="BACKGROUND",m[m.UPDATE=1]="UPDATE",(h=i||(i={}))[h.NOT_LOADED=0]="NOT_LOADED",h[h.LOADING=1]="LOADING",h[h.LOADED=2]="LOADED",(g=s||(s={}))[g.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",g[g.OutlineVisualElementMask=2]="OutlineVisualElementMask",(T=u||(u={}))[T.Highlight=0]="Highlight",T[T.MaskOccludee=1]="MaskOccludee",T[T.COUNT=2]="COUNT",(w=l||(l={}))[w.Blend=0]="Blend",w[w.Opaque=1]="Opaque",w[w.Mask=2]="Mask",w[w.MaskBlend=3]="MaskBlend",w[w.COUNT=4]="COUNT",(y=f||(f={}))[y.OFF=0]="OFF",y[y.ON=1]="ON",(_=d||(d={})).DDS_ENCODING="image/vnd-ms.dds",_.KTX2_ENCODING="image/ktx2",_.BASIS_ENCODING="image/x.basis"},47666:function(e,t,r){r.d(t,{j:function(){return n}});let n=2.1}}]);