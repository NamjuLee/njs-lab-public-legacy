"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40801],{40801:function(e,t,r){r.r(t),r.d(t,{toBinaryGLTF:function(){return $}});var s,i,_,n,E,a,T,o,A,R,u,l,N,f,h,c,O=r(31124);(s=A||(A={}))[s.JSON=1313821514]="JSON",s[s.BIN=5130562]="BIN";class S{constructor(e,t){if(!e)throw Error("GLB requires a JSON gltf chunk");this._length=S.HEADER_SIZE,this._length+=S.CHUNK_HEADER_SIZE;let r=(new TextEncoder).encode(e).buffer;if(this._length+=I(r.byteLength,4),t&&(this._length+=S.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();let s=this._writeChunk(r,12,A.JSON,32);t&&this._writeChunk(t,s,A.BIN)}_writeHeader(){this._outView.setUint32(0,S.MAGIC,!0),this._outView.setUint32(4,S.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,r,s=0){let i=I(e.byteLength,4);for(this._outView.setUint32(t,i,!0),this._outView.setUint32(t+=4,r,!0),function(e,t,r,s,i){new Uint8Array(e,r,i).set(new Uint8Array(t,0,i),0)}(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)s&&this._outView.setUint8(t,s),t++;return t}}function I(e,t){return t*Math.ceil(e/t)}S.HEADER_SIZE=12,S.CHUNK_HEADER_SIZE=8,S.MAGIC=1179937895,S.VERSION=2;var C=r(65223),d=r(59528),L=r(13507),M=r(41174),D=r(57079),U=r(60964),B=r(82955),g=r(48398),G=r(45603);(i=R||(R={}))[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB",(_=u||(u={}))[_.External=0]="External",_[_.DataURI=1]="DataURI",_[_.GLB=2]="GLB",(n=l||(l={}))[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",(E=N||(N={})).SCALAR="SCALAR",E.VEC2="VEC2",E.VEC3="VEC3",E.VEC4="VEC4",E.MAT2="MAT2",E.MAT3="MAT3",E.MAT4="MAT4",(a=f||(f={}))[a.POINTS=0]="POINTS",a[a.LINES=1]="LINES",a[a.LINE_LOOP=2]="LINE_LOOP",a[a.LINE_STRIP=3]="LINE_STRIP",a[a.TRIANGLES=4]="TRIANGLES",a[a.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",a[a.TRIANGLE_FAN=6]="TRIANGLE_FAN",(T=h||(h={})).OPAQUE="OPAQUE",T.MASK="MASK",T.BLEND="BLEND",(o=c||(c={}))[o.NoColor=0]="NoColor",o[o.FaceColor=1]="FaceColor",o[o.VertexColor=2]="VertexColor";var P=r(71193);class m{constructor(e,t,r,s,i){this._buffer=e,this._componentType=r,this._dataType=s,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:i};let _=this._getElementSize();_>=4&&i!==l.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=_),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){let t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){let r=t%this._numComponentsForDataType,s=this._accessorMin[r];this._accessorMin[r]="number"!=typeof s?e:Math.min(s,e);let i=this._accessorMax[r];this._accessorMax[r]="number"!=typeof i?e:Math.max(i,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){return 4*Math.ceil(this.dataSize/4)}getByteOffset(){if(!this._isFinalized)throw Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case P.g.BYTE:return new Int8Array(e,t);case P.g.FLOAT:return new Float32Array(e,t);case P.g.SHORT:return new Int16Array(e,t);case P.g.UNSIGNED_BYTE:return new Uint8Array(e,t);case P.g.UNSIGNED_INT:return new Uint32Array(e,t);case P.g.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then(e=>{let t=new Uint8Array(e);for(let e=0;e<t.length;++e)this._data.push(t[e]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;let t=this._numComponentsForDataType;this._accessorMin=Array(t),this._accessorMax=Array(t)}endAccessor(){if(this._accessorIndex<0)throw Error("An accessor was not started, but was attempted to be ended");let e=this._getElementSize(),t=this._numComponentsForDataType,r=(this._data.length-this._accessorIndex)/t;if(r%1)throw Error("An accessor was ended with missing component values");for(let e=0;e<this._accessorMin.length;++e)"number"!=typeof this._accessorMin[e]&&(this._accessorMin[e]=0),"number"!=typeof this._accessorMax[e]&&(this._accessorMax[e]=0);let s={byteOffset:this._accessorIndex/t*e,componentType:this._componentType,count:r,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case P.g.UNSIGNED_BYTE:case P.g.UNSIGNED_SHORT:s.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,s}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(e=>this._finalizedPromiseResolve=e)}async finalize(){let e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),await Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case P.g.BYTE:case P.g.UNSIGNED_BYTE:return 1;case P.g.SHORT:case P.g.UNSIGNED_SHORT:return 2;case P.g.UNSIGNED_INT:case P.g.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case N.SCALAR:return 1;case N.VEC2:return 2;case N.VEC3:return 3;case N.VEC4:case N.MAT2:return 4;case N.MAT3:return 9;case N.MAT4:return 16}}}class p{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;let t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,r){if(this._finalizePromise)throw Error("Cannot add buffer view after fiinalizing buffer");let s=new m(this,this._gltf,e,t,r);return this._bufferViews.push(s),s}getByteOffset(e){let t=0;for(let r of this._bufferViews){if(r===e)return t;t+=r.byteSize}throw Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){let t=[];for(let r of this._bufferViews){if(e&&r===e)break;t.push(r.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw Error("Cannot get ArrayBuffer from Buffer before it is finalized");let e=new ArrayBuffer(this._getTotalSize()),t=0;for(let r of this._bufferViews)r.writeOutToBuffer(e,t),t+=r.byteSize;return e}finalize(){if(this._finalizePromise)throw Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;let e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e}),this._gltf.extras.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(let t of this._bufferViews)e+=t.byteSize;return e}}let F=(0,B.Ue)(),b=(0,B.Ue)(),w=(0,B.Ue)(),H=(0,B.Ue)();var x=r(93904),y=r(10582);let V=()=>C.Z.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");class Y{constructor(e,t){this.options=t,this._materialMap=[],this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{output:t.output,binChunkBuffer:null,promises:[]}},this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;let t=this.gltf.extras,r=t.output.buffer===R.GLB||t.output.image===u.GLB;r&&(t.binChunkBuffer=new p(this.gltf)),e.forEachScene(e=>{this._addScene(e)}),r&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);let t={};e.name&&(t.name=e.name),e.forEachNode(e=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(e))}),this.gltf.scenes.push(t)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);let t={};e.name&&(t.name=e.name);let r=e.translation;(0,U.e)(r,B.AG)||(t.translation=(0,B.d9)(r));let s=e.rotation;(0,M.I6)(s,D.Wd)||(t.rotation=(0,D.d9)(s));let i=e.scale;(0,U.e)(i,B.hq)||(t.scale=(0,B.d9)(i));let _=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){let r=this._createMeshes(e.mesh),s=[_];if(1===r.length)this._addMesh(t,r[0]);else for(let e of r){let t={};this._addMesh(t,e),s.push(this.gltf.nodes.length),this.gltf.nodes.push(t)}return s}return e.forEachNode(e=>{t.children||(t.children=[]),t.children.push(...this._addNodes(e))}),[_]}_addMesh(e,t){this.gltf.meshes??=[];let r=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=r}_createMeshes(e){let t,r,s,i,_,n,E,a,T,o;let A=this.gltf.extras,u=A.output.buffer===R.GLB;t=u?A.binChunkBuffer:new p(this.gltf);let f=this.options.origin,h=e.vertexSpace.clone();h.origin=[f.x,f.y,f.z??0];let c=(0,G.qk)({vertexAttributes:e.vertexAttributes,vertexSpace:e.vertexSpace,transform:this.options?.ignoreLocalTransform?null:e.transform,spatialReference:e.spatialReference},h,{targetUnit:"meters"});if(!c)return[];(function(e,t){if(e.components)for(let r of e.components)r.faces&&"smooth"===r.shading&&function(e,t){null==t.normal&&(t.normal=new Float32Array(t.position.length));let r=e.faces,{position:s,normal:i}=t,_=r.length/3;for(let e=0;e<_;++e){let t=3*r[3*e],_=3*r[3*e+1],n=3*r[3*e+2],E=(0,U.s)(F,s[t],s[t+1],s[t+2]),a=(0,U.s)(b,s[_],s[_+1],s[_+2]),T=(0,U.s)(w,s[n],s[n+1],s[n+2]),o=(0,U.f)(a,a,E),A=(0,U.f)(T,T,E),R=(0,U.b)(o,o,A);i[t]+=R[0],i[t+1]+=R[1],i[t+2]+=R[2],i[_]+=R[0],i[_+1]+=R[1],i[_+2]+=R[2],i[n]+=R[0],i[n+1]+=R[1],i[n+2]+=R[2]}for(let e=0;e<i.length;e+=3)(0,U.s)(H,i[e],i[e+1],i[e+2]),(0,U.n)(H,H),i[e]=H[0],i[e+1]=H[1],i[e+2]=H[2]}(r,t)})(e,c),function({position:e,normal:t,tangent:r}){X(e,3),X(t,3),X(r,4)}(c);let{position:O,normal:S,tangent:I}=c,{uv:C,color:d}=e.vertexAttributes,L=t.addBufferView(P.g.FLOAT,N.VEC3,l.ARRAY_BUFFER);S&&(r=t.addBufferView(P.g.FLOAT,N.VEC3,l.ARRAY_BUFFER)),C&&(s=t.addBufferView(P.g.FLOAT,N.VEC2,l.ARRAY_BUFFER)),I&&(i=t.addBufferView(P.g.FLOAT,N.VEC4,l.ARRAY_BUFFER)),d&&(_=t.addBufferView(P.g.UNSIGNED_BYTE,N.VEC4,l.ARRAY_BUFFER)),L.startAccessor("POSITION"),r&&r.startAccessor("NORMAL"),s&&s.startAccessor("TEXCOORD_0"),i&&i.startAccessor("TANGENT"),_&&_.startAccessor("COLOR_0");let M=c.position.length/3;for(let e=0;e<M;++e)L.push(O[3*e]),L.push(O[3*e+1]),L.push(O[3*e+2]),r&&null!=S&&(r.push(S[3*e]),r.push(S[3*e+1]),r.push(S[3*e+2])),s&&null!=C&&(s.push(C[2*e]),s.push(C[2*e+1])),i&&null!=I&&(i.push(I[4*e]),i.push(I[4*e+1]),i.push(I[4*e+2]),i.push(I[4*e+3])),_&&null!=d&&(_.push(d[4*e]),_.push(d[4*e+1]),_.push(d[4*e+2]),_.push(d[4*e+3]));let D=L.endAccessor(),B=this._addAccessor(L.index,D);if(r){let e=r.endAccessor();n=this._addAccessor(r.index,e)}if(s){let e=s.endAccessor();E=this._addAccessor(s.index,e)}if(i){let e=i.endAccessor();a=this._addAccessor(i.index,e)}if(_){let e=_.endAccessor();T=this._addAccessor(_.index,e)}let g=[];return e.components&&e.components.length>0&&e.components[0].faces?(o=t.addBufferView(P.g.UNSIGNED_INT,N.SCALAR,l.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(o,e.components,g,B,n,E,a,T)):this._addMeshVertexNonIndexed(e.components,g,B,n,E,a,T),L.finalize(),r&&r.finalize(),s&&s.finalize(),i&&i.finalize(),o&&o.finalize(),_&&_.finalize(),u||t.finalize(),g}_addMaterial(e){if(null===e)return;let t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);let r={};switch(e.alphaMode){case"mask":r.alphaMode=h.MASK;break;case"auto":case"blend":r.alphaMode=h.BLEND}.5!==e.alphaCutoff&&(r.alphaCutoff=e.alphaCutoff),e.doubleSided&&(r.doubleSided=e.doubleSided),r.pbrMetallicRoughness={};let s=e=>e**2.1,i=e=>{let t=e.toRgba();return t[0]=s(t[0]/255),t[1]=s(t[1]/255),t[2]=s(t[2]/255),t};if(null!=e.color&&(r.pbrMetallicRoughness.baseColorFactor=i(e.color)),null!=e.colorTexture&&(r.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),null!=e.normalTexture&&(r.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof g.Z){if(null!=e.emissiveTexture&&(r.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),null!=e.emissiveColor){let t=i(e.emissiveColor);r.emissiveFactor=[t[0],t[1],t[2]]}null!=e.occlusionTexture&&(r.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),null!=e.metallicRoughnessTexture&&(r.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),r.pbrMetallicRoughness.metallicFactor=e.metallic,r.pbrMetallicRoughness.roughnessFactor=e.roughness}else r.pbrMetallicRoughness.metallicFactor=1,r.pbrMetallicRoughness.roughnessFactor=1,V().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");let _=this.gltf.materials.length;return this.gltf.materials.push(r),this._materialMap.push(e),_}_createTextureInfo(e,t){let r={index:this._addTexture(e)};return t&&(r.extensions||(r.extensions={}),r.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:(0,L.Vl)(t.rotation)}),r}_addTexture(e){let t=this.gltf.textures??[];return this.gltf.textures=t,(0,d.s1)(this._textureMap,e,()=>{let r={sampler:this._addSampler(e),source:this._addImage(e)},s=t.length;return t.push(r),s})}_addImage(e){let t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);let r={};if(e.url)r.uri=e.url;else{let t=e.data;r.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;let s=this.gltf.extras;switch(s.output.image){case u.GLB:{let e=s.binChunkBuffer.addBufferView(P.g.UNSIGNED_BYTE,N.SCALAR);if((0,y.$A)(t))null!=t.data&&e.writeOutToBuffer(t.data,0);else{let i=(0,x.lW)(t,this.options.signal).then(({data:e,type:t})=>(r.mimeType=t,e));s.promises.push(e.writeAsync(i).then(()=>{e.finalize()}))}r.bufferView=e.index;break}case u.DataURI:if((0,y.$A)(t)){V().warnOnce("Image export for basis compressed textures not available.");break}r.uri=(0,x.$e)(t);break;default:if((0,y.$A)(t)){V().warnOnce("Image export for basis compressed textures not available.");break}s.promises.push((0,x.lW)(t,this.options.signal).then(({data:e,type:t})=>{r.uri=e,r.mimeType=t}))}}let s=this.gltf.images.length;return this.gltf.images.push(r),this._imageMap.set(e,s),s}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=P.e8.REPEAT,r=P.e8.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=P.e8.CLAMP_TO_EDGE,r=P.e8.CLAMP_TO_EDGE;break;case"mirror":t=P.e8.MIRRORED_REPEAT,r=P.e8.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":r=P.e8.CLAMP_TO_EDGE;break;case"mirror":r=P.e8.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=P.e8.CLAMP_TO_EDGE;break;case"mirror":t=P.e8.MIRRORED_REPEAT}}let s={wrapS:t,wrapT:r};for(let e=0;e<this.gltf.samplers.length;++e)if(JSON.stringify(s)===JSON.stringify(this.gltf.samplers[e]))return e;let i=this.gltf.samplers.length;return this.gltf.samplers.push(s),i}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);let r={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(r.normalized=!0);let s=this.gltf.accessors.length;return this.gltf.accessors.push(r),s}_addMeshVertexIndexed(e,t,r,s,i,_,n,E){let a=new Map;for(let T of t){e.startAccessor("INDICES");for(let t=0;t<T.faces.length;++t)e.push(T.faces[t]);let t=e.endAccessor(),o={attributes:{POSITION:s},indices:this._addAccessor(e.index,t),material:this._addMaterial(T.material)};i&&"flat"!==T.shading&&(o.attributes.NORMAL=i),_&&(o.attributes.TEXCOORD_0=_),n&&"flat"!==T.shading&&(o.attributes.TANGENT=n),E&&(o.attributes.COLOR_0=E);let A=a.get(T.name);if(A)A.primitives.push(o);else{let e={name:T.name,primitives:[o]};a.set(T.name,e),r.push(e)}}}_addMeshVertexNonIndexed(e,t,r,s,i,_,n){let E={primitives:[]};t.push(E);let a={attributes:{POSITION:r}};s&&(a.attributes.NORMAL=s),i&&(a.attributes.TEXCOORD_0=i),_&&(a.attributes.TANGENT=_),n&&(a.attributes.COLOR_0=n),e&&(a.material=this._addMaterial(e[0].material)),E.primitives.push(a)}}function X(e,t){if(null!=e)for(let r=1,s=2;r<e.length;r+=t,s+=t){let t=e[r],i=e[s];e[r]=i,e[s]=-t}}var z=r(78628);class v{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw Error("Scene already added");this._scenes.push(e)}removeScene(e){(0,z.Od)(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class k{constructor(e){this.mesh=e,this.name="",this.translation=(0,B.Ue)(),this.rotation=(0,D.Ue)(),this.scale=(0,B.d9)(B.hq),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){(0,M.Su)(this.rotation,e[0],e[1],e[2])}}let W="model.glb";async function K(e,t){let r=new Y(e,t).gltf,s=r.extras.promises,i=1,_=1,n=null;await Promise.allSettled(s),(0,O.k_)(t.signal);let E=t.jsonSpacing??4,a=new Map,T=JSON.stringify(r,(e,r)=>{if("extras"!==e){if(r instanceof ArrayBuffer){if((0,x.$7)(r))switch(t.output?.image){case u.DataURI:case u.GLB:break;case u.External:default:{let e=`img${_}.png`;return _++,a.set(e,r),e}}switch(t.output?.buffer){case R.DataURI:return(0,x.N5)(r);case R.GLB:if(n)throw Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(n=r);case R.External:default:{let e=`data${i}.bin`;return i++,a.set(e,r),e}}}return r}},E);return t.output?.buffer===R.GLB||t.output?.image===u.GLB?a.set(W,new S(T,n).buffer):a.set("model.gltf",T),a}async function Z(e,t){let r=(await K(e,{output:{buffer:R.GLB,image:u.GLB},jsonSpacing:0,...t})).get(W);if(!(r&&r instanceof ArrayBuffer))throw Error("failed to export to glb");return r}class j{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}async function $(e,t){let r=new v,s=new j;return r.addScene(s),s.addNode(new k(e)),await Z(r,{origin:e.origin,...t})}},93904:function(e,t,r){r.d(t,{$7:function(){return o},$e:function(){return n},N5:function(){return T},lW:function(){return E}}),r(37180);var s=r(94605),i=r(31124),_=r(72659);function n(e){let t=a(e);return null!=t?t.toDataURL():""}async function E(e,t){let r=a(e);if(null==r)throw new s.Z("imageToArrayBuffer","Unsupported image type");let n=function(e){if(!(e instanceof HTMLImageElement))return"image/png";let t=e.src;if((0,_.HK)(t)){let e=(0,_.sJ)(t);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),E=await new Promise(e=>r.toBlob(e,n));if((0,i.k_)(t),!E)throw new s.Z("imageToArrayBuffer","Failed to encode image");let T=await E.arrayBuffer();return(0,i.k_)(t),{data:T,type:n}}function a(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;let t=document.createElement("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");return e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),t}function T(e){let t=[],r=new Uint8Array(e);for(let e=0;e<r.length;e++)t.push(String.fromCharCode(r[e]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function o(e){if(e.byteLength<8)return!1;let t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}},10582:function(e,t,r){r.d(t,{$A:function(){return n},Ml:function(){return a},NM:function(){return _},i$:function(){return E}});var s=r(37180),i=r(73295);class _{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=i.Ti.KTX2_ENCODING}}function n(e){return"encoded-mesh-texture"===e?.type}async function E(e){let t=new Blob([e]);return JSON.parse(await t.text())}async function a(e,t){if(t===i.Ti.KTX2_ENCODING)return new _(e);let r=new Blob([e],{type:t}),n=URL.createObjectURL(r),E=new Image;if((0,s.Z)("esri-iPhone"))return new Promise((e,t)=>{let r=()=>{i(),e(E)},s=e=>{i(),t(e)},i=()=>{URL.revokeObjectURL(n),E.removeEventListener("load",r),E.removeEventListener("error",s)};E.addEventListener("load",r),E.addEventListener("error",s),E.src=n});try{E.src=n,await E.decode()}catch(e){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(n),E}},73295:function(e,t,r){var s,i,_,n,E,a,T,o,A,R,u,l,N,f,h,c,O,S;r.d(t,{Gv:function(){return i},Iq:function(){return o},JJ:function(){return T},Rw:function(){return n},Ti:function(){return A},V_:function(){return a},Vr:function(){return s},Xx:function(){return _},hU:function(){return E}}),(R=s||(s={}))[R.None=0]="None",R[R.Front=1]="Front",R[R.Back=2]="Back",R[R.COUNT=3]="COUNT",(u=i||(i={}))[u.Less=0]="Less",u[u.Lequal=1]="Lequal",u[u.COUNT=2]="COUNT",(l=_||(_={}))[l.BACKGROUND=0]="BACKGROUND",l[l.UPDATE=1]="UPDATE",(N=n||(n={}))[N.NOT_LOADED=0]="NOT_LOADED",N[N.LOADING=1]="LOADING",N[N.LOADED=2]="LOADED",(f=E||(E={}))[f.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",f[f.OutlineVisualElementMask=2]="OutlineVisualElementMask",(h=a||(a={}))[h.Highlight=0]="Highlight",h[h.MaskOccludee=1]="MaskOccludee",h[h.COUNT=2]="COUNT",(c=T||(T={}))[c.Blend=0]="Blend",c[c.Opaque=1]="Opaque",c[c.Mask=2]="Mask",c[c.MaskBlend=3]="MaskBlend",c[c.COUNT=4]="COUNT",(O=o||(o={}))[O.OFF=0]="OFF",O[O.ON=1]="ON",(S=A||(A={})).DDS_ENCODING="image/vnd-ms.dds",S.KTX2_ENCODING="image/ktx2",S.BASIS_ENCODING="image/x.basis"},71193:function(e,t,r){var s,i,_,n,E,a,T,o,A,R,u,l,N,f,h,c,O,S,I,C,d,L,M,D,U,B,g,G,P,m,p,F,b,w,H,x,y,V,Y,X,z,v,k,W,K,Z,j,$,J,q,Q,ee,et,er,es,ei,e_,en,eE,ea;r.d(t,{Br:function(){return c},Ho:function(){return I},LR:function(){return a},Lu:function(){return eo},MX:function(){return i},No:function(){return N},Se:function(){return U},Tg:function(){return O},V1:function(){return eT},V7:function(){return P},VI:function(){return f},VY:function(){return L},Wf:function(){return T},Xg:function(){return M},Y5:function(){return G},_g:function(){return d},cw:function(){return u},db:function(){return n},e8:function(){return l},g:function(){return o},l1:function(){return S},lP:function(){return h},lk:function(){return s},q_:function(){return D},qi:function(){return C},w0:function(){return E},wb:function(){return A},xS:function(){return R},zi:function(){return _}}),(p=s||(s={}))[p.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",p[p.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",p[p.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",(F=i||(i={}))[F.POINTS=0]="POINTS",F[F.LINES=1]="LINES",F[F.LINE_LOOP=2]="LINE_LOOP",F[F.LINE_STRIP=3]="LINE_STRIP",F[F.TRIANGLES=4]="TRIANGLES",F[F.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",F[F.TRIANGLE_FAN=6]="TRIANGLE_FAN",(b=_||(_={}))[b.ZERO=0]="ZERO",b[b.ONE=1]="ONE",b[b.SRC_COLOR=768]="SRC_COLOR",b[b.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",b[b.SRC_ALPHA=770]="SRC_ALPHA",b[b.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",b[b.DST_ALPHA=772]="DST_ALPHA",b[b.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",b[b.DST_COLOR=774]="DST_COLOR",b[b.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",b[b.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",b[b.CONSTANT_COLOR=32769]="CONSTANT_COLOR",b[b.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",b[b.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",b[b.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",(w=n||(n={}))[w.ADD=32774]="ADD",w[w.MIN=32775]="MIN",w[w.MAX=32776]="MAX",w[w.SUBTRACT=32778]="SUBTRACT",w[w.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT",(H=E||(E={}))[H.ARRAY_BUFFER=34962]="ARRAY_BUFFER",H[H.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",H[H.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",H[H.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",H[H.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",H[H.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",H[H.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",H[H.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER",(x=a||(a={}))[x.FRONT=1028]="FRONT",x[x.BACK=1029]="BACK",x[x.FRONT_AND_BACK=1032]="FRONT_AND_BACK",(y=T||(T={}))[y.CW=2304]="CW",y[y.CCW=2305]="CCW",(V=o||(o={}))[V.BYTE=5120]="BYTE",V[V.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",V[V.SHORT=5122]="SHORT",V[V.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",V[V.INT=5124]="INT",V[V.UNSIGNED_INT=5125]="UNSIGNED_INT",V[V.FLOAT=5126]="FLOAT",V[V.HALF_FLOAT=5131]="HALF_FLOAT",(Y=A||(A={}))[Y.NEVER=512]="NEVER",Y[Y.LESS=513]="LESS",Y[Y.EQUAL=514]="EQUAL",Y[Y.LEQUAL=515]="LEQUAL",Y[Y.GREATER=516]="GREATER",Y[Y.NOTEQUAL=517]="NOTEQUAL",Y[Y.GEQUAL=518]="GEQUAL",Y[Y.ALWAYS=519]="ALWAYS",(X=R||(R={}))[X.ZERO=0]="ZERO",X[X.KEEP=7680]="KEEP",X[X.REPLACE=7681]="REPLACE",X[X.INCR=7682]="INCR",X[X.DECR=7683]="DECR",X[X.INVERT=5386]="INVERT",X[X.INCR_WRAP=34055]="INCR_WRAP",X[X.DECR_WRAP=34056]="DECR_WRAP",(z=u||(u={}))[z.NEAREST=9728]="NEAREST",z[z.LINEAR=9729]="LINEAR",z[z.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",z[z.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",z[z.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",z[z.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",(v=l||(l={}))[v.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",v[v.REPEAT=10497]="REPEAT",v[v.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",(k=N||(N={}))[k.TEXTURE_2D=3553]="TEXTURE_2D",k[k.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",k[k.TEXTURE_3D=32879]="TEXTURE_3D",k[k.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",k[k.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",k[k.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",k[k.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",k[k.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",k[k.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",k[k.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",(W=f||(f={}))[W.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",W[W.DEPTH_STENCIL=34041]="DEPTH_STENCIL",W[W.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",W[W.ALPHA=6406]="ALPHA",W[W.RGB=6407]="RGB",W[W.RGBA=6408]="RGBA",W[W.LUMINANCE=6409]="LUMINANCE",W[W.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",W[W.RED=6403]="RED",W[W.RG=33319]="RG",W[W.RED_INTEGER=36244]="RED_INTEGER",W[W.RG_INTEGER=33320]="RG_INTEGER",W[W.RGB_INTEGER=36248]="RGB_INTEGER",W[W.RGBA_INTEGER=36249]="RGBA_INTEGER",(K=h||(h={}))[K.RGBA4=32854]="RGBA4",K[K.R16F=33325]="R16F",K[K.RG16F=33327]="RG16F",K[K.RGB32F=34837]="RGB32F",K[K.RGBA16F=34842]="RGBA16F",K[K.R32F=33326]="R32F",K[K.RG32F=33328]="RG32F",K[K.RGBA32F=34836]="RGBA32F",K[K.R11F_G11F_B10F=35898]="R11F_G11F_B10F",K[K.RGB8=32849]="RGB8",K[K.RGBA8=32856]="RGBA8",K[K.RGB5_A1=32855]="RGB5_A1",K[K.R8=33321]="R8",K[K.RG8=33323]="RG8",K[K.R8I=33329]="R8I",K[K.R8UI=33330]="R8UI",K[K.R16I=33331]="R16I",K[K.R16UI=33332]="R16UI",K[K.R32I=33333]="R32I",K[K.R32UI=33334]="R32UI",K[K.RG8I=33335]="RG8I",K[K.RG8UI=33336]="RG8UI",K[K.RG16I=33337]="RG16I",K[K.RG16UI=33338]="RG16UI",K[K.RG32I=33339]="RG32I",K[K.RG32UI=33340]="RG32UI",K[K.RGB16F=34843]="RGB16F",K[K.RGB9_E5=35901]="RGB9_E5",K[K.SRGB8=35905]="SRGB8",K[K.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",K[K.RGB565=36194]="RGB565",K[K.RGBA32UI=36208]="RGBA32UI",K[K.RGB32UI=36209]="RGB32UI",K[K.RGBA16UI=36214]="RGBA16UI",K[K.RGB16UI=36215]="RGB16UI",K[K.RGBA8UI=36220]="RGBA8UI",K[K.RGB8UI=36221]="RGB8UI",K[K.RGBA32I=36226]="RGBA32I",K[K.RGB32I=36227]="RGB32I",K[K.RGBA16I=36232]="RGBA16I",K[K.RGB16I=36233]="RGB16I",K[K.RGBA8I=36238]="RGBA8I",K[K.RGB8I=36239]="RGB8I",K[K.R8_SNORM=36756]="R8_SNORM",K[K.RG8_SNORM=36757]="RG8_SNORM",K[K.RGB8_SNORM=36758]="RGB8_SNORM",K[K.RGBA8_SNORM=36759]="RGBA8_SNORM",K[K.RGB10_A2=32857]="RGB10_A2",K[K.RGB10_A2UI=36975]="RGB10_A2UI",(Z=c||(c={}))[Z.FLOAT=5126]="FLOAT",Z[Z.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",Z[Z.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",Z[Z.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",Z[Z.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",Z[Z.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",Z[Z.BYTE=5120]="BYTE",Z[Z.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",Z[Z.SHORT=5122]="SHORT",Z[Z.UNSIGNED_INT=5125]="UNSIGNED_INT",Z[Z.INT=5124]="INT",Z[Z.HALF_FLOAT=5131]="HALF_FLOAT",Z[Z.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",Z[Z.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",Z[Z.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",Z[Z.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",(j=O||(O={}))[j.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",j[j.STENCIL_INDEX8=36168]="STENCIL_INDEX8",j[j.DEPTH_STENCIL=34041]="DEPTH_STENCIL",j[j.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",j[j.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",j[j.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",j[j.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8",($=S||(S={}))[$.STATIC_DRAW=35044]="STATIC_DRAW",$[$.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",$[$.STREAM_DRAW=35040]="STREAM_DRAW",$[$.STATIC_READ=35045]="STATIC_READ",$[$.DYNAMIC_READ=35049]="DYNAMIC_READ",$[$.STREAM_READ=35041]="STREAM_READ",$[$.STATIC_COPY=35046]="STATIC_COPY",$[$.DYNAMIC_COPY=35050]="DYNAMIC_COPY",$[$.STREAM_COPY=35042]="STREAM_COPY",(J=I||(I={}))[J.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",J[J.VERTEX_SHADER=35633]="VERTEX_SHADER",(q=C||(C={}))[q.FRAMEBUFFER=36160]="FRAMEBUFFER",q[q.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",q[q.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER";let eT=33984;(Q=d||(d={}))[Q.Texture=0]="Texture",Q[Q.BufferObject=1]="BufferObject",Q[Q.VertexArrayObject=2]="VertexArrayObject",Q[Q.Shader=3]="Shader",Q[Q.Program=4]="Program",Q[Q.FramebufferObject=5]="FramebufferObject",Q[Q.Renderbuffer=6]="Renderbuffer",Q[Q.TransformFeedback=7]="TransformFeedback",Q[Q.Sync=8]="Sync",Q[Q.UNCOUNTED=9]="UNCOUNTED",Q[Q.LinesOfCode=9]="LinesOfCode",Q[Q.Uniform=10]="Uniform",Q[Q.COUNT=11]="COUNT",(ee=L||(L={}))[ee.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",ee[ee.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",ee[ee.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",ee[ee.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",ee[ee.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",ee[ee.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",ee[ee.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",ee[ee.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",ee[ee.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",ee[ee.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",ee[ee.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",ee[ee.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",ee[ee.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",ee[ee.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",ee[ee.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",ee[ee.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15",(et=M||(M={}))[et.NONE=0]="NONE",et[et.BACK=1029]="BACK";let eo=33306;(er=D||(D={}))[er.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",er[er.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",er[er.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",er[er.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",er[er.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",er[er.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",er[er.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",er[er.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",er[er.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",er[er.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",er[er.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",er[er.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",er[er.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",er[er.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",(es=U||(U={}))[es.FLOAT=5126]="FLOAT",es[es.FLOAT_VEC2=35664]="FLOAT_VEC2",es[es.FLOAT_VEC3=35665]="FLOAT_VEC3",es[es.FLOAT_VEC4=35666]="FLOAT_VEC4",es[es.INT=5124]="INT",es[es.INT_VEC2=35667]="INT_VEC2",es[es.INT_VEC3=35668]="INT_VEC3",es[es.INT_VEC4=35669]="INT_VEC4",es[es.BOOL=35670]="BOOL",es[es.BOOL_VEC2=35671]="BOOL_VEC2",es[es.BOOL_VEC3=35672]="BOOL_VEC3",es[es.BOOL_VEC4=35673]="BOOL_VEC4",es[es.FLOAT_MAT2=35674]="FLOAT_MAT2",es[es.FLOAT_MAT3=35675]="FLOAT_MAT3",es[es.FLOAT_MAT4=35676]="FLOAT_MAT4",es[es.SAMPLER_2D=35678]="SAMPLER_2D",es[es.SAMPLER_CUBE=35680]="SAMPLER_CUBE",es[es.UNSIGNED_INT=5125]="UNSIGNED_INT",es[es.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",es[es.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",es[es.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",es[es.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",es[es.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",es[es.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",es[es.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",es[es.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",es[es.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",es[es.SAMPLER_3D=35679]="SAMPLER_3D",es[es.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",es[es.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",es[es.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",es[es.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",es[es.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",es[es.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",es[es.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",es[es.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",es[es.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",es[es.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",es[es.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",es[es.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY",(ei=B||(B={}))[ei.OBJECT_TYPE=37138]="OBJECT_TYPE",ei[ei.SYNC_CONDITION=37139]="SYNC_CONDITION",ei[ei.SYNC_STATUS=37140]="SYNC_STATUS",ei[ei.SYNC_FLAGS=37141]="SYNC_FLAGS",(e_=g||(g={}))[e_.UNSIGNALED=37144]="UNSIGNALED",e_[e_.SIGNALED=37145]="SIGNALED",(en=G||(G={}))[en.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",en[en.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",en[en.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",en[en.WAIT_FAILED=37149]="WAIT_FAILED",(eE=P||(P={}))[eE.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE",(ea=m||(m={}))[ea.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}}]);