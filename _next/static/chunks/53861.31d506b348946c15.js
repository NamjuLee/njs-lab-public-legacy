"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53861],{31041:function(n,t,i){i.d(t,{dU:function(){return r}});class r{constructor(){this._partials=new Float64Array(32),this._n=0}add(n){let t=this._partials,i=0;for(let r=0;r<this._n&&r<32;r++){let o=t[r],u=n+o,e=Math.abs(n)<Math.abs(o)?n-(u-o):o-(u-n);e&&(t[i++]=e),n=u}return t[i]=n,this._n=i+1,this}valueOf(){let n=this._partials,t=this._n,i,r,o,u=0;if(t>0){for(u=n[--t];t>0&&(u=(i=u)+(r=n[--t]),!(o=r-(u-i))););t>0&&(o<0&&n[t-1]<0||o>0&&n[t-1]>0)&&(i=u+(r=2*o),r==i-u&&(u=i))}return u}}},17792:function(n,t,i){i.d(t,{Z:function(){return r}});function r(n,t){function i(i,r){return t((i=n(i,r))[0],i[1])}return n.invert&&t.invert&&(i.invert=function(i,r){return(i=t.invert(i,r))&&n.invert(i[0],i[1])}),i}},52302:function(n,t,i){function r(n,t,i){n=+n,t=+t,i=(o=arguments.length)<2?(t=n,n=0,1):o<3?1:+i;for(var r=-1,o=0|Math.max(0,Math.ceil((t-n)/i)),u=Array(o);++r<o;)u[r]=n+r*i;return u}i.d(t,{Z:function(){return f}});var o=i(22731);function u(n,t,i){var u=r(n,t-o.Ho,i).concat(t);return function(n){return u.map(function(t){return[n,t]})}}function e(n,t,i){var u=r(n,t-o.Ho,i).concat(t);return function(n){return u.map(function(t){return[t,n]})}}function f(){var n,t,i,f,c,l,a,p,s,h,v,d,g=10,m=10,_=90,E=360,S=2.5;function y(){return{type:"MultiLineString",coordinates:Z()}}function Z(){return r((0,o.mD)(f/_)*_,i,_).map(v).concat(r((0,o.mD)(p/E)*E,a,E).map(d)).concat(r((0,o.mD)(t/g)*g,n,g).filter(function(n){return(0,o.Wn)(n%_)>o.Ho}).map(s)).concat(r((0,o.mD)(l/m)*m,c,m).filter(function(n){return(0,o.Wn)(n%E)>o.Ho}).map(h))}return y.lines=function(){return Z().map(function(n){return{type:"LineString",coordinates:n}})},y.outline=function(){return{type:"Polygon",coordinates:[v(f).concat(d(a).slice(1),v(i).reverse().slice(1),d(p).reverse().slice(1))]}},y.extent=function(n){return arguments.length?y.extentMajor(n).extentMinor(n):y.extentMinor()},y.extentMajor=function(n){return arguments.length?(f=+n[0][0],i=+n[1][0],p=+n[0][1],a=+n[1][1],f>i&&(n=f,f=i,i=n),p>a&&(n=p,p=a,a=n),y.precision(S)):[[f,p],[i,a]]},y.extentMinor=function(i){return arguments.length?(t=+i[0][0],n=+i[1][0],l=+i[0][1],c=+i[1][1],t>n&&(i=t,t=n,n=i),l>c&&(i=l,l=c,c=i),y.precision(S)):[[t,l],[n,c]]},y.step=function(n){return arguments.length?y.stepMajor(n).stepMinor(n):y.stepMinor()},y.stepMajor=function(n){return arguments.length?(_=+n[0],E=+n[1],y):[_,E]},y.stepMinor=function(n){return arguments.length?(g=+n[0],m=+n[1],y):[g,m]},y.precision=function(r){return arguments.length?(S=+r,s=u(l,c,90),h=e(t,n,S),v=u(p,a,90),d=e(f,i,S),y):S},y.extentMajor([[-180,-90+o.Ho],[180,90-o.Ho]]).extentMinor([[-180,-80-o.Ho],[180,80+o.Ho]])}},33079:function(n,t){t.Z=n=>n},22731:function(n,t,i){i.d(t,{BZ:function(){return c},Ho:function(){return r},Kh:function(){return R},O$:function(){return E},OR:function(){return Z},Qq:function(){return g},RW:function(){return l},Wn:function(){return p},Xx:function(){return S},ZR:function(){return M},_b:function(){return y},aW:function(){return o},cM:function(){return m},fv:function(){return h},mC:function(){return v},mD:function(){return d},ou:function(){return e},pi:function(){return u},pu:function(){return f},sQ:function(){return _},uR:function(){return a},z4:function(){return s}});var r=1e-6,o=1e-12,u=Math.PI,e=u/2,f=u/4,c=2*u,l=180/u,a=u/180,p=Math.abs,s=Math.atan,h=Math.atan2,v=Math.cos,d=Math.ceil,g=Math.exp,m=Math.log,_=Math.pow,E=Math.sin,S=Math.sign||function(n){return n>0?1:n<0?-1:0},y=Math.sqrt,Z=Math.tan;function R(n){return n>1?0:n<-1?u:Math.acos(n)}function M(n){return n>1?e:n<-1?-e:Math.asin(n)}},33375:function(n,t,i){i.d(t,{Z:function(){return r}});function r(){}},56476:function(n,t,i){var r=i(33375),o=1/0,u=1/0,e=-1/0,f=e,c={point:function(n,t){n<o&&(o=n),n>e&&(e=n),t<u&&(u=t),t>f&&(f=t)},lineStart:r.Z,lineEnd:r.Z,polygonStart:r.Z,polygonEnd:r.Z,result:function(){var n=[[o,u],[e,f]];return e=f=-(u=o=1/0),n}};t.Z=c},90454:function(n,t,i){let r,o,u,e;i.d(t,{Z:function(){return nu}});var f,c,l,a,p=i(33079),s=i(18310),h=i(31041),v=i(22731),d=i(33375),g=new h.dU,m=new h.dU,_={point:d.Z,lineStart:d.Z,lineEnd:d.Z,polygonStart:function(){_.lineStart=E,_.lineEnd=Z},polygonEnd:function(){_.lineStart=_.lineEnd=_.point=d.Z,g.add((0,v.Wn)(m)),m=new h.dU},result:function(){var n=g/2;return g=new h.dU,n}};function E(){_.point=S}function S(n,t){_.point=y,f=l=n,c=a=t}function y(n,t){m.add(a*n-l*t),l=n,a=t}function Z(){y(f,c)}var R,M,W,x,$=i(56476),H=0,O=0,C=0,w=0,N=0,b=0,B=0,j=0,P=0,k={point:z,lineStart:U,lineEnd:F,polygonStart:function(){k.lineStart=L,k.lineEnd=q},polygonEnd:function(){k.point=z,k.lineStart=U,k.lineEnd=F},result:function(){var n=P?[B/P,j/P]:b?[w/b,N/b]:C?[H/C,O/C]:[NaN,NaN];return H=O=C=w=N=b=B=j=P=0,n}};function z(n,t){H+=n,O+=t,++C}function U(){k.point=X}function X(n,t){k.point=D,z(W=n,x=t)}function D(n,t){var i=n-W,r=t-x,o=(0,v._b)(i*i+r*r);w+=o*(W+n)/2,N+=o*(x+t)/2,b+=o,z(W=n,x=t)}function F(){k.point=z}function L(){k.point=A}function q(){I(R,M)}function A(n,t){k.point=I,z(R=W=n,M=x=t)}function I(n,t){var i=n-W,r=t-x,o=(0,v._b)(i*i+r*r);w+=o*(W+n)/2,N+=o*(x+t)/2,b+=o,B+=(o=x*n-W*t)*(W+n),j+=o*(x+t),P+=3*o,z(W=n,x=t)}function T(n){this._context=n}T.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,v.BZ)}},result:d.Z};var K,Q,V,G,Y,J=new h.dU,nn={point:d.Z,lineStart:function(){nn.point=nt},lineEnd:function(){K&&ni(Q,V),nn.point=d.Z},polygonStart:function(){K=!0},polygonEnd:function(){K=null},result:function(){var n=+J;return J=new h.dU,n}};function nt(n,t){nn.point=ni,Q=G=n,V=Y=t}function ni(n,t){G-=n,Y-=t,J.add((0,v._b)(G*G+Y*Y)),G=n,Y=t}class nr{constructor(n){this._append=null==n?no:function(n){let t=Math.floor(n);if(!(t>=0))throw RangeError(`invalid digits: ${n}`);if(t>15)return no;if(t!==r){let n=10**t;r=t,o=function(t){let i=1;this._+=t[0];for(let r=t.length;i<r;++i)this._+=Math.round(arguments[i]*n)/n+t[i]}}return o}(n),this._radius=4.5,this._=""}pointRadius(n){return this._radius=+n,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){0===this._line&&(this._+="Z"),this._point=NaN}point(n,t){switch(this._point){case 0:this._append`M${n},${t}`,this._point=1;break;case 1:this._append`L${n},${t}`;break;default:if(this._append`M${n},${t}`,this._radius!==u||this._append!==o){let n=this._radius,t=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,u=n,o=this._append,e=this._,this._=t}this._+=e}}result(){let n=this._;return this._="",n.length?n:null}}function no(n){let t=1;this._+=n[0];for(let i=n.length;t<i;++t)this._+=arguments[t]+n[t]}function nu(n,t){let i=3,r=4.5,o,u;function e(n){return n&&("function"==typeof r&&u.pointRadius(+r.apply(this,arguments)),(0,s.Z)(n,o(u))),u.result()}return e.area=function(n){return(0,s.Z)(n,o(_)),_.result()},e.measure=function(n){return(0,s.Z)(n,o(nn)),nn.result()},e.bounds=function(n){return(0,s.Z)(n,o($.Z)),$.Z.result()},e.centroid=function(n){return(0,s.Z)(n,o(k)),k.result()},e.projection=function(t){return arguments.length?(o=null==t?(n=null,p.Z):(n=t).stream,e):n},e.context=function(n){return arguments.length?(u=null==n?(t=null,new nr(i)):new T(t=n),"function"!=typeof r&&u.pointRadius(r),e):t},e.pointRadius=function(n){return arguments.length?(r="function"==typeof n?n:(u.pointRadius(+n),+n),e):r},e.digits=function(n){if(!arguments.length)return i;if(null==n)i=null;else{let t=Math.floor(n);if(!(t>=0))throw RangeError(`invalid digits: ${n}`);i=t}return null===t&&(u=new nr(i)),e},e.projection(n).digits(i).context(t)}},16954:function(n,t,i){i.d(t,{o:function(){return u}});var r=i(22731),o=i(47149);function u(n){var t=0,i=r.pi/3,u=(0,o.r)(n),e=u(t,i);return e.parallels=function(n){return arguments.length?u(t=n[0]*r.uR,i=n[1]*r.uR):[t*r.RW,i*r.RW]},e}},99096:function(n,t,i){i.d(t,{Z:function(){return e}});var r=i(22731),o=i(16954);function u(n,t){var i=(0,r.O$)(n),o=(i+(0,r.O$)(t))/2;if((0,r.Wn)(o)<r.Ho)return function(n){var t=(0,r.mC)(n);function i(n,i){return[n*t,(0,r.O$)(i)/t]}return i.invert=function(n,i){return[n/t,(0,r.ZR)(i*t)]},i}(n);var u=1+i*(2*o-i),e=(0,r._b)(u)/o;function f(n,t){var i=(0,r._b)(u-2*o*(0,r.O$)(t))/o;return[i*(0,r.O$)(n*=o),e-i*(0,r.mC)(n)]}return f.invert=function(n,t){var i=e-t,f=(0,r.fv)(n,(0,r.Wn)(i))*(0,r.Xx)(i);return i*o<0&&(f-=r.pi*(0,r.Xx)(n)*(0,r.Xx)(i)),[f/o,(0,r.ZR)((u-(n*n+i*i)*o*o)/(2*o))]},f}function e(){return(0,o.o)(u).scale(155.424).center([0,33.6442])}},46243:function(n,t,i){i.d(t,{V6:function(){return c},mF:function(){return f},qg:function(){return e},rf:function(){return l}});var r=i(18310),o=i(56476);function u(n,t,i){var u=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=u&&n.clipExtent(null),(0,r.Z)(i,n.stream(o.Z)),t(o.Z.result()),null!=u&&n.clipExtent(u),n}function e(n,t,i){return u(n,function(i){var r=t[1][0]-t[0][0],o=t[1][1]-t[0][1],u=Math.min(r/(i[1][0]-i[0][0]),o/(i[1][1]-i[0][1])),e=+t[0][0]+(r-u*(i[1][0]+i[0][0]))/2,f=+t[0][1]+(o-u*(i[1][1]+i[0][1]))/2;n.scale(150*u).translate([e,f])},i)}function f(n,t,i){return e(n,[[0,0],t],i)}function c(n,t,i){return u(n,function(i){var r=+t,o=r/(i[1][0]-i[0][0]),u=(r-o*(i[1][0]+i[0][0]))/2,e=-o*i[0][1];n.scale(150*o).translate([u,e])},i)}function l(n,t,i){return u(n,function(i){var r=+t,o=r/(i[1][1]-i[0][1]),u=-o*i[0][0],e=(r-o*(i[1][1]+i[0][1]))/2;n.scale(150*o).translate([u,e])},i)}},47149:function(n,t,i){i.d(t,{Z:function(){return j},r:function(){return P}});var r=i(33375);function o(){var n,t=[];return{point:function(t,i,r){n.push([t,i,r])},lineStart:function(){t.push(n=[])},lineEnd:r.Z,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var i=t;return t=[],n=null,i}}}var u=i(22731);function e(n,t){return(0,u.Wn)(n[0]-t[0])<u.Ho&&(0,u.Wn)(n[1]-t[1])<u.Ho}function f(n,t,i,r){this.x=n,this.z=t,this.o=i,this.e=r,this.v=!1,this.n=this.p=null}function c(n,t,i,r,o){var c,a,p=[],s=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,i,r=n[0],l=n[t];if(e(r,l)){if(!r[2]&&!l[2]){for(o.lineStart(),c=0;c<t;++c)o.point((r=n[c])[0],r[1]);o.lineEnd();return}l[0]+=2*u.Ho}p.push(i=new f(r,n,null,!0)),s.push(i.o=new f(r,null,i,!1)),p.push(i=new f(l,n,null,!1)),s.push(i.o=new f(l,null,i,!0))}}),p.length){for(s.sort(t),l(p),l(s),c=0,a=s.length;c<a;++c)s[c].e=i=!i;for(var h,v,d=p[0];;){for(var g=d,m=!0;g.v;)if((g=g.n)===d)return;h=g.z,o.lineStart();do{if(g.v=g.o.v=!0,g.e){if(m)for(c=0,a=h.length;c<a;++c)o.point((v=h[c])[0],v[1]);else r(g.x,g.n.x,1,o);g=g.n}else{if(m)for(c=(h=g.p.z).length-1;c>=0;--c)o.point((v=h[c])[0],v[1]);else r(g.x,g.p.x,-1,o);g=g.p}h=(g=g.o).z,m=!m}while(!g.v);o.lineEnd()}}}function l(n){if(t=n.length){for(var t,i,r=0,o=n[0];++r<t;)o.n=i=n[r],i.p=o,o=i;o.n=i=n[0],i.p=o}}var a=i(31041);function p(n){return[(0,u.fv)(n[1],n[0]),(0,u.ZR)(n[2])]}function s(n){var t=n[0],i=n[1],r=(0,u.mC)(i);return[r*(0,u.mC)(t),r*(0,u.O$)(t),(0,u.O$)(i)]}function h(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function v(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function d(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function g(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function m(n){var t=(0,u._b)(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _(n){return(0,u.Wn)(n[0])<=u.pi?n[0]:(0,u.Xx)(n[0])*(((0,u.Wn)(n[0])+u.pi)%u.BZ-u.pi)}function E(n){return Array.from(function*(n){for(let t of n)yield*t}(n))}function S(n,t,i,r){return function(e){var f,l,p,h=t(e),d=o(),g=t(d),S=!1,R={point:M,lineStart:x,lineEnd:$,polygonStart:function(){R.point=H,R.lineStart=O,R.lineEnd=C,l=[],f=[]},polygonEnd:function(){R.point=M,R.lineStart=x,R.lineEnd=$,l=E(l);var n=function(n,t){var i=_(t),r=t[1],o=(0,u.O$)(r),e=[(0,u.O$)(i),-(0,u.mC)(i),0],f=0,c=0,l=new a.dU;1===o?r=u.ou+u.Ho:-1===o&&(r=-u.ou-u.Ho);for(var p=0,h=n.length;p<h;++p)if(g=(d=n[p]).length)for(var d,g,E=d[g-1],S=_(E),y=E[1]/2+u.pu,Z=(0,u.O$)(y),R=(0,u.mC)(y),M=0;M<g;++M,S=x,Z=H,R=O,E=W){var W=d[M],x=_(W),$=W[1]/2+u.pu,H=(0,u.O$)($),O=(0,u.mC)($),C=x-S,w=C>=0?1:-1,N=w*C,b=N>u.pi,B=Z*H;if(l.add((0,u.fv)(B*w*(0,u.O$)(N),R*O+B*(0,u.mC)(N))),f+=b?C+w*u.BZ:C,b^S>=i^x>=i){var j=v(s(E),s(W));m(j);var P=v(e,j);m(P);var k=(b^C>=0?-1:1)*(0,u.ZR)(P[2]);(r>k||r===k&&(j[0]||j[1]))&&(c+=b^C>=0?1:-1)}}return(f<-u.Ho||f<u.Ho&&l<-u.aW)^1&c}(f,r);l.length?(S||(e.polygonStart(),S=!0),c(l,Z,n,i,e)):n&&(S||(e.polygonStart(),S=!0),e.lineStart(),i(null,null,1,e),e.lineEnd()),S&&(e.polygonEnd(),S=!1),l=f=null},sphere:function(){e.polygonStart(),e.lineStart(),i(null,null,1,e),e.lineEnd(),e.polygonEnd()}};function M(t,i){n(t,i)&&e.point(t,i)}function W(n,t){h.point(n,t)}function x(){R.point=W,h.lineStart()}function $(){R.point=M,h.lineEnd()}function H(n,t){p.push([n,t]),g.point(n,t)}function O(){g.lineStart(),p=[]}function C(){H(p[0][0],p[0][1]),g.lineEnd();var n,t,i,r,o=g.clean(),u=d.result(),c=u.length;if(p.pop(),f.push(p),p=null,c){if(1&o){if((t=(i=u[0]).length-1)>0){for(S||(e.polygonStart(),S=!0),e.lineStart(),n=0;n<t;++n)e.point((r=i[n])[0],r[1]);e.lineEnd()}return}c>1&&2&o&&u.push(u.pop().concat(u.shift())),l.push(u.filter(y))}}return R}}function y(n){return n.length>1}function Z(n,t){return((n=n.x)[0]<0?n[1]-u.ou-u.Ho:u.ou-n[1])-((t=t.x)[0]<0?t[1]-u.ou-u.Ho:u.ou-t[1])}var R=S(function(){return!0},function(n){var t,i=NaN,r=NaN,o=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(e,f){var c,l,a,p,s,h,v=e>0?u.pi:-u.pi,d=(0,u.Wn)(e-i);(0,u.Wn)(d-u.pi)<u.Ho?(n.point(i,r=(r+f)/2>0?u.ou:-u.ou),n.point(o,r),n.lineEnd(),n.lineStart(),n.point(v,r),n.point(e,r),t=0):o!==v&&d>=u.pi&&((0,u.Wn)(i-o)<u.Ho&&(i-=o*u.Ho),(0,u.Wn)(e-v)<u.Ho&&(e-=v*u.Ho),c=i,l=r,a=e,h=(0,u.O$)(c-a),r=(0,u.Wn)(h)>u.Ho?(0,u.z4)(((0,u.O$)(l)*(s=(0,u.mC)(f))*(0,u.O$)(a)-(0,u.O$)(f)*(p=(0,u.mC)(l))*(0,u.O$)(c))/(p*s*h)):(l+f)/2,n.point(o,r),n.lineEnd(),n.lineStart(),n.point(v,r),t=0),n.point(i=e,r=f),o=v},lineEnd:function(){n.lineEnd(),i=r=NaN},clean:function(){return 2-t}}},function(n,t,i,r){var o;if(null==n)o=i*u.ou,r.point(-u.pi,o),r.point(0,o),r.point(u.pi,o),r.point(u.pi,0),r.point(u.pi,-o),r.point(0,-o),r.point(-u.pi,-o),r.point(-u.pi,0),r.point(-u.pi,o);else if((0,u.Wn)(n[0]-t[0])>u.Ho){var e=n[0]<t[0]?u.pi:-u.pi;o=i*e/2,r.point(-e,o),r.point(0,o),r.point(e,o)}else r.point(t[0],t[1])},[-u.pi,-u.ou]);function M(n,t){t=s(t),t[0]-=n,m(t);var i=(0,u.Kh)(-t[1]);return((0>-t[2]?-i:i)+u.BZ-u.Ho)%u.BZ}var W=i(17792),x=i(33079),$=i(77779);function H(n){return function(t){var i=new O;for(var r in n)i[r]=n[r];return i.stream=t,i}}function O(){}O.prototype={constructor:O,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var C=i(46243),w=(0,u.mC)(30*u.uR);function N(n,t){return+t?function(n,t){function i(r,o,e,f,c,l,a,p,s,h,v,d,g,m){var _=a-r,E=p-o,S=_*_+E*E;if(S>4*t&&g--){var y=f+h,Z=c+v,R=l+d,M=(0,u._b)(y*y+Z*Z+R*R),W=(0,u.ZR)(R/=M),x=(0,u.Wn)((0,u.Wn)(R)-1)<u.Ho||(0,u.Wn)(e-s)<u.Ho?(e+s)/2:(0,u.fv)(Z,y),$=n(x,W),H=$[0],O=$[1],C=H-r,N=O-o,b=E*C-_*N;(b*b/S>t||(0,u.Wn)((_*C+E*N)/S-.5)>.3||f*h+c*v+l*d<w)&&(i(r,o,e,f,c,l,H,O,x,y/=M,Z/=M,R,g,m),m.point(H,O),i(H,O,x,y,Z,R,a,p,s,h,v,d,g,m))}}return function(t){var r,o,u,e,f,c,l,a,p,h,v,d,g={point:m,lineStart:_,lineEnd:S,polygonStart:function(){t.polygonStart(),g.lineStart=y},polygonEnd:function(){t.polygonEnd(),g.lineStart=_}};function m(i,r){i=n(i,r),t.point(i[0],i[1])}function _(){a=NaN,g.point=E,t.lineStart()}function E(r,o){var u=s([r,o]),e=n(r,o);i(a,p,l,h,v,d,a=e[0],p=e[1],l=r,h=u[0],v=u[1],d=u[2],16,t),t.point(a,p)}function S(){g.point=m,t.lineEnd()}function y(){_(),g.point=Z,g.lineEnd=R}function Z(n,t){E(r=n,t),o=a,u=p,e=h,f=v,c=d,g.point=E}function R(){i(a,p,l,h,v,d,o,u,r,e,f,c,16,t),g.lineEnd=S,S()}return g}}(n,t):H({point:function(t,i){t=n(t,i),this.stream.point(t[0],t[1])}})}var b=H({point:function(n,t){this.stream.point(n*u.uR,t*u.uR)}});function B(n,t,i,r,o,e){if(!e)return function(n,t,i,r,o){function u(u,e){return[t+n*(u*=r),i-n*(e*=o)]}return u.invert=function(u,e){return[(u-t)/n*r,(i-e)/n*o]},u}(n,t,i,r,o);var f=(0,u.mC)(e),c=(0,u.O$)(e),l=f*n,a=c*n,p=f/n,s=c/n,h=(c*i-f*t)/n,v=(c*t+f*i)/n;function d(n,u){return[l*(n*=r)-a*(u*=o)+t,i-a*n-l*u]}return d.invert=function(n,t){return[r*(p*n-s*t+h),o*(v-s*n-p*t)]},d}function j(n){return P(function(){return n})()}function P(n){var t,i,r,f,l,a,m,_,y,Z,O=150,w=480,j=250,P=0,k=0,z=0,U=0,X=0,D=0,F=1,L=1,q=null,A=R,I=null,T=x.Z,K=.5;function Q(n){return _(n[0]*u.uR,n[1]*u.uR)}function V(n){return(n=_.invert(n[0],n[1]))&&[n[0]*u.RW,n[1]*u.RW]}function G(){var n=B(O,0,0,F,L,D).apply(null,t(P,k)),r=B(O,w-n[0],j-n[1],F,L,D);return i=(0,$.I)(z,U,X),m=(0,W.Z)(t,r),_=(0,W.Z)(i,m),a=N(m,K),Y()}function Y(){return y=Z=null,Q}return Q.stream=function(n){var t;return y&&Z===n?y:y=b((t=i,H({point:function(n,i){var r=t(n,i);return this.stream.point(r[0],r[1])}}))(A(a(T(Z=n)))))},Q.preclip=function(n){return arguments.length?(A=n,q=void 0,Y()):A},Q.postclip=function(n){return arguments.length?(T=n,I=r=f=l=null,Y()):T},Q.clipAngle=function(n){return arguments.length?(A=+n?function(n){var t=(0,u.mC)(n),i=2*u.uR,r=t>0,o=(0,u.Wn)(t)>u.Ho;function f(n,i){return(0,u.mC)(n)*(0,u.mC)(i)>t}function c(n,i,r){var o=s(n),e=s(i),f=[1,0,0],c=v(o,e),l=h(c,c),a=c[0],m=l-a*a;if(!m)return!r&&n;var _=v(f,c),E=g(f,t*l/m);d(E,g(c,-t*a/m));var S=h(E,_),y=h(_,_),Z=S*S-y*(h(E,E)-1);if(!(Z<0)){var R=(0,u._b)(Z),M=g(_,(-S-R)/y);if(d(M,E),M=p(M),!r)return M;var W,x=n[0],$=i[0],H=n[1],O=i[1];$<x&&(W=x,x=$,$=W);var C=$-x,w=(0,u.Wn)(C-u.pi)<u.Ho,N=w||C<u.Ho;if(!w&&O<H&&(W=H,H=O,O=W),N?w?H+O>0^M[1]<((0,u.Wn)(M[0]-x)<u.Ho?H:O):H<=M[1]&&M[1]<=O:C>u.pi^(x<=M[0]&&M[0]<=$)){var b=g(_,(-S+R)/y);return d(b,E),[M,p(b)]}}}function l(t,i){var o=r?n:u.pi-n,e=0;return t<-o?e|=1:t>o&&(e|=2),i<-o?e|=4:i>o&&(e|=8),e}return S(f,function(n){var t,i,a,p,s;return{lineStart:function(){p=a=!1,s=1},point:function(h,v){var d,g,m=[h,v],_=f(h,v),E=r?_?0:l(h,v):_?l(h+(h<0?u.pi:-u.pi),v):0;!t&&(p=a=_)&&n.lineStart(),_!==a&&(!(g=c(t,m))||e(t,g)||e(m,g))&&(m[2]=1),_!==a?(s=0,_?(n.lineStart(),g=c(m,t),n.point(g[0],g[1])):(g=c(t,m),n.point(g[0],g[1],2),n.lineEnd()),t=g):o&&t&&r^_&&!(E&i)&&(d=c(m,t,!0))&&(s=0,r?(n.lineStart(),n.point(d[0][0],d[0][1]),n.point(d[1][0],d[1][1]),n.lineEnd()):(n.point(d[1][0],d[1][1]),n.lineEnd(),n.lineStart(),n.point(d[0][0],d[0][1],3))),!_||t&&e(t,m)||n.point(m[0],m[1]),t=m,a=_,i=E},lineEnd:function(){a&&n.lineEnd(),t=null},clean:function(){return s|(p&&a)<<1}}},function(t,r,o,e){!function(n,t,i,r,o,e){if(i){var f=(0,u.mC)(t),c=(0,u.O$)(t),l=r*i;null==o?(o=t+r*u.BZ,e=t-l/2):(o=M(f,o),e=M(f,e),(r>0?o<e:o>e)&&(o+=r*u.BZ));for(var a,s=o;r>0?s>e:s<e;s-=l)a=p([f,-c*(0,u.mC)(s),-c*(0,u.O$)(s)]),n.point(a[0],a[1])}}(e,n,i,o,t,r)},r?[0,-n]:[-u.pi,n-u.pi])}(q=n*u.uR):(q=null,R),Y()):q*u.RW},Q.clipExtent=function(n){return arguments.length?(T=null==n?(I=r=f=l=null,x.Z):function(n,t,i,r){function e(o,u){return n<=o&&o<=i&&t<=u&&u<=r}function f(o,u,e,f){var c=0,a=0;if(null==o||(c=l(o,e))!==(a=l(u,e))||0>p(o,u)^e>0)do f.point(0===c||3===c?n:i,c>1?r:t);while((c=(c+e+4)%4)!==a);else f.point(u[0],u[1])}function l(r,o){return(0,u.Wn)(r[0]-n)<u.Ho?o>0?0:3:(0,u.Wn)(r[0]-i)<u.Ho?o>0?2:1:(0,u.Wn)(r[1]-t)<u.Ho?o>0?1:0:o>0?3:2}function a(n,t){return p(n.x,t.x)}function p(n,t){var i=l(n,1),r=l(t,1);return i!==r?i-r:0===i?t[1]-n[1]:1===i?n[0]-t[0]:2===i?n[1]-t[1]:t[0]-n[0]}return function(u){var l,p,s,h,v,d,g,m,_,S,y,Z=u,R=o(),M={point:W,lineStart:function(){M.point=x,p&&p.push(s=[]),S=!0,_=!1,g=m=NaN},lineEnd:function(){l&&(x(h,v),d&&_&&R.rejoin(),l.push(R.result())),M.point=W,_&&Z.lineEnd()},polygonStart:function(){Z=R,l=[],p=[],y=!0},polygonEnd:function(){var t=function(){for(var t=0,i=0,o=p.length;i<o;++i)for(var u,e,f=p[i],c=1,l=f.length,a=f[0],s=a[0],h=a[1];c<l;++c)u=s,e=h,s=(a=f[c])[0],h=a[1],e<=r?h>r&&(s-u)*(r-e)>(h-e)*(n-u)&&++t:h<=r&&(s-u)*(r-e)<(h-e)*(n-u)&&--t;return t}(),i=y&&t,o=(l=E(l)).length;(i||o)&&(u.polygonStart(),i&&(u.lineStart(),f(null,null,1,u),u.lineEnd()),o&&c(l,a,t,f,u),u.polygonEnd()),Z=u,l=p=s=null}};function W(n,t){e(n,t)&&Z.point(n,t)}function x(o,u){var f=e(o,u);if(p&&s.push([o,u]),S)h=o,v=u,d=f,S=!1,f&&(Z.lineStart(),Z.point(o,u));else if(f&&_)Z.point(o,u);else{var c=[g=Math.max(-1e9,Math.min(1e9,g)),m=Math.max(-1e9,Math.min(1e9,m))],l=[o=Math.max(-1e9,Math.min(1e9,o)),u=Math.max(-1e9,Math.min(1e9,u))];(function(n,t,i,r,o,u){var e,f=n[0],c=n[1],l=t[0],a=t[1],p=0,s=1,h=l-f,v=a-c;if(e=i-f,h||!(e>0)){if(e/=h,h<0){if(e<p)return;e<s&&(s=e)}else if(h>0){if(e>s)return;e>p&&(p=e)}if(e=o-f,h||!(e<0)){if(e/=h,h<0){if(e>s)return;e>p&&(p=e)}else if(h>0){if(e<p)return;e<s&&(s=e)}if(e=r-c,v||!(e>0)){if(e/=v,v<0){if(e<p)return;e<s&&(s=e)}else if(v>0){if(e>s)return;e>p&&(p=e)}if(e=u-c,v||!(e<0)){if(e/=v,v<0){if(e>s)return;e>p&&(p=e)}else if(v>0){if(e<p)return;e<s&&(s=e)}return p>0&&(n[0]=f+p*h,n[1]=c+p*v),s<1&&(t[0]=f+s*h,t[1]=c+s*v),!0}}}}})(c,l,n,t,i,r)?(_||(Z.lineStart(),Z.point(c[0],c[1])),Z.point(l[0],l[1]),f||Z.lineEnd(),y=!1):f&&(Z.lineStart(),Z.point(o,u),y=!1)}g=o,m=u,_=f}return M}}(I=+n[0][0],r=+n[0][1],f=+n[1][0],l=+n[1][1]),Y()):null==I?null:[[I,r],[f,l]]},Q.scale=function(n){return arguments.length?(O=+n,G()):O},Q.translate=function(n){return arguments.length?(w=+n[0],j=+n[1],G()):[w,j]},Q.center=function(n){return arguments.length?(P=n[0]%360*u.uR,k=n[1]%360*u.uR,G()):[P*u.RW,k*u.RW]},Q.rotate=function(n){return arguments.length?(z=n[0]%360*u.uR,U=n[1]%360*u.uR,X=n.length>2?n[2]%360*u.uR:0,G()):[z*u.RW,U*u.RW,X*u.RW]},Q.angle=function(n){return arguments.length?(D=n%360*u.uR,G()):D*u.RW},Q.reflectX=function(n){return arguments.length?(F=n?-1:1,G()):F<0},Q.reflectY=function(n){return arguments.length?(L=n?-1:1,G()):L<0},Q.precision=function(n){return arguments.length?(a=N(m,K=n*n),Y()):(0,u._b)(K)},Q.fitExtent=function(n,t){return(0,C.qg)(Q,n,t)},Q.fitSize=function(n,t){return(0,C.mF)(Q,n,t)},Q.fitWidth=function(n,t){return(0,C.V6)(Q,n,t)},Q.fitHeight=function(n,t){return(0,C.rf)(Q,n,t)},function(){return t=n.apply(this,arguments),Q.invert=t.invert&&V,G()}}},77779:function(n,t,i){i.d(t,{I:function(){return e},Z:function(){return a}});var r=i(17792),o=i(22731);function u(n,t){return(0,o.Wn)(n)>o.pi&&(n-=Math.round(n/o.BZ)*o.BZ),[n,t]}function e(n,t,i){return(n%=o.BZ)?t||i?(0,r.Z)(c(n),l(t,i)):c(n):t||i?l(t,i):u}function f(n){return function(t,i){return t+=n,(0,o.Wn)(t)>o.pi&&(t-=Math.round(t/o.BZ)*o.BZ),[t,i]}}function c(n){var t=f(n);return t.invert=f(-n),t}function l(n,t){var i=(0,o.mC)(n),r=(0,o.O$)(n),u=(0,o.mC)(t),e=(0,o.O$)(t);function f(n,t){var f=(0,o.mC)(t),c=(0,o.mC)(n)*f,l=(0,o.O$)(n)*f,a=(0,o.O$)(t),p=a*i+c*r;return[(0,o.fv)(l*u-p*e,c*i-a*r),(0,o.ZR)(p*u+l*e)]}return f.invert=function(n,t){var f=(0,o.mC)(t),c=(0,o.mC)(n)*f,l=(0,o.O$)(n)*f,a=(0,o.O$)(t),p=a*u-l*e;return[(0,o.fv)(l*u+a*e,c*i+p*r),(0,o.ZR)(p*i-c*r)]},f}function a(n){function t(t){return t=n(t[0]*o.uR,t[1]*o.uR),t[0]*=o.RW,t[1]*=o.RW,t}return n=e(n[0]*o.uR,n[1]*o.uR,n.length>2?n[2]*o.uR:0),t.invert=function(t){return t=n.invert(t[0]*o.uR,t[1]*o.uR),t[0]*=o.RW,t[1]*=o.RW,t},t}u.invert=u},18310:function(n,t,i){function r(n,t){n&&u.hasOwnProperty(n.type)&&u[n.type](n,t)}i.d(t,{Z:function(){return c}});var o={Feature:function(n,t){r(n.geometry,t)},FeatureCollection:function(n,t){for(var i=n.features,o=-1,u=i.length;++o<u;)r(i[o].geometry,t)}},u={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var i=n.coordinates,r=-1,o=i.length;++r<o;)n=i[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){e(n.coordinates,t,0)},MultiLineString:function(n,t){for(var i=n.coordinates,r=-1,o=i.length;++r<o;)e(i[r],t,0)},Polygon:function(n,t){f(n.coordinates,t)},MultiPolygon:function(n,t){for(var i=n.coordinates,r=-1,o=i.length;++r<o;)f(i[r],t)},GeometryCollection:function(n,t){for(var i=n.geometries,o=-1,u=i.length;++o<u;)r(i[o],t)}};function e(n,t,i){var r,o=-1,u=n.length-i;for(t.lineStart();++o<u;)r=n[o],t.point(r[0],r[1],r[2]);t.lineEnd()}function f(n,t){var i=-1,r=n.length;for(t.polygonStart();++i<r;)e(n[i],t,1);t.polygonEnd()}function c(n,t){n&&o.hasOwnProperty(n.type)?o[n.type](n,t):r(n,t)}}}]);