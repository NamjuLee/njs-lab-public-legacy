(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59815,2155],{2155:function(){},59815:function(t,e,n){"use strict";n.r(e),n.d(e,{l:function(){return s}});var r,i,o=n(19324),a=n(2155),u={exports:{}};r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,i=function(t={}){t.ready=new Promise((t,e)=>{o=t,u=e});var e=Object.assign({},t),n="object"==typeof window,i="function"==typeof importScripts;"object"==typeof a&&"object"==typeof a.versions&&a.versions.node;var o,u,f,s="";(n||i)&&(i?s=self.location.href:"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),r&&(s=r),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i&&(f=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var c,l,p=t.print||console.log.bind(console),h=t.printErr||console.error.bind(console);Object.assign(t,e),e=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit,t.wasmBinary&&(c=t.wasmBinary),"object"!=typeof WebAssembly&&R("no native wasm support detected");var m,d,y=!1;function v(){var e=l.buffer;t.HEAP8=new Int8Array(e),t.HEAP16=new Int16Array(e),t.HEAPU8=m=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAP32=new Int32Array(e),t.HEAPU32=d=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e)}var b=[],g=[],w=[],A=0,E=null;function R(e){t.onAbort?.(e),h(e="Aborted("+e+")"),y=!0,e+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(e);throw u(n),n}var _,P=t=>t.startsWith("data:application/octet-stream;base64,");function S(t){if(t==_&&c)return new Uint8Array(c);if(f)return f(t);throw"both async and sync fetching of the wasm failed"}function H(t,e,r){return(!c&&(n||i)&&"function"==typeof fetch?fetch(t,{credentials:"same-origin"}).then(e=>{if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()}).catch(()=>S(t)):Promise.resolve().then(()=>S(t))).then(t=>WebAssembly.instantiate(t,e)).then(t=>t).then(r,t=>{h(`failed to asynchronously prepare wasm: ${t}`),R(t)})}P(_="libtess.wasm")||(T=_,_=t.locateFile?t.locateFile(T,s):s+T);var I=e=>{for(;e.length>0;)e.shift()(t)};t.noExitRuntime;var T,j,x=()=>2147483648,C=t=>{var e=(t-l.buffer.byteLength+65535)/65536;try{return l.grow(e),v(),1}catch(t){}},O=[null,[],[]],W="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,F=(t,e,n)=>{for(var r=e+n,i=e;t[i]&&!(i>=r);)++i;if(i-e>16&&t.buffer&&W)return W.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var f=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|f:(7&a)<<18|u<<12|f<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var s=a-65536;o+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o},M=(t,e)=>{var n=O[t];0===e||10===e?((1===t?p:h)(F(n,0)),n.length=0):n.push(e)},k=[],U=t=>{var e=k[t];return e||(t>=k.length&&(k.length=t+1),k[t]=e=j.get(t)),e},B={e:()=>{throw 1/0},g:(t,e,n)=>m.copyWithin(t,e,e+n),f:t=>{var e=m.length;t>>>=0;var n=x();if(t>n)return!1;for(var r=(t,e)=>t+(e-t%e)%e,i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),C(Math.min(n,r(Math.max(t,o),65536))))return!0}return!1},c:(t,e,n,r)=>{for(var i=0,o=0;o<n;o++){var a=d[e>>2],u=d[e+4>>2];e+=8;for(var f=0;f<u;f++)M(t,m[a+f]);i+=u}return d[r>>2]=i,0},b:function(t,e){var n=L();try{return U(t)(e)}catch(t){if(z(n),t!==t+0)throw t;q(1,0)}},h:function(t,e,n,r){var i=L();try{return U(t)(e,n,r)}catch(t){if(z(i),t!==t+0)throw t;q(1,0)}},d:function(t,e){var n=L();try{U(t)(e)}catch(t){if(z(n),t!==t+0)throw t;q(1,0)}},a:function(t,e,n){var r=L();try{U(t)(e,n)}catch(t){if(z(r),t!==t+0)throw t;q(1,0)}}},D=function(){var e,n,r,i={a:B};function o(e,n){var r;return l=(D=e.exports).i,v(),j=D.m,r=D.j,g.unshift(r),function(){if(A--,t.monitorRunDependencies?.(A),0==A&&E){var e=E;E=null,e()}}(),D}if(A++,t.monitorRunDependencies?.(A),t.instantiateWasm)try{return t.instantiateWasm(i,o)}catch(t){h(`Module.instantiateWasm callback failed with error: ${t}`),u(t)}return(e=c,n=_,r=function(t){o(t.instance)},e||"function"!=typeof WebAssembly.instantiateStreaming||P(n)||"function"!=typeof fetch?H(n,i,r):fetch(n,{credentials:"same-origin"}).then(t=>WebAssembly.instantiateStreaming(t,i).then(r,function(t){return h(`wasm streaming compile failed: ${t}`),h("falling back to ArrayBuffer instantiation"),H(n,i,r)}))).catch(u),{}}();t._malloc=e=>(t._malloc=D.k)(e),t._free=e=>(t._free=D.l)(e),t._triangulate=(e,n,r,i,o,a)=>(t._triangulate=D.n)(e,n,r,i,o,a);var N,q=(t,e)=>(q=D.o)(t,e),L=()=>(L=D.p)(),z=t=>(z=D.q)(t);function $(){function e(){N||(N=!0,t.calledRun=!0,y||(I(g),o(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),function(){if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;){var e;e=t.postRun.shift(),w.unshift(e)}I(w)}()))}A>0||(function(){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;){var e;e=t.preRun.shift(),b.unshift(e)}I(b)}(),A>0||(t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),e()},1)):e()))}if(E=function t(){N||$(),N||(E=t)},t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();$();let Y=null,G=null,X=null,J=null,K=0;return t.triangulate=(e,n,r)=>{Y||(Y=t._triangulate);let i=t.HEAPF32,o=t.HEAP32.BYTES_PER_ELEMENT,a=i.BYTES_PER_ELEMENT;r>K&&(K=r,X&&(t._free(X),X=0),G&&(t._free(G),G=0)),X||(X=t._malloc(r*a)),J||(J=t._malloc(4e3*o));let u=2*r;G||(G=t._malloc(u*a)),(i=t.HEAPF32).set(e,X/a),t.HEAP32.set(n,J/o);let f=Y(X,J,Math.min(n.length,4e3),2,G,u/2),s=(i=t.HEAPF32).slice(G/a,G/a+2*f),c={};return c.buffer=s,c.vertexCount=f,c},t.ready},u.exports=i;var f=u.exports;let s=function(t,e){for(var n=0;n<e.length;n++){let r=e[n];if("string"!=typeof r&&!Array.isArray(r)){for(let e in r)if("default"!==e&&!(e in t)){let n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,o.g)(f)},[f])}}]);