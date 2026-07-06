(function(ec){"use strict";function Tt(e,r,n){return n.a=e,n.f=r,n}function l(e){return Tt(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return Tt(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function J(e){return Tt(4,e,function(r){return function(n){return function(t){return function(o){return e(r,n,t,o)}}}})}function Te(e){return Tt(5,e,function(r){return function(n){return function(t){return function(o){return function(c){return e(r,n,t,o,c)}}}}})}function zr(e){return Tt(6,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return e(r,n,t,o,c,i)}}}}}})}function zt(e){return Tt(7,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return e(r,n,t,o,c,i,f)}}}}}}})}function Be(e){return Tt(8,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return e(r,n,t,o,c,i,f,$)}}}}}}}})}function Rl(e){return Tt(9,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return e(r,n,t,o,c,i,f,$,s)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function v(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function C(e,r,n,t,o){return e.a===4?e.f(r,n,t,o):e(r)(n)(t)(o)}function I(e,r,n,t,o,c){return e.a===5?e.f(r,n,t,o,c):e(r)(n)(t)(o)(c)}function yr(e,r,n,t,o,c,i){return e.a===6?e.f(r,n,t,o,c,i):e(r)(n)(t)(o)(c)(i)}function Wr(e,r,n,t,o,c,i,f){return e.a===7?e.f(r,n,t,o,c,i,f):e(r)(n)(t)(o)(c)(i)(f)}function Mt(e,r,n,t,o,c,i,f,$){return e.a===8?e.f(r,n,t,o,c,i,f,$):e(r)(n)(t)(o)(c)(i)(f)($)}function BR(e,r,n,t,o,c,i,f,$,s){return e.a===9?e.f(r,n,t,o,c,i,f,$,s):e(r)(n)(t)(o)(c)(i)(f)($)(s)}var G8=[];function q8(e){return[e]}function W8(e){return e.length}var N8=x(function(e,r,n){for(var t=new Array(e),o=0;o<e;o++)t[o]=n(r+o);return t}),Q8=l(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,g(n,r)}),O8=l(function(e,r){return r[e]}),J8=x(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=n[c];return o[e]=r,o}),X8=l(function(e,r){for(var n=r.length,t=new Array(n+1),o=0;o<n;o++)t[o]=r[o];return t[n]=e,t}),Z8=x(function(e,r,n){for(var t=n.length,o=0;o<t;o++)r=a(e,n[o],r);return r}),Y8=x(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r}),AR=l(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=e(r[o]);return t}),HR=x(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=a(e,r+c,n[c]);return o}),K8=x(function(e,r,n){return n.slice(e,r)}),e6=x(function(e,r,n){var t=r.length,o=e-t;o>n.length&&(o=n.length);for(var c=t+o,i=new Array(c),f=0;f<t;f++)i[f]=r[f];for(var f=0;f<o;f++)i[f+t]=n[f];return i}),IR=l(function(e,r){return r}),VR=l(function(e,r){return console.log(e+": "+Ns(r)),r}),RR=x(function(e,r,n){return r(n)}),FR=x(function(e,r,n){performance.mark("s:"+e);var t=r(n);return performance.mark("e:"+e),t});function ER(e,r){return function(n){fn(8,e,r,n)}}function UR(e,r,n){return function(t){fn(9,e,r,n,t)}}function Ns(e){return"<internals>"}function GR(e){return ct(!1,e)}function ct(e,r){if(typeof r=="function")return au(e,"<function>");if(typeof r=="boolean")return si(e,r?"True":"False");if(typeof r=="number")return r6(e,r+"");if(r instanceof String)return a6(e,"'"+Qs(r,!0)+"'");if(typeof r=="string")return Os(e,'"'+Qs(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return au(e,"<internals>");if(n[0]==="#"){var o=[];for(var t in r)t!=="$"&&o.push(ct(e,r[t]));return"("+o.join(",")+")"}if(n==="Set_elm_builtin")return si(e,"Set")+ru(e,".fromList")+" "+ct(e,Zh(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return si(e,"Dict")+ru(e,".fromList")+" "+ct(e,Wa(r));if(n==="Array_elm_builtin")return si(e,"Array")+ru(e,".fromList")+" "+ct(e,Xh(r));if(n==="::"||n==="[]"){var o="[";for(r.b&&(o+=ct(e,r.a),r=r.b);r.b;r=r.b)o+=","+ct(e,r.a);return o+"]"}var o="";for(var c in r)if(c!=="$"){var i=ct(e,r[c]),f=i[0],$=f==="{"||f==="("||f==="["||f==="<"||f==='"'||i.indexOf(" ")<0;o+=" "+($?i:"("+i+")")}return si(e,n)+o}if(typeof DataView=="function"&&r instanceof DataView)return Os(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return au(e,"<"+r.name+">");if(typeof r=="object"){var o=[];for(var s in r){var d=s[0]==="_"?s.slice(1):s;o.push(ru(e,d)+" = "+ct(e,r[s]))}return o.length===0?"{}":"{ "+o.join(", ")+" }"}return au(e,"<internals>")}function Qs(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function si(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function r6(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Os(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function a6(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function ru(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function au(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function qR(e){return String.fromCharCode(e<10?48+e:55+e)}function fn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function WR(e,r,n,t,o){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var c=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+c);case 3:var i=r;throw new Error("There can only be one port named `"+i+"`, but your program has multiple.");case 4:var i=r,f=n;throw new Error("Trying to send an unexpected type of value through port `"+i+"`:\n"+f);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var $=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+$+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var $=r,s=n,b=t;throw new Error("TODO in module `"+$+"` "+Js(s)+`

`+b);case 9:var $=r,s=n,d=t,b=o;throw new Error("TODO in module `"+$+"` from the `case` expression "+Js(s)+`

It received the following value:

    `+Ns(d).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+b.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Js(e){return e.dc.fM===e.qt.fM?"on line "+e.dc.fM:"on lines "+e.dc.fM+" through "+e.qt.fM}function fe(e,r){for(var n,t=[],o=Fl(e,r,0,t);o&&(n=t.pop());o=Fl(n.a,n.b,0,t));return o}function Fl(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&fn(5),!1;if(n>100)return t.push(g(e,r)),!0;e.$<0&&(e=Wa(e),r=Wa(r));for(var o in e)if(!Fl(e[o],r[o],n+1,t))return!1;return!0}var n6=l(fe),t6=l(function(e,r){return!fe(e,r)});function te(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=te(e.a,r.a))||(n=te(e.b,r.b))?n:te(e.c,r.c);for(;e.b&&r.b&&!(n=te(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}var o6=l(function(e,r){return te(e,r)<0}),c6=l(function(e,r){return te(e,r)<1}),i6=l(function(e,r){return te(e,r)>0}),f6=l(function(e,r){return te(e,r)>=0}),u6=l(function(e,r){var n=te(e,r);return n<0?Gd:n?Yh:Ud}),io=0,NR={$:"#0"};function g(e,r){return{a:e,b:r}}function QR(e,r){return{$:"#2",a:e,b:r}}function R(e,r,n){return{a:e,b:r,c:n}}function OR(e,r,n){return{$:"#3",a:e,b:r,c:n}}function JR(e){return e}function XR(e){return new String(e)}function A(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}var $6=l(X);function X(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=An(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=An(e.a,r);return n}var P={$:0},ZR={$:"[]"};function An(e,r){return{$:1,a:e,b:r}}function YR(e,r){return{$:"::",a:e,b:r}}var l6=l(An);function u(e){for(var r=P,n=e.length;n--;)r=An(e[n],r);return r}function nu(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var v6=x(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return u(t)}),KR=J(function(e,r,n,t){for(var o=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)o.push(v(e,r.a,n.a,t.a));return u(o)}),s6=Te(function(e,r,n,t,o){for(var c=[];r.b&&n.b&&t.b&&o.b;r=r.b,n=n.b,t=t.b,o=o.b)c.push(C(e,r.a,n.a,t.a,o.a));return u(c)}),eF=zr(function(e,r,n,t,o,c){for(var i=[];r.b&&n.b&&t.b&&o.b&&c.b;r=r.b,n=n.b,t=t.b,o=o.b,c=c.b)i.push(I(e,r.a,n.a,t.a,o.a,c.a));return u(i)}),d6=l(function(e,r){return u(nu(r).sort(function(n,t){return te(e(n),e(t))}))}),b6=l(function(e,r){return u(nu(r).sort(function(n,t){var o=a(e,n,t);return o===Ud?0:o===Gd?-1:1}))}),m6=l(function(e,r){return e+r}),p6=l(function(e,r){return e-r}),h6=l(function(e,r){return e*r}),g6=l(function(e,r){return e/r}),_6=l(function(e,r){return e/r|0}),y6=l(Math.pow),C6=l(function(e,r){return r%e}),P6=l(function(e,r){var n=r%e;return e===0?fn(11):n>0&&e<0||n<0&&e>0?n+e:n}),S6=Math.PI,rF=Math.E,k6=Math.cos,x6=Math.sin,w6=Math.tan,j6=Math.acos,aF=Math.asin,L6=Math.atan,T6=l(Math.atan2);function z6(e){return e}function nF(e){return e|0}function M6(e){return e===1/0||e===-1/0}var D6=Math.ceil,B6=Math.floor,A6=Math.round,H6=Math.sqrt,Xs=Math.log,I6=isNaN;function V6(e){return!e}var R6=l(function(e,r){return e&&r}),F6=l(function(e,r){return e||r}),tF=l(function(e,r){return e!==r}),E6=l(function(e,r){return e+r});function U6(e){var r=e.charCodeAt(0);return isNaN(r)?z:D(55296<=r&&r<=56319?g(e[0]+e[1],e.slice(2)):g(e[0],e.slice(1)))}var G6=l(function(e,r){return e+r});function q6(e){return e.length}var oF=l(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;){var c=r.charCodeAt(o);if(55296<=c&&c<=56319){t[o]=e(r[o]+r[o+1]),o+=2;continue}t[o]=e(r[o]),o++}return t.join("")}),cF=l(function(e,r){for(var n=[],t=r.length,o=0;o<t;){var c=r[o],i=r.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=r[o],o++),e(c)&&n.push(c)}return n.join("")});function W6(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}var N6=x(function(e,r,n){for(var t=n.length,o=0;o<t;){var c=n[o],i=n.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=n[o],o++),r=a(e,c,r)}return r}),Q6=x(function(e,r,n){for(var t=n.length;t--;){var o=n[t],c=n.charCodeAt(t);56320<=c&&c<=57343&&(t--,o=n[t]+o),r=a(e,o,r)}return r}),O6=l(function(e,r){return r.split(e)}),J6=l(function(e,r){return r.join(e)}),X6=x(function(e,r,n){return n.slice(e,r)});function iF(e){return e.trim()}function fF(e){return e.replace(/^\s+/,"")}function uF(e){return e.replace(/\s+$/,"")}function $F(e){return u(e.trim().split(/\s+/g))}function lF(e){return u(e.split(/\r\n|\r|\n/g))}function Z6(e){return e.toUpperCase()}function Y6(e){return e.toLowerCase()}var vF=l(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1}),K6=l(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),e9=l(function(e,r){return r.indexOf(e)>-1}),r9=l(function(e,r){return r.indexOf(e)===0}),a9=l(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length}),n9=l(function(e,r){var n=e.length;if(n<1)return P;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+n;return u(o)});function Zs(e){return e+""}function t9(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,o=t;o<e.length;++o){var c=e.charCodeAt(o);if(c<48||57<c)return z;r=10*r+c-48}return o==t?z:D(n==45?-r:r)}function o9(e){if(e.length===0||/[\sxbo]/.test(e))return z;var r=+e;return r===r?D(r):z}function c9(e){return nu(e).join("")}function i9(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function f9(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function sF(e){return e.toUpperCase()}function u9(e){return e.toLowerCase()}function dF(e){return e.toLocaleUpperCase()}function bF(e){return e.toLocaleLowerCase()}function $9(e){return{$:0,a:e}}function l9(e){return{$:1,a:e}}function di(e){return{$:2,b:e}}var v9=di(function(e){return typeof e!="number"?Ua("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?Jr(e):Ua("an INT",e)}),s9=di(function(e){return typeof e=="boolean"?Jr(e):Ua("a BOOL",e)}),d9=di(function(e){return typeof e=="number"?Jr(e):Ua("a FLOAT",e)}),b9=di(function(e){return Jr(e)}),m9=di(function(e){return typeof e=="string"?Jr(e):e instanceof String?Jr(e+""):Ua("a STRING",e)});function p9(e){return{$:3,b:e}}function h9(e){return{$:4,b:e}}function g9(e){return{$:5,c:e}}var _9=l(function(e,r){return{$:6,d:e,b:r}}),y9=l(function(e,r){return{$:7,e,b:r}});function C9(e){return{$:8,b:e}}function Dt(e,r){return{$:9,f:e,g:r}}var P9=l(function(e,r){return{$:10,b:r,h:e}});function S9(e){return{$:11,g:e}}var k9=l(function(e,r){return Dt(e,[r])}),x9=x(function(e,r,n){return Dt(e,[r,n])}),w9=J(function(e,r,n,t){return Dt(e,[r,n,t])}),j9=Te(function(e,r,n,t,o){return Dt(e,[r,n,t,o])}),L9=zr(function(e,r,n,t,o,c){return Dt(e,[r,n,t,o,c])}),T9=zt(function(e,r,n,t,o,c,i){return Dt(e,[r,n,t,o,c,i])}),mF=Be(function(e,r,n,t,o,c,i,f){return Dt(e,[r,n,t,o,c,i,f])}),pF=Rl(function(e,r,n,t,o,c,i,f,$){return Dt(e,[r,n,t,o,c,i,f,$])}),z9=l(function(e,r){try{var n=JSON.parse(r);return Ea(e,n)}catch(t){return La(a(b0,"This is not valid JSON! "+t.message,r))}}),El=l(function(e,r){return Ea(e,r)});function Ea(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Jr(e.c):Ua("null",r);case 3:return tu(r)?Ys(e.b,r,u):Ua("a LIST",r);case 4:return tu(r)?Ys(e.b,r,M9):Ua("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ua("an OBJECT with a field named `"+n+"`",r);var s=Ea(e.b,r[n]);return sn(s)?s:La(a(qd,n,s.a));case 7:var t=e.e;if(!tu(r))return Ua("an ARRAY",r);if(t>=r.length)return Ua("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var s=Ea(e.b,r[t]);return sn(s)?s:La(a(Wd,t,s.a));case 8:if(typeof r!="object"||r===null||tu(r))return Ua("an OBJECT",r);var o=P;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var s=Ea(e.b,r[c]);if(!sn(s))return La(a(qd,c,s.a));o=An(g(c,s.a),o)}return Jr(Re(o));case 9:for(var i=e.f,f=e.g,$=0;$<f.length;$++){var s=Ea(f[$],r);if(!sn(s))return s;i=i(s.a)}return Jr(i);case 10:var s=Ea(e.b,r);return sn(s)?Ea(e.h(s.a),r):s;case 11:for(var d=P,b=e.g;b.b;b=b.b){var s=Ea(b.a,r);if(sn(s))return s;d=An(s.a,d)}return La(Kh(Re(d)));case 1:return La(a(b0,e.a,r));case 0:return Jr(e.a)}}function Ys(e,r,n){for(var t=r.length,o=new Array(t),c=0;c<t;c++){var i=Ea(e,r[c]);if(!sn(i))return La(a(Wd,c,i.a));o[c]=i.a}return Jr(n(o))}function tu(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function M9(e){return a(_0,e.length,function(r){return e[r]})}function Ua(e,r){return La(a(b0,"Expecting "+e,r))}function rc(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return rc(e.b,r.b);case 6:return e.d===r.d&&rc(e.b,r.b);case 7:return e.e===r.e&&rc(e.b,r.b);case 9:return e.f===r.f&&Ks(e.g,r.g);case 10:return e.h===r.h&&rc(e.b,r.b);case 11:return Ks(e.g,r.g)}}function Ks(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!rc(e[t],r[t]))return!1;return!0}var D9=l(function(e,r){return JSON.stringify(r,null,e)+""});function hF(e){return{$:0,a:e}}function gF(e){return e.a}function Ul(e){return e}function _F(e){return e}function B9(){return[]}function A9(){return{}}var H9=x(function(e,r,n){var t=r;return e==="toJSON"&&typeof t=="function"||(n[e]=t),n});function I9(e){return l(function(r,n){return n.push(e(r)),n})}var V9=null,R9=l(function(e,r){return e&r}),F9=l(function(e,r){return e|r}),E9=l(function(e,r){return e^r});function yF(e){return~e}var U9=l(function(e,r){return r<<e}),G9=l(function(e,r){return r>>e}),q9=l(function(e,r){return r>>>e});function Ga(e){return{$:0,a:e}}function Gl(e){return{$:1,a:e}}function Nr(e){return{$:2,b:e,c:null}}var ql=l(function(e,r){return{$:3,b:e,d:r}}),W9=l(function(e,r){return{$:4,b:e,d:r}});function N9(e){return{$:5,b:e}}var Q9=0;function Wl(e){var r={$:0,e:Q9++,f:e,g:null,h:[]};return Ol(r),r}function Nl(e){return Nr(function(r){r(Ga(Wl(e)))})}function ed(e,r){e.h.push(r),Ol(e)}var O9=l(function(e,r){return Nr(function(n){ed(e,r),n(Ga(io))})});function J9(e){return Nr(function(r){var n=e.f;n.$===2&&n.c&&n.c(),e.f=null,r(Ga(io))})}var Ql=!1,rd=[];function Ol(e){if(rd.push(e),!Ql){for(Ql=!0;e=rd.shift();)X9(e);Ql=!1}}function X9(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Ol(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}function Z9(e){return Nr(function(r){var n=setTimeout(function(){r(Ga(io))},e);return function(){clearTimeout(n)}})}var CF=J(function(e,r,n,t){return Jl(r,t,e.rj,e.ug,e.aA,function(){return function(){}})});function Jl(e,r,n,t,o,c){var i=a(El,e,r?r.flags:void 0);sn(i)||fn(2);var f={},$=n(i.a),s=$.a,d=c(_,s),b=K9(f,_);function _(p,h){var y=a(t,p,s);d(s=y.a,h),od(f,y.b,o(s))}return od(f,$.b,o(s)),b?{ports:b}:{}}var Y9;function PF(e){Y9.add(e)}var Qr={};function K9(e,r){var n;for(var t in Qr){var o=Qr[t];o.a&&(n=n||{},n[t]=o.a(t,r)),e[t]=e7(o,r)}return n}function Xl(e,r,n,t,o){return{b:e,c:r,d:n,e:t,f:o}}function e7(e,r){var n={g:r,h:void 0},t=e.c,o=e.d,c=e.e,i=e.f;function f($){return a(ql,f,N9(function(s){var d=s.a;return s.$===0?v(o,n,d,$):c&&i?C(t,n,d.i,d.j,$):v(t,n,c?d.i:d.j,$)}))}return n.h=Wl(a(ql,f,e.b))}var r7=l(function(e,r){return Nr(function(n){e.g(r),n(Ga(io))})}),a7=l(function(e,r){return a(O9,e.h,{$:0,a:r})});function bi(e){return function(r){return{$:1,k:e,l:r}}}function ad(e){return{$:2,m:e}}var nd=l(function(e,r){return{$:3,n:e,o:r}}),td=[],Zl=!1;function od(e,r,n){if(td.push({p:e,q:r,r:n}),!Zl){Zl=!0;for(var t;t=td.shift();)n7(t.p,t.q,t.r);Zl=!1}}function n7(e,r,n){var t={};ou(!0,r,t,null),ou(!1,n,t,null);for(var o in e)ed(e[o],{$:"fx",a:t[o]||{i:P,j:P}})}function ou(e,r,n,t){switch(r.$){case 1:var o=r.k,c=t7(e,o,t,r.l);n[o]=o7(e,c,n[o]);return;case 2:for(var i=r.m;i.b;i=i.b)ou(e,i.a,n,t);return;case 3:ou(e,r.o,n,{s:r.n,t});return}}function t7(e,r,n,t){function o(i){for(var f=n;f;f=f.t)i=f.s(i);return i}var c=e?Qr[r].e:Qr[r].f;return a(c,o,t)}function o7(e,r,n){return n=n||{i:P,j:P},e?n.i=An(r,n.i):n.j=An(r,n.j),n}function cd(e){Qr[e]&&fn(3,e)}function Bt(e,r){return cd(e),Qr[e]={e:c7,u:r,a:i7},bi(e)}var c7=l(function(e,r){return r});function i7(e){var r=[],n=Qr[e].u,t=Z9(0);Qr[e].b=t,Qr[e].c=x(function(i,f,$){for(;f.b;f=f.b)for(var s=r,d=n(f.a),b=0;b<s.length;b++)s[b](d);return t});function o(i){r.push(i)}function c(i){r=r.slice();var f=r.indexOf(i);f>=0&&r.splice(f,1)}return{subscribe:o,unsubscribe:c}}function Yl(e,r){return cd(e),Qr[e]={f:f7,u:r,a:u7},bi(e)}var f7=l(function(e,r){return function(n){return e(r(n))}});function u7(e,r){var n=P,t=Qr[e].u,o=Ga(null);Qr[e].b=o,Qr[e].c=x(function(i,f,$){return n=f,o});function c(i){var f=a(El,t,i);sn(f)||fn(4,e,f.a);for(var $=f.a,s=n;s.b;s=s.b)r(s.a($))}return{send:c}}function $7(e){ec.Elm?id(ec.Elm,e):ec.Elm=e}function id(e,r){for(var n in r)n in e?n=="init"?fn(6):id(e[n],r[n]):e[n]=r[n]}function SF(e){ec.Elm?fd("Elm",ec.Elm,e):ec.Elm=e}function fd(e,r,n){for(var t in n)t in r?t=="init"?fn(6,e):fd(e+"."+t,r[t],n[t]):r[t]=n[t]}var cu,Or=typeof document<"u"?document:{};function Kl(e,r){e.appendChild(r)}var kF=J(function(e,r,n,t){var o=t.node;return o.parentNode.replaceChild(Ht(e,function(){}),o),{}});function e0(e){return{$:0,a:e}}var ud=l(function(e,r){return l(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b||0,o.push(i)}return c+=o.length,{$:1,c:r,d:a0(n),e:o,f:e,b:c}})}),qa=ud(void 0),$d=l(function(e,r){return l(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b.b||0,o.push(i)}return c+=o.length,{$:2,c:r,d:a0(n),e:o,f:e,b:c}})}),l7=$d(void 0);function v7(e,r,n,t){return{$:3,d:a0(e),g:r,h:n,i:t}}var s7=l(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function At(e,r){return{$:5,l:e,m:r,k:void 0}}var xF=l(function(e,r){return At([e,r],function(){return e(r)})}),wF=x(function(e,r,n){return At([e,r,n],function(){return a(e,r,n)})}),jF=J(function(e,r,n,t){return At([e,r,n,t],function(){return v(e,r,n,t)})}),LF=Te(function(e,r,n,t,o){return At([e,r,n,t,o],function(){return C(e,r,n,t,o)})}),TF=zr(function(e,r,n,t,o,c){return At([e,r,n,t,o,c],function(){return I(e,r,n,t,o,c)})}),zF=zt(function(e,r,n,t,o,c,i){return At([e,r,n,t,o,c,i],function(){return yr(e,r,n,t,o,c,i)})}),MF=Be(function(e,r,n,t,o,c,i,f){return At([e,r,n,t,o,c,i,f],function(){return Wr(e,r,n,t,o,c,i,f)})}),DF=Rl(function(e,r,n,t,o,c,i,f,$){return At([e,r,n,t,o,c,i,f,$],function(){return Mt(e,r,n,t,o,c,i,f,$)})}),ld=l(function(e,r){return{$:"a0",n:e,o:r}}),d7=l(function(e,r){return{$:"a1",n:e,o:r}}),vd=l(function(e,r){return{$:"a2",n:e,o:r}}),iu=l(function(e,r){return{$:"a3",n:e,o:r}}),b7=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}}),m7=/^script$/i,p7=/^(on|formAction$)/i,h7=/^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i,r0=/^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;function fu(e){return m7.test(e)?"p":e}function sd(e){return p7.test(e)?"data-"+e:e}function g7(e){return e=="innerHTML"||e=="outerHTML"||e=="formAction"?"data-"+e:e}function BF(e){return h7.test(e)?"":e}function dd(e){return r0.test(e)?"":e}function _7(e){return typeof e=="string"&&r0.test(e)||Array.isArray(e)&&r0.test(String(e))?"":e}var y7=l(function(e,r){return r.$==="a0"?a(ld,r.n,C7(e,r.o)):r});function C7(e,r){var n=T0(r);return{$:r.$,a:n?v(qn,n<3?P7:S7,ee(e),r.a):a(Qe,e,r.a)}}var P7=l(function(e,r){return g(e(r.a),r.b)}),S7=l(function(e,r){return{V:e(r.V),_:r._,Y:r.Y}});function a0(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,o=n.n,c=n.o;if(t==="a2"){o==="className"?bd(r,o,c):r[o]=c;continue}var i=r[t]||(r[t]={});t==="a3"&&o==="class"?bd(i,o,c):i[o]=c}return r}function bd(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Ht(e,r){var n=e.$;if(n===5)return Ht(e.k||(e.k=e.m()),r);if(n===0)return Or.createTextNode(e.a);if(n===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var c={j:o,p:r},i=Ht(t,c);return i.elm_event_node_ref=c,i}if(n===3){var i=e.h(e.g);return n0(i,r,e.d),i}var i=e.f?Or.createElementNS(e.f,e.c):Or.createElement(e.c);cu&&e.c=="a"&&i.addEventListener("click",cu(i)),n0(i,r,e.d);for(var f=e.e,$=0;$<f.length;$++)Kl(i,Ht(n===1?f[$]:f[$].b,r));return i}function n0(e,r,n){for(var t in n){var o=n[t];t==="a1"?k7(e,o):t==="a0"?j7(e,r,o):t==="a3"?x7(e,o):t==="a4"?w7(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function k7(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function x7(e,r){for(var n in r){var t=r[n];typeof t<"u"?e.setAttribute(n,t):e.removeAttribute(n)}}function w7(e,r){for(var n in r){var t=r[n],o=t.f,c=t.o;typeof c<"u"?e.setAttributeNS(o,n,c):e.removeAttributeNS(o,n)}}function j7(e,r,n){var t=e.elmFs||(e.elmFs={});for(var o in n){var c=n[o],i=t[o];if(!c){e.removeEventListener(o,i),t[o]=void 0;continue}if(i){var f=i.q;if(f.$===c.$){i.q=c;continue}e.removeEventListener(o,i)}i=L7(r,c),e.addEventListener(o,i,t0&&{passive:T0(c)<2}),t[o]=i}}var t0;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){t0=!0}}))}catch{}function L7(e,r){function n(t){var o=n.q,c=Ea(o.a,t);if(sn(c)){for(var i=T0(o),f=c.a,$=i?i<3?f.a:f.V:f,s=i==1?f.b:i==3&&f._,d=(s&&t.stopPropagation(),(i==2?f.b:i==3&&f.Y)&&t.preventDefault(),e),b,_;b=d.j;){if(typeof b=="function")$=b($);else for(var _=b.length;_--;)$=b[_]($);d=d.p}d($,s)}}return n.q=r,n}function T7(e,r){return e.$==r.$&&rc(e.a,r.a)}function md(e,r){var n=[];return un(e,r,n,0),n}function ia(e,r,n,t){var o={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(o),o}function un(e,r,n,t){if(e!==r){var o=e.$,c=r.$;if(o!==c)if(o===1&&c===2)r=V7(r),c=1;else{ia(n,0,t,r);return}switch(c){case 5:for(var i=e.l,f=r.l,$=i.length,s=$===f.length;s&&$--;)s=i[$]===f[$];if(s){r.k=e.k;return}r.k=r.m();var d=[];un(e.k,r.k,d,0),d.length>0&&ia(n,1,t,d);return;case 4:for(var b=e.j,_=r.j,p=!1,h=e.k;h.$===4;)p=!0,typeof b!="object"?b=[b,h.j]:b.push(h.j),h=h.k;for(var y=r.k;y.$===4;)p=!0,typeof _!="object"?_=[_,y.j]:_.push(y.j),y=y.k;if(p&&b.length!==_.length){ia(n,0,t,r);return}(p?!z7(b,_):b!==_)&&ia(n,2,t,_),un(h,y,n,t+1);return;case 0:e.a!==r.a&&ia(n,3,t,r.a);return;case 1:pd(e,r,n,t,M7);return;case 2:pd(e,r,n,t,D7);return;case 3:if(e.h!==r.h){ia(n,0,t,r);return}var k=o0(e.d,r.d);k&&ia(n,4,t,k);var L=r.i(e.g,r.g);L&&ia(n,5,t,L);return}}}function z7(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function pd(e,r,n,t,o){if(e.c!==r.c||e.f!==r.f){ia(n,0,t,r);return}var c=o0(e.d,r.d);c&&ia(n,4,t,c),o(e,r,n,t)}function o0(e,r,n){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var c=o0(e[o],r[o]||{},o);c&&(t=t||{},t[o]=c);continue}if(!(o in r)){t=t||{},t[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var i=e[o],f=r[o];i===f&&o!=="value"&&o!=="checked"||n==="a0"&&T7(i,f)||(t=t||{},t[o]=f)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function M7(e,r,n,t){var o=e.e,c=r.e,i=o.length,f=c.length;i>f?ia(n,6,t,{v:f,i:i-f}):i<f&&ia(n,7,t,{v:i,e:c});for(var $=i<f?i:f,s=0;s<$;s++){var d=o[s];un(d,c[s],n,++t),t+=d.b||0}}function D7(e,r,n,t){for(var o=[],c={},i=[],f=e.e,$=r.e,s=f.length,d=$.length,b=0,_=0,p=t;b<s&&_<d;){var h=f[b],y=$[_],k=h.a,L=y.a,w=h.b,H=y.b,F=void 0,V=void 0;if(k===L){p++,un(w,H,o,p),p+=w.b||0,b++,_++;continue}var q=f[b+1],O=$[_+1];if(q){var K=q.a,ce=q.b;V=L===K}if(O){var be=O.a,ke=O.b;F=k===be}if(F&&V){p++,un(w,ke,o,p),mi(c,o,k,H,_,i),p+=w.b||0,p++,pi(c,o,k,ce,p),p+=ce.b||0,b+=2,_+=2;continue}if(F){p++,mi(c,o,L,H,_,i),un(w,ke,o,p),p+=w.b||0,b+=1,_+=2;continue}if(V){p++,pi(c,o,k,w,p),p+=w.b||0,p++,un(ce,H,o,p),p+=ce.b||0,b+=2,_+=1;continue}if(q&&K===be){p++,pi(c,o,k,w,p),mi(c,o,L,H,_,i),p+=w.b||0,p++,un(ce,ke,o,p),p+=ce.b||0,b+=2,_+=2;continue}break}for(;b<s;){p++;var h=f[b],w=h.b;pi(c,o,h.a,w,p),p+=w.b||0,b++}for(;_<d;){var Me=Me||[],y=$[_];mi(c,o,y.a,y.b,void 0,Me),_++}(o.length>0||i.length>0||Me)&&ia(n,8,t,{w:o,x:i,y:Me})}var hd="_elmW6BL";function mi(e,r,n,t,o,c){var i=e[n];if(!i){i={c:0,z:t,r:o,s:void 0},c.push({r:o,A:i}),e[n]=i;return}if(i.c===1){c.push({r:o,A:i}),i.c=2;var f=[];un(i.z,t,f,i.r),i.r=o,i.s.s={w:f,A:i};return}mi(e,r,n+hd,t,o,c)}function pi(e,r,n,t,o){var c=e[n];if(!c){var i=ia(r,9,o,void 0);e[n]={c:1,z:t,r:o,s:i};return}if(c.c===0){c.c=2;var f=[];un(t,c.z,f,o),ia(r,9,o,{w:f,A:c});return}pi(e,r,n+hd,t,o)}function gd(e,r,n,t){hi(e,r,n,0,0,r.b,t)}function hi(e,r,n,t,o,c,i){for(var f=n[t],$=f.r;$===o;){var s=f.$;if(s===1)gd(e,r.k,f.s,i);else if(s===8){f.t=e,f.u=i;var d=f.s.w;d.length>0&&hi(e,r,d,0,o,c,i)}else if(s===9){f.t=e,f.u=i;var b=f.s;if(b){b.A.s=e;var d=b.w;d.length>0&&hi(e,r,d,0,o,c,i)}}else f.t=e,f.u=i;if(t++,!(f=n[t])||($=f.r)>c)return t}var _=r.$;if(_===4){for(var p=r.k;p.$===4;)p=p.k;return hi(e,p,n,t,o+1,c,e.elm_event_node_ref)}for(var h=r.e,y=e.childNodes,k=0;k<h.length;k++){o++;var L=_===1?h[k]:h[k].b,w=o+(L.b||0);if(o<=$&&$<=w&&(t=hi(y[k],L,n,t,o,w,i),!(f=n[t])||($=f.r)>c))return t;o=w}return t}function _d(e,r,n,t){return n.length===0?e:(gd(e,r,n,t),uu(e,n))}function uu(e,r){for(var n=0;n<r.length;n++){var t=r[n],o=t.t,c=B7(o,t);o===e&&(e=c)}return e}function B7(e,r){switch(r.$){case 0:return A7(e,r.s,r.u);case 4:return n0(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return uu(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var c=r.s,t=0;t<c.i;t++)e.removeChild(e.childNodes[c.v]);return e;case 7:for(var c=r.s,n=c.e,t=c.v,o=e.childNodes[t];t<n.length;t++)e.insertBefore(Ht(n[t],r.u),o);return e;case 9:var c=r.s;if(!c)return e.parentNode.removeChild(e),e;var i=c.A;return typeof i.r<"u"&&e.parentNode.removeChild(e),i.s=uu(e,c.w),e;case 8:return H7(e,r);case 5:return r.s(e);default:fn(10)}}function A7(e,r,n){var t=e.parentNode,o=Ht(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function H7(e,r){var n=r.s,t=I7(n.y,r);e=uu(e,n.w);for(var o=n.x,c=0;c<o.length;c++){var i=o[c],f=i.A,$=f.c===2?f.s:Ht(f.z,r.u);e.insertBefore($,e.childNodes[i.r])}return t&&Kl(e,t),e}function I7(e,r){if(e){for(var n=Or.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],c=o.A;Kl(n,c.c===2?c.s:Ht(c.z,r.u))}return n}}function c0(e){if(e.nodeType===3)return e0(e.textContent);if(e.nodeType!==1)return e0("");for(var r=P,n=e.attributes,t=n.length;t--;){var o=n[t],c=o.name,i=o.value;r=An(a(iu,c,i),r)}for(var f=e.tagName.toLowerCase(),$=P,s=e.childNodes,t=s.length;t--;)$=An(c0(s[t]),$);return v(qa,f,r,$)}function V7(e){for(var r=e.e,n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var R7,F7=R7||J(function(e,r,n,t){return Jl(r,t,e.rj,e.ug,e.aA,function(o,c){var i=e.uq,f=t.node,$=c0(f);return yd(c,function(s){var d=i(s),b=md($,d);f=_d(f,$,b,o),$=d})})}),E7,U7=E7||J(function(e,r,n,t){return Jl(r,t,e.rj,e.ug,e.aA,function(o,c){var i=e.j2&&e.j2(o),f=e.uq,$=Or.title,s=Or.body,d=c0(s);return yd(c,function(b){cu=i;var _=f(b),p=qa("body")(P)(_.kR),h=md(d,p);s=_d(s,d,h,o),d=p,cu=0,$!==_.oj&&(Or.title=$=_.oj)})})}),G7=typeof cancelAnimationFrame<"u"?cancelAnimationFrame:function(e){clearTimeout(e)},gi=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function yd(e,r){r(e);var n=0;function t(){n=n===1?0:(gi(t),r(e),1)}return function(o,c){e=o,c?(r(e),n===2&&(n=1)):(n===0&&gi(t),n=2)}}function AF(e){var r=e.sx,n=e.sy,t=function(){t.a(r(i0()))};return U7({j2:function(o){return t.a=o,Hn.addEventListener("popstate",t),Hn.navigator.userAgent.indexOf("Trident")<0||Hn.addEventListener("hashchange",t),l(function(c,i){if(!i.ctrlKey&&!i.metaKey&&!i.shiftKey&&i.button<1&&!c.target&&!c.hasAttribute("download")){i.preventDefault();var f=c.href,$=i0(),s=Mb(f).a;o(n(s&&$.nB===s.nB&&$.lW===s.lW&&$.nv.a===s.nv.a?J_(s):O_(f)))}})},rj:function(o){return v(e.rj,o,i0(),t)},uq:e.uq,ug:e.ug,aA:e.aA})}function i0(){return Mb(Or.location.href).a||fn(1)}var HF=l(function(e,r){return a(Ai,lo,Nr(function(){r&&history.go(r),e()}))}),IF=l(function(e,r){return a(Ai,lo,Nr(function(){history.pushState({},"",r),e()}))}),VF=l(function(e,r){return a(Ai,lo,Nr(function(){history.replaceState({},"",r),e()}))}),Cd={addEventListener:function(){},removeEventListener:function(){}},fo=typeof document<"u"?document:Cd,Hn=typeof window<"u"?window:Cd,q7=x(function(e,r,n){return Nl(Nr(function(t){function o(c){Wl(n(c))}return e.addEventListener(r,o,t0&&{passive:!0}),function(){e.removeEventListener(r,o)}}))}),W7=l(function(e,r){var n=Ea(e,r);return sn(n)?D(n.a):z});function RF(){return typeof Or.hidden<"u"?{i_:"hidden",py:"visibilitychange"}:typeof Or.mozHidden<"u"?{i_:"mozHidden",py:"mozvisibilitychange"}:typeof Or.msHidden<"u"?{i_:"msHidden",py:"msvisibilitychange"}:typeof Or.webkitHidden<"u"?{i_:"webkitHidden",py:"webkitvisibilitychange"}:{i_:"hidden",py:"visibilitychange"}}function N7(){return Nr(function(e){var r=gi(function(){e(Ga(Date.now()))});return function(){G7(r)}})}function Q7(){return Nr(function(e){e(Ga(Date.now()))})}function $u(e,r){return Nr(function(n){gi(function(){var t=document.getElementById(e);n(t?Ga(r(t)):Gl(X_(e)))})})}function O7(e){return Nr(function(r){gi(function(){r(Ga(e()))})})}var J7=l(function(e,r){return $u(r,function(n){return n[e](),io})});function FF(){return{nR:Pd(),oA:{kB:Hn.pageXOffset,cQ:Hn.pageYOffset,ia:fo.documentElement.clientWidth,g8:fo.documentElement.clientHeight}}}function Pd(){var e=fo.body,r=fo.documentElement;return{ia:Math.max(e.scrollWidth,e.offsetWidth,r.scrollWidth,r.offsetWidth,r.clientWidth),g8:Math.max(e.scrollHeight,e.offsetHeight,r.scrollHeight,r.offsetHeight,r.clientHeight)}}var EF=l(function(e,r){return O7(function(){return Hn.scroll(e,r),io})});function UF(e){return $u(e,function(r){return{nR:{ia:r.scrollWidth,g8:r.scrollHeight},oA:{kB:r.scrollLeft,cQ:r.scrollTop,ia:r.clientWidth,g8:r.clientHeight}}})}var X7=x(function(e,r,n){return $u(e,function(t){return t.scrollLeft=r,t.scrollTop=n,io})});function GF(e){return $u(e,function(r){var n=r.getBoundingClientRect(),t=Hn.pageXOffset,o=Hn.pageYOffset;return{nR:Pd(),oA:{kB:t,cQ:o,ia:fo.documentElement.clientWidth,g8:fo.documentElement.clientHeight},qp:{kB:t+n.left,cQ:o+n.top,ia:n.width,g8:n.height}}})}function qF(e){return a(Ai,lo,Nr(function(r){Or.location.reload(e)}))}function WF(e){return a(Ai,lo,Nr(function(r){try{Hn.location=e}catch{Or.location.reload(!1)}}))}var Z7=zr(function(e,r,n,t,o,c){var i=r!==9728&&r!==9729;return Nr(function(f){var $=new Image;function s(d){var b=d.createTexture();return d.bindTexture(d.TEXTURE_2D,b),d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,$),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,e),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,r),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,n),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,t),i&&d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null),b}$.onload=function(){var d=$.width,b=$.height,_=(d&d-1)===0,p=(b&b-1)===0,h=_&&p||!i&&n===33071&&t===33071;f(h?Ga({$:0,pR:s,a:d,b}):Gl(a(yS,d,b)))},$.onerror=function(){f(Gl(_S))},c.slice(0,5)!=="data:"&&($.crossOrigin="Anonymous"),$.src=c})}),NF=function(e){return g(e.a,e.b)},Y7=l(function(e,r){return new Float64Array([e,r])}),QF=function(e){return e[0]},OF=function(e){return e[1]},JF=l(function(e,r){return new Float64Array([e,r[1]])}),XF=l(function(e,r){return new Float64Array([r[0],e])}),ZF=function(e){return{kB:e[0],cQ:e[1]}},YF=function(e){return new Float64Array([e.kB,e.cQ])},KF=l(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n}),eE=l(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n}),rE=function(e){var r=new Float64Array(2);return r[0]=-e[0],r[1]=-e[1],r},aE=l(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/f0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function f0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}var nE=f0,tE=function(e){return e[0]*e[0]+e[1]*e[1]},oE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)}),cE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t}),iE=function(e){var r=new Float64Array(2),n=1/f0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r},fE=l(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n}),uE=l(function(e,r){return e[0]*r[0]+e[1]*r[1]}),u0=new Float64Array(3),Sd=new Float64Array(3),kd=new Float64Array(3),K7=x(function(e,r,n){return new Float64Array([e,r,n])}),eh=function(e){return e[0]},rh=function(e){return e[1]},ah=function(e){return e[2]},$E=l(function(e,r){return new Float64Array([e,r[1],r[2]])}),lE=l(function(e,r){return new Float64Array([r[0],e,r[2]])}),vE=l(function(e,r){return new Float64Array([r[0],r[1],e])}),sE=function(e){return{kB:e[0],cQ:e[1],ic:e[2]}},nh=function(e){return new Float64Array([e.kB,e.cQ,e.ic])},dE=l(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function xd(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}var bE=l(xd),mE=function(e){var r=new Float64Array(3);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r};function wd(e,r,n){return n===void 0&&(n=new Float64Array(3)),_i(xd(e,r,n),n)}var pE=l(wd);function $0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}var hE=$0,gE=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},_E=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+t*t+o*o)}),yE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return n*n+t*t+o*o});function _i(e,r){r===void 0&&(r=new Float64Array(3));var n=1/$0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var CE=_i,PE=l(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),It=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]},SE=l(It);function l0(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}var kE=l(l0),xE=l(function(e,r){var n,t=u0,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=It(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(It(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(It(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(It(r,t)+e[14])/n,o}),th=J(function(e,r,n,t){return new Float64Array([e,r,n,t])}),oh=function(e){return e[0]},ch=function(e){return e[1]},ih=function(e){return e[2]},fh=function(e){return e[3]},wE=l(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])}),jE=l(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])}),LE=l(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])}),TE=l(function(e,r){return new Float64Array([r[0],r[1],r[2],e])}),uh=function(e){return{kB:e[0],cQ:e[1],ic:e[2],us:e[3]}},$h=function(e){return new Float64Array([e.kB,e.cQ,e.ic,e.us])},zE=l(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n}),ME=l(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n}),DE=function(e){var r=new Float64Array(4);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r},BE=l(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/v0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function v0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}var AE=v0,HE=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]},IE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return Math.sqrt(n*n+t*t+o*o+c*c)}),VE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return n*n+t*t+o*o+c*c}),RE=function(e){var r=new Float64Array(4),n=1/v0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r},lh=l(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n}),FE=l(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}),vh=new Float64Array(16),sh=new Float64Array(16),EE=new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),dh=function(e){var r=new Float64Array(16);return r[0]=e.mz,r[1]=e.mD,r[2]=e.mH,r[3]=e.mL,r[4]=e.mA,r[5]=e.mE,r[6]=e.mI,r[7]=e.mM,r[8]=e.mB,r[9]=e.mF,r[10]=e.mJ,r[11]=e.mN,r[12]=e.mC,r[13]=e.mG,r[14]=e.mK,r[15]=e.mO,r},bh=function(e){return{mz:e[0],mD:e[1],mH:e[2],mL:e[3],mA:e[4],mE:e[5],mI:e[6],mM:e[7],mB:e[8],mF:e[9],mJ:e[10],mN:e[11],mC:e[12],mG:e[13],mK:e[14],mO:e[15]}},UE=function(e){var r=new Float64Array(16);r[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],r[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],r[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],r[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],r[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],r[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],r[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],r[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],r[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],r[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],r[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],r[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5];var n=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12];if(n===0)return z;n=1/n;for(var t=0;t<16;t=t+1)r[t]=r[t]*n;return D(r)},GE=function(e){var r=Dd(e),n=[e[12],e[13],e[14]];return r[3]=r[7]=r[11]=0,r[12]=-It([r[0],r[4],r[8]],n),r[13]=-It([r[1],r[5],r[9]],n),r[14]=-It([r[2],r[6],r[10]],n),r};function jd(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2*o/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/(t-n),i[6]=0,i[7]=0,i[8]=(r+e)/(r-e),i[9]=(t+n)/(t-n),i[10]=-(c+o)/(c-o),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*c*o/(c-o),i[15]=0,i}var qE=zr(jd),WE=J(function(e,r,n,t){var o=n*Math.tan(e*Math.PI/360),c=-o,i=c*r,f=o*r;return jd(i,f,c,o,n,t)});function Ld(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-n),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2/(c-o),i[11]=0,i[12]=-(r+e)/(r-e),i[13]=-(t+n)/(t-n),i[14]=-(c+o)/(c-o),i[15]=1,i}var NE=zr(Ld),QE=J(function(e,r,n,t){return Ld(e,r,n,t,-1,1)});function Td(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[3],f=e[4],$=e[5],s=e[6],d=e[7],b=e[8],_=e[9],p=e[10],h=e[11],y=e[12],k=e[13],L=e[14],w=e[15],H=r[0],F=r[1],V=r[2],q=r[3],O=r[4],K=r[5],ce=r[6],be=r[7],ke=r[8],Me=r[9],Le=r[10],ie=r[11],Ve=r[12],Ue=r[13],er=r[14],qe=r[15];return n[0]=t*H+f*F+b*V+y*q,n[1]=o*H+$*F+_*V+k*q,n[2]=c*H+s*F+p*V+L*q,n[3]=i*H+d*F+h*V+w*q,n[4]=t*O+f*K+b*ce+y*be,n[5]=o*O+$*K+_*ce+k*be,n[6]=c*O+s*K+p*ce+L*be,n[7]=i*O+d*K+h*ce+w*be,n[8]=t*ke+f*Me+b*Le+y*ie,n[9]=o*ke+$*Me+_*Le+k*ie,n[10]=c*ke+s*Me+p*Le+L*ie,n[11]=i*ke+d*Me+h*Le+w*ie,n[12]=t*Ve+f*Ue+b*er+y*qe,n[13]=o*Ve+$*Ue+_*er+k*qe,n[14]=c*Ve+s*Ue+p*er+L*qe,n[15]=i*Ve+d*Ue+h*er+w*qe,n}var OE=l(Td),JE=l(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[4],f=e[5],$=e[6],s=e[8],d=e[9],b=e[10],_=e[12],p=e[13],h=e[14],y=r[0],k=r[1],L=r[2],w=r[4],H=r[5],F=r[6],V=r[8],q=r[9],O=r[10],K=r[12],ce=r[13],be=r[14];return n[0]=t*y+i*k+s*L,n[1]=o*y+f*k+d*L,n[2]=c*y+$*k+b*L,n[3]=0,n[4]=t*w+i*H+s*F,n[5]=o*w+f*H+d*F,n[6]=c*w+$*H+b*F,n[7]=0,n[8]=t*V+i*q+s*O,n[9]=o*V+f*q+d*O,n[10]=c*V+$*q+b*O,n[11]=0,n[12]=t*K+i*ce+s*be+_,n[13]=o*K+f*ce+d*be+p,n[14]=c*K+$*ce+b*be+h,n[15]=1,n}),XE=l(function(e,r){var n=new Float64Array(16);r=_i(r,u0);var t=r[0],o=r[1],c=r[2],i=Math.cos(e),f=1-i,$=Math.sin(e);return n[0]=t*t*f+i,n[1]=o*t*f+c*$,n[2]=c*t*f-o*$,n[3]=0,n[4]=t*o*f-c*$,n[5]=o*o*f+i,n[6]=o*c*f+t*$,n[7]=0,n[8]=t*c*f+o*$,n[9]=o*c*f-t*$,n[10]=c*c*f+i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}),ZE=x(function(e,r,n){var t=new Float64Array(16),o=1/$0(r),c=r[0]*o,i=r[1]*o,f=r[2]*o,$=Math.cos(e),s=1-$,d=Math.sin(e),b=c*d,_=i*d,p=f*d,h=c*i*s,y=c*f*s,k=i*f*s,L=c*c*s+$,w=h+p,H=y-_,F=h-p,V=i*i*s+$,q=k+b,O=y+_,K=k-b,ce=f*f*s+$,be=n[0],ke=n[1],Me=n[2],Le=n[3],ie=n[4],Ve=n[5],Ue=n[6],er=n[7],qe=n[8],Lr=n[9],We=n[10],or=n[11],Tr=n[12],Ur=n[13],ja=n[14],Va=n[15];return t[0]=be*L+ie*w+qe*H,t[1]=ke*L+Ve*w+Lr*H,t[2]=Me*L+Ue*w+We*H,t[3]=Le*L+er*w+or*H,t[4]=be*F+ie*V+qe*q,t[5]=ke*F+Ve*V+Lr*q,t[6]=Me*F+Ue*V+We*q,t[7]=Le*F+er*V+or*q,t[8]=be*O+ie*K+qe*ce,t[9]=ke*O+Ve*K+Lr*ce,t[10]=Me*O+Ue*K+We*ce,t[11]=Le*O+er*K+or*ce,t[12]=Tr,t[13]=Ur,t[14]=ja,t[15]=Va,t});function zd(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}var YE=x(zd),KE=function(e){return zd(e[0],e[1],e[2])},eU=J(function(e,r,n,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*n,o[9]=t[9]*n,o[10]=t[10]*n,o[11]=t[11]*n,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o}),rU=l(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=r[11]*c,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Md(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}var aU=x(Md),nU=function(e){return Md(e[0],e[1],e[2])},tU=J(function(e,r,n,t){var o=new Float64Array(16),c=t[0],i=t[1],f=t[2],$=t[3],s=t[4],d=t[5],b=t[6],_=t[7],p=t[8],h=t[9],y=t[10],k=t[11];return o[0]=c,o[1]=i,o[2]=f,o[3]=$,o[4]=s,o[5]=d,o[6]=b,o[7]=_,o[8]=p,o[9]=h,o[10]=y,o[11]=k,o[12]=c*e+s*r+p*n+t[12],o[13]=i*e+d*r+h*n+t[13],o[14]=f*e+b*r+y*n+t[14],o[15]=$*e+_*r+k*n+t[15],o}),oU=l(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=r[0],f=r[1],$=r[2],s=r[3],d=r[4],b=r[5],_=r[6],p=r[7],h=r[8],y=r[9],k=r[10],L=r[11];return n[0]=i,n[1]=f,n[2]=$,n[3]=s,n[4]=d,n[5]=b,n[6]=_,n[7]=p,n[8]=h,n[9]=y,n[10]=k,n[11]=L,n[12]=i*t+d*o+h*c+r[12],n[13]=f*t+b*o+y*c+r[13],n[14]=$*t+_*o+k*c+r[14],n[15]=s*t+p*o+L*c+r[15],n}),cU=x(function(e,r,n){var t=wd(e,r,u0),o=_i(l0(n,t,Sd),Sd),c=_i(l0(t,o,kd),kd),i=vh,f=sh;return i[0]=o[0],i[1]=c[0],i[2]=t[0],i[3]=0,i[4]=o[1],i[5]=c[1],i[6]=t[1],i[7]=0,i[8]=o[2],i[9]=c[2],i[10]=t[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=-e[0],f[13]=-e[1],f[14]=-e[2],f[15]=1,Td(i,f)});function Dd(e){var r=new Float64Array(16);return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],r}var iU=Dd,fU=x(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}),Bd=0;function yi(e,r){for(;r.b;r=r.b)e(r.a)}function s0(e){for(var r=0;e.b;e=e.b)r++;return r}var mh=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ph=Te(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),hh=l(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),gh=l(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),_h=l(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),yh=l(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Ch=l(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Ph=l(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Sh=l(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),kh=l(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),xh=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},wh=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},jh=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Lh=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Ad=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Hd=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Th=function(e){e.gl.disable(e.gl.CULL_FACE)},zh=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Mh=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Dh=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Id=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Bh=[wh,jh,Lh,Ad,Hd,Th,zh,Mh,Dh];function Vd(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Ah(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Rd(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Hh(e,r,n,t){for(var o=n.a.ls,c=[],i=0;i<o;i++)c.push(String.fromCharCode(97+i));function f(p,h,y,k,L){var w;if(o===1)for(w=0;w<h;w++)p[y++]=h===1?k[L]:k[L][w];else c.forEach(function(H){for(w=0;w<h;w++)p[y++]=h===1?k[H][L]:k[H][L][w]})}var $=Rd(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var s=0,d=$.size*$.arraySize*o,b=new $.type(s0(n.b)*d);yi(function(p){f(b,$.size*$.arraySize,s,p,t[r.name]||r.name),s+=d},n.b);var _=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,_),e.bufferData(e.ARRAY_BUFFER,b,e.STATIC_DRAW),_}function Ih(e,r){if(r.a.l$>0){var n=e.createBuffer(),t=Vh(r.c,r.a.l$);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.ls*s0(r.b),indexBuffer:null,buffers:{}}}function Vh(e,r){var n=new Uint32Array(s0(e)*r),t=0,o;return yi(function(c){if(r===1)n[t++]=c;else for(o=0;o<r;o++)n[t++]=c[String.fromCharCode(97+o)]},e),n}function Fd(e,r){return e+"#"+r}var Ed=l(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Ad(n),Hd(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(c){if(c.d.b.b){var i,f,$;if(c.b.id&&c.c.id&&(i=Fd(c.b.id,c.c.id),f=n.programs[i]),!f){var s;c.b.id?s=n.shaders[c.b.id]:c.b.id=Bd++,s||(s=Vd(t,c.b.src,t.VERTEX_SHADER),n.shaders[c.b.id]=s);var d;c.c.id?d=n.shaders[c.c.id]:c.c.id=Bd++,d||(d=Vd(t,c.c.src,t.FRAGMENT_SHADER),n.shaders[c.c.id]=d);var b=Ah(t,s,d);f={glProgram:b,attributes:Object.assign({},c.b.attributes,c.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},f.uniformSetters=Rh(t,e,f,Object.assign({},c.b.uniforms,c.c.uniforms));var _=t.getProgramParameter(b,t.ACTIVE_ATTRIBUTES);for($=0;$<_;$++){var p=t.getActiveAttrib(b,$),h=t.getAttribLocation(b,p.name);f.activeAttributes.push(p),f.activeAttributeLocations.push(h)}i=Fd(c.b.id,c.c.id),n.programs[i]=f}n.lastProgId!==i&&(t.useProgram(f.glProgram),n.lastProgId=i),Fh(f.uniformSetters,c.e);var y=n.buffers.get(c.d);for(y||(y=Ih(t,c.d),n.buffers.set(c.d,y)),$=0;$<f.activeAttributes.length;$++){p=f.activeAttributes[$],h=f.activeAttributeLocations[$],y.buffers[p.name]===void 0&&(y.buffers[p.name]=Hh(t,p,c.d,f.attributes)),t.bindBuffer(t.ARRAY_BUFFER,y.buffers[p.name]);var k=Rd(t,p.type);if(k.arraySize===1)t.enableVertexAttribArray(h),t.vertexAttribPointer(h,k.size,k.baseType,!1,0,0);else for(var L=k.size*4,w=L*k.arraySize,H=0;H<k.arraySize;H++)t.enableVertexAttribArray(h+H),t.vertexAttribPointer(h+H,k.size,k.baseType,!1,w,L*H)}for(n.toggle=!n.toggle,yi(EB(n),c.a),$=0;$<Id.length;$++){var F=n[Id[$]];F.toggle!==n.toggle&&F.enabled&&(Bh[$](n),F.enabled=!1,F.toggle=n.toggle)}y.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,y.indexBuffer),t.drawElements(c.d.a.m$,y.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(c.d.a.m$,0,y.numIndices)}}return yi(o,e.g),r});function Rh(e,r,n,t){var o=n.glProgram,c=n.currentUniforms,i=0,f=r.f;function $(p,h){var y=h.name,k=e.getUniformLocation(p,y);switch(h.type){case e.INT:return function(w){c[y]!==w&&(e.uniform1i(k,w),c[y]=w)};case e.FLOAT:return function(w){c[y]!==w&&(e.uniform1f(k,w),c[y]=w)};case e.FLOAT_VEC2:return function(w){c[y]!==w&&(e.uniform2f(k,w[0],w[1]),c[y]=w)};case e.FLOAT_VEC3:return function(w){c[y]!==w&&(e.uniform3f(k,w[0],w[1],w[2]),c[y]=w)};case e.FLOAT_VEC4:return function(w){c[y]!==w&&(e.uniform4f(k,w[0],w[1],w[2],w[3]),c[y]=w)};case e.FLOAT_MAT4:return function(w){c[y]!==w&&(e.uniformMatrix4fv(k,!1,new Float32Array(w)),c[y]=w)};case e.SAMPLER_2D:var L=i++;return function(w){e.activeTexture(e.TEXTURE0+L);var H=f.textures.get(w);H||(H=w.pR(e),f.textures.set(w,H)),e.bindTexture(e.TEXTURE_2D,H),c[y]!==w&&(e.uniform1i(k,L),c[y]=w)};case e.BOOL:return function(w){c[y]!==w&&(e.uniform1i(k,w),c[y]=w)};default:return function(){}}}for(var s={},d=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),b=0;b<d;b++){var _=e.getActiveUniform(o,b);s[t[_.name]||_.name]=$(o,_)}return s}function Fh(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Eh=x(function(e,r,n){return v7(r,{g:n,f:{},h:e},Oh,Jh)}),Uh=l(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Gh=l(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),qh=l(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Wh=l(function(e,r){e.contextAttributes.antialias=!0}),Nh=l(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Qh=l(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Oh(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yi(function(o){return a(FB,r,o)},e.h);var n=Or.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),mh(function(){return a(Ed,e,n)})):(n=Or.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Jh(e,r){return r.f=e.f,Ed(r)}var B=l6,lu=Y8,d0=x(function(e,r,n){var t=n.c,o=n.d,c=l(function(i,f){if(i.$){var s=i.a;return v(lu,e,f,s)}else{var $=i.a;return v(lu,c,f,$)}});return v(lu,c,v(lu,e,r,o),t)}),Xh=function(e){return v(d0,B,P,e)},vu=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,f=e,$=v(e,t,o,v(vu,e,r,i)),s=c;e=f,r=$,n=s;continue e}}),Wa=function(e){return v(vu,x(function(r,n,t){return a(B,g(r,n),t)}),P,e)},su=function(e){return v(vu,x(function(r,n,t){return a(B,r,t)}),P,e)},Zh=function(e){var r=e;return su(r)},Ud=1,Yh=2,Gd=0,D=function(e){return{$:0,a:e}},z={$:1},La=function(e){return{$:1,a:e}},b0=l(function(e,r){return{$:3,a:e,b:r}}),qd=l(function(e,r){return{$:0,a:e,b:r}}),Wd=l(function(e,r){return{$:1,a:e,b:r}}),Jr=function(e){return{$:0,a:e}},Kh=function(e){return{$:2,a:e}},uU=1,Nd=m6,eg=K6,$U=R6,rg=$6,Qd=D9,Ze=Zs,Mr=l(function(e,r){return a(J6,e,nu(r))}),$n=l(function(e,r){return u(a(O6,e,r))}),Od=function(e){return a(Mr,`
    `,a($n,`
`,e))},ve=x(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b,c=e,i=a(e,t,r),f=o;e=c,r=i,n=f;continue e}else return r}),Cr=function(e){return v(ve,l(function(r,n){return n+1}),0,e)},Jd=v6,lU=c6,vU=p6,ag=x(function(e,r,n){e:for(;;)if(te(e,r)<1){var t=e,o=r-1,c=a(B,r,n);e=t,r=o,n=c;continue e}else return n}),In=l(function(e,r){return v(ag,e,r,P)}),Vn=l(function(e,r){return v(Jd,e,a(In,0,Cr(r)-1),r)}),it=i9,Xd=function(e){var r=it(e);return 97<=r&&r<=122},Zd=function(e){var r=it(e);return r<=90&&65<=r},sU=F6,ng=function(e){return Xd(e)||Zd(e)},tg=function(e){var r=it(e);return r<=57&&48<=r},og=function(e){return Xd(e)||Zd(e)||tg(e)},Re=function(e){return v(ve,B,P,e)},Ci=U6,cg=l(function(e,r){return`

(`+(Ze(e+1)+(") "+Od(ig(r))))}),ig=function(e){return a(fg,e,P)},fg=l(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,i=e.b,t=(function(){var y=Ci(n);if(y.$===1)return!1;var k=y.a,L=k.a,w=k.b;return ng(L)&&a(eg,og,w)})(),o=t?"."+n:"['"+(n+"']"),$=i,s=a(B,o,r);e=$,r=s;continue e;case 1:var c=e.a,i=e.b,f="["+(Ze(c)+"]"),$=i,s=a(B,f,r);e=$,r=s;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var b=(function(){return r.b?"The Json.Decode.oneOf at json"+a(Mr,"",Re(r)):"Json.Decode.oneOf"})(),h=b+(" failed in the following "+(Ze(Cr(d))+" ways:"));return a(Mr,`

`,a(B,h,a(Vn,cg,d)))}else{var i=d.a,$=i,s=r;e=$,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+(function(){return r.b?" at json"+a(Mr,"",Re(r)):"!"})();default:var _=e.a,p=e.b,h=(function(){return r.b?"Problem with the value at json"+(a(Mr,"",Re(r))+`:

    `):`Problem with the given value:

`})();return h+(Od(a(Qd,4,p))+(`

`+_))}}),Dr=32,Vt=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),uo=G8,m0=D6,dU=g6,du=l(function(e,r){return Xs(r)/Xs(e)}),bU=z6,ln=m0(a(du,2,Dr)),p0=C(Vt,0,ln,uo,uo),Yd=N8,ac=function(e){return{$:1,a:e}},mU=l(function(e,r){return e(r)}),pU=l(function(e,r){return r(e)}),Na=n6,Rt=B6,Rn=W8,hU=i6,we=l(function(e,r){return te(e,r)>0?e:r}),ug=h6,nc=function(e){return{$:0,a:e}},h0=Q8,$g=l(function(e,r){e:for(;;){var n=a(h0,Dr,e),t=n.a,o=n.b,c=a(B,nc(t),r);if(o.b){var i=o,f=c;e=i,r=f;continue e}else return Re(c)}}),vn=function(e){var r=e.a;return r},lg=l(function(e,r){e:for(;;){var n=m0(r/Dr);if(n===1)return a(h0,Dr,e).a;var t=a($g,e,P),o=n;e=t,r=o;continue e}}),g0=l(function(e,r){if(r.W){var n=r.W*Dr,t=Rt(a(du,Dr,n-1)),o=e?Re(r.ap):r.ap,c=a(lg,o,r.W);return C(Vt,Rn(r.af)+n,a(we,5,t*ln),c,r.af)}else return C(Vt,Rn(r.af),ln,uo,r.af)}),gU=_6,_U=o6,vg=Te(function(e,r,n,t,o){e:for(;;){if(r<0)return a(g0,!1,{ap:t,W:n/Dr|0,af:o});var c=ac(v(Yd,Dr,r,e)),i=e,f=r-Dr,$=n,s=a(B,c,t),d=o;e=i,r=f,n=$,t=s,o=d;continue e}}),yU=C6,_0=l(function(e,r){if(e<=0)return p0;var n=e%Dr,t=v(Yd,n,e-n,r),o=e-n-Dr;return I(vg,r,o,e,P,t)}),CU=0,sn=function(e){return!e.$},T=P9,re=s9,PU=0,Kd=0,SU=5,ae=function(e){return e},kU=ae,mr=x(function(e,r,n){return te(n,e)<0?e:te(n,r)>0?r:n}),Qa=l(function(e,r){return A(r,{D:v(mr,0,1,r.D-e)})}),Oa=l(function(e,r){return A(r,{D:v(mr,0,1,r.D+e)})}),sg=l(function(e,r){return{bp:r.bp,ie:a(Oa,.14,r.bp),$8:a(Oa,.07,r.bp),iu:a(Oa,.13,r.tT),iv:a(Oa,.23,r.tT),dG:e,tT:r.tT,kd:a(Oa,.03,r.tT),ke:a(Oa,.06,r.tT),kf:a(Oa,.09,r.tT),kg:a(Qa,.03,r.tT),kh:a(Qa,.06,r.tT),ki:a(Qa,.09,r.tT),kj:{oR:.6,aS:r.tT.aS,D:.92,a0:.08},km:a(Qa,.5,r.dP),tZ:r.dP,ko:a(Qa,.15,r.dP)}}),dg=l(function(e,r){var n=r.dP,t=n.D<.12?A(n,{D:.12}):n;return{bp:r.bp,ie:a(Qa,.14,r.bp),$8:a(Qa,.07,r.bp),iu:a(Qa,.13,r.tT),iv:a(Qa,.23,r.tT),dG:e,tT:r.tT,kd:a(Qa,.03,r.tT),ke:a(Qa,.06,r.tT),kf:a(Qa,.09,r.tT),kg:a(Oa,.03,r.tT),kh:a(Oa,.06,r.tT),ki:a(Oa,.09,r.tT),kj:{oR:.88,aS:r.tT.aS,D:.18,a0:.1},km:a(Oa,.5,t),tZ:t,ko:a(Oa,.15,t)}}),bg=l(function(e,r){return r.rt?a(sg,r,{bp:e,tT:r.o2,dP:r.qM}):a(dg,r,{bp:e,tT:r.o2,dP:r.qM})}),eb=l(function(e,r){switch(e){case 0:return r.s4;case 1:return r.q_;case 2:return r.uM;case 3:return r.pa;case 4:return r.rH;default:return r.pV}}),Pi=l(function(e,r){return a(bg,a(eb,e,r),r)}),y0=u6,Ye=l(function(e,r){e:for(;;){if(r.$===-2)return z;var n=r.b,t=r.c,o=r.d,c=r.e,i=a(y0,e,n);switch(i){case 0:var f=e,$=o;e=f,r=$;continue e;case 1:return D(t);default:var f=e,$=c;e=f,r=$;continue e}}}),U=J(function(e,r,n,t){return{oR:t,aS:e,D:n,a0:r}}),mg={o2:C(U,.5833,.0952,.21,1),o9:C(U,.5833,.0952,.21,1),pa:C(U,.5718,.9231,.39,1),pj:C(U,.5667,.0505,.495,1),pk:C(U,.5673,.6341,.59,1),pl:C(U,.4869,.6,.575,1),pm:C(U,.4722,.6,.5,1),pn:C(U,.963,.5294,.575,1),po:C(U,.0224,1,.665,1),pp:C(U,0,0,1,1),pq:C(U,.1373,1,.575,1),pV:C(U,.4891,.7176,.425,1),qM:C(U,0,0,.96,1),q_:C(U,.4697,1,.33,1),rt:!0,rH:C(U,.7361,.6,.5,1),r7:"Erkal Dark",s4:C(U,.95,1,.5,1),uv:C(U,0,0,.82,1),uM:C(U,.1315,1,.45,1)},pg={o2:C(U,0,0,.96,1),o9:C(U,.5833,.0952,.21,1),pa:C(U,.5673,.8966,.29,1),pj:C(U,.5833,.0476,.42,1),pk:C(U,.5718,.9231,.39,1),pl:C(U,.4891,.7176,.425,1),pm:C(U,.4697,1,.33,1),pn:C(U,.963,.6,.375,1),po:C(U,.0288,.5909,.44,1),pp:C(U,0,0,.82,1),pq:C(U,.1315,1,.45,1),pV:C(U,.4845,.6825,.315,1),qM:C(U,.5833,.0952,.21,1),q_:C(U,.4551,1,.26,1),rt:!1,rH:C(U,.7167,.7143,.35,1),r7:"Erkal Light",s4:C(U,.95,1,.4,1),uv:C(U,0,0,.96,1),uM:C(U,.131,1,.35,1)},hg={o2:C(U,.6784,.5072,.1195,1),o9:C(U,.6784,.5072,.1195,1),pa:C(U,.6963,.7334,.3908,1),pj:C(U,.6596,.1664,.2542,1),pk:C(U,.6963,.8378,.5419,1),pl:C(U,.4985,.746,.7698,1),pm:C(U,.2473,.9215,.6656,1),pn:C(U,.8231,.9879,.5331,1),po:C(U,.9805,.9839,.5313,1),pp:C(U,.1717,.0624,.8829,1),pq:C(U,.1378,.9702,.5499,1),pV:C(U,.4985,.432,.6569,1),qM:C(U,.1708,.1275,.8046,1),q_:C(U,.2473,.6142,.5669,1),rt:!0,rH:C(U,.8231,.8982,.4245,1),r7:"Inferno",s4:C(U,.9804,.8923,.417,1),uv:C(U,.1712,.0491,.7129,1),uM:C(U,.1378,.8074,.4652,1)},gg={o2:C(U,.6758,.4926,.1233,1),o9:C(U,.6758,.4926,.1233,1),pa:C(U,.6963,.7334,.3908,1),pj:C(U,.6576,.1668,.257,1),pk:C(U,.6963,.8378,.5419,1),pl:C(U,.4985,.746,.7698,1),pm:C(U,.2989,.7749,.7169,1),pn:C(U,.8231,.9879,.5331,1),po:C(U,.9805,.9839,.5313,1),pp:C(U,.1241,.0824,.8856,1),pq:C(U,.1226,.912,.646,1),pV:C(U,.4985,.432,.6569,1),qM:C(U,.1238,.1697,.8105,1),q_:C(U,.2989,.48,.6076,1),rt:!0,rH:C(U,.8231,.8982,.4245,1),r7:"Magma",s4:C(U,.9804,.8923,.417,1),uv:C(U,.1239,.0643,.7167,1),uM:C(U,.1227,.6106,.5447,1)},$o={oR:1,aS:0,D:0,a0:0},Ja=q6,Xa=X6,Za=l(function(e,r){return e<1?r:v(Xa,e,Ja(r),r)}),bu=t6,mu=E6,tc=function(e){return a(mu,e,"")},_g=function(e){switch(e){case"0":return D(0);case"1":return D(1);case"2":return D(2);case"3":return D(3);case"4":return D(4);case"5":return D(5);case"6":return D(6);case"7":return D(7);case"8":return D(8);case"9":return D(9);case"a":return D(10);case"b":return D(11);case"c":return D(12);case"d":return D(13);case"e":return D(14);case"f":return D(15);default:return z}},yg=Q6,Si=function(e){return v(yg,B,P,e)},rb=Y6,C0=function(e){return v(ve,l(function(r,n){if(n.$===1){var t=n.a;return La(t)}else{var o=n.a,c=_g(r);if(c.$)return La("Invalid hex digit: "+tc(r));var i=c.a;return Jr(o*16+i)}}),Jr(0),Si(rb(e)))},Ne=l(function(e,r){return te(e,r)<0?e:r}),Cg=x(function(e,r,n){var t=a(Ne,e,a(Ne,r,n)),o=a(we,e,a(we,r,n)),c=(o+t)/2,i=o-t;if(i<1e-10)return{oR:1,aS:0,D:c,a0:0};var f=c>.5?i/(2-o-t):i/(o+t),$=(function(){if(o-e<1e-10){var d=te(r,n)<0?6:0;return(r-n)/i+d}else return o-r<1e-10?(n-e)/i+2:(e-r)/i+4})(),s=$/6;return{oR:1,aS:s,D:c,a0:f}}),Fn=r9,ab=function(e){var r=a(Fn,"#",e)?a(Za,1,e):e;if(Ja(r)!==6)return La("Expected 6-character hex string, got: "+e);var n=v(Xa,0,2,r),t=v(Xa,2,4,r),o=v(Xa,4,6,r),c=R(C0(n),C0(t),C0(o));if(!c.a.$&&!c.b.$&&!c.c.$){var i=c.a.a,f=c.b.a,$=c.c.a;return Jr(v(Cg,i/255,f/255,$/255))}else return La("Invalid hex color: "+e)},nb=l(function(e,r){if(r.$)return e;var n=r.a;return n}),m=l(function(e,r){var n=function(o){return a(nb,$o,ab(v(Xa,o*6,(o+1)*6,r)))},t=n(17);return{o2:t,o9:n(0),pa:n(4),pj:n(8),pk:n(12),pl:n(14),pm:n(10),pn:n(13),po:n(9),pp:n(15),pq:n(11),pV:n(6),qM:n(16),q_:n(2),rt:t.D<.5,rH:n(5),r7:e,s4:n(1),uv:n(7),uM:n(3)}}),Pg={o2:C(U,.6338,.2131,.4193,1),o9:C(U,.6338,.2131,.4193,1),pa:C(U,.6711,.9819,.3556,1),pj:C(U,.6313,.1141,.4988,1),pk:C(U,.6733,.9724,.4995,1),pl:C(U,.5206,.9279,.6164,1),pm:C(U,.408,.9525,.6016,1),pn:C(U,.8129,.6577,.6082,1),po:C(U,.0348,.7434,.583,1),pp:C(U,.1588,.059,.8705,1),pq:C(U,.1378,.9702,.5499,1),pV:C(U,.5206,.6303,.518,1),qM:C(U,.1581,.1657,.844,1),q_:C(U,.408,.663,.5087,1),rt:!0,rH:C(U,.8129,.4325,.4851,1),r7:"Parula",s4:C(U,.0348,.5435,.4645,1),uv:C(U,.1584,.0494,.7011,1),uM:C(U,.1378,.8074,.4652,1)},Sg={o2:C(U,.6497,.2697,.2788,1),o9:C(U,.6497,.2697,.2788,1),pa:C(U,.6963,.7334,.3908,1),pj:C(U,.6441,.1308,.3827,1),pk:C(U,.6963,.8378,.5419,1),pl:C(U,.4985,.746,.7698,1),pm:C(U,.2594,.8806,.6797,1),pn:C(U,.8231,.9879,.5331,1),po:C(U,.9805,.9839,.5313,1),pp:C(U,.1553,.0578,.8652,1),pq:C(U,.1378,.9702,.5499,1),pV:C(U,.4985,.432,.6569,1),qM:C(U,.1544,.1443,.7845,1),q_:C(U,.2594,.5758,.578,1),rt:!0,rH:C(U,.8231,.8982,.4245,1),r7:"Plasma",s4:C(U,.9804,.8923,.417,1),uv:C(U,.1549,.0495,.696,1),uM:C(U,.1378,.8074,.4652,1)},kg={o2:C(U,.7616,.2492,.257,1),o9:C(U,.7616,.2492,.257,1),pa:C(U,.6711,.9819,.3556,1),pj:C(U,.7582,.1116,.3649,1),pk:C(U,.6733,.9724,.4995,1),pl:C(U,.5003,1,.4968,1),pm:C(U,.367,.9956,.5641,1),pn:C(U,.7883,.876,.5781,1),po:C(U,.0151,.5947,.5814,1),pp:C(U,.1828,.0453,.8406,1),pq:C(U,.1749,.9924,.6211,1),pV:C(U,.5003,1,.4251,1),qM:C(U,.1818,.1003,.7645,1),q_:C(U,.3705,.8413,.4617,1),rt:!0,rH:C(U,.7886,.6673,.4517,1),r7:"Viridis",s4:C(U,.015,.4413,.4578,1),uv:C(U,.1823,.0425,.6725,1),uM:C(U,.1749,.7036,.5343,1)},tb=u([a(m,"Argonaut","232323ff000f8ce10bffb900008df86d43a600d8ebffffff444444ff2740abe15bffd2420092ff9a5feb67fff0fffffffffaf40e1019"),a(m,"0x96f","262427ff666db3e03affc73900cde8a392e89deaf6fcfcfa545452ff7e83bee55effd05e1bd5ebb0a3ebacedf8fcfcfafcfcfa262427"),a(m,"12-bit Rainbow","000000a0305040d080e090403060b06030900090c0dbded8685656c0606090d050e0d00000b0c080107020b0c0fffffffeffff040404"),a(m,"3024 Day","090300db2d2001a252caba0001a0e4a16a948fbecea5a2a25c5855dbaec33a34324a4543807d7cbcbbbacdab53f7f7f74a4543f7f7f7"),a(m,"3024 Night","090300db2d2001a252fded0201a0e4a16a94b5e4f4a5a2a25c5855e8bbd047413f4a4543807d7cd6d5d4cdab53f7f7f7a5a2a2090300"),a(m,"Aardvark Blue","191919aa342e4b8c0fdbba001370d3c43ac3008eb0bebebe525252f05b5095dc55ffe76360a4ece26be260b6cbf7f7f7dddddd102040"),a(m,"Abernathy","000000cd000000cd00cdcd001093f5cd00cd00cdcdfaebd7404040ff000000ff00ffff0011b5f6ff00ff00ffffffffffeeeeec111416"),a(m,"Adventure","040404d84a335da602eebb6e417ab3e5c499bdcfe5dbded8685656d76b4299b52cffb67097d7efaa7900bdcfe5e4d5c7feffff040404"),a(m,"Adventure Time","050404bd00134ab118e7741e0f4ac666599370a598f8dcc04e7cbffc5f5a9eff6eefc11a1997c69b5953c8faf4f6f5fbf8dcc01f1d45"),a(m,"Adwaita","241f31c01c282ec27ee8b5041e78e49841bb0ab9dcc0bfbc5e5c64ed333b4ad67cd2be3651a1ffc061cb4fd2fdf6f5f4000000ffffff"),a(m,"Adwaita Dark","241f31c01c282ec27ef5c2111e78e49841bb0ab9dcc0bfbc5e5c64ed333b57e389f8e45c51a1ffc061cb4fd2fdf6f5f4ffffff1d1d20"),a(m,"Afterglow","151515ac41427e8e50e5b5676c99bb9f4e857dd6cfd0d0d0505050ac41427e8e50e5b5676c99bb9f4e857dd6cff5f5f5d0d0d0212121"),a(m,"Aizen Dark","1a1a1af08898a4e09cf5dea484b4f8c8a2f490dcd0d0d6f0444444f08898a4e09cf5dea484b4f8c8a2f490dcd0ffffffd0d6f01a1a1a"),a(m,"Aizen Light","f0f2f6d00c363e9e28dd8c1a1c64f28636ec1590964a4d66adb2bcd00c363e9e28dd8c1a1c64f28636ec1590964a4d664a4d66f0f2f6"),a(m,"Alabaster","000000aa3731448c27cb9000325cc07a3e9d0083b2b7b7b7777777f0505060cb00f2af50007acce64ce600aacbf7f7f7000000f7f7f7"),a(m,"Alien Blood","1126167f2b272f7e25717f242f6a7f47587f327f77647d753c4812e0800918e000bde00000aae00058e000e0c473fa91637d750f1610"),a(m,"Andromeda","000000cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5666666cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5e5e5e5262a33"),a(m,"Apple Classic","000000c91b0000c200c7c4001c3fe1ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffd5a2002c2b2b"),a(m,"Apple System Colors","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74bffd60a0a84ffbf5af276d6ffffffffffffff1e1e1e"),a(m,"Apple System Colors Light","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74be5bc000a84ffbf5af269c9f2ffffff000000feffff"),a(m,"Arcoiris","333333da270012c258ffc656518bfce37bd963fad5bab2b2777777ffb9b9e3f6aaffddaab3e8f3cbbaf9bcffc7efefefeee4d9201f1e"),a(m,"Ardoise","2c2c2cd3322d588b35fca93a2465c27332b464e1b8f7f7f7535353fa58528dc252ffea516ab5f8be68ca89ffdbfefefeeaeaea1e1e1e"),a(m,"Arthur","3d352acd5c5c86af80e8ae5b6495eddeb887b0c4debbaa99554444cc553388aa22ffa75d87ceeb996600b0c4deddccbbddeedd1c1c1c"),a(m,"Atelier Sulphurpool","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b294f587c5e6687898ea4dfe2f19c637af5f7ff979db4202746"),a(m,"Atom","000000fd5ff187c38affd7b185befdb9b6fc85befde0e0e04c4c4cfd5ff194fa36f5ffa896cbfeb9b6fc85befde0e0e0c5c8c6161719"),a(m,"Atom One Dark","21252be06c7598c379e5c07b61afefc678dd56b6c2abb2bf767676e06c7598c379e5c07b61afefc678dd56b6c2abb2bfabb2bf21252b"),a(m,"Atom One Light","000000de3e353f953ad2b67c2f5af39500953f953abbbbbb000000de3e353f953ad2b67c2f5af3a000953f953affffff2a2c33f9f9f9"),a(m,"Aura","110f18ff676761ffcaffca85a277ffa277ff61ffcaedecee4d4d4dffca85a277ffffca85a277ffa277ff61ffcaedeceeedecee15141b"),a(m,"Aurora","23262ef0266f8fd46dffe66d102ee4ee5d4303d6b8c74ded4f545ef926728fd46dffe66d03d6b8ee5d4303d6b8c74dedffca2823262e"),a(m,"Ayu","11151cea6c737fd962f9af4f53bdfacda1fa90e1c6c7c7c7686868f07178aad94cffb45459c2ffd2a6ff95e6cbffffffbfbdb60b0e14"),a(m,"Ayu Light","000000ea6c6d6cbf43eca9443199e19e75c746ba94bababa686868f0717186b300f2ae49399ee6a37acc4cbf99d1d1d15c6166f8f9fa"),a(m,"Ayu Mirage","171b24ed827487d96cfacc6e6dcbfadabafa90e1c6c7c7c7686868f28779d5ff80ffd17373d0ffdfbfff95e6cbffffffcccac21f2430"),a(m,"Banana Blueberry","17141fff6b7f00bd9ce6c62f22e8dfdc396a56b6c2f1f1f1495162fe9ea198c379f9e46b91fff4da70d6bcf3ffffffffcccccc191323"),a(m,"Batman","1b1d1ee6dc44c8be46f4fd2273717474727162605fc6c5bf505354fff78efff27dfeed6c9194959a9a9da3a3a6dadbd66f6f6f1b1d1e"),a(m,"Belafonte Day","20111bbe100e858162d08b30426a7997522c989a9c968c835e5252be100e858162d08b30426a7997522c989a9cd5ccba45373cd5ccba"),a(m,"Belafonte Night","20111bbe100e858162eaa549426a7997522c989a9c968c835e5252be100e858162eaa549426a7997522c989a9cd5ccba968c8320111b"),a(m,"Birds Of Paradise","573d26be2d266ba18ae99d2a5a86adac80a674a6ade0dbb79b6c4ae8462795d8bad0d150b8d3edd19ecb93cfd7fff9d5e0dbb72a1f1d"),a(m,"Black Metal","000000486e6fdd9999a06666888888999999aaaaaac1c1c1404040486e6fdd9999a06666888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Bathory)","0000005f8787fbcb97e78a53888888999999aaaaaac1c1c14040405f8787fbcb97e78a53888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Burzum)","0000005f8787ddeecc99bbaa888888999999aaaaaac1c1c14040405f8787ddeecc99bbaa888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Dark Funeral)","0000005f8787d0dfee5f81a5888888999999aaaaaac1c1c14040405f8787d0dfee5f81a5888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Gorgoroth)","0000005f87879b8d7f8c7f70888888999999aaaaaac1c1c14040405f87879b8d7f8c7f70888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Immortal)","0000005f87877799bb556677888888999999aaaaaac1c1c14040405f87877799bb556677888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Khold)","0000005f8787eceee3974b46888888999999aaaaaac1c1c14040405f8787eceee3974b46888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Marduk)","0000005f8787a5aaa7626b67888888999999aaaaaac1c1c14040405f8787a5aaa7626b67888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Mayhem)","0000005f8787f3ecd4eecc6c888888999999aaaaaac1c1c14040405f8787f3ecd4eecc6c888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Nile)","0000005f8787aa9988777755888888999999aaaaaac1c1c14040405f8787aa9988777755888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Venom)","0000005f8787f8f7f279241f888888999999aaaaaac1c1c14040405f8787f8f7f279241f888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Blazer","000000b87a7a7ab87ab8b87a7a7ab8b87ab87ab8b8d9d9d94c4c4cdbbdbdbddbbddbdbbdbdbddbdbbddbbddbdbffffffd9e6f20d1926"),a(m,"Blue Berry Pie","0a4c6299246e5cb1b3eab9a890a5bd9d54a77e83ccf0e8d6463c5dc872720a6c7e7a31885f3d63bc94b75e60710a6c7ebabab91c0c28"),a(m,"Blue Dolphin","292d3eff8288b4e88df4d69f82aaffe9c1ff89ebffd0d0d09094a4ff8b92ddffa7ffe5859cc4ffddb0f6a3f7ffffffffc5f2ff006984"),a(m,"Blue Matrix","101116ff568000ff9cfffc5800b0ffd57bff76c1ffc7c7c7686868ff6e675ffa68fffc676871ffd682ec60fdffffffff00a2ff101116"),a(m,"Bluloco Dark","41444dfc2f5225a45cff936a3476ff7a82da4483aacdd4e08f9aaeff64803fc56bf9c85910b1feff78f85fb9bcffffffb9c0cb282c34"),a(m,"Bluloco Light","373a41d5275323974adf631c275fe4823ff127618dbabbc2676a77ff64803cbc66c5a3320099e1ce33c06d93bbd3d3d3373a41f9f9f9"),a(m,"Borland","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffffff4e0000a4"),a(m,"Box","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffff9fef00141d2b"),a(m,"Breadog","362c24b10b000072328b4c00005cb49b0097006a78baa99d514337de1100008f40ae60000074e1c300bd008697eae1da362c24f1ebe6"),a(m,"Breeze","31363bed151511d116f674001d99f39b59b61abc9ceff0f17f8c8dc0392b1cdc9afdbc4b3daee98e44ad16a085fcfcfceff0f131363b"),a(m,"Bright Lights","191919ff355bb7e876ffc25176d4ffba76e76cbfb5c2c8d74c4c4cff355bb7e876ffc25176d5ffba76e76cbfb5c2c8d7b3c9d7191919"),a(m,"Broadcast","000000da4939519f50ffd24a6d9cbed0d0ff6e9cbeffffff585858ff7b6b83d182ffff7c9fcef0ffffffa0cef0ffffffe6e1dc2b2b2b"),a(m,"Brogrammer","1f1f1ff811182dc55eecba0f2a84d24e5ab71081d6d6dbe5d6dbe5de352e1dd361f3bd091081d65350b90f7ddbffffffd6dbe5131313"),a(m,"Builtin Dark","000000bb000000bb00bbbb000d0dc8bb00bb00bbbbbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Builtin Light","000000bb000000bb00bbbb000000bbbb00bb00bbbbbbbbbb555555ff55552fd92fbfbf155555ffff55ff22ccccffffff000000ffffff"),a(m,"Builtin Pastel Dark","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffbbbbbb000000"),a(m,"Builtin Tango Dark","000000cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeecffffff000000"),a(m,"Builtin Tango Light","000000cc00004e9a06c4a0003465a475507b06989ab9bdb5555753ef29297dd527d6c329729fcfad7fa827d5d5eeeeec000000ffffff"),a(m,"C64","090300a2524c55a049bfce726657b3984ca367b6bdffffff000000a2524c55a049bfce726657b3984ca367b6bdf7f7f77869c440318d"),a(m,"CGA","000000aa000000aa00aa55000d0db7aa00aa00aaaaaaaaaa555555ff555555ff55ffff555555ffff55ff55ffffffffffaaaaaa000000"),a(m,"CLRS","000000f8282a328a5dfa701d135cd09f00bd33c3c1b3b3b3555753fb04162cc631e3bd0e1670ffe900b03ad5ceeeeeec262626ffffff"),a(m,"Calamity","2f2833fc644da5f69ce9d7a53b79c7f9267274d3ded5ced97e6c88fc644da5f69ce9d7a53b79c7f9267274d3deffffffd5ced92f2833"),a(m,"Carbonfox","282828ee539625be6a08bdba78a9ffbe95ff33b1ffdfdfe0484848f16da646c8802dc7c48cb6ffc8a5ff52bdffe4e4e5f2f4f8161616"),a(m,"Catppuccin Frappe","51576de78284a6d189e5c8908caaeef4b8e481c8bea5adce626880e671728ec772d9ba737b9ef0f2a4db5abfb5b5bfe2c6d0f5303446"),a(m,"Catppuccin Latte","5c5f77d20f3940a02bdf8e1d1e66f5ea76cb179299acb0be6c6f85de293e49af3deea02d456efffe85d82d9fa8bcc0cc4c4f69eff1f5"),a(m,"Catppuccin Macchiato","494d64ed8796a6da95eed49f8aadf4f5bde68bd5caa5adcb5b6078ec74868ccf7fe1c68278a1f6f2a9dd63cbc0b8c0e0cad3f524273a"),a(m,"Catppuccin Mocha","45475af38ba8a6e3a1f9e2af89b4faf5c2e794e2d5a6adc8585b70f3779989d88bebd39174a8fcf2aede6bd7cabac2decdd6f41e1e2e"),a(m,"Chalk","7d8b8fb23a52789b6ab9ac4a2a7facbd4f5a44a799d2d8d9888888f2484080c470ffeb624196fffc527553cdbdd2d8d9d2d8d92b2d2e"),a(m,"Chalkboard","000000c3737272c373c2c3727372c3c372c272c2c3d9d9d9585858dbaaaaaadbaadadbaaaaaadbdbaadaaadadbffffffd9e6f229262f"),a(m,"Challenger Deep","141228ff545862d196ffb37865b2ff906cff63f2f1a6b3cc565575ff808095ffa4ffe9aa91ddffc991e1aaffe4cbe3e7cbe1e71e1c31"),a(m,"Chester","080200fa5e5b16c98dffc83f288ad6d3459028dddee7e7e76f6b68fa5e5b16c98dfeef6d278ad6d3459027dedeffffffffffff2c3643"),a(m,"Ciapre","1818188e0d1648513bcc8b3f576d8c724d7c5c4f4baea47f555555ac3835a6a75ddcdf7c3097c6d33061f3dbb2f4f4f4aea47a191c27"),a(m,"Citruszest","404040ff545400cc7affd40000bfffff90fe48d1ccbfbfbf808080ff1a751affa3ffff0033cfffffb2fe00fff2f9f9f9bfbfbf121212"),a(m,"Cobalt Neon","142631ff23203ba5ffe9e75c8ff586781aa08ff586ba46b2fff688d4312e8ff586e9f06d3c7dd28230a76cbc678ff5868ff586142838"),a(m,"Cobalt Next","000000ff527b8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea162c35"),a(m,"Cobalt Next Dark","262f37f949678cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(m,"Cobalt Next Minimal","323d47ff657a8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(m,"Cobalt2","000000ff000038de21ffe50a1460d2ff005d00bbbbbbbbbb555555f40e173bd01dedc8095555ffff55ff6ae3faffffffffffff132738"),a(m,"Coffee Theme","000000c91b0000c200adaa000225c7ca30c700b8baa1a1a1686868ff6e671fba28b2af1b6871fff26af220bdbfffffff000000f5deb3"),a(m,"Crayon Pony Fish","2b1b1d91002b579524ab311b8c87b0692f50e8a86668525a4a383bc5255d8dff57c8381dcfc9fffc6cbaffceafb0949d68525a150707"),a(m,"Cursor Dark","2a2a2abf616aa3be8cebcb8b81a1c1b48ead88c0d0d8dee9505050bf616aa3be8cebcb8b81a1c1b48ead88c0d0ffffffffffff141414"),a(m,"Cutie Pro","000000f56e7fbec975f5866942d9c5d286b737cb8ad5c3c388847fe5a1a3e8d6a7f1bb7980c5deb294bb9dccbbffffffd5d0c9181818"),a(m,"Cyberdyne","080808ff837300c172d2a7000071cfff90fe6bffddf1f1f1484848ffc4bed6fcbafffed5c2e3ffffb2fee6e7feffffff00ff92151144"),a(m,"Cyberpunk","000000ff709200fbacfffa6a00bfffdf95ff86cbfeffffff595959ff8aa421f6bcfff7871bccfde6aefe99d6fcffffffe5e5e5332a57"),a(m,"Cyberpunk Scarlet Protocol","101116ff005101dc84faf9450271b6c930c700c5c7c7c7c7686868ff6e6760fa68fffc676871ffbd35ec60fdffffffffe41951101116"),a(m,"Dark Modern","272727f749492ea0439e6a030078d4d012731db4d6cccccc5d5d5ddc545223d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1f1f1f"),a(m,"Dark Pastel","000000ff555555ff55ffff555555ffff55ff55ffffbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffffffff000000"),a(m,"Dark+","000000cd31310dbc79e5e5102472c8bc3fbc11a8cde5e5e5666666f14c4c23d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1e1e1e"),a(m,"Darkermatrix","0910131a48316fa64c59590000cb6b4e375a1254591a48334040400d452a90d762e2e50000ff874e375a176c7300381e35451a070c0e"),a(m,"Darkmatrix","0910130065366fa64c7e80002c9a84523a60114d5300653640404000733d90d762e2e50046d8b8573d6612545a0065363e5715070c0e"),a(m,"Darkside","000000e8341c68c256f2d42c1c98e88e69c91c98e8bababa4c4c4ce05a4f77b869efd64b387cd3957bbe3d97e2babababababa222324"),a(m,"Dawnfox","575279b4637a618774ea9d34286983907aa956949fb2b6bd5f5695c26d85629f81eea8462d81a39a80b95ca7b4e6ebf3575279faf4ed"),a(m,"Dayfox","352c24a5222f396847ac54022848a96e33ce287980bfb6ae534c45b3434e577f63b86e284863b68452d5488d93f4ece63d2b5af6f2ee"),a(m,"Deep","000000d700051cd915d9bd265665ffb052da50d2dae0e0e0535353fb000722ff18fedc2b9fa9ffe09aff8df9ffffffffcdcdcd090909"),a(m,"Desert","4d4d4dff2b2b98fb98f0e68ccd853fffdeadffa0a0f5deb3626262ff555555ff55ffff5587ceffff55ffffd700ffffffffffff333333"),a(m,"Detuned","171717fe4386a6e32de6da730094d99b37ff50b7d9c7c7c7686868fa80acbde371fff27f00beffbe9eff5ed7ffffffffc7c7c7000000"),a(m,"Dimidium","000000cf494c60b442db9c110575d8af5ed21db6bbbab7b6817e7eff643b37e57bfccd1a688dfded6fe932e0fbdee3e4bab7b6141414"),a(m,"Dimmed Monokai","3a3d43be3f48879a3bc5a6354f76a1855c8d578fa4b9bcba888987fb001f0f722fc47033186de3fb00672e706dfdffb9b9bcba1f1f1f"),a(m,"Django","000000fd620941a83effe862315d3ff8f8f89df39fffffff585858ff943b73da70ffff94568264ffffffcfffd1fffffff8f8f80b2f20"),a(m,"Django Reborn Again","000000fd620941a83effe862245032f8f8f89df39fffffff4c4c4cff943b73da70ffff94568264ffffffcfffd1ffffffdadedc051f14"),a(m,"Django Smooth","000000fd620941a83effe862989898f8f8f89df39fe8e8e7727272ff943b73da70ffff94cacacaffffffcfffd1fffffff8f8f8245032"),a(m,"Doom One","000000ff6c6b98be65ecbe7ba9a1e1c678dd51afefbbc2cf595959ff665599bb66ecbe7ba9a1e1c678dd51afefbfbfbfbbc2cf282c34"),a(m,"Doom Peacock","1c1f24cb4b1626a6a6bcd42a2a6cc6a9a1e15699afede0ce51504dff5d3898be65e6f97251afefc678dd46d9ffdfdfdfede0ce2b2a27"),a(m,"Dot Gov","191919bf091d3d9751f6bb3417b2e07830b08bd2edffffff595959bf091d3d9751f6bb3417b2e07830b08bd2edffffffebebeb262c35"),a(m,"Dracula","21222cff555550fa7bf1fa8cbd93f9ff79c68be9fdf8f8f26272a4ff6e6e69ff94ffffa5d6acffff92dfa4fffffffffff8f8f2282a36"),a(m,"Dracula+","21222cff555550fa7bffcb6b82aaffc792ea8be9fdf8f8f2545454ff6e6e69ff94ffcb6bd6acffff92dfa4fffff8f8f2f8f8f2212121"),a(m,"Duckbones","0e101ae036005dcd97e3950000a3cb795ccc00a3cbebefc0444860ff482158db9ef6a10000b4e0b3a1e600b4e0b3b692ebefc00e101a"),a(m,"Duotone Dark","1f1d27d9393e2dcd73d9b76effc284de8d402488ffb7a1ff4e4a60d9393e2dcd73d9b76effc284de8d402488ffeae5ffb7a1ff1f1d27"),a(m,"Duskfox","393552eb6f92a3be8cf6c177569fbac4a7e79ccfd8e0def4544d8af083a2b1d196f9cb8c65b1cdccb1eda6dae3e2e0f7e0def4232136"),a(m,"ENCOM","0000009f0000008b00ffd0000081ffbc00ca008b8bbbbbbb555555ff000000ee00ffff000000ffff00ff00cdcdffffff00a595000000"),a(m,"Earthsong","121418c9423485c54cf5ae2e1398b9d0633d509552e5c6aa675f54ff645a98e036e0d5615fdaffff926984f088f6f7ece5c7a9292520"),a(m,"Electron Highlighter","15161fff6c8d00ffc3ffd7a977abffdaa4f400fdff778faf4a6789ff6c8d00ffc3ffd7a977abffdaa4f400fdffc3cee2a5b6d423283d"),a(m,"Elegant","0a1222ff025785cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ff005785cc95ffcb8b8dabe1c792eb3facefffffffced2d6292b31"),a(m,"Elemental","3c3c3098290f479a437f7111497f7d7f4e2f387f58807974555445e0502a61e070d6992779d9d9cd7c5459d599fff1e9807a7422211d"),a(m,"Elementary","242424d71c155aa513fdb40c134899e400382595e1efefef4b4b4bfc1c186bc219fec80e0955fffb00503ea8fc8c00ecefefef181818"),a(m,"Embark","1e1c31f0719ba1efd3ffe9aa57c7ffc792ea87dfebf8f8f2585273f02e6e2ce592ffb3781da0e2a742ea63f2f1a6b3cceeffff1e1c31"),a(m,"Embers Dark","16130f826d5757826d6d82576d578282576d576d82a39a905a504782825746403950483f8a8075beb6ae825757dbd6d1a39a9016130f"),a(m,"Espresso","353535d25252a5c261ffc66d6c99bbd197d9bed6ffeeeeec606060f00c0cc2e075e1e48b8ab7d9efb5f7dcf4ffffffffffffff323232"),a(m,"Espresso Libre","000000cc00001a921cf0e53a0066ffc5656b06989ad3d7cf555753ef29299aff87fffb5c43a8edff818a34e2e2eeeeecb8a8982a211c"),a(m,"Everblush","232a2de574748ccf7ee5c76b67b0e8c47fd56cbfbfb3b9b8464e50ef7e7e96d988f4d67a71baf2ce89df67cbe7bdc3c2dadada141b1e"),a(m,"Everforest Dark Hard","7a8478e67e80a7c080dbbc7f7fbbb3d699b683c092f2efdfa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbefd3c6aa1e2326"),a(m,"Everforest Light Med","7a8478e67e809ab373c1a2667fbbb3d699b683c092b2af9fa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbef5c6a72efebd4"),a(m,"Fahrenheit","1d1d1dcda0749e744dfecf757f0e0f734c4d979797ffffce404040fecea0cc734dfd9f4dcb4a054e739ffed04dffffffffffce000000"),a(m,"Fairyfloss","040303f92672c2ffdfe6c000c2ffdfffb8d1c5a3fff8f8f06090cbff857fc2ffdfffea00c2ffdfffb8d1c5a3fff8f8f0f8f8f25a5475"),a(m,"Farmhouse Dark","1d2027ba0004549d00c873000049e69f1b611fb65ce8e4e1464d54eb00097ac100ea9a00006efebf3b7f19e062f4eef0e8e4e11d2027"),a(m,"Farmhouse Light","1d20278d00033a7d00a95600092ccd820046229256a8a4a1394047eb00097ac100ea9a00006efebf3b7f00c649f4eef01d2027e8e4e1"),a(m,"Fideloper","292f33cb1e2dedb8acb7ab9b2e78c2c0236f309186eae3ce496068d4605ad4605aa866717c85c45c5db2819090fcf4dfdbdae0292f33"),a(m,"Firefly Traditional","000000c2372033bc26afad245a63ffd53ad233bbc7cccccc828282ff3b1e2ee720ecec16838dffff5cfe29f0f0ebebebf5f5f5000000"),a(m,"Firefox Dev","002831e638535eb83ca57706359ddfd75cff4b73a2dcdcdc26444de1003f1d9000cd9409006fc0a200da005794e2e2e27c8fa40e1011"),a(m,"Firewatch","585f6dd953605ab977dfb5634d89c4d5511944a8b6e6e5ff585f6dd953605ab977dfb5634c89c5d5511944a8b6e6e5ff9ba2b21e2027"),a(m,"Fish Tank","03073cc6004aacf157fecd5e525fb8986f82968763ecf0fc6c5b30da4b8adbffa9fee6a9b2befafda5cda5bd86f6ffececf0fe232537"),a(m,"Flat","222d3fa8232032a548e58d113167ac781aa02c9370b0b6ba475262d4312e2d9440e5be0c3c7dd28230a735b387e7eced2cc55d002240"),a(m,"Flatland","1d1d19f183399fd364f4ef6d5096be695abcd63865ffffff50504cd22a24a7d42cff894961b9d0695abcd63865ffffffb8dbef1d1f21"),a(m,"Flexoki Dark","100f0fd14d41879a39d0a2154385bece5d973aa99f878580575653af302966800bad8301205ea6a02f6f24837bcecdc3cecdc3100f0f"),a(m,"Flexoki Light","100f0faf302966800bad8301205ea6a02f6f24837b6f6e69b7b5acd14d41879a39d0a2154385bece5d973aa99fcecdc3100f0ffffcf0"),a(m,"Floraverse","08002e7e1a465d731acd751c1d6da1b7077e42a38cf3e0b84c3866d02063b4ce59fac35740a4cff12aae62caa8fff5dbdbd1b90e0d15"),a(m,"Forest Blue","333333f8818e92d3a21a8e638ed0ce5e468c31658ce2d8cd4a4a4afb3d666bb48d30c85a39a7a27e62b36096bfe2d8cde2d8cd051519"),a(m,"Framer","141414ff555598ec65ffcc3300aaffaa88ff88ddffcccccc414141ff8888b6f292ffd96633bbffcebbffbbecffffffff777777111111"),a(m,"Front End Delight","242526f8511b565747fa771d2c70b7f02e4f3ca1a6adadad5fac6df7431974ec4cfdc3253393cae75e4f4fbce68c735badadad1b1c1d"),a(m,"Fun Forrest","000000d6262b919c00be8a134699a38d4331da8213ddc2657f6a55e55a1cbfc65affcb1b7cc9cfd26349e6a96bffeaa3dec165251200"),a(m,"Galaxy","000000f9555f21b089fef02a589df6944d951f9ee7bbbbbb555555fa8c8f35bb9affff55589df6e756993979bcffffffffffff1d2837"),a(m,"Galizur","223344aa112233aa11ccaa222255cc7755aa22bbdd8899aa556677ff113333ff11ffdd333377ffaa77ff33ddffbbccddddeeff071317"),a(m,"Ghostty Default Style Dark","1d1f21cc6566b6bd68f0c67482a2beb294bb8abeb7c4c8c6666666d54e53b9ca4be7c5477aa6dac397d870c0b1eaeaeaffffff282c34"),a(m,"GitHub","3e3e3e970b1607962ac5bb94003e8ae946917cc4dfb2b2b2666666de00007ac895d7b6002e6cbaf2959200c7cbffffff3e3e3ef4f4f4"),a(m,"GitHub Dark","000000f7816656d364e3b3416ca4f8db61a22b7489ffffff4d4d4df7816656d364e3b3416ca4f8db61a22b7489ffffff8b949e101216"),a(m,"GitHub Dark Colorblind","484f58ec8e2c58a6ffd2992258a6ffbc8cff39c5cfb1bac46e7681fdac5479c0ffe3b34179c0ffd2a8ff56d4ddffffffc9d1d90d1117"),a(m,"GitHub Dark Default","484f58ff7b723fb950d2992258a6ffbc8cff39c5cfb1bac46e7681ffa19856d364e3b34179c0ffd2a8ff56d4ddffffffe6edf30d1117"),a(m,"GitHub Dark Dimmed","545d68f4706757ab5ac69026539bf5b083f039c5cf909dab636e7bff938a6bc46ddaaa3f6cb6ffdcbdfb56d4ddcdd9e5adbac722272e"),a(m,"GitHub Dark High Contrast","7a828eff949226cd4df0b72f71b7ffcb9eff39c5cfd9dee39ea7b3ffb1af4ae168f7c84391cbffdbb7ff56d4ddfffffff0f3f60a0c10"),a(m,"GitHub Light Colorblind","24292fb359000550ae4d2d000969da8250df1b7c836e778157606a8a46000969da633c01218bffa475f93192aa8c959f24292fffffff"),a(m,"GitHub Light Default","24292fcf222e1163294d2d000969da8250df1b7c836e778157606aa40e261a7f37633c01218bffa475f93192aa8c959f1f2328ffffff"),a(m,"GitHub Light High Contrast","0e1116a0111f024c1a3f22000349b4622cbc1b7c8366707b4b535d86061d055d204e2c001168e3844ae73192aa88929d0e1116ffffff"),a(m,"GitLab Dark","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff28262b"),a(m,"GitLab Dark Grey","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff222222"),a(m,"GitLab Light","303030a317000a7f3daf551d006cd8583cac00798a303030303030a317000a7f3daf551d006cd8583cac00798a303030303030fafaff"),a(m,"Glacier","2e343cbd0f2f35a770fb94351f5872bd2523778397ffffff404a55bd0f2f49e998fddf6e2a8bc1ea4727a0b6d3ffffffffffff0c1115"),a(m,"Grape","2d283fed22611fa91b8ddc20487df48d35c93bdeed9e9ea059516af0729a53aa5eb2dc87a9bcecad81c29de3eba288f79f9fa1171423"),a(m,"Grass","000000ff595900bb00e7b0000000a3ee59bb00bbbbbbbbbb959595ff595900bb00e7b0000000bbff55ff55fffffffffffff0a513773d"),a(m,"Grey Green","000000fe141474ff00f1ff0100deffff00f000ffbcffffff666666ff393900ff44ffd10000afffff008a00ffd3f5ececffffff002a1a"),a(m,"Gruber Darker","181818ff0a3642dc00ffdb0092a7cba095cb90aa9ee4e4e454494eff385142dc00ffdb0092a7cbafafda90aa9ef5f5f5e4e4e4181818"),a(m,"Gruvbox Dark","282828cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb2282828"),a(m,"Gruvbox Dark Hard","1d2021cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb21d2021"),a(m,"Gruvbox Light","fbf1c7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836fbf1c7"),a(m,"Gruvbox Light Hard","f9f5d7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836f9f5d7"),a(m,"Gruvbox Material","141617ea6926c1d041eecf756da3ecfd9bc1fe9d6effffff4c4c4cd3573bc1d041eecf752c86fffd9bc192a5dfffffffd4be981d2021"),a(m,"Gruvbox Material Dark","282828ea6962a9b665d8a6577daea3d3869b89b482d4be987c6f64ea6962a9b665d8a6577daea3d3869b89b482ddc7a1d4be98282828"),a(m,"Gruvbox Material Light","fbf1c7c14a4a6c782eb4710945707a945e804c7a5d654735a89984c14a4a6c782eb4710945707a945e804c7a5d4f3829654735fbf1c7"),a(m,"Guezwhoz","333333e851817ad694b7d0745aa0d69a90e058d6ced9d9d9808080e85181afd7afd1ed8564b2eda398ed61ede4edededd9d9d91d1d1d"),a(m,"HaX0R Blue","01092110b6ff10b6ff10b6ff10b6ff10b6ff10b6fffafafa48415700b3f700b3f700b3f700b3f700b3f700b3f7fefefe11b7ff010515"),a(m,"HaX0R Gr33N","001f0b15d00d15d00d15d00d15d00d15d00d15d00dfafafa33484319e20e19e20e19e20e19e20e19e20e19e20efefefe16b10e020f01"),a(m,"HaX0R R3D","1f0000b00d0db00d0db00d0db00d0db00d0db00d0dfafafa554040ff1111ff1010ff1010ff1010ff1010ff1010fefefeb10e0e200101"),a(m,"Hacktober","191918b34538587744d08949206ec5864651ac9166f1eee7464444b3332342824ac75a225389c5e795a5ebc587ffffffc9c9c9141414"),a(m,"Hardcore","1b1d1ef92672a6e22efd971f66d9ef9e6ffe5e7175ccccc6505354ff669dbeed5fe6db7466d9ef9e6ffea3babff8f8f2a0a0a0121212"),a(m,"Harper","010101f8b63f7fb5e1d6da25489e48b296c6f5bfd7a8a49d726e6af8b63f7fb5e1d6da25489e48b296c6f5bfd7fefbeaa8a49d010101"),a(m,"Havn Daggry","1f2842985248577159be6b003a577d7c5c97925780b0b5c51f2842cc4a35719679f1a5276089c07d7396aa869dd6dbeb3b4a7af8f9fb"),a(m,"Havn Skumring","252c47ea563e6ead7bf8b330596cf77c719ed588c1dce0ee38425cd172648c9e8feac58c5186cb9b7ceed17ab6fff6e1d6dbeb111522"),a(m,"Heeler","000000e44c2ebdd100f4ce655ba5f2ff95c2ff9763ffffff4c4c4ce44c2ebdd100f4ce650088ffff95c28da6e4fffffffdfdfd211f46"),a(m,"Highway","000000d00e18138034ffcb3e006bb3783482455271ededed5d504af07e18b1d130fff1204fc2fdde00715d504affffffededed222225"),a(m,"Hipster Green","000000b6214a00a600bfbf00246eb2b200b200a6b2bfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e584c138100b05"),a(m,"Hivacruz","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b2973ad435e6687898ea4dfe2f19c637af5f7ffede4e4132638"),a(m,"Homebrew","00000099000000a6009999000d0dbfb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e500ff00000000"),a(m,"Hopscotch","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379fd8b195c545c5c545b989498d5d3d5b33508ffffffb9b5b8322931"),a(m,"Hopscotch.256","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379dd464c8fc13efdcc591290bfc85e7c149b93ffffffb9b5b8322931"),a(m,"Horizon","000000e9567829d398fab79526bbd9ee64ac59e1e3e5e5e5666666ec6a883fdaa4fbc3a73fc4def075b56be4e6e5e5e5d5d8da1c1e26"),a(m,"Horizon Bright","16161dfc477700ca86f2a68200beddff58b100cdcbbfafac1a1c24fe5f8700d193e5a68800c9e2ff6cba00c3c2fff2ef16161dfdf0ed"),a(m,"Hot Dog Stand","000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6ffffffea3323"),a(m,"Hot Dog Stand (Mustard)","000000ea3323ea3323ea3323000000ea3323000000b9b9b9000000ea3323ea3323ea3323000000ea3323000000c6c6c6000000ffff54"),a(m,"Hurtado","575757ff1b00a5e055fbe74a496487fd5ff186e9fecbcccb404040d51d00a5df55fbe84a89beffc001c186eafedbdbdbdbdbdb000000"),a(m,"Hybrid","2a2e33b84d51b3bf5ae4b55e6e90b0a17eac7fbfb4b5b9b64345488d2e32798431e58a504b6b886e50794d7b745a626ab7bcba161719"),a(m,"IBM 5153 CGA","141414d033331bd01bd08c1b1b1bd0d01bd01bd0d0cecece4e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffcecece141414"),a(m,"IBM 5153 CGA (Black)","000000c4000000c400c47e000000c4c400c400c4c4c4c4c44e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffc4c4c4000000"),a(m,"IC Green PPL","014401ff273641a63876a8312ec3b950a0963ca078e6fef2106910b4fa5caefb86dafa872efaeb50fafa3cfac8e0f1dce0f1dc2c2c2c"),a(m,"IC Orange PPL","000000c13900a4a900caaf00bd6d00fc5e00f79500ffc88a6a4f2aff8c68f6ff40ffe36effbe55fc874fc69752fafaffffcb83262626"),a(m,"IR Black","4f4f4ffa6c60a8ff60fffeb796cafefa73fdc6c5feefedef7b7b7bfcb6b0cfffabffffccb5dcfffb9cfee0e0fefffffff1f1f1000000"),a(m,"IRIX Console","1a1919d4242637a327c29d280739e2911f9c4497dfcccccc767676f34f5945c731f9f2a74079ffc31ba26ed7d7f2f2f2f2f2f20c0c0c"),a(m,"IRIX Terminal","1a1919ff2b1e57ff3dffff440004ffff2cff56ffffffffffffff44ffff44ffff44fffc72ffff44ffff44ffff44ffff44f2f2f2000043"),a(m,"Iceberg Dark","1e2132e27878b4be82e2a47884a0c6a093c789b8c2c6c8d16b7089e98989c0ca8ee9b18991acd1ada0d395c4ced2d4dec6c8d1161821"),a(m,"Iceberg Light","dcdfe7cc517a668e3dc573392d539e7759b43f83a633374c8389a3cc3768598030b6662d22478e6845ad327698262a3f33374ce8e9ec"),a(m,"Idea","adadadfc525698b61cccb444437ee79d74b02488874b4b4bfffffffc707298b61cffff0b6c9cedfc7eff248887181818adadad202020"),a(m,"Idle Toes","323232d252527fe173ffc66d4099fff680ffbed6ffeeeeec606060f070709dff91ffe48b5eb7f7ff9dffdcf4ffffffffffffff323232"),a(m,"Jackie Brown","2c1d16ef57342baf2bbebf00246eb2d05ec100aceebfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e5ffcc2f2c1d16"),a(m,"Japanesque","343935cf3f617bb75be9b32a4c9ad4a57fc4389aadfafaf6595b59d18fa6767f2c78592f13597960429176bbcab2b5aef7f6ec1e1e1e"),a(m,"Jellybeans","929292e2737394b979ffba7b97bedce1c0fa00988edededebdbdbdffa1a1bddeabffdca0b1d8f6fbdaff1ab2a8ffffffdedede121212"),a(m,"JetBrains Darcula","000000fa5355126e00c2c3004581ebfa54ff33c2c1adadad555555fb717267ff4fffff006d9df1fb82ff60d3d1eeeeeeadadad202020"),a(m,"Jubi","3b3750cf7b9890a94b6ebfc0576ea6bc4f6875a7d2c3d3dea874cede90abbcdd6187e9ea8c9fcde16c87b7c9efd5e5f1c3d3de262b33"),a(m,"Kanagawa Dragon","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a6a69ce4687687a987e6c3847fb4ca938aa97aa89fc5c9c5c5c9c5181616"),a(m,"Kanagawa Lotus","1f1f28c840536f894e77713f4d699bb35b79597b755454648a8980d7474b6e915f836f4a6693bf624c835e857a43436c545464f2ecbc"),a(m,"Kanagawa Wave","090618c3404376946ac0a36e7e9cd8957fb86a9589c8c093727169e8242498bb6ce6c3847fb4ca938aa97aa89fdcd7badcd7ba1f1f28"),a(m,"Kanagawabones","1f1f28e46a7898bc6de5c2837eb3c9957fb87eb3c9ddd8bb49495eec818c9ec967f1c9827bc2dfa98fd27bc2dfa8a48dddd8bb1f1f28"),a(m,"Kanso Ink","14171dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c714171d"),a(m,"Kanso Mist","22262dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2a4a7a45c6066e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c722262d"),a(m,"Kanso Pearl","22262dc840536f894e77713f4d699bb35b79597b755454646d6f6ed7474b6e915f836f4a6693bf624c835e857a43436c22262df2f1ef"),a(m,"Kanso Zen","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c7090e13"),a(m,"Kibble","4d4d4dc7003129cf13d8e30e3449d18400ff0798abe2d1e35a5a5af015786ce05cf3f79e97a4f7c495f068f2e0fffffff7f7f70e100a"),a(m,"Kitty Default","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffdddddd000000"),a(m,"Kitty Low Contrast","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffffffff333333"),a(m,"Kolorit","1d1a1eff5b8247d7a1e8e5625db4eeda6cda57e9ebededed504d51ff5b8247d7a1e8e5625db4eeda6cda57e9ebedededefecec1d1a1e"),a(m,"Konsolas","000000aa171718b218ebae1f2323a5ad1edc42b0c8c8c1c17b716eff41415fff5fffff554b4bffff54ff69ffffffffffc8c1c1060606"),a(m,"Kurokula","333333c35a5278b3a9e1b9175c91dd8b79a6867268e0cfc2515151ffc34cafffa5fff70090dbffad93ffffcdb6ffffffe0cfc2141515"),a(m,"Lab Fox","2e2e2efc6d263eb383fca121db3b216b40a86e49cbffffff535353ff651753eaa8fca013db501f6a36b67d53e7ffffffffffff2e2e2e"),a(m,"Laser","626262ff8373b4fb7309b4bdfed300ff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5f92883ffb2fee6e7fefffffff106e3030d18"),a(m,"Later This Evening","2b2b2bd45a60afba67e5d289a0bad6c092d691bfb7494a4a525454d3232faabb39e5be396699d6ab53d65fc0aec1c2c2959595222222"),a(m,"Lavandula","2300467d1625337e6f7f6f494f4a7f5a3f7f58777f736e7d443a53e0516752e0c4e0c3868e87e0a776e09ad4e08c91fa736e7d050014"),a(m,"Light Owl","403f53de3d3b08916ae0af02288ed7d6438a2aa298bdbdbd989fb1de3d3b08916adaaa01288ed7d6438a2aa298f0f0f0403f53fbfbfb"),a(m,"Liquid Carbon","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc595959ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2303030"),a(m,"Liquid Carbon Transparent","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc404040ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2000000"),a(m,"Lovelace","282a36f37f975adecdf2a2728897f4c574dd79e6f3fdfdfd4e5165ff497118e3c8ff8037556fffb043d13fdceebebec1fdfdfd1d1f28"),a(m,"Man Page","000000cc000000a6009999000000b2b200b200a6b2b2b2b2666666e5000000cc00bfbf000000ffe500e500cbcbe5e5e5000000fef49c"),a(m,"Mariana","000000ec5f6699c794f9ae586699ccc695c65fb4b4f7f7f7666666f97b58acd1a8fac76185add6d8b6d882c4c4ffffffd8dee9343d46"),a(m,"Material","212121b7141f457b24f6981e134eb25600880e717cafafaf424242e83b3f7aba3abfaa0054a4f3aa4dbc26bbd1d9d9d9232322eaeaea"),a(m,"Material Dark","212121b7141f457b24f6981e134eb2701aa20e717cefefef4f4f4fe83b3f7aba3affea2e54a4f3aa4dbc26bbd1d9d9d9e5e5e5232322"),a(m,"Material Darker","000000ff5370c3e88dffcb6b82aaffc792ea89ddffffffff545454ff5370c3e88dffcb6b82aaffc792ea89ddffffffffeeffff212121"),a(m,"Material Design Colors","435b67fc38415cf19efed03237b6fffc226e59ffd1ffffffa1b0b8fc746dadf7befee16c70cffffc669b9affe6ffffffe7ebed1d262a"),a(m,"Material Ocean","546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff8f93a20f111a"),a(m,"Mathias","000000e52222a6e32dfc951ec48dfffa257367d9f0f2f2f2555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Matrix","0f191c23755a82d967ffd7003f524240993150b45a5073506880602fc07990d762faff004f7e7e11ff25c1ff8a678c614266440f191c"),a(m,"Matte Black","333333d35f5fffc107b91c1ce68e0dd35f5fbebebebebebe8a8a8d891c1cffc107b90a0af59e0bb91c1ceaeaeaffffffbebebe121212"),a(m,"Medallion","000000b64c007c8b16d3bd26616bb08c5a90916c25cac29a5e5219ff9149b2ca3bffe54aacb8ffffa0ffffbc51fed698cac2961d1908"),a(m,"Melange Dark","34302cbd818378997ae49b5d7f91b2b380b07b9695c1a78e867462d4776685b695ebc06da3a9cecf9bc289b3b6ece1d7ece1d7292522"),a(m,"Melange Light","e9e1dbc77b8b6e9b72bc5c007892bdbe79bb7397977d6658a98a78bf00213a684aa06d00465aa49041803d656854433a54433af1f1f1"),a(m,"Mellifluous","1a1a1ad29393b3b393cbaa89a8a1beb39fb0c0af8cdadada5b5b5bc95954828040a6794c5a65999c699574a39effffffdadada1a1a1a"),a(m,"Mellow","27272af5a19190b99fe6b99daca1cfe29ecaea83a5c1c0d4424246ffae9f9dc6acf0c5a9b9aedaecaad6f591b2cac9ddc9c7cd161617"),a(m,"Miasma","0000006857425f875fb36d4378824bbb7744c9a554d7c4836666666857425f875fb36d4378824bbb7744c9a554d7c483c2c2b0222222"),a(m,"Midnight In Mojave","1e1e1eff453a32d74bffd60a0a84ffbf5af25ac8faffffff515151ff453a32d74bffd60a0a84ffbf5af25ac8faffffffffffff1e1e1e"),a(m,"Mirage","011627ff999985cc95ffd7007fb5ffddb3ff21c7a8ffffff575656ff999985cc95ffd7007fb5ffddb3ff85cc95ffffffa6b2c01b2738"),a(m,"Misterioso","000000ff424274af68ffad29338f869414e623d7d7e1e1e0626262ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e02d3743"),a(m,"Molokai","121212fa257398e123dfd4601080d08700ff43a8d0bbbbbb555555f6669db1e05ffff26d00afffaf87ff51ceffffffffbbbbbb121212"),a(m,"Mona Lisa","351b0e9b291c636232c36e28515c5d9b1d29588056f7d75c874228ff4331b4b264ff95669eb2b4ff5b6a8acd8fffe598f7d66a120b0d"),a(m,"Monokai Classic","272822f92672a6e22ee6db74fd971fae81ff66d9effdfff16e7066f92672a6e22ee6db74fd971fae81ff66d9effdfff1fdfff1272822"),a(m,"Monokai Pro","2d2a2eff6188a9dc76ffd866fc9867ab9df278dce8fcfcfa727072ff6188a9dc76ffd866fc9867ab9df278dce8fcfcfafcfcfa2d2a2e"),a(m,"Monokai Pro Light","faf4f2e14775269d69cc7a0ae160327058be1c8ca829242aa59fa0e14775269d69cc7a0ae160327058be1c8ca829242a29242afaf4f2"),a(m,"Monokai Pro Light Sun","f8efe7ce4770218871b16803d4572b6851a22473b62c232ea59c9cce4770218871b16803d4572b6851a22473b62c232e2c232ef8efe7"),a(m,"Monokai Pro Machine","273136ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffc6b7678ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffcf2fffc273136"),a(m,"Monokai Pro Octagon","282a3aff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1696d77ff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1eaf2f1282a3a"),a(m,"Monokai Pro Ristretto","2c2525fd6883adda78f9cc6cf38d70a8a9eb85daccfff1f372696afd6883adda78f9cc6cf38d70a8a9eb85daccfff1f3fff1f32c2525"),a(m,"Monokai Pro Spectrum","222222fc618d7bd88ffce566fd9353948ae35ad4e6f7f1ff69676cfc618d7bd88ffce566fd9353948ae35ad4e6f7f1fff7f1ff222222"),a(m,"Monokai Remastered","1a1a1af4005f98e024fd971f9d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efd9d9d90c0c0c"),a(m,"Monokai Soda","1a1a1af4005f98e024fa84199d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efc4c5b51a1a1a"),a(m,"Monokai Vivid","121212fa293498e123fff30a0443fff800f801b6edffffff838383f6669db1e05ffff26d0443fff200f651cefffffffff9f9f9121212"),a(m,"Moonfly","323437ff54548cc85fe3c78a80a0ffcf87e879dac8c6c6c6949494ff518936c692c6c68474b2ffae81ff85dc85e4e4e4bdbdbd080808"),a(m,"N0Tch2K","383838a95551666666a98051657d3e767676c9c9c9d0b8a3545454a977758c8c8ca9917598bd5ea3a3a3dcdcdcd8c8bba0a0a0222222"),a(m,"Neobones Dark","0f191fde6e7c90ff6bb77e648190d4b279a766a5adc6d5cf334652e8838fa0ff85d68c6792a0e2cf86c165b8c198a39ec6d5cf0f191f"),a(m,"Neobones Light","e5ede6a8334c567a3094492728648688507d3b8992202e1899ac9c94253e3f5a22803d1c1d55737b3b702b747c415934202e18e5ede6"),a(m,"Neon","000000ff30455ffa74fffc7e0f15d8f924e700fffcc7c7c7686868ff5a5a75ff88fffd963c40cbf15be588fffeffffff00fffc14161a"),a(m,"Neopolitan","0000009a1a1a61ce3cfbde2d324883ff00808da6cef8f8f84c4c4c9a1a1a61ce3cfbde2d324883ff00808da6cef8f8f8ffffff271f19"),a(m,"Neutron","23252bb540365ab977deb5666a7c93a4799d3f94a8e6e8ef494b51b540365ab977deb5666a7c93a4799d3f94a8ebedf2e6e8ef1c1e22"),a(m,"Night Lion V1","4c4c4cbb00005fde8ff3f167276bd8bb00bb00dadfbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Night Lion V2","4c4c4cbb000004f623f3f16764d0f0ce6fdb00dadfbbbbbb555555ff55557df71dffff5562cbe8ff9bf500ccd8ffffffbbbbbb171717"),a(m,"Night Owl","011627ef535022da6eaddb6782aaffc792ea21c7a8ffffff575656ef535022da6effeb9582aaffc792ea7fdbcaffffffd6deeb011627"),a(m,"Night Owlish Light","011627d3423e2aa298daaa014876d6403f5308916a7a81817a8181f76e6e49d0c5dac26b5ca7e469709800c990989fb1403f53ffffff"),a(m,"Nightfox","393b44c94f6d81b29adbc074719cd69d79d663cdcfdfdfe0575860d169838ebaa4e0c98986abdcbaa1e27ad5d6e4e4e5cdcecf192330"),a(m,"Niji","333333d23e0854ca74fff7002ab9ffff50da1ef9f5ddd0c4515151ffb7b7c1ffaefcffb88efff3ffa2edbcffc7ffffffffffff141515"),a(m,"No Clown Fiesta","151515b4695890a959f4bf75bad7ffaa759f88afa2e1e1e17272727e97ab90a959f4bf75bad7ffaa759f88afa2afafafe0e1e4101010"),a(m,"No Clown Fiesta Light","d6d6d6874e42677940b890588ba1bfaa759f3e5f661515152b2b2b637786677940b8905893a2abaa759f99ab93373737151515e1e1e1"),a(m,"Nocturnal Winter","4d4d4df12d5209cd7ef5f17a3182e0ff2b6d09c87afcfcfc808080f16d860ae78dfffc676096ffff78a20ae78dffffffe6e5e50d0d17"),a(m,"Nord","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f0596377bf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee92e3440"),a(m,"Nord Light","3b4252bf616a96b17fc5a56581a1c1b48ead7bb3c3a5abb64c566abf616a96b17fc5a56581a1c1b48ead82afaeeceff4414858e5e9f0"),a(m,"Nord Wave","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f04c566abf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee9212121"),a(m,"Nordfox","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f053648dd06f79b1d196f0d3998cafd2c895bf93ccdce7ecf4cdcecf2e3440"),a(m,"Novel","000000cc0000009600d06b000000cccc00cc0087cca6a6a6808080cc0000009600d06b000000cccc00cc0087ccffffff3b2322dfdbc3"),a(m,"Nvim Dark","07080dffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f84f5258ffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f8e0e2ea14161b"),a(m,"Nvim Light","07080d5900080055236b5300004c73470045007373a1a4ab4f52585900080055236b5300004c73470045007373eef1f814161be0e2ea"),a(m,"Obsidian","000000b30d0e00bb00fecd223a9bdbbb00bb00bbbbbbbbbb555555ff000393c863fef874a1d7ffff55ff55ffffffffffcdcdcd283033"),a(m,"Ocean","000000e64c4c00a6009999000000b2d826d800a6b2bfbfbf808080ff1a1a00d900e5e5007373ffe500e500e5e5e5e5e5ffffff224fbc"),a(m,"Oceanic Material","000000ee2b2a40a33fffea2e1e80f08800a016afcaa4a4a4777777dc5c6070be71fff16354a4f3aa4dbc42c7daffffffc2c8d71c262b"),a(m,"Oceanic Next","162c35ec5f6799c794fac8636699ccc594c55fb3b3ffffff65737eec5f6799c794fac8636699ccc594c55fb3b3ffffffc0c5ce162c35"),a(m,"Ollie","000000ac2e3131ac61ac43002d57acb085281fa6ac8a8eac684432ff3d483bff99ff5e1e4488ffffc21d1ffaff5b6ea78a8dae222125"),a(m,"One Dark Two","1d1f23e2788198c379eac78671b9f4c88bda62bac6c9ccd34a505ae68991a8cc8eedcf978dc7f6d3a2e278c4cee6e6e6e6e6e621252b"),a(m,"One Double Dark","3d4452f163728cc570ecbe703fb1f5d373e317b9c4dbdfe5525d6fff777b82d882f5c0656dcaffff7bf400e5fbf7f9fcdbdfe5282c34"),a(m,"One Double Light","454b58f7484025a343cc81000087c1b50da9009ab7c5b2b30e131fff371100b90eec99001065dee500d800b4ddffffff383a43fafafa"),a(m,"One Half Dark","282c34e06c7598c379e5c07b61afefc678dd56b6c2dcdfe45d677ae06c7598c379e5c07b61afefc678dd56b6c2dcdfe4dcdfe4282c34"),a(m,"One Half Light","383a42e4564950a14fc184010184bca626a40997b3bababa4f525ee06c7598c379d8b36e61afefc678dd56b6c2ffffff383a42fafafa"),a(m,"Onenord","3b4252e06c759ec183ebcb8b81a1c1b988b088c0d0e5e9f0596377e06c759ec183ebcb8b81a1c1b988b08fbcbbeceff4e5e9f02e3440"),a(m,"Onenord Light","2e3440cb4f5348a53dee5e253879c59f4aca3ea1adb2b6bd646a76d163665f9e9dba793e1b40a69665af8fbcbbeceff42e3440f7f8fa"),a(m,"Operator Mono Dark","5a5a5aca372d4d7b3ad4d6974387cfb86cb472d5c6ced4cd9a9b99c37d6283d0a2fdfdc589d3f6ff2c7a82eadafdfdf6c3cac2191919"),a(m,"Overnight Slumber","0a1222ffa7c485cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ffa7c485cc95ffcb8b8dabe1c792ebffa7c4ffffffced2d60e1729"),a(m,"Oxocarbon","16161600dfdb00b4ffff429700c15ac693ffff74b8f2f4f858585800dfdb00b4ffff429700c15ac693ffff74b8f2f4f8f2f4f8161616"),a(m,"Pale Night Hc","000000f07178c3e88dffcb6b82aaffc792ea89ddffffffff737373f6a9aedbf1baffdfa6b4ccffddbdf2b8eaff999999cccccc3e4251"),a(m,"Pandora","000000ff424274af68ffad29338f869414e623d7d7e2e2e23f5648ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e1141e43"),a(m,"Paraiso Dark","2f1e2eef615548b685fec41806b6ef815ba45bc4bfa39e9b776e71ef615548b685fec41806b6ef815ba45bc4bfe7e9dba39e9b2f1e2e"),a(m,"Paul Millr","2a2a2aff000079ff0fe7bf00396bd7b449be66ccffbbbbbb666666ff008066ff66f3d64e709aeddb67e67adff2fffffff2f2f2000000"),a(m,"Pencil Dark","212121c3077110a778a89c14008ec45f498620a5bad9d9d94f4f4ffb007a5fd7aff3e43020bbfc6855de4fb8ccf1f1f1f1f1f1212121"),a(m,"Pencil Light","212121c3077110a778a89c14008ec4523c7920a5bab3b3b3424242fb007a52caa2c0b10020bbfc6855de4fb8ccf1f1f1424242f1f1f1"),a(m,"Peppermint","353535e7466989d287dab853449fd0da62dc65aaafb4b4b4535353e4859ba3cca2e1e4876fbce2e586e796dcdbdfdfdfc8c8c8000000"),a(m,"Phala Green Dark","000000ab150000b100a9a7000223c0c22ec000b4c0cbcbcb797979ed220000db00eae7000433ffed3aea00e8eaeaeaeac1fc03000000"),a(m,"Piatto Light","414141b2377166781ecd6f343c5ea8a454b266781ebfbfbf3f3f3fdb3365829429cd6f343c5ea8a454b2829429f2f2f2414141ffffff"),a(m,"Pnevma","2f2e2da3666690a57dd7af877fa5bdc79ec48adbb4d0d0d04a4845d78787afbea2e4c9afa1bdced7bedab1e7ddefefefd0d0d01c1c1c"),a(m,"Poimandres","1a1e28d0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd1a1e28"),a(m,"Poimandres Darker","16161ed0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd16161e"),a(m,"Poimandres Storm","252b37d0679d5de4c7fffac289ddfff087bd89ddffffffffa6accdd0679d5de4c7fffac2add7fff087bdadd7ffffffffa6accd252b37"),a(m,"Poimandres White","fefeffff209001dab2e5ba4e8abacdeb83948abacd000000969cbdff209001dab2e5ba4e0ebfffeb83940ebfff000000969cbdfefeff"),a(m,"Popping And Locking","1d2021cc241d98971ad79921458588b16286689d6aa89984928374f42c3eb8bb26fabd2f99c6cad3869b7ec16eebdbb2ebdbb2181921"),a(m,"Powershell","000000981a22098003c4a0004140c3d336820e807f7f7c7f808080ef29291cfe3cfefe45268ad2fe13fa29fffec2c1c3f6f6f7052454"),a(m,"Primary","000000db44370f9d58f4b4004285f4db44374285f4bfbfbf000000db44370f9d58f4b4004285f44285f40f9d58ffffff000000ffffff"),a(m,"Pro","00000099000000a6009999002009dbb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e5f2f2f2000000"),a(m,"Pro Light","000000e5492b50d148c6c4403b75ffed66e84ed2dec2c2c29f9f9fff664048d53ebfbe230082ffff7eff3bd1d2f2f2f2191919ffffff"),a(m,"Purple Rain","000000ff260e9be205ffc40000a2fa815bb500deefffffff565656ff4250b8e36effd85200a6ffac7bf074fdf3fffffffffbf621084a"),a(m,"Purplepeter","0a0520ff796d99b481efdfac66d9efe78fcdba8cffffba81504b63f99f92b4be8ff2e9bf79daedba91d4a0a0d6b9aed3ece7fa2a1a4a"),a(m,"Rapture","000000fc644d7afde1fff09b6c9bf5ff4fa164e0ffc0c9e5304b66fc644d7afde1fff09b6c9bf5ff4fa164e0ffffffffc0c9e5111e2a"),a(m,"Raycast Dark","000000ff536059d499ffc53156c2ffcf2f9852eee5ffffff4c4c4cff636359d499ffc53156c2ffcf2f9852eee5ffffffffffff1a1a1a"),a(m,"Raycast Light","000000b12424006b4ff8a300138af29a1b6e3eb8bfbfbfbf000000b12424006b4ff8a300138af29a1b6e3eb8bfffffff000000ffffff"),a(m,"Rebecca","12131edd775504dbb5f2e7b77aa5ffbf9cf956d3c2e4e3e9666699ff92cd01eac0fffca869c0fac17ff88bfde1f4f2f9e8e6ed292a44"),a(m,"Red Alert","000000d62e4e71be6bbeb86b489beee979d76bbeb8d6d6d6666666e02553aff08cdfddb765aaf1ddb7dfb7dfddffffffffffff762423"),a(m,"Red Planet","2020208c3432728271e8bf6a69819e8964925b8390b9aa99676767b55242869985ebeb9160827ede497438add8d6bfb8c2b790222222"),a(m,"Red Sands","000000ff3f0000bb00e7b0000072ffbb00bb00bbbbbbbbbb6e6e6ed41a1a00bb00e7b0000072aeff55ff55ffffffffffd7c9a77a251e"),a(m,"Relaxed","151515bc5653909d63ebc17a6a8799b06698c9dfffd9d9d9636363bc5653a0ac77ebc17a7eaac7b06698acbbd0f7f7f7d9d9d9353a44"),a(m,"Retro","13a10e13a10e13a10e13a10e13a10e13a10e13a10e13a10e16ba1016ba1016ba1016ba1016ba1016ba1016ba1016ba1013a10e000000"),a(m,"Retro Legends","262626de545445eb45f7bf2b4066f2bf4cf240d9e6bfe6bf4c594cff666659ff59ffd9334c80ffe666ff59e6fff2fff245eb450d0d0d"),a(m,"Rippedcasts","000000cdaf95a8ff60bfbb1f75a5b0ff73fd5a647ebfbfbf666666eecbadbcee68e5e50086bdc9e500e58c9bc4e5e5e5ffffff2b2b2b"),a(m,"Rose Pine","26233aeb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def46e6a86eb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def4e0def4191724"),a(m,"Rose Pine Dawn","f2e9e1b4637a286983ea9d3456949f907aa9d7827e5752799893a5b4637a286983ea9d3456949f907aa9d7827e575279575279faf4ed"),a(m,"Rose Pine Moon","393552eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def46e6a86eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def4e0def4232136"),a(m,"Rouge 2","5d5d6bc6797e969e92dbcdab6e94b94c4e788ab6c1e8e8ea616274c6797ee6dcc4e6dcc498b3cd8283a1abcbd3e8e8eaa2a3aa17182b"),a(m,"Royal","241f2b91284c23801cb49d276580b0674d968aaabe5249663e3a4ad5356c2cd946fde83b90baf9a479e3acd4eb9e8cbd514968100815"),a(m,"Ryuuko","2c3941865f5b66907db1a9906a8e95b18a7388b2acececec5d7079865f5b66907db1a9906a8e95b18a7388b2acecececececec2c3941"),a(m,"Sakura","000000d5237041af1abc70536964abc71fbf939393998eac786d69f41d9922e529f595749892f1e90cddeeeeeecbb6ffdd7bdc18131e"),a(m,"Scarlet Protocol","101116ff005100dc84faf9450271b6ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffbd35ec60fdffffffffe419511c153d"),a(m,"Sea Shells","17384cd15123027c9bfca02f1e495068d4f150a3b5deb88d434b53d48678628d98fdd39f1bbcddbbe3ee87acb4fee4cedeb88d09141b"),a(m,"Seafoam Pastel","757575825d4d728c62ada16d4d7b828a7267729494e0e0e08a8a8acf937a98d9aafae79d7ac3cfd6b2a1ade0e0e0e0e0d4e7d4243435"),a(m,"Selenized Black","252525ed4a4670b433dbb32d368aebeb6eb73fc5b7b9b9b9777777ff5e5683c746efc5414f9cfeff81ca56d8c9dededeb9b9b9181818"),a(m,"Selenized Dark","184956fa575075b938dbb32d4695f7f275be41c7b9adbcbc72898fff665c84c747ebc13d58a3ffff84cd53d6c7cad8d9adbcbc103c48"),a(m,"Selenized Light","ece3ccd2212d489100ad89000072d4ca4898009c8f53676d909995cc1729428b00a78300006dcec4439200978a3a4d5353676dfbf3db"),a(m,"Seoulbones Dark","4b4b4be388a398bd99ffdf9b97bddea5a6c56fbdbedddddd797172eb99b18fcd92ffe5b3a2c8e9b2b3da6bcacba8a8a8dddddd4b4b4b"),a(m,"Seoulbones Light","e2e2e2dc5284628562c485620084a3896788008586555555a5a0a1be3c6d487249a76b48006f897f4c7e006f70777777555555e2e2e2"),a(m,"Seti","323232c228328ec43de0c64f43a5d58b57b58ec43deeeeee3f3f3fc228328ec43de0c64f43a5d58b57b58ec43dffffffcacecd111213"),a(m,"Shades Of Purple","000000d904293ad900ffe7006943ffff2c7000c5c7c7c7c7686868f92a1c43d426f1d0006871ffff77ff79e8fbffffffffffff1e1d40"),a(m,"Shaman","012026b2302d00a9415e8baa449a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6405555001015"),a(m,"Slate","222222e2a8bf81d778c4c9c0335856a481d315ab9c02c5e0ffffffffcdd9beffa8d0ccca7ab0d2c5a7d98cdfe0e0e0e035b1d2222222"),a(m,"Sleepy Hollow","572100ba393491773fb556005f63b4a17c7b8faea9af9a914e4b61d9443fd6b04ef668138086efe2c2bba4dce7d2c7a9af9a91121214"),a(m,"Smyck","000000b841317da900c4a50062a3c4ba8acc207383a1a1a17a7a7ad6837cc4f137fee14d8dcff0f79aff6ad9cff7f7f7f7f7f71b1b1b"),a(m,"Snazzy","000000fc434650fb7cf0fb8c49bafffc4cb48be9feededec555555fc434650fb7cf0fb8c49bafffc4cb48be9feededecebece61e1f29"),a(m,"Snazzy Soft","000000ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0686868ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0eff0eb282a36"),a(m,"Soft Server","000000a2686a9aa56aa3906a6b8fa36a71a36ba58f99a3a2666c6cdd5c60bfdf55deb36062b1df606edf64e39cd2e0de99a3a2242626"),a(m,"Solarized Darcula","25292af24840629655b688002075c7797fd415968dd2d8d965696af24840629655b688002075c7797fd415968dd2d8d9d2d8d93d3f41"),a(m,"Solarized Dark Higher Contrast","002831d11c246cbe6ca577062176c7c61c6f259286eae3cb006488f5163b51ef84b27e28178ec8e24d8e00b39efcf4dc9cc2c3001e27"),a(m,"Solarized Dark Patched","002831d11c24738a05a577062176c7c61c6f259286eae3cb475b62bd3613475b625368707082845956ba819090fcf4dc708284001e27"),a(m,"Solarized Osaka Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"Sonokai","181819fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e37f8490fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e3e2e2e32c2e34"),a(m,"Spacedust","6e5346e35b005cab96e3cd7b0f548be35b0006afc7f0f1ce684c31ff8a3aaecab8ffc87867a0ceff8a3a83a7b4fefff1ecf0c10a1e24"),a(m,"Spacegray","000000b04b5787b379e5c1797d8fa4a4799685a7a5b3b8c34c4c4cb04b5787b379e5c1797d8fa4a4799685a7a5ffffffb3b8c320242d"),a(m,"Spacegray Bright","080808bc5553a0b56cf6c9877baec1b98aae85c9b8d8d8d8626262bc5553a0b56cf6c9877baec1b98aae85c9b8f7f7f7f3f3f32a2e3a"),a(m,"Spacegray Eighties","15171cec5f6781a764fec2545486c0bf83c157c2c1efece7555555ff697393d493ffd2564d84d1ff55ff83e9e4ffffffbdbaae222222"),a(m,"Spacegray Eighties Dull","15171cb24a5692b477c6735a7c8fa5a5789e80cdcbb3b8c3555555ec5f6789e986fec2545486c0bf83c158c2c1ffffffc9c6bc222222"),a(m,"Spiderman","1b1d1ee60813e22928e247562c3fff2435db3256fffffef6505354ff0325ff3338fe3a351d50ff747cff6184fffffff9e3e3e31b1d1e"),a(m,"Spring","000000ff4d831f8c3b1fc95b1dd3ee8959a83e999fbfbfbf000000ff00211fc231d5b80715a9fd8959a83e999fffffff4d4d4cffffff"),a(m,"Square","050505e9897cb6377decebbea9cdeb75507bc9caecf2f2f2474747f99286c3f786fcfbccb6defbad7fa8d7d9fce2e2e2acacab1a1a1a"),a(m,"Squirrelsong Dark","372920ba4138468336d4b1394395c6855fb82f9794d3b9a2704f39df4d43659a4ce8c23f4ca4db9d70da60aca9f2d4bbb19b89372920"),a(m,"Srcery","1c1b19ef2f27519f50fbb8292c78bfe02c6d0aaeb3baa67f918175f7534198bc37fed06e68a8e4ff5c8f2be4d0fce8c3fce8c31c1b19"),a(m,"Starlight","242424f62b5a47b413e3c40124acd4f2affd13c299e6e6e6616161ff4d5135d450e9e8365dc5f8feabf224dfc4ffffffffffff242424"),a(m,"Sublette","253045ee557755ee77ffdd885588ffff77cc44eeeef5f5da405570ee665599ee77ffff7777bbffaa88ff55ffbbffffeeccced0202535"),a(m,"Subliminal","7f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d47f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d4d4d4d4282c35"),a(m,"Sugarplum","1111475ca8dc53b397249a84db7dddd0beeef9f3f9a175d444447a5cb5dc52deb501f5c7fa5dfdc6a5fdffffffb577fddb7ddd111147"),a(m,"Sundried","302b2aa7463d5877449d602a485b988646519c814fc9c9c94d4e48aa000c128c21fc6a217999f7fd8aa1fad484ffffffc9c9c91a1818"),a(m,"Sunset Drive","0a0a13ff006300f992ffe90000a4ffff57fd00ffedededff3e3e4bff948b00fcb9ffff683ea0ffff93ff38fffff8f8ffededfe0f0f1a"),a(m,"Symfonic","000000dc322f56db3aff84000084d4b729d9ccccffffffff414347dc322f56db3aff84000084d4b729d9ccccffffffffffffff000000"),a(m,"Synthwave","000000f6188f1ebb2bfdf8342186ecf85a2112c3e2ffffff7f7094f841a025c141fdf4542f9dedf9713719cde6ffffffdad9c7000000"),a(m,"Synthwave Alpha","241b30e60a7000986cadad3e6e29adb300ad00b0b1b9b1bc7f7094e60a700ae4a4f9f972aa54f9ff00f600fbfdf2f2e3f2f2e3241b30"),a(m,"Synthwave Everything","fefefef97e7272f1b8fede5d6d77b3c792eaf772e0fefefefefefef8841472f1b8fff95136f9f6e1acfff92aadfefefef0eff12a2139"),a(m,"Tango Adapted","000000ff000059d600e3be0000a2ffc17ecc00d0d6c0c5bb8f928bff00136dd900ccbe0088c9ffe9a7e100d8d9f6f6f4000000ffffff"),a(m,"Tango Half Adapted","000000ff00004cc300e2c000008ef6a96cb300bdc3babfb5797d76ff001370dc00d9c60076bfffd898d100d0d4f4f4f2000000ffffff"),a(m,"Tearout","685742cc967b97976d6c9861b5955ec9a554d7c483b5955e75644fcc967b97976d6c9861b5955ec9a554d7c483b5955ef4d2ae34392d"),a(m,"Teerb","1c1c1cd68686aed686d7af8786aed6d6aed68adbb4d0d0d04f4f4fd68686aed686e4c9af86aed6d6aed6b1e7ddefefefd0d0d0262626"),a(m,"Terafox","2f3239e85c517aa4a1fda47f5a93aaad5c7ca1cdd8ebebeb4e5157eb746b8eb2affdb29273a3b7b97490afd4deeeeeeee6eaea152528"),a(m,"Terminal Basic","00000099000000a6009999000000b2b200b200a6b2bfbfbf666666e5000000d900bfbf000000ffe500e500d8d8e5e5e5000000ffffff"),a(m,"Terminal Basic Dark","000000c653396ac44bb8b74a6444edd357db69c1cfd1d1d1909090eb5a3a77ea51efef53d09af9eb5af778f1f2edededffffff1d1e1d"),a(m,"Thayer Bright","1b1d1ef926724df840f4fd222757d68c54fe38c8b5ccccc6505354ff5995b6e354feed6c3f78ff9e6ffe23cfd5f8f8f2f8f8f81b1d1e"),a(m,"The Hulk","1b1d1e269d1b13ce3063e4572525f5712c81378ca9d9d8d15053548dff2a48ff773afe16506b9572589d4085a6e5e6e1b5b5b51b1d1e"),a(m,"Tinacious Design Dark","1d1d26ff339900d364ffcc6600cbffcc66ff00cecacbcbf0636667ff2f9200d364ffd47900cbffd783ff00d5d4d5d6f3cbcbf01d1d26"),a(m,"Tinacious Design Light","1d1d26ff339900d364e5b24d00cbffcc66ff00cecab1b1d6636667ff2f9200d364d9ae5300cbffd783ff00c8c7d5d6f31d1d26f8f8ff"),a(m,"TokyoNight","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"TokyoNight Day","e9e9edf52a655875398c6c3e2e7de99854f10071976172b0a1a6c5f52a655875398c6c3e2e7de99854f10071973760bf3760bfe1e2e7"),a(m,"TokyoNight Moon","1b1d2bff757fc3e88dffc77782aaffc099ff86e1fc828bb8444a73ff757fc3e88dffc77782aaffc099ff86e1fcc8d3f5c8d3f5222436"),a(m,"TokyoNight Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"TokyoNight Storm","1d202ff7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d64e5575f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf524283b"),a(m,"Tomorrow","000000c82829718c00eab7004271ae8959a83e999fbfbfbf000000c82829718c00eab7004271ae8959a83e999fffffff4d4d4cffffff"),a(m,"Tomorrow Night","000000cc6666b5bd68f0c67481a2beb294bb8abeb7ffffff4c4c4ccc6666b5bd68f0c67481a2beb294bb8abeb7ffffffc5c8c61d1f21"),a(m,"Tomorrow Night Blue","000000ff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffff4c4c4cff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffffffffff002451"),a(m,"Tomorrow Night Bright","000000d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffff404040d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffffeaeaea000000"),a(m,"Tomorrow Night Burns","252525832e31a63c40d3494efc595fdf9395ba8586f5f5f55d6f71832e31a63c40d2494efc595fdf9395ba8586f5f5f5a1b0b8151515"),a(m,"Tomorrow Night Eighties","000000f2777a99cc99ffcc666699cccc99cc66ccccffffff595959f2777a99cc99ffcc666699cccc99cc66ccccffffffcccccc2d2d2d"),a(m,"Toy Chest","2c3f58be2d261a9172db8e27325d968a5edc35a08f23d183336889dd594431d07be7d84b34a6daae6bdc42c3aed5d5d531d07b24364b"),a(m,"Treehouse","321300b2270e44a900aa820c58859a97363db25a1e786b53504333ed5d2055f238f2b73285cfede14c5af07d14ffc800786b53191919"),a(m,"Twilight","141414c06d44afb97ac2a86c44474ab4be7c778385ffffd4404040de7c4cccd88ce2c47e5a5e62d0dc8e8a989bffffd4ffffd4141414"),a(m,"Ubuntu","2e3436cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeeceeeeec300a24"),a(m,"Ultra Dark","000000f07178c3e88dffcb6b82aaffc792ea89ddffcccccc404040f6a9aedbf1baffdfa6b4ccffddbdf2b8eaffffffffffffff000000"),a(m,"Ultra Violent","242728ff0090b6ff00fff72747e0fbd731ff0effbbe1e1e1636667fb58b4deff8cebe0877fecffe681ff69fcd3f9f9f5c1c1c1242728"),a(m,"Under The Sea","022026b2302d00a94159819c459a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6ffffff011116"),a(m,"Unikitty","0c0c0ca80f20c7ff98fff964145fcdffe9ff9effeffcf1fb434343d91329d3ffafffef500075eaffefff93ffeffff3fe0b0b0bff8cd9"),a(m,"Urple","000000b0425b37a415ad5c42564d9b6c3ca180808087799c6a3f32ff638829e620f08161867aeda05eeeeaeaeabfa3ff877a9b1b1b23"),a(m,"Vague","252530d8647e7fa563f3be7c6e94b2bb9dbdaeaed1cdcdcd606079e0839899b782f5cb968ba9c1c9b1cabebedad7d7d7cdcdcd141415"),a(m,"Vaughn","25234f70505060b48adfaf8f5555fff08cc38cd0d3709080709080dca3a360b48af0dfaf5555ffec93d393e0e3ffffffdcdccc25234f"),a(m,"Vercel","000000fc003629a948ffae00006afff3288200ac96feffffa8a8a8ff80804be15dffae0049aefff97ea800e4c4fefefefafafa101010"),a(m,"Vesper","101010f5a19190b99fe6b99daca1cfe29ecaea83a5a0a0a07e7e7eff808099ffe4ffc799b9aedaecaad6f591b2ffffffffffff101010"),a(m,"Vibrant Ink","878787ff6600ccff04ffcc0044b4cc9933cc44b4ccf5f5f5555555ff000000ff00ffff000000ffff00ff00ffffe5e5e5ffffff000000"),a(m,"Vimbones","f0f0caa8334c4f6c3194492728648688507d3b8992353535acac8994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535f0f0ca"),a(m,"Violet Dark","56595cc94c2285981cb4881d2e8bced13a8232a198c9c6bd45484bbd3613738a04a577052176c7c61c6f259286c9c6bd7082841c1d1f"),a(m,"Violet Light","56595cc94c2285981cb4881d2e8bced13a8232a198b9b6af45484bbd3613738a04a577052176c7c61c6f259286c9c6bd536870fcf4dc"),a(m,"Violite","241c36ec797979ecb3ece279a979ecec79ec79ececeef4f656447aef8f8f9fefbfefe78fb78fefef8fcf9fefeff8fafceef4f6241c36"),a(m,"Warm Neon","000000e2434639b13adae1454261c5f920fb2abbd4d0b8a3fefcfce970719cc090ddda7a7b91d6f674ba5ed1e5d8c8bbafdab6404040"),a(m,"Wez","000000cc555555cc55cdcd555555cccc55cc7acacacccccc555555ff555555ff55ffff555555ffff55ff55ffffffffffb3b3b3000000"),a(m,"Whimsy","535178ef64875eca89fdd87765aef7aa7ff043c1beffffff535178ef64875eca89fdd87765aef7aa7ff043c1beffffffb3b0d629283b"),a(m,"Wild Cherry","000507d940852ab250ffd16f883cdcecececc1b8b7fff8de009cc9da6bacf4dca5eac066308cbaae636bff919de4838ddafaff1f1726"),a(m,"Wilmersdorf","34373ee063837ebebdcccccca6c1e0e1c1ee5b94abababab50545dfa71938fd7d6d1dfffb2cff0efccfd69abc5d3d3d3c6c6c6282b33"),a(m,"Wombat","000000ff615ab1e969ebd99c5da9f6e86aff82fff7dedacf4a4a4af58c80ddf88feee5b2a5c7ffddaaffb7fff9ffffffdedacf171717"),a(m,"Wryan","3333338c46652873737c7c993955735e468c31658c899ca13d3d3dbf4d8053a6a69e9ecb477ab37e62b36096bfc0c0c0999993101010"),a(m,"Xcode Dark","414453ff817078c2b3d9c97c4eb0ccff7ab2b281ebdfdfe07f8c98ff8170acf2e4ffa14f6bdfffff7ab2dabaffdfdfe0dfdfe0292a30"),a(m,"Xcode Dark hc","43454bff8a7a83c9bcd9c6684ec4e6ff85b8cda1ffffffff838991ff8a7ab1faebffa14f6bdfffff85b8e5cfffffffffffffff1f1f24"),a(m,"Xcode Light","b4d8fdd12f1b3e808778492a0f68a0ad3da4804fb82626268a99a6d12f1b23575c78492a0b4f79ad3da44b21b0262626262626ffffff"),a(m,"Xcode Light hc","b4d8fdad1805355d6178492a0058a19c2191703daa0000008a99a6ad180517414578492a003f739c2191441ea1000000000000ffffff"),a(m,"Xcode WWDC","494d5cbb383a94c66ed28e5d8884c5b7399900aba4e7e8eb7f869ebb383a94c66ed28e5d8884c5b7399900aba4e7e8ebe7e8eb292c36"),a(m,"Zenbones","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(m,"Zenbones Dark","1c1917de6e7c819b69b77e646099c0b279a766a5adb4bdc34d4540e8838f8bae68d68c6761abdacf86c165b8c1888f94b4bdc31c1917"),a(m,"Zenbones Light","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(m,"Zenburn","4d4d4d7d5d5d60b48af0dfaf5d6d7ddc8cc38cd0d3dcdccc709080dca3a3c3bf9fe0cf9f94bff3ec93d393e0e3ffffffdcdccc3f3f3f"),a(m,"Zenburned","404040e3716e819b69b77e646099c0b279a766a5adf0e4cf6f6768ec86858bae68d68c6761abdacf86c165b8c1c0ab86f0e4cf404040"),a(m,"Zenwritten Dark","191919de6e7c819b69b77e646099c0b279a766a5adbbbbbb4a4546e8838f8bae68d68c6761abdacf86c165b8c18e8e8ebbbbbb191919"),a(m,"Zenwritten Light","eeeeeea8334c4f6c3194492728648688507d3b8992353535aca9a994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535eeeeee"),a(m,"branch","35241cc2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9564a45c2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9cfc1a932221a"),a(m,"iTerm2 Dark Background","000000c91b0000c200c7c4000225c7ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffc7c7c7000000"),a(m,"iTerm2 Default","000000c91b0000c200c7c4002225c4ca30c700c5c7ffffff686868ff6e675ffa68fffc676871ffff77ff60fdffffffffffffff000000"),a(m,"iTerm2 Light Background","000000c91b0000c200c7c4000225c7ca30c700c5c7bababa686868ff6e6739d442ccc9346871ffff77ff3ad7d9ffffff000000ffffff"),a(m,"iTerm2 Pastel Dark Background","626262ff8373b4fb73fffdc3a5d5feff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5c2e3ffffb2fee6e6feffffffc7c7c7000000"),a(m,"iTerm2 Smoooooth","14191eb43c2a00c200c7c4002744c7c040be00c5c7c7c7c7686868dd797558e790ece100a7abf2e17ee160fdffffffffdcdcdc15191f"),a(m,"iTerm2 Solarized Dark","073642dc322f859900b58900268bd2d336822aa198eee8d5335e69cb4b16586e75657b838394966c71c493a1a1fdf6e3839496002b36"),a(m,"iTerm2 Solarized Light","073642dc322f859900b58900268bd2d336822aa198bbb5a2002b36cb4b16586e75657b838394966c71c493a1a1fdf6e3657b83fdf6e3"),a(m,"iTerm2 Tango Dark","000000d81e005ea702cfae00427ab389658e00a7aadbded8686a66f5423599e343fdeb6184b0d8bc94b737e6e8f1f1f0ffffff000000"),a(m,"iTerm2 Tango Light","000000d81e005ea702cfae00427ab389658e00a7aac1c4be686a66f542358cd636d7c53b84b0d8bc94b71ecccef1f1f0000000ffffff"),a(m,"novmbr","282a2e9f64349dac5fcca75f2f7d7cb5896e52877fc7b8ac5d4e479f64349dac5fcca75f2f7d7cb5896e52877fc7b8acc7b8ac241d1a"),a(m,"owl","302c2c5a5a5a989898cacaca656565b1b1b17f7f7fdedede5d595bda5b2c989898cacaca656565b1b1b17f7f7fffffffdedede2f2b2c"),a(m,"traffic","282d31934e46637268c79e84515e67715f5e5c6f7dcfb9a84e575e934e46637270c79e84515e67715f5e5c6f7dddcec2cfb9a8272c30"),a(m,"urban","33303b87404f74934eae835a615772854b64625464c0a79a5c586587404f74934eae835a615772854b64625464c0a79ac0a79a312e39"),mg,pg,a(m,"Logoyo Dark","1c1466ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f2f0ff6a63a0ff6b5e6cc04affc83d6ba8f0b57bf058d6c8fffffff2f0ff2a1e80"),a(m,"Logoyo Light","1c1452ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f4f2ff8983b5ff6b5e6cc04affc83d6ba8f0b57bf058d6c8ffffff29216bc5c1fc"),hg,kg,Pg,gg,Sg]),En={$:-2},Fe=En,xU=1,Ae=Te(function(e,r,n,t,o){return{$:-1,a:e,b:r,c:n,d:t,e:o}}),wU=0,oc=Te(function(e,r,n,t,o){if(o.$===-1&&!o.a){var c=o.a,i=o.b,f=o.c,$=o.d,s=o.e;if(t.$===-1&&!t.a){var d=t.a,b=t.b,_=t.c,p=t.d,h=t.e;return I(Ae,0,r,n,I(Ae,1,b,_,p,h),I(Ae,1,i,f,$,s))}else return I(Ae,e,i,f,I(Ae,0,r,n,t,$),s)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){var y=t.a,b=t.b,_=t.c,k=t.d,L=k.a,w=k.b,H=k.c,F=k.d,V=k.e,h=t.e;return I(Ae,0,b,_,I(Ae,1,w,H,F,V),I(Ae,1,r,n,h,o))}else return I(Ae,e,r,n,t,o)}),P0=x(function(e,r,n){if(n.$===-2)return I(Ae,0,e,r,En,En);var t=n.a,o=n.b,c=n.c,i=n.d,f=n.e,$=a(y0,e,o);switch($){case 0:return I(oc,t,o,c,v(P0,e,r,i),f);case 1:return I(Ae,t,o,r,i,f);default:return I(oc,t,o,c,i,v(P0,e,r,f))}}),Pr=x(function(e,r,n){var t=v(P0,e,r,n);if(t.$===-1&&!t.a){var o=t.a,c=t.b,i=t.c,f=t.d,$=t.e;return I(Ae,1,c,i,f,$)}else{var s=t;return s}}),dn=function(e){return v(ve,l(function(r,n){var t=r.a,o=r.b;return v(Pr,t,o,n)}),Fe,e)},ob=J(function(e,r,n,t){if(t.b){var o=t.a,c=t.b;if(c.b){var i=c.a,f=c.b;if(f.b){var $=f.a,s=f.b;if(s.b){var d=s.a,b=s.b,_=n>500?v(ve,e,r,Re(b)):C(ob,e,r,n+1,b);return a(e,o,a(e,i,a(e,$,a(e,d,_))))}else return a(e,o,a(e,i,a(e,$,r)))}else return a(e,o,a(e,i,r))}else return a(e,o,r)}else return r}),Ya=x(function(e,r,n){return C(ob,e,r,0,n)}),N=l(function(e,r){return v(Ya,l(function(n,t){return a(B,e(n),t)}),P,r)}),xg=dn(a(N,function(e){return g(e.r7,e)},tb)),wg=function(e){return a(Ye,e,xg)},jU=R9,LU=G9,cb=x(function(e,r,n){return e<=0?n:v(cb,e>>1,X(r,r),e&1?X(n,r):n)}),cc=l(function(e,r){return v(cb,e,r,"")}),ib=(function(){var e=tb;if(e.b){var r=e.a,n=e.b;return g(r,n)}else return g(a(m,"Fallback",a(cc,108,"0")),P)})(),ne=l(function(e,r){if(r.$)return e;var n=r.a;return n}),S0=function(e){return a(ne,ib.a,wg(e))},fb=(function(){var e=5;return{gx:e,cW:a(Pi,e,S0("Argonaut")),c4:a(Pi,e,S0("Erkal Light")),dz:!1}})(),jg={g5:!0,fC:!0,ds:!0,fD:!0,fE:!1,dt:!0,eo:!0,g6:!0,b9:!0,g7:!0,ha:Kd,bE:!1,e:fb},Lg=jg,S=_9,G=d9,Un=y9,He=x(function(e,r,n){return r(e(n))}),TU=ae,pu=function(e){return{$:0,a:e}},Tg=x(function(e,r,n){e:for(;;){var t=a(h0,Dr,e),o=t.a,c=t.b;if(te(Rn(o),Dr)<0)return a(g0,!0,{ap:r,W:n,af:o});var i=c,f=a(B,ac(o),r),$=n+1;e=i,r=f,n=$;continue e}}),ki=function(e){return e.b?v(Tg,e,P,0):p0},zg=l(function(e,r){return{lD:e,c1:P,aw:0,jZ:ki(r),dM:pu({eS:0,eZ:0})}}),Mg={$:0},ub=Mg,Dg=l(function(e,r){return g(a(zg,a(He,function(n){return n.dG},function(n){return n.uM}),u([a(He,function(n){return n.dG},function(n){return n.s4}),a(He,function(n){return n.dG},function(n){return n.q_}),a(He,function(n){return n.dG},function(n){return n.pa}),a(He,function(n){return n.dG},function(n){return n.rH}),a(He,function(n){return n.dG},function(n){return n.pV}),a(He,function(n){return n.dG},function(n){return n.pk})])),ub)}),Bg=l(function(e,r){return{a8:r,r7:e}}),Ag=l(function(e,r){return a(Bg,e,r)}),Hg=Ag,Ig={gA:.2,bO:.35,iU:.3,eI:6,jR:6,j4:.1,j5:.5},k0=l(function(e,r){return{$:0,a:e,b:r}}),ic=x(function(e,r,n){var t=r.a,o=r.b;return g(e,a(k0,g(t,o),n))}),x0=l(function(e,r){return{$:2,a:e,b:r}}),Vg=x(function(e,r,n){var t=r.a,o=r.b;return g(e,a(x0,g(t,o),n))}),_a={gA:"arrow kick fraction \u2014 share of max speed when \u2190/\u2192 is pressed",bO:"card spacing \u2014 gap between adjacent card centres on the rail",iU:"fling projection time \u2014 seconds of pointer inertia projected on release",eI:"max coast speed \u2014 hard cap on rail speed (world units per second)",jR:"pointer sample window \u2014 frames of pointer history used to estimate fling speed",j4:"snap stiffness \u2014 per-frame fraction of remaining distance closed while snapping",j5:"snap zone fraction \u2014 within this fraction of card spacing, lerp to the target"},Rg=(function(){var e=Ig;return u([a(Hg,"Carousel physics",u([v(ic,_a.bO,g(.1,1),e.bO),v(ic,_a.gA,g(.05,1),e.gA),v(ic,_a.iU,g(.05,1.5),e.iU),v(Vg,_a.jR,g(2,30),e.jR),v(ic,_a.eI,g(1,20),e.eI),v(ic,_a.j5,g(.1,1),e.j5),v(ic,_a.j4,g(.02,.5),e.j4)]))])})(),xi=v9,ur=p9,Qe=k9,fc=g9,lo=function(e){e:for(;;){var r=e,n=r;e=n;continue e}},Fg=J(function(e,r,n,t){return lo(n)}),Ir=A6,hu=l(function(e,r){return e*Ir(r/e)}),zU=function(e){return-e},Eg=l(function(e,r){var n=r;return A(n,{dM:pu({eS:e.gA*-e.eI,eZ:a(hu,e.bO,n.aw-e.bO)})})}),Ug=l(function(e,r){var n=r;return A(n,{dM:pu({eS:e.gA*e.eI,eZ:a(hu,e.bO,n.aw+e.bO)})})}),Gg=l(function(e,r){var n=r.mm;return n.eB?Ug(e):n.j_?Eg(e):ae}),gu=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b,o=e(n);if(o.$){var i=e,f=t;e=i,r=f;continue e}else{var c=o.a;return D(c)}}else return z}),qg=l(function(e,r){return a(gu,function(n){var t=n.a,o=n.b,c=g(fe(t,e),o);if(c.a&&!c.b.$){var i=c.b,f=i.b;return D(f)}else return z},r.a8)}),Wg=l(function(e,r){return a(ne,0,a(gu,qg(e),r))}),Ng=l(function(e,r){return a(Wg,e,r.b2)}),uc=Ng,Qg=l(function(e,r){return a(gu,function(n){var t=n.a,o=n.b,c=g(fe(t,e),o);if(c.a&&c.b.$===2){var i=c.b,f=i.b;return D(f)}else return z},r.a8)}),Og=l(function(e,r){return a(ne,0,a(gu,Qg(e),r))}),Jg=l(function(e,r){return a(Og,e,r.b2)}),Xg=Jg,$b=function(e){return{gA:a(uc,_a.gA,e),bO:a(uc,_a.bO,e),iU:a(uc,_a.iU,e),eI:a(uc,_a.eI,e),jR:a(Xg,_a.jR,e),j4:a(uc,_a.j4,e),j5:a(uc,_a.j5,e)}},Zg=function(e){return{qz:e.qz,qH:e.qH,s$:e.s$,uf:e.uf}},Yg=function(e){return{$:0,a:e}},Kg=L6,e_=Yg({em:2*Kg(.5)}),lb=Zg({qz:{kB:0,cQ:-.2,ic:1},qH:{kB:0,cQ:0,ic:0},s$:e_,uf:{kB:0,cQ:1,ic:0}}),r_=l(function(e,r){return A(r,{kB:r.kB+.5*e.ia,cQ:-r.cQ+.5*e.g8})}),a_=function(e){return a(r_,e.f3,{kB:e.fY.kB,cQ:e.fY.cQ})},n_=a_,Xr=x(function(e,r,n){return{kB:e,cQ:r,ic:n}}),t_={m9:R(0,0,1),aY:v(Xr,0,0,0)},xe=function(e){return e<0?-e:e},w0=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return n*c+t*i+o*f}),Ta=l(function(e,r){var n=r.a,t=r.b,o=r.c;return R(e*n,e*t,e*o)}),vo=l(function(e,r){var n=e.a,t=e.b,o=e.c;return{kB:r.kB+n,cQ:r.cQ+t,ic:r.ic+o}}),vb=l(function(e,r){return R(r.kB-e.kB,r.cQ-e.cQ,r.ic-e.ic)}),o_=l(function(e,r){var n=a(w0,e.eb,r.m9);if(xe(n)<1e-10)return z;var t=a(vb,e.aY,r.aY),o=a(w0,t,r.m9)/n;return D(a(vo,a(Ta,o,e.eb),e.aY))}),j0=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return R(t*f-o*i,o*c-n*f,n*i-t*c)}),bn=y6,mn=H6,sb=function(e){var r=e.a,n=e.b,t=e.c;return mn(a(bn,r,2)+a(bn,n,2)+a(bn,t,2))},wi=function(e){var r=sb(e);return a(Ta,1/r,e)},c_=function(e){return R(e.kB,e.cQ,e.ic)},i_=function(e){var r=c_(e.uf),n=wi(a(vb,e.qz,e.qH)),t=wi(a(j0,n,r)),o=a(j0,t,n);return{iV:n,jV:o,j_:t}},ji=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return R(n+c,t+i,o+f)}),f_=a(ve,ji,R(0,0,0)),db=w6,u_=l(function(e,r){var n=r.kB,t=r.cQ;return g(2*n/e.ia-1,1-2*t/e.g8)}),$_=x(function(e,r,n){var t=r.ia/r.g8,o=a(u_,r,n),c=o.a,i=o.b,f=i_(e),$=f.j_,s=f.jV,d=f.iV,b=e.s$;if(b.$){var k=b.a.oB,p=k/2,h=p*t,L=a(vo,a(Ta,i*p,s),a(vo,a(Ta,c*h,$),e.qz));return{eb:wi(d),aY:L}}else{var _=b.a.em,p=db(_/2),h=p*t,y=wi(f_(u([d,a(Ta,c*h,$),a(Ta,i*p,s)])));return{eb:y,aY:e.qz}}}),l_=J(function(e,r,n,t){return a(o_,v($_,r,n,t),e)}),v_=l_(t_),bb=l(function(e,r){return e?r:ae}),s_=x(function(e,r,n){var t=e.fY,o=r.nu,c=r.nD,i=n;return A(i,{aw:c-(o-t.kB)})}),d_=Te(function(e,r,n,t,o){var c=o;return te(xe(n-c.aw),e.j5*e.bO)<0?A(c,{aw:c.aw+e.j4*(n-c.aw)}):A(c,{aw:c.aw+r*t})}),L0=V6,b_=function(e){var r=e;return A(r,{c1:P})},m_=function(e){return{$:1,a:e}},p_=l(function(e,r){var n=r;return A(n,{dM:m_({nu:e.fY.kB,nD:n.aw})})}),Sr=function(e){if(e.b){var r=e.a,n=e.b;return D(r)}else return z},de=l(function(e,r){if(r.$)return z;var n=r.a;return D(e(n))}),h_=function(e){return v(ve,Nd,0,e)},g_=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,o=r.b,c=e-1,i=o,f=a(B,t,n);e=c,r=i,n=f;continue e}else return n}}),__=l(function(e,r){return Re(v(g_,e,r,P))}),mb=x(function(e,r,n){if(r<=0)return P;var t=g(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,w=o.a,c=o.b,i=c.a;return u([w,i]);case 3:if(t.b.b.b.b){var f=t.b,w=f.a,$=f.b,i=$.a,s=$.b,d=s.a;return u([w,i,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var b=t.b,w=b.a,_=b.b,i=_.a,p=_.b,d=p.a,h=p.b,y=h.a,k=h.b;return e>1e3?a(B,w,a(B,i,a(B,d,a(B,y,a(__,r-4,k))))):a(B,w,a(B,i,a(B,d,a(B,y,v(mb,e+1,r-4,k)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var L=t.b,w=L.a;return u([w])}),Gn=l(function(e,r){return v(mb,0,e,r)}),y_=l(function(e,r){var n=r,t=h_(a(Gn,Cr(n.c1)-1,a(N,function(s){return s.lj},n.c1))),o=g(a(ne,0,a(de,function(s){return s.jS},Sr(n.c1))),a(ne,0,a(de,function(s){return s.jS},Sr(Re(n.c1))))),c=o.a,i=o.b,f=c-i,$=t?f/t:0;return A(n,{dM:pu({eS:v(mr,-e.eI,e.eI,$),eZ:a(hu,e.bO,n.aw+e.iU*$)})})}),C_=x(function(e,r,n){var t=r.lo,o=r.fY,c=n;return A(c,{c1:a(Gn,e.jR,a(B,{lj:t,jS:o.kB},c.c1))})}),P_=x(function(e,r,n){var t=n,o=t.dM;if(o.$===1){var c=o.a;return v(bb,!r.fY.mb,y_(e),v(s_,r,c,v(C_,e,r,t)))}else{var i=o.a.eZ,f=o.a.eS;return I(d_,e,r.lo,i,f,v(bb,r.fY.mb,p_(r),b_(t)))}}),S_=x(function(e,r,n){var t=r.fY,o=a(ne,{kB:0,cQ:0,ic:0},v(v_,lb,r.f3,n_(r))),c=o.kB,i=o.cQ,f=A(r,{fY:A(t,{kB:c,cQ:i})});return v(P_,e,f,n)}),k_=x(function(e,r,n){var t=$b(e);return g(v(S_,t,e,v(Gg,t,e,n)),ub)}),so=S9,x_={jE:P,om:P},fa=ad,ue=fa(P),Li=ad,ft=Li(P),qn=x9,ee=$9,T0=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},pn=qa("div"),pb=d7,Z=pb,_u=function(e){return{$:0,a:e}},w_=J(function(e,r,n,t){return{d2:t,ep:n,nV:r,tu:e}}),hb=3432918353,gb=461845907,MU=U9,DU=q9,bo=l(function(e,r){return(r&65535)*e+(((r>>>16)*e&65535)<<16)}),BU=F9,z0=l(function(e,r){return r<<e|r>>>32-e}),AU=E9,j_=function(e){var r=e.ep?e.nV^a(bo,gb,a(z0,15,a(bo,hb,e.ep))):e.nV,n=r^e.d2,t=a(bo,2246822507,n^n>>>16),o=a(bo,3266489909,t^t>>>13);return(o^o>>>16)>>>0},L_=N6,T_=l(function(e,r){return a(bo,5,a(z0,13,e^a(bo,gb,a(z0,15,a(bo,hb,r)))))+3864292196}),z_=l(function(e,r){var n=r.ep|(255&it(e))<<r.tu,t=r.tu;return t===24?{d2:r.d2+1,ep:0,nV:a(T_,r.nV,n),tu:0}:{d2:r.d2+1,ep:n,nV:r.nV,tu:r.tu+8}}),M_=l(function(e,r){return j_(v(L_,z_,C(w_,0,e,0,0),r))}),D_=15739,B_=c9,Zr=P6,_b=function(e){e:for(;;)switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";case 15:return"f";default:var r=e;e=r;continue e}},yb=l(function(e,r){e:for(;;){if(r<16)return a(B,_b(r),e);var n=a(B,_b(a(Zr,16,r)),e),t=r/16|0;e=n,r=t;continue e}}),A_=function(e){return B_(e<0?a(B,"-",a(yb,P,-e)):a(yb,P,e))},Cb=function(e){return a(mu,"_",A_(a(M_,D_,e)))},Ka=l(function(e,r){var n=e.b,t=e.c;if(n){var o=a(Ye,t,r);return o.$?v(Pr,t,Cb(t),r):r}else return r}),M0=l(function(e,r){return a(vd,g7(e),_7(r))}),Rr=Ul,Ft=l(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(Ye,o,e);if(c.$)return a(M0,"className",Rr("_unstyled"));var i=c.a;return a(M0,"className",Rr(i))}else return n}),hn=l(function(e,r){return a(iu,sd(e),dd(r))}),yu=l(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(Ye,o,e);if(c.$)return a(hn,"class","_unstyled");var i=c.a;return a(hn,"class",i)}else return n}),Cu=function(e){return l7(fu(e))},D0=l(function(e,r){return a($d,e,fu(r))}),mo=function(e){return qa(fu(e))},B0=l(function(e,r){return a(ud,e,fu(r))}),$c=l(function(e,r){var n=e.a,t=e.b,o=r.a,c=r.b;switch(t.$){case 4:var L=t.a;return g(a(B,g(n,L),o),c);case 0:var d=t.a,b=t.b,_=t.c,p=v(ve,Ka,c,b),i=v(ve,lc,g(P,p),_),y=i.a,k=i.b,L=v(mo,d,a(N,Ft(k),b),Re(y));return g(a(B,g(n,L),o),k);case 1:var s=t.a,d=t.b,b=t.c,_=t.d,p=v(ve,Ka,c,b),f=v(ve,lc,g(P,p),_),y=f.a,k=f.b,L=C(B0,s,d,a(N,Ft(k),b),Re(y));return g(a(B,g(n,L),o),k);case 2:var d=t.a,b=t.b,_=t.c,p=v(ve,Ka,c,b),$=v(ve,$c,g(P,p),_),y=$.a,k=$.b,L=v(Cu,d,a(N,Ft(k),b),Re(y));return g(a(B,g(n,L),o),k);default:var s=t.a,d=t.b,b=t.c,_=t.d,p=v(ve,Ka,c,b),h=v(ve,$c,g(P,p),_),y=h.a,k=h.b,L=C(D0,s,d,a(N,Ft(k),b),Re(y));return g(a(B,g(n,L),o),k)}}),lc=l(function(e,r){var n=r.a,t=r.b;switch(e.$){case 4:var y=e.a;return g(a(B,y,n),t);case 0:var $=e.a,s=e.b,d=e.c,b=v(ve,Ka,t,s),o=v(ve,lc,g(P,b),d),p=o.a,h=o.b,y=v(mo,$,a(N,Ft(h),s),Re(p));return g(a(B,y,n),h);case 1:var f=e.a,$=e.b,s=e.c,d=e.d,b=v(ve,Ka,t,s),c=v(ve,lc,g(P,b),d),p=c.a,h=c.b,y=C(B0,f,$,a(N,yu(h),s),Re(p));return g(a(B,y,n),h);case 2:var $=e.a,s=e.b,d=e.c,b=v(ve,Ka,t,s),i=v(ve,$c,g(P,b),d),p=i.a,h=i.b,y=v(Cu,$,a(N,Ft(h),s),Re(p));return g(a(B,y,n),h);default:var f=e.a,$=e.b,s=e.c,d=e.d,b=v(ve,Ka,t,s),_=v(ve,$c,g(P,b),d),p=_.a,h=_.b,y=C(D0,f,$,a(N,yu(h),s),Re(p));return g(a(B,y,n),h)}}),Ti=function(e){return u([e])},Pu=e0,po=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,f=e,$=v(e,t,o,v(po,e,r,c)),s=i;e=f,r=$,n=s;continue e}}),A0="\x07",Pb=x(function(e,r,n){return a(Mr,r,a($n,e,n))}),H_=x(function(e,r,n){return n+(`
`+v(Pb,A0,r,e))}),I_=function(e){return v(po,H_,"",e)},Sb=l(function(e,r){return v(po,x(function(n,t,o){return o+(`
`+v(Pb,"."+A0,"#"+(e+("."+t)),n))}),"",r)}),H0=l(function(e,r){var n=(function(){if(r.$){var o=r.a,c=r.b,i=r.c;return a(Sb,o,c)+(`
`+a(Sb,o+" ",i))}else{var t=r.a;return I_(t)}})();return v(mo,"span",u([a(hn,"style","display: none;"),a(hn,"class","elm-css-style-wrapper")]),u([v(mo,"style",(function(){if(e.$)return P;var t=e.a;return u([a(hn,"nonce",t)])})(),Ti(Pu(n)))]))}),V_=J(function(e,r,n,t){var o=v(ve,Ka,Fe,n),c=v(ve,lc,g(P,o),t),i=c.a,f=c.b,$=a(H0,e,_u(f)),s=a(N,Ft(f),n);return v(mo,r,s,a(B,$,Re(i)))}),R_=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b;if(fe(e,t))return!0;var c=e,i=o;e=c,r=i;continue e}else return!1}),F_=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b,c="_"+t;if(a(R_,c,o)){var i=c,f=o;e=i,r=f;continue e}else return c}else return e}),kb=x(function(e,r,n){var t=a(F_,"_",n),o=a(H0,e,r);return g(t,o)}),E_=J(function(e,r,n,t){var o=v(ve,Ka,Fe,n),c=v(ve,$c,g(P,o),t),i=c.a,f=c.b,$=v(kb,e,_u(f),i),s=a(N,Ft(f),n);return v(Cu,r,s,a(B,$,Re(i)))}),U_=Te(function(e,r,n,t,o){var c=v(ve,Ka,Fe,t),i=v(ve,$c,g(P,c),o),f=i.a,$=i.b,s=v(kb,e,_u($),f),d=a(N,yu($),t);return C(D0,r,n,d,a(B,s,Re(f)))}),G_=Te(function(e,r,n,t,o){var c=v(ve,Ka,Fe,t),i=v(ve,lc,g(P,c),o),f=i.a,$=i.b,s=a(H0,e,_u($)),d=a(N,yu($),t);return C(B0,r,n,d,a(B,s,Re(f)))}),q_=function(e){switch(e.$){case 4:var r=e.a;return r;case 0:var t=e.a,o=e.b,c=e.c;return C(V_,z,t,o,c);case 1:var n=e.a,t=e.b,o=e.c,c=e.d;return I(G_,z,n,t,o,c);case 2:var t=e.a,o=e.b,c=e.c;return C(E_,z,t,o,c);default:var n=e.a,t=e.b,o=e.c,c=e.d;return I(U_,z,n,t,o,c)}},Su=q_,W_=function(e){return a(pn,u([a(Z,"position","fixed"),a(Z,"inset","0"),a(Z,"overflow","clip"),a(Z,"background-color","transparent")]),u([Su(e)]))},Fr=Pu,N_=function(e){var r=e.cI;if(r.b){var n=r.a,t=n.b;return a(pn,u([a(Z,"position","fixed"),a(Z,"inset","0"),a(Z,"background-color","transparent"),a(Z,"overflow","clip")]),u([t]))}else return Fr("")},I0=function(e){var r=e.a,n=e.b;return R(r,n,P)},Q_=function(e){return{oK:e.oK,a6:{sr:Te(function(r,n,t,o,c){return I0(C(e.sr,r,t,o,c))}),sv:J(function(r,n,t,o){return I0(v(e.sv,r,t,o))}),cf:J(function(r,n,t,o){return v(e.cf,r,t,o)}),aA:J(function(r,n,t,o){return v(e.aA,r,t,o)}),uq:J(function(r,n,t,o){return W_(v(e.uq,r,t,o))})},aC:J(function(r,n,t,o){return v(e.aC,r,t,o)}),ra:e.ra,i$:function(r){return x_},rk:e.rk,eu:function(r){return 0},cI:u([{aC:P,by:"play",rj:x(function(r,n,t){return I0(a(e.rj,r,t))}),rk:e.rk,eR:!1}]),rz:N_,eT:l(function(r,n){return g(0,ue)}),aA:function(r){return ft},h3:z,e6:function(r){return P}}},O_=function(e){return{$:1,a:e}},J_=function(e){return{$:0,a:e}},X_=ae,HU=0,IU=1,xb=zr(function(e,r,n,t,o,c){return{lL:c,lW:r,no:t,nv:n,nB:e,nC:o}}),wb=e9,ku=n9,ho=function(e){return e===""},zi=l(function(e,r){return e<1?"":v(Xa,0,e,r)}),Mi=t9,jb=Te(function(e,r,n,t,o){if(ho(o)||a(wb,"@",o))return z;var c=a(ku,":",o);if(c.b){if(c.b.b)return z;var i=c.a,f=Mi(a(Za,i+1,o));if(f.$===1)return z;var $=f;return D(yr(xb,e,a(zi,i,o),$,r,n,t))}else return D(yr(xb,e,o,z,r,n,t))}),Lb=J(function(e,r,n,t){if(ho(t))return z;var o=a(ku,"/",t);if(o.b){var c=o.a;return I(jb,e,a(Za,c,t),r,n,a(zi,c,t))}else return I(jb,e,"/",r,n,t)}),Tb=x(function(e,r,n){if(ho(n))return z;var t=a(ku,"?",n);if(t.b){var o=t.a;return C(Lb,e,D(a(Za,o+1,n)),r,a(zi,o,n))}else return C(Lb,e,z,r,n)}),zb=l(function(e,r){if(ho(r))return z;var n=a(ku,"#",r);if(n.b){var t=n.a;return v(Tb,e,D(a(Za,t+1,r)),a(zi,t,r))}else return v(Tb,e,z,r)}),Mb=function(e){return a(Fn,"http://",e)?a(zb,0,a(Za,7,e)):a(Fn,"https://",e)?a(zb,1,a(Za,8,e)):z},VU=ae,ya=Ga,Z_=ya(0),ua=ql,Di=l(function(e,r){return a(ua,function(n){return ya(e(n))},r)}),Y_=x(function(e,r,n){return a(ua,function(t){return a(ua,function(o){return ya(a(e,t,o))},n)},r)}),Bi=function(e){return v(Ya,Y_(B),ya(P),e)},xu=r7,K_=l(function(e,r){var n=r;return Nl(a(ua,xu(e),n))}),ey=x(function(e,r,n){return a(Di,function(t){return 0},Bi(a(N,K_(e),r)))}),ry=x(function(e,r,n){return ya(0)}),ay=l(function(e,r){var n=r;return a(Di,e,n)});Qr.Task=Xl(Z_,ey,ry,ay);var Db=bi("Task"),Ai=l(function(e,r){return Db(a(Di,e,r))}),ny=F7,wu=function(e){return{$:9,a:e}},Yr=l(function(e,r){if(r.$)return z;var n=r.a;return e(n)}),ty=function(e){return{$:3,a:e}},vc=nd,ju=x(function(e,r,n){return v(ve,l(function(t,o){var c=o.a,i=o.b,f=a(e.eT,t,c),$=f.a,s=f.b;return g($,fa(u([i,a(vc,ty,s)])))}),g(n,ue),r)}),oy=function(e){switch(e){case"true":return D(!0);case"false":return D(!1);default:return z}},cy=function(e){return{$:1,a:e}},iy={$:0},fy=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Bb=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,f=o.c,$=o.d,s=o.e,d=e.e,b=d.a,_=d.b,p=d.c,h=d.d,y=h.a,k=h.b,L=h.c,w=h.d,H=h.e,F=d.e;return I(Ae,0,k,L,I(Ae,1,n,t,I(Ae,0,i,f,$,s),w),I(Ae,1,_,p,H,F))}else{var r=e.a,n=e.b,t=e.c,V=e.d,c=V.a,i=V.b,f=V.c,$=V.d,s=V.e,q=e.e,b=q.a,_=q.b,p=q.c,h=q.d,F=q.e;return I(Ae,1,n,t,I(Ae,0,i,f,$,s),I(Ae,0,_,p,h,F))}else return e},Ab=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,f=o.c,$=o.d,s=$.a,d=$.b,b=$.c,_=$.d,p=$.e,h=o.e,y=e.e,k=y.a,L=y.b,w=y.c,H=y.d,F=y.e;return I(Ae,0,i,f,I(Ae,1,d,b,_,p),I(Ae,1,n,t,h,I(Ae,0,L,w,H,F)))}else{var r=e.a,n=e.b,t=e.c,V=e.d,c=V.a,i=V.b,f=V.c,q=V.d,h=V.e,O=e.e,k=O.a,L=O.b,w=O.c,H=O.d,F=O.e;return I(Ae,1,n,t,I(Ae,0,i,f,q,h),I(Ae,0,L,w,H,F))}else return e},uy=zt(function(e,r,n,t,o,c,i){if(c.$===-1&&!c.a){var f=c.a,$=c.b,s=c.c,d=c.d,b=c.e;return I(Ae,n,$,s,d,I(Ae,0,t,o,b,i))}else{e:for(;;)if(i.$===-1&&i.a===1)if(i.d.$===-1)if(i.d.a===1){var _=i.a,p=i.d,h=p.a;return Ab(r)}else break e;else{var y=i.a,k=i.d;return Ab(r)}else break e;return r}}),Lu=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.d,f=e.e;if(c===1)if(i.$===-1&&!i.a){var $=i.a;return I(Ae,r,n,t,Lu(o),f)}else{var s=Bb(e);if(s.$===-1){var d=s.a,b=s.b,_=s.c,p=s.d,h=s.e;return I(oc,d,b,_,Lu(p),h)}else return En}else return I(Ae,r,n,t,Lu(o),f)}else return En},Hi=l(function(e,r){if(r.$===-2)return En;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(te(e,t)<0)if(c.$===-1&&c.a===1){var f=c.a,$=c.d;if($.$===-1&&!$.a){var s=$.a;return I(Ae,n,t,o,a(Hi,e,c),i)}else{var d=Bb(r);if(d.$===-1){var b=d.a,_=d.b,p=d.c,h=d.d,y=d.e;return I(oc,b,_,p,a(Hi,e,h),y)}else return En}}else return I(Ae,n,t,o,a(Hi,e,c),i);else return a($y,e,Wr(uy,e,r,n,t,o,c,i))}),$y=l(function(e,r){if(r.$===-1){var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(fe(e,t)){var f=fy(i);if(f.$===-1){var $=f.b,s=f.c;return I(oc,n,$,s,c,Lu(i))}else return En}else return I(oc,n,t,o,c,a(Hi,e,i))}else return En}),Hb=l(function(e,r){var n=a(Hi,e,r);if(n.$===-1&&!n.a){var t=n.a,o=n.b,c=n.c,i=n.d,f=n.e;return I(Ae,1,o,c,i,f)}else{var $=n;return $}}),Et=x(function(e,r,n){var t=r(a(Ye,e,n));if(t.$)return a(Hb,e,n);var o=t.a;return v(Pr,e,o,n)}),ly=function(e){return a(Et,e,a(He,ne(0),a(He,Nd(1),D)))},vy=l(function(e,r){return v(po,x(function(n,t,o){return a(e,n,t)?v(Pr,n,t,o):o}),Fe,r)}),sy=function(e){if(e.b){var r=su(a(vy,l(function(n,t){return t>1}),v(ve,l(function(n,t){return a(ly,n.by,t)}),Fe,e)));return r.b?D(cy(r)):z}else return D(iy)},dy=function(e){return e?"true":"false"},V0=l(function(e,r){return r.b?v(Ya,B,r,e):e}),gn=function(e){return v(Ya,V0,P,e)},_n=l(function(e,r){return gn(a(N,e,r))}),go=4294967295>>>32-ln,RU=f6,Ii=O8,by=x(function(e,r,n){e:for(;;){var t=go&r>>>e,o=a(Ii,t,n);if(o.$){var s=o.a;return a(Ii,go&r,s)}else{var c=o.a,i=e-ln,f=r,$=c;e=i,r=f,n=$;continue e}}}),Ib=function(e){return e>>>5<<5},$a=l(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d;return e<0||te(e,n)>-1?z:te(e,Ib(n))>-1?D(a(Ii,go&e,c)):D(v(by,t,e,o))}),Vb=function(e){var r=e;return a(ne,r.nV,a($a,a(Zr,r.cx,r.dc+r.aQ),r.en))},_o=function(e){if(e.$){var n=e.a;return a(ne,n.nV,a($a,n.aQ,n.en))}else{var r=e.a;return Vb(r)}},Tu=function(e){var r=e.b;return r},sc=function(e){var r=e.b;return _o(r).b},dc=function(e){return e.m$},yn=function(e){return e.e},my=function(e){return e.S},W=Zs,Rb=function(e){var r=e;return a(N,function(n){var t=n.a,o=n.b;return g(r.rd(t)+"Off",W(o.kB)+(","+W(o.cQ)))},r.cK)},py=function(e){return Rb(e.f)},hy=function(e){return e?"landscape":"portrait"},gy=function(e){var r=e;return r.cA.r7+("|"+hy(r.dF))},Ut=l(function(e,r){return v(ve,I9(e),B9(0),r)}),Fb=function(e){return a(Qd,0,a(Ut,function(r){var n=r.a,t=r.b;return a(Ut,Rr,u([n,t]))},e))},zu=function(e){return"play:"+e},Eb=function(e){switch(e){case 0:return"hudConfigurations";case 1:return"hudInputs";case 2:return"hudFpsMeter";case 3:return"hudProfiler";case 4:return"hudTape";case 5:return"hudPalette";case 6:return"hudCommandPalette";default:return"hudDevice"}},R0=function(e){var r=e;return r.aK},FU=0,EU=7,UU=2,GU=1,qU=5,kr=l(function(e,r){return v(Ya,l(function(n,t){return e(n)?a(B,n,t):t}),P,r)}),Mu=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var o=e,c=t;e=o,r=c;continue e}else return!1}),Vi=l(function(e,r){return a(Mu,function(n){return fe(n,e)},r)}),Ub=function(e){return a(kr,function(r){return a(Vi,r,e)},u([0,1,2,5,7]))},_y=function(e){return a(Mr,",",a(N,Eb,Ub(R0(e.f))))},Wn=l(function(e,r){return"play:"+(r+(":"+e))}),yy=function(e){return e.bE},Gb=function(e){var r=e;return r.gx},Cy=function(e){var r=e;return r.cW.dG.r7},Du=function(e){var r=e;return r.dz},Py=function(e){var r=e;return r.c4.dG.r7},qb=function(e){switch(e){case 0:return"Red";case 1:return"Green";case 2:return"Yellow";case 3:return"Blue";case 4:return"Magenta";default:return"Cyan"}},Sy=function(e){return a(Mr,"|",u([Cy(e),Py(e),Du(e)?"1":"0",qb(Gb(e))]))},Wb=function(e){switch(e){case 0:return"User";case 1:return"Author";default:return"Developer"}},Nb=l(function(e,r){var n=sc(r.tX),t=a(_n,function(o){var c=a(Ye,o.by,n.cI);if(c.$)return P;var i=c.a;return Rb(i.hD)},e.cI);return u([g(zu("hud-panel-layout"),Fb(py(r.ra))),g(a(Wn,r.sD,"panel-layout"),Fb(t)),g(zu("mode"),Wb(dc(r.ra))),g(a(Wn,r.sD,"theme"),Sy(yn(r.ra))),g(a(Wn,r.sD,"device"),gy(my(r.ra))),g(a(Wn,r.sD,"hud-open-panels"),_y(r.ra)),g(a(Wn,r.sD,"tape-record-from-start"),dy(yy(r.ra)))])}),WU=ae,NU=1,QU=0,OU=2,F0=u([{aD:0,r7:"iPhone SE",Z:{g8:667,ia:375}},{aD:0,r7:"iPhone 12 Pro",Z:{g8:844,ia:390}},{aD:0,r7:"iPhone 14 Pro Max",Z:{g8:932,ia:430}},{aD:0,r7:"Pixel 7",Z:{g8:915,ia:412}},{aD:0,r7:"Samsung Galaxy S20 Ultra",Z:{g8:915,ia:412}},{aD:0,r7:"Samsung Galaxy S8+",Z:{g8:740,ia:360}},{aD:1,r7:"Galaxy Z Fold 5",Z:{g8:882,ia:344}},{aD:1,r7:"Surface Duo",Z:{g8:720,ia:540}},{aD:2,r7:"iPad Mini",Z:{g8:1024,ia:768}},{aD:2,r7:"iPad Air",Z:{g8:1180,ia:820}},{aD:2,r7:"iPad Pro",Z:{g8:1366,ia:1024}},{aD:2,r7:"Surface Pro 7",Z:{g8:1368,ia:912}}]),ky=function(e){return Sr(a(kr,function(r){return fe(r.r7,e)},F0))},JU=ae,XU=ae,Qb=14,xy=8,wy=function(e){return e===" "||e==="	"||e==="/"||e==="."||e===":"||e===";"||e===","||e==="|"||e==="\\"||e==="_"||e==="-"||e==="*"},jy=function(e){var r=it(e);return r>=97&&r<=122},Ly=function(e){var r=it(e);return r>=65&&r<=90},Ty=x(function(e,r,n){e:for(;;)if(r.b){var t=r.a,o=r.b,c=wy(e)?Qb:jy(e)&&Ly(t)?xy:0,i=t,f=o,$=a(B,c,n);e=i,r=f,n=$;continue e}else return Re(n)}),zy=function(e){if(e.b){var r=e.a,n=e.b;return a(B,Qb,v(Ty,r,n,P))}else return P},E0=u9,My=function(e){var r=Si(e),n=a(N,E0,r);return{kV:zy(r),je:n}},Bu=l(function(e,r){return{aR:r,et:z,aU:!1,hG:a(N,function(n){return g(n,My(e(n)))},r),bT:0,hT:"",ax:0}}),U0=x(function(e,r,n){if(r.$===1)return z;var t=r.a;if(n.$===1)return z;var o=n.a;return D(a(e,t,o))}),ZU=1,YU=0,Dy=function(e){switch(e){case"portrait":return D(0);case"landscape":return D(1);default:return z}},By=x(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b;if(r(t))return D(e);var c=e+1,i=r,f=o;e=c,r=i,n=f;continue e}else return z}),Au=By(0),Hu=function(e){return Au(Na(e))},Ri=l(function(e,r){var n=r;return A(n,{et:e,ax:a(ne,n.ax,a(Yr,function(t){return a(Hu,t,n.aR)},e))})}),Ay=function(e){var r=a($n,"|",e);if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a;return v(U0,l(function(c,i){return{cA:c,dF:i,bg:a(Ri,D(c),a(Bu,function(f){return f.r7},F0))}}),ky(n),Dy(o))}else return z},Hy=z9,Fi=l(function(e,r){return g(e,r)}),Pe=m9,Ob=function(e){return a(nb,P,a(Hy,ur(v(qn,Fi,a(Un,0,Pe),a(Un,1,Pe))),e))},KU=ae,Iu=Fe,Jb=l(function(e,r){var n=r;return v(Pr,e,0,n)}),Vu=l(function(e,r){var n=a(Ye,e,r);return!n.$}),Xb=l(function(e,r){var n=r;return a(Vu,e,n)}),Iy=function(e){return Re(v(ve,l(function(r,n){var t=n.a,o=n.b;return a(Xb,r,t)?g(t,o):g(a(Jb,r,t),a(B,r,o))}),g(Iu,P),e).b)},Vy=function(e){return{$:0,a:e}},Ry=3600,Fy=Vy(Ry),eG=1,rG=2,Ey=function(e){switch(e){case"User":return D(0);case"Author":return D(1);case"Developer":return D(2);default:return z}},G0=function(e){return{$:4,a:e}},Zb=function(e){return{$:3,a:e}},Yb=function(e){return{$:5,a:e}},Kb=function(e){return{$:1,a:e}},aG=ae,Gt=l(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){var n=r.a,t=r.b,o=e-1,c=t;e=o,r=c;continue e}else return r}}),Ru=function(e){var r=e;return X(Re(r.n),a(B,r.fl,r.p))},Fu=l(function(e,r){var n=r,t=Ru(n),o=a(Zr,Cr(t),e),c=a(Gt,o,t);if(c.b){var i=c.a,f=c.b;return{p:f,n:Re(a(Gn,o,t)),fl:i}}else return n}),qt=o9,Uy=l(function(e,r){var n=l(function(p,h){var y=p.a,k=p.b;return te(h,y)>-1&&te(h,k)<1});switch(e.$){case 0:var t=e.a;return a(Yr,function(p){return a(n,t,p)?D(a(k0,t,p)):z},qt(r));case 2:var t=e.a;return a(Yr,function(p){return a(n,t,p)?D(a(x0,t,p)):z},Mi(r));case 4:switch(r){case"true":return D(G0(!0));case"false":return D(G0(!1));default:return z}case 1:return D(Kb(r));case 3:var o=a(N,qt,a($n,",",r));if(o.b&&!o.a.$&&o.b.b&&!o.b.a.$&&o.b.b.b&&!o.b.b.a.$&&o.b.b.b.b&&!o.b.b.b.a.$&&!o.b.b.b.b.b){var c=o.a.a,i=o.b,f=i.a.a,$=i.b,s=$.a.a,d=$.b,b=d.a.a;return D(Zb(C(U,c,f,s,b)))}else return z;default:var _=e.a;return a(de,function(p){return Yb(a(Fu,p,_))},a(Au,Na(r),Ru(_)))}}),e2=l(function(e,r){var n=dn(e);return a(N,function(t){return A(t,{a8:a(N,function(o){var c=o.a,i=o.b;return g(c,(function(){var f=a(Ye,c,n);if(f.$)return i;var $=f.a;return a(ne,i,a(Uy,i,$))})())},t.a8)})},r)}),Wt=l(function(e,r){var n=a(kr,function(c){var i=c.a;return fe(i,e)},r);if(n.b){var t=n.a,o=t.b;return D(o)}else return z}),nG=ae,Gy=x(function(e,r,n){var t=e(r);if(t.$)return n;var o=t.a;return a(B,o,n)}),xr=l(function(e,r){return v(Ya,Gy(e),P,r)}),r2=l(function(e,r){return e<1?r:v(Xa,0,-e,r)}),a2=a9,qy=l(function(e,r){return a(a2,"Off",r)?e(a(r2,Ja("Off"),r)):z}),Wy=function(e){var r=a($n,",",e);if(r.b&&r.b.b&&!r.b.b.b){var n=r.a,t=r.b,o=t.a;return v(U0,l(function(c,i){return{kB:c,cQ:i}}),qt(n),qt(o))}else return z},n2=l(function(e,r){var n=r,t=a(xr,function(o){var c=o.a,i=o.b;return a(Yr,function(f){return a(de,Fi(f),Wy(i))},a(qy,n.rc,c))},e);return A(n,{cK:t})}),Ny=l(function(e,r){return A(r,{f:a(n2,e,r.f)})}),tG=6,oG=3,cG=4,t2=function(e){switch(e){case"hudConfigurations":return D(0);case"hudInputs":return D(1);case"hudFpsMeter":return D(2);case"hudProfiler":return D(3);case"hudTape":return D(4);case"hudPalette":return D(5);case"hudCommandPalette":return D(6);case"hudDevice":return D(7);default:return z}},Qy=function(e){return{$:1,a:e}},q0=Qy,Nt=l(function(e,r){var n=r;switch(e.$){case 0:var t=e.a;return A(n,{aK:a(Vi,t,n.aK)?a(kr,bu(t),n.aK):a(B,t,n.aK)});case 1:var t=e.a;return A(n,{aK:a(B,t,a(kr,bu(t),n.aK))});case 2:var t=e.a;return A(n,{aK:a(kr,bu(t),n.aK)});default:var t=e.a;return A(n,{cK:a(kr,function(o){var c=o.a;return!fe(c,t)},n.cK)})}}),Oy=l(function(e,r){var n=Ub(a(xr,t2,a($n,",",e)));return A(r,{f:v(ve,a(He,q0,Nt),r.f,n)})}),iG=ae,W0={I:Fe},fG=3,uG=4,$G=2,lG=1,vG=5,sG=0,o2=function(e){switch(e){case"windows":return 0;case"mac":return 1;case"linux":return 2;case"android":return 3;case"ios":return 4;default:return 5}},Jy=l(function(e,r){return{oK:{oU:!1,qG:z},aC:W0,ph:P,gG:0,b2:e,pW:r.pW,p6:r.p6,iI:r.iI,lo:r.lo,lG:!0,qI:r.qI,qJ:r.qJ,fG:"play",mm:r.mm,mQ:Fe,m$:Kd,sA:Iu,sB:o2(r.sB),sF:{lc:0,ld:0,eB:0,h6:0,oB:0,oC:0},fY:r.fY,s1:r.s1,f3:r.f3,ti:r.ti,to:r.to,t5:r.t5,oD:!0,uu:r.uu,oJ:!1}}),c2={aD:0,r7:"iPhone 12 Pro",Z:{g8:844,ia:390}},Xy={cA:c2,dF:0,bg:a(Ri,D(c2),a(Bu,function(e){return e.r7},F0))},Zy=function(e){return e.hV+(": "+e.i5)},dG=ae,bG=ae,Eu={bx:P,bD:P,bj:0,bk:0},Yy=Eu,Ky={jr:0,f1:Yy},i2={$:0},eC=i2,N0=function(e){return{ec:z,rc:e.rc,rd:e.rd,cK:P,aK:P}},mG=ae,pG=3,hG=1,gG=4,_G=0,yG=2,f2=g(0,u([1,2,3,4,5])),rC=function(e){var r=e.a,n=e.b;return{p:n,n:P,fl:r}},yo=function(e){var r=e;return r.fl},u2=function(e){var r=e,n=r.p;if(n.b){var t=n.a,o=n.b;return{p:o,n:a(B,r.fl,r.n),fl:t}}else return r},$2=function(e){return a(Fu,0,e)},Je=function(e){return!e.b},aC=function(e){var r=e;return Je(r.p)},l2=l(function(e,r){var n=function(t){e:for(;;){if(fe(yo(t),e))return D(t);if(aC(t))return z;var o=u2(t);t=o;continue e}};return n($2(r))}),nC=function(e){var r=rC(f2);return a(ne,r,a(l2,e,r))},Q0=ib,Nn=function(e){var r=e;return r.dz?r.c4:r.cW},O0=function(e){var r=Nn(e).dG.r7,n=Q0,t=n.a,o=n.b;return Sr(a(kr,function(c){return fe(c.r7,r)},a(B,t,o)))},tC=function(e){var r=Q0,n=r.a,t=r.b;return{cR:nC(Gb(e)),bg:a(Ri,O0(e),a(Bu,function(o){return o.r7},a(B,n,t)))}},Ei={$:0},CG=ae,oC=Ei,cC=function(e){var r=e.f4,n=e.rn,t=e.ha,o=e.rl,c=e.rm,i=e.oK;return{oK:{P:a(Bu,Zy,i),qG:z},d4:z,S:o,f:N0({rc:t2,rd:Eb}),c0:Ky,m$:t,aL:eC,bE:c,R:tC(n),e:n,cN:oC,oJ:!1}},Ui={$:0},za=l(function(e,r){return{$:0,a:e,b:r}}),bc=function(e){return{$:0,a:e}},PG=ae,v2=l(function(e,r){return a(_0,e,function(n){return r})}),s2=l(function(e,r){var n=a(we,1,e);return{cx:n,a9:1,aQ:0,en:a(v2,n,r),nV:r,dc:0}}),d2=l(function(e,r){return bc(a(s2,e,r))}),Gi=function(e){return{$:1,a:e}},b2=function(e){return Gi({aQ:0,en:a(v2,1,e),nV:e})},iC=l(function(e,r){if(e.$)return b2(r);var n=e.a;return a(d2,n,r)}),fC=x(function(e,r,n){return a(za,Ui,a(iC,e,g(r,n)))}),uC=l(function(e,r){return a(za,Ui,a(d2,1,g(e,r)))}),Co=l(function(e,r){return{$:1,a:e,b:r}}),$C=x(function(e,r,n){var t=n.a,o=n.b;return g(e(t),r(o))}),lC=function(e){var r=l(function(n,t){var o=n.a,c=n.b,i=t.a,f=t.b;return g(a(B,o,i),a(B,c,f))});return v(Ya,r,g(P,P),e)},m2=function(e){switch(e.$){case 0:return g(P,ue);case 1:var r=e.a;return v($C,gn,fa,lC(a(N,m2,r)));case 2:var n=e.a;return g(P,n);default:var t=e.a;return g(u([t]),ue)}},vC=l(function(e,r){return A(r,{a8:e(r.a8)})}),Po=l(function(e,r){var n=r.a,t=r.b;return g(n,e(t))}),sC=x(function(e,r,n){return a(ne,NaN,qt(a(e,r,n)))}),dC=l(function(e,r){var n=a(Mu,function(t){return t!=="0"&&t!=="."},Si(r));return X(e&&n?"-":"",r)}),bC=f9,p2=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ci(n);if(t.$===1)return"01";var o=t.a;return a(mu,"0",p2(o))}else{var c=it(r);return c>=48&&c<57?a(mu,bC(c+1),n):"0"}},mc=M6,h2=I6,Uu=x(function(e,r,n){return X(n,a(cc,e-Ja(n),tc(r)))}),g2=W6,_2=function(e){var r=a($n,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a;return g(n,o)}else{var n=r.a;return g(n,"0")}else return g("0","0")},So=l(function(e,r){var n=r.a,t=r.b;return g(e(n),t)}),mC=function(e){var r=a($n,"e",W(xe(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a,c=a(ne,0,Mi(a(Fn,"+",o)?a(Za,1,o):o)),i=_2(n),f=i.a,$=i.b,s=X(f,$),d=c<0?a(ne,"0",a(de,function(b){var _=b.a,p=b.b;return _+("."+p)},a(de,So(tc),Ci(X(a(cc,xe(c),"0"),s))))):v(Uu,c+1,"0",s);return X(e<0?"-":"",d)}else{var n=r.a;return X(e<0?"-":"",n)}else return""},pC=x(function(e,r,n){if(mc(n)||h2(n))return W(n);var t=n<0,o=_2(mC(xe(n))),c=o.a,i=o.b,f=Ja(c)+r,$=X(a(cc,-f+1,"0"),v(Uu,f,"0",X(c,i))),s=Ja($),d=a(we,1,f),b=a(e,t,v(Xa,d,s,$)),_=v(Xa,0,d,$),p=b?g2(a(ne,"1",a(de,p2,Ci(g2(_))))):_,h=Ja(p),y=p==="0"?p:r<=0?X(p,a(cc,xe(r),"0")):te(r,Ja(i))<0?v(Xa,0,h-r,p)+("."+v(Xa,h-r,h,p)):X(c+".",v(Uu,r,"0",i));return a(dC,t,y)}),pc=pC(l(function(e,r){var n=Ci(r);if(n.$===1)return!1;if(n.a.a==="5")if(n.a.b===""){var t=n.a;return!e}else{var o=n.a;return!0}else{var c=n.a,i=c.a;return(function(f){return f>53&&e||f>=53&&!e})(it(i))}})),hC=sC(pc),gC=x(function(e,r,n){var t=a(du,10,xe(r-e)),o=t<0?3:t<1?2:t<2?1:0;return a(hC,o,n)}),hc=x(function(e,r,n){return a(N,function(t){return e(t)?r(t):t},n)}),_C=function(e){switch(e.$){case 2:var n=e.a,r=e.b;return a(hc,a(He,vn,Na(n)),Po(function(o){if(o.$===2){var c=o.a,i=c.a,f=c.b;return a(x0,g(i,f),v(mr,i,f,r))}else return o}));case 1:var n=e.a,r=e.b;return a(hc,a(He,vn,Na(n)),Po(function(o){return o.$===1?Kb(r):o}));case 0:var n=e.a,r=e.b;return a(hc,a(He,vn,Na(n)),Po(function(o){if(o.$)return o;var c=o.a,i=c.a,f=c.b;return a(k0,g(i,f),v(gC,i,f,v(mr,i,f,r)))}));case 3:var n=e.a,r=e.b;return a(hc,a(He,vn,Na(n)),Po(function(o){return o.$===3?Zb(r):o}));case 4:var n=e.a,r=e.b;return a(hc,a(He,vn,Na(n)),Po(function(o){return o.$===4?G0(r):o}));default:var n=e.a,t=e.b;return a(hc,a(He,vn,Na(n)),Po(function(o){if(o.$===5){var c=o.a;return Yb(a(ne,c,a(de,function(i){return a(Fu,i,c)},a(Au,Na(t),Ru(c)))))}else return o}))}},yC=function(e){return vC(_C(e))},y2=l(function(e,r){return a(N,yC(e),r)}),J0=x(function(e,r,n){var t=m2(r),o=t.a,c=t.b,i=function(f){return v(ve,y2,f,o)};return{gH:c,cH:e?i(n.cH):n.cH,i0:i(n.i0)}}),Br=l(function(e,r){var n=r;return a(Vi,e,n.aK)}),CC=function(e){return a(Br,5,e.f)||a(Br,6,e.f)||a(Br,7,e.f)},C2=l(function(e,r){return r.ia>0&&r.g8>0?r:{g8:e.g8,eB:0,sI:r.sI,h6:0,ia:e.ia}}),PC={ln:!1,iK:!1,lq:0,lr:0,lt:P,mb:!1,m2:!1,nN:!1,nO:!1,kv:!1,kB:0,cQ:0},SC=function(e){var r=e.oe;if(r.$===1)return PC;var n=r.a,t=n.h6+.5*n.g8-.5*e.uw.g8,o=.5*e.uw.ia-n.eB-.5*n.ia,c=e.aa.mb?e.cq.cV:e.cq.g9,i=fe(c,D(e.fG)),f=fe(e.cq.cV,D(e.fG));return{ln:f&&e.aa.ln,iK:f&&e.aa.iK,lq:i?e.aa.lq:0,lr:i?e.aa.lr:0,lt:f?e.aa.lt:P,mb:f&&e.aa.mb,m2:i&&e.aa.m2,nN:f&&e.aa.nN,nO:f&&e.aa.nO,kv:f&&e.aa.kv,kB:e.aa.kB+o,cQ:e.aa.cQ+t}},kC={oS:!1,pT:!1,iK:!1,qf:P,eB:!1,rS:!1,sZ:P,j_:!1,tu:!1,kv:!1},xC={p2:0,p3:0,qq:P,sO:0,sP:z},qi=function(e){var r=Sr(a(kr,function($){return fe($.sI,e.by)},e.rp.sH)),n=fe(e.aH,D(e.by)),t=n?e.rp.mm:kC,o=n?e.rp.uu:xC,c=a(de,C2(e.rp.f3),r),i=(function(){if(c.$)return e.rp.f3;var $=c.a;return{g8:$.g8,ia:$.ia}})(),f=SC({fG:e.by,cq:e.cq,oe:c,aa:e.rp.fY,uw:e.rp.f3});return{oK:(function(){var $=e.ra;if($.$===1)return{oU:!1,qG:z};var s=$.a;return{oU:CC(s),qG:s.oK.qG}})(),aC:e.aM,ph:e.rp.ph,gG:e.gG,b2:e.b2,pW:e.rp.pW,p6:e.rp.p6,iI:e.rp.iI,lo:e.rp.lo,lG:n,qI:e.rp.qI,qJ:e.rp.qJ,fG:e.by,mm:t,mQ:e.mQ,m$:e.m$,sA:e.sA,sB:o2(e.rp.sB),sF:e.rp.sF,fY:f,s1:e.rp.s1,f3:i,ti:e.rp.ti,to:e.rp.to,t5:e.rp.t5,oD:e.oD,uu:o,oJ:e.oJ}},wC={cV:z,g9:z},jC=l(function(e,r){if(e.$)return N0(r);var n=e.a;return a(n2,n,N0(r))}),LC=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){var d=a(Ye,$,e);if(d.$)return s;var b=d.a,_=a(e2,n,b.rk),p=qi({gG:0,b2:_,aH:i,ra:z,by:b.by,rp:t,mQ:Fe,m$:c,sA:Iu,aM:W0,cq:wC,oD:!1,oJ:!1}),h=v(b.rj,p,r,o),y=h.a,k=h.b,L=h.c,w=v(J0,fe(f,D(b.by)),k,{cH:s.b8,i0:_}),H={aC:b.aC,fc:!1,gG:0,b2:w.i0,gQ:Fe,by:b.by,mQ:Fe,bz:y,hD:a(jC,D(Ob(a(ne,"",a(Wt,a(Wn,t.sD,"panel-layout"),t.sL)))),{rc:D,rd:ae}),eR:b.eR,aM:W0,oD:!1};return A(s,{cz:a(B,a(vc,Co(b.by),w.gH),s.cz),cE:X(s.cE,L),b8:w.cH,cI:v(Pr,$,H,s.cI)})}}}}}}}}}},TC=l(function(e,r){return a(Vu,e.by,r)?r:v(Pr,e.by,e,r)}),P2=function(e){return A(e,{f:a(Nt,q0(4),e.f)})},zC=Bt("registerPanes",Ut(Rr)),S2=function(e){return{$:1,a:e}},k2="play-device-picker",Gu={fk:k2,u:S2},Ca={$:11},rr=x(function(e,r,n){return e(r(n))}),MC=W9,ut=l(function(e,r){return Db(a(MC,a(rr,a(rr,ya,e),La),a(ua,a(rr,a(rr,ya,e),Jr),r)))}),Qt=32,x2=l(function(e,r){return a(we,0,Qt*r-e.eG/2+Qt/2)}),ko=function(e){return e.fk+"-list"},xo=X7,w2=x(function(e,r,n){var t=n,o=a(Yr,function(f){return a(Hu,f,t.aR)},r);if(o.$)return g(t,ue);var c=o.a,i=a(x2,e,c);return g(A(t,{et:r,bT:i,ax:c}),a(ut,function(f){return e.u(Ca)},v(xo,ko(e),0,i)))}),DC=function(e){return{$:0,a:e}},gc=function(e){return{fk:e.fk,eG:320,jP:"Search devices\u2026",u:a(rr,e.u,DC),ia:{rY:320,ur:26}}},BC=l(function(e,r){var n=r,t=v(w2,gc(e),D(n.cA),n.bg),o=t.a,c=t.b;return g(A(n,{bg:o}),c)}),AC=function(e){return{$:0,a:e}},_c=function(e){var r=e.u,n=e.fk;return{fk:n,eG:320,jP:"Search palettes\u2026",u:a(rr,r,AC),ia:{rY:320,ur:26}}},X0=x(function(e,r,n){var t=n,o=v(w2,_c(e),O0(r),t.bg),c=o.a,i=o.b;return g(A(t,{bg:c}),i)}),j2=function(e){return{$:0,a:e}},L2="play-theme-picker",yc={fk:L2,u:j2},HC=function(e){var r=a(Br,5,e.f)?v(X0,yc,e.e,e.R):g(e.R,ue),n=r.a,t=r.b,o=a(Br,7,e.f)?a(BC,Gu,e.S):g(e.S,ue),c=o.a,i=o.b;return g(A(e,{S:c,R:n}),fa(u([t,i])))},Z0={$:1},IC=function(e){var r=e;return r.cx},T2=function(e){if(e.$)return b2(_o(e));var r=e.a;return bc(a(s2,IC(r),Vb(r)))},z2=function(e){var r=e.b;return a(za,Z0,T2(r))},VC=function(e){switch(e){case"Red":return D(0);case"Green":return D(1);case"Yellow":return D(2);case"Blue":return D(3);case"Magenta":return D(4);case"Cyan":return D(5);default:return z}},M2=function(e){var r=Q0,n=r.a,t=r.b;return a(Mu,function(o){return fe(o.r7,e)},a(B,n,t))},RC=function(e){switch(e){case"1":return D(!0);case"0":return D(!1);default:return z}},Y0=l(function(e,r){var n=r;return A(n,{gx:e,cW:a(Pi,e,n.cW.dG),c4:a(Pi,e,n.c4.dG)})}),K0=l(function(e,r){var n=r,t=a(Pi,n.gx,e);return e.rt?A(n,{cW:t,dz:!1}):A(n,{c4:t,dz:!0})}),D2=function(e){return K0(S0(e))},ev=function(e){var r=e;return A(r,{dz:!r.dz})},FC=l(function(e,r){return fe(Du(r),e)?r:ev(r)}),EC=function(e){var r=a($n,"|",e);if(r.b&&r.b.b&&r.b.b.b&&r.b.b.b.b&&!r.b.b.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,f=c.b,$=f.a;return M2(n)&&M2(o)?v(U0,l(function(s,d){return a(FC,d,a(Y0,s,a(D2,o,a(D2,n,fb))))}),VC($),RC(i)):z}else return z},UC=l(function(e,r){var n=a(ne,P,r.rp.to),t=a(ne,Fe,a(de,dn,r.rp.to)),o=e.eu(t),c=a(N,function(Le){return Le.by},e.cI),i=v(ve,TC,Fe,e.cI),f=Iy(c),$=(function(){if(f.b&&!f.b.b){var Le=f.a;return D(Le)}else return z})(),s=a(ne,e.ra.e,a(Yr,EC,a(Wt,a(Wn,r.rp.sD,"theme"),r.rp.sL))),d=a(ne,e.ra.bE,a(Yr,oy,a(Wt,a(Wn,r.rp.sD,"tape-record-from-start"),r.rp.sL))),b=a(ne,"",a(Wt,a(Wn,r.rp.sD,"hud-open-panels"),r.rp.sL)),_=a(ne,e.ra.ha,a(Yr,Ey,a(Wt,zu("mode"),r.rp.sL))),p=a(ne,Xy,a(Yr,Ay,a(Wt,a(Wn,r.rp.sD,"device"),r.rp.sL))),h=cC({oK:e.oK,rl:p,ha:_,rm:d,rn:s,f4:e.ra}),y=a(Oy,b,a(Ny,Ob(a(ne,"",a(Wt,zu("hud-panel-layout"),r.rp.sL))),h)),k=d&&e.ra.g6?P2(y):y,L=a(e2,n,e.rk),w=v(ve,Mt(LC,i,o,n,r.rp,s,_,$,Sr(f)),{cz:P,cE:P,b8:L,cI:Fe},f),H=a(Jy,w.b8,r.rp),F=v(ju,e,w.cE,o),V=F.a,q=F.b,O={b2:w.b8,rp:r.rp,cI:w.cI,Q:V,np:P,nq:P},K=(function(){if(e.ra.g6){var Le=v(fC,Fy,H,O);return d?z2(Le):Le}else return a(uC,H,O)})(),ce=HC(k),be=ce.a,ke=ce.b,Me={gM:sy(e.cI),aH:$,ra:be,aT:f,fI:P,sD:r.rp.sD,tX:K};return g(A(Me,{fI:a(Nb,e,Me)}),fa(a(B,a(vc,wu,ke),a(B,zC(f),a(B,q,w.cz)))))}),B2=function(e){return{$:10,a:e}},rv={$:1},GC=function(e){return{$:0,a:e}},A2={$:11},qC=l(function(e,r){return{$:4,a:e,b:r}}),WC=l(function(e,r){return{$:5,a:e,b:r}}),NC={$:6},Cc=w9,QC=C9,Pc=function(e){return a(Qe,dn,QC(e))},qu=a(He,Wa,a(He,xr(function(e){var r=e.a,n=e.b,t=qt(r);if(t.$)return z;var o=t.a;return D(g(o,n))}),dn)),OC=J(function(e,r,n,t){return{q$:t,us:n,kB:e,cQ:r}}),Sc=j9,JC=I(Sc,OC,a(S,"x",G),a(S,"y",G),a(S,"w",G),a(S,"h",G)),XC=Pc(JC),av=function(e){return{$:1,a:e}},SG=3,kc={$:2},H2=function(e){switch(e){case 0:return"texture";case 1:return"sound";case 2:return"font";default:return"atlas"}},Ot=l(function(e,r){return H2(e)+(":"+r)}),ZC=l(function(e,r){var n=r;return A(n,{I:v(Et,a(Ot,3,e.by),de(function(t){return av({en:e.en,aV:e.aV,aq:e.aq,H:kc})}),n.I)})}),nv=b9,YC=function(e){return C(Cc,x(function(r,n,t){return ZC({en:n,by:e,aV:r,aq:t})}),a(Qe,qu,a(S,"mipImages",Pc(nv))),a(Qe,qu,a(S,"frames",Pc(XC))),a(S,"pixelated",re))},tv=function(e){return so(u([a(Qe,D,e),ee(z)]))},ov=a(Qe,ne(""),tv(a(S,"error",Pe))),Wu=function(e){return{$:3,a:e}},I2=function(e){return{$:3,a:e}},cv=function(e){return{$:2,a:e}},iv=function(e){return{$:0,a:e}},KC=l(function(e,r){switch(r.$){case 0:return iv({d0:0,d1:0,fg:z,aV:Fe,eK:Fe,aq:!1,H:Wu(e)});case 1:return av({en:Fe,aV:Fe,aq:!1,H:Wu(e)});case 2:return cv({H:Wu(e)});default:return I2({H:Wu(e)})}}),kG=2,xG=1,wG=0,fv=function(e){switch(e){case"texture":return D(0);case"sound":return D(1);case"font":return D(2);case"atlas":return D(3);default:return z}},uv=J(function(e,r,n,t){var o=t,c=fv(e);if(c.$)return o;var i=c.a;return A(o,{I:v(Et,a(Ot,i,r),de(KC(n)),o.I)})}),Nu={$:1},eP=function(e){switch(e){case 0:return iv({d0:0,d1:0,fg:z,aV:Fe,eK:Fe,aq:!1,H:Nu});case 3:return av({en:Fe,aV:Fe,aq:!1,H:Nu});case 1:return cv({H:Nu});default:return I2({H:Nu})}},$v=x(function(e,r,n){var t=n,o=fv(e);if(o.$)return t;var c=o.a;return A(t,{I:v(Pr,a(Ot,c,r),eP(c),t.I)})}),rP=l(function(e,r){var n=r;return A(n,{I:v(Et,a(Ot,1,e),de(function(t){return t.$===2?cv({H:kc}):t}),n.I)})}),V2=T9,aP=l(function(e,r){var n=r;return A(n,{I:v(Et,a(Ot,0,e.by),de(function(t){return t.$?t:iv({d0:e.d0,d1:e.d1,fg:e.fg,aV:e.aV,eK:e.eK,aq:e.aq,H:kc})}),n.I)})}),nP=function(e){return Wr(V2,zr(function(r,n,t,o,c,i){return aP({d0:o,d1:t,fg:i,by:e,aV:r,eK:n,aq:c})}),a(Qe,qu,a(S,"mipImages",Pc(nv))),a(Qe,a(He,ne(Fe),qu),tv(a(S,"mipUrls",Pc(Pe)))),a(S,"baseWidth",G),a(S,"baseHeight",G),a(S,"pixelated",re),tv(a(S,"baseline",G)))},xc=x(function(e,r,n){var t=n,o=fv(e);if(o.$)return t;var c=o.a;return A(t,{I:a(Hb,a(Ot,c,r),t.I)})}),tP=function(e){var r=e.a,n=e.b,t=e.c,o=g(r,n);e:for(;;)switch(o.a){case"texture":switch(o.b){case"loading":return ee(a($v,"texture",t));case"loaded":return nP(t);case"failed":return a(Qe,function(c){return v(uv,"texture",t,c)},ov);case"unloaded":return ee(a(xc,"texture",t));case"cancelled":return ee(a(xc,"texture",t));default:break e}case"atlas":switch(o.b){case"loading":return ee(a($v,"atlas",t));case"loaded":return YC(t);case"failed":return a(Qe,function(c){return v(uv,"atlas",t,c)},ov);case"unloaded":return ee(a(xc,"atlas",t));case"cancelled":return ee(a(xc,"atlas",t));default:break e}case"sound":switch(o.b){case"loading":return ee(a($v,"sound",t));case"loaded":return ee(rP(t));case"failed":return a(Qe,function(c){return v(uv,"sound",t,c)},ov);case"unloaded":return ee(a(xc,"sound",t));case"cancelled":return ee(a(xc,"sound",t));default:break e}default:break e}return ee(ae)},oP=a(T,tP,C(Cc,x(function(e,r,n){return R(e,r,n)}),a(S,"kind",Pe),a(S,"status",Pe),a(S,"id",Pe))),cP=v(qn,Fi,a(S,"instanceId",Pe),oP),iP=El,fP=function(e){var r=a(iP,cP,e);if(r.$)return NC;var n=r.a,t=n.a,o=n.b;return a(WC,t,o)},Qn=l9,R2=l(function(e,r){return{$:2,a:e,b:r}}),wo=nd,lv=function(e){return v(ve,Jb,Iu,e)},Qu=function(e){return lv(R0(e.hD))},jG=0,F2=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),E2=l(function(e,r){return{nr:r,n8:e}}),uP=ya(a(E2,P,Fe)),$P=function(e){return e?"w_":"d_"},lP=function(e){var r=e.a,n=e.b;return g(X($P(r),n),e)},U2=J9,vP=zr(function(e,r,n,t,o,c){var i=x(function(d,b,_){e:for(;;){var p=_.a,h=_.b;if(p.b){var y=p.a,k=y.a,L=y.b,w=p.b;if(te(k,d)<0){var H=d,F=b,V=g(w,v(e,k,L,h));d=H,b=F,_=V;continue e}else return te(k,d)>0?g(p,v(n,d,b,h)):g(w,C(r,k,L,b,h))}else return g(p,v(n,d,b,h))}}),f=v(po,i,g(Wa(t),c),o),$=f.a,s=f.b;return v(ve,l(function(d,b){var _=d.a,p=d.b;return v(e,_,p,b)}),s,$)}),sP=l(function(e,r){return{ly:r,i3:e}}),vv=a7,dP=x(function(e,r,n){var t=n.a,o=n.b,c=(function(){return t?Hn:fo})();return a(Di,function(i){return g(r,i)},v(q7,c,o,function(i){return a(vv,e,a(sP,r,i))}))}),bP=l(function(e,r){return v(po,Pr,r,e)}),mP=x(function(e,r,n){var t=x(function(b,_,p){var h=p.a,y=p.b,k=p.c;return R(h,y,a(B,v(dP,e,b,_),k))}),o=x(function(b,_,p){var h=p.a,y=p.b,k=p.c;return R(a(B,_,h),y,k)}),c=J(function(b,_,p,h){var y=h.a,k=h.b,L=h.c;return R(y,v(Pr,b,_,k),L)}),i=a(N,lP,r),f=yr(vP,o,c,t,n.nr,dn(i),R(P,Fe,P)),$=f.a,s=f.b,d=f.c;return a(ua,function(b){return ya(a(E2,i,a(bP,s,dn(b))))},a(ua,function(b){return Bi(d)},Bi(a(N,U2,$))))}),pP=x(function(e,r,n){var t=r.i3,o=r.ly,c=function(f){var $=f.a,s=f.b,d=s.a,b=s.b,_=s.c;return fe($,t)?a(W7,_,o):z},i=a(xr,c,n.n8);return a(ua,function(f){return ya(n)},Bi(a(N,xu(e),i)))}),hP=l(function(e,r){var n=r.a,t=r.b,o=r.c;return v(F2,n,t,a(Qe,e,o))});Qr["Browser.Events"]=Xl(uP,mP,pP,0,hP);var gP=bi("Browser.Events"),sv=x(function(e,r,n){return gP(v(F2,e,r,n))}),Wi=a(sv,0,"keydown"),dv=function(e){return{$:0,a:e}},Ni=l(function(e,r){return v(Ya,S,r,e)}),G2=Z6,_P=function(e){var r=G2(e);return r==="INPUT"||r==="TEXTAREA"||r==="SELECT"},yP=l(function(e,r){if(r.$)return!1;var n=r.a;return fe(rb(e),tc(E0(n)))}),CP=l(function(e,r){return a(de,function(n){return n.by},Sr(a(kr,function(n){return a(yP,e,n.nZ)},r)))}),PP=function(e){return a(T,function(r){if(_P(r.oc))return Qn("ignored: text input focused");if(r.pT||r.rS){var n=a(CP,r.i3,e);if(n.$)return Qn("ignored: no matching entry shortcut");var t=n.a;return ee(dv(t))}else return Qn("ignored: no Ctrl/Cmd modifier")},I(Sc,J(function(r,n,t,o){return{pT:n,i3:r,rS:t,oc:o}}),a(S,"key",Pe),a(S,"ctrlKey",re),a(S,"metaKey",re),a(Ni,u(["target","tagName"]),Pe)))},q2=l(function(e,r){return Wi(PP(e))}),LG=ae,SP=function(e){return a(N,function(r){return{by:r.by,nZ:a(de,ae,r.nZ)}},e)},Ou=function(e){return e.oJ},kP=Te(function(e,r,n,t,o){var c=a(Ye,o,n.cI);if(c.$)return z;var i=c.a,f=qi({gG:i.gG,b2:i.b2,aH:r.aH,ra:D(r.ra),by:i.by,rp:n.rp,mQ:i.mQ,m$:dc(r.ra),sA:Qu(i),aM:i.aM,cq:t,oD:i.oD,oJ:Ou(r.ra)}),$=C(e.a6.cf,f,n.Q,yn(r.ra),i.bz),s=a(wo,R2(o),a(q2,SP($),i.hD)),d=a(wo,Co(o),C(e.a6.aA,f,n.Q,yn(r.ra),i.bz));return D(Li(u([d,s])))}),wc=function(e){var r=e.a;return fe(r,Z0)},W2=function(e){return a(Br,4,e.f)},xP=Yl("assetsResponse",nv),wP=xP(ae),N2="play-absorbs-pointer-",jP=function(e){return a(Fn,N2,e)},LP=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(jP(n))return z;if(a(Xb,n,e))return D(n);var o=e,c=t;e=o,r=c;continue e}else return z}),Q2=function(e){var r=.5*e.uw.g8-e.aa.cQ,n=e.aa.kB+.5*e.uw.ia,t=function(i){var f=a(C2,e.uw,i);return te(n,f.eB)>-1&&te(n,f.eB+f.ia)<1&&te(r,f.h6)>-1&&te(r,f.h6+f.g8)<1},o=a(de,function(i){return i.sI},Sr(a(kr,t,e.jF))),c=a(LP,e.jX,e.aa.lt);return{cV:c,g9:o}},bv=function(e){return Q2({jF:e.rp.sH,jX:lv(su(e.cI)),aa:e.rp.fY,uw:e.rp.f3})},O2=function(e){return{$:6,a:e}},J2=function(e){return{$:3,a:e}},X2=function(e){return{$:2,a:e}},Z2={$:13},TP=a(T,function(e){return(e.i3==="p"||e.i3==="P")&&e.tu&&(e.pT||e.rS)?ee(Z2):Qn("not Cmd+Shift+P")},I(Sc,J(function(e,r,n,t){return{pT:n,i3:e,rS:t,tu:r}}),a(S,"key",Pe),a(S,"shiftKey",re),a(S,"ctrlKey",re),a(S,"metaKey",re))),zP=function(e){var r=e;return Je(r.hG)},Qi=l(function(e,r){return e.g5&&!zP(r)}),MP={$:4},DP=a(T,function(e){return(e.i3==="i"||e.i3==="I")&&(e.pT||e.rS)?ee(MP):Qn("not Ctrl+I")},C(Cc,x(function(e,r,n){return{pT:r,i3:e,rS:n}}),a(S,"key",Pe),a(S,"ctrlKey",re),a(S,"metaKey",re))),BP={$:12},AP=a(T,function(e){return(e.i3==="m"||e.i3==="M")&&(e.pT||e.rS)?ee(BP):Qn("not Ctrl+M")},C(Cc,x(function(e,r,n){return{pT:r,i3:e,rS:n}}),a(S,"key",Pe),a(S,"ctrlKey",re),a(S,"metaKey",re))),Y2=l(function(e,r){return ft}),HP=l(function(e,r){var n=r;return a(Y2,gc(e),n.bg)}),IP=function(e){return{$:7,a:e}},VP={$:8},RP=a(sv,0,"mousemove"),FP=a(sv,0,"mouseup"),EP=function(e){if(e.$===3){var r=e.a,n=r.bi;if(n.a.$===1){var t=n.a;return Li(u([RP(v(qn,l(function(o,c){return IP({fj:o,pF:c})}),a(S,"clientX",G),a(S,"clientY",G))),FP(ee(VP))]))}else return ft}else return ft},UP=l(function(e,r){var n=r;return a(Y2,_c(e),n.bg)}),K2=function(e){return{$:4,a:e}},e3=function(e){return{$:1,a:e}},Ju=x(function(e,r,n){return{js:n,nK:r,n8:e}}),mv=ya(v(Ju,P,z,0)),GP=Q7(0),r3=N7(0),a3=Nl,qP=x(function(e,r,n){var t=n.nK,o=n.js,c=g(t,r);if(c.a.$===1)if(c.b.b){var f=c.a;return a(ua,function(s){return a(ua,function(d){return ya(v(Ju,r,D(s),d))},GP)},a3(a(ua,vv(e),r3)))}else{var i=c.a;return mv}else{if(c.b.b)return ya(v(Ju,r,t,o));var $=c.a.a;return a(ua,function(s){return mv},U2($))}}),TG=ae,WP=ae,NP=x(function(e,r,n){var t=n.n8,o=n.js,c=function(i){if(i.$){var f=i.a;return a(xu,e,f(r-o))}else{var f=i.a;return a(xu,e,f(WP(r)))}};return a(ua,function(i){return a(ua,function(f){return ya(v(Ju,t,D(i),r))},Bi(a(N,c,t)))},a3(a(ua,vv(e),r3)))}),QP=function(e){return{$:0,a:e}},OP=l(function(e,r){if(r.$){var n=r.a;return e3(a(rr,e,n))}else{var n=r.a;return QP(a(rr,e,n))}});Qr["Browser.AnimationManager"]=Xl(mv,qP,NP,0,OP);var JP=bi("Browser.AnimationManager"),XP=function(e){return JP(e3(e))},n3=XP,ZP=function(e){var r=e;if(r.$===1){var n=r.a,t=n.X;switch(t.$){case 0:return n3(K2);case 2:return n3(K2);case 1:return ft;default:return ft}}else return ft},YP=l(function(e,r){var n=e.f4,t=e.u,o=a(wo,X2,ZP(r.cN)),c=n.b9?D(a(UP,yc,r.R)):z,i=n.eo?D(a(wo,J2,EP(r.aL))):z,f=a(wo,O2,a(q2,P,r.f)),$=n.ds?D(a(HP,Gu,r.S)):z,s=n.dt?D(Wi(AP)):z,d=n.b9?D(Wi(DP)):z,b=a(Qi,n,r.oK.P)?D(Wi(TP)):z;return a(wo,t,Li(a(xr,ae,u([D(o),d,s,c,$,i,D(f),b]))))}),KP=Yl("tick",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(_){return a(T,function(p){return a(T,function(h){return a(T,function(y){return a(T,function(k){return a(T,function(L){return a(T,function(w){return a(T,function(H){return ee({ph:H,pW:w,p6:L,iI:k,lo:y,qI:h,qJ:p,mm:_,sB:b,sD:d,sF:s,sH:$,sL:f,fY:i,s1:c,f3:o,ti:t,to:n,t5:r,uu:e})},a(S,"boundingClientRects",ur(a(T,function(H){return a(T,function(F){return a(T,function(V){return ee({qr:V,qR:F,tn:H})},a(S,"elements",ur(a(T,function(V){return a(T,function(q){return ee({pg:q,by:V})},a(S,"boundingClientRect",a(T,function(q){return a(T,function(O){return a(T,function(K){return a(T,function(ce){return ee({pf:ce,eB:K,j_:O,h6:q})},a(S,"bottom",G))},a(S,"left",G))},a(S,"right",G))},a(S,"top",G))))},a(S,"id",Pe)))))},a(S,"frameId",Pe))},a(S,"scroll",a(T,function(H){return a(T,function(F){return a(T,function(V){return a(T,function(q){return a(T,function(O){return a(T,function(K){return ee({lc:K,ld:O,eB:q,h6:V,oB:F,oC:H})},a(S,"contentHeight",G))},a(S,"contentWidth",G))},a(S,"left",G))},a(S,"top",G))},a(S,"viewportHeight",G))},a(S,"viewportWidth",G)))))))},a(S,"darkModeIsOn",re))},a(S,"deviceOrientation",so(u([fc(z),a(Qe,D,a(T,function(L){return a(T,function(w){return a(T,function(H){return ee({oR:H,o8:w,qV:L})},a(S,"alpha",G))},a(S,"beta",G))},a(S,"gamma",G)))]))))},a(S,"devicePixelRatio",G))},a(S,"dt",G))},a(S,"focusedElementIsContentEditable",re))},a(S,"focusedElementIsTextInput",re))},a(S,"keyboard",a(T,function(_){return a(T,function(p){return a(T,function(h){return a(T,function(y){return a(T,function(k){return a(T,function(L){return a(T,function(w){return a(T,function(H){return a(T,function(F){return a(T,function(V){return ee({oS:V,pT:F,iK:H,qf:w,eB:L,rS:k,sZ:y,j_:h,tu:p,kv:_})},a(S,"alt",re))},a(S,"ctrl",re))},a(S,"down",re))},a(S,"downs",ur(Pe)))},a(S,"left",re))},a(S,"meta",re))},a(S,"pressedKeys",ur(Pe)))},a(S,"right",re))},a(S,"shift",re))},a(S,"up",re))))},a(S,"operatingSystem",Pe))},a(S,"pageId",Pe))},a(S,"pageScroll",a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(_){return a(T,function(p){return a(T,function(h){return ee({lc:h,ld:p,eB:_,h6:b,oB:d,oC:s})},a(S,"contentHeight",G))},a(S,"contentWidth",G))},a(S,"left",G))},a(S,"top",G))},a(S,"viewportHeight",G))},a(S,"viewportWidth",G))))},a(S,"paneBoundingBoxes",ur(a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(_){return ee({g8:_,eB:b,sI:d,h6:s,ia:$})},a(S,"height",G))},a(S,"left",G))},a(S,"paneId",Pe))},a(S,"top",G))},a(S,"width",G)))))},a(S,"persisted",ur(a(T,function(f){return a(T,function($){return ee(g(f,$))},a(Un,1,Pe))},a(Un,0,Pe)))))},a(S,"pointer",a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(_){return a(T,function(p){return a(T,function(h){return a(T,function(y){return a(T,function(k){return a(T,function(L){return ee({ln:L,iK:k,lq:y,lr:h,lt:p,mb:_,m2:b,nN:d,nO:s,kv:$,kB:f,cQ:i})},a(S,"doubleClick",re))},a(S,"down",re))},a(S,"dx",G))},a(S,"dy",G))},a(S,"elementIdsForLastDown",ur(Pe)))},a(S,"isDown",re))},a(S,"move",re))},a(S,"rightDown",re))},a(S,"rightUp",re))},a(S,"up",re))},a(S,"x",G))},a(S,"y",G))))},a(S,"rawPointer",a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(_){return a(T,function(p){return a(T,function(h){return a(T,function(y){return a(T,function(k){return ee({ln:k,iK:y,lq:h,lr:p,lt:_,mb:b,m2:d,nN:s,nO:$,kv:f,kB:i,cQ:c})},a(S,"doubleClick",re))},a(S,"down",re))},a(S,"dx",G))},a(S,"dy",G))},a(S,"elementIdsForLastDown",ur(Pe)))},a(S,"isDown",re))},a(S,"move",re))},a(S,"rightDown",re))},a(S,"rightUp",re))},a(S,"up",re))},a(S,"x",G))},a(S,"y",G))))},a(S,"screen",a(T,function(o){return a(T,function(c){return ee({g8:c,ia:o})},a(S,"height",G))},a(S,"width",G))))},a(S,"screenOrientationAngle",G))},a(S,"searchParamsFromUrl",so(u([fc(z),a(Qe,D,ur(a(T,function(n){return a(T,function(t){return ee(g(n,t))},a(Un,1,Pe))},a(Un,0,Pe))))]))))},a(S,"touches",ur(a(T,function(r){return a(T,function(n){return a(T,function(t){return ee({by:t,kB:n,cQ:r})},a(S,"id",xi))},a(S,"x",G))},a(S,"y",G)))))},a(S,"wheel",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return ee({p2:o,p3:t,qq:n,sO:r,sP:e})},a(S,"deltaX",G))},a(S,"deltaY",G))},a(S,"elementIdsForLastWheel",ur(Pe)))},a(S,"pinchDeltaForChrome",G))},a(S,"pinchScaleForSafari",so(u([fc(z),a(Qe,D,G)]))))))),eS=Yl("visibilityChanged",a(T,function(e){return a(T,function(r){return ee({fG:r,oD:e})},a(S,"instanceId",Pe))},a(S,"visible",re))),rS=l(function(e,r){var n=a(YP,{f4:e.ra,u:wu},r.ra),t=sc(r.tX),o=bv(t),c=a(xr,C(kP,e,r,t,o),r.aT),i=W2(r.ra)?Wi(a(T,function($){return $==="Escape"?wc(r.tX)?ee(B2(rv)):ee(A2):Qn("not Escape")},a(S,"key",Pe))):ft,f=e.aA(t.Q);return Li(X(u([KP(GC),eS(function($){return a(qC,$.fG,$.oD)}),a(wo,fP,wP),f,n,i]),c))}),jc=J8,t3=J(function(e,r,n,t){var o=go&r>>>e,c=a(Ii,o,t);if(c.$){var $=c.a,s=v(jc,go&r,n,$);return v(jc,o,ac(s),t)}else{var i=c.a,f=C(t3,e-ln,r,n,i);return v(jc,o,nc(f),t)}}),Xu=x(function(e,r,n){var t=n.a,o=n.b,c=n.c,i=n.d;return e<0||te(e,t)>-1?n:te(e,Ib(t))>-1?C(Vt,t,o,c,v(jc,go&e,r,i)):C(Vt,t,o,C(t3,o,e,r,c),i)}),aS=l(function(e,r){var n=r;return A(n,{en:v(Xu,a(Zr,n.cx,n.dc+n.aQ),e,n.en)})}),o3=l(function(e,r){if(r.$){var t=r.a;return Gi(A(t,{en:v(Xu,t.aQ,e,t.en)}))}else{var n=r.a;return bc(a(aS,e,n))}}),Jt=l(function(e,r){var n=r.a,t=r.b,o=_o(t),c=o.a,i=o.b,f=e(i),$=f.a,s=f.b;return g(a(za,n,a(o3,g(c,$),t)),s)}),nS=x(function(e,r,n){var t=function(o){var c=v(ju,e,r,o.Q),i=c.a,f=c.b;return g(A(o,{Q:i}),f)};return a(So,function(o){return A(n,{tX:o})},a(Jt,t,n.tX))}),c3=V9,tS=Bt("clearPlayLocalStorage",function(e){return c3}),oS=Bt("pushUrlReset",function(e){return c3}),cS=x(function(e,r,n){if(r.$===1)return g(n,ue);if(r.a){var f=r.a;return g(n,tS(0))}else{var t=r.a,o=function($){var s=(function(){var d=n.aT;if(d.b){var b=d.a;return v(Et,b,de(function(_){return A(_,{b2:e.rk})}),$.cI)}else return $.cI})();return g(A($,{b2:e.rk,cI:s}),ue)},c=a(Jt,o,n.tX),i=c.a;return g(A(n,{tX:i}),oS(0))}}),iS=x(function(e,r,n){var t=function(o){var c=a(Ye,e,o.cI);if(c.$)return g(o,ue);var i=c.a,f=a(Nt,r,i.hD),$=v(Pr,e,A(i,{hD:f}),o.cI);return g(A(o,{cI:$}),ue)};return a(So,function(o){return A(n,{tX:o})},a(Jt,t,n.tX))}),fS=function(e){return a(Br,7,e.f)},uS=l(function(e,r){return e?{g8:r.Z.ia,ia:r.Z.g8}:r.Z}),$S=function(e){var r=e;return a(uS,r.dF,r.cA)},lS=function(e){return $S(e.S)},pv=function(e){return fS(e)?D(lS(e)):z},i3=24,Oi=l(function(e,r){return v(mr,.1,1,a(Ne,(e.ia-i3)/r.ia,(e.g8-i3)/r.g8))}),vS=x(function(e,r,n){var t=a(Oi,e,r),o=function(c){return A(c,{pf:c.pf/t,eB:c.eB/t,j_:c.j_/t,h6:c.h6/t})};return a(N,function(c){return A(c,{qr:a(N,function(i){return A(i,{pg:o(i.pg)})},c.qr)})},n)}),sS=x(function(e,r,n){var t=a(Oi,e,r),o=.5*(e.ia-r.ia*t),c=.5*(e.g8-r.g8*t);return A(n,{g8:n.g8/t,eB:(n.eB-o)/t,h6:(n.h6-c)/t,ia:n.ia/t})}),f3=x(function(e,r,n){var t=.5*e.g8-n.cQ,o=n.kB+.5*e.ia,c=a(Oi,e,r),i=.5*(e.ia-r.ia*c),f=.5*(e.g8-r.g8*c);return A(n,{kB:(o-i)/c-.5*r.ia,cQ:.5*r.g8-(t-f)/c})}),u3=x(function(e,r,n){var t=v(f3,e,r,n),o=a(Oi,e,r);return A(t,{lq:n.lq/o,lr:n.lr/o})}),hv=l(function(e,r){if(e.$)return r;var n=e.a;return{ph:v(vS,r.f3,n,r.ph),pW:r.pW,p6:r.p6,iI:r.iI,lo:r.lo,qI:r.qI,qJ:r.qJ,mm:r.mm,sB:r.sB,sD:r.sD,sF:r.sF,sH:a(N,a(sS,r.f3,n),r.sH),sL:r.sL,fY:v(u3,r.f3,n,r.fY),s1:v(u3,r.f3,n,r.s1),f3:n,ti:r.ti,to:r.to,t5:a(N,a(f3,r.f3,n),r.t5),uu:r.uu}}),dS=J(function(e,r,n,t){var o=function(c){var i=a(Ye,r,c.cI);if(i.$)return g(c,ue);var f=i.a,$=bv(c),s=pv(t.ra),d=qi({gG:f.gG,b2:f.b2,aH:t.aH,ra:D(t.ra),by:f.by,rp:a(hv,s,c.rp),mQ:f.mQ,m$:dc(t.ra),sA:Qu(f),aM:f.aM,cq:$,oD:f.oD,oJ:Ou(t.ra)}),b=I(e.a6.sr,d,c.Q,yn(t.ra),n,f.bz),_=b.a,p=b.b,h=b.c,y=v(J0,fe(Sr(t.aT),D(r)),p,{cH:c.b2,i0:f.b2}),k=v(ju,e,h,c.Q),L=k.a,w=k.b,H=v(Pr,r,A(f,{b2:y.i0,bz:_}),c.cI);return g(A(c,{b2:y.cH,cI:H,Q:L}),fa(u([a(vc,Co(r),y.gH),w])))};return a(So,function(c){return A(t,{tX:c})},a(Jt,o,t.tX))}),$3=function(e){return{$:2,a:e}},l3=$3,bS=function(e){return A(e,{f:a(Nt,l3(4),e.f)})},mS=function(e){var r=e.b;return a(za,Ui,T2(r))},pS=x(function(e,r,n){return{$:7,a:e,b:r,c:n}}),zG=ae,v3=9729,MG=ae,Zu=10497,hS={g1:!0,lV:Zu,hm:v3,hq:v3,oz:Zu},Yu=33071,gS=(function(){var e=hS;return A(e,{lV:Yu,oz:Yu})})(),s3=function(e){return{$:1,a:e}},_S={$:0},yS=l(function(e,r){return{$:1,a:e,b:r}}),CS=l(function(e,r){var n=e.hm,t=e.hq,o=e.lV,c=e.oz,i=e.g1,f=J(function($,s,d,b){var _=$,p=s,h=d,y=b;return yr(Z7,_,p,h,y,i,r)});return C(f,n,t,o,c)}),PS=l(function(e,r){return a(Di,function(n){return s3({U:n,sC:e,e5:r})},a(CS,e,r))}),d3=9728,SS={g1:!0,lV:Zu,hm:d3,hq:d3,oz:Zu},kS=(function(){var e=SS;return A(e,{lV:Yu,oz:Yu})})(),xS=l(function(e,r){var n=r.I,t=a(Ye,a(Ot,0,e),n);if(!t.$&&!t.a.$){var o=t.a.a.H,c=t.a.a.aq;return fe(o,kc)?D(c):z}else return z}),Ku=function(e){if(e.b){var r=e.a,n=e.b;return D(v(ve,we,r,n))}else return z},wS=function(e){if(e.b){var r=e.a,n=e.b;return D(v(ve,Ne,r,n))}else return z},jS=l(function(e,r){var n=wS(a(kr,function(o){return te(o,e)>-1},r));if(n.$)return a(ne,1,Ku(r));var t=n.a;return t}),LS=x(function(e,r,n){var t=n.I,o=a(Ye,a(Ot,0,e),t);if(!o.$&&!o.a.$){var c=o.a.a.H,i=o.a.a.eK;if(c.$===2){var f=a(jS,r,su(i));return a(Ye,f,i)}else return z}else return z}),TS=l(function(e,r){return v(LS,e,1,r)}),zS=x(function(e,r,n){return fa(a(xr,function(t){var o=g(a(TS,t,n),a(xS,t,n));if(!o.a.$&&!o.b.$){var c=o.a.a,i=o.b.a,f=i?kS:gS;return D(a(ut,a(pS,e,t),a(PS,f,c)))}else return z},r))}),b3=l(function(e,r){var n=H2(e)+":";return a(Fn,n,r)?a(Za,Ja(n),r):r}),MS=l(function(e,r){var n=e,t=r;return a(xr,function(o){var c=o.a,i=o.b;if(i.$)return z;var f=i.a.H;if(fe(f,kc)){var $=a(Ye,c,n.I);if(!$.$&&!$.a.$){var s=$.a.a;return fe(s.H,kc)?z:D(a(b3,0,c))}else return D(a(b3,0,c))}else return z},Wa(t.I))}),DS=x(function(e,r,n){var t=function(o){var c=a(Ye,e,o.cI);if(c.$)return g(o,ue);var i=c.a,f=r(i.aM),$=a(MS,i.aM,f),s=A(i,{aM:f});return g(A(o,{cI:v(Pr,e,s,o.cI)}),v(zS,e,$,f))};return a(So,function(o){return A(n,{tX:o})},a(Jt,t,n.tX))}),BS=l(function(e,r){var n=g(e,r);if(n.a.$===5&&n.b.$===5){var t=n.a.a,o=n.b.a;return fe(yo(t),yo(o))}else return fe(e,r)}),AS=function(e){switch(e.$){case 0:var r=e.b;return W(r);case 2:var r=e.b;return Ze(r);case 4:var r=e.a;return r?"true":"false";case 1:var r=e.a;return r;case 3:var n=e.a.aS,t=e.a.a0,o=e.a.D,c=e.a.oR;return a(Mr,",",a(N,W,u([n,t,o,c])));default:var i=e.a;return yo(i)}},m3=l(function(e,r){var n=dn(a(_n,function(t){return t.a8},e));return a(xr,function(t){var o=t.a,c=t.b,i=a(Ye,o,n);if(i.$)return z;var f=i.a;return a(BS,f,c)?z:D(g(o,AS(c)))},a(_n,function(t){return t.a8},r))}),HS=x(function(e,r,n){return X(a(m3,e.rk,r),n)}),IS=Bt("writeUrlParams",Ut(function(e){var r=e.a,n=e.b;return a(Ut,ae,u([Rr(r),Rr(n)]))})),VS=l(function(e,r){var n=sc(r.tX),t=e.e6(n.Q);return IS(v(HS,e,n.b2,t))}),RS=x(function(e,r,n){var t=function(f){var $=a(y2,r,f.b2),s=(function(){var d=n.aT;if(d.b){var b=d.a;return v(Et,b,de(function(_){return A(_,{b2:$})}),f.cI)}else return f.cI})();return g(A(f,{b2:$,cI:s}),ue)},o=a(Jt,t,n.tX),c=o.a,i=A(n,{tX:c});return g(i,a(VS,e,i))}),e$=l(function(e,r){return r}),FS=x(function(e,r,n){if(r.$){var o=r.a,c=a(e$,"Play.Runtime.MaterialLoaded failed",g(e,o));return n}else{var t=r.a;return A(n,{mQ:v(Pr,e,t,n.mQ)})}}),ES=J(function(e,r,n,t){var o=function(c){return g(A(c,{cI:v(Et,e,de(a(FS,r,n)),c.cI)}),ue)};return a(So,function(c){return A(t,{tX:c})},a(Jt,o,t.tX))}),US=Ul,r$=function(e){return v(ve,l(function(r,n){var t=r.a,o=r.b;return v(H9,t,o,n)}),A9(0),e)},GS=Bt("assetsLoadRequest",Ut(function(e){return r$(u([g("id",Rr(e.by)),g("instanceId",Rr(e.fG)),g("kind",Rr(e.bc)),g("mips",Ut(US)(e.dC)),g("url",Rr(e.e5))]))})),gv=function(e){var r=e;return r},qS=l(function(e,r){var n=gv(r);return{by:n.by,fG:e,bc:n.bc,dC:n.dC,e5:n.e5}}),p3=l(function(e,r){return GS(a(N,qS(e),r))}),h3=Ul,WS=Bt("setInstanceMuted",function(e){return r$(u([g("instanceId",Rr(e.fG)),g("muted",h3(e.r6))]))}),NS=x(function(e,r,n){var t=function(o){var c=a(Ye,e,o.cI);if(c.$)return g(o,ue);var i=c.a,f=r&&!i.fc,$=A(i,{fc:i.fc||r,oD:r}),s=i.eR?WS({fG:e,r6:!r}):ue,d=f?a(p3,e,i.aC):ue;return g(A(o,{cI:v(Pr,e,$,o.cI)}),fa(u([d,s])))};return a(So,function(o){return A(n,{tX:o})},a(Jt,t,n.tX))}),QS=function(e){return e.bj+e.bk},a$=function(e){var r=e;return r},OS=a(rr,QS,a$),g3=function(e){var r=e.bj,n=e.bk,t=e.bx,o=e.bD,c=(r+n)/2|0,i=r+n-c,f=4;if(r+n<2)return e;if(te(r,f*n+1)>0){var $=X(o,Re(a(Gt,c,t))),s=a(Gn,c,t);return{bx:s,bD:$,bj:c,bk:i}}else if(te(n,f*r+1)>0){var $=a(Gn,c,o),s=X(t,Re(a(Gt,c,o)));return{bx:s,bD:$,bj:c,bk:i}}else return e},JS=function(e){var r=e.bx,n=e.bD,t=g(r,n);if(t.a.b){var i=t.a,f=i.a,$=i.b;return g(D(f),g3({bx:$,bD:e.bD,bj:e.bj-1,bk:e.bk}))}else if(t.b.b){if(t.b.b.b)return g(z,Eu);var o=t.b,c=o.a;return g(D(c),Eu)}else return g(z,Eu)},_3=a(rr,a(rr,Po(ae),JS),a$),y3=l(function(e,r){return te(OS(r),e)>0?a(y3,e,_3(r).b):r}),C3=l(function(e,r){var n=_3(r);if(n.a.$){var c=n.a;return r}else{var t=n.a.a,o=n.b;return te(t.kp,e)<0?a(C3,e,o):r}}),P3=60,XS=l(function(e,r){var n=r;return e(n)}),ZS=l(function(e,r){var n=r;return a(XS,g3,{bx:n.bx,bD:a(B,e,n.bD),bj:n.bj,bk:n.bk+1})}),YS=1,KS=l(function(e,r){var n=r,t=n.jr+e,o=t-YS;return{jr:t,f1:a(y3,P3,a(ZS,{lo:e,kp:t},a(C3,o,n.f1)))}}),ek=l(function(e,r){return A(r,{c0:a(KS,e.lo,r.c0)})}),S3=function(e){var r=e.b;return _o(r).a},k3=l(function(e,r){var n=S3(e.tX);return A(n,{b2:r.b2,m$:dc(e.ra)})}),n$={$:2},x3=function(e){var r=e.a;return fe(r,n$)},_v=function(e){var r=e.a;return r.$===3},$t=function(e){return x3(e)||_v(e)},w3={$:13},rk=l(function(e,r){return e}),j3="play-scrollport",ak=function(e){var r=x(function(o,c,i){return a(ut,rk(w3),v(xo,o,c,i))}),n=v(r,j3,e.sF.eB,e.sF.h6),t=a(N,function(o){return v(r,"measure-frame--"+o.qR,o.tn.eB,o.tn.h6)},e.ph);return fa(a(B,n,t))},nk={$:4},yv=l(function(e,r){return{$:1,a:e,b:r}}),DG=0,L3={$:0},t$={$:1},jo=function(e){return{$:3,a:e}},BG=1,Lc=l(function(e,r){return{$:0,a:e,b:r}}),tk={$:2},ok=l(function(e,r){return{eB:e,j_:r}}),la=function(e){var r=e.a;return r},o$=l(function(e,r){var n=r.aB,t=function(f){return a(ne,0,a(de,function($){return $.df},a($a,f,n)))},o=l(function(f,$){e:for(;;){if(te(f,$)>-1)return f;if(te(e,t((f+$)/2|0))<1){var s=f,d=(f+$)/2|0;f=s,$=d;continue e}else{var s=((f+$)/2|0)+1,d=$;f=s,$=d;continue e}}}),c=la(n),i=a(o,0,c);return i?fe(i,c)?c-1:te(e-t(i-1),t(i)-e)<1?i-1:i:0}),Ji=l(function(e,r){var n=e.a,t=e.b,o=r.f_,c=r.aB,i=n?a(ne,o,a(de,function($){return $.df},a($a,n-1,c))):o,f=a(ne,o,a(de,function($){return $.df},a($a,t,c)));return g(i,f)}),en={mX:100,nQ:24,hO:100,h$:400,h0:900,of:4},Kr=l(function(e,r){return r/en.h0*(e.j_-e.eB)}),Xi=x(function(e,r,n){var t=r.a,o=r.b,c=function(F){return a(Kr,e,F.gP-F.jQ)},i=a(Ji,g(1,la(n.aB)-2),n),f=i.a,$=i.b,s=a(Ji,g(o.cL+1,o.cD-1),n),d=s.a,b=s.b,_=a(Ji,g(o.cL,o.cD),n),p=_.a,h=_.b;if(t.$)if(t.a){var w=t.a,k=t.b,H=v(mr,d,$,h+c(k));return g(g(p,o.cL),g(H,a(o$,H,n)))}else{var y=t.a,k=t.b,L=v(mr,f,b,p+c(k));return g(g(L,a(o$,L,n)+1),g(h,o.cD))}else return g(g(p,o.cL),g(h,o.cD))}),ck=J(function(e,r,n,t){var o=e.nS,c=e.nT,i=e.m1,f=t.j_-t.eB,$=n-r,s=a(Ne,$,a(we,en.mX,f*a(bn,1.002,c))),d=o*.001*s,b=t.eB+i*f-i*s,_=b+s,p=_+d,h=b+d,y=te(h,r)<0?g(r,r+s):te(p,n)>0?g(n-s,n):g(h,p),k=y.a,L=y.b;return{eB:k,j_:L}}),T3=l(function(e,r){var n=g(e,r);e:for(;;)switch(n.a.$){case 2:var t=n.a;return t$;case 3:var o=n.a;return tk;case 4:var c=n.a;return i2;case 0:var i=n.a.a,f=g(0,la(i.aB)-1),$=f.a,s=f.b,d=a(Ji,g($,s),i),b=d.a,_=d.b;return jo({ca:z,dJ:i,bi:a(Lc,L3,{cD:s-1,cL:1}),a5:a(ok,b,_)});case 1:if(n.b.$===3){var p=n.a.a,h=n.b.a,y=g(0,la(h.dJ.aB)-1),$=y.a,s=y.b,k=a(Ji,g($,s),h.dJ),L=k.a,w=k.b,H=C(ck,p,L,w,h.a5);return jo(A(h,{a5:H}))}else break e;case 5:if(n.b.$===3){var F=n.a.a.fj,h=n.b.a,V=h.bi,q=V.b;return jo(A(h,{bi:a(Lc,a(yv,0,{gP:F,jQ:F}),q)}))}else break e;case 6:if(n.b.$===3){var F=n.a.a.fj,h=n.b.a,O=h.bi,q=O.b;return jo(A(h,{bi:a(Lc,a(yv,1,{gP:F,jQ:F}),q)}))}else break e;case 7:if(n.b.$===3){var F=n.a.a.fj,h=n.b.a,K=h.bi;if(K.a.$===1){var ce=K.a,be=ce.a,ke=ce.b,q=K.b;return jo(A(h,{bi:a(Lc,a(yv,be,A(ke,{gP:F})),q)}))}else return r}else break e;case 8:if(n.b.$===3){var Me=n.a,h=n.b.a,Le=h.bi;if(Le.a.$===1){var ie=Le.a,Ve=v(Xi,h.a5,h.bi,h.dJ),Ue=Ve.a,er=Ue.b,qe=Ve.b,Lr=qe.b;return jo(A(h,{bi:a(Lc,L3,{cD:Lr,cL:er})}))}else return r}else break e;default:if(n.b.$===3){var We=n.a.a,h=n.b.a;return jo(A(h,{ca:We}))}else break e}return r}),ik=T3(nk),Cv={$:2},fk=function(e){return{$:1,a:e}},c$=function(e){return{$:0,a:e}},z3=function(e){return{$:1,a:e}},Xt=function(e){return{$:0,a:e}},Zi=12,i$=72,Zt=function(e){switch(e){case 0:return{kB:c$(i$),cQ:Xt(Zi)};case 1:return{kB:c$(i$+44),cQ:Xt(Zi+44)};case 2:return{kB:z3(12),cQ:Xt(Zi)};case 3:return{kB:Cv,cQ:Xt(100)};case 4:return{kB:Cv,cQ:fk(40)};case 5:return{kB:c$(i$),cQ:Xt(Zi)};case 6:return{kB:Cv,cQ:Xt(80)};default:return{kB:c$(i$),cQ:Xt(Zi)}}},Pv=function(e){return e.$===3},uk=l(function(e,r){if(e.$)return r;var n=e.a;return A(r,{aK:a(B,n,a(kr,bu(n),r.aK))})}),M3=function(e){return{kB:e.s1.kB+.5*e.f3.ia,cQ:-e.s1.cQ+.5*e.f3.g8}},D3=l(function(e,r){var n=M3(e);return{kB:r.gL.kB+(n.kB-r.g3.kB),cQ:r.gL.cQ+(n.cQ-r.g3.cQ)}}),B3=l(function(e,r){var n="-titlebar",t="draggable-panel-",o="-no-drag",c=function(i){e:for(;;)if(i.b){var f=i.a,$=i.b;if(a(Fn,t,f)&&a(wb,o,f)){if(e.is)return z;var s=$;i=s;continue e}else{if(a(Fn,t,f)&&a(a2,n,f))return D(a(r2,Ja(n),a(Za,Ja(t),f)));var s=$;i=s;continue e}}else return z};return c(r)}),$k=function(e){return a(B3,{is:!0},e)},lk=function(e){return a(B3,{is:!1},e)},vk=l(function(e,r){switch(r.$){case 0:var n=r.a;return n;case 1:var n=r.a;return e-n;default:return e/2}}),sk=l(function(e,r){if(r.$){var n=r.a;return e-n}else{var n=r.a;return n}}),f$=12,A3=x(function(e,r,n){var t=f$-r,o=e-f$-r;return te(o,t)<1?t:v(mr,t,o,n)}),dk=x(function(e,r,n){return{kB:v(A3,e.f3.ia,a(vk,e.f3.ia,r.kB),n.kB),cQ:v(A3,e.f3.g8,a(sk,e.f3.g8,r.cQ),n.cQ)}}),bk=x(function(e,r,n){return a(ne,e,a(de,Tu,Sr(a(kr,function(t){var o=t.a;return fe(o,r)},n.cK))))}),mk={kB:0,cQ:0},H3=J(function(e,r,n,t){return v(dk,e,r,v(bk,mk,n,t))}),pk=x(function(e,r,n){return a(B,g(e,r),a(kr,function(t){var o=t.a;return!fe(o,e)},n))}),I3=x(function(e,r,n){var t=n,o=t.ec;if(o.$===1)if(e.s1.iK){var c=function(p){return a(Yr,function(h){return a(de,Fi(h),r(h))},a(Yr,t.rc,p(e.s1.lt)))},i=a(uk,a(de,vn,c(lk)),t),f=c($k);if(f.$)return i;var $=f.a,s=$.a,d=$.b;return A(i,{ec:D({gL:C(H3,e,d,s,i),g3:M3(e),by:s})})}else return n;else{var b=o.a;if(e.s1.mb)return n;var _=a(D3,e,b);return A(t,{ec:z,cK:v(pk,b.by,_,t.cK)})}}),hk=l(function(e,r){var n=a(Yr,function(c){var i=c.j1-e.lo;return i<=0?z:D(A(c,{j1:i}))},r.d4),t=v(I3,e,a(rr,D,Zt),r.f),o=Pv(r.aL)&&!a(Br,3,t)?ik(r.aL):r.aL;return A(r,{d4:n,f:t,aL:o})}),Yi=12,V3=function(e){return{kB:z3(Yi),cQ:Xt(Yi+e*40)}},gk=l(function(e,r){return a(de,V3,a(Au,function(n){return fe(n.by,r)},e))}),R3=function(e){return ae},u$=l(function(e,r){if(r.$===-2)return En;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;return I(Ae,n,t,a(e,t,o),a(u$,e,c),a(u$,e,i))}),_k=l(function(e,r){var n=dn(a(N,function(i){return g(gv(i).by,i)},r)),t=a(u$,l(function(i,f){return gv(f).bc}),n),o=a(xr,function(i){var f=i.a,$=i.b;return a(Vu,f,e)?z:D($)},Wa(n)),c=a(xr,function(i){var f=i.a,$=i.b;return a(Vu,f,n)?z:D({by:f,bc:$})},Wa(e));return{rG:t,t2:o,t3:c}}),yk=function(e){return e.eR&&!e.oD},Ck=Bt("assetsUnload",Ut(function(e){return r$(u([g("id",Rr(e.by)),g("instanceId",Rr(e.fG)),g("kind",Rr(e.bc))]))})),Pk=l(function(e,r){return{by:r.by,fG:e,bc:r.bc}}),Sk=l(function(e,r){return Ck(a(N,Pk(e),r))}),kk=Rl(function(e,r,n,t,o,c,i,f,$){var s=a(Ye,f,$.cI);if(s.$)return $;var d=s.a;if(yk(d))return $;var b=d.gG+r.rp.lo,_=qi({gG:b,b2:d.b2,aH:o,ra:D(n),by:d.by,rp:a(hv,c,r.rp),mQ:d.mQ,m$:dc(n),sA:Qu(d),aM:d.aM,cq:t,oD:d.oD,oJ:Ou(n)}),p=v(R3,"play:onTick",v(e.a6.sv,_,r.Q,yn(n)),d.bz),h=p.a,y=p.b,k=p.c,L=v(J0,fe(i,D(f)),y,{cH:$.b8,i0:d.b2}),w=C(e.aC,_,r.Q,yn(n),h),H=a(_k,d.gQ,w),F=Je(H.t2)?ue:a(p3,f,H.t2),V=Je(H.t3)?ue:a(Sk,f,H.t3),q=C(e.a6.cf,_,r.Q,yn(n),h),O=v(I3,_,gk(q),d.hD);return A($,{cz:a(B,F,a(B,V,a(B,a(vc,Co(f),L.gH),$.cz))),cE:X($.cE,k),b8:L.cH,cI:v(Pr,f,A(d,{gG:b,b2:L.i0,gQ:H.rG,bz:h,hD:O}),$.cI)})}),xk=function(e){var r=e.cV;if(r.$){var t=e.iF;if(t.$)return z;var o=t.a;return a(Vi,o,e.aT)?e.iF:z}else{var n=r.a;return D(n)}},F3=function(e){return{$:3,a:e}},E3=function(e){var r=e.b;return _o(r).a.gG},wk=function(e){var r=e;return A(r,{aQ:a(Ne,r.a9-1,r.aQ+1)})},jk=function(e){if(e.$){var n=e.a;return Gi(A(n,{aQ:a(Ne,la(n.en)-1,n.aQ+1)}))}else{var r=e.a;return bc(wk(r))}},Lk=function(e){var r=e;return r.aQ},U3=function(e){if(e.$){var n=e.a;return n.aQ}else{var r=e.a;return Lk(r)}},Tk=function(e){var r=e;return r.a9},G3=function(e){if(e.$){var n=e.a;return la(n.en)}else{var r=e.a;return Tk(r)}},zk=function(e){return fe(U3(e),G3(e)-1)},Mk=function(e){var r=e.a,n=e.b;return zk(n)?z:D(a(za,r,jk(n)))},Sv=X8,q3=q8,Ki=J(function(e,r,n,t){var o=go&r>>>e;if(te(o,Rn(t))>-1){if(e===5)return a(Sv,ac(n),t);var c=nc(C(Ki,e-ln,r,n,uo));return a(Sv,c,t)}else{var i=a(Ii,o,t);if(i.$){var c=nc(C(Ki,e-ln,r,n,q3(i)));return v(jc,o,c,t)}else{var f=i.a,c=nc(C(Ki,e-ln,r,n,f));return v(jc,o,c,t)}}}),kv=l(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d,i=Rn(c),f=Rn(e),$=n+(f-i);if(fe(f,Dr)){var s=te($>>>ln,1<<t)>0;if(s){var d=t+ln,b=C(Ki,d,n,e,q3(nc(o)));return C(Vt,$,d,b,uo)}else return C(Vt,$,t,C(Ki,t,n,e,o),uo)}else return C(Vt,$,t,o,e)}),Dk=l(function(e,r){var n=r.d;return a(kv,a(Sv,e,n),r)}),Bk=l(function(e,r){var n=r;return te(n.a9,n.cx)<0?A(n,{a9:n.a9+1,aQ:n.a9,en:v(Xu,a(Zr,n.cx,n.dc+n.a9),e,n.en)}):A(n,{aQ:n.cx-1,en:v(Xu,n.dc,e,n.en),dc:a(Zr,n.cx,n.dc+1)})}),Ak=l(function(e,r){if(r.$){var t=r.a;return Gi(A(t,{aQ:la(t.en),en:a(Dk,e,t.en)}))}else{var n=r.a;return bc(a(Bk,e,n))}}),W3=l(function(e,r){return A(r,{ph:e.ph,gG:r.gG+e.lo,pW:e.pW,p6:e.p6,iI:e.iI,lo:e.lo,qI:e.qI,qJ:e.qJ,mm:e.mm,sF:e.sF,fY:e.fY,s1:e.s1,f3:e.f3,ti:e.ti,t5:e.t5,uu:e.uu})}),Hk=x(function(e,r,n){var t=n.a,o=n.b;switch(t.$){case 2:return g(n,ue);case 3:var c=t.a.kl;return g((te(c+r.lo,E3(n))>0?a(He,Mk,ne(a(za,n$,o))):ae)(a(za,F3({kl:c+r.lo}),o)),ue);case 1:var i=_o(o),s=i.a,d=i.b,b=a(W3,r,s),f=a(e,b,d),p=f.a,h=f.b;return g(a(za,Z0,a(Ak,g(b,p),o)),h);default:var $=_o(o),s=$.a,d=$.b,b=a(W3,r,s),_=a(e,b,d),p=_.a,h=_.b;return g(a(za,Ui,a(o3,g(b,p),o)),h)}}),Ik=x(function(e,r,n){var t=Q2({jF:r.sH,jX:lv(n.aT),aa:r.fY,uw:r.f3}),o=xk({cV:t.cV,iF:n.aH,aT:n.aT}),c=a(ek,r,n.ra),i=l(function(p,h){var y=t,k=A(h,{rp:r}),L=pv(c),w=v(ve,Wr(kk,e,k,c,y,o,L,Sr(n.aT)),{cz:P,cE:P,b8:k.b2,cI:k.cI},n.aT),H=v(ju,e,w.cE,k.Q),F=H.a,V=H.b;return g(A(k,{b2:w.b8,cI:w.cI,Q:F}),fa(a(B,V,w.cz)))}),f=v(Hk,i,r,n.tX),$=f.a,s=f.b,d=a(hk,a(k3,A(n,{tX:$}),sc($)),c),b=(function(){var p=d.oK;return A(d,{oK:A(p,{qG:z})})})(),_=$t($)?ak(S3($)):ue;return g(A(n,{aH:o,ra:b,tX:$}),fa(u([s,_])))}),AG=1,HG=0,ef=function(e){var r=e;return A(r,{aU:!1})},Vk=function(e){var r=e;return A(r,{bg:ef(r.bg)})},Rk=function(e){var r=e;return A(r,{bg:ef(r.bg)})},N3=function(e){return{$:14,a:e}},Q3="play-command-palette",xv={fk:Q3,eG:320,jP:"Type a command\u2026",u:N3,ia:{rY:400,ur:50}},O3=3,Fk=l(function(e,r){return!Pv(e)&&Pv(r)}),Ek=function(e){switch(e){case 0:return 1;case 1:return 2;default:return 0}},Uk=J7("focus"),J3=function(e){return e.fk+"-search"},rf=l(function(e,r){var n=r,t=a(ne,0,a(Yr,function(c){return a(Hu,c,n.aR)},n.et)),o=a(x2,e,t);return g(A(n,{aU:!0,bT:o,ax:t}),fa(u([a(ut,function(c){return e.u(Ca)},Uk(J3(e))),a(ut,function(c){return e.u(Ca)},v(xo,ko(e),0,o))])))}),Gk=l(function(e,r){var n=r,t=a(rf,gc(e),a(Ri,D(n.cA),n.bg)),o=t.a,c=t.b;return g(A(n,{bg:o}),c)}),qk=x(function(e,r,n){var t=n,o=a(rf,_c(e),a(Ri,O0(r),t.bg)),c=o.a,i=o.b;return g(A(t,{bg:c}),i)}),Wk=dv,wv={$:2},X3=function(e){return{$:1,a:e}},Nk={$:3},jv=function(e){return{$:0,a:e}},Lv=l(function(e,r){return e<0?z:Sr(a(Gt,e,r))}),Qk=l(function(e,r){e:for(;;){var n=g(e,r);if(n.a.b)if(n.b.b){var t=n.a,o=t.a,c=t.b,i=n.b,f=i.a,$=i.b;if(fe(o,f)){var s=c,d=$;e=s,r=d;continue e}else{var s=e,d=$;e=s,r=d;continue e}}else return!1;else return!0}}),Ok=J(function(e,r,n,t){return{kU:r,lS:e,nw:n,nx:t}}),Jk=2,Xk=s6,Zk=12,Yk=-3,Kk=-1,ex=-1,Tv=16,Lo=-a(bn,2,30),rx=Te(function(e,r,n,t,o){var c=I(Xk,Ok,r,n,t,o),i={fn:P,eA:0,hc:Lo,hd:Lo,he:Lo,fQ:P},f=e.md?ex:Yk,$=l(function(d,b){var _=d.lS,p=d.kU,h=d.nw,y=d.nx,k=fe(_,e.nn)?e.mc?b.eA*Kk+Tv+p*Jk:b.eA?a(we,b.he+Tv+p,b.hd+Tv+Zk):Lo:Lo,L=a(we,k,b.hc+f);return{fn:a(B,k,b.fn),eA:b.eA+1,hc:L,hd:h,he:y,fQ:a(B,L,b.fQ)}}),s=v(ve,$,i,c);return g(Re(s.fn),Re(s.fQ))}),ax=function(e){return v(ve,l(function(r,n){return r}),Lo,e)},nx=x(function(e,r,n){e:for(;;){if(r<=0)return e;var t=a(B,n,e),o=r-1,c=n;e=t,r=o,n=c;continue e}}),tx=l(function(e,r){return v(nx,P,e,r)}),ox=x(function(e,r,n){var t=Cr(e),o=Cr(r),c=a(tx,o,Lo),i=a(Vn,Fi,e),f=v(ve,l(function(s,d){var b=s.a,_=s.b,p=d.a,h=d.b;return I(rx,{mc:!b,md:fe(b,t-1),nn:_},r,n,p,h)}),g(c,c),i),$=f.b;return ax($)}),cx=l(function(e,r){var n=r;if(ho(e))return D(0);var t=a(N,E0,Si(e));return a(Qk,t,n.je)?D(v(ox,t,n.je,n.kV)):z}),zv=function(e){return{$:8,a:e}},Z3=l(function(e,r){var n=Qt*r.ax,t=n-r.bT,o=r.bT+e.eG-(n+Qt);if(t<0)return a(ut,function(i){return e.u(zv(n))},v(xo,ko(e),0,n));if(o<0){var c=r.bT-o;return a(ut,function(i){return e.u(zv(c))},v(xo,ko(e),0,c))}else return ue}),ix=b6,Mv=x(function(e,r,n){var t=n;switch(r.$){case 0:var o=r.a,c=ho(o)?a(N,vn,t.hG):a(N,Tu,a(ix,l(function(k,L){var w=k.a,H=L.a;return a(y0,H,w)}),a(xr,function(k){var L=k.a,w=k.b;return a(de,function(H){return g(H,L)},a(cx,o,w))},t.hG)));return R(A(t,{aR:c,bT:0,hT:o,ax:0}),a(ut,function(k){return e.u(Ca)},v(xo,ko(e),0,0)),a(de,jv,Sr(c)));case 1:var p=a(we,0,t.ax-1),i=A(t,{ax:p});return R(i,a(Z3,e,i),a(de,jv,a(Lv,p,t.aR)));case 2:var p=a(Ne,Cr(t.aR)-1,t.ax+1),i=A(t,{ax:p});return R(i,a(Z3,e,i),a(de,jv,a(Lv,p,t.aR)));case 3:var f=a(Lv,t.ax,t.aR);if(f.$===1)return R(A(t,{aU:!1}),ue,D(wv));var $=f.a;return R(A(t,{et:D($),aU:!1}),ue,D(X3($)));case 4:return R(A(t,{aU:!1}),ue,D(wv));case 10:var s=a(rf,e,t),d=s.a,b=s.b;return R(d,b,D(Nk));case 5:var _=r.a;return R(A(t,{et:D(_),aU:!1}),ue,D(X3(_)));case 6:var _=r.a,p=a(ne,t.ax,a(Hu,_,t.aR));return R(A(t,{ax:p}),ue,z);case 7:return R(A(t,{aU:!1}),ue,D(wv));case 8:var h=r.a;return R(A(t,{bT:h}),ue,z);case 9:var y=r.a;return R(t,a(ut,function(k){return e.u(Ca)},v(xo,ko(e),0,t.bT+y)),z);default:return R(t,ue,z)}}),fx=x(function(e,r,n){var t=n;if(r.$===1){var o=r.a;return g(A(t,{dF:o}),ue)}else{var c=r.a,i=v(Mv,gc(e),c,t.bg),f=i.a,$=i.b,s=i.c,d=(function(){e:for(;;){if(s.$)break e;switch(s.a.$){case 1:var b=s.a.a;return b;case 0:var b=s.a.a;return b;default:break e}}return t.cA})();return g(A(t,{cA:d,bg:f}),$)}}),ux=function(e){var r=e;return Je(r.p)?$2(e):u2(e)},$x=function(e){var r=e;return 1+Cr(r.n)+Cr(r.p)},lx=function(e){return a(Fu,$x(e)-1,e)},vx=function(e){var r=e,n=r.n;if(n.b){var t=n.a,o=n.b;return{p:a(B,r.fl,r.p),n:o,fl:t}}else return r},sx=function(e){var r=e;return Je(r.n)?lx(e):vx(e)},Y3=x(function(e,r,n){var t=e(n.cR);return R(A(n,{cR:t}),a(Y0,yo(t),r),ue)}),dx=J(function(e,r,n,t){var o=t;switch(r.$){case 1:var c=r.a,i=a(ne,o.cR,a(l2,c,o.cR));return R(A(o,{cR:i}),a(Y0,c,n),ue);case 2:return v(Y3,sx,n,o);case 3:return v(Y3,ux,n,o);default:var f=r.a,$=v(Mv,_c(e),f,o.bg),s=$.a,d=$.b,b=$.c,_=(function(){if(b.$)return n;switch(b.a.$){case 1:var p=b.a.a;return a(K0,p,n);case 0:var p=b.a.a;return a(K0,p,n);case 2:var h=b.a;return n;default:var y=b.a;return n}})();return R(A(o,{bg:s}),_,d)}}),Pa=function(e){return{$:1,a:e}},Dv=function(e){return{$:2,a:e}},af=function(e){return{$:0,a:e}},nf={$:1},K3={$:3},bx=500,mx=200,px=l(function(e,r){var n=g(r,e);if(n.a.$)switch(n.b.$){case 0:var y=n.a.a,$=n.b,c=$.a,i=$.b,s=(function(){var q=y.X;switch(q.$){case 0:return af(0);case 1:return nf;case 2:return nf;default:return K3}})();return Pa({br:i,eb:c.eb,i5:c.i5,X:s,nZ:c.nZ});case 1:var y=n.a.a,d=n.b,b=y.X;switch(b.$){case 0:return Ei;case 1:return Pa(A(y,{X:Dv(0)}));case 2:return Pa(A(y,{X:Dv(0)}));default:return Ei}case 2:var y=n.a.a,_=n.b;return Pa(A(y,{X:K3}));case 3:var y=n.a.a,p=n.b,h=y.X;switch(h.$){case 0:return Pa(A(y,{X:af(0)}));case 1:return Pa(A(y,{X:nf}));case 2:return Pa(A(y,{X:nf}));default:return Pa(A(y,{X:af(0)}))}default:var y=n.a.a,k=n.b.a,L=y.X;switch(L.$){case 0:var w=L.a,H=w+k;return te(H,bx)>0?Pa(A(y,{X:nf})):Pa(A(y,{X:af(H)}));case 2:var w=L.a,H=w+k;return te(H,mx)>0?Ei:Pa(A(y,{X:Dv(H)}));case 1:return Pa(y);default:return Pa(y)}}else if(n.b.$){var f=n.a;return Ei}else{var t=n.a,o=n.b,c=o.a,i=o.b;return Pa({br:i,eb:c.eb,i5:c.i5,X:af(0),nZ:c.nZ})}}),hx=l(function(e,r){var n=r;return a(px,e,n)}),gx=x(function(e,r,n){var t=e.f4,o=e.pJ;switch(r.$){case 0:var or=r.a;if(t.b9){var c=C(dx,yc,or,n.e,n.R),i=c.a,y=c.b,f=c.c;return R(A(n,{R:i,e:y}),f,z)}else return R(n,ue,z);case 1:var or=r.a;if(t.ds){var $=v(fx,Gu,or,n.S),Ue=$.a,s=$.b;return R(A(n,{S:Ue}),s,z)}else return R(n,ue,z);case 2:var or=r.a;return R(A(n,{cN:a(hx,or,n.cN)}),ue,z);case 3:var or=r.a,d=n.aL,b=a(T3,or,d),_=a(Fk,d,b),p=_?a(Nt,q0(3),n.f):n.f;return R(A(n,{f:p,aL:b}),ue,z);case 4:if(t.b9){var y=ev(n.e),h=v(X0,yc,y,n.R),be=h.a,f=h.b;return R(A(n,{R:be,e:y}),f,z)}else return R(n,ue,z);case 5:var y=r.a;if(!t.b9||fe(y,n.e))return R(n,ue,z);var k=v(X0,yc,y,n.R),be=k.a,f=k.b;return R(A(n,{R:be,e:y}),f,z);case 6:var or=r.a,L=a(Br,6,n.f),w=a(Br,5,n.f),H=a(Nt,or,n.f),F=a(Br,6,H),V=a(Br,5,H),q=a(Br,7,n.f),O=a(Br,7,H),K=n.oK,ce=!w&&V?v(qk,yc,n.e,n.R):g(w&&!V?Rk(n.R):n.R,ue),be=ce.a,ke=ce.b,Me=(function(){if(L&&!F)return g(A(K,{P:ef(K.P)}),ue);if(!L&&F){var Mn=a(rf,xv,K.P),ir=Mn.a,tt=Mn.b;return g(A(K,{P:ir}),tt)}else return g(K,ue)})(),Le=Me.a,ie=Me.b,Ve=!q&&O?a(Gk,Gu,n.S):g(q&&!O?Vk(n.S):n.S,ue),Ue=Ve.a,er=Ve.b;return R(A(n,{oK:Le,S:Ue,f:H,R:be}),fa(u([ie,ke,er])),z);case 7:return R(A(n,{oJ:!n.oJ}),ue,z);case 8:return R(A(n,{bE:!n.bE}),ue,z);case 9:var qe=r.a;return R(A(n,{d4:D({br:qe,ht:!o,j1:O3})}),ue,o?D(0):z);case 10:return R(n,ue,D(1));case 11:var Lr=r.a;return!t.dt||fe(Lr,n.m$)?R(n,ue,z):R(A(n,{m$:Lr}),ue,z);case 12:return t.dt?R(A(n,{m$:Ek(n.m$)}),ue,z):R(n,ue,z);case 13:if(a(Qi,t,n.oK.P)){var L=a(Br,6,n.f),H=a(Nt,Wk(6),n.f),K=n.oK,We=L?g(ef(K.P),ue):a(rf,xv,K.P),i=We.a,f=We.b;return R(A(n,{oK:A(K,{P:i}),f:H}),f,z)}else return R(n,ue,z);case 14:var or=r.a;if(a(Qi,t,n.oK.P)){var K=n.oK,Tr=v(Mv,xv,or,n.oK.P),i=Tr.a,f=Tr.b,Ur=Tr.c,ja=(function(){e:for(;;){if(Ur.$)break e;switch(Ur.a.$){case 1:return!0;case 2:var ot=Ur.a;return!0;default:break e}}return!1})(),Va=ja?a(Nt,l3(6),n.f):n.f,Le=(function(){if(!Ur.$&&Ur.a.$===1){var ot=Ur.a.a;return A(K,{P:ef(i),qG:D(g(ot.hV,ot.i5))})}else return A(K,{P:i})})();return R(A(n,{oK:Le,f:Va}),f,z)}else return R(n,ue,z);default:return R(n,ue,z)}}),_x=l(function(e,r){var n=r;return A(n,{aQ:v(mr,0,n.a9-1,e)})}),yx=l(function(e,r){if(r.$){var t=r.a;return Gi(A(t,{aQ:v(mr,0,la(t.en)-1,e)}))}else{var n=r.a;return bc(a(_x,e,n))}}),Cx=l(function(e,r){var n=r.b;return a(za,n$,a(yx,e,n))}),Px=function(e){var r=e.b;return a(za,n$,r)},Sx=function(e){var r=e.b;return a(za,F3({kl:E3(e)}),r)},kx=l(function(e,r){switch(e.$){case 1:return Px(r);case 2:return z2(r);case 3:return Sx(r);default:var n=e.a;return a(Cx,n,r)}}),xx=x(function(e,r,n){switch(r.$){case 0:var t=r.a;return v(Ik,e,t,n);case 1:var o=r.a,c=r.b;return C(dS,e,o,c,n);case 2:var d=r.a,i=r.b;return v(iS,d,i,n);case 3:var f=r.a;return v(nS,e,u([f]),n);case 4:var d=r.a,$=r.b;return v(NS,d,$,n);case 5:var d=r.a,s=r.b;return v(DS,d,s,n);case 6:return g(n,ue);case 7:var d=r.a,b=r.b,_=r.c;return C(ES,d,b,_,n);case 8:return g(A(n,{gM:z}),ue);case 9:var p=r.a,h=sc(n.tX).b2,y=!Je(a(m3,e.rk,h)),k=v(gx,{pJ:y,f4:e.ra},p,n.ra),L=k.a,w=k.b,H=k.c,F=v(cS,e,H,A(n,{ra:L})),V=F.a,q=F.b;return g(V,fa(u([a(vc,wu,w),q])));case 10:var O=r.a;return g(A(n,{tX:a(kx,O,n.tX)}),ue);case 11:return W2(n.ra)?g(A(n,{ra:bS(n.ra),tX:mS(n.tX)}),ue):g(A(n,{ra:P2(n.ra)}),ue);case 12:var K=r.a;return v(RS,e,K,n);default:return g(n,ue)}}),wx=Bt("setLocalStorage",function(e){return r$(u([g("key",Rr(e.i3)),g("value",Rr(e.um))]))}),jx=l(function(e,r){var n=r.a,t=r.b,o=a(Nb,e,n),c=a(xr,function(i){var f=i.a,$=i.b;return fe(a(Wt,f,n.fI),D($))?z:D(wx({i3:f,um:$}))},o);return Je(c)?g(n,t):g(A(n,{fI:o}),fa(a(B,t,c)))}),Lx=x(function(e,r,n){return a(jx,e,v(xx,e,r,n))}),Tx=function(e){return{$:12,a:e}},zx={$:8},em=hn,Mx=qa("button"),Tc=qa("code"),Dx=qa("li"),$$=qa("p"),Bx=qa("ul"),Ax=function(e){if(e.$){var r=e.a;return a(pn,u([a(Z,"margin-top","0.4rem")]),u([a($$,u([a(Z,"margin","0 0 0.25rem 0")]),u([Fr("Two or more instances share the same id:")])),a(Bx,u([a(Z,"margin","0 0 0.5rem 0"),a(Z,"padding-left","1.25rem")]),a(N,function(n){return a(Dx,P,u([a(Tc,P,u([Fr(n)]))]))},r)),a($$,u([a(Z,"margin","0")]),u([Fr("Each "),a(Tc,P,u([Fr("Play.instance")])),Fr(" needs a unique "),a(Tc,P,u([Fr("id")])),Fr(" \u2014 the runtime keys per-instance state, asset registries, and DOM nodes by it.")]))]))}else return a(pn,u([a(Z,"margin-top","0.4rem")]),u([a($$,u([a(Z,"margin","0")]),u([a(Tc,P,u([Fr("Play.multipage")])),Fr(" was called with an empty "),a(Tc,P,u([Fr("instances")])),Fr(" list. Add at least one "),a(Tc,P,u([Fr("Play.instance { ... }")])),Fr(" to the list.")]))]))},Hx=qa("details"),rm=function(e){return{$:0,a:e}},l$=ld,Ix=l(function(e,r){return a(l$,e,rm(r))}),Vx=function(e){return a(Ix,"click",ee(e))},Rx=qa("strong"),Fx=qa("summary"),Ex=function(e){return a(pn,u([a(Z,"position","fixed"),a(Z,"top","1rem"),a(Z,"left","50%"),a(Z,"transform","translateX(-50%)"),a(Z,"max-width","min(40rem, calc(100vw - 2rem))"),a(Z,"padding","1rem 2.75rem 1rem 1.25rem"),a(Z,"background","#fff5f5"),a(Z,"color","#742a2a"),a(Z,"border","1px solid #fc8181"),a(Z,"border-radius","0.5rem"),a(Z,"box-shadow","0 4px 24px rgba(0, 0, 0, 0.15)"),a(Z,"font-family","system-ui, -apple-system, sans-serif"),a(Z,"font-size","0.95rem"),a(Z,"line-height","1.5"),a(Z,"z-index","2147483647")]),u([a(Rx,u([a(Z,"display","block"),a(Z,"color","#c53030"),a(Z,"margin-bottom","0.35rem")]),u([Fr("This page has a configuration problem.")])),a($$,u([a(Z,"margin","0 0 0.5rem 0")]),u([Fr("Please notify the page author so they can fix it.")])),a(Hx,u([a(Z,"margin-top","0.5rem"),a(Z,"color","#742a2a"),a(Z,"font-size","0.88rem")]),u([a(Fx,u([a(Z,"cursor","pointer"),a(Z,"user-select","none")]),u([Fr("Technical detail (for the developer)")])),Ax(e)])),a(Mx,u([Vx(zx),a(em,"aria-label","Dismiss"),a(Z,"position","absolute"),a(Z,"top","0.5rem"),a(Z,"right","0.5rem"),a(Z,"width","1.75rem"),a(Z,"height","1.75rem"),a(Z,"padding","0"),a(Z,"border","none"),a(Z,"background","transparent"),a(Z,"color","#742a2a"),a(Z,"cursor","pointer"),a(Z,"font-size","1.4rem"),a(Z,"line-height","1"),a(Z,"border-radius","0.25rem")]),u([Fr("\xD7")]))]))},Ux=function(e){switch(e){case 0:return 44;case 1:return 40;default:return 24}},Gx=function(e){var r=e;return Ux(r.cA.aD)},qx=function(e){return Gx(e.S)},cr=l(function(e,r){return e(Nn(r))}),Bv="scrollbar-muted",am=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Wx=am,Cn=Wx,Av=function(e){return{$:4,a:e}},nm=function(e){return Av(Pu(e))},oe=nm,Se=function(e){return"hsla("+(W(e.aS*360)+(", "+(W(e.a0*100)+("%, "+(W(e.D*100)+("%, "+(W(e.oR)+")")))))))},tm=l(function(e,r){var n=Se(a(cr,function(c){return c.iv},r)),t=Se(a(cr,function(c){return c.$8},r)),o=Se(a(cr,function(c){return c.bp},r));return v(Cn,"style",P,u([oe(`
/* Firefox + recent standards-compliant browsers */
`+(e+(`* {
  scrollbar-width: thin;
  scrollbar-color: `+(o+(` transparent;
}
`+(e+("."+(Bv+(` {
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
`+(e+("."+(Bv+(`::-webkit-scrollbar-thumb {
  background-color: `+(n+(`;
}
`+(e+("."+(Bv+(`::-webkit-scrollbar-thumb:hover {
  background-color: `+(t+`;
}
`))))))))))))))))))))))))))))))))))))]))}),Nx=function(e){return a(tm,"",e)},Qx=l(function(e,r){return a(vd,e,Rr(r))}),om=Qx("id"),Ox=x(function(e,r,n){return v(Pr,e,{eR:r.eR,oD:r.oD},n)}),cm=s7,im=cm,fm=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Jx=J(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),um=J(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),lt=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xx=y7,v$=l(function(e,r){var n=r.a,t=r.b,o=r.c;return v(lt,a(Xx,e,n),t,o)}),tf=l(function(e,r){switch(r.$){case 0:var t=r.a,o=r.b,c=r.c;return v(am,t,a(N,v$(e),o),a(N,tf(e),c));case 1:var n=r.a,t=r.b,o=r.c,c=r.d;return C(um,n,t,a(N,v$(e),o),a(N,tf(e),c));case 2:var t=r.a,o=r.b,c=r.c;return v(fm,t,a(N,v$(e),o),a(N,function(f){var $=f.a,s=f.b;return g($,a(tf,e,s))},c));case 3:var n=r.a,t=r.b,o=r.c,c=r.d;return C(Jx,n,t,a(N,v$(e),o),a(N,function(f){var $=f.a,s=f.b;return g($,a(tf,e,s))},c));default:var i=r.a;return Av(a(cm,e,i))}}),of=tf,Q=Cn("div"),$m=l(function(e,r){return v(lt,a(M0,e,r),!1,"")}),vt=l(function(e,r){return a($m,e,Rr(r))}),Yt=vt("id"),Zx=function(e){return X(N2,e)},lm=function(e){return{$:0,a:e}},IG=ae,M=l(function(e,r){return lm(e+(":"+r))}),se=l(function(e,r){return a(M,e,r.um)}),ea=se("cursor"),Yx=function(e){var r=e;return a(de,function(n){return n.by},r.ec)},Hv=l(function(e,r){return!a(Mu,a(rr,L0,e),r)}),Kx=l(function(e,r){var n=r.a,t=r.b;switch(e.$){case 0:var o=e.a,$=o.c;return Je($)?g(n,t):g(n,a(B,e,t));case 1:var c=e.b;return a(Hv,function(d){var b=d.c;return Je(b)},c)?g(n,t):g(n,a(B,e,t));case 2:var i=e.b;return Je(i)?g(n,t):g(n,a(B,e,t));case 3:return g(n,a(B,e,t));case 4:var $=e.a;return Je($)?g(n,t):g(n,a(B,e,t));case 5:var $=e.a;return Je($)?g(n,t):g(n,a(B,e,t));case 6:var f=e.a;return ho(f.pY)?g(n,t):g(v(Pr,f.r7,f.pY,n),t);case 7:var $=e.a;return Je($)?g(n,t):g(n,a(B,e,t));case 8:var $=e.a;return Je($)?g(n,t):g(n,a(B,e,t));default:var s=e.a;return a(Hv,function(d){var b=d.b;return Je(b)},s)?g(n,t):g(n,a(B,e,t))}}),vm=function(e){return{$:6,a:e}},ew=l(function(e,r){return a(V0,a(N,function(n){var t=n.a,o=n.b;return vm({pY:o,r7:t})},Wa(e)),r)}),rw=function(e){var r=v(Ya,Kx,g(Fe,P),e),n=r.a,t=r.b;return a(ew,n,t)},aw=function(e){var r=e.pZ,n=e.m3,t=e.l_,o=e.k5;return{k5:o,pZ:rw(r),l_:t,m3:n}},nw=function(e){return a(ne,"",a(de,function(r){return'@charset "'+(r+'"')},e))},tw=J(function(e,r,n,t){e:for(;;)if(n.b)if(n.b.b){var o=n.a,c=n.b,i=e,f=r,$=c,s=t+(e(o)+(r+""));e=i,r=f,n=$,t=s;continue e}else{var o=n.a;return t+(e(o)+"")}else return t}),va=x(function(e,r,n){return C(tw,e,r,n,"")}),sm=function(e){return"("+(e.lB+(a(ne,"",a(de,rg(": "),e.um))+")"))},ow=function(e){switch(e){case 0:return"print";case 1:return"screen";default:return"speech"}},dm=function(e){var r=x(function(c,i,f){return c+(" "+a(Mr," and ",a(B,ow(i),a(N,sm,f))))});switch(e.$){case 0:var t=e.a;return v(va,sm," and ",t);case 1:var n=e.a,t=e.b;return v(r,"only",n,t);case 2:var n=e.a,t=e.b;return v(r,"not",n,t);default:var o=e.a;return o}},cw=l(function(e,r){return'@import "'+(e+(dm(r)+'"'))}),iw=function(e){var r=e.a,n=e.b;return v(va,cw(r),`
`,n)},fw=function(e){var r=e.a,n=e.b;return"@namespace "+(r+('"'+(n+'"')))},uw=function(e){return v(va,function(r){var n=r;return n+";"},"",e)},$w=G6,lw=function(e){var r=e;return"::"+r},vw=function(e){switch(e){case 0:return"+";case 1:return"~";case 2:return">";default:return""}},Iv=function(e){switch(e.$){case 0:var r=e.a;return"."+r;case 1:var r=e.a;return"#"+r;case 2:var r=e.a;return":"+r;default:var r=e.a;return"["+(r+"]")}},bm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return X(r,v(va,Iv,"",n));case 1:var n=e.a;return Je(n)?"*":v(va,Iv,"",n);default:var r=e.a,n=e.b;return X(r,v(va,Iv,"",n))}},sw=function(e){var r=e.a,n=e.b;return vw(r)+(" "+bm(n))},dw=function(e){var r=e.a,n=e.b,t=e.c,o=a(B,bm(r),a(N,sw,n)),c=a(ne,"",a(de,lw,t));return a($w,a(Mr," ",o),c)},mm=function(e){var r=e.a,n=e.b,t=e.c,o=v(va,dw,",",a(B,r,n));return o+("{"+(uw(t)+"}"))},bw=function(e){switch(e.$){case 0:var r=e.a;return mm(r);case 1:var n=e.a,t=e.b,o=v(va,dm,", ",n),c=v(va,mm,`
`,t);return"@media "+(o+("{"+(c+"}")));case 2:return"TODO";case 3:return"TODO";case 4:return"TODO";case 5:return"TODO";case 6:var i=e.a.pY,f=e.a.r7;return"@keyframes "+(f+("{"+(i+"}")));case 7:return"TODO";case 8:return"TODO";default:return"TODO"}},mw=function(e){var r=e.pZ,n=e.m3,t=e.l_,o=e.k5;return nw(o)+(v(va,iw,`
`,t)+(v(va,fw,`
`,n)+(v(va,bw,`
`,r)+"")))},pm=function(e){return{$:8,a:e}},hm=function(e){return{$:5,a:e}},gm=function(e){return{$:4,a:e}},cf=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Kt=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ff=function(e){return{$:0,a:e}},Vv=l(function(e,r){return{$:2,a:e,b:r}}),_m=function(e){return{$:7,a:e}},To=l(function(e,r){return{$:1,a:e,b:r}}),Rv=l(function(e,r){if(r.b)if(r.b.b){var t=r.a,o=r.b;return a(B,t,a(Rv,e,o))}else{var n=r.a;return u([e(n)])}else return r}),ym=l(function(e,r){var n=r.a,t=r.b,o=r.c;return v(Kt,n,t,X(o,u([e])))}),Fv=l(function(e,r){if(r.b)if(r.b.b){var i=r.a,f=r.b;return a(B,i,a(Fv,e,f))}else switch(r.a.$){case 0:var n=r.a.a;return u([ff(a(ym,e,n))]);case 1:var t=r.a,o=t.a,c=t.b;return u([a(To,o,a(Rv,ym(e),c))]);default:return r}else return r}),Cm=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c,i=a(N,e,c),f=e(o);return u([v(Kt,o,c,t),v(Kt,f,i,P)])}else{var n=r.a,t=r.c;return u([v(Kt,n,P,t),v(Kt,e(n),P,P)])}}),pw=l(function(e,r){var n=r.a,t=r.b;return v(cf,n,t,D(e))}),hw=l(function(e,r){return a(Cm,pw(e),r)}),Pm=l(function(e,r){return{$:2,a:e,b:r}}),gw=l(function(e,r){return{$:0,a:e,b:r}}),Sm=function(e){return{$:1,a:e}},km=l(function(e,r){switch(r.$){case 0:var n=r.a,o=r.b;return a(gw,n,X(o,u([e])));case 1:var o=r.a;return Sm(X(o,u([e])));default:var t=r.a,o=r.b;return a(Pm,t,X(o,u([e])))}}),xm=l(function(e,r){if(r.b)if(r.b.b){var c=r.a,i=r.b;return a(B,c,a(xm,e,i))}else{var n=r.a,t=n.a,o=n.b;return u([g(t,a(km,e,o))])}else return P}),_w=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c;return v(cf,o,a(xm,e,c),t)}else{var n=r.a,t=r.c;return v(cf,a(km,e,n),P,t)}}),yw=l(function(e,r){return a(Cm,_w(e),r)}),Ev=function(e){e:for(;;)if(e.b)if(e.a.$){var o=e.b,c=o;e=c;continue e}else{var r=e.a.a,n=r.a,t=r.b,o=e.b;return X(a(B,n,t),Ev(o))}else return P},Uv=Te(function(e,r,n,t,o){return{$:3,a:e,b:r,c:n,d:t,e:o}}),s$=l(function(e,r){e:for(;;)if(r.b){if(r.b.b)break e;switch(r.a.$){case 0:var F=r.a.a;return a(N,ff,e(F));case 1:if(r.a.b.b)if(r.a.b.b.b){var c=r.a,t=c.a,i=c.b,V=i.a,q=i.b,f=a(s$,e,u([a(To,t,q)]));if(f.b&&f.a.$===1&&!f.b.b){var $=f.a,s=$.a,d=$.b;return u([a(To,s,a(B,V,d))])}else{var b=f;return b}}else{var n=r.a,t=n.a,o=n.b,F=o.a;return u([a(To,t,e(F))])}else break e;case 2:var _=r.a,p=_.a,h=_.b;return u([a(Vv,p,a(s$,e,h))]);case 3:var y=r.a,k=y.a,L=y.b,w=y.c,H=y.d,F=y.e;return a(N,C(Uv,k,L,w,H),e(F));case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}else return r;var V=r.a,q=r.b;return a(B,V,a(s$,e,q))}),Cw=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return D(r)}else return z},wm=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return D(u([r]))}else return z},Pw=function(e){e:for(;;)if(e.b){var r=e.a,n=e.b;if(r.$===1){var t=n;e=t;continue e}else return r}else return z},Sw=function(e){return{$:9,a:e}},jm=function(e){var r=function(t){if(t.b){var o=t.a,c=t.b;return a(B,o,r(c))}else return P},n=r(e);return u([Sw(n)])},kw=l(function(e,r){if(r.$)return r;var n=r.a;return a(To,e,u([n]))}),xw=function(e){if(e.b){var r=e.a,n=e.b;return D(n)}else return z},Lm=Te(function(e,r,n,t,o){if(o.$)return o;var c=o.a;return I(Uv,e,r,n,t,c)}),Tm=l(function(e,r){switch(r.$){case 0:var d=r.a;return a(To,e,u([d]));case 1:var n=r.a,t=r.b;return a(To,X(e,n),t);case 2:var o=r.a,c=r.b;return a(Vv,o,a(N,Tm(e),c));case 3:var i=r.a,f=r.b,$=r.c,s=r.d,d=r.e;return I(Uv,i,f,$,s,d);case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}),Gv=function(e){var r=e;return r},zm=J(function(e,r,n,t){var o=function(s){return a(ne,P,xw(s))},c=a(On,r,a(ne,P,wm(t))),i=(function(){var s=g(Sr(c),Cw(t));if(!s.a.$&&!s.b.$){var d=s.a.a,b=s.b.a;return X(a(Gn,Cr(t)-1,t),u([fe(b,d)?b:d]))}else return t})(),f=function(s){return gn(a(Rv,On(e),a(N,Ti,a(s$,n,s))))},$=a(ne,P,a(de,f,wm(t)));return X(i,X(o($),o(c)))}),On=l(function(e,r){if(e.b)switch(e.a.$){case 0:var n=e.a.a,V=e.b;return a(On,V,a(Fv,n,r));case 1:var t=e.a,o=t.a,w=t.b,V=e.b;return C(zm,w,V,yw(o),r);case 2:var c=e.a,i=c.a,f=c.b,V=e.b,$=l(function(q,O){var K=q.a,ce=q.b,be=q.c,ke=O.a,Me=O.b,Le=O.c;return v(cf,K,X(ce,a(B,g(i,ke),Me)),Pw(u([Le,be])))}),s=function(q){switch(q.$){case 0:var O=q.a,K=O.a,ce=O.b,be=O.c,ke=a(_n,function(ja){return a(N,$(ja),a(B,K,ce))},Ev(r)),Me=(function(){if(ke.b){var ja=ke.a,Va=ke.b;return u([ff(v(Kt,ja,Va,P))])}else return P})();return a(On,be,Me);case 1:var Le=q.a,ie=q.b;return a(Mm,Le,ie);case 2:var Ve=q.a,Ue=q.b;return a(Dm,Ve,Ue);case 3:var er=q.a,qe=q.b,Lr=q.c,We=q.d,or=q.e;return a(N,C(Lm,er,qe,Lr,We),d$(or));case 4:var Tr=q.a;return u([gm(Tr)]);case 5:var Tr=q.a;return u([hm(Tr)]);case 6:var Tr=q.a;return u([_m(Tr)]);case 7:var Tr=q.a;return u([pm(Tr)]);default:var Ur=q.a;return jm(Ur)}};return gn(X(u([a(On,V,r)]),a(N,s,a(_n,Gv,f))));case 3:var d=e.a,b=d.a,w=d.b,V=e.b;return C(zm,w,V,hw(b),r);case 5:var _=e.a.a,V=e.b,p=Cb(_),h="animation-name:"+p,y=a(On,V,a(Fv,h,r));return a(V0,y,u([vm({pY:_,r7:p})]));case 4:var k=e.a,L=k.a,w=k.b,V=e.b,H=(function(){var q=Ev(r);if(q.b){var O=q.a,K=q.b;return a(N,kw(L),a(On,w,Ti(ff(v(Kt,O,K,P)))))}else return P})();return X(a(On,V,r),H);default:var F=e.a.a,V=e.b;return a(On,X(F,V),r)}else return r}),d$=function(e){var r=e.a,n=e.b,t=e.c;return a(On,t,u([ff(v(Kt,r,n,P))]))},qv=function(e){if(e.b){var r=e.a,n=e.b;return X(ww(r),qv(n))}else return P},Mm=l(function(e,r){var n=function(t){return a(N,Tm(e),d$(t))};return a(_n,n,r)}),Dm=l(function(e,r){var n=qv(a(_n,Gv,r));return u([a(Vv,e,n)])}),ww=function(e){switch(e.$){case 0:var s=e.a;return d$(s);case 1:var r=e.a,n=e.b;return a(Mm,r,n);case 2:var t=e.a,o=e.b;return a(Dm,t,o);case 3:var c=e.a,i=e.b,f=e.c,$=e.d,s=e.e;return a(N,C(Lm,c,i,f,$),d$(s));case 4:var d=e.a;return u([gm(d)]);case 5:var d=e.a;return u([hm(d)]);case 6:var d=e.a;return u([_m(d)]);case 7:var d=e.a;return u([pm(d)]);default:var b=e.a;return jm(b)}},jw=function(e){var r=e.n1,n=e.m3,t=e.l_,o=e.k5,c=qv(a(_n,Gv,r));return{k5:o,pZ:c,l_:t,m3:n}},Bm=function(e){return mw(aw(jw(e)))},Am=function(e){return{k5:z,l_:P,m3:P,n1:e}},Hm=Av,Lw=function(e){return Hm(v(mo,"span",u([a(hn,"style","display: none;"),a(hn,"class","elm-css-style-wrapper")]),Ti(v(mo,"style",P,Ti(Pu(Bm(Am(e))))))))},VG=0,Tw={aQ:0,um:"grabbing"},RG=ae,zw=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Mw=function(e){return{$:0,a:e}},Im=l(function(e,r){var n=v(cf,r,P,z);return u([Mw(v(zw,n,P,e))])}),Dw=l(function(e,r){return a(Im,r,a(Pm,e,P))}),Vm=function(e){var r=Yx(e);return r.$?oe(""):Lw(u([a(Dw,"body *",u([ea(Tw)]))]))},Ma={sX:0,um:"absolute"},zc={iS:0,fy:0,um:"row"},sa=A(zc,{um:"column"}),Bw=function(e){return{$:0,a:e}},Aw=Sm(u([Bw(A0)])),Rm=function(e){if(e.b){var r=e;return Bm(Am(u([a(Im,e,Aw)])))}else return""},Hw=function(e){var r=Rm(e),n=a(hn,"","");return v(lt,n,!0,r)},E=Hw,_e=a(M,"display","flex"),Ar=se("flex-direction"),FG=0,me=function(e){return{dq:0,hb:0,dx:0,cJ:0,sl:0,hu:0,c7:e,e3:"",go:0,um:Ze(e)}},st={a6:0,o1:1300,rb:1100,r0:1400,nk:100,ol:1500,cN:1200},Ke=se("position"),EG=0,uf=x(function(e,r,n){return{kC:0,k$:0,ei:0,lI:0,fK:0,eC:0,c3:0,eD:0,eE:0,dw:0,dx:0,cJ:0,eF:0,c7:n,e$:0,e3:r,go:e,um:X(W(n),r)}}),j=a(uf,0,"px"),dt=se("right"),Sa=se("top"),UG=0,GG=1,Fm=function(e){return e?"true":"false"},ze=function(e){return a(M,"background-color",e.um)},Em=function(e){return{$:6,a:e}},nr=Em,Iw=J(function(e,r,n,t){return a(M,e,r.um+(" "+(n.um+(" "+t.um))))}),eo=Iw("border"),$r=se("border-radius"),Vw=zr(function(e,r,n,t,o,c){return a(M,e,r.um+(" "+(n.um+(" "+(t.um+(" "+(o.um+(" "+c.um))))))))}),$f=Vw("box-shadow"),qG=0,lr=function(e){return{dx:0,cJ:0,eF:0,sl:0,hu:0,c7:e,e3:"",go:0,um:W(e)}},rn=se("opacity"),an=se("padding"),Pn={pI:l(function(e,r){return j(e+r)}),rC:j(12),rN:j(8),sN:j(9999),tx:j(4),uD:j(20)},pr=l(function(e,r){return A(r,{oR:e})}),ro={bs:0,dQ:0,um:"solid"},Mc=l(function(e,r){return e+("("+(a(Mr,",",r)+")"))}),ka=S6,Rw=function(e){return e*180/ka},lf=function(e){return e*ka/180},Fw=l(function(e,r){var n=Rt(e);return a(Zr,r,n)+e-n}),Ew=x(function(e,r,n){var t=e/lf(60),o=(1-xe(2*n-1))*r,c=n-o/2,i=o*(1-xe(a(Fw,t,2)-1)),f=t<0?R(0,0,0):t<1?R(o,i,0):t<2?R(i,o,0):t<3?R(0,o,i):t<4?R(0,i,o):t<5?R(i,0,o):t<6?R(o,0,i):R(0,0,0),$=f.a,s=f.b,d=f.c;return R($+c,s+c,d+c)}),Uw=Te(function(e,r,n,t,o){var c=v(Ew,Rw(r),n,t),i=c.a,f=c.b,$=c.c;return{oR:o,pa:Rt($),k9:0,q_:Rt(f),s4:Rt(i),um:e}}),Um=function(e){return W(e*100)+"%"},Gw=J(function(e,r,n,t){var o=u([W(e),Um(r),Um(n),W(t)]),c=a(Mc,"hsla",o);return I(Uw,c,e,r,n,t)}),tr=function(e){return C(Gw,e.aS*360,e.a0,e.D,e.oR)},Dc={oR:1,aS:0,D:1,a0:0},le={fK:0,eC:0,c3:0,eD:0,eE:0,dw:0,dx:0,sl:0,c7:0,hC:0,e3:"",go:0,um:"0"},Gm=x(function(e,r,n){var t=e.dF,o=e.p9,c=tr(a(pr,.08,Dc)),i=tr(a(pr,.25,$o)),f=tr(a(pr,.18,Dc));return a(Q,X(r,u([E(u([_e,(function(){return Ar(t===1?sa:zc)})(),a(M,"gap","3px"),an(j(3)),$r(a(Pn.pI,36/2,3)),ze(c),v(eo,j(1),ro,f),a(M,"backdrop-filter","blur(14px) saturate(160%)"),a(M,"-webkit-backdrop-filter","blur(14px) saturate(160%)"),I($f,le,j(6),j(18),j(-6),i),a(M,"pointer-events","auto"),o?rn(lr(.4)):nr(P)]))])),n)}),qw=l(function(e,r){return{$:1,a:e,b:r}}),Ww=function(e){return{$:2,a:e}},Wv=function(e){return qw(Ww(e))},vf=Wv("active"),zo=l(function(e,r){return lm(e+(":"+r))}),b$=x(function(e,r,n){e:for(;;)switch(n.$){case 0:var t=n.a,o=a(ne,"",Sr(a($n,":",t)));return a(zo,r,o);case 1:var c=n.a;return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-selector"));case 2:var i=n.a;return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-combinator"));case 3:var f=n.a;return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-pseudo-element setter"));case 4:return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-media-query"));case 5:return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-keyframes"));default:if(n.a.b)if(n.a.b.b){var p=n.a,h=p.a,y=p.b,d=e,b=r,_=Em(y);e=d,r=b,n=_;continue e}else{var $=n.a,s=$.a,d=e,b=r,_=s;e=d,r=b,n=_;continue e}else return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-empty-Style"))}}),WG=0,m$=v(uf,0,"",0),Oe=function(e){return v(b$,"alignItems","align-items",e(m$))},hr=l(function(e,r){return v(lt,a(hn,e,r),!1,"")}),Ge=hr,NG=1,QG=ae,p$=J(function(e,r,n,t){return{gz:e,gS:D(n),cB:r,h5:D(t)}}),Nv=p$(1),Nw=se("border-style"),OG=25,qm=p$(25),bt=Cn("button"),je=se("center"),ye=function(e){return a(M,"color",e.um)},JG=29,Qw=p$(29),h$=se("border-bottom-left-radius"),g$=se("border-bottom-right-radius"),_$=se("border-top-left-radius"),y$=se("border-top-right-radius"),XG=0,Xe=a(uf,0,"%"),Ow=l(function(e,r){var n=j(4),t=j(18);switch(r){case 0:return u([$r(Xe(50))]);case 2:return u([$r(n)]);case 1:return u(e===1?[_$(t),y$(t),h$(n),g$(n)]:[_$(t),h$(t),y$(n),g$(n)]);default:return u(e===1?[_$(n),y$(n),h$(t),g$(t)]:[_$(n),h$(n),y$(t),g$(t)])}}),Wm=l(function(e,r){return a($m,e,h3(r))}),sf=Wm("disabled"),Jw={$:3},C$=Jw,Y=l(function(e,r){return tr(e(Nn(r)))}),De=se("height"),Jn=Wv("hover"),Qv={bs:0,um:"inset"},Vr=function(e){return v(b$,"justifyContent","justify-content",e(m$))},fr={dZ:0,kQ:0,bs:0,aQ:0,qa:0,q9:0,l2:0,i4:0,eE:0,dw:0,cJ:0,q:0,o:0,jq:0,hC:0,sU:0,cg:0,hL:0,tm:0,e_:0,dR:0,bK:0,kq:0,uh:0,um:"none"},Ov=l(function(e,r){return v(lt,a(l$,e,r),!1,"")}),ra=l(function(e,r){return a(Ov,e,rm(r))}),mt=function(e){return a(ra,"click",ee(e))},nn=se("outline"),tn={aQ:0,um:"pointer"},Mo={sX:0,um:"relative"},ZG=89,Nm=p$(89),Xw=function(e){return Je(e)?{um:"none"}:{um:v(va,function(r){return r.um}," ",e)}},P$=a(rr,se("transform"),Xw),Zw=function(e){switch(e){case 0:return"background";case 1:return"background-color";case 2:return"background-position";case 3:return"background-size";case 4:return"border";case 5:return"border-bottom";case 6:return"border-bottom-color";case 7:return"border-bottom-left-radius";case 8:return"border-bottom-right-radius";case 9:return"border-bottom-width";case 10:return"border-color";case 11:return"border-left";case 12:return"border-left-color";case 13:return"border-left-width";case 14:return"border-radius";case 15:return"border-right";case 16:return"border-right-color";case 17:return"border-right-width";case 18:return"border-top";case 19:return"border-top-color";case 20:return"border-top-left-radius";case 21:return"border-top-right-radius";case 22:return"border-top-width";case 23:return"border-width";case 24:return"bottom";case 25:return"box-shadow";case 26:return"caret-color";case 27:return"clip";case 28:return"clip-path";case 29:return"color";case 30:return"column-count";case 31:return"column-gap";case 32:return"column-rule";case 33:return"column-rule-color";case 34:return"column-rule-width";case 35:return"column-width";case 36:return"columns";case 37:return"filter";case 38:return"flex";case 39:return"flex-basis";case 40:return"flex-grow";case 41:return"flex-shrink";case 42:return"font";case 43:return"font-size";case 44:return"font-size-adjust";case 45:return"font-stretch";case 46:return"font-variation-settings";case 47:return"font-weight";case 48:return"grid-column-gap";case 49:return"grid-gap";case 50:return"grid-row-gap";case 51:return"height";case 52:return"left";case 53:return"letter-spacing";case 54:return"line-height";case 55:return"margin";case 56:return"margin-bottom";case 57:return"margin-left";case 58:return"margin-right";case 59:return"margin-top";case 60:return"mask";case 61:return"mask-position";case 62:return"mask-size";case 63:return"max-height";case 64:return"max-width";case 65:return"min-height";case 66:return"min-width";case 67:return"object-position";case 68:return"offset";case 69:return"offset-anchor";case 70:return"offset-distance";case 71:return"offset-path";case 72:return"offset-rotate";case 73:return"opacity";case 74:return"order";case 75:return"outline";case 76:return"outline-color";case 77:return"outline-offset";case 78:return"outline-width";case 79:return"padding";case 80:return"padding-bottom";case 81:return"padding-left";case 82:return"padding-right";case 83:return"padding-top";case 84:return"right";case 85:return"tab-size";case 86:return"text-indent";case 87:return"text-shadow";case 88:return"top";case 89:return"transform";case 90:return"transform-origin";case 91:return"vertical-align";case 92:return"visibility";case 93:return"width";case 94:return"word-spacing";default:return"z-index"}},Qm=function(e){return W(e)+"ms"},Yw=function(e){switch(e.$){case 0:return"ease";case 1:return"linear";case 2:return"ease-in";case 3:return"ease-out";case 4:return"ease-in-out";case 5:return"step-start";case 6:return"step-end";default:var r=e.a,n=e.b,t=e.c,o=e.d;return"cubic-bezier("+(W(r)+(" , "+(W(n)+(" , "+(W(t)+(" , "+(W(o)+")")))))))}},S$=function(e){var r=v(Xa,0,-1,v(ve,l(function(n,t){var o=n.h5,c=n.gS,i=n.cB,f=n.gz;return t+(Zw(f)+(" "+(Qm(i)+(" "+(a(ne,"",a(de,Qm,c))+(" "+(a(ne,"",a(de,Yw,o))+",")))))))}),"",e));return a(M,"transition",r)},Om=l(function(e,r){return{kq:0,um:a(Mc,"translate",u([e.um,r.um]))}}),Ce=se("width"),Jm=l(function(e,r){var n=Du(e),t=tr(a(pr,n?.18:.64,$o)),o=tr(a(pr,n?.12:.48,$o)),c=tr(n?a(pr,.06,$o):a(pr,.1,Dc)),i=r.$9,f=i.a,$=i.b;return a(bt,X(u([mt(r.fU),sf(r.p9),a(Ge,"role",r.im),a(Ge,f,$),a(Ge,"aria-label",r.i5),E(X(u([Ke(Mo),Ce(j(36)),De(j(36)),Nw(fr),an(le),r.p9?a(M,"cursor","default"):ea(tn),a(M,"background","transparent"),nn(fr),ye(r.mg?a(Y,r.jt,e):a(Y,function(s){return s.tZ},e)),S$(u([v(qm,70,0,C$),v(Nv,70,0,C$),v(Qw,70,0,C$)])),r.mg?nr(u([I($f,Qv,le,j(4),le,o),ze(o)])):r.p9?nr(P):nr(u([Jn(u([ze(c),I($f,Qv,le,j(1),le,c)]))])),r.p9?nr(P):vf(u([I($f,Qv,le,j(6),le,t),ze(t)]))]),a(Ow,r.dF,r.sX)))]),r.dg),u([a(Q,u([E(u([Ce(Xe(100)),De(Xe(100)),_e,Oe(je),Vr(je),r.mg?P$(u([a(Om,le,j(1))])):nr(P),r.p9?nr(P):vf(u([P$(u([a(Om,le,j(1.5))]))])),S$(u([v(Nm,70,0,C$)]))]))]),u([a(Q,u([E(u([Ce(j(24)),De(j(24))]))]),u([r.lX]))]))]))}),k$=l(function(e,r){return v(Gm,{p9:r.p9,dF:1},P,u([a(Jm,e,{im:"button",$9:g("aria-pressed",Fm(r.i2)),p9:r.p9,lX:r.lX,mg:r.i2,i5:r.i5,fU:r.fU,jt:r.ig,dF:1,sX:0,dg:r.dg})]))}),Bc=l(function(e,r){return a(k$,e,{ig:r.oh,p9:r.p9,lX:r.lX,i2:a(Br,r.by,r.bz),i5:r.i5,fU:r.u(dv(r.by)),dg:r.dg})}),Kw=J(function(e,r,n,t){return a(Bc,e,{p9:!1,lX:t.lX,by:t.by,i5:t.oj,bz:r,oh:t.oh,u:n,dg:P})}),Xn=se("z-index"),ej=l(function(e,r){return a(Q,u([E(u([Ke(Ma),Sa(j(Yi)),dt(j(Yi)),_e,Ar(sa),a(M,"gap","6px"),a(M,"pointer-events",r.i_?"none":"auto"),Xn(me(st.rb)),a(M,"transform",r.i_?"translateX(calc(100% + "+(W(Yi)+"px))"):"translateX(0)"),a(M,"transition","transform 280ms cubic-bezier(0.2, 0.9, 0.25, 1)")]))]),a(N,v(Kw,e,r.hD,r.u),r.cf))}),Zn=se("bottom"),da=se("left"),rj=function(e){return u([(function(){var r=e.kB;switch(r.$){case 0:var n=r.a;return da(j(n));case 1:var n=r.a;return dt(j(n));default:return da(Xe(50))}})(),(function(){var r=e.cQ;if(r.$){var n=r.a;return Zn(j(n))}else{var n=r.a;return Sa(j(n))}})()])},df={oO:0,aQ:0,ei:0,hb:0,ry:0,eC:0,c3:0,cJ:0,eQ:0,cg:0,h1:0,e0:0,bK:0,um:"auto"},pt={fe:0,sX:0,h1:0,um:"fixed"},aj=function(e){var r="blur("+(W(e)+"px) saturate(180%)");return nr(u([a(M,"backdrop-filter",r),a(M,"-webkit-backdrop-filter",r)]))},nj={aQ:0,um:"grab"},bf={bs:0,eQ:0,um:"hidden",gq:0},Xm=l(function(e,r){return"draggable-panel-"+(e(r)+"-no-drag")}),Ac=se("overflow"),tj=l(function(e,r){var n=(function(){var t=e.kB;return t.$===2?"calc(-50% + "+(W(r.kB)+"px)"):W(r.kB)+"px"})();return"translate("+(n+(", "+(W(r.cQ)+"px)")))}),ht=se("pointer-events"),oj=x(function(e,r,n){var t=n,o=C(H3,e,r.br,r.by,t),c=t.ec;if(c.$)return o;var i=c.a;return fe(i.by,r.by)?a(D3,e,i):o}),Zm=se("box-shadow"),Ym=Te(function(e,r,n,t,o){return a(M,e,r.um+(" "+(n.um+(" "+(t.um+(" "+o.um))))))}),cj=Ym("box-shadow"),Jv=J(function(e,r,n,t){return{oR:t,pa:n,k9:0,q_:r,s4:e,um:a(Mc,"rgba",X(a(N,Ze,u([e,r,n])),u([W(t)])))}}),Xv={qi:Zm(fr),qj:C(cj,le,j(1),j(2),C(Jv,0,0,0,.3)),qk:a(M,"box-shadow","0 2px 4px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2)"),ql:a(M,"box-shadow","0 12px 24px -8px rgba(0, 0, 0, 0.55), 0 4px 8px -2px rgba(0, 0, 0, 0.4)"),qm:a(M,"box-shadow","0 28px 60px -20px rgba(0, 0, 0, 0.85), 0 8px 24px -8px rgba(0, 0, 0, 0.55)")},ij=l(function(e,r){return v(lt,a(pb,e,r),!1,"")}),Km=ij,e5=48,fj={aQ:0,um:"default"},Hc=se("flex"),uj=se("overflow-x"),r5=se("overflow-y"),$j=x(function(e,r,n){return a(M,e,r.um+(" "+n.um))}),wr=$j("padding"),lj=l(function(e,r){return a(Q,u([E(u([Hc(me(1)),r5(df),uj(df),a(wr,j(16),j(16))]))]),u([a(Q,u([Yt(e),E(u([ea(fj)]))]),u([r]))]))}),vj=function(e){return{$:3,a:e}},sj={od:0,um:"ellipsis"},Zv=x(function(e,r,n){return te(xe(n.D-r.D),e)>-1?n:r.D>.5?A(n,{D:v(mr,0,1,r.D-e)}):A(n,{D:v(mr,0,1,r.D+e)})}),vr=se("flex-shrink"),Do=se("letter-spacing"),a5={fy:0,g0:0,um:"nowrap",dW:0},Yv=se("padding-left"),dj=se("padding-right"),bj=se("text-overflow"),Kv=se("text-transform"),YG=0,Ic=a(uf,0,"em"),sr=se("font-size"),xa=function(e){var r=e.um;return a(M,"font-weight",r)},Sn=se("line-height"),gt={kR:u([sr(j(15)),xa(me(400)),Sn(lr(1.55))]),pu:u([sr(j(13)),xa(me(500)),Sn(lr(1.3)),Do(Ic(.04))]),qa:u([sr(j(46)),xa(me(300)),Sn(lr(1.05)),Do(Ic(-.02))]),q3:u([sr(j(16)),xa(me(650)),Sn(lr(1.3))]),q4:u([sr(j(30)),xa(me(550)),Sn(lr(1.15)),Do(Ic(-.01))]),i5:u([sr(j(14)),xa(me(550)),Sn(lr(1.35))]),oj:u([sr(j(20)),xa(me(650)),Sn(lr(1.25)),Do(Ic(-.005))])},e1={dR:0,um:"uppercase"},mf=se("border"),n5={k9:0,um:"currentColor"},Vc=hr("clip-rule"),pe=hr("d"),mj=function(e){var r=Rm(e),n=a(hn,"","");return v(lt,n,!0,r)},Yn=mj,_t=hr("fill"),pj=um,ao=pj("http://www.w3.org/2000/svg"),r1=ao("svg"),a1=hr("viewBox"),hj=x(function(e,r,n){return v(b7,e,sd(r),dd(n))}),gj=x(function(e,r,n){return v(lt,v(hj,e,r,n),!1,"")}),_j=a(gj,"http://www.w3.org/XML/1998/namespace","xml:space"),he=r1(u([a1("0 0 24 24"),_t("currentColor"),Yn(u([Ce(Xe(100)),De(Xe(100))])),_j("http://www.w3.org/2000/svg")])),Rc=hr("fill-rule"),ge=ao("path"),dr={oL:he(u([a(ge,u([pe("M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z")]),P)])),pb:he(u([a(ge,u([pe("M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z")]),P)])),pA:he(u([a(ge,u([Rc("evenodd"),Vc("evenodd"),pe("M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z")]),P)])),pB:he(u([a(ge,u([Rc("evenodd"),Vc("evenodd"),pe("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),P)])),pC:he(u([a(ge,u([Rc("evenodd"),Vc("evenodd"),pe("M5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071Z")]),P)])),pG:he(u([a(ge,u([pe("M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z")]),P)])),pH:he(u([a(ge,u([pe("M4.00005 16H20V5H4.00005V16ZM13.0001 18V20H17.0001V22H7.00005V20H11.0001V18H2.99205C2.86065 17.9992 2.7307 17.9725 2.60965 17.9214C2.48861 17.8702 2.37885 17.7957 2.28668 17.702C2.19452 17.6084 2.12175 17.4975 2.07256 17.3756C2.02337 17.2538 1.99873 17.1234 2.00005 16.992V4.008C2.00005 3.451 2.45505 3 2.99205 3H21.008C21.556 3 22 3.449 22 4.007V16.992C22 17.549 21.545 18 21.008 18H13.0001Z")]),P)])),pS:he(u([a(ge,u([pe("M11.7143 9.78571L17.5 4L19.4286 5.92857L13.6429 11.7143L19.4286 17.5L17.5 19.4286L11.7143 13.6429L5.92857 19.4286L4 17.5L9.78571 11.7143L4 5.92857L5.92857 4L11.7143 9.78571Z")]),P)])),p5:he(u([a(ge,u([pe("M4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6Z")]),P)])),p7:he(u([a(ge,u([pe("M9 2H15A2 2 0 0 1 17 4V20A2 2 0 0 1 15 22H9A2 2 0 0 1 7 20V4A2 2 0 0 1 9 2Z")]),P)])),qd:he(u([a(ge,u([pe("M11 3h2v7h3l-4 4-4-4h3z M4 17h16v3H4z")]),P)])),qe:he(u([a(ge,u([pe("M11 2h2v7h3l-4 4-4-4h3z M4 16h16v2H4z M7 19h10v2H7z")]),P)])),qh:he(u([a(ge,u([pe("M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z")]),P)])),qu:he(u([a(ge,u([pe("M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z")]),P)])),qv:he(u([a(ge,u([pe("M8.58564 8.85449L3.63589 13.8042L8.83021 18.9985L9.99985 18.9978V18.9966H11.1714L14.9496 15.2184L8.58564 8.85449ZM9.99985 7.44027L16.3638 13.8042L19.1922 10.9758L12.8283 4.61185L9.99985 7.44027ZM13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966Z")]),P)])),qK:he(u([a(ge,u([pe("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z")]),P)])),qT:he(u([a(ge,u([pe("M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z")]),P)])),qX:he(u([a(ge,u([pe("M20.0601 11.6104C20.0639 11.7454 20.0639 11.8804 20.0601 12.0154L21.4588 13.7629C21.5322 13.8547 21.583 13.9624 21.6071 14.0773C21.6312 14.1923 21.6279 14.3113 21.5976 14.4248C21.3679 15.2866 21.0249 16.1141 20.5776 16.8857C20.519 16.9867 20.4376 17.0726 20.34 17.1365C20.2423 17.2005 20.1311 17.2408 20.0151 17.2542L17.7914 17.5017C17.6989 17.5992 17.6051 17.6929 17.5101 17.7829L17.2476 20.0123C17.2341 20.1283 17.1937 20.2396 17.1295 20.3373C17.0654 20.435 16.9794 20.5163 16.8782 20.5748C16.1067 21.0217 15.2791 21.3641 14.4173 21.5929C14.3038 21.6232 14.1848 21.6265 14.0698 21.6024C13.9549 21.5783 13.8472 21.5275 13.7554 21.4542L12.0126 20.0629H11.6076L9.8601 21.4589C9.76835 21.5322 9.66065 21.583 9.54569 21.6071C9.43073 21.6312 9.31171 21.6279 9.19823 21.5976C8.33643 21.3679 7.5089 21.0249 6.73729 20.5776C6.63634 20.519 6.55046 20.4376 6.4865 20.34C6.42254 20.2423 6.38225 20.1311 6.36885 20.0151L6.12135 17.7876C6.02385 17.6945 5.9301 17.6007 5.8401 17.5064L3.61073 17.2504C3.49468 17.2369 3.38338 17.1965 3.28572 17.1324C3.18806 17.0682 3.10674 16.9822 3.04823 16.881C2.60136 16.1093 2.2587 15.2818 2.02916 14.4201C1.99897 14.3065 1.99589 14.1875 2.02015 14.0725C2.04441 13.9576 2.09535 13.8499 2.16885 13.7582L3.5601 12.0154V11.6104L2.16416 9.86292C2.09082 9.77116 2.04006 9.66347 2.01596 9.5485C1.99186 9.43354 1.9951 9.31452 2.02541 9.20104C2.25513 8.33924 2.59812 7.51172 3.04541 6.7401C3.10403 6.63915 3.18541 6.55328 3.28306 6.48931C3.38071 6.42535 3.49195 6.38507 3.60791 6.37167L5.83166 6.12417C5.92479 6.02667 6.01854 5.93292 6.11291 5.84292L6.3726 3.61354C6.3861 3.49749 6.42653 3.3862 6.49066 3.28854C6.55479 3.19088 6.64085 3.10955 6.74198 3.05104C7.51369 2.60418 8.3412 2.26151 9.20291 2.03198C9.31647 2.00179 9.43553 1.9987 9.55049 2.02296C9.66546 2.04723 9.77312 2.09816 9.86479 2.17167L11.6076 3.56292C11.7426 3.55917 11.8776 3.55917 12.0126 3.56292L13.7601 2.16417C13.8519 2.09082 13.9595 2.04006 14.0745 2.01596C14.1895 1.99186 14.3085 1.9951 14.422 2.02542C15.2839 2.25472 16.1115 2.59773 16.8829 3.04542C16.9839 3.10403 17.0697 3.18541 17.1337 3.28306C17.1977 3.38072 17.2379 3.49195 17.2513 3.60792L17.4988 5.83167C17.5963 5.92417 17.6901 6.01792 17.7801 6.11292L20.0095 6.37542C20.1255 6.38892 20.2368 6.42934 20.3345 6.49347C20.4321 6.5576 20.5135 6.64366 20.572 6.74479C21.0188 7.51651 21.3615 8.34402 21.591 9.20573C21.6212 9.31928 21.6243 9.43834 21.6001 9.55331C21.5758 9.66828 21.5249 9.77593 21.4513 9.8676L20.0601 11.6104ZM11.8101 8.06292C11.0684 8.06292 10.3434 8.28285 9.72671 8.6949C9.11003 9.10696 8.62938 9.69263 8.34555 10.3779C8.06172 11.0631 7.98746 11.8171 8.13216 12.5445C8.27685 13.2719 8.634 13.9401 9.15845 14.4646C9.6829 14.989 10.3511 15.3462 11.0785 15.4909C11.8059 15.6356 12.5599 15.5613 13.2452 15.2775C13.9304 14.9936 14.5161 14.513 14.9281 13.8963C15.3402 13.2796 15.5601 12.5546 15.5601 11.8129C15.5601 10.8184 15.165 9.86453 14.4618 9.16127C13.7585 8.458 12.8047 8.06292 11.8101 8.06292Z")]),P)])),qY:he(u([a(ge,u([pe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),q5:he(u([a(ge,u([pe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),q6:he(u([a(ge,u([pe("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z")]),P)])),q8:he(u([a(ge,u([pe("M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z")]),P)])),rz:he(u([a(ge,u([pe("M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10H18C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7957 12 18 12H16C15.2043 12 14.4413 11.6839 13.8787 11.1213C13.3161 10.5587 13 9.79565 13 9V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H16ZM13.8787 14.8787C14.4413 14.3161 15.2043 14 16 14H18C18.7957 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2043 21 17V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V17C13 16.2043 13.3161 15.4413 13.8787 14.8787Z")]),P)])),rD:he(u([a(ge,u([pe("M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z")]),P)])),rO:he(u([a(ge,u([pe("M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z")]),P)])),r3:he(u([a(ge,u([pe("M12 22C17.523 22 22 17.523 22 12C22 11.537 21.306 11.46 21.067 11.857C20.5572 12.7013 19.862 13.4186 19.034 13.9545C18.206 14.4903 17.2669 14.8307 16.2878 14.9499C15.3088 15.0691 14.3154 14.9639 13.383 14.6423C12.4507 14.3207 11.6037 13.7911 10.9063 13.0937C10.2089 12.3963 9.67932 11.5493 9.35772 10.617C9.03613 9.68457 8.93093 8.69123 9.0501 7.71217C9.16926 6.73311 9.50967 5.794 10.0455 4.96599C10.5814 4.13797 11.2987 3.44275 12.143 2.933C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z")]),P)])),dG:he(u([a(ge,u([pe("M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z")]),P)])),sJ:he(u([a(ge,u([pe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),sK:he(u([a(ge,u([pe("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),P)])),sS:he(u([a(ge,u([pe("M7 5V19L18 12L7 5Z")]),P)])),sT:he(u([a(ge,u([pe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fY:he(u([a(ge,u([pe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),s3:he(u([a(ge,u([pe("M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z")]),P)])),s5:he(u([a(ge,u([pe("M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34001 8 3.76001 10.42 2.06001 13.93C1.74001 14.6 2.10001 15.4 2.81001 15.64C3.40001 15.84 4.04001 15.56 4.31001 15C5.61001 12.34 8.34001 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z")]),P)])),ta:he(u([a(ge,u([pe("M7.20679 2.29279C7.39426 2.48031 7.49957 2.73462 7.49957 2.99979C7.49957 3.26495 7.39426 3.51926 7.20679 3.70679L5.41379 5.49979H13.2498C14.832 5.49979 16.3788 5.96898 17.6943 6.84803C19.0099 7.72708 20.0353 8.97651 20.6408 10.4383C21.2463 11.9001 21.4048 13.5087 21.0961 15.0605C20.7874 16.6124 20.0255 18.0378 18.9066 19.1566C17.7878 20.2755 16.3624 21.0374 14.8105 21.3461C13.2587 21.6548 11.6501 21.4963 10.1883 20.8908C8.72651 20.2853 7.47708 19.2599 6.59803 17.9443C5.71898 16.6288 5.24979 15.082 5.24979 13.4998C5.24979 13.2346 5.35514 12.9802 5.54268 12.7927C5.73022 12.6051 5.98457 12.4998 6.24979 12.4998C6.515 12.4998 6.76936 12.6051 6.95689 12.7927C7.14443 12.9802 7.24979 13.2346 7.24979 13.4998C7.24979 14.6865 7.60168 15.8465 8.26097 16.8332C8.92026 17.8199 9.85733 18.5889 10.9537 19.0431C12.05 19.4972 13.2564 19.616 14.4203 19.3845C15.5842 19.153 16.6533 18.5815 17.4924 17.7424C18.3315 16.9033 18.903 15.8342 19.1345 14.6703C19.366 13.5064 19.2472 12.3 18.7931 11.2037C18.3389 10.1073 17.5699 9.17026 16.5832 8.51097C15.5965 7.85168 14.4365 7.49979 13.2498 7.49979H5.41379L7.20679 9.29279C7.38894 9.48139 7.48974 9.73399 7.48746 9.99619C7.48518 10.2584 7.38001 10.5092 7.1946 10.6946C7.0092 10.88 6.75838 10.9852 6.49619 10.9875C6.23399 10.9897 5.98139 10.8889 5.79279 10.7068L2.29279 7.20679C2.10532 7.01926 2 6.76495 2 6.49979C2 6.23462 2.10532 5.98031 2.29279 5.79279L5.79279 2.29279C5.98031 2.10532 6.23462 2 6.49979 2C6.76495 2 7.01926 2.10532 7.20679 2.29279Z")]),P)])),th:he(u([a(ge,u([pe("M21 7V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H17L21 7ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z")]),P)])),tt:he(u([a(ge,u([pe("M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z")]),P)])),ty:he(u([a(ge,u([pe("M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z")]),P)])),tB:he(u([a(ge,u([pe("M8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z")]),P)])),tH:he(u([a(ge,u([Rc("evenodd"),Vc("evenodd"),pe("M8 3H16A5 5 0 0 1 21 8V16A5 5 0 0 1 16 21H8A5 5 0 0 1 3 16V8A5 5 0 0 1 8 3ZM9 6H15A3 3 0 0 1 18 9V15A3 3 0 0 1 15 18H9A3 3 0 0 1 6 15V9A3 3 0 0 1 9 6ZM9.5 12A2.5 2.5 0 1 0 14.5 12A2.5 2.5 0 1 0 9.5 12Z")]),P)])),tK:he(u([a(ge,u([pe("M6 6H18V18H6Z")]),P)])),tP:he(u([a(ge,u([pe("M11.9989 19C12.2641 19 12.5185 19.1054 12.706 19.2929C12.8935 19.4804 12.9989 19.7348 12.9989 20V21C12.9989 21.2652 12.8935 21.5196 12.706 21.7071C12.5185 21.8946 12.2641 22 11.9989 22C11.7337 22 11.4793 21.8946 11.2918 21.7071C11.1042 21.5196 10.9989 21.2652 10.9989 21V20C10.9989 19.7348 11.1042 19.4804 11.2918 19.2929C11.4793 19.1054 11.7337 19 11.9989 19ZM18.3629 16.95L19.0699 17.657C19.252 17.8456 19.3528 18.0982 19.3506 18.3604C19.3483 18.6226 19.2431 18.8734 19.0577 19.0588C18.8723 19.2442 18.6215 19.3494 18.3593 19.3517C18.0971 19.354 17.8445 19.2532 17.6559 19.071L16.9489 18.364C16.7667 18.1754 16.6659 17.9228 16.6682 17.6606C16.6705 17.3984 16.7757 17.1476 16.9611 16.9622C17.1465 16.7768 17.3973 16.6716 17.6595 16.6693C17.9217 16.667 18.1743 16.7678 18.3629 16.95ZM5.63489 16.95C5.81485 16.7707 6.05633 16.6665 6.31028 16.6588C6.56423 16.651 6.81161 16.7402 7.00217 16.9082C7.19274 17.0763 7.3122 17.3106 7.33629 17.5635C7.36038 17.8164 7.2873 18.069 7.13189 18.27L7.04889 18.364L6.34189 19.071C6.16193 19.2503 5.92046 19.3545 5.66651 19.3622C5.41256 19.37 5.16518 19.2808 4.97461 19.1128C4.78405 18.9447 4.66459 18.7104 4.64049 18.4575C4.6164 18.2046 4.68948 17.952 4.84489 17.751L4.92789 17.657L5.63489 16.95ZM11.9989 6C13.5902 6 15.1163 6.63214 16.2415 7.75736C17.3668 8.88258 17.9989 10.4087 17.9989 12C17.9989 13.5913 17.3668 15.1174 16.2415 16.2426C15.1163 17.3679 13.5902 18 11.9989 18C10.4076 18 8.88147 17.3679 7.75625 16.2426C6.63103 15.1174 5.99889 13.5913 5.99889 12C5.99889 10.4087 6.63103 8.88258 7.75625 7.75736C8.88147 6.63214 10.4076 6 11.9989 6ZM3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889ZM20.9989 11C21.2641 11 21.5185 11.1054 21.706 11.2929C21.8935 11.4804 21.9989 11.7348 21.9989 12C21.9989 12.2652 21.8935 12.5196 21.706 12.7071C21.5185 12.8946 21.2641 13 20.9989 13H19.9989C19.7337 13 19.4793 12.8946 19.2918 12.7071C19.1042 12.5196 18.9989 12.2652 18.9989 12C18.9989 11.7348 19.1042 11.4804 19.2918 11.2929C19.4793 11.1054 19.7337 11 19.9989 11H20.9989ZM4.92789 4.929C5.10008 4.75682 5.32918 4.65339 5.57221 4.63811C5.81524 4.62283 6.05549 4.69675 6.24789 4.846L6.34189 4.929L7.04889 5.636C7.22824 5.81596 7.33237 6.05743 7.34012 6.31138C7.34787 6.56533 7.25868 6.81271 7.09064 7.00328C6.92261 7.19384 6.68834 7.31331 6.43542 7.3374C6.18249 7.36149 5.92988 7.28841 5.72889 7.133L5.63489 7.05L4.92789 6.343C4.74042 6.15547 4.63511 5.90116 4.63511 5.636C4.63511 5.37084 4.74042 5.11653 4.92789 4.929ZM19.0699 4.929C19.2574 5.11653 19.3627 5.37084 19.3627 5.636C19.3627 5.90116 19.2574 6.15547 19.0699 6.343L18.3629 7.05C18.2706 7.14551 18.1603 7.22169 18.0383 7.2741C17.9163 7.32651 17.7851 7.3541 17.6523 7.35525C17.5195 7.3564 17.3878 7.3311 17.2649 7.28082C17.142 7.23054 17.0304 7.15629 16.9365 7.0624C16.8426 6.9685 16.7684 6.85685 16.7181 6.73395C16.6678 6.61106 16.6425 6.47938 16.6436 6.3466C16.6448 6.21382 16.6724 6.0826 16.7248 5.9606C16.7772 5.83859 16.8534 5.72825 16.9489 5.636L17.6559 4.929C17.8434 4.74153 18.0977 4.63621 18.3629 4.63621C18.6281 4.63621 18.8824 4.74153 19.0699 4.929ZM11.9989 2C12.2641 2 12.5185 2.10536 12.706 2.29289C12.8935 2.48043 12.9989 2.73478 12.9989 3V4C12.9989 4.26522 12.8935 4.51957 12.706 4.70711C12.5185 4.89464 12.2641 5 11.9989 5C11.7337 5 11.4793 4.89464 11.2918 4.70711C11.1042 4.51957 10.9989 4.26522 10.9989 4V3C10.9989 2.73478 11.1042 2.48043 11.2918 2.29289C11.4793 2.10536 11.7337 2 11.9989 2Z")]),P)])),tX:he(u([a(ge,u([Rc("evenodd"),Vc("evenodd"),pe("M10.8293 13C10.9398 12.6872 11 12.3506 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15H16C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 12.3506 13.0602 12.6872 13.1707 13H10.8293ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z")]),P)])),t7:he(u([a(ge,u([Rc("evenodd"),Vc("evenodd"),pe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),t8:he(u([a(ge,u([pe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),ub:he(u([a(ge,u([pe("M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z")]),P)])),ui:he(u([a(ge,u([pe("M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z")]),P)])),ut:he(u([a(ge,u([pe("M4.47 21H19.53C21.07 21 22.03 19.33 21.26 18L13.73 4.98999C12.96 3.65999 11.04 3.65999 10.27 4.98999L2.74 18C1.97 19.33 2.93 21 4.47 21ZM12 14C11.45 14 11 13.55 11 13V11C11 10.45 11.45 9.99999 12 9.99999C12.55 9.99999 13 10.45 13 11V13C13 13.55 12.55 14 12 14ZM13 18H11V16H13V18Z")]),P)])),uN:he(u([a(ge,u([pe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)])),uR:he(u([a(ge,u([pe("M9.31445 17.5469L8.43555 18.4355L12 22L15.5645 18.4355L14.6855 17.5469L12 20.2324L9.31445 17.5469ZM14.6855 6.45312L15.5645 5.56445L12 2L8.43555 5.56445L9.31445 6.45312L12 3.76758L14.6855 6.45312ZM6.45312 14.6855L3.76758 12L6.45312 9.31445L5.56445 8.43555L2 12L5.56445 15.5645L6.45312 14.6855ZM22 12L18.4355 8.43555L17.5469 9.31445L20.2324 12L17.5469 14.6855L18.4355 15.5645L22 12ZM8.25 15.75H15.75V8.25H8.25V15.75ZM9.5 9.5H14.5V14.5H9.5V9.5Z")]),P)]))},pf={k9:0,um:"transparent"},yj=l(function(e,r){return a(bt,u([Yt(r),mt(e.u($3(e.by))),a(Ge,"aria-label","Close"),E(u([Ce(j(32)),De(j(32)),an(j(5)),$r(Xe(50)),mf(le),ze(pf),ye(n5),ea(tn),_e,Oe(je),Vr(je),nn(fr),rn(lr(.9)),a(M,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([rn(lr(1)),ze(C(Jv,255,255,255,.18))]))]))]),u([dr.pS]))}),Cj=ao("circle"),Pj=hr("cx"),Sj=hr("cy"),kj=hr("r"),xj=a(r1,u([a1("0 0 24 24"),_t("currentColor"),Yn(u([Ce(j(18)),De(j(18))]))]),a(N,function(e){var r=e.a,n=e.b;return a(Cj,u([Pj(Ze(r)),Sj(Ze(n)),kj("2")]),P)},u([g(9,5),g(15,5),g(9,12),g(15,12),g(9,19),g(15,19)]))),n1=se("white-space"),wj=x(function(e,r,n){var t=a(Y,function(o){return v(Zv,.45,o.tT,r.oh(o))},e);return a(Q,u([E(u([_e,Oe(je),vr(me(0)),De(j(e5)),Yv(j(16)),dj(j(8)),a(M,"gap","12px"),ye(t)])),a(ra,"dblclick",ee(r.u(vj(r.by))))]),u([xj,a(Q,u([E(u([Hc(me(1)),n1(a5),Ac(bf),bj(sj),ye(t),nr(gt.q3),Do(j(.6)),Kv(e1)]))]),u([oe(r.oj)])),a(yj,r,n)]))}),no=x(function(e,r,n){if(a(Br,n.by,n.bz)){var t=a(Y,a(He,n.oh,pr(.18)),e),o=a(Y,a(He,n.oh,pr(.35)),e),c=v(oj,r,n,n.bz),i=(function(){var p=(function(){var h=n.br.cQ;if(h.$){var y=h.a;return y}else{var y=h.a;return y}})();return"calc(100vh - "+(W(p+f$)+"px)")})(),f=n.bz,$=f,s=a(Xm,$.rd,n.by)+"-body",d=a(Xm,$.rd,n.by),b=$.rd(n.by),_="draggable-panel-"+(b+"-titlebar");return a(Q,u([E(u([ze(t),aj(16),$r(a(Pn.pI,e5/2,1)),v(eo,j(1),ro,o),Xv.ql,Ke(pt),nr(rj(n.br)),a(M,"width","-webkit-fit-content"),a(M,"width","fit-content"),a(M,"max-width","calc(100vw - "+(W(2*f$)+"px)")),a(M,"max-height",i),_e,Ar(sa),Ac(bf),Xn(me(st.nk+a(Ne,999,n.a3-1-n.dK))),ht(df),a(M,"will-change","transform"),a(M,"user-select","none"),a(M,"-webkit-user-select","none"),ea(nj)])),Yt(_),a(Km,"transform",a(tj,n.br,c))]),u([v(wj,e,n,d),a(lj,s,n.kR)]))}else return oe("")}),jj=Te(function(e,r,n,t,o){return n.i_?oe(""):v(no,e,r,{br:V3(t.k1),kR:o.kR,by:o.by,bz:n.hD,a3:t.a3,dK:t.dK,oh:o.oh,oj:o.oj,u:n.u})}),Lj=x(function(e,r,n){if(Je(n.cf))return oe("");var t=R0(n.hD),o=Cr(t),c=dn(a(Vn,l(function(f,$){return g($.by,f)}),n.cf)),i=dn(a(N,function(f){return g(f.by,f)},n.cf));return a(Q,u([Yt(Zx(n.fG))]),u([a(ej,e,n),a(Q,P,a(Vn,l(function(f,$){var s=a(Ye,$,i);if(s.$)return oe("");var d=s.a;return I(jj,e,r,n,{k1:a(ne,0,a(Ye,$,c)),a3:o,dK:f},d)}),t)),Vm(n.hD)]))}),Tj=zr(function(e,r,n,t,o,c){var i=a(Ye,c,n.cI);if(i.$)return z;var f=i.a,$=yn(r.ra),s=qi({gG:f.gG,b2:f.b2,aH:r.aH,ra:D(r.ra),by:f.by,rp:a(hv,o,n.rp),mQ:f.mQ,m$:dc(r.ra),sA:Qu(f),aM:f.aM,cq:t,oD:f.oD,oJ:Ou(r.ra)}),d=v(R3,"play:view",v(e.a6.uq,s,n.Q,$),f.bz),b=C(e.a6.cf,s,n.Q,$,f.bz),_=a(N,function(L){return{kR:a(of,Co(c),L.kR),lX:a(of,Co(c),L.lX),by:L.by,nZ:L.nZ,oh:L.oh,oj:L.oj}},b),p=Su(v(Lj,$,s,{i_:s.oJ,fG:c,hD:f.hD,cf:_,u:R2(c)})),h=fe(r.aH,D(c)),y=a(cr,function(L){return L.bp},yn(r.ra)),k=h?"4px solid "+Se(y):"none";return D(g(c,a(pn,u([om(c),a(em,"data-play-pane",c),a(Z,"outline",k),a(Z,"border-radius","inherit")]),u([a(im,Co(c),d),p]))))}),t5=function(e){return{$:1,a:e}},zj=l(function(e,r){return a(l$,e,t5(r))}),Bo=vt("className"),x$=nr(u([rn(lr(.4)),a(M,"pointer-events","none")])),Da=function(e){switch(e){case 0:return a(He,function(r){return r.dG},function(r){return r.pa});case 1:return a(He,function(r){return r.dG},function(r){return r.rH});case 2:return a(He,function(r){return r.dG},function(r){return r.q_});case 3:return a(He,function(r){return r.dG},function(r){return r.uM});case 4:return a(He,function(r){return r.dG},function(r){return r.s4});case 5:return function(r){return r.bp};case 6:return function(r){return r.bp};default:return a(He,function(r){return r.dG},function(r){return r.pV})}},Mj=se("padding-bottom"),o5=320,on={r2:'ui-monospace, "SF Mono", Menlo, Monaco, "Cascadia Mono", "Roboto Mono", Consolas, monospace',sm:'"Nunito", system-ui, sans-serif',ua:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},w$=se("flex-grow"),c5=function(e){return a(Q,u([E(u([De(j(1)),w$(me(1)),a(M,"background-color",Se(a(cr,function(r){return r.iu},e)))]))]),P)},t1=se("margin-bottom"),i5=l(function(e,r){return a(Q,u([E(u([_e,Oe(je),a(M,"gap","14px"),t1(j(18))]))]),u([c5(e),a(Q,u([E(u([a(M,"font-family",on.ua),nr(gt.q3),Do(Ic(.18)),Kv(e1),ye(a(Y,function(n){return n.tZ},e)),vr(me(0)),a(M,"white-space","nowrap")]))]),u([oe(r)])),c5(e)]))}),Dj=l(function(e,r){return{$:4,a:e,b:r}}),Bj=l(function(e,r){return{$:3,a:e,b:r}}),Aj=l(function(e,r){return{$:0,a:e,b:r}}),Hj=l(function(e,r){return{$:2,a:e,b:r}}),Ij=l(function(e,r){return{$:5,a:e,b:r}}),Vj=l(function(e,r){return{$:1,a:e,b:r}}),Fc=Cn("input"),o1=vt("max"),c1=vt("min"),Rj=function(e){return g(e,!0)},hf=l(function(e,r){return a(Ov,e,t5(r))}),i1=a(Ni,u(["target","value"]),Pe),gf=function(e){return a(hf,"input",a(Qe,Rj,a(Qe,e,i1)))},f1=function(e){return a(vt,"step",e)},Ao=vt("type"),Ec=vt("value"),f5=function(e){return a(Fc,u([Ao("range"),c1(e.jk),o1(e.ji),f1(e.ka),Ec(e.kw),sf(e.p9),gf(e.jC),Bo("ui-slider"),E(u([Ce(Xe(100)),De(j(32)),a(M,"-webkit-appearance","none"),a(M,"appearance","none"),ze(pf),a(M,"cursor","grab"),nn(fr),a(M,"touch-action","none"),a(M,"--slider-fill",W(e.iQ)+"%"),e.p9?x$:nr(P)]))]),P)},Fj=function(e){var r=te(e.mR,e.mW)>0?100*(e.um-e.mW)/(e.mR-e.mW):0;return f5({p9:e.p9,iQ:r,ji:W(e.mR),jk:W(e.mW),jC:function(n){return e.hw(a(ne,e.um,qt(n)))},ka:W(e.tI),kw:W(e.um)})},u1=se("space-between"),gr=Cn("span"),u5=l(function(e,r){return a(Q,u([E(u([_e,Oe(je),Vr(u1),a(M,"gap","12px"),a(wr,j(10),le)]))]),u([a(gr,u([E(u([ye(a(Y,function(n){return n.ko},e)),nr(gt.i5),a(M,"font-family",on.ua)]))]),u([oe(r.i5)])),r.ea]))}),Ej=function(e){var r=e.mR-e.mW,n=r>0?100*(e.um-e.mW)/r:0;return f5({p9:e.p9,iQ:n,ji:Ze(e.mR),jk:Ze(e.mW),jC:function(t){return e.hw(a(ne,e.um,Mi(t)))},ka:"1",kw:Ze(e.um)})},j$=function(e){return a(M,"border-color",e.um)},Uj=(function(){var e="#6D6553",r="#A39980";return"linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 0 0 / 8px 8px,"+(" linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 4px 4px / 8px 8px,"+(" "+r))))))))))})(),$5=se("display"),_f=Wv("focus"),$1=function(e){return nr(u([a(M,"outline","3px solid "+Se(a(pr,.25,e))),a(M,"outline-offset","0")]))},Gj={qa:0,um:"inline-block"},l1="ui-color-swatch-popover",yf={ip:0,gC:0,um:"border-box"},Cf=se("box-sizing"),qj=290,Wj=function(e){var r=qt(e);if(r.$)return 0;var n=r.a;return v(mr,0,1,n)},v1=l(function(e,r){var n=(function(){var c=r.h7;if(c.$)return P;var i=c.a;return u([a(gr,u([E(u([a(M,"font-family",on.r2),sr(j(13)),xa(me(600)),Ce(j(40)),vr(me(0)),a(M,"text-align","right"),ye(a(Y,function(f){return f.ko},e))]))]),u([oe(i)]))])})(),t=a(Fc,u([Ao("range"),c1("0"),o1("1"),f1("0.01"),Ec(W(r.um)),gf(function(c){return r.hw(Wj(c))}),Bo(r.hJ),a(Ge,"aria-label",r.i5),E(u([Hc(me(1)),De(j(26)),a(M,"-webkit-appearance","none"),a(M,"appearance","none"),a(M,"--track",r.g4),a(M,"background-color","transparent"),nn(fr),a(M,"cursor","grab"),a(M,"touch-action","none"),an(le)]))]),P),o=a(gr,u([E(u([a(M,"font-family",on.r2),sr(j(14)),xa(me(700)),Ce(j(18)),vr(me(0)),ye(a(Y,function(c){return c.ko},e))]))]),u([oe(r.i5)]));return a(Q,u([E(u([_e,Oe(je),a(M,"gap","10px")]))]),X(u([o,t]),n))}),l5="linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 0 0 / 14px 14px, linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 7px 7px / 14px 14px, #a39980",Nj=l(function(e,r){var n=r.um,t="linear-gradient(to right, transparent, "+(Se(a(pr,1,n))+("), "+l5));return a(v1,e,{g4:t,i5:"\u03B1",hw:function(o){return r.hw(A(n,{oR:o}))},hJ:"ui-hsla-alpha",h7:D(Ze(Ir(n.oR*100))+"%"),um:n.oR})}),Qj=l(function(e,r){var n=xe(e-r);return a(Ne,n,1-n)}),Hr=x(function(e,r,n){return{oR:1,aS:e,D:n,a0:r}}),v5=u([v(Hr,6/360,.9,.62),v(Hr,33/360,1,.55),v(Hr,46/360,1,.55),v(Hr,80/360,.7,.52),v(Hr,150/360,.65,.46),v(Hr,172/360,.75,.45),v(Hr,185/360,1,.46),v(Hr,217/360,.88,.58),v(Hr,239/360,.84,.67),v(Hr,270/360,.8,.65),v(Hr,330/360,1,.69),v(Hr,350/360,.9,.63)]),Pf=d6,Oj=function(e){return a(ne,0,a(de,vn,Sr(a(Pf,Tu,a(Vn,l(function(r,n){return g(r,a(Qj,n.aS,e.aS))}),v5)))))},Jj=function(e){return e?"0 0 0 3px rgba(0, 0, 0, 0.55), 0 0 0 6px #fff, 0 4px 10px -3px rgba(0, 0, 0, 0.5)":"inset 0 0 0 1px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.5)"},s5=32,Xj=x(function(e,r,n){return a(bt,u([mt(e.hw(a(pr,e.um.oR,n))),a(Ge,"aria-label","preset colour"),E(u([Ce(j(s5)),De(j(s5)),vr(me(0)),$r(Xe(50)),mf(le),an(le),ea(tn),ze(tr(n)),a(M,"box-shadow",Jj(r))]))]),P)}),Zj=function(e){var r=e.um.a0<.08?-1:Oj(e.um);return a(Q,u([E(u([a(M,"display","grid"),a(M,"grid-template-columns","repeat(6, 1fr)"),a(M,"gap","10px"),a(M,"justify-items","center")]))]),a(Vn,l(function(n,t){return v(Xj,e,fe(n,r),t)}),v5))},Yj=l(function(e,r){return a(T,function(n){var t=ab(n);if(t.$)return Qn("invalid hex");var o=t.a;return ee(r(a(pr,e.oR,o)))},i1)}),Kj=fm,d5=Kj,s1=x(function(e,r,n){var t=n<0?n+1:n>1?n-1:n;return te(t,1/6)<0?e+(r-e)*6*t:te(t,1/2)<0?r:te(t,2/3)<0?e+(r-e)*(2/3-t)*6:e}),eL=x(function(e,r,n){if(r<1e-10)return{io:n,iY:n,jU:n};var t=n<.5?n*(1+r):n+r-n*r,o=2*n-t;return{io:v(s1,o,t,e-1/3),iY:v(s1,o,t,e),jU:v(s1,o,t,e+1/3)}}),b5=function(e){switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";default:return"f"}},d1=function(e){var r=v(mr,0,255,e),n=r/16|0,t=a(Zr,16,r);return X(tc(b5(n)),tc(b5(t)))},rL=function(e){var r=v(eL,e.aS,e.a0,e.D);return"#"+(d1(Ir(r.jU*255))+(d1(Ir(r.iY*255))+d1(Ir(r.io*255))))},aL=l(function(e,r){var n=G2(rL(r.um));return v(d5,"div",u([E(u([_e,Oe(je),a(M,"gap","12px")]))]),u([g(n,a(Fc,u([Ao("text"),a(Ge,"value",n),a(Ge,"pattern","#?[0-9A-Fa-f]{6}"),a(Ge,"spellcheck","false"),a(Ge,"aria-label","Hex colour"),Bo("ui-hex-input"),a(ra,"change",a(Yj,r.um,r.hw)),E(u([Ce(Xe(50)),vr(me(0)),Cf(yf),a(M,"font-family",on.r2),sr(j(15)),xa(me(600)),Do(Ic(.06)),Kv(e1),ye(a(Y,function(t){return t.tZ},e)),ze(a(Y,function(t){return t.tT},e)),v(eo,j(1),ro,a(Y,function(t){return t.iu},e)),$r(Pn.rN),a(wr,j(9),j(12)),nn(fr)]))]),P)),g("warn",a(Q,u([Bo("ui-hex-warn")]),u([oe("invalid hex")])))]))}),b1=x(function(e,r,n){return"hsl("+(W(e*360)+(", "+(W(r*100)+("%, "+(W(n*100)+"%)")))))}),nL=l(function(e,r){var n=r.um,t="linear-gradient(to right, #000, "+(v(b1,n.aS,n.a0,.5)+", #fff)");return a(v1,e,{g4:t,i5:"L",hw:function(o){return r.hw(A(n,{D:o}))},hJ:"ui-hsla-rail",h7:z,um:n.D})}),m5=120,tL=function(e){return a(Q,u([E(u([_e,Vr(je)]))]),u([a(Q,u([E(u([Ke(Mo),Ce(j(m5)),De(j(m5)),$r(Xe(50)),Ac(bf),a(M,"background",l5),a(M,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 12px 26px -10px rgba(0, 0, 0, 0.6)")]))]),u([a(Q,u([E(u([Ke(Ma),Sa(le),da(le),dt(le),Zn(le),a(M,"background",Se(e))]))]),P)]))]))},oL=l(function(e,r){var n=r.um,t="linear-gradient(to right, "+(v(b1,n.aS,0,n.D)+(", "+(v(b1,n.aS,1,n.D)+")")));return a(v1,e,{g4:t,i5:"S",hw:function(o){return r.hw(A(n,{a0:o}))},hJ:"ui-hsla-rail",h7:z,um:n.a0})}),cL=l(function(e,r){return a(Q,u([E(u([_e,Ar(sa),a(M,"gap","18px"),Ce(j(qj)),Cf(yf),an(j(18)),ze(a(Y,function(n){return n.kd},e)),v(eo,j(1),ro,a(Y,function(n){return n.iu},e)),$r(Pn.uD),ye(a(Y,function(n){return n.tZ},e)),a(M,"font-family",on.ua)]))]),u([tL(r.um),a(aL,e,r),Zj(r),a(oL,e,r),a(nL,e,r),a(Nj,e,r)]))}),iL=function(e){return A(e,{oR:1})},fL=l(function(e,r){var n=Se(r.um),t=Se(iL(r.um));return a(Q,u([E(u([$5(Gj)]))]),u([a(bt,u([a(Ge,"popovertarget",r.by),a(Ge,"aria-label","Pick colour"),a(Ge,"aria-haspopup","dialog"),a(Km,"background","linear-gradient(135deg, transparent 50%, "+(t+(" 50%), "+("linear-gradient(135deg, "+(n+(", "+(n+("), "+Uj)))))))),E(u([Ce(j(32)),De(j(32)),an(le),v(eo,j(1),ro,a(Y,function(o){return o.iu},e)),$r(Pn.rN),ea(tn),Ac(bf),a(M,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.4)"),a(M,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([j$(a(Y,function(o){return o.bp},e))])),_f(u([$1(a(cr,function(o){return o.bp},e))]))]))]),P),a(Q,u([Yt(r.by),a(Ge,"popover","auto"),a(Ge,"data-popover",""),Bo(l1)]),u([a(cL,e,{hw:r.hw,um:r.um})]))]))}),p5=se("baseline"),L$=l(function(e,r){return a(Q,u([E(u([a(wr,j(10),le)]))]),u([a(Q,u([E(u([_e,Oe(p5),Vr(u1),a(M,"gap","12px"),t1(j(8))]))]),u([a(gr,u([E(u([ye(a(Y,function(n){return n.ko},e)),nr(gt.i5),a(M,"font-family",on.ua)]))]),u([oe(r.i5)])),(function(){var n=r.um;if(n.$)return oe("");var t=n.a;return a(gr,u([E(u([ye(a(Y,function(o){return o.bp},e)),nr(gt.i5),xa(me(600)),a(M,"font-family",on.r2),a(M,"font-feature-settings",'"tnum"')]))]),u([oe(t)]))})()])),r.ea]))}),h5=vt("placeholder"),KG=ae,uL=l(function(e,r){return{$:3,a:e,b:r}}),m1=function(e){return uL(e)},Uc={rC:j(16),rN:j(12),tx:j(8),uD:j(24),uE:j(4),uF:j(32),uG:j(2),uH:j(48)},$L=l(function(e,r){return a(Fc,u([Ao("text"),Ec(r.um),h5(r.jP),gf(r.hw),E(u([Ce(Xe(100)),a(wr,j(10),Uc.rN),ze(a(Y,function(n){return n.kd},e)),ye(a(Y,function(n){return n.tZ},e)),v(eo,j(1),ro,a(Y,function(n){return n.iu},e)),$r(Pn.rN),a(M,"font-family",on.r2),nr(gt.kR),nn(fr),a(M,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),_f(u([j$(a(Y,function(n){return n.bp},e)),$1(a(cr,function(n){return n.bp},e))])),a(m1,"placeholder",u([ye(a(Y,function(n){return n.km},e))]))]))]),P)}),T$=Ym("padding"),lL=Cn("option"),vL=Wm("selected"),sL=l(function(e,r){return a(lL,u([Ec(r),vL(fe(r,e))]),u([oe(r)]))}),dL=Cn("select"),bL=l(function(e,r){return a(dL,u([a(ra,"change",a(Qe,r.su,i1)),E(u([Ce(Xe(100)),a(M,"appearance","none"),a(M,"-webkit-appearance","none"),ze(a(Y,function(n){return n.kd},e)),ye(a(Y,function(n){return n.tZ},e)),v(eo,j(1),ro,a(Y,function(n){return n.iu},e)),$r(Pn.rN),C(T$,j(10),j(34),j(10),Uc.rN),a(M,"font-family",on.ua),nr(gt.kR),xa(me(500)),ea(tn),a(M,"background-image",`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D4A244' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M3 5l3 3 3-3'/></svg>")`),a(M,"background-repeat","no-repeat"),a(M,"background-position","right 12px center"),nn(fr),a(M,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), background-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([j$(a(Y,function(n){return n.ie},e)),ze(a(Y,function(n){return n.ke},e))])),_f(u([j$(a(Y,function(n){return n.bp},e)),a(M,"box-shadow","0 0 0 3px "+Se(a(pr,.25,a(cr,function(n){return n.bp},e))))]))]))]),a(N,sL(r.tp),r.sC))}),mL=m1("after"),pL=J(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),Sf=J(function(e,r,n,t){return C(pL,e,r,n,t)}),z$={cB:{o5:200,qE:120,tw:320},gW:{qn:C(Sf,.33,1,.68,1),iZ:C(Sf,.45,.05,.25,1),rg:C(Sf,.65,0,.35,1),tA:C(Sf,.2,.9,.25,1),tC:C(Sf,.34,1.56,.64,1)}},M$=function(e){return P$(u([e]))},p1=function(e){var r=e.um;return{kq:0,um:a(Mc,"translateX",u([r]))}},g5=l(function(e,r){var n=r.mg?a(Y,function(i){return i.bp},e):a(Y,function(i){return i.iu},e),t=r.mg?20:0,o=r.mg?a(M,"box-shadow","0 0 14px "+Se(a(pr,.4,a(cr,function(i){return i.bp},e)))):Zm(fr),c=r.mg?a(Y,function(i){return i.tZ},e):a(Y,function(i){return i.km},e);return a(bt,u([E(u([Ke(Mo),Ce(j(46)),De(j(26)),ze(n),$r(Pn.sN),mf(le),ea(tn),nn(fr),S$(u([v(Nv,220,0,z$.gW.iZ)])),vr(me(0)),mL(u([a(M,"content",'""'),Ke(Ma),Sa(j(2)),da(j(2)),Ce(j(22)),De(j(22)),ze(c),$r(Xe(50)),M$(p1(j(t))),o,S$(u([v(Nm,220,0,z$.gW.tC),v(Nv,220,0,z$.gW.iZ),v(qm,220,0,z$.gW.iZ)]))])),r.p9?x$:nr(P)])),mt(r.nf),sf(r.p9),a(Ge,"aria-pressed",r.mg?"true":"false"),a(Ge,"aria-label",r.i5)]),P)}),hL=l(function(e,r){var n=r.a,t=r.b;switch(t.$){case 0:var o=t.a,i=o.a,f=o.b,$=t.b;return a(L$,e,{ea:Fj({p9:!1,mR:f,mW:i,hw:Aj(n),tI:.01*(f-i),um:$}),i5:n,um:D(a(pc,2,$))});case 2:var c=t.a,i=c.a,f=c.b,$=t.b;return a(L$,e,{ea:Ej({p9:!1,mR:f,mW:i,hw:Hj(n),um:$}),i5:n,um:D(Ze($))});case 4:var $=t.a;return a(u5,e,{ea:a(g5,e,{p9:!1,mg:$,i5:n,nf:a(Dj,n,!$)}),i5:n});case 1:var $=t.a;return a(L$,e,{ea:a($L,e,{hw:Vj(n),jP:"",um:$}),i5:n,um:z});case 3:var $=t.a;return a(u5,e,{ea:a(fL,e,{by:"play-config-color-"+n,hw:Bj(n),um:$}),i5:n});default:var s=t.a;return a(L$,e,{ea:a(bL,e,{su:Ij(n),sC:Ru(s),tp:yo(s)}),i5:n,um:z})}}),gL=l(function(e,r){return a(Q,u([E(u([a(wr,le,j(20))]))]),u([a(i5,e,r.r7),a(Q,P,a(N,hL(e),r.a8))]))}),eq=1,rq=1,_L=J(function(e,r,n,t){return{pf:r,eB:n,j_:t,h6:e}}),yL=I(Sc,_L,a(S,"top",G),a(S,"bottom",G),a(S,"left",G),a(S,"right",G)),_5=a(Ni,u(["currentTarget","boundingClientRect"]),yL),CL=function(e){return a(ra,"click",a(Qe,e,_5))},PL=l(function(e,r){var n=(function(){return r?g(40,Uc.rC):g(32,Uc.rN)})(),t=n.a,o=n.b;return u([De(j(t)),a(wr,le,o),$r(Pn.sN),mf(le),ea(tn),nn(fr),a(M,"font-family",on.ua),nr(gt.i5),_e,Oe(je),Vr(je),a(M,"gap","6px"),a(M,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),_f(u([$1(a(cr,function(c){return c.bp},e))]))])}),y5=function(e){return a(Mr,"",e)},h1=function(e){return a(M,"box-shadow",y5(u(["inset ",W(e*1.5),"px ",W(e*1.5),"px ",W(e*3),"px ",Se(a(pr,.6,$o)),", inset 0 0 0 1px ",Se(a(pr,.35,$o))])))},C5=l(function(e,r){return I($f,le,le,le,j(e),tr(r))}),SL=x(function(e,r,n){var t=l(function(i,f){return n?X(i,f):i});switch(r){case 0:var o=u([ze(a(Y,function(i){return i.bp},e)),ye(a(Y,function(i){return v(Zv,.6,i.bp,i.tZ)},e)),a(C5,1,a(cr,function(i){return i.ie},e))]),c=u([ze(a(Y,function(i){return i.ie},e)),h1(1.5)]);return X(a(t,o,c),u([Jn(u([ze(a(Y,function(i){return i.$8},e))])),vf(c)]));case 1:var o=u([ze(a(Y,function(i){return i.kd},e)),ye(a(Y,function(i){return i.tZ},e)),a(C5,1,a(cr,function(i){return i.iu},e))]),c=u([ze(a(Y,function(i){return i.kg},e)),h1(1.5)]);return X(a(t,o,c),u([Jn(u([ze(a(Y,function(i){return i.ke},e))])),vf(c)]));default:var o=u([ze(pf),ye(a(Y,function(i){return i.ko},e))]),c=u([ze(a(Y,function(i){return i.kg},e)),ye(a(Y,function(i){return i.tZ},e)),h1(1.5)]);return X(a(t,o,c),u([Jn(u([ze(a(Y,function(i){return i.kd},e)),ye(a(Y,function(i){return i.tZ},e))])),vf(c)]))}}),P5=x(function(e,r,n){var t=(function(){var o=r.Z;return o?18:16})();return a(bt,a(B,E(X(a(PL,e,r.Z),X(v(SL,e,r.un,r.rs),r.p9?u([x$]):P))),a(B,sf(r.p9),n)),(function(){var o=r.lX;if(o.$)return u([oe(r.i5)]);var c=o.a;return u([a(gr,u([E(u([_e,Oe(je),Vr(je),Ce(j(t)),De(j(t)),vr(me(0))]))]),u([c])),oe(r.i5)])})())}),kL=l(function(e,r){return v(P5,e,{p9:!1,lX:z,rs:!1,i5:r.i5,Z:1,un:1},u([CL(r.fU)]))}),xL=function(e){return a(Q,u([E(u([C(T$,j(8),j(20),j(36),j(20)),_e,Vr(je)]))]),u([a(kL,e.e,{i5:"Reset Page's Configurations",fU:e.gN.nd})]))},S5=l(function(e,r){return v(P5,e,{p9:r.p9,lX:r.lX,rs:r.rs,i5:r.i5,Z:r.Z,un:r.un},u([mt(r.fU)]))}),wL=l(function(e,r){return a(S5,e,{p9:!1,lX:z,rs:!1,i5:r.i5,fU:r.fU,Z:1,un:1})}),k5={dq:0,um:"bold"},jL=se("margin"),LL=se("margin-top"),x5=se("max-width"),w5=function(e){return v(b$,"textAlign","text-align",e(m$))},TL=(function(){var e=v(Hr,.11,.55,.2),r=v(Hr,.13,.8,.62),n=v(Hr,.13,.9,.9),t="play-reset-interface-help",o=function($){return a(Q,u([E(u([a(wr,j(2),le)]))]),u([oe("\u2022 "+$)]))},c=v(Hr,.13,1,.58),i=v(Hr,.13,.95,.52),f=v(Hr,.12,.85,.16);return a(gr,u([E(u([_e,Oe(je)]))]),u([a(bt,u([Ao("button"),a(Ge,"popovertarget",t),a(Ge,"aria-label","What does resetting Play's interface clear?"),E(u([Ce(j(20)),De(j(20)),an(le),a(M,"border","none"),$r(Xe(50)),ea(tn),xa(k5),sr(j(13)),Sn(j(20)),w5(je),a(M,"background-color",Se(i)),a(M,"color",Se(f)),a(M,"transition","background-color 160ms"),Jn(u([a(M,"background-color",Se(c))])),_f(u([a(M,"outline","2px solid "+Se(c)),a(M,"outline-offset","2px")]))]))]),u([oe("?")])),a(Q,u([Yt(t),a(Ge,"popover","auto"),a(Ge,"data-popover",""),E(u([Ke(pt),jL(le),a(M,"pointer-events","auto"),x5(j(250)),a(wr,j(12),j(14)),$r(j(10)),sr(j(12.5)),Sn(lr(1.5)),a(M,"background-color",Se(n)),a(M,"color",Se(e)),a(M,"border","1px solid "+Se(r)),a(M,"box-shadow","0 6px 20px rgba(0, 0, 0, 0.28)")]))]),u([a(Q,u([E(u([xa(k5),t1(j(8))]))]),u([oe("Resetting Play's interface clears, for this browser:")])),o("Panel positions & sizes"),o("Light / dark theme"),o("Play / author mode"),o("Device-preview frame"),o("Tape \u201Crecord from start\u201D preference"),a(Q,u([E(u([LL(j(8)),rn(lr(.85))]))]),u([oe("Your configuration values (in the page URL) and any saved content aren\u2019t affected.")]))]))]))})(),zL=function(e){return a(Q,u([E(u([C(T$,j(16),j(20),j(4),j(20)),_e,Oe(je),Vr(je),a(M,"gap","8px")]))]),u([a(wL,e.e,{i5:"Reset Play's Interface",fU:e.jz}),TL]))},ML=function(e){var r=Je(e.pH.b2)?oe(""):xL(e);return a(Q,u([E(u([Ce(j(o5))]))]),u([zL(e),r,a(of,e.fV,a(Q,u([E(u([_e,Ar(sa),a(M,"gap","18px"),Mj(j(16))]))]),a(N,gL(e.e),e.pH.b2)))]))},DL=function(e){if(!e.b0.fC||e.oJ)return oe("");var r=v(no,e.e,e.pH,{br:Zt(0),kR:ML(e),by:0,bz:e.f,a3:e.az.a3,dK:e.az.dL(0),oh:Da(0),oj:"Configurations",u:e.aX});return $t(e.tX)?a(Q,u([E(u([x$]))]),u([r])):r},g1=function(e){return{$:1,a:e}},aq=0,nq=0,BL=function(e){return e?dr.p5:dr.p7},AL=function(e){return e?"Landscape":"Portrait"},tq=1,oq=3,cq=2,HL={$:2},IL=l(function(e,r){return{$:0,a:e,b:r}}),VL={$:1},RL={$:3},FL=function(e){return a(ra,"mousedown",ee(e))},EL=function(e){return a(ra,"mouseleave",ee(e))},yt=l(function(e,r){return u([a(ra,"mouseenter",a(Qe,function(n){return e(a(IL,r,n))},_5)),EL(e(VL)),FL(e(HL)),a(ra,"mousemove",ee(e(RL)))])}),D$=l(function(e,r){var n=Cr(r.rx),t=function(c){return n<=1?0:c?fe(c,n-1)?3:2:1},o=l(function(c,i){var f=r.rv(i);return a(Jm,e,{im:"radio",$9:g("aria-checked",Fm(f)),p9:r.p9,lX:r.lX(i),mg:f,i5:r.rw(i),fU:r.su(i),jt:r.tq(i),dF:r.dF,sX:t(c),dg:a(yt,r.sw,{eb:r.t4,i5:r.rw(i),nZ:r.nZ(i)})})});return v(Gm,{p9:r.p9,dF:r.dF},u([a(Ge,"role","radiogroup"),a(Ge,"aria-label",r.i5)]),a(Vn,o,r.rx))}),UL=J(function(e,r,n,t){return a(Q,u([E(u([_e,Vr(je),a(wr,j(6),j(0))]))]),u([a(D$,e,{p9:!1,lX:BL,rv:Na(t),rw:AL,rx:u([0,1]),i5:"Orientation",su:a(rr,r.u,g1),sw:n,dF:0,tq:function(o){return function(c){return c.bp}},nZ:function(o){return z},t4:0})]))}),kf=function(e){return{iv:a(Y,function(r){return r.iv},e),j3:Xv.ql,tT:a(Y,function(r){return r.tT},e),kh:a(Y,function(r){return r.kg},e),km:a(Y,function(r){return r.km},e),tZ:a(Y,function(r){return r.tZ},e),ko:a(Y,function(r){return r.ko},e),gs:st.nk}},GL=function(e){return{$:0,a:e}},j5=function(e){return{$:3,a:e}},Gc=l(function(e,r){return a(Ov,e,j5(r))}),qL={$:2},WL={$:1},NL={$:3},QL={$:4},_1=L9,OL=yr(_1,Te(function(e,r,n,t,o){return{oS:t,pT:r,i3:e,rS:o,tu:n}}),a(S,"key",Pe),a(S,"ctrlKey",re),a(S,"shiftKey",re),a(S,"altKey",re),a(S,"metaKey",re)),JL=l(function(e,r){return a(Qe,function(n){var t=n.i3,o=n.pT,c=n.tu,i=n.oS,f=n.rS,$=o||i||f;if($)return{V:e.u(Ca),Y:!1,_:!1};if(t==="Tab")return{V:e.u(Ca),Y:!0,_:!0};if(t==="ArrowUp")return{V:e.u(WL),Y:!0,_:!0};if(t==="ArrowDown")return{V:e.u(qL),Y:!0,_:!0};if(t==="Enter")return{V:e.u(NL),Y:!0,_:!0};if(t==="Escape")return{V:e.u(QL),Y:!0,_:!0};if(t==="ArrowLeft"||t==="ArrowRight"){if(r.$)return{V:e.u(Ca),Y:!1,_:!1};var s=r.a;return{V:t==="ArrowLeft"?s.sq:s.st,Y:!0,_:!0}}else return{V:e.u(Ca),Y:!1,_:!1}},OL)}),L5=5,XL=function(e){return v(lt,e,!1,"")},T5=XL,ZL={Y:!0,_:!1},YL=l(function(e,r){return a(l$,e,j5(r))}),KL=Te(function(e,r,n,t,o){return{pM:o,ru:t,fY:r,sV:n,sW:e}}),eT=Te(function(e,r,n,t,o){return{g8:r,s_:n,t$:t,t0:o,ia:e}}),rT=yr(_1,eT,a(S,"width",G),a(S,"height",G),a(S,"pressure",G),a(S,"tiltX",G),a(S,"tiltY",G)),aT=zr(function(e,r,n,t,o,c){return{pr:r,pE:n,bb:e,so:t,sE:o,tj:c}}),iq=4,fq=0,uq=5,$q=1,lq=2,vq=3,nT=function(e){switch(e){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;default:return 0}},tT=a(Qe,nT,a(S,"button",xi)),oT=v(qn,l(function(e,r){return g(e,r)}),a(S,"clientX",G),a(S,"clientY",G)),cT=J(function(e,r,n,t){return{oS:e,pT:r,rS:n,tu:t}}),iT=I(Sc,cT,a(S,"altKey",re),a(S,"ctrlKey",re),a(S,"metaKey",re),a(S,"shiftKey",re)),fT=v(qn,l(function(e,r){return g(e,r)}),a(S,"offsetX",G),a(S,"offsetY",G)),uT=v(qn,l(function(e,r){return g(e,r)}),a(S,"pageX",G),a(S,"pageY",G)),$T=v(qn,l(function(e,r){return g(e,r)}),a(S,"screenX",G),a(S,"screenY",G)),lT=Wr(V2,aT,iT,tT,oT,fT,uT,$T),sq=0,dq=2,bq=1,vT=function(e){switch(e){case"pen":return 2;case"touch":return 1;default:return 0}},sT=a(Qe,vT,Pe),dT=yr(_1,KL,a(S,"pointerType",sT),lT,a(S,"pointerId",xi),a(S,"isPrimary",re),rT),bT=x(function(e,r,n){return a(YL,e,a(Qe,function(t){return{V:n(t),Y:r.Y,_:r._}},dT))}),z5=a(bT,"pointerdown",ZL),mT=function(e){return{$:5,a:e}},pT=function(e){return{$:6,a:e}},hT=J(function(e,r,n,t){return a(Q,u([T5(z5(function(o){return e.u(pT(t))})),mt(e.u(mT(t)))]),u([a(r,n,t)]))}),gT=J(function(e,r,n,t){return Je(t.aR)?a(Q,u([E(u([De(j(e.eG)),_e,Oe(je),Vr(je),ye(r.km),vr(me(0))]))]),u([oe("No matching items")])):v(d5,"div",u([Yt(ko(e)),E(u([De(j(e.eG)),C(T$,j(0),j(4),j(0),j(4)),Ac(df),a(M,"overscroll-behavior","contain"),vr(me(0)),_e,Ar(sa)])),T5(z5(function(o){return e.u(Ca)})),a(ra,"scroll",a(Qe,a(He,zv,e.u),a(Ni,u(["currentTarget","scrollTop"]),G))),a(Gc,"wheel",ee({V:e.u(Ca),Y:!1,_:!0}))]),(function(){var o=Cr(t.aR),c=a(Ne,o-1,m0((t.bT+e.eG)/Qt)+L5),i=a(we,0,Rt(t.bT/Qt)-L5),f=i*Qt,$=a(Vn,l(function(d,b){var _=i+d;return g(Ze(_),C(hT,e,n,fe(_,t.ax),b))}),a(Gn,c-i+1,a(Gt,i,t.aR))),s=a(we,0,o-1-c)*Qt;return a(B,g("top-spacer",a(Q,u([E(u([De(j(f)),vr(me(0))]))]),P)),X($,u([g("bottom-spacer",a(Q,u([E(u([De(j(s)),vr(me(0))]))]),P))])))})())}),_T=function(e){return{$:9,a:e}},yT=function(e){return a(Qe,function(r){return{V:e.u(_T(r)),Y:!0,_:!0}},a(S,"deltaY",G))},B$=zt(function(e,r,n,t,o,c,i){var f=i;return a(Q,u([E(u([ye(r.ko),_e,Ar(sa),a(M,"gap","8px"),Ce(Xe(100))])),a(Gc,"keydown",a(JL,e,t)),a(Gc,"mousedown",ee({V:e.u(Ca),Y:!1,_:!0})),a(Gc,"pointerdown",ee({V:e.u(Ca),Y:!1,_:!0})),a(Gc,"pointerup",ee({V:e.u(Ca),Y:!1,_:!0})),a(Gc,"wheel",yT(e))]),X(n,X(u([a(Fc,u([Ao("text"),Yt(J3(e)),a(Ge,"data-select-all-on-focus","true"),h5(e.jP),E(u([Ce(Xe(100)),vr(me(0)),a(wr,j(8),j(8)),$r(j(4)),nn(fr),ze(r.kh),ye(r.tZ),a(m1,"placeholder",u([ye(r.km)]))])),gf(a(He,GL,e.u)),Ec(f.hT)]),P),C(gT,e,r,o,f)]),c)))}),xf=function(e){return e.D>.55?{oR:1,aS:0,D:.1,a0:0}:{oR:1,aS:0,D:.98,a0:0}},CT=function(e){return W(e.Z.ia)+(" \xD7 "+W(e.Z.g8))},M5=x(function(e,r,n){var t=r?nr(u([ze(a(Y,function(c){return c.bp},e)),ye(a(Y,a(He,function(c){return c.bp},xf),e))])):ye(a(Y,function(c){return c.tZ},e)),o=r?a(Y,a(He,function(c){return c.bp},xf),e):a(Y,function(c){return c.ko},e);return a(Q,u([E(u([a(wr,j(0),j(12)),De(j(32)),_e,Oe(je),Cf(yf),a(M,"gap","10px"),t]))]),u([a(gr,u([E(u([w$(me(1)),sr(j(13))]))]),u([oe(n.r7)])),a(gr,u([E(u([sr(j(12)),ye(o)]))]),u([oe(CT(n))]))]))}),PT=J(function(e,r,n,t){var o=t;return Wr(B$,gc(r),kf(e),u([C(UL,e,r,n,o.dF)]),D({sq:r.u(g1(0)),st:r.u(g1(1))}),M5(e),P,o.bg)}),y1=J(function(e,r,n,t){return a(Q,u([E(u([Ke(pt),Sa(le),da(le),rn(lr(.001)),ht(fr)])),a(Ge,"inert","")]),u([Wr(B$,A(e,{fk:e.fk+"-warmup"}),r,P,z,n,P,t)]))}),ST=x(function(e,r,n){var t=n;return C(y1,gc(r),kf(e),M5(e),t.bg)}),kT=function(e){if(!e.b0.ds||e.oJ)return oe("");var r={fk:k2,u:e.jw};return a(Q,P,u([v(no,e.e,e.pH,{br:Zt(7),kR:C(PT,e.e,r,e.sw,e.S),by:7,bz:e.f,a3:e.az.a3,dK:e.az.dL(7),oh:Da(7),oj:"Device",u:e.aX}),v(ST,e.e,r,e.S)]))},xT=x(function(e,r,n){return(function(t){return v(Ya,e,t,n.bD)})(v(ve,e,r,n.bx))}),wT=l(function(e,r){return a(rr,a(xT,e,r),a$)}),jT=function(e){var r=e,n=v(wT,l(function(c,i){var f=i.a,$=i.b;return g(f+1,$+c.lo)}),g(0,0),r.f1),t=n.a,o=n.b;return t>1&&o>0?D(t/o):z},LT=se("flex-end"),D5=function(e){return e*1e3},TT=function(e){var r=e.um;return{kq:0,um:a(Mc,"translateY",u([r]))}},zT=function(e){return a(Q,u([E(u([Ke(Ma),Ce(Xe(100)),De(j(1)),P$(u([TT(Xe(-50))])),ze(tr(e.dG.q_)),Zn(j(D5(1/60)))]))]),P)},MT=function(e){return X(e.bx,Re(e.bD))},DT=a(rr,MT,a$),BT=l(function(e,r){var n=r*1e3;return n<=18?e.dG.q_:n<=33?e.dG.uM:e.dG.s4}),AT=l(function(e,r){return a(Q,u([E(u([Hc(fr),Ce(j(4)),De(j(D5(r))),Zn(le),ze(tr(a(BT,e,r)))]))]),P)}),HT=l(function(e,r){return a(Q,u([E(u([Ke(Mo),De(j(50)),Ce(j(P3*4)),Ac(bf),ze(tr(e.ki))]))]),u([zT(e),a(Q,u([E(u([Ke(Ma),dt(le),Zn(le),De(Xe(100)),_e,Ar(zc),Oe(LT)]))]),a(N,a(He,function(n){return n.lo},AT(e)),DT(r)))]))}),B5=l(function(e,r){if(e<0)return r;var n=a(bn,10,e),t=ug(n),o=function(c){return c/n};return o(Ir(t(r)))}),IT=l(function(e,r){return e<0?r:a(B5,e,r)}),VT=function(e){return e>=0?"":"-"},wf=l(function(e,r){var n=function(t){var o=a($n,".",t);e:for(;;)if(o.b)if(o.b.b){if(o.b.b.b)break e;var c=o.a,i=o.b,f=i.a;return c+("."+v(Uu,e,"0",f))}else{var c=o.a;return c+("."+a(cc,e,"0"))}else break e;return t};return h2(r)?"NaN":mc(r)?VT(r)+"Infinity":e<=0?W(a(IT,e,r)):n(W(a(B5,e,r)))}),RT=l(function(e,r){return a(Q,u([E(u([ye(tr(e.dG.q_))]))]),u([oe("Frame Rate: "),oe(a(ne,"-",a(de,wf(0),r)))]))}),FT=l(function(e,r){var n=r;return a(Q,u([E(u([_e,Ar(sa),a(M,"gap","8px")]))]),u([a(HT,e,n.f1),a(RT,e,jT(r))]))}),A5=function(e){return a(se,"animation-duration",e)},ET=function(e){return{$:5,a:e}},H5=function(e){return e.um==="none"||e.um==="inherit"||e.um==="unset"||e.um==="initial"?a(se,"animation-name",e):ET(e.um)},mq=ae,Ho=l(function(e,r){return e+(":"+r)}),UT=function(e){return fe(e,t$)},GT=function(e){var r=e.a,n=e.b,t=v(va,function(c){var i=c;return i+";"},"",n),o=Ze(r)+"%";return o+("{"+(t+"}"))},qT=function(e){return v(va,GT,"",e)},I5=function(e){return Je(e)?{i4:0,jq:0,um:"none"}:{i4:0,jq:0,um:qT(e)}},V5=function(e){return{cB:0,um:W(e)+"s"}},WT={$:2},NT={$:3},QT=function(e){return fe(e,t$)?NT:WT},OT=function(e){return{$:3,a:e}},JT=l(function(e,r){return{$:4,a:e,b:r}}),XT=function(e){return JT(a(N,OT,e))},ZT=x(function(e,r,n){var t=UT(n),o=t?"Stop profiling":"Start profiling",c=t?a(Q,u([E(u([Ce(Xe(100)),De(Xe(100)),_e,Oe(je),Vr(je),ye(a(Y,a(He,function(i){return i.dG},function(i){return i.s4}),e)),H5(I5(u([g(0,u([a(Ho,"opacity","1")])),g(50,u([a(Ho,"opacity","0.35")])),g(100,u([a(Ho,"opacity","1")]))]))),A5(V5(1.2)),a(M,"animation-iteration-count","infinite"),a(M,"animation-timing-function","ease-in-out"),a(XT,u(["(prefers-reduced-motion: reduce)"]),u([a(M,"animation","none")]))]))]),u([dr.s3])):dr.s3;return a(Q,u([E(u([_e,Vr(je),Ce(Xe(100))]))]),u([a(Q,u([E(u([Ce(j(160))]))]),u([a(S5,e,{p9:!1,lX:D(c),rs:t,i5:o,fU:r(QT(n)),Z:1,un:1})]))]))}),YT=function(e){var r=e.b0.eo?u([v(ZT,e.e,e.fW,e.aL)]):P;return a(Q,u([E(u([_e,Ar(sa),a(M,"gap","8px")]))]),a(B,a(FT,Nn(e.e),e.c0),r))},KT=function(e){return!e.b0.fD||e.oJ||$t(e.tX)?oe(""):v(no,e.e,e.pH,{br:Zt(2),kR:YT(e),by:2,bz:e.f,a3:e.az.a3,dK:e.az.dL(2),oh:Da(2),oj:"Performance",u:e.aX})},jf=function(e){return e?"true":"false"},A$=function(e){var r=e.b;return U3(r)},Ba=x(function(e,r,n){return a(Q,u([E(u([_e,a(M,"gap","16px"),a(wr,j(3),le),Oe(p5),a(M,"font-family",on.r2),sr(j(12)),a(M,"font-feature-settings",'"tnum"')]))]),u([a(Q,u([E(u([ye(a(Y,function(t){return t.km},e)),Ce(j(120)),vr(me(0))]))]),u([oe(r)])),a(Q,u([E(u([ye(a(Y,function(t){return t.tZ},e))]))]),u([oe(n)]))]))}),H$=x(function(e,r,n){return a(Q,u([E(u([a(wr,le,j(20))]))]),a(B,a(i5,e,r),n))}),ez=function(e){var r=e.e,n=e.pH;return a(Q,u([E(u([_e,Ar(sa),a(M,"gap","18px"),a(wr,j(14),le),Ce(j(o5))]))]),u([v(H$,r,"Tape",u([v(Ba,r,"frame",Ze(A$(e.tX))),v(Ba,r,"dt",a(pc,4,n.lo)),v(Ba,r,"clock",a(pc,4,n.gG))])),v(H$,r,"Pointer",u([v(Ba,r,"x",a(pc,2,n.fY.kB)),v(Ba,r,"y",a(pc,2,n.fY.cQ)),v(Ba,r,"isDown",jf(n.fY.mb))])),v(H$,r,"Keyboard",u([v(Ba,r,"pressed",a(Mr," ",n.mm.sZ)),v(Ba,r,"shift",jf(n.mm.tu)),v(Ba,r,"ctrl",jf(n.mm.pT)),v(Ba,r,"meta",jf(n.mm.rS)),v(Ba,r,"alt",jf(n.mm.oS))])),v(H$,r,"Wheel",u([v(Ba,r,"deltaX",W(n.uu.p2)),v(Ba,r,"deltaY",W(n.uu.p3))]))]))},rz=function(e){return!e.b0.fE||e.oJ?oe(""):v(no,e.e,e.pH,{br:Zt(1),kR:ez(e),by:1,bz:e.f,a3:e.az.a3,dK:e.az.dL(1),oh:Da(1),oj:"Inputs",u:e.aX})},pq=1,R5=function(e){return{oS:!1,pG:e,pT:!1,rS:!1,tu:!1}},az=function(e){return A(e,{rS:!0})},C1=function(e){return az(R5(e))},nz=function(e){return A(e,{pT:!0})},P1=function(e){return nz(R5(e))},tz=function(e){return e===1?"\u2325":"Alt"},oz=function(e){return e===1?"\u2303":"Ctrl"},cz=l(function(e,r){if(a(Fn,"Key",r))return a(Za,3,r);if(a(Fn,"Digit",r))return a(Za,5,r);switch(r){case"BracketLeft":return"[";case"BracketRight":return"]";case"Slash":return"/";case"Backslash":return"\\";case"Period":return".";case"Comma":return",";case"Semicolon":return";";case"Quote":return"'";case"Backquote":return"`";case"Minus":return"-";case"Equal":return"=";case"Space":return"Space";case"ArrowLeft":return"\u2190";case"ArrowRight":return"\u2192";case"ArrowUp":return"\u2191";case"ArrowDown":return"\u2193";case"Enter":return e===1?"\u21A9":"Enter";case"Escape":return e===1?"\u238B":"Esc";case"Tab":return e===1?"\u21E5":"Tab";case"Backspace":return e===1?"\u232B":"Backspace";case"Delete":return e===1?"\u2326":"Del";default:return r}}),iz=function(e){return e===1?"\u2318":"Win"},fz=function(e){return e===1?"\u21E7":"Shift"},I$=l(function(e,r){var n=e===1?"":"+",t=a(xr,ae,u([r.pT?D(oz(e)):z,r.oS?D(tz(e)):z,r.tu?D(fz(e)):z,r.rS?D(iz(e)):z,D(a(cz,e,r.pG))]));return a(Mr,n,t)}),uz=function(e){var r=(function(){var t=e.pH.sB===1?C1("KeyI"):P1("KeyI");return a(I$,e.pH.sB,t)})(),n=Du(e.e);return a(D$,e.e,{p9:!1,lX:function(t){return t?dr.tP:dr.r3},rv:Na(n),rw:function(t){return t?"Lights on":"Lights off"},rx:u([!1,!0]),i5:"Lights",su:function(t){return fe(t,n)?e.eN:e.jx(ev(e.e))},sw:e.sw,dF:0,tq:function(t){return function(o){return Dc}},nZ:function(t){return D(r)},t4:1})},$z={$:2},lz={$:3},vz=(function(){var e=f2,r=e.a,n=e.b;return a(B,r,n)})(),sz=function(e){return{$:1,a:e}},dz=vt("title"),bz=J(function(e,r,n,t){var o=Nn(e).dG,c=fe(t,n),i=a(eb,t,o),f=a(cr,function(s){return s.iv},e),$=c?u([a(M,"outline","3px solid "+Se(f)),a(M,"outline-offset","2px")]):P;return a(bt,u([a(Ge,"aria-pressed",c?"true":"false"),a(Ge,"type","button"),dz(qb(t)),mt(r(sz(t))),E(X(u([Ce(j(28)),De(j(28)),$r(Xe(50)),ze(tr(i)),v(eo,j(1),ro,tr(f)),ea(tn),an(j(0))]),$))]),P)}),mz=x(function(e,r,n){var t=yo(n);return a(Q,u([a(Ge,"role","group"),a(Ge,"aria-label","Accent colour"),E(u([_e,Oe(je),a(M,"gap","12px"),vr(me(0))]))]),a(N,v(bz,e,r,t),vz))}),pz=J(function(e,r,n,t){return a(Q,u([E(u([_e,Oe(je),Vr(je),a(M,"gap","14px"),a(wr,j(6),j(0)),vr(me(0))]))]),X(n,u([v(mz,e,r,t)])))}),hz=function(e){return a(Q,u([E(u([Ce(j(12)),De(j(12)),$r(j(2)),ze(tr(e))]))]),P)},gz=function(e){return a(Q,u([E(u([_e,a(M,"gap","3px"),vr(me(0))]))]),a(N,hz,u([e.o2,e.qM,e.pa,e.q_,e.s4,e.uM])))},F5=x(function(e,r,n){var t=r?nr(u([ze(a(Y,function(o){return o.bp},e)),ye(a(Y,a(He,function(o){return o.bp},xf),e))])):ye(a(Y,function(o){return o.tZ},e));return a(Q,u([E(u([a(wr,j(0),j(12)),De(j(32)),_e,Oe(je),Cf(yf),a(M,"gap","10px"),t]))]),u([gz(n),a(gr,u([E(u([w$(me(1)),sr(j(13))]))]),u([oe(n.r7)]))]))}),_z=J(function(e,r,n,t){var o=t;return Wr(B$,_c(r),kf(e),u([C(pz,e,r.u,n,o.cR)]),D({sq:r.u($z),st:r.u(lz)}),F5(e),P,o.bg)}),yz=x(function(e,r,n){var t=n;return C(y1,_c(r),kf(e),F5(e),t.bg)}),Cz=function(e){if(!e.b0.b9||e.oJ)return oe("");var r={fk:L2,u:e.jD};return a(Q,P,u([v(no,e.e,e.pH,{br:Zt(5),kR:C(_z,e.e,r,u([uz(e)]),e.R),by:5,bz:e.f,a3:e.az.a3,dK:e.az.dL(5),oh:Da(5),oj:"Theme",u:e.aX}),v(yz,e.e,r,e.R)]))},Pz=function(e){return v(Cn,"style",P,u([oe(`
.`+(l1+(` {
  position: fixed;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
}
.`+(l1+`::backdrop {
  background: transparent;
}
`))))]))},Sz=l(function(e,r){return`
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
`)))))}),kz=`
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
`,xz=function(e){var r=Se(a(pr,.25,a(cr,function(t){return t.bp},e))),n=Se(a(cr,function(t){return t.bp},e));return v(Cn,"style",P,u([oe(X(kz,a(Sz,n,r)))]))},wz=function(e){var r=Se(Dc),n=Se(a(pr,.25,a(cr,function(i){return i.bp},e))),t=Se(a(cr,function(i){return i.iu},e)),o=Se(a(cr,function(i){return i.$8},e)),c=Se(a(cr,function(i){return i.bp},e));return v(Cn,"style",P,u([oe(`
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
`))))))))))))))))))))))))))))]))},jz=l(function(e,r){return a(tm,e+" ",r)}),Lz=function(e){return{o2:a(Y,function(r){return r.bp},e),qM:tr(xf(a(cr,function(r){return r.bp},e))),gs:st.cN}},Tz=function(e){return Lz(e)},zz=function(e){return{$:5,a:e}},Mz=function(e){return{$:11,a:e}},Dz={$:15},Bz=function(e){return{$:9,a:e}},Az={$:10},Hz={$:7},Iz={$:8},Vz=function(e){var r=e,n=a(Vn,l(function(t,o){return g(o,t)}),r.aK);return{a3:Cr(r.aK),dL:function(t){return a(ne,0,a(de,Tu,Sr(a(kr,function(o){var c=o.a;return fe(c,t)},n))))}}},Rz=l(function(e,r){return{P:r.oK.P,pH:e.pH,gN:{nd:a(rr,e.u,Bz),ol:a(de,function(n){return{br:n.br,ht:n.ht}},r.d4)},S:r.S,f:r.f,fu:e.fu,c0:r.c0,m$:r.m$,eN:e.u(Dz),ju:a(rr,e.u,N3),jv:e.u(Z2),fV:e.fV,jw:a(rr,e.u,S2),aX:a(rr,e.u,O2),jx:function(n){return e.u(zz(n))},jy:a(rr,e.u,Mz),jz:e.u(Az),jA:e.u(Hz),fW:a(rr,e.u,J2),jB:e.u(Iz),dE:e.dE,jD:a(rr,e.u,j2),eO:e.eO,sw:a(rr,e.u,X2),aL:r.aL,bE:r.bE,az:Vz(r.f),tX:e.tX,R:r.R,e:r.e,cN:r.cN,b0:e.f4,oJ:r.oJ}}),Fz=l(function(e,r){switch(e){case 3:return{kB:r.j_,cQ:.5*(r.h6+r.pf)};case 2:return{kB:r.eB,cQ:.5*(r.h6+r.pf)};case 0:return{kB:.5*(r.eB+r.j_),cQ:r.h6};default:return{kB:.5*(r.eB+r.j_),cQ:r.pf}}}),hq=1,Ez={lC:0,fz:0,dq:0,eF:0,ni:0,um:"normal",dW:0},V$=x(function(e,r,n){switch(e){case 0:return r;case 1:return .5*(r+n);default:return n}}),Uz=J(function(e,r,n,t){switch(r){case 0:return g(v(V$,n,e.eB,e.j_),e.h6-t);case 1:return g(v(V$,n,e.eB,e.j_),e.pf+t);case 2:return g(e.eB-t,v(V$,n,e.h6,e.pf));default:return g(e.j_+t,v(V$,n,e.h6,e.pf))}}),R$=function(e){switch(e){case 0:return"0";case 1:return"-50%";default:return"-100%"}},E5=function(e){var r=e.br,n=e.eb,t=e.oP,o=e.qW,c=(function(){switch(n){case 0:return"-100%";case 1:return"0";case 2:return R$(t);default:return R$(t)}})(),i=(function(){switch(n){case 0:return R$(t);case 1:return R$(t);case 2:return"-100%";default:return"0"}})(),f="translate("+(i+(", "+(c+")"))),$=C(Uz,r,n,t,o),s=$.a,d=$.b;return u([Ke(pt),da(j(s)),Sa(j(d)),a(M,"transform",f)])},Gz=l(function(e,r){return a(Q,u([E(X(E5({oP:1,br:r.br,eb:r.eb,qW:6}),u([a(wr,j(7),j(14)),ze(e.o2),ye(e.qM),$r(Pn.rN),Xn(me(e.gs)),_e,Ar(zc),a(M,"gap","12px"),a(M,"width","max-content"),n1(Ez),x5(j(360)),Sn(lr(1.45))])))]),u([a(gr,P,u([oe(r.i5)])),(function(){var n=r.nZ;if(n.$===1)return oe("");var t=n.a;return a(gr,u([E(u([ye(e.qM)]))]),u([oe(t)]))})()]))}),qz=l(function(e,r){return{gy:0,cw:0,um:X(W(r),e)}}),Wz=qz("deg"),Nz=function(e){var r=e.um;return{kq:0,um:a(Mc,"rotate",u([r]))}},Qz=x(function(e,r,n){return a(Q,u([E(u([Ke(pt),da(j(n.kB)),Sa(j(n.cQ)),ze(e.o2),Ce(j(10)),De(j(10)),Xn(me(e.gs)),a(M,"transform-origin","top left"),M$(Nz(Wz((function(){switch(r){case 3:return-45;case 2:return 135;case 1:return 45;default:return-135}})())))]))]),P)}),U5=l(function(e,r){return a(Q,P,u([v(Qz,e,r.eb,a(Fz,r.eb,r.br)),a(Gz,e,r)]))}),Oz=l(function(e,r){var n=r;if(n.$){var t=n.a,o=t.X;switch(o.$){case 1:return a(U5,e,t);case 2:return a(U5,e,t);case 0:return oe("");default:return oe("")}}else return oe("")}),Jz=480,Xz=l(function(e,r){return e.gR}),Zz=se("min-width"),Yz=J(function(e,r,n,t){var o=n?nr(u([ze(a(Y,function(c){return c.bp},e)),ye(a(Y,a(He,function(c){return c.bp},xf),e))])):ye(a(Y,function(c){return c.tZ},e));return a(Q,u([E(u([_e,Vr(u1),Oe(je),a(wr,j(0),j(12)),De(j(32)),Cf(yf),o]))]),u([a(gr,u([E(u([sr(j(13)),w$(me(1))]))]),u([oe(t.hV+(": "+t.i5))])),a(gr,u([E(u([sr(j(13)),Zz(j(70)),vr(me(0)),w5(dt)]))]),u([oe(a(ne,"",a(de,I$(r.sB),a(Xz,t,r))))]))]))}),Kz=function(e){return{fk:Q3,eG:320,jP:"Type a command\u2026",u:e,ia:{rY:400,ur:50}}},eM=function(e){if(a(Qi,e.b0,e.P)){var r=a(Yz,e.e,e.pH),n=kf(e.e),t=Kz(e.ju);return a(Q,P,u([v(no,e.e,e.pH,{br:Zt(6),kR:a(Q,u([E(u([Ce(j(Jz))]))]),u([Wr(B$,t,n,P,z,r,P,e.P)])),by:6,bz:e.f,a3:e.az.a3,dK:e.az.dL(6),oh:Da(6),oj:"Command palette",u:e.aX}),C(y1,t,n,r,e.P)]))}else return oe("")},rM=l(function(e,r){return a(Q,u([a(Ge,"role","status"),E(X(E5({oP:r.oP,br:r.br,eb:r.eb,qW:6}),u([a(wr,Uc.tx,Uc.rC),$r(Pn.rN),ze(a(Y,function(n){return n.bp},e)),ye(a(Y,function(n){return v(Zv,.6,n.bp,n.tZ)},e)),nr(gt.oj),n1(a5),Xv.ql,Xn(me(st.ol)),a(M,"pointer-events","none"),H5(I5(u([g(0,u([a(Ho,"opacity","0")])),g(8,u([a(Ho,"opacity","1")])),g(92,u([a(Ho,"opacity","1")])),g(100,u([a(Ho,"opacity","0")]))]))),A5(V5(O3)),a(M,"animation-fill-mode","forwards")])))]),u([oe(r.V)]))}),aM=function(e){var r=e.gN.ol;if(r.$===1)return oe("");var n=r.a.br,t=r.a.ht;return a(rM,e.e,{oP:1,br:n,eb:1,V:t?"Nothing to Reset":"Use the browser's Back button to undo"})},nM=function(e){var r=l(function(n,t){return"inset 0 0 "+(W(n)+("px 0 "+Se(a(pr,t,e))))});return a(Mr,", ",u([a(r,90,.22),a(r,30,.4),a(r,8,.65)]))},G5=function(e){switch(e){case 0:return z;case 1:return D(v(Hr,1/6,1,.5));default:return D(v(Hr,1/3,1,.5))}},tM=function(e){var r=G5(e.m$);if(r.$===1)return oe("");var n=r.a;return a(Q,u([E(u([Ke(pt),Sa(le),da(le),dt(le),Zn(le),a(M,"pointer-events","none"),a(M,"box-shadow",nM(n))]))]),P)},gq=0,S1=a(uf,0,"rem"),oM=function(e){if(!$t(e.tX)||e.oJ)return oe("");var r=e.pH.f3,n=e.pH.fY,t=Se(n.mb?a(cr,function(c){return c.tZ},e.e):a(cr,function(c){return c.bp},e.e)),o=a(Mr," ",u(["drop-shadow(1px 0 "+(t+")"),"drop-shadow(-1px 0 "+(t+")"),"drop-shadow(0 1px "+(t+")"),"drop-shadow(0 -1px "+(t+")")]));return a(Q,u([E(u([Ke(Ma),Sa(le),da(le),Ce(S1(2)),De(S1(2)),a(M,"pointer-events","none"),a(M,"transform","translate("+(W(n.kB+.5*r.ia)+("px, "+(W(-n.cQ+.5*r.g8)+"px)")))),ye(n.mb?a(Y,function(c){return c.bp},e.e):a(Y,function(c){return c.tZ},e.e)),a(M,"filter",o),Xn(me(st.a6+1))]))]),u([dr.fY]))},cM=function(e){return{$:0,a:e}},iM=h9,_q=ae,fM=function(e){return a(T,e,ee(0))};function k1(){return Pc(x1())}function x1(){return C(Cc,x(function(e,r,n){return{gD:r,dn:n,cB:e}}),a(S,"duration",G),a(S,"callCount",xi),a(S,"children",fM(function(e){return k1()})))}var q5=k1();k1=function(){return q5};var uM=x1();x1=function(){return uM};var $M=function(e){return a(Qe,e,a(Ni,u(["detail"]),v(qn,l(function(r,n){return{f_:r,aB:n}}),a(S,"recordingStartTime",G),a(S,"tickSnapshots",iM(v(qn,l(function(r,n){return{iR:n,df:r}}),a(S,"timestamp",G),a(S,"flameGraph",q5)))))))},lM=function(e){var r=e.tf,n=e.ss;return v(Cn,"profiler-element",X(u([a(ra,"result",$M(n))]),r?u([a(Ge,"running","")]):P),P)},vM=function(e){return lM({ss:cM,tf:fe(e,t$)})},sM=function(e){return Je(e)?{um:"none"}:{um:a(Mr,", ",e)}},dM=a(rr,se("font-family"),sM),w1=l(function(e,r){return a(u$,l(function(n,t){var o=t,c=a(Ye,n,e);if(c.$===1)return o;var i=c.a;return{gD:o.gD-i.gD,dn:a(w1,i.dn,o.dn),cB:o.cB-i.cB}}),r)}),W5=l(function(e,r){var n=e.cL,t=e.cD,o=r.aB,c=n?a(ne,Fe,a(de,function(f){return f.iR},a($a,n-1,o))):Fe,i=a(ne,Fe,a(de,function(f){return f.iR},a($a,t,o)));return a(w1,c,i)}),bM=se("max-height"),N5=function(e){return v(vu,x(function(r,n,t){return a(B,n,t)}),P,e)},qc=function(e){return{$:9,a:e}},Q5=function(e){var r=(function(n){return 1-n.h9/n.ho})(v(ve,l(function(n,t){var o=a(Zr,t.fR,it(n));return{ho:t.ho+t.gr,fR:t.fR+1,h9:t.h9+o/(t.fR-1)*t.gr,gr:t.gr*.7}}),{ho:0,fR:10,h9:0,gr:1},a(Gn,8,Si(e))));return{oR:1,aS:r,D:.35,a0:.45}},mM=function(e){return a(ra,"mouseout",ee(e))},pM=function(e){return a(ra,"mouseover",ee(e))},hM=zr(function(e,r,n,t,o,c){var i=n>0?c/n*100:0,f=fe(t,D(o)),$=tr(f?e.tZ:Q5(o)),s=!fe(t,z),d=lr(s&&!f?.3:1);return a(Q,u([E(u([Ke(Mo),Yv(j(r*16)),De(j(24)),Sn(j(24)),ea(tn),rn(d),Jn(u([ze(tr(e.kg)),ye(tr(e.tZ))]))])),pM(qc(D(o))),mM(qc(z))]),u([a(Q,u([E(u([Ke(Ma),Sa(le),da(j(r*16)),Ce(Xe(i)),De(Xe(100)),ze($)]))]),P),a(gr,u([E(u([Ke(Mo),Yv(j(6)),Xn(me(1))]))]),u([oe(o)]))]))}),gM=Te(function(e,r,n,t,o){var c=o.a,i=o.b.cB,f=o.b.dn;return a(B,yr(hM,e,r,n,t,c,i),I(O5,e,r+1,n,t,f))}),O5=Te(function(e,r,n,t,o){return a(_n,C(gM,e,r,n,t),a(Pf,vn,Wa(o)))}),_M=Te(function(e,r,n,t,o){var c=v(Xi,r,n,t),i=c.a,f=i.b,$=c.b,s=$.b,d=a(W5,{cD:s,cL:f},t),b=a(ne,0,Ku(a(N,function(_){var p=_.cB;return p},N5(d))));return a(Q,u([E(u([an(j(8)),r5(df),bM(j(300)),ze(tr(e.ki)),ye(tr(e.ko))]))]),I(O5,e,0,b,o,d))}),J5=function(e){return v(b$,"alignSelf","align-self",e(m$))},yM={qa:0,um:"block"},CM=se("flex-start"),Io=hr("height"),X5=ra,Vo=ao("g"),F$=ao("line"),Z5=l(function(e,r){var n=r.aB,t=function(o){return o<0?Fe:a(ne,Fe,a(de,function(c){return c.iR},a($a,o,n)))};return a(w1,t(e-1),t(e))}),Y5=function(e){return e.$===-2},K5=function(e){return Y5(e)?0:a(ne,0,Ku(a(N,function(r){var n=r.dn;return 1+K5(n)},N5(e))))},PM=function(e){var r=la(e.aB);return a(ne,0,Ku(a(N,function(n){return K5(a(Z5,n,e))},a(In,1,r-1))))},SM=function(e){return a(Pf,ae,e)},E$=l(function(e,r){var n=r.aB,t=r.f_;return e?a(ne,t,a(de,function(o){return o.df},a($a,e-1,n))):t}),ep=l(function(e,r){var n=a(ne,r.f_,a(de,function(t){return t.df},a($a,e,r.aB)));return n-a(E$,e,r)}),kM=function(e){var r=la(e.aB),n=SM(a(N,function(o){return a(ep,o,e)},a(In,1,r-1))),t=a(we,0,Rt(Cr(n)*.95)-1);return a(ne,16.7,Sr(a(Gt,t,n)))},Wc=ao("rect"),Lf=hr("stroke"),Tf=hr("stroke-width"),xM=function(e){return{$:5,a:e}},wM=function(e){return{$:6,a:e}},jM={aQ:0,um:"ew-resize"},U$=hr("x1"),G$=hr("x2"),q$=hr("y1"),W$=hr("y2"),LM=J(function(e,r,n,t){var o=n.a,c=n.b,i=a(Kr,r,en.h$),f=a(Kr,r,en.hO),$=function(F){return a(Qe,function(V){return F({fj:V})},a(S,"clientX",G))},s=l(function(F,V){return a(Vo,P,u([a(F$,u([U$(W(F)),q$("0"),G$(W(F)),W$(W(i)),Lf("transparent"),Tf(W(a(Kr,r,10))),Yn(u([ea(jM)])),a(X5,"pointerdown",$(V))]),P),a(F$,u([U$(W(F)),q$("0"),G$(W(F)),W$(W(i)),Lf(Se(e.dG.s4)),Tf(W(a(Kr,r,1))),Yn(u([ht(fr)]))]),P)]))}),d=v(Xi,r,a(Lc,o,c),t),b=d.a,_=b.a,p=b.b,h=d.b,y=h.a,k=h.b,L=_,w=y,H=(function(){if(o.$){var F=o.a,V=(function(){return F?a(ne,t.f_,a(de,function(q){return q.df},a($a,k,t.aB))):a(E$,p,t)})();return a(F$,u([U$(W(V)),q$("0"),G$(W(V)),W$(W(f)),Lf(Se(e.dG.s4)),Tf(W(a(Kr,r,2))),Yn(u([ht(fr)]))]),P)}else return a(Vo,P,P)})();return a(Vo,P,u([a(s,L,xM),a(s,w,wM),H]))}),rp=x(function(e,r,n){return fe(r,D(n))?Se(e.tZ):Se(Q5(n))}),ap=l(function(e,r){if(e.$)return 1;var n=e.a;return fe(n,r)?1:.3}),np=function(e){return a(ra,"mouseout",ee(e))},tp=function(e){return a(ra,"mouseover",ee(e))},j1=hr("opacity"),L1=nm,op=ao("title"),Ro=hr("width"),Fo=hr("x"),Eo=hr("y"),TM=l(function(e,r){var n=r.kB,t=r.cQ,o=r.ia,c=r.g8,i=r.i5,f=r.lp,$=r.ma,s=i+(" ("+(a(wf,2,f)+"ms)")),d=a(ap,e.ca,i),b=v(rp,e.de,e.ca,i),_=a(Wc,u([Fo(W(n)),Eo(W(t)),Ro(W(o)),Io(W(c)),_t(b),j1(W(d)),tp(qc(D(i))),np(qc(z))]),u([a(op,P,u([L1(s)]))])),p=$?u([a(Wc,u([Fo(W(n)),Eo(W(t)),Ro(W(o)),Io(W(a(Kr,e.a5,2))),_t(Se(e.de.dG.s4)),Yn(u([ht(fr)]))]),P)]):P;return a(B,_,p)}),cp=J(function(e,r,n,t){return v(ve,l(function(o,c){var i=o.a,f=o.b,$=c.a,s=c.b,d=f.cB/e.eL,b=te(d,e.cs)>0,_=C(cp,e,r+1,$,f.dn),p=a(Ne,e.cs,d),h=a(TM,e,{lp:f.cB,g8:p,ma:b,i5:i,ia:e.h_,kB:e.dp+r*e.h_,cQ:e.cs-$-p});return g($+p,X(h,X(_,s)))}),g(n,P),a(Pf,vn,Wa(t))).b}),zM=l(function(e,r){var n=e.oF/e.eL,t=a(Ne,e.cs,n),o=te(n,e.cs)>0,c=a(Kr,e.a5,1),i=a(we,0,e.og-c),f=a(Ne,i,a(Kr,e.a5,en.of)),$=a(Wc,u([Fo(W(e.dp)),Eo(W(e.cs-t)),Ro(W(f)),Io(W(t)),_t(Se(e.de.km)),Yn(u([ht(fr)]))]),P),s=a(Kr,e.a5,2),d=o?u([a(Wc,u([Fo(W(e.dp)),Eo("0"),Ro(W(f)),Io(W(s)),_t(Se(e.de.dG.s4)),Yn(u([ht(fr)]))]),P)]):P,b=a(we,0,i-f),_=e.dp+f,p=(function(){if(b<=0||e.jh<=0||Y5(r))return P;var h=b/e.jh;return C(cp,{dp:_,ca:e.ca,eL:e.eL,cs:e.cs,h_:h,de:e.de,a5:e.a5},0,0,r)})();return a(B,$,X(d,p))}),MM=l(function(e,r){var n=function(i){return a(ne,0,a(de,function(f){return f.df},a($a,i,r.aB)))},t=a(we,1,a(o$,e.eB,r)-1),o=la(r.aB),c=a(Ne,o-1,a(o$,e.j_,r)+1);return a(kr,function(i){var f=a(E$,i,r),$=n(i);return te($,e.eB)>-1&&te(f,e.j_)<1},a(In,t,c))}),DM=Te(function(e,r,n,t,o){var c=a(MM,r,t),i=a(Kr,r,en.hO),f=PM(t),$=a(we,33.3,kM(t)),s=$>0?$/i:1,d=a(_n,function(h){var y=a(ep,h,t);return a(zM,{dp:a(E$,h,t),ca:o,jh:f,eL:s,cs:i,de:e,og:y,oF:y,a5:r},a(Z5,h,t))},c),b=16.7/s,_=a(F$,u([U$(W(r.eB)),G$(W(r.j_)),q$(W(i-b)),W$(W(i-b)),Lf(Se(e.dG.uM)),Tf(W(a(Kr,r,1))),Yn(u([ht(fr)]))]),P),p=a(Wc,u([Fo(W(r.eB)),Eo("0"),Ro(W(r.j_-r.eB)),Io(W(i)),_t(Se(e.ki))]),P);return a(Vo,P,u([p,a(Vo,P,d),_,C(LM,e,r,n,t)]))}),BM=hr("transform"),AM=hr("font-size"),HM=ao("text"),IM=l(function(e,r){var n=e.lI,t=e.nj,o=e.kM,c=.6*n,i=Rt((o-t)/c);return te(Ja(r),i)<1?r:i<=1?"":a(zi,i-1,r)+"\u2026"}),VM=zr(function(e,r,n,t,o,c){var i=c.cB,f=c.gD,$=a(Kr,r,en.nQ),s=.3*$,d=n.fs*$,b=a(ap,t,o),_=.6*$,p=v(rp,e,t,o),h=a(Mr," > ",Re(a(B,o,n.fi))),y=h+(" ("+(Ze(f)+("x, "+(a(wf,2,i)+"ms)"))));return a(Vo,u([tp(qc(D(o))),np(qc(z))]),u([a(op,P,u([L1(y)])),a(Wc,u([Fo(W(n.dX)),Eo(W(d)),Ro(W(i)),Io(W($)),_t(p),Lf(Se(e.kf)),Tf(W(a(Kr,r,1))),j1(W(b))]),P),a(HM,u([Fo(W(n.dX+s)),Eo(W(d+.7*$)),_t(Se(e.tZ)),AM(W(_)),j1(W(b))]),u([L1(a(IM,{kM:i,lI:_,nj:s},y))]))]))}),ip=Te(function(e,r,n,t,o){return v(ve,l(function(c,i){var f=c.a,$=c.b,s=i.a,d=i.b,b=I(ip,e,r,{fi:a(B,f,n.fi),fs:n.fs+1,dX:s},t,$.dn),_=yr(VM,e,r,A(n,{dX:s}),t,f,$);return g(s+$.cB,a(B,_,X(b,d)))}),g(n.dX,P),a(Pf,function(c){var i=c.a;return i},Wa(o))).b}),RM=Te(function(e,r,n,t,o){var c=a(Kr,r,en.hO),i=v(Xi,r,n,t),f=i.a,$=f.a,s=f.b,d=i.b,b=d.b;return a(Vo,u([BM("translate("+(W($)+(", "+(W(c)+")"))))]),I(ip,e,r,{fi:P,fs:0,dX:0},o,a(W5,{cD:b,cL:s},t)))}),FM=function(e){return{$:1,a:e}},EM=C(Cc,x(function(e,r,n){return FM({m1:n/en.h0,nS:e,nT:r})}),a(S,"deltaX",G),a(S,"deltaY",G),a(S,"offsetX",G)),UM=function(e){var r=e.j_-e.eB;return a(Mr," ",a(N,W,u([e.eB,0,r,a(Kr,e,en.h$)])))},GM=Te(function(e,r,n,t,o){var c=r.j_-r.eB,i=a(r1,u([Ro(W(en.h0)),Io(W(en.h$)),a1(UM(r)),a(X5,"wheel",EM),Yn(u([ze(tr(e.tT)),$5(yM)]))]),u([I(DM,e,r,n,t,o),I(RM,e,r,n,t,o)])),f=function(h){return a(Q,u([E(X(u([Ke(Ma),Sa(le),Zn(le),ht(fr),a(M,"backdrop-filter","blur(3px)"),a(M,"-webkit-backdrop-filter","blur(3px)")]),h))]),P)},$=function(h){return c?v(mr,0,1,(h-r.eB)/c):0},s=v(Xi,r,n,t),d=s.a,b=d.a,_=s.b,p=_.a;return a(Q,u([E(u([Ke(Mo),J5(CM)]))]),u([i,f(u([da(le),Ce(Xe($(b)*100))])),f(u([dt(le),Ce(Xe((1-$(p))*100))]))]))}),qM=l(function(e,r){var n=la(r.aB),t=Nn(e),o=(function(){var f=a($a,n-1,r.aB);if(f.$)return 0;var $=f.a;return $.df-r.f_})(),c=o>=1e3?a(wf,2,o/1e3)+" s":a(wf,0,o)+" ms",i=Ze(n)+(" ticks \xB7 "+c);return a(Q,u([E(u([_e,Oe(je),De(j(24)),a(wr,j(4),j(8))]))]),u([a(gr,u([E(u([ye(tr(t.tZ))]))]),u([oe(i)]))]))}),WM=l(function(e,r){var n=Nn(e);return a(Q,u([E(u([_e,Ar(sa),ye(tr(n.ko)),dM(u(["monospace"])),sr(j(12)),a(M,"user-select","none")]))]),u([a(qM,e,r.dJ),I(GM,n,r.a5,r.bi,r.dJ,r.ca),I(_M,n,r.a5,r.bi,r.dJ,r.ca)]))}),NM=l(function(e,r){if(r.$===3){var n=r.a;return D(a(WM,e,n))}else return z}),QM=function(e){if(e.b0.eo){var r=(function(){var t=a(NM,e.e,e.aL);if(t.$)return oe("");var o=t.a;return v(no,e.e,e.pH,{br:Zt(3),kR:a(of,e.fW,o),by:3,bz:e.f,a3:e.az.a3,dK:e.az.dL(3),oh:Da(3),oj:"Profile",u:e.aX})})(),n=a(of,e.fW,vM(e.aL));return a(Q,P,u([n,r]))}else return oe("")},OM=cr(a(He,function(e){return e.dG},function(e){return e.s4})),T1=l(function(e,r){return Se(a(pr,r,OM(e.e)))}),JM=x(function(e,r,n){var t=u([a(M,"background-color",a(T1,e,.28)),a(M,"-webkit-backdrop-filter","blur(18px)"),a(M,"backdrop-filter","blur(18px)")]),o="radial-gradient(circle 16px at 100% 0%, transparent 15px, #000 16px)",c=function(i){return a(Q,u([E(X(u([Ke(Ma),Ce(j(16)),De(j(16)),a(M,"pointer-events","none"),a(M,"-webkit-mask",o),a(M,"mask",o)]),X(t,i)))]),P)};return a(Q,u([E(X(u([Ke(pt),Zn(j(r)),da(j(r)),Xn(me(st.nk)),a(M,"pointer-events","auto"),_e,Oe(je),a(M,"gap","12px"),a(M,"padding","8px 14px"),a(M,"border-radius","0 21px 0 0")]),t)),a(hf,"click",ee(g(e.eN,!0)))]),X(n,u([c(u([a(M,"top","-16px"),a(M,"left","0")])),c(u([a(M,"bottom","0"),a(M,"right","-16px")]))])))}),fp={$:3},XM={$:2},yq=2,Cq=1,Pq=0,z1=function(e){var r=e.b;return G3(r)},up=function(e){var r=e.a;return fe(r,Ui)},ZM=se("min-height"),YM=se("stretch"),KM=function(e){return{$:0,a:e}},eD=function(e){var r=z1(e.tX)-1,n=wc(e.tX),t=n||r<=0;return a(Fc,u([Ao("range"),c1("0"),o1(Ze(r)),f1("1"),Ec(Ze(A$(e.tX))),sf(t),gf(function(o){return e.dE(KM(a(ne,0,Mi(o))))}),Bo("ui-slider"),E(u([Ce(j(200)),vr(me(0)),De(j(24)),a(M,"-webkit-appearance","none"),a(M,"appearance","none"),ze(pf),ea(tn),nn(fr),rn(lr(t?.4:1)),a(M,"--slider-fill",W(r>0?100*A$(e.tX)/r:0)+"%")]))]),P)},rD=function(e){var r=e.e,n=(function(){var $=function(p){return p===1||p===2},s=function(p){switch(p){case 0:return XM;case 1:return fp;default:return rv}},d=function(p){switch(p){case 0:return"Record";case 1:return"Play";default:return"Pause"}},b=function(p){switch(p){case 0:return wc(e.tX);case 1:return _v(e.tX);default:return x3(e.tX)}},_=function(p){switch(p){case 0:return dr.s3;case 1:return dr.sS;default:return dr.sJ}};return a(D$,r,{p9:!1,lX:_,rv:b,rw:d,rx:u([0,1,2]),i5:"Tape transport",su:function(p){return b(p)||$(p)&&up(e.tX)?e.eN:e.dE(s(p))},sw:e.sw,dF:0,tq:function(p){return function(h){return Dc}},nZ:function(p){return z},t4:0})})(),t=a(Q,u([E(u([_e,Ar(sa),a(M,"gap","3px")]))]),u([a(Q,u([E(u([_e,Ar(zc),Oe(je),a(M,"gap","8px")]))]),u([a(gr,u([E(u([sr(j(12)),ye(a(Y,function($){return $.ko},r)),a(M,"white-space","nowrap")]))]),u([oe("Record from start")])),a(g5,r,{p9:!1,mg:e.bE,i5:"Record from the first frame (applies on reload)",nf:e.jB})])),a(gr,u([E(u([sr(j(10)),ye(a(Y,function($){return $.km},r)),a(M,"white-space","nowrap")]))]),u([oe("applies on reload")]))])),o=wc(e.tX)?a(Q,u([E(u([Ce(j(200)),vr(me(0)),_e,Oe(je),Vr(je),a(M,"gap","8px"),sr(j(13)),ye(a(Y,function($){return $.tZ},r)),a(M,"white-space","nowrap")]))]),u([a(gr,u([E(u([Ce(j(8)),De(j(8)),a(M,"border-radius","50%"),a(M,"background-color",a(T1,e,1))]))]),P),oe("Recording\u2026")])):$t(e.tX)?eD(e):a(Q,u([E(u([Ce(j(200)),vr(me(0))]))]),P),c=a(Q,u([E(u([J5(YM),Ce(j(1)),ZM(j(28)),a(M,"background-color",Se(a(pr,.18,a(cr,function($){return $.tZ},r))))]))]),P),i=(function(){var $=u([Ce(j(100)),vr(me(0)),_e,Oe(je),sr(j(12)),ye(a(Y,function(s){return s.ko},r)),a(M,"font-variant-numeric","tabular-nums")]);return up(e.tX)?a(Q,u([E(X($,u([Vr(je)])))]),u([oe("\u2014 / \u2014")])):wc(e.tX)?a(Q,u([E(X($,u([Vr(je)])))]),u([oe(Ze(z1(e.tX)))])):a(Q,u([E($)]),u([a(gr,u([E(u([Hc(me(1)),a(M,"text-align","right")]))]),u([oe(Ze(A$(e.tX)+1))])),a(gr,u([E(u([a(M,"padding","0 4px")]))]),u([oe("/")])),a(gr,u([E(u([Hc(me(1)),a(M,"text-align","left")]))]),u([oe(Ze(z1(e.tX)))]))]))})(),f=a(bt,u([mt(e.eO),a(Ge,"aria-label","Close tape"),E(u([Ce(j(32)),De(j(32)),an(j(5)),vr(me(0)),$r(Xe(50)),mf(le),ze(pf),ye(n5),ea(tn),_e,Oe(je),Vr(je),nn(fr),rn(lr(.9)),a(M,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([rn(lr(1)),ze(C(Jv,255,255,255,.18))]))]))]),u([dr.pS]));return a(Q,u([E(u([_e,Ar(zc),Oe(je),a(M,"gap","12px")]))]),u([n,o,i,c,t,f]))},aD=function(e){return v(JM,e,6,u([rD(e)]))},nD=function(e){return a(Br,4,e.f)&&!e.oJ?aD(e):oe("")},Sq=3,$p=function(e){return A(e,{tu:!0})},tD=function(e){var r=(function(){var n=e.pH.sB===1?$p(C1("KeyP")):$p(P1("KeyP"));return a(I$,e.pH.sB,n)})();return a(k$,e.e,{ig:function(n){return n.bp},p9:!1,lX:dr.rO,i2:a(Br,6,e.f),i5:"Command palette",fU:e.jv,dg:a(yt,e.sw,{eb:3,i5:"Command palette",nZ:D(r)})})},oD=function(e){return a(Bc,e.e,{p9:!1,lX:dr.ty,by:7,i5:"Device preview",bz:e.f,oh:Da(7),u:e.aX,dg:a(yt,e.sw,{eb:3,i5:"Device preview",nZ:z})})},cD=u([0,1,2]),iD=function(e){switch(e){case 0:return dr.ui;case 1:return dr.sK;default:return dr.pG}},fD=function(e){var r=(function(){var n=e.pH.sB===1?C1("KeyM"):P1("KeyM");return a(I$,e.pH.sB,n)})();return a(D$,e.e,{p9:$t(e.tX),lX:iD,rv:Na(e.m$),rw:Wb,rx:cD,i5:"Mode",su:e.jy,sw:e.sw,dF:1,tq:l(function(n,t){return a(ne,t.bp,G5(n))}),nZ:function(n){return D(r)},t4:3})},uD=function(e){return u([a(hf,"pointerdown",ee(g(e,!0))),a(hf,"wheel",ee(g(e,!0))),a(hf,"keydown",a(T,function(r){return r.pT||r.rS||r.oS?Qn("let modifier-bearing combos reach global decoders"):a(Vi,r.i3,u(["Meta","Control","Shift","Alt"," ","Escape"]))?Qn("bare modifiers, Space, and Escape (global stop) \u2014 let bubble"):ee(g(e,!0))},I(Sc,J(function(r,n,t,o){return{oS:o,pT:n,i3:r,rS:t}}),a(S,"key",Pe),a(S,"ctrlKey",re),a(S,"metaKey",re),a(S,"altKey",re))))])},$D=function(e){return a(k$,e.e,{ig:function(r){return r.bp},p9:!1,lX:dr.uN,i2:e.oJ,i5:"Zen mode",fU:e.jA,dg:a(yt,e.sw,{eb:3,i5:"Zen mode",nZ:z})})},lD=function(e){var r=e.b0,n=r.g7?u([$D(e)]):P,t=e.e,o=r.b9?u([a(Bc,t,{p9:!1,lX:dr.dG,by:5,i5:"Theme",bz:e.f,oh:Da(5),u:e.aX,dg:a(yt,e.sw,{eb:3,i5:"Theme",nZ:z})})]):P,c=r.dt?u([fD(e)]):P,i=a(xr,ae,u([r.fD?D(a(Bc,t,{p9:$t(e.tX),lX:dr.oL,by:2,i5:"FPS meter",bz:e.f,oh:Da(2),u:e.aX,dg:a(yt,e.sw,{eb:3,i5:"FPS meter",nZ:z})})):z,r.fE?D(a(Bc,t,{p9:!1,lX:dr.pH,by:1,i5:"Inputs",bz:e.f,oh:Da(1),u:e.aX,dg:a(yt,e.sw,{eb:3,i5:"Inputs",nZ:z})})):z,(function(){if(r.g6){var y=a(Br,4,e.f);return D(a(k$,t,{ig:Da(4),p9:!1,lX:dr.tX,i2:y,i5:y?"Close tape":"Tape",fU:e.eO,dg:a(yt,e.sw,{eb:3,i5:"Tape",nZ:z})}))}else return z})()])),f=u([_e,Ar(sa),Oe(je),a(M,"gap","6px")]),$=function(y){return a(Q,u([E(f)]),y)},s=r.ds?u([oD(e)]):P,d=r.fC?u([a(Bc,t,{p9:!1,lX:dr.qu,by:0,i5:"Configurations",bz:e.f,oh:Da(0),u:e.aX,dg:a(yt,e.sw,{eb:3,i5:"Configurations",nZ:z})})]):P,b=a(Qi,r,e.P)?u([tD(e)]):P,_=a(kr,a(rr,L0,Je),u([d,c,s,o,b,i])),p=a(Q,u([E(u([_e,Ar(sa),Oe(je),a(M,"gap","24px"),e.oJ?nr(u([M$(p1(j(-72))),rn(lr(0)),a(M,"pointer-events","none")])):nr(u([M$(p1(le)),rn(lr(1)),a(M,"pointer-events","auto")])),a(M,"transition","transform 240ms cubic-bezier(0.33, 1, 0.68, 1), opacity 240ms cubic-bezier(0.33, 1, 0.68, 1)")])),a(Ge,"aria-hidden",e.oJ?"true":"false")]),a(N,$,_)),h=a(xr,ae,u([Je(n)?z:D(a(Q,u([E(X(f,u([a(M,"pointer-events","auto")])))]),n)),Je(_)?z:D(p)]));return Je(h)?oe(""):a(Q,X(u([E(u([Ke(Ma),Sa(j(12)),da(j(12)),Ce(j(48)),_e,Ar(sa),Oe(je),a(M,"gap","24px"),a(M,"pointer-events","none"),Xn(me(st.rb))]))]),uD(e.eN)),h)},vD=function(e){if(!wc(e.tX)&&!$t(e.tX)||e.oJ)return oe("");var r=6,n=100,t=W(-n)+"px",o="linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",c=21,i=n+r,f=i+c;return a(Q,u([E(u([Ke(pt),Sa(le),da(le),dt(le),Zn(le),a(M,"overflow","hidden"),a(M,"pointer-events",$t(e.tX)?"auto":"none"),Xn(me(st.nk-1))])),mt(e.dE(_v(e.tX)?rv:fp))]),u([a(Q,u([E(u([Ke(Ma),a(M,"top",t),a(M,"left",t),a(M,"right",t),a(M,"bottom",t),a(M,"pointer-events","none"),a(M,"border",W(i)+"px solid transparent"),a(M,"border-radius",W(f)+"px"),a(M,"background-color",a(T1,e,.28)),a(M,"-webkit-backdrop-filter","blur(18px)"),a(M,"backdrop-filter","blur(18px)"),a(M,"-webkit-mask",o),a(M,"-webkit-mask-composite","xor"),a(M,"mask",o),a(M,"mask-composite","exclude")]))]),P)]))},sD=l(function(e,r){var n=a(Rz,e,r);return a(Q,u([Bo("play-hud"),E(u([Ke(pt),Sa(le),da(le),dt(le),Zn(le),a(M,"pointer-events","none")]))]),X(u([wz(n.e),a(jz,".play-hud",n.e),xz(n.e),Pz(n.e),tM(n),DL(n),rz(n),KT(n),vD(n),lD(n),oM(n),nD(n),a(Oz,Tz(n.e),n.cN),QM(n),Cz(n),kT(n),eM(n),aM(n),Vm(n.f)]),n.fu.jE))}),dD=l(function(e,r){if(e.$===1)return a(pn,u([a(Z,"display","contents")]),u([a(pn,u([a(Z,"display","contents")]),u([r]))]));var n=e.a,t=function(c){return W(c)+"px"},o=a(Oi,n.uw,n.iJ);return a(pn,u([a(Z,"position","fixed"),a(Z,"inset","0"),a(Z,"display","flex"),a(Z,"align-items","center"),a(Z,"justify-content","center"),a(Z,"background-color",n.o1)]),u([a(pn,u([a(Z,"position","relative"),a(Z,"width",t(n.iJ.ia)),a(Z,"height",t(n.iJ.g8)),a(Z,"border-radius",t(n.pP)),a(Z,"overflow-x","hidden"),a(Z,"overflow-y","auto"),a(Z,"box-shadow","0 24px 64px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16)"),a(Z,"transform","scale("+(W(o)+")")),a(Z,"transform-origin","center")]),u([r]))]))}),bD=l(function(e,r){var n=sc(r.tX),t=v(po,Ox,Fe,n.cI),o=bv(n),c=(function(){var k=e.h3;if(k.$)return yn(r.ra);var L=k.a;return a(ne,yn(r.ra),a(de,function(w){return L(w.bz)},a(Yr,function(w){return a(Ye,w,n.cI)},Sr(r.aT))))})(),i=pv(r.ra),f=a(xr,I(Tj,e,r,n,o,i),r.aT),$={lH:r.aH,cI:f,Q:n.Q,nl:t,f4:e.ra,e:c},s=e.i$($),d=Su(a(sD,{pH:a(k3,r,n),fu:s,fV:Tx,dE:B2,eO:A2,f4:e.ra,tX:r.tX,u:wu},r.ra)),b=Se(Nn($.e).tT),_=Se(Nn($.e).tZ),p=Su(Nx($.e)),h=a(dD,a(de,function(k){return{o1:Se(a(cr,function(L){return L.kf},c)),pP:qx(r.ra),iJ:k,uw:n.rp.f3}},i),e.rz($)),y=(function(){var k=r.gM;if(k.$)return u([p,h,d]);var L=k.a;return u([p,h,d,Ex(L)])})();return a(pn,u([om(j3),a(Z,"position","fixed"),a(Z,"inset","0"),a(Z,"overflow-y","auto"),a(Z,"overscroll-behavior","none"),a(Z,"background-color",b),a(Z,"color",_),a(zj,"playflush",ee(g(w3,!0)))]),y)}),mD=function(e){return ny({rj:UC(e),aA:rS(e),ug:Lx(e),uq:bD(e)})},pD=function(e){return mD(Q_(e))},hD=function(e){return{oK:e.oK,aC:x(function(r,n,t){return P}),ra:e.ra,rj:e.rj,rk:e.rk,sr:e.sr,sv:e.sv,cf:x(function(r,n,t){return P}),aA:x(function(r,n,t){return ft}),uq:e.uq}},gD=function(e){return pD(hD(e))},_D=function(e){return{$:14,a:e}},yD=l(function(e,r){return _D({p8:r,tT:e})}),CD=function(e){return{$:1,a:e}},PD=function(e){return{k9:e,bC:1,bU:CD({hp:0,hN:1}),bV:z}},SD=function(e){return a(yD,PD(e),R(.2,.3,.3))},lp=function(e){var r=e;return la(r.jZ)+1},vp=x(function(e,r,n){var t=n,o=a(Zr,lp(t),r);return{k0:a(ne,t.lD,a($a,o-1,t.jZ)),ri:o,sj:t.aw-a(hu,e.bO,t.aw)}}),kD=l(function(e,r){var n=r;return a(Zr,lp(n),Ir(-n.aw/e.bO))}),xD=l(function(e,r){var n=r;return v(vp,e,a(kD,e,n),n)}),sp=function(e){return{$:0,a:e}},N$=function(e){return{$:0,a:e}},Q$=function(e){return{$:0,a:e}},dp={f0:N$(0),f2:Q$(1),gk:v(Xr,0,0,0)},bp=function(e){return sp({dn:e,kq:dp})},mp=l(function(e,r){return sp({dn:u([r]),kq:e})}),pp=function(e){var r=e.a,n=e.b,t=e.c;return mp({f0:N$(0),f2:Q$(1),gk:v(Xr,r,n,t)})},wD=function(e){return pp(R(e,0,0))},jD=function(e){return pp(R(0,e,0))},LD=function(e){return mp({f0:N$(0),f2:Q$(e),gk:v(Xr,0,0,0)})},TD=x(function(e,r,n){var t=Nn(r),o=a(xD,e,n),c=o.sj,i=o.ri,f=function(s){return c+(s-i)*e.bO},$=function(s){return a(wD,f(s),a(jD,-(.1*xe(f(s))),a(LD,1-.7*xe(f(s)),SD(v(vp,e,s,n).k0(t)))))};return bp(a(N,$,a(In,i-3,i+3)))}),zD=Hm,MD=function(e){return{$:13,a:e}},DD=function(e){return{$:2,a:e}},BD=function(e){return{$:6,a:e}},AD=function(e){return{$:16,a:e}},HD=function(e){return{$:15,a:e}},ID=function(e){return{$:10,a:e}},VD=function(e){return{$:12,a:e}},RD=function(e){return{$:9,a:e}},FD=function(e){return{$:19,a:e}},ED=function(e){return{$:1,a:e}},UD=function(e){return{$:5,a:e}},GD=function(e){return{$:17,a:e}},qD=function(e){return{$:18,a:e}},WD=function(e){return{$:4,a:e}},ND=function(e){return{$:20,a:e}},QD=function(e){return{$:3,a:e}},OD=function(e){return{$:0,a:e}},JD=function(e){return{$:21,a:e}},XD=function(e){return{$:11,a:e}},ZD=function(e){return{$:8,a:e}},YD=function(e){return{$:7,a:e}},KD=function(e){return{$:14,a:e}},M1=function(e){var r=e.a,n=e.b,t=e.c;return v(Xr,r,n,t)},O$=l(function(e,r){var n=r.a,t=r.b,o=r.c;return a(ji,a(Ta,n,e.kB),a(ji,a(Ta,t,e.cQ),a(Ta,o,e.ic)))}),eB=l(function(e,r){return M1(a(O$,e,R(r.kB,r.cQ,r.ic)))}),kn=k6,xn=x6,hp=x(function(e,r,n){var t=R(-e.aY.kB,-e.aY.cQ,-e.aY.ic),o=R(e.aY.kB,e.aY.cQ,e.aY.ic),c=xn(r),i=a(vo,t,n),f=R(i.kB,i.cQ,i.ic),$=kn(r),s=wi(e.eb),d=a(w0,s,f),b=a(ji,a(Ta,$,f),a(ji,a(Ta,c,a(j0,s,f)),a(Ta,1-$,a(Ta,d,s))));return a(vo,o,M1(b))}),gp=hp({eb:R(0,0,1),aY:v(Xr,0,0,0)}),_p=l(function(e,r){if(e.$){var t=e.a;return a(eB,t,r)}else{var n=e.a;return a(gp,n,r)}}),yp=l(function(e,r){if(e.$){var t=e.a;return v(Xr,r.kB*t.kB,r.cQ*t.cQ,r.ic*t.ic)}else{var n=e.a;return v(Xr,r.kB*n,r.cQ*n,r.ic*n)}}),Cp=l(function(e,r){return v(Xr,r.kB+e.kB,r.cQ+e.cQ,r.ic+e.ic)}),rB=function(e){return{$:1,a:e}},aB=l(function(e,r){return{kB:a(O$,e,r.kB),cQ:a(O$,e,r.cQ),ic:a(O$,e,r.ic)}}),nB=l(function(e,r){var n=function(t){var o=v(hp,{eb:e,aY:v(Xr,0,0,0)},r,M1(t));return R(o.kB,o.cQ,o.ic)};return{kB:n(R(1,0,0)),cQ:n(R(0,1,0)),ic:n(R(0,0,1))}}),tB=function(e){return a(nB,R(0,0,1),e)},Pp=function(e){if(e.$){var n=e.a;return n}else{var r=e.a;return tB(r)}},oB=l(function(e,r){var n=g(e,r);if(!n.a.$&&!n.b.$){var t=n.a.a,o=n.b.a;return N$(t+o)}else return rB(a(aB,Pp(e),Pp(r)))}),D1=function(e){return{$:1,a:e}},cB=l(function(e,r){var n=g(e,r);if(n.a.$)if(n.b.$){var c=n.a.a,i=n.b.a;return D1(v(Xr,c.kB*i.kB,c.cQ*i.cQ,c.ic*i.ic))}else{var c=n.a.a,t=n.b.a;return D1(v(Xr,c.kB*t,c.cQ*t,c.ic*t))}else if(n.b.$){var t=n.a.a,c=n.b.a;return D1(v(Xr,t*c.kB,t*c.cQ,t*c.ic))}else{var t=n.a.a,o=n.b.a;return Q$(t*o)}}),iB=l(function(e,r){return{f0:a(oB,e.f0,r.f0),f2:a(cB,e.f2,r.f2),gk:a(Cp,e.gk,a(_p,e.f0,a(yp,e.f2,r.gk)))}}),B1=x(function(e,r,n){switch(r.$){case 0:var t=r.a.kq,o=r.a.dn,c=a(iB,e,t);return v(ve,B1(c),n,o);case 1:var i=r.a.gF,f=r.a.k6;return X(a(N,function(b){var _=b.a,p=b.b;return g(_,BD({gF:i,ro:p}))},v(B1,e,f,P)),n);case 2:var s=r.a;return a(B,g(e,OD(s)),n);case 3:var s=r.a;return a(B,g(e,ED(s)),n);case 4:var s=r.a;return a(B,g(e,DD(s)),n);case 5:var s=r.a;return a(B,g(e,QD(s)),n);case 6:var s=r.a;return a(B,g(e,WD(s)),n);case 7:var s=r.a;return a(B,g(e,UD(s)),n);case 8:var s=r.a;return a(B,g(e,YD(s)),n);case 9:var s=r.a;return a(B,g(e,ZD(s)),n);case 10:var $=r.a;return a(B,g(e,RD($)),n);case 11:var s=r.a;return a(B,g(e,ID(s)),n);case 12:var s=r.a;return a(B,g(e,XD(s)),n);case 13:var s=r.a;return a(B,g(e,VD(s)),n);case 14:var s=r.a;return a(B,g(e,MD(s)),n);case 15:var s=r.a;return a(B,g(e,KD(s)),n);case 16:var s=r.a;return a(B,g(e,HD(s)),n);case 17:var s=r.a;return a(B,g(e,AD(s)),n);case 18:var s=r.a;return a(B,g(e,GD(s)),n);case 19:var s=r.a;return a(B,g(e,qD(s)),n);case 20:var d=r.a;return a(B,g(e,FD(d)),n);case 21:var d=r.a;return a(B,g(e,ND(d)),n);default:var d=r.a;return a(B,g(e,JD(d)),n)}}),Sp=function(e){return Re(v(B1,dp,e,P))},kq=ae,wn={kB:0,cQ:0,ic:0},A1=function(e){var r=e;return r.kB},H1=function(e){var r=e;return r.cQ},I1=function(e){var r=e;return r.ic},fB=function(e){var r=e,n=I1(r.uQ),t=H1(r.uQ),o=A1(r.uQ),c=I1(r.uK),i=H1(r.uK),f=A1(r.uK),$=I1(r.uB),s=H1(r.uB),d=A1(r.uB);return d*i*n+s*c*o+$*f*t-$*i*o-s*f*n-d*c*t>0},J$=function(e){var r=e;return r.aY},Aa=function(e){var r=e;return r},Uo=function(e){var r=e;return r},X$=function(e){var r=e;return r.uB},Z$=function(e){var r=e;return r.uK},zf=function(e){var r=e;return r.uQ},uB=function(e){var r=Uo(J$(e)),n=Aa(zf(e)),t=Aa(Z$(e)),o=Aa(X$(e));return{mh:fB(e),ag:o.kB,ah:o.cQ,ai:o.ic,aj:t.kB,ak:t.cQ,al:t.ic,am:n.kB,an:n.cQ,ao:n.ic,aZ:r.kB,a_:r.cQ,a$:r.ic,f2:1}},xq=ae,Go=l(function(e,r){return{$:6,a:e,b:r}}),kp=l(function(e,r){return{mh:fe(e.mh,r.mh),ag:e.ag*r.ag+e.ah*r.aj+e.ai*r.am,ah:e.ag*r.ah+e.ah*r.ak+e.ai*r.an,ai:e.ag*r.ai+e.ah*r.al+e.ai*r.ao,aj:e.aj*r.ag+e.ak*r.aj+e.al*r.am,ak:e.aj*r.ah+e.ak*r.ak+e.al*r.an,al:e.aj*r.ai+e.ak*r.al+e.al*r.ao,am:e.am*r.ag+e.an*r.aj+e.ao*r.am,an:e.am*r.ah+e.an*r.ak+e.ao*r.an,ao:e.am*r.ai+e.an*r.al+e.ao*r.ao,aZ:r.aZ+(e.aZ*r.ag+e.a_*r.aj+e.a$*r.am)*r.f2,a_:r.a_+(e.aZ*r.ah+e.a_*r.ak+e.a$*r.an)*r.f2,a$:r.a$+(e.aZ*r.ai+e.a_*r.al+e.a$*r.ao)*r.f2,f2:e.f2*r.f2}}),V1={$:0},$e=V1,Y$=l(function(e,r){var n=r;switch(n.$){case 0:return $e;case 6:var t=n.a,o=n.b,c=a(kp,t,e);return a(Go,c,o);case 1:return a(Go,e,n);case 2:return a(Go,e,n);case 4:return a(Go,e,n);case 3:return a(Go,e,n);default:return a(Go,e,n)}}),K$=l(function(e,r){return a(Y$,uB(e),r)}),$B=l(function(e,r){return a(K$,e,r)}),wq=ae,Nc=function(e){return e},xp=function(e){var r=e;return r.eb},wp=function(e){var r=e;return r.aY},lB=l(function(e,r){var n=r,t=Uo(wp(e)),o=.5*n,c=kn(o),i=xn(o),f=Aa(xp(e)),$=f.kB*i,s=c*$,d=$*$,b=f.cQ*i,_=c*b,p=$*b,h=b*b,y=1-2*(d+h),k=f.ic*i,L=c*k,w=2*(p-L),H=2*(p+L),F=$*k,V=2*(F+_),q=2*(F-_),O=b*k,K=2*(O-s),ce=2*(O+s),be=k*k,ke=1-2*(h+be),Me=1-2*(d+be);return{mh:!0,ag:ke,ah:H,ai:q,aj:w,ak:Me,al:ce,am:V,an:K,ao:y,aZ:t.kB-ke*t.kB-w*t.cQ-V*t.ic,a_:t.cQ-H*t.kB-Me*t.cQ-K*t.ic,a$:t.ic-q*t.kB-ce*t.cQ-y*t.ic,f2:1}}),vB=x(function(e,r,n){return a(Y$,a(lB,e,r),n)}),R1=x(function(e,r,n){return v(vB,e,r,n)}),jq=ae,Kn=function(e){return e},Lq=ae,el=function(e){return e},Tq=ae,rl=l(function(e,r){return{eb:r,aY:e}}),F1=Kn({kB:0,cQ:0,ic:1}),al=F1,jp=a(rl,wn,al),sB=l(function(e,r){if(e.$){var t=e.a,o=function(c){var i=c.a,f=c.b,$=c.c;return Kn({kB:i,cQ:f,ic:$})};return a($B,el({aY:wn,uB:o(t.kB),uK:o(t.cQ),uQ:o(t.ic)}),r)}else{var n=e.a;return v(R1,jp,Nc(n),r)}}),dB=l(function(e,r){var n=Uo(e),t=1-r;return{mh:r>=0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aZ:t*n.kB,a_:t*n.cQ,a$:t*n.ic,f2:r}}),bB=x(function(e,r,n){return a(Y$,a(dB,e,r),n)}),mB=x(function(e,r,n){return v(bB,e,r,n)}),pB=l(function(e,r){if(e.$)return r;var n=e.a;return v(mB,wn,n,r)}),zq=ae,Lp=x(function(e,r,n){return{kB:e,cQ:r,ic:n}}),Tp=function(e){var r=e;return r},hB=function(e){var r=Tp(e);return{mh:!0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aZ:r.kB,a_:r.cQ,a$:r.ic,f2:1}},zp=l(function(e,r){return a(Y$,hB(e),r)}),Mp=l(function(e,r){return a(zp,e,r)}),gB=l(function(e,r){var n=e.kB,t=e.cQ,o=e.ic;return a(Mp,v(Lp,n,t,o),r)}),E1=l(function(e,r){var n=e.gk,t=e.f0,o=e.f2;return a(gB,n,a(sB,t,a(pB,o,r)))}),Dp=function(e){var r=e;return r},_B=function(e){var r=e;return Dp(r.o$)},Mq=1,Bp=J(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),yB=J(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),Ap=J(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),CB=J(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),Hp=J(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),PB=J(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),SB=J(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),nl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return C(SB,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return C(Bp,n,r,o,1);case 3:var n=e.a,t=e.b,o=e.c;return C(yB,n,t,o,1);case 4:var n=e.a,t=e.b,o=e.c;return C(Ap,n,t,o,1);case 5:var n=e.a,t=e.b,o=e.c;return C(PB,n,t,o,1);case 6:var n=e.a,t=e.b,o=e.c;return C(CB,n,t,o,1);case 7:var n=e.a,t=e.b,o=e.c;return C(Hp,n,t,o,1);case 8:return e;case 9:return e;default:return e}},U1={$:0},Dq=0,Bq=ae,kB=Be(function(e,r,n,t,o,c,i,f){e:for(;;)if(f.b){var $=f.a,s=f.b,d=i($),b=d,_=a(Ne,b.mY,e),p=a(we,b.mU,r),h=a(Ne,b.rZ,n),y=a(we,b.rL,t),k=a(Ne,b.r_,o),L=a(we,b.rM,c),w=i,H=s;e=_,r=p,n=h,t=y,o=k,c=L,i=w,f=H;continue e}else return{mU:r,rL:t,rM:c,mY:e,rZ:n,r_:o}}),xB=x(function(e,r,n){var t=e(r),o=t;return Mt(kB,o.mY,o.mU,o.rZ,o.rL,o.r_,o.rM,e,n)}),Ip=function(e){var r=e.rM,n=r,t=e.r_,o=t,c=e.rL,i=c,f=e.rZ,$=f,s=e.mU,d=s,b=e.mY,_=b;return{mU:a(we,_,d),rL:a(we,$,i),rM:a(we,o,n),mY:a(Ne,_,d),rZ:a(Ne,$,i),r_:a(Ne,o,n)}},qo=l(function(e,r){var n=e,t=r;return a(we,n,t)}),Qc=l(function(e,r){var n=e,t=r;return a(Ne,n,t)}),Mf=function(e){var r=e;return r},Df=function(e){var r=e;return r.kB},Bf=function(e){var r=e;return r.cQ},Af=function(e){var r=e;return r.ic},Vp=function(e){var r=Mf(e),n=r.a,t=r.b,o=r.c,c=Df(n),i=Bf(n),f=Af(n),$=Df(t),s=Bf(t),d=Af(t),b=Df(o),_=Bf(o),p=Af(o);return Ip({mU:a(qo,c,a(qo,$,b)),rL:a(qo,i,a(qo,s,_)),rM:a(qo,f,a(qo,d,p)),mY:a(Qc,c,a(Qc,$,b)),rZ:a(Qc,i,a(Qc,s,_)),r_:a(Qc,f,a(Qc,d,p))})},Rp=nh,et=function(e){return Rp(Uo(e))},tl=function(e){return Rp(Tp(e))},G1=l(function(e,r){var n=e,t=r;return{kB:t.cQ*n.ic-t.ic*n.cQ,cQ:t.ic*n.kB-t.kB*n.ic,ic:t.kB*n.cQ-t.cQ*n.kB}}),ol=l(function(e,r){var n=e,t=r;return{kB:t.kB-n.kB,cQ:t.cQ-n.cQ,ic:t.ic-n.ic}}),q1=function(e){return e},W1={kB:0,cQ:0,ic:0},wB=l(function(e,r){var n=e,t=r,o=a(we,xe(t.kB),a(we,xe(t.cQ),xe(t.ic)));if(o){var c=t.ic/o,i=t.cQ/o,f=t.kB/o,$=mn(f*f+i*i+c*c);return{kB:n*f/$,cQ:n*i/$,ic:n*c/$}}else return W1}),jB=wB(q1(1)),Fp=x(function(e,r,n){var t=a(ol,r,n),o=a(ol,e,r);return jB(a(G1,t,o))}),LB=function(e){var r=Mf(e),n=r.a,t=r.b,o=r.c,c=tl(v(Fp,n,t,o));return R({ad:c,sX:et(n)},{ad:c,sX:et(t)},{ad:c,sX:et(o)})},TB=l(function(e,r){return{$:2,a:e,b:r}}),Ep=TB({ls:3,l$:0,m$:4}),Up=function(e){if(e.b){var r=e.a,n=e.b,t=Ep(a(N,LB,e)),o=v(xB,Vp,r,n);return C(Bp,o,e,t,0)}else return U1},Aq=ae,Ha=x(function(e,r,n){return R(e,r,n)}),Ia=function(e){return e},Ct=l(function(e,r){var n=r;return e*n}),Pt=x(function(e,r,n){var t=e,o=r,c=n;return{kB:t,cQ:o,ic:c}}),Gp=(function(){var e=Ia(1),r=Ia(1),n=Ia(1),t=a(Ct,-.5,e),o=a(Ct,-.5,r),c=a(Ct,-.5,n),i=v(Pt,c,o,t),f=a(Ct,.5,e),$=v(Pt,c,o,f),s=a(Ct,.5,r),d=v(Pt,c,s,t),b=v(Pt,c,s,f),_=a(Ct,.5,n),p=v(Pt,_,o,t),h=v(Pt,_,s,t),y=v(Pt,_,o,f),k=v(Pt,_,s,f);return nl(Up(u([v(Ha,i,h,p),v(Ha,i,d,h),v(Ha,$,y,k),v(Ha,$,k,b),v(Ha,p,h,k),v(Ha,p,k,y),v(Ha,i,b,d),v(Ha,i,$,b),v(Ha,i,p,y),v(Ha,i,y,$),v(Ha,d,k,h),v(Ha,d,b,k)])))})(),cl={$:0},zB=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),MB=x(function(e,r,n){var t=r.a,o=r.b,c=r.c,i=e(c),f=e(o),$=e(t),s=tl(v(Fp,$,f,i)),d={ad:s,sX:et($)},b={ad:s,sX:et(f)},_={ad:s,sX:et(i)};return a(B,d,a(B,b,a(B,_,n)))}),Hf=function(e){var r=e;return r.aF},DB=J(function(e,r,n,t){if(r.$===1)return z;var o=r.a;if(n.$===1)return z;var c=n.a;if(t.$===1)return z;var i=t.a;return D(v(e,o,c,i))}),If=function(e){var r=e;return r.kx},N1=l(function(e,r){return a($a,e,If(r))}),qp=function(e){var r=function(n){var t=n.a,o=n.b,c=n.c;return C(DB,x(function(i,f,$){return R(i,f,$)}),a(N1,t,e),a(N1,o,e),a(N1,c,e))};return a(xr,r,Hf(e))},Hq=ae,BB=l(function(e,r){var n=la(e),t=function(o){var c=o.a,i=o.b,f=o.c;return c>=0&&te(c,n)<0&&i>=0&&te(i,n)<0&&f>=0&&te(f,n)<0};return a(Hv,t,r)?{aF:r,kx:e}:{aF:a(kr,t,r),kx:e}}),AB=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Oc=AB({ls:1,l$:3,m$:4}),rt=function(e){var r=e;return r},il=l(function(e,r){var n=rt(r),t=rt(e);return g(R(t.kB,t.cQ,t.ic),R(n.kB,n.cQ,n.ic))}),Vf=K7,Wp=v(Vf,0,0,0),Q1=zr(function(e,r,n,t,o,c){var i=c.a,f=c.b,$=c.c,s=a(Ye,a(il,e,r),o);if(s.$){var b={ad:Wp,sX:et(r)},_={ad:Wp,sX:et(e)},p=$+1,h=$;return R(a(B,R(n,h,p),a(B,R(n,p,t),i)),a(B,b,a(B,_,f)),$+2)}else{var d=s.a;return R(a(B,R(n,d,t),i),f,$)}}),HB=Te(function(e,r,n,t,o){e:for(;;)if(n.b){var c=n.a,i=c.a,f=c.b,$=c.c,s=n.b,d=e($),b=e(f),_=e(i),p=t+2,h=t+1,y=t,k=e,L=r,w=s,H=t+3,F=yr(Q1,d,_,p,y,r,yr(Q1,b,d,h,p,r,yr(Q1,_,b,y,h,r,o)));e=k,r=L,n=w,t=H,o=F;continue e}else{var V=o,q=V.a,O=V.b;return g(q,Re(O))}}),IB=Te(function(e,r,n,t,o){e:for(;;)if(r.b){var c=r.a,i=c.a,f=c.b,$=c.c,s=r.b,d=e($),b=e(f),_=e(i),p=n+2,h=n+1,y=n,k=v(Pr,a(il,_,d),p,v(Pr,a(il,d,b),h,v(Pr,a(il,b,_),y,o))),L=a(B,R(y,h,p),t),w=e,H=s,F=n+3,V=L,q=k;e=w,r=H,n=F,t=V,o=q;continue e}else return R(t,o,n)}),Wo=x(function(e,r,n){var t=qp(n),o=v(Ya,MB(r),P,t),c=I(IB,r,t,0,P,Fe),i=c.a,f=c.b,$=c.c,s=I(HB,r,f,t,0,R(i,P,$)),d=s.a,b=s.b,_=Je(b)?o:X(o,b);return v(zB,e,a(BB,ki(_),d),a(Oc,_,d))}),Np=function(e){return{aF:a(N,function(r){return R(3*r,3*r+1,3*r+2)},a(In,0,Cr(e)-1)),kx:ki(gn(a(N,function(r){var n=r.a,t=r.b,o=r.c;return u([n,t,o])},e)))}},fl=function(e){switch(e.$){case 0:return cl;case 1:var t=e.a,r=e.b,n=a(N,Mf,r);return v(Wo,t,ae,Np(n));case 2:var t=e.a,r=e.b,n=a(N,Mf,r);return v(Wo,t,ae,Np(n));case 3:var t=e.a,o=e.b;return v(Wo,t,ae,o);case 4:var t=e.a,o=e.b;return v(Wo,t,function(c){return c.sX},o);case 5:var t=e.a,o=e.b;return v(Wo,t,function(c){return c.sX},o);case 6:var t=e.a,o=e.b;return v(Wo,t,function(c){return c.sX},o);case 7:var t=e.a,o=e.b;return v(Wo,t,function(c){return c.sX},o);case 8:return cl;case 9:return cl;default:return cl}},Qp=fl(Gp),VB=function(e){var r=e;return r.p8},Op=function(e){return{$:5,a:e}},RB=l(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,o=t,c=a(B,n,r);e=o,r=c;continue e}else return r}),to=function(e){return Op(a(RB,e,P))},ba=l(function(e,r){return{$:1,a:e,b:r}}),ul={src:`
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
    `,attributes:{normal:"ad",position:"sX",tangent:"gd",uv:"gp"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},FB=l(function(e,r){switch(r.$){case 0:return a(Uh,e,r);case 1:return a(Gh,e,r);case 2:return a(qh,e,r);case 3:return a(Wh,e,r);case 4:return a(Nh,e,r);default:return a(Qh,e,r)}}),EB=l(function(e,r){switch(r.$){case 0:return a(hh,e,r);case 1:return a(gh,e,r);case 2:return a(_h,e,r);case 3:return a(yh,e,r);case 4:return a(Ch,e,r);case 5:return a(Ph,e,r);case 6:return a(Sh,e,r);case 7:return a(kh,e,r);default:return xh(e)}}),Ee=ph,Jc={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bq",constantAmbientOcclusion:"bt",constantMaterialColor:"d7",enabledLights:"ac",lights12:"fL",lights34:"hh",lights56:"hi",lights78:"hj",materialColorTexture:"eH",normalMapTexture:"bA",normalMapType:"bB",sceneProperties:"l",viewMatrix:"m"}},Jp=l(function(e,r){return{$:2,a:e,b:r}}),UB=l(function(e,r){return V1}),Xp=fh,ma=function(e){var r=Xp(e);return r===1?ba:r?Jp:UB},Iq=ae,GB=1029,qB=function(e){return{$:5,a:e}},Zp=function(e){var r=e;return qB(r)},No=Zp(GB),WB=1028,Qo=Zp(WB),ar=x(function(e,r,n){return r===1?e?a(B,No,n):a(B,Qo,n):n}),Yp=uh,St=th,aa=function(e){var r=Yp(e),n=r.kB,t=r.cQ,o=r.ic,c=r.us;return C(St,n*c,t*c,o*c,c)},Xc=C(St,0,0,0,0),NB=Be(function(e,r,n,t,o,c,i,f){if(e.$){var s=e.a,d=e.b;return v(ma,s,c,Be(function(b,_,p,h,y,k,L,w){var H=L.a,F=L.b;return I(Ee,v(ar,h,f,w),ul,Jc,i,{bq:r,bt:n,d7:aa(s),ac:F,fL:H.fL,hh:H.hh,hi:H.hi,hj:H.hj,eH:d,i:p,j:_,bA:t,bB:o,k,l:b,m:y})}))}else{var $=e.a;return a(ba,c,Be(function(b,_,p,h,y,k,L,w){var H=L.a,F=L.b;return I(Ee,v(ar,h,f,w),ul,Jc,i,{bq:r,bt:n,d7:Xc,ac:F,fL:H.fL,hh:H.hh,hi:H.hi,hj:H.hj,eH:$,i:p,j:_,bA:t,bB:o,k,l:b,m:y})}))}}),Zc={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bq",baseColorTexture:"d$",constantAmbientOcclusion:"bt",constantBaseColor:"d5",constantMetallic:"d8",constantRoughness:"d9",enabledLights:"ac",lights12:"fL",lights34:"hh",lights56:"hi",lights78:"hj",metallicTexture:"eJ",normalMapTexture:"bA",normalMapType:"bB",roughnessTexture:"eU",sceneProperties:"l",viewMatrix:"m"}},QB=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return function(d){return function(b){if(e.$){var p=e.a,h=e.b;return v(ma,p,s,Be(function(y,k,L,w,H,F,V,q){var O=V.a,K=V.b;return I(Ee,v(ar,w,b,q),ul,Zc,d,{bq:c,d$:h,bt:i,d5:aa(p),d8:o,d9:n,ac:K,fL:O.fL,hh:O.hh,hi:O.hi,hj:O.hj,eJ:t,i:L,j:k,bA:f,bB:$,k:F,eU:r,l:y,m:H})}))}else{var _=e.a;return a(ba,s,Be(function(y,k,L,w,H,F,V,q){var O=V.a,K=V.b;return I(Ee,v(ar,w,b,q),ul,Zc,d,{bq:c,d$:_,bt:i,d5:Xc,d8:o,d9:n,ac:K,fL:O.fL,hh:O.hh,hi:O.hi,hj:O.hj,eJ:t,i:L,j:k,bA:f,bB:$,k:F,eU:r,l:y,m:H})}))}}}}}}}}}}}}},Kp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"gJ"}},e4={src:`
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
    `,attributes:{position:"sX",uv:"gp"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},O1=J(function(e,r,n,t){return a(ba,r,Be(function(o,c,i,f,$,s,d,b){return I(Ee,v(ar,f,t,b),e4,Kp,n,{gJ:e,i,j:c,k:s,l:o,m:$})}))}),J1={src:`
        precision lowp float;
        
        uniform lowp vec4 constantColor;
        
        void main () {
            gl_FragColor = constantColor;
        }
    `,attributes:{},uniforms:{constantColor:"d6"}},r4={src:`
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
    `,attributes:{position:"sX"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},kt=J(function(e,r,n,t){return v(ma,e,r,Be(function(o,c,i,f,$,s,d,b){return I(Ee,v(ar,f,t,b),r4,J1,n,{d6:aa(e),i,j:c,k:s,l:o,m:$})}))}),a4=l(function(e,r){return{$:4,a:e,b:r}}),OB={src:`
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
    `,attributes:{},uniforms:{constantColor:"d6",pointRadius:"hF",sceneProperties:"l"}},n4={src:`
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
    `,attributes:{position:"sX"},uniforms:{modelMatrix:"i",modelScale:"j",pointRadius:"hF",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},JB=J(function(e,r,n,t){return a(a4,n,Be(function(o,c,i,f,$,s,d,b){return I(Ee,b,n4,OB,t,{d6:aa(e),i,j:c,hF:r,k:s,l:o,m:$})}))}),X1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"ee",sceneProperties:"l"}},Yc=function(e){var r=e;return r},$l=lh,xt=Te(function(e,r,n,t,o){return a(ba,n,Be(function(c,i,f,$,s,d,b,_){return I(Ee,v(ar,$,o,_),r4,X1,t,{ee:a($l,Yc(r),e),i:f,j:i,k:d,l:c,m:s})}))}),XB={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"ee",pointRadius:"hF",sceneProperties:"l"}},ZB=Te(function(e,r,n,t,o){return a(a4,t,Be(function(c,i,f,$,s,d,b,_){return I(Ee,_,n4,XB,o,{ee:a($l,Yc(r),e),i:f,j:i,hF:n,k:d,l:c,m:s})}))}),Z1={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"dY",enabledLights:"ac",lights12:"fL",lights34:"hh",lights56:"hi",lights78:"hj",materialColor:"jg",sceneProperties:"l",viewMatrix:"m"}},t4={src:`
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
    `,attributes:{normal:"ad",position:"sX"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},ll=Te(function(e,r,n,t,o){return v(ma,e,n,Be(function(c,i,f,$,s,d,b,_){var p=b.a,h=b.b;return I(Ee,v(ar,$,o,_),t4,Z1,t,{dY:r,ac:h,fL:p.fL,hh:p.hh,hi:p.hi,hj:p.hj,jg:aa(e),i:f,j:i,k:d,l:c,m:s})}))}),Y1={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"dY",baseColor:"o6",enabledLights:"ac",lights12:"fL",lights34:"hh",lights56:"hi",lights78:"hj",metallic:"hp",roughness:"hN",sceneProperties:"l",viewMatrix:"m"}},vl=zt(function(e,r,n,t,o,c,i){return v(ma,e,o,Be(function(f,$,s,d,b,_,p,h){var y=p.a,k=p.b;return I(Ee,v(ar,d,i,h),t4,Y1,c,{dY:t,o6:aa(e),ac:k,fL:y.fL,hh:y.hh,hi:y.hi,hj:y.hj,hp:n,i:s,j:$,k:_,hN:r,l:f,m:b})}))}),YB=l(function(e,r){return{$:0,a:e,b:r}}),K1=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Kc=l(function(e,r){return{$:1,a:e,b:r}}),o4=function(e){return{$:0,a:e}},jr=Y7,es=function(e){return a(jr,e,1)},sl=a(jr,0,0),pa=l(function(e,r){if(r.$){var t=r.a.U;return g(t,sl)}else{var n=r.a;return g(e,es(n))}}),Oo=l(function(e,r){if(r.$){var n=r.a.U,t=r.a.qN;return g(n,(function(){return t?-1:1})())}else return g(e,0)}),rs=x(function(e,r,n){var t=R(e,r,n);if(t.a.$===1){var o=t.a.a.U;return v(K1,o4(o),a(pa,o,r),a(Oo,o,n))}else if(t.b.$){var c=t.a.a,o=t.b.a.U;return v(K1,a(Kc,c,o),a(pa,o,r),a(Oo,o,n))}else if(t.c.$){var c=t.a.a,o=t.c.a.U;return v(K1,a(Kc,c,o),a(pa,o,r),a(Oo,o,n))}else{var c=t.a.a,i=t.b.a,f=t.c;return a(YB,c,i)}}),KB=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Rf=Te(function(e,r,n,t,o){return{$:1,a:e,b:r,c:n,d:t,e:o}}),eA=Te(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),as=Te(function(e,r,n,t,o){var c=I(eA,e,r,n,t,o);if(c.a.$===1){var i=c.a.a.U;return I(Rf,o4(i),a(pa,i,r),a(pa,i,n),a(pa,i,t),a(Oo,i,o))}else if(c.b.$){var f=c.a.a,i=c.b.a.U;return I(Rf,a(Kc,f,i),g(i,sl),a(pa,i,n),a(pa,i,t),a(Oo,i,o))}else if(c.c.$){var f=c.a.a,i=c.c.a.U;return I(Rf,a(Kc,f,i),a(pa,i,r),g(i,sl),a(pa,i,t),a(Oo,i,o))}else if(c.d.$){var f=c.a.a,i=c.d.a.U;return I(Rf,a(Kc,f,i),a(pa,i,r),a(pa,i,n),g(i,sl),a(Oo,i,o))}else if(c.e.$){var f=c.a.a,i=c.e.a.U;return I(Rf,a(Kc,f,i),a(pa,i,r),a(pa,i,n),a(pa,i,t),g(i,1))}else{var f=c.a.a,$=c.b.a,s=c.c.a,d=c.d.a,b=c.e;return C(KB,f,$,s,d)}}),c4={src:`
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
    `,attributes:{},uniforms:{backlight:"iq",colorTexture:"gJ",sceneProperties:"l"}},ns=Te(function(e,r,n,t,o){return a(ba,n,Be(function(c,i,f,$,s,d,b,_){return I(Ee,v(ar,$,o,_),e4,c4,t,{iq:Yc(r),gJ:e,i:f,j:i,k:d,l:c,m:s})}))}),dl={src:`
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
    `,attributes:{normal:"ad",position:"sX",uv:"gp"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},rA=zr(function(e,r,n,t,o,c){if(e.$){var f=e.a,$=e.b;return v(ma,f,t,Be(function(s,d,b,_,p,h,y,k){var L=y.a,w=y.b;return I(Ee,v(ar,_,c,k),dl,Jc,o,{bq:r,bt:n,d7:aa(f),ac:w,fL:L.fL,hh:L.hh,hi:L.hi,hj:L.hj,eH:$,i:b,j:d,bA:$,bB:0,k:h,l:s,m:p})}))}else{var i=e.a;return a(ba,t,Be(function(s,d,b,_,p,h,y,k){var L=y.a,w=y.b;return I(Ee,v(ar,_,c,k),dl,Jc,o,{bq:r,bt:n,d7:Xc,ac:w,fL:L.fL,hh:L.hh,hi:L.hi,hj:L.hj,eH:i,i:b,j:d,bA:i,bB:0,k:h,l:s,m:p})}))}}),aA=Be(function(e,r,n,t,o,c,i,f){if(e.$){var s=e.a,d=e.b;return v(ma,s,c,Be(function(b,_,p,h,y,k,L,w){var H=L.a,F=L.b;return I(Ee,v(ar,h,f,w),dl,Zc,i,{bq:d,d$:d,bt:es(1),d5:aa(s),d8:o,d9:n,ac:F,fL:H.fL,hh:H.hh,hi:H.hi,hj:H.hj,eJ:t,i:p,j:_,bA:d,bB:0,k,eU:r,l:b,m:y})}))}else{var $=e.a;return a(ba,c,Be(function(b,_,p,h,y,k,L,w){var H=L.a,F=L.b;return I(Ee,v(ar,h,f,w),dl,Zc,i,{bq:$,d$:$,bt:es(1),d5:Xc,d8:o,d9:n,ac:F,fL:H.fL,hh:H.hh,hi:H.hi,hj:H.hj,eJ:t,i:p,j:_,bA:$,bB:0,k,eU:r,l:b,m:y})}))}}),nA=function(e){var r=e,n=r,t=n.mY,o=n.mU,c=n.rZ,i=n.rL,f=n.r_,$=n.rM;return{kB:t+.5*(o-t),cQ:c+.5*(i-c),ic:f+.5*($-f)}},tA=function(e){var r=e;return r.mU},oA=function(e){var r=e;return r.rL},i4=function(e){var r=e;return r.rM},cA=function(e){var r=e;return r.mY},iA=function(e){var r=e;return r.rZ},f4=function(e){var r=e;return r.r_},ei=l(function(e,r){var n=e,t=r;return t-n}),u4=function(e){return R(a(ei,cA(e),tA(e)),a(ei,iA(e),oA(e)),a(ei,f4(e),i4(e)))},Ie=function(e){var r=u4(e),n=r.a,t=r.b,o=r.c;return{px:Uo(nA(e)),q0:n/2,q1:t/2,q2:o/2}},Ff=l(function(e,r){switch(e.$){case 0:if(e.b.$){var f=e.a,$=e.b.a.U;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:var o=r.a,i=r.c,t=r.d;return C(O1,$,Ie(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return C(O1,$,Ie(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return C(O1,$,Ie(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}else{var n=e.b.a;switch(r.$){case 0:return $e;case 1:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ie(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ie(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ie(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ie(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ie(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ie(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ie(o),i,t);case 8:var o=r.a,i=r.c;return C(kt,n,Ie(o),i,0);case 9:var o=r.a,i=r.c;return C(kt,n,Ie(o),i,0);default:var o=r.a,c=r.b,i=r.d;return C(JB,n,c,Ie(o),i)}}case 1:if(e.b.$){var b=e.a,$=e.b.a.U,d=e.c;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:var o=r.a,i=r.c,t=r.d;return I(ns,$,d,Ie(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return I(ns,$,d,Ie(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return I(ns,$,d,Ie(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}else{var s=e.b.a,d=e.c;switch(r.$){case 0:return $e;case 1:var o=r.a,i=r.c,t=r.d;return I(xt,s,d,Ie(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return I(xt,s,d,Ie(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return I(xt,s,d,Ie(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return I(xt,s,d,Ie(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return I(xt,s,d,Ie(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return I(xt,s,d,Ie(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return I(xt,s,d,Ie(o),i,t);case 8:var o=r.a,i=r.c;return I(xt,s,d,Ie(o),i,0);case 9:var o=r.a,i=r.c;return I(xt,s,d,Ie(o),i,0);default:var o=r.a,c=r.b,i=r.d;return I(ZB,s,d,c,Ie(o),i)}}case 2:var _=e.a,p=e.b,Le=e.c,ie=e.d,h=v(rs,p,Le,ie);if(h.$){var w=h.a,H=h.b,F=H.a,V=H.b,q=h.c,O=q.a,K=q.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:return $e;case 6:var o=r.a,i=r.c,L=r.d;return yr(rA,w,F,V,Ie(o),i,L);case 7:var o=r.a,i=r.c,L=r.d;return Mt(NB,w,F,V,O,K,Ie(o),i,L);case 8:return $e;case 9:return $e;default:return $e}}else{var y=h.a,k=h.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:var o=r.a,i=r.c,L=r.d;return I(ll,y,k,Ie(o),i,L);case 3:return $e;case 4:var o=r.a,i=r.c,L=r.d;return I(ll,y,k,Ie(o),i,L);case 5:return $e;case 6:var o=r.a,i=r.c,L=r.d;return I(ll,y,k,Ie(o),i,L);case 7:var o=r.a,i=r.c,L=r.d;return I(ll,y,k,Ie(o),i,L);case 8:return $e;case 9:return $e;default:return $e}}default:var ce=e.a,be=e.b,ke=e.c,Me=e.d,Le=e.e,ie=e.f,Ve=I(as,be,ke,Me,Le,ie);if(Ve.$){var Lr=Ve.a,We=Ve.b,or=We.a,Tr=We.b,Ur=Ve.c,ja=Ur.a,Va=Ur.b,Mn=Ve.d,F=Mn.a,V=Mn.b,ir=Ve.e,O=ir.a,K=ir.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:return $e;case 6:var o=r.a,i=r.c,t=r.d;return Mt(aA,Lr,or,Tr,ja,Va,Ie(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return QB(Lr)(or)(Tr)(ja)(Va)(F)(V)(O)(K)(Ie(o))(i)(t);case 8:return $e;case 9:return $e;default:return $e}}else{var Ue=Ve.a,er=Ve.b,qe=Ve.c,k=Ve.d;switch(r.$){case 0:return $e;case 1:return $e;case 2:var o=r.a,i=r.c,t=r.d;return Wr(vl,Ue,er,qe,k,Ie(o),i,t);case 3:return $e;case 4:var o=r.a,i=r.c,t=r.d;return Wr(vl,Ue,er,qe,k,Ie(o),i,t);case 5:return $e;case 6:var o=r.a,i=r.c,t=r.d;return Wr(vl,Ue,er,qe,k,Ie(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return Wr(vl,Ue,er,qe,k,Ie(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}}}),Ef=function(e){return{$:3,a:e}},$4=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.px;return{px:{kB:n*c.kB,cQ:t*c.cQ,ic:o*c.ic},q0:n*r.q0,q1:t*r.q1,q2:o*r.q2}}),l4=$h,ts=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){var d=e.a,b=e.b,_=e.c,p=Yp(t),h=p.kB,y=p.cQ,k=p.ic,L=p.us,w=l4({us:L,kB:h*d,cQ:y*b,ic:k*_});return Mt(r,n,w,o,c,i,f,$,s)}}}}}}}}}},os=l(function(e,r){switch(r.$){case 0:return V1;case 6:var n=r.a,t=r.b;return a(Go,n,a(os,e,t));case 1:var o=r.a,c=r.b;return a(ba,a($4,e,o),a(ts,e,c));case 2:var o=r.a,c=r.b;return a(Jp,a($4,e,o),a(ts,e,c));case 4:return r;case 3:var c=r.a;return Ef(a(ts,e,c));default:var i=r.a;return Op(a(N,os(e),i))}}),bl=l(function(e,r){var n=r;return a(os,e,n)}),ml={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Vq=ae,ri=519,Rq=ae,v4=7683,s4=7682,ha=7680,fA=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return function(d){return{$:2,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:f,i:$,j:s,k:d}}}}}}}}}}}},cs=x(function(e,r,n){var t=e.nH,o=e.jf,c=e.kA,i=l(function(s,d){var b=s;return d(b)}),f=l(function(s,d){var b=s;return d(b)}),$=function(s){return a(He,i(s.ge),a(He,f(s.fw),a(He,f(s.gt),f(s.gu))))};return a($,n,a($,r,v(fA,t,o,c)))}),uA=v(cs,{jf:0,nH:0,kA:15},{fw:ha,ge:ri,gt:ha,gu:v4},{fw:ha,ge:ri,gt:ha,gu:s4}),$A=v(cs,{jf:0,nH:0,kA:15},{fw:ha,ge:ri,gt:ha,gu:s4},{fw:ha,ge:ri,gt:ha,gu:v4}),pl=l(function(e,r){return e?a(B,$A,r):a(B,uA,r)}),lA={src:`
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
    `,attributes:{normal:"ad",position:"sX"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",shadowLight:"hW",viewMatrix:"m"}},vA=function(e){if(e.$){var r=e.c;return D(Be(function(n,t,o,c,i,f,$,s){return I(Ee,a(pl,c,s),lA,ml,r,{i:o,j:t,k:f,l:n,hW:$,m:i})}))}else return z},Jo=function(e){var r=vA(e);if(r.$)return $e;var n=r.a;return Ef(n)},sA=J(function(e,r,n,t){var o=a(Ff,n,Gp),c=(function(){var d=g(e,r);return d.a?d.b?to(u([o,Jo(Qp)])):o:d.b?Jo(Qp):$e})(),i=VB(t),f=i.a,$=i.b,s=i.c;return a(K$,_B(t),a(bl,R(f,$,s),c))}),dA=l(function(e,r){return C(sA,!0,!0,e,r)}),Fq=ae,wa=function(e){var r=e;return xe(r)},is=l(function(e,r){var n=e,t=r;return te(t,n)>-1}),fs=l(function(e,r){var n=e,t=r;return n+.5*(t-n)}),bA=Kn({kB:-1,cQ:0,ic:0}),mA=Kn({kB:0,cQ:-1,ic:0}),d4=Kn({kB:0,cQ:0,ic:-1}),b4=Kn({kB:1,cQ:0,ic:0}),Uf=Kn({kB:0,cQ:1,ic:0}),pA=zr(function(e,r,n,t,o,c){var i=a(is,n,c)?F1:d4,f=a(is,r,o)?Uf:mA,$=a(is,e,t)?b4:bA,s=R(wa(a(ei,e,t)),wa(a(ei,r,o)),wa(a(ei,n,c))),d=v(Pt,a(fs,e,t),a(fs,r,o),a(fs,n,c)),b=el({aY:d,uB:$,uK:f,uQ:i});return{o$:b,p8:s}}),hA=l(function(e,r){return yr(pA,Df(e),Bf(e),Af(e),Df(r),Bf(r),Af(r))}),br=x(function(e,r,n){return{kB:e,cQ:r,ic:n}}),m4=l(function(e,r){var n=r.a,t=r.b,o=r.c,c=R(n/2,t/2,o/2),i=c.a,f=c.b,$=c.c;return a(dA,e,a(hA,v(br,-i,-f,-$),v(br,i,f,$)))}),Eq=ae,gA=x(function(e,r,n){return{O:a(rl,e,r),fK:wa(n.fK),s0:wa(n.s0)}}),_A=function(e){var r=e;return r.O},p4=e6,h4=K8,g4=l(function(e,r){var n=Rn(e),t=Dr-Rn(r.af)-n,o=v(p4,Dr,r.af,e);return t<0?{ap:a(B,ac(o),r.ap),W:r.W+1,af:v(h4,t,n,e)}:t?{ap:r.ap,W:r.W,af:o}:{ap:a(B,ac(o),r.ap),W:r.W+1,af:uo}}),_4=l(function(e,r){var n=r.a,t=r.c,o=r.d,c=Rn(e),i=Dr-Rn(o)-c,f=v(p4,Dr,o,e),$=a(kv,f,r);if(i<0){var s=v(h4,i,c,e);return a(kv,s,$)}else return $}),ai=Z8,yA=function(e){var r=e.a,n=e.c,t=e.d,o=l(function(c,i){if(c.$)return a(B,c,i);var f=c.a;return v(ai,o,i,f)});return{ap:v(ai,o,P,n),W:r/Dr|0,af:t}},CA=l(function(e,r){var n=e.d,t=r.a,o=r.c,c=r.d;if(te(t,Dr*4)<1){var i=l(function(f,$){if(f.$){var d=f.a;return a(_4,d,$)}else{var s=f.a;return v(ai,i,$,s)}});return a(_4,c,v(ai,i,e,o))}else{var i=l(function($,s){if($.$){var b=$.a;return a(g4,b,s)}else{var d=$.a;return v(ai,i,s,d)}});return a(g0,!0,a(g4,c,v(ai,i,yA(e),o)))}}),PA=l(function(e,r){var n=If(e),t=Hf(e),o=If(r),c=la(o),i=l(function(s,d){var b=s.a,_=s.b,p=s.c;return a(B,R(b+c,_+c,p+c),d)}),f=Hf(r),$=v(ve,i,f,t);return{aF:$,kx:a(CA,o,n)}}),hl={aF:P,kx:p0},y4=function(e){var r=e;return{aF:Re(r.aF),kx:r.kx}},us=function(e){if(e.b){var r=e.a,n=e.b;return y4(v(ve,PA,y4(r),n))}else return hl},SA=l(function(e,r){var n=e.sX,t=e.ad;return a(B,{ad:tl(t),sX:et(n)},r)}),C4=eh,P4=rh,S4=ah,kA=zt(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var f=i.a,$=i.b,s=S4(f.sX),d=P4(f.sX),b=C4(f.sX),_=a(Ne,e,b),p=a(we,r,b),h=a(Ne,n,d),y=a(we,t,d),k=a(Ne,o,s),L=a(we,c,s),w=$;e=_,r=p,n=h,t=y,o=k,c=L,i=w;continue e}else return Ip({mU:r,rL:t,rM:c,mY:e,rZ:n,r_:o})}),k4=l(function(e,r){var n=S4(e.sX),t=P4(e.sX),o=C4(e.sX);return Wr(kA,o,o,t,t,n,n,r)}),x4=function(e){var r=v(d0,SA,P,If(e));if(r.b){var n=r.a,t=r.b,o=a(Oc,r,Hf(e)),c=a(k4,n,t);return C(Ap,c,e,o,0)}else return U1},xA=Te(function(e,r,n,t,o){e:for(;;){var c=t(r/n),i=a(B,c,o);if(fe(r,e))return i;var f=e,$=r-1,s=n,d=t,b=i;e=f,r=$,n=s,t=d,o=b;continue e}}),gl=l(function(e,r){return e<1?P:I(xA,0,e-1,e,r,P)}),_l=l(function(e,r){var n=Cr(r);return n>=2?{aF:a(N,function(t){return fe(t,n-1)?R(0,n,1):R(0,1+t,2+t)},a(In,0,n-1)),kx:ki(a(B,e,r))}:hl}),wA=zr(function(e,r,n,t,o,c){e:for(;;){var i=a(Zr,r,t+1),f=r*a(Zr,n,o+1),$=r*o,s=f+i,d=$+i,b=f+t,_=$+t,p=R(_,d,s),h=R(_,s,b),y=a(B,p,a(B,h,c));if(t>0){var k=e,L=r,w=n,H=t-1,F=o,V=y;e=k,r=L,n=w,t=H,o=F,c=V;continue e}else if(o>0){var k=e,L=r,w=n,H=e-1,F=o-1,V=y;e=k,r=L,n=w,t=H,o=F,c=V;continue e}else return y}}),w4=Te(function(e,r,n,t,o){return n<=1||t<=1?hl:{aF:yr(wA,e,n,t,e-1,r-1,P),kx:a(_0,n*t,function(c){return a(o,a(Zr,n,c),c/n|0)})}}),jA=x(function(e,r,n){return I(w4,e,r,e+1,r,n)}),j4=Te(function(e,r,n,t,o){return a(n,t/e,o/r)}),LA=x(function(e,r,n){return v(jA,e,r,v(j4,e,r,n))}),at=function(e){return e},Xo=function(e){return e},L4=(function(){var e=v(LA,1,72,l(function(f,$){var s=2*ka*$,d=xn(s),b=kn(s);return{ad:Xo({kB:b,cQ:-d,ic:0}),sX:at({kB:b,cQ:-d,ic:f-.5})}})),r=Xo({kB:0,cQ:0,ic:1}),n={ad:r,sX:at({kB:0,cQ:0,ic:.5})},t=a(_l,n,a(gl,72,function(f){var $=2*ka*f;return{ad:r,sX:at({kB:kn($),cQ:xn($),ic:.5})}})),o=Xo({kB:0,cQ:0,ic:-1}),c={ad:o,sX:at({kB:0,cQ:0,ic:-.5})},i=a(_l,c,a(gl,72,function(f){var $=2*ka*f;return{ad:o,sX:at({kB:kn($),cQ:-xn($),ic:-.5})}}));return nl(x4(us(u([t,i,e]))))})(),T4=fl(L4),TA=function(e){var r=e,n=xe(r.ic),t=xe(r.cQ),o=xe(r.kB);if(te(o,t)<1)if(te(o,n)<1){var c=mn(r.ic*r.ic+r.cQ*r.cQ);return{kB:0,cQ:-r.ic/c,ic:r.cQ/c}}else{var c=mn(r.cQ*r.cQ+r.kB*r.kB);return{kB:-r.cQ/c,cQ:r.kB/c,ic:0}}else if(te(t,n)<1){var c=mn(r.ic*r.ic+r.kB*r.kB);return{kB:r.ic/c,cQ:0,ic:-r.kB/c}}else{var c=mn(r.kB*r.kB+r.cQ*r.cQ);return{kB:-r.cQ/c,cQ:r.kB/c,ic:0}}},$s=function(e){var r=TA(e),n=r,t=n,o=e,c=o,i={kB:c.cQ*t.ic-c.ic*t.cQ,cQ:c.ic*t.kB-c.kB*t.ic,ic:c.kB*t.cQ-c.cQ*t.kB};return g(r,i)},z4=function(e){var r=xp(e),n=$s(r),t=n.a,o=n.b;return el({aY:wp(e),uB:t,uK:o,uQ:r})},zA=function(e){var r=e;return r.fK},MA=function(e){var r=e;return r.s0},DA=J(function(e,r,n,t){var o=z4(_A(t)),c=a(Ff,n,L4),i=(function(){var b=g(e,r);return b.a?b.b?to(u([c,Jo(T4)])):c:b.b?Jo(T4):$e})(),f=MA(t),$=f,s=zA(t),d=s;return a(K$,o,a(bl,R($,$,d),i))}),BA=l(function(e,r){return C(DA,!0,!0,e,r)}),ls=x(function(e,r,n){return a(BA,e,v(gA,wn,Uf,{fK:Ia(n),s0:Ia(r)}))}),vs=function(e){return to(e)},ni=vs,ss=function(e){var r=e.a,n=e.b,t=e.c;return Mp(v(Lp,r,n,t))},ds=function(e){return ss(R(0,e,0))},AA=function(e){var r=e;return r.px},HA=function(e){var r=e;return r.s0},IA=function(e){var r=e;return r},VA=l(function(e,r){var n=e.sX,t=e.ad,o=e.gp,c=e.gd,i=e.tW,f=IA(c),$=i?-1:1,s=o,d=s.a,b=s.b,_={ad:tl(t),sX:et(n),gd:l4({us:$,kB:f.kB,cQ:f.cQ,ic:f.ic}),gp:a(jr,d,b)};return a(B,_,r)}),RA=function(e){var r=v(d0,VA,P,If(e));if(r.b){var n=r.a,t=r.b,o=a(Oc,r,Hf(e)),c=a(k4,n,t);return C(Hp,c,e,o,0)}else return U1},FA=x(function(e,r,n){return I(w4,e,r,e+1,r+1,n)}),EA=x(function(e,r,n){return v(FA,e,r,v(j4,e,r,n))}),UA=nl(RA(v(EA,72,72,l(function(e,r){var n=2*ka*e,t=xn(n),o=-ka/2+ka*r,c=xn(o),i=kn(n),f=kn(o),$={kB:f*i,cQ:f*t,ic:c};return{ad:Xo($),sX:at($),gd:Xo({kB:-t,cQ:i,ic:0}),tW:!0,gp:g(e,r)}})))),yl=72,Cl=2*yl,GA=l(function(e,r){e:for(;;){var n=Cl+1,t=a(Zr,Cl,2*e+3),o=a(Zr,Cl,2*e+2),c=2*e+1,i=2*e,f=Cl,$=a(B,R(f,i,o),a(B,R(i,t,o),a(B,R(i,c,t),a(B,R(c,n,t),r))));if(e){var s=e-1,d=$;e=s,r=d;continue e}else return $}}),qA=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),WA=l(function(e,r){e:for(;;){var n=v(qA,0,2*ka,e/yl),t={gy:n,hv:0,hI:1},o={gy:n,hv:1,hI:1},c=a(B,t,a(B,o,r));if(e){var i=e-1,f=c;e=i,r=f;continue e}else return c}}),NA=(function(){var e=a(WA,yl-1,u([{gy:0,hv:0,hI:0},{gy:0,hv:1,hI:0}])),r=a(GA,yl-1,P);return a(Oc,e,r)})(),QA={src:`
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
    `,attributes:{angle:"gy",offsetScale:"hv",radiusScale:"hI"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",shadowLight:"hW",viewMatrix:"m"}},M4=function(e){return Ef(Be(function(r,n,t,o,c,i,f,$){return I(Ee,a(pl,!0,$),QA,ml,NA,{i:t,j:n,k:i,l:r,hW:f,m:c})}))},OA=J(function(e,r,n,t){var o=a(Ff,n,UA),c=(function(){var $=g(e,r);return $.a?$.b?to(u([o,M4(t)])):o:$.b?M4(t):$e})(),i=HA(t),f=i;return a(zp,a(ol,wn,AA(t)),a(bl,R(f,f,f),c))}),JA=l(function(e,r){return C(OA,!0,!0,e,r)}),bs=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),D4=J(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),ms=zr(function(e,r,n,t,o,c){return{$:3,a:e,b:r,c:n,d:t,e:o,f:c}}),ps=l(function(e,r){return{$:0,a:e,b:r}}),XA=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(ps,n,t);case 1:var n=e.a,t=e.b,r=e.c;return v(bs,n,t,r);case 2:var n=e.a,t=e.b,i=e.c,f=e.d;return C(D4,n,t,i,f);default:var n=e.a,t=e.b,o=e.c,c=e.d,i=e.e,f=e.f;return yr(ms,n,t,o,c,i,f)}},ZA=XA,YA=l(function(e,r){return a(JA,ZA(e),r)}),Uq=ae,KA=l(function(e,r){return{px:r,s0:wa(e)}}),hs=l(function(e,r){return a(YA,e,a(KA,Ia(r),wn))}),Gq=ae,Gf=function(e){return e},qq=ae,gs=function(e){return v(mr,0,1,e<=.04045?e/12.92:a(bn,(e+.055)/1.055,2.4))},B4=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return{oR:o,pa:t,q_:n,s4:r}},qf=function(e){var r=B4(e),n=r.s4,t=r.q_,o=r.pa,c=r.oR;return C(St,gs(n),gs(t),gs(o),c)},A4=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Wf=oh,Nf=ch,Qf=ih,eH=function(e){var r=e,n=Wf(r),t=Nf(r),o=Qf(r);return C(A4,.4124*n+.3576*t+.1805*o,.2126*n+.7152*t+.0722*o,.0193*n+.1192*t+.9505*o,Xp(r))},rH=function(e){return eH(qf(e))},H4=function(e){var r=rH(e),n=r.a,t=r.b,o=r.c,c=n+t+o;return Gf({kB:n/c,cQ:t/c})},wt=function(e){return{$:0,a:e}},Wq=0,aH=l(function(e,r){var n=e,t=r.kB,o=r.cQ;return C(A4,n*t/o,n,n*(1-t-o)/o,1)}),nH=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return C(St,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t,o)},Of=l(function(e,r){return nH(a(aH,e,r))}),tH=l(function(e,r){var n=a(Of,q1(1),e);return v(bs,0,wt(n),r)}),Pl=function(e){return e},oH=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),_s=J(function(e,r,n,t){var o=R(e,r,n),c=o.a,i=o.b,f=o.c,$=f<=.5?f*(i+1):f+i-f*i,s=f*2-$,d=function(h){var y=h<0?h+1:h>1?h-1:h;return y*6<1?s+($-s)*y*6:y*2<1?$:y*3<2?s+($-s)*(2/3-y)*6:s},b=d(c-1/3),_=d(c),p=d(c+1/3);return C(oH,p,_,b,t)}),ti=function(e){return C(_s,e.aS,e.a0,e.D,e.oR)},cH=l(function(e,r){return a(tH,H4(ti(r)),Pl(e))}),ys={$:0},iH=function(e){var r=e.o6,n=e.hN,t=e.hp;return yr(ms,0,wt(qf(r)),wt(v(mr,0,1,n)),wt(v(mr,0,1,t)),wt(1),ys)},fH=l(function(e,r){var n=e.hN,t=e.hp;return iH({o6:ti(r),hp:t,hN:n})}),I4=function(e){var r=B4(e),n=r.s4,t=r.q_,o=r.pa,c=r.oR;return C(St,n,t,o,c)},uH=function(e){return a(ps,0,wt(I4(e)))},$H=function(e){return uH(ti(e))},jn=function(e){var r=e.bU;switch(r.$){case 0:return $H(e.k9);case 1:var n=r.a.hN,t=r.a.hp;return a(fH,{hp:t,hN:n},e.k9);default:var o=r.a.jm;return a(cH,o,e.k9)}},Zo=function(e){return wt(e)},Jf=l(function(e,r){if(r.$){var t=r.a;return s3(t)}else{var n=r.a;return wt(e(n))}}),V4=function(e){return a(ps,0,a(Jf,I4,e))},lH=l(function(e,r){return v(bs,0,a(Jf,qf,e),r)}),vH=function(e){var r=e.o6,n=e.hN,t=e.hp;return yr(ms,0,a(Jf,qf,r),a(Jf,a(mr,0,1),n),a(Jf,a(mr,0,1),t),Zo(1),ys)},Cs=function(e){return C(_s,e.aS,e.a0,e.D,e.oR)},oi=l(function(e,r){var n=(function(){var f=r.bV;if(f.$)return Zo(Cs(r.k9));if(f.a.$)return a(e$,"[textured-surface] FromAtlas textures in 3D Surface are deferred. Rendering as fallback colour.",Zo(Cs(r.k9)));var $=f.a.a.by;return a(ne,Zo(Cs(r.k9)),a(Ye,$,e.mQ))})(),t=r.bU;switch(t.$){case 0:return V4(n);case 1:var o=t.a.hN,c=t.a.hp;return vH({o6:n,hp:Zo(c),hN:Zo(o)});default:var i=t.a.jm;return a(lH,n,Pl(i))}}),sH=x(function(e,r,n){var t=A(e,{bV:z}),o=a(oi,{mQ:Fe},t),c=jn(t),i=a(we,0,n-2*r),f=i/2;return ni(u([v(ls,c,r,i),a(ds,f,a(hs,o,r)),a(ds,-f,a(hs,o,r))]))}),dH=function(e){var r=e;return r.O},R4=(function(){var e={ad:W1,sX:at({kB:0,cQ:0,ic:1})},r=Xo({kB:0,cQ:0,ic:-1}),n=.5*mn(2),t=a(_l,e,a(gl,72,function(i){var f=2*ka*i,$=xn(f),s=kn(f);return{ad:Xo({kB:s*n,cQ:$*n,ic:n}),sX:at({kB:s,cQ:$,ic:0})}})),o={ad:r,sX:wn},c=a(_l,o,a(gl,72,function(i){var f=2*ka*i,$=xn(f),s=kn(f);return{ad:r,sX:at({kB:s,cQ:-$,ic:0})}}));return nl(x4(us(u([c,t]))))})(),F4=fl(R4),bH=function(e){var r=e;return r.fK},mH=function(e){var r=e;return r.s0},pH=J(function(e,r,n,t){var o=z4(dH(t)),c=a(Ff,n,R4),i=(function(){var b=g(e,r);return b.a?b.b?to(u([c,Jo(F4)])):c:b.b?Jo(F4):$e})(),f=mH(t),$=f,s=bH(t),d=s;return a(K$,o,a(bl,R($,$,d),i))}),hH=l(function(e,r){return C(pH,!0,!0,e,r)}),Nq=ae,gH=x(function(e,r,n){return{O:a(rl,e,r),fK:wa(n.fK),s0:wa(n.s0)}}),_H=x(function(e,r,n){var t=n/2;return a(hH,e,v(gH,v(br,0,-t,0),Uf,{fK:Ia(n),s0:Ia(r)}))}),Ps=x(function(e,r,n){return vs(u([a(Ff,e,r),Jo(n)]))}),yH=function(e){return e},CH=function(e){return Up(a(N,yH,qp(e)))},PH=l(function(e,r){if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a,c=t.b;return{aF:a(N,function(i){return R(0,1+i,2+i)},a(In,0,Cr(c))),kx:ki(a(B,e,r))}}else return hl}),SH=function(e){return v(br,e.kB,e.cQ,e.ic)},kH=function(e){var r=a(N,SH,e);if(r.b&&r.b.b&&r.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,f=c.b;return D(a(PH,n,a(B,o,a(B,i,f))))}else return z},xH=function(e){var r=a(xr,kH,e);if(r.b){var n=r,t=CH(us(n));return D({rP:t,j3:fl(t)})}else return z},Xf=l(function(e,r){var n=xH(u([r]));if(n.$===1)return ni(P);var t=n.a.rP,o=n.a.j3;return v(Ps,e,t,o)}),wH=l(function(e,r){return a(m4,e,R(r,r,r))}),jH=x(function(e,r,n){var t=2*ka/e,o=a(N,function(c){return a(gp,t*c,v(Xr,0,n,0))},a(In,0,e-1));return a(Xf,r,o)}),LH=zt(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var f=i.a,$=i.b,s=f,d=s.kB,b=s.cQ,_=s.ic,p=a(Ne,d,e),h=a(we,d,r),y=a(Ne,b,n),k=a(we,b,t),L=a(Ne,_,o),w=a(we,_,c),H=$;e=p,r=h,n=y,t=k,o=L,c=w,i=H;continue e}else return{mU:r,rL:t,rM:c,mY:e,rZ:n,r_:o}}),TH=l(function(e,r){var n=e,t=n.kB,o=n.cQ,c=n.ic;return Wr(LH,t,t,o,o,c,c,r)}),E4={src:`
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
    `,attributes:{quadVertex:"hH"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},Ln=dh,Tn=J(function(e,r,n,t){var o=rt(t),c=rt(n),i=rt(r),f=rt(e);return Ln({mz:f.kB,mA:i.kB,mB:c.kB,mC:o.kB,mD:f.cQ,mE:i.cQ,mF:c.cQ,mG:o.cQ,mH:f.ic,mI:i.ic,mJ:c.ic,mK:o.ic,mL:0,mM:0,mN:0,mO:0})}),U4=l(function(e,r){return{$:0,a:e,b:r}}),zH=U4({ls:1,l$:0,m$:6}),nt=zH(u([{hH:v(Vf,0,0,0)},{hH:v(Vf,1,0,1)},{hH:v(Vf,1,1,2)},{hH:v(Vf,0,1,3)}])),G4={src:`
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
    `,attributes:{quadVertex:"hH"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},Sl={src:`
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
    `,attributes:{quadVertex:"hH"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},q4={src:`
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
    `,attributes:{quadVertex:"hH"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},MH=Te(function(e,r,n,t,o){var c=a(TH,r,u([n,t,o])),i=Ie(c);switch(e.$){case 0:if(e.b.$){var $=e.a,s=e.b.a.U;return a(ba,i,Be(function(jt,Dn,Ra,Fa,Gr,qr,ta,Er){return I(Ee,v(ar,Fa,0,Er),q4,Kp,nt,{gJ:s,i:Ra,j:Dn,k:qr,bR:C(Tn,r,n,t,o),l:jt,m:Gr})}))}else{var f=e.b.a;return v(ma,f,i,Be(function(jt,Dn,Ra,Fa,Gr,qr,ta,Er){return I(Ee,v(ar,Fa,0,Er),E4,J1,nt,{d6:aa(f),i:Ra,j:Dn,k:qr,bR:C(Tn,r,n,t,o),l:jt,m:Gr})}))}case 1:if(e.b.$){var _=e.a,s=e.b.a.U,b=e.c;return a(ba,i,Be(function(Ra,Fa,Gr,qr,ta,Er,oa,ca){return I(Ee,v(ar,qr,0,ca),q4,c4,nt,{iq:Yc(b),gJ:s,i:Gr,j:Fa,k:Er,bR:C(Tn,r,n,t,o),l:Ra,m:ta})}))}else{var d=e.b.a,b=e.c;return a(ba,i,Be(function(jt,Dn,Ra,Fa,Gr,qr,ta,Er){return I(Ee,v(ar,Fa,0,Er),E4,X1,nt,{iq:b,ee:a($l,Yc(b),d),i:Ra,j:Dn,k:qr,bR:C(Tn,r,n,t,o),l:jt,m:Gr})}))}case 2:var p=e.a,h=e.b,qe=e.c,Lr=e.d,y=v(rs,h,qe,Lr);if(y.$)if(y.a.$){var ce=y.a,be=ce.a,ke=ce.b,Me=y.b,F=Me.a,V=Me.b,Le=y.c,O=Le.a,K=Le.b;return v(ma,be,i,Be(function(Gr,qr,ta,Er,oa,ca,Lt,Kf){var Bn=Lt.a,eu=Lt.b;return I(Ee,v(ar,Er,0,Kf),Sl,Jc,nt,{bq:F,bt:V,d7:aa(be),ac:eu,fL:Bn.fL,hh:Bn.hh,hi:Bn.hi,hj:Bn.hj,eH:ke,i:ta,j:qr,bA:O,bB:K,k:ca,bR:C(Tn,r,n,t,o),l:Gr,m:oa})}))}else{var w=y.a.a,H=y.b,F=H.a,V=H.b,q=y.c,O=q.a,K=q.b;return a(ba,i,Be(function(jt,Dn,Ra,Fa,Gr,qr,ta,Er){var oa=ta.a,ca=ta.b;return I(Ee,v(ar,Fa,0,Er),Sl,Jc,nt,{bq:F,bt:V,d7:Xc,ac:ca,fL:oa.fL,hh:oa.hh,hi:oa.hi,hj:oa.hj,eH:w,i:Ra,j:Dn,bA:O,bB:K,k:qr,bR:C(Tn,r,n,t,o),l:jt,m:Gr})}))}else{var k=y.a,L=y.b;return v(ma,k,i,Be(function(jt,Dn,Ra,Fa,Gr,qr,ta,Er){var oa=ta.a,ca=ta.b;return I(Ee,v(ar,Fa,0,Er),G4,Z1,nt,{dY:L,ac:ca,fL:oa.fL,hh:oa.hh,hi:oa.hi,hj:oa.hj,jg:aa(k),i:Ra,j:Dn,k:qr,bR:C(Tn,r,n,t,o),l:jt,m:Gr})}))}default:var ie=e.a,Ve=e.b,Ue=e.c,er=e.d,qe=e.e,Lr=e.f,We=I(as,Ve,Ue,er,qe,Lr);if(We.$)if(We.a.$){var vi=We.a,I8=vi.a,ke=vi.b,V8=We.b,Mn=V8.a,ir=V8.b,R8=We.c,Ko=R8.a,ot=R8.b,F8=We.d,F=F8.a,V=F8.b,E8=We.e,O=E8.a,K=E8.b;return v(ma,I8,i,Be(function(ca,Lt,Kf,Bn,eu,zR,U8,MR){var Vl=U8.a,DR=U8.b;return I(Ee,v(ar,Bn,0,MR),Sl,Zc,nt,{bq:F,d$:ke,bt:V,d5:aa(I8),d8:ot,d9:ir,ac:DR,fL:Vl.fL,hh:Vl.hh,hi:Vl.hi,hj:Vl.hj,eJ:Ko,i:Kf,j:Lt,bA:O,bB:K,k:zR,bR:C(Tn,r,n,t,o),eU:Mn,l:ca,m:eu})}))}else{var ja=We.a.a,Va=We.b,Mn=Va.a,ir=Va.b,tt=We.c,Ko=tt.a,ot=tt.b,li=We.d,F=li.a,V=li.b,Il=We.e,O=Il.a,K=Il.b;return a(ba,i,Be(function(Gr,qr,ta,Er,oa,ca,Lt,Kf){var Bn=Lt.a,eu=Lt.b;return I(Ee,v(ar,Er,0,Kf),Sl,Zc,nt,{bq:F,d$:ja,bt:V,d5:Xc,d8:ot,d9:ir,ac:eu,fL:Bn.fL,hh:Bn.hh,hi:Bn.hi,hj:Bn.hj,eJ:Ko,i:ta,j:qr,bA:O,bB:K,k:ca,bR:C(Tn,r,n,t,o),eU:Mn,l:Gr,m:oa})}))}else{var or=We.a,Tr=We.b,Ur=We.c,L=We.d;return v(ma,or,i,Be(function(Dn,Ra,Fa,Gr,qr,ta,Er,oa){var ca=Er.a,Lt=Er.b;return I(Ee,v(ar,Gr,0,oa),G4,Y1,nt,{dY:L,o6:aa(or),ac:Lt,fL:ca.fL,hh:ca.hh,hi:ca.hi,hj:ca.hj,hp:Ur,i:Fa,j:Ra,k:ta,bR:C(Tn,r,n,t,o),hN:Tr,l:Dn,m:qr})}))}}}),DH=(function(){var e=u([{da:a(jr,0,1)},{da:a(jr,1,1)},{da:a(jr,2,1)},{da:a(jr,3,1)},{da:a(jr,0,-1)},{da:a(jr,1,-1)},{da:a(jr,2,-1)},{da:a(jr,3,-1)}]),r=u([R(0,1,2),R(0,2,3),R(4,6,5),R(4,7,6),R(4,5,1),R(1,0,4),R(5,6,2),R(2,1,5),R(6,7,3),R(3,2,6),R(7,4,0),R(0,3,7)]);return a(Oc,e,r)})(),BH={src:`
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
    `,attributes:{quadShadowVertex:"da"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",shadowLight:"hW",viewMatrix:"m"}},W4=J(function(e,r,n,t){return Ef(Be(function(o,c,i,f,$,s,d,b){return I(Ee,a(pl,f,b),BH,ml,DH,{i,j:c,k:s,bR:C(Tn,e,r,n,t),l:o,hW:d,m:$})}))}),AH=zt(function(e,r,n,t,o,c,i){var f=I(MH,n,t,o,c,i),$=g(e,r);return $.a?$.b?to(u([f,C(W4,t,o,c,i)])):f:$.b?C(W4,t,o,c,i):$e}),kl=Te(function(e,r,n,t,o){return Wr(AH,!0,!1,e,r,n,t,o)}),HH=x(function(e,r,n){var t=r/2,o=n/2,c=l(function(i,f){return v(br,i,f,0)});return I(kl,V4(e),a(c,-t,-o),a(c,t,-o),a(c,t,o),a(c,-t,o))}),Ss=function(e){return{$:1,a:e}},IH=function(e){return C(D4,0,wt(qf(e)),Zo(1),ys)},VH=function(e){return IH(ti(e))},N4=function(e){return ss(R(e,0,0))},RH=function(e){return ss(R(0,0,e))},Q4=Uf,FH=a(rl,wn,Q4),EH=l(function(e,r){return v(R1,FH,Nc(e),r)}),O4=l(function(e,r){return v(R1,jp,Nc(e),r)}),UH=j6,J4=T6,GH=function(e){var r=e.a,n=e.b,t=e.c,o=sb(R(r,n,t));return{o0:a(J4,n,r),rh:UH(t/o),s0:o}},X4=x(function(e,r,n){var t=n.a,o=n.b,c=R(o.kB-t.kB,o.cQ-t.cQ,o.ic-t.ic),i=c.a,f=c.b,$=c.c,s=GH(R(i,f,$)),d=s.s0,b=s.o0,_=s.rh;return a(RH,t.ic,a(ds,t.cQ,a(N4,t.kB,a(O4,b,a(EH,_-lf(90),a(N4,d/2,a(O4,lf(90),v(ls,e,r/2,d))))))))}),qH=x(function(e,r,n){var t=l(function(o,c){e:for(;;)switch(o.$){case 0:var i=o.a;return A(c,{fl:D(i)});case 1:var i=o.a,f=c.fl;if(f.$===1)return A(c,{fl:D(i)});var $=f.a;return{gw:a(B,v(X4,VH(e),r,g($,i)),c.gw),fl:D(i)};case 2:var s=o.a.t6,b=Ss(s),_=c;o=b,c=_;continue e;case 3:var d=o.a.qt,b=Ss(d),_=c;o=b,c=_;continue e;default:var d=o.a.qt,b=Ss(d),_=c;o=b,c=_;continue e}});return Re(v(ve,t,{gw:P,fl:z},n).gw)}),WH=x(function(e,r,n){if(r.b){var t=r.a,o=r.b;return ni(v(Jd,l(function(c,i){return a(Xf,e,u([c,i,a(vo,R(0,0,-n),i),a(vo,R(0,0,-n),c)]))}),r,X(o,u([t]))))}else return ni(P)}),NH=x(function(e,r,n){var t=r/2,o=n/2;return I(kl,e,v(br,-t,-o,0),v(br,t,-o,0),v(br,t,o,0),v(br,-t,o,0))}),QH=function(e){var r=e;return!r.$&&r.a.$===1},OH=l(function(e,r){var n=r;if(n.$)return vs(P);if(n.a.$){var t=n.a.a.rP,o=n.a.a.j3;return v(Ps,e.t_,t,o)}else{var t=n.a.a.rP,o=n.a.a.j3;return v(Ps,e.uc,t,o)}}),Z4={src:`
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
    `,attributes:{triangleVertex:"kr"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",triangleVertexPositions:"gl",viewMatrix:"m"}},Y4={src:`
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
    `,attributes:{triangleVertex:"kr"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",triangleVertexPositions:"gl",viewMatrix:"m"}},Zf=function(e){var r=Mf(e),n=r.a,t=r.b,o=r.c,c=rt(n),i=rt(t),f=rt(o);return Ln({mz:c.kB,mA:i.kB,mB:f.kB,mC:0,mD:c.cQ,mE:i.cQ,mF:f.cQ,mG:0,mH:c.ic,mI:i.ic,mJ:f.ic,mK:0,mL:0,mM:0,mN:0,mO:0})},xl=Ep(u([R({kr:0},{kr:1},{kr:2})])),JH=l(function(e,r){var n=Vp(r),t=Ie(n);switch(e.$){case 0:if(e.b.$){var c=e.a,i=e.b.a.U;return $e}else{var o=e.b.a;return v(ma,o,t,Be(function(ce,be,ke,Me,Le,ie,Ve,Ue){return I(Ee,v(ar,Me,0,Ue),Z4,J1,xl,{d6:aa(o),i:ke,j:be,k:ie,l:ce,gl:Zf(r),m:Le})}))}case 1:if(e.b.$){var s=e.a;return $e}else{var f=e.b.a,$=e.c;return a(ba,t,Be(function(ce,be,ke,Me,Le,ie,Ve,Ue){return I(Ee,v(ar,Me,0,Ue),Z4,X1,xl,{ee:a($l,Yc($),f),i:ke,j:be,k:ie,l:ce,gl:Zf(r),m:Le})}))}case 2:var d=e.a,b=e.b,H=e.c,F=e.d,_=v(rs,b,H,F);if(_.$)return $e;var p=_.a,h=_.b;return v(ma,p,t,Be(function(ce,be,ke,Me,Le,ie,Ve,Ue){var er=Ve.a,qe=Ve.b;return I(Ee,v(ar,Me,0,Ue),Y4,Z1,xl,{dY:h,ac:qe,fL:er.fL,hh:er.hh,hi:er.hi,hj:er.hj,jg:aa(p),i:ke,j:be,k:ie,l:ce,gl:Zf(r),m:Le})}));default:var y=e.a,k=e.b,L=e.c,w=e.d,H=e.e,F=e.f,V=I(as,k,L,w,H,F);if(V.$)return $e;var q=V.a,O=V.b,K=V.c,h=V.d;return v(ma,q,t,Be(function(be,ke,Me,Le,ie,Ve,Ue,er){var qe=Ue.a,Lr=Ue.b;return I(Ee,v(ar,Le,0,er),Y4,Y1,xl,{dY:h,o6:aa(q),ac:Lr,fL:qe.fL,hh:qe.hh,hi:qe.hi,hj:qe.hj,hp:K,i:Me,j:ke,k:Ve,hN:O,l:be,gl:Zf(r),m:ie})}))}}),XH=(function(){var e=u([{e2:a(jr,0,1)},{e2:a(jr,1,1)},{e2:a(jr,2,1)},{e2:a(jr,0,-1)},{e2:a(jr,1,-1)},{e2:a(jr,2,-1)}]),r=u([R(0,1,2),R(3,5,4),R(3,4,1),R(3,1,0),R(4,5,2),R(4,2,1),R(5,3,0),R(5,0,2)]);return a(Oc,e,r)})(),ZH={src:`
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
    `,attributes:{triangleShadowVertex:"e2"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",shadowLight:"hW",triangleVertexPositions:"gl",viewMatrix:"m"}},K4=function(e){return Ef(Be(function(r,n,t,o,c,i,f,$){return I(Ee,a(pl,o,$),ZH,ml,XH,{i:t,j:n,k:i,l:r,hW:f,gl:Zf(e),m:c})}))},YH=J(function(e,r,n,t){var o=a(JH,n,t),c=g(e,r);return c.a?c.b?to(u([o,K4(t)])):o:c.b?K4(t):$e}),KH=l(function(e,r){return C(YH,!0,!0,e,r)}),eI=l(function(e,r){var n=r.a,t=r.b,o=r.c;return a(KH,e,v(Ha,v(br,n.kB,n.cQ,n.ic),v(br,t.kB,t.cQ,t.ic),v(br,o.kB,o.cQ,o.ic)))}),zn=x(function(e,r,n){var t=r.bV;return t.$?n:a(e$,"[textured-surface] Textured Surface on "+(e+" is deferred. Rendering as fallback colour."),n)}),rI=l(function(e,r){e:for(;;){var n=r.a,t=r.b,o=function(ir){return D(a(E1,n,ir))};switch(t.$){case 0:var ie=t.a.tT,Le=t.a.ia,y=t.a.g8;return o(v(NH,a(oi,e,ie),Le,y));case 1:var ie=t.a.tT,ce=t.a.s0;return o(v(zn,"Disc",ie,v(jH,48,jn(ie),ce)));case 2:var ie=t.a.tT,ce=t.a.s0,be=t.a.fK;return o(v(zn,"Capsule",ie,v(sH,ie,ce,be)));case 3:var ie=t.a.tT,h=t.a.kx;if(h.b&&h.b.b&&h.b.b.b&&h.b.b.b.b&&!h.b.b.b.b.b){var c=h.a,i=h.b,f=i.a,$=i.b,s=$.a,d=$.b,b=d.a;return o(I(kl,a(oi,e,ie),v(br,c.kB,c.cQ,c.ic),v(br,f.kB,f.cQ,f.ic),v(br,s.kB,s.cQ,s.ic),v(br,b.kB,b.cQ,b.ic)))}else return o(v(zn,"polygon ("+(Ze(Cr(h))+"-vertex)"),ie,a(Xf,jn(ie),h)));case 10:var ie=t.a.tT,_=t.a.Z;return o(v(zn,"Cube",ie,a(wH,jn(ie),_)));case 11:var ie=t.a.tT,ce=t.a.s0;return o(a(hs,a(oi,e,ie),ce));case 12:var ie=t.a.tT,ce=t.a.s0,be=t.a.fK;return o(v(zn,"Cylinder",ie,v(ls,jn(ie),ce,be)));case 13:var ie=t.a.tT,p=t.a.p8;return o(v(zn,"Block",ie,a(m4,jn(ie),p)));case 14:var ie=t.a.tT,h=t.a.kx;return o(v(zn,"Triangle",ie,a(eI,jn(ie),h)));case 15:var ie=t.a.tT,h=t.a.kx,y=t.a.g8,k=a(oi,e,ie),L=A(ie,{bV:z}),w=y/2,H=a(N,function(ir){return A(ir,{ic:ir.ic+w})},h),F=jn(L),V=(function(){if(h.b&&h.b.b&&h.b.b.b&&h.b.b.b.b&&!h.b.b.b.b.b){var ir=h.a,tt=h.b,Ko=tt.a,ot=tt.b,li=ot.a,Il=ot.b,vi=Il.a;return I(kl,k,v(br,ir.kB,ir.cQ,ir.ic+w),v(br,Ko.kB,Ko.cQ,Ko.ic+w),v(br,li.kB,li.cQ,li.ic+w),v(br,vi.kB,vi.cQ,vi.ic+w))}else return v(zn,"polygon-with-walls top ("+(Ze(Cr(h))+"-vertex)"),ie,a(Xf,F,H))})(),q=v(WH,F,H,y),O=a(N,function(ir){return A(ir,{ic:ir.ic-w})},h),K=a(Xf,F,Re(O));return o(ni(u([V,K,q])));case 16:var ie=t.a.tT,ce=t.a.s0,be=t.a.fK;return o(v(zn,"Cone",ie,v(_H,jn(ie),ce,be)));case 17:var ie=t.a.tT,ke=t.a.dc,Me=t.a.qt,Le=t.a.ia;return o(v(zn,"Line",ie,v(X4,jn(ie),Le,g(ke,Me))));case 18:var ie=t.a.tT,Ve=t.a.rQ;return a(de,function(ir){var tt=a(OH,{t_:a(oi,e,ie),uc:jn(ie)},ir);return a(E1,n,QH(ir)?tt:v(zn,"welded mesh",ie,tt))},a(Ye,Ve,e.rR));case 4:var Ue=t.a.hZ,er=t.a.g$,qe=t.a.hk,Lr=t.a.nW;if(Ue.$)return a(e$,"[LeafPath] fill-only LeafPath in 3D is deferred; no stroke colour set",z);var We=Ue.a;return o(ni(v(qH,We,qe,Lr)));case 5:var or=t.a,Tr=or.nH;if(Tr.$)return z;var Ur=Tr.a.by;return a(de,function(ir){return a(E1,n,v(HH,ir,or.ia,or.g8))},a(Ye,Ur,e.mQ));case 6:var ja=t.a.ro,Va=e,Mn=g(n,ja);e=Va,r=Mn;continue e;case 7:return z;case 8:return z;case 9:return z;case 19:return z;case 20:return z;default:return z}}}),aI=l(function(e,r){return a(xr,rI(e),Sp(r))}),ks=function(e){return{$:6,a:e}},nI=function(e){return{$:0,a:e}},tI=function(e){return{$:1,a:e}},oI=function(e){return{$:2,a:e}},xs=l(function(e,r){return a(Cp,e.gk,a(_p,e.f0,a(yp,e.f2,r)))}),cI=function(e){return e},ci=function(e){return e},wl=function(e){return C(_s,e.aS,e.a0,e.D,e.oR)},e8=l(function(e,r){var n=e,t=r,o=t.ic-n.ic,c=t.cQ-n.cQ,i=t.kB-n.kB,f=a(we,xe(i),a(we,xe(c),xe(o)));if(f){var $=o/f,s=c/f,d=i/f,b=mn(d*d+s*s+$*$);return D({kB:d/b,cQ:s/b,ic:$/b})}else return z}),iI=l(function(e,r){var n=a(xs,e,r),t=a(xs,e,v(Xr,0,0,0)),o=v(Xr,n.kB-t.kB,n.cQ-t.cQ,n.ic-t.ic);return a(ne,d4,a(e8,wn,v(br,o.kB,o.cQ,o.ic)))}),fI=function(e){var r=e.a,n=e.b;switch(n.$){case 19:var o=n.a;return D(nI({t:!0,a:ks(wl(o.k9)),eb:a(iI,r,o.eb),i1:ci(o.i1)}));case 20:var o=n.a,t=a(xs,r,o.sX);return D(tI({t:!0,a:ks(wl(o.k9)),i1:cI(o.i1),sX:v(br,t.kB,t.cQ,t.ic)}));case 21:var o=n.a;return D(oI({a:ks(wl(o.ue)),l5:ci(o.i1),l6:ci(o.i1),uf:F1}));default:return z}},uI=function(e){return a(xr,fI,Sp(e))},Qq=ae,jl=function(e){return e},$I=function(e){return{$:0,a:e}},lI=$I,vI={$:3},sI=vI,dI=J(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),bI=dI,mI=function(e){return{$:1,a:e}},pI=mI,hI=function(e){return a(iu,"height",Ze(e))},gI=Cu,_I=function(e){return{$:2,a:e}},yI=_I,CI=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,c=function(f){return Ir(f*1e3)/1e3},i=function(f){return Ir(f*1e4)/100};return y5(u(["rgba(",W(i(r)),"%,",W(i(n)),"%,",W(i(t)),"%,",W(c(o)),")"]))},PI=x(function(e,r,n){return v(Eh,e,r,n)}),r8=function(e){var r=e;return r},ga=C(St,1,1,1,1),_r=x(function(e,r,n){return a(N,function(t){return a(t,r,n)},e)}),SI=function(e){return Ln({mz:e.ag,mA:e.aj,mB:e.am,mC:e.aZ,mD:e.ah,mE:e.ak,mF:e.an,mG:e.a_,mH:e.ai,mI:e.al,mJ:e.ao,mK:e.a$,mL:0,mM:0,mN:0,mO:1})},Ll=Te(function(e,r,n,t,o){var c=t.mh?1:-1,i=C(St,t.f2,t.f2,t.f2,c);return yr(o,e,i,SI(t),t.mh,r,n)}),a8=zr(function(e,r,n,t,o,c){e:for(;;)switch(o.$){case 0:return c;case 6:var i=o.a,f=o.b,$=e,s=r,d=n,b=a(kp,i,t),_=f,p=c;e=$,r=s,n=d,t=b,o=_,c=p;continue e;case 1:var h=o.b,y=a(B,I(Ll,e,r,n,t,h),c.aJ);return{aJ:y,bh:c.bh,ts:c.ts,N:c.N};case 2:var h=o.b,y=a(B,I(Ll,e,r,n,t,h),c.N);return{aJ:c.aJ,bh:c.bh,ts:c.ts,N:y};case 4:var k=o.b,L=a(B,I(Ll,e,r,n,t,k),c.bh);return{aJ:c.aJ,bh:L,ts:c.ts,N:c.N};case 3:var w=o.a,H=a(B,I(Ll,e,r,n,t,w),c.ts);return{aJ:c.aJ,bh:c.bh,ts:H,N:c.N};default:var F=o.a;return v(ve,C(a8,e,r,n,t),c,F)}}),n8=function(e){var r=e;return-r},kI=l(function(e,r){var n=e,t=r;return t+n}),Yo=0,xI=function(e){var r=e,n=a(we,xe(r.kB),a(we,xe(r.cQ),xe(r.ic)));if(n){var t=r.ic/n,o=r.cQ/n,c=r.kB/n,i=mn(c*c+o*o+t*t);return i*n}else return Yo},wI=x(function(e,r,n){var t=e,o=r,c=n;return{kB:t,cQ:o,ic:c}}),t8=function(e){var r=u4(e),n=r.a,t=r.b,o=r.c;return xI(v(wI,n,t,o))},jI=l(function(e,r){var n=a(Ct,.99,a(qo,wa(e),n8(i4(r)))),t=a(Ct,1.01,a(kI,t8(r),n8(f4(r))));return g(n,t)}),LI=J(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),ws=LI,Tl=J(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),TI=function(e){var r=e.cu,n=e.cb,t=e.b7;return C(Tl,518,r,n,t)},zI=l(function(e,r){return{$:6,a:e,b:r}}),MI=zI,o8=u([TI({b7:1,cb:0,cu:!1}),C(ws,!1,!1,!1,!1),a(MI,0,1)]),js=8,c8=15,ii=7681,DI={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},BI=U4({ls:1,l$:0,m$:5}),AI=BI(u([{sX:a(jr,-1,-1)},{sX:a(jr,1,-1)},{sX:a(jr,-1,1)},{sX:a(jr,1,1)}])),HI={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"sX"},uniforms:{}},Ls=function(e){return v(cs,{jf:e.jf,nH:e.nH,kA:e.kA},{fw:e.fw,ge:e.ge,gt:e.gt,gu:e.gu},{fw:e.fw,ge:e.ge,gt:e.gt,gu:e.gu})},Ts=function(e){return I(Ee,u([Ls(e),C(ws,!1,!1,!1,!1)]),HI,DI,AI,{})},II=Ts({fw:ii,jf:0,nH:js,ge:ri,kA:c8,gt:ii,gu:ii}),VI=516,i8=5386,RI=function(e){return a(bn,2,e+4)},f8=function(e){return Ts({fw:ha,jf:c8,nH:js,ge:VI,kA:RI(e),gt:i8,gu:i8})},FI=x(function(e,r,n){return gn(u([v(_r,e,n,o8),u([f8(r),II])]))}),EI=l(function(e,r){return gn(a(Vn,FI(e),r))}),UI=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return{$:0,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:f,i:$,j:s}}}}}}}}}}},GI=function(e){var r=e.jU,n=e.iY,t=e.io,o=e.gv,c=e.k9,i=e.oR,f=l(function($,s){var d=$.a,b=$.b,_=$.c,p=s.a,h=s.b,y=s.c;return UI(d)(b)(_)(p)(h)(y)(r)(n)(t)(o)});return a(f,c,i)},qI=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),u8=l(function(e,r){var n=e,t=r;return v(qI,32774,n,t)}),WI=l(function(e,r){return GI({gv:0,oR:a(u8,e,r),io:0,k9:a(u8,e,r),iY:0,jU:0})}),Oq=ae,NI=1,QI=771,OI={$:8},JI=OI,zl=u([a(WI,NI,QI),JI]),XI=function(e){var r=e.cu,n=e.cb,t=e.b7;return C(Tl,513,r,n,t)},$8=XI({b7:1,cb:0,cu:!0}),fi=a(B,$8,zl),l8=514,v8=function(e){var r=e.cu,n=e.cb,t=e.b7;return C(Tl,515,r,n,t)},s8=240,ZI=a(B,v8({b7:1,cb:0,cu:!0}),a(B,Ls({fw:ha,jf:s8,nH:0,ge:l8,kA:0,gt:ha,gu:ha}),zl)),YI=function(e){var r=e.cu,n=e.cb,t=e.b7;return C(Tl,514,r,n,t)},ui=a(B,YI({b7:1,cb:0,cu:!0}),zl),zs=function(e){var r=e;return Dp(r.cH)},KI=function(e){return J$(zs(e))},eV=function(e){return el({aY:at({kB:e.aZ,cQ:e.a_,ic:e.a$}),uB:Kn({kB:e.ag,cQ:e.ah,ic:e.ai}),uK:Kn({kB:e.aj,cQ:e.ak,ic:e.al}),uQ:Kn({kB:e.am,cQ:e.an,ic:e.ao})})},Ms=l(function(e,r){var n=e,t=r,o=n.uQ,c=o,i=n.uK,f=i,$=n.uB,s=$;return{kB:t.kB*s.kB+t.cQ*s.cQ+t.ic*s.ic,cQ:t.kB*f.kB+t.cQ*f.cQ+t.ic*f.ic,ic:t.kB*c.kB+t.cQ*c.cQ+t.ic*c.ic}}),d8=l(function(e,r){var n=e,t=r,o=n.aY,c=o,i=t.kB-c.kB,f=t.cQ-c.cQ,$=t.ic-c.ic,s=n.uQ,d=s,b=n.uK,_=b,p=n.uB,h=p;return{kB:i*h.kB+f*h.cQ+$*h.ic,cQ:i*_.kB+f*_.cQ+$*_.ic,ic:i*d.kB+f*d.cQ+$*d.ic}}),b8=l(function(e,r){return{aY:a(d8,e,J$(r)),uB:a(Ms,e,X$(r)),uK:a(Ms,e,Z$(r)),uQ:a(Ms,e,zf(r))}}),rV=l(function(e,r){var n=r,t=n,o=e,c=o;return{mU:a(we,c.mU,t.mU),rL:a(we,c.rL,t.rL),rM:a(we,c.rM,t.rM),mY:a(Ne,c.mY,t.mY),rZ:a(Ne,c.rZ,t.rZ),r_:a(Ne,c.r_,t.r_)}}),aV=l(function(e,r){var n=r,t=n.kB,o=n.cQ,c=n.ic,i=e,f=i.a,$=i.b,s=i.c,d=xe(f)/2,b=xe($)/2,_=xe(s)/2;return{mU:t+d,rL:o+b,rM:c+_,mY:t-d,rZ:o-b,r_:c-_}}),Ds=J(function(e,r,n,t){var o=n.px,c=2*n.q2*r,i=2*n.q1*r,f=2*n.q0*r,$=o.ic*r,s=o.cQ*r,d=o.kB*r,b=Aa(zf(e)),_=xe(f*b.kB)+xe(i*b.cQ)+xe(c*b.ic),p=Aa(Z$(e)),h=xe(f*p.kB)+xe(i*p.cQ)+xe(c*p.ic),y=Aa(X$(e)),k=xe(f*y.kB)+xe(i*y.cQ)+xe(c*y.ic),L=a(aV,R(k,h,_),a(d8,e,v(br,d,s,$)));if(t.$)return D(L);var w=t.a;return D(a(rV,w,L))}),Bs=J(function(e,r,n,t){e:for(;;)if(t.b){var o=t.a,c=t.b;switch(o.$){case 0:var p=e,h=r,y=n,k=c;e=p,r=h,n=y,t=k;continue e;case 1:var i=o.a,f=C(Ds,e,r,i,n),p=e,h=r,y=f,k=c;e=p,r=h,n=y,t=k;continue e;case 2:var i=o.a,f=C(Ds,e,r,i,n),p=e,h=r,y=f,k=c;e=p,r=h,n=y,t=k;continue e;case 3:var p=e,h=r,y=n,k=c;e=p,r=h,n=y,t=k;continue e;case 4:var i=o.a,f=C(Ds,e,r,i,n),p=e,h=r,y=f,k=c;e=p,r=h,n=y,t=k;continue e;case 5:var $=o.a,p=e,h=r,y=C(Bs,e,r,n,$),k=c;e=p,r=h,n=y,t=k;continue e;default:var s=o.a,d=o.b,b=a(b8,eV(s),e),_=r*s.f2,p=e,h=r,y=C(Bs,b,_,n,u([d])),k=c;e=p,r=h,n=y,t=k;continue e}}else return n}),nV={mh:!0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aZ:0,a_:0,a$:0,f2:1},tV=function(e){var r=e;return r},m8=Ts({fw:ii,jf:0,nH:js,ge:ri,kA:255,gt:ii,gu:ii}),Jq=ae,na={io:0,t:!1,iY:0,jO:0,jU:0,t9:0,kB:0,cQ:0,ic:0},cn=l(function(e,r){var n=e,t=r;return Ln({mz:n.kB,mA:n.jU,mB:t.kB,mC:t.jU,mD:n.cQ,mE:n.iY,mF:t.cQ,mG:t.iY,mH:n.ic,mI:n.io,mJ:t.ic,mK:t.io,mL:n.t9,mM:n.jO,mN:t.t9,mO:t.jO})}),Yf=g({fL:a(cn,na,na),hh:a(cn,na,na),hi:a(cn,na,na),hj:a(cn,na,na)},C(St,0,0,0,0)),oV=function(e){var r=e;return r.ej},cV=function(e){var r=e;return r.lK},p8=function(e){var r=e;return .5*r},iV=function(e){var r=e;return db(r)},h8=function(e){return iV(p8(cV(e)))},g8=function(e){var r=e;return 2*r},fV=function(e){return g8(a(Ct,h8(e),oV(e)))},uV=function(e){var r=e;return r.s$},$V=l(function(e,r){var n=r.sa,t=r.qD,o=r.oY,c=h8(e),i=wa(n),f=i,$=wa(t),s=$,d=uV(e);if(d){var b=fV(e),_=b;return mc(s)?Ln({mz:2/(o*_),mA:0,mB:0,mC:0,mD:0,mE:2/_,mF:0,mG:0,mH:0,mI:0,mJ:0,mK:-1,mL:0,mM:0,mN:0,mO:1}):Ln({mz:2/(o*_),mA:0,mB:0,mC:0,mD:0,mE:2/_,mF:0,mG:0,mH:0,mI:0,mJ:-2/(s-f),mK:-(s+f)/(s-f),mL:0,mM:0,mN:0,mO:1})}else return mc(s)?Ln({mz:1/(o*c),mA:0,mB:0,mC:0,mD:0,mE:1/c,mF:0,mG:0,mH:0,mI:0,mJ:-1,mK:-2*f,mL:0,mM:0,mN:-1,mO:0}):Ln({mz:1/(o*c),mA:0,mB:0,mC:0,mD:0,mE:1/c,mF:0,mG:0,mH:0,mI:0,mJ:-(s+f)/(s-f),mK:-2*s*f/(s-f),mL:0,mM:0,mN:-1,mO:0})}),lV=function(e){return a(B,v8({b7:1,cb:0,cu:!0}),a(B,Ls({fw:ha,jf:s8,nH:e,ge:l8,kA:0,gt:ha,gu:ha}),zl))},Ml=l(function(e,r){return(1&e>>r)===1?0:1}),vV=x(function(e,r,n){return gn(a(N,function(t){var o=t<<4,c=C(St,a(Ml,t,0),a(Ml,t,1),a(Ml,t,2),a(Ml,t,3));return v(_r,e,g(r,c),lV(o))},a(In,1,a(bn,2,n)-1)))}),sV=bh,dV=b4,bV={aY:wn,uB:dV,uK:Q4,uQ:al},mV=function(e){var r=Uo(J$(e)),n=Aa(zf(e)),t=Aa(Z$(e)),o=Aa(X$(e));return Ln({mz:o.kB,mA:t.kB,mB:n.kB,mC:r.kB,mD:o.cQ,mE:t.cQ,mF:n.cQ,mG:r.cQ,mH:o.ic,mI:t.ic,mJ:n.ic,mK:r.ic,mL:0,mM:0,mN:0,mO:1})},pV=l(function(e,r){return mV(a(b8,zs(r),e))}),hV=function(e){return a(pV,bV,e)},$i=u([$8,C(ws,!1,!1,!1,!1)]),gV=function(e){var r=zs(e.pt),n=to(e.gX),t=n,o=C(Bs,r,1,z,u([t]));if(o.$===1)return P;var c=o.a,i=hV(e.pt),f=(function(){var be=e.F;switch(be.$){case 0:return g(0,0);case 1:return g(1,0);case 2:return g(2,0);case 3:var ke=be.a;return g(3,ke);case 4:var ke=be.a;return g(4,ke);default:return g(5,0)}})(),$=f.a,s=f.b,d=a(jI,e.cy,c),b=d.a,_=d.b,p=a($V,e.pt,{oY:e.oY,qD:_,sa:b}),h=sV(p).mO,y=h?Aa(zf(r)):rt(KI(e.pt)),k=e.B,L=k,w=a(Of,L,e.G),H=w,F=Ln({mz:0,mA:y.kB,mB:Wf(H),mC:e.n9,mD:0,mE:y.cQ,mF:Nf(H),mG:tV(t8(c)),mH:0,mI:y.ic,mJ:Qf(H),mK:$,mL:0,mM:h,mN:0,mO:s}),V=yr(a8,F,i,p,nV,t,{aJ:P,bh:P,ts:P,N:P}),q=e.E;switch(q.$){case 0:var O=q.a;return gn(u([v(_r,V.aJ,g(O,ga),fi),v(_r,V.N,g(O,ga),a(B,Qo,$i)),v(_r,V.N,g(O,ga),a(B,Qo,ui)),v(_r,V.N,g(O,ga),a(B,No,$i)),v(_r,V.N,g(O,ga),a(B,No,ui)),v(_r,V.bh,Yf,fi)]));case 1:var O=q.a;return gn(u([v(_r,V.aJ,Yf,fi),u([m8]),v(_r,V.ts,O.fL,o8),u([f8(0)]),v(_r,V.aJ,g(O,ga),ZI),v(_r,V.N,g(O,ga),a(B,Qo,$i)),v(_r,V.N,g(O,ga),a(B,Qo,ui)),v(_r,V.N,g(O,ga),a(B,No,$i)),v(_r,V.N,g(O,ga),a(B,No,ui)),v(_r,V.bh,Yf,fi)]));default:var K=q.a,ce=q.b;return gn(u([v(_r,V.aJ,g(ce,ga),fi),u([m8]),a(EI,V.ts,K),v(vV,V.aJ,ce,Cr(K)),v(_r,V.N,g(ce,ga),a(B,Qo,$i)),v(_r,V.N,g(ce,ga),a(B,Qo,ui)),v(_r,V.N,g(ce,ga),a(B,No,$i)),v(_r,V.N,g(ce,ga),a(B,No,ui)),v(_r,V.bh,Yf,fi)]))}},_V=function(e){return a(iu,"width",Ze(e))},_8=l(function(e,r){var n=u([pI(1),yI(0),lI(!0),C(bI,0,0,0,0)]),t=(function(){var H=e.ih;switch(H.$){case 0:return R(n,"0",1);case 1:return R(a(B,sI,n),"1",1);default:var F=H.a;return R(n,"0",F)}})(),o=t.a,c=t.b,i=t.c,f=e.p8,$=f.a,s=f.b,d=r8(s),b=a(Z,"height",Ze(d)+"px"),_=r8($),p=_/d,h=a(_n,function(H){return gV({oY:p,pt:e.pt,cy:e.cy,gX:H.gX,B:H.B,E:H.E,n9:i,F:H.F,G:H.G})},r),y=a(Z,"width",Ze(_)+"px"),k=e.o2,L=k,w=CI(L);return v(gI,"div",u([a(Z,"padding","0px"),y,b]),u([g(c,v(PI,o,u([_V(Ir(_*i)),hI(Ir(d*i)),y,b,a(Z,"display","block"),a(Z,"background-color",w)]),h))]))}),yV=function(e){return{$:2,a:e}},As=function(e){return yV(e)},y8=function(e){return a(_8,{ih:As(e.iI),o2:e.o2,pt:e.pt,cy:e.cy,p8:e.p8},u([{gX:e.gX,B:e.B,E:e.E,F:e.F,G:e.G}]))},Xq=1,Zq=0,CV=function(e){return{$:0,a:e}},PV=function(e){return CV(e)},Hs=function(e){return e},SV=function(e){return{$:1,a:e}},kV=function(e){return SV(e)},Dl=function(e){var r=e,n=a(we,xe(r.kB),a(we,xe(r.cQ),xe(r.ic)));if(n){var t=r.ic/n,o=r.cQ/n,c=r.kB/n,i=mn(c*c+o*o+t*t);return D({kB:c/i,cQ:o/i,ic:t/i})}else return z},xV=l(function(e,r){var n=e,t=r,o=t.ic-n.ic,c=t.cQ-n.cQ,i=t.kB-n.kB,f=a(we,xe(i),a(we,xe(c),xe(o)));if(f){var $=o/f,s=c/f,d=i/f,b=mn(d*d+s*s+$*$);return b*f}else return Yo}),wV=l(function(e,r){var n=e,t=r;return t.kB*n.kB+t.cQ*n.cQ+t.ic*n.ic}),C8=l(function(e,r){var n=e,t=r;return te(t,n)>0}),jV=l(function(e,r){var n=e,t=r;return te(t,n)<0}),LV=l(function(e,r){var n=e,t=r;return{kB:t.kB-n.kB,cQ:t.cQ-n.cQ,ic:t.ic-n.ic}}),TV=l(function(e,r){var n=e,t=r,o=t.kB*n.kB+t.cQ*n.cQ+t.ic*n.ic;return{kB:n.kB*o,cQ:n.cQ*o,ic:n.ic*o}}),zV=function(e){var r=e;return{kB:-r.kB,cQ:-r.cQ,ic:-r.ic}},MV=x(function(e,r,n){return a(Yr,function(t){var o=a(LV,a(TV,t,r),r);return a(Yr,function(c){var i=a(G1,r,e),f=a(wV,n,i),$=a(C8,Yo,f)?i:a(jV,Yo,f)?zV(i):W1;return a(de,function(s){return R(t,c,s)},Dl($))},Dl(o))},Dl(e))}),DV=function(e){var r=e;return r},Yq=ae,Is=ae,Kq=ae,BV=l(function(e,r){var n=e,t=r;return a(J4,n,t)}),AV=l(function(e,r){var n=e,t=r;return{kB:n.cQ*t.ic-n.ic*t.cQ,cQ:n.ic*t.kB-n.kB*t.ic,ic:n.kB*t.cQ-n.cQ*t.kB}}),P8=function(e){var r=e;return r.uB},S8=function(e){var r=e;return r.uK},HV=function(e){return a(AV,P8(e),S8(e))},IV=function(e){var r=e;return r.aY},VV=function(e){return{aY:IV(e),uB:P8(e),uK:S8(e),uQ:HV(e)}},RV=function(e){return{ej:e.ej,lK:(function(){var r=e.qP;if(r.$){var t=r.a;return g8(a(BV,p8(t),e.ej))}else{var n=r.a;return n}})(),cH:VV(e.ky),s$:e.s$}},FV=l(function(e,r){var n=$s(r),t=n.a,o=n.b;return Is({aY:e,uB:t,uK:o})}),EV=l(function(e,r){return a(FV,r,e)}),UV=function(e){var r=a(ol,e.qH,e.qz),n=DV(e.uf),t=a(G1,r,n),o=(function(){var c=v(MV,r,n,t);if(c.$){var d=Dl(r);if(d.$){var _=$s(e.uf),p=_.a,h=_.b;return Is({aY:e.qz,uB:h,uK:e.uf})}else{var b=d.a;return a(EV,b,e.qz)}}else{var i=c.a,f=i.a,$=i.b,s=i.c;return Is({aY:e.qz,uB:s,uK:$})}})();return RV({ej:a(xV,e.qz,e.qH),qP:e.qP,s$:e.s$,ky:o})},Bl=function(e){return UV({qz:Hs(e.qz),qH:Hs(e.qH),qP:(function(){var r=e.s$;if(r.$){var t=r.a.oB;return kV(Ia(t))}else{var n=r.a.em;return PV(Nc(n))}})(),s$:(function(){var r=e.s$;return r.$?1:0})(),uf:a(ne,Uf,a(e8,wn,Hs(e.uf)))})},oo=function(e){return e},GV=function(e){var r=e;return r},Vs=function(e){var r=v(mr,1667,25e3,GV(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Gf({kB:n,cQ:t})},Al=Gf({kB:.31271,cQ:.32902}),qV=Gf({kB:.37208,cQ:.37529}),WV=Gf({kB:.44757,cQ:.40745}),eW=ae,k8=function(e){return e},x8=Vs(k8(12e3)),w8=Vs(k8(5600)),co=function(e){switch(e.$){case 0:return Al;case 1:return w8;case 2:return x8;case 3:return WV;case 4:return qV;case 5:var r=e.a;return Vs(r);default:var n=e.a;return H4(n)}},rW=ae,Rs=function(e){return Pl(1.2*a(bn,2,e))},j8=function(e){return wa(e)},NV=function(e){var r=e;return r},QV=function(e){var r=e.lA,n=e.n$,t=e.mi,o=NV(n);return Rs(a(du,2,100*a(bn,r,2)/(o*t)))},OV=function(e){switch(e.$){case 0:var r=e.a;return Rs(r);case 1:var n=e.a;return j8(n);default:var t=e.a;return QV({lA:t.lA,mi:t.mi,n$:t.n$})}},JV=l(function(e,r){return{$:2,a:e,b:r}}),L8=function(e){return{$:0,a:e}},Hl=function(e){var r=e;return r},XV=function(e){var r=e;return r.t},Fs=L8(Yf.a),ZV=l(function(e,r){var n=l(function(t,o){var c=o.a,i=o.b;return e(t)?g(a(B,t,c),i):g(c,a(B,t,i))});return v(Ya,n,g(P,P),r)}),YV=function(e){var r=e;return Ln({mz:r.kB,mA:r.jU,mB:0,mC:0,mD:r.cQ,mE:r.iY,mF:0,mG:0,mH:r.ic,mI:r.io,mJ:0,mK:0,mL:r.t9,mM:r.jO,mN:0,mO:0})},T8=Be(function(e,r,n,t,o,c,i,f){var $=a(ZV,XV,u([Hl(e),Hl(r),Hl(n),Hl(t)])),s=$.a,d=$.b;if(s.b){var b=X(s,d);if(b.b&&b.b.b&&b.b.b.b&&b.b.b.b.b&&!b.b.b.b.b.b){var _=b.a,p=b.b,h=p.a,y=p.b,k=y.a,L=y.b,w=L.a;return a(JV,a(N,YV,s),{fL:a(cn,_,h),hh:a(cn,k,w),hi:a(cn,o,c),hj:a(cn,i,f)})}else return Fs}else return L8({fL:a(cn,e,r),hh:a(cn,n,t),hi:a(cn,o,c),hj:a(cn,i,f)})}),aW=ae,Es=function(e){return e},Us=l(function(e,r){var n=e,t=Aa(r.eb),o=t.kB,c=t.cQ,i=t.ic,f=a(Of,r.i1,r.a),$=f;return{io:Qf($),t:n,iY:Nf($),jO:0,jU:Wf($),t9:1,kB:-o,cQ:-c,ic:-i}}),z8=l(function(e,r){var n=e,t=Uo(r.sX),o=t.kB,c=t.cQ,i=t.ic,f=a(Of,r.i1,r.a),$=f;return{io:Qf($),t:n,iY:Nf($),jO:0,jU:Wf($),t9:2,kB:o,cQ:c,ic:i}}),KV=function(e){switch(e.$){case 0:var r=e.a;return a(Us,Es(r.t),{a:co(r.a),eb:r.eb,i1:r.i1});case 1:var r=e.a;return a(z8,Es(r.t),{a:co(r.a),i1:r.i1,sX:r.sX});default:return na}},M8=function(e){var r=e;return r},D8=function(e){var r=e;return{kB:-r.kB,cQ:-r.cQ,ic:-r.ic}},Gs=function(e){e:for(;;){if(fe(e.l5,Yo)&&fe(e.l6,Yo))return na;if(a(C8,wa(e.l5),wa(e.l6))){var r={a:e.a,l5:e.l6,l6:e.l5,uf:D8(e.uf)};e=r;continue e}else{var n=xe(M8(e.l6)/ka),t=xe(M8(e.l5)/ka),o=Aa(e.uf),c=o.kB,i=o.cQ,f=o.ic,$=a(Of,q1(1),e.a),s=$;return{io:t*Qf(s),t:!1,iY:t*Nf(s),jO:n/t,jU:t*Wf(s),t9:3,kB:c,cQ:i,ic:f}}}},eR=function(e){return Gs({a:e.a,l5:e.i1,l6:e.i1,uf:al})},B8=!1,qs=function(e){return Gs({a:e.a,l5:e.i1,l6:Yo,uf:e.uf})},rR=function(e){switch(e.$){case 0:var r=e.a;return a(Us,B8,{a:co(r.a),eb:r.eb,i1:r.i1});case 1:var r=e.a;return a(z8,B8,{a:co(r.a),i1:r.i1,sX:r.sX});case 2:var r=e.a;return Gs({a:co(r.a),l5:r.l5,l6:r.l6,uf:r.uf});case 3:var r=e.a;return qs({a:co(r.a),i1:r.i1,uf:r.uf});default:var r=e.a;return eR({a:co(r.a),i1:r.i1})}},aR=function(e){var r=na,n=function(f){switch(f.$){case 0:return!0;case 1:return!0;default:return!1}},t=a(N,rR,a(Gn,4,a(kr,a(rr,L0,n),e))),o=function(f){return a(ne,r,Sr(a(Gt,f,t)))},c=a(N,KV,a(Gn,4,a(kr,n,e))),i=function(f){return a(ne,r,Sr(a(Gt,f,c)))};return Je(c)&&Je(t)?Fs:Mt(T8,i(0),i(1),i(2),i(3),o(0),o(1),o(2),o(3))},nR={$:5},tR=nR,oR={$:0},Ws=oR,cR=function(e){return{$:4,a:e}},iR={$:2},fR=function(e){return mc(e)?iR:cR(e)},uR=function(e){return{$:3,a:e}},$R={$:1},lR=function(e){return mc(e)?$R:uR(e)},vR=function(e){switch(e.$){case 0:return Ws;case 1:var r=e.a;return lR(r);case 2:var r=e.a;return fR(r);default:return tR}},A8=l(function(e,r){return y8({o2:jl(e.A),pt:Bl(e.pt),cy:Ia(e.cy),iI:e.iI,p8:g(oo(Ir(e.f3.ia)),oo(Ir(e.f3.g8))),gX:r,B:OV(e.B),E:aR(e.E),F:vR(e.F),G:co(e.G)})}),sR=l(function(e,r){return y8({o2:jl(e.ff.A),pt:Bl(e.pt),cy:Ia(e.cy),iI:e.iI,p8:g(oo(Ir(e.f3.ia)),oo(Ir(e.f3.g8))),gX:r,B:e.ff.B,E:e.ff.E,F:e.ff.F,G:e.ff.G})}),dR=.005,bR=l(function(e,r){return a(A8,{A:e.fZ.A,pt:e.pt,cy:e.cy,iI:e.iI,B:e.fZ.B,E:e.fZ.E,f3:e.f3,F:e.fZ.F,G:e.fZ.G},r)}),mR=function(e){return Ia(.01*e)},H8=function(e){return a(_8,{ih:e.ih,o2:e.o2,pt:e.pt,cy:e.cy,p8:e.p8},u([{gX:e.gX,B:e.B,E:e.E,F:e.F,G:e.G}]))},pR=x(function(e,r,n){return Mt(T8,e,r,n,na,na,na,na,na)}),hR=function(e){var r=a(Us,Es(e.ts),{a:w8,eb:e.tR,i1:ci(8e4)}),n=qs({a:x8,i1:ci(2e4),uf:e.uf}),t=qs({a:Al,i1:ci(15e3),uf:D8(e.uf)}),o=v(pR,r,n,t);return H8({ih:As(e.iI),o2:e.o2,pt:e.pt,cy:e.cy,p8:e.p8,gX:e.gX,B:Rs(15),E:o,F:Ws,G:Al})},gR=l(function(e,r){var n=e,t=r,o=kn(t);return{kB:o*kn(n),cQ:o*xn(n),ic:xn(t)}}),_R=l(function(e,r){return hR({o2:jl(ti(e.A)),pt:Bl(e.pt),cy:mR(.5),iI:e.iI,p8:g(oo(Ir(e.f3.ia)),oo(Ir(e.f3.g8))),gX:r,ts:!0,tR:a(gR,Nc(e.tQ),Nc(e.tS)),uf:al})}),yR=function(e){return H8({ih:As(e.iI),o2:e.o2,pt:e.pt,cy:e.cy,p8:e.p8,gX:e.gX,B:j8(Pl(80)),E:Fs,F:Ws,G:Al})},CR=l(function(e,r){return yR({o2:jl(ti(e.o2)),pt:Bl(e.pt),cy:Ia(e.cy),iI:e.iI,p8:g(oo(Ir(e.f3.ia)),oo(Ir(e.f3.g8))),gX:r})}),PR=l(function(e,r){switch(r.$){case 0:var t=r.a;return a(_R,{A:t.o2,pt:e.pt,iI:e.f3.iI,f3:e.f3,tQ:t.tQ,tS:t.tS},e.gX);case 1:var t=r.a;return a(CR,{o2:t.o2,pt:e.pt,cy:dR,iI:e.f3.iI,f3:e.f3},e.gX);case 2:var t=r.a;return a(A8,{A:wl(t.o2),pt:e.pt,cy:t.cy,iI:e.f3.iI,B:t.B,E:X(t.E,e.ou),f3:e.f3,F:t.F,G:t.G},e.gX);case 3:var t=r.a,n=t.fZ;return a(bR,{pt:e.pt,cy:t.cy,iI:e.f3.iI,fZ:A(n,{E:X(n.E,e.ou)}),f3:e.f3},e.gX);default:var t=r.a;return a(sR,{ff:t.ff,pt:e.pt,cy:t.cy,iI:e.f3.iI,f3:e.f3},e.gX)}}),SR=l(function(e,r){var n=uI(r),t=a(aI,{mQ:e.mQ,rR:e.rR},r);return a(im,lo,a(PR,{pt:e.pt,gX:t,f3:e.f3,ou:n},e.rE))}),kR=function(e){return{$:0,a:e}},xR=function(e){return kR(e)},wR=function(e){return{iI:e.iI,g8:e.f3.g8,ia:e.f3.ia}},jR=J(function(e,r,n,t){return zD(a(SR,{pt:lb,rE:xR({o2:a(cr,function(o){return o.tT},n),tQ:-lf(15),tS:-lf(45)}),mQ:r.mQ,rR:Fe,f3:wR(r)},bp(u([v(TD,e,n,t)]))))}),LR=x(function(e,r,n){var t=$b(e);return a(Q,u([E(u([Ke(Ma),a(M,"touch-action","none")]))]),u([a(Q,u([E(u([Ke(Ma),an(S1(1)),ye(a(Y,function(o){return o.tZ},r)),a(M,"display","grid"),a(M,"place-items","center"),Ce(Xe(100))]))]),u([a(Q,P,u([oe("Swipe or press left/right arrow keys")]))])),C(jR,t,e,r,n)]))}),TR=gD({oK:P,ra:Lg,rj:Dg,rk:Rg,sr:Fg,sv:k_,uq:LR});$7({Carousel:{Main:{init:TR(a(T,function(e){return ee({rp:e})},a(S,"inputs",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(_){return a(T,function(p){return a(T,function(h){return a(T,function(y){return a(T,function(k){return a(T,function(L){return a(T,function(w){return a(T,function(H){return ee({ph:H,pW:w,p6:L,iI:k,lo:y,qI:h,qJ:p,mm:_,sB:b,sD:d,sF:s,sH:$,sL:f,fY:i,s1:c,f3:o,ti:t,to:n,t5:r,uu:e})},a(S,"boundingClientRects",ur(a(T,function(H){return a(T,function(F){return a(T,function(V){return ee({qr:V,qR:F,tn:H})},a(S,"elements",ur(a(T,function(V){return a(T,function(q){return ee({pg:q,by:V})},a(S,"boundingClientRect",a(T,function(q){return a(T,function(O){return a(T,function(K){return a(T,function(ce){return ee({pf:ce,eB:K,j_:O,h6:q})},a(S,"bottom",G))},a(S,"left",G))},a(S,"right",G))},a(S,"top",G))))},a(S,"id",Pe)))))},a(S,"frameId",Pe))},a(S,"scroll",a(T,function(H){return a(T,function(F){return a(T,function(V){return a(T,function(q){return a(T,function(O){return a(T,function(K){return ee({lc:K,ld:O,eB:q,h6:V,oB:F,oC:H})},a(S,"contentHeight",G))},a(S,"contentWidth",G))},a(S,"left",G))},a(S,"top",G))},a(S,"viewportHeight",G))},a(S,"viewportWidth",G)))))))},a(S,"darkModeIsOn",re))},a(S,"deviceOrientation",so(u([fc(z),a(Qe,D,a(T,function(L){return a(T,function(w){return a(T,function(H){return ee({oR:H,o8:w,qV:L})},a(S,"alpha",G))},a(S,"beta",G))},a(S,"gamma",G)))]))))},a(S,"devicePixelRatio",G))},a(S,"dt",G))},a(S,"focusedElementIsContentEditable",re))},a(S,"focusedElementIsTextInput",re))},a(S,"keyboard",a(T,function(_){return a(T,function(p){return a(T,function(h){return a(T,function(y){return a(T,function(k){return a(T,function(L){return a(T,function(w){return a(T,function(H){return a(T,function(F){return a(T,function(V){return ee({oS:V,pT:F,iK:H,qf:w,eB:L,rS:k,sZ:y,j_:h,tu:p,kv:_})},a(S,"alt",re))},a(S,"ctrl",re))},a(S,"down",re))},a(S,"downs",ur(Pe)))},a(S,"left",re))},a(S,"meta",re))},a(S,"pressedKeys",ur(Pe)))},a(S,"right",re))},a(S,"shift",re))},a(S,"up",re))))},a(S,"operatingSystem",Pe))},a(S,"pageId",Pe))},a(S,"pageScroll",a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(_){return a(T,function(p){return a(T,function(h){return ee({lc:h,ld:p,eB:_,h6:b,oB:d,oC:s})},a(S,"contentHeight",G))},a(S,"contentWidth",G))},a(S,"left",G))},a(S,"top",G))},a(S,"viewportHeight",G))},a(S,"viewportWidth",G))))},a(S,"paneBoundingBoxes",ur(a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(_){return ee({g8:_,eB:b,sI:d,h6:s,ia:$})},a(S,"height",G))},a(S,"left",G))},a(S,"paneId",Pe))},a(S,"top",G))},a(S,"width",G)))))},a(S,"persisted",ur(a(T,function(f){return a(T,function($){return ee(g(f,$))},a(Un,1,Pe))},a(Un,0,Pe)))))},a(S,"pointer",a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(_){return a(T,function(p){return a(T,function(h){return a(T,function(y){return a(T,function(k){return a(T,function(L){return ee({ln:L,iK:k,lq:y,lr:h,lt:p,mb:_,m2:b,nN:d,nO:s,kv:$,kB:f,cQ:i})},a(S,"doubleClick",re))},a(S,"down",re))},a(S,"dx",G))},a(S,"dy",G))},a(S,"elementIdsForLastDown",ur(Pe)))},a(S,"isDown",re))},a(S,"move",re))},a(S,"rightDown",re))},a(S,"rightUp",re))},a(S,"up",re))},a(S,"x",G))},a(S,"y",G))))},a(S,"rawPointer",a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(_){return a(T,function(p){return a(T,function(h){return a(T,function(y){return a(T,function(k){return ee({ln:k,iK:y,lq:h,lr:p,lt:_,mb:b,m2:d,nN:s,nO:$,kv:f,kB:i,cQ:c})},a(S,"doubleClick",re))},a(S,"down",re))},a(S,"dx",G))},a(S,"dy",G))},a(S,"elementIdsForLastDown",ur(Pe)))},a(S,"isDown",re))},a(S,"move",re))},a(S,"rightDown",re))},a(S,"rightUp",re))},a(S,"up",re))},a(S,"x",G))},a(S,"y",G))))},a(S,"screen",a(T,function(o){return a(T,function(c){return ee({g8:c,ia:o})},a(S,"height",G))},a(S,"width",G))))},a(S,"screenOrientationAngle",G))},a(S,"searchParamsFromUrl",so(u([fc(z),a(Qe,D,ur(a(T,function(n){return a(T,function(t){return ee(g(n,t))},a(Un,1,Pe))},a(Un,0,Pe))))]))))},a(S,"touches",ur(a(T,function(r){return a(T,function(n){return a(T,function(t){return ee({by:t,kB:n,cQ:r})},a(S,"id",xi))},a(S,"x",G))},a(S,"y",G)))))},a(S,"wheel",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return ee({p2:o,p3:t,qq:n,sO:r,sP:e})},a(S,"deltaX",G))},a(S,"deltaY",G))},a(S,"elementIdsForLastWheel",ur(Pe)))},a(S,"pinchDeltaForChrome",G))},a(S,"pinchScaleForSafari",so(u([fc(z),a(Qe,D,G)])))))))))(0)}}})})(this);
