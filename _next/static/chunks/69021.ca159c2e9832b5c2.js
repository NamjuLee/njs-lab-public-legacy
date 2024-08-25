"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69021],{20506:function(e,a,i){var n,t,r,l;function u(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function o(e){return e.valueExpression?n.Expression:e.field&&"string"==typeof e.field?n.Field:n.Unknown}function c(e,a){let i=a||o(e),r=e.valueUnit||"unknown";return i===n.Unknown?t.Constant:e.stops?t.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?t.ClampedLinear:"unknown"===r?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?t.Proportional:t.Additive:t.Identity:t.RealWorldSize}i.d(a,{PS:function(){return o},QW:function(){return c},RY:function(){return n},hL:function(){return t},iY:function(){return u},qh:function(){return s}}),(r=n||(n={})).Unknown="unknown",r.Expression="expression",r.Field="field",(l=t||(t={})).Unknown="unknown",l.Stops="stops",l.ClampedLinear="clamped-linear",l.Proportional="proportional",l.Additive="additive",l.Constant="constant",l.Identity="identity",l.RealWorldSize="real-world-size"},69021:function(e,a,i){i.r(a),i.d(a,{getAllSizes:function(){return F},getColor:function(){return h},getOpacity:function(){return b},getRotationAngle:function(){return m},getSize:function(){return V},getSizeForValue:function(){return w},getSizeFromNumberOrVariable:function(){return x},getSizeRangeAtScale:function(){return z},getVisualVariableValues:function(){return y},viewScaleRE:function(){return v}});var n=i(87585),t=i(19637),r=i(39928),l=i(65223),u=i(49078),s=i(20506);let o=()=>l.Z.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),c=e=>o().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${e}`),f=()=>o().error("Use of arcade expressions requires an arcade context"),d=new t.Z,p=Math.PI,v=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function h(e,a,i){let t="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"color"===e.type):e;if(!t)return;if("esri.renderers.visualVariables.ColorVariable"!==t.declaredClass)return void c("ColorVariable");let r="number"==typeof a,l=r?null:a,u=l?.attributes,s=r?a:null,o=t.field,{ipData:d,hasExpression:p}=t.cache,v=t.cache.compiledFunc;if(!o&&!p){let e=t.stops;return e&&e[0]&&e[0].color}if("number"!=typeof s){if(p){if(null==i?.arcade)return void f();let e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,n=a.getViewInfo(e),r=a.createExecContext(l,n,i.timeZone);if(!v){let e=a.createSyntaxTree(t.valueExpression);v=a.createFunction(e),t.cache.compiledFunc=v}s=a.executeFunction(v,r)}else u&&(s=u[o])}let h=t.normalizationField,b=null!=u&&null!=h?parseFloat(u[h]):void 0;if(null!=s&&(!h||r||!isNaN(b)&&0!==b)){isNaN(b)||r||(s/=b);let e=g(s,d);if(e){let a=e[0],r=e[1],l=a===r?t.stops[a].color:n.Z.blendColors(t.stops[a].color,t.stops[r].color,e[2],null!=i?i.color:void 0);return new n.Z(l)}}}function b(e,a,i){let n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"opacity"===e.type):e;if(!n)return;if("esri.renderers.visualVariables.OpacityVariable"!==n.declaredClass)return void c("OpacityVariable");let t="number"==typeof a,r=t?null:a,l=r?.attributes,u=t?a:null,s=n.field,{ipData:o,hasExpression:d}=n.cache,p=n.cache.compiledFunc;if(!s&&!d){let e=n.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof u){if(d){if(null==i?.arcade)return void f();let e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,t=a.getViewInfo(e),l=a.createExecContext(r,t,i.timeZone);if(!p){let e=a.createSyntaxTree(n.valueExpression);p=a.createFunction(e),n.cache.compiledFunc=p}u=a.executeFunction(p,l)}else l&&(u=l[s])}let v=n.normalizationField,h=null!=l&&null!=v?parseFloat(l[v]):void 0;if(null!=u&&(!v||t||!isNaN(h)&&0!==h)){isNaN(h)||t||(u/=h);let e=g(u,o);if(e){let a=e[0],i=e[1];if(a===i)return n.stops[a].opacity;{let t=n.stops[a].opacity;return t+(n.stops[i].opacity-t)*e[2]}}}}function m(e,a,i){let n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"rotation"===e.type):e;if(!n)return;if("esri.renderers.visualVariables.RotationVariable"!==n.declaredClass)return void c("RotationVariable");let t=n.axis||"heading",r="heading"===t&&"arithmetic"===n.rotationType?90:0,l="heading"===t&&"arithmetic"===n.rotationType?-1:1,u="number"==typeof a?null:a,s=u?.attributes,o=n.field,{hasExpression:d}=n.cache,p=n.cache.compiledFunc,v=0;if(!o&&!d)return v;if(d){if(null==i?.arcade)return void f();let e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,t=a.getViewInfo(e),r=a.createExecContext(u,t,i.timeZone);if(!p){let e=a.createSyntaxTree(n.valueExpression);p=a.createFunction(e),n.cache.compiledFunc=p}v=a.executeFunction(p,r)}else s&&(v=s[o]||0);return"number"!=typeof v||isNaN(v)?null:r+l*v}function V(e,a,i){let n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"size"===e.type):e;if(!n)return;if("esri.renderers.visualVariables.SizeVariable"!==n.declaredClass)return void c("SizeVariable");let t=w(function(e,a,i){let n="number"==typeof a,t=n?null:a,r=t?.attributes,l=n?a:null,{isScaleDriven:u}=e.cache,o=e.cache.compiledFunc;if(u){let a=null!=i?i.scale:void 0,n=null!=i?i.view:void 0;l=null==a||"3d"===n?function(e){let a=null,i=null,n=e.stops;return n?(a=n[0].value,i=n[n.length-1].value):(a=e.minDataValue||0,i=e.maxDataValue||0),(a+i)/2}(e):a}else if(!n)switch(e.inputValueType){case s.RY.Expression:{if(null==i?.arcade)return void f();let a={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},n=i.arcade.arcadeUtils,r=n.getViewInfo(a),u=n.createExecContext(t,r,i.timeZone);if(!o){let a=n.createSyntaxTree(e.valueExpression);o=n.createFunction(a),e.cache.compiledFunc=o}l=n.executeFunction(o,u);break}case s.RY.Field:r&&(l=r[e.field]);break;case s.RY.Unknown:l=null}if(!(0,s.qh)(l))return null;if(n||!e.normalizationField)return l;let c=r?parseFloat(r[e.normalizationField]):null;return(0,s.qh)(c)&&0!==c?l/c:null}(n,a,i),n,a,i,n.cache.ipData);return null==t||isNaN(t)?0:t}function x(e,a,i){return null==e?null:(0,s.iY)(e)?V(e,a,i):(0,s.qh)(e)?e:null}function S(e,a,i){return(0,s.qh)(i)&&e>i?i:(0,s.qh)(a)&&e<a?a:e}function w(e,a,i,n,t){switch(a.transformationType){case s.hL.Additive:return e+((x(a.minSize,i,n)||a.minDataValue)??0);case s.hL.Constant:return function(e,a,i){let n=e.stops,t=n?.length&&n[0].size;return null==t&&(t=e.minSize),x(t,a,i)}(a,i,n);case s.hL.ClampedLinear:return function(e,a,i,n){let t=(e-a.minDataValue)/(a.maxDataValue-a.minDataValue),r=x(a.minSize,i,n),l=x(a.maxSize,i,n),u=null!=n?n.shape:void 0;if(e<=a.minDataValue)return r;if(e>=a.maxDataValue)return l;if(null==r||null==l)return null;if("area"===a.scaleBy&&u){let e="circle"===u,a=e?p*(r/2)**2:r*r,i=a+t*((e?p*(l/2)**2:l*l)-a);return e?2*Math.sqrt(i/p):Math.sqrt(i)}return r+t*(l-r)}(e,a,i,n);case s.hL.Proportional:return function(e,a,i,n){let t=null!=n?n.shape:void 0,r=e/a.minDataValue,l=x(a.minSize,i,n),u=x(a.maxSize,i,n);return S("circle"===t?2*Math.sqrt(r*(l/2)**2):"square"===t||"diamond"===t||"image"===t?Math.sqrt(r*l**2):r*l,l,u)}(e,a,i,n);case s.hL.Stops:return function(e,a,i,n,t){let[r,l,u]=g(e,t);if(r===l)return x(a.stops?.[r].size,i,n);{let e=x(a.stops?.[r].size,i,n);return e+(x(a.stops?.[l].size,i,n)-e)*u}}(e,a,i,n,t);case s.hL.RealWorldSize:return function(e,a,i,n){let t=(n?.resolution??1)*u.a[a.valueUnit],r=x(a.minSize,i,n),l=x(a.maxSize,i,n),{valueRepresentation:s}=a;return S("area"===s?2*Math.sqrt(e/p)/t:"radius"===s||"distance"===s?2*e/t:e/t,r,l)}(e,a,i,n);case s.hL.Identity:return e;case s.hL.Unknown:return null}}function z(e,a,i){let{isScaleDriven:n}=e.cache;if(!(n&&"3d"===i||a))return null;let t={scale:a,view:i},r=x(e.minSize,d,t),l=x(e.maxSize,d,t);if(null!=r||null!=l){if(r>l){let e=l;l=r,r=e}return{minSize:r,maxSize:l}}}function y(e,a,i){if(!e.visualVariables)return;let n=[],t=[],r=[],l=[],u=[];for(let a of e.visualVariables)switch(a.type){case"color":t.push(a);break;case"opacity":r.push(a);break;case"rotation":u.push(a);break;case"size":l.push(a)}return t.forEach(e=>{let t=h(e,a,i);n.push({variable:e,value:t})}),r.forEach(e=>{let t=b(e,a,i);n.push({variable:e,value:t})}),u.forEach(e=>{let t=m(e,a,i);n.push({variable:e,value:t})}),l.forEach(e=>{let t=V(e,a,i);n.push({variable:e,value:t})}),n.filter(e=>null!=e.value)}function g(e,a){if(!a)return;let i=0,n=a.length-1;return a.some((a,t)=>e<a?(n=t,!0):(i=t,!1)),[i,n,(e-a[i])/(a[n]-a[i])]}function F(e,a,i){let n=["proportional","proportional","proportional"];for(let t of e){let e=t.useSymbolValue?"symbol-value":V(t,a,i);switch(t.axis){case"width":n[0]=e;break;case"depth":n[1]=e;break;case"height":n[2]=e;break;case"width-and-depth":n[0]=e,n[1]=e;break;case"all":case void 0:case null:n[0]=e,n[1]=e,n[2]=e;break;default:(0,r.Bg)(t.axis)}}return n}}}]);