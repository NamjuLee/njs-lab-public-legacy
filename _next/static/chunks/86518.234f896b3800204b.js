"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86518],{96243:function(e,t,r){r.d(t,{r:function(){return i}});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){let i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){let r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach((t,r)=>e(t,r))}}},86518:function(e,t,r){r.r(t),r.d(t,{BufferObject:function(){return i.f},FramebufferObject:function(){return n.X},Program:function(){return s.$},ProgramCache:function(){return u.G},Renderbuffer:function(){return o.r},ShaderCompiler:function(){return l.B},Texture:function(){return f.x},VertexArrayObject:function(){return h.U},createContext:function(){return _.k},createProgram:function(){return c.H},glslifyDefineMap:function(){return a.K}});var i=r(28859),n=r(59546),s=r(73499),u=r(70652),o=r(64885),l=r(72547),f=r(15809),h=r(98163),a=r(76445),c=r(43477),_=r(51552)},70652:function(e,t,r){r.d(t,{G:function(){return s}}),r(37180);var i=r(96243),n=r(73499);class s{constructor(e){this._rctx=e,this._store=new i.r}dispose(){this._store.forEach(e=>e.forEach(e=>e.dispose())),this._store.clear()}acquire(e,t,r,i){let s=this._store.get(e,t);if(null!=s)return s.ref(),s;let u=new n.$(this._rctx,e,t,r,i);return u.ref(),this._store.set(e,t,u),u}get test(){}}},43477:function(e,t,r){r.d(t,{H:function(){return n}});var i=r(73499);function n(e,t,r=""){return new i.$(e,r+t.shaders.vertexShader,r+t.shaders.fragmentShader,t.attributes)}},72547:function(e,t,r){r.d(t,{B:function(){return i}});class i{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,t=new Map){if(t.has(e))return t.get(e);let r=this._read(e);if(!r)throw Error(`cannot find shader file ${e}`);let i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,n=i.exec(r),s=[];for(;null!=n;)s.push({path:n[1],start:n.index,length:n[0].length}),n=i.exec(r);let u=0,o="";return s.forEach(e=>{o+=r.slice(u,e.start)+(t.has(e.path)?"":this._resolve(e.path,t)),u=e.start+e.length}),o+=r.slice(u),t.set(e,o),o}_read(e){return this._readFile(e)}}},98163:function(e,t,r){r.d(t,{U:function(){return f}});var i=r(65223),n=r(36152),s=r(13677),u=r(71193),o=r(4548);let l=()=>i.Z.getLogger("esri.views.webgl.VertexArrayObject"),f=class{constructor(e,t,r,i,n=null){this._context=e,this._locations=t,this._layout=r,this._buffers=i,this._indexBuffer=n,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce((e,t)=>e+this._buffers[t].usedMemory,null!=this._indexBuffer?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*s.ru}dispose(){if(this._context){for(let e in this._context.getBoundVAO()===this&&this._context.bindVAO(null),this._buffers)this._buffers[e]?.dispose(),delete this._buffers[e];this._indexBuffer=(0,n.M2)(this._indexBuffer),this.disposeVAOOnly()}else(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&l().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(u._g.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;let{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(u._g.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){let{_buffers:e,_layout:t,_indexBuffer:r}=this;e||l().error("Vertex buffer dictionary is empty!");let i=this._context.gl;for(let r in e){let i=e[r];i||l().error("Vertex buffer is uninitialized!");let n=t[r];n||l().error("Vertex element descriptor is empty!"),(0,o.XP)(this._context,this._locations,i,n)}null!=r&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}}},76445:function(e,t,r){r.d(t,{K:function(){return i}});function i(e){let t="";for(let r in e){let i=e[r];if("boolean"==typeof i)i&&(t+=`#define ${r}
`);else if("number"==typeof i)t+=`#define ${r} ${i.toFixed()}
`;else if("object"==typeof i){if(function(e){let{options:t,value:r}=e;return"number"==typeof t[r]}(i)){let{value:e,options:n,namespace:s}=i,u=s?`${s}_`:"";for(let e in n)t+=`#define ${u}${e} ${n[e].toFixed()}
`;t+=`#define ${r} ${u}${e}
`}else{let e=i.options,n=0;for(let r in e)t+=`#define ${e[r]} ${(n++).toFixed()}
`;t+=`#define ${r} ${e[i.value]}
`}}}return t}}}]);