(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56847],{15510:function(t){function e(t){return Promise.resolve().then(function(){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}e.keys=function(){return[]},e.resolve=e,e.id=15510,t.exports=e},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){},49738:function(t,e,n){"use strict";n.d(e,{TFDataUtility:function(){return i},TFUtility:function(){return o}});var r=n(88405);n(53844);class o{static Playground(){}static ExeScalar(){let t=r.scalar(10);t.print(),t.print(!0);let e=r.tensor([1,2,3]);e.print(),e.print(!0);let n=r.tensor1d([1,2,3]);n.print(),n.print(!0),r.tensor([[1,2],[3,4]]).print(),r.tensor2d([[1,2],[3,4]]).print(),r.tensor2d([1,2,3,4,5,6],[2,3]).print();let o=new Float32Array(30);for(let t=0;t<30;++t)o[t]=t;r.tensor2d(o,[10,3]).print();let i=new Float32Array(18);for(let t=0;t<18;++t)i[t]=t;r.tensor3d(i,[2,3,3]).print()}static ExeAdd(){let t=r.scalar(5);r.tensor([1,2,3]).mul(t).print();let e=r.tensor([1,2,3,4,5,6],[2,3]);e.print(),e.mul(t).print(),e.add(t).print(),e.div(3).print();let n=new Float32Array(30);for(let t=0;t<30;++t)n[t]=t;let o=r.tensor2d(n,[10,3]);o.print(),o.print(),o.add(o).print(),o.sub(t).print()}static ExeOperation(){r.tidy(()=>{let t=r.tensor([1,2,3,4,5,6],[2,3],"float32");t.print();let e=r.tensor([1,2,3,4,5,6],[3,2],"float32");e.print(),t.matMul(e).print();let n=e.matMul(t);n.print();let o=r.scalar(.5);n.mul(o).print();let i=r.tensor1d([80,90,100,80]),l=r.tensor1d([70,70,70,70]);i.add(l).div(2).print(),i.add(l).div(2).abs().print()})}static Tensor01(){let t=r.tensor([0,1,2,3],[2,2]);t.print(),(t=r.tensor([0,1,2,3,4,5,6,7])).print(),(t=r.tensor([0,1,2,3,4,5,6,7],[2,2,2])).print()}static Tensor02(){let t=[];for(let e=0;e<15;++e)t.push(Math.random());let e=[3,5],n=r.tensor(t,e);n.print(),t=[];for(let e=0;e<30;++e)t.push(100*Math.random());e=[2,3,5],(n=r.tensor(t,e,"int32")).print(),(n=r.tensor3d(t,[2,3,5],"int32")).print()}static Tensor03(){let t=[];for(let e=0;e<15e4;++e)t.push(Math.random());r.tensor(t,[300,500]).print()}constructor(){}}n(45169);class i{static async getData(){let t=await fetch("https://storage.googleapis.com/tfjs-tutorials/carsData.json");return(await t.json()).map(t=>({mpg:t.Miles_per_Gallon,horsepower:t.Horsepower})).filter(t=>null!=t.mpg&&null!=t.horsepower)}static Get_XY_OneHot_TensorFromCSV(t){return r.tidy(()=>{let e=[],n=[],o=-1;for(let r of t){let t=r.slice(0,r.length-1),i=r[r.length-1];e.push(t),n.push(i),o<i&&(o=i)}return[r.tensor2d(e,[e.length,e[0].length]),r.oneHot(r.tensor1d(n).toInt(),o+1)]})}static Get_XY_TensorFromCSV(t){return r.tidy(()=>{let e=[],n=[],o=-1;for(let r of t){let t=r.slice(0,r.length-1),i=r[r.length-1];e.push(t),n.push(i),o<i&&(o=i)}return[r.tensor2d(e,[e.length,e[0].length]),r.tensor1d(n)]})}static SplitTensorFromXY(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=Math.round(t.shape[0]*n),o=t.shape[0]-r,i=t.slice([0,0],[o,t.shape[1]]),l=t.slice([o,0],[r,t.shape[1]]);return[i,e.slice([0,0],[o,e.shape[1]]),l,e.slice([o,0],[r,e.shape[1]])]}static ConvertToTensors(t,e,n){let o=t.length;if(o!==e.length)throw Error("data and split have different numbers of examples");let i=Math.round(o*n),l=o-i,a=t[0].length,s=r.tensor2d(t,[o,a]),d=r.oneHot(r.tensor1d(e).toInt(),4),c=s.slice([0,0],[l,a]),h=s.slice([l,0],[i,a]);return[c,d.slice([0,0],[l,4]),h,d.slice([0,0],[i,4])]}static GetRandomNormal(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.55;return r.randomNormal([t],e,n)}static GetRandomNormalTensors(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}static Shuffle(t){for(var e,n,r=t.length;0!==r;)n=Math.floor(Math.random()*r),r-=1,e=t[r],t[r]=t[n],t[n]=e;return t}static GetSyntheticDataTensor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.2,a=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return r.tidy(()=>{let s=r.scalar(e),d=r.scalar(n),c=r.scalar(o),h=r.scalar(i),u=r.randomUniform([t],-1,1),p=s.mul(u.pow(r.scalar(3))).add(d.mul(u.square())).add(c.mul(u)).add(h).add(r.randomNormal([t],0,l));if(a){let t=p.min(),e=p.max().sub(t);return{x:u,yNomalized:p.sub(t).div(e)}}return[u,p]})}static GetSyntheticData(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-.2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-.66,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-.1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2.8,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.2,a=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return r.tidy(()=>{let r=this.GetSyntheticDataTensor(t,e,n,o,i,l,a);return{xx:r[0].dataSync(),yy:r[1].dataSync()}})}static GetIrisData(){return[[5.1,3.5,1.4,.2,0],[4.9,3,1.4,.2,0],[4.7,3.2,1.3,.2,0],[4.6,3.1,1.5,.2,0],[5,3.6,1.4,.2,0],[5.4,3.9,1.7,.4,0],[4.6,3.4,1.4,.3,0],[5,3.4,1.5,.2,0],[4.4,2.9,1.4,.2,0],[4.9,3.1,1.5,.1,0],[5.4,3.7,1.5,.2,0],[4.8,3.4,1.6,.2,0],[4.8,3,1.4,.1,0],[4.3,3,1.1,.1,0],[5.8,4,1.2,.2,0],[5.7,4.4,1.5,.4,0],[5.4,3.9,1.3,.4,0],[5.1,3.5,1.4,.3,0],[5.7,3.8,1.7,.3,0],[5.1,3.8,1.5,.3,0],[5.4,3.4,1.7,.2,0],[5.1,3.7,1.5,.4,0],[4.6,3.6,1,.2,0],[5.1,3.3,1.7,.5,0],[4.8,3.4,1.9,.2,0],[5,3,1.6,.2,0],[5,3.4,1.6,.4,0],[5.2,3.5,1.5,.2,0],[5.2,3.4,1.4,.2,0],[4.7,3.2,1.6,.2,0],[4.8,3.1,1.6,.2,0],[5.4,3.4,1.5,.4,0],[5.2,4.1,1.5,.1,0],[5.5,4.2,1.4,.2,0],[4.9,3.1,1.5,.1,0],[5,3.2,1.2,.2,0],[5.5,3.5,1.3,.2,0],[4.9,3.1,1.5,.1,0],[4.4,3,1.3,.2,0],[5.1,3.4,1.5,.2,0],[5,3.5,1.3,.3,0],[4.5,2.3,1.3,.3,0],[4.4,3.2,1.3,.2,0],[5,3.5,1.6,.6,0],[5.1,3.8,1.9,.4,0],[4.8,3,1.4,.3,0],[5.1,3.8,1.6,.2,0],[4.6,3.2,1.4,.2,0],[5.3,3.7,1.5,.2,0],[5,3.3,1.4,.2,0],[7,3.2,4.7,1.4,1],[6.4,3.2,4.5,1.5,1],[6.9,3.1,4.9,1.5,1],[5.5,2.3,4,1.3,1],[6.5,2.8,4.6,1.5,1],[5.7,2.8,4.5,1.3,1],[6.3,3.3,4.7,1.6,1],[4.9,2.4,3.3,1,1],[6.6,2.9,4.6,1.3,1],[5.2,2.7,3.9,1.4,1],[5,2,3.5,1,1],[5.9,3,4.2,1.5,1],[6,2.2,4,1,1],[6.1,2.9,4.7,1.4,1],[5.6,2.9,3.6,1.3,1],[6.7,3.1,4.4,1.4,1],[5.6,3,4.5,1.5,1],[5.8,2.7,4.1,1,1],[6.2,2.2,4.5,1.5,1],[5.6,2.5,3.9,1.1,1],[5.9,3.2,4.8,1.8,1],[6.1,2.8,4,1.3,1],[6.3,2.5,4.9,1.5,1],[6.1,2.8,4.7,1.2,1],[6.4,2.9,4.3,1.3,1],[6.6,3,4.4,1.4,1],[6.8,2.8,4.8,1.4,1],[6.7,3,5,1.7,1],[6,2.9,4.5,1.5,1],[5.7,2.6,3.5,1,1],[5.5,2.4,3.8,1.1,1],[5.5,2.4,3.7,1,1],[5.8,2.7,3.9,1.2,1],[6,2.7,5.1,1.6,1],[5.4,3,4.5,1.5,1],[6,3.4,4.5,1.6,1],[6.7,3.1,4.7,1.5,1],[6.3,2.3,4.4,1.3,1],[5.6,3,4.1,1.3,1],[5.5,2.5,4,1.3,1],[5.5,2.6,4.4,1.2,1],[6.1,3,4.6,1.4,1],[5.8,2.6,4,1.2,1],[5,2.3,3.3,1,1],[5.6,2.7,4.2,1.3,1],[5.7,3,4.2,1.2,1],[5.7,2.9,4.2,1.3,1],[6.2,2.9,4.3,1.3,1],[5.1,2.5,3,1.1,1],[5.7,2.8,4.1,1.3,1],[6.3,3.3,6,2.5,2],[5.8,2.7,5.1,1.9,2],[7.1,3,5.9,2.1,2],[6.3,2.9,5.6,1.8,2],[6.5,3,5.8,2.2,2],[7.6,3,6.6,2.1,2],[4.9,2.5,4.5,1.7,2],[7.3,2.9,6.3,1.8,2],[6.7,2.5,5.8,1.8,2],[7.2,3.6,6.1,2.5,2],[6.5,3.2,5.1,2,2],[6.4,2.7,5.3,1.9,2],[6.8,3,5.5,2.1,2],[5.7,2.5,5,2,2],[5.8,2.8,5.1,2.4,2],[6.4,3.2,5.3,2.3,2],[6.5,3,5.5,1.8,2],[7.7,3.8,6.7,2.2,2],[7.7,2.6,6.9,2.3,2],[6,2.2,5,1.5,2],[6.9,3.2,5.7,2.3,2],[5.6,2.8,4.9,2,2],[7.7,2.8,6.7,2,2],[6.3,2.7,4.9,1.8,2],[6.7,3.3,5.7,2.1,2],[7.2,3.2,6,1.8,2],[6.2,2.8,4.8,1.8,2],[6.1,3,4.9,1.8,2],[6.4,2.8,5.6,2.1,2],[7.2,3,5.8,1.6,2],[7.4,2.8,6.1,1.9,2],[7.9,3.8,6.4,2,2],[6.4,2.8,5.6,2.2,2],[6.3,2.8,5.1,1.5,2],[6.1,2.6,5.6,1.4,2],[7.7,3,6.1,2.3,2],[6.3,3.4,5.6,2.4,2],[6.4,3.1,5.5,1.8,2],[6,3,4.8,1.8,2],[6.9,3.1,5.4,2.1,2],[6.7,3.1,5.6,2.4,2],[6.9,3.1,5.1,2.3,2],[5.8,2.7,5.1,1.9,2],[6.8,3.2,5.9,2.3,2],[6.7,3.3,5.7,2.5,2],[6.7,3,5.2,2.3,2],[6.3,2.5,5,1.9,2],[6.5,3,5.2,2,2],[6.2,3.4,5.4,2.3,2],[5.9,3,5.1,1.8,2]]}constructor(){}}}}]);