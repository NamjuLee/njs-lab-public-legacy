"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98127],{98127:function(e,t,r){r.r(t),r.d(t,{executeRelationshipQuery:function(){return f},executeRelationshipQueryForCount:function(){return y}});var o=r(30563),n=r(54748),u=r(62329),a=r(89564);async function d(e,t,r){let o=await l(e,t,r),n=o.data,u=n.geometryType,a=n.spatialReference,d={};for(let e of n.relatedRecordGroups){let t={fields:void 0,objectIdFieldName:void 0,geometryType:u,spatialReference:a,hasZ:!!n.hasZ,hasM:!!n.hasM,features:e.relatedRecords};if(null!=e.objectId)d[e.objectId]=t;else for(let r of Object.keys(e))"relatedRecords"!==r&&(d[e[r]]=t)}return{...o,data:d}}async function c(e,t,r){let o=await l(e,t,r,{returnCountOnly:!0}),n=o.data,u={};for(let e of n.relatedRecordGroups)null!=e.objectId&&(u[e.objectId]=e.count);return{...o,data:u}}async function l(e,t,r={},o){let d=(0,a.A)({...e.query,f:"json",...o,...function(e,t){let r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),r.outFields&&!t?.returnCountOnly?r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","):delete r.outFields,r.outSR&&(r.outSR=(0,u.B9)(r.outSR)),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}(t,o)});return(0,n.Z)(e.path+"/queryRelatedRecords",{...r,query:{...r.query,...d}})}var s=r(9158),i=r(34015);async function f(e,t,r){return t=i.default.from(t),d((0,o.en)(e),t,r).then(e=>{let t=e.data,r={};return Object.keys(t).forEach(e=>r[e]=s.Z.fromJSON(t[e])),r})}async function y(e,t,r){return t=i.default.from(t),c((0,o.en)(e),t,{...r}).then(e=>e.data)}}}]);