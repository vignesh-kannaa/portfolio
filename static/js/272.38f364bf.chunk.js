/*! For license information please see 272.38f364bf.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[272],{5272:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return i}});var o=n(1811),i=function(t){var e,n,i,l=10*-d,v=0,p=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(t){l=(0,o.u)(t),E(t)},L=function(){clearTimeout(i),i=void 0,e&&(g(!1),e=void 0)},w=function(t){e||b(a(t),t)},E=function(t){b(void 0,t)},b=function(t,n){if(!t||t!==e){clearTimeout(i),i=void 0;var a=(0,o.p)(n),c=a.x,f=a.y;if(e){if(h.has(e))throw new Error("internal error");e.classList.contains(s)||k(e,c,f),g(!0)}if(t){var d=h.get(t);d&&(clearTimeout(d),h.delete(t));var l=r(t)?0:u;t.classList.remove(s),i=setTimeout((function(){k(t,c,f),i=void 0}),l)}e=t}},k=function(t,e,o){if(v=Date.now(),t.classList.add(s),p){var i=c(t);null!==i&&(T(),n=i.addRipple(e,o))}},T=function(){void 0!==n&&(n.then((function(t){return t()})),n=void 0)},g=function(t){T();var n=e;if(n){var o=f-Date.now()+v;if(t&&o>0&&!r(n)){var i=setTimeout((function(){n.classList.remove(s),h.delete(n)}),f);h.set(n,i)}else n.classList.remove(s)}},C=document;C.addEventListener("ionGestureCaptured",L),C.addEventListener("touchstart",(function(t){l=(0,o.u)(t),w(t)}),!0),C.addEventListener("touchcancel",m,!0),C.addEventListener("touchend",m,!0),C.addEventListener("pointercancel",L,!0),C.addEventListener("mousedown",(function(t){if(2!==t.button){var e=(0,o.u)(t)-d;l<e&&w(t)}}),!0),C.addEventListener("mouseup",(function(t){var e=(0,o.u)(t)-d;l<e&&E(t)}),!0)},a=function(t){if(void 0===t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,f=200,d=2500}}]);
//# sourceMappingURL=272.38f364bf.chunk.js.map