"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3367,8],{12840:function(e,t,r){r.d(t,{D:function(){return o}});var a=r(55110);function o(e){e?.writtenProperties&&e.writtenProperties.forEach(({target:e,propName:t,newOrigin:r})=>{(0,a.l)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)})}},55110:function(e,t,r){r.d(t,{l:function(){return a}});function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}},3367:function(e,t,r){r.d(t,{save:function(){return m},saveAs:function(){return h}});var a=r(48187),o=r(89136),n=r(63332),s=r(39768);let i="Group Layer",u=n.hz.GROUP_LAYER_MAP;function l(e){return{isValid:"group"===e.type,errorMessage:"Layer.type should be 'group'"}}function c(e){return{isValid:(0,n._$)(e,u),errorMessage:`Layer.portalItem.typeKeywords should have '${u}'`}}function p(e,t){return{...(0,o.Y)(e,"web-map",!0),initiator:t}}function f(e){let t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function d(e,t){t.title||=e.title,(0,n.ck)(t,n.hz.METADATA),(0,n.qj)(t,u)}async function m(e,t){return(0,a.a1)({layer:e,itemType:i,validateLayer:l,validateItem:c,createJSONContext:t=>p(t,e),createItemData:f,errorNamePrefix:"group-layer-save",saveResources:async(t,r)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),(0,s.H)(e.resourceReferences,r))},t)}async function h(e,t,r){return(0,a.po)({layer:e,itemType:i,validateLayer:l,createJSONContext:t=>p(t,e),createItemData:f,errorNamePrefix:"group-layer-save-as",newItem:t,setItemProperties:d,saveResources:(t,r)=>(0,s.H)(e.resourceReferences,r)},r)}},48187:function(e,t,r){r.d(t,{a1:function(){return v},po:function(){return g}});var a=r(94605),o=r(12840),n=r(81449),s=r(20550),i=r(89136),u=r(63332),l=r(97226),c=r(34433);async function p(e){let{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),function(e,t,r){let o=r(e);if(!o.isValid)throw new a.Z(`${t}:invalid-parameters`,o.errorMessage,{layer:e})}(t,r,o)}function f(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function d(e){let{item:t,errorNamePrefix:r,layer:o,validateItem:n}=e;if((0,l.w)(t),function(e){let{item:t,itemType:r,additionalItemType:o,errorNamePrefix:n,layer:s}=e,i=[r];if(o&&i.push(o),!i.includes(t.type)){let e=i.map(e=>`'${e}'`).join(", ");throw new a.Z(`${n}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:s})}}(e),n){let e=n(t);if(!e.isValid)throw new a.Z(`${r}:invalid-parameters`,e.errorMessage,{layer:o})}}function m(e){return(0,i.Y)(e,"portal-item")}async function h(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();let a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,c.z)(t,{errorName:"layer-write:unsupported"},r),a}function w(e){(0,u.qj)(e,u.hz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t))}async function y(e,t,r){let a=e.portal;await a.signIn(),await a.user?.addItem({item:e,data:t,folder:r?.folder})}async function v(e,t){let{layer:r,createItemData:n,createJSONContext:s,setItemProperties:i,saveResources:u,supplementalUnsupportedErrors:l}=e;await p(e),function(e){let{layer:t,errorNamePrefix:r}=e,{portalItem:o}=t;if(!o)throw new a.Z(`${r}:portal-item-not-set`,f(t,"requires the portalItem property to be set"));if(!o.loaded)throw new a.Z(`${r}:portal-item-not-loaded`,f(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:o})}(e);let c=r.portalItem,y=s?s(c):m(c),v=await h(r,y,{...t,supplementalUnsupportedErrors:l}),g=await n({layer:r,layerJSON:v},c);return await i?.(r,c),w(c),await c.update({data:g}),(0,o.D)(y),await u?.(c,y),c}async function g(e,t){let{layer:r,createItemData:a,createJSONContext:i,setItemProperties:u,saveResources:l,supplementalUnsupportedErrors:c}=e;await p(e);let f=function(e){let{newItem:t,itemType:r}=e,a=s.default.from(t);return a.id&&((a=a.clone()).id=null),a.type??=r,a.portal??=n.Z.getDefault(),d({...e,item:a}),a}(e),v=i?i(f):m(f),g=await h(r,v,{...t,supplementalUnsupportedErrors:c}),I=await a({layer:r,layerJSON:g},f);return await u(r,f),w(f),await y(f,I,t),r.portalItem=f,(0,o.D)(v),await l?.(f,v),f}},89136:function(e,t,r){r.d(t,{Y:function(){return s},h:function(){return n}});var a=r(72659),o=r(81449);function n(e,t){return{...i(e,t),readResourcePaths:[]}}function s(e,t,r){let o=(0,a.mN)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,a.mN)(e.itemUrl),portal:e.portal||o.Z.getDefault(),portalItem:e}}},8:function(e,t,r){r.d(t,{FO:function(){return p},W7:function(){return f},addOrUpdateResources:function(){return i},fetchResources:function(){return s},removeAllResources:function(){return l},removeResource:function(){return u}});var a=r(54748),o=r(94605),n=r(72659);async function s(e,t={},r){await e.load(r);let a=(0,n.v_)(e.itemUrl,"resources"),{start:o=1,num:s=10,sortOrder:i="asc",sortField:u="resource"}=t,l={query:{start:o,num:s,sortOrder:i,sortField:u,token:e.apiKey},signal:r?.signal},c=await e.portal.request(a,l);return{total:c.total,nextStart:c.nextStart,resources:c.resources.map(({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)}))}}async function i(e,t,r,a){let s=new Map;for(let{resource:e,content:a,compress:n,access:i}of t){if(!e.hasPath())throw new o.Z(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");let[t,u]=c(e.path),l=`${t}/${n??""}/${i??""}`;s.has(l)||s.set(l,{prefix:t,compress:n,access:i,files:[]}),s.get(l).files.push({fileName:u,content:a})}await e.load(a);let i=(0,n.v_)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(let{prefix:t,compress:r,access:o,files:n}of s.values())for(let s=0;s<n.length;s+=25){let u=n.slice(s,s+25),l=new FormData;t&&"."!==t&&l.append("resourcesPrefix",t),r&&l.append("compress","true"),o&&l.append("access",o);let c=0;for(let{fileName:e,content:t}of u)l.append("file"+ ++c,t,e);l.append("f","json"),await e.portal.request(i,{method:"post",body:l,signal:a?.signal})}}async function u(e,t,r){if(!t.hasPath())throw new o.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);let a=(0,n.v_)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function l(e,t){await e.load(t);let r=(0,n.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function c(e){let t=e.lastIndexOf("/");return -1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}async function p(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await (0,a.Z)(e.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;let[r,,a]=function(e){let[t,r]=function(e){let t=(0,n.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[a,o]=c(t);return[a,o,r]}(e.path);return e.portalItem.resourceFromPath((0,n.v_)(r,t+a))}},39768:function(e,t,r){r.d(t,{H:function(){return i},b:function(){return u}});var a=r(94605),o=r(31124),n=r(85222),s=r(8);async function i(e,t,r){let a=await l(e,t,r);await c(a,t,r)}async function u(e,t,r,a,o){let n=await l(r,a,o);await e.update({data:t}),await c(n,a,o)}async function l(e,t,i){if(!t?.resources)return;let u=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;let l=new Set(t.resources.toKeep.map(e=>e.resource.path)),c=new Set,p=[];l.forEach(t=>{u.delete(t),e.paths.push(t)});let f=[],d=[],m=[];for(let r of t.resources.toUpdate)if(u.delete(r.resource.path),l.has(r.resource.path)||c.has(r.resource.path)){let{resource:t,content:a,finish:o}=r,i=(0,s.W7)(t,(0,n.DO)());e.paths.push(i.path),f.push({resource:i,content:await (0,s.FO)(a),compress:r.compress}),o&&m.push(()=>o(i))}else{e.paths.push(r.resource.path),d.push({resource:r.resource,content:await (0,s.FO)(r.content),compress:r.compress});let t=r.finish;t&&m.push(()=>t(r.resource)),c.add(r.resource.path)}for(let r of t.resources.toAdd)if(e.paths.push(r.resource.path),u.has(r.resource.path))u.delete(r.resource.path);else{f.push({resource:r.resource,content:await (0,s.FO)(r.content),compress:r.compress});let e=r.finish;e&&m.push(()=>e(r.resource))}if(f.length||d.length){let{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,8));await e(t.portalItem,f,"add",i),await e(t.portalItem,d,"update",i)}if(m.forEach(e=>e()),0===p.length)return u;let h=await (0,o.UO)(p);if((0,o.k_)(i),h.length>0)throw new a.Z("save:resources","Failed to save one or more resources",{errors:h});return u}async function c(e,t,r){if(!e||!t.portalItem)return;let a=[];for(let o of e){let e=t.portalItem.resourceFromPath(o);a.push(e.portalItem.removeResource(e,r))}await (0,o.as)(a)}},97226:function(e,t,r){r.d(t,{w:function(){return s}});var a=r(39301),o=r(94605),n=r(56528);function s(e){if(a.default.apiKey&&(0,n.r)(e.portal.url))throw new o.Z("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}}}]);