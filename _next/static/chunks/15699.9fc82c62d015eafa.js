"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15699],{15699:function(e,t,r){r.r(t),r.d(t,{getGeometryServiceURL:function(){return l},projectGeometry:function(){return u}});var o=r(39301),n=r(94605),i=r(81449),a=r(41390),s=r(37501);async function l(e=null,t){let r;if(o.default.geometryServiceUrl)return o.default.geometryServiceUrl;if(!e)throw new n.Z("internal:geometry-service-url-not-configured");r="portal"in e?e.portal||i.Z.getDefault():e,await r.load({signal:t});let a=r.helperServices?.geometry?.url;if(!a)throw new n.Z("internal:geometry-service-url-not-configured");return a}async function u(e,t,r=null,o){let i=await l(r,o),u=new s.Z({geometries:[e],outSpatialReference:t}),f=await (0,a.i)(i,u,{signal:o});if(f&&Array.isArray(f)&&1===f.length)return f[0];throw new n.Z("internal:geometry-service-projection-failed")}},41390:function(e,t,r){r.d(t,{i:function(){return f}});var o=r(54748),n=r(61733),i=r(5005),a=r(30563),s=r(88789),l=r(37501);let u=(0,n.se)(l.Z);async function f(e,t,r){t=u(t);let n=(0,a.en)(e),l={...n.query,f:"json",...t.toJSON()},f=t.outSpatialReference,c=(0,i.Ji)(t.geometries[0]),m=(0,a.lA)(l,r);return(0,o.Z)(n.path+"/project",m).then(({data:{geometries:e}})=>(0,s.o)(e,c,f))}},37501:function(e,t,r){r.d(t,{Z:function(){return f}});var o=r(86641),n=r(689),i=r(89312);r(37180),r(65223),r(3457);var a=r(64186),s=r(5005),l=r(62329);let u=class extends n.wq{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){let e=this.geometries.map(e=>e.toJSON()),t=this.geometries[0],r={};return r.outSR=(0,l.B9)(this.outSpatialReference),r.inSR=(0,l.B9)(t.spatialReference),r.geometries=JSON.stringify({geometryType:(0,s.Ji)(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};(0,o._)([(0,i.Cb)()],u.prototype,"geometries",void 0),(0,o._)([(0,i.Cb)({json:{read:{source:"outSR"}}})],u.prototype,"outSpatialReference",void 0),(0,o._)([(0,i.Cb)()],u.prototype,"transformation",void 0),(0,o._)([(0,i.Cb)()],u.prototype,"transformForward",void 0);let f=u=(0,o._)([(0,a.j)("esri.rest.support.ProjectParameters")],u)}}]);