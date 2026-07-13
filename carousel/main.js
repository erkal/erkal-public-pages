(function(ac){"use strict";function Tt(e,r,n){return n.a=e,n.f=r,n}function l(e){return Tt(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return Tt(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function J(e){return Tt(4,e,function(r){return function(n){return function(t){return function(o){return e(r,n,t,o)}}}})}function Le(e){return Tt(5,e,function(r){return function(n){return function(t){return function(o){return function(c){return e(r,n,t,o,c)}}}}})}function Mr(e){return Tt(6,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return e(r,n,t,o,c,i)}}}}}})}function Mt(e){return Tt(7,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return e(r,n,t,o,c,i,f)}}}}}}})}function De(e){return Tt(8,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return e(r,n,t,o,c,i,f,$)}}}}}}}})}function R0(e){return Tt(9,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return e(r,n,t,o,c,i,f,$,s)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function v(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function P(e,r,n,t,o){return e.a===4?e.f(r,n,t,o):e(r)(n)(t)(o)}function V(e,r,n,t,o,c){return e.a===5?e.f(r,n,t,o,c):e(r)(n)(t)(o)(c)}function Cr(e,r,n,t,o,c,i){return e.a===6?e.f(r,n,t,o,c,i):e(r)(n)(t)(o)(c)(i)}function Gr(e,r,n,t,o,c,i,f){return e.a===7?e.f(r,n,t,o,c,i,f):e(r)(n)(t)(o)(c)(i)(f)}function zt(e,r,n,t,o,c,i,f,$){return e.a===8?e.f(r,n,t,o,c,i,f,$):e(r)(n)(t)(o)(c)(i)(f)($)}function IR(e,r,n,t,o,c,i,f,$,s){return e.a===9?e.f(r,n,t,o,c,i,f,$,s):e(r)(n)(t)(o)(c)(i)(f)($)(s)}var N8=[];function G8(e){return[e]}function Y8(e){return e.length}var W8=x(function(e,r,n){for(var t=new Array(e),o=0;o<e;o++)t[o]=n(r+o);return t}),O8=l(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,h(n,r)}),J8=l(function(e,r){return r[e]}),Z8=x(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=n[c];return o[e]=r,o}),Q8=l(function(e,r){for(var n=r.length,t=new Array(n+1),o=0;o<n;o++)t[o]=r[o];return t[n]=e,t}),X8=x(function(e,r,n){for(var t=n.length,o=0;o<t;o++)r=a(e,n[o],r);return r}),K8=x(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r}),BR=l(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=e(r[o]);return t}),VR=x(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=a(e,r+c,n[c]);return o}),e9=x(function(e,r,n){return n.slice(e,r)}),r9=x(function(e,r,n){var t=r.length,o=e-t;o>n.length&&(o=n.length);for(var c=t+o,i=new Array(c),f=0;f<t;f++)i[f]=r[f];for(var f=0;f<o;f++)i[f+t]=n[f];return i}),HR=l(function(e,r){return r}),RR=l(function(e,r){return console.log(e+": "+Os(r)),r});function FR(e,r){return function(n){fn(8,e,r,n)}}function ER(e,r,n){return function(t){fn(9,e,r,n,t)}}function Os(e){return"<internals>"}function UR(e){return ct(!1,e)}function ct(e,r){if(typeof r=="function")return nu(e,"<function>");if(typeof r=="boolean")return si(e,r?"True":"False");if(typeof r=="number")return a9(e,r+"");if(r instanceof String)return n9(e,"'"+Js(r,!0)+"'");if(typeof r=="string")return Zs(e,'"'+Js(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return nu(e,"<internals>");if(n[0]==="#"){var o=[];for(var t in r)t!=="$"&&o.push(ct(e,r[t]));return"("+o.join(",")+")"}if(n==="Set_elm_builtin")return si(e,"Set")+au(e,".fromList")+" "+ct(e,Xh(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return si(e,"Dict")+au(e,".fromList")+" "+ct(e,Ga(r));if(n==="Array_elm_builtin")return si(e,"Array")+au(e,".fromList")+" "+ct(e,Qh(r));if(n==="::"||n==="[]"){var o="[";for(r.b&&(o+=ct(e,r.a),r=r.b);r.b;r=r.b)o+=","+ct(e,r.a);return o+"]"}var o="";for(var c in r)if(c!=="$"){var i=ct(e,r[c]),f=i[0],$=f==="{"||f==="("||f==="["||f==="<"||f==='"'||i.indexOf(" ")<0;o+=" "+($?i:"("+i+")")}return si(e,n)+o}if(typeof DataView=="function"&&r instanceof DataView)return Zs(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return nu(e,"<"+r.name+">");if(typeof r=="object"){var o=[];for(var s in r){var d=s[0]==="_"?s.slice(1):s;o.push(au(e,d)+" = "+ct(e,r[s]))}return o.length===0?"{}":"{ "+o.join(", ")+" }"}return nu(e,"<internals>")}function Js(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function si(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function a9(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Zs(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function n9(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function au(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function nu(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function qR(e){return String.fromCharCode(e<10?48+e:55+e)}function fn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function NR(e,r,n,t,o){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var c=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+c);case 3:var i=r;throw new Error("There can only be one port named `"+i+"`, but your program has multiple.");case 4:var i=r,f=n;throw new Error("Trying to send an unexpected type of value through port `"+i+"`:\n"+f);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var $=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+$+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var $=r,s=n,b=t;throw new Error("TODO in module `"+$+"` "+Qs(s)+`

`+b);case 9:var $=r,s=n,d=t,b=o;throw new Error("TODO in module `"+$+"` from the `case` expression "+Qs(s)+`

It received the following value:

    `+Os(d).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+b.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Qs(e){return e.dc.fT===e.qy.fT?"on line "+e.dc.fT:"on lines "+e.dc.fT+" through "+e.qy.fT}function ie(e,r){for(var n,t=[],o=F0(e,r,0,t);o&&(n=t.pop());o=F0(n.a,n.b,0,t));return o}function F0(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&fn(5),!1;if(n>100)return t.push(h(e,r)),!0;e.$<0&&(e=Ga(e),r=Ga(r));for(var o in e)if(!F0(e[o],r[o],n+1,t))return!1;return!0}var t9=l(ie),o9=l(function(e,r){return!ie(e,r)});function oe(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=oe(e.a,r.a))||(n=oe(e.b,r.b))?n:oe(e.c,r.c);for(;e.b&&r.b&&!(n=oe(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}var c9=l(function(e,r){return oe(e,r)<0}),i9=l(function(e,r){return oe(e,r)<1}),f9=l(function(e,r){return oe(e,r)>0}),u9=l(function(e,r){return oe(e,r)>=0}),$9=l(function(e,r){var n=oe(e,r);return n<0?Gd:n?Kh:Nd}),uo=0,GR={$:"#0"};function h(e,r){return{a:e,b:r}}function YR(e,r){return{$:"#2",a:e,b:r}}function R(e,r,n){return{a:e,b:r,c:n}}function WR(e,r,n){return{$:"#3",a:e,b:r,c:n}}function OR(e){return e}function JR(e){return new String(e)}function I(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}var l9=l(Q);function Q(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=In(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=In(e.a,r);return n}var C={$:0},ZR={$:"[]"};function In(e,r){return{$:1,a:e,b:r}}function QR(e,r){return{$:"::",a:e,b:r}}var v9=l(In);function u(e){for(var r=C,n=e.length;n--;)r=In(e[n],r);return r}function tu(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var s9=x(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return u(t)}),XR=J(function(e,r,n,t){for(var o=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)o.push(v(e,r.a,n.a,t.a));return u(o)}),d9=Le(function(e,r,n,t,o){for(var c=[];r.b&&n.b&&t.b&&o.b;r=r.b,n=n.b,t=t.b,o=o.b)c.push(P(e,r.a,n.a,t.a,o.a));return u(c)}),KR=Mr(function(e,r,n,t,o,c){for(var i=[];r.b&&n.b&&t.b&&o.b&&c.b;r=r.b,n=n.b,t=t.b,o=o.b,c=c.b)i.push(V(e,r.a,n.a,t.a,o.a,c.a));return u(i)}),b9=l(function(e,r){return u(tu(r).sort(function(n,t){return oe(e(n),e(t))}))}),m9=l(function(e,r){return u(tu(r).sort(function(n,t){var o=a(e,n,t);return o===Nd?0:o===Gd?-1:1}))}),p9=l(function(e,r){return e+r}),h9=l(function(e,r){return e-r}),g9=l(function(e,r){return e*r}),y9=l(function(e,r){return e/r}),_9=l(function(e,r){return e/r|0}),C9=l(Math.pow),P9=l(function(e,r){return r%e}),S9=l(function(e,r){var n=r%e;return e===0?fn(11):n>0&&e<0||n<0&&e>0?n+e:n}),k9=Math.PI,eF=Math.E,x9=Math.cos,j9=Math.sin,w9=Math.tan,L9=Math.acos,rF=Math.asin,T9=Math.atan,M9=l(Math.atan2);function z9(e){return e}function aF(e){return e|0}function D9(e){return e===1/0||e===-1/0}var A9=Math.ceil,I9=Math.floor,B9=Math.round,V9=Math.sqrt,Xs=Math.log,H9=isNaN;function R9(e){return!e}var F9=l(function(e,r){return e&&r}),E9=l(function(e,r){return e||r}),nF=l(function(e,r){return e!==r}),U9=l(function(e,r){return e+r});function q9(e){var r=e.charCodeAt(0);return isNaN(r)?M:D(55296<=r&&r<=56319?h(e[0]+e[1],e.slice(2)):h(e[0],e.slice(1)))}var N9=l(function(e,r){return e+r});function G9(e){return e.length}var tF=l(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;){var c=r.charCodeAt(o);if(55296<=c&&c<=56319){t[o]=e(r[o]+r[o+1]),o+=2;continue}t[o]=e(r[o]),o++}return t.join("")}),oF=l(function(e,r){for(var n=[],t=r.length,o=0;o<t;){var c=r[o],i=r.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=r[o],o++),e(c)&&n.push(c)}return n.join("")});function Y9(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}var W9=x(function(e,r,n){for(var t=n.length,o=0;o<t;){var c=n[o],i=n.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=n[o],o++),r=a(e,c,r)}return r}),O9=x(function(e,r,n){for(var t=n.length;t--;){var o=n[t],c=n.charCodeAt(t);56320<=c&&c<=57343&&(t--,o=n[t]+o),r=a(e,o,r)}return r}),J9=l(function(e,r){return r.split(e)}),Z9=l(function(e,r){return r.join(e)}),Q9=x(function(e,r,n){return n.slice(e,r)});function cF(e){return e.trim()}function iF(e){return e.replace(/^\s+/,"")}function fF(e){return e.replace(/\s+$/,"")}function uF(e){return u(e.trim().split(/\s+/g))}function $F(e){return u(e.split(/\r\n|\r|\n/g))}function X9(e){return e.toUpperCase()}function K9(e){return e.toLowerCase()}var lF=l(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1}),e6=l(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),r6=l(function(e,r){return r.indexOf(e)>-1}),a6=l(function(e,r){return r.indexOf(e)===0}),n6=l(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length}),t6=l(function(e,r){var n=e.length;if(n<1)return C;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+n;return u(o)});function Ks(e){return e+""}function o6(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,o=t;o<e.length;++o){var c=e.charCodeAt(o);if(c<48||57<c)return M;r=10*r+c-48}return o==t?M:D(n==45?-r:r)}function c6(e){if(e.length===0||/[\sxbo]/.test(e))return M;var r=+e;return r===r?D(r):M}function i6(e){return tu(e).join("")}function f6(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function u6(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function vF(e){return e.toUpperCase()}function $6(e){return e.toLowerCase()}function sF(e){return e.toLocaleUpperCase()}function dF(e){return e.toLocaleLowerCase()}function l6(e){return{$:0,a:e}}function v6(e){return{$:1,a:e}}function di(e){return{$:2,b:e}}var s6=di(function(e){return typeof e!="number"?Ua("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?Jr(e):Ua("an INT",e)}),d6=di(function(e){return typeof e=="boolean"?Jr(e):Ua("a BOOL",e)}),b6=di(function(e){return typeof e=="number"?Jr(e):Ua("a FLOAT",e)}),m6=di(function(e){return Jr(e)}),p6=di(function(e){return typeof e=="string"?Jr(e):e instanceof String?Jr(e+""):Ua("a STRING",e)});function h6(e){return{$:3,b:e}}function g6(e){return{$:4,b:e}}function y6(e){return{$:5,c:e}}var _6=l(function(e,r){return{$:6,d:e,b:r}}),C6=l(function(e,r){return{$:7,e,b:r}});function P6(e){return{$:8,b:e}}function Dt(e,r){return{$:9,f:e,g:r}}var S6=l(function(e,r){return{$:10,b:r,h:e}});function k6(e){return{$:11,g:e}}var x6=l(function(e,r){return Dt(e,[r])}),j6=x(function(e,r,n){return Dt(e,[r,n])}),w6=J(function(e,r,n,t){return Dt(e,[r,n,t])}),L6=Le(function(e,r,n,t,o){return Dt(e,[r,n,t,o])}),T6=Mr(function(e,r,n,t,o,c){return Dt(e,[r,n,t,o,c])}),M6=Mt(function(e,r,n,t,o,c,i){return Dt(e,[r,n,t,o,c,i])}),bF=De(function(e,r,n,t,o,c,i,f){return Dt(e,[r,n,t,o,c,i,f])}),mF=R0(function(e,r,n,t,o,c,i,f,$){return Dt(e,[r,n,t,o,c,i,f,$])}),z6=l(function(e,r){try{var n=JSON.parse(r);return Ea(e,n)}catch(t){return La(a(bl,"This is not valid JSON! "+t.message,r))}}),E0=l(function(e,r){return Ea(e,r)});function Ea(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Jr(e.c):Ua("null",r);case 3:return ou(r)?ed(e.b,r,u):Ua("a LIST",r);case 4:return ou(r)?ed(e.b,r,D6):Ua("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ua("an OBJECT with a field named `"+n+"`",r);var s=Ea(e.b,r[n]);return sn(s)?s:La(a(Yd,n,s.a));case 7:var t=e.e;if(!ou(r))return Ua("an ARRAY",r);if(t>=r.length)return Ua("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var s=Ea(e.b,r[t]);return sn(s)?s:La(a(Wd,t,s.a));case 8:if(typeof r!="object"||r===null||ou(r))return Ua("an OBJECT",r);var o=C;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var s=Ea(e.b,r[c]);if(!sn(s))return La(a(Yd,c,s.a));o=In(h(c,s.a),o)}return Jr(He(o));case 9:for(var i=e.f,f=e.g,$=0;$<f.length;$++){var s=Ea(f[$],r);if(!sn(s))return s;i=i(s.a)}return Jr(i);case 10:var s=Ea(e.b,r);return sn(s)?Ea(e.h(s.a),r):s;case 11:for(var d=C,b=e.g;b.b;b=b.b){var s=Ea(b.a,r);if(sn(s))return s;d=In(s.a,d)}return La(eg(He(d)));case 1:return La(a(bl,e.a,r));case 0:return Jr(e.a)}}function ed(e,r,n){for(var t=r.length,o=new Array(t),c=0;c<t;c++){var i=Ea(e,r[c]);if(!sn(i))return La(a(Wd,c,i.a));o[c]=i.a}return Jr(n(o))}function ou(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function D6(e){return a(yl,e.length,function(r){return e[r]})}function Ua(e,r){return La(a(bl,"Expecting "+e,r))}function nc(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return nc(e.b,r.b);case 6:return e.d===r.d&&nc(e.b,r.b);case 7:return e.e===r.e&&nc(e.b,r.b);case 9:return e.f===r.f&&rd(e.g,r.g);case 10:return e.h===r.h&&nc(e.b,r.b);case 11:return rd(e.g,r.g)}}function rd(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!nc(e[t],r[t]))return!1;return!0}var A6=l(function(e,r){return JSON.stringify(r,null,e)+""});function pF(e){return{$:0,a:e}}function hF(e){return e.a}function U0(e){return e}function gF(e){return e}function I6(){return[]}function B6(){return{}}var V6=x(function(e,r,n){var t=r;return e==="toJSON"&&typeof t=="function"||(n[e]=t),n});function H6(e){return l(function(r,n){return n.push(e(r)),n})}var R6=null,F6=l(function(e,r){return e&r}),E6=l(function(e,r){return e|r}),U6=l(function(e,r){return e^r});function yF(e){return~e}var q6=l(function(e,r){return r<<e}),N6=l(function(e,r){return r>>e}),G6=l(function(e,r){return r>>>e});function qa(e){return{$:0,a:e}}function q0(e){return{$:1,a:e}}function Yr(e){return{$:2,b:e,c:null}}var N0=l(function(e,r){return{$:3,b:e,d:r}}),Y6=l(function(e,r){return{$:4,b:e,d:r}});function W6(e){return{$:5,b:e}}var O6=0;function G0(e){var r={$:0,e:O6++,f:e,g:null,h:[]};return O0(r),r}function Y0(e){return Yr(function(r){r(qa(G0(e)))})}function ad(e,r){e.h.push(r),O0(e)}var J6=l(function(e,r){return Yr(function(n){ad(e,r),n(qa(uo))})});function Z6(e){return Yr(function(r){var n=e.f;n.$===2&&n.c&&n.c(),e.f=null,r(qa(uo))})}var W0=!1,nd=[];function O0(e){if(nd.push(e),!W0){for(W0=!0;e=nd.shift();)Q6(e);W0=!1}}function Q6(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,O0(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}function X6(e){return Yr(function(r){var n=setTimeout(function(){r(qa(uo))},e);return function(){clearTimeout(n)}})}var _F=J(function(e,r,n,t){return J0(r,t,e.ro,e.um,e.aA,function(){return function(){}})});function J0(e,r,n,t,o,c){var i=a(E0,e,r?r.flags:void 0);sn(i)||fn(2);var f={},$=n(i.a),s=$.a,d=c(g,s),b=e7(f,g);function g(p,_){var y=a(t,p,s);d(s=y.a,_),id(f,y.b,o(s))}return id(f,$.b,o(s)),b?{ports:b}:{}}var K6;function CF(e){K6.add(e)}var Wr={};function e7(e,r){var n;for(var t in Wr){var o=Wr[t];o.a&&(n=n||{},n[t]=o.a(t,r)),e[t]=r7(o,r)}return n}function Z0(e,r,n,t,o){return{b:e,c:r,d:n,e:t,f:o}}function r7(e,r){var n={g:r,h:void 0},t=e.c,o=e.d,c=e.e,i=e.f;function f($){return a(N0,f,W6(function(s){var d=s.a;return s.$===0?v(o,n,d,$):c&&i?P(t,n,d.i,d.j,$):v(t,n,c?d.i:d.j,$)}))}return n.h=G0(a(N0,f,e.b))}var a7=l(function(e,r){return Yr(function(n){e.g(r),n(qa(uo))})}),n7=l(function(e,r){return a(J6,e.h,{$:0,a:r})});function bi(e){return function(r){return{$:1,k:e,l:r}}}function td(e){return{$:2,m:e}}var od=l(function(e,r){return{$:3,n:e,o:r}}),cd=[],Q0=!1;function id(e,r,n){if(cd.push({p:e,q:r,r:n}),!Q0){Q0=!0;for(var t;t=cd.shift();)t7(t.p,t.q,t.r);Q0=!1}}function t7(e,r,n){var t={};cu(!0,r,t,null),cu(!1,n,t,null);for(var o in e)ad(e[o],{$:"fx",a:t[o]||{i:C,j:C}})}function cu(e,r,n,t){switch(r.$){case 1:var o=r.k,c=o7(e,o,t,r.l);n[o]=c7(e,c,n[o]);return;case 2:for(var i=r.m;i.b;i=i.b)cu(e,i.a,n,t);return;case 3:cu(e,r.o,n,{s:r.n,t});return}}function o7(e,r,n,t){function o(i){for(var f=n;f;f=f.t)i=f.s(i);return i}var c=e?Wr[r].e:Wr[r].f;return a(c,o,t)}function c7(e,r,n){return n=n||{i:C,j:C},e?n.i=In(r,n.i):n.j=In(r,n.j),n}function fd(e){Wr[e]&&fn(3,e)}function At(e,r){return fd(e),Wr[e]={e:i7,u:r,a:f7},bi(e)}var i7=l(function(e,r){return r});function f7(e){var r=[],n=Wr[e].u,t=X6(0);Wr[e].b=t,Wr[e].c=x(function(i,f,$){for(;f.b;f=f.b)for(var s=r,d=n(f.a),b=0;b<s.length;b++)s[b](d);return t});function o(i){r.push(i)}function c(i){r=r.slice();var f=r.indexOf(i);f>=0&&r.splice(f,1)}return{subscribe:o,unsubscribe:c}}function X0(e,r){return fd(e),Wr[e]={f:u7,u:r,a:$7},bi(e)}var u7=l(function(e,r){return function(n){return e(r(n))}});function $7(e,r){var n=C,t=Wr[e].u,o=qa(null);Wr[e].b=o,Wr[e].c=x(function(i,f,$){return n=f,o});function c(i){var f=a(E0,t,i);sn(f)||fn(4,e,f.a);for(var $=f.a,s=n;s.b;s=s.b)r(s.a($))}return{send:c}}function l7(e){ac.Elm?ud(ac.Elm,e):ac.Elm=e}function ud(e,r){for(var n in r)n in e?n=="init"?fn(6):ud(e[n],r[n]):e[n]=r[n]}function PF(e){ac.Elm?$d("Elm",ac.Elm,e):ac.Elm=e}function $d(e,r,n){for(var t in n)t in r?t=="init"?fn(6,e):$d(e+"."+t,r[t],n[t]):r[t]=n[t]}var iu,Or=typeof document<"u"?document:{};function K0(e,r){e.appendChild(r)}var SF=J(function(e,r,n,t){var o=t.node;return o.parentNode.replaceChild(Bt(e,function(){}),o),{}});function el(e){return{$:0,a:e}}var ld=l(function(e,r){return l(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b||0,o.push(i)}return c+=o.length,{$:1,c:r,d:al(n),e:o,f:e,b:c}})}),Na=ld(void 0),vd=l(function(e,r){return l(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b.b||0,o.push(i)}return c+=o.length,{$:2,c:r,d:al(n),e:o,f:e,b:c}})}),v7=vd(void 0);function s7(e,r,n,t){return{$:3,d:al(e),g:r,h:n,i:t}}var d7=l(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function It(e,r){return{$:5,l:e,m:r,k:void 0}}var kF=l(function(e,r){return It([e,r],function(){return e(r)})}),xF=x(function(e,r,n){return It([e,r,n],function(){return a(e,r,n)})}),jF=J(function(e,r,n,t){return It([e,r,n,t],function(){return v(e,r,n,t)})}),wF=Le(function(e,r,n,t,o){return It([e,r,n,t,o],function(){return P(e,r,n,t,o)})}),LF=Mr(function(e,r,n,t,o,c){return It([e,r,n,t,o,c],function(){return V(e,r,n,t,o,c)})}),TF=Mt(function(e,r,n,t,o,c,i){return It([e,r,n,t,o,c,i],function(){return Cr(e,r,n,t,o,c,i)})}),MF=De(function(e,r,n,t,o,c,i,f){return It([e,r,n,t,o,c,i,f],function(){return Gr(e,r,n,t,o,c,i,f)})}),zF=R0(function(e,r,n,t,o,c,i,f,$){return It([e,r,n,t,o,c,i,f,$],function(){return zt(e,r,n,t,o,c,i,f,$)})}),sd=l(function(e,r){return{$:"a0",n:e,o:r}}),b7=l(function(e,r){return{$:"a1",n:e,o:r}}),dd=l(function(e,r){return{$:"a2",n:e,o:r}}),fu=l(function(e,r){return{$:"a3",n:e,o:r}}),m7=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}}),p7=/^script$/i,h7=/^(on|formAction$)/i,g7=/^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i,rl=/^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;function uu(e){return p7.test(e)?"p":e}function bd(e){return h7.test(e)?"data-"+e:e}function y7(e){return e=="innerHTML"||e=="outerHTML"||e=="formAction"?"data-"+e:e}function DF(e){return g7.test(e)?"":e}function md(e){return rl.test(e)?"":e}function _7(e){return typeof e=="string"&&rl.test(e)||Array.isArray(e)&&rl.test(String(e))?"":e}var C7=l(function(e,r){return r.$==="a0"?a(sd,r.n,P7(e,r.o)):r});function P7(e,r){var n=zl(r);return{$:r.$,a:n?v(Nn,n<3?S7:k7,re(e),r.a):a(Ge,e,r.a)}}var S7=l(function(e,r){return h(e(r.a),r.b)}),k7=l(function(e,r){return{V:e(r.V),_:r._,Y:r.Y}});function al(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,o=n.n,c=n.o;if(t==="a2"){o==="className"?pd(r,o,c):r[o]=c;continue}var i=r[t]||(r[t]={});t==="a3"&&o==="class"?pd(i,o,c):i[o]=c}return r}function pd(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Bt(e,r){var n=e.$;if(n===5)return Bt(e.k||(e.k=e.m()),r);if(n===0)return Or.createTextNode(e.a);if(n===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var c={j:o,p:r},i=Bt(t,c);return i.elm_event_node_ref=c,i}if(n===3){var i=e.h(e.g);return nl(i,r,e.d),i}var i=e.f?Or.createElementNS(e.f,e.c):Or.createElement(e.c);iu&&e.c=="a"&&i.addEventListener("click",iu(i)),nl(i,r,e.d);for(var f=e.e,$=0;$<f.length;$++)K0(i,Bt(n===1?f[$]:f[$].b,r));return i}function nl(e,r,n){for(var t in n){var o=n[t];t==="a1"?x7(e,o):t==="a0"?L7(e,r,o):t==="a3"?j7(e,o):t==="a4"?w7(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function x7(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function j7(e,r){for(var n in r){var t=r[n];typeof t<"u"?e.setAttribute(n,t):e.removeAttribute(n)}}function w7(e,r){for(var n in r){var t=r[n],o=t.f,c=t.o;typeof c<"u"?e.setAttributeNS(o,n,c):e.removeAttributeNS(o,n)}}function L7(e,r,n){var t=e.elmFs||(e.elmFs={});for(var o in n){var c=n[o],i=t[o];if(!c){e.removeEventListener(o,i),t[o]=void 0;continue}if(i){var f=i.q;if(f.$===c.$){i.q=c;continue}e.removeEventListener(o,i)}i=T7(r,c),e.addEventListener(o,i,tl&&{passive:zl(c)<2}),t[o]=i}}var tl;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){tl=!0}}))}catch{}function T7(e,r){function n(t){var o=n.q,c=Ea(o.a,t);if(sn(c)){for(var i=zl(o),f=c.a,$=i?i<3?f.a:f.V:f,s=i==1?f.b:i==3&&f._,d=(s&&t.stopPropagation(),(i==2?f.b:i==3&&f.Y)&&t.preventDefault(),e),b,g;b=d.j;){if(typeof b=="function")$=b($);else for(var g=b.length;g--;)$=b[g]($);d=d.p}d($,s)}}return n.q=r,n}function M7(e,r){return e.$==r.$&&nc(e.a,r.a)}function hd(e,r){var n=[];return un(e,r,n,0),n}function ia(e,r,n,t){var o={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(o),o}function un(e,r,n,t){if(e!==r){var o=e.$,c=r.$;if(o!==c)if(o===1&&c===2)r=R7(r),c=1;else{ia(n,0,t,r);return}switch(c){case 5:for(var i=e.l,f=r.l,$=i.length,s=$===f.length;s&&$--;)s=i[$]===f[$];if(s){r.k=e.k;return}r.k=r.m();var d=[];un(e.k,r.k,d,0),d.length>0&&ia(n,1,t,d);return;case 4:for(var b=e.j,g=r.j,p=!1,_=e.k;_.$===4;)p=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;for(var y=r.k;y.$===4;)p=!0,typeof g!="object"?g=[g,y.j]:g.push(y.j),y=y.k;if(p&&b.length!==g.length){ia(n,0,t,r);return}(p?!z7(b,g):b!==g)&&ia(n,2,t,g),un(_,y,n,t+1);return;case 0:e.a!==r.a&&ia(n,3,t,r.a);return;case 1:gd(e,r,n,t,D7);return;case 2:gd(e,r,n,t,A7);return;case 3:if(e.h!==r.h){ia(n,0,t,r);return}var k=ol(e.d,r.d);k&&ia(n,4,t,k);var w=r.i(e.g,r.g);w&&ia(n,5,t,w);return}}}function z7(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function gd(e,r,n,t,o){if(e.c!==r.c||e.f!==r.f){ia(n,0,t,r);return}var c=ol(e.d,r.d);c&&ia(n,4,t,c),o(e,r,n,t)}function ol(e,r,n){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var c=ol(e[o],r[o]||{},o);c&&(t=t||{},t[o]=c);continue}if(!(o in r)){t=t||{},t[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var i=e[o],f=r[o];i===f&&o!=="value"&&o!=="checked"||n==="a0"&&M7(i,f)||(t=t||{},t[o]=f)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function D7(e,r,n,t){var o=e.e,c=r.e,i=o.length,f=c.length;i>f?ia(n,6,t,{v:f,i:i-f}):i<f&&ia(n,7,t,{v:i,e:c});for(var $=i<f?i:f,s=0;s<$;s++){var d=o[s];un(d,c[s],n,++t),t+=d.b||0}}function A7(e,r,n,t){for(var o=[],c={},i=[],f=e.e,$=r.e,s=f.length,d=$.length,b=0,g=0,p=t;b<s&&g<d;){var _=f[b],y=$[g],k=_.a,w=y.a,j=_.b,B=y.b,F=void 0,H=void 0;if(k===w){p++,un(j,B,o,p),p+=j.b||0,b++,g++;continue}var N=f[b+1],O=$[g+1];if(N){var ee=N.a,ue=N.b;H=w===ee}if(O){var ve=O.a,ye=O.b;F=k===ve}if(F&&H){p++,un(j,ye,o,p),mi(c,o,k,B,g,i),p+=j.b||0,p++,pi(c,o,k,ue,p),p+=ue.b||0,b+=2,g+=2;continue}if(F){p++,mi(c,o,w,B,g,i),un(j,ye,o,p),p+=j.b||0,b+=1,g+=2;continue}if(H){p++,pi(c,o,k,j,p),p+=j.b||0,p++,un(ue,B,o,p),p+=ue.b||0,b+=2,g+=1;continue}if(N&&ee===ve){p++,pi(c,o,k,j,p),mi(c,o,w,B,g,i),p+=j.b||0,p++,un(ue,ye,o,p),p+=ue.b||0,b+=2,g+=2;continue}break}for(;b<s;){p++;var _=f[b],j=_.b;pi(c,o,_.a,j,p),p+=j.b||0,b++}for(;g<d;){var ze=ze||[],y=$[g];mi(c,o,y.a,y.b,void 0,ze),g++}(o.length>0||i.length>0||ze)&&ia(n,8,t,{w:o,x:i,y:ze})}var yd="_elmW6BL";function mi(e,r,n,t,o,c){var i=e[n];if(!i){i={c:0,z:t,r:o,s:void 0},c.push({r:o,A:i}),e[n]=i;return}if(i.c===1){c.push({r:o,A:i}),i.c=2;var f=[];un(i.z,t,f,i.r),i.r=o,i.s.s={w:f,A:i};return}mi(e,r,n+yd,t,o,c)}function pi(e,r,n,t,o){var c=e[n];if(!c){var i=ia(r,9,o,void 0);e[n]={c:1,z:t,r:o,s:i};return}if(c.c===0){c.c=2;var f=[];un(t,c.z,f,o),ia(r,9,o,{w:f,A:c});return}pi(e,r,n+yd,t,o)}function _d(e,r,n,t){hi(e,r,n,0,0,r.b,t)}function hi(e,r,n,t,o,c,i){for(var f=n[t],$=f.r;$===o;){var s=f.$;if(s===1)_d(e,r.k,f.s,i);else if(s===8){f.t=e,f.u=i;var d=f.s.w;d.length>0&&hi(e,r,d,0,o,c,i)}else if(s===9){f.t=e,f.u=i;var b=f.s;if(b){b.A.s=e;var d=b.w;d.length>0&&hi(e,r,d,0,o,c,i)}}else f.t=e,f.u=i;if(t++,!(f=n[t])||($=f.r)>c)return t}var g=r.$;if(g===4){for(var p=r.k;p.$===4;)p=p.k;return hi(e,p,n,t,o+1,c,e.elm_event_node_ref)}for(var _=r.e,y=e.childNodes,k=0;k<_.length;k++){o++;var w=g===1?_[k]:_[k].b,j=o+(w.b||0);if(o<=$&&$<=j&&(t=hi(y[k],w,n,t,o,j,i),!(f=n[t])||($=f.r)>c))return t;o=j}return t}function Cd(e,r,n,t){return n.length===0?e:(_d(e,r,n,t),$u(e,n))}function $u(e,r){for(var n=0;n<r.length;n++){var t=r[n],o=t.t,c=I7(o,t);o===e&&(e=c)}return e}function I7(e,r){switch(r.$){case 0:return B7(e,r.s,r.u);case 4:return nl(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return $u(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var c=r.s,t=0;t<c.i;t++)e.removeChild(e.childNodes[c.v]);return e;case 7:for(var c=r.s,n=c.e,t=c.v,o=e.childNodes[t];t<n.length;t++)e.insertBefore(Bt(n[t],r.u),o);return e;case 9:var c=r.s;if(!c)return e.parentNode.removeChild(e),e;var i=c.A;return typeof i.r<"u"&&e.parentNode.removeChild(e),i.s=$u(e,c.w),e;case 8:return V7(e,r);case 5:return r.s(e);default:fn(10)}}function B7(e,r,n){var t=e.parentNode,o=Bt(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function V7(e,r){var n=r.s,t=H7(n.y,r);e=$u(e,n.w);for(var o=n.x,c=0;c<o.length;c++){var i=o[c],f=i.A,$=f.c===2?f.s:Bt(f.z,r.u);e.insertBefore($,e.childNodes[i.r])}return t&&K0(e,t),e}function H7(e,r){if(e){for(var n=Or.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],c=o.A;K0(n,c.c===2?c.s:Bt(c.z,r.u))}return n}}function cl(e){if(e.nodeType===3)return el(e.textContent);if(e.nodeType!==1)return el("");for(var r=C,n=e.attributes,t=n.length;t--;){var o=n[t],c=o.name,i=o.value;r=In(a(fu,c,i),r)}for(var f=e.tagName.toLowerCase(),$=C,s=e.childNodes,t=s.length;t--;)$=In(cl(s[t]),$);return v(Na,f,r,$)}function R7(e){for(var r=e.e,n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var F7,E7=F7||J(function(e,r,n,t){return J0(r,t,e.ro,e.um,e.aA,function(o,c){var i=e.uw,f=t.node,$=cl(f);return Pd(c,function(s){var d=i(s),b=hd($,d);f=Cd(f,$,b,o),$=d})})}),U7,q7=U7||J(function(e,r,n,t){return J0(r,t,e.ro,e.um,e.aA,function(o,c){var i=e.j9&&e.j9(o),f=e.uw,$=Or.title,s=Or.body,d=cl(s);return Pd(c,function(b){iu=i;var g=f(b),p=Na("body")(C)(g.kY),_=hd(d,p);s=Cd(s,d,_,o),d=p,iu=0,$!==g.om&&(Or.title=$=g.om)})})}),N7=typeof cancelAnimationFrame<"u"?cancelAnimationFrame:function(e){clearTimeout(e)},gi=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Pd(e,r){r(e);var n=0;function t(){n=n===1?0:(gi(t),r(e),1)}return function(o,c){e=o,c?(r(e),n===2&&(n=1)):(n===0&&gi(t),n=2)}}function AF(e){var r=e.sC,n=e.sD,t=function(){t.a(r(il()))};return q7({j9:function(o){return t.a=o,Bn.addEventListener("popstate",t),Bn.navigator.userAgent.indexOf("Trident")<0||Bn.addEventListener("hashchange",t),l(function(c,i){if(!i.ctrlKey&&!i.metaKey&&!i.shiftKey&&i.button<1&&!c.target&&!c.hasAttribute("download")){i.preventDefault();var f=c.href,$=il(),s=zb(f).a;o(n(s&&$.nG===s.nG&&$.l$===s.l$&&$.nA.a===s.nA.a?Zy(s):Jy(f)))}})},ro:function(o){return v(e.ro,o,il(),t)},uw:e.uw,um:e.um,aA:e.aA})}function il(){return zb(Or.location.href).a||fn(1)}var IF=l(function(e,r){return a(Ii,so,Yr(function(){r&&history.go(r),e()}))}),BF=l(function(e,r){return a(Ii,so,Yr(function(){history.pushState({},"",r),e()}))}),VF=l(function(e,r){return a(Ii,so,Yr(function(){history.replaceState({},"",r),e()}))}),Sd={addEventListener:function(){},removeEventListener:function(){}},$o=typeof document<"u"?document:Sd,Bn=typeof window<"u"?window:Sd,G7=x(function(e,r,n){return Y0(Yr(function(t){function o(c){G0(n(c))}return e.addEventListener(r,o,tl&&{passive:!0}),function(){e.removeEventListener(r,o)}}))}),Y7=l(function(e,r){var n=Ea(e,r);return sn(n)?D(n.a):M});function HF(){return typeof Or.hidden<"u"?{i3:"hidden",pB:"visibilitychange"}:typeof Or.mozHidden<"u"?{i3:"mozHidden",pB:"mozvisibilitychange"}:typeof Or.msHidden<"u"?{i3:"msHidden",pB:"msvisibilitychange"}:typeof Or.webkitHidden<"u"?{i3:"webkitHidden",pB:"webkitvisibilitychange"}:{i3:"hidden",pB:"visibilitychange"}}function W7(){return Yr(function(e){var r=gi(function(){e(qa(Date.now()))});return function(){N7(r)}})}function O7(){return Yr(function(e){e(qa(Date.now()))})}function lu(e,r){return Yr(function(n){gi(function(){var t=document.getElementById(e);n(t?qa(r(t)):q0(Qy(e)))})})}function J7(e){return Yr(function(r){gi(function(){r(qa(e()))})})}var Z7=l(function(e,r){return lu(r,function(n){return n[e](),uo})});function RF(){return{nV:kd(),oD:{dY:Bn.pageXOffset,fd:Bn.pageYOffset,$8:$o.documentElement.clientWidth,he:$o.documentElement.clientHeight}}}function kd(){var e=$o.body,r=$o.documentElement;return{$8:Math.max(e.scrollWidth,e.offsetWidth,r.scrollWidth,r.offsetWidth,r.clientWidth),he:Math.max(e.scrollHeight,e.offsetHeight,r.scrollHeight,r.offsetHeight,r.clientHeight)}}var FF=l(function(e,r){return J7(function(){return Bn.scroll(e,r),uo})});function EF(e){return lu(e,function(r){return{nV:{$8:r.scrollWidth,he:r.scrollHeight},oD:{dY:r.scrollLeft,fd:r.scrollTop,$8:r.clientWidth,he:r.clientHeight}}})}var Q7=x(function(e,r,n){return lu(e,function(t){return t.scrollLeft=r,t.scrollTop=n,uo})});function UF(e){return lu(e,function(r){var n=r.getBoundingClientRect(),t=Bn.pageXOffset,o=Bn.pageYOffset;return{nV:kd(),oD:{dY:t,fd:o,$8:$o.documentElement.clientWidth,he:$o.documentElement.clientHeight},qu:{dY:t+n.left,fd:o+n.top,$8:n.width,he:n.height}}})}function qF(e){return a(Ii,so,Yr(function(r){Or.location.reload(e)}))}function NF(e){return a(Ii,so,Yr(function(r){try{Bn.location=e}catch{Or.location.reload(!1)}}))}var X7=Mr(function(e,r,n,t,o,c){var i=r!==9728&&r!==9729;return Yr(function(f){var $=new Image;function s(d){var b=d.createTexture();return d.bindTexture(d.TEXTURE_2D,b),d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,$),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,e),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,r),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,n),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,t),i&&d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null),b}$.onload=function(){var d=$.width,b=$.height,g=(d&d-1)===0,p=(b&b-1)===0,_=g&&p||!i&&n===33071&&t===33071;f(_?qa({$:0,pW:s,a:d,b}):q0(a(PS,d,b)))},$.onerror=function(){f(q0(CS))},c.slice(0,5)!=="data:"&&($.crossOrigin="Anonymous"),$.src=c})}),GF=function(e){return h(e.a,e.b)},K7=l(function(e,r){return new Float64Array([e,r])}),YF=function(e){return e[0]},WF=function(e){return e[1]},OF=l(function(e,r){return new Float64Array([e,r[1]])}),JF=l(function(e,r){return new Float64Array([r[0],e])}),ZF=function(e){return{dY:e[0],fd:e[1]}},QF=function(e){return new Float64Array([e.dY,e.fd])},XF=l(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n}),KF=l(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n}),eE=function(e){var r=new Float64Array(2);return r[0]=-e[0],r[1]=-e[1],r},rE=l(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/fl(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function fl(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}var aE=fl,nE=function(e){return e[0]*e[0]+e[1]*e[1]},tE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)}),oE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t}),cE=function(e){var r=new Float64Array(2),n=1/fl(e);return r[0]=e[0]*n,r[1]=e[1]*n,r},iE=l(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n}),fE=l(function(e,r){return e[0]*r[0]+e[1]*r[1]}),ul=new Float64Array(3),xd=new Float64Array(3),jd=new Float64Array(3),eh=x(function(e,r,n){return new Float64Array([e,r,n])}),rh=function(e){return e[0]},ah=function(e){return e[1]},nh=function(e){return e[2]},uE=l(function(e,r){return new Float64Array([e,r[1],r[2]])}),$E=l(function(e,r){return new Float64Array([r[0],e,r[2]])}),lE=l(function(e,r){return new Float64Array([r[0],r[1],e])}),vE=function(e){return{dY:e[0],fd:e[1],kI:e[2]}},th=function(e){return new Float64Array([e.dY,e.fd,e.kI])},sE=l(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function wd(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}var dE=l(wd),bE=function(e){var r=new Float64Array(3);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r};function Ld(e,r,n){return n===void 0&&(n=new Float64Array(3)),yi(wd(e,r,n),n)}var mE=l(Ld);function $l(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}var pE=$l,hE=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},gE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+t*t+o*o)}),yE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return n*n+t*t+o*o});function yi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/$l(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var _E=yi,CE=l(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Vt=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]},PE=l(Vt);function ll(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}var SE=l(ll),kE=l(function(e,r){var n,t=ul,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Vt(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(Vt(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(Vt(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(Vt(r,t)+e[14])/n,o}),oh=J(function(e,r,n,t){return new Float64Array([e,r,n,t])}),ch=function(e){return e[0]},ih=function(e){return e[1]},fh=function(e){return e[2]},uh=function(e){return e[3]},xE=l(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])}),jE=l(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])}),wE=l(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])}),LE=l(function(e,r){return new Float64Array([r[0],r[1],r[2],e])}),$h=function(e){return{dY:e[0],fd:e[1],kI:e[2],uy:e[3]}},lh=function(e){return new Float64Array([e.dY,e.fd,e.kI,e.uy])},TE=l(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n}),ME=l(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n}),zE=function(e){var r=new Float64Array(4);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r},DE=l(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/vl(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function vl(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}var AE=vl,IE=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]},BE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return Math.sqrt(n*n+t*t+o*o+c*c)}),VE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return n*n+t*t+o*o+c*c}),HE=function(e){var r=new Float64Array(4),n=1/vl(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r},vh=l(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n}),RE=l(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}),sh=new Float64Array(16),dh=new Float64Array(16),FE=new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),bh=function(e){var r=new Float64Array(16);return r[0]=e.mD,r[1]=e.mH,r[2]=e.mL,r[3]=e.mP,r[4]=e.mE,r[5]=e.mI,r[6]=e.mM,r[7]=e.mQ,r[8]=e.mF,r[9]=e.mJ,r[10]=e.mN,r[11]=e.mR,r[12]=e.mG,r[13]=e.mK,r[14]=e.mO,r[15]=e.mS,r},mh=function(e){return{mD:e[0],mH:e[1],mL:e[2],mP:e[3],mE:e[4],mI:e[5],mM:e[6],mQ:e[7],mF:e[8],mJ:e[9],mN:e[10],mR:e[11],mG:e[12],mK:e[13],mO:e[14],mS:e[15]}},EE=function(e){var r=new Float64Array(16);r[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],r[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],r[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],r[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],r[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],r[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],r[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],r[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],r[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],r[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],r[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],r[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5];var n=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12];if(n===0)return M;n=1/n;for(var t=0;t<16;t=t+1)r[t]=r[t]*n;return D(r)},UE=function(e){var r=Id(e),n=[e[12],e[13],e[14]];return r[3]=r[7]=r[11]=0,r[12]=-Vt([r[0],r[4],r[8]],n),r[13]=-Vt([r[1],r[5],r[9]],n),r[14]=-Vt([r[2],r[6],r[10]],n),r};function Td(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2*o/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/(t-n),i[6]=0,i[7]=0,i[8]=(r+e)/(r-e),i[9]=(t+n)/(t-n),i[10]=-(c+o)/(c-o),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*c*o/(c-o),i[15]=0,i}var qE=Mr(Td),NE=J(function(e,r,n,t){var o=n*Math.tan(e*Math.PI/360),c=-o,i=c*r,f=o*r;return Td(i,f,c,o,n,t)});function Md(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-n),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2/(c-o),i[11]=0,i[12]=-(r+e)/(r-e),i[13]=-(t+n)/(t-n),i[14]=-(c+o)/(c-o),i[15]=1,i}var GE=Mr(Md),YE=J(function(e,r,n,t){return Md(e,r,n,t,-1,1)});function zd(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[3],f=e[4],$=e[5],s=e[6],d=e[7],b=e[8],g=e[9],p=e[10],_=e[11],y=e[12],k=e[13],w=e[14],j=e[15],B=r[0],F=r[1],H=r[2],N=r[3],O=r[4],ee=r[5],ue=r[6],ve=r[7],ye=r[8],ze=r[9],Ve=r[10],We=r[11],Z=r[12],Ee=r[13],Qe=r[14],Oe=r[15];return n[0]=t*B+f*F+b*H+y*N,n[1]=o*B+$*F+g*H+k*N,n[2]=c*B+s*F+p*H+w*N,n[3]=i*B+d*F+_*H+j*N,n[4]=t*O+f*ee+b*ue+y*ve,n[5]=o*O+$*ee+g*ue+k*ve,n[6]=c*O+s*ee+p*ue+w*ve,n[7]=i*O+d*ee+_*ue+j*ve,n[8]=t*ye+f*ze+b*Ve+y*We,n[9]=o*ye+$*ze+g*Ve+k*We,n[10]=c*ye+s*ze+p*Ve+w*We,n[11]=i*ye+d*ze+_*Ve+j*We,n[12]=t*Z+f*Ee+b*Qe+y*Oe,n[13]=o*Z+$*Ee+g*Qe+k*Oe,n[14]=c*Z+s*Ee+p*Qe+w*Oe,n[15]=i*Z+d*Ee+_*Qe+j*Oe,n}var WE=l(zd),OE=l(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[4],f=e[5],$=e[6],s=e[8],d=e[9],b=e[10],g=e[12],p=e[13],_=e[14],y=r[0],k=r[1],w=r[2],j=r[4],B=r[5],F=r[6],H=r[8],N=r[9],O=r[10],ee=r[12],ue=r[13],ve=r[14];return n[0]=t*y+i*k+s*w,n[1]=o*y+f*k+d*w,n[2]=c*y+$*k+b*w,n[3]=0,n[4]=t*j+i*B+s*F,n[5]=o*j+f*B+d*F,n[6]=c*j+$*B+b*F,n[7]=0,n[8]=t*H+i*N+s*O,n[9]=o*H+f*N+d*O,n[10]=c*H+$*N+b*O,n[11]=0,n[12]=t*ee+i*ue+s*ve+g,n[13]=o*ee+f*ue+d*ve+p,n[14]=c*ee+$*ue+b*ve+_,n[15]=1,n}),JE=l(function(e,r){var n=new Float64Array(16);r=yi(r,ul);var t=r[0],o=r[1],c=r[2],i=Math.cos(e),f=1-i,$=Math.sin(e);return n[0]=t*t*f+i,n[1]=o*t*f+c*$,n[2]=c*t*f-o*$,n[3]=0,n[4]=t*o*f-c*$,n[5]=o*o*f+i,n[6]=o*c*f+t*$,n[7]=0,n[8]=t*c*f+o*$,n[9]=o*c*f-t*$,n[10]=c*c*f+i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}),ZE=x(function(e,r,n){var t=new Float64Array(16),o=1/$l(r),c=r[0]*o,i=r[1]*o,f=r[2]*o,$=Math.cos(e),s=1-$,d=Math.sin(e),b=c*d,g=i*d,p=f*d,_=c*i*s,y=c*f*s,k=i*f*s,w=c*c*s+$,j=_+p,B=y-g,F=_-p,H=i*i*s+$,N=k+b,O=y+g,ee=k-b,ue=f*f*s+$,ve=n[0],ye=n[1],ze=n[2],Ve=n[3],We=n[4],Z=n[5],Ee=n[6],Qe=n[7],Oe=n[8],_r=n[9],qe=n[10],or=n[11],Tr=n[12],Ur=n[13],wa=n[14],Ha=n[15];return t[0]=ve*w+We*j+Oe*B,t[1]=ye*w+Z*j+_r*B,t[2]=ze*w+Ee*j+qe*B,t[3]=Ve*w+Qe*j+or*B,t[4]=ve*F+We*H+Oe*N,t[5]=ye*F+Z*H+_r*N,t[6]=ze*F+Ee*H+qe*N,t[7]=Ve*F+Qe*H+or*N,t[8]=ve*O+We*ee+Oe*ue,t[9]=ye*O+Z*ee+_r*ue,t[10]=ze*O+Ee*ee+qe*ue,t[11]=Ve*O+Qe*ee+or*ue,t[12]=Tr,t[13]=Ur,t[14]=wa,t[15]=Ha,t});function Dd(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}var QE=x(Dd),XE=function(e){return Dd(e[0],e[1],e[2])},KE=J(function(e,r,n,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*n,o[9]=t[9]*n,o[10]=t[10]*n,o[11]=t[11]*n,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o}),eU=l(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=r[11]*c,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Ad(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}var rU=x(Ad),aU=function(e){return Ad(e[0],e[1],e[2])},nU=J(function(e,r,n,t){var o=new Float64Array(16),c=t[0],i=t[1],f=t[2],$=t[3],s=t[4],d=t[5],b=t[6],g=t[7],p=t[8],_=t[9],y=t[10],k=t[11];return o[0]=c,o[1]=i,o[2]=f,o[3]=$,o[4]=s,o[5]=d,o[6]=b,o[7]=g,o[8]=p,o[9]=_,o[10]=y,o[11]=k,o[12]=c*e+s*r+p*n+t[12],o[13]=i*e+d*r+_*n+t[13],o[14]=f*e+b*r+y*n+t[14],o[15]=$*e+g*r+k*n+t[15],o}),tU=l(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=r[0],f=r[1],$=r[2],s=r[3],d=r[4],b=r[5],g=r[6],p=r[7],_=r[8],y=r[9],k=r[10],w=r[11];return n[0]=i,n[1]=f,n[2]=$,n[3]=s,n[4]=d,n[5]=b,n[6]=g,n[7]=p,n[8]=_,n[9]=y,n[10]=k,n[11]=w,n[12]=i*t+d*o+_*c+r[12],n[13]=f*t+b*o+y*c+r[13],n[14]=$*t+g*o+k*c+r[14],n[15]=s*t+p*o+w*c+r[15],n}),oU=x(function(e,r,n){var t=Ld(e,r,ul),o=yi(ll(n,t,xd),xd),c=yi(ll(t,o,jd),jd),i=sh,f=dh;return i[0]=o[0],i[1]=c[0],i[2]=t[0],i[3]=0,i[4]=o[1],i[5]=c[1],i[6]=t[1],i[7]=0,i[8]=o[2],i[9]=c[2],i[10]=t[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=-e[0],f[13]=-e[1],f[14]=-e[2],f[15]=1,zd(i,f)});function Id(e){var r=new Float64Array(16);return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],r}var cU=Id,iU=x(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}),Bd=0;function _i(e,r){for(;r.b;r=r.b)e(r.a)}function sl(e){for(var r=0;e.b;e=e.b)r++;return r}var ph=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},hh=Le(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),gh=l(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),yh=l(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),_h=l(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Ch=l(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Ph=l(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Sh=l(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),kh=l(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),xh=l(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),jh=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},wh=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Lh=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Th=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Vd=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Hd=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Mh=function(e){e.gl.disable(e.gl.CULL_FACE)},zh=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Dh=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Ah=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Rd=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Ih=[wh,Lh,Th,Vd,Hd,Mh,zh,Dh,Ah];function Fd(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Bh(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Ed(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Vh(e,r,n,t){for(var o=n.a.lx,c=[],i=0;i<o;i++)c.push(String.fromCharCode(97+i));function f(p,_,y,k,w){var j;if(o===1)for(j=0;j<_;j++)p[y++]=_===1?k[w]:k[w][j];else c.forEach(function(B){for(j=0;j<_;j++)p[y++]=_===1?k[B][w]:k[B][w][j]})}var $=Ed(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var s=0,d=$.size*$.arraySize*o,b=new $.type(sl(n.b)*d);_i(function(p){f(b,$.size*$.arraySize,s,p,t[r.name]||r.name),s+=d},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,b,e.STATIC_DRAW),g}function Hh(e,r){if(r.a.l4>0){var n=e.createBuffer(),t=Rh(r.c,r.a.l4);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.lx*sl(r.b),indexBuffer:null,buffers:{}}}function Rh(e,r){var n=new Uint32Array(sl(e)*r),t=0,o;return _i(function(c){if(r===1)n[t++]=c;else for(o=0;o<r;o++)n[t++]=c[String.fromCharCode(97+o)]},e),n}function Ud(e,r){return e+"#"+r}var qd=l(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Vd(n),Hd(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(c){if(c.d.b.b){var i,f,$;if(c.b.id&&c.c.id&&(i=Ud(c.b.id,c.c.id),f=n.programs[i]),!f){var s;c.b.id?s=n.shaders[c.b.id]:c.b.id=Bd++,s||(s=Fd(t,c.b.src,t.VERTEX_SHADER),n.shaders[c.b.id]=s);var d;c.c.id?d=n.shaders[c.c.id]:c.c.id=Bd++,d||(d=Fd(t,c.c.src,t.FRAGMENT_SHADER),n.shaders[c.c.id]=d);var b=Bh(t,s,d);f={glProgram:b,attributes:Object.assign({},c.b.attributes,c.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},f.uniformSetters=Fh(t,e,f,Object.assign({},c.b.uniforms,c.c.uniforms));var g=t.getProgramParameter(b,t.ACTIVE_ATTRIBUTES);for($=0;$<g;$++){var p=t.getActiveAttrib(b,$),_=t.getAttribLocation(b,p.name);f.activeAttributes.push(p),f.activeAttributeLocations.push(_)}i=Ud(c.b.id,c.c.id),n.programs[i]=f}n.lastProgId!==i&&(t.useProgram(f.glProgram),n.lastProgId=i),Eh(f.uniformSetters,c.e);var y=n.buffers.get(c.d);for(y||(y=Hh(t,c.d),n.buffers.set(c.d,y)),$=0;$<f.activeAttributes.length;$++){p=f.activeAttributes[$],_=f.activeAttributeLocations[$],y.buffers[p.name]===void 0&&(y.buffers[p.name]=Vh(t,p,c.d,f.attributes)),t.bindBuffer(t.ARRAY_BUFFER,y.buffers[p.name]);var k=Ed(t,p.type);if(k.arraySize===1)t.enableVertexAttribArray(_),t.vertexAttribPointer(_,k.size,k.baseType,!1,0,0);else for(var w=k.size*4,j=w*k.arraySize,B=0;B<k.arraySize;B++)t.enableVertexAttribArray(_+B),t.vertexAttribPointer(_+B,k.size,k.baseType,!1,j,w*B)}for(n.toggle=!n.toggle,_i(UA(n),c.a),$=0;$<Rd.length;$++){var F=n[Rd[$]];F.toggle!==n.toggle&&F.enabled&&(Ih[$](n),F.enabled=!1,F.toggle=n.toggle)}y.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,y.indexBuffer),t.drawElements(c.d.a.m3,y.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(c.d.a.m3,0,y.numIndices)}}return _i(o,e.g),r});function Fh(e,r,n,t){var o=n.glProgram,c=n.currentUniforms,i=0,f=r.f;function $(p,_){var y=_.name,k=e.getUniformLocation(p,y);switch(_.type){case e.INT:return function(j){c[y]!==j&&(e.uniform1i(k,j),c[y]=j)};case e.FLOAT:return function(j){c[y]!==j&&(e.uniform1f(k,j),c[y]=j)};case e.FLOAT_VEC2:return function(j){c[y]!==j&&(e.uniform2f(k,j[0],j[1]),c[y]=j)};case e.FLOAT_VEC3:return function(j){c[y]!==j&&(e.uniform3f(k,j[0],j[1],j[2]),c[y]=j)};case e.FLOAT_VEC4:return function(j){c[y]!==j&&(e.uniform4f(k,j[0],j[1],j[2],j[3]),c[y]=j)};case e.FLOAT_MAT4:return function(j){c[y]!==j&&(e.uniformMatrix4fv(k,!1,new Float32Array(j)),c[y]=j)};case e.SAMPLER_2D:var w=i++;return function(j){e.activeTexture(e.TEXTURE0+w);var B=f.textures.get(j);B||(B=j.pW(e),f.textures.set(j,B)),e.bindTexture(e.TEXTURE_2D,B),c[y]!==j&&(e.uniform1i(k,w),c[y]=j)};case e.BOOL:return function(j){c[y]!==j&&(e.uniform1i(k,j),c[y]=j)};default:return function(){}}}for(var s={},d=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),b=0;b<d;b++){var g=e.getActiveUniform(o,b);s[t[g.name]||g.name]=$(o,g)}return s}function Eh(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Uh=x(function(e,r,n){return s7(r,{g:n,f:{},h:e},Jh,Zh)}),qh=l(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Nh=l(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Gh=l(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Yh=l(function(e,r){e.contextAttributes.antialias=!0}),Wh=l(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Oh=l(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Jh(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};_i(function(o){return a(EA,r,o)},e.h);var n=Or.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),ph(function(){return a(qd,e,n)})):(n=Or.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Zh(e,r){return r.f=e.f,qd(r)}var A=v9,vu=K8,dl=x(function(e,r,n){var t=n.c,o=n.d,c=l(function(i,f){if(i.$){var s=i.a;return v(vu,e,f,s)}else{var $=i.a;return v(vu,c,f,$)}});return v(vu,c,v(vu,e,r,o),t)}),Qh=function(e){return v(dl,A,C,e)},su=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,f=e,$=v(e,t,o,v(su,e,r,i)),s=c;e=f,r=$,n=s;continue e}}),Ga=function(e){return v(su,x(function(r,n,t){return a(A,h(r,n),t)}),C,e)},du=function(e){return v(su,x(function(r,n,t){return a(A,r,t)}),C,e)},Xh=function(e){var r=e;return du(r)},Nd=1,Kh=2,Gd=0,D=function(e){return{$:0,a:e}},M={$:1},La=function(e){return{$:1,a:e}},bl=l(function(e,r){return{$:3,a:e,b:r}}),Yd=l(function(e,r){return{$:0,a:e,b:r}}),Wd=l(function(e,r){return{$:1,a:e,b:r}}),Jr=function(e){return{$:0,a:e}},eg=function(e){return{$:2,a:e}},fU=1,Od=p9,rg=e6,uU=F9,ag=l9,Jd=A6,Xe=Ks,zr=l(function(e,r){return a(Z9,e,tu(r))}),$n=l(function(e,r){return u(a(J9,e,r))}),Zd=function(e){return a(zr,`
    `,a($n,`
`,e))},se=x(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b,c=e,i=a(e,t,r),f=o;e=c,r=i,n=f;continue e}else return r}),Pr=function(e){return v(se,l(function(r,n){return n+1}),0,e)},Qd=s9,$U=i9,lU=h9,ng=x(function(e,r,n){e:for(;;)if(oe(e,r)<1){var t=e,o=r-1,c=a(A,r,n);e=t,r=o,n=c;continue e}else return n}),Vn=l(function(e,r){return v(ng,e,r,C)}),Hn=l(function(e,r){return v(Qd,e,a(Vn,0,Pr(r)-1),r)}),it=f6,Xd=function(e){var r=it(e);return 97<=r&&r<=122},Kd=function(e){var r=it(e);return r<=90&&65<=r},vU=E9,tg=function(e){return Xd(e)||Kd(e)},og=function(e){var r=it(e);return r<=57&&48<=r},cg=function(e){return Xd(e)||Kd(e)||og(e)},He=function(e){return v(se,A,C,e)},Ci=q9,ig=l(function(e,r){return`

(`+(Xe(e+1)+(") "+Zd(fg(r))))}),fg=function(e){return a(ug,e,C)},ug=l(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,i=e.b,t=(function(){var y=Ci(n);if(y.$===1)return!1;var k=y.a,w=k.a,j=k.b;return tg(w)&&a(rg,cg,j)})(),o=t?"."+n:"['"+(n+"']"),$=i,s=a(A,o,r);e=$,r=s;continue e;case 1:var c=e.a,i=e.b,f="["+(Xe(c)+"]"),$=i,s=a(A,f,r);e=$,r=s;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var b=(function(){return r.b?"The Json.Decode.oneOf at json"+a(zr,"",He(r)):"Json.Decode.oneOf"})(),_=b+(" failed in the following "+(Xe(Pr(d))+" ways:"));return a(zr,`

`,a(A,_,a(Hn,ig,d)))}else{var i=d.a,$=i,s=r;e=$,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+(function(){return r.b?" at json"+a(zr,"",He(r)):"!"})();default:var g=e.a,p=e.b,_=(function(){return r.b?"Problem with the value at json"+(a(zr,"",He(r))+`:

    `):`Problem with the given value:

`})();return _+(Zd(a(Jd,4,p))+(`

`+g))}}),Dr=32,Ht=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),lo=N8,ml=A9,sU=y9,bu=l(function(e,r){return Xs(r)/Xs(e)}),dU=z9,ln=ml(a(bu,2,Dr)),pl=P(Ht,0,ln,lo,lo),eb=W8,tc=function(e){return{$:1,a:e}},bU=l(function(e,r){return e(r)}),mU=l(function(e,r){return r(e)}),Ya=t9,Rt=I9,Rn=Y8,pU=f9,je=l(function(e,r){return oe(e,r)>0?e:r}),$g=g9,oc=function(e){return{$:0,a:e}},hl=O8,lg=l(function(e,r){e:for(;;){var n=a(hl,Dr,e),t=n.a,o=n.b,c=a(A,oc(t),r);if(o.b){var i=o,f=c;e=i,r=f;continue e}else return He(c)}}),vn=function(e){var r=e.a;return r},vg=l(function(e,r){e:for(;;){var n=ml(r/Dr);if(n===1)return a(hl,Dr,e).a;var t=a(lg,e,C),o=n;e=t,r=o;continue e}}),gl=l(function(e,r){if(r.W){var n=r.W*Dr,t=Rt(a(bu,Dr,n-1)),o=e?He(r.ap):r.ap,c=a(vg,o,r.W);return P(Ht,Rn(r.af)+n,a(je,5,t*ln),c,r.af)}else return P(Ht,Rn(r.af),ln,lo,r.af)}),hU=_9,gU=c9,sg=Le(function(e,r,n,t,o){e:for(;;){if(r<0)return a(gl,!1,{ap:t,W:n/Dr|0,af:o});var c=tc(v(eb,Dr,r,e)),i=e,f=r-Dr,$=n,s=a(A,c,t),d=o;e=i,r=f,n=$,t=s,o=d;continue e}}),yU=P9,yl=l(function(e,r){if(e<=0)return pl;var n=e%Dr,t=v(eb,n,e-n,r),o=e-n-Dr;return V(sg,r,o,e,C,t)}),_U=0,sn=function(e){return!e.$},T=S6,ae=d6,CU=0,_l=0,PU=5,ne=function(e){return e},SU=ne,mr=x(function(e,r,n){return oe(n,e)<0?e:oe(n,r)>0?r:n}),Wa=l(function(e,r){return I(r,{D:v(mr,0,1,r.D-e)})}),Oa=l(function(e,r){return I(r,{D:v(mr,0,1,r.D+e)})}),dg=l(function(e,r){return{bp:r.bp,ii:a(Oa,.14,r.bp),ij:a(Oa,.07,r.bp),iy:a(Oa,.13,r.tZ),iz:a(Oa,.23,r.tZ),dG:e,tZ:r.tZ,kk:a(Oa,.03,r.tZ),kl:a(Oa,.06,r.tZ),km:a(Oa,.09,r.tZ),kn:a(Wa,.03,r.tZ),ko:a(Wa,.06,r.tZ),kp:a(Wa,.09,r.tZ),kq:{oU:.6,aS:r.tZ.aS,D:.92,a0:.08},kt:a(Wa,.5,r.dQ),t3:r.dQ,kv:a(Wa,.15,r.dQ)}}),bg=l(function(e,r){var n=r.dQ,t=n.D<.12?I(n,{D:.12}):n;return{bp:r.bp,ii:a(Wa,.14,r.bp),ij:a(Wa,.07,r.bp),iy:a(Wa,.13,r.tZ),iz:a(Wa,.23,r.tZ),dG:e,tZ:r.tZ,kk:a(Wa,.03,r.tZ),kl:a(Wa,.06,r.tZ),km:a(Wa,.09,r.tZ),kn:a(Oa,.03,r.tZ),ko:a(Oa,.06,r.tZ),kp:a(Oa,.09,r.tZ),kq:{oU:.88,aS:r.tZ.aS,D:.18,a0:.1},kt:a(Oa,.5,t),t3:t,kv:a(Oa,.15,t)}}),mg=l(function(e,r){return r.ry?a(dg,r,{bp:e,tZ:r.o5,dQ:r.qR}):a(bg,r,{bp:e,tZ:r.o5,dQ:r.qR})}),rb=l(function(e,r){switch(e){case 0:return r.s9;case 1:return r.q3;case 2:return r.uS;case 3:return r.pd;case 4:return r.rM;default:return r.p_}}),Pi=l(function(e,r){return a(mg,a(rb,e,r),r)}),Cl=$9,Ke=l(function(e,r){e:for(;;){if(r.$===-2)return M;var n=r.b,t=r.c,o=r.d,c=r.e,i=a(Cl,e,n);switch(i){case 0:var f=e,$=o;e=f,r=$;continue e;case 1:return D(t);default:var f=e,$=c;e=f,r=$;continue e}}}),U=J(function(e,r,n,t){return{oU:t,aS:e,D:n,a0:r}}),pg={o5:P(U,.5833,.0952,.21,1),pc:P(U,.5833,.0952,.21,1),pd:P(U,.5718,.9231,.39,1),pl:P(U,.5667,.0505,.495,1),pm:P(U,.5673,.6341,.59,1),pn:P(U,.4869,.6,.575,1),po:P(U,.4722,.6,.5,1),pp:P(U,.963,.5294,.575,1),pq:P(U,.0224,1,.665,1),pr:P(U,0,0,1,1),ps:P(U,.1373,1,.575,1),p_:P(U,.4891,.7176,.425,1),qR:P(U,0,0,.96,1),q3:P(U,.4697,1,.33,1),ry:!0,rM:P(U,.7361,.6,.5,1),sc:"Erkal Dark",s9:P(U,.95,1,.5,1),uB:P(U,0,0,.82,1),uS:P(U,.1315,1,.45,1)},hg={o5:P(U,0,0,.96,1),pc:P(U,.5833,.0952,.21,1),pd:P(U,.5673,.8966,.29,1),pl:P(U,.5833,.0476,.42,1),pm:P(U,.5718,.9231,.39,1),pn:P(U,.4891,.7176,.425,1),po:P(U,.4697,1,.33,1),pp:P(U,.963,.6,.375,1),pq:P(U,.0288,.5909,.44,1),pr:P(U,0,0,.82,1),ps:P(U,.1315,1,.45,1),p_:P(U,.4845,.6825,.315,1),qR:P(U,.5833,.0952,.21,1),q3:P(U,.4551,1,.26,1),ry:!1,rM:P(U,.7167,.7143,.35,1),sc:"Erkal Light",s9:P(U,.95,1,.4,1),uB:P(U,0,0,.96,1),uS:P(U,.131,1,.35,1)},gg={o5:P(U,.6784,.5072,.1195,1),pc:P(U,.6784,.5072,.1195,1),pd:P(U,.6963,.7334,.3908,1),pl:P(U,.6596,.1664,.2542,1),pm:P(U,.6963,.8378,.5419,1),pn:P(U,.4985,.746,.7698,1),po:P(U,.2473,.9215,.6656,1),pp:P(U,.8231,.9879,.5331,1),pq:P(U,.9805,.9839,.5313,1),pr:P(U,.1717,.0624,.8829,1),ps:P(U,.1378,.9702,.5499,1),p_:P(U,.4985,.432,.6569,1),qR:P(U,.1708,.1275,.8046,1),q3:P(U,.2473,.6142,.5669,1),ry:!0,rM:P(U,.8231,.8982,.4245,1),sc:"Inferno",s9:P(U,.9804,.8923,.417,1),uB:P(U,.1712,.0491,.7129,1),uS:P(U,.1378,.8074,.4652,1)},yg={o5:P(U,.6758,.4926,.1233,1),pc:P(U,.6758,.4926,.1233,1),pd:P(U,.6963,.7334,.3908,1),pl:P(U,.6576,.1668,.257,1),pm:P(U,.6963,.8378,.5419,1),pn:P(U,.4985,.746,.7698,1),po:P(U,.2989,.7749,.7169,1),pp:P(U,.8231,.9879,.5331,1),pq:P(U,.9805,.9839,.5313,1),pr:P(U,.1241,.0824,.8856,1),ps:P(U,.1226,.912,.646,1),p_:P(U,.4985,.432,.6569,1),qR:P(U,.1238,.1697,.8105,1),q3:P(U,.2989,.48,.6076,1),ry:!0,rM:P(U,.8231,.8982,.4245,1),sc:"Magma",s9:P(U,.9804,.8923,.417,1),uB:P(U,.1239,.0643,.7167,1),uS:P(U,.1227,.6106,.5447,1)},vo={oU:1,aS:0,D:0,a0:0},Ja=G9,Za=Q9,Qa=l(function(e,r){return e<1?r:v(Za,e,Ja(r),r)}),mu=o9,pu=U9,cc=function(e){return a(pu,e,"")},_g=function(e){switch(e){case"0":return D(0);case"1":return D(1);case"2":return D(2);case"3":return D(3);case"4":return D(4);case"5":return D(5);case"6":return D(6);case"7":return D(7);case"8":return D(8);case"9":return D(9);case"a":return D(10);case"b":return D(11);case"c":return D(12);case"d":return D(13);case"e":return D(14);case"f":return D(15);default:return M}},Cg=O9,Si=function(e){return v(Cg,A,C,e)},ab=K9,Pl=function(e){return v(se,l(function(r,n){if(n.$===1){var t=n.a;return La(t)}else{var o=n.a,c=_g(r);if(c.$)return La("Invalid hex digit: "+cc(r));var i=c.a;return Jr(o*16+i)}}),Jr(0),Si(ab(e)))},Ne=l(function(e,r){return oe(e,r)<0?e:r}),Pg=x(function(e,r,n){var t=a(Ne,e,a(Ne,r,n)),o=a(je,e,a(je,r,n)),c=(o+t)/2,i=o-t;if(i<1e-10)return{oU:1,aS:0,D:c,a0:0};var f=c>.5?i/(2-o-t):i/(o+t),$=(function(){if(o-e<1e-10){var d=oe(r,n)<0?6:0;return(r-n)/i+d}else return o-r<1e-10?(n-e)/i+2:(e-r)/i+4})(),s=$/6;return{oU:1,aS:s,D:c,a0:f}}),Fn=a6,nb=function(e){var r=a(Fn,"#",e)?a(Qa,1,e):e;if(Ja(r)!==6)return La("Expected 6-character hex string, got: "+e);var n=v(Za,0,2,r),t=v(Za,2,4,r),o=v(Za,4,6,r),c=R(Pl(n),Pl(t),Pl(o));if(!c.a.$&&!c.b.$&&!c.c.$){var i=c.a.a,f=c.b.a,$=c.c.a;return Jr(v(Pg,i/255,f/255,$/255))}else return La("Invalid hex color: "+e)},tb=l(function(e,r){if(r.$)return e;var n=r.a;return n}),m=l(function(e,r){var n=function(o){return a(tb,vo,nb(v(Za,o*6,(o+1)*6,r)))},t=n(17);return{o5:t,pc:n(0),pd:n(4),pl:n(8),pm:n(12),pn:n(14),po:n(10),pp:n(13),pq:n(9),pr:n(15),ps:n(11),p_:n(6),qR:n(16),q3:n(2),ry:t.D<.5,rM:n(5),sc:e,s9:n(1),uB:n(7),uS:n(3)}}),Sg={o5:P(U,.6338,.2131,.4193,1),pc:P(U,.6338,.2131,.4193,1),pd:P(U,.6711,.9819,.3556,1),pl:P(U,.6313,.1141,.4988,1),pm:P(U,.6733,.9724,.4995,1),pn:P(U,.5206,.9279,.6164,1),po:P(U,.408,.9525,.6016,1),pp:P(U,.8129,.6577,.6082,1),pq:P(U,.0348,.7434,.583,1),pr:P(U,.1588,.059,.8705,1),ps:P(U,.1378,.9702,.5499,1),p_:P(U,.5206,.6303,.518,1),qR:P(U,.1581,.1657,.844,1),q3:P(U,.408,.663,.5087,1),ry:!0,rM:P(U,.8129,.4325,.4851,1),sc:"Parula",s9:P(U,.0348,.5435,.4645,1),uB:P(U,.1584,.0494,.7011,1),uS:P(U,.1378,.8074,.4652,1)},kg={o5:P(U,.6497,.2697,.2788,1),pc:P(U,.6497,.2697,.2788,1),pd:P(U,.6963,.7334,.3908,1),pl:P(U,.6441,.1308,.3827,1),pm:P(U,.6963,.8378,.5419,1),pn:P(U,.4985,.746,.7698,1),po:P(U,.2594,.8806,.6797,1),pp:P(U,.8231,.9879,.5331,1),pq:P(U,.9805,.9839,.5313,1),pr:P(U,.1553,.0578,.8652,1),ps:P(U,.1378,.9702,.5499,1),p_:P(U,.4985,.432,.6569,1),qR:P(U,.1544,.1443,.7845,1),q3:P(U,.2594,.5758,.578,1),ry:!0,rM:P(U,.8231,.8982,.4245,1),sc:"Plasma",s9:P(U,.9804,.8923,.417,1),uB:P(U,.1549,.0495,.696,1),uS:P(U,.1378,.8074,.4652,1)},xg={o5:P(U,.7616,.2492,.257,1),pc:P(U,.7616,.2492,.257,1),pd:P(U,.6711,.9819,.3556,1),pl:P(U,.7582,.1116,.3649,1),pm:P(U,.6733,.9724,.4995,1),pn:P(U,.5003,1,.4968,1),po:P(U,.367,.9956,.5641,1),pp:P(U,.7883,.876,.5781,1),pq:P(U,.0151,.5947,.5814,1),pr:P(U,.1828,.0453,.8406,1),ps:P(U,.1749,.9924,.6211,1),p_:P(U,.5003,1,.4251,1),qR:P(U,.1818,.1003,.7645,1),q3:P(U,.3705,.8413,.4617,1),ry:!0,rM:P(U,.7886,.6673,.4517,1),sc:"Viridis",s9:P(U,.015,.4413,.4578,1),uB:P(U,.1823,.0425,.6725,1),uS:P(U,.1749,.7036,.5343,1)},ob=u([a(m,"Argonaut","232323ff000f8ce10bffb900008df86d43a600d8ebffffff444444ff2740abe15bffd2420092ff9a5feb67fff0fffffffffaf40e1019"),a(m,"0x96f","262427ff666db3e03affc73900cde8a392e89deaf6fcfcfa545452ff7e83bee55effd05e1bd5ebb0a3ebacedf8fcfcfafcfcfa262427"),a(m,"12-bit Rainbow","000000a0305040d080e090403060b06030900090c0dbded8685656c0606090d050e0d00000b0c080107020b0c0fffffffeffff040404"),a(m,"3024 Day","090300db2d2001a252caba0001a0e4a16a948fbecea5a2a25c5855dbaec33a34324a4543807d7cbcbbbacdab53f7f7f74a4543f7f7f7"),a(m,"3024 Night","090300db2d2001a252fded0201a0e4a16a94b5e4f4a5a2a25c5855e8bbd047413f4a4543807d7cd6d5d4cdab53f7f7f7a5a2a2090300"),a(m,"Aardvark Blue","191919aa342e4b8c0fdbba001370d3c43ac3008eb0bebebe525252f05b5095dc55ffe76360a4ece26be260b6cbf7f7f7dddddd102040"),a(m,"Abernathy","000000cd000000cd00cdcd001093f5cd00cd00cdcdfaebd7404040ff000000ff00ffff0011b5f6ff00ff00ffffffffffeeeeec111416"),a(m,"Adventure","040404d84a335da602eebb6e417ab3e5c499bdcfe5dbded8685656d76b4299b52cffb67097d7efaa7900bdcfe5e4d5c7feffff040404"),a(m,"Adventure Time","050404bd00134ab118e7741e0f4ac666599370a598f8dcc04e7cbffc5f5a9eff6eefc11a1997c69b5953c8faf4f6f5fbf8dcc01f1d45"),a(m,"Adwaita","241f31c01c282ec27ee8b5041e78e49841bb0ab9dcc0bfbc5e5c64ed333b4ad67cd2be3651a1ffc061cb4fd2fdf6f5f4000000ffffff"),a(m,"Adwaita Dark","241f31c01c282ec27ef5c2111e78e49841bb0ab9dcc0bfbc5e5c64ed333b57e389f8e45c51a1ffc061cb4fd2fdf6f5f4ffffff1d1d20"),a(m,"Afterglow","151515ac41427e8e50e5b5676c99bb9f4e857dd6cfd0d0d0505050ac41427e8e50e5b5676c99bb9f4e857dd6cff5f5f5d0d0d0212121"),a(m,"Aizen Dark","1a1a1af08898a4e09cf5dea484b4f8c8a2f490dcd0d0d6f0444444f08898a4e09cf5dea484b4f8c8a2f490dcd0ffffffd0d6f01a1a1a"),a(m,"Aizen Light","f0f2f6d00c363e9e28dd8c1a1c64f28636ec1590964a4d66adb2bcd00c363e9e28dd8c1a1c64f28636ec1590964a4d664a4d66f0f2f6"),a(m,"Alabaster","000000aa3731448c27cb9000325cc07a3e9d0083b2b7b7b7777777f0505060cb00f2af50007acce64ce600aacbf7f7f7000000f7f7f7"),a(m,"Alien Blood","1126167f2b272f7e25717f242f6a7f47587f327f77647d753c4812e0800918e000bde00000aae00058e000e0c473fa91637d750f1610"),a(m,"Andromeda","000000cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5666666cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5e5e5e5262a33"),a(m,"Apple Classic","000000c91b0000c200c7c4001c3fe1ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffd5a2002c2b2b"),a(m,"Apple System Colors","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74bffd60a0a84ffbf5af276d6ffffffffffffff1e1e1e"),a(m,"Apple System Colors Light","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74be5bc000a84ffbf5af269c9f2ffffff000000feffff"),a(m,"Arcoiris","333333da270012c258ffc656518bfce37bd963fad5bab2b2777777ffb9b9e3f6aaffddaab3e8f3cbbaf9bcffc7efefefeee4d9201f1e"),a(m,"Ardoise","2c2c2cd3322d588b35fca93a2465c27332b464e1b8f7f7f7535353fa58528dc252ffea516ab5f8be68ca89ffdbfefefeeaeaea1e1e1e"),a(m,"Arthur","3d352acd5c5c86af80e8ae5b6495eddeb887b0c4debbaa99554444cc553388aa22ffa75d87ceeb996600b0c4deddccbbddeedd1c1c1c"),a(m,"Atelier Sulphurpool","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b294f587c5e6687898ea4dfe2f19c637af5f7ff979db4202746"),a(m,"Atom","000000fd5ff187c38affd7b185befdb9b6fc85befde0e0e04c4c4cfd5ff194fa36f5ffa896cbfeb9b6fc85befde0e0e0c5c8c6161719"),a(m,"Atom One Dark","21252be06c7598c379e5c07b61afefc678dd56b6c2abb2bf767676e06c7598c379e5c07b61afefc678dd56b6c2abb2bfabb2bf21252b"),a(m,"Atom One Light","000000de3e353f953ad2b67c2f5af39500953f953abbbbbb000000de3e353f953ad2b67c2f5af3a000953f953affffff2a2c33f9f9f9"),a(m,"Aura","110f18ff676761ffcaffca85a277ffa277ff61ffcaedecee4d4d4dffca85a277ffffca85a277ffa277ff61ffcaedeceeedecee15141b"),a(m,"Aurora","23262ef0266f8fd46dffe66d102ee4ee5d4303d6b8c74ded4f545ef926728fd46dffe66d03d6b8ee5d4303d6b8c74dedffca2823262e"),a(m,"Ayu","11151cea6c737fd962f9af4f53bdfacda1fa90e1c6c7c7c7686868f07178aad94cffb45459c2ffd2a6ff95e6cbffffffbfbdb60b0e14"),a(m,"Ayu Light","000000ea6c6d6cbf43eca9443199e19e75c746ba94bababa686868f0717186b300f2ae49399ee6a37acc4cbf99d1d1d15c6166f8f9fa"),a(m,"Ayu Mirage","171b24ed827487d96cfacc6e6dcbfadabafa90e1c6c7c7c7686868f28779d5ff80ffd17373d0ffdfbfff95e6cbffffffcccac21f2430"),a(m,"Banana Blueberry","17141fff6b7f00bd9ce6c62f22e8dfdc396a56b6c2f1f1f1495162fe9ea198c379f9e46b91fff4da70d6bcf3ffffffffcccccc191323"),a(m,"Batman","1b1d1ee6dc44c8be46f4fd2273717474727162605fc6c5bf505354fff78efff27dfeed6c9194959a9a9da3a3a6dadbd66f6f6f1b1d1e"),a(m,"Belafonte Day","20111bbe100e858162d08b30426a7997522c989a9c968c835e5252be100e858162d08b30426a7997522c989a9cd5ccba45373cd5ccba"),a(m,"Belafonte Night","20111bbe100e858162eaa549426a7997522c989a9c968c835e5252be100e858162eaa549426a7997522c989a9cd5ccba968c8320111b"),a(m,"Birds Of Paradise","573d26be2d266ba18ae99d2a5a86adac80a674a6ade0dbb79b6c4ae8462795d8bad0d150b8d3edd19ecb93cfd7fff9d5e0dbb72a1f1d"),a(m,"Black Metal","000000486e6fdd9999a06666888888999999aaaaaac1c1c1404040486e6fdd9999a06666888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Bathory)","0000005f8787fbcb97e78a53888888999999aaaaaac1c1c14040405f8787fbcb97e78a53888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Burzum)","0000005f8787ddeecc99bbaa888888999999aaaaaac1c1c14040405f8787ddeecc99bbaa888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Dark Funeral)","0000005f8787d0dfee5f81a5888888999999aaaaaac1c1c14040405f8787d0dfee5f81a5888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Gorgoroth)","0000005f87879b8d7f8c7f70888888999999aaaaaac1c1c14040405f87879b8d7f8c7f70888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Immortal)","0000005f87877799bb556677888888999999aaaaaac1c1c14040405f87877799bb556677888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Khold)","0000005f8787eceee3974b46888888999999aaaaaac1c1c14040405f8787eceee3974b46888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Marduk)","0000005f8787a5aaa7626b67888888999999aaaaaac1c1c14040405f8787a5aaa7626b67888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Mayhem)","0000005f8787f3ecd4eecc6c888888999999aaaaaac1c1c14040405f8787f3ecd4eecc6c888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Nile)","0000005f8787aa9988777755888888999999aaaaaac1c1c14040405f8787aa9988777755888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Venom)","0000005f8787f8f7f279241f888888999999aaaaaac1c1c14040405f8787f8f7f279241f888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Blazer","000000b87a7a7ab87ab8b87a7a7ab8b87ab87ab8b8d9d9d94c4c4cdbbdbdbddbbddbdbbdbdbddbdbbddbbddbdbffffffd9e6f20d1926"),a(m,"Blue Berry Pie","0a4c6299246e5cb1b3eab9a890a5bd9d54a77e83ccf0e8d6463c5dc872720a6c7e7a31885f3d63bc94b75e60710a6c7ebabab91c0c28"),a(m,"Blue Dolphin","292d3eff8288b4e88df4d69f82aaffe9c1ff89ebffd0d0d09094a4ff8b92ddffa7ffe5859cc4ffddb0f6a3f7ffffffffc5f2ff006984"),a(m,"Blue Matrix","101116ff568000ff9cfffc5800b0ffd57bff76c1ffc7c7c7686868ff6e675ffa68fffc676871ffd682ec60fdffffffff00a2ff101116"),a(m,"Bluloco Dark","41444dfc2f5225a45cff936a3476ff7a82da4483aacdd4e08f9aaeff64803fc56bf9c85910b1feff78f85fb9bcffffffb9c0cb282c34"),a(m,"Bluloco Light","373a41d5275323974adf631c275fe4823ff127618dbabbc2676a77ff64803cbc66c5a3320099e1ce33c06d93bbd3d3d3373a41f9f9f9"),a(m,"Borland","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffffff4e0000a4"),a(m,"Box","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffff9fef00141d2b"),a(m,"Breadog","362c24b10b000072328b4c00005cb49b0097006a78baa99d514337de1100008f40ae60000074e1c300bd008697eae1da362c24f1ebe6"),a(m,"Breeze","31363bed151511d116f674001d99f39b59b61abc9ceff0f17f8c8dc0392b1cdc9afdbc4b3daee98e44ad16a085fcfcfceff0f131363b"),a(m,"Bright Lights","191919ff355bb7e876ffc25176d4ffba76e76cbfb5c2c8d74c4c4cff355bb7e876ffc25176d5ffba76e76cbfb5c2c8d7b3c9d7191919"),a(m,"Broadcast","000000da4939519f50ffd24a6d9cbed0d0ff6e9cbeffffff585858ff7b6b83d182ffff7c9fcef0ffffffa0cef0ffffffe6e1dc2b2b2b"),a(m,"Brogrammer","1f1f1ff811182dc55eecba0f2a84d24e5ab71081d6d6dbe5d6dbe5de352e1dd361f3bd091081d65350b90f7ddbffffffd6dbe5131313"),a(m,"Builtin Dark","000000bb000000bb00bbbb000d0dc8bb00bb00bbbbbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Builtin Light","000000bb000000bb00bbbb000000bbbb00bb00bbbbbbbbbb555555ff55552fd92fbfbf155555ffff55ff22ccccffffff000000ffffff"),a(m,"Builtin Pastel Dark","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffbbbbbb000000"),a(m,"Builtin Tango Dark","000000cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeecffffff000000"),a(m,"Builtin Tango Light","000000cc00004e9a06c4a0003465a475507b06989ab9bdb5555753ef29297dd527d6c329729fcfad7fa827d5d5eeeeec000000ffffff"),a(m,"C64","090300a2524c55a049bfce726657b3984ca367b6bdffffff000000a2524c55a049bfce726657b3984ca367b6bdf7f7f77869c440318d"),a(m,"CGA","000000aa000000aa00aa55000d0db7aa00aa00aaaaaaaaaa555555ff555555ff55ffff555555ffff55ff55ffffffffffaaaaaa000000"),a(m,"CLRS","000000f8282a328a5dfa701d135cd09f00bd33c3c1b3b3b3555753fb04162cc631e3bd0e1670ffe900b03ad5ceeeeeec262626ffffff"),a(m,"Calamity","2f2833fc644da5f69ce9d7a53b79c7f9267274d3ded5ced97e6c88fc644da5f69ce9d7a53b79c7f9267274d3deffffffd5ced92f2833"),a(m,"Carbonfox","282828ee539625be6a08bdba78a9ffbe95ff33b1ffdfdfe0484848f16da646c8802dc7c48cb6ffc8a5ff52bdffe4e4e5f2f4f8161616"),a(m,"Catppuccin Frappe","51576de78284a6d189e5c8908caaeef4b8e481c8bea5adce626880e671728ec772d9ba737b9ef0f2a4db5abfb5b5bfe2c6d0f5303446"),a(m,"Catppuccin Latte","5c5f77d20f3940a02bdf8e1d1e66f5ea76cb179299acb0be6c6f85de293e49af3deea02d456efffe85d82d9fa8bcc0cc4c4f69eff1f5"),a(m,"Catppuccin Macchiato","494d64ed8796a6da95eed49f8aadf4f5bde68bd5caa5adcb5b6078ec74868ccf7fe1c68278a1f6f2a9dd63cbc0b8c0e0cad3f524273a"),a(m,"Catppuccin Mocha","45475af38ba8a6e3a1f9e2af89b4faf5c2e794e2d5a6adc8585b70f3779989d88bebd39174a8fcf2aede6bd7cabac2decdd6f41e1e2e"),a(m,"Chalk","7d8b8fb23a52789b6ab9ac4a2a7facbd4f5a44a799d2d8d9888888f2484080c470ffeb624196fffc527553cdbdd2d8d9d2d8d92b2d2e"),a(m,"Chalkboard","000000c3737272c373c2c3727372c3c372c272c2c3d9d9d9585858dbaaaaaadbaadadbaaaaaadbdbaadaaadadbffffffd9e6f229262f"),a(m,"Challenger Deep","141228ff545862d196ffb37865b2ff906cff63f2f1a6b3cc565575ff808095ffa4ffe9aa91ddffc991e1aaffe4cbe3e7cbe1e71e1c31"),a(m,"Chester","080200fa5e5b16c98dffc83f288ad6d3459028dddee7e7e76f6b68fa5e5b16c98dfeef6d278ad6d3459027dedeffffffffffff2c3643"),a(m,"Ciapre","1818188e0d1648513bcc8b3f576d8c724d7c5c4f4baea47f555555ac3835a6a75ddcdf7c3097c6d33061f3dbb2f4f4f4aea47a191c27"),a(m,"Citruszest","404040ff545400cc7affd40000bfffff90fe48d1ccbfbfbf808080ff1a751affa3ffff0033cfffffb2fe00fff2f9f9f9bfbfbf121212"),a(m,"Cobalt Neon","142631ff23203ba5ffe9e75c8ff586781aa08ff586ba46b2fff688d4312e8ff586e9f06d3c7dd28230a76cbc678ff5868ff586142838"),a(m,"Cobalt Next","000000ff527b8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea162c35"),a(m,"Cobalt Next Dark","262f37f949678cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(m,"Cobalt Next Minimal","323d47ff657a8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(m,"Cobalt2","000000ff000038de21ffe50a1460d2ff005d00bbbbbbbbbb555555f40e173bd01dedc8095555ffff55ff6ae3faffffffffffff132738"),a(m,"Coffee Theme","000000c91b0000c200adaa000225c7ca30c700b8baa1a1a1686868ff6e671fba28b2af1b6871fff26af220bdbfffffff000000f5deb3"),a(m,"Crayon Pony Fish","2b1b1d91002b579524ab311b8c87b0692f50e8a86668525a4a383bc5255d8dff57c8381dcfc9fffc6cbaffceafb0949d68525a150707"),a(m,"Cursor Dark","2a2a2abf616aa3be8cebcb8b81a1c1b48ead88c0d0d8dee9505050bf616aa3be8cebcb8b81a1c1b48ead88c0d0ffffffffffff141414"),a(m,"Cutie Pro","000000f56e7fbec975f5866942d9c5d286b737cb8ad5c3c388847fe5a1a3e8d6a7f1bb7980c5deb294bb9dccbbffffffd5d0c9181818"),a(m,"Cyberdyne","080808ff837300c172d2a7000071cfff90fe6bffddf1f1f1484848ffc4bed6fcbafffed5c2e3ffffb2fee6e7feffffff00ff92151144"),a(m,"Cyberpunk","000000ff709200fbacfffa6a00bfffdf95ff86cbfeffffff595959ff8aa421f6bcfff7871bccfde6aefe99d6fcffffffe5e5e5332a57"),a(m,"Cyberpunk Scarlet Protocol","101116ff005101dc84faf9450271b6c930c700c5c7c7c7c7686868ff6e6760fa68fffc676871ffbd35ec60fdffffffffe41951101116"),a(m,"Dark Modern","272727f749492ea0439e6a030078d4d012731db4d6cccccc5d5d5ddc545223d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1f1f1f"),a(m,"Dark Pastel","000000ff555555ff55ffff555555ffff55ff55ffffbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffffffff000000"),a(m,"Dark+","000000cd31310dbc79e5e5102472c8bc3fbc11a8cde5e5e5666666f14c4c23d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1e1e1e"),a(m,"Darkermatrix","0910131a48316fa64c59590000cb6b4e375a1254591a48334040400d452a90d762e2e50000ff874e375a176c7300381e35451a070c0e"),a(m,"Darkmatrix","0910130065366fa64c7e80002c9a84523a60114d5300653640404000733d90d762e2e50046d8b8573d6612545a0065363e5715070c0e"),a(m,"Darkside","000000e8341c68c256f2d42c1c98e88e69c91c98e8bababa4c4c4ce05a4f77b869efd64b387cd3957bbe3d97e2babababababa222324"),a(m,"Dawnfox","575279b4637a618774ea9d34286983907aa956949fb2b6bd5f5695c26d85629f81eea8462d81a39a80b95ca7b4e6ebf3575279faf4ed"),a(m,"Dayfox","352c24a5222f396847ac54022848a96e33ce287980bfb6ae534c45b3434e577f63b86e284863b68452d5488d93f4ece63d2b5af6f2ee"),a(m,"Deep","000000d700051cd915d9bd265665ffb052da50d2dae0e0e0535353fb000722ff18fedc2b9fa9ffe09aff8df9ffffffffcdcdcd090909"),a(m,"Desert","4d4d4dff2b2b98fb98f0e68ccd853fffdeadffa0a0f5deb3626262ff555555ff55ffff5587ceffff55ffffd700ffffffffffff333333"),a(m,"Detuned","171717fe4386a6e32de6da730094d99b37ff50b7d9c7c7c7686868fa80acbde371fff27f00beffbe9eff5ed7ffffffffc7c7c7000000"),a(m,"Dimidium","000000cf494c60b442db9c110575d8af5ed21db6bbbab7b6817e7eff643b37e57bfccd1a688dfded6fe932e0fbdee3e4bab7b6141414"),a(m,"Dimmed Monokai","3a3d43be3f48879a3bc5a6354f76a1855c8d578fa4b9bcba888987fb001f0f722fc47033186de3fb00672e706dfdffb9b9bcba1f1f1f"),a(m,"Django","000000fd620941a83effe862315d3ff8f8f89df39fffffff585858ff943b73da70ffff94568264ffffffcfffd1fffffff8f8f80b2f20"),a(m,"Django Reborn Again","000000fd620941a83effe862245032f8f8f89df39fffffff4c4c4cff943b73da70ffff94568264ffffffcfffd1ffffffdadedc051f14"),a(m,"Django Smooth","000000fd620941a83effe862989898f8f8f89df39fe8e8e7727272ff943b73da70ffff94cacacaffffffcfffd1fffffff8f8f8245032"),a(m,"Doom One","000000ff6c6b98be65ecbe7ba9a1e1c678dd51afefbbc2cf595959ff665599bb66ecbe7ba9a1e1c678dd51afefbfbfbfbbc2cf282c34"),a(m,"Doom Peacock","1c1f24cb4b1626a6a6bcd42a2a6cc6a9a1e15699afede0ce51504dff5d3898be65e6f97251afefc678dd46d9ffdfdfdfede0ce2b2a27"),a(m,"Dot Gov","191919bf091d3d9751f6bb3417b2e07830b08bd2edffffff595959bf091d3d9751f6bb3417b2e07830b08bd2edffffffebebeb262c35"),a(m,"Dracula","21222cff555550fa7bf1fa8cbd93f9ff79c68be9fdf8f8f26272a4ff6e6e69ff94ffffa5d6acffff92dfa4fffffffffff8f8f2282a36"),a(m,"Dracula+","21222cff555550fa7bffcb6b82aaffc792ea8be9fdf8f8f2545454ff6e6e69ff94ffcb6bd6acffff92dfa4fffff8f8f2f8f8f2212121"),a(m,"Duckbones","0e101ae036005dcd97e3950000a3cb795ccc00a3cbebefc0444860ff482158db9ef6a10000b4e0b3a1e600b4e0b3b692ebefc00e101a"),a(m,"Duotone Dark","1f1d27d9393e2dcd73d9b76effc284de8d402488ffb7a1ff4e4a60d9393e2dcd73d9b76effc284de8d402488ffeae5ffb7a1ff1f1d27"),a(m,"Duskfox","393552eb6f92a3be8cf6c177569fbac4a7e79ccfd8e0def4544d8af083a2b1d196f9cb8c65b1cdccb1eda6dae3e2e0f7e0def4232136"),a(m,"ENCOM","0000009f0000008b00ffd0000081ffbc00ca008b8bbbbbbb555555ff000000ee00ffff000000ffff00ff00cdcdffffff00a595000000"),a(m,"Earthsong","121418c9423485c54cf5ae2e1398b9d0633d509552e5c6aa675f54ff645a98e036e0d5615fdaffff926984f088f6f7ece5c7a9292520"),a(m,"Electron Highlighter","15161fff6c8d00ffc3ffd7a977abffdaa4f400fdff778faf4a6789ff6c8d00ffc3ffd7a977abffdaa4f400fdffc3cee2a5b6d423283d"),a(m,"Elegant","0a1222ff025785cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ff005785cc95ffcb8b8dabe1c792eb3facefffffffced2d6292b31"),a(m,"Elemental","3c3c3098290f479a437f7111497f7d7f4e2f387f58807974555445e0502a61e070d6992779d9d9cd7c5459d599fff1e9807a7422211d"),a(m,"Elementary","242424d71c155aa513fdb40c134899e400382595e1efefef4b4b4bfc1c186bc219fec80e0955fffb00503ea8fc8c00ecefefef181818"),a(m,"Embark","1e1c31f0719ba1efd3ffe9aa57c7ffc792ea87dfebf8f8f2585273f02e6e2ce592ffb3781da0e2a742ea63f2f1a6b3cceeffff1e1c31"),a(m,"Embers Dark","16130f826d5757826d6d82576d578282576d576d82a39a905a504782825746403950483f8a8075beb6ae825757dbd6d1a39a9016130f"),a(m,"Espresso","353535d25252a5c261ffc66d6c99bbd197d9bed6ffeeeeec606060f00c0cc2e075e1e48b8ab7d9efb5f7dcf4ffffffffffffff323232"),a(m,"Espresso Libre","000000cc00001a921cf0e53a0066ffc5656b06989ad3d7cf555753ef29299aff87fffb5c43a8edff818a34e2e2eeeeecb8a8982a211c"),a(m,"Everblush","232a2de574748ccf7ee5c76b67b0e8c47fd56cbfbfb3b9b8464e50ef7e7e96d988f4d67a71baf2ce89df67cbe7bdc3c2dadada141b1e"),a(m,"Everforest Dark Hard","7a8478e67e80a7c080dbbc7f7fbbb3d699b683c092f2efdfa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbefd3c6aa1e2326"),a(m,"Everforest Light Med","7a8478e67e809ab373c1a2667fbbb3d699b683c092b2af9fa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbef5c6a72efebd4"),a(m,"Fahrenheit","1d1d1dcda0749e744dfecf757f0e0f734c4d979797ffffce404040fecea0cc734dfd9f4dcb4a054e739ffed04dffffffffffce000000"),a(m,"Fairyfloss","040303f92672c2ffdfe6c000c2ffdfffb8d1c5a3fff8f8f06090cbff857fc2ffdfffea00c2ffdfffb8d1c5a3fff8f8f0f8f8f25a5475"),a(m,"Farmhouse Dark","1d2027ba0004549d00c873000049e69f1b611fb65ce8e4e1464d54eb00097ac100ea9a00006efebf3b7f19e062f4eef0e8e4e11d2027"),a(m,"Farmhouse Light","1d20278d00033a7d00a95600092ccd820046229256a8a4a1394047eb00097ac100ea9a00006efebf3b7f00c649f4eef01d2027e8e4e1"),a(m,"Fideloper","292f33cb1e2dedb8acb7ab9b2e78c2c0236f309186eae3ce496068d4605ad4605aa866717c85c45c5db2819090fcf4dfdbdae0292f33"),a(m,"Firefly Traditional","000000c2372033bc26afad245a63ffd53ad233bbc7cccccc828282ff3b1e2ee720ecec16838dffff5cfe29f0f0ebebebf5f5f5000000"),a(m,"Firefox Dev","002831e638535eb83ca57706359ddfd75cff4b73a2dcdcdc26444de1003f1d9000cd9409006fc0a200da005794e2e2e27c8fa40e1011"),a(m,"Firewatch","585f6dd953605ab977dfb5634d89c4d5511944a8b6e6e5ff585f6dd953605ab977dfb5634c89c5d5511944a8b6e6e5ff9ba2b21e2027"),a(m,"Fish Tank","03073cc6004aacf157fecd5e525fb8986f82968763ecf0fc6c5b30da4b8adbffa9fee6a9b2befafda5cda5bd86f6ffececf0fe232537"),a(m,"Flat","222d3fa8232032a548e58d113167ac781aa02c9370b0b6ba475262d4312e2d9440e5be0c3c7dd28230a735b387e7eced2cc55d002240"),a(m,"Flatland","1d1d19f183399fd364f4ef6d5096be695abcd63865ffffff50504cd22a24a7d42cff894961b9d0695abcd63865ffffffb8dbef1d1f21"),a(m,"Flexoki Dark","100f0fd14d41879a39d0a2154385bece5d973aa99f878580575653af302966800bad8301205ea6a02f6f24837bcecdc3cecdc3100f0f"),a(m,"Flexoki Light","100f0faf302966800bad8301205ea6a02f6f24837b6f6e69b7b5acd14d41879a39d0a2154385bece5d973aa99fcecdc3100f0ffffcf0"),a(m,"Floraverse","08002e7e1a465d731acd751c1d6da1b7077e42a38cf3e0b84c3866d02063b4ce59fac35740a4cff12aae62caa8fff5dbdbd1b90e0d15"),a(m,"Forest Blue","333333f8818e92d3a21a8e638ed0ce5e468c31658ce2d8cd4a4a4afb3d666bb48d30c85a39a7a27e62b36096bfe2d8cde2d8cd051519"),a(m,"Framer","141414ff555598ec65ffcc3300aaffaa88ff88ddffcccccc414141ff8888b6f292ffd96633bbffcebbffbbecffffffff777777111111"),a(m,"Front End Delight","242526f8511b565747fa771d2c70b7f02e4f3ca1a6adadad5fac6df7431974ec4cfdc3253393cae75e4f4fbce68c735badadad1b1c1d"),a(m,"Fun Forrest","000000d6262b919c00be8a134699a38d4331da8213ddc2657f6a55e55a1cbfc65affcb1b7cc9cfd26349e6a96bffeaa3dec165251200"),a(m,"Galaxy","000000f9555f21b089fef02a589df6944d951f9ee7bbbbbb555555fa8c8f35bb9affff55589df6e756993979bcffffffffffff1d2837"),a(m,"Galizur","223344aa112233aa11ccaa222255cc7755aa22bbdd8899aa556677ff113333ff11ffdd333377ffaa77ff33ddffbbccddddeeff071317"),a(m,"Ghostty Default Style Dark","1d1f21cc6566b6bd68f0c67482a2beb294bb8abeb7c4c8c6666666d54e53b9ca4be7c5477aa6dac397d870c0b1eaeaeaffffff282c34"),a(m,"GitHub","3e3e3e970b1607962ac5bb94003e8ae946917cc4dfb2b2b2666666de00007ac895d7b6002e6cbaf2959200c7cbffffff3e3e3ef4f4f4"),a(m,"GitHub Dark","000000f7816656d364e3b3416ca4f8db61a22b7489ffffff4d4d4df7816656d364e3b3416ca4f8db61a22b7489ffffff8b949e101216"),a(m,"GitHub Dark Colorblind","484f58ec8e2c58a6ffd2992258a6ffbc8cff39c5cfb1bac46e7681fdac5479c0ffe3b34179c0ffd2a8ff56d4ddffffffc9d1d90d1117"),a(m,"GitHub Dark Default","484f58ff7b723fb950d2992258a6ffbc8cff39c5cfb1bac46e7681ffa19856d364e3b34179c0ffd2a8ff56d4ddffffffe6edf30d1117"),a(m,"GitHub Dark Dimmed","545d68f4706757ab5ac69026539bf5b083f039c5cf909dab636e7bff938a6bc46ddaaa3f6cb6ffdcbdfb56d4ddcdd9e5adbac722272e"),a(m,"GitHub Dark High Contrast","7a828eff949226cd4df0b72f71b7ffcb9eff39c5cfd9dee39ea7b3ffb1af4ae168f7c84391cbffdbb7ff56d4ddfffffff0f3f60a0c10"),a(m,"GitHub Light Colorblind","24292fb359000550ae4d2d000969da8250df1b7c836e778157606a8a46000969da633c01218bffa475f93192aa8c959f24292fffffff"),a(m,"GitHub Light Default","24292fcf222e1163294d2d000969da8250df1b7c836e778157606aa40e261a7f37633c01218bffa475f93192aa8c959f1f2328ffffff"),a(m,"GitHub Light High Contrast","0e1116a0111f024c1a3f22000349b4622cbc1b7c8366707b4b535d86061d055d204e2c001168e3844ae73192aa88929d0e1116ffffff"),a(m,"GitLab Dark","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff28262b"),a(m,"GitLab Dark Grey","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff222222"),a(m,"GitLab Light","303030a317000a7f3daf551d006cd8583cac00798a303030303030a317000a7f3daf551d006cd8583cac00798a303030303030fafaff"),a(m,"Glacier","2e343cbd0f2f35a770fb94351f5872bd2523778397ffffff404a55bd0f2f49e998fddf6e2a8bc1ea4727a0b6d3ffffffffffff0c1115"),a(m,"Grape","2d283fed22611fa91b8ddc20487df48d35c93bdeed9e9ea059516af0729a53aa5eb2dc87a9bcecad81c29de3eba288f79f9fa1171423"),a(m,"Grass","000000ff595900bb00e7b0000000a3ee59bb00bbbbbbbbbb959595ff595900bb00e7b0000000bbff55ff55fffffffffffff0a513773d"),a(m,"Grey Green","000000fe141474ff00f1ff0100deffff00f000ffbcffffff666666ff393900ff44ffd10000afffff008a00ffd3f5ececffffff002a1a"),a(m,"Gruber Darker","181818ff0a3642dc00ffdb0092a7cba095cb90aa9ee4e4e454494eff385142dc00ffdb0092a7cbafafda90aa9ef5f5f5e4e4e4181818"),a(m,"Gruvbox Dark","282828cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb2282828"),a(m,"Gruvbox Dark Hard","1d2021cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb21d2021"),a(m,"Gruvbox Light","fbf1c7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836fbf1c7"),a(m,"Gruvbox Light Hard","f9f5d7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836f9f5d7"),a(m,"Gruvbox Material","141617ea6926c1d041eecf756da3ecfd9bc1fe9d6effffff4c4c4cd3573bc1d041eecf752c86fffd9bc192a5dfffffffd4be981d2021"),a(m,"Gruvbox Material Dark","282828ea6962a9b665d8a6577daea3d3869b89b482d4be987c6f64ea6962a9b665d8a6577daea3d3869b89b482ddc7a1d4be98282828"),a(m,"Gruvbox Material Light","fbf1c7c14a4a6c782eb4710945707a945e804c7a5d654735a89984c14a4a6c782eb4710945707a945e804c7a5d4f3829654735fbf1c7"),a(m,"Guezwhoz","333333e851817ad694b7d0745aa0d69a90e058d6ced9d9d9808080e85181afd7afd1ed8564b2eda398ed61ede4edededd9d9d91d1d1d"),a(m,"HaX0R Blue","01092110b6ff10b6ff10b6ff10b6ff10b6ff10b6fffafafa48415700b3f700b3f700b3f700b3f700b3f700b3f7fefefe11b7ff010515"),a(m,"HaX0R Gr33N","001f0b15d00d15d00d15d00d15d00d15d00d15d00dfafafa33484319e20e19e20e19e20e19e20e19e20e19e20efefefe16b10e020f01"),a(m,"HaX0R R3D","1f0000b00d0db00d0db00d0db00d0db00d0db00d0dfafafa554040ff1111ff1010ff1010ff1010ff1010ff1010fefefeb10e0e200101"),a(m,"Hacktober","191918b34538587744d08949206ec5864651ac9166f1eee7464444b3332342824ac75a225389c5e795a5ebc587ffffffc9c9c9141414"),a(m,"Hardcore","1b1d1ef92672a6e22efd971f66d9ef9e6ffe5e7175ccccc6505354ff669dbeed5fe6db7466d9ef9e6ffea3babff8f8f2a0a0a0121212"),a(m,"Harper","010101f8b63f7fb5e1d6da25489e48b296c6f5bfd7a8a49d726e6af8b63f7fb5e1d6da25489e48b296c6f5bfd7fefbeaa8a49d010101"),a(m,"Havn Daggry","1f2842985248577159be6b003a577d7c5c97925780b0b5c51f2842cc4a35719679f1a5276089c07d7396aa869dd6dbeb3b4a7af8f9fb"),a(m,"Havn Skumring","252c47ea563e6ead7bf8b330596cf77c719ed588c1dce0ee38425cd172648c9e8feac58c5186cb9b7ceed17ab6fff6e1d6dbeb111522"),a(m,"Heeler","000000e44c2ebdd100f4ce655ba5f2ff95c2ff9763ffffff4c4c4ce44c2ebdd100f4ce650088ffff95c28da6e4fffffffdfdfd211f46"),a(m,"Highway","000000d00e18138034ffcb3e006bb3783482455271ededed5d504af07e18b1d130fff1204fc2fdde00715d504affffffededed222225"),a(m,"Hipster Green","000000b6214a00a600bfbf00246eb2b200b200a6b2bfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e584c138100b05"),a(m,"Hivacruz","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b2973ad435e6687898ea4dfe2f19c637af5f7ffede4e4132638"),a(m,"Homebrew","00000099000000a6009999000d0dbfb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e500ff00000000"),a(m,"Hopscotch","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379fd8b195c545c5c545b989498d5d3d5b33508ffffffb9b5b8322931"),a(m,"Hopscotch.256","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379dd464c8fc13efdcc591290bfc85e7c149b93ffffffb9b5b8322931"),a(m,"Horizon","000000e9567829d398fab79526bbd9ee64ac59e1e3e5e5e5666666ec6a883fdaa4fbc3a73fc4def075b56be4e6e5e5e5d5d8da1c1e26"),a(m,"Horizon Bright","16161dfc477700ca86f2a68200beddff58b100cdcbbfafac1a1c24fe5f8700d193e5a68800c9e2ff6cba00c3c2fff2ef16161dfdf0ed"),a(m,"Hot Dog Stand","000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6ffffffea3323"),a(m,"Hot Dog Stand (Mustard)","000000ea3323ea3323ea3323000000ea3323000000b9b9b9000000ea3323ea3323ea3323000000ea3323000000c6c6c6000000ffff54"),a(m,"Hurtado","575757ff1b00a5e055fbe74a496487fd5ff186e9fecbcccb404040d51d00a5df55fbe84a89beffc001c186eafedbdbdbdbdbdb000000"),a(m,"Hybrid","2a2e33b84d51b3bf5ae4b55e6e90b0a17eac7fbfb4b5b9b64345488d2e32798431e58a504b6b886e50794d7b745a626ab7bcba161719"),a(m,"IBM 5153 CGA","141414d033331bd01bd08c1b1b1bd0d01bd01bd0d0cecece4e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffcecece141414"),a(m,"IBM 5153 CGA (Black)","000000c4000000c400c47e000000c4c400c400c4c4c4c4c44e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffc4c4c4000000"),a(m,"IC Green PPL","014401ff273641a63876a8312ec3b950a0963ca078e6fef2106910b4fa5caefb86dafa872efaeb50fafa3cfac8e0f1dce0f1dc2c2c2c"),a(m,"IC Orange PPL","000000c13900a4a900caaf00bd6d00fc5e00f79500ffc88a6a4f2aff8c68f6ff40ffe36effbe55fc874fc69752fafaffffcb83262626"),a(m,"IR Black","4f4f4ffa6c60a8ff60fffeb796cafefa73fdc6c5feefedef7b7b7bfcb6b0cfffabffffccb5dcfffb9cfee0e0fefffffff1f1f1000000"),a(m,"IRIX Console","1a1919d4242637a327c29d280739e2911f9c4497dfcccccc767676f34f5945c731f9f2a74079ffc31ba26ed7d7f2f2f2f2f2f20c0c0c"),a(m,"IRIX Terminal","1a1919ff2b1e57ff3dffff440004ffff2cff56ffffffffffffff44ffff44ffff44fffc72ffff44ffff44ffff44ffff44f2f2f2000043"),a(m,"Iceberg Dark","1e2132e27878b4be82e2a47884a0c6a093c789b8c2c6c8d16b7089e98989c0ca8ee9b18991acd1ada0d395c4ced2d4dec6c8d1161821"),a(m,"Iceberg Light","dcdfe7cc517a668e3dc573392d539e7759b43f83a633374c8389a3cc3768598030b6662d22478e6845ad327698262a3f33374ce8e9ec"),a(m,"Idea","adadadfc525698b61cccb444437ee79d74b02488874b4b4bfffffffc707298b61cffff0b6c9cedfc7eff248887181818adadad202020"),a(m,"Idle Toes","323232d252527fe173ffc66d4099fff680ffbed6ffeeeeec606060f070709dff91ffe48b5eb7f7ff9dffdcf4ffffffffffffff323232"),a(m,"Jackie Brown","2c1d16ef57342baf2bbebf00246eb2d05ec100aceebfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e5ffcc2f2c1d16"),a(m,"Japanesque","343935cf3f617bb75be9b32a4c9ad4a57fc4389aadfafaf6595b59d18fa6767f2c78592f13597960429176bbcab2b5aef7f6ec1e1e1e"),a(m,"Jellybeans","929292e2737394b979ffba7b97bedce1c0fa00988edededebdbdbdffa1a1bddeabffdca0b1d8f6fbdaff1ab2a8ffffffdedede121212"),a(m,"JetBrains Darcula","000000fa5355126e00c2c3004581ebfa54ff33c2c1adadad555555fb717267ff4fffff006d9df1fb82ff60d3d1eeeeeeadadad202020"),a(m,"Jubi","3b3750cf7b9890a94b6ebfc0576ea6bc4f6875a7d2c3d3dea874cede90abbcdd6187e9ea8c9fcde16c87b7c9efd5e5f1c3d3de262b33"),a(m,"Kanagawa Dragon","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a6a69ce4687687a987e6c3847fb4ca938aa97aa89fc5c9c5c5c9c5181616"),a(m,"Kanagawa Lotus","1f1f28c840536f894e77713f4d699bb35b79597b755454648a8980d7474b6e915f836f4a6693bf624c835e857a43436c545464f2ecbc"),a(m,"Kanagawa Wave","090618c3404376946ac0a36e7e9cd8957fb86a9589c8c093727169e8242498bb6ce6c3847fb4ca938aa97aa89fdcd7badcd7ba1f1f28"),a(m,"Kanagawabones","1f1f28e46a7898bc6de5c2837eb3c9957fb87eb3c9ddd8bb49495eec818c9ec967f1c9827bc2dfa98fd27bc2dfa8a48dddd8bb1f1f28"),a(m,"Kanso Ink","14171dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c714171d"),a(m,"Kanso Mist","22262dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2a4a7a45c6066e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c722262d"),a(m,"Kanso Pearl","22262dc840536f894e77713f4d699bb35b79597b755454646d6f6ed7474b6e915f836f4a6693bf624c835e857a43436c22262df2f1ef"),a(m,"Kanso Zen","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c7090e13"),a(m,"Kibble","4d4d4dc7003129cf13d8e30e3449d18400ff0798abe2d1e35a5a5af015786ce05cf3f79e97a4f7c495f068f2e0fffffff7f7f70e100a"),a(m,"Kitty Default","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffdddddd000000"),a(m,"Kitty Low Contrast","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffffffff333333"),a(m,"Kolorit","1d1a1eff5b8247d7a1e8e5625db4eeda6cda57e9ebededed504d51ff5b8247d7a1e8e5625db4eeda6cda57e9ebedededefecec1d1a1e"),a(m,"Konsolas","000000aa171718b218ebae1f2323a5ad1edc42b0c8c8c1c17b716eff41415fff5fffff554b4bffff54ff69ffffffffffc8c1c1060606"),a(m,"Kurokula","333333c35a5278b3a9e1b9175c91dd8b79a6867268e0cfc2515151ffc34cafffa5fff70090dbffad93ffffcdb6ffffffe0cfc2141515"),a(m,"Lab Fox","2e2e2efc6d263eb383fca121db3b216b40a86e49cbffffff535353ff651753eaa8fca013db501f6a36b67d53e7ffffffffffff2e2e2e"),a(m,"Laser","626262ff8373b4fb7309b4bdfed300ff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5f92883ffb2fee6e7fefffffff106e3030d18"),a(m,"Later This Evening","2b2b2bd45a60afba67e5d289a0bad6c092d691bfb7494a4a525454d3232faabb39e5be396699d6ab53d65fc0aec1c2c2959595222222"),a(m,"Lavandula","2300467d1625337e6f7f6f494f4a7f5a3f7f58777f736e7d443a53e0516752e0c4e0c3868e87e0a776e09ad4e08c91fa736e7d050014"),a(m,"Light Owl","403f53de3d3b08916ae0af02288ed7d6438a2aa298bdbdbd989fb1de3d3b08916adaaa01288ed7d6438a2aa298f0f0f0403f53fbfbfb"),a(m,"Liquid Carbon","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc595959ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2303030"),a(m,"Liquid Carbon Transparent","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc404040ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2000000"),a(m,"Lovelace","282a36f37f975adecdf2a2728897f4c574dd79e6f3fdfdfd4e5165ff497118e3c8ff8037556fffb043d13fdceebebec1fdfdfd1d1f28"),a(m,"Man Page","000000cc000000a6009999000000b2b200b200a6b2b2b2b2666666e5000000cc00bfbf000000ffe500e500cbcbe5e5e5000000fef49c"),a(m,"Mariana","000000ec5f6699c794f9ae586699ccc695c65fb4b4f7f7f7666666f97b58acd1a8fac76185add6d8b6d882c4c4ffffffd8dee9343d46"),a(m,"Material","212121b7141f457b24f6981e134eb25600880e717cafafaf424242e83b3f7aba3abfaa0054a4f3aa4dbc26bbd1d9d9d9232322eaeaea"),a(m,"Material Dark","212121b7141f457b24f6981e134eb2701aa20e717cefefef4f4f4fe83b3f7aba3affea2e54a4f3aa4dbc26bbd1d9d9d9e5e5e5232322"),a(m,"Material Darker","000000ff5370c3e88dffcb6b82aaffc792ea89ddffffffff545454ff5370c3e88dffcb6b82aaffc792ea89ddffffffffeeffff212121"),a(m,"Material Design Colors","435b67fc38415cf19efed03237b6fffc226e59ffd1ffffffa1b0b8fc746dadf7befee16c70cffffc669b9affe6ffffffe7ebed1d262a"),a(m,"Material Ocean","546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff8f93a20f111a"),a(m,"Mathias","000000e52222a6e32dfc951ec48dfffa257367d9f0f2f2f2555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Matrix","0f191c23755a82d967ffd7003f524240993150b45a5073506880602fc07990d762faff004f7e7e11ff25c1ff8a678c614266440f191c"),a(m,"Matte Black","333333d35f5fffc107b91c1ce68e0dd35f5fbebebebebebe8a8a8d891c1cffc107b90a0af59e0bb91c1ceaeaeaffffffbebebe121212"),a(m,"Medallion","000000b64c007c8b16d3bd26616bb08c5a90916c25cac29a5e5219ff9149b2ca3bffe54aacb8ffffa0ffffbc51fed698cac2961d1908"),a(m,"Melange Dark","34302cbd818378997ae49b5d7f91b2b380b07b9695c1a78e867462d4776685b695ebc06da3a9cecf9bc289b3b6ece1d7ece1d7292522"),a(m,"Melange Light","e9e1dbc77b8b6e9b72bc5c007892bdbe79bb7397977d6658a98a78bf00213a684aa06d00465aa49041803d656854433a54433af1f1f1"),a(m,"Mellifluous","1a1a1ad29393b3b393cbaa89a8a1beb39fb0c0af8cdadada5b5b5bc95954828040a6794c5a65999c699574a39effffffdadada1a1a1a"),a(m,"Mellow","27272af5a19190b99fe6b99daca1cfe29ecaea83a5c1c0d4424246ffae9f9dc6acf0c5a9b9aedaecaad6f591b2cac9ddc9c7cd161617"),a(m,"Miasma","0000006857425f875fb36d4378824bbb7744c9a554d7c4836666666857425f875fb36d4378824bbb7744c9a554d7c483c2c2b0222222"),a(m,"Midnight In Mojave","1e1e1eff453a32d74bffd60a0a84ffbf5af25ac8faffffff515151ff453a32d74bffd60a0a84ffbf5af25ac8faffffffffffff1e1e1e"),a(m,"Mirage","011627ff999985cc95ffd7007fb5ffddb3ff21c7a8ffffff575656ff999985cc95ffd7007fb5ffddb3ff85cc95ffffffa6b2c01b2738"),a(m,"Misterioso","000000ff424274af68ffad29338f869414e623d7d7e1e1e0626262ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e02d3743"),a(m,"Molokai","121212fa257398e123dfd4601080d08700ff43a8d0bbbbbb555555f6669db1e05ffff26d00afffaf87ff51ceffffffffbbbbbb121212"),a(m,"Mona Lisa","351b0e9b291c636232c36e28515c5d9b1d29588056f7d75c874228ff4331b4b264ff95669eb2b4ff5b6a8acd8fffe598f7d66a120b0d"),a(m,"Monokai Classic","272822f92672a6e22ee6db74fd971fae81ff66d9effdfff16e7066f92672a6e22ee6db74fd971fae81ff66d9effdfff1fdfff1272822"),a(m,"Monokai Pro","2d2a2eff6188a9dc76ffd866fc9867ab9df278dce8fcfcfa727072ff6188a9dc76ffd866fc9867ab9df278dce8fcfcfafcfcfa2d2a2e"),a(m,"Monokai Pro Light","faf4f2e14775269d69cc7a0ae160327058be1c8ca829242aa59fa0e14775269d69cc7a0ae160327058be1c8ca829242a29242afaf4f2"),a(m,"Monokai Pro Light Sun","f8efe7ce4770218871b16803d4572b6851a22473b62c232ea59c9cce4770218871b16803d4572b6851a22473b62c232e2c232ef8efe7"),a(m,"Monokai Pro Machine","273136ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffc6b7678ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffcf2fffc273136"),a(m,"Monokai Pro Octagon","282a3aff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1696d77ff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1eaf2f1282a3a"),a(m,"Monokai Pro Ristretto","2c2525fd6883adda78f9cc6cf38d70a8a9eb85daccfff1f372696afd6883adda78f9cc6cf38d70a8a9eb85daccfff1f3fff1f32c2525"),a(m,"Monokai Pro Spectrum","222222fc618d7bd88ffce566fd9353948ae35ad4e6f7f1ff69676cfc618d7bd88ffce566fd9353948ae35ad4e6f7f1fff7f1ff222222"),a(m,"Monokai Remastered","1a1a1af4005f98e024fd971f9d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efd9d9d90c0c0c"),a(m,"Monokai Soda","1a1a1af4005f98e024fa84199d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efc4c5b51a1a1a"),a(m,"Monokai Vivid","121212fa293498e123fff30a0443fff800f801b6edffffff838383f6669db1e05ffff26d0443fff200f651cefffffffff9f9f9121212"),a(m,"Moonfly","323437ff54548cc85fe3c78a80a0ffcf87e879dac8c6c6c6949494ff518936c692c6c68474b2ffae81ff85dc85e4e4e4bdbdbd080808"),a(m,"N0Tch2K","383838a95551666666a98051657d3e767676c9c9c9d0b8a3545454a977758c8c8ca9917598bd5ea3a3a3dcdcdcd8c8bba0a0a0222222"),a(m,"Neobones Dark","0f191fde6e7c90ff6bb77e648190d4b279a766a5adc6d5cf334652e8838fa0ff85d68c6792a0e2cf86c165b8c198a39ec6d5cf0f191f"),a(m,"Neobones Light","e5ede6a8334c567a3094492728648688507d3b8992202e1899ac9c94253e3f5a22803d1c1d55737b3b702b747c415934202e18e5ede6"),a(m,"Neon","000000ff30455ffa74fffc7e0f15d8f924e700fffcc7c7c7686868ff5a5a75ff88fffd963c40cbf15be588fffeffffff00fffc14161a"),a(m,"Neopolitan","0000009a1a1a61ce3cfbde2d324883ff00808da6cef8f8f84c4c4c9a1a1a61ce3cfbde2d324883ff00808da6cef8f8f8ffffff271f19"),a(m,"Neutron","23252bb540365ab977deb5666a7c93a4799d3f94a8e6e8ef494b51b540365ab977deb5666a7c93a4799d3f94a8ebedf2e6e8ef1c1e22"),a(m,"Night Lion V1","4c4c4cbb00005fde8ff3f167276bd8bb00bb00dadfbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Night Lion V2","4c4c4cbb000004f623f3f16764d0f0ce6fdb00dadfbbbbbb555555ff55557df71dffff5562cbe8ff9bf500ccd8ffffffbbbbbb171717"),a(m,"Night Owl","011627ef535022da6eaddb6782aaffc792ea21c7a8ffffff575656ef535022da6effeb9582aaffc792ea7fdbcaffffffd6deeb011627"),a(m,"Night Owlish Light","011627d3423e2aa298daaa014876d6403f5308916a7a81817a8181f76e6e49d0c5dac26b5ca7e469709800c990989fb1403f53ffffff"),a(m,"Nightfox","393b44c94f6d81b29adbc074719cd69d79d663cdcfdfdfe0575860d169838ebaa4e0c98986abdcbaa1e27ad5d6e4e4e5cdcecf192330"),a(m,"Niji","333333d23e0854ca74fff7002ab9ffff50da1ef9f5ddd0c4515151ffb7b7c1ffaefcffb88efff3ffa2edbcffc7ffffffffffff141515"),a(m,"No Clown Fiesta","151515b4695890a959f4bf75bad7ffaa759f88afa2e1e1e17272727e97ab90a959f4bf75bad7ffaa759f88afa2afafafe0e1e4101010"),a(m,"No Clown Fiesta Light","d6d6d6874e42677940b890588ba1bfaa759f3e5f661515152b2b2b637786677940b8905893a2abaa759f99ab93373737151515e1e1e1"),a(m,"Nocturnal Winter","4d4d4df12d5209cd7ef5f17a3182e0ff2b6d09c87afcfcfc808080f16d860ae78dfffc676096ffff78a20ae78dffffffe6e5e50d0d17"),a(m,"Nord","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f0596377bf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee92e3440"),a(m,"Nord Light","3b4252bf616a96b17fc5a56581a1c1b48ead7bb3c3a5abb64c566abf616a96b17fc5a56581a1c1b48ead82afaeeceff4414858e5e9f0"),a(m,"Nord Wave","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f04c566abf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee9212121"),a(m,"Nordfox","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f053648dd06f79b1d196f0d3998cafd2c895bf93ccdce7ecf4cdcecf2e3440"),a(m,"Novel","000000cc0000009600d06b000000cccc00cc0087cca6a6a6808080cc0000009600d06b000000cccc00cc0087ccffffff3b2322dfdbc3"),a(m,"Nvim Dark","07080dffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f84f5258ffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f8e0e2ea14161b"),a(m,"Nvim Light","07080d5900080055236b5300004c73470045007373a1a4ab4f52585900080055236b5300004c73470045007373eef1f814161be0e2ea"),a(m,"Obsidian","000000b30d0e00bb00fecd223a9bdbbb00bb00bbbbbbbbbb555555ff000393c863fef874a1d7ffff55ff55ffffffffffcdcdcd283033"),a(m,"Ocean","000000e64c4c00a6009999000000b2d826d800a6b2bfbfbf808080ff1a1a00d900e5e5007373ffe500e500e5e5e5e5e5ffffff224fbc"),a(m,"Oceanic Material","000000ee2b2a40a33fffea2e1e80f08800a016afcaa4a4a4777777dc5c6070be71fff16354a4f3aa4dbc42c7daffffffc2c8d71c262b"),a(m,"Oceanic Next","162c35ec5f6799c794fac8636699ccc594c55fb3b3ffffff65737eec5f6799c794fac8636699ccc594c55fb3b3ffffffc0c5ce162c35"),a(m,"Ollie","000000ac2e3131ac61ac43002d57acb085281fa6ac8a8eac684432ff3d483bff99ff5e1e4488ffffc21d1ffaff5b6ea78a8dae222125"),a(m,"One Dark Two","1d1f23e2788198c379eac78671b9f4c88bda62bac6c9ccd34a505ae68991a8cc8eedcf978dc7f6d3a2e278c4cee6e6e6e6e6e621252b"),a(m,"One Double Dark","3d4452f163728cc570ecbe703fb1f5d373e317b9c4dbdfe5525d6fff777b82d882f5c0656dcaffff7bf400e5fbf7f9fcdbdfe5282c34"),a(m,"One Double Light","454b58f7484025a343cc81000087c1b50da9009ab7c5b2b30e131fff371100b90eec99001065dee500d800b4ddffffff383a43fafafa"),a(m,"One Half Dark","282c34e06c7598c379e5c07b61afefc678dd56b6c2dcdfe45d677ae06c7598c379e5c07b61afefc678dd56b6c2dcdfe4dcdfe4282c34"),a(m,"One Half Light","383a42e4564950a14fc184010184bca626a40997b3bababa4f525ee06c7598c379d8b36e61afefc678dd56b6c2ffffff383a42fafafa"),a(m,"Onenord","3b4252e06c759ec183ebcb8b81a1c1b988b088c0d0e5e9f0596377e06c759ec183ebcb8b81a1c1b988b08fbcbbeceff4e5e9f02e3440"),a(m,"Onenord Light","2e3440cb4f5348a53dee5e253879c59f4aca3ea1adb2b6bd646a76d163665f9e9dba793e1b40a69665af8fbcbbeceff42e3440f7f8fa"),a(m,"Operator Mono Dark","5a5a5aca372d4d7b3ad4d6974387cfb86cb472d5c6ced4cd9a9b99c37d6283d0a2fdfdc589d3f6ff2c7a82eadafdfdf6c3cac2191919"),a(m,"Overnight Slumber","0a1222ffa7c485cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ffa7c485cc95ffcb8b8dabe1c792ebffa7c4ffffffced2d60e1729"),a(m,"Oxocarbon","16161600dfdb00b4ffff429700c15ac693ffff74b8f2f4f858585800dfdb00b4ffff429700c15ac693ffff74b8f2f4f8f2f4f8161616"),a(m,"Pale Night Hc","000000f07178c3e88dffcb6b82aaffc792ea89ddffffffff737373f6a9aedbf1baffdfa6b4ccffddbdf2b8eaff999999cccccc3e4251"),a(m,"Pandora","000000ff424274af68ffad29338f869414e623d7d7e2e2e23f5648ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e1141e43"),a(m,"Paraiso Dark","2f1e2eef615548b685fec41806b6ef815ba45bc4bfa39e9b776e71ef615548b685fec41806b6ef815ba45bc4bfe7e9dba39e9b2f1e2e"),a(m,"Paul Millr","2a2a2aff000079ff0fe7bf00396bd7b449be66ccffbbbbbb666666ff008066ff66f3d64e709aeddb67e67adff2fffffff2f2f2000000"),a(m,"Pencil Dark","212121c3077110a778a89c14008ec45f498620a5bad9d9d94f4f4ffb007a5fd7aff3e43020bbfc6855de4fb8ccf1f1f1f1f1f1212121"),a(m,"Pencil Light","212121c3077110a778a89c14008ec4523c7920a5bab3b3b3424242fb007a52caa2c0b10020bbfc6855de4fb8ccf1f1f1424242f1f1f1"),a(m,"Peppermint","353535e7466989d287dab853449fd0da62dc65aaafb4b4b4535353e4859ba3cca2e1e4876fbce2e586e796dcdbdfdfdfc8c8c8000000"),a(m,"Phala Green Dark","000000ab150000b100a9a7000223c0c22ec000b4c0cbcbcb797979ed220000db00eae7000433ffed3aea00e8eaeaeaeac1fc03000000"),a(m,"Piatto Light","414141b2377166781ecd6f343c5ea8a454b266781ebfbfbf3f3f3fdb3365829429cd6f343c5ea8a454b2829429f2f2f2414141ffffff"),a(m,"Pnevma","2f2e2da3666690a57dd7af877fa5bdc79ec48adbb4d0d0d04a4845d78787afbea2e4c9afa1bdced7bedab1e7ddefefefd0d0d01c1c1c"),a(m,"Poimandres","1a1e28d0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd1a1e28"),a(m,"Poimandres Darker","16161ed0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd16161e"),a(m,"Poimandres Storm","252b37d0679d5de4c7fffac289ddfff087bd89ddffffffffa6accdd0679d5de4c7fffac2add7fff087bdadd7ffffffffa6accd252b37"),a(m,"Poimandres White","fefeffff209001dab2e5ba4e8abacdeb83948abacd000000969cbdff209001dab2e5ba4e0ebfffeb83940ebfff000000969cbdfefeff"),a(m,"Popping And Locking","1d2021cc241d98971ad79921458588b16286689d6aa89984928374f42c3eb8bb26fabd2f99c6cad3869b7ec16eebdbb2ebdbb2181921"),a(m,"Powershell","000000981a22098003c4a0004140c3d336820e807f7f7c7f808080ef29291cfe3cfefe45268ad2fe13fa29fffec2c1c3f6f6f7052454"),a(m,"Primary","000000db44370f9d58f4b4004285f4db44374285f4bfbfbf000000db44370f9d58f4b4004285f44285f40f9d58ffffff000000ffffff"),a(m,"Pro","00000099000000a6009999002009dbb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e5f2f2f2000000"),a(m,"Pro Light","000000e5492b50d148c6c4403b75ffed66e84ed2dec2c2c29f9f9fff664048d53ebfbe230082ffff7eff3bd1d2f2f2f2191919ffffff"),a(m,"Purple Rain","000000ff260e9be205ffc40000a2fa815bb500deefffffff565656ff4250b8e36effd85200a6ffac7bf074fdf3fffffffffbf621084a"),a(m,"Purplepeter","0a0520ff796d99b481efdfac66d9efe78fcdba8cffffba81504b63f99f92b4be8ff2e9bf79daedba91d4a0a0d6b9aed3ece7fa2a1a4a"),a(m,"Rapture","000000fc644d7afde1fff09b6c9bf5ff4fa164e0ffc0c9e5304b66fc644d7afde1fff09b6c9bf5ff4fa164e0ffffffffc0c9e5111e2a"),a(m,"Raycast Dark","000000ff536059d499ffc53156c2ffcf2f9852eee5ffffff4c4c4cff636359d499ffc53156c2ffcf2f9852eee5ffffffffffff1a1a1a"),a(m,"Raycast Light","000000b12424006b4ff8a300138af29a1b6e3eb8bfbfbfbf000000b12424006b4ff8a300138af29a1b6e3eb8bfffffff000000ffffff"),a(m,"Rebecca","12131edd775504dbb5f2e7b77aa5ffbf9cf956d3c2e4e3e9666699ff92cd01eac0fffca869c0fac17ff88bfde1f4f2f9e8e6ed292a44"),a(m,"Red Alert","000000d62e4e71be6bbeb86b489beee979d76bbeb8d6d6d6666666e02553aff08cdfddb765aaf1ddb7dfb7dfddffffffffffff762423"),a(m,"Red Planet","2020208c3432728271e8bf6a69819e8964925b8390b9aa99676767b55242869985ebeb9160827ede497438add8d6bfb8c2b790222222"),a(m,"Red Sands","000000ff3f0000bb00e7b0000072ffbb00bb00bbbbbbbbbb6e6e6ed41a1a00bb00e7b0000072aeff55ff55ffffffffffd7c9a77a251e"),a(m,"Relaxed","151515bc5653909d63ebc17a6a8799b06698c9dfffd9d9d9636363bc5653a0ac77ebc17a7eaac7b06698acbbd0f7f7f7d9d9d9353a44"),a(m,"Retro","13a10e13a10e13a10e13a10e13a10e13a10e13a10e13a10e16ba1016ba1016ba1016ba1016ba1016ba1016ba1016ba1013a10e000000"),a(m,"Retro Legends","262626de545445eb45f7bf2b4066f2bf4cf240d9e6bfe6bf4c594cff666659ff59ffd9334c80ffe666ff59e6fff2fff245eb450d0d0d"),a(m,"Rippedcasts","000000cdaf95a8ff60bfbb1f75a5b0ff73fd5a647ebfbfbf666666eecbadbcee68e5e50086bdc9e500e58c9bc4e5e5e5ffffff2b2b2b"),a(m,"Rose Pine","26233aeb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def46e6a86eb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def4e0def4191724"),a(m,"Rose Pine Dawn","f2e9e1b4637a286983ea9d3456949f907aa9d7827e5752799893a5b4637a286983ea9d3456949f907aa9d7827e575279575279faf4ed"),a(m,"Rose Pine Moon","393552eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def46e6a86eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def4e0def4232136"),a(m,"Rouge 2","5d5d6bc6797e969e92dbcdab6e94b94c4e788ab6c1e8e8ea616274c6797ee6dcc4e6dcc498b3cd8283a1abcbd3e8e8eaa2a3aa17182b"),a(m,"Royal","241f2b91284c23801cb49d276580b0674d968aaabe5249663e3a4ad5356c2cd946fde83b90baf9a479e3acd4eb9e8cbd514968100815"),a(m,"Ryuuko","2c3941865f5b66907db1a9906a8e95b18a7388b2acececec5d7079865f5b66907db1a9906a8e95b18a7388b2acecececececec2c3941"),a(m,"Sakura","000000d5237041af1abc70536964abc71fbf939393998eac786d69f41d9922e529f595749892f1e90cddeeeeeecbb6ffdd7bdc18131e"),a(m,"Scarlet Protocol","101116ff005100dc84faf9450271b6ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffbd35ec60fdffffffffe419511c153d"),a(m,"Sea Shells","17384cd15123027c9bfca02f1e495068d4f150a3b5deb88d434b53d48678628d98fdd39f1bbcddbbe3ee87acb4fee4cedeb88d09141b"),a(m,"Seafoam Pastel","757575825d4d728c62ada16d4d7b828a7267729494e0e0e08a8a8acf937a98d9aafae79d7ac3cfd6b2a1ade0e0e0e0e0d4e7d4243435"),a(m,"Selenized Black","252525ed4a4670b433dbb32d368aebeb6eb73fc5b7b9b9b9777777ff5e5683c746efc5414f9cfeff81ca56d8c9dededeb9b9b9181818"),a(m,"Selenized Dark","184956fa575075b938dbb32d4695f7f275be41c7b9adbcbc72898fff665c84c747ebc13d58a3ffff84cd53d6c7cad8d9adbcbc103c48"),a(m,"Selenized Light","ece3ccd2212d489100ad89000072d4ca4898009c8f53676d909995cc1729428b00a78300006dcec4439200978a3a4d5353676dfbf3db"),a(m,"Seoulbones Dark","4b4b4be388a398bd99ffdf9b97bddea5a6c56fbdbedddddd797172eb99b18fcd92ffe5b3a2c8e9b2b3da6bcacba8a8a8dddddd4b4b4b"),a(m,"Seoulbones Light","e2e2e2dc5284628562c485620084a3896788008586555555a5a0a1be3c6d487249a76b48006f897f4c7e006f70777777555555e2e2e2"),a(m,"Seti","323232c228328ec43de0c64f43a5d58b57b58ec43deeeeee3f3f3fc228328ec43de0c64f43a5d58b57b58ec43dffffffcacecd111213"),a(m,"Shades Of Purple","000000d904293ad900ffe7006943ffff2c7000c5c7c7c7c7686868f92a1c43d426f1d0006871ffff77ff79e8fbffffffffffff1e1d40"),a(m,"Shaman","012026b2302d00a9415e8baa449a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6405555001015"),a(m,"Slate","222222e2a8bf81d778c4c9c0335856a481d315ab9c02c5e0ffffffffcdd9beffa8d0ccca7ab0d2c5a7d98cdfe0e0e0e035b1d2222222"),a(m,"Sleepy Hollow","572100ba393491773fb556005f63b4a17c7b8faea9af9a914e4b61d9443fd6b04ef668138086efe2c2bba4dce7d2c7a9af9a91121214"),a(m,"Smyck","000000b841317da900c4a50062a3c4ba8acc207383a1a1a17a7a7ad6837cc4f137fee14d8dcff0f79aff6ad9cff7f7f7f7f7f71b1b1b"),a(m,"Snazzy","000000fc434650fb7cf0fb8c49bafffc4cb48be9feededec555555fc434650fb7cf0fb8c49bafffc4cb48be9feededecebece61e1f29"),a(m,"Snazzy Soft","000000ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0686868ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0eff0eb282a36"),a(m,"Soft Server","000000a2686a9aa56aa3906a6b8fa36a71a36ba58f99a3a2666c6cdd5c60bfdf55deb36062b1df606edf64e39cd2e0de99a3a2242626"),a(m,"Solarized Darcula","25292af24840629655b688002075c7797fd415968dd2d8d965696af24840629655b688002075c7797fd415968dd2d8d9d2d8d93d3f41"),a(m,"Solarized Dark Higher Contrast","002831d11c246cbe6ca577062176c7c61c6f259286eae3cb006488f5163b51ef84b27e28178ec8e24d8e00b39efcf4dc9cc2c3001e27"),a(m,"Solarized Dark Patched","002831d11c24738a05a577062176c7c61c6f259286eae3cb475b62bd3613475b625368707082845956ba819090fcf4dc708284001e27"),a(m,"Solarized Osaka Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"Sonokai","181819fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e37f8490fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e3e2e2e32c2e34"),a(m,"Spacedust","6e5346e35b005cab96e3cd7b0f548be35b0006afc7f0f1ce684c31ff8a3aaecab8ffc87867a0ceff8a3a83a7b4fefff1ecf0c10a1e24"),a(m,"Spacegray","000000b04b5787b379e5c1797d8fa4a4799685a7a5b3b8c34c4c4cb04b5787b379e5c1797d8fa4a4799685a7a5ffffffb3b8c320242d"),a(m,"Spacegray Bright","080808bc5553a0b56cf6c9877baec1b98aae85c9b8d8d8d8626262bc5553a0b56cf6c9877baec1b98aae85c9b8f7f7f7f3f3f32a2e3a"),a(m,"Spacegray Eighties","15171cec5f6781a764fec2545486c0bf83c157c2c1efece7555555ff697393d493ffd2564d84d1ff55ff83e9e4ffffffbdbaae222222"),a(m,"Spacegray Eighties Dull","15171cb24a5692b477c6735a7c8fa5a5789e80cdcbb3b8c3555555ec5f6789e986fec2545486c0bf83c158c2c1ffffffc9c6bc222222"),a(m,"Spiderman","1b1d1ee60813e22928e247562c3fff2435db3256fffffef6505354ff0325ff3338fe3a351d50ff747cff6184fffffff9e3e3e31b1d1e"),a(m,"Spring","000000ff4d831f8c3b1fc95b1dd3ee8959a83e999fbfbfbf000000ff00211fc231d5b80715a9fd8959a83e999fffffff4d4d4cffffff"),a(m,"Square","050505e9897cb6377decebbea9cdeb75507bc9caecf2f2f2474747f99286c3f786fcfbccb6defbad7fa8d7d9fce2e2e2acacab1a1a1a"),a(m,"Squirrelsong Dark","372920ba4138468336d4b1394395c6855fb82f9794d3b9a2704f39df4d43659a4ce8c23f4ca4db9d70da60aca9f2d4bbb19b89372920"),a(m,"Srcery","1c1b19ef2f27519f50fbb8292c78bfe02c6d0aaeb3baa67f918175f7534198bc37fed06e68a8e4ff5c8f2be4d0fce8c3fce8c31c1b19"),a(m,"Starlight","242424f62b5a47b413e3c40124acd4f2affd13c299e6e6e6616161ff4d5135d450e9e8365dc5f8feabf224dfc4ffffffffffff242424"),a(m,"Sublette","253045ee557755ee77ffdd885588ffff77cc44eeeef5f5da405570ee665599ee77ffff7777bbffaa88ff55ffbbffffeeccced0202535"),a(m,"Subliminal","7f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d47f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d4d4d4d4282c35"),a(m,"Sugarplum","1111475ca8dc53b397249a84db7dddd0beeef9f3f9a175d444447a5cb5dc52deb501f5c7fa5dfdc6a5fdffffffb577fddb7ddd111147"),a(m,"Sundried","302b2aa7463d5877449d602a485b988646519c814fc9c9c94d4e48aa000c128c21fc6a217999f7fd8aa1fad484ffffffc9c9c91a1818"),a(m,"Sunset Drive","0a0a13ff006300f992ffe90000a4ffff57fd00ffedededff3e3e4bff948b00fcb9ffff683ea0ffff93ff38fffff8f8ffededfe0f0f1a"),a(m,"Symfonic","000000dc322f56db3aff84000084d4b729d9ccccffffffff414347dc322f56db3aff84000084d4b729d9ccccffffffffffffff000000"),a(m,"Synthwave","000000f6188f1ebb2bfdf8342186ecf85a2112c3e2ffffff7f7094f841a025c141fdf4542f9dedf9713719cde6ffffffdad9c7000000"),a(m,"Synthwave Alpha","241b30e60a7000986cadad3e6e29adb300ad00b0b1b9b1bc7f7094e60a700ae4a4f9f972aa54f9ff00f600fbfdf2f2e3f2f2e3241b30"),a(m,"Synthwave Everything","fefefef97e7272f1b8fede5d6d77b3c792eaf772e0fefefefefefef8841472f1b8fff95136f9f6e1acfff92aadfefefef0eff12a2139"),a(m,"Tango Adapted","000000ff000059d600e3be0000a2ffc17ecc00d0d6c0c5bb8f928bff00136dd900ccbe0088c9ffe9a7e100d8d9f6f6f4000000ffffff"),a(m,"Tango Half Adapted","000000ff00004cc300e2c000008ef6a96cb300bdc3babfb5797d76ff001370dc00d9c60076bfffd898d100d0d4f4f4f2000000ffffff"),a(m,"Tearout","685742cc967b97976d6c9861b5955ec9a554d7c483b5955e75644fcc967b97976d6c9861b5955ec9a554d7c483b5955ef4d2ae34392d"),a(m,"Teerb","1c1c1cd68686aed686d7af8786aed6d6aed68adbb4d0d0d04f4f4fd68686aed686e4c9af86aed6d6aed6b1e7ddefefefd0d0d0262626"),a(m,"Terafox","2f3239e85c517aa4a1fda47f5a93aaad5c7ca1cdd8ebebeb4e5157eb746b8eb2affdb29273a3b7b97490afd4deeeeeeee6eaea152528"),a(m,"Terminal Basic","00000099000000a6009999000000b2b200b200a6b2bfbfbf666666e5000000d900bfbf000000ffe500e500d8d8e5e5e5000000ffffff"),a(m,"Terminal Basic Dark","000000c653396ac44bb8b74a6444edd357db69c1cfd1d1d1909090eb5a3a77ea51efef53d09af9eb5af778f1f2edededffffff1d1e1d"),a(m,"Thayer Bright","1b1d1ef926724df840f4fd222757d68c54fe38c8b5ccccc6505354ff5995b6e354feed6c3f78ff9e6ffe23cfd5f8f8f2f8f8f81b1d1e"),a(m,"The Hulk","1b1d1e269d1b13ce3063e4572525f5712c81378ca9d9d8d15053548dff2a48ff773afe16506b9572589d4085a6e5e6e1b5b5b51b1d1e"),a(m,"Tinacious Design Dark","1d1d26ff339900d364ffcc6600cbffcc66ff00cecacbcbf0636667ff2f9200d364ffd47900cbffd783ff00d5d4d5d6f3cbcbf01d1d26"),a(m,"Tinacious Design Light","1d1d26ff339900d364e5b24d00cbffcc66ff00cecab1b1d6636667ff2f9200d364d9ae5300cbffd783ff00c8c7d5d6f31d1d26f8f8ff"),a(m,"TokyoNight","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"TokyoNight Day","e9e9edf52a655875398c6c3e2e7de99854f10071976172b0a1a6c5f52a655875398c6c3e2e7de99854f10071973760bf3760bfe1e2e7"),a(m,"TokyoNight Moon","1b1d2bff757fc3e88dffc77782aaffc099ff86e1fc828bb8444a73ff757fc3e88dffc77782aaffc099ff86e1fcc8d3f5c8d3f5222436"),a(m,"TokyoNight Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"TokyoNight Storm","1d202ff7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d64e5575f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf524283b"),a(m,"Tomorrow","000000c82829718c00eab7004271ae8959a83e999fbfbfbf000000c82829718c00eab7004271ae8959a83e999fffffff4d4d4cffffff"),a(m,"Tomorrow Night","000000cc6666b5bd68f0c67481a2beb294bb8abeb7ffffff4c4c4ccc6666b5bd68f0c67481a2beb294bb8abeb7ffffffc5c8c61d1f21"),a(m,"Tomorrow Night Blue","000000ff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffff4c4c4cff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffffffffff002451"),a(m,"Tomorrow Night Bright","000000d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffff404040d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffffeaeaea000000"),a(m,"Tomorrow Night Burns","252525832e31a63c40d3494efc595fdf9395ba8586f5f5f55d6f71832e31a63c40d2494efc595fdf9395ba8586f5f5f5a1b0b8151515"),a(m,"Tomorrow Night Eighties","000000f2777a99cc99ffcc666699cccc99cc66ccccffffff595959f2777a99cc99ffcc666699cccc99cc66ccccffffffcccccc2d2d2d"),a(m,"Toy Chest","2c3f58be2d261a9172db8e27325d968a5edc35a08f23d183336889dd594431d07be7d84b34a6daae6bdc42c3aed5d5d531d07b24364b"),a(m,"Treehouse","321300b2270e44a900aa820c58859a97363db25a1e786b53504333ed5d2055f238f2b73285cfede14c5af07d14ffc800786b53191919"),a(m,"Twilight","141414c06d44afb97ac2a86c44474ab4be7c778385ffffd4404040de7c4cccd88ce2c47e5a5e62d0dc8e8a989bffffd4ffffd4141414"),a(m,"Ubuntu","2e3436cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeeceeeeec300a24"),a(m,"Ultra Dark","000000f07178c3e88dffcb6b82aaffc792ea89ddffcccccc404040f6a9aedbf1baffdfa6b4ccffddbdf2b8eaffffffffffffff000000"),a(m,"Ultra Violent","242728ff0090b6ff00fff72747e0fbd731ff0effbbe1e1e1636667fb58b4deff8cebe0877fecffe681ff69fcd3f9f9f5c1c1c1242728"),a(m,"Under The Sea","022026b2302d00a94159819c459a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6ffffff011116"),a(m,"Unikitty","0c0c0ca80f20c7ff98fff964145fcdffe9ff9effeffcf1fb434343d91329d3ffafffef500075eaffefff93ffeffff3fe0b0b0bff8cd9"),a(m,"Urple","000000b0425b37a415ad5c42564d9b6c3ca180808087799c6a3f32ff638829e620f08161867aeda05eeeeaeaeabfa3ff877a9b1b1b23"),a(m,"Vague","252530d8647e7fa563f3be7c6e94b2bb9dbdaeaed1cdcdcd606079e0839899b782f5cb968ba9c1c9b1cabebedad7d7d7cdcdcd141415"),a(m,"Vaughn","25234f70505060b48adfaf8f5555fff08cc38cd0d3709080709080dca3a360b48af0dfaf5555ffec93d393e0e3ffffffdcdccc25234f"),a(m,"Vercel","000000fc003629a948ffae00006afff3288200ac96feffffa8a8a8ff80804be15dffae0049aefff97ea800e4c4fefefefafafa101010"),a(m,"Vesper","101010f5a19190b99fe6b99daca1cfe29ecaea83a5a0a0a07e7e7eff808099ffe4ffc799b9aedaecaad6f591b2ffffffffffff101010"),a(m,"Vibrant Ink","878787ff6600ccff04ffcc0044b4cc9933cc44b4ccf5f5f5555555ff000000ff00ffff000000ffff00ff00ffffe5e5e5ffffff000000"),a(m,"Vimbones","f0f0caa8334c4f6c3194492728648688507d3b8992353535acac8994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535f0f0ca"),a(m,"Violet Dark","56595cc94c2285981cb4881d2e8bced13a8232a198c9c6bd45484bbd3613738a04a577052176c7c61c6f259286c9c6bd7082841c1d1f"),a(m,"Violet Light","56595cc94c2285981cb4881d2e8bced13a8232a198b9b6af45484bbd3613738a04a577052176c7c61c6f259286c9c6bd536870fcf4dc"),a(m,"Violite","241c36ec797979ecb3ece279a979ecec79ec79ececeef4f656447aef8f8f9fefbfefe78fb78fefef8fcf9fefeff8fafceef4f6241c36"),a(m,"Warm Neon","000000e2434639b13adae1454261c5f920fb2abbd4d0b8a3fefcfce970719cc090ddda7a7b91d6f674ba5ed1e5d8c8bbafdab6404040"),a(m,"Wez","000000cc555555cc55cdcd555555cccc55cc7acacacccccc555555ff555555ff55ffff555555ffff55ff55ffffffffffb3b3b3000000"),a(m,"Whimsy","535178ef64875eca89fdd87765aef7aa7ff043c1beffffff535178ef64875eca89fdd87765aef7aa7ff043c1beffffffb3b0d629283b"),a(m,"Wild Cherry","000507d940852ab250ffd16f883cdcecececc1b8b7fff8de009cc9da6bacf4dca5eac066308cbaae636bff919de4838ddafaff1f1726"),a(m,"Wilmersdorf","34373ee063837ebebdcccccca6c1e0e1c1ee5b94abababab50545dfa71938fd7d6d1dfffb2cff0efccfd69abc5d3d3d3c6c6c6282b33"),a(m,"Wombat","000000ff615ab1e969ebd99c5da9f6e86aff82fff7dedacf4a4a4af58c80ddf88feee5b2a5c7ffddaaffb7fff9ffffffdedacf171717"),a(m,"Wryan","3333338c46652873737c7c993955735e468c31658c899ca13d3d3dbf4d8053a6a69e9ecb477ab37e62b36096bfc0c0c0999993101010"),a(m,"Xcode Dark","414453ff817078c2b3d9c97c4eb0ccff7ab2b281ebdfdfe07f8c98ff8170acf2e4ffa14f6bdfffff7ab2dabaffdfdfe0dfdfe0292a30"),a(m,"Xcode Dark hc","43454bff8a7a83c9bcd9c6684ec4e6ff85b8cda1ffffffff838991ff8a7ab1faebffa14f6bdfffff85b8e5cfffffffffffffff1f1f24"),a(m,"Xcode Light","b4d8fdd12f1b3e808778492a0f68a0ad3da4804fb82626268a99a6d12f1b23575c78492a0b4f79ad3da44b21b0262626262626ffffff"),a(m,"Xcode Light hc","b4d8fdad1805355d6178492a0058a19c2191703daa0000008a99a6ad180517414578492a003f739c2191441ea1000000000000ffffff"),a(m,"Xcode WWDC","494d5cbb383a94c66ed28e5d8884c5b7399900aba4e7e8eb7f869ebb383a94c66ed28e5d8884c5b7399900aba4e7e8ebe7e8eb292c36"),a(m,"Zenbones","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(m,"Zenbones Dark","1c1917de6e7c819b69b77e646099c0b279a766a5adb4bdc34d4540e8838f8bae68d68c6761abdacf86c165b8c1888f94b4bdc31c1917"),a(m,"Zenbones Light","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(m,"Zenburn","4d4d4d7d5d5d60b48af0dfaf5d6d7ddc8cc38cd0d3dcdccc709080dca3a3c3bf9fe0cf9f94bff3ec93d393e0e3ffffffdcdccc3f3f3f"),a(m,"Zenburned","404040e3716e819b69b77e646099c0b279a766a5adf0e4cf6f6768ec86858bae68d68c6761abdacf86c165b8c1c0ab86f0e4cf404040"),a(m,"Zenwritten Dark","191919de6e7c819b69b77e646099c0b279a766a5adbbbbbb4a4546e8838f8bae68d68c6761abdacf86c165b8c18e8e8ebbbbbb191919"),a(m,"Zenwritten Light","eeeeeea8334c4f6c3194492728648688507d3b8992353535aca9a994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535eeeeee"),a(m,"branch","35241cc2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9564a45c2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9cfc1a932221a"),a(m,"iTerm2 Dark Background","000000c91b0000c200c7c4000225c7ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffc7c7c7000000"),a(m,"iTerm2 Default","000000c91b0000c200c7c4002225c4ca30c700c5c7ffffff686868ff6e675ffa68fffc676871ffff77ff60fdffffffffffffff000000"),a(m,"iTerm2 Light Background","000000c91b0000c200c7c4000225c7ca30c700c5c7bababa686868ff6e6739d442ccc9346871ffff77ff3ad7d9ffffff000000ffffff"),a(m,"iTerm2 Pastel Dark Background","626262ff8373b4fb73fffdc3a5d5feff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5c2e3ffffb2fee6e6feffffffc7c7c7000000"),a(m,"iTerm2 Smoooooth","14191eb43c2a00c200c7c4002744c7c040be00c5c7c7c7c7686868dd797558e790ece100a7abf2e17ee160fdffffffffdcdcdc15191f"),a(m,"iTerm2 Solarized Dark","073642dc322f859900b58900268bd2d336822aa198eee8d5335e69cb4b16586e75657b838394966c71c493a1a1fdf6e3839496002b36"),a(m,"iTerm2 Solarized Light","073642dc322f859900b58900268bd2d336822aa198bbb5a2002b36cb4b16586e75657b838394966c71c493a1a1fdf6e3657b83fdf6e3"),a(m,"iTerm2 Tango Dark","000000d81e005ea702cfae00427ab389658e00a7aadbded8686a66f5423599e343fdeb6184b0d8bc94b737e6e8f1f1f0ffffff000000"),a(m,"iTerm2 Tango Light","000000d81e005ea702cfae00427ab389658e00a7aac1c4be686a66f542358cd636d7c53b84b0d8bc94b71ecccef1f1f0000000ffffff"),a(m,"novmbr","282a2e9f64349dac5fcca75f2f7d7cb5896e52877fc7b8ac5d4e479f64349dac5fcca75f2f7d7cb5896e52877fc7b8acc7b8ac241d1a"),a(m,"owl","302c2c5a5a5a989898cacaca656565b1b1b17f7f7fdedede5d595bda5b2c989898cacaca656565b1b1b17f7f7fffffffdedede2f2b2c"),a(m,"traffic","282d31934e46637268c79e84515e67715f5e5c6f7dcfb9a84e575e934e46637270c79e84515e67715f5e5c6f7dddcec2cfb9a8272c30"),a(m,"urban","33303b87404f74934eae835a615772854b64625464c0a79a5c586587404f74934eae835a615772854b64625464c0a79ac0a79a312e39"),pg,hg,a(m,"Logoyo Dark","1c1466ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f2f0ff6a63a0ff6b5e6cc04affc83d6ba8f0b57bf058d6c8fffffff2f0ff2a1e80"),a(m,"Logoyo Light","1c1452ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f4f2ff8983b5ff6b5e6cc04affc83d6ba8f0b57bf058d6c8ffffff29216bc5c1fc"),gg,xg,Sg,yg,kg]),En={$:-2},Re=En,kU=1,Ae=Le(function(e,r,n,t,o){return{$:-1,a:e,b:r,c:n,d:t,e:o}}),xU=0,ic=Le(function(e,r,n,t,o){if(o.$===-1&&!o.a){var c=o.a,i=o.b,f=o.c,$=o.d,s=o.e;if(t.$===-1&&!t.a){var d=t.a,b=t.b,g=t.c,p=t.d,_=t.e;return V(Ae,0,r,n,V(Ae,1,b,g,p,_),V(Ae,1,i,f,$,s))}else return V(Ae,e,i,f,V(Ae,0,r,n,t,$),s)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){var y=t.a,b=t.b,g=t.c,k=t.d,w=k.a,j=k.b,B=k.c,F=k.d,H=k.e,_=t.e;return V(Ae,0,b,g,V(Ae,1,j,B,F,H),V(Ae,1,r,n,_,o))}else return V(Ae,e,r,n,t,o)}),Sl=x(function(e,r,n){if(n.$===-2)return V(Ae,0,e,r,En,En);var t=n.a,o=n.b,c=n.c,i=n.d,f=n.e,$=a(Cl,e,o);switch($){case 0:return V(ic,t,o,c,v(Sl,e,r,i),f);case 1:return V(Ae,t,o,r,i,f);default:return V(ic,t,o,c,i,v(Sl,e,r,f))}}),Sr=x(function(e,r,n){var t=v(Sl,e,r,n);if(t.$===-1&&!t.a){var o=t.a,c=t.b,i=t.c,f=t.d,$=t.e;return V(Ae,1,c,i,f,$)}else{var s=t;return s}}),dn=function(e){return v(se,l(function(r,n){var t=r.a,o=r.b;return v(Sr,t,o,n)}),Re,e)},cb=J(function(e,r,n,t){if(t.b){var o=t.a,c=t.b;if(c.b){var i=c.a,f=c.b;if(f.b){var $=f.a,s=f.b;if(s.b){var d=s.a,b=s.b,g=n>500?v(se,e,r,He(b)):P(cb,e,r,n+1,b);return a(e,o,a(e,i,a(e,$,a(e,d,g))))}else return a(e,o,a(e,i,a(e,$,r)))}else return a(e,o,a(e,i,r))}else return a(e,o,r)}else return r}),Xa=x(function(e,r,n){return P(cb,e,r,0,n)}),Y=l(function(e,r){return v(Xa,l(function(n,t){return a(A,e(n),t)}),C,r)}),jg=dn(a(Y,function(e){return h(e.sc,e)},ob)),wg=function(e){return a(Ke,e,jg)},jU=F6,wU=N6,ib=x(function(e,r,n){return e<=0?n:v(ib,e>>1,Q(r,r),e&1?Q(n,r):n)}),fc=l(function(e,r){return v(ib,e,r,"")}),fb=(function(){var e=ob;if(e.b){var r=e.a,n=e.b;return h(r,n)}else return h(a(m,"Fallback",a(fc,108,"0")),C)})(),te=l(function(e,r){if(r.$)return e;var n=r.a;return n}),kl=function(e){return a(te,fb.a,wg(e))},xl=(function(){var e=5;return{gD:e,cV:a(Pi,e,kl("Argonaut")),c3:a(Pi,e,kl("Erkal Light")),dz:!1}})(),Lg={hb:!0,fJ:!0,ds:!0,fK:!0,fL:!1,dt:!0,es:!0,hc:!0,b9:!0,hd:!0,hg:_l,bE:!1,e:xl},Tg=Lg,S=_6,q=b6,Un=C6,Ie=x(function(e,r,n){return r(e(n))}),LU=ne,hu=function(e){return{$:0,a:e}},Mg=x(function(e,r,n){e:for(;;){var t=a(hl,Dr,e),o=t.a,c=t.b;if(oe(Rn(o),Dr)<0)return a(gl,!0,{ap:r,W:n,af:o});var i=c,f=a(A,tc(o),r),$=n+1;e=i,r=f,n=$;continue e}}),ki=function(e){return e.b?v(Mg,e,C,0):pl},zg=l(function(e,r){return{lI:e,c0:C,as:0,j3:ki(r),dN:hu({eW:0,e2:0})}}),Dg={$:0},ub=Dg,Ag=l(function(e,r){return h(a(zg,a(Ie,function(n){return n.dG},function(n){return n.uS}),u([a(Ie,function(n){return n.dG},function(n){return n.s9}),a(Ie,function(n){return n.dG},function(n){return n.q3}),a(Ie,function(n){return n.dG},function(n){return n.pd}),a(Ie,function(n){return n.dG},function(n){return n.rM}),a(Ie,function(n){return n.dG},function(n){return n.p_}),a(Ie,function(n){return n.dG},function(n){return n.pm})])),ub)}),Ig=l(function(e,r){return{a8:r,sc:e}}),Bg=l(function(e,r){return a(Ig,e,r)}),Vg=Bg,Hg={gG:.2,bO:.35,fF:.3,c5:6,jY:6,kb:.1,kc:.5},jl=l(function(e,r){return{$:0,a:e,b:r}}),uc=x(function(e,r,n){var t=r.a,o=r.b;return h(e,a(jl,h(t,o),n))}),wl=l(function(e,r){return{$:2,a:e,b:r}}),Rg=x(function(e,r,n){var t=r.a,o=r.b;return h(e,a(wl,h(t,o),n))}),ya={gG:"arrow kick fraction \u2014 share of max speed when \u2190/\u2192 is pressed",bO:"card spacing \u2014 gap between adjacent card centres on the rail",fF:"fling projection time \u2014 seconds of pointer inertia projected on release",c5:"max coast speed \u2014 hard cap on rail speed (world units per second)",jY:"pointer sample window \u2014 frames of pointer history used to estimate fling speed",kb:"snap stiffness \u2014 per-frame fraction of remaining distance closed while snapping",kc:"snap zone fraction \u2014 within this fraction of card spacing, lerp to the target"},Fg=(function(){var e=Hg;return u([a(Vg,"Carousel physics",u([v(uc,ya.bO,h(.1,1),e.bO),v(uc,ya.gG,h(.05,1),e.gG),v(uc,ya.fF,h(.05,1.5),e.fF),v(Rg,ya.jY,h(2,30),e.jY),v(uc,ya.c5,h(1,20),e.c5),v(uc,ya.kc,h(.1,1),e.kc),v(uc,ya.kb,h(.02,.5),e.kb)]))])})(),xi=s6,ur=h6,Ge=x6,$c=y6,so=function(e){e:for(;;){var r=e,n=r;e=n;continue e}},Eg=J(function(e,r,n,t){return so(n)}),Vr=B9,gu=l(function(e,r){return e*Vr(r/e)}),TU=function(e){return-e},Ug=l(function(e,r){var n=r;return I(n,{dN:hu({eW:e.gG*-e.c5,e2:a(gu,e.bO,n.as-e.bO)})})}),qg=l(function(e,r){var n=r;return I(n,{dN:hu({eW:e.gG*e.c5,e2:a(gu,e.bO,n.as+e.bO)})})}),Ng=l(function(e,r){var n=r.mq;return n.eF?qg(e):n.j4?Ug(e):ne}),yu=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b,o=e(n);if(o.$){var i=e,f=t;e=i,r=f;continue e}else{var c=o.a;return D(c)}}else return M}),Gg=l(function(e,r){return a(yu,function(n){var t=n.a,o=n.b,c=h(ie(t,e),o);if(c.a&&!c.b.$){var i=c.b,f=i.b;return D(f)}else return M},r.a8)}),Yg=l(function(e,r){return a(te,0,a(yu,Gg(e),r))}),Wg=l(function(e,r){return a(Yg,e,r.b2)}),lc=Wg,Og=l(function(e,r){return a(yu,function(n){var t=n.a,o=n.b,c=h(ie(t,e),o);if(c.a&&c.b.$===2){var i=c.b,f=i.b;return D(f)}else return M},r.a8)}),Jg=l(function(e,r){return a(te,0,a(yu,Og(e),r))}),Zg=l(function(e,r){return a(Jg,e,r.b2)}),Qg=Zg,$b=function(e){return{gG:a(lc,ya.gG,e),bO:a(lc,ya.bO,e),fF:a(lc,ya.fF,e),c5:a(lc,ya.c5,e),jY:a(Qg,ya.jY,e),kb:a(lc,ya.kb,e),kc:a(lc,ya.kc,e)}},Xg=function(e){return{qE:e.qE,qM:e.qM,s4:e.s4,ul:e.ul}},Kg=function(e){return{$:0,a:e}},ey=T9,ry=Kg({eq:2*ey(.5)}),lb=Xg({qE:{dY:0,fd:-.2,kI:1},qM:{dY:0,fd:0,kI:0},s4:ry,ul:{dY:0,fd:1,kI:0}}),de=l(function(e,r){if(r.$)return M;var n=r.a;return D(e(n))}),ay=l(function(e,r){return I(r,{dY:r.dY+.5*e.$8,fd:-r.fd+.5*e.he})}),ny=function(e){return a(ay,e.f9,{dY:e.ny.dY,fd:e.ny.fd})},ty=ny,Zr=x(function(e,r,n){return{dY:e,fd:r,kI:n}}),oy={nd:R(0,0,1),aY:v(Zr,0,0,0)},xe=function(e){return e<0?-e:e},Ll=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return n*c+t*i+o*f}),Ta=l(function(e,r){var n=r.a,t=r.b,o=r.c;return R(e*n,e*t,e*o)}),bo=l(function(e,r){var n=e.a,t=e.b,o=e.c;return{dY:r.dY+n,fd:r.fd+t,kI:r.kI+o}}),vb=l(function(e,r){return R(r.dY-e.dY,r.fd-e.fd,r.kI-e.kI)}),cy=l(function(e,r){var n=a(Ll,e.ed,r.nd);if(xe(n)<1e-10)return M;var t=a(vb,e.aY,r.aY),o=a(Ll,t,r.nd)/n;return D(a(bo,a(Ta,o,e.ed),e.aY))}),Tl=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return R(t*f-o*i,o*c-n*f,n*i-t*c)}),bn=C9,mn=V9,sb=function(e){var r=e.a,n=e.b,t=e.c;return mn(a(bn,r,2)+a(bn,n,2)+a(bn,t,2))},ji=function(e){var r=sb(e);return a(Ta,1/r,e)},iy=function(e){return R(e.dY,e.fd,e.kI)},fy=function(e){var r=iy(e.ul),n=ji(a(vb,e.qE,e.qM)),t=ji(a(Tl,n,r)),o=a(Tl,t,n);return{i_:n,j$:o,j4:t}},wi=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return R(n+c,t+i,o+f)}),uy=a(se,wi,R(0,0,0)),db=w9,$y=l(function(e,r){var n=r.fd,t=r.dY;return h(2*t/e.$8-1,1-2*n/e.he)}),ly=x(function(e,r,n){var t=r.$8/r.he,o=fy(e),c=o.i_,i=o.j$,f=o.j4,$=a($y,r,n),s=$.a,d=$.b,b=e.s4;if(b.$){var k=b.a.oE,p=k/2,_=p*t,w=a(bo,a(Ta,d*p,i),a(bo,a(Ta,s*_,f),e.qE));return{ed:ji(c),aY:w}}else{var g=b.a.eq,p=db(g/2),_=p*t,y=ji(uy(u([c,a(Ta,s*_,f),a(Ta,d*p,i)])));return{ed:y,aY:e.qE}}}),vy=J(function(e,r,n,t){return a(cy,v(ly,r,n,t),e)}),sy=vy(oy),bb=l(function(e,r){return e?r:ne}),dy=x(function(e,r,n){var t=r.nI,o=r.nz,c=n;return I(c,{as:t-(o-e.dI)})}),by=Le(function(e,r,n,t,o){var c=o;return oe(xe(n-c.as),e.kc*e.bO)<0?I(c,{as:c.as+e.kb*(n-c.as)}):I(c,{as:c.as+r*t})}),Ml=R9,my=function(e){var r=e;return I(r,{c0:C})},py=function(e){return{$:1,a:e}},hy=l(function(e,r){var n=r;return I(n,{dN:py({nz:e.dI,nI:n.as})})}),kr=function(e){if(e.b){var r=e.a,n=e.b;return D(r)}else return M},gy=function(e){return v(se,Od,0,e)},yy=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,o=r.b,c=e-1,i=o,f=a(A,t,n);e=c,r=i,n=f;continue e}else return n}}),_y=l(function(e,r){return He(v(yy,e,r,C))}),mb=x(function(e,r,n){if(r<=0)return C;var t=h(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,j=o.a,c=o.b,i=c.a;return u([j,i]);case 3:if(t.b.b.b.b){var f=t.b,j=f.a,$=f.b,i=$.a,s=$.b,d=s.a;return u([j,i,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var b=t.b,j=b.a,g=b.b,i=g.a,p=g.b,d=p.a,_=p.b,y=_.a,k=_.b;return e>1e3?a(A,j,a(A,i,a(A,d,a(A,y,a(_y,r-4,k))))):a(A,j,a(A,i,a(A,d,a(A,y,v(mb,e+1,r-4,k)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var w=t.b,j=w.a;return u([j])}),qn=l(function(e,r){return v(mb,0,e,r)}),Cy=l(function(e,r){var n=r,t=gy(a(qn,Pr(n.c0)-1,a(Y,function(s){return s.lp},n.c0))),o=h(a(te,0,a(de,function(s){return s.dI},kr(n.c0))),a(te,0,a(de,function(s){return s.dI},kr(He(n.c0))))),c=o.a,i=o.b,f=c-i,$=t?f/t:0;return I(n,{dN:hu({eW:v(mr,-e.c5,e.c5,$),e2:a(gu,e.bO,n.as+e.fF*$)})})}),Py=x(function(e,r,n){var t=r.dI,o=r.iQ,c=n;return I(c,{c0:a(qn,e.jY,a(A,{lp:o,dI:t},c.c0))})}),Sy=x(function(e,r,n){var t=n,o=t.dN;if(o.$===1){var c=o.a;return v(bb,!r.jX,Cy(e),v(dy,r,c,v(Py,e,r,t)))}else{var i=o.a.eW,f=o.a.e2;return V(by,e,r.iQ,f,i,v(bb,r.jX,hy(r),my(t)))}}),ky=x(function(e,r,n){var t=a(te,0,a(de,function(o){return o.dY},v(sy,lb,r.f9,ty(r))));return v(Sy,e,{iQ:r.iQ,jX:r.ny.i7,dI:t},n)}),xy=x(function(e,r,n){var t=$b(e);return h(v(ky,t,e,v(Ng,t,e,n)),ub)}),mo=k6,jy={jK:C,op:C},fa=td,fe=fa(C),Li=td,ft=Li(C),Nn=j6,re=l6,zl=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},pn=Na("div"),pb=b7,X=pb,_u=function(e){return{$:0,a:e}},wy=J(function(e,r,n,t){return{d4:t,et:n,nZ:r,tA:e}}),hb=3432918353,gb=461845907,MU=q6,zU=G6,po=l(function(e,r){return(r&65535)*e+(((r>>>16)*e&65535)<<16)}),DU=E6,Dl=l(function(e,r){return r<<e|r>>>32-e}),AU=U6,Ly=function(e){var r=e.et?e.nZ^a(po,gb,a(Dl,15,a(po,hb,e.et))):e.nZ,n=r^e.d4,t=a(po,2246822507,n^n>>>16),o=a(po,3266489909,t^t>>>13);return(o^o>>>16)>>>0},Ty=W9,My=l(function(e,r){return a(po,5,a(Dl,13,e^a(po,gb,a(Dl,15,a(po,hb,r)))))+3864292196}),zy=l(function(e,r){var n=r.et|(255&it(e))<<r.tA,t=r.tA;return t===24?{d4:r.d4+1,et:0,nZ:a(My,r.nZ,n),tA:0}:{d4:r.d4+1,et:n,nZ:r.nZ,tA:r.tA+8}}),Dy=l(function(e,r){return Ly(v(Ty,zy,P(wy,0,e,0,0),r))}),Ay=15739,Iy=i6,Qr=S9,yb=function(e){e:for(;;)switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";case 15:return"f";default:var r=e;e=r;continue e}},_b=l(function(e,r){e:for(;;){if(r<16)return a(A,yb(r),e);var n=a(A,yb(a(Qr,16,r)),e),t=r/16|0;e=n,r=t;continue e}}),By=function(e){return Iy(e<0?a(A,"-",a(_b,C,-e)):a(_b,C,e))},Cb=function(e){return a(pu,"_",By(a(Dy,Ay,e)))},Ka=l(function(e,r){var n=e.b,t=e.c;if(n){var o=a(Ke,t,r);return o.$?v(Sr,t,Cb(t),r):r}else return r}),Al=l(function(e,r){return a(dd,y7(e),_7(r))}),Rr=U0,Ft=l(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(Ke,o,e);if(c.$)return a(Al,"className",Rr("_unstyled"));var i=c.a;return a(Al,"className",Rr(i))}else return n}),hn=l(function(e,r){return a(fu,bd(e),md(r))}),Cu=l(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(Ke,o,e);if(c.$)return a(hn,"class","_unstyled");var i=c.a;return a(hn,"class",i)}else return n}),Pu=function(e){return v7(uu(e))},Il=l(function(e,r){return a(vd,e,uu(r))}),ho=function(e){return Na(uu(e))},Bl=l(function(e,r){return a(ld,e,uu(r))}),vc=l(function(e,r){var n=e.a,t=e.b,o=r.a,c=r.b;switch(t.$){case 4:var w=t.a;return h(a(A,h(n,w),o),c);case 0:var d=t.a,b=t.b,g=t.c,p=v(se,Ka,c,b),i=v(se,sc,h(C,p),g),y=i.a,k=i.b,w=v(ho,d,a(Y,Ft(k),b),He(y));return h(a(A,h(n,w),o),k);case 1:var s=t.a,d=t.b,b=t.c,g=t.d,p=v(se,Ka,c,b),f=v(se,sc,h(C,p),g),y=f.a,k=f.b,w=P(Bl,s,d,a(Y,Ft(k),b),He(y));return h(a(A,h(n,w),o),k);case 2:var d=t.a,b=t.b,g=t.c,p=v(se,Ka,c,b),$=v(se,vc,h(C,p),g),y=$.a,k=$.b,w=v(Pu,d,a(Y,Ft(k),b),He(y));return h(a(A,h(n,w),o),k);default:var s=t.a,d=t.b,b=t.c,g=t.d,p=v(se,Ka,c,b),_=v(se,vc,h(C,p),g),y=_.a,k=_.b,w=P(Il,s,d,a(Y,Ft(k),b),He(y));return h(a(A,h(n,w),o),k)}}),sc=l(function(e,r){var n=r.a,t=r.b;switch(e.$){case 4:var y=e.a;return h(a(A,y,n),t);case 0:var $=e.a,s=e.b,d=e.c,b=v(se,Ka,t,s),o=v(se,sc,h(C,b),d),p=o.a,_=o.b,y=v(ho,$,a(Y,Ft(_),s),He(p));return h(a(A,y,n),_);case 1:var f=e.a,$=e.b,s=e.c,d=e.d,b=v(se,Ka,t,s),c=v(se,sc,h(C,b),d),p=c.a,_=c.b,y=P(Bl,f,$,a(Y,Cu(_),s),He(p));return h(a(A,y,n),_);case 2:var $=e.a,s=e.b,d=e.c,b=v(se,Ka,t,s),i=v(se,vc,h(C,b),d),p=i.a,_=i.b,y=v(Pu,$,a(Y,Ft(_),s),He(p));return h(a(A,y,n),_);default:var f=e.a,$=e.b,s=e.c,d=e.d,b=v(se,Ka,t,s),g=v(se,vc,h(C,b),d),p=g.a,_=g.b,y=P(Il,f,$,a(Y,Cu(_),s),He(p));return h(a(A,y,n),_)}}),Ti=function(e){return u([e])},Su=el,go=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,f=e,$=v(e,t,o,v(go,e,r,c)),s=i;e=f,r=$,n=s;continue e}}),Vl="\x07",Pb=x(function(e,r,n){return a(zr,r,a($n,e,n))}),Vy=x(function(e,r,n){return n+(`
`+v(Pb,Vl,r,e))}),Hy=function(e){return v(go,Vy,"",e)},Sb=l(function(e,r){return v(go,x(function(n,t,o){return o+(`
`+v(Pb,"."+Vl,"#"+(e+("."+t)),n))}),"",r)}),Hl=l(function(e,r){var n=(function(){if(r.$){var o=r.a,c=r.b,i=r.c;return a(Sb,o,c)+(`
`+a(Sb,o+" ",i))}else{var t=r.a;return Hy(t)}})();return v(ho,"span",u([a(hn,"style","display: none;"),a(hn,"class","elm-css-style-wrapper")]),u([v(ho,"style",(function(){if(e.$)return C;var t=e.a;return u([a(hn,"nonce",t)])})(),Ti(Su(n)))]))}),Ry=J(function(e,r,n,t){var o=v(se,Ka,Re,n),c=v(se,sc,h(C,o),t),i=c.a,f=c.b,$=a(Hl,e,_u(f)),s=a(Y,Ft(f),n);return v(ho,r,s,a(A,$,He(i)))}),Fy=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b;if(ie(e,t))return!0;var c=e,i=o;e=c,r=i;continue e}else return!1}),Ey=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b,c="_"+t;if(a(Fy,c,o)){var i=c,f=o;e=i,r=f;continue e}else return c}else return e}),kb=x(function(e,r,n){var t=a(Ey,"_",n),o=a(Hl,e,r);return h(t,o)}),Uy=J(function(e,r,n,t){var o=v(se,Ka,Re,n),c=v(se,vc,h(C,o),t),i=c.a,f=c.b,$=v(kb,e,_u(f),i),s=a(Y,Ft(f),n);return v(Pu,r,s,a(A,$,He(i)))}),qy=Le(function(e,r,n,t,o){var c=v(se,Ka,Re,t),i=v(se,vc,h(C,c),o),f=i.a,$=i.b,s=v(kb,e,_u($),f),d=a(Y,Cu($),t);return P(Il,r,n,d,a(A,s,He(f)))}),Ny=Le(function(e,r,n,t,o){var c=v(se,Ka,Re,t),i=v(se,sc,h(C,c),o),f=i.a,$=i.b,s=a(Hl,e,_u($)),d=a(Y,Cu($),t);return P(Bl,r,n,d,a(A,s,He(f)))}),Gy=function(e){switch(e.$){case 4:var r=e.a;return r;case 0:var t=e.a,o=e.b,c=e.c;return P(Ry,M,t,o,c);case 1:var n=e.a,t=e.b,o=e.c,c=e.d;return V(Ny,M,n,t,o,c);case 2:var t=e.a,o=e.b,c=e.c;return P(Uy,M,t,o,c);default:var n=e.a,t=e.b,o=e.c,c=e.d;return V(qy,M,n,t,o,c)}},ku=Gy,Yy=function(e){return a(pn,u([a(X,"position","fixed"),a(X,"inset","0"),a(X,"overflow","clip"),a(X,"background-color","transparent")]),u([ku(e)]))},Fr=Su,Wy=function(e){var r=e.cI;if(r.b){var n=r.a,t=n.b;return a(pn,u([a(X,"position","fixed"),a(X,"inset","0"),a(X,"background-color","transparent"),a(X,"overflow","clip")]),u([t]))}else return Fr("")},Rl=function(e){var r=e.a,n=e.b;return R(r,n,C)},Oy=function(e){return{oN:e.oN,a6:{sw:Le(function(r,n,t,o,c){return Rl(P(e.sw,r,t,o,c))}),sA:J(function(r,n,t,o){return Rl(v(e.sA,r,t,o))}),cf:J(function(r,n,t,o){return v(e.cf,r,t,o)}),aA:J(function(r,n,t,o){return v(e.aA,r,t,o)}),uw:J(function(r,n,t,o){return Yy(v(e.uw,r,t,o))})},aC:J(function(r,n,t,o){return v(e.aC,r,t,o)}),rf:e.rf,i4:function(r){return jy},rp:e.rp,ey:function(r){return 0},cI:u([{aC:C,by:"play",ro:x(function(r,n,t){return Rl(a(e.ro,r,t))}),rp:e.rp,eV:!1}]),rE:Wy,eX:l(function(r,n){return h(0,fe)}),aA:function(r){return ft},h8:M,fb:function(r){return C}}},Jy=function(e){return{$:1,a:e}},Zy=function(e){return{$:0,a:e}},Qy=ne,IU=0,BU=1,xb=Mr(function(e,r,n,t,o,c){return{lQ:c,l$:r,ns:t,nA:n,nG:e,nH:o}}),jb=r6,xu=t6,yo=function(e){return e===""},Mi=l(function(e,r){return e<1?"":v(Za,0,e,r)}),zi=o6,wb=Le(function(e,r,n,t,o){if(yo(o)||a(jb,"@",o))return M;var c=a(xu,":",o);if(c.b){if(c.b.b)return M;var i=c.a,f=zi(a(Qa,i+1,o));if(f.$===1)return M;var $=f;return D(Cr(xb,e,a(Mi,i,o),$,r,n,t))}else return D(Cr(xb,e,o,M,r,n,t))}),Lb=J(function(e,r,n,t){if(yo(t))return M;var o=a(xu,"/",t);if(o.b){var c=o.a;return V(wb,e,a(Qa,c,t),r,n,a(Mi,c,t))}else return V(wb,e,"/",r,n,t)}),Tb=x(function(e,r,n){if(yo(n))return M;var t=a(xu,"?",n);if(t.b){var o=t.a;return P(Lb,e,D(a(Qa,o+1,n)),r,a(Mi,o,n))}else return P(Lb,e,M,r,n)}),Mb=l(function(e,r){if(yo(r))return M;var n=a(xu,"#",r);if(n.b){var t=n.a;return v(Tb,e,D(a(Qa,t+1,r)),a(Mi,t,r))}else return v(Tb,e,M,r)}),zb=function(e){return a(Fn,"http://",e)?a(Mb,0,a(Qa,7,e)):a(Fn,"https://",e)?a(Mb,1,a(Qa,8,e)):M},VU=ne,_a=qa,Xy=_a(0),ua=N0,Di=l(function(e,r){return a(ua,function(n){return _a(e(n))},r)}),Ky=x(function(e,r,n){return a(ua,function(t){return a(ua,function(o){return _a(a(e,t,o))},n)},r)}),Ai=function(e){return v(Xa,Ky(A),_a(C),e)},ju=a7,e_=l(function(e,r){var n=r;return Y0(a(ua,ju(e),n))}),r_=x(function(e,r,n){return a(Di,function(t){return 0},Ai(a(Y,e_(e),r)))}),a_=x(function(e,r,n){return _a(0)}),n_=l(function(e,r){var n=r;return a(Di,e,n)});Wr.Task=Z0(Xy,r_,a_,n_);var Db=bi("Task"),Ii=l(function(e,r){return Db(a(Di,e,r))}),t_=E7,wu=function(e){return{$:9,a:e}},Xr=l(function(e,r){if(r.$)return M;var n=r.a;return e(n)}),o_=function(e){return{$:3,a:e}},dc=od,Lu=x(function(e,r,n){return v(se,l(function(t,o){var c=o.a,i=o.b,f=a(e.eX,t,c),$=f.a,s=f.b;return h($,fa(u([i,a(dc,o_,s)])))}),h(n,fe),r)}),c_={hb:!1,fJ:!1,ds:!1,fK:!1,fL:!1,dt:!1,es:!1,hc:!1,b9:!1,hd:!1,hg:_l,bE:!1,e:xl},i_=function(e){switch(e){case"true":return D(!0);case"false":return D(!1);default:return M}},f_=function(e){return{$:1,a:e}},u_={$:0},$_=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Ab=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,f=o.c,$=o.d,s=o.e,d=e.e,b=d.a,g=d.b,p=d.c,_=d.d,y=_.a,k=_.b,w=_.c,j=_.d,B=_.e,F=d.e;return V(Ae,0,k,w,V(Ae,1,n,t,V(Ae,0,i,f,$,s),j),V(Ae,1,g,p,B,F))}else{var r=e.a,n=e.b,t=e.c,H=e.d,c=H.a,i=H.b,f=H.c,$=H.d,s=H.e,N=e.e,b=N.a,g=N.b,p=N.c,_=N.d,F=N.e;return V(Ae,1,n,t,V(Ae,0,i,f,$,s),V(Ae,0,g,p,_,F))}else return e},Ib=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,f=o.c,$=o.d,s=$.a,d=$.b,b=$.c,g=$.d,p=$.e,_=o.e,y=e.e,k=y.a,w=y.b,j=y.c,B=y.d,F=y.e;return V(Ae,0,i,f,V(Ae,1,d,b,g,p),V(Ae,1,n,t,_,V(Ae,0,w,j,B,F)))}else{var r=e.a,n=e.b,t=e.c,H=e.d,c=H.a,i=H.b,f=H.c,N=H.d,_=H.e,O=e.e,k=O.a,w=O.b,j=O.c,B=O.d,F=O.e;return V(Ae,1,n,t,V(Ae,0,i,f,N,_),V(Ae,0,w,j,B,F))}else return e},l_=Mt(function(e,r,n,t,o,c,i){if(c.$===-1&&!c.a){var f=c.a,$=c.b,s=c.c,d=c.d,b=c.e;return V(Ae,n,$,s,d,V(Ae,0,t,o,b,i))}else{e:for(;;)if(i.$===-1&&i.a===1)if(i.d.$===-1)if(i.d.a===1){var g=i.a,p=i.d,_=p.a;return Ib(r)}else break e;else{var y=i.a,k=i.d;return Ib(r)}else break e;return r}}),Tu=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.d,f=e.e;if(c===1)if(i.$===-1&&!i.a){var $=i.a;return V(Ae,r,n,t,Tu(o),f)}else{var s=Ab(e);if(s.$===-1){var d=s.a,b=s.b,g=s.c,p=s.d,_=s.e;return V(ic,d,b,g,Tu(p),_)}else return En}else return V(Ae,r,n,t,Tu(o),f)}else return En},Bi=l(function(e,r){if(r.$===-2)return En;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(oe(e,t)<0)if(c.$===-1&&c.a===1){var f=c.a,$=c.d;if($.$===-1&&!$.a){var s=$.a;return V(Ae,n,t,o,a(Bi,e,c),i)}else{var d=Ab(r);if(d.$===-1){var b=d.a,g=d.b,p=d.c,_=d.d,y=d.e;return V(ic,b,g,p,a(Bi,e,_),y)}else return En}}else return V(Ae,n,t,o,a(Bi,e,c),i);else return a(v_,e,Gr(l_,e,r,n,t,o,c,i))}),v_=l(function(e,r){if(r.$===-1){var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(ie(e,t)){var f=$_(i);if(f.$===-1){var $=f.b,s=f.c;return V(ic,n,$,s,c,Tu(i))}else return En}else return V(ic,n,t,o,c,a(Bi,e,i))}else return En}),Bb=l(function(e,r){var n=a(Bi,e,r);if(n.$===-1&&!n.a){var t=n.a,o=n.b,c=n.c,i=n.d,f=n.e;return V(Ae,1,o,c,i,f)}else{var $=n;return $}}),Et=x(function(e,r,n){var t=r(a(Ke,e,n));if(t.$)return a(Bb,e,n);var o=t.a;return v(Sr,e,o,n)}),s_=function(e){return a(Et,e,a(Ie,te(0),a(Ie,Od(1),D)))},d_=l(function(e,r){return v(go,x(function(n,t,o){return a(e,n,t)?v(Sr,n,t,o):o}),Re,r)}),b_=function(e){if(e.b){var r=du(a(d_,l(function(n,t){return t>1}),v(se,l(function(n,t){return a(s_,n.by,t)}),Re,e)));return r.b?D(f_(r)):M}else return D(u_)},m_=function(e){return e?"true":"false"},Fl=l(function(e,r){return r.b?v(Xa,A,r,e):e}),gn=function(e){return v(Xa,Fl,C,e)},yn=l(function(e,r){return gn(a(Y,e,r))}),_o=4294967295>>>32-ln,HU=u9,Vi=J8,p_=x(function(e,r,n){e:for(;;){var t=_o&r>>>e,o=a(Vi,t,n);if(o.$){var s=o.a;return a(Vi,_o&r,s)}else{var c=o.a,i=e-ln,f=r,$=c;e=i,r=f,n=$;continue e}}}),Vb=function(e){return e>>>5<<5},$a=l(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d;return e<0||oe(e,n)>-1?M:oe(e,Vb(n))>-1?D(a(Vi,_o&e,c)):D(v(p_,t,e,o))}),Hb=function(e){var r=e;return a(te,r.nZ,a($a,a(Qr,r.cx,r.dc+r.aQ),r.er))},Co=function(e){if(e.$){var n=e.a;return a(te,n.nZ,a($a,n.aQ,n.er))}else{var r=e.a;return Hb(r)}},Mu=function(e){var r=e.b;return r},bc=function(e){var r=e.b;return Co(r).b},mc=function(e){return e.m3},_n=function(e){return e.e},h_=function(e){return e.S},G=Ks,Rb=function(e){var r=e;return a(Y,function(n){var t=n.a,o=n.b;return h(r.ri(t)+"Off",G(o.dY)+(","+G(o.fd)))},r.cK)},g_=function(e){return Rb(e.f)},y_=function(e){return e?"landscape":"portrait"},__=function(e){var r=e;return r.cA.sc+("|"+y_(r.dF))},Ut=l(function(e,r){return v(se,H6(e),I6(0),r)}),Fb=function(e){return a(Jd,0,a(Ut,function(r){var n=r.a,t=r.b;return a(Ut,Rr,u([n,t]))},e))},zu=function(e){return"play:"+e},Eb=function(e){switch(e){case 0:return"hudConfigurations";case 1:return"hudInputs";case 2:return"hudFpsMeter";case 3:return"hudProfiler";case 4:return"hudTape";case 5:return"hudPalette";case 6:return"hudCommandPalette";default:return"hudDevice"}},El=function(e){var r=e;return r.aK},RU=0,FU=7,EU=2,UU=1,qU=5,xr=l(function(e,r){return v(Xa,l(function(n,t){return e(n)?a(A,n,t):t}),C,r)}),Du=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var o=e,c=t;e=o,r=c;continue e}else return!1}),Hi=l(function(e,r){return a(Du,function(n){return ie(n,e)},r)}),Ub=function(e){return a(xr,function(r){return a(Hi,r,e)},u([0,1,2,5,7]))},C_=function(e){return a(zr,",",a(Y,Eb,Ub(El(e.f))))},Gn=l(function(e,r){return"play:"+(r+(":"+e))}),P_=function(e){return e.bE},qb=function(e){var r=e;return r.gD},S_=function(e){var r=e;return r.cV.dG.sc},Au=function(e){var r=e;return r.dz},k_=function(e){var r=e;return r.c3.dG.sc},Nb=function(e){switch(e){case 0:return"Red";case 1:return"Green";case 2:return"Yellow";case 3:return"Blue";case 4:return"Magenta";default:return"Cyan"}},x_=function(e){return a(zr,"|",u([S_(e),k_(e),Au(e)?"1":"0",Nb(qb(e))]))},Gb=function(e){switch(e){case 0:return"User";case 1:return"Author";default:return"Developer"}},Yb=l(function(e,r){var n=bc(r.t1),t=a(yn,function(o){var c=a(Ke,o.by,n.cI);if(c.$)return C;var i=c.a;return Rb(i.hI)},e.cI);return u([h(zu("hud-panel-layout"),Fb(g_(r.rf))),h(a(Gn,r.sI,"panel-layout"),Fb(t)),h(zu("mode"),Gb(mc(r.rf))),h(a(Gn,r.sI,"theme"),x_(_n(r.rf))),h(a(Gn,r.sI,"device"),__(h_(r.rf))),h(a(Gn,r.sI,"hud-open-panels"),C_(r.rf)),h(a(Gn,r.sI,"tape-record-from-start"),m_(P_(r.rf)))])}),NU=ne,GU=1,YU=0,WU=2,Ul=u([{aD:0,sc:"iPhone SE",Z:{he:667,$8:375}},{aD:0,sc:"iPhone 12 Pro",Z:{he:844,$8:390}},{aD:0,sc:"iPhone 14 Pro Max",Z:{he:932,$8:430}},{aD:0,sc:"Pixel 7",Z:{he:915,$8:412}},{aD:0,sc:"Samsung Galaxy S20 Ultra",Z:{he:915,$8:412}},{aD:0,sc:"Samsung Galaxy S8+",Z:{he:740,$8:360}},{aD:1,sc:"Galaxy Z Fold 5",Z:{he:882,$8:344}},{aD:1,sc:"Surface Duo",Z:{he:720,$8:540}},{aD:2,sc:"iPad Mini",Z:{he:1024,$8:768}},{aD:2,sc:"iPad Air",Z:{he:1180,$8:820}},{aD:2,sc:"iPad Pro",Z:{he:1366,$8:1024}},{aD:2,sc:"Surface Pro 7",Z:{he:1368,$8:912}}]),j_=function(e){return kr(a(xr,function(r){return ie(r.sc,e)},Ul))},OU=ne,JU=ne,Wb=14,w_=8,L_=function(e){return e===" "||e==="	"||e==="/"||e==="."||e===":"||e===";"||e===","||e==="|"||e==="\\"||e==="_"||e==="-"||e==="*"},T_=function(e){var r=it(e);return r>=97&&r<=122},M_=function(e){var r=it(e);return r>=65&&r<=90},z_=x(function(e,r,n){e:for(;;)if(r.b){var t=r.a,o=r.b,c=L_(e)?Wb:T_(e)&&M_(t)?w_:0,i=t,f=o,$=a(A,c,n);e=i,r=f,n=$;continue e}else return He(n)}),D_=function(e){if(e.b){var r=e.a,n=e.b;return a(A,Wb,v(z_,r,n,C))}else return C},ql=$6,A_=function(e){var r=Si(e),n=a(Y,ql,r);return{k0:D_(r),jk:n}},Iu=l(function(e,r){return{aR:r,ex:M,aU:!1,hL:a(Y,function(n){return h(n,A_(e(n)))},r),bT:0,hZ:"",ax:0}}),Nl=x(function(e,r,n){if(r.$===1)return M;var t=r.a;if(n.$===1)return M;var o=n.a;return D(a(e,t,o))}),ZU=1,QU=0,I_=function(e){switch(e){case"portrait":return D(0);case"landscape":return D(1);default:return M}},B_=x(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b;if(r(t))return D(e);var c=e+1,i=r,f=o;e=c,r=i,n=f;continue e}else return M}),Bu=B_(0),Vu=function(e){return Bu(Ya(e))},Ri=l(function(e,r){var n=r;return I(n,{ex:e,ax:a(te,n.ax,a(Xr,function(t){return a(Vu,t,n.aR)},e))})}),V_=function(e){var r=a($n,"|",e);if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a;return v(Nl,l(function(c,i){return{cA:c,dF:i,bg:a(Ri,D(c),a(Iu,function(f){return f.sc},Ul))}}),j_(n),I_(o))}else return M},H_=z6,Fi=l(function(e,r){return h(e,r)}),Se=p6,Ob=function(e){return a(tb,C,a(H_,ur(v(Nn,Fi,a(Un,0,Se),a(Un,1,Se))),e))},XU=ne,Hu=Re,Jb=l(function(e,r){var n=r;return v(Sr,e,0,n)}),Ei=l(function(e,r){var n=a(Ke,e,r);return!n.$}),Zb=l(function(e,r){var n=r;return a(Ei,e,n)}),R_=function(e){return He(v(se,l(function(r,n){var t=n.a,o=n.b;return a(Zb,r,t)?h(t,o):h(a(Jb,r,t),a(A,r,o))}),h(Hu,C),e).b)},F_=function(e){return{$:0,a:e}},E_=3600,U_=F_(E_),KU=1,eq=2,q_=function(e){switch(e){case"User":return D(0);case"Author":return D(1);case"Developer":return D(2);default:return M}},Gl=function(e){return{$:4,a:e}},Qb=function(e){return{$:3,a:e}},Xb=function(e){return{$:5,a:e}},Kb=function(e){return{$:1,a:e}},rq=ne,qt=l(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){var n=r.a,t=r.b,o=e-1,c=t;e=o,r=c;continue e}else return r}}),Ru=function(e){var r=e;return Q(He(r.n),a(A,r.fr,r.p))},Fu=l(function(e,r){var n=r,t=Ru(n),o=a(Qr,Pr(t),e),c=a(qt,o,t);if(c.b){var i=c.a,f=c.b;return{p:f,n:He(a(qn,o,t)),fr:i}}else return n}),Nt=c6,N_=l(function(e,r){var n=l(function(p,_){var y=p.a,k=p.b;return oe(_,y)>-1&&oe(_,k)<1});switch(e.$){case 0:var t=e.a;return a(Xr,function(p){return a(n,t,p)?D(a(jl,t,p)):M},Nt(r));case 2:var t=e.a;return a(Xr,function(p){return a(n,t,p)?D(a(wl,t,p)):M},zi(r));case 4:switch(r){case"true":return D(Gl(!0));case"false":return D(Gl(!1));default:return M}case 1:return D(Kb(r));case 3:var o=a(Y,Nt,a($n,",",r));if(o.b&&!o.a.$&&o.b.b&&!o.b.a.$&&o.b.b.b&&!o.b.b.a.$&&o.b.b.b.b&&!o.b.b.b.a.$&&!o.b.b.b.b.b){var c=o.a.a,i=o.b,f=i.a.a,$=i.b,s=$.a.a,d=$.b,b=d.a.a;return D(Qb(P(U,c,f,s,b)))}else return M;default:var g=e.a;return a(de,function(p){return Xb(a(Fu,p,g))},a(Bu,Ya(r),Ru(g)))}}),e2=l(function(e,r){var n=dn(e);return a(Y,function(t){return I(t,{a8:a(Y,function(o){var c=o.a,i=o.b;return h(c,(function(){var f=a(Ke,c,n);if(f.$)return i;var $=f.a;return a(te,i,a(N_,i,$))})())},t.a8)})},r)}),Gt=l(function(e,r){var n=a(xr,function(c){var i=c.a;return ie(i,e)},r);if(n.b){var t=n.a,o=t.b;return D(o)}else return M}),aq=ne,G_=x(function(e,r,n){var t=e(r);if(t.$)return n;var o=t.a;return a(A,o,n)}),jr=l(function(e,r){return v(Xa,G_(e),C,r)}),r2=l(function(e,r){return e<1?r:v(Za,0,-e,r)}),a2=n6,Y_=l(function(e,r){return a(a2,"Off",r)?e(a(r2,Ja("Off"),r)):M}),W_=function(e){var r=a($n,",",e);if(r.b&&r.b.b&&!r.b.b.b){var n=r.a,t=r.b,o=t.a;return v(Nl,l(function(c,i){return{dY:c,fd:i}}),Nt(n),Nt(o))}else return M},n2=l(function(e,r){var n=r,t=a(jr,function(o){var c=o.a,i=o.b;return a(Xr,function(f){return a(de,Fi(f),W_(i))},a(Y_,n.rh,c))},e);return I(n,{cK:t})}),O_=l(function(e,r){return I(r,{f:a(n2,e,r.f)})}),nq=6,tq=3,oq=4,t2=function(e){switch(e){case"hudConfigurations":return D(0);case"hudInputs":return D(1);case"hudFpsMeter":return D(2);case"hudProfiler":return D(3);case"hudTape":return D(4);case"hudPalette":return D(5);case"hudCommandPalette":return D(6);case"hudDevice":return D(7);default:return M}},J_=function(e){return{$:1,a:e}},Yl=J_,Yt=l(function(e,r){var n=r;switch(e.$){case 0:var t=e.a;return I(n,{aK:a(Hi,t,n.aK)?a(xr,mu(t),n.aK):a(A,t,n.aK)});case 1:var t=e.a;return I(n,{aK:a(A,t,a(xr,mu(t),n.aK))});case 2:var t=e.a;return I(n,{aK:a(xr,mu(t),n.aK)});default:var t=e.a;return I(n,{cK:a(xr,function(o){var c=o.a;return!ie(c,t)},n.cK)})}}),Z_=l(function(e,r){var n=Ub(a(jr,t2,a($n,",",e)));return I(r,{f:v(se,a(Ie,Yl,Yt),r.f,n)})}),cq=ne,Wl={I:Re},iq=3,fq=4,uq=2,$q=1,lq=5,vq=0,o2=function(e){switch(e){case"windows":return 0;case"mac":return 1;case"linux":return 2;case"android":return 3;case"ios":return 4;default:return 5}},Q_=l(function(e,r){return{oN:{oX:!1,qL:M},aC:Wl,pj:C,gN:0,b2:e,p$:r.p$,qb:r.qb,iN:r.iN,iQ:r.iQ,lL:!0,qN:r.qN,qO:r.qO,fN:"play",mq:r.mq,mU:Re,m3:_l,sF:Hu,sG:o2(r.sG),sK:{li:0,lj:0,eF:0,ib:0,oE:0,oF:0},ny:r.ny,s6:r.s6,f9:r.f9,to:r.to,tu:r.tu,ub:r.ub,oG:!0,uA:r.uA,oM:!1}}),c2={aD:0,sc:"iPhone 12 Pro",Z:{he:844,$8:390}},X_={cA:c2,dF:0,bg:a(Ri,D(c2),a(Iu,function(e){return e.sc},Ul))},K_=function(e){return e.h$+(": "+e.jb)},sq=ne,dq=ne,Eu={bx:C,bD:C,bj:0,bk:0},eC=Eu,rC={jx:0,f7:eC},i2={$:0},aC=i2,Ol=function(e){return{ee:M,rh:e.rh,ri:e.ri,cK:C,aK:C}},bq=ne,mq=3,pq=1,hq=4,gq=0,yq=2,f2=h(0,u([1,2,3,4,5])),nC=function(e){var r=e.a,n=e.b;return{p:n,n:C,fr:r}},Po=function(e){var r=e;return r.fr},u2=function(e){var r=e,n=r.p;if(n.b){var t=n.a,o=n.b;return{p:o,n:a(A,r.fr,r.n),fr:t}}else return r},$2=function(e){return a(Fu,0,e)},Je=function(e){return!e.b},tC=function(e){var r=e;return Je(r.p)},l2=l(function(e,r){var n=function(t){e:for(;;){if(ie(Po(t),e))return D(t);if(tC(t))return M;var o=u2(t);t=o;continue e}};return n($2(r))}),oC=function(e){var r=nC(f2);return a(te,r,a(l2,e,r))},Jl=fb,Yn=function(e){var r=e;return r.dz?r.c3:r.cV},Zl=function(e){var r=Yn(e).dG.sc,n=Jl,t=n.a,o=n.b;return kr(a(xr,function(c){return ie(c.sc,r)},a(A,t,o)))},cC=function(e){var r=Jl,n=r.a,t=r.b;return{cQ:oC(qb(e)),bg:a(Ri,Zl(e),a(Iu,function(o){return o.sc},a(A,n,t)))}},Ui={$:0},_q=ne,iC=Ui,fC=function(e){var r=e.oN,n=e.rr,t=e.rq,o=e.hg,c=e.rs,i=e.ga;return{oN:{P:a(Iu,K_,r),qL:M},d6:M,S:t,f:Ol({rh:t2,ri:Eb}),c$:rC,m3:o,aL:aC,bE:n,R:cC(c),e:c,cN:iC,oM:!1}},qi={$:0},Ma=l(function(e,r){return{$:0,a:e,b:r}}),pc=function(e){return{$:0,a:e}},Cq=ne,v2=l(function(e,r){return a(yl,e,function(n){return r})}),s2=l(function(e,r){var n=a(je,1,e);return{cx:n,a9:1,aQ:0,er:a(v2,n,r),nZ:r,dc:0}}),d2=l(function(e,r){return pc(a(s2,e,r))}),Ni=function(e){return{$:1,a:e}},b2=function(e){return Ni({aQ:0,er:a(v2,1,e),nZ:e})},uC=l(function(e,r){if(e.$)return b2(r);var n=e.a;return a(d2,n,r)}),$C=x(function(e,r,n){return a(Ma,qi,a(uC,e,h(r,n)))}),lC=l(function(e,r){return a(Ma,qi,a(d2,1,h(e,r)))}),So=l(function(e,r){return{$:1,a:e,b:r}}),vC=x(function(e,r,n){var t=n.a,o=n.b;return h(e(t),r(o))}),sC=function(e){var r=l(function(n,t){var o=n.a,c=n.b,i=t.a,f=t.b;return h(a(A,o,i),a(A,c,f))});return v(Xa,r,h(C,C),e)},m2=function(e){switch(e.$){case 0:return h(C,fe);case 1:var r=e.a;return v(vC,gn,fa,sC(a(Y,m2,r)));case 2:var n=e.a;return h(C,n);default:var t=e.a;return h(u([t]),fe)}},dC=l(function(e,r){return I(r,{a8:e(r.a8)})}),ko=l(function(e,r){var n=r.a,t=r.b;return h(n,e(t))}),bC=x(function(e,r,n){return a(te,NaN,Nt(a(e,r,n)))}),mC=l(function(e,r){var n=a(Du,function(t){return t!=="0"&&t!=="."},Si(r));return Q(e&&n?"-":"",r)}),pC=u6,p2=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ci(n);if(t.$===1)return"01";var o=t.a;return a(pu,"0",p2(o))}else{var c=it(r);return c>=48&&c<57?a(pu,pC(c+1),n):"0"}},hc=D9,h2=H9,Uu=x(function(e,r,n){return Q(n,a(fc,e-Ja(n),cc(r)))}),g2=Y9,y2=function(e){var r=a($n,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a;return h(n,o)}else{var n=r.a;return h(n,"0")}else return h("0","0")},xo=l(function(e,r){var n=r.a,t=r.b;return h(e(n),t)}),hC=function(e){var r=a($n,"e",G(xe(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a,c=a(te,0,zi(a(Fn,"+",o)?a(Qa,1,o):o)),i=y2(n),f=i.a,$=i.b,s=Q(f,$),d=c<0?a(te,"0",a(de,function(b){var g=b.a,p=b.b;return g+("."+p)},a(de,xo(cc),Ci(Q(a(fc,xe(c),"0"),s))))):v(Uu,c+1,"0",s);return Q(e<0?"-":"",d)}else{var n=r.a;return Q(e<0?"-":"",n)}else return""},gC=x(function(e,r,n){if(hc(n)||h2(n))return G(n);var t=n<0,o=y2(hC(xe(n))),c=o.a,i=o.b,f=Ja(c)+r,$=Q(a(fc,-f+1,"0"),v(Uu,f,"0",Q(c,i))),s=Ja($),d=a(je,1,f),b=a(e,t,v(Za,d,s,$)),g=v(Za,0,d,$),p=b?g2(a(te,"1",a(de,p2,Ci(g2(g))))):g,_=Ja(p),y=p==="0"?p:r<=0?Q(p,a(fc,xe(r),"0")):oe(r,Ja(i))<0?v(Za,0,_-r,p)+("."+v(Za,_-r,_,p)):Q(c+".",v(Uu,r,"0",i));return a(mC,t,y)}),gc=gC(l(function(e,r){var n=Ci(r);if(n.$===1)return!1;if(n.a.a==="5")if(n.a.b===""){var t=n.a;return!e}else{var o=n.a;return!0}else{var c=n.a,i=c.a;return(function(f){return f>53&&e||f>=53&&!e})(it(i))}})),yC=bC(gc),_C=x(function(e,r,n){var t=a(bu,10,xe(r-e)),o=t<0?3:t<1?2:t<2?1:0;return a(yC,o,n)}),yc=x(function(e,r,n){return a(Y,function(t){return e(t)?r(t):t},n)}),CC=function(e){switch(e.$){case 2:var n=e.a,r=e.b;return a(yc,a(Ie,vn,Ya(n)),ko(function(o){if(o.$===2){var c=o.a,i=c.a,f=c.b;return a(wl,h(i,f),v(mr,i,f,r))}else return o}));case 1:var n=e.a,r=e.b;return a(yc,a(Ie,vn,Ya(n)),ko(function(o){return o.$===1?Kb(r):o}));case 0:var n=e.a,r=e.b;return a(yc,a(Ie,vn,Ya(n)),ko(function(o){if(o.$)return o;var c=o.a,i=c.a,f=c.b;return a(jl,h(i,f),v(_C,i,f,v(mr,i,f,r)))}));case 3:var n=e.a,r=e.b;return a(yc,a(Ie,vn,Ya(n)),ko(function(o){return o.$===3?Qb(r):o}));case 4:var n=e.a,r=e.b;return a(yc,a(Ie,vn,Ya(n)),ko(function(o){return o.$===4?Gl(r):o}));default:var n=e.a,t=e.b;return a(yc,a(Ie,vn,Ya(n)),ko(function(o){if(o.$===5){var c=o.a;return Xb(a(te,c,a(de,function(i){return a(Fu,i,c)},a(Bu,Ya(t),Ru(c)))))}else return o}))}},PC=function(e){return dC(CC(e))},_2=l(function(e,r){return a(Y,PC(e),r)}),Ql=x(function(e,r,n){var t=m2(r),o=t.a,c=t.b,i=function(f){return v(se,_2,f,o)};return{gO:c,cH:e?i(n.cH):n.cH,i5:i(n.i5)}}),Ar=l(function(e,r){var n=r;return a(Hi,e,n.aK)}),SC=function(e){return a(Ar,5,e.f)||a(Ar,6,e.f)||a(Ar,7,e.f)},C2=l(function(e,r){return r.$8>0&&r.he>0?r:{he:e.he,eF:0,sN:r.sN,ib:0,$8:e.$8}}),kC={lt:!1,iP:!1,lv:0,lw:0,ly:C,i7:!1,m6:!1,nR:!1,nS:!1,kC:!1,dY:0,fd:0},xC=function(e){var r=e.oh;if(r.$===1)return kC;var n=r.a,t=n.ib+.5*n.he-.5*e.uC.he,o=.5*e.uC.$8-n.eF-.5*n.$8,c=e.aa.i7?e.cq.cU:e.cq.hf,i=ie(c,D(e.fN)),f=ie(e.cq.cU,D(e.fN));return{lt:f&&e.aa.lt,iP:f&&e.aa.iP,lv:i?e.aa.lv:0,lw:i?e.aa.lw:0,ly:f?e.aa.ly:C,i7:f&&e.aa.i7,m6:i&&e.aa.m6,nR:f&&e.aa.nR,nS:f&&e.aa.nS,kC:f&&e.aa.kC,dY:e.aa.dY+o,fd:e.aa.fd+t}},jC={oV:!1,pY:!1,iP:!1,qk:C,eF:!1,rX:!1,s2:C,j4:!1,tA:!1,kC:!1},wC={p7:0,p8:0,qv:C,sT:0,sU:M},Gi=function(e){var r=kr(a(xr,function($){return ie($.sN,e.by)},e.ru.sM)),n=ie(e.aH,D(e.by)),t=n?e.ru.mq:jC,o=n?e.ru.uA:wC,c=a(de,C2(e.ru.f9),r),i=(function(){if(c.$)return e.ru.f9;var $=c.a;return{he:$.he,$8:$.$8}})(),f=xC({fN:e.by,cq:e.cq,oh:c,aa:e.ru.ny,uC:e.ru.f9});return{oN:(function(){var $=e.rf;if($.$===1)return{oX:!1,qL:M};var s=$.a;return{oX:SC(s),qL:s.oN.qL}})(),aC:e.aM,pj:e.ru.pj,gN:e.gN,b2:e.b2,p$:e.ru.p$,qb:e.ru.qb,iN:e.ru.iN,iQ:e.ru.iQ,lL:n,qN:e.ru.qN,qO:e.ru.qO,fN:e.by,mq:t,mU:e.mU,m3:e.m3,sF:e.sF,sG:o2(e.ru.sG),sK:e.ru.sK,ny:f,s6:e.ru.s6,f9:i,to:e.ru.to,tu:e.ru.tu,ub:e.ru.ub,oG:e.oG,uA:o,oM:e.oM}},LC={cU:M,hf:M},TC=l(function(e,r){if(e.$)return Ol(r);var n=e.a;return a(n2,n,Ol(r))}),MC=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){var d=a(Ke,$,e);if(d.$)return s;var b=d.a,g=a(e2,n,b.rp),p=Gi({gN:0,b2:g,aH:i,rf:M,by:b.by,ru:t,mU:Re,m3:c,sF:Hu,aM:Wl,cq:LC,oG:!1,oM:!1}),_=v(b.ro,p,r,o),y=_.a,k=_.b,w=_.c,j=v(Ql,ie(f,D(b.by)),k,{cH:s.b8,i5:g}),B={aC:b.aC,fi:!1,gN:0,b2:j.i5,gX:Re,by:b.by,mU:Re,bz:y,hI:a(TC,D(Ob(a(te,"",a(Gt,a(Gn,t.sI,"panel-layout"),t.sQ)))),{rh:D,ri:ne}),eV:b.eV,aM:Wl,oG:!1};return I(s,{cz:a(A,a(dc,So(b.by),j.gO),s.cz),cE:Q(s.cE,w),b8:j.cH,cI:v(Sr,$,B,s.cI)})}}}}}}}}}},zC=l(function(e,r){return a(Ei,e.by,r)?r:v(Sr,e.by,e,r)}),P2=function(e){return I(e,{f:a(Yt,Yl(4),e.f)})},DC=At("registerPanes",Ut(Rr)),S2=function(e){return{$:1,a:e}},k2="play-device-picker",qu={fq:k2,u:S2},Ca={$:11},rr=x(function(e,r,n){return e(r(n))}),AC=Y6,ut=l(function(e,r){return Db(a(AC,a(rr,a(rr,_a,e),La),a(ua,a(rr,a(rr,_a,e),Jr),r)))}),Wt=32,x2=l(function(e,r){return a(je,0,Wt*r-e.eL/2+Wt/2)}),jo=function(e){return e.fq+"-list"},wo=Q7,j2=x(function(e,r,n){var t=n,o=a(Xr,function(f){return a(Vu,f,t.aR)},r);if(o.$)return h(t,fe);var c=o.a,i=a(x2,e,c);return h(I(t,{ex:r,bT:i,ax:c}),a(ut,function(f){return e.u(Ca)},v(wo,jo(e),0,i)))}),IC=function(e){return{$:0,a:e}},_c=function(e){return{fq:e.fq,eL:320,jV:"Search devices\u2026",u:a(rr,e.u,IC),$8:{r1:320,ux:26}}},BC=l(function(e,r){var n=r,t=v(j2,_c(e),D(n.cA),n.bg),o=t.a,c=t.b;return h(I(n,{bg:o}),c)}),VC=function(e){return{$:0,a:e}},Cc=function(e){var r=e.fq,n=e.u;return{fq:r,eL:320,jV:"Search palettes\u2026",u:a(rr,n,VC),$8:{r1:320,ux:26}}},Xl=x(function(e,r,n){var t=n,o=v(j2,Cc(e),Zl(r),t.bg),c=o.a,i=o.b;return h(I(t,{bg:c}),i)}),w2=function(e){return{$:0,a:e}},L2="play-theme-picker",Pc={fq:L2,u:w2},HC=function(e){var r=a(Ar,5,e.f)?v(Xl,Pc,e.e,e.R):h(e.R,fe),n=r.a,t=r.b,o=a(Ar,7,e.f)?a(BC,qu,e.S):h(e.S,fe),c=o.a,i=o.b;return h(I(e,{S:c,R:n}),fa(u([t,i])))},Kl={$:1},RC=function(e){var r=e;return r.cx},T2=function(e){if(e.$)return b2(Co(e));var r=e.a;return pc(a(s2,RC(r),Hb(r)))},M2=function(e){var r=e.b;return a(Ma,Kl,T2(r))},FC=function(e){switch(e){case"Red":return D(0);case"Green":return D(1);case"Yellow":return D(2);case"Blue":return D(3);case"Magenta":return D(4);case"Cyan":return D(5);default:return M}},z2=function(e){var r=Jl,n=r.a,t=r.b;return a(Du,function(o){return ie(o.sc,e)},a(A,n,t))},EC=function(e){switch(e){case"1":return D(!0);case"0":return D(!1);default:return M}},e1=l(function(e,r){var n=r;return I(n,{gD:e,cV:a(Pi,e,n.cV.dG),c3:a(Pi,e,n.c3.dG)})}),r1=l(function(e,r){var n=r,t=a(Pi,n.gD,e);return e.ry?I(n,{cV:t,dz:!1}):I(n,{c3:t,dz:!0})}),D2=function(e){return r1(kl(e))},a1=function(e){var r=e;return I(r,{dz:!r.dz})},UC=l(function(e,r){return ie(Au(r),e)?r:a1(r)}),qC=function(e){var r=a($n,"|",e);if(r.b&&r.b.b&&r.b.b.b&&r.b.b.b.b&&!r.b.b.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,f=c.b,$=f.a;return z2(n)&&z2(o)?v(Nl,l(function(s,d){return a(UC,d,a(e1,s,a(D2,o,a(D2,n,xl))))}),FC($),EC(i)):M}else return M},NC=l(function(e,r){var n=a(te,C,r.ru.tu),t=a(te,Re,a(de,dn,r.ru.tu)),o=e.ey(t),c=a(Y,function(Z){return Z.by},e.cI),i=v(se,zC,Re,e.cI),f=a(Ei,"embed",t),$=R_(c),s=(function(){if($.b&&!$.b.b){var Z=$.a;return D(Z)}else return M})(),d=a(te,"",a(Gt,a(Gn,r.ru.sI,"hud-open-panels"),r.ru.sQ)),b=(function(){if(f){var Z=c_;return I(Z,{e:e.rf.e})}else return e.rf})(),g=a(te,b.hg,a(Xr,q_,a(Gt,zu("mode"),r.ru.sQ))),p=a(te,b.bE,a(Xr,i_,a(Gt,a(Gn,r.ru.sI,"tape-record-from-start"),r.ru.sQ))),_=a(te,b.e,a(Xr,qC,a(Gt,a(Gn,r.ru.sI,"theme"),r.ru.sQ))),y=a(te,X_,a(Xr,V_,a(Gt,a(Gn,r.ru.sI,"device"),r.ru.sQ))),k=fC({oN:e.oN,rq:y,hg:g,rr:p,rs:_,ga:b}),w=a(Z_,d,a(O_,Ob(a(te,"",a(Gt,zu("hud-panel-layout"),r.ru.sQ))),k)),j=p&&b.hc?P2(w):w,B=a(e2,n,e.rp),F=v(se,zt(MC,i,o,n,r.ru,_,g,s,kr($)),{cz:C,cE:C,b8:B,cI:Re},$),H=a(Q_,F.b8,r.ru),N=v(Lu,e,F.cE,o),O=N.a,ee=N.b,ue={b2:F.b8,ru:r.ru,cI:F.cI,Q:O,nt:C,nu:C},ve=(function(){if(b.hc){var Z=v($C,U_,H,ue);return p?M2(Z):Z}else return a(lC,H,ue)})(),ye=HC(j),ze=ye.a,Ve=ye.b,We={gT:b_(e.cI),ef:b,aH:s,rf:ze,aT:$,fP:C,sI:r.ru.sI,t1:ve};return h(I(We,{fP:a(Yb,e,We)}),fa(a(A,a(dc,wu,Ve),a(A,DC($),a(A,ee,F.cz)))))}),A2=function(e){return{$:10,a:e}},n1={$:1},GC=function(e){return{$:0,a:e}},I2={$:11},YC=l(function(e,r){return{$:4,a:e,b:r}}),WC=l(function(e,r){return{$:5,a:e,b:r}}),OC={$:6},Sc=w6,JC=P6,kc=function(e){return a(Ge,dn,JC(e))},Nu=a(Ie,Ga,a(Ie,jr(function(e){var r=e.a,n=e.b,t=Nt(r);if(t.$)return M;var o=t.a;return D(h(o,n))}),dn)),ZC=J(function(e,r,n,t){return{q4:t,uy:n,dY:e,fd:r}}),xc=L6,QC=V(xc,ZC,a(S,"x",q),a(S,"y",q),a(S,"w",q),a(S,"h",q)),XC=kc(QC),t1=function(e){return{$:1,a:e}},Pq=3,jc={$:2},B2=function(e){switch(e){case 0:return"texture";case 1:return"sound";case 2:return"font";default:return"atlas"}},Ot=l(function(e,r){return B2(e)+(":"+r)}),KC=l(function(e,r){var n=r;return I(n,{I:v(Et,a(Ot,3,e.by),de(function(t){return t1({er:e.er,aV:e.aV,aq:e.aq,H:jc})}),n.I)})}),o1=m6,eP=function(e){return P(Sc,x(function(r,n,t){return KC({er:n,by:e,aV:r,aq:t})}),a(Ge,Nu,a(S,"mipImages",kc(o1))),a(Ge,Nu,a(S,"frames",kc(XC))),a(S,"pixelated",ae))},c1=function(e){return mo(u([a(Ge,D,e),re(M)]))},i1=a(Ge,te(""),c1(a(S,"error",Se))),Gu=function(e){return{$:3,a:e}},V2=function(e){return{$:3,a:e}},f1=function(e){return{$:2,a:e}},u1=function(e){return{$:0,a:e}},rP=l(function(e,r){switch(r.$){case 0:return u1({d2:0,d3:0,fm:M,aV:Re,eO:Re,aq:!1,H:Gu(e)});case 1:return t1({er:Re,aV:Re,aq:!1,H:Gu(e)});case 2:return f1({H:Gu(e)});default:return V2({H:Gu(e)})}}),Sq=2,kq=1,xq=0,$1=function(e){switch(e){case"texture":return D(0);case"sound":return D(1);case"font":return D(2);case"atlas":return D(3);default:return M}},l1=J(function(e,r,n,t){var o=t,c=$1(e);if(c.$)return o;var i=c.a;return I(o,{I:v(Et,a(Ot,i,r),de(rP(n)),o.I)})}),Yu={$:1},aP=function(e){switch(e){case 0:return u1({d2:0,d3:0,fm:M,aV:Re,eO:Re,aq:!1,H:Yu});case 3:return t1({er:Re,aV:Re,aq:!1,H:Yu});case 1:return f1({H:Yu});default:return V2({H:Yu})}},v1=x(function(e,r,n){var t=n,o=$1(e);if(o.$)return t;var c=o.a;return I(t,{I:v(Sr,a(Ot,c,r),aP(c),t.I)})}),nP=l(function(e,r){var n=r;return I(n,{I:v(Et,a(Ot,1,e),de(function(t){return t.$===2?f1({H:jc}):t}),n.I)})}),H2=M6,tP=l(function(e,r){var n=r;return I(n,{I:v(Et,a(Ot,0,e.by),de(function(t){return t.$?t:u1({d2:e.d2,d3:e.d3,fm:e.fm,aV:e.aV,eO:e.eO,aq:e.aq,H:jc})}),n.I)})}),oP=function(e){return Gr(H2,Mr(function(r,n,t,o,c,i){return tP({d2:o,d3:t,fm:i,by:e,aV:r,eO:n,aq:c})}),a(Ge,Nu,a(S,"mipImages",kc(o1))),a(Ge,a(Ie,te(Re),Nu),c1(a(S,"mipUrls",kc(Se)))),a(S,"baseWidth",q),a(S,"baseHeight",q),a(S,"pixelated",ae),c1(a(S,"baseline",q)))},wc=x(function(e,r,n){var t=n,o=$1(e);if(o.$)return t;var c=o.a;return I(t,{I:a(Bb,a(Ot,c,r),t.I)})}),cP=function(e){var r=e.a,n=e.b,t=e.c,o=h(r,n);e:for(;;)switch(o.a){case"texture":switch(o.b){case"loading":return re(a(v1,"texture",t));case"loaded":return oP(t);case"failed":return a(Ge,function(c){return v(l1,"texture",t,c)},i1);case"unloaded":return re(a(wc,"texture",t));case"cancelled":return re(a(wc,"texture",t));default:break e}case"atlas":switch(o.b){case"loading":return re(a(v1,"atlas",t));case"loaded":return eP(t);case"failed":return a(Ge,function(c){return v(l1,"atlas",t,c)},i1);case"unloaded":return re(a(wc,"atlas",t));case"cancelled":return re(a(wc,"atlas",t));default:break e}case"sound":switch(o.b){case"loading":return re(a(v1,"sound",t));case"loaded":return re(nP(t));case"failed":return a(Ge,function(c){return v(l1,"sound",t,c)},i1);case"unloaded":return re(a(wc,"sound",t));case"cancelled":return re(a(wc,"sound",t));default:break e}default:break e}return re(ne)},iP=a(T,cP,P(Sc,x(function(e,r,n){return R(e,r,n)}),a(S,"kind",Se),a(S,"status",Se),a(S,"id",Se))),fP=v(Nn,Fi,a(S,"instanceId",Se),iP),uP=E0,$P=function(e){var r=a(uP,fP,e);if(r.$)return OC;var n=r.a,t=n.a,o=n.b;return a(WC,t,o)},Wn=v6,R2=l(function(e,r){return{$:2,a:e,b:r}}),Lo=od,s1=function(e){return v(se,Jb,Hu,e)},Wu=function(e){return s1(El(e.hI))},jq=0,F2=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),E2=l(function(e,r){return{nv:r,ob:e}}),lP=_a(a(E2,C,Re)),vP=function(e){return e?"w_":"d_"},sP=function(e){var r=e.a,n=e.b;return h(Q(vP(r),n),e)},U2=Z6,dP=Mr(function(e,r,n,t,o,c){var i=x(function(d,b,g){e:for(;;){var p=g.a,_=g.b;if(p.b){var y=p.a,k=y.a,w=y.b,j=p.b;if(oe(k,d)<0){var B=d,F=b,H=h(j,v(e,k,w,_));d=B,b=F,g=H;continue e}else return oe(k,d)>0?h(p,v(n,d,b,_)):h(j,P(r,k,w,b,_))}else return h(p,v(n,d,b,_))}}),f=v(go,i,h(Ga(t),c),o),$=f.a,s=f.b;return v(se,l(function(d,b){var g=d.a,p=d.b;return v(e,g,p,b)}),s,$)}),bP=l(function(e,r){return{lD:r,i9:e}}),d1=n7,mP=x(function(e,r,n){var t=n.a,o=n.b,c=(function(){return t?Bn:$o})();return a(Di,function(i){return h(r,i)},v(G7,c,o,function(i){return a(d1,e,a(bP,r,i))}))}),pP=l(function(e,r){return v(go,Sr,r,e)}),hP=x(function(e,r,n){var t=x(function(b,g,p){var _=p.a,y=p.b,k=p.c;return R(_,y,a(A,v(mP,e,b,g),k))}),o=x(function(b,g,p){var _=p.a,y=p.b,k=p.c;return R(a(A,g,_),y,k)}),c=J(function(b,g,p,_){var y=_.a,k=_.b,w=_.c;return R(y,v(Sr,b,g,k),w)}),i=a(Y,sP,r),f=Cr(dP,o,c,t,n.nv,dn(i),R(C,Re,C)),$=f.a,s=f.b,d=f.c;return a(ua,function(b){return _a(a(E2,i,a(pP,s,dn(b))))},a(ua,function(b){return Ai(d)},Ai(a(Y,U2,$))))}),gP=x(function(e,r,n){var t=r.lD,o=r.i9,c=function(f){var $=f.a,s=f.b,d=s.a,b=s.b,g=s.c;return ie($,o)?a(Y7,g,t):M},i=a(jr,c,n.ob);return a(ua,function(f){return _a(n)},Ai(a(Y,ju(e),i)))}),yP=l(function(e,r){var n=r.a,t=r.b,o=r.c;return v(F2,n,t,a(Ge,e,o))});Wr["Browser.Events"]=Z0(lP,hP,gP,0,yP);var _P=bi("Browser.Events"),b1=x(function(e,r,n){return _P(v(F2,e,r,n))}),Yi=a(b1,0,"keydown"),m1=function(e){return{$:0,a:e}},Wi=l(function(e,r){return v(Xa,S,r,e)}),q2=X9,CP=function(e){var r=q2(e);return r==="INPUT"||r==="TEXTAREA"||r==="SELECT"},PP=l(function(e,r){if(r.$)return!1;var n=r.a;return ie(ab(e),cc(ql(n)))}),SP=l(function(e,r){return a(de,function(n){return n.by},kr(a(xr,function(n){return a(PP,e,n.n0)},r)))}),kP=function(e){return a(T,function(r){if(CP(r.of))return Wn("ignored: text input focused");if(r.pY||r.rX){var n=a(SP,r.i9,e);if(n.$)return Wn("ignored: no matching entry shortcut");var t=n.a;return re(m1(t))}else return Wn("ignored: no Ctrl/Cmd modifier")},V(xc,J(function(r,n,t,o){return{pY:n,i9:r,rX:t,of:o}}),a(S,"key",Se),a(S,"ctrlKey",ae),a(S,"metaKey",ae),a(Wi,u(["target","tagName"]),Se)))},N2=l(function(e,r){return Yi(kP(e))}),wq=ne,xP=function(e){return a(Y,function(r){return{by:r.by,n0:a(de,ne,r.n0)}},e)},Ou=function(e){return e.oM},jP=Le(function(e,r,n,t,o){var c=a(Ke,o,n.cI);if(c.$)return M;var i=c.a,f=Gi({gN:i.gN,b2:i.b2,aH:r.aH,rf:D(r.rf),by:i.by,ru:n.ru,mU:i.mU,m3:mc(r.rf),sF:Wu(i),aM:i.aM,cq:t,oG:i.oG,oM:Ou(r.rf)}),$=P(e.a6.cf,f,n.Q,_n(r.rf),i.bz),s=a(Lo,R2(o),a(N2,xP($),i.hI)),d=a(Lo,So(o),P(e.a6.aA,f,n.Q,_n(r.rf),i.bz));return D(Li(u([d,s])))}),Lc=function(e){var r=e.a;return ie(r,Kl)},G2=function(e){return a(Ar,4,e.f)},wP=X0("assetsResponse",o1),LP=wP(ne),Y2="play-absorbs-pointer-",TP=function(e){return a(Fn,Y2,e)},MP=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(TP(n))return M;if(a(Zb,n,e))return D(n);var o=e,c=t;e=o,r=c;continue e}else return M}),W2=function(e){var r=.5*e.uC.he-e.aa.fd,n=e.aa.dY+.5*e.uC.$8,t=function(i){var f=a(C2,e.uC,i);return oe(n,f.eF)>-1&&oe(n,f.eF+f.$8)<1&&oe(r,f.ib)>-1&&oe(r,f.ib+f.he)<1},o=a(de,function(i){return i.sN},kr(a(xr,t,e.jL))),c=a(MP,e.j1,e.aa.ly);return{cU:c,hf:o}},p1=function(e){return W2({jL:e.ru.sM,j1:s1(du(e.cI)),aa:e.ru.ny,uC:e.ru.f9})},O2=function(e){return{$:6,a:e}},J2=function(e){return{$:3,a:e}},Z2=function(e){return{$:2,a:e}},Q2={$:13},zP=a(T,function(e){return(e.i9==="p"||e.i9==="P")&&e.tA&&(e.pY||e.rX)?re(Q2):Wn("not Cmd+Shift+P")},V(xc,J(function(e,r,n,t){return{pY:n,i9:e,rX:t,tA:r}}),a(S,"key",Se),a(S,"shiftKey",ae),a(S,"ctrlKey",ae),a(S,"metaKey",ae))),DP=function(e){var r=e;return Je(r.hL)},Oi=l(function(e,r){return e.hb&&!DP(r)}),AP={$:4},IP=a(T,function(e){return(e.i9==="i"||e.i9==="I")&&(e.pY||e.rX)?re(AP):Wn("not Ctrl+I")},P(Sc,x(function(e,r,n){return{pY:r,i9:e,rX:n}}),a(S,"key",Se),a(S,"ctrlKey",ae),a(S,"metaKey",ae))),BP={$:12},VP=a(T,function(e){return(e.i9==="m"||e.i9==="M")&&(e.pY||e.rX)?re(BP):Wn("not Ctrl+M")},P(Sc,x(function(e,r,n){return{pY:r,i9:e,rX:n}}),a(S,"key",Se),a(S,"ctrlKey",ae),a(S,"metaKey",ae))),X2=l(function(e,r){return ft}),HP=l(function(e,r){var n=r;return a(X2,_c(e),n.bg)}),RP=function(e){return{$:7,a:e}},FP={$:8},EP=a(b1,0,"mousemove"),UP=a(b1,0,"mouseup"),qP=function(e){if(e.$===3){var r=e.a,n=r.bi;if(n.a.$===1){var t=n.a;return Li(u([EP(v(Nn,l(function(o,c){return RP({fp:o,pK:c})}),a(S,"clientX",q),a(S,"clientY",q))),UP(re(FP))]))}else return ft}else return ft},NP=l(function(e,r){var n=r;return a(X2,Cc(e),n.bg)}),K2=function(e){return{$:4,a:e}},e3=function(e){return{$:1,a:e}},Ju=x(function(e,r,n){return{jy:n,nO:r,ob:e}}),h1=_a(v(Ju,C,M,0)),GP=O7(0),r3=W7(0),a3=Y0,YP=x(function(e,r,n){var t=n.jy,o=n.nO,c=h(o,r);if(c.a.$===1)if(c.b.b){var f=c.a;return a(ua,function(s){return a(ua,function(d){return _a(v(Ju,r,D(s),d))},GP)},a3(a(ua,d1(e),r3)))}else{var i=c.a;return h1}else{if(c.b.b)return _a(v(Ju,r,o,t));var $=c.a.a;return a(ua,function(s){return h1},U2($))}}),Lq=ne,WP=ne,OP=x(function(e,r,n){var t=n.jy,o=n.ob,c=function(i){if(i.$){var f=i.a;return a(ju,e,f(r-t))}else{var f=i.a;return a(ju,e,f(WP(r)))}};return a(ua,function(i){return a(ua,function(f){return _a(v(Ju,o,D(i),r))},Ai(a(Y,c,o)))},a3(a(ua,d1(e),r3)))}),JP=function(e){return{$:0,a:e}},ZP=l(function(e,r){if(r.$){var n=r.a;return e3(a(rr,e,n))}else{var n=r.a;return JP(a(rr,e,n))}});Wr["Browser.AnimationManager"]=Z0(h1,YP,OP,0,ZP);var QP=bi("Browser.AnimationManager"),XP=function(e){return QP(e3(e))},n3=XP,KP=function(e){var r=e;if(r.$===1){var n=r.a,t=n.X;switch(t.$){case 0:return n3(K2);case 2:return n3(K2);case 1:return ft;default:return ft}}else return ft},eS=l(function(e,r){var n=e.u,t=e.ga,o=a(Lo,Z2,KP(r.cN)),c=t.b9?D(a(NP,Pc,r.R)):M,i=t.es?D(a(Lo,J2,qP(r.aL))):M,f=a(Lo,O2,a(N2,C,r.f)),$=t.ds?D(a(HP,qu,r.S)):M,s=t.dt?D(Yi(VP)):M,d=t.b9?D(Yi(IP)):M,b=a(Oi,t,r.oN.P)?D(Yi(zP)):M;return a(Lo,n,Li(a(jr,ne,u([D(o),d,s,c,$,i,D(f),b]))))}),rS=X0("tick",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(_){return a(T,function(y){return a(T,function(k){return a(T,function(w){return a(T,function(j){return a(T,function(B){return re({pj:B,p$:j,qb:w,iN:k,iQ:y,qN:_,qO:p,mq:g,sG:b,sI:d,sK:s,sM:$,sQ:f,ny:i,s6:c,f9:o,to:t,tu:n,ub:r,uA:e})},a(S,"boundingClientRects",ur(a(T,function(B){return a(T,function(F){return a(T,function(H){return re({qw:H,qW:F,tt:B})},a(S,"elements",ur(a(T,function(H){return a(T,function(N){return re({pi:N,by:H})},a(S,"boundingClientRect",a(T,function(N){return a(T,function(O){return a(T,function(ee){return a(T,function(ue){return re({ph:ue,eF:ee,j4:O,ib:N})},a(S,"bottom",q))},a(S,"left",q))},a(S,"right",q))},a(S,"top",q))))},a(S,"id",Se)))))},a(S,"frameId",Se))},a(S,"scroll",a(T,function(B){return a(T,function(F){return a(T,function(H){return a(T,function(N){return a(T,function(O){return a(T,function(ee){return re({li:ee,lj:O,eF:N,ib:H,oE:F,oF:B})},a(S,"contentHeight",q))},a(S,"contentWidth",q))},a(S,"left",q))},a(S,"top",q))},a(S,"viewportHeight",q))},a(S,"viewportWidth",q)))))))},a(S,"darkModeIsOn",ae))},a(S,"deviceOrientation",mo(u([$c(M),a(Ge,D,a(T,function(w){return a(T,function(j){return a(T,function(B){return re({oU:B,pb:j,q_:w})},a(S,"alpha",q))},a(S,"beta",q))},a(S,"gamma",q)))]))))},a(S,"devicePixelRatio",q))},a(S,"dt",q))},a(S,"focusedElementIsContentEditable",ae))},a(S,"focusedElementIsTextInput",ae))},a(S,"keyboard",a(T,function(g){return a(T,function(p){return a(T,function(_){return a(T,function(y){return a(T,function(k){return a(T,function(w){return a(T,function(j){return a(T,function(B){return a(T,function(F){return a(T,function(H){return re({oV:H,pY:F,iP:B,qk:j,eF:w,rX:k,s2:y,j4:_,tA:p,kC:g})},a(S,"alt",ae))},a(S,"ctrl",ae))},a(S,"down",ae))},a(S,"downs",ur(Se)))},a(S,"left",ae))},a(S,"meta",ae))},a(S,"pressedKeys",ur(Se)))},a(S,"right",ae))},a(S,"shift",ae))},a(S,"up",ae))))},a(S,"operatingSystem",Se))},a(S,"pageId",Se))},a(S,"pageScroll",a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(_){return re({li:_,lj:p,eF:g,ib:b,oE:d,oF:s})},a(S,"contentHeight",q))},a(S,"contentWidth",q))},a(S,"left",q))},a(S,"top",q))},a(S,"viewportHeight",q))},a(S,"viewportWidth",q))))},a(S,"paneBoundingBoxes",ur(a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return re({he:g,eF:b,sN:d,ib:s,$8:$})},a(S,"height",q))},a(S,"left",q))},a(S,"paneId",Se))},a(S,"top",q))},a(S,"width",q)))))},a(S,"persisted",ur(a(T,function(f){return a(T,function($){return re(h(f,$))},a(Un,1,Se))},a(Un,0,Se)))))},a(S,"pointer",a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(_){return a(T,function(y){return a(T,function(k){return a(T,function(w){return re({lt:w,iP:k,lv:y,lw:_,ly:p,i7:g,m6:b,nR:d,nS:s,kC:$,dY:f,fd:i})},a(S,"doubleClick",ae))},a(S,"down",ae))},a(S,"dx",q))},a(S,"dy",q))},a(S,"elementIdsForLastDown",ur(Se)))},a(S,"isDown",ae))},a(S,"move",ae))},a(S,"rightDown",ae))},a(S,"rightUp",ae))},a(S,"up",ae))},a(S,"x",q))},a(S,"y",q))))},a(S,"rawPointer",a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(_){return a(T,function(y){return a(T,function(k){return re({lt:k,iP:y,lv:_,lw:p,ly:g,i7:b,m6:d,nR:s,nS:$,kC:f,dY:i,fd:c})},a(S,"doubleClick",ae))},a(S,"down",ae))},a(S,"dx",q))},a(S,"dy",q))},a(S,"elementIdsForLastDown",ur(Se)))},a(S,"isDown",ae))},a(S,"move",ae))},a(S,"rightDown",ae))},a(S,"rightUp",ae))},a(S,"up",ae))},a(S,"x",q))},a(S,"y",q))))},a(S,"screen",a(T,function(o){return a(T,function(c){return re({he:c,$8:o})},a(S,"height",q))},a(S,"width",q))))},a(S,"screenOrientationAngle",q))},a(S,"searchParamsFromUrl",mo(u([$c(M),a(Ge,D,ur(a(T,function(n){return a(T,function(t){return re(h(n,t))},a(Un,1,Se))},a(Un,0,Se))))]))))},a(S,"touches",ur(a(T,function(r){return a(T,function(n){return a(T,function(t){return re({by:t,dY:n,fd:r})},a(S,"id",xi))},a(S,"x",q))},a(S,"y",q)))))},a(S,"wheel",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return re({p7:o,p8:t,qv:n,sT:r,sU:e})},a(S,"deltaX",q))},a(S,"deltaY",q))},a(S,"elementIdsForLastWheel",ur(Se)))},a(S,"pinchDeltaForChrome",q))},a(S,"pinchScaleForSafari",mo(u([$c(M),a(Ge,D,q)]))))))),aS=X0("visibilityChanged",a(T,function(e){return a(T,function(r){return re({fN:r,oG:e})},a(S,"instanceId",Se))},a(S,"visible",ae))),nS=l(function(e,r){var n=a(eS,{ga:r.ef,u:wu},r.rf),t=bc(r.t1),o=p1(t),c=a(jr,P(jP,e,r,t,o),r.aT),i=G2(r.rf)?Yi(a(T,function($){return $==="Escape"?Lc(r.t1)?re(A2(n1)):re(I2):Wn("not Escape")},a(S,"key",Se))):ft,f=e.aA(t.Q);return Li(Q(u([rS(GC),aS(function($){return a(YC,$.fN,$.oG)}),a(Lo,$P,LP),f,n,i]),c))}),Tc=Z8,t3=J(function(e,r,n,t){var o=_o&r>>>e,c=a(Vi,o,t);if(c.$){var $=c.a,s=v(Tc,_o&r,n,$);return v(Tc,o,tc(s),t)}else{var i=c.a,f=P(t3,e-ln,r,n,i);return v(Tc,o,oc(f),t)}}),Zu=x(function(e,r,n){var t=n.a,o=n.b,c=n.c,i=n.d;return e<0||oe(e,t)>-1?n:oe(e,Vb(t))>-1?P(Ht,t,o,c,v(Tc,_o&e,r,i)):P(Ht,t,o,P(t3,o,e,r,c),i)}),tS=l(function(e,r){var n=r;return I(n,{er:v(Zu,a(Qr,n.cx,n.dc+n.aQ),e,n.er)})}),o3=l(function(e,r){if(r.$){var t=r.a;return Ni(I(t,{er:v(Zu,t.aQ,e,t.er)}))}else{var n=r.a;return pc(a(tS,e,n))}}),Jt=l(function(e,r){var n=r.a,t=r.b,o=Co(t),c=o.a,i=o.b,f=e(i),$=f.a,s=f.b;return h(a(Ma,n,a(o3,h(c,$),t)),s)}),oS=x(function(e,r,n){var t=function(o){var c=v(Lu,e,r,o.Q),i=c.a,f=c.b;return h(I(o,{Q:i}),f)};return a(xo,function(o){return I(n,{t1:o})},a(Jt,t,n.t1))}),c3=R6,cS=At("clearPlayLocalStorage",function(e){return c3}),iS=At("pushUrlReset",function(e){return c3}),fS=x(function(e,r,n){if(r.$===1)return h(n,fe);if(r.a){var f=r.a;return h(n,cS(0))}else{var t=r.a,o=function($){var s=(function(){var d=n.aT;if(d.b){var b=d.a;return v(Et,b,de(function(g){return I(g,{b2:e.rp})}),$.cI)}else return $.cI})();return h(I($,{b2:e.rp,cI:s}),fe)},c=a(Jt,o,n.t1),i=c.a;return h(I(n,{t1:i}),iS(0))}}),uS=x(function(e,r,n){var t=function(o){var c=a(Ke,e,o.cI);if(c.$)return h(o,fe);var i=c.a,f=a(Yt,r,i.hI),$=v(Sr,e,I(i,{hI:f}),o.cI);return h(I(o,{cI:$}),fe)};return a(xo,function(o){return I(n,{t1:o})},a(Jt,t,n.t1))}),$S=function(e){return a(Ar,7,e.f)},lS=l(function(e,r){return e?{he:r.Z.$8,$8:r.Z.he}:r.Z}),vS=function(e){var r=e;return a(lS,r.dF,r.cA)},sS=function(e){return vS(e.S)},g1=function(e){return $S(e)?D(sS(e)):M},i3=24,Ji=l(function(e,r){return v(mr,.1,1,a(Ne,(e.$8-i3)/r.$8,(e.he-i3)/r.he))}),dS=x(function(e,r,n){var t=a(Ji,e,r),o=function(c){return I(c,{ph:c.ph/t,eF:c.eF/t,j4:c.j4/t,ib:c.ib/t})};return a(Y,function(c){return I(c,{qw:a(Y,function(i){return I(i,{pi:o(i.pi)})},c.qw)})},n)}),bS=x(function(e,r,n){var t=a(Ji,e,r),o=.5*(e.$8-r.$8*t),c=.5*(e.he-r.he*t);return I(n,{he:n.he/t,eF:(n.eF-o)/t,ib:(n.ib-c)/t,$8:n.$8/t})}),f3=x(function(e,r,n){var t=.5*e.he-n.fd,o=n.dY+.5*e.$8,c=a(Ji,e,r),i=.5*(e.$8-r.$8*c),f=.5*(e.he-r.he*c);return I(n,{dY:(o-i)/c-.5*r.$8,fd:.5*r.he-(t-f)/c})}),u3=x(function(e,r,n){var t=v(f3,e,r,n),o=a(Ji,e,r);return I(t,{lv:n.lv/o,lw:n.lw/o})}),y1=l(function(e,r){if(e.$)return r;var n=e.a;return{pj:v(dS,r.f9,n,r.pj),p$:r.p$,qb:r.qb,iN:r.iN,iQ:r.iQ,qN:r.qN,qO:r.qO,mq:r.mq,sG:r.sG,sI:r.sI,sK:r.sK,sM:a(Y,a(bS,r.f9,n),r.sM),sQ:r.sQ,ny:v(u3,r.f9,n,r.ny),s6:v(u3,r.f9,n,r.s6),f9:n,to:r.to,tu:r.tu,ub:a(Y,a(f3,r.f9,n),r.ub),uA:r.uA}}),mS=J(function(e,r,n,t){var o=function(c){var i=a(Ke,r,c.cI);if(i.$)return h(c,fe);var f=i.a,$=p1(c),s=g1(t.rf),d=Gi({gN:f.gN,b2:f.b2,aH:t.aH,rf:D(t.rf),by:f.by,ru:a(y1,s,c.ru),mU:f.mU,m3:mc(t.rf),sF:Wu(f),aM:f.aM,cq:$,oG:f.oG,oM:Ou(t.rf)}),b=V(e.a6.sw,d,c.Q,_n(t.rf),n,f.bz),g=b.a,p=b.b,_=b.c,y=v(Ql,ie(kr(t.aT),D(r)),p,{cH:c.b2,i5:f.b2}),k=v(Lu,e,_,c.Q),w=k.a,j=k.b,B=v(Sr,r,I(f,{b2:y.i5,bz:g}),c.cI);return h(I(c,{b2:y.cH,cI:B,Q:w}),fa(u([a(dc,So(r),y.gO),j])))};return a(xo,function(c){return I(t,{t1:c})},a(Jt,o,t.t1))}),$3=function(e){return{$:2,a:e}},l3=$3,pS=function(e){return I(e,{f:a(Yt,l3(4),e.f)})},hS=function(e){var r=e.b;return a(Ma,qi,T2(r))},gS=x(function(e,r,n){return{$:7,a:e,b:r,c:n}}),Tq=ne,v3=9729,Mq=ne,Qu=10497,yS={g7:!0,l_:Qu,hr:v3,hv:v3,oC:Qu},Xu=33071,_S=(function(){var e=yS;return I(e,{l_:Xu,oC:Xu})})(),s3=function(e){return{$:1,a:e}},CS={$:0},PS=l(function(e,r){return{$:1,a:e,b:r}}),SS=l(function(e,r){var n=e.g7,t=e.oC,o=e.l_,c=e.hv,i=e.hr,f=J(function($,s,d,b){var g=$,p=s,_=d,y=b;return Cr(X7,g,p,_,y,n,r)});return P(f,i,c,o,t)}),kS=l(function(e,r){return a(Di,function(n){return s3({U:n,sH:e,fa:r})},a(SS,e,r))}),d3=9728,xS={g7:!0,l_:Qu,hr:d3,hv:d3,oC:Qu},jS=(function(){var e=xS;return I(e,{l_:Xu,oC:Xu})})(),wS=l(function(e,r){var n=r.I,t=a(Ke,a(Ot,0,e),n);if(!t.$&&!t.a.$){var o=t.a.a.aq,c=t.a.a.H;return ie(c,jc)?D(o):M}else return M}),Ku=function(e){if(e.b){var r=e.a,n=e.b;return D(v(se,je,r,n))}else return M},LS=function(e){if(e.b){var r=e.a,n=e.b;return D(v(se,Ne,r,n))}else return M},TS=l(function(e,r){var n=LS(a(xr,function(o){return oe(o,e)>-1},r));if(n.$)return a(te,1,Ku(r));var t=n.a;return t}),MS=x(function(e,r,n){var t=n.I,o=a(Ke,a(Ot,0,e),t);if(!o.$&&!o.a.$){var c=o.a.a.eO,i=o.a.a.H;if(i.$===2){var f=a(TS,r,du(c));return a(Ke,f,c)}else return M}else return M}),zS=l(function(e,r){return v(MS,e,1,r)}),DS=x(function(e,r,n){return fa(a(jr,function(t){var o=h(a(zS,t,n),a(wS,t,n));if(!o.a.$&&!o.b.$){var c=o.a.a,i=o.b.a,f=i?jS:_S;return D(a(ut,a(gS,e,t),a(kS,f,c)))}else return M},r))}),b3=l(function(e,r){var n=B2(e)+":";return a(Fn,n,r)?a(Qa,Ja(n),r):r}),AS=l(function(e,r){var n=e,t=r;return a(jr,function(o){var c=o.a,i=o.b;if(i.$)return M;var f=i.a.H;if(ie(f,jc)){var $=a(Ke,c,n.I);if(!$.$&&!$.a.$){var s=$.a.a;return ie(s.H,jc)?M:D(a(b3,0,c))}else return D(a(b3,0,c))}else return M},Ga(t.I))}),IS=x(function(e,r,n){var t=function(o){var c=a(Ke,e,o.cI);if(c.$)return h(o,fe);var i=c.a,f=r(i.aM),$=a(AS,i.aM,f),s=I(i,{aM:f});return h(I(o,{cI:v(Sr,e,s,o.cI)}),v(DS,e,$,f))};return a(xo,function(o){return I(n,{t1:o})},a(Jt,t,n.t1))}),BS=l(function(e,r){var n=h(e,r);if(n.a.$===5&&n.b.$===5){var t=n.a.a,o=n.b.a;return ie(Po(t),Po(o))}else return ie(e,r)}),VS=function(e){switch(e.$){case 0:var r=e.b;return G(r);case 2:var r=e.b;return Xe(r);case 4:var r=e.a;return r?"true":"false";case 1:var r=e.a;return r;case 3:var n=e.a.oU,t=e.a.D,o=e.a.a0,c=e.a.aS;return a(zr,",",a(Y,G,u([c,o,t,n])));default:var i=e.a;return Po(i)}},m3=l(function(e,r){var n=dn(a(yn,function(t){return t.a8},e));return a(jr,function(t){var o=t.a,c=t.b,i=a(Ke,o,n);if(i.$)return M;var f=i.a;return a(BS,f,c)?M:D(h(o,VS(c)))},a(yn,function(t){return t.a8},r))}),HS=x(function(e,r,n){return Q(a(m3,e.rp,r),n)}),RS=At("writeUrlParams",Ut(function(e){var r=e.a,n=e.b;return a(Ut,ne,u([Rr(r),Rr(n)]))})),FS=l(function(e,r){var n=bc(r.t1),t=e.fb(n.Q);return RS(v(HS,e,n.b2,t))}),ES=x(function(e,r,n){var t=function(f){var $=a(_2,r,f.b2),s=(function(){var d=n.aT;if(d.b){var b=d.a;return v(Et,b,de(function(g){return I(g,{b2:$})}),f.cI)}else return f.cI})();return h(I(f,{b2:$,cI:s}),fe)},o=a(Jt,t,n.t1),c=o.a,i=I(n,{t1:c});return h(i,a(FS,e,i))}),e$=l(function(e,r){return r}),US=x(function(e,r,n){if(r.$){var o=r.a,c=a(e$,"Play.Runtime.MaterialLoaded failed",h(e,o));return n}else{var t=r.a;return I(n,{mU:v(Sr,e,t,n.mU)})}}),qS=J(function(e,r,n,t){var o=function(c){return h(I(c,{cI:v(Et,e,de(a(US,r,n)),c.cI)}),fe)};return a(xo,function(c){return I(t,{t1:c})},a(Jt,o,t.t1))}),NS=U0,r$=function(e){return v(se,l(function(r,n){var t=r.a,o=r.b;return v(V6,t,o,n)}),B6(0),e)},GS=At("assetsLoadRequest",Ut(function(e){return r$(u([h("id",Rr(e.by)),h("instanceId",Rr(e.fN)),h("kind",Rr(e.bc)),h("mips",Ut(NS)(e.dC)),h("url",Rr(e.fa))]))})),_1=function(e){var r=e;return r},YS=l(function(e,r){var n=_1(r);return{by:n.by,fN:e,bc:n.bc,dC:n.dC,fa:n.fa}}),p3=l(function(e,r){return GS(a(Y,YS(e),r))}),h3=U0,WS=At("setInstanceMuted",function(e){return r$(u([h("instanceId",Rr(e.fN)),h("muted",h3(e.sb))]))}),OS=x(function(e,r,n){var t=function(o){var c=a(Ke,e,o.cI);if(c.$)return h(o,fe);var i=c.a,f=r&&!i.fi,$=I(i,{fi:i.fi||r,oG:r}),s=i.eV?WS({fN:e,sb:!r}):fe,d=f?a(p3,e,i.aC):fe;return h(I(o,{cI:v(Sr,e,$,o.cI)}),fa(u([d,s])))};return a(xo,function(o){return I(n,{t1:o})},a(Jt,t,n.t1))}),JS=function(e){return e.bj+e.bk},a$=function(e){var r=e;return r},ZS=a(rr,JS,a$),g3=function(e){var r=e.bD,n=e.bx,t=e.bk,o=e.bj,c=(o+t)/2|0,i=o+t-c,f=4;if(o+t<2)return e;if(oe(o,f*t+1)>0){var $=Q(r,He(a(qt,c,n))),s=a(qn,c,n);return{bx:s,bD:$,bj:c,bk:i}}else if(oe(t,f*o+1)>0){var $=a(qn,c,r),s=Q(n,He(a(qt,c,r)));return{bx:s,bD:$,bj:c,bk:i}}else return e},QS=function(e){var r=e.bD,n=e.bx,t=h(n,r);if(t.a.b){var i=t.a,f=i.a,$=i.b;return h(D(f),g3({bx:$,bD:e.bD,bj:e.bj-1,bk:e.bk}))}else if(t.b.b){if(t.b.b.b)return h(M,Eu);var o=t.b,c=o.a;return h(D(c),Eu)}else return h(M,Eu)},y3=a(rr,a(rr,ko(ne),QS),a$),_3=l(function(e,r){return oe(ZS(r),e)>0?a(_3,e,y3(r).b):r}),C3=l(function(e,r){var n=y3(r);if(n.a.$){var c=n.a;return r}else{var t=n.a.a,o=n.b;return oe(t.kw,e)<0?a(C3,e,o):r}}),P3=60,XS=l(function(e,r){var n=r;return e(n)}),KS=l(function(e,r){var n=r;return a(XS,g3,{bx:n.bx,bD:a(A,e,n.bD),bj:n.bj,bk:n.bk+1})}),ek=1,rk=l(function(e,r){var n=r,t=n.jx+e,o=t-ek;return{jx:t,f7:a(_3,P3,a(KS,{iQ:e,kw:t},a(C3,o,n.f7)))}}),ak=l(function(e,r){return I(r,{c$:a(rk,e.iQ,r.c$)})}),S3=function(e){var r=e.b;return Co(r).a},k3=l(function(e,r){var n=S3(e.t1);return I(n,{b2:r.b2,m3:mc(e.rf)})}),n$={$:2},x3=function(e){var r=e.a;return ie(r,n$)},C1=function(e){var r=e.a;return r.$===3},$t=function(e){return x3(e)||C1(e)},j3={$:13},nk=l(function(e,r){return e}),w3="play-scrollport",tk=function(e){var r=x(function(o,c,i){return a(ut,nk(j3),v(wo,o,c,i))}),n=v(r,w3,e.sK.eF,e.sK.ib),t=a(Y,function(o){return v(r,"measure-frame--"+o.qW,o.tt.eF,o.tt.ib)},e.pj);return fa(a(A,n,t))},ok={$:4},P1=l(function(e,r){return{$:1,a:e,b:r}}),zq=0,L3={$:0},t$={$:1},To=function(e){return{$:3,a:e}},Dq=1,Mc=l(function(e,r){return{$:0,a:e,b:r}}),ck={$:2},ik=l(function(e,r){return{eF:e,j4:r}}),la=function(e){var r=e.a;return r},o$=l(function(e,r){var n=r.aB,t=function(f){return a(te,0,a(de,function($){return $.df},a($a,f,n)))},o=l(function(f,$){e:for(;;){if(oe(f,$)>-1)return f;if(oe(e,t((f+$)/2|0))<1){var s=f,d=(f+$)/2|0;f=s,$=d;continue e}else{var s=((f+$)/2|0)+1,d=$;f=s,$=d;continue e}}}),c=la(n),i=a(o,0,c);return i?ie(i,c)?c-1:oe(e-t(i-1),t(i)-e)<1?i-1:i:0}),Zi=l(function(e,r){var n=e.a,t=e.b,o=r.aB,c=r.f4,i=n?a(te,c,a(de,function($){return $.df},a($a,n-1,o))):c,f=a(te,c,a(de,function($){return $.df},a($a,t,o)));return h(i,f)}),en={m$:100,nU:24,hU:100,h4:400,h5:900,oi:4},Kr=l(function(e,r){return r/en.h5*(e.j4-e.eF)}),Qi=x(function(e,r,n){var t=r.a,o=r.b,c=function(F){return a(Kr,e,F.gW-F.jW)},i=a(Zi,h(1,la(n.aB)-2),n),f=i.a,$=i.b,s=a(Zi,h(o.cL+1,o.cD-1),n),d=s.a,b=s.b,g=a(Zi,h(o.cL,o.cD),n),p=g.a,_=g.b;if(t.$)if(t.a){var j=t.a,k=t.b,B=v(mr,d,$,_+c(k));return h(h(p,o.cL),h(B,a(o$,B,n)))}else{var y=t.a,k=t.b,w=v(mr,f,b,p+c(k));return h(h(w,a(o$,w,n)+1),h(_,o.cD))}else return h(h(p,o.cL),h(_,o.cD))}),fk=J(function(e,r,n,t){var o=e.m5,c=e.nX,i=e.nW,f=t.j4-t.eF,$=n-r,s=a(Ne,$,a(je,en.m$,f*a(bn,1.002,c))),d=i*.001*s,b=t.eF+o*f-o*s,g=b+s,p=g+d,_=b+d,y=oe(_,r)<0?h(r,r+s):oe(p,n)>0?h(n-s,n):h(_,p),k=y.a,w=y.b;return{eF:k,j4:w}}),T3=l(function(e,r){var n=h(e,r);e:for(;;)switch(n.a.$){case 2:var t=n.a;return t$;case 3:var o=n.a;return ck;case 4:var c=n.a;return i2;case 0:var i=n.a.a,f=h(0,la(i.aB)-1),$=f.a,s=f.b,d=a(Zi,h($,s),i),b=d.a,g=d.b;return To({ca:M,dK:i,bi:a(Mc,L3,{cD:s-1,cL:1}),a5:a(ik,b,g)});case 1:if(n.b.$===3){var p=n.a.a,_=n.b.a,y=h(0,la(_.dK.aB)-1),$=y.a,s=y.b,k=a(Zi,h($,s),_.dK),w=k.a,j=k.b,B=P(fk,p,w,j,_.a5);return To(I(_,{a5:B}))}else break e;case 5:if(n.b.$===3){var F=n.a.a.fp,_=n.b.a,H=_.bi,N=H.b;return To(I(_,{bi:a(Mc,a(P1,0,{gW:F,jW:F}),N)}))}else break e;case 6:if(n.b.$===3){var F=n.a.a.fp,_=n.b.a,O=_.bi,N=O.b;return To(I(_,{bi:a(Mc,a(P1,1,{gW:F,jW:F}),N)}))}else break e;case 7:if(n.b.$===3){var F=n.a.a.fp,_=n.b.a,ee=_.bi;if(ee.a.$===1){var ue=ee.a,ve=ue.a,ye=ue.b,N=ee.b;return To(I(_,{bi:a(Mc,a(P1,ve,I(ye,{gW:F})),N)}))}else return r}else break e;case 8:if(n.b.$===3){var ze=n.a,_=n.b.a,Ve=_.bi;if(Ve.a.$===1){var We=Ve.a,Z=v(Qi,_.a5,_.bi,_.dK),Ee=Z.a,Qe=Ee.b,Oe=Z.b,_r=Oe.b;return To(I(_,{bi:a(Mc,L3,{cD:_r,cL:Qe})}))}else return r}else break e;default:if(n.b.$===3){var qe=n.a.a,_=n.b.a;return To(I(_,{ca:qe}))}else break e}return r}),uk=T3(ok),S1={$:2},$k=function(e){return{$:1,a:e}},c$=function(e){return{$:0,a:e}},M3=function(e){return{$:1,a:e}},Zt=function(e){return{$:0,a:e}},Xi=12,i$=72,Qt=function(e){switch(e){case 0:return{dY:c$(i$),fd:Zt(Xi)};case 1:return{dY:c$(i$+44),fd:Zt(Xi+44)};case 2:return{dY:M3(12),fd:Zt(Xi)};case 3:return{dY:S1,fd:Zt(100)};case 4:return{dY:S1,fd:$k(40)};case 5:return{dY:c$(i$),fd:Zt(Xi)};case 6:return{dY:S1,fd:Zt(80)};default:return{dY:c$(i$),fd:Zt(Xi)}}},k1=function(e){return e.$===3},lk=l(function(e,r){if(e.$)return r;var n=e.a;return I(r,{aK:a(A,n,a(xr,mu(n),r.aK))})}),z3=function(e){return{dY:e.s6.dY+.5*e.f9.$8,fd:-e.s6.fd+.5*e.f9.he}},D3=l(function(e,r){var n=z3(e);return{dY:r.gS.dY+(n.dY-r.g9.dY),fd:r.gS.fd+(n.fd-r.g9.fd)}}),A3=l(function(e,r){var n="-titlebar",t="draggable-panel-",o="-no-drag",c=function(i){e:for(;;)if(i.b){var f=i.a,$=i.b;if(a(Fn,t,f)&&a(jb,o,f)){if(e.iw)return M;var s=$;i=s;continue e}else{if(a(Fn,t,f)&&a(a2,n,f))return D(a(r2,Ja(n),a(Qa,Ja(t),f)));var s=$;i=s;continue e}}else return M};return c(r)}),vk=function(e){return a(A3,{iw:!0},e)},sk=function(e){return a(A3,{iw:!1},e)},dk=l(function(e,r){switch(r.$){case 0:var n=r.a;return n;case 1:var n=r.a;return e-n;default:return e/2}}),bk=l(function(e,r){if(r.$){var n=r.a;return e-n}else{var n=r.a;return n}}),f$=12,I3=x(function(e,r,n){var t=f$-r,o=e-f$-r;return oe(o,t)<1?t:v(mr,t,o,n)}),mk=x(function(e,r,n){return{dY:v(I3,e.f9.$8,a(dk,e.f9.$8,r.dY),n.dY),fd:v(I3,e.f9.he,a(bk,e.f9.he,r.fd),n.fd)}}),pk=x(function(e,r,n){return a(te,e,a(de,Mu,kr(a(xr,function(t){var o=t.a;return ie(o,r)},n.cK))))}),hk={dY:0,fd:0},B3=J(function(e,r,n,t){return v(mk,e,r,v(pk,hk,n,t))}),gk=x(function(e,r,n){return a(A,h(e,r),a(xr,function(t){var o=t.a;return!ie(o,e)},n))}),V3=x(function(e,r,n){var t=n,o=t.ee;if(o.$===1)if(e.s6.iP){var c=function(p){return a(Xr,function(_){return a(de,Fi(_),r(_))},a(Xr,t.rh,p(e.s6.ly)))},i=a(lk,a(de,vn,c(sk)),t),f=c(vk);if(f.$)return i;var $=f.a,s=$.a,d=$.b;return I(i,{ee:D({gS:P(B3,e,d,s,i),g9:z3(e),by:s})})}else return n;else{var b=o.a;if(e.s6.i7)return n;var g=a(D3,e,b);return I(t,{ee:M,cK:v(gk,b.by,g,t.cK)})}}),yk=l(function(e,r){var n=a(Xr,function(c){var i=c.j7-e.iQ;return i<=0?M:D(I(c,{j7:i}))},r.d6),t=v(V3,e,a(rr,D,Qt),r.f),o=k1(r.aL)&&!a(Ar,3,t)?uk(r.aL):r.aL;return I(r,{d6:n,f:t,aL:o})}),Ki=12,H3=function(e){return{dY:M3(Ki),fd:Zt(Ki+e*40)}},_k=l(function(e,r){return a(de,H3,a(Bu,function(n){return ie(n.by,r)},e))}),R3=function(e){return ne},u$=l(function(e,r){if(r.$===-2)return En;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;return V(Ae,n,t,a(e,t,o),a(u$,e,c),a(u$,e,i))}),Ck=l(function(e,r){var n=dn(a(Y,function(i){return h(_1(i).by,i)},r)),t=a(u$,l(function(i,f){return _1(f).bc}),n),o=a(jr,function(i){var f=i.a,$=i.b;return a(Ei,f,e)?M:D($)},Ga(n)),c=a(jr,function(i){var f=i.a,$=i.b;return a(Ei,f,n)?M:D({by:f,bc:$})},Ga(e));return{rL:t,t8:o,t9:c}}),Pk=function(e){return e.eV&&!e.oG},Sk=At("assetsUnload",Ut(function(e){return r$(u([h("id",Rr(e.by)),h("instanceId",Rr(e.fN)),h("kind",Rr(e.bc))]))})),kk=l(function(e,r){return{by:r.by,fN:e,bc:r.bc}}),xk=l(function(e,r){return Sk(a(Y,kk(e),r))}),jk=R0(function(e,r,n,t,o,c,i,f,$){var s=a(Ke,f,$.cI);if(s.$)return $;var d=s.a;if(Pk(d))return $;var b=d.gN+r.ru.iQ,g=Gi({gN:b,b2:d.b2,aH:o,rf:D(n),by:d.by,ru:a(y1,c,r.ru),mU:d.mU,m3:mc(n),sF:Wu(d),aM:d.aM,cq:t,oG:d.oG,oM:Ou(n)}),p=v(R3,"play:onTick",v(e.a6.sA,g,r.Q,_n(n)),d.bz),_=p.a,y=p.b,k=p.c,w=v(Ql,ie(i,D(f)),y,{cH:$.b8,i5:d.b2}),j=P(e.aC,g,r.Q,_n(n),_),B=a(Ck,d.gX,j),F=Je(B.t8)?fe:a(p3,f,B.t8),H=Je(B.t9)?fe:a(xk,f,B.t9),N=P(e.a6.cf,g,r.Q,_n(n),_),O=v(V3,g,_k(N),d.hI);return I($,{cz:a(A,F,a(A,H,a(A,a(dc,So(f),w.gO),$.cz))),cE:Q($.cE,k),b8:w.cH,cI:v(Sr,f,I(d,{gN:b,b2:w.i5,gX:B.rL,bz:_,hI:O}),$.cI)})}),wk=function(e){var r=e.cU;if(r.$){var t=e.iJ;if(t.$)return M;var o=t.a;return a(Hi,o,e.aT)?e.iJ:M}else{var n=r.a;return D(n)}},F3=function(e){return{$:3,a:e}},E3=function(e){var r=e.b;return Co(r).a.gN},Lk=function(e){var r=e;return I(r,{aQ:a(Ne,r.a9-1,r.aQ+1)})},Tk=function(e){if(e.$){var n=e.a;return Ni(I(n,{aQ:a(Ne,la(n.er)-1,n.aQ+1)}))}else{var r=e.a;return pc(Lk(r))}},Mk=function(e){var r=e;return r.aQ},U3=function(e){if(e.$){var n=e.a;return n.aQ}else{var r=e.a;return Mk(r)}},zk=function(e){var r=e;return r.a9},q3=function(e){if(e.$){var n=e.a;return la(n.er)}else{var r=e.a;return zk(r)}},Dk=function(e){return ie(U3(e),q3(e)-1)},Ak=function(e){var r=e.a,n=e.b;return Dk(n)?M:D(a(Ma,r,Tk(n)))},x1=Q8,N3=G8,ef=J(function(e,r,n,t){var o=_o&r>>>e;if(oe(o,Rn(t))>-1){if(e===5)return a(x1,tc(n),t);var c=oc(P(ef,e-ln,r,n,lo));return a(x1,c,t)}else{var i=a(Vi,o,t);if(i.$){var c=oc(P(ef,e-ln,r,n,N3(i)));return v(Tc,o,c,t)}else{var f=i.a,c=oc(P(ef,e-ln,r,n,f));return v(Tc,o,c,t)}}}),j1=l(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d,i=Rn(c),f=Rn(e),$=n+(f-i);if(ie(f,Dr)){var s=oe($>>>ln,1<<t)>0;if(s){var d=t+ln,b=P(ef,d,n,e,N3(oc(o)));return P(Ht,$,d,b,lo)}else return P(Ht,$,t,P(ef,t,n,e,o),lo)}else return P(Ht,$,t,o,e)}),Ik=l(function(e,r){var n=r.d;return a(j1,a(x1,e,n),r)}),Bk=l(function(e,r){var n=r;return oe(n.a9,n.cx)<0?I(n,{a9:n.a9+1,aQ:n.a9,er:v(Zu,a(Qr,n.cx,n.dc+n.a9),e,n.er)}):I(n,{aQ:n.cx-1,er:v(Zu,n.dc,e,n.er),dc:a(Qr,n.cx,n.dc+1)})}),Vk=l(function(e,r){if(r.$){var t=r.a;return Ni(I(t,{aQ:la(t.er),er:a(Ik,e,t.er)}))}else{var n=r.a;return pc(a(Bk,e,n))}}),G3=l(function(e,r){return I(r,{pj:e.pj,gN:r.gN+e.iQ,p$:e.p$,qb:e.qb,iN:e.iN,iQ:e.iQ,qN:e.qN,qO:e.qO,mq:e.mq,sK:e.sK,ny:e.ny,s6:e.s6,f9:e.f9,to:e.to,ub:e.ub,uA:e.uA})}),Hk=x(function(e,r,n){var t=n.a,o=n.b;switch(t.$){case 2:return h(n,fe);case 3:var c=t.a.ks;return h((oe(c+r.iQ,E3(n))>0?a(Ie,Ak,te(a(Ma,n$,o))):ne)(a(Ma,F3({ks:c+r.iQ}),o)),fe);case 1:var i=Co(o),s=i.a,d=i.b,b=a(G3,r,s),f=a(e,b,d),p=f.a,_=f.b;return h(a(Ma,Kl,a(Vk,h(b,p),o)),_);default:var $=Co(o),s=$.a,d=$.b,b=a(G3,r,s),g=a(e,b,d),p=g.a,_=g.b;return h(a(Ma,qi,a(o3,h(b,p),o)),_)}}),Rk=x(function(e,r,n){var t=W2({jL:r.sM,j1:s1(n.aT),aa:r.ny,uC:r.f9}),o=wk({cU:t.cU,iJ:n.aH,aT:n.aT}),c=a(ak,r,n.rf),i=l(function(p,_){var y=t,k=I(_,{ru:r}),w=g1(c),j=v(se,Gr(jk,e,k,c,y,o,w,kr(n.aT)),{cz:C,cE:C,b8:k.b2,cI:k.cI},n.aT),B=v(Lu,e,j.cE,k.Q),F=B.a,H=B.b;return h(I(k,{b2:j.b8,cI:j.cI,Q:F}),fa(a(A,H,j.cz)))}),f=v(Hk,i,r,n.t1),$=f.a,s=f.b,d=a(yk,a(k3,I(n,{t1:$}),bc($)),c),b=(function(){var p=d.oN;return I(d,{oN:I(p,{qL:M})})})(),g=$t($)?tk(S3($)):fe;return h(I(n,{aH:o,rf:b,t1:$}),fa(u([s,g])))}),Aq=1,Iq=0,rf=function(e){var r=e;return I(r,{aU:!1})},Fk=function(e){var r=e;return I(r,{bg:rf(r.bg)})},Ek=function(e){var r=e;return I(r,{bg:rf(r.bg)})},Y3=function(e){return{$:14,a:e}},W3="play-command-palette",w1={fq:W3,eL:320,jV:"Type a command\u2026",u:Y3,$8:{r1:400,ux:50}},O3=3,Uk=l(function(e,r){return!k1(e)&&k1(r)}),qk=function(e){switch(e){case 0:return 1;case 1:return 2;default:return 0}},Nk=Z7("focus"),J3=function(e){return e.fq+"-search"},af=l(function(e,r){var n=r,t=a(te,0,a(Xr,function(c){return a(Vu,c,n.aR)},n.ex)),o=a(x2,e,t);return h(I(n,{aU:!0,bT:o,ax:t}),fa(u([a(ut,function(c){return e.u(Ca)},Nk(J3(e))),a(ut,function(c){return e.u(Ca)},v(wo,jo(e),0,o))])))}),Gk=l(function(e,r){var n=r,t=a(af,_c(e),a(Ri,D(n.cA),n.bg)),o=t.a,c=t.b;return h(I(n,{bg:o}),c)}),Yk=x(function(e,r,n){var t=n,o=a(af,Cc(e),a(Ri,Zl(r),t.bg)),c=o.a,i=o.b;return h(I(t,{bg:c}),i)}),Wk=m1,L1={$:2},Z3=function(e){return{$:1,a:e}},Ok={$:3},T1=function(e){return{$:0,a:e}},M1=l(function(e,r){return e<0?M:kr(a(qt,e,r))}),Jk=l(function(e,r){e:for(;;){var n=h(e,r);if(n.a.b)if(n.b.b){var t=n.a,o=t.a,c=t.b,i=n.b,f=i.a,$=i.b;if(ie(o,f)){var s=c,d=$;e=s,r=d;continue e}else{var s=e,d=$;e=s,r=d;continue e}}else return!1;else return!0}}),Zk=J(function(e,r,n,t){return{k$:r,lX:e,nB:n,nC:t}}),Qk=2,Xk=d9,Kk=12,ex=-3,rx=-1,ax=-1,z1=16,Mo=-a(bn,2,30),nx=Le(function(e,r,n,t,o){var c=V(Xk,Zk,r,n,t,o),i={ft:C,eE:0,hi:Mo,hj:Mo,hk:Mo,fX:C},f=e.mh?ax:ex,$=l(function(d,b){var g=d.nC,p=d.nB,_=d.k$,y=d.lX,k=ie(y,e.nr)?e.mg?b.eE*rx+z1+_*Qk:b.eE?a(je,b.hk+z1+_,b.hj+z1+Kk):Mo:Mo,w=a(je,k,b.hi+f);return{ft:a(A,k,b.ft),eE:b.eE+1,hi:w,hj:p,hk:g,fX:a(A,w,b.fX)}}),s=v(se,$,i,c);return h(He(s.ft),He(s.fX))}),tx=function(e){return v(se,l(function(r,n){return r}),Mo,e)},ox=x(function(e,r,n){e:for(;;){if(r<=0)return e;var t=a(A,n,e),o=r-1,c=n;e=t,r=o,n=c;continue e}}),cx=l(function(e,r){return v(ox,C,e,r)}),ix=x(function(e,r,n){var t=Pr(e),o=Pr(r),c=a(cx,o,Mo),i=a(Hn,Fi,e),f=v(se,l(function(s,d){var b=s.a,g=s.b,p=d.a,_=d.b;return V(nx,{mg:!b,mh:ie(b,t-1),nr:g},r,n,p,_)}),h(c,c),i),$=f.b;return tx($)}),fx=l(function(e,r){var n=r;if(yo(e))return D(0);var t=a(Y,ql,Si(e));return a(Jk,t,n.jk)?D(v(ix,t,n.jk,n.k0)):M}),D1=function(e){return{$:8,a:e}},Q3=l(function(e,r){var n=Wt*r.ax,t=n-r.bT,o=r.bT+e.eL-(n+Wt);if(t<0)return a(ut,function(i){return e.u(D1(n))},v(wo,jo(e),0,n));if(o<0){var c=r.bT-o;return a(ut,function(i){return e.u(D1(c))},v(wo,jo(e),0,c))}else return fe}),ux=m9,A1=x(function(e,r,n){var t=n;switch(r.$){case 0:var o=r.a,c=yo(o)?a(Y,vn,t.hL):a(Y,Mu,a(ux,l(function(k,w){var j=k.a,B=w.a;return a(Cl,B,j)}),a(jr,function(k){var w=k.a,j=k.b;return a(de,function(B){return h(B,w)},a(fx,o,j))},t.hL)));return R(I(t,{aR:c,bT:0,hZ:o,ax:0}),a(ut,function(k){return e.u(Ca)},v(wo,jo(e),0,0)),a(de,T1,kr(c)));case 1:var p=a(je,0,t.ax-1),i=I(t,{ax:p});return R(i,a(Q3,e,i),a(de,T1,a(M1,p,t.aR)));case 2:var p=a(Ne,Pr(t.aR)-1,t.ax+1),i=I(t,{ax:p});return R(i,a(Q3,e,i),a(de,T1,a(M1,p,t.aR)));case 3:var f=a(M1,t.ax,t.aR);if(f.$===1)return R(I(t,{aU:!1}),fe,D(L1));var $=f.a;return R(I(t,{ex:D($),aU:!1}),fe,D(Z3($)));case 4:return R(I(t,{aU:!1}),fe,D(L1));case 10:var s=a(af,e,t),d=s.a,b=s.b;return R(d,b,D(Ok));case 5:var g=r.a;return R(I(t,{ex:D(g),aU:!1}),fe,D(Z3(g)));case 6:var g=r.a,p=a(te,t.ax,a(Vu,g,t.aR));return R(I(t,{ax:p}),fe,M);case 7:return R(I(t,{aU:!1}),fe,D(L1));case 8:var _=r.a;return R(I(t,{bT:_}),fe,M);case 9:var y=r.a;return R(t,a(ut,function(k){return e.u(Ca)},v(wo,jo(e),0,t.bT+y)),M);default:return R(t,fe,M)}}),$x=x(function(e,r,n){var t=n;if(r.$===1){var o=r.a;return h(I(t,{dF:o}),fe)}else{var c=r.a,i=v(A1,_c(e),c,t.bg),f=i.a,$=i.b,s=i.c,d=(function(){e:for(;;){if(s.$)break e;switch(s.a.$){case 1:var b=s.a.a;return b;case 0:var b=s.a.a;return b;default:break e}}return t.cA})();return h(I(t,{cA:d,bg:f}),$)}}),lx=function(e){var r=e;return Je(r.p)?$2(e):u2(e)},vx=function(e){var r=e;return 1+Pr(r.n)+Pr(r.p)},sx=function(e){return a(Fu,vx(e)-1,e)},dx=function(e){var r=e,n=r.n;if(n.b){var t=n.a,o=n.b;return{p:a(A,r.fr,r.p),n:o,fr:t}}else return r},bx=function(e){var r=e;return Je(r.n)?sx(e):dx(e)},X3=x(function(e,r,n){var t=e(n.cQ);return R(I(n,{cQ:t}),a(e1,Po(t),r),fe)}),mx=J(function(e,r,n,t){var o=t;switch(r.$){case 1:var c=r.a,i=a(te,o.cQ,a(l2,c,o.cQ));return R(I(o,{cQ:i}),a(e1,c,n),fe);case 2:return v(X3,bx,n,o);case 3:return v(X3,lx,n,o);default:var f=r.a,$=v(A1,Cc(e),f,o.bg),s=$.a,d=$.b,b=$.c,g=(function(){if(b.$)return n;switch(b.a.$){case 1:var p=b.a.a;return a(r1,p,n);case 0:var p=b.a.a;return a(r1,p,n);case 2:var _=b.a;return n;default:var y=b.a;return n}})();return R(I(o,{bg:s}),g,d)}}),Pa=function(e){return{$:1,a:e}},I1=function(e){return{$:2,a:e}},nf=function(e){return{$:0,a:e}},tf={$:1},K3={$:3},px=500,hx=200,gx=l(function(e,r){var n=h(r,e);if(n.a.$)switch(n.b.$){case 0:var y=n.a.a,$=n.b,c=$.a,i=$.b,s=(function(){var N=y.X;switch(N.$){case 0:return nf(0);case 1:return tf;case 2:return tf;default:return K3}})();return Pa({br:i,ed:c.ed,jb:c.jb,X:s,n0:c.n0});case 1:var y=n.a.a,d=n.b,b=y.X;switch(b.$){case 0:return Ui;case 1:return Pa(I(y,{X:I1(0)}));case 2:return Pa(I(y,{X:I1(0)}));default:return Ui}case 2:var y=n.a.a,g=n.b;return Pa(I(y,{X:K3}));case 3:var y=n.a.a,p=n.b,_=y.X;switch(_.$){case 0:return Pa(I(y,{X:nf(0)}));case 1:return Pa(I(y,{X:tf}));case 2:return Pa(I(y,{X:tf}));default:return Pa(I(y,{X:nf(0)}))}default:var y=n.a.a,k=n.b.a,w=y.X;switch(w.$){case 0:var j=w.a,B=j+k;return oe(B,px)>0?Pa(I(y,{X:tf})):Pa(I(y,{X:nf(B)}));case 2:var j=w.a,B=j+k;return oe(B,hx)>0?Ui:Pa(I(y,{X:I1(B)}));case 1:return Pa(y);default:return Pa(y)}}else if(n.b.$){var f=n.a;return Ui}else{var t=n.a,o=n.b,c=o.a,i=o.b;return Pa({br:i,ed:c.ed,jb:c.jb,X:nf(0),n0:c.n0})}}),yx=l(function(e,r){var n=r;return a(gx,e,n)}),_x=x(function(e,r,n){var t=e.pO,o=e.ga;switch(r.$){case 0:var or=r.a;if(o.b9){var c=P(mx,Pc,or,n.e,n.R),i=c.a,y=c.b,f=c.c;return R(I(n,{R:i,e:y}),f,M)}else return R(n,fe,M);case 1:var or=r.a;if(o.ds){var $=v($x,qu,or,n.S),Ee=$.a,s=$.b;return R(I(n,{S:Ee}),s,M)}else return R(n,fe,M);case 2:var or=r.a;return R(I(n,{cN:a(yx,or,n.cN)}),fe,M);case 3:var or=r.a,d=n.aL,b=a(T3,or,d),g=a(Uk,d,b),p=g?a(Yt,Yl(3),n.f):n.f;return R(I(n,{f:p,aL:b}),fe,M);case 4:if(o.b9){var y=a1(n.e),_=v(Xl,Pc,y,n.R),ve=_.a,f=_.b;return R(I(n,{R:ve,e:y}),f,M)}else return R(n,fe,M);case 5:var y=r.a;if(!o.b9||ie(y,n.e))return R(n,fe,M);var k=v(Xl,Pc,y,n.R),ve=k.a,f=k.b;return R(I(n,{R:ve,e:y}),f,M);case 6:var or=r.a,w=a(Ar,6,n.f),j=a(Ar,5,n.f),B=a(Yt,or,n.f),F=a(Ar,6,B),H=a(Ar,5,B),N=a(Ar,7,n.f),O=a(Ar,7,B),ee=n.oN,ue=!j&&H?v(Yk,Pc,n.e,n.R):h(j&&!H?Ek(n.R):n.R,fe),ve=ue.a,ye=ue.b,ze=(function(){if(w&&!F)return h(I(ee,{P:rf(ee.P)}),fe);if(!w&&F){var zn=a(af,w1,ee.P),ir=zn.a,tt=zn.b;return h(I(ee,{P:ir}),tt)}else return h(ee,fe)})(),Ve=ze.a,We=ze.b,Z=!N&&O?a(Gk,qu,n.S):h(N&&!O?Fk(n.S):n.S,fe),Ee=Z.a,Qe=Z.b;return R(I(n,{oN:Ve,S:Ee,f:B,R:ve}),fa(u([We,ye,Qe])),M);case 7:return R(I(n,{oM:!n.oM}),fe,M);case 8:return R(I(n,{bE:!n.bE}),fe,M);case 9:var Oe=r.a;return R(I(n,{d6:D({br:Oe,hy:!t,j7:O3})}),fe,t?D(0):M);case 10:return R(n,fe,D(1));case 11:var _r=r.a;return!o.dt||ie(_r,n.m3)?R(n,fe,M):R(I(n,{m3:_r}),fe,M);case 12:return o.dt?R(I(n,{m3:qk(n.m3)}),fe,M):R(n,fe,M);case 13:if(a(Oi,o,n.oN.P)){var w=a(Ar,6,n.f),B=a(Yt,Wk(6),n.f),ee=n.oN,qe=w?h(rf(ee.P),fe):a(af,w1,ee.P),i=qe.a,f=qe.b;return R(I(n,{oN:I(ee,{P:i}),f:B}),f,M)}else return R(n,fe,M);case 14:var or=r.a;if(a(Oi,o,n.oN.P)){var ee=n.oN,Tr=v(A1,w1,or,n.oN.P),i=Tr.a,f=Tr.b,Ur=Tr.c,wa=(function(){e:for(;;){if(Ur.$)break e;switch(Ur.a.$){case 1:return!0;case 2:var ot=Ur.a;return!0;default:break e}}return!1})(),Ha=wa?a(Yt,l3(6),n.f):n.f,Ve=(function(){if(!Ur.$&&Ur.a.$===1){var ot=Ur.a.a;return I(ee,{P:rf(i),qL:D(h(ot.h$,ot.jb))})}else return I(ee,{P:i})})();return R(I(n,{oN:Ve,f:Ha}),f,M)}else return R(n,fe,M);default:return R(n,fe,M)}}),Cx=l(function(e,r){var n=r;return I(n,{aQ:v(mr,0,n.a9-1,e)})}),Px=l(function(e,r){if(r.$){var t=r.a;return Ni(I(t,{aQ:v(mr,0,la(t.er)-1,e)}))}else{var n=r.a;return pc(a(Cx,e,n))}}),Sx=l(function(e,r){var n=r.b;return a(Ma,n$,a(Px,e,n))}),kx=function(e){var r=e.b;return a(Ma,n$,r)},xx=function(e){var r=e.b;return a(Ma,F3({ks:E3(e)}),r)},jx=l(function(e,r){switch(e.$){case 1:return kx(r);case 2:return M2(r);case 3:return xx(r);default:var n=e.a;return a(Sx,n,r)}}),wx=x(function(e,r,n){switch(r.$){case 0:var t=r.a;return v(Rk,e,t,n);case 1:var o=r.a,c=r.b;return P(mS,e,o,c,n);case 2:var d=r.a,i=r.b;return v(uS,d,i,n);case 3:var f=r.a;return v(oS,e,u([f]),n);case 4:var d=r.a,$=r.b;return v(OS,d,$,n);case 5:var d=r.a,s=r.b;return v(IS,d,s,n);case 6:return h(n,fe);case 7:var d=r.a,b=r.b,g=r.c;return P(qS,d,b,g,n);case 8:return h(I(n,{gT:M}),fe);case 9:var p=r.a,_=bc(n.t1).b2,y=!Je(a(m3,e.rp,_)),k=v(_x,{pO:y,ga:n.ef},p,n.rf),w=k.a,j=k.b,B=k.c,F=v(fS,e,B,I(n,{rf:w})),H=F.a,N=F.b;return h(H,fa(u([a(dc,wu,j),N])));case 10:var O=r.a;return h(I(n,{t1:a(jx,O,n.t1)}),fe);case 11:return G2(n.rf)?h(I(n,{rf:pS(n.rf),t1:hS(n.t1)}),fe):h(I(n,{rf:P2(n.rf)}),fe);case 12:var ee=r.a;return v(ES,e,ee,n);default:return h(n,fe)}}),Lx=At("setLocalStorage",function(e){return r$(u([h("key",Rr(e.i9)),h("value",Rr(e.us))]))}),Tx=l(function(e,r){var n=r.a,t=r.b,o=a(Yb,e,n),c=a(jr,function(i){var f=i.a,$=i.b;return ie(a(Gt,f,n.fP),D($))?M:D(Lx({i9:f,us:$}))},o);return Je(c)?h(n,t):h(I(n,{fP:o}),fa(a(A,t,c)))}),Mx=x(function(e,r,n){return a(Tx,e,v(wx,e,r,n))}),zx=function(e){return{$:12,a:e}},Dx={$:8},em=hn,Ax=Na("button"),zc=Na("code"),Ix=Na("li"),$$=Na("p"),Bx=Na("ul"),Vx=function(e){if(e.$){var r=e.a;return a(pn,u([a(X,"margin-top","0.4rem")]),u([a($$,u([a(X,"margin","0 0 0.25rem 0")]),u([Fr("Two or more instances share the same id:")])),a(Bx,u([a(X,"margin","0 0 0.5rem 0"),a(X,"padding-left","1.25rem")]),a(Y,function(n){return a(Ix,C,u([a(zc,C,u([Fr(n)]))]))},r)),a($$,u([a(X,"margin","0")]),u([Fr("Each "),a(zc,C,u([Fr("Play.instance")])),Fr(" needs a unique "),a(zc,C,u([Fr("id")])),Fr(" \u2014 the runtime keys per-instance state, asset registries, and DOM nodes by it.")]))]))}else return a(pn,u([a(X,"margin-top","0.4rem")]),u([a($$,u([a(X,"margin","0")]),u([a(zc,C,u([Fr("Play.multipage")])),Fr(" was called with an empty "),a(zc,C,u([Fr("instances")])),Fr(" list. Add at least one "),a(zc,C,u([Fr("Play.instance { ... }")])),Fr(" to the list.")]))]))},Hx=Na("details"),rm=function(e){return{$:0,a:e}},l$=sd,Rx=l(function(e,r){return a(l$,e,rm(r))}),Fx=function(e){return a(Rx,"click",re(e))},Ex=Na("strong"),Ux=Na("summary"),qx=function(e){return a(pn,u([a(X,"position","fixed"),a(X,"top","1rem"),a(X,"left","50%"),a(X,"transform","translateX(-50%)"),a(X,"max-width","min(40rem, calc(100vw - 2rem))"),a(X,"padding","1rem 2.75rem 1rem 1.25rem"),a(X,"background","#fff5f5"),a(X,"color","#742a2a"),a(X,"border","1px solid #fc8181"),a(X,"border-radius","0.5rem"),a(X,"box-shadow","0 4px 24px rgba(0, 0, 0, 0.15)"),a(X,"font-family","system-ui, -apple-system, sans-serif"),a(X,"font-size","0.95rem"),a(X,"line-height","1.5"),a(X,"z-index","2147483647")]),u([a(Ex,u([a(X,"display","block"),a(X,"color","#c53030"),a(X,"margin-bottom","0.35rem")]),u([Fr("This page has a configuration problem.")])),a($$,u([a(X,"margin","0 0 0.5rem 0")]),u([Fr("Please notify the page author so they can fix it.")])),a(Hx,u([a(X,"margin-top","0.5rem"),a(X,"color","#742a2a"),a(X,"font-size","0.88rem")]),u([a(Ux,u([a(X,"cursor","pointer"),a(X,"user-select","none")]),u([Fr("Technical detail (for the developer)")])),Vx(e)])),a(Ax,u([Fx(Dx),a(em,"aria-label","Dismiss"),a(X,"position","absolute"),a(X,"top","0.5rem"),a(X,"right","0.5rem"),a(X,"width","1.75rem"),a(X,"height","1.75rem"),a(X,"padding","0"),a(X,"border","none"),a(X,"background","transparent"),a(X,"color","#742a2a"),a(X,"cursor","pointer"),a(X,"font-size","1.4rem"),a(X,"line-height","1"),a(X,"border-radius","0.25rem")]),u([Fr("\xD7")]))]))},Nx=function(e){switch(e){case 0:return 44;case 1:return 40;default:return 24}},Gx=function(e){var r=e;return Nx(r.cA.aD)},Yx=function(e){return Gx(e.S)},cr=l(function(e,r){return e(Yn(r))}),B1="scrollbar-muted",am=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Wx=am,Cn=Wx,V1=function(e){return{$:4,a:e}},nm=function(e){return V1(Su(e))},ce=nm,ke=function(e){return"hsla("+(G(e.aS*360)+(", "+(G(e.a0*100)+("%, "+(G(e.D*100)+("%, "+(G(e.oU)+")")))))))},tm=l(function(e,r){var n=ke(a(cr,function(c){return c.iz},r)),t=ke(a(cr,function(c){return c.ij},r)),o=ke(a(cr,function(c){return c.bp},r));return v(Cn,"style",C,u([ce(`
/* Firefox + recent standards-compliant browsers */
`+(e+(`* {
  scrollbar-width: thin;
  scrollbar-color: `+(o+(` transparent;
}
`+(e+("."+(B1+(` {
  scrollbar-color: `+(n+(` transparent;
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
`+(e+("."+(B1+(`::-webkit-scrollbar-thumb {
  background-color: `+(n+(`;
}
`+(e+("."+(B1+(`::-webkit-scrollbar-thumb:hover {
  background-color: `+(t+`;
}
`))))))))))))))))))))))))))))))))))))]))}),Ox=function(e){return a(tm,"",e)},Jx=l(function(e,r){return a(dd,e,Rr(r))}),om=Jx("id"),Zx=x(function(e,r,n){return v(Sr,e,{eV:r.eV,oG:r.oG},n)}),cm=d7,im=cm,fm=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Qx=J(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),um=J(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),lt=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xx=C7,v$=l(function(e,r){var n=r.a,t=r.b,o=r.c;return v(lt,a(Xx,e,n),t,o)}),of=l(function(e,r){switch(r.$){case 0:var t=r.a,o=r.b,c=r.c;return v(am,t,a(Y,v$(e),o),a(Y,of(e),c));case 1:var n=r.a,t=r.b,o=r.c,c=r.d;return P(um,n,t,a(Y,v$(e),o),a(Y,of(e),c));case 2:var t=r.a,o=r.b,c=r.c;return v(fm,t,a(Y,v$(e),o),a(Y,function(f){var $=f.a,s=f.b;return h($,a(of,e,s))},c));case 3:var n=r.a,t=r.b,o=r.c,c=r.d;return P(Qx,n,t,a(Y,v$(e),o),a(Y,function(f){var $=f.a,s=f.b;return h($,a(of,e,s))},c));default:var i=r.a;return V1(a(cm,e,i))}}),cf=of,W=Cn("div"),$m=l(function(e,r){return v(lt,a(Al,e,r),!1,"")}),vt=l(function(e,r){return a($m,e,Rr(r))}),Xt=vt("id"),Kx=function(e){return Q(Y2,e)},lm=function(e){return{$:0,a:e}},Bq=ne,z=l(function(e,r){return lm(e+(":"+r))}),be=l(function(e,r){return a(z,e,r.us)}),ea=be("cursor"),ej=function(e){var r=e;return a(de,function(n){return n.by},r.ee)},H1=l(function(e,r){return!a(Du,a(rr,Ml,e),r)}),rj=l(function(e,r){var n=r.a,t=r.b;switch(e.$){case 0:var o=e.a,$=o.c;return Je($)?h(n,t):h(n,a(A,e,t));case 1:var c=e.b;return a(H1,function(d){var b=d.c;return Je(b)},c)?h(n,t):h(n,a(A,e,t));case 2:var i=e.b;return Je(i)?h(n,t):h(n,a(A,e,t));case 3:return h(n,a(A,e,t));case 4:var $=e.a;return Je($)?h(n,t):h(n,a(A,e,t));case 5:var $=e.a;return Je($)?h(n,t):h(n,a(A,e,t));case 6:var f=e.a;return yo(f.p1)?h(n,t):h(v(Sr,f.sc,f.p1,n),t);case 7:var $=e.a;return Je($)?h(n,t):h(n,a(A,e,t));case 8:var $=e.a;return Je($)?h(n,t):h(n,a(A,e,t));default:var s=e.a;return a(H1,function(d){var b=d.b;return Je(b)},s)?h(n,t):h(n,a(A,e,t))}}),vm=function(e){return{$:6,a:e}},aj=l(function(e,r){return a(Fl,a(Y,function(n){var t=n.a,o=n.b;return vm({p1:o,sc:t})},Ga(e)),r)}),nj=function(e){var r=v(Xa,rj,h(Re,C),e),n=r.a,t=r.b;return a(aj,n,t)},tj=function(e){var r=e.p2,n=e.m7,t=e.l3,o=e.lb;return{lb:o,p2:nj(r),l3:t,m7:n}},oj=function(e){return a(te,"",a(de,function(r){return'@charset "'+(r+'"')},e))},cj=J(function(e,r,n,t){e:for(;;)if(n.b)if(n.b.b){var o=n.a,c=n.b,i=e,f=r,$=c,s=t+(e(o)+(r+""));e=i,r=f,n=$,t=s;continue e}else{var o=n.a;return t+(e(o)+"")}else return t}),va=x(function(e,r,n){return P(cj,e,r,n,"")}),sm=function(e){return"("+(e.lG+(a(te,"",a(de,ag(": "),e.us))+")"))},ij=function(e){switch(e){case 0:return"print";case 1:return"screen";default:return"speech"}},dm=function(e){var r=x(function(c,i,f){return c+(" "+a(zr," and ",a(A,ij(i),a(Y,sm,f))))});switch(e.$){case 0:var t=e.a;return v(va,sm," and ",t);case 1:var n=e.a,t=e.b;return v(r,"only",n,t);case 2:var n=e.a,t=e.b;return v(r,"not",n,t);default:var o=e.a;return o}},fj=l(function(e,r){return'@import "'+(e+(dm(r)+'"'))}),uj=function(e){var r=e.a,n=e.b;return v(va,fj(r),`
`,n)},$j=function(e){var r=e.a,n=e.b;return"@namespace "+(r+('"'+(n+'"')))},lj=function(e){return v(va,function(r){var n=r;return n+";"},"",e)},vj=N9,sj=function(e){var r=e;return"::"+r},dj=function(e){switch(e){case 0:return"+";case 1:return"~";case 2:return">";default:return""}},R1=function(e){switch(e.$){case 0:var r=e.a;return"."+r;case 1:var r=e.a;return"#"+r;case 2:var r=e.a;return":"+r;default:var r=e.a;return"["+(r+"]")}},bm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return Q(r,v(va,R1,"",n));case 1:var n=e.a;return Je(n)?"*":v(va,R1,"",n);default:var r=e.a,n=e.b;return Q(r,v(va,R1,"",n))}},bj=function(e){var r=e.a,n=e.b;return dj(r)+(" "+bm(n))},mj=function(e){var r=e.a,n=e.b,t=e.c,o=a(A,bm(r),a(Y,bj,n)),c=a(te,"",a(de,sj,t));return a(vj,a(zr," ",o),c)},mm=function(e){var r=e.a,n=e.b,t=e.c,o=v(va,mj,",",a(A,r,n));return o+("{"+(lj(t)+"}"))},pj=function(e){switch(e.$){case 0:var r=e.a;return mm(r);case 1:var n=e.a,t=e.b,o=v(va,dm,", ",n),c=v(va,mm,`
`,t);return"@media "+(o+("{"+(c+"}")));case 2:return"TODO";case 3:return"TODO";case 4:return"TODO";case 5:return"TODO";case 6:var i=e.a.p1,f=e.a.sc;return"@keyframes "+(f+("{"+(i+"}")));case 7:return"TODO";case 8:return"TODO";default:return"TODO"}},hj=function(e){var r=e.p2,n=e.m7,t=e.l3,o=e.lb;return oj(o)+(v(va,uj,`
`,t)+(v(va,$j,`
`,n)+(v(va,pj,`
`,r)+"")))},pm=function(e){return{$:8,a:e}},hm=function(e){return{$:5,a:e}},gm=function(e){return{$:4,a:e}},ff=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Kt=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),uf=function(e){return{$:0,a:e}},F1=l(function(e,r){return{$:2,a:e,b:r}}),ym=function(e){return{$:7,a:e}},zo=l(function(e,r){return{$:1,a:e,b:r}}),E1=l(function(e,r){if(r.b)if(r.b.b){var t=r.a,o=r.b;return a(A,t,a(E1,e,o))}else{var n=r.a;return u([e(n)])}else return r}),_m=l(function(e,r){var n=r.a,t=r.b,o=r.c;return v(Kt,n,t,Q(o,u([e])))}),U1=l(function(e,r){if(r.b)if(r.b.b){var i=r.a,f=r.b;return a(A,i,a(U1,e,f))}else switch(r.a.$){case 0:var n=r.a.a;return u([uf(a(_m,e,n))]);case 1:var t=r.a,o=t.a,c=t.b;return u([a(zo,o,a(E1,_m(e),c))]);default:return r}else return r}),Cm=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c,i=a(Y,e,c),f=e(o);return u([v(Kt,o,c,t),v(Kt,f,i,C)])}else{var n=r.a,t=r.c;return u([v(Kt,n,C,t),v(Kt,e(n),C,C)])}}),gj=l(function(e,r){var n=r.a,t=r.b;return v(ff,n,t,D(e))}),yj=l(function(e,r){return a(Cm,gj(e),r)}),Pm=l(function(e,r){return{$:2,a:e,b:r}}),_j=l(function(e,r){return{$:0,a:e,b:r}}),Sm=function(e){return{$:1,a:e}},km=l(function(e,r){switch(r.$){case 0:var n=r.a,o=r.b;return a(_j,n,Q(o,u([e])));case 1:var o=r.a;return Sm(Q(o,u([e])));default:var t=r.a,o=r.b;return a(Pm,t,Q(o,u([e])))}}),xm=l(function(e,r){if(r.b)if(r.b.b){var c=r.a,i=r.b;return a(A,c,a(xm,e,i))}else{var n=r.a,t=n.a,o=n.b;return u([h(t,a(km,e,o))])}else return C}),Cj=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c;return v(ff,o,a(xm,e,c),t)}else{var n=r.a,t=r.c;return v(ff,a(km,e,n),C,t)}}),Pj=l(function(e,r){return a(Cm,Cj(e),r)}),q1=function(e){e:for(;;)if(e.b)if(e.a.$){var o=e.b,c=o;e=c;continue e}else{var r=e.a.a,n=r.a,t=r.b,o=e.b;return Q(a(A,n,t),q1(o))}else return C},N1=Le(function(e,r,n,t,o){return{$:3,a:e,b:r,c:n,d:t,e:o}}),s$=l(function(e,r){e:for(;;)if(r.b){if(r.b.b)break e;switch(r.a.$){case 0:var F=r.a.a;return a(Y,uf,e(F));case 1:if(r.a.b.b)if(r.a.b.b.b){var c=r.a,t=c.a,i=c.b,H=i.a,N=i.b,f=a(s$,e,u([a(zo,t,N)]));if(f.b&&f.a.$===1&&!f.b.b){var $=f.a,s=$.a,d=$.b;return u([a(zo,s,a(A,H,d))])}else{var b=f;return b}}else{var n=r.a,t=n.a,o=n.b,F=o.a;return u([a(zo,t,e(F))])}else break e;case 2:var g=r.a,p=g.a,_=g.b;return u([a(F1,p,a(s$,e,_))]);case 3:var y=r.a,k=y.a,w=y.b,j=y.c,B=y.d,F=y.e;return a(Y,P(N1,k,w,j,B),e(F));case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}else return r;var H=r.a,N=r.b;return a(A,H,a(s$,e,N))}),Sj=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return D(r)}else return M},jm=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return D(u([r]))}else return M},kj=function(e){e:for(;;)if(e.b){var r=e.a,n=e.b;if(r.$===1){var t=n;e=t;continue e}else return r}else return M},xj=function(e){return{$:9,a:e}},wm=function(e){var r=function(t){if(t.b){var o=t.a,c=t.b;return a(A,o,r(c))}else return C},n=r(e);return u([xj(n)])},jj=l(function(e,r){if(r.$)return r;var n=r.a;return a(zo,e,u([n]))}),wj=function(e){if(e.b){var r=e.a,n=e.b;return D(n)}else return M},Lm=Le(function(e,r,n,t,o){if(o.$)return o;var c=o.a;return V(N1,e,r,n,t,c)}),Tm=l(function(e,r){switch(r.$){case 0:var d=r.a;return a(zo,e,u([d]));case 1:var n=r.a,t=r.b;return a(zo,Q(e,n),t);case 2:var o=r.a,c=r.b;return a(F1,o,a(Y,Tm(e),c));case 3:var i=r.a,f=r.b,$=r.c,s=r.d,d=r.e;return V(N1,i,f,$,s,d);case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}),G1=function(e){var r=e;return r},Mm=J(function(e,r,n,t){var o=function(s){return a(te,C,wj(s))},c=a(On,r,a(te,C,jm(t))),i=(function(){var s=h(kr(c),Sj(t));if(!s.a.$&&!s.b.$){var d=s.a.a,b=s.b.a;return Q(a(qn,Pr(t)-1,t),u([ie(b,d)?b:d]))}else return t})(),f=function(s){return gn(a(E1,On(e),a(Y,Ti,a(s$,n,s))))},$=a(te,C,a(de,f,jm(t)));return Q(i,Q(o($),o(c)))}),On=l(function(e,r){if(e.b)switch(e.a.$){case 0:var n=e.a.a,H=e.b;return a(On,H,a(U1,n,r));case 1:var t=e.a,o=t.a,j=t.b,H=e.b;return P(Mm,j,H,Pj(o),r);case 2:var c=e.a,i=c.a,f=c.b,H=e.b,$=l(function(N,O){var ee=N.a,ue=N.b,ve=N.c,ye=O.a,ze=O.b,Ve=O.c;return v(ff,ee,Q(ue,a(A,h(i,ye),ze)),kj(u([Ve,ve])))}),s=function(N){switch(N.$){case 0:var O=N.a,ee=O.a,ue=O.b,ve=O.c,ye=a(yn,function(wa){return a(Y,$(wa),a(A,ee,ue))},q1(r)),ze=(function(){if(ye.b){var wa=ye.a,Ha=ye.b;return u([uf(v(Kt,wa,Ha,C))])}else return C})();return a(On,ve,ze);case 1:var Ve=N.a,We=N.b;return a(zm,Ve,We);case 2:var Z=N.a,Ee=N.b;return a(Dm,Z,Ee);case 3:var Qe=N.a,Oe=N.b,_r=N.c,qe=N.d,or=N.e;return a(Y,P(Lm,Qe,Oe,_r,qe),d$(or));case 4:var Tr=N.a;return u([gm(Tr)]);case 5:var Tr=N.a;return u([hm(Tr)]);case 6:var Tr=N.a;return u([ym(Tr)]);case 7:var Tr=N.a;return u([pm(Tr)]);default:var Ur=N.a;return wm(Ur)}};return gn(Q(u([a(On,H,r)]),a(Y,s,a(yn,G1,f))));case 3:var d=e.a,b=d.a,j=d.b,H=e.b;return P(Mm,j,H,yj(b),r);case 5:var g=e.a.a,H=e.b,p=Cb(g),_="animation-name:"+p,y=a(On,H,a(U1,_,r));return a(Fl,y,u([vm({p1:g,sc:p})]));case 4:var k=e.a,w=k.a,j=k.b,H=e.b,B=(function(){var N=q1(r);if(N.b){var O=N.a,ee=N.b;return a(Y,jj(w),a(On,j,Ti(uf(v(Kt,O,ee,C)))))}else return C})();return Q(a(On,H,r),B);default:var F=e.a.a,H=e.b;return a(On,Q(F,H),r)}else return r}),d$=function(e){var r=e.a,n=e.b,t=e.c;return a(On,t,u([uf(v(Kt,r,n,C))]))},Y1=function(e){if(e.b){var r=e.a,n=e.b;return Q(Lj(r),Y1(n))}else return C},zm=l(function(e,r){var n=function(t){return a(Y,Tm(e),d$(t))};return a(yn,n,r)}),Dm=l(function(e,r){var n=Y1(a(yn,G1,r));return u([a(F1,e,n)])}),Lj=function(e){switch(e.$){case 0:var s=e.a;return d$(s);case 1:var r=e.a,n=e.b;return a(zm,r,n);case 2:var t=e.a,o=e.b;return a(Dm,t,o);case 3:var c=e.a,i=e.b,f=e.c,$=e.d,s=e.e;return a(Y,P(Lm,c,i,f,$),d$(s));case 4:var d=e.a;return u([gm(d)]);case 5:var d=e.a;return u([hm(d)]);case 6:var d=e.a;return u([ym(d)]);case 7:var d=e.a;return u([pm(d)]);default:var b=e.a;return wm(b)}},Tj=function(e){var r=e.n4,n=e.m7,t=e.l3,o=e.lb,c=Y1(a(yn,G1,r));return{lb:o,p2:c,l3:t,m7:n}},Am=function(e){return hj(tj(Tj(e)))},Im=function(e){return{lb:M,l3:C,m7:C,n4:e}},Bm=V1,Mj=function(e){return Bm(v(ho,"span",u([a(hn,"style","display: none;"),a(hn,"class","elm-css-style-wrapper")]),Ti(v(ho,"style",C,Ti(Su(Am(Im(e))))))))},Vq=0,zj={aQ:0,us:"grabbing"},Hq=ne,Dj=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Aj=function(e){return{$:0,a:e}},Vm=l(function(e,r){var n=v(ff,r,C,M);return u([Aj(v(Dj,n,C,e))])}),Ij=l(function(e,r){return a(Vm,r,a(Pm,e,C))}),Hm=function(e){var r=ej(e);return r.$?ce(""):Mj(u([a(Ij,"body *",u([ea(zj)]))]))},za={s0:0,us:"absolute"},Dc={iY:0,fE:0,us:"row"},sa=I(Dc,{us:"column"}),Bj=function(e){return{$:0,a:e}},Vj=Sm(u([Bj(Vl)])),Rm=function(e){if(e.b){var r=e;return Am(Im(u([a(Vm,e,Vj)])))}else return""},Hj=function(e){var r=Rm(e),n=a(hn,"","");return v(lt,n,!0,r)},E=Hj,_e=a(z,"display","flex"),Ir=be("flex-direction"),Rq=0,me=function(e){return{dq:0,hh:0,dx:0,cJ:0,sq:0,hz:0,c7:e,e8:"",gu:0,us:Xe(e)}},st={a6:0,o4:1300,rg:1100,r5:1400,no:100,oo:1500,cN:1200},er=be("position"),Fq=0,$f=x(function(e,r,n){return{kJ:0,k6:0,em:0,lN:0,fR:0,eG:0,c2:0,eH:0,eI:0,dw:0,dx:0,cJ:0,eJ:0,c7:n,e4:0,e8:r,gu:e,us:Q(G(n),r)}}),L=a($f,0,"px"),dt=be("right"),Sa=be("top"),Eq=0,Uq=1,Fm=function(e){return e?"true":"false"},Te=function(e){return a(z,"background-color",e.us)},Em=function(e){return{$:6,a:e}},nr=Em,Rj=J(function(e,r,n,t){return a(z,e,r.us+(" "+(n.us+(" "+t.us))))}),eo=Rj("border"),$r=be("border-radius"),Fj=Mr(function(e,r,n,t,o,c){return a(z,e,r.us+(" "+(n.us+(" "+(t.us+(" "+(o.us+(" "+c.us))))))))}),lf=Fj("box-shadow"),qq=0,lr=function(e){return{dx:0,cJ:0,eJ:0,sq:0,hz:0,c7:e,e8:"",gu:0,us:G(e)}},rn=be("opacity"),an=be("padding"),Pn={pN:l(function(e,r){return L(e+r)}),rH:L(12),rS:L(8),sS:L(9999),tD:L(4),uJ:L(20)},pr=l(function(e,r){return I(r,{oU:e})}),ro={bs:0,dR:0,us:"solid"},Ac=l(function(e,r){return e+("("+(a(zr,",",r)+")"))}),ka=k9,Ej=function(e){return e*180/ka},vf=function(e){return e*ka/180},Uj=l(function(e,r){var n=Rt(e);return a(Qr,r,n)+e-n}),qj=x(function(e,r,n){var t=e/vf(60),o=(1-xe(2*n-1))*r,c=n-o/2,i=o*(1-xe(a(Uj,t,2)-1)),f=t<0?R(0,0,0):t<1?R(o,i,0):t<2?R(i,o,0):t<3?R(0,o,i):t<4?R(0,i,o):t<5?R(i,0,o):t<6?R(o,0,i):R(0,0,0),$=f.a,s=f.b,d=f.c;return R($+c,s+c,d+c)}),Nj=Le(function(e,r,n,t,o){var c=v(qj,Ej(r),n,t),i=c.a,f=c.b,$=c.c;return{oU:o,pd:Rt($),lf:0,q3:Rt(f),s9:Rt(i),us:e}}),Um=function(e){return G(e*100)+"%"},Gj=J(function(e,r,n,t){var o=u([G(e),Um(r),Um(n),G(t)]),c=a(Ac,"hsla",o);return V(Nj,c,e,r,n,t)}),tr=function(e){return P(Gj,e.aS*360,e.a0,e.D,e.oU)},Ic={oU:1,aS:0,D:1,a0:0},le={fR:0,eG:0,c2:0,eH:0,eI:0,dw:0,dx:0,sq:0,c7:0,hH:0,e8:"",gu:0,us:"0"},qm=x(function(e,r,n){var t=e.qe,o=e.dF,c=tr(a(pr,.08,Ic)),i=tr(a(pr,.25,vo)),f=tr(a(pr,.18,Ic));return a(W,Q(r,u([E(u([_e,(function(){return Ir(o===1?sa:Dc)})(),a(z,"gap","3px"),an(L(3)),$r(a(Pn.pN,36/2,3)),Te(c),v(eo,L(1),ro,f),a(z,"backdrop-filter","blur(14px) saturate(160%)"),a(z,"-webkit-backdrop-filter","blur(14px) saturate(160%)"),V(lf,le,L(6),L(18),L(-6),i),a(z,"pointer-events","auto"),t?rn(lr(.4)):nr(C)]))])),n)}),Yj=l(function(e,r){return{$:1,a:e,b:r}}),Wj=function(e){return{$:2,a:e}},W1=function(e){return Yj(Wj(e))},sf=W1("active"),Do=l(function(e,r){return lm(e+(":"+r))}),b$=x(function(e,r,n){e:for(;;)switch(n.$){case 0:var t=n.a,o=a(te,"",kr(a($n,":",t)));return a(Do,r,o);case 1:var c=n.a;return a(Do,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-selector"));case 2:var i=n.a;return a(Do,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-combinator"));case 3:var f=n.a;return a(Do,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-pseudo-element setter"));case 4:return a(Do,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-media-query"));case 5:return a(Do,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-keyframes"));default:if(n.a.b)if(n.a.b.b){var p=n.a,_=p.a,y=p.b,d=e,b=r,g=Em(y);e=d,r=b,n=g;continue e}else{var $=n.a,s=$.a,d=e,b=r,g=s;e=d,r=b,n=g;continue e}else return a(Do,r,"elm-css-error-cannot-apply-"+(e+"-with-empty-Style"))}}),Nq=0,m$=v($f,0,"",0),Ye=function(e){return v(b$,"alignItems","align-items",e(m$))},hr=l(function(e,r){return v(lt,a(hn,e,r),!1,"")}),Ue=hr,Gq=1,Yq=ne,p$=J(function(e,r,n,t){return{gF:e,gZ:D(n),cB:r,ia:D(t)}}),O1=p$(1),Oj=be("border-style"),Wq=25,Nm=p$(25),bt=Cn("button"),we=be("center"),Ce=function(e){return a(z,"color",e.us)},Oq=29,Jj=p$(29),h$=be("border-bottom-left-radius"),g$=be("border-bottom-right-radius"),y$=be("border-top-left-radius"),_$=be("border-top-right-radius"),Jq=0,Ze=a($f,0,"%"),Zj=l(function(e,r){var n=L(4),t=L(18);switch(r){case 0:return u([$r(Ze(50))]);case 2:return u([$r(n)]);case 1:return u(e===1?[y$(t),_$(t),h$(n),g$(n)]:[y$(t),h$(t),_$(n),g$(n)]);default:return u(e===1?[y$(n),_$(n),h$(t),g$(t)]:[y$(n),h$(n),_$(t),g$(t)])}}),Gm=l(function(e,r){return a($m,e,h3(r))}),df=Gm("disabled"),Qj={$:3},C$=Qj,K=l(function(e,r){return tr(e(Yn(r)))}),Me=be("height"),Jn=W1("hover"),J1={bs:0,us:"inset"},Hr=function(e){return v(b$,"justifyContent","justify-content",e(m$))},fr={d$:0,kX:0,bs:0,aQ:0,qf:0,re:0,l7:0,ja:0,eI:0,dw:0,cJ:0,q:0,o:0,jw:0,hH:0,sZ:0,cg:0,hR:0,ts:0,e3:0,dS:0,bK:0,kx:0,un:0,us:"none"},Z1=l(function(e,r){return v(lt,a(l$,e,r),!1,"")}),ra=l(function(e,r){return a(Z1,e,rm(r))}),mt=function(e){return a(ra,"click",re(e))},nn=be("outline"),tn={aQ:0,us:"pointer"},Ao={s0:0,us:"relative"},Zq=89,Ym=p$(89),Xj=function(e){return Je(e)?{us:"none"}:{us:v(va,function(r){return r.us}," ",e)}},P$=a(rr,be("transform"),Xj),Kj=function(e){switch(e){case 0:return"background";case 1:return"background-color";case 2:return"background-position";case 3:return"background-size";case 4:return"border";case 5:return"border-bottom";case 6:return"border-bottom-color";case 7:return"border-bottom-left-radius";case 8:return"border-bottom-right-radius";case 9:return"border-bottom-width";case 10:return"border-color";case 11:return"border-left";case 12:return"border-left-color";case 13:return"border-left-width";case 14:return"border-radius";case 15:return"border-right";case 16:return"border-right-color";case 17:return"border-right-width";case 18:return"border-top";case 19:return"border-top-color";case 20:return"border-top-left-radius";case 21:return"border-top-right-radius";case 22:return"border-top-width";case 23:return"border-width";case 24:return"bottom";case 25:return"box-shadow";case 26:return"caret-color";case 27:return"clip";case 28:return"clip-path";case 29:return"color";case 30:return"column-count";case 31:return"column-gap";case 32:return"column-rule";case 33:return"column-rule-color";case 34:return"column-rule-width";case 35:return"column-width";case 36:return"columns";case 37:return"filter";case 38:return"flex";case 39:return"flex-basis";case 40:return"flex-grow";case 41:return"flex-shrink";case 42:return"font";case 43:return"font-size";case 44:return"font-size-adjust";case 45:return"font-stretch";case 46:return"font-variation-settings";case 47:return"font-weight";case 48:return"grid-column-gap";case 49:return"grid-gap";case 50:return"grid-row-gap";case 51:return"height";case 52:return"left";case 53:return"letter-spacing";case 54:return"line-height";case 55:return"margin";case 56:return"margin-bottom";case 57:return"margin-left";case 58:return"margin-right";case 59:return"margin-top";case 60:return"mask";case 61:return"mask-position";case 62:return"mask-size";case 63:return"max-height";case 64:return"max-width";case 65:return"min-height";case 66:return"min-width";case 67:return"object-position";case 68:return"offset";case 69:return"offset-anchor";case 70:return"offset-distance";case 71:return"offset-path";case 72:return"offset-rotate";case 73:return"opacity";case 74:return"order";case 75:return"outline";case 76:return"outline-color";case 77:return"outline-offset";case 78:return"outline-width";case 79:return"padding";case 80:return"padding-bottom";case 81:return"padding-left";case 82:return"padding-right";case 83:return"padding-top";case 84:return"right";case 85:return"tab-size";case 86:return"text-indent";case 87:return"text-shadow";case 88:return"top";case 89:return"transform";case 90:return"transform-origin";case 91:return"vertical-align";case 92:return"visibility";case 93:return"width";case 94:return"word-spacing";default:return"z-index"}},Wm=function(e){return G(e)+"ms"},ew=function(e){switch(e.$){case 0:return"ease";case 1:return"linear";case 2:return"ease-in";case 3:return"ease-out";case 4:return"ease-in-out";case 5:return"step-start";case 6:return"step-end";default:var r=e.a,n=e.b,t=e.c,o=e.d;return"cubic-bezier("+(G(r)+(" , "+(G(n)+(" , "+(G(t)+(" , "+(G(o)+")")))))))}},S$=function(e){var r=v(Za,0,-1,v(se,l(function(n,t){var o=n.ia,c=n.gZ,i=n.cB,f=n.gF;return t+(Kj(f)+(" "+(Wm(i)+(" "+(a(te,"",a(de,Wm,c))+(" "+(a(te,"",a(de,ew,o))+",")))))))}),"",e));return a(z,"transition",r)},Om=l(function(e,r){return{kx:0,us:a(Ac,"translate",u([e.us,r.us]))}}),Pe=be("width"),Jm=l(function(e,r){var n=Au(e),t=tr(a(pr,n?.18:.64,vo)),o=tr(a(pr,n?.12:.48,vo)),c=tr(n?a(pr,.06,vo):a(pr,.1,Ic)),i=r.ir,f=i.a,$=i.b;return a(bt,Q(u([mt(r.f$),df(r.qe),a(Ue,"role",r.iq),a(Ue,f,$),a(Ue,"aria-label",r.jb),E(Q(u([er(Ao),Pe(L(36)),Me(L(36)),Oj(fr),an(le),r.qe?a(z,"cursor","default"):ea(tn),a(z,"background","transparent"),nn(fr),Ce(r.mk?a(K,r.jz,e):a(K,function(s){return s.t3},e)),S$(u([v(Nm,70,0,C$),v(O1,70,0,C$),v(Jj,70,0,C$)])),r.mk?nr(u([V(lf,J1,le,L(4),le,o),Te(o)])):r.qe?nr(C):nr(u([Jn(u([Te(c),V(lf,J1,le,L(1),le,c)]))])),r.qe?nr(C):sf(u([V(lf,J1,le,L(6),le,t),Te(t)]))]),a(Zj,r.dF,r.s0)))]),r.dg),u([a(W,u([E(u([Pe(Ze(100)),Me(Ze(100)),_e,Ye(we),Hr(we),r.mk?P$(u([a(Om,le,L(1))])):nr(C),r.qe?nr(C):sf(u([P$(u([a(Om,le,L(1.5))]))])),S$(u([v(Ym,70,0,C$)]))]))]),u([a(W,u([E(u([Pe(L(24)),Me(L(24))]))]),u([r.l0]))]))]))}),k$=l(function(e,r){return v(qm,{qe:r.qe,dF:1},C,u([a(Jm,e,{iq:"button",ir:h("aria-pressed",Fm(r.i8)),qe:r.qe,l0:r.l0,mk:r.i8,jb:r.jb,f$:r.f$,jz:r.ik,dF:1,s0:0,dg:r.dg})]))}),Bc=l(function(e,r){return a(k$,e,{ik:r.ok,qe:r.qe,l0:r.l0,i8:a(Ar,r.by,r.bz),jb:r.jb,f$:r.u(m1(r.by)),dg:r.dg})}),rw=J(function(e,r,n,t){return a(Bc,e,{qe:!1,l0:t.l0,by:t.by,jb:t.om,bz:r,ok:t.ok,u:n,dg:C})}),Zn=be("z-index"),aw=l(function(e,r){return a(W,u([E(u([er(za),Sa(L(Ki)),dt(L(Ki)),_e,Ir(sa),a(z,"gap","6px"),a(z,"pointer-events",r.i3?"none":"auto"),Zn(me(st.rg)),a(z,"transform",r.i3?"translateX(calc(100% + "+(G(Ki)+"px))"):"translateX(0)"),a(z,"transition","transform 280ms cubic-bezier(0.2, 0.9, 0.25, 1)")]))]),a(Y,v(rw,e,r.hI,r.u),r.cf))}),Qn=be("bottom"),da=be("left"),nw=function(e){return u([(function(){var r=e.dY;switch(r.$){case 0:var n=r.a;return da(L(n));case 1:var n=r.a;return dt(L(n));default:return da(Ze(50))}})(),(function(){var r=e.fd;if(r.$){var n=r.a;return Qn(L(n))}else{var n=r.a;return Sa(L(n))}})()])},bf={oR:0,aQ:0,em:0,hh:0,rD:0,eG:0,c2:0,cJ:0,eU:0,cg:0,h6:0,e5:0,bK:0,us:"auto"},pt={fk:0,s0:0,h6:0,us:"fixed"},tw=function(e){var r="blur("+(G(e)+"px) saturate(180%)");return nr(u([a(z,"backdrop-filter",r),a(z,"-webkit-backdrop-filter",r)]))},ow={aQ:0,us:"grab"},mf={bs:0,eU:0,us:"hidden",gw:0},Zm=l(function(e,r){return"draggable-panel-"+(e(r)+"-no-drag")}),Vc=be("overflow"),cw=l(function(e,r){var n=(function(){var t=e.dY;return t.$===2?"calc(-50% + "+(G(r.dY)+"px)"):G(r.dY)+"px"})();return"translate("+(n+(", "+(G(r.fd)+"px)")))}),ht=be("pointer-events"),iw=x(function(e,r,n){var t=n,o=P(B3,e,r.br,r.by,t),c=t.ee;if(c.$)return o;var i=c.a;return ie(i.by,r.by)?a(D3,e,i):o}),Qm=be("box-shadow"),Xm=Le(function(e,r,n,t,o){return a(z,e,r.us+(" "+(n.us+(" "+(t.us+(" "+o.us))))))}),fw=Xm("box-shadow"),Q1=J(function(e,r,n,t){return{oU:t,pd:n,lf:0,q3:r,s9:e,us:a(Ac,"rgba",Q(a(Y,Xe,u([e,r,n])),u([G(t)])))}}),X1={qn:Qm(fr),qo:P(fw,le,L(1),L(2),P(Q1,0,0,0,.3)),qp:a(z,"box-shadow","0 2px 4px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2)"),qq:a(z,"box-shadow","0 12px 24px -8px rgba(0, 0, 0, 0.55), 0 4px 8px -2px rgba(0, 0, 0, 0.4)"),qr:a(z,"box-shadow","0 28px 60px -20px rgba(0, 0, 0, 0.85), 0 8px 24px -8px rgba(0, 0, 0, 0.55)")},uw=l(function(e,r){return v(lt,a(pb,e,r),!1,"")}),Km=uw,e5=48,$w={aQ:0,us:"default"},Hc=be("flex"),lw=be("overflow-x"),r5=be("overflow-y"),vw=x(function(e,r,n){return a(z,e,r.us+(" "+n.us))}),wr=vw("padding"),sw=l(function(e,r){return a(W,u([E(u([Hc(me(1)),r5(bf),lw(bf),a(wr,L(16),L(16))]))]),u([a(W,u([Xt(e),E(u([ea($w)]))]),u([r]))]))}),dw=function(e){return{$:3,a:e}},bw={og:0,us:"ellipsis"},K1=x(function(e,r,n){return oe(xe(n.D-r.D),e)>-1?n:r.D>.5?I(n,{D:v(mr,0,1,r.D-e)}):I(n,{D:v(mr,0,1,r.D+e)})}),vr=be("flex-shrink"),Io=be("letter-spacing"),a5={fE:0,g6:0,us:"nowrap",dX:0},ev=be("padding-left"),mw=be("padding-right"),pw=be("text-overflow"),rv=be("text-transform"),Qq=0,Rc=a($f,0,"em"),sr=be("font-size"),xa=function(e){var r=e.us;return a(z,"font-weight",r)},Sn=be("line-height"),gt={kY:u([sr(L(15)),xa(me(400)),Sn(lr(1.55))]),pw:u([sr(L(13)),xa(me(500)),Sn(lr(1.3)),Io(Rc(.04))]),qf:u([sr(L(46)),xa(me(300)),Sn(lr(1.05)),Io(Rc(-.02))]),q8:u([sr(L(16)),xa(me(650)),Sn(lr(1.3))]),q9:u([sr(L(30)),xa(me(550)),Sn(lr(1.15)),Io(Rc(-.01))]),jb:u([sr(L(14)),xa(me(550)),Sn(lr(1.35))]),om:u([sr(L(20)),xa(me(650)),Sn(lr(1.25)),Io(Rc(-.005))])},av={dS:0,us:"uppercase"},pf=be("border"),n5={lf:0,us:"currentColor"},ao=hr("clip-rule"),pe=hr("d"),hw=function(e){var r=Rm(e),n=a(hn,"","");return v(lt,n,!0,r)},Xn=hw,yt=hr("fill"),gw=um,no=gw("http://www.w3.org/2000/svg"),nv=no("svg"),tv=hr("viewBox"),yw=x(function(e,r,n){return v(m7,e,bd(r),md(n))}),_w=x(function(e,r,n){return v(lt,v(yw,e,r,n),!1,"")}),Cw=a(_w,"http://www.w3.org/XML/1998/namespace","xml:space"),he=nv(u([tv("0 0 24 24"),yt("currentColor"),Xn(u([Pe(Ze(100)),Me(Ze(100))])),Cw("http://www.w3.org/2000/svg")])),to=hr("fill-rule"),ge=no("path"),t5=hr("transform"),dr={oO:he(u([a(ge,u([pe("M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z")]),C)])),pe:he(u([a(ge,u([pe("M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z")]),C)])),pD:he(u([a(ge,u([to("evenodd"),ao("evenodd"),pe("M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z")]),C)])),pE:he(u([a(ge,u([to("evenodd"),ao("evenodd"),pe("M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z")]),C)])),pF:he(u([a(ge,u([t5("translate(24, 0) scale(-1, 1)"),to("evenodd"),ao("evenodd"),pe("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),C)])),pG:he(u([a(ge,u([to("evenodd"),ao("evenodd"),pe("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),C)])),pH:he(u([a(ge,u([to("evenodd"),ao("evenodd"),pe("M5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071Z")]),C)])),pL:he(u([a(ge,u([pe("M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z")]),C)])),pM:he(u([a(ge,u([pe("M4.00005 16H20V5H4.00005V16ZM13.0001 18V20H17.0001V22H7.00005V20H11.0001V18H2.99205C2.86065 17.9992 2.7307 17.9725 2.60965 17.9214C2.48861 17.8702 2.37885 17.7957 2.28668 17.702C2.19452 17.6084 2.12175 17.4975 2.07256 17.3756C2.02337 17.2538 1.99873 17.1234 2.00005 16.992V4.008C2.00005 3.451 2.45505 3 2.99205 3H21.008C21.556 3 22 3.449 22 4.007V16.992C22 17.549 21.545 18 21.008 18H13.0001Z")]),C)])),pX:he(u([a(ge,u([pe("M11.7143 9.78571L17.5 4L19.4286 5.92857L13.6429 11.7143L19.4286 17.5L17.5 19.4286L11.7143 13.6429L5.92857 19.4286L4 17.5L9.78571 11.7143L4 5.92857L5.92857 4L11.7143 9.78571Z")]),C)])),qa:he(u([a(ge,u([pe("M4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6Z")]),C)])),qc:he(u([a(ge,u([pe("M9 2H15A2 2 0 0 1 17 4V20A2 2 0 0 1 15 22H9A2 2 0 0 1 7 20V4A2 2 0 0 1 9 2Z")]),C)])),qi:he(u([a(ge,u([pe("M11 3h2v7h3l-4 4-4-4h3z M4 17h16v3H4z")]),C)])),qj:he(u([a(ge,u([pe("M11 2h2v7h3l-4 4-4-4h3z M4 16h16v2H4z M7 19h10v2H7z")]),C)])),qm:he(u([a(ge,u([pe("M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z")]),C)])),qz:he(u([a(ge,u([pe("M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z")]),C)])),qA:he(u([a(ge,u([pe("M8.58564 8.85449L3.63589 13.8042L8.83021 18.9985L9.99985 18.9978V18.9966H11.1714L14.9496 15.2184L8.58564 8.85449ZM9.99985 7.44027L16.3638 13.8042L19.1922 10.9758L12.8283 4.61185L9.99985 7.44027ZM13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966Z")]),C)])),qP:he(u([a(ge,u([pe("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z")]),C)])),qY:he(u([a(ge,u([pe("M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z")]),C)])),q0:he(u([a(ge,u([pe("M20.0601 11.6104C20.0639 11.7454 20.0639 11.8804 20.0601 12.0154L21.4588 13.7629C21.5322 13.8547 21.583 13.9624 21.6071 14.0773C21.6312 14.1923 21.6279 14.3113 21.5976 14.4248C21.3679 15.2866 21.0249 16.1141 20.5776 16.8857C20.519 16.9867 20.4376 17.0726 20.34 17.1365C20.2423 17.2005 20.1311 17.2408 20.0151 17.2542L17.7914 17.5017C17.6989 17.5992 17.6051 17.6929 17.5101 17.7829L17.2476 20.0123C17.2341 20.1283 17.1937 20.2396 17.1295 20.3373C17.0654 20.435 16.9794 20.5163 16.8782 20.5748C16.1067 21.0217 15.2791 21.3641 14.4173 21.5929C14.3038 21.6232 14.1848 21.6265 14.0698 21.6024C13.9549 21.5783 13.8472 21.5275 13.7554 21.4542L12.0126 20.0629H11.6076L9.8601 21.4589C9.76835 21.5322 9.66065 21.583 9.54569 21.6071C9.43073 21.6312 9.31171 21.6279 9.19823 21.5976C8.33643 21.3679 7.5089 21.0249 6.73729 20.5776C6.63634 20.519 6.55046 20.4376 6.4865 20.34C6.42254 20.2423 6.38225 20.1311 6.36885 20.0151L6.12135 17.7876C6.02385 17.6945 5.9301 17.6007 5.8401 17.5064L3.61073 17.2504C3.49468 17.2369 3.38338 17.1965 3.28572 17.1324C3.18806 17.0682 3.10674 16.9822 3.04823 16.881C2.60136 16.1093 2.2587 15.2818 2.02916 14.4201C1.99897 14.3065 1.99589 14.1875 2.02015 14.0725C2.04441 13.9576 2.09535 13.8499 2.16885 13.7582L3.5601 12.0154V11.6104L2.16416 9.86292C2.09082 9.77116 2.04006 9.66347 2.01596 9.5485C1.99186 9.43354 1.9951 9.31452 2.02541 9.20104C2.25513 8.33924 2.59812 7.51172 3.04541 6.7401C3.10403 6.63915 3.18541 6.55328 3.28306 6.48931C3.38071 6.42535 3.49195 6.38507 3.60791 6.37167L5.83166 6.12417C5.92479 6.02667 6.01854 5.93292 6.11291 5.84292L6.3726 3.61354C6.3861 3.49749 6.42653 3.3862 6.49066 3.28854C6.55479 3.19088 6.64085 3.10955 6.74198 3.05104C7.51369 2.60418 8.3412 2.26151 9.20291 2.03198C9.31647 2.00179 9.43553 1.9987 9.55049 2.02296C9.66546 2.04723 9.77312 2.09816 9.86479 2.17167L11.6076 3.56292C11.7426 3.55917 11.8776 3.55917 12.0126 3.56292L13.7601 2.16417C13.8519 2.09082 13.9595 2.04006 14.0745 2.01596C14.1895 1.99186 14.3085 1.9951 14.422 2.02542C15.2839 2.25472 16.1115 2.59773 16.8829 3.04542C16.9839 3.10403 17.0697 3.18541 17.1337 3.28306C17.1977 3.38072 17.2379 3.49195 17.2513 3.60792L17.4988 5.83167C17.5963 5.92417 17.6901 6.01792 17.7801 6.11292L20.0095 6.37542C20.1255 6.38892 20.2368 6.42934 20.3345 6.49347C20.4321 6.5576 20.5135 6.64366 20.572 6.74479C21.0188 7.51651 21.3615 8.34402 21.591 9.20573C21.6212 9.31928 21.6243 9.43834 21.6001 9.55331C21.5758 9.66828 21.5249 9.77593 21.4513 9.8676L20.0601 11.6104ZM11.8101 8.06292C11.0684 8.06292 10.3434 8.28285 9.72671 8.6949C9.11003 9.10696 8.62938 9.69263 8.34555 10.3779C8.06172 11.0631 7.98746 11.8171 8.13216 12.5445C8.27685 13.2719 8.634 13.9401 9.15845 14.4646C9.6829 14.989 10.3511 15.3462 11.0785 15.4909C11.8059 15.6356 12.5599 15.5613 13.2452 15.2775C13.9304 14.9936 14.5161 14.513 14.9281 13.8963C15.3402 13.2796 15.5601 12.5546 15.5601 11.8129C15.5601 10.8184 15.165 9.86453 14.4618 9.16127C13.7585 8.458 12.8047 8.06292 11.8101 8.06292Z")]),C)])),q1:he(u([a(ge,u([pe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),C)])),ra:he(u([a(ge,u([pe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),C)])),rb:he(u([a(ge,u([pe("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z")]),C)])),rd:he(u([a(ge,u([pe("M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z")]),C)])),rE:he(u([a(ge,u([pe("M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10H18C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7957 12 18 12H16C15.2043 12 14.4413 11.6839 13.8787 11.1213C13.3161 10.5587 13 9.79565 13 9V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H16ZM13.8787 14.8787C14.4413 14.3161 15.2043 14 16 14H18C18.7957 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2043 21 17V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V17C13 16.2043 13.3161 15.4413 13.8787 14.8787Z")]),C)])),rI:he(u([a(ge,u([pe("M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z")]),C)])),rT:he(u([a(ge,u([pe("M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z")]),C)])),r8:he(u([a(ge,u([pe("M12 22C17.523 22 22 17.523 22 12C22 11.537 21.306 11.46 21.067 11.857C20.5572 12.7013 19.862 13.4186 19.034 13.9545C18.206 14.4903 17.2669 14.8307 16.2878 14.9499C15.3088 15.0691 14.3154 14.9639 13.383 14.6423C12.4507 14.3207 11.6037 13.7911 10.9063 13.0937C10.2089 12.3963 9.67932 11.5493 9.35772 10.617C9.03613 9.68457 8.93093 8.69123 9.0501 7.71217C9.16926 6.73311 9.50967 5.794 10.0455 4.96599C10.5814 4.13797 11.2987 3.44275 12.143 2.933C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z")]),C)])),dG:he(u([a(ge,u([pe("M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z")]),C)])),sO:he(u([a(ge,u([pe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),C)])),sP:he(u([a(ge,u([pe("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),C)])),sX:he(u([a(ge,u([pe("M7 5V19L18 12L7 5Z")]),C)])),sY:he(u([a(ge,u([pe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),C)])),ny:he(u([a(ge,u([pe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),C)])),s8:he(u([a(ge,u([pe("M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z")]),C)])),ta:he(u([a(ge,u([pe("M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34001 8 3.76001 10.42 2.06001 13.93C1.74001 14.6 2.10001 15.4 2.81001 15.64C3.40001 15.84 4.04001 15.56 4.31001 15C5.61001 12.34 8.34001 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z")]),C)])),tf:he(u([a(ge,u([pe("M7.20679 2.29279C7.39426 2.48031 7.49957 2.73462 7.49957 2.99979C7.49957 3.26495 7.39426 3.51926 7.20679 3.70679L5.41379 5.49979H13.2498C14.832 5.49979 16.3788 5.96898 17.6943 6.84803C19.0099 7.72708 20.0353 8.97651 20.6408 10.4383C21.2463 11.9001 21.4048 13.5087 21.0961 15.0605C20.7874 16.6124 20.0255 18.0378 18.9066 19.1566C17.7878 20.2755 16.3624 21.0374 14.8105 21.3461C13.2587 21.6548 11.6501 21.4963 10.1883 20.8908C8.72651 20.2853 7.47708 19.2599 6.59803 17.9443C5.71898 16.6288 5.24979 15.082 5.24979 13.4998C5.24979 13.2346 5.35514 12.9802 5.54268 12.7927C5.73022 12.6051 5.98457 12.4998 6.24979 12.4998C6.515 12.4998 6.76936 12.6051 6.95689 12.7927C7.14443 12.9802 7.24979 13.2346 7.24979 13.4998C7.24979 14.6865 7.60168 15.8465 8.26097 16.8332C8.92026 17.8199 9.85733 18.5889 10.9537 19.0431C12.05 19.4972 13.2564 19.616 14.4203 19.3845C15.5842 19.153 16.6533 18.5815 17.4924 17.7424C18.3315 16.9033 18.903 15.8342 19.1345 14.6703C19.366 13.5064 19.2472 12.3 18.7931 11.2037C18.3389 10.1073 17.5699 9.17026 16.5832 8.51097C15.5965 7.85168 14.4365 7.49979 13.2498 7.49979H5.41379L7.20679 9.29279C7.38894 9.48139 7.48974 9.73399 7.48746 9.99619C7.48518 10.2584 7.38001 10.5092 7.1946 10.6946C7.0092 10.88 6.75838 10.9852 6.49619 10.9875C6.23399 10.9897 5.98139 10.8889 5.79279 10.7068L2.29279 7.20679C2.10532 7.01926 2 6.76495 2 6.49979C2 6.23462 2.10532 5.98031 2.29279 5.79279L5.79279 2.29279C5.98031 2.10532 6.23462 2 6.49979 2C6.76495 2 7.01926 2.10532 7.20679 2.29279Z")]),C)])),ti:he(u([a(ge,u([pe("M11.308 2.057C11.867 1.5079 12.7733 1.5079 13.3323 2.057L22.441 11.0058C23 11.5549 23 12.4451 22.441 12.9942L13.3323 21.943C12.7733 22.4921 11.867 22.4921 11.308 21.943C10.7491 21.3938 10.7491 20.5035 11.308 19.9543L17.9734 13.4061H2.4313C1.6408 13.4061 1 12.7766 1 12C1 11.2234 1.6408 10.5938 2.4313 10.5938H17.9734L11.308 4.0456C10.7491 3.4965 10.7491 2.6061 11.308 2.057Z")]),C)])),tn:he(u([a(ge,u([pe("M21 7V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H17L21 7ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z")]),C)])),tz:he(u([a(ge,u([pe("M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z")]),C)])),tE:he(u([a(ge,u([pe("M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z")]),C)])),tH:he(u([a(ge,u([pe("M8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z")]),C)])),tN:he(u([a(ge,u([to("evenodd"),ao("evenodd"),pe("M8 3H16A5 5 0 0 1 21 8V16A5 5 0 0 1 16 21H8A5 5 0 0 1 3 16V8A5 5 0 0 1 8 3ZM9 6H15A3 3 0 0 1 18 9V15A3 3 0 0 1 15 18H9A3 3 0 0 1 6 15V9A3 3 0 0 1 9 6ZM9.5 12A2.5 2.5 0 1 0 14.5 12A2.5 2.5 0 1 0 9.5 12Z")]),C)])),tQ:he(u([a(ge,u([pe("M6 6H18V18H6Z")]),C)])),tV:he(u([a(ge,u([pe("M11.9989 19C12.2641 19 12.5185 19.1054 12.706 19.2929C12.8935 19.4804 12.9989 19.7348 12.9989 20V21C12.9989 21.2652 12.8935 21.5196 12.706 21.7071C12.5185 21.8946 12.2641 22 11.9989 22C11.7337 22 11.4793 21.8946 11.2918 21.7071C11.1042 21.5196 10.9989 21.2652 10.9989 21V20C10.9989 19.7348 11.1042 19.4804 11.2918 19.2929C11.4793 19.1054 11.7337 19 11.9989 19ZM18.3629 16.95L19.0699 17.657C19.252 17.8456 19.3528 18.0982 19.3506 18.3604C19.3483 18.6226 19.2431 18.8734 19.0577 19.0588C18.8723 19.2442 18.6215 19.3494 18.3593 19.3517C18.0971 19.354 17.8445 19.2532 17.6559 19.071L16.9489 18.364C16.7667 18.1754 16.6659 17.9228 16.6682 17.6606C16.6705 17.3984 16.7757 17.1476 16.9611 16.9622C17.1465 16.7768 17.3973 16.6716 17.6595 16.6693C17.9217 16.667 18.1743 16.7678 18.3629 16.95ZM5.63489 16.95C5.81485 16.7707 6.05633 16.6665 6.31028 16.6588C6.56423 16.651 6.81161 16.7402 7.00217 16.9082C7.19274 17.0763 7.3122 17.3106 7.33629 17.5635C7.36038 17.8164 7.2873 18.069 7.13189 18.27L7.04889 18.364L6.34189 19.071C6.16193 19.2503 5.92046 19.3545 5.66651 19.3622C5.41256 19.37 5.16518 19.2808 4.97461 19.1128C4.78405 18.9447 4.66459 18.7104 4.64049 18.4575C4.6164 18.2046 4.68948 17.952 4.84489 17.751L4.92789 17.657L5.63489 16.95ZM11.9989 6C13.5902 6 15.1163 6.63214 16.2415 7.75736C17.3668 8.88258 17.9989 10.4087 17.9989 12C17.9989 13.5913 17.3668 15.1174 16.2415 16.2426C15.1163 17.3679 13.5902 18 11.9989 18C10.4076 18 8.88147 17.3679 7.75625 16.2426C6.63103 15.1174 5.99889 13.5913 5.99889 12C5.99889 10.4087 6.63103 8.88258 7.75625 7.75736C8.88147 6.63214 10.4076 6 11.9989 6ZM3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889ZM20.9989 11C21.2641 11 21.5185 11.1054 21.706 11.2929C21.8935 11.4804 21.9989 11.7348 21.9989 12C21.9989 12.2652 21.8935 12.5196 21.706 12.7071C21.5185 12.8946 21.2641 13 20.9989 13H19.9989C19.7337 13 19.4793 12.8946 19.2918 12.7071C19.1042 12.5196 18.9989 12.2652 18.9989 12C18.9989 11.7348 19.1042 11.4804 19.2918 11.2929C19.4793 11.1054 19.7337 11 19.9989 11H20.9989ZM4.92789 4.929C5.10008 4.75682 5.32918 4.65339 5.57221 4.63811C5.81524 4.62283 6.05549 4.69675 6.24789 4.846L6.34189 4.929L7.04889 5.636C7.22824 5.81596 7.33237 6.05743 7.34012 6.31138C7.34787 6.56533 7.25868 6.81271 7.09064 7.00328C6.92261 7.19384 6.68834 7.31331 6.43542 7.3374C6.18249 7.36149 5.92988 7.28841 5.72889 7.133L5.63489 7.05L4.92789 6.343C4.74042 6.15547 4.63511 5.90116 4.63511 5.636C4.63511 5.37084 4.74042 5.11653 4.92789 4.929ZM19.0699 4.929C19.2574 5.11653 19.3627 5.37084 19.3627 5.636C19.3627 5.90116 19.2574 6.15547 19.0699 6.343L18.3629 7.05C18.2706 7.14551 18.1603 7.22169 18.0383 7.2741C17.9163 7.32651 17.7851 7.3541 17.6523 7.35525C17.5195 7.3564 17.3878 7.3311 17.2649 7.28082C17.142 7.23054 17.0304 7.15629 16.9365 7.0624C16.8426 6.9685 16.7684 6.85685 16.7181 6.73395C16.6678 6.61106 16.6425 6.47938 16.6436 6.3466C16.6448 6.21382 16.6724 6.0826 16.7248 5.9606C16.7772 5.83859 16.8534 5.72825 16.9489 5.636L17.6559 4.929C17.8434 4.74153 18.0977 4.63621 18.3629 4.63621C18.6281 4.63621 18.8824 4.74153 19.0699 4.929ZM11.9989 2C12.2641 2 12.5185 2.10536 12.706 2.29289C12.8935 2.48043 12.9989 2.73478 12.9989 3V4C12.9989 4.26522 12.8935 4.51957 12.706 4.70711C12.5185 4.89464 12.2641 5 11.9989 5C11.7337 5 11.4793 4.89464 11.2918 4.70711C11.1042 4.51957 10.9989 4.26522 10.9989 4V3C10.9989 2.73478 11.1042 2.48043 11.2918 2.29289C11.4793 2.10536 11.7337 2 11.9989 2Z")]),C)])),t1:he(u([a(ge,u([to("evenodd"),ao("evenodd"),pe("M10.8293 13C10.9398 12.6872 11 12.3506 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15H16C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 12.3506 13.0602 12.6872 13.1707 13H10.8293ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z")]),C)])),ud:he(u([a(ge,u([to("evenodd"),ao("evenodd"),pe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),C)])),ue:he(u([a(ge,u([pe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),C)])),uh:he(u([a(ge,u([pe("M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z")]),C)])),uo:he(u([a(ge,u([pe("M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z")]),C)])),uz:he(u([a(ge,u([pe("M4.47 21H19.53C21.07 21 22.03 19.33 21.26 18L13.73 4.98999C12.96 3.65999 11.04 3.65999 10.27 4.98999L2.74 18C1.97 19.33 2.93 21 4.47 21ZM12 14C11.45 14 11 13.55 11 13V11C11 10.45 11.45 9.99999 12 9.99999C12.55 9.99999 13 10.45 13 11V13C13 13.55 12.55 14 12 14ZM13 18H11V16H13V18Z")]),C)])),uT:he(u([a(ge,u([pe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),C)])),uX:he(u([a(ge,u([pe("M9.31445 17.5469L8.43555 18.4355L12 22L15.5645 18.4355L14.6855 17.5469L12 20.2324L9.31445 17.5469ZM14.6855 6.45312L15.5645 5.56445L12 2L8.43555 5.56445L9.31445 6.45312L12 3.76758L14.6855 6.45312ZM6.45312 14.6855L3.76758 12L6.45312 9.31445L5.56445 8.43555L2 12L5.56445 15.5645L6.45312 14.6855ZM22 12L18.4355 8.43555L17.5469 9.31445L20.2324 12L17.5469 14.6855L18.4355 15.5645L22 12ZM8.25 15.75H15.75V8.25H8.25V15.75ZM9.5 9.5H14.5V14.5H9.5V9.5Z")]),C)]))},hf={lf:0,us:"transparent"},Pw=l(function(e,r){return a(bt,u([Xt(r),mt(e.u($3(e.by))),a(Ue,"aria-label","Close"),E(u([Pe(L(32)),Me(L(32)),an(L(5)),$r(Ze(50)),pf(le),Te(hf),Ce(n5),ea(tn),_e,Ye(we),Hr(we),nn(fr),rn(lr(.9)),a(z,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([rn(lr(1)),Te(P(Q1,255,255,255,.18))]))]))]),u([dr.pX]))}),Sw=no("circle"),kw=hr("cx"),xw=hr("cy"),jw=hr("r"),ww=a(nv,u([tv("0 0 24 24"),yt("currentColor"),Xn(u([Pe(L(18)),Me(L(18))]))]),a(Y,function(e){var r=e.a,n=e.b;return a(Sw,u([kw(Xe(r)),xw(Xe(n)),jw("2")]),C)},u([h(9,5),h(15,5),h(9,12),h(15,12),h(9,19),h(15,19)]))),ov=be("white-space"),Lw=x(function(e,r,n){var t=a(K,function(o){return v(K1,.45,o.tZ,r.ok(o))},e);return a(W,u([E(u([_e,Ye(we),vr(me(0)),Me(L(e5)),ev(L(16)),mw(L(8)),a(z,"gap","12px"),Ce(t)])),a(ra,"dblclick",re(r.u(dw(r.by))))]),u([ww,a(W,u([E(u([Hc(me(1)),ov(a5),Vc(mf),pw(bw),Ce(t),nr(gt.q8),Io(L(.6)),rv(av)]))]),u([ce(r.om)])),a(Pw,r,n)]))}),oo=x(function(e,r,n){if(a(Ar,n.by,n.bz)){var t=a(K,a(Ie,n.ok,pr(.18)),e),o=a(K,a(Ie,n.ok,pr(.35)),e),c=v(iw,r,n,n.bz),i=(function(){var p=(function(){var _=n.br.fd;if(_.$){var y=_.a;return y}else{var y=_.a;return y}})();return"calc(100vh - "+(G(p+f$)+"px)")})(),f=n.bz,$=f,s=a(Zm,$.ri,n.by)+"-body",d=a(Zm,$.ri,n.by),b=$.ri(n.by),g="draggable-panel-"+(b+"-titlebar");return a(W,u([E(u([Te(t),tw(16),$r(a(Pn.pN,e5/2,1)),v(eo,L(1),ro,o),X1.qq,er(pt),nr(nw(n.br)),a(z,"width","-webkit-fit-content"),a(z,"width","fit-content"),a(z,"max-width","calc(100vw - "+(G(2*f$)+"px)")),a(z,"max-height",i),_e,Ir(sa),Vc(mf),Zn(me(st.no+a(Ne,999,n.a3-1-n.dL))),ht(bf),a(z,"will-change","transform"),a(z,"user-select","none"),a(z,"-webkit-user-select","none"),ea(ow)])),Xt(g),a(Km,"transform",a(cw,n.br,c))]),u([v(Lw,e,n,d),a(sw,s,n.kY)]))}else return ce("")}),Tw=Le(function(e,r,n,t,o){return n.i3?ce(""):v(oo,e,r,{br:H3(t.k7),kY:o.kY,by:o.by,bz:n.hI,a3:t.a3,dL:t.dL,ok:o.ok,om:o.om,u:n.u})}),Mw=x(function(e,r,n){if(Je(n.cf))return ce("");var t=El(n.hI),o=Pr(t),c=dn(a(Hn,l(function(f,$){return h($.by,f)}),n.cf)),i=dn(a(Y,function(f){return h(f.by,f)},n.cf));return a(W,u([Xt(Kx(n.fN))]),u([a(aw,e,n),a(W,C,a(Hn,l(function(f,$){var s=a(Ke,$,i);if(s.$)return ce("");var d=s.a;return V(Tw,e,r,n,{k7:a(te,0,a(Ke,$,c)),a3:o,dL:f},d)}),t)),Hm(n.hI)]))}),zw=Mr(function(e,r,n,t,o,c){var i=a(Ke,c,n.cI);if(i.$)return M;var f=i.a,$=_n(r.rf),s=Gi({gN:f.gN,b2:f.b2,aH:r.aH,rf:D(r.rf),by:f.by,ru:a(y1,o,n.ru),mU:f.mU,m3:mc(r.rf),sF:Wu(f),aM:f.aM,cq:t,oG:f.oG,oM:Ou(r.rf)}),d=v(R3,"play:view",v(e.a6.uw,s,n.Q,$),f.bz),b=P(e.a6.cf,s,n.Q,$,f.bz),g=a(Y,function(w){return{kY:a(cf,So(c),w.kY),l0:a(cf,So(c),w.l0),by:w.by,n0:w.n0,ok:w.ok,om:w.om}},b),p=ku(v(Mw,$,s,{i3:s.oM,fN:c,hI:f.hI,cf:g,u:R2(c)})),_=ie(r.aH,D(c)),y=a(cr,function(w){return w.bp},_n(r.rf)),k=_?"4px solid "+ke(y):"none";return D(h(c,a(pn,u([om(c),a(em,"data-play-pane",c),a(X,"outline",k),a(X,"border-radius","inherit")]),u([a(im,So(c),d),p]))))}),o5=function(e){return{$:1,a:e}},Dw=l(function(e,r){return a(l$,e,o5(r))}),Bo=vt("className"),x$=nr(u([rn(lr(.4)),a(z,"pointer-events","none")])),Da=function(e){switch(e){case 0:return a(Ie,function(r){return r.dG},function(r){return r.pd});case 1:return a(Ie,function(r){return r.dG},function(r){return r.rM});case 2:return a(Ie,function(r){return r.dG},function(r){return r.q3});case 3:return a(Ie,function(r){return r.dG},function(r){return r.uS});case 4:return a(Ie,function(r){return r.dG},function(r){return r.s9});case 5:return function(r){return r.bp};case 6:return function(r){return r.bp};default:return a(Ie,function(r){return r.dG},function(r){return r.p_})}},Aw=be("padding-bottom"),c5=320,on={r7:'ui-monospace, "SF Mono", Menlo, Monaco, "Cascadia Mono", "Roboto Mono", Consolas, monospace',sr:'"Nunito", system-ui, sans-serif',ug:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},j$=be("flex-grow"),i5=function(e){return a(W,u([E(u([Me(L(1)),j$(me(1)),a(z,"background-color",ke(a(cr,function(r){return r.iy},e)))]))]),C)},cv=be("margin-bottom"),f5=l(function(e,r){return a(W,u([E(u([_e,Ye(we),a(z,"gap","14px"),cv(L(18))]))]),u([i5(e),a(W,u([E(u([a(z,"font-family",on.ug),nr(gt.q8),Io(Rc(.18)),rv(av),Ce(a(K,function(n){return n.t3},e)),vr(me(0)),a(z,"white-space","nowrap")]))]),u([ce(r)])),i5(e)]))}),Iw=l(function(e,r){return{$:4,a:e,b:r}}),Bw=l(function(e,r){return{$:3,a:e,b:r}}),Vw=l(function(e,r){return{$:0,a:e,b:r}}),Hw=l(function(e,r){return{$:2,a:e,b:r}}),Rw=l(function(e,r){return{$:5,a:e,b:r}}),Fw=l(function(e,r){return{$:1,a:e,b:r}}),Fc=Cn("input"),iv=vt("max"),fv=vt("min"),Ew=function(e){return h(e,!0)},gf=l(function(e,r){return a(Z1,e,o5(r))}),uv=a(Wi,u(["target","value"]),Se),yf=function(e){return a(gf,"input",a(Ge,Ew,a(Ge,e,uv)))},$v=function(e){return a(vt,"step",e)},Vo=vt("type"),Ec=vt("value"),u5=function(e){return a(Fc,u([Vo("range"),fv(e.jq),iv(e.jo),$v(e.kh),Ec(e.kD),df(e.qe),yf(e.jI),Bo("ui-slider"),E(u([Pe(Ze(100)),Me(L(32)),a(z,"-webkit-appearance","none"),a(z,"appearance","none"),Te(hf),a(z,"cursor","grab"),nn(fr),a(z,"touch-action","none"),a(z,"--slider-fill",G(e.iW)+"%"),e.qe?x$:nr(C)]))]),C)},Uw=function(e){var r=oe(e.mV,e.m_)>0?100*(e.us-e.m_)/(e.mV-e.m_):0;return u5({qe:e.qe,iW:r,jo:G(e.mV),jq:G(e.m_),jI:function(n){return e.hB(a(te,e.us,Nt(n)))},kh:G(e.tO),kD:G(e.us)})},lv=be("space-between"),gr=Cn("span"),$5=l(function(e,r){return a(W,u([E(u([_e,Ye(we),Hr(lv),a(z,"gap","12px"),a(wr,L(10),le)]))]),u([a(gr,u([E(u([Ce(a(K,function(n){return n.kv},e)),nr(gt.jb),a(z,"font-family",on.ug)]))]),u([ce(r.jb)])),r.ec]))}),qw=function(e){var r=e.mV-e.m_,n=r>0?100*(e.us-e.m_)/r:0;return u5({qe:e.qe,iW:n,jo:Xe(e.mV),jq:Xe(e.m_),jI:function(t){return e.hB(a(te,e.us,zi(t)))},kh:"1",kD:Xe(e.us)})},w$=function(e){return a(z,"border-color",e.us)},Nw=(function(){var e="#6D6553",r="#A39980";return"linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 0 0 / 8px 8px,"+(" linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 4px 4px / 8px 8px,"+(" "+r))))))))))})(),l5=be("display"),_f=W1("focus"),vv=function(e){return nr(u([a(z,"outline","3px solid "+ke(a(pr,.25,e))),a(z,"outline-offset","0")]))},Gw={qf:0,us:"inline-block"},sv="ui-color-swatch-popover",Cf={it:0,gJ:0,us:"border-box"},Pf=be("box-sizing"),Yw=290,Ww=function(e){var r=Nt(e);if(r.$)return 0;var n=r.a;return v(mr,0,1,n)},dv=l(function(e,r){var n=(function(){var c=r.ic;if(c.$)return C;var i=c.a;return u([a(gr,u([E(u([a(z,"font-family",on.r7),sr(L(13)),xa(me(600)),Pe(L(40)),vr(me(0)),a(z,"text-align","right"),Ce(a(K,function(f){return f.kv},e))]))]),u([ce(i)]))])})(),t=a(Fc,u([Vo("range"),fv("0"),iv("1"),$v("0.01"),Ec(G(r.us)),yf(function(c){return r.hB(Ww(c))}),Bo(r.hO),a(Ue,"aria-label",r.jb),E(u([Hc(me(1)),Me(L(26)),a(z,"-webkit-appearance","none"),a(z,"appearance","none"),a(z,"--track",r.ha),a(z,"background-color","transparent"),nn(fr),a(z,"cursor","grab"),a(z,"touch-action","none"),an(le)]))]),C),o=a(gr,u([E(u([a(z,"font-family",on.r7),sr(L(14)),xa(me(700)),Pe(L(18)),vr(me(0)),Ce(a(K,function(c){return c.kv},e))]))]),u([ce(r.jb)]));return a(W,u([E(u([_e,Ye(we),a(z,"gap","10px")]))]),Q(u([o,t]),n))}),v5="linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 0 0 / 14px 14px, linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 7px 7px / 14px 14px, #a39980",Ow=l(function(e,r){var n=r.us,t="linear-gradient(to right, transparent, "+(ke(a(pr,1,n))+("), "+v5));return a(dv,e,{ha:t,jb:"\u03B1",hB:function(o){return r.hB(I(n,{oU:o}))},hO:"ui-hsla-alpha",ic:D(Xe(Vr(n.oU*100))+"%"),us:n.oU})}),Jw=l(function(e,r){var n=xe(e-r);return a(Ne,n,1-n)}),Br=x(function(e,r,n){return{oU:1,aS:e,D:n,a0:r}}),s5=u([v(Br,6/360,.9,.62),v(Br,33/360,1,.55),v(Br,46/360,1,.55),v(Br,80/360,.7,.52),v(Br,150/360,.65,.46),v(Br,172/360,.75,.45),v(Br,185/360,1,.46),v(Br,217/360,.88,.58),v(Br,239/360,.84,.67),v(Br,270/360,.8,.65),v(Br,330/360,1,.69),v(Br,350/360,.9,.63)]),Sf=b9,Zw=function(e){return a(te,0,a(de,vn,kr(a(Sf,Mu,a(Hn,l(function(r,n){return h(r,a(Jw,n.aS,e.aS))}),s5)))))},Qw=function(e){return e?"0 0 0 3px rgba(0, 0, 0, 0.55), 0 0 0 6px #fff, 0 4px 10px -3px rgba(0, 0, 0, 0.5)":"inset 0 0 0 1px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.5)"},d5=32,Xw=x(function(e,r,n){return a(bt,u([mt(e.hB(a(pr,e.us.oU,n))),a(Ue,"aria-label","preset colour"),E(u([Pe(L(d5)),Me(L(d5)),vr(me(0)),$r(Ze(50)),pf(le),an(le),ea(tn),Te(tr(n)),a(z,"box-shadow",Qw(r))]))]),C)}),Kw=function(e){var r=e.us.a0<.08?-1:Zw(e.us);return a(W,u([E(u([a(z,"display","grid"),a(z,"grid-template-columns","repeat(6, 1fr)"),a(z,"gap","10px"),a(z,"justify-items","center")]))]),a(Hn,l(function(n,t){return v(Xw,e,ie(n,r),t)}),s5))},eL=l(function(e,r){return a(T,function(n){var t=nb(n);if(t.$)return Wn("invalid hex");var o=t.a;return re(r(a(pr,e.oU,o)))},uv)}),rL=fm,b5=rL,bv=x(function(e,r,n){var t=n<0?n+1:n>1?n-1:n;return oe(t,1/6)<0?e+(r-e)*6*t:oe(t,1/2)<0?r:oe(t,2/3)<0?e+(r-e)*(2/3-t)*6:e}),aL=x(function(e,r,n){if(r<1e-10)return{is:n,i1:n,j_:n};var t=n<.5?n*(1+r):n+r-n*r,o=2*n-t;return{is:v(bv,o,t,e-1/3),i1:v(bv,o,t,e),j_:v(bv,o,t,e+1/3)}}),m5=function(e){switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";default:return"f"}},mv=function(e){var r=v(mr,0,255,e),n=r/16|0,t=a(Qr,16,r);return Q(cc(m5(n)),cc(m5(t)))},nL=function(e){var r=v(aL,e.aS,e.a0,e.D);return"#"+(mv(Vr(r.j_*255))+(mv(Vr(r.i1*255))+mv(Vr(r.is*255))))},tL=l(function(e,r){var n=q2(nL(r.us));return v(b5,"div",u([E(u([_e,Ye(we),a(z,"gap","12px")]))]),u([h(n,a(Fc,u([Vo("text"),a(Ue,"value",n),a(Ue,"pattern","#?[0-9A-Fa-f]{6}"),a(Ue,"spellcheck","false"),a(Ue,"aria-label","Hex colour"),Bo("ui-hex-input"),a(ra,"change",a(eL,r.us,r.hB)),E(u([Pe(Ze(50)),vr(me(0)),Pf(Cf),a(z,"font-family",on.r7),sr(L(15)),xa(me(600)),Io(Rc(.06)),rv(av),Ce(a(K,function(t){return t.t3},e)),Te(a(K,function(t){return t.tZ},e)),v(eo,L(1),ro,a(K,function(t){return t.iy},e)),$r(Pn.rS),a(wr,L(9),L(12)),nn(fr)]))]),C)),h("warn",a(W,u([Bo("ui-hex-warn")]),u([ce("invalid hex")])))]))}),pv=x(function(e,r,n){return"hsl("+(G(e*360)+(", "+(G(r*100)+("%, "+(G(n*100)+"%)")))))}),oL=l(function(e,r){var n=r.us,t="linear-gradient(to right, #000, "+(v(pv,n.aS,n.a0,.5)+", #fff)");return a(dv,e,{ha:t,jb:"L",hB:function(o){return r.hB(I(n,{D:o}))},hO:"ui-hsla-rail",ic:M,us:n.D})}),p5=120,cL=function(e){return a(W,u([E(u([_e,Hr(we)]))]),u([a(W,u([E(u([er(Ao),Pe(L(p5)),Me(L(p5)),$r(Ze(50)),Vc(mf),a(z,"background",v5),a(z,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 12px 26px -10px rgba(0, 0, 0, 0.6)")]))]),u([a(W,u([E(u([er(za),Sa(le),da(le),dt(le),Qn(le),a(z,"background",ke(e))]))]),C)]))]))},iL=l(function(e,r){var n=r.us,t="linear-gradient(to right, "+(v(pv,n.aS,0,n.D)+(", "+(v(pv,n.aS,1,n.D)+")")));return a(dv,e,{ha:t,jb:"S",hB:function(o){return r.hB(I(n,{a0:o}))},hO:"ui-hsla-rail",ic:M,us:n.a0})}),fL=l(function(e,r){return a(W,u([E(u([_e,Ir(sa),a(z,"gap","18px"),Pe(L(Yw)),Pf(Cf),an(L(18)),Te(a(K,function(n){return n.kk},e)),v(eo,L(1),ro,a(K,function(n){return n.iy},e)),$r(Pn.uJ),Ce(a(K,function(n){return n.t3},e)),a(z,"font-family",on.ug)]))]),u([cL(r.us),a(tL,e,r),Kw(r),a(iL,e,r),a(oL,e,r),a(Ow,e,r)]))}),uL=function(e){return I(e,{oU:1})},$L=l(function(e,r){var n=ke(r.us),t=ke(uL(r.us));return a(W,u([E(u([l5(Gw)]))]),u([a(bt,u([a(Ue,"popovertarget",r.by),a(Ue,"aria-label","Pick colour"),a(Ue,"aria-haspopup","dialog"),a(Km,"background","linear-gradient(135deg, transparent 50%, "+(t+(" 50%), "+("linear-gradient(135deg, "+(n+(", "+(n+("), "+Nw)))))))),E(u([Pe(L(32)),Me(L(32)),an(le),v(eo,L(1),ro,a(K,function(o){return o.iy},e)),$r(Pn.rS),ea(tn),Vc(mf),a(z,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.4)"),a(z,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([w$(a(K,function(o){return o.bp},e))])),_f(u([vv(a(cr,function(o){return o.bp},e))]))]))]),C),a(W,u([Xt(r.by),a(Ue,"popover","auto"),a(Ue,"data-popover",""),Bo(sv)]),u([a(fL,e,{hB:r.hB,us:r.us})]))]))}),h5=be("baseline"),L$=l(function(e,r){return a(W,u([E(u([a(wr,L(10),le)]))]),u([a(W,u([E(u([_e,Ye(h5),Hr(lv),a(z,"gap","12px"),cv(L(8))]))]),u([a(gr,u([E(u([Ce(a(K,function(n){return n.kv},e)),nr(gt.jb),a(z,"font-family",on.ug)]))]),u([ce(r.jb)])),(function(){var n=r.us;if(n.$)return ce("");var t=n.a;return a(gr,u([E(u([Ce(a(K,function(o){return o.bp},e)),nr(gt.jb),xa(me(600)),a(z,"font-family",on.r7),a(z,"font-feature-settings",'"tnum"')]))]),u([ce(t)]))})()])),r.ec]))}),g5=vt("placeholder"),Xq=ne,lL=l(function(e,r){return{$:3,a:e,b:r}}),hv=function(e){return lL(e)},Uc={rH:L(16),rS:L(12),tD:L(8),uJ:L(24),uK:L(4),uL:L(32),uM:L(2),uN:L(48)},vL=l(function(e,r){return a(Fc,u([Vo("text"),Ec(r.us),g5(r.jV),yf(r.hB),E(u([Pe(Ze(100)),a(wr,L(10),Uc.rS),Te(a(K,function(n){return n.kk},e)),Ce(a(K,function(n){return n.t3},e)),v(eo,L(1),ro,a(K,function(n){return n.iy},e)),$r(Pn.rS),a(z,"font-family",on.r7),nr(gt.kY),nn(fr),a(z,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),_f(u([w$(a(K,function(n){return n.bp},e)),vv(a(cr,function(n){return n.bp},e))])),a(hv,"placeholder",u([Ce(a(K,function(n){return n.kt},e))]))]))]),C)}),T$=Xm("padding"),sL=Cn("option"),dL=Gm("selected"),bL=l(function(e,r){return a(sL,u([Ec(r),dL(ie(r,e))]),u([ce(r)]))}),mL=Cn("select"),pL=l(function(e,r){return a(mL,u([a(ra,"change",a(Ge,r.sz,uv)),E(u([Pe(Ze(100)),a(z,"appearance","none"),a(z,"-webkit-appearance","none"),Te(a(K,function(n){return n.kk},e)),Ce(a(K,function(n){return n.t3},e)),v(eo,L(1),ro,a(K,function(n){return n.iy},e)),$r(Pn.rS),P(T$,L(10),L(34),L(10),Uc.rS),a(z,"font-family",on.ug),nr(gt.kY),xa(me(500)),ea(tn),a(z,"background-image",`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D4A244' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M3 5l3 3 3-3'/></svg>")`),a(z,"background-repeat","no-repeat"),a(z,"background-position","right 12px center"),nn(fr),a(z,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), background-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([w$(a(K,function(n){return n.ii},e)),Te(a(K,function(n){return n.kl},e))])),_f(u([w$(a(K,function(n){return n.bp},e)),a(z,"box-shadow","0 0 0 3px "+ke(a(pr,.25,a(cr,function(n){return n.bp},e))))]))]))]),a(Y,bL(r.tv),r.sH))}),hL=hv("after"),gL=J(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),kf=J(function(e,r,n,t){return P(gL,e,r,n,t)}),M$={cB:{o8:200,qJ:120,tC:320},g1:{qs:P(kf,.33,1,.68,1),i2:P(kf,.45,.05,.25,1),rl:P(kf,.65,0,.35,1),tG:P(kf,.2,.9,.25,1),tI:P(kf,.34,1.56,.64,1)}},z$=function(e){return P$(u([e]))},gv=function(e){var r=e.us;return{kx:0,us:a(Ac,"translateX",u([r]))}},y5=l(function(e,r){var n=r.mk?a(K,function(i){return i.bp},e):a(K,function(i){return i.iy},e),t=r.mk?20:0,o=r.mk?a(z,"box-shadow","0 0 14px "+ke(a(pr,.4,a(cr,function(i){return i.bp},e)))):Qm(fr),c=r.mk?a(K,function(i){return i.t3},e):a(K,function(i){return i.kt},e);return a(bt,u([E(u([er(Ao),Pe(L(46)),Me(L(26)),Te(n),$r(Pn.sS),pf(le),ea(tn),nn(fr),S$(u([v(O1,220,0,M$.g1.i2)])),vr(me(0)),hL(u([a(z,"content",'""'),er(za),Sa(L(2)),da(L(2)),Pe(L(22)),Me(L(22)),Te(c),$r(Ze(50)),z$(gv(L(t))),o,S$(u([v(Ym,220,0,M$.g1.tI),v(O1,220,0,M$.g1.i2),v(Nm,220,0,M$.g1.i2)]))])),r.qe?x$:nr(C)])),mt(r.nj),df(r.qe),a(Ue,"aria-pressed",r.mk?"true":"false"),a(Ue,"aria-label",r.jb)]),C)}),yL=l(function(e,r){var n=r.a,t=r.b;switch(t.$){case 0:var o=t.a,i=o.a,f=o.b,$=t.b;return a(L$,e,{ec:Uw({qe:!1,mV:f,m_:i,hB:Vw(n),tO:.01*(f-i),us:$}),jb:n,us:D(a(gc,2,$))});case 2:var c=t.a,i=c.a,f=c.b,$=t.b;return a(L$,e,{ec:qw({qe:!1,mV:f,m_:i,hB:Hw(n),us:$}),jb:n,us:D(Xe($))});case 4:var $=t.a;return a($5,e,{ec:a(y5,e,{qe:!1,mk:$,jb:n,nj:a(Iw,n,!$)}),jb:n});case 1:var $=t.a;return a(L$,e,{ec:a(vL,e,{hB:Fw(n),jV:"",us:$}),jb:n,us:M});case 3:var $=t.a;return a($5,e,{ec:a($L,e,{by:"play-config-color-"+n,hB:Bw(n),us:$}),jb:n});default:var s=t.a;return a(L$,e,{ec:a(pL,e,{sz:Rw(n),sH:Ru(s),tv:Po(s)}),jb:n,us:M})}}),_L=l(function(e,r){return a(W,u([E(u([a(wr,le,L(20))]))]),u([a(f5,e,r.sc),a(W,C,a(Y,yL(e),r.a8))]))}),Kq=1,eN=1,CL=J(function(e,r,n,t){return{ph:r,eF:n,j4:t,ib:e}}),PL=V(xc,CL,a(S,"top",q),a(S,"bottom",q),a(S,"left",q),a(S,"right",q)),_5=a(Wi,u(["currentTarget","boundingClientRect"]),PL),SL=function(e){return a(ra,"click",a(Ge,e,_5))},kL=l(function(e,r){var n=(function(){return r?h(40,Uc.rH):h(32,Uc.rS)})(),t=n.a,o=n.b;return u([Me(L(t)),a(wr,le,o),$r(Pn.sS),pf(le),ea(tn),nn(fr),a(z,"font-family",on.ug),nr(gt.jb),_e,Ye(we),Hr(we),a(z,"gap","6px"),a(z,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),_f(u([vv(a(cr,function(c){return c.bp},e))]))])}),C5=function(e){return a(zr,"",e)},yv=function(e){return a(z,"box-shadow",C5(u(["inset ",G(e*1.5),"px ",G(e*1.5),"px ",G(e*3),"px ",ke(a(pr,.6,vo)),", inset 0 0 0 1px ",ke(a(pr,.35,vo))])))},P5=l(function(e,r){return V(lf,le,le,le,L(e),tr(r))}),xL=x(function(e,r,n){var t=l(function(i,f){return n?Q(i,f):i});switch(r){case 0:var o=u([Te(a(K,function(i){return i.bp},e)),Ce(a(K,function(i){return v(K1,.6,i.bp,i.t3)},e)),a(P5,1,a(cr,function(i){return i.ii},e))]),c=u([Te(a(K,function(i){return i.ii},e)),yv(1.5)]);return Q(a(t,o,c),u([Jn(u([Te(a(K,function(i){return i.ij},e))])),sf(c)]));case 1:var o=u([Te(a(K,function(i){return i.kk},e)),Ce(a(K,function(i){return i.t3},e)),a(P5,1,a(cr,function(i){return i.iy},e))]),c=u([Te(a(K,function(i){return i.kn},e)),yv(1.5)]);return Q(a(t,o,c),u([Jn(u([Te(a(K,function(i){return i.kl},e))])),sf(c)]));default:var o=u([Te(hf),Ce(a(K,function(i){return i.kv},e))]),c=u([Te(a(K,function(i){return i.kn},e)),Ce(a(K,function(i){return i.t3},e)),yv(1.5)]);return Q(a(t,o,c),u([Jn(u([Te(a(K,function(i){return i.kk},e)),Ce(a(K,function(i){return i.t3},e))])),sf(c)]))}}),S5=x(function(e,r,n){var t=(function(){var o=r.Z;return o?18:16})();return a(bt,a(A,E(Q(a(kL,e,r.Z),Q(v(xL,e,r.ut,r.rx),r.qe?u([x$]):C))),a(A,df(r.qe),n)),(function(){var o=r.l0;if(o.$)return u([ce(r.jb)]);var c=o.a;return u([a(gr,u([E(u([_e,Ye(we),Hr(we),Pe(L(t)),Me(L(t)),vr(me(0))]))]),u([c])),ce(r.jb)])})())}),jL=l(function(e,r){return v(S5,e,{qe:!1,l0:M,rx:!1,jb:r.jb,Z:1,ut:1},u([SL(r.f$)]))}),wL=function(e){return a(W,u([E(u([P(T$,L(8),L(20),L(36),L(20)),_e,Hr(we)]))]),u([a(jL,e.e,{jb:"Reset Page's Configurations",f$:e.gU.nh})]))},k5=l(function(e,r){return v(S5,e,{qe:r.qe,l0:r.l0,rx:r.rx,jb:r.jb,Z:r.Z,ut:r.ut},u([mt(r.f$)]))}),LL=l(function(e,r){return a(k5,e,{qe:!1,l0:M,rx:!1,jb:r.jb,f$:r.f$,Z:1,ut:1})}),x5={dq:0,us:"bold"},TL=be("margin"),ML=be("margin-top"),j5=be("max-width"),w5=function(e){return v(b$,"textAlign","text-align",e(m$))},zL=(function(){var e=v(Br,.11,.55,.2),r=v(Br,.13,.8,.62),n=v(Br,.13,.9,.9),t="play-reset-interface-help",o=function($){return a(W,u([E(u([a(wr,L(2),le)]))]),u([ce("\u2022 "+$)]))},c=v(Br,.13,1,.58),i=v(Br,.13,.95,.52),f=v(Br,.12,.85,.16);return a(gr,u([E(u([_e,Ye(we)]))]),u([a(bt,u([Vo("button"),a(Ue,"popovertarget",t),a(Ue,"aria-label","What does resetting Play's interface clear?"),E(u([Pe(L(20)),Me(L(20)),an(le),a(z,"border","none"),$r(Ze(50)),ea(tn),xa(x5),sr(L(13)),Sn(L(20)),w5(we),a(z,"background-color",ke(i)),a(z,"color",ke(f)),a(z,"transition","background-color 160ms"),Jn(u([a(z,"background-color",ke(c))])),_f(u([a(z,"outline","2px solid "+ke(c)),a(z,"outline-offset","2px")]))]))]),u([ce("?")])),a(W,u([Xt(t),a(Ue,"popover","auto"),a(Ue,"data-popover",""),E(u([er(pt),TL(le),a(z,"pointer-events","auto"),j5(L(250)),a(wr,L(12),L(14)),$r(L(10)),sr(L(12.5)),Sn(lr(1.5)),a(z,"background-color",ke(n)),a(z,"color",ke(e)),a(z,"border","1px solid "+ke(r)),a(z,"box-shadow","0 6px 20px rgba(0, 0, 0, 0.28)")]))]),u([a(W,u([E(u([xa(x5),cv(L(8))]))]),u([ce("Resetting Play's interface clears, for this browser:")])),o("Panel positions & sizes"),o("Light / dark theme"),o("Play / author mode"),o("Device-preview frame"),o("Tape \u201Crecord from start\u201D preference"),a(W,u([E(u([ML(L(8)),rn(lr(.85))]))]),u([ce("Your configuration values (in the page URL) and any saved content aren\u2019t affected.")]))]))]))})(),DL=function(e){return a(W,u([E(u([P(T$,L(16),L(20),L(4),L(20)),_e,Ye(we),Hr(we),a(z,"gap","8px")]))]),u([a(LL,e.e,{jb:"Reset Play's Interface",f$:e.jF}),zL]))},AL=function(e){var r=Je(e.pM.b2)?ce(""):wL(e);return a(W,u([E(u([Pe(L(c5))]))]),u([DL(e),r,a(cf,e.f0,a(W,u([E(u([_e,Ir(sa),a(z,"gap","18px"),Aw(L(16))]))]),a(Y,_L(e.e),e.pM.b2)))]))},IL=function(e){if(!e.b0.fJ||e.oM)return ce("");var r=v(oo,e.e,e.pM,{br:Qt(0),kY:AL(e),by:0,bz:e.f,a3:e.az.a3,dL:e.az.dM(0),ok:Da(0),om:"Configurations",u:e.aX});return $t(e.t1)?a(W,u([E(u([x$]))]),u([r])):r},_v=function(e){return{$:1,a:e}},rN=0,aN=0,BL=function(e){return e?dr.qa:dr.qc},VL=function(e){return e?"Landscape":"Portrait"},nN=1,tN=3,oN=2,HL={$:2},RL=l(function(e,r){return{$:0,a:e,b:r}}),FL={$:1},EL={$:3},UL=function(e){return a(ra,"mousedown",re(e))},qL=function(e){return a(ra,"mouseleave",re(e))},_t=l(function(e,r){return u([a(ra,"mouseenter",a(Ge,function(n){return e(a(RL,r,n))},_5)),qL(e(FL)),UL(e(HL)),a(ra,"mousemove",re(e(EL)))])}),D$=l(function(e,r){var n=Pr(r.rC),t=function(c){return n<=1?0:c?ie(c,n-1)?3:2:1},o=l(function(c,i){var f=r.rA(i);return a(Jm,e,{iq:"radio",ir:h("aria-checked",Fm(f)),qe:r.qe,l0:r.l0(i),mk:f,jb:r.rB(i),f$:r.sz(i),jz:r.tw(i),dF:r.dF,s0:t(c),dg:a(_t,r.sB,{ed:r.ua,jb:r.rB(i),n0:r.n0(i)})})});return v(qm,{qe:r.qe,dF:r.dF},u([a(Ue,"role","radiogroup"),a(Ue,"aria-label",r.jb)]),a(Hn,o,r.rC))}),NL=J(function(e,r,n,t){return a(W,u([E(u([_e,Hr(we),a(wr,L(6),L(0))]))]),u([a(D$,e,{qe:!1,l0:BL,rA:Ya(t),rB:VL,rC:u([0,1]),jb:"Orientation",sz:a(rr,r.u,_v),sB:n,dF:0,tw:function(o){return function(c){return c.bp}},n0:function(o){return M},ua:0})]))}),xf=function(e){return{iz:a(K,function(r){return r.iz},e),ka:X1.qq,tZ:a(K,function(r){return r.tZ},e),ko:a(K,function(r){return r.kn},e),kt:a(K,function(r){return r.kt},e),t3:a(K,function(r){return r.t3},e),kv:a(K,function(r){return r.kv},e),gy:st.no}},GL=function(e){return{$:0,a:e}},L5=function(e){return{$:3,a:e}},qc=l(function(e,r){return a(Z1,e,L5(r))}),YL={$:2},WL={$:1},OL={$:3},JL={$:4},Cv=T6,ZL=Cr(Cv,Le(function(e,r,n,t,o){return{oV:t,pY:r,i9:e,rX:o,tA:n}}),a(S,"key",Se),a(S,"ctrlKey",ae),a(S,"shiftKey",ae),a(S,"altKey",ae),a(S,"metaKey",ae)),QL=l(function(e,r){return a(Ge,function(n){var t=n.rX,o=n.oV,c=n.tA,i=n.pY,f=n.i9,$=i||o||t;if($)return{V:e.u(Ca),Y:!1,_:!1};if(f==="Tab")return{V:e.u(Ca),Y:!0,_:!0};if(f==="ArrowUp")return{V:e.u(WL),Y:!0,_:!0};if(f==="ArrowDown")return{V:e.u(YL),Y:!0,_:!0};if(f==="Enter")return{V:e.u(OL),Y:!0,_:!0};if(f==="Escape")return{V:e.u(JL),Y:!0,_:!0};if(f==="ArrowLeft"||f==="ArrowRight"){if(r.$)return{V:e.u(Ca),Y:!1,_:!1};var s=r.a;return{V:f==="ArrowLeft"?s.sv:s.sy,Y:!0,_:!0}}else return{V:e.u(Ca),Y:!1,_:!1}},ZL)}),T5=5,XL=function(e){return v(lt,e,!1,"")},M5=XL,KL={Y:!0,_:!1},eT=l(function(e,r){return a(l$,e,L5(r))}),rT=Le(function(e,r,n,t,o){return{pR:o,rz:t,ny:r,s_:n,s$:e}}),aT=Le(function(e,r,n,t,o){return{he:r,s3:n,t5:t,t6:o,$8:e}}),nT=Cr(Cv,aT,a(S,"width",q),a(S,"height",q),a(S,"pressure",q),a(S,"tiltX",q),a(S,"tiltY",q)),tT=Mr(function(e,r,n,t,o,c){return{pt:r,pJ:n,bb:e,st:t,sJ:o,tp:c}}),cN=4,iN=0,fN=5,uN=1,$N=2,lN=3,oT=function(e){switch(e){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;default:return 0}},cT=a(Ge,oT,a(S,"button",xi)),iT=v(Nn,l(function(e,r){return h(e,r)}),a(S,"clientX",q),a(S,"clientY",q)),fT=J(function(e,r,n,t){return{oV:e,pY:r,rX:n,tA:t}}),uT=V(xc,fT,a(S,"altKey",ae),a(S,"ctrlKey",ae),a(S,"metaKey",ae),a(S,"shiftKey",ae)),$T=v(Nn,l(function(e,r){return h(e,r)}),a(S,"offsetX",q),a(S,"offsetY",q)),lT=v(Nn,l(function(e,r){return h(e,r)}),a(S,"pageX",q),a(S,"pageY",q)),vT=v(Nn,l(function(e,r){return h(e,r)}),a(S,"screenX",q),a(S,"screenY",q)),sT=Gr(H2,tT,uT,cT,iT,$T,lT,vT),vN=0,sN=2,dN=1,dT=function(e){switch(e){case"pen":return 2;case"touch":return 1;default:return 0}},bT=a(Ge,dT,Se),mT=Cr(Cv,rT,a(S,"pointerType",bT),sT,a(S,"pointerId",xi),a(S,"isPrimary",ae),nT),pT=x(function(e,r,n){return a(eT,e,a(Ge,function(t){return{V:n(t),Y:r.Y,_:r._}},mT))}),z5=a(pT,"pointerdown",KL),hT=function(e){return{$:5,a:e}},gT=function(e){return{$:6,a:e}},yT=J(function(e,r,n,t){return a(W,u([M5(z5(function(o){return e.u(gT(t))})),mt(e.u(hT(t)))]),u([a(r,n,t)]))}),_T=J(function(e,r,n,t){return Je(t.aR)?a(W,u([E(u([Me(L(e.eL)),_e,Ye(we),Hr(we),Ce(r.kt),vr(me(0))]))]),u([ce("No matching items")])):v(b5,"div",u([Xt(jo(e)),E(u([Me(L(e.eL)),P(T$,L(0),L(4),L(0),L(4)),Vc(bf),a(z,"overscroll-behavior","contain"),vr(me(0)),_e,Ir(sa)])),M5(z5(function(o){return e.u(Ca)})),a(ra,"scroll",a(Ge,a(Ie,D1,e.u),a(Wi,u(["currentTarget","scrollTop"]),q))),a(qc,"wheel",re({V:e.u(Ca),Y:!1,_:!0}))]),(function(){var o=Pr(t.aR),c=a(Ne,o-1,ml((t.bT+e.eL)/Wt)+T5),i=a(je,0,Rt(t.bT/Wt)-T5),f=i*Wt,$=a(Hn,l(function(d,b){var g=i+d;return h(Xe(g),P(yT,e,n,ie(g,t.ax),b))}),a(qn,c-i+1,a(qt,i,t.aR))),s=a(je,0,o-1-c)*Wt;return a(A,h("top-spacer",a(W,u([E(u([Me(L(f)),vr(me(0))]))]),C)),Q($,u([h("bottom-spacer",a(W,u([E(u([Me(L(s)),vr(me(0))]))]),C))])))})())}),CT=function(e){return{$:9,a:e}},PT=function(e){return a(Ge,function(r){return{V:e.u(CT(r)),Y:!0,_:!0}},a(S,"deltaY",q))},A$=Mt(function(e,r,n,t,o,c,i){var f=i;return a(W,u([E(u([Ce(r.kv),_e,Ir(sa),a(z,"gap","8px"),Pe(Ze(100))])),a(qc,"keydown",a(QL,e,t)),a(qc,"mousedown",re({V:e.u(Ca),Y:!1,_:!0})),a(qc,"pointerdown",re({V:e.u(Ca),Y:!1,_:!0})),a(qc,"pointerup",re({V:e.u(Ca),Y:!1,_:!0})),a(qc,"wheel",PT(e))]),Q(n,Q(u([a(Fc,u([Vo("text"),Xt(J3(e)),a(Ue,"data-select-all-on-focus","true"),g5(e.jV),E(u([Pe(Ze(100)),vr(me(0)),a(wr,L(8),L(8)),$r(L(4)),nn(fr),Te(r.ko),Ce(r.t3),a(hv,"placeholder",u([Ce(r.kt)]))])),yf(a(Ie,GL,e.u)),Ec(f.hZ)]),C),P(_T,e,r,o,f)]),c)))}),jf=function(e){return e.D>.55?{oU:1,aS:0,D:.1,a0:0}:{oU:1,aS:0,D:.98,a0:0}},ST=function(e){return G(e.Z.$8)+(" \xD7 "+G(e.Z.he))},D5=x(function(e,r,n){var t=r?nr(u([Te(a(K,function(c){return c.bp},e)),Ce(a(K,a(Ie,function(c){return c.bp},jf),e))])):Ce(a(K,function(c){return c.t3},e)),o=r?a(K,a(Ie,function(c){return c.bp},jf),e):a(K,function(c){return c.kv},e);return a(W,u([E(u([a(wr,L(0),L(12)),Me(L(32)),_e,Ye(we),Pf(Cf),a(z,"gap","10px"),t]))]),u([a(gr,u([E(u([j$(me(1)),sr(L(13))]))]),u([ce(n.sc)])),a(gr,u([E(u([sr(L(12)),Ce(o)]))]),u([ce(ST(n))]))]))}),kT=J(function(e,r,n,t){var o=t;return Gr(A$,_c(r),xf(e),u([P(NL,e,r,n,o.dF)]),D({sv:r.u(_v(0)),sy:r.u(_v(1))}),D5(e),C,o.bg)}),Pv=J(function(e,r,n,t){return a(W,u([E(u([er(pt),Sa(le),da(le),rn(lr(.001)),ht(fr)])),a(Ue,"inert","")]),u([Gr(A$,I(e,{fq:e.fq+"-warmup"}),r,C,M,n,C,t)]))}),xT=x(function(e,r,n){var t=n;return P(Pv,_c(r),xf(e),D5(e),t.bg)}),jT=function(e){if(!e.b0.ds||e.oM)return ce("");var r={fq:k2,u:e.jC};return a(W,C,u([v(oo,e.e,e.pM,{br:Qt(7),kY:P(kT,e.e,r,e.sB,e.S),by:7,bz:e.f,a3:e.az.a3,dL:e.az.dM(7),ok:Da(7),om:"Device",u:e.aX}),v(xT,e.e,r,e.S)]))},wT=x(function(e,r,n){return(function(t){return v(Xa,e,t,n.bD)})(v(se,e,r,n.bx))}),LT=l(function(e,r){return a(rr,a(wT,e,r),a$)}),TT=function(e){var r=e,n=v(LT,l(function(c,i){var f=i.a,$=i.b;return h(f+1,$+c.iQ)}),h(0,0),r.f7),t=n.a,o=n.b;return t>1&&o>0?D(t/o):M},MT=be("flex-end"),A5=function(e){return e*1e3},zT=function(e){var r=e.us;return{kx:0,us:a(Ac,"translateY",u([r]))}},DT=function(e){return a(W,u([E(u([er(za),Pe(Ze(100)),Me(L(1)),P$(u([zT(Ze(-50))])),Te(tr(e.dG.q3)),Qn(L(A5(1/60)))]))]),C)},AT=function(e){return Q(e.bx,He(e.bD))},IT=a(rr,AT,a$),BT=l(function(e,r){var n=r*1e3;return n<=18?e.dG.q3:n<=33?e.dG.uS:e.dG.s9}),VT=l(function(e,r){return a(W,u([E(u([Hc(fr),Pe(L(4)),Me(L(A5(r))),Qn(le),Te(tr(a(BT,e,r)))]))]),C)}),HT=l(function(e,r){return a(W,u([E(u([er(Ao),Me(L(50)),Pe(L(P3*4)),Vc(mf),Te(tr(e.kp))]))]),u([DT(e),a(W,u([E(u([er(za),dt(le),Qn(le),Me(Ze(100)),_e,Ir(Dc),Ye(MT)]))]),a(Y,a(Ie,function(n){return n.iQ},VT(e)),IT(r)))]))}),I5=l(function(e,r){if(e<0)return r;var n=a(bn,10,e),t=$g(n),o=function(c){return c/n};return o(Vr(t(r)))}),RT=l(function(e,r){return e<0?r:a(I5,e,r)}),FT=function(e){return e>=0?"":"-"},wf=l(function(e,r){var n=function(t){var o=a($n,".",t);e:for(;;)if(o.b)if(o.b.b){if(o.b.b.b)break e;var c=o.a,i=o.b,f=i.a;return c+("."+v(Uu,e,"0",f))}else{var c=o.a;return c+("."+a(fc,e,"0"))}else break e;return t};return h2(r)?"NaN":hc(r)?FT(r)+"Infinity":e<=0?G(a(RT,e,r)):n(G(a(I5,e,r)))}),ET=l(function(e,r){return a(W,u([E(u([Ce(tr(e.dG.q3))]))]),u([ce("Frame Rate: "),ce(a(te,"-",a(de,wf(0),r)))]))}),UT=l(function(e,r){var n=r;return a(W,u([E(u([_e,Ir(sa),a(z,"gap","8px")]))]),u([a(HT,e,n.f7),a(ET,e,TT(r))]))}),B5=function(e){return a(be,"animation-duration",e)},qT=function(e){return{$:5,a:e}},V5=function(e){return e.us==="none"||e.us==="inherit"||e.us==="unset"||e.us==="initial"?a(be,"animation-name",e):qT(e.us)},bN=ne,Ho=l(function(e,r){return e+(":"+r)}),NT=function(e){return ie(e,t$)},GT=function(e){var r=e.a,n=e.b,t=v(va,function(c){var i=c;return i+";"},"",n),o=Xe(r)+"%";return o+("{"+(t+"}"))},YT=function(e){return v(va,GT,"",e)},H5=function(e){return Je(e)?{ja:0,jw:0,us:"none"}:{ja:0,jw:0,us:YT(e)}},R5=function(e){return{cB:0,us:G(e)+"s"}},WT={$:2},OT={$:3},JT=function(e){return ie(e,t$)?OT:WT},ZT=function(e){return{$:3,a:e}},QT=l(function(e,r){return{$:4,a:e,b:r}}),XT=function(e){return QT(a(Y,ZT,e))},KT=x(function(e,r,n){var t=NT(n),o=t?"Stop profiling":"Start profiling",c=t?a(W,u([E(u([Pe(Ze(100)),Me(Ze(100)),_e,Ye(we),Hr(we),Ce(a(K,a(Ie,function(i){return i.dG},function(i){return i.s9}),e)),V5(H5(u([h(0,u([a(Ho,"opacity","1")])),h(50,u([a(Ho,"opacity","0.35")])),h(100,u([a(Ho,"opacity","1")]))]))),B5(R5(1.2)),a(z,"animation-iteration-count","infinite"),a(z,"animation-timing-function","ease-in-out"),a(XT,u(["(prefers-reduced-motion: reduce)"]),u([a(z,"animation","none")]))]))]),u([dr.s8])):dr.s8;return a(W,u([E(u([_e,Hr(we),Pe(Ze(100))]))]),u([a(W,u([E(u([Pe(L(160))]))]),u([a(k5,e,{qe:!1,l0:D(c),rx:t,jb:o,f$:r(JT(n)),Z:1,ut:1})]))]))}),eM=function(e){var r=e.b0.es?u([v(KT,e.e,e.f1,e.aL)]):C;return a(W,u([E(u([_e,Ir(sa),a(z,"gap","8px")]))]),a(A,a(UT,Yn(e.e),e.c$),r))},rM=function(e){return!e.b0.fK||e.oM||$t(e.t1)?ce(""):v(oo,e.e,e.pM,{br:Qt(2),kY:eM(e),by:2,bz:e.f,a3:e.az.a3,dL:e.az.dM(2),ok:Da(2),om:"Performance",u:e.aX})},Lf=function(e){return e?"true":"false"},I$=function(e){var r=e.b;return U3(r)},Aa=x(function(e,r,n){return a(W,u([E(u([_e,a(z,"gap","16px"),a(wr,L(3),le),Ye(h5),a(z,"font-family",on.r7),sr(L(12)),a(z,"font-feature-settings",'"tnum"')]))]),u([a(W,u([E(u([Ce(a(K,function(t){return t.kt},e)),Pe(L(120)),vr(me(0))]))]),u([ce(r)])),a(W,u([E(u([Ce(a(K,function(t){return t.t3},e))]))]),u([ce(n)]))]))}),B$=x(function(e,r,n){return a(W,u([E(u([a(wr,le,L(20))]))]),a(A,a(f5,e,r),n))}),aM=function(e){var r=e.e,n=e.pM;return a(W,u([E(u([_e,Ir(sa),a(z,"gap","18px"),a(wr,L(14),le),Pe(L(c5))]))]),u([v(B$,r,"Tape",u([v(Aa,r,"frame",Xe(I$(e.t1))),v(Aa,r,"dt",a(gc,4,n.iQ)),v(Aa,r,"clock",a(gc,4,n.gN))])),v(B$,r,"Pointer",u([v(Aa,r,"x",a(gc,2,n.ny.dY)),v(Aa,r,"y",a(gc,2,n.ny.fd)),v(Aa,r,"isDown",Lf(n.ny.i7))])),v(B$,r,"Keyboard",u([v(Aa,r,"pressed",a(zr," ",n.mq.s2)),v(Aa,r,"shift",Lf(n.mq.tA)),v(Aa,r,"ctrl",Lf(n.mq.pY)),v(Aa,r,"meta",Lf(n.mq.rX)),v(Aa,r,"alt",Lf(n.mq.oV))])),v(B$,r,"Wheel",u([v(Aa,r,"deltaX",G(n.uA.p7)),v(Aa,r,"deltaY",G(n.uA.p8))]))]))},nM=function(e){return!e.b0.fL||e.oM?ce(""):v(oo,e.e,e.pM,{br:Qt(1),kY:aM(e),by:1,bz:e.f,a3:e.az.a3,dL:e.az.dM(1),ok:Da(1),om:"Inputs",u:e.aX})},mN=1,F5=function(e){return{oV:!1,pL:e,pY:!1,rX:!1,tA:!1}},tM=function(e){return I(e,{rX:!0})},Sv=function(e){return tM(F5(e))},oM=function(e){return I(e,{pY:!0})},kv=function(e){return oM(F5(e))},cM=function(e){return e===1?"\u2325":"Alt"},iM=function(e){return e===1?"\u2303":"Ctrl"},fM=l(function(e,r){if(a(Fn,"Key",r))return a(Qa,3,r);if(a(Fn,"Digit",r))return a(Qa,5,r);switch(r){case"BracketLeft":return"[";case"BracketRight":return"]";case"Slash":return"/";case"Backslash":return"\\";case"Period":return".";case"Comma":return",";case"Semicolon":return";";case"Quote":return"'";case"Backquote":return"`";case"Minus":return"-";case"Equal":return"=";case"Space":return"Space";case"ArrowLeft":return"\u2190";case"ArrowRight":return"\u2192";case"ArrowUp":return"\u2191";case"ArrowDown":return"\u2193";case"Enter":return e===1?"\u21A9":"Enter";case"Escape":return e===1?"\u238B":"Esc";case"Tab":return e===1?"\u21E5":"Tab";case"Backspace":return e===1?"\u232B":"Backspace";case"Delete":return e===1?"\u2326":"Del";default:return r}}),uM=function(e){return e===1?"\u2318":"Win"},$M=function(e){return e===1?"\u21E7":"Shift"},V$=l(function(e,r){var n=e===1?"":"+",t=a(jr,ne,u([r.pY?D(iM(e)):M,r.oV?D(cM(e)):M,r.tA?D($M(e)):M,r.rX?D(uM(e)):M,D(a(fM,e,r.pL))]));return a(zr,n,t)}),lM=function(e){var r=(function(){var t=e.pM.sG===1?Sv("KeyI"):kv("KeyI");return a(V$,e.pM.sG,t)})(),n=Au(e.e);return a(D$,e.e,{qe:!1,l0:function(t){return t?dr.tV:dr.r8},rA:Ya(n),rB:function(t){return t?"Lights on":"Lights off"},rC:u([!1,!0]),jb:"Lights",sz:function(t){return ie(t,n)?e.eR:e.jD(a1(e.e))},sB:e.sB,dF:0,tw:function(t){return function(o){return Ic}},n0:function(t){return D(r)},ua:1})},vM={$:2},sM={$:3},dM=(function(){var e=f2,r=e.a,n=e.b;return a(A,r,n)})(),bM=function(e){return{$:1,a:e}},mM=vt("title"),pM=J(function(e,r,n,t){var o=Yn(e).dG,c=ie(t,n),i=a(rb,t,o),f=a(cr,function(s){return s.iz},e),$=c?u([a(z,"outline","3px solid "+ke(f)),a(z,"outline-offset","2px")]):C;return a(bt,u([a(Ue,"aria-pressed",c?"true":"false"),a(Ue,"type","button"),mM(Nb(t)),mt(r(bM(t))),E(Q(u([Pe(L(28)),Me(L(28)),$r(Ze(50)),Te(tr(i)),v(eo,L(1),ro,tr(f)),ea(tn),an(L(0))]),$))]),C)}),hM=x(function(e,r,n){var t=Po(n);return a(W,u([a(Ue,"role","group"),a(Ue,"aria-label","Accent colour"),E(u([_e,Ye(we),a(z,"gap","12px"),vr(me(0))]))]),a(Y,v(pM,e,r,t),dM))}),gM=J(function(e,r,n,t){return a(W,u([E(u([_e,Ye(we),Hr(we),a(z,"gap","14px"),a(wr,L(6),L(0)),vr(me(0))]))]),Q(n,u([v(hM,e,r,t)])))}),yM=function(e){return a(W,u([E(u([Pe(L(12)),Me(L(12)),$r(L(2)),Te(tr(e))]))]),C)},_M=function(e){return a(W,u([E(u([_e,a(z,"gap","3px"),vr(me(0))]))]),a(Y,yM,u([e.o5,e.qR,e.pd,e.q3,e.s9,e.uS])))},E5=x(function(e,r,n){var t=r?nr(u([Te(a(K,function(o){return o.bp},e)),Ce(a(K,a(Ie,function(o){return o.bp},jf),e))])):Ce(a(K,function(o){return o.t3},e));return a(W,u([E(u([a(wr,L(0),L(12)),Me(L(32)),_e,Ye(we),Pf(Cf),a(z,"gap","10px"),t]))]),u([_M(n),a(gr,u([E(u([j$(me(1)),sr(L(13))]))]),u([ce(n.sc)]))]))}),CM=J(function(e,r,n,t){var o=t;return Gr(A$,Cc(r),xf(e),u([P(gM,e,r.u,n,o.cQ)]),D({sv:r.u(vM),sy:r.u(sM)}),E5(e),C,o.bg)}),PM=x(function(e,r,n){var t=n;return P(Pv,Cc(r),xf(e),E5(e),t.bg)}),SM=function(e){if(!e.b0.b9||e.oM)return ce("");var r={fq:L2,u:e.jJ};return a(W,C,u([v(oo,e.e,e.pM,{br:Qt(5),kY:P(CM,e.e,r,u([lM(e)]),e.R),by:5,bz:e.f,a3:e.az.a3,dL:e.az.dM(5),ok:Da(5),om:"Theme",u:e.aX}),v(PM,e.e,r,e.R)]))},kM=function(e){return v(Cn,"style",C,u([ce(`
.`+(sv+(` {
  position: fixed;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
}
.`+(sv+`::backdrop {
  background: transparent;
}
`))))]))},xM=l(function(e,r){return`
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
`)))))}),jM=`
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
`,wM=function(e){var r=ke(a(pr,.25,a(cr,function(t){return t.bp},e))),n=ke(a(cr,function(t){return t.bp},e));return v(Cn,"style",C,u([ce(Q(jM,a(xM,n,r)))]))},LM=function(e){var r=ke(Ic),n=ke(a(pr,.25,a(cr,function(i){return i.bp},e))),t=ke(a(cr,function(i){return i.iy},e)),o=ke(a(cr,function(i){return i.ij},e)),c=ke(a(cr,function(i){return i.bp},e));return v(Cn,"style",C,u([ce(`
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
.ui-slider:disabled {
  cursor: default;
}
.ui-slider:disabled::-webkit-slider-thumb {
  cursor: default;
}
.ui-slider:disabled::-moz-range-thumb {
  cursor: default;
}
.ui-slider:focus {
  outline: none;
}
.ui-slider:focus-visible::-webkit-slider-thumb {
  box-shadow:
    0 0 0 2px `+(r+(`,
    0 3px 6px rgba(0, 0, 0, 0.4),
    0 0 0 4px `+(n+`;
}
`))))))))))))))))))))))))))))]))},TM=l(function(e,r){return a(tm,e+" ",r)}),MM=function(e){return{o5:a(K,function(r){return r.bp},e),qR:tr(jf(a(cr,function(r){return r.bp},e))),gy:st.cN}},zM=function(e){return MM(e)},DM=function(e){return{$:5,a:e}},AM=function(e){return{$:11,a:e}},IM={$:15},BM=function(e){return{$:9,a:e}},VM={$:10},HM={$:7},RM={$:8},FM=function(e){var r=e,n=a(Hn,l(function(t,o){return h(o,t)}),r.aK);return{a3:Pr(r.aK),dM:function(t){return a(te,0,a(de,Mu,kr(a(xr,function(o){var c=o.a;return ie(c,t)},n))))}}},EM=l(function(e,r){return{P:r.oN.P,pM:e.pM,gU:{nh:a(rr,e.u,BM),oo:a(de,function(n){return{br:n.br,hy:n.hy}},r.d6)},S:r.S,f:r.f,fA:e.fA,c$:r.c$,m3:r.m3,eR:e.u(IM),jA:a(rr,e.u,Y3),jB:e.u(Q2),f0:e.f0,jC:a(rr,e.u,S2),aX:a(rr,e.u,O2),jD:function(n){return e.u(DM(n))},jE:a(rr,e.u,AM),jF:e.u(VM),jG:e.u(HM),f1:a(rr,e.u,J2),jH:e.u(RM),dE:e.dE,jJ:a(rr,e.u,w2),eS:e.eS,sB:a(rr,e.u,Z2),aL:r.aL,bE:r.bE,az:FM(r.f),t1:e.t1,R:r.R,e:r.e,cN:r.cN,b0:e.ga,oM:r.oM}}),UM=l(function(e,r){switch(e){case 3:return{dY:r.j4,fd:.5*(r.ib+r.ph)};case 2:return{dY:r.eF,fd:.5*(r.ib+r.ph)};case 0:return{dY:.5*(r.eF+r.j4),fd:r.ib};default:return{dY:.5*(r.eF+r.j4),fd:r.ph}}}),pN=1,qM={lH:0,fG:0,dq:0,eJ:0,nm:0,us:"normal",dX:0},H$=x(function(e,r,n){switch(e){case 0:return r;case 1:return .5*(r+n);default:return n}}),NM=J(function(e,r,n,t){switch(r){case 0:return h(v(H$,n,e.eF,e.j4),e.ib-t);case 1:return h(v(H$,n,e.eF,e.j4),e.ph+t);case 2:return h(e.eF-t,v(H$,n,e.ib,e.ph));default:return h(e.j4+t,v(H$,n,e.ib,e.ph))}}),R$=function(e){switch(e){case 0:return"0";case 1:return"-50%";default:return"-100%"}},U5=function(e){var r=e.q$,n=e.oS,t=e.ed,o=e.br,c=(function(){switch(t){case 0:return"-100%";case 1:return"0";case 2:return R$(n);default:return R$(n)}})(),i=(function(){switch(t){case 0:return R$(n);case 1:return R$(n);case 2:return"-100%";default:return"0"}})(),f="translate("+(i+(", "+(c+")"))),$=P(NM,o,t,n,r),s=$.a,d=$.b;return u([er(pt),da(L(s)),Sa(L(d)),a(z,"transform",f)])},GM=l(function(e,r){return a(W,u([E(Q(U5({oS:1,br:r.br,ed:r.ed,q$:6}),u([a(wr,L(7),L(14)),Te(e.o5),Ce(e.qR),$r(Pn.rS),Zn(me(e.gy)),_e,Ir(Dc),a(z,"gap","12px"),a(z,"width","max-content"),ov(qM),j5(L(360)),Sn(lr(1.45))])))]),u([a(gr,C,u([ce(r.jb)])),(function(){var n=r.n0;if(n.$===1)return ce("");var t=n.a;return a(gr,u([E(u([Ce(e.qR)]))]),u([ce(t)]))})()]))}),YM=l(function(e,r){return{gE:0,cw:0,us:Q(G(r),e)}}),WM=YM("deg"),OM=function(e){var r=e.us;return{kx:0,us:a(Ac,"rotate",u([r]))}},JM=x(function(e,r,n){return a(W,u([E(u([er(pt),da(L(n.dY)),Sa(L(n.fd)),Te(e.o5),Pe(L(10)),Me(L(10)),Zn(me(e.gy)),a(z,"transform-origin","top left"),z$(OM(WM((function(){switch(r){case 3:return-45;case 2:return 135;case 1:return 45;default:return-135}})())))]))]),C)}),q5=l(function(e,r){return a(W,C,u([v(JM,e,r.ed,a(UM,r.ed,r.br)),a(GM,e,r)]))}),ZM=l(function(e,r){var n=r;if(n.$){var t=n.a,o=t.X;switch(o.$){case 1:return a(q5,e,t);case 2:return a(q5,e,t);case 0:return ce("");default:return ce("")}}else return ce("")}),QM=480,XM=l(function(e,r){return e.gY}),KM=be("min-width"),ez=J(function(e,r,n,t){var o=n?nr(u([Te(a(K,function(c){return c.bp},e)),Ce(a(K,a(Ie,function(c){return c.bp},jf),e))])):Ce(a(K,function(c){return c.t3},e));return a(W,u([E(u([_e,Hr(lv),Ye(we),a(wr,L(0),L(12)),Me(L(32)),Pf(Cf),o]))]),u([a(gr,u([E(u([sr(L(13)),j$(me(1))]))]),u([ce(t.h$+(": "+t.jb))])),a(gr,u([E(u([sr(L(13)),KM(L(70)),vr(me(0)),w5(dt)]))]),u([ce(a(te,"",a(de,V$(r.sG),a(XM,t,r))))]))]))}),rz=function(e){return{fq:W3,eL:320,jV:"Type a command\u2026",u:e,$8:{r1:400,ux:50}}},az=function(e){if(a(Oi,e.b0,e.P)){var r=a(ez,e.e,e.pM),n=xf(e.e),t=rz(e.jA);return a(W,C,u([v(oo,e.e,e.pM,{br:Qt(6),kY:a(W,u([E(u([Pe(L(QM))]))]),u([Gr(A$,t,n,C,M,r,C,e.P)])),by:6,bz:e.f,a3:e.az.a3,dL:e.az.dM(6),ok:Da(6),om:"Command palette",u:e.aX}),P(Pv,t,n,r,e.P)]))}else return ce("")},nz=l(function(e,r){return a(W,u([a(Ue,"role","status"),E(Q(U5({oS:r.oS,br:r.br,ed:r.ed,q$:6}),u([a(wr,Uc.tD,Uc.rH),$r(Pn.rS),Te(a(K,function(n){return n.bp},e)),Ce(a(K,function(n){return v(K1,.6,n.bp,n.t3)},e)),nr(gt.om),ov(a5),X1.qq,Zn(me(st.oo)),a(z,"pointer-events","none"),V5(H5(u([h(0,u([a(Ho,"opacity","0")])),h(8,u([a(Ho,"opacity","1")])),h(92,u([a(Ho,"opacity","1")])),h(100,u([a(Ho,"opacity","0")]))]))),B5(R5(O3)),a(z,"animation-fill-mode","forwards")])))]),u([ce(r.V)]))}),tz=function(e){var r=e.gU.oo;if(r.$===1)return ce("");var n=r.a.hy,t=r.a.br;return a(nz,e.e,{oS:1,br:t,ed:1,V:n?"Nothing to Reset":"Use the browser's Back button to undo"})},oz=function(e){var r=l(function(n,t){return"inset 0 0 "+(G(n)+("px 0 "+ke(a(pr,t,e))))});return a(zr,", ",u([a(r,90,.22),a(r,30,.4),a(r,8,.65)]))},N5=function(e){switch(e){case 0:return M;case 1:return D(v(Br,1/6,1,.5));default:return D(v(Br,1/3,1,.5))}},cz=function(e){var r=N5(e.m3);if(r.$===1)return ce("");var n=r.a;return a(W,u([E(u([er(pt),Sa(le),da(le),dt(le),Qn(le),a(z,"pointer-events","none"),a(z,"box-shadow",oz(n))]))]),C)},hN=0,xv=a($f,0,"rem"),iz=function(e){if(!$t(e.t1)||e.oM)return ce("");var r=e.pM.f9,n=e.pM.ny,t=ke(n.i7?a(cr,function(c){return c.t3},e.e):a(cr,function(c){return c.bp},e.e)),o=a(zr," ",u(["drop-shadow(1px 0 "+(t+")"),"drop-shadow(-1px 0 "+(t+")"),"drop-shadow(0 1px "+(t+")"),"drop-shadow(0 -1px "+(t+")")]));return a(W,u([E(u([er(za),Sa(le),da(le),Pe(xv(2)),Me(xv(2)),a(z,"pointer-events","none"),a(z,"transform","translate("+(G(n.dY+.5*r.$8)+("px, "+(G(-n.fd+.5*r.he)+"px)")))),Ce(n.i7?a(K,function(c){return c.bp},e.e):a(K,function(c){return c.t3},e.e)),a(z,"filter",o),Zn(me(st.a6+1))]))]),u([dr.ny]))},fz=function(e){return{$:0,a:e}},uz=g6,gN=ne,$z=function(e){return a(T,e,re(0))};function jv(){return kc(wv())}function wv(){return P(Sc,x(function(e,r,n){return{gK:r,dn:n,cB:e}}),a(S,"duration",q),a(S,"callCount",xi),a(S,"children",$z(function(e){return jv()})))}var G5=jv();jv=function(){return G5};var lz=wv();wv=function(){return lz};var vz=function(e){return a(Ge,e,a(Wi,u(["detail"]),v(Nn,l(function(r,n){return{f4:r,aB:n}}),a(S,"recordingStartTime",q),a(S,"tickSnapshots",uz(v(Nn,l(function(r,n){return{iX:n,df:r}}),a(S,"timestamp",q),a(S,"flameGraph",G5)))))))},sz=function(e){var r=e.sx,n=e.tl;return v(Cn,"profiler-element",Q(u([a(ra,"result",vz(r))]),n?u([a(Ue,"running","")]):C),C)},dz=function(e){return sz({sx:fz,tl:ie(e,t$)})},bz=function(e){return Je(e)?{us:"none"}:{us:a(zr,", ",e)}},mz=a(rr,be("font-family"),bz),Lv=l(function(e,r){return a(u$,l(function(n,t){var o=t,c=a(Ke,n,e);if(c.$===1)return o;var i=c.a;return{gK:o.gK-i.gK,dn:a(Lv,i.dn,o.dn),cB:o.cB-i.cB}}),r)}),Y5=l(function(e,r){var n=e.cD,t=e.cL,o=r.aB,c=t?a(te,Re,a(de,function(f){return f.iX},a($a,t-1,o))):Re,i=a(te,Re,a(de,function(f){return f.iX},a($a,n,o)));return a(Lv,c,i)}),pz=be("max-height"),W5=function(e){return v(su,x(function(r,n,t){return a(A,n,t)}),C,e)},Nc=function(e){return{$:9,a:e}},O5=function(e){var r=(function(n){return 1-n.ie/n.ht})(v(se,l(function(n,t){var o=a(Qr,t.fY,it(n));return{ht:t.ht+t.gx,fY:t.fY+1,ie:t.ie+o/(t.fY-1)*t.gx,gx:t.gx*.7}}),{ht:0,fY:10,ie:0,gx:1},a(qn,8,Si(e))));return{oU:1,aS:r,D:.35,a0:.45}},hz=function(e){return a(ra,"mouseout",re(e))},gz=function(e){return a(ra,"mouseover",re(e))},yz=Mr(function(e,r,n,t,o,c){var i=n>0?c/n*100:0,f=ie(t,D(o)),$=tr(f?e.t3:O5(o)),s=!ie(t,M),d=lr(s&&!f?.3:1);return a(W,u([E(u([er(Ao),ev(L(r*16)),Me(L(24)),Sn(L(24)),ea(tn),rn(d),Jn(u([Te(tr(e.kn)),Ce(tr(e.t3))]))])),gz(Nc(D(o))),hz(Nc(M))]),u([a(W,u([E(u([er(za),Sa(le),da(L(r*16)),Pe(Ze(i)),Me(Ze(100)),Te($)]))]),C),a(gr,u([E(u([er(Ao),ev(L(6)),Zn(me(1))]))]),u([ce(o)]))]))}),_z=Le(function(e,r,n,t,o){var c=o.a,i=o.b.dn,f=o.b.cB;return a(A,Cr(yz,e,r,n,t,c,f),V(J5,e,r+1,n,t,i))}),J5=Le(function(e,r,n,t,o){return a(yn,P(_z,e,r,n,t),a(Sf,vn,Ga(o)))}),Cz=Le(function(e,r,n,t,o){var c=v(Qi,r,n,t),i=c.a,f=i.b,$=c.b,s=$.b,d=a(Y5,{cD:s,cL:f},t),b=a(te,0,Ku(a(Y,function(g){var p=g.cB;return p},W5(d))));return a(W,u([E(u([an(L(8)),r5(bf),pz(L(300)),Te(tr(e.kp)),Ce(tr(e.kv))]))]),V(J5,e,0,b,o,d))}),Z5=function(e){return v(b$,"alignSelf","align-self",e(m$))},Pz={qf:0,us:"block"},Sz=be("flex-start"),Ro=hr("height"),Q5=ra,Fo=no("g"),F$=no("line"),X5=l(function(e,r){var n=r.aB,t=function(o){return o<0?Re:a(te,Re,a(de,function(c){return c.iX},a($a,o,n)))};return a(Lv,t(e-1),t(e))}),K5=function(e){return e.$===-2},e4=function(e){return K5(e)?0:a(te,0,Ku(a(Y,function(r){var n=r.dn;return 1+e4(n)},W5(e))))},kz=function(e){var r=la(e.aB);return a(te,0,Ku(a(Y,function(n){return e4(a(X5,n,e))},a(Vn,1,r-1))))},xz=function(e){return a(Sf,ne,e)},E$=l(function(e,r){var n=r.f4,t=r.aB;return e?a(te,n,a(de,function(o){return o.df},a($a,e-1,t))):n}),r4=l(function(e,r){var n=a(te,r.f4,a(de,function(t){return t.df},a($a,e,r.aB)));return n-a(E$,e,r)}),jz=function(e){var r=la(e.aB),n=xz(a(Y,function(o){return a(r4,o,e)},a(Vn,1,r-1))),t=a(je,0,Rt(Pr(n)*.95)-1);return a(te,16.7,kr(a(qt,t,n)))},Gc=no("rect"),Tf=hr("stroke"),Mf=hr("stroke-width"),wz=function(e){return{$:5,a:e}},Lz=function(e){return{$:6,a:e}},Tz={aQ:0,us:"ew-resize"},U$=hr("x1"),q$=hr("x2"),N$=hr("y1"),G$=hr("y2"),Mz=J(function(e,r,n,t){var o=n.a,c=n.b,i=a(Kr,r,en.h4),f=a(Kr,r,en.hU),$=function(F){return a(Ge,function(H){return F({fp:H})},a(S,"clientX",q))},s=l(function(F,H){return a(Fo,C,u([a(F$,u([U$(G(F)),N$("0"),q$(G(F)),G$(G(i)),Tf("transparent"),Mf(G(a(Kr,r,10))),Xn(u([ea(Tz)])),a(Q5,"pointerdown",$(H))]),C),a(F$,u([U$(G(F)),N$("0"),q$(G(F)),G$(G(i)),Tf(ke(e.dG.s9)),Mf(G(a(Kr,r,1))),Xn(u([ht(fr)]))]),C)]))}),d=v(Qi,r,a(Mc,o,c),t),b=d.a,g=b.a,p=b.b,_=d.b,y=_.a,k=_.b,w=g,j=y,B=(function(){if(o.$){var F=o.a,H=(function(){return F?a(te,t.f4,a(de,function(N){return N.df},a($a,k,t.aB))):a(E$,p,t)})();return a(F$,u([U$(G(H)),N$("0"),q$(G(H)),G$(G(f)),Tf(ke(e.dG.s9)),Mf(G(a(Kr,r,2))),Xn(u([ht(fr)]))]),C)}else return a(Fo,C,C)})();return a(Fo,C,u([a(s,w,wz),a(s,j,Lz),B]))}),a4=x(function(e,r,n){return ie(r,D(n))?ke(e.t3):ke(O5(n))}),n4=l(function(e,r){if(e.$)return 1;var n=e.a;return ie(n,r)?1:.3}),t4=function(e){return a(ra,"mouseout",re(e))},o4=function(e){return a(ra,"mouseover",re(e))},Tv=hr("opacity"),Mv=nm,c4=no("title"),Eo=hr("width"),Uo=hr("x"),qo=hr("y"),zz=l(function(e,r){var n=r.mf,t=r.lu,o=r.jb,c=r.he,i=r.$8,f=r.fd,$=r.dY,s=o+(" ("+(a(wf,2,t)+"ms)")),d=a(n4,e.ca,o),b=v(a4,e.de,e.ca,o),g=a(Gc,u([Uo(G($)),qo(G(f)),Eo(G(i)),Ro(G(c)),yt(b),Tv(G(d)),o4(Nc(D(o))),t4(Nc(M))]),u([a(c4,C,u([Mv(s)]))])),p=n?u([a(Gc,u([Uo(G($)),qo(G(f)),Eo(G(i)),Ro(G(a(Kr,e.a5,2))),yt(ke(e.de.dG.s9)),Xn(u([ht(fr)]))]),C)]):C;return a(A,g,p)}),i4=J(function(e,r,n,t){return v(se,l(function(o,c){var i=o.a,f=o.b,$=c.a,s=c.b,d=f.cB/e.eP,b=oe(d,e.cs)>0,g=P(i4,e,r+1,$,f.dn),p=a(Ne,e.cs,d),_=a(zz,e,{lu:f.cB,he:p,mf:b,jb:i,$8:e.h3,dY:e.dp+r*e.h3,fd:e.cs-$-p});return h($+p,Q(_,Q(g,s)))}),h(n,C),a(Sf,vn,Ga(t))).b}),Dz=l(function(e,r){var n=e.oI/e.eP,t=a(Ne,e.cs,n),o=oe(n,e.cs)>0,c=a(Kr,e.a5,1),i=a(je,0,e.oj-c),f=a(Ne,i,a(Kr,e.a5,en.oi)),$=a(Gc,u([Uo(G(e.dp)),qo(G(e.cs-t)),Eo(G(f)),Ro(G(t)),yt(ke(e.de.kt)),Xn(u([ht(fr)]))]),C),s=a(Kr,e.a5,2),d=o?u([a(Gc,u([Uo(G(e.dp)),qo("0"),Eo(G(f)),Ro(G(s)),yt(ke(e.de.dG.s9)),Xn(u([ht(fr)]))]),C)]):C,b=a(je,0,i-f),g=e.dp+f,p=(function(){if(b<=0||e.jn<=0||K5(r))return C;var _=b/e.jn;return P(i4,{dp:g,ca:e.ca,eP:e.eP,cs:e.cs,h3:_,de:e.de,a5:e.a5},0,0,r)})();return a(A,$,Q(d,p))}),Az=l(function(e,r){var n=function(i){return a(te,0,a(de,function(f){return f.df},a($a,i,r.aB)))},t=a(je,1,a(o$,e.eF,r)-1),o=la(r.aB),c=a(Ne,o-1,a(o$,e.j4,r)+1);return a(xr,function(i){var f=a(E$,i,r),$=n(i);return oe($,e.eF)>-1&&oe(f,e.j4)<1},a(Vn,t,c))}),Iz=Le(function(e,r,n,t,o){var c=a(Az,r,t),i=a(Kr,r,en.hU),f=kz(t),$=a(je,33.3,jz(t)),s=$>0?$/i:1,d=a(yn,function(_){var y=a(r4,_,t);return a(Dz,{dp:a(E$,_,t),ca:o,jn:f,eP:s,cs:i,de:e,oj:y,oI:y,a5:r},a(X5,_,t))},c),b=16.7/s,g=a(F$,u([U$(G(r.eF)),q$(G(r.j4)),N$(G(i-b)),G$(G(i-b)),Tf(ke(e.dG.uS)),Mf(G(a(Kr,r,1))),Xn(u([ht(fr)]))]),C),p=a(Gc,u([Uo(G(r.eF)),qo("0"),Eo(G(r.j4-r.eF)),Ro(G(i)),yt(ke(e.kp))]),C);return a(Fo,C,u([p,a(Fo,C,d),g,P(Mz,e,r,n,t)]))}),Bz=hr("font-size"),Vz=no("text"),Hz=l(function(e,r){var n=e.kT,t=e.nn,o=e.lN,c=.6*o,i=Rt((n-t)/c);return oe(Ja(r),i)<1?r:i<=1?"":a(Mi,i-1,r)+"\u2026"}),Rz=Mr(function(e,r,n,t,o,c){var i=c.gK,f=c.cB,$=a(Kr,r,en.nU),s=.3*$,d=n.fy*$,b=a(n4,t,o),g=.6*$,p=v(a4,e,t,o),_=a(zr," > ",He(a(A,o,n.fo))),y=_+(" ("+(Xe(i)+("x, "+(a(wf,2,f)+"ms)"))));return a(Fo,u([o4(Nc(D(o))),t4(Nc(M))]),u([a(c4,C,u([Mv(y)])),a(Gc,u([Uo(G(n.dZ)),qo(G(d)),Eo(G(f)),Ro(G($)),yt(p),Tf(ke(e.km)),Mf(G(a(Kr,r,1))),Tv(G(b))]),C),a(Vz,u([Uo(G(n.dZ+s)),qo(G(d+.7*$)),yt(ke(e.t3)),Bz(G(g)),Tv(G(b))]),u([Mv(a(Hz,{kT:f,lN:g,nn:s},y))]))]))}),f4=Le(function(e,r,n,t,o){return v(se,l(function(c,i){var f=c.a,$=c.b,s=i.a,d=i.b,b=V(f4,e,r,{fo:a(A,f,n.fo),fy:n.fy+1,dZ:s},t,$.dn),g=Cr(Rz,e,r,I(n,{dZ:s}),t,f,$);return h(s+$.cB,a(A,g,Q(b,d)))}),h(n.dZ,C),a(Sf,function(c){var i=c.a;return i},Ga(o))).b}),Fz=Le(function(e,r,n,t,o){var c=a(Kr,r,en.hU),i=v(Qi,r,n,t),f=i.a,$=f.a,s=f.b,d=i.b,b=d.b;return a(Fo,u([t5("translate("+(G($)+(", "+(G(c)+")"))))]),V(f4,e,r,{fo:C,fy:0,dZ:0},o,a(Y5,{cD:b,cL:s},t)))}),Ez=function(e){return{$:1,a:e}},Uz=P(Sc,x(function(e,r,n){return Ez({m5:n/en.h5,nW:e,nX:r})}),a(S,"deltaX",q),a(S,"deltaY",q),a(S,"offsetX",q)),qz=function(e){var r=e.j4-e.eF;return a(zr," ",a(Y,G,u([e.eF,0,r,a(Kr,e,en.h4)])))},Nz=Le(function(e,r,n,t,o){var c=r.j4-r.eF,i=a(nv,u([Eo(G(en.h5)),Ro(G(en.h4)),tv(qz(r)),a(Q5,"wheel",Uz),Xn(u([Te(tr(e.tZ)),l5(Pz)]))]),u([V(Iz,e,r,n,t,o),V(Fz,e,r,n,t,o)])),f=function(_){return a(W,u([E(Q(u([er(za),Sa(le),Qn(le),ht(fr),a(z,"backdrop-filter","blur(3px)"),a(z,"-webkit-backdrop-filter","blur(3px)")]),_))]),C)},$=function(_){return c?v(mr,0,1,(_-r.eF)/c):0},s=v(Qi,r,n,t),d=s.a,b=d.a,g=s.b,p=g.a;return a(W,u([E(u([er(Ao),Z5(Sz)]))]),u([i,f(u([da(le),Pe(Ze($(b)*100))])),f(u([dt(le),Pe(Ze((1-$(p))*100))]))]))}),Gz=l(function(e,r){var n=la(r.aB),t=Yn(e),o=(function(){var f=a($a,n-1,r.aB);if(f.$)return 0;var $=f.a;return $.df-r.f4})(),c=o>=1e3?a(wf,2,o/1e3)+" s":a(wf,0,o)+" ms",i=Xe(n)+(" ticks \xB7 "+c);return a(W,u([E(u([_e,Ye(we),Me(L(24)),a(wr,L(4),L(8))]))]),u([a(gr,u([E(u([Ce(tr(t.t3))]))]),u([ce(i)]))]))}),Yz=l(function(e,r){var n=Yn(e);return a(W,u([E(u([_e,Ir(sa),Ce(tr(n.kv)),mz(u(["monospace"])),sr(L(12)),a(z,"user-select","none")]))]),u([a(Gz,e,r.dK),V(Nz,n,r.a5,r.bi,r.dK,r.ca),V(Cz,n,r.a5,r.bi,r.dK,r.ca)]))}),Wz=l(function(e,r){if(r.$===3){var n=r.a;return D(a(Yz,e,n))}else return M}),Oz=function(e){if(e.b0.es){var r=(function(){var t=a(Wz,e.e,e.aL);if(t.$)return ce("");var o=t.a;return v(oo,e.e,e.pM,{br:Qt(3),kY:a(cf,e.f1,o),by:3,bz:e.f,a3:e.az.a3,dL:e.az.dM(3),ok:Da(3),om:"Profile",u:e.aX})})(),n=a(cf,e.f1,dz(e.aL));return a(W,C,u([n,r]))}else return ce("")},Jz=cr(a(Ie,function(e){return e.dG},function(e){return e.s9})),zv=l(function(e,r){return ke(a(pr,r,Jz(e.e)))}),Zz=x(function(e,r,n){var t=u([a(z,"background-color",a(zv,e,.28)),a(z,"-webkit-backdrop-filter","blur(18px)"),a(z,"backdrop-filter","blur(18px)")]),o="radial-gradient(circle 16px at 100% 0%, transparent 15px, #000 16px)",c=function(i){return a(W,u([E(Q(u([er(za),Pe(L(16)),Me(L(16)),a(z,"pointer-events","none"),a(z,"-webkit-mask",o),a(z,"mask",o)]),Q(t,i)))]),C)};return a(W,u([E(Q(u([er(pt),Qn(L(r)),da(L(r)),Zn(me(st.no)),a(z,"pointer-events","auto"),_e,Ye(we),a(z,"gap","12px"),a(z,"padding","8px 14px"),a(z,"border-radius","0 21px 0 0")]),t)),a(gf,"click",re(h(e.eR,!0)))]),Q(n,u([c(u([a(z,"top","-16px"),a(z,"left","0")])),c(u([a(z,"bottom","0"),a(z,"right","-16px")]))])))}),u4={$:3},Qz={$:2},yN=2,_N=1,CN=0,Dv=function(e){var r=e.b;return q3(r)},$4=function(e){var r=e.a;return ie(r,qi)},Xz=be("min-height"),Kz=be("stretch"),eD=function(e){return{$:0,a:e}},rD=function(e){var r=Dv(e.t1)-1,n=Lc(e.t1),t=n||r<=0;return a(Fc,u([Vo("range"),fv("0"),iv(Xe(r)),$v("1"),Ec(Xe(I$(e.t1))),df(t),yf(function(o){return e.dE(eD(a(te,0,zi(o))))}),Bo("ui-slider"),E(u([Pe(L(200)),vr(me(0)),Me(L(24)),a(z,"-webkit-appearance","none"),a(z,"appearance","none"),Te(hf),ea(tn),nn(fr),rn(lr(t?.4:1)),a(z,"--slider-fill",G(r>0?100*I$(e.t1)/r:0)+"%")]))]),C)},aD=function(e){var r=e.e,n=(function(){var $=function(p){return p===1||p===2},s=function(p){switch(p){case 0:return Qz;case 1:return u4;default:return n1}},d=function(p){switch(p){case 0:return"Record";case 1:return"Play";default:return"Pause"}},b=function(p){switch(p){case 0:return Lc(e.t1);case 1:return C1(e.t1);default:return x3(e.t1)}},g=function(p){switch(p){case 0:return dr.s8;case 1:return dr.sX;default:return dr.sO}};return a(D$,r,{qe:!1,l0:g,rA:b,rB:d,rC:u([0,1,2]),jb:"Tape transport",sz:function(p){return b(p)||$(p)&&$4(e.t1)?e.eR:e.dE(s(p))},sB:e.sB,dF:0,tw:function(p){return function(_){return Ic}},n0:function(p){return M},ua:0})})(),t=a(W,u([E(u([_e,Ir(sa),a(z,"gap","3px")]))]),u([a(W,u([E(u([_e,Ir(Dc),Ye(we),a(z,"gap","8px")]))]),u([a(gr,u([E(u([sr(L(12)),Ce(a(K,function($){return $.kv},r)),a(z,"white-space","nowrap")]))]),u([ce("Record from start")])),a(y5,r,{qe:!1,mk:e.bE,jb:"Record from the first frame (applies on reload)",nj:e.jH})])),a(gr,u([E(u([sr(L(10)),Ce(a(K,function($){return $.kt},r)),a(z,"white-space","nowrap")]))]),u([ce("applies on reload")]))])),o=Lc(e.t1)?a(W,u([E(u([Pe(L(200)),vr(me(0)),_e,Ye(we),Hr(we),a(z,"gap","8px"),sr(L(13)),Ce(a(K,function($){return $.t3},r)),a(z,"white-space","nowrap")]))]),u([a(gr,u([E(u([Pe(L(8)),Me(L(8)),a(z,"border-radius","50%"),a(z,"background-color",a(zv,e,1))]))]),C),ce("Recording\u2026")])):$t(e.t1)?rD(e):a(W,u([E(u([Pe(L(200)),vr(me(0))]))]),C),c=a(W,u([E(u([Z5(Kz),Pe(L(1)),Xz(L(28)),a(z,"background-color",ke(a(pr,.18,a(cr,function($){return $.t3},r))))]))]),C),i=(function(){var $=u([Pe(L(100)),vr(me(0)),_e,Ye(we),sr(L(12)),Ce(a(K,function(s){return s.kv},r)),a(z,"font-variant-numeric","tabular-nums")]);return $4(e.t1)?a(W,u([E(Q($,u([Hr(we)])))]),u([ce("\u2014 / \u2014")])):Lc(e.t1)?a(W,u([E(Q($,u([Hr(we)])))]),u([ce(Xe(Dv(e.t1)))])):a(W,u([E($)]),u([a(gr,u([E(u([Hc(me(1)),a(z,"text-align","right")]))]),u([ce(Xe(I$(e.t1)+1))])),a(gr,u([E(u([a(z,"padding","0 4px")]))]),u([ce("/")])),a(gr,u([E(u([Hc(me(1)),a(z,"text-align","left")]))]),u([ce(Xe(Dv(e.t1)))]))]))})(),f=a(bt,u([mt(e.eS),a(Ue,"aria-label","Close tape"),E(u([Pe(L(32)),Me(L(32)),an(L(5)),vr(me(0)),$r(Ze(50)),pf(le),Te(hf),Ce(n5),ea(tn),_e,Ye(we),Hr(we),nn(fr),rn(lr(.9)),a(z,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([rn(lr(1)),Te(P(Q1,255,255,255,.18))]))]))]),u([dr.pX]));return a(W,u([E(u([_e,Ir(Dc),Ye(we),a(z,"gap","12px")]))]),u([n,o,i,c,t,f]))},nD=function(e){return v(Zz,e,6,u([aD(e)]))},tD=function(e){return a(Ar,4,e.f)&&!e.oM?nD(e):ce("")},PN=3,l4=function(e){return I(e,{tA:!0})},oD=function(e){var r=(function(){var n=e.pM.sG===1?l4(Sv("KeyP")):l4(kv("KeyP"));return a(V$,e.pM.sG,n)})();return a(k$,e.e,{ik:function(n){return n.bp},qe:!1,l0:dr.rT,i8:a(Ar,6,e.f),jb:"Command palette",f$:e.jB,dg:a(_t,e.sB,{ed:3,jb:"Command palette",n0:D(r)})})},cD=function(e){return a(Bc,e.e,{qe:!1,l0:dr.tE,by:7,jb:"Device preview",bz:e.f,ok:Da(7),u:e.aX,dg:a(_t,e.sB,{ed:3,jb:"Device preview",n0:M})})},iD=u([0,1,2]),fD=function(e){switch(e){case 0:return dr.uo;case 1:return dr.sP;default:return dr.pL}},uD=function(e){var r=(function(){var n=e.pM.sG===1?Sv("KeyM"):kv("KeyM");return a(V$,e.pM.sG,n)})();return a(D$,e.e,{qe:$t(e.t1),l0:fD,rA:Ya(e.m3),rB:Gb,rC:iD,jb:"Mode",sz:e.jE,sB:e.sB,dF:1,tw:l(function(n,t){return a(te,t.bp,N5(n))}),n0:function(n){return D(r)},ua:3})},$D=function(e){return u([a(gf,"pointerdown",re(h(e,!0))),a(gf,"wheel",re(h(e,!0))),a(gf,"keydown",a(T,function(r){return r.pY||r.rX||r.oV?Wn("let modifier-bearing combos reach global decoders"):a(Hi,r.i9,u(["Meta","Control","Shift","Alt"," ","Escape"]))?Wn("bare modifiers, Space, and Escape (global stop) \u2014 let bubble"):re(h(e,!0))},V(xc,J(function(r,n,t,o){return{oV:o,pY:n,i9:r,rX:t}}),a(S,"key",Se),a(S,"ctrlKey",ae),a(S,"metaKey",ae),a(S,"altKey",ae))))])},lD=function(e){return a(k$,e.e,{ik:function(r){return r.bp},qe:!1,l0:dr.uT,i8:e.oM,jb:"Zen mode",f$:e.jG,dg:a(_t,e.sB,{ed:3,jb:"Zen mode",n0:M})})},vD=function(e){var r=e.b0,n=r.hd?u([lD(e)]):C,t=e.e,o=r.b9?u([a(Bc,t,{qe:!1,l0:dr.dG,by:5,jb:"Theme",bz:e.f,ok:Da(5),u:e.aX,dg:a(_t,e.sB,{ed:3,jb:"Theme",n0:M})})]):C,c=r.dt?u([uD(e)]):C,i=a(jr,ne,u([r.fK?D(a(Bc,t,{qe:$t(e.t1),l0:dr.oO,by:2,jb:"FPS meter",bz:e.f,ok:Da(2),u:e.aX,dg:a(_t,e.sB,{ed:3,jb:"FPS meter",n0:M})})):M,r.fL?D(a(Bc,t,{qe:!1,l0:dr.pM,by:1,jb:"Inputs",bz:e.f,ok:Da(1),u:e.aX,dg:a(_t,e.sB,{ed:3,jb:"Inputs",n0:M})})):M,(function(){if(r.hc){var y=a(Ar,4,e.f);return D(a(k$,t,{ik:Da(4),qe:!1,l0:dr.t1,i8:y,jb:y?"Close tape":"Tape",f$:e.eS,dg:a(_t,e.sB,{ed:3,jb:"Tape",n0:M})}))}else return M})()])),f=u([_e,Ir(sa),Ye(we),a(z,"gap","6px")]),$=function(y){return a(W,u([E(f)]),y)},s=r.ds?u([cD(e)]):C,d=r.fJ?u([a(Bc,t,{qe:!1,l0:dr.qz,by:0,jb:"Configurations",bz:e.f,ok:Da(0),u:e.aX,dg:a(_t,e.sB,{ed:3,jb:"Configurations",n0:M})})]):C,b=a(Oi,r,e.P)?u([oD(e)]):C,g=a(xr,a(rr,Ml,Je),u([d,c,s,o,b,i])),p=a(W,u([E(u([_e,Ir(sa),Ye(we),a(z,"gap","24px"),e.oM?nr(u([z$(gv(L(-72))),rn(lr(0)),a(z,"pointer-events","none")])):nr(u([z$(gv(le)),rn(lr(1)),a(z,"pointer-events","auto")])),a(z,"transition","transform 240ms cubic-bezier(0.33, 1, 0.68, 1), opacity 240ms cubic-bezier(0.33, 1, 0.68, 1)")])),a(Ue,"aria-hidden",e.oM?"true":"false")]),a(Y,$,g)),_=a(jr,ne,u([Je(n)?M:D(a(W,u([E(Q(f,u([a(z,"pointer-events","auto")])))]),n)),Je(g)?M:D(p)]));return Je(_)?ce(""):a(W,Q(u([E(u([er(za),Sa(L(12)),da(L(12)),Pe(L(48)),_e,Ir(sa),Ye(we),a(z,"gap","24px"),a(z,"pointer-events","none"),Zn(me(st.rg))]))]),$D(e.eR)),_)},sD=function(e){if(!Lc(e.t1)&&!$t(e.t1)||e.oM)return ce("");var r=6,n=100,t=G(-n)+"px",o="linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",c=21,i=n+r,f=i+c;return a(W,u([E(u([er(pt),Sa(le),da(le),dt(le),Qn(le),a(z,"overflow","hidden"),a(z,"pointer-events",$t(e.t1)?"auto":"none"),Zn(me(st.no-1))])),mt(e.dE(C1(e.t1)?n1:u4))]),u([a(W,u([E(u([er(za),a(z,"top",t),a(z,"left",t),a(z,"right",t),a(z,"bottom",t),a(z,"pointer-events","none"),a(z,"border",G(i)+"px solid transparent"),a(z,"border-radius",G(f)+"px"),a(z,"background-color",a(zv,e,.28)),a(z,"-webkit-backdrop-filter","blur(18px)"),a(z,"backdrop-filter","blur(18px)"),a(z,"-webkit-mask",o),a(z,"-webkit-mask-composite","xor"),a(z,"mask",o),a(z,"mask-composite","exclude")]))]),C)]))},dD=l(function(e,r){var n=a(EM,e,r);return a(W,u([Bo("play-hud"),E(u([er(pt),Sa(le),da(le),dt(le),Qn(le),a(z,"pointer-events","none")]))]),Q(u([LM(n.e),a(TM,".play-hud",n.e),wM(n.e),kM(n.e),cz(n),IL(n),nM(n),rM(n),sD(n),vD(n),iz(n),tD(n),a(ZM,zM(n.e),n.cN),Oz(n),SM(n),jT(n),az(n),tz(n),Hm(n.f)]),n.fA.jK))}),bD=l(function(e,r){if(e.$===1)return a(pn,u([a(X,"display","contents")]),u([a(pn,u([a(X,"display","contents")]),u([r]))]));var n=e.a,t=function(c){return G(c)+"px"},o=a(Ji,n.uC,n.iO);return a(pn,u([a(X,"position","fixed"),a(X,"inset","0"),a(X,"display","flex"),a(X,"align-items","center"),a(X,"justify-content","center"),a(X,"background-color",n.o4)]),u([a(pn,u([a(X,"position","relative"),a(X,"width",t(n.iO.$8)),a(X,"height",t(n.iO.he)),a(X,"border-radius",t(n.pU)),a(X,"overflow-x","hidden"),a(X,"overflow-y","auto"),a(X,"box-shadow","0 24px 64px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16)"),a(X,"transform","scale("+(G(o)+")")),a(X,"transform-origin","center")]),u([r]))]))}),mD=l(function(e,r){var n=bc(r.t1),t=v(go,Zx,Re,n.cI),o=p1(n),c=(function(){var k=e.h8;if(k.$)return _n(r.rf);var w=k.a;return a(te,_n(r.rf),a(de,function(j){return w(j.bz)},a(Xr,function(j){return a(Ke,j,n.cI)},kr(r.aT))))})(),i=g1(r.rf),f=a(jr,V(zw,e,r,n,o,i),r.aT),$={lM:r.aH,cI:f,Q:n.Q,np:t,ga:r.ef,e:c},s=e.i4($),d=ku(a(dD,{pM:a(k3,r,n),fA:s,f0:zx,dE:A2,eS:I2,ga:r.ef,t1:r.t1,u:wu},r.rf)),b=ke(Yn($.e).tZ),g=ke(Yn($.e).t3),p=ku(Ox($.e)),_=a(bD,a(de,function(k){return{o4:ke(a(cr,function(w){return w.km},c)),pU:Yx(r.rf),iO:k,uC:n.ru.f9}},i),e.rE($)),y=(function(){var k=r.gT;if(k.$)return u([p,_,d]);var w=k.a;return u([p,_,d,qx(w)])})();return a(pn,u([om(w3),a(X,"position","fixed"),a(X,"inset","0"),a(X,"overflow-y","auto"),a(X,"overscroll-behavior","none"),a(X,"background-color",b),a(X,"color",g),a(Dw,"playflush",re(h(j3,!0)))]),y)}),pD=function(e){return t_({ro:NC(e),aA:nS(e),um:Mx(e),uw:mD(e)})},hD=function(e){return pD(Oy(e))},gD=function(e){return{oN:e.oN,aC:x(function(r,n,t){return C}),rf:e.rf,ro:e.ro,rp:e.rp,sw:e.sw,sA:e.sA,cf:x(function(r,n,t){return C}),aA:x(function(r,n,t){return ft}),uw:e.uw}},yD=function(e){return hD(gD(e))},_D=function(e){return{$:14,a:e}},CD=l(function(e,r){return _D({qd:r,tZ:e})}),PD=function(e){return{$:1,a:e}},SD=function(e){return{lf:e,bC:1,bU:PD({hu:0,hT:1}),bV:M}},kD=function(e){return a(CD,SD(e),R(.2,.3,.3))},v4=function(e){var r=e;return la(r.j3)+1},s4=x(function(e,r,n){var t=n,o=a(Qr,v4(t),r);return{px:a(te,t.lI,a($a,o-1,t.j3)),rn:o,so:t.as-a(gu,e.bO,t.as)}}),xD=l(function(e,r){var n=r;return a(Qr,v4(n),Vr(-n.as/e.bO))}),jD=l(function(e,r){var n=r;return v(s4,e,a(xD,e,n),n)}),d4=function(e){return{$:0,a:e}},Y$=function(e){return{$:0,a:e}},W$=function(e){return{$:0,a:e}},b4={f6:Y$(0),f8:W$(1),gq:v(Zr,0,0,0)},m4=function(e){return d4({dn:e,kx:b4})},p4=l(function(e,r){return d4({dn:u([r]),kx:e})}),h4=function(e){var r=e.a,n=e.b,t=e.c;return p4({f6:Y$(0),f8:W$(1),gq:v(Zr,r,n,t)})},wD=function(e){return h4(R(e,0,0))},LD=function(e){return h4(R(0,e,0))},TD=function(e){return p4({f6:Y$(0),f8:W$(e),gq:v(Zr,0,0,0)})},MD=x(function(e,r,n){var t=Yn(r),o=a(jD,e,n),c=o.so,i=o.rn,f=function(s){return c+(s-i)*e.bO},$=function(s){return a(wD,f(s),a(LD,-(.1*xe(f(s))),a(TD,1-.7*xe(f(s)),kD(v(s4,e,s,n).px(t)))))};return m4(a(Y,$,a(Vn,i-3,i+3)))}),zD=Bm,DD=function(e){return{$:13,a:e}},AD=function(e){return{$:2,a:e}},ID=function(e){return{$:6,a:e}},BD=function(e){return{$:16,a:e}},VD=function(e){return{$:15,a:e}},HD=function(e){return{$:10,a:e}},RD=function(e){return{$:12,a:e}},FD=function(e){return{$:9,a:e}},ED=function(e){return{$:19,a:e}},UD=function(e){return{$:1,a:e}},qD=function(e){return{$:5,a:e}},ND=function(e){return{$:17,a:e}},GD=function(e){return{$:18,a:e}},YD=function(e){return{$:4,a:e}},WD=function(e){return{$:20,a:e}},OD=function(e){return{$:3,a:e}},JD=function(e){return{$:0,a:e}},ZD=function(e){return{$:21,a:e}},QD=function(e){return{$:11,a:e}},XD=function(e){return{$:8,a:e}},KD=function(e){return{$:7,a:e}},eA=function(e){return{$:14,a:e}},Av=function(e){var r=e.a,n=e.b,t=e.c;return v(Zr,r,n,t)},O$=l(function(e,r){var n=r.a,t=r.b,o=r.c;return a(wi,a(Ta,n,e.dY),a(wi,a(Ta,t,e.fd),a(Ta,o,e.kI)))}),rA=l(function(e,r){return Av(a(O$,e,R(r.dY,r.fd,r.kI)))}),kn=x9,xn=j9,g4=x(function(e,r,n){var t=R(-e.aY.dY,-e.aY.fd,-e.aY.kI),o=R(e.aY.dY,e.aY.fd,e.aY.kI),c=xn(r),i=a(bo,t,n),f=R(i.dY,i.fd,i.kI),$=kn(r),s=ji(e.ed),d=a(Ll,s,f),b=a(wi,a(Ta,$,f),a(wi,a(Ta,c,a(Tl,s,f)),a(Ta,1-$,a(Ta,d,s))));return a(bo,o,Av(b))}),y4=g4({ed:R(0,0,1),aY:v(Zr,0,0,0)}),_4=l(function(e,r){if(e.$){var t=e.a;return a(rA,t,r)}else{var n=e.a;return a(y4,n,r)}}),C4=l(function(e,r){if(e.$){var t=e.a;return v(Zr,r.dY*t.dY,r.fd*t.fd,r.kI*t.kI)}else{var n=e.a;return v(Zr,r.dY*n,r.fd*n,r.kI*n)}}),P4=l(function(e,r){return v(Zr,r.dY+e.dY,r.fd+e.fd,r.kI+e.kI)}),aA=function(e){return{$:1,a:e}},nA=l(function(e,r){return{dY:a(O$,e,r.dY),fd:a(O$,e,r.fd),kI:a(O$,e,r.kI)}}),tA=l(function(e,r){var n=function(t){var o=v(g4,{ed:e,aY:v(Zr,0,0,0)},r,Av(t));return R(o.dY,o.fd,o.kI)};return{dY:n(R(1,0,0)),fd:n(R(0,1,0)),kI:n(R(0,0,1))}}),oA=function(e){return a(tA,R(0,0,1),e)},S4=function(e){if(e.$){var n=e.a;return n}else{var r=e.a;return oA(r)}},cA=l(function(e,r){var n=h(e,r);if(!n.a.$&&!n.b.$){var t=n.a.a,o=n.b.a;return Y$(t+o)}else return aA(a(nA,S4(e),S4(r)))}),Iv=function(e){return{$:1,a:e}},iA=l(function(e,r){var n=h(e,r);if(n.a.$)if(n.b.$){var c=n.a.a,i=n.b.a;return Iv(v(Zr,c.dY*i.dY,c.fd*i.fd,c.kI*i.kI))}else{var c=n.a.a,t=n.b.a;return Iv(v(Zr,c.dY*t,c.fd*t,c.kI*t))}else if(n.b.$){var t=n.a.a,c=n.b.a;return Iv(v(Zr,t*c.dY,t*c.fd,t*c.kI))}else{var t=n.a.a,o=n.b.a;return W$(t*o)}}),fA=l(function(e,r){return{f6:a(cA,e.f6,r.f6),f8:a(iA,e.f8,r.f8),gq:a(P4,e.gq,a(_4,e.f6,a(C4,e.f8,r.gq)))}}),Bv=x(function(e,r,n){switch(r.$){case 0:var t=r.a.dn,o=r.a.kx,c=a(fA,e,o);return v(se,Bv(c),n,t);case 1:var i=r.a.lc,f=r.a.gM;return Q(a(Y,function(b){var g=b.a,p=b.b;return h(g,ID({gM:f,rt:p}))},v(Bv,e,i,C)),n);case 2:var s=r.a;return a(A,h(e,JD(s)),n);case 3:var s=r.a;return a(A,h(e,UD(s)),n);case 4:var s=r.a;return a(A,h(e,AD(s)),n);case 5:var s=r.a;return a(A,h(e,OD(s)),n);case 6:var s=r.a;return a(A,h(e,YD(s)),n);case 7:var s=r.a;return a(A,h(e,qD(s)),n);case 8:var s=r.a;return a(A,h(e,KD(s)),n);case 9:var s=r.a;return a(A,h(e,XD(s)),n);case 10:var $=r.a;return a(A,h(e,FD($)),n);case 11:var s=r.a;return a(A,h(e,HD(s)),n);case 12:var s=r.a;return a(A,h(e,QD(s)),n);case 13:var s=r.a;return a(A,h(e,RD(s)),n);case 14:var s=r.a;return a(A,h(e,DD(s)),n);case 15:var s=r.a;return a(A,h(e,eA(s)),n);case 16:var s=r.a;return a(A,h(e,VD(s)),n);case 17:var s=r.a;return a(A,h(e,BD(s)),n);case 18:var s=r.a;return a(A,h(e,ND(s)),n);case 19:var s=r.a;return a(A,h(e,GD(s)),n);case 20:var d=r.a;return a(A,h(e,ED(d)),n);case 21:var d=r.a;return a(A,h(e,WD(d)),n);default:var d=r.a;return a(A,h(e,ZD(d)),n)}}),k4=function(e){return He(v(Bv,b4,e,C))},SN=ne,jn={dY:0,fd:0,kI:0},Vv=function(e){var r=e;return r.dY},Hv=function(e){var r=e;return r.fd},Rv=function(e){var r=e;return r.kI},uA=function(e){var r=e,n=Rv(r.uW),t=Hv(r.uW),o=Vv(r.uW),c=Rv(r.uQ),i=Hv(r.uQ),f=Vv(r.uQ),$=Rv(r.uH),s=Hv(r.uH),d=Vv(r.uH);return d*i*n+s*c*o+$*f*t-$*i*o-s*f*n-d*c*t>0},J$=function(e){var r=e;return r.aY},Ia=function(e){var r=e;return r},No=function(e){var r=e;return r},Z$=function(e){var r=e;return r.uH},Q$=function(e){var r=e;return r.uQ},zf=function(e){var r=e;return r.uW},$A=function(e){var r=No(J$(e)),n=Ia(zf(e)),t=Ia(Q$(e)),o=Ia(Z$(e));return{ml:uA(e),ag:o.dY,ah:o.fd,ai:o.kI,aj:t.dY,ak:t.fd,al:t.kI,am:n.dY,an:n.fd,ao:n.kI,aZ:r.dY,a_:r.fd,a$:r.kI,f8:1}},kN=ne,Go=l(function(e,r){return{$:6,a:e,b:r}}),x4=l(function(e,r){return{ml:ie(e.ml,r.ml),ag:e.ag*r.ag+e.ah*r.aj+e.ai*r.am,ah:e.ag*r.ah+e.ah*r.ak+e.ai*r.an,ai:e.ag*r.ai+e.ah*r.al+e.ai*r.ao,aj:e.aj*r.ag+e.ak*r.aj+e.al*r.am,ak:e.aj*r.ah+e.ak*r.ak+e.al*r.an,al:e.aj*r.ai+e.ak*r.al+e.al*r.ao,am:e.am*r.ag+e.an*r.aj+e.ao*r.am,an:e.am*r.ah+e.an*r.ak+e.ao*r.an,ao:e.am*r.ai+e.an*r.al+e.ao*r.ao,aZ:r.aZ+(e.aZ*r.ag+e.a_*r.aj+e.a$*r.am)*r.f8,a_:r.a_+(e.aZ*r.ah+e.a_*r.ak+e.a$*r.an)*r.f8,a$:r.a$+(e.aZ*r.ai+e.a_*r.al+e.a$*r.ao)*r.f8,f8:e.f8*r.f8}}),Fv={$:0},$e=Fv,X$=l(function(e,r){var n=r;switch(n.$){case 0:return $e;case 6:var t=n.a,o=n.b,c=a(x4,t,e);return a(Go,c,o);case 1:return a(Go,e,n);case 2:return a(Go,e,n);case 4:return a(Go,e,n);case 3:return a(Go,e,n);default:return a(Go,e,n)}}),K$=l(function(e,r){return a(X$,$A(e),r)}),lA=l(function(e,r){return a(K$,e,r)}),xN=ne,Yc=function(e){return e},j4=function(e){var r=e;return r.ed},w4=function(e){var r=e;return r.aY},vA=l(function(e,r){var n=r,t=No(w4(e)),o=.5*n,c=kn(o),i=xn(o),f=Ia(j4(e)),$=f.dY*i,s=c*$,d=$*$,b=f.fd*i,g=c*b,p=$*b,_=b*b,y=1-2*(d+_),k=f.kI*i,w=c*k,j=2*(p-w),B=2*(p+w),F=$*k,H=2*(F+g),N=2*(F-g),O=b*k,ee=2*(O-s),ue=2*(O+s),ve=k*k,ye=1-2*(_+ve),ze=1-2*(d+ve);return{ml:!0,ag:ye,ah:B,ai:N,aj:j,ak:ze,al:ue,am:H,an:ee,ao:y,aZ:t.dY-ye*t.dY-j*t.fd-H*t.kI,a_:t.fd-B*t.dY-ze*t.fd-ee*t.kI,a$:t.kI-N*t.dY-ue*t.fd-y*t.kI,f8:1}}),sA=x(function(e,r,n){return a(X$,a(vA,e,r),n)}),Ev=x(function(e,r,n){return v(sA,e,r,n)}),jN=ne,Kn=function(e){return e},wN=ne,e0=function(e){return e},LN=ne,r0=l(function(e,r){return{ed:r,aY:e}}),Uv=Kn({dY:0,fd:0,kI:1}),a0=Uv,L4=a(r0,jn,a0),dA=l(function(e,r){if(e.$){var t=e.a,o=function(c){var i=c.a,f=c.b,$=c.c;return Kn({dY:i,fd:f,kI:$})};return a(lA,e0({aY:jn,uH:o(t.dY),uQ:o(t.fd),uW:o(t.kI)}),r)}else{var n=e.a;return v(Ev,L4,Yc(n),r)}}),bA=l(function(e,r){var n=No(e),t=1-r;return{ml:r>=0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aZ:t*n.dY,a_:t*n.fd,a$:t*n.kI,f8:r}}),mA=x(function(e,r,n){return a(X$,a(bA,e,r),n)}),pA=x(function(e,r,n){return v(mA,e,r,n)}),hA=l(function(e,r){if(e.$)return r;var n=e.a;return v(pA,jn,n,r)}),TN=ne,T4=x(function(e,r,n){return{dY:e,fd:r,kI:n}}),M4=function(e){var r=e;return r},gA=function(e){var r=M4(e);return{ml:!0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aZ:r.dY,a_:r.fd,a$:r.kI,f8:1}},z4=l(function(e,r){return a(X$,gA(e),r)}),D4=l(function(e,r){return a(z4,e,r)}),yA=l(function(e,r){var n=e.kI,t=e.fd,o=e.dY;return a(D4,v(T4,o,t,n),r)}),qv=l(function(e,r){var n=e.f8,t=e.f6,o=e.gq;return a(yA,o,a(dA,t,a(hA,n,r)))}),A4=function(e){var r=e;return r},_A=function(e){var r=e;return A4(r.o2)},MN=1,I4=J(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),CA=J(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),B4=J(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),PA=J(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),V4=J(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),SA=J(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),kA=J(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),n0=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return P(kA,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return P(I4,n,r,o,1);case 3:var n=e.a,t=e.b,o=e.c;return P(CA,n,t,o,1);case 4:var n=e.a,t=e.b,o=e.c;return P(B4,n,t,o,1);case 5:var n=e.a,t=e.b,o=e.c;return P(SA,n,t,o,1);case 6:var n=e.a,t=e.b,o=e.c;return P(PA,n,t,o,1);case 7:var n=e.a,t=e.b,o=e.c;return P(V4,n,t,o,1);case 8:return e;case 9:return e;default:return e}},Nv={$:0},zN=0,DN=ne,xA=De(function(e,r,n,t,o,c,i,f){e:for(;;)if(f.b){var $=f.a,s=f.b,d=i($),b=d,g=a(Ne,b.m0,e),p=a(je,b.mY,r),_=a(Ne,b.r2,n),y=a(je,b.rQ,t),k=a(Ne,b.r3,o),w=a(je,b.rR,c),j=i,B=s;e=g,r=p,n=_,t=y,o=k,c=w,i=j,f=B;continue e}else return{mY:r,rQ:t,rR:c,m0:e,r2:n,r3:o}}),jA=x(function(e,r,n){var t=e(r),o=t;return zt(xA,o.m0,o.mY,o.r2,o.rQ,o.r3,o.rR,e,n)}),H4=function(e){var r=e.rR,n=r,t=e.r3,o=t,c=e.rQ,i=c,f=e.r2,$=f,s=e.mY,d=s,b=e.m0,g=b;return{mY:a(je,g,d),rQ:a(je,$,i),rR:a(je,o,n),m0:a(Ne,g,d),r2:a(Ne,$,i),r3:a(Ne,o,n)}},Yo=l(function(e,r){var n=e,t=r;return a(je,n,t)}),Wc=l(function(e,r){var n=e,t=r;return a(Ne,n,t)}),Df=function(e){var r=e;return r},Af=function(e){var r=e;return r.dY},If=function(e){var r=e;return r.fd},Bf=function(e){var r=e;return r.kI},R4=function(e){var r=Df(e),n=r.a,t=r.b,o=r.c,c=Af(n),i=If(n),f=Bf(n),$=Af(t),s=If(t),d=Bf(t),b=Af(o),g=If(o),p=Bf(o);return H4({mY:a(Yo,c,a(Yo,$,b)),rQ:a(Yo,i,a(Yo,s,g)),rR:a(Yo,f,a(Yo,d,p)),m0:a(Wc,c,a(Wc,$,b)),r2:a(Wc,i,a(Wc,s,g)),r3:a(Wc,f,a(Wc,d,p))})},F4=th,et=function(e){return F4(No(e))},t0=function(e){return F4(M4(e))},Gv=l(function(e,r){var n=e,t=r;return{dY:t.fd*n.kI-t.kI*n.fd,fd:t.kI*n.dY-t.dY*n.kI,kI:t.dY*n.fd-t.fd*n.dY}}),o0=l(function(e,r){var n=e,t=r;return{dY:t.dY-n.dY,fd:t.fd-n.fd,kI:t.kI-n.kI}}),Yv=function(e){return e},Wv={dY:0,fd:0,kI:0},wA=l(function(e,r){var n=e,t=r,o=a(je,xe(t.dY),a(je,xe(t.fd),xe(t.kI)));if(o){var c=t.kI/o,i=t.fd/o,f=t.dY/o,$=mn(f*f+i*i+c*c);return{dY:n*f/$,fd:n*i/$,kI:n*c/$}}else return Wv}),LA=wA(Yv(1)),E4=x(function(e,r,n){var t=a(o0,r,n),o=a(o0,e,r);return LA(a(Gv,t,o))}),TA=function(e){var r=Df(e),n=r.a,t=r.b,o=r.c,c=t0(v(E4,n,t,o));return R({ad:c,s0:et(n)},{ad:c,s0:et(t)},{ad:c,s0:et(o)})},MA=l(function(e,r){return{$:2,a:e,b:r}}),U4=MA({lx:3,l4:0,m3:4}),q4=function(e){if(e.b){var r=e.a,n=e.b,t=U4(a(Y,TA,e)),o=v(jA,R4,r,n);return P(I4,o,e,t,0)}else return Nv},AN=ne,Ba=x(function(e,r,n){return R(e,r,n)}),Va=function(e){return e},Ct=l(function(e,r){var n=r;return e*n}),Pt=x(function(e,r,n){var t=e,o=r,c=n;return{dY:t,fd:o,kI:c}}),N4=(function(){var e=Va(1),r=Va(1),n=Va(1),t=a(Ct,-.5,e),o=a(Ct,-.5,r),c=a(Ct,-.5,n),i=v(Pt,c,o,t),f=a(Ct,.5,e),$=v(Pt,c,o,f),s=a(Ct,.5,r),d=v(Pt,c,s,t),b=v(Pt,c,s,f),g=a(Ct,.5,n),p=v(Pt,g,o,t),_=v(Pt,g,s,t),y=v(Pt,g,o,f),k=v(Pt,g,s,f);return n0(q4(u([v(Ba,i,_,p),v(Ba,i,d,_),v(Ba,$,y,k),v(Ba,$,k,b),v(Ba,p,_,k),v(Ba,p,k,y),v(Ba,i,b,d),v(Ba,i,$,b),v(Ba,i,p,y),v(Ba,i,y,$),v(Ba,d,k,_),v(Ba,d,b,k)])))})(),c0={$:0},zA=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),DA=x(function(e,r,n){var t=r.a,o=r.b,c=r.c,i=e(c),f=e(o),$=e(t),s=t0(v(E4,$,f,i)),d={ad:s,s0:et($)},b={ad:s,s0:et(f)},g={ad:s,s0:et(i)};return a(A,d,a(A,b,a(A,g,n)))}),Vf=function(e){var r=e;return r.aF},AA=J(function(e,r,n,t){if(r.$===1)return M;var o=r.a;if(n.$===1)return M;var c=n.a;if(t.$===1)return M;var i=t.a;return D(v(e,o,c,i))}),Hf=function(e){var r=e;return r.kE},Ov=l(function(e,r){return a($a,e,Hf(r))}),G4=function(e){var r=function(n){var t=n.a,o=n.b,c=n.c;return P(AA,x(function(i,f,$){return R(i,f,$)}),a(Ov,t,e),a(Ov,o,e),a(Ov,c,e))};return a(jr,r,Vf(e))},IN=ne,IA=l(function(e,r){var n=la(e),t=function(o){var c=o.a,i=o.b,f=o.c;return c>=0&&oe(c,n)<0&&i>=0&&oe(i,n)<0&&f>=0&&oe(f,n)<0};return a(H1,t,r)?{aF:r,kE:e}:{aF:a(xr,t,r),kE:e}}),BA=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Oc=BA({lx:1,l4:3,m3:4}),rt=function(e){var r=e;return r},i0=l(function(e,r){var n=rt(r),t=rt(e);return h(R(t.dY,t.fd,t.kI),R(n.dY,n.fd,n.kI))}),Rf=eh,Y4=v(Rf,0,0,0),Jv=Mr(function(e,r,n,t,o,c){var i=c.a,f=c.b,$=c.c,s=a(Ke,a(i0,e,r),o);if(s.$){var b={ad:Y4,s0:et(r)},g={ad:Y4,s0:et(e)},p=$+1,_=$;return R(a(A,R(n,_,p),a(A,R(n,p,t),i)),a(A,b,a(A,g,f)),$+2)}else{var d=s.a;return R(a(A,R(n,d,t),i),f,$)}}),VA=Le(function(e,r,n,t,o){e:for(;;)if(n.b){var c=n.a,i=c.a,f=c.b,$=c.c,s=n.b,d=e($),b=e(f),g=e(i),p=t+2,_=t+1,y=t,k=e,w=r,j=s,B=t+3,F=Cr(Jv,d,g,p,y,r,Cr(Jv,b,d,_,p,r,Cr(Jv,g,b,y,_,r,o)));e=k,r=w,n=j,t=B,o=F;continue e}else{var H=o,N=H.a,O=H.b;return h(N,He(O))}}),HA=Le(function(e,r,n,t,o){e:for(;;)if(r.b){var c=r.a,i=c.a,f=c.b,$=c.c,s=r.b,d=e($),b=e(f),g=e(i),p=n+2,_=n+1,y=n,k=v(Sr,a(i0,g,d),p,v(Sr,a(i0,d,b),_,v(Sr,a(i0,b,g),y,o))),w=a(A,R(y,_,p),t),j=e,B=s,F=n+3,H=w,N=k;e=j,r=B,n=F,t=H,o=N;continue e}else return R(t,o,n)}),Wo=x(function(e,r,n){var t=G4(n),o=v(Xa,DA(r),C,t),c=V(HA,r,t,0,C,Re),i=c.a,f=c.b,$=c.c,s=V(VA,r,f,t,0,R(i,C,$)),d=s.a,b=s.b,g=Je(b)?o:Q(o,b);return v(zA,e,a(IA,ki(g),d),a(Oc,g,d))}),W4=function(e){return{aF:a(Y,function(r){return R(3*r,3*r+1,3*r+2)},a(Vn,0,Pr(e)-1)),kE:ki(gn(a(Y,function(r){var n=r.a,t=r.b,o=r.c;return u([n,t,o])},e)))}},f0=function(e){switch(e.$){case 0:return c0;case 1:var t=e.a,r=e.b,n=a(Y,Df,r);return v(Wo,t,ne,W4(n));case 2:var t=e.a,r=e.b,n=a(Y,Df,r);return v(Wo,t,ne,W4(n));case 3:var t=e.a,o=e.b;return v(Wo,t,ne,o);case 4:var t=e.a,o=e.b;return v(Wo,t,function(c){return c.s0},o);case 5:var t=e.a,o=e.b;return v(Wo,t,function(c){return c.s0},o);case 6:var t=e.a,o=e.b;return v(Wo,t,function(c){return c.s0},o);case 7:var t=e.a,o=e.b;return v(Wo,t,function(c){return c.s0},o);case 8:return c0;case 9:return c0;default:return c0}},O4=f0(N4),RA=function(e){var r=e;return r.qd},J4=function(e){return{$:5,a:e}},FA=l(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,o=t,c=a(A,n,r);e=o,r=c;continue e}else return r}),co=function(e){return J4(a(FA,e,C))},ba=l(function(e,r){return{$:1,a:e,b:r}}),u0={src:`
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
    `,attributes:{normal:"ad",position:"s0",tangent:"gj",uv:"gv"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},EA=l(function(e,r){switch(r.$){case 0:return a(qh,e,r);case 1:return a(Nh,e,r);case 2:return a(Gh,e,r);case 3:return a(Yh,e,r);case 4:return a(Wh,e,r);default:return a(Oh,e,r)}}),UA=l(function(e,r){switch(r.$){case 0:return a(gh,e,r);case 1:return a(yh,e,r);case 2:return a(_h,e,r);case 3:return a(Ch,e,r);case 4:return a(Ph,e,r);case 5:return a(Sh,e,r);case 6:return a(kh,e,r);case 7:return a(xh,e,r);default:return jh(e)}}),Fe=hh,Jc={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bq",constantAmbientOcclusion:"bt",constantMaterialColor:"d9",enabledLights:"ac",lights12:"fS",lights34:"hn",lights56:"ho",lights78:"hp",materialColorTexture:"eM",normalMapTexture:"bA",normalMapType:"bB",sceneProperties:"l",viewMatrix:"m"}},Z4=l(function(e,r){return{$:2,a:e,b:r}}),qA=l(function(e,r){return Fv}),Q4=uh,ma=function(e){var r=Q4(e);return r===1?ba:r?Z4:qA},BN=ne,NA=1029,GA=function(e){return{$:5,a:e}},X4=function(e){var r=e;return GA(r)},Oo=X4(NA),YA=1028,Jo=X4(YA),ar=x(function(e,r,n){return r===1?e?a(A,Oo,n):a(A,Jo,n):n}),K4=$h,St=oh,aa=function(e){var r=K4(e),n=r.uy,t=r.kI,o=r.fd,c=r.dY;return P(St,c*n,o*n,t*n,n)},Zc=P(St,0,0,0,0),WA=De(function(e,r,n,t,o,c,i,f){if(e.$){var s=e.a,d=e.b;return v(ma,s,c,De(function(b,g,p,_,y,k,w,j){var B=w.a,F=w.b;return V(Fe,v(ar,_,f,j),u0,Jc,i,{bq:r,bt:n,d9:aa(s),ac:F,fS:B.fS,hn:B.hn,ho:B.ho,hp:B.hp,eM:d,i:p,j:g,bA:t,bB:o,k,l:b,m:y})}))}else{var $=e.a;return a(ba,c,De(function(b,g,p,_,y,k,w,j){var B=w.a,F=w.b;return V(Fe,v(ar,_,f,j),u0,Jc,i,{bq:r,bt:n,d9:Zc,ac:F,fS:B.fS,hn:B.hn,ho:B.ho,hp:B.hp,eM:$,i:p,j:g,bA:t,bB:o,k,l:b,m:y})}))}}),Qc={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bq",baseColorTexture:"d1",constantAmbientOcclusion:"bt",constantBaseColor:"d7",constantMetallic:"ea",constantRoughness:"eb",enabledLights:"ac",lights12:"fS",lights34:"hn",lights56:"ho",lights78:"hp",metallicTexture:"eN",normalMapTexture:"bA",normalMapType:"bB",roughnessTexture:"eY",sceneProperties:"l",viewMatrix:"m"}},OA=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return function(d){return function(b){if(e.$){var p=e.a,_=e.b;return v(ma,p,s,De(function(y,k,w,j,B,F,H,N){var O=H.a,ee=H.b;return V(Fe,v(ar,j,b,N),u0,Qc,d,{bq:c,d1:_,bt:i,d7:aa(p),ea:o,eb:n,ac:ee,fS:O.fS,hn:O.hn,ho:O.ho,hp:O.hp,eN:t,i:w,j:k,bA:f,bB:$,k:F,eY:r,l:y,m:B})}))}else{var g=e.a;return a(ba,s,De(function(y,k,w,j,B,F,H,N){var O=H.a,ee=H.b;return V(Fe,v(ar,j,b,N),u0,Qc,d,{bq:c,d1:g,bt:i,d7:Zc,ea:o,eb:n,ac:ee,fS:O.fS,hn:O.hn,ho:O.ho,hp:O.hp,eN:t,i:w,j:k,bA:f,bB:$,k:F,eY:r,l:y,m:B})}))}}}}}}}}}}}}},ep={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"gQ"}},rp={src:`
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
    `,attributes:{position:"s0",uv:"gv"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},Zv=J(function(e,r,n,t){return a(ba,r,De(function(o,c,i,f,$,s,d,b){return V(Fe,v(ar,f,t,b),rp,ep,n,{gQ:e,i,j:c,k:s,l:o,m:$})}))}),Qv={src:`
        precision lowp float;
        
        uniform lowp vec4 constantColor;
        
        void main () {
            gl_FragColor = constantColor;
        }
    `,attributes:{},uniforms:{constantColor:"d8"}},ap={src:`
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
    `,attributes:{position:"s0"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},kt=J(function(e,r,n,t){return v(ma,e,r,De(function(o,c,i,f,$,s,d,b){return V(Fe,v(ar,f,t,b),ap,Qv,n,{d8:aa(e),i,j:c,k:s,l:o,m:$})}))}),np=l(function(e,r){return{$:4,a:e,b:r}}),JA={src:`
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
    `,attributes:{},uniforms:{constantColor:"d8",pointRadius:"hK",sceneProperties:"l"}},tp={src:`
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
    `,attributes:{position:"s0"},uniforms:{modelMatrix:"i",modelScale:"j",pointRadius:"hK",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},ZA=J(function(e,r,n,t){return a(np,n,De(function(o,c,i,f,$,s,d,b){return V(Fe,b,tp,JA,t,{d8:aa(e),i,j:c,hK:r,k:s,l:o,m:$})}))}),Xv={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eh",sceneProperties:"l"}},Xc=function(e){var r=e;return r},$0=vh,xt=Le(function(e,r,n,t,o){return a(ba,n,De(function(c,i,f,$,s,d,b,g){return V(Fe,v(ar,$,o,g),ap,Xv,t,{eh:a($0,Xc(r),e),i:f,j:i,k:d,l:c,m:s})}))}),QA={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eh",pointRadius:"hK",sceneProperties:"l"}},XA=Le(function(e,r,n,t,o){return a(np,t,De(function(c,i,f,$,s,d,b,g){return V(Fe,g,tp,QA,o,{eh:a($0,Xc(r),e),i:f,j:i,hK:n,k:d,l:c,m:s})}))}),Kv={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"d_",enabledLights:"ac",lights12:"fS",lights34:"hn",lights56:"ho",lights78:"hp",materialColor:"jm",sceneProperties:"l",viewMatrix:"m"}},op={src:`
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
    `,attributes:{normal:"ad",position:"s0"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},l0=Le(function(e,r,n,t,o){return v(ma,e,n,De(function(c,i,f,$,s,d,b,g){var p=b.a,_=b.b;return V(Fe,v(ar,$,o,g),op,Kv,t,{d_:r,ac:_,fS:p.fS,hn:p.hn,ho:p.ho,hp:p.hp,jm:aa(e),i:f,j:i,k:d,l:c,m:s})}))}),es={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"d_",baseColor:"o9",enabledLights:"ac",lights12:"fS",lights34:"hn",lights56:"ho",lights78:"hp",metallic:"hu",roughness:"hT",sceneProperties:"l",viewMatrix:"m"}},v0=Mt(function(e,r,n,t,o,c,i){return v(ma,e,o,De(function(f,$,s,d,b,g,p,_){var y=p.a,k=p.b;return V(Fe,v(ar,d,i,_),op,es,c,{d_:t,o9:aa(e),ac:k,fS:y.fS,hn:y.hn,ho:y.ho,hp:y.hp,hu:n,i:s,j:$,k:g,hT:r,l:f,m:b})}))}),KA=l(function(e,r){return{$:0,a:e,b:r}}),rs=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Kc=l(function(e,r){return{$:1,a:e,b:r}}),cp=function(e){return{$:0,a:e}},Lr=K7,as=function(e){return a(Lr,e,1)},s0=a(Lr,0,0),pa=l(function(e,r){if(r.$){var t=r.a.U;return h(t,s0)}else{var n=r.a;return h(e,as(n))}}),Zo=l(function(e,r){if(r.$){var n=r.a.qS,t=r.a.U;return h(t,(function(){return n?-1:1})())}else return h(e,0)}),ns=x(function(e,r,n){var t=R(e,r,n);if(t.a.$===1){var o=t.a.a.U;return v(rs,cp(o),a(pa,o,r),a(Zo,o,n))}else if(t.b.$){var c=t.a.a,o=t.b.a.U;return v(rs,a(Kc,c,o),a(pa,o,r),a(Zo,o,n))}else if(t.c.$){var c=t.a.a,o=t.c.a.U;return v(rs,a(Kc,c,o),a(pa,o,r),a(Zo,o,n))}else{var c=t.a.a,i=t.b.a,f=t.c;return a(KA,c,i)}}),eI=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ff=Le(function(e,r,n,t,o){return{$:1,a:e,b:r,c:n,d:t,e:o}}),rI=Le(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),ts=Le(function(e,r,n,t,o){var c=V(rI,e,r,n,t,o);if(c.a.$===1){var i=c.a.a.U;return V(Ff,cp(i),a(pa,i,r),a(pa,i,n),a(pa,i,t),a(Zo,i,o))}else if(c.b.$){var f=c.a.a,i=c.b.a.U;return V(Ff,a(Kc,f,i),h(i,s0),a(pa,i,n),a(pa,i,t),a(Zo,i,o))}else if(c.c.$){var f=c.a.a,i=c.c.a.U;return V(Ff,a(Kc,f,i),a(pa,i,r),h(i,s0),a(pa,i,t),a(Zo,i,o))}else if(c.d.$){var f=c.a.a,i=c.d.a.U;return V(Ff,a(Kc,f,i),a(pa,i,r),a(pa,i,n),h(i,s0),a(Zo,i,o))}else if(c.e.$){var f=c.a.a,i=c.e.a.U;return V(Ff,a(Kc,f,i),a(pa,i,r),a(pa,i,n),a(pa,i,t),h(i,1))}else{var f=c.a.a,$=c.b.a,s=c.c.a,d=c.d.a,b=c.e;return P(eI,f,$,s,d)}}),ip={src:`
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
    `,attributes:{},uniforms:{backlight:"iu",colorTexture:"gQ",sceneProperties:"l"}},os=Le(function(e,r,n,t,o){return a(ba,n,De(function(c,i,f,$,s,d,b,g){return V(Fe,v(ar,$,o,g),rp,ip,t,{iu:Xc(r),gQ:e,i:f,j:i,k:d,l:c,m:s})}))}),d0={src:`
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
    `,attributes:{normal:"ad",position:"s0",uv:"gv"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},aI=Mr(function(e,r,n,t,o,c){if(e.$){var f=e.a,$=e.b;return v(ma,f,t,De(function(s,d,b,g,p,_,y,k){var w=y.a,j=y.b;return V(Fe,v(ar,g,c,k),d0,Jc,o,{bq:r,bt:n,d9:aa(f),ac:j,fS:w.fS,hn:w.hn,ho:w.ho,hp:w.hp,eM:$,i:b,j:d,bA:$,bB:0,k:_,l:s,m:p})}))}else{var i=e.a;return a(ba,t,De(function(s,d,b,g,p,_,y,k){var w=y.a,j=y.b;return V(Fe,v(ar,g,c,k),d0,Jc,o,{bq:r,bt:n,d9:Zc,ac:j,fS:w.fS,hn:w.hn,ho:w.ho,hp:w.hp,eM:i,i:b,j:d,bA:i,bB:0,k:_,l:s,m:p})}))}}),nI=De(function(e,r,n,t,o,c,i,f){if(e.$){var s=e.a,d=e.b;return v(ma,s,c,De(function(b,g,p,_,y,k,w,j){var B=w.a,F=w.b;return V(Fe,v(ar,_,f,j),d0,Qc,i,{bq:d,d1:d,bt:as(1),d7:aa(s),ea:o,eb:n,ac:F,fS:B.fS,hn:B.hn,ho:B.ho,hp:B.hp,eN:t,i:p,j:g,bA:d,bB:0,k,eY:r,l:b,m:y})}))}else{var $=e.a;return a(ba,c,De(function(b,g,p,_,y,k,w,j){var B=w.a,F=w.b;return V(Fe,v(ar,_,f,j),d0,Qc,i,{bq:$,d1:$,bt:as(1),d7:Zc,ea:o,eb:n,ac:F,fS:B.fS,hn:B.hn,ho:B.ho,hp:B.hp,eN:t,i:p,j:g,bA:$,bB:0,k,eY:r,l:b,m:y})}))}}),tI=function(e){var r=e,n=r,t=n.m0,o=n.mY,c=n.r2,i=n.rQ,f=n.r3,$=n.rR;return{dY:t+.5*(o-t),fd:c+.5*(i-c),kI:f+.5*($-f)}},oI=function(e){var r=e;return r.mY},cI=function(e){var r=e;return r.rQ},fp=function(e){var r=e;return r.rR},iI=function(e){var r=e;return r.m0},fI=function(e){var r=e;return r.r2},up=function(e){var r=e;return r.r3},ei=l(function(e,r){var n=e,t=r;return t-n}),$p=function(e){return R(a(ei,iI(e),oI(e)),a(ei,fI(e),cI(e)),a(ei,up(e),fp(e)))},Be=function(e){var r=$p(e),n=r.a,t=r.b,o=r.c;return{pA:No(tI(e)),q5:n/2,q6:t/2,q7:o/2}},Ef=l(function(e,r){switch(e.$){case 0:if(e.b.$){var f=e.a,$=e.b.a.U;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:var o=r.a,i=r.c,t=r.d;return P(Zv,$,Be(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return P(Zv,$,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return P(Zv,$,Be(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}else{var n=e.b.a;switch(r.$){case 0:return $e;case 1:var o=r.a,i=r.c,t=r.d;return P(kt,n,Be(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return P(kt,n,Be(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return P(kt,n,Be(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return P(kt,n,Be(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return P(kt,n,Be(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return P(kt,n,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return P(kt,n,Be(o),i,t);case 8:var o=r.a,i=r.c;return P(kt,n,Be(o),i,0);case 9:var o=r.a,i=r.c;return P(kt,n,Be(o),i,0);default:var o=r.a,c=r.b,i=r.d;return P(ZA,n,c,Be(o),i)}}case 1:if(e.b.$){var b=e.a,$=e.b.a.U,d=e.c;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:var o=r.a,i=r.c,t=r.d;return V(os,$,d,Be(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return V(os,$,d,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return V(os,$,d,Be(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}else{var s=e.b.a,d=e.c;switch(r.$){case 0:return $e;case 1:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Be(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Be(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Be(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Be(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Be(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Be(o),i,t);case 8:var o=r.a,i=r.c;return V(xt,s,d,Be(o),i,0);case 9:var o=r.a,i=r.c;return V(xt,s,d,Be(o),i,0);default:var o=r.a,c=r.b,i=r.d;return V(XA,s,d,c,Be(o),i)}}case 2:var g=e.a,p=e.b,Ve=e.c,We=e.d,_=v(ns,p,Ve,We);if(_.$){var j=_.a,B=_.b,F=B.a,H=B.b,N=_.c,O=N.a,ee=N.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:return $e;case 6:var o=r.a,i=r.c,w=r.d;return Cr(aI,j,F,H,Be(o),i,w);case 7:var o=r.a,i=r.c,w=r.d;return zt(WA,j,F,H,O,ee,Be(o),i,w);case 8:return $e;case 9:return $e;default:return $e}}else{var y=_.a,k=_.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:var o=r.a,i=r.c,w=r.d;return V(l0,y,k,Be(o),i,w);case 3:return $e;case 4:var o=r.a,i=r.c,w=r.d;return V(l0,y,k,Be(o),i,w);case 5:return $e;case 6:var o=r.a,i=r.c,w=r.d;return V(l0,y,k,Be(o),i,w);case 7:var o=r.a,i=r.c,w=r.d;return V(l0,y,k,Be(o),i,w);case 8:return $e;case 9:return $e;default:return $e}}default:var ue=e.a,ve=e.b,ye=e.c,ze=e.d,Ve=e.e,We=e.f,Z=V(ts,ve,ye,ze,Ve,We);if(Z.$){var _r=Z.a,qe=Z.b,or=qe.a,Tr=qe.b,Ur=Z.c,wa=Ur.a,Ha=Ur.b,zn=Z.d,F=zn.a,H=zn.b,ir=Z.e,O=ir.a,ee=ir.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:return $e;case 6:var o=r.a,i=r.c,t=r.d;return zt(nI,_r,or,Tr,wa,Ha,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return OA(_r)(or)(Tr)(wa)(Ha)(F)(H)(O)(ee)(Be(o))(i)(t);case 8:return $e;case 9:return $e;default:return $e}}else{var Ee=Z.a,Qe=Z.b,Oe=Z.c,k=Z.d;switch(r.$){case 0:return $e;case 1:return $e;case 2:var o=r.a,i=r.c,t=r.d;return Gr(v0,Ee,Qe,Oe,k,Be(o),i,t);case 3:return $e;case 4:var o=r.a,i=r.c,t=r.d;return Gr(v0,Ee,Qe,Oe,k,Be(o),i,t);case 5:return $e;case 6:var o=r.a,i=r.c,t=r.d;return Gr(v0,Ee,Qe,Oe,k,Be(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return Gr(v0,Ee,Qe,Oe,k,Be(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}}}),Uf=function(e){return{$:3,a:e}},lp=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.pA;return{pA:{dY:n*c.dY,fd:t*c.fd,kI:o*c.kI},q5:n*r.q5,q6:t*r.q6,q7:o*r.q7}}),vp=lh,cs=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){var d=e.a,b=e.b,g=e.c,p=K4(t),_=p.uy,y=p.kI,k=p.fd,w=p.dY,j=vp({uy:_,dY:w*d,fd:k*b,kI:y*g});return zt(r,n,j,o,c,i,f,$,s)}}}}}}}}}},is=l(function(e,r){switch(r.$){case 0:return Fv;case 6:var n=r.a,t=r.b;return a(Go,n,a(is,e,t));case 1:var o=r.a,c=r.b;return a(ba,a(lp,e,o),a(cs,e,c));case 2:var o=r.a,c=r.b;return a(Z4,a(lp,e,o),a(cs,e,c));case 4:return r;case 3:var c=r.a;return Uf(a(cs,e,c));default:var i=r.a;return J4(a(Y,is(e),i))}}),b0=l(function(e,r){var n=r;return a(is,e,n)}),m0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},VN=ne,ri=519,HN=ne,sp=7683,dp=7682,ha=7680,uI=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return function(d){return{$:2,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:f,i:$,j:s,k:d}}}}}}}}}}}},fs=x(function(e,r,n){var t=e.kH,o=e.jl,c=e.hP,i=l(function(s,d){var b=s;return d(b)}),f=l(function(s,d){var b=s;return d(b)}),$=function(s){return a(Ie,i(s.gk),a(Ie,f(s.fC),a(Ie,f(s.gz),f(s.gA))))};return a($,n,a($,r,v(uI,c,o,t)))}),$I=v(fs,{jl:0,hP:0,kH:15},{fC:ha,gk:ri,gz:ha,gA:sp},{fC:ha,gk:ri,gz:ha,gA:dp}),lI=v(fs,{jl:0,hP:0,kH:15},{fC:ha,gk:ri,gz:ha,gA:dp},{fC:ha,gk:ri,gz:ha,gA:sp}),p0=l(function(e,r){return e?a(A,lI,r):a(A,$I,r)}),vI={src:`
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
    `,attributes:{normal:"ad",position:"s0"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",shadowLight:"h0",viewMatrix:"m"}},sI=function(e){if(e.$){var r=e.c;return D(De(function(n,t,o,c,i,f,$,s){return V(Fe,a(p0,c,s),vI,m0,r,{i:o,j:t,k:f,l:n,h0:$,m:i})}))}else return M},Qo=function(e){var r=sI(e);if(r.$)return $e;var n=r.a;return Uf(n)},dI=J(function(e,r,n,t){var o=a(Ef,n,N4),c=(function(){var d=h(e,r);return d.a?d.b?co(u([o,Qo(O4)])):o:d.b?Qo(O4):$e})(),i=RA(t),f=i.a,$=i.b,s=i.c;return a(K$,_A(t),a(b0,R(f,$,s),c))}),bI=l(function(e,r){return P(dI,!0,!0,e,r)}),RN=ne,ja=function(e){var r=e;return xe(r)},us=l(function(e,r){var n=e,t=r;return oe(t,n)>-1}),$s=l(function(e,r){var n=e,t=r;return n+.5*(t-n)}),mI=Kn({dY:-1,fd:0,kI:0}),pI=Kn({dY:0,fd:-1,kI:0}),bp=Kn({dY:0,fd:0,kI:-1}),mp=Kn({dY:1,fd:0,kI:0}),qf=Kn({dY:0,fd:1,kI:0}),hI=Mr(function(e,r,n,t,o,c){var i=a(us,n,c)?Uv:bp,f=a(us,r,o)?qf:pI,$=a(us,e,t)?mp:mI,s=R(ja(a(ei,e,t)),ja(a(ei,r,o)),ja(a(ei,n,c))),d=v(Pt,a($s,e,t),a($s,r,o),a($s,n,c)),b=e0({aY:d,uH:$,uQ:f,uW:i});return{o2:b,qd:s}}),gI=l(function(e,r){return Cr(hI,Af(e),If(e),Bf(e),Af(r),If(r),Bf(r))}),br=x(function(e,r,n){return{dY:e,fd:r,kI:n}}),pp=l(function(e,r){var n=r.a,t=r.b,o=r.c,c=R(n/2,t/2,o/2),i=c.a,f=c.b,$=c.c;return a(bI,e,a(gI,v(br,-i,-f,-$),v(br,i,f,$)))}),FN=ne,yI=x(function(e,r,n){return{O:a(r0,e,r),fR:ja(n.fR),s5:ja(n.s5)}}),_I=function(e){var r=e;return r.O},hp=r9,gp=e9,yp=l(function(e,r){var n=Rn(e),t=Dr-Rn(r.af)-n,o=v(hp,Dr,r.af,e);return t<0?{ap:a(A,tc(o),r.ap),W:r.W+1,af:v(gp,t,n,e)}:t?{ap:r.ap,W:r.W,af:o}:{ap:a(A,tc(o),r.ap),W:r.W+1,af:lo}}),_p=l(function(e,r){var n=r.a,t=r.c,o=r.d,c=Rn(e),i=Dr-Rn(o)-c,f=v(hp,Dr,o,e),$=a(j1,f,r);if(i<0){var s=v(gp,i,c,e);return a(j1,s,$)}else return $}),ai=X8,CI=function(e){var r=e.a,n=e.c,t=e.d,o=l(function(c,i){if(c.$)return a(A,c,i);var f=c.a;return v(ai,o,i,f)});return{ap:v(ai,o,C,n),W:r/Dr|0,af:t}},PI=l(function(e,r){var n=e.d,t=r.a,o=r.c,c=r.d;if(oe(t,Dr*4)<1){var i=l(function(f,$){if(f.$){var d=f.a;return a(_p,d,$)}else{var s=f.a;return v(ai,i,$,s)}});return a(_p,c,v(ai,i,e,o))}else{var i=l(function($,s){if($.$){var b=$.a;return a(yp,b,s)}else{var d=$.a;return v(ai,i,s,d)}});return a(gl,!0,a(yp,c,v(ai,i,CI(e),o)))}}),SI=l(function(e,r){var n=Hf(e),t=Vf(e),o=Hf(r),c=la(o),i=l(function(s,d){var b=s.a,g=s.b,p=s.c;return a(A,R(b+c,g+c,p+c),d)}),f=Vf(r),$=v(se,i,f,t);return{aF:$,kE:a(PI,o,n)}}),h0={aF:C,kE:pl},Cp=function(e){var r=e;return{aF:He(r.aF),kE:r.kE}},ls=function(e){if(e.b){var r=e.a,n=e.b;return Cp(v(se,SI,Cp(r),n))}else return h0},kI=l(function(e,r){var n=e.ad,t=e.s0;return a(A,{ad:t0(n),s0:et(t)},r)}),Pp=rh,Sp=ah,kp=nh,xI=Mt(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var f=i.a,$=i.b,s=kp(f.s0),d=Sp(f.s0),b=Pp(f.s0),g=a(Ne,e,b),p=a(je,r,b),_=a(Ne,n,d),y=a(je,t,d),k=a(Ne,o,s),w=a(je,c,s),j=$;e=g,r=p,n=_,t=y,o=k,c=w,i=j;continue e}else return H4({mY:r,rQ:t,rR:c,m0:e,r2:n,r3:o})}),xp=l(function(e,r){var n=kp(e.s0),t=Sp(e.s0),o=Pp(e.s0);return Gr(xI,o,o,t,t,n,n,r)}),jp=function(e){var r=v(dl,kI,C,Hf(e));if(r.b){var n=r.a,t=r.b,o=a(Oc,r,Vf(e)),c=a(xp,n,t);return P(B4,c,e,o,0)}else return Nv},jI=Le(function(e,r,n,t,o){e:for(;;){var c=t(r/n),i=a(A,c,o);if(ie(r,e))return i;var f=e,$=r-1,s=n,d=t,b=i;e=f,r=$,n=s,t=d,o=b;continue e}}),g0=l(function(e,r){return e<1?C:V(jI,0,e-1,e,r,C)}),y0=l(function(e,r){var n=Pr(r);return n>=2?{aF:a(Y,function(t){return ie(t,n-1)?R(0,n,1):R(0,1+t,2+t)},a(Vn,0,n-1)),kE:ki(a(A,e,r))}:h0}),wI=Mr(function(e,r,n,t,o,c){e:for(;;){var i=a(Qr,r,t+1),f=r*a(Qr,n,o+1),$=r*o,s=f+i,d=$+i,b=f+t,g=$+t,p=R(g,d,s),_=R(g,s,b),y=a(A,p,a(A,_,c));if(t>0){var k=e,w=r,j=n,B=t-1,F=o,H=y;e=k,r=w,n=j,t=B,o=F,c=H;continue e}else if(o>0){var k=e,w=r,j=n,B=e-1,F=o-1,H=y;e=k,r=w,n=j,t=B,o=F,c=H;continue e}else return y}}),wp=Le(function(e,r,n,t,o){return n<=1||t<=1?h0:{aF:Cr(wI,e,n,t,e-1,r-1,C),kE:a(yl,n*t,function(c){return a(o,a(Qr,n,c),c/n|0)})}}),LI=x(function(e,r,n){return V(wp,e,r,e+1,r,n)}),Lp=Le(function(e,r,n,t,o){return a(n,t/e,o/r)}),TI=x(function(e,r,n){return v(LI,e,r,v(Lp,e,r,n))}),at=function(e){return e},Xo=function(e){return e},Tp=(function(){var e=v(TI,1,72,l(function(f,$){var s=2*ka*$,d=xn(s),b=kn(s);return{ad:Xo({dY:b,fd:-d,kI:0}),s0:at({dY:b,fd:-d,kI:f-.5})}})),r=Xo({dY:0,fd:0,kI:1}),n={ad:r,s0:at({dY:0,fd:0,kI:.5})},t=a(y0,n,a(g0,72,function(f){var $=2*ka*f;return{ad:r,s0:at({dY:kn($),fd:xn($),kI:.5})}})),o=Xo({dY:0,fd:0,kI:-1}),c={ad:o,s0:at({dY:0,fd:0,kI:-.5})},i=a(y0,c,a(g0,72,function(f){var $=2*ka*f;return{ad:o,s0:at({dY:kn($),fd:-xn($),kI:-.5})}}));return n0(jp(ls(u([t,i,e]))))})(),Mp=f0(Tp),MI=function(e){var r=e,n=xe(r.kI),t=xe(r.fd),o=xe(r.dY);if(oe(o,t)<1)if(oe(o,n)<1){var c=mn(r.kI*r.kI+r.fd*r.fd);return{dY:0,fd:-r.kI/c,kI:r.fd/c}}else{var c=mn(r.fd*r.fd+r.dY*r.dY);return{dY:-r.fd/c,fd:r.dY/c,kI:0}}else if(oe(t,n)<1){var c=mn(r.kI*r.kI+r.dY*r.dY);return{dY:r.kI/c,fd:0,kI:-r.dY/c}}else{var c=mn(r.dY*r.dY+r.fd*r.fd);return{dY:-r.fd/c,fd:r.dY/c,kI:0}}},vs=function(e){var r=MI(e),n=r,t=n,o=e,c=o,i={dY:c.fd*t.kI-c.kI*t.fd,fd:c.kI*t.dY-c.dY*t.kI,kI:c.dY*t.fd-c.fd*t.dY};return h(r,i)},zp=function(e){var r=j4(e),n=vs(r),t=n.a,o=n.b;return e0({aY:w4(e),uH:t,uQ:o,uW:r})},zI=function(e){var r=e;return r.fR},DI=function(e){var r=e;return r.s5},AI=J(function(e,r,n,t){var o=zp(_I(t)),c=a(Ef,n,Tp),i=(function(){var b=h(e,r);return b.a?b.b?co(u([c,Qo(Mp)])):c:b.b?Qo(Mp):$e})(),f=DI(t),$=f,s=zI(t),d=s;return a(K$,o,a(b0,R($,$,d),i))}),II=l(function(e,r){return P(AI,!0,!0,e,r)}),ss=x(function(e,r,n){return a(II,e,v(yI,jn,qf,{fR:Va(n),s5:Va(r)}))}),ds=function(e){return co(e)},ni=ds,bs=function(e){var r=e.a,n=e.b,t=e.c;return D4(v(T4,r,n,t))},ms=function(e){return bs(R(0,e,0))},BI=function(e){var r=e;return r.pA},VI=function(e){var r=e;return r.s5},HI=function(e){var r=e;return r},RI=l(function(e,r){var n=e.t0,t=e.gj,o=e.gv,c=e.ad,i=e.s0,f=HI(t),$=n?-1:1,s=o,d=s.a,b=s.b,g={ad:t0(c),s0:et(i),gj:vp({uy:$,dY:f.dY,fd:f.fd,kI:f.kI}),gv:a(Lr,d,b)};return a(A,g,r)}),FI=function(e){var r=v(dl,RI,C,Hf(e));if(r.b){var n=r.a,t=r.b,o=a(Oc,r,Vf(e)),c=a(xp,n,t);return P(V4,c,e,o,0)}else return Nv},EI=x(function(e,r,n){return V(wp,e,r,e+1,r+1,n)}),UI=x(function(e,r,n){return v(EI,e,r,v(Lp,e,r,n))}),qI=n0(FI(v(UI,72,72,l(function(e,r){var n=2*ka*e,t=xn(n),o=-ka/2+ka*r,c=xn(o),i=kn(n),f=kn(o),$={dY:f*i,fd:f*t,kI:c};return{ad:Xo($),s0:at($),gj:Xo({dY:-t,fd:i,kI:0}),t0:!0,gv:h(e,r)}})))),_0=72,C0=2*_0,NI=l(function(e,r){e:for(;;){var n=C0+1,t=a(Qr,C0,2*e+3),o=a(Qr,C0,2*e+2),c=2*e+1,i=2*e,f=C0,$=a(A,R(f,i,o),a(A,R(i,t,o),a(A,R(i,c,t),a(A,R(c,n,t),r))));if(e){var s=e-1,d=$;e=s,r=d;continue e}else return $}}),GI=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),YI=l(function(e,r){e:for(;;){var n=v(GI,0,2*ka,e/_0),t={gE:n,hA:0,hN:1},o={gE:n,hA:1,hN:1},c=a(A,t,a(A,o,r));if(e){var i=e-1,f=c;e=i,r=f;continue e}else return c}}),WI=(function(){var e=a(YI,_0-1,u([{gE:0,hA:0,hN:0},{gE:0,hA:1,hN:0}])),r=a(NI,_0-1,C);return a(Oc,e,r)})(),OI={src:`
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
    `,attributes:{angle:"gE",offsetScale:"hA",radiusScale:"hN"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",shadowLight:"h0",viewMatrix:"m"}},Dp=function(e){return Uf(De(function(r,n,t,o,c,i,f,$){return V(Fe,a(p0,!0,$),OI,m0,WI,{i:t,j:n,k:i,l:r,h0:f,m:c})}))},JI=J(function(e,r,n,t){var o=a(Ef,n,qI),c=(function(){var $=h(e,r);return $.a?$.b?co(u([o,Dp(t)])):o:$.b?Dp(t):$e})(),i=VI(t),f=i;return a(z4,a(o0,jn,BI(t)),a(b0,R(f,f,f),c))}),ZI=l(function(e,r){return P(JI,!0,!0,e,r)}),ps=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Ap=J(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),hs=Mr(function(e,r,n,t,o,c){return{$:3,a:e,b:r,c:n,d:t,e:o,f:c}}),gs=l(function(e,r){return{$:0,a:e,b:r}}),QI=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(gs,n,t);case 1:var n=e.a,t=e.b,r=e.c;return v(ps,n,t,r);case 2:var n=e.a,t=e.b,i=e.c,f=e.d;return P(Ap,n,t,i,f);default:var n=e.a,t=e.b,o=e.c,c=e.d,i=e.e,f=e.f;return Cr(hs,n,t,o,c,i,f)}},XI=QI,KI=l(function(e,r){return a(ZI,XI(e),r)}),EN=ne,eB=l(function(e,r){return{pA:r,s5:ja(e)}}),ys=l(function(e,r){return a(KI,e,a(eB,Va(r),jn))}),UN=ne,Nf=function(e){return e},qN=ne,_s=function(e){return v(mr,0,1,e<=.04045?e/12.92:a(bn,(e+.055)/1.055,2.4))},Ip=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return{oU:o,pd:t,q3:n,s9:r}},Gf=function(e){var r=Ip(e),n=r.oU,t=r.pd,o=r.q3,c=r.s9;return P(St,_s(c),_s(o),_s(t),n)},Bp=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Yf=ch,Wf=ih,Of=fh,rB=function(e){var r=e,n=Yf(r),t=Wf(r),o=Of(r);return P(Bp,.4124*n+.3576*t+.1805*o,.2126*n+.7152*t+.0722*o,.0193*n+.1192*t+.9505*o,Q4(r))},aB=function(e){return rB(Gf(e))},Vp=function(e){var r=aB(e),n=r.a,t=r.b,o=r.c,c=n+t+o;return Nf({dY:n/c,fd:t/c})},jt=function(e){return{$:0,a:e}},NN=0,nB=l(function(e,r){var n=e,t=r.fd,o=r.dY;return P(Bp,n*o/t,n,n*(1-o-t)/t,1)}),tB=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return P(St,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t,o)},Jf=l(function(e,r){return tB(a(nB,e,r))}),oB=l(function(e,r){var n=a(Jf,Yv(1),e);return v(ps,0,jt(n),r)}),P0=function(e){return e},cB=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Cs=J(function(e,r,n,t){var o=R(e,r,n),c=o.a,i=o.b,f=o.c,$=f<=.5?f*(i+1):f+i-f*i,s=f*2-$,d=function(_){var y=_<0?_+1:_>1?_-1:_;return y*6<1?s+($-s)*y*6:y*2<1?$:y*3<2?s+($-s)*(2/3-y)*6:s},b=d(c-1/3),g=d(c),p=d(c+1/3);return P(cB,p,g,b,t)}),ti=function(e){return P(Cs,e.aS,e.a0,e.D,e.oU)},iB=l(function(e,r){return a(oB,Vp(ti(r)),P0(e))}),Ps={$:0},fB=function(e){var r=e.hu,n=e.hT,t=e.o9;return Cr(hs,0,jt(Gf(t)),jt(v(mr,0,1,n)),jt(v(mr,0,1,r)),jt(1),Ps)},uB=l(function(e,r){var n=e.hu,t=e.hT;return fB({o9:ti(r),hu:n,hT:t})}),Hp=function(e){var r=Ip(e),n=r.oU,t=r.pd,o=r.q3,c=r.s9;return P(St,c,o,t,n)},$B=function(e){return a(gs,0,jt(Hp(e)))},lB=function(e){return $B(ti(e))},wn=function(e){var r=e.bU;switch(r.$){case 0:return lB(e.lf);case 1:var n=r.a.hu,t=r.a.hT;return a(uB,{hu:n,hT:t},e.lf);default:var o=r.a.js;return a(iB,o,e.lf)}},Ko=function(e){return jt(e)},Zf=l(function(e,r){if(r.$){var t=r.a;return s3(t)}else{var n=r.a;return jt(e(n))}}),Rp=function(e){return a(gs,0,a(Zf,Hp,e))},vB=l(function(e,r){return v(ps,0,a(Zf,Gf,e),r)}),sB=function(e){var r=e.hu,n=e.hT,t=e.o9;return Cr(hs,0,a(Zf,Gf,t),a(Zf,a(mr,0,1),n),a(Zf,a(mr,0,1),r),Ko(1),Ps)},Ss=function(e){return P(Cs,e.aS,e.a0,e.D,e.oU)},oi=l(function(e,r){var n=(function(){var f=r.bV;if(f.$)return Ko(Ss(r.lf));if(f.a.$)return a(e$,"[textured-surface] FromAtlas textures in 3D Surface are deferred. Rendering as fallback colour.",Ko(Ss(r.lf)));var $=f.a.a.by;return a(te,Ko(Ss(r.lf)),a(Ke,$,e.mU))})(),t=r.bU;switch(t.$){case 0:return Rp(n);case 1:var o=t.a.hu,c=t.a.hT;return sB({o9:n,hu:Ko(o),hT:Ko(c)});default:var i=t.a.js;return a(vB,n,P0(i))}}),dB=x(function(e,r,n){var t=I(e,{bV:M}),o=a(oi,{mU:Re},t),c=wn(t),i=a(je,0,n-2*r),f=i/2;return ni(u([v(ss,c,r,i),a(ms,f,a(ys,o,r)),a(ms,-f,a(ys,o,r))]))}),bB=function(e){var r=e;return r.O},Fp=(function(){var e={ad:Wv,s0:at({dY:0,fd:0,kI:1})},r=Xo({dY:0,fd:0,kI:-1}),n=.5*mn(2),t=a(y0,e,a(g0,72,function(i){var f=2*ka*i,$=xn(f),s=kn(f);return{ad:Xo({dY:s*n,fd:$*n,kI:n}),s0:at({dY:s,fd:$,kI:0})}})),o={ad:r,s0:jn},c=a(y0,o,a(g0,72,function(i){var f=2*ka*i,$=xn(f),s=kn(f);return{ad:r,s0:at({dY:s,fd:-$,kI:0})}}));return n0(jp(ls(u([c,t]))))})(),Ep=f0(Fp),mB=function(e){var r=e;return r.fR},pB=function(e){var r=e;return r.s5},hB=J(function(e,r,n,t){var o=zp(bB(t)),c=a(Ef,n,Fp),i=(function(){var b=h(e,r);return b.a?b.b?co(u([c,Qo(Ep)])):c:b.b?Qo(Ep):$e})(),f=pB(t),$=f,s=mB(t),d=s;return a(K$,o,a(b0,R($,$,d),i))}),gB=l(function(e,r){return P(hB,!0,!0,e,r)}),GN=ne,yB=x(function(e,r,n){return{O:a(r0,e,r),fR:ja(n.fR),s5:ja(n.s5)}}),_B=x(function(e,r,n){var t=n/2;return a(gB,e,v(yB,v(br,0,-t,0),qf,{fR:Va(n),s5:Va(r)}))}),ks=x(function(e,r,n){return ds(u([a(Ef,e,r),Qo(n)]))}),CB=function(e){return e},PB=function(e){return q4(a(Y,CB,G4(e)))},SB=l(function(e,r){if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a,c=t.b;return{aF:a(Y,function(i){return R(0,1+i,2+i)},a(Vn,0,Pr(c))),kE:ki(a(A,e,r))}}else return h0}),kB=function(e){return v(br,e.dY,e.fd,e.kI)},xB=function(e){var r=a(Y,kB,e);if(r.b&&r.b.b&&r.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,f=c.b;return D(a(SB,n,a(A,o,a(A,i,f))))}else return M},jB=function(e){var r=a(jr,xB,e);if(r.b){var n=r,t=PB(ls(n));return D({rU:t,ka:f0(t)})}else return M},Qf=l(function(e,r){var n=jB(u([r]));if(n.$===1)return ni(C);var t=n.a.ka,o=n.a.rU;return v(ks,e,o,t)}),wB=l(function(e,r){return a(pp,e,R(r,r,r))}),LB=x(function(e,r,n){var t=2*ka/e,o=a(Y,function(c){return a(y4,t*c,v(Zr,0,n,0))},a(Vn,0,e-1));return a(Qf,r,o)}),TB=Mt(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var f=i.a,$=i.b,s=f,d=s.kI,b=s.fd,g=s.dY,p=a(Ne,g,e),_=a(je,g,r),y=a(Ne,b,n),k=a(je,b,t),w=a(Ne,d,o),j=a(je,d,c),B=$;e=p,r=_,n=y,t=k,o=w,c=j,i=B;continue e}else return{mY:r,rQ:t,rR:c,m0:e,r2:n,r3:o}}),MB=l(function(e,r){var n=e,t=n.kI,o=n.fd,c=n.dY;return Gr(TB,c,c,o,o,t,t,r)}),Up={src:`
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
    `,attributes:{quadVertex:"hM"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},Ln=bh,Tn=J(function(e,r,n,t){var o=rt(t),c=rt(n),i=rt(r),f=rt(e);return Ln({mD:f.dY,mE:i.dY,mF:c.dY,mG:o.dY,mH:f.fd,mI:i.fd,mJ:c.fd,mK:o.fd,mL:f.kI,mM:i.kI,mN:c.kI,mO:o.kI,mP:0,mQ:0,mR:0,mS:0})}),qp=l(function(e,r){return{$:0,a:e,b:r}}),zB=qp({lx:1,l4:0,m3:6}),nt=zB(u([{hM:v(Rf,0,0,0)},{hM:v(Rf,1,0,1)},{hM:v(Rf,1,1,2)},{hM:v(Rf,0,1,3)}])),Np={src:`
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
    `,attributes:{quadVertex:"hM"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},S0={src:`
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
    `,attributes:{quadVertex:"hM"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},Gp={src:`
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
    `,attributes:{quadVertex:"hM"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},DB=Le(function(e,r,n,t,o){var c=a(MB,r,u([n,t,o])),i=Be(c);switch(e.$){case 0:if(e.b.$){var $=e.a,s=e.b.a.U;return a(ba,i,De(function(wt,Dn,Ra,Fa,qr,Nr,ta,Er){return V(Fe,v(ar,Fa,0,Er),Gp,ep,nt,{gQ:s,i:Ra,j:Dn,k:Nr,bR:P(Tn,r,n,t,o),l:wt,m:qr})}))}else{var f=e.b.a;return v(ma,f,i,De(function(wt,Dn,Ra,Fa,qr,Nr,ta,Er){return V(Fe,v(ar,Fa,0,Er),Up,Qv,nt,{d8:aa(f),i:Ra,j:Dn,k:Nr,bR:P(Tn,r,n,t,o),l:wt,m:qr})}))}case 1:if(e.b.$){var g=e.a,s=e.b.a.U,b=e.c;return a(ba,i,De(function(Ra,Fa,qr,Nr,ta,Er,oa,ca){return V(Fe,v(ar,Nr,0,ca),Gp,ip,nt,{iu:Xc(b),gQ:s,i:qr,j:Fa,k:Er,bR:P(Tn,r,n,t,o),l:Ra,m:ta})}))}else{var d=e.b.a,b=e.c;return a(ba,i,De(function(wt,Dn,Ra,Fa,qr,Nr,ta,Er){return V(Fe,v(ar,Fa,0,Er),Up,Xv,nt,{iu:b,eh:a($0,Xc(b),d),i:Ra,j:Dn,k:Nr,bR:P(Tn,r,n,t,o),l:wt,m:qr})}))}case 2:var p=e.a,_=e.b,Oe=e.c,_r=e.d,y=v(ns,_,Oe,_r);if(y.$)if(y.a.$){var ue=y.a,ve=ue.a,ye=ue.b,ze=y.b,F=ze.a,H=ze.b,Ve=y.c,O=Ve.a,ee=Ve.b;return v(ma,ve,i,De(function(qr,Nr,ta,Er,oa,ca,Lt,eu){var An=Lt.a,ru=Lt.b;return V(Fe,v(ar,Er,0,eu),S0,Jc,nt,{bq:F,bt:H,d9:aa(ve),ac:ru,fS:An.fS,hn:An.hn,ho:An.ho,hp:An.hp,eM:ye,i:ta,j:Nr,bA:O,bB:ee,k:ca,bR:P(Tn,r,n,t,o),l:qr,m:oa})}))}else{var j=y.a.a,B=y.b,F=B.a,H=B.b,N=y.c,O=N.a,ee=N.b;return a(ba,i,De(function(wt,Dn,Ra,Fa,qr,Nr,ta,Er){var oa=ta.a,ca=ta.b;return V(Fe,v(ar,Fa,0,Er),S0,Jc,nt,{bq:F,bt:H,d9:Zc,ac:ca,fS:oa.fS,hn:oa.hn,ho:oa.ho,hp:oa.hp,eM:j,i:Ra,j:Dn,bA:O,bB:ee,k:Nr,bR:P(Tn,r,n,t,o),l:wt,m:qr})}))}else{var k=y.a,w=y.b;return v(ma,k,i,De(function(wt,Dn,Ra,Fa,qr,Nr,ta,Er){var oa=ta.a,ca=ta.b;return V(Fe,v(ar,Fa,0,Er),Np,Kv,nt,{d_:w,ac:ca,fS:oa.fS,hn:oa.hn,ho:oa.ho,hp:oa.hp,jm:aa(k),i:Ra,j:Dn,k:Nr,bR:P(Tn,r,n,t,o),l:wt,m:qr})}))}default:var We=e.a,Z=e.b,Ee=e.c,Qe=e.d,Oe=e.e,_r=e.f,qe=V(ts,Z,Ee,Qe,Oe,_r);if(qe.$)if(qe.a.$){var vi=qe.a,H8=vi.a,ye=vi.b,R8=qe.b,zn=R8.a,ir=R8.b,F8=qe.c,rc=F8.a,ot=F8.b,E8=qe.d,F=E8.a,H=E8.b,U8=qe.e,O=U8.a,ee=U8.b;return v(ma,H8,i,De(function(ca,Lt,eu,An,ru,zR,q8,DR){var H0=q8.a,AR=q8.b;return V(Fe,v(ar,An,0,DR),S0,Qc,nt,{bq:F,d1:ye,bt:H,d7:aa(H8),ea:ot,eb:ir,ac:AR,fS:H0.fS,hn:H0.hn,ho:H0.ho,hp:H0.hp,eN:rc,i:eu,j:Lt,bA:O,bB:ee,k:zR,bR:P(Tn,r,n,t,o),eY:zn,l:ca,m:ru})}))}else{var wa=qe.a.a,Ha=qe.b,zn=Ha.a,ir=Ha.b,tt=qe.c,rc=tt.a,ot=tt.b,li=qe.d,F=li.a,H=li.b,V0=qe.e,O=V0.a,ee=V0.b;return a(ba,i,De(function(qr,Nr,ta,Er,oa,ca,Lt,eu){var An=Lt.a,ru=Lt.b;return V(Fe,v(ar,Er,0,eu),S0,Qc,nt,{bq:F,d1:wa,bt:H,d7:Zc,ea:ot,eb:ir,ac:ru,fS:An.fS,hn:An.hn,ho:An.ho,hp:An.hp,eN:rc,i:ta,j:Nr,bA:O,bB:ee,k:ca,bR:P(Tn,r,n,t,o),eY:zn,l:qr,m:oa})}))}else{var or=qe.a,Tr=qe.b,Ur=qe.c,w=qe.d;return v(ma,or,i,De(function(Dn,Ra,Fa,qr,Nr,ta,Er,oa){var ca=Er.a,Lt=Er.b;return V(Fe,v(ar,qr,0,oa),Np,es,nt,{d_:w,o9:aa(or),ac:Lt,fS:ca.fS,hn:ca.hn,ho:ca.ho,hp:ca.hp,hu:Ur,i:Fa,j:Ra,k:ta,bR:P(Tn,r,n,t,o),hT:Tr,l:Dn,m:Nr})}))}}}),AB=(function(){var e=u([{da:a(Lr,0,1)},{da:a(Lr,1,1)},{da:a(Lr,2,1)},{da:a(Lr,3,1)},{da:a(Lr,0,-1)},{da:a(Lr,1,-1)},{da:a(Lr,2,-1)},{da:a(Lr,3,-1)}]),r=u([R(0,1,2),R(0,2,3),R(4,6,5),R(4,7,6),R(4,5,1),R(1,0,4),R(5,6,2),R(2,1,5),R(6,7,3),R(3,2,6),R(7,4,0),R(0,3,7)]);return a(Oc,e,r)})(),IB={src:`
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
    `,attributes:{quadShadowVertex:"da"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",shadowLight:"h0",viewMatrix:"m"}},Yp=J(function(e,r,n,t){return Uf(De(function(o,c,i,f,$,s,d,b){return V(Fe,a(p0,f,b),IB,m0,AB,{i,j:c,k:s,bR:P(Tn,e,r,n,t),l:o,h0:d,m:$})}))}),BB=Mt(function(e,r,n,t,o,c,i){var f=V(DB,n,t,o,c,i),$=h(e,r);return $.a?$.b?co(u([f,P(Yp,t,o,c,i)])):f:$.b?P(Yp,t,o,c,i):$e}),k0=Le(function(e,r,n,t,o){return Gr(BB,!0,!1,e,r,n,t,o)}),VB=x(function(e,r,n){var t=r/2,o=n/2,c=l(function(i,f){return v(br,i,f,0)});return V(k0,Rp(e),a(c,-t,-o),a(c,t,-o),a(c,t,o),a(c,-t,o))}),xs=function(e){return{$:1,a:e}},HB=function(e){return P(Ap,0,jt(Gf(e)),Ko(1),Ps)},RB=function(e){return HB(ti(e))},Wp=function(e){return bs(R(e,0,0))},FB=function(e){return bs(R(0,0,e))},Op=qf,EB=a(r0,jn,Op),UB=l(function(e,r){return v(Ev,EB,Yc(e),r)}),Jp=l(function(e,r){return v(Ev,L4,Yc(e),r)}),qB=L9,Zp=M9,NB=function(e){var r=e.a,n=e.b,t=e.c,o=sb(R(r,n,t));return{o3:a(Zp,n,r),rm:qB(t/o),s5:o}},Qp=x(function(e,r,n){var t=n.a,o=n.b,c=R(o.dY-t.dY,o.fd-t.fd,o.kI-t.kI),i=c.a,f=c.b,$=c.c,s=NB(R(i,f,$)),d=s.rm,b=s.o3,g=s.s5;return a(FB,t.kI,a(ms,t.fd,a(Wp,t.dY,a(Jp,b,a(UB,d-vf(90),a(Wp,g/2,a(Jp,vf(90),v(ss,e,r/2,g))))))))}),GB=x(function(e,r,n){var t=l(function(o,c){e:for(;;)switch(o.$){case 0:var i=o.a;return I(c,{fr:D(i)});case 1:var i=o.a,f=c.fr;if(f.$===1)return I(c,{fr:D(i)});var $=f.a;return{gC:a(A,v(Qp,RB(e),r,h($,i)),c.gC),fr:D(i)};case 2:var s=o.a.uc,b=xs(s),g=c;o=b,c=g;continue e;case 3:var d=o.a.qy,b=xs(d),g=c;o=b,c=g;continue e;default:var d=o.a.qy,b=xs(d),g=c;o=b,c=g;continue e}});return He(v(se,t,{gC:C,fr:M},n).gC)}),YB=x(function(e,r,n){if(r.b){var t=r.a,o=r.b;return ni(v(Qd,l(function(c,i){return a(Qf,e,u([c,i,a(bo,R(0,0,-n),i),a(bo,R(0,0,-n),c)]))}),r,Q(o,u([t]))))}else return ni(C)}),WB=x(function(e,r,n){var t=r/2,o=n/2;return V(k0,e,v(br,-t,-o,0),v(br,t,-o,0),v(br,t,o,0),v(br,-t,o,0))}),OB=function(e){var r=e;return!r.$&&r.a.$===1},JB=l(function(e,r){var n=r;if(n.$)return ds(C);if(n.a.$){var t=n.a.a.ka,o=n.a.a.rU;return v(ks,e.t4,o,t)}else{var t=n.a.a.ka,o=n.a.a.rU;return v(ks,e.ui,o,t)}}),Xp={src:`
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
    `,attributes:{triangleVertex:"ky"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",triangleVertexPositions:"gr",viewMatrix:"m"}},Kp={src:`
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
    `,attributes:{triangleVertex:"ky"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",triangleVertexPositions:"gr",viewMatrix:"m"}},Xf=function(e){var r=Df(e),n=r.a,t=r.b,o=r.c,c=rt(n),i=rt(t),f=rt(o);return Ln({mD:c.dY,mE:i.dY,mF:f.dY,mG:0,mH:c.fd,mI:i.fd,mJ:f.fd,mK:0,mL:c.kI,mM:i.kI,mN:f.kI,mO:0,mP:0,mQ:0,mR:0,mS:0})},x0=U4(u([R({ky:0},{ky:1},{ky:2})])),ZB=l(function(e,r){var n=R4(r),t=Be(n);switch(e.$){case 0:if(e.b.$){var c=e.a,i=e.b.a.U;return $e}else{var o=e.b.a;return v(ma,o,t,De(function(ue,ve,ye,ze,Ve,We,Z,Ee){return V(Fe,v(ar,ze,0,Ee),Xp,Qv,x0,{d8:aa(o),i:ye,j:ve,k:We,l:ue,gr:Xf(r),m:Ve})}))}case 1:if(e.b.$){var s=e.a;return $e}else{var f=e.b.a,$=e.c;return a(ba,t,De(function(ue,ve,ye,ze,Ve,We,Z,Ee){return V(Fe,v(ar,ze,0,Ee),Xp,Xv,x0,{eh:a($0,Xc($),f),i:ye,j:ve,k:We,l:ue,gr:Xf(r),m:Ve})}))}case 2:var d=e.a,b=e.b,B=e.c,F=e.d,g=v(ns,b,B,F);if(g.$)return $e;var p=g.a,_=g.b;return v(ma,p,t,De(function(ue,ve,ye,ze,Ve,We,Z,Ee){var Qe=Z.a,Oe=Z.b;return V(Fe,v(ar,ze,0,Ee),Kp,Kv,x0,{d_:_,ac:Oe,fS:Qe.fS,hn:Qe.hn,ho:Qe.ho,hp:Qe.hp,jm:aa(p),i:ye,j:ve,k:We,l:ue,gr:Xf(r),m:Ve})}));default:var y=e.a,k=e.b,w=e.c,j=e.d,B=e.e,F=e.f,H=V(ts,k,w,j,B,F);if(H.$)return $e;var N=H.a,O=H.b,ee=H.c,_=H.d;return v(ma,N,t,De(function(ve,ye,ze,Ve,We,Z,Ee,Qe){var Oe=Ee.a,_r=Ee.b;return V(Fe,v(ar,Ve,0,Qe),Kp,es,x0,{d_:_,o9:aa(N),ac:_r,fS:Oe.fS,hn:Oe.hn,ho:Oe.ho,hp:Oe.hp,hu:ee,i:ze,j:ye,k:Z,hT:O,l:ve,gr:Xf(r),m:We})}))}}),QB=(function(){var e=u([{e7:a(Lr,0,1)},{e7:a(Lr,1,1)},{e7:a(Lr,2,1)},{e7:a(Lr,0,-1)},{e7:a(Lr,1,-1)},{e7:a(Lr,2,-1)}]),r=u([R(0,1,2),R(3,5,4),R(3,4,1),R(3,1,0),R(4,5,2),R(4,2,1),R(5,3,0),R(5,0,2)]);return a(Oc,e,r)})(),XB={src:`
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
    `,attributes:{triangleShadowVertex:"e7"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",shadowLight:"h0",triangleVertexPositions:"gr",viewMatrix:"m"}},e8=function(e){return Uf(De(function(r,n,t,o,c,i,f,$){return V(Fe,a(p0,o,$),XB,m0,QB,{i:t,j:n,k:i,l:r,h0:f,gr:Xf(e),m:c})}))},KB=J(function(e,r,n,t){var o=a(ZB,n,t),c=h(e,r);return c.a?c.b?co(u([o,e8(t)])):o:c.b?e8(t):$e}),eV=l(function(e,r){return P(KB,!0,!0,e,r)}),rV=l(function(e,r){var n=r.a,t=r.b,o=r.c;return a(eV,e,v(Ba,v(br,n.dY,n.fd,n.kI),v(br,t.dY,t.fd,t.kI),v(br,o.dY,o.fd,o.kI)))}),Mn=x(function(e,r,n){var t=r.bV;return t.$?n:a(e$,"[textured-surface] Textured Surface on "+(e+" is deferred. Rendering as fallback colour."),n)}),aV=l(function(e,r){e:for(;;){var n=r.a,t=r.b,o=function(ir){return D(a(qv,n,ir))};switch(t.$){case 0:var _=t.a.he,ye=t.a.$8,Z=t.a.tZ;return o(v(WB,a(oi,e,Z),ye,_));case 1:var ve=t.a.s5,Z=t.a.tZ;return o(v(Mn,"Disc",Z,v(LB,48,wn(Z),ve)));case 2:var ue=t.a.fR,ve=t.a.s5,Z=t.a.tZ;return o(v(Mn,"Capsule",Z,v(dB,Z,ve,ue)));case 3:var y=t.a.kE,Z=t.a.tZ;if(y.b&&y.b.b&&y.b.b.b&&y.b.b.b.b&&!y.b.b.b.b.b){var c=y.a,i=y.b,f=i.a,$=i.b,s=$.a,d=$.b,b=d.a;return o(V(k0,a(oi,e,Z),v(br,c.dY,c.fd,c.kI),v(br,f.dY,f.fd,f.kI),v(br,s.dY,s.fd,s.kI),v(br,b.dY,b.fd,b.kI)))}else return o(v(Mn,"polygon ("+(Xe(Pr(y))+"-vertex)"),Z,a(Qf,wn(Z),y)));case 10:var g=t.a.Z,Z=t.a.tZ;return o(v(Mn,"Cube",Z,a(wB,wn(Z),g)));case 11:var ve=t.a.s5,Z=t.a.tZ;return o(a(ys,a(oi,e,Z),ve));case 12:var ue=t.a.fR,ve=t.a.s5,Z=t.a.tZ;return o(v(Mn,"Cylinder",Z,v(ss,wn(Z),ve,ue)));case 13:var p=t.a.qd,Z=t.a.tZ;return o(v(Mn,"Block",Z,a(pp,wn(Z),p)));case 14:var y=t.a.kE,Z=t.a.tZ;return o(v(Mn,"Triangle",Z,a(rV,wn(Z),y)));case 15:var _=t.a.he,y=t.a.kE,Z=t.a.tZ,k=a(oi,e,Z),w=I(Z,{bV:M}),j=_/2,B=a(Y,function(ir){return I(ir,{kI:ir.kI+j})},y),F=wn(w),H=(function(){if(y.b&&y.b.b&&y.b.b.b&&y.b.b.b.b&&!y.b.b.b.b.b){var ir=y.a,tt=y.b,rc=tt.a,ot=tt.b,li=ot.a,V0=ot.b,vi=V0.a;return V(k0,k,v(br,ir.dY,ir.fd,ir.kI+j),v(br,rc.dY,rc.fd,rc.kI+j),v(br,li.dY,li.fd,li.kI+j),v(br,vi.dY,vi.fd,vi.kI+j))}else return v(Mn,"polygon-with-walls top ("+(Xe(Pr(y))+"-vertex)"),Z,a(Qf,F,B))})(),N=v(YB,F,B,_),O=a(Y,function(ir){return I(ir,{kI:ir.kI-j})},y),ee=a(Qf,F,He(O));return o(ni(u([H,ee,N])));case 16:var ue=t.a.fR,ve=t.a.s5,Z=t.a.tZ;return o(v(Mn,"Cone",Z,v(_B,wn(Z),ve,ue)));case 17:var ye=t.a.$8,ze=t.a.qy,Ve=t.a.dc,Z=t.a.tZ;return o(v(Mn,"Line",Z,v(Qp,wn(Z),ye,h(Ve,ze))));case 18:var We=t.a.rV,Z=t.a.tZ;return a(de,function(ir){var tt=a(JB,{t4:a(oi,e,Z),ui:wn(Z)},ir);return a(qv,n,OB(ir)?tt:v(Mn,"welded mesh",Z,tt))},a(Ke,We,e.rW));case 4:var Ee=t.a.j8,Qe=t.a.eK,Oe=t.a.ek,_r=t.a.e0;if(_r.$)return a(e$,"[LeafPath] fill-only LeafPath in 3D is deferred; no stroke colour set",M);var qe=_r.a;return o(ni(v(GB,qe,Qe,Ee)));case 5:var or=t.a,Tr=or.hP;if(Tr.$)return M;var Ur=Tr.a.by;return a(de,function(ir){return a(qv,n,v(VB,ir,or.$8,or.he))},a(Ke,Ur,e.mU));case 6:var wa=t.a.rt,Ha=e,zn=h(n,wa);e=Ha,r=zn;continue e;case 7:return M;case 8:return M;case 9:return M;case 19:return M;case 20:return M;default:return M}}}),nV=l(function(e,r){return a(jr,aV(e),k4(r))}),js=function(e){return{$:6,a:e}},tV=function(e){return{$:0,a:e}},oV=function(e){return{$:1,a:e}},cV=function(e){return{$:2,a:e}},ws=l(function(e,r){return a(P4,e.gq,a(_4,e.f6,a(C4,e.f8,r)))}),iV=function(e){return e},ci=function(e){return e},j0=function(e){return P(Cs,e.aS,e.a0,e.D,e.oU)},r8=l(function(e,r){var n=e,t=r,o=t.kI-n.kI,c=t.fd-n.fd,i=t.dY-n.dY,f=a(je,xe(i),a(je,xe(c),xe(o)));if(f){var $=o/f,s=c/f,d=i/f,b=mn(d*d+s*s+$*$);return D({dY:d/b,fd:s/b,kI:$/b})}else return M}),fV=l(function(e,r){var n=a(ws,e,r),t=a(ws,e,v(Zr,0,0,0)),o=v(Zr,n.dY-t.dY,n.fd-t.fd,n.kI-t.kI);return a(te,bp,a(r8,jn,v(br,o.dY,o.fd,o.kI)))}),uV=function(e){var r=e.a,n=e.b;switch(n.$){case 19:var o=n.a;return D(tV({t:!0,a:js(j0(o.lf)),ed:a(fV,r,o.ed),i6:ci(o.i6)}));case 20:var o=n.a,t=a(ws,r,o.s0);return D(oV({t:!0,a:js(j0(o.lf)),i6:iV(o.i6),s0:v(br,t.dY,t.fd,t.kI)}));case 21:var o=n.a;return D(cV({a:js(j0(o.uk)),ma:ci(o.i6),mb:ci(o.i6),ul:Uv}));default:return M}},$V=function(e){return a(jr,uV,k4(e))},YN=ne,w0=function(e){return e},lV=function(e){return{$:0,a:e}},vV=lV,sV={$:3},dV=sV,bV=J(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),mV=bV,pV=function(e){return{$:1,a:e}},hV=pV,gV=function(e){return a(fu,"height",Xe(e))},yV=Pu,_V=function(e){return{$:2,a:e}},CV=_V,PV=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,c=function(f){return Vr(f*1e3)/1e3},i=function(f){return Vr(f*1e4)/100};return C5(u(["rgba(",G(i(r)),"%,",G(i(n)),"%,",G(i(t)),"%,",G(c(o)),")"]))},SV=x(function(e,r,n){return v(Uh,e,r,n)}),a8=function(e){var r=e;return r},ga=P(St,1,1,1,1),yr=x(function(e,r,n){return a(Y,function(t){return a(t,r,n)},e)}),kV=function(e){return Ln({mD:e.ag,mE:e.aj,mF:e.am,mG:e.aZ,mH:e.ah,mI:e.ak,mJ:e.an,mK:e.a_,mL:e.ai,mM:e.al,mN:e.ao,mO:e.a$,mP:0,mQ:0,mR:0,mS:1})},L0=Le(function(e,r,n,t,o){var c=t.ml?1:-1,i=P(St,t.f8,t.f8,t.f8,c);return Cr(o,e,i,kV(t),t.ml,r,n)}),n8=Mr(function(e,r,n,t,o,c){e:for(;;)switch(o.$){case 0:return c;case 6:var i=o.a,f=o.b,$=e,s=r,d=n,b=a(x4,i,t),g=f,p=c;e=$,r=s,n=d,t=b,o=g,c=p;continue e;case 1:var _=o.b,y=a(A,V(L0,e,r,n,t,_),c.aJ);return{aJ:y,bh:c.bh,ty:c.ty,N:c.N};case 2:var _=o.b,y=a(A,V(L0,e,r,n,t,_),c.N);return{aJ:c.aJ,bh:c.bh,ty:c.ty,N:y};case 4:var k=o.b,w=a(A,V(L0,e,r,n,t,k),c.bh);return{aJ:c.aJ,bh:w,ty:c.ty,N:c.N};case 3:var j=o.a,B=a(A,V(L0,e,r,n,t,j),c.ty);return{aJ:c.aJ,bh:c.bh,ty:B,N:c.N};default:var F=o.a;return v(se,P(n8,e,r,n,t),c,F)}}),t8=function(e){var r=e;return-r},xV=l(function(e,r){var n=e,t=r;return t+n}),ec=0,jV=function(e){var r=e,n=a(je,xe(r.dY),a(je,xe(r.fd),xe(r.kI)));if(n){var t=r.kI/n,o=r.fd/n,c=r.dY/n,i=mn(c*c+o*o+t*t);return i*n}else return ec},wV=x(function(e,r,n){var t=e,o=r,c=n;return{dY:t,fd:o,kI:c}}),o8=function(e){var r=$p(e),n=r.a,t=r.b,o=r.c;return jV(v(wV,n,t,o))},LV=l(function(e,r){var n=a(Ct,.99,a(Yo,ja(e),t8(fp(r)))),t=a(Ct,1.01,a(xV,o8(r),t8(up(r))));return h(n,t)}),TV=J(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Ls=TV,T0=J(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),MV=function(e){var r=e.b7,n=e.cb,t=e.cu;return P(T0,518,t,n,r)},zV=l(function(e,r){return{$:6,a:e,b:r}}),DV=zV,c8=u([MV({b7:1,cb:0,cu:!1}),P(Ls,!1,!1,!1,!1),a(DV,0,1)]),Ts=8,i8=15,ii=7681,AV={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},IV=qp({lx:1,l4:0,m3:5}),BV=IV(u([{s0:a(Lr,-1,-1)},{s0:a(Lr,1,-1)},{s0:a(Lr,-1,1)},{s0:a(Lr,1,1)}])),VV={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"s0"},uniforms:{}},Ms=function(e){return v(fs,{jl:e.jl,hP:e.hP,kH:e.kH},{fC:e.fC,gk:e.gk,gz:e.gz,gA:e.gA},{fC:e.fC,gk:e.gk,gz:e.gz,gA:e.gA})},zs=function(e){return V(Fe,u([Ms(e),P(Ls,!1,!1,!1,!1)]),VV,AV,BV,{})},HV=zs({fC:ii,jl:0,hP:Ts,gk:ri,kH:i8,gz:ii,gA:ii}),RV=516,f8=5386,FV=function(e){return a(bn,2,e+4)},u8=function(e){return zs({fC:ha,jl:i8,hP:Ts,gk:RV,kH:FV(e),gz:f8,gA:f8})},EV=x(function(e,r,n){return gn(u([v(yr,e,n,c8),u([u8(r),HV])]))}),UV=l(function(e,r){return gn(a(Hn,EV(e),r))}),qV=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return{$:0,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:f,i:$,j:s}}}}}}}}}}},NV=function(e){var r=e.oU,n=e.lf,t=e.gB,o=e.is,c=e.i1,i=e.j_,f=l(function($,s){var d=$.a,b=$.b,g=$.c,p=s.a,_=s.b,y=s.c;return qV(d)(b)(g)(p)(_)(y)(i)(c)(o)(t)});return a(f,n,r)},GV=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),$8=l(function(e,r){var n=e,t=r;return v(GV,32774,n,t)}),YV=l(function(e,r){return NV({gB:0,oU:a($8,e,r),is:0,lf:a($8,e,r),i1:0,j_:0})}),WN=ne,WV=1,OV=771,JV={$:8},ZV=JV,M0=u([a(YV,WV,OV),ZV]),QV=function(e){var r=e.b7,n=e.cb,t=e.cu;return P(T0,513,t,n,r)},l8=QV({b7:1,cb:0,cu:!0}),fi=a(A,l8,M0),v8=514,s8=function(e){var r=e.b7,n=e.cb,t=e.cu;return P(T0,515,t,n,r)},d8=240,XV=a(A,s8({b7:1,cb:0,cu:!0}),a(A,Ms({fC:ha,jl:d8,hP:0,gk:v8,kH:0,gz:ha,gA:ha}),M0)),KV=function(e){var r=e.b7,n=e.cb,t=e.cu;return P(T0,514,t,n,r)},ui=a(A,KV({b7:1,cb:0,cu:!0}),M0),Ds=function(e){var r=e;return A4(r.cH)},eH=function(e){return J$(Ds(e))},rH=function(e){return e0({aY:at({dY:e.aZ,fd:e.a_,kI:e.a$}),uH:Kn({dY:e.ag,fd:e.ah,kI:e.ai}),uQ:Kn({dY:e.aj,fd:e.ak,kI:e.al}),uW:Kn({dY:e.am,fd:e.an,kI:e.ao})})},As=l(function(e,r){var n=e,t=r,o=n.uW,c=o,i=n.uQ,f=i,$=n.uH,s=$;return{dY:t.dY*s.dY+t.fd*s.fd+t.kI*s.kI,fd:t.dY*f.dY+t.fd*f.fd+t.kI*f.kI,kI:t.dY*c.dY+t.fd*c.fd+t.kI*c.kI}}),b8=l(function(e,r){var n=e,t=r,o=n.aY,c=o,i=t.dY-c.dY,f=t.fd-c.fd,$=t.kI-c.kI,s=n.uW,d=s,b=n.uQ,g=b,p=n.uH,_=p;return{dY:i*_.dY+f*_.fd+$*_.kI,fd:i*g.dY+f*g.fd+$*g.kI,kI:i*d.dY+f*d.fd+$*d.kI}}),m8=l(function(e,r){return{aY:a(b8,e,J$(r)),uH:a(As,e,Z$(r)),uQ:a(As,e,Q$(r)),uW:a(As,e,zf(r))}}),aH=l(function(e,r){var n=r,t=n,o=e,c=o;return{mY:a(je,c.mY,t.mY),rQ:a(je,c.rQ,t.rQ),rR:a(je,c.rR,t.rR),m0:a(Ne,c.m0,t.m0),r2:a(Ne,c.r2,t.r2),r3:a(Ne,c.r3,t.r3)}}),nH=l(function(e,r){var n=r,t=n.kI,o=n.fd,c=n.dY,i=e,f=i.a,$=i.b,s=i.c,d=xe(f)/2,b=xe($)/2,g=xe(s)/2;return{mY:c+d,rQ:o+b,rR:t+g,m0:c-d,r2:o-b,r3:t-g}}),Is=J(function(e,r,n,t){var o=n.pA,c=2*n.q7*r,i=2*n.q6*r,f=2*n.q5*r,$=o.kI*r,s=o.fd*r,d=o.dY*r,b=Ia(zf(e)),g=xe(f*b.dY)+xe(i*b.fd)+xe(c*b.kI),p=Ia(Q$(e)),_=xe(f*p.dY)+xe(i*p.fd)+xe(c*p.kI),y=Ia(Z$(e)),k=xe(f*y.dY)+xe(i*y.fd)+xe(c*y.kI),w=a(nH,R(k,_,g),a(b8,e,v(br,d,s,$)));if(t.$)return D(w);var j=t.a;return D(a(aH,j,w))}),Bs=J(function(e,r,n,t){e:for(;;)if(t.b){var o=t.a,c=t.b;switch(o.$){case 0:var p=e,_=r,y=n,k=c;e=p,r=_,n=y,t=k;continue e;case 1:var i=o.a,f=P(Is,e,r,i,n),p=e,_=r,y=f,k=c;e=p,r=_,n=y,t=k;continue e;case 2:var i=o.a,f=P(Is,e,r,i,n),p=e,_=r,y=f,k=c;e=p,r=_,n=y,t=k;continue e;case 3:var p=e,_=r,y=n,k=c;e=p,r=_,n=y,t=k;continue e;case 4:var i=o.a,f=P(Is,e,r,i,n),p=e,_=r,y=f,k=c;e=p,r=_,n=y,t=k;continue e;case 5:var $=o.a,p=e,_=r,y=P(Bs,e,r,n,$),k=c;e=p,r=_,n=y,t=k;continue e;default:var s=o.a,d=o.b,b=a(m8,rH(s),e),g=r*s.f8,p=e,_=r,y=P(Bs,b,g,n,u([d])),k=c;e=p,r=_,n=y,t=k;continue e}}else return n}),tH={ml:!0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aZ:0,a_:0,a$:0,f8:1},oH=function(e){var r=e;return r},p8=zs({fC:ii,jl:0,hP:Ts,gk:ri,kH:255,gz:ii,gA:ii}),ON=ne,na={is:0,t:!1,i1:0,jU:0,j_:0,uf:0,dY:0,fd:0,kI:0},cn=l(function(e,r){var n=e,t=r;return Ln({mD:n.dY,mE:n.j_,mF:t.dY,mG:t.j_,mH:n.fd,mI:n.i1,mJ:t.fd,mK:t.i1,mL:n.kI,mM:n.is,mN:t.kI,mO:t.is,mP:n.uf,mQ:n.jU,mR:t.uf,mS:t.jU})}),Kf=h({fS:a(cn,na,na),hn:a(cn,na,na),ho:a(cn,na,na),hp:a(cn,na,na)},P(St,0,0,0,0)),cH=function(e){var r=e;return r.en},iH=function(e){var r=e;return r.lP},h8=function(e){var r=e;return .5*r},fH=function(e){var r=e;return db(r)},g8=function(e){return fH(h8(iH(e)))},y8=function(e){var r=e;return 2*r},uH=function(e){return y8(a(Ct,g8(e),cH(e)))},$H=function(e){var r=e;return r.s4},lH=l(function(e,r){var n=r.o$,t=r.qI,o=r.sf,c=g8(e),i=ja(o),f=i,$=ja(t),s=$,d=$H(e);if(d){var b=uH(e),g=b;return hc(s)?Ln({mD:2/(n*g),mE:0,mF:0,mG:0,mH:0,mI:2/g,mJ:0,mK:0,mL:0,mM:0,mN:0,mO:-1,mP:0,mQ:0,mR:0,mS:1}):Ln({mD:2/(n*g),mE:0,mF:0,mG:0,mH:0,mI:2/g,mJ:0,mK:0,mL:0,mM:0,mN:-2/(s-f),mO:-(s+f)/(s-f),mP:0,mQ:0,mR:0,mS:1})}else return hc(s)?Ln({mD:1/(n*c),mE:0,mF:0,mG:0,mH:0,mI:1/c,mJ:0,mK:0,mL:0,mM:0,mN:-1,mO:-2*f,mP:0,mQ:0,mR:-1,mS:0}):Ln({mD:1/(n*c),mE:0,mF:0,mG:0,mH:0,mI:1/c,mJ:0,mK:0,mL:0,mM:0,mN:-(s+f)/(s-f),mO:-2*s*f/(s-f),mP:0,mQ:0,mR:-1,mS:0})}),vH=function(e){return a(A,s8({b7:1,cb:0,cu:!0}),a(A,Ms({fC:ha,jl:d8,hP:e,gk:v8,kH:0,gz:ha,gA:ha}),M0))},z0=l(function(e,r){return(1&e>>r)===1?0:1}),sH=x(function(e,r,n){return gn(a(Y,function(t){var o=t<<4,c=P(St,a(z0,t,0),a(z0,t,1),a(z0,t,2),a(z0,t,3));return v(yr,e,h(r,c),vH(o))},a(Vn,1,a(bn,2,n)-1)))}),dH=mh,bH=mp,mH={aY:jn,uH:bH,uQ:Op,uW:a0},pH=function(e){var r=No(J$(e)),n=Ia(zf(e)),t=Ia(Q$(e)),o=Ia(Z$(e));return Ln({mD:o.dY,mE:t.dY,mF:n.dY,mG:r.dY,mH:o.fd,mI:t.fd,mJ:n.fd,mK:r.fd,mL:o.kI,mM:t.kI,mN:n.kI,mO:r.kI,mP:0,mQ:0,mR:0,mS:1})},hH=l(function(e,r){return pH(a(m8,Ds(r),e))}),gH=function(e){return a(hH,mH,e)},$i=u([l8,P(Ls,!1,!1,!1,!1)]),yH=function(e){var r=Ds(e.pv),n=co(e.g2),t=n,o=P(Bs,r,1,M,u([t]));if(o.$===1)return C;var c=o.a,i=gH(e.pv),f=(function(){var ve=e.F;switch(ve.$){case 0:return h(0,0);case 1:return h(1,0);case 2:return h(2,0);case 3:var ye=ve.a;return h(3,ye);case 4:var ye=ve.a;return h(4,ye);default:return h(5,0)}})(),$=f.a,s=f.b,d=a(LV,e.cy,c),b=d.a,g=d.b,p=a(lH,e.pv,{o$:e.o$,qI:g,sf:b}),_=dH(p).mS,y=_?Ia(zf(r)):rt(eH(e.pv)),k=e.B,w=k,j=a(Jf,w,e.G),B=j,F=Ln({mD:0,mE:y.dY,mF:Yf(B),mG:e.oc,mH:0,mI:y.fd,mJ:Wf(B),mK:oH(o8(c)),mL:0,mM:y.kI,mN:Of(B),mO:$,mP:0,mQ:_,mR:0,mS:s}),H=Cr(n8,F,i,p,tH,t,{aJ:C,bh:C,ty:C,N:C}),N=e.E;switch(N.$){case 0:var O=N.a;return gn(u([v(yr,H.aJ,h(O,ga),fi),v(yr,H.N,h(O,ga),a(A,Jo,$i)),v(yr,H.N,h(O,ga),a(A,Jo,ui)),v(yr,H.N,h(O,ga),a(A,Oo,$i)),v(yr,H.N,h(O,ga),a(A,Oo,ui)),v(yr,H.bh,Kf,fi)]));case 1:var O=N.a;return gn(u([v(yr,H.aJ,Kf,fi),u([p8]),v(yr,H.ty,O.fS,c8),u([u8(0)]),v(yr,H.aJ,h(O,ga),XV),v(yr,H.N,h(O,ga),a(A,Jo,$i)),v(yr,H.N,h(O,ga),a(A,Jo,ui)),v(yr,H.N,h(O,ga),a(A,Oo,$i)),v(yr,H.N,h(O,ga),a(A,Oo,ui)),v(yr,H.bh,Kf,fi)]));default:var ee=N.a,ue=N.b;return gn(u([v(yr,H.aJ,h(ue,ga),fi),u([p8]),a(UV,H.ty,ee),v(sH,H.aJ,ue,Pr(ee)),v(yr,H.N,h(ue,ga),a(A,Jo,$i)),v(yr,H.N,h(ue,ga),a(A,Jo,ui)),v(yr,H.N,h(ue,ga),a(A,Oo,$i)),v(yr,H.N,h(ue,ga),a(A,Oo,ui)),v(yr,H.bh,Kf,fi)]))}},_H=function(e){return a(fu,"width",Xe(e))},_8=l(function(e,r){var n=u([hV(1),CV(0),vV(!0),P(mV,0,0,0,0)]),t=(function(){var B=e.il;switch(B.$){case 0:return R(n,"0",1);case 1:return R(a(A,dV,n),"1",1);default:var F=B.a;return R(n,"0",F)}})(),o=t.a,c=t.b,i=t.c,f=e.qd,$=f.a,s=f.b,d=a8(s),b=a(X,"height",Xe(d)+"px"),g=a8($),p=g/d,_=a(yn,function(B){return yH({o$:p,pv:e.pv,cy:e.cy,g2:B.g2,B:B.B,E:B.E,oc:i,F:B.F,G:B.G})},r),y=a(X,"width",Xe(g)+"px"),k=e.o5,w=k,j=PV(w);return v(yV,"div",u([a(X,"padding","0px"),y,b]),u([h(c,v(SV,o,u([_H(Vr(g*i)),gV(Vr(d*i)),y,b,a(X,"display","block"),a(X,"background-color",j)]),_))]))}),CH=function(e){return{$:2,a:e}},Vs=function(e){return CH(e)},C8=function(e){return a(_8,{il:Vs(e.iN),o5:e.o5,pv:e.pv,cy:e.cy,qd:e.qd},u([{g2:e.g2,B:e.B,E:e.E,F:e.F,G:e.G}]))},JN=1,ZN=0,PH=function(e){return{$:0,a:e}},SH=function(e){return PH(e)},Hs=function(e){return e},kH=function(e){return{$:1,a:e}},xH=function(e){return kH(e)},D0=function(e){var r=e,n=a(je,xe(r.dY),a(je,xe(r.fd),xe(r.kI)));if(n){var t=r.kI/n,o=r.fd/n,c=r.dY/n,i=mn(c*c+o*o+t*t);return D({dY:c/i,fd:o/i,kI:t/i})}else return M},jH=l(function(e,r){var n=e,t=r,o=t.kI-n.kI,c=t.fd-n.fd,i=t.dY-n.dY,f=a(je,xe(i),a(je,xe(c),xe(o)));if(f){var $=o/f,s=c/f,d=i/f,b=mn(d*d+s*s+$*$);return b*f}else return ec}),wH=l(function(e,r){var n=e,t=r;return t.dY*n.dY+t.fd*n.fd+t.kI*n.kI}),P8=l(function(e,r){var n=e,t=r;return oe(t,n)>0}),LH=l(function(e,r){var n=e,t=r;return oe(t,n)<0}),TH=l(function(e,r){var n=e,t=r;return{dY:t.dY-n.dY,fd:t.fd-n.fd,kI:t.kI-n.kI}}),MH=l(function(e,r){var n=e,t=r,o=t.dY*n.dY+t.fd*n.fd+t.kI*n.kI;return{dY:n.dY*o,fd:n.fd*o,kI:n.kI*o}}),zH=function(e){var r=e;return{dY:-r.dY,fd:-r.fd,kI:-r.kI}},DH=x(function(e,r,n){return a(Xr,function(t){var o=a(TH,a(MH,t,r),r);return a(Xr,function(c){var i=a(Gv,r,e),f=a(wH,n,i),$=a(P8,ec,f)?i:a(LH,ec,f)?zH(i):Wv;return a(de,function(s){return R(t,c,s)},D0($))},D0(o))},D0(e))}),AH=function(e){var r=e;return r},QN=ne,Rs=ne,XN=ne,IH=l(function(e,r){var n=e,t=r;return a(Zp,n,t)}),BH=l(function(e,r){var n=e,t=r;return{dY:n.fd*t.kI-n.kI*t.fd,fd:n.kI*t.dY-n.dY*t.kI,kI:n.dY*t.fd-n.fd*t.dY}}),S8=function(e){var r=e;return r.uH},k8=function(e){var r=e;return r.uQ},VH=function(e){return a(BH,S8(e),k8(e))},HH=function(e){var r=e;return r.aY},RH=function(e){return{aY:HH(e),uH:S8(e),uQ:k8(e),uW:VH(e)}},FH=function(e){return{en:e.en,lP:(function(){var r=e.qU;if(r.$){var t=r.a;return y8(a(IH,h8(t),e.en))}else{var n=r.a;return n}})(),cH:RH(e.kF),s4:e.s4}},EH=l(function(e,r){var n=vs(r),t=n.a,o=n.b;return Rs({aY:e,uH:t,uQ:o})}),UH=l(function(e,r){return a(EH,r,e)}),qH=function(e){var r=a(o0,e.qM,e.qE),n=AH(e.ul),t=a(Gv,r,n),o=(function(){var c=v(DH,r,n,t);if(c.$){var d=D0(r);if(d.$){var g=vs(e.ul),p=g.a,_=g.b;return Rs({aY:e.qE,uH:_,uQ:e.ul})}else{var b=d.a;return a(UH,b,e.qE)}}else{var i=c.a,f=i.a,$=i.b,s=i.c;return Rs({aY:e.qE,uH:s,uQ:$})}})();return FH({en:a(jH,e.qE,e.qM),qU:e.qU,s4:e.s4,kF:o})},A0=function(e){return qH({qE:Hs(e.qE),qM:Hs(e.qM),qU:(function(){var r=e.s4;if(r.$){var t=r.a.oE;return xH(Va(t))}else{var n=r.a.eq;return SH(Yc(n))}})(),s4:(function(){var r=e.s4;return r.$?1:0})(),ul:a(te,qf,a(r8,jn,Hs(e.ul)))})},io=function(e){return e},NH=function(e){var r=e;return r},Fs=function(e){var r=v(mr,1667,25e3,NH(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Nf({dY:n,fd:t})},I0=Nf({dY:.31271,fd:.32902}),GH=Nf({dY:.37208,fd:.37529}),YH=Nf({dY:.44757,fd:.40745}),KN=ne,x8=function(e){return e},j8=Fs(x8(12e3)),w8=Fs(x8(5600)),fo=function(e){switch(e.$){case 0:return I0;case 1:return w8;case 2:return j8;case 3:return YH;case 4:return GH;case 5:var r=e.a;return Fs(r);default:var n=e.a;return Vp(n)}},eG=ne,Es=function(e){return P0(1.2*a(bn,2,e))},L8=function(e){return ja(e)},WH=function(e){var r=e;return r},OH=function(e){var r=e.mm,n=e.n2,t=e.lF,o=WH(n);return Es(a(bu,2,100*a(bn,t,2)/(o*r)))},JH=function(e){switch(e.$){case 0:var r=e.a;return Es(r);case 1:var n=e.a;return L8(n);default:var t=e.a;return OH({lF:t.lF,mm:t.mm,n2:t.n2})}},ZH=l(function(e,r){return{$:2,a:e,b:r}}),T8=function(e){return{$:0,a:e}},B0=function(e){var r=e;return r},QH=function(e){var r=e;return r.t},Us=T8(Kf.a),XH=l(function(e,r){var n=l(function(t,o){var c=o.a,i=o.b;return e(t)?h(a(A,t,c),i):h(c,a(A,t,i))});return v(Xa,n,h(C,C),r)}),KH=function(e){var r=e;return Ln({mD:r.dY,mE:r.j_,mF:0,mG:0,mH:r.fd,mI:r.i1,mJ:0,mK:0,mL:r.kI,mM:r.is,mN:0,mO:0,mP:r.uf,mQ:r.jU,mR:0,mS:0})},M8=De(function(e,r,n,t,o,c,i,f){var $=a(XH,QH,u([B0(e),B0(r),B0(n),B0(t)])),s=$.a,d=$.b;if(s.b){var b=Q(s,d);if(b.b&&b.b.b&&b.b.b.b&&b.b.b.b.b&&!b.b.b.b.b.b){var g=b.a,p=b.b,_=p.a,y=p.b,k=y.a,w=y.b,j=w.a;return a(ZH,a(Y,KH,s),{fS:a(cn,g,_),hn:a(cn,k,j),ho:a(cn,o,c),hp:a(cn,i,f)})}else return Us}else return T8({fS:a(cn,e,r),hn:a(cn,n,t),ho:a(cn,o,c),hp:a(cn,i,f)})}),rG=ne,qs=function(e){return e},Ns=l(function(e,r){var n=e,t=Ia(r.ed),o=t.kI,c=t.fd,i=t.dY,f=a(Jf,r.i6,r.a),$=f;return{is:Of($),t:n,i1:Wf($),jU:0,j_:Yf($),uf:1,dY:-i,fd:-c,kI:-o}}),z8=l(function(e,r){var n=e,t=No(r.s0),o=t.kI,c=t.fd,i=t.dY,f=a(Jf,r.i6,r.a),$=f;return{is:Of($),t:n,i1:Wf($),jU:0,j_:Yf($),uf:2,dY:i,fd:c,kI:o}}),eR=function(e){switch(e.$){case 0:var r=e.a;return a(Ns,qs(r.t),{a:fo(r.a),ed:r.ed,i6:r.i6});case 1:var r=e.a;return a(z8,qs(r.t),{a:fo(r.a),i6:r.i6,s0:r.s0});default:return na}},D8=function(e){var r=e;return r},A8=function(e){var r=e;return{dY:-r.dY,fd:-r.fd,kI:-r.kI}},Gs=function(e){e:for(;;){if(ie(e.ma,ec)&&ie(e.mb,ec))return na;if(a(P8,ja(e.ma),ja(e.mb))){var r={a:e.a,ma:e.mb,mb:e.ma,ul:A8(e.ul)};e=r;continue e}else{var n=xe(D8(e.mb)/ka),t=xe(D8(e.ma)/ka),o=Ia(e.ul),c=o.kI,i=o.fd,f=o.dY,$=a(Jf,Yv(1),e.a),s=$;return{is:t*Of(s),t:!1,i1:t*Wf(s),jU:n/t,j_:t*Yf(s),uf:3,dY:f,fd:i,kI:c}}}},rR=function(e){return Gs({a:e.a,ma:e.i6,mb:e.i6,ul:a0})},I8=!1,Ys=function(e){return Gs({a:e.a,ma:e.i6,mb:ec,ul:e.ul})},aR=function(e){switch(e.$){case 0:var r=e.a;return a(Ns,I8,{a:fo(r.a),ed:r.ed,i6:r.i6});case 1:var r=e.a;return a(z8,I8,{a:fo(r.a),i6:r.i6,s0:r.s0});case 2:var r=e.a;return Gs({a:fo(r.a),ma:r.ma,mb:r.mb,ul:r.ul});case 3:var r=e.a;return Ys({a:fo(r.a),i6:r.i6,ul:r.ul});default:var r=e.a;return rR({a:fo(r.a),i6:r.i6})}},nR=function(e){var r=na,n=function(f){switch(f.$){case 0:return!0;case 1:return!0;default:return!1}},t=a(Y,aR,a(qn,4,a(xr,a(rr,Ml,n),e))),o=function(f){return a(te,r,kr(a(qt,f,t)))},c=a(Y,eR,a(qn,4,a(xr,n,e))),i=function(f){return a(te,r,kr(a(qt,f,c)))};return Je(c)&&Je(t)?Us:zt(M8,i(0),i(1),i(2),i(3),o(0),o(1),o(2),o(3))},tR={$:5},oR=tR,cR={$:0},Ws=cR,iR=function(e){return{$:4,a:e}},fR={$:2},uR=function(e){return hc(e)?fR:iR(e)},$R=function(e){return{$:3,a:e}},lR={$:1},vR=function(e){return hc(e)?lR:$R(e)},sR=function(e){switch(e.$){case 0:return Ws;case 1:var r=e.a;return vR(r);case 2:var r=e.a;return uR(r);default:return oR}},B8=l(function(e,r){return C8({o5:w0(e.A),pv:A0(e.pv),cy:Va(e.cy),iN:e.iN,qd:h(io(Vr(e.f9.$8)),io(Vr(e.f9.he))),g2:r,B:JH(e.B),E:nR(e.E),F:sR(e.F),G:fo(e.G)})}),dR=l(function(e,r){return C8({o5:w0(e.fl.A),pv:A0(e.pv),cy:Va(e.cy),iN:e.iN,qd:h(io(Vr(e.f9.$8)),io(Vr(e.f9.he))),g2:r,B:e.fl.B,E:e.fl.E,F:e.fl.F,G:e.fl.G})}),bR=.005,mR=l(function(e,r){return a(B8,{A:e.f3.A,pv:e.pv,cy:e.cy,iN:e.iN,B:e.f3.B,E:e.f3.E,f9:e.f9,F:e.f3.F,G:e.f3.G},r)}),pR=function(e){return Va(.01*e)},V8=function(e){return a(_8,{il:e.il,o5:e.o5,pv:e.pv,cy:e.cy,qd:e.qd},u([{g2:e.g2,B:e.B,E:e.E,F:e.F,G:e.G}]))},hR=x(function(e,r,n){return zt(M8,e,r,n,na,na,na,na,na)}),gR=function(e){var r=a(Ns,qs(e.ty),{a:w8,ed:e.tX,i6:ci(8e4)}),n=Ys({a:j8,i6:ci(2e4),ul:e.ul}),t=Ys({a:I0,i6:ci(15e3),ul:A8(e.ul)}),o=v(hR,r,n,t);return V8({il:Vs(e.iN),o5:e.o5,pv:e.pv,cy:e.cy,qd:e.qd,g2:e.g2,B:Es(15),E:o,F:Ws,G:I0})},yR=l(function(e,r){var n=e,t=r,o=kn(t);return{dY:o*kn(n),fd:o*xn(n),kI:xn(t)}}),_R=l(function(e,r){return gR({o5:w0(ti(e.A)),pv:A0(e.pv),cy:pR(.5),iN:e.iN,qd:h(io(Vr(e.f9.$8)),io(Vr(e.f9.he))),g2:r,ty:!0,tX:a(yR,Yc(e.tW),Yc(e.tY)),ul:a0})}),CR=function(e){return V8({il:Vs(e.iN),o5:e.o5,pv:e.pv,cy:e.cy,qd:e.qd,g2:e.g2,B:L8(P0(80)),E:Us,F:Ws,G:I0})},PR=l(function(e,r){return CR({o5:w0(ti(e.o5)),pv:A0(e.pv),cy:Va(e.cy),iN:e.iN,qd:h(io(Vr(e.f9.$8)),io(Vr(e.f9.he))),g2:r})}),SR=l(function(e,r){switch(r.$){case 0:var t=r.a;return a(_R,{A:t.o5,pv:e.pv,iN:e.f9.iN,f9:e.f9,tW:t.tW,tY:t.tY},e.g2);case 1:var t=r.a;return a(PR,{o5:t.o5,pv:e.pv,cy:bR,iN:e.f9.iN,f9:e.f9},e.g2);case 2:var t=r.a;return a(B8,{A:j0(t.o5),pv:e.pv,cy:t.cy,iN:e.f9.iN,B:t.B,E:Q(t.E,e.ox),f9:e.f9,F:t.F,G:t.G},e.g2);case 3:var t=r.a,n=t.f3;return a(mR,{pv:e.pv,cy:t.cy,iN:e.f9.iN,f3:I(n,{E:Q(n.E,e.ox)}),f9:e.f9},e.g2);default:var t=r.a;return a(dR,{fl:t.fl,pv:e.pv,cy:t.cy,iN:e.f9.iN,f9:e.f9},e.g2)}}),kR=l(function(e,r){var n=$V(r),t=a(nV,{mU:e.mU,rW:e.rW},r);return a(im,so,a(SR,{pv:e.pv,g2:t,f9:e.f9,ox:n},e.rJ))}),xR=function(e){return{$:0,a:e}},jR=function(e){return xR(e)},wR=function(e){return{iN:e.iN,he:e.f9.he,$8:e.f9.$8}},LR=J(function(e,r,n,t){return zD(a(kR,{pv:lb,rJ:jR({o5:a(cr,function(o){return o.tZ},n),tW:-vf(15),tY:-vf(45)}),mU:r.mU,rW:Re,f9:wR(r)},m4(u([v(MD,e,n,t)]))))}),TR=x(function(e,r,n){var t=$b(e);return a(W,u([E(u([er(za),a(z,"touch-action","none")]))]),u([a(W,u([E(u([er(za),an(xv(1)),Ce(a(K,function(o){return o.t3},r)),a(z,"display","grid"),a(z,"place-items","center"),Pe(Ze(100))]))]),u([a(W,C,u([ce("Swipe or press left/right arrow keys")]))])),P(LR,t,e,r,n)]))}),MR=yD({oN:C,rf:Tg,ro:Ag,rp:Fg,sw:Eg,sA:xy,uw:TR});l7({Carousel:{Main:{init:MR(a(T,function(e){return re({ru:e})},a(S,"inputs",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(_){return a(T,function(y){return a(T,function(k){return a(T,function(w){return a(T,function(j){return a(T,function(B){return re({pj:B,p$:j,qb:w,iN:k,iQ:y,qN:_,qO:p,mq:g,sG:b,sI:d,sK:s,sM:$,sQ:f,ny:i,s6:c,f9:o,to:t,tu:n,ub:r,uA:e})},a(S,"boundingClientRects",ur(a(T,function(B){return a(T,function(F){return a(T,function(H){return re({qw:H,qW:F,tt:B})},a(S,"elements",ur(a(T,function(H){return a(T,function(N){return re({pi:N,by:H})},a(S,"boundingClientRect",a(T,function(N){return a(T,function(O){return a(T,function(ee){return a(T,function(ue){return re({ph:ue,eF:ee,j4:O,ib:N})},a(S,"bottom",q))},a(S,"left",q))},a(S,"right",q))},a(S,"top",q))))},a(S,"id",Se)))))},a(S,"frameId",Se))},a(S,"scroll",a(T,function(B){return a(T,function(F){return a(T,function(H){return a(T,function(N){return a(T,function(O){return a(T,function(ee){return re({li:ee,lj:O,eF:N,ib:H,oE:F,oF:B})},a(S,"contentHeight",q))},a(S,"contentWidth",q))},a(S,"left",q))},a(S,"top",q))},a(S,"viewportHeight",q))},a(S,"viewportWidth",q)))))))},a(S,"darkModeIsOn",ae))},a(S,"deviceOrientation",mo(u([$c(M),a(Ge,D,a(T,function(w){return a(T,function(j){return a(T,function(B){return re({oU:B,pb:j,q_:w})},a(S,"alpha",q))},a(S,"beta",q))},a(S,"gamma",q)))]))))},a(S,"devicePixelRatio",q))},a(S,"dt",q))},a(S,"focusedElementIsContentEditable",ae))},a(S,"focusedElementIsTextInput",ae))},a(S,"keyboard",a(T,function(g){return a(T,function(p){return a(T,function(_){return a(T,function(y){return a(T,function(k){return a(T,function(w){return a(T,function(j){return a(T,function(B){return a(T,function(F){return a(T,function(H){return re({oV:H,pY:F,iP:B,qk:j,eF:w,rX:k,s2:y,j4:_,tA:p,kC:g})},a(S,"alt",ae))},a(S,"ctrl",ae))},a(S,"down",ae))},a(S,"downs",ur(Se)))},a(S,"left",ae))},a(S,"meta",ae))},a(S,"pressedKeys",ur(Se)))},a(S,"right",ae))},a(S,"shift",ae))},a(S,"up",ae))))},a(S,"operatingSystem",Se))},a(S,"pageId",Se))},a(S,"pageScroll",a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(_){return re({li:_,lj:p,eF:g,ib:b,oE:d,oF:s})},a(S,"contentHeight",q))},a(S,"contentWidth",q))},a(S,"left",q))},a(S,"top",q))},a(S,"viewportHeight",q))},a(S,"viewportWidth",q))))},a(S,"paneBoundingBoxes",ur(a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return re({he:g,eF:b,sN:d,ib:s,$8:$})},a(S,"height",q))},a(S,"left",q))},a(S,"paneId",Se))},a(S,"top",q))},a(S,"width",q)))))},a(S,"persisted",ur(a(T,function(f){return a(T,function($){return re(h(f,$))},a(Un,1,Se))},a(Un,0,Se)))))},a(S,"pointer",a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(_){return a(T,function(y){return a(T,function(k){return a(T,function(w){return re({lt:w,iP:k,lv:y,lw:_,ly:p,i7:g,m6:b,nR:d,nS:s,kC:$,dY:f,fd:i})},a(S,"doubleClick",ae))},a(S,"down",ae))},a(S,"dx",q))},a(S,"dy",q))},a(S,"elementIdsForLastDown",ur(Se)))},a(S,"isDown",ae))},a(S,"move",ae))},a(S,"rightDown",ae))},a(S,"rightUp",ae))},a(S,"up",ae))},a(S,"x",q))},a(S,"y",q))))},a(S,"rawPointer",a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(_){return a(T,function(y){return a(T,function(k){return re({lt:k,iP:y,lv:_,lw:p,ly:g,i7:b,m6:d,nR:s,nS:$,kC:f,dY:i,fd:c})},a(S,"doubleClick",ae))},a(S,"down",ae))},a(S,"dx",q))},a(S,"dy",q))},a(S,"elementIdsForLastDown",ur(Se)))},a(S,"isDown",ae))},a(S,"move",ae))},a(S,"rightDown",ae))},a(S,"rightUp",ae))},a(S,"up",ae))},a(S,"x",q))},a(S,"y",q))))},a(S,"screen",a(T,function(o){return a(T,function(c){return re({he:c,$8:o})},a(S,"height",q))},a(S,"width",q))))},a(S,"screenOrientationAngle",q))},a(S,"searchParamsFromUrl",mo(u([$c(M),a(Ge,D,ur(a(T,function(n){return a(T,function(t){return re(h(n,t))},a(Un,1,Se))},a(Un,0,Se))))]))))},a(S,"touches",ur(a(T,function(r){return a(T,function(n){return a(T,function(t){return re({by:t,dY:n,fd:r})},a(S,"id",xi))},a(S,"x",q))},a(S,"y",q)))))},a(S,"wheel",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return re({p7:o,p8:t,qv:n,sT:r,sU:e})},a(S,"deltaX",q))},a(S,"deltaY",q))},a(S,"elementIdsForLastWheel",ur(Se)))},a(S,"pinchDeltaForChrome",q))},a(S,"pinchScaleForSafari",mo(u([$c(M),a(Ge,D,q)])))))))))(0)}}})})(this);
