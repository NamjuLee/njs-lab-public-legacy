"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[94989],{34648:(e,t,o)=>{o.d(t,{mh:()=>U,Jx:()=>B,Hw:()=>N,ZP:()=>k});var n=o(72791);const r=n.createContext(null);function s(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!s(e[o],t[o]))return!1;return!0}if(Array.isArray(t))return!1;if("object"===typeof e&&"object"===typeof t){const o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(const r of o){if(!t.hasOwnProperty(r))return!1;if(!s(e[r],t[r]))return!1}return!0}return!1}function a(e,t){if(!e.getProjection)return;const o=e.getProjection();s(o,t.getProjection())||t.setProjection(o)}function i(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function c(e,t){const o=t.viewState||t;let n=!1;if("longitude"in o&&"latitude"in o){const t=e.center;e.center=new t.constructor(o.longitude,o.latitude),n=n||t!==e.center}if("zoom"in o){const t=e.zoom;e.zoom=o.zoom,n=n||t!==e.zoom}if("bearing"in o){const t=e.bearing;e.bearing=o.bearing,n=n||t!==e.bearing}if("pitch"in o){const t=e.pitch;e.pitch=o.pitch,n=n||t!==e.pitch}return o.padding&&!e.isPaddingEqual(o.padding)&&(n=!0,e.padding=o.padding),n}const l=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function u(e){if(!e)return null;if("string"===typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;const t={};for(const n of e.layers)t[n.id]=n;const o=e.layers.map((e=>{let o=null;"interactive"in e&&(o=Object.assign({},e),delete o.interactive);const n=t[e.ref];if(n){o=o||Object.assign({},e),delete o.ref;for(const e of l)e in n&&(o[e]=n[e])}return o||e}));return{...e,layers:o}}const d={version:8,sources:{},layers:[]},p={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},f={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},m={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},h=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],_=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class g{constructor(e,t,o){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=e=>{const t=this.props[m[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onPointerEvent=e=>{"mousemove"!==e.type&&"mouseout"!==e.type||this._updateHover(e);const t=this.props[p[e.type]];t&&(this.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=this._hoveredFeatures||this._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._onCameraEvent=e=>{if(!this._internalUpdate){const t=this.props[f[e.type]];t&&t(e)}e.type in this._deferredEvents&&(this._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(o)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){const t=this.props;this.props=e;const o=this._updateSettings(e,t);o&&this._createShadowTransform(this._map);const n=this._updateSize(e),r=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(o||n||r&&!this._map.isMoving())&&this.redraw()}static reuse(e,t){const o=g.savedMaps.pop();if(!o)return null;const n=o.map,r=n.getContainer();for(t.className=r.className;r.childNodes.length>0;)t.appendChild(r.childNodes[0]);n._container=t;const s=n._resizeObserver;s&&(s.disconnect(),s.observe(t)),o.setProps({...e,styleDiffing:!1}),n.resize();const{initialViewState:a}=e;return a&&(a.bounds?n.fitBounds(a.bounds,{...a.fitBoundsOptions,duration:0}):o._updateViewState(a,!1)),n.isStyleLoaded()?n.fire("load"):n.once("styledata",(()=>n.fire("load"))),n._update(),o}_initialize(e){const{props:t}=this,{mapStyle:o=d}=t,n={...t,...t.initialViewState,accessToken:t.mapboxAccessToken||y()||null,container:e,style:u(o)},r=n.initialViewState||n.viewState||n;if(Object.assign(n,{center:[r.longitude||0,r.latitude||0],zoom:r.zoom||0,pitch:r.pitch||0,bearing:r.bearing||0}),t.gl){const e=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=e,t.gl)}const s=new this._MapClass(n);r.padding&&s.setPadding(r.padding),t.cursor&&(s.getCanvas().style.cursor=t.cursor),this._createShadowTransform(s);const i=s._render;s._render=e=>{this._inRender=!0,i.call(s,e),this._inRender=!1};const c=s._renderTaskQueue.run;s._renderTaskQueue.run=e=>{c.call(s._renderTaskQueue,e),this._onBeforeRepaint()},s.on("render",(()=>this._onAfterRepaint()));const l=s.fire;s.fire=this._fireEvent.bind(this,l),s.on("resize",(()=>{this._renderTransform.resize(s.transform.width,s.transform.height)})),s.on("styledata",(()=>{this._updateStyleComponents(this.props,{}),a(s.transform,this._renderTransform)})),s.on("sourcedata",(()=>this._updateStyleComponents(this.props,{})));for(const a in p)s.on(a,this._onPointerEvent);for(const a in f)s.on(a,this._onCameraEvent);for(const a in m)s.on(a,this._onEvent);this._map=s}recycle(){const e=this.map.getContainer().querySelector("[mapboxgl-children]");null===e||void 0===e||e.remove(),g.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){const t=function(e){const t=e.clone();return t.pixelsToGLUnits=e.pixelsToGLUnits,t}(e.transform);e.painter.transform=t,this._renderTransform=t}_updateSize(e){const{viewState:t}=e;if(t){const e=this._map;if(t.width!==e.transform.width||t.height!==e.transform.height)return e.resize(),!0}return!1}_updateViewState(e,t){if(this._internalUpdate)return!1;const o=this._map,n=this._renderTransform,{zoom:r,pitch:s,bearing:a}=n,l=o.isMoving();l&&(n.cameraElevationReference="sea");const u=c(n,{...i(o.transform),...e});if(l&&(n.cameraElevationReference="ground"),u&&t){const e=this._deferredEvents;e.move=!0,e.zoom||(e.zoom=r!==n.zoom),e.rotate||(e.rotate=a!==n.bearing),e.pitch||(e.pitch=s!==n.pitch)}return l||c(o.transform,e),u}_updateSettings(e,t){const o=this._map;let n=!1;for(const r of h)if(r in e&&!s(e[r],t[r])){n=!0;const t=o["set".concat(r[0].toUpperCase()).concat(r.slice(1))];null===t||void 0===t||t.call(o,e[r])}return n}_updateStyle(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==t.mapStyle){const{mapStyle:t=d,styleDiffing:o=!0}=e,n={diff:o};return"localIdeographFontFamily"in e&&(n.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(u(t),n),!0}return!1}_updateStyleComponents(e,t){const o=this._map;let n=!1;return o.isStyleLoaded()&&("light"in e&&o.setLight&&!s(e.light,t.light)&&(n=!0,o.setLight(e.light)),"fog"in e&&o.setFog&&!s(e.fog,t.fog)&&(n=!0,o.setFog(e.fog)),"terrain"in e&&o.setTerrain&&!s(e.terrain,t.terrain)&&(e.terrain&&!o.getSource(e.terrain.source)||(n=!0,o.setTerrain(e.terrain)))),n}_updateHandlers(e,t){var o,n;const r=this._map;let a=!1;for(const i of _){const c=null===(o=e[i])||void 0===o||o;s(c,null===(n=t[i])||void 0===n||n)||(a=!0,c?r[i].enable(c):r[i].disable())}return a}_queryRenderedFeatures(e){const t=this._map,o=t.transform,{interactiveLayerIds:n=[]}=this.props;try{return t.transform=this._renderTransform,t.queryRenderedFeatures(e,{layers:n.filter(t.getLayer.bind(t))})}catch(r){return[]}finally{t.transform=o}}_updateHover(e){var t;const{props:o}=this;if(o.interactiveLayerIds&&(o.onMouseMove||o.onMouseEnter||o.onMouseLeave)){const o=e.type,n=(null===(t=this._hoveredFeatures)||void 0===t?void 0:t.length)>0,r=this._queryRenderedFeatures(e.point),s=r.length>0;!s&&n&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=r,s&&!n&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=o}else this._hoveredFeatures=null}_fireEvent(e,t,o){const n=this._map,r=n.transform,s="string"===typeof t?t:t.type;return"move"===s&&this._updateViewState(this.props,!1),s in f&&("object"===typeof t&&(t.viewState=i(r)),this._map.isMoving())?(n.transform=this._renderTransform,e.call(n,t,o),n.transform=r,n):(e.call(n,t,o),n)}_onBeforeRepaint(){const e=this._map;this._internalUpdate=!0;for(const o in this._deferredEvents)this._deferredEvents[o]&&e.fire(o);this._internalUpdate=!1;const t=this._map.transform;e.transform=this._renderTransform,this._onAfterRepaint=()=>{a(this._renderTransform,t),e.transform=t}}}function y(){let e=null;if("undefined"!==typeof location){const t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||{NODE_ENV:"production",PUBLIC_URL:"/njs-lab-public-legacy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_OPEN_WEATHER_MAP_API_KEY:"bd30a8d327da510a2972cbbec887a1e2",REACT_APP_YOUTUBE_API_KEY:"AIzaSyAJmm-IhVl-84KQ0CSAK5Ka03dFBV2hhCs",REACT_APP_FIREBASE_API_KEY:"AIzaSyAsGNHXVPsIjOJA5eY5XY8sLEF11ispMJg",REACT_APP_FIREBASE_DOMAIN:"njs-lab.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"njs-lab",REACT_APP_FIREBASE_STORAGE_BUCKET:"njs-lab.appspot.com",REACT_APP_FIREBASE_MEASUREMENT_SENDER_ID:"438027774199",REACT_APP_FIREBASE_APP_ID:"1:438027774199:web:d12c3a33744a9d411a8bf2",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-VH51C7700D",REACT_APP_MAPBOX:"pk.eyJ1IjoiZGVzaWduanUiLCJhIjoiY2xhNGU0YWo4MDlhYzNwdHBwenVvang4eiJ9.P3sX4l_3KjdPeRRbVS1VVg",REACT_APP_GOOGLE_AI_STUDIO_KEY:"AIzaSyAC1CnqJgLitf9SkJpECyYT4-t7OqeL_hw",REACT_APP_DEEP_L:"b5fccb05-709f-43fd-9d40-ed692abab4fa:fx"}.MapboxAccessToken}catch(t){}try{e=e||{NODE_ENV:"production",PUBLIC_URL:"/njs-lab-public-legacy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_OPEN_WEATHER_MAP_API_KEY:"bd30a8d327da510a2972cbbec887a1e2",REACT_APP_YOUTUBE_API_KEY:"AIzaSyAJmm-IhVl-84KQ0CSAK5Ka03dFBV2hhCs",REACT_APP_FIREBASE_API_KEY:"AIzaSyAsGNHXVPsIjOJA5eY5XY8sLEF11ispMJg",REACT_APP_FIREBASE_DOMAIN:"njs-lab.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"njs-lab",REACT_APP_FIREBASE_STORAGE_BUCKET:"njs-lab.appspot.com",REACT_APP_FIREBASE_MEASUREMENT_SENDER_ID:"438027774199",REACT_APP_FIREBASE_APP_ID:"1:438027774199:web:d12c3a33744a9d411a8bf2",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-VH51C7700D",REACT_APP_MAPBOX:"pk.eyJ1IjoiZGVzaWduanUiLCJhIjoiY2xhNGU0YWo4MDlhYzNwdHBwenVvang4eiJ9.P3sX4l_3KjdPeRRbVS1VVg",REACT_APP_GOOGLE_AI_STUDIO_KEY:"AIzaSyAC1CnqJgLitf9SkJpECyYT4-t7OqeL_hw",REACT_APP_DEEP_L:"b5fccb05-709f-43fd-9d40-ed692abab4fa:fx"}.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(o){}return e}g.savedMaps=[];const E=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function v(e){if(!e)return null;const t=e.map,o={getMap:()=>t,getCenter:()=>e.transform.center,getZoom:()=>e.transform.zoom,getBearing:()=>e.transform.bearing,getPitch:()=>e.transform.pitch,getPadding:()=>e.transform.padding,getBounds:()=>e.transform.getBounds(),project:o=>{const n=t.transform;t.transform=e.transform;const r=t.project(o);return t.transform=n,r},unproject:o=>{const n=t.transform;t.transform=e.transform;const r=t.unproject(o);return t.transform=n,r},queryTerrainElevation:(o,n)=>{const r=t.transform;t.transform=e.transform;const s=t.queryTerrainElevation(o,n);return t.transform=r,s},queryRenderedFeatures:(o,n)=>{const r=t.transform;t.transform=e.transform;const s=t.queryRenderedFeatures(o,n);return t.transform=r,s}};for(const n of function(e){const t=new Set;let o=e;for(;o;){for(const n of Object.getOwnPropertyNames(o))"_"!==n[0]&&"function"===typeof e[n]&&"fire"!==n&&"setEventedParent"!==n&&t.add(n);o=Object.getPrototypeOf(o)}return Array.from(t)}(t))n in o||E.includes(n)||(o[n]=t[n].bind(t));return o}const P="undefined"!==typeof document?n.useLayoutEffect:n.useEffect,A=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];const S=n.createContext(null);function b(e,t,o){const s=(0,n.useContext)(r),[a,i]=(0,n.useState)(null),c=(0,n.useRef)(),{current:l}=(0,n.useRef)({mapLib:null,map:null});(0,n.useEffect)((()=>{const t=e.mapLib;let n,r=!0;return Promise.resolve(t||o).then((t=>{if(!r)return;if(!t)throw new Error("Invalid mapLib");const o="Map"in t?t:t.default;if(!o.Map)throw new Error("Invalid mapLib");if(function(e,t){for(const n of A)n in t&&(e[n]=t[n]);const{RTLTextPlugin:o="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=t;o&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(o,(e=>{e&&console.error(e)}),!1)}(o,e),o.supported&&!o.supported(e))throw new Error("Map is not supported by this browser");e.reuseMaps&&(n=g.reuse(e,c.current)),n||(n=new g(o.Map,e,c.current)),l.map=v(n),l.mapLib=o,i(n),null===s||void 0===s||s.onMapMount(l.map,e.id)})).catch((t=>{const{onError:o}=e;o?o({type:"error",target:null,originalEvent:null,error:t}):console.error(t)})),()=>{r=!1,n&&(null===s||void 0===s||s.onMapUnmount(e.id),e.reuseMaps?n.recycle():n.destroy())}}),[]),P((()=>{a&&a.setProps(e)})),(0,n.useImperativeHandle)(t,(()=>l.map),[a]);const u=(0,n.useMemo)((()=>({position:"relative",width:"100%",height:"100%",...e.style})),[e.style]);return n.createElement("div",{id:e.id,ref:c,style:u},a&&n.createElement(S.Provider,{value:l},n.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},e.children)))}var C=o(54164);const R=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function T(e,t){if(!e||!t)return;const o=e.style;for(const n in t){const e=t[n];Number.isFinite(e)&&!R.test(n)?o[n]="".concat(e,"px"):o[n]=e}}const L=(0,n.memo)((0,n.forwardRef)((function(e,t){const{map:o,mapLib:r}=(0,n.useContext)(S),s=(0,n.useRef)({props:e});s.current.props=e;const a=(0,n.useMemo)((()=>{let t=!1;n.Children.forEach(e.children,(e=>{e&&(t=!0)}));const o={...e,element:t?document.createElement("div"):null},i=new r.Marker(o);return i.setLngLat([e.longitude,e.latitude]),i.getElement().addEventListener("click",(e=>{var t,o;null===(o=(t=s.current.props).onClick)||void 0===o||o.call(t,{type:"click",target:i,originalEvent:e})})),i.on("dragstart",(e=>{var t,o;const n=e;n.lngLat=a.getLngLat(),null===(o=(t=s.current.props).onDragStart)||void 0===o||o.call(t,n)})),i.on("drag",(e=>{var t,o;const n=e;n.lngLat=a.getLngLat(),null===(o=(t=s.current.props).onDrag)||void 0===o||o.call(t,n)})),i.on("dragend",(e=>{var t,o;const n=e;n.lngLat=a.getLngLat(),null===(o=(t=s.current.props).onDragEnd)||void 0===o||o.call(t,n)})),i}),[]);(0,n.useEffect)((()=>(a.addTo(o.getMap()),()=>{a.remove()})),[]);const{longitude:i,latitude:c,offset:l,style:u,draggable:d=!1,popup:p=null,rotation:f=0,rotationAlignment:m="auto",pitchAlignment:h="auto"}=e;return(0,n.useEffect)((()=>{T(a.getElement(),u)}),[u]),(0,n.useImperativeHandle)(t,(()=>a),[]),a.getLngLat().lng===i&&a.getLngLat().lat===c||a.setLngLat([i,c]),l&&!function(e,t){const o=Array.isArray(e)?e[0]:e?e.x:0,n=Array.isArray(e)?e[1]:e?e.y:0,r=Array.isArray(t)?t[0]:t?t.x:0,s=Array.isArray(t)?t[1]:t?t.y:0;return o===r&&n===s}(a.getOffset(),l)&&a.setOffset(l),a.isDraggable()!==d&&a.setDraggable(d),a.getRotation()!==f&&a.setRotation(f),a.getRotationAlignment()!==m&&a.setRotationAlignment(m),a.getPitchAlignment()!==h&&a.setPitchAlignment(h),a.getPopup()!==p&&a.setPopup(p),(0,C.createPortal)(e.children,a.getElement())})));function M(e){return new Set(e?e.trim().split(/\s+/):[])}(0,n.memo)((0,n.forwardRef)((function(e,t){const{map:o,mapLib:r}=(0,n.useContext)(S),a=(0,n.useMemo)((()=>document.createElement("div")),[]),i=(0,n.useRef)({props:e});i.current.props=e;const c=(0,n.useMemo)((()=>{const t={...e},o=new r.Popup(t);return o.setLngLat([e.longitude,e.latitude]),o.once("open",(e=>{var t,o;null===(o=(t=i.current.props).onOpen)||void 0===o||o.call(t,e)})),o}),[]);if((0,n.useEffect)((()=>{const e=e=>{var t,o;null===(o=(t=i.current.props).onClose)||void 0===o||o.call(t,e)};return c.on("close",e),c.setDOMContent(a).addTo(o.getMap()),()=>{c.off("close",e),c.isOpen()&&c.remove()}}),[]),(0,n.useEffect)((()=>{T(c.getElement(),e.style)}),[e.style]),(0,n.useImperativeHandle)(t,(()=>c),[]),c.isOpen()&&(c.getLngLat().lng===e.longitude&&c.getLngLat().lat===e.latitude||c.setLngLat([e.longitude,e.latitude]),e.offset&&!s(c.options.offset,e.offset)&&c.setOffset(e.offset),c.options.anchor===e.anchor&&c.options.maxWidth===e.maxWidth||(c.options.anchor=e.anchor,c.setMaxWidth(e.maxWidth)),c.options.className!==e.className)){const t=M(c.options.className),o=M(e.className);for(const e of t)o.has(e)||c.removeClassName(e);for(const e of o)t.has(e)||c.addClassName(e);c.options.className=e.className}return(0,C.createPortal)(e.children,a)})));const I=function(e,t,o,r){const s=(0,n.useContext)(S),a=(0,n.useMemo)((()=>e(s)),[]);return(0,n.useEffect)((()=>{const e=r||o||t,n="function"===typeof t&&"function"===typeof o?t:null,i="function"===typeof o?o:"function"===typeof t?t:null,{map:c}=s;return c.hasControl(a)||(c.addControl(a,null===e||void 0===e?void 0:e.position),n&&n(s)),()=>{i&&i(s),c.hasControl(a)&&c.removeControl(a)}}),[]),a};(0,n.memo)((function(e){const t=I((t=>{let{mapLib:o}=t;return new o.AttributionControl(e)}),{position:e.position});return(0,n.useEffect)((()=>{T(t._container,e.style)}),[e.style]),null}));(0,n.memo)((function(e){const t=I((t=>{let{mapLib:o}=t;return new o.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})}),{position:e.position});return(0,n.useEffect)((()=>{T(t._controlContainer,e.style)}),[e.style]),null}));(0,n.memo)((0,n.forwardRef)((function(e,t){const o=(0,n.useRef)({props:e}),r=I((t=>{let{mapLib:n}=t;const r=new n.GeolocateControl(e),s=r._setupUI;return r._setupUI=e=>{r._container.hasChildNodes()||s(e)},r.on("geolocate",(e=>{var t,n;null===(n=(t=o.current.props).onGeolocate)||void 0===n||n.call(t,e)})),r.on("error",(e=>{var t,n;null===(n=(t=o.current.props).onError)||void 0===n||n.call(t,e)})),r.on("outofmaxbounds",(e=>{var t,n;null===(n=(t=o.current.props).onOutOfMaxBounds)||void 0===n||n.call(t,e)})),r.on("trackuserlocationstart",(e=>{var t,n;null===(n=(t=o.current.props).onTrackUserLocationStart)||void 0===n||n.call(t,e)})),r.on("trackuserlocationend",(e=>{var t,n;null===(n=(t=o.current.props).onTrackUserLocationEnd)||void 0===n||n.call(t,e)})),r}),{position:e.position});return o.current.props=e,(0,n.useImperativeHandle)(t,(()=>r),[]),(0,n.useEffect)((()=>{T(r._container,e.style)}),[e.style]),null})));(0,n.memo)((function(e){const t=I((t=>{let{mapLib:o}=t;return new o.NavigationControl(e)}),{position:e.position});return(0,n.useEffect)((()=>{T(t._container,e.style)}),[e.style]),null}));(0,n.memo)((function(e){const t=I((t=>{let{mapLib:o}=t;return new o.ScaleControl(e)}),{position:e.position}),o=(0,n.useRef)(e),r=o.current;o.current=e;const{style:s}=e;return void 0!==e.maxWidth&&e.maxWidth!==r.maxWidth&&(t.options.maxWidth=e.maxWidth),void 0!==e.unit&&e.unit!==r.unit&&t.setUnit(e.unit),(0,n.useEffect)((()=>{T(t._container,s)}),[s]),null}));function x(e,t){if(!e)throw new Error(t)}let w=0;const O=function(e){const t=(0,n.useContext)(S).map.getMap(),o=(0,n.useRef)(e),[,r]=(0,n.useState)(0),a=(0,n.useMemo)((()=>e.id||"jsx-layer-".concat(w++)),[]);if((0,n.useEffect)((()=>{if(t){const e=()=>r((e=>e+1));return t.on("styledata",e),e(),()=>{t.off("styledata",e),t.style&&t.style._loaded&&t.getLayer(a)&&t.removeLayer(a)}}}),[t]),t&&t.style&&t.getLayer(a))try{!function(e,t,o,n){if(x(o.id===n.id,"layer id changed"),x(o.type===n.type,"layer type changed"),"custom"===o.type||"custom"===n.type)return;const{layout:r={},paint:a={},filter:i,minzoom:c,maxzoom:l,beforeId:u}=o;if(u!==n.beforeId&&e.moveLayer(t,u),r!==n.layout){const o=n.layout||{};for(const n in r)s(r[n],o[n])||e.setLayoutProperty(t,n,r[n]);for(const n in o)r.hasOwnProperty(n)||e.setLayoutProperty(t,n,void 0)}if(a!==n.paint){const o=n.paint||{};for(const n in a)s(a[n],o[n])||e.setPaintProperty(t,n,a[n]);for(const n in o)a.hasOwnProperty(n)||e.setPaintProperty(t,n,void 0)}s(i,n.filter)||e.setFilter(t,i),c===n.minzoom&&l===n.maxzoom||e.setLayerZoomRange(t,c,l)}(t,a,e,o.current)}catch(i){console.warn(i)}else!function(e,t,o){if(e.style&&e.style._loaded&&(!("source"in o)||e.getSource(o.source))){const n={...o,id:t};delete n.beforeId,e.addLayer(n,o.beforeId)}}(t,a,e);return o.current=e,null};let z=0;const F=function(e){const t=(0,n.useContext)(S).map.getMap(),o=(0,n.useRef)(e),[,r]=(0,n.useState)(0),a=(0,n.useMemo)((()=>e.id||"jsx-source-".concat(z++)),[]);(0,n.useEffect)((()=>{if(t){const e=()=>setTimeout((()=>r((e=>e+1))),0);return t.on("styledata",e),e(),()=>{var o;if(t.off("styledata",e),t.style&&t.style._loaded&&t.getSource(a)){const e=null===(o=t.getStyle())||void 0===o?void 0:o.layers;if(e)for(const o of e)o.source===a&&t.removeLayer(o.id);t.removeSource(a)}}}}),[t]);let i=t&&t.style&&t.getSource(a);return i?function(e,t,o){x(t.id===o.id,"source id changed"),x(t.type===o.type,"source type changed");let n="",r=0;for(const i in t)"children"===i||"id"===i||s(o[i],t[i])||(n=i,r++);if(!r)return;const a=t.type;if("geojson"===a)e.setData(t.data);else if("image"===a)e.updateImage({url:t.url,coordinates:t.coordinates});else if("setCoordinates"in e&&1===r&&"coordinates"===n)e.setCoordinates(t.coordinates);else if("setUrl"in e)switch(n){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles)}else console.warn("Unable to update <Source> prop: ".concat(n))}(i,e,o.current):i=function(e,t,o){if(e.style&&e.style._loaded){const n={...o};return delete n.id,delete n.children,e.addSource(t,n),e.getSource(t)}return null}(t,a,e),o.current=e,i&&n.Children.map(e.children,(e=>e&&(0,n.cloneElement)(e,{source:a})))||null};const D=Promise.resolve().then(o.t.bind(o,5483,23)),j=n.forwardRef((function(e,t){return b(e,t,D)})),B=L,U=O,N=F,k=j},43161:()=>{}}]);
//# sourceMappingURL=94989.abe58248.chunk.js.map