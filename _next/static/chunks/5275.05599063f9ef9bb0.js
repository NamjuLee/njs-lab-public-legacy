"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5275,5081],{5081:function(e,n,t){t.r(n),t.d(n,{hydratedAdapter:function(){return o}});var r=t(9377),i=t(18736),u=t(33876),a=t(54001),c=t(58144);let o={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){let r=e.hasZ(n),i=e.hasM(n),a=new u.Z({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return r&&(a.z=e.getPointZ(n)),i&&(a.m=e.getPointM(n)),a.cache._geVersion=n,a},exportPolygon:function(e,n,t){let r=new a.Z({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return r.cache._geVersion=n,r},exportPolyline:function(e,n,t){let r=new c.Z({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return r.cache._geVersion=n,r},exportMultipoint:function(e,n,t){let r=new i.Z({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return r.cache._geVersion=n,r},exportExtent:function(e,n,t){let i=e.hasZ(n),u=e.hasM(n),a=new r.Z({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(i){let t=e.getZExtent(n);a.zmin=t.vmin,a.zmax=t.vmax}if(u){let t=e.getMExtent(n);a.mmin=t.vmin,a.mmax=t.vmax}return a.cache._geVersion=n,a}}},5275:function(e,n,t){t.r(n),t.d(n,{buffer:function(){return P},changeDefaultSpatialReferenceTolerance:function(){return Y},clearDefaultSpatialReferenceTolerance:function(){return j},clip:function(){return c},contains:function(){return f},convexHull:function(){return w},crosses:function(){return d},cut:function(){return o},densify:function(){return k},difference:function(){return R},disjoint:function(){return G},distance:function(){return s},equals:function(){return l},extendedSpatialReferenceInfo:function(){return a},flipHorizontal:function(){return L},flipVertical:function(){return N},generalize:function(){return b},geodesicArea:function(){return O},geodesicBuffer:function(){return S},geodesicDensify:function(){return C},geodesicLength:function(){return I},intersect:function(){return Z},intersectLinesToPoints:function(){return X},intersects:function(){return p},isSimple:function(){return x},nearestCoordinate:function(){return _},nearestVertex:function(){return D},nearestVertices:function(){return E},offset:function(){return V},overlaps:function(){return A},planarArea:function(){return H},planarLength:function(){return J},relate:function(){return g},rotate:function(){return z},simplify:function(){return m},symmetricDifference:function(){return M},touches:function(){return h},union:function(){return v},within:function(){return y}});var r=t(11743),i=t(5081);function u(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function a(e){return r.G.extendedSpatialReferenceInfo(e)}function c(e,n){return r.G.clip(i.hydratedAdapter,u(e),e,n)}function o(e,n){return r.G.cut(i.hydratedAdapter,u(e),e,n)}function f(e,n){return r.G.contains(i.hydratedAdapter,u(e),e,n)}function d(e,n){return r.G.crosses(i.hydratedAdapter,u(e),e,n)}function s(e,n,t){return r.G.distance(i.hydratedAdapter,u(e),e,n,t)}function l(e,n){return r.G.equals(i.hydratedAdapter,u(e),e,n)}function p(e,n){return r.G.intersects(i.hydratedAdapter,u(e),e,n)}function h(e,n){return r.G.touches(i.hydratedAdapter,u(e),e,n)}function y(e,n){return r.G.within(i.hydratedAdapter,u(e),e,n)}function G(e,n){return r.G.disjoint(i.hydratedAdapter,u(e),e,n)}function A(e,n){return r.G.overlaps(i.hydratedAdapter,u(e),e,n)}function g(e,n,t){return r.G.relate(i.hydratedAdapter,u(e),e,n,t)}function x(e){return r.G.isSimple(i.hydratedAdapter,u(e),e)}function m(e){return r.G.simplify(i.hydratedAdapter,u(e),e)}function w(e,n=!1){return r.G.convexHull(i.hydratedAdapter,u(e),e,n)}function R(e,n){return r.G.difference(i.hydratedAdapter,u(e),e,n)}function M(e,n){return r.G.symmetricDifference(i.hydratedAdapter,u(e),e,n)}function Z(e,n){return r.G.intersect(i.hydratedAdapter,u(e),e,n)}function v(e,n=null){return r.G.union(i.hydratedAdapter,u(e),e,n)}function V(e,n,t,a,c,o){return r.G.offset(i.hydratedAdapter,u(e),e,n,t,a,c,o)}function P(e,n,t,a=!1){return r.G.buffer(i.hydratedAdapter,u(e),e,n,t,a)}function S(e,n,t,a,c,o){return r.G.geodesicBuffer(i.hydratedAdapter,u(e),e,n,t,a,c,o)}function _(e,n,t=!0){return r.G.nearestCoordinate(i.hydratedAdapter,u(e),e,n,t)}function D(e,n){return r.G.nearestVertex(i.hydratedAdapter,u(e),e,n)}function E(e,n,t,a){return r.G.nearestVertices(i.hydratedAdapter,u(e),e,n,t,a)}function T(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function z(e,n,t){if(null==e)throw new q;let i=e.spatialReference;if(null==(t=t??T(e)))throw new q;let u=e.constructor.fromJSON(r.G.rotate(e,n,t));return u.spatialReference=i,u}function L(e,n){if(null==e)throw new q;let t=e.spatialReference;if(null==(n=n??T(e)))throw new q;let i=e.constructor.fromJSON(r.G.flipHorizontal(e,n));return i.spatialReference=t,i}function N(e,n){if(null==e)throw new q;let t=e.spatialReference;if(null==(n=n??T(e)))throw new q;let i=e.constructor.fromJSON(r.G.flipVertical(e,n));return i.spatialReference=t,i}function b(e,n,t,a){return r.G.generalize(i.hydratedAdapter,u(e),e,n,t,a)}function k(e,n,t){return r.G.densify(i.hydratedAdapter,u(e),e,n,t)}function C(e,n,t,a=0){return r.G.geodesicDensify(i.hydratedAdapter,u(e),e,n,t,a)}function H(e,n){return r.G.planarArea(i.hydratedAdapter,u(e),e,n)}function J(e,n){return r.G.planarLength(i.hydratedAdapter,u(e),e,n)}function O(e,n,t){return r.G.geodesicArea(i.hydratedAdapter,u(e),e,n,t)}function I(e,n,t){return r.G.geodesicLength(i.hydratedAdapter,u(e),e,n,t)}function X(e,n){return r.G.intersectLinesToPoints(i.hydratedAdapter,u(e),e,n)}function Y(e,n){r.G.changeDefaultSpatialReferenceTolerance(e,n)}function j(e){r.G.clearDefaultSpatialReferenceTolerance(e)}class q extends Error{constructor(){super("Illegal Argument Exception")}}}}]);