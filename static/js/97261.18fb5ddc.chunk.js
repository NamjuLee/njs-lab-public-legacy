"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[97261],{97261:(s,t,e)=>{e.r(t),e.d(t,{Solution:()=>n});var o=e(55913),i=e(87968);class n extends o.J0{constructor(s){super(s),this.locations=[],this.colors=[],this.names=[]}initPost(){const s="#0683d2",t="#ec2f3d",e="#ff961e",o="#049564",n="#959597";(0,i.getJSONFromURL)("/njs-lab-public-legacy/static/data/MBTA_stop.geojson").then((i=>{let l=0,c=0,r=0;for(let h=0;h<i.features.length;++h){const a=i.features[h].geometry.coordinates;this.locations.push(a),l+=a[0],c+=a[1],r++,this.names.push(i.features[h].properties.name);const u=i.features[h].properties.lines;if(u.includes("blue"))this.colors.push(s);else{if(u.includes("red")){this.colors.push(t);continue}if(u.includes("orange")){this.colors.push(e);continue}if(u.includes("green")){this.colors.push(o);continue}this.colors.push(n)}}this.center(l/r,c/r),this.start()}))}render(s){for(let t=0;t<this.locations.length;++t){const e=this.toScreen(this.locations[t][0],this.locations[t][1]);l(s,e[0],e[1],this.time,this.colors[t]),c(s,e[0],e[1],this.names[t],this.colors[t])}}}const l=(s,t,e,o,i)=>{s.fillStyle=i,s.strokeStyle="#fff",s.lineWidth=.75,s.beginPath(),s.arc(t,e,2*(Math.sin(.8*o)+4),0,2*Math.PI),s.closePath(),s.fill(),s.stroke()},c=(s,t,e,o,i)=>{s.strokeStyle=i,s.lineWidth=.5,s.strokeText(o,t+13,e)}}}]);
//# sourceMappingURL=97261.18fb5ddc.chunk.js.map