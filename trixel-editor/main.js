(function(xc){"use strict";function Nt(e,r,a){return a.a=e,a.f=r,a}function l(e){return Nt(2,e,function(r){return function(a){return e(r,a)}})}function P(e){return Nt(3,e,function(r){return function(a){return function(t){return e(r,a,t)}}})}function W(e){return Nt(4,e,function(r){return function(a){return function(t){return function(o){return e(r,a,t,o)}}}})}function je(e){return Nt(5,e,function(r){return function(a){return function(t){return function(o){return function(c){return e(r,a,t,o,c)}}}}})}function Rr(e){return Nt(6,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return e(r,a,t,o,c,i)}}}}}})}function Jt(e){return Nt(7,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(f){return e(r,a,t,o,c,i,f)}}}}}}})}function De(e){return Nt(8,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return e(r,a,t,o,c,i,f,$)}}}}}}}})}function C0(e){return Nt(9,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return e(r,a,t,o,c,i,f,$,s)}}}}}}}}})}function n(e,r,a){return e.a===2?e.f(r,a):e(r)(a)}function v(e,r,a,t){return e.a===3?e.f(r,a,t):e(r)(a)(t)}function C(e,r,a,t,o){return e.a===4?e.f(r,a,t,o):e(r)(a)(t)(o)}function A(e,r,a,t,o,c){return e.a===5?e.f(r,a,t,o,c):e(r)(a)(t)(o)(c)}function _r(e,r,a,t,o,c,i){return e.a===6?e.f(r,a,t,o,c,i):e(r)(a)(t)(o)(c)(i)}function aa(e,r,a,t,o,c,i,f){return e.a===7?e.f(r,a,t,o,c,i,f):e(r)(a)(t)(o)(c)(i)(f)}function Kt(e,r,a,t,o,c,i,f,$){return e.a===8?e.f(r,a,t,o,c,i,f,$):e(r)(a)(t)(o)(c)(i)(f)($)}function jG(e,r,a,t,o,c,i,f,$,s){return e.a===9?e.f(r,a,t,o,c,i,f,$,s):e(r)(a)(t)(o)(c)(i)(f)($)(s)}var T9=[];function M9(e){return[e]}function z9(e){return e.length}var D9=P(function(e,r,a){for(var t=new Array(e),o=0;o<e;o++)t[o]=a(r+o);return t}),R9=l(function(e,r){for(var a=new Array(e),t=0;t<e&&r.b;t++)a[t]=r.a,r=r.b;return a.length=t,h(a,r)}),B9=l(function(e,r){return r[e]}),A9=P(function(e,r,a){for(var t=a.length,o=new Array(t),c=0;c<t;c++)o[c]=a[c];return o[e]=r,o}),I9=l(function(e,r){for(var a=r.length,t=new Array(a+1),o=0;o<a;o++)t[o]=r[o];return t[a]=e,t}),F9=P(function(e,r,a){for(var t=a.length,o=0;o<t;o++)r=n(e,a[o],r);return r}),V9=P(function(e,r,a){for(var t=a.length-1;t>=0;t--)r=n(e,a[t],r);return r}),wG=l(function(e,r){for(var a=r.length,t=new Array(a),o=0;o<a;o++)t[o]=e(r[o]);return t}),LG=P(function(e,r,a){for(var t=a.length,o=new Array(t),c=0;c<t;c++)o[c]=n(e,r+c,a[c]);return o}),E9=P(function(e,r,a){return a.slice(e,r)}),H9=P(function(e,r,a){var t=r.length,o=e-t;o>a.length&&(o=a.length);for(var c=t+o,i=new Array(c),f=0;f<t;f++)i[f]=r[f];for(var f=0;f<o;f++)i[f+t]=a[f];return i}),TG=l(function(e,r){return r}),MG=l(function(e,r){return console.log(e+": "+Yd(r)),r}),zG=P(function(e,r,a){return r(a)}),DG=P(function(e,r,a){performance.mark("s:"+e);var t=r(a);return performance.mark("e:"+e),t});function RG(e,r){return function(a){wn(8,e,r,a)}}function BG(e,r,a){return function(t){wn(9,e,r,a,t)}}function Yd(e){return"<internals>"}function AG(e){return Pt(!1,e)}function Pt(e,r){if(typeof r=="function")return P$(e,"<function>");if(typeof r=="boolean")return Vi(e,r?"True":"False");if(typeof r=="number")return U9(e,r+"");if(r instanceof String)return W9(e,"'"+Qd(r,!0)+"'");if(typeof r=="string")return eb(e,'"'+Qd(r,!1)+'"');if(typeof r=="object"&&"$"in r){var a=r.$;if(typeof a=="number")return P$(e,"<internals>");if(a[0]==="#"){var o=[];for(var t in r)t!=="$"&&o.push(Pt(e,r[t]));return"("+o.join(",")+")"}if(a==="Set_elm_builtin")return Vi(e,"Set")+S$(e,".fromList")+" "+Pt(e,ty(r));if(a==="RBNode_elm_builtin"||a==="RBEmpty_elm_builtin")return Vi(e,"Dict")+S$(e,".fromList")+" "+Pt(e,un(r));if(a==="Array_elm_builtin")return Vi(e,"Array")+S$(e,".fromList")+" "+Pt(e,ny(r));if(a==="::"||a==="[]"){var o="[";for(r.b&&(o+=Pt(e,r.a),r=r.b);r.b;r=r.b)o+=","+Pt(e,r.a);return o+"]"}var o="";for(var c in r)if(c!=="$"){var i=Pt(e,r[c]),f=i[0],$=f==="{"||f==="("||f==="["||f==="<"||f==='"'||i.indexOf(" ")<0;o+=" "+($?i:"("+i+")")}return Vi(e,a)+o}if(typeof DataView=="function"&&r instanceof DataView)return eb(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return P$(e,"<"+r.name+">");if(typeof r=="object"){var o=[];for(var s in r){var d=s[0]==="_"?s.slice(1):s;o.push(S$(e,d)+" = "+Pt(e,r[s]))}return o.length===0?"{}":"{ "+o.join(", ")+" }"}return P$(e,"<internals>")}function Qd(e,r){var a=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?a.replace(/\'/g,"\\'"):a.replace(/\"/g,'\\"')}function Vi(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function U9(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function eb(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function W9(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function S$(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function P$(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function IG(e){return String.fromCharCode(e<10?48+e:55+e)}function wn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function FG(e,r,a,t,o){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var c=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+c);case 3:var i=r;throw new Error("There can only be one port named `"+i+"`, but your program has multiple.");case 4:var i=r,f=a;throw new Error("Trying to send an unexpected type of value through port `"+i+"`:\n"+f);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var $=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+$+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var $=r,s=a,b=t;throw new Error("TODO in module `"+$+"` "+rb(s)+`

`+b);case 9:var $=r,s=a,d=t,b=o;throw new Error("TODO in module `"+$+"` from the `case` expression "+rb(s)+`

It received the following value:

    `+Yd(d).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+b.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function rb(e){return e.dy.gb===e.qV.gb?"on line "+e.dy.gb:"on lines "+e.dy.gb+" through "+e.qV.gb}function ee(e,r){for(var a,t=[],o=k0(e,r,0,t);o&&(a=t.pop());o=k0(a.a,a.b,0,t));return o}function k0(e,r,a,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&wn(5),!1;if(a>100)return t.push(h(e,r)),!0;e.$<0&&(e=un(e),r=un(r));for(var o in e)if(!k0(e[o],r[o],a+1,t))return!1;return!0}var G9=l(ee),q9=l(function(e,r){return!ee(e,r)});function K(e,r,a){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(a=K(e.a,r.a))||(a=K(e.b,r.b))?a:K(e.c,r.c);for(;e.b&&r.b&&!(a=K(e.a,r.a));e=e.b,r=r.b);return a||(e.b?1:r.b?-1:0)}var O9=l(function(e,r){return K(e,r)<0}),N9=l(function(e,r){return K(e,r)<1}),J9=l(function(e,r){return K(e,r)>0}),K9=l(function(e,r){return K(e,r)>=0}),Z9=l(function(e,r){var a=K(e,r);return a<0?Zb:a?oy:Kb}),jo=0,VG={$:"#0"};function h(e,r){return{a:e,b:r}}function EG(e,r){return{$:"#2",a:e,b:r}}function I(e,r,a){return{a:e,b:r,c:a}}function HG(e,r,a){return{$:"#3",a:e,b:r,c:a}}function UG(e){return e}function WG(e){return new String(e)}function z(e,r){var a={};for(var t in e)a[t]=e[t];for(var t in r)a[t]=r[t];return a}var X9=l(Y);function Y(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var a=rt(e.a,r);e=e.b;for(var t=a;e.b;e=e.b)t=t.b=rt(e.a,r);return a}var k={$:0},GG={$:"[]"};function rt(e,r){return{$:1,a:e,b:r}}function qG(e,r){return{$:"::",a:e,b:r}}var Y9=l(rt);function u(e){for(var r=k,a=e.length;a--;)r=rt(e[a],r);return r}function x$(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Q9=P(function(e,r,a){for(var t=[];r.b&&a.b;r=r.b,a=a.b)t.push(n(e,r.a,a.a));return u(t)}),OG=W(function(e,r,a,t){for(var o=[];r.b&&a.b&&t.b;r=r.b,a=a.b,t=t.b)o.push(v(e,r.a,a.a,t.a));return u(o)}),e7=je(function(e,r,a,t,o){for(var c=[];r.b&&a.b&&t.b&&o.b;r=r.b,a=a.b,t=t.b,o=o.b)c.push(C(e,r.a,a.a,t.a,o.a));return u(c)}),NG=Rr(function(e,r,a,t,o,c){for(var i=[];r.b&&a.b&&t.b&&o.b&&c.b;r=r.b,a=a.b,t=t.b,o=o.b,c=c.b)i.push(A(e,r.a,a.a,t.a,o.a,c.a));return u(i)}),r7=l(function(e,r){return u(x$(r).sort(function(a,t){return K(e(a),e(t))}))}),a7=l(function(e,r){return u(x$(r).sort(function(a,t){var o=n(e,a,t);return o===Kb?0:o===Zb?-1:1}))}),n7=l(function(e,r){return e+r}),t7=l(function(e,r){return e-r}),o7=l(function(e,r){return e*r}),c7=l(function(e,r){return e/r}),i7=l(function(e,r){return e/r|0}),f7=l(Math.pow),$7=l(function(e,r){return r%e}),u7=l(function(e,r){var a=r%e;return e===0?wn(11):a>0&&e<0||a<0&&e>0?a+e:a}),l7=Math.PI,JG=Math.E,v7=Math.cos,s7=Math.sin,d7=Math.tan,b7=Math.acos,KG=Math.asin,p7=Math.atan,m7=l(Math.atan2);function h7(e){return e}function ZG(e){return e|0}function g7(e){return e===1/0||e===-1/0}var _7=Math.ceil,y7=Math.floor,C7=Math.round,k7=Math.sqrt,ab=Math.log,S7=isNaN;function P7(e){return!e}var x7=l(function(e,r){return e&&r}),j7=l(function(e,r){return e||r}),XG=l(function(e,r){return e!==r}),w7=l(function(e,r){return e+r});function L7(e){var r=e.charCodeAt(0);return isNaN(r)?L:M(55296<=r&&r<=56319?h(e[0]+e[1],e.slice(2)):h(e[0],e.slice(1)))}var T7=l(function(e,r){return e+r});function M7(e){return e.length}var YG=l(function(e,r){for(var a=r.length,t=new Array(a),o=0;o<a;){var c=r.charCodeAt(o);if(55296<=c&&c<=56319){t[o]=e(r[o]+r[o+1]),o+=2;continue}t[o]=e(r[o]),o++}return t.join("")}),QG=l(function(e,r){for(var a=[],t=r.length,o=0;o<t;){var c=r[o],i=r.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=r[o],o++),e(c)&&a.push(c)}return a.join("")});function z7(e){for(var r=e.length,a=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(a[r-t]=e[t+1],t++,a[r-t]=e[t-1],t++):(a[r-t]=e[t],t++)}return a.join("")}var D7=P(function(e,r,a){for(var t=a.length,o=0;o<t;){var c=a[o],i=a.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=a[o],o++),r=n(e,c,r)}return r}),R7=P(function(e,r,a){for(var t=a.length;t--;){var o=a[t],c=a.charCodeAt(t);56320<=c&&c<=57343&&(t--,o=a[t]+o),r=n(e,o,r)}return r}),B7=l(function(e,r){return r.split(e)}),A7=l(function(e,r){return r.join(e)}),I7=P(function(e,r,a){return a.slice(e,r)});function eq(e){return e.trim()}function F7(e){return e.replace(/^\s+/,"")}function rq(e){return e.replace(/\s+$/,"")}function aq(e){return u(e.trim().split(/\s+/g))}function nq(e){return u(e.split(/\r\n|\r|\n/g))}function V7(e){return e.toUpperCase()}function E7(e){return e.toLowerCase()}var tq=l(function(e,r){for(var a=r.length;a--;){var t=r[a],o=r.charCodeAt(a);if(56320<=o&&o<=57343&&(a--,t=r[a]+t),e(t))return!0}return!1}),H7=l(function(e,r){for(var a=r.length;a--;){var t=r[a],o=r.charCodeAt(a);if(56320<=o&&o<=57343&&(a--,t=r[a]+t),!e(t))return!1}return!0}),U7=l(function(e,r){return r.indexOf(e)>-1}),W7=l(function(e,r){return r.indexOf(e)===0}),G7=l(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length}),q7=l(function(e,r){var a=e.length;if(a<1)return k;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+a;return u(o)});function nb(e){return e+""}function O7(e){for(var r=0,a=e.charCodeAt(0),t=a==43||a==45?1:0,o=t;o<e.length;++o){var c=e.charCodeAt(o);if(c<48||57<c)return L;r=10*r+c-48}return o==t?L:M(a==45?-r:r)}function N7(e){if(e.length===0||/[\sxbo]/.test(e))return L;var r=+e;return r===r?M(r):L}function J7(e){return x$(e).join("")}function K7(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Z7(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function oq(e){return e.toUpperCase()}function X7(e){return e.toLowerCase()}function cq(e){return e.toLocaleUpperCase()}function iq(e){return e.toLocaleLowerCase()}function Y7(e){return{$:0,a:e}}function Q7(e){return{$:1,a:e}}function Ei(e){return{$:2,b:e}}var eh=Ei(function(e){return typeof e!="number"?fn("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?Ge(e):fn("an INT",e)}),rh=Ei(function(e){return typeof e=="boolean"?Ge(e):fn("a BOOL",e)}),ah=Ei(function(e){return typeof e=="number"?Ge(e):fn("a FLOAT",e)}),nh=Ei(function(e){return Ge(e)}),th=Ei(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):fn("a STRING",e)});function oh(e){return{$:3,b:e}}function ch(e){return{$:4,b:e}}function ih(e){return{$:5,c:e}}var fh=l(function(e,r){return{$:6,d:e,b:r}}),$h=l(function(e,r){return{$:7,e,b:r}});function uh(e){return{$:8,b:e}}function Zt(e,r){return{$:9,f:e,g:r}}var lh=l(function(e,r){return{$:10,b:r,h:e}});function vh(e){return{$:11,g:e}}var sh=l(function(e,r){return Zt(e,[r])}),dh=P(function(e,r,a){return Zt(e,[r,a])}),bh=W(function(e,r,a,t){return Zt(e,[r,a,t])}),ph=je(function(e,r,a,t,o){return Zt(e,[r,a,t,o])}),mh=Rr(function(e,r,a,t,o,c){return Zt(e,[r,a,t,o,c])}),hh=Jt(function(e,r,a,t,o,c,i){return Zt(e,[r,a,t,o,c,i])}),fq=De(function(e,r,a,t,o,c,i,f){return Zt(e,[r,a,t,o,c,i,f])}),$q=C0(function(e,r,a,t,o,c,i,f,$){return Zt(e,[r,a,t,o,c,i,f,$])}),gh=l(function(e,r){try{var a=JSON.parse(r);return cn(e,a)}catch(t){return We(n(K0,"This is not valid JSON! "+t.message,r))}}),S0=l(function(e,r){return cn(e,r)});function cn(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):fn("null",r);case 3:return j$(r)?tb(e.b,r,u):fn("a LIST",r);case 4:return j$(r)?tb(e.b,r,_h):fn("an ARRAY",r);case 6:var a=e.d;if(typeof r!="object"||r===null||!(a in r))return fn("an OBJECT with a field named `"+a+"`",r);var s=cn(e.b,r[a]);return zn(s)?s:We(n(Xb,a,s.a));case 7:var t=e.e;if(!j$(r))return fn("an ARRAY",r);if(t>=r.length)return fn("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var s=cn(e.b,r[t]);return zn(s)?s:We(n(Yb,t,s.a));case 8:if(typeof r!="object"||r===null||j$(r))return fn("an OBJECT",r);var o=k;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var s=cn(e.b,r[c]);if(!zn(s))return We(n(Xb,c,s.a));o=rt(h(c,s.a),o)}return Ge(Ae(o));case 9:for(var i=e.f,f=e.g,$=0;$<f.length;$++){var s=cn(f[$],r);if(!zn(s))return s;i=i(s.a)}return Ge(i);case 10:var s=cn(e.b,r);return zn(s)?cn(e.h(s.a),r):s;case 11:for(var d=k,b=e.g;b.b;b=b.b){var s=cn(b.a,r);if(zn(s))return s;d=rt(s.a,d)}return We(cy(Ae(d)));case 1:return We(n(K0,e.a,r));case 0:return Ge(e.a)}}function tb(e,r,a){for(var t=r.length,o=new Array(t),c=0;c<t;c++){var i=cn(e,r[c]);if(!zn(i))return We(n(Yb,c,i.a));o[c]=i.a}return Ge(a(o))}function j$(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function _h(e){return n(V$,e.length,function(r){return e[r]})}function fn(e,r){return We(n(K0,"Expecting "+e,r))}function jc(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return jc(e.b,r.b);case 6:return e.d===r.d&&jc(e.b,r.b);case 7:return e.e===r.e&&jc(e.b,r.b);case 9:return e.f===r.f&&ob(e.g,r.g);case 10:return e.h===r.h&&jc(e.b,r.b);case 11:return ob(e.g,r.g)}}function ob(e,r){var a=e.length;if(a!==r.length)return!1;for(var t=0;t<a;t++)if(!jc(e[t],r[t]))return!1;return!0}var yh=l(function(e,r){return JSON.stringify(r,null,e)+""});function uq(e){return{$:0,a:e}}function lq(e){return e.a}function w$(e){return e}function vq(e){return e}function Ch(){return[]}function kh(){return{}}var Sh=P(function(e,r,a){var t=r;return e==="toJSON"&&typeof t=="function"||(a[e]=t),a});function Ph(e){return l(function(r,a){return a.push(e(r)),a})}var xh=null;function Ga(e){return{$:0,a:e}}function P0(e){return{$:1,a:e}}function Jr(e){return{$:2,b:e,c:null}}var x0=l(function(e,r){return{$:3,b:e,d:r}}),jh=l(function(e,r){return{$:4,b:e,d:r}});function wh(e){return{$:5,b:e}}var Lh=0;function j0(e){var r={$:0,e:Lh++,f:e,g:null,h:[]};return T0(r),r}function w0(e){return Jr(function(r){r(Ga(j0(e)))})}function cb(e,r){e.h.push(r),T0(e)}var Th=l(function(e,r){return Jr(function(a){cb(e,r),a(Ga(jo))})});function Mh(e){return Jr(function(r){var a=e.f;a.$===2&&a.c&&a.c(),e.f=null,r(Ga(jo))})}var L0=!1,ib=[];function T0(e){if(ib.push(e),!L0){for(L0=!0;e=ib.shift();)zh(e);L0=!1}}function zh(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(a){e.f=a,T0(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}function Dh(e){return Jr(function(r){var a=setTimeout(function(){r(Ga(jo))},e);return function(){clearTimeout(a)}})}var sq=W(function(e,r,a,t){return M0(r,t,e.cU,e.up,e.cZ,function(){return function(){}})});function M0(e,r,a,t,o,c){var i=n(S0,e,r?r.flags:void 0);zn(i)||wn(2);var f={},$=a(i.a),s=$.a,d=c(m,s),b=Bh(f,m);function m(g,_){var y=n(t,g,s);d(s=y.a,_),lb(f,y.b,o(s))}return lb(f,$.b,o(s)),b?{ports:b}:{}}var Rh;function dq(e){Rh.add(e)}var na={};function Bh(e,r){var a;for(var t in na){var o=na[t];o.a&&(a=a||{},a[t]=o.a(t,r)),e[t]=Ah(o,r)}return a}function z0(e,r,a,t,o){return{b:e,c:r,d:a,e:t,f:o}}function Ah(e,r){var a={g:r,h:void 0},t=e.c,o=e.d,c=e.e,i=e.f;function f($){return n(x0,f,wh(function(s){var d=s.a;return s.$===0?v(o,a,d,$):c&&i?C(t,a,d.i,d.j,$):v(t,a,c?d.i:d.j,$)}))}return a.h=j0(n(x0,f,e.b))}var Ih=l(function(e,r){return Jr(function(a){e.g(r),a(Ga(jo))})}),Fh=l(function(e,r){return n(Th,e.h,{$:0,a:r})});function Hi(e){return function(r){return{$:1,k:e,l:r}}}function fb(e){return{$:2,m:e}}var $b=l(function(e,r){return{$:3,n:e,o:r}}),ub=[],D0=!1;function lb(e,r,a){if(ub.push({p:e,q:r,r:a}),!D0){D0=!0;for(var t;t=ub.shift();)Vh(t.p,t.q,t.r);D0=!1}}function Vh(e,r,a){var t={};L$(!0,r,t,null),L$(!1,a,t,null);for(var o in e)cb(e[o],{$:"fx",a:t[o]||{i:k,j:k}})}function L$(e,r,a,t){switch(r.$){case 1:var o=r.k,c=Eh(e,o,t,r.l);a[o]=Hh(e,c,a[o]);return;case 2:for(var i=r.m;i.b;i=i.b)L$(e,i.a,a,t);return;case 3:L$(e,r.o,a,{s:r.n,t});return}}function Eh(e,r,a,t){function o(i){for(var f=a;f;f=f.t)i=f.s(i);return i}var c=e?na[r].e:na[r].f;return n(c,o,t)}function Hh(e,r,a){return a=a||{i:k,j:k},e?a.i=rt(r,a.i):a.j=rt(r,a.j),a}function vb(e){na[e]&&wn(3,e)}function Xt(e,r){return vb(e),na[e]={e:Uh,u:r,a:Wh},Hi(e)}var Uh=l(function(e,r){return r});function Wh(e){var r=[],a=na[e].u,t=Dh(0);na[e].b=t,na[e].c=P(function(i,f,$){for(;f.b;f=f.b)for(var s=r,d=a(f.a),b=0;b<s.length;b++)s[b](d);return t});function o(i){r.push(i)}function c(i){r=r.slice();var f=r.indexOf(i);f>=0&&r.splice(f,1)}return{subscribe:o,unsubscribe:c}}function T$(e,r){return vb(e),na[e]={f:Gh,u:r,a:qh},Hi(e)}var Gh=l(function(e,r){return function(a){return e(r(a))}});function qh(e,r){var a=k,t=na[e].u,o=Ga(null);na[e].b=o,na[e].c=P(function(i,f,$){return a=f,o});function c(i){var f=n(S0,t,i);zn(f)||wn(4,e,f.a);for(var $=f.a,s=a;s.b;s=s.b)r(s.a($))}return{send:c}}function Oh(e){xc.Elm?sb(xc.Elm,e):xc.Elm=e}function sb(e,r){for(var a in r)a in e?a=="init"?wn(6):sb(e[a],r[a]):e[a]=r[a]}function bq(e){xc.Elm?db("Elm",xc.Elm,e):xc.Elm=e}function db(e,r,a){for(var t in a)t in r?t=="init"?wn(6,e):db(e+"."+t,r[t],a[t]):r[t]=a[t]}var M$,ta=typeof document<"u"?document:{};function R0(e,r){e.appendChild(r)}var pq=W(function(e,r,a,t){var o=t.node;return o.parentNode.replaceChild(Qt(e,function(){}),o),{}});function B0(e){return{$:0,a:e}}var bb=l(function(e,r){return l(function(a,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b||0,o.push(i)}return c+=o.length,{$:1,c:r,d:I0(a),e:o,f:e,b:c}})}),$n=bb(void 0),pb=l(function(e,r){return l(function(a,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b.b||0,o.push(i)}return c+=o.length,{$:2,c:r,d:I0(a),e:o,f:e,b:c}})}),Nh=pb(void 0);function Jh(e,r,a,t){return{$:3,d:I0(e),g:r,h:a,i:t}}var Kh=l(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Yt(e,r){return{$:5,l:e,m:r,k:void 0}}var mq=l(function(e,r){return Yt([e,r],function(){return e(r)})}),hq=P(function(e,r,a){return Yt([e,r,a],function(){return n(e,r,a)})}),gq=W(function(e,r,a,t){return Yt([e,r,a,t],function(){return v(e,r,a,t)})}),_q=je(function(e,r,a,t,o){return Yt([e,r,a,t,o],function(){return C(e,r,a,t,o)})}),yq=Rr(function(e,r,a,t,o,c){return Yt([e,r,a,t,o,c],function(){return A(e,r,a,t,o,c)})}),Cq=Jt(function(e,r,a,t,o,c,i){return Yt([e,r,a,t,o,c,i],function(){return _r(e,r,a,t,o,c,i)})}),kq=De(function(e,r,a,t,o,c,i,f){return Yt([e,r,a,t,o,c,i,f],function(){return aa(e,r,a,t,o,c,i,f)})}),Sq=C0(function(e,r,a,t,o,c,i,f,$){return Yt([e,r,a,t,o,c,i,f,$],function(){return Kt(e,r,a,t,o,c,i,f,$)})}),mb=l(function(e,r){return{$:"a0",n:e,o:r}}),Zh=l(function(e,r){return{$:"a1",n:e,o:r}}),hb=l(function(e,r){return{$:"a2",n:e,o:r}}),z$=l(function(e,r){return{$:"a3",n:e,o:r}}),Xh=P(function(e,r,a){return{$:"a4",n:r,o:{f:e,o:a}}}),Yh=/^script$/i,Qh=/^(on|formAction$)/i,eg=/^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i,A0=/^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;function D$(e){return Yh.test(e)?"p":e}function gb(e){return Qh.test(e)?"data-"+e:e}function rg(e){return e=="innerHTML"||e=="outerHTML"||e=="formAction"?"data-"+e:e}function Pq(e){return eg.test(e)?"":e}function _b(e){return A0.test(e)?"":e}function ag(e){return typeof e=="string"&&A0.test(e)||Array.isArray(e)&&A0.test(String(e))?"":e}var ng=l(function(e,r){return r.$==="a0"?n(mb,r.n,tg(e,r.o)):r});function tg(e,r){var a=ev(r);return{$:r.$,a:a?v(La,a<3?og:cg,ae(e),r.a):n(Qe,e,r.a)}}var og=l(function(e,r){return h(e(r.a),r.b)}),cg=l(function(e,r){return{Y:e(r.Y),ac:r.ac,aa:r.aa}});function I0(e){for(var r={};e.b;e=e.b){var a=e.a,t=a.$,o=a.n,c=a.o;if(t==="a2"){o==="className"?yb(r,o,c):r[o]=c;continue}var i=r[t]||(r[t]={});t==="a3"&&o==="class"?yb(i,o,c):i[o]=c}return r}function yb(e,r,a){var t=e[r];e[r]=t?t+" "+a:a}function Qt(e,r){var a=e.$;if(a===5)return Qt(e.k||(e.k=e.m()),r);if(a===0)return ta.createTextNode(e.a);if(a===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var c={j:o,p:r},i=Qt(t,c);return i.elm_event_node_ref=c,i}if(a===3){var i=e.h(e.g);return F0(i,r,e.d),i}var i=e.f?ta.createElementNS(e.f,e.c):ta.createElement(e.c);M$&&e.c=="a"&&i.addEventListener("click",M$(i)),F0(i,r,e.d);for(var f=e.e,$=0;$<f.length;$++)R0(i,Qt(a===1?f[$]:f[$].b,r));return i}function F0(e,r,a){for(var t in a){var o=a[t];t==="a1"?ig(e,o):t==="a0"?ug(e,r,o):t==="a3"?fg(e,o):t==="a4"?$g(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function ig(e,r){var a=e.style;for(var t in r)a[t]=r[t]}function fg(e,r){for(var a in r){var t=r[a];typeof t<"u"?e.setAttribute(a,t):e.removeAttribute(a)}}function $g(e,r){for(var a in r){var t=r[a],o=t.f,c=t.o;typeof c<"u"?e.setAttributeNS(o,a,c):e.removeAttributeNS(o,a)}}function ug(e,r,a){var t=e.elmFs||(e.elmFs={});for(var o in a){var c=a[o],i=t[o];if(!c){e.removeEventListener(o,i),t[o]=void 0;continue}if(i){var f=i.q;if(f.$===c.$){i.q=c;continue}e.removeEventListener(o,i)}i=lg(r,c),e.addEventListener(o,i,V0&&{passive:ev(c)<2}),t[o]=i}}var V0;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){V0=!0}}))}catch{}function lg(e,r){function a(t){var o=a.q,c=cn(o.a,t);if(zn(c)){for(var i=ev(o),f=c.a,$=i?i<3?f.a:f.Y:f,s=i==1?f.b:i==3&&f.ac,d=(s&&t.stopPropagation(),(i==2?f.b:i==3&&f.aa)&&t.preventDefault(),e),b,m;b=d.j;){if(typeof b=="function")$=b($);else for(var m=b.length;m--;)$=b[m]($);d=d.p}d($,s)}}return a.q=r,a}function vg(e,r){return e.$==r.$&&jc(e.a,r.a)}function Cb(e,r){var a=[];return Ln(e,r,a,0),a}function ba(e,r,a,t){var o={$:r,r:a,s:t,t:void 0,u:void 0};return e.push(o),o}function Ln(e,r,a,t){if(e!==r){var o=e.$,c=r.$;if(o!==c)if(o===1&&c===2)r=_g(r),c=1;else{ba(a,0,t,r);return}switch(c){case 5:for(var i=e.l,f=r.l,$=i.length,s=$===f.length;s&&$--;)s=i[$]===f[$];if(s){r.k=e.k;return}r.k=r.m();var d=[];Ln(e.k,r.k,d,0),d.length>0&&ba(a,1,t,d);return;case 4:for(var b=e.j,m=r.j,g=!1,_=e.k;_.$===4;)g=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;for(var y=r.k;y.$===4;)g=!0,typeof m!="object"?m=[m,y.j]:m.push(y.j),y=y.k;if(g&&b.length!==m.length){ba(a,0,t,r);return}(g?!sg(b,m):b!==m)&&ba(a,2,t,m),Ln(_,y,a,t+1);return;case 0:e.a!==r.a&&ba(a,3,t,r.a);return;case 1:kb(e,r,a,t,dg);return;case 2:kb(e,r,a,t,bg);return;case 3:if(e.h!==r.h){ba(a,0,t,r);return}var S=E0(e.d,r.d);S&&ba(a,4,t,S);var w=r.i(e.g,r.g);w&&ba(a,5,t,w);return}}}function sg(e,r){for(var a=0;a<e.length;a++)if(e[a]!==r[a])return!1;return!0}function kb(e,r,a,t,o){if(e.c!==r.c||e.f!==r.f){ba(a,0,t,r);return}var c=E0(e.d,r.d);c&&ba(a,4,t,c),o(e,r,a,t)}function E0(e,r,a){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var c=E0(e[o],r[o]||{},o);c&&(t=t||{},t[o]=c);continue}if(!(o in r)){t=t||{},t[o]=a?a==="a1"?"":a==="a0"||a==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var i=e[o],f=r[o];i===f&&o!=="value"&&o!=="checked"||a==="a0"&&vg(i,f)||(t=t||{},t[o]=f)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function dg(e,r,a,t){var o=e.e,c=r.e,i=o.length,f=c.length;i>f?ba(a,6,t,{v:f,i:i-f}):i<f&&ba(a,7,t,{v:i,e:c});for(var $=i<f?i:f,s=0;s<$;s++){var d=o[s];Ln(d,c[s],a,++t),t+=d.b||0}}function bg(e,r,a,t){for(var o=[],c={},i=[],f=e.e,$=r.e,s=f.length,d=$.length,b=0,m=0,g=t;b<s&&m<d;){var _=f[b],y=$[m],S=_.a,w=y.a,j=_.b,B=y.b,E=void 0,V=void 0;if(S===w){g++,Ln(j,B,o,g),g+=j.b||0,b++,m++;continue}var O=f[b+1],X=$[m+1];if(O){var oe=O.a,ie=O.b;V=w===oe}if(X){var me=X.a,Te=X.b;E=S===me}if(E&&V){g++,Ln(j,Te,o,g),Ui(c,o,S,B,m,i),g+=j.b||0,g++,Wi(c,o,S,ie,g),g+=ie.b||0,b+=2,m+=2;continue}if(E){g++,Ui(c,o,w,B,m,i),Ln(j,Te,o,g),g+=j.b||0,b+=1,m+=2;continue}if(V){g++,Wi(c,o,S,j,g),g+=j.b||0,g++,Ln(ie,B,o,g),g+=ie.b||0,b+=2,m+=1;continue}if(O&&oe===me){g++,Wi(c,o,S,j,g),Ui(c,o,w,B,m,i),g+=j.b||0,g++,Ln(ie,Te,o,g),g+=ie.b||0,b+=2,m+=2;continue}break}for(;b<s;){g++;var _=f[b],j=_.b;Wi(c,o,_.a,j,g),g+=j.b||0,b++}for(;m<d;){var Ie=Ie||[],y=$[m];Ui(c,o,y.a,y.b,void 0,Ie),m++}(o.length>0||i.length>0||Ie)&&ba(a,8,t,{w:o,x:i,y:Ie})}var Sb="_elmW6BL";function Ui(e,r,a,t,o,c){var i=e[a];if(!i){i={c:0,z:t,r:o,s:void 0},c.push({r:o,A:i}),e[a]=i;return}if(i.c===1){c.push({r:o,A:i}),i.c=2;var f=[];Ln(i.z,t,f,i.r),i.r=o,i.s.s={w:f,A:i};return}Ui(e,r,a+Sb,t,o,c)}function Wi(e,r,a,t,o){var c=e[a];if(!c){var i=ba(r,9,o,void 0);e[a]={c:1,z:t,r:o,s:i};return}if(c.c===0){c.c=2;var f=[];Ln(t,c.z,f,o),ba(r,9,o,{w:f,A:c});return}Wi(e,r,a+Sb,t,o)}function Pb(e,r,a,t){Gi(e,r,a,0,0,r.b,t)}function Gi(e,r,a,t,o,c,i){for(var f=a[t],$=f.r;$===o;){var s=f.$;if(s===1)Pb(e,r.k,f.s,i);else if(s===8){f.t=e,f.u=i;var d=f.s.w;d.length>0&&Gi(e,r,d,0,o,c,i)}else if(s===9){f.t=e,f.u=i;var b=f.s;if(b){b.A.s=e;var d=b.w;d.length>0&&Gi(e,r,d,0,o,c,i)}}else f.t=e,f.u=i;if(t++,!(f=a[t])||($=f.r)>c)return t}var m=r.$;if(m===4){for(var g=r.k;g.$===4;)g=g.k;return Gi(e,g,a,t,o+1,c,e.elm_event_node_ref)}for(var _=r.e,y=e.childNodes,S=0;S<_.length;S++){o++;var w=m===1?_[S]:_[S].b,j=o+(w.b||0);if(o<=$&&$<=j&&(t=Gi(y[S],w,a,t,o,j,i),!(f=a[t])||($=f.r)>c))return t;o=j}return t}function xb(e,r,a,t){return a.length===0?e:(Pb(e,r,a,t),R$(e,a))}function R$(e,r){for(var a=0;a<r.length;a++){var t=r[a],o=t.t,c=pg(o,t);o===e&&(e=c)}return e}function pg(e,r){switch(r.$){case 0:return mg(e,r.s,r.u);case 4:return F0(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return R$(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var c=r.s,t=0;t<c.i;t++)e.removeChild(e.childNodes[c.v]);return e;case 7:for(var c=r.s,a=c.e,t=c.v,o=e.childNodes[t];t<a.length;t++)e.insertBefore(Qt(a[t],r.u),o);return e;case 9:var c=r.s;if(!c)return e.parentNode.removeChild(e),e;var i=c.A;return typeof i.r<"u"&&e.parentNode.removeChild(e),i.s=R$(e,c.w),e;case 8:return hg(e,r);case 5:return r.s(e);default:wn(10)}}function mg(e,r,a){var t=e.parentNode,o=Qt(r,a);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function hg(e,r){var a=r.s,t=gg(a.y,r);e=R$(e,a.w);for(var o=a.x,c=0;c<o.length;c++){var i=o[c],f=i.A,$=f.c===2?f.s:Qt(f.z,r.u);e.insertBefore($,e.childNodes[i.r])}return t&&R0(e,t),e}function gg(e,r){if(e){for(var a=ta.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],c=o.A;R0(a,c.c===2?c.s:Qt(c.z,r.u))}return a}}function H0(e){if(e.nodeType===3)return B0(e.textContent);if(e.nodeType!==1)return B0("");for(var r=k,a=e.attributes,t=a.length;t--;){var o=a[t],c=o.name,i=o.value;r=rt(n(z$,c,i),r)}for(var f=e.tagName.toLowerCase(),$=k,s=e.childNodes,t=s.length;t--;)$=rt(H0(s[t]),$);return v($n,f,r,$)}function _g(e){for(var r=e.e,a=r.length,t=new Array(a),o=0;o<a;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var yg=l(function(e,r){return e&r}),Cg=l(function(e,r){return e|r}),kg=l(function(e,r){return e^r});function Sg(e){return~e}var Pg=l(function(e,r){return r<<e}),xg=l(function(e,r){return r>>e}),jg=l(function(e,r){return r>>>e}),wg,Lg=wg||W(function(e,r,a,t){return M0(r,t,e.cU,e.up,e.cZ,function(o,c){var i=e.dE,f=t.node,$=H0(f);return jb(c,function(s){var d=i(s),b=Cb($,d);f=xb(f,$,b,o),$=d})})}),Tg,Mg=Tg||W(function(e,r,a,t){return M0(r,t,e.cU,e.up,e.cZ,function(o,c){var i=e.kw&&e.kw(o),f=e.dE,$=ta.title,s=ta.body,d=H0(s);return jb(c,function(b){M$=i;var m=f(b),g=$n("body")(k)(m.g_),_=Cb(d,g);s=xb(s,d,_,o),d=g,M$=0,$!==m.iA&&(ta.title=$=m.iA)})})}),zg=typeof cancelAnimationFrame<"u"?cancelAnimationFrame:function(e){clearTimeout(e)},qi=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function jb(e,r){r(e);var a=0;function t(){a=a===1?0:(qi(t),r(e),1)}return function(o,c){e=o,c?(r(e),a===2&&(a=1)):(a===0&&qi(t),a=2)}}function xq(e){var r=e.sP,a=e.sQ,t=function(){t.a(r(U0()))};return Mg({kw:function(o){return t.a=o,at.addEventListener("popstate",t),at.navigator.userAgent.indexOf("Trident")<0||at.addEventListener("hashchange",t),l(function(c,i){if(!i.ctrlKey&&!i.metaKey&&!i.shiftKey&&i.button<1&&!c.target&&!c.hasAttribute("download")){i.preventDefault();var f=c.href,$=U0(),s=_2(f).a;o(a(s&&$.od===s.od&&$.mx===s.mx&&$.n7.a===s.n7.a?Wy(s):Uy(f)))}})},cU:function(o){return v(e.cU,o,U0(),t)},dE:e.dE,up:e.up,cZ:e.cZ})}function U0(){return _2(ta.location.href).a||wn(1)}var jq=l(function(e,r){return n(ef,Bo,Jr(function(){r&&history.go(r),e()}))}),wq=l(function(e,r){return n(ef,Bo,Jr(function(){history.pushState({},"",r),e()}))}),Lq=l(function(e,r){return n(ef,Bo,Jr(function(){history.replaceState({},"",r),e()}))}),wb={addEventListener:function(){},removeEventListener:function(){}},wo=typeof document<"u"?document:wb,at=typeof window<"u"?window:wb,Dg=P(function(e,r,a){return w0(Jr(function(t){function o(c){j0(a(c))}return e.addEventListener(r,o,V0&&{passive:!0}),function(){e.removeEventListener(r,o)}}))}),Rg=l(function(e,r){var a=cn(e,r);return zn(a)?M(a.a):L});function Tq(){return typeof ta.hidden<"u"?{jv:"hidden",p3:"visibilitychange"}:typeof ta.mozHidden<"u"?{jv:"mozHidden",p3:"mozvisibilitychange"}:typeof ta.msHidden<"u"?{jv:"msHidden",p3:"msvisibilitychange"}:typeof ta.webkitHidden<"u"?{jv:"webkitHidden",p3:"webkitvisibilitychange"}:{jv:"hidden",p3:"visibilitychange"}}function Bg(){return Jr(function(e){var r=qi(function(){e(Ga(Date.now()))});return function(){zg(r)}})}function Ag(){return Jr(function(e){e(Ga(Date.now()))})}function B$(e,r){return Jr(function(a){qi(function(){var t=document.getElementById(e);a(t?Ga(r(t)):P0(Gy(e)))})})}function Ig(e){return Jr(function(r){qi(function(){r(Ga(e()))})})}var Fg=l(function(e,r){return B$(r,function(a){return a[e](),jo})});function Mq(){return{or:Lb(),pa:{pi:at.pageXOffset,pk:at.pageYOffset,k6:wo.documentElement.clientWidth,ju:wo.documentElement.clientHeight}}}function Lb(){var e=wo.body,r=wo.documentElement;return{k6:Math.max(e.scrollWidth,e.offsetWidth,r.scrollWidth,r.offsetWidth,r.clientWidth),ju:Math.max(e.scrollHeight,e.offsetHeight,r.scrollHeight,r.offsetHeight,r.clientHeight)}}var zq=l(function(e,r){return Ig(function(){return at.scroll(e,r),jo})});function Dq(e){return B$(e,function(r){return{or:{k6:r.scrollWidth,ju:r.scrollHeight},pa:{pi:r.scrollLeft,pk:r.scrollTop,k6:r.clientWidth,ju:r.clientHeight}}})}var Vg=P(function(e,r,a){return B$(e,function(t){return t.scrollLeft=r,t.scrollTop=a,jo})});function Rq(e){return B$(e,function(r){var a=r.getBoundingClientRect(),t=at.pageXOffset,o=at.pageYOffset;return{or:Lb(),pa:{pi:t,pk:o,k6:wo.documentElement.clientWidth,ju:wo.documentElement.clientHeight},qR:{pi:t+a.left,pk:o+a.top,k6:a.width,ju:a.height}}})}function Bq(e){return n(ef,Bo,Jr(function(r){ta.location.reload(e)}))}function Aq(e){return n(ef,Bo,Jr(function(r){try{at.location=e}catch{ta.location.reload(!1)}}))}var Eg=Rr(function(e,r,a,t,o,c){var i=r!==9728&&r!==9729;return Jr(function(f){var $=new Image;function s(d){var b=d.createTexture();return d.bindTexture(d.TEXTURE_2D,b),d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,$),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,e),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,r),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,a),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,t),i&&d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null),b}$.onload=function(){var d=$.width,b=$.height,m=(d&d-1)===0,g=(b&b-1)===0,_=m&&g||!i&&a===33071&&t===33071;f(_?Ga({$:0,qn:s,a:d,b}):P0(n(kP,d,b)))},$.onerror=function(){f(P0(CP))},c.slice(0,5)!=="data:"&&($.crossOrigin="Anonymous"),$.src=c})}),Iq=function(e){return h(e.a,e.b)};function Tb(e){return e.byteLength}var Fq=l(function(e,r){return Jr(function(a){a(Ga(new Uint8Array(new Uint32Array([1]))[0]===1?e:r))})});function Hg(e){var r=new DataView(new ArrayBuffer(p4(e)));return m4(e)(r)(0),r}var Ug=P(function(e,r,a){return e.setInt8(r,a),r+1}),Wg=W(function(e,r,a,t){return e.setInt16(r,a,t),r+2}),Gg=W(function(e,r,a,t){return e.setInt32(r,a,t),r+4}),qg=P(function(e,r,a){return e.setUint8(r,a),r+1}),Og=W(function(e,r,a,t){return e.setUint16(r,a,t),r+2}),Ng=W(function(e,r,a,t){return e.setUint32(r,a,t),r+4}),Jg=W(function(e,r,a,t){return e.setFloat32(r,a,t),r+4}),Kg=W(function(e,r,a,t){return e.setFloat64(r,a,t),r+8}),Zg=P(function(e,r,a){for(var t=0,o=a.byteLength,c=o-4;t<=c;t+=4)e.setUint32(r+t,a.getUint32(t));for(;t<o;t++)e.setUint8(r+t,a.getUint8(t));return r+o});function Vq(e){for(var r=0,a=0;a<e.length;a++){var t=e.charCodeAt(a);r+=t<128?1:t<2048?2:t<55296||56319<t?3:(a++,4)}return r}var Xg=P(function(e,r,a){for(var t=0;t<a.length;t++){var o=a.charCodeAt(t);r+=o<128?(e.setUint8(r,o),1):o<2048?(e.setUint16(r,49280|(o>>>6&31)<<8|o&63),2):o<55296||56319<o?(e.setUint16(r,57472|(o>>>12&15)<<8|o>>>6&63),e.setUint8(r+2,128|o&63),3):(o=(o-55296)*1024+a.charCodeAt(++t)-56320+65536,e.setUint32(r,4034953344|(o>>>18&7)<<24|(o>>>12&63)<<16|(o>>>6&63)<<8|o&63),4)}return r}),Yg=l(function(e,r){try{return M(n(e,r,0).b)}catch{return L}}),Eq=l(function(e,r){return h(r+1,e.getInt8(r))}),Hq=P(function(e,r,a){return h(a+2,r.getInt16(a,e))}),Uq=P(function(e,r,a){return h(a+4,r.getInt32(a,e))}),Qg=l(function(e,r){return h(r+1,e.getUint8(r))}),e_=P(function(e,r,a){return h(a+2,r.getUint16(a,e))}),r_=P(function(e,r,a){return h(a+4,r.getUint32(a,e))}),Wq=P(function(e,r,a){return h(a+4,r.getFloat32(a,e))}),Gq=P(function(e,r,a){return h(a+8,r.getFloat64(a,e))}),a_=P(function(e,r,a){return h(a+e,new DataView(r.buffer,r.byteOffset+a,e))}),n_=P(function(e,r,a){for(var t="",o=a+e;a<o;){var c=r.getUint8(a++);t+=c<128?String.fromCharCode(c):(c&224)===192?String.fromCharCode((c&31)<<6|r.getUint8(a++)&63):(c&240)===224?String.fromCharCode((c&15)<<12|(r.getUint8(a++)&63)<<6|r.getUint8(a++)&63):(c=((c&7)<<18|(r.getUint8(a++)&63)<<12|(r.getUint8(a++)&63)<<6|r.getUint8(a++)&63)-65536,String.fromCharCode(Math.floor(c/1024)+55296,c%1024+56320))}return h(a,t)}),t_=l(function(){throw 0}),o_=l(function(e,r){return new Float64Array([e,r])}),qq=function(e){return e[0]},Oq=function(e){return e[1]},Nq=l(function(e,r){return new Float64Array([e,r[1]])}),Jq=l(function(e,r){return new Float64Array([r[0],e])}),Kq=function(e){return{pi:e[0],pk:e[1]}},Zq=function(e){return new Float64Array([e.pi,e.pk])},Xq=l(function(e,r){var a=new Float64Array(2);return a[0]=e[0]+r[0],a[1]=e[1]+r[1],a}),Yq=l(function(e,r){var a=new Float64Array(2);return a[0]=e[0]-r[0],a[1]=e[1]-r[1],a}),Qq=function(e){var r=new Float64Array(2);return r[0]=-e[0],r[1]=-e[1],r},eO=l(function(e,r){var a=new Float64Array(2);a[0]=e[0]-r[0],a[1]=e[1]-r[1];var t=1/W0(a);return a[0]=a[0]*t,a[1]=a[1]*t,a});function W0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}var rO=W0,aO=function(e){return e[0]*e[0]+e[1]*e[1]},nO=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(a*a+t*t)}),tO=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1];return a*a+t*t}),oO=function(e){var r=new Float64Array(2),a=1/W0(e);return r[0]=e[0]*a,r[1]=e[1]*a,r},cO=l(function(e,r){var a=new Float64Array(2);return a[0]=r[0]*e,a[1]=r[1]*e,a}),iO=l(function(e,r){return e[0]*r[0]+e[1]*r[1]}),G0=new Float64Array(3),Mb=new Float64Array(3),zb=new Float64Array(3),c_=P(function(e,r,a){return new Float64Array([e,r,a])}),i_=function(e){return e[0]},f_=function(e){return e[1]},$_=function(e){return e[2]},fO=l(function(e,r){return new Float64Array([e,r[1],r[2]])}),$O=l(function(e,r){return new Float64Array([r[0],e,r[2]])}),uO=l(function(e,r){return new Float64Array([r[0],r[1],e])}),lO=function(e){return{pi:e[0],pk:e[1],R:e[2]}},u_=function(e){return new Float64Array([e.pi,e.pk,e.R])},vO=l(function(e,r){var a=new Float64Array(3);return a[0]=e[0]+r[0],a[1]=e[1]+r[1],a[2]=e[2]+r[2],a});function Db(e,r,a){return a===void 0&&(a=new Float64Array(3)),a[0]=e[0]-r[0],a[1]=e[1]-r[1],a[2]=e[2]-r[2],a}var sO=l(Db),dO=function(e){var r=new Float64Array(3);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r};function Rb(e,r,a){return a===void 0&&(a=new Float64Array(3)),Oi(Db(e,r,a),a)}var bO=l(Rb);function q0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}var pO=q0,mO=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},hO=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(a*a+t*t+o*o)}),gO=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return a*a+t*t+o*o});function Oi(e,r){r===void 0&&(r=new Float64Array(3));var a=1/q0(e);return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r}var _O=Oi,yO=l(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),eo=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]},CO=l(eo);function O0(e,r,a){return a===void 0&&(a=new Float64Array(3)),a[0]=e[1]*r[2]-e[2]*r[1],a[1]=e[2]*r[0]-e[0]*r[2],a[2]=e[0]*r[1]-e[1]*r[0],a}var kO=l(O0),SO=l(function(e,r){var a,t=G0,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],a=eo(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(eo(r,t)+e[12])/a,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(eo(r,t)+e[13])/a,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(eo(r,t)+e[14])/a,o}),l_=W(function(e,r,a,t){return new Float64Array([e,r,a,t])}),v_=function(e){return e[0]},s_=function(e){return e[1]},d_=function(e){return e[2]},b_=function(e){return e[3]},PO=l(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])}),xO=l(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])}),jO=l(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])}),wO=l(function(e,r){return new Float64Array([r[0],r[1],r[2],e])}),p_=function(e){return{pi:e[0],pk:e[1],R:e[2],uA:e[3]}},m_=function(e){return new Float64Array([e.pi,e.pk,e.R,e.uA])},LO=l(function(e,r){var a=new Float64Array(4);return a[0]=e[0]+r[0],a[1]=e[1]+r[1],a[2]=e[2]+r[2],a[3]=e[3]+r[3],a}),TO=l(function(e,r){var a=new Float64Array(4);return a[0]=e[0]-r[0],a[1]=e[1]-r[1],a[2]=e[2]-r[2],a[3]=e[3]-r[3],a}),MO=function(e){var r=new Float64Array(4);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r},zO=l(function(e,r){var a=new Float64Array(4);a[0]=e[0]-r[0],a[1]=e[1]-r[1],a[2]=e[2]-r[2],a[3]=e[3]-r[3];var t=1/N0(a);return a[0]=a[0]*t,a[1]=a[1]*t,a[2]=a[2]*t,a[3]=a[3]*t,a});function N0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}var DO=N0,RO=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]},BO=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return Math.sqrt(a*a+t*t+o*o+c*c)}),AO=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return a*a+t*t+o*o+c*c}),IO=function(e){var r=new Float64Array(4),a=1/N0(e);return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r[3]=e[3]*a,r},h_=l(function(e,r){var a=new Float64Array(4);return a[0]=r[0]*e,a[1]=r[1]*e,a[2]=r[2]*e,a[3]=r[3]*e,a}),FO=l(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}),g_=new Float64Array(16),__=new Float64Array(16),VO=new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),y_=function(e){var r=new Float64Array(16);return r[0]=e.nb,r[1]=e.nf,r[2]=e.nj,r[3]=e.nn,r[4]=e.nc,r[5]=e.ng,r[6]=e.nk,r[7]=e.no,r[8]=e.nd,r[9]=e.nh,r[10]=e.nl,r[11]=e.np,r[12]=e.ne,r[13]=e.ni,r[14]=e.nm,r[15]=e.nq,r},C_=function(e){return{nb:e[0],nf:e[1],nj:e[2],nn:e[3],nc:e[4],ng:e[5],nk:e[6],no:e[7],nd:e[8],nh:e[9],nl:e[10],np:e[11],ne:e[12],ni:e[13],nm:e[14],nq:e[15]}},EO=function(e){var r=new Float64Array(16);r[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],r[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],r[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],r[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],r[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],r[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],r[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],r[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],r[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],r[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],r[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],r[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5];var a=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12];if(a===0)return L;a=1/a;for(var t=0;t<16;t=t+1)r[t]=r[t]*a;return M(r)},HO=function(e){var r=Eb(e),a=[e[12],e[13],e[14]];return r[3]=r[7]=r[11]=0,r[12]=-eo([r[0],r[4],r[8]],a),r[13]=-eo([r[1],r[5],r[9]],a),r[14]=-eo([r[2],r[6],r[10]],a),r};function Bb(e,r,a,t,o,c){var i=new Float64Array(16);return i[0]=2*o/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/(t-a),i[6]=0,i[7]=0,i[8]=(r+e)/(r-e),i[9]=(t+a)/(t-a),i[10]=-(c+o)/(c-o),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*c*o/(c-o),i[15]=0,i}var UO=Rr(Bb),WO=W(function(e,r,a,t){var o=a*Math.tan(e*Math.PI/360),c=-o,i=c*r,f=o*r;return Bb(i,f,c,o,a,t)});function Ab(e,r,a,t,o,c){var i=new Float64Array(16);return i[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-a),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2/(c-o),i[11]=0,i[12]=-(r+e)/(r-e),i[13]=-(t+a)/(t-a),i[14]=-(c+o)/(c-o),i[15]=1,i}var GO=Rr(Ab),qO=W(function(e,r,a,t){return Ab(e,r,a,t,-1,1)});function Ib(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[3],f=e[4],$=e[5],s=e[6],d=e[7],b=e[8],m=e[9],g=e[10],_=e[11],y=e[12],S=e[13],w=e[14],j=e[15],B=r[0],E=r[1],V=r[2],O=r[3],X=r[4],oe=r[5],ie=r[6],me=r[7],Te=r[8],Ie=r[9],Ve=r[10],fe=r[11],Ee=r[12],Ue=r[13],rr=r[14],Ke=r[15];return a[0]=t*B+f*E+b*V+y*O,a[1]=o*B+$*E+m*V+S*O,a[2]=c*B+s*E+g*V+w*O,a[3]=i*B+d*E+_*V+j*O,a[4]=t*X+f*oe+b*ie+y*me,a[5]=o*X+$*oe+m*ie+S*me,a[6]=c*X+s*oe+g*ie+w*me,a[7]=i*X+d*oe+_*ie+j*me,a[8]=t*Te+f*Ie+b*Ve+y*fe,a[9]=o*Te+$*Ie+m*Ve+S*fe,a[10]=c*Te+s*Ie+g*Ve+w*fe,a[11]=i*Te+d*Ie+_*Ve+j*fe,a[12]=t*Ee+f*Ue+b*rr+y*Ke,a[13]=o*Ee+$*Ue+m*rr+S*Ke,a[14]=c*Ee+s*Ue+g*rr+w*Ke,a[15]=i*Ee+d*Ue+_*rr+j*Ke,a}var OO=l(Ib),NO=l(function(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[4],f=e[5],$=e[6],s=e[8],d=e[9],b=e[10],m=e[12],g=e[13],_=e[14],y=r[0],S=r[1],w=r[2],j=r[4],B=r[5],E=r[6],V=r[8],O=r[9],X=r[10],oe=r[12],ie=r[13],me=r[14];return a[0]=t*y+i*S+s*w,a[1]=o*y+f*S+d*w,a[2]=c*y+$*S+b*w,a[3]=0,a[4]=t*j+i*B+s*E,a[5]=o*j+f*B+d*E,a[6]=c*j+$*B+b*E,a[7]=0,a[8]=t*V+i*O+s*X,a[9]=o*V+f*O+d*X,a[10]=c*V+$*O+b*X,a[11]=0,a[12]=t*oe+i*ie+s*me+m,a[13]=o*oe+f*ie+d*me+g,a[14]=c*oe+$*ie+b*me+_,a[15]=1,a}),JO=l(function(e,r){var a=new Float64Array(16);r=Oi(r,G0);var t=r[0],o=r[1],c=r[2],i=Math.cos(e),f=1-i,$=Math.sin(e);return a[0]=t*t*f+i,a[1]=o*t*f+c*$,a[2]=c*t*f-o*$,a[3]=0,a[4]=t*o*f-c*$,a[5]=o*o*f+i,a[6]=o*c*f+t*$,a[7]=0,a[8]=t*c*f+o*$,a[9]=o*c*f-t*$,a[10]=c*c*f+i,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}),KO=P(function(e,r,a){var t=new Float64Array(16),o=1/q0(r),c=r[0]*o,i=r[1]*o,f=r[2]*o,$=Math.cos(e),s=1-$,d=Math.sin(e),b=c*d,m=i*d,g=f*d,_=c*i*s,y=c*f*s,S=i*f*s,w=c*c*s+$,j=_+g,B=y-m,E=_-g,V=i*i*s+$,O=S+b,X=y+m,oe=S-b,ie=f*f*s+$,me=a[0],Te=a[1],Ie=a[2],Ve=a[3],fe=a[4],Ee=a[5],Ue=a[6],rr=a[7],Ke=a[8],zr=a[9],Ze=a[10],ur=a[11],Dr=a[12],Yr=a[13],tr=a[14],Qr=a[15];return t[0]=me*w+fe*j+Ke*B,t[1]=Te*w+Ee*j+zr*B,t[2]=Ie*w+Ue*j+Ze*B,t[3]=Ve*w+rr*j+ur*B,t[4]=me*E+fe*V+Ke*O,t[5]=Te*E+Ee*V+zr*O,t[6]=Ie*E+Ue*V+Ze*O,t[7]=Ve*E+rr*V+ur*O,t[8]=me*X+fe*oe+Ke*ie,t[9]=Te*X+Ee*oe+zr*ie,t[10]=Ie*X+Ue*oe+Ze*ie,t[11]=Ve*X+rr*oe+ur*ie,t[12]=Dr,t[13]=Yr,t[14]=tr,t[15]=Qr,t});function Fb(e,r,a){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}var ZO=P(Fb),XO=function(e){return Fb(e[0],e[1],e[2])},YO=W(function(e,r,a,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*a,o[9]=t[9]*a,o[10]=t[10]*a,o[11]=t[11]*a,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o}),QO=l(function(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2];return a[0]=r[0]*t,a[1]=r[1]*t,a[2]=r[2]*t,a[3]=r[3]*t,a[4]=r[4]*o,a[5]=r[5]*o,a[6]=r[6]*o,a[7]=r[7]*o,a[8]=r[8]*c,a[9]=r[9]*c,a[10]=r[10]*c,a[11]=r[11]*c,a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15],a});function Vb(e,r,a){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=a,t[15]=1,t}var eN=P(Vb),rN=function(e){return Vb(e[0],e[1],e[2])},aN=W(function(e,r,a,t){var o=new Float64Array(16),c=t[0],i=t[1],f=t[2],$=t[3],s=t[4],d=t[5],b=t[6],m=t[7],g=t[8],_=t[9],y=t[10],S=t[11];return o[0]=c,o[1]=i,o[2]=f,o[3]=$,o[4]=s,o[5]=d,o[6]=b,o[7]=m,o[8]=g,o[9]=_,o[10]=y,o[11]=S,o[12]=c*e+s*r+g*a+t[12],o[13]=i*e+d*r+_*a+t[13],o[14]=f*e+b*r+y*a+t[14],o[15]=$*e+m*r+S*a+t[15],o}),nN=l(function(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=r[0],f=r[1],$=r[2],s=r[3],d=r[4],b=r[5],m=r[6],g=r[7],_=r[8],y=r[9],S=r[10],w=r[11];return a[0]=i,a[1]=f,a[2]=$,a[3]=s,a[4]=d,a[5]=b,a[6]=m,a[7]=g,a[8]=_,a[9]=y,a[10]=S,a[11]=w,a[12]=i*t+d*o+_*c+r[12],a[13]=f*t+b*o+y*c+r[13],a[14]=$*t+m*o+S*c+r[14],a[15]=s*t+g*o+w*c+r[15],a}),tN=P(function(e,r,a){var t=Rb(e,r,G0),o=Oi(O0(a,t,Mb),Mb),c=Oi(O0(t,o,zb),zb),i=g_,f=__;return i[0]=o[0],i[1]=c[0],i[2]=t[0],i[3]=0,i[4]=o[1],i[5]=c[1],i[6]=t[1],i[7]=0,i[8]=o[2],i[9]=c[2],i[10]=t[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=-e[0],f[13]=-e[1],f[14]=-e[2],f[15]=1,Ib(i,f)});function Eb(e){var r=new Float64Array(16);return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],r}var oN=Eb,cN=P(function(e,r,a){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=a[0],t[9]=a[1],t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}),Hb=0;function Ni(e,r){for(;r.b;r=r.b)e(r.a)}function J0(e){for(var r=0;e.b;e=e.b)r++;return r}var k_=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},S_=je(function(e,r,a,t,o){return{$:0,a:e,b:r,c:a,d:t,e:o}}),P_=l(function(e,r){var a=e.blend;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.BLEND),a.enabled=!0),(a.a!==r.a||a.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),a.a=r.a,a.d=r.d),(a.b!==r.b||a.c!==r.c||a.e!==r.e||a.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),a.b=r.b,a.c=r.c,a.e=r.e,a.f=r.f),(a.g!==r.g||a.h!==r.h||a.i!==r.i||a.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),a.g=r.g,a.h=r.h,a.i=r.i,a.j=r.j)}),x_=l(function(e,r){var a=e.depthTest;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.DEPTH_TEST),a.enabled=!0),a.a!==r.a&&(e.gl.depthFunc(r.a),a.a=r.a),a.b!==r.b&&(e.gl.depthMask(r.b),a.b=r.b),(a.c!==r.c||a.d!==r.d)&&(e.gl.depthRange(r.c,r.d),a.c=r.c,a.d=r.d)}),j_=l(function(e,r){var a=e.stencilTest;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.STENCIL_TEST),a.enabled=!0),(a.d!==r.d||a.a!==r.a||a.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),a.d=r.d),(a.e!==r.e||a.f!==r.f||a.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),a.e=r.e,a.f=r.f,a.g=r.g),a.c!==r.c&&(e.gl.stencilMask(r.c),a.c=r.c),(a.h!==r.h||a.a!==r.a||a.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),a.h=r.h,a.a=r.a,a.b=r.b),(a.i!==r.i||a.j!==r.j||a.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),a.i=r.i,a.j=r.j,a.k=r.k)}),w_=l(function(e,r){var a=e.scissor;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),a.enabled=!0),(a.a!==r.a||a.b!==r.b||a.c!==r.c||a.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),a.a=r.a,a.b=r.b,a.c=r.c,a.d=r.d)}),L_=l(function(e,r){var a=e.colorMask;a.toggle=e.toggle,a.enabled=!0,(a.a!==r.a||a.b!==r.b||a.c!==r.c||a.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),a.a=r.a,a.b=r.b,a.c=r.c,a.d=r.d)}),T_=l(function(e,r){var a=e.cullFace;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.CULL_FACE),a.enabled=!0),a.a!==r.a&&(e.gl.cullFace(r.a),a.a=r.a)}),M_=l(function(e,r){var a=e.polygonOffset;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),a.enabled=!0),(a.a!==r.a||a.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),a.a=r.a,a.b=r.b)}),z_=l(function(e,r){var a=e.sampleCoverage;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),a.enabled=!0),(a.a!==r.a||a.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),a.a=r.a,a.b=r.b)}),D_=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},R_=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},B_=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},A_=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Ub=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Wb=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},I_=function(e){e.gl.disable(e.gl.CULL_FACE)},F_=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},V_=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},E_=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Gb=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],H_=[R_,B_,A_,Ub,Wb,I_,F_,V_,E_];function qb(e,r,a){var t=e.createShader(a);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function U_(e,r,a){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,a),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(a);return t}function Ob(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function W_(e,r,a,t){for(var o=a.a.l1,c=[],i=0;i<o;i++)c.push(String.fromCharCode(97+i));function f(g,_,y,S,w){var j;if(o===1)for(j=0;j<_;j++)g[y++]=_===1?S[w]:S[w][j];else c.forEach(function(B){for(j=0;j<_;j++)g[y++]=_===1?S[B][w]:S[B][w][j]})}var $=Ob(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var s=0,d=$.size*$.arraySize*o,b=new $.type(J0(a.b)*d);Ni(function(g){f(b,$.size*$.arraySize,s,g,t[r.name]||r.name),s+=d},a.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,b,e.STATIC_DRAW),m}function G_(e,r){if(r.a.mD>0){var a=e.createBuffer(),t=q_(r.c,r.a.mD);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,a),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:a,buffers:{}}}else return{numIndices:r.a.l1*J0(r.b),indexBuffer:null,buffers:{}}}function q_(e,r){var a=new Uint32Array(J0(e)*r),t=0,o;return Ni(function(c){if(r===1)a[t++]=c;else for(o=0;o<r;o++)a[t++]=c[String.fromCharCode(97+o)]},e),a}function Nb(e,r){return e+"#"+r}var Jb=l(function(e,r){var a=e.f,t=a.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),a.depthTest.b||(t.depthMask(!0),a.depthTest.b=!0),a.stencilTest.c!==a.STENCIL_WRITEMASK&&(t.stencilMask(a.STENCIL_WRITEMASK),a.stencilTest.c=a.STENCIL_WRITEMASK),Ub(a),Wb(a),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(c){if(c.d.b.b){var i,f,$;if(c.b.id&&c.c.id&&(i=Nb(c.b.id,c.c.id),f=a.programs[i]),!f){var s;c.b.id?s=a.shaders[c.b.id]:c.b.id=Hb++,s||(s=qb(t,c.b.src,t.VERTEX_SHADER),a.shaders[c.b.id]=s);var d;c.c.id?d=a.shaders[c.c.id]:c.c.id=Hb++,d||(d=qb(t,c.c.src,t.FRAGMENT_SHADER),a.shaders[c.c.id]=d);var b=U_(t,s,d);f={glProgram:b,attributes:Object.assign({},c.b.attributes,c.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},f.uniformSetters=O_(t,e,f,Object.assign({},c.b.uniforms,c.c.uniforms));var m=t.getProgramParameter(b,t.ACTIVE_ATTRIBUTES);for($=0;$<m;$++){var g=t.getActiveAttrib(b,$),_=t.getAttribLocation(b,g.name);f.activeAttributes.push(g),f.activeAttributeLocations.push(_)}i=Nb(c.b.id,c.c.id),a.programs[i]=f}a.lastProgId!==i&&(t.useProgram(f.glProgram),a.lastProgId=i),N_(f.uniformSetters,c.e);var y=a.buffers.get(c.d);for(y||(y=G_(t,c.d),a.buffers.set(c.d,y)),$=0;$<f.activeAttributes.length;$++){g=f.activeAttributes[$],_=f.activeAttributeLocations[$],y.buffers[g.name]===void 0&&(y.buffers[g.name]=W_(t,g,c.d,f.attributes)),t.bindBuffer(t.ARRAY_BUFFER,y.buffers[g.name]);var S=Ob(t,g.type);if(S.arraySize===1)t.enableVertexAttribArray(_),t.vertexAttribPointer(_,S.size,S.baseType,!1,0,0);else for(var w=S.size*4,j=w*S.arraySize,B=0;B<S.arraySize;B++)t.enableVertexAttribArray(_+B),t.vertexAttribPointer(_+B,S.size,S.baseType,!1,j,w*B)}for(a.toggle=!a.toggle,Ni(IV(a),c.a),$=0;$<Gb.length;$++){var E=a[Gb[$]];E.toggle!==a.toggle&&E.enabled&&(H_[$](a),E.enabled=!1,E.toggle=a.toggle)}y.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,y.indexBuffer),t.drawElements(c.d.a.nD,y.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(c.d.a.nD,0,y.numIndices)}}return Ni(o,e.g),r});function O_(e,r,a,t){var o=a.glProgram,c=a.currentUniforms,i=0,f=r.f;function $(g,_){var y=_.name,S=e.getUniformLocation(g,y);switch(_.type){case e.INT:return function(j){c[y]!==j&&(e.uniform1i(S,j),c[y]=j)};case e.FLOAT:return function(j){c[y]!==j&&(e.uniform1f(S,j),c[y]=j)};case e.FLOAT_VEC2:return function(j){c[y]!==j&&(e.uniform2f(S,j[0],j[1]),c[y]=j)};case e.FLOAT_VEC3:return function(j){c[y]!==j&&(e.uniform3f(S,j[0],j[1],j[2]),c[y]=j)};case e.FLOAT_VEC4:return function(j){c[y]!==j&&(e.uniform4f(S,j[0],j[1],j[2],j[3]),c[y]=j)};case e.FLOAT_MAT4:return function(j){c[y]!==j&&(e.uniformMatrix4fv(S,!1,new Float32Array(j)),c[y]=j)};case e.SAMPLER_2D:var w=i++;return function(j){e.activeTexture(e.TEXTURE0+w);var B=f.textures.get(j);B||(B=j.qn(e),f.textures.set(j,B)),e.bindTexture(e.TEXTURE_2D,B),c[y]!==j&&(e.uniform1i(S,w),c[y]=j)};case e.BOOL:return function(j){c[y]!==j&&(e.uniform1i(S,j),c[y]=j)};default:return function(){}}}for(var s={},d=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),b=0;b<d;b++){var m=e.getActiveUniform(o,b);s[t[m.name]||m.name]=$(o,m)}return s}function N_(e,r){Object.keys(r).forEach(function(a){var t=e[a];t&&t(r[a])})}var J_=P(function(e,r,a){return Jh(r,{g:a,f:{},h:e},ry,ay)}),K_=l(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Z_=l(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(a){a.clearDepth(r.a)})}),X_=l(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(a){a.clearStencil(r.a)})}),Y_=l(function(e,r){e.contextAttributes.antialias=!0}),Q_=l(function(e,r){e.sceneSettings.push(function(a){a.clearColor(r.a,r.b,r.c,r.d)})}),ey=l(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function ry(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ni(function(o){return n(AV,r,o)},e.h);var a=ta.createElement("canvas"),t=a.getContext&&(a.getContext("webgl",r.contextAttributes)||a.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),k_(function(){return n(Jb,e,a)})):(a=ta.createElement("div"),a.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),a}function ay(e,r){return r.f=e.f,Jb(r)}var D=Y9,wc=V9,A$=P(function(e,r,a){var t=a.c,o=a.d,c=l(function(i,f){if(i.$){var s=i.a;return v(wc,e,f,s)}else{var $=i.a;return v(wc,c,f,$)}});return v(wc,c,v(wc,e,r,o),t)}),ny=function(e){return v(A$,D,k,e)},Ji=P(function(e,r,a){e:for(;;){if(a.$===-2)return r;var t=a.b,o=a.c,c=a.d,i=a.e,f=e,$=v(e,t,o,v(Ji,e,r,i)),s=c;e=f,r=$,a=s;continue e}}),un=function(e){return v(Ji,P(function(r,a,t){return n(D,h(r,a),t)}),k,e)},I$=function(e){return v(Ji,P(function(r,a,t){return n(D,r,t)}),k,e)},ty=function(e){var r=e;return I$(r)},Kb=1,oy=2,Zb=0,M=function(e){return{$:0,a:e}},L={$:1},We=function(e){return{$:1,a:e}},K0=l(function(e,r){return{$:3,a:e,b:r}}),Xb=l(function(e,r){return{$:0,a:e,b:r}}),Yb=l(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},cy=function(e){return{$:2,a:e}},iN=1,iy=n7,fy=H7,fN=x7,$y=X9,Z0=yh,He=nb,Ur=l(function(e,r){return n(A7,e,x$(r))}),Tn=l(function(e,r){return u(n(B7,e,r))}),Qb=function(e){return n(Ur,`
    `,n(Tn,`
`,e))},ve=P(function(e,r,a){e:for(;;)if(a.b){var t=a.a,o=a.b,c=e,i=n(e,t,r),f=o;e=c,r=i,a=f;continue e}else return r}),vr=function(e){return v(ve,l(function(r,a){return a+1}),0,e)},e2=Q9,$N=N9,uN=t7,uy=P(function(e,r,a){e:for(;;)if(K(e,r)<1){var t=e,o=r-1,c=n(D,r,a);e=t,r=o,a=c;continue e}else return a}),qa=l(function(e,r){return v(uy,e,r,k)}),Oa=l(function(e,r){return v(e2,e,n(qa,0,vr(r)-1),r)}),nt=K7,r2=function(e){var r=nt(e);return 97<=r&&r<=122},a2=function(e){var r=nt(e);return r<=90&&65<=r},lN=j7,ly=function(e){return r2(e)||a2(e)},vy=function(e){var r=nt(e);return r<=57&&48<=r},n2=function(e){return r2(e)||a2(e)||vy(e)},Ae=function(e){return v(ve,D,k,e)},Ki=L7,sy=l(function(e,r){return`

(`+(He(e+1)+(") "+Qb(X0(r))))}),X0=function(e){return n(dy,e,k)},dy=l(function(e,r){e:for(;;)switch(e.$){case 0:var a=e.a,i=e.b,t=(function(){var y=Ki(a);if(y.$===1)return!1;var S=y.a,w=S.a,j=S.b;return ly(w)&&n(fy,n2,j)})(),o=t?"."+a:"['"+(a+"']"),$=i,s=n(D,o,r);e=$,r=s;continue e;case 1:var c=e.a,i=e.b,f="["+(He(c)+"]"),$=i,s=n(D,f,r);e=$,r=s;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var b=(function(){return r.b?"The Json.Decode.oneOf at json"+n(Ur,"",Ae(r)):"Json.Decode.oneOf"})(),_=b+(" failed in the following "+(He(vr(d))+" ways:"));return n(Ur,`

`,n(D,_,n(Oa,sy,d)))}else{var i=d.a,$=i,s=r;e=$,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+(function(){return r.b?" at json"+n(Ur,"",Ae(r)):"!"})();default:var m=e.a,g=e.b,_=(function(){return r.b?"Problem with the value at json"+(n(Ur,"",Ae(r))+`:

    `):`Problem with the given value:

`})();return _+(Qb(n(Z0,4,g))+(`

`+m))}}),br=32,Mn=W(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),ro=T9,Y0=_7,vN=c7,Zi=l(function(e,r){return ab(r)/ab(e)}),sN=h7,oa=Y0(n(Zi,2,br)),Lo=C(Mn,0,oa,ro,ro),t2=D9,Lc=function(e){return{$:1,a:e}},by=l(function(e,r){return e(r)}),dN=l(function(e,r){return r(e)}),ln=G9,pa=y7,ja=z9,bN=J9,ge=l(function(e,r){return K(e,r)>0?e:r}),py=o7,To=function(e){return{$:0,a:e}},Q0=R9,my=l(function(e,r){e:for(;;){var a=n(Q0,br,e),t=a.a,o=a.b,c=n(D,To(t),r);if(o.b){var i=o,f=c;e=i,r=f;continue e}else return Ae(c)}}),tt=function(e){var r=e.a;return r},hy=l(function(e,r){e:for(;;){var a=Y0(r/br);if(a===1)return n(Q0,br,e).a;var t=n(my,e,k),o=a;e=t,r=o;continue e}}),F$=l(function(e,r){if(r.Z){var a=r.Z*br,t=pa(n(Zi,br,a-1)),o=e?Ae(r.aw):r.aw,c=n(hy,o,r.Z);return C(Mn,ja(r.aj)+a,n(ge,5,t*oa),c,r.aj)}else return C(Mn,ja(r.aj),oa,ro,r.aj)}),pN=i7,mN=O9,gy=je(function(e,r,a,t,o){e:for(;;){if(r<0)return n(F$,!1,{aw:t,Z:a/br|0,aj:o});var c=Lc(v(t2,br,r,e)),i=e,f=r-br,$=a,s=n(D,c,t),d=o;e=i,r=f,a=$,t=s,o=d;continue e}}),hN=$7,V$=l(function(e,r){if(e<=0)return Lo;var a=e%br,t=v(t2,a,e-a,r),o=e-a-br;return A(gy,r,o,e,k,t)}),gN=0,zn=function(e){return!e.$},R=lh,_y={j9:k,oY:k},wa=fb,le=wa(k),Xi=fb,Mo=Xi(k),Qe=sh,La=dh,ae=Y7,ev=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},xt=$n("div"),o2=Zh,re=o2,E$=function(e){return{$:0,a:e}},H$=w7,yy=W(function(e,r,a,t){return{eq:t,eQ:a,ov:r,kz:e}}),c2=3432918353,i2=461845907,_N=yg,yN=Pg,CN=jg,zo=l(function(e,r){return(r&65535)*e+(((r>>>16)*e&65535)<<16)}),U$=q9,kN=Cg,rv=l(function(e,r){return r<<e|r>>>32-e}),SN=kg,Cy=function(e){var r=e.eQ?e.ov^n(zo,i2,n(rv,15,n(zo,c2,e.eQ))):e.ov,a=r^e.eq,t=n(zo,2246822507,a^a>>>16),o=n(zo,3266489909,t^t>>>13);return(o^o>>>16)>>>0},ky=D7,Sy=l(function(e,r){return n(zo,5,n(rv,13,e^n(zo,i2,n(rv,15,n(zo,c2,r)))))+3864292196}),Py=l(function(e,r){var a=r.eQ|(255&nt(e))<<r.kz,t=r.kz;return t===24?{eq:r.eq+1,eQ:0,ov:n(Sy,r.ov,a),kz:0}:{eq:r.eq+1,eQ:a,ov:r.ov,kz:r.kz+8}}),xy=l(function(e,r){return Cy(v(ky,Py,C(yy,0,e,0,0),r))}),jy=15739,wy=J7,PN=function(e){return-e},Kr=u7,f2=function(e){e:for(;;)switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";case 15:return"f";default:var r=e;e=r;continue e}},$2=l(function(e,r){e:for(;;){if(r<16)return n(D,f2(r),e);var a=n(D,f2(n(Kr,16,r)),e),t=r/16|0;e=a,r=t;continue e}}),Ly=function(e){return wy(e<0?n(D,"-",n($2,k,-e)):n($2,k,e))},u2=function(e){return n(H$,"_",Ly(n(xy,jy,e)))},av=Z9,Je=l(function(e,r){e:for(;;){if(r.$===-2)return L;var a=r.b,t=r.c,o=r.d,c=r.e,i=n(av,e,a);switch(i){case 0:var f=e,$=o;e=f,r=$;continue e;case 1:return M(t);default:var f=e,$=c;e=f,r=$;continue e}}}),xN=1,Re=je(function(e,r,a,t,o){return{$:-1,a:e,b:r,c:a,d:t,e:o}}),ot={$:-2},jN=0,Tc=je(function(e,r,a,t,o){if(o.$===-1&&!o.a){var c=o.a,i=o.b,f=o.c,$=o.d,s=o.e;if(t.$===-1&&!t.a){var d=t.a,b=t.b,m=t.c,g=t.d,_=t.e;return A(Re,0,r,a,A(Re,1,b,m,g,_),A(Re,1,i,f,$,s))}else return A(Re,e,i,f,A(Re,0,r,a,t,$),s)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){var y=t.a,b=t.b,m=t.c,S=t.d,w=S.a,j=S.b,B=S.c,E=S.d,V=S.e,_=t.e;return A(Re,0,b,m,A(Re,1,j,B,E,V),A(Re,1,r,a,_,o))}else return A(Re,e,r,a,t,o)}),nv=P(function(e,r,a){if(a.$===-2)return A(Re,0,e,r,ot,ot);var t=a.a,o=a.b,c=a.c,i=a.d,f=a.e,$=n(av,e,o);switch($){case 0:return A(Tc,t,o,c,v(nv,e,r,i),f);case 1:return A(Re,t,o,r,i,f);default:return A(Tc,t,o,c,i,v(nv,e,r,f))}}),fr=P(function(e,r,a){var t=v(nv,e,r,a);if(t.$===-1&&!t.a){var o=t.a,c=t.b,i=t.c,f=t.d,$=t.e;return A(Re,1,c,i,f,$)}else{var s=t;return s}}),vn=l(function(e,r){var a=e.b,t=e.c;if(a){var o=n(Je,t,r);return o.$?v(fr,t,u2(t),r):r}else return r}),tv=l(function(e,r){return n(hb,rg(e),ag(r))}),kr=w$,ao=l(function(e,r){var a=r.a,t=r.b,o=r.c;if(t){var c=n(Je,o,e);if(c.$)return n(tv,"className",kr("_unstyled"));var i=c.a;return n(tv,"className",kr(i))}else return a}),Dn=l(function(e,r){return n(z$,gb(e),_b(r))}),W$=l(function(e,r){var a=r.a,t=r.b,o=r.c;if(t){var c=n(Je,o,e);if(c.$)return n(Dn,"class","_unstyled");var i=c.a;return n(Dn,"class",i)}else return a}),G$=function(e){return Nh(D$(e))},ov=l(function(e,r){return n(pb,e,D$(r))}),l2=W(function(e,r,a,t){if(t.b){var o=t.a,c=t.b;if(c.b){var i=c.a,f=c.b;if(f.b){var $=f.a,s=f.b;if(s.b){var d=s.a,b=s.b,m=a>500?v(ve,e,r,Ae(b)):C(l2,e,r,a+1,b);return n(e,o,n(e,i,n(e,$,n(e,d,m))))}else return n(e,o,n(e,i,n(e,$,r)))}else return n(e,o,n(e,i,r))}else return n(e,o,r)}else return r}),sn=P(function(e,r,a){return C(l2,e,r,0,a)}),N=l(function(e,r){return v(sn,l(function(a,t){return n(D,e(a),t)}),k,r)}),Do=function(e){return $n(D$(e))},cv=l(function(e,r){return n(bb,e,D$(r))}),Mc=l(function(e,r){var a=e.a,t=e.b,o=r.a,c=r.b;switch(t.$){case 4:var w=t.a;return h(n(D,h(a,w),o),c);case 0:var d=t.a,b=t.b,m=t.c,g=v(ve,vn,c,b),i=v(ve,zc,h(k,g),m),y=i.a,S=i.b,w=v(Do,d,n(N,ao(S),b),Ae(y));return h(n(D,h(a,w),o),S);case 1:var s=t.a,d=t.b,b=t.c,m=t.d,g=v(ve,vn,c,b),f=v(ve,zc,h(k,g),m),y=f.a,S=f.b,w=C(cv,s,d,n(N,ao(S),b),Ae(y));return h(n(D,h(a,w),o),S);case 2:var d=t.a,b=t.b,m=t.c,g=v(ve,vn,c,b),$=v(ve,Mc,h(k,g),m),y=$.a,S=$.b,w=v(G$,d,n(N,ao(S),b),Ae(y));return h(n(D,h(a,w),o),S);default:var s=t.a,d=t.b,b=t.c,m=t.d,g=v(ve,vn,c,b),_=v(ve,Mc,h(k,g),m),y=_.a,S=_.b,w=C(ov,s,d,n(N,ao(S),b),Ae(y));return h(n(D,h(a,w),o),S)}}),zc=l(function(e,r){var a=r.a,t=r.b;switch(e.$){case 4:var y=e.a;return h(n(D,y,a),t);case 0:var $=e.a,s=e.b,d=e.c,b=v(ve,vn,t,s),o=v(ve,zc,h(k,b),d),g=o.a,_=o.b,y=v(Do,$,n(N,ao(_),s),Ae(g));return h(n(D,y,a),_);case 1:var f=e.a,$=e.b,s=e.c,d=e.d,b=v(ve,vn,t,s),c=v(ve,zc,h(k,b),d),g=c.a,_=c.b,y=C(cv,f,$,n(N,W$(_),s),Ae(g));return h(n(D,y,a),_);case 2:var $=e.a,s=e.b,d=e.c,b=v(ve,vn,t,s),i=v(ve,Mc,h(k,b),d),g=i.a,_=i.b,y=v(G$,$,n(N,ao(_),s),Ae(g));return h(n(D,y,a),_);default:var f=e.a,$=e.b,s=e.c,d=e.d,b=v(ve,vn,t,s),m=v(ve,Mc,h(k,b),d),g=m.a,_=m.b,y=C(ov,f,$,n(N,W$(_),s),Ae(g));return h(n(D,y,a),_)}}),ze=ot,Dc=function(e){return u([e])},q$=B0,ct=P(function(e,r,a){e:for(;;){if(a.$===-2)return r;var t=a.b,o=a.c,c=a.d,i=a.e,f=e,$=v(e,t,o,v(ct,e,r,c)),s=i;e=f,r=$,a=s;continue e}}),iv="\x07",O$=P(function(e,r,a){return n(Ur,r,n(Tn,e,a))}),Ty=P(function(e,r,a){return a+(`
`+v(O$,iv,r,e))}),My=function(e){return v(ct,Ty,"",e)},v2=l(function(e,r){return v(ct,P(function(a,t,o){return o+(`
`+v(O$,"."+iv,"#"+(e+("."+t)),a))}),"",r)}),fv=l(function(e,r){var a=(function(){if(r.$){var o=r.a,c=r.b,i=r.c;return n(v2,o,c)+(`
`+n(v2,o+" ",i))}else{var t=r.a;return My(t)}})();return v(Do,"span",u([n(Dn,"style","display: none;"),n(Dn,"class","elm-css-style-wrapper")]),u([v(Do,"style",(function(){if(e.$)return k;var t=e.a;return u([n(Dn,"nonce",t)])})(),Dc(q$(a)))]))}),zy=W(function(e,r,a,t){var o=v(ve,vn,ze,a),c=v(ve,zc,h(k,o),t),i=c.a,f=c.b,$=n(fv,e,E$(f)),s=n(N,ao(f),a);return v(Do,r,s,n(D,$,Ae(i)))}),Dy=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=a.a,o=r.b;if(ee(e,t))return!0;var c=e,i=o;e=c,r=i;continue e}else return!1}),Ry=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=a.a,o=r.b,c="_"+t;if(n(Dy,c,o)){var i=c,f=o;e=i,r=f;continue e}else return c}else return e}),s2=P(function(e,r,a){var t=n(Ry,"_",a),o=n(fv,e,r);return h(t,o)}),By=W(function(e,r,a,t){var o=v(ve,vn,ze,a),c=v(ve,Mc,h(k,o),t),i=c.a,f=c.b,$=v(s2,e,E$(f),i),s=n(N,ao(f),a);return v(G$,r,s,n(D,$,Ae(i)))}),Ay=je(function(e,r,a,t,o){var c=v(ve,vn,ze,t),i=v(ve,Mc,h(k,c),o),f=i.a,$=i.b,s=v(s2,e,E$($),f),d=n(N,W$($),t);return C(ov,r,a,d,n(D,s,Ae(f)))}),Iy=je(function(e,r,a,t,o){var c=v(ve,vn,ze,t),i=v(ve,zc,h(k,c),o),f=i.a,$=i.b,s=n(fv,e,E$($)),d=n(N,W$($),t);return C(cv,r,a,d,n(D,s,Ae(f)))}),Fy=function(e){switch(e.$){case 4:var r=e.a;return r;case 0:var t=e.a,o=e.b,c=e.c;return C(zy,L,t,o,c);case 1:var a=e.a,t=e.b,o=e.c,c=e.d;return A(Iy,L,a,t,o,c);case 2:var t=e.a,o=e.b,c=e.c;return C(By,L,t,o,c);default:var a=e.a,t=e.b,o=e.c,c=e.d;return A(Ay,L,a,t,o,c)}},N$=Fy,Vy=function(e){return n(xt,u([n(re,"position","fixed"),n(re,"inset","0"),n(re,"overflow","clip"),n(re,"background-color","transparent")]),u([N$(e)]))},Wr=q$,Ey=function(e){var r=e.di;if(r.b){var a=r.a,t=a.b;return n(xt,u([n(re,"position","fixed"),n(re,"inset","0"),n(re,"background-color","transparent"),n(re,"overflow","clip")]),u([t]))}else return Wr("")},$v=function(e){var r=e.a,a=e.b;return I(r,a,k)},Hy=function(e){return{la:e.la,gZ:{dp:W(function(r,a,t,o){return $v(C(e.dp,r,a,t,o))}),dq:P(function(r,a,t){return $v(v(e.dq,r,a,t))}),gj:e.gj,cZ:e.cZ,dE:P(function(r,a,t){return Vy(v(e.dE,r,a,t))})},cJ:e.cJ,cm:e.cm,mz:function(r){return _y},bG:e.bG,hA:function(r){return 0},di:u([{cJ:k,bF:"play",cU:l(function(r,a){return $v(n(e.cU,r,a))}),bG:e.bG,h6:!1}]),rU:Ey,ic:l(function(r,a){return h(0,le)}),cZ:function(r){return Mo},kW:L,iE:function(r){return k}}},Uy=function(e){return{$:1,a:e}},Wy=function(e){return{$:0,a:e}},Q=function(e){return e},Gy=Q,wN=0,LN=1,d2=Rr(function(e,r,a,t,o,c){return{ml:c,mx:r,n$:t,n7:a,od:e,oe:o}}),b2=U7,Ta=M7,dn=I7,Ma=l(function(e,r){return e<1?r:v(dn,e,Ta(r),r)}),J$=q7,Ro=function(e){return e===""},Rc=l(function(e,r){return e<1?"":v(dn,0,e,r)}),Bc=O7,p2=je(function(e,r,a,t,o){if(Ro(o)||n(b2,"@",o))return L;var c=n(J$,":",o);if(c.b){if(c.b.b)return L;var i=c.a,f=Bc(n(Ma,i+1,o));if(f.$===1)return L;var $=f;return M(_r(d2,e,n(Rc,i,o),$,r,a,t))}else return M(_r(d2,e,o,L,r,a,t))}),m2=W(function(e,r,a,t){if(Ro(t))return L;var o=n(J$,"/",t);if(o.b){var c=o.a;return A(p2,e,n(Ma,c,t),r,a,n(Rc,c,t))}else return A(p2,e,"/",r,a,t)}),h2=P(function(e,r,a){if(Ro(a))return L;var t=n(J$,"?",a);if(t.b){var o=t.a;return C(m2,e,M(n(Ma,o+1,a)),r,n(Rc,o,a))}else return C(m2,e,L,r,a)}),g2=l(function(e,r){if(Ro(r))return L;var a=n(J$,"#",r);if(a.b){var t=a.a;return v(h2,e,M(n(Ma,t+1,r)),n(Rc,t,r))}else return v(h2,e,L,r)}),Rn=W7,_2=function(e){return n(Rn,"http://",e)?n(g2,0,n(Ma,7,e)):n(Rn,"https://",e)?n(g2,1,n(Ma,8,e)):L},Bo=function(e){e:for(;;){var r=e,a=r;e=a;continue e}},TN=Q,za=Ga,qy=za(0),ma=x0,Yi=l(function(e,r){return n(ma,function(a){return za(e(a))},r)}),Oy=P(function(e,r,a){return n(ma,function(t){return n(ma,function(o){return za(n(e,t,o))},a)},r)}),Qi=function(e){return v(sn,Oy(D),za(k),e)},K$=Ih,Ny=l(function(e,r){var a=r;return w0(n(ma,K$(e),a))}),Jy=P(function(e,r,a){return n(Yi,function(t){return 0},Qi(n(N,Ny(e),r)))}),Ky=P(function(e,r,a){return za(0)}),Zy=l(function(e,r){var a=r;return n(Yi,e,a)});na.Task=z0(qy,Jy,Ky,Zy);var y2=Hi("Task"),ef=l(function(e,r){return y2(n(Yi,e,r))}),Xy=Lg,ha=l(function(e,r){if(r.$)return L;var a=r.a;return e(a)}),Yy=function(e){return{$:3,a:e}},rf=$b,Z$=P(function(e,r,a){return v(ve,l(function(t,o){var c=o.a,i=o.b,f=n(e.ic,t,c),$=f.a,s=f.b;return h($,wa(u([i,n(rf,Yy,s)])))}),h(a,le),r)}),Qy=function(e){return{$:1,a:e}},eC={$:0},ke=P(function(e,r,a){return r(e(a))}),rC=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,a=r;e=a;continue e}else return e},C2=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,a=e.b,t=e.c,o=e.d,c=o.a,i=o.b,f=o.c,$=o.d,s=o.e,d=e.e,b=d.a,m=d.b,g=d.c,_=d.d,y=_.a,S=_.b,w=_.c,j=_.d,B=_.e,E=d.e;return A(Re,0,S,w,A(Re,1,a,t,A(Re,0,i,f,$,s),j),A(Re,1,m,g,B,E))}else{var r=e.a,a=e.b,t=e.c,V=e.d,c=V.a,i=V.b,f=V.c,$=V.d,s=V.e,O=e.e,b=O.a,m=O.b,g=O.c,_=O.d,E=O.e;return A(Re,1,a,t,A(Re,0,i,f,$,s),A(Re,0,m,g,_,E))}else return e},k2=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,a=e.b,t=e.c,o=e.d,c=o.a,i=o.b,f=o.c,$=o.d,s=$.a,d=$.b,b=$.c,m=$.d,g=$.e,_=o.e,y=e.e,S=y.a,w=y.b,j=y.c,B=y.d,E=y.e;return A(Re,0,i,f,A(Re,1,d,b,m,g),A(Re,1,a,t,_,A(Re,0,w,j,B,E)))}else{var r=e.a,a=e.b,t=e.c,V=e.d,c=V.a,i=V.b,f=V.c,O=V.d,_=V.e,X=e.e,S=X.a,w=X.b,j=X.c,B=X.d,E=X.e;return A(Re,1,a,t,A(Re,0,i,f,O,_),A(Re,0,w,j,B,E))}else return e},aC=Jt(function(e,r,a,t,o,c,i){if(c.$===-1&&!c.a){var f=c.a,$=c.b,s=c.c,d=c.d,b=c.e;return A(Re,a,$,s,d,A(Re,0,t,o,b,i))}else{e:for(;;)if(i.$===-1&&i.a===1)if(i.d.$===-1)if(i.d.a===1){var m=i.a,g=i.d,_=g.a;return k2(r)}else break e;else{var y=i.a,S=i.d;return k2(r)}else break e;return r}}),X$=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,a=e.b,t=e.c,o=e.d,c=o.a,i=o.d,f=e.e;if(c===1)if(i.$===-1&&!i.a){var $=i.a;return A(Re,r,a,t,X$(o),f)}else{var s=C2(e);if(s.$===-1){var d=s.a,b=s.b,m=s.c,g=s.d,_=s.e;return A(Tc,d,b,m,X$(g),_)}else return ot}else return A(Re,r,a,t,X$(o),f)}else return ot},af=l(function(e,r){if(r.$===-2)return ot;var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(K(e,t)<0)if(c.$===-1&&c.a===1){var f=c.a,$=c.d;if($.$===-1&&!$.a){var s=$.a;return A(Re,a,t,o,n(af,e,c),i)}else{var d=C2(r);if(d.$===-1){var b=d.a,m=d.b,g=d.c,_=d.d,y=d.e;return A(Tc,b,m,g,n(af,e,_),y)}else return ot}}else return A(Re,a,t,o,n(af,e,c),i);else return n(nC,e,aa(aC,e,r,a,t,o,c,i))}),nC=l(function(e,r){if(r.$===-1){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(ee(e,t)){var f=rC(i);if(f.$===-1){var $=f.b,s=f.c;return A(Tc,a,$,s,c,X$(i))}else return ot}else return A(Tc,a,t,o,c,n(af,e,i))}else return ot}),nf=l(function(e,r){var a=n(af,e,r);if(a.$===-1&&!a.a){var t=a.a,o=a.b,c=a.c,i=a.d,f=a.e;return A(Re,1,o,c,i,f)}else{var $=a;return $}}),jt=P(function(e,r,a){var t=r(n(Je,e,a));if(t.$)return n(nf,e,a);var o=t.a;return v(fr,e,o,a)}),ne=l(function(e,r){if(r.$)return e;var a=r.a;return a}),tC=function(e){return n(jt,e,n(ke,ne(0),n(ke,iy(1),M)))},oC=l(function(e,r){return v(ct,P(function(a,t,o){return n(e,a,t)?v(fr,a,t,o):o}),ze,r)}),cC=function(e){if(e.b){var r=I$(n(oC,l(function(a,t){return t>1}),v(ve,l(function(a,t){return n(tC,a.bF,t)}),ze,e)));return r.b?M(Qy(r)):L}else return M(eC)},uv=l(function(e,r){return r.b?v(sn,D,r,e):e}),Bn=function(e){return v(sn,uv,k,e)},An=l(function(e,r){return Bn(n(N,e,r))}),In=4294967295>>>32-oa,MN=K9,no=B9,iC=P(function(e,r,a){e:for(;;){var t=In&r>>>e,o=n(no,t,a);if(o.$){var s=o.a;return n(no,In&r,s)}else{var c=o.a,i=e-oa,f=r,$=c;e=i,r=f,a=$;continue e}}}),Ac=function(e){return e>>>5<<5},Br=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d;return e<0||K(e,a)>-1?L:K(e,Ac(a))>-1?M(n(no,In&e,c)):M(v(iC,t,e,o))}),fC=function(e){var r=e;return n(ne,r.ov,n(Br,n(Kr,r.cK,r.dy+r.aW),r.eO))},Ic=function(e){if(e.$){var a=e.a;return n(ne,a.ov,n(Br,a.aW,a.eO))}else{var r=e.a;return fC(r)}},Y$=function(e){var r=e.b;return r},Fc=function(e){var r=e.b;return Ic(r).b},Vc=function(e){return e.nD},Fn=function(e){return e.e},zN=7,tf=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b;if(e(a))return!0;var o=e,c=t;e=o,r=c;continue e}else return!1}),Q$=l(function(e,r){return n(tf,function(a){return ee(a,e)},r)}),ga=l(function(e,r){var a=r;return n(Q$,e,a.aP)}),S2=function(e){return n(ga,7,e.h)},$C=function(e){return e.al},J=nb,P2=function(e){var r=e;return n(N,function(a){var t=a.a,o=a.b;return h(r.rC(t)+"Off",J(o.pi)+(","+J(o.pk)))},r.cW)},uC=function(e){return P2(e.h)},bn=l(function(e,r){return v(ve,Ph(e),Ch(0),r)}),x2=function(e){return n(Z0,0,n(bn,function(r){var a=r.a,t=r.b;return n(bn,kr,u([a,t]))},e))},lC=function(e){return e?"landscape":"portrait"},vC=function(e){var r=e;return r.c7.ss+("|"+lC(r.d2))},sC=l(function(e,r){return vC(r)+("|"+(e?"open":"closed"))}),eu=function(e){return"play:"+e},Ec=l(function(e,r){return"play:"+(r+(":"+e))}),j2=function(e){var r=e;return r.gW},dC=function(e){var r=e;return r.c6.ka.ss},of=function(e){var r=e;return r.dX},bC=function(e){var r=e;return r.dl.ka.ss},w2=function(e){switch(e){case 0:return"Red";case 1:return"Green";case 2:return"Yellow";case 3:return"Blue";case 4:return"Magenta";default:return"Cyan"}},pC=function(e){return n(Ur,"|",u([dC(e),bC(e),of(e)?"1":"0",w2(j2(e))]))},L2=function(e){switch(e){case 0:return"User";case 1:return"Author";default:return"Developer"}},T2=l(function(e,r){var a=Fc(r.t7),t=n(An,function(o){var c=n(Je,o.bF,a.di);if(c.$)return k;var i=c.a;return P2(i.h4)},e.di);return u([h(eu("hud-panel-layout"),x2(uC(r.cm))),h(n(Ec,r.sU,"panel-layout"),x2(t)),h(eu("mode"),L2(Vc(r.cm))),h(n(Ec,r.sU,"theme"),pC(Fn(r.cm))),h(n(Ec,r.sU,"device"),n(sC,S2(r.cm),$C(r.cm)))])}),lv=gh,Sr=$h,sr=oh,to=l(function(e,r){return h(e,r)}),Ce=th,M2=l(function(e,r){if(r.$)return e;var a=r.a;return a}),z2=function(e){return n(M2,k,n(lv,sr(v(La,to,n(Sr,0,Ce),n(Sr,1,Ce))),e))},DN=Q,RN=1,BN=0,AN=2,vv=u([{aI:0,ss:"iPhone SE",gt:{ju:667,k6:375}},{aI:0,ss:"iPhone 12 Pro",gt:{ju:844,k6:390}},{aI:0,ss:"iPhone 14 Pro Max",gt:{ju:932,k6:430}},{aI:0,ss:"Pixel 7",gt:{ju:915,k6:412}},{aI:0,ss:"Samsung Galaxy S20 Ultra",gt:{ju:915,k6:412}},{aI:0,ss:"Samsung Galaxy S8+",gt:{ju:740,k6:360}},{aI:1,ss:"Galaxy Z Fold 5",gt:{ju:882,k6:344}},{aI:1,ss:"Surface Duo",gt:{ju:720,k6:540}},{aI:2,ss:"iPad Mini",gt:{ju:1024,k6:768}},{aI:2,ss:"iPad Air",gt:{ju:1180,k6:820}},{aI:2,ss:"iPad Pro",gt:{ju:1366,k6:1024}},{aI:2,ss:"Surface Pro 7",gt:{ju:1368,k6:912}}]),Pr=l(function(e,r){return v(sn,l(function(a,t){return e(a)?n(D,a,t):t}),k,r)}),pr=function(e){if(e.b){var r=e.a,a=e.b;return M(r)}else return L},mC=function(e){return pr(n(Pr,function(r){return ee(r.ss,e)},vv))},IN=Q,FN=Q,D2=14,hC=8,gC=function(e){return e===" "||e==="	"||e==="/"||e==="."||e===":"||e===";"||e===","||e==="|"||e==="\\"||e==="_"||e==="-"||e==="*"},_C=function(e){var r=nt(e);return r>=97&&r<=122},yC=function(e){var r=nt(e);return r>=65&&r<=90},CC=P(function(e,r,a){e:for(;;)if(r.b){var t=r.a,o=r.b,c=gC(e)?D2:_C(e)&&yC(t)?hC:0,i=t,f=o,$=n(D,c,a);e=i,r=f,a=$;continue e}else return Ae(a)}),kC=function(e){if(e.b){var r=e.a,a=e.b;return n(D,D2,v(CC,r,a,k))}else return k},SC=R7,Hc=function(e){return v(SC,D,k,e)},sv=X7,PC=function(e){var r=Hc(e),a=n(N,sv,r);return{lu:kC(r),jK:a}},ru=l(function(e,r){return{bg:r,eU:L,dT:!1,h8:n(N,function(a){return h(a,PC(e(a)))},r),b1:0,im:"",a7:0}}),dv=P(function(e,r,a){if(r.$===1)return L;var t=r.a;if(a.$===1)return L;var o=a.a;return M(n(e,t,o))}),VN=1,EN=0,xC=function(e){switch(e){case"portrait":return M(0);case"landscape":return M(1);default:return L}},cf=l(function(e,r){var a=r;return z(a,{eU:e})}),jC=function(e){var r=n(Tn,"|",e);if(r.b&&r.b.b&&!r.b.b.b){var a=r.a,t=r.b,o=t.a;return v(dv,l(function(c,i){return{c7:c,d2:i,b_:n(cf,M(c),n(ru,function(f){return f.ss},vv))}}),mC(a),xC(o))}else return L},de=l(function(e,r){if(r.$)return L;var a=r.a;return M(e(a))}),wC=function(e){var r=n(Tn,"|",e);if(r.b&&r.b.b&&r.b.b.b&&!r.b.b.b.b){var a=r.a,t=r.b,o=t.a,c=t.b,i=c.a;return n(de,function(f){return h(f,i==="open")},jC(a+("|"+o)))}else return L},HN=Q,au=ze,R2=l(function(e,r){var a=r;return v(fr,e,0,a)}),nu=l(function(e,r){var a=n(Je,e,r);return!a.$}),B2=l(function(e,r){var a=r;return n(nu,e,a)}),LC=function(e){return Ae(v(ve,l(function(r,a){var t=a.a,o=a.b;return n(B2,r,t)?h(t,o):h(n(R2,r,t),n(D,r,o))}),h(au,k),e).b)},TC=function(e){return{$:0,a:e}},MC=3600,zC=TC(MC),pn=function(e){return v(ve,l(function(r,a){var t=r.a,o=r.b;return v(fr,t,o,a)}),ze,e)},UN=1,WN=2,GN=0,DC=function(e){switch(e){case"User":return M(0);case"Author":return M(1);case"Developer":return M(2);default:return L}},bv=function(e){return{$:4,a:e}},A2=function(e){return{$:3,a:e}},pv=l(function(e,r){return{$:0,a:e,b:r}}),I2=l(function(e,r){return{$:2,a:e,b:r}}),F2=function(e){return{$:5,a:e}},V2=function(e){return{$:1,a:e}},RC=P(function(e,r,a){e:for(;;)if(a.b){var t=a.a,o=a.b;if(r(t))return M(e);var c=e+1,i=r,f=o;e=c,r=i,a=f;continue e}else return L}),mv=RC(0),qN=Q,Vn=l(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){var a=r.a,t=r.b,o=e-1,c=t;e=o,r=c;continue e}else return r}}),BC=P(function(e,r,a){e:for(;;){if(e<=0)return a;if(r.b){var t=r.a,o=r.b,c=e-1,i=o,f=n(D,t,a);e=c,r=i,a=f;continue e}else return a}}),AC=l(function(e,r){return Ae(v(BC,e,r,k))}),E2=P(function(e,r,a){if(r<=0)return k;var t=h(r,a);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,j=o.a,c=o.b,i=c.a;return u([j,i]);case 3:if(t.b.b.b.b){var f=t.b,j=f.a,$=f.b,i=$.a,s=$.b,d=s.a;return u([j,i,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var b=t.b,j=b.a,m=b.b,i=m.a,g=m.b,d=g.a,_=g.b,y=_.a,S=_.b;return e>1e3?n(D,j,n(D,i,n(D,d,n(D,y,n(AC,r-4,S))))):n(D,j,n(D,i,n(D,d,n(D,y,v(E2,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return a;return a}var w=t.b,j=w.a;return u([j])}),it=l(function(e,r){return v(E2,0,e,r)}),wt=function(e){var r=e;return Y(Ae(r.p),n(D,r.fH,r.r))},ft=l(function(e,r){var a=r,t=wt(a),o=n(Kr,vr(t),e),c=n(Vn,o,t);if(c.b){var i=c.a,f=c.b;return{r:f,p:Ae(n(it,o,t)),fH:i}}else return a}),U=W(function(e,r,a,t){return{aV:t,aY:e,F:a,a5:r}}),oo=N7,IC=l(function(e,r){var a=l(function(g,_){var y=g.a,S=g.b;return K(_,y)>-1&&K(_,S)<1});switch(e.$){case 0:var t=e.a;return n(ha,function(g){return n(a,t,g)?M(n(pv,t,g)):L},oo(r));case 2:var t=e.a;return n(ha,function(g){return n(a,t,g)?M(n(I2,t,g)):L},Bc(r));case 4:switch(r){case"true":return M(bv(!0));case"false":return M(bv(!1));default:return L}case 1:return M(V2(r));case 3:var o=n(N,oo,n(Tn,",",r));if(o.b&&!o.a.$&&o.b.b&&!o.b.a.$&&o.b.b.b&&!o.b.b.a.$&&o.b.b.b.b&&!o.b.b.b.a.$&&!o.b.b.b.b.b){var c=o.a.a,i=o.b,f=i.a.a,$=i.b,s=$.a.a,d=$.b,b=d.a.a;return M(A2(C(U,c,f,s,b)))}else return L;default:var m=e.a;return n(de,function(g){return F2(n(ft,g,m))},n(mv,ln(r),wt(m)))}}),H2=l(function(e,r){var a=pn(e);return n(N,function(t){return z(t,{be:n(N,function(o){var c=o.a,i=o.b;return h(c,(function(){var f=n(Je,c,a);if(f.$)return i;var $=f.a;return n(ne,i,n(IC,i,$))})())},t.be)})},r)}),Uc=l(function(e,r){var a=n(Pr,function(c){var i=c.a;return ee(i,e)},r);if(a.b){var t=a.a,o=t.b;return M(o)}else return L}),ON=Q,FC=P(function(e,r,a){var t=e(r);if(t.$)return a;var o=t.a;return n(D,o,a)}),xr=l(function(e,r){return v(sn,FC(e),k,r)}),U2=l(function(e,r){return e<1?r:v(dn,0,-e,r)}),W2=G7,VC=l(function(e,r){return n(W2,"Off",r)?e(n(U2,Ta("Off"),r)):L}),EC=function(e){var r=n(Tn,",",e);if(r.b&&r.b.b&&!r.b.b.b){var a=r.a,t=r.b,o=t.a;return v(dv,l(function(c,i){return{pi:c,pk:i}}),oo(a),oo(o))}else return L},G2=l(function(e,r){var a=r,t=n(xr,function(o){var c=o.a,i=o.b;return n(ha,function(f){return n(de,to(f),EC(i))},n(VC,a.rB,c))},e);return z(a,{cW:t})}),HC=l(function(e,r){return z(r,{h:n(G2,e,r.h)})}),q2=0,NN=Q,hv={L:ze},JN=3,KN=4,ZN=2,XN=1,YN=5,QN=0,O2=function(e){switch(e){case"windows":return 0;case"mac":return 1;case"linux":return 2;case"android":return 3;case"ios":return 4;default:return 5}},UC=l(function(e,r){return{la:{pu:!1,q6:L},cJ:hv,dJ:k,g3:0,cd:e,ez:r.ez,eA:r.eA,hh:r.hh,mg:!0,q7:r.q7,f4:"play",hD:r.hD,ns:ze,nD:q2,sS:au,j8:O2(r.j8),nX:0,gi:{lN:0,lO:0,bH:0,bR:0,pb:0,pc:0},s6:r.s6,tf:r.tf,du:r.du,$9:r.$9,ef:r.ef,pd:!0,fs:r.fs,pm:!1}}),N2={aI:0,ss:"iPhone 12 Pro",gt:{ju:844,k6:390}},WC={c7:N2,d2:0,b_:n(cf,M(N2),n(ru,function(e){return e.ss},vv))},GC=function(e){return e.ip+(": "+e.e$)},eJ=Q,rJ=Q,tu={bE:k,bL:k,bp:0,bq:0},qC=tu,OC={jZ:0,gq:qC},J2={$:0},NC=J2,aJ=Q,nJ=3,tJ=5,oJ=1,cJ=4,iJ=0,fJ=2,K2=h(0,u([1,2,3,4,5])),gv=function(e){var r=e.a,a=e.b;return{r:a,p:k,fH:r}},$t=function(e){var r=e;return r.fH},Z2=function(e){var r=e,a=r.r;if(a.b){var t=a.a,o=a.b;return{r:o,p:n(D,r.fH,r.p),fH:t}}else return r},X2=function(e){return n(ft,0,e)},er=function(e){return!e.b},JC=function(e){var r=e;return er(r.r)},Y2=l(function(e,r){var a=function(t){e:for(;;){if(ee($t(t),e))return M(t);if(JC(t))return L;var o=Z2(t);t=o;continue e}};return a(X2(r))}),KC=function(e){var r=gv(K2);return n(ne,r,n(Y2,e,r))},ZC={pE:C(U,.5833,.0952,.21,1),pK:C(U,.5833,.0952,.21,1),pL:C(U,.5718,.9231,.39,1),pR:C(U,.5667,.0505,.495,1),pS:C(U,.5673,.6341,.59,1),pT:C(U,.4869,.6,.575,1),pU:C(U,.4722,.6,.5,1),pV:C(U,.963,.5294,.575,1),pW:C(U,.0224,1,.665,1),pX:C(U,0,0,1,1),pY:C(U,.1373,1,.575,1),qq:C(U,.4891,.7176,.425,1),ra:C(U,0,0,.96,1),rn:C(U,.4697,1,.33,1),rN:!0,r2:C(U,.7361,.6,.5,1),ss:"Erkal Dark",ti:C(U,.95,1,.5,1),uC:C(U,0,0,.82,1),uS:C(U,.1315,1,.45,1)},XC={pE:C(U,0,0,.96,1),pK:C(U,.5833,.0952,.21,1),pL:C(U,.5673,.8966,.29,1),pR:C(U,.5833,.0476,.42,1),pS:C(U,.5718,.9231,.39,1),pT:C(U,.4891,.7176,.425,1),pU:C(U,.4697,1,.33,1),pV:C(U,.963,.6,.375,1),pW:C(U,.0288,.5909,.44,1),pX:C(U,0,0,.82,1),pY:C(U,.1315,1,.45,1),qq:C(U,.4845,.6825,.315,1),ra:C(U,.5833,.0952,.21,1),rn:C(U,.4551,1,.26,1),rN:!1,r2:C(U,.7167,.7143,.35,1),ss:"Erkal Light",ti:C(U,.95,1,.4,1),uC:C(U,0,0,.96,1),uS:C(U,.131,1,.35,1)},YC={pE:C(U,.6784,.5072,.1195,1),pK:C(U,.6784,.5072,.1195,1),pL:C(U,.6963,.7334,.3908,1),pR:C(U,.6596,.1664,.2542,1),pS:C(U,.6963,.8378,.5419,1),pT:C(U,.4985,.746,.7698,1),pU:C(U,.2473,.9215,.6656,1),pV:C(U,.8231,.9879,.5331,1),pW:C(U,.9805,.9839,.5313,1),pX:C(U,.1717,.0624,.8829,1),pY:C(U,.1378,.9702,.5499,1),qq:C(U,.4985,.432,.6569,1),ra:C(U,.1708,.1275,.8046,1),rn:C(U,.2473,.6142,.5669,1),rN:!0,r2:C(U,.8231,.8982,.4245,1),ss:"Inferno",ti:C(U,.9804,.8923,.417,1),uC:C(U,.1712,.0491,.7129,1),uS:C(U,.1378,.8074,.4652,1)},QC={pE:C(U,.6758,.4926,.1233,1),pK:C(U,.6758,.4926,.1233,1),pL:C(U,.6963,.7334,.3908,1),pR:C(U,.6576,.1668,.257,1),pS:C(U,.6963,.8378,.5419,1),pT:C(U,.4985,.746,.7698,1),pU:C(U,.2989,.7749,.7169,1),pV:C(U,.8231,.9879,.5331,1),pW:C(U,.9805,.9839,.5313,1),pX:C(U,.1241,.0824,.8856,1),pY:C(U,.1226,.912,.646,1),qq:C(U,.4985,.432,.6569,1),ra:C(U,.1238,.1697,.8105,1),rn:C(U,.2989,.48,.6076,1),rN:!0,r2:C(U,.8231,.8982,.4245,1),ss:"Magma",ti:C(U,.9804,.8923,.417,1),uC:C(U,.1239,.0643,.7167,1),uS:C(U,.1227,.6106,.5447,1)},co={aV:1,aY:0,F:0,a5:0},Wc=function(e){return n(H$,e,"")},ek=function(e){switch(e){case"0":return M(0);case"1":return M(1);case"2":return M(2);case"3":return M(3);case"4":return M(4);case"5":return M(5);case"6":return M(6);case"7":return M(7);case"8":return M(8);case"9":return M(9);case"a":return M(10);case"b":return M(11);case"c":return M(12);case"d":return M(13);case"e":return M(14);case"f":return M(15);default:return L}},Q2=E7,_v=function(e){return v(ve,l(function(r,a){if(a.$===1){var t=a.a;return We(t)}else{var o=a.a,c=ek(r);if(c.$)return We("Invalid hex digit: "+Wc(r));var i=c.a;return Ge(o*16+i)}}),Ge(0),Hc(Q2(e)))},qe=l(function(e,r){return K(e,r)<0?e:r}),rk=P(function(e,r,a){var t=n(qe,e,n(qe,r,a)),o=n(ge,e,n(ge,r,a)),c=(o+t)/2,i=o-t;if(i<1e-10)return{aV:1,aY:0,F:c,a5:0};var f=c>.5?i/(2-o-t):i/(o+t),$=(function(){if(o-e<1e-10){var d=K(r,a)<0?6:0;return(r-a)/i+d}else return o-r<1e-10?(a-e)/i+2:(e-r)/i+4})(),s=$/6;return{aV:1,aY:s,F:c,a5:f}}),e3=function(e){var r=n(Rn,"#",e)?n(Ma,1,e):e;if(Ta(r)!==6)return We("Expected 6-character hex string, got: "+e);var a=v(dn,0,2,r),t=v(dn,2,4,r),o=v(dn,4,6,r),c=I(_v(a),_v(t),_v(o));if(!c.a.$&&!c.b.$&&!c.c.$){var i=c.a.a,f=c.b.a,$=c.c.a;return Ge(v(rk,i/255,f/255,$/255))}else return We("Invalid hex color: "+e)},p=l(function(e,r){var a=function(o){return n(M2,co,e3(v(dn,o*6,(o+1)*6,r)))},t=a(17);return{pE:t,pK:a(0),pL:a(4),pR:a(8),pS:a(12),pT:a(14),pU:a(10),pV:a(13),pW:a(9),pX:a(15),pY:a(11),qq:a(6),ra:a(16),rn:a(2),rN:t.F<.5,r2:a(5),ss:e,ti:a(1),uC:a(7),uS:a(3)}}),ak={pE:C(U,.6338,.2131,.4193,1),pK:C(U,.6338,.2131,.4193,1),pL:C(U,.6711,.9819,.3556,1),pR:C(U,.6313,.1141,.4988,1),pS:C(U,.6733,.9724,.4995,1),pT:C(U,.5206,.9279,.6164,1),pU:C(U,.408,.9525,.6016,1),pV:C(U,.8129,.6577,.6082,1),pW:C(U,.0348,.7434,.583,1),pX:C(U,.1588,.059,.8705,1),pY:C(U,.1378,.9702,.5499,1),qq:C(U,.5206,.6303,.518,1),ra:C(U,.1581,.1657,.844,1),rn:C(U,.408,.663,.5087,1),rN:!0,r2:C(U,.8129,.4325,.4851,1),ss:"Parula",ti:C(U,.0348,.5435,.4645,1),uC:C(U,.1584,.0494,.7011,1),uS:C(U,.1378,.8074,.4652,1)},nk={pE:C(U,.6497,.2697,.2788,1),pK:C(U,.6497,.2697,.2788,1),pL:C(U,.6963,.7334,.3908,1),pR:C(U,.6441,.1308,.3827,1),pS:C(U,.6963,.8378,.5419,1),pT:C(U,.4985,.746,.7698,1),pU:C(U,.2594,.8806,.6797,1),pV:C(U,.8231,.9879,.5331,1),pW:C(U,.9805,.9839,.5313,1),pX:C(U,.1553,.0578,.8652,1),pY:C(U,.1378,.9702,.5499,1),qq:C(U,.4985,.432,.6569,1),ra:C(U,.1544,.1443,.7845,1),rn:C(U,.2594,.5758,.578,1),rN:!0,r2:C(U,.8231,.8982,.4245,1),ss:"Plasma",ti:C(U,.9804,.8923,.417,1),uC:C(U,.1549,.0495,.696,1),uS:C(U,.1378,.8074,.4652,1)},tk={pE:C(U,.7616,.2492,.257,1),pK:C(U,.7616,.2492,.257,1),pL:C(U,.6711,.9819,.3556,1),pR:C(U,.7582,.1116,.3649,1),pS:C(U,.6733,.9724,.4995,1),pT:C(U,.5003,1,.4968,1),pU:C(U,.367,.9956,.5641,1),pV:C(U,.7883,.876,.5781,1),pW:C(U,.0151,.5947,.5814,1),pX:C(U,.1828,.0453,.8406,1),pY:C(U,.1749,.9924,.6211,1),qq:C(U,.5003,1,.4251,1),ra:C(U,.1818,.1003,.7645,1),rn:C(U,.3705,.8413,.4617,1),rN:!0,r2:C(U,.7886,.6673,.4517,1),ss:"Viridis",ti:C(U,.015,.4413,.4578,1),uC:C(U,.1823,.0425,.6725,1),uS:C(U,.1749,.7036,.5343,1)},r3=u([n(p,"Argonaut","232323ff000f8ce10bffb900008df86d43a600d8ebffffff444444ff2740abe15bffd2420092ff9a5feb67fff0fffffffffaf40e1019"),n(p,"0x96f","262427ff666db3e03affc73900cde8a392e89deaf6fcfcfa545452ff7e83bee55effd05e1bd5ebb0a3ebacedf8fcfcfafcfcfa262427"),n(p,"12-bit Rainbow","000000a0305040d080e090403060b06030900090c0dbded8685656c0606090d050e0d00000b0c080107020b0c0fffffffeffff040404"),n(p,"3024 Day","090300db2d2001a252caba0001a0e4a16a948fbecea5a2a25c5855dbaec33a34324a4543807d7cbcbbbacdab53f7f7f74a4543f7f7f7"),n(p,"3024 Night","090300db2d2001a252fded0201a0e4a16a94b5e4f4a5a2a25c5855e8bbd047413f4a4543807d7cd6d5d4cdab53f7f7f7a5a2a2090300"),n(p,"Aardvark Blue","191919aa342e4b8c0fdbba001370d3c43ac3008eb0bebebe525252f05b5095dc55ffe76360a4ece26be260b6cbf7f7f7dddddd102040"),n(p,"Abernathy","000000cd000000cd00cdcd001093f5cd00cd00cdcdfaebd7404040ff000000ff00ffff0011b5f6ff00ff00ffffffffffeeeeec111416"),n(p,"Adventure","040404d84a335da602eebb6e417ab3e5c499bdcfe5dbded8685656d76b4299b52cffb67097d7efaa7900bdcfe5e4d5c7feffff040404"),n(p,"Adventure Time","050404bd00134ab118e7741e0f4ac666599370a598f8dcc04e7cbffc5f5a9eff6eefc11a1997c69b5953c8faf4f6f5fbf8dcc01f1d45"),n(p,"Adwaita","241f31c01c282ec27ee8b5041e78e49841bb0ab9dcc0bfbc5e5c64ed333b4ad67cd2be3651a1ffc061cb4fd2fdf6f5f4000000ffffff"),n(p,"Adwaita Dark","241f31c01c282ec27ef5c2111e78e49841bb0ab9dcc0bfbc5e5c64ed333b57e389f8e45c51a1ffc061cb4fd2fdf6f5f4ffffff1d1d20"),n(p,"Afterglow","151515ac41427e8e50e5b5676c99bb9f4e857dd6cfd0d0d0505050ac41427e8e50e5b5676c99bb9f4e857dd6cff5f5f5d0d0d0212121"),n(p,"Aizen Dark","1a1a1af08898a4e09cf5dea484b4f8c8a2f490dcd0d0d6f0444444f08898a4e09cf5dea484b4f8c8a2f490dcd0ffffffd0d6f01a1a1a"),n(p,"Aizen Light","f0f2f6d00c363e9e28dd8c1a1c64f28636ec1590964a4d66adb2bcd00c363e9e28dd8c1a1c64f28636ec1590964a4d664a4d66f0f2f6"),n(p,"Alabaster","000000aa3731448c27cb9000325cc07a3e9d0083b2b7b7b7777777f0505060cb00f2af50007acce64ce600aacbf7f7f7000000f7f7f7"),n(p,"Alien Blood","1126167f2b272f7e25717f242f6a7f47587f327f77647d753c4812e0800918e000bde00000aae00058e000e0c473fa91637d750f1610"),n(p,"Andromeda","000000cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5666666cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5e5e5e5262a33"),n(p,"Apple Classic","000000c91b0000c200c7c4001c3fe1ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffd5a2002c2b2b"),n(p,"Apple System Colors","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74bffd60a0a84ffbf5af276d6ffffffffffffff1e1e1e"),n(p,"Apple System Colors Light","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74be5bc000a84ffbf5af269c9f2ffffff000000feffff"),n(p,"Arcoiris","333333da270012c258ffc656518bfce37bd963fad5bab2b2777777ffb9b9e3f6aaffddaab3e8f3cbbaf9bcffc7efefefeee4d9201f1e"),n(p,"Ardoise","2c2c2cd3322d588b35fca93a2465c27332b464e1b8f7f7f7535353fa58528dc252ffea516ab5f8be68ca89ffdbfefefeeaeaea1e1e1e"),n(p,"Arthur","3d352acd5c5c86af80e8ae5b6495eddeb887b0c4debbaa99554444cc553388aa22ffa75d87ceeb996600b0c4deddccbbddeedd1c1c1c"),n(p,"Atelier Sulphurpool","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b294f587c5e6687898ea4dfe2f19c637af5f7ff979db4202746"),n(p,"Atom","000000fd5ff187c38affd7b185befdb9b6fc85befde0e0e04c4c4cfd5ff194fa36f5ffa896cbfeb9b6fc85befde0e0e0c5c8c6161719"),n(p,"Atom One Dark","21252be06c7598c379e5c07b61afefc678dd56b6c2abb2bf767676e06c7598c379e5c07b61afefc678dd56b6c2abb2bfabb2bf21252b"),n(p,"Atom One Light","000000de3e353f953ad2b67c2f5af39500953f953abbbbbb000000de3e353f953ad2b67c2f5af3a000953f953affffff2a2c33f9f9f9"),n(p,"Aura","110f18ff676761ffcaffca85a277ffa277ff61ffcaedecee4d4d4dffca85a277ffffca85a277ffa277ff61ffcaedeceeedecee15141b"),n(p,"Aurora","23262ef0266f8fd46dffe66d102ee4ee5d4303d6b8c74ded4f545ef926728fd46dffe66d03d6b8ee5d4303d6b8c74dedffca2823262e"),n(p,"Ayu","11151cea6c737fd962f9af4f53bdfacda1fa90e1c6c7c7c7686868f07178aad94cffb45459c2ffd2a6ff95e6cbffffffbfbdb60b0e14"),n(p,"Ayu Light","000000ea6c6d6cbf43eca9443199e19e75c746ba94bababa686868f0717186b300f2ae49399ee6a37acc4cbf99d1d1d15c6166f8f9fa"),n(p,"Ayu Mirage","171b24ed827487d96cfacc6e6dcbfadabafa90e1c6c7c7c7686868f28779d5ff80ffd17373d0ffdfbfff95e6cbffffffcccac21f2430"),n(p,"Banana Blueberry","17141fff6b7f00bd9ce6c62f22e8dfdc396a56b6c2f1f1f1495162fe9ea198c379f9e46b91fff4da70d6bcf3ffffffffcccccc191323"),n(p,"Batman","1b1d1ee6dc44c8be46f4fd2273717474727162605fc6c5bf505354fff78efff27dfeed6c9194959a9a9da3a3a6dadbd66f6f6f1b1d1e"),n(p,"Belafonte Day","20111bbe100e858162d08b30426a7997522c989a9c968c835e5252be100e858162d08b30426a7997522c989a9cd5ccba45373cd5ccba"),n(p,"Belafonte Night","20111bbe100e858162eaa549426a7997522c989a9c968c835e5252be100e858162eaa549426a7997522c989a9cd5ccba968c8320111b"),n(p,"Birds Of Paradise","573d26be2d266ba18ae99d2a5a86adac80a674a6ade0dbb79b6c4ae8462795d8bad0d150b8d3edd19ecb93cfd7fff9d5e0dbb72a1f1d"),n(p,"Black Metal","000000486e6fdd9999a06666888888999999aaaaaac1c1c1404040486e6fdd9999a06666888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Black Metal (Bathory)","0000005f8787fbcb97e78a53888888999999aaaaaac1c1c14040405f8787fbcb97e78a53888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Black Metal (Burzum)","0000005f8787ddeecc99bbaa888888999999aaaaaac1c1c14040405f8787ddeecc99bbaa888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Black Metal (Dark Funeral)","0000005f8787d0dfee5f81a5888888999999aaaaaac1c1c14040405f8787d0dfee5f81a5888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Black Metal (Gorgoroth)","0000005f87879b8d7f8c7f70888888999999aaaaaac1c1c14040405f87879b8d7f8c7f70888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Black Metal (Immortal)","0000005f87877799bb556677888888999999aaaaaac1c1c14040405f87877799bb556677888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Black Metal (Khold)","0000005f8787eceee3974b46888888999999aaaaaac1c1c14040405f8787eceee3974b46888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Black Metal (Marduk)","0000005f8787a5aaa7626b67888888999999aaaaaac1c1c14040405f8787a5aaa7626b67888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Black Metal (Mayhem)","0000005f8787f3ecd4eecc6c888888999999aaaaaac1c1c14040405f8787f3ecd4eecc6c888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Black Metal (Nile)","0000005f8787aa9988777755888888999999aaaaaac1c1c14040405f8787aa9988777755888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Black Metal (Venom)","0000005f8787f8f7f279241f888888999999aaaaaac1c1c14040405f8787f8f7f279241f888888999999aaaaaac1c1c1c1c1c1000000"),n(p,"Blazer","000000b87a7a7ab87ab8b87a7a7ab8b87ab87ab8b8d9d9d94c4c4cdbbdbdbddbbddbdbbdbdbddbdbbddbbddbdbffffffd9e6f20d1926"),n(p,"Blue Berry Pie","0a4c6299246e5cb1b3eab9a890a5bd9d54a77e83ccf0e8d6463c5dc872720a6c7e7a31885f3d63bc94b75e60710a6c7ebabab91c0c28"),n(p,"Blue Dolphin","292d3eff8288b4e88df4d69f82aaffe9c1ff89ebffd0d0d09094a4ff8b92ddffa7ffe5859cc4ffddb0f6a3f7ffffffffc5f2ff006984"),n(p,"Blue Matrix","101116ff568000ff9cfffc5800b0ffd57bff76c1ffc7c7c7686868ff6e675ffa68fffc676871ffd682ec60fdffffffff00a2ff101116"),n(p,"Bluloco Dark","41444dfc2f5225a45cff936a3476ff7a82da4483aacdd4e08f9aaeff64803fc56bf9c85910b1feff78f85fb9bcffffffb9c0cb282c34"),n(p,"Bluloco Light","373a41d5275323974adf631c275fe4823ff127618dbabbc2676a77ff64803cbc66c5a3320099e1ce33c06d93bbd3d3d3373a41f9f9f9"),n(p,"Borland","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffffff4e0000a4"),n(p,"Box","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffff9fef00141d2b"),n(p,"Breadog","362c24b10b000072328b4c00005cb49b0097006a78baa99d514337de1100008f40ae60000074e1c300bd008697eae1da362c24f1ebe6"),n(p,"Breeze","31363bed151511d116f674001d99f39b59b61abc9ceff0f17f8c8dc0392b1cdc9afdbc4b3daee98e44ad16a085fcfcfceff0f131363b"),n(p,"Bright Lights","191919ff355bb7e876ffc25176d4ffba76e76cbfb5c2c8d74c4c4cff355bb7e876ffc25176d5ffba76e76cbfb5c2c8d7b3c9d7191919"),n(p,"Broadcast","000000da4939519f50ffd24a6d9cbed0d0ff6e9cbeffffff585858ff7b6b83d182ffff7c9fcef0ffffffa0cef0ffffffe6e1dc2b2b2b"),n(p,"Brogrammer","1f1f1ff811182dc55eecba0f2a84d24e5ab71081d6d6dbe5d6dbe5de352e1dd361f3bd091081d65350b90f7ddbffffffd6dbe5131313"),n(p,"Builtin Dark","000000bb000000bb00bbbb000d0dc8bb00bb00bbbbbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),n(p,"Builtin Light","000000bb000000bb00bbbb000000bbbb00bb00bbbbbbbbbb555555ff55552fd92fbfbf155555ffff55ff22ccccffffff000000ffffff"),n(p,"Builtin Pastel Dark","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffbbbbbb000000"),n(p,"Builtin Tango Dark","000000cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeecffffff000000"),n(p,"Builtin Tango Light","000000cc00004e9a06c4a0003465a475507b06989ab9bdb5555753ef29297dd527d6c329729fcfad7fa827d5d5eeeeec000000ffffff"),n(p,"C64","090300a2524c55a049bfce726657b3984ca367b6bdffffff000000a2524c55a049bfce726657b3984ca367b6bdf7f7f77869c440318d"),n(p,"CGA","000000aa000000aa00aa55000d0db7aa00aa00aaaaaaaaaa555555ff555555ff55ffff555555ffff55ff55ffffffffffaaaaaa000000"),n(p,"CLRS","000000f8282a328a5dfa701d135cd09f00bd33c3c1b3b3b3555753fb04162cc631e3bd0e1670ffe900b03ad5ceeeeeec262626ffffff"),n(p,"Calamity","2f2833fc644da5f69ce9d7a53b79c7f9267274d3ded5ced97e6c88fc644da5f69ce9d7a53b79c7f9267274d3deffffffd5ced92f2833"),n(p,"Carbonfox","282828ee539625be6a08bdba78a9ffbe95ff33b1ffdfdfe0484848f16da646c8802dc7c48cb6ffc8a5ff52bdffe4e4e5f2f4f8161616"),n(p,"Catppuccin Frappe","51576de78284a6d189e5c8908caaeef4b8e481c8bea5adce626880e671728ec772d9ba737b9ef0f2a4db5abfb5b5bfe2c6d0f5303446"),n(p,"Catppuccin Latte","5c5f77d20f3940a02bdf8e1d1e66f5ea76cb179299acb0be6c6f85de293e49af3deea02d456efffe85d82d9fa8bcc0cc4c4f69eff1f5"),n(p,"Catppuccin Macchiato","494d64ed8796a6da95eed49f8aadf4f5bde68bd5caa5adcb5b6078ec74868ccf7fe1c68278a1f6f2a9dd63cbc0b8c0e0cad3f524273a"),n(p,"Catppuccin Mocha","45475af38ba8a6e3a1f9e2af89b4faf5c2e794e2d5a6adc8585b70f3779989d88bebd39174a8fcf2aede6bd7cabac2decdd6f41e1e2e"),n(p,"Chalk","7d8b8fb23a52789b6ab9ac4a2a7facbd4f5a44a799d2d8d9888888f2484080c470ffeb624196fffc527553cdbdd2d8d9d2d8d92b2d2e"),n(p,"Chalkboard","000000c3737272c373c2c3727372c3c372c272c2c3d9d9d9585858dbaaaaaadbaadadbaaaaaadbdbaadaaadadbffffffd9e6f229262f"),n(p,"Challenger Deep","141228ff545862d196ffb37865b2ff906cff63f2f1a6b3cc565575ff808095ffa4ffe9aa91ddffc991e1aaffe4cbe3e7cbe1e71e1c31"),n(p,"Chester","080200fa5e5b16c98dffc83f288ad6d3459028dddee7e7e76f6b68fa5e5b16c98dfeef6d278ad6d3459027dedeffffffffffff2c3643"),n(p,"Ciapre","1818188e0d1648513bcc8b3f576d8c724d7c5c4f4baea47f555555ac3835a6a75ddcdf7c3097c6d33061f3dbb2f4f4f4aea47a191c27"),n(p,"Citruszest","404040ff545400cc7affd40000bfffff90fe48d1ccbfbfbf808080ff1a751affa3ffff0033cfffffb2fe00fff2f9f9f9bfbfbf121212"),n(p,"Cobalt Neon","142631ff23203ba5ffe9e75c8ff586781aa08ff586ba46b2fff688d4312e8ff586e9f06d3c7dd28230a76cbc678ff5868ff586142838"),n(p,"Cobalt Next","000000ff527b8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea162c35"),n(p,"Cobalt Next Dark","262f37f949678cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),n(p,"Cobalt Next Minimal","323d47ff657a8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),n(p,"Cobalt2","000000ff000038de21ffe50a1460d2ff005d00bbbbbbbbbb555555f40e173bd01dedc8095555ffff55ff6ae3faffffffffffff132738"),n(p,"Coffee Theme","000000c91b0000c200adaa000225c7ca30c700b8baa1a1a1686868ff6e671fba28b2af1b6871fff26af220bdbfffffff000000f5deb3"),n(p,"Crayon Pony Fish","2b1b1d91002b579524ab311b8c87b0692f50e8a86668525a4a383bc5255d8dff57c8381dcfc9fffc6cbaffceafb0949d68525a150707"),n(p,"Cursor Dark","2a2a2abf616aa3be8cebcb8b81a1c1b48ead88c0d0d8dee9505050bf616aa3be8cebcb8b81a1c1b48ead88c0d0ffffffffffff141414"),n(p,"Cutie Pro","000000f56e7fbec975f5866942d9c5d286b737cb8ad5c3c388847fe5a1a3e8d6a7f1bb7980c5deb294bb9dccbbffffffd5d0c9181818"),n(p,"Cyberdyne","080808ff837300c172d2a7000071cfff90fe6bffddf1f1f1484848ffc4bed6fcbafffed5c2e3ffffb2fee6e7feffffff00ff92151144"),n(p,"Cyberpunk","000000ff709200fbacfffa6a00bfffdf95ff86cbfeffffff595959ff8aa421f6bcfff7871bccfde6aefe99d6fcffffffe5e5e5332a57"),n(p,"Cyberpunk Scarlet Protocol","101116ff005101dc84faf9450271b6c930c700c5c7c7c7c7686868ff6e6760fa68fffc676871ffbd35ec60fdffffffffe41951101116"),n(p,"Dark Modern","272727f749492ea0439e6a030078d4d012731db4d6cccccc5d5d5ddc545223d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1f1f1f"),n(p,"Dark Pastel","000000ff555555ff55ffff555555ffff55ff55ffffbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffffffff000000"),n(p,"Dark+","000000cd31310dbc79e5e5102472c8bc3fbc11a8cde5e5e5666666f14c4c23d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1e1e1e"),n(p,"Darkermatrix","0910131a48316fa64c59590000cb6b4e375a1254591a48334040400d452a90d762e2e50000ff874e375a176c7300381e35451a070c0e"),n(p,"Darkmatrix","0910130065366fa64c7e80002c9a84523a60114d5300653640404000733d90d762e2e50046d8b8573d6612545a0065363e5715070c0e"),n(p,"Darkside","000000e8341c68c256f2d42c1c98e88e69c91c98e8bababa4c4c4ce05a4f77b869efd64b387cd3957bbe3d97e2babababababa222324"),n(p,"Dawnfox","575279b4637a618774ea9d34286983907aa956949fb2b6bd5f5695c26d85629f81eea8462d81a39a80b95ca7b4e6ebf3575279faf4ed"),n(p,"Dayfox","352c24a5222f396847ac54022848a96e33ce287980bfb6ae534c45b3434e577f63b86e284863b68452d5488d93f4ece63d2b5af6f2ee"),n(p,"Deep","000000d700051cd915d9bd265665ffb052da50d2dae0e0e0535353fb000722ff18fedc2b9fa9ffe09aff8df9ffffffffcdcdcd090909"),n(p,"Desert","4d4d4dff2b2b98fb98f0e68ccd853fffdeadffa0a0f5deb3626262ff555555ff55ffff5587ceffff55ffffd700ffffffffffff333333"),n(p,"Detuned","171717fe4386a6e32de6da730094d99b37ff50b7d9c7c7c7686868fa80acbde371fff27f00beffbe9eff5ed7ffffffffc7c7c7000000"),n(p,"Dimidium","000000cf494c60b442db9c110575d8af5ed21db6bbbab7b6817e7eff643b37e57bfccd1a688dfded6fe932e0fbdee3e4bab7b6141414"),n(p,"Dimmed Monokai","3a3d43be3f48879a3bc5a6354f76a1855c8d578fa4b9bcba888987fb001f0f722fc47033186de3fb00672e706dfdffb9b9bcba1f1f1f"),n(p,"Django","000000fd620941a83effe862315d3ff8f8f89df39fffffff585858ff943b73da70ffff94568264ffffffcfffd1fffffff8f8f80b2f20"),n(p,"Django Reborn Again","000000fd620941a83effe862245032f8f8f89df39fffffff4c4c4cff943b73da70ffff94568264ffffffcfffd1ffffffdadedc051f14"),n(p,"Django Smooth","000000fd620941a83effe862989898f8f8f89df39fe8e8e7727272ff943b73da70ffff94cacacaffffffcfffd1fffffff8f8f8245032"),n(p,"Doom One","000000ff6c6b98be65ecbe7ba9a1e1c678dd51afefbbc2cf595959ff665599bb66ecbe7ba9a1e1c678dd51afefbfbfbfbbc2cf282c34"),n(p,"Doom Peacock","1c1f24cb4b1626a6a6bcd42a2a6cc6a9a1e15699afede0ce51504dff5d3898be65e6f97251afefc678dd46d9ffdfdfdfede0ce2b2a27"),n(p,"Dot Gov","191919bf091d3d9751f6bb3417b2e07830b08bd2edffffff595959bf091d3d9751f6bb3417b2e07830b08bd2edffffffebebeb262c35"),n(p,"Dracula","21222cff555550fa7bf1fa8cbd93f9ff79c68be9fdf8f8f26272a4ff6e6e69ff94ffffa5d6acffff92dfa4fffffffffff8f8f2282a36"),n(p,"Dracula+","21222cff555550fa7bffcb6b82aaffc792ea8be9fdf8f8f2545454ff6e6e69ff94ffcb6bd6acffff92dfa4fffff8f8f2f8f8f2212121"),n(p,"Duckbones","0e101ae036005dcd97e3950000a3cb795ccc00a3cbebefc0444860ff482158db9ef6a10000b4e0b3a1e600b4e0b3b692ebefc00e101a"),n(p,"Duotone Dark","1f1d27d9393e2dcd73d9b76effc284de8d402488ffb7a1ff4e4a60d9393e2dcd73d9b76effc284de8d402488ffeae5ffb7a1ff1f1d27"),n(p,"Duskfox","393552eb6f92a3be8cf6c177569fbac4a7e79ccfd8e0def4544d8af083a2b1d196f9cb8c65b1cdccb1eda6dae3e2e0f7e0def4232136"),n(p,"ENCOM","0000009f0000008b00ffd0000081ffbc00ca008b8bbbbbbb555555ff000000ee00ffff000000ffff00ff00cdcdffffff00a595000000"),n(p,"Earthsong","121418c9423485c54cf5ae2e1398b9d0633d509552e5c6aa675f54ff645a98e036e0d5615fdaffff926984f088f6f7ece5c7a9292520"),n(p,"Electron Highlighter","15161fff6c8d00ffc3ffd7a977abffdaa4f400fdff778faf4a6789ff6c8d00ffc3ffd7a977abffdaa4f400fdffc3cee2a5b6d423283d"),n(p,"Elegant","0a1222ff025785cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ff005785cc95ffcb8b8dabe1c792eb3facefffffffced2d6292b31"),n(p,"Elemental","3c3c3098290f479a437f7111497f7d7f4e2f387f58807974555445e0502a61e070d6992779d9d9cd7c5459d599fff1e9807a7422211d"),n(p,"Elementary","242424d71c155aa513fdb40c134899e400382595e1efefef4b4b4bfc1c186bc219fec80e0955fffb00503ea8fc8c00ecefefef181818"),n(p,"Embark","1e1c31f0719ba1efd3ffe9aa57c7ffc792ea87dfebf8f8f2585273f02e6e2ce592ffb3781da0e2a742ea63f2f1a6b3cceeffff1e1c31"),n(p,"Embers Dark","16130f826d5757826d6d82576d578282576d576d82a39a905a504782825746403950483f8a8075beb6ae825757dbd6d1a39a9016130f"),n(p,"Espresso","353535d25252a5c261ffc66d6c99bbd197d9bed6ffeeeeec606060f00c0cc2e075e1e48b8ab7d9efb5f7dcf4ffffffffffffff323232"),n(p,"Espresso Libre","000000cc00001a921cf0e53a0066ffc5656b06989ad3d7cf555753ef29299aff87fffb5c43a8edff818a34e2e2eeeeecb8a8982a211c"),n(p,"Everblush","232a2de574748ccf7ee5c76b67b0e8c47fd56cbfbfb3b9b8464e50ef7e7e96d988f4d67a71baf2ce89df67cbe7bdc3c2dadada141b1e"),n(p,"Everforest Dark Hard","7a8478e67e80a7c080dbbc7f7fbbb3d699b683c092f2efdfa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbefd3c6aa1e2326"),n(p,"Everforest Light Med","7a8478e67e809ab373c1a2667fbbb3d699b683c092b2af9fa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbef5c6a72efebd4"),n(p,"Fahrenheit","1d1d1dcda0749e744dfecf757f0e0f734c4d979797ffffce404040fecea0cc734dfd9f4dcb4a054e739ffed04dffffffffffce000000"),n(p,"Fairyfloss","040303f92672c2ffdfe6c000c2ffdfffb8d1c5a3fff8f8f06090cbff857fc2ffdfffea00c2ffdfffb8d1c5a3fff8f8f0f8f8f25a5475"),n(p,"Farmhouse Dark","1d2027ba0004549d00c873000049e69f1b611fb65ce8e4e1464d54eb00097ac100ea9a00006efebf3b7f19e062f4eef0e8e4e11d2027"),n(p,"Farmhouse Light","1d20278d00033a7d00a95600092ccd820046229256a8a4a1394047eb00097ac100ea9a00006efebf3b7f00c649f4eef01d2027e8e4e1"),n(p,"Fideloper","292f33cb1e2dedb8acb7ab9b2e78c2c0236f309186eae3ce496068d4605ad4605aa866717c85c45c5db2819090fcf4dfdbdae0292f33"),n(p,"Firefly Traditional","000000c2372033bc26afad245a63ffd53ad233bbc7cccccc828282ff3b1e2ee720ecec16838dffff5cfe29f0f0ebebebf5f5f5000000"),n(p,"Firefox Dev","002831e638535eb83ca57706359ddfd75cff4b73a2dcdcdc26444de1003f1d9000cd9409006fc0a200da005794e2e2e27c8fa40e1011"),n(p,"Firewatch","585f6dd953605ab977dfb5634d89c4d5511944a8b6e6e5ff585f6dd953605ab977dfb5634c89c5d5511944a8b6e6e5ff9ba2b21e2027"),n(p,"Fish Tank","03073cc6004aacf157fecd5e525fb8986f82968763ecf0fc6c5b30da4b8adbffa9fee6a9b2befafda5cda5bd86f6ffececf0fe232537"),n(p,"Flat","222d3fa8232032a548e58d113167ac781aa02c9370b0b6ba475262d4312e2d9440e5be0c3c7dd28230a735b387e7eced2cc55d002240"),n(p,"Flatland","1d1d19f183399fd364f4ef6d5096be695abcd63865ffffff50504cd22a24a7d42cff894961b9d0695abcd63865ffffffb8dbef1d1f21"),n(p,"Flexoki Dark","100f0fd14d41879a39d0a2154385bece5d973aa99f878580575653af302966800bad8301205ea6a02f6f24837bcecdc3cecdc3100f0f"),n(p,"Flexoki Light","100f0faf302966800bad8301205ea6a02f6f24837b6f6e69b7b5acd14d41879a39d0a2154385bece5d973aa99fcecdc3100f0ffffcf0"),n(p,"Floraverse","08002e7e1a465d731acd751c1d6da1b7077e42a38cf3e0b84c3866d02063b4ce59fac35740a4cff12aae62caa8fff5dbdbd1b90e0d15"),n(p,"Forest Blue","333333f8818e92d3a21a8e638ed0ce5e468c31658ce2d8cd4a4a4afb3d666bb48d30c85a39a7a27e62b36096bfe2d8cde2d8cd051519"),n(p,"Framer","141414ff555598ec65ffcc3300aaffaa88ff88ddffcccccc414141ff8888b6f292ffd96633bbffcebbffbbecffffffff777777111111"),n(p,"Front End Delight","242526f8511b565747fa771d2c70b7f02e4f3ca1a6adadad5fac6df7431974ec4cfdc3253393cae75e4f4fbce68c735badadad1b1c1d"),n(p,"Fun Forrest","000000d6262b919c00be8a134699a38d4331da8213ddc2657f6a55e55a1cbfc65affcb1b7cc9cfd26349e6a96bffeaa3dec165251200"),n(p,"Galaxy","000000f9555f21b089fef02a589df6944d951f9ee7bbbbbb555555fa8c8f35bb9affff55589df6e756993979bcffffffffffff1d2837"),n(p,"Galizur","223344aa112233aa11ccaa222255cc7755aa22bbdd8899aa556677ff113333ff11ffdd333377ffaa77ff33ddffbbccddddeeff071317"),n(p,"Ghostty Default Style Dark","1d1f21cc6566b6bd68f0c67482a2beb294bb8abeb7c4c8c6666666d54e53b9ca4be7c5477aa6dac397d870c0b1eaeaeaffffff282c34"),n(p,"GitHub","3e3e3e970b1607962ac5bb94003e8ae946917cc4dfb2b2b2666666de00007ac895d7b6002e6cbaf2959200c7cbffffff3e3e3ef4f4f4"),n(p,"GitHub Dark","000000f7816656d364e3b3416ca4f8db61a22b7489ffffff4d4d4df7816656d364e3b3416ca4f8db61a22b7489ffffff8b949e101216"),n(p,"GitHub Dark Colorblind","484f58ec8e2c58a6ffd2992258a6ffbc8cff39c5cfb1bac46e7681fdac5479c0ffe3b34179c0ffd2a8ff56d4ddffffffc9d1d90d1117"),n(p,"GitHub Dark Default","484f58ff7b723fb950d2992258a6ffbc8cff39c5cfb1bac46e7681ffa19856d364e3b34179c0ffd2a8ff56d4ddffffffe6edf30d1117"),n(p,"GitHub Dark Dimmed","545d68f4706757ab5ac69026539bf5b083f039c5cf909dab636e7bff938a6bc46ddaaa3f6cb6ffdcbdfb56d4ddcdd9e5adbac722272e"),n(p,"GitHub Dark High Contrast","7a828eff949226cd4df0b72f71b7ffcb9eff39c5cfd9dee39ea7b3ffb1af4ae168f7c84391cbffdbb7ff56d4ddfffffff0f3f60a0c10"),n(p,"GitHub Light Colorblind","24292fb359000550ae4d2d000969da8250df1b7c836e778157606a8a46000969da633c01218bffa475f93192aa8c959f24292fffffff"),n(p,"GitHub Light Default","24292fcf222e1163294d2d000969da8250df1b7c836e778157606aa40e261a7f37633c01218bffa475f93192aa8c959f1f2328ffffff"),n(p,"GitHub Light High Contrast","0e1116a0111f024c1a3f22000349b4622cbc1b7c8366707b4b535d86061d055d204e2c001168e3844ae73192aa88929d0e1116ffffff"),n(p,"GitLab Dark","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff28262b"),n(p,"GitLab Dark Grey","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff222222"),n(p,"GitLab Light","303030a317000a7f3daf551d006cd8583cac00798a303030303030a317000a7f3daf551d006cd8583cac00798a303030303030fafaff"),n(p,"Glacier","2e343cbd0f2f35a770fb94351f5872bd2523778397ffffff404a55bd0f2f49e998fddf6e2a8bc1ea4727a0b6d3ffffffffffff0c1115"),n(p,"Grape","2d283fed22611fa91b8ddc20487df48d35c93bdeed9e9ea059516af0729a53aa5eb2dc87a9bcecad81c29de3eba288f79f9fa1171423"),n(p,"Grass","000000ff595900bb00e7b0000000a3ee59bb00bbbbbbbbbb959595ff595900bb00e7b0000000bbff55ff55fffffffffffff0a513773d"),n(p,"Grey Green","000000fe141474ff00f1ff0100deffff00f000ffbcffffff666666ff393900ff44ffd10000afffff008a00ffd3f5ececffffff002a1a"),n(p,"Gruber Darker","181818ff0a3642dc00ffdb0092a7cba095cb90aa9ee4e4e454494eff385142dc00ffdb0092a7cbafafda90aa9ef5f5f5e4e4e4181818"),n(p,"Gruvbox Dark","282828cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb2282828"),n(p,"Gruvbox Dark Hard","1d2021cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb21d2021"),n(p,"Gruvbox Light","fbf1c7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836fbf1c7"),n(p,"Gruvbox Light Hard","f9f5d7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836f9f5d7"),n(p,"Gruvbox Material","141617ea6926c1d041eecf756da3ecfd9bc1fe9d6effffff4c4c4cd3573bc1d041eecf752c86fffd9bc192a5dfffffffd4be981d2021"),n(p,"Gruvbox Material Dark","282828ea6962a9b665d8a6577daea3d3869b89b482d4be987c6f64ea6962a9b665d8a6577daea3d3869b89b482ddc7a1d4be98282828"),n(p,"Gruvbox Material Light","fbf1c7c14a4a6c782eb4710945707a945e804c7a5d654735a89984c14a4a6c782eb4710945707a945e804c7a5d4f3829654735fbf1c7"),n(p,"Guezwhoz","333333e851817ad694b7d0745aa0d69a90e058d6ced9d9d9808080e85181afd7afd1ed8564b2eda398ed61ede4edededd9d9d91d1d1d"),n(p,"HaX0R Blue","01092110b6ff10b6ff10b6ff10b6ff10b6ff10b6fffafafa48415700b3f700b3f700b3f700b3f700b3f700b3f7fefefe11b7ff010515"),n(p,"HaX0R Gr33N","001f0b15d00d15d00d15d00d15d00d15d00d15d00dfafafa33484319e20e19e20e19e20e19e20e19e20e19e20efefefe16b10e020f01"),n(p,"HaX0R R3D","1f0000b00d0db00d0db00d0db00d0db00d0db00d0dfafafa554040ff1111ff1010ff1010ff1010ff1010ff1010fefefeb10e0e200101"),n(p,"Hacktober","191918b34538587744d08949206ec5864651ac9166f1eee7464444b3332342824ac75a225389c5e795a5ebc587ffffffc9c9c9141414"),n(p,"Hardcore","1b1d1ef92672a6e22efd971f66d9ef9e6ffe5e7175ccccc6505354ff669dbeed5fe6db7466d9ef9e6ffea3babff8f8f2a0a0a0121212"),n(p,"Harper","010101f8b63f7fb5e1d6da25489e48b296c6f5bfd7a8a49d726e6af8b63f7fb5e1d6da25489e48b296c6f5bfd7fefbeaa8a49d010101"),n(p,"Havn Daggry","1f2842985248577159be6b003a577d7c5c97925780b0b5c51f2842cc4a35719679f1a5276089c07d7396aa869dd6dbeb3b4a7af8f9fb"),n(p,"Havn Skumring","252c47ea563e6ead7bf8b330596cf77c719ed588c1dce0ee38425cd172648c9e8feac58c5186cb9b7ceed17ab6fff6e1d6dbeb111522"),n(p,"Heeler","000000e44c2ebdd100f4ce655ba5f2ff95c2ff9763ffffff4c4c4ce44c2ebdd100f4ce650088ffff95c28da6e4fffffffdfdfd211f46"),n(p,"Highway","000000d00e18138034ffcb3e006bb3783482455271ededed5d504af07e18b1d130fff1204fc2fdde00715d504affffffededed222225"),n(p,"Hipster Green","000000b6214a00a600bfbf00246eb2b200b200a6b2bfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e584c138100b05"),n(p,"Hivacruz","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b2973ad435e6687898ea4dfe2f19c637af5f7ffede4e4132638"),n(p,"Homebrew","00000099000000a6009999000d0dbfb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e500ff00000000"),n(p,"Hopscotch","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379fd8b195c545c5c545b989498d5d3d5b33508ffffffb9b5b8322931"),n(p,"Hopscotch.256","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379dd464c8fc13efdcc591290bfc85e7c149b93ffffffb9b5b8322931"),n(p,"Horizon","000000e9567829d398fab79526bbd9ee64ac59e1e3e5e5e5666666ec6a883fdaa4fbc3a73fc4def075b56be4e6e5e5e5d5d8da1c1e26"),n(p,"Horizon Bright","16161dfc477700ca86f2a68200beddff58b100cdcbbfafac1a1c24fe5f8700d193e5a68800c9e2ff6cba00c3c2fff2ef16161dfdf0ed"),n(p,"Hot Dog Stand","000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6ffffffea3323"),n(p,"Hot Dog Stand (Mustard)","000000ea3323ea3323ea3323000000ea3323000000b9b9b9000000ea3323ea3323ea3323000000ea3323000000c6c6c6000000ffff54"),n(p,"Hurtado","575757ff1b00a5e055fbe74a496487fd5ff186e9fecbcccb404040d51d00a5df55fbe84a89beffc001c186eafedbdbdbdbdbdb000000"),n(p,"Hybrid","2a2e33b84d51b3bf5ae4b55e6e90b0a17eac7fbfb4b5b9b64345488d2e32798431e58a504b6b886e50794d7b745a626ab7bcba161719"),n(p,"IBM 5153 CGA","141414d033331bd01bd08c1b1b1bd0d01bd01bd0d0cecece4e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffcecece141414"),n(p,"IBM 5153 CGA (Black)","000000c4000000c400c47e000000c4c400c400c4c4c4c4c44e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffc4c4c4000000"),n(p,"IC Green PPL","014401ff273641a63876a8312ec3b950a0963ca078e6fef2106910b4fa5caefb86dafa872efaeb50fafa3cfac8e0f1dce0f1dc2c2c2c"),n(p,"IC Orange PPL","000000c13900a4a900caaf00bd6d00fc5e00f79500ffc88a6a4f2aff8c68f6ff40ffe36effbe55fc874fc69752fafaffffcb83262626"),n(p,"IR Black","4f4f4ffa6c60a8ff60fffeb796cafefa73fdc6c5feefedef7b7b7bfcb6b0cfffabffffccb5dcfffb9cfee0e0fefffffff1f1f1000000"),n(p,"IRIX Console","1a1919d4242637a327c29d280739e2911f9c4497dfcccccc767676f34f5945c731f9f2a74079ffc31ba26ed7d7f2f2f2f2f2f20c0c0c"),n(p,"IRIX Terminal","1a1919ff2b1e57ff3dffff440004ffff2cff56ffffffffffffff44ffff44ffff44fffc72ffff44ffff44ffff44ffff44f2f2f2000043"),n(p,"Iceberg Dark","1e2132e27878b4be82e2a47884a0c6a093c789b8c2c6c8d16b7089e98989c0ca8ee9b18991acd1ada0d395c4ced2d4dec6c8d1161821"),n(p,"Iceberg Light","dcdfe7cc517a668e3dc573392d539e7759b43f83a633374c8389a3cc3768598030b6662d22478e6845ad327698262a3f33374ce8e9ec"),n(p,"Idea","adadadfc525698b61cccb444437ee79d74b02488874b4b4bfffffffc707298b61cffff0b6c9cedfc7eff248887181818adadad202020"),n(p,"Idle Toes","323232d252527fe173ffc66d4099fff680ffbed6ffeeeeec606060f070709dff91ffe48b5eb7f7ff9dffdcf4ffffffffffffff323232"),n(p,"Jackie Brown","2c1d16ef57342baf2bbebf00246eb2d05ec100aceebfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e5ffcc2f2c1d16"),n(p,"Japanesque","343935cf3f617bb75be9b32a4c9ad4a57fc4389aadfafaf6595b59d18fa6767f2c78592f13597960429176bbcab2b5aef7f6ec1e1e1e"),n(p,"Jellybeans","929292e2737394b979ffba7b97bedce1c0fa00988edededebdbdbdffa1a1bddeabffdca0b1d8f6fbdaff1ab2a8ffffffdedede121212"),n(p,"JetBrains Darcula","000000fa5355126e00c2c3004581ebfa54ff33c2c1adadad555555fb717267ff4fffff006d9df1fb82ff60d3d1eeeeeeadadad202020"),n(p,"Jubi","3b3750cf7b9890a94b6ebfc0576ea6bc4f6875a7d2c3d3dea874cede90abbcdd6187e9ea8c9fcde16c87b7c9efd5e5f1c3d3de262b33"),n(p,"Kanagawa Dragon","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a6a69ce4687687a987e6c3847fb4ca938aa97aa89fc5c9c5c5c9c5181616"),n(p,"Kanagawa Lotus","1f1f28c840536f894e77713f4d699bb35b79597b755454648a8980d7474b6e915f836f4a6693bf624c835e857a43436c545464f2ecbc"),n(p,"Kanagawa Wave","090618c3404376946ac0a36e7e9cd8957fb86a9589c8c093727169e8242498bb6ce6c3847fb4ca938aa97aa89fdcd7badcd7ba1f1f28"),n(p,"Kanagawabones","1f1f28e46a7898bc6de5c2837eb3c9957fb87eb3c9ddd8bb49495eec818c9ec967f1c9827bc2dfa98fd27bc2dfa8a48dddd8bb1f1f28"),n(p,"Kanso Ink","14171dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c714171d"),n(p,"Kanso Mist","22262dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2a4a7a45c6066e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c722262d"),n(p,"Kanso Pearl","22262dc840536f894e77713f4d699bb35b79597b755454646d6f6ed7474b6e915f836f4a6693bf624c835e857a43436c22262df2f1ef"),n(p,"Kanso Zen","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c7090e13"),n(p,"Kibble","4d4d4dc7003129cf13d8e30e3449d18400ff0798abe2d1e35a5a5af015786ce05cf3f79e97a4f7c495f068f2e0fffffff7f7f70e100a"),n(p,"Kitty Default","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffdddddd000000"),n(p,"Kitty Low Contrast","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffffffff333333"),n(p,"Kolorit","1d1a1eff5b8247d7a1e8e5625db4eeda6cda57e9ebededed504d51ff5b8247d7a1e8e5625db4eeda6cda57e9ebedededefecec1d1a1e"),n(p,"Konsolas","000000aa171718b218ebae1f2323a5ad1edc42b0c8c8c1c17b716eff41415fff5fffff554b4bffff54ff69ffffffffffc8c1c1060606"),n(p,"Kurokula","333333c35a5278b3a9e1b9175c91dd8b79a6867268e0cfc2515151ffc34cafffa5fff70090dbffad93ffffcdb6ffffffe0cfc2141515"),n(p,"Lab Fox","2e2e2efc6d263eb383fca121db3b216b40a86e49cbffffff535353ff651753eaa8fca013db501f6a36b67d53e7ffffffffffff2e2e2e"),n(p,"Laser","626262ff8373b4fb7309b4bdfed300ff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5f92883ffb2fee6e7fefffffff106e3030d18"),n(p,"Later This Evening","2b2b2bd45a60afba67e5d289a0bad6c092d691bfb7494a4a525454d3232faabb39e5be396699d6ab53d65fc0aec1c2c2959595222222"),n(p,"Lavandula","2300467d1625337e6f7f6f494f4a7f5a3f7f58777f736e7d443a53e0516752e0c4e0c3868e87e0a776e09ad4e08c91fa736e7d050014"),n(p,"Light Owl","403f53de3d3b08916ae0af02288ed7d6438a2aa298bdbdbd989fb1de3d3b08916adaaa01288ed7d6438a2aa298f0f0f0403f53fbfbfb"),n(p,"Liquid Carbon","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc595959ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2303030"),n(p,"Liquid Carbon Transparent","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc404040ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2000000"),n(p,"Lovelace","282a36f37f975adecdf2a2728897f4c574dd79e6f3fdfdfd4e5165ff497118e3c8ff8037556fffb043d13fdceebebec1fdfdfd1d1f28"),n(p,"Man Page","000000cc000000a6009999000000b2b200b200a6b2b2b2b2666666e5000000cc00bfbf000000ffe500e500cbcbe5e5e5000000fef49c"),n(p,"Mariana","000000ec5f6699c794f9ae586699ccc695c65fb4b4f7f7f7666666f97b58acd1a8fac76185add6d8b6d882c4c4ffffffd8dee9343d46"),n(p,"Material","212121b7141f457b24f6981e134eb25600880e717cafafaf424242e83b3f7aba3abfaa0054a4f3aa4dbc26bbd1d9d9d9232322eaeaea"),n(p,"Material Dark","212121b7141f457b24f6981e134eb2701aa20e717cefefef4f4f4fe83b3f7aba3affea2e54a4f3aa4dbc26bbd1d9d9d9e5e5e5232322"),n(p,"Material Darker","000000ff5370c3e88dffcb6b82aaffc792ea89ddffffffff545454ff5370c3e88dffcb6b82aaffc792ea89ddffffffffeeffff212121"),n(p,"Material Design Colors","435b67fc38415cf19efed03237b6fffc226e59ffd1ffffffa1b0b8fc746dadf7befee16c70cffffc669b9affe6ffffffe7ebed1d262a"),n(p,"Material Ocean","546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff8f93a20f111a"),n(p,"Mathias","000000e52222a6e32dfc951ec48dfffa257367d9f0f2f2f2555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),n(p,"Matrix","0f191c23755a82d967ffd7003f524240993150b45a5073506880602fc07990d762faff004f7e7e11ff25c1ff8a678c614266440f191c"),n(p,"Matte Black","333333d35f5fffc107b91c1ce68e0dd35f5fbebebebebebe8a8a8d891c1cffc107b90a0af59e0bb91c1ceaeaeaffffffbebebe121212"),n(p,"Medallion","000000b64c007c8b16d3bd26616bb08c5a90916c25cac29a5e5219ff9149b2ca3bffe54aacb8ffffa0ffffbc51fed698cac2961d1908"),n(p,"Melange Dark","34302cbd818378997ae49b5d7f91b2b380b07b9695c1a78e867462d4776685b695ebc06da3a9cecf9bc289b3b6ece1d7ece1d7292522"),n(p,"Melange Light","e9e1dbc77b8b6e9b72bc5c007892bdbe79bb7397977d6658a98a78bf00213a684aa06d00465aa49041803d656854433a54433af1f1f1"),n(p,"Mellifluous","1a1a1ad29393b3b393cbaa89a8a1beb39fb0c0af8cdadada5b5b5bc95954828040a6794c5a65999c699574a39effffffdadada1a1a1a"),n(p,"Mellow","27272af5a19190b99fe6b99daca1cfe29ecaea83a5c1c0d4424246ffae9f9dc6acf0c5a9b9aedaecaad6f591b2cac9ddc9c7cd161617"),n(p,"Miasma","0000006857425f875fb36d4378824bbb7744c9a554d7c4836666666857425f875fb36d4378824bbb7744c9a554d7c483c2c2b0222222"),n(p,"Midnight In Mojave","1e1e1eff453a32d74bffd60a0a84ffbf5af25ac8faffffff515151ff453a32d74bffd60a0a84ffbf5af25ac8faffffffffffff1e1e1e"),n(p,"Mirage","011627ff999985cc95ffd7007fb5ffddb3ff21c7a8ffffff575656ff999985cc95ffd7007fb5ffddb3ff85cc95ffffffa6b2c01b2738"),n(p,"Misterioso","000000ff424274af68ffad29338f869414e623d7d7e1e1e0626262ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e02d3743"),n(p,"Molokai","121212fa257398e123dfd4601080d08700ff43a8d0bbbbbb555555f6669db1e05ffff26d00afffaf87ff51ceffffffffbbbbbb121212"),n(p,"Mona Lisa","351b0e9b291c636232c36e28515c5d9b1d29588056f7d75c874228ff4331b4b264ff95669eb2b4ff5b6a8acd8fffe598f7d66a120b0d"),n(p,"Monokai Classic","272822f92672a6e22ee6db74fd971fae81ff66d9effdfff16e7066f92672a6e22ee6db74fd971fae81ff66d9effdfff1fdfff1272822"),n(p,"Monokai Pro","2d2a2eff6188a9dc76ffd866fc9867ab9df278dce8fcfcfa727072ff6188a9dc76ffd866fc9867ab9df278dce8fcfcfafcfcfa2d2a2e"),n(p,"Monokai Pro Light","faf4f2e14775269d69cc7a0ae160327058be1c8ca829242aa59fa0e14775269d69cc7a0ae160327058be1c8ca829242a29242afaf4f2"),n(p,"Monokai Pro Light Sun","f8efe7ce4770218871b16803d4572b6851a22473b62c232ea59c9cce4770218871b16803d4572b6851a22473b62c232e2c232ef8efe7"),n(p,"Monokai Pro Machine","273136ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffc6b7678ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffcf2fffc273136"),n(p,"Monokai Pro Octagon","282a3aff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1696d77ff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1eaf2f1282a3a"),n(p,"Monokai Pro Ristretto","2c2525fd6883adda78f9cc6cf38d70a8a9eb85daccfff1f372696afd6883adda78f9cc6cf38d70a8a9eb85daccfff1f3fff1f32c2525"),n(p,"Monokai Pro Spectrum","222222fc618d7bd88ffce566fd9353948ae35ad4e6f7f1ff69676cfc618d7bd88ffce566fd9353948ae35ad4e6f7f1fff7f1ff222222"),n(p,"Monokai Remastered","1a1a1af4005f98e024fd971f9d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efd9d9d90c0c0c"),n(p,"Monokai Soda","1a1a1af4005f98e024fa84199d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efc4c5b51a1a1a"),n(p,"Monokai Vivid","121212fa293498e123fff30a0443fff800f801b6edffffff838383f6669db1e05ffff26d0443fff200f651cefffffffff9f9f9121212"),n(p,"Moonfly","323437ff54548cc85fe3c78a80a0ffcf87e879dac8c6c6c6949494ff518936c692c6c68474b2ffae81ff85dc85e4e4e4bdbdbd080808"),n(p,"N0Tch2K","383838a95551666666a98051657d3e767676c9c9c9d0b8a3545454a977758c8c8ca9917598bd5ea3a3a3dcdcdcd8c8bba0a0a0222222"),n(p,"Neobones Dark","0f191fde6e7c90ff6bb77e648190d4b279a766a5adc6d5cf334652e8838fa0ff85d68c6792a0e2cf86c165b8c198a39ec6d5cf0f191f"),n(p,"Neobones Light","e5ede6a8334c567a3094492728648688507d3b8992202e1899ac9c94253e3f5a22803d1c1d55737b3b702b747c415934202e18e5ede6"),n(p,"Neon","000000ff30455ffa74fffc7e0f15d8f924e700fffcc7c7c7686868ff5a5a75ff88fffd963c40cbf15be588fffeffffff00fffc14161a"),n(p,"Neopolitan","0000009a1a1a61ce3cfbde2d324883ff00808da6cef8f8f84c4c4c9a1a1a61ce3cfbde2d324883ff00808da6cef8f8f8ffffff271f19"),n(p,"Neutron","23252bb540365ab977deb5666a7c93a4799d3f94a8e6e8ef494b51b540365ab977deb5666a7c93a4799d3f94a8ebedf2e6e8ef1c1e22"),n(p,"Night Lion V1","4c4c4cbb00005fde8ff3f167276bd8bb00bb00dadfbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),n(p,"Night Lion V2","4c4c4cbb000004f623f3f16764d0f0ce6fdb00dadfbbbbbb555555ff55557df71dffff5562cbe8ff9bf500ccd8ffffffbbbbbb171717"),n(p,"Night Owl","011627ef535022da6eaddb6782aaffc792ea21c7a8ffffff575656ef535022da6effeb9582aaffc792ea7fdbcaffffffd6deeb011627"),n(p,"Night Owlish Light","011627d3423e2aa298daaa014876d6403f5308916a7a81817a8181f76e6e49d0c5dac26b5ca7e469709800c990989fb1403f53ffffff"),n(p,"Nightfox","393b44c94f6d81b29adbc074719cd69d79d663cdcfdfdfe0575860d169838ebaa4e0c98986abdcbaa1e27ad5d6e4e4e5cdcecf192330"),n(p,"Niji","333333d23e0854ca74fff7002ab9ffff50da1ef9f5ddd0c4515151ffb7b7c1ffaefcffb88efff3ffa2edbcffc7ffffffffffff141515"),n(p,"No Clown Fiesta","151515b4695890a959f4bf75bad7ffaa759f88afa2e1e1e17272727e97ab90a959f4bf75bad7ffaa759f88afa2afafafe0e1e4101010"),n(p,"No Clown Fiesta Light","d6d6d6874e42677940b890588ba1bfaa759f3e5f661515152b2b2b637786677940b8905893a2abaa759f99ab93373737151515e1e1e1"),n(p,"Nocturnal Winter","4d4d4df12d5209cd7ef5f17a3182e0ff2b6d09c87afcfcfc808080f16d860ae78dfffc676096ffff78a20ae78dffffffe6e5e50d0d17"),n(p,"Nord","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f0596377bf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee92e3440"),n(p,"Nord Light","3b4252bf616a96b17fc5a56581a1c1b48ead7bb3c3a5abb64c566abf616a96b17fc5a56581a1c1b48ead82afaeeceff4414858e5e9f0"),n(p,"Nord Wave","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f04c566abf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee9212121"),n(p,"Nordfox","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f053648dd06f79b1d196f0d3998cafd2c895bf93ccdce7ecf4cdcecf2e3440"),n(p,"Novel","000000cc0000009600d06b000000cccc00cc0087cca6a6a6808080cc0000009600d06b000000cccc00cc0087ccffffff3b2322dfdbc3"),n(p,"Nvim Dark","07080dffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f84f5258ffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f8e0e2ea14161b"),n(p,"Nvim Light","07080d5900080055236b5300004c73470045007373a1a4ab4f52585900080055236b5300004c73470045007373eef1f814161be0e2ea"),n(p,"Obsidian","000000b30d0e00bb00fecd223a9bdbbb00bb00bbbbbbbbbb555555ff000393c863fef874a1d7ffff55ff55ffffffffffcdcdcd283033"),n(p,"Ocean","000000e64c4c00a6009999000000b2d826d800a6b2bfbfbf808080ff1a1a00d900e5e5007373ffe500e500e5e5e5e5e5ffffff224fbc"),n(p,"Oceanic Material","000000ee2b2a40a33fffea2e1e80f08800a016afcaa4a4a4777777dc5c6070be71fff16354a4f3aa4dbc42c7daffffffc2c8d71c262b"),n(p,"Oceanic Next","162c35ec5f6799c794fac8636699ccc594c55fb3b3ffffff65737eec5f6799c794fac8636699ccc594c55fb3b3ffffffc0c5ce162c35"),n(p,"Ollie","000000ac2e3131ac61ac43002d57acb085281fa6ac8a8eac684432ff3d483bff99ff5e1e4488ffffc21d1ffaff5b6ea78a8dae222125"),n(p,"One Dark Two","1d1f23e2788198c379eac78671b9f4c88bda62bac6c9ccd34a505ae68991a8cc8eedcf978dc7f6d3a2e278c4cee6e6e6e6e6e621252b"),n(p,"One Double Dark","3d4452f163728cc570ecbe703fb1f5d373e317b9c4dbdfe5525d6fff777b82d882f5c0656dcaffff7bf400e5fbf7f9fcdbdfe5282c34"),n(p,"One Double Light","454b58f7484025a343cc81000087c1b50da9009ab7c5b2b30e131fff371100b90eec99001065dee500d800b4ddffffff383a43fafafa"),n(p,"One Half Dark","282c34e06c7598c379e5c07b61afefc678dd56b6c2dcdfe45d677ae06c7598c379e5c07b61afefc678dd56b6c2dcdfe4dcdfe4282c34"),n(p,"One Half Light","383a42e4564950a14fc184010184bca626a40997b3bababa4f525ee06c7598c379d8b36e61afefc678dd56b6c2ffffff383a42fafafa"),n(p,"Onenord","3b4252e06c759ec183ebcb8b81a1c1b988b088c0d0e5e9f0596377e06c759ec183ebcb8b81a1c1b988b08fbcbbeceff4e5e9f02e3440"),n(p,"Onenord Light","2e3440cb4f5348a53dee5e253879c59f4aca3ea1adb2b6bd646a76d163665f9e9dba793e1b40a69665af8fbcbbeceff42e3440f7f8fa"),n(p,"Operator Mono Dark","5a5a5aca372d4d7b3ad4d6974387cfb86cb472d5c6ced4cd9a9b99c37d6283d0a2fdfdc589d3f6ff2c7a82eadafdfdf6c3cac2191919"),n(p,"Overnight Slumber","0a1222ffa7c485cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ffa7c485cc95ffcb8b8dabe1c792ebffa7c4ffffffced2d60e1729"),n(p,"Oxocarbon","16161600dfdb00b4ffff429700c15ac693ffff74b8f2f4f858585800dfdb00b4ffff429700c15ac693ffff74b8f2f4f8f2f4f8161616"),n(p,"Pale Night Hc","000000f07178c3e88dffcb6b82aaffc792ea89ddffffffff737373f6a9aedbf1baffdfa6b4ccffddbdf2b8eaff999999cccccc3e4251"),n(p,"Pandora","000000ff424274af68ffad29338f869414e623d7d7e2e2e23f5648ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e1141e43"),n(p,"Paraiso Dark","2f1e2eef615548b685fec41806b6ef815ba45bc4bfa39e9b776e71ef615548b685fec41806b6ef815ba45bc4bfe7e9dba39e9b2f1e2e"),n(p,"Paul Millr","2a2a2aff000079ff0fe7bf00396bd7b449be66ccffbbbbbb666666ff008066ff66f3d64e709aeddb67e67adff2fffffff2f2f2000000"),n(p,"Pencil Dark","212121c3077110a778a89c14008ec45f498620a5bad9d9d94f4f4ffb007a5fd7aff3e43020bbfc6855de4fb8ccf1f1f1f1f1f1212121"),n(p,"Pencil Light","212121c3077110a778a89c14008ec4523c7920a5bab3b3b3424242fb007a52caa2c0b10020bbfc6855de4fb8ccf1f1f1424242f1f1f1"),n(p,"Peppermint","353535e7466989d287dab853449fd0da62dc65aaafb4b4b4535353e4859ba3cca2e1e4876fbce2e586e796dcdbdfdfdfc8c8c8000000"),n(p,"Phala Green Dark","000000ab150000b100a9a7000223c0c22ec000b4c0cbcbcb797979ed220000db00eae7000433ffed3aea00e8eaeaeaeac1fc03000000"),n(p,"Piatto Light","414141b2377166781ecd6f343c5ea8a454b266781ebfbfbf3f3f3fdb3365829429cd6f343c5ea8a454b2829429f2f2f2414141ffffff"),n(p,"Pnevma","2f2e2da3666690a57dd7af877fa5bdc79ec48adbb4d0d0d04a4845d78787afbea2e4c9afa1bdced7bedab1e7ddefefefd0d0d01c1c1c"),n(p,"Poimandres","1a1e28d0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd1a1e28"),n(p,"Poimandres Darker","16161ed0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd16161e"),n(p,"Poimandres Storm","252b37d0679d5de4c7fffac289ddfff087bd89ddffffffffa6accdd0679d5de4c7fffac2add7fff087bdadd7ffffffffa6accd252b37"),n(p,"Poimandres White","fefeffff209001dab2e5ba4e8abacdeb83948abacd000000969cbdff209001dab2e5ba4e0ebfffeb83940ebfff000000969cbdfefeff"),n(p,"Popping And Locking","1d2021cc241d98971ad79921458588b16286689d6aa89984928374f42c3eb8bb26fabd2f99c6cad3869b7ec16eebdbb2ebdbb2181921"),n(p,"Powershell","000000981a22098003c4a0004140c3d336820e807f7f7c7f808080ef29291cfe3cfefe45268ad2fe13fa29fffec2c1c3f6f6f7052454"),n(p,"Primary","000000db44370f9d58f4b4004285f4db44374285f4bfbfbf000000db44370f9d58f4b4004285f44285f40f9d58ffffff000000ffffff"),n(p,"Pro","00000099000000a6009999002009dbb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e5f2f2f2000000"),n(p,"Pro Light","000000e5492b50d148c6c4403b75ffed66e84ed2dec2c2c29f9f9fff664048d53ebfbe230082ffff7eff3bd1d2f2f2f2191919ffffff"),n(p,"Purple Rain","000000ff260e9be205ffc40000a2fa815bb500deefffffff565656ff4250b8e36effd85200a6ffac7bf074fdf3fffffffffbf621084a"),n(p,"Purplepeter","0a0520ff796d99b481efdfac66d9efe78fcdba8cffffba81504b63f99f92b4be8ff2e9bf79daedba91d4a0a0d6b9aed3ece7fa2a1a4a"),n(p,"Rapture","000000fc644d7afde1fff09b6c9bf5ff4fa164e0ffc0c9e5304b66fc644d7afde1fff09b6c9bf5ff4fa164e0ffffffffc0c9e5111e2a"),n(p,"Raycast Dark","000000ff536059d499ffc53156c2ffcf2f9852eee5ffffff4c4c4cff636359d499ffc53156c2ffcf2f9852eee5ffffffffffff1a1a1a"),n(p,"Raycast Light","000000b12424006b4ff8a300138af29a1b6e3eb8bfbfbfbf000000b12424006b4ff8a300138af29a1b6e3eb8bfffffff000000ffffff"),n(p,"Rebecca","12131edd775504dbb5f2e7b77aa5ffbf9cf956d3c2e4e3e9666699ff92cd01eac0fffca869c0fac17ff88bfde1f4f2f9e8e6ed292a44"),n(p,"Red Alert","000000d62e4e71be6bbeb86b489beee979d76bbeb8d6d6d6666666e02553aff08cdfddb765aaf1ddb7dfb7dfddffffffffffff762423"),n(p,"Red Planet","2020208c3432728271e8bf6a69819e8964925b8390b9aa99676767b55242869985ebeb9160827ede497438add8d6bfb8c2b790222222"),n(p,"Red Sands","000000ff3f0000bb00e7b0000072ffbb00bb00bbbbbbbbbb6e6e6ed41a1a00bb00e7b0000072aeff55ff55ffffffffffd7c9a77a251e"),n(p,"Relaxed","151515bc5653909d63ebc17a6a8799b06698c9dfffd9d9d9636363bc5653a0ac77ebc17a7eaac7b06698acbbd0f7f7f7d9d9d9353a44"),n(p,"Retro","13a10e13a10e13a10e13a10e13a10e13a10e13a10e13a10e16ba1016ba1016ba1016ba1016ba1016ba1016ba1016ba1013a10e000000"),n(p,"Retro Legends","262626de545445eb45f7bf2b4066f2bf4cf240d9e6bfe6bf4c594cff666659ff59ffd9334c80ffe666ff59e6fff2fff245eb450d0d0d"),n(p,"Rippedcasts","000000cdaf95a8ff60bfbb1f75a5b0ff73fd5a647ebfbfbf666666eecbadbcee68e5e50086bdc9e500e58c9bc4e5e5e5ffffff2b2b2b"),n(p,"Rose Pine","26233aeb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def46e6a86eb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def4e0def4191724"),n(p,"Rose Pine Dawn","f2e9e1b4637a286983ea9d3456949f907aa9d7827e5752799893a5b4637a286983ea9d3456949f907aa9d7827e575279575279faf4ed"),n(p,"Rose Pine Moon","393552eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def46e6a86eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def4e0def4232136"),n(p,"Rouge 2","5d5d6bc6797e969e92dbcdab6e94b94c4e788ab6c1e8e8ea616274c6797ee6dcc4e6dcc498b3cd8283a1abcbd3e8e8eaa2a3aa17182b"),n(p,"Royal","241f2b91284c23801cb49d276580b0674d968aaabe5249663e3a4ad5356c2cd946fde83b90baf9a479e3acd4eb9e8cbd514968100815"),n(p,"Ryuuko","2c3941865f5b66907db1a9906a8e95b18a7388b2acececec5d7079865f5b66907db1a9906a8e95b18a7388b2acecececececec2c3941"),n(p,"Sakura","000000d5237041af1abc70536964abc71fbf939393998eac786d69f41d9922e529f595749892f1e90cddeeeeeecbb6ffdd7bdc18131e"),n(p,"Scarlet Protocol","101116ff005100dc84faf9450271b6ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffbd35ec60fdffffffffe419511c153d"),n(p,"Sea Shells","17384cd15123027c9bfca02f1e495068d4f150a3b5deb88d434b53d48678628d98fdd39f1bbcddbbe3ee87acb4fee4cedeb88d09141b"),n(p,"Seafoam Pastel","757575825d4d728c62ada16d4d7b828a7267729494e0e0e08a8a8acf937a98d9aafae79d7ac3cfd6b2a1ade0e0e0e0e0d4e7d4243435"),n(p,"Selenized Black","252525ed4a4670b433dbb32d368aebeb6eb73fc5b7b9b9b9777777ff5e5683c746efc5414f9cfeff81ca56d8c9dededeb9b9b9181818"),n(p,"Selenized Dark","184956fa575075b938dbb32d4695f7f275be41c7b9adbcbc72898fff665c84c747ebc13d58a3ffff84cd53d6c7cad8d9adbcbc103c48"),n(p,"Selenized Light","ece3ccd2212d489100ad89000072d4ca4898009c8f53676d909995cc1729428b00a78300006dcec4439200978a3a4d5353676dfbf3db"),n(p,"Seoulbones Dark","4b4b4be388a398bd99ffdf9b97bddea5a6c56fbdbedddddd797172eb99b18fcd92ffe5b3a2c8e9b2b3da6bcacba8a8a8dddddd4b4b4b"),n(p,"Seoulbones Light","e2e2e2dc5284628562c485620084a3896788008586555555a5a0a1be3c6d487249a76b48006f897f4c7e006f70777777555555e2e2e2"),n(p,"Seti","323232c228328ec43de0c64f43a5d58b57b58ec43deeeeee3f3f3fc228328ec43de0c64f43a5d58b57b58ec43dffffffcacecd111213"),n(p,"Shades Of Purple","000000d904293ad900ffe7006943ffff2c7000c5c7c7c7c7686868f92a1c43d426f1d0006871ffff77ff79e8fbffffffffffff1e1d40"),n(p,"Shaman","012026b2302d00a9415e8baa449a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6405555001015"),n(p,"Slate","222222e2a8bf81d778c4c9c0335856a481d315ab9c02c5e0ffffffffcdd9beffa8d0ccca7ab0d2c5a7d98cdfe0e0e0e035b1d2222222"),n(p,"Sleepy Hollow","572100ba393491773fb556005f63b4a17c7b8faea9af9a914e4b61d9443fd6b04ef668138086efe2c2bba4dce7d2c7a9af9a91121214"),n(p,"Smyck","000000b841317da900c4a50062a3c4ba8acc207383a1a1a17a7a7ad6837cc4f137fee14d8dcff0f79aff6ad9cff7f7f7f7f7f71b1b1b"),n(p,"Snazzy","000000fc434650fb7cf0fb8c49bafffc4cb48be9feededec555555fc434650fb7cf0fb8c49bafffc4cb48be9feededecebece61e1f29"),n(p,"Snazzy Soft","000000ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0686868ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0eff0eb282a36"),n(p,"Soft Server","000000a2686a9aa56aa3906a6b8fa36a71a36ba58f99a3a2666c6cdd5c60bfdf55deb36062b1df606edf64e39cd2e0de99a3a2242626"),n(p,"Solarized Darcula","25292af24840629655b688002075c7797fd415968dd2d8d965696af24840629655b688002075c7797fd415968dd2d8d9d2d8d93d3f41"),n(p,"Solarized Dark Higher Contrast","002831d11c246cbe6ca577062176c7c61c6f259286eae3cb006488f5163b51ef84b27e28178ec8e24d8e00b39efcf4dc9cc2c3001e27"),n(p,"Solarized Dark Patched","002831d11c24738a05a577062176c7c61c6f259286eae3cb475b62bd3613475b625368707082845956ba819090fcf4dc708284001e27"),n(p,"Solarized Osaka Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),n(p,"Sonokai","181819fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e37f8490fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e3e2e2e32c2e34"),n(p,"Spacedust","6e5346e35b005cab96e3cd7b0f548be35b0006afc7f0f1ce684c31ff8a3aaecab8ffc87867a0ceff8a3a83a7b4fefff1ecf0c10a1e24"),n(p,"Spacegray","000000b04b5787b379e5c1797d8fa4a4799685a7a5b3b8c34c4c4cb04b5787b379e5c1797d8fa4a4799685a7a5ffffffb3b8c320242d"),n(p,"Spacegray Bright","080808bc5553a0b56cf6c9877baec1b98aae85c9b8d8d8d8626262bc5553a0b56cf6c9877baec1b98aae85c9b8f7f7f7f3f3f32a2e3a"),n(p,"Spacegray Eighties","15171cec5f6781a764fec2545486c0bf83c157c2c1efece7555555ff697393d493ffd2564d84d1ff55ff83e9e4ffffffbdbaae222222"),n(p,"Spacegray Eighties Dull","15171cb24a5692b477c6735a7c8fa5a5789e80cdcbb3b8c3555555ec5f6789e986fec2545486c0bf83c158c2c1ffffffc9c6bc222222"),n(p,"Spiderman","1b1d1ee60813e22928e247562c3fff2435db3256fffffef6505354ff0325ff3338fe3a351d50ff747cff6184fffffff9e3e3e31b1d1e"),n(p,"Spring","000000ff4d831f8c3b1fc95b1dd3ee8959a83e999fbfbfbf000000ff00211fc231d5b80715a9fd8959a83e999fffffff4d4d4cffffff"),n(p,"Square","050505e9897cb6377decebbea9cdeb75507bc9caecf2f2f2474747f99286c3f786fcfbccb6defbad7fa8d7d9fce2e2e2acacab1a1a1a"),n(p,"Squirrelsong Dark","372920ba4138468336d4b1394395c6855fb82f9794d3b9a2704f39df4d43659a4ce8c23f4ca4db9d70da60aca9f2d4bbb19b89372920"),n(p,"Srcery","1c1b19ef2f27519f50fbb8292c78bfe02c6d0aaeb3baa67f918175f7534198bc37fed06e68a8e4ff5c8f2be4d0fce8c3fce8c31c1b19"),n(p,"Starlight","242424f62b5a47b413e3c40124acd4f2affd13c299e6e6e6616161ff4d5135d450e9e8365dc5f8feabf224dfc4ffffffffffff242424"),n(p,"Sublette","253045ee557755ee77ffdd885588ffff77cc44eeeef5f5da405570ee665599ee77ffff7777bbffaa88ff55ffbbffffeeccced0202535"),n(p,"Subliminal","7f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d47f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d4d4d4d4282c35"),n(p,"Sugarplum","1111475ca8dc53b397249a84db7dddd0beeef9f3f9a175d444447a5cb5dc52deb501f5c7fa5dfdc6a5fdffffffb577fddb7ddd111147"),n(p,"Sundried","302b2aa7463d5877449d602a485b988646519c814fc9c9c94d4e48aa000c128c21fc6a217999f7fd8aa1fad484ffffffc9c9c91a1818"),n(p,"Sunset Drive","0a0a13ff006300f992ffe90000a4ffff57fd00ffedededff3e3e4bff948b00fcb9ffff683ea0ffff93ff38fffff8f8ffededfe0f0f1a"),n(p,"Symfonic","000000dc322f56db3aff84000084d4b729d9ccccffffffff414347dc322f56db3aff84000084d4b729d9ccccffffffffffffff000000"),n(p,"Synthwave","000000f6188f1ebb2bfdf8342186ecf85a2112c3e2ffffff7f7094f841a025c141fdf4542f9dedf9713719cde6ffffffdad9c7000000"),n(p,"Synthwave Alpha","241b30e60a7000986cadad3e6e29adb300ad00b0b1b9b1bc7f7094e60a700ae4a4f9f972aa54f9ff00f600fbfdf2f2e3f2f2e3241b30"),n(p,"Synthwave Everything","fefefef97e7272f1b8fede5d6d77b3c792eaf772e0fefefefefefef8841472f1b8fff95136f9f6e1acfff92aadfefefef0eff12a2139"),n(p,"Tango Adapted","000000ff000059d600e3be0000a2ffc17ecc00d0d6c0c5bb8f928bff00136dd900ccbe0088c9ffe9a7e100d8d9f6f6f4000000ffffff"),n(p,"Tango Half Adapted","000000ff00004cc300e2c000008ef6a96cb300bdc3babfb5797d76ff001370dc00d9c60076bfffd898d100d0d4f4f4f2000000ffffff"),n(p,"Tearout","685742cc967b97976d6c9861b5955ec9a554d7c483b5955e75644fcc967b97976d6c9861b5955ec9a554d7c483b5955ef4d2ae34392d"),n(p,"Teerb","1c1c1cd68686aed686d7af8786aed6d6aed68adbb4d0d0d04f4f4fd68686aed686e4c9af86aed6d6aed6b1e7ddefefefd0d0d0262626"),n(p,"Terafox","2f3239e85c517aa4a1fda47f5a93aaad5c7ca1cdd8ebebeb4e5157eb746b8eb2affdb29273a3b7b97490afd4deeeeeeee6eaea152528"),n(p,"Terminal Basic","00000099000000a6009999000000b2b200b200a6b2bfbfbf666666e5000000d900bfbf000000ffe500e500d8d8e5e5e5000000ffffff"),n(p,"Terminal Basic Dark","000000c653396ac44bb8b74a6444edd357db69c1cfd1d1d1909090eb5a3a77ea51efef53d09af9eb5af778f1f2edededffffff1d1e1d"),n(p,"Thayer Bright","1b1d1ef926724df840f4fd222757d68c54fe38c8b5ccccc6505354ff5995b6e354feed6c3f78ff9e6ffe23cfd5f8f8f2f8f8f81b1d1e"),n(p,"The Hulk","1b1d1e269d1b13ce3063e4572525f5712c81378ca9d9d8d15053548dff2a48ff773afe16506b9572589d4085a6e5e6e1b5b5b51b1d1e"),n(p,"Tinacious Design Dark","1d1d26ff339900d364ffcc6600cbffcc66ff00cecacbcbf0636667ff2f9200d364ffd47900cbffd783ff00d5d4d5d6f3cbcbf01d1d26"),n(p,"Tinacious Design Light","1d1d26ff339900d364e5b24d00cbffcc66ff00cecab1b1d6636667ff2f9200d364d9ae5300cbffd783ff00c8c7d5d6f31d1d26f8f8ff"),n(p,"TokyoNight","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),n(p,"TokyoNight Day","e9e9edf52a655875398c6c3e2e7de99854f10071976172b0a1a6c5f52a655875398c6c3e2e7de99854f10071973760bf3760bfe1e2e7"),n(p,"TokyoNight Moon","1b1d2bff757fc3e88dffc77782aaffc099ff86e1fc828bb8444a73ff757fc3e88dffc77782aaffc099ff86e1fcc8d3f5c8d3f5222436"),n(p,"TokyoNight Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),n(p,"TokyoNight Storm","1d202ff7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d64e5575f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf524283b"),n(p,"Tomorrow","000000c82829718c00eab7004271ae8959a83e999fbfbfbf000000c82829718c00eab7004271ae8959a83e999fffffff4d4d4cffffff"),n(p,"Tomorrow Night","000000cc6666b5bd68f0c67481a2beb294bb8abeb7ffffff4c4c4ccc6666b5bd68f0c67481a2beb294bb8abeb7ffffffc5c8c61d1f21"),n(p,"Tomorrow Night Blue","000000ff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffff4c4c4cff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffffffffff002451"),n(p,"Tomorrow Night Bright","000000d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffff404040d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffffeaeaea000000"),n(p,"Tomorrow Night Burns","252525832e31a63c40d3494efc595fdf9395ba8586f5f5f55d6f71832e31a63c40d2494efc595fdf9395ba8586f5f5f5a1b0b8151515"),n(p,"Tomorrow Night Eighties","000000f2777a99cc99ffcc666699cccc99cc66ccccffffff595959f2777a99cc99ffcc666699cccc99cc66ccccffffffcccccc2d2d2d"),n(p,"Toy Chest","2c3f58be2d261a9172db8e27325d968a5edc35a08f23d183336889dd594431d07be7d84b34a6daae6bdc42c3aed5d5d531d07b24364b"),n(p,"Treehouse","321300b2270e44a900aa820c58859a97363db25a1e786b53504333ed5d2055f238f2b73285cfede14c5af07d14ffc800786b53191919"),n(p,"Twilight","141414c06d44afb97ac2a86c44474ab4be7c778385ffffd4404040de7c4cccd88ce2c47e5a5e62d0dc8e8a989bffffd4ffffd4141414"),n(p,"Ubuntu","2e3436cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeeceeeeec300a24"),n(p,"Ultra Dark","000000f07178c3e88dffcb6b82aaffc792ea89ddffcccccc404040f6a9aedbf1baffdfa6b4ccffddbdf2b8eaffffffffffffff000000"),n(p,"Ultra Violent","242728ff0090b6ff00fff72747e0fbd731ff0effbbe1e1e1636667fb58b4deff8cebe0877fecffe681ff69fcd3f9f9f5c1c1c1242728"),n(p,"Under The Sea","022026b2302d00a94159819c459a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6ffffff011116"),n(p,"Unikitty","0c0c0ca80f20c7ff98fff964145fcdffe9ff9effeffcf1fb434343d91329d3ffafffef500075eaffefff93ffeffff3fe0b0b0bff8cd9"),n(p,"Urple","000000b0425b37a415ad5c42564d9b6c3ca180808087799c6a3f32ff638829e620f08161867aeda05eeeeaeaeabfa3ff877a9b1b1b23"),n(p,"Vague","252530d8647e7fa563f3be7c6e94b2bb9dbdaeaed1cdcdcd606079e0839899b782f5cb968ba9c1c9b1cabebedad7d7d7cdcdcd141415"),n(p,"Vaughn","25234f70505060b48adfaf8f5555fff08cc38cd0d3709080709080dca3a360b48af0dfaf5555ffec93d393e0e3ffffffdcdccc25234f"),n(p,"Vercel","000000fc003629a948ffae00006afff3288200ac96feffffa8a8a8ff80804be15dffae0049aefff97ea800e4c4fefefefafafa101010"),n(p,"Vesper","101010f5a19190b99fe6b99daca1cfe29ecaea83a5a0a0a07e7e7eff808099ffe4ffc799b9aedaecaad6f591b2ffffffffffff101010"),n(p,"Vibrant Ink","878787ff6600ccff04ffcc0044b4cc9933cc44b4ccf5f5f5555555ff000000ff00ffff000000ffff00ff00ffffe5e5e5ffffff000000"),n(p,"Vimbones","f0f0caa8334c4f6c3194492728648688507d3b8992353535acac8994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535f0f0ca"),n(p,"Violet Dark","56595cc94c2285981cb4881d2e8bced13a8232a198c9c6bd45484bbd3613738a04a577052176c7c61c6f259286c9c6bd7082841c1d1f"),n(p,"Violet Light","56595cc94c2285981cb4881d2e8bced13a8232a198b9b6af45484bbd3613738a04a577052176c7c61c6f259286c9c6bd536870fcf4dc"),n(p,"Violite","241c36ec797979ecb3ece279a979ecec79ec79ececeef4f656447aef8f8f9fefbfefe78fb78fefef8fcf9fefeff8fafceef4f6241c36"),n(p,"Warm Neon","000000e2434639b13adae1454261c5f920fb2abbd4d0b8a3fefcfce970719cc090ddda7a7b91d6f674ba5ed1e5d8c8bbafdab6404040"),n(p,"Wez","000000cc555555cc55cdcd555555cccc55cc7acacacccccc555555ff555555ff55ffff555555ffff55ff55ffffffffffb3b3b3000000"),n(p,"Whimsy","535178ef64875eca89fdd87765aef7aa7ff043c1beffffff535178ef64875eca89fdd87765aef7aa7ff043c1beffffffb3b0d629283b"),n(p,"Wild Cherry","000507d940852ab250ffd16f883cdcecececc1b8b7fff8de009cc9da6bacf4dca5eac066308cbaae636bff919de4838ddafaff1f1726"),n(p,"Wilmersdorf","34373ee063837ebebdcccccca6c1e0e1c1ee5b94abababab50545dfa71938fd7d6d1dfffb2cff0efccfd69abc5d3d3d3c6c6c6282b33"),n(p,"Wombat","000000ff615ab1e969ebd99c5da9f6e86aff82fff7dedacf4a4a4af58c80ddf88feee5b2a5c7ffddaaffb7fff9ffffffdedacf171717"),n(p,"Wryan","3333338c46652873737c7c993955735e468c31658c899ca13d3d3dbf4d8053a6a69e9ecb477ab37e62b36096bfc0c0c0999993101010"),n(p,"Xcode Dark","414453ff817078c2b3d9c97c4eb0ccff7ab2b281ebdfdfe07f8c98ff8170acf2e4ffa14f6bdfffff7ab2dabaffdfdfe0dfdfe0292a30"),n(p,"Xcode Dark hc","43454bff8a7a83c9bcd9c6684ec4e6ff85b8cda1ffffffff838991ff8a7ab1faebffa14f6bdfffff85b8e5cfffffffffffffff1f1f24"),n(p,"Xcode Light","b4d8fdd12f1b3e808778492a0f68a0ad3da4804fb82626268a99a6d12f1b23575c78492a0b4f79ad3da44b21b0262626262626ffffff"),n(p,"Xcode Light hc","b4d8fdad1805355d6178492a0058a19c2191703daa0000008a99a6ad180517414578492a003f739c2191441ea1000000000000ffffff"),n(p,"Xcode WWDC","494d5cbb383a94c66ed28e5d8884c5b7399900aba4e7e8eb7f869ebb383a94c66ed28e5d8884c5b7399900aba4e7e8ebe7e8eb292c36"),n(p,"Zenbones","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),n(p,"Zenbones Dark","1c1917de6e7c819b69b77e646099c0b279a766a5adb4bdc34d4540e8838f8bae68d68c6761abdacf86c165b8c1888f94b4bdc31c1917"),n(p,"Zenbones Light","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),n(p,"Zenburn","4d4d4d7d5d5d60b48af0dfaf5d6d7ddc8cc38cd0d3dcdccc709080dca3a3c3bf9fe0cf9f94bff3ec93d393e0e3ffffffdcdccc3f3f3f"),n(p,"Zenburned","404040e3716e819b69b77e646099c0b279a766a5adf0e4cf6f6768ec86858bae68d68c6761abdacf86c165b8c1c0ab86f0e4cf404040"),n(p,"Zenwritten Dark","191919de6e7c819b69b77e646099c0b279a766a5adbbbbbb4a4546e8838f8bae68d68c6761abdacf86c165b8c18e8e8ebbbbbb191919"),n(p,"Zenwritten Light","eeeeeea8334c4f6c3194492728648688507d3b8992353535aca9a994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535eeeeee"),n(p,"branch","35241cc2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9564a45c2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9cfc1a932221a"),n(p,"iTerm2 Dark Background","000000c91b0000c200c7c4000225c7ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffc7c7c7000000"),n(p,"iTerm2 Default","000000c91b0000c200c7c4002225c4ca30c700c5c7ffffff686868ff6e675ffa68fffc676871ffff77ff60fdffffffffffffff000000"),n(p,"iTerm2 Light Background","000000c91b0000c200c7c4000225c7ca30c700c5c7bababa686868ff6e6739d442ccc9346871ffff77ff3ad7d9ffffff000000ffffff"),n(p,"iTerm2 Pastel Dark Background","626262ff8373b4fb73fffdc3a5d5feff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5c2e3ffffb2fee6e6feffffffc7c7c7000000"),n(p,"iTerm2 Smoooooth","14191eb43c2a00c200c7c4002744c7c040be00c5c7c7c7c7686868dd797558e790ece100a7abf2e17ee160fdffffffffdcdcdc15191f"),n(p,"iTerm2 Solarized Dark","073642dc322f859900b58900268bd2d336822aa198eee8d5335e69cb4b16586e75657b838394966c71c493a1a1fdf6e3839496002b36"),n(p,"iTerm2 Solarized Light","073642dc322f859900b58900268bd2d336822aa198bbb5a2002b36cb4b16586e75657b838394966c71c493a1a1fdf6e3657b83fdf6e3"),n(p,"iTerm2 Tango Dark","000000d81e005ea702cfae00427ab389658e00a7aadbded8686a66f5423599e343fdeb6184b0d8bc94b737e6e8f1f1f0ffffff000000"),n(p,"iTerm2 Tango Light","000000d81e005ea702cfae00427ab389658e00a7aac1c4be686a66f542358cd636d7c53b84b0d8bc94b71ecccef1f1f0000000ffffff"),n(p,"novmbr","282a2e9f64349dac5fcca75f2f7d7cb5896e52877fc7b8ac5d4e479f64349dac5fcca75f2f7d7cb5896e52877fc7b8acc7b8ac241d1a"),n(p,"owl","302c2c5a5a5a989898cacaca656565b1b1b17f7f7fdedede5d595bda5b2c989898cacaca656565b1b1b17f7f7fffffffdedede2f2b2c"),n(p,"traffic","282d31934e46637268c79e84515e67715f5e5c6f7dcfb9a84e575e934e46637270c79e84515e67715f5e5c6f7dddcec2cfb9a8272c30"),n(p,"urban","33303b87404f74934eae835a615772854b64625464c0a79a5c586587404f74934eae835a615772854b64625464c0a79ac0a79a312e39"),ZC,XC,YC,tk,ak,QC,nk]),$J=xg,a3=P(function(e,r,a){return e<=0?a:v(a3,e>>1,Y(r,r),e&1?Y(a,r):a)}),Ao=l(function(e,r){return v(a3,e,r,"")}),n3=(function(){var e=r3;if(e.b){var r=e.a,a=e.b;return h(r,a)}else return h(n(p,"Fallback",n(Ao,108,"0")),k)})(),yv=n3,mn=function(e){var r=e;return r.dX?r.dl:r.c6},Cv=function(e){var r=mn(e).ka.ss,a=yv,t=a.a,o=a.b;return pr(n(Pr,function(c){return ee(c.ss,r)},n(D,t,o)))},ok=function(e){var r=yv,a=r.a,t=r.b;return{c1:KC(j2(e)),b_:n(cf,Cv(e),n(ru,function(o){return o.ss},n(D,a,t)))}},ff={$:0},uJ=Q,ck=ff,lJ=6,vJ=0,sJ=2,dJ=1,bJ=5,pJ=3,mJ=4,ik=function(e){switch(e){case"hudConfigurations":return M(0);case"hudInputs":return M(1);case"hudFpsMeter":return M(2);case"hudProfiler":return M(3);case"hudTape":return M(4);case"hudPalette":return M(5);case"hudCommandPalette":return M(6);case"hudDevice":return M(7);default:return L}},fk=function(e){switch(e){case 0:return"hudConfigurations";case 1:return"hudInputs";case 2:return"hudFpsMeter";case 3:return"hudProfiler";case 4:return"hudTape";case 5:return"hudPalette";case 6:return"hudCommandPalette";default:return"hudDevice"}},kv=function(e){return{eC:L,rB:e.rB,rC:e.rC,cW:k,aP:k}},$k=function(e){return{$:1,a:e}},t3=$k,Gc=l(function(e,r){var a=r;switch(e.$){case 0:var t=e.a;return z(a,{aP:n(Q$,t,a.aP)?n(Pr,U$(t),a.aP):n(D,t,a.aP)});case 1:var t=e.a;return z(a,{aP:n(D,t,n(Pr,U$(t),a.aP))});case 2:var t=e.a;return z(a,{aP:n(Pr,U$(t),a.aP)});default:var t=e.a;return z(a,{cW:n(Pr,function(o){var c=o.a;return!ee(c,t)},a.cW)})}}),uk=function(e){return(e?Gc(t3(7)):Q)(kv({rB:ik,rC:fk}))},lk=function(e){var r=e.gs,a=e.rJ,t=e.hz,o=e.rI,c=e.rH,i=e.la;return{la:{U:n(ru,GC,i),q6:L},es:L,al:o,h:uk(c),dg:OC,nD:t,aQ:NC,ak:ok(a),e:a,c_:ck,pm:!1}},ou={$:1},hn=l(function(e,r){return{$:0,a:e,b:r}}),qc=function(e){return{$:0,a:e}},hJ=Q,cu=l(function(e,r){return n(V$,e,function(a){return r})}),vk=l(function(e,r){var a=n(ge,1,e);return{cK:a,lQ:1,aW:0,eO:n(cu,a,r),ov:r,dy:0}}),o3=l(function(e,r){return qc(n(vk,e,r))}),Oc=function(e){return{$:1,a:e}},sk=function(e){return Oc({aW:0,eO:n(cu,1,e),ov:e})},dk=l(function(e,r){if(e.$)return sk(r);var a=e.a;return n(o3,a,r)}),bk=P(function(e,r,a){return n(hn,ou,n(dk,e,h(r,a)))}),Sv={$:0},pk=l(function(e,r){return n(hn,Sv,n(o3,1,h(e,r)))}),Io=l(function(e,r){return{$:1,a:e,b:r}}),mk=P(function(e,r,a){var t=a.a,o=a.b;return h(e(t),r(o))}),hk=function(e){var r=l(function(a,t){var o=a.a,c=a.b,i=t.a,f=t.b;return h(n(D,o,i),n(D,c,f))});return v(sn,r,h(k,k),e)},c3=function(e){switch(e.$){case 0:return h(k,le);case 1:var r=e.a;return v(mk,Bn,wa,hk(n(N,c3,r)));case 2:var a=e.a;return h(k,a);default:var t=e.a;return h(u([t]),le)}},gk=l(function(e,r){return z(r,{be:e(r.be)})}),or=P(function(e,r,a){return K(a,e)<0?e:K(a,r)>0?r:a}),Fo=l(function(e,r){var a=r.a,t=r.b;return h(a,e(t))}),Me=function(e){return e<0?-e:e},_k=P(function(e,r,a){return n(ne,NaN,oo(n(e,r,a)))}),Pv=P7,yk=l(function(e,r){var a=n(tf,function(t){return t!=="0"&&t!=="."},Hc(r));return Y(e&&a?"-":"",r)}),Ck=Z7,i3=function(e){var r=e.a,a=e.b;if(r==="9"){var t=Ki(a);if(t.$===1)return"01";var o=t.a;return n(H$,"0",i3(o))}else{var c=nt(r);return c>=48&&c<57?n(H$,Ck(c+1),a):"0"}},Nc=g7,xv=S7,iu=P(function(e,r,a){return Y(a,n(Ao,e-Ta(a),Wc(r)))}),f3=z7,$3=function(e){var r=n(Tn,".",e);if(r.b)if(r.b.b){var a=r.a,t=r.b,o=t.a;return h(a,o)}else{var a=r.a;return h(a,"0")}else return h("0","0")},Vo=l(function(e,r){var a=r.a,t=r.b;return h(e(a),t)}),kk=function(e){var r=n(Tn,"e",J(Me(e)));if(r.b)if(r.b.b){var a=r.a,t=r.b,o=t.a,c=n(ne,0,Bc(n(Rn,"+",o)?n(Ma,1,o):o)),i=$3(a),f=i.a,$=i.b,s=Y(f,$),d=c<0?n(ne,"0",n(de,function(b){var m=b.a,g=b.b;return m+("."+g)},n(de,Vo(Wc),Ki(Y(n(Ao,Me(c),"0"),s))))):v(iu,c+1,"0",s);return Y(e<0?"-":"",d)}else{var a=r.a;return Y(e<0?"-":"",a)}else return""},Sk=P(function(e,r,a){if(Nc(a)||xv(a))return J(a);var t=a<0,o=$3(kk(Me(a))),c=o.a,i=o.b,f=Ta(c)+r,$=Y(n(Ao,-f+1,"0"),v(iu,f,"0",Y(c,i))),s=Ta($),d=n(ge,1,f),b=n(e,t,v(dn,d,s,$)),m=v(dn,0,d,$),g=b?f3(n(ne,"1",n(de,i3,Ki(f3(m))))):m,_=Ta(g),y=g==="0"?g:r<=0?Y(g,n(Ao,Me(r),"0")):K(r,Ta(i))<0?v(dn,0,_-r,g)+("."+v(dn,_-r,_,g)):Y(c+".",v(iu,r,"0",i));return n(yk,t,y)}),Jc=Sk(l(function(e,r){var a=Ki(r);if(a.$===1)return!1;if(a.a.a==="5")if(a.a.b===""){var t=a.a;return!e}else{var o=a.a;return!0}else{var c=a.a,i=c.a;return(function(f){return f>53&&e||f>=53&&!e})(nt(i))}})),Pk=_k(Jc),xk=P(function(e,r,a){var t=n(Zi,10,Me(r-e)),o=t<0?3:t<1?2:t<2?1:0;return n(Pk,o,a)}),Kc=P(function(e,r,a){return n(N,function(t){return e(t)?r(t):t},a)}),jk=function(e){switch(e.$){case 2:var a=e.a,r=e.b;return n(Kc,n(ke,tt,ln(a)),Fo(function(o){if(o.$===2){var c=o.a,i=c.a,f=c.b;return n(I2,h(i,f),v(or,i,f,r))}else return o}));case 1:var a=e.a,r=e.b;return n(Kc,n(ke,tt,ln(a)),Fo(function(o){return o.$===1?V2(r):o}));case 0:var a=e.a,r=e.b;return n(Kc,n(ke,tt,ln(a)),Fo(function(o){if(o.$)return o;var c=o.a,i=c.a,f=c.b;return n(pv,h(i,f),v(xk,i,f,v(or,i,f,r)))}));case 3:var a=e.a,r=e.b;return n(Kc,n(ke,tt,ln(a)),Fo(function(o){return o.$===3?A2(r):o}));case 4:var a=e.a,r=e.b;return n(Kc,n(ke,tt,ln(a)),Fo(function(o){return o.$===4?bv(r):o}));default:var a=e.a,t=e.b;return n(Kc,n(ke,tt,ln(a)),Fo(function(o){if(o.$===5){var c=o.a;return F2(n(ne,c,n(de,function(i){return n(ft,i,c)},n(mv,ln(t),wt(c)))))}else return o}))}},wk=function(e){return gk(jk(e))},u3=l(function(e,r){return n(N,wk(e),r)}),jv=P(function(e,r,a){var t=c3(r),o=t.a,c=t.b,i=function(f){return v(ve,u3,f,o)};return{g4:c,cT:e?i(a.cT):a.cT,dh:i(a.dh)}}),Lk=function(e){return n(ga,5,e.h)||n(ga,6,e.h)||n(ga,7,e.h)},l3=l(function(e,r){return r.k6>0&&r.ju>0?r:{ju:e.ju,bH:0,sX:r.sX,bR:0,k6:e.k6}}),Tk={qE:!1,je:!1,hi:0,hj:0,qS:k,rO:!1,sp:!1,tt:!1,tv:!1,k1:!1,pi:0,pk:0},Mk=function(e){var r=e.oQ;if(r.$===1)return Tk;var a=r.a,t=a.bR+.5*a.ju-.5*e.uD.ju,o=.5*e.uD.k6-a.bH-.5*a.k6,c=e.ad.rO?e.cB.c5:e.cB.hy,i=ee(c,M(e.f4)),f=ee(e.cB.c5,M(e.f4));return{qE:f&&e.ad.qE,je:f&&e.ad.je,hi:i?e.ad.hi:0,hj:i?e.ad.hj:0,qS:f?e.ad.qS:k,rO:f&&e.ad.rO,sp:i&&e.ad.sp,tt:f&&e.ad.tt,tv:f&&e.ad.tv,k1:f&&e.ad.k1,pi:e.ad.pi+o,pk:e.ad.pk+t}},zk={iL:!1,i8:!1,je:!1,qI:k,bH:!1,jQ:!1,tc:k,bM:!1,kz:!1,k1:!1},Dk={lW:0,lX:0,l2:k,n3:0,n4:L},$f=function(e){var r=pr(n(Pr,function($){return ee($.sX,e.bF)},e.g.sW)),a=ee(e.aM,M(e.bF)),t=a?e.g.hD:zk,o=a?e.g.fs:Dk,c=n(de,l3(e.g.du),r),i=(function(){if(c.$)return e.g.du;var $=c.a;return{ju:$.ju,k6:$.k6}})(),f=Mk({f4:e.bF,cB:e.cB,oQ:c,ad:e.g.s6,uD:e.g.du});return{la:(function(){var $=e.cm;if($.$===1)return{pu:!1,q6:L};var s=$.a;return{pu:Lk(s),q6:s.la.q6}})(),cJ:e.aR,dJ:e.g.dJ,g3:e.g3,cd:e.cd,ez:e.g.ez,eA:e.g.eA,hh:e.g.hh,mg:a,q7:e.g.q7,f4:e.bF,hD:t,ns:e.ns,nD:e.nD,sS:e.sS,j8:O2(e.g.j8),nX:e.nX,gi:e.g.gi,s6:f,tf:e.g.tf,du:i,$9:e.g.$9,ef:e.g.ef,pd:e.pd,fs:o,pm:e.pm}},Rk={c5:L,hy:L},Bk=l(function(e,r){if(e.$)return kv(r);var a=e.a;return n(G2,a,kv(r))}),Ak=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){var d=n(Je,$,e);if(d.$)return s;var b=d.a,m=n(H2,a,b.bG),g=$f({g3:0,cd:m,aM:i,cm:L,bF:b.bF,g:t,ns:ze,nD:c,sS:au,nX:r,aR:hv,cB:Rk,pd:!1,pm:!1}),_=n(b.cU,g,o),y=_.a,S=_.b,w=_.c,j=v(jv,ee(f,M(b.bF)),S,{cT:s.cj,dh:m}),B={cJ:b.cJ,fx:!1,g3:0,cd:j.dh,hd:ze,bF:b.bF,ns:ze,a_:y,h4:n(Bk,M(z2(n(ne,"",n(Uc,n(Ec,t.sU,"panel-layout"),t.s$)))),{rB:M,rC:Q}),h6:b.h6,aR:hv,pd:!1};return z(s,{cM:n(D,n(rf,Io(b.bF),j.g4),s.cM),cQ:Y(s.cQ,w),cj:j.cT,di:v(fr,$,B,s.di)})}}}}}}}}}},Ik=l(function(e,r){return n(nu,e.bF,r)?r:v(fr,e.bF,e,r)}),Fk=Xt("registerPanes",bn(kr)),gJ=Q,gn=l(function(e,r){return z(r,{F:v(or,0,1,r.F-e)})}),_n=l(function(e,r){return z(r,{F:v(or,0,1,r.F+e)})}),Vk=l(function(e,r){return{bw:r.bw,iI:n(_n,.14,r.bw),iJ:n(_n,.07,r.bw),iZ:n(_n,.13,r.H),i_:n(_n,.23,r.H),ka:e,H:r.H,kJ:n(_n,.03,r.H),kK:n(_n,.06,r.H),kL:n(_n,.09,r.H),kM:n(gn,.03,r.H),kN:n(gn,.06,r.H),kO:n(gn,.09,r.H),kP:{aV:.6,aY:r.H.aY,F:.92,a5:.08},kS:n(gn,.5,r.d8),kU:r.d8,kV:n(gn,.15,r.d8)}}),Ek=l(function(e,r){var a=r.d8,t=a.F<.12?z(a,{F:.12}):a;return{bw:r.bw,iI:n(gn,.14,r.bw),iJ:n(gn,.07,r.bw),iZ:n(gn,.13,r.H),i_:n(gn,.23,r.H),ka:e,H:r.H,kJ:n(gn,.03,r.H),kK:n(gn,.06,r.H),kL:n(gn,.09,r.H),kM:n(_n,.03,r.H),kN:n(_n,.06,r.H),kO:n(_n,.09,r.H),kP:{aV:.88,aY:r.H.aY,F:.18,a5:.1},kS:n(_n,.5,t),kU:t,kV:n(_n,.15,t)}}),Hk=l(function(e,r){return r.rN?n(Vk,r,{bw:e,H:r.pE,d8:r.ra}):n(Ek,r,{bw:e,H:r.pE,d8:r.ra})}),v3=l(function(e,r){switch(e){case 0:return r.ti;case 1:return r.rn;case 2:return r.uS;case 3:return r.pL;case 4:return r.r2;default:return r.qq}}),uf=l(function(e,r){return n(Hk,n(v3,e,r),r)}),Uk=pn(n(N,function(e){return h(e.ss,e)},r3)),Wk=function(e){return n(Je,e,Uk)},wv=function(e){return n(ne,n3.a,Wk(e))},s3=(function(){var e=5;return{gW:e,c6:n(uf,e,wv("Argonaut")),dl:n(uf,e,wv("Erkal Light")),dX:!1}})(),Gk=function(e){switch(e){case"Red":return M(0);case"Green":return M(1);case"Yellow":return M(2);case"Blue":return M(3);case"Magenta":return M(4);case"Cyan":return M(5);default:return L}},d3=function(e){var r=yv,a=r.a,t=r.b;return n(tf,function(o){return ee(o.ss,e)},n(D,a,t))},qk=function(e){switch(e){case"1":return M(!0);case"0":return M(!1);default:return L}},Lv=l(function(e,r){var a=r;return z(a,{gW:e,c6:n(uf,e,a.c6.ka),dl:n(uf,e,a.dl.ka)})}),Tv=l(function(e,r){var a=r,t=n(uf,a.gW,e);return e.rN?z(a,{c6:t,dX:!1}):z(a,{dl:t,dX:!0})}),b3=function(e){return Tv(wv(e))},Mv=function(e){var r=e;return z(r,{dX:!r.dX})},Ok=l(function(e,r){return ee(of(r),e)?r:Mv(r)}),Nk=function(e){var r=n(Tn,"|",e);if(r.b&&r.b.b&&r.b.b.b&&r.b.b.b.b&&!r.b.b.b.b.b){var a=r.a,t=r.b,o=t.a,c=t.b,i=c.a,f=c.b,$=f.a;return d3(a)&&d3(o)?v(dv,l(function(s,d){return n(Ok,d,n(Lv,s,n(b3,o,n(b3,a,s3))))}),Gk($),qk(i)):L}else return L},Jk=l(function(e,r){var a=n(ne,k,r.g.$9),t=n(ne,ze,n(de,pn,r.g.$9)),o=e.hA(t),c=n(N,function(ie){return ie.bF},e.di),i=v(ve,Ik,ze,e.di),f=LC(c),$=(function(){if(f.b&&!f.b.b){var ie=f.a;return M(ie)}else return L})(),s=n(ne,e.cm.e,n(ha,Nk,n(Uc,n(Ec,r.g.sU,"theme"),r.g.s$))),d=n(ne,e.cm.hz,n(ha,DC,n(Uc,eu("mode"),r.g.s$))),b=n(H2,a,e.bG),m=v(ve,Kt(Ak,i,o,a,r.g,s,d,$,pr(f)),{cM:k,cQ:k,cj:b,di:ze},f),g=n(UC,m.cj,r.g),_=v(Z$,e,m.cQ,o),y=_.a,S=_.b,w={cd:m.cj,g:r.g,di:m.di,nX:y,n0:k,n1:k},j=e.cm.f0?v(bk,zC,g,w):n(pk,g,w),B=n(ne,h(WC,!1),n(ha,wC,n(Uc,n(Ec,r.g.sU,"device"),r.g.s$))),E=B.a,V=B.b,O=lk({la:e.la,rH:V,rI:E,hz:d,rJ:s,gs:e.cm}),X=n(HC,z2(n(ne,"",n(Uc,eu("hud-panel-layout"),r.g.s$))),O),oe={g9:cC(e.di),aM:$,cm:X,am:f,f7:k,sU:r.g.sU,t7:j};return h(z(oe,{f7:n(T2,e,oe)}),wa(n(D,Fk(f),n(D,S,m.cM))))}),zv=function(e){return{$:9,a:e}},Kk=function(e){return{$:0,a:e}},Zk=l(function(e,r){return{$:4,a:e,b:r}}),Xk=l(function(e,r){return{$:5,a:e,b:r}}),Yk={$:6},x=fh,Zc=bh,te=rh,Qk=uh,Xc=function(e){return n(Qe,pn,Qk(e))},fu=n(ke,un,n(ke,xr(function(e){var r=e.a,a=e.b,t=oo(r);if(t.$)return L;var o=t.a;return M(h(o,a))}),pn)),eS=W(function(e,r,a,t){return{ro:t,uA:a,pi:e,pk:r}}),q=ah,Eo=ph,rS=A(Eo,eS,n(x,"x",q),n(x,"y",q),n(x,"w",q),n(x,"h",q)),aS=Xc(rS),Dv=function(e){return{$:1,a:e}},_J=3,Yc={$:2},p3=function(e){switch(e){case 0:return"texture";case 1:return"sound";case 2:return"font";default:return"atlas"}},io=l(function(e,r){return p3(e)+(":"+r)}),nS=l(function(e,r){var a=r;return z(a,{L:v(jt,n(io,3,e.bF),de(function(t){return Dv({eO:e.eO,aZ:e.aZ,ax:e.ax,K:Yc})}),a.L)})}),$u=nh,tS=function(e){return C(Zc,P(function(r,a,t){return nS({eO:a,bF:e,aZ:r,ax:t})}),n(Qe,fu,n(x,"mipImages",Xc($u))),n(Qe,fu,n(x,"frames",Xc(aS))),n(x,"pixelated",te))},Lt=vh,Rv=function(e){return Lt(u([n(Qe,M,e),ae(L)]))},Bv=n(Qe,ne(""),Rv(n(x,"error",Ce))),uu=function(e){return{$:3,a:e}},m3=function(e){return{$:3,a:e}},Av=function(e){return{$:2,a:e}},Iv=function(e){return{$:0,a:e}},oS=l(function(e,r){switch(r.$){case 0:return Iv({eo:0,ep:0,fB:L,aZ:ze,e8:ze,ax:!1,K:uu(e)});case 1:return Dv({eO:ze,aZ:ze,ax:!1,K:uu(e)});case 2:return Av({K:uu(e)});default:return m3({K:uu(e)})}}),yJ=2,CJ=1,kJ=0,Fv=function(e){switch(e){case"texture":return M(0);case"sound":return M(1);case"font":return M(2);case"atlas":return M(3);default:return L}},Vv=W(function(e,r,a,t){var o=t,c=Fv(e);if(c.$)return o;var i=c.a;return z(o,{L:v(jt,n(io,i,r),de(oS(a)),o.L)})}),lu={$:1},cS=function(e){switch(e){case 0:return Iv({eo:0,ep:0,fB:L,aZ:ze,e8:ze,ax:!1,K:lu});case 3:return Dv({eO:ze,aZ:ze,ax:!1,K:lu});case 1:return Av({K:lu});default:return m3({K:lu})}},Ev=P(function(e,r,a){var t=a,o=Fv(e);if(o.$)return t;var c=o.a;return z(t,{L:v(fr,n(io,c,r),cS(c),t.L)})}),iS=l(function(e,r){var a=r;return z(a,{L:v(jt,n(io,1,e),de(function(t){return t.$===2?Av({K:Yc}):t}),a.L)})}),h3=hh,fS=l(function(e,r){var a=r;return z(a,{L:v(jt,n(io,0,e.bF),de(function(t){return t.$?t:Iv({eo:e.eo,ep:e.ep,fB:e.fB,aZ:e.aZ,e8:e.e8,ax:e.ax,K:Yc})}),a.L)})}),$S=function(e){return aa(h3,Rr(function(r,a,t,o,c,i){return fS({eo:o,ep:t,fB:i,bF:e,aZ:r,e8:a,ax:c})}),n(Qe,fu,n(x,"mipImages",Xc($u))),n(Qe,n(ke,ne(ze),fu),Rv(n(x,"mipUrls",Xc(Ce)))),n(x,"baseWidth",q),n(x,"baseHeight",q),n(x,"pixelated",te),Rv(n(x,"baseline",q)))},Qc=P(function(e,r,a){var t=a,o=Fv(e);if(o.$)return t;var c=o.a;return z(t,{L:n(nf,n(io,c,r),t.L)})}),uS=function(e){var r=e.a,a=e.b,t=e.c,o=h(r,a);e:for(;;)switch(o.a){case"texture":switch(o.b){case"loading":return ae(n(Ev,"texture",t));case"loaded":return $S(t);case"failed":return n(Qe,function(c){return v(Vv,"texture",t,c)},Bv);case"unloaded":return ae(n(Qc,"texture",t));case"cancelled":return ae(n(Qc,"texture",t));default:break e}case"atlas":switch(o.b){case"loading":return ae(n(Ev,"atlas",t));case"loaded":return tS(t);case"failed":return n(Qe,function(c){return v(Vv,"atlas",t,c)},Bv);case"unloaded":return ae(n(Qc,"atlas",t));case"cancelled":return ae(n(Qc,"atlas",t));default:break e}case"sound":switch(o.b){case"loading":return ae(n(Ev,"sound",t));case"loaded":return ae(iS(t));case"failed":return n(Qe,function(c){return v(Vv,"sound",t,c)},Bv);case"unloaded":return ae(n(Qc,"sound",t));case"cancelled":return ae(n(Qc,"sound",t));default:break e}default:break e}return ae(Q)},lS=n(R,uS,C(Zc,P(function(e,r,a){return I(e,r,a)}),n(x,"kind",Ce),n(x,"status",Ce),n(x,"id",Ce))),vS=v(La,to,n(x,"instanceId",Ce),lS),g3=S0,sS=function(e){var r=n(g3,vS,e);if(r.$)return Yk;var a=r.a,t=a.a,o=a.b;return n(Xk,t,o)},_3=l(function(e,r){return{$:2,a:e,b:r}}),Ho=$b,Hv=function(e){return v(ve,R2,au,e)},y3=function(e){var r=e;return r.aP},vu=function(e){return Hv(y3(e.h4))},SJ=0,C3=P(function(e,r,a){return{$:0,a:e,b:r,c:a}}),k3=l(function(e,r){return{n2:r,oJ:e}}),dS=za(n(k3,k,ze)),bS=function(e){return e?"w_":"d_"},pS=function(e){var r=e.a,a=e.b;return h(Y(bS(r),a),e)},S3=Mh,mS=Rr(function(e,r,a,t,o,c){var i=P(function(d,b,m){e:for(;;){var g=m.a,_=m.b;if(g.b){var y=g.a,S=y.a,w=y.b,j=g.b;if(K(S,d)<0){var B=d,E=b,V=h(j,v(e,S,w,_));d=B,b=E,m=V;continue e}else return K(S,d)>0?h(g,v(a,d,b,_)):h(j,C(r,S,w,b,_))}else return h(g,v(a,d,b,_))}}),f=v(ct,i,h(un(t),c),o),$=f.a,s=f.b;return v(ve,l(function(d,b){var m=d.a,g=d.b;return v(e,m,g,b)}),s,$)}),hS=l(function(e,r){return{l8:r,jz:e}}),Uv=Fh,gS=P(function(e,r,a){var t=a.a,o=a.b,c=(function(){return t?at:wo})();return n(Yi,function(i){return h(r,i)},v(Dg,c,o,function(i){return n(Uv,e,n(hS,r,i))}))}),_S=l(function(e,r){return v(ct,fr,r,e)}),yS=P(function(e,r,a){var t=P(function(b,m,g){var _=g.a,y=g.b,S=g.c;return I(_,y,n(D,v(gS,e,b,m),S))}),o=P(function(b,m,g){var _=g.a,y=g.b,S=g.c;return I(n(D,m,_),y,S)}),c=W(function(b,m,g,_){var y=_.a,S=_.b,w=_.c;return I(y,v(fr,b,m,S),w)}),i=n(N,pS,r),f=_r(mS,o,c,t,a.n2,pn(i),I(k,ze,k)),$=f.a,s=f.b,d=f.c;return n(ma,function(b){return za(n(k3,i,n(_S,s,pn(b))))},n(ma,function(b){return Qi(d)},Qi(n(N,S3,$))))}),CS=P(function(e,r,a){var t=r.jz,o=r.l8,c=function(f){var $=f.a,s=f.b,d=s.a,b=s.b,m=s.c;return ee($,t)?n(Rg,m,o):L},i=n(xr,c,a.oJ);return n(ma,function(f){return za(a)},Qi(n(N,K$(e),i)))}),kS=l(function(e,r){var a=r.a,t=r.b,o=r.c;return v(C3,a,t,n(Qe,e,o))});na["Browser.Events"]=z0(dS,yS,CS,0,kS);var SS=Hi("Browser.Events"),Wv=P(function(e,r,a){return SS(v(C3,e,r,a))}),su=n(Wv,0,"keydown"),Gv=function(e){return{$:0,a:e}},lf=l(function(e,r){return v(sn,x,r,e)}),En=Q7,P3=V7,PS=function(e){var r=P3(e);return r==="INPUT"||r==="TEXTAREA"||r==="SELECT"},xS=l(function(e,r){if(r.$)return!1;var a=r.a;return ee(Q2(e),Wc(sv(a)))}),jS=l(function(e,r){return n(de,function(a){return a.bF},pr(n(Pr,function(a){return n(xS,e,a.tK)},r)))}),wS=function(e){return n(R,function(r){if(PS(r.oN))return En("ignored: text input focused");if(r.i8||r.jQ){var a=n(jS,r.jz,e);if(a.$)return En("ignored: no matching entry shortcut");var t=a.a;return ae(Gv(t))}else return En("ignored: no Ctrl/Cmd modifier")},A(Eo,W(function(r,a,t,o){return{i8:a,jz:r,jQ:t,oN:o}}),n(x,"key",Ce),n(x,"ctrlKey",te),n(x,"metaKey",te),n(lf,u(["target","tagName"]),Ce)))},x3=l(function(e,r){return su(wS(e))}),PJ=Q,LS=function(e){return n(N,function(r){return{bF:r.bF,tK:n(de,Q,r.tK)}},e)},du=function(e){return e.pm},TS=je(function(e,r,a,t,o){var c=n(Je,o,a.di);if(c.$)return L;var i=c.a,f=$f({g3:i.g3,cd:i.cd,aM:r.aM,cm:M(r.cm),bF:i.bF,g:a.g,ns:i.ns,nD:Vc(r.cm),sS:vu(i),nX:a.nX,aR:i.aR,cB:t,pd:i.pd,pm:du(r.cm)}),$=v(e.gZ.gj,f,Fn(r.cm),i.a_),s=n(Ho,_3(o),n(x3,LS($),i.h4)),d=n(Ho,Io(o),v(e.gZ.cZ,f,Fn(r.cm),i.a_));return M(Xi(u([d,s])))}),MS=T$("assetsResponse",$u),zS=MS(Q),j3=function(e){var r=.5*e.uD.ju-e.ad.pk,a=e.ad.pi+.5*e.uD.k6,t=function(i){var f=n(l3,e.uD,i);return K(a,f.bH)>-1&&K(a,f.bH+f.k6)<1&&K(r,f.bR)>-1&&K(r,f.bR+f.ju)<1},o=n(de,function(i){return i.sX},pr(n(Pr,t,e.kb))),c=pr(n(Pr,function(i){return n(B2,i,e.kr)},e.ad.qS));return{c5:c,hy:o}},qv=function(e){return j3({kb:e.g.sW,kr:Hv(I$(e.di)),ad:e.g.s6,uD:e.g.du})},w3=function(e){return{$:6,a:e}},L3=function(e){return{$:3,a:e}},T3=function(e){return{$:2,a:e}},M3={$:11},DS=n(R,function(e){return(e.jz==="p"||e.jz==="P")&&e.kz&&(e.i8||e.jQ)?ae(M3):En("not Cmd+Shift+P")},A(Eo,W(function(e,r,a,t){return{i8:a,jz:e,jQ:t,kz:r}}),n(x,"key",Ce),n(x,"shiftKey",te),n(x,"ctrlKey",te),n(x,"metaKey",te))),RS=function(e){var r=e;return er(r.h8)},vf=l(function(e,r){return e.hw&&!RS(r)}),BS={$:4},AS=n(R,function(e){return(e.jz==="i"||e.jz==="I")&&(e.i8||e.jQ)?ae(BS):En("not Ctrl+I")},C(Zc,P(function(e,r,a){return{i8:r,jz:e,jQ:a}}),n(x,"key",Ce),n(x,"ctrlKey",te),n(x,"metaKey",te))),IS={$:10},FS=n(R,function(e){return(e.jz==="m"||e.jz==="M")&&(e.i8||e.jQ)?ae(IS):En("not Ctrl+M")},C(Zc,P(function(e,r,a){return{i8:r,jz:e,jQ:a}}),n(x,"key",Ce),n(x,"ctrlKey",te),n(x,"metaKey",te))),z3=function(e){return{$:1,a:e}},D3="play-device-picker",Ov={fG:D3,eb:z3},VS=function(e){return{$:0,a:e}},$r=P(function(e,r,a){return e(r(a))}),sf=function(e){return{fG:e.fG,e4:320,kl:"Search devices\u2026",eb:n($r,e.eb,VS),k6:{sg:320,uz:26}}},R3=l(function(e,r){return Mo}),ES=l(function(e,r){var a=r;return n(R3,sf(e),a.b_)}),HS=function(e){return{$:7,a:e}},US={$:8},WS=n(Wv,0,"mousemove"),GS=n(Wv,0,"mouseup"),qS=function(e){if(e.$===3){var r=e.a,a=r.bo;if(a.a.$===1){var t=a.a;return Xi(u([WS(v(La,l(function(o,c){return HS({fF:o,qa:c})}),n(x,"clientX",q),n(x,"clientY",q))),GS(ae(US))]))}else return Mo}else return Mo},OS=function(e){return{$:0,a:e}},ei=function(e){var r=e.eb,a=e.fG;return{fG:a,e4:320,kl:"Search palettes\u2026",eb:n($r,r,OS),k6:{sg:320,uz:26}}},NS=l(function(e,r){var a=r;return n(R3,ei(e),a.b_)}),B3=function(e){return{$:4,a:e}},A3=function(e){return{$:1,a:e}},bu=P(function(e,r,a){return{j_:a,ok:r,oJ:e}}),Nv=za(v(bu,k,L,0)),JS=Ag(0),I3=Bg(0),F3=w0,KS=P(function(e,r,a){var t=a.ok,o=a.j_,c=h(t,r);if(c.a.$===1)if(c.b.b){var f=c.a;return n(ma,function(s){return n(ma,function(d){return za(v(bu,r,M(s),d))},JS)},F3(n(ma,Uv(e),I3)))}else{var i=c.a;return Nv}else{if(c.b.b)return za(v(bu,r,t,o));var $=c.a.a;return n(ma,function(s){return Nv},S3($))}}),xJ=Q,ZS=Q,XS=P(function(e,r,a){var t=a.oJ,o=a.j_,c=function(i){if(i.$){var f=i.a;return n(K$,e,f(r-o))}else{var f=i.a;return n(K$,e,f(ZS(r)))}};return n(ma,function(i){return n(ma,function(f){return za(v(bu,t,M(i),r))},Qi(n(N,c,t)))},F3(n(ma,Uv(e),I3)))}),YS=function(e){return{$:0,a:e}},QS=l(function(e,r){if(r.$){var a=r.a;return A3(n($r,e,a))}else{var a=r.a;return YS(n($r,e,a))}});na["Browser.AnimationManager"]=z0(Nv,KS,XS,0,QS);var eP=Hi("Browser.AnimationManager"),rP=function(e){return eP(A3(e))},V3=rP,aP=function(e){var r=e;if(r.$===1){var a=r.a,t=a._;switch(t.$){case 0:return V3(B3);case 2:return V3(B3);case 1:return Mo;default:return Mo}}else return Mo},E3=function(e){return{$:0,a:e}},H3="play-theme-picker",df={fG:H3,eb:E3},nP=l(function(e,r){var a=e.gs,t=e.eb,o=n(Ho,T3,aP(r.c_)),c=a.ck?M(n(NS,df,r.ak)):L,i=a.eP?M(n(Ho,L3,qS(r.aQ))):L,f=n(Ho,w3,n(x3,k,r.h)),$=a.dP?M(n(ES,Ov,r.al)):L,s=a.dQ?M(su(FS)):L,d=a.ck?M(su(AS)):L,b=n(vf,a,r.la.U)?M(su(DS)):L;return n(Ho,t,Xi(n(xr,Q,u([M(o),d,s,c,$,i,M(f),b]))))}),Hr=eh,pu=ih,tP=T$("tick",n(R,function(e){return n(R,function(r){return n(R,function(a){return n(R,function(t){return n(R,function(o){return n(R,function(c){return n(R,function(i){return n(R,function(f){return n(R,function($){return n(R,function(s){return n(R,function(d){return n(R,function(b){return n(R,function(m){return n(R,function(g){return n(R,function(_){return n(R,function(y){return n(R,function(S){return ae({dJ:S,ez:y,eA:_,hh:g,q7:m,hD:b,j8:d,sU:s,gi:$,sW:f,s$:i,s6:c,tf:o,du:t,$9:a,ef:r,fs:e})},n(x,"boundingClientRects",sr(n(R,function(S){return n(R,function(w){return n(R,function(j){return ae({qT:j,rf:w,tD:S})},n(x,"elements",sr(n(R,function(j){return n(R,function(B){return ae({pP:B,bF:j})},n(x,"boundingClientRect",n(R,function(B){return n(R,function(E){return n(R,function(V){return n(R,function(O){return ae({bz:O,bH:V,bM:E,bR:B})},n(x,"bottom",q))},n(x,"left",q))},n(x,"right",q))},n(x,"top",q))))},n(x,"id",Ce)))))},n(x,"frameId",Ce))},n(x,"scroll",n(R,function(S){return n(R,function(w){return n(R,function(j){return n(R,function(B){return n(R,function(E){return n(R,function(V){return ae({lN:V,lO:E,bH:B,bR:j,pb:w,pc:S})},n(x,"contentHeight",q))},n(x,"contentWidth",q))},n(x,"left",q))},n(x,"top",q))},n(x,"viewportHeight",q))},n(x,"viewportWidth",q)))))))},n(x,"darkModeIsOn",te))},n(x,"devicePixelRatio",q))},n(x,"dt",q))},n(x,"focusedElementIsTextInput",te))},n(x,"keyboard",n(R,function(b){return n(R,function(m){return n(R,function(g){return n(R,function(_){return n(R,function(y){return n(R,function(S){return n(R,function(w){return n(R,function(j){return n(R,function(B){return n(R,function(E){return ae({iL:E,i8:B,je:j,qI:w,bH:S,jQ:y,tc:_,bM:g,kz:m,k1:b})},n(x,"alt",te))},n(x,"ctrl",te))},n(x,"down",te))},n(x,"downs",sr(Ce)))},n(x,"left",te))},n(x,"meta",te))},n(x,"pressedKeys",sr(Ce)))},n(x,"right",te))},n(x,"shift",te))},n(x,"up",te))))},n(x,"operatingSystem",Ce))},n(x,"pageId",Ce))},n(x,"pageScroll",n(R,function($){return n(R,function(s){return n(R,function(d){return n(R,function(b){return n(R,function(m){return n(R,function(g){return ae({lN:g,lO:m,bH:b,bR:d,pb:s,pc:$})},n(x,"contentHeight",q))},n(x,"contentWidth",q))},n(x,"left",q))},n(x,"top",q))},n(x,"viewportHeight",q))},n(x,"viewportWidth",q))))},n(x,"paneBoundingBoxes",sr(n(R,function(f){return n(R,function($){return n(R,function(s){return n(R,function(d){return n(R,function(b){return ae({ju:b,bH:d,sX:s,bR:$,k6:f})},n(x,"height",q))},n(x,"left",q))},n(x,"paneId",Ce))},n(x,"top",q))},n(x,"width",q)))))},n(x,"persisted",sr(n(R,function(i){return n(R,function(f){return ae(h(i,f))},n(Sr,1,Ce))},n(Sr,0,Ce)))))},n(x,"pointer",n(R,function(c){return n(R,function(i){return n(R,function(f){return n(R,function($){return n(R,function(s){return n(R,function(d){return n(R,function(b){return n(R,function(m){return n(R,function(g){return n(R,function(_){return n(R,function(y){return n(R,function(S){return ae({qE:S,je:y,hi:_,hj:g,qS:m,rO:b,sp:d,tt:s,tv:$,k1:f,pi:i,pk:c})},n(x,"doubleClick",te))},n(x,"down",te))},n(x,"dx",q))},n(x,"dy",q))},n(x,"elementIdsForLastDown",sr(Ce)))},n(x,"isDown",te))},n(x,"move",te))},n(x,"rightDown",te))},n(x,"rightUp",te))},n(x,"up",te))},n(x,"x",q))},n(x,"y",q))))},n(x,"rawPointer",n(R,function(o){return n(R,function(c){return n(R,function(i){return n(R,function(f){return n(R,function($){return n(R,function(s){return n(R,function(d){return n(R,function(b){return n(R,function(m){return n(R,function(g){return n(R,function(_){return n(R,function(y){return ae({qE:y,je:_,hi:g,hj:m,qS:b,rO:d,sp:s,tt:$,tv:f,k1:i,pi:c,pk:o})},n(x,"doubleClick",te))},n(x,"down",te))},n(x,"dx",q))},n(x,"dy",q))},n(x,"elementIdsForLastDown",sr(Ce)))},n(x,"isDown",te))},n(x,"move",te))},n(x,"rightDown",te))},n(x,"rightUp",te))},n(x,"up",te))},n(x,"x",q))},n(x,"y",q))))},n(x,"screen",n(R,function(t){return n(R,function(o){return ae({ju:o,k6:t})},n(x,"height",q))},n(x,"width",q))))},n(x,"searchParamsFromUrl",Lt(u([pu(L),n(Qe,M,sr(n(R,function(a){return n(R,function(t){return ae(h(a,t))},n(Sr,1,Ce))},n(Sr,0,Ce))))]))))},n(x,"touches",sr(n(R,function(r){return n(R,function(a){return n(R,function(t){return ae({bF:t,pi:a,pk:r})},n(x,"id",Hr))},n(x,"x",q))},n(x,"y",q)))))},n(x,"wheel",n(R,function(e){return n(R,function(r){return n(R,function(a){return n(R,function(t){return n(R,function(o){return ae({lW:o,lX:t,l2:a,n3:r,n4:e})},n(x,"deltaX",q))},n(x,"deltaY",q))},n(x,"elementIdsForLastWheel",sr(Ce)))},n(x,"pinchDeltaForChrome",q))},n(x,"pinchScaleForSafari",Lt(u([pu(L),n(Qe,M,q)]))))))),oP=T$("visibilityChanged",n(R,function(e){return n(R,function(r){return ae({f4:r,pd:e})},n(x,"instanceId",Ce))},n(x,"visible",te))),cP=l(function(e,r){var a=n(nP,{gs:e.cm,eb:zv},r.cm),t=Fc(r.t7),o=qv(t),c=n(xr,C(TS,e,r,t,o),r.am),i=e.cZ(t.nX);return Xi(Y(u([tP(Kk),oP(function(f){return n(Zk,f.f4,f.pd)}),n(Ho,sS,zS),i,a]),c))}),Uo=A9,U3=W(function(e,r,a,t){var o=In&r>>>e,c=n(no,o,t);if(c.$){var $=c.a,s=v(Uo,In&r,a,$);return v(Uo,o,Lc(s),t)}else{var i=c.a,f=C(U3,e-oa,r,a,i);return v(Uo,o,To(f),t)}}),ri=P(function(e,r,a){var t=a.a,o=a.b,c=a.c,i=a.d;return e<0||K(e,t)>-1?a:K(e,Ac(t))>-1?C(Mn,t,o,c,v(Uo,In&e,r,i)):C(Mn,t,o,C(U3,o,e,r,c),i)}),iP=l(function(e,r){var a=r;return z(a,{eO:v(ri,n(Kr,a.cK,a.dy+a.aW),e,a.eO)})}),W3=l(function(e,r){if(r.$){var t=r.a;return Oc(z(t,{eO:v(ri,t.aW,e,t.eO)}))}else{var a=r.a;return qc(n(iP,e,a))}}),fo=l(function(e,r){var a=r.a,t=r.b,o=Ic(t),c=o.a,i=o.b,f=e(i),$=f.a,s=f.b;return h(n(hn,a,n(W3,h(c,$),t)),s)}),fP=P(function(e,r,a){var t=function(o){var c=v(Z$,e,r,o.nX),i=c.a,f=c.b;return h(z(o,{nX:i}),f)};return n(Vo,function(o){return z(a,{t7:o})},n(fo,t,a.t7))}),$P=xh,uP=Xt("pushUrlReset",function(e){return $P}),lP=P(function(e,r,a){if(r.$===1)return h(a,le);var t=r.a,o=function(f){var $=(function(){var s=a.am;if(s.b){var d=s.a;return v(jt,d,de(function(b){return z(b,{cd:e.bG})}),f.di)}else return f.di})();return h(z(f,{cd:e.bG,di:$}),le)},c=n(fo,o,a.t7),i=c.a;return h(z(a,{t7:i}),uP(0))}),vP=P(function(e,r,a){var t=function(o){var c=n(Je,e,o.di);if(c.$)return h(o,le);var i=c.a,f=n(Gc,r,i.h4),$=v(fr,e,z(i,{h4:f}),o.di);return h(z(o,{di:$}),le)};return n(Vo,function(o){return z(a,{t7:o})},n(fo,t,a.t7))}),sP=l(function(e,r){return e?{ju:r.gt.k6,k6:r.gt.ju}:r.gt}),dP=function(e){var r=e;return n(sP,r.d2,r.c7)},bP=function(e){return dP(e.al)},Jv=l(function(e,r){return S2(e)&&r===1?M(bP(e)):L}),G3=24,Kv=l(function(e,r){return v(or,.1,1,n(qe,(e.k6-G3)/r.k6,(e.ju-G3)/r.ju))}),q3=P(function(e,r,a){var t=.5*e.ju-a.pk,o=a.pi+.5*e.k6,c=n(Kv,e,r),i=.5*(e.k6-r.k6*c),f=.5*(e.ju-r.ju*c);return z(a,{pi:(o-i)/c-.5*r.k6,pk:.5*r.ju-(t-f)/c})}),pP=P(function(e,r,a){var t=v(q3,e,r,a),o=n(Kv,e,r);return z(t,{hi:a.hi/o,hj:a.hj/o})}),mu=l(function(e,r){if(e.$)return r;var a=e.a;return z(r,{s6:v(pP,r.du,a,r.s6),du:a,ef:n(N,n(q3,r.du,a),r.ef)})}),mP=W(function(e,r,a,t){var o=function(c){var i=n(Je,r,c.di);if(i.$)return h(c,le);var f=i.a,$=qv(c),s=n(Jv,t.cm,vr(t.am)),d=$f({g3:f.g3,cd:f.cd,aM:t.aM,cm:M(t.cm),bF:f.bF,g:c.g,ns:f.ns,nD:Vc(t.cm),sS:vu(f),nX:c.nX,aR:f.aR,cB:$,pd:f.pd,pm:du(t.cm)}),b=C(e.gZ.dp,n(mu,s,d),Fn(t.cm),a,f.a_),m=b.a,g=b.b,_=b.c,y=v(jv,ee(pr(t.am),M(r)),g,{cT:c.cd,dh:f.cd}),S=v(Z$,e,_,c.nX),w=S.a,j=S.b,B=v(fr,r,z(f,{cd:y.dh,a_:m}),c.di);return h(z(c,{cd:y.cT,di:B,nX:w}),wa(u([n(rf,Io(r),y.g4),j])))};return n(Vo,function(c){return z(t,{t7:c})},n(fo,o,t.t7))}),hP=P(function(e,r,a){return{$:7,a:e,b:r,c:a}}),gP=jh,Tt=l(function(e,r){return y2(n(gP,n($r,n($r,za,e),We),n(ma,n($r,n($r,za,e),Ge),r)))}),jJ=Q,O3=9729,wJ=Q,hu=10497,_P={hs:!0,mw:hu,hN:O3,hR:O3,o9:hu},gu=33071,yP=(function(){var e=_P;return z(e,{mw:gu,o9:gu})})(),N3=function(e){return{$:1,a:e}},CP={$:0},kP=l(function(e,r){return{$:1,a:e,b:r}}),SP=l(function(e,r){var a=e.hN,t=e.hR,o=e.mw,c=e.o9,i=e.hs,f=W(function($,s,d,b){var m=$,g=s,_=d,y=b;return _r(Eg,m,g,_,y,i,r)});return C(f,a,t,o,c)}),PP=l(function(e,r){return n(Yi,function(a){return N3({X:a,sT:e,fq:r})},n(SP,e,r))}),J3=9728,xP={hs:!0,mw:hu,hN:J3,hR:J3,o9:hu},jP=(function(){var e=xP;return z(e,{mw:gu,o9:gu})})(),wP=l(function(e,r){var a=r.L,t=n(Je,n(io,0,e),a);if(!t.$&&!t.a.$){var o=t.a.a.K,c=t.a.a.ax;return ee(o,Yc)?M(c):L}else return L}),_u=function(e){if(e.b){var r=e.a,a=e.b;return M(v(ve,ge,r,a))}else return L},LP=function(e){if(e.b){var r=e.a,a=e.b;return M(v(ve,qe,r,a))}else return L},TP=l(function(e,r){var a=LP(n(Pr,function(o){return K(o,e)>-1},r));if(a.$)return n(ne,1,_u(r));var t=a.a;return t}),MP=P(function(e,r,a){var t=a.L,o=n(Je,n(io,0,e),t);if(!o.$&&!o.a.$){var c=o.a.a.K,i=o.a.a.e8;if(c.$===2){var f=n(TP,r,I$(i));return n(Je,f,i)}else return L}else return L}),zP=l(function(e,r){return v(MP,e,1,r)}),DP=P(function(e,r,a){return wa(n(xr,function(t){var o=h(n(zP,t,a),n(wP,t,a));if(!o.a.$&&!o.b.$){var c=o.a.a,i=o.b.a,f=i?jP:yP;return M(n(Tt,n(hP,e,t),n(PP,f,c)))}else return L},r))}),K3=l(function(e,r){var a=p3(e)+":";return n(Rn,a,r)?n(Ma,Ta(a),r):r}),RP=l(function(e,r){var a=e,t=r;return n(xr,function(o){var c=o.a,i=o.b;if(i.$)return L;var f=i.a.K;if(ee(f,Yc)){var $=n(Je,c,a.L);if(!$.$&&!$.a.$){var s=$.a.a;return ee(s.K,Yc)?L:M(n(K3,0,c))}else return M(n(K3,0,c))}else return L},un(t.L))}),BP=P(function(e,r,a){var t=function(o){var c=n(Je,e,o.di);if(c.$)return h(o,le);var i=c.a,f=r(i.aR),$=n(RP,i.aR,f),s=z(i,{aR:f});return h(z(o,{di:v(fr,e,s,o.di)}),v(DP,e,$,f))};return n(Vo,function(o){return z(a,{t7:o})},n(fo,t,a.t7))}),AP=l(function(e,r){var a=h(e,r);if(a.a.$===5&&a.b.$===5){var t=a.a.a,o=a.b.a;return ee($t(t),$t(o))}else return ee(e,r)}),IP=function(e){switch(e.$){case 0:var r=e.b;return J(r);case 2:var r=e.b;return He(r);case 4:var r=e.a;return r?"true":"false";case 1:var r=e.a;return r;case 3:var a=e.a.aY,t=e.a.a5,o=e.a.F,c=e.a.aV;return n(Ur,",",n(N,J,u([a,t,o,c])));default:var i=e.a;return $t(i)}},Z3=l(function(e,r){var a=pn(n(An,function(t){return t.be},e));return n(xr,function(t){var o=t.a,c=t.b,i=n(Je,o,a);if(i.$)return L;var f=i.a;return n(AP,f,c)?L:M(h(o,IP(c)))},n(An,function(t){return t.be},r))}),FP=P(function(e,r,a){return Y(n(Z3,e.bG,r),a)}),VP=Xt("writeUrlParams",bn(function(e){var r=e.a,a=e.b;return n(bn,Q,u([kr(r),kr(a)]))})),EP=l(function(e,r){var a=Fc(r.t7),t=e.iE(a.nX);return VP(v(FP,e,a.cd,t))}),HP=P(function(e,r,a){var t=function(f){var $=n(u3,r,f.cd),s=(function(){var d=a.am;if(d.b){var b=d.a;return v(jt,b,de(function(m){return z(m,{cd:$})}),f.di)}else return f.di})();return h(z(f,{cd:$,di:s}),le)},o=n(fo,t,a.t7),c=o.a,i=z(a,{t7:c});return h(i,n(EP,e,i))}),yu=l(function(e,r){return r}),UP=P(function(e,r,a){if(r.$){var o=r.a,c=n(yu,"Play.Runtime.MaterialLoaded failed",h(e,o));return a}else{var t=r.a;return z(a,{ns:v(fr,e,t,a.ns)})}}),WP=W(function(e,r,a,t){var o=function(c){return h(z(c,{di:v(jt,e,de(n(UP,r,a)),c.di)}),le)};return n(Vo,function(c){return z(t,{t7:c})},n(fo,o,t.t7))}),GP=w$,$o=function(e){return v(ve,l(function(r,a){var t=r.a,o=r.b;return v(Sh,t,o,a)}),kh(0),e)},qP=Xt("assetsLoadRequest",bn(function(e){return $o(u([h("id",kr(e.bF)),h("instanceId",kr(e.f4)),h("kind",kr(e.bi)),h("mips",bn(GP)(e.d$)),h("url",kr(e.fq))]))})),Zv=function(e){var r=e;return r},OP=l(function(e,r){var a=Zv(r);return{bF:a.bF,f4:e,bi:a.bi,d$:a.d$,fq:a.fq}}),X3=l(function(e,r){return qP(n(N,OP(e),r))}),Y3=w$,NP=Xt("setInstanceMuted",function(e){return $o(u([h("instanceId",kr(e.f4)),h("muted",Y3(e.sr))]))}),JP=P(function(e,r,a){var t=function(o){var c=n(Je,e,o.di);if(c.$)return h(o,le);var i=c.a,f=r&&!i.fx,$=z(i,{fx:i.fx||r,pd:r}),s=i.h6?NP({f4:e,sr:!r}):le,d=f?n(X3,e,i.cJ):le;return h(z(o,{di:v(fr,e,$,o.di)}),wa(u([d,s])))};return n(Vo,function(o){return z(a,{t7:o})},n(fo,t,a.t7))}),KP=function(e){return e.bp+e.bq},Cu=function(e){var r=e;return r},ZP=n($r,KP,Cu),Q3=function(e){var r=e.bp,a=e.bq,t=e.bE,o=e.bL,c=(r+a)/2|0,i=r+a-c,f=4;if(r+a<2)return e;if(K(r,f*a+1)>0){var $=Y(o,Ae(n(Vn,c,t))),s=n(it,c,t);return{bE:s,bL:$,bp:c,bq:i}}else if(K(a,f*r+1)>0){var $=n(it,c,o),s=Y(t,Ae(n(Vn,c,o)));return{bE:s,bL:$,bp:c,bq:i}}else return e},XP=function(e){var r=e.bE,a=e.bL,t=h(r,a);if(t.a.b){var i=t.a,f=i.a,$=i.b;return h(M(f),Q3({bE:$,bL:e.bL,bp:e.bp-1,bq:e.bq}))}else if(t.b.b){if(t.b.b.b)return h(L,tu);var o=t.b,c=o.a;return h(M(c),tu)}else return h(L,tu)},ep=n($r,n($r,Fo(Q),XP),Cu),rp=l(function(e,r){return K(ZP(r),e)>0?n(rp,e,ep(r).b):r}),ap=l(function(e,r){var a=ep(r);if(a.a.$){var c=a.a;return r}else{var t=a.a.a,o=a.b;return K(t.kX,e)<0?n(ap,e,o):r}}),np=60,YP=l(function(e,r){var a=r;return e(a)}),QP=l(function(e,r){var a=r;return n(YP,Q3,{bE:a.bE,bL:n(D,e,a.bL),bp:a.bp,bq:a.bq+1})}),ex=1,rx=l(function(e,r){var a=r,t=a.jZ+e,o=t-ex;return{jZ:t,gq:n(rp,np,n(QP,{hh:e,kX:t},n(ap,o,a.gq)))}}),ax=l(function(e,r){return z(r,{dg:n(rx,e.hh,r.dg)})}),tp=function(e){var r=e.b;return Ic(r).a},op=l(function(e,r){var a=tp(e.t7);return z(a,{cd:r.cd,nD:Vc(e.cm)})}),ku={$:2},nx=function(e){var r=e.a;return ee(r,ku)},cp=function(e){var r=e.a;return r.$===3},tx=function(e){return nx(e)||cp(e)},ip={$:12},ox=l(function(e,r){return e}),fp="play-scrollport",Wo=Vg,cx=function(e){var r=P(function(o,c,i){return n(Tt,ox(ip),v(Wo,o,c,i))}),a=v(r,fp,e.gi.bH,e.gi.bR),t=n(N,function(o){return v(r,"measure-frame--"+o.rf,o.tD.bH,o.tD.bR)},e.dJ);return wa(n(D,a,t))},ix={$:4},Xv=l(function(e,r){return{$:1,a:e,b:r}}),LJ=0,$p={$:0},Su={$:1},Go=function(e){return{$:3,a:e}},TJ=1,ai=l(function(e,r){return{$:0,a:e,b:r}}),fx={$:2},$x=l(function(e,r){return{bH:e,bM:r}}),jr=function(e){var r=e.a;return r},Pu=l(function(e,r){var a=r.aH,t=function(f){return n(ne,0,n(de,function($){return $.dB},n(Br,f,a)))},o=l(function(f,$){e:for(;;){if(K(f,$)>-1)return f;if(K(e,t((f+$)/2|0))<1){var s=f,d=(f+$)/2|0;f=s,$=d;continue e}else{var s=((f+$)/2|0)+1,d=$;f=s,$=d;continue e}}}),c=jr(a),i=n(o,0,c);return i?ee(i,c)?c-1:K(e-t(i-1),t(i)-e)<1?i-1:i:0}),bf=l(function(e,r){var a=e.a,t=e.b,o=r.gm,c=r.aH,i=a?n(ne,o,n(de,function($){return $.dB},n(Br,a-1,c))):o,f=n(ne,o,n(de,function($){return $.dB},n(Br,t,c)));return h(i,f)}),yn={nz:100,op:24,ih:100,iu:400,iv:900,oR:4},ca=l(function(e,r){return r/yn.iv*(e.bM-e.bH)}),xu=P(function(e,r,a){var t=r.a,o=r.b,c=function(E){return n(ca,e,E.hc-E.km)},i=n(bf,h(1,jr(a.aH)-2),a),f=i.a,$=i.b,s=n(bf,h(o.cX+1,o.cP-1),a),d=s.a,b=s.b,m=n(bf,h(o.cX,o.cP),a),g=m.a,_=m.b;if(t.$)if(t.a){var j=t.a,S=t.b,B=v(or,d,$,_+c(S));return h(h(g,o.cX),h(B,n(Pu,B,a)))}else{var y=t.a,S=t.b,w=v(or,f,b,g+c(S));return h(h(w,n(Pu,w,a)+1),h(_,o.cP))}else return h(h(g,o.cX),h(_,o.cP))}),ia=f7,ux=W(function(e,r,a,t){var o=e.os,c=e.ot,i=e.nF,f=t.bM-t.bH,$=a-r,s=n(qe,$,n(ge,yn.nz,f*n(ia,1.002,c))),d=o*.001*s,b=t.bH+i*f-i*s,m=b+s,g=m+d,_=b+d,y=K(_,r)<0?h(r,r+s):K(g,a)>0?h(a-s,a):h(_,g),S=y.a,w=y.b;return{bH:S,bM:w}}),up=l(function(e,r){var a=h(e,r);e:for(;;)switch(a.a.$){case 2:var t=a.a;return Su;case 3:var o=a.a;return fx;case 4:var c=a.a;return J2;case 0:var i=a.a.a,f=h(0,jr(i.aH)-1),$=f.a,s=f.b,d=n(bf,h($,s),i),b=d.a,m=d.b;return Go({cl:L,d5:i,bo:n(ai,$p,{cP:s-1,cX:1}),bb:n($x,b,m)});case 1:if(a.b.$===3){var g=a.a.a,_=a.b.a,y=h(0,jr(_.d5.aH)-1),$=y.a,s=y.b,S=n(bf,h($,s),_.d5),w=S.a,j=S.b,B=C(ux,g,w,j,_.bb);return Go(z(_,{bb:B}))}else break e;case 5:if(a.b.$===3){var E=a.a.a.fF,_=a.b.a,V=_.bo,O=V.b;return Go(z(_,{bo:n(ai,n(Xv,0,{hc:E,km:E}),O)}))}else break e;case 6:if(a.b.$===3){var E=a.a.a.fF,_=a.b.a,X=_.bo,O=X.b;return Go(z(_,{bo:n(ai,n(Xv,1,{hc:E,km:E}),O)}))}else break e;case 7:if(a.b.$===3){var E=a.a.a.fF,_=a.b.a,oe=_.bo;if(oe.a.$===1){var ie=oe.a,me=ie.a,Te=ie.b,O=oe.b;return Go(z(_,{bo:n(ai,n(Xv,me,z(Te,{hc:E})),O)}))}else return r}else break e;case 8:if(a.b.$===3){var Ie=a.a,_=a.b.a,Ve=_.bo;if(Ve.a.$===1){var fe=Ve.a,Ee=v(xu,_.bb,_.bo,_.d5),Ue=Ee.a,rr=Ue.b,Ke=Ee.b,zr=Ke.b;return Go(z(_,{bo:n(ai,$p,{cP:zr,cX:rr})}))}else return r}else break e;default:if(a.b.$===3){var Ze=a.a.a,_=a.b.a;return Go(z(_,{cl:Ze}))}else break e}return r}),lx=up(ix),Yv=function(e){return e.$===3},vx=l(function(e,r){if(e.$)return r;var a=e.a;return z(r,{aP:n(D,a,n(Pr,U$(a),r.aP))})}),lp=P(function(e,r,a){return n(ne,e,n(de,Y$,pr(n(Pr,function(t){var o=t.a;return ee(o,r)},a.cW))))}),vp=function(e){return{pi:e.tf.pi+.5*e.du.k6,pk:-e.tf.pk+.5*e.du.ju}},sp=l(function(e,r){var a=vp(e);return{pi:r.g8.pi+(a.pi-r.hu.pi),pk:r.g8.pk+(a.pk-r.hu.pk)}}),dp=l(function(e,r){var a="-titlebar",t="draggable-panel-",o="-no-drag",c=function(i){e:for(;;)if(i.b){var f=i.a,$=i.b;if(n(Rn,t,f)&&n(b2,o,f)){if(e.iX)return L;var s=$;i=s;continue e}else{if(n(Rn,t,f)&&n(W2,a,f))return M(n(U2,Ta(a),n(Ma,Ta(t),f)));var s=$;i=s;continue e}}else return L};return c(r)}),sx=function(e){return n(dp,{iX:!0},e)},dx=function(e){return n(dp,{iX:!1},e)},bx=P(function(e,r,a){return n(D,h(e,r),n(Pr,function(t){var o=t.a;return!ee(o,e)},a))}),bp={pi:0,pk:0},pp=P(function(e,r,a){var t=a,o=t.eC;if(o.$===1)if(e.tf.je){var c=function(b){return n(ha,function(m){return r(m)?M(m):L},n(ha,t.rB,b(e.tf.qS)))},i=n(vx,c(dx),t),f=c(sx);if(f.$)return i;var $=f.a;return z(i,{eC:M({g8:v(lp,bp,$,i),hu:vp(e),bF:$})})}else return a;else{var s=o.a;if(e.tf.rO)return a;var d=n(sp,e,s);return z(t,{eC:L,cW:v(bx,s.bF,d,t.cW)})}}),px=l(function(e,r){var a=n(ha,function(c){var i=c.kv-e.hh;return i<=0?L:M(z(c,{kv:i}))},r.es),t=v(pp,e,function(c){return!0},r.h),o=Yv(r.aQ)&&!n(ga,3,t)?lx(r.aQ):r.aQ;return z(r,{es:a,h:t,aQ:o})}),mx=l(function(e,r){return n(tf,function(a){return ee(a.bF,r)},e)}),mp=function(e){return Q},ju=l(function(e,r){if(r.$===-2)return ot;var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e;return A(Re,a,t,n(e,t,o),n(ju,e,c),n(ju,e,i))}),hx=l(function(e,r){var a=pn(n(N,function(i){return h(Zv(i).bF,i)},r)),t=n(ju,l(function(i,f){return Zv(f).bi}),a),o=n(xr,function(i){var f=i.a,$=i.b;return n(nu,f,e)?L:M($)},un(a)),c=n(xr,function(i){var f=i.a,$=i.b;return n(nu,f,a)?L:M({bF:f,bi:$})},un(e));return{r1:t,ud:o,ue:c}}),gx=function(e){return e.h6&&!e.pd},_x=Xt("assetsUnload",bn(function(e){return $o(u([h("id",kr(e.bF)),h("instanceId",kr(e.f4)),h("kind",kr(e.bi))]))})),yx=l(function(e,r){return{bF:r.bF,f4:e,bi:r.bi}}),Cx=l(function(e,r){return _x(n(N,yx(e),r))}),kx=C0(function(e,r,a,t,o,c,i,f,$){var s=n(Je,f,$.di);if(s.$)return $;var d=s.a;if(gx(d))return $;var b=d.g3+r.g.hh,m=$f({g3:b,cd:d.cd,aM:o,cm:M(a),bF:d.bF,g:r.g,ns:d.ns,nD:Vc(a),sS:vu(d),nX:r.nX,aR:d.aR,cB:t,pd:d.pd,pm:du(a)}),g=v(mp,"play:onTick",n(e.gZ.dq,n(mu,c,m),Fn(a)),d.a_),_=g.a,y=g.b,S=g.c,w=v(jv,ee(i,M(f)),y,{cT:$.cj,dh:d.cd}),j=v(e.cJ,n(mu,c,m),Fn(a),_),B=n(hx,d.hd,j),E=er(B.ud)?le:n(X3,f,B.ud),V=er(B.ue)?le:n(Cx,f,B.ue),O=v(e.gZ.gj,m,Fn(a),_),X=v(pp,m,mx(O),d.h4);return z($,{cM:n(D,E,n(D,V,n(D,n(rf,Io(f),w.g4),$.cM))),cQ:Y($.cQ,S),cj:w.cT,di:v(fr,f,z(d,{g3:b,cd:w.dh,hd:B.r1,a_:_,h4:X}),$.di)})}),Sx=function(e){var r=e.c5;if(r.$){var t=e.ja;if(t.$)return L;var o=t.a;return n(Q$,o,e.am)?e.ja:L}else{var a=r.a;return M(a)}},hp=function(e){return{$:3,a:e}},gp=function(e){var r=e.b;return Ic(r).a.g3},Px=function(e){var r=e;return z(r,{aW:n(qe,r.lQ-1,r.aW+1)})},xx=function(e){if(e.$){var a=e.a;return Oc(z(a,{aW:n(qe,jr(a.eO)-1,a.aW+1)}))}else{var r=e.a;return qc(Px(r))}},jx=function(e){var r=e;return r.aW},_p=function(e){if(e.$){var a=e.a;return a.aW}else{var r=e.a;return jx(r)}},wx=function(e){var r=e;return r.lQ},yp=function(e){if(e.$){var a=e.a;return jr(a.eO)}else{var r=e.a;return wx(r)}},Lx=function(e){return ee(_p(e),yp(e)-1)},Tx=function(e){var r=e.a,a=e.b;return Lx(a)?L:M(n(hn,r,xx(a)))},Qv=I9,Cp=M9,pf=W(function(e,r,a,t){var o=In&r>>>e;if(K(o,ja(t))>-1){if(e===5)return n(Qv,Lc(a),t);var c=To(C(pf,e-oa,r,a,ro));return n(Qv,c,t)}else{var i=n(no,o,t);if(i.$){var c=To(C(pf,e-oa,r,a,Cp(i)));return v(Uo,o,c,t)}else{var f=i.a,c=To(C(pf,e-oa,r,a,f));return v(Uo,o,c,t)}}}),e1=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=ja(c),f=ja(e),$=a+(f-i);if(ee(f,br)){var s=K($>>>oa,1<<t)>0;if(s){var d=t+oa,b=C(pf,d,a,e,Cp(To(o)));return C(Mn,$,d,b,ro)}else return C(Mn,$,t,C(pf,t,a,e,o),ro)}else return C(Mn,$,t,o,e)}),mf=l(function(e,r){var a=r.d;return n(e1,n(Qv,e,a),r)}),Mx=l(function(e,r){var a=r;return K(a.lQ,a.cK)<0?z(a,{lQ:a.lQ+1,aW:a.lQ,eO:v(ri,n(Kr,a.cK,a.dy+a.lQ),e,a.eO)}):z(a,{aW:a.cK-1,eO:v(ri,a.dy,e,a.eO),dy:n(Kr,a.cK,a.dy+1)})}),zx=l(function(e,r){if(r.$){var t=r.a;return Oc(z(t,{aW:jr(t.eO),eO:n(mf,e,t.eO)}))}else{var a=r.a;return qc(n(Mx,e,a))}}),kp=l(function(e,r){return z(r,{dJ:e.dJ,g3:r.g3+e.hh,ez:e.ez,eA:e.eA,hh:e.hh,q7:e.q7,hD:e.hD,gi:e.gi,s6:e.s6,tf:e.tf,du:e.du,ef:e.ef,fs:e.fs})}),Sp=H9,Mt=E9,r1=l(function(e,r){var a=ja(e),t=br-ja(r.aj)-a,o=v(Sp,br,r.aj,e);return t<0?{aw:n(D,Lc(o),r.aw),Z:r.Z+1,aj:v(Mt,t,a,e)}:t?{aw:r.aw,Z:r.Z,aj:o}:{aw:n(D,Lc(o),r.aw),Z:r.Z+1,aj:ro}}),Dx=l(function(e,r){var a=r.a,t=r.c,o=r.d;if(e){if(K(e,Ac(a))>-1)return C(Mn,a-e,oa,ro,v(Mt,e-Ac(a),ja(o),o));var c=e/br|0,i=l(function(g,_){if(g.$){var S=g.a;return n(D,S,_)}else{var y=g.a;return v(wc,i,_,y)}}),f=v(wc,i,u([o]),t),$=n(Vn,c,f);if($.b){var s=$.a,d=$.b,b=e-c*br,m={aw:k,Z:0,aj:v(Mt,b,ja(s),s)};return n(F$,!0,v(ve,r1,m,d))}else return Lo}else return r}),Rx=W(function(e,r,a,t){e:for(;;){var o=In&a>>>e,c=n(no,o,t);if(c.$){var b=c.a;return v(Mt,0,In&r,b)}else{var i=c.a,f=e-oa,$=r,s=a,d=i;e=f,r=$,a=s,t=d;continue e}}}),Bx=P(function(e,r,a){e:for(;;){if(K(e,r)<1||!ja(a))return a;var t=n(no,0,a);if(t.$)return a;var o=t.a,c=e-oa,i=r,f=o;e=c,r=i,a=f;continue e}}),Pp=P(function(e,r,a){var t=In&r>>>e,o=n(no,t,a);if(o.$)return v(Mt,0,t,a);var c=o.a,i=v(Pp,e-oa,r,c);return ja(i)?v(Uo,t,To(i),v(Mt,0,t+1,a)):v(Mt,0,t,a)}),Ax=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d;if(ee(e,a))return r;if(K(e,Ac(a))>-1)return C(Mn,e,t,o,v(Mt,0,In&e,c));var i=Ac(e),f=pa(n(Zi,br,n(ge,1,i-1))),$=n(ge,5,f*oa);return C(Mn,e,$,v(Bx,t,$,v(Pp,t,i,o)),C(Rx,t,e,i,o))}),xp=l(function(e,r){var a=r.a,t=e<0?a+e:e;return t<0?0:K(t,a)>0?a:t}),Ix=P(function(e,r,a){var t=n(xp,r,a),o=n(xp,e,a);return K(o,t)>0?Lo:n(Dx,o,n(Ax,t,a))}),Fx=function(e){var r=e;return z(r,{lQ:r.aW+1})},Vx=function(e){if(e.$){var a=e.a;return Oc(z(a,{eO:v(Ix,0,a.aW+1,a.eO)}))}else{var r=e.a;return qc(Fx(r))}},Ex=P(function(e,r,a){var t=a.a,o=a.b;switch(t.$){case 2:return h(a,le);case 3:var c=t.a.kR;return h((K(c+r.hh,gp(a))>0?n(ke,Tx,ne(n(hn,ku,o))):Q)(n(hn,hp({kR:c+r.hh}),o)),le);case 1:var i=Ic(o),s=i.a,d=i.b,b=n(kp,r,s),f=n(e,b,d),g=f.a,_=f.b;return h(n(hn,ou,n(zx,h(b,g),Vx(o))),_);default:var $=Ic(o),s=$.a,d=$.b,b=n(kp,r,s),m=n(e,b,d),g=m.a,_=m.b;return h(n(hn,Sv,n(W3,h(b,g),o)),_)}}),Hx=P(function(e,r,a){var t=j3({kb:r.sW,kr:Hv(a.am),ad:r.s6,uD:r.du}),o=Sx({c5:t.c5,ja:a.aM,am:a.am}),c=n(ax,r,a.cm),i=l(function(g,_){var y=t,S=z(_,{g:r}),w=n(Jv,c,vr(a.am)),j=v(ve,aa(kx,e,S,c,y,o,w,pr(a.am)),{cM:k,cQ:k,cj:S.cd,di:S.di},a.am),B=v(Z$,e,j.cQ,S.nX),E=B.a,V=B.b;return h(z(S,{cd:j.cj,di:j.di,nX:E}),wa(n(D,V,j.cM)))}),f=v(Ex,i,r,a.t7),$=f.a,s=f.b,d=n(px,n(op,z(a,{t7:$}),Fc($)),c),b=(function(){var g=d.la;return z(d,{la:z(g,{q6:L})})})(),m=tx($)?cx(tp($)):le;return h(z(a,{aM:o,cm:b,t7:$}),wa(u([s,m])))}),MJ=0,hf=function(e){var r=e;return z(r,{dT:!1})},Ux=function(e){var r=e;return z(r,{b_:hf(r.b_)})},Wx=function(e){var r=e;return z(r,{b_:hf(r.b_)})},jp=function(e){return{$:2,a:e}},Gx=jp,wp=function(e){return{$:12,a:e}},Lp="play-command-palette",a1={fG:Lp,e4:320,kl:"Type a command\u2026",eb:wp,k6:{sg:400,uz:50}},Tp=3,qx=l(function(e,r){return!Yv(e)&&Yv(r)}),Ox=function(e){switch(e){case 0:return 1;case 1:return 2;default:return 0}},Da={$:11},uo=32,Mp=l(function(e,r){return n(ge,0,uo*r-e.e4/2+uo/2)}),n1=function(e){return mv(ln(e))},Nx=Fg("focus"),qo=function(e){return e.fG+"-list"},zp=function(e){return e.fG+"-search"},gf=l(function(e,r){var a=r,t=n(ne,0,n(ha,function(c){return n(n1,c,a.bg)},a.eU)),o=n(Mp,e,t);return h(z(a,{dT:!0,b1:o,a7:t}),wa(u([n(Tt,function(c){return e.eb(Da)},Nx(zp(e))),n(Tt,function(c){return e.eb(Da)},v(Wo,qo(e),0,o))])))}),Jx=l(function(e,r){var a=r,t=n(gf,sf(e),n(cf,M(a.c7),a.b_)),o=t.a,c=t.b;return h(z(a,{b_:o}),c)}),Kx=P(function(e,r,a){var t=a,o=n(gf,ei(e),n(cf,Cv(r),t.b_)),c=o.a,i=o.b;return h(z(t,{b_:c}),i)}),Zx=P(function(e,r,a){var t=a,o=n(ha,function(f){return n(n1,f,t.bg)},r);if(o.$)return h(t,le);var c=o.a,i=n(Mp,e,c);return h(z(t,{eU:r,b1:i,a7:c}),n(Tt,function(f){return e.eb(Da)},v(Wo,qo(e),0,i)))}),Dp=P(function(e,r,a){var t=a,o=v(Zx,ei(e),Cv(r),t.b_),c=o.a,i=o.b;return h(z(t,{b_:c}),i)}),Xx=Gv,t1={$:2},Rp=function(e){return{$:1,a:e}},Yx={$:3},o1=function(e){return{$:0,a:e}},c1=l(function(e,r){return e<0?L:pr(n(Vn,e,r))}),Qx=l(function(e,r){e:for(;;){var a=h(e,r);if(a.a.b)if(a.b.b){var t=a.a,o=t.a,c=t.b,i=a.b,f=i.a,$=i.b;if(ee(o,f)){var s=c,d=$;e=s,r=d;continue e}else{var s=e,d=$;e=s,r=d;continue e}}else return!1;else return!0}}),ej=W(function(e,r,a,t){return{lt:r,mt:e,n8:a,n9:t}}),rj=2,aj=e7,nj=12,tj=-3,oj=-1,cj=-1,i1=16,Oo=-n(ia,2,30),ij=je(function(e,r,a,t,o){var c=A(aj,ej,r,a,t,o),i={fJ:k,e_:0,hE:Oo,hF:Oo,hG:Oo,gc:k},f=e.mR?cj:tj,$=l(function(d,b){var m=d.mt,g=d.lt,_=d.n8,y=d.n9,S=ee(m,e.n_)?e.mQ?b.e_*oj+i1+g*rj:b.e_?n(ge,b.hG+i1+g,b.hF+i1+nj):Oo:Oo,w=n(ge,S,b.hE+f);return{fJ:n(D,S,b.fJ),e_:b.e_+1,hE:w,hF:_,hG:y,gc:n(D,w,b.gc)}}),s=v(ve,$,i,c);return h(Ae(s.fJ),Ae(s.gc))}),fj=function(e){return v(ve,l(function(r,a){return r}),Oo,e)},$j=P(function(e,r,a){e:for(;;){if(r<=0)return e;var t=n(D,a,e),o=r-1,c=a;e=t,r=o,a=c;continue e}}),uj=l(function(e,r){return v($j,k,e,r)}),lj=P(function(e,r,a){var t=vr(e),o=vr(r),c=n(uj,o,Oo),i=n(Oa,to,e),f=v(ve,l(function(s,d){var b=s.a,m=s.b,g=d.a,_=d.b;return A(ij,{mQ:!b,mR:ee(b,t-1),n_:m},r,a,g,_)}),h(c,c),i),$=f.b;return fj($)}),vj=l(function(e,r){var a=r;if(Ro(e))return M(0);var t=n(N,sv,Hc(e));return n(Qx,t,a.jK)?M(v(lj,t,a.jK,a.lu)):L}),f1=function(e){return{$:8,a:e}},Bp=l(function(e,r){var a=uo*r.a7,t=a-r.b1,o=r.b1+e.e4-(a+uo);if(t<0)return n(Tt,function(i){return e.eb(f1(a))},v(Wo,qo(e),0,a));if(o<0){var c=r.b1-o;return n(Tt,function(i){return e.eb(f1(c))},v(Wo,qo(e),0,c))}else return le}),sj=a7,$1=P(function(e,r,a){var t=a;switch(r.$){case 0:var o=r.a,c=Ro(o)?n(N,tt,t.h8):n(N,Y$,n(sj,l(function(S,w){var j=S.a,B=w.a;return n(av,B,j)}),n(xr,function(S){var w=S.a,j=S.b;return n(de,function(B){return h(B,w)},n(vj,o,j))},t.h8)));return I(z(t,{bg:c,b1:0,im:o,a7:0}),n(Tt,function(S){return e.eb(Da)},v(Wo,qo(e),0,0)),n(de,o1,pr(c)));case 1:var g=n(ge,0,t.a7-1),i=z(t,{a7:g});return I(i,n(Bp,e,i),n(de,o1,n(c1,g,t.bg)));case 2:var g=n(qe,vr(t.bg)-1,t.a7+1),i=z(t,{a7:g});return I(i,n(Bp,e,i),n(de,o1,n(c1,g,t.bg)));case 3:var f=n(c1,t.a7,t.bg);if(f.$===1)return I(z(t,{dT:!1}),le,M(t1));var $=f.a;return I(z(t,{eU:M($),dT:!1}),le,M(Rp($)));case 4:return I(z(t,{dT:!1}),le,M(t1));case 10:var s=n(gf,e,t),d=s.a,b=s.b;return I(d,b,M(Yx));case 5:var m=r.a;return I(z(t,{eU:M(m),dT:!1}),le,M(Rp(m)));case 6:var m=r.a,g=n(ne,t.a7,n(n1,m,t.bg));return I(z(t,{a7:g}),le,L);case 7:return I(z(t,{dT:!1}),le,M(t1));case 8:var _=r.a;return I(z(t,{b1:_}),le,L);case 9:var y=r.a;return I(t,n(Tt,function(S){return e.eb(Da)},v(Wo,qo(e),0,t.b1+y)),L);default:return I(t,le,L)}}),dj=P(function(e,r,a){var t=a;if(r.$===1){var o=r.a;return h(z(t,{d2:o}),le)}else{var c=r.a,i=v($1,sf(e),c,t.b_),f=i.a,$=i.b,s=i.c,d=(function(){e:for(;;){if(s.$)break e;switch(s.a.$){case 1:var b=s.a.a;return b;case 0:var b=s.a.a;return b;default:break e}}return t.c7})();return h(z(t,{c7:d,b_:f}),$)}}),bj=function(e){var r=e;return er(r.r)?X2(e):Z2(e)},_f=function(e){var r=e;return 1+vr(r.p)+vr(r.r)},pj=function(e){return n(ft,_f(e)-1,e)},mj=function(e){var r=e,a=r.p;if(a.b){var t=a.a,o=a.b;return{r:n(D,r.fH,r.r),p:o,fH:t}}else return r},hj=function(e){var r=e;return er(r.p)?pj(e):mj(e)},Ap=P(function(e,r,a){var t=e(a.c1);return I(z(a,{c1:t}),n(Lv,$t(t),r),le)}),gj=W(function(e,r,a,t){var o=t;switch(r.$){case 1:var c=r.a,i=n(ne,o.c1,n(Y2,c,o.c1));return I(z(o,{c1:i}),n(Lv,c,a),le);case 2:return v(Ap,hj,a,o);case 3:return v(Ap,bj,a,o);default:var f=r.a,$=v($1,ei(e),f,o.b_),s=$.a,d=$.b,b=$.c,m=(function(){if(b.$)return a;switch(b.a.$){case 1:var g=b.a.a;return n(Tv,g,a);case 0:var g=b.a.a;return n(Tv,g,a);case 2:var _=b.a;return a;default:var y=b.a;return a}})();return I(z(o,{b_:s}),m,d)}}),Ra=function(e){return{$:1,a:e}},u1=function(e){return{$:2,a:e}},yf=function(e){return{$:0,a:e}},Cf={$:1},Ip={$:3},_j=500,yj=200,Cj=l(function(e,r){var a=h(r,e);if(a.a.$)switch(a.b.$){case 0:var y=a.a.a,$=a.b,c=$.a,i=$.b,s=(function(){var O=y._;switch(O.$){case 0:return yf(0);case 1:return Cf;case 2:return Cf;default:return Ip}})();return Ra({bc:i,eB:c.eB,e$:c.e$,_:s,tK:c.tK});case 1:var y=a.a.a,d=a.b,b=y._;switch(b.$){case 0:return ff;case 1:return Ra(z(y,{_:u1(0)}));case 2:return Ra(z(y,{_:u1(0)}));default:return ff}case 2:var y=a.a.a,m=a.b;return Ra(z(y,{_:Ip}));case 3:var y=a.a.a,g=a.b,_=y._;switch(_.$){case 0:return Ra(z(y,{_:yf(0)}));case 1:return Ra(z(y,{_:Cf}));case 2:return Ra(z(y,{_:Cf}));default:return Ra(z(y,{_:yf(0)}))}default:var y=a.a.a,S=a.b.a,w=y._;switch(w.$){case 0:var j=w.a,B=j+S;return K(B,_j)>0?Ra(z(y,{_:Cf})):Ra(z(y,{_:yf(B)}));case 2:var j=w.a,B=j+S;return K(B,yj)>0?ff:Ra(z(y,{_:u1(B)}));case 1:return Ra(y);default:return Ra(y)}}else if(a.b.$){var f=a.a;return ff}else{var t=a.a,o=a.b,c=o.a,i=o.b;return Ra({bc:i,eB:c.eB,e$:c.e$,_:yf(0),tK:c.tK})}}),kj=l(function(e,r){var a=r;return n(Cj,e,a)}),Sj=P(function(e,r,a){var t=e.gs,o=e.qf;switch(r.$){case 0:var ur=r.a;if(t.ck){var c=C(gj,df,ur,a.e,a.ak),i=c.a,y=c.b,f=c.c;return I(z(a,{ak:i,e:y}),f,L)}else return I(a,le,L);case 1:var ur=r.a;if(t.dP){var $=v(dj,Ov,ur,a.al),Ue=$.a,s=$.b;return I(z(a,{al:Ue}),s,L)}else return I(a,le,L);case 2:var ur=r.a;return I(z(a,{c_:n(kj,ur,a.c_)}),le,L);case 3:var ur=r.a,d=a.aQ,b=n(up,ur,d),m=n(qx,d,b),g=m?n(Gc,t3(3),a.h):a.h;return I(z(a,{h:g,aQ:b}),le,L);case 4:if(t.ck){var y=Mv(a.e),_=v(Dp,df,y,a.ak),me=_.a,f=_.b;return I(z(a,{ak:me,e:y}),f,L)}else return I(a,le,L);case 5:var y=r.a;if(!t.ck||ee(y,a.e))return I(a,le,L);var S=v(Dp,df,y,a.ak),me=S.a,f=S.b;return I(z(a,{ak:me,e:y}),f,L);case 6:var ur=r.a,w=n(ga,6,a.h),j=n(ga,5,a.h),B=n(Gc,ur,a.h),E=n(ga,6,B),V=n(ga,5,B),O=n(ga,7,a.h),X=n(ga,7,B),oe=a.la,ie=!j&&V?v(Kx,df,a.e,a.ak):h(j&&!V?Wx(a.ak):a.ak,le),me=ie.a,Te=ie.b,Ie=(function(){if(w&&!E)return h(z(oe,{U:hf(oe.U)}),le);if(!w&&E){var nn=n(gf,a1,oe.U),Xn=nn.a,xo=nn.b;return h(z(oe,{U:Xn}),xo)}else return h(oe,le)})(),Ve=Ie.a,fe=Ie.b,Ee=!O&&X?n(Jx,Ov,a.al):h(O&&!X?Ux(a.al):a.al,le),Ue=Ee.a,rr=Ee.b;return I(z(a,{la:Ve,al:Ue,h:B,ak:me}),wa(u([fe,Te,rr])),L);case 7:return I(z(a,{pm:!a.pm}),le,L);case 8:var Ke=r.a;return I(z(a,{es:M({bc:Ke,hV:!o,kv:Tp})}),le,o?M(0):L);case 9:var zr=r.a;return!t.dQ||ee(zr,a.nD)?I(a,le,L):I(z(a,{nD:zr}),le,L);case 10:return t.dQ?I(z(a,{nD:Ox(a.nD)}),le,L):I(a,le,L);case 11:if(n(vf,t,a.la.U)){var w=n(ga,6,a.h),B=n(Gc,Xx(6),a.h),oe=a.la,Ze=w?h(hf(oe.U),le):n(gf,a1,oe.U),i=Ze.a,f=Ze.b;return I(z(a,{la:z(oe,{U:i}),h:B}),f,L)}else return I(a,le,L);case 12:var ur=r.a;if(n(vf,t,a.la.U)){var oe=a.la,Dr=v($1,a1,ur,a.la.U),i=Dr.a,f=Dr.b,Yr=Dr.c,tr=(function(){e:for(;;){if(Yr.$)break e;switch(Yr.a.$){case 1:return!0;case 2:var Yn=Yr.a;return!0;default:break e}}return!1})(),Qr=tr?n(Gc,Gx(6),a.h):a.h,Ve=(function(){if(!Yr.$&&Yr.a.$===1){var Yn=Yr.a.a;return z(oe,{U:hf(i),q6:M(h(Yn.ip,Yn.e$))})}else return z(oe,{U:i})})();return I(z(a,{la:Ve,h:Qr}),f,L)}else return I(a,le,L);default:return I(a,le,L)}}),Pj=l(function(e,r){var a=r;return z(a,{aW:v(or,0,a.lQ-1,e)})}),xj=l(function(e,r){if(r.$){var t=r.a;return Oc(z(t,{aW:v(or,0,jr(t.eO)-1,e)}))}else{var a=r.a;return qc(n(Pj,e,a))}}),jj=l(function(e,r){var a=r.b;return n(hn,ku,n(xj,e,a))}),wj=function(e){var r=e.b;return n(hn,ku,r)},Lj=function(e){var r=e.b;return n(hn,hp({kR:gp(e)}),r)},Tj=function(e){var r=e.b;return n(hn,ou,r)},Mj=l(function(e,r){switch(e.$){case 1:return wj(r);case 2:return Tj(r);case 3:return Lj(r);default:var a=e.a;return n(jj,a,r)}}),zj=P(function(e,r,a){switch(r.$){case 0:var t=r.a;return v(Hx,e,t,a);case 1:var o=r.a,c=r.b;return C(mP,e,o,c,a);case 2:var d=r.a,i=r.b;return v(vP,d,i,a);case 3:var f=r.a;return v(fP,e,u([f]),a);case 4:var d=r.a,$=r.b;return v(JP,d,$,a);case 5:var d=r.a,s=r.b;return v(BP,d,s,a);case 6:return h(a,le);case 7:var d=r.a,b=r.b,m=r.c;return C(WP,d,b,m,a);case 8:return h(z(a,{g9:L}),le);case 9:var g=r.a,_=Fc(a.t7).cd,y=!er(n(Z3,e.bG,_)),S=v(Sj,{qf:y,gs:e.cm},g,a.cm),w=S.a,j=S.b,B=S.c,E=v(lP,e,B,z(a,{cm:w})),V=E.a,O=E.b;return h(V,wa(u([n(rf,zv,j),O])));case 10:var X=r.a;return h(z(a,{t7:n(Mj,X,a.t7)}),le);case 11:var oe=r.a;return v(HP,e,oe,a);default:return h(a,le)}}),Dj=Xt("setLocalStorage",function(e){return $o(u([h("key",kr(e.jz)),h("value",kr(e.uv))]))}),Rj=l(function(e,r){var a=r.a,t=r.b,o=n(T2,e,a),c=n(xr,function(i){var f=i.a,$=i.b;return ee(n(Uc,f,a.f7),M($))?L:M(Dj({jz:f,uv:$}))},o);return er(c)?h(a,t):h(z(a,{f7:o}),wa(n(D,t,c)))}),Bj=P(function(e,r,a){return n(Rj,e,v(zj,e,r,a))}),Aj=function(e){return{$:11,a:e}},Ij=function(e){return{$:10,a:e}},Fj={$:8},Vj=Dn,Ej=$n("button"),ni=$n("code"),Hj=$n("li"),wu=$n("p"),Uj=$n("ul"),Wj=function(e){if(e.$){var r=e.a;return n(xt,u([n(re,"margin-top","0.4rem")]),u([n(wu,u([n(re,"margin","0 0 0.25rem 0")]),u([Wr("Two or more instances share the same id:")])),n(Uj,u([n(re,"margin","0 0 0.5rem 0"),n(re,"padding-left","1.25rem")]),n(N,function(a){return n(Hj,k,u([n(ni,k,u([Wr(a)]))]))},r)),n(wu,u([n(re,"margin","0")]),u([Wr("Each "),n(ni,k,u([Wr("Play.instance")])),Wr(" needs a unique "),n(ni,k,u([Wr("id")])),Wr(" \u2014 the runtime keys per-instance state, asset registries, and DOM nodes by it.")]))]))}else return n(xt,u([n(re,"margin-top","0.4rem")]),u([n(wu,u([n(re,"margin","0")]),u([n(ni,k,u([Wr("Play.multipage")])),Wr(" was called with an empty "),n(ni,k,u([Wr("instances")])),Wr(" list. Add at least one "),n(ni,k,u([Wr("Play.instance { ... }")])),Wr(" to the list.")]))]))},Gj=$n("details"),Fp=function(e){return{$:0,a:e}},Lu=mb,qj=l(function(e,r){return n(Lu,e,Fp(r))}),Oj=function(e){return n(qj,"click",ae(e))},Nj=$n("strong"),Jj=$n("summary"),Kj=function(e){return n(xt,u([n(re,"position","fixed"),n(re,"top","1rem"),n(re,"left","50%"),n(re,"transform","translateX(-50%)"),n(re,"max-width","min(40rem, calc(100vw - 2rem))"),n(re,"padding","1rem 2.75rem 1rem 1.25rem"),n(re,"background","#fff5f5"),n(re,"color","#742a2a"),n(re,"border","1px solid #fc8181"),n(re,"border-radius","0.5rem"),n(re,"box-shadow","0 4px 24px rgba(0, 0, 0, 0.15)"),n(re,"font-family","system-ui, -apple-system, sans-serif"),n(re,"font-size","0.95rem"),n(re,"line-height","1.5"),n(re,"z-index","2147483647")]),u([n(Nj,u([n(re,"display","block"),n(re,"color","#c53030"),n(re,"margin-bottom","0.35rem")]),u([Wr("This page has a configuration problem.")])),n(wu,u([n(re,"margin","0 0 0.5rem 0")]),u([Wr("Please notify the page author so they can fix it.")])),n(Gj,u([n(re,"margin-top","0.5rem"),n(re,"color","#742a2a"),n(re,"font-size","0.88rem")]),u([n(Jj,u([n(re,"cursor","pointer"),n(re,"user-select","none")]),u([Wr("Technical detail (for the developer)")])),Wj(e)])),n(Ej,u([Oj(Fj),n(Vj,"aria-label","Dismiss"),n(re,"position","absolute"),n(re,"top","0.5rem"),n(re,"right","0.5rem"),n(re,"width","1.75rem"),n(re,"height","1.75rem"),n(re,"padding","0"),n(re,"border","none"),n(re,"background","transparent"),n(re,"color","#742a2a"),n(re,"cursor","pointer"),n(re,"font-size","1.4rem"),n(re,"line-height","1"),n(re,"border-radius","0.25rem")]),u([Wr("\xD7")]))]))},mr=l(function(e,r){return e(mn(r))}),l1="scrollbar-muted",Vp=P(function(e,r,a){return{$:0,a:e,b:r,c:a}}),Zj=Vp,Hn=Zj,v1=function(e){return{$:4,a:e}},Ep=function(e){return v1(q$(e))},ce=Ep,Fe=function(e){return"hsla("+(J(e.aY*360)+(", "+(J(e.a5*100)+("%, "+(J(e.F*100)+("%, "+(J(e.aV)+")")))))))},Hp=l(function(e,r){var a=Fe(n(mr,function(c){return c.i_},r)),t=Fe(n(mr,function(c){return c.iJ},r)),o=Fe(n(mr,function(c){return c.bw},r));return v(Hn,"style",k,u([ce(`
/* Firefox + recent standards-compliant browsers */
`+(e+(`* {
  scrollbar-width: thin;
  scrollbar-color: `+(o+(` transparent;
}
`+(e+("."+(l1+(` {
  scrollbar-color: `+(a+(` transparent;
}

/* WebKit (Chrome, Safari, Edge) */
`+(e+(`::-webkit-scrollbar {
  width: 12px;
  height: 12px;
  background-color: transparent;
}
`+(e+(`::-webkit-scrollbar-track,
`+(e+(`::-webkit-scrollbar-corner {
  background-color: transparent;
}
`+(e+(`::-webkit-scrollbar-thumb {
  background-color: `+(o+(`;
  border-radius: 6px;
  min-height: 24px;
  border: 2px solid transparent;
  background-clip: padding-box;
}
`+(e+(`::-webkit-scrollbar-thumb:hover {
  background-color: `+(t+(`;
}

/* Muted variant \u2014 for less-prominent scroll surfaces */
`+(e+("."+(l1+(`::-webkit-scrollbar-thumb {
  background-color: `+(a+(`;
}
`+(e+("."+(l1+(`::-webkit-scrollbar-thumb:hover {
  background-color: `+(t+`;
}
`))))))))))))))))))))))))))))))))))))]))}),Up=function(e){return n(Hp,"",e)},Xj=l(function(e,r){return n(hb,e,kr(r))}),Wp=Xj("id"),Yj=P(function(e,r,a){return v(fr,e,{h6:r.h6,pd:r.pd},a)}),Qj=function(e){switch(e){case 0:return 44;case 1:return 40;default:return 24}},ew=function(e){var r=e;return Qj(r.c7.aI)},rw=function(e){return ew(e.al)},Gp=Kh,qp=Gp,Op=P(function(e,r,a){return{$:2,a:e,b:r,c:a}}),aw=W(function(e,r,a,t){return{$:3,a:e,b:r,c:a,d:t}}),Np=W(function(e,r,a,t){return{$:1,a:e,b:r,c:a,d:t}}),zt=P(function(e,r,a){return{$:0,a:e,b:r,c:a}}),nw=ng,Tu=l(function(e,r){var a=r.a,t=r.b,o=r.c;return v(zt,n(nw,e,a),t,o)}),kf=l(function(e,r){switch(r.$){case 0:var t=r.a,o=r.b,c=r.c;return v(Vp,t,n(N,Tu(e),o),n(N,kf(e),c));case 1:var a=r.a,t=r.b,o=r.c,c=r.d;return C(Np,a,t,n(N,Tu(e),o),n(N,kf(e),c));case 2:var t=r.a,o=r.b,c=r.c;return v(Op,t,n(N,Tu(e),o),n(N,function(f){var $=f.a,s=f.b;return h($,n(kf,e,s))},c));case 3:var a=r.a,t=r.b,o=r.c,c=r.d;return C(aw,a,t,n(N,Tu(e),o),n(N,function(f){var $=f.a,s=f.b;return h($,n(kf,e,s))},c));default:var i=r.a;return v1(n(Gp,e,i))}}),No=kf,G=Hn("div"),Jp=function(e){return{$:0,a:e}},zJ=Q,F=l(function(e,r){return Jp(e+(":"+r))}),pe=l(function(e,r){return n(F,e,r.uv)}),Ar=pe("cursor"),tw=function(e){var r=e;return n(de,function(a){return a.bF},r.eC)},s1=l(function(e,r){return!n(tf,n($r,Pv,e),r)}),ow=l(function(e,r){var a=r.a,t=r.b;switch(e.$){case 0:var o=e.a,$=o.c;return er($)?h(a,t):h(a,n(D,e,t));case 1:var c=e.b;return n(s1,function(d){var b=d.c;return er(b)},c)?h(a,t):h(a,n(D,e,t));case 2:var i=e.b;return er(i)?h(a,t):h(a,n(D,e,t));case 3:return h(a,n(D,e,t));case 4:var $=e.a;return er($)?h(a,t):h(a,n(D,e,t));case 5:var $=e.a;return er($)?h(a,t):h(a,n(D,e,t));case 6:var f=e.a;return Ro(f.qs)?h(a,t):h(v(fr,f.ss,f.qs,a),t);case 7:var $=e.a;return er($)?h(a,t):h(a,n(D,e,t));case 8:var $=e.a;return er($)?h(a,t):h(a,n(D,e,t));default:var s=e.a;return n(s1,function(d){var b=d.b;return er(b)},s)?h(a,t):h(a,n(D,e,t))}}),Kp=function(e){return{$:6,a:e}},cw=l(function(e,r){return n(uv,n(N,function(a){var t=a.a,o=a.b;return Kp({qs:o,ss:t})},un(e)),r)}),iw=function(e){var r=v(sn,ow,h(ze,k),e),a=r.a,t=r.b;return n(cw,a,t)},fw=function(e){var r=e.qt,a=e.nG,t=e.mC,o=e.lF;return{lF:o,qt:iw(r),mC:t,nG:a}},$w=function(e){return n(ne,"",n(de,function(r){return'@charset "'+(r+'"')},e))},uw=W(function(e,r,a,t){e:for(;;)if(a.b)if(a.b.b){var o=a.a,c=a.b,i=e,f=r,$=c,s=t+(e(o)+(r+""));e=i,r=f,a=$,t=s;continue e}else{var o=a.a;return t+(e(o)+"")}else return t}),_a=P(function(e,r,a){return C(uw,e,r,a,"")}),Zp=function(e){return"("+(e.mb+(n(ne,"",n(de,$y(": "),e.uv))+")"))},lw=function(e){switch(e){case 0:return"print";case 1:return"screen";default:return"speech"}},Xp=function(e){var r=P(function(c,i,f){return c+(" "+n(Ur," and ",n(D,lw(i),n(N,Zp,f))))});switch(e.$){case 0:var t=e.a;return v(_a,Zp," and ",t);case 1:var a=e.a,t=e.b;return v(r,"only",a,t);case 2:var a=e.a,t=e.b;return v(r,"not",a,t);default:var o=e.a;return o}},vw=l(function(e,r){return'@import "'+(e+(Xp(r)+'"'))}),sw=function(e){var r=e.a,a=e.b;return v(_a,vw(r),`
`,a)},dw=function(e){var r=e.a,a=e.b;return"@namespace "+(r+('"'+(a+'"')))},bw=function(e){return v(_a,function(r){var a=r;return a+";"},"",e)},pw=T7,mw=function(e){var r=e;return"::"+r},hw=function(e){switch(e){case 0:return"+";case 1:return"~";case 2:return">";default:return""}},d1=function(e){switch(e.$){case 0:var r=e.a;return"."+r;case 1:var r=e.a;return"#"+r;case 2:var r=e.a;return":"+r;default:var r=e.a;return"["+(r+"]")}},Yp=function(e){switch(e.$){case 0:var r=e.a,a=e.b;return Y(r,v(_a,d1,"",a));case 1:var a=e.a;return er(a)?"*":v(_a,d1,"",a);default:var r=e.a,a=e.b;return Y(r,v(_a,d1,"",a))}},gw=function(e){var r=e.a,a=e.b;return hw(r)+(" "+Yp(a))},_w=function(e){var r=e.a,a=e.b,t=e.c,o=n(D,Yp(r),n(N,gw,a)),c=n(ne,"",n(de,mw,t));return n(pw,n(Ur," ",o),c)},Qp=function(e){var r=e.a,a=e.b,t=e.c,o=v(_a,_w,",",n(D,r,a));return o+("{"+(bw(t)+"}"))},yw=function(e){switch(e.$){case 0:var r=e.a;return Qp(r);case 1:var a=e.a,t=e.b,o=v(_a,Xp,", ",a),c=v(_a,Qp,`
`,t);return"@media "+(o+("{"+(c+"}")));case 2:return"TODO";case 3:return"TODO";case 4:return"TODO";case 5:return"TODO";case 6:var i=e.a.qs,f=e.a.ss;return"@keyframes "+(f+("{"+(i+"}")));case 7:return"TODO";case 8:return"TODO";default:return"TODO"}},Cw=function(e){var r=e.qt,a=e.nG,t=e.mC,o=e.lF;return $w(o)+(v(_a,sw,`
`,t)+(v(_a,dw,`
`,a)+(v(_a,yw,`
`,r)+"")))},em=function(e){return{$:8,a:e}},rm=function(e){return{$:5,a:e}},am=function(e){return{$:4,a:e}},Sf=P(function(e,r,a){return{$:0,a:e,b:r,c:a}}),lo=P(function(e,r,a){return{$:0,a:e,b:r,c:a}}),Pf=function(e){return{$:0,a:e}},b1=l(function(e,r){return{$:2,a:e,b:r}}),nm=function(e){return{$:7,a:e}},Jo=l(function(e,r){return{$:1,a:e,b:r}}),p1=l(function(e,r){if(r.b)if(r.b.b){var t=r.a,o=r.b;return n(D,t,n(p1,e,o))}else{var a=r.a;return u([e(a)])}else return r}),tm=l(function(e,r){var a=r.a,t=r.b,o=r.c;return v(lo,a,t,Y(o,u([e])))}),m1=l(function(e,r){if(r.b)if(r.b.b){var i=r.a,f=r.b;return n(D,i,n(m1,e,f))}else switch(r.a.$){case 0:var a=r.a.a;return u([Pf(n(tm,e,a))]);case 1:var t=r.a,o=t.a,c=t.b;return u([n(Jo,o,n(p1,tm(e),c))]);default:return r}else return r}),om=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c,i=n(N,e,c),f=e(o);return u([v(lo,o,c,t),v(lo,f,i,k)])}else{var a=r.a,t=r.c;return u([v(lo,a,k,t),v(lo,e(a),k,k)])}}),kw=l(function(e,r){var a=r.a,t=r.b;return v(Sf,a,t,M(e))}),Sw=l(function(e,r){return n(om,kw(e),r)}),cm=l(function(e,r){return{$:2,a:e,b:r}}),Pw=l(function(e,r){return{$:0,a:e,b:r}}),im=function(e){return{$:1,a:e}},fm=l(function(e,r){switch(r.$){case 0:var a=r.a,o=r.b;return n(Pw,a,Y(o,u([e])));case 1:var o=r.a;return im(Y(o,u([e])));default:var t=r.a,o=r.b;return n(cm,t,Y(o,u([e])))}}),$m=l(function(e,r){if(r.b)if(r.b.b){var c=r.a,i=r.b;return n(D,c,n($m,e,i))}else{var a=r.a,t=a.a,o=a.b;return u([h(t,n(fm,e,o))])}else return k}),xw=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c;return v(Sf,o,n($m,e,c),t)}else{var a=r.a,t=r.c;return v(Sf,n(fm,e,a),k,t)}}),jw=l(function(e,r){return n(om,xw(e),r)}),h1=function(e){e:for(;;)if(e.b)if(e.a.$){var o=e.b,c=o;e=c;continue e}else{var r=e.a.a,a=r.a,t=r.b,o=e.b;return Y(n(D,a,t),h1(o))}else return k},g1=je(function(e,r,a,t,o){return{$:3,a:e,b:r,c:a,d:t,e:o}}),Mu=l(function(e,r){e:for(;;)if(r.b){if(r.b.b)break e;switch(r.a.$){case 0:var E=r.a.a;return n(N,Pf,e(E));case 1:if(r.a.b.b)if(r.a.b.b.b){var c=r.a,t=c.a,i=c.b,V=i.a,O=i.b,f=n(Mu,e,u([n(Jo,t,O)]));if(f.b&&f.a.$===1&&!f.b.b){var $=f.a,s=$.a,d=$.b;return u([n(Jo,s,n(D,V,d))])}else{var b=f;return b}}else{var a=r.a,t=a.a,o=a.b,E=o.a;return u([n(Jo,t,e(E))])}else break e;case 2:var m=r.a,g=m.a,_=m.b;return u([n(b1,g,n(Mu,e,_))]);case 3:var y=r.a,S=y.a,w=y.b,j=y.c,B=y.d,E=y.e;return n(N,C(g1,S,w,j,B),e(E));case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}else return r;var V=r.a,O=r.b;return n(D,V,n(Mu,e,O))}),ww=function(e){e:for(;;)if(e.b)if(e.b.b){var a=e.b,t=a;e=t;continue e}else{var r=e.a;return M(r)}else return L},um=function(e){e:for(;;)if(e.b)if(e.b.b){var a=e.b,t=a;e=t;continue e}else{var r=e.a;return M(u([r]))}else return L},Lw=function(e){e:for(;;)if(e.b){var r=e.a,a=e.b;if(r.$===1){var t=a;e=t;continue e}else return r}else return L},Tw=function(e){return{$:9,a:e}},lm=function(e){var r=function(t){if(t.b){var o=t.a,c=t.b;return n(D,o,r(c))}else return k},a=r(e);return u([Tw(a)])},Mw=l(function(e,r){if(r.$)return r;var a=r.a;return n(Jo,e,u([a]))}),zu=function(e){if(e.b){var r=e.a,a=e.b;return M(a)}else return L},vm=je(function(e,r,a,t,o){if(o.$)return o;var c=o.a;return A(g1,e,r,a,t,c)}),sm=l(function(e,r){switch(r.$){case 0:var d=r.a;return n(Jo,e,u([d]));case 1:var a=r.a,t=r.b;return n(Jo,Y(e,a),t);case 2:var o=r.a,c=r.b;return n(b1,o,n(N,sm(e),c));case 3:var i=r.a,f=r.b,$=r.c,s=r.d,d=r.e;return A(g1,i,f,$,s,d);case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}),_1=function(e){var r=e;return r},dm=W(function(e,r,a,t){var o=function(s){return n(ne,k,zu(s))},c=n(ut,r,n(ne,k,um(t))),i=(function(){var s=h(pr(c),ww(t));if(!s.a.$&&!s.b.$){var d=s.a.a,b=s.b.a;return Y(n(it,vr(t)-1,t),u([ee(b,d)?b:d]))}else return t})(),f=function(s){return Bn(n(p1,ut(e),n(N,Dc,n(Mu,a,s))))},$=n(ne,k,n(de,f,um(t)));return Y(i,Y(o($),o(c)))}),ut=l(function(e,r){if(e.b)switch(e.a.$){case 0:var a=e.a.a,V=e.b;return n(ut,V,n(m1,a,r));case 1:var t=e.a,o=t.a,j=t.b,V=e.b;return C(dm,j,V,jw(o),r);case 2:var c=e.a,i=c.a,f=c.b,V=e.b,$=l(function(O,X){var oe=O.a,ie=O.b,me=O.c,Te=X.a,Ie=X.b,Ve=X.c;return v(Sf,oe,Y(ie,n(D,h(i,Te),Ie)),Lw(u([Ve,me])))}),s=function(O){switch(O.$){case 0:var X=O.a,oe=X.a,ie=X.b,me=X.c,Te=n(An,function(tr){return n(N,$(tr),n(D,oe,ie))},h1(r)),Ie=(function(){if(Te.b){var tr=Te.a,Qr=Te.b;return u([Pf(v(lo,tr,Qr,k))])}else return k})();return n(ut,me,Ie);case 1:var Ve=O.a,fe=O.b;return n(bm,Ve,fe);case 2:var Ee=O.a,Ue=O.b;return n(pm,Ee,Ue);case 3:var rr=O.a,Ke=O.b,zr=O.c,Ze=O.d,ur=O.e;return n(N,C(vm,rr,Ke,zr,Ze),Du(ur));case 4:var Dr=O.a;return u([am(Dr)]);case 5:var Dr=O.a;return u([rm(Dr)]);case 6:var Dr=O.a;return u([nm(Dr)]);case 7:var Dr=O.a;return u([em(Dr)]);default:var Yr=O.a;return lm(Yr)}};return Bn(Y(u([n(ut,V,r)]),n(N,s,n(An,_1,f))));case 3:var d=e.a,b=d.a,j=d.b,V=e.b;return C(dm,j,V,Sw(b),r);case 5:var m=e.a.a,V=e.b,g=u2(m),_="animation-name:"+g,y=n(ut,V,n(m1,_,r));return n(uv,y,u([Kp({qs:m,ss:g})]));case 4:var S=e.a,w=S.a,j=S.b,V=e.b,B=(function(){var O=h1(r);if(O.b){var X=O.a,oe=O.b;return n(N,Mw(w),n(ut,j,Dc(Pf(v(lo,X,oe,k)))))}else return k})();return Y(n(ut,V,r),B);default:var E=e.a.a,V=e.b;return n(ut,Y(E,V),r)}else return r}),Du=function(e){var r=e.a,a=e.b,t=e.c;return n(ut,t,u([Pf(v(lo,r,a,k))]))},y1=function(e){if(e.b){var r=e.a,a=e.b;return Y(zw(r),y1(a))}else return k},bm=l(function(e,r){var a=function(t){return n(N,sm(e),Du(t))};return n(An,a,r)}),pm=l(function(e,r){var a=y1(n(An,_1,r));return u([n(b1,e,a)])}),zw=function(e){switch(e.$){case 0:var s=e.a;return Du(s);case 1:var r=e.a,a=e.b;return n(bm,r,a);case 2:var t=e.a,o=e.b;return n(pm,t,o);case 3:var c=e.a,i=e.b,f=e.c,$=e.d,s=e.e;return n(N,C(vm,c,i,f,$),Du(s));case 4:var d=e.a;return u([am(d)]);case 5:var d=e.a;return u([rm(d)]);case 6:var d=e.a;return u([nm(d)]);case 7:var d=e.a;return u([em(d)]);default:var b=e.a;return lm(b)}},Dw=function(e){var r=e.oB,a=e.nG,t=e.mC,o=e.lF,c=y1(n(An,_1,r));return{lF:o,qt:c,mC:t,nG:a}},mm=function(e){return Cw(fw(Dw(e)))},hm=function(e){return{lF:L,mC:k,nG:k,oB:e}},gm=v1,C1=function(e){return gm(v(Do,"span",u([n(Dn,"style","display: none;"),n(Dn,"class","elm-css-style-wrapper")]),Dc(v(Do,"style",k,Dc(q$(mm(hm(e))))))))},DJ=0,_m={aW:0,uv:"grabbing"},RJ=Q,Rw=P(function(e,r,a){return{$:0,a:e,b:r,c:a}}),Bw=function(e){return{$:0,a:e}},ym=l(function(e,r){var a=v(Sf,r,k,L);return u([Bw(v(Rw,a,k,e))])}),ti=l(function(e,r){return n(ym,r,n(cm,e,k))}),Cm=function(e){var r=tw(e);return r.$?ce(""):C1(u([n(ti,"body *",u([Ar(_m)]))]))},Dt={ta:0,uv:"absolute"},oi={jm:0,fV:0,uv:"row"},fa=z(oi,{uv:"column"}),Aw=function(e){return{$:0,a:e}},Iw=im(u([Aw(iv)])),km=function(e){if(e.b){var r=e;return mm(hm(u([n(ym,e,Iw)])))}else return""},Fw=function(e){var r=km(e),a=n(Dn,"","");return v(zt,a,!0,r)},H=Fw,se=n(F,"display","flex"),xf=12,wr=pe("flex-direction"),BJ=0,_e=function(e){return{dN:0,hB:0,dW:0,cV:0,sF:0,hW:0,$7:e,fo:"",gN:0,uv:He(e)}},Ko={gZ:0,pD:1300,rA:1100,sk:1400,sY:100,oX:1500,c_:1200},hr=pe("position"),AJ=0,ci=P(function(e,r,a){return{k9:0,lA:0,eJ:0,mi:0,f9:0,e0:0,dk:0,e1:0,e2:0,dV:0,dW:0,cV:0,e3:0,$7:a,fk:0,fo:r,gN:e,uv:Y(J(a),r)}}),T=n(ci,0,"px"),vo=pe("right"),Na=pe("top"),IJ=0,FJ=1,Sm=function(e){return e?"true":"false"},he=function(e){return n(F,"background-color",e.uv)},Vw=W(function(e,r,a,t){return n(F,e,r.uv+(" "+(a.uv+(" "+t.uv))))}),lt=Vw("border"),dr=pe("border-radius"),Ew=Rr(function(e,r,a,t,o,c){return n(F,e,r.uv+(" "+(a.uv+(" "+(t.uv+(" "+(o.uv+(" "+c.uv))))))))}),jf=Ew("box-shadow"),Ba=pe("padding"),Ja={qe:l(function(e,r){return T(e+r)}),rX:T(12),e6:T(8),s1:T(9999),kA:T(4),uK:T(20)},Lr=l(function(e,r){return z(r,{aV:e})}),vt={by:0,d9:0,uv:"solid"},ii=l(function(e,r){return e+("("+(n(Ur,",",r)+")"))}),Zr=l7,Hw=function(e){return e*180/Zr},st=function(e){return e*Zr/180},Uw=l(function(e,r){var a=pa(e);return n(Kr,r,a)+e-a}),Ww=P(function(e,r,a){var t=e/st(60),o=(1-Me(2*a-1))*r,c=a-o/2,i=o*(1-Me(n(Uw,t,2)-1)),f=t<0?I(0,0,0):t<1?I(o,i,0):t<2?I(i,o,0):t<3?I(0,o,i):t<4?I(0,i,o):t<5?I(i,0,o):t<6?I(o,0,i):I(0,0,0),$=f.a,s=f.b,d=f.c;return I($+c,s+c,d+c)}),Gw=je(function(e,r,a,t,o){var c=v(Ww,Hw(r),a,t),i=c.a,f=c.b,$=c.c;return{aV:o,pL:pa($),lI:0,rn:pa(f),ti:pa(i),uv:e}}),Pm=function(e){return J(e*100)+"%"},qw=W(function(e,r,a,t){var o=u([J(e),Pm(r),Pm(a),J(t)]),c=n(ii,"hsla",o);return A(Gw,c,e,r,a,t)}),ar=function(e){return C(qw,e.aY*360,e.a5,e.F,e.aV)},wf={aV:1,aY:0,F:1,a5:0},$e={f9:0,e0:0,dk:0,e1:0,e2:0,dV:0,dW:0,sF:0,$7:0,h3:0,fo:"",gN:0,uv:"0"},xm=P(function(e,r,a){var t=ar(n(Lr,.08,wf)),o=ar(n(Lr,.25,co)),c=ar(n(Lr,.18,wf));return n(G,Y(r,u([H(u([se,(function(){return wr(e===1?fa:oi)})(),n(F,"gap","3px"),Ba(T(3)),dr(n(Ja.qe,36/2,3)),he(t),v(lt,T(1),vt,c),n(F,"backdrop-filter","blur(14px) saturate(160%)"),n(F,"-webkit-backdrop-filter","blur(14px) saturate(160%)"),A(jf,$e,T(6),T(18),T(-6),o),n(F,"pointer-events","auto")]))])),a)}),Ow=l(function(e,r){return{$:1,a:e,b:r}}),Nw=function(e){return{$:2,a:e}},k1=function(e){return Ow(Nw(e))},fi=k1("active"),jm=function(e){return{$:6,a:e}},Zo=l(function(e,r){return Jp(e+(":"+r))}),Ru=P(function(e,r,a){e:for(;;)switch(a.$){case 0:var t=a.a,o=n(ne,"",pr(n(Tn,":",t)));return n(Zo,r,o);case 1:var c=a.a;return n(Zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-selector"));case 2:var i=a.a;return n(Zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-combinator"));case 3:var f=a.a;return n(Zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-pseudo-element setter"));case 4:return n(Zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-media-query"));case 5:return n(Zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-keyframes"));default:if(a.a.b)if(a.a.b.b){var g=a.a,_=g.a,y=g.b,d=e,b=r,m=jm(y);e=d,r=b,a=m;continue e}else{var $=a.a,s=$.a,d=e,b=r,m=s;e=d,r=b,a=m;continue e}else return n(Zo,r,"elm-css-error-cannot-apply-"+(e+"-with-empty-Style"))}}),VJ=0,Bu=v(ci,0,"",0),Oe=function(e){return v(Ru,"alignItems","align-items",e(Bu))},yr=l(function(e,r){return v(zt,n(Dn,e,r),!1,"")}),nr=yr,EJ=1,HJ=Q,Au=W(function(e,r,a,t){return{gY:e,he:M(a),cN:r,iz:M(t)}}),S1=Au(1),cr=jm,Jw=pe("border-style"),UJ=25,wm=Au(25),Rt=Hn("button"),we=pe("center"),be=function(e){return n(F,"color",e.uv)},WJ=29,Kw=Au(29),Iu=pe("border-bottom-left-radius"),Fu=pe("border-bottom-right-radius"),Vu=pe("border-top-left-radius"),Eu=pe("border-top-right-radius"),GJ=0,Xe=n(ci,0,"%"),Zw=l(function(e,r){var a=T(4),t=T(18);switch(r){case 0:return u([dr(Xe(50))]);case 2:return u([dr(a)]);case 1:return u(e===1?[Vu(t),Eu(t),Iu(a),Fu(a)]:[Vu(t),Iu(t),Eu(a),Fu(a)]);default:return u(e===1?[Vu(a),Eu(a),Iu(t),Fu(t)]:[Vu(a),Iu(a),Eu(t),Fu(t)])}}),Xw={$:3},Hu=Xw,Z=l(function(e,r){return ar(e(mn(r)))}),ye=pe("height"),Cn=k1("hover"),P1={by:0,uv:"inset"},Xr=function(e){return v(Ru,"justifyContent","justify-content",e(Bu))},lr={el:0,lp:0,by:0,aW:0,qC:0,ry:0,mG:0,jA:0,e2:0,dV:0,cV:0,s:0,q:0,jY:0,h3:0,s7:0,cr:0,ie:0,tC:0,fj:0,ea:0,bS:0,kY:0,uq:0,uv:"none"},x1=l(function(e,r){return v(zt,n(Lu,e,r),!1,"")}),Gr=l(function(e,r){return n(x1,e,Fp(r))}),dt=function(e){return n(Gr,"click",ae(e))},Ka=pe("outline"),Aa={aW:0,uv:"pointer"},Xo={ta:0,uv:"relative"},qJ=89,Lm=Au(89),Yw=function(e){return er(e)?{uv:"none"}:{uv:v(_a,function(r){return r.uv}," ",e)}},Uu=n($r,pe("transform"),Yw),Qw=function(e){switch(e){case 0:return"background";case 1:return"background-color";case 2:return"background-position";case 3:return"background-size";case 4:return"border";case 5:return"border-bottom";case 6:return"border-bottom-color";case 7:return"border-bottom-left-radius";case 8:return"border-bottom-right-radius";case 9:return"border-bottom-width";case 10:return"border-color";case 11:return"border-left";case 12:return"border-left-color";case 13:return"border-left-width";case 14:return"border-radius";case 15:return"border-right";case 16:return"border-right-color";case 17:return"border-right-width";case 18:return"border-top";case 19:return"border-top-color";case 20:return"border-top-left-radius";case 21:return"border-top-right-radius";case 22:return"border-top-width";case 23:return"border-width";case 24:return"bottom";case 25:return"box-shadow";case 26:return"caret-color";case 27:return"clip";case 28:return"clip-path";case 29:return"color";case 30:return"column-count";case 31:return"column-gap";case 32:return"column-rule";case 33:return"column-rule-color";case 34:return"column-rule-width";case 35:return"column-width";case 36:return"columns";case 37:return"filter";case 38:return"flex";case 39:return"flex-basis";case 40:return"flex-grow";case 41:return"flex-shrink";case 42:return"font";case 43:return"font-size";case 44:return"font-size-adjust";case 45:return"font-stretch";case 46:return"font-variation-settings";case 47:return"font-weight";case 48:return"grid-column-gap";case 49:return"grid-gap";case 50:return"grid-row-gap";case 51:return"height";case 52:return"left";case 53:return"letter-spacing";case 54:return"line-height";case 55:return"margin";case 56:return"margin-bottom";case 57:return"margin-left";case 58:return"margin-right";case 59:return"margin-top";case 60:return"mask";case 61:return"mask-position";case 62:return"mask-size";case 63:return"max-height";case 64:return"max-width";case 65:return"min-height";case 66:return"min-width";case 67:return"object-position";case 68:return"offset";case 69:return"offset-anchor";case 70:return"offset-distance";case 71:return"offset-path";case 72:return"offset-rotate";case 73:return"opacity";case 74:return"order";case 75:return"outline";case 76:return"outline-color";case 77:return"outline-offset";case 78:return"outline-width";case 79:return"padding";case 80:return"padding-bottom";case 81:return"padding-left";case 82:return"padding-right";case 83:return"padding-top";case 84:return"right";case 85:return"tab-size";case 86:return"text-indent";case 87:return"text-shadow";case 88:return"top";case 89:return"transform";case 90:return"transform-origin";case 91:return"vertical-align";case 92:return"visibility";case 93:return"width";case 94:return"word-spacing";default:return"z-index"}},Tm=function(e){return J(e)+"ms"},eL=function(e){switch(e.$){case 0:return"ease";case 1:return"linear";case 2:return"ease-in";case 3:return"ease-out";case 4:return"ease-in-out";case 5:return"step-start";case 6:return"step-end";default:var r=e.a,a=e.b,t=e.c,o=e.d;return"cubic-bezier("+(J(r)+(" , "+(J(a)+(" , "+(J(t)+(" , "+(J(o)+")")))))))}},Wu=function(e){var r=v(dn,0,-1,v(ve,l(function(a,t){var o=a.iz,c=a.he,i=a.cN,f=a.gY;return t+(Qw(f)+(" "+(Tm(i)+(" "+(n(ne,"",n(de,Tm,c))+(" "+(n(ne,"",n(de,eL,o))+",")))))))}),"",e));return n(F,"transition",r)},Mm=l(function(e,r){return{kY:0,uv:n(ii,"translate",u([e.uv,r.uv]))}}),Le=pe("width"),zm=l(function(e,r){var a=of(e),t=ar(n(Lr,a?.18:.64,co)),o=ar(n(Lr,a?.12:.48,co)),c=ar(a?n(Lr,.06,co):n(Lr,.1,wf)),i=r.iS,f=i.a,$=i.b;return n(Rt,Y(u([dt(r.bm),n(nr,"role",r.iR),n(nr,f,$),n(nr,"aria-label",r.e$),H(Y(u([hr(Xo),Le(T(36)),ye(T(36)),Jw(lr),Ba($e),Ar(Aa),n(F,"background","transparent"),Ka(lr),be(r.rP?n(Z,r.j$,e):n(Z,function(s){return s.kU},e)),Wu(u([v(wm,70,0,Hu),v(S1,70,0,Hu),v(Kw,70,0,Hu)])),r.rP?cr(u([A(jf,P1,$e,T(4),$e,o),he(o)])):cr(u([Cn(u([he(c),A(jf,P1,$e,T(1),$e,c)]))])),fi(u([A(jf,P1,$e,T(6),$e,t),he(t)]))]),n(Zw,r.d2,r.ta)))]),r.bs),u([n(G,u([H(u([Le(Xe(100)),ye(Xe(100)),se,Oe(we),Xr(we),r.rP?Uu(u([n(Mm,$e,T(1))])):cr(k),fi(u([Uu(u([n(Mm,$e,T(1.5))]))])),Wu(u([v(Lm,70,0,Hu)]))]))]),u([n(G,u([H(u([Le(T(24)),ye(T(24))]))]),u([r.f3]))]))]))}),Gu=l(function(e,r){return v(xm,1,k,u([n(zm,e,{iR:"button",iS:h("aria-pressed",Sm(r.jy)),f3:r.f3,rP:r.jy,e$:r.e$,bm:r.bm,j$:r.iK,d2:1,ta:0,bs:r.bs})]))}),Yo=l(function(e,r){return n(Gu,e,{iK:r.a9,f3:r.f3,jy:n(ga,r.bF,r.a_),e$:r.e$,bm:r.eb(Gv(r.bF)),bs:r.bs})}),rL=W(function(e,r,a,t){return n(Yo,e,{f3:t.f3,bF:t.bF,e$:t.iA,a_:r,a9:t.a9,eb:a,bs:k})}),so=pe("z-index"),aL=l(function(e,r){return n(G,u([H(u([hr(Dt),Na(T(xf)),vo(T(xf)),se,wr(fa),n(F,"gap","6px"),n(F,"pointer-events",r.jv?"none":"auto"),so(_e(Ko.rA)),n(F,"transform",r.jv?"translateX(calc(100% + "+(J(xf)+"px))"):"translateX(0)"),n(F,"transition","transform 280ms cubic-bezier(0.2, 0.9, 0.25, 1)")]))]),n(N,v(rL,e,r.h4,r.eb),r.gj))}),Dm=function(e){return{$:1,a:e}},bo=function(e){return{$:0,a:e}},nL=function(e){return{pi:Dm(xf),pk:bo(xf+e*40)}},Qo=pe("bottom"),Za=pe("left"),tL=function(e){return u([(function(){var r=e.pi;switch(r.$){case 0:var a=r.a;return Za(T(a));case 1:var a=r.a;return vo(T(a));default:return Za(Xe(50))}})(),(function(){var r=e.pk;if(r.$){var a=r.a;return Qo(T(a))}else{var a=r.a;return Na(T(a))}})()])},Lf={pq:0,aW:0,eJ:0,hB:0,rT:0,e0:0,dk:0,cV:0,fc:0,cr:0,iw:0,fl:0,bS:0,uv:"auto"},j1=12,ec={fz:0,ta:0,iw:0,uv:"fixed"},Rm=function(e){var r="blur("+(J(e)+"px) saturate(180%)");return cr(u([n(F,"backdrop-filter",r),n(F,"-webkit-backdrop-filter",r)]))},Bm={aW:0,uv:"grab"},Bt={by:0,fc:0,uv:"hidden",gP:0},Am=l(function(e,r){return v(zt,n(tv,e,r),!1,"")}),At=l(function(e,r){return n(Am,e,kr(r))}),rc=At("id"),Im=pe("max-height"),Fm=l(function(e,r){return"draggable-panel-"+(e(r)+"-no-drag")}),It=pe("overflow"),oL=l(function(e,r){var a=(function(){var t=e.pi;return t.$===2?"calc(-50% + "+(J(r.pi)+"px)"):J(r.pi)+"px"})();return"translate("+(a+(", "+(J(r.pk)+"px)")))}),bt=pe("pointer-events"),cL=l(function(e,r){switch(r.$){case 0:var a=r.a;return a;case 1:var a=r.a;return e-a;default:return e/2}}),iL=l(function(e,r){if(r.$){var a=r.a;return e-a}else{var a=r.a;return a}}),Vm=P(function(e,r,a){var t=j1-r,o=e-j1-r;return K(o,t)<1?t:v(or,t,o,a)}),fL=P(function(e,r,a){return{pi:v(Vm,e.du.k6,n(cL,e.du.k6,r.pi),a.pi),pk:v(Vm,e.du.ju,n(iL,e.du.ju,r.pk),a.pk)}}),$L=P(function(e,r,a){var t=a,o=v(fL,e,r.bc,v(lp,bp,r.bF,t)),c=t.eC;if(c.$)return o;var i=c.a;return ee(i.bF,r.bF)?n(sp,e,i):o}),Em=pe("box-shadow"),Hm=je(function(e,r,a,t,o){return n(F,e,r.uv+(" "+(a.uv+(" "+(t.uv+(" "+o.uv))))))}),uL=Hm("box-shadow"),w1=W(function(e,r,a,t){return{aV:t,pL:a,lI:0,rn:r,ti:e,uv:n(ii,"rgba",Y(n(N,He,u([e,r,a])),u([J(t)])))}}),qu={qL:Em(lr),qM:C(uL,$e,T(1),T(2),C(w1,0,0,0,.3)),l0:n(F,"box-shadow","0 2px 4px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2)"),qN:n(F,"box-shadow","0 12px 24px -8px rgba(0, 0, 0, 0.55), 0 4px 8px -2px rgba(0, 0, 0, 0.4)"),qO:n(F,"box-shadow","0 28px 60px -20px rgba(0, 0, 0, 0.85), 0 8px 24px -8px rgba(0, 0, 0, 0.55)")},lL=l(function(e,r){return v(zt,n(o2,e,r),!1,"")}),Um=lL,Wm=48,OJ=0,vL=n(ci,0,"vh"),sL={aW:0,uv:"default"},ac=pe("flex"),dL=pe("overflow-x"),Gm=pe("overflow-y"),bL=P(function(e,r,a){return n(F,e,r.uv+(" "+a.uv))}),Ir=bL("padding"),pL=l(function(e,r){return n(G,u([H(u([ac(_e(1)),Gm(Lf),dL(Lf),n(Ir,T(16),T(16))]))]),u([n(G,u([rc(e),H(u([Ar(sL)]))]),u([r]))]))}),mL=function(e){return{$:3,a:e}},hL={oO:0,uv:"ellipsis"},L1=P(function(e,r,a){return K(Me(a.F-r.F),e)>-1?a:r.F>.5?z(a,{F:v(or,0,1,r.F-e)}):z(a,{F:v(or,0,1,r.F+e)})}),Fr=pe("flex-shrink"),nc=pe("letter-spacing"),T1={fV:0,hr:0,uv:"nowrap",ei:0},Ou=pe("padding-left"),M1=pe("padding-right"),gL=pe("text-overflow"),z1=pe("text-transform"),NJ=0,$i=n(ci,0,"em"),Vr=pe("font-size"),Ia=function(e){var r=e.uv;return n(F,"font-weight",r)},pt=pe("line-height"),JJ=0,Er=function(e){return{dW:0,cV:0,e3:0,sF:0,hW:0,$7:e,fo:"",gN:0,uv:J(e)}},kn={g_:u([Vr(T(15)),Ia(_e(400)),pt(Er(1.55))]),p$:u([Vr(T(13)),Ia(_e(500)),pt(Er(1.3)),nc($i(.04))]),qC:u([Vr(T(46)),Ia(_e(300)),pt(Er(1.05)),nc($i(-.02))]),rs:u([Vr(T(16)),Ia(_e(650)),pt(Er(1.3))]),rt:u([Vr(T(30)),Ia(_e(550)),pt(Er(1.15)),nc($i(-.01))]),e$:u([Vr(T(14)),Ia(_e(550)),pt(Er(1.35))]),iA:u([Vr(T(20)),Ia(_e(650)),pt(Er(1.25)),nc($i(-.005))])},D1={ea:0,uv:"uppercase"},ui=pe("border"),_L={lI:0,uv:"currentColor"},Tf=yr("clip-rule"),Se=yr("d"),yL=function(e){var r=km(e),a=n(Dn,"","");return v(zt,a,!0,r)},Un=yL,mt=yr("fill"),CL=Np,po=CL("http://www.w3.org/2000/svg"),Nu=po("svg"),Ju=yr("viewBox"),kL=P(function(e,r,a){return v(Xh,e,gb(r),_b(a))}),SL=P(function(e,r,a){return v(zt,v(kL,e,r,a),!1,"")}),PL=n(SL,"http://www.w3.org/XML/1998/namespace","xml:space"),Pe=Nu(u([Ju("0 0 24 24"),mt("currentColor"),Un(u([Le(Xe(100)),ye(Xe(100))])),PL("http://www.w3.org/2000/svg")])),Mf=yr("fill-rule"),xe=po("path"),Ye={pn:Pe(u([n(xe,u([Se("M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z")]),k)])),pM:Pe(u([n(xe,u([Se("M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z")]),k)])),p5:Pe(u([n(xe,u([Mf("evenodd"),Tf("evenodd"),Se("M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z")]),k)])),p6:Pe(u([n(xe,u([Mf("evenodd"),Tf("evenodd"),Se("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),k)])),p7:Pe(u([n(xe,u([Mf("evenodd"),Tf("evenodd"),Se("M5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071Z")]),k)])),qc:Pe(u([n(xe,u([Se("M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z")]),k)])),qd:Pe(u([n(xe,u([Se("M4.00005 16H20V5H4.00005V16ZM13.0001 18V20H17.0001V22H7.00005V20H11.0001V18H2.99205C2.86065 17.9992 2.7307 17.9725 2.60965 17.9214C2.48861 17.8702 2.37885 17.7957 2.28668 17.702C2.19452 17.6084 2.12175 17.4975 2.07256 17.3756C2.02337 17.2538 1.99873 17.1234 2.00005 16.992V4.008C2.00005 3.451 2.45505 3 2.99205 3H21.008C21.556 3 22 3.449 22 4.007V16.992C22 17.549 21.545 18 21.008 18H13.0001Z")]),k)])),qo:Pe(u([n(xe,u([Se("M11.7143 9.78571L17.5 4L19.4286 5.92857L13.6429 11.7143L19.4286 17.5L17.5 19.4286L11.7143 13.6429L5.92857 19.4286L4 17.5L9.78571 11.7143L4 5.92857L5.92857 4L11.7143 9.78571Z")]),k)])),qz:Pe(u([n(xe,u([Se("M4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6Z")]),k)])),qA:Pe(u([n(xe,u([Se("M9 2H15A2 2 0 0 1 17 4V20A2 2 0 0 1 15 22H9A2 2 0 0 1 7 20V4A2 2 0 0 1 9 2Z")]),k)])),qG:Pe(u([n(xe,u([Se("M11 3h2v7h3l-4 4-4-4h3z M4 17h16v3H4z")]),k)])),qH:Pe(u([n(xe,u([Se("M11 2h2v7h3l-4 4-4-4h3z M4 16h16v2H4z M7 19h10v2H7z")]),k)])),qK:Pe(u([n(xe,u([Se("M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z")]),k)])),qX:Pe(u([n(xe,u([Se("M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z")]),k)])),q8:Pe(u([n(xe,u([Se("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z")]),k)])),rh:Pe(u([n(xe,u([Se("M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z")]),k)])),rk:Pe(u([n(xe,u([Se("M20.0601 11.6104C20.0639 11.7454 20.0639 11.8804 20.0601 12.0154L21.4588 13.7629C21.5322 13.8547 21.583 13.9624 21.6071 14.0773C21.6312 14.1923 21.6279 14.3113 21.5976 14.4248C21.3679 15.2866 21.0249 16.1141 20.5776 16.8857C20.519 16.9867 20.4376 17.0726 20.34 17.1365C20.2423 17.2005 20.1311 17.2408 20.0151 17.2542L17.7914 17.5017C17.6989 17.5992 17.6051 17.6929 17.5101 17.7829L17.2476 20.0123C17.2341 20.1283 17.1937 20.2396 17.1295 20.3373C17.0654 20.435 16.9794 20.5163 16.8782 20.5748C16.1067 21.0217 15.2791 21.3641 14.4173 21.5929C14.3038 21.6232 14.1848 21.6265 14.0698 21.6024C13.9549 21.5783 13.8472 21.5275 13.7554 21.4542L12.0126 20.0629H11.6076L9.8601 21.4589C9.76835 21.5322 9.66065 21.583 9.54569 21.6071C9.43073 21.6312 9.31171 21.6279 9.19823 21.5976C8.33643 21.3679 7.5089 21.0249 6.73729 20.5776C6.63634 20.519 6.55046 20.4376 6.4865 20.34C6.42254 20.2423 6.38225 20.1311 6.36885 20.0151L6.12135 17.7876C6.02385 17.6945 5.9301 17.6007 5.8401 17.5064L3.61073 17.2504C3.49468 17.2369 3.38338 17.1965 3.28572 17.1324C3.18806 17.0682 3.10674 16.9822 3.04823 16.881C2.60136 16.1093 2.2587 15.2818 2.02916 14.4201C1.99897 14.3065 1.99589 14.1875 2.02015 14.0725C2.04441 13.9576 2.09535 13.8499 2.16885 13.7582L3.5601 12.0154V11.6104L2.16416 9.86292C2.09082 9.77116 2.04006 9.66347 2.01596 9.5485C1.99186 9.43354 1.9951 9.31452 2.02541 9.20104C2.25513 8.33924 2.59812 7.51172 3.04541 6.7401C3.10403 6.63915 3.18541 6.55328 3.28306 6.48931C3.38071 6.42535 3.49195 6.38507 3.60791 6.37167L5.83166 6.12417C5.92479 6.02667 6.01854 5.93292 6.11291 5.84292L6.3726 3.61354C6.3861 3.49749 6.42653 3.3862 6.49066 3.28854C6.55479 3.19088 6.64085 3.10955 6.74198 3.05104C7.51369 2.60418 8.3412 2.26151 9.20291 2.03198C9.31647 2.00179 9.43553 1.9987 9.55049 2.02296C9.66546 2.04723 9.77312 2.09816 9.86479 2.17167L11.6076 3.56292C11.7426 3.55917 11.8776 3.55917 12.0126 3.56292L13.7601 2.16417C13.8519 2.09082 13.9595 2.04006 14.0745 2.01596C14.1895 1.99186 14.3085 1.9951 14.422 2.02542C15.2839 2.25472 16.1115 2.59773 16.8829 3.04542C16.9839 3.10403 17.0697 3.18541 17.1337 3.28306C17.1977 3.38072 17.2379 3.49195 17.2513 3.60792L17.4988 5.83167C17.5963 5.92417 17.6901 6.01792 17.7801 6.11292L20.0095 6.37542C20.1255 6.38892 20.2368 6.42934 20.3345 6.49347C20.4321 6.5576 20.5135 6.64366 20.572 6.74479C21.0188 7.51651 21.3615 8.34402 21.591 9.20573C21.6212 9.31928 21.6243 9.43834 21.6001 9.55331C21.5758 9.66828 21.5249 9.77593 21.4513 9.8676L20.0601 11.6104ZM11.8101 8.06292C11.0684 8.06292 10.3434 8.28285 9.72671 8.6949C9.11003 9.10696 8.62938 9.69263 8.34555 10.3779C8.06172 11.0631 7.98746 11.8171 8.13216 12.5445C8.27685 13.2719 8.634 13.9401 9.15845 14.4646C9.6829 14.989 10.3511 15.3462 11.0785 15.4909C11.8059 15.6356 12.5599 15.5613 13.2452 15.2775C13.9304 14.9936 14.5161 14.513 14.9281 13.8963C15.3402 13.2796 15.5601 12.5546 15.5601 11.8129C15.5601 10.8184 15.165 9.86453 14.4618 9.16127C13.7585 8.458 12.8047 8.06292 11.8101 8.06292Z")]),k)])),rl:Pe(u([n(xe,u([Se("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),k)])),ru:Pe(u([n(xe,u([Se("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),k)])),rv:Pe(u([n(xe,u([Se("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z")]),k)])),rx:Pe(u([n(xe,u([Se("M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z")]),k)])),rU:Pe(u([n(xe,u([Se("M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10H18C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7957 12 18 12H16C15.2043 12 14.4413 11.6839 13.8787 11.1213C13.3161 10.5587 13 9.79565 13 9V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H16ZM13.8787 14.8787C14.4413 14.3161 15.2043 14 16 14H18C18.7957 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2043 21 17V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V17C13 16.2043 13.3161 15.4413 13.8787 14.8787Z")]),k)])),rY:Pe(u([n(xe,u([Se("M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z")]),k)])),r8:Pe(u([n(xe,u([Se("M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z")]),k)])),sn:Pe(u([n(xe,u([Se("M12 22C17.523 22 22 17.523 22 12C22 11.537 21.306 11.46 21.067 11.857C20.5572 12.7013 19.862 13.4186 19.034 13.9545C18.206 14.4903 17.2669 14.8307 16.2878 14.9499C15.3088 15.0691 14.3154 14.9639 13.383 14.6423C12.4507 14.3207 11.6037 13.7911 10.9063 13.0937C10.2089 12.3963 9.67932 11.5493 9.35772 10.617C9.03613 9.68457 8.93093 8.69123 9.0501 7.71217C9.16926 6.73311 9.50967 5.794 10.0455 4.96599C10.5814 4.13797 11.2987 3.44275 12.143 2.933C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z")]),k)])),ka:Pe(u([n(xe,u([Se("M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z")]),k)])),sZ:Pe(u([n(xe,u([Se("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),k)])),s_:Pe(u([n(xe,u([Se("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),k)])),s4:Pe(u([n(xe,u([Se("M7 5V19L18 12L7 5Z")]),k)])),s5:Pe(u([n(xe,u([Se("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),k)])),s6:Pe(u([n(xe,u([Se("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),k)])),th:Pe(u([n(xe,u([Se("M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z")]),k)])),tj:Pe(u([n(xe,u([Se("M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34001 8 3.76001 10.42 2.06001 13.93C1.74001 14.6 2.10001 15.4 2.81001 15.64C3.40001 15.84 4.04001 15.56 4.31001 15C5.61001 12.34 8.34001 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z")]),k)])),tp:Pe(u([n(xe,u([Se("M7.20679 2.29279C7.39426 2.48031 7.49957 2.73462 7.49957 2.99979C7.49957 3.26495 7.39426 3.51926 7.20679 3.70679L5.41379 5.49979H13.2498C14.832 5.49979 16.3788 5.96898 17.6943 6.84803C19.0099 7.72708 20.0353 8.97651 20.6408 10.4383C21.2463 11.9001 21.4048 13.5087 21.0961 15.0605C20.7874 16.6124 20.0255 18.0378 18.9066 19.1566C17.7878 20.2755 16.3624 21.0374 14.8105 21.3461C13.2587 21.6548 11.6501 21.4963 10.1883 20.8908C8.72651 20.2853 7.47708 19.2599 6.59803 17.9443C5.71898 16.6288 5.24979 15.082 5.24979 13.4998C5.24979 13.2346 5.35514 12.9802 5.54268 12.7927C5.73022 12.6051 5.98457 12.4998 6.24979 12.4998C6.515 12.4998 6.76936 12.6051 6.95689 12.7927C7.14443 12.9802 7.24979 13.2346 7.24979 13.4998C7.24979 14.6865 7.60168 15.8465 8.26097 16.8332C8.92026 17.8199 9.85733 18.5889 10.9537 19.0431C12.05 19.4972 13.2564 19.616 14.4203 19.3845C15.5842 19.153 16.6533 18.5815 17.4924 17.7424C18.3315 16.9033 18.903 15.8342 19.1345 14.6703C19.366 13.5064 19.2472 12.3 18.7931 11.2037C18.3389 10.1073 17.5699 9.17026 16.5832 8.51097C15.5965 7.85168 14.4365 7.49979 13.2498 7.49979H5.41379L7.20679 9.29279C7.38894 9.48139 7.48974 9.73399 7.48746 9.99619C7.48518 10.2584 7.38001 10.5092 7.1946 10.6946C7.0092 10.88 6.75838 10.9852 6.49619 10.9875C6.23399 10.9897 5.98139 10.8889 5.79279 10.7068L2.29279 7.20679C2.10532 7.01926 2 6.76495 2 6.49979C2 6.23462 2.10532 5.98031 2.29279 5.79279L5.79279 2.29279C5.98031 2.10532 6.23462 2 6.49979 2C6.76495 2 7.01926 2.10532 7.20679 2.29279Z")]),k)])),ty:Pe(u([n(xe,u([Se("M21 7V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H17L21 7ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z")]),k)])),tJ:Pe(u([n(xe,u([Se("M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z")]),k)])),tN:Pe(u([n(xe,u([Se("M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z")]),k)])),tQ:Pe(u([n(xe,u([Se("M8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z")]),k)])),t0:Pe(u([n(xe,u([Se("M11.9989 19C12.2641 19 12.5185 19.1054 12.706 19.2929C12.8935 19.4804 12.9989 19.7348 12.9989 20V21C12.9989 21.2652 12.8935 21.5196 12.706 21.7071C12.5185 21.8946 12.2641 22 11.9989 22C11.7337 22 11.4793 21.8946 11.2918 21.7071C11.1042 21.5196 10.9989 21.2652 10.9989 21V20C10.9989 19.7348 11.1042 19.4804 11.2918 19.2929C11.4793 19.1054 11.7337 19 11.9989 19ZM18.3629 16.95L19.0699 17.657C19.252 17.8456 19.3528 18.0982 19.3506 18.3604C19.3483 18.6226 19.2431 18.8734 19.0577 19.0588C18.8723 19.2442 18.6215 19.3494 18.3593 19.3517C18.0971 19.354 17.8445 19.2532 17.6559 19.071L16.9489 18.364C16.7667 18.1754 16.6659 17.9228 16.6682 17.6606C16.6705 17.3984 16.7757 17.1476 16.9611 16.9622C17.1465 16.7768 17.3973 16.6716 17.6595 16.6693C17.9217 16.667 18.1743 16.7678 18.3629 16.95ZM5.63489 16.95C5.81485 16.7707 6.05633 16.6665 6.31028 16.6588C6.56423 16.651 6.81161 16.7402 7.00217 16.9082C7.19274 17.0763 7.3122 17.3106 7.33629 17.5635C7.36038 17.8164 7.2873 18.069 7.13189 18.27L7.04889 18.364L6.34189 19.071C6.16193 19.2503 5.92046 19.3545 5.66651 19.3622C5.41256 19.37 5.16518 19.2808 4.97461 19.1128C4.78405 18.9447 4.66459 18.7104 4.64049 18.4575C4.6164 18.2046 4.68948 17.952 4.84489 17.751L4.92789 17.657L5.63489 16.95ZM11.9989 6C13.5902 6 15.1163 6.63214 16.2415 7.75736C17.3668 8.88258 17.9989 10.4087 17.9989 12C17.9989 13.5913 17.3668 15.1174 16.2415 16.2426C15.1163 17.3679 13.5902 18 11.9989 18C10.4076 18 8.88147 17.3679 7.75625 16.2426C6.63103 15.1174 5.99889 13.5913 5.99889 12C5.99889 10.4087 6.63103 8.88258 7.75625 7.75736C8.88147 6.63214 10.4076 6 11.9989 6ZM3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889ZM20.9989 11C21.2641 11 21.5185 11.1054 21.706 11.2929C21.8935 11.4804 21.9989 11.7348 21.9989 12C21.9989 12.2652 21.8935 12.5196 21.706 12.7071C21.5185 12.8946 21.2641 13 20.9989 13H19.9989C19.7337 13 19.4793 12.8946 19.2918 12.7071C19.1042 12.5196 18.9989 12.2652 18.9989 12C18.9989 11.7348 19.1042 11.4804 19.2918 11.2929C19.4793 11.1054 19.7337 11 19.9989 11H20.9989ZM4.92789 4.929C5.10008 4.75682 5.32918 4.65339 5.57221 4.63811C5.81524 4.62283 6.05549 4.69675 6.24789 4.846L6.34189 4.929L7.04889 5.636C7.22824 5.81596 7.33237 6.05743 7.34012 6.31138C7.34787 6.56533 7.25868 6.81271 7.09064 7.00328C6.92261 7.19384 6.68834 7.31331 6.43542 7.3374C6.18249 7.36149 5.92988 7.28841 5.72889 7.133L5.63489 7.05L4.92789 6.343C4.74042 6.15547 4.63511 5.90116 4.63511 5.636C4.63511 5.37084 4.74042 5.11653 4.92789 4.929ZM19.0699 4.929C19.2574 5.11653 19.3627 5.37084 19.3627 5.636C19.3627 5.90116 19.2574 6.15547 19.0699 6.343L18.3629 7.05C18.2706 7.14551 18.1603 7.22169 18.0383 7.2741C17.9163 7.32651 17.7851 7.3541 17.6523 7.35525C17.5195 7.3564 17.3878 7.3311 17.2649 7.28082C17.142 7.23054 17.0304 7.15629 16.9365 7.0624C16.8426 6.9685 16.7684 6.85685 16.7181 6.73395C16.6678 6.61106 16.6425 6.47938 16.6436 6.3466C16.6448 6.21382 16.6724 6.0826 16.7248 5.9606C16.7772 5.83859 16.8534 5.72825 16.9489 5.636L17.6559 4.929C17.8434 4.74153 18.0977 4.63621 18.3629 4.63621C18.6281 4.63621 18.8824 4.74153 19.0699 4.929ZM11.9989 2C12.2641 2 12.5185 2.10536 12.706 2.29289C12.8935 2.48043 12.9989 2.73478 12.9989 3V4C12.9989 4.26522 12.8935 4.51957 12.706 4.70711C12.5185 4.89464 12.2641 5 11.9989 5C11.7337 5 11.4793 4.89464 11.2918 4.70711C11.1042 4.51957 10.9989 4.26522 10.9989 4V3C10.9989 2.73478 11.1042 2.48043 11.2918 2.29289C11.4793 2.10536 11.7337 2 11.9989 2Z")]),k)])),t7:Pe(u([n(xe,u([Mf("evenodd"),Tf("evenodd"),Se("M10.8293 13C10.9398 12.6872 11 12.3506 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15H16C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 12.3506 13.0602 12.6872 13.1707 13H10.8293ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z")]),k)])),uh:Pe(u([n(xe,u([Mf("evenodd"),Tf("evenodd"),Se("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),k)])),uj:Pe(u([n(xe,u([Se("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),k)])),um:Pe(u([n(xe,u([Se("M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z")]),k)])),ur:Pe(u([n(xe,u([Se("M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z")]),k)])),uB:Pe(u([n(xe,u([Se("M4.47 21H19.53C21.07 21 22.03 19.33 21.26 18L13.73 4.98999C12.96 3.65999 11.04 3.65999 10.27 4.98999L2.74 18C1.97 19.33 2.93 21 4.47 21ZM12 14C11.45 14 11 13.55 11 13V11C11 10.45 11.45 9.99999 12 9.99999C12.55 9.99999 13 10.45 13 11V13C13 13.55 12.55 14 12 14ZM13 18H11V16H13V18Z")]),k)])),uT:Pe(u([n(xe,u([Se("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),k)])),uX:Pe(u([n(xe,u([Se("M9.31445 17.5469L8.43555 18.4355L12 22L15.5645 18.4355L14.6855 17.5469L12 20.2324L9.31445 17.5469ZM14.6855 6.45312L15.5645 5.56445L12 2L8.43555 5.56445L9.31445 6.45312L12 3.76758L14.6855 6.45312ZM6.45312 14.6855L3.76758 12L6.45312 9.31445L5.56445 8.43555L2 12L5.56445 15.5645L6.45312 14.6855ZM22 12L18.4355 8.43555L17.5469 9.31445L20.2324 12L17.5469 14.6855L18.4355 15.5645L22 12ZM8.25 15.75H15.75V8.25H8.25V15.75ZM9.5 9.5H14.5V14.5H9.5V9.5Z")]),k)]))},Sn=pe("opacity"),li={lI:0,uv:"transparent"},xL=l(function(e,r){return n(Rt,u([rc(r),dt(e.eb(jp(e.bF))),n(nr,"aria-label","Close"),H(u([Le(T(32)),ye(T(32)),Ba(T(5)),dr(Xe(50)),ui($e),he(li),be(_L),Ar(Aa),se,Oe(we),Xr(we),Ka(lr),Sn(Er(.9)),n(F,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Cn(u([Sn(Er(1)),he(C(w1,255,255,255,.18))]))]))]),u([Ye.qo]))}),qm=po("circle"),Om=yr("cx"),Nm=yr("cy"),Jm=yr("r"),jL=n(Nu,u([Ju("0 0 24 24"),mt("currentColor"),Un(u([Le(T(18)),ye(T(18))]))]),n(N,function(e){var r=e.a,a=e.b;return n(qm,u([Om(He(r)),Nm(He(a)),Jm("2")]),k)},u([h(9,5),h(15,5),h(9,12),h(15,12),h(9,19),h(15,19)]))),Ku=pe("white-space"),wL=P(function(e,r,a){var t=n(Z,function(o){return v(L1,.45,o.H,r.a9(o))},e);return n(G,u([H(u([se,Oe(we),Fr(_e(0)),ye(T(Wm)),Ou(T(16)),M1(T(8)),n(F,"gap","12px"),be(t)])),n(Gr,"dblclick",ae(r.eb(mL(r.bF))))]),u([jL,n(G,u([H(u([ac(_e(1)),Ku(T1),It(Bt),gL(hL),be(t),cr(kn.rs),nc(T(.6)),z1(D1)]))]),u([ce(r.iA)])),n(xL,r,a)]))}),Ft=P(function(e,r,a){if(n(ga,a.bF,a.a_)){var t=n(Z,n(ke,a.a9,Lr(.18)),e),o=n(Z,n(ke,a.a9,Lr(.35)),e),c=v($L,r,a,a.a_),i=a.a_,f=i,$=n(Fm,f.rC,a.bF)+"-body",s=n(Fm,f.rC,a.bF),d=f.rC(a.bF),b="draggable-panel-"+(d+"-titlebar");return n(G,u([H(u([he(t),Rm(16),dr(n(Ja.qe,Wm/2,1)),v(lt,T(1),vt,o),qu.qN,hr(ec),cr(tL(a.bc)),n(F,"width","-webkit-fit-content"),n(F,"width","fit-content"),n(F,"max-width","calc(100vw - "+(J(2*j1)+"px)")),Im(vL(80)),se,wr(fa),It(Bt),so(_e(Ko.sY+n(qe,999,a.aG-1-a.dw))),bt(Lf),n(F,"will-change","transform"),n(F,"user-select","none"),n(F,"-webkit-user-select","none"),Ar(Bm)])),rc(b),n(Um,"transform",n(oL,a.bc,c))]),u([v(wL,e,a,s),n(pL,$,a.g_)]))}else return ce("")}),LL=je(function(e,r,a,t,o){return a.jv?ce(""):v(Ft,e,r,{bc:nL(t.lB),g_:o.g_,bF:o.bF,a_:a.h4,aG:t.aG,dw:t.dw,a9:o.a9,iA:o.iA,eb:a.eb})}),TL=P(function(e,r,a){if(er(a.gj))return ce("");var t=y3(a.h4),o=vr(t),c=pn(n(Oa,l(function(f,$){return h($.bF,f)}),a.gj)),i=pn(n(N,function(f){return h(f.bF,f)},a.gj));return n(G,k,u([n(aL,e,a),n(G,k,n(Oa,l(function(f,$){var s=n(Je,$,i);if(s.$)return ce("");var d=s.a;return A(LL,e,r,a,{lB:n(ne,0,n(Je,$,c)),aG:o,dw:f},d)}),t)),Cm(a.h4)]))}),ML=l(function(e,r){var a=function(o){return J(o)+"px"},t=n(Kv,e.uD,e.jd);return n(xt,u([n(re,"position","fixed"),n(re,"inset","0"),n(re,"display","flex"),n(re,"align-items","center"),n(re,"justify-content","center"),n(re,"background-color",e.pD)]),u([n(xt,u([n(re,"position","relative"),n(re,"width",a(e.jd.k6)),n(re,"height",a(e.jd.ju)),n(re,"border-radius",a(e.ql)),n(re,"overflow","hidden"),n(re,"box-shadow","0 24px 64px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16)"),n(re,"transform","scale("+(J(t)+")")),n(re,"transform-origin","center")]),u([r]))]))}),zL=Rr(function(e,r,a,t,o,c){var i=n(Je,c,a.di);if(i.$)return L;var f=i.a,$=Fn(r.cm),s=$f({g3:f.g3,cd:f.cd,aM:r.aM,cm:M(r.cm),bF:f.bF,g:a.g,ns:f.ns,nD:Vc(r.cm),sS:vu(f),nX:a.nX,aR:f.aR,cB:t,pd:f.pd,pm:du(r.cm)}),d=v(mp,"play:view",n(e.gZ.dE,n(mu,o,s),$),f.a_),b=v(e.gZ.gj,s,$,f.a_),m=n(N,function(w){return{g_:n(No,Io(c),w.g_),f3:n(No,Io(c),w.f3),bF:w.bF,tK:w.tK,a9:w.a9,iA:w.iA}},b),g=N$(v(TL,$,s,{jv:s.pm,h4:f.h4,gj:m,eb:_3(c)})),_=ee(r.aM,M(c)),y=n(mr,function(w){return w.bw},Fn(r.cm)),S=_?"4px solid "+Fe(y):"none";return M(h(c,n(xt,u([Wp(c),n(re,"outline",S),n(re,"border-radius","inherit")]),u([(function(){if(o.$)return Q;var w=o.a;return ML({pD:Fe(n(mr,function(j){return j.kL},$)),ql:rw(r.cm),jd:w,uD:a.g.du})})()(n(qp,Io(c),d)),g]))))}),Km=function(e){return{$:1,a:e}},DL=l(function(e,r){return n(Lu,e,Km(r))}),Wn=At("className"),R1={$:2},RL=function(e){return{$:1,a:e}},Zu=function(e){return{$:0,a:e}},zf=12,Xu=72,mo=function(e){switch(e){case 0:return{pi:Zu(Xu),pk:bo(zf)};case 1:return{pi:Zu(Xu+44),pk:bo(zf+44)};case 2:return{pi:Dm(12),pk:bo(zf)};case 3:return{pi:R1,pk:bo(100)};case 4:return{pi:R1,pk:RL(40)};case 5:return{pi:Zu(Xu),pk:bo(zf)};case 6:return{pi:R1,pk:bo(80)};default:return{pi:Zu(Xu),pk:bo(zf)}}},Fa=function(e){switch(e){case 0:return n(ke,function(r){return r.ka},function(r){return r.pL});case 1:return n(ke,function(r){return r.ka},function(r){return r.r2});case 2:return n(ke,function(r){return r.ka},function(r){return r.rn});case 3:return n(ke,function(r){return r.ka},function(r){return r.uS});case 4:return n(ke,function(r){return r.ka},function(r){return r.ti});case 5:return function(r){return r.bw};case 6:return function(r){return r.bw};default:return n(ke,function(r){return r.ka},function(r){return r.qq})}},BL=pe("padding-bottom"),Zm=320,Xa={sm:'ui-monospace, "SF Mono", Menlo, Monaco, "Cascadia Mono", "Roboto Mono", Consolas, monospace',ul:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},Yu=pe("flex-grow"),Xm=function(e){return n(G,u([H(u([ye(T(1)),Yu(_e(1)),n(F,"background-color",Fe(n(mr,function(r){return r.iZ},e)))]))]),k)},Ym=pe("margin-bottom"),Qm=l(function(e,r){return n(G,u([H(u([se,Oe(we),n(F,"gap","14px"),Ym(T(18))]))]),u([Xm(e),n(G,u([H(u([n(F,"font-family",Xa.ul),cr(kn.rs),nc($i(.18)),z1(D1),be(n(Z,function(a){return a.kU},e)),Fr(_e(0)),n(F,"white-space","nowrap")]))]),u([ce(r)])),Xm(e)]))}),AL=l(function(e,r){return{$:4,a:e,b:r}}),IL=l(function(e,r){return{$:3,a:e,b:r}}),FL=l(function(e,r){return{$:0,a:e,b:r}}),VL=l(function(e,r){return{$:2,a:e,b:r}}),EL=l(function(e,r){return{$:5,a:e,b:r}}),HL=l(function(e,r){return{$:1,a:e,b:r}}),tc=Hn("input"),B1=At("max"),A1=At("min"),UL=function(e){return h(e,!0)},Qu=l(function(e,r){return n(x1,e,Km(r))}),I1=n(lf,u(["target","value"]),Ce),vi=function(e){return n(Qu,"input",n(Qe,UL,n(Qe,e,I1)))},F1=function(e){return n(At,"step",e)},oc=At("type"),cc=At("value"),e5=function(e){return n(tc,u([oc("range"),A1(e.jS),B1(e.jO),F1(e.kF),cc(e.k3),vi(e.j6),Wn("ui-slider"),H(u([Le(Xe(100)),ye(T(32)),n(F,"-webkit-appearance","none"),n(F,"appearance","none"),he(li),n(F,"cursor","grab"),Ka(lr),n(F,"touch-action","none"),n(F,"--slider-fill",J(e.jk)+"%")]))]),k)},WL=function(e){var r=K(e.nt,e.ny)>0?100*(e.uv-e.ny)/(e.nt-e.ny):0;return e5({jk:r,jO:J(e.nt),jS:J(e.ny),j6:function(a){return e.hY(n(ne,e.uv,oo(a)))},kF:J(e.tW),k3:J(e.uv)})},V1=pe("space-between"),$a=Hn("span"),r5=l(function(e,r){return n(G,u([H(u([se,Oe(we),Xr(V1),n(F,"gap","12px"),n(Ir,T(10),$e)]))]),u([n($a,u([H(u([be(n(Z,function(a){return a.kV},e)),cr(kn.e$),n(F,"font-family",Xa.ul)]))]),u([ce(r.e$)])),r.ey]))}),GL=function(e){var r=e.nt-e.ny,a=r>0?100*(e.uv-e.ny)/r:0;return e5({jk:a,jO:He(e.nt),jS:He(e.ny),j6:function(t){return e.hY(n(ne,e.uv,Bc(t)))},kF:"1",k3:He(e.uv)})},el=function(e){return n(F,"border-color",e.uv)},qL=(function(){var e="#6D6553",r="#A39980";return"linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 0 0 / 8px 8px,"+(" linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 4px 4px / 8px 8px,"+(" "+r))))))))))})(),a5=pe("display"),rl=k1("focus"),E1=function(e){return cr(u([n(F,"outline","3px solid "+Fe(n(Lr,.25,e))),n(F,"outline-offset","0")]))},OL={qC:0,uv:"inline-block"},H1="ui-color-swatch-popover",si={iU:0,g0:0,uv:"border-box"},di=pe("box-sizing"),NL=290,JL=function(e){var r=oo(e);if(r.$)return 0;var a=r.a;return v(or,0,1,a)},U1=l(function(e,r){var a=(function(){var c=r.iB;if(c.$)return k;var i=c.a;return u([n($a,u([H(u([n(F,"font-family",Xa.sm),Vr(T(13)),Ia(_e(600)),Le(T(40)),Fr(_e(0)),n(F,"text-align","right"),be(n(Z,function(f){return f.kV},e))]))]),u([ce(i)]))])})(),t=n(tc,u([oc("range"),A1("0"),B1("1"),F1("0.01"),cc(J(r.uv)),vi(function(c){return r.hY(JL(c))}),Wn(r.ib),n(nr,"aria-label",r.e$),H(u([ac(_e(1)),ye(T(26)),n(F,"-webkit-appearance","none"),n(F,"appearance","none"),n(F,"--track",r.hv),n(F,"background-color","transparent"),Ka(lr),n(F,"cursor","grab"),n(F,"touch-action","none"),Ba($e)]))]),k),o=n($a,u([H(u([n(F,"font-family",Xa.sm),Vr(T(14)),Ia(_e(700)),Le(T(18)),Fr(_e(0)),be(n(Z,function(c){return c.kV},e))]))]),u([ce(r.e$)]));return n(G,u([H(u([se,Oe(we),n(F,"gap","10px")]))]),Y(u([o,t]),a))}),qr=C7,n5="linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 0 0 / 14px 14px, linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 7px 7px / 14px 14px, #a39980",KL=l(function(e,r){var a=r.uv,t="linear-gradient(to right, transparent, "+(Fe(n(Lr,1,a))+("), "+n5));return n(U1,e,{hv:t,e$:"\u03B1",hY:function(o){return r.hY(z(a,{aV:o}))},ib:"ui-hsla-alpha",iB:M(He(qr(a.aV*100))+"%"),uv:a.aV})}),ZL=l(function(e,r){var a=Me(e-r);return n(qe,a,1-a)}),Va=P(function(e,r,a){return{aV:1,aY:e,F:a,a5:r}}),t5=u([v(Va,6/360,.9,.62),v(Va,33/360,1,.55),v(Va,46/360,1,.55),v(Va,80/360,.7,.52),v(Va,150/360,.65,.46),v(Va,172/360,.75,.45),v(Va,185/360,1,.46),v(Va,217/360,.88,.58),v(Va,239/360,.84,.67),v(Va,270/360,.8,.65),v(Va,330/360,1,.69),v(Va,350/360,.9,.63)]),bi=r7,XL=function(e){return n(ne,0,n(de,tt,pr(n(bi,Y$,n(Oa,l(function(r,a){return h(r,n(ZL,a.aY,e.aY))}),t5)))))},YL=function(e){return e?"0 0 0 3px rgba(0, 0, 0, 0.55), 0 0 0 6px #fff, 0 4px 10px -3px rgba(0, 0, 0, 0.5)":"inset 0 0 0 1px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.5)"},o5=32,QL=P(function(e,r,a){return n(Rt,u([dt(e.hY(n(Lr,e.uv.aV,a))),n(nr,"aria-label","preset colour"),H(u([Le(T(o5)),ye(T(o5)),Fr(_e(0)),dr(Xe(50)),ui($e),Ba($e),Ar(Aa),he(ar(a)),n(F,"box-shadow",YL(r))]))]),k)}),eT=function(e){var r=e.uv.a5<.08?-1:XL(e.uv);return n(G,u([H(u([n(F,"display","grid"),n(F,"grid-template-columns","repeat(6, 1fr)"),n(F,"gap","10px"),n(F,"justify-items","center")]))]),n(Oa,l(function(a,t){return v(QL,e,ee(a,r),t)}),t5))},rT=l(function(e,r){return n(R,function(a){var t=e3(a);if(t.$)return En("invalid hex");var o=t.a;return ae(r(n(Lr,e.aV,o)))},I1)}),aT=Op,W1=aT,G1=P(function(e,r,a){var t=a<0?a+1:a>1?a-1:a;return K(t,1/6)<0?e+(r-e)*6*t:K(t,1/2)<0?r:K(t,2/3)<0?e+(r-e)*(2/3-t)*6:e}),nT=P(function(e,r,a){if(r<1e-10)return{iT:a,jr:a,ko:a};var t=a<.5?a*(1+r):a+r-a*r,o=2*a-t;return{iT:v(G1,o,t,e-1/3),jr:v(G1,o,t,e),ko:v(G1,o,t,e+1/3)}}),c5=function(e){switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";default:return"f"}},q1=function(e){var r=v(or,0,255,e),a=r/16|0,t=n(Kr,16,r);return Y(Wc(c5(a)),Wc(c5(t)))},tT=function(e){var r=v(nT,e.aY,e.a5,e.F);return"#"+(q1(qr(r.ko*255))+(q1(qr(r.jr*255))+q1(qr(r.iT*255))))},oT=l(function(e,r){var a=P3(tT(r.uv));return v(W1,"div",u([H(u([se,Oe(we),n(F,"gap","12px")]))]),u([h(a,n(tc,u([oc("text"),n(nr,"value",a),n(nr,"pattern","#?[0-9A-Fa-f]{6}"),n(nr,"spellcheck","false"),n(nr,"aria-label","Hex colour"),Wn("ui-hex-input"),n(Gr,"change",n(rT,r.uv,r.hY)),H(u([Le(Xe(50)),Fr(_e(0)),di(si),n(F,"font-family",Xa.sm),Vr(T(15)),Ia(_e(600)),nc($i(.06)),z1(D1),be(n(Z,function(t){return t.kU},e)),he(n(Z,function(t){return t.H},e)),v(lt,T(1),vt,n(Z,function(t){return t.iZ},e)),dr(Ja.e6),n(Ir,T(9),T(12)),Ka(lr)]))]),k)),h("warn",n(G,u([Wn("ui-hex-warn")]),u([ce("invalid hex")])))]))}),O1=P(function(e,r,a){return"hsl("+(J(e*360)+(", "+(J(r*100)+("%, "+(J(a*100)+"%)")))))}),cT=l(function(e,r){var a=r.uv,t="linear-gradient(to right, #000, "+(v(O1,a.aY,a.a5,.5)+", #fff)");return n(U1,e,{hv:t,e$:"L",hY:function(o){return r.hY(z(a,{F:o}))},ib:"ui-hsla-rail",iB:L,uv:a.F})}),i5=120,iT=function(e){return n(G,u([H(u([se,Xr(we)]))]),u([n(G,u([H(u([hr(Xo),Le(T(i5)),ye(T(i5)),dr(Xe(50)),It(Bt),n(F,"background",n5),n(F,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 12px 26px -10px rgba(0, 0, 0, 0.6)")]))]),u([n(G,u([H(u([hr(Dt),Na($e),Za($e),vo($e),Qo($e),n(F,"background",Fe(e))]))]),k)]))]))},fT=l(function(e,r){var a=r.uv,t="linear-gradient(to right, "+(v(O1,a.aY,0,a.F)+(", "+(v(O1,a.aY,1,a.F)+")")));return n(U1,e,{hv:t,e$:"S",hY:function(o){return r.hY(z(a,{a5:o}))},ib:"ui-hsla-rail",iB:L,uv:a.a5})}),$T=l(function(e,r){return n(G,u([H(u([se,wr(fa),n(F,"gap","18px"),Le(T(NL)),di(si),Ba(T(18)),he(n(Z,function(a){return a.kJ},e)),v(lt,T(1),vt,n(Z,function(a){return a.iZ},e)),dr(Ja.uK),be(n(Z,function(a){return a.kU},e)),n(F,"font-family",Xa.ul)]))]),u([iT(r.uv),n(oT,e,r),eT(r),n(fT,e,r),n(cT,e,r),n(KL,e,r)]))}),uT=function(e){return z(e,{aV:1})},lT=l(function(e,r){var a=Fe(r.uv),t=Fe(uT(r.uv));return n(G,u([H(u([a5(OL)]))]),u([n(Rt,u([n(nr,"popovertarget",r.bF),n(nr,"aria-label","Pick colour"),n(nr,"aria-haspopup","dialog"),n(Um,"background","linear-gradient(135deg, transparent 50%, "+(t+(" 50%), "+("linear-gradient(135deg, "+(a+(", "+(a+("), "+qL)))))))),H(u([Le(T(32)),ye(T(32)),Ba($e),v(lt,T(1),vt,n(Z,function(o){return o.iZ},e)),dr(Ja.e6),Ar(Aa),It(Bt),n(F,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.4)"),n(F,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Cn(u([el(n(Z,function(o){return o.bw},e))])),rl(u([E1(n(mr,function(o){return o.bw},e))]))]))]),k),n(G,u([rc(r.bF),n(nr,"popover","auto"),n(nr,"data-popover",""),Wn(H1)]),u([n($T,e,{hY:r.hY,uv:r.uv})]))]))}),f5=pe("baseline"),al=l(function(e,r){return n(G,u([H(u([n(Ir,T(10),$e)]))]),u([n(G,u([H(u([se,Oe(f5),Xr(V1),n(F,"gap","12px"),Ym(T(8))]))]),u([n($a,u([H(u([be(n(Z,function(a){return a.kV},e)),cr(kn.e$),n(F,"font-family",Xa.ul)]))]),u([ce(r.e$)])),(function(){var a=r.uv;if(a.$)return ce("");var t=a.a;return n($a,u([H(u([be(n(Z,function(o){return o.bw},e)),cr(kn.e$),Ia(_e(600)),n(F,"font-family",Xa.sm),n(F,"font-feature-settings",'"tnum"')]))]),u([ce(t)]))})()])),r.ey]))}),$5=At("placeholder"),KJ=Q,vT=l(function(e,r){return{$:3,a:e,b:r}}),N1=function(e){return vT(e)},Gn={rX:T(16),e6:T(12),kA:T(8),uK:T(24),uL:T(4),uM:T(32),pj:T(2),uN:T(48)},sT=l(function(e,r){return n(tc,u([oc("text"),cc(r.uv),$5(r.kl),vi(r.hY),H(u([Le(Xe(100)),n(Ir,T(10),Gn.e6),he(n(Z,function(a){return a.kJ},e)),be(n(Z,function(a){return a.kU},e)),v(lt,T(1),vt,n(Z,function(a){return a.iZ},e)),dr(Ja.e6),n(F,"font-family",Xa.sm),cr(kn.g_),Ka(lr),n(F,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),rl(u([el(n(Z,function(a){return a.bw},e)),E1(n(mr,function(a){return a.bw},e))])),n(N1,"placeholder",u([be(n(Z,function(a){return a.kS},e))]))]))]),k)}),Df=Hm("padding"),dT=Hn("option"),J1=l(function(e,r){return n(Am,e,Y3(r))}),bT=J1("selected"),pT=l(function(e,r){return n(dT,u([cc(r),bT(ee(r,e))]),u([ce(r)]))}),mT=Hn("select"),hT=l(function(e,r){return n(mT,u([n(Gr,"change",n(Qe,r.sL,I1)),H(u([Le(Xe(100)),n(F,"appearance","none"),n(F,"-webkit-appearance","none"),he(n(Z,function(a){return a.kJ},e)),be(n(Z,function(a){return a.kU},e)),v(lt,T(1),vt,n(Z,function(a){return a.iZ},e)),dr(Ja.e6),C(Df,T(10),T(34),T(10),Gn.e6),n(F,"font-family",Xa.ul),cr(kn.g_),Ia(_e(500)),Ar(Aa),n(F,"background-image",`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D4A244' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M3 5l3 3 3-3'/></svg>")`),n(F,"background-repeat","no-repeat"),n(F,"background-position","right 12px center"),Ka(lr),n(F,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), background-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Cn(u([el(n(Z,function(a){return a.iI},e)),he(n(Z,function(a){return a.kK},e))])),rl(u([el(n(Z,function(a){return a.bw},e)),n(F,"box-shadow","0 0 0 3px "+Fe(n(Lr,.25,n(mr,function(a){return a.bw},e))))]))]))]),n(N,pT(r.tF),r.sT))}),gT=N1("after"),_T=W(function(e,r,a,t){return{$:7,a:e,b:r,c:a,d:t}}),Rf=W(function(e,r,a,t){return C(_T,e,r,a,t)}),nl={cN:{pH:200,q4:120,tM:320},hl:{qP:C(Rf,.33,1,.68,1),js:C(Rf,.45,.05,.25,1),rF:C(Rf,.65,0,.35,1),tP:C(Rf,.2,.9,.25,1),tR:C(Rf,.34,1.56,.64,1)}},pi=function(e){return Uu(u([e]))},K1=function(e){var r=e.uv;return{kY:0,uv:n(ii,"translateX",u([r]))}},yT=l(function(e,r){var a=r.rP?n(Z,function(i){return i.bw},e):n(Z,function(i){return i.iZ},e),t=r.rP?20:0,o=r.rP?n(F,"box-shadow","0 0 14px "+Fe(n(Lr,.4,n(mr,function(i){return i.bw},e)))):Em(lr),c=r.rP?n(Z,function(i){return i.kU},e):n(Z,function(i){return i.kS},e);return n(Rt,u([H(u([hr(Xo),Le(T(46)),ye(T(26)),he(a),dr(Ja.s1),ui($e),Ar(Aa),Ka(lr),Wu(u([v(S1,220,0,nl.hl.js)])),Fr(_e(0)),gT(u([n(F,"content",'""'),hr(Dt),Na(T(2)),Za(T(2)),Le(T(22)),ye(T(22)),he(c),dr(Xe(50)),pi(K1(T(t))),o,Wu(u([v(Lm,220,0,nl.hl.tR),v(S1,220,0,nl.hl.js),v(wm,220,0,nl.hl.js)]))]))])),dt(r.sN),n(nr,"aria-pressed",r.rP?"true":"false"),n(nr,"aria-label",r.e$)]),k)}),CT=l(function(e,r){var a=r.a,t=r.b;switch(t.$){case 0:var o=t.a,i=o.a,f=o.b,$=t.b;return n(al,e,{ey:WL({nt:f,ny:i,hY:FL(a),tW:.01*(f-i),uv:$}),e$:a,uv:M(n(Jc,2,$))});case 2:var c=t.a,i=c.a,f=c.b,$=t.b;return n(al,e,{ey:GL({nt:f,ny:i,hY:VL(a),uv:$}),e$:a,uv:M(He($))});case 4:var $=t.a;return n(r5,e,{ey:n(yT,e,{rP:$,e$:a,sN:n(AL,a,!$)}),e$:a});case 1:var $=t.a;return n(al,e,{ey:n(sT,e,{hY:HL(a),kl:"",uv:$}),e$:a,uv:L});case 3:var $=t.a;return n(r5,e,{ey:n(lT,e,{bF:"play-config-color-"+a,hY:IL(a),uv:$}),e$:a});default:var s=t.a;return n(al,e,{ey:n(hT,e,{sL:EL(a),sT:wt(s),tF:$t(s)}),e$:a,uv:L})}}),kT=l(function(e,r){return n(G,u([H(u([n(Ir,$e,T(20))]))]),u([n(Qm,e,r.ss),n(G,k,n(N,CT(e),r.be))]))}),ZJ=1,XJ=1,ST=W(function(e,r,a,t){return{bz:r,bH:a,bM:t,bR:e}}),PT=A(Eo,ST,n(x,"top",q),n(x,"bottom",q),n(x,"left",q),n(x,"right",q)),u5=n(lf,u(["currentTarget","boundingClientRect"]),PT),l5=function(e){return n(Gr,"click",n(Qe,e,u5))},xT=l(function(e,r){var a=(function(){return r?h(40,Gn.rX):h(32,Gn.e6)})(),t=a.a,o=a.b;return u([ye(T(t)),n(Ir,$e,o),dr(Ja.s1),ui($e),Ar(Aa),Ka(lr),n(F,"font-family",Xa.ul),cr(kn.e$),se,Oe(we),Xr(we),n(F,"gap","6px"),n(F,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),rl(u([E1(n(mr,function(c){return c.bw},e))]))])}),v5=function(e){return n(Ur,"",e)},tl=function(e){return n(F,"box-shadow",v5(u(["inset ",J(e*1.5),"px ",J(e*1.5),"px ",J(e*3),"px ",Fe(n(Lr,.6,co)),", inset 0 0 0 1px ",Fe(n(Lr,.35,co))])))},Z1=l(function(e,r){return A(jf,$e,$e,$e,T(e),ar(r))}),jT=P(function(e,r,a){var t=l(function(i,f){return a?Y(i,f):i});switch(r){case 0:var o=u([he(n(Z,function(i){return i.bw},e)),be(n(Z,function(i){return v(L1,.6,i.bw,i.kU)},e)),n(Z1,1,n(mr,function(i){return i.iI},e))]),c=u([he(n(Z,function(i){return i.iI},e)),tl(1.5)]);return Y(n(t,o,c),u([Cn(u([he(n(Z,function(i){return i.iJ},e))])),fi(c)]));case 1:var o=u([he(n(Z,function(i){return i.kJ},e)),be(n(Z,function(i){return i.kU},e)),n(Z1,1,n(mr,function(i){return i.iZ},e))]),c=u([he(n(Z,function(i){return i.kM},e)),tl(1.5)]);return Y(n(t,o,c),u([Cn(u([he(n(Z,function(i){return i.kK},e))])),fi(c)]));default:var o=u([he(li),be(n(Z,function(i){return i.kV},e))]),c=u([he(n(Z,function(i){return i.kM},e)),be(n(Z,function(i){return i.kU},e)),tl(1.5)]);return Y(n(t,o,c),u([Cn(u([he(n(Z,function(i){return i.kJ},e)),be(n(Z,function(i){return i.kU},e))])),fi(c)]))}}),s5=P(function(e,r,a){var t=(function(){var o=r.gt;return o?18:16})();return n(Rt,n(D,H(Y(n(xT,e,r.gt),v(jT,e,r.uw,r.rM))),a),(function(){var o=r.f3;if(o.$)return u([ce(r.e$)]);var c=o.a;return u([n($a,u([H(u([se,Oe(we),Xr(we),Le(T(t)),ye(T(t)),Fr(_e(0))]))]),u([c])),ce(r.e$)])})())}),wT=l(function(e,r){return v(s5,e,{f3:L,rM:!1,e$:r.e$,gt:1,uw:1},u([l5(r.bm)]))}),LT=function(e){return n(G,u([H(u([C(Df,T(8),T(20),T(36),T(20)),se,Xr(we)]))]),u([n(wT,e.e,{e$:"Reset Configurations",bm:e.ha.nQ})]))},TT=function(e){var r=er(e.qd.cd)?ce(""):LT(e);return n(G,u([H(u([Le(T(Zm))]))]),u([r,n(No,e.gg,n(G,u([H(u([se,wr(fa),n(F,"gap","18px"),BL(T(16))]))]),n(N,kT(e.e),e.qd.cd)))]))},MT=function(e){return!e.bT.fZ||e.pm?ce(""):v(Ft,e.e,e.qd,{bc:mo(0),g_:TT(e),bF:0,a_:e.h,aG:e.ai.aG,dw:e.ai.dx(0),a9:Fa(0),iA:"Configurations",eb:e.aD})},X1=function(e){return{$:1,a:e}},YJ=0,QJ=0,zT=function(e){return e?Ye.qz:Ye.qA},DT=function(e){return e?"Landscape":"Portrait"},eK=1,rK=3,aK=2,RT={$:2},BT=l(function(e,r){return{$:0,a:e,b:r}}),AT={$:1},IT={$:3},d5=function(e){return n(Gr,"mousedown",ae(e))},FT=function(e){return n(Gr,"mouseleave",ae(e))},Pn=l(function(e,r){return u([n(Gr,"mouseenter",n(Qe,function(a){return e(n(BT,r,a))},u5)),FT(e(AT)),d5(e(RT)),n(Gr,"mousemove",ae(e(IT)))])}),Y1=l(function(e,r){var a=vr(r.rS),t=function(c){return a<=1?0:c?ee(c,a-1)?3:2:1},o=l(function(c,i){var f=r.mV(i);return n(zm,e,{iR:"radio",iS:h("aria-checked",Sm(f)),f3:r.f3(i),rP:f,e$:r.rR(i),bm:r.sL(i),j$:r.tG(i),d2:r.d2,ta:t(c),bs:n(Pn,r.sO,{eB:r.uf,e$:r.rR(i),tK:r.tK(i)})})});return v(xm,r.d2,u([n(nr,"role","radiogroup"),n(nr,"aria-label",r.e$)]),n(Oa,o,r.rS))}),VT=W(function(e,r,a,t){return n(G,u([H(u([se,Xr(we),n(Ir,T(6),T(0))]))]),u([n(Y1,e,{f3:zT,mV:ln(t),rR:DT,rS:u([0,1]),e$:"Orientation",sL:n($r,r.eb,X1),sO:a,d2:0,tG:function(o){return function(c){return c.bw}},tK:function(o){return L},uf:0})]))}),Bf=function(e){return{i_:n(Z,function(r){return r.i_},e),ky:qu.qN,H:n(Z,function(r){return r.H},e),kN:n(Z,function(r){return r.kM},e),kS:n(Z,function(r){return r.kS},e),kU:n(Z,function(r){return r.kU},e),kV:n(Z,function(r){return r.kV},e),gR:Ko.sY}},ET=function(e){return{$:0,a:e}},b5=function(e){return{$:3,a:e}},mi=l(function(e,r){return n(x1,e,b5(r))}),HT={$:2},UT={$:1},WT={$:3},GT={$:4},ol=mh,qT=_r(ol,je(function(e,r,a,t,o){return{iL:t,i8:r,jz:e,jQ:o,kz:a}}),n(x,"key",Ce),n(x,"ctrlKey",te),n(x,"shiftKey",te),n(x,"altKey",te),n(x,"metaKey",te)),OT=l(function(e,r){return n(Qe,function(a){var t=a.jz,o=a.i8,c=a.kz,i=a.iL,f=a.jQ,$=o||i||f;if($)return{Y:e.eb(Da),aa:!1,ac:!1};if(t==="Tab")return{Y:e.eb(Da),aa:!0,ac:!0};if(t==="ArrowUp")return{Y:e.eb(UT),aa:!0,ac:!0};if(t==="ArrowDown")return{Y:e.eb(HT),aa:!0,ac:!0};if(t==="Enter")return{Y:e.eb(WT),aa:!0,ac:!0};if(t==="Escape")return{Y:e.eb(GT),aa:!0,ac:!0};if(t==="ArrowLeft"||t==="ArrowRight"){if(r.$)return{Y:e.eb(Da),aa:!1,ac:!1};var s=r.a;return{Y:t==="ArrowLeft"?s.sI:s.sK,aa:!0,ac:!0}}else return{Y:e.eb(Da),aa:!1,ac:!1}},qT)}),p5=5,NT=function(e){return v(zt,e,!1,"")},m5=NT,JT={aa:!0,ac:!1},KT=l(function(e,r){return n(Lu,e,b5(r))}),ZT=je(function(e,r,a,t,o){return{qi:o,rQ:t,s6:r,s8:a,s9:e}}),XT=je(function(e,r,a,t,o){return{ju:r,td:a,ua:t,ub:o,k6:e}}),YT=_r(ol,XT,n(x,"width",q),n(x,"height",q),n(x,"pressure",q),n(x,"tiltX",q),n(x,"tiltY",q)),QT=Rr(function(e,r,a,t,o,c){return{pZ:r,p9:a,bh:e,sG:t,sV:o,tz:c}}),nK=4,tK=0,oK=5,cK=1,iK=2,fK=3,eM=function(e){switch(e){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;default:return 0}},rM=n(Qe,eM,n(x,"button",Hr)),aM=v(La,l(function(e,r){return h(e,r)}),n(x,"clientX",q),n(x,"clientY",q)),nM=W(function(e,r,a,t){return{iL:e,i8:r,jQ:a,kz:t}}),tM=A(Eo,nM,n(x,"altKey",te),n(x,"ctrlKey",te),n(x,"metaKey",te),n(x,"shiftKey",te)),oM=v(La,l(function(e,r){return h(e,r)}),n(x,"offsetX",q),n(x,"offsetY",q)),cM=v(La,l(function(e,r){return h(e,r)}),n(x,"pageX",q),n(x,"pageY",q)),iM=v(La,l(function(e,r){return h(e,r)}),n(x,"screenX",q),n(x,"screenY",q)),fM=aa(h3,QT,tM,rM,aM,oM,cM,iM),$K=0,uK=2,lK=1,$M=function(e){switch(e){case"pen":return 2;case"touch":return 1;default:return 0}},uM=n(Qe,$M,Ce),lM=_r(ol,ZT,n(x,"pointerType",uM),fM,n(x,"pointerId",Hr),n(x,"isPrimary",te),YT),vM=P(function(e,r,a){return n(KT,e,n(Qe,function(t){return{Y:a(t),aa:r.aa,ac:r.ac}},lM))}),h5=n(vM,"pointerdown",JT),sM=function(e){return{$:5,a:e}},dM=function(e){return{$:6,a:e}},bM=W(function(e,r,a,t){return n(G,u([m5(h5(function(o){return e.eb(dM(t))})),dt(e.eb(sM(t)))]),u([n(r,a,t)]))}),pM=W(function(e,r,a,t){return er(t.bg)?n(G,u([H(u([ye(T(e.e4)),se,Oe(we),Xr(we),be(r.kS),Fr(_e(0))]))]),u([ce("No matching items")])):v(W1,"div",u([rc(qo(e)),H(u([ye(T(e.e4)),C(Df,T(0),T(4),T(0),T(4)),It(Lf),n(F,"overscroll-behavior","contain"),Fr(_e(0)),se,wr(fa)])),m5(h5(function(o){return e.eb(Da)})),n(Gr,"scroll",n(Qe,n(ke,f1,e.eb),n(lf,u(["currentTarget","scrollTop"]),q))),n(mi,"wheel",ae({Y:e.eb(Da),aa:!1,ac:!0}))]),(function(){var o=vr(t.bg),c=n(qe,o-1,Y0((t.b1+e.e4)/uo)+p5),i=n(ge,0,pa(t.b1/uo)-p5),f=i*uo,$=n(Oa,l(function(d,b){var m=i+d;return h(He(m),C(bM,e,a,ee(m,t.a7),b))}),n(it,c-i+1,n(Vn,i,t.bg))),s=n(ge,0,o-1-c)*uo;return n(D,h("top-spacer",n(G,u([H(u([ye(T(f)),Fr(_e(0))]))]),k)),Y($,u([h("bottom-spacer",n(G,u([H(u([ye(T(s)),Fr(_e(0))]))]),k))])))})())}),mM=function(e){return{$:9,a:e}},hM=function(e){return n(Qe,function(r){return{Y:e.eb(mM(r)),aa:!0,ac:!0}},n(x,"deltaY",q))},cl=Jt(function(e,r,a,t,o,c,i){var f=i;return n(G,u([H(u([be(r.kV),se,wr(fa),n(F,"gap","8px"),Le(Xe(100))])),n(mi,"keydown",n(OT,e,t)),n(mi,"mousedown",ae({Y:e.eb(Da),aa:!1,ac:!0})),n(mi,"pointerdown",ae({Y:e.eb(Da),aa:!1,ac:!0})),n(mi,"pointerup",ae({Y:e.eb(Da),aa:!1,ac:!0})),n(mi,"wheel",hM(e))]),Y(a,Y(u([n(tc,u([oc("text"),rc(zp(e)),$5(e.kl),H(u([Le(Xe(100)),Fr(_e(0)),n(Ir,T(8),T(8)),dr(T(4)),Ka(lr),he(r.kN),be(r.kU),n(N1,"placeholder",u([be(r.kS)]))])),vi(n(ke,ET,e.eb)),cc(f.im)]),k),C(pM,e,r,o,f)]),c)))}),Af=function(e){return e.F>.55?{aV:1,aY:0,F:.1,a5:0}:{aV:1,aY:0,F:.98,a5:0}},gM=function(e){return J(e.gt.k6)+(" \xD7 "+J(e.gt.ju))},g5=P(function(e,r,a){var t=r?cr(u([he(n(Z,function(c){return c.bw},e)),be(n(Z,n(ke,function(c){return c.bw},Af),e))])):be(n(Z,function(c){return c.kU},e)),o=r?n(Z,n(ke,function(c){return c.bw},Af),e):n(Z,function(c){return c.kV},e);return n(G,u([H(u([n(Ir,T(0),T(12)),ye(T(32)),se,Oe(we),di(si),n(F,"gap","10px"),t]))]),u([n($a,u([H(u([Yu(_e(1)),Vr(T(13))]))]),u([ce(a.ss)])),n($a,u([H(u([Vr(T(12)),be(o)]))]),u([ce(gM(a))]))]))}),_M=W(function(e,r,a,t){var o=t;return aa(cl,sf(r),Bf(e),u([C(VT,e,r,a,o.d2)]),M({sI:r.eb(X1(0)),sK:r.eb(X1(1))}),g5(e),k,o.b_)}),Q1=W(function(e,r,a,t){return n(G,u([H(u([hr(ec),Na($e),Za($e),Sn(Er(.001)),bt(lr)])),n(nr,"inert","")]),u([aa(cl,z(e,{fG:e.fG+"-warmup"}),r,k,L,a,k,t)]))}),yM=P(function(e,r,a){var t=a;return C(Q1,sf(r),Bf(e),g5(e),t.b_)}),CM=function(e){if(!e.bT.dP||e.pm)return ce("");var r={fG:D3,eb:e.j2};return n(G,k,u([v(Ft,e.e,e.qd,{bc:mo(7),g_:C(_M,e.e,r,e.sO,e.al),bF:7,a_:e.h,aG:e.ai.aG,dw:e.ai.dx(7),a9:Fa(7),iA:"Device",eb:e.aD}),v(yM,e.e,r,e.al)]))},kM=P(function(e,r,a){return(function(t){return v(sn,e,t,a.bL)})(v(ve,e,r,a.bE))}),SM=l(function(e,r){return n($r,n(kM,e,r),Cu)}),PM=function(e){var r=e,a=v(SM,l(function(c,i){var f=i.a,$=i.b;return h(f+1,$+c.hh)}),h(0,0),r.gq),t=a.a,o=a.b;return t>1&&o>0?M(t/o):L},xM=pe("flex-end"),_5=function(e){return e*1e3},es=function(e){var r=e.uv;return{kY:0,uv:n(ii,"translateY",u([r]))}},jM=function(e){return n(G,u([H(u([hr(Dt),Le(Xe(100)),ye(T(1)),Uu(u([es(Xe(-50))])),he(ar(e.ka.rn)),Qo(T(_5(1/60)))]))]),k)},wM=function(e){return Y(e.bE,Ae(e.bL))},LM=n($r,wM,Cu),TM=l(function(e,r){var a=r*1e3;return a<=18?e.ka.rn:a<=33?e.ka.uS:e.ka.ti}),MM=l(function(e,r){return n(G,u([H(u([ac(lr),Le(T(4)),ye(T(_5(r))),Qo($e),he(ar(n(TM,e,r)))]))]),k)}),zM=l(function(e,r){return n(G,u([H(u([hr(Xo),ye(T(50)),Le(T(np*4)),It(Bt),he(ar(e.kO))]))]),u([jM(e),n(G,u([H(u([hr(Dt),vo($e),Qo($e),ye(Xe(100)),se,wr(oi),Oe(xM)]))]),n(N,n(ke,function(a){return a.hh},MM(e)),LM(r)))]))}),y5=l(function(e,r){if(e<0)return r;var a=n(ia,10,e),t=py(a),o=function(c){return c/a};return o(qr(t(r)))}),DM=l(function(e,r){return e<0?r:n(y5,e,r)}),RM=function(e){return e>=0?"":"-"},If=l(function(e,r){var a=function(t){var o=n(Tn,".",t);e:for(;;)if(o.b)if(o.b.b){if(o.b.b.b)break e;var c=o.a,i=o.b,f=i.a;return c+("."+v(iu,e,"0",f))}else{var c=o.a;return c+("."+n(Ao,e,"0"))}else break e;return t};return xv(r)?"NaN":Nc(r)?RM(r)+"Infinity":e<=0?J(n(DM,e,r)):a(J(n(y5,e,r)))}),BM=l(function(e,r){return n(G,u([H(u([be(ar(e.ka.rn))]))]),u([ce("Frame Rate: "),ce(n(ne,"-",n(de,If(0),r)))]))}),AM=l(function(e,r){var a=r;return n(G,u([H(u([se,wr(fa),n(F,"gap","8px")]))]),u([n(zM,e,a.gq),n(BM,e,PM(r))]))}),C5=function(e){return n(pe,"animation-duration",e)},IM=function(e){return{$:5,a:e}},k5=function(e){return e.uv==="none"||e.uv==="inherit"||e.uv==="unset"||e.uv==="initial"?n(pe,"animation-name",e):IM(e.uv)},vK=Q,ic=l(function(e,r){return e+(":"+r)}),S5=l(function(e,r){return v(s5,e,{f3:r.f3,rM:r.rM,e$:r.e$,gt:r.gt,uw:r.uw},u([dt(r.bm)]))}),FM=function(e){return ee(e,Su)},VM=function(e){var r=e.a,a=e.b,t=v(_a,function(c){var i=c;return i+";"},"",a),o=He(r)+"%";return o+("{"+(t+"}"))},EM=function(e){return v(_a,VM,"",e)},P5=function(e){return er(e)?{jA:0,jY:0,uv:"none"}:{jA:0,jY:0,uv:EM(e)}},x5=function(e){return{cN:0,uv:J(e)+"s"}},HM={$:2},UM={$:3},WM=function(e){return ee(e,Su)?UM:HM},GM=function(e){return{$:3,a:e}},qM=l(function(e,r){return{$:4,a:e,b:r}}),OM=function(e){return qM(n(N,GM,e))},NM=P(function(e,r,a){var t=FM(a),o=t?"Stop profiling":"Start profiling",c=t?n(G,u([H(u([Le(Xe(100)),ye(Xe(100)),se,Oe(we),Xr(we),be(n(Z,n(ke,function(i){return i.ka},function(i){return i.ti}),e)),k5(P5(u([h(0,u([n(ic,"opacity","1")])),h(50,u([n(ic,"opacity","0.35")])),h(100,u([n(ic,"opacity","1")]))]))),C5(x5(1.2)),n(F,"animation-iteration-count","infinite"),n(F,"animation-timing-function","ease-in-out"),n(OM,u(["(prefers-reduced-motion: reduce)"]),u([n(F,"animation","none")]))]))]),u([Ye.th])):Ye.th;return n(G,u([H(u([se,Xr(we),Le(Xe(100))]))]),u([n(G,u([H(u([Le(T(160))]))]),u([n(S5,e,{f3:M(c),rM:t,e$:o,bm:r(WM(a)),gt:1,uw:1})]))]))}),JM=function(e){var r=e.bT.eP?u([v(NM,e.e,e.gh,e.aQ)]):k;return n(G,u([H(u([se,wr(fa),n(F,"gap","8px")]))]),n(D,n(AM,mn(e.e),e.dg),r))},KM=function(e){return!e.bT.f_||e.pm?ce(""):v(Ft,e.e,e.qd,{bc:mo(2),g_:JM(e),bF:2,a_:e.h,aG:e.ai.aG,dw:e.ai.dx(2),a9:Fa(2),iA:"Performance",eb:e.aD})},Ff=function(e){return e?"true":"false"},rs=function(e){var r=e.b;return _p(r)},Ya=P(function(e,r,a){return n(G,u([H(u([se,n(F,"gap","16px"),n(Ir,T(3),$e),Oe(f5),n(F,"font-family",Xa.sm),Vr(T(12)),n(F,"font-feature-settings",'"tnum"')]))]),u([n(G,u([H(u([be(n(Z,function(t){return t.kS},e)),Le(T(120)),Fr(_e(0))]))]),u([ce(r)])),n(G,u([H(u([be(n(Z,function(t){return t.kU},e))]))]),u([ce(a)]))]))}),il=P(function(e,r,a){return n(G,u([H(u([n(Ir,$e,T(20))]))]),n(D,n(Qm,e,r),a))}),ZM=function(e){var r=e.e,a=e.qd;return n(G,u([H(u([se,wr(fa),n(F,"gap","18px"),n(Ir,T(14),$e),Le(T(Zm))]))]),u([v(il,r,"Tape",u([v(Ya,r,"frame",He(rs(e.t7))),v(Ya,r,"dt",n(Jc,4,a.hh)),v(Ya,r,"clock",n(Jc,4,a.g3))])),v(il,r,"Pointer",u([v(Ya,r,"x",n(Jc,2,a.s6.pi)),v(Ya,r,"y",n(Jc,2,a.s6.pk)),v(Ya,r,"isDown",Ff(a.s6.rO))])),v(il,r,"Keyboard",u([v(Ya,r,"pressed",n(Ur," ",a.hD.tc)),v(Ya,r,"shift",Ff(a.hD.kz)),v(Ya,r,"ctrl",Ff(a.hD.i8)),v(Ya,r,"meta",Ff(a.hD.jQ)),v(Ya,r,"alt",Ff(a.hD.iL))])),v(il,r,"Wheel",u([v(Ya,r,"deltaX",J(a.fs.lW)),v(Ya,r,"deltaY",J(a.fs.lX))]))]))},XM=function(e){return!e.bT.f$||e.pm?ce(""):v(Ft,e.e,e.qd,{bc:mo(1),g_:ZM(e),bF:1,a_:e.h,aG:e.ai.aG,dw:e.ai.dx(1),a9:Fa(1),iA:"Inputs",eb:e.aD})},sK=1,dK=1,bK=1,j5={$:1},YM={$:3},QM={$:2},ez=function(e){return{$:0,a:e}},rz=l(function(e,r){return u([he(li),be(n(Z,function(a){return a.kV},e)),n(F,"transition","background-color 120ms cubic-bezier(0.33, 1, 0.68, 1), color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Cn(u([he(n(Z,r,e)),be(n(Z,n(ke,function(a){return a.ka},function(a){return a.pX}),e))]))])}),az=l(function(e,r){var a=function(t){return n(F,"background-color",Fe(n(Lr,.7,n(mr,t,e))))};return u([a(function(t){return t.kJ}),Rm(16),be(n(Z,function(t){return t.kV},e)),n(Z1,1,n(mr,function(t){return t.iZ},e)),n(F,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Cn(u([a(function(t){return t.kK}),be(n(Z,r,e))])),fi(u([a(function(t){return t.kM}),tl(1.5)]))])}),w5=W(function(e,r,a,t){var o=(function(){return r?h(36,6):h(24,4)})(),c=o.a,i=o.b,f=u([Le(T(c)),ye(T(c)),Ba(T(i)),dr(Xe(50)),Ar(Aa),se,Oe(we),Xr(we),Ka(lr)]);return Y(f,(function(){return n(a?az:rz,e,t)})())}),fl=l(function(e,r){return n(Rt,Y(u([H(Y(C(w5,e,r.gt,r.fE,r.f2),u([ui($e)]))),dt(r.bm),n(nr,"aria-label",r.e$)]),r.bs),u([r.f3]))}),nz=J1("disabled"),tz=function(e){var r=e.b;return yp(r)},L5=function(e){var r=e.a;return ee(r,ou)},oz=function(e){var r=tz(e.t7)-1,a=e.e,t=cp(e.t7),o=t?"Pause playback":"Play recording",c=!L5(e.t7),i=c?"Resume recording":"Pause recording";return n(G,u([H(u([se,wr(oi),Oe(we),n(F,"gap","12px")]))]),u([n(Gu,a,{iK:function(f){return f.bw},f3:Ye.th,jy:!c,e$:i,bm:e.d1(c?QM:j5),bs:n(Pn,e.sO,{eB:1,e$:i,tK:L})}),c?n(fl,a,{fE:1,f2:function(f){return f.kU},f3:t?Ye.sZ:Ye.s4,e$:o,bm:e.d1(t?j5:YM),gt:1,bs:n(Pn,e.sO,{eB:1,e$:o,tK:L})}):ce(""),n(tc,u([oc("range"),A1("0"),B1(He(r)),F1("1"),cc(He(rs(e.t7))),nz(!c),vi(function(f){return e.d1(ez(n(ne,0,Bc(f))))}),Wn("ui-slider"),H(u([ac(_e(1)),ye(T(24)),n(F,"-webkit-appearance","none"),n(F,"appearance","none"),he(li),Ar(Aa),Ka(lr),Sn(Er(c?1:.4)),n(F,"--slider-fill",J(r>0?100*rs(e.t7)/r:0)+"%")]))]),k)]))},cz=function(e){return!e.bT.f0||e.pm?ce(""):v(Ft,e.e,e.qd,{bc:mo(4),g_:oz(e),bF:4,a_:e.h,aG:e.ai.aG,dw:e.ai.dx(4),a9:Fa(4),iA:"Tape",eb:e.aD})},T5=function(e){return{iL:!1,qc:e,i8:!1,jQ:!1,kz:!1}},iz=function(e){return z(e,{jQ:!0})},as=function(e){return iz(T5(e))},fz=function(e){return z(e,{i8:!0})},ns=function(e){return fz(T5(e))},$z=function(e){return e===1?"\u2325":"Alt"},uz=function(e){return e===1?"\u2303":"Ctrl"},lz=l(function(e,r){if(n(Rn,"Key",r))return n(Ma,3,r);if(n(Rn,"Digit",r))return n(Ma,5,r);switch(r){case"BracketLeft":return"[";case"BracketRight":return"]";case"Slash":return"/";case"Backslash":return"\\";case"Period":return".";case"Comma":return",";case"Semicolon":return";";case"Quote":return"'";case"Backquote":return"`";case"Minus":return"-";case"Equal":return"=";case"Space":return"Space";case"ArrowLeft":return"\u2190";case"ArrowRight":return"\u2192";case"ArrowUp":return"\u2191";case"ArrowDown":return"\u2193";case"Enter":return e===1?"\u21A9":"Enter";case"Escape":return e===1?"\u238B":"Esc";case"Tab":return e===1?"\u21E5":"Tab";case"Backspace":return e===1?"\u232B":"Backspace";case"Delete":return e===1?"\u2326":"Del";default:return r}}),vz=function(e){return e===1?"\u2318":"Win"},sz=function(e){return e===1?"\u21E7":"Shift"},$l=l(function(e,r){var a=e===1?"":"+",t=n(xr,Q,u([r.i8?M(uz(e)):L,r.iL?M($z(e)):L,r.kz?M(sz(e)):L,r.jQ?M(vz(e)):L,M(n(lz,e,r.qc))]));return n(Ur,a,t)}),dz=function(e){var r=(function(){var t=e.qd.j8===1?as("KeyI"):ns("KeyI");return n($l,e.qd.j8,t)})(),a=of(e.e);return n(Y1,e.e,{f3:function(t){return t?Ye.t0:Ye.sn},mV:ln(a),rR:function(t){return t?"Lights on":"Lights off"},rS:u([!1,!0]),e$:"Lights",sL:function(t){return ee(t,a)?e.hU:e.j3(Mv(e.e))},sO:e.sO,d2:0,tG:function(t){return function(o){return wf}},tK:function(t){return M(r)},uf:1})},bz={$:2},pz={$:3},mz=(function(){var e=K2,r=e.a,a=e.b;return n(D,r,a)})(),hz=function(e){return{$:1,a:e}},M5=At("title"),gz=W(function(e,r,a,t){var o=mn(e).ka,c=ee(t,a),i=n(v3,t,o),f=n(mr,function(s){return s.i_},e),$=c?u([n(F,"outline","3px solid "+Fe(f)),n(F,"outline-offset","2px")]):k;return n(Rt,u([n(nr,"aria-pressed",c?"true":"false"),n(nr,"type","button"),M5(w2(t)),dt(r(hz(t))),H(Y(u([Le(T(28)),ye(T(28)),dr(Xe(50)),he(ar(i)),v(lt,T(1),vt,ar(f)),Ar(Aa),Ba(T(0))]),$))]),k)}),_z=P(function(e,r,a){var t=$t(a);return n(G,u([n(nr,"role","group"),n(nr,"aria-label","Accent colour"),H(u([se,Oe(we),n(F,"gap","12px"),Fr(_e(0))]))]),n(N,v(gz,e,r,t),mz))}),yz=W(function(e,r,a,t){return n(G,u([H(u([se,Oe(we),Xr(we),n(F,"gap","14px"),n(Ir,T(6),T(0)),Fr(_e(0))]))]),Y(a,u([v(_z,e,r,t)])))}),Cz=function(e){return n(G,u([H(u([Le(T(12)),ye(T(12)),dr(T(2)),he(ar(e))]))]),k)},kz=function(e){return n(G,u([H(u([se,n(F,"gap","3px"),Fr(_e(0))]))]),n(N,Cz,u([e.pE,e.ra,e.pL,e.rn,e.ti,e.uS])))},z5=P(function(e,r,a){var t=r?cr(u([he(n(Z,function(o){return o.bw},e)),be(n(Z,n(ke,function(o){return o.bw},Af),e))])):be(n(Z,function(o){return o.kU},e));return n(G,u([H(u([n(Ir,T(0),T(12)),ye(T(32)),se,Oe(we),di(si),n(F,"gap","10px"),t]))]),u([kz(a),n($a,u([H(u([Yu(_e(1)),Vr(T(13))]))]),u([ce(a.ss)]))]))}),Sz=W(function(e,r,a,t){var o=t;return aa(cl,ei(r),Bf(e),u([C(yz,e,r.eb,a,o.c1)]),M({sI:r.eb(bz),sK:r.eb(pz)}),z5(e),k,o.b_)}),Pz=P(function(e,r,a){var t=a;return C(Q1,ei(r),Bf(e),z5(e),t.b_)}),xz=function(e){if(!e.bT.ck||e.pm)return ce("");var r={fG:H3,eb:e.j7};return n(G,k,u([v(Ft,e.e,e.qd,{bc:mo(5),g_:C(Sz,e.e,r,u([dz(e)]),e.ak),bF:5,a_:e.h,aG:e.ai.aG,dw:e.ai.dx(5),a9:Fa(5),iA:"Theme",eb:e.aD}),v(Pz,e.e,r,e.ak)]))},jz=function(e){return v(Hn,"style",k,u([ce(`
.`+(H1+(` {
  position: fixed;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
}
.`+(H1+`::backdrop {
  background: transparent;
}
`))))]))},wz=l(function(e,r){return`
.ui-hsla-rail:focus-visible::-webkit-slider-thumb, .ui-hsla-alpha:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.22), 0 3px 7px rgba(0, 0, 0, 0.5), 0 0 0 4px `+(r+(`;
}
.ui-hex-input:focus {
  border-color: `+(e+(`;
  box-shadow: 0 0 0 3px `+(r+`;
}
.ui-hex-input:invalid {
  border-color: #ff6b6b;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.22);
}
.ui-hex-warn {
  display: none; align-items: center;
  font-size: 13.5px; font-weight: 600; color: #ff6b6b; white-space: nowrap;
}
.ui-hex-input:invalid ~ .ui-hex-warn { display: flex; }
`)))))}),Lz=`
.ui-hsla-rail::-webkit-slider-runnable-track {
  height: 14px; border-radius: 999px; background: var(--track, #888);
}
.ui-hsla-alpha::-webkit-slider-runnable-track {
  height: 18px; border-radius: 999px; background: var(--track, #888);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);
}
.ui-hsla-rail::-moz-range-track {
  height: 14px; border-radius: 999px; background: var(--track, #888);
}
.ui-hsla-alpha::-moz-range-track {
  height: 18px; border-radius: 999px; background: var(--track, #888);
}
.ui-hsla-rail::-webkit-slider-thumb, .ui-hsla-alpha::-webkit-slider-thumb {
  -webkit-appearance: none; width: 24px; height: 24px; border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.22), 0 3px 7px rgba(0, 0, 0, 0.5);
}
.ui-hsla-rail::-webkit-slider-thumb { margin-top: -5px; }
.ui-hsla-alpha::-webkit-slider-thumb { margin-top: -3px; }
.ui-hsla-rail::-moz-range-thumb, .ui-hsla-alpha::-moz-range-thumb {
  width: 22px; height: 22px; border: 0; border-radius: 50%; background: #fff;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.22), 0 3px 7px rgba(0, 0, 0, 0.5);
}
.ui-hsla-rail:active, .ui-hsla-alpha:active { cursor: grabbing; }
.ui-hsla-rail:focus, .ui-hsla-alpha:focus { outline: none; }
`,Tz=function(e){var r=Fe(n(Lr,.25,n(mr,function(t){return t.bw},e))),a=Fe(n(mr,function(t){return t.bw},e));return v(Hn,"style",k,u([ce(Y(Lz,n(wz,a,r)))]))},Mz=function(e){var r=Fe(wf),a=Fe(n(Lr,.25,n(mr,function(i){return i.bw},e))),t=Fe(n(mr,function(i){return i.iZ},e)),o=Fe(n(mr,function(i){return i.iJ},e)),c=Fe(n(mr,function(i){return i.bw},e));return v(Hn,"style",k,u([ce(`
.ui-slider::-webkit-slider-runnable-track {
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(
    to right,
    `+(c+(` 0%,
    `+(c+(` var(--slider-fill, 0%),
    `+(t+(` var(--slider-fill, 0%),
    `+(t+(` 100%
  );
}
.ui-slider::-moz-range-track {
  height: 12px;
  border-radius: 999px;
  background: `+(t+(`;
}
.ui-slider::-moz-range-progress {
  height: 12px;
  border-radius: 999px;
  background: `+(c+(`;
}
/* Playful round handle: a solid accent ball with a white ring that
   lifts it off the filled rail, plus a soft drop shadow. 24px sits
   centered on the 12px rail (margin-top -6). Springs to 1.08\xD7 on
   hover/press for a tactile feel. */
.ui-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  margin-top: -6px;
  border-radius: 50%;
  background: `+(c+(`;
  box-shadow:
    0 0 0 2px `+(r+(`,
    0 3px 6px rgba(0, 0, 0, 0.4);
  transition:
    transform 170ms cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 170ms ease,
    background-color 170ms ease;
}
.ui-slider::-webkit-slider-thumb:hover {
  background: `+(o+(`;
  box-shadow:
    0 0 0 2px `+(r+(`,
    0 4px 10px rgba(0, 0, 0, 0.45);
}
.ui-slider:active::-webkit-slider-thumb {
  transform: scale(1.08);
}
.ui-slider::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border: 2px solid `+(r+(`;
  border-radius: 50%;
  background: `+(c+(`;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
}
.ui-slider:active {
  cursor: grabbing;
}
.ui-slider:focus {
  outline: none;
}
.ui-slider:focus-visible::-webkit-slider-thumb {
  box-shadow:
    0 0 0 2px `+(r+(`,
    0 3px 6px rgba(0, 0, 0, 0.4),
    0 0 0 4px `+(a+`;
}
`))))))))))))))))))))))))))))]))},zz=l(function(e,r){return n(Hp,e+" ",r)}),Dz=function(e){return{pE:n(Z,function(r){return r.bw},e),ra:ar(Af(n(mr,function(r){return r.bw},e))),gR:Ko.c_}},Rz=function(e){return Dz(e)},Bz=function(e){return{$:5,a:e}},Az=function(e){return{$:9,a:e}},Iz={$:13},Fz=function(e){return{$:8,a:e}},Vz={$:7},Ez=function(e){var r=e,a=n(Oa,l(function(t,o){return h(o,t)}),r.aP);return{aG:vr(r.aP),dx:function(t){return n(ne,0,n(de,Y$,pr(n(Pr,function(o){var c=o.a;return ee(c,t)},a))))}}},Hz=l(function(e,r){return{U:r.la.U,qd:e.qd,ha:{nQ:n($r,e.eb,Fz),oX:n(de,function(a){return{bc:a.bc,hV:a.hV}},r.es)},al:r.al,h:r.h,fR:e.fR,dg:r.dg,nD:r.nD,hU:e.eb(Iz),j0:n($r,e.eb,wp),j1:e.eb(M3),gg:e.gg,j2:n($r,e.eb,z3),aD:n($r,e.eb,w3),j3:function(a){return e.eb(Bz(a))},j4:n($r,e.eb,Az),j5:e.eb(Vz),gh:n($r,e.eb,L3),d1:e.d1,j7:n($r,e.eb,E3),sO:n($r,e.eb,T3),aQ:r.aQ,ai:Ez(r.h),t7:e.t7,ak:r.ak,e:r.e,c_:r.c_,bT:e.gs,pm:r.pm}}),Uz=l(function(e,r){switch(e){case 3:return{pi:r.bM,pk:.5*(r.bR+r.bz)};case 2:return{pi:r.bH,pk:.5*(r.bR+r.bz)};case 0:return{pi:.5*(r.bH+r.bM),pk:r.bR};default:return{pi:.5*(r.bH+r.bM),pk:r.bz}}}),pK=1,Wz=pe("max-width"),Gz={mc:0,fW:0,dN:0,e3:0,nV:0,uv:"normal",ei:0},ul=P(function(e,r,a){switch(e){case 0:return r;case 1:return .5*(r+a);default:return a}}),qz=W(function(e,r,a,t){switch(r){case 0:return h(v(ul,a,e.bH,e.bM),e.bR-t);case 1:return h(v(ul,a,e.bH,e.bM),e.bz+t);case 2:return h(e.bH-t,v(ul,a,e.bR,e.bz));default:return h(e.bM+t,v(ul,a,e.bR,e.bz))}}),ll=function(e){switch(e){case 0:return"0";case 1:return"-50%";default:return"-100%"}},D5=function(e){var r=e.bc,a=e.eB,t=e.pr,o=e.rj,c=(function(){switch(a){case 0:return"-100%";case 1:return"0";case 2:return ll(t);default:return ll(t)}})(),i=(function(){switch(a){case 0:return ll(t);case 1:return ll(t);case 2:return"-100%";default:return"0"}})(),f="translate("+(i+(", "+(c+")"))),$=C(qz,r,a,t,o),s=$.a,d=$.b;return u([hr(ec),Za(T(s)),Na(T(d)),n(F,"transform",f)])},Oz=l(function(e,r){return n(G,u([H(Y(D5({pr:1,bc:r.bc,eB:r.eB,rj:6}),u([n(Ir,T(7),T(14)),he(e.pE),be(e.ra),dr(Ja.e6),so(_e(e.gR)),se,wr(oi),n(F,"gap","12px"),n(F,"width","max-content"),Ku(Gz),Wz(T(360)),pt(Er(1.45))])))]),u([n($a,k,u([ce(r.e$)])),(function(){var a=r.tK;if(a.$===1)return ce("");var t=a.a;return n($a,u([H(u([be(e.ra)]))]),u([ce(t)]))})()]))}),Nz=l(function(e,r){return{gX:0,cI:0,uv:Y(J(r),e)}}),Jz=Nz("deg"),Kz=function(e){var r=e.uv;return{kY:0,uv:n(ii,"rotate",u([r]))}},Zz=P(function(e,r,a){return n(G,u([H(u([hr(ec),Za(T(a.pi)),Na(T(a.pk)),he(e.pE),Le(T(10)),ye(T(10)),so(_e(e.gR)),n(F,"transform-origin","top left"),pi(Kz(Jz((function(){switch(r){case 3:return-45;case 2:return 135;case 1:return 45;default:return-135}})())))]))]),k)}),R5=l(function(e,r){return n(G,k,u([v(Zz,e,r.eB,n(Uz,r.eB,r.bc)),n(Oz,e,r)]))}),Xz=l(function(e,r){var a=r;if(a.$){var t=a.a,o=t._;switch(o.$){case 1:return n(R5,e,t);case 2:return n(R5,e,t);case 0:return ce("");default:return ce("")}}else return ce("")}),Yz=480,Qz=l(function(e,r){return e.lT}),B5=pe("min-width"),eD=function(e){return v(Ru,"textAlign","text-align",e(Bu))},rD=W(function(e,r,a,t){var o=a?cr(u([he(n(Z,function(c){return c.bw},e)),be(n(Z,n(ke,function(c){return c.bw},Af),e))])):be(n(Z,function(c){return c.kU},e));return n(G,u([H(u([se,Xr(V1),Oe(we),n(Ir,T(0),T(12)),ye(T(32)),di(si),o]))]),u([n($a,u([H(u([Vr(T(13)),Yu(_e(1))]))]),u([ce(t.ip+(": "+t.e$))])),n($a,u([H(u([Vr(T(13)),B5(T(70)),Fr(_e(0)),eD(vo)]))]),u([ce(n($l,r.j8,n(Qz,t,r)))]))]))}),aD=function(e){return{fG:Lp,e4:320,kl:"Type a command\u2026",eb:e,k6:{sg:400,uz:50}}},nD=function(e){if(n(vf,e.bT,e.U)){var r=n(rD,e.e,e.qd),a=Bf(e.e),t=aD(e.j0);return n(G,k,u([v(Ft,e.e,e.qd,{bc:mo(6),g_:n(G,u([H(u([Le(T(Yz))]))]),u([aa(cl,t,a,k,L,r,k,e.U)])),bF:6,a_:e.h,aG:e.ai.aG,dw:e.ai.dx(6),a9:Fa(6),iA:"Command palette",eb:e.aD}),C(Q1,t,a,r,e.U)]))}else return ce("")},tD=l(function(e,r){return n(G,u([n(nr,"role","status"),H(Y(D5({pr:r.pr,bc:r.bc,eB:r.eB,rj:6}),u([n(Ir,Gn.kA,Gn.rX),dr(Ja.e6),he(n(Z,function(a){return a.bw},e)),be(n(Z,function(a){return v(L1,.6,a.bw,a.kU)},e)),cr(kn.iA),Ku(T1),qu.qN,so(_e(Ko.oX)),n(F,"pointer-events","none"),k5(P5(u([h(0,u([n(ic,"opacity","0")])),h(8,u([n(ic,"opacity","1")])),h(92,u([n(ic,"opacity","1")])),h(100,u([n(ic,"opacity","0")]))]))),C5(x5(Tp)),n(F,"animation-fill-mode","forwards")])))]),u([ce(r.Y)]))}),oD=function(e){var r=e.ha.oX;if(r.$===1)return ce("");var a=r.a.bc,t=r.a.hV;return n(tD,e.e,{pr:1,bc:a,eB:1,Y:t?"Nothing to Reset":"Use the browser's Back button to undo"})},cD=function(e){var r=l(function(a,t){return"inset 0 0 "+(J(a)+("px 0 "+Fe(n(Lr,t,e))))});return n(Ur,", ",u([n(r,90,.22),n(r,30,.4),n(r,8,.65)]))},A5=function(e){switch(e){case 0:return L;case 1:return M(v(Va,1/6,1,.5));default:return M(v(Va,1/3,1,.5))}},iD=function(e){var r=A5(e.nD);if(r.$===1)return ce("");var a=r.a;return n(G,u([H(u([hr(ec),Na($e),Za($e),vo($e),Qo($e),n(F,"pointer-events","none"),n(F,"box-shadow",cD(a))]))]),k)},fD=function(e){var r=e.a;return ee(r,Sv)},mK=0,I5=n(ci,0,"rem"),$D=function(e){if(L5(e.t7)||fD(e.t7)||e.pm)return ce("");var r=e.qd.du,a=e.qd.s6;return n(G,u([H(u([hr(Dt),Na($e),Za($e),Le(I5(2)),ye(I5(2)),n(F,"pointer-events","none"),n(F,"transform","translate("+(J(a.pi+.5*r.k6)+("px, "+(J(-a.pk+.5*r.ju)+"px)")))),be(a.rO?n(Z,function(t){return t.bw},e.e):n(Z,function(t){return t.kU},e.e)),so(_e(Ko.gZ+1))]))]),u([Ye.s6]))},uD=function(e){return{$:0,a:e}},lD=ch,hK=Q,vD=function(e){return n(R,e,ae(0))};function ts(){return Xc(os())}function os(){return C(Zc,P(function(e,r,a){return{g1:r,dK:a,cN:e}}),n(x,"duration",q),n(x,"callCount",Hr),n(x,"children",vD(function(e){return ts()})))}var F5=ts();ts=function(){return F5};var sD=os();os=function(){return sD};var dD=function(e){return n(Qe,e,n(lf,u(["detail"]),v(La,l(function(r,a){return{gm:r,aH:a}}),n(x,"recordingStartTime",q),n(x,"tickSnapshots",lD(v(La,l(function(r,a){return{jl:a,dB:r}}),n(x,"timestamp",q),n(x,"flameGraph",F5)))))))},bD=function(e){var r=e.tw,a=e.sJ;return v(Hn,"profiler-element",Y(u([n(Gr,"result",dD(a))]),r?u([n(nr,"running","")]):k),k)},pD=function(e){return bD({sJ:uD,tw:ee(e,Su)})},mD=function(e){return er(e)?{uv:"none"}:{uv:n(Ur,", ",e)}},hD=n($r,pe("font-family"),mD),cs=l(function(e,r){return n(ju,l(function(a,t){var o=t,c=n(Je,a,e);if(c.$===1)return o;var i=c.a;return{g1:o.g1-i.g1,dK:n(cs,i.dK,o.dK),cN:o.cN-i.cN}}),r)}),V5=l(function(e,r){var a=e.cX,t=e.cP,o=r.aH,c=a?n(ne,ze,n(de,function(f){return f.jl},n(Br,a-1,o))):ze,i=n(ne,ze,n(de,function(f){return f.jl},n(Br,t,o)));return n(cs,c,i)}),is=function(e){return v(Ji,P(function(r,a,t){return n(D,a,t)}),k,e)},hi=function(e){return{$:9,a:e}},E5=function(e){var r=(function(a){return 1-a.iG/a.hP})(v(ve,l(function(a,t){var o=n(Kr,t.gd,nt(a));return{hP:t.hP+t.gQ,gd:t.gd+1,iG:t.iG+o/(t.gd-1)*t.gQ,gQ:t.gQ*.7}}),{hP:0,gd:10,iG:0,gQ:1},n(it,8,Hc(e))));return{aV:1,aY:r,F:.35,a5:.45}},gD=function(e){return n(Gr,"mouseout",ae(e))},_D=function(e){return n(Gr,"mouseover",ae(e))},yD=Rr(function(e,r,a,t,o,c){var i=a>0?c/a*100:0,f=ee(t,M(o)),$=ar(f?e.kU:E5(o)),s=!ee(t,L),d=Er(s&&!f?.3:1);return n(G,u([H(u([hr(Xo),Ou(T(r*16)),ye(T(24)),pt(T(24)),Ar(Aa),Sn(d),Cn(u([he(ar(e.kM)),be(ar(e.kU))]))])),_D(hi(M(o))),gD(hi(L))]),u([n(G,u([H(u([hr(Dt),Na($e),Za(T(r*16)),Le(Xe(i)),ye(Xe(100)),he($)]))]),k),n($a,u([H(u([hr(Xo),Ou(T(6)),so(_e(1))]))]),u([ce(o)]))]))}),CD=je(function(e,r,a,t,o){var c=o.a,i=o.b.cN,f=o.b.dK;return n(D,_r(yD,e,r,a,t,c,i),A(H5,e,r+1,a,t,f))}),H5=je(function(e,r,a,t,o){return n(An,C(CD,e,r,a,t),n(bi,tt,un(o)))}),kD=je(function(e,r,a,t,o){var c=v(xu,r,a,t),i=c.a,f=i.b,$=c.b,s=$.b,d=n(V5,{cP:s,cX:f},t),b=n(ne,0,_u(n(N,function(m){var g=m.cN;return g},is(d))));return n(G,u([H(u([Ba(T(8)),Gm(Lf),Im(T(300)),he(ar(e.kO)),be(ar(e.kV))]))]),A(H5,e,0,b,o,d))}),fc=yr("height"),U5=Gr,$c=po("g"),vl=po("line"),W5=l(function(e,r){var a=r.aH,t=function(o){return o<0?ze:n(ne,ze,n(de,function(c){return c.jl},n(Br,o,a)))};return n(cs,t(e-1),t(e))}),G5=function(e){return e.$===-2},q5=function(e){return G5(e)?0:n(ne,0,_u(n(N,function(r){var a=r.dK;return 1+q5(a)},is(e))))},SD=function(e){var r=jr(e.aH);return n(ne,0,_u(n(N,function(a){return q5(n(W5,a,e))},n(qa,1,r-1))))},PD=function(e){return n(bi,Q,e)},sl=l(function(e,r){var a=r.aH,t=r.gm;return e?n(ne,t,n(de,function(o){return o.dB},n(Br,e-1,a))):t}),O5=l(function(e,r){var a=n(ne,r.gm,n(de,function(t){return t.dB},n(Br,e,r.aH)));return a-n(sl,e,r)}),xD=function(e){var r=jr(e.aH),a=PD(n(N,function(o){return n(O5,o,e)},n(qa,1,r-1))),t=n(ge,0,pa(vr(a)*.95)-1);return n(ne,16.7,pr(n(Vn,t,a)))},gi=po("rect"),Vf=yr("stroke"),Ef=yr("stroke-width"),jD=function(e){return{$:5,a:e}},wD=function(e){return{$:6,a:e}},LD={aW:0,uv:"ew-resize"},dl=yr("x1"),bl=yr("x2"),pl=yr("y1"),ml=yr("y2"),TD=W(function(e,r,a,t){var o=a.a,c=a.b,i=n(ca,r,yn.iu),f=n(ca,r,yn.ih),$=function(E){return n(Qe,function(V){return E({fF:V})},n(x,"clientX",q))},s=l(function(E,V){return n($c,k,u([n(vl,u([dl(J(E)),pl("0"),bl(J(E)),ml(J(i)),Vf("transparent"),Ef(J(n(ca,r,10))),Un(u([Ar(LD)])),n(U5,"pointerdown",$(V))]),k),n(vl,u([dl(J(E)),pl("0"),bl(J(E)),ml(J(i)),Vf(Fe(e.ka.ti)),Ef(J(n(ca,r,1))),Un(u([bt(lr)]))]),k)]))}),d=v(xu,r,n(ai,o,c),t),b=d.a,m=b.a,g=b.b,_=d.b,y=_.a,S=_.b,w=m,j=y,B=(function(){if(o.$){var E=o.a,V=(function(){return E?n(ne,t.gm,n(de,function(O){return O.dB},n(Br,S,t.aH))):n(sl,g,t)})();return n(vl,u([dl(J(V)),pl("0"),bl(J(V)),ml(J(f)),Vf(Fe(e.ka.ti)),Ef(J(n(ca,r,2))),Un(u([bt(lr)]))]),k)}else return n($c,k,k)})();return n($c,k,u([n(s,w,jD),n(s,j,wD),B]))}),N5=P(function(e,r,a){return ee(r,M(a))?Fe(e.kU):Fe(E5(a))}),J5=l(function(e,r){if(e.$)return 1;var a=e.a;return ee(a,r)?1:.3}),K5=function(e){return n(Gr,"mouseout",ae(e))},Z5=function(e){return n(Gr,"mouseover",ae(e))},fs=yr("opacity"),$s=Ep,X5=po("title"),uc=yr("width"),lc=yr("x"),vc=yr("y"),MD=l(function(e,r){var a=r.pi,t=r.pk,o=r.k6,c=r.ju,i=r.e$,f=r.l$,$=r.mP,s=i+(" ("+(n(If,2,f)+"ms)")),d=n(J5,e.cl,i),b=v(N5,e.dA,e.cl,i),m=n(gi,u([lc(J(a)),vc(J(t)),uc(J(o)),fc(J(c)),mt(b),fs(J(d)),Z5(hi(M(i))),K5(hi(L))]),u([n(X5,k,u([$s(s)]))])),g=$?u([n(gi,u([lc(J(a)),vc(J(t)),uc(J(o)),fc(J(n(ca,e.bb,2))),mt(Fe(e.dA.ka.ti)),Un(u([bt(lr)]))]),k)]):k;return n(D,m,g)}),Y5=W(function(e,r,a,t){return v(ve,l(function(o,c){var i=o.a,f=o.b,$=c.a,s=c.b,d=f.cN/e.e9,b=K(d,e.cE)>0,m=C(Y5,e,r+1,$,f.dK),g=n(qe,e.cE,d),_=n(MD,e,{l$:f.cN,ju:g,mP:b,e$:i,k6:e.it,pi:e.dL+r*e.it,pk:e.cE-$-g});return h($+g,Y(_,Y(m,s)))}),h(a,k),n(bi,tt,un(t))).b}),zD=l(function(e,r){var a=e.pf/e.e9,t=n(qe,e.cE,a),o=K(a,e.cE)>0,c=n(ca,e.bb,1),i=n(ge,0,e.oS-c),f=n(qe,i,n(ca,e.bb,yn.oR)),$=n(gi,u([lc(J(e.dL)),vc(J(e.cE-t)),uc(J(f)),fc(J(t)),mt(Fe(e.dA.kS)),Un(u([bt(lr)]))]),k),s=n(ca,e.bb,2),d=o?u([n(gi,u([lc(J(e.dL)),vc("0"),uc(J(f)),fc(J(s)),mt(Fe(e.dA.ka.ti)),Un(u([bt(lr)]))]),k)]):k,b=n(ge,0,i-f),m=e.dL+f,g=(function(){if(b<=0||e.jN<=0||G5(r))return k;var _=b/e.jN;return C(Y5,{dL:m,cl:e.cl,e9:e.e9,cE:e.cE,it:_,dA:e.dA,bb:e.bb},0,0,r)})();return n(D,$,Y(d,g))}),DD=l(function(e,r){var a=function(i){return n(ne,0,n(de,function(f){return f.dB},n(Br,i,r.aH)))},t=n(ge,1,n(Pu,e.bH,r)-1),o=jr(r.aH),c=n(qe,o-1,n(Pu,e.bM,r)+1);return n(Pr,function(i){var f=n(sl,i,r),$=a(i);return K($,e.bH)>-1&&K(f,e.bM)<1},n(qa,t,c))}),RD=je(function(e,r,a,t,o){var c=n(DD,r,t),i=n(ca,r,yn.ih),f=SD(t),$=n(ge,33.3,xD(t)),s=$>0?$/i:1,d=n(An,function(_){var y=n(O5,_,t);return n(zD,{dL:n(sl,_,t),cl:o,jN:f,e9:s,cE:i,dA:e,oS:y,pf:y,bb:r},n(W5,_,t))},c),b=16.7/s,m=n(vl,u([dl(J(r.bH)),bl(J(r.bM)),pl(J(i-b)),ml(J(i-b)),Vf(Fe(e.ka.uS)),Ef(J(n(ca,r,1))),Un(u([bt(lr)]))]),k),g=n(gi,u([lc(J(r.bH)),vc("0"),uc(J(r.bM-r.bH)),fc(J(i)),mt(Fe(e.kO))]),k);return n($c,k,u([g,n($c,k,d),m,C(TD,e,r,a,t)]))}),BD=yr("transform"),AD=yr("font-size"),ID=po("text"),FD=l(function(e,r){var a=e.mi,t=e.nW,o=e.ll,c=.6*a,i=pa((o-t)/c);return K(Ta(r),i)<1?r:i<=1?"":n(Rc,i-1,r)+"\u2026"}),VD=Rr(function(e,r,a,t,o,c){var i=c.cN,f=c.g1,$=n(ca,r,yn.op),s=.3*$,d=a.fO*$,b=n(J5,t,o),m=.6*$,g=v(N5,e,t,o),_=n(Ur," > ",Ae(n(D,o,a.fD))),y=_+(" ("+(He(f)+("x, "+(n(If,2,i)+"ms)"))));return n($c,u([Z5(hi(M(o))),K5(hi(L))]),u([n(X5,k,u([$s(y)])),n(gi,u([lc(J(a.ej)),vc(J(d)),uc(J(i)),fc(J($)),mt(g),Vf(Fe(e.kL)),Ef(J(n(ca,r,1))),fs(J(b))]),k),n(ID,u([lc(J(a.ej+s)),vc(J(d+.7*$)),mt(Fe(e.kU)),AD(J(m)),fs(J(b))]),u([$s(n(FD,{ll:i,mi:m,nW:s},y))]))]))}),Q5=je(function(e,r,a,t,o){return v(ve,l(function(c,i){var f=c.a,$=c.b,s=i.a,d=i.b,b=A(Q5,e,r,{fD:n(D,f,a.fD),fO:a.fO+1,ej:s},t,$.dK),m=_r(VD,e,r,z(a,{ej:s}),t,f,$);return h(s+$.cN,n(D,m,Y(b,d)))}),h(a.ej,k),n(bi,function(c){var i=c.a;return i},un(o))).b}),ED=je(function(e,r,a,t,o){var c=n(ca,r,yn.ih),i=v(xu,r,a,t),f=i.a,$=f.a,s=f.b,d=i.b,b=d.b;return n($c,u([BD("translate("+(J($)+(", "+(J(c)+")"))))]),A(Q5,e,r,{fD:k,fO:0,ej:0},o,n(V5,{cP:b,cX:s},t)))}),HD=function(e){return{$:1,a:e}},UD=C(Zc,P(function(e,r,a){return HD({nF:a/yn.iv,os:e,ot:r})}),n(x,"deltaX",q),n(x,"deltaY",q),n(x,"offsetX",q)),WD=function(e){var r=e.bM-e.bH;return n(Ur," ",n(N,J,u([e.bH,0,r,n(ca,e,yn.iu)])))},GD=je(function(e,r,a,t,o){return n(Nu,u([uc(J(yn.iv)),fc(J(yn.iu)),Ju(WD(r)),n(U5,"wheel",UD),Un(u([he(ar(e.H))]))]),u([A(RD,e,r,a,t,o),A(ED,e,r,a,t,o)]))}),qD=l(function(e,r){var a=jr(r.aH),t=mn(e),o=(function(){var f=n(Br,a-1,r.aH);if(f.$)return 0;var $=f.a;return $.dB-r.gm})(),c=o>=1e3?n(If,2,o/1e3)+" s":n(If,0,o)+" ms",i=He(a)+(" ticks \xB7 "+c);return n(G,u([H(u([se,Oe(we),ye(T(24)),n(Ir,T(4),T(8))]))]),u([n($a,u([H(u([be(ar(t.kU))]))]),u([ce(i)]))]))}),OD=l(function(e,r){var a=mn(e);return n(G,u([H(u([se,wr(fa),be(ar(a.kV)),hD(u(["monospace"])),Vr(T(12)),n(F,"user-select","none")]))]),u([n(qD,e,r.d5),A(GD,a,r.bb,r.bo,r.d5,r.cl),A(kD,a,r.bb,r.bo,r.d5,r.cl)]))}),ND=l(function(e,r){if(r.$===3){var a=r.a;return M(n(OD,e,a))}else return L}),JD=function(e){if(e.bT.eP){var r=(function(){var t=n(ND,e.e,e.aQ);if(t.$)return ce("");var o=t.a;return v(Ft,e.e,e.qd,{bc:mo(3),g_:n(No,e.gh,o),bF:3,a_:e.h,aG:e.ai.aG,dw:e.ai.dx(3),a9:Fa(3),iA:"Profile",eb:e.aD})})(),a=n(No,e.gh,pD(e.aQ));return n(G,k,u([a,r]))}else return ce("")},gK=3,e4=function(e){return z(e,{kz:!0})},KD=function(e){var r=(function(){var a=e.qd.j8===1?e4(as("KeyP")):e4(ns("KeyP"));return n($l,e.qd.j8,a)})();return n(Gu,e.e,{iK:function(a){return a.bw},f3:Ye.r8,jy:n(ga,6,e.h),e$:"Command palette",bm:e.j1,bs:n(Pn,e.sO,{eB:3,e$:"Command palette",tK:M(r)})})},ZD=function(e){return n(Yo,e.e,{f3:Ye.tN,bF:7,e$:"Device preview",a_:e.h,a9:Fa(7),eb:e.aD,bs:n(Pn,e.sO,{eB:3,e$:"Device preview",tK:L})})},XD=u([0,1,2]),YD=function(e){switch(e){case 0:return Ye.ur;case 1:return Ye.s_;default:return Ye.qc}},QD=function(e){var r=(function(){var a=e.qd.j8===1?as("KeyM"):ns("KeyM");return n($l,e.qd.j8,a)})();return n(Y1,e.e,{f3:YD,mV:ln(e.nD),rR:L2,rS:XD,e$:"Mode",sL:e.j4,sO:e.sO,d2:1,tG:l(function(a,t){return n(ne,t.bw,A5(a))}),tK:function(a){return M(r)},uf:3})},eR=function(e){return u([n(Qu,"pointerdown",ae(h(e,!0))),n(Qu,"wheel",ae(h(e,!0))),n(Qu,"keydown",n(R,function(r){return r.i8||r.jQ||r.iL?En("let modifier-bearing combos reach global decoders"):n(Q$,r.jz,u(["Meta","Control","Shift","Alt"," "]))?En("bare modifier keys and Space \u2014 harmless, allow"):ae(h(e,!0))},A(Eo,W(function(r,a,t,o){return{iL:o,i8:a,jz:r,jQ:t}}),n(x,"key",Ce),n(x,"ctrlKey",te),n(x,"metaKey",te),n(x,"altKey",te))))])},rR=function(e){return n(Gu,e.e,{iK:function(r){return r.bw},f3:Ye.uT,jy:e.pm,e$:"Zen mode",bm:e.j5,bs:n(Pn,e.sO,{eB:3,e$:"Zen mode",tK:L})})},aR=function(e){var r=e.bT,a=r.hx?u([rR(e)]):k,t=e.e,o=r.ck?u([n(Yo,t,{f3:Ye.ka,bF:5,e$:"Theme",a_:e.h,a9:Fa(5),eb:e.aD,bs:n(Pn,e.sO,{eB:3,e$:"Theme",tK:L})})]):k,c=r.dQ?u([QD(e)]):k,i=n(xr,Q,u([r.f_?M(n(Yo,t,{f3:Ye.pn,bF:2,e$:"FPS meter",a_:e.h,a9:Fa(2),eb:e.aD,bs:n(Pn,e.sO,{eB:3,e$:"FPS meter",tK:L})})):L,r.f$?M(n(Yo,t,{f3:Ye.qd,bF:1,e$:"Inputs",a_:e.h,a9:Fa(1),eb:e.aD,bs:n(Pn,e.sO,{eB:3,e$:"Inputs",tK:L})})):L,r.f0?M(n(Yo,t,{f3:Ye.t7,bF:4,e$:"Tape",a_:e.h,a9:Fa(4),eb:e.aD,bs:n(Pn,e.sO,{eB:3,e$:"Tape",tK:L})})):L])),f=u([se,wr(fa),Oe(we),n(F,"gap","6px")]),$=function(y){return n(G,u([H(f)]),y)},s=r.dP?u([ZD(e)]):k,d=r.fZ?u([n(Yo,t,{f3:Ye.qX,bF:0,e$:"Configurations",a_:e.h,a9:Fa(0),eb:e.aD,bs:n(Pn,e.sO,{eB:3,e$:"Configurations",tK:L})})]):k,b=n(vf,r,e.U)?u([KD(e)]):k,m=n(Pr,n($r,Pv,er),u([d,c,s,o,b,i])),g=n(G,u([H(u([se,wr(fa),Oe(we),n(F,"gap","24px"),e.pm?cr(u([pi(K1(T(-72))),Sn(Er(0)),n(F,"pointer-events","none")])):cr(u([pi(K1($e)),Sn(Er(1))])),n(F,"transition","transform 240ms cubic-bezier(0.33, 1, 0.68, 1), opacity 240ms cubic-bezier(0.33, 1, 0.68, 1)")])),n(nr,"aria-hidden",e.pm?"true":"false")]),n(N,$,m)),_=n(xr,Q,u([er(a)?L:M($(a)),er(m)?L:M(g)]));return er(_)?ce(""):n(G,Y(u([H(u([hr(Dt),Na(T(12)),Za(T(12)),Le(T(48)),se,wr(fa),Oe(we),n(F,"gap","24px"),n(F,"pointer-events","auto"),so(_e(Ko.rA))]))]),eR(e.hU)),_)},nR=l(function(e,r){var a=n(Hz,e,r);return n(G,u([Wn("play-hud"),H(u([hr(ec),Na($e),Za($e),vo($e),Qo($e),n(F,"pointer-events","none")]))]),Y(u([Mz(a.e),n(zz,".play-hud",a.e),Tz(a.e),jz(a.e),iD(a),MT(a),XM(a),KM(a),cz(a),aR(a),$D(a),n(Xz,Rz(a.e),a.c_),JD(a),xz(a),CM(a),nD(a),oD(a),Cm(a.h)]),a.fR.j9))}),tR=l(function(e,r){var a=Fc(r.t7),t=v(ct,Yj,ze,a.di),o=qv(a),c=(function(){var S=e.kW;if(S.$)return Fn(r.cm);var w=S.a;return n(ne,Fn(r.cm),n(de,function(j){return w(j.a_)},n(ha,function(j){return n(Je,j,a.di)},pr(r.am))))})(),i=n(Jv,r.cm,vr(r.am)),f=n(xr,A(zL,e,r,a,o,i),r.am),$={mh:r.aM,di:f,nX:a.nX,nY:t,gs:e.cm,e:c},s=e.mz($),d=N$(n(nR,{qd:n(op,r,a),fR:s,gg:Aj,d1:Ij,gs:e.cm,t7:r.t7,eb:zv},r.cm)),b=e.rU($),m=Fe(mn($.e).H),g=Fe(mn($.e).kU),_=N$(Up($.e)),y=(function(){var S=r.g9;if(S.$)return u([_,b,d]);var w=S.a;return u([_,b,d,Kj(w)])})();return n(xt,u([Wp(fp),n(re,"position","fixed"),n(re,"inset","0"),n(re,"overflow-y","auto"),n(re,"overscroll-behavior","none"),n(re,"background-color",m),n(re,"color",g),n(DL,"playflush",ae(h(ip,!0)))]),y)}),oR=function(e){return Xy({cU:Jk(e),cZ:cP(e),up:Bj(e),dE:tR(e)})},cR=function(e){return oR(Hy(e))},iR={hw:!0,fZ:!0,dP:!0,f_:!0,f$:!1,dQ:!0,eP:!0,f0:!0,ck:!0,hx:!0,hz:q2,e:s3},fR=iR,r4=l(function(e,r){return{aY:e,kx:r}}),Hf=16,a4=function(e){return{aY:0,kx:qr(v(or,0,255,e)/255*(Hf-1))}},$R=Lt(u([v(La,r4,n(Sr,0,Hr),n(Sr,1,Hr)),n(Qe,a4,Hr)])),_K=Q,uR=l(function(e,r){return{j:pn(n(N,function(a){var t=a.a,o=a.b;return h(e(t),h(t,o))},r)),oV:e}}),n4=function(e){var r=e.a,a=e.b,t=e.c;return h(h(a,t),(function(){return r?1:0})())},hl=P(function(e,r,a){return{$:0,a:e,b:r,c:a}}),yK=0,CK=1,t4=function(e){return e?1:0},lR=Lt(u([_r(ol,je(function(e,r,a,t,o){return h(v(hl,t4(e),r,a),n(r4,t,o))}),n(Sr,0,Hr),n(Sr,1,Hr),n(Sr,2,Hr),n(Sr,3,Hr),n(Sr,4,Hr)),A(Eo,W(function(e,r,a,t){return h(v(hl,t4(e),r,a),a4(t))}),n(Sr,0,Hr),n(Sr,1,Hr),n(Sr,2,Hr),n(Sr,3,Hr))])),vR=v(La,l(function(e,r){return{pE:r,ui:n(uR,n4,e)}}),n(x,"trixels",sr(lR)),n(x,"bg",$R)),sR=function(e){return{j:ze,oV:e}},dR={pE:{aY:0,kx:2},ui:sR(n4)},gl=w$,bR=function(e){return n(bn,gl,u([e.aY,e.kx]))},pR=function(e){return e?1:0},mR=function(e){var r=e.a,a=r.a,t=r.b,o=r.c,c=e.b;return n(bn,gl,u([pR(a),t,o,c.aY,c.kx]))},o4=function(e){var r=e.j;return is(r)},hR=function(e){return $o(u([h("trixels",n(bn,mR,o4(e.ui))),h("bg",bR(e.pE))]))},kK=Q,gR=l(function(e,r){switch(e){case 1:return h(r.ti,r.pW);case 2:return h(r.uS,r.pY);case 3:return h(r.rn,r.pU);case 4:return h(r.qq,r.pT);case 5:return h(r.pL,r.pS);default:return h(r.r2,r.pV)}}),_R=.45,yR=.6,us=function(e){return e<=.0404482362771082?e/12.92:n(ia,(e+.055)/1.055,2.4)},ls=function(e){var r=e.a,a=e.b,t=e.c,o=e.d;return{aV:o,pL:t,rn:a,ti:r}},CR=function(e){var r=ls(e),a=r.ti,t=r.rn,o=r.pL,c=r.aV;return{aV:c,r_:us(o),r$:us(t),r0:us(a)}},kR=function(e){var r=e.r0,a=e.r$,t=e.r_,o=e.aV,c=.0883024619*r+.2817188376*a+.6299787005*t,i=n(ia,c,1/3),f=.2119034982*r+.6806995451*a+.1073969566*t,$=n(ia,f,1/3),s=.4122214708*r+.5363325363*a+.0514459929*t,d=n(ia,s,1/3);return{gU:1.9779984951*d-2.428592205*$+.4505937099*i,aV:o,iT:.0259040371*d+.7827717662*$-.808675766*i,F:.2104542553*d+.793617785*$-.0040720468*i}},SR=function(e){return kR(CR(e))},c4=W(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),vs=W(function(e,r,a,t){var o=I(e,r,a),c=o.a,i=o.b,f=o.c,$=f<=.5?f*(i+1):f+i-f*i,s=f*2-$,d=function(_){var y=_<0?_+1:_>1?_-1:_;return y*6<1?s+($-s)*y*6:y*2<1?$:y*3<2?s+($-s)*(2/3-y)*6:s},b=d(c-1/3),m=d(c),g=d(c+1/3);return C(c4,g,m,b,t)}),Uf=function(e){return C(vs,e.aY,e.a5,e.F,e.aV)},_l=n(ke,Uf,SR),ss=m7,ya=k7,i4=function(e){var r=e.F,a=e.gU,t=e.iT,o=e.aV,c=n(ss,t,a)/(Zr*2),i=c<0?1+c:c,f=ya(a*a+t*t);return{aV:o,i$:f,aY:i,F:r}},Ea=v7,Ha=s7,yl=function(e){var r=e.F,a=e.i$,t=e.aY,o=e.aV,c=a*Ha(t*2*Zr),i=a*Ea(t*2*Zr);return{gU:i,aV:o,iT:c,F:r}},f4=l(function(e,r){var a=i4(r);return yl(z(a,{F:e}))}),PR=l(function(e,r){if(e){var a=n(gR,e,r),t=a.a,o=a.b,c=_l(o),i=n(f4,c.F+(1-c.F)*yR,c),f=_l(t),$=n(f4,f.F*(1-_R),f);return u([$,f,c,i])}else return u([_l(r.pE),_l(r.ra)])}),xR=P(function(e,r,a){e:for(;;){var t=n(Q0,br,e),o=t.a,c=t.b;if(K(ja(o),br)<0)return n(F$,!0,{aw:r,Z:a,aj:o});var i=c,f=n(D,Lc(o),r),$=a+1;e=i,r=f,a=$;continue e}}),ho=function(e){return e.b?v(xR,e,k,0):Lo},$4=1e-4,u4=function(e){var r=e.F,a=e.gU,t=e.iT,o=e.aV,c=r-.0894841775*a-1.291485548*t,i=c*c*c,f=r-.1055613458*a-.0638541728*t,$=f*f*f,s=r+.3963377774*a+.2158037573*t,d=s*s*s;return{aV:o,r_:-.0041960863*d-.7034186147*$+1.707614701*i,r$:-1.2684380046*d+2.6097574011*$-.3413193965*i,r0:4.0767416621*d-3.3077115913*$+.2309699292*i}},l4=function(e){var r=u4(e),a=function(t){return K(t,-$4)>-1&&K(t,1+$4)<1};return a(r.r0)&&a(r.r$)&&a(r.r_)},jR=W(function(e,r,a,t){e:for(;;){if(t<=0)return r;var o=(r+a)/2;if(l4(yl(z(e,{i$:o})))){var c=e,i=o,f=a,$=t-1;e=c,r=i,a=f,t=$;continue e}else{var c=e,i=r,f=o,$=t-1;e=c,r=i,a=f,t=$;continue e}}}),wR=function(e){return l4(yl(e))?e:z(e,{i$:C(jR,e,0,e.i$,24)})},LR=function(e){return{aV:1,aY:e.aY,F:v(or,0,1,e.F),a5:v(or,0,1,e.a5)}},TR=function(e){var r=e.a,a=e.b,t=e.c,o=e.d,c=n(qe,r,n(qe,a,t)),i=n(ge,r,n(ge,a,t)),f=(c+i)/2,$=ee(c,i)?0:f<.5?(i-c)/(i+c):(i-c)/(2-i-c),s=ee(i,r)?(a-t)/(i-c):ee(i,a)?2+(t-r)/(i-c):4+(r-a)/(i-c),d=s*(1/6),b=xv(d)?0:d<0?d+1:d;return{aV:o,aY:b,F:f,a5:$}},MR=function(e){return TR(e)},ds=function(e){return e<=.00313066844250063?e*12.92:1.055*n(ia,e,1/2.4)-.055},zR=W(function(e,r,a,t){return C(c4,e,r,a,t)}),DR=function(e){var r=e.r0,a=e.r$,t=e.r_,o=e.aV;return C(zR,ds(r),ds(a),ds(t),o)},RR=function(e){return DR(u4(e))},BR=function(e){return RR(yl(e))},AR=function(e){return LR(MR(BR(wR(i4(e)))))},IR=function(e){e:for(;;)if(e.b)if(e.b.b){var a=e.b,t=a;e=t;continue e}else{var r=e.a;return M(r)}else return L},FR=P(function(e,r,a){return{gU:r,aV:1,iT:a,F:e}}),VR=P(function(e,r,a){var t=r.F-e.F,o=t<=1e-6?0:(a-e.F)/t;return{gU:e.gU+(r.gU-e.gU)*o,aV:1,iT:e.iT+(r.iT-e.iT)*o,F:a}}),ER=P(function(e,r,a){e:for(;;)if(r.b){var t=r.a,o=r.b;if(K(a,t.F)<1)return v(VR,e,t,a);var c=t,i=o,f=a;e=c,r=i,a=f;continue e}else return z(e,{F:a})}),HR=l(function(e,r){if(e.b){var a=e.a,t=e.b;return v(ER,a,t,r)}else return v(FR,r,0,0)}),UR=function(e){var r=n(bi,function(o){return o.F},e),a=n(ne,0,n(de,function(o){return o.F},pr(r))),t=n(ne,a,n(de,function(o){return o.F},IR(r)));return ho(n(N,function(o){var c=o/(Hf-1);return AR(n(HR,r,a+(t-a)*c))},n(qa,0,Hf-1)))},bs=7,v4=function(e){return ho(n(N,function(r){return UR(n(PR,r,e))},n(qa,0,bs-1)))},SK=Q,ps={$:0},s4=ps,ms=l(function(e,r){return{bF:e,bZ:r.bZ,ss:r.ss}}),WR=l(function(e,r){return gv(h(n(ms,0,e),n(Oa,l(function(a,t){return n(ms,a+1,t)}),r)))}),GR=W(function(e,r,a,t){return{eD:L,l4:e,dT:!0,jJ:r,gn:s4,V:n(WR,a,t)}}),qR={$:0},sc=qR,d4=function(e){return Y(mn(e).ka.ss,of(e)?"|light":"|dark")},OR=l(function(e,r){return h({dM:!1,dd:v4(mn(r).ka),hq:d4(r),a1:C(GR,hR,vR,{bZ:dR,ss:"1"},k),fd:{iC:0,iF:0},cC:{aY:1,kx:9}},sc)}),NR=l(function(e,r){return{be:r,ss:e}}),JR=l(function(e,r){return n(NR,e,r)}),KR=JR,b4=P(function(e,r,a){var t=r.a,o=r.b;return h(e,n(pv,h(t,o),a))}),ZR=u([n(KR,"Parameters",u([v(b4,"camera distance",h(5,80),10),v(b4,"trixel scale",h(.5,1),1)]))]),XR={$:0},YR={$:1},QR={$:2},hs=l(function(e,r){if(r.$){var t=r.a;return We(t)}else{var a=r.a;return e(a)}}),p4=function(e){switch(e.$){case 0:return 1;case 1:return 2;case 2:return 4;case 3:return 1;case 4:return 2;case 5:return 4;case 6:return 4;case 7:return 8;case 8:var r=e.a;return r;case 9:var r=e.a;return r;default:var a=e.a;return Tb(a)}},PK=0,m4=P(function(e,r,a){switch(e.$){case 0:var o=e.a;return v(Ug,r,a,o);case 1:var t=e.a,o=e.b;return C(Wg,r,a,o,!t);case 2:var t=e.a,o=e.b;return C(Gg,r,a,o,!t);case 3:var o=e.a;return v(qg,r,a,o);case 4:var t=e.a,o=e.b;return C(Og,r,a,o,!t);case 5:var t=e.a,o=e.b;return C(Ng,r,a,o,!t);case 6:var t=e.a,o=e.b;return C(Jg,r,a,o,!t);case 7:var t=e.a,o=e.b;return C(Kg,r,a,o,!t);case 8:var i=e.b;return v(eB,i,r,a);case 9:var c=e.b;return v(Xg,r,a,c);default:var i=e.a;return v(Zg,r,a,i)}}),eB=P(function(e,r,a){e:for(;;)if(e.b){var t=e.a,o=e.b,c=o,i=r,f=v(m4,t,r,a);e=c,r=i,a=f;continue e}else return a}),Cl=l(function(e,r){var a=e;return n(Yg,a,r)}),xK=Q,rB=function(e){return n_(e)},_i=Tb,aB=function(e){return n(Cl,rB(_i(e)),e)},h4=function(e){return{$:3,a:e}},nB=function(e){return{$:4,a:e}},g4=1,tB=l(function(e,r){if(r.$){var t=r.a;return We(t)}else{var a=r.a;return Ge(e(a))}}),oB=l(function(e,r){if(r.$){var t=r.a;return We(e(t))}else{var a=r.a;return Ge(a)}}),cB=l(function(e,r){return{bZ:r,ss:e}}),iB=function(e){return v(La,cB,Lt(u([n(x,"n",Ce),ae("Level")])),n(x,"d",e))},fB=function(e){return n(R,function(r){var a=r.a,t=r.b,o=n(Oa,ms,a);if(o.b){var c=o.a,i=o.b;return ae(n(ft,v(or,0,vr(a)-1,t),gv(h(c,i))))}else return En("Levels: items is empty")},v(La,to,n(x,"items",sr(iB(e))),Lt(u([n(x,"cur",Hr),ae(0)]))))},_4=l(function(e,r){var a=e,t=n(lv,n(x,"v",Hr),r);if(t.$===1){var o=t.a;return We(h4(X0(o)))}else{var c=t.a;return ee(c,g4)?n(tB,function(i){return z(a,{V:i})},n(oB,n(ke,X0,h4),n(lv,fB(a.jJ),r))):We(nB(c))}}),$B=function(e){var r=v(O$,"_","/",v(O$,"-","+",e)),a=n(Kr,4,4-n(Kr,4,Ta(r)));return Y(r,n(Ao,a,"="))},gs=l(function(e,r){if(r.$)return We(e);var a=r.a;return Ge(a)}),uB=function(e){return{$:10,a:e}},y4=uB,lB=l(function(e,r){var a=r,t={W:0,bd:e,aS:0,ah:0,kQ:0},o=a(t);if(o.$){var f=o.a;return We(f)}else{var c=o.a,i=c.a;return Ge(i)}}),kl=Hg,vB=l(function(e,r){return{$:8,a:e,b:r}}),sB=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b,o=e+p4(a),c=t;e=o,r=c;continue e}else return e}),Wf=function(e){return n(vB,n(sB,0,e),e)},Ua=P(function(e,r,a){return{$:0,a:e,b:r,c:a}}),dB=v(Ua,Lo,0,0),jK=Q,bB=P(function(e,r,a){e:for(;;){var t=r(e),o=t,c=o(a);if(c.$===1){var i=c.a;return We(i)}else if(c.a.a.$){var g=c.a,_=g.a.a,s=g.b;return Ge(h(_,s))}else{var f=c.a,$=f.a.a,s=f.b,d=$,b=r,m=s;e=d,r=b,a=m;continue e}}}),Sl=l(function(e,r){return n(bB,e,r)}),ht=l(function(e,r){var a=r;return function(t){var o=a(t);if(o.$){var $=o.a;return We($)}else{var c=o.a,i=c.a,f=c.b;return Ge(h(e(i),f))}}}),wK=1,pB=l(function(e,r){return{$:4,a:e,b:r}}),go=pB,mB=l(function(e,r){return{$:5,a:e,b:r}}),Pl=mB,hB=function(e){return{$:3,a:e}},_o=hB,gB=function(e){var r=e.a,a=e.b,t=e.c,o=(function(){var i=t>>>(4-a)*8;switch(a){case 4:return u([n(Pl,1,t)]);case 1:return u([_o(i)]);case 2:return u([n(go,1,i)]);case 3:return u([n(go,1,i>>8),_o(255&i)]);default:return k}})(),c=l(function(i,f){return n(D,n(Pl,1,i),f)});return kl(Wf(v(A$,c,o,r)))},Gf=function(e){return{$:1,a:e}},xn=function(e){return{$:0,a:e}},yo=l(function(e,r){var a=r;return function(t){var o=a(t);if(o.$){var d=o.a;return We(d)}else{var c=o.a,i=c.a,f=c.b,$=e(i),s=$;return s(f)}}}),C4=l(function(e,r){var a=r;return l(function(t,o){var c=n(a,t,o),i=c.a,f=c.b;return h(i,e(f))})}),_s=l(function(e,r){var a=r.a,t=r.b,o=r.c;if(t===4)return v(Ua,n(mf,o,a),1,e<<24);if(t){var c=t,i=jr(a)-1,f=(255&e)<<(3-c)*8|o,$=4278190080>>>c*8;return v(Ua,a,t+1,f)}else return v(Ua,a,1,e<<24)}),k4=P(function(e,r,a){var t=a.a,o=a.b,c=a.c,i=e===4?r:(1<<e*8)-1&r;if(e){if(o===4)return v(Ua,n(mf,c,t),e,i<<(4-e)*8);if(o){var f=4-o;if(K(e,f)>0){var $=o+e-4,s=i>>>$*8,d=c|s,b=(8-o-e)*8,m=((1<<$*8)-1&i)<<b;return v(Ua,n(mf,d,t),e-f,m)}else{var b=(4-(o+e))*8,s=i<<b,d=c|s;return v(Ua,t,o+e,d)}}else return v(Ua,t,e,i<<(4-e)*8)}else return a}),S4=function(e){return l(function(r,a){return h(a,e)})},P4=function(e){return r_(!e)},xl=Qg,_B=function(e){var r=e.a,a=e.b,t=a.a,o=a.b,c=a.c;return r>=4?n(C4,function(i){return xn(h(r-4,v(k4,4,i,a)))},P4(1)):r>=1?n(C4,function(i){return xn(h(r-1,n(_s,i,a)))},xl):S4(Gf(a))},yB=W(function(e,r,a,t){e:for(;;){var o=r(e),c=o,i=n(c,a,t),f=i.a,$=i.b;if($.$){var _=$.a;return h(f,_)}else{var s=$.a,d=s,b=r,m=a,g=f;e=d,r=b,a=m,t=g;continue e}}}),CB=l(function(e,r){return n(yB,e,r)}),kB=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=n(CB,h(_i(e),r),_B),i=n(Cl,c,e);if(i.$)return r;var f=i.a;return f}),ys=P(function(e,r,a){var t=(function(){var $=function(d){if(d.$===1)return M(1);var b=d.a;return M(b+1)},s=P(function(d,b,m){return K(d,r)>-1&&K(d,a+r)<0?v(jt,b,$,m):m});return v(ct,s,ze,e)})(),o=v(ct,P(function($,s,d){var b=d.a,m=d.b;return h(b+s,v(fr,$,b,m))}),h(0,ze),t),c=(function(){var $=W(function(b,m,g,_){e:for(;;)if(K(g,b)>0){var y=b,S=m,w=g-1,j=n(D,0,_);b=y,m=S,g=w,_=j;continue e}else return n(D,m,_)}),s=P(function(b,m,g){var _=g.a,y=g.b;return h(b-1,C($,b,m,_,y))}),d=l(function(b,m){e:for(;;)if(b>=0){var g=b-1,_=n(D,0,m);b=g,m=_;continue e}else return m});return(function(b){var m=b.a,g=b.b;return n(d,m,g)})(v(Ji,s,h(15,k),t))})(),i=P(function($,s,d){e:for(;;)if($-a<0){var b=n(Je,r+$,e);if(b.$===1){var m=$+1,g=s,_=d;$=m,s=g,d=_;continue e}else{var y=b.a;if(y){var S=n(Je,y,d);if(S.$===1)return s;var w=S.a,m=$+1,g=v(ri,w,$,s),_=v(fr,y,w+1,d);$=m,s=g,d=_;continue e}else{var m=$+1,g=s,_=d;$=m,s=g,d=_;continue e}}}else return s}),f=v(i,0,n(cu,a,0),o.b);return{d7:c,gI:f}}),SB=u([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tr=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return{$:0,a:e,b:r,c:a,d:t,e:o,f:c,g:i,h:f,i:$,j:s}}}}}}}}}}},Cs=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e,f=r.f,$=r.g,s=r.h,d=r.i,b=r.j;if(e>=320)return r;var m=1<<e%32,g=e/32|0;switch(g){case 0:return Tr(m|a)(t)(o)(c)(i)(f)($)(s)(d)(b);case 1:return Tr(a)(m|t)(o)(c)(i)(f)($)(s)(d)(b);case 2:return Tr(a)(t)(m|o)(c)(i)(f)($)(s)(d)(b);case 3:return Tr(a)(t)(o)(m|c)(i)(f)($)(s)(d)(b);case 4:return Tr(a)(t)(o)(c)(m|i)(f)($)(s)(d)(b);case 5:return Tr(a)(t)(o)(c)(i)(m|f)($)(s)(d)(b);case 6:return Tr(a)(t)(o)(c)(i)(f)(m|$)(s)(d)(b);case 7:return Tr(a)(t)(o)(c)(i)(f)($)(m|s)(d)(b);case 8:return Tr(a)(t)(o)(c)(i)(f)($)(s)(m|d)(b);case 9:return Tr(a)(t)(o)(c)(i)(f)($)(s)(d)(m|b);default:return r}}),x4=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e,f=r.f,$=r.g,s=r.h,d=r.i,b=r.j;if(e>=320)return!1;var m=1<<e%32,g=e/32|0;switch(g){case 0:return(m&a)>0;case 1:return(m&t)>0;case 2:return(m&o)>0;case 3:return(m&c)>0;case 4:return(m&i)>0;case 5:return(m&f)>0;case 6:return(m&$)>0;case 7:return(m&s)>0;case 8:return(m&d)>0;case 9:return(m&b)>0;default:return!1}}),LK=Sg,PB=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e,f=r.f,$=r.g,s=r.h,d=r.i,b=r.j;if(e>=320)return r;var m=~(1<<e%32),g=e/32|0;switch(g){case 0:return Tr(m&a)(t)(o)(c)(i)(f)($)(s)(d)(b);case 1:return Tr(a)(m&t)(o)(c)(i)(f)($)(s)(d)(b);case 2:return Tr(a)(t)(m&o)(c)(i)(f)($)(s)(d)(b);case 3:return Tr(a)(t)(o)(m&c)(i)(f)($)(s)(d)(b);case 4:return Tr(a)(t)(o)(c)(m&i)(f)($)(s)(d)(b);case 5:return Tr(a)(t)(o)(c)(i)(m&f)($)(s)(d)(b);case 6:return Tr(a)(t)(o)(c)(i)(f)(m&$)(s)(d)(b);case 7:return Tr(a)(t)(o)(c)(i)(f)($)(m&s)(d)(b);case 8:return Tr(a)(t)(o)(c)(i)(f)($)(s)(m&d)(b);case 9:return Tr(a)(t)(o)(c)(i)(f)($)(s)(d)(m&b);default:return r}}),ks=je(function(e,r,a,t,o){var c=e+o,i=P(function(d,b,m){e:for(;;)if(d-c<0)if(r){var g=d+1,_=n(Cs,d,b),y=v(fr,d,r,m);d=g,b=_,m=y;continue e}else if(n(x4,d,b)){var g=d+1,_=n(PB,d,b),y=n(nf,d,m);d=g,b=_,m=y;continue e}else{var g=d+1,_=b,y=m;d=g,b=_,m=y;continue e}else return h(b,m)}),f=v(i,e,a,t),$=f.a,s=f.b;return I(e+o,$,s)}),xB=je(function(e,r,a,t,o){e:for(;;){var c=a>>>1;if(e.b){var i=e.a,f=e.b,$=(r<<1)+(a&1)-i,s=o+i;if($>=0){var d=f,b=$,m=c,g=t-1,_=s;e=d,r=b,a=m,t=g,o=_;continue e}else return{W:t-1,i9:$,kI:s,kQ:c}}else return{W:t,i9:r,kI:o,kQ:a}}}),jl=l(function(e,r){var a=e===32?r.aS<<r.W:((1<<e)-1&r.aS)<<r.W;return{W:r.W+e,bd:r.bd,aS:r.aS>>>e,ah:r.ah-e,kQ:a|r.kQ}}),Ss=function(e){return a_(e)},qf=P(function(e,r,a){var t=r,o=a;return l(function(c,i){var f=n(t,c,i),$=f.a,s=f.b,d=n(o,c,$),b=d.a,m=d.b;return h(b,n(e,s,m))})}),jB=P(function(e,r,a){var t=v(qf,to,r,Ss(_i(a.bd)-e)),o=n(Cl,t,a.bd);if(o.$)return We("BitReader.runDecoder: Unexpected end of Bytes");var c=o.a;return Ge(c)}),Of=function(e){return e_(!e)},wB=function(e){return e?v(qf,l(function(r,a){return r<<16|a}),Of(e),xl):v(qf,l(function(r,a){return a<<16|r}),Of(e),xl)},Ps=function(e){e:for(;;){var r=32-e.W;if(K(r,e.ah)<1&&e.ah>0)return Ge(n(jl,r,e));if(_i(e.bd)){var a=n(jl,e.ah,e),t=(function(){var g=_i(e.bd);switch(g){case 0:return I(0,0,S4(0));case 1:return I(1,8,xl);case 2:return I(2,16,Of(0));case 3:return I(3,24,wB(0));default:return I(4,32,P4(0))}})(),o=t.a,c=t.b,i=t.c,f=v(jB,o,i,a);if(f.$===1){var $=f.a;return We($)}else{var s=f.a,d=s.a,b=s.b,m={W:a.W,bd:b,aS:d,ah:c,kQ:a.kQ};e=m;continue e}}else return Ge(n(jl,e.ah,e))}},xs=l(function(e,r){return function(a){var t=a.W<16?Ps(a):Ge(a);if(t.$===1){var o=t.a;return We(o)}else{var c=t.a,i=A(xB,e,0,c.kQ,c.W,0),f=i.i9,$=i.kQ,s=i.W,d=i.kI,b=n(Br,d+f,r.gI);if(b.$===1)return We("Index into trans tree out of bounds");var m=b.a;return Ge(h(m,{W:s,bd:c.bd,aS:c.aS,ah:c.ah,kQ:$}))}}}),qn=l(function(e,r){return function(a){if(e){var t=K(a.W,e)<0?Ps(a):Ge(a);if(t.$===1){var o=t.a;return We(o)}else{var c=t.a,i=c.kQ&65535>>>16-e,f=c.kQ>>>e;return Ge(h(i+r,{W:c.W-e,bd:c.bd,aS:c.aS,ah:c.ah,kQ:f}))}}else return Ge(h(r,a))}}),Co=function(e){return function(r){return Ge(h(e,r))}},LB=W(function(e,r,a,t){var o=t.a,c=t.b,i=t.c;if(K(o,r+a)<0){var f=n(ne,k,zu(e.d7));return n(yo,function($){switch($){case 16:var s=n(ne,0,n(Je,o-1,i));return n(ht,n(ke,C(ks,o,s,c,i),xn),n(qn,2,3));case 17:return n(ht,n(ke,C(ks,o,0,c,i),xn),n(qn,3,3));case 18:return n(ht,n(ke,C(ks,o,0,c,i),xn),n(qn,7,11));case 0:return n(x4,o,c)?Co(xn(I(o+1,c,n(nf,o,i)))):Co(xn(I(o+1,c,i)));default:return Co(xn(I(o+1,n(Cs,o,c),v(fr,o,$,i))))}},n(xs,f,e))}else return Co(Gf(i))}),TB=Tr(0)(0)(0)(0)(0)(0)(0)(0)(0)(0),MB=W(function(e,r,a,t){var o=n(it,a,SB),c=(function(){var $=P(function(s,d,b){e:for(;;)if(s.b){var m=s.a,g=s.b;if(d.b){var _=d.a,y=d.b;if(_){var S=g,w=y,j=v(fr,m,_,b);s=S,d=w,b=j;continue e}else{var S=g,w=y,j=b;s=S,d=w,b=j;continue e}}else return b}else return b});return v($,o,t,ze)})(),i=v(ys,c,0,19),f=v(ct,l(function($,s){return Cs($)}),TB,c);return n(Sl,I(0,f,c),v(LB,i,e,r))}),zB=l(function(e,r){var a=function(t){var o=t.a,c=t.b;return o<=0?Co(Gf(Ae(c))):n(ht,function(i){return xn(h(o-1,n(D,i,c)))},r)};return n(Sl,h(e,k),a)}),DB=P(function(e,r,a){var t=function(o){return h(v(ys,o,0,e),v(ys,o,e,r))};return n(ht,t,n(yo,v(MB,e,r,a),n(zB,a,n(qn,3,0))))}),wl=P(function(e,r,a){var t=r,o=a;return function(c){var i=t(c);if(i.$===1){var f=i.a;return We(f)}else{var $=i.a,s=$.a,d=$.b,b=o(d);if(b.$===1){var f=b.a;return We(f)}else{var m=b.a,g=m.a,_=m.b;return Ge(h(n(e,s,g),_))}}}}),js=l(function(e,r){return v(wl,by,r,e)}),RB=W(function(e,r,a,t){return n(js,t,n(js,a,n(js,r,Co(e))))}),BB=n(yo,Q,C(RB,DB,n(qn,5,257),n(qn,5,1),n(qn,4,4))),ws=function(e){return function(r){return We(e)}},Ls=n(qn,1,0),AB=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=e%4;if(K(e,jr(a)*4+t)>-1)return L;if(K(e,jr(a)*4)>-1)return M(255&o>>>8*(3-c));var i=e/4|0,f=n(Br,i,a);if(f.$===1)return L;var $=f.a;return M(255&$>>>8*(3-c))}),IB=je(function(e,r,a,t,o){e:for(;;){var c=e%4,i=e/4|0;if(r<=0)return v(Ua,a,t,o);if(K(e+4,(jr(a)-1)*4+t)>-1){var f=n(AB,e,v(Ua,a,t,o));if(f.$===1)return v(Ua,a,t,o);var $=f.a,s=n(_s,$,v(Ua,a,t,o)),d=s.a,b=s.b,m=s.c,g=e+1,_=r-1,y=d,S=b,w=m;e=g,r=_,a=y,t=S,o=w;continue e}else{var j=n(Br,i,a);if(j.$===1)return v(Ua,a,t,o);var $=j.a,B=n(qe,4-c,r),E=$<<8*c,V=(function(){if(K(4-c,r)>0){var Ue=4-r,rr=3-c+1;return E>>Ue*8}else return E>>c*8})(),O=v(k4,B,V,v(Ua,a,t,o)),X=O.a,oe=O.b,ie=O.c,g=e+B,_=r-B,y=X,S=oe,w=ie;e=g,r=_,a=y,t=S,o=w;continue e}}}),FB=P(function(e,r,a){var t=a.a,o=a.b,c=a.c;return A(IB,e,r,t,o,c)}),TK=Q,gt=F9,VB=P(function(e,r,a){var t=a.c,o=a.d,c=l(function(i,f){if(i.$){var s=i.a;return v(gt,e,f,s)}else{var $=i.a;return v(gt,c,f,$)}});return v(gt,e,v(gt,c,r,t),o)}),j4=l(function(e,r){var a=function(i){return K(i,e)<0?0:(i-e)/e|0},t=l(function(i,f){var $=f.a,s=f.b;return h($+(1<<i),n(mf,{pH:$,dG:i},s))}),o=n(V$,30,a),c=v(VB,t,h(r,Lo),o).b;return c}),Ts=n(j4,2,1),EB=(function(e){var r=e;return v(ri,28,{pH:258,dG:0},r)})(n(j4,4,3)),w4=l(function(e,r){var a=r;return n(Br,e,a)}),HB=function(e){var r=n(w4,e-257,EB);if(r.$===1)return ws((function(){var t=Ts,o=t;return"index out of bounds in hardcodedLengthTable: requested index "+(He(e-257)+("but hardcodedLengthTable has length "+He(jr(o))))})());var a=r.a;return n(qn,a.dG,a.pH)},UB=l(function(e,r){var a=n(ne,k,zu(r.d7));return n(yo,function(t){var o=n(w4,t,Ts);if(o.$===1)return ws((function(){var i=Ts,f=i;return"index out of bounds in hardcodedDistanceTable: requested index "+(He(t)+("but hardcodedLengthTable has length "+He(jr(f))))})());var c=o.a;return n(ht,function(i){return e-i},n(qn,c.dG,c.pH))},n(xs,a,r))}),WB=l(function(e,r){var a=r.a,t=r.b,o=n(ne,k,zu(e.dY.d7));return n(yo,function(c){return c===256?Co(Gf(t)):c<256?Co(xn(h(a+1,n(_s,c,t)))):v(wl,l(function(i,f){return xn(h(a+i,v(FB,f,i,t)))}),HB(c),n(UB,a,e.lY))},n(xs,o,e.dY))}),L4=P(function(e,r,a){return n(Sl,h(r,a),WB(e))}),GB=l(function(e,r){var a=r;return l(function(t,o){var c=n(a,t,o),i=c.a,f=c.b,$=e(f),s=$;return n(s,t,i)})}),qB=t_,OB=function(e){var r=v(qf,to,Of(0),Of(0));return n(GB,function(a){var t=a.a,o=a.b;if(ee(t,~o&65535)){var c=e-4-t;return v(qf,to,Ss(t),Ss(c))}else return qB},r)},NB=function(e){var r=n(Cl,OB(_i(e.bd)),e.bd);if(r.$===1)return We("inflateUncompressedBlock: ran out of bounds");var a=r.a,t=a.a,o=a.b;return Ge(h(t,z(e,{bd:o})))},T4=function(e){var r=e.a,a=e.b,t=e.c,o=jr(r)*4;if(o){var c=o;return c+a}else return a},M4=l(function(e,r){var a=r.a,t=r.c,o=r.d,c=ja(e),i=br-ja(o)-c,f=v(Sp,br,o,e),$=n(e1,f,r);if(i<0){var s=v(Mt,i,c,e);return n(e1,s,$)}else return $}),JB=function(e){var r=e.a,a=e.c,t=e.d,o=l(function(c,i){if(c.$)return n(D,c,i);var f=c.a;return v(gt,o,i,f)});return{aw:v(gt,o,k,a),Z:r/br|0,aj:t}},z4=l(function(e,r){var a=e.d,t=r.a,o=r.c,c=r.d;if(K(t,br*4)<1){var i=l(function(f,$){if(f.$){var d=f.a;return n(M4,d,$)}else{var s=f.a;return v(gt,i,$,s)}});return n(M4,c,v(gt,i,e,o))}else{var i=l(function($,s){if($.$){var b=$.a;return n(r1,b,s)}else{var d=$.a;return v(gt,i,s,d)}});return n(F$,!0,n(r1,c,v(gt,i,JB(e),o)))}}),KB={d7:u([0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0]),gI:n(z4,ho(u([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])),n(cu,256,0))},ZB=function(e){var r=32-e.W,a=n(jl,n(qe,r,e.ah),e),t=a.ah>24?u([n(Pl,0,a.aS)]):a.ah>16?u([n(go,0,a.aS),_o(a.aS>>16)]):a.ah>8?u([n(go,0,a.aS)]):a.ah>1?u([_o(a.aS)]):k,o=a.W>24?u([n(Pl,0,a.kQ)]):a.W>16?u([n(go,0,a.kQ),_o(a.kQ>>16)]):a.W>8?u([n(go,0,a.kQ)]):a.W>1?u([_o(a.kQ)]):k;return kl(Wf(Y(o,Y(t,u([y4(a.bd)])))))},XB=function(e){return{W:0,bd:ZB(e),aS:0,ah:0,kQ:0}},YB=function(e){var r=e.W+e.ah,a=n(Kr,8,r),t=n(qn,a,0),o=t,c=o(e);if(c.$===1){var i=c.a;return We(i)}else{var f=c.a,$=f.b,s=Ps($);if(s.$===1){var i=s.a;return We(i)}else{var d=s.a;return Ge(h(0,XB(d)))}}},QB={d7:u([0,0,0,0,0,0,0,24,152,112,0,0,0,0,0,0]),gI:ho(u([256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,280,281,282,283,284,285,286,287,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]))},eA=function(e){var r=function(o){switch(o){case 0:return n(ht,function(c){return n(kB,c,e)},n(yo,function(c){return NB},YB));case 1:return v(L4,{lY:KB,dY:QB},T4(e),e);case 2:return n(yo,function(c){var i=c.a,f=c.b;return v(L4,{lY:f,dY:i},T4(e),e)},BB);default:return ws("invalid block type: "+(He(o)+" (only 0, 1 and 2 are valid block types)"))}},a=v(wl,l(function(o,c){return o+2*c}),Ls,Ls),t=l(function(o,c){return o?n(ht,Gf,r(c)):n(ht,xn,r(c))});return n(yo,Q,v(wl,t,Ls,a))},rA=n(ht,n(ke,gB,Dc),n(Sl,dB,eA)),aA=function(e){var r=n(lB,e,rA);if(r.$===1){var a=r.a;return We(a)}else{var t=r.a;return Ge(kl(Wf(n(N,y4,t))))}},nA=function(e){var r=aA(e);if(r.$===1)return L;var a=r.a;return M(a)},tA=nA,Nf=function(e){if(n2(e))return!0;switch(e){case"+":return!0;case"/":return!0;default:return!1}},Jf=function(e){var r=nt(e);if(r>=65&&r<=90)return r-65;if(r>=97&&r<=122)return r-97+26;if(r>=48&&r<=57)return r-48+26+26;switch(e){case"+":return 62;case"/":return 63;default:return-1}},Ms=W(function(e,r,a,t){if(Nf(e)&&Nf(r)){var o=Jf(r),c=Jf(e);if(t==="=")if(a==="="){var i=c<<18|o<<12,f=i>>16;return M(_o(f))}else if(Nf(a)){var $=Jf(a),i=c<<18|o<<12|$<<6,s=i>>8;return M(n(go,1,s))}else return L;else if(Nf(a)&&Nf(t)){var d=Jf(t),$=Jf(a),i=c<<18|o<<12|($<<6|d),s=i>>8,b=i;return M(Wf(u([n(go,1,s),_o(b)])))}else return L}else return L}),oA=l(function(e,r){e:for(;;){var a=Hc(n(Rc,4,e));r:for(;;)if(a.b)if(a.b.b)if(a.b.b.b)if(a.b.b.b.b){if(a.b.b.b.b.b)break r;var t=a.a,o=a.b,c=o.a,i=o.b,f=i.a,$=i.b,s=$.a,d=C(Ms,t,c,f,s);if(d.$)return L;var b=d.a,m=n(Ma,4,e),g=n(D,b,r);e=m,r=g;continue e}else{var t=a.a,_=a.b,c=_.a,y=_.b,f=y.a,S=C(Ms,t,c,f,"=");if(S.$===1)return L;var b=S.a;return M(n(D,b,r))}else{var t=a.a,w=a.b,c=w.a,j=C(Ms,t,c,"=","=");if(j.$===1)return L;var b=j.a;return M(n(D,b,r))}else break r;else return M(r);return L}}),cA=function(e){return n(de,n(ke,Ae,Wf),n(oA,e,k))},iA=function(e){return n(de,kl,cA(e))},fA=iA,$A=F7,D4=l(function(e,r){return n(Rn,"{",$A(e))?n(_4,r,e):n(hs,_4(r),n(hs,n(ke,aB,gs(QR)),n(hs,n(ke,tA,gs(YR)),n(gs,XR,fA($B(e))))))}),uA=P(function(e,r,a){return n(Z0,0,$o(u([h("v",gl(g4)),h("cur",gl(r)),h("items",n(bn,function(t){var o=t.a,c=t.b;return $o(u([h("n",kr(o)),h("d",e(c))]))},a))])))}),Ll=function(e){var r=e;return vr(r.p)},lA=function(e){var r=e;return n(N,function(a){return h(a.ss,a.bZ)},wt(r.V))},vA=function(e){var r=e;return v(uA,r.l4,Ll(r.V),lA(r))},sA=Xt("levelsOut",Q),dA=l(function(e,r){return $o(u([h("tag",kr(e)),h("text",kr(r))]))}),R4=function(e){return sA(n(dA,"store",vA(e)))},zs=function(e){if(e.$)return L;var r=e.a;return M(r)},bA=l(function(e,r){var a=e.k2;if(a.$){var o=e.kG;if(o.$)return L;var t=o.a;return n(de,function(i){return h(i,R4(i))},zs(n(D4,t,r)))}else{var t=a.a;return n(de,function(c){return h(c,le)},zs(n(D4,t,r)))}}),pA=function(e){return{$:2,a:e}},B4=pA,mA=l(function(e,r){var a=r;return z(a,{fH:e(a.fH)})}),Ds=l(function(e,r){var a=r;return z(a,{V:e(a.V)})}),hA=function(e){return Ds(mA(function(r){return z(r,{bZ:e(r.bZ)})}))},Rs=l(function(e,r){return z(r,{a1:n(hA,e,r.a1)})}),Bs=function(e){return z(e,{dM:!0})},gA=l(function(e,r){return z(r,{pE:e})}),_A=l(function(e,r){var a=r;return z(a,{p:n(D,a.fH,a.p),fH:e})}),yA=function(e){return 1+v(ve,function(r){return ge(r.bF)},-1,wt(e))},CA=P(function(e,r,a){var t=a;return z(t,{V:n(_A,{bF:yA(t.V),bZ:r,ss:e},t.V)})}),kA=l(function(e,r){var a=r;if(e.$)return a;var t=e.a,o=n(ft,t,a.V),c=$t(o);return v(CA,c.ss+" copy",c.bZ,z(a,{V:o}))}),SA=function(e){var r=e,a=r.r;if(a.b){var t=a.a,o=a.b;return z(r,{r:o,fH:t})}else{var c=r.p;if(c.b){var t=c.a,o=c.b;return z(r,{p:o,fH:t})}else return r}},PA=l(function(e,r){if(e.$===1){var a=e.a;return n(Ds,n(ke,ft(a),SA),r)}else return r}),xA=l(function(e,r){if(e.$===6){var a=e.a;return n(Ds,ft(a),r)}else return r}),jA=l(function(e,r){var a=r;return e.$===5?z(a,{dT:!a.dT}):a}),wA=l(function(e,r){var a=r;return{r:n(N,e,a.r),p:n(N,e,a.p),fH:e(a.fH)}}),LA=l(function(e,r){var a=r;switch(e.$){case 2:var t=e.a;return z(a,{eD:M(t)});case 3:var o=e.a,c=a.eD;if(c.$)return a;var t=c.a;return z(a,{V:n(wA,function(f){return ee(f.bF,t)?z(f,{ss:o}):f},a.V)});case 4:return z(a,{eD:L});default:return a}}),TA=l(function(e,r){return n(jA,e,n(LA,e,n(xA,e,n(PA,e,n(kA,e,r)))))}),MA=W(function(e,r,a,t){switch(a.$){case 1:var o=a.a;return h(z(t,{cC:o}),sc);case 2:return h(Bs(n(Rs,gA(t.cC),t)),sc);case 3:var c=a.a;return h(Bs(z(t,{a1:n(TA,c,t.a1)})),sc);case 4:var i=a.a,f=n(bA,i,t.a1);if(f.$)return h(t,sc);var $=f.a,s=$.a,d=$.b;return h(z(t,{a1:s}),B4(d));default:return h(t,sc)}}),A4=function(e){var r=e.iC,a=e.iF,t=function(o){return o-pa(o)};return t(r)+t(a)<1?v(hl,0,pa(r),pa(a)):v(hl,1,pa(r),pa(a))},zA=P(function(e,r,a){var t=a;return z(t,{j:v(fr,t.oV(e),h(e,r),t.j)})}),DA=P(function(e,r,a){return z(a,{ui:v(zA,e,r,a.ui)})}),RA=l(function(e,r){return e.s6.rO?n(Rs,n(DA,A4(r.fd),r.cC),r):r}),BA=l(function(e,r){return e.s6.rO?Bs(r):r}),AA=l(function(e,r){var a=d4(e);return ee(a,r.hq)?r:z(r,{dd:v4(mn(e).ka),hq:a})}),IA=l(function(e,r){var a=r;return z(a,{j:n(nf,a.oV(e),a.j)})}),FA=l(function(e,r){return z(r,{ui:n(IA,e,r.ui)})}),VA=l(function(e,r){return e.hD.kz&&e.s6.rO?n(Rs,FA(A4(r.fd)),r):r}),EA=l(function(e,r){return r.dM&&!e.s6.rO?h(z(r,{dM:!1}),B4(R4(r.a1))):h(r,sc)}),I4="your-levels",Kf=36,HA={la:function(e){return k},lM:function(e){return ce("")},ms:cr(k),bF:I4,oo:Kf,oq:function(e){return cr(k)},oV:function(e){return He(e.bF)}},UA=function(e){return{$:1,a:e}},WA=l(function(e,r){var a=e+"-handle-";return pr(n(xr,function(t){return n(Rn,a,t)?Bc(n(Ma,Ta(a),t)):L},r))}),GA=W(function(e,r,a,t){return v(or,0,r-1,a+pa(.5+t/e))}),qA=l(function(e,r){return z(r,{pi:r.pi+.5*e.k6,pk:-r.pk+.5*e.ju})}),OA=function(e){return n(qA,e.du,{pi:e.s6.pi,pk:e.s6.pk})},Tl=OA,F4=W(function(e,r,a,t){return C(GA,e.oo,_f(a),t.aX,Tl(r).pk-t.jt)}),NA=function(e){var r=e,a=r.p;if(a.b){var t=a.a,o=a.b;return z(r,{p:o,fH:t})}else{var c=r.r;if(c.b){var t=c.a,o=c.b;return z(r,{r:o,fH:t})}else return r}},JA=l(function(e,r){return h(n(it,e,r),n(Vn,e,r))}),V4=l(function(e,r){var a=n(JA,e,wt(NA(r))),t=a.a,o=a.b;return{r:o,p:Ae(t),fH:$t(r)}}),KA=P(function(e,r,a){var t=Ll(a);if(ee(e,r))return a;if(ee(t,e))return n(V4,r,a);var o=K(e,t)<0&&K(r,t)>-1?t-1:K(e,t)>0&&K(r,t)<1?t+1:t;return n(ft,o,n(V4,r,n(ft,e,a)))}),ZA=W(function(e,r,a,t){if(t.$){var i=t.a;if(r.s6.rO)return h(t,L);var f=C(F4,e,r,a,i);return h(s4,M(v(KA,i.aX,f,a)))}else if(r.s6.je){var o=n(WA,e.bF,r.s6.qS);if(o.$)return h(ps,L);var c=o.a;return h(UA({aX:c,jt:Tl(r).pk}),L)}else return h(ps,L)}),E4=function(e){return z(e,{s6:e.tf})},XA=l(function(e,r){var a=r,t=C(ZA,HA,E4(e),a.V,a.gn),o=t.a,c=t.b;if(c.$)return h(z(a,{gn:o}),!1);var i=c.a;return h(z(a,{gn:o,V:i}),!0)}),YA=l(function(e,r){var a=n(XA,e,r.a1),t=a.a,o=a.b;return z(r,{dM:r.dM||o,a1:t})}),H4=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b,o=e(a);if(o.$){var i=e,f=t;e=i,r=f;continue e}else{var c=o.a;return M(c)}}else return L}),QA=l(function(e,r){return n(H4,function(a){var t=a.a,o=a.b,c=h(ee(t,e),o);if(c.a&&!c.b.$){var i=c.b,f=i.b;return M(f)}else return L},r.be)}),eI=l(function(e,r){return n(ne,0,n(H4,QA(e),r))}),rI=l(function(e,r){return n(eI,e,r.cd)}),U4=rI,aI=function(e){return{O:e.O,B:e.B,aE:e.aE,fp:e.fp}},nI=function(e){return{$:0,a:e}},tI=p7,oI=nI({eN:2*tI(.5)}),W4=function(e){return aI({O:{pi:0,pk:0,R:n(U4,"camera distance",e)},B:{pi:0,pk:0,R:0},aE:oI,fp:{pi:0,pk:1,R:0}})},cI=function(e){var r=e.pi,a=e.pk;return{iC:2/ya(3)*r,iF:-1/ya(3)*r+a}},Or=P(function(e,r,a){return{pi:e,pk:r,R:a}}),iI={nM:I(0,0,1),a0:v(Or,0,0,0)},As=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return a*c+t*i+o*f}),Qa=l(function(e,r){var a=r.a,t=r.b,o=r.c;return I(e*a,e*t,e*o)}),dc=l(function(e,r){var a=e.a,t=e.b,o=e.c;return{pi:r.pi+a,pk:r.pk+t,R:r.R+o}}),G4=l(function(e,r){return I(r.pi-e.pi,r.pk-e.pk,r.R-e.R)}),fI=l(function(e,r){var a=n(As,e.eB,r.nM);if(Me(a)<1e-10)return L;var t=n(G4,e.a0,r.a0),o=n(As,t,r.nM)/a;return M(n(dc,n(Qa,o,e.eB),e.a0))}),Is=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return I(t*f-o*i,o*c-a*f,a*i-t*c)}),q4=function(e){var r=e.a,a=e.b,t=e.c;return ya(n(ia,r,2)+n(ia,a,2)+n(ia,t,2))},Zf=function(e){var r=q4(e);return n(Qa,1/r,e)},$I=function(e){return I(e.pi,e.pk,e.R)},uI=function(e){var r=$I(e.fp),a=Zf(n(G4,e.O,e.B)),t=Zf(n(Is,a,r)),o=n(Is,t,a);return{jo:a,kp:o,bM:t}},Xf=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return I(a+c,t+i,o+f)}),lI=n(ve,Xf,I(0,0,0)),O4=d7,vI=l(function(e,r){var a=r.pi,t=r.pk;return h(2*a/e.k6-1,1-2*t/e.ju)}),sI=P(function(e,r,a){var t=r.k6/r.ju,o=n(vI,r,a),c=o.a,i=o.b,f=uI(e),$=f.bM,s=f.kp,d=f.jo,b=e.aE;if(b.$){var S=b.a.pb,g=S/2,_=g*t,w=n(dc,n(Qa,i*g,s),n(dc,n(Qa,c*_,$),e.O));return{eB:Zf(d),a0:w}}else{var m=b.a.eN,g=O4(m/2),_=g*t,y=Zf(lI(u([d,n(Qa,c*_,$),n(Qa,i*g,s)])));return{eB:y,a0:e.O}}}),dI=W(function(e,r,a,t){return n(fI,v(sI,r,a,t),e)}),bI=dI(iI),pI=l(function(e,r){var a=v(bI,W4(e),e.du,Tl(e));if(a.$===1)return r;var t=a.a;return z(r,{fd:cI({pi:t.pi,pk:t.pk})})}),mI=P(function(e,r,a){return n(EA,e,n(YA,e,n(BA,e,n(VA,e,n(RA,e,n(pI,e,n(AA,r,a)))))))}),hI=function(e){return{$:3,a:e}},gI={$:5},_I=function(e){return{$:1,a:e}},yI=function(e){return{$:0,a:e}},CI=function(e){return{$:2,a:e}},kI=function(e){return cr(u([be(n(Z,function(r){return r.kV},e)),Cn(u([be(n(Z,function(r){return r.bw},e))]))]))},MK=2,SI=l(function(e,r){if(e.$)return k;var a=e.a;return n(Pn,a,r)}),PI=l(function(e,r){return n(SI,e.sO,{eB:2,e$:r,tK:L})}),xI=l(function(e,r){return cr(u([he(r.mV?n(Z,function(a){return a.kJ},e):C(w1,0,0,0,0)),n(F,"transition","background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Cn(u([he(n(Z,function(a){return a.kJ},e))]))]))}),zK=0,DK=0,jI=l(function(e,r){return n(fl,e,{fE:0,f2:n(ke,function(a){return a.ka},function(a){return a.ti}),f3:Ye.uh,e$:"Delete level",bm:r.bm,gt:0,bs:r.bs})}),wI=l(function(e,r){return n(fl,e,{fE:0,f2:function(a){return a.bw},f3:Ye.qK,e$:"Duplicate level",bm:r.bm,gt:0,bs:r.bs})}),LI=l(function(e,r){return n(fl,e,{fE:0,f2:n(ke,function(a){return a.ka},function(a){return a.uS}),f3:Ye.s_,e$:"Rename level",bm:r.bm,gt:0,bs:r.bs})}),TI=function(e){return{$:6,a:e}},MI=function(e){return{$:3,a:e}},N4={$:4},zI=J1("autofocus"),DI={qC:0,uv:"block"},RI=function(e){return n(R,function(r){return r==="Enter"?ae(e):En("not Enter")},n(x,"key",Ce))},BI=function(e){return n(Gr,"blur",ae(e))},AI=l(function(e,r){return n(G,u([H(u([ye(Xe(100)),se,Oe(we),C(Df,$e,Gn.kA,$e,Gn.pj)]))]),u([n(tc,u([oc("text"),cc(r),zI(!0),vi(MI),BI(N4),n(Gr,"keydown",RI(N4)),H(u([a5(DI),Le(Xe(100)),di(si),n(Ir,T(3),T(6)),he(n(Z,function(a){return a.kJ},e)),be(n(Z,function(a){return a.kU},e)),v(lt,T(1),vt,n(Z,function(a){return a.bw},e)),dr(Ja.e6),n(F,"font-family",Xa.sm),cr(kn.g_),Ka(lr),n(F,"user-select","text")]))]),k)]))}),II=P(function(e,r,a){return ee(r,M(a.dU.bF))?n(AI,e,a.dU.ss):n(G,u([H(u([C(Df,$e,Gn.e6,$e,Gn.pj),cr(kn.g_),ye(Xe(100)),pt(T(Kf)),Ku(T1),It(Bt),n(F,"text-overflow","ellipsis"),Ar(Aa),be(a.mV?n(Z,function(t){return t.kU},e):n(Z,function(t){return t.kV},e))])),d5(TI(a.jw)),M5(a.dU.ss)]),u([ce(a.dU.ss)]))}),FI=l(function(e,r){return n(Rt,Y(u([H(Y(C(w5,e,r.gt,r.fE,r.f2),u([ui($e)]))),l5(r.bm),n(nr,"aria-label",r.e$)]),r.bs),u([r.f3]))}),VI=l(function(e,r){return n(FI,e,{fE:0,f2:function(a){return a.bw},f3:Ye.tJ,e$:"Copy share link to this level",bm:r.bm,gt:0,bs:r.bs})}),EI=P(function(e,r,a){return{la:function(t){var o=PI(a),c=(function(){var s=a.sM;if(s.$)return k;var d=s.a;return u([n(VI,e,{bm:function(b){return v(d,b,t.dU.ss,t.dU.bZ)},bs:o("Copy share link to this level")})])})(),i=n(LI,e,{bm:a.eb(CI(t.dU.bF)),bs:o("Rename level")}),f=n(wI,e,{bm:a.eb(yI(t.jw)),bs:o("Duplicate level")}),$=n(jI,e,{bm:a.eb(_I(t.jw)),bs:o("Delete level")});return Y(u([i,f]),Y(c,u([$])))},lM:function(t){return n(No,a.eb,v(II,e,r,t))},ms:kI(e),bF:I4,oo:Kf,oq:xI(e),oV:function(t){return He(t.bF)}}}),HI=l(function(e,r){var a=e.aX,t=e.oU;return ee(r,a)?t:K(a,t)<0&&K(r,a)>0&&K(r,t)<1?r-1:K(a,t)>0&&K(r,t)>-1&&K(r,a)<0?r+1:r}),UI=l(function(e,r){return C1(u([n(ti,"."+(e+(", ."+(e+" *"))),u([Ar(_m)])),n(ti,"."+r,u([bt(lr)]))]))}),WI=function(e){return C1(u([n(ti,"."+(e+(":hover ."+(e+"-handle"))),u([Sn(Er(.4))])),n(ti,"."+(e+(" ."+(e+"-handle:hover"))),u([Sn(Er(1))])),n(ti,"."+(e+(":hover ."+(e+"-actions"))),u([Sn(Er(1))]))]))},GI=function(e){return!!e.$},qI=function(e){return v(Ru,"alignSelf","align-self",e(Bu))},OI=pe("stretch"),J4=function(e){return n(G,u([H(u([ac(_e(1)),B5($e),qI(OI)]))]),u([e]))},NI=l(function(e,r){return pr(n(Vn,e,wt(r)))}),JI=n(Nu,u([Ju("0 0 24 24"),mt("currentColor"),Un(u([Le(T(18)),ye(T(18))]))]),n(N,function(e){var r=e.a,a=e.b;return n(qm,u([Om(He(r)),Nm(He(a)),Jm("2")]),k)},u([h(9,5),h(15,5),h(9,12),h(15,12),h(9,19),h(15,19)]))),K4=P(function(e,r,a){return r<=1?n(G,u([H(u([Le(T(e.oo)),Fr($e)]))]),k):n(G,u([rc(e.bF+("-handle-"+He(a))),Wn(e.bF+"-row-handle"),H(u([se,Oe(we),Xr(we),Le(T(e.oo)),ye(T(e.oo)),Fr($e),Ar(Bm),Sn($e),n(F,"transition","opacity 0.1s ease, color 0.1s ease"),e.ms]))]),u([JI]))}),KI=W(function(e,r,a,t){var o=n(NI,t.aX,a);if(o.$===1)return ce("");var c=o.a,i={jw:t.aX,mV:ee(t.aX,Ll(a)),dU:c},f=Tl(r).pk-t.jt,$=_f(a),s=v(or,-t.aX*e.oo,($-1-t.aX)*e.oo,f);return n(G,u([H(u([e.oq(i),he(li),hr(Dt),Za($e),vo($e),Na(T(t.aX*e.oo)),ye(T(e.oo)),se,Oe(we),pi(es(T(s))),n(F,"box-shadow","0 4px 12px rgba(0, 0, 0, 0.25)"),bt(lr)]))]),u([v(K4,e,$,t.aX),J4(e.lM(i))]))}),Fs=l(function(e,r){return e?r:cr(k)}),ZI=l(function(e,r){return n(G,u([Wn(e+"-actions"),H(u([se,Oe(we),n(F,"gap","4px"),M1(T(6)),Sn($e),n(F,"transition","opacity 0.1s ease")]))]),r)}),XI=pe("visibility"),YI=function(e){var r=e.lK,a=e.my,t=e.lQ,o=e.fP,c=e.f6,i=e.lh,f=e.on;return n(G,u([Wn(a),H(u([n(Fs,!c,r.oq(f)),ye(T(r.oo)),se,Oe(we),pi(es(T((o-f.jw)*r.oo))),n(Fs,i,n(F,"transition","transform 0.12s ease")),n(F,"user-select","none"),n(Fs,c,XI(Bt))]))]),u([v(K4,r,t,f.jw),J4(r.lM(f)),n(ZI,a,r.la(f))]))},QI=W(function(e,r,a,t){var o=Ll(a),c=e.bF+"-row",i=GI(t),f=_f(a),$=l(function(b,m){var g=(function(){if(t.$){var y=t.a;return{fP:n(HI,{aX:y.aX,oU:C(F4,e,r,a,y)},b),f6:ee(b,y.aX)}}else return{fP:b,f6:!1}})(),_={jw:b,mV:ee(b,o),dU:m};return h(e.oV(m),YI({lh:i,lK:e,lQ:f,fP:g.fP,my:c,f6:g.f6,on:_}))}),s=e.bF+"-list",d=(function(){if(t.$){var b=t.a;return u([h("reorderable-list:dragging",n(UI,s,c)),h("reorderable-list:lifted",C(KI,e,r,a,b))])}else return u([h("reorderable-list:hover-reveal",WI(c))])})();return v(W1,"div",u([Wn(s),H(u([hr(Xo),se,wr(fa)]))]),Y(n(Oa,$,wt(a)),d))}),eF=function(e){return n(G,u([H(u([Le(T(16)),ye(T(16)),se,Oe(we),Xr(we)]))]),u([e?Ye.p5:Ye.p6]))},rF=function(e){return n(G,u([H(u([se,Oe(we),n(F,"gap","4px")]))]),e.ec)},aF=P(function(e,r,a){return n(G,u([H(u([se,Oe(we),ye(T(Kf)),Ou(Gn.kA),M1(T(6)),he(n(Z,function(t){return t.kK},e)),n(F,"user-select","none")]))]),u([n(G,u([H(u([se,Oe(we),ac(_e(1)),n(F,"gap","6px"),Ar(Aa),cr(kn.g_),Ia(_e(600)),be(n(Z,function(t){return t.kV},e))])),dt(r.h1)]),u([eF(a),ce(r.iA)])),rF(r)]))}),nF=W(function(e,r,a,t){var o=t,c={h1:a.eb(gI),iA:"Levels",ec:a.ec},i=o.dT?_f(o.V)*Kf:0;return n(G,u([H(u([dr(Ja.e6),It(Bt),he(n(Z,function(f){return f.kM},e)),qu.l0]))]),u([v(aF,e,c,o.dT),n(G,u([H(u([ye(T(i)),It(Bt),n(F,"transition","height 160ms cubic-bezier(0.33, 1, 0.68, 1)")]))]),u([C(QI,v(EI,e,o.eD,a),E4(r),o.V,o.gn)]))]))}),tF=P(function(e,r,a){return n(G,u([H(u([se,wr(fa),n(F,"gap","12px")]))]),u([n(G,u([H(u([Vr(T(16)),Ia(_e(500)),be(n(Z,function(t){return t.kU},r))]))]),u([ce("Levels")])),C(nF,r,e,{sM:L,sO:L,eb:hI,ec:k},a.a1)]))}),oF={$:2},cF=l(function(e,r){return n(S5,e,{f3:L,rM:!1,e$:r.e$,bm:r.bm,gt:1,uw:1})}),Ml=l(function(e,r){var a=e.aY,t=e.kx,o=r;return n(ne,co,n(ha,Br(v(or,0,Hf-1,t)),n(Br,v(or,0,bs-1,a),o)))}),iF=function(e){switch(e){case 0:return"neutral";case 1:return"red";case 2:return"yellow";case 3:return"green";case 4:return"cyan";case 5:return"blue";default:return"magenta"}},fF=l(function(e,r){return n(G,u([H(u([se,Oe(we),n(F,"gap","8px"),Ba(T(8))]))]),u([n(G,u([H(u([Le(T(24)),ye(T(24)),dr(T(4)),he(ar(n(Ml,r.cC,r.dd)))]))]),k),n($a,u([H(u([be(n(Z,function(a){return a.kV},e))]))]),u([ce(iF(r.cC.aY)+(" \xB7 shade "+He(r.cC.kx)))]))]))}),$F=z(oi,{uv:"column-reverse"}),uF=function(e){return{$:1,a:e}},lF=P(function(e,r,a){var t=ee(a,r.cC);return n(G,u([H(u([Le(T(20)),ye(T(20)),he(ar(n(Ml,a,r.dd))),v(lt,T(t?3:0),vt,n(Z,function(o){return o.kU},e)),Ar(Aa)])),dt(uF(a))]),k)}),vF=P(function(e,r,a){return n(G,u([H(u([se,wr($F),n(F,"gap","2px")]))]),n(N,function(t){return v(lF,e,r,{aY:a,kx:t})},n(qa,0,Hf-1)))}),sF=l(function(e,r){return n(G,u([H(u([se,n(F,"gap","2px"),Ba(T(8))]))]),n(N,n(vF,e,r),n(qa,0,bs-1)))}),dF=l(function(e,r){return n(G,u([H(u([Ba(T(16))]))]),u([n(G,u([H(u([Vr(T(20))]))]),u([ce("Color Palette")])),n(fF,e,r),n(sF,e,r),n(cF,e,{e$:"Set selected as background",bm:oF})]))}),bF=function(e){return n(G,u([H(u([Ba(T(16))]))]),u([n(G,u([H(u([Vr(T(20))]))]),u([ce("Instructions")])),n(G,k,u([ce("- Press mouse to add trixel")])),n(G,k,u([ce("- Hold shift and press mouse to remove trixel")])),n(G,k,u([ce("- Panning: SCROLL or SPACE + DRAG")])),n(G,k,u([ce("- Zooming: CTRL + SCROLL")]))]))},pF=P(function(e,r,a){return u([{g_:bF(r),f3:Ye.rv,bF:"instructions",tK:L,a9:n(ke,function(t){return t.ka},function(t){return t.r2}),iA:"Instructions"},{g_:n(dF,r,a),f3:Ye.ka,bF:"colors",tK:L,a9:n(ke,function(t){return t.ka},function(t){return t.rn}),iA:"Color palette"},{g_:v(tF,e,r,a),f3:Ye.q8,bF:"levels",tK:L,a9:n(ke,function(t){return t.ka},function(t){return t.pL}),iA:"Levels"}])}),mF=function(e){return{$:4,a:e}},hF=function(e){var r=function(a){return zs(n(g3,n(x,a,Ce),e))};return{nU:n(ne,"",r("origin")),n$:n(ne,"",r("path")),kG:r("stored"),k2:r("urlBlob")}},gF=T$("levelsIn",$u),_F=function(e){return gF(n(ke,hF,e))},yF=P(function(e,r,a){return _F(mF)}),Z4=function(e){var r=e;return $t(r.V).bZ},CF=function(e){return{$:1,a:e}},kF=function(e){return{lI:e,bK:1,b2:CF({hQ:0,ig:1}),b3:L}},zl=function(e){return{$:0,a:e}},Yf=function(e){return{$:0,a:e}},X4=function(e){return{$:0,a:e}},Vs=l(function(e,r){return X4({dK:u([r]),kY:e})}),Y4=function(e){var r=e.a,a=e.b,t=e.c;return Vs({gp:zl(0),gr:Yf(1),gJ:v(Or,r,a,t)})},Q4=function(e){return Y4(I(e,0,0))},e6=function(e){return Y4(I(0,e,0))},r6=function(e){return{$:1,a:e}},Es=function(e){var r=e.a,a=e.b,t=e.c;return v(Or,r,a,t)},Dl=l(function(e,r){var a=r.a,t=r.b,o=r.c;return n(Xf,n(Qa,a,e.pi),n(Xf,n(Qa,t,e.pk),n(Qa,o,e.R)))}),a6=l(function(e,r){return Es(n(Dl,e,I(r.pi,r.pk,r.R)))}),n6=P(function(e,r,a){var t=I(-e.a0.pi,-e.a0.pk,-e.a0.R),o=I(e.a0.pi,e.a0.pk,e.a0.R),c=Ha(r),i=n(dc,t,a),f=I(i.pi,i.pk,i.R),$=Ea(r),s=Zf(e.eB),d=n(As,s,f),b=n(Xf,n(Qa,$,f),n(Xf,n(Qa,c,n(Is,s,f)),n(Qa,1-$,n(Qa,d,s))));return n(dc,o,Es(b))}),t6=l(function(e,r){var a=function(t){var o=v(n6,{eB:e,a0:v(Or,0,0,0)},r,Es(t));return I(o.pi,o.pk,o.R)};return{pi:a(I(1,0,0)),pk:a(I(0,1,0)),R:a(I(0,0,1))}}),SF=l(function(e,r){var a=e.a0,t=n(t6,e.eB,r),o=n(a6,t,a);return Vs({gp:r6(t),gr:Yf(1),gJ:v(Or,a.pi-o.pi,a.pk-o.pk,a.R-o.R)})}),PF=function(e){return n(SF,{eB:I(0,0,1),a0:v(Or,0,0,0)},e)},xF=l(function(e,r){return Vs({gp:zl(0),gr:Yf(r),gJ:v(Or,e.pi*(1-r),e.pk*(1-r),e.R*(1-r))})}),o6=function(e){var r=e.iC,a=e.iF;return{pi:ya(3)/2*r,pk:1/2*r+a}},jF=function(e){return{$:14,a:e}},wF=l(function(e,r){return jF({H:e,k4:r})}),LF=P(function(e,r,a){var t=a.a,o=t.a,c=t.b,i=t.c,f=a.b,$=(function(){var _=o6((function(){return o?{iC:.6666666666666666,iF:.6666666666666666}:{iC:.3333333333333333,iF:.3333333333333333}})());return{pi:_.pi,pk:_.pk,R:0}})(),s=n(wF,kF(n(Ml,f,r)),I({pi:0,pk:0,R:0},{pi:Ea(st(30)),pk:Ha(st(30)),R:0},{pi:0,pk:1,R:0})),d=n(e6,1+Ha(st(30)),n(Q4,Ea(st(30)),n(PF,st(180),s))),b=o6({iC:c,iF:i}),m=b.pi,g=b.pk;return n(e6,g,n(Q4,m,v(xF,$,n(U4,"trixel scale",e),(function(){return o?d:s})())))}),c6={gp:zl(0),gr:Yf(1),gJ:v(Or,0,0,0)},i6=function(e){return X4({dK:e,kY:c6})},TF=l(function(e,r){var a=Z4(r.a1);return i6(n(N,n(LF,e,r.dd),o4(a.ui)))}),MF=gm,zF=function(e){return{$:12,a:e}},DF=function(e){return{$:2,a:e}},RF=function(e){return{$:15,a:e}},BF=function(e){return{$:14,a:e}},AF=function(e){return{$:9,a:e}},IF=function(e){return{$:11,a:e}},FF=function(e){return{$:8,a:e}},VF=function(e){return{$:18,a:e}},EF=function(e){return{$:1,a:e}},HF=function(e){return{$:5,a:e}},UF=function(e){return{$:16,a:e}},WF=function(e){return{$:17,a:e}},GF=function(e){return{$:4,a:e}},qF=function(e){return{$:19,a:e}},OF=function(e){return{$:3,a:e}},NF=function(e){return{$:0,a:e}},JF=function(e){return{$:20,a:e}},KF=function(e){return{$:10,a:e}},ZF=function(e){return{$:7,a:e}},XF=function(e){return{$:6,a:e}},YF=function(e){return{$:13,a:e}},f6=n6({eB:I(0,0,1),a0:v(Or,0,0,0)}),$6=l(function(e,r){if(e.$){var t=e.a;return n(a6,t,r)}else{var a=e.a;return n(f6,a,r)}}),u6=l(function(e,r){if(e.$){var t=e.a;return v(Or,r.pi*t.pi,r.pk*t.pk,r.R*t.R)}else{var a=e.a;return v(Or,r.pi*a,r.pk*a,r.R*a)}}),l6=l(function(e,r){return v(Or,r.pi+e.pi,r.pk+e.pk,r.R+e.R)}),QF=l(function(e,r){return{pi:n(Dl,e,r.pi),pk:n(Dl,e,r.pk),R:n(Dl,e,r.R)}}),eV=function(e){return n(t6,I(0,0,1),e)},v6=function(e){if(e.$){var a=e.a;return a}else{var r=e.a;return eV(r)}},rV=l(function(e,r){var a=h(e,r);if(!a.a.$&&!a.b.$){var t=a.a.a,o=a.b.a;return zl(t+o)}else return r6(n(QF,v6(e),v6(r)))}),Hs=function(e){return{$:1,a:e}},aV=l(function(e,r){var a=h(e,r);if(a.a.$)if(a.b.$){var c=a.a.a,i=a.b.a;return Hs(v(Or,c.pi*i.pi,c.pk*i.pk,c.R*i.R))}else{var c=a.a.a,t=a.b.a;return Hs(v(Or,c.pi*t,c.pk*t,c.R*t))}else if(a.b.$){var t=a.a.a,c=a.b.a;return Hs(v(Or,t*c.pi,t*c.pk,t*c.R))}else{var t=a.a.a,o=a.b.a;return Yf(t*o)}}),nV=l(function(e,r){return{gp:n(rV,e.gp,r.gp),gr:n(aV,e.gr,r.gr),gJ:n(l6,e.gJ,n($6,e.gp,n(u6,e.gr,r.gJ)))}}),s6=P(function(e,r,a){switch(r.$){case 0:var t=r.a.kY,o=r.a.dK,c=n(nV,e,t);return v(ve,s6(c),a,o);case 1:var f=r.a;return n(D,h(e,NF(f)),a);case 2:var f=r.a;return n(D,h(e,EF(f)),a);case 3:var f=r.a;return n(D,h(e,DF(f)),a);case 4:var f=r.a;return n(D,h(e,OF(f)),a);case 5:var f=r.a;return n(D,h(e,GF(f)),a);case 6:var f=r.a;return n(D,h(e,HF(f)),a);case 7:var f=r.a;return n(D,h(e,XF(f)),a);case 8:var f=r.a;return n(D,h(e,ZF(f)),a);case 9:var i=r.a;return n(D,h(e,FF(i)),a);case 10:var f=r.a;return n(D,h(e,AF(f)),a);case 11:var f=r.a;return n(D,h(e,KF(f)),a);case 12:var f=r.a;return n(D,h(e,IF(f)),a);case 13:var f=r.a;return n(D,h(e,zF(f)),a);case 14:var f=r.a;return n(D,h(e,YF(f)),a);case 15:var f=r.a;return n(D,h(e,BF(f)),a);case 16:var f=r.a;return n(D,h(e,RF(f)),a);case 17:var f=r.a;return n(D,h(e,UF(f)),a);case 18:var f=r.a;return n(D,h(e,WF(f)),a);case 19:var $=r.a;return n(D,h(e,VF($)),a);case 20:var $=r.a;return n(D,h(e,qF($)),a);default:var $=r.a;return n(D,h(e,JF($)),a)}}),d6=function(e){return Ae(v(s6,c6,e,k))},RK=Q,On={pi:0,pk:0,R:0},Us=function(e){var r=e;return r.pi},Ws=function(e){var r=e;return r.pk},Gs=function(e){var r=e;return r.R},tV=function(e){var r=e,a=Gs(r.uW),t=Ws(r.uW),o=Us(r.uW),c=Gs(r.uQ),i=Ws(r.uQ),f=Us(r.uQ),$=Gs(r.uI),s=Ws(r.uI),d=Us(r.uI);return d*i*a+s*c*o+$*f*t-$*i*o-s*f*a-d*c*t>0},Rl=function(e){var r=e;return r.a0},en=function(e){var r=e;return r},bc=function(e){var r=e;return r},Bl=function(e){var r=e;return r.uI},Al=function(e){var r=e;return r.uQ},Qf=function(e){var r=e;return r.uW},oV=function(e){var r=bc(Rl(e)),a=en(Qf(e)),t=en(Al(e)),o=en(Bl(e));return{mU:tV(e),an:o.pi,ao:o.pk,ap:o.R,aq:t.pi,ar:t.pk,as:t.R,at:a.pi,au:a.pk,av:a.R,a2:r.pi,a3:r.pk,a4:r.R,gr:1}},BK=Q,pc=l(function(e,r){return{$:6,a:e,b:r}}),b6=l(function(e,r){return{mU:ee(e.mU,r.mU),an:e.an*r.an+e.ao*r.aq+e.ap*r.at,ao:e.an*r.ao+e.ao*r.ar+e.ap*r.au,ap:e.an*r.ap+e.ao*r.as+e.ap*r.av,aq:e.aq*r.an+e.ar*r.aq+e.as*r.at,ar:e.aq*r.ao+e.ar*r.ar+e.as*r.au,as:e.aq*r.ap+e.ar*r.as+e.as*r.av,at:e.at*r.an+e.au*r.aq+e.av*r.at,au:e.at*r.ao+e.au*r.ar+e.av*r.au,av:e.at*r.ap+e.au*r.as+e.av*r.av,a2:r.a2+(e.a2*r.an+e.a3*r.aq+e.a4*r.at)*r.gr,a3:r.a3+(e.a2*r.ao+e.a3*r.ar+e.a4*r.au)*r.gr,a4:r.a4+(e.a2*r.ap+e.a3*r.as+e.a4*r.av)*r.gr,gr:e.gr*r.gr}}),qs={$:0},ue=qs,Il=l(function(e,r){var a=r;switch(a.$){case 0:return ue;case 6:var t=a.a,o=a.b,c=n(b6,t,e);return n(pc,c,o);case 1:return n(pc,e,a);case 2:return n(pc,e,a);case 4:return n(pc,e,a);case 3:return n(pc,e,a);default:return n(pc,e,a)}}),Fl=l(function(e,r){return n(Il,oV(e),r)}),cV=l(function(e,r){return n(Fl,e,r)}),AK=Q,yi=function(e){return e},p6=function(e){var r=e;return r.eB},m6=function(e){var r=e;return r.a0},iV=l(function(e,r){var a=r,t=bc(m6(e)),o=.5*a,c=Ea(o),i=Ha(o),f=en(p6(e)),$=f.pi*i,s=c*$,d=$*$,b=f.pk*i,m=c*b,g=$*b,_=b*b,y=1-2*(d+_),S=f.R*i,w=c*S,j=2*(g-w),B=2*(g+w),E=$*S,V=2*(E+m),O=2*(E-m),X=b*S,oe=2*(X-s),ie=2*(X+s),me=S*S,Te=1-2*(_+me),Ie=1-2*(d+me);return{mU:!0,an:Te,ao:B,ap:O,aq:j,ar:Ie,as:ie,at:V,au:oe,av:y,a2:t.pi-Te*t.pi-j*t.pk-V*t.R,a3:t.pk-B*t.pi-Ie*t.pk-oe*t.R,a4:t.R-O*t.pi-ie*t.pk-y*t.R,gr:1}}),fV=P(function(e,r,a){return n(Il,n(iV,e,r),a)}),Os=P(function(e,r,a){return v(fV,e,r,a)}),IK=Q,_t=function(e){return e},FK=Q,Vl=function(e){return e},VK=Q,El=l(function(e,r){return{eB:r,a0:e}}),Ns=_t({pi:0,pk:0,R:1}),Hl=Ns,h6=n(El,On,Hl),$V=l(function(e,r){if(e.$){var t=e.a,o=function(c){var i=c.a,f=c.b,$=c.c;return _t({pi:i,pk:f,R:$})};return n(cV,Vl({a0:On,uI:o(t.pi),uQ:o(t.pk),uW:o(t.R)}),r)}else{var a=e.a;return v(Os,h6,yi(a),r)}}),uV=l(function(e,r){var a=bc(e),t=1-r;return{mU:r>=0,an:1,ao:0,ap:0,aq:0,ar:1,as:0,at:0,au:0,av:1,a2:t*a.pi,a3:t*a.pk,a4:t*a.R,gr:r}}),lV=P(function(e,r,a){return n(Il,n(uV,e,r),a)}),vV=P(function(e,r,a){return v(lV,e,r,a)}),sV=l(function(e,r){if(e.$)return r;var a=e.a;return v(vV,On,a,r)}),EK=Q,g6=P(function(e,r,a){return{pi:e,pk:r,R:a}}),_6=function(e){var r=e;return r},dV=function(e){var r=_6(e);return{mU:!0,an:1,ao:0,ap:0,aq:0,ar:1,as:0,at:0,au:0,av:1,a2:r.pi,a3:r.pk,a4:r.R,gr:1}},y6=l(function(e,r){return n(Il,dV(e),r)}),C6=l(function(e,r){return n(y6,e,r)}),bV=l(function(e,r){var a=e.pi,t=e.pk,o=e.R;return n(C6,v(g6,a,t,o),r)}),Js=l(function(e,r){var a=e.gJ,t=e.gp,o=e.gr;return n(bV,a,n($V,t,n(sV,o,r)))}),k6=function(e){var r=e;return r},pV=function(e){var r=e;return k6(r.pB)},HK=1,S6=W(function(e,r,a,t){return{$:2,a:e,b:r,c:a,d:t}}),mV=W(function(e,r,a,t){return{$:3,a:e,b:r,c:a,d:t}}),P6=W(function(e,r,a,t){return{$:4,a:e,b:r,c:a,d:t}}),hV=W(function(e,r,a,t){return{$:6,a:e,b:r,c:a,d:t}}),x6=W(function(e,r,a,t){return{$:7,a:e,b:r,c:a,d:t}}),gV=W(function(e,r,a,t){return{$:5,a:e,b:r,c:a,d:t}}),_V=W(function(e,r,a,t){return{$:1,a:e,b:r,c:a,d:t}}),Ul=function(e){switch(e.$){case 0:return e;case 1:var a=e.a,r=e.b,o=e.c;return C(_V,a,r,o,1);case 2:var a=e.a,r=e.b,o=e.c;return C(S6,a,r,o,1);case 3:var a=e.a,t=e.b,o=e.c;return C(mV,a,t,o,1);case 4:var a=e.a,t=e.b,o=e.c;return C(P6,a,t,o,1);case 5:var a=e.a,t=e.b,o=e.c;return C(gV,a,t,o,1);case 6:var a=e.a,t=e.b,o=e.c;return C(hV,a,t,o,1);case 7:var a=e.a,t=e.b,o=e.c;return C(x6,a,t,o,1);case 8:return e;case 9:return e;default:return e}},Ks={$:0},UK=0,WK=Q,yV=De(function(e,r,a,t,o,c,i,f){e:for(;;)if(f.b){var $=f.a,s=f.b,d=i($),b=d,m=n(qe,b.nA,e),g=n(ge,b.nw,r),_=n(qe,b.sh,a),y=n(ge,b.r6,t),S=n(qe,b.si,o),w=n(ge,b.r7,c),j=i,B=s;e=m,r=g,a=_,t=y,o=S,c=w,i=j,f=B;continue e}else return{nw:r,r6:t,r7:c,nA:e,sh:a,si:o}}),CV=P(function(e,r,a){var t=e(r),o=t;return Kt(yV,o.nA,o.nw,o.sh,o.r6,o.si,o.r7,e,a)}),j6=function(e){var r=e.r7,a=r,t=e.si,o=t,c=e.r6,i=c,f=e.sh,$=f,s=e.nw,d=s,b=e.nA,m=b;return{nw:n(ge,m,d),r6:n(ge,$,i),r7:n(ge,o,a),nA:n(qe,m,d),sh:n(qe,$,i),si:n(qe,o,a)}},mc=l(function(e,r){var a=e,t=r;return n(ge,a,t)}),Ci=l(function(e,r){var a=e,t=r;return n(qe,a,t)}),e$=function(e){var r=e;return r},r$=function(e){var r=e;return r.pi},a$=function(e){var r=e;return r.pk},n$=function(e){var r=e;return r.R},w6=function(e){var r=e$(e),a=r.a,t=r.b,o=r.c,c=r$(a),i=a$(a),f=n$(a),$=r$(t),s=a$(t),d=n$(t),b=r$(o),m=a$(o),g=n$(o);return j6({nw:n(mc,c,n(mc,$,b)),r6:n(mc,i,n(mc,s,m)),r7:n(mc,f,n(mc,d,g)),nA:n(Ci,c,n(Ci,$,b)),sh:n(Ci,i,n(Ci,s,m)),si:n(Ci,f,n(Ci,d,g))})},L6=u_,yt=function(e){return L6(bc(e))},Wl=function(e){return L6(_6(e))},Zs=l(function(e,r){var a=e,t=r;return{pi:t.pk*a.R-t.R*a.pk,pk:t.R*a.pi-t.pi*a.R,R:t.pi*a.pk-t.pk*a.pi}}),Gl=l(function(e,r){var a=e,t=r;return{pi:t.pi-a.pi,pk:t.pk-a.pk,R:t.R-a.R}}),Xs=function(e){return e},Ys={pi:0,pk:0,R:0},kV=l(function(e,r){var a=e,t=r,o=n(ge,Me(t.pi),n(ge,Me(t.pk),Me(t.R)));if(o){var c=t.R/o,i=t.pk/o,f=t.pi/o,$=ya(f*f+i*i+c*c);return{pi:a*f/$,pk:a*i/$,R:a*c/$}}else return Ys}),SV=kV(Xs(1)),T6=P(function(e,r,a){var t=n(Gl,r,a),o=n(Gl,e,r);return SV(n(Zs,t,o))}),PV=function(e){var r=e$(e),a=r.a,t=r.b,o=r.c,c=Wl(v(T6,a,t,o));return I({ag:c,ta:yt(a)},{ag:c,ta:yt(t)},{ag:c,ta:yt(o)})},xV=l(function(e,r){return{$:2,a:e,b:r}}),M6=xV({l1:3,mD:0,nD:4}),z6=function(e){if(e.b){var r=e.a,a=e.b,t=M6(n(N,PV,e)),o=v(CV,w6,r,a);return C(S6,o,e,t,0)}else return Ks},GK=Q,rn=P(function(e,r,a){return I(e,r,a)}),an=function(e){return e},Vt=l(function(e,r){var a=r;return e*a}),Et=P(function(e,r,a){var t=e,o=r,c=a;return{pi:t,pk:o,R:c}}),D6=(function(){var e=an(1),r=an(1),a=an(1),t=n(Vt,-.5,e),o=n(Vt,-.5,r),c=n(Vt,-.5,a),i=v(Et,c,o,t),f=n(Vt,.5,e),$=v(Et,c,o,f),s=n(Vt,.5,r),d=v(Et,c,s,t),b=v(Et,c,s,f),m=n(Vt,.5,a),g=v(Et,m,o,t),_=v(Et,m,s,t),y=v(Et,m,o,f),S=v(Et,m,s,f);return Ul(z6(u([v(rn,i,_,g),v(rn,i,d,_),v(rn,$,y,S),v(rn,$,S,b),v(rn,g,_,S),v(rn,g,S,y),v(rn,i,b,d),v(rn,i,$,b),v(rn,i,g,y),v(rn,i,y,$),v(rn,d,S,_),v(rn,d,b,S)])))})(),ql={$:0},jV=P(function(e,r,a){return{$:1,a:e,b:r,c:a}}),wV=P(function(e,r,a){var t=r.a,o=r.b,c=r.c,i=e(c),f=e(o),$=e(t),s=Wl(v(T6,$,f,i)),d={ag:s,ta:yt($)},b={ag:s,ta:yt(f)},m={ag:s,ta:yt(i)};return n(D,d,n(D,b,n(D,m,a)))}),t$=function(e){var r=e;return r.aK},LV=W(function(e,r,a,t){if(r.$===1)return L;var o=r.a;if(a.$===1)return L;var c=a.a;if(t.$===1)return L;var i=t.a;return M(v(e,o,c,i))}),o$=function(e){var r=e;return r.k4},Qs=l(function(e,r){return n(Br,e,o$(r))}),R6=function(e){var r=function(a){var t=a.a,o=a.b,c=a.c;return C(LV,P(function(i,f,$){return I(i,f,$)}),n(Qs,t,e),n(Qs,o,e),n(Qs,c,e))};return n(xr,r,t$(e))},qK=Q,TV=l(function(e,r){var a=jr(e),t=function(o){var c=o.a,i=o.b,f=o.c;return c>=0&&K(c,a)<0&&i>=0&&K(i,a)<0&&f>=0&&K(f,a)<0};return n(s1,t,r)?{aK:r,k4:e}:{aK:n(Pr,t,r),k4:e}}),MV=P(function(e,r,a){return{$:3,a:e,b:r,c:a}}),ki=MV({l1:1,mD:3,nD:4}),Ct=function(e){var r=e;return r},Ol=l(function(e,r){var a=Ct(r),t=Ct(e);return h(I(t.pi,t.pk,t.R),I(a.pi,a.pk,a.R))}),c$=c_,B6=v(c$,0,0,0),ed=Rr(function(e,r,a,t,o,c){var i=c.a,f=c.b,$=c.c,s=n(Je,n(Ol,e,r),o);if(s.$){var b={ag:B6,ta:yt(r)},m={ag:B6,ta:yt(e)},g=$+1,_=$;return I(n(D,I(a,_,g),n(D,I(a,g,t),i)),n(D,b,n(D,m,f)),$+2)}else{var d=s.a;return I(n(D,I(a,d,t),i),f,$)}}),zV=je(function(e,r,a,t,o){e:for(;;)if(a.b){var c=a.a,i=c.a,f=c.b,$=c.c,s=a.b,d=e($),b=e(f),m=e(i),g=t+2,_=t+1,y=t,S=e,w=r,j=s,B=t+3,E=_r(ed,d,m,g,y,r,_r(ed,b,d,_,g,r,_r(ed,m,b,y,_,r,o)));e=S,r=w,a=j,t=B,o=E;continue e}else{var V=o,O=V.a,X=V.b;return h(O,Ae(X))}}),DV=je(function(e,r,a,t,o){e:for(;;)if(r.b){var c=r.a,i=c.a,f=c.b,$=c.c,s=r.b,d=e($),b=e(f),m=e(i),g=a+2,_=a+1,y=a,S=v(fr,n(Ol,m,d),g,v(fr,n(Ol,d,b),_,v(fr,n(Ol,b,m),y,o))),w=n(D,I(y,_,g),t),j=e,B=s,E=a+3,V=w,O=S;e=j,r=B,a=E,t=V,o=O;continue e}else return I(t,o,a)}),hc=P(function(e,r,a){var t=R6(a),o=v(sn,wV(r),k,t),c=A(DV,r,t,0,k,ze),i=c.a,f=c.b,$=c.c,s=A(zV,r,f,t,0,I(i,k,$)),d=s.a,b=s.b,m=er(b)?o:Y(o,b);return v(jV,e,n(TV,ho(m),d),n(ki,m,d))}),A6=function(e){return{aK:n(N,function(r){return I(3*r,3*r+1,3*r+2)},n(qa,0,vr(e)-1)),k4:ho(Bn(n(N,function(r){var a=r.a,t=r.b,o=r.c;return u([a,t,o])},e)))}},Nl=function(e){switch(e.$){case 0:return ql;case 1:var t=e.a,r=e.b,a=n(N,e$,r);return v(hc,t,Q,A6(a));case 2:var t=e.a,r=e.b,a=n(N,e$,r);return v(hc,t,Q,A6(a));case 3:var t=e.a,o=e.b;return v(hc,t,Q,o);case 4:var t=e.a,o=e.b;return v(hc,t,function(c){return c.ta},o);case 5:var t=e.a,o=e.b;return v(hc,t,function(c){return c.ta},o);case 6:var t=e.a,o=e.b;return v(hc,t,function(c){return c.ta},o);case 7:var t=e.a,o=e.b;return v(hc,t,function(c){return c.ta},o);case 8:return ql;case 9:return ql;default:return ql}},I6=Nl(D6),RV=function(e){var r=e;return r.qB},F6=function(e){return{$:5,a:e}},BV=l(function(e,r){e:for(;;)if(e.b){var a=e.a,t=e.b,o=t,c=n(D,a,r);e=o,r=c;continue e}else return r}),ko=function(e){return F6(n(BV,e,k))},Ca=l(function(e,r){return{$:1,a:e,b:r}}),Jl={src:`
        precision highp float;
        
        attribute highp vec3 position;
        attribute highp vec3 normal;
        attribute mediump vec2 uv;
        attribute highp vec4 tangent;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        varying mediump vec2 interpolatedUv;
        varying highp vec4 interpolatedTangent;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        vec4 getWorldTangent(vec4 modelTangent, vec4 modelScale, mat4 modelMatrix) {
            return vec4((modelMatrix * vec4(safeNormalize(modelScale.xyz * modelTangent.xyz), 0.0)).xyz, modelScale.w * modelTangent.w);
        }
        
        void main () {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedPosition = worldPosition.xyz;
            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);
            interpolatedUv = uv;
            interpolatedTangent = getWorldTangent(tangent, modelScale, modelMatrix);
        }
    `,attributes:{normal:"ag",position:"ta",tangent:"gC",uv:"gO"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",sceneProperties:"n",viewMatrix:"o"}},AV=l(function(e,r){switch(r.$){case 0:return n(K_,e,r);case 1:return n(Z_,e,r);case 2:return n(X_,e,r);case 3:return n(Y_,e,r);case 4:return n(Q_,e,r);default:return n(ey,e,r)}}),IV=l(function(e,r){switch(r.$){case 0:return n(P_,e,r);case 1:return n(x_,e,r);case 2:return n(j_,e,r);case 3:return n(w_,e,r);case 4:return n(L_,e,r);case 5:return n(T_,e,r);case 6:return n(M_,e,r);case 7:return n(z_,e,r);default:return D_(e)}}),Ne=S_,Si={src:`
        precision highp float;
        
        uniform highp mat4 sceneProperties;
        uniform highp mat4 lights12;
        uniform highp mat4 lights34;
        uniform highp mat4 lights56;
        uniform highp mat4 lights78;
        uniform lowp vec4 enabledLights;
        uniform mediump sampler2D materialColorTexture;
        uniform lowp vec4 constantMaterialColor;
        uniform mediump sampler2D ambientOcclusionTexture;
        uniform lowp vec2 constantAmbientOcclusion;
        uniform mediump sampler2D normalMapTexture;
        uniform lowp float normalMapType;
        uniform highp mat4 viewMatrix;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        varying mediump vec2 interpolatedUv;
        varying highp vec4 interpolatedTangent;
        
        const lowp float kPerspectiveProjection = 0.0;
        const lowp float kOrthographicProjection = 1.0;
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        const highp float kPi = 3.14159265359;
        const lowp float kDisabledLight = 0.0;
        const lowp float kSoftLighting = 3.0;
        
        vec3 getLocalNormal(sampler2D normalMap, float normalMapType, vec2 uv) {
            if (normalMapType == 0.0) {
                return vec3(0.0, 0.0, 1.0);
            } else {
                vec3 rgb = texture2D(normalMap, uv).rgb;
                float x = 2.0 * (rgb.r - 0.5);
                float y = 2.0 * (rgb.g - 0.5) * normalMapType;
                float z = 2.0 * (rgb.b - 0.5);
                return normalize(vec3(x, y, z));
            }
        }
        
        float getNormalSign() {
            return 2.0 * float(gl_FrontFacing) - 1.0;
        }
        
        vec3 getMappedNormal(vec3 normal, vec4 tangent, vec3 localNormal) {
            vec3 bitangent = cross(normal, tangent.xyz) * tangent.w;
            return normalize(localNormal.x * tangent.xyz + localNormal.y * bitangent + localNormal.z * normal);
        }
        
        float getFloatValue(sampler2D texture, vec2 uv, vec2 constantValue) {
            if (constantValue.y == 1.0) {
                return constantValue.x;
            } else {
                vec4 textureColor = texture2D(texture, uv);
                return dot(textureColor, vec4(0.2126, 0.7152, 0.0722, 0.0));
            }
        }
        
        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {
            float projectionType = sceneProperties[1].w;
            if (projectionType == kPerspectiveProjection) {
                vec3 cameraPoint = sceneProperties[1].xyz;
                return normalize(cameraPoint - surfacePosition);
            } else if (projectionType == kOrthographicProjection) {
                return sceneProperties[1].xyz;
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        void getDirectionToLightAndNormalIlluminance(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            out vec3 directionToLight,
            out vec3 normalIlluminance
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                directionToLight = xyz_type.xyz;
                normalIlluminance = rgb_parameter.rgb;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                vec3 displacement = lightPosition - surfacePosition;
                float distance = length(displacement);
                directionToLight = displacement / distance;
                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);
            }
        }
        
        float positiveDotProduct(vec3 v1, vec3 v2) {
            return clamp(dot(v1, v2), 0.0, 1.0);
        }
        
        vec3 softLightingLuminance(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localLightDirection
        ) {
            float sinElevation = dot(localLightDirection, localUpDirection);
            float t = (sinElevation + 1.0) / 2.0;
            return aboveLuminance * t + belowLuminance * (1.0 - t);
        }
        
        vec3 lambertianLight(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 materialColor,
            float ambientOcclusion,
            vec4 xyz_type,
            vec4 rgb_parameter
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDisabledLight) {
                return vec3(0.0, 0.0, 0.0);
            } else if (lightType == kSoftLighting) {
                vec3 upDirection = xyz_type.xyz;
                vec3 aboveLuminance = rgb_parameter.rgb;
                vec3 belowLuminance = rgb_parameter.a * aboveLuminance;
                vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, upDirection, surfaceNormal);
                return luminance * materialColor * ambientOcclusion;
            }
        
            vec3 directionToLight = vec3(0.0, 0.0, 0.0);
            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);
            getDirectionToLightAndNormalIlluminance(
                xyz_type,
                rgb_parameter,
                surfacePosition,
                directionToLight,
                normalIlluminance
            );
        
            float dotNL = positiveDotProduct(directionToLight, surfaceNormal);
            return (normalIlluminance * dotNL) * (materialColor / kPi);
        }
        
        vec3 lambertianLighting(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 materialColor,
            float ambientOcclusion,
            mat4 lights12,
            mat4 lights34,
            mat4 lights56,
            mat4 lights78,
            vec4 enabledLights
        ) {
            vec3 litColor1 = enabledLights[0] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights12[0], lights12[1]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor2 = enabledLights[1] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights12[2], lights12[3]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor3 = enabledLights[2] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights34[0], lights34[1]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor4 = enabledLights[3] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights34[2], lights34[3]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor5 = lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights56[0], lights56[1]);
            vec3 litColor6 = lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights56[2], lights56[3]);
            vec3 litColor7 = lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights78[0], lights78[1]);
            vec3 litColor8 = lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights78[2], lights78[3]);
            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;
        }
        
        float inverseGamma(float u) {
            if (u <= 0.04045) {
                return clamp(u / 12.92, 0.0, 1.0);
            } else {
                return clamp(pow((u + 0.055) / 1.055, 2.4), 0.0, 1.0);
            }
        }
        
        float inverseAlpha(float value) {
            // the value used for alpha cannot be less than zero
            float signValue = float(sign(value));
            return signValue / (value + (signValue - 1.0));
        }
        
        vec4 fromSrgb(vec4 srgbColor) {
            float invAlpha = inverseAlpha(srgbColor.a);
            return vec4(
                inverseGamma(srgbColor.r * invAlpha) * srgbColor.a,
                inverseGamma(srgbColor.g * invAlpha) * srgbColor.a,
                inverseGamma(srgbColor.b * invAlpha) * srgbColor.a,
                srgbColor.a
            );
        }
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 toSrgb(vec4 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            // linearColor has premultiplied alpha, but tone mapping works on
            // non-premultiplied linear RGB so we need to temporarily 'undo' the
            // premultiplication before applying tone mapping
            float invAlpha = inverseAlpha(linearColor.a);
            float unitR = (linearColor.r * invAlpha) / referenceWhite.r;
            float unitG = (linearColor.g * invAlpha) / referenceWhite.g;
            float unitB = (linearColor.b * invAlpha) / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            // Apply tone mapping
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            // Re-apply premultiplied alpha after tone mapping
            return vec4(toneMapped * linearColor.a, linearColor.a);
        }
        
        void main() {
            vec3 localNormal = getLocalNormal(normalMapTexture, normalMapType, interpolatedUv);
            float normalSign = getNormalSign();
            vec3 originalNormal = normalize(interpolatedNormal) * normalSign;
            vec3 normalDirection = getMappedNormal(originalNormal, interpolatedTangent, localNormal);
            float ambientOcclusion = getFloatValue(ambientOcclusionTexture, interpolatedUv, constantAmbientOcclusion);
            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);
            float useConstantColor = float(sign(constantMaterialColor.a));  // 1.0 for color, 0.0 for texture
            vec4 materialColor = fromSrgb(texture2D(materialColorTexture, interpolatedUv)) * (1.0 - useConstantColor) + constantMaterialColor * useConstantColor;
        
            vec3 linearColor = lambertianLighting(
                interpolatedPosition,
                normalDirection,
                materialColor.rgb,
                ambientOcclusion,
                lights12,
                lights34,
                lights56,
                lights78,
                enabledLights
            );
        
            gl_FragColor = toSrgb(vec4(linearColor, materialColor.a), sceneProperties);
        }
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bx",constantAmbientOcclusion:"bA",constantMaterialColor:"ev",enabledLights:"af",lights12:"ga",lights34:"hJ",lights56:"hK",lights78:"hL",materialColorTexture:"e5",normalMapTexture:"bI",normalMapType:"bJ",sceneProperties:"n",viewMatrix:"o"}},V6=l(function(e,r){return{$:2,a:e,b:r}}),FV=l(function(e,r){return qs}),E6=b_,ka=function(e){var r=E6(e);return r===1?Ca:r?V6:FV},OK=Q,VV=1029,EV=function(e){return{$:5,a:e}},H6=function(e){var r=e;return EV(r)},gc=H6(VV),HV=1028,_c=H6(HV),ir=P(function(e,r,a){return r===1?e?n(D,gc,a):n(D,_c,a):a}),U6=p_,Ht=l_,ua=function(e){var r=U6(e),a=r.pi,t=r.pk,o=r.R,c=r.uA;return C(Ht,a*c,t*c,o*c,c)},Pi=C(Ht,0,0,0,0),UV=De(function(e,r,a,t,o,c,i,f){if(e.$){var s=e.a,d=e.b;return v(ka,s,c,De(function(b,m,g,_,y,S,w,j){var B=w.a,E=w.b;return A(Ne,v(ir,_,f,j),Jl,Si,i,{bx:r,bA:a,ev:ua(s),af:E,ga:B.ga,hJ:B.hJ,hK:B.hK,hL:B.hL,e5:d,k:g,l:m,bI:t,bJ:o,m:S,n:b,o:y})}))}else{var $=e.a;return n(Ca,c,De(function(b,m,g,_,y,S,w,j){var B=w.a,E=w.b;return A(Ne,v(ir,_,f,j),Jl,Si,i,{bx:r,bA:a,ev:Pi,af:E,ga:B.ga,hJ:B.hJ,hK:B.hK,hL:B.hL,e5:$,k:g,l:m,bI:t,bJ:o,m:S,n:b,o:y})}))}}),xi={src:`
        precision highp float;
        
        uniform highp mat4 sceneProperties;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 lights12;
        uniform highp mat4 lights34;
        uniform highp mat4 lights56;
        uniform highp mat4 lights78;
        uniform lowp vec4 enabledLights;
        uniform mediump sampler2D baseColorTexture;
        uniform lowp vec4 constantBaseColor;
        uniform mediump sampler2D roughnessTexture;
        uniform lowp vec2 constantRoughness;
        uniform mediump sampler2D metallicTexture;
        uniform lowp vec2 constantMetallic;
        uniform mediump sampler2D ambientOcclusionTexture;
        uniform lowp vec2 constantAmbientOcclusion;
        uniform mediump sampler2D normalMapTexture;
        uniform lowp float normalMapType;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        varying mediump vec2 interpolatedUv;
        varying highp vec4 interpolatedTangent;
        
        const lowp float kPerspectiveProjection = 0.0;
        const lowp float kOrthographicProjection = 1.0;
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        const highp float kPi = 3.14159265359;
        const mediump float kMediumpFloatMax = 65504.0;
        const lowp float kDisabledLight = 0.0;
        const lowp float kSoftLighting = 3.0;
        
        float getFloatValue(sampler2D texture, vec2 uv, vec2 constantValue) {
            if (constantValue.y == 1.0) {
                return constantValue.x;
            } else {
                vec4 textureColor = texture2D(texture, uv);
                return dot(textureColor, vec4(0.2126, 0.7152, 0.0722, 0.0));
            }
        }
        
        vec3 getLocalNormal(sampler2D normalMap, float normalMapType, vec2 uv) {
            if (normalMapType == 0.0) {
                return vec3(0.0, 0.0, 1.0);
            } else {
                vec3 rgb = texture2D(normalMap, uv).rgb;
                float x = 2.0 * (rgb.r - 0.5);
                float y = 2.0 * (rgb.g - 0.5) * normalMapType;
                float z = 2.0 * (rgb.b - 0.5);
                return normalize(vec3(x, y, z));
            }
        }
        
        float getNormalSign() {
            return 2.0 * float(gl_FrontFacing) - 1.0;
        }
        
        vec3 getMappedNormal(vec3 normal, vec4 tangent, vec3 localNormal) {
            vec3 bitangent = cross(normal, tangent.xyz) * tangent.w;
            return normalize(localNormal.x * tangent.xyz + localNormal.y * bitangent + localNormal.z * normal);
        }
        
        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {
            float projectionType = sceneProperties[1].w;
            if (projectionType == kPerspectiveProjection) {
                vec3 cameraPoint = sceneProperties[1].xyz;
                return normalize(cameraPoint - surfacePosition);
            } else if (projectionType == kOrthographicProjection) {
                return sceneProperties[1].xyz;
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        void getDirectionToLightAndNormalIlluminance(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            out vec3 directionToLight,
            out vec3 normalIlluminance
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                directionToLight = xyz_type.xyz;
                normalIlluminance = rgb_parameter.rgb;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                vec3 displacement = lightPosition - surfacePosition;
                float distance = length(displacement);
                directionToLight = displacement / distance;
                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);
            }
        }
        
        float positiveDotProduct(vec3 v1, vec3 v2) {
            return clamp(dot(v1, v2), 0.0, 1.0);
        }
        
        // Adapted from https://google.github.io/filament/Filament.md.html#materialsystem/specularbrdf/normaldistributionfunction(speculard)
        float specularD(float alpha, float dotNH, vec3 normalDirection, vec3 halfDirection) {
            vec3 crossNH = cross(normalDirection, halfDirection);
            float a = dotNH * alpha;
            float k = alpha / (dot(crossNH, crossNH) + a * a);
            float d = k * k * (1.0 / kPi);
            return min(d, kMediumpFloatMax);
        }
        
        float safeQuotient(float numerator, float denominator) {
            if (denominator == 0.0) {
                return 0.0;
            } else {
                return numerator / denominator;
            }
        }
        
        float g1(float dotNV, float alphaSquared) {
            return safeQuotient(2.0 * dotNV, dotNV + sqrt(alphaSquared + (1.0 - alphaSquared) * dotNV * dotNV));
        }
        
        float specularG(float dotNL, float dotNV, float alphaSquared) {
            return g1(dotNV, alphaSquared) * g1(dotNL, alphaSquared);
        }
        
        vec3 fresnelColor(vec3 specularBaseColor, float dotVH) {
            vec3 one = vec3(1.0, 1.0, 1.0);
            float scale = exp2((-5.55473 * dotVH - 6.98316) * dotVH);
            return specularBaseColor + (one - specularBaseColor) * scale;
        }
        
        vec3 brdf(vec3 normalDirection, vec3 directionToCamera, vec3 directionToLight, float alpha, float dotNV, float dotNL, vec3 specularBaseColor, vec3 normalIlluminance) {
            vec3 halfDirection = normalize(directionToCamera + directionToLight);
            float dotVH = positiveDotProduct(directionToCamera, halfDirection);
            float dotNH = positiveDotProduct(normalDirection, halfDirection);
            float dotNHSquared = dotNH * dotNH;
        
            float d = specularD(alpha, dotNH, normalDirection, halfDirection);
            float g = specularG(dotNL, dotNV, alpha * alpha);
            vec3 f = fresnelColor(specularBaseColor, dotVH);
            return safeQuotient(d * g, 4.0 * dotNL * dotNV) * f;
        }
        
        vec3 sampleFacetNormal(vec3 vH, vec3 vT1, vec3 vT2, float s, float alpha) {
            float t2 = (1.0 - s);
            vec3 vNh = t2 * vT2 + sqrt(max(0.0, 1.0 - t2 * t2)) * vH;
            return normalize(vec3(alpha * vNh.x, alpha * vNh.y, max(0.0, vNh.z)));
        }
        
        vec3 softLightingLuminance(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localLightDirection
        ) {
            float sinElevation = dot(localLightDirection, localUpDirection);
            float t = (sinElevation + 1.0) / 2.0;
            return aboveLuminance * t + belowLuminance * (1.0 - t);
        }
        
        vec3 softLightingSpecularSample(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localViewDirection,
            vec3 localLightDirection,
            vec3 localHalfDirection,
            float alphaSquared,
            vec3 specularBaseColor
        ) {
            vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, localUpDirection, localLightDirection);
            float dotVH = positiveDotProduct(localViewDirection, localHalfDirection);
            float dotNL = localLightDirection.z;
            return luminance * (fresnelColor(specularBaseColor, dotVH) * g1(dotNL, alphaSquared));
        }
        
        vec3 softLighting(
            vec3 normalDirection,
            vec3 diffuseBaseColor,
            vec3 specularBaseColor,
            float alpha,
            vec3 directionToCamera,
            vec3 viewY,
            vec4 xyz_type,
            vec4 rgb_parameter
        ) {
            float alphaSquared = alpha * alpha;
            vec3 upDirection = xyz_type.xyz;
            vec3 luminanceAbove = rgb_parameter.rgb;
            vec3 luminanceBelow = rgb_parameter.a * luminanceAbove;
            vec3 crossProduct = cross(normalDirection, directionToCamera);
            float crossMagnitude = length(crossProduct);
            vec3 xDirection = vec3(0.0, 0.0, 0.0);
            vec3 yDirection = vec3(0.0, 0.0, 0.0);
            if (crossMagnitude > 1.0e-6) {
                yDirection = (1.0 / crossMagnitude) * crossProduct;
                xDirection = cross(yDirection, normalDirection);
            } else {
                vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
                xDirection = normalize(cross(viewY, normalDirection));
                yDirection = cross(normalDirection, xDirection);
            }
            float localViewX = dot(directionToCamera, xDirection);
            float localViewZ = dot(directionToCamera, normalDirection);
            vec3 localViewDirection = vec3(localViewX, 0, localViewZ);
            float localUpX = dot(upDirection, xDirection);
            float localUpY = dot(upDirection, yDirection);
            float localUpZ = dot(upDirection, normalDirection);
            vec3 localUpDirection = vec3(localUpX, localUpY, localUpZ);
        
            vec3 vH = normalize(vec3(alpha * localViewX, 0.0, localViewZ));
            vec3 vT1 = vec3(0.0, 1.0, 0.0);
            vec3 vT2 = cross(vH, vT1);
            float s = 0.5 * (1.0 + vH.z);
        
            vec3 localHalfDirection = sampleFacetNormal(vH, vT1, vT2, s, alpha);
            vec3 localLightDirection = vec3(0.0, 0.0, 0.0);
        
            localLightDirection = -reflect(localViewDirection, localHalfDirection);
            vec3 specular = softLightingSpecularSample(luminanceAbove, luminanceBelow, localUpDirection, localViewDirection, localLightDirection, localHalfDirection, alphaSquared, specularBaseColor);
        
            localLightDirection = vec3(0.000000, 0.000000, 1.000000);
            vec3 diffuse = softLightingLuminance(luminanceAbove, luminanceBelow, localUpDirection, localLightDirection) * localLightDirection.z;
        
            return specular + diffuse * diffuseBaseColor;
        }
        
        vec3 physicalLight(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            vec3 normalDirection,
            vec3 directionToCamera,
            vec3 viewY,
            float dotNV,
            vec3 diffuseBaseColor,
            vec3 specularBaseColor,
            float alpha,
            float ambientOcclusion
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDisabledLight) {
                return vec3(0.0, 0.0, 0.0);
            } else if (lightType == kSoftLighting) {
                return softLighting(normalDirection, diffuseBaseColor, specularBaseColor, alpha, directionToCamera, viewY, xyz_type, rgb_parameter) * ambientOcclusion;
            }
        
            vec3 directionToLight = vec3(0.0, 0.0, 0.0);
            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);
            getDirectionToLightAndNormalIlluminance(xyz_type, rgb_parameter, surfacePosition, directionToLight, normalIlluminance);
        
            float dotNL = positiveDotProduct(normalDirection, directionToLight);
            vec3 specularColor = brdf(normalDirection, directionToCamera, directionToLight, alpha, dotNV, dotNL, specularBaseColor, normalIlluminance);
            return (normalIlluminance * dotNL) * ((diffuseBaseColor / kPi) + specularColor);
        }
        
        vec3 physicalLighting(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 baseColor,
            vec3 directionToCamera,
            mat4 viewMatrix,
            float roughness,
            float metallic,
            float ambientOcclusion,
            mat4 lights12,
            mat4 lights34,
            mat4 lights56,
            mat4 lights78,
            vec4 enabledLights
        ) {
            float dotNV = positiveDotProduct(surfaceNormal, directionToCamera);
            float alpha = roughness * roughness;
            float nonmetallic = 1.0 - metallic;
            vec3 diffuseBaseColor = nonmetallic * 0.96 * baseColor;
            vec3 specularBaseColor = nonmetallic * 0.04 * vec3(1.0, 1.0, 1.0) + metallic * baseColor;
            vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        
            vec3 litColor1 = enabledLights[0] == 1.0 ? physicalLight(lights12[0], lights12[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion) : vec3(0.0, 0.0, 0.0);
            vec3 litColor2 = enabledLights[1] == 1.0 ? physicalLight(lights12[2], lights12[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion) : vec3(0.0, 0.0, 0.0);
            vec3 litColor3 = enabledLights[2] == 1.0 ? physicalLight(lights34[0], lights34[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion) : vec3(0.0, 0.0, 0.0);
            vec3 litColor4 = enabledLights[3] == 1.0 ? physicalLight(lights34[2], lights34[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion) : vec3(0.0, 0.0, 0.0);
            vec3 litColor5 = physicalLight(lights56[0], lights56[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion);
            vec3 litColor6 = physicalLight(lights56[2], lights56[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion);
            vec3 litColor7 = physicalLight(lights78[0], lights78[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion);
            vec3 litColor8 = physicalLight(lights78[2], lights78[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion);
            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;
        }
        
        float inverseGamma(float u) {
            if (u <= 0.04045) {
                return clamp(u / 12.92, 0.0, 1.0);
            } else {
                return clamp(pow((u + 0.055) / 1.055, 2.4), 0.0, 1.0);
            }
        }
        
        float inverseAlpha(float value) {
            // the value used for alpha cannot be less than zero
            float signValue = float(sign(value));
            return signValue / (value + (signValue - 1.0));
        }
        
        vec4 fromSrgb(vec4 srgbColor) {
            float invAlpha = inverseAlpha(srgbColor.a);
            return vec4(
                inverseGamma(srgbColor.r * invAlpha) * srgbColor.a,
                inverseGamma(srgbColor.g * invAlpha) * srgbColor.a,
                inverseGamma(srgbColor.b * invAlpha) * srgbColor.a,
                srgbColor.a
            );
        }
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 toSrgb(vec4 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            // linearColor has premultiplied alpha, but tone mapping works on
            // non-premultiplied linear RGB so we need to temporarily 'undo' the
            // premultiplication before applying tone mapping
            float invAlpha = inverseAlpha(linearColor.a);
            float unitR = (linearColor.r * invAlpha) / referenceWhite.r;
            float unitG = (linearColor.g * invAlpha) / referenceWhite.g;
            float unitB = (linearColor.b * invAlpha) / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            // Apply tone mapping
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            // Re-apply premultiplied alpha after tone mapping
            return vec4(toneMapped * linearColor.a, linearColor.a);
        }
        
        void main() {
            float useConstantColor = float(sign(constantBaseColor.a));  // 1.0 for color, 0.0 for texture
            vec4 baseColor = fromSrgb(texture2D(baseColorTexture, interpolatedUv)) * (1.0 - useConstantColor) + constantBaseColor * useConstantColor;
        
            float roughness = getFloatValue(roughnessTexture, interpolatedUv, constantRoughness);
            float metallic = getFloatValue(metallicTexture, interpolatedUv, constantMetallic);
            float ambientOcclusion = getFloatValue(ambientOcclusionTexture, interpolatedUv, constantAmbientOcclusion);
        
            vec3 localNormal = getLocalNormal(normalMapTexture, normalMapType, interpolatedUv);
            float normalSign = getNormalSign();
            vec3 originalNormal = normalize(interpolatedNormal) * normalSign;
            vec3 normalDirection = getMappedNormal(originalNormal, interpolatedTangent, localNormal);
            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);
        
            vec3 linearColor = physicalLighting(
                interpolatedPosition,
                normalDirection,
                baseColor.rgb,
                directionToCamera,
                viewMatrix,
                roughness,
                metallic,
                ambientOcclusion,
                lights12,
                lights34,
                lights56,
                lights78,
                enabledLights
            );
        
            gl_FragColor = toSrgb(vec4(linearColor, baseColor.a), sceneProperties);
        }
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bx",baseColorTexture:"en",constantAmbientOcclusion:"bA",constantBaseColor:"et",constantMetallic:"ew",constantRoughness:"ex",enabledLights:"af",lights12:"ga",lights34:"hJ",lights56:"hK",lights78:"hL",metallicTexture:"e7",normalMapTexture:"bI",normalMapType:"bJ",roughnessTexture:"fe",sceneProperties:"n",viewMatrix:"o"}},WV=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return function(d){return function(b){if(e.$){var g=e.a,_=e.b;return v(ka,g,s,De(function(y,S,w,j,B,E,V,O){var X=V.a,oe=V.b;return A(Ne,v(ir,j,b,O),Jl,xi,d,{bx:c,en:_,bA:i,et:ua(g),ew:o,ex:a,af:oe,ga:X.ga,hJ:X.hJ,hK:X.hK,hL:X.hL,e7:t,k:w,l:S,bI:f,bJ:$,m:E,fe:r,n:y,o:B})}))}else{var m=e.a;return n(Ca,s,De(function(y,S,w,j,B,E,V,O){var X=V.a,oe=V.b;return A(Ne,v(ir,j,b,O),Jl,xi,d,{bx:c,en:m,bA:i,et:Pi,ew:o,ex:a,af:oe,ga:X.ga,hJ:X.hJ,hK:X.hK,hL:X.hL,e7:t,k:w,l:S,bI:f,bJ:$,m:E,fe:r,n:y,o:B})}))}}}}}}}}}}}}},W6={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"g6"}},G6={src:`
        precision highp float;
        
        attribute highp vec3 position;
        attribute mediump vec2 uv;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        varying mediump vec2 interpolatedUv;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main() {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedUv = uv;
        }
    `,attributes:{position:"ta",uv:"gO"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",sceneProperties:"n",viewMatrix:"o"}},rd=W(function(e,r,a,t){return n(Ca,r,De(function(o,c,i,f,$,s,d,b){return A(Ne,v(ir,f,t,b),G6,W6,a,{g6:e,k:i,l:c,m:s,n:o,o:$})}))}),ad={src:`
        precision lowp float;
        
        uniform lowp vec4 constantColor;
        
        void main () {
            gl_FragColor = constantColor;
        }
    `,attributes:{},uniforms:{constantColor:"eu"}},q6={src:`
        precision highp float;
        
        attribute highp vec3 position;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main () {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
        }
    `,attributes:{position:"ta"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",sceneProperties:"n",viewMatrix:"o"}},Ut=W(function(e,r,a,t){return v(ka,e,r,De(function(o,c,i,f,$,s,d,b){return A(Ne,v(ir,f,t,b),q6,ad,a,{eu:ua(e),k:i,l:c,m:s,n:o,o:$})}))}),O6=l(function(e,r){return{$:4,a:e,b:r}}),GV={src:`
        precision lowp float;
        
        uniform lowp vec4 constantColor;
        uniform lowp float pointRadius;
        uniform highp mat4 sceneProperties;
        
        float pointAlpha(float pointRadius, vec2 pointCoord) {
            float pointSize = 2.0 * pointRadius;
            float x = (pointSize + 2.0) * (pointCoord.s - 0.5);
            float y = (pointSize + 2.0) * (pointCoord.t - 0.5);
            float r = sqrt(x * x + y * y);
            float innerRadius = pointRadius;
            float outerRadius = pointRadius + 1.0;
            if (r > outerRadius) {
                return 0.0;
            } else if (r > innerRadius) {
                return outerRadius - r;
            } else {
                return 1.0;
            }
        }
        
        void main () {
            float supersampling = sceneProperties[3][0];
            float alpha = pointAlpha(pointRadius * supersampling, gl_PointCoord);
            gl_FragColor = constantColor * alpha;
        }
    `,attributes:{},uniforms:{constantColor:"eu",pointRadius:"h7",sceneProperties:"n"}},N6={src:`
        precision highp float;
        
        attribute highp vec3 position;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform lowp float pointRadius;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main () {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            float supersampling = sceneProperties[3][0];
            gl_PointSize = 2.0 * pointRadius * supersampling + 2.0;
        }
    `,attributes:{position:"ta"},uniforms:{modelMatrix:"k",modelScale:"l",pointRadius:"h7",projectionMatrix:"m",sceneProperties:"n",viewMatrix:"o"}},qV=W(function(e,r,a,t){return n(O6,a,De(function(o,c,i,f,$,s,d,b){return A(Ne,b,N6,GV,t,{eu:ua(e),k:i,l:c,h7:r,m:s,n:o,o:$})}))}),nd={src:`
        precision mediump float;
        
        uniform mediump vec4 emissiveColor;
        uniform highp mat4 sceneProperties;
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        float inverseAlpha(float value) {
            // the value used for alpha cannot be less than zero
            float signValue = float(sign(value));
            return signValue / (value + (signValue - 1.0));
        }
        
        vec4 toSrgb(vec4 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            // linearColor has premultiplied alpha, but tone mapping works on
            // non-premultiplied linear RGB so we need to temporarily 'undo' the
            // premultiplication before applying tone mapping
            float invAlpha = inverseAlpha(linearColor.a);
            float unitR = (linearColor.r * invAlpha) / referenceWhite.r;
            float unitG = (linearColor.g * invAlpha) / referenceWhite.g;
            float unitB = (linearColor.b * invAlpha) / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            // Apply tone mapping
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            // Re-apply premultiplied alpha after tone mapping
            return vec4(toneMapped * linearColor.a, linearColor.a);
        }
        
        void main () {
            gl_FragColor = toSrgb(emissiveColor, sceneProperties);
        }
    `,attributes:{},uniforms:{emissiveColor:"eF",sceneProperties:"n"}},ji=function(e){var r=e;return r},Kl=h_,Wt=je(function(e,r,a,t,o){return n(Ca,a,De(function(c,i,f,$,s,d,b,m){return A(Ne,v(ir,$,o,m),q6,nd,t,{eF:n(Kl,ji(r),e),k:f,l:i,m:d,n:c,o:s})}))}),OV={src:`
        precision mediump float;
        
        uniform mediump vec4 emissiveColor;
        uniform lowp float pointRadius;
        uniform highp mat4 sceneProperties;
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        float inverseAlpha(float value) {
            // the value used for alpha cannot be less than zero
            float signValue = float(sign(value));
            return signValue / (value + (signValue - 1.0));
        }
        
        vec4 toSrgb(vec4 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            // linearColor has premultiplied alpha, but tone mapping works on
            // non-premultiplied linear RGB so we need to temporarily 'undo' the
            // premultiplication before applying tone mapping
            float invAlpha = inverseAlpha(linearColor.a);
            float unitR = (linearColor.r * invAlpha) / referenceWhite.r;
            float unitG = (linearColor.g * invAlpha) / referenceWhite.g;
            float unitB = (linearColor.b * invAlpha) / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            // Apply tone mapping
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            // Re-apply premultiplied alpha after tone mapping
            return vec4(toneMapped * linearColor.a, linearColor.a);
        }
        
        float pointAlpha(float pointRadius, vec2 pointCoord) {
            float pointSize = 2.0 * pointRadius;
            float x = (pointSize + 2.0) * (pointCoord.s - 0.5);
            float y = (pointSize + 2.0) * (pointCoord.t - 0.5);
            float r = sqrt(x * x + y * y);
            float innerRadius = pointRadius;
            float outerRadius = pointRadius + 1.0;
            if (r > outerRadius) {
                return 0.0;
            } else if (r > innerRadius) {
                return outerRadius - r;
            } else {
                return 1.0;
            }
        }
        
        void main () {
            vec4 color = toSrgb(emissiveColor, sceneProperties);
            float supersampling = sceneProperties[3][0];
            float alpha = pointAlpha(pointRadius * supersampling, gl_PointCoord);
            gl_FragColor = color * alpha;
        }
    `,attributes:{},uniforms:{emissiveColor:"eF",pointRadius:"h7",sceneProperties:"n"}},NV=je(function(e,r,a,t,o){return n(O6,t,De(function(c,i,f,$,s,d,b,m){return A(Ne,m,N6,OV,o,{eF:n(Kl,ji(r),e),k:f,l:i,h7:a,m:d,n:c,o:s})}))}),td={src:`
        precision highp float;
        
        uniform highp mat4 sceneProperties;
        uniform highp mat4 lights12;
        uniform highp mat4 lights34;
        uniform highp mat4 lights56;
        uniform highp mat4 lights78;
        uniform lowp vec4 enabledLights;
        uniform lowp vec4 materialColor;
        uniform lowp float ambientOcclusion;
        uniform highp mat4 viewMatrix;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        
        const lowp float kPerspectiveProjection = 0.0;
        const lowp float kOrthographicProjection = 1.0;
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        const highp float kPi = 3.14159265359;
        const lowp float kDisabledLight = 0.0;
        const lowp float kSoftLighting = 3.0;
        
        float getNormalSign() {
            return 2.0 * float(gl_FrontFacing) - 1.0;
        }
        
        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {
            float projectionType = sceneProperties[1].w;
            if (projectionType == kPerspectiveProjection) {
                vec3 cameraPoint = sceneProperties[1].xyz;
                return normalize(cameraPoint - surfacePosition);
            } else if (projectionType == kOrthographicProjection) {
                return sceneProperties[1].xyz;
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        void getDirectionToLightAndNormalIlluminance(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            out vec3 directionToLight,
            out vec3 normalIlluminance
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                directionToLight = xyz_type.xyz;
                normalIlluminance = rgb_parameter.rgb;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                vec3 displacement = lightPosition - surfacePosition;
                float distance = length(displacement);
                directionToLight = displacement / distance;
                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);
            }
        }
        
        float positiveDotProduct(vec3 v1, vec3 v2) {
            return clamp(dot(v1, v2), 0.0, 1.0);
        }
        
        vec3 softLightingLuminance(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localLightDirection
        ) {
            float sinElevation = dot(localLightDirection, localUpDirection);
            float t = (sinElevation + 1.0) / 2.0;
            return aboveLuminance * t + belowLuminance * (1.0 - t);
        }
        
        vec3 lambertianLight(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 materialColor,
            float ambientOcclusion,
            vec4 xyz_type,
            vec4 rgb_parameter
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDisabledLight) {
                return vec3(0.0, 0.0, 0.0);
            } else if (lightType == kSoftLighting) {
                vec3 upDirection = xyz_type.xyz;
                vec3 aboveLuminance = rgb_parameter.rgb;
                vec3 belowLuminance = rgb_parameter.a * aboveLuminance;
                vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, upDirection, surfaceNormal);
                return luminance * materialColor * ambientOcclusion;
            }
        
            vec3 directionToLight = vec3(0.0, 0.0, 0.0);
            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);
            getDirectionToLightAndNormalIlluminance(
                xyz_type,
                rgb_parameter,
                surfacePosition,
                directionToLight,
                normalIlluminance
            );
        
            float dotNL = positiveDotProduct(directionToLight, surfaceNormal);
            return (normalIlluminance * dotNL) * (materialColor / kPi);
        }
        
        vec3 lambertianLighting(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 materialColor,
            float ambientOcclusion,
            mat4 lights12,
            mat4 lights34,
            mat4 lights56,
            mat4 lights78,
            vec4 enabledLights
        ) {
            vec3 litColor1 = enabledLights[0] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights12[0], lights12[1]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor2 = enabledLights[1] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights12[2], lights12[3]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor3 = enabledLights[2] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights34[0], lights34[1]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor4 = enabledLights[3] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights34[2], lights34[3]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor5 = lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights56[0], lights56[1]);
            vec3 litColor6 = lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights56[2], lights56[3]);
            vec3 litColor7 = lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights78[0], lights78[1]);
            vec3 litColor8 = lambertianLight(surfacePosition, surfaceNormal, materialColor, ambientOcclusion, lights78[2], lights78[3]);
            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;
        }
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        float inverseAlpha(float value) {
            // the value used for alpha cannot be less than zero
            float signValue = float(sign(value));
            return signValue / (value + (signValue - 1.0));
        }
        
        vec4 toSrgb(vec4 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            // linearColor has premultiplied alpha, but tone mapping works on
            // non-premultiplied linear RGB so we need to temporarily 'undo' the
            // premultiplication before applying tone mapping
            float invAlpha = inverseAlpha(linearColor.a);
            float unitR = (linearColor.r * invAlpha) / referenceWhite.r;
            float unitG = (linearColor.g * invAlpha) / referenceWhite.g;
            float unitB = (linearColor.b * invAlpha) / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            // Apply tone mapping
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            // Re-apply premultiplied alpha after tone mapping
            return vec4(toneMapped * linearColor.a, linearColor.a);
        }
        
        void main() {
            vec3 normalDirection = normalize(interpolatedNormal) * getNormalSign();
            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);
        
            vec3 linearColor = lambertianLighting(
                interpolatedPosition,
                normalDirection,
                materialColor.rgb,
                ambientOcclusion,
                lights12,
                lights34,
                lights56,
                lights78,
                enabledLights
            );
        
            gl_FragColor = toSrgb(vec4(linearColor, materialColor.a), sceneProperties);
        }
    `,attributes:{},uniforms:{ambientOcclusion:"ek",enabledLights:"af",lights12:"ga",lights34:"hJ",lights56:"hK",lights78:"hL",materialColor:"jM",sceneProperties:"n",viewMatrix:"o"}},J6={src:`
        precision highp float;
        
        attribute highp vec3 position;
        attribute highp vec3 normal;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        void main () {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedPosition = worldPosition.xyz;
            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);
        }
    `,attributes:{normal:"ag",position:"ta"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",sceneProperties:"n",viewMatrix:"o"}},Zl=je(function(e,r,a,t,o){return v(ka,e,a,De(function(c,i,f,$,s,d,b,m){var g=b.a,_=b.b;return A(Ne,v(ir,$,o,m),J6,td,t,{ek:r,af:_,ga:g.ga,hJ:g.hJ,hK:g.hK,hL:g.hL,jM:ua(e),k:f,l:i,m:d,n:c,o:s})}))}),od={src:`
        precision highp float;
        
        uniform highp mat4 sceneProperties;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 lights12;
        uniform highp mat4 lights34;
        uniform highp mat4 lights56;
        uniform highp mat4 lights78;
        uniform lowp vec4 enabledLights;
        uniform lowp vec4 baseColor;
        uniform lowp float roughness;
        uniform lowp float metallic;
        uniform lowp float ambientOcclusion;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        
        const lowp float kPerspectiveProjection = 0.0;
        const lowp float kOrthographicProjection = 1.0;
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        const highp float kPi = 3.14159265359;
        const mediump float kMediumpFloatMax = 65504.0;
        const lowp float kDisabledLight = 0.0;
        const lowp float kSoftLighting = 3.0;
        
        float getNormalSign() {
            return 2.0 * float(gl_FrontFacing) - 1.0;
        }
        
        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {
            float projectionType = sceneProperties[1].w;
            if (projectionType == kPerspectiveProjection) {
                vec3 cameraPoint = sceneProperties[1].xyz;
                return normalize(cameraPoint - surfacePosition);
            } else if (projectionType == kOrthographicProjection) {
                return sceneProperties[1].xyz;
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        void getDirectionToLightAndNormalIlluminance(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            out vec3 directionToLight,
            out vec3 normalIlluminance
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                directionToLight = xyz_type.xyz;
                normalIlluminance = rgb_parameter.rgb;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                vec3 displacement = lightPosition - surfacePosition;
                float distance = length(displacement);
                directionToLight = displacement / distance;
                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);
            }
        }
        
        float positiveDotProduct(vec3 v1, vec3 v2) {
            return clamp(dot(v1, v2), 0.0, 1.0);
        }
        
        // Adapted from https://google.github.io/filament/Filament.md.html#materialsystem/specularbrdf/normaldistributionfunction(speculard)
        float specularD(float alpha, float dotNH, vec3 normalDirection, vec3 halfDirection) {
            vec3 crossNH = cross(normalDirection, halfDirection);
            float a = dotNH * alpha;
            float k = alpha / (dot(crossNH, crossNH) + a * a);
            float d = k * k * (1.0 / kPi);
            return min(d, kMediumpFloatMax);
        }
        
        float safeQuotient(float numerator, float denominator) {
            if (denominator == 0.0) {
                return 0.0;
            } else {
                return numerator / denominator;
            }
        }
        
        float g1(float dotNV, float alphaSquared) {
            return safeQuotient(2.0 * dotNV, dotNV + sqrt(alphaSquared + (1.0 - alphaSquared) * dotNV * dotNV));
        }
        
        float specularG(float dotNL, float dotNV, float alphaSquared) {
            return g1(dotNV, alphaSquared) * g1(dotNL, alphaSquared);
        }
        
        vec3 fresnelColor(vec3 specularBaseColor, float dotVH) {
            vec3 one = vec3(1.0, 1.0, 1.0);
            float scale = exp2((-5.55473 * dotVH - 6.98316) * dotVH);
            return specularBaseColor + (one - specularBaseColor) * scale;
        }
        
        vec3 brdf(vec3 normalDirection, vec3 directionToCamera, vec3 directionToLight, float alpha, float dotNV, float dotNL, vec3 specularBaseColor, vec3 normalIlluminance) {
            vec3 halfDirection = normalize(directionToCamera + directionToLight);
            float dotVH = positiveDotProduct(directionToCamera, halfDirection);
            float dotNH = positiveDotProduct(normalDirection, halfDirection);
            float dotNHSquared = dotNH * dotNH;
        
            float d = specularD(alpha, dotNH, normalDirection, halfDirection);
            float g = specularG(dotNL, dotNV, alpha * alpha);
            vec3 f = fresnelColor(specularBaseColor, dotVH);
            return safeQuotient(d * g, 4.0 * dotNL * dotNV) * f;
        }
        
        vec3 sampleFacetNormal(vec3 vH, vec3 vT1, vec3 vT2, float s, float alpha) {
            float t2 = (1.0 - s);
            vec3 vNh = t2 * vT2 + sqrt(max(0.0, 1.0 - t2 * t2)) * vH;
            return normalize(vec3(alpha * vNh.x, alpha * vNh.y, max(0.0, vNh.z)));
        }
        
        vec3 softLightingLuminance(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localLightDirection
        ) {
            float sinElevation = dot(localLightDirection, localUpDirection);
            float t = (sinElevation + 1.0) / 2.0;
            return aboveLuminance * t + belowLuminance * (1.0 - t);
        }
        
        vec3 softLightingSpecularSample(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localViewDirection,
            vec3 localLightDirection,
            vec3 localHalfDirection,
            float alphaSquared,
            vec3 specularBaseColor
        ) {
            vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, localUpDirection, localLightDirection);
            float dotVH = positiveDotProduct(localViewDirection, localHalfDirection);
            float dotNL = localLightDirection.z;
            return luminance * (fresnelColor(specularBaseColor, dotVH) * g1(dotNL, alphaSquared));
        }
        
        vec3 softLighting(
            vec3 normalDirection,
            vec3 diffuseBaseColor,
            vec3 specularBaseColor,
            float alpha,
            vec3 directionToCamera,
            vec3 viewY,
            vec4 xyz_type,
            vec4 rgb_parameter
        ) {
            float alphaSquared = alpha * alpha;
            vec3 upDirection = xyz_type.xyz;
            vec3 luminanceAbove = rgb_parameter.rgb;
            vec3 luminanceBelow = rgb_parameter.a * luminanceAbove;
            vec3 crossProduct = cross(normalDirection, directionToCamera);
            float crossMagnitude = length(crossProduct);
            vec3 xDirection = vec3(0.0, 0.0, 0.0);
            vec3 yDirection = vec3(0.0, 0.0, 0.0);
            if (crossMagnitude > 1.0e-6) {
                yDirection = (1.0 / crossMagnitude) * crossProduct;
                xDirection = cross(yDirection, normalDirection);
            } else {
                vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
                xDirection = normalize(cross(viewY, normalDirection));
                yDirection = cross(normalDirection, xDirection);
            }
            float localViewX = dot(directionToCamera, xDirection);
            float localViewZ = dot(directionToCamera, normalDirection);
            vec3 localViewDirection = vec3(localViewX, 0, localViewZ);
            float localUpX = dot(upDirection, xDirection);
            float localUpY = dot(upDirection, yDirection);
            float localUpZ = dot(upDirection, normalDirection);
            vec3 localUpDirection = vec3(localUpX, localUpY, localUpZ);
        
            vec3 vH = normalize(vec3(alpha * localViewX, 0.0, localViewZ));
            vec3 vT1 = vec3(0.0, 1.0, 0.0);
            vec3 vT2 = cross(vH, vT1);
            float s = 0.5 * (1.0 + vH.z);
        
            vec3 localHalfDirection = sampleFacetNormal(vH, vT1, vT2, s, alpha);
            vec3 localLightDirection = vec3(0.0, 0.0, 0.0);
        
            localLightDirection = -reflect(localViewDirection, localHalfDirection);
            vec3 specular = softLightingSpecularSample(luminanceAbove, luminanceBelow, localUpDirection, localViewDirection, localLightDirection, localHalfDirection, alphaSquared, specularBaseColor);
        
            localLightDirection = vec3(0.000000, 0.000000, 1.000000);
            vec3 diffuse = softLightingLuminance(luminanceAbove, luminanceBelow, localUpDirection, localLightDirection) * localLightDirection.z;
        
            return specular + diffuse * diffuseBaseColor;
        }
        
        vec3 physicalLight(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            vec3 normalDirection,
            vec3 directionToCamera,
            vec3 viewY,
            float dotNV,
            vec3 diffuseBaseColor,
            vec3 specularBaseColor,
            float alpha,
            float ambientOcclusion
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDisabledLight) {
                return vec3(0.0, 0.0, 0.0);
            } else if (lightType == kSoftLighting) {
                return softLighting(normalDirection, diffuseBaseColor, specularBaseColor, alpha, directionToCamera, viewY, xyz_type, rgb_parameter) * ambientOcclusion;
            }
        
            vec3 directionToLight = vec3(0.0, 0.0, 0.0);
            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);
            getDirectionToLightAndNormalIlluminance(xyz_type, rgb_parameter, surfacePosition, directionToLight, normalIlluminance);
        
            float dotNL = positiveDotProduct(normalDirection, directionToLight);
            vec3 specularColor = brdf(normalDirection, directionToCamera, directionToLight, alpha, dotNV, dotNL, specularBaseColor, normalIlluminance);
            return (normalIlluminance * dotNL) * ((diffuseBaseColor / kPi) + specularColor);
        }
        
        vec3 physicalLighting(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 baseColor,
            vec3 directionToCamera,
            mat4 viewMatrix,
            float roughness,
            float metallic,
            float ambientOcclusion,
            mat4 lights12,
            mat4 lights34,
            mat4 lights56,
            mat4 lights78,
            vec4 enabledLights
        ) {
            float dotNV = positiveDotProduct(surfaceNormal, directionToCamera);
            float alpha = roughness * roughness;
            float nonmetallic = 1.0 - metallic;
            vec3 diffuseBaseColor = nonmetallic * 0.96 * baseColor;
            vec3 specularBaseColor = nonmetallic * 0.04 * vec3(1.0, 1.0, 1.0) + metallic * baseColor;
            vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        
            vec3 litColor1 = enabledLights[0] == 1.0 ? physicalLight(lights12[0], lights12[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion) : vec3(0.0, 0.0, 0.0);
            vec3 litColor2 = enabledLights[1] == 1.0 ? physicalLight(lights12[2], lights12[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion) : vec3(0.0, 0.0, 0.0);
            vec3 litColor3 = enabledLights[2] == 1.0 ? physicalLight(lights34[0], lights34[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion) : vec3(0.0, 0.0, 0.0);
            vec3 litColor4 = enabledLights[3] == 1.0 ? physicalLight(lights34[2], lights34[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion) : vec3(0.0, 0.0, 0.0);
            vec3 litColor5 = physicalLight(lights56[0], lights56[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion);
            vec3 litColor6 = physicalLight(lights56[2], lights56[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion);
            vec3 litColor7 = physicalLight(lights78[0], lights78[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion);
            vec3 litColor8 = physicalLight(lights78[2], lights78[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha, ambientOcclusion);
            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;
        }
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        float inverseAlpha(float value) {
            // the value used for alpha cannot be less than zero
            float signValue = float(sign(value));
            return signValue / (value + (signValue - 1.0));
        }
        
        vec4 toSrgb(vec4 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            // linearColor has premultiplied alpha, but tone mapping works on
            // non-premultiplied linear RGB so we need to temporarily 'undo' the
            // premultiplication before applying tone mapping
            float invAlpha = inverseAlpha(linearColor.a);
            float unitR = (linearColor.r * invAlpha) / referenceWhite.r;
            float unitG = (linearColor.g * invAlpha) / referenceWhite.g;
            float unitB = (linearColor.b * invAlpha) / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            // Apply tone mapping
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            // Re-apply premultiplied alpha after tone mapping
            return vec4(toneMapped * linearColor.a, linearColor.a);
        }
        
        void main() {
            vec3 normalDirection = normalize(interpolatedNormal) * getNormalSign();
            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);
        
            vec3 linearColor = physicalLighting(
                interpolatedPosition,
                normalDirection,
                baseColor.rgb,
                directionToCamera,
                viewMatrix,
                roughness,
                metallic,
                ambientOcclusion,
                lights12,
                lights34,
                lights56,
                lights78,
                enabledLights
            );
        
            gl_FragColor = toSrgb(vec4(linearColor, baseColor.a), sceneProperties);
        }
    `,attributes:{},uniforms:{ambientOcclusion:"ek",baseColor:"pI",enabledLights:"af",lights12:"ga",lights34:"hJ",lights56:"hK",lights78:"hL",metallic:"hQ",roughness:"ig",sceneProperties:"n",viewMatrix:"o"}},Xl=Jt(function(e,r,a,t,o,c,i){return v(ka,e,o,De(function(f,$,s,d,b,m,g,_){var y=g.a,S=g.b;return A(Ne,v(ir,d,i,_),J6,od,c,{ek:t,pI:ua(e),af:S,ga:y.ga,hJ:y.hJ,hK:y.hK,hL:y.hL,hQ:a,k:s,l:$,m,ig:r,n:f,o:b})}))}),JV=l(function(e,r){return{$:0,a:e,b:r}}),cd=P(function(e,r,a){return{$:1,a:e,b:r,c:a}}),wi=l(function(e,r){return{$:1,a:e,b:r}}),K6=function(e){return{$:0,a:e}},Mr=o_,id=function(e){return n(Mr,e,1)},Yl=n(Mr,0,0),Sa=l(function(e,r){if(r.$){var t=r.a.X;return h(t,Yl)}else{var a=r.a;return h(e,id(a))}}),yc=l(function(e,r){if(r.$){var a=r.a.X,t=r.a.rb;return h(a,(function(){return t?-1:1})())}else return h(e,0)}),fd=P(function(e,r,a){var t=I(e,r,a);if(t.a.$===1){var o=t.a.a.X;return v(cd,K6(o),n(Sa,o,r),n(yc,o,a))}else if(t.b.$){var c=t.a.a,o=t.b.a.X;return v(cd,n(wi,c,o),n(Sa,o,r),n(yc,o,a))}else if(t.c.$){var c=t.a.a,o=t.c.a.X;return v(cd,n(wi,c,o),n(Sa,o,r),n(yc,o,a))}else{var c=t.a.a,i=t.b.a,f=t.c;return n(JV,c,i)}}),KV=W(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),i$=je(function(e,r,a,t,o){return{$:1,a:e,b:r,c:a,d:t,e:o}}),ZV=je(function(e,r,a,t,o){return{$:0,a:e,b:r,c:a,d:t,e:o}}),$d=je(function(e,r,a,t,o){var c=A(ZV,e,r,a,t,o);if(c.a.$===1){var i=c.a.a.X;return A(i$,K6(i),n(Sa,i,r),n(Sa,i,a),n(Sa,i,t),n(yc,i,o))}else if(c.b.$){var f=c.a.a,i=c.b.a.X;return A(i$,n(wi,f,i),h(i,Yl),n(Sa,i,a),n(Sa,i,t),n(yc,i,o))}else if(c.c.$){var f=c.a.a,i=c.c.a.X;return A(i$,n(wi,f,i),n(Sa,i,r),h(i,Yl),n(Sa,i,t),n(yc,i,o))}else if(c.d.$){var f=c.a.a,i=c.d.a.X;return A(i$,n(wi,f,i),n(Sa,i,r),n(Sa,i,a),h(i,Yl),n(yc,i,o))}else if(c.e.$){var f=c.a.a,i=c.e.a.X;return A(i$,n(wi,f,i),n(Sa,i,r),n(Sa,i,a),n(Sa,i,t),h(i,1))}else{var f=c.a.a,$=c.b.a,s=c.c.a,d=c.d.a,b=c.e;return C(KV,f,$,s,d)}}),Z6={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        uniform mediump float backlight;
        uniform highp mat4 sceneProperties;
        
        varying mediump vec2 interpolatedUv;
        
        float inverseGamma(float u) {
            if (u <= 0.04045) {
                return clamp(u / 12.92, 0.0, 1.0);
            } else {
                return clamp(pow((u + 0.055) / 1.055, 2.4), 0.0, 1.0);
            }
        }
        
        float inverseAlpha(float value) {
            // the value used for alpha cannot be less than zero
            float signValue = float(sign(value));
            return signValue / (value + (signValue - 1.0));
        }
        
        vec4 fromSrgb(vec4 srgbColor) {
            float invAlpha = inverseAlpha(srgbColor.a);
            return vec4(
                inverseGamma(srgbColor.r * invAlpha) * srgbColor.a,
                inverseGamma(srgbColor.g * invAlpha) * srgbColor.a,
                inverseGamma(srgbColor.b * invAlpha) * srgbColor.a,
                srgbColor.a
            );
        }
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 toSrgb(vec4 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            // linearColor has premultiplied alpha, but tone mapping works on
            // non-premultiplied linear RGB so we need to temporarily 'undo' the
            // premultiplication before applying tone mapping
            float invAlpha = inverseAlpha(linearColor.a);
            float unitR = (linearColor.r * invAlpha) / referenceWhite.r;
            float unitG = (linearColor.g * invAlpha) / referenceWhite.g;
            float unitB = (linearColor.b * invAlpha) / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            // Apply tone mapping
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            // Re-apply premultiplied alpha after tone mapping
            return vec4(toneMapped * linearColor.a, linearColor.a);
        }
        
        void main () {
            vec4 linearTextureColor = fromSrgb(texture2D(colorTexture, interpolatedUv));
            vec4 emissiveColor = vec4(linearTextureColor.rgb * backlight, linearTextureColor.a);
            gl_FragColor = toSrgb(emissiveColor, sceneProperties);
        }
    `,attributes:{},uniforms:{backlight:"iV",colorTexture:"g6",sceneProperties:"n"}},ud=je(function(e,r,a,t,o){return n(Ca,a,De(function(c,i,f,$,s,d,b,m){return A(Ne,v(ir,$,o,m),G6,Z6,t,{iV:ji(r),g6:e,k:f,l:i,m:d,n:c,o:s})}))}),Ql={src:`
        precision highp float;
        
        attribute highp vec3 position;
        attribute highp vec3 normal;
        attribute mediump vec2 uv;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        varying mediump vec2 interpolatedUv;
        varying highp vec4 interpolatedTangent;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        void main () {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedPosition = worldPosition.xyz;
            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);
            interpolatedUv = uv;
            interpolatedTangent = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{normal:"ag",position:"ta",uv:"gO"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",sceneProperties:"n",viewMatrix:"o"}},XV=Rr(function(e,r,a,t,o,c){if(e.$){var f=e.a,$=e.b;return v(ka,f,t,De(function(s,d,b,m,g,_,y,S){var w=y.a,j=y.b;return A(Ne,v(ir,m,c,S),Ql,Si,o,{bx:r,bA:a,ev:ua(f),af:j,ga:w.ga,hJ:w.hJ,hK:w.hK,hL:w.hL,e5:$,k:b,l:d,bI:$,bJ:0,m:_,n:s,o:g})}))}else{var i=e.a;return n(Ca,t,De(function(s,d,b,m,g,_,y,S){var w=y.a,j=y.b;return A(Ne,v(ir,m,c,S),Ql,Si,o,{bx:r,bA:a,ev:Pi,af:j,ga:w.ga,hJ:w.hJ,hK:w.hK,hL:w.hL,e5:i,k:b,l:d,bI:i,bJ:0,m:_,n:s,o:g})}))}}),YV=De(function(e,r,a,t,o,c,i,f){if(e.$){var s=e.a,d=e.b;return v(ka,s,c,De(function(b,m,g,_,y,S,w,j){var B=w.a,E=w.b;return A(Ne,v(ir,_,f,j),Ql,xi,i,{bx:d,en:d,bA:id(1),et:ua(s),ew:o,ex:a,af:E,ga:B.ga,hJ:B.hJ,hK:B.hK,hL:B.hL,e7:t,k:g,l:m,bI:d,bJ:0,m:S,fe:r,n:b,o:y})}))}else{var $=e.a;return n(Ca,c,De(function(b,m,g,_,y,S,w,j){var B=w.a,E=w.b;return A(Ne,v(ir,_,f,j),Ql,xi,i,{bx:$,en:$,bA:id(1),et:Pi,ew:o,ex:a,af:E,ga:B.ga,hJ:B.hJ,hK:B.hK,hL:B.hL,e7:t,k:g,l:m,bI:$,bJ:0,m:S,fe:r,n:b,o:y})}))}}),QV=function(e){var r=e,a=r,t=a.nA,o=a.nw,c=a.sh,i=a.r6,f=a.si,$=a.r7;return{pi:t+.5*(o-t),pk:c+.5*(i-c),R:f+.5*($-f)}},eE=function(e){var r=e;return r.nw},rE=function(e){var r=e;return r.r6},X6=function(e){var r=e;return r.r7},aE=function(e){var r=e;return r.nA},nE=function(e){var r=e;return r.sh},Y6=function(e){var r=e;return r.si},Li=l(function(e,r){var a=e,t=r;return t-a}),Q6=function(e){return I(n(Li,aE(e),eE(e)),n(Li,nE(e),rE(e)),n(Li,Y6(e),X6(e)))},Be=function(e){var r=Q6(e),a=r.a,t=r.b,o=r.c;return{p2:bc(QV(e)),rp:a/2,rq:t/2,rr:o/2}},f$=l(function(e,r){switch(e.$){case 0:if(e.b.$){var f=e.a,$=e.b.a.X;switch(r.$){case 0:return ue;case 1:return ue;case 2:return ue;case 3:return ue;case 4:return ue;case 5:var o=r.a,i=r.c,t=r.d;return C(rd,$,Be(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return C(rd,$,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return C(rd,$,Be(o),i,t);case 8:return ue;case 9:return ue;default:return ue}}else{var a=e.b.a;switch(r.$){case 0:return ue;case 1:var o=r.a,i=r.c,t=r.d;return C(Ut,a,Be(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return C(Ut,a,Be(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return C(Ut,a,Be(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return C(Ut,a,Be(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return C(Ut,a,Be(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return C(Ut,a,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return C(Ut,a,Be(o),i,t);case 8:var o=r.a,i=r.c;return C(Ut,a,Be(o),i,0);case 9:var o=r.a,i=r.c;return C(Ut,a,Be(o),i,0);default:var o=r.a,c=r.b,i=r.d;return C(qV,a,c,Be(o),i)}}case 1:if(e.b.$){var b=e.a,$=e.b.a.X,d=e.c;switch(r.$){case 0:return ue;case 1:return ue;case 2:return ue;case 3:return ue;case 4:return ue;case 5:var o=r.a,i=r.c,t=r.d;return A(ud,$,d,Be(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return A(ud,$,d,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return A(ud,$,d,Be(o),i,t);case 8:return ue;case 9:return ue;default:return ue}}else{var s=e.b.a,d=e.c;switch(r.$){case 0:return ue;case 1:var o=r.a,i=r.c,t=r.d;return A(Wt,s,d,Be(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return A(Wt,s,d,Be(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return A(Wt,s,d,Be(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return A(Wt,s,d,Be(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return A(Wt,s,d,Be(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return A(Wt,s,d,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return A(Wt,s,d,Be(o),i,t);case 8:var o=r.a,i=r.c;return A(Wt,s,d,Be(o),i,0);case 9:var o=r.a,i=r.c;return A(Wt,s,d,Be(o),i,0);default:var o=r.a,c=r.b,i=r.d;return A(NV,s,d,c,Be(o),i)}}case 2:var m=e.a,g=e.b,Ve=e.c,fe=e.d,_=v(fd,g,Ve,fe);if(_.$){var j=_.a,B=_.b,E=B.a,V=B.b,O=_.c,X=O.a,oe=O.b;switch(r.$){case 0:return ue;case 1:return ue;case 2:return ue;case 3:return ue;case 4:return ue;case 5:return ue;case 6:var o=r.a,i=r.c,w=r.d;return _r(XV,j,E,V,Be(o),i,w);case 7:var o=r.a,i=r.c,w=r.d;return Kt(UV,j,E,V,X,oe,Be(o),i,w);case 8:return ue;case 9:return ue;default:return ue}}else{var y=_.a,S=_.b;switch(r.$){case 0:return ue;case 1:return ue;case 2:var o=r.a,i=r.c,w=r.d;return A(Zl,y,S,Be(o),i,w);case 3:return ue;case 4:var o=r.a,i=r.c,w=r.d;return A(Zl,y,S,Be(o),i,w);case 5:return ue;case 6:var o=r.a,i=r.c,w=r.d;return A(Zl,y,S,Be(o),i,w);case 7:var o=r.a,i=r.c,w=r.d;return A(Zl,y,S,Be(o),i,w);case 8:return ue;case 9:return ue;default:return ue}}default:var ie=e.a,me=e.b,Te=e.c,Ie=e.d,Ve=e.e,fe=e.f,Ee=A($d,me,Te,Ie,Ve,fe);if(Ee.$){var zr=Ee.a,Ze=Ee.b,ur=Ze.a,Dr=Ze.b,Yr=Ee.c,tr=Yr.a,Qr=Yr.b,nn=Ee.d,E=nn.a,V=nn.b,Xn=Ee.e,X=Xn.a,oe=Xn.b;switch(r.$){case 0:return ue;case 1:return ue;case 2:return ue;case 3:return ue;case 4:return ue;case 5:return ue;case 6:var o=r.a,i=r.c,t=r.d;return Kt(YV,zr,ur,Dr,tr,Qr,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return WV(zr)(ur)(Dr)(tr)(Qr)(E)(V)(X)(oe)(Be(o))(i)(t);case 8:return ue;case 9:return ue;default:return ue}}else{var Ue=Ee.a,rr=Ee.b,Ke=Ee.c,S=Ee.d;switch(r.$){case 0:return ue;case 1:return ue;case 2:var o=r.a,i=r.c,t=r.d;return aa(Xl,Ue,rr,Ke,S,Be(o),i,t);case 3:return ue;case 4:var o=r.a,i=r.c,t=r.d;return aa(Xl,Ue,rr,Ke,S,Be(o),i,t);case 5:return ue;case 6:var o=r.a,i=r.c,t=r.d;return aa(Xl,Ue,rr,Ke,S,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return aa(Xl,Ue,rr,Ke,S,Be(o),i,t);case 8:return ue;case 9:return ue;default:return ue}}}}),$$=function(e){return{$:3,a:e}},e8=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.p2;return{p2:{pi:a*c.pi,pk:t*c.pk,R:o*c.R},rp:a*r.rp,rq:t*r.rq,rr:o*r.rr}}),r8=m_,ld=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){var d=e.a,b=e.b,m=e.c,g=U6(t),_=g.pi,y=g.pk,S=g.R,w=g.uA,j=r8({uA:w,pi:_*d,pk:y*b,R:S*m});return Kt(r,a,j,o,c,i,f,$,s)}}}}}}}}}},vd=l(function(e,r){switch(r.$){case 0:return qs;case 6:var a=r.a,t=r.b;return n(pc,a,n(vd,e,t));case 1:var o=r.a,c=r.b;return n(Ca,n(e8,e,o),n(ld,e,c));case 2:var o=r.a,c=r.b;return n(V6,n(e8,e,o),n(ld,e,c));case 4:return r;case 3:var c=r.a;return $$(n(ld,e,c));default:var i=r.a;return F6(n(N,vd(e),i))}}),e0=l(function(e,r){var a=r;return n(vd,e,a)}),r0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},NK=Q,Ti=519,JK=Q,a8=7683,n8=7682,Pa=7680,tE=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return function(d){return{$:2,a:e,b:r,c:a,d:t,e:o,f:c,g:i,h:f,i:$,j:s,k:d}}}}}}}}}}}},sd=P(function(e,r,a){var t=e.tk,o=e.jL,c=e.k8,i=l(function(s,d){var b=s;return d(b)}),f=l(function(s,d){var b=s;return d(b)}),$=function(s){return n(ke,i(s.gD),n(ke,f(s.fT),n(ke,f(s.gS),f(s.gT))))};return n($,a,n($,r,v(tE,t,o,c)))}),oE=v(sd,{jL:0,tk:0,k8:15},{fT:Pa,gD:Ti,gS:Pa,gT:a8},{fT:Pa,gD:Ti,gS:Pa,gT:n8}),cE=v(sd,{jL:0,tk:0,k8:15},{fT:Pa,gD:Ti,gS:Pa,gT:n8},{fT:Pa,gD:Ti,gS:Pa,gT:a8}),a0=l(function(e,r){return e?n(D,cE,r):n(D,oE,r)}),iE={src:`
        precision highp float;
        
        attribute highp vec3 position;
        attribute highp vec3 normal;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 shadowLight;
        
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        vec3 getDirectionToLight(vec3 surfacePosition, vec4 xyz_type, vec4 rgb_parameter) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                return xyz_type.xyz;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                return normalize(lightPosition - surfacePosition);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 shadowVertexPosition(vec3 position, vec3 normal, mat4 shadowLight, vec4 modelScale, mat4 modelMatrix, mat4 viewMatrix, mat4 projectionMatrix, mat4 sceneProperties) {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            vec3 worldNormal = getWorldNormal(normal, vec4(modelScale.xyz, 1.0), modelMatrix);
            vec4 xyz_type = shadowLight[0];
            vec4 rgb_parameter = shadowLight[1];
            vec3 directionToLight = getDirectionToLight(worldPosition.xyz, xyz_type, rgb_parameter);
            vec3 offset = vec3(0.0, 0.0, 0.0);
            float sceneDiameter = sceneProperties[3][1];
            if (dot(directionToLight, worldNormal) <= 0.0) {
                offset = -sceneDiameter * directionToLight;
            } else {
                offset = -0.001 * sceneDiameter * directionToLight;
            }
            vec4 offsetPosition = worldPosition + vec4(offset, 0.0);
            return projectionMatrix * (viewMatrix * offsetPosition);
        }
        
        void main () {
            gl_Position = shadowVertexPosition(
                position,
                normal,
                shadowLight,
                modelScale,
                modelMatrix,
                viewMatrix,
                projectionMatrix,
                sceneProperties
            );
        }
    `,attributes:{normal:"ag",position:"ta"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",sceneProperties:"n",shadowLight:"iq",viewMatrix:"o"}},fE=function(e){if(e.$){var r=e.c;return M(De(function(a,t,o,c,i,f,$,s){return A(Ne,n(a0,c,s),iE,r0,r,{k:o,l:t,m:f,n:a,iq:$,o:i})}))}else return L},Cc=function(e){var r=fE(e);if(r.$)return ue;var a=r.a;return $$(a)},$E=W(function(e,r,a,t){var o=n(f$,a,D6),c=(function(){var d=h(e,r);return d.a?d.b?ko(u([o,Cc(I6)])):o:d.b?Cc(I6):ue})(),i=RV(t),f=i.a,$=i.b,s=i.c;return n(Fl,pV(t),n(e0,I(f,$,s),c))}),uE=l(function(e,r){return C($E,!0,!0,e,r)}),KK=Q,Wa=function(e){var r=e;return Me(r)},dd=l(function(e,r){var a=e,t=r;return K(t,a)>-1}),bd=l(function(e,r){var a=e,t=r;return a+.5*(t-a)}),lE=_t({pi:-1,pk:0,R:0}),vE=_t({pi:0,pk:-1,R:0}),t8=_t({pi:0,pk:0,R:-1}),o8=_t({pi:1,pk:0,R:0}),u$=_t({pi:0,pk:1,R:0}),sE=Rr(function(e,r,a,t,o,c){var i=n(dd,a,c)?Ns:t8,f=n(dd,r,o)?u$:vE,$=n(dd,e,t)?o8:lE,s=I(Wa(n(Li,e,t)),Wa(n(Li,r,o)),Wa(n(Li,a,c))),d=v(Et,n(bd,e,t),n(bd,r,o),n(bd,a,c)),b=Vl({a0:d,uI:$,uQ:f,uW:i});return{pB:b,qB:s}}),dE=l(function(e,r){return _r(sE,r$(e),a$(e),n$(e),r$(r),a$(r),n$(r))}),gr=P(function(e,r,a){return{pi:e,pk:r,R:a}}),c8=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=I(a/2,t/2,o/2),i=c.a,f=c.b,$=c.c;return n(uE,e,n(dE,v(gr,-i,-f,-$),v(gr,i,f,$)))}),ZK=Q,bE=P(function(e,r,a){return{T:n(El,e,r),f9:Wa(a.f9),te:Wa(a.te)}}),pE=function(e){var r=e;return r.T},mE=l(function(e,r){var a=o$(e),t=t$(e),o=o$(r),c=jr(o),i=l(function(s,d){var b=s.a,m=s.b,g=s.c;return n(D,I(b+c,m+c,g+c),d)}),f=t$(r),$=v(ve,i,f,t);return{aK:$,k4:n(z4,o,a)}}),n0={aK:k,k4:Lo},i8=function(e){var r=e;return{aK:Ae(r.aK),k4:r.k4}},pd=function(e){if(e.b){var r=e.a,a=e.b;return i8(v(ve,mE,i8(r),a))}else return n0},hE=l(function(e,r){var a=e.ta,t=e.ag;return n(D,{ag:Wl(t),ta:yt(a)},r)}),f8=i_,$8=f_,u8=$_,gE=Jt(function(e,r,a,t,o,c,i){e:for(;;)if(i.b){var f=i.a,$=i.b,s=u8(f.ta),d=$8(f.ta),b=f8(f.ta),m=n(qe,e,b),g=n(ge,r,b),_=n(qe,a,d),y=n(ge,t,d),S=n(qe,o,s),w=n(ge,c,s),j=$;e=m,r=g,a=_,t=y,o=S,c=w,i=j;continue e}else return j6({nw:r,r6:t,r7:c,nA:e,sh:a,si:o})}),l8=l(function(e,r){var a=u8(e.ta),t=$8(e.ta),o=f8(e.ta);return aa(gE,o,o,t,t,a,a,r)}),v8=function(e){var r=v(A$,hE,k,o$(e));if(r.b){var a=r.a,t=r.b,o=n(ki,r,t$(e)),c=n(l8,a,t);return C(P6,c,e,o,0)}else return Ks},_E=je(function(e,r,a,t,o){e:for(;;){var c=t(r/a),i=n(D,c,o);if(ee(r,e))return i;var f=e,$=r-1,s=a,d=t,b=i;e=f,r=$,a=s,t=d,o=b;continue e}}),t0=l(function(e,r){return e<1?k:A(_E,0,e-1,e,r,k)}),o0=l(function(e,r){var a=vr(r);return a>=2?{aK:n(N,function(t){return ee(t,a-1)?I(0,a,1):I(0,1+t,2+t)},n(qa,0,a-1)),k4:ho(n(D,e,r))}:n0}),yE=Rr(function(e,r,a,t,o,c){e:for(;;){var i=n(Kr,r,t+1),f=r*n(Kr,a,o+1),$=r*o,s=f+i,d=$+i,b=f+t,m=$+t,g=I(m,d,s),_=I(m,s,b),y=n(D,g,n(D,_,c));if(t>0){var S=e,w=r,j=a,B=t-1,E=o,V=y;e=S,r=w,a=j,t=B,o=E,c=V;continue e}else if(o>0){var S=e,w=r,j=a,B=e-1,E=o-1,V=y;e=S,r=w,a=j,t=B,o=E,c=V;continue e}else return y}}),s8=je(function(e,r,a,t,o){return a<=1||t<=1?n0:{aK:_r(yE,e,a,t,e-1,r-1,k),k4:n(V$,a*t,function(c){return n(o,n(Kr,a,c),c/a|0)})}}),CE=P(function(e,r,a){return A(s8,e,r,e+1,r,a)}),d8=je(function(e,r,a,t,o){return n(a,t/e,o/r)}),kE=P(function(e,r,a){return v(CE,e,r,v(d8,e,r,a))}),kt=function(e){return e},kc=function(e){return e},b8=(function(){var e=v(kE,1,72,l(function(f,$){var s=2*Zr*$,d=Ha(s),b=Ea(s);return{ag:kc({pi:b,pk:-d,R:0}),ta:kt({pi:b,pk:-d,R:f-.5})}})),r=kc({pi:0,pk:0,R:1}),a={ag:r,ta:kt({pi:0,pk:0,R:.5})},t=n(o0,a,n(t0,72,function(f){var $=2*Zr*f;return{ag:r,ta:kt({pi:Ea($),pk:Ha($),R:.5})}})),o=kc({pi:0,pk:0,R:-1}),c={ag:o,ta:kt({pi:0,pk:0,R:-.5})},i=n(o0,c,n(t0,72,function(f){var $=2*Zr*f;return{ag:o,ta:kt({pi:Ea($),pk:-Ha($),R:-.5})}}));return Ul(v8(pd(u([t,i,e]))))})(),p8=Nl(b8),SE=function(e){var r=e,a=Me(r.R),t=Me(r.pk),o=Me(r.pi);if(K(o,t)<1)if(K(o,a)<1){var c=ya(r.R*r.R+r.pk*r.pk);return{pi:0,pk:-r.R/c,R:r.pk/c}}else{var c=ya(r.pk*r.pk+r.pi*r.pi);return{pi:-r.pk/c,pk:r.pi/c,R:0}}else if(K(t,a)<1){var c=ya(r.R*r.R+r.pi*r.pi);return{pi:r.R/c,pk:0,R:-r.pi/c}}else{var c=ya(r.pi*r.pi+r.pk*r.pk);return{pi:-r.pk/c,pk:r.pi/c,R:0}}},md=function(e){var r=SE(e),a=r,t=a,o=e,c=o,i={pi:c.pk*t.R-c.R*t.pk,pk:c.R*t.pi-c.pi*t.R,R:c.pi*t.pk-c.pk*t.pi};return h(r,i)},m8=function(e){var r=p6(e),a=md(r),t=a.a,o=a.b;return Vl({a0:m6(e),uI:t,uQ:o,uW:r})},PE=function(e){var r=e;return r.f9},xE=function(e){var r=e;return r.te},jE=W(function(e,r,a,t){var o=m8(pE(t)),c=n(f$,a,b8),i=(function(){var b=h(e,r);return b.a?b.b?ko(u([c,Cc(p8)])):c:b.b?Cc(p8):ue})(),f=xE(t),$=f,s=PE(t),d=s;return n(Fl,o,n(e0,I($,$,d),i))}),wE=l(function(e,r){return C(jE,!0,!0,e,r)}),hd=P(function(e,r,a){return n(wE,e,v(bE,On,u$,{f9:an(a),te:an(r)}))}),gd=function(e){return ko(e)},Mi=gd,_d=function(e){var r=e.a,a=e.b,t=e.c;return C6(v(g6,r,a,t))},yd=function(e){return _d(I(0,e,0))},LE=function(e){var r=e;return r.p2},TE=function(e){var r=e;return r.te},ME=function(e){var r=e;return r},zE=l(function(e,r){var a=e.ta,t=e.ag,o=e.gO,c=e.gC,i=e.t6,f=ME(c),$=i?-1:1,s=o,d=s.a,b=s.b,m={ag:Wl(t),ta:yt(a),gC:r8({uA:$,pi:f.pi,pk:f.pk,R:f.R}),gO:n(Mr,d,b)};return n(D,m,r)}),DE=function(e){var r=v(A$,zE,k,o$(e));if(r.b){var a=r.a,t=r.b,o=n(ki,r,t$(e)),c=n(l8,a,t);return C(x6,c,e,o,0)}else return Ks},RE=P(function(e,r,a){return A(s8,e,r,e+1,r+1,a)}),BE=P(function(e,r,a){return v(RE,e,r,v(d8,e,r,a))}),AE=Ul(DE(v(BE,72,72,l(function(e,r){var a=2*Zr*e,t=Ha(a),o=-Zr/2+Zr*r,c=Ha(o),i=Ea(a),f=Ea(o),$={pi:f*i,pk:f*t,R:c};return{ag:kc($),ta:kt($),gC:kc({pi:-t,pk:i,R:0}),t6:!0,gO:h(e,r)}})))),c0=72,i0=2*c0,IE=l(function(e,r){e:for(;;){var a=i0+1,t=n(Kr,i0,2*e+3),o=n(Kr,i0,2*e+2),c=2*e+1,i=2*e,f=i0,$=n(D,I(f,i,o),n(D,I(i,t,o),n(D,I(i,c,t),n(D,I(c,a,t),r))));if(e){var s=e-1,d=$;e=s,r=d;continue e}else return $}}),FE=P(function(e,r,a){return a<=.5?e+a*(r-e):r+(1-a)*(e-r)}),VE=l(function(e,r){e:for(;;){var a=v(FE,0,2*Zr,e/c0),t={gX:a,hX:0,ia:1},o={gX:a,hX:1,ia:1},c=n(D,t,n(D,o,r));if(e){var i=e-1,f=c;e=i,r=f;continue e}else return c}}),EE=(function(){var e=n(VE,c0-1,u([{gX:0,hX:0,ia:0},{gX:0,hX:1,ia:0}])),r=n(IE,c0-1,k);return n(ki,e,r)})(),HE={src:`
        precision highp float;
        
        attribute highp float angle;
        attribute highp float offsetScale;
        attribute highp float radiusScale;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 shadowLight;
        
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        const lowp float kPerspectiveProjection = 0.0;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 getDirectionToLight(vec3 surfacePosition, vec4 xyz_type, vec4 rgb_parameter) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                return xyz_type.xyz;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                return normalize(lightPosition - surfacePosition);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec3 perpendicularTo(vec3 d) {
            float absX = abs(d.x);
            float absY = abs(d.y);
            float absZ = abs(d.z);
            if (absX <= absY) {
                if (absX <= absZ) {
                    float scale = 1.0 / length(d.zy);
                    return vec3(0.0, -d.z * scale, d.y * scale);
                } else {
                    float scale = 1.0 / length(d.xy);
                    return vec3(-d.y * scale, d.x * scale, 0.0);
                }
            } else {
                if (absY <= absZ) {
                    float scale = 1.0 / length(d.xz);
                    return vec3(d.z * scale, 0.0, -d.x * scale);
                } else {
                    float scale = 1.0 / length(d.xy);
                    return vec3(-d.y * scale, d.x * scale, 0.0);
                }
            }
        }
        
        void main () {
            vec4 worldCenter = getWorldPosition(vec3(0.0, 0.0, 0.0), modelScale, modelMatrix);
            vec4 xyz_type = shadowLight[0];
            vec4 rgb_parameter = shadowLight[1];
            vec3 zDirection = getDirectionToLight(worldCenter.xyz, xyz_type, rgb_parameter);
            vec3 xDirection = perpendicularTo(zDirection);
            vec3 yDirection = cross(zDirection, xDirection);
            float r = modelScale.x;
            float adjustedRadius = r;
            float zOffset = 0.0;
            if (xyz_type.w == kPointLight) {
                float distanceToLight = length(xyz_type.xyz - worldCenter.xyz);
                float rSquared = r * r;
                zOffset = rSquared / distanceToLight;
                float zSquared = zOffset * zOffset;
                adjustedRadius = sqrt(rSquared - zSquared) * radiusScale;
            }
            vec3 worldPosition =
                worldCenter.xyz
                    + zDirection * zOffset
                    + xDirection * adjustedRadius * cos(angle)
                    + yDirection * adjustedRadius * sin(angle);
            vec3 directionToLight = getDirectionToLight(worldPosition, xyz_type, rgb_parameter);
            float sceneDiameter = sceneProperties[3][1];
            vec3 offset = -sceneDiameter * offsetScale * directionToLight;
            vec4 offsetPosition = vec4(worldPosition + offset, 1.0);
            gl_Position = projectionMatrix * (viewMatrix * offsetPosition);
        }
    `,attributes:{angle:"gX",offsetScale:"hX",radiusScale:"ia"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",sceneProperties:"n",shadowLight:"iq",viewMatrix:"o"}},h8=function(e){return $$(De(function(r,a,t,o,c,i,f,$){return A(Ne,n(a0,!0,$),HE,r0,EE,{k:t,l:a,m:i,n:r,iq:f,o:c})}))},UE=W(function(e,r,a,t){var o=n(f$,a,AE),c=(function(){var $=h(e,r);return $.a?$.b?ko(u([o,h8(t)])):o:$.b?h8(t):ue})(),i=TE(t),f=i;return n(y6,n(Gl,On,LE(t)),n(e0,I(f,f,f),c))}),WE=l(function(e,r){return C(UE,!0,!0,e,r)}),Cd=P(function(e,r,a){return{$:1,a:e,b:r,c:a}}),g8=W(function(e,r,a,t){return{$:2,a:e,b:r,c:a,d:t}}),kd=Rr(function(e,r,a,t,o,c){return{$:3,a:e,b:r,c:a,d:t,e:o,f:c}}),Sd=l(function(e,r){return{$:0,a:e,b:r}}),GE=function(e){switch(e.$){case 0:var a=e.a,t=e.b;return n(Sd,a,t);case 1:var a=e.a,t=e.b,r=e.c;return v(Cd,a,t,r);case 2:var a=e.a,t=e.b,i=e.c,f=e.d;return C(g8,a,t,i,f);default:var a=e.a,t=e.b,o=e.c,c=e.d,i=e.e,f=e.f;return _r(kd,a,t,o,c,i,f)}},qE=GE,OE=l(function(e,r){return n(WE,qE(e),r)}),XK=Q,NE=l(function(e,r){return{p2:r,te:Wa(e)}}),Pd=l(function(e,r){return n(OE,e,n(NE,an(r),On))}),YK=Q,l$=function(e){return e},QK=Q,xd=function(e){return v(or,0,1,e<=.04045?e/12.92:n(ia,(e+.055)/1.055,2.4))},v$=function(e){var r=ls(e),a=r.ti,t=r.rn,o=r.pL,c=r.aV;return C(Ht,xd(a),xd(t),xd(o),c)},_8=W(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),s$=v_,d$=s_,b$=d_,JE=function(e){var r=e,a=s$(r),t=d$(r),o=b$(r);return C(_8,.4124*a+.3576*t+.1805*o,.2126*a+.7152*t+.0722*o,.0193*a+.1192*t+.9505*o,E6(r))},KE=function(e){return JE(v$(e))},y8=function(e){var r=KE(e),a=r.a,t=r.b,o=r.c,c=a+t+o;return l$({pi:a/c,pk:t/c})},Gt=function(e){return{$:0,a:e}},eZ=0,ZE=l(function(e,r){var a=e,t=r.pi,o=r.pk;return C(_8,a*t/o,a,a*(1-t-o)/o,1)}),XE=function(e){var r=e.a,a=e.b,t=e.c,o=e.d;return C(Ht,3.2406*r-1.5372*a-.4986*t,-.9689*r+1.8758*a+.0415*t,.0557*r-.204*a+1.057*t,o)},p$=l(function(e,r){return XE(n(ZE,e,r))}),YE=l(function(e,r){var a=n(p$,Xs(1),e);return v(Cd,0,Gt(a),r)}),f0=function(e){return e},zi=function(e){return C(vs,e.aY,e.a5,e.F,e.aV)},QE=l(function(e,r){return n(YE,y8(zi(r)),f0(e))}),jd={$:0},eH=function(e){var r=e.pI,a=e.ig,t=e.hQ;return _r(kd,0,Gt(v$(r)),Gt(v(or,0,1,a)),Gt(v(or,0,1,t)),Gt(1),jd)},rH=l(function(e,r){var a=e.ig,t=e.hQ;return eH({pI:zi(r),hQ:t,ig:a})}),C8=function(e){var r=ls(e),a=r.ti,t=r.rn,o=r.pL,c=r.aV;return C(Ht,a,t,o,c)},aH=function(e){return n(Sd,0,Gt(C8(e)))},nH=function(e){return aH(zi(e))},Nn=function(e){var r=e.b2;switch(r.$){case 0:return nH(e.lI);case 1:var a=r.a.ig,t=r.a.hQ;return n(rH,{hQ:t,ig:a},e.lI);default:var o=r.a.jU;return n(QE,o,e.lI)}},Sc=function(e){return Gt(e)},m$=l(function(e,r){if(r.$){var t=r.a;return N3(t)}else{var a=r.a;return Gt(e(a))}}),k8=function(e){return n(Sd,0,n(m$,C8,e))},tH=l(function(e,r){return v(Cd,0,n(m$,v$,e),r)}),oH=function(e){var r=e.pI,a=e.ig,t=e.hQ;return _r(kd,0,n(m$,v$,r),n(m$,n(or,0,1),a),n(m$,n(or,0,1),t),Sc(1),jd)},wd=function(e){return C(vs,e.aY,e.a5,e.F,e.aV)},Di=l(function(e,r){var a=(function(){var f=r.b3;if(f.$)return Sc(wd(r.lI));if(f.a.$)return n(yu,"[textured-surface] FromAtlas textures in 3D Surface are deferred. Rendering as fallback colour.",Sc(wd(r.lI)));var $=f.a.a.bF;return n(ne,Sc(wd(r.lI)),n(Je,$,e.ns))})(),t=r.b2;switch(t.$){case 0:return k8(a);case 1:var o=t.a.ig,c=t.a.hQ;return oH({pI:a,hQ:Sc(c),ig:Sc(o)});default:var i=t.a.jU;return n(tH,a,f0(i))}}),cH=P(function(e,r,a){var t=z(e,{b3:L}),o=n(Di,{ns:ze},t),c=Nn(t),i=n(ge,0,a-2*r),f=i/2;return Mi(u([v(hd,c,r,i),n(yd,f,n(Pd,o,r)),n(yd,-f,n(Pd,o,r))]))}),iH=function(e){var r=e;return r.T},S8=(function(){var e={ag:Ys,ta:kt({pi:0,pk:0,R:1})},r=kc({pi:0,pk:0,R:-1}),a=.5*ya(2),t=n(o0,e,n(t0,72,function(i){var f=2*Zr*i,$=Ha(f),s=Ea(f);return{ag:kc({pi:s*a,pk:$*a,R:a}),ta:kt({pi:s,pk:$,R:0})}})),o={ag:r,ta:On},c=n(o0,o,n(t0,72,function(i){var f=2*Zr*i,$=Ha(f),s=Ea(f);return{ag:r,ta:kt({pi:s,pk:-$,R:0})}}));return Ul(v8(pd(u([c,t]))))})(),P8=Nl(S8),fH=function(e){var r=e;return r.f9},$H=function(e){var r=e;return r.te},uH=W(function(e,r,a,t){var o=m8(iH(t)),c=n(f$,a,S8),i=(function(){var b=h(e,r);return b.a?b.b?ko(u([c,Cc(P8)])):c:b.b?Cc(P8):ue})(),f=$H(t),$=f,s=fH(t),d=s;return n(Fl,o,n(e0,I($,$,d),i))}),lH=l(function(e,r){return C(uH,!0,!0,e,r)}),rZ=Q,vH=P(function(e,r,a){return{T:n(El,e,r),f9:Wa(a.f9),te:Wa(a.te)}}),sH=P(function(e,r,a){var t=a/2;return n(lH,e,v(vH,v(gr,0,-t,0),u$,{f9:an(a),te:an(r)}))}),Ld=P(function(e,r,a){return gd(u([n(f$,e,r),Cc(a)]))}),dH=function(e){return e},bH=function(e){return z6(n(N,dH,R6(e)))},pH=l(function(e,r){if(r.b&&r.b.b){var a=r.a,t=r.b,o=t.a,c=t.b;return{aK:n(N,function(i){return I(0,1+i,2+i)},n(qa,0,vr(c))),k4:ho(n(D,e,r))}}else return n0}),mH=function(e){return v(gr,e.pi,e.pk,e.R)},hH=function(e){var r=n(N,mH,e);if(r.b&&r.b.b&&r.b.b.b){var a=r.a,t=r.b,o=t.a,c=t.b,i=c.a,f=c.b;return M(n(pH,a,n(D,o,n(D,i,f))))}else return L},gH=function(e){var r=n(xr,hH,e);if(r.b){var a=r,t=bH(pd(a));return M({r9:t,ky:Nl(t)})}else return L},h$=l(function(e,r){var a=gH(u([r]));if(a.$===1)return Mi(k);var t=a.a.r9,o=a.a.ky;return v(Ld,e,t,o)}),_H=l(function(e,r){return n(c8,e,I(r,r,r))}),yH=P(function(e,r,a){var t=2*Zr/e,o=n(N,function(c){return n(f6,t*c,v(Or,0,a,0))},n(qa,0,e-1));return n(h$,r,o)}),CH=Jt(function(e,r,a,t,o,c,i){e:for(;;)if(i.b){var f=i.a,$=i.b,s=f,d=s.pi,b=s.pk,m=s.R,g=n(qe,d,e),_=n(ge,d,r),y=n(qe,b,a),S=n(ge,b,t),w=n(qe,m,o),j=n(ge,m,c),B=$;e=g,r=_,a=y,t=S,o=w,c=j,i=B;continue e}else return{nw:r,r6:t,r7:c,nA:e,sh:a,si:o}}),kH=l(function(e,r){var a=e,t=a.pi,o=a.pk,c=a.R;return aa(CH,t,t,o,o,c,c,r)}),x8={src:`
        precision highp float;
        
        attribute highp vec3 quadVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 quadVertexPositions;
        
        void getQuadVertex(int quadVertexIndex, mat4 quadVertexPositions, out vec3 position, out vec3 normal, out vec4 tangent) {
            vec3 next = vec3(0.0, 0.0, 0.0);
            vec3 prev = vec3(0.0, 0.0, 0.0);
            if (quadVertexIndex == 0) {
                prev = quadVertexPositions[3].xyz;
                position = quadVertexPositions[0].xyz;
                next = quadVertexPositions[1].xyz;
                tangent = vec4(normalize(next - position), 1.0);
            } else if (quadVertexIndex == 1) {
                prev = quadVertexPositions[0].xyz;
                position = quadVertexPositions[1].xyz;
                next = quadVertexPositions[2].xyz;
                tangent = vec4(normalize(position - prev), 1.0);
            } else if (quadVertexIndex == 2) {
                prev = quadVertexPositions[1].xyz;
                position = quadVertexPositions[2].xyz;
                next = quadVertexPositions[3].xyz;
                tangent = vec4(normalize(position - next), 1.0);
            } else {
                prev = quadVertexPositions[2].xyz;
                position = quadVertexPositions[3].xyz;
                next = quadVertexPositions[0].xyz;
                tangent = vec4(normalize(prev - position), 1.0);
            }
            normal = normalize(cross(next - position, prev - position));
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main() {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            vec4 tangent = vec4(0.0, 0.0, 0.0, 0.0);
            getQuadVertex(int(quadVertex.z), quadVertexPositions, position, normal, tangent);
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
        }
    `,attributes:{quadVertex:"h9"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",quadVertexPositions:"b$",sceneProperties:"n",viewMatrix:"o"}},Jn=y_,Kn=W(function(e,r,a,t){var o=Ct(t),c=Ct(a),i=Ct(r),f=Ct(e);return Jn({nb:f.pi,nc:i.pi,nd:c.pi,ne:o.pi,nf:f.pk,ng:i.pk,nh:c.pk,ni:o.pk,nj:f.R,nk:i.R,nl:c.R,nm:o.R,nn:0,no:0,np:0,nq:0})}),j8=l(function(e,r){return{$:0,a:e,b:r}}),SH=j8({l1:1,mD:0,nD:6}),St=SH(u([{h9:v(c$,0,0,0)},{h9:v(c$,1,0,1)},{h9:v(c$,1,1,2)},{h9:v(c$,0,1,3)}])),w8={src:`
        precision highp float;
        
        attribute highp vec3 quadVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 quadVertexPositions;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        
        void getQuadVertex(int quadVertexIndex, mat4 quadVertexPositions, out vec3 position, out vec3 normal, out vec4 tangent) {
            vec3 next = vec3(0.0, 0.0, 0.0);
            vec3 prev = vec3(0.0, 0.0, 0.0);
            if (quadVertexIndex == 0) {
                prev = quadVertexPositions[3].xyz;
                position = quadVertexPositions[0].xyz;
                next = quadVertexPositions[1].xyz;
                tangent = vec4(normalize(next - position), 1.0);
            } else if (quadVertexIndex == 1) {
                prev = quadVertexPositions[0].xyz;
                position = quadVertexPositions[1].xyz;
                next = quadVertexPositions[2].xyz;
                tangent = vec4(normalize(position - prev), 1.0);
            } else if (quadVertexIndex == 2) {
                prev = quadVertexPositions[1].xyz;
                position = quadVertexPositions[2].xyz;
                next = quadVertexPositions[3].xyz;
                tangent = vec4(normalize(position - next), 1.0);
            } else {
                prev = quadVertexPositions[2].xyz;
                position = quadVertexPositions[3].xyz;
                next = quadVertexPositions[0].xyz;
                tangent = vec4(normalize(prev - position), 1.0);
            }
            normal = normalize(cross(next - position, prev - position));
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        void main() {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            vec4 tangent = vec4(0.0, 0.0, 0.0, 0.0);
            getQuadVertex(int(quadVertex.z), quadVertexPositions, position, normal, tangent);
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedPosition = worldPosition.xyz;
            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);
        }
    `,attributes:{quadVertex:"h9"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",quadVertexPositions:"b$",sceneProperties:"n",viewMatrix:"o"}},$0={src:`
        precision highp float;
        
        attribute highp vec3 quadVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 quadVertexPositions;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        varying mediump vec2 interpolatedUv;
        varying highp vec4 interpolatedTangent;
        
        void getQuadVertex(int quadVertexIndex, mat4 quadVertexPositions, out vec3 position, out vec3 normal, out vec4 tangent) {
            vec3 next = vec3(0.0, 0.0, 0.0);
            vec3 prev = vec3(0.0, 0.0, 0.0);
            if (quadVertexIndex == 0) {
                prev = quadVertexPositions[3].xyz;
                position = quadVertexPositions[0].xyz;
                next = quadVertexPositions[1].xyz;
                tangent = vec4(normalize(next - position), 1.0);
            } else if (quadVertexIndex == 1) {
                prev = quadVertexPositions[0].xyz;
                position = quadVertexPositions[1].xyz;
                next = quadVertexPositions[2].xyz;
                tangent = vec4(normalize(position - prev), 1.0);
            } else if (quadVertexIndex == 2) {
                prev = quadVertexPositions[1].xyz;
                position = quadVertexPositions[2].xyz;
                next = quadVertexPositions[3].xyz;
                tangent = vec4(normalize(position - next), 1.0);
            } else {
                prev = quadVertexPositions[2].xyz;
                position = quadVertexPositions[3].xyz;
                next = quadVertexPositions[0].xyz;
                tangent = vec4(normalize(prev - position), 1.0);
            }
            normal = normalize(cross(next - position, prev - position));
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        void main() {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            vec4 tangent = vec4(0.0, 0.0, 0.0, 0.0);
            getQuadVertex(int(quadVertex.z), quadVertexPositions, position, normal, tangent);
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedPosition = worldPosition.xyz;
            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);
            interpolatedUv = quadVertex.xy;
            interpolatedTangent = tangent;
        }
    `,attributes:{quadVertex:"h9"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",quadVertexPositions:"b$",sceneProperties:"n",viewMatrix:"o"}},L8={src:`
        precision highp float;
        
        attribute highp vec3 quadVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 quadVertexPositions;
        
        varying mediump vec2 interpolatedUv;
        
        void getQuadVertex(int quadVertexIndex, mat4 quadVertexPositions, out vec3 position, out vec3 normal, out vec4 tangent) {
            vec3 next = vec3(0.0, 0.0, 0.0);
            vec3 prev = vec3(0.0, 0.0, 0.0);
            if (quadVertexIndex == 0) {
                prev = quadVertexPositions[3].xyz;
                position = quadVertexPositions[0].xyz;
                next = quadVertexPositions[1].xyz;
                tangent = vec4(normalize(next - position), 1.0);
            } else if (quadVertexIndex == 1) {
                prev = quadVertexPositions[0].xyz;
                position = quadVertexPositions[1].xyz;
                next = quadVertexPositions[2].xyz;
                tangent = vec4(normalize(position - prev), 1.0);
            } else if (quadVertexIndex == 2) {
                prev = quadVertexPositions[1].xyz;
                position = quadVertexPositions[2].xyz;
                next = quadVertexPositions[3].xyz;
                tangent = vec4(normalize(position - next), 1.0);
            } else {
                prev = quadVertexPositions[2].xyz;
                position = quadVertexPositions[3].xyz;
                next = quadVertexPositions[0].xyz;
                tangent = vec4(normalize(prev - position), 1.0);
            }
            normal = normalize(cross(next - position, prev - position));
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main() {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            vec4 tangent = vec4(0.0, 0.0, 0.0, 0.0);
            getQuadVertex(int(quadVertex.z), quadVertexPositions, position, normal, tangent);
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedUv = quadVertex.xy;
        }
    `,attributes:{quadVertex:"h9"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",quadVertexPositions:"b$",sceneProperties:"n",viewMatrix:"o"}},PH=je(function(e,r,a,t,o){var c=n(kH,r,u([a,t,o])),i=Be(c);switch(e.$){case 0:if(e.b.$){var $=e.a,s=e.b.a.X;return n(Ca,i,De(function(qt,Qn,tn,on,ea,ra,va,Nr){return A(Ne,v(ir,on,0,Nr),L8,W6,St,{g6:s,k:tn,l:Qn,m:ra,b$:C(Kn,r,a,t,o),n:qt,o:ea})}))}else{var f=e.b.a;return v(ka,f,i,De(function(qt,Qn,tn,on,ea,ra,va,Nr){return A(Ne,v(ir,on,0,Nr),x8,ad,St,{eu:ua(f),k:tn,l:Qn,m:ra,b$:C(Kn,r,a,t,o),n:qt,o:ea})}))}case 1:if(e.b.$){var m=e.a,s=e.b.a.X,b=e.c;return n(Ca,i,De(function(tn,on,ea,ra,va,Nr,sa,da){return A(Ne,v(ir,ra,0,da),L8,Z6,St,{iV:ji(b),g6:s,k:ea,l:on,m:Nr,b$:C(Kn,r,a,t,o),n:tn,o:va})}))}else{var d=e.b.a,b=e.c;return n(Ca,i,De(function(qt,Qn,tn,on,ea,ra,va,Nr){return A(Ne,v(ir,on,0,Nr),x8,nd,St,{iV:b,eF:n(Kl,ji(b),d),k:tn,l:Qn,m:ra,b$:C(Kn,r,a,t,o),n:qt,o:ea})}))}case 2:var g=e.a,_=e.b,Ke=e.c,zr=e.d,y=v(fd,_,Ke,zr);if(y.$)if(y.a.$){var ie=y.a,me=ie.a,Te=ie.b,Ie=y.b,E=Ie.a,V=Ie.b,Ve=y.c,X=Ve.a,oe=Ve.b;return v(ka,me,i,De(function(ea,ra,va,Nr,sa,da,Ot,C$){var et=Ot.a,k$=Ot.b;return A(Ne,v(ir,Nr,0,C$),$0,Si,St,{bx:E,bA:V,ev:ua(me),af:k$,ga:et.ga,hJ:et.hJ,hK:et.hK,hL:et.hL,e5:Te,k:va,l:ra,bI:X,bJ:oe,m:da,b$:C(Kn,r,a,t,o),n:ea,o:sa})}))}else{var j=y.a.a,B=y.b,E=B.a,V=B.b,O=y.c,X=O.a,oe=O.b;return n(Ca,i,De(function(qt,Qn,tn,on,ea,ra,va,Nr){var sa=va.a,da=va.b;return A(Ne,v(ir,on,0,Nr),$0,Si,St,{bx:E,bA:V,ev:Pi,af:da,ga:sa.ga,hJ:sa.hJ,hK:sa.hK,hL:sa.hL,e5:j,k:tn,l:Qn,bI:X,bJ:oe,m:ra,b$:C(Kn,r,a,t,o),n:qt,o:ea})}))}else{var S=y.a,w=y.b;return v(ka,S,i,De(function(qt,Qn,tn,on,ea,ra,va,Nr){var sa=va.a,da=va.b;return A(Ne,v(ir,on,0,Nr),w8,td,St,{ek:w,af:da,ga:sa.ga,hJ:sa.hJ,hK:sa.hK,hL:sa.hL,jM:ua(S),k:tn,l:Qn,m:ra,b$:C(Kn,r,a,t,o),n:qt,o:ea})}))}default:var fe=e.a,Ee=e.b,Ue=e.c,rr=e.d,Ke=e.e,zr=e.f,Ze=A($d,Ee,Ue,rr,Ke,zr);if(Ze.$)if(Ze.a.$){var k9=Ze.a,S9=k9.a,Te=k9.b,P9=Ze.b,nn=P9.a,Xn=P9.b,x9=Ze.c,y$=x9.a,Yn=x9.b,j9=Ze.d,E=j9.a,V=j9.b,w9=Ze.e,X=w9.a,oe=w9.b;return v(ka,S9,i,De(function(da,Ot,C$,et,k$,SG,L9,PG){var y0=L9.a,xG=L9.b;return A(Ne,v(ir,et,0,PG),$0,xi,St,{bx:E,en:Te,bA:V,et:ua(S9),ew:Yn,ex:Xn,af:xG,ga:y0.ga,hJ:y0.hJ,hK:y0.hK,hL:y0.hL,e7:y$,k:C$,l:Ot,bI:X,bJ:oe,m:SG,b$:C(Kn,r,a,t,o),fe:nn,n:da,o:k$})}))}else{var tr=Ze.a.a,Qr=Ze.b,nn=Qr.a,Xn=Qr.b,xo=Ze.c,y$=xo.a,Yn=xo.b,y9=Ze.d,E=y9.a,V=y9.b,C9=Ze.e,X=C9.a,oe=C9.b;return n(Ca,i,De(function(ea,ra,va,Nr,sa,da,Ot,C$){var et=Ot.a,k$=Ot.b;return A(Ne,v(ir,Nr,0,C$),$0,xi,St,{bx:E,en:tr,bA:V,et:Pi,ew:Yn,ex:Xn,af:k$,ga:et.ga,hJ:et.hJ,hK:et.hK,hL:et.hL,e7:y$,k:va,l:ra,bI:X,bJ:oe,m:da,b$:C(Kn,r,a,t,o),fe:nn,n:ea,o:sa})}))}else{var ur=Ze.a,Dr=Ze.b,Yr=Ze.c,w=Ze.d;return v(ka,ur,i,De(function(Qn,tn,on,ea,ra,va,Nr,sa){var da=Nr.a,Ot=Nr.b;return A(Ne,v(ir,ea,0,sa),w8,od,St,{ek:w,pI:ua(ur),af:Ot,ga:da.ga,hJ:da.hJ,hK:da.hK,hL:da.hL,hQ:Yr,k:on,l:tn,m:va,b$:C(Kn,r,a,t,o),ig:Dr,n:Qn,o:ra})}))}}}),xH=(function(){var e=u([{dt:n(Mr,0,1)},{dt:n(Mr,1,1)},{dt:n(Mr,2,1)},{dt:n(Mr,3,1)},{dt:n(Mr,0,-1)},{dt:n(Mr,1,-1)},{dt:n(Mr,2,-1)},{dt:n(Mr,3,-1)}]),r=u([I(0,1,2),I(0,2,3),I(4,6,5),I(4,7,6),I(4,5,1),I(1,0,4),I(5,6,2),I(2,1,5),I(6,7,3),I(3,2,6),I(7,4,0),I(0,3,7)]);return n(ki,e,r)})(),jH={src:`
        precision highp float;
        
        attribute highp vec2 quadShadowVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 shadowLight;
        uniform highp mat4 quadVertexPositions;
        
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        
        void getQuadVertex(int quadVertexIndex, mat4 quadVertexPositions, out vec3 position, out vec3 normal, out vec4 tangent) {
            vec3 next = vec3(0.0, 0.0, 0.0);
            vec3 prev = vec3(0.0, 0.0, 0.0);
            if (quadVertexIndex == 0) {
                prev = quadVertexPositions[3].xyz;
                position = quadVertexPositions[0].xyz;
                next = quadVertexPositions[1].xyz;
                tangent = vec4(normalize(next - position), 1.0);
            } else if (quadVertexIndex == 1) {
                prev = quadVertexPositions[0].xyz;
                position = quadVertexPositions[1].xyz;
                next = quadVertexPositions[2].xyz;
                tangent = vec4(normalize(position - prev), 1.0);
            } else if (quadVertexIndex == 2) {
                prev = quadVertexPositions[1].xyz;
                position = quadVertexPositions[2].xyz;
                next = quadVertexPositions[3].xyz;
                tangent = vec4(normalize(position - next), 1.0);
            } else {
                prev = quadVertexPositions[2].xyz;
                position = quadVertexPositions[3].xyz;
                next = quadVertexPositions[0].xyz;
                tangent = vec4(normalize(prev - position), 1.0);
            }
            normal = normalize(cross(next - position, prev - position));
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        vec3 getDirectionToLight(vec3 surfacePosition, vec4 xyz_type, vec4 rgb_parameter) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                return xyz_type.xyz;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                return normalize(lightPosition - surfacePosition);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 shadowVertexPosition(vec3 position, vec3 normal, mat4 shadowLight, vec4 modelScale, mat4 modelMatrix, mat4 viewMatrix, mat4 projectionMatrix, mat4 sceneProperties) {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            vec3 worldNormal = getWorldNormal(normal, vec4(modelScale.xyz, 1.0), modelMatrix);
            vec4 xyz_type = shadowLight[0];
            vec4 rgb_parameter = shadowLight[1];
            vec3 directionToLight = getDirectionToLight(worldPosition.xyz, xyz_type, rgb_parameter);
            vec3 offset = vec3(0.0, 0.0, 0.0);
            float sceneDiameter = sceneProperties[3][1];
            if (dot(directionToLight, worldNormal) <= 0.0) {
                offset = -sceneDiameter * directionToLight;
            } else {
                offset = -0.001 * sceneDiameter * directionToLight;
            }
            vec4 offsetPosition = worldPosition + vec4(offset, 0.0);
            return projectionMatrix * (viewMatrix * offsetPosition);
        }
        
        void main () {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            vec4 tangent = vec4(0.0, 0.0, 0.0, 0.0);
            getQuadVertex(int(quadShadowVertex.x), quadVertexPositions, position, normal, tangent);
            normal *= quadShadowVertex.y;
            gl_Position = shadowVertexPosition(
                position,
                normal,
                shadowLight,
                modelScale,
                modelMatrix,
                viewMatrix,
                projectionMatrix,
                sceneProperties
            );
        }
    `,attributes:{quadShadowVertex:"dt"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",quadVertexPositions:"b$",sceneProperties:"n",shadowLight:"iq",viewMatrix:"o"}},T8=W(function(e,r,a,t){return $$(De(function(o,c,i,f,$,s,d,b){return A(Ne,n(a0,f,b),jH,r0,xH,{k:i,l:c,m:s,b$:C(Kn,e,r,a,t),n:o,iq:d,o:$})}))}),wH=Jt(function(e,r,a,t,o,c,i){var f=A(PH,a,t,o,c,i),$=h(e,r);return $.a?$.b?ko(u([f,C(T8,t,o,c,i)])):f:$.b?C(T8,t,o,c,i):ue}),u0=je(function(e,r,a,t,o){return aa(wH,!0,!1,e,r,a,t,o)}),LH=P(function(e,r,a){var t=r/2,o=a/2,c=l(function(i,f){return v(gr,i,f,0)});return A(u0,k8(e),n(c,-t,-o),n(c,t,-o),n(c,t,o),n(c,-t,o))}),Td=function(e){return{$:1,a:e}},TH=function(e){return C(g8,0,Gt(v$(e)),Sc(1),jd)},MH=function(e){return TH(zi(e))},M8=function(e){return _d(I(e,0,0))},zH=function(e){return _d(I(0,0,e))},z8=u$,DH=n(El,On,z8),RH=l(function(e,r){return v(Os,DH,yi(e),r)}),D8=l(function(e,r){return v(Os,h6,yi(e),r)}),BH=b7,AH=function(e){var r=e.a,a=e.b,t=e.c,o=q4(I(r,a,t));return{pC:n(ss,a,r),rG:BH(t/o),te:o}},R8=P(function(e,r,a){var t=a.a,o=a.b,c=I(o.pi-t.pi,o.pk-t.pk,o.R-t.R),i=c.a,f=c.b,$=c.c,s=AH(I(i,f,$)),d=s.te,b=s.pC,m=s.rG;return n(zH,t.R,n(yd,t.pk,n(M8,t.pi,n(D8,b,n(RH,m-st(90),n(M8,d/2,n(D8,st(90),v(hd,e,r/2,d))))))))}),IH=P(function(e,r,a){var t=l(function(o,c){e:for(;;)switch(o.$){case 0:var i=o.a;return z(c,{fH:M(i)});case 1:var i=o.a,f=c.fH;if(f.$===1)return z(c,{fH:M(i)});var $=f.a;return{gV:n(D,v(R8,MH(e),r,h($,i)),c.gV),fH:M(i)};case 2:var s=o.a.ug,b=Td(s),m=c;o=b,c=m;continue e;case 3:var d=o.a.qV,b=Td(d),m=c;o=b,c=m;continue e;default:var d=o.a.qV,b=Td(d),m=c;o=b,c=m;continue e}});return Ae(v(ve,t,{gV:k,fH:L},a).gV)}),FH=P(function(e,r,a){if(r.b){var t=r.a,o=r.b;return Mi(v(e2,l(function(c,i){return n(h$,e,u([c,i,n(dc,I(0,0,-a),i),n(dc,I(0,0,-a),c)]))}),r,Y(o,u([t]))))}else return Mi(k)}),VH=P(function(e,r,a){var t=r/2,o=a/2;return A(u0,e,v(gr,-t,-o,0),v(gr,t,-o,0),v(gr,t,o,0),v(gr,-t,o,0))}),EH=function(e){var r=e;return!r.$&&r.a.$===1},HH=l(function(e,r){var a=r;if(a.$)return gd(k);if(a.a.$){var t=a.a.a.r9,o=a.a.a.ky;return v(Ld,e.t9,t,o)}else{var t=a.a.a.r9,o=a.a.a.ky;return v(Ld,e.un,t,o)}}),B8={src:`
        precision highp float;
        
        attribute lowp float triangleVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 triangleVertexPositions;
        
        void getTriangleVertex(int triangleVertexIndex, mat4 triangleVertexPositions, out vec3 position, out vec3 normal) {
            vec3 p1 = triangleVertexPositions[0].xyz;
            vec3 p2 = triangleVertexPositions[1].xyz;
            vec3 p3 = triangleVertexPositions[2].xyz;
            normal = normalize(cross(p2 - p1, p3 - p2));
            float t1 = float(triangleVertexIndex == 0);
            float t2 = float(triangleVertexIndex == 1);
            float t3 = float(triangleVertexIndex == 2);
            position = t1 * p1 + t2 * p2 + t3 * p3;
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main() {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            getTriangleVertex(int(triangleVertex), triangleVertexPositions, position, normal);
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
        }
    `,attributes:{triangleVertex:"kZ"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",sceneProperties:"n",triangleVertexPositions:"gK",viewMatrix:"o"}},A8={src:`
        precision highp float;
        
        attribute lowp float triangleVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 triangleVertexPositions;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        
        void getTriangleVertex(int triangleVertexIndex, mat4 triangleVertexPositions, out vec3 position, out vec3 normal) {
            vec3 p1 = triangleVertexPositions[0].xyz;
            vec3 p2 = triangleVertexPositions[1].xyz;
            vec3 p3 = triangleVertexPositions[2].xyz;
            normal = normalize(cross(p2 - p1, p3 - p2));
            float t1 = float(triangleVertexIndex == 0);
            float t2 = float(triangleVertexIndex == 1);
            float t3 = float(triangleVertexIndex == 2);
            position = t1 * p1 + t2 * p2 + t3 * p3;
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        void main() {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            getTriangleVertex(int(triangleVertex), triangleVertexPositions, position, normal);
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedPosition = worldPosition.xyz;
            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);
        }
    `,attributes:{triangleVertex:"kZ"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",sceneProperties:"n",triangleVertexPositions:"gK",viewMatrix:"o"}},g$=function(e){var r=e$(e),a=r.a,t=r.b,o=r.c,c=Ct(a),i=Ct(t),f=Ct(o);return Jn({nb:c.pi,nc:i.pi,nd:f.pi,ne:0,nf:c.pk,ng:i.pk,nh:f.pk,ni:0,nj:c.R,nk:i.R,nl:f.R,nm:0,nn:0,no:0,np:0,nq:0})},l0=M6(u([I({kZ:0},{kZ:1},{kZ:2})])),UH=l(function(e,r){var a=w6(r),t=Be(a);switch(e.$){case 0:if(e.b.$){var c=e.a,i=e.b.a.X;return ue}else{var o=e.b.a;return v(ka,o,t,De(function(ie,me,Te,Ie,Ve,fe,Ee,Ue){return A(Ne,v(ir,Ie,0,Ue),B8,ad,l0,{eu:ua(o),k:Te,l:me,m:fe,n:ie,gK:g$(r),o:Ve})}))}case 1:if(e.b.$){var s=e.a;return ue}else{var f=e.b.a,$=e.c;return n(Ca,t,De(function(ie,me,Te,Ie,Ve,fe,Ee,Ue){return A(Ne,v(ir,Ie,0,Ue),B8,nd,l0,{eF:n(Kl,ji($),f),k:Te,l:me,m:fe,n:ie,gK:g$(r),o:Ve})}))}case 2:var d=e.a,b=e.b,B=e.c,E=e.d,m=v(fd,b,B,E);if(m.$)return ue;var g=m.a,_=m.b;return v(ka,g,t,De(function(ie,me,Te,Ie,Ve,fe,Ee,Ue){var rr=Ee.a,Ke=Ee.b;return A(Ne,v(ir,Ie,0,Ue),A8,td,l0,{ek:_,af:Ke,ga:rr.ga,hJ:rr.hJ,hK:rr.hK,hL:rr.hL,jM:ua(g),k:Te,l:me,m:fe,n:ie,gK:g$(r),o:Ve})}));default:var y=e.a,S=e.b,w=e.c,j=e.d,B=e.e,E=e.f,V=A($d,S,w,j,B,E);if(V.$)return ue;var O=V.a,X=V.b,oe=V.c,_=V.d;return v(ka,O,t,De(function(me,Te,Ie,Ve,fe,Ee,Ue,rr){var Ke=Ue.a,zr=Ue.b;return A(Ne,v(ir,Ve,0,rr),A8,od,l0,{ek:_,pI:ua(O),af:zr,ga:Ke.ga,hJ:Ke.hJ,hK:Ke.hK,hL:Ke.hL,hQ:oe,k:Ie,l:Te,m:Ee,ig:X,n:me,gK:g$(r),o:fe})}))}}),WH=(function(){var e=u([{fn:n(Mr,0,1)},{fn:n(Mr,1,1)},{fn:n(Mr,2,1)},{fn:n(Mr,0,-1)},{fn:n(Mr,1,-1)},{fn:n(Mr,2,-1)}]),r=u([I(0,1,2),I(3,5,4),I(3,4,1),I(3,1,0),I(4,5,2),I(4,2,1),I(5,3,0),I(5,0,2)]);return n(ki,e,r)})(),GH={src:`
        precision highp float;
        
        attribute highp vec2 triangleShadowVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 shadowLight;
        uniform highp mat4 triangleVertexPositions;
        
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        
        void getTriangleVertex(int triangleVertexIndex, mat4 triangleVertexPositions, out vec3 position, out vec3 normal) {
            vec3 p1 = triangleVertexPositions[0].xyz;
            vec3 p2 = triangleVertexPositions[1].xyz;
            vec3 p3 = triangleVertexPositions[2].xyz;
            normal = normalize(cross(p2 - p1, p3 - p2));
            float t1 = float(triangleVertexIndex == 0);
            float t2 = float(triangleVertexIndex == 1);
            float t3 = float(triangleVertexIndex == 2);
            position = t1 * p1 + t2 * p2 + t3 * p3;
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        vec3 getDirectionToLight(vec3 surfacePosition, vec4 xyz_type, vec4 rgb_parameter) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                return xyz_type.xyz;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                return normalize(lightPosition - surfacePosition);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 shadowVertexPosition(vec3 position, vec3 normal, mat4 shadowLight, vec4 modelScale, mat4 modelMatrix, mat4 viewMatrix, mat4 projectionMatrix, mat4 sceneProperties) {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            vec3 worldNormal = getWorldNormal(normal, vec4(modelScale.xyz, 1.0), modelMatrix);
            vec4 xyz_type = shadowLight[0];
            vec4 rgb_parameter = shadowLight[1];
            vec3 directionToLight = getDirectionToLight(worldPosition.xyz, xyz_type, rgb_parameter);
            vec3 offset = vec3(0.0, 0.0, 0.0);
            float sceneDiameter = sceneProperties[3][1];
            if (dot(directionToLight, worldNormal) <= 0.0) {
                offset = -sceneDiameter * directionToLight;
            } else {
                offset = -0.001 * sceneDiameter * directionToLight;
            }
            vec4 offsetPosition = worldPosition + vec4(offset, 0.0);
            return projectionMatrix * (viewMatrix * offsetPosition);
        }
        
        void main () {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            getTriangleVertex(int(triangleShadowVertex.x), triangleVertexPositions, position, normal);
            normal *= triangleShadowVertex.y;
            gl_Position = shadowVertexPosition(
                position,
                normal,
                shadowLight,
                modelScale,
                modelMatrix,
                viewMatrix,
                projectionMatrix,
                sceneProperties
            );
        }
    `,attributes:{triangleShadowVertex:"fn"},uniforms:{modelMatrix:"k",modelScale:"l",projectionMatrix:"m",sceneProperties:"n",shadowLight:"iq",triangleVertexPositions:"gK",viewMatrix:"o"}},I8=function(e){return $$(De(function(r,a,t,o,c,i,f,$){return A(Ne,n(a0,o,$),GH,r0,WH,{k:t,l:a,m:i,n:r,iq:f,gK:g$(e),o:c})}))},qH=W(function(e,r,a,t){var o=n(UH,a,t),c=h(e,r);return c.a?c.b?ko(u([o,I8(t)])):o:c.b?I8(t):ue}),OH=l(function(e,r){return C(qH,!0,!0,e,r)}),NH=l(function(e,r){var a=r.a,t=r.b,o=r.c;return n(OH,e,v(rn,v(gr,a.pi,a.pk,a.R),v(gr,t.pi,t.pk,t.R),v(gr,o.pi,o.pk,o.R)))}),Zn=P(function(e,r,a){var t=r.b3;return t.$?a:n(yu,"[textured-surface] Textured Surface on "+(e+" is deferred. Rendering as fallback colour."),a)}),JH=l(function(e,r){var a=r.a,t=r.b,o=function(tr){return M(n(Js,a,tr))};switch(t.$){case 0:var fe=t.a.H,Ve=t.a.k6,y=t.a.ju;return o(v(VH,n(Di,e,fe),Ve,y));case 1:var fe=t.a.H,ie=t.a.te;return o(v(Zn,"Disc",fe,v(yH,48,Nn(fe),ie)));case 2:var fe=t.a.H,ie=t.a.te,me=t.a.f9;return o(v(Zn,"Capsule",fe,v(cH,fe,ie,me)));case 3:var fe=t.a.H,_=t.a.k4;if(_.b&&_.b.b&&_.b.b.b&&_.b.b.b.b&&!_.b.b.b.b.b){var c=_.a,i=_.b,f=i.a,$=i.b,s=$.a,d=$.b,b=d.a;return o(A(u0,n(Di,e,fe),v(gr,c.pi,c.pk,c.R),v(gr,f.pi,f.pk,f.R),v(gr,s.pi,s.pk,s.R),v(gr,b.pi,b.pk,b.R)))}else return o(v(Zn,"polygon ("+(He(vr(_))+"-vertex)"),fe,n(h$,Nn(fe),_)));case 9:var fe=t.a.H,m=t.a.gt;return o(v(Zn,"Cube",fe,n(_H,Nn(fe),m)));case 10:var fe=t.a.H,ie=t.a.te;return o(n(Pd,n(Di,e,fe),ie));case 11:var fe=t.a.H,ie=t.a.te,me=t.a.f9;return o(v(Zn,"Cylinder",fe,v(hd,Nn(fe),ie,me)));case 12:var fe=t.a.H,g=t.a.qB;return o(v(Zn,"Block",fe,n(c8,Nn(fe),g)));case 13:var fe=t.a.H,_=t.a.k4;return o(v(Zn,"Triangle",fe,n(NH,Nn(fe),_)));case 14:var fe=t.a.H,_=t.a.k4,y=t.a.ju,S=n(Di,e,fe),w=z(fe,{b3:L}),j=y/2,B=n(N,function(tr){return z(tr,{R:tr.R+j})},_),E=Nn(w),V=(function(){if(_.b&&_.b.b&&_.b.b.b&&_.b.b.b.b&&!_.b.b.b.b.b){var tr=_.a,Qr=_.b,nn=Qr.a,Xn=Qr.b,xo=Xn.a,y$=Xn.b,Yn=y$.a;return A(u0,S,v(gr,tr.pi,tr.pk,tr.R+j),v(gr,nn.pi,nn.pk,nn.R+j),v(gr,xo.pi,xo.pk,xo.R+j),v(gr,Yn.pi,Yn.pk,Yn.R+j))}else return v(Zn,"polygon-with-walls top ("+(He(vr(_))+"-vertex)"),fe,n(h$,E,B))})(),O=v(FH,E,B,y),X=n(N,function(tr){return z(tr,{R:tr.R-j})},_),oe=n(h$,E,Ae(X));return o(Mi(u([V,oe,O])));case 15:var fe=t.a.H,ie=t.a.te,me=t.a.f9;return o(v(Zn,"Cone",fe,v(sH,Nn(fe),ie,me)));case 16:var fe=t.a.H,Te=t.a.dy,Ie=t.a.qV,Ve=t.a.k6;return o(v(Zn,"Line",fe,v(R8,Nn(fe),Ve,h(Te,Ie))));case 17:var fe=t.a.H,Ee=t.a.sa;return n(de,function(tr){var Qr=n(HH,{t9:n(Di,e,fe),un:Nn(fe)},tr);return n(Js,a,EH(tr)?Qr:v(Zn,"welded mesh",fe,Qr))},n(Je,Ee,e.d_));case 4:var Ue=t.a.oH,rr=t.a.md,Ke=t.a.m6,zr=t.a.tE;if(Ue.$)return n(yu,"[LeafPath] fill-only LeafPath in 3D is deferred; no stroke colour set",L);var Ze=Ue.a;return o(Mi(v(IH,Ze,Ke,zr)));case 5:var ur=t.a,Dr=ur.tk;if(Dr.$)return L;var Yr=Dr.a.bF;return n(de,function(tr){return n(Js,a,v(LH,tr,ur.k6,ur.ju))},n(Je,Yr,e.ns));case 6:return L;case 7:return L;case 8:return L;case 18:return L;case 19:return L;default:return L}}),KH=l(function(e,r){return n(xr,JH(e),d6(r))}),Md=function(e){return{$:6,a:e}},ZH=function(e){return{$:0,a:e}},XH=function(e){return{$:1,a:e}},YH=function(e){return{$:2,a:e}},zd=l(function(e,r){return n(l6,e.gJ,n($6,e.gp,n(u6,e.gr,r)))}),QH=function(e){return e},Ri=function(e){return e},F8=l(function(e,r){var a=e,t=r,o=t.R-a.R,c=t.pk-a.pk,i=t.pi-a.pi,f=n(ge,Me(i),n(ge,Me(c),Me(o)));if(f){var $=o/f,s=c/f,d=i/f,b=ya(d*d+s*s+$*$);return M({pi:d/b,pk:s/b,R:$/b})}else return L}),eU=l(function(e,r){var a=n(zd,e,r),t=n(zd,e,v(Or,0,0,0)),o=v(Or,a.pi-t.pi,a.pk-t.pk,a.R-t.R);return n(ne,t8,n(F8,On,v(gr,o.pi,o.pk,o.R)))}),rU=function(e){var r=e.a,a=e.b;switch(a.$){case 18:var o=a.a;return M(ZH({v:!0,a:Md(Uf(o.lI)),eB:n(eU,r,o.eB),jx:Ri(o.jx)}));case 19:var o=a.a,t=n(zd,r,o.ta);return M(XH({v:!0,a:Md(Uf(o.lI)),jx:QH(o.jx),ta:v(gr,t.pi,t.pk,t.R)}));case 20:var o=a.a;return M(YH({a:Md(Uf(o.uo)),mK:Ri(o.jx),mL:Ri(o.jx),fp:Ns}));default:return L}},aU=function(e){return n(xr,rU,d6(e))},aZ=Q,v0=function(e){return e},nU=function(e){return{$:0,a:e}},tU=nU,oU={$:3},cU=oU,iU=W(function(e,r,a,t){return{$:4,a:e,b:r,c:a,d:t}}),fU=iU,$U=function(e){return{$:1,a:e}},uU=$U,lU=function(e){return n(z$,"height",He(e))},vU=G$,sU=function(e){return{$:2,a:e}},dU=sU,bU=function(e){var r=e.a,a=e.b,t=e.c,o=e.d,c=function(f){return qr(f*1e3)/1e3},i=function(f){return qr(f*1e4)/100};return v5(u(["rgba(",J(i(r)),"%,",J(i(a)),"%,",J(i(t)),"%,",J(c(o)),")"]))},pU=P(function(e,r,a){return v(J_,e,r,a)}),V8=function(e){var r=e;return r},xa=C(Ht,1,1,1,1),Cr=P(function(e,r,a){return n(N,function(t){return n(t,r,a)},e)}),mU=function(e){return Jn({nb:e.an,nc:e.aq,nd:e.at,ne:e.a2,nf:e.ao,ng:e.ar,nh:e.au,ni:e.a3,nj:e.ap,nk:e.as,nl:e.av,nm:e.a4,nn:0,no:0,np:0,nq:1})},s0=je(function(e,r,a,t,o){var c=t.mU?1:-1,i=C(Ht,t.gr,t.gr,t.gr,c);return _r(o,e,i,mU(t),t.mU,r,a)}),E8=Rr(function(e,r,a,t,o,c){e:for(;;)switch(o.$){case 0:return c;case 6:var i=o.a,f=o.b,$=e,s=r,d=a,b=n(b6,i,t),m=f,g=c;e=$,r=s,a=d,t=b,o=m,c=g;continue e;case 1:var _=o.b,y=n(D,A(s0,e,r,a,t,_),c.aO);return{aO:y,bn:c.bn,tI:c.tI,S:c.S};case 2:var _=o.b,y=n(D,A(s0,e,r,a,t,_),c.S);return{aO:c.aO,bn:c.bn,tI:c.tI,S:y};case 4:var S=o.b,w=n(D,A(s0,e,r,a,t,S),c.bn);return{aO:c.aO,bn:w,tI:c.tI,S:c.S};case 3:var j=o.a,B=n(D,A(s0,e,r,a,t,j),c.tI);return{aO:c.aO,bn:c.bn,tI:B,S:c.S};default:var E=o.a;return v(ve,C(E8,e,r,a,t),c,E)}}),H8=function(e){var r=e;return-r},hU=l(function(e,r){var a=e,t=r;return t+a}),Pc=0,gU=function(e){var r=e,a=n(ge,Me(r.pi),n(ge,Me(r.pk),Me(r.R)));if(a){var t=r.R/a,o=r.pk/a,c=r.pi/a,i=ya(c*c+o*o+t*t);return i*a}else return Pc},_U=P(function(e,r,a){var t=e,o=r,c=a;return{pi:t,pk:o,R:c}}),U8=function(e){var r=Q6(e),a=r.a,t=r.b,o=r.c;return gU(v(_U,a,t,o))},yU=l(function(e,r){var a=n(Vt,.99,n(mc,Wa(e),H8(X6(r)))),t=n(Vt,1.01,n(hU,U8(r),H8(Y6(r))));return h(a,t)}),CU=W(function(e,r,a,t){return{$:4,a:e,b:r,c:a,d:t}}),Dd=CU,d0=W(function(e,r,a,t){return{$:1,a:e,b:r,c:a,d:t}}),kU=function(e){var r=e.cG,a=e.cn,t=e.ci;return C(d0,518,r,a,t)},SU=l(function(e,r){return{$:6,a:e,b:r}}),PU=SU,W8=u([kU({ci:1,cn:0,cG:!1}),C(Dd,!1,!1,!1,!1),n(PU,0,1)]),Rd=8,G8=15,Bi=7681,xU={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},jU=j8({l1:1,mD:0,nD:5}),wU=jU(u([{ta:n(Mr,-1,-1)},{ta:n(Mr,1,-1)},{ta:n(Mr,-1,1)},{ta:n(Mr,1,1)}])),LU={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"ta"},uniforms:{}},Bd=function(e){return v(sd,{jL:e.jL,tk:e.tk,k8:e.k8},{fT:e.fT,gD:e.gD,gS:e.gS,gT:e.gT},{fT:e.fT,gD:e.gD,gS:e.gS,gT:e.gT})},Ad=function(e){return A(Ne,u([Bd(e),C(Dd,!1,!1,!1,!1)]),LU,xU,wU,{})},TU=Ad({fT:Bi,jL:0,tk:Rd,gD:Ti,k8:G8,gS:Bi,gT:Bi}),MU=516,q8=5386,zU=function(e){return n(ia,2,e+4)},O8=function(e){return Ad({fT:Pa,jL:G8,tk:Rd,gD:MU,k8:zU(e),gS:q8,gT:q8})},DU=P(function(e,r,a){return Bn(u([v(Cr,e,a,W8),u([O8(r),TU])]))}),RU=l(function(e,r){return Bn(n(Oa,DU(e),r))}),BU=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return{$:0,a:e,b:r,c:a,d:t,e:o,f:c,g:i,h:f,i:$,j:s}}}}}}}}}}},AU=function(e){var r=e.ko,a=e.jr,t=e.iT,o=e.gU,c=e.lI,i=e.aV,f=l(function($,s){var d=$.a,b=$.b,m=$.c,g=s.a,_=s.b,y=s.c;return BU(d)(b)(m)(g)(_)(y)(r)(a)(t)(o)});return n(f,c,i)},IU=P(function(e,r,a){return{$:0,a:e,b:r,c:a}}),N8=l(function(e,r){var a=e,t=r;return v(IU,32774,a,t)}),FU=l(function(e,r){return AU({gU:0,aV:n(N8,e,r),iT:0,lI:n(N8,e,r),jr:0,ko:0})}),nZ=Q,VU=1,EU=771,HU={$:8},UU=HU,b0=u([n(FU,VU,EU),UU]),WU=function(e){var r=e.cG,a=e.cn,t=e.ci;return C(d0,513,r,a,t)},J8=WU({ci:1,cn:0,cG:!0}),Ai=n(D,J8,b0),K8=514,Z8=function(e){var r=e.cG,a=e.cn,t=e.ci;return C(d0,515,r,a,t)},X8=240,GU=n(D,Z8({ci:1,cn:0,cG:!0}),n(D,Bd({fT:Pa,jL:X8,tk:0,gD:K8,k8:0,gS:Pa,gT:Pa}),b0)),qU=function(e){var r=e.cG,a=e.cn,t=e.ci;return C(d0,514,r,a,t)},Ii=n(D,qU({ci:1,cn:0,cG:!0}),b0),Id=function(e){var r=e;return k6(r.cT)},OU=function(e){return Rl(Id(e))},NU=function(e){return Vl({a0:kt({pi:e.a2,pk:e.a3,R:e.a4}),uI:_t({pi:e.an,pk:e.ao,R:e.ap}),uQ:_t({pi:e.aq,pk:e.ar,R:e.as}),uW:_t({pi:e.at,pk:e.au,R:e.av})})},Fd=l(function(e,r){var a=e,t=r,o=a.uW,c=o,i=a.uQ,f=i,$=a.uI,s=$;return{pi:t.pi*s.pi+t.pk*s.pk+t.R*s.R,pk:t.pi*f.pi+t.pk*f.pk+t.R*f.R,R:t.pi*c.pi+t.pk*c.pk+t.R*c.R}}),Y8=l(function(e,r){var a=e,t=r,o=a.a0,c=o,i=t.pi-c.pi,f=t.pk-c.pk,$=t.R-c.R,s=a.uW,d=s,b=a.uQ,m=b,g=a.uI,_=g;return{pi:i*_.pi+f*_.pk+$*_.R,pk:i*m.pi+f*m.pk+$*m.R,R:i*d.pi+f*d.pk+$*d.R}}),Q8=l(function(e,r){return{a0:n(Y8,e,Rl(r)),uI:n(Fd,e,Bl(r)),uQ:n(Fd,e,Al(r)),uW:n(Fd,e,Qf(r))}}),JU=l(function(e,r){var a=r,t=a,o=e,c=o;return{nw:n(ge,c.nw,t.nw),r6:n(ge,c.r6,t.r6),r7:n(ge,c.r7,t.r7),nA:n(qe,c.nA,t.nA),sh:n(qe,c.sh,t.sh),si:n(qe,c.si,t.si)}}),KU=l(function(e,r){var a=r,t=a.pi,o=a.pk,c=a.R,i=e,f=i.a,$=i.b,s=i.c,d=Me(f)/2,b=Me($)/2,m=Me(s)/2;return{nw:t+d,r6:o+b,r7:c+m,nA:t-d,sh:o-b,si:c-m}}),Vd=W(function(e,r,a,t){var o=a.p2,c=2*a.rr*r,i=2*a.rq*r,f=2*a.rp*r,$=o.R*r,s=o.pk*r,d=o.pi*r,b=en(Qf(e)),m=Me(f*b.pi)+Me(i*b.pk)+Me(c*b.R),g=en(Al(e)),_=Me(f*g.pi)+Me(i*g.pk)+Me(c*g.R),y=en(Bl(e)),S=Me(f*y.pi)+Me(i*y.pk)+Me(c*y.R),w=n(KU,I(S,_,m),n(Y8,e,v(gr,d,s,$)));if(t.$)return M(w);var j=t.a;return M(n(JU,j,w))}),Ed=W(function(e,r,a,t){e:for(;;)if(t.b){var o=t.a,c=t.b;switch(o.$){case 0:var g=e,_=r,y=a,S=c;e=g,r=_,a=y,t=S;continue e;case 1:var i=o.a,f=C(Vd,e,r,i,a),g=e,_=r,y=f,S=c;e=g,r=_,a=y,t=S;continue e;case 2:var i=o.a,f=C(Vd,e,r,i,a),g=e,_=r,y=f,S=c;e=g,r=_,a=y,t=S;continue e;case 3:var g=e,_=r,y=a,S=c;e=g,r=_,a=y,t=S;continue e;case 4:var i=o.a,f=C(Vd,e,r,i,a),g=e,_=r,y=f,S=c;e=g,r=_,a=y,t=S;continue e;case 5:var $=o.a,g=e,_=r,y=C(Ed,e,r,a,$),S=c;e=g,r=_,a=y,t=S;continue e;default:var s=o.a,d=o.b,b=n(Q8,NU(s),e),m=r*s.gr,g=e,_=r,y=C(Ed,b,m,a,u([d])),S=c;e=g,r=_,a=y,t=S;continue e}}else return a}),ZU={mU:!0,an:1,ao:0,ap:0,aq:0,ar:1,as:0,at:0,au:0,av:1,a2:0,a3:0,a4:0,gr:1},XU=function(e){var r=e;return r},e9=Ad({fT:Bi,jL:0,tk:Rd,gD:Ti,k8:255,gS:Bi,gT:Bi}),tZ=Q,la={iT:0,v:!1,jr:0,kk:0,ko:0,uk:0,pi:0,pk:0,R:0},jn=l(function(e,r){var a=e,t=r;return Jn({nb:a.pi,nc:a.ko,nd:t.pi,ne:t.ko,nf:a.pk,ng:a.jr,nh:t.pk,ni:t.jr,nj:a.R,nk:a.iT,nl:t.R,nm:t.iT,nn:a.uk,no:a.kk,np:t.uk,nq:t.kk})}),_$=h({ga:n(jn,la,la),hJ:n(jn,la,la),hK:n(jn,la,la),hL:n(jn,la,la)},C(Ht,0,0,0,0)),YU=function(e){var r=e;return r.eK},QU=function(e){var r=e;return r.mk},r9=function(e){var r=e;return .5*r},eW=function(e){var r=e;return O4(r)},a9=function(e){return eW(r9(QU(e)))},n9=function(e){var r=e;return 2*r},rW=function(e){return n9(n(Vt,a9(e),YU(e)))},aW=function(e){var r=e;return r.aE},nW=l(function(e,r){var a=r.sv,t=r.q3,o=r.py,c=a9(e),i=Wa(a),f=i,$=Wa(t),s=$,d=aW(e);if(d){var b=rW(e),m=b;return Nc(s)?Jn({nb:2/(o*m),nc:0,nd:0,ne:0,nf:0,ng:2/m,nh:0,ni:0,nj:0,nk:0,nl:0,nm:-1,nn:0,no:0,np:0,nq:1}):Jn({nb:2/(o*m),nc:0,nd:0,ne:0,nf:0,ng:2/m,nh:0,ni:0,nj:0,nk:0,nl:-2/(s-f),nm:-(s+f)/(s-f),nn:0,no:0,np:0,nq:1})}else return Nc(s)?Jn({nb:1/(o*c),nc:0,nd:0,ne:0,nf:0,ng:1/c,nh:0,ni:0,nj:0,nk:0,nl:-1,nm:-2*f,nn:0,no:0,np:-1,nq:0}):Jn({nb:1/(o*c),nc:0,nd:0,ne:0,nf:0,ng:1/c,nh:0,ni:0,nj:0,nk:0,nl:-(s+f)/(s-f),nm:-2*s*f/(s-f),nn:0,no:0,np:-1,nq:0})}),tW=function(e){return n(D,Z8({ci:1,cn:0,cG:!0}),n(D,Bd({fT:Pa,jL:X8,tk:e,gD:K8,k8:0,gS:Pa,gT:Pa}),b0))},p0=l(function(e,r){return(1&e>>r)===1?0:1}),oW=P(function(e,r,a){return Bn(n(N,function(t){var o=t<<4,c=C(Ht,n(p0,t,0),n(p0,t,1),n(p0,t,2),n(p0,t,3));return v(Cr,e,h(r,c),tW(o))},n(qa,1,n(ia,2,a)-1)))}),cW=C_,iW=o8,fW={a0:On,uI:iW,uQ:z8,uW:Hl},$W=function(e){var r=bc(Rl(e)),a=en(Qf(e)),t=en(Al(e)),o=en(Bl(e));return Jn({nb:o.pi,nc:t.pi,nd:a.pi,ne:r.pi,nf:o.pk,ng:t.pk,nh:a.pk,ni:r.pk,nj:o.R,nk:t.R,nl:a.R,nm:r.R,nn:0,no:0,np:0,nq:1})},uW=l(function(e,r){return $W(n(Q8,Id(r),e))}),lW=function(e){return n(uW,fW,e)},Fi=u([J8,C(Dd,!1,!1,!1,!1)]),vW=function(e){var r=Id(e.cb),a=ko(e.hm),t=a,o=C(Ed,r,1,L,u([t]));if(o.$===1)return k;var c=o.a,i=lW(e.cb),f=(function(){var me=e.I;switch(me.$){case 0:return h(0,0);case 1:return h(1,0);case 2:return h(2,0);case 3:var Te=me.a;return h(3,Te);case 4:var Te=me.a;return h(4,Te);default:return h(5,0)}})(),$=f.a,s=f.b,d=n(yU,e.cL,c),b=d.a,m=d.b,g=n(nW,e.cb,{py:e.py,q3:m,sv:b}),_=cW(g).nq,y=_?en(Qf(r)):Ct(OU(e.cb)),S=e.D,w=S,j=n(p$,w,e.J),B=j,E=Jn({nb:0,nc:y.pi,nd:s$(B),ne:e.oK,nf:0,ng:y.pk,nh:d$(B),ni:XU(U8(c)),nj:0,nk:y.R,nl:b$(B),nm:$,nn:0,no:_,np:0,nq:s}),V=_r(E8,E,i,g,ZU,t,{aO:k,bn:k,tI:k,S:k}),O=e.G;switch(O.$){case 0:var X=O.a;return Bn(u([v(Cr,V.aO,h(X,xa),Ai),v(Cr,V.S,h(X,xa),n(D,_c,Fi)),v(Cr,V.S,h(X,xa),n(D,_c,Ii)),v(Cr,V.S,h(X,xa),n(D,gc,Fi)),v(Cr,V.S,h(X,xa),n(D,gc,Ii)),v(Cr,V.bn,_$,Ai)]));case 1:var X=O.a;return Bn(u([v(Cr,V.aO,_$,Ai),u([e9]),v(Cr,V.tI,X.ga,W8),u([O8(0)]),v(Cr,V.aO,h(X,xa),GU),v(Cr,V.S,h(X,xa),n(D,_c,Fi)),v(Cr,V.S,h(X,xa),n(D,_c,Ii)),v(Cr,V.S,h(X,xa),n(D,gc,Fi)),v(Cr,V.S,h(X,xa),n(D,gc,Ii)),v(Cr,V.bn,_$,Ai)]));default:var oe=O.a,ie=O.b;return Bn(u([v(Cr,V.aO,h(ie,xa),Ai),u([e9]),n(RU,V.tI,oe),v(oW,V.aO,ie,vr(oe)),v(Cr,V.S,h(ie,xa),n(D,_c,Fi)),v(Cr,V.S,h(ie,xa),n(D,_c,Ii)),v(Cr,V.S,h(ie,xa),n(D,gc,Fi)),v(Cr,V.S,h(ie,xa),n(D,gc,Ii)),v(Cr,V.bn,_$,Ai)]))}},sW=function(e){return n(z$,"width",He(e))},t9=l(function(e,r){var a=u([uU(1),dU(0),tU(!0),C(fU,0,0,0,0)]),t=(function(){var B=e.iM;switch(B.$){case 0:return I(a,"0",1);case 1:return I(n(D,cU,a),"1",1);default:var E=B.a;return I(a,"0",E)}})(),o=t.a,c=t.b,i=t.c,f=e.qB,$=f.a,s=f.b,d=V8(s),b=n(re,"height",He(d)+"px"),m=V8($),g=m/d,_=n(An,function(B){return vW({py:g,cb:e.cb,cL:e.cL,hm:B.hm,D:B.D,G:B.G,oK:i,I:B.I,J:B.J})},r),y=n(re,"width",He(m)+"px"),S=e.pE,w=S,j=bU(w);return v(vU,"div",u([n(re,"padding","0px"),y,b]),u([h(c,v(pU,o,u([sW(qr(m*i)),lU(qr(d*i)),y,b,n(re,"display","block"),n(re,"background-color",j)]),_))]))}),dW=function(e){return{$:2,a:e}},Hd=function(e){return dW(e)},o9=function(e){return n(t9,{iM:Hd(e.eA),pE:e.pE,cb:e.cb,cL:e.cL,qB:e.qB},u([{hm:e.hm,D:e.D,G:e.G,I:e.I,J:e.J}]))},oZ=1,cZ=0,bW=function(e){return{$:0,a:e}},pW=function(e){return bW(e)},Ud=function(e){return e},mW=function(e){return{$:1,a:e}},hW=function(e){return mW(e)},m0=function(e){var r=e,a=n(ge,Me(r.pi),n(ge,Me(r.pk),Me(r.R)));if(a){var t=r.R/a,o=r.pk/a,c=r.pi/a,i=ya(c*c+o*o+t*t);return M({pi:c/i,pk:o/i,R:t/i})}else return L},gW=l(function(e,r){var a=e,t=r,o=t.R-a.R,c=t.pk-a.pk,i=t.pi-a.pi,f=n(ge,Me(i),n(ge,Me(c),Me(o)));if(f){var $=o/f,s=c/f,d=i/f,b=ya(d*d+s*s+$*$);return b*f}else return Pc}),_W=l(function(e,r){var a=e,t=r;return t.pi*a.pi+t.pk*a.pk+t.R*a.R}),c9=l(function(e,r){var a=e,t=r;return K(t,a)>0}),yW=l(function(e,r){var a=e,t=r;return K(t,a)<0}),CW=l(function(e,r){var a=e,t=r;return{pi:t.pi-a.pi,pk:t.pk-a.pk,R:t.R-a.R}}),kW=l(function(e,r){var a=e,t=r,o=t.pi*a.pi+t.pk*a.pk+t.R*a.R;return{pi:a.pi*o,pk:a.pk*o,R:a.R*o}}),SW=function(e){var r=e;return{pi:-r.pi,pk:-r.pk,R:-r.R}},PW=P(function(e,r,a){return n(ha,function(t){var o=n(CW,n(kW,t,r),r);return n(ha,function(c){var i=n(Zs,r,e),f=n(_W,a,i),$=n(c9,Pc,f)?i:n(yW,Pc,f)?SW(i):Ys;return n(de,function(s){return I(t,c,s)},m0($))},m0(o))},m0(e))}),xW=function(e){var r=e;return r},iZ=Q,Wd=Q,fZ=Q,jW=l(function(e,r){var a=e,t=r;return n(ss,a,t)}),wW=l(function(e,r){var a=e,t=r;return{pi:a.pk*t.R-a.R*t.pk,pk:a.R*t.pi-a.pi*t.R,R:a.pi*t.pk-a.pk*t.pi}}),i9=function(e){var r=e;return r.uI},f9=function(e){var r=e;return r.uQ},LW=function(e){return n(wW,i9(e),f9(e))},TW=function(e){var r=e;return r.a0},MW=function(e){return{a0:TW(e),uI:i9(e),uQ:f9(e),uW:LW(e)}},zW=function(e){return{eK:e.eK,mk:(function(){var r=e.rd;if(r.$){var t=r.a;return n9(n(jW,r9(t),e.eK))}else{var a=r.a;return a}})(),cT:MW(e.k5),aE:e.aE}},DW=l(function(e,r){var a=md(r),t=a.a,o=a.b;return Wd({a0:e,uI:t,uQ:o})}),RW=l(function(e,r){return n(DW,r,e)}),BW=function(e){var r=n(Gl,e.B,e.O),a=xW(e.fp),t=n(Zs,r,a),o=(function(){var c=v(PW,r,a,t);if(c.$){var d=m0(r);if(d.$){var m=md(e.fp),g=m.a,_=m.b;return Wd({a0:e.O,uI:_,uQ:e.fp})}else{var b=d.a;return n(RW,b,e.O)}}else{var i=c.a,f=i.a,$=i.b,s=i.c;return Wd({a0:e.O,uI:s,uQ:$})}})();return zW({eK:n(gW,e.O,e.B),rd:e.rd,aE:e.aE,k5:o})},h0=function(e){return BW({O:Ud(e.O),B:Ud(e.B),rd:(function(){var r=e.aE;if(r.$){var t=r.a.pb;return hW(an(t))}else{var a=r.a.eN;return pW(yi(a))}})(),aE:(function(){var r=e.aE;return r.$?1:0})(),fp:n(ne,u$,n(F8,On,Ud(e.fp)))})},So=function(e){return e},AW=function(e){var r=e;return r},Gd=function(e){var r=v(or,1667,25e3,AW(e)),a=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(a*a*a)-1.3481102*(a*a)+2.18555832*a-.20219683:r<=4e3?-.9549476*(a*a*a)-1.37418593*(a*a)+2.09137015*a-.16748867:3.081758*(a*a*a)-5.8733867*(a*a)+3.75112997*a-.37001483;return l$({pi:a,pk:t})},g0=l$({pi:.31271,pk:.32902}),IW=l$({pi:.37208,pk:.37529}),FW=l$({pi:.44757,pk:.40745}),$Z=Q,$9=function(e){return e},u9=Gd($9(12e3)),l9=Gd($9(5600)),Po=function(e){switch(e.$){case 0:return g0;case 1:return l9;case 2:return u9;case 3:return FW;case 4:return IW;case 5:var r=e.a;return Gd(r);default:var a=e.a;return y8(a)}},uZ=Q,qd=function(e){return f0(1.2*n(ia,2,e))},v9=function(e){return Wa(e)},VW=function(e){var r=e;return r},EW=function(e){var r=e.ma,a=e.oz,t=e.mW,o=VW(a);return qd(n(Zi,2,100*n(ia,r,2)/(o*t)))},HW=function(e){switch(e.$){case 0:var r=e.a;return qd(r);case 1:var a=e.a;return v9(a);default:var t=e.a;return EW({ma:t.ma,mW:t.mW,oz:t.oz})}},UW=l(function(e,r){return{$:2,a:e,b:r}}),s9=function(e){return{$:0,a:e}},_0=function(e){var r=e;return r},WW=function(e){var r=e;return r.v},Od=s9(_$.a),GW=l(function(e,r){var a=l(function(t,o){var c=o.a,i=o.b;return e(t)?h(n(D,t,c),i):h(c,n(D,t,i))});return v(sn,a,h(k,k),r)}),qW=function(e){var r=e;return Jn({nb:r.pi,nc:r.ko,nd:0,ne:0,nf:r.pk,ng:r.jr,nh:0,ni:0,nj:r.R,nk:r.iT,nl:0,nm:0,nn:r.uk,no:r.kk,np:0,nq:0})},d9=De(function(e,r,a,t,o,c,i,f){var $=n(GW,WW,u([_0(e),_0(r),_0(a),_0(t)])),s=$.a,d=$.b;if(s.b){var b=Y(s,d);if(b.b&&b.b.b&&b.b.b.b&&b.b.b.b.b&&!b.b.b.b.b.b){var m=b.a,g=b.b,_=g.a,y=g.b,S=y.a,w=y.b,j=w.a;return n(UW,n(N,qW,s),{ga:n(jn,m,_),hJ:n(jn,S,j),hK:n(jn,o,c),hL:n(jn,i,f)})}else return Od}else return s9({ga:n(jn,e,r),hJ:n(jn,a,t),hK:n(jn,o,c),hL:n(jn,i,f)})}),lZ=Q,Nd=function(e){return e},Jd=l(function(e,r){var a=e,t=en(r.eB),o=t.pi,c=t.pk,i=t.R,f=n(p$,r.jx,r.a),$=f;return{iT:b$($),v:a,jr:d$($),kk:0,ko:s$($),uk:1,pi:-o,pk:-c,R:-i}}),b9=l(function(e,r){var a=e,t=bc(r.ta),o=t.pi,c=t.pk,i=t.R,f=n(p$,r.jx,r.a),$=f;return{iT:b$($),v:a,jr:d$($),kk:0,ko:s$($),uk:2,pi:o,pk:c,R:i}}),OW=function(e){switch(e.$){case 0:var r=e.a;return n(Jd,Nd(r.v),{a:Po(r.a),eB:r.eB,jx:r.jx});case 1:var r=e.a;return n(b9,Nd(r.v),{a:Po(r.a),jx:r.jx,ta:r.ta});default:return la}},p9=function(e){var r=e;return r},m9=function(e){var r=e;return{pi:-r.pi,pk:-r.pk,R:-r.R}},Kd=function(e){e:for(;;){if(ee(e.mK,Pc)&&ee(e.mL,Pc))return la;if(n(c9,Wa(e.mK),Wa(e.mL))){var r={a:e.a,mK:e.mL,mL:e.mK,fp:m9(e.fp)};e=r;continue e}else{var a=Me(p9(e.mL)/Zr),t=Me(p9(e.mK)/Zr),o=en(e.fp),c=o.pi,i=o.pk,f=o.R,$=n(p$,Xs(1),e.a),s=$;return{iT:t*b$(s),v:!1,jr:t*d$(s),kk:a/t,ko:t*s$(s),uk:3,pi:c,pk:i,R:f}}}},NW=function(e){return Kd({a:e.a,mK:e.jx,mL:e.jx,fp:Hl})},h9=!1,Zd=function(e){return Kd({a:e.a,mK:e.jx,mL:Pc,fp:e.fp})},JW=function(e){switch(e.$){case 0:var r=e.a;return n(Jd,h9,{a:Po(r.a),eB:r.eB,jx:r.jx});case 1:var r=e.a;return n(b9,h9,{a:Po(r.a),jx:r.jx,ta:r.ta});case 2:var r=e.a;return Kd({a:Po(r.a),mK:r.mK,mL:r.mL,fp:r.fp});case 3:var r=e.a;return Zd({a:Po(r.a),jx:r.jx,fp:r.fp});default:var r=e.a;return NW({a:Po(r.a),jx:r.jx})}},KW=function(e){var r=la,a=function(f){switch(f.$){case 0:return!0;case 1:return!0;default:return!1}},t=n(N,JW,n(it,4,n(Pr,n($r,Pv,a),e))),o=function(f){return n(ne,r,pr(n(Vn,f,t)))},c=n(N,OW,n(it,4,n(Pr,a,e))),i=function(f){return n(ne,r,pr(n(Vn,f,c)))};return er(c)&&er(t)?Od:Kt(d9,i(0),i(1),i(2),i(3),o(0),o(1),o(2),o(3))},ZW={$:5},XW=ZW,YW={$:0},Xd=YW,QW=function(e){return{$:4,a:e}},eG={$:2},rG=function(e){return Nc(e)?eG:QW(e)},aG=function(e){return{$:3,a:e}},nG={$:1},tG=function(e){return Nc(e)?nG:aG(e)},oG=function(e){switch(e.$){case 0:return Xd;case 1:var r=e.a;return tG(r);case 2:var r=e.a;return rG(r);default:return XW}},g9=l(function(e,r){return o9({pE:v0(e.C),cb:h0(e.cb),cL:an(e.cL),eA:e.eA,qB:h(So(qr(e.du.k6)),So(qr(e.du.ju))),hm:r,D:HW(e.D),G:KW(e.G),I:oG(e.I),J:Po(e.J)})}),cG=l(function(e,r){return o9({pE:v0(e.fA.C),cb:h0(e.cb),cL:an(e.cL),eA:e.eA,qB:h(So(qr(e.du.k6)),So(qr(e.du.ju))),hm:r,D:e.fA.D,G:e.fA.G,I:e.fA.I,J:e.fA.J})}),iG=.005,fG=l(function(e,r){return n(g9,{C:e.gl.C,cb:e.cb,cL:e.cL,eA:e.eA,D:e.gl.D,G:e.gl.G,du:e.du,I:e.gl.I,J:e.gl.J},r)}),$G=function(e){return an(.01*e)},_9=function(e){return n(t9,{iM:e.iM,pE:e.pE,cb:e.cb,cL:e.cL,qB:e.qB},u([{hm:e.hm,D:e.D,G:e.G,I:e.I,J:e.J}]))},uG=P(function(e,r,a){return Kt(d9,e,r,a,la,la,la,la,la)}),lG=function(e){var r=n(Jd,Nd(e.tI),{a:l9,eB:e.t2,jx:Ri(8e4)}),a=Zd({a:u9,jx:Ri(2e4),fp:e.fp}),t=Zd({a:g0,jx:Ri(15e3),fp:m9(e.fp)}),o=v(uG,r,a,t);return _9({iM:Hd(e.eA),pE:e.pE,cb:e.cb,cL:e.cL,qB:e.qB,hm:e.hm,D:qd(15),G:o,I:Xd,J:g0})},vG=l(function(e,r){var a=e,t=r,o=Ea(t);return{pi:o*Ea(a),pk:o*Ha(a),R:Ha(t)}}),sG=l(function(e,r){return lG({pE:v0(zi(e.C)),cb:h0(e.cb),cL:$G(.5),eA:e.eA,qB:h(So(qr(e.du.k6)),So(qr(e.du.ju))),hm:r,tI:!0,t2:n(vG,yi(e.t1),yi(e.t3)),fp:Hl})}),dG=function(e){return _9({iM:Hd(e.eA),pE:e.pE,cb:e.cb,cL:e.cL,qB:e.qB,hm:e.hm,D:v9(f0(80)),G:Od,I:Xd,J:g0})},bG=l(function(e,r){return dG({pE:v0(zi(e.pE)),cb:h0(e.cb),cL:an(e.cL),eA:e.eA,qB:h(So(qr(e.du.k6)),So(qr(e.du.ju))),hm:r})}),pG=l(function(e,r){switch(r.$){case 0:var t=r.a;return n(sG,{C:t.pE,cb:e.cb,eA:e.du.eA,du:e.du,t1:t.t1,t3:t.t3},e.hm);case 1:var t=r.a;return n(bG,{pE:t.pE,cb:e.cb,cL:iG,eA:e.du.eA,du:e.du},e.hm);case 2:var t=r.a;return n(g9,{C:Uf(t.pE),cb:e.cb,cL:t.cL,eA:e.du.eA,D:t.D,G:Y(t.G,e.o4),du:e.du,I:t.I,J:t.J},e.hm);case 3:var t=r.a,a=t.gl;return n(fG,{cb:e.cb,cL:t.cL,eA:e.du.eA,gl:z(a,{G:Y(a.G,e.o4)}),du:e.du},e.hm);default:var t=r.a;return n(cG,{fA:t.fA,cb:e.cb,cL:t.cL,eA:e.du.eA,du:e.du},e.hm)}}),mG=l(function(e,r){var a=aU(r),t=n(KH,{ns:e.ns,d_:e.d_},r);return n(qp,Bo,n(pG,{cb:e.cb,hm:t,du:e.du,o4:a},e.m2))}),hG=function(e){return{$:0,a:e}},gG=function(e){return hG(e)},_G=function(e){return{eA:e.eA,ju:e.du.ju,k6:e.du.k6}},yG=l(function(e,r){return MF(n(mG,{cb:W4(e),m2:gG({pE:n(Ml,Z4(r.a1).pE,r.dd),t1:st(225),t3:st(315)}),ns:e.ns,d_:ze,du:_G(e)},i6(u([n(TF,e,r)]))))}),CG=P(function(e,r,a){return n(G,k,u([Up(r),n(G,u([H(u([hr(ec),Le(Xe(100)),ye(Xe(100)),n(F,"touch-action","none")]))]),u([n(No,Bo,n(yG,e,a))]))]))}),kG=cR({la:k,cJ:P(function(e,r,a){return k}),cm:fR,cU:OR,bG:ZR,dp:MA,dq:mI,gj:pF,cZ:yF,dE:CG});Oh({TrixelEditor:{Main:{init:kG(n(R,function(e){return ae({g:e})},n(x,"inputs",n(R,function(e){return n(R,function(r){return n(R,function(a){return n(R,function(t){return n(R,function(o){return n(R,function(c){return n(R,function(i){return n(R,function(f){return n(R,function($){return n(R,function(s){return n(R,function(d){return n(R,function(b){return n(R,function(m){return n(R,function(g){return n(R,function(_){return n(R,function(y){return n(R,function(S){return ae({dJ:S,ez:y,eA:_,hh:g,q7:m,hD:b,j8:d,sU:s,gi:$,sW:f,s$:i,s6:c,tf:o,du:t,$9:a,ef:r,fs:e})},n(x,"boundingClientRects",sr(n(R,function(S){return n(R,function(w){return n(R,function(j){return ae({qT:j,rf:w,tD:S})},n(x,"elements",sr(n(R,function(j){return n(R,function(B){return ae({pP:B,bF:j})},n(x,"boundingClientRect",n(R,function(B){return n(R,function(E){return n(R,function(V){return n(R,function(O){return ae({bz:O,bH:V,bM:E,bR:B})},n(x,"bottom",q))},n(x,"left",q))},n(x,"right",q))},n(x,"top",q))))},n(x,"id",Ce)))))},n(x,"frameId",Ce))},n(x,"scroll",n(R,function(S){return n(R,function(w){return n(R,function(j){return n(R,function(B){return n(R,function(E){return n(R,function(V){return ae({lN:V,lO:E,bH:B,bR:j,pb:w,pc:S})},n(x,"contentHeight",q))},n(x,"contentWidth",q))},n(x,"left",q))},n(x,"top",q))},n(x,"viewportHeight",q))},n(x,"viewportWidth",q)))))))},n(x,"darkModeIsOn",te))},n(x,"devicePixelRatio",q))},n(x,"dt",q))},n(x,"focusedElementIsTextInput",te))},n(x,"keyboard",n(R,function(b){return n(R,function(m){return n(R,function(g){return n(R,function(_){return n(R,function(y){return n(R,function(S){return n(R,function(w){return n(R,function(j){return n(R,function(B){return n(R,function(E){return ae({iL:E,i8:B,je:j,qI:w,bH:S,jQ:y,tc:_,bM:g,kz:m,k1:b})},n(x,"alt",te))},n(x,"ctrl",te))},n(x,"down",te))},n(x,"downs",sr(Ce)))},n(x,"left",te))},n(x,"meta",te))},n(x,"pressedKeys",sr(Ce)))},n(x,"right",te))},n(x,"shift",te))},n(x,"up",te))))},n(x,"operatingSystem",Ce))},n(x,"pageId",Ce))},n(x,"pageScroll",n(R,function($){return n(R,function(s){return n(R,function(d){return n(R,function(b){return n(R,function(m){return n(R,function(g){return ae({lN:g,lO:m,bH:b,bR:d,pb:s,pc:$})},n(x,"contentHeight",q))},n(x,"contentWidth",q))},n(x,"left",q))},n(x,"top",q))},n(x,"viewportHeight",q))},n(x,"viewportWidth",q))))},n(x,"paneBoundingBoxes",sr(n(R,function(f){return n(R,function($){return n(R,function(s){return n(R,function(d){return n(R,function(b){return ae({ju:b,bH:d,sX:s,bR:$,k6:f})},n(x,"height",q))},n(x,"left",q))},n(x,"paneId",Ce))},n(x,"top",q))},n(x,"width",q)))))},n(x,"persisted",sr(n(R,function(i){return n(R,function(f){return ae(h(i,f))},n(Sr,1,Ce))},n(Sr,0,Ce)))))},n(x,"pointer",n(R,function(c){return n(R,function(i){return n(R,function(f){return n(R,function($){return n(R,function(s){return n(R,function(d){return n(R,function(b){return n(R,function(m){return n(R,function(g){return n(R,function(_){return n(R,function(y){return n(R,function(S){return ae({qE:S,je:y,hi:_,hj:g,qS:m,rO:b,sp:d,tt:s,tv:$,k1:f,pi:i,pk:c})},n(x,"doubleClick",te))},n(x,"down",te))},n(x,"dx",q))},n(x,"dy",q))},n(x,"elementIdsForLastDown",sr(Ce)))},n(x,"isDown",te))},n(x,"move",te))},n(x,"rightDown",te))},n(x,"rightUp",te))},n(x,"up",te))},n(x,"x",q))},n(x,"y",q))))},n(x,"rawPointer",n(R,function(o){return n(R,function(c){return n(R,function(i){return n(R,function(f){return n(R,function($){return n(R,function(s){return n(R,function(d){return n(R,function(b){return n(R,function(m){return n(R,function(g){return n(R,function(_){return n(R,function(y){return ae({qE:y,je:_,hi:g,hj:m,qS:b,rO:d,sp:s,tt:$,tv:f,k1:i,pi:c,pk:o})},n(x,"doubleClick",te))},n(x,"down",te))},n(x,"dx",q))},n(x,"dy",q))},n(x,"elementIdsForLastDown",sr(Ce)))},n(x,"isDown",te))},n(x,"move",te))},n(x,"rightDown",te))},n(x,"rightUp",te))},n(x,"up",te))},n(x,"x",q))},n(x,"y",q))))},n(x,"screen",n(R,function(t){return n(R,function(o){return ae({ju:o,k6:t})},n(x,"height",q))},n(x,"width",q))))},n(x,"searchParamsFromUrl",Lt(u([pu(L),n(Qe,M,sr(n(R,function(a){return n(R,function(t){return ae(h(a,t))},n(Sr,1,Ce))},n(Sr,0,Ce))))]))))},n(x,"touches",sr(n(R,function(r){return n(R,function(a){return n(R,function(t){return ae({bF:t,pi:a,pk:r})},n(x,"id",Hr))},n(x,"x",q))},n(x,"y",q)))))},n(x,"wheel",n(R,function(e){return n(R,function(r){return n(R,function(a){return n(R,function(t){return n(R,function(o){return ae({lW:o,lX:t,l2:a,n3:r,n4:e})},n(x,"deltaX",q))},n(x,"deltaY",q))},n(x,"elementIdsForLastWheel",sr(Ce)))},n(x,"pinchDeltaForChrome",q))},n(x,"pinchScaleForSafari",Lt(u([pu(L),n(Qe,M,q)])))))))))(0)}}})})(this);
