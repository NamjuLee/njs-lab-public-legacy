"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[66101],{66101:(t,o,e)=>{e.r(o),e.d(o,{Solution:()=>i});var s=e(55913),n=e(87968);class i extends s.J0{constructor(t){super(t),this.polygons=[],this.colors=[],this.centers=[]}initPost(){this.mView.on("drag",(t=>{t.stopPropagation()})),this.mView.navigation.mouseWheelZoomEnabled=!1,this.center(-97.893669,39.176304),this.zoom(4);const t=document.createElement("canvas");t.id="layer",t.width=this.mView.container.clientWidth,t.height=this.mView.container.clientHeight,t.style.background="rgba(0, 32, 0, 0.6)",t.style.position="absolute",t.style.pointerEvents="none",this.mView.container.appendChild(t),(0,n.getJSONFromURL)("/njs-lab-public/static/data/gz_2010_us_050_00_20m.json").then((t=>{const o=t.features;console.log({features:o});for(let e=0;e<o.length;++e){const t=o[e].geometry;if("Polygon"===t.type){let o=t.coordinates[0][0][0],e=t.coordinates[0][0][1];const s=[];s.push(o,e);for(let n=1;n<t.coordinates[0].length;++n)o=t.coordinates[0][n][0],e=t.coordinates[0][n][1],s.push(o,e);this.colors.push("rgba(0, 255, 0, ".concat(.2*Math.random()+.3,")")),this.polygons.push(s)}}}))}render(t){for(let o=0;o<this.polygons.length;++o){let e=this.polygons[o][0],s=this.polygons[o][1],n=this.toScreen(e,s);t.beginPath(),t.moveTo(n[0],n[1]);for(let i=2;i<this.polygons[o].length;i+=2)e=this.polygons[o][i],s=this.polygons[o][i+1],n=this.toScreen(e,s),t.lineTo(n[0],n[1]);t.closePath(),t.fillStyle=this.colors[o],t.fill()}this.isStatic=!0}mouseMove(t,o){}}}}]);
//# sourceMappingURL=66101.18227f10.chunk.js.map