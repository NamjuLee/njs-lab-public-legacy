"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[91572],{54078:(t,e,s)=>{s.d(e,{B:()=>o});var i=s(458);class o{constructor(t){this.gl=void 0,this.program=void 0,this.fragmentShader=void 0,this.vertexShader=void 0,this.matrixLocation=void 0,this.posBuffer=void 0,this.colBuffer=void 0,this.vertexs=void 0,this.posLocAtt=void 0,this.colLocAtt=void 0,this.matLoc=void 0,this.colLoc=void 0,this.cVecLoc=void 0,this.mouseLoc=void 0,this.timeGL=void 0,this.vShader=void 0,this.fShader=void 0,this.v="\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    \n    varying vec4 f_color;\n\n    void main() {\n\n        vec2 mouse_distance = vec2(0,0) - (a_position.xy /vec2(2,2));\n        float red = 1.0 - length(mouse_distance);\n        f_color = vec4(a_position, 0, 1.0);\n    \n        // float dis = distance(vec2(a_position.xy), vec2(0,0));\n\n        // f_color = vec4(dis * 0.6, 0,0,1);\n        gl_Position = vec4( a_position, 0, 1);\n    }\n    ",this.f="\n    precision highp float;\n\n    varying vec4 f_color;\n    \n    void main() {\n        vec2 mouse_distance = vec2(0,0) - (f_color.xy /vec2(5,5));\n\n        float col =  length(mouse_distance*5.);\n        float val = 1.0 - length(mouse_distance*8.);\n        \n        gl_FragColor = vec4(0.19,0.19,0.19, col);\n\n    }\n    ",this.positionAttribLocation=void 0,this.colorAttribLocation=void 0,this.translation=void 0,this.color=void 0,this.colArray=void 0,this.gl=t,this.color=[Math.random(),Math.random(),Math.random(),1],this.InitShader()}InitShader(){let t=i.Ui.CreateShader(this.gl,this.gl.VERTEX_SHADER,this.v),e=i.Ui.CreateShader(this.gl,this.gl.FRAGMENT_SHADER,this.f);if(t&&e){this.vShader=t,this.fShader=e;let s=i.Ui.CreateProgram(this.gl,t,e);s&&(this.program=s)}}Render(t){let e=[.1,0,0,1];this.vertexs=new Float32Array([-1,-1,1,1,1,1,-1,1,e[0],e[1],e[2],e[3],1,-1,e[0],e[1],e[2],e[3],-1,1,1,1,1,1,1,-1,e[0],e[1],e[2],e[3],1,1,e[0],e[1],e[2],e[3]]),this.posBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.posBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(this.vertexs),t.STATIC_DRAW),this.posLocAtt=this.gl.getAttribLocation(this.program,"a_position");let s=t.FLOAT,i=6*Float32Array.BYTES_PER_ELEMENT,o=0;t.vertexAttribPointer(this.posLocAtt,2,s,!1,i,o),t.enableVertexAttribArray(this.posLocAtt),t.useProgram(this.program);let h=t.TRIANGLES;o=0;t.drawArrays(h,o,6)}}},10730:(t,e,s)=>{s.d(e,{UI:()=>i});class i{constructor(t){this.solution=void 0,this.hostDiv=void 0,this.isActive_high_low_connectedness_user=!1,this.isActive_Paris_main_st=!0,this.isActive_treated_st=!1,this.isActive_control_st=!1,this.isActive_zones_30=!1,this.isActive_streetOSM=!1,this.isActive_twitter=!1,this.month=-1,this.solution=t,this.hostDiv=t.hostDiv,this.appendUI()}appendUI(){const t=document.createElement("div");t.style.position="absolute",this.hostDiv.append(t);let e=o("main street");t.append(e.div),e.checkBox.checked=!0,e.checkBox.onchange=()=>{!0===e.checkBox.checked?this.isActive_Paris_main_st=!0:this.isActive_Paris_main_st=!1};let s=o("OSM street");t.append(s.div),s.checkBox.onchange=()=>{!0===s.checkBox.checked?this.isActive_streetOSM=!0:this.isActive_streetOSM=!1};let i=o("treated street");t.append(i.div),i.checkBox.onchange=()=>{!0===i.checkBox.checked?this.isActive_treated_st=!0:this.isActive_treated_st=!1};let n=o("control street");t.append(n.div),n.checkBox.onchange=()=>{!0===n.checkBox.checked?this.isActive_control_st=!0:this.isActive_control_st=!1};let r=o("zones 30");t.append(r.div),r.checkBox.onchange=()=>{!0===r.checkBox.checked?this.isActive_zones_30=!0:this.isActive_zones_30=!1};let a=o("Node");t.append(a.div),a.checkBox.onchange=()=>{!0===a.checkBox.checked?this.isActive_twitter=!0:this.isActive_twitter=!1};let c=h("Month");t.append(c.div),c.slider.onchange=()=>{this.month=+c.slider.value}}}const o=t=>{const e=document.createElement("div");e.style.display="flex";const s=document.createElement("input");s.type="checkbox";const i=document.createElement("div");return i.textContent=t,i.style.color="#aaa",e.appendChild(s),e.appendChild(i),{div:e,checkBox:s}},h=t=>{const e=document.createElement("div");e.style.display="flex";const s=document.createElement("input");s.type="range",s.min="0",s.max="12";const i=document.createElement("div");return i.textContent=t,i.style.color="#aaa",e.appendChild(s),e.appendChild(i),{div:e,slider:s}}},91572:(t,e,s)=>{s.r(e),s.d(e,{Solution:()=>a});var i=s(17760),o=s(55913),h=s(87968),n=s(54078),r=s(10730);class a extends o.TF{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main"),this.streetOSM=[],this.routesTreated=[],this.routesControl=[],this.zones30=[],this.zones15=[],this.routesMain=[],this.ui=void 0,this.meshTwitter=void 0,this.meshStreet=void 0,this.meshNode=void 0,this.meshTreated=void 0,this.meshControl=void 0,this.meshPolygon=void 0,this.meshRoutesMain=void 0,this.meshAreaGon=void 0,this.meshPolygon2=void 0,this.pts=[];const t=new i.cek(16777215,.8);this.camera.add(t),this.scene.add(t);const e=document.createElement("canvas");e.style.position="absolute",e.style.pointerEvents="none",e.style.mixBlendMode="darken",e.width=this.hostDiv.clientWidth,e.height=this.hostDiv.clientHeight,this.hostDiv.appendChild(e);const s=e.getContext("webgl");new n.B(s,.5,5).Render(s),this.ui=new r.UI(this),this.camera.position.set(0,40,48);(0,h.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates);this.meshStreet=l(this.scene,this.streetOSM,[0,1,1]),this.meshNode=c(this.scene,this.streetOSM,[0,1,1]),(0,o.Vu)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/twitter_data_2010-2015.json").then((t=>{const e=t.split(/\r\n|\r|\n/g),s=[];for(let i=1;i<e.length;++i){const t=e[i].split(","),h=+t[3],n=+t[4];if(0!==h&&0!==n&&!isNaN(h)&&!isNaN(n)){const[t,e]=(0,o._Y)(h,n),i=.01*(t+-15478803.88731685),r=.01*(e+-4766681.448690384);this.pts.push(i,0,r),s.push(0,.5,.5)}}const h=new i.u9r,n=new i.UY4({vertexColors:!0,size:1.5});h.setAttribute("position",new i.a$l(this.pts,3)),h.setAttribute("color",new i.a$l(s,3)),h.computeBoundingSphere(),this.meshTwitter=new i.woe(h,n),this.scene.add(this.meshTwitter)})),(0,h.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/Paris-main-st.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.routesMain.push(t.features[e].geometry.coordinates);this.meshRoutesMain=l(this.scene,this.routesMain,[1,1,0])})),(0,h.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/treated-st.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.routesTreated.push(t.features[e].geometry.coordinates);this.meshTreated=l(this.scene,this.routesTreated,[1,0,0])})),(0,h.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/control-st.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.routesControl.push(t.features[e].geometry.coordinates);this.meshControl=l(this.scene,this.routesControl,[0,1,0])})),(0,h.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/zones-30.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.zones30.push(t.features[e].geometry.coordinates)})),this.start()}))}update(t){void 0!==this.meshTwitter&&(this.ui.isActive_high_low_connectedness_user?this.meshTwitter.visible=!0:this.meshTwitter.visible=!1),void 0!==this.meshRoutesMain&&(this.ui.isActive_Paris_main_st?this.meshRoutesMain.visible=!0:this.meshRoutesMain.visible=!1),void 0!==this.meshStreet&&(this.ui.isActive_streetOSM?this.meshStreet.visible=!0:this.meshStreet.visible=!1),void 0!==this.meshNode&&(this.ui.isActive_twitter?this.meshNode.visible=!0:this.meshNode.visible=!1),void 0!==this.meshTreated&&(this.ui.isActive_treated_st?this.meshTreated.visible=!0:this.meshTreated.visible=!1),void 0!==this.meshControl&&(this.ui.isActive_control_st?this.meshControl.visible=!0:this.meshControl.visible=!1),void 0!==this.meshPolygon&&(this.ui.isActive_zones_30?this.meshPolygon.visible=!0:this.meshPolygon.visible=!1)}}const c=(t,e,s)=>{const h=new i.u9r,n=new i.UY4({vertexColors:!0,size:.5}),r=[],a=[];for(let i=0;i<e.length;++i){const t=e[i];for(let e=0;e<t.length;++e)for(let i=0;i<t[e].length;++i){const[h,n]=(0,o._Y)(t[e][i][0],t[e][i][1]),c=.01*(h+-15478803.88731685),l=.01*(n+-4766681.448690384);r.push(c,0,l),a.push(s[0],s[1],s[2])}}h.setAttribute("position",new i.a$l(r,3)),h.setAttribute("color",new i.a$l(a,3)),h.computeBoundingSphere();const c=new i.woe(h,n);return t.add(c),c},l=(t,e,s)=>{const h=new i.u9r,n=new i.nls({vertexColors:!0}),r=[],a=[],c=[];let l=0,d=0,v=0;for(let i=0;i<e.length;++i){const t=e[i];for(let e=0;e<t.length;++e)for(let i=0;i<t[e].length;++i){const[h,n]=(0,o._Y)(t[e][i][0],t[e][i][1]);l+=h,d+=n,v+=1;const u=.01*(h+-15478803.88731685),m=.01*(n+-4766681.448690384);r.push(u,0,m),a.push(s[0],s[1],s[2]),i<t[e].length-1&&c.push(Math.floor(r.length/3)-1,Math.floor(r.length/3))}}h.setIndex(c),h.setAttribute("position",new i.a$l(r,3)),h.setAttribute("color",new i.a$l(a,3)),h.computeBoundingSphere();const u=new i.ejS(h,n);return t.add(u),u}}}]);
//# sourceMappingURL=91572.16ef8ca1.chunk.js.map