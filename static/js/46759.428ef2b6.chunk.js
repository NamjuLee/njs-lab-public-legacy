"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[46759],{54078:(t,e,s)=>{s.d(e,{B:()=>o});var i=s(458);class o{constructor(t){this.gl=void 0,this.program=void 0,this.fragmentShader=void 0,this.vertexShader=void 0,this.matrixLocation=void 0,this.posBuffer=void 0,this.colBuffer=void 0,this.vertexs=void 0,this.posLocAtt=void 0,this.colLocAtt=void 0,this.matLoc=void 0,this.colLoc=void 0,this.cVecLoc=void 0,this.mouseLoc=void 0,this.timeGL=void 0,this.vShader=void 0,this.fShader=void 0,this.v="\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    \n    varying vec4 f_color;\n\n    void main() {\n\n        vec2 mouse_distance = vec2(0,0) - (a_position.xy /vec2(2,2));\n        float red = 1.0 - length(mouse_distance);\n        f_color = vec4(a_position, 0, 1.0);\n    \n        // float dis = distance(vec2(a_position.xy), vec2(0,0));\n\n        // f_color = vec4(dis * 0.6, 0,0,1);\n        gl_Position = vec4( a_position, 0, 1);\n    }\n    ",this.f="\n    precision highp float;\n\n    varying vec4 f_color;\n    \n    void main() {\n        vec2 mouse_distance = vec2(0,0) - (f_color.xy /vec2(5,5));\n\n        float col =  length(mouse_distance*5.);\n        float val = 1.0 - length(mouse_distance*8.);\n        \n        gl_FragColor = vec4(0.19,0.19,0.19, col);\n\n    }\n    ",this.positionAttribLocation=void 0,this.colorAttribLocation=void 0,this.translation=void 0,this.color=void 0,this.colArray=void 0,this.gl=t,this.color=[Math.random(),Math.random(),Math.random(),1],this.InitShader()}InitShader(){let t=i.Ui.CreateShader(this.gl,this.gl.VERTEX_SHADER,this.v),e=i.Ui.CreateShader(this.gl,this.gl.FRAGMENT_SHADER,this.f);if(t&&e){this.vShader=t,this.fShader=e;let s=i.Ui.CreateProgram(this.gl,t,e);s&&(this.program=s)}}Render(t){let e=[.1,0,0,1];this.vertexs=new Float32Array([-1,-1,1,1,1,1,-1,1,e[0],e[1],e[2],e[3],1,-1,e[0],e[1],e[2],e[3],-1,1,1,1,1,1,1,-1,e[0],e[1],e[2],e[3],1,1,e[0],e[1],e[2],e[3]]),this.posBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.posBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(this.vertexs),t.STATIC_DRAW),this.posLocAtt=this.gl.getAttribLocation(this.program,"a_position");let s=t.FLOAT,i=6*Float32Array.BYTES_PER_ELEMENT,o=0;t.vertexAttribPointer(this.posLocAtt,2,s,!1,i,o),t.enableVertexAttribArray(this.posLocAtt),t.useProgram(this.program);let r=t.TRIANGLES;o=0;t.drawArrays(r,o,6)}}},46759:(t,e,s)=>{s.r(e),s.d(e,{Solution:()=>h});var i=s(17760),o=s(55913),r=s(87968),n=s(54078);class h extends o.TF{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main"),this.streetOSM=[],this.routesTreated=[],this.routesControl=[],this.zones30=[],this.meshArea=void 0,this.raycaster=new i.iMs,this.pointer=new i.FM8,this.sphere=void 0;const t=new i.cek(16777215,.8);this.camera.add(t),this.scene.add(t),this.raycaster=new i.iMs,this.raycaster.params.Mesh.threshold=3,this.raycaster.far=1e3;const e=new i.xo$(.2,32,32),s=new i.vBJ({color:16777215}),o=new i.Kj0(e,s);this.sphere=o,this.scene.add(o);const h=document.createElement("canvas");h.style.position="absolute",h.style.pointerEvents="none",h.style.mixBlendMode="darken",h.width=this.hostDiv.clientWidth,h.height=this.hostDiv.clientHeight,this.hostDiv.appendChild(h);const l=h.getContext("webgl");new n.B(l,.5,5).Render(l),this.camera.position.set(0,40,48),(0,r.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates);c(this.scene,this.streetOSM,[0,1,1]),(0,r.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/treated-st.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.routesTreated.push(t.features[e].geometry.coordinates)})),(0,r.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/control-st.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.routesControl.push(t.features[e].geometry.coordinates)})),(0,r.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/zones-30.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.zones30.push(t.features[e].geometry.coordinates);this.meshArea=a(this.scene,this.zones30,[0,1,0]),this.start()}))}))}update(t){this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects(this.meshArea,!0);e.length>0?(this.sphere.visible=!0,this.sphere.position.copy(e[0].point)):this.sphere.visible=!1}mouseMove(t){this.pointer.x=t.offsetX/this.hostDiv.clientWidth*2-1,this.pointer.y=-t.offsetY/this.hostDiv.clientHeight*2+1}mouseDown(t){this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects(this.meshArea,!1);if(e.length>0){this.sphere.visible=!0;this.scene.getObjectById(e[0].object.id).material.color.r+=.2}else this.sphere.visible=!1}}const a=(t,e,s)=>{const r=[],n=[];for(let h=0;h<e.length;++h){const s=e[h];for(let e=0;e<s.length;++e){const h=s[e];if(1===h.length){const e=h[0],s=[];for(let t=0;t<e.length;++t){const[r,h]=(0,o._Y)(e[t][0],e[t][1]),a=.01*(r+-15478803.88731685),c=.01*(h+-4766681.448690384);n.push(a,0,c),s.push(new i.FM8(a,c))}let a=new i.oa8(new i.bnF(s)),c=new i.vBJ({side:i.ehD,color:65280,transparent:!0,opacity:.3}),l=new i.Kj0(a,c);t.add(l),r.push(l),l.rotateOnAxis(new i.Pa4(1,0,0),.5*Math.PI)}}}return r},c=(t,e,s)=>{const r=new i.u9r,n=new i.UY4({vertexColors:!0,size:.5}),h=[],a=[];for(let i=0;i<e.length;++i){const t=e[i];for(let e=0;e<t.length;++e)for(let i=0;i<t[e].length;++i){const[r,n]=(0,o._Y)(t[e][i][0],t[e][i][1]),c=.01*(r+-15478803.88731685),l=.01*(n+-4766681.448690384);h.push(c,0,l),a.push(s[0],s[1],s[2])}}r.setAttribute("position",new i.a$l(h,3)),r.setAttribute("color",new i.a$l(a,3)),r.computeBoundingSphere();const c=new i.woe(r,n);t.add(c)}}}]);
//# sourceMappingURL=46759.428ef2b6.chunk.js.map