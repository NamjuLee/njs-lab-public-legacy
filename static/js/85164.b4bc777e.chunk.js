"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[85164],{85164:(e,a,t)=>{t.r(a),t.d(a,{createSymbolSchema:()=>o});var r=t(80613),l=t(54815);function n(e){var a;return"line-marker"===e.type?{type:"line-marker",color:null===(a=e.color)||void 0===a?void 0:a.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function s(e){return(0,l.hF)(e)}function o(e,a){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,a,t){const o=(0,l.jj)(r.LW.FILL,a),c=t?s(o):o,i=e.clone(),h=i.outline,m=(0,l.jy)(a.symbologyType);m||(i.outline=null);const u={materialKey:c,hash:i.hash(),...n(i)};if(m)return u;const y=[];if(y.push(u),h){const e=(0,l.jj)(r.LW.LINE,{...a,isOutline:!0}),o={materialKey:t?s(e):e,hash:h.hash(),...n(h)};y.push(o)}return{type:"composite-symbol",layers:y,hash:y.reduce(((e,a)=>a.hash+e),"")}}(e,a,t);case"simple-marker":case"picture-marker":return function(e,a,t){const o=(0,l.jj)(r.LW.MARKER,a),c=t?s(o):o,i=n(e);return{materialKey:c,hash:e.hash(),...i,angle:e.angle,maxVVSize:a.maxVVSize}}(e,a,t);case"simple-line":return function(e,a,t){const o=(0,l.jy)(a.symbologyType)?r.mD.DEFAULT:a.symbologyType,c=(0,l.jj)(r.LW.LINE,{...a,symbologyType:o}),i=t?s(c):c,h=e.clone(),m=h.marker;h.marker=null;const u=[];if(u.push({materialKey:i,hash:h.hash(),...n(h)}),m){var y;const e=(0,l.jj)(r.LW.MARKER,a),o=t?s(e):e;m.color=null!==(y=m.color)&&void 0!==y?y:h.color,u.push({materialKey:o,hash:m.hash(),lineWidth:h.width,...n(m)})}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,a)=>a.hash+e),"")}}(e,a,t);case"text":return function(e,a,t){const o=(0,l.jj)(r.LW.TEXT,a),c=t?s(o):o,i=n(e);return{materialKey:c,hash:e.hash(),...i,angle:e.angle,maxVVSize:a.maxVVSize}}(e,a,t);case"label":return function(e,a,t){const n=e.toJSON(),o=(0,l.jj)(r.LW.LABEL,{...a,placement:n.labelPlacement});return{materialKey:t?s(o):o,hash:e.hash(),...n,labelPlacement:n.labelPlacement}}(e,a,t);case"cim":return{type:"cim",rendererKey:a.vvFlags,data:e.data,maxVVSize:a.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:a.vvFlags,data:e,maxVVSize:a.maxVVSize};case"web-style":return{...n(e),type:"web-style",hash:e.hash(),rendererKey:a.vvFlags,maxVVSize:a.maxVVSize};default:throw new Error("symbol not supported ".concat(e.type))}}}}]);
//# sourceMappingURL=85164.b4bc777e.chunk.js.map