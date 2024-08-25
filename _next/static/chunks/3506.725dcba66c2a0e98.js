"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3506],{3506:function(t,e,i){var s,r,h,o,a,n,c,d,l,m,u;i.r(e),i.d(e,{Demo510ImageTool:function(){return Q},Solution:function(){return Z}});class f{init(){let t=document.createElement("canvas"),e=document.createElement("canvas");if(t&&e){this.canvas=t,this.canvas.width=this.div.clientWidth,this.canvas.height=this.div.clientHeight,this.div.append(this.canvas),this.canvasOut=e,this.canvasOut.style.border="5px",this.ctxOut=this.canvasOut.getContext("2d"),this.core.app.divHost.append(this.canvasOut);let i=this.canvas.getContext("2d");i&&(this.ctx=i,this.isActive=!0,this.initEvent())}}initEvent(){this.canvas.addEventListener("keydown",t=>{}),this.canvas.addEventListener("keyup",t=>{}),this.canvas.addEventListener("mousedown",t=>{this.core.controller.mouseInteraction.mouseDown(t)},!1),this.canvas.addEventListener("mouseup",t=>{this.core.controller.mouseInteraction.mouseUp(t)},!1),this.canvas.addEventListener("mousemove",t=>{this.core.controller.mouseInteraction.mouseMove(t)},!1),this.canvas.addEventListener("wheel",t=>this.core.controller.mouseInteraction.mouseWheel(t,t.deltaY),!1),this.canvas.addEventListener("mouseout",t=>{this.core.controller.mouseInteraction.mouseOut(t)},!1),this.canvas.addEventListener("touchstart",t=>this.core.controller.touchInteraction.touchstart(t),!1),this.canvas.addEventListener("touchmove",t=>this.core.controller.touchInteraction.touchmove(t),!1),this.canvas.addEventListener("touchcancel",t=>this.core.controller.touchInteraction.touchcancel(t),!1),this.canvas.addEventListener("touchend",t=>this.core.controller.touchInteraction.touchend(t),!1)}capture(){let t=new Image;return t.crossOrigin="anonymous",t.src=this.canvasOut.toDataURL(),t}loopInit(){this.loop()}resize(){this.canvas.width=this.div.clientWidth,this.canvas.height=this.div.clientHeight}loop(){if(requestAnimationFrame(()=>{this.loop()}),this.loopNum++<130){let t=performance.now();this.renderPre(this.ctx);let e=performance.now();this.log="level: , total frames: ".concat(this.loopNum++," (FPS: ), a loop took: ").concat((e-t).toFixed(2)," ms to execute.")}}clear(t){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)}renderForce(){this.loopNum=0}renderPre(t){this.isActive&&(this.clear(this.ctx),this.render(t))}render(t){}constructor(t,e){this.isActive=!1,this.isViewChanging=!1,this.loopNum=0,this.needRenderloop=!0,this.ablePan=!0,this.mousePre=[0,0],this.loopNeeded=!1,this.core=t,this.div=e,this.loopNeeded=!1,this.init(),this.loopInit()}}let p=(t,e,i,s)=>Math.sqrt((t-i)*(t-i)+(e-s)*(e-s)),v=function(t,e,i,s,r){let h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.5;t.beginPath(),t.arc(e+s-h,i-r+h,h,4.71,6.28,!1),t.arc(e+s-h,i+r-h,h,0,1.57,!1),t.arc(e-s+h,i+r-h,h,1.57,3.14,!1),t.arc(e-s+h,i-r+h,h,3.14,4.71,!1),t.closePath(),t.strokeStyle="#000000",t.fillStyle="#ffffff",t.fill(),t.stroke()},g=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,s=[];for(let r=0;r<t.length;++r){let h=t[r]+(e[r]-t[r])*i;s.push(h)}return s};(s||(s={})).GetImage="GetImage",(c=r||(r={})).Canvas="Canvas",c.WebGL2="WebGL2",c.WebGPU="WebGPU",c.WebAssembly="WebAssembly";let y=(t,e,i)=>{let s=Math.max(t/=255,e/=255,i/=255),r=Math.min(t,e,i),h=(s+r)/2,o=(s+r)/2,a=(s+r)/2;if(s===r)h=o=0;else{let n=s-r;switch(o=a>.5?n/(2-s-r):n/(s+r),s){case t:h=(e-i)/n+(e<i?6:0);break;case e:h=(i-t)/n+2;break;case i:h=(t-e)/n+4}h/=6}return[h,o,a]},w=(t,e,i)=>{let s,r,h;if(0===e)s=r=h=i;else{let o=(t,e,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?t+(e-t)*6*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t,a=i<.5?i*(1+e):i+e-i*e,n=2*i-a;s=o(n,a,t+1/3),r=o(n,a,t),h=o(n,a,t-1/3)}return[Math.max(0,Math.min(Math.round(255*s),255)),Math.max(0,Math.min(Math.round(255*r),255)),Math.max(0,Math.min(Math.round(255*h),255))]};class x{get sizePoint(){return this._sizePoint}get sizeMidPoint(){return this._sizeMidPoint}updateColorBG(t,e,i){this._fillStyle[0]=t,this._fillStyle[1]=e,this._fillStyle[2]=i,this._fillStyleHover[0]=t,this._fillStyleHover[1]=e,this._fillStyleHover[2]=i}render(t){this.ColorInterpolation(),this.frame.isHover,t.fillStyle=this._fillStyleRuntime,t.beginPath(),t.rect(0,0,t.canvas.width,this.frame.y),t.rect(0,this.frame.y+this.frame.height,t.canvas.width,t.canvas.height),t.rect(0,0,this.frame.x,t.canvas.height),t.rect(this.frame.x+this.frame.width,0,t.canvas.width,t.canvas.height),t.fill(),this.renderPost(t),this._t+=.15}renderPost(t){t.lineWidth=1,t.lineDashOffset=this._t,t.setLineDash([4,1]),t.beginPath(),t.rect(this.frame.x,this.frame.y,this.frame.width,this.frame.height),t.strokeStyle=this._strokeStyle,t.stroke(),t.beginPath();for(let e=1;e<3;++e)t.moveTo(this.frame.x+this.frame.xOffGuid*e,this.frame.y),t.lineTo(this.frame.x+this.frame.xOffGuid*e,this.frame.y+this.frame.height),t.moveTo(this.frame.x,this.frame.y+this.frame.yOffGuid*e),t.lineTo(this.frame.x+this.frame.width,this.frame.y+this.frame.yOffGuid*e);if(t.stroke(),t.setLineDash([]),-1!==this.frame.idHover){t.beginPath();let e=[0,0];e[0]=this.frame.cpList[this.frame.idHover].x,e[1]=this.frame.cpList[this.frame.idHover].y,t.arc(e[0],e[1],8+2*Math.sin(.75*this._t),0,6.28),t.closePath(),t.fillStyle="rgba(255, 255, 255, 0.5)",t.fill()}if(this.frame.isHover)for(let e=0;e<this.frame.cpList.length;++e)this.frame.cpList[e].render(t)}ColorInterpolation(){this.frame.isHover?this._opacity+=.05:this._opacity-=.035,this._opacity>1&&(this._opacity=1),this._opacity<0&&(this._opacity=0);let t=g(this._fillStyle,this._fillStyleHover,this._opacity);this._fillStyleRuntime="rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(t[3],")")}constructor(t){this._opacity=0,this._t=0,this._strokeStyle="rgba(200, 200, 200, 1)",this._fillStyleRuntime="",this._fillStyle=[200,200,200,1],this._fillStyleHover=[200,200,200,.5],this._sizePoint=3,this._sizeMidPoint=3,this.frame=t}}(d=h||(h={})).Endpoint="Endpoint",d.Midpoint="Midpoint";class I{isHoverCheck(t,e){return p(this.x,this.y,t,e)<this.frame.r?this.id:-1}update(){"Endpoint"===this.type?0===this.id?(this.x=this.frame.x,this.y=this.frame.y):1===this.id?(this.x=this.frame.x+this.frame.width,this.y=this.frame.y):2===this.id?(this.x=this.frame.x+this.frame.width,this.y=this.frame.y+this.frame.height):3===this.id&&(this.x=this.frame.x,this.y=this.frame.y+this.frame.height):"Midpoint"===this.type&&(4===this.id?(this.x=this.frame.x+.5*this.frame.width,this.y=this.frame.y):5===this.id?(this.x=this.frame.x+this.frame.width,this.y=this.frame.y+.5*this.frame.height):6===this.id?(this.x=this.frame.x+.5*this.frame.width,this.y=this.frame.y+this.frame.height):7===this.id&&(this.x=this.frame.x,this.y=this.frame.y+.5*this.frame.height))}render(t){"Endpoint"===this.type?0===this.id?v(t,this.frame.x,this.frame.y,this.frame.renderer.sizePoint,this.frame.renderer.sizePoint):1===this.id?v(t,this.frame.x+this.frame.width,this.frame.y,this.frame.renderer.sizePoint,this.frame.renderer.sizePoint):2===this.id?v(t,this.frame.x+this.frame.width,this.frame.y+this.frame.height,this.frame.renderer.sizePoint,this.frame.renderer.sizePoint):3===this.id&&v(t,this.frame.x,this.frame.y+this.frame.height,this.frame.renderer.sizePoint,this.frame.renderer.sizePoint):"Midpoint"===this.type&&(4===this.id?v(t,this.frame.x+.5*this.frame.width,this.frame.y,4*this.frame.renderer.sizeMidPoint,this.frame.renderer.sizeMidPoint):5===this.id?v(t,this.frame.x+this.frame.width,this.frame.y+.5*this.frame.height,this.frame.renderer.sizeMidPoint,4*this.frame.renderer.sizeMidPoint):6===this.id?v(t,this.frame.x+.5*this.frame.width,this.frame.y+this.frame.height,4*this.frame.renderer.sizeMidPoint,this.frame.renderer.sizeMidPoint):7===this.id&&v(t,this.frame.x,this.frame.y+.5*this.frame.height,this.frame.renderer.sizeMidPoint,4*this.frame.renderer.sizeMidPoint))}constructor(t,e,i){this.frame=t,this.id=e,this.type=i,this.update()}}class C{offsetByID(t,e,i){switch(t){case 0:this.frame.x+=e,this.frame.y+=i,this.frame.width-=e,this.frame.height-=i;break;case 1:this.frame.width+=e,this.frame.y+=i,this.frame.height-=i;break;case 2:this.frame.width+=e,this.frame.height+=i;break;case 3:this.frame.x+=e,this.frame.width-=e,this.frame.height+=i;break;case 4:this.frame.y+=i,this.frame.height-=i;break;case 5:this.frame.width+=e;break;case 6:this.frame.height+=i;break;case 7:this.frame.x+=e,this.frame.width-=e;break;default:this.frame.x+=e,this.frame.y+=i}this.updateGuides(),this.frame.update(),this.frame.core.canvas.renderForce()}updateGuides(){this.frame.xOffGuid=this.frame.width/3,this.frame.yOffGuid=this.frame.height/3,this.frame.cv[0]=this.frame.x+.5*this.frame.width,this.frame.cv[1]=this.frame.y+.5*this.frame.height}constructor(t){this.frame=t}}class b{mouseUp(){this.frame.isHover=!1,-1!==this.frame.idHover&&(this.frame.idSelected=this.frame.idHover)}isHoverCheck(t,e){for(let i=0;i<this.frame.cpList.length;++i){let s=this.frame.cpList[i].isHoverCheck(t,e);if(-1!==s)return this.frame.isHover=!0,this.frame.idHover=s,!0}return this.frame.x<t&&this.frame.x+this.frame.width>t&&this.frame.y<e&&this.frame.y+this.frame.height>e?(this.frame.idHover=-1,this.frame.isHover=!0,!0):(this.frame.idHover=-1,this.frame.isHover=!1,!1)}constructor(t){this.frame=t}}(l=o||(o={})).Freeform="freeform",l.Square="square",l.Portrait="portrait",l.Landscape="landscape",l.Fixed_1_1="fixed_1_1",l.Fixed_16_9="fixed_16_9";class P{init(){this.xOffGuid=this.width/3,this.yOffGuid=this.height/3,this.cpList=[new I(this,0,h.Endpoint),new I(this,1,h.Endpoint),new I(this,2,h.Endpoint),new I(this,3,h.Endpoint),new I(this,4,h.Midpoint),new I(this,5,h.Midpoint),new I(this,6,h.Midpoint),new I(this,7,h.Midpoint)],this.core.app.param.colorCover,this.interaction=new b(this),this.transform=new C(this),this.renderer=new x(this)}setRatio(t){this.framePreset=t}InitFrame(){this.width=200,this.height=200,this.core.img&&(this.width=this.core.img.width,this.height=this.core.img.height),this.xOffGuid=this.width/5,this.yOffGuid=this.height/5,this.x=this.xOffGuid,this.y=this.yOffGuid,this.width=Math.floor(this.width-2*this.xOffGuid),this.height=Math.floor(this.height-2*this.yOffGuid),this.cv[0]=this.x+.5*this.width,this.cv[1]=this.y+.5*this.height,this.core.canvas.canvasOut.width=this.core.frame.width,this.core.canvas.canvasOut.height=this.core.frame.height,this.update(),this.updateUIWidthHeight()}updateColorBG(t,e,i){this.renderer.updateColorBG(t,e,i)}update(){for(let t=0;t<this.cpList.length;++t)this.cpList[t].update();this.transform.updateGuides()}isHoverCheck(t,e){return this.interaction.isHoverCheck(t,e)}mouseUp(){return this.interaction.mouseUp()}offsetByID(t,e,i){return this.transform.offsetByID(t,e,i)}render(t){this.renderer.render(t)}translate(t,e){this.x+t<0||this.x+this.width+t>this.core.canvas.canvas.width||this.y+e<0||this.y+this.height+e>this.core.canvas.canvas.height||(this.offsetByID(this.idHover,t,e),this.updateUIWidthHeight())}updateUIWidthHeight(){this.core.app.ui.divWidth.value="".concat(this.width),this.core.app.ui.divHeight.value="".concat(this.height),this.update(),this.core.canvas.renderForce()}constructor(t){this.idHover=-1,this.idSelected=-1,this.isHover=!1,this.x=100,this.y=100,this.widthMin=200,this.heightMin=200,this.width=300,this.height=300,this.xOffGuid=0,this.yOffGuid=0,this.r=19,this.cv=[0,0],this.cpList=[],this.core=t,this.init()}}class z{init(){let t=_(10),e=[],i=[];for(;e.length<this.k;){let s=Math.floor(t()*this.ncols.length),r=!1;for(let t=0;t<i.length;t++)if(s===i[t]){r=!0;break}if(!r){i.push(s);let t=new H(this.ncols[s]);t.push(this.ncols[s]),e.push(t)}}let s=0;for(;!(s++>1e4);){let t=[];for(let e=0;e<this.k;e++)t.push([]);for(let i=0;i<this.ncols.length;i++){let s=this.ncols[i],r=Number.MAX_VALUE,h=0;for(let t=0;t<this.k;t++){let i=this.euclidean(s,e[t].key);i<r&&(r=i,h=t)}t[h].push(s)}let i=0;for(let s=0;s<this.k;s++){let r=e[s].key,h=this.calculateCenter(t[s],3),o=new H(h);o.values=t[s];let a=this.euclidean(r,h);isNaN(a)||(e[s]=o,i=i>a?i:a)}if(i<this.minDiff)break}this.clusters=e}euclidean(t,e){return Math.sqrt(Math.pow(t.r-e.r,2)+Math.pow(t.g-e.g,2)+Math.pow(t.b-e.b,2))}calculateCenter(t,e){let i=new S(0,0,0);for(let e=0;e<t.length;e++)i.r+=t[e].r,i.g+=t[e].g,i.b+=t[e].b;return i.r/=t.length,i.g/=t.length,i.b/=t.length,i}constructor(t,e=3,i=1){this.ncols=t,i<1&&(i=1),this.k=e,this.minDiff=i,this.init()}}class H{push(t){this.values.push(t)}getKey(){return[this.key.r,this.key.g,this.key.b]}constructor(t){this.values=[],this.key=t}}class S{constructor(t=0,e=0,i=0){this.r=0,this.g=0,this.b=0,this.r=t,this.g=e,this.b=i}}let _=t=>(void 0===t&&(t=performance.now()),()=>(t=(9301*t+49297)%233280)/233280),k=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=[],s=document.createElement("canvas").getContext("2d");s.drawImage(t,0,0,100,100);let r=s.getImageData(0,0,100,100).data;for(let t=0,e=r.length;t<e;t+=4){let e=r[t],s=r[t+1],h=r[t+2];i.push(new S(e,s,h))}let h=new z(i,e,1),o=[];for(let t=0;t<h.clusters.length;t++)o.push(h.clusters[t].getKey());return o};class D{render(t){var e;this.core.img&&(t.save(),t.translate(.5*this.core.img.width,.5*this.core.img.height),t.rotate(this.core.controller.rotationRadian),t.scale(this.core.controller.zoomLevel,this.core.controller.zoomLevel),t.drawImage(this.core.img,-(.5*this.core.img.width),-(.5*this.core.img.height)),t.restore()),this.core.canvas.clear(t),null===(e=this.core.distort)||void 0===e||e.render(t),this.captureImage(),this.core.frame.render(t);let i=1-this.t;i<0&&(i=0),t.beginPath();let s=this.core.controller.touchInteraction.touchPre[0],r=this.core.controller.touchInteraction.touchPre[1];t.arc(s,r,10*i,0,6.28),t.closePath(),t.fillStyle="rgba(255, 255, 255, ".concat(i,")"),t.fill(),t.restore(),this.t+=.025}captureImage(){this.core.controller.isDrag&&this.updateCanvasCapture(),this.isCapture&&this.core.canvas.ctxOut.drawImage(this.core.canvas.canvas,-this.core.frame.x,-this.core.frame.y)}updateCanvasCapture(){this.core.canvas.canvasOut.width=this.core.frame.width,this.core.canvas.canvasOut.height=this.core.frame.height}constructor(t){this.t=0,this.isCapture=!1,this.core=t}}class E{constructor(t,e){this.core=t,this.img=e}}class M{touchstart(t){this.controller.core.renderer.t=0;var e=this.controller.core.canvas.canvas.getBoundingClientRect();let i=t.targetTouches[0].pageX-e.left,s=t.targetTouches[0].pageY-e.top;this.touchPre[0]=i,this.touchPre[1]=s,this.controller.touchStartRotation=!0,this.controller.touchStartScale=!0,this.controller.pointDown(i,s),t.preventDefault()}touchmove(t){if(t.targetTouches.length>1){this.controller.rotationByTouch(t),this.controller.scaleByTouch(t);return}var e=this.controller.core.canvas.canvas.getBoundingClientRect();let i=t.targetTouches[0].pageX-e.left,s=t.targetTouches[0].pageY-e.top;this.touchPre[0]=i,this.touchPre[1]=s,this.controller.pointDrag(i,s),t.preventDefault()}touchcancel(t){this.controller.touchStartRotation=!1,this.controller.touchStartScale=!1,t.preventDefault()}touchend(t){this.controller.pointUp(-1,-1),t.preventDefault()}constructor(t){this.down=!1,this.touchPre=[0,0],this.zoom=1,this.controller=t}}class T{mouseDown(t){this.controller.pointDown(t.offsetX,t.offsetY)}mouseUp(t){this.controller.isDrag=!1,this.controller.pointUp(t.offsetX,t.offsetY)}mouseWheel(t,e){this.controller.zoom(t.deltaY)}mouseMove(t){this.controller.isDown?this.controller.pointDrag(t.offsetX,t.offsetY):this.controller.pointMove(t.offsetX,t.offsetY)}mouseOut(t){this.controller.pointOut(t.offsetX,t.offsetY)}constructor(t){this.controller=t}}(m=a||(a={})).Default="default",m.Auto="audo",m.Crosshair="CROSSHAIR",m.Move="move",m.Pointer="pointer",m.Text="text",m.Wait="wait",m.Help="help",m.NWResize="nw-resize",m.NEResize="ne-resize",m.NSResize="ns-resize",m.EResize="e-resize";class R{default(){this.div?"default"!==this.div.style.cursor&&(this.div.style.cursor="default"):"default"!==document.body.style.cursor&&(document.body.style.cursor="default")}auto(){this.div?"audo"!==this.div.style.cursor&&(this.div.style.cursor="audo"):"audo"!==document.body.style.cursor&&(document.body.style.cursor="audo")}creating(){this.div?"CROSSHAIR"!==this.div.style.cursor&&(this.div.style.cursor="CROSSHAIR"):"CROSSHAIR"!==document.body.style.cursor&&(document.body.style.cursor="CROSSHAIR")}dragging(){this.div?"move"!==this.div.style.cursor&&(this.div.style.cursor="move"):"move"!==document.body.style.cursor&&(document.body.style.cursor="move")}hovering(){this.div?"pointer"!==this.div.style.cursor&&(this.div.style.cursor="pointer"):"pointer"!==document.body.style.cursor&&(document.body.style.cursor="pointer")}texting(){this.div?"text"!==this.div.style.cursor&&(this.div.style.cursor="text"):"text"!==document.body.style.cursor&&(document.body.style.cursor="text")}set_e_resize(){this.div?"e-resize"!==this.div.style.cursor&&(this.div.style.cursor="e-resize"):"e-resize"!==document.body.style.cursor&&(document.body.style.cursor="e-resize")}set_ne_resize(){this.div?"ne-resize"!==this.div.style.cursor&&(this.div.style.cursor="ne-resize"):"ne-resize"!==document.body.style.cursor&&(document.body.style.cursor="ne-resize")}set_ns_resize(){this.div?"ns-resize"!==this.div.style.cursor&&(this.div.style.cursor="ns-resize"):"ns-resize"!==document.body.style.cursor&&(document.body.style.cursor="ns-resize")}set_nw_resize(){this.div?"nw-resize"!==this.div.style.cursor&&(this.div.style.cursor="nw-resize"):"nw-resize"!==document.body.style.cursor&&(document.body.style.cursor="nw-resize")}constructor(t){this.div=t}}class O{import(t){this.reset()}reset(){this.core.distort.destroyCP()}updateWidthByInput(t){t<this.core.frame.widthMin?this.core.frame.width=this.core.frame.widthMin:t+this.core.frame.x>this.core.imageWrapper.img.width?this.core.frame.width=this.core.imageWrapper.img.width-this.core.frame.x:this.core.frame.width=t,this.updateSizeByInputPost()}updateHeightByInput(t){t<this.core.frame.heightMin?this.core.frame.height=this.core.frame.heightMin:t+this.core.frame.y>this.core.imageWrapper.img.height?this.core.frame.height=this.core.imageWrapper.img.height-this.core.frame.y:this.core.frame.height=t,this.updateSizeByInputPost()}updateSizeByInputPost(){this.core.frame.update(),this.core.canvas.renderForce(),this.core.canvas.canvasOut.width=this.core.frame.width,this.core.canvas.canvasOut.height=this.core.frame.height}offsetByInput(t){(0===this.core.frame.idSelected||4===this.core.frame.idSelected||7===this.core.frame.idSelected)&&(t*=-1),this.core.frame.offsetByID(this.core.frame.idSelected,t,t),this.core.renderer.updateCanvasCapture()}updateCursor(){this.core.frame.isHover?-1===this.core.frame.idHover?this.activeCursor.dragging():0===this.core.frame.idHover||2===this.core.frame.idHover?this.activeCursor.set_nw_resize():1===this.core.frame.idHover||3===this.core.frame.idHover?this.activeCursor.set_ne_resize():5===this.core.frame.idHover||7===this.core.frame.idHover?this.activeCursor.set_e_resize():(4===this.core.frame.idHover||6===this.core.frame.idHover)&&this.activeCursor.set_ns_resize():this.activeCursor.default()}rotate(t){this.rotationRadian=t,this.postUpdate()}pointDown(t,e){var i;this.isDown=!0,this.core.frame.isHoverCheck(t,e),null===(i=this.core.distort)||void 0===i||i.mouseDown(t,e),this.mousePre[0]=t,this.mousePre[1]=e,this.postUpdate()}pointUp(t,e){var i;this.isDown=!1,this.core.frame.mouseUp(),null===(i=this.core.distort)||void 0===i||i.mouseUp(t,e),this.postUpdate()}pointOut(t,e){this.isDown=!1,this.core.frame.isHover=!1,this.isDrag=!1,this.postUpdate()}pointMove(t,e){var i;this.core.frame.isHoverCheck(t,e),this.mousePre[0]=t,this.mousePre[1]=e,this.updateCursor(),null===(i=this.core.distort)||void 0===i||i.mouseMove(t,e),this.postUpdate()}pointDrag(t,e){var i;this.isDrag=!0,this.core.frame.isHover?this.mouseDragRect(t,e):this.mouseDragPan(t,e),null===(i=this.core.distort)||void 0===i||i.mouseMove(t,e),this.postUpdate()}zoom(t){t<0?this.zoomLevel+=.19*this.zoomLevel:this.zoomLevel-=.19*this.zoomLevel,this.postUpdate()}pan(t,e){}postUpdate(){this.core.canvas.renderForce()}downloadImage(){let t=document.createElement("a");t.href=this.core.canvas.canvasOut.toDataURL(),t.download="image.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)}rotationByTouch(t){let e,i;this.core.canvas.renderForce(),t.targetTouches[0].clientY<t.targetTouches[1].clientY?(e=t.targetTouches[0],i=t.targetTouches[1]):(e=t.targetTouches[1],i=t.targetTouches[0]);let s=Math.atan2(i.clientX-e.clientX,i.clientY-e.clientY),r=this.anglePre-s;if(this.touchStartRotation){this.anglePre=this.rotationRadian,this.touchStartRotation=!1,this.anglePre=s;return}this.rotationRadian+=r,this.anglePre=s}scaleByTouch(t){let e,i;this.core.canvas.renderForce(),t.targetTouches[0].clientY<t.targetTouches[1].clientY?(e=t.targetTouches[0],i=t.targetTouches[1]):(e=t.targetTouches[1],i=t.targetTouches[0]);let s=Math.sqrt((i.clientX-e.clientX)*(i.clientX-e.clientX)+(i.clientY-e.clientY)*(i.clientY-e.clientY));if(this.scalePre>s?this.zoomLevel>.4&&(this.zoomLevel-=.015):this.zoomLevel<2&&(this.zoomLevel+=.015),this.touchStartScale){this.scalePre=this.zoomLevel,this.touchStartScale=!1,this.scalePre=s;return}this.scalePre=s}constructor(t){this.isDown=!1,this.isDrag=!1,this.mousePre=[0,0],this.zoomLevel=1,this.rotationRadian=0,this.scalePre=1,this.anglePre=0,this.touchStartRotation=!1,this.touchStartScale=!1,this.mouseDragRect=(t,e)=>{let i=t-this.mousePre[0],s=e-this.mousePre[1];this.core.frame.translate(i,s),this.mousePre[0]=t,this.mousePre[1]=e},this.mouseDragPan=(t,e)=>{this.pan(t,e)},this.core=t,this.activeCursor=new R,this.touchInteraction=new M(this),this.mouseInteraction=new T(this)}}class L{translation(t,e){this.x=parseInt(this.dom.style.left)+t,this.y=parseInt(this.dom.style.top)+e}move(t,e){this.x=t-.5*this.width,this.y=e-.5*this.height}destroy(){this.dom.parentElement.removeChild(this.dom)}constructor(t,e,i,s){this.width=20,this.height=20,this.distort=t,this.id=e,this.x=i,this.y=s,this.move(i,s)}}class U{distortPerspective(t){this.distort.Controllers[0].translation(t,0),this.distort.Controllers[1].translation(-t,0),this.distort.Controllers[2].translation(t,0),this.distort.Controllers[3].translation(-t,0)}renderDistortion(t,e){}constructor(){}}let G=(t,e,i,s)=>Math.sqrt((t-i)*(t-i)+(e-s)*(e-s));class B extends U{renderDistortion(t,e){let i=[],s=0,r=0;for(let t=0;t<this.distort.Controllers.length;++t){let e=(this.distort.Controllers[t].x-this.distort.domRect.x)*this.distort.domRect.width/this.distort.hostImg.width,h=(this.distort.Controllers[t].y-this.distort.domRect.y)*this.distort.domRect.height/this.distort.hostImg.height;s+=e,r+=h,i.push([e,h])}i.push([s/this.distort.Controllers.length,r/this.distort.Controllers.length]);let h=this.distort.hosCanvas.width,o=this.distort.hosCanvas.height;W(t,e,[0,0],[h/2,o/2],[0,o],i[0],i[4],i[3]),W(t,e,[0,0],[h/2,o/2],[h,0],i[0],i[4],i[1]),W(t,e,[h,0],[h/2,o/2],[h,o],i[1],i[4],i[2]),W(t,e,[0,o],[h/2,o/2],[h,o],i[3],i[4],i[2])}constructor(t){super(),this.distort=t}}let F=(t,e,i,s,r,h,o,a)=>{let n=X(i[0],i[1],h[0],s[0],s[1],o[0],r[0],r[1],a[0]),c=X(i[0],i[1],h[1],s[0],s[1],o[1],r[0],r[1],a[1]);t.save(),t.setTransform(n[0],c[0],n[1],c[1],n[2],c[2]),t.beginPath(),t.moveTo(i[0],i[1]),t.lineTo(s[0],s[1]),t.lineTo(r[0],r[1]),t.closePath(),t.clip(),t.drawImage(e,0,0,e.width,e.height),t.restore()},W=(t,e,i,s,r,h,o,a)=>{let[n,c,d]=N(h,o,a,.3),[l,m,u]=N(i,s,r,.3);F(t,e,l,m,u,n,c,d)},A=(t,e,i)=>{let s=t[0]-e[0],r=t[1]-e[1];return[s*i+e[0],r*i+e[1]]},N=(t,e,i,s)=>{let r=Y(t,e,i),h=(r[2]+s)/r[2];return[A(t,r,h),A(e,r,h),A(i,r,h)]},Y=(t,e,i)=>{let s=G(e[0],e[1],i[0],i[1]),r=G(i[0],i[1],t[0],t[1]),h=G(t[0],t[1],e[0],e[1]),o=s+r+h,a=o/2;return new Float32Array([(s*t[0]+r*e[0]+h*i[0])/o,(s*t[1]+r*e[1]+h*i[1])/o,Math.sqrt(a*(a-s)*(a-r)*(a-h))/a])},X=(t,e,i,s,r,h,o,a,n)=>{let c=((h-n)*(e-r)-(i-h)*(r-a))/((s-o)*(e-r)-(t-s)*(r-a)),d=((h-n)*(t-s)-(i-h)*(s-o))/((r-a)*(t-s)-(e-r)*(s-o));return[c,d,i-t*c-e*d]};class j extends U{renderDistortion(t,e){let i=[],s=0,r=0;for(let t=0;t<this.distort.Controllers.length;++t){let e=(this.distort.Controllers[t].x-this.distort.domRect.x)*this.distort.domRect.width/this.distort.hostImg.width,h=(this.distort.Controllers[t].y-this.distort.domRect.y)*this.distort.domRect.height/this.distort.hostImg.height;s+=e,r+=h,i.push([e,h])}i.push([s/this.distort.Controllers.length,r/this.distort.Controllers.length]),this.distort.hosCanvas.width,this.distort.hosCanvas.height}constructor(t){super(),this.distort=t}}(u=n||(n={})).Projection="projection",u.Subdivision="subdivision";class q{reset(){this.destroyCP(),this.init()}init(){let t=this.core.canvas.canvas.getBoundingClientRect();this.domRect=t,this.Controllers=[new L(this,0,t.x,t.y),new L(this,1,t.x+t.width,t.y),new L(this,2,t.x+t.width,t.y+t.height),new L(this,3,t.x,t.y+t.height)]}distortPerspective(t){this.projection.distortPerspective(t),this.renderForce()}updateCaptured(t,e){this.id=-1;for(let i=0;i<this.Controllers.length;++i)50>G(t+this.domRect.x,e+this.domRect.y,this.Controllers[i].x,this.Controllers[i].y)&&(this.id=this.Controllers[i].id)}mouseDown(t,e){this.updateCaptured(t,e),this.mPre=[t,e]}mouseUp(t,e){this.id=-1}mouseMove(t,e){if(this.id>-1){let i=t-this.mPre[0],s=e-this.mPre[1];this.Controllers[this.id].translation(i,s),this.mPre=[t,e]}}render(t){this.projection.renderDistortion(t,this.hostImg)}renderForce(){this.core.canvas.renderForce()}destroyCP(){try{this.Controllers.forEach(t=>{t.destroy()})}catch(t){}}constructor(t,e="subdivision"){this.Controllers=[],this.id=-1,this.mPre=[0,0],this.core=t,this.DISTORTION_TYPE=e,this.hostDiv=this.core.app.div,this.hosCanvas=this.core.canvas.canvas,this.hostImg=this.core.img,"projection"===this.DISTORTION_TYPE?this.projection=new j(this):this.projection=new B(this),this.init()}}class K{initApp(){this.frame=new P(this),this.renderer=new D(this),this.controller=new O(this)}initCanvas(){let t=document.createElement("div");t.id="ExpressImageDivCanvas",t.style.overflow="hidden",t.style.textAlign="center",this.div=t,this.app.div.append(this.div),this.canvas=new f(this,t),this.canvas.render=t=>{this.renderer.render(t)}}importImage(t){let e=new Image;e.crossOrigin="anonymous",e.src=t,e.style.pointerEvents="none",this.renderer.isCapture=!1,e.onload=()=>{this.imageWrapper=new E(this,e),this.canvas.canvasOut.width=e.width,this.canvas.canvasOut.height=e.height,this.canvas.canvas.width=e.width,this.canvas.canvas.height=e.height,this.div.style.height=e.height+"px",this.img=e;let t=k(e),i=[t[0][0],t[0][1],t[0][2]],s=y(i[0],i[1],i[2]),r=[...s];s[0]+=0,s[1]+=-.05,s[1]<0&&(s[1]=0),s[2]+=0;let h=w(s[0],s[1],s[2]);this.app.div.style.backgroundColor="rgb(".concat(h[0],",").concat(h[1],",").concat(h[2],")"),this.app.ui.updateStyle(h[0],h[1],h[2]),this.app.divHost.style.backgroundColor="rgb(".concat(h[0],",").concat(h[1],",").concat(h[2],")"),r[0]+=0,r[1]+=0,r[1]<0&&(r[1]=0),r[2]+=-.02;let o=w(r[0],r[1],r[2]);this.frame.updateColorBG(o[0],o[1],o[2]),this.frame.InitFrame(),this.renderer.isCapture=!0,this.canvas.renderForce(),this.distort=new q(this)}}constructor(t){this.app=t,this.initApp(),this.initCanvas(),this.importImage("https://raw.githubusercontent.com/NamjuLee/data/master/img/MITBuilding7_small.jpg")}}class V{updateStyle(t,e,i){this.divSizeFrameBG.style.backgroundColor="rgb(".concat(t,",").concat(i,",").concat(e,")")}initPost(){this.divSizeFrameBG=document.createElement("div"),this.divSizeFrameBG.style.textAlign="center",this.divSizeFrameBG.style.backgroundColor="#afafaf",this.divSizeFrameBG.style.padding="10px",this.divSizeFrameBG.textContent="Size ",this.divWidth=document.createElement("input"),this.divWidth.style.width="50px",this.divWidth.setAttribute("type","text"),this.divWidth.setAttribute("min","100"),this.divSizeFrameBG.append(this.divWidth),this.divWidth.oninput=()=>{let t=Number.parseFloat(this.divWidth.value);t&&this.expreeImageTool.core.controller.updateWidthByInput(t)},this.divHeight=document.createElement("input"),this.divHeight.style.width="50px",this.divHeight.setAttribute("type","text"),this.divHeight.setAttribute("min","100"),this.divSizeFrameBG.append(this.divHeight),this.divHeight.oninput=()=>{let t=Number.parseFloat(this.divHeight.value);t&&this.expreeImageTool.core.controller.updateHeightByInput(t)},this.divUI.append(this.divSizeFrameBG);let t=document.createElement("button");t.textContent="Reset",this.divUI.append(t),t.onclick=()=>{this.expreeImageTool.core.controller.reset()},(t=document.createElement("button")).textContent="Download",this.divUI.append(t),t.onclick=()=>{this.expreeImageTool.core.controller.downloadImage()},(t=document.createElement("button")).textContent="Capture",this.divUI.append(t),t.onclick=()=>{let t=this.expreeImageTool.core.canvas.capture();this.divUI.append(t)};let e=document.createElement("input");e.type="range",e.min="-3.13",e.max="3.13",e.step="0.01",e.value="0",e.oninput=()=>{},this.divUI.append(e);let i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("value","https://raw.githubusercontent.com/NamjuLee/data/master/img/building%20footprint.png"),this.divUI.append(i),i.oninput=t=>{this.expreeImageTool.core.controller.reset(),this.expreeImageTool.core.importImage(i.textContent)},i.addEventListener("keyup",t=>{13===t.keyCode&&(t.preventDefault(),this.expreeImageTool.core.controller.reset(),this.expreeImageTool.core.importImage(i.value))}),(t=document.createElement("button")).textContent="<",this.divUI.append(t),t.onclick=()=>{this.expreeImageTool.core.distort.distortPerspective(-5)},(t=document.createElement("button")).textContent=">",this.divUI.append(t),t.onclick=()=>{this.expreeImageTool.core.distort.distortPerspective(5)},(t=document.createElement("button")).textContent="Reset",this.divUI.append(t),t.onclick=()=>{this.expreeImageTool.core.distort.reset()};let s=document.createElement("div");s.textContent="Offset: ",s.style.padding="10px";let r=document.createElement("input");r.style.width="30px",r.setAttribute("type","text"),r.setAttribute("min","-50"),r.setAttribute("max","50"),r.setAttribute("value","10"),s.append(r),this.divUI.append(s),r.addEventListener("keyup",t=>{if(13===t.keyCode){t.preventDefault(),console.log("divInput.value",r.value);let e=Number.parseFloat(r.value);this.expreeImageTool.core.controller.offsetByInput(e)}}),(t=document.createElement("button")).textContent="dd",this.divUI.append(t),t.onclick=()=>{let t=this.expreeImageTool.core.canvas.capture();this.divUI.append(t)}}constructor(t){this.expreeImageTool=t;let e=document.createElement("p");e.textContent="Image Distortion",e.style.fontSize="12px;",e.style.color="#afafaf",e.style.position="absolute",e.style.top="0px",e.style.left="20px",this.expreeImageTool.divHost.append(e);let i=document.createElement("div");this.divUI=i,this.divUI.style.width="100%",this.divUI.style.height="100px",this.divUI.style.backgroundColor="rgba(0,0,0,0)",this.expreeImageTool.divHost.append(this.divUI)}}class J{Dummy(){}constructor(t){this.param=t;let e=document.getElementById(this.param.id),i=document.createElement("div");e&&i&&(this.div=i,this.div.id="ImageDistortion",this.div.style.padding="50px",this.divHost=e,this.divHost.append(this.div),void 0===this.param.ui&&(this.param.ui=!0),this.param.ui&&(this.ui=new V(this),this.ui.initPost()),this.core=new K(this))}}class Q{static Init(t){new Q({id:t,colorCover:"#ff0000"}).Dummy()}Dummy(){}constructor(t){this.expreeImageTool=new J(t)}}class Z{destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}constructor(t){this.divHost=document.getElementById(t),Q.Init(t)}}}}]);