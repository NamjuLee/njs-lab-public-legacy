"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38978],{45865:function(e,t,i){i.d(t,{EX:function(){return v},Y3:function(){return b},_Y:function(){return m},jQ:function(){return a},sJ:function(){return y},xr:function(){return x}});var r,s,n=i(87585);function a(e){return"r"in e&&"g"in e&&"b"in e}function l(e){return"h"in e&&"s"in e&&"v"in e}function o(e){return"l"in e&&"a"in e&&"b"in e}function u(e){return"l"in e&&"c"in e&&"h"in e}i(91870),i(40465);let h=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],d=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function c(e,t){let i,r;let s=[];if(e[0].length!==t.length)throw Error("dimensions do not match");let n=e.length,a=e[0].length,l=0;for(i=0;i<n;i++){for(l=0,r=0;r<a;r++)l+=e[i][r]*t[r];s.push(l)}return s}function p(e){let t=c(h,[e.r/255,e.g/255,e.b/255].map(e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4));return{x:100*t[0],y:100*t[1],z:100*t[2]}}function f(e){let t=c(d,[e.x/100,e.y/100,e.z/100]).map(e=>Math.min(1,Math.max(e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,0)));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function g(e){let t=[e.x/95.047,e.y/100,e.z/108.883].map(e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29);return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function _(e){let t=e.l,i=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map(e=>e>6/29?e**3:3*(6/29)**2*(e-4/29));return{x:95.047*i[0],y:100*i[1],z:108.883*i[2]}}function x(e){return a(e)?e:u(e)?f(_(function(e){let t=e.l,i=e.c,r=e.h;return{l:t,a:i*Math.cos(r),b:i*Math.sin(r)}}(e))):o(e)?f(_(e)):"x"in e&&"y"in e&&"z"in e?f(e):l(e)?function(e){let t;let i=(e.h+360)%360/60,r=e.s/100,s=e.v/100*255,n=s*r,a=n*(1-Math.abs(i%2-1));switch(Math.floor(i)){case 0:t={r:n,g:a,b:0};break;case 1:t={r:a,g:n,b:0};break;case 2:t={r:0,g:n,b:a};break;case 3:t={r:0,g:a,b:n};break;case 4:t={r:a,g:0,b:n};break;case 5:case 6:t={r:n,g:0,b:a};break;default:t={r:0,g:0,b:0}}return t.r=Math.round(t.r+s-n),t.g=Math.round(t.g+s-n),t.b=Math.round(t.b+s-n),t}(e):e}function m(e){return l(e)?e:function(e){let t=e.r,i=e.g,r=e.b,s=Math.max(t,i,r),n=s-Math.min(t,i,r),a=s,l=0===n?0:s===t?(i-r)/n%6:s===i?(r-t)/n+2:(t-i)/n+4,o=0===n?0:n/a;return l<0&&(l+=6),{h:l*=60,s:o*=100,v:a*=100/255}}(x(e))}function b(e){return o(e)?e:g(p(x(e)))}function y(e){return u(e)?e:function(e){let t=e.l,i=e.a,r=e.b,s=Math.atan2(r,i);return{l:t,c:Math.sqrt(i*i+r*r),h:s=s>0?s:s+2*Math.PI}}(g(p(x(e))))}function v(e,t){let{r:i,g:r,b:s}=t?.ignoreAlpha?e:function(e){let{r:t,g:i,b:r,a:s}=e;return s<1&&(t=Math.round(s*t+255*(1-s)),i=Math.round(s*i+255*(1-s)),r=Math.round(s*r+255*(1-s))),new n.Z({r:t,g:i,b:r})}(e);return .2126*i+.7152*r+.0722*s}(r=s||(s={}))[r.Low=160]="Low",r[r.High=225]="High"},43139:function(e,t,i){i.d(t,{E:function(){return p}});var r=i(87585),s=i(45865),n=i(61764),a=i(771),l=i(88421),o=i(94605),u=i(65223),h=i(48932);let d=new Map,c=e=>{if(!e)return[0,0,0,0];let{r:t,g:i,b:r,a:s}=e;return[t,i,r,255*s]};class p{static findApplicableOverrides(e,t,i){if(e&&t){if(e.primitiveName){let r=!1;for(let t of i)if(t.primitiveName===e.primitiveName){r=!0;break}if(!r)for(let r of t)r.primitiveName===e.primitiveName&&i.push(r)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(let r of e.effects)p.findApplicableOverrides(r,t,i);if(e.symbolLayers)for(let r of e.symbolLayers)p.findApplicableOverrides(r,t,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(let r of e.effects)p.findApplicableOverrides(r,t,i);if(e.markerPlacement&&p.findApplicableOverrides(e.markerPlacement,t,i),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(let r of e.markerGraphics)p.findApplicableOverrides(r,t,i),p.findApplicableOverrides(r.symbol,t,i)}else"CIMCharacterMarker"===e.type?p.findApplicableOverrides(e.symbol,t,i):"CIMHatchFill"===e.type?p.findApplicableOverrides(e.lineSymbol,t,i):"CIMPictureMarker"===e.type&&p.findApplicableOverrides(e.animatedSymbolProperties,t,i)}}}static findEffectOverrides(e,t){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,l.T2)(e),!t||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};let i=(0,l.Ml)(e),r=e.primitiveName,s=[];for(let e of t)e.primitiveName===r&&s.push((0,l.Ml)(e));return{type:"cim-effect-param",effect:i,overrides:(0,l.Ul)(s)}}static async resolveSymbolOverrides(e,t,i,r,s,a,o){if(!e?.symbol)return null;let{symbol:u,primitiveOverrides:h}=e,d=!!h;if(!d&&!r)return u;u=(0,n.d9)(u),h=(0,n.d9)(h);let c=!0;if(t||(t={attributes:{}},c=!1),d){if(c||(h=h.filter(e=>!e.valueExpressionInfo?.expression.includes("$feature"))),o||(h=h.filter(e=>!e.valueExpressionInfo?.expression.includes("$view"))),h.length>0){let e={spatialReference:i,fields:(0,l.Qf)(t.attributes),geometryType:s};await p.createRenderExpressions(h,e),p.evaluateOverrides(h,t,s??"esriGeometryPoint",a,o)}p.applyOverrides(u,h)}return r&&p.applyDictionaryTextOverrides(u,t,r,null),u}static async createRenderExpressions(e,t){let i=[];for(let r of e){let e=r.valueExpressionInfo;if(!e||p._expressionToRenderExpression.has(e.expression))continue;let s=(0,a.Yi)(e.expression,t.spatialReference,t.fields);i.push(s),s.then(t=>p._expressionToRenderExpression.set(e.expression,t))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,t,i,r,n){let a={$view:{scale:n?.scale}};for(let n of e){n.value&&"object"==typeof n.value&&(0,s.jQ)(n.value)&&("Color"===n.propertyName||"StrokeColor"===n.propertyName)&&(n.value=c(n.value));let e=n.valueExpressionInfo;if(!e)continue;let l=p._expressionToRenderExpression.get(e.expression);l&&(n.value=function(e,t,i,r,s){if(null==e)return null;let n=e.referencesGeometry()&&s?function(e,t,i){let{transform:r,hasZ:s,hasM:n}=i;d.has(t)||d.set(t,function(e){let t={};switch(e){case"esriGeometryPoint":return(e,i,r,s)=>(0,h.U1)(i,t,e,r,s);case"esriGeometryPolygon":return(e,i,r,s)=>(0,h.Ie)(i,t,e,r,s);case"esriGeometryPolyline":return(e,i,r,s)=>(0,h.G6)(i,t,e,r,s);case"esriGeometryMultipoint":return(e,i,r,s)=>(0,h.J9)(i,t,e,r,s);default:return u.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new o.Z("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));let a=d.get(t)(e.geometry,r,s,n);return{...e,geometry:a}}(t,r,s):t,a=e.repurposeFeature(n);try{return e.evaluate({...i,$feature:a},e.services)}catch(e){return u.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}(l,t,a,i,r))}}static applyDictionaryTextOverrides(e,t,i,r,s="Normal"){if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{let n=e.symbolLayers;if(!n)return;for(let a of n)a&&"CIMVectorMarker"===a.type&&p.applyDictionaryTextOverrides(a,t,i,r,"CIMTextSymbol"===e.type?e.textCase:s)}break;case"CIMVectorMarker":{let s=e.markerGraphics;if(!s)return;for(let e of s)e&&p.applyDictionaryTextOverrides(e,t,i,r)}break;case"CIMMarkerGraphic":{let n=e.textString;if(n&&n.includes("[")){let a=(0,l.H1)(n,i);e.textString=(0,l.E_)(t,a,r,s)}}}}static applyOverrides(e,t,i,r){if(e.primitiveName){for(let s of t)if(s.primitiveName===e.primitiveName){let t=(0,l.Le)(s.propertyName);if(r&&r.push({cim:e,nocapPropertyName:t,value:e[t]}),i){let t=!1;for(let r of i)r.primitiveName===e.primitiveName&&(t=!0);t||i.push(s)}null!=s.value&&(e[t]=s.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(let s of e.effects)p.applyOverrides(s,t,i,r);if(e.symbolLayers)for(let s of e.symbolLayers)p.applyOverrides(s,t,i,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(let s of e.effects)p.applyOverrides(s,t,i,r);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(let s of e.markerGraphics)p.applyOverrides(s,t,i,r),p.applyOverrides(s.symbol,t,i,r)}}static restoreOverrides(e){for(let t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(let i of e)void 0!==i.value&&(t+=`${i.primitiveName}${i.propertyName}${JSON.stringify(i.value)}`);return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map(e=>Number(e));if("Color"===e){let e=new r.Z(t).toRgba();return e[3]*=255,e}return t}}p._expressionToRenderExpression=new Map},91007:function(e,t,i){i.d(t,{b:function(){return x}});var r=i(94605),s=i(37180),n=i(65223),a=i(36091),l=i(32412),o=i(94690),u=i(71193),h=i(59546),d=i(15809),c=i(66897);let p=()=>n.Z.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");class f{constructor(e,t,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;let{buffer:r,pixelType:s,textureOnly:n}=e,a=(0,o.UK)(s);this.blockIndex=i,this.pixelType=s,this.size=t,this.textureOnly=n,n||(this.data=new a(r)),this._resetRange()}destroy(){for(let e in this._texture?.dispose(),this._fbos){let t=this._fbos[e];t&&("0"===e&&t.detachColorTexture(),t.dispose()),this._fbos[e]=null}this._texture=null}get _textureDesc(){let e=new c.X;return e.wrapMode=u.e8.CLAMP_TO_EDGE,e.samplingMode=u.cw.NEAREST,e.dataType=this.pixelType,e.width=this.size,e.height=this.size,e}setData(e,t,i){let r=(0,l.jL)(e),s=this.data,n=r*this.texelSize+t;!s||n>=s.length||(s[n]=i,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r))}getData(e,t){if(null==this.data)return null;let i=(0,l.jL)(e)*this.texelSize+t;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(e){return this._texture??this._initTexture(e)}getFBO(e,t=0){if(!this._fbos[t]){let i=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new h.X(e,i)}return this._fbos[t]}get hasDirty(){let e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){try{let i=this.dirtyStart,n=this.dirtyEnd;if(!this.hasDirty)return;(0,s.Z)("esri-2d-update-debug")&&console.debug(`Version[${t}] AttributeStoreView.updateTexture`,{start:i,end:n,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();let a=this.data.buffer,l=this.getTexture(e),u=(i-i%this.size)/this.size,h=(n-n%this.size)/this.size,d=this.size,c=u*this.size*4,f=(d+h*this.size)*4-c,g=(0,o.UK)(this.pixelType),_=new g(a,c*g.BYTES_PER_ELEMENT,f),x=this.size,m=h-u+1;if(m>this.size)return void p().error(new r.Z("mapview-webgl","Out-of-bounds index when updating AttributeData"));l.updateData(0,0,u,x,m,_)}catch(e){}}update(e){let{data:t,start:i,end:r}=e;if(null!=t&&null!=this.data){let r=this.data,s=i*this.texelSize;for(let i=0;i<t.length;i++){let n=1<<i%this.texelSize;e.layout&n&&(r[s+i]=t[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,r)}resize(e,t){let i=this.size;if(this.size=t,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));let r=(0,o.UK)(this.pixelType);this.destroy(),this.data=new r(e.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){let t=new d.x(e,this._textureDesc,this.data??void 0);if(null!=this._lastTexture&&this._fbos[0]){let i=this._lastTexture.descriptor.width,r=this._lastTexture.descriptor.height,s=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(e),l=(0,o.Yw)(s),u=new((0,o.UK)(s))(new ArrayBuffer(i*r*l*this.texelSize)),h=e.getBoundFramebufferObject(),{x:d,y:c,width:p,height:f}=e.getViewport();e.bindFramebuffer(a),a.readPixels(0,0,i,r,n,s,u),t.updateData(0,0,0,2*i,r/2,u),e.setViewport(d,c,p,f),e.bindFramebuffer(h)}return this.destroy(),this._texture=t,this._texture}}class g{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}_initialize(e){if(!e)throw Error("InternalError: initArgs must be defined");let t=e.blockDescriptors;if(this.size=e.blockSize,(0,s.Z)("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:e}),null==this._data)this._data=t.map((e,t)=>null!=e?new f(e,this.size,t):null);else for(let e=0;e<this._data.length;e++){let i=this._data[e],r=t[e];null!=r&&(null==i?this._data[e]=new f(r,this.size,e):i.resize(r,this.size))}}destroy(){for(let e of this._data??[])e?.destroy();this._defaultTexture?.dispose(),this._defaultTexture=null,this._pendingAttributeUpdates=[]}isEmpty(){return null==this._data}getBlock(e){return null==this._data?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,a.wi.VV,0,0)}getData(e,t,i,r){if(!this._data)return 0;let s=this._data[t];if(null==s)return 0;let n=s.getData(e,i);return null!=n?n:r}setData(e,t,i,r){this._data[t].setData(e,i,r)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}requestUpdate(e){this._version=e.version,this._pendingAttributeUpdates.push(e),(0,s.Z)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:e})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;let e=this._pendingAttributeUpdates;for(let t of(this._pendingAttributeUpdates=[],e)){let{blockData:e,initArgs:i,sendUpdateEpoch:r,version:n}=t;(0,s.Z)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${r}] AttributeStoreView.applyUpdate`),this._version=n,this._epoch=r,null!=i&&this._initialize(i);let a=this._data;for(let t=0;t<e.length;t++){let i=e[t],r=a[t];null!=r&&null!=i&&((0,s.Z)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${t}] AttributeStoreView.update`,{block:i}),r.update(i))}}}getUniforms(e){return{filterFlags:{texture:this._getTexture(e,a.wi.FilterFlags),unit:a.NY},animation:{texture:this._getTexture(e,a.wi.Animation),unit:a.zZ},gpgpu:{texture:this._getTexture(e,a.wi.GPGPU),unit:a.cz},visualVariableData:{texture:this._getTexture(e,a.wi.VV),unit:a.bm},dataDriven0:{texture:this._getTexture(e,a.wi.DD0),unit:a.j1},dataDriven1:{texture:this._getTexture(e,a.wi.DD1),unit:a.Ly},dataDriven2:{texture:this._getTexture(e,a.wi.DD2),unit:a.ce},size:this.size}}_getTexture(e,t){let i=this._data?.[t];return i?(i.updateTexture(e,this._version),i.getTexture(e)):this._getDefaultTexture(e)}_getDefaultTexture(e){if(null==this._defaultTexture){let t=new c.X;t.wrapMode=u.e8.CLAMP_TO_EDGE,t.samplingMode=u.cw.NEAREST,t.width=1,t.height=1,this._defaultTexture=new d.x(e,t,new Uint8Array(4))}return this._defaultTexture}}var _=i(7748);class x extends _.Z{constructor(e){super(e),this._statisticsByLevel=new Map,this.attributeView=new g}destroy(){this.children.forEach(e=>e.destroy()),this.removeAllChildren(),this.attributeView.destroy()}doRender(e){e.context.capabilities.enable("textureFloatLinear"),super.doRender(e)}createRenderParams(e){let t=super.createRenderParams(e);return t.attributeView=this.attributeView,t.instanceStore=this._instanceStore,t.statisticsByLevel=this._statisticsByLevel,t}}},36779:function(e,t,i){i.d(t,{JZ:function(){return c},RL:function(){return p},eY:function(){return f}});var r=i(31124),s=i(15514),n=i(24971),a=i(6977),l=i(6396),o=i(95643),u=i(71193),h=i(15809),d=i(66897);function c(e){return e&&"render"in e}function p(e){let t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class f extends l.s{constructor(e=null,t=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();let i=new AbortController,s=(0,r.hh)();return(0,r.$F)(t,()=>i.abort()),(0,r.$F)(i,e=>s.reject(e)),this._uploadStatus={controller:i,resolver:s},this.source=e,s.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){let t=(0,s.yR)(this.transforms.displayViewScreenMat3),[i,r]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,l=n*this.width,o=n*this.height,u=Math.PI*this.rotation/180;(0,s.Iu)(t,t,(0,a.al)(i,r)),(0,s.Iu)(t,t,(0,a.al)(l/2,o/2)),(0,s.U1)(t,t,-u),(0,s.Iu)(t,t,(0,a.al)(-l/2,-o/2)),(0,s.ex)(t,t,(0,a.al)(l,o)),(0,s.Jp)(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture({context:e,painter:t}){var i;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);let s=c(i=this.source)?i instanceof o.Z?i.getRenderedRasterPixels()?.renderedRasterPixels:p(i):i;try{if(null!=this._uploadStatus){let{controller:e,resolver:i}=this._uploadStatus,r={signal:e.signal},{width:n,height:a}=this,l=this._texture,o=t.textureUploadManager;await o.enqueueTextureUpdate({data:s,texture:l,width:n,height:a},r),i.resolve(),this._uploadStatus=null}else this._texture.setData(s);this.ready()}catch(e){(0,r.H9)(e)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,n.Ue)()}}_createTexture(e){let t=this.immutable,i=new d.X;return i.internalFormat=t?u.lP.RGBA8:u.VI.RGBA,i.wrapMode=u.e8.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new h.x(e,i)}}},95643:function(e,t,i){i.d(t,{Z:function(){return r}});class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){let t=this.pixelBlock;if(null==t)return;let i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);let r=i.pixelBlock.getAsRGBA(),s=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);s.data.set(r),e.putImageData(s,0,0)}getRenderedRasterPixels(){let e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},7748:function(e,t,i){i.d(t,{Z:function(){return u}});var r=i(37180),s=i(80320),n=i(67236),a=i(10219),l=i(55101);let o=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class u extends n.Z{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(o),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){let{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){let t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[a.Z],drawPhase:s.jx.DEBUG|s.jx.MAP|s.jx.HIGHLIGHT|s.jx.LABEL,target:()=>this.getStencilTarget()})),(0,r.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[l.Z],drawPhase:s.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(let e of this.children)e.stencilRef=t++}}},14006:function(e,t,i){i.d(t,{G:function(){return s}});var r=i(36671);class s{constructor(e,t,i){this._instanceId=e,this.techniqueRef=t,this._input=i}get instanceId(){return(0,r.G)(this._instanceId)}createMeshInfo(e){return{id:(0,r.G)(this._instanceId),techniqueType:this.techniqueRef.type,inputParams:e,optionalAttributes:this._input.optionalAttributes}}getInput(){return this._input}setInput(e){this._input=e}}},36671:function(e,t,i){function r(e){return e}function s(e){return e}i.d(t,{G:function(){return r},W:function(){return s}})},35984:function(e,t,i){i.d(t,{K:function(){return I}});var r=i(36152),s=i(91007),n=i(80320),a=i(14006),l=i(12420),o=i(36671);let u=0;function h(e,t){return new a.G((0,o.W)(u++),e,t)}let d={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null};class c{constructor(){this.instances={fill:h(l.k2.fill,{uniforms:d,optionalAttributes:{zoomRange:!0}}),marker:h(l.k2.marker,{uniforms:d,optionalAttributes:{zoomRange:!0}}),line:h(l.k2.line,{uniforms:d,optionalAttributes:{zoomRange:!0}}),text:h(l.k2.text,{uniforms:d,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:h(l.k2.complexFill,{uniforms:d,optionalAttributes:{zoomRange:!0}}),texturedLine:h(l.k2.texturedLine,{uniforms:d,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce((e,t)=>(e.set(t.instanceId,t),e),new Map)}getInstance(e){return this._instancesById.get(e)}}var p=i(15514),f=i(24971),g=i(6977),_=i(34256),x=i(38028),m=i(6396),b=i(94690),y=i(28859),v=i(71193),w=i(98163);let M=Math.PI/180;class S extends m.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,f.Ue)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,r.M2)(this._program)}doRender(e){let{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(v.zi.ONE,v.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);let r=this._program;t.bindVAO(this._vao),t.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(v.MX.LINES,8*i.length,v.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:(0,f.Ue)()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",k().attributes))}_updateMatricesAndLocalOrigin(e){let{state:t}=e,{displayMat3:i,size:r,resolution:s,pixelRatio:n,rotation:a,viewpoint:l}=t,{x:o,y:u}=l.targetGeometry,h=(0,x.or)(o,t.spatialReference);this._localOrigin.x=h,this._localOrigin.y=u;let d=n*r[0],c=n*r[1],f=(0,p.yR)(this._dvsMat3);(0,p.Jp)(f,f,i),(0,p.Iu)(f,f,(0,g.al)(d/2,c/2)),(0,p.bA)(f,f,(0,_.al)(r[0]/(s*d),-c/(s*c),1)),(0,p.U1)(f,f,-(M*a))}_updateBufferData(e,t){let{x:i,y:r}=this._localOrigin,s=new Float32Array(8*t.length),n=new Uint32Array(8*t.length),a=0,l=0;for(let e of t)e&&(s[2*a]=e[0]-i,s[2*a+1]=e[1]-r,s[2*a+2]=e[0]-i,s[2*a+3]=e[3]-r,s[2*a+4]=e[2]-i,s[2*a+5]=e[3]-r,s[2*a+6]=e[2]-i,s[2*a+7]=e[1]-r,n[l]=a+0,n[l+1]=a+3,n[l+2]=a+3,n[l+3]=a+2,n[l+4]=a+2,n[l+5]=a+1,n[l+6]=a+1,n[l+7]=a+0,a+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(s.buffer):this._vertexBuffer=y.f.createVertex(e,v.l1.DYNAMIC_DRAW,s.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=y.f.createIndex(e,v.l1.DYNAMIC_DRAW,n),!this._vao){let t=k();this._vao=new w.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}let k=()=>(0,b.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:v.g.FLOAT}]});class I extends s.b{constructor(e){super(e),this._instanceStore=new c,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,r.SC)(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new S(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){for(let i of(e.selection=t,this.children)){if(!i.visible)continue;let t=i.getDisplayList(this._instanceStore,n.gl.STRICT_ORDER);t?.render(e)}}}},91980:function(e,t,i){i.d(t,{Z:function(){return u}});var r=i(86641);i(65223),i(37180),i(3457),i(94605);var s=i(64186),n=i(80320),a=i(35984),l=i(37911);let o=class extends a.K{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===n.jx.HIGHLIGHT&&this.children.some(e=>e.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),(0,l.P9)(e,!0,e=>{this._renderChildren(e,n.Xq.All)}))}},u=o=(0,r._)([(0,s.j)("esri.views.2d.layers.graphics.HighlightGraphicContainer")],o)},30369:function(e,t,i){i.d(t,{V5:function(){return n},e7:function(){return s}});var r=i(67009);async function s(e,t=e.popupTemplate){if(null==t)return[];let i=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=t,{objectIdField:n,typeIdField:a,globalIdField:l,relationships:o}=e;if(i.includes("*"))return["*"];let u=s?(0,r.CH)(e):[],h=(0,r.Q0)(e.fieldsIndex,[...i,...u]);return a&&h.push(a),h&&n&&e.fieldsIndex?.has(n)&&!h.includes(n)&&h.push(n),h&&l&&e.fieldsIndex?.has(l)&&!h.includes(l)&&h.push(l),o&&o.forEach(t=>{let{keyField:i}=t;h&&i&&e.fieldsIndex?.has(i)&&!h.includes(i)&&h.push(i)}),h}function n(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}}}]);