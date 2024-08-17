"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5916],{5916:(t,e,i)=>{i.r(e),i.d(e,{Demo510ImageTool:()=>j});var o,r,s=function(){function t(t,e){this.isActive=!1,this.isViewChanging=!1,this.loopNum=0,this.needRenderloop=!0,this.ablePan=!0,this.mousePre=[0,0],this.loopNeeded=!1,this.core=t,this.div=e,this.loopNeeded=!1,this.init(),this.loopInit()}return t.prototype.init=function(){var t=document.createElement("canvas"),e=document.createElement("canvas");if(t&&e){this.canvas=t,this.canvas.width=this.div.clientWidth,this.canvas.height=this.div.clientHeight,this.div.append(this.canvas),this.canvasOut=e,this.canvasOut.style.border="5px",this.ctxOut=this.canvasOut.getContext("2d"),this.core.app.divHost.append(this.canvasOut);var i=this.canvas.getContext("2d");i&&(this.ctx=i,this.isActive=!0,this.initEvent())}},t.prototype.initEvent=function(){var t=this;this.canvas.addEventListener("keydown",(function(t){})),this.canvas.addEventListener("keyup",(function(t){})),this.canvas.addEventListener("mousedown",(function(e){t.core.controller.mouseInteraction.mouseDown(e)})),this.canvas.addEventListener("mouseup",(function(e){t.core.controller.mouseInteraction.mouseUp(e)}),!1),this.canvas.addEventListener("mousemove",(function(e){t.core.controller.mouseInteraction.mouseMove(e)}),!1),this.canvas.addEventListener("wheel",(function(e){return t.core.controller.mouseInteraction.mouseWheel(e,e.deltaY)}),!1),this.canvas.addEventListener("mouseout",(function(e){t.core.controller.mouseInteraction.mouseOut(e)}),!1),this.canvas.addEventListener("touchstart",(function(e){return t.core.controller.touchInteraction.touchstart(e)}),!1),this.canvas.addEventListener("touchmove",(function(e){return t.core.controller.touchInteraction.touchmove(e)}),!1),this.canvas.addEventListener("touchcancel",(function(e){return t.core.controller.touchInteraction.touchcancel(e)}),!1),this.canvas.addEventListener("touchend",(function(e){return t.core.controller.touchInteraction.touchend(e)}),!1)},t.prototype.capture=function(){var t=new Image;return t.crossOrigin="anonymous",t.src=this.canvasOut.toDataURL(),t},t.prototype.loopInit=function(){this.loop()},t.prototype.resize=function(){this.canvas.width=this.div.clientWidth,this.canvas.height=this.div.clientHeight},t.prototype.loop=function(){var t=this;if(requestAnimationFrame((function(){t.loop()})),this.loopNum++<130){var e=performance.now();this.renderPre(this.ctx);var i=performance.now();this.log="level: , total frames: "+this.loopNum+++" (FPS: ), a loop took: "+(i-e).toFixed(2)+" ms to execute."}},t.prototype.clear=function(t){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)},t.prototype.renderForce=function(){this.loopNum=0},t.prototype.renderPre=function(t){this.isActive&&(this.clear(this.ctx),this.render(t))},t.prototype.render=function(t){},t}(),n=function(t,e,i,o,r,s){void 0===s&&(s=.5),t.beginPath(),t.arc(e+o-s,i-r+s,s,4.71,6.28,!1),t.arc(e+o-s,i+r-s,s,0,1.57,!1),t.arc(e-o+s,i+r-s,s,1.57,3.14,!1),t.arc(e-o+s,i-r+s,s,3.14,4.71,!1),t.closePath(),t.strokeStyle="#000000",t.fillStyle="#ffffff",t.fill(),t.stroke()};!function(t){t.GetImage="GetImage"}(o||(o={})),function(t){t.Canvas="Canvas",t.WebGL2="WebGL2",t.WebGPU="WebGPU",t.WebAssembly="WebAssembly"}(r||(r={}));var h,a=function(t,e,i){var o,r,s;if(0===e)o=r=s=i;else{var n=function(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t},h=i<.5?i*(1+e):i+e-i*e,a=2*i-h;o=n(a,h,t+1/3),r=n(a,h,t),s=n(a,h,t-1/3)}return[Math.max(0,Math.min(Math.round(255*o),255)),Math.max(0,Math.min(Math.round(255*r),255)),Math.max(0,Math.min(Math.round(255*s),255))]},c=function(){function t(t){this._opacity=0,this._t=0,this._strokeStyle="rgba(200, 200, 200, 1)",this._fillStyleRuntime="",this._fillStyle=[200,200,200,1],this._fillStyleHover=[200,200,200,.5],this._sizePoint=3,this._sizeMidPoint=3,this.frame=t}return Object.defineProperty(t.prototype,"sizePoint",{get:function(){return this._sizePoint},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeMidPoint",{get:function(){return this._sizeMidPoint},enumerable:!1,configurable:!0}),t.prototype.updateColorBG=function(t,e,i){console.log(t,e,i),this._fillStyle[0]=t,this._fillStyle[1]=e,this._fillStyle[2]=i,this._fillStyleHover[0]=t,this._fillStyleHover[1]=e,this._fillStyleHover[2]=i},t.prototype.render=function(t){this.ColorInterpolation(),this.frame.isHover,t.fillStyle=this._fillStyleRuntime,t.beginPath(),t.rect(0,0,t.canvas.width,this.frame.y),t.rect(0,this.frame.y+this.frame.height,t.canvas.width,t.canvas.height),t.rect(0,0,this.frame.x,t.canvas.height),t.rect(this.frame.x+this.frame.width,0,t.canvas.width,t.canvas.height),t.fill(),this.renderPost(t),this._t+=.15},t.prototype.renderPost=function(t){t.lineWidth=1,t.lineDashOffset=this._t,t.setLineDash([4,1]),t.beginPath(),t.rect(this.frame.x,this.frame.y,this.frame.width,this.frame.height),t.strokeStyle=this._strokeStyle,t.stroke(),t.beginPath();for(var e=1;e<3;++e)t.moveTo(this.frame.x+this.frame.xOffGuid*e,this.frame.y),t.lineTo(this.frame.x+this.frame.xOffGuid*e,this.frame.y+this.frame.height),t.moveTo(this.frame.x,this.frame.y+this.frame.yOffGuid*e),t.lineTo(this.frame.x+this.frame.width,this.frame.y+this.frame.yOffGuid*e);if(t.stroke(),t.setLineDash([]),-1!==this.frame.idHover){t.beginPath();var i=[0,0];i[0]=this.frame.cpList[this.frame.idHover].x,i[1]=this.frame.cpList[this.frame.idHover].y,t.arc(i[0],i[1],8+2*Math.sin(.75*this._t),0,6.28),t.closePath(),t.fillStyle="rgba(255, 255, 255, 0.5)",t.fill()}if(this.frame.isHover)for(e=0;e<this.frame.cpList.length;++e)this.frame.cpList[e].render(t)},t.prototype.ColorInterpolation=function(){this.frame.isHover?this._opacity+=.05:this._opacity-=.035,this._opacity>1&&(this._opacity=1),this._opacity<0&&(this._opacity=0);var t=function(t,e,i){void 0===i&&(i=.5);for(var o=[],r=0;r<t.length;++r){var s=t[r]+(e[r]-t[r])*i;o.push(s)}return o}(this._fillStyle,this._fillStyleHover,this._opacity);this._fillStyleRuntime="rgba("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},t}();!function(t){t.Endpoint="Endpoint",t.Midpoint="Midpoint"}(h||(h={}));var u,d=function(){function t(t,e,i){this.frame=t,this.id=e,this.type=i,this.update()}return t.prototype.isHoverCheck=function(t,e){return i=this.x,o=this.y,r=t,s=e,Math.sqrt((i-r)*(i-r)+(o-s)*(o-s))<this.frame.r?this.id:-1;var i,o,r,s},t.prototype.update=function(){this.type===h.Endpoint?0===this.id?(this.x=this.frame.x,this.y=this.frame.y):1===this.id?(this.x=this.frame.x+this.frame.width,this.y=this.frame.y):2===this.id?(this.x=this.frame.x+this.frame.width,this.y=this.frame.y+this.frame.height):3===this.id&&(this.x=this.frame.x,this.y=this.frame.y+this.frame.height):this.type===h.Midpoint&&(4===this.id?(this.x=this.frame.x+.5*this.frame.width,this.y=this.frame.y):5===this.id?(this.x=this.frame.x+this.frame.width,this.y=this.frame.y+.5*this.frame.height):6===this.id?(this.x=this.frame.x+.5*this.frame.width,this.y=this.frame.y+this.frame.height):7===this.id&&(this.x=this.frame.x,this.y=this.frame.y+.5*this.frame.height))},t.prototype.render=function(t){this.type===h.Endpoint?0===this.id?n(t,this.frame.x,this.frame.y,this.frame.renderer.sizePoint,this.frame.renderer.sizePoint):1===this.id?n(t,this.frame.x+this.frame.width,this.frame.y,this.frame.renderer.sizePoint,this.frame.renderer.sizePoint):2===this.id?n(t,this.frame.x+this.frame.width,this.frame.y+this.frame.height,this.frame.renderer.sizePoint,this.frame.renderer.sizePoint):3===this.id&&n(t,this.frame.x,this.frame.y+this.frame.height,this.frame.renderer.sizePoint,this.frame.renderer.sizePoint):this.type===h.Midpoint&&(4===this.id?n(t,this.frame.x+.5*this.frame.width,this.frame.y,4*this.frame.renderer.sizeMidPoint,this.frame.renderer.sizeMidPoint):5===this.id?n(t,this.frame.x+this.frame.width,this.frame.y+.5*this.frame.height,this.frame.renderer.sizeMidPoint,4*this.frame.renderer.sizeMidPoint):6===this.id?n(t,this.frame.x+.5*this.frame.width,this.frame.y+this.frame.height,4*this.frame.renderer.sizeMidPoint,this.frame.renderer.sizeMidPoint):7===this.id&&n(t,this.frame.x,this.frame.y+.5*this.frame.height,this.frame.renderer.sizeMidPoint,4*this.frame.renderer.sizeMidPoint))},t}(),f=function(){function t(t){this.frame=t}return t.prototype.offsetByID=function(t,e,i){switch(t){case 0:this.frame.x+=e,this.frame.y+=i,this.frame.width-=e,this.frame.height-=i;break;case 1:this.frame.width+=e,this.frame.y+=i,this.frame.height-=i;break;case 2:this.frame.width+=e,this.frame.height+=i;break;case 3:this.frame.x+=e,this.frame.width-=e,this.frame.height+=i;break;case 4:this.frame.y+=i,this.frame.height-=i;break;case 5:this.frame.width+=e;break;case 6:this.frame.height+=i;break;case 7:this.frame.x+=e,this.frame.width-=e;break;default:this.frame.x+=e,this.frame.y+=i}this.updateGuides(),this.frame.update(),this.frame.core.canvas.renderForce()},t.prototype.updateGuides=function(){this.frame.xOffGuid=this.frame.width/3,this.frame.yOffGuid=this.frame.height/3,this.frame.cv[0]=this.frame.x+.5*this.frame.width,this.frame.cv[1]=this.frame.y+.5*this.frame.height},t}(),l=function(){function t(t){this.frame=t}return t.prototype.mouseUp=function(){this.frame.isHover=!1,-1!==this.frame.idHover&&(this.frame.idSelected=this.frame.idHover)},t.prototype.isHoverCheck=function(t,e){for(var i=0;i<this.frame.cpList.length;++i){var o=this.frame.cpList[i].isHoverCheck(t,e);if(-1!==o)return this.frame.isHover=!0,this.frame.idHover=o,!0}return this.frame.x<t&&this.frame.x+this.frame.width>t&&this.frame.y<e&&this.frame.y+this.frame.height>e?(this.frame.idHover=-1,this.frame.isHover=!0,!0):(this.frame.idHover=-1,this.frame.isHover=!1,!1)},t}();!function(t){t.Freeform="freeform",t.Square="square",t.Portrait="portrait",t.Landscape="landscape",t.Fixed_1_1="fixed_1_1",t.Fixed_16_9="fixed_16_9"}(u||(u={}));var p,m=function(){function t(t){this.idHover=-1,this.idSelected=-1,this.isHover=!1,this.x=100,this.y=100,this.widthMin=200,this.heightMin=200,this.width=300,this.height=300,this.xOffGuid=0,this.yOffGuid=0,this.r=19,this.cv=[0,0],this.cpList=[],this.core=t,this.init()}return t.prototype.init=function(){this.xOffGuid=this.width/3,this.yOffGuid=this.height/3,this.cpList=[new d(this,0,h.Endpoint),new d(this,1,h.Endpoint),new d(this,2,h.Endpoint),new d(this,3,h.Endpoint),new d(this,4,h.Midpoint),new d(this,5,h.Midpoint),new d(this,6,h.Midpoint),new d(this,7,h.Midpoint)],this.core.app.param.colorCover,this.interaction=new l(this),this.transform=new f(this),this.renderer=new c(this)},t.prototype.setRatio=function(t){this.framePreset=t},t.prototype.InitFrame=function(){this.width=200,this.height=200,this.core.img&&(this.width=this.core.img.width,this.height=this.core.img.height),this.xOffGuid=this.width/5,this.yOffGuid=this.height/5,this.x=this.xOffGuid,this.y=this.yOffGuid,this.width=Math.floor(this.width-2*this.xOffGuid),this.height=Math.floor(this.height-2*this.yOffGuid),this.cv[0]=this.x+.5*this.width,this.cv[1]=this.y+.5*this.height,this.core.canvas.canvasOut.width=this.core.frame.width,this.core.canvas.canvasOut.height=this.core.frame.height,this.update(),this.updateUIWidthHeight()},t.prototype.updateColorBG=function(t,e,i){this.renderer.updateColorBG(t,e,i)},t.prototype.update=function(){for(var t=0;t<this.cpList.length;++t)this.cpList[t].update();this.transform.updateGuides()},t.prototype.isHoverCheck=function(t,e){return this.interaction.isHoverCheck(t,e)},t.prototype.mouseUp=function(){return this.interaction.mouseUp()},t.prototype.offsetByID=function(t,e,i){return this.transform.offsetByID(t,e,i)},t.prototype.render=function(t){this.renderer.render(t)},t.prototype.translate=function(t,e){this.x+t<0||this.x+this.width+t>this.core.canvas.canvas.width||this.y+e<0||this.y+this.height+e>this.core.canvas.canvas.height||(this.offsetByID(this.idHover,t,e),this.updateUIWidthHeight())},t.prototype.updateUIWidthHeight=function(){this.core.app.ui.divWidth.value=""+this.width,this.core.app.ui.divHeight.value=""+this.height,this.update(),this.core.canvas.renderForce()},t}(),v=function(){function t(t,e,i){void 0===e&&(e=3),void 0===i&&(i=1),this.ncols=t,i<1&&(i=1),this.k=e,this.minDiff=i,this.init()}return t.prototype.init=function(){console.log("a");var t=w(10),e=[],i=[];for(console.log("b");e.length<this.k;){for(var o=Math.floor(t()*this.ncols.length),r=!1,s=0;s<i.length;s++)if(o===i[s]){r=!0;break}if(!r){i.push(o);var n=new y(this.ncols[o]);n.push(this.ncols[o]),e.push(n)}}console.log("c");for(var h=0;;){if(h++>1e4){console.log("braek");break}var a=[];for(s=0;s<this.k;s++)a.push([]);for(var c=0;c<this.ncols.length;c++){var u=this.ncols[c],d=Number.MAX_VALUE;for(o=0,s=0;s<this.k;s++){var f=this.euclidean(u,e[s].key);f<d&&(d=f,o=s)}a[o].push(u)}var l=0;for(s=0;s<this.k;s++){var p=e[s].key,m=this.calculateCenter(a[s],3),v=new y(m);v.values=a[s];var g=this.euclidean(p,m);console.log(g),isNaN(g)||(e[s]=v,l=l>g?l:g)}if(console.log("diff",l),l<this.minDiff)break}console.log("done!"),this.clusters=e},t.prototype.euclidean=function(t,e){var i=Math.pow(t.r-e.r,2)+Math.pow(t.g-e.g,2)+Math.pow(t.b-e.b,2);return Math.sqrt(i)},t.prototype.calculateCenter=function(t,e){for(var i=new g(0,0,0),o=0;o<t.length;o++)i.r+=t[o].r,i.g+=t[o].g,i.b+=t[o].b;return i.r/=t.length,i.g/=t.length,i.b/=t.length,i},t}(),y=function(){function t(t){this.values=[],this.key=t}return t.prototype.push=function(t){this.values.push(t)},t.prototype.getKey=function(){return[this.key.r,this.key.g,this.key.b]},t}(),g=function(t,e,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),this.r=0,this.g=0,this.b=0,this.r=t,this.g=e,this.b=i},w=function(t){return void 0===t&&(t=performance.now()),function(){return(t=(9301*t+49297)%233280)/233280}},x=function(){function t(t){this.t=0,this.isCapture=!1,this.core=t}return t.prototype.render=function(t){var e;this.core.img&&(t.save(),t.translate(.5*this.core.img.width,.5*this.core.img.height),t.rotate(this.core.controller.rotationRadian),t.scale(this.core.controller.zoomLevel,this.core.controller.zoomLevel),t.drawImage(this.core.img,.5*-this.core.img.width,.5*-this.core.img.height),t.restore()),this.core.canvas.clear(t),null===(e=this.core.distort)||void 0===e||e.render(t),this.captureImage(),this.core.frame.render(t);var i=1-this.t;i<0&&(i=0),t.beginPath();var o=this.core.controller.touchInteraction.touchPre[0],r=this.core.controller.touchInteraction.touchPre[1];t.arc(o,r,10*i,0,6.28),t.closePath(),t.fillStyle="rgba(255, 255, 255, "+i+")",t.fill(),t.restore(),this.t+=.025},t.prototype.captureImage=function(){this.core.controller.isDrag&&this.updateCanvasCapture(),this.isCapture&&this.core.canvas.ctxOut.drawImage(this.core.canvas.canvas,-this.core.frame.x,-this.core.frame.y)},t.prototype.updateCanvasCapture=function(){this.core.canvas.canvasOut.width=this.core.frame.width,this.core.canvas.canvasOut.height=this.core.frame.height},t}(),b=function(t,e){this.core=t,this.img=e},C=function(){function t(t){this.down=!1,this.touchPre=[0,0],this.zoom=1,this.controller=t}return t.prototype.touchstart=function(t){this.controller.core.renderer.t=0;var e=this.controller.core.canvas.canvas.getBoundingClientRect(),i=t.targetTouches[0].pageX-e.left,o=t.targetTouches[0].pageY-e.top;this.touchPre[0]=i,this.touchPre[1]=o,this.controller.touchStartRotation=!0,this.controller.touchStartScale=!0,this.controller.pointDown(i,o),t.preventDefault()},t.prototype.touchmove=function(t){if(t.targetTouches.length>1)return this.controller.rotationByTouch(t),void this.controller.scaleByTouch(t);var e=this.controller.core.canvas.canvas.getBoundingClientRect(),i=t.targetTouches[0].pageX-e.left,o=t.targetTouches[0].pageY-e.top;this.touchPre[0]=i,this.touchPre[1]=o,this.controller.pointDrag(i,o),t.preventDefault()},t.prototype.touchcancel=function(t){this.controller.touchStartRotation=!1,this.controller.touchStartScale=!1,t.preventDefault()},t.prototype.touchend=function(t){this.controller.pointUp(-1,-1),t.preventDefault()},t}(),I=function(){function t(t){this.controller=t}return t.prototype.mouseDown=function(t){this.controller.pointDown(t.offsetX,t.offsetY)},t.prototype.mouseUp=function(t){this.controller.isDrag=!1,this.controller.pointUp(t.offsetX,t.offsetY)},t.prototype.mouseWheel=function(t,e){this.controller.zoom(t.deltaY)},t.prototype.mouseMove=function(t){this.controller.isDown?this.controller.pointDrag(t.offsetX,t.offsetY):this.controller.pointMove(t.offsetX,t.offsetY)},t.prototype.mouseOut=function(t){this.controller.pointOut(t.offsetX,t.offsetY)},t}();!function(t){t.Default="default",t.Auto="audo",t.Crosshair="CROSSHAIR",t.Move="move",t.Pointer="pointer",t.Text="text",t.Wait="wait",t.Help="help",t.NWResize="nw-resize",t.NEResize="ne-resize",t.NSResize="ns-resize",t.EResize="e-resize"}(p||(p={}));var P,z,_=function(){function t(t){this.div=t}return t.prototype.default=function(){this.div?this.div.style.cursor!==p.Default&&(this.div.style.cursor=p.Default):document.body.style.cursor!==p.Default&&(document.body.style.cursor=p.Default)},t.prototype.auto=function(){this.div?this.div.style.cursor!==p.Auto&&(this.div.style.cursor=p.Auto):document.body.style.cursor!==p.Auto&&(document.body.style.cursor=p.Auto)},t.prototype.creating=function(){this.div?this.div.style.cursor!==p.Crosshair&&(this.div.style.cursor=p.Crosshair):document.body.style.cursor!==p.Crosshair&&(document.body.style.cursor=p.Crosshair)},t.prototype.dragging=function(){this.div?this.div.style.cursor!==p.Move&&(this.div.style.cursor=p.Move):document.body.style.cursor!==p.Move&&(document.body.style.cursor=p.Move)},t.prototype.hovering=function(){this.div?this.div.style.cursor!==p.Pointer&&(this.div.style.cursor=p.Pointer):document.body.style.cursor!==p.Pointer&&(document.body.style.cursor=p.Pointer)},t.prototype.texting=function(){this.div?this.div.style.cursor!==p.Text&&(this.div.style.cursor=p.Text):document.body.style.cursor!==p.Text&&(document.body.style.cursor=p.Text)},t.prototype.set_e_resize=function(){this.div?this.div.style.cursor!==p.EResize&&(this.div.style.cursor=p.EResize):document.body.style.cursor!==p.EResize&&(document.body.style.cursor=p.EResize)},t.prototype.set_ne_resize=function(){this.div?this.div.style.cursor!==p.NEResize&&(this.div.style.cursor=p.NEResize):document.body.style.cursor!==p.NEResize&&(document.body.style.cursor=p.NEResize)},t.prototype.set_ns_resize=function(){this.div?this.div.style.cursor!==p.NSResize&&(this.div.style.cursor=p.NSResize):document.body.style.cursor!==p.NSResize&&(document.body.style.cursor=p.NSResize)},t.prototype.set_nw_resize=function(){this.div?this.div.style.cursor!==p.NWResize&&(this.div.style.cursor=p.NWResize):document.body.style.cursor!==p.NWResize&&(document.body.style.cursor=p.NWResize)},t}(),S=function(){function t(t){var e=this;this.isDown=!1,this.isDrag=!1,this.mousePre=[0,0],this.zoomLevel=1,this.rotationRadian=0,this.scalePre=1,this.anglePre=0,this.touchStartRotation=!1,this.touchStartScale=!1,this.mouseDragRect=function(t,i){var o=t-e.mousePre[0],r=i-e.mousePre[1];e.core.frame.translate(o,r),e.mousePre[0]=t,e.mousePre[1]=i},this.mouseDragPan=function(t,i){e.pan(t,i)},this.core=t,this.activeCursor=new _,this.touchInteraction=new C(this),this.mouseInteraction=new I(this)}return t.prototype.import=function(t){this.reset()},t.prototype.reset=function(){this.core.distort.destroyCP()},t.prototype.updateWidthByInput=function(t){t<this.core.frame.widthMin?this.core.frame.width=this.core.frame.widthMin:t+this.core.frame.x>this.core.imageWrapper.img.width?this.core.frame.width=this.core.imageWrapper.img.width-this.core.frame.x:this.core.frame.width=t,this.updateSizeByInputPost()},t.prototype.updateHeightByInput=function(t){t<this.core.frame.heightMin?this.core.frame.height=this.core.frame.heightMin:t+this.core.frame.y>this.core.imageWrapper.img.height?this.core.frame.height=this.core.imageWrapper.img.height-this.core.frame.y:this.core.frame.height=t,this.updateSizeByInputPost()},t.prototype.updateSizeByInputPost=function(){this.core.frame.update(),this.core.canvas.renderForce(),this.core.canvas.canvasOut.width=this.core.frame.width,this.core.canvas.canvasOut.height=this.core.frame.height},t.prototype.offsetByInput=function(t){0!==this.core.frame.idSelected&&4!==this.core.frame.idSelected&&7!==this.core.frame.idSelected||(t*=-1),this.core.frame.offsetByID(this.core.frame.idSelected,t,t),this.core.renderer.updateCanvasCapture()},t.prototype.updateCursor=function(){this.core.frame.isHover?-1===this.core.frame.idHover?this.activeCursor.dragging():0===this.core.frame.idHover||2===this.core.frame.idHover?this.activeCursor.set_nw_resize():1===this.core.frame.idHover||3===this.core.frame.idHover?this.activeCursor.set_ne_resize():5===this.core.frame.idHover||7===this.core.frame.idHover?this.activeCursor.set_e_resize():4!==this.core.frame.idHover&&6!==this.core.frame.idHover||this.activeCursor.set_ns_resize():this.activeCursor.default()},t.prototype.rotate=function(t){this.rotationRadian=t,this.postUpdate()},t.prototype.pointDown=function(t,e){var i;this.isDown=!0,this.core.frame.isHoverCheck(t,e),null===(i=this.core.distort)||void 0===i||i.mouseDown(t,e),this.mousePre[0]=t,this.mousePre[1]=e,this.postUpdate()},t.prototype.pointUp=function(t,e){var i;this.isDown=!1,this.core.frame.mouseUp(),null===(i=this.core.distort)||void 0===i||i.mouseUp(t,e),this.postUpdate()},t.prototype.pointOut=function(t,e){this.isDown=!1,this.core.frame.isHover=!1,this.isDrag=!1,this.postUpdate()},t.prototype.pointMove=function(t,e){var i;this.core.frame.isHoverCheck(t,e),this.mousePre[0]=t,this.mousePre[1]=e,this.updateCursor(),null===(i=this.core.distort)||void 0===i||i.mouseMove(t,e),this.postUpdate()},t.prototype.pointDrag=function(t,e){var i;this.isDrag=!0,this.core.frame.isHover?this.mouseDragRect(t,e):this.mouseDragPan(t,e),null===(i=this.core.distort)||void 0===i||i.mouseMove(t,e),this.postUpdate()},t.prototype.zoom=function(t){t<0?this.zoomLevel+=.19*this.zoomLevel:this.zoomLevel-=.19*this.zoomLevel,this.postUpdate()},t.prototype.pan=function(t,e){},t.prototype.postUpdate=function(){this.core.canvas.renderForce()},t.prototype.downloadImage=function(){this.core.canvas.canvasOut;var t=document.createElement("a");t.href=this.core.canvas.canvasOut.toDataURL(),t.download="image.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)},t.prototype.rotationByTouch=function(t){var e,i;this.core.canvas.renderForce(),t.targetTouches[0].clientY<t.targetTouches[1].clientY?(e=t.targetTouches[0],i=t.targetTouches[1]):(e=t.targetTouches[1],i=t.targetTouches[0]);var o=Math.atan2(i.clientX-e.clientX,i.clientY-e.clientY),r=this.anglePre-o;if(this.touchStartRotation)return this.anglePre=this.rotationRadian,this.touchStartRotation=!1,void(this.anglePre=o);this.rotationRadian+=r,this.anglePre=o},t.prototype.scaleByTouch=function(t){var e,i;this.core.canvas.renderForce(),t.targetTouches[0].clientY<t.targetTouches[1].clientY?(e=t.targetTouches[0],i=t.targetTouches[1]):(e=t.targetTouches[1],i=t.targetTouches[0]);var o=Math.sqrt((i.clientX-e.clientX)*(i.clientX-e.clientX)+(i.clientY-e.clientY)*(i.clientY-e.clientY));if(this.scalePre>o?this.zoomLevel>.4&&(this.zoomLevel-=.015):this.zoomLevel<2&&(this.zoomLevel+=.015),this.touchStartScale)return this.scalePre=this.zoomLevel,this.touchStartScale=!1,void(this.scalePre=o);this.scalePre=o},t}(),E=function(){function t(t,e,i,o){this.width=20,this.height=20,this.distort=t,this.id=e,this.x=i,this.y=o,this.dom=k(this.width,this.height,5),this.dom.style.pointerEvents="none",this.distort.hostDiv.appendChild(this.dom),this.move(i,o)}return t.prototype.translation=function(t,e){this.x=parseInt(this.dom.style.left)+t,this.y=parseInt(this.dom.style.top)+e,this.dom.style.left=this.x+"px",this.dom.style.top=this.y+"px"},t.prototype.move=function(t,e){this.x=t-.5*this.width,this.y=e-.5*this.height,this.dom.style.left=this.x+"px",this.dom.style.top=this.y+"px"},t.prototype.destroy=function(){this.dom.parentElement.removeChild(this.dom)},t}(),k=function(t,e,i,o,r,s){void 0===t&&(t=8),void 0===e&&(e=8),void 0===i&&(i=2),void 0===o&&(o="#ffffff"),void 0===r&&(r=1),void 0===s&&(s="#CBDAE2");var n=document.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("x","1"),n.setAttribute("y","1"),n.setAttribute("width",""+t),n.setAttribute("height",""+e),n.setAttribute("stroke-width",""+r),n.setAttribute("rx",""+i),n.setAttribute("fill",""+o),n.setAttribute("stroke",""+s);var h=document.createElementNS("http://www.w3.org/2000/svg","svg");return h.appendChild(n),h.setAttribute("width",""+(t+2*r)),h.setAttribute("height",""+(e+2*r)),h.style.position="absolute",h},D=(P=function(t,e){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},P(t,e)},function(t,e){function i(){this.constructor=t}P(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),H=function(){function t(){}return t.prototype.distortPerspective=function(t){this.distort.Controllers[0].translation(t,0),this.distort.Controllers[1].translation(-t,0),this.distort.Controllers[2].translation(t,0),this.distort.Controllers[3].translation(-t,0)},t.prototype.renderDistortion=function(t,e){},t}(),M=function(t,e,i,o){return Math.sqrt((t-i)*(t-i)+(e-o)*(e-o))},R=function(t){function e(e){var i=t.call(this)||this;return i.distort=e,i}return D(e,t),e.prototype.renderDistortion=function(t,e){for(var i=[],o=0,r=0,s=0;s<this.distort.Controllers.length;++s){var n=(this.distort.Controllers[s].x-this.distort.domRect.x)*this.distort.domRect.width/this.distort.hostImg.width,h=(this.distort.Controllers[s].y-this.distort.domRect.y)*this.distort.domRect.height/this.distort.hostImg.height;o+=n,r+=h,i.push([n,h])}i.push([o/this.distort.Controllers.length,r/this.distort.Controllers.length]);var a=this.distort.hosCanvas.width,c=this.distort.hosCanvas.height;T(t,e,[0,0],[a/2,c/2],[0,c],i[0],i[4],i[3]),T(t,e,[0,0],[a/2,c/2],[a,0],i[0],i[4],i[1]),T(t,e,[a,0],[a/2,c/2],[a,c],i[1],i[4],i[2]),T(t,e,[0,c],[a/2,c/2],[a,c],i[3],i[4],i[2])},e}(H),T=function(t,e,i,o,r,s,n,h){var a=L(s,n,h,.3),c=a[0],u=a[1],d=a[2],f=L(i,o,r,.3);!function(t,e,i,o,r,s,n,h){var a=A(i[0],i[1],s[0],o[0],o[1],n[0],r[0],r[1],h[0]),c=A(i[0],i[1],s[1],o[0],o[1],n[1],r[0],r[1],h[1]);t.save(),t.setTransform(a[0],c[0],a[1],c[1],a[2],c[2]),t.beginPath(),t.moveTo(i[0],i[1]),t.lineTo(o[0],o[1]),t.lineTo(r[0],r[1]),t.closePath(),t.clip(),t.drawImage(e,0,0,e.width,e.height),t.restore()}(t,e,f[0],f[1],f[2],c,u,d)},O=function(t,e,i){var o=t[0]-e[0],r=t[1]-e[1];return[o*i+e[0],r*i+e[1]]},L=function(t,e,i,o){var r=U(t,e,i),s=(r[2]+o)/r[2];return[O(t,r,s),O(e,r,s),O(i,r,s)]},U=function(t,e,i){var o=M(e[0],e[1],i[0],i[1]),r=M(i[0],i[1],t[0],t[1]),s=M(t[0],t[1],e[0],e[1]),n=o+r+s,h=n/2,a=Math.sqrt(h*(h-o)*(h-r)*(h-s))/h,c=(o*t[0]+r*e[0]+s*i[0])/n,u=(o*t[1]+r*e[1]+s*i[1])/n;return new Float32Array([c,u,a])},A=function(t,e,i,o,r,s,n,h,a){var c=((s-a)*(e-r)-(i-s)*(r-h))/((o-n)*(e-r)-(t-o)*(r-h)),u=((s-a)*(t-o)-(i-s)*(o-n))/((r-h)*(t-o)-(e-r)*(o-n));return[c,u,i-t*c-e*u]},G=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),B=function(t){function e(e){var i=t.call(this)||this;return i.distort=e,i}return G(e,t),e.prototype.renderDistortion=function(t,e){for(var i=[],o=0,r=0,s=0;s<this.distort.Controllers.length;++s){var n=(this.distort.Controllers[s].x-this.distort.domRect.x)*this.distort.domRect.width/this.distort.hostImg.width,h=(this.distort.Controllers[s].y-this.distort.domRect.y)*this.distort.domRect.height/this.distort.hostImg.height;o+=n,r+=h,i.push([n,h])}i.push([o/this.distort.Controllers.length,r/this.distort.Controllers.length]),this.distort.hosCanvas.width,this.distort.hosCanvas.height},e}(H);!function(t){t.Projection="projection",t.Subdivision="subdivision"}(z||(z={}));var W=function(){function t(t,e){void 0===e&&(e=z.Subdivision),this.Controllers=[],this.id=-1,this.mPre=[0,0],this.core=t,this.DISTORTION_TYPE=e,this.hostDiv=this.core.app.div,this.hosCanvas=this.core.canvas.canvas,this.hostImg=this.core.img,this.DISTORTION_TYPE===z.Projection?this.projection=new B(this):this.projection=new R(this),this.init()}return t.prototype.reset=function(){this.destroyCP(),this.init()},t.prototype.init=function(){var t=this.core.canvas.canvas.getBoundingClientRect();this.domRect=t,this.Controllers=[new E(this,0,t.x,t.y),new E(this,1,t.x+t.width,t.y),new E(this,2,t.x+t.width,t.y+t.height),new E(this,3,t.x,t.y+t.height)]},t.prototype.distortPerspective=function(t){this.projection.distortPerspective(t),this.renderForce()},t.prototype.updateCaptured=function(t,e){this.id=-1;for(var i=0;i<this.Controllers.length;++i)M(t+this.domRect.x,e+this.domRect.y,this.Controllers[i].x,this.Controllers[i].y)<50&&(this.id=this.Controllers[i].id)},t.prototype.mouseDown=function(t,e){this.updateCaptured(t,e),this.mPre=[t,e]},t.prototype.mouseUp=function(t,e){this.id=-1},t.prototype.mouseMove=function(t,e){if(this.id>-1){var i=t-this.mPre[0],o=e-this.mPre[1];this.Controllers[this.id].translation(i,o),this.mPre=[t,e]}},t.prototype.render=function(t){this.projection.renderDistortion(t,this.hostImg)},t.prototype.renderForce=function(){this.core.canvas.renderForce()},t.prototype.destroyCP=function(){try{this.Controllers.forEach((function(t){t.destroy()}))}catch(t){}},t}(),N=function(){function t(t){this.app=t,this.initApp(),this.initCanvas(),this.importImage("https://raw.githubusercontent.com/NamjuLee/data/master/img/MITBuilding7_small.jpg")}return t.prototype.initApp=function(){this.frame=new m(this),this.renderer=new x(this),this.controller=new S(this)},t.prototype.initCanvas=function(){var t=this,e=document.createElement("div");e.id="ExpressImageDivCanvas",e.style.overflow="hidden",e.style.textAlign="center",this.div=e,this.app.div.append(this.div),this.canvas=new s(this,e),this.canvas.render=function(e){t.renderer.render(e)}},t.prototype.importImage=function(t){var e=this,i=new Image;i.crossOrigin="anonymous",i.src=t,i.style.pointerEvents="none",this.renderer.isCapture=!1,i.onload=function(){e.imageWrapper=new b(e,i),e.canvas.canvasOut.width=i.width,e.canvas.canvasOut.height=i.height,e.canvas.canvas.width=i.width,e.canvas.canvas.height=i.height,e.div.style.height=i.height+"px",e.img=i,console.log(i);var t=function(t,e){void 0===e&&(e=1);var i=[];console.log("1"),console.log("2");var o=document.createElement("canvas").getContext("2d");o.drawImage(t,0,0,100,100),console.log("3");for(var r=o.getImageData(0,0,100,100).data,s=0,n=r.length;s<n;s+=4){var h=r[s],a=r[s+1],c=r[s+2];i.push(new g(h,a,c))}console.log("4");var u=new v(i,e,1);console.log("5");var d=[];for(s=0;s<u.clusters.length;s++)d.push(u.clusters[s].getKey());return d}(i),o=[t[0][0],t[0][1],t[0][2]],r=function(t,e,i){t/=255,e/=255,i/=255;var o=Math.max(t,e,i),r=Math.min(t,e,i),s=(o+r)/2,n=(o+r)/2,h=(o+r)/2;if(o===r)s=n=0;else{var a=o-r;switch(n=h>.5?a/(2-o-r):a/(o+r),o){case t:s=(e-i)/a+(e<i?6:0);break;case e:s=(i-t)/a+2;break;case i:s=(t-e)/a+4}s/=6}return[s,n,h]}(o[0],o[1],o[2]),s=function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<i;e++)for(var s=arguments[e],n=0,h=s.length;n<h;n++,r++)o[r]=s[n];return o}(r);r[0]+=0,r[1]+=-.05,r[1]<0&&(r[1]=0),r[2]+=0;var n=a(r[0],r[1],r[2]);console.log("col0",n),e.app.div.style.backgroundColor="rgb("+n[0]+","+n[1]+","+n[2]+")",e.app.ui.updateStyle(n[0],n[1],n[2]),e.app.divHost.style.backgroundColor="rgb("+n[0]+","+n[1]+","+n[2]+")",s[0]+=0,s[1]+=0,s[1]<0&&(s[1]=0),s[2]+=-.02;var h=a(s[0],s[1],s[2]);console.log("col1",h),e.frame.updateColorBG(h[0],h[1],h[2]),e.frame.InitFrame(),e.renderer.isCapture=!0,e.canvas.renderForce(),e.distort=new W(e)}},t}(),F=function(){function t(t){this.expreeImageTool=t;var e=document.createElement("p");e.textContent="Image Distortion",e.style.fontSize="12px;",e.style.color="#afafaf",e.style.position="absolute",e.style.top="0px",e.style.left="20px",this.expreeImageTool.divHost.append(e);var i=document.createElement("div");this.divUI=i,this.divUI.style.width="100%",this.divUI.style.height="100px",this.divUI.style.backgroundColor="rgba(0,0,0,0)",this.expreeImageTool.divHost.append(this.divUI)}return t.prototype.updateStyle=function(t,e,i){this.divSizeFrameBG.style.backgroundColor="rgb("+t+","+i+","+e+")"},t.prototype.initPost=function(){var t=this;this.divSizeFrameBG=document.createElement("div"),this.divSizeFrameBG.style.textAlign="center",this.divSizeFrameBG.style.backgroundColor="#afafaf",this.divSizeFrameBG.style.padding="10px",this.divSizeFrameBG.textContent="Size ",this.divWidth=document.createElement("input"),this.divWidth.style.width="50px",this.divWidth.setAttribute("type","text"),this.divWidth.setAttribute("min","100"),this.divSizeFrameBG.append(this.divWidth),this.divWidth.oninput=function(){var e=Number.parseFloat(t.divWidth.value);e&&t.expreeImageTool.core.controller.updateWidthByInput(e)},this.divHeight=document.createElement("input"),this.divHeight.style.width="50px",this.divHeight.setAttribute("type","text"),this.divHeight.setAttribute("min","100"),this.divSizeFrameBG.append(this.divHeight),this.divHeight.oninput=function(){var e=Number.parseFloat(t.divHeight.value);e&&t.expreeImageTool.core.controller.updateHeightByInput(e)},this.divUI.append(this.divSizeFrameBG);var e=document.createElement("button");e.textContent="Reset",this.divUI.append(e),e.onclick=function(){t.expreeImageTool.core.controller.reset()},(e=document.createElement("button")).textContent="Download",this.divUI.append(e),e.onclick=function(){t.expreeImageTool.core.controller.downloadImage()},(e=document.createElement("button")).textContent="Capture",this.divUI.append(e),e.onclick=function(){var e=t.expreeImageTool.core.canvas.capture();t.divUI.append(e)};var i=document.createElement("input");i.type="range",i.min="-3.13",i.max="3.13",i.step="0.01",i.value="0",i.oninput=function(){},this.divUI.append(i);var o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("value","https://raw.githubusercontent.com/NamjuLee/data/master/img/building%20footprint.png"),this.divUI.append(o),o.oninput=function(e){t.expreeImageTool.core.controller.reset(),t.expreeImageTool.core.importImage(o.textContent)},o.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),t.expreeImageTool.core.controller.reset(),t.expreeImageTool.core.importImage(o.value))})),(e=document.createElement("button")).textContent="<",this.divUI.append(e),e.onclick=function(){t.expreeImageTool.core.distort.distortPerspective(-5)},(e=document.createElement("button")).textContent=">",this.divUI.append(e),e.onclick=function(){t.expreeImageTool.core.distort.distortPerspective(5)},(e=document.createElement("button")).textContent="Reset",this.divUI.append(e),e.onclick=function(){t.expreeImageTool.core.distort.reset()};var r=document.createElement("div");r.textContent="Offset: ",r.style.padding="10px";var s=document.createElement("input");s.style.width="30px",s.setAttribute("type","text"),s.setAttribute("min","-50"),s.setAttribute("max","50"),s.setAttribute("value","10"),r.append(s),this.divUI.append(r),s.addEventListener("keyup",(function(e){if(13===e.keyCode){e.preventDefault(),console.log("divInput.value",s.value);var i=Number.parseFloat(s.value);t.expreeImageTool.core.controller.offsetByInput(i)}})),(e=document.createElement("button")).textContent="dd",this.divUI.append(e),e.onclick=function(){var e=t.expreeImageTool.core.canvas.capture();t.divUI.append(e)}},t}(),Y=function(){function t(t){this.param=t;var e=document.getElementById(this.param.id),i=document.createElement("div");e&&i&&(this.div=i,this.div.id="ImageDistortion",this.div.style.padding="50px",this.divHost=e,this.divHost.append(this.div),void 0===this.param.ui&&(this.param.ui=!0),this.param.ui&&(this.ui=new F(this),this.ui.initPost()),this.core=new N(this))}return t.prototype.Dummy=function(){},t}(),j=function(){function t(t){this.expreeImageTool=new Y(t)}return t.Init=function(e){new t({id:e,colorCover:"#ff0000"}).Dummy()},t.prototype.Dummy=function(){},t}()}}]);