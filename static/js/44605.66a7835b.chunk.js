"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[44605],{58971:(t,e,n)=>{n.d(e,{G6:()=>G,Ie:()=>v,J9:()=>x,RF:()=>_,U1:()=>b,vY:()=>l,ym:()=>P});var r=n(92026),s=n(77981);const i=(t,e,n)=>[e,n],o=(t,e,n)=>[e,n,t[2]],a=(t,e,n)=>[e,n,t[2],t[3]];function l(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:(0,r.pC)(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function u(t,e){let{scale:n,translate:r}=t;return Math.round((e-r[0])/n[0])}function h(t,e){let{scale:n,translate:r}=t;return Math.round((r[1]-e)/n[1])}function c(t,e,n){const r=[];let s,i,o,a;for(let l=0;l<n.length;l++){const c=n[l];l>0?(o=u(t,c[0]),a=h(t,c[1]),o===s&&a===i||(r.push(e(c,o-s,a-i)),s=o,i=a)):(s=u(t,c[0]),i=h(t,c[1]),r.push(e(c,s,i)))}return r.length>0?r:null}function f(t,e){let{scale:n,translate:r}=t;return e*n[0]+r[0]}function p(t,e){let{scale:n,translate:r}=t;return r[1]-e*n[1]}function d(t,e,n){const r=new Array(n.length);if(!n.length)return r;const[s,i]=t.scale;let o=f(t,n[0][0]),a=p(t,n[0][1]);r[0]=e(n[0],o,a);for(let l=1;l<n.length;l++){const t=n[l];o+=t[0]*s,a-=t[1]*i,r[l]=e(t,o,a)}return r}function m(t,e,n){const r=new Array(n.length);for(let s=0;s<n.length;s++)r[s]=d(t,e,n[s]);return r}function y(t,e,n,r,s){var l;return e.points=null!==(l=function(t,e,n,r){return c(t,n?r?a:o:r?o:i,e)}(t,n.points,r,s))&&void 0!==l?l:[],e}function _(t,e,n,r,s){return e.x=u(t,n.x),e.y=h(t,n.y),e!==n&&(r&&(e.z=n.z),s&&(e.m=n.m)),e}function g(t,e,n,r,s){const l=function(t,e,n,r){const s=[],l=n?r?a:o:r?o:i;for(let i=0;i<e.length;i++){const n=c(t,l,e[i]);n&&n.length>=3&&s.push(n)}return s.length?s:null}(t,n.rings,r,s);return l?(e.rings=l,e):null}function C(t,e,n,r,s){const l=function(t,e,n,r){const s=[],l=n?r?a:o:r?o:i;for(let i=0;i<e.length;i++){const n=c(t,l,e[i]);n&&n.length>=2&&s.push(n)}return s.length?s:null}(t,n.paths,r,s);return l?(e.paths=l,e):null}function P(t,e){return t&&e?(0,s.wp)(e)?_(t,{},e,!1,!1):(0,s.l9)(e)?C(t,{},e,!1,!1):(0,s.oU)(e)?g(t,{},e,!1,!1):(0,s.aW)(e)?y(t,{},e,!1,!1):(0,s.YX)(e)?function(t,e,n,r,s){return e.xmin=u(t,n.xmin),e.ymin=h(t,n.ymin),e.xmax=u(t,n.xmax),e.ymax=h(t,n.ymax),e!==n&&(r&&(e.zmin=n.zmin,e.zmax=n.zmax),s&&(e.mmin=n.mmin,e.mmax=n.mmax)),e}(t,{},e,!1,!1):null:null}function x(t,e,n,s,l){return(0,r.pC)(n)&&(e.points=function(t,e,n,r){return d(t,n?r?a:o:r?o:i,e)}(t,n.points,s,l)),e}function b(t,e,n,s,i){return(0,r.Wi)(n)||(e.x=f(t,n.x),e.y=p(t,n.y),e!==n&&(s&&(e.z=n.z),i&&(e.m=n.m))),e}function v(t,e,n,s,l){return(0,r.pC)(n)&&(e.rings=function(t,e,n,r){return m(t,n?r?a:o:r?o:i,e)}(t,n.rings,s,l)),e}function G(t,e,n,s,l){return(0,r.pC)(n)&&(e.paths=function(t,e,n,r){return m(t,n?r?a:o:r?o:i,e)}(t,n.paths,s,l)),e}},44605:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v});var r=n(41644),s=n(92026),i=n(95439),o=n(78952),a=n(93501),l=(n(59896),n(93169),n(41414)),u=n(65156),h=(n(58971),n(27823),n(83040));n(92975);class c{constructor(t,e,n){this.uid=t,this.geometry=e,this.attributes=n,this.visible=!0,this.objectId=null,this.centroid=null}}class f{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}(0,l.Ue)(),(0,u.Ue)();var p=n(83406);function d(t,e){return e}function m(t,e,n,r){switch(n){case 0:return C(t,e+r,0);case 1:return"lowerLeft"===t.originPosition?C(t,e+r,1):function(t,e,n){let{translate:r,scale:s}=t;return r[n]-e*s[n]}(t,e+r,1)}}function y(t,e,n,r){return 2===n?C(t,e,2):m(t,e,n,r)}function _(t,e,n,r){return 2===n?C(t,e,3):m(t,e,n,r)}function g(t,e,n,r){return 3===n?C(t,e,3):y(t,e,n,r)}function C(t,e,n){let{translate:r,scale:s}=t;return r[n]+e*s[n]}class P{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=d,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new f}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,a.k)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(!(0,s.Wi)(e))for(const n of t.features)e(n.geometry)}createSpatialReference(){return new o.Z}addField(t,e){t.fields.push(h.Z.fromJSON(e));const n=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of n)this[t]=null}}addFeature(t,e){const n=this._options.maxStringAttributeLength?this._options.maxStringAttributeLength:0;if(n>0)for(const r in e.attributes){const t=e.attributes[r];"string"==typeof t&&t.length>n&&(e.attributes[r]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:n,queryGeometryType:r}=e,s=(0,p.$g)(n.clone(),n,!1,!1,this._transform),i=(0,p.di)(s,r,!1,!1);let o=null;switch(r){case"esriGeometryPoint":o="point";break;case"esriGeometryPolygon":o="polygon";break;case"esriGeometryPolyline":o="polyline";break;case"esriGeometryMultipoint":o="multipoint"}i.type=o,t.queryGeometryType=r,t.queryGeometry=i}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,n)=>this.addCoordinatePoint(t,e,n),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,n)=>this._addCoordinatePolygon(t,e,n),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,n)=>this._addCoordinatePolyline(t,e,n),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,n)=>this._addCoordinateMultipoint(t,e,n),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:(0,r.Bg)(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new c((0,i.D)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e,n){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,n){switch(e=this._applyTransform(this._transform,e,n,0),n){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let n=0;return e<=1&&(n=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._applyTransform(this._transform,t,e,n)}_addCoordinatePolyline(t,e,n){this._dehydratedAddPointsCoordinate(t.paths,e,n)}_addCoordinatePolygon(t,e,n){this._dehydratedAddPointsCoordinate(t.rings,e,n)}_addCoordinateMultipoint(t,e,n){0===n&&t.points.push([]);const r=this._transformPathLikeValue(e,n);t.points[t.points.length-1].push(r)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,n){0===n&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(e,n),s=t[t.length-1];0===n&&s.push(new Float64Array(this._coordinateBuffer.buffer,this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this._vertexDimension)),this._coordinateBuffer[this._coordinateBufferPtr++]=r}_deriveApplyTransform(t){const{hasZ:e,hasM:n}=t;return e&&n?g:e?y:n?_:m}}var x=n(27607);class b{_parseFeatureQuery(t){const e=(0,x.C)(t.buffer,new P(t.options)),n={...e,spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map((t=>t.toJSON())):void 0};return Promise.resolve(n)}}function v(){return new b}}}]);
//# sourceMappingURL=44605.66a7835b.chunk.js.map