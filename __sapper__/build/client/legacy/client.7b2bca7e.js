function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,n,r,o=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function y(){}function g(){}function b(){}var $={};$[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(O([])));x&&x!==r&&o.call(x,i)&&($=x);var E=b.prototype=y.prototype=Object.create($);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,c,u){var f=l(e[a],e,i);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(p).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(f.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return g.prototype=E.constructor=b,b.constructor=g,g.displayName=f(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},_(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(E),f(E,u,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),f=o.call(i,"finallyLoc");if(u&&f){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function y(t,e){for(var n in e)t[n]=e[n];return t}function g(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(g)}function w(t){return"function"==typeof t}function x(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function E(t,e,n,r){return t[1]&&r?y(n.ctx.slice(),t[1](r(e))):n.ctx}function _(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var f=E(n,r,o,c);e.p(f,u)}}function S(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function O(){return j(" ")}function P(){return j("")}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t){return Array.from(t.childNodes)}function I(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];n[u.name]||c.push(u.name)}for(var f=0;f<c.length;f++)a.removeAttribute(c[f]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):R(e)}function T(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return j(e)}function C(t){return T(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function D(t){r=t}function z(){if(!r)throw new Error("Function called outside component initialization");return r}var G=[],F=[],J=[],M=[],Y=Promise.resolve(),B=!1;function V(t){J.push(t)}var H=!1,K=new Set;function W(){if(!H){H=!0;do{for(var t=0;t<G.length;t+=1){var e=G[t];D(e),X(e.$$)}for(D(null),G.length=0;F.length;)F.pop()();for(var n=0;n<J.length;n+=1){var r=J[n];K.has(r)||(K.add(r),r())}J.length=0}while(G.length);for(;M.length;)M.pop()();B=!1,H=!1,K.clear()}}function X(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}var Q,Z=new Set;function tt(){Q={r:0,c:[],p:Q}}function et(){Q.r||$(Q.c),Q=Q.p}function nt(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function rt(t,e,n,r){if(t&&t.o){if(Z.has(t))return;Z.add(t),Q.c.push((function(){Z.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ot(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var f in c)o[f]||(n[f]=c[f],o[f]=1);t[a]=c}else for(var s in i)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function at(e){return"object"===t(e)&&null!==e?e:{}}function it(t){t&&t.c()}function ct(t,e){t&&t.l(e)}function ut(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,c=r.after_update;o&&o.m(e,n),V((function(){var e=a.map(g).filter(w);i?i.push.apply(i,h(e)):$(e),t.$$.on_mount=[]})),c.forEach(V)}function ft(t,e){var n=t.$$;null!==n.fragment&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(G.push(t),B||(B=!0,Y.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(t,e,n,o,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=r;D(t);var f=e.props||{},s=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(s.ctx=n?n(t,f,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&a(s.ctx[e],s.ctx[e]=r)&&(!s.skip_bound&&s.bound[e]&&s.bound[e](r),l&&st(t,e)),n})):[],s.update(),l=!0,$(s.before_update),s.fragment=!!o&&o(s.ctx),e.target){if(e.hydrate){var p=N(e.target);s.fragment&&s.fragment.l(p),p.forEach(k)}else s.fragment&&s.fragment.c();e.intro&&nt(t.$$.fragment),ut(t,e.target,e.anchor),W()}D(u)}var pt=function(){function t(){v(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){ft(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&d(e.prototype,n),r&&d(e,r),t}(),ht=[];function vt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if(x(t,n)&&(t=n,e)){for(var o=!ht.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),ht.push(i,t)}if(o){for(var c=0;c<ht.length;c+=2)ht[c][0](ht[c+1]);ht.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||m),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var dt={};function mt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function yt(t){var e,n,r,o,a,i,u,f,s,l,p,h,v,d,y,g,b,$,w;return{c:function(){e=R("nav"),n=R("ul"),r=R("li"),o=R("img"),a=O(),i=R("li"),u=R("a"),f=j("Home"),l=O(),p=R("li"),h=R("a"),v=j("Contest"),y=O(),g=R("ul"),b=R("li"),$=R("a"),w=j("Yosep Novento Nugroho"),this.h()},l:function(t){var c=N(e=I(t,"NAV",{class:!0})),s=N(n=I(c,"UL",{class:!0})),d=N(r=I(s,"LI",{class:!0}));o=I(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(k),a=C(s);var m=N(i=I(s,"LI",{class:!0})),x=N(u=I(m,"A",{"aria-current":!0,href:!0,class:!0}));f=T(x,"Home"),x.forEach(k),m.forEach(k),l=C(s);var E=N(p=I(s,"LI",{class:!0})),_=N(h=I(E,"A",{"aria-current":!0,href:!0,class:!0}));v=T(_,"Contest"),_.forEach(k),E.forEach(k),s.forEach(k),y=C(c);var S=N(g=I(c,"UL",{class:!0})),L=N(b=I(S,"LI",{class:!0})),R=N($=I(L,"A",{href:!0,class:!0}));w=T(R,"Yosep Novento Nugroho"),R.forEach(k),L.forEach(k),S.forEach(k),c.forEach(k),this.h()},h:function(){o.src!=="logo.png"&&A(o,"src","logo.png"),A(o,"alt","ULTRAG"),A(o,"class","svelte-cz2btp"),A(r,"class","svelte-cz2btp"),A(u,"aria-current",s=void 0===t[0]?"page":void 0),A(u,"href","."),A(u,"class","svelte-cz2btp"),A(i,"class","svelte-cz2btp"),A(h,"aria-current",d="contest"===t[0]?"page":void 0),A(h,"href","contest"),A(h,"class","svelte-cz2btp"),A(p,"class","svelte-cz2btp"),A(n,"class","svelte-cz2btp"),A($,"href","profile"),A($,"class","svelte-cz2btp"),A(b,"class","svelte-cz2btp"),A(g,"class","svelte-cz2btp"),A(e,"class","flex justify-between svelte-cz2btp")},m:function(t,c){L(t,e,c),S(e,n),S(n,r),S(r,o),S(n,a),S(n,i),S(i,u),S(u,f),S(n,l),S(n,p),S(p,h),S(h,v),S(e,y),S(e,g),S(g,b),S(b,$),S($,w)},p:function(t,e){var n=c(e,1)[0];1&n&&s!==(s=void 0===t[0]?"page":void 0)&&A(u,"aria-current",s),1&n&&d!==(d="contest"===t[0]?"page":void 0)&&A(h,"aria-current",d)},i:m,o:m,d:function(t){t&&k(e)}}}function gt(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var bt=function(t){s(n,pt);var e=mt(n);function n(t){var r;return v(this,n),lt(l(r=e.call(this)),t,gt,yt,x,{segment:0}),r}return n}();function $t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function wt(t){var e,n;return{c:function(){e=R("div"),n=j("Copyright 2020 Computing Laboratory"),this.h()},l:function(t){var r=N(e=I(t,"DIV",{class:!0}));n=T(r,"Copyright 2020 Computing Laboratory"),r.forEach(k),this.h()},h:function(){A(e,"class","pl-6 py-4 svelte-3h0kml")},m:function(t,r){L(t,e,r),S(e,n)},p:m,i:m,o:m,d:function(t){t&&k(e)}}}var xt=function(t){s(n,pt);var e=$t(n);function n(t){var r;return v(this,n),lt(l(r=e.call(this)),t,null,wt,x,{}),r}return n}();function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function _t(t){var e,n,r,o,a,i;e=new bt({props:{segment:t[0]}});var u=t[2].default,f=function(t,e,n,r){if(t){var o=E(t,e,n,r);return t[0](o)}}(u,t,t[1],null);return a=new xt({}),{c:function(){it(e.$$.fragment),n=O(),r=R("main"),f&&f.c(),o=O(),it(a.$$.fragment),this.h()},l:function(t){ct(e.$$.fragment,t),n=C(t);var i=N(r=I(t,"MAIN",{class:!0}));f&&f.l(i),i.forEach(k),o=C(t),ct(a.$$.fragment,t),this.h()},h:function(){A(r,"class","svelte-4n331b")},m:function(t,c){ut(e,t,c),L(t,n,c),L(t,r,c),f&&f.m(r,null),L(t,o,c),ut(a,t,c),i=!0},p:function(t,n){var r=c(n,1)[0],o={};1&r&&(o.segment=t[0]),e.$set(o),f&&f.p&&2&r&&_(f,u,t,t[1],r,null,null)},i:function(t){i||(nt(e.$$.fragment,t),nt(f,t),nt(a.$$.fragment,t),i=!0)},o:function(t){rt(e.$$.fragment,t),rt(f,t),rt(a.$$.fragment,t),i=!1},d:function(t){ft(e,t),t&&k(n),t&&k(r),f&&f.d(t),t&&k(o),ft(a,t)}}}function St(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var Lt=function(t){s(n,pt);var e=Et(n);function n(t){var r;return v(this,n),lt(l(r=e.call(this)),t,St,_t,x,{segment:0}),r}return n}();function kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Rt(t){var e,n,r=t[1].stack+"";return{c:function(){e=R("pre"),n=j(r)},l:function(t){var o=N(e=I(t,"PRE",{}));n=T(o,r),o.forEach(k)},m:function(t,r){L(t,e,r),S(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&U(n,r)},d:function(t){t&&k(e)}}}function jt(t){var e,n,r,o,a,i,u,f,s,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Rt(t);return{c:function(){n=O(),r=R("h1"),o=j(t[0]),a=O(),i=R("p"),u=j(l),f=O(),p&&p.c(),s=P(),this.h()},l:function(e){q('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(k),n=C(e);var c=N(r=I(e,"H1",{class:!0}));o=T(c,t[0]),c.forEach(k),a=C(e);var h=N(i=I(e,"P",{class:!0}));u=T(h,l),h.forEach(k),f=C(e),p&&p.l(e),s=P(),this.h()},h:function(){A(r,"class","svelte-8od9u6"),A(i,"class","svelte-8od9u6")},m:function(t,e){L(t,n,e),L(t,r,e),S(r,o),L(t,a,e),L(t,i,e),S(i,u),L(t,f,e),p&&p.m(t,e),L(t,s,e)},p:function(t,n){var r=c(n,1)[0];1&r&&e!==(e=t[0])&&(document.title=e),1&r&&U(o,t[0]),2&r&&l!==(l=t[1].message+"")&&U(u,l),t[2]&&t[1].stack?p?p.p(t,r):((p=Rt(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&k(n),t&&k(r),t&&k(a),t&&k(i),t&&k(f),p&&p.d(t),t&&k(s)}}}function Ot(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var Pt=function(t){s(n,pt);var e=kt(n);function n(t){var r;return v(this,n),lt(l(r=e.call(this)),t,Ot,jt,x,{status:0,error:1}),r}return n}();function At(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Nt(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=y(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&it(e.$$.fragment),n=P()},l:function(t){e&&ct(e.$$.fragment,t),n=P()},m:function(t,o){e&&ut(e,t,o),L(t,n,o),r=!0},p:function(t,r){var c=16&r?ot(o,[at(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){tt();var u=e;rt(u.$$.fragment,1,0,(function(){ft(u,1)})),et()}a?(it((e=new a(i())).$$.fragment),nt(e.$$.fragment,1),ut(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&nt(e.$$.fragment,t),r=!0)},o:function(t){e&&rt(e.$$.fragment,t),r=!1},d:function(t){t&&k(n),e&&ft(e,t)}}}function It(t){var e,n;return e=new Pt({props:{error:t[0],status:t[1]}}),{c:function(){it(e.$$.fragment)},l:function(t){ct(e.$$.fragment,t)},m:function(t,r){ut(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(nt(e.$$.fragment,t),n=!0)},o:function(t){rt(e.$$.fragment,t),n=!1},d:function(t){ft(e,t)}}}function Tt(t){var e,n,r,o,a=[It,Nt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=P()},l:function(t){n.l(t),r=P()},m:function(t,n){i[e].m(t,n),L(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(tt(),rt(i[u],1,1,(function(){i[u]=null})),et(),(n=i[e])||(n=i[e]=a[e](t)).c(),nt(n,1),n.m(r.parentNode,r))},i:function(t){o||(nt(n),o=!0)},o:function(t){rt(n),o=!1},d:function(t){i[e].d(t),t&&k(r)}}}function Ct(t){for(var e,n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Tt]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=y(o,r[a]);return e=new Lt({props:o}),{c:function(){it(e.$$.fragment)},l:function(t){ct(e.$$.fragment,t)},m:function(t,r){ut(e,t,r),n=!0},p:function(t,n){var o=c(n,1)[0],a=12&o?ot(r,[4&o&&{segment:t[2][0]},8&o&&at(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){n||(nt(e.$$.fragment,t),n=!0)},o:function(t){rt(e.$$.fragment,t),n=!1},d:function(t){ft(e,t)}}}function Ut(t,e,n){var r,o,a=e.stores,i=e.error,c=e.status,u=e.segments,f=e.level0,s=e.level1,l=void 0===s?null:s,p=e.notify;return function(t){z().$$.after_update.push(t)}(p),r=dt,o=a,z().$$.context.set(r,o),t.$$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,i=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,u=t.segments),"level0"in t&&n(3,f=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,p=t.notify)},[i,c,u,f,l,a,p]}var qt=function(t){s(n,pt);var e=At(n);function n(t){var r;return v(this,n),lt(l(r=e.call(this)),t,Ut,Ct,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Dt=[],zt=[{js:function(){return Promise.all([import("./index.a7035ecf.js"),__inject_styles(["client-c611d707.css","index-5d4547fb.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./contest.f776e617.js"),__inject_styles(["client-c611d707.css"])]).then((function(t){return t[0]}))}}],Gt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/contest\/?$/,parts:[{i:1}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ft(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function Jt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Mt,Yt=1;var Bt,Vt,Ht="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},Kt={};function Wt(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=c(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=r[1],a=r[2],i=void 0===a?"":a;"string"==typeof n[o]&&(n[o]=[n[o]]),"object"===t(n[o])?n[o].push(i):n[o]=i})),n}function Xt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Bt))return null;var e=t.pathname.slice(Bt.length);if(""===e&&(e="/"),!Dt.some((function(t){return t.test(e)})))for(var n=0;n<Gt.length;n+=1){var r=Gt[n],o=r.pattern.exec(e);if(o){var a=Wt(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function Qt(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Jt(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Xt(a);if(i)ee(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),Ht.pushState({id:Mt},"",a.href)}}}else location.hash||e.preventDefault()}}}function Zt(){return{x:pageXOffset,y:pageYOffset}}function te(t){if(Kt[Mt]=Zt(),t.state){var e=Xt(new URL(location.href));e?ee(e,t.state.id):location.href=location.href}else(function(t){Mt=t})(Yt=Yt+1),Ht.replaceState({id:Mt},"",location.href)}function ee(t,e,n,r){return Ft(this,void 0,void 0,o.mark((function a(){var i,c,u,f;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?Mt=e:(c=Zt(),Kt[Mt]=c,Mt=e=++Yt,Kt[Mt]=n?c:{x:0,y:0}),o.next=4,Vt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(u=Kt[e],r&&(f=document.getElementById(r.slice(1)))&&(u={x:0,y:f.getBoundingClientRect().top+scrollY}),Kt[Mt]=u,i||f?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),a)})))}function ne(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var re,oe=null;function ae(t){return oe&&oe.href===t.href?oe.promise:ke(t)}function ie(t){var e=Jt(t.target);e&&"prefetch"===e.rel&&function(t){var e=Xt(new URL(t,ne(document)));if(e)oe&&t===oe.href||(oe={href:t,promise:ke(e)}),oe.promise}(e.href)}function ce(t){clearTimeout(re),re=setTimeout((function(){ie(t)}),20)}function ue(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=Xt(new URL(t,ne(document)));return n?(Ht[e.replaceState?"replaceState":"pushState"]({id:Mt},"",t),ee(n,null,e.noscroll).then((function(){}))):(location.href=t,new Promise((function(t){})))}var fe,se,le,pe,he,ve,de,me,ye,ge="undefined"!=typeof __SAPPER__&&__SAPPER__,be=!1,$e=[],we="{}",xe={page:function(t){var e=vt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:vt(null),session:vt(ge&&ge.session)};function Ee(t,e){var n=t.error;return Object.assign({error:n},e)}function _e(t){return Ft(this,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fe&&xe.preloading.set(!0),n=ae(t),r=se={},e.next=5,n;case 5:if(a=e.sent,i=a.redirect,r===se){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,ue(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=a.props,u=a.branch,e.next=17,Se(u,c,Ee(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function Se(t,e,n){return Ft(this,void 0,void 0,o.mark((function r(){return o.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(xe.page.set(n),xe.preloading.set(!1),!fe){r.next=6;break}fe.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:xe.page.subscribe},preloading:{subscribe:xe.preloading.subscribe},session:xe.session},r.next=9,le;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=xe.page.notify,fe=new qt({target:ve,props:e,hydrate:!0});case 13:$e=t,we=JSON.stringify(n.query),be=!0,he=!1;case 17:case"end":return r.stop()}}),r)})))}function Le(t,e,n,r){if(r!==we)return!0;var o=$e[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function ke(t){return Ft(this,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u,f,s,l,p,h,v,d=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,a=r.path.split("/").filter(Boolean),i=null,c={error:null,status:200,segments:[a[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},le||(f=function(){return{}},le=ge.preloaded[0]||f.call(u,{host:r.host,path:r.path,query:r.query,params:{}},pe)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Ft(d,void 0,void 0,o.mark((function i(){var f,s,d,m,y,g;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(f=a[n],Le(n,f,h,p)&&(v=!0),c.segments[l]=a[n+1],e){o.next=5;break}return o.abrupt("return",{segment:f});case 5:if(s=l++,he||v||!$e[n]||$e[n].part!==e.i){o.next=8;break}return o.abrupt("return",$e[n]);case 8:return v=!1,o.next=11,zt[e.i].js();case 11:if(d=o.sent,m=d.default,y=d.preload,!be&&ge.preloaded[n+1]){o.next=25;break}if(!y){o.next=21;break}return o.next=18,y.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},pe);case 18:o.t0=o.sent,o.next=22;break;case 21:o.t0={};case 22:g=o.t0,o.next=26;break;case 25:g=ge.preloaded[n+1];case 26:return o.abrupt("return",c["level".concat(s)]={component:m,props:g,segment:f,match:h,part:e.i});case 27:case"end":return o.stop()}}),i)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,s=[];case 21:return e.abrupt("return",{redirect:i,props:c,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}xe.session.subscribe((function(t){return Ft(void 0,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(pe=t,be){e.next=3;break}return e.abrupt("return");case 3:return he=!0,n=Xt(new URL(location.href)),r=se={},e.next=8,ke(n);case 8:if(a=e.sent,i=a.redirect,c=a.props,u=a.branch,r===se){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,ue(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Se(u,c,Ee(c,n.page));case 21:case"end":return e.stop()}}),e)})))})),de={target:document.querySelector("#sapper")},me=de.target,ve=me,ye=ge.baseUrl,Bt=ye,Vt=_e,"scrollRestoration"in Ht&&(Ht.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Ht.scrollRestoration="auto"})),addEventListener("load",(function(){Ht.scrollRestoration="manual"})),addEventListener("click",Qt),addEventListener("popstate",te),addEventListener("touchstart",ie),addEventListener("mousemove",ce),ge.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=ge.session,a=ge.preloaded,i=ge.status,c=ge.error;le||(le=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:le},level1:{props:{status:i,error:c},component:Pt},segments:a},f=Wt(r);Se([],u,{host:e,path:n,query:f,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;Ht.replaceState({id:Yt},"",n);var r=Xt(new URL(location.href));if(r)return ee(r,Yt,!0,e)}));export{pt as S,s as _,u as a,p as b,v as c,l as d,O as e,R as f,k as g,C as h,lt as i,I as j,N as k,T as l,A as m,L as n,S as o,m as p,q,x as s,j as t};

import __inject_styles from './inject_styles.fe622066.js';