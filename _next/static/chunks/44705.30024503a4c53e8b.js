"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44705],{44705:function(n,e,t){t.r(e),t.d(e,{registerFunctions:function(){return p}});var r=t(43633),a=t(36670),i=t(43029),s=t(23424),u=t(66457),c=t(90389),l=t(73104);function o(n){return n instanceof c.Z}function f(n,e,t,f){return f(n,e,async(f,p,d)=>{if(d.length<2)throw new r.aV(n,r.rH.WrongNumberOfParameters,e);if(null===(d=(0,i.I)(d))[0]&&null===d[1])return!1;if((0,i.u)(d[0])){if(d[1]instanceof c.Z)return new s.Z({parentfeatureset:d[0],relation:t,relationGeom:d[1]});if(null===d[1])return new u.Z({parentfeatureset:d[0]});throw new r.aV(n,r.rH.InvalidParameter,e)}if(o(d[0])){if(o(d[1])){switch(t){case"esriSpatialRelEnvelopeIntersects":return(0,l.intersects)((0,a.SV)(d[0]),(0,a.SV)(d[1]));case"esriSpatialRelIntersects":return(0,l.intersects)(d[0],d[1]);case"esriSpatialRelContains":return(0,l.contains)(d[0],d[1]);case"esriSpatialRelOverlaps":return(0,l.overlaps)(d[0],d[1]);case"esriSpatialRelWithin":return(0,l.within)(d[0],d[1]);case"esriSpatialRelTouches":return(0,l.touches)(d[0],d[1]);case"esriSpatialRelCrosses":return(0,l.crosses)(d[0],d[1])}throw new r.aV(n,r.rH.InvalidParameter,e)}if((0,i.u)(d[1]))return new s.Z({parentfeatureset:d[1],relation:t,relationGeom:d[0]});if(null===d[1])return!1;throw new r.aV(n,r.rH.InvalidParameter,e)}if(null===d[0]){if((0,i.u)(d[1]))return new u.Z({parentfeatureset:d[1]});if(d[1]instanceof c.Z||null===d[1])return!1}throw new r.aV(n,r.rH.InvalidParameter,e)})}function p(n){"async"===n.mode&&(n.functions.intersects=function(e,t){return f(e,t,"esriSpatialRelIntersects",n.standardFunctionAsync)},n.functions.envelopeintersects=function(e,t){return f(e,t,"esriSpatialRelEnvelopeIntersects",n.standardFunctionAsync)},n.signatures.push({name:"envelopeintersects",min:2,max:2}),n.functions.contains=function(e,t){return f(e,t,"esriSpatialRelContains",n.standardFunctionAsync)},n.functions.overlaps=function(e,t){return f(e,t,"esriSpatialRelOverlaps",n.standardFunctionAsync)},n.functions.within=function(e,t){return f(e,t,"esriSpatialRelWithin",n.standardFunctionAsync)},n.functions.touches=function(e,t){return f(e,t,"esriSpatialRelTouches",n.standardFunctionAsync)},n.functions.crosses=function(e,t){return f(e,t,"esriSpatialRelCrosses",n.standardFunctionAsync)},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,async(n,a,s)=>{if(s=(0,i.I)(s),(0,i.H)(s,3,3,e,t),o(s[0])&&o(s[1]))return(0,l.relate)(s[0],s[1],(0,i.j)(s[2]));if(s[0]instanceof c.Z&&null===s[1]||s[1]instanceof c.Z&&null===s[0])return!1;if((0,i.u)(s[0])&&null===s[1])return new u.Z({parentfeatureset:s[0]});if((0,i.u)(s[1])&&null===s[0])return new u.Z({parentfeatureset:s[1]});if((0,i.u)(s[0])&&s[1]instanceof c.Z)return s[0].relate(s[1],(0,i.j)(s[2]));if((0,i.u)(s[1])&&s[0]instanceof c.Z)return s[1].relate(s[0],(0,i.j)(s[2]));if(null===s[0]&&null===s[1])return!1;throw new r.aV(e,r.rH.InvalidParameter,t)})})}}}]);