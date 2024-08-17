"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[51654],{51654:(t,e,s)=>{s.r(e),s.d(e,{Solution:()=>J});var n=s(55913);class o{constructor(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=e,this.z=s}}const r=(t,e)=>Math.sqrt(i(t,e)),i=(t,e)=>(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)+(t.z-e.z)*(t.z-e.z),h=(t,e,s)=>t+s*(e-t),d=(t,e,s)=>{let n=s.x-e.x,r=s.y-e.y,i=((t.x-e.x)*n+(t.y-e.y)*r)/(n*n+r*r),d=h(e.x,s.x,i),a=h(e.y,s.y,i);return new o(d,a)};class a{constructor(){this.type="node",this.isSelected=!1,this.id=0,this.visited=!1,this.data=[]}}class c{constructor(t){this.graphSystem=void 0,this.nodes=[],this.edges=[],this.graphSystem=t}}class l extends a{constructor(t,e){super(),this.n0=void 0,this.n1=void 0,this.length=-1,this.type="edge",this.n0=t,this.n1=e}getLength(){return this.length=r(this.n0.vec,this.n1.vec),this.length}toJSON(){return{id:this.id,n0:this.n0.id,n1:this.n1.id,data:this.data}}remove(){this.n0.removeEdge(this),this.n1.removeEdge(this)}}class p extends a{constructor(t,e,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;super(),this.graph=void 0,this.vec=void 0,this.edges=[],this.r=5,this.networkDistance=-1,this.countVisit=0,this.graph=t,this.type="node",this.vec=new o(e,s,n)}reset(){this.networkDistance=-1,this.countVisit=0,this.visited=!1}toJSON(){return{id:this.id,vec:{x:this.vec.x,y:this.vec.y,z:this.vec.z},data:this.data}}remove(){this.graph.graphSystem.removeNode(this)}removeEdge(t){this.edges.splice(this.edges.indexOf(t),1)}}const g=(t,e,s,n,o,r)=>Math.sqrt((t-n)*(t-n)+(e-o)*(e-o)+(s-r)*(s-r)),u=function(t,e){return g(t.vec.x,t.vec.y,t.vec.z,e.vec.x,e.vec.y,e.vec.z)},m=function(t,e,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;void 0===s&&(s=u);for(let r=0;r<t.length;++r)t[r].reset();let o=[e];e.networkDistance=0;for(let r=0;r<1e7&&0!==o.length;++r){let t=o[0];o.shift();for(let e=0;e<t.edges.length;++e){const r=t.edges[e],i=t===r.n0?r.n1:r.n0,h=s(t,i,n),d=t.networkDistance+h;(-1===i.networkDistance||d<i.networkDistance)&&(i.networkDistance=d,o.push(i))}}},v=(t,e)=>{let s=0,n=0,o=[];if(-1!==e.networkDistance){o.push(t[e.id]);let r=e;for(s=0;s<1e5;++s){let e=r;for(e.countVisit++,n=0;n<r.edges.length;++n){const t=r.edges[n],s=r===t.n0?t.n1:t.n0;s.networkDistance<e.networkDistance&&(e=s)}if(e===r)break;r=e,o.push(t[r.id])}}return o};class S{}S.TYPE={Manhattan:"Manhattan  ",Euclidean:"Euclidean "},S.strength=.01,S.distanceManhattan=(t,e,s,n,o,r)=>Math.abs(t-n)+Math.abs(e-o)+Math.abs(s-r),S.distanceEuclidean=(t,e,s,n,o,r)=>Math.sqrt((t-n)*(t-n)+(e-o)*(e-o)+(s-r)*(s-r)),S.gePath=(t,e,s)=>{S.typeHeuristic=S.distanceEuclidean,s===S.TYPE.Manhattan&&(S.typeHeuristic=S.distanceManhattan);const n=[t],o=[];let r,i=100;for(;i--;)if(r=S.propagation(n,o,e),void 0!==r&&r.length)return r;return r},S.path=[],S.propagation=(t,e,s)=>{if(!(t.length>0))return S.path;{let n=0;for(let e=0;e<t.length;e++)t[e].f<t[n].f&&(n=e),t[e].f===t[n].f&&t[e].g>t[n].g&&(n=e);let o=t[n];if(o===s)return[o,o.previous,...S.path];S.path=[];let r=o;for(;r.previous&&(S.path.push(r.previous),r=r.previous,r.previous!==S.path[S.path.length-2]););t.splice(t.indexOf(o),1),e.push(o);let i=o.neighbors;for(let h=0;h<i.length;h++){let n=i[h];if(!e.includes(n)&&!n.blocked){let e=o.g+S.heuristic(n,o)*S.strength;if(t.includes(n))continue;t.push(n),n.g=e,n.h=S.heuristic(n,s),n.f=n.g+n.h,n.previous=o}}}},S.typeHeuristic=void 0,S.heuristic=(t,e)=>S.typeHeuristic(t.x,t.y,t.z,e.x,e.y,e.z);class y{constructor(t,e,s){this.id=-1,this.f=0,this.h=0,this.g=0,this.x=0,this.y=0,this.z=0,this.neighbors=[],this.edges=[],this.previous=void 0,this.blocked=!1,this.x=t,this.y=e,this.z=s}}class f{constructor(t,e){this.id=-1,this.n0=void 0,this.n1=void 0,this.n0=t,this.n1=e,this.n0.edges.push(this),this.n1.edges.push(this),t.neighbors.push(e),e.neighbors.push(t)}}class x{constructor(){this.nodes=[],this.edges=[],this.nodes=[],this.edges=[]}addVertex(t){this.nodes.push(t)}addEdge(t,e,s){this.edges.push({n0:t,n1:e,weight:s})}primMST(t){const e={},s=[];for(e[t]=!0;s.length<this.nodes.length-1;){let t=null;if(this.edges.forEach((s=>{(e[s.n0]&&!e[s.n1]||!e[s.n0]&&e[s.n1])&&(!t||s.weight<t.weight)&&(t=s)})),!t)break;s.push(t),e[t.n0]=!0,e[t.n1]=!0}return s}}class E{constructor(){this.graph=void 0,this.pathMST=void 0,this.nodeStart=void 0,this.nodeEnd=void 0,this.nodePre=void 0,this._captured=void 0,this.graph=new c(this)}get captured(){return this._captured}set captured(t){this._captured&&(this._captured.isSelected=!1),this._captured=t,t&&(this._captured.isSelected=!0)}resetCapture(){this.captured=void 0,this.nodePre=void 0}addNode(t,e){const s=new p(this.graph,t,e,0);return this.graph.nodes.push(s),this.resetCapture(),s}addEdge(t,e){if(t===e)return;if(this.findEdgeByNodes(t,e))return;const s=new l(t,e);return t.edges.push(s),e.edges.push(s),this.graph.edges.push(s),this.edgeSplitByEdge(s),this.resetCapture(),s}addEdgeByClosestNode(t){const e=this.findNode(t);e&&this.addEdge(t,e),this.resetCapture()}addEdgeSplit(t,e){const s=new l(t,e);return t.edges.push(s),e.edges.push(s),this.graph.edges.push(s),s}edgeSplitByNode(t,e){const s=e.n0,n=e.n1;this.addEdge(s,t),this.addEdge(t,n),this.removeEdge(e),this.resetCapture()}edgeSplitByNodeEdges(t){const e=[];let s=t.edges.length;for(let n=0;n<s;++n){const s=t.edges[n],o=[];for(let t=this.graph.edges.length-1;t>-1;--t){const e=this.graph.edges[t];if(s.n0!==e.n0&&s.n0!==e.n1&&s.n1!==e.n0&&s.n1!==e.n1){const t=C(s,e);if(t){const s=new p(this.graph,t[0],t[1]);this.graph.nodes.push(s),this.addEdgeSplit(s,e.n0),this.addEdgeSplit(s,e.n1),this.removeEdge(e),o.push(s)}}}if(o.length>0){let t=s.n0;o.push(s.n1);const n=o.map((t=>r(t.vec,s.n0.vec))),i=n.map(((t,e)=>e)).sort(((t,e)=>n[t]-n[e]));this.addEdgeSplit(t,o[i[0]]);for(let e=0;e<i.length-1;++e)this.addEdgeSplit(o[i[e]],o[i[e+1]]);e.push(s),this.graph.edges.splice(this.graph.edges.indexOf(s),1)}}e.forEach((t=>{t.n0.removeEdge(t),t.n1.removeEdge(t)})),this.updateID()}edgeSplitByEdge(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const s=[];for(let n=this.graph.edges.length-1;n>-1;--n){const e=this.graph.edges[n];if(t.n0!==e.n0&&t.n0!==e.n1&&t.n1!==e.n0&&t.n1!==e.n1){const n=C(t,e);if(n){const t=new p(this.graph,n[0],n[1]);this.graph.nodes.push(t),this.addEdgeSplit(t,e.n0),this.addEdgeSplit(t,e.n1),this.removeEdge(e),s.push(t)}}}if(s.length>0){let e=t.n0;s.push(t.n1);const n=s.map((e=>r(e.vec,t.n0.vec))),o=n.map(((t,e)=>e)).sort(((t,e)=>n[t]-n[e]));this.addEdgeSplit(e,s[o[0]]);for(let t=0;t<o.length-1;++t)this.addEdgeSplit(s[o[t]],s[o[t+1]]);this.removeEdge(t)}e&&this.updateID()}removeNode(t){t.edges.forEach((e=>{e.n0===t?e.n1.removeEdge(e):e.n0.removeEdge(e),this.graph.edges.splice(this.graph.edges.indexOf(e),1)})),this.graph.nodes.splice(this.graph.nodes.indexOf(t),1),this.updateID(),this.resetCapture()}removeEdge(t){t.n0.removeEdge(t),t.n1.removeEdge(t),this.graph.edges.splice(this.graph.edges.indexOf(t),1)}findNode(t){let e=Number.MAX_VALUE,s=-1;for(let n=0;n<this.graph.nodes.length;++n){if(this.graph.nodes[n]===t)continue;const o=this.graph.nodes[n].vec,i=r(o,t.vec);e>i&&(e=i,s=n)}if(s>-1)return this.graph.nodes[s]}findNodeVec(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,n=Number.MAX_VALUE,i=-1;const h=new o(t,e);for(let o=0;o<this.graph.nodes.length;++o){const t=this.graph.nodes[o].vec,e=r(t,h);n>e&&(n=e,i=o)}if(i>-1&&n<s)return this.graph.nodes[i]}findEdgeVec(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8;const n=new o(t,e,0);for(let o=0;o<this.graph.edges.length;++o){const t=this.graph.edges[o],e=d(n,t.n0.vec,t.n1.vec);if(r(n,e)<s)return{edge:t,vec:e}}}findEdgeByEdge(t){return this.findEdgeByNodes(t.n0,t.n1)}findEdgeByNodes(t,e){for(let s=0;s<this.graph.edges.length;++s){const n=this.graph.edges[s];if(t===n.n0&&e===n.n1||t===n.n1&&e===n.n0)return n}}getEdgeByTwoNode(t,e){for(let s=0;s<this.graph.edges.length;++s){const n=this.graph.edges[s];if(n.n0===t&&n.n1===e||n.n0===e&&n.n1===t)return n}}mergeTwoNodes(t,e){const s=[];for(let n=0;n<e.edges.length;++n){const t=e.edges[n];t.n0===e?s.push(t.n1):s.push(t.n0)}e.remove(),s.forEach((e=>{this.getEdgeByTwoNode(t,e)||this.addEdge(t,e)}))}updateID(){for(let t=0;t<this.graph.nodes.length;++t)this.graph.nodes[t].id=t;for(let t=0;t<this.graph.edges.length;++t)this.graph.edges[t].id=t}resetVisit(){for(let t=0;t<this.graph.nodes.length;++t)this.graph.nodes[t].visited=!1}setNodeStart(){this.captured&&(this.nodeStart=this.captured)}setNodeEnd(){this.captured&&(this.nodeEnd=this.captured)}computePath(){if(this.nodeStart&&this.nodeEnd)return w(this.graph,this.nodeStart.id,this.nodeEnd.id)}computePathAStar(){if(this.nodeStart&&this.nodeEnd)return b(this.graph,this.nodeStart.id,this.nodeEnd.id)}computeMST(){const t=k(this.graph);return this.pathMST=t,t}computeBFS(){this.resetVisit();return(t=>{let e=0,s=[],n=[];for(t.visited=!0,n.push(t),s.push(t);n.length>0;){const t=n.shift();for(let e=0;e<t.edges.length;++e){const o=t.edges[e],r=o.n0===t?o.n1:o.n0;r.visited||(r.visited=!0,s.push(r),n.push(r))}if(e++>1e5)return}return s})(this.graph.nodes[0]).map((t=>t.id))}computeDFS(){this.resetVisit();return(t=>{const e=[],s=t=>{if(!t.visited){t.visited=!0,e.push(t);for(let e=0;e<t.edges.length;++e){const n=t.edges[e],o=n.n0===t?n.n1:n.n0;s(o)}}};return s(t),e})(this.graph.nodes[0]).map((t=>t.id))}}const C=(t,e)=>N(t.n0,t.n1,e.n0,e.n1),N=(t,e,s,n)=>((t,e,s,n,o,r,i,h)=>{if(t===s&&e===n||o===i&&r===h)return;const d=(h-r)*(s-t)-(i-o)*(n-e);if(0===d)return;const a=((i-o)*(e-r)-(h-r)*(t-o))/d,c=((s-t)*(e-r)-(n-e)*(t-o))/d;if(a<0||a>1||c<0||c>1)return;return[t+a*(s-t),e+a*(n-e)]})(t.vec.x,t.vec.y,e.vec.x,e.vec.y,s.vec.x,s.vec.y,n.vec.x,n.vec.y),k=t=>{const e=(t=>{const e=new x;for(let s=0;s<t.nodes.length;++s)e.addVertex(t.nodes[s].id);for(let s=0;s<t.edges.length;++s){const n=t.edges[s];e.addEdge(n.n0.id,n.n1.id,n.getLength())}return e.primMST(0)})(t);return e},w=(t,e,s)=>{const n=((t,e,s)=>(m(t.nodes,e,u,.1),v(t.nodes,s)))(t,t.nodes[e],t.nodes[s]);return n},b=(t,e,s)=>{const n=((t,e,s)=>{const n=[];for(let r=0;r<t.nodes.length;++r){const e=t.nodes[r],s=new y(e.vec.x,e.vec.y,e.vec.z);s.id=e.id,n.push(s)}const o=[];for(let r=0;r<t.edges.length;++r){const e=t.edges[r],s=new f(n[e.n0.id],n[e.n1.id]);o.push(s)}return S.gePath(n[e.id],n[s.id])})(t,t.nodes[e],t.nodes[s]);return n};class D{constructor(){this.histories=[],this.currentIndex=-1}reset(){this.histories=[],this.currentIndex=-1}push(t){this.currentIndex<this.histories.length-1&&this.histories.splice(this.currentIndex+1,this.histories.length),this.histories.push(t),this.currentIndex=this.histories.length-1}getCurrentIndex(){return this.currentIndex}getHistoryLength(){return this.histories.length}getCurrentState(){return{currentIndex:this.getCurrentIndex(),historyNum:this.getHistoryLength()}}undo(){if(0!==this.currentIndex)return this.currentIndex--,this.histories[this.currentIndex]}redo(){return this.currentIndex++,this.currentIndex=this.currentIndex<this.histories.length?this.currentIndex:this.histories.length-1,this.histories[this.currentIndex]}}class M{constructor(){this.manager=void 0,this.manager=new D}getLog(){return this.manager.getCurrentState()}resetState(){this.manager.reset(),this.captureState([])}captureState(t){this.manager.push(t);return this.manager.getCurrentState()}undo(){return this.manager.undo()}redo(){return this.manager.redo()}}class P{constructor(t){this.controller=void 0,this.sceneState=void 0,this.graphSystem=void 0,this.controller=t,this.graphSystem=this.controller.graphSystem,this.sceneState=new M}reset(){const t=this.controller.graphSystem.graph;t.nodes=[],t.edges=[],this.capture()}capture(){this.sceneState.captureState(this.toJSON()),this.updateUndoRedoHist()}updateUndoRedoHist(){if(this.controller.divHist){const t=this.sceneState.getLog();this.controller.divHist.textContent="hist: ".concat(t.currentIndex,"/").concat(t.historyNum-1)}}undo(){const t=this.sceneState.undo();t&&this.dump(t),this.updateUndoRedoHist(),this.controller.graphSystem.resetCapture()}redo(){const t=this.sceneState.redo();t&&this.dump(t),this.updateUndoRedoHist(),this.controller.graphSystem.resetCapture()}toJSON(){const t={node:[],edge:[]};return this.controller.graphSystem.graph.nodes.forEach((e=>{t.node.push(e.toJSON())})),this.controller.graphSystem.graph.edges.forEach((e=>{t.edge.push(e.toJSON())})),t}exportJSON(){!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"download";const s=document.createElement("a");s.href="data:application/json;charset=utf-8,"+encodeURIComponent(t),s.download="".concat(e),s.click()}(JSON.stringify(this.toJSON()),"graph.json")}dump(t){const e=this.controller.graphSystem;e.graph.nodes=[],e.graph.edges=[];for(let s=0;s<t.node.length;++s){const n=t.node[s],o=e.addNode(n.vec.x,n.vec.y,n.vec.z);o.id=n.id,o.data=n.data}for(let s=0;s<t.edge.length;++s){const n=t.edge[s],o=e.addEdge(e.graph.nodes[n.n0],e.graph.nodes[n.n1]);o.id=n.id,o.data=n.data}}populate(){const t=Math.random()*this.controller.canvas.width,e=Math.random()*this.controller.canvas.height;this.controller.mouseClick(t,e)}toggleDelaunay(t){this.controller.renderer.toggleDelaunay=t}toggleMST(t){this.controller.graphSystem.computeMST(),this.controller.renderer.toggleMST=t}computedBSF(){const t=this.controller.graphSystem.computeBFS();this.updateSearchResult("BFS: "+t.join(", "))}computedDFS(){const t=this.controller.graphSystem.computeDFS();this.updateSearchResult("DFS: "+t.join(", "))}updateSearchResult(t){this.controller.divSearchResult.textContent=t}computedDijkstra(t){this.controller.renderer.toggleDijkstra=t}computedAStar(t){this.controller.renderer.toggleAStar=t}removeSelection(){this.controller.graphSystem.captured&&(this.controller.graphSystem.captured.remove(),this.controller.graphSystem.captured=void 0)}addNodeWithClosestNode(t,e){const s=this.graphSystem.addNode(t,e,0);this.graphSystem.addEdgeByClosestNode(s)}}var T=s(458);class I{constructor(t){this.controller=void 0,this.toggleDelaunay=!1,this.toggleMST=!1,this.toggleDijkstra=!1,this.toggleAStar=!1,this.controller=t}render(t){if(this.controller.graphSystem.captured?this.controller.divSel.textContent=this.controller.graphSystem.captured.type:this.controller.divSel.textContent="undefined",this.renderNodeStartEnd(t),t.beginPath(),t.arc(this.controller.m.x,this.controller.m.y,2,0,6.28),t.closePath(),t.fillStyle="#888",t.fill(),this.toggleMST&&this.controller.graphSystem.pathMST){const e=this.controller.graphSystem.graph.nodes;this.controller.graphSystem.pathMST.forEach((s=>{const n=e[s.n0].vec,o=e[s.n1].vec;t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.lineWidth=5,t.stroke()}))}if(this.toggleDelaunay&&((t,e)=>{new T.oc(e.map((t=>t.vec))).DrawTriClass(t)})(t,this.controller.graphSystem.graph.nodes),this.toggleDijkstra&&this.controller.graphSystem.nodeStart&&this.controller.graphSystem.nodeEnd){const e=this.controller.graphSystem.computePath();t.beginPath(),t.moveTo(e[0].vec.x,e[0].vec.y);for(let s=1;s<e.length;++s)t.lineTo(e[s].vec.x,e[s].vec.y);t.strokeStyle="#f0f",t.lineWidth=5,t.stroke()}if(this.toggleAStar&&this.controller.graphSystem.nodeStart&&this.controller.graphSystem.nodeEnd){const e=this.controller.graphSystem.computePathAStar();t.beginPath(),t.moveTo(e[0].x,e[0].y);for(let s=1;s<e.length;++s)t.lineTo(e[s].x,e[s].y);t.strokeStyle="#f0f",t.lineWidth=5,t.stroke()}this.renderGraph(t)}renderNodeStartEnd(t){if(t.fillStyle="#0ff",this.controller.graphSystem.nodeStart){const e=this.controller.graphSystem.nodeStart.vec;t.beginPath(),t.arc(e.x,e.y,8,0,2*Math.PI),t.closePath(),t.fill()}if(this.controller.graphSystem.nodeEnd){const e=this.controller.graphSystem.nodeEnd.vec;t.beginPath(),t.arc(e.x,e.y,8,0,2*Math.PI),t.closePath(),t.fill()}}renderGraph(t){this.controller.log="N:".concat(this.controller.graphSystem.graph.nodes.length,", E:").concat(this.controller.graphSystem.graph.edges.length),this.controller.graphSystem.graph.edges.forEach((e=>{this.renderGraphEdge(t,e)})),this.controller.graphSystem.graph.nodes.forEach((e=>{this.renderGraphNode(t,e)}))}renderGraphNode(t,e){t.beginPath(),t.arc(e.vec.x,e.vec.y,e.r,0,6.28),t.closePath(),t.fillStyle="#ff0000",t.fill(),e.isSelected&&(t.lineWidth=3,t.strokeStyle="#00f",t.stroke()),t.strokeStyle="#ff0000",t.lineWidth=1,t.strokeText("".concat(e.networkDistance),e.vec.x,e.vec.y-20),t.strokeText("".concat(e.id),e.vec.x,e.vec.y-7)}renderGraphEdge(t,e){e.isSelected&&(t.lineWidth=3,t.strokeStyle="#00f",t.beginPath(),t.moveTo(e.n0.vec.x,e.n0.vec.y),t.lineTo(e.n1.vec.x,e.n1.vec.y),t.stroke()),t.lineWidth=1,t.beginPath(),t.moveTo(e.n0.vec.x,e.n0.vec.y),t.lineTo(e.n1.vec.x,e.n1.vec.y),t.strokeStyle="#0f0",t.stroke(),t.strokeStyle="#00ff00",t.lineWidth=1;const s=e.n0.vec.x+.5*(e.n1.vec.x-e.n0.vec.x),n=e.n0.vec.y+.5*(e.n1.vec.y-e.n0.vec.y);t.strokeText("".concat(e.id),s,n-7)}}class B{constructor(t){this.common=void 0,this.graphSystem=void 0,this.renderer=void 0,this.canvas=void 0,this.divHist=void 0,this.divLog=void 0,this.divSel=void 0,this.divSearchResult=void 0,this.needPopulate=!1,this.m=new o(0,0,0),this.log="",this.wasMoved=!1,this.graphSystem=new E,this.common=new P(this),this.renderer=new I(this),this.canvas=t}mouseDown(t,e){const s=this.graphSystem.findNodeVec(t,e);this.graphSystem.captured&&this.graphSystem.captured!==s&&(this.graphSystem.nodePre=this.graphSystem.captured),this.graphSystem.captured=s}mouseClick(t,e){if(this.graphSystem.captured=this.graphSystem.findNodeVec(t,e),this.graphSystem.nodePre&&this.graphSystem.captured)return this.graphSystem.addEdge(this.graphSystem.nodePre,this.graphSystem.captured),this.common.capture(),void this.updatePost();const s=this.graphSystem.findEdgeVec(t,e);if(s&&void 0===this.graphSystem.captured){const t=this.graphSystem.addNode(s.vec.x,s.vec.y);return this.graphSystem.edgeSplitByNode(t,s.edge),this.common.capture(),void this.updatePost()}return void 0===this.graphSystem.captured?(this.common.addNodeWithClosestNode(t,e),this.common.capture(),void this.updatePost()):void 0}mouseMove(t,e){this.m.x=t,this.m.y=e}mouseUp(){if(this.graphSystem.captured&&"node"===this.graphSystem.captured.type){const t=this.graphSystem.captured;this.graphSystem.edgeSplitByNodeEdges(t);const e=this.graphSystem.findNode(t);if(e){r(t.vec,e.vec)<8&&this.graphSystem.mergeTwoNodes(e,t)}this.wasMoved&&(this.common.capture(),this.wasMoved=!1),this.graphSystem.captured=void 0,this.updatePost()}}mouseDrag(t,e){if(this.graphSystem.captured&&"node"===this.graphSystem.captured.type){const s=this.graphSystem.captured;s.vec.x=t,s.vec.y=e}this.wasMoved=!0}updatePost(){this.renderer.toggleMST&&this.graphSystem.computeMST()}render(t){this.needPopulate&&this.populate(),this.divLog.textContent=this.log,this.renderer.render(t)}exportJSON(){return this.common.exportJSON()}populate(){return this.common.populate()}}class O{constructor(t){this.app=void 0,this.app=t,this.initUI()}initUI(){const t=document.createElement("div");t.style.width="160px",t.style.position="absolute",t.style.background="#222",t.style.padding="10px",this.app.divHost.appendChild(t);const e=document.createElement("button");e.textContent="run",e.onclick=()=>{this.app.controller.needPopulate=!this.app.controller.needPopulate},t.appendChild(e);const s=document.createElement("button");s.textContent="remove",s.onclick=()=>{this.app.controller.common.removeSelection()},t.appendChild(s);const n=document.createElement("button");n.textContent="Export JSON",t.appendChild(n),n.onclick=()=>{this.app.controller.exportJSON()};const o=document.createElement("div");o.textContent="N:0, E:0",o.style.color="#bbb",t.appendChild(o),this.app.controller.divLog=o;const r=document.createElement("div");r.textContent="hist: 0",r.style.color="#bbb",t.appendChild(r),this.app.controller.divHist=r;const i=document.createElement("div");i.textContent="undefined",i.style.color="#bbb",t.appendChild(i),this.app.controller.divSel=i;const h=z("reset",(()=>{this.app.controller.common.reset()}));t.appendChild(h);const d=z("undo",(()=>{this.app.controller.common.undo()}));t.appendChild(d);const a=z("redo",(()=>{this.app.controller.common.redo()}));t.appendChild(a);const c=H("Delaunay",(t=>{this.app.controller.common.toggleDelaunay(t)}));t.appendChild(c.div);const l=H("MST",(t=>{this.app.controller.common.toggleMST(t)}));t.appendChild(l.div);const p=z("DFS",(()=>{this.app.controller.common.computedDFS()}));t.appendChild(p);const g=z("BFS",(()=>{this.app.controller.common.computedBSF()}));t.appendChild(g);const u=document.createElement("div"),m=document.createElement("p");m.style.marginTop="2px",u.appendChild(m),t.appendChild(u),this.app.controller.divSearchResult=m;const v=H("Dijkstra",(t=>{this.app.controller.common.computedDijkstra(t)}));t.appendChild(v.div);const S=H("*Star",(t=>{this.app.controller.common.computedAStar(t)}));t.appendChild(S.div);const y=z("Start",(()=>{this.app.controller.common.graphSystem.setNodeStart()}));t.appendChild(y);const f=z("End",(()=>{this.app.controller.common.graphSystem.setNodeEnd()}));t.appendChild(f)}}const z=(t,e)=>{const s=document.createElement("button");return s.textContent=t,s.onclick=()=>{e()},s},H=(t,e)=>{const s=document.createElement("div");s.style.display="flex";const n=document.createElement("input");n.type="checkbox",n.defaultChecked=!1;const o=document.createElement("div");return o.textContent=t,o.style.color="#aaa",s.appendChild(n),s.appendChild(o),n.onchange=()=>e(n.checked),{div:s,checkBox:n}};class J extends n.bb{constructor(t){super(document.getElementById(t)),this.controller=void 0,this.ui=void 0,this.canvas.style.position="absolute",this.init()}init(){this.controller=new B(this.canvas),this.mouseClick(300,300),this.ui=new O(this),this.start()}render(t){this.controller.render(t)}mouseClick(t,e){this.controller.mouseClick(t,e)}mouseDown(t,e){this.controller.mouseDown(t,e)}mouseMove(t,e){this.controller.mouseMove(t,e)}mouseDrag(t,e){this.controller.mouseDrag(t,e)}mouseUp(){this.controller.mouseUp()}}}}]);
//# sourceMappingURL=51654.5f71eb36.chunk.js.map