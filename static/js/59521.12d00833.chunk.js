"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[59521],{73053:(e,r,a)=>{a.r(r),a.d(r,{GLShaderCommon:()=>t});class t{static getShaderProgram(e,r,a){let l=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=t.createShader(e,e.VERTEX_SHADER,r),n=t.createShader(e,e.FRAGMENT_SHADER,a);if(o&&n){let r=t.createProgram(e,o,n,l);return r||(console.error("vertex fragment shader error"),null)}return console.error("vertex fragment shader error"),null}static getShader(e,r,a){const t=e.createShader(r);return null===t?null:(e.shaderSource(t,a),e.compileShader(t),e.getShaderParameter(t,e.COMPILE_STATUS)?t:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(t)),e.deleteShader(t),null))}static createProgram(e,r,a){let t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const l=e.createProgram();if(null===l)return null;if(e.attachShader(l,r),e.attachShader(l,a),e.linkProgram(l),!e.getProgramParameter(l,e.LINK_STATUS)){const t=e.getProgramInfoLog(l);return console.log("Failed to link program: "+t),e.deleteProgram(l),e.deleteShader(a),e.deleteShader(r),null}return t&&(e.validateProgram(l),!e.getProgramParameter(l,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(l)),e.deleteProgram(l),e.deleteShader(a),e.deleteShader(r),null):(e.deleteShader(a),e.deleteShader(r),l)}static createShader(e,r,a){const t=e.createShader(r);if(null===t)return null;e.shaderSource(t,a),e.compileShader(t);return e.getShaderParameter(t,e.COMPILE_STATUS)?t:(console.log(e.getShaderInfoLog(t)),e.deleteShader(t),null)}static createShaderFromPath(e,r,a){const l=e.createShader(r);if(null===l)return null;e.shaderSource(l,t.getSourceSynch(a)),e.compileShader(l);return e.getShaderParameter(l,e.COMPILE_STATUS)?l:(console.log(e.getShaderInfoLog(l)),e.deleteShader(l),null)}static getSourceSynch(e){const r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),200===r.status?r.responseText:null}static loadImage(e,r){const a=new Image;a.onload=function(){r(null,a)},a.src=e}}}}]);
//# sourceMappingURL=59521.12d00833.chunk.js.map