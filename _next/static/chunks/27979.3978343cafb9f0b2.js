"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27979],{27979:function(t,e,i){i.r(e),i.d(e,{Solution:function(){return s},vertex:function(){return n},vertexCount:function(){return a}});let r=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,r=t.createBuffer({size:e.byteLength,usage:i,mappedAtCreation:!0});return new Float32Array(r.getMappedRange()).set(e),r.unmap(),r},o=()=>({vertex:"\n        struct Output {\n            @builtin(position) Position : vec4<f32>,\n            @location(0) vColor : vec4<f32>,\n        };\n        @vertex\n        fn main(@location(0) pos: vec4<f32>, @location(1) color: vec4<f32>) -> Output {\n            var output: Output;\n            output.Position = pos;\n            output.vColor = color;\n            return output;\n        }",fragment:"\n        @fragment\n        fn main(@location(0) vColor: vec4<f32>) -> @location(0) vec4<f32> {\n            return vColor;\n        }"}),n=new Float32Array([0,.5,0,-.5,-.5,0,.5,-.5,0]),a=3;class s{async initWebGPU(){if(!navigator.gpu)throw Error("Not Support WebGPU");let t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw Error("No Adapter Found");let e=await t.requestDevice();this.ctx=this.canvas.getContext("webgpu");let i=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(t);window.devicePixelRatio,this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:e,format:i,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=e,this.format=i,this.initPipeline(this.device,this.format)}async initPipeline(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2];let i=r(t,new Float32Array([-.5,-.5,1,0,0,.5,-.5,0,1,0,-.5,.5,1,1,0,-.5,.5,1,1,0,.5,-.5,0,1,0,.5,.5,0,0,1])),n=o(),a=t.createRenderPipeline({layout:"auto",vertex:{module:t.createShaderModule({code:n.vertex}),entryPoint:"main",buffers:[{arrayStride:20,attributes:[{shaderLocation:0,format:"float32x2",offset:0},{shaderLocation:1,format:"float32x3",offset:8}]}]},fragment:{module:t.createShaderModule({code:n.fragment}),entryPoint:"main",targets:[{format:this.format}]},primitive:{topology:"triangle-list"}}),s=t.createCommandEncoder(),c=this.ctx.getCurrentTexture().createView(),u=s.beginRenderPass({colorAttachments:[{view:c,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]});u.setPipeline(a),u.setVertexBuffer(0,i),u.draw(6),u.end(),t.queue.submit([s.finish()])}destroy(){for(this.device.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}constructor(t){this.divHost=document.getElementById(t),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.initWebGPU()}}}}]);