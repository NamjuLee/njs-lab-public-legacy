(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41603],{75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){},8638:function(t,i,e){"use strict";e.r(i),e.d(i,{execution:function(){return l}});var s=e(88405);class r{predict1d(t){return t.mul(this.weights[0]).add(this.bias)}predict2d(t){return t.square().mul(this.weights[1]).add(t.mul(this.weights[0])).add(this.bias)}predict3d(t){return t.pow(s.scalar(3)).mul(this.weights[2]).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict4d(t){return t.pow(s.scalar(4)).mul(this.weights[3]).add(t.pow(s.scalar(3)).mul(this.weights[2])).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predict5d(t){return t.pow(s.scalar(5)).mul(this.weights[4]).add(t.pow(s.scalar(4)).mul(this.weights[3])).add(t.pow(s.scalar(3)).mul(this.weights[2])).add(t.square().mul(this.weights[1])).add(t.mul(this.weights[0])).add(this.bias)}predictResult(t){return 5===this.degree?this.predict5d(t):4===this.degree?this.predict4d(t):3===this.degree?this.predict3d(t):2===this.degree?this.predict2d(t):(this.degree,this.predict1d(t))}loss(t,i){return t.sub(i).square().mean()}async predict(t){let i=s.tidy(()=>this.predictResult(s.tensor1d(t))),e=i.dataSync();return i.dispose(),e}train(t,i){s.tidy(()=>{let e=s.tensor1d(t),r=s.tensor1d(i);this.optimizer.minimize(()=>this.loss(this.predictResult(e),r))})}constructor(t=0){this.weights=[],this.degree=3,this.leraningRate=.02,this.degree=t;for(let t=0;t<5;++t){let t=s.variable(s.scalar(2*Math.random()-1));this.weights.push(t)}this.bias=s.variable(s.scalar(2*Math.random()-1)),this.optimizer=s.train.adam(this.leraningRate)}}class h{predict(t){let i=[];for(let e=0;e<t.length;++e)i.push(this.predictByNum(t[e]));return i}predictByNum(t){return this.a*t+this.bias}fit(t,i){let e=0,s=0;for(let r=0;r<t.length;++r)e+=t[r],s+=i[r];let r=e/t.length,h=s/t.length,a=0,d=0;for(let e=0;e<t.length;++e)a+=(t[e]-r)*(i[e]-h),d+=(t[e]-r)*(t[e]-r);this.a=a/d,this.bias=h-this.a*r}constructor(){this.a=1,this.bias=0}}class a{predict(t){let i=[];for(let e=0;e<t.length;++e)i.push(this.predictByNum(t[e]));return i}predictByNum(t){return this.weight*t+this.bias}train(t,i){for(let e=0;e<t.length;++e){let s=t[e],r=i[e],h=this.weight*s+this.bias;this.error=r-h,this.weight=this.weight+this.error*s*this.learningRate,this.bias=this.bias+this.error*this.learningRate}}constructor(){this.learningRate=.02,this.error=Number.MAX_SAFE_INTEGER,this.weight=1,this.bias=0}}let d=t=>{let i=[],e=n(t);for(let s of t)i.push((s-e[0])/(e[1]-e[0]));return i},n=t=>{let i=Number.MAX_VALUE,e=Number.MIN_VALUE;for(let s of t)i>s&&(i=s),e<s&&(e=s);return[i,e]},l=async t=>{let i=d([1,3,5]),e=d([10,11.5,12]),s=d([1,3,5]);new h().fit(i,e);let n=new a;for(let t=0;t<1e4;++t)n.train(i,e),t%1e3==0&&await n.predict(s);let l=new r(1);for(let t=0;t<2e3;++t)l.train(i,e),t%400==0&&await l.predict(s);await l.predict(s)}}}]);