"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[58405],{95986:(e,t,i)=>{i.d(t,{y:()=>V});var s=i(27366),r=i(40281),a=i(60354),n=i(10064),o=i(94172),h=i(49861),l=(i(63780),i(25243),i(69912)),p=i(33624),d=i(46784);let u=class extends d.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,h.Cb)({readOnly:!0})],u.prototype,"version",null),u=(0,s._)([(0,l.j)("esri.views.layers.support.ClipArea")],u);const c=u;var g;let y=g=class extends c{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new g({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),y=g=(0,s._)([(0,l.j)("esri.views.layers.support.ClipRect")],y);const v=y;i(59486);var _,w=i(32238),m=i(77981),f=i(53866),b=i(80885);const C={base:w.Z,key:"type",typeMap:{extent:f.Z,polygon:b.Z}};let R=_=class extends c{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new _({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,h.Cb)({types:C,json:{read:m.im,write:!0}})],R.prototype,"geometry",void 0),R=_=(0,s._)([(0,l.j)("esri.views.layers.support.Geometry")],R);const S=R;let P=class extends c{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,h.Cb)({type:[[[Number]]],json:{write:!0}})],P.prototype,"path",void 0),P=(0,s._)([(0,l.j)("esri.views.layers.support.Path")],P);const I=P,k=r.Z.ofType({key:"type",base:null,typeMap:{rect:v,path:I,geometry:S}}),V=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new k,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new n.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([(0,o.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.tX),(0,o.YP)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),o.tX),(0,o.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.tX),(0,o.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.tX),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.tX),(0,o.YP)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),o.tX)]),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this.updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}};return(0,s._)([(0,h.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,h.Cb)({type:k,set(e){const t=(0,a.Z)(e,this._get("clips"),k);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"updating",null),(0,s._)([(0,h.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),t=(0,s._)([(0,l.j)("esri.views.2d.layers.LayerView2D")],t),t}},58405:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var s=i(27366),r=i(40281),a=i(77178),n=i(92026),o=i(94172),h=i(49861),l=(i(63780),i(25243),i(69912)),p=i(40653),d=i(54889),u=i(16406),c=i(44745),g=i(21604),y=i(99821),v=i(70491),_=i(95986),w=i(75391),m=i(34035),f=i(67581);const b=Object.freeze({remove(){},pause(){},resume(){}}),C=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],R={graphic:null,property:null,oldValue:null,newValue:null};function S(e){return e instanceof p.Z||e instanceof d.Z||e instanceof u.Z||e instanceof c.Z||e instanceof g.Z||e instanceof y.Z||e instanceof v.Z}let P=class extends((0,_.y)(f.Z)){constructor(){super(...arguments),this._graphics=new r.Z,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new a.Z({getCollections:()=>(0,n.pC)(this.layer)&&!this.destroyed?[(0,n.pC)(this.layer.routeInfo)?new r.Z([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]:[]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(e=>this._routeItemsChanged(e)),o.nn)}destroy(){var e;this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),null===(e=this._get("_routeItems"))||void 0===e||e.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(e){return this._graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}highlight(e){let t;t=S(e)?[this._getNetworkFeatureUid(e)]:function(e){return Array.isArray(e)&&e.length&&S(e[0])}(e)?e.map((e=>this._getNetworkFeatureUid(e))):function(e){return r.Z.isCollection(e)&&e.length&&S(e.getItemAt(0))}(e)?e.map((e=>this._getNetworkFeatureUid(e))).toArray():[e.uid];const i=t.filter(n.pC);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):b}async hitTest(e,t){if(this.suspended)return null;const i=this._graphicsView.hitTest(e).filter(n.pC).map((e=>this._networkGraphicMap.get(e)));if(!i.length)return null;const{layer:s}=this;return i.reverse().map((t=>({type:"route",layer:s,mapPoint:e,networkFeature:t})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e)}viewChange(){this._graphicsView.viewChange()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=new w.Z(e.featuresTilingScheme);this._graphicsView=new m.Z({container:t,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),view:e}),this.container.addChild(t),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return C.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map((e=>{const t=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(t),t})));for(const t of e.removed)this.handles.remove(t)}if(e.added.length){this._graphics.addMany(e.added.map((e=>{const t=this._createGraphic(e);return(0,n.Wi)(t.symbol)?null:(this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),t)})).filter(n.pC));for(const t of e.added)this.handles.add([(0,o.YP)((()=>t.geometry),((e,i)=>{this._updateGraphic(t,"geometry",e,i)})),(0,o.YP)((()=>t.symbol),((e,i)=>{this._updateGraphic(t,"symbol",e,i)}))],t);this._graphics.sort(((e,t)=>this._getDrawOrder(e)-this._getDrawOrder(t)))}}_updateGraphic(e,t,i,s){if(!this._networkFeatureMap.has(e)){const t=this._createGraphic(e);return this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),void this._graphics.add(t)}const r=this._networkFeatureMap.get(e);r[t]=i,R.graphic=r,R.property=t,R.oldValue=s,R.newValue=i,this._graphicsView.graphicUpdateHandler(R)}_updateHighlight(){const e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e)}};(0,s._)([(0,h.Cb)()],P.prototype,"_graphics",void 0),(0,s._)([(0,h.Cb)()],P.prototype,"_routeItems",null),P=(0,s._)([(0,l.j)("esri.views.2d.layers.RouteLayerView2D")],P);const I=P},75391:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(80613),r=i(82022);class a extends r.Z{renderChildren(e){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var s=i(27366),r=i(85015),a=i(91505),n=i(41691),o=i(79056),h=i(32718),l=i(92026),p=i(67426),d=i(49861),u=(i(63780),i(25243),i(69912));let c=class extends((0,n.p)((0,o.IG)((0,p.v)(a.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";h.Z.getLogger(this.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(t,"')"),e)}}))}get fullOpacity(){return(0,l.Pt)(this.get("layer.opacity"),1)*(0,l.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],c.prototype,"visible",null),(0,s._)([(0,d.Cb)()],c.prototype,"view",void 0),c=(0,s._)([(0,u.j)("esri.views.layers.LayerView")],c);const g=c}}]);
//# sourceMappingURL=58405.0b0cd573.chunk.js.map