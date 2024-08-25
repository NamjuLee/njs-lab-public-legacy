"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1706],{1706:function(t,n,e){e.d(n,{E:function(){return B},G:function(){return P},a:function(){return q},b:function(){return U},c:function(){return M},d:function(){return K},e:function(){return _},f:function(){return G},g:function(){return z},h:function(){return O},i:function(){return Z},j:function(){return L},k:function(){return T},l:function(){return x},m:function(){return m},n:function(){return k},o:function(){return Y},q:function(){return $},r:function(){return J},s:function(){return Q},t:function(){return H},u:function(){return tt},w:function(){return tn},y:function(){return W}});var r=e(70910);e(90709);/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 *//*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var o=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],i=o.join(","),u="undefined"==typeof Element,a=u?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!u&&Element.prototype.getRootNode?function(t){var n;return null==t?void 0:null===(n=t.getRootNode)||void 0===n?void 0:n.call(t)}:function(t){return null==t?void 0:t.ownerDocument},c=function t(n,e){void 0===e&&(e=!0);var r,o=null==n?void 0:null===(r=n.getAttribute)||void 0===r?void 0:r.call(n,"inert");return""===o||"true"===o||e&&n&&t(n.parentNode)},f=function(t){var n,e=null==t?void 0:null===(n=t.getAttribute)||void 0===n?void 0:n.call(t,"contenteditable");return""===e||"true"===e},d=function(t,n,e){if(c(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(i));return n&&a.call(t,i)&&r.unshift(t),r=r.filter(e)},s=function t(n,e,r){for(var o=[],u=Array.from(n);u.length;){var l=u.shift();if(!c(l,!1)){if("SLOT"===l.tagName){var f=l.assignedElements(),d=t(f.length?f:l.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:l,candidates:d})}else{a.call(l,i)&&r.filter(l)&&(e||!n.includes(l))&&o.push(l);var s=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),p=!c(s,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(s&&p){var m=t(!0===s?l.children:s.children,!0,r);r.flatten?o.push.apply(o,m):o.push({scopeParent:l,candidates:m})}else u.unshift.apply(u,l.children)}}}return o},p=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},m=function(t){if(!t)throw Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||f(t))&&!p(t)?0:t.tabIndex},h=function(t,n){var e=m(t);return e<0&&n&&!p(t)?0:e},v=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},y=function(t){return"INPUT"===t.tagName},g=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]},w=function(t){if(!t.name)return!0;var n,e=t.form||l(t),r=function(t){return e.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)n=r(window.CSS.escape(t.name));else try{n=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var o=g(n,t.form);return!o||o===t},S=function(t){var n,e,r,o,i,u,a,c=t&&l(t),f=null===(n=c)||void 0===n?void 0:n.host,d=!1;if(c&&c!==t)for(d=!!(null!==(e=f)&&void 0!==e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(f)||null!=t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!d&&f;)d=!!(null!==(u=f=null===(i=c=l(f))||void 0===i?void 0:i.host)&&void 0!==u&&null!==(a=u.ownerDocument)&&void 0!==a&&a.contains(f));return d},E=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return 0===e&&0===r},N=function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=a.call(t,"details>summary:first-of-type")?t.parentElement:t;if(a.call(o,"details:not([open]) *"))return!0;if(e&&"full"!==e&&"legacy-full"!==e){if("non-zero-area"===e)return E(t)}else{if("function"==typeof r){for(var i=t;t;){var u=t.parentElement,c=l(t);if(u&&!u.shadowRoot&&!0===r(u))return E(t);t=t.assignedSlot?t.assignedSlot:u||c===t.ownerDocument?u:c.host}t=i}if(S(t))return!t.getClientRects().length;if("legacy-full"!==e)return!0}return!1},b=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if("FIELDSET"===n.tagName&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if("LEGEND"===r.tagName)return!!a.call(n,"fieldset[disabled] *")||!r.contains(t)}return!0}n=n.parentElement}return!1},A=function(t,n){return!(n.disabled||c(n)||y(n)&&"hidden"===n.type||N(n,t)||"DETAILS"===n.tagName&&Array.prototype.slice.apply(n.children).some(function(t){return"SUMMARY"===t.tagName})||b(n))},R=function(t,n){var e;return!(y(e=n)&&"radio"===e.type&&!w(e)||0>m(n))&&!!A(t,n)},C=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!isNaN(n)||n>=0},I=function t(n){var e=[],r=[];return n.forEach(function(n,o){var i=!!n.scopeParent,u=i?n.scopeParent:n,a=h(u,i),l=i?t(n.candidates):u;0===a?i?e.push.apply(e,l):e.push(u):r.push({documentOrder:o,tabIndex:a,item:n,isScope:i,content:l})}),r.sort(v).reduce(function(t,n){return n.isScope?t.push.apply(t,n.content):t.push(n.content),t},[]).concat(e)},L=function(t,n){return I((n=n||{}).getShadowRoot?s([t],n.includeContainer,{filter:R.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:C}):d(t,n.includeContainer,R.bind(null,n)))},T=function(t,n){return(n=n||{}).getShadowRoot?s([t],n.includeContainer,{filter:A.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):d(t,n.includeContainer,A.bind(null,n))},x=function(t,n){if(n=n||{},!t)throw Error("No node provided");return!1!==a.call(t,i)&&R(n,t)},D=o.concat("iframe").join(","),O=function(t,n){if(n=n||{},!t)throw Error("No node provided");return!1!==a.call(t,D)&&A(n,t)};let k={getShadowRoot:!0};function P(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,r.g)()}`:""}function q(t){let n=M(t,"[dir]");return n?n.getAttribute("dir"):"ltr"}function F(t){return t.getRootNode()}function j(t){return t.host||null}function $(t,{selector:n,id:e}){return function t(r){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);let o=F(r),i=e?"getElementById"in o?o.getElementById(e):null:n?o.querySelector(n):null,u=j(o);return i||(u?t(u):null)}(t)}function M(t,n){return function t(e){return e?e.closest(n)||t(j(F(e))):null}(t)}function U(t,n){return!!function t(n,e){if(!n)return;let r=e(n);if(void 0!==r)return r;let{parentNode:o}=n;return t(o instanceof ShadowRoot?o.host:o,e)}(n,n=>n===t||void 0)}async function _(t){if(t)return"function"==typeof t?.setFocus?t.setFocus():t.focus()}function B(t){if(t)return L(t,k)[0]??t}function G(t){B(t)?.focus()}let X=":not([slot])";function z(t,n,e){n&&!Array.isArray(n)&&"string"!=typeof n&&(e=n,n=null);let r=n?Array.isArray(n)?n.map(t=>`[slot="${t}"]`).join(","):`[slot="${n}"]`:X;return e?.all?function(t,n,e){let r=n===X?V(t,X):Array.from(t.querySelectorAll(n));r=e&&!1===e.direct?r:r.filter(n=>n.parentElement===t),r=e?.matches?r.filter(t=>t?.matches(e.matches)):r;let o=e?.selector;return o?r.map(t=>Array.from(t.querySelectorAll(o))).reduce((t,n)=>[...t,...n],[]).filter(t=>!!t):r}(t,r,e):function(t,n,e){let r=n===X?V(t,X)[0]||null:t.querySelector(n);r=e&&!1===e.direct?r:r?.parentElement===t?r:null,r=e?.matches?r?.matches(e.matches)?r:null:r;let o=e?.selector;return o?r?.querySelector(o):r}(t,r,e)}function V(t,n){return t?Array.from(t.children||[]).filter(t=>t?.matches(n)):[]}function Y(t,n,e){return"string"==typeof n&&""!==n?n:""===n?t[e]:void 0}function H(t){return(!!t).toString()}function J(t){return K(t)||!!t.currentTarget.assignedNodes({flatten:!0}).filter(t=>t.nodeType===Node.TEXT_NODE).map(t=>t.textContent).join("").trim()}function K(t){return!!Q(t).length}function Q(t,n){return function(t,n){let e=t.assignedElements({flatten:!0});return n?e.filter(t=>t.matches(n)):e}(t.target,n)}function W(t){return!!(t.isPrimary&&0===t.button)}function Z(t){return 0===t.detail}function tt(t,n){if(t.parentNode!==n.parentNode)return!1;let e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}async function tn(t,n,e,r){return te(t,n,"transition",e,r)}async function te(t,n,e,r,o){let i=window.getComputedStyle(t),u="transition"===e?i.transitionDuration:i.animationDuration,a="transition"===e?i.transitionProperty:i.animationName,l=u.split(","),c=l[a.split(",").indexOf(n)]??l[0];if("0s"===c){r?.(),o?.();return}let f="transition"===e?"transitionstart":"animationstart",d="transition"===e?"transitionend":"animationend",s="transition"===e?"transitioncancel":"animationcancel";return new Promise(e=>{let i=window.setTimeout(()=>{t.removeEventListener(f,u),t.removeEventListener(d,a),t.removeEventListener(s,a),r?.(),o?.(),e()},1e3*parseFloat(c));function u(e){e.target===t&&tr(e)===n&&(window.clearTimeout(i),t.removeEventListener(f,u),r?.())}function a(r){r.target===t&&tr(r)===n&&(t.removeEventListener(d,a),t.removeEventListener(s,a),o?.(),e())}t.addEventListener(f,u),t.addEventListener(d,a),t.addEventListener(s,a)})}function tr(t){return"propertyName"in t?t.propertyName:t.animationName}},70910:function(t,n,e){e.d(n,{g:function(){return r}});let r=()=>[2,1,1,1,3].map(t=>{let n="";for(let e=0;e<t;e++)n+=((1+Math.random())*65536|0).toString(16).substring(1);return n}).join("-")}}]);