"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[7829],{39890:(t,e,i)=>{let s,n,h,o,a,r,c,E,l,d,O,u,N,f,C,I,T,R,L,A,D,x,p;i.d(e,{KV:()=>r,NI:()=>o,lw:()=>u,mB:()=>d,zK:()=>s}),function(t){t.DOWN="DOWN",t.MOVE="MOVE",t.CLICK="CLICK",t.LEFT="LEFT",t.MIDDLE="MIDDLE",t.RIGHT="DOWN_RIGHT",t.DRAG="DRAG",t.DOUBLE="DOUBLE",t.UP="UP",t.WHEEL="WHEEL"}(s||(s={})),function(t){t.PRODUCTION="PRODUCTION",t.DEVELOPMENT="DEVELOPMENT",t.LOCAL="LOCAL"}(n||(n={})),function(t){t.DRAWING="DRAWING",t.INTERACTIVE_VIEWER="INTERACTIVE_VIEWER",t.OBSERVE_VIEWER="OBSERVE_VIEWER"}(h||(h={})),function(t){t.SELECT="SELECT",t.POINT="POINT",t.LINE="LINE",t.SMART_FREEHAND="SMART_FREEHAND"}(o||(o={})),function(t){t.OPERA="OPERA",t.CHROME="CHROME",t.SAFARI="SAFARI",t.FIREFOX="FIREFOX",t.IE="IE",t.EDGE="EDGE",t.UNKNOWN="UNKNOWN"}(a||(a={})),function(t){t.START="START",t.END="END",t.MOVE="MOVE",t.CANCEL="CANCEL"}(r||(r={})),function(t){t.NATIVE="NATIVE",t.JSAPI4X="JSAPI4X"}(c||(c={})),function(t){t.PERSPECTIVE="PERSPECTIVE",t.ORTHOGRAPHIC="ORTHOGRAPHIC",t.STEREO="STEREO"}(E||(E={})),function(t){t.CANVAS="CANVAS",t.GL="GL"}(l||(l={})),function(t){t.select="select",t.point="point",t.line="line",t.polyline="polyline",t.polygon="polygon",t.circle="circle"}(d||(d={})),function(t){t.JSAPI="JSAPI"}(O||(O={})),function(t){t.NONE="NONE",t.NNA="NNA",t.GA="GA",t.AGENCY="AGENCY",t.NETWORK="NETWORK"}(u||(u={})),function(t){t.SOURCE_OVER="source-over",t.SOURCE_IN="source-in",t.SOURCE_OUT="source-out",t.SOURCE_ATOP="source-atop",t.COPY="copy",t.DESTAINATION_OVER="destination-over",t.DESTAINATION_IN="destination-in",t.DESTAINATION_OUT="destination-out",t.DESTAINATION_ATOP="destination-atop",t.LIGHTER="lighter",t.MULTIPLY="multiply",t.SCREEN="screen",t.OVERLAY="overlay",t.DARKEN="darken",t.LIGHTEN="lighten",t.COLOR_DODGE="color-dodge",t.COLOR_BURN="color-burn",t.HARD_LIGHT="hard-light",t.SOFT_LIGHT="soft-light",t.DIFFERENCE="difference",t.EXCLUSION="exclusion",t.HUE="hue",t.SATURATION="saturation",t.COLOR="color",t.LUMINOSITY="luminosity"}(N||(N={})),function(t){t.CURVE="CURVE",t.CURVE_CLOSED="CURVE_CLOSED",t.LINE="LINE",t.PLINE="PLINE",t.PLINE_BENDING="PLINE_BENDING",t.PGON="PGON",t.SMOOTH="SMOOTH",t.SMDRAWING="SMDRAWING"}(f||(f={})),function(t){t.REGULAR="REGULAR",t.DOUGLAS_PEUCKER="DOUGLAS_PEUCKER"}(C||(C={})),function(t){t[t.REACH=0]="REACH",t[t.GRAVITY=1]="GRAVITY",t[t.HUFF=2]="HUFF",t[t.BETWEENNESS=3]="BETWEENNESS",t[t.CLOSENESS=4]="CLOSENESS",t[t.STRAIGHTNESS=5]="STRAIGHTNESS",t[t.DEGREE=6]="DEGREE",t[t.NONE=7]="NONE"}(I||(I={})),function(t){t[t.METER=1]="METER",t[t.FOOT=2]="FOOT"}(T||(T={})),function(t){t[t.DISCONNECTED=0]="DISCONNECTED",t[t.CONNECTED=1]="CONNECTED",t[t.O_TO_D=2]="O_TO_D",t[t.D_TO_O=3]="D_TO_O"}(R||(R={})),function(t){t[t.NETWORK_SCORE=0]="NETWORK_SCORE",t[t.NETWORK_DISTANCE=1]="NETWORK_DISTANCE",t[t.NETWORK_DECAY=2]="NETWORK_DECAY",t[t.EUCLIDEAN_SCORE=3]="EUCLIDEAN_SCORE",t[t.EUCLIDEAN_DISTANCE=4]="EUCLIDEAN_DISTANCE",t[t.EUCLIDEAN_DECAY=5]="EUCLIDEAN_DECAY",t[t.WEIGHT_DESTINATION=6]="WEIGHT_DESTINATION",t[t.WEIGHT_ORIGIN=7]="WEIGHT_ORIGIN",t[t.WEIGHT=8]="WEIGHT",t[t.ATTRACTIVENESS=9]="ATTRACTIVENESS",t[t.DEVIATION=10]="DEVIATION",t[t.VISIT=11]="VISIT",t[t.ORIGIN=12]="ORIGIN",t[t.DESTINATION=13]="DESTINATION",t[t.NODE_ID=14]="NODE_ID",t[t.EDGE_ID=15]="EDGE_ID",t[t.ALL=16]="ALL"}(L||(L={})),function(t){t.NONE="NONE",t.SELECT="SELECT",t.REMOVE="REMOVE",t.SELECT_RECT="SELECT_RECT",t.SELECT_LASSO="SELECT_LASSO",t.MOVE_EASEING="MOVE_EASEING",t.UNDO="UNDO",t.REDO="REDO",t.POINT_REGULAR="POINT_REGULAR",t.POINT_NUMBERED="POINT_NUMBERED",t.POLYLINE="POLYLINE",t.FREEHAND_POLYLINE_BENDING="FREEHAND_POLYLINE_BENDING",t.POLYLINE_CONSTRAINT="POLYLINE_CONSTRAINT",t.POLYGON="POLYGON",t.POLYGON_GRAPH="POLYGON_GRAPH",t.POLYGON_MULTIPLE="POLYGON_MULTIPLE",t.POLYGON_CONSTRAINT="POLYGON_CONSTRAINT",t.POLYLINE_BENDING="POLYLINE_BENDING",t.LINE_GRAPH="LINE_GRAPH",t.CIRCLE="CIRCLE",t.CIRCLE_CONSTRAINT_AREA="CIRCLE_CONSTRAINT_AREA",t.CIRCLE_CONSTRAINT_CIRCUMFERENCE="CIRCLE_CONSTRAINT_CIRCUMFERENCE",t.RECTANGLE="RECTANGLE",t.POINT_ICON="POINT_ICON",t.TEXT="TEXT",t.TEXT_LEADERLINE="TEXT_LEADERLINE",t.ARROW_SINGLE="ARROW_SINGLE",t.ARROW_DOUBLE="ARROW_DOUBLE",t.CURVE="CURVE",t.CURVE_OPEN="CURVE_OPEN",t.CURVE_CLOSE="CURVE_CLOSE",t.FREEHAND_POLYLINE="FREEHAND_POLYLINE",t.FREEHAND_POLYGON="FREEHAND_POLYGON",t.FREEHAND_CURVE="FREEHAND_CURVE",t.FREEHAND_CURVE_CLOSED="FREEHAND_CURVE_CLOSED",t.SMARTDRAWING="SMARTDRAWING",t.SMARTDRAWING_DEEPLEARNING="SMARTDRAWING_DEEPLEARNING",t.LINE="LINE",t.APOINT="APOINT",t.CPOINT_REGULAR="CPOINT_REGULAR",t.CPOINT_NUMBERED="CPOINT_NUMBERED",t.CLINE="CLINE",t.CPOLYLINE="CPOLYLINE",t.CPOLYGON="CPOLYGON",t.CLINE_TOOGLE="CLINE_TOOGLE",t.CARC="CARC",t.CCIRCLE="CCIRCLE",t.CRECTANGLE="CRECTANGLE",t.CNGON="CNGON",t.CSTAR="CSTAR",t.CCURVE="CCURVE",t.CCURVE_CLOSE="CCURVE_CLOSE",t.CFREEHAND_POLYLINE="CFREEHAND_POLYLINE",t.CFREEHAND_CURVE="CFREEHAND_CURVE",t.CFREEHAND_LINE="CFREEHAND_LINE",t.CFREEHAND_SMARTDRAWING="CFREEHAND_SMARTDRAWING",t.CFREEHAND_SMOOTH="CFREEHAND_SMOOTH",t.CRECTANGLE_CROP="CRECTANGLE_CROP",t.CPOINT="CPOINT",t.CNODE="CNODE",t.CEDGE="CEDGE",t.LINE_SPIKE="LINE_SPIKE",t.CIRCLE_TRAJECTORY="CIRCLE_TRAJECTORY",t.ARC_SPIKE="ARC_SPIKE"}(A||(A={})),function(t){t.POINT_REGULAR="POINT_REGULAR",t.POINT_NUMBERED="POINT_NUMBERED",t.POINT_ICON="POINT_ICON",t.POLYLINE="POLYLINE",t.POLYLINE_BENDING="POLYLINE_BENDING",t.POLYGON="POLYGON",t.POLYGON_GRAPH="POLYGON_GRAPH",t.POLYGON_MULTIPLE="POLYGON_MULTIPLE",t.CIRCLE="CIRCLE",t.RECTANGLE="RECTANGLE",t.AN_GON="AN_GON",t.ARROW_SINGLE="ARROW_SINGLE",t.ARROW_DOUBLE="ARROW_DOUBLE",t.TEXT="TEXT",t.CATEXT="CATEXT",t.TEXT_LEADERLINE="TEXT_LEADERLINE",t.APOINT="APOINT",t.AMIDPOINT="AMIDPOINT",t.ANODE="ANODE",t.APOINT_PATH="APOINT_PATH",t.ANODE_RECT="ANODE_RECT",t.ANODE_CIRCLE="ANODE_CIRCLE",t.ANODE_NGON="ANODE_NGON",t.ANODE_TEXT="ANODE_TEXT",t.AMIDPOINT_ALINE="AMIDPOINT_ALINE",t.CURVE="CURVE",t.CURVE_OPEN="CURVE_OPEN",t.CURVE_CLOSE="CURVE_CLOSE",t.FREEHAND_POLYLINE="FREEHAND_POLYLINE",t.FREEHAND_CURVE="FREEHAND_CURVE",t.SMARTDRAWING="SMARTDRAWING",t.ALINE="ALINE",t.CPOINT="CPOINT",t.CMIDPOINT="CMIDPOINT",t.CNODE="CNODE",t.CNODE_RECT="CNODE_RECT",t.CNODE_CIRCLE="CNODE_CIRCLE",t.CNODE_NGON="CNODE_NGON",t.CNODE_TEXT="CNODE_TEXT",t.CPOINT_REGULAR="CPOINT_REGULAR",t.CPOINT_NUMBERED="CPOINT_NUMBERED",t.CLINE="CLINE",t.CEDGE="CEDGE",t.CPOLYLINE="CPOLYLINE",t.CPOLYGON="CPOLYGON",t.CRECTANGLE="CRECTANGLE",t.CN_GON="CN_GON",t.CN_STAR="CN_STAR",t.CARC="CARC",t.CCIRCLE="CCIRCLE",t.CCURVE="CCURVE",t.CCURVE_OPEN="CCURVE_OPEN",t.CCURVE_CLOSED="CCURVE_CLOSED",t.CBLACKHOLE="CBLACKHOLE",t.CFREEHAND="CFREEHAND",t.COTHERS="COTHERS"}(D||(D={})),function(t){t.DEFAULT="default",t.AUTO="auto",t.CROSSHAIR="crosshair",t.MOVE="move",t.POINTER="pointer",t.TEXT="text",t.WAIT="wait",t.HELP="help",t.PROGRESS="progress"}(x||(x={})),function(t){t.X_NONE="X_NONE",t.X_REMOVE="X_REMOVE",t.X_SELECT="X_SELECT",t.X_SELECT_RECT="X_SELECT_RECT",t.X_SELECT_LASSO="X_SELECT_LASSO",t.X_UNDO="X_UNDO",t.X_REDO="X_REDO",t.X_ARROW_SINGLE="X_ARROW_SINGLE",t.X_ARROW_DOUBLE="X_ARROW_DOUBLE",t.X_POINT_REGULAR="X_POINT_REGULAR",t.X_POINT_NUMBERED="X_POINT_NUMBERED",t.X_POLYLINE="X_POLYLINE",t.X_FREEHAND_POLYLINE="X_FREEHAND_POLYLINE",t.X_POLYGON="X_POLYGON",t.X_CIRCLE="X_CIRCLE",t.X_RECTANGLE="X_RECTANGLE",t.X_TEXT_LEADERLINE="X_TEXT_LEADERLINE",t.X_POINT="X_POINT",t.X_NODE="X_NODE",t.X_EDGE="X_EDGE",t.X_POINT_ICON="X_POINT_ICON"}(p||(p={}))},59475:(t,e,i)=>{i.d(e,{rd:()=>c});i(91769);var s=i(39890);class n{constructor(){this.x=-1,this.y=-1,this.z=-1,this.preX=-1,this.preY=-1,this.preZ=-1,this.yGLPicking=void 0,this.command=void 0,this.TOUCH_TYPE=s.KV.MOVE,this.identifier=void 0,this.radiusX=void 0,this.radiusY=void 0,this.rotationAngle=void 0,this.force=void 0,this.color=void 0}DeepCopy(){const t=new n;return t.x=this.x,t.y=this.y,t.z=this.z,t.preX=this.preX,t.preY=this.preY,t.preZ=this.preZ,t.yGLPicking=this.yGLPicking,t.TOUCH_TYPE=this.TOUCH_TYPE,t.command=this.command,t}}class h{constructor(){this.native=void 0,this.eventList=void 0,this.TOUCH_TYPE=s.KV.MOVE,this.eventList=[]}Build(t,e){for(let i=0;i<t.touches.length;++i){const s=new n;s.identifier=t.touches[i].identifier,s.TOUCH_TYPE=e,s.radiusX=t.touches[i].radiusX,s.radiusY=t.touches[i].radiusY,s.rotationAngle=t.touches[i].rotationAngle,s.x=t.touches[i].clientX,s.y=t.touches[i].clientY,s.force=t.touches[i].force,s.color=this.ColorForTouch(t.touches[i]),this.eventList.push(s)}}DeepCopy(){}ColorForTouch(t){const e=t.identifier%16,i=Math.floor(t.identifier/3)%16,s=Math.floor(t.identifier/7)%16;return"#"+e.toString(16)+i.toString(16)+s.toString(16)}}class o{static CommonEventBuilder(t,e){const i=new h;return i.TOUCH_TYPE=e,i.Build(t,e),this.touchEventDataPre=i,i}constructor(t){this.isEnable=!0,this.click=!1,this.prevent=!1,this.delay=100,this.down=!1,this.e=void 0,this.preEvent=void 0,this.divHost=void 0,this.divHost=t,this.InitNativeTouchEvent(this.divHost)}InitNativeTouchEvent(t){t.ontouchstart=t=>{const e=o.CommonEventBuilder(t,s.KV.START);this.TouchEventEmittingBinding(e)},t.ontouchend=t=>{const e=o.CommonEventBuilder(t,s.KV.END);this.TouchEventEmittingBinding(e)},t.ontouchmove=t=>{const e=o.CommonEventBuilder(t,s.KV.MOVE);this.TouchEventEmittingBinding(e)},t.ontouchcancel=t=>{const e=o.CommonEventBuilder(t,s.KV.CANCEL);this.TouchEventEmittingBinding(e)}}TouchEventEmittingBinding(t){}}o.touchEventDataPre=void 0;class a{static GetCamera(){}constructor(t){this.video=void 0,this.canvas=void 0,this.ctx=void 0,this.width=400,this.height=400,this.mediaStream=void 0,this.hostDiv=void 0,this.id=void 0,this.hostDiv=t,this.width=t.clientWidth,this.height=t.clientHeight,this.id="njslab-web-core-camera"+a.id++;this.InitVideo(t),this.InitMedia()}SetSizeFromTemplate(t){this.width=t[0],this.height=t[1],this.video.style.width=t[0]+"px",this.video.style.height=t[1]+"px",this.hostDiv.style.width=t[0]+"px",this.hostDiv.style.height=t[1]+"px"}InitCanvas(){const t=document.createElement("canvas");if(t){this.canvas=t;const e=this.canvas.getContext("2d");e&&(this.ctx=e)}}InitVideo(t){this.video=document.createElement("video"),this.video.id=this.id,this.video.setAttribute("playsinline",""),this.video.setAttribute("autoplay",""),this.video.setAttribute("muted",""),this.video.style.filter="blur(3px)",this.video.style.filter="contrast(150%)",this.video.style.width=this.width+"px",this.video.style.height=this.height+"px",t.appendChild(this.video)}InitMedia(){const t={video:{facingMode:"facingMode",width:this.width,height:this.height},audio:!1};this.HasGetUserMedia()?navigator.mediaDevices.getUserMedia(t).then((t=>{this.mediaStream=t,this.video.srcObject=this.mediaStream})):alert("getUserMedia() is not supported by your browser")}GetImageData(){this.ctx.drawImage(this.video,0,0,this.width,this.height);this.ctx.getImageData(0,0,this.width,this.height)}Resize(t,e){this.width=t,this.height=e,this.video.style.width=t+"px",this.video.style.height=e+"px"}HasGetUserMedia(){return!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)}Dummy(){}Dispose(){this.mediaStream.getTracks().forEach((t=>t.stop())),this.hostDiv.removeChild(this.video)}}a.id=0,a.FILTERS=["grayscale","sepia","blur","brightness","contrast","hue-rotate","hue-rotate2","hue-rotate3","saturate","invert",""];class r{static async URL(t){return fetch(t).then((t=>t.text())).catch((t=>{}))}static async OpenOBJ(t){return fetch("".concat(r.path,"/3dData/").concat("torus.obj")).then((t=>t.text())).then((t=>{})).catch((t=>{}))}static async OpenOBJForExternalRenderer(t){return fetch(t,{mode:"no-cors"}).then((t=>t.text())).then((t=>{})).catch((t=>{}))}static async OpenGeoJsonEx01(t){return fetch("".concat(r.path,"/json/").concat("weektest.geojson")).then((t=>t.json())).then((t=>{})).catch((t=>{}))}static async OpenGeoJsonEx02(t){return fetch("".concat(r.path,"/json/").concat("BusRoute.geojson")).then((t=>t.json())).then((t=>{})).catch((t=>{}))}static async OpenGeoJsonEx03(t){return fetch("".concat(r.path,"/json/").concat("globeMap.geojson")).then((t=>t.json())).then((t=>{})).catch((t=>{}))}static async OpenGeoJson(t){return fetch("".concat(r.path,"/json/").concat(t)).then((t=>t.json())).then((t=>t)).catch((t=>{}))}static async OpenJson(t){return fetch("".concat(r.path,"/json/").concat(t)).then((t=>t.json())).then((t=>t)).catch((t=>{}))}static async OpenJsonAnnotationTheme(t){return fetch("".concat(r.path,"/theme/").concat(t)).then((t=>t.json())).catch((t=>{}))}static async OpenThemeJSON(t){return fetch("".concat(r.path,"/theme/").concat(t)).then((t=>t.json())).catch((t=>{}))}static async OpenDataJSON(t){return fetch("".concat(r.path,"/").concat(t)).then((t=>t.json())).catch((t=>{}))}static async OpenImg(t){return fetch("".concat(r.path,"/img/").concat(t)).then((t=>t.blob())).then((t=>{const e=new Image,i=URL.createObjectURL(t);return e.src=i,e.onload=()=>{e.crossOrigin="anonymous"},e})).catch((t=>{}))}static async LoadImg(t){return fetch("".concat(r.path,"/").concat(t)).then((t=>t.blob())).then((t=>URL.createObjectURL(t))).catch((t=>{}))}static async LoadSVG(t){return fetch("".concat(r.path,"/").concat(t)).then((t=>t.text())).catch((t=>{}))}static async LoadSVGFromLocal(t){return fetch("".concat(r.path,"/images/").concat(t)).then((t=>t.text())).catch((t=>{}))}static async LoadSVGFromHTTP(t){return fetch(t,{mode:"no-cors"}).then((t=>t.text())).catch((t=>{}))}static async PointRegular(){}static async OpenXML(t){}static async OpenCSV(t){}static async OpenTXT(t){}static async GetObjectFromSVGPath(t){let e=new DOMParser,i=await fetch(t),s=await i.text(),n=await e.parseFromString(s,"text/xml");return this.XmlToJson(n)}static async GetObjectFromSVGImporting(t){let e=new DOMParser,i=await e.parseFromString(t,"text/xml");return this.XmlToJson(i)}static XmlToJson(t){let e={};if(1===t.nodeType){if(t.attributes.length>0){e["@attributes"]={};for(let i=0;i<t.attributes.length;i++){let s=t.attributes.item(i);e["@attributes"][s.nodeName]=s.nodeValue}}}else 3===t.nodeType&&t.nodeValue&&(e=t.nodeValue);if(t.hasChildNodes())for(let i=0;i<t.childNodes.length;i++){let s=t.childNodes.item(i),n=s.nodeName;if("undefined"===typeof e[n])e[n]=this.XmlToJson(s);else{if("undefined"===typeof e[n].push){let t=e[n];e[n]=[],e[n].push(t)}e[n].push(this.XmlToJson(s))}}return e}constructor(){}}r.path="/njslabSandboxStatic";const c=async t=>{const e=await fetch("".concat(t),{mode:"cors"});return await e.json()}},44945:(t,e,i)=>{i.d(e,{TE:()=>n,h9:()=>h,tl:()=>s});const s=(t,e,i,s)=>Math.sqrt((t-i)*(t-i)+(e-s)*(e-s)),n=(t,e)=>Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)+(t.z-e.z)*(t.z-e.z));class h{static normalize(t){return(t=>{const e=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);return e<1e-4?new h(t.x,t.y,t.z):new h(t.x/e,t.y/e,t.z/e)})(t)}static getMidVec(t,e){return new h(t.x+.5*(e.x-t.x),t.y+.5*(e.y-t.y),t.z+.5*(e.z-t.z))}static distanceTo(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)+(t.z-e.z)*(t.z-e.z))}static Clone(t){return h.DeepCopy(t)}static DeepCopy(t){const e=new h(t.x,t.y,t.z);return e.long=t.long,e.lat=t.lat,e}static Dot(t,e){return t.x*e.x+t.y*e.y+t.z*e.z}static ZAxis(){return new h(0,0,1)}static YAxis(){return new h(0,1,0)}static Zero(){return new h(0,0,0)}static Origin(){return new h(0,0,0)}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=0,this.y=0,this.z=0,this.long=0,this.lat=0,this.elevation=0,this.d=!0,this.isRenderable=!0,this.x=t,this.y=e,this.z=i}Set(t,e,i){return this.x=t,this.y=e,this.z=i,new h(this.x,this.y,this.z)}scale(t){return this.x*=t,this.y*=t,this.z*=t,new h(this.x,this.y,this.z)}Mult(t){return this.x*=t,this.y*=t,this.z*=t,new h(this.x,this.y,this.z)}DivByVal(t){return this.x/=t,this.y/=t,this.z/=t,new h(this.x,this.y,this.z)}DivByVec(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,new h(this.x,this.y,this.z)}Add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,new h(this.x,this.y,this.z)}Sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,new h(this.x,this.y,this.z)}Negate(){return this.x*=-1,this.y*=-1,this.z*=-1,new h(this.x,this.y,this.z)}Equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}distanceTo(t){return h.distanceTo(this,t)}distanceToGeo(t){return((t,e)=>{let i=e.lat*Math.PI/180-t.lat*Math.PI/180,s=e.long*Math.PI/180-t.long*Math.PI/180,n=Math.sin(i/2)*Math.sin(i/2)+Math.cos(t.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)*Math.sin(s/2);return 2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n))*6378.137*1e3})(this,t)}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);return t<1e-4||(this.x=this.x/t,this.y=this.y/t,this.z=this.z/t),this}Clone(){const t=new h(this.x,this.y,this.z);return t.long=this.long,t.lat=this.lat,t.elevation=this.elevation,t}Length(){const t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);return t<1e-5?1e-5:t}Unitize(){return this.normalize()}GetAngle(){return Math.atan2(this.y,this.x)}GetAngleDegree(){return 180*this.GetAngle()/Math.PI}ToJSON(){}ToString(){return"x: "+this.x.toFixed(3).toString()+" , y: "+this.y.toFixed(3).toString()+", z: "+this.z.toFixed(3).toString()}ToFloat32Array(){return new Float32Array([this.x,this.y,this.z])}}h.attractor=(t,e,i,s)=>{let n=o(e,t),h=n.Length();return n.Unitize(),n.Mult(i*Math.exp(-s*h*h))};const o=(t,e)=>new h(t.x-e.x,t.y-e.y,t.z-e.z)},91769:(t,e,i)=>{i.d(e,{lw:()=>a.lw,UO:()=>r,ON:()=>o,zK:()=>a.zK,$E:()=>h,h9:()=>s.h9,TE:()=>s.TE,Mo:()=>E});var s=i(44945);class n{constructor(t,e){this.p0=void 0,this.p1=void 0,this.p0=t,this.p1=e}}class h{constructor(){this.x=-1,this.y=-1,this.z=-1,this.preX=-1,this.preY=-1,this.preZ=-1,this.xs=-1,this.ys=-1,this.preXs=-1,this.preYs=-1,this.yGLPicking=void 0,this.isDown=!1,this.isDoubleClick=!1,this.isMove=!1,this.pressedShift=!1,this.pressedAlt=!1,this.pressedCtrl=!1,this.lat=-1,this.long=-1,this.wheel=0,this.preWheel=0,this.type=void 0,this.native=void 0}DeepCopy(){let t=new h;return t.x=this.x,t.y=this.y,t.z=this.z,t.preX=this.preX,t.preY=this.preY,t.preZ=this.preZ,t.pressedAlt=this.pressedAlt,t.pressedShift=this.pressedShift,t.pressedCtrl=this.pressedCtrl,t.isDoubleClick=this.isDoubleClick,t.isDown=this.isDown,t.isMove=this.isMove,t.lat=this.lat,t.long=this.long,t.wheel=this.wheel,t.preWheel=this.preWheel,t.yGLPicking=this.yGLPicking,t.native=this.native,t}}class o{constructor(){this.preEvent=void 0,this.key=void 0,this.hasAltKey=void 0,this.hasCtrlKey=void 0,this.hasShiftKey=void 0,this.hasMetaCommand=void 0,this.code=void 0,this.keyCode=void 0}}var a=i(39890);class r{constructor(){this.isRenderable=!1,this.dataList=[],this.linesVecs=[],this.cols=[],this.streetName=[],this.lineTest=[]}initLines(t){this.linesVecs=[],this.cols=[],this.streetName=[];let e="rgba(0,255,0, 0.5)",i=this.dataList[0][1],h=this.dataList[0][4],o=this.dataList[0][3],a=t(h,o),r=[],c=new s.h9(a[0],a[1],0);c.long=h,c.lat=o,r.push(c),this.cols.push(e),this.streetName.push(i);for(let n=0;n<this.dataList.length;n++)if(h=this.dataList[n][4],o=this.dataList[n][3],a=t(h,o),i===this.dataList[n][1]){let t=new s.h9(a[0],a[1],0);t.long=h,t.lat=o,r.push(t)}else{i=this.dataList[n][1],this.linesVecs.push(r),this.cols.push(e),this.streetName.push(i),r=[];let t=new s.h9(a[0],a[1],0);t.long=h,t.lat=o,r.push(t)}this.linesVecs.push(r);const E=[];for(let s=0;s<this.linesVecs.length;++s)for(let t=1;t<this.linesVecs[s].length;++t)E.push(new n(this.linesVecs[s][t-1],this.linesVecs[s][t]));this.lineTest=E}updateProjection(t){}render(t,e,i,s){t.strokeStyle="rgba(0, 255, 0, 0.3)",t.lineWidth=2,t.beginPath();for(let n=0;n<this.lineTest.length;++n){const e=this.lineTest[n];t.moveTo(e.p0.x,e.p0.y),t.lineTo(e.p1.x,e.p1.y)}t.stroke()}renderRaw(t,e){if(!this.isRenderable)return;t.fillStyle="#ff0000",t.strokeStyle="#0ff000",t.lineWidth=1;let i=this.dataList[0][1],s=e(this.dataList[0][4],this.dataList[0][3]);t.beginPath(),t.moveTo(s[0],s[1]);for(let n=0;n<this.dataList.length;n++){const s=e(this.dataList[n][4],this.dataList[n][3]);i===this.dataList[n][1]?t.lineTo(s[0],s[1]):(i=this.dataList[n][1],t.stroke(),t.beginPath(),t.moveTo(s[0],s[1]))}t.stroke()}ComputeCSV(t){t=this.processData(t);for(let e=0;e<t.length;++e);}processData(t){const e=t.split(/\r\n|\n/),i=e[0].split(","),s=[];for(let n=1;n<e.length;n++){const t=e[n].split(",");if(t.length===i.length){const e=[];for(let s=0;s<i.length;s++){const i=+t[s];isNaN(i)?e.push(t[s]):e.push(i)}s.push(e)}}return this.dataList=s,this.isRenderable=!0,s}}class c{static Scale(t){return.2*(Math.sin(c.t)+5)*t}static ScaleLocalT(t,e){return.2*(Math.sin(e)+5)*t}static ScaleMin(t){return(.02*(Math.sin(c.t)+5)+.9)*t}static ScaleMinOfMin(t){return Math.cos(t)}static ScaleMinLocalT(t,e){return(.02*(Math.sin(e)+5)+.9)*t}static linear(t){return t}static EaseInQuad(t){return t*t}static EaseOutQuad(t){return t*(2-t)}static EaseInOutQuad(t){return t<.5?2*t*t:(4-2*t)*t-1}static EaseInCubic(t){return t*t*t}static EaseOutCubic(t){return--t*t*t+1}static EaseInOutCubic(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}static EaseInQuart(t){return t*t*t*t}static EaseOutQuart(t){return 1- --t*t*t*t}static EaseInOutQuart(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t}static EaseInQuint(t){return t*t*t*t*t}static EaseOutQuint(t){return 1+--t*t*t*t*t}static EaseInOutQuint(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}static EaseInElastic(t){return(.04-.04/t)*Math.sin(25*t)+1}static EaseOutElastic(t){return.04*t/--t*Math.sin(25*t)}static EaseInOutElastic(t){return(t-=.5)<0?(.01+.01/t)*Math.sin(50*t):(.02-.01/t)*Math.sin(50*t)+1}static easeOutElastic2(t){return Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1}static easeInSine(t){return-1*Math.cos(t*(Math.PI/2))+1}static easeOutSine(t){return Math.sin(t*(Math.PI/2))}static easeInOutSine(t){return-.5*(Math.cos(Math.PI*t)-1)}static easeInQuad(t){return t*t}static easeOutQuad(t){return t*(2-t)}static easeInOutQuad(t){return t<.5?2*t*t:(4-2*t)*t-1}static easeInCubic(t){return t*t*t}static easeOutCubic(t){const e=t-1;return e*e*e+1}static easeInOutCubic(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}static easeInQuart(t){return t*t*t*t}static easeOutQuart(t){const e=t-1;return 1-e*e*e*e}static easeInOutQuart(t){const e=t-1;return t<.5?8*t*t*t*t:1-8*e*e*e*e}static easeInQuint(t){return t*t*t*t*t}static easeOutQuint(t){const e=t-1;return 1+e*e*e*e*e}static easeInOutQuint(t){const e=t-1;return t<.5?16*t*t*t*t*t:1+16*e*e*e*e*e}static easeInExpo(t){return 0===t?0:Math.pow(2,10*(t-1))}static easeOutExpo(t){return 1===t?1:1-Math.pow(2,-10*t)}static easeInOutExpo(t){if(0===t||1===t)return t;const e=2*t,i=e-1;return e<1?.5*Math.pow(2,10*i):.5*(2-Math.pow(2,-10*i))}static easeInCirc(t){const e=t/1;return-1*(Math.sqrt(1-e*t)-1)}static easeOutCirc(t){const e=t-1;return Math.sqrt(1-e*e)}static easeInOutCirc(t){const e=2*t,i=e-2;return e<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-i*i)+1)}static easeInBack(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.70158;return t*t*((e+1)*t-e)}static easeOutBack(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.70158;const i=t/1-1;return i*i*((e+1)*i+e)+1}static easeInOutBack(t){const e=2*t,i=e-2,s=1.525*(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.70158);return e<1?.5*e*e*((s+1)*e-s):.5*(i*i*((s+1)*i+s)+2)}static easeInElastic(t){if(0===t||1===t)return t;const e=t/1-1,i=1-(arguments.length>1&&void 0!==arguments[1]?arguments[1]:.7),s=i/(2*Math.PI)*Math.asin(1);return-Math.pow(2,10*e)*Math.sin((e-s)*(2*Math.PI)/i)}static easeOutElastic(t){const e=1-(arguments.length>1&&void 0!==arguments[1]?arguments[1]:.7),i=2*t;if(0===t||1===t)return t;const s=e/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*i)*Math.sin((i-s)*(2*Math.PI)/e)+1}static easeInOutElastic(t){const e=1-(arguments.length>1&&void 0!==arguments[1]?arguments[1]:.65);if(0===t||1===t)return t;const i=2*t,s=i-1,n=e/(2*Math.PI)*Math.asin(1);return i<1?Math.pow(2,10*s)*Math.sin((s-n)*(2*Math.PI)/e)*-.5:Math.pow(2,-10*s)*Math.sin((s-n)*(2*Math.PI)/e)*.5+1}static easeOutBounce(t){const e=t/1;if(e<1/2.75)return 7.5625*e*e;if(e<2/2.75){const t=e-1.5/2.75;return 7.5625*t*t+.75}if(e<2.5/2.75){const t=e-2.25/2.75;return 7.5625*t*t+.9375}{const t=e-2.625/2.75;return 7.5625*t*t+.984375}}static easeInBounce(t){return 1-c.easeOutBounce(1-t)}static easeInOutBounce(t){return t<.5?.5*c.easeInBounce(2*t):.5*c.easeOutBounce(2*t-1)+.5}static Easing(){}static Update(){c.t+=.05}}c.t=0;const E=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.search,e=t?t.split("?")[1]:window.location.search.slice(1),i={};if(e){e=e.split("#")[0];let t=e.split("&");for(let e=0;e<t.length;e++){let s=t[e].split("="),n=s[0],h="undefined"===typeof s[1]||s[1];if(n=n.toLowerCase(),"string"===typeof h&&(h=h.toLowerCase()),n.match(/\[(\d+)?\]$/)){let t=n.replace(/\[(\d+)?\]/,"");if(i[t]||(i[t]=[]),n&&n.match(/\[\d+\]$/)){if(null!==/\[(\d+)\]/.exec(n)){let e=/\[(\d+)\]/.exec(n);e&&e[1]&&(i[t][e]=h)}}else i[t].push(h)}else i[n]?i[n]&&"string"===typeof i[n]?(i[n]=[i[n]],i[n].push(h)):i[n].push(h):i[n]=h}}return i};class l{constructor(t,e,i,s,n,h,o,a,r,c){this.index=void 0,this.data=void 0,this.count=void 0,this.min=void 0,this.max=void 0,this.mean=void 0,this.sum=void 0,this.median=void 0,this.variance=void 0,this.STD=void 0,this.toFixed=void 0,this.data=t,this.count=e,this.min=i,this.max=s,this.mean=n,this.sum=h,this.median=o,this.variance=a,this.STD=r,this.index=c,this.toFixed=4}ToString(){const t=[];return t.push("index : "+this.index),t.push("count : "+this.count),t.push("min : "+this.min.toFixed(this.toFixed)),t.push("max : "+this.max.toFixed(this.toFixed)),t.push("mean : "+this.mean.toFixed(this.toFixed)),t.push("sum : "+this.sum.toFixed(this.toFixed)),t.push("median : "+this.median.toFixed(this.toFixed)),t.push("variance : "+this.variance.toFixed(this.toFixed)),t.push("STD : "+this.STD.toFixed(this.toFixed)),t}}class d{static DescribeNumeric(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"null";return new l(t,t.length,d.Min(t),d.Max(t),d.Mean(t),d.Sum(t),d.Median(t),d.Variance(t),d.StandardDeviation(t),e)}static Min(t){return Math.min(...t)}static Max(t){return Math.max(...t)}static Mean(t){return d.Average(t)}static Average(t){return d.Sum(t)/t.length}static Sum(t){let e=t.length,i=0;for(;e--;)i+=t[e];return i}static Median(t){let e=d.SortAscending(t),i=Math.floor(e.length/2);return e.length%2?e[i]:(e[i-1]+e[i])/2}static SortAscending(t){return t.sort(((t,e)=>t-e))}static SortDescending(t){return t.sort(((t,e)=>e-t))}static Variance(t){let e=d.Mean(t),i=0;for(let s=0;s<t.length;++s)t[s],i+=Math.pow(e-t[s],2);return i/(t.length-1)}static StandardDeviation(t){let e=d.Variance(t);return Math.sqrt(e)}static GetDataForHistDataFromNumeric(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=[],s=d.SortAscending(t),n=[s[0],s[s.length-1]],h=(n[1]-n[0])/(e-1),o=0;for(let a=0;a<e;++a){const e=n[0]+(a+1)*h;let s=[];for(let i=o;i<t.length;++i){if(!(t[i]<e)){o=i;break}s.push(t[i])}i.push(s)}return i}static GetIndexByDataForHistDataFromNumeric(t,e){for(let i=0;i<t.length;++i)for(let s=0;s<t[i].length;++s)if(e<t[i][s])return i;return-1}}class O{static GetIndexFromGeoJson(t){let e=[],i=[];Object.keys(t).forEach((s=>{if("features"===s){let n=t[s];for(let t of n){e=t.geometry,i=t.properties;break}}}));let s=[];return Object.keys(e).forEach((t=>{s.push(t)})),Object.keys(i).forEach((t=>{s.push(t)})),s}static GetDataWithIndexFromGeoJson(t){let e=[];return Object.keys(t).forEach((i=>{if("features"===i){let s=t[i];for(let t of s){let i=[],s=[],n=!0;Object.keys(t).forEach((e=>{Object.keys(t[e]).forEach((h=>{let o=t[e][h];"string"===typeof o&&1===o.length||(n&&i.push(h),s.push(o))}))})),n&&(e.push(i),n=!1),e.push(s)}return e}})),e}constructor(t){this.dJson=void 0,this.dMat=void 0,this.index=void 0,this.dHist=void 0,this.dDescribe=void 0,this.dT=void 0,this.dA=void 0,this.dB=void 0,this.dC=void 0,this.dD=void 0,this.dE=void 0,this.dF=void 0,this.dJson=t,this.dMat=O.GetDataWithIndexFromGeoJson(t),this.index=this.dMat[0],this.dDescribe=this.GetDescribeByCol(this.index[0]).ToString(),this.dHist=this.GetHistByCol(this.index[0]),this.dT=this.GetColbyIndex("time"),this.dA=this.GetColbyIndex(this.index[0]),this.dB=this.GetColbyIndex("rms"),this.dC=this.GetColbyIndex("sig"),this.dD=this.GetColbyIndex("nst"),this.dE=this.GetColbyIndex("mag"),this.dF=this.GetColbyIndex("dmin")}GetDataByIndex(t){let e=this.index.indexOf(t),i=[];for(let s=1;s<this.dMat.length;++s)i.push(this.dMat[s][e]);return i}GetColbyIndex(t){return this.GetDataByIndex(t)}GetDescribeByCol(t){let e=this.GetDataByIndex(t);return d.DescribeNumeric(e,t)}GetHistByCol(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,i=this.GetDataByIndex(t);return d.GetDataForHistDataFromNumeric(i,e)}}O.geoJsonGeoType=["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","GeometryCollection"];class u{static GetIndexFromGeoJson(t){let e=[],i=[];Object.keys(t).forEach((s=>{if("features"===s){let n=t[s];for(let t of n){e=t.geometry,i=t.properties;break}}}));let s=[];return Object.keys(e).forEach((t=>{s.push(t)})),Object.keys(i).forEach((t=>{s.push(t)})),s}static GetDataWithIndexFromGeoJson(t){let e=[];return Object.keys(t).forEach((i=>{if("features"===i){let s=t[i];for(let t of s){let i=[],s=[],n=!0;Object.keys(t).forEach((e=>{Object.keys(t[e]).forEach((h=>{let o=t[e][h];"string"===typeof o&&1===o.length||(n&&i.push(h),s.push(o))}))})),n&&(e.push(i),n=!1),e.push(s)}return e}})),e}constructor(t){this.dJson=void 0,this.dMat=void 0,this.index=void 0,this.dHist=void 0,this.dDescribe=void 0,this.dT=void 0,this.dA=void 0,this.dB=void 0,this.dC=void 0,this.dD=void 0,this.dE=void 0,this.dF=void 0,this.posLn=void 0,this.dJson=t,this.dMat=u.GetDataWithIndexFromGeoJson(t),this.index=this.dMat[0],this.posLn=this.GetPTFloat32Array(),u.d=this.posLn}GetPTFloat32Array(){let t=[1],e=this.GetDataByIndex(this.index[this.index.length-1]);for(let i=0;i<e.length;++i)if(Array.isArray(e[i]))for(let s=0;s<e[i].length;++s)if(Array.isArray(e[i][s])){for(let n=0;n<e[i][s].length;++n)if(Array.isArray(e[i][s][n]))for(let h=0;h<e[i][s][n].length;++h)t.push(e[i][s][n][h][0],e[i][s][n][h][1],10.5);0}return t.shift(),t}GetDataByIndex(t){let e=this.index.indexOf(t),i=[];for(let s=1;s<this.dMat.length;++s)i.push(this.dMat[s][e]);return i}GetColbyIndex(t){return this.GetDataByIndex(t)}GetDescribeByCol(t){let e=this.GetDataByIndex(t);return d.DescribeNumeric(e,t)}GetHistByCol(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,i=this.GetDataByIndex(t);return d.GetDataForHistDataFromNumeric(i,e)}}u.d=void 0,u.geoJsonGeoType=["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","GeometryCollection"];class N{static GetHistByCol(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return d.GetDataForHistDataFromNumeric(t,e)}static GetIndexFromGeoJson(t){let e=[],i=[];Object.keys(t).forEach((s=>{if("features"===s){let n=t[s];for(let t of n){e=t.geometry,i=t.properties;break}}}));let s=[];return Object.keys(e).forEach((t=>{s.push(t)})),Object.keys(i).forEach((t=>{s.push(t)})),s}static GetDataWithIndexFromGeoJson(t){let e=[];return Object.keys(t).forEach((i=>{if("features"===i){let s=t[i];for(let t of s){let i=[],s=[],n=!0;Object.keys(t).forEach((e=>{Object.keys(t[e]).forEach((h=>{let o=t[e][h];"string"===typeof o&&1===o.length||(n&&i.push(h),s.push(o))}))})),n&&(e.push(i),n=!1),e.push(s)}return e}})),e}constructor(t){this.dJson=void 0,this.dMat=void 0,this.index=void 0,this.dHist=void 0,this.dDescribe=void 0,this.array={},this.arrayVis={},this.dJson=t,this.dMat=N.GetDataWithIndexFromGeoJson(t),this.index=this.dMat[0],this.Init()}Init(){for(let e of this.index)this.array[e]=this.GetColbyIndex(e);this.array.timeConverted=this.ConvertTime(this.array.Time_UT_),this.ComputeTimelineIndex();let t=[];for(let e=0;e<this.array.timeConverted.length;++e)t.push(e);this.ComputeArrayVis(t)}ComputeArrayVis(t){this.arrayVis={};for(let e of this.index){this.arrayVis[e]=[];for(let i of t)this.arrayVis[e].push(this.array[e][i])}}GetHistByCol(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,i=this.GetDataByIndex(t);return d.GetDataForHistDataFromNumeric(i,e)}GetDataByIndex(t){let e=this.index.indexOf(t),i=[];for(let s=1;s<this.dMat.length;++s)i.push(this.dMat[s][e]);return i}GetColbyIndex(t){return this.GetDataByIndex(t)}ConvertTime(t){let e=Number.MAX_SAFE_INTEGER,i=Number.MIN_SAFE_INTEGER,s=[];for(let n=0;n<t.length;++n){let h=new Date(+t[n]).toLocaleDateString().split("/");e>+h[2]&&(e=+h[2]),i<+h[2]&&(i=+h[2]),s.push([+h[0],+h[1],+h[2]])}return this.array.yearDomain=[e,i],s}ComputeTimelineIndex(){let t={};this.array.timeLineIndexArryForKey=[];for(let e=this.array.yearDomain[0];e<=this.array.yearDomain[1];++e)for(let i=1;i<13;++i){let s=e+"_"+i;t[s]=[],this.array.timeLineIndexArryForKey.push(s)}this.array.timeLineIndex=t;for(let e=0;e<this.array.timeConverted.length;++e){let t=this.array.timeConverted[e][2]+"_"+this.array.timeConverted[e][0];this.array.timeLineIndex[t].push(e)}}}N.geoJsonGeoType=["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","GeometryCollection"];class f{static GetID(){return f.ID++}constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new s.h9(0,0,0);this.map=void 0,this.vec=void 0,this.norV=void 0,this.nPix=[],this.recVec=void 0,this.i=-1,this.j=-1,this.k=-1,this.u=-1,this.v=-1,this.id=void 0,this.color=[],this.data=void 0,this.map=t,this.vec=e,this.nPix=[],this.recVec=[],this.i=-1,this.j=-1,this.k=-1,this.id=f.GetID(),this.data={}}ToString(){return"Pixel"+this.id}Update(){}Render(){}}f.ID=0;i(59475);i(98935),i(46179),i(50430),i(10991),i(84549),i(92167),i(83536),i(53037);class C{static GetZIndex(){return(C.zIndex--).toString()}constructor(t,e,i,n,h){this.host=void 0,this.vec=void 0,this.divAnchor=void 0,this.div=void 0,this.divHost=void 0,this.width=void 0,this.height=void 0,this.xOff0=5,this.yOff0=5,this.xOff1=25,this.yOff1=25,this._textAlign="left",this._textCol=void 0,this._content=void 0,this.host=t,this.vec=new s.h9(e,i),this.width=n,this.height=h,this.divHost=this.host.independentPanelWrapper.nUI.divHost,this.GetDivBaseContainer(),this.textAlign="left"}set textCol(t){this._textCol=t,this.div.style.color=this._textCol}set textAlign(t){this._textAlign=t,this.div.style.textAlign=this._textAlign}get Width(){return this.width}set Width(t){this.width=t,this.UpdateSize()}get Height(){return this.height}set Height(t){this.height=t,this.UpdateSize()}get content(){return this._content}set content(t){this._content=t,this.div.textContent=t}Hide(t){t?this.Remove():this.GetDivBaseContainer()}Translate(t,e){this.vec.x+=t,this.vec.y+=e,this.div.style.left=this.vec.x+this.xOff0+"px",this.div.style.top=this.vec.y+this.yOff0+"px"}UpdateSize(){this.div.style.width=this.width-this.xOff1+"px",this.div.style.height=this.height-this.host.HeadHeight-this.yOff1+"px"}Remove(){this.divHost.removeChild(this.div)}GetDivBaseContainer(){let t=document.createElement("div");return t.style.position="absolute",t.style.pointerEvents="none",t.id="indePanel",t.style.height=this.height-this.yOff1+"px",t.style.width=this.width-this.xOff1+"px",t.style.left=this.vec.x+this.xOff0+"px",t.style.top=this.vec.y+this.yOff0+"px",t.style.zIndex="10",t.style.padding="6px",t.style.paddingLeft="6px",t.style.wordWrap="break-word",t.style.overflow="hidden",t.textContent=this._content,t.style.font="13px Arial",t.style.fontWeight="lighter",t.style.lineHeight="23px",t.style.textAlign=this._textAlign,t.style.color=this.textCol,this.divHost.appendChild(t),this.div=t,t}}C.zIndex=9999},53037:t=>{t.exports=JSON.parse('{"colBG":"#ffffff","colSection":"#777777","colText":"#333333","colTextHover":"#ffffff","colTextDisable":"#cccccc","colSelectedBG":"#000000","colSelectedText":"#ffffff","widthEach":250,"heightEach":23,"textYOff":15,"font":"normal 12px arial","animationSpeed":0.195,"textAlign":"left","toolbarBG":"#cccccc","toolbarFG":"#ffffff"}')},50430:t=>{t.exports=JSON.parse('{"colBG":"#ffffff","colSection":"#777777","colText":"#333333","colTextHover":"#ffffff","colTextDisable":"#cccccc","colSelectedBG":"#0080FF","colSelectedText":"#ffffff","widthEach":250,"heightEach":20,"textYOff":15,"font":"normal 11px arial","animationSpeed":0.195,"textAlign":"left","toolbarBG":"#cccccc","toolbarFG":"#ffffff"}')},83536:t=>{t.exports=JSON.parse('{"colBG":"#ffffff","colSection":"#777777","colText":"#333333","colTextHover":"#ffffff","colTextDisable":"#cccccc","colSelectedBG":"#575757","colSelectedText":"#ffffff","widthEach":250,"heightEach":20,"textYOff":15,"font":"normal 11px arial","animationSpeed":0.195,"textAlign":"left","toolbarBG":"#cccccc","toolbarFG":"#ffffff"}')},92167:t=>{t.exports=JSON.parse('{"colBG":"#ffffff","colSection":"#777777","colText":"#333333","colTextHover":"#ffffff","colTextDisable":"#cccccc","colSelectedBG":"#cccccc","colSelectedText":"#ffffff","widthEach":250,"heightEach":20,"textYOff":15,"font":"normal 11px arial","animationSpeed":0.195,"textAlign":"left","toolbarBG":"#cccccc","toolbarFG":"#ffffff"}')},10991:t=>{t.exports=JSON.parse('{"colBG":"#ffffff","colSection":"#777777","colText":"#333333","colTextHover":"#ffffff","colTextDisable":"#cccccc","colSelectedBG":"#29AB87","colSelectedText":"#ffffff","widthEach":250,"heightEach":22,"textYOff":15,"font":"normal 11px arial","animationSpeed":0.195,"textAlign":"left","toolbarBG":"#cccccc","toolbarFG":"#ffffff"}')},84549:t=>{t.exports=JSON.parse('{"colBG":"#ffffff","colSection":"#777777","colText":"#333333","colTextHover":"#ffffff","colTextDisable":"#cccccc","colSelectedBG":"#ffa500","colSelectedText":"#ffffff","widthEach":250,"heightEach":22,"textYOff":15,"font":"normal 11px arial","animationSpeed":0.195,"textAlign":"left","toolbarBG":"#cccccc","toolbarFG":"#ffffff"}')},46179:t=>{t.exports=JSON.parse('{"colBG":"#ffffff","colSection":"#777777","colText":"#333333","colTextHover":"#ffffff","colTextDisable":"#cccccc","colSelectedBG":"#9400D3","colSelectedText":"#ffffff","widthEach":300,"heightEach":22,"textYOff":15,"font":"normal 12px arial","animationSpeed":0.195,"textAlign":"left","toolbarBG":"#cccccc","toolbarFG":"#ffffff"}')},98935:t=>{t.exports=JSON.parse('{"colBG":"#ffffff","colSection":"#777777","colText":"#333333","colTextHover":"#ffffff","colTextDisable":"#cccccc","colSelectedBG":"#ff0000","colSelectedText":"#ffffff","widthEach":250,"heightEach":20,"textYOff":15,"font":"normal 11px arial","animationSpeed":0.195,"textAlign":"left","toolbarBG":"#cccccc","toolbarFG":"#ffffff"}')}}]);
//# sourceMappingURL=7829.e7481cf7.chunk.js.map