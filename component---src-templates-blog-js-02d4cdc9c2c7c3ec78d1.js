(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{R8uD:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var l,a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||Function("return this")(),i=function(e){try{return!!e()}catch(t){return!0}},l=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!a.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:a},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},p={}.toString,E="".split,y=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return p.call(e).slice(8,-1)}(e)?E.call(e,""):Object(e)}:Object,h=function(e){return y(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},m=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!m(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!m(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!m(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!m(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},T={}.hasOwnProperty,g=function(e,t){return T.call(e,t)},b=u.document,O=m(b)&&m(b.createElement),S=function(e){return O?b.createElement(e):{}},_=!l&&!i((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,D={f:l?I:function(e,t){if(e=h(e),t=v(t,!0),_)try{return I(e,t)}catch(n){}if(g(e,t))return d(!s.f.call(e,t),e[t])}},N=function(e){if(!m(e))throw TypeError(String(e)+" is not an object");return e},A=Object.defineProperty,L={f:l?A:function(e,t,n){if(N(e),t=v(t,!0),N(n),_)try{return A(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},R=l?function(e,t,n){return L.f(e,t,d(1,n))}:function(e,t,n){return e[t]=n,e},w=function(e,t){try{R(u,e,t)}catch(n){u[e]=t}return t},j=u["__core-js_shared__"]||w("__core-js_shared__",{}),P=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return P.call(e)});var M,H,C,k=j.inspectSource,G=u.WeakMap,B="function"==typeof G&&/native code/.test(k(G)),Y=r((function(e){(e.exports=function(e,t){return j[e]||(j[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),x=0,K=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++x+K).toString(36)},F=Y("keys"),q=function(e){return F[e]||(F[e]=U(e))},V={},z=u.WeakMap;if(B){var Q=new z,W=Q.get,J=Q.has,X=Q.set;M=function(e,t){return X.call(Q,e,t),t},H=function(e){return W.call(Q,e)||{}},C=function(e){return J.call(Q,e)}}else{var Z=q("state");V[Z]=!0,M=function(e,t){return R(e,Z,t),t},H=function(e){return g(e,Z)?e[Z]:{}},C=function(e){return g(e,Z)}}var $={set:M,get:H,has:C,enforce:function(e){return C(e)?H(e):M(e,{})},getterFor:function(e){return function(t){var n;if(!m(t)||(n=H(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ee=r((function(e){var t=$.get,n=$.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var c=!!i&&!!i.unsafe,l=!!i&&!!i.enumerable,a=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||g(o,"name")||R(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==u?(c?!a&&e[t]&&(l=!0):delete e[t],l?e[t]=o:R(e,t,o)):l?e[t]=o:w(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||k(this)}))})),te=u,ne=function(e){return"function"==typeof e?e:void 0},re=function(e,t){return arguments.length<2?ne(te[e])||ne(u[e]):te[e]&&te[e][t]||u[e]&&u[e][t]},oe=Math.ceil,ue=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?ue:oe)(e)},ce=Math.min,le=Math.max,ae=Math.min,fe=function(e){return function(t,n,r){var o,u,i=h(t),c=(o=i.length)>0?ce(ie(o),9007199254740991):0,l=function(e,t){var n=ie(e);return n<0?le(n+t,0):ae(n,t)}(r,c);if(e&&n!=n){for(;c>l;)if((u=i[l++])!=u)return!0}else for(;c>l;l++)if((e||l in i)&&i[l]===n)return e||l||0;return!e&&-1}},se={includes:fe(!0),indexOf:fe(!1)},de=se.indexOf,pe=function(e,t){var n,r=h(e),o=0,u=[];for(n in r)!g(V,n)&&g(r,n)&&u.push(n);for(;t.length>o;)g(r,n=t[o++])&&(~de(u,n)||u.push(n));return u},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=Ee.concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return pe(e,ye)}},me={f:Object.getOwnPropertySymbols},ve=re("Reflect","ownKeys")||function(e){var t=he.f(N(e)),n=me.f;return n?t.concat(n(e)):t},Te=function(e,t){for(var n=ve(t),r=L.f,o=D.f,u=0;u<n.length;u++){var i=n[u];g(e,i)||r(e,i,o(t,i))}},ge=/#|\.prototype\./,be=function(e,t){var n=Se[Oe(e)];return n==Ie||n!=_e&&("function"==typeof t?i(t):!!t)},Oe=be.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},Se=be.data={},_e=be.NATIVE="N",Ie=be.POLYFILL="P",De=be,Ne=D.f,Ae=function(e,t){var n,r,o,i,c,l=e.target,a=e.global,f=e.stat;if(n=a?u:f?u[l]||w(l,{}):(u[l]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=Ne(n,r))&&c.value:n[r],!De(a?r:l+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Te(i,o)}(e.sham||o&&o.sham)&&R(i,"sham",!0),ee(n,r,i,e)}},Le=Object.keys||function(e){return pe(e,Ee)},Re=s.f,we=function(e){return function(t){for(var n,r=h(t),o=Le(r),u=o.length,i=0,c=[];u>i;)n=o[i++],l&&!Re.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},je={entries:we(!0),values:we(!1)}.values;Ae({target:"Object",stat:!0},{values:function(e){return je(e)}});te.Object.values;var Pe,Me=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),He=Me&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ce=Y("wks"),ke=u.Symbol,Ge=He?ke:ke&&ke.withoutSetter||U,Be=l?Object.defineProperties:function(e,t){N(e);for(var n,r=Le(t),o=r.length,u=0;o>u;)L.f(e,n=r[u++],t[n]);return e},Ye=re("document","documentElement"),xe=q("IE_PROTO"),Ke=function(){},Ue=function(e){return"<script>"+e+"<\/script>"},Fe=function(){try{Pe=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;Fe=Pe?function(e){e.write(Ue("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Pe):((t=S("iframe")).style.display="none",Ye.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Ue("document.F=Object")),e.close(),e.F);for(var n=Ee.length;n--;)delete Fe.prototype[Ee[n]];return Fe()};V[xe]=!0;var qe,Ve=Object.create||function(e,t){var n;return null!==e?(Ke.prototype=N(e),n=new Ke,Ke.prototype=null,n[xe]=e):n=Fe(),void 0===t?n:Be(n,t)},ze=(g(Ce,qe="unscopables")||(Me&&g(ke,qe)?Ce[qe]=ke[qe]:Ce[qe]=Ge("Symbol."+qe)),Ce[qe]),Qe=Array.prototype;null==Qe[ze]&&L.f(Qe,ze,{configurable:!0,value:Ve(null)});var We,Je=Object.defineProperty,Xe={},Ze=function(e){throw e},$e=se.includes;Ae({target:"Array",proto:!0,forced:!function(e,t){if(g(Xe,e))return Xe[e];t||(t={});var n=[][e],r=!!g(t,"ACCESSORS")&&t.ACCESSORS,o=g(t,0)?t[0]:Ze,u=g(t,1)?t[1]:void 0;return Xe[e]=!!n&&!i((function(){if(r&&!l)return!0;var e={length:-1};r?Je(e,1,{enumerable:!0,get:Ze}):e[1]=1,n.call(e,o,u)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return $e(this,e,arguments.length>1?arguments[1]:void 0)}}),We="includes",Qe[ze][We]=!0;var et,tt,nt,rt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},ot=Function.call;et="includes",rt(ot,u["Array"].prototype[et],tt);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(nt||(nt={}));var ut,it=nt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ut||(ut={}));var ct,lt=ut,at=[it.PARAGRAPH,it.HEADING_1,it.HEADING_2,it.HEADING_3,it.HEADING_4,it.HEADING_5,it.HEADING_6,it.OL_LIST,it.UL_LIST,it.HR,it.QUOTE,it.EMBEDDED_ENTRY,it.EMBEDDED_ASSET],ft=[it.HR,it.EMBEDDED_ENTRY,it.EMBEDDED_ASSET],st=((ct={})[it.OL_LIST]=[it.LIST_ITEM],ct[it.UL_LIST]=[it.LIST_ITEM],ct[it.LIST_ITEM]=at.slice(),ct[it.QUOTE]=[it.PARAGRAPH],ct),dt={nodeType:it.DOCUMENT,data:{},content:[{nodeType:it.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var pt=Object.freeze({isInline:function(e){return Object.values(lt).includes(e.nodeType)},isBlock:function(e){return Object.values(it).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=it,t.CONTAINERS=st,t.EMPTY_DOCUMENT=dt,t.INLINES=lt,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=at,t.VOID_BLOCKS=ft,t.helpers=pt}));(l=a)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var f,s,d=a.BLOCKS,p=(a.CONTAINERS,a.EMPTY_DOCUMENT,a.INLINES),E=a.MARKS,y=(a.TOP_LEVEL_BLOCKS,a.VOID_BLOCKS,a.helpers);function h(e,t){return e.map((function(e,n){return r=m(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function m(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(y.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var v=((f={})[d.DOCUMENT]=function(e,t){return t},f[d.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},f[d.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},f[d.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},f[d.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},f[d.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},f[d.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},f[d.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},f[d.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},f[d.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},f[d.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},f[d.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},f[d.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},f[d.HR]=function(){return u.createElement("hr",null)},f[p.ASSET_HYPERLINK]=function(e){return g(p.ASSET_HYPERLINK,e)},f[p.ENTRY_HYPERLINK]=function(e){return g(p.ENTRY_HYPERLINK,e)},f[p.EMBEDDED_ENTRY]=function(e){return g(p.EMBEDDED_ENTRY,e)},f[p.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},f),T=((s={})[E.BOLD]=function(e){return u.createElement("b",null,e)},s[E.ITALIC]=function(e){return u.createElement("i",null,e)},s[E.UNDERLINE]=function(e){return u.createElement("u",null,e)},s[E.CODE]=function(e){return u.createElement("code",null,e)},s);function g(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?m(e,{renderNode:i({},v,t.renderNode),renderMark:i({},T,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},fc8F:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return l})),n.d(t,"default",(function(){return a}));var r=n("q1tI"),o=n.n(r),u=n("caCR"),i=n("R8uD"),c=n("lhXr"),l="1608873047";function a(e){console.log(e.data.contentfulBlogs.content.json);var t={renderNode:{"embedded-asset-block":function(e){return o.a.createElement("img",{alt:e.data.target.fields.title["en-US"],src:e.data.target.fields.file["en-US"].url})}}};return o.a.createElement(u.a,null,o.a.createElement(c.a,{title:e.data.contentfulBlogs.title}),o.a.createElement("h1",null,e.data.contentfulBlogs.title),o.a.createElement("p",null,"Added ",e.data.contentfulBlogs.publishedAt),Object(i.documentToReactComponents)(e.data.contentfulBlogs.content.json,t))}console.log(l)}}]);
//# sourceMappingURL=component---src-templates-blog-js-02d4cdc9c2c7c3ec78d1.js.map