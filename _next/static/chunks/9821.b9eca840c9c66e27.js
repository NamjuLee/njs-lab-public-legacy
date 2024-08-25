"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9821],{9821:function(t,e,s){var i,n,r,o,a,h,l,u;s.r(e),s.d(e,{Solution:function(){return w}}),(a=i||(i={})).LEFT="LEFT",a.MIDDLE="MIDDLE",a.RIGHT="RIGHT",a.WHEEL="WHEEL",a.DRAG="DRAG",a.DRAG_LEFT="DRAG_LEFT",a.DRAG_MIDDLE="DRAG_MIDDLE",a.DRAG_RIGHT="DRAG_RIGHT",a.MOVE="MOVE",a.DOUBLE="DOUBLE",a.UP="UP",a.DOWN="DOWN",a.DOWN_MIDDLE="DOWN_MIDDLE",a.DOWN_RIGHT="DOWN_RIGHT";class c{static mouseDown(t){}static MouseDown(t){c.click=!0,c.down=!0,c.mouseDown(t)}static mouseClick(t){}static MouseClick(t){c.click&&c.mouseClick(t)}static mouseDoubleClick(t){}static MouseDoubleClick(t){c.mouseDoubleClick(t)}static mouseDrag(t){}static MouseDrag(t){c.click=!0,c.mouseDrag(t)}static mouseMove(t){}static MouseMove(t){if(c.down){c.MouseDrag(t);return}c.mouseMove(t)}static mouseUp(t){}static MouseUp(t){c.down=!1,c.mouseUp(t)}static Init(t){null==t?(document.onclick=t=>{c.timer=setTimeout(()=>{c.prevent||c.MouseClick(t),c.prevent=!1},c.delay)},document.ondblclick=t=>{clearTimeout(c.timer),c.prevent=!0,c.MouseDoubleClick(t)},document.onmousedown=t=>{c.MouseDown(t)},document.onmouseup=t=>{c.MouseUp(t)},document.onmousemove=t=>{c.MouseMove(t)}):(t.onclick=t=>{c.timer=setTimeout(()=>{c.prevent||c.MouseClick(t),c.prevent=!1},c.delay)},t.ondblclick=t=>{clearTimeout(c.timer),c.prevent=!0,c.MouseDoubleClick(t)},t.onmousedown=t=>{c.MouseDown(t)},t.onmouseup=t=>{c.MouseUp(t)},t.onmousemove=t=>{c.MouseMove(t)})}}c.click=!1,c.prevent=!1,c.delay=200,c.down=!1,(h=n||(n={})).NATIVE="NATIVE",h.JSAPI4X="JSAPI4X",(l=r||(r={})).UP="UP",l.DOWN="DOWN";class y{static GetVecforGraphicApp(t,e,s,i,n,r){let o=new y(0,0,0);return o.long=t,o.lat=e,o.ele=s,o.proX=i,o.proY=n,o.proZ=r,o}static DeepCopy(t){return void 0===t.z?new y(t.x,t.y,0):new y(t.x,t.y,t.z)}static Dot(t,e){return t.x*e.x+t.y*e.y+t.z*e.z}static ScalarRev_V_S_OUT(t,e,s){return s.x=e*t.x,s.y=e*t.y,s.z=e*t.z,s}static Sub(t,e){return new y(e.x-t.x,e.y-t.y,e.z-t.z)}static Clone(t){return y.DeepCopy(t)}static zAxis(){return new y(0,0,1)}static zero(){return new y(0,0,0)}static Origin(){return new y(0,0,0)}static Plus(t,e){return new y(t.x+e.x,t.y+e.y,t.z+e.z)}static Scale(t,e){return new y(t.x*e,t.y*e,t.z*e)}static MidVec(t,e){return new y((t.x+e.x)*.5,(t.y+e.y)*.5,(t.z+e.z)*.5)}static CompareTwoVectors(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}static Length(t){return Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)}static Normalize(t){let e=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);return new y(t.x/e,t.y/e,t.z/e)}static GetArea(t){let e=0;for(let s=0;s<t.length-1;s++)e+=(t[s].x-t[s+1].x)*(t[s].y+t[s+1].y);return .5*e}static GetAreaByLongLat(t){let e=0;for(let s=0;s<t.length-1;s++)e+=(t[s].long-t[s+1].long)*(t[s].lat+t[s+1].lat);return .5*e}static GetGeoArea(t){let e=0;for(let s=0;s<t.length-1;s++)e+=(t[s].x-t[s+1].x)*(t[s].y+t[s+1].y);return Math.abs(e*=.5)}static Distance(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)+(t.z-e.z)*(t.z-e.z))}static Distance2(t,e){return(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)+(t.z-e.z)*(t.z-e.z)}static DotProduct(t,e){return t.x*e.x+t.y*e.y+t.z*e.z}static CrossProduct(t,e){return new y(t.y*e.z-t.z*e.y,t.z*e.x-t.x*e.z,t.x*e.y-t.y*e.x)}static DivideByNum(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,i=[],n=(e.x-t.x)/s,r=(e.y-t.y)/s,o=(e.z-t.z)/s;for(let e=0;e<s;++e){let s=t.x+n*e,a=t.y+r*e,h=t.z+o*e;i.push(new y(s,a,h))}return i}static KMeterFromGeoGPSPos(t,e){let s=e.lat*Math.PI/180-t.lat*Math.PI/180,i=e.long*Math.PI/180-t.long*Math.PI/180,n=Math.sin(s/2)*Math.sin(s/2)+Math.cos(t.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2);return 2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n))*6378.137}static KMeterFromGPSPos(t,e){let s=e.y*Math.PI/180-t.y*Math.PI/180,i=e.x*Math.PI/180-t.x*Math.PI/180,n=Math.sin(s/2)*Math.sin(s/2)+Math.cos(t.y*Math.PI/180)*Math.cos(e.y*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2);return 2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n))*6378.137}static Get1KM_Long_ByGeoUnit(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=new y(t,e,0),i=0;for(let t=0;t<1e4;++t){let t=y.KMeterFromGPSPos(s,new y(s.x+i,s.y,s.z));if(1<t&&t<1.001)return s.x+i;i+=1e-5}return -1}static Get1KM_lat_ByGeoUnit(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=new y(t,e,0),i=0;for(let t=0;t<1e4;++t){let t=y.KMeterFromGPSPos(s,new y(s.x,s.y+i,s.z));if(1<t&&t<1.001)return s.y+i;i+=1e-5}return -1}static Get1KM_Lat_Long_GeoUnit(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=y.Get1KM_Long_ByGeoUnit(t,e),i=y.Get1KM_lat_ByGeoUnit(t,e);return new y(s,i,0)}static CalculateFalloff(t,e,s,i){let n=e.Sub(t).Length();return s*Math.exp(-i*n*n)*n}static Attractor(t,e,s,i){let n=e.Sub(t);n.Unitize();let r=n.Length();return n.Mult(s*Math.exp(-i*r*r))}static Explosion(t,e,s,i){let n=e.Sub(t);n.Unitize();let r=n.Length();return n.Mult(-(s*Math.exp(-i*r*r)))}static Rotor(t,e,s,i){return e.Sub(t).Unitize(),y.Origin()}static GetCosAngleByTwoVectors(t,e){return y.DotProduct(y.Normalize(t),y.Normalize(e))}static GetAngleByTwoVectorsRadian(t,e){return Math.acos(y.GetCosAngleByTwoVectors(t,e))}static GetAngleByTwoVectors(t,e){return 180*y.GetAngleByTwoVectorsRadian(t,e)/Math.PI}static GetRotationByWorldCoodinate(t){let e=new y(1,0,0);return y.GetAngleByTwoVectors(e,t)}static GetRotationByWorldCoodinateByTwo(t,e){let s=e.Sub(t),i=new y(1,0,0);return s.y>0?-1*y.GetAngleByTwoVectors(i,s):y.GetAngleByTwoVectors(i,s)}static DistanceMouseWithTwoVecs(t,e,s){e.x+=1e-5,e.y+=1e-5;let i=y.GetBoundingVecs(e,s),n=y.GetCloseVec(e,s,t.x,t.y,i,!0);return y.Distance(t,n)}static GetCloseVec(t,e,s,i,n){let r=!(arguments.length>5)||void 0===arguments[5]||arguments[5],o=new y(t.x,t.y,t.z),a=new y(e.x,e.y,e.z).Sub(o),h=new y(s,i,0).Sub(o);a.Unitize();let l=o.Add(a.Mult(h.DotProduct(a)));return r?y.IsInsideOfVecs(l,n)?l:t.Distance(l)<e.Distance(l)?new y(t.x,t.y,t.z):new y(e.x,e.y,e.z):l}static GetBoundingVecs(t,e){let s=[],i=0,n=0,r=new y(i=t.x<e.x?t.x:e.x,t.y<e.y?t.y:e.y,t.z<e.z?t.z:e.z),o=new y(i=t.x>e.x?t.x:e.x,t.y>e.y?t.y:e.y,t.z>e.z?t.z:e.z);return s.push(new y(r.x,r.y,r.z)),s.push(new y(o.x,r.y,r.z)),s.push(new y(o.x,o.y,r.z)),s.push(new y(r.x,o.y,r.z)),s}static GetBoundaryByVecWidthHeight(t,e,s){let i=[];return i.push(new y(t.x,t.y,t.z)),i.push(new y(t.x+e,t.y,t.z)),i.push(new y(t.x+e,t.y+s,t.z)),i.push(new y(t.x,t.y+s,t.z)),i}static GetBoundingByVecs(t){let e=[],s=Number.MAX_SAFE_INTEGER,i=Number.MAX_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,o=Number.MIN_SAFE_INTEGER,a=Number.MIN_SAFE_INTEGER;for(let e=0;e<t.length;++e)s>t[e].x&&(s=t[e].x),i>t[e].y&&(i=t[e].y),n>t[e].z&&(n=t[e].z),r<t[e].x&&(r=t[e].x),o<t[e].y&&(o=t[e].y),a<t[e].z&&(a=t[e].z);return e.push(new y(s,i,n)),e.push(new y(r,o,a)),e}static GetMinMaxVecFromVecs(t){let e=Number.MAX_VALUE,s=Number.MAX_VALUE,i=Number.MAX_VALUE,n=Number.MIN_VALUE,r=Number.MIN_VALUE,o=Number.MIN_VALUE;for(let a of t)e>a.x&&(e=a.x),s>a.y&&(s=a.y),i>a.z&&(i=a.z),n<a.x&&(n=a.x),r<a.y&&(r=a.y),o<a.z&&(o=a.z);return[new y(e,s,i),new y(n,r,o)]}static RemoveVecsWithinDis(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,s=[];for(let s=0;s<t.length-1;++s){let i=t[s];if(!1!==i.d)for(let n=s+1;n<t.length;++n)y.Distance(i,t[n])<e&&(t[n].d=!1)}for(let e=0;e<t.length;++e)!0===t[e].d&&s.push(t[e]);return s}static IsInsideOfVecsWtihVecs(t,e){t.length;for(let s=0;s<t.length;s++)if(!y.IsInsideOfVecs(t[s],e))return!1;return!0}static IsInsideOfVecs(t,e){let s=t.x,i=t.y,n=!1;for(let t=0,r=e.length-1;t<e.length;r=t++){let o=e[t].x,a=e[t].y,h=e[r].x,l=e[r].y;a>i!=l>i&&s<(h-o)*(i-a)/(l-a)+o&&(n=!n)}return n}static IsInsideOfVecsByConcaveHull(t,e){}static IsInsideOfVecsByConvexHull(t,e){return e=y.ConvexHull(e),!!y.IsInsideOfVecs(t,e)}static ConvexHull(t){t.sort(function(t,e){return t.x===e.x?t.y-e.y:t.x-e.x});let e=[];for(let s=0;s<t.length;s++){for(;e.length>=2&&0>=y.Cross(e[e.length-2],e[e.length-1],t[s]);)e.pop();e.push(t[s])}let s=[];for(let e=t.length-1;e>=0;e--){for(;s.length>=2&&0>=y.Cross(s[s.length-2],s[s.length-1],t[e]);)s.pop();s.push(t[e])}s.pop(),e.pop();for(let t=0;t<s.length;++t)e.push(s[t]);return e}static Cross(t,e,s){return(e.x-t.x)*(s.y-t.y)-(e.y-t.y)*(s.x-t.x)}static Cross_A_B_OUT(t,e,s){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return s.x=n*h-r*a,s.y=r*o-i*h,s.z=i*a-n*o,s}static CheckLineIntersection(t,e,s,i){let n=0,r=0,o=0,a=0,h=0,l=!1,u=!1;n=(i.y-s.y)*(e.x-t.x)-(i.x-s.x)*(e.y-t.y);let c=new y(0,0,0);return 0===n?void 0:(r=t.y-s.y,o=t.x-s.x,a=(i.x-s.x)*r-(i.y-s.y)*o,h=(e.x-t.x)*r-(e.y-t.y)*o,r=a/n,o=h/n,c.x=t.x+r*(e.x-t.x),c.y=t.y+r*(e.y-t.y),r>0&&r<1&&(l=!0),o>0&&o<1&&(u=!0),l&&u)?c:void 0}static CheckConvexity(t){let e,s,i;if(t.length<3)return!1;let n=0;for(let r=0;r<t.length;r++){e=t[r];let o=t[(r+1)%t.length];if(s=new y(o.x-e.x,o.y-e.y,0),i=t[(r+2)%t.length],0===r)n=i.x*s.y-i.y*s.x+s.x*e.y-s.y*e.x;else{let t=i.x*s.y-i.y*s.x+s.x*e.y-s.y*e.x;if(t>0&&n<0||t<0&&n>0)return!1}}return!0}static MoveVecs(t,e){let s=[];for(let i=0;i<t.length;++i)s.push(y.MoveVec(t[i],e));return s}static MoveVec(t,e){return new y(t.x+e.x,t.y+e.y,t.z+e.z)}static RotateVecsLoal(t,e){let s=y.GetCenterVecFromVecs(t),i=new y(-s.x,-s.y,-s.z),n=y.MoveVecs(t,i);return n=y.RotateVecs(n,e),n=y.MoveVecs(n,s)}static RotateVecs(t,e){let s=[];for(let i=0;i<t.length;++i)s.push(y.RotateVec(t[i],e));return s}static RotateVec(t,e){let s=Math.cos(.017453292519943278*e),i=Math.sin(.017453292519943278*e);return new y(t.x*s-t.y*i,t.x*i+t.y*s,t.z)}static GetCenterVecFromVecs(t){let e=new y(0,0,0);for(let s=0,i=t.length;s<i;++s)e.Add(t[s]);return e.Mult(1/t.length),e}static MidVecGeo(t,e){return new y(t.x+.5*e.x,t.y+.5*e.y,0)}static GetVecFromIntersection(t){let e=[];for(let s=0;s<t.length-1;++s)for(let i=s+1;i<t.length-1;++i){let n=y.CheckLineIntersection(t[s],t[s+1],t[i],t[i+1]);n&&e.push(n)}if(0!==e.length)return e}static between(t,e,s){return t-y.eps<=e&&e<=s+y.eps}static segment_intersection(t,e,s,i){var n=((t.x*e.y-t.y*e.x)*(s.x-i.x)-(t.x-e.x)*(s.x*i.y-s.y*i.x))/((t.x-e.x)*(s.y-i.y)-(t.y-e.y)*(s.x-i.x)),r=((t.x*e.y-t.y*e.x)*(s.y-i.y)-(t.y-e.y)*(s.x*i.y-s.y*i.x))/((t.x-e.x)*(s.y-i.y)-(t.y-e.y)*(s.x-i.x));if(isNaN(n)||isNaN(r))return!1;if(t.x>=e.x){if(!y.between(e.x,n,t.x))return!1}else if(!y.between(t.x,n,e.x))return!1;if(t.y>=e.y){if(!y.between(e.y,r,t.y))return!1}else if(!y.between(t.y,r,e.y))return!1;if(s.x>=i.x){if(!y.between(i.x,n,s.x))return!1}else if(!y.between(s.x,n,i.x))return!1;if(s.y>=i.y){if(!y.between(i.y,r,s.y))return!1}else if(!y.between(s.y,r,i.y))return!1;return new y(n,r)}Set(t,e,s){return this.x=t,this.y=e,this.z=s,new y(this.x,this.y,this.z)}Scale(t){return this.x*=t,this.y*=t,this.z*=t,new y(this.x,this.y,this.z)}Mult(t){return this.x*=t,this.y*=t,this.z*=t,new y(this.x,this.y,this.z)}Div(t){return this.x/=t,this.y/=t,this.z/=t,new y(this.x,this.y,this.z)}Add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,new y(this.x,this.y,this.z)}Sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,new y(this.x,this.y,this.z)}Negate(){return this.x*=-1,this.y*=-1,this.z*=-1,new y(this.x,this.y,this.z)}Equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}Clone(){return new y(this.x,this.y,this.z)}Length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}Unitize(){return this.Normalize()}Normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);return this.x=this.x/t,this.y=this.y/t,this.z=this.z/t,new y(this.x,this.y,this.z)}Distance(t){return y.Distance(new y(this.x,this.y,this.z),t)}Distance2(t){return y.Distance2(new y(this.x,this.y,this.z),t)}DotProduct(t){return y.DotProduct(new y(this.x,this.y,this.z),t)}CrossProduct(t){return y.CrossProduct(new y(this.x,this.y,this.z),t)}SquareLength(){let t=y.Length(new y(this.x,this.y,this.z));return t*t}FadeExp(t,e){let s=new y(this.x,this.y,this.z);return s.Sub(t),Math.exp(-e*s.SquareLength())}GetAngle(){return Math.atan2(this.y,this.x)}GetAngleDegree(){return 180*this.GetAngle()/Math.PI}ToJSON(){}ToString(){return"x: "+this.x.toFixed(3).toString()+" , y: "+this.y.toFixed(3).toString()+", z: "+this.z.toFixed(3).toString()}ToFloat32Array(){return new Float32Array([this.x,this.y,this.z])}constructor(t,e,s=0){this.x=0,this.y=0,this.z=0,this.w=0,this.long=0,this.lat=0,this.ele=0,this.proX=0,this.proY=0,this.proZ=0,this.alt=0,this.d=!0,this.isModified=!1,this.x=t,this.y=e,this.z=s}}y.eps=1e-7,y.origin=new y(0,0,0),(u=o||(o={})).DRAWING="DRAWING",u.CONTROL_PANEL="CONTROL_PANEL";class x{static Add(t){x.list.push(t)}static Remove(t){x.list.splice(x.list.indexOf(t),1)}static RemoveAllCapturedBlock(){if(void 0!==x.capture){if(x.capture.type===o.CONTROL_PANEL){x.capture.RemovePanel();return}x.capture.Remove()}}static CheckOvered(t){let e=x.list.length;for(;e--;)x.list[e].IsMouseInside(t.x,t.y)?x.list[e].IsHover=!0:x.list[e].IsHover=!1}static FindAtPoint(t){let e=x.list.length;for(;e--;)if(!x.list[e].isHidden&&x.list[e].IsMouseInside(t.x,t.y))return x.list[e]}static MouseDown(t){if(x.isHidden)return;let e=x.FindAtPoint(t);void 0!==e?(e.MouseDown(t),x.capture=e):x.capture=void 0}static MouseLeft(t){if(x.isHidden)return;let e=x.FindAtPoint(t);void 0!==e?(e.MouseLeft(t),x.capture=e):x.capture=void 0}static MouseRight(t){if(x.isHidden)return;let e=x.FindAtPoint(t);void 0!==e?(e.MouseRight(t),x.capture=e):x.capture=void 0}static MouseDrag(t){x.isHidden||void 0===x.capture||x.capture.MouseDrag(t)}static MouseDouble(t){if(x.isHidden)return;let e=x.FindAtPoint(t);void 0!==e&&e.MouseDouble(t)}static MouseMove(t){x.m.x=t.x,x.m.y=t.y,x.isHidden||(x.CheckOvered(t),x.FindAtPoint(t))}static MouseUp(t){x.isHidden||void 0===x.capture||x.capture.MouseUp(t)}static CopyBlock(){}static PasteBlock(){x.capture}Render(t){if(!x.isHidden)for(let e=0;e<x.list.length;++e)x.list[e].Render(t)}constructor(t){this.cBCanvas=t}}x.list=[],x.isHidden=!1,x.capture=void 0,x.m=new y(-1,-1);class M{MouseEventControl(t){if(t.CLICKTYPE===i.LEFT){this.MouseLeftClickPre(t);return}if(t.CLICKTYPE===i.MIDDLE){this.MouseMiddleClickPre(t);return}if(t.CLICKTYPE===i.RIGHT){this.MouseRightClickPre(t);return}if(t.CLICKTYPE===i.DOUBLE){this.MouseDoubleClickPre(t);return}if(t.CLICKTYPE===i.MOVE){this.MouseMovePre(t);return}if(t.CLICKTYPE===i.DRAG){this.MouseDragPre(t);return}if(t.CLICKTYPE===i.DOWN){this.MouseDownPre(t);return}else if(t.CLICKTYPE===i.UP){this.MouseUpPre(t);return}}KeyboardEventControl(t){t.PRESSTYPE===r.DOWN?(8===t.keyCode&&x.RemoveAllCapturedBlock(),this.keydownPre(t)):t.PRESSTYPE===r.UP&&this.keyUpPre(t)}MouseLeftClick(t){}MouseLeftClickPre(t){x.MouseLeft(t),this.MouseLeftClick(t)}MouseMiddleClick(t){}MouseMiddleClickPre(t){this.MouseMiddleClick(t)}MouseRightClick(t){}MouseRightClickPre(t){this.MouseRightClick(t)}MouseDoubleClick(t){}MouseDoubleClickPre(t){x.MouseDouble(t),this.MouseDoubleClick(t)}MouseMove(t){}MouseMovePre(t){x.MouseMove(t),this.MouseMove(t)}MouseDrag(t){}MouseDragPre(t){x.MouseDrag(t),this.MouseDrag(t)}MouseDown(t){}MouseDownPre(t){x.MouseDown(t),this.MouseDown(t)}MouseUp(t){}MouseUpPre(t){x.MouseUp(t),this.MouseUp(t)}keydown(t){}keydownPre(t){(t.hasCtrlKey||t.hasShiftKey)&&this.keydown(t)}keyUp(t){}keyUpPre(t){this.keyUp(t)}constructor(t){this.appDrawingBlock=t}}class d{Init(t){this.hostDiv=t,this.canvasDynamic=document.createElement("canvas"),this.canvasDynamic.id="CanvasBlock",this.canvasDynamic.style.zIndex="7",this.canvasDynamic.style.position="absolute",this.canvasDynamic.className="esri-display-object",this.ctxDynamic=this.canvasDynamic.getContext("2d"),this.hostDiv.appendChild(this.canvasDynamic),this.InitPost()}InitWithCustomContext(t){this.InitPost()}InitPost(){window.onresize=t=>{},this.cBlockRenderer=new x(this),this.Start(this.ctxDynamic),this.Draw(this)}Draw(t){this.Update(this.ctxDynamic),this.cBlockRenderer.Render(this.ctxDynamic),requestAnimationFrame(()=>{this.Draw(this)})}Start(t){}Update(t){t.globalAlpha=.8,t.fillStyle="red",t.fillStyle="blue",t.fillRect(500+this.t,500+this.t,750,500),t.fillStyle="green",t.fillRect(80,80,75+this.t,50),this.t+=.001}Destroy(){console.log("destroy"),x.list=[],this.canvasDynamic.parentNode&&this.canvasDynamic.parentNode.removeChild(this.canvasDynamic)}constructor(t){this.smoothingEnabled=!0,this.appDrawingBlock=t,this.t=0,this.xOff=0,this.yOff=0,this.xOffCurrent=0,this.yOffCurrent=0,this.xOffPre=0,this.yOffPre=0,this.anchor=new y(0,0,0),this.Init(this.appDrawingBlock.divHost)}}class w{static Init(t){w.app=new w(t)}Render(t){this.cBlockRenderer.Render(t)}MouseInteraction(t){this.activeCommandDrawingBlock.MouseEventControl(t)}KeyboardInteraction(t){this.activeCommandDrawingBlock.KeyboardEventControl(t)}Destroy(){}destroy(){this.canvasDB.Destroy();try{for(;this.divHost&&this.divHost.lastElementChild;){let t=this.divHost.lastElementChild;this.divHost.removeChild(t)}}catch(t){}}constructor(t){let e=document.getElementById(t);this.divHost=e,this.canvasDB=new d(this),this.activeCommandDrawingBlock=new M(this)}}}}]);