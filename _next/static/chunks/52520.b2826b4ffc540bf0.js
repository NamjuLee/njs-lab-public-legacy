"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52520],{12840:function(e,t,r){r.d(t,{D:function(){return n}});var a=r(55110);function n(e){e?.writtenProperties&&e.writtenProperties.forEach(({target:e,propName:t,newOrigin:r})=>{(0,a.l)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)})}},55110:function(e,t,r){r.d(t,{l:function(){return a}});function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}},78368:function(e,t,r){r.d(t,{save:function(){return E},saveAs:function(){return x}});var a=r(78628);r(94605);var n=r(48187),i=r(96922),o=r(3770),l=r(24243),s=r(27761),u=r(63332);let p="Feature Service",f="feature-layer-utils",d=`${f}-save`,c=`${f}-save-as`;function y(e){return{isValid:(0,l.fP)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){let t=[],r=[];for(let{layer:a,layerJSON:n}of e)a.isTable?r.push(n):t.push(n);return{layers:t,tables:r}}async function w(e,t){return/\/\d+\/?$/.test(e.url)?m([t[0]]):v(t,e)}async function v(e,t){if(e.reverse(),!t)return m(e);let r=await h(t,e);for(let t of e)O(t.layer,t.layerJSON,r);return function(e,t){let r=[],a=[];for(let{layer:e}of t){let{isTable:t,layerId:n}=e;t?a.push(n):r.push(n)}b(e.layers,r),b(e.tables,a)}(r,e),r}async function h(e,t){var r,a;let n=await e.fetchData("json");if((r=n)&&Array.isArray(r.layers)&&Array.isArray(r.tables))return n;a=n||={},a.layers||=[],a.tables||=[];let{layer:{url:i,customParameters:o,apiKey:l}}=t[0];return await P(n,{url:i??"",customParameters:o,apiKey:l},t.map(e=>e.layer.layerId)),n}function b(e,t){if(e.length<2)return;let r=[];for(let{id:t}of e)r.push(t);(0,a.fS)(r.sort(I),t.slice().sort(I))&&e.sort((e,r)=>{let a=t.indexOf(e.id),n=t.indexOf(r.id);return a<n?-1:a>n?1:0})}function I(e,t){return e<t?-1:e>t?1:0}async function P(e,t,r){let{url:a,customParameters:n,apiKey:i}=t,{serviceJSON:l,layersJSON:s}=await (0,o.V)(a,{customParameters:n,apiKey:i}),u=S(e.layers,l.layers,r),p=S(e.tables,l.tables,r);e.layers=u.itemResources,e.tables=p.itemResources;let f=[...u.added,...p.added],d=s?[...s.layers,...s.tables]:[];await g(e,f,a,d)}function S(e,t,r){let n=(0,a.e5)(e,t,(e,t)=>e.id===t.id);e=e.filter(e=>!n.removed.some(t=>t.id===e.id));let i=n.added;return i.forEach(({id:t})=>{e.push({id:t})}),{itemResources:e,added:i.filter(({id:e})=>!r.includes(e))}}async function g(e,t,r,a){let n=await N(t),i=t.map(({id:e,type:t})=>new(n.get(t))({url:r,layerId:e,sourceJSON:a.find(({id:t})=>t===e)}));await Promise.allSettled(i.map(e=>e.load())),i.forEach(t=>{let{layerId:r,loaded:a,defaultPopupTemplate:n}=t;if(!a||null==n)return;let i={id:r,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(i.layerType=t.operationalLayerType),O(t,i,e)})}async function N(e){let t=[];e.forEach(({type:e})=>{let r=(0,o.W)(e),a=s.T[r];t.push(a())});let r=await Promise.all(t),a=new Map;return e.forEach(({type:e},t)=>{a.set(e,r[t])}),a}function O(e,t,r){e.isTable?T(r.tables,t):T(r.layers,t)}function T(e,t){let r=e.findIndex(({id:e})=>e===t.id);-1===r?e.push(t):e[r]=t}async function $(e,t){let{url:r,layerId:a,title:n,fullExtent:o,isTable:l}=e,s=(0,i.Qc)(r);t.url=("FeatureServer"===s?.serverType?r:`${r}/${a}`)??null,t.title||=n,t.extent=null,l||null==o||(t.extent=await (0,u.$o)(o)),(0,u.ck)(t,u.hz.METADATA),(0,u.ck)(t,u.hz.MULTI_LAYER),(0,u.qj)(t,u.hz.SINGLE_LAYER),l&&(0,u.qj)(t,u.hz.TABLE)}async function E(e,t){return(0,n.a1)({layer:e,itemType:p,validateLayer:y,createItemData:(e,t)=>w(t,[e]),errorNamePrefix:d},t)}async function x(e,t,r){return(0,n.po)({layer:e,itemType:p,validateLayer:y,createItemData:(e,t)=>Promise.resolve(m([e])),errorNamePrefix:c,newItem:t,setItemProperties:$},r)}},48187:function(e,t,r){r.d(t,{a1:function(){return h},po:function(){return b}});var a=r(94605),n=r(12840),i=r(81449),o=r(20550),l=r(89136),s=r(63332),u=r(97226),p=r(34433);async function f(e){let{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){let n=r(e);if(!n.isValid)throw new a.Z(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function d(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function c(e){let{item:t,errorNamePrefix:r,layer:n,validateItem:i}=e;if((0,u.w)(t),function(e){let{item:t,itemType:r,additionalItemType:n,errorNamePrefix:i,layer:o}=e,l=[r];if(n&&l.push(n),!l.includes(t.type)){let e=l.map(e=>`'${e}'`).join(", ");throw new a.Z(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:o})}}(e),i){let e=i(t);if(!e.isValid)throw new a.Z(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function y(e){return(0,l.Y)(e,"portal-item")}async function m(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();let a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,p.z)(t,{errorName:"layer-write:unsupported"},r),a}function w(e){(0,s.qj)(e,s.hz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t))}async function v(e,t,r){let a=e.portal;await a.signIn(),await a.user?.addItem({item:e,data:t,folder:r?.folder})}async function h(e,t){let{layer:r,createItemData:i,createJSONContext:o,setItemProperties:l,saveResources:s,supplementalUnsupportedErrors:u}=e;await f(e),function(e){let{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.Z(`${r}:portal-item-not-set`,d(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.Z(`${r}:portal-item-not-loaded`,d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));c({...e,item:n})}(e);let p=r.portalItem,v=o?o(p):y(p),h=await m(r,v,{...t,supplementalUnsupportedErrors:u}),b=await i({layer:r,layerJSON:h},p);return await l?.(r,p),w(p),await p.update({data:b}),(0,n.D)(v),await s?.(p,v),p}async function b(e,t){let{layer:r,createItemData:a,createJSONContext:l,setItemProperties:s,saveResources:u,supplementalUnsupportedErrors:p}=e;await f(e);let d=function(e){let{newItem:t,itemType:r}=e,a=o.default.from(t);return a.id&&((a=a.clone()).id=null),a.type??=r,a.portal??=i.Z.getDefault(),c({...e,item:a}),a}(e),h=l?l(d):y(d),b=await m(r,h,{...t,supplementalUnsupportedErrors:p}),I=await a({layer:r,layerJSON:b},d);return await s(r,d),w(d),await v(d,I,t),r.portalItem=d,(0,n.D)(h),await u?.(d,h),d}},89136:function(e,t,r){r.d(t,{Y:function(){return o},h:function(){return i}});var a=r(72659),n=r(81449);function i(e,t){return{...l(e,t),readResourcePaths:[]}}function o(e,t,r){let n=(0,a.mN)(e.itemUrl);return{...l(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,t){return{origin:t,url:(0,a.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e}}},97226:function(e,t,r){r.d(t,{w:function(){return o}});var a=r(39301),n=r(94605),i=r(56528);function o(e){if(a.default.apiKey&&(0,i.r)(e.portal.url))throw new n.Z("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},34433:function(e,t,r){r.d(t,{P:function(){return n},z:function(){return o}});var a=r(94605);async function n(e){let t=[];for(let r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){let e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}let i=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function o(e,t,r){let n=(e.messages??[]).filter(({type:e})=>"error"===e).map(({name:e,message:t,details:r})=>new a.Z(e,t,r));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map(e=>new a.Z("url:unsupported",`Relative url '${e}' is not supported`)))),r){let{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(n=n.filter(({name:e})=>!(i.has(e)||t.includes(e)))),a&&(n=n.filter(e=>"web-document-write:property-required"!==e.name))}if(n.length>0)throw new a.Z(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);