"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[54613],{13491:(t,e,n)=>{n.d(e,{Q:()=>h});var s=n(63780),i=n(92026),r=n(27546),o=n(36231);class h{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=u,this._compareMinY=c,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),y.prune(),B.prune(),M.prune(),b.prune()}all(t){this._all(this._data,t)}search(t,e){let n=this._data;const s=this._toBBox;if(p(t,n))for(y.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],o=n.leaf?s(r):r;p(t,o)&&(n.leaf?e(r):g(t,o)?this._all(r,e):y.push(r))}n=y.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!p(t,e))return!1;for(y.clear();e;){for(let s=0,i=e.children.length;s<i;s++){const i=e.children[s],r=e.leaf?n(i):i;if(p(t,r)){if(e.leaf||g(t,r))return!0;y.push(i)}}e=y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new X([]),this}remove(t){if(!t)return this;let e,n=this._data,r=null,o=0,h=!1;const a=this._toBBox(t);for(M.clear(),b.clear();n||M.length>0;){var l;if(n||(n=(0,i.j0)(M.pop()),r=M.data[M.length-1],o=null!==(l=b.pop())&&void 0!==l?l:0,h=!0),n.leaf&&(e=(0,s.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),M.push(n),this._condense(M),this;h||n.leaf||!g(n,a)?r?(o++,n=r.children[o],h=!1):n=null:(M.push(n),b.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,e){let n=t;for(B.clear();n;){var s;if(!0===n.leaf)for(const t of n.children)e(t);else B.pushArray(n.children);n=null!==(s=B.pop())&&void 0!==s?s:null}}_build(t,e,n,s){const i=n-e+1;let r=this._maxEntries;if(i<=r){const s=new X(t.slice(e,n+1));return a(s,this._toBBox),s}s||(s=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(s-1)));const o=new N([]);o.height=s;const h=Math.ceil(i/r),l=h*Math.ceil(Math.sqrt(r));I(t,e,n,l,this._compareMinX);for(let a=e;a<=n;a+=l){const e=Math.min(a+l-1,n);I(t,a,e,h,this._compareMinY);for(let n=a;n<=e;n+=h){const i=Math.min(n+h-1,e);o.children.push(this._build(t,n,i,s-1))}}return a(o,this._toBBox),o}_chooseSubtree(t,e,n,s){for(;s.push(e),!0!==e.leaf&&s.length-1!==n;){let n,s=1/0,i=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],h=m(o),a=f(t,o)-h;a<i?(i=a,s=h<s?h:s,n=o):a===i&&h<s&&(s=h,n=o)}e=n||e.children[0]}return e}_insert(t,e,n){const s=this._toBBox,i=n?t:s(t);M.clear();const r=this._chooseSubtree(i,this._data,e,M);for(r.children.push(t),d(r,i);e>=0&&M.data[e].children.length>this._maxEntries;)this._split(M,e),e--;this._adjustParentBBoxes(i,M,e)}_split(t,e){const n=t.data[e],s=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,s);const r=this._chooseSplitIndex(n,i,s);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),h=n.leaf?new X(o):new N(o);h.height=n.height,a(n,this._toBBox),a(h,this._toBBox),e?t.data[e-1].children.push(h):this._splitRoot(n,h)}_splitRoot(t,e){this._data=new N([t,e]),this._data.height=t.height+1,a(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let s,i,r;s=i=1/0;for(let o=e;o<=n-e;o++){const e=l(t,0,o,this._toBBox),h=l(t,o,n,this._toBBox),a=x(e,h),d=m(e)+m(h);a<s?(s=a,r=o,i=d<i?d:i):a===s&&d<i&&(i=d,r=o)}return r}_chooseSplitAxis(t,e,n){const s=t.leaf?this._compareMinX:u,i=t.leaf?this._compareMinY:c;this._allDistMargin(t,e,n,s)<this._allDistMargin(t,e,n,i)&&t.children.sort(s)}_allDistMargin(t,e,n,s){t.children.sort(s);const i=this._toBBox,r=l(t,0,e,i),o=l(t,n-e,n,i);let h=_(r)+_(o);for(let a=e;a<n-e;a++){const e=t.children[a];d(r,t.leaf?i(e):e),h+=_(r)}for(let a=n-e-1;a>=e;a--){const e=t.children[a];d(o,t.leaf?i(e):e),h+=_(o)}return h}_adjustParentBBoxes(t,e,n){for(let s=n;s>=0;s--)d(e.data[s],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const i=t.data[e-1],r=i.children;r.splice((0,s.cq)(r,n,r.length,i.indexHint),1)}else this.clear();else a(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,s,i){i||(i=new X([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let r,o=e;o<n;o++)r=t.children[o],d(i,t.leaf?s(r):r);return i}function d(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function u(t,e){return t.minX-e.minX}function c(t,e){return t.minY-e.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function _(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function x(t,e){const n=Math.max(t.minX,e.minX),s=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,r-s)}function g(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function p(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function I(t,e,n,s,r){const h=[e,n];for(;h.length;){const e=(0,i.j0)(h.pop()),n=(0,i.j0)(h.pop());if(e-n<=s)continue;const a=n+Math.ceil((e-n)/s/2)*s;(0,o.q)(t,a,n,e,r),h.push(n,a,a,e)}}const y=new r.Z,B=new r.Z,M=new r.Z,b=new r.Z({deallocator:void 0});class v{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class Y extends v{constructor(){super(...arguments),this.height=1,this.indexHint=new s.SO}}class X extends Y{constructor(t){super(),this.children=t,this.leaf=!0}}class N extends Y{constructor(t){super(),this.children=t,this.leaf=!1}}},40237:(t,e,n)=>{n.d(e,{N:()=>s});const s={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){const s=new i(t.getPointX(e),t.getPointY(e),n),r=t.hasZ(e),o=t.hasM(e);return r&&(s.z=t.getPointZ(e)),o&&(s.m=t.getPointM(e)),s},exportPolygon:function(t,e,n){return new r(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new o(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new h(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){const s=t.hasZ(e),i=t.hasM(e),r=new a(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(s){const n=t.getZExtent(e);r.zmin=n.vmin,r.zmax=n.vmax}if(i){const n=t.getMExtent(e);r.mmin=n.vmin,r.mmax=n.vmax}return r}};class i{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class r{constructor(t,e,n,s){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class o{constructor(t,e,n,s){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class h{constructor(t,e,n,s){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class a{constructor(t,e,n,s,i){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=s,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},85403:(t,e,n)=>{n.d(e,{Y:()=>r});var s=n(92026);function i(t,e){return t?e?4:3:e?3:2}function r(t,e,n,r,a){if((0,s.Wi)(e)||!e.lengths.length)return null;const l="upperLeft"===(null===a||void 0===a?void 0:a.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const d=t.coords,u=[],c=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:m,coords:_}=e,f=i(n,r);let x=0;for(const s of m){const t=o(c,_,x,s,n,r,l);t&&u.push(t),x+=s*f}if(u.sort(((t,e)=>{let s=l*t[2]-l*e[2];return 0===s&&n&&(s=t[4]-e[4]),s})),u.length){let t=6*u[0][2];d[0]=u[0][0]/t,d[1]=u[0][1]/t,n&&(t=6*u[0][4],d[2]=0!==t?u[0][3]/t:0),(d[0]<c[0]||d[0]>c[1]||d[1]<c[2]||d[1]>c[3]||n&&(d[2]<c[4]||d[2]>c[5]))&&(d.length=0)}if(!d.length){const t=e.lengths[0]?h(_,0,m[0],n,r):null;if(!t)return null;d[0]=t[0],d[1]=t[1],n&&t.length>2&&(d[2]=t[2])}return t}function o(t,e,n,s,r,o){let h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;const a=i(r,o);let l=n,d=n+a,u=0,c=0,m=0,_=0,f=0;for(let i=0,g=s-1;i<g;i++,l+=a,d+=a){const n=e[l],s=e[l+1],i=e[l+2],o=e[d],h=e[d+1],a=e[d+2];let x=n*h-o*s;_+=x,u+=(n+o)*x,c+=(s+h)*x,r&&(x=n*a-o*i,m+=(i+a)*x,f+=x),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),s<t[2]&&(t[2]=s),s>t[3]&&(t[3]=s),r&&(i<t[4]&&(t[4]=i),i>t[5]&&(t[5]=i))}if(_*h>0&&(_*=-1),f*h>0&&(f*=-1),!_)return null;const x=[u,c,.5*_];return r&&(x[3]=m,x[4]=.5*f),x}function h(t,e,n,s,r){const o=i(s,r);let h=e,c=e+o,m=0,_=0,f=0,x=0;for(let i=0,g=n-1;i<g;i++,h+=o,c+=o){const e=t[h],n=t[h+1],i=t[h+2],r=t[c],o=t[c+1],g=t[c+2],p=s?l(e,n,i,r,o,g):a(e,n,r,o);if(p)if(m+=p,s){const t=u(e,n,i,r,o,g);_+=p*t[0],f+=p*t[1],x+=p*t[2]}else{const t=d(e,n,r,o);_+=p*t[0],f+=p*t[1]}}return m>0?s?[_/m,f/m,x/m]:[_/m,f/m]:n>0?s?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function a(t,e,n,s){const i=n-t,r=s-e;return Math.sqrt(i*i+r*r)}function l(t,e,n,s,i,r){const o=s-t,h=i-e,a=r-n;return Math.sqrt(o*o+h*h+a*a)}function d(t,e,n,s){return[t+.5*(n-t),e+.5*(s-e)]}function u(t,e,n,s,i,r){return[t+.5*(s-t),e+.5*(i-e),n+.5*(r-n)]}},66020:(t,e,n)=>{n.d(e,{H:()=>a});var s=n(93169),i=n(13491),r=n(65156);const o={minX:0,minY:0,maxX:0,maxY:0};function h(t,e,n){(function(t){o.minX=t[0],o.minY=t[1],o.maxX=t[2],o.maxY=t[3]})(e),t.search(o,n)}class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i.Q(9,(0,s.Z)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((n,s)=>{t[e++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const t=(0,r.cS)();for(const e of this._boundsById.values())e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]));return t}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),h(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},97114:(t,e,n)=>{n.d(e,{Z:()=>f});var s=n(10064),i=n(91505),r=n(32718),o=n(92026),h=n(41414),a=n(65156),l=n(83406),d=n(66020),u=n(85403),c=n(3182),m=n(80457);const _={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new c.u_(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>((0,o.Wi)(t.centroid)&&(t.centroid=(0,u.Y)(new m.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)};class f{constructor(t){this.geometryInfo=t,this._boundsStore=new d.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new i.Z,this.featureAdapter=_}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{(0,o.pC)(e.geometry)&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e,n){for(const s of t){const t=this._boundsStore.get(s.objectId);t&&e((0,h.JR)(n,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}toArray(){return Array.from(this._featuresById.values())}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,n)=>{this._markedIds.has(n)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const n=this._featuresById.get(e);let i;if(this._markedIds.add(e),n?(t.displayId=n.displayId,i=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,o.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),(0,o.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);i=(0,l.$)((0,o.pC)(i)?i:(0,a.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.pC)(i)&&this._boundsStore.set(e,i),this._featuresById.set(e,t)}_remove(t){return(0,o.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},19995:(t,e,n)=>{n.d(e,{_W:()=>c,iV:()=>f,oj:()=>g});var s=n(92026),i=n(52587),r=n(40237),o=n(92975),h=n(81753);const a=[0,0];function l(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,a),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,a),[n.xmax,n.ymax]=t(e.xmax,e.ymax,a),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:d(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:d(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:u(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:null}function d(t,e){const n=[];for(const s of t)n.push(u(s,e));return n}function u(t,e){const n=[];for(const s of t){const t=e(s[0],s[1],[0,0]);n.push(t),s.length>2&&t.push(s[2]),s.length>3&&t.push(s[3])}return n}async function c(t,e){if(!t||!e)return;const n=Array.isArray(t)?t.map((t=>(0,s.pC)(t.geometry)?t.geometry.spatialReference:null)).filter(s.pC):[t];await(0,i.iQ)(n.map((t=>({source:t,dest:e}))))}const m=l.bind(null,h.hG),_=l.bind(null,h.R6);function f(t,e,n,s){if(!t)return t;if(n||(n=e,e=t.spatialReference),!(0,o.JY)(e)||!(0,o.JY)(n)||(0,o.fS)(e,n))return t;if((0,h.Q8)(e,n)){const e=(0,o.sS)(n)?m(t):_(t);return e.spatialReference=n,e}return(0,i.oj)(r.N,[t],e,n,null,s)[0]}const x=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n){if(!t||!t.length||!e||!n||(0,o.fS)(e,n))return t;const s={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null};return this._jobs.push(s),new Promise((t=>{s.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:s,resolve:a}=t;(0,h.Q8)(n,s)?(0,o.sS)(s)?a(e.map(m)):a(e.map(_)):a((0,i.oj)(r.N,e,n,s,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function g(t,e,n){return x.push(t,e,n)}}}]);
//# sourceMappingURL=54613.132bbcda.chunk.js.map