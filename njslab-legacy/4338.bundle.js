"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4338],{4338:(e,t,n)=>{n.r(t),n.d(t,{WebGPU:()=>o});var r=function(){function e(e){this.app=e,this.Init()}return e.prototype.Init=function(){return e=this,t=void 0,r=function(){var e,t,n,r,o,a,i;return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(c){switch(c.label){case 0:return[4,navigator.gpu.requestAdapter()];case 1:return[4,c.sent().requestDevice({})];case 2:return e=c.sent(),t=document.createElement("canvas"),n=t.getContext("gpupresent"),r="using namespace metal;\n        // Rec 709 LUMA values for grayscale image conversion\n        constant float3 kRec709Luma = float3(0.2126, 0.7152, 0.0722);\n        struct Vertex {\n            float4 position [[position]];\n            float4 color;\n        };\n        vertex Vertex vertex_main(constant Vertex *vertices [[buffer(0)]],\n                                uint vid [[vertex_id]]) {\n            return vertices[vid];\n        }\n        fragment float4 fragment_main(Vertex vert [[stage_in]]) {\n            float3 inColor = float3(vert.color.x, vert.color.y, vert.color.z);\n            half gray = dot(kRec709Luma, inColor);\n            float4 outColor = float4(gray, gray, gray, 1);\n            return outColor;\n        }\n        ",console.log(e,n,r),o=n.createLibrary(r),a=o.functionWithName("vertex_main"),i=o.functionWithName("fragment_main"),console.log(a,i),console.log("webGPU init"),[2]}}))},new((n=void 0)||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}));var e,t,n,r},e}(),o=function(){function e(e){var t=document.getElementById(e);t&&(this.divHost=t),this.core=new r(this)}return e.Init=function(t){new e(t)},e}()}}]);