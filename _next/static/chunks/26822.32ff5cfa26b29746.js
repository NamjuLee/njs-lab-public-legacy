"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26822],{37333:function(e,t,r){var n,i,o,a,s,l,p,d,u,y,c,h,f,_;r.d(t,{Ks:function(){return o},LM:function(){return s},Mm:function(){return p},NM:function(){return l},Wf:function(){return a},jC:function(){return i},r0:function(){return n}}),(d=n||(n={}))[d.Regular=0]="Regular",d[d.Provenance=1]="Provenance",d[d.Document=2]="Document",(u=i||(i={}))[u.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",u[u.esriFieldTypeInteger=1]="esriFieldTypeInteger",u[u.esriFieldTypeSingle=2]="esriFieldTypeSingle",u[u.esriFieldTypeDouble=3]="esriFieldTypeDouble",u[u.esriFieldTypeString=4]="esriFieldTypeString",u[u.esriFieldTypeDate=5]="esriFieldTypeDate",u[u.esriFieldTypeOID=6]="esriFieldTypeOID",u[u.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",u[u.esriFieldTypeBlob=8]="esriFieldTypeBlob",u[u.esriFieldTypeRaster=9]="esriFieldTypeRaster",u[u.esriFieldTypeGUID=10]="esriFieldTypeGUID",u[u.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",u[u.esriFieldTypeXML=12]="esriFieldTypeXML",u[u.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",u[u.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",u[u.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",u[u.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset",(y=o||(o={}))[y.esriGeometryNull=0]="esriGeometryNull",y[y.esriGeometryPoint=1]="esriGeometryPoint",y[y.esriGeometryMultipoint=2]="esriGeometryMultipoint",y[y.esriGeometryPolyline=3]="esriGeometryPolyline",y[y.esriGeometryPolygon=4]="esriGeometryPolygon",y[y.esriGeometryEnvelope=5]="esriGeometryEnvelope",y[y.esriGeometryAny=6]="esriGeometryAny",y[y.esriGeometryMultiPatch=7]="esriGeometryMultiPatch",(c=a||(a={}))[c.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",c[c.esriUUIDESRI=1]="esriUUIDESRI",c[c.esriUUIDRFC4122=2]="esriUUIDRFC4122",(h=s||(s={}))[h.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",h[h.esriTypeEntity=1]="esriTypeEntity",h[h.esriTypeRelationship=2]="esriTypeRelationship",h[h.esriTypeBoth=4]="esriTypeBoth",(f=l||(l={}))[f.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",f[f.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",f[f.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",f[f.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",f[f.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",f[f.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",f[f.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",f[f.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",f[f.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",f[f.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension",f[f.esriGraphPropertyProvenanceInstanceId=10]="esriGraphPropertyProvenanceInstanceId",f[f.esriGraphPropertyProvenanceSourceType=11]="esriGraphPropertyProvenanceSourceType",f[f.esriGraphPropertyProvenanceSourceName=12]="esriGraphPropertyProvenanceSourceName",f[f.esriGraphPropertyProvenanceSource=13]="esriGraphPropertyProvenanceSource",f[f.esriGraphPropertyProvenanceComment=14]="esriGraphPropertyProvenanceComment",f[f.esriGraphPropertyProvenanceTypeName=15]="esriGraphPropertyProvenanceTypeName",f[f.esriGraphPropertyProvenancePropertyName=16]="esriGraphPropertyProvenancePropertyName",(_=p||(p={}))[_.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",_[_.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",_[_.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty"},54274:function(e,t,r){let n;r.d(t,{$G:function(){return s}});var i=r(99547),o=r(37180);let a="esri/rest/knowledgeGraph/wasmInterface/";async function s(){return n||(n=l((0,o.Z)("wasm-simd")))}async function l(e){if(e){let{default:e}=await r.e(31266).then(r.bind(r,31266)).then(e=>e.a);return e({locateFile:e=>(0,i.V)(a+e)})}let{default:t}=await r.e(54043).then(r.bind(r,54043)).then(e=>e.a);return t({locateFile:e=>(0,i.V)(a+e)})}},26822:function(e,t,r){r.r(t),r.d(t,{_fetchWrapper:function(){return eS},executeApplyEdits:function(){return ev},executeQuery:function(){return eb},executeQueryStreaming:function(){return eE},executeSearch:function(){return eT},executeSearchStreaming:function(){return eG},fetchKnowledgeGraph:function(){return eI},kgRestServices:function(){return em},refreshDataModel:function(){return eR},refreshServiceDefinition:function(){return eC}}),r(55066);var n,i,o,a,s,l,p,d,u=r(94596),y=r(54748),c=r(94605),h=r(65223),f=r(86641),_=r(94761),g=r(89312);r(37180),r(3457);var w=r(64186);let m=class extends _.Z{constructor(e){super(e),this.headerKeys=[],this.outSpatialReference=null,this.exceededTransferLimit=!1}};(0,f._)([(0,g.Cb)()],m.prototype,"headerKeys",void 0),(0,f._)([(0,g.Cb)()],m.prototype,"outSpatialReference",void 0),(0,f._)([(0,g.Cb)()],m.prototype,"exceededTransferLimit",void 0);let v=m=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.GraphQueryResultHeader")],m),b=class extends _.Z{constructor(e){super(e),this.resultRows=[],this.resultHeader=new v}};(0,f._)([(0,g.Cb)()],b.prototype,"resultRows",void 0),(0,f._)([(0,g.Cb)()],b.prototype,"resultHeader",void 0);let E=b=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.GraphQueryResult")],b),T=class extends _.Z{constructor(e){super(e),this.resultRowsStream=new ReadableStream,this.resultHeader=new v}};(0,f._)([(0,g.Cb)()],T.prototype,"resultRowsStream",void 0),(0,f._)([(0,g.Cb)()],T.prototype,"resultHeader",void 0);let G=T=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.GraphQueryStreamingResult")],T);var I=r(689),R=r(36502);let C=class extends I.wq{constructor(e){super(e),this.name=null,this.unique=null,this.ascending=null,this.description=null,this.fieldNames=null}};(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],C.prototype,"name",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],C.prototype,"unique",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],C.prototype,"ascending",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],C.prototype,"description",void 0),(0,f._)([(0,g.Cb)({type:[String],json:{write:!0}})],C.prototype,"fieldNames",void 0);let S=C=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.FieldIndex")],C),P=class extends I.wq{constructor(e){super(e),this.name=null,this.alias=null,this.fieldType=null,this.geometryType=null,this.hasM=null,this.hasZ=null,this.nullable=null,this.editable=null,this.required=null,this.defaultVisibility=null,this.systemMaintained=null,this.role=null,this.defaultValue=null}};(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],P.prototype,"name",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],P.prototype,"alias",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],P.prototype,"fieldType",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],P.prototype,"geometryType",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"hasM",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"hasZ",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"nullable",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"editable",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"required",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"defaultVisibility",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"systemMaintained",void 0),(0,f._)([(0,g.Cb)()],P.prototype,"role",void 0),(0,f._)([(0,g.Cb)({json:{write:!0}})],P.prototype,"defaultValue",void 0);let M=P=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.GraphProperty")],P),x=class extends I.wq{constructor(e){super(e),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null,this.type=null}};(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],x.prototype,"name",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],x.prototype,"alias",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],x.prototype,"role",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],x.prototype,"strict",void 0),(0,f._)([(0,g.Cb)({type:[M],json:{write:!0}})],x.prototype,"properties",void 0),(0,f._)([(0,g.Cb)({type:[S],json:{write:!0}})],x.prototype,"fieldIndexes",void 0);let k=x=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.GraphObjectType")],x),j=class extends k{constructor(e){super(e),this.type="entity"}},O=j=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.EntityType")],j),Z=class extends k{constructor(e){super(e),this.endPoints=[],this.type="relationship"}};(0,f._)([(0,g.Cb)()],Z.prototype,"endPoints",void 0);let F=Z=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.RelationshipType")],Z),N=class extends I.wq{constructor(e){super(e),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null,this.metaEntityTypes=null}};(0,f._)([(0,g.Cb)({type:Date,json:{type:Number,write:{writer:(e,t)=>{t.timestamp=e?.getTime()}}}})],N.prototype,"timestamp",void 0),(0,f._)([(0,g.Cb)({type:R.Z,json:{write:!0}})],N.prototype,"spatialReference",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],N.prototype,"strict",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],N.prototype,"objectIdField",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],N.prototype,"globalIdField",void 0),(0,f._)([(0,g.Cb)()],N.prototype,"arcgisManaged",void 0),(0,f._)([(0,g.Cb)()],N.prototype,"identifierInfo",void 0),(0,f._)([(0,g.Cb)()],N.prototype,"searchIndexes",void 0),(0,f._)([(0,g.Cb)({type:[O],json:{write:!0}})],N.prototype,"entityTypes",void 0),(0,f._)([(0,g.Cb)({type:[F],json:{write:!0}})],N.prototype,"relationshipTypes",void 0),(0,f._)([(0,g.Cb)({type:[O],json:{write:!0}})],N.prototype,"metaEntityTypes",void 0);let D=N=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.DataModel")],N),L=class extends I.wq{constructor(e){super(e),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1,this.supportsProvenance=!1}};(0,f._)([(0,g.Cb)({type:[String],json:{write:!0}})],L.prototype,"capabilities",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"supportsSearch",void 0),(0,f._)([(0,g.Cb)({type:[String],json:{write:!0}})],L.prototype,"supportedQueryFormats",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"allowGeometryUpdates",void 0),(0,f._)([(0,g.Cb)({type:Number,json:{write:!0}})],L.prototype,"searchMaxRecordCount",void 0),(0,f._)([(0,g.Cb)({type:Object,json:{write:!0}})],L.prototype,"serviceCapabilities",void 0),(0,f._)([(0,g.Cb)({type:Number,json:{write:!0}})],L.prototype,"maxRecordCount",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],L.prototype,"description",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],L.prototype,"copyrightText",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],L.prototype,"units",void 0),(0,f._)([(0,g.Cb)({type:R.Z,json:{write:!0}})],L.prototype,"spatialReference",void 0),(0,f._)([(0,g.Cb)({type:Number,json:{write:!0}})],L.prototype,"currentVersion",void 0),(0,f._)([(0,g.Cb)({type:Object,json:{write:!0}})],L.prototype,"dateFieldsTimeReference",void 0),(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],L.prototype,"serviceItemId",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"supportsDocuments",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"dataEditingNotSupported",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"schemaEditingNotSupported",void 0),(0,f._)([(0,g.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"supportsProvenance",void 0);let A=L=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.ServiceDefinition")],L),z=class extends I.wq{constructor(e){super(e),this.dataModel=null,this.serviceDefinition=null}};(0,f._)([(0,g.Cb)({type:String,json:{write:!0}})],z.prototype,"url",void 0),(0,f._)([(0,g.Cb)({type:D,json:{write:!0}})],z.prototype,"dataModel",void 0),(0,f._)([(0,g.Cb)({type:A,json:{write:!0}})],z.prototype,"serviceDefinition",void 0);let q=z=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.KnowledgeGraph")],z);var U=r(54274),Y=r(18736),H=r(33876),Q=r(54001),B=r(58144);(n=s||(s={}))[n.OBJECT=0]="OBJECT",n[n.ENTITY=1]="ENTITY",n[n.RELATIONSHIP=2]="RELATIONSHIP",n[n.PATH=3]="PATH",n[n.ARRAY=4]="ARRAY",(i=l||(l={}))[i.view=0]="view",i[i.edit=1]="edit",(o=p||(p={}))[o.exclude=0]="exclude",o[o.include=1]="include";var V=r(90389);function K(e,t){let r=new t.ArrayValue;return r.deleteLater(),e.forEach(e=>{r.add_value(J(e,t))}),r}function W(e,t){let r=new t.ObjectValue;for(let[n,i]of(r.deleteLater(),Object.entries(e)))r.set_key_value(n,J(i,t));return r}function $(e,t){if(e instanceof Y.Z)return function(e,t){let r=new t.GeometryValue;r.deleteLater(),r.geometry_type=r.geometry_type=t.esriGeometryType.esriGeometryMultipoint,r.has_z=e.hasZ,r.has_m=e.hasM;let n=[],i=[];i[0]=e.points.length;let o=0;return e.points.forEach(e=>{e.forEach(e=>{n[o]=e,o++})}),r.coords=new Float64Array(n),r.lengths=new Uint32Array(i),r}(e,t);if(e instanceof H.Z)return function(e,t){let r=new t.GeometryValue;r.deleteLater(),r.geometry_type=t.esriGeometryType.esriGeometryPoint,r.has_z=e.hasZ,r.has_m=e.hasM;let n=[],i=[];i[0]=1,n[0]=e.x,n[1]=e.y;let o=2;return e.hasZ&&(n[o]=e.z,o++),e.hasM&&(n[o]=e.m,o++),r.coords=new Float64Array(n),r.lengths=new Uint32Array(i),r}(e,t);if(e instanceof B.Z||e instanceof Q.Z)return function(e,t){let r=new t.GeometryValue;r.deleteLater(),r.has_z=e.hasZ,r.has_m=e.hasM;let n=[],i=[],o=[];e instanceof B.Z?(r.geometry_type=t.esriGeometryType.esriGeometryPolyline,o=e.paths):e instanceof Q.Z&&(r.geometry_type=t.esriGeometryType.esriGeometryPolygon,o=e.rings);let a=0,s=0;return o.forEach(e=>{let t=0;e.forEach(e=>{t++,e.forEach(e=>{n[s]=e,s++})}),i[a]=t,a++}),r.coords=new Float64Array(n),r.lengths=new Uint32Array(i),r}(e,t);throw new c.Z("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:e})}function J(e,t){if(null==e)return"";if("object"!=typeof e||e instanceof Date)return e;if(e instanceof V.Z)return $(e,t);if(Array.isArray(e)){let r=new t.ArrayValue;return r.deleteLater(),e.forEach(e=>{r.add_value(J(e,t))}),r}return W(e,t)}var X=r(18240),ee=r(69038);function et(e,t){if(!e.typeName)throw new c.Z("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(e instanceof X.Z){let r=new t.EntityValue;for(let[n,i]of(r.deleteLater(),r.type_name=e.typeName,Object.entries(e.properties)))r.set_key_value(n,er(i,t));return e.id&&r.set_id(e.id),r}if(e instanceof ee.Z){let r=new t.RelationshipValue;for(let[n,i]of(r.deleteLater(),r.type_name=e.typeName,Object.entries(e.properties)))r.set_key_value(n,er(i,t));return e.id&&r.set_id(e.id),e.originId&&e.destinationId&&r.set_related_entity_ids(e.originId,e.destinationId),r}throw new c.Z("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function er(e,t){return null==e?null:"object"!=typeof e||e instanceof Date?e:e instanceof V.Z?$(e,t):null}let en=class extends _.Z{constructor(e){super(e),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map}};(0,f._)([(0,g.Cb)()],en.prototype,"name",void 0),(0,f._)([(0,g.Cb)()],en.prototype,"supportedCategory",void 0),(0,f._)([(0,g.Cb)()],en.prototype,"analyzers",void 0),(0,f._)([(0,g.Cb)()],en.prototype,"searchProperties",void 0);let ei=en=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.SearchIndex")],en);var eo=r(37333);function ea(e){return{name:e.name,alias:e.alias,role:eo.r0[e.role.value]?eo.r0[e.role.value]:null,strict:e.strict,properties:function(e){let t=[];for(let n=0;n<e.size();n++){var r;t.push(((r=e.get(n)).deleteLater(),new M({alias:r.alias,name:r.name,fieldType:eo.jC[r.field_type.value]?eo.jC[r.field_type.value]:null,geometryType:eo.Ks[r.geometry_type.value]?eo.Ks[r.geometry_type.value]:null,hasM:r.has_m,hasZ:r.has_z,nullable:r.nullable,editable:r.editable,required:r.required,defaultVisibility:r.default_visibility,systemMaintained:r.system_maintained,role:eo.NM[r.role.value],defaultValue:r.default_value})))}return e.delete(),t}(e.properties),fieldIndexes:function(e){let t=[];for(let n=0;n<e.size();n++){var r;t.push(((r=e.get(n)).deleteLater(),new S({name:r.name,unique:r.unique,ascending:r.ascending,description:r.description,fieldNames:function(e){let t=[];for(let r=0;r<e.size();r++)t.push(e.get(r));return e.delete(),t}(r.fields)})))}return e.delete(),t}(e.field_indexes)}}function es(e){let t=[];for(let n=0;n<e.size();n++){var r;t.push(((r=e.get(n)).deleteLater(),new O(ea(r))))}return e.delete(),t}r(19847);var el=r(34083),ep=r(40480);function ed(e,t){let r={spatialReference:t},n=eu(e,r),i=e.lengths,o=e.coords,a="";if(e.geometry_type.value===d.ESRI_GEOMETRY_POLYGON)a="rings";else{if(e.geometry_type.value!==d.ESRI_GEOMETRY_POLYLINE)throw new c.Z("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");a="paths"}r[a]=[];let s=0;return i.forEach(e=>{let t=[];for(let r=0;r<e;r++){let e=[];for(let t=0;t<n;t++)e[t]=o[s],s++;t.push(e)}r[a].push(t)}),r}function eu(e,t){let r=2;return e.has_z?(t.hasZ=e.has_z,r++):t.hasZ=!1,e.has_m?(t.hasM=e.has_m,r++):t.hasM=!1,r}(a=d||(d={}))[a.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",a[a.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",a[a.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",a[a.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",a[a.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",a[a.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",a[a.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",a[a.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH";let ey=()=>h.Z.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),ec=(e,t,r)=>{if(null==e)return null;if("object"!=typeof e||"getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case d.ESRI_GEOMETRY_POINT:return function(e,t){let r={spatialReference:t},n=2;eu(e,r);let i=e.coords;return r.x=i[0],r.y=i[1],e.has_z&&(r.z=i[n],n++),e.has_m&&(r.m=i[n]),new H.Z(r)}(e,r);case d.ESRI_GEOMETRY_MULTIPOINT:return function(e,t){let r={spatialReference:t},n=eu(e,r),i=e.lengths,o=e.coords,a=i[0];r.points=[];let s=0;for(let e=0;e<a;e++){let e=[];for(let t=0;t<n;t++)e[t]=o[s],s++;r.points.push(e)}return new Y.Z(r)}(e,r);case d.ESRI_GEOMETRY_POLYLINE:return new B.Z(ed(e,r));case d.ESRI_GEOMETRY_POLYGON:return new Q.Z(ed(e,r));case d.ESRI_GEOMETRY_ENVELOPE:case d.ESRI_GEOMETRY_MULTI_PATCH:return ey().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case d.ESRI_GEOMETRY_NULL:case d.ESRI_GEOMETRY_ANY:default:return ey().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in e))return ey().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(e.object_value_type.value){case s.OBJECT:return new el.Z(ef(e,t,r));case s.ENTITY:return eh(e,t,r);case s.RELATIONSHIP:return e_(e,t,r);case s.PATH:return function(e,t,r){let n=e.entity_count(),i=e.relationship_count(),o=[];for(let a=0;a<n;a++)o.push(eh(e.get_entity_at(a),t,r)),a<i&&o.push(e_(e.get_relationship_at(a),t,r));return new ep.Z({path:o})}(e,t,r);case s.ARRAY:return function(e,t,r){let n=[],i=e.count();for(let o=0;o<i;o++){let i=e.get_value_at(o);n.push(ec(i,t,r))}return n}(e,t,r);default:return ey().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}};function eh(e,t,r){let n=e.type_name,i=ef(e,t,r),o=e.get_id();return new X.Z(Object.assign({typeName:n,id:o},i))}function ef(e,t,r){let n={},i=e.key_count();for(let o=0;o<i;o++)n[e.get_key_at(o)]=ec(e.get_value_at(o),t,r);return{properties:n}}function e_(e,t,r){let n=e.type_name,i=ef(e,t,r);return new ee.Z(Object.assign({typeName:n,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},i))}let eg=class extends _.Z{constructor(e){super(e),this.hasError=null,this.error=null,this.editResults=[]}};(0,f._)([(0,g.Cb)()],eg.prototype,"hasError",void 0),(0,f._)([(0,g.Cb)()],eg.prototype,"error",void 0),(0,f._)([(0,g.Cb)()],eg.prototype,"editResults",void 0);let ew=eg=(0,f._)([(0,w.j)("esri.rest.knowledgeGraph.GraphApplyEditsResult")],eg),em={fetchKnowledgeGraph:async e=>{let t=new q({url:e}),r=[];return r.push(eR(t)),r.push(eC(t)),await Promise.all(r),t},refreshDataModel:async e=>{e.dataModel=await eD(e)},refreshServiceDefinition:async e=>{let t=(await (0,y.Z)(e.url,{query:{f:"json"}})).data;return t.capabilities=t?.capabilities?.split(","),t.supportedQueryFormats=t?.supportedQueryFormats?.split(","),e.serviceDefinition=new A(t),e.serviceDefinition},executeQueryStreaming:async(e,t,r)=>{let n=`${e.url}/graph/query`;await eP(e);let i=await eO(n,r);if(!e.serviceDefinition?.supportsProvenance&&"include"===t.provenanceBehavior)throw new c.Z("knowledge-graph:provenance-not-supported","The Knowledge Graph Service definition indicated that provenance is not supported");i.data.body=await ek(t,e);let o=await eS(i.data.url,i.data);if(e.dataModel){let t=await eN(o,e.dataModel);return new G({resultRowsStream:t.readableStream,resultHeader:t.resultHeader})}throw new c.Z("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},executeApplyEdits:async(e,t,r)=>{if(e.serviceDefinition?.dataEditingNotSupported)throw new c.Z("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");let n=`${e.url}/graph/applyEdits`;await eP(e);let i=await eO(n,r);return i.data.body=await ex(t,e),eZ(await eS(i.data.url,i.data))},executeQuery:async(e,t,r)=>{let n=`${e.url}/graph/query`,i=await (0,y.Z)(n,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:t.openCypherQuery,...r?.query},signal:r?.signal,timeout:r?.timeout}),o=i.getHeader?.("content-type"),a=i.data;if(o?.includes("application/x-protobuf")){let t=new(await (0,U.$G)()).GraphQueryDecoder;if(t.deleteLater(),e.dataModel){let r=eF(t,a,e.dataModel);return new E({resultRows:r.resultRows,resultHeader:r.resultHeader})}throw new c.Z("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new c.Z("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:o,data:i.data})},executeSearch:async(e,t,r)=>{let n=t.typeCategoryFilter,i=`${e.url}/graph/search`,o=await (0,y.Z)(i,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${t.searchQuery}"`,typeCategoryFilter:n,...r?.query},signal:r?.signal,timeout:r?.timeout}),a=o.getHeader?.("content-type"),s=o.data;if(a?.includes("application/x-protobuf")){let t=new(await (0,U.$G)()).GraphQueryDecoder;if(t.deleteLater(),e.dataModel){let r=eF(t,s,e.dataModel);return new E({resultRows:r.resultRows,resultHeader:r.resultHeader})}throw new c.Z("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new c.Z("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:a,data:o.data})},executeSearchStreaming:async(e,t,r)=>{let n=`${e.url}/graph/search`;await eP(e);let i=await eO(n,r);i.data.body=await ej(t);let o=await eS(i.data.url,i.data);if(e.dataModel){let t=await eN(o,e.dataModel);return new G({resultRowsStream:t.readableStream,resultHeader:t.resultHeader})}throw new c.Z("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},_fetchWrapper:async(e,t)=>fetch(e,t)};async function ev(e,t,r){return em.executeApplyEdits(e,t,r)}async function eb(e,t,r){return em.executeQuery(e,t,r)}async function eE(e,t,r){return em.executeQueryStreaming(e,t,r)}async function eT(e,t,r){return em.executeSearch(e,t,r)}async function eG(e,t,r){return em.executeSearchStreaming(e,t,r)}async function eI(e){return em.fetchKnowledgeGraph(e)}async function eR(e){return em.refreshDataModel(e)}async function eC(e){return em.refreshServiceDefinition(e)}async function eS(e,t){return em._fetchWrapper(e,t)}async function eP(e){u.id?.findCredential(e.url)||(e.dataModel?await eD(e):await eR(e))}function eM(e,t,r){if(0!==e.error_code)throw new c.Z(t,r,{errorCode:e.error_code,errorMessage:e.error_message})}async function ex(e,t){var r;if(t.dataModel||await eR(t),!t.dataModel)throw new c.Z("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");let n=await (0,U.$G)(),i=!!e.options?.cascadeDelete,o=new n.GraphApplyEditsEncoder(n.SpatialReferenceUtil.WGS84(),e.options?.inputQuantizationParameters?{xy_resolution:(r=e.options?.inputQuantizationParameters).xyResolution,x_false_origin:r.xFalseOrigin,y_false_origin:r.yFalseOrigin,z_resolution:r.zResolution,z_false_origin:r.zFalseOrigin,m_resolution:r.mResolution,m_false_origin:r.mFalseOrigin}:n.InputQuantizationUtil.WGS84_lossless());o.deleteLater(),o.cascade_delete=i;try{let t;e.entityAdds?.forEach(e=>{t=o.add_entity(et(e,n)),eM(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")}),e.relationshipAdds?.forEach(e=>{if(!e.originId||!e.destinationId)throw new c.Z("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");t=o.add_relationship(et(e,n)),eM(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")}),e.entityUpdates?.forEach(e=>{if(!e.id)throw new c.Z("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_entity(et(e,n)),eM(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")}),e.relationshipUpdates?.forEach(e=>{if(!e.id)throw new c.Z("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_relationship(et(e,n)),eM(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")}),e.entityDeletes?.forEach(e=>{if(!e.typeName)throw new c.Z("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");let t=o.make_delete_helper(e.typeName,!0);t.deleteLater(),e.ids?.forEach(e=>{t.delete_by_id(e)})}),e.relationshipDeletes?.forEach(e=>{if(!e.typeName)throw new c.Z("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");let t=o.make_delete_helper(e.typeName,!1);e.ids?.forEach(e=>{t.delete_by_id(e)})}),o.encode()}catch(e){throw new c.Z("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:e})}let a=o.get_encoding_result();return eM(a.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(a.get_byte_buffer())}async function ek(e,t){var r,n;let i=await (0,U.$G)(),o=new i.GraphQueryRequestEncoder;if(o.deleteLater(),e.outputSpatialReference?o.output_spatial_reference={wkid:e.outputSpatialReference.wkid,latestWkid:e.outputSpatialReference.latestWkid,vcsWkid:e.outputSpatialReference.vcsWkid,latestVcsWkid:e.outputSpatialReference.latestVcsWkid,wkt:e.outputSpatialReference.wkt??""}:o.output_spatial_reference=i.SpatialReferenceUtil.WGS84(),o.open_cypher_query=e.openCypherQuery,e.bindParameters)for(let[t,r]of Object.entries(e.bindParameters))null==r?o.set_param_key_value(t,""):"object"!=typeof r||r instanceof Date?o.set_param_key_value(t,r):r instanceof V.Z?o.set_param_key_value(t,$(r,i)):Array.isArray(r)?o.set_param_key_value(t,K(r,i)):o.set_param_key_value(t,W(r,i));if(e.bindGeometryQuantizationParameters)r=e.bindGeometryQuantizationParameters,o.input_quantization_parameters={xy_resolution:r.xyResolution,x_false_origin:r.xFalseOrigin,y_false_origin:r.yFalseOrigin,z_resolution:r.zResolution,z_false_origin:r.zFalseOrigin,m_resolution:r.mResolution,m_false_origin:r.mFalseOrigin};else{if(t.dataModel||await eR(t),4326!==t.dataModel?.spatialReference?.wkid)throw new c.Z("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");o.input_quantization_parameters=i.InputQuantizationUtil.WGS84_lossless()}e.outputQuantizationParameters&&function(e,t,r){if(!e.extent)throw new c.Z("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",e.extent);if(!e.quantizeMode)throw new c.Z("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",e.quantizeMode);if(!e.tolerance)throw new c.Z("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",e.quantizeMode);t.output_quantization_parameters={extent:{xmax:e.extent.xmax,ymax:e.extent.ymax,xmin:e.extent.xmin,ymin:e.extent.ymin},quantize_mode:r.esriQuantizeMode[e.quantizeMode],tolerance:e.tolerance}}(e.outputQuantizationParameters,o,i),e.provenanceBehavior&&(n=e.provenanceBehavior,o.provenance_behavior={value:p[n]});try{o.encode()}catch(e){throw new c.Z("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:e})}let a=o.get_encoding_result();if(0!==a.error.error_code)throw new c.Z("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:a.error.error_code,errorMessage:a.error.error_message});return structuredClone(a.get_byte_buffer())}async function ej(e){let t=await (0,U.$G)(),r=new t.GraphSearchRequestEncoder;if(r.deleteLater(),r.search_query=e.searchQuery,r.type_category_filter=t.esriNamedTypeCategory[e.typeCategoryFilter],!0===e.returnSearchContext&&(r.return_search_context=e.returnSearchContext),null!=e.start&&e.start>0&&(r.start_index=e.start),null!=e.num&&(r.max_num_results=e.num),null!=e.idsFilter&&Array.isArray(e.idsFilter)&&e.idsFilter.length>0)try{r.set_ids_filter(K(e.idsFilter,t))}catch(e){throw new c.Z("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:e})}e.namedTypesFilter?.forEach(e=>{r.add_named_type_filter(e)});try{r.encode()}catch(e){throw new c.Z("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:e})}let n=r.get_encoding_result();if(0!==n.error.error_code)throw new c.Z("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:n.error.error_code,errorMessage:n.error.error_message});return structuredClone(n.get_byte_buffer())}async function eO(e,t){return(0,y.Z)(e,{responseType:"native-request-init",method:"post",query:{f:"pbf",...t?.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:t?.signal,timeout:t?.timeout})}async function eZ(e){let t=e.headers.get("content-type");if(t?.includes("application/x-protobuf")){let t=await e.arrayBuffer(),r=new(await (0,U.$G)()).GraphApplyEditsDecoder;return r.deleteLater(),r.decode(new Uint8Array(t)),function(e){let t=e.has_error(),r=new ew({hasError:t,error:t?{errorCode:e.error.error_code,errorMessage:e.error.error_message}:null}),n=e.get_edit_results_count();for(let t=0;t<n;t++){let n=e.get_edit_results_at(t),i=e.get_edit_results_type_name_at(t),o=[],a=[],s=[],l=n.get_add_results_count(),p=n.get_update_results_count(),d=n.get_delete_results_count();for(let e=0;e<l;e++){let t=n.get_add_result_at(e);o.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}for(let e=0;e<p;e++){let t=n.get_update_result_at(e);a.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}for(let e=0;e<d;e++){let t=n.get_delete_result_at(e);s.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}r.editResults.push({typeName:i,adds:o,updates:a,deletes:s})}return r}(r)}throw new c.Z("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:t,data:e.text()})}function eF(e,t,r,n){e.push_buffer(new Uint8Array(t));let i=[],o,a,s=0;for(;e.next_row();){o&&a||(a=(o=n??function(e){let t=[];for(let r=0;r<e.get_header_keys().size();r++)t.push(e.get_header_keys().get(r));return new v({headerKeys:t,outSpatialReference:new R.Z(e.get_out_sr()),exceededTransferLimit:e.exceeded_transfer_limit()})}(e)).outSpatialReference??new R.Z({wkid:4326})),s||(s=e.get_header_keys().size());let t=Array(s);for(let n=0;n<s;n++){let i=e.get_value(n);t[n]=ec(i,r,a)}i.push(t)}if(e.has_error())throw new c.Z("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - inner row decoding",{errorCode:e.error.error_code,errorMessage:e.error.error_message});return{resultHeader:o,resultRows:i}}async function eN(e,t){let r=e.headers.get("content-type");if(e.headers.get("content-length")&&h.Z.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),r?.includes("application/x-protobuf")){let r,n,i;let o=e.body?.getReader(),a=new(await (0,U.$G)()).GraphQueryDecoder;a.deleteLater();let s=new Promise((e,t)=>{n=e,i=t}),l=!1;return{readableStream:new ReadableStream({async start(e){try{return function s(){return o?.read().then(({done:p,value:d})=>{try{if(p){let t;if(a.has_error()?t=new c.Z("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - query stream done",{errorCode:a.error.error_code,errorMessage:a.error.error_message}):l||n(new v),o.releaseLock(),t)throw e.error(t),i(t),t;return void e.close()}let u=eF(a,d,t,r),y=u.resultRows;return y.length>0&&e.enqueue(y),!r&&u.resultHeader&&(r=u.resultHeader,n(u.resultHeader),l=!0),s()}catch(e){throw h.Z.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(e),i(e),new c.Z("knowledge-graph:unexpected-server-response","Error inside streaming data return parsing",{error:e})}})}()}catch(t){o?.releaseLock(),e.error(new c.Z("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:t})),e.close()}}}),resultHeader:await s}}throw new c.Z("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:r,data:e.text()})}async function eD(e){let t=`${e.url}/dataModel/queryDataModel`,r=await (0,y.Z)(t,{responseType:"array-buffer",query:{f:"pbf"}}),n=r.getHeader?.("content-type"),i=r.data;if(n?.includes("application/x-protobuf")){let e=(await (0,U.$G)()).decode_data_model_from_protocol_buffer(new Uint8Array(i));if(!e)throw new c.Z("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return e.deleteLater(),new D({timestamp:e.timestamp,spatialReference:new R.Z(e.spatial_reference),strict:e.strict,objectIdField:e.objectid_property,globalIdField:e.globalid_property,arcgisManaged:e.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:eo.Mm[e.identifier_info?.identifier_mapping_info?.identifier_info_type?.value],databaseNativeIdentifier:e.identifier_info?.identifier_mapping_info?.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:e.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:eo.Wf[e.identifier_info?.identifier_generation_info?.uuid_method_hint?.value]}},searchIndexes:function(e){let t=[];for(let r=0;r<e.size();r++){let r=new ei,n=e.get(0);r.name=n.name,r.supportedCategory=eo.LM[n.supported_category.value];let i=n.analyzers.size();for(let e=0;e<i;e++)r.analyzers.push({name:n.analyzers.get(e).name});n.analyzers.delete();for(let e=0;e<n.search_properties.keys().size();e++){let t=n.search_properties.keys().get(e),i=n.search_properties.get(t),o=[];for(let e=0;e<i.property_names.size();e++)o.push(i.property_names.get(e));r.searchProperties.set(t,{propertyNames:o})}t.push(r)}return e.delete(),t}(e.search_indexes),entityTypes:es(e.entity_types),relationshipTypes:function(e){let t=[];for(let r=0;r<e.size();r++)t.push(function(e){e.deleteLater();let t=ea(e),r=[];for(let t=0;t<e.end_points.size();t++){let n=e.end_points.get(t);r.push({originEntityType:n.origin_entity_type,destinationEntityType:n.dest_entity_type})}return e.end_points.delete(),new F(Object.assign({endPoints:r},t))}(e.get(r)));return e.delete(),t}(e.relationship_types),metaEntityTypes:es(e.meta_entity_types)})}throw new c.Z("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:n,data:r.data})}}}]);