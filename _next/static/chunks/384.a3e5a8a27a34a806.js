"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{384:function(t,e,n){n.r(e),n.d(e,{Solution:function(){return A},addData:function(){return h},analyticsFirebase:function(){return d},appFirebase:function(){return E},auth:function(){return u},dbFirestore:function(){return _},deleteData:function(){return P},readData:function(){return l},setData:function(){return f},updateData:function(){return I}});var a=n(15236),r=n(97175),i=n(69842),o=n(5186),s=n(20357);let c={apiKey:s.env.REACT_APP_FIREBASE_API_KEY,authDomain:s.env.REACT_APP_FIREBASE_DOMAIN,projectId:s.env.REACT_APP_FIREBASE_PROJECT_ID,storageBucket:s.env.REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:s.env.REACT_APP_FIREBASE_MEASUREMENT_SENDER_ID,appId:s.env.REACT_APP_FIREBASE_APP_ID,measurementId:s.env.REACT_APP_FIREBASE_MEASUREMENT_ID},E=(0,a.ZF)(c),d=(0,r.IH)(E),u=(0,o.v0)(E),_=(0,i.ad)(E);class A{async getData(){console.log(await l("cities"))}destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}constructor(t){document.getElementById(t)}}let l=async t=>{let e=await (0,i.PL)((0,i.hJ)(_,t)),n=[];return e.forEach(t=>{console.log("".concat(t.id," => ").concat(t.data()));let e={id:t.id,data:t.data()};n.push(e)}),n},f=async(t,e,n)=>{await (0,i.pl)((0,i.JU)(_,t,e),{...n,timestamp:(0,i.Bt)()})},h=async(t,e,n)=>{let a=(0,i.JU)((0,i.hJ)(_,t,e));await (0,i.pl)(a,{...n,timestamp:(0,i.Bt)()})},I=async(t,e,n)=>{let a=(0,i.JU)(_,t,e);await (0,i.r7)(a,n)},P=async(t,e)=>{await (0,i.oe)((0,i.JU)(_,t,e))}}}]);