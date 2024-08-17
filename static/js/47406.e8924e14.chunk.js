"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[47406],{80573:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(27366),s=i(85015),o=i(11582),r=i(79056),l=i(46784),p=i(92026),a=i(49861),u=(i(63780),i(25243),i(69912));let y=0,d=class extends((0,l.eC)((0,o.J)((0,r.IG)(s.Z)))){constructor(e){super(e),this.id="".concat(Date.now().toString(16),"-analysis-").concat(y++),this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if((0,p.pC)(t))switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(p.pC)}};(0,n._)([(0,a.Cb)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,n._)([(0,a.Cb)({type:String})],d.prototype,"title",void 0),(0,n._)([(0,a.Cb)({constructOnly:!0})],d.prototype,"type",void 0),(0,n._)([(0,a.Cb)({clonable:!1,value:null})],d.prototype,"parent",null),(0,n._)([(0,a.Cb)({readOnly:!0})],d.prototype,"isEditable",null),(0,n._)([(0,a.Cb)({readOnly:!0})],d.prototype,"requiredPropertiesForEditing",void 0),d=(0,n._)([(0,u.j)("esri.analysis.Analysis")],d);const c=d},47406:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var n=i(27366),s=i(80573),o=i(51995),r=i(11582),l=i(46784),p=i(17842),a=i(49861),u=(i(63780),i(25243)),y=i(69912);let d=class extends((0,l.eC)(r.j)){constructor(e){super(e),this.type="simple",this.color=new o.Z("black"),this.lineSize=2,this.fontSize=10,this.textColor=new o.Z("black"),this.textBackgroundColor=new o.Z([255,255,255,.6])}};(0,n._)([(0,a.Cb)({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:o.Z,nonNullable:!0,json:{type:[u.z8],write:{isRequired:!0}}})],d.prototype,"color",void 0),(0,n._)([(0,a.Cb)({type:Number,cast:p.t_,nonNullable:!0,range:{min:(0,p.Wz)(1)},json:{write:{isRequired:!0}}})],d.prototype,"lineSize",void 0),(0,n._)([(0,a.Cb)({type:Number,cast:p.t_,nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"fontSize",void 0),(0,n._)([(0,a.Cb)({type:o.Z,nonNullable:!0,json:{type:[u.z8],write:{isRequired:!0}}})],d.prototype,"textColor",void 0),(0,n._)([(0,a.Cb)({type:o.Z,nonNullable:!0,json:{type:[u.z8],write:{isRequired:!0}}})],d.prototype,"textBackgroundColor",void 0),d=(0,n._)([(0,y.j)("esri.analysis.DimensionSimpleStyle")],d);const c=d;var h;i(59486);!function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"}(h||(h={}));const b=[h.Horizontal,h.Vertical,h.Direct];var C=i(17768),m=i(89125),_=i(585);let g=class extends((0,l.eC)(r.j)){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=h.Direct,this.offset=0,this.orientation=0}};(0,n._)([(0,a.Cb)({type:["length"],json:{write:{isRequired:!0}}})],g.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:_.Z,json:{write:!0}})],g.prototype,"startPoint",void 0),(0,n._)([(0,a.Cb)({type:_.Z,json:{write:!0}})],g.prototype,"endPoint",void 0),(0,n._)([(0,a.Cb)({type:b,nonNullable:!0,json:{write:{isRequired:!0}}})],g.prototype,"measureType",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],g.prototype,"offset",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,m.p)((e=>C.BV.normalize((0,u.q9)(e),0,!0)))],g.prototype,"orientation",void 0),g=(0,n._)([(0,y.j)("esri.analysis.LengthDimension")],g);const v=g;var w=i(40281),f=i(60354),P=i(92026),x=i(94172),j=i(53866),R=i(52587);const N=w.Z.ofType(v);let O=class extends s.Z{constructor(e){super(e),this.type="dimension",this.style=new c,this.extent=null}initialize(){this.addHandles((0,x.YP)((()=>this._computeExtent()),(e=>{((0,P.Wi)(e)||(0,P.Wi)(e.pending))&&this._set("extent",(0,P.pC)(e)?e.extent:null)}),x.tX))}get dimensions(){return this._get("dimensions")||new N}set dimensions(e){this._set("dimensions",(0,f.Z)(e,this.dimensions,N))}get spatialReference(){for(const e of this.dimensions){if((0,P.pC)(e.startPoint))return e.startPoint.spatialReference;if((0,P.pC)(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return(0,P.pC)(e)?(0,P.Wg)(e.pending):null}_computeExtent(){const e=this.spatialReference;if((0,P.Wi)(e))return{pending:null,extent:null};const t=[];for(const s of this.dimensions)(0,P.pC)(s.startPoint)&&t.push(s.startPoint),(0,P.pC)(s.endPoint)&&t.push(s.endPoint);const i=(0,R.JY)(t,e);if((0,P.pC)(i.pending))return{pending:i.pending,extent:null};let n=null;return(0,P.pC)(i.geometries)&&(n=i.geometries.reduce(((e,t)=>(0,P.Wi)(e)?(0,P.pC)(t)?j.Z.fromPoint(t):null:(0,P.pC)(t)?e.union(j.Z.fromPoint(t)):e),null)),{pending:null,extent:n}}clear(){this.dimensions.removeAll()}};(0,n._)([(0,a.Cb)({type:["dimension"]})],O.prototype,"type",void 0),(0,n._)([(0,a.Cb)({cast:f.R,type:N,nonNullable:!0})],O.prototype,"dimensions",null),(0,n._)([(0,a.Cb)({readOnly:!0})],O.prototype,"spatialReference",null),(0,n._)([(0,a.Cb)({types:{key:"type",base:null,typeMap:{simple:c}},nonNullable:!0})],O.prototype,"style",void 0),(0,n._)([(0,a.Cb)({value:null,readOnly:!0})],O.prototype,"extent",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],O.prototype,"requiredPropertiesForEditing",null),O=(0,n._)([(0,y.j)("esri.analysis.DimensionAnalysis")],O);const Z=O;var q=i(97642),S=i(31201),z=i(30651),E=i(6061);let D=class extends((0,E.q)((0,q.R)(z.Z))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new Z,this.opacity=1,e){const{source:t,style:i}=e;t&&i&&(t.style=i)}}initialize(){this.addHandles([(0,x.YP)((()=>this.source),((e,t)=>{(0,P.pC)(t)&&t.parent===this&&(t.parent=null),(0,P.pC)(e)&&(e.parent=this)}),x.tX)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return(0,P.Wg)(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new Z)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,t,i,n){t.dimensions=e.filter((e=>{let{startPoint:t,endPoint:i}=e;return(0,P.pC)(t)&&(0,P.pC)(i)})).map((e=>e.toJSON(n))).toJSON()}};(0,n._)([(0,a.Cb)({json:{read:!1},readOnly:!0})],D.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:["ArcGISDimensionLayer"]})],D.prototype,"operationalLayerType",void 0),(0,n._)([(0,a.Cb)({nonNullable:!0})],D.prototype,"source",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],D.prototype,"spatialReference",null),(0,n._)([(0,a.Cb)({types:{key:"type",base:null,typeMap:{simple:c}},json:{write:{ignoreOrigin:!0}}})],D.prototype,"style",null),(0,n._)([(0,a.Cb)({readOnly:!0})],D.prototype,"fullExtent",null),(0,n._)([(0,a.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],D.prototype,"opacity",void 0),(0,n._)([(0,a.Cb)({type:["show","hide"]})],D.prototype,"listMode",void 0),(0,n._)([(0,a.Cb)({type:w.Z.ofType(v),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],D.prototype,"dimensions",null),(0,n._)([(0,S.c)("web-scene","dimensions")],D.prototype,"writeDimensions",null),D=(0,n._)([(0,y.j)("esri.layers.DimensionLayer")],D);const k=D}}]);
//# sourceMappingURL=47406.e8924e14.chunk.js.map