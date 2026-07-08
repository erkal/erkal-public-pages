(function(ec){"use strict";function Tt(e,r,n){return n.a=e,n.f=r,n}function l(e){return Tt(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return Tt(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function J(e){return Tt(4,e,function(r){return function(n){return function(t){return function(o){return e(r,n,t,o)}}}})}function Le(e){return Tt(5,e,function(r){return function(n){return function(t){return function(o){return function(c){return e(r,n,t,o,c)}}}}})}function zr(e){return Tt(6,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return e(r,n,t,o,c,i)}}}}}})}function zt(e){return Tt(7,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return e(r,n,t,o,c,i,f)}}}}}}})}function Ae(e){return Tt(8,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return e(r,n,t,o,c,i,f,$)}}}}}}}})}function Hl(e){return Tt(9,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return e(r,n,t,o,c,i,f,$,s)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function v(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function C(e,r,n,t,o){return e.a===4?e.f(r,n,t,o):e(r)(n)(t)(o)}function V(e,r,n,t,o,c){return e.a===5?e.f(r,n,t,o,c):e(r)(n)(t)(o)(c)}function Cr(e,r,n,t,o,c,i){return e.a===6?e.f(r,n,t,o,c,i):e(r)(n)(t)(o)(c)(i)}function Nr(e,r,n,t,o,c,i,f){return e.a===7?e.f(r,n,t,o,c,i,f):e(r)(n)(t)(o)(c)(i)(f)}function Mt(e,r,n,t,o,c,i,f,$){return e.a===8?e.f(r,n,t,o,c,i,f,$):e(r)(n)(t)(o)(c)(i)(f)($)}function AH(e,r,n,t,o,c,i,f,$,s){return e.a===9?e.f(r,n,t,o,c,i,f,$,s):e(r)(n)(t)(o)(c)(i)(f)($)(s)}var q9=[];function Y9(e){return[e]}function N9(e){return e.length}var G9=x(function(e,r,n){for(var t=new Array(e),o=0;o<e;o++)t[o]=n(r+o);return t}),O9=l(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,h(n,r)}),W9=l(function(e,r){return r[e]}),J9=x(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=n[c];return o[e]=r,o}),Z9=l(function(e,r){for(var n=r.length,t=new Array(n+1),o=0;o<n;o++)t[o]=r[o];return t[n]=e,t}),X9=x(function(e,r,n){for(var t=n.length,o=0;o<t;o++)r=a(e,n[o],r);return r}),K9=x(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r}),FH=l(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=e(r[o]);return t}),IH=x(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=a(e,r+c,n[c]);return o}),Q9=x(function(e,r,n){return n.slice(e,r)}),e8=x(function(e,r,n){var t=r.length,o=e-t;o>n.length&&(o=n.length);for(var c=t+o,i=new Array(c),f=0;f<t;f++)i[f]=r[f];for(var f=0;f<o;f++)i[f+t]=n[f];return i}),VH=l(function(e,r){return r}),BH=l(function(e,r){return console.log(e+": "+Gs(r)),r});function HH(e,r){return function(n){fn(8,e,r,n)}}function RH(e,r,n){return function(t){fn(9,e,r,n,t)}}function Gs(e){return"<internals>"}function EH(e){return ct(!1,e)}function ct(e,r){if(typeof r=="function")return au(e,"<function>");if(typeof r=="boolean")return si(e,r?"True":"False");if(typeof r=="number")return r8(e,r+"");if(r instanceof String)return a8(e,"'"+Os(r,!0)+"'");if(typeof r=="string")return Ws(e,'"'+Os(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return au(e,"<internals>");if(n[0]==="#"){var o=[];for(var t in r)t!=="$"&&o.push(ct(e,r[t]));return"("+o.join(",")+")"}if(n==="Set_elm_builtin")return si(e,"Set")+ru(e,".fromList")+" "+ct(e,Xh(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return si(e,"Dict")+ru(e,".fromList")+" "+ct(e,Na(r));if(n==="Array_elm_builtin")return si(e,"Array")+ru(e,".fromList")+" "+ct(e,Zh(r));if(n==="::"||n==="[]"){var o="[";for(r.b&&(o+=ct(e,r.a),r=r.b);r.b;r=r.b)o+=","+ct(e,r.a);return o+"]"}var o="";for(var c in r)if(c!=="$"){var i=ct(e,r[c]),f=i[0],$=f==="{"||f==="("||f==="["||f==="<"||f==='"'||i.indexOf(" ")<0;o+=" "+($?i:"("+i+")")}return si(e,n)+o}if(typeof DataView=="function"&&r instanceof DataView)return Ws(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return au(e,"<"+r.name+">");if(typeof r=="object"){var o=[];for(var s in r){var d=s[0]==="_"?s.slice(1):s;o.push(ru(e,d)+" = "+ct(e,r[s]))}return o.length===0?"{}":"{ "+o.join(", ")+" }"}return au(e,"<internals>")}function Os(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function si(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function r8(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Ws(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function a8(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function ru(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function au(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function UH(e){return String.fromCharCode(e<10?48+e:55+e)}function fn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function qH(e,r,n,t,o){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var c=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+c);case 3:var i=r;throw new Error("There can only be one port named `"+i+"`, but your program has multiple.");case 4:var i=r,f=n;throw new Error("Trying to send an unexpected type of value through port `"+i+"`:\n"+f);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var $=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+$+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var $=r,s=n,b=t;throw new Error("TODO in module `"+$+"` "+Js(s)+`

`+b);case 9:var $=r,s=n,d=t,b=o;throw new Error("TODO in module `"+$+"` from the `case` expression "+Js(s)+`

It received the following value:

    `+Gs(d).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+b.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Js(e){return e.dc.fP===e.qu.fP?"on line "+e.dc.fP:"on lines "+e.dc.fP+" through "+e.qu.fP}function ie(e,r){for(var n,t=[],o=Rl(e,r,0,t);o&&(n=t.pop());o=Rl(n.a,n.b,0,t));return o}function Rl(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&fn(5),!1;if(n>100)return t.push(h(e,r)),!0;e.$<0&&(e=Na(e),r=Na(r));for(var o in e)if(!Rl(e[o],r[o],n+1,t))return!1;return!0}var n8=l(ie),t8=l(function(e,r){return!ie(e,r)});function oe(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=oe(e.a,r.a))||(n=oe(e.b,r.b))?n:oe(e.c,r.c);for(;e.b&&r.b&&!(n=oe(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}var o8=l(function(e,r){return oe(e,r)<0}),c8=l(function(e,r){return oe(e,r)<1}),i8=l(function(e,r){return oe(e,r)>0}),f8=l(function(e,r){return oe(e,r)>=0}),u8=l(function(e,r){var n=oe(e,r);return n<0?qd:n?Kh:Ud}),io=0,YH={$:"#0"};function h(e,r){return{a:e,b:r}}function NH(e,r){return{$:"#2",a:e,b:r}}function H(e,r,n){return{a:e,b:r,c:n}}function GH(e,r,n){return{$:"#3",a:e,b:r,c:n}}function OH(e){return e}function WH(e){return new String(e)}function F(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}var $8=l(Z);function Z(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Fn(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Fn(e.a,r);return n}var P={$:0},JH={$:"[]"};function Fn(e,r){return{$:1,a:e,b:r}}function ZH(e,r){return{$:"::",a:e,b:r}}var l8=l(Fn);function u(e){for(var r=P,n=e.length;n--;)r=Fn(e[n],r);return r}function nu(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var v8=x(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return u(t)}),XH=J(function(e,r,n,t){for(var o=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)o.push(v(e,r.a,n.a,t.a));return u(o)}),s8=Le(function(e,r,n,t,o){for(var c=[];r.b&&n.b&&t.b&&o.b;r=r.b,n=n.b,t=t.b,o=o.b)c.push(C(e,r.a,n.a,t.a,o.a));return u(c)}),KH=zr(function(e,r,n,t,o,c){for(var i=[];r.b&&n.b&&t.b&&o.b&&c.b;r=r.b,n=n.b,t=t.b,o=o.b,c=c.b)i.push(V(e,r.a,n.a,t.a,o.a,c.a));return u(i)}),d8=l(function(e,r){return u(nu(r).sort(function(n,t){return oe(e(n),e(t))}))}),b8=l(function(e,r){return u(nu(r).sort(function(n,t){var o=a(e,n,t);return o===Ud?0:o===qd?-1:1}))}),m8=l(function(e,r){return e+r}),p8=l(function(e,r){return e-r}),h8=l(function(e,r){return e*r}),g8=l(function(e,r){return e/r}),_8=l(function(e,r){return e/r|0}),y8=l(Math.pow),C8=l(function(e,r){return r%e}),P8=l(function(e,r){var n=r%e;return e===0?fn(11):n>0&&e<0||n<0&&e>0?n+e:n}),S8=Math.PI,QH=Math.E,k8=Math.cos,x8=Math.sin,w8=Math.tan,j8=Math.acos,eR=Math.asin,L8=Math.atan,T8=l(Math.atan2);function z8(e){return e}function rR(e){return e|0}function M8(e){return e===1/0||e===-1/0}var D8=Math.ceil,A8=Math.floor,F8=Math.round,I8=Math.sqrt,Zs=Math.log,V8=isNaN;function B8(e){return!e}var H8=l(function(e,r){return e&&r}),R8=l(function(e,r){return e||r}),aR=l(function(e,r){return e!==r}),E8=l(function(e,r){return e+r});function U8(e){var r=e.charCodeAt(0);return isNaN(r)?z:D(55296<=r&&r<=56319?h(e[0]+e[1],e.slice(2)):h(e[0],e.slice(1)))}var q8=l(function(e,r){return e+r});function Y8(e){return e.length}var nR=l(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;){var c=r.charCodeAt(o);if(55296<=c&&c<=56319){t[o]=e(r[o]+r[o+1]),o+=2;continue}t[o]=e(r[o]),o++}return t.join("")}),tR=l(function(e,r){for(var n=[],t=r.length,o=0;o<t;){var c=r[o],i=r.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=r[o],o++),e(c)&&n.push(c)}return n.join("")});function N8(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}var G8=x(function(e,r,n){for(var t=n.length,o=0;o<t;){var c=n[o],i=n.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=n[o],o++),r=a(e,c,r)}return r}),O8=x(function(e,r,n){for(var t=n.length;t--;){var o=n[t],c=n.charCodeAt(t);56320<=c&&c<=57343&&(t--,o=n[t]+o),r=a(e,o,r)}return r}),W8=l(function(e,r){return r.split(e)}),J8=l(function(e,r){return r.join(e)}),Z8=x(function(e,r,n){return n.slice(e,r)});function oR(e){return e.trim()}function cR(e){return e.replace(/^\s+/,"")}function iR(e){return e.replace(/\s+$/,"")}function fR(e){return u(e.trim().split(/\s+/g))}function uR(e){return u(e.split(/\r\n|\r|\n/g))}function X8(e){return e.toUpperCase()}function K8(e){return e.toLowerCase()}var $R=l(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1}),Q8=l(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),e6=l(function(e,r){return r.indexOf(e)>-1}),r6=l(function(e,r){return r.indexOf(e)===0}),a6=l(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length}),n6=l(function(e,r){var n=e.length;if(n<1)return P;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+n;return u(o)});function Xs(e){return e+""}function t6(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,o=t;o<e.length;++o){var c=e.charCodeAt(o);if(c<48||57<c)return z;r=10*r+c-48}return o==t?z:D(n==45?-r:r)}function o6(e){if(e.length===0||/[\sxbo]/.test(e))return z;var r=+e;return r===r?D(r):z}function c6(e){return nu(e).join("")}function i6(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function f6(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function lR(e){return e.toUpperCase()}function u6(e){return e.toLowerCase()}function vR(e){return e.toLocaleUpperCase()}function sR(e){return e.toLocaleLowerCase()}function $6(e){return{$:0,a:e}}function l6(e){return{$:1,a:e}}function di(e){return{$:2,b:e}}var v6=di(function(e){return typeof e!="number"?Ua("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?Jr(e):Ua("an INT",e)}),s6=di(function(e){return typeof e=="boolean"?Jr(e):Ua("a BOOL",e)}),d6=di(function(e){return typeof e=="number"?Jr(e):Ua("a FLOAT",e)}),b6=di(function(e){return Jr(e)}),m6=di(function(e){return typeof e=="string"?Jr(e):e instanceof String?Jr(e+""):Ua("a STRING",e)});function p6(e){return{$:3,b:e}}function h6(e){return{$:4,b:e}}function g6(e){return{$:5,c:e}}var _6=l(function(e,r){return{$:6,d:e,b:r}}),y6=l(function(e,r){return{$:7,e,b:r}});function C6(e){return{$:8,b:e}}function Dt(e,r){return{$:9,f:e,g:r}}var P6=l(function(e,r){return{$:10,b:r,h:e}});function S6(e){return{$:11,g:e}}var k6=l(function(e,r){return Dt(e,[r])}),x6=x(function(e,r,n){return Dt(e,[r,n])}),w6=J(function(e,r,n,t){return Dt(e,[r,n,t])}),j6=Le(function(e,r,n,t,o){return Dt(e,[r,n,t,o])}),L6=zr(function(e,r,n,t,o,c){return Dt(e,[r,n,t,o,c])}),T6=zt(function(e,r,n,t,o,c,i){return Dt(e,[r,n,t,o,c,i])}),dR=Ae(function(e,r,n,t,o,c,i,f){return Dt(e,[r,n,t,o,c,i,f])}),bR=Hl(function(e,r,n,t,o,c,i,f,$){return Dt(e,[r,n,t,o,c,i,f,$])}),z6=l(function(e,r){try{var n=JSON.parse(r);return Ea(e,n)}catch(t){return La(a(b0,"This is not valid JSON! "+t.message,r))}}),El=l(function(e,r){return Ea(e,r)});function Ea(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Jr(e.c):Ua("null",r);case 3:return tu(r)?Ks(e.b,r,u):Ua("a LIST",r);case 4:return tu(r)?Ks(e.b,r,M6):Ua("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ua("an OBJECT with a field named `"+n+"`",r);var s=Ea(e.b,r[n]);return sn(s)?s:La(a(Yd,n,s.a));case 7:var t=e.e;if(!tu(r))return Ua("an ARRAY",r);if(t>=r.length)return Ua("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var s=Ea(e.b,r[t]);return sn(s)?s:La(a(Nd,t,s.a));case 8:if(typeof r!="object"||r===null||tu(r))return Ua("an OBJECT",r);var o=P;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var s=Ea(e.b,r[c]);if(!sn(s))return La(a(Yd,c,s.a));o=Fn(h(c,s.a),o)}return Jr(Be(o));case 9:for(var i=e.f,f=e.g,$=0;$<f.length;$++){var s=Ea(f[$],r);if(!sn(s))return s;i=i(s.a)}return Jr(i);case 10:var s=Ea(e.b,r);return sn(s)?Ea(e.h(s.a),r):s;case 11:for(var d=P,b=e.g;b.b;b=b.b){var s=Ea(b.a,r);if(sn(s))return s;d=Fn(s.a,d)}return La(Qh(Be(d)));case 1:return La(a(b0,e.a,r));case 0:return Jr(e.a)}}function Ks(e,r,n){for(var t=r.length,o=new Array(t),c=0;c<t;c++){var i=Ea(e,r[c]);if(!sn(i))return La(a(Nd,c,i.a));o[c]=i.a}return Jr(n(o))}function tu(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function M6(e){return a(_0,e.length,function(r){return e[r]})}function Ua(e,r){return La(a(b0,"Expecting "+e,r))}function rc(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return rc(e.b,r.b);case 6:return e.d===r.d&&rc(e.b,r.b);case 7:return e.e===r.e&&rc(e.b,r.b);case 9:return e.f===r.f&&Qs(e.g,r.g);case 10:return e.h===r.h&&rc(e.b,r.b);case 11:return Qs(e.g,r.g)}}function Qs(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!rc(e[t],r[t]))return!1;return!0}var D6=l(function(e,r){return JSON.stringify(r,null,e)+""});function mR(e){return{$:0,a:e}}function pR(e){return e.a}function Ul(e){return e}function hR(e){return e}function A6(){return[]}function F6(){return{}}var I6=x(function(e,r,n){var t=r;return e==="toJSON"&&typeof t=="function"||(n[e]=t),n});function V6(e){return l(function(r,n){return n.push(e(r)),n})}var B6=null,H6=l(function(e,r){return e&r}),R6=l(function(e,r){return e|r}),E6=l(function(e,r){return e^r});function gR(e){return~e}var U6=l(function(e,r){return r<<e}),q6=l(function(e,r){return r>>e}),Y6=l(function(e,r){return r>>>e});function qa(e){return{$:0,a:e}}function ql(e){return{$:1,a:e}}function Gr(e){return{$:2,b:e,c:null}}var Yl=l(function(e,r){return{$:3,b:e,d:r}}),N6=l(function(e,r){return{$:4,b:e,d:r}});function G6(e){return{$:5,b:e}}var O6=0;function Nl(e){var r={$:0,e:O6++,f:e,g:null,h:[]};return Wl(r),r}function Gl(e){return Gr(function(r){r(qa(Nl(e)))})}function ed(e,r){e.h.push(r),Wl(e)}var W6=l(function(e,r){return Gr(function(n){ed(e,r),n(qa(io))})});function J6(e){return Gr(function(r){var n=e.f;n.$===2&&n.c&&n.c(),e.f=null,r(qa(io))})}var Ol=!1,rd=[];function Wl(e){if(rd.push(e),!Ol){for(Ol=!0;e=rd.shift();)Z6(e);Ol=!1}}function Z6(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Wl(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}function X6(e){return Gr(function(r){var n=setTimeout(function(){r(qa(io))},e);return function(){clearTimeout(n)}})}var _R=J(function(e,r,n,t){return Jl(r,t,e.rk,e.uh,e.aA,function(){return function(){}})});function Jl(e,r,n,t,o,c){var i=a(El,e,r?r.flags:void 0);sn(i)||fn(2);var f={},$=n(i.a),s=$.a,d=c(g,s),b=Q6(f,g);function g(p,y){var _=a(t,p,s);d(s=_.a,y),od(f,_.b,o(s))}return od(f,$.b,o(s)),b?{ports:b}:{}}var K6;function yR(e){K6.add(e)}var Or={};function Q6(e,r){var n;for(var t in Or){var o=Or[t];o.a&&(n=n||{},n[t]=o.a(t,r)),e[t]=e7(o,r)}return n}function Zl(e,r,n,t,o){return{b:e,c:r,d:n,e:t,f:o}}function e7(e,r){var n={g:r,h:void 0},t=e.c,o=e.d,c=e.e,i=e.f;function f($){return a(Yl,f,G6(function(s){var d=s.a;return s.$===0?v(o,n,d,$):c&&i?C(t,n,d.i,d.j,$):v(t,n,c?d.i:d.j,$)}))}return n.h=Nl(a(Yl,f,e.b))}var r7=l(function(e,r){return Gr(function(n){e.g(r),n(qa(io))})}),a7=l(function(e,r){return a(W6,e.h,{$:0,a:r})});function bi(e){return function(r){return{$:1,k:e,l:r}}}function ad(e){return{$:2,m:e}}var nd=l(function(e,r){return{$:3,n:e,o:r}}),td=[],Xl=!1;function od(e,r,n){if(td.push({p:e,q:r,r:n}),!Xl){Xl=!0;for(var t;t=td.shift();)n7(t.p,t.q,t.r);Xl=!1}}function n7(e,r,n){var t={};ou(!0,r,t,null),ou(!1,n,t,null);for(var o in e)ed(e[o],{$:"fx",a:t[o]||{i:P,j:P}})}function ou(e,r,n,t){switch(r.$){case 1:var o=r.k,c=t7(e,o,t,r.l);n[o]=o7(e,c,n[o]);return;case 2:for(var i=r.m;i.b;i=i.b)ou(e,i.a,n,t);return;case 3:ou(e,r.o,n,{s:r.n,t});return}}function t7(e,r,n,t){function o(i){for(var f=n;f;f=f.t)i=f.s(i);return i}var c=e?Or[r].e:Or[r].f;return a(c,o,t)}function o7(e,r,n){return n=n||{i:P,j:P},e?n.i=Fn(r,n.i):n.j=Fn(r,n.j),n}function cd(e){Or[e]&&fn(3,e)}function At(e,r){return cd(e),Or[e]={e:c7,u:r,a:i7},bi(e)}var c7=l(function(e,r){return r});function i7(e){var r=[],n=Or[e].u,t=X6(0);Or[e].b=t,Or[e].c=x(function(i,f,$){for(;f.b;f=f.b)for(var s=r,d=n(f.a),b=0;b<s.length;b++)s[b](d);return t});function o(i){r.push(i)}function c(i){r=r.slice();var f=r.indexOf(i);f>=0&&r.splice(f,1)}return{subscribe:o,unsubscribe:c}}function Kl(e,r){return cd(e),Or[e]={f:f7,u:r,a:u7},bi(e)}var f7=l(function(e,r){return function(n){return e(r(n))}});function u7(e,r){var n=P,t=Or[e].u,o=qa(null);Or[e].b=o,Or[e].c=x(function(i,f,$){return n=f,o});function c(i){var f=a(El,t,i);sn(f)||fn(4,e,f.a);for(var $=f.a,s=n;s.b;s=s.b)r(s.a($))}return{send:c}}function $7(e){ec.Elm?id(ec.Elm,e):ec.Elm=e}function id(e,r){for(var n in r)n in e?n=="init"?fn(6):id(e[n],r[n]):e[n]=r[n]}function CR(e){ec.Elm?fd("Elm",ec.Elm,e):ec.Elm=e}function fd(e,r,n){for(var t in n)t in r?t=="init"?fn(6,e):fd(e+"."+t,r[t],n[t]):r[t]=n[t]}var cu,Wr=typeof document<"u"?document:{};function Ql(e,r){e.appendChild(r)}var PR=J(function(e,r,n,t){var o=t.node;return o.parentNode.replaceChild(It(e,function(){}),o),{}});function e0(e){return{$:0,a:e}}var ud=l(function(e,r){return l(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b||0,o.push(i)}return c+=o.length,{$:1,c:r,d:a0(n),e:o,f:e,b:c}})}),Ya=ud(void 0),$d=l(function(e,r){return l(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b.b||0,o.push(i)}return c+=o.length,{$:2,c:r,d:a0(n),e:o,f:e,b:c}})}),l7=$d(void 0);function v7(e,r,n,t){return{$:3,d:a0(e),g:r,h:n,i:t}}var s7=l(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Ft(e,r){return{$:5,l:e,m:r,k:void 0}}var SR=l(function(e,r){return Ft([e,r],function(){return e(r)})}),kR=x(function(e,r,n){return Ft([e,r,n],function(){return a(e,r,n)})}),xR=J(function(e,r,n,t){return Ft([e,r,n,t],function(){return v(e,r,n,t)})}),wR=Le(function(e,r,n,t,o){return Ft([e,r,n,t,o],function(){return C(e,r,n,t,o)})}),jR=zr(function(e,r,n,t,o,c){return Ft([e,r,n,t,o,c],function(){return V(e,r,n,t,o,c)})}),LR=zt(function(e,r,n,t,o,c,i){return Ft([e,r,n,t,o,c,i],function(){return Cr(e,r,n,t,o,c,i)})}),TR=Ae(function(e,r,n,t,o,c,i,f){return Ft([e,r,n,t,o,c,i,f],function(){return Nr(e,r,n,t,o,c,i,f)})}),zR=Hl(function(e,r,n,t,o,c,i,f,$){return Ft([e,r,n,t,o,c,i,f,$],function(){return Mt(e,r,n,t,o,c,i,f,$)})}),ld=l(function(e,r){return{$:"a0",n:e,o:r}}),d7=l(function(e,r){return{$:"a1",n:e,o:r}}),vd=l(function(e,r){return{$:"a2",n:e,o:r}}),iu=l(function(e,r){return{$:"a3",n:e,o:r}}),b7=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}}),m7=/^script$/i,p7=/^(on|formAction$)/i,h7=/^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i,r0=/^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;function fu(e){return m7.test(e)?"p":e}function sd(e){return p7.test(e)?"data-"+e:e}function g7(e){return e=="innerHTML"||e=="outerHTML"||e=="formAction"?"data-"+e:e}function MR(e){return h7.test(e)?"":e}function dd(e){return r0.test(e)?"":e}function _7(e){return typeof e=="string"&&r0.test(e)||Array.isArray(e)&&r0.test(String(e))?"":e}var y7=l(function(e,r){return r.$==="a0"?a(ld,r.n,C7(e,r.o)):r});function C7(e,r){var n=T0(r);return{$:r.$,a:n?v(Yn,n<3?P7:S7,re(e),r.a):a(Ne,e,r.a)}}var P7=l(function(e,r){return h(e(r.a),r.b)}),S7=l(function(e,r){return{V:e(r.V),_:r._,Y:r.Y}});function a0(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,o=n.n,c=n.o;if(t==="a2"){o==="className"?bd(r,o,c):r[o]=c;continue}var i=r[t]||(r[t]={});t==="a3"&&o==="class"?bd(i,o,c):i[o]=c}return r}function bd(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function It(e,r){var n=e.$;if(n===5)return It(e.k||(e.k=e.m()),r);if(n===0)return Wr.createTextNode(e.a);if(n===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var c={j:o,p:r},i=It(t,c);return i.elm_event_node_ref=c,i}if(n===3){var i=e.h(e.g);return n0(i,r,e.d),i}var i=e.f?Wr.createElementNS(e.f,e.c):Wr.createElement(e.c);cu&&e.c=="a"&&i.addEventListener("click",cu(i)),n0(i,r,e.d);for(var f=e.e,$=0;$<f.length;$++)Ql(i,It(n===1?f[$]:f[$].b,r));return i}function n0(e,r,n){for(var t in n){var o=n[t];t==="a1"?k7(e,o):t==="a0"?j7(e,r,o):t==="a3"?x7(e,o):t==="a4"?w7(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function k7(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function x7(e,r){for(var n in r){var t=r[n];typeof t<"u"?e.setAttribute(n,t):e.removeAttribute(n)}}function w7(e,r){for(var n in r){var t=r[n],o=t.f,c=t.o;typeof c<"u"?e.setAttributeNS(o,n,c):e.removeAttributeNS(o,n)}}function j7(e,r,n){var t=e.elmFs||(e.elmFs={});for(var o in n){var c=n[o],i=t[o];if(!c){e.removeEventListener(o,i),t[o]=void 0;continue}if(i){var f=i.q;if(f.$===c.$){i.q=c;continue}e.removeEventListener(o,i)}i=L7(r,c),e.addEventListener(o,i,t0&&{passive:T0(c)<2}),t[o]=i}}var t0;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){t0=!0}}))}catch{}function L7(e,r){function n(t){var o=n.q,c=Ea(o.a,t);if(sn(c)){for(var i=T0(o),f=c.a,$=i?i<3?f.a:f.V:f,s=i==1?f.b:i==3&&f._,d=(s&&t.stopPropagation(),(i==2?f.b:i==3&&f.Y)&&t.preventDefault(),e),b,g;b=d.j;){if(typeof b=="function")$=b($);else for(var g=b.length;g--;)$=b[g]($);d=d.p}d($,s)}}return n.q=r,n}function T7(e,r){return e.$==r.$&&rc(e.a,r.a)}function md(e,r){var n=[];return un(e,r,n,0),n}function ia(e,r,n,t){var o={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(o),o}function un(e,r,n,t){if(e!==r){var o=e.$,c=r.$;if(o!==c)if(o===1&&c===2)r=B7(r),c=1;else{ia(n,0,t,r);return}switch(c){case 5:for(var i=e.l,f=r.l,$=i.length,s=$===f.length;s&&$--;)s=i[$]===f[$];if(s){r.k=e.k;return}r.k=r.m();var d=[];un(e.k,r.k,d,0),d.length>0&&ia(n,1,t,d);return;case 4:for(var b=e.j,g=r.j,p=!1,y=e.k;y.$===4;)p=!0,typeof b!="object"?b=[b,y.j]:b.push(y.j),y=y.k;for(var _=r.k;_.$===4;)p=!0,typeof g!="object"?g=[g,_.j]:g.push(_.j),_=_.k;if(p&&b.length!==g.length){ia(n,0,t,r);return}(p?!z7(b,g):b!==g)&&ia(n,2,t,g),un(y,_,n,t+1);return;case 0:e.a!==r.a&&ia(n,3,t,r.a);return;case 1:pd(e,r,n,t,M7);return;case 2:pd(e,r,n,t,D7);return;case 3:if(e.h!==r.h){ia(n,0,t,r);return}var k=o0(e.d,r.d);k&&ia(n,4,t,k);var L=r.i(e.g,r.g);L&&ia(n,5,t,L);return}}}function z7(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function pd(e,r,n,t,o){if(e.c!==r.c||e.f!==r.f){ia(n,0,t,r);return}var c=o0(e.d,r.d);c&&ia(n,4,t,c),o(e,r,n,t)}function o0(e,r,n){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var c=o0(e[o],r[o]||{},o);c&&(t=t||{},t[o]=c);continue}if(!(o in r)){t=t||{},t[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var i=e[o],f=r[o];i===f&&o!=="value"&&o!=="checked"||n==="a0"&&T7(i,f)||(t=t||{},t[o]=f)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function M7(e,r,n,t){var o=e.e,c=r.e,i=o.length,f=c.length;i>f?ia(n,6,t,{v:f,i:i-f}):i<f&&ia(n,7,t,{v:i,e:c});for(var $=i<f?i:f,s=0;s<$;s++){var d=o[s];un(d,c[s],n,++t),t+=d.b||0}}function D7(e,r,n,t){for(var o=[],c={},i=[],f=e.e,$=r.e,s=f.length,d=$.length,b=0,g=0,p=t;b<s&&g<d;){var y=f[b],_=$[g],k=y.a,L=_.a,w=y.b,I=_.b,R=void 0,B=void 0;if(k===L){p++,un(w,I,o,p),p+=w.b||0,b++,g++;continue}var Y=f[b+1],W=$[g+1];if(Y){var Q=Y.a,ue=Y.b;B=L===Q}if(W){var ve=W.a,Pe=W.b;R=k===ve}if(R&&B){p++,un(w,Pe,o,p),mi(c,o,k,I,g,i),p+=w.b||0,p++,pi(c,o,k,ue,p),p+=ue.b||0,b+=2,g+=2;continue}if(R){p++,mi(c,o,L,I,g,i),un(w,Pe,o,p),p+=w.b||0,b+=1,g+=2;continue}if(B){p++,pi(c,o,k,w,p),p+=w.b||0,p++,un(ue,I,o,p),p+=ue.b||0,b+=2,g+=1;continue}if(Y&&Q===ve){p++,pi(c,o,k,w,p),mi(c,o,L,I,g,i),p+=w.b||0,p++,un(ue,Pe,o,p),p+=ue.b||0,b+=2,g+=2;continue}break}for(;b<s;){p++;var y=f[b],w=y.b;pi(c,o,y.a,w,p),p+=w.b||0,b++}for(;g<d;){var Me=Me||[],_=$[g];mi(c,o,_.a,_.b,void 0,Me),g++}(o.length>0||i.length>0||Me)&&ia(n,8,t,{w:o,x:i,y:Me})}var hd="_elmW6BL";function mi(e,r,n,t,o,c){var i=e[n];if(!i){i={c:0,z:t,r:o,s:void 0},c.push({r:o,A:i}),e[n]=i;return}if(i.c===1){c.push({r:o,A:i}),i.c=2;var f=[];un(i.z,t,f,i.r),i.r=o,i.s.s={w:f,A:i};return}mi(e,r,n+hd,t,o,c)}function pi(e,r,n,t,o){var c=e[n];if(!c){var i=ia(r,9,o,void 0);e[n]={c:1,z:t,r:o,s:i};return}if(c.c===0){c.c=2;var f=[];un(t,c.z,f,o),ia(r,9,o,{w:f,A:c});return}pi(e,r,n+hd,t,o)}function gd(e,r,n,t){hi(e,r,n,0,0,r.b,t)}function hi(e,r,n,t,o,c,i){for(var f=n[t],$=f.r;$===o;){var s=f.$;if(s===1)gd(e,r.k,f.s,i);else if(s===8){f.t=e,f.u=i;var d=f.s.w;d.length>0&&hi(e,r,d,0,o,c,i)}else if(s===9){f.t=e,f.u=i;var b=f.s;if(b){b.A.s=e;var d=b.w;d.length>0&&hi(e,r,d,0,o,c,i)}}else f.t=e,f.u=i;if(t++,!(f=n[t])||($=f.r)>c)return t}var g=r.$;if(g===4){for(var p=r.k;p.$===4;)p=p.k;return hi(e,p,n,t,o+1,c,e.elm_event_node_ref)}for(var y=r.e,_=e.childNodes,k=0;k<y.length;k++){o++;var L=g===1?y[k]:y[k].b,w=o+(L.b||0);if(o<=$&&$<=w&&(t=hi(_[k],L,n,t,o,w,i),!(f=n[t])||($=f.r)>c))return t;o=w}return t}function _d(e,r,n,t){return n.length===0?e:(gd(e,r,n,t),uu(e,n))}function uu(e,r){for(var n=0;n<r.length;n++){var t=r[n],o=t.t,c=A7(o,t);o===e&&(e=c)}return e}function A7(e,r){switch(r.$){case 0:return F7(e,r.s,r.u);case 4:return n0(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return uu(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var c=r.s,t=0;t<c.i;t++)e.removeChild(e.childNodes[c.v]);return e;case 7:for(var c=r.s,n=c.e,t=c.v,o=e.childNodes[t];t<n.length;t++)e.insertBefore(It(n[t],r.u),o);return e;case 9:var c=r.s;if(!c)return e.parentNode.removeChild(e),e;var i=c.A;return typeof i.r<"u"&&e.parentNode.removeChild(e),i.s=uu(e,c.w),e;case 8:return I7(e,r);case 5:return r.s(e);default:fn(10)}}function F7(e,r,n){var t=e.parentNode,o=It(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function I7(e,r){var n=r.s,t=V7(n.y,r);e=uu(e,n.w);for(var o=n.x,c=0;c<o.length;c++){var i=o[c],f=i.A,$=f.c===2?f.s:It(f.z,r.u);e.insertBefore($,e.childNodes[i.r])}return t&&Ql(e,t),e}function V7(e,r){if(e){for(var n=Wr.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],c=o.A;Ql(n,c.c===2?c.s:It(c.z,r.u))}return n}}function c0(e){if(e.nodeType===3)return e0(e.textContent);if(e.nodeType!==1)return e0("");for(var r=P,n=e.attributes,t=n.length;t--;){var o=n[t],c=o.name,i=o.value;r=Fn(a(iu,c,i),r)}for(var f=e.tagName.toLowerCase(),$=P,s=e.childNodes,t=s.length;t--;)$=Fn(c0(s[t]),$);return v(Ya,f,r,$)}function B7(e){for(var r=e.e,n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var H7,R7=H7||J(function(e,r,n,t){return Jl(r,t,e.rk,e.uh,e.aA,function(o,c){var i=e.ur,f=t.node,$=c0(f);return yd(c,function(s){var d=i(s),b=md($,d);f=_d(f,$,b,o),$=d})})}),E7,U7=E7||J(function(e,r,n,t){return Jl(r,t,e.rk,e.uh,e.aA,function(o,c){var i=e.j6&&e.j6(o),f=e.ur,$=Wr.title,s=Wr.body,d=c0(s);return yd(c,function(b){cu=i;var g=f(b),p=Ya("body")(P)(g.kV),y=md(d,p);s=_d(s,d,y,o),d=p,cu=0,$!==g.ok&&(Wr.title=$=g.ok)})})}),q7=typeof cancelAnimationFrame<"u"?cancelAnimationFrame:function(e){clearTimeout(e)},gi=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function yd(e,r){r(e);var n=0;function t(){n=n===1?0:(gi(t),r(e),1)}return function(o,c){e=o,c?(r(e),n===2&&(n=1)):(n===0&&gi(t),n=2)}}function DR(e){var r=e.sy,n=e.sz,t=function(){t.a(r(i0()))};return U7({j6:function(o){return t.a=o,In.addEventListener("popstate",t),In.navigator.userAgent.indexOf("Trident")<0||In.addEventListener("hashchange",t),l(function(c,i){if(!i.ctrlKey&&!i.metaKey&&!i.shiftKey&&i.button<1&&!c.target&&!c.hasAttribute("download")){i.preventDefault();var f=c.href,$=i0(),s=Mb(f).a;o(n(s&&$.nD===s.nD&&$.lY===s.lY&&$.nx.a===s.nx.a?J_(s):W_(f)))}})},rk:function(o){return v(e.rk,o,i0(),t)},ur:e.ur,uh:e.uh,aA:e.aA})}function i0(){return Mb(Wr.location.href).a||fn(1)}var AR=l(function(e,r){return a(Fi,lo,Gr(function(){r&&history.go(r),e()}))}),FR=l(function(e,r){return a(Fi,lo,Gr(function(){history.pushState({},"",r),e()}))}),IR=l(function(e,r){return a(Fi,lo,Gr(function(){history.replaceState({},"",r),e()}))}),Cd={addEventListener:function(){},removeEventListener:function(){}},fo=typeof document<"u"?document:Cd,In=typeof window<"u"?window:Cd,Y7=x(function(e,r,n){return Gl(Gr(function(t){function o(c){Nl(n(c))}return e.addEventListener(r,o,t0&&{passive:!0}),function(){e.removeEventListener(r,o)}}))}),N7=l(function(e,r){var n=Ea(e,r);return sn(n)?D(n.a):z});function VR(){return typeof Wr.hidden<"u"?{i1:"hidden",pz:"visibilitychange"}:typeof Wr.mozHidden<"u"?{i1:"mozHidden",pz:"mozvisibilitychange"}:typeof Wr.msHidden<"u"?{i1:"msHidden",pz:"msvisibilitychange"}:typeof Wr.webkitHidden<"u"?{i1:"webkitHidden",pz:"webkitvisibilitychange"}:{i1:"hidden",pz:"visibilitychange"}}function G7(){return Gr(function(e){var r=gi(function(){e(qa(Date.now()))});return function(){q7(r)}})}function O7(){return Gr(function(e){e(qa(Date.now()))})}function $u(e,r){return Gr(function(n){gi(function(){var t=document.getElementById(e);n(t?qa(r(t)):ql(Z_(e)))})})}function W7(e){return Gr(function(r){gi(function(){r(qa(e()))})})}var J7=l(function(e,r){return $u(r,function(n){return n[e](),io})});function BR(){return{nS:Pd(),oB:{dY:In.pageXOffset,e9:In.pageYOffset,ie:fo.documentElement.clientWidth,hb:fo.documentElement.clientHeight}}}function Pd(){var e=fo.body,r=fo.documentElement;return{ie:Math.max(e.scrollWidth,e.offsetWidth,r.scrollWidth,r.offsetWidth,r.clientWidth),hb:Math.max(e.scrollHeight,e.offsetHeight,r.scrollHeight,r.offsetHeight,r.clientHeight)}}var HR=l(function(e,r){return W7(function(){return In.scroll(e,r),io})});function RR(e){return $u(e,function(r){return{nS:{ie:r.scrollWidth,hb:r.scrollHeight},oB:{dY:r.scrollLeft,e9:r.scrollTop,ie:r.clientWidth,hb:r.clientHeight}}})}var Z7=x(function(e,r,n){return $u(e,function(t){return t.scrollLeft=r,t.scrollTop=n,io})});function ER(e){return $u(e,function(r){var n=r.getBoundingClientRect(),t=In.pageXOffset,o=In.pageYOffset;return{nS:Pd(),oB:{dY:t,e9:o,ie:fo.documentElement.clientWidth,hb:fo.documentElement.clientHeight},qq:{dY:t+n.left,e9:o+n.top,ie:n.width,hb:n.height}}})}function UR(e){return a(Fi,lo,Gr(function(r){Wr.location.reload(e)}))}function qR(e){return a(Fi,lo,Gr(function(r){try{In.location=e}catch{Wr.location.reload(!1)}}))}var X7=zr(function(e,r,n,t,o,c){var i=r!==9728&&r!==9729;return Gr(function(f){var $=new Image;function s(d){var b=d.createTexture();return d.bindTexture(d.TEXTURE_2D,b),d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,$),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,e),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,r),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,n),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,t),i&&d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null),b}$.onload=function(){var d=$.width,b=$.height,g=(d&d-1)===0,p=(b&b-1)===0,y=g&&p||!i&&n===33071&&t===33071;f(y?qa({$:0,pS:s,a:d,b}):ql(a(yS,d,b)))},$.onerror=function(){f(ql(_S))},c.slice(0,5)!=="data:"&&($.crossOrigin="Anonymous"),$.src=c})}),YR=function(e){return h(e.a,e.b)},K7=l(function(e,r){return new Float64Array([e,r])}),NR=function(e){return e[0]},GR=function(e){return e[1]},OR=l(function(e,r){return new Float64Array([e,r[1]])}),WR=l(function(e,r){return new Float64Array([r[0],e])}),JR=function(e){return{dY:e[0],e9:e[1]}},ZR=function(e){return new Float64Array([e.dY,e.e9])},XR=l(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n}),KR=l(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n}),QR=function(e){var r=new Float64Array(2);return r[0]=-e[0],r[1]=-e[1],r},eE=l(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/f0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function f0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}var rE=f0,aE=function(e){return e[0]*e[0]+e[1]*e[1]},nE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)}),tE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t}),oE=function(e){var r=new Float64Array(2),n=1/f0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r},cE=l(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n}),iE=l(function(e,r){return e[0]*r[0]+e[1]*r[1]}),u0=new Float64Array(3),Sd=new Float64Array(3),kd=new Float64Array(3),Q7=x(function(e,r,n){return new Float64Array([e,r,n])}),eh=function(e){return e[0]},rh=function(e){return e[1]},ah=function(e){return e[2]},fE=l(function(e,r){return new Float64Array([e,r[1],r[2]])}),uE=l(function(e,r){return new Float64Array([r[0],e,r[2]])}),$E=l(function(e,r){return new Float64Array([r[0],r[1],e])}),lE=function(e){return{dY:e[0],e9:e[1],kF:e[2]}},nh=function(e){return new Float64Array([e.dY,e.e9,e.kF])},vE=l(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function xd(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}var sE=l(xd),dE=function(e){var r=new Float64Array(3);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r};function wd(e,r,n){return n===void 0&&(n=new Float64Array(3)),_i(xd(e,r,n),n)}var bE=l(wd);function $0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}var mE=$0,pE=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},hE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+t*t+o*o)}),gE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return n*n+t*t+o*o});function _i(e,r){r===void 0&&(r=new Float64Array(3));var n=1/$0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var _E=_i,yE=l(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Vt=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]},CE=l(Vt);function l0(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}var PE=l(l0),SE=l(function(e,r){var n,t=u0,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Vt(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(Vt(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(Vt(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(Vt(r,t)+e[14])/n,o}),th=J(function(e,r,n,t){return new Float64Array([e,r,n,t])}),oh=function(e){return e[0]},ch=function(e){return e[1]},ih=function(e){return e[2]},fh=function(e){return e[3]},kE=l(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])}),xE=l(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])}),wE=l(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])}),jE=l(function(e,r){return new Float64Array([r[0],r[1],r[2],e])}),uh=function(e){return{dY:e[0],e9:e[1],kF:e[2],ut:e[3]}},$h=function(e){return new Float64Array([e.dY,e.e9,e.kF,e.ut])},LE=l(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n}),TE=l(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n}),zE=function(e){var r=new Float64Array(4);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r},ME=l(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/v0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function v0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}var DE=v0,AE=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]},FE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return Math.sqrt(n*n+t*t+o*o+c*c)}),IE=l(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return n*n+t*t+o*o+c*c}),VE=function(e){var r=new Float64Array(4),n=1/v0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r},lh=l(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n}),BE=l(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}),vh=new Float64Array(16),sh=new Float64Array(16),HE=new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),dh=function(e){var r=new Float64Array(16);return r[0]=e.mA,r[1]=e.mE,r[2]=e.mI,r[3]=e.mM,r[4]=e.mB,r[5]=e.mF,r[6]=e.mJ,r[7]=e.mN,r[8]=e.mC,r[9]=e.mG,r[10]=e.mK,r[11]=e.mO,r[12]=e.mD,r[13]=e.mH,r[14]=e.mL,r[15]=e.mP,r},bh=function(e){return{mA:e[0],mE:e[1],mI:e[2],mM:e[3],mB:e[4],mF:e[5],mJ:e[6],mN:e[7],mC:e[8],mG:e[9],mK:e[10],mO:e[11],mD:e[12],mH:e[13],mL:e[14],mP:e[15]}},RE=function(e){var r=new Float64Array(16);r[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],r[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],r[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],r[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],r[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],r[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],r[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],r[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],r[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],r[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],r[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],r[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5];var n=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12];if(n===0)return z;n=1/n;for(var t=0;t<16;t=t+1)r[t]=r[t]*n;return D(r)},EE=function(e){var r=Dd(e),n=[e[12],e[13],e[14]];return r[3]=r[7]=r[11]=0,r[12]=-Vt([r[0],r[4],r[8]],n),r[13]=-Vt([r[1],r[5],r[9]],n),r[14]=-Vt([r[2],r[6],r[10]],n),r};function jd(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2*o/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/(t-n),i[6]=0,i[7]=0,i[8]=(r+e)/(r-e),i[9]=(t+n)/(t-n),i[10]=-(c+o)/(c-o),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*c*o/(c-o),i[15]=0,i}var UE=zr(jd),qE=J(function(e,r,n,t){var o=n*Math.tan(e*Math.PI/360),c=-o,i=c*r,f=o*r;return jd(i,f,c,o,n,t)});function Ld(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-n),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2/(c-o),i[11]=0,i[12]=-(r+e)/(r-e),i[13]=-(t+n)/(t-n),i[14]=-(c+o)/(c-o),i[15]=1,i}var YE=zr(Ld),NE=J(function(e,r,n,t){return Ld(e,r,n,t,-1,1)});function Td(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[3],f=e[4],$=e[5],s=e[6],d=e[7],b=e[8],g=e[9],p=e[10],y=e[11],_=e[12],k=e[13],L=e[14],w=e[15],I=r[0],R=r[1],B=r[2],Y=r[3],W=r[4],Q=r[5],ue=r[6],ve=r[7],Pe=r[8],Me=r[9],ze=r[10],ar=r[11],ee=r[12],Ee=r[13],Ze=r[14],Oe=r[15];return n[0]=t*I+f*R+b*B+_*Y,n[1]=o*I+$*R+g*B+k*Y,n[2]=c*I+s*R+p*B+L*Y,n[3]=i*I+d*R+y*B+w*Y,n[4]=t*W+f*Q+b*ue+_*ve,n[5]=o*W+$*Q+g*ue+k*ve,n[6]=c*W+s*Q+p*ue+L*ve,n[7]=i*W+d*Q+y*ue+w*ve,n[8]=t*Pe+f*Me+b*ze+_*ar,n[9]=o*Pe+$*Me+g*ze+k*ar,n[10]=c*Pe+s*Me+p*ze+L*ar,n[11]=i*Pe+d*Me+y*ze+w*ar,n[12]=t*ee+f*Ee+b*Ze+_*Oe,n[13]=o*ee+$*Ee+g*Ze+k*Oe,n[14]=c*ee+s*Ee+p*Ze+L*Oe,n[15]=i*ee+d*Ee+y*Ze+w*Oe,n}var GE=l(Td),OE=l(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[4],f=e[5],$=e[6],s=e[8],d=e[9],b=e[10],g=e[12],p=e[13],y=e[14],_=r[0],k=r[1],L=r[2],w=r[4],I=r[5],R=r[6],B=r[8],Y=r[9],W=r[10],Q=r[12],ue=r[13],ve=r[14];return n[0]=t*_+i*k+s*L,n[1]=o*_+f*k+d*L,n[2]=c*_+$*k+b*L,n[3]=0,n[4]=t*w+i*I+s*R,n[5]=o*w+f*I+d*R,n[6]=c*w+$*I+b*R,n[7]=0,n[8]=t*B+i*Y+s*W,n[9]=o*B+f*Y+d*W,n[10]=c*B+$*Y+b*W,n[11]=0,n[12]=t*Q+i*ue+s*ve+g,n[13]=o*Q+f*ue+d*ve+p,n[14]=c*Q+$*ue+b*ve+y,n[15]=1,n}),WE=l(function(e,r){var n=new Float64Array(16);r=_i(r,u0);var t=r[0],o=r[1],c=r[2],i=Math.cos(e),f=1-i,$=Math.sin(e);return n[0]=t*t*f+i,n[1]=o*t*f+c*$,n[2]=c*t*f-o*$,n[3]=0,n[4]=t*o*f-c*$,n[5]=o*o*f+i,n[6]=o*c*f+t*$,n[7]=0,n[8]=t*c*f+o*$,n[9]=o*c*f-t*$,n[10]=c*c*f+i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}),JE=x(function(e,r,n){var t=new Float64Array(16),o=1/$0(r),c=r[0]*o,i=r[1]*o,f=r[2]*o,$=Math.cos(e),s=1-$,d=Math.sin(e),b=c*d,g=i*d,p=f*d,y=c*i*s,_=c*f*s,k=i*f*s,L=c*c*s+$,w=y+p,I=_-g,R=y-p,B=i*i*s+$,Y=k+b,W=_+g,Q=k-b,ue=f*f*s+$,ve=n[0],Pe=n[1],Me=n[2],ze=n[3],ar=n[4],ee=n[5],Ee=n[6],Ze=n[7],Oe=n[8],yr=n[9],qe=n[10],or=n[11],Tr=n[12],Ur=n[13],ja=n[14],Ba=n[15];return t[0]=ve*L+ar*w+Oe*I,t[1]=Pe*L+ee*w+yr*I,t[2]=Me*L+Ee*w+qe*I,t[3]=ze*L+Ze*w+or*I,t[4]=ve*R+ar*B+Oe*Y,t[5]=Pe*R+ee*B+yr*Y,t[6]=Me*R+Ee*B+qe*Y,t[7]=ze*R+Ze*B+or*Y,t[8]=ve*W+ar*Q+Oe*ue,t[9]=Pe*W+ee*Q+yr*ue,t[10]=Me*W+Ee*Q+qe*ue,t[11]=ze*W+Ze*Q+or*ue,t[12]=Tr,t[13]=Ur,t[14]=ja,t[15]=Ba,t});function zd(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}var ZE=x(zd),XE=function(e){return zd(e[0],e[1],e[2])},KE=J(function(e,r,n,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*n,o[9]=t[9]*n,o[10]=t[10]*n,o[11]=t[11]*n,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o}),QE=l(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=r[11]*c,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Md(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}var eU=x(Md),rU=function(e){return Md(e[0],e[1],e[2])},aU=J(function(e,r,n,t){var o=new Float64Array(16),c=t[0],i=t[1],f=t[2],$=t[3],s=t[4],d=t[5],b=t[6],g=t[7],p=t[8],y=t[9],_=t[10],k=t[11];return o[0]=c,o[1]=i,o[2]=f,o[3]=$,o[4]=s,o[5]=d,o[6]=b,o[7]=g,o[8]=p,o[9]=y,o[10]=_,o[11]=k,o[12]=c*e+s*r+p*n+t[12],o[13]=i*e+d*r+y*n+t[13],o[14]=f*e+b*r+_*n+t[14],o[15]=$*e+g*r+k*n+t[15],o}),nU=l(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=r[0],f=r[1],$=r[2],s=r[3],d=r[4],b=r[5],g=r[6],p=r[7],y=r[8],_=r[9],k=r[10],L=r[11];return n[0]=i,n[1]=f,n[2]=$,n[3]=s,n[4]=d,n[5]=b,n[6]=g,n[7]=p,n[8]=y,n[9]=_,n[10]=k,n[11]=L,n[12]=i*t+d*o+y*c+r[12],n[13]=f*t+b*o+_*c+r[13],n[14]=$*t+g*o+k*c+r[14],n[15]=s*t+p*o+L*c+r[15],n}),tU=x(function(e,r,n){var t=wd(e,r,u0),o=_i(l0(n,t,Sd),Sd),c=_i(l0(t,o,kd),kd),i=vh,f=sh;return i[0]=o[0],i[1]=c[0],i[2]=t[0],i[3]=0,i[4]=o[1],i[5]=c[1],i[6]=t[1],i[7]=0,i[8]=o[2],i[9]=c[2],i[10]=t[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=-e[0],f[13]=-e[1],f[14]=-e[2],f[15]=1,Td(i,f)});function Dd(e){var r=new Float64Array(16);return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],r}var oU=Dd,cU=x(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}),Ad=0;function yi(e,r){for(;r.b;r=r.b)e(r.a)}function s0(e){for(var r=0;e.b;e=e.b)r++;return r}var mh=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ph=Le(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),hh=l(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),gh=l(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),_h=l(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),yh=l(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Ch=l(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Ph=l(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Sh=l(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),kh=l(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),xh=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},wh=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},jh=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Lh=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Fd=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Id=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Th=function(e){e.gl.disable(e.gl.CULL_FACE)},zh=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Mh=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Dh=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Vd=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Ah=[wh,jh,Lh,Fd,Id,Th,zh,Mh,Dh];function Bd(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Fh(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Hd(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Ih(e,r,n,t){for(var o=n.a.lu,c=[],i=0;i<o;i++)c.push(String.fromCharCode(97+i));function f(p,y,_,k,L){var w;if(o===1)for(w=0;w<y;w++)p[_++]=y===1?k[L]:k[L][w];else c.forEach(function(I){for(w=0;w<y;w++)p[_++]=y===1?k[I][L]:k[I][L][w]})}var $=Hd(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var s=0,d=$.size*$.arraySize*o,b=new $.type(s0(n.b)*d);yi(function(p){f(b,$.size*$.arraySize,s,p,t[r.name]||r.name),s+=d},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,b,e.STATIC_DRAW),g}function Vh(e,r){if(r.a.l1>0){var n=e.createBuffer(),t=Bh(r.c,r.a.l1);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.lu*s0(r.b),indexBuffer:null,buffers:{}}}function Bh(e,r){var n=new Uint32Array(s0(e)*r),t=0,o;return yi(function(c){if(r===1)n[t++]=c;else for(o=0;o<r;o++)n[t++]=c[String.fromCharCode(97+o)]},e),n}function Rd(e,r){return e+"#"+r}var Ed=l(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Fd(n),Id(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(c){if(c.d.b.b){var i,f,$;if(c.b.id&&c.c.id&&(i=Rd(c.b.id,c.c.id),f=n.programs[i]),!f){var s;c.b.id?s=n.shaders[c.b.id]:c.b.id=Ad++,s||(s=Bd(t,c.b.src,t.VERTEX_SHADER),n.shaders[c.b.id]=s);var d;c.c.id?d=n.shaders[c.c.id]:c.c.id=Ad++,d||(d=Bd(t,c.c.src,t.FRAGMENT_SHADER),n.shaders[c.c.id]=d);var b=Fh(t,s,d);f={glProgram:b,attributes:Object.assign({},c.b.attributes,c.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},f.uniformSetters=Hh(t,e,f,Object.assign({},c.b.uniforms,c.c.uniforms));var g=t.getProgramParameter(b,t.ACTIVE_ATTRIBUTES);for($=0;$<g;$++){var p=t.getActiveAttrib(b,$),y=t.getAttribLocation(b,p.name);f.activeAttributes.push(p),f.activeAttributeLocations.push(y)}i=Rd(c.b.id,c.c.id),n.programs[i]=f}n.lastProgId!==i&&(t.useProgram(f.glProgram),n.lastProgId=i),Rh(f.uniformSetters,c.e);var _=n.buffers.get(c.d);for(_||(_=Vh(t,c.d),n.buffers.set(c.d,_)),$=0;$<f.activeAttributes.length;$++){p=f.activeAttributes[$],y=f.activeAttributeLocations[$],_.buffers[p.name]===void 0&&(_.buffers[p.name]=Ih(t,p,c.d,f.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[p.name]);var k=Hd(t,p.type);if(k.arraySize===1)t.enableVertexAttribArray(y),t.vertexAttribPointer(y,k.size,k.baseType,!1,0,0);else for(var L=k.size*4,w=L*k.arraySize,I=0;I<k.arraySize;I++)t.enableVertexAttribArray(y+I),t.vertexAttribPointer(y+I,k.size,k.baseType,!1,w,L*I)}for(n.toggle=!n.toggle,yi(EA(n),c.a),$=0;$<Vd.length;$++){var R=n[Vd[$]];R.toggle!==n.toggle&&R.enabled&&(Ah[$](n),R.enabled=!1,R.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(c.d.a.m0,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(c.d.a.m0,0,_.numIndices)}}return yi(o,e.g),r});function Hh(e,r,n,t){var o=n.glProgram,c=n.currentUniforms,i=0,f=r.f;function $(p,y){var _=y.name,k=e.getUniformLocation(p,_);switch(y.type){case e.INT:return function(w){c[_]!==w&&(e.uniform1i(k,w),c[_]=w)};case e.FLOAT:return function(w){c[_]!==w&&(e.uniform1f(k,w),c[_]=w)};case e.FLOAT_VEC2:return function(w){c[_]!==w&&(e.uniform2f(k,w[0],w[1]),c[_]=w)};case e.FLOAT_VEC3:return function(w){c[_]!==w&&(e.uniform3f(k,w[0],w[1],w[2]),c[_]=w)};case e.FLOAT_VEC4:return function(w){c[_]!==w&&(e.uniform4f(k,w[0],w[1],w[2],w[3]),c[_]=w)};case e.FLOAT_MAT4:return function(w){c[_]!==w&&(e.uniformMatrix4fv(k,!1,new Float32Array(w)),c[_]=w)};case e.SAMPLER_2D:var L=i++;return function(w){e.activeTexture(e.TEXTURE0+L);var I=f.textures.get(w);I||(I=w.pS(e),f.textures.set(w,I)),e.bindTexture(e.TEXTURE_2D,I),c[_]!==w&&(e.uniform1i(k,L),c[_]=w)};case e.BOOL:return function(w){c[_]!==w&&(e.uniform1i(k,w),c[_]=w)};default:return function(){}}}for(var s={},d=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),b=0;b<d;b++){var g=e.getActiveUniform(o,b);s[t[g.name]||g.name]=$(o,g)}return s}function Rh(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Eh=x(function(e,r,n){return v7(r,{g:n,f:{},h:e},Wh,Jh)}),Uh=l(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),qh=l(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Yh=l(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Nh=l(function(e,r){e.contextAttributes.antialias=!0}),Gh=l(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Oh=l(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Wh(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yi(function(o){return a(RA,r,o)},e.h);var n=Wr.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),mh(function(){return a(Ed,e,n)})):(n=Wr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Jh(e,r){return r.f=e.f,Ed(r)}var A=l8,lu=K9,d0=x(function(e,r,n){var t=n.c,o=n.d,c=l(function(i,f){if(i.$){var s=i.a;return v(lu,e,f,s)}else{var $=i.a;return v(lu,c,f,$)}});return v(lu,c,v(lu,e,r,o),t)}),Zh=function(e){return v(d0,A,P,e)},vu=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,f=e,$=v(e,t,o,v(vu,e,r,i)),s=c;e=f,r=$,n=s;continue e}}),Na=function(e){return v(vu,x(function(r,n,t){return a(A,h(r,n),t)}),P,e)},su=function(e){return v(vu,x(function(r,n,t){return a(A,r,t)}),P,e)},Xh=function(e){var r=e;return su(r)},Ud=1,Kh=2,qd=0,D=function(e){return{$:0,a:e}},z={$:1},La=function(e){return{$:1,a:e}},b0=l(function(e,r){return{$:3,a:e,b:r}}),Yd=l(function(e,r){return{$:0,a:e,b:r}}),Nd=l(function(e,r){return{$:1,a:e,b:r}}),Jr=function(e){return{$:0,a:e}},Qh=function(e){return{$:2,a:e}},iU=1,Gd=m8,eg=Q8,fU=H8,rg=$8,Od=D6,Xe=Xs,Mr=l(function(e,r){return a(J8,e,nu(r))}),$n=l(function(e,r){return u(a(W8,e,r))}),Wd=function(e){return a(Mr,`
    `,a($n,`
`,e))},se=x(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b,c=e,i=a(e,t,r),f=o;e=c,r=i,n=f;continue e}else return r}),Pr=function(e){return v(se,l(function(r,n){return n+1}),0,e)},Jd=v8,uU=c8,$U=p8,ag=x(function(e,r,n){e:for(;;)if(oe(e,r)<1){var t=e,o=r-1,c=a(A,r,n);e=t,r=o,n=c;continue e}else return n}),Vn=l(function(e,r){return v(ag,e,r,P)}),Bn=l(function(e,r){return v(Jd,e,a(Vn,0,Pr(r)-1),r)}),it=i6,Zd=function(e){var r=it(e);return 97<=r&&r<=122},Xd=function(e){var r=it(e);return r<=90&&65<=r},lU=R8,ng=function(e){return Zd(e)||Xd(e)},tg=function(e){var r=it(e);return r<=57&&48<=r},og=function(e){return Zd(e)||Xd(e)||tg(e)},Be=function(e){return v(se,A,P,e)},Ci=U8,cg=l(function(e,r){return`

(`+(Xe(e+1)+(") "+Wd(ig(r))))}),ig=function(e){return a(fg,e,P)},fg=l(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,i=e.b,t=(function(){var _=Ci(n);if(_.$===1)return!1;var k=_.a,L=k.a,w=k.b;return ng(L)&&a(eg,og,w)})(),o=t?"."+n:"['"+(n+"']"),$=i,s=a(A,o,r);e=$,r=s;continue e;case 1:var c=e.a,i=e.b,f="["+(Xe(c)+"]"),$=i,s=a(A,f,r);e=$,r=s;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var b=(function(){return r.b?"The Json.Decode.oneOf at json"+a(Mr,"",Be(r)):"Json.Decode.oneOf"})(),y=b+(" failed in the following "+(Xe(Pr(d))+" ways:"));return a(Mr,`

`,a(A,y,a(Bn,cg,d)))}else{var i=d.a,$=i,s=r;e=$,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+(function(){return r.b?" at json"+a(Mr,"",Be(r)):"!"})();default:var g=e.a,p=e.b,y=(function(){return r.b?"Problem with the value at json"+(a(Mr,"",Be(r))+`:

    `):`Problem with the given value:

`})();return y+(Wd(a(Od,4,p))+(`

`+g))}}),Dr=32,Bt=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),uo=q9,m0=D8,vU=g8,du=l(function(e,r){return Zs(r)/Zs(e)}),sU=z8,ln=m0(a(du,2,Dr)),p0=C(Bt,0,ln,uo,uo),Kd=G9,ac=function(e){return{$:1,a:e}},dU=l(function(e,r){return e(r)}),bU=l(function(e,r){return r(e)}),Ga=n8,Ht=A8,Hn=N9,mU=i8,we=l(function(e,r){return oe(e,r)>0?e:r}),ug=h8,nc=function(e){return{$:0,a:e}},h0=O9,$g=l(function(e,r){e:for(;;){var n=a(h0,Dr,e),t=n.a,o=n.b,c=a(A,nc(t),r);if(o.b){var i=o,f=c;e=i,r=f;continue e}else return Be(c)}}),vn=function(e){var r=e.a;return r},lg=l(function(e,r){e:for(;;){var n=m0(r/Dr);if(n===1)return a(h0,Dr,e).a;var t=a($g,e,P),o=n;e=t,r=o;continue e}}),g0=l(function(e,r){if(r.W){var n=r.W*Dr,t=Ht(a(du,Dr,n-1)),o=e?Be(r.ap):r.ap,c=a(lg,o,r.W);return C(Bt,Hn(r.af)+n,a(we,5,t*ln),c,r.af)}else return C(Bt,Hn(r.af),ln,uo,r.af)}),pU=_8,hU=o8,vg=Le(function(e,r,n,t,o){e:for(;;){if(r<0)return a(g0,!1,{ap:t,W:n/Dr|0,af:o});var c=ac(v(Kd,Dr,r,e)),i=e,f=r-Dr,$=n,s=a(A,c,t),d=o;e=i,r=f,n=$,t=s,o=d;continue e}}),gU=C8,_0=l(function(e,r){if(e<=0)return p0;var n=e%Dr,t=v(Kd,n,e-n,r),o=e-n-Dr;return V(vg,r,o,e,P,t)}),_U=0,sn=function(e){return!e.$},T=P6,ae=s6,yU=0,Qd=0,CU=5,ne=function(e){return e},PU=ne,mr=x(function(e,r,n){return oe(n,e)<0?e:oe(n,r)>0?r:n}),Oa=l(function(e,r){return F(r,{D:v(mr,0,1,r.D-e)})}),Wa=l(function(e,r){return F(r,{D:v(mr,0,1,r.D+e)})}),sg=l(function(e,r){return{bp:r.bp,ih:a(Wa,.14,r.bp),ii:a(Wa,.07,r.bp),ix:a(Wa,.13,r.tU),iy:a(Wa,.23,r.tU),dG:e,tU:r.tU,kh:a(Wa,.03,r.tU),ki:a(Wa,.06,r.tU),kj:a(Wa,.09,r.tU),kk:a(Oa,.03,r.tU),kl:a(Oa,.06,r.tU),km:a(Oa,.09,r.tU),kn:{oS:.6,aS:r.tU.aS,D:.92,a0:.08},kq:a(Oa,.5,r.dQ),t_:r.dQ,ks:a(Oa,.15,r.dQ)}}),dg=l(function(e,r){var n=r.dQ,t=n.D<.12?F(n,{D:.12}):n;return{bp:r.bp,ih:a(Oa,.14,r.bp),ii:a(Oa,.07,r.bp),ix:a(Oa,.13,r.tU),iy:a(Oa,.23,r.tU),dG:e,tU:r.tU,kh:a(Oa,.03,r.tU),ki:a(Oa,.06,r.tU),kj:a(Oa,.09,r.tU),kk:a(Wa,.03,r.tU),kl:a(Wa,.06,r.tU),km:a(Wa,.09,r.tU),kn:{oS:.88,aS:r.tU.aS,D:.18,a0:.1},kq:a(Wa,.5,t),t_:t,ks:a(Wa,.15,t)}}),bg=l(function(e,r){return r.ru?a(sg,r,{bp:e,tU:r.o3,dQ:r.qN}):a(dg,r,{bp:e,tU:r.o3,dQ:r.qN})}),eb=l(function(e,r){switch(e){case 0:return r.s5;case 1:return r.q$;case 2:return r.uN;case 3:return r.pb;case 4:return r.rI;default:return r.pW}}),Pi=l(function(e,r){return a(bg,a(eb,e,r),r)}),y0=u8,Ke=l(function(e,r){e:for(;;){if(r.$===-2)return z;var n=r.b,t=r.c,o=r.d,c=r.e,i=a(y0,e,n);switch(i){case 0:var f=e,$=o;e=f,r=$;continue e;case 1:return D(t);default:var f=e,$=c;e=f,r=$;continue e}}}),U=J(function(e,r,n,t){return{oS:t,aS:e,D:n,a0:r}}),mg={o3:C(U,.5833,.0952,.21,1),pa:C(U,.5833,.0952,.21,1),pb:C(U,.5718,.9231,.39,1),pj:C(U,.5667,.0505,.495,1),pk:C(U,.5673,.6341,.59,1),pl:C(U,.4869,.6,.575,1),pm:C(U,.4722,.6,.5,1),pn:C(U,.963,.5294,.575,1),po:C(U,.0224,1,.665,1),pp:C(U,0,0,1,1),pq:C(U,.1373,1,.575,1),pW:C(U,.4891,.7176,.425,1),qN:C(U,0,0,.96,1),q$:C(U,.4697,1,.33,1),ru:!0,rI:C(U,.7361,.6,.5,1),r8:"Erkal Dark",s5:C(U,.95,1,.5,1),uw:C(U,0,0,.82,1),uN:C(U,.1315,1,.45,1)},pg={o3:C(U,0,0,.96,1),pa:C(U,.5833,.0952,.21,1),pb:C(U,.5673,.8966,.29,1),pj:C(U,.5833,.0476,.42,1),pk:C(U,.5718,.9231,.39,1),pl:C(U,.4891,.7176,.425,1),pm:C(U,.4697,1,.33,1),pn:C(U,.963,.6,.375,1),po:C(U,.0288,.5909,.44,1),pp:C(U,0,0,.82,1),pq:C(U,.1315,1,.45,1),pW:C(U,.4845,.6825,.315,1),qN:C(U,.5833,.0952,.21,1),q$:C(U,.4551,1,.26,1),ru:!1,rI:C(U,.7167,.7143,.35,1),r8:"Erkal Light",s5:C(U,.95,1,.4,1),uw:C(U,0,0,.96,1),uN:C(U,.131,1,.35,1)},hg={o3:C(U,.6784,.5072,.1195,1),pa:C(U,.6784,.5072,.1195,1),pb:C(U,.6963,.7334,.3908,1),pj:C(U,.6596,.1664,.2542,1),pk:C(U,.6963,.8378,.5419,1),pl:C(U,.4985,.746,.7698,1),pm:C(U,.2473,.9215,.6656,1),pn:C(U,.8231,.9879,.5331,1),po:C(U,.9805,.9839,.5313,1),pp:C(U,.1717,.0624,.8829,1),pq:C(U,.1378,.9702,.5499,1),pW:C(U,.4985,.432,.6569,1),qN:C(U,.1708,.1275,.8046,1),q$:C(U,.2473,.6142,.5669,1),ru:!0,rI:C(U,.8231,.8982,.4245,1),r8:"Inferno",s5:C(U,.9804,.8923,.417,1),uw:C(U,.1712,.0491,.7129,1),uN:C(U,.1378,.8074,.4652,1)},gg={o3:C(U,.6758,.4926,.1233,1),pa:C(U,.6758,.4926,.1233,1),pb:C(U,.6963,.7334,.3908,1),pj:C(U,.6576,.1668,.257,1),pk:C(U,.6963,.8378,.5419,1),pl:C(U,.4985,.746,.7698,1),pm:C(U,.2989,.7749,.7169,1),pn:C(U,.8231,.9879,.5331,1),po:C(U,.9805,.9839,.5313,1),pp:C(U,.1241,.0824,.8856,1),pq:C(U,.1226,.912,.646,1),pW:C(U,.4985,.432,.6569,1),qN:C(U,.1238,.1697,.8105,1),q$:C(U,.2989,.48,.6076,1),ru:!0,rI:C(U,.8231,.8982,.4245,1),r8:"Magma",s5:C(U,.9804,.8923,.417,1),uw:C(U,.1239,.0643,.7167,1),uN:C(U,.1227,.6106,.5447,1)},$o={oS:1,aS:0,D:0,a0:0},Ja=Y8,Za=Z8,Xa=l(function(e,r){return e<1?r:v(Za,e,Ja(r),r)}),bu=t8,mu=E8,tc=function(e){return a(mu,e,"")},_g=function(e){switch(e){case"0":return D(0);case"1":return D(1);case"2":return D(2);case"3":return D(3);case"4":return D(4);case"5":return D(5);case"6":return D(6);case"7":return D(7);case"8":return D(8);case"9":return D(9);case"a":return D(10);case"b":return D(11);case"c":return D(12);case"d":return D(13);case"e":return D(14);case"f":return D(15);default:return z}},yg=O8,Si=function(e){return v(yg,A,P,e)},rb=K8,C0=function(e){return v(se,l(function(r,n){if(n.$===1){var t=n.a;return La(t)}else{var o=n.a,c=_g(r);if(c.$)return La("Invalid hex digit: "+tc(r));var i=c.a;return Jr(o*16+i)}}),Jr(0),Si(rb(e)))},Ye=l(function(e,r){return oe(e,r)<0?e:r}),Cg=x(function(e,r,n){var t=a(Ye,e,a(Ye,r,n)),o=a(we,e,a(we,r,n)),c=(o+t)/2,i=o-t;if(i<1e-10)return{oS:1,aS:0,D:c,a0:0};var f=c>.5?i/(2-o-t):i/(o+t),$=(function(){if(o-e<1e-10){var d=oe(r,n)<0?6:0;return(r-n)/i+d}else return o-r<1e-10?(n-e)/i+2:(e-r)/i+4})(),s=$/6;return{oS:1,aS:s,D:c,a0:f}}),Rn=r6,ab=function(e){var r=a(Rn,"#",e)?a(Xa,1,e):e;if(Ja(r)!==6)return La("Expected 6-character hex string, got: "+e);var n=v(Za,0,2,r),t=v(Za,2,4,r),o=v(Za,4,6,r),c=H(C0(n),C0(t),C0(o));if(!c.a.$&&!c.b.$&&!c.c.$){var i=c.a.a,f=c.b.a,$=c.c.a;return Jr(v(Cg,i/255,f/255,$/255))}else return La("Invalid hex color: "+e)},nb=l(function(e,r){if(r.$)return e;var n=r.a;return n}),m=l(function(e,r){var n=function(o){return a(nb,$o,ab(v(Za,o*6,(o+1)*6,r)))},t=n(17);return{o3:t,pa:n(0),pb:n(4),pj:n(8),pk:n(12),pl:n(14),pm:n(10),pn:n(13),po:n(9),pp:n(15),pq:n(11),pW:n(6),qN:n(16),q$:n(2),ru:t.D<.5,rI:n(5),r8:e,s5:n(1),uw:n(7),uN:n(3)}}),Pg={o3:C(U,.6338,.2131,.4193,1),pa:C(U,.6338,.2131,.4193,1),pb:C(U,.6711,.9819,.3556,1),pj:C(U,.6313,.1141,.4988,1),pk:C(U,.6733,.9724,.4995,1),pl:C(U,.5206,.9279,.6164,1),pm:C(U,.408,.9525,.6016,1),pn:C(U,.8129,.6577,.6082,1),po:C(U,.0348,.7434,.583,1),pp:C(U,.1588,.059,.8705,1),pq:C(U,.1378,.9702,.5499,1),pW:C(U,.5206,.6303,.518,1),qN:C(U,.1581,.1657,.844,1),q$:C(U,.408,.663,.5087,1),ru:!0,rI:C(U,.8129,.4325,.4851,1),r8:"Parula",s5:C(U,.0348,.5435,.4645,1),uw:C(U,.1584,.0494,.7011,1),uN:C(U,.1378,.8074,.4652,1)},Sg={o3:C(U,.6497,.2697,.2788,1),pa:C(U,.6497,.2697,.2788,1),pb:C(U,.6963,.7334,.3908,1),pj:C(U,.6441,.1308,.3827,1),pk:C(U,.6963,.8378,.5419,1),pl:C(U,.4985,.746,.7698,1),pm:C(U,.2594,.8806,.6797,1),pn:C(U,.8231,.9879,.5331,1),po:C(U,.9805,.9839,.5313,1),pp:C(U,.1553,.0578,.8652,1),pq:C(U,.1378,.9702,.5499,1),pW:C(U,.4985,.432,.6569,1),qN:C(U,.1544,.1443,.7845,1),q$:C(U,.2594,.5758,.578,1),ru:!0,rI:C(U,.8231,.8982,.4245,1),r8:"Plasma",s5:C(U,.9804,.8923,.417,1),uw:C(U,.1549,.0495,.696,1),uN:C(U,.1378,.8074,.4652,1)},kg={o3:C(U,.7616,.2492,.257,1),pa:C(U,.7616,.2492,.257,1),pb:C(U,.6711,.9819,.3556,1),pj:C(U,.7582,.1116,.3649,1),pk:C(U,.6733,.9724,.4995,1),pl:C(U,.5003,1,.4968,1),pm:C(U,.367,.9956,.5641,1),pn:C(U,.7883,.876,.5781,1),po:C(U,.0151,.5947,.5814,1),pp:C(U,.1828,.0453,.8406,1),pq:C(U,.1749,.9924,.6211,1),pW:C(U,.5003,1,.4251,1),qN:C(U,.1818,.1003,.7645,1),q$:C(U,.3705,.8413,.4617,1),ru:!0,rI:C(U,.7886,.6673,.4517,1),r8:"Viridis",s5:C(U,.015,.4413,.4578,1),uw:C(U,.1823,.0425,.6725,1),uN:C(U,.1749,.7036,.5343,1)},tb=u([a(m,"Argonaut","232323ff000f8ce10bffb900008df86d43a600d8ebffffff444444ff2740abe15bffd2420092ff9a5feb67fff0fffffffffaf40e1019"),a(m,"0x96f","262427ff666db3e03affc73900cde8a392e89deaf6fcfcfa545452ff7e83bee55effd05e1bd5ebb0a3ebacedf8fcfcfafcfcfa262427"),a(m,"12-bit Rainbow","000000a0305040d080e090403060b06030900090c0dbded8685656c0606090d050e0d00000b0c080107020b0c0fffffffeffff040404"),a(m,"3024 Day","090300db2d2001a252caba0001a0e4a16a948fbecea5a2a25c5855dbaec33a34324a4543807d7cbcbbbacdab53f7f7f74a4543f7f7f7"),a(m,"3024 Night","090300db2d2001a252fded0201a0e4a16a94b5e4f4a5a2a25c5855e8bbd047413f4a4543807d7cd6d5d4cdab53f7f7f7a5a2a2090300"),a(m,"Aardvark Blue","191919aa342e4b8c0fdbba001370d3c43ac3008eb0bebebe525252f05b5095dc55ffe76360a4ece26be260b6cbf7f7f7dddddd102040"),a(m,"Abernathy","000000cd000000cd00cdcd001093f5cd00cd00cdcdfaebd7404040ff000000ff00ffff0011b5f6ff00ff00ffffffffffeeeeec111416"),a(m,"Adventure","040404d84a335da602eebb6e417ab3e5c499bdcfe5dbded8685656d76b4299b52cffb67097d7efaa7900bdcfe5e4d5c7feffff040404"),a(m,"Adventure Time","050404bd00134ab118e7741e0f4ac666599370a598f8dcc04e7cbffc5f5a9eff6eefc11a1997c69b5953c8faf4f6f5fbf8dcc01f1d45"),a(m,"Adwaita","241f31c01c282ec27ee8b5041e78e49841bb0ab9dcc0bfbc5e5c64ed333b4ad67cd2be3651a1ffc061cb4fd2fdf6f5f4000000ffffff"),a(m,"Adwaita Dark","241f31c01c282ec27ef5c2111e78e49841bb0ab9dcc0bfbc5e5c64ed333b57e389f8e45c51a1ffc061cb4fd2fdf6f5f4ffffff1d1d20"),a(m,"Afterglow","151515ac41427e8e50e5b5676c99bb9f4e857dd6cfd0d0d0505050ac41427e8e50e5b5676c99bb9f4e857dd6cff5f5f5d0d0d0212121"),a(m,"Aizen Dark","1a1a1af08898a4e09cf5dea484b4f8c8a2f490dcd0d0d6f0444444f08898a4e09cf5dea484b4f8c8a2f490dcd0ffffffd0d6f01a1a1a"),a(m,"Aizen Light","f0f2f6d00c363e9e28dd8c1a1c64f28636ec1590964a4d66adb2bcd00c363e9e28dd8c1a1c64f28636ec1590964a4d664a4d66f0f2f6"),a(m,"Alabaster","000000aa3731448c27cb9000325cc07a3e9d0083b2b7b7b7777777f0505060cb00f2af50007acce64ce600aacbf7f7f7000000f7f7f7"),a(m,"Alien Blood","1126167f2b272f7e25717f242f6a7f47587f327f77647d753c4812e0800918e000bde00000aae00058e000e0c473fa91637d750f1610"),a(m,"Andromeda","000000cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5666666cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5e5e5e5262a33"),a(m,"Apple Classic","000000c91b0000c200c7c4001c3fe1ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffd5a2002c2b2b"),a(m,"Apple System Colors","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74bffd60a0a84ffbf5af276d6ffffffffffffff1e1e1e"),a(m,"Apple System Colors Light","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74be5bc000a84ffbf5af269c9f2ffffff000000feffff"),a(m,"Arcoiris","333333da270012c258ffc656518bfce37bd963fad5bab2b2777777ffb9b9e3f6aaffddaab3e8f3cbbaf9bcffc7efefefeee4d9201f1e"),a(m,"Ardoise","2c2c2cd3322d588b35fca93a2465c27332b464e1b8f7f7f7535353fa58528dc252ffea516ab5f8be68ca89ffdbfefefeeaeaea1e1e1e"),a(m,"Arthur","3d352acd5c5c86af80e8ae5b6495eddeb887b0c4debbaa99554444cc553388aa22ffa75d87ceeb996600b0c4deddccbbddeedd1c1c1c"),a(m,"Atelier Sulphurpool","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b294f587c5e6687898ea4dfe2f19c637af5f7ff979db4202746"),a(m,"Atom","000000fd5ff187c38affd7b185befdb9b6fc85befde0e0e04c4c4cfd5ff194fa36f5ffa896cbfeb9b6fc85befde0e0e0c5c8c6161719"),a(m,"Atom One Dark","21252be06c7598c379e5c07b61afefc678dd56b6c2abb2bf767676e06c7598c379e5c07b61afefc678dd56b6c2abb2bfabb2bf21252b"),a(m,"Atom One Light","000000de3e353f953ad2b67c2f5af39500953f953abbbbbb000000de3e353f953ad2b67c2f5af3a000953f953affffff2a2c33f9f9f9"),a(m,"Aura","110f18ff676761ffcaffca85a277ffa277ff61ffcaedecee4d4d4dffca85a277ffffca85a277ffa277ff61ffcaedeceeedecee15141b"),a(m,"Aurora","23262ef0266f8fd46dffe66d102ee4ee5d4303d6b8c74ded4f545ef926728fd46dffe66d03d6b8ee5d4303d6b8c74dedffca2823262e"),a(m,"Ayu","11151cea6c737fd962f9af4f53bdfacda1fa90e1c6c7c7c7686868f07178aad94cffb45459c2ffd2a6ff95e6cbffffffbfbdb60b0e14"),a(m,"Ayu Light","000000ea6c6d6cbf43eca9443199e19e75c746ba94bababa686868f0717186b300f2ae49399ee6a37acc4cbf99d1d1d15c6166f8f9fa"),a(m,"Ayu Mirage","171b24ed827487d96cfacc6e6dcbfadabafa90e1c6c7c7c7686868f28779d5ff80ffd17373d0ffdfbfff95e6cbffffffcccac21f2430"),a(m,"Banana Blueberry","17141fff6b7f00bd9ce6c62f22e8dfdc396a56b6c2f1f1f1495162fe9ea198c379f9e46b91fff4da70d6bcf3ffffffffcccccc191323"),a(m,"Batman","1b1d1ee6dc44c8be46f4fd2273717474727162605fc6c5bf505354fff78efff27dfeed6c9194959a9a9da3a3a6dadbd66f6f6f1b1d1e"),a(m,"Belafonte Day","20111bbe100e858162d08b30426a7997522c989a9c968c835e5252be100e858162d08b30426a7997522c989a9cd5ccba45373cd5ccba"),a(m,"Belafonte Night","20111bbe100e858162eaa549426a7997522c989a9c968c835e5252be100e858162eaa549426a7997522c989a9cd5ccba968c8320111b"),a(m,"Birds Of Paradise","573d26be2d266ba18ae99d2a5a86adac80a674a6ade0dbb79b6c4ae8462795d8bad0d150b8d3edd19ecb93cfd7fff9d5e0dbb72a1f1d"),a(m,"Black Metal","000000486e6fdd9999a06666888888999999aaaaaac1c1c1404040486e6fdd9999a06666888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Bathory)","0000005f8787fbcb97e78a53888888999999aaaaaac1c1c14040405f8787fbcb97e78a53888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Burzum)","0000005f8787ddeecc99bbaa888888999999aaaaaac1c1c14040405f8787ddeecc99bbaa888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Dark Funeral)","0000005f8787d0dfee5f81a5888888999999aaaaaac1c1c14040405f8787d0dfee5f81a5888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Gorgoroth)","0000005f87879b8d7f8c7f70888888999999aaaaaac1c1c14040405f87879b8d7f8c7f70888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Immortal)","0000005f87877799bb556677888888999999aaaaaac1c1c14040405f87877799bb556677888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Khold)","0000005f8787eceee3974b46888888999999aaaaaac1c1c14040405f8787eceee3974b46888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Marduk)","0000005f8787a5aaa7626b67888888999999aaaaaac1c1c14040405f8787a5aaa7626b67888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Mayhem)","0000005f8787f3ecd4eecc6c888888999999aaaaaac1c1c14040405f8787f3ecd4eecc6c888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Nile)","0000005f8787aa9988777755888888999999aaaaaac1c1c14040405f8787aa9988777755888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Venom)","0000005f8787f8f7f279241f888888999999aaaaaac1c1c14040405f8787f8f7f279241f888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Blazer","000000b87a7a7ab87ab8b87a7a7ab8b87ab87ab8b8d9d9d94c4c4cdbbdbdbddbbddbdbbdbdbddbdbbddbbddbdbffffffd9e6f20d1926"),a(m,"Blue Berry Pie","0a4c6299246e5cb1b3eab9a890a5bd9d54a77e83ccf0e8d6463c5dc872720a6c7e7a31885f3d63bc94b75e60710a6c7ebabab91c0c28"),a(m,"Blue Dolphin","292d3eff8288b4e88df4d69f82aaffe9c1ff89ebffd0d0d09094a4ff8b92ddffa7ffe5859cc4ffddb0f6a3f7ffffffffc5f2ff006984"),a(m,"Blue Matrix","101116ff568000ff9cfffc5800b0ffd57bff76c1ffc7c7c7686868ff6e675ffa68fffc676871ffd682ec60fdffffffff00a2ff101116"),a(m,"Bluloco Dark","41444dfc2f5225a45cff936a3476ff7a82da4483aacdd4e08f9aaeff64803fc56bf9c85910b1feff78f85fb9bcffffffb9c0cb282c34"),a(m,"Bluloco Light","373a41d5275323974adf631c275fe4823ff127618dbabbc2676a77ff64803cbc66c5a3320099e1ce33c06d93bbd3d3d3373a41f9f9f9"),a(m,"Borland","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffffff4e0000a4"),a(m,"Box","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffff9fef00141d2b"),a(m,"Breadog","362c24b10b000072328b4c00005cb49b0097006a78baa99d514337de1100008f40ae60000074e1c300bd008697eae1da362c24f1ebe6"),a(m,"Breeze","31363bed151511d116f674001d99f39b59b61abc9ceff0f17f8c8dc0392b1cdc9afdbc4b3daee98e44ad16a085fcfcfceff0f131363b"),a(m,"Bright Lights","191919ff355bb7e876ffc25176d4ffba76e76cbfb5c2c8d74c4c4cff355bb7e876ffc25176d5ffba76e76cbfb5c2c8d7b3c9d7191919"),a(m,"Broadcast","000000da4939519f50ffd24a6d9cbed0d0ff6e9cbeffffff585858ff7b6b83d182ffff7c9fcef0ffffffa0cef0ffffffe6e1dc2b2b2b"),a(m,"Brogrammer","1f1f1ff811182dc55eecba0f2a84d24e5ab71081d6d6dbe5d6dbe5de352e1dd361f3bd091081d65350b90f7ddbffffffd6dbe5131313"),a(m,"Builtin Dark","000000bb000000bb00bbbb000d0dc8bb00bb00bbbbbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Builtin Light","000000bb000000bb00bbbb000000bbbb00bb00bbbbbbbbbb555555ff55552fd92fbfbf155555ffff55ff22ccccffffff000000ffffff"),a(m,"Builtin Pastel Dark","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffbbbbbb000000"),a(m,"Builtin Tango Dark","000000cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeecffffff000000"),a(m,"Builtin Tango Light","000000cc00004e9a06c4a0003465a475507b06989ab9bdb5555753ef29297dd527d6c329729fcfad7fa827d5d5eeeeec000000ffffff"),a(m,"C64","090300a2524c55a049bfce726657b3984ca367b6bdffffff000000a2524c55a049bfce726657b3984ca367b6bdf7f7f77869c440318d"),a(m,"CGA","000000aa000000aa00aa55000d0db7aa00aa00aaaaaaaaaa555555ff555555ff55ffff555555ffff55ff55ffffffffffaaaaaa000000"),a(m,"CLRS","000000f8282a328a5dfa701d135cd09f00bd33c3c1b3b3b3555753fb04162cc631e3bd0e1670ffe900b03ad5ceeeeeec262626ffffff"),a(m,"Calamity","2f2833fc644da5f69ce9d7a53b79c7f9267274d3ded5ced97e6c88fc644da5f69ce9d7a53b79c7f9267274d3deffffffd5ced92f2833"),a(m,"Carbonfox","282828ee539625be6a08bdba78a9ffbe95ff33b1ffdfdfe0484848f16da646c8802dc7c48cb6ffc8a5ff52bdffe4e4e5f2f4f8161616"),a(m,"Catppuccin Frappe","51576de78284a6d189e5c8908caaeef4b8e481c8bea5adce626880e671728ec772d9ba737b9ef0f2a4db5abfb5b5bfe2c6d0f5303446"),a(m,"Catppuccin Latte","5c5f77d20f3940a02bdf8e1d1e66f5ea76cb179299acb0be6c6f85de293e49af3deea02d456efffe85d82d9fa8bcc0cc4c4f69eff1f5"),a(m,"Catppuccin Macchiato","494d64ed8796a6da95eed49f8aadf4f5bde68bd5caa5adcb5b6078ec74868ccf7fe1c68278a1f6f2a9dd63cbc0b8c0e0cad3f524273a"),a(m,"Catppuccin Mocha","45475af38ba8a6e3a1f9e2af89b4faf5c2e794e2d5a6adc8585b70f3779989d88bebd39174a8fcf2aede6bd7cabac2decdd6f41e1e2e"),a(m,"Chalk","7d8b8fb23a52789b6ab9ac4a2a7facbd4f5a44a799d2d8d9888888f2484080c470ffeb624196fffc527553cdbdd2d8d9d2d8d92b2d2e"),a(m,"Chalkboard","000000c3737272c373c2c3727372c3c372c272c2c3d9d9d9585858dbaaaaaadbaadadbaaaaaadbdbaadaaadadbffffffd9e6f229262f"),a(m,"Challenger Deep","141228ff545862d196ffb37865b2ff906cff63f2f1a6b3cc565575ff808095ffa4ffe9aa91ddffc991e1aaffe4cbe3e7cbe1e71e1c31"),a(m,"Chester","080200fa5e5b16c98dffc83f288ad6d3459028dddee7e7e76f6b68fa5e5b16c98dfeef6d278ad6d3459027dedeffffffffffff2c3643"),a(m,"Ciapre","1818188e0d1648513bcc8b3f576d8c724d7c5c4f4baea47f555555ac3835a6a75ddcdf7c3097c6d33061f3dbb2f4f4f4aea47a191c27"),a(m,"Citruszest","404040ff545400cc7affd40000bfffff90fe48d1ccbfbfbf808080ff1a751affa3ffff0033cfffffb2fe00fff2f9f9f9bfbfbf121212"),a(m,"Cobalt Neon","142631ff23203ba5ffe9e75c8ff586781aa08ff586ba46b2fff688d4312e8ff586e9f06d3c7dd28230a76cbc678ff5868ff586142838"),a(m,"Cobalt Next","000000ff527b8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea162c35"),a(m,"Cobalt Next Dark","262f37f949678cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(m,"Cobalt Next Minimal","323d47ff657a8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(m,"Cobalt2","000000ff000038de21ffe50a1460d2ff005d00bbbbbbbbbb555555f40e173bd01dedc8095555ffff55ff6ae3faffffffffffff132738"),a(m,"Coffee Theme","000000c91b0000c200adaa000225c7ca30c700b8baa1a1a1686868ff6e671fba28b2af1b6871fff26af220bdbfffffff000000f5deb3"),a(m,"Crayon Pony Fish","2b1b1d91002b579524ab311b8c87b0692f50e8a86668525a4a383bc5255d8dff57c8381dcfc9fffc6cbaffceafb0949d68525a150707"),a(m,"Cursor Dark","2a2a2abf616aa3be8cebcb8b81a1c1b48ead88c0d0d8dee9505050bf616aa3be8cebcb8b81a1c1b48ead88c0d0ffffffffffff141414"),a(m,"Cutie Pro","000000f56e7fbec975f5866942d9c5d286b737cb8ad5c3c388847fe5a1a3e8d6a7f1bb7980c5deb294bb9dccbbffffffd5d0c9181818"),a(m,"Cyberdyne","080808ff837300c172d2a7000071cfff90fe6bffddf1f1f1484848ffc4bed6fcbafffed5c2e3ffffb2fee6e7feffffff00ff92151144"),a(m,"Cyberpunk","000000ff709200fbacfffa6a00bfffdf95ff86cbfeffffff595959ff8aa421f6bcfff7871bccfde6aefe99d6fcffffffe5e5e5332a57"),a(m,"Cyberpunk Scarlet Protocol","101116ff005101dc84faf9450271b6c930c700c5c7c7c7c7686868ff6e6760fa68fffc676871ffbd35ec60fdffffffffe41951101116"),a(m,"Dark Modern","272727f749492ea0439e6a030078d4d012731db4d6cccccc5d5d5ddc545223d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1f1f1f"),a(m,"Dark Pastel","000000ff555555ff55ffff555555ffff55ff55ffffbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffffffff000000"),a(m,"Dark+","000000cd31310dbc79e5e5102472c8bc3fbc11a8cde5e5e5666666f14c4c23d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1e1e1e"),a(m,"Darkermatrix","0910131a48316fa64c59590000cb6b4e375a1254591a48334040400d452a90d762e2e50000ff874e375a176c7300381e35451a070c0e"),a(m,"Darkmatrix","0910130065366fa64c7e80002c9a84523a60114d5300653640404000733d90d762e2e50046d8b8573d6612545a0065363e5715070c0e"),a(m,"Darkside","000000e8341c68c256f2d42c1c98e88e69c91c98e8bababa4c4c4ce05a4f77b869efd64b387cd3957bbe3d97e2babababababa222324"),a(m,"Dawnfox","575279b4637a618774ea9d34286983907aa956949fb2b6bd5f5695c26d85629f81eea8462d81a39a80b95ca7b4e6ebf3575279faf4ed"),a(m,"Dayfox","352c24a5222f396847ac54022848a96e33ce287980bfb6ae534c45b3434e577f63b86e284863b68452d5488d93f4ece63d2b5af6f2ee"),a(m,"Deep","000000d700051cd915d9bd265665ffb052da50d2dae0e0e0535353fb000722ff18fedc2b9fa9ffe09aff8df9ffffffffcdcdcd090909"),a(m,"Desert","4d4d4dff2b2b98fb98f0e68ccd853fffdeadffa0a0f5deb3626262ff555555ff55ffff5587ceffff55ffffd700ffffffffffff333333"),a(m,"Detuned","171717fe4386a6e32de6da730094d99b37ff50b7d9c7c7c7686868fa80acbde371fff27f00beffbe9eff5ed7ffffffffc7c7c7000000"),a(m,"Dimidium","000000cf494c60b442db9c110575d8af5ed21db6bbbab7b6817e7eff643b37e57bfccd1a688dfded6fe932e0fbdee3e4bab7b6141414"),a(m,"Dimmed Monokai","3a3d43be3f48879a3bc5a6354f76a1855c8d578fa4b9bcba888987fb001f0f722fc47033186de3fb00672e706dfdffb9b9bcba1f1f1f"),a(m,"Django","000000fd620941a83effe862315d3ff8f8f89df39fffffff585858ff943b73da70ffff94568264ffffffcfffd1fffffff8f8f80b2f20"),a(m,"Django Reborn Again","000000fd620941a83effe862245032f8f8f89df39fffffff4c4c4cff943b73da70ffff94568264ffffffcfffd1ffffffdadedc051f14"),a(m,"Django Smooth","000000fd620941a83effe862989898f8f8f89df39fe8e8e7727272ff943b73da70ffff94cacacaffffffcfffd1fffffff8f8f8245032"),a(m,"Doom One","000000ff6c6b98be65ecbe7ba9a1e1c678dd51afefbbc2cf595959ff665599bb66ecbe7ba9a1e1c678dd51afefbfbfbfbbc2cf282c34"),a(m,"Doom Peacock","1c1f24cb4b1626a6a6bcd42a2a6cc6a9a1e15699afede0ce51504dff5d3898be65e6f97251afefc678dd46d9ffdfdfdfede0ce2b2a27"),a(m,"Dot Gov","191919bf091d3d9751f6bb3417b2e07830b08bd2edffffff595959bf091d3d9751f6bb3417b2e07830b08bd2edffffffebebeb262c35"),a(m,"Dracula","21222cff555550fa7bf1fa8cbd93f9ff79c68be9fdf8f8f26272a4ff6e6e69ff94ffffa5d6acffff92dfa4fffffffffff8f8f2282a36"),a(m,"Dracula+","21222cff555550fa7bffcb6b82aaffc792ea8be9fdf8f8f2545454ff6e6e69ff94ffcb6bd6acffff92dfa4fffff8f8f2f8f8f2212121"),a(m,"Duckbones","0e101ae036005dcd97e3950000a3cb795ccc00a3cbebefc0444860ff482158db9ef6a10000b4e0b3a1e600b4e0b3b692ebefc00e101a"),a(m,"Duotone Dark","1f1d27d9393e2dcd73d9b76effc284de8d402488ffb7a1ff4e4a60d9393e2dcd73d9b76effc284de8d402488ffeae5ffb7a1ff1f1d27"),a(m,"Duskfox","393552eb6f92a3be8cf6c177569fbac4a7e79ccfd8e0def4544d8af083a2b1d196f9cb8c65b1cdccb1eda6dae3e2e0f7e0def4232136"),a(m,"ENCOM","0000009f0000008b00ffd0000081ffbc00ca008b8bbbbbbb555555ff000000ee00ffff000000ffff00ff00cdcdffffff00a595000000"),a(m,"Earthsong","121418c9423485c54cf5ae2e1398b9d0633d509552e5c6aa675f54ff645a98e036e0d5615fdaffff926984f088f6f7ece5c7a9292520"),a(m,"Electron Highlighter","15161fff6c8d00ffc3ffd7a977abffdaa4f400fdff778faf4a6789ff6c8d00ffc3ffd7a977abffdaa4f400fdffc3cee2a5b6d423283d"),a(m,"Elegant","0a1222ff025785cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ff005785cc95ffcb8b8dabe1c792eb3facefffffffced2d6292b31"),a(m,"Elemental","3c3c3098290f479a437f7111497f7d7f4e2f387f58807974555445e0502a61e070d6992779d9d9cd7c5459d599fff1e9807a7422211d"),a(m,"Elementary","242424d71c155aa513fdb40c134899e400382595e1efefef4b4b4bfc1c186bc219fec80e0955fffb00503ea8fc8c00ecefefef181818"),a(m,"Embark","1e1c31f0719ba1efd3ffe9aa57c7ffc792ea87dfebf8f8f2585273f02e6e2ce592ffb3781da0e2a742ea63f2f1a6b3cceeffff1e1c31"),a(m,"Embers Dark","16130f826d5757826d6d82576d578282576d576d82a39a905a504782825746403950483f8a8075beb6ae825757dbd6d1a39a9016130f"),a(m,"Espresso","353535d25252a5c261ffc66d6c99bbd197d9bed6ffeeeeec606060f00c0cc2e075e1e48b8ab7d9efb5f7dcf4ffffffffffffff323232"),a(m,"Espresso Libre","000000cc00001a921cf0e53a0066ffc5656b06989ad3d7cf555753ef29299aff87fffb5c43a8edff818a34e2e2eeeeecb8a8982a211c"),a(m,"Everblush","232a2de574748ccf7ee5c76b67b0e8c47fd56cbfbfb3b9b8464e50ef7e7e96d988f4d67a71baf2ce89df67cbe7bdc3c2dadada141b1e"),a(m,"Everforest Dark Hard","7a8478e67e80a7c080dbbc7f7fbbb3d699b683c092f2efdfa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbefd3c6aa1e2326"),a(m,"Everforest Light Med","7a8478e67e809ab373c1a2667fbbb3d699b683c092b2af9fa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbef5c6a72efebd4"),a(m,"Fahrenheit","1d1d1dcda0749e744dfecf757f0e0f734c4d979797ffffce404040fecea0cc734dfd9f4dcb4a054e739ffed04dffffffffffce000000"),a(m,"Fairyfloss","040303f92672c2ffdfe6c000c2ffdfffb8d1c5a3fff8f8f06090cbff857fc2ffdfffea00c2ffdfffb8d1c5a3fff8f8f0f8f8f25a5475"),a(m,"Farmhouse Dark","1d2027ba0004549d00c873000049e69f1b611fb65ce8e4e1464d54eb00097ac100ea9a00006efebf3b7f19e062f4eef0e8e4e11d2027"),a(m,"Farmhouse Light","1d20278d00033a7d00a95600092ccd820046229256a8a4a1394047eb00097ac100ea9a00006efebf3b7f00c649f4eef01d2027e8e4e1"),a(m,"Fideloper","292f33cb1e2dedb8acb7ab9b2e78c2c0236f309186eae3ce496068d4605ad4605aa866717c85c45c5db2819090fcf4dfdbdae0292f33"),a(m,"Firefly Traditional","000000c2372033bc26afad245a63ffd53ad233bbc7cccccc828282ff3b1e2ee720ecec16838dffff5cfe29f0f0ebebebf5f5f5000000"),a(m,"Firefox Dev","002831e638535eb83ca57706359ddfd75cff4b73a2dcdcdc26444de1003f1d9000cd9409006fc0a200da005794e2e2e27c8fa40e1011"),a(m,"Firewatch","585f6dd953605ab977dfb5634d89c4d5511944a8b6e6e5ff585f6dd953605ab977dfb5634c89c5d5511944a8b6e6e5ff9ba2b21e2027"),a(m,"Fish Tank","03073cc6004aacf157fecd5e525fb8986f82968763ecf0fc6c5b30da4b8adbffa9fee6a9b2befafda5cda5bd86f6ffececf0fe232537"),a(m,"Flat","222d3fa8232032a548e58d113167ac781aa02c9370b0b6ba475262d4312e2d9440e5be0c3c7dd28230a735b387e7eced2cc55d002240"),a(m,"Flatland","1d1d19f183399fd364f4ef6d5096be695abcd63865ffffff50504cd22a24a7d42cff894961b9d0695abcd63865ffffffb8dbef1d1f21"),a(m,"Flexoki Dark","100f0fd14d41879a39d0a2154385bece5d973aa99f878580575653af302966800bad8301205ea6a02f6f24837bcecdc3cecdc3100f0f"),a(m,"Flexoki Light","100f0faf302966800bad8301205ea6a02f6f24837b6f6e69b7b5acd14d41879a39d0a2154385bece5d973aa99fcecdc3100f0ffffcf0"),a(m,"Floraverse","08002e7e1a465d731acd751c1d6da1b7077e42a38cf3e0b84c3866d02063b4ce59fac35740a4cff12aae62caa8fff5dbdbd1b90e0d15"),a(m,"Forest Blue","333333f8818e92d3a21a8e638ed0ce5e468c31658ce2d8cd4a4a4afb3d666bb48d30c85a39a7a27e62b36096bfe2d8cde2d8cd051519"),a(m,"Framer","141414ff555598ec65ffcc3300aaffaa88ff88ddffcccccc414141ff8888b6f292ffd96633bbffcebbffbbecffffffff777777111111"),a(m,"Front End Delight","242526f8511b565747fa771d2c70b7f02e4f3ca1a6adadad5fac6df7431974ec4cfdc3253393cae75e4f4fbce68c735badadad1b1c1d"),a(m,"Fun Forrest","000000d6262b919c00be8a134699a38d4331da8213ddc2657f6a55e55a1cbfc65affcb1b7cc9cfd26349e6a96bffeaa3dec165251200"),a(m,"Galaxy","000000f9555f21b089fef02a589df6944d951f9ee7bbbbbb555555fa8c8f35bb9affff55589df6e756993979bcffffffffffff1d2837"),a(m,"Galizur","223344aa112233aa11ccaa222255cc7755aa22bbdd8899aa556677ff113333ff11ffdd333377ffaa77ff33ddffbbccddddeeff071317"),a(m,"Ghostty Default Style Dark","1d1f21cc6566b6bd68f0c67482a2beb294bb8abeb7c4c8c6666666d54e53b9ca4be7c5477aa6dac397d870c0b1eaeaeaffffff282c34"),a(m,"GitHub","3e3e3e970b1607962ac5bb94003e8ae946917cc4dfb2b2b2666666de00007ac895d7b6002e6cbaf2959200c7cbffffff3e3e3ef4f4f4"),a(m,"GitHub Dark","000000f7816656d364e3b3416ca4f8db61a22b7489ffffff4d4d4df7816656d364e3b3416ca4f8db61a22b7489ffffff8b949e101216"),a(m,"GitHub Dark Colorblind","484f58ec8e2c58a6ffd2992258a6ffbc8cff39c5cfb1bac46e7681fdac5479c0ffe3b34179c0ffd2a8ff56d4ddffffffc9d1d90d1117"),a(m,"GitHub Dark Default","484f58ff7b723fb950d2992258a6ffbc8cff39c5cfb1bac46e7681ffa19856d364e3b34179c0ffd2a8ff56d4ddffffffe6edf30d1117"),a(m,"GitHub Dark Dimmed","545d68f4706757ab5ac69026539bf5b083f039c5cf909dab636e7bff938a6bc46ddaaa3f6cb6ffdcbdfb56d4ddcdd9e5adbac722272e"),a(m,"GitHub Dark High Contrast","7a828eff949226cd4df0b72f71b7ffcb9eff39c5cfd9dee39ea7b3ffb1af4ae168f7c84391cbffdbb7ff56d4ddfffffff0f3f60a0c10"),a(m,"GitHub Light Colorblind","24292fb359000550ae4d2d000969da8250df1b7c836e778157606a8a46000969da633c01218bffa475f93192aa8c959f24292fffffff"),a(m,"GitHub Light Default","24292fcf222e1163294d2d000969da8250df1b7c836e778157606aa40e261a7f37633c01218bffa475f93192aa8c959f1f2328ffffff"),a(m,"GitHub Light High Contrast","0e1116a0111f024c1a3f22000349b4622cbc1b7c8366707b4b535d86061d055d204e2c001168e3844ae73192aa88929d0e1116ffffff"),a(m,"GitLab Dark","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff28262b"),a(m,"GitLab Dark Grey","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff222222"),a(m,"GitLab Light","303030a317000a7f3daf551d006cd8583cac00798a303030303030a317000a7f3daf551d006cd8583cac00798a303030303030fafaff"),a(m,"Glacier","2e343cbd0f2f35a770fb94351f5872bd2523778397ffffff404a55bd0f2f49e998fddf6e2a8bc1ea4727a0b6d3ffffffffffff0c1115"),a(m,"Grape","2d283fed22611fa91b8ddc20487df48d35c93bdeed9e9ea059516af0729a53aa5eb2dc87a9bcecad81c29de3eba288f79f9fa1171423"),a(m,"Grass","000000ff595900bb00e7b0000000a3ee59bb00bbbbbbbbbb959595ff595900bb00e7b0000000bbff55ff55fffffffffffff0a513773d"),a(m,"Grey Green","000000fe141474ff00f1ff0100deffff00f000ffbcffffff666666ff393900ff44ffd10000afffff008a00ffd3f5ececffffff002a1a"),a(m,"Gruber Darker","181818ff0a3642dc00ffdb0092a7cba095cb90aa9ee4e4e454494eff385142dc00ffdb0092a7cbafafda90aa9ef5f5f5e4e4e4181818"),a(m,"Gruvbox Dark","282828cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb2282828"),a(m,"Gruvbox Dark Hard","1d2021cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb21d2021"),a(m,"Gruvbox Light","fbf1c7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836fbf1c7"),a(m,"Gruvbox Light Hard","f9f5d7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836f9f5d7"),a(m,"Gruvbox Material","141617ea6926c1d041eecf756da3ecfd9bc1fe9d6effffff4c4c4cd3573bc1d041eecf752c86fffd9bc192a5dfffffffd4be981d2021"),a(m,"Gruvbox Material Dark","282828ea6962a9b665d8a6577daea3d3869b89b482d4be987c6f64ea6962a9b665d8a6577daea3d3869b89b482ddc7a1d4be98282828"),a(m,"Gruvbox Material Light","fbf1c7c14a4a6c782eb4710945707a945e804c7a5d654735a89984c14a4a6c782eb4710945707a945e804c7a5d4f3829654735fbf1c7"),a(m,"Guezwhoz","333333e851817ad694b7d0745aa0d69a90e058d6ced9d9d9808080e85181afd7afd1ed8564b2eda398ed61ede4edededd9d9d91d1d1d"),a(m,"HaX0R Blue","01092110b6ff10b6ff10b6ff10b6ff10b6ff10b6fffafafa48415700b3f700b3f700b3f700b3f700b3f700b3f7fefefe11b7ff010515"),a(m,"HaX0R Gr33N","001f0b15d00d15d00d15d00d15d00d15d00d15d00dfafafa33484319e20e19e20e19e20e19e20e19e20e19e20efefefe16b10e020f01"),a(m,"HaX0R R3D","1f0000b00d0db00d0db00d0db00d0db00d0db00d0dfafafa554040ff1111ff1010ff1010ff1010ff1010ff1010fefefeb10e0e200101"),a(m,"Hacktober","191918b34538587744d08949206ec5864651ac9166f1eee7464444b3332342824ac75a225389c5e795a5ebc587ffffffc9c9c9141414"),a(m,"Hardcore","1b1d1ef92672a6e22efd971f66d9ef9e6ffe5e7175ccccc6505354ff669dbeed5fe6db7466d9ef9e6ffea3babff8f8f2a0a0a0121212"),a(m,"Harper","010101f8b63f7fb5e1d6da25489e48b296c6f5bfd7a8a49d726e6af8b63f7fb5e1d6da25489e48b296c6f5bfd7fefbeaa8a49d010101"),a(m,"Havn Daggry","1f2842985248577159be6b003a577d7c5c97925780b0b5c51f2842cc4a35719679f1a5276089c07d7396aa869dd6dbeb3b4a7af8f9fb"),a(m,"Havn Skumring","252c47ea563e6ead7bf8b330596cf77c719ed588c1dce0ee38425cd172648c9e8feac58c5186cb9b7ceed17ab6fff6e1d6dbeb111522"),a(m,"Heeler","000000e44c2ebdd100f4ce655ba5f2ff95c2ff9763ffffff4c4c4ce44c2ebdd100f4ce650088ffff95c28da6e4fffffffdfdfd211f46"),a(m,"Highway","000000d00e18138034ffcb3e006bb3783482455271ededed5d504af07e18b1d130fff1204fc2fdde00715d504affffffededed222225"),a(m,"Hipster Green","000000b6214a00a600bfbf00246eb2b200b200a6b2bfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e584c138100b05"),a(m,"Hivacruz","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b2973ad435e6687898ea4dfe2f19c637af5f7ffede4e4132638"),a(m,"Homebrew","00000099000000a6009999000d0dbfb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e500ff00000000"),a(m,"Hopscotch","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379fd8b195c545c5c545b989498d5d3d5b33508ffffffb9b5b8322931"),a(m,"Hopscotch.256","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379dd464c8fc13efdcc591290bfc85e7c149b93ffffffb9b5b8322931"),a(m,"Horizon","000000e9567829d398fab79526bbd9ee64ac59e1e3e5e5e5666666ec6a883fdaa4fbc3a73fc4def075b56be4e6e5e5e5d5d8da1c1e26"),a(m,"Horizon Bright","16161dfc477700ca86f2a68200beddff58b100cdcbbfafac1a1c24fe5f8700d193e5a68800c9e2ff6cba00c3c2fff2ef16161dfdf0ed"),a(m,"Hot Dog Stand","000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6ffffffea3323"),a(m,"Hot Dog Stand (Mustard)","000000ea3323ea3323ea3323000000ea3323000000b9b9b9000000ea3323ea3323ea3323000000ea3323000000c6c6c6000000ffff54"),a(m,"Hurtado","575757ff1b00a5e055fbe74a496487fd5ff186e9fecbcccb404040d51d00a5df55fbe84a89beffc001c186eafedbdbdbdbdbdb000000"),a(m,"Hybrid","2a2e33b84d51b3bf5ae4b55e6e90b0a17eac7fbfb4b5b9b64345488d2e32798431e58a504b6b886e50794d7b745a626ab7bcba161719"),a(m,"IBM 5153 CGA","141414d033331bd01bd08c1b1b1bd0d01bd01bd0d0cecece4e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffcecece141414"),a(m,"IBM 5153 CGA (Black)","000000c4000000c400c47e000000c4c400c400c4c4c4c4c44e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffc4c4c4000000"),a(m,"IC Green PPL","014401ff273641a63876a8312ec3b950a0963ca078e6fef2106910b4fa5caefb86dafa872efaeb50fafa3cfac8e0f1dce0f1dc2c2c2c"),a(m,"IC Orange PPL","000000c13900a4a900caaf00bd6d00fc5e00f79500ffc88a6a4f2aff8c68f6ff40ffe36effbe55fc874fc69752fafaffffcb83262626"),a(m,"IR Black","4f4f4ffa6c60a8ff60fffeb796cafefa73fdc6c5feefedef7b7b7bfcb6b0cfffabffffccb5dcfffb9cfee0e0fefffffff1f1f1000000"),a(m,"IRIX Console","1a1919d4242637a327c29d280739e2911f9c4497dfcccccc767676f34f5945c731f9f2a74079ffc31ba26ed7d7f2f2f2f2f2f20c0c0c"),a(m,"IRIX Terminal","1a1919ff2b1e57ff3dffff440004ffff2cff56ffffffffffffff44ffff44ffff44fffc72ffff44ffff44ffff44ffff44f2f2f2000043"),a(m,"Iceberg Dark","1e2132e27878b4be82e2a47884a0c6a093c789b8c2c6c8d16b7089e98989c0ca8ee9b18991acd1ada0d395c4ced2d4dec6c8d1161821"),a(m,"Iceberg Light","dcdfe7cc517a668e3dc573392d539e7759b43f83a633374c8389a3cc3768598030b6662d22478e6845ad327698262a3f33374ce8e9ec"),a(m,"Idea","adadadfc525698b61cccb444437ee79d74b02488874b4b4bfffffffc707298b61cffff0b6c9cedfc7eff248887181818adadad202020"),a(m,"Idle Toes","323232d252527fe173ffc66d4099fff680ffbed6ffeeeeec606060f070709dff91ffe48b5eb7f7ff9dffdcf4ffffffffffffff323232"),a(m,"Jackie Brown","2c1d16ef57342baf2bbebf00246eb2d05ec100aceebfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e5ffcc2f2c1d16"),a(m,"Japanesque","343935cf3f617bb75be9b32a4c9ad4a57fc4389aadfafaf6595b59d18fa6767f2c78592f13597960429176bbcab2b5aef7f6ec1e1e1e"),a(m,"Jellybeans","929292e2737394b979ffba7b97bedce1c0fa00988edededebdbdbdffa1a1bddeabffdca0b1d8f6fbdaff1ab2a8ffffffdedede121212"),a(m,"JetBrains Darcula","000000fa5355126e00c2c3004581ebfa54ff33c2c1adadad555555fb717267ff4fffff006d9df1fb82ff60d3d1eeeeeeadadad202020"),a(m,"Jubi","3b3750cf7b9890a94b6ebfc0576ea6bc4f6875a7d2c3d3dea874cede90abbcdd6187e9ea8c9fcde16c87b7c9efd5e5f1c3d3de262b33"),a(m,"Kanagawa Dragon","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a6a69ce4687687a987e6c3847fb4ca938aa97aa89fc5c9c5c5c9c5181616"),a(m,"Kanagawa Lotus","1f1f28c840536f894e77713f4d699bb35b79597b755454648a8980d7474b6e915f836f4a6693bf624c835e857a43436c545464f2ecbc"),a(m,"Kanagawa Wave","090618c3404376946ac0a36e7e9cd8957fb86a9589c8c093727169e8242498bb6ce6c3847fb4ca938aa97aa89fdcd7badcd7ba1f1f28"),a(m,"Kanagawabones","1f1f28e46a7898bc6de5c2837eb3c9957fb87eb3c9ddd8bb49495eec818c9ec967f1c9827bc2dfa98fd27bc2dfa8a48dddd8bb1f1f28"),a(m,"Kanso Ink","14171dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c714171d"),a(m,"Kanso Mist","22262dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2a4a7a45c6066e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c722262d"),a(m,"Kanso Pearl","22262dc840536f894e77713f4d699bb35b79597b755454646d6f6ed7474b6e915f836f4a6693bf624c835e857a43436c22262df2f1ef"),a(m,"Kanso Zen","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c7090e13"),a(m,"Kibble","4d4d4dc7003129cf13d8e30e3449d18400ff0798abe2d1e35a5a5af015786ce05cf3f79e97a4f7c495f068f2e0fffffff7f7f70e100a"),a(m,"Kitty Default","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffdddddd000000"),a(m,"Kitty Low Contrast","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffffffff333333"),a(m,"Kolorit","1d1a1eff5b8247d7a1e8e5625db4eeda6cda57e9ebededed504d51ff5b8247d7a1e8e5625db4eeda6cda57e9ebedededefecec1d1a1e"),a(m,"Konsolas","000000aa171718b218ebae1f2323a5ad1edc42b0c8c8c1c17b716eff41415fff5fffff554b4bffff54ff69ffffffffffc8c1c1060606"),a(m,"Kurokula","333333c35a5278b3a9e1b9175c91dd8b79a6867268e0cfc2515151ffc34cafffa5fff70090dbffad93ffffcdb6ffffffe0cfc2141515"),a(m,"Lab Fox","2e2e2efc6d263eb383fca121db3b216b40a86e49cbffffff535353ff651753eaa8fca013db501f6a36b67d53e7ffffffffffff2e2e2e"),a(m,"Laser","626262ff8373b4fb7309b4bdfed300ff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5f92883ffb2fee6e7fefffffff106e3030d18"),a(m,"Later This Evening","2b2b2bd45a60afba67e5d289a0bad6c092d691bfb7494a4a525454d3232faabb39e5be396699d6ab53d65fc0aec1c2c2959595222222"),a(m,"Lavandula","2300467d1625337e6f7f6f494f4a7f5a3f7f58777f736e7d443a53e0516752e0c4e0c3868e87e0a776e09ad4e08c91fa736e7d050014"),a(m,"Light Owl","403f53de3d3b08916ae0af02288ed7d6438a2aa298bdbdbd989fb1de3d3b08916adaaa01288ed7d6438a2aa298f0f0f0403f53fbfbfb"),a(m,"Liquid Carbon","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc595959ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2303030"),a(m,"Liquid Carbon Transparent","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc404040ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2000000"),a(m,"Lovelace","282a36f37f975adecdf2a2728897f4c574dd79e6f3fdfdfd4e5165ff497118e3c8ff8037556fffb043d13fdceebebec1fdfdfd1d1f28"),a(m,"Man Page","000000cc000000a6009999000000b2b200b200a6b2b2b2b2666666e5000000cc00bfbf000000ffe500e500cbcbe5e5e5000000fef49c"),a(m,"Mariana","000000ec5f6699c794f9ae586699ccc695c65fb4b4f7f7f7666666f97b58acd1a8fac76185add6d8b6d882c4c4ffffffd8dee9343d46"),a(m,"Material","212121b7141f457b24f6981e134eb25600880e717cafafaf424242e83b3f7aba3abfaa0054a4f3aa4dbc26bbd1d9d9d9232322eaeaea"),a(m,"Material Dark","212121b7141f457b24f6981e134eb2701aa20e717cefefef4f4f4fe83b3f7aba3affea2e54a4f3aa4dbc26bbd1d9d9d9e5e5e5232322"),a(m,"Material Darker","000000ff5370c3e88dffcb6b82aaffc792ea89ddffffffff545454ff5370c3e88dffcb6b82aaffc792ea89ddffffffffeeffff212121"),a(m,"Material Design Colors","435b67fc38415cf19efed03237b6fffc226e59ffd1ffffffa1b0b8fc746dadf7befee16c70cffffc669b9affe6ffffffe7ebed1d262a"),a(m,"Material Ocean","546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff8f93a20f111a"),a(m,"Mathias","000000e52222a6e32dfc951ec48dfffa257367d9f0f2f2f2555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Matrix","0f191c23755a82d967ffd7003f524240993150b45a5073506880602fc07990d762faff004f7e7e11ff25c1ff8a678c614266440f191c"),a(m,"Matte Black","333333d35f5fffc107b91c1ce68e0dd35f5fbebebebebebe8a8a8d891c1cffc107b90a0af59e0bb91c1ceaeaeaffffffbebebe121212"),a(m,"Medallion","000000b64c007c8b16d3bd26616bb08c5a90916c25cac29a5e5219ff9149b2ca3bffe54aacb8ffffa0ffffbc51fed698cac2961d1908"),a(m,"Melange Dark","34302cbd818378997ae49b5d7f91b2b380b07b9695c1a78e867462d4776685b695ebc06da3a9cecf9bc289b3b6ece1d7ece1d7292522"),a(m,"Melange Light","e9e1dbc77b8b6e9b72bc5c007892bdbe79bb7397977d6658a98a78bf00213a684aa06d00465aa49041803d656854433a54433af1f1f1"),a(m,"Mellifluous","1a1a1ad29393b3b393cbaa89a8a1beb39fb0c0af8cdadada5b5b5bc95954828040a6794c5a65999c699574a39effffffdadada1a1a1a"),a(m,"Mellow","27272af5a19190b99fe6b99daca1cfe29ecaea83a5c1c0d4424246ffae9f9dc6acf0c5a9b9aedaecaad6f591b2cac9ddc9c7cd161617"),a(m,"Miasma","0000006857425f875fb36d4378824bbb7744c9a554d7c4836666666857425f875fb36d4378824bbb7744c9a554d7c483c2c2b0222222"),a(m,"Midnight In Mojave","1e1e1eff453a32d74bffd60a0a84ffbf5af25ac8faffffff515151ff453a32d74bffd60a0a84ffbf5af25ac8faffffffffffff1e1e1e"),a(m,"Mirage","011627ff999985cc95ffd7007fb5ffddb3ff21c7a8ffffff575656ff999985cc95ffd7007fb5ffddb3ff85cc95ffffffa6b2c01b2738"),a(m,"Misterioso","000000ff424274af68ffad29338f869414e623d7d7e1e1e0626262ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e02d3743"),a(m,"Molokai","121212fa257398e123dfd4601080d08700ff43a8d0bbbbbb555555f6669db1e05ffff26d00afffaf87ff51ceffffffffbbbbbb121212"),a(m,"Mona Lisa","351b0e9b291c636232c36e28515c5d9b1d29588056f7d75c874228ff4331b4b264ff95669eb2b4ff5b6a8acd8fffe598f7d66a120b0d"),a(m,"Monokai Classic","272822f92672a6e22ee6db74fd971fae81ff66d9effdfff16e7066f92672a6e22ee6db74fd971fae81ff66d9effdfff1fdfff1272822"),a(m,"Monokai Pro","2d2a2eff6188a9dc76ffd866fc9867ab9df278dce8fcfcfa727072ff6188a9dc76ffd866fc9867ab9df278dce8fcfcfafcfcfa2d2a2e"),a(m,"Monokai Pro Light","faf4f2e14775269d69cc7a0ae160327058be1c8ca829242aa59fa0e14775269d69cc7a0ae160327058be1c8ca829242a29242afaf4f2"),a(m,"Monokai Pro Light Sun","f8efe7ce4770218871b16803d4572b6851a22473b62c232ea59c9cce4770218871b16803d4572b6851a22473b62c232e2c232ef8efe7"),a(m,"Monokai Pro Machine","273136ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffc6b7678ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffcf2fffc273136"),a(m,"Monokai Pro Octagon","282a3aff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1696d77ff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1eaf2f1282a3a"),a(m,"Monokai Pro Ristretto","2c2525fd6883adda78f9cc6cf38d70a8a9eb85daccfff1f372696afd6883adda78f9cc6cf38d70a8a9eb85daccfff1f3fff1f32c2525"),a(m,"Monokai Pro Spectrum","222222fc618d7bd88ffce566fd9353948ae35ad4e6f7f1ff69676cfc618d7bd88ffce566fd9353948ae35ad4e6f7f1fff7f1ff222222"),a(m,"Monokai Remastered","1a1a1af4005f98e024fd971f9d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efd9d9d90c0c0c"),a(m,"Monokai Soda","1a1a1af4005f98e024fa84199d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efc4c5b51a1a1a"),a(m,"Monokai Vivid","121212fa293498e123fff30a0443fff800f801b6edffffff838383f6669db1e05ffff26d0443fff200f651cefffffffff9f9f9121212"),a(m,"Moonfly","323437ff54548cc85fe3c78a80a0ffcf87e879dac8c6c6c6949494ff518936c692c6c68474b2ffae81ff85dc85e4e4e4bdbdbd080808"),a(m,"N0Tch2K","383838a95551666666a98051657d3e767676c9c9c9d0b8a3545454a977758c8c8ca9917598bd5ea3a3a3dcdcdcd8c8bba0a0a0222222"),a(m,"Neobones Dark","0f191fde6e7c90ff6bb77e648190d4b279a766a5adc6d5cf334652e8838fa0ff85d68c6792a0e2cf86c165b8c198a39ec6d5cf0f191f"),a(m,"Neobones Light","e5ede6a8334c567a3094492728648688507d3b8992202e1899ac9c94253e3f5a22803d1c1d55737b3b702b747c415934202e18e5ede6"),a(m,"Neon","000000ff30455ffa74fffc7e0f15d8f924e700fffcc7c7c7686868ff5a5a75ff88fffd963c40cbf15be588fffeffffff00fffc14161a"),a(m,"Neopolitan","0000009a1a1a61ce3cfbde2d324883ff00808da6cef8f8f84c4c4c9a1a1a61ce3cfbde2d324883ff00808da6cef8f8f8ffffff271f19"),a(m,"Neutron","23252bb540365ab977deb5666a7c93a4799d3f94a8e6e8ef494b51b540365ab977deb5666a7c93a4799d3f94a8ebedf2e6e8ef1c1e22"),a(m,"Night Lion V1","4c4c4cbb00005fde8ff3f167276bd8bb00bb00dadfbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Night Lion V2","4c4c4cbb000004f623f3f16764d0f0ce6fdb00dadfbbbbbb555555ff55557df71dffff5562cbe8ff9bf500ccd8ffffffbbbbbb171717"),a(m,"Night Owl","011627ef535022da6eaddb6782aaffc792ea21c7a8ffffff575656ef535022da6effeb9582aaffc792ea7fdbcaffffffd6deeb011627"),a(m,"Night Owlish Light","011627d3423e2aa298daaa014876d6403f5308916a7a81817a8181f76e6e49d0c5dac26b5ca7e469709800c990989fb1403f53ffffff"),a(m,"Nightfox","393b44c94f6d81b29adbc074719cd69d79d663cdcfdfdfe0575860d169838ebaa4e0c98986abdcbaa1e27ad5d6e4e4e5cdcecf192330"),a(m,"Niji","333333d23e0854ca74fff7002ab9ffff50da1ef9f5ddd0c4515151ffb7b7c1ffaefcffb88efff3ffa2edbcffc7ffffffffffff141515"),a(m,"No Clown Fiesta","151515b4695890a959f4bf75bad7ffaa759f88afa2e1e1e17272727e97ab90a959f4bf75bad7ffaa759f88afa2afafafe0e1e4101010"),a(m,"No Clown Fiesta Light","d6d6d6874e42677940b890588ba1bfaa759f3e5f661515152b2b2b637786677940b8905893a2abaa759f99ab93373737151515e1e1e1"),a(m,"Nocturnal Winter","4d4d4df12d5209cd7ef5f17a3182e0ff2b6d09c87afcfcfc808080f16d860ae78dfffc676096ffff78a20ae78dffffffe6e5e50d0d17"),a(m,"Nord","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f0596377bf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee92e3440"),a(m,"Nord Light","3b4252bf616a96b17fc5a56581a1c1b48ead7bb3c3a5abb64c566abf616a96b17fc5a56581a1c1b48ead82afaeeceff4414858e5e9f0"),a(m,"Nord Wave","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f04c566abf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee9212121"),a(m,"Nordfox","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f053648dd06f79b1d196f0d3998cafd2c895bf93ccdce7ecf4cdcecf2e3440"),a(m,"Novel","000000cc0000009600d06b000000cccc00cc0087cca6a6a6808080cc0000009600d06b000000cccc00cc0087ccffffff3b2322dfdbc3"),a(m,"Nvim Dark","07080dffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f84f5258ffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f8e0e2ea14161b"),a(m,"Nvim Light","07080d5900080055236b5300004c73470045007373a1a4ab4f52585900080055236b5300004c73470045007373eef1f814161be0e2ea"),a(m,"Obsidian","000000b30d0e00bb00fecd223a9bdbbb00bb00bbbbbbbbbb555555ff000393c863fef874a1d7ffff55ff55ffffffffffcdcdcd283033"),a(m,"Ocean","000000e64c4c00a6009999000000b2d826d800a6b2bfbfbf808080ff1a1a00d900e5e5007373ffe500e500e5e5e5e5e5ffffff224fbc"),a(m,"Oceanic Material","000000ee2b2a40a33fffea2e1e80f08800a016afcaa4a4a4777777dc5c6070be71fff16354a4f3aa4dbc42c7daffffffc2c8d71c262b"),a(m,"Oceanic Next","162c35ec5f6799c794fac8636699ccc594c55fb3b3ffffff65737eec5f6799c794fac8636699ccc594c55fb3b3ffffffc0c5ce162c35"),a(m,"Ollie","000000ac2e3131ac61ac43002d57acb085281fa6ac8a8eac684432ff3d483bff99ff5e1e4488ffffc21d1ffaff5b6ea78a8dae222125"),a(m,"One Dark Two","1d1f23e2788198c379eac78671b9f4c88bda62bac6c9ccd34a505ae68991a8cc8eedcf978dc7f6d3a2e278c4cee6e6e6e6e6e621252b"),a(m,"One Double Dark","3d4452f163728cc570ecbe703fb1f5d373e317b9c4dbdfe5525d6fff777b82d882f5c0656dcaffff7bf400e5fbf7f9fcdbdfe5282c34"),a(m,"One Double Light","454b58f7484025a343cc81000087c1b50da9009ab7c5b2b30e131fff371100b90eec99001065dee500d800b4ddffffff383a43fafafa"),a(m,"One Half Dark","282c34e06c7598c379e5c07b61afefc678dd56b6c2dcdfe45d677ae06c7598c379e5c07b61afefc678dd56b6c2dcdfe4dcdfe4282c34"),a(m,"One Half Light","383a42e4564950a14fc184010184bca626a40997b3bababa4f525ee06c7598c379d8b36e61afefc678dd56b6c2ffffff383a42fafafa"),a(m,"Onenord","3b4252e06c759ec183ebcb8b81a1c1b988b088c0d0e5e9f0596377e06c759ec183ebcb8b81a1c1b988b08fbcbbeceff4e5e9f02e3440"),a(m,"Onenord Light","2e3440cb4f5348a53dee5e253879c59f4aca3ea1adb2b6bd646a76d163665f9e9dba793e1b40a69665af8fbcbbeceff42e3440f7f8fa"),a(m,"Operator Mono Dark","5a5a5aca372d4d7b3ad4d6974387cfb86cb472d5c6ced4cd9a9b99c37d6283d0a2fdfdc589d3f6ff2c7a82eadafdfdf6c3cac2191919"),a(m,"Overnight Slumber","0a1222ffa7c485cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ffa7c485cc95ffcb8b8dabe1c792ebffa7c4ffffffced2d60e1729"),a(m,"Oxocarbon","16161600dfdb00b4ffff429700c15ac693ffff74b8f2f4f858585800dfdb00b4ffff429700c15ac693ffff74b8f2f4f8f2f4f8161616"),a(m,"Pale Night Hc","000000f07178c3e88dffcb6b82aaffc792ea89ddffffffff737373f6a9aedbf1baffdfa6b4ccffddbdf2b8eaff999999cccccc3e4251"),a(m,"Pandora","000000ff424274af68ffad29338f869414e623d7d7e2e2e23f5648ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e1141e43"),a(m,"Paraiso Dark","2f1e2eef615548b685fec41806b6ef815ba45bc4bfa39e9b776e71ef615548b685fec41806b6ef815ba45bc4bfe7e9dba39e9b2f1e2e"),a(m,"Paul Millr","2a2a2aff000079ff0fe7bf00396bd7b449be66ccffbbbbbb666666ff008066ff66f3d64e709aeddb67e67adff2fffffff2f2f2000000"),a(m,"Pencil Dark","212121c3077110a778a89c14008ec45f498620a5bad9d9d94f4f4ffb007a5fd7aff3e43020bbfc6855de4fb8ccf1f1f1f1f1f1212121"),a(m,"Pencil Light","212121c3077110a778a89c14008ec4523c7920a5bab3b3b3424242fb007a52caa2c0b10020bbfc6855de4fb8ccf1f1f1424242f1f1f1"),a(m,"Peppermint","353535e7466989d287dab853449fd0da62dc65aaafb4b4b4535353e4859ba3cca2e1e4876fbce2e586e796dcdbdfdfdfc8c8c8000000"),a(m,"Phala Green Dark","000000ab150000b100a9a7000223c0c22ec000b4c0cbcbcb797979ed220000db00eae7000433ffed3aea00e8eaeaeaeac1fc03000000"),a(m,"Piatto Light","414141b2377166781ecd6f343c5ea8a454b266781ebfbfbf3f3f3fdb3365829429cd6f343c5ea8a454b2829429f2f2f2414141ffffff"),a(m,"Pnevma","2f2e2da3666690a57dd7af877fa5bdc79ec48adbb4d0d0d04a4845d78787afbea2e4c9afa1bdced7bedab1e7ddefefefd0d0d01c1c1c"),a(m,"Poimandres","1a1e28d0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd1a1e28"),a(m,"Poimandres Darker","16161ed0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd16161e"),a(m,"Poimandres Storm","252b37d0679d5de4c7fffac289ddfff087bd89ddffffffffa6accdd0679d5de4c7fffac2add7fff087bdadd7ffffffffa6accd252b37"),a(m,"Poimandres White","fefeffff209001dab2e5ba4e8abacdeb83948abacd000000969cbdff209001dab2e5ba4e0ebfffeb83940ebfff000000969cbdfefeff"),a(m,"Popping And Locking","1d2021cc241d98971ad79921458588b16286689d6aa89984928374f42c3eb8bb26fabd2f99c6cad3869b7ec16eebdbb2ebdbb2181921"),a(m,"Powershell","000000981a22098003c4a0004140c3d336820e807f7f7c7f808080ef29291cfe3cfefe45268ad2fe13fa29fffec2c1c3f6f6f7052454"),a(m,"Primary","000000db44370f9d58f4b4004285f4db44374285f4bfbfbf000000db44370f9d58f4b4004285f44285f40f9d58ffffff000000ffffff"),a(m,"Pro","00000099000000a6009999002009dbb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e5f2f2f2000000"),a(m,"Pro Light","000000e5492b50d148c6c4403b75ffed66e84ed2dec2c2c29f9f9fff664048d53ebfbe230082ffff7eff3bd1d2f2f2f2191919ffffff"),a(m,"Purple Rain","000000ff260e9be205ffc40000a2fa815bb500deefffffff565656ff4250b8e36effd85200a6ffac7bf074fdf3fffffffffbf621084a"),a(m,"Purplepeter","0a0520ff796d99b481efdfac66d9efe78fcdba8cffffba81504b63f99f92b4be8ff2e9bf79daedba91d4a0a0d6b9aed3ece7fa2a1a4a"),a(m,"Rapture","000000fc644d7afde1fff09b6c9bf5ff4fa164e0ffc0c9e5304b66fc644d7afde1fff09b6c9bf5ff4fa164e0ffffffffc0c9e5111e2a"),a(m,"Raycast Dark","000000ff536059d499ffc53156c2ffcf2f9852eee5ffffff4c4c4cff636359d499ffc53156c2ffcf2f9852eee5ffffffffffff1a1a1a"),a(m,"Raycast Light","000000b12424006b4ff8a300138af29a1b6e3eb8bfbfbfbf000000b12424006b4ff8a300138af29a1b6e3eb8bfffffff000000ffffff"),a(m,"Rebecca","12131edd775504dbb5f2e7b77aa5ffbf9cf956d3c2e4e3e9666699ff92cd01eac0fffca869c0fac17ff88bfde1f4f2f9e8e6ed292a44"),a(m,"Red Alert","000000d62e4e71be6bbeb86b489beee979d76bbeb8d6d6d6666666e02553aff08cdfddb765aaf1ddb7dfb7dfddffffffffffff762423"),a(m,"Red Planet","2020208c3432728271e8bf6a69819e8964925b8390b9aa99676767b55242869985ebeb9160827ede497438add8d6bfb8c2b790222222"),a(m,"Red Sands","000000ff3f0000bb00e7b0000072ffbb00bb00bbbbbbbbbb6e6e6ed41a1a00bb00e7b0000072aeff55ff55ffffffffffd7c9a77a251e"),a(m,"Relaxed","151515bc5653909d63ebc17a6a8799b06698c9dfffd9d9d9636363bc5653a0ac77ebc17a7eaac7b06698acbbd0f7f7f7d9d9d9353a44"),a(m,"Retro","13a10e13a10e13a10e13a10e13a10e13a10e13a10e13a10e16ba1016ba1016ba1016ba1016ba1016ba1016ba1016ba1013a10e000000"),a(m,"Retro Legends","262626de545445eb45f7bf2b4066f2bf4cf240d9e6bfe6bf4c594cff666659ff59ffd9334c80ffe666ff59e6fff2fff245eb450d0d0d"),a(m,"Rippedcasts","000000cdaf95a8ff60bfbb1f75a5b0ff73fd5a647ebfbfbf666666eecbadbcee68e5e50086bdc9e500e58c9bc4e5e5e5ffffff2b2b2b"),a(m,"Rose Pine","26233aeb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def46e6a86eb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def4e0def4191724"),a(m,"Rose Pine Dawn","f2e9e1b4637a286983ea9d3456949f907aa9d7827e5752799893a5b4637a286983ea9d3456949f907aa9d7827e575279575279faf4ed"),a(m,"Rose Pine Moon","393552eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def46e6a86eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def4e0def4232136"),a(m,"Rouge 2","5d5d6bc6797e969e92dbcdab6e94b94c4e788ab6c1e8e8ea616274c6797ee6dcc4e6dcc498b3cd8283a1abcbd3e8e8eaa2a3aa17182b"),a(m,"Royal","241f2b91284c23801cb49d276580b0674d968aaabe5249663e3a4ad5356c2cd946fde83b90baf9a479e3acd4eb9e8cbd514968100815"),a(m,"Ryuuko","2c3941865f5b66907db1a9906a8e95b18a7388b2acececec5d7079865f5b66907db1a9906a8e95b18a7388b2acecececececec2c3941"),a(m,"Sakura","000000d5237041af1abc70536964abc71fbf939393998eac786d69f41d9922e529f595749892f1e90cddeeeeeecbb6ffdd7bdc18131e"),a(m,"Scarlet Protocol","101116ff005100dc84faf9450271b6ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffbd35ec60fdffffffffe419511c153d"),a(m,"Sea Shells","17384cd15123027c9bfca02f1e495068d4f150a3b5deb88d434b53d48678628d98fdd39f1bbcddbbe3ee87acb4fee4cedeb88d09141b"),a(m,"Seafoam Pastel","757575825d4d728c62ada16d4d7b828a7267729494e0e0e08a8a8acf937a98d9aafae79d7ac3cfd6b2a1ade0e0e0e0e0d4e7d4243435"),a(m,"Selenized Black","252525ed4a4670b433dbb32d368aebeb6eb73fc5b7b9b9b9777777ff5e5683c746efc5414f9cfeff81ca56d8c9dededeb9b9b9181818"),a(m,"Selenized Dark","184956fa575075b938dbb32d4695f7f275be41c7b9adbcbc72898fff665c84c747ebc13d58a3ffff84cd53d6c7cad8d9adbcbc103c48"),a(m,"Selenized Light","ece3ccd2212d489100ad89000072d4ca4898009c8f53676d909995cc1729428b00a78300006dcec4439200978a3a4d5353676dfbf3db"),a(m,"Seoulbones Dark","4b4b4be388a398bd99ffdf9b97bddea5a6c56fbdbedddddd797172eb99b18fcd92ffe5b3a2c8e9b2b3da6bcacba8a8a8dddddd4b4b4b"),a(m,"Seoulbones Light","e2e2e2dc5284628562c485620084a3896788008586555555a5a0a1be3c6d487249a76b48006f897f4c7e006f70777777555555e2e2e2"),a(m,"Seti","323232c228328ec43de0c64f43a5d58b57b58ec43deeeeee3f3f3fc228328ec43de0c64f43a5d58b57b58ec43dffffffcacecd111213"),a(m,"Shades Of Purple","000000d904293ad900ffe7006943ffff2c7000c5c7c7c7c7686868f92a1c43d426f1d0006871ffff77ff79e8fbffffffffffff1e1d40"),a(m,"Shaman","012026b2302d00a9415e8baa449a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6405555001015"),a(m,"Slate","222222e2a8bf81d778c4c9c0335856a481d315ab9c02c5e0ffffffffcdd9beffa8d0ccca7ab0d2c5a7d98cdfe0e0e0e035b1d2222222"),a(m,"Sleepy Hollow","572100ba393491773fb556005f63b4a17c7b8faea9af9a914e4b61d9443fd6b04ef668138086efe2c2bba4dce7d2c7a9af9a91121214"),a(m,"Smyck","000000b841317da900c4a50062a3c4ba8acc207383a1a1a17a7a7ad6837cc4f137fee14d8dcff0f79aff6ad9cff7f7f7f7f7f71b1b1b"),a(m,"Snazzy","000000fc434650fb7cf0fb8c49bafffc4cb48be9feededec555555fc434650fb7cf0fb8c49bafffc4cb48be9feededecebece61e1f29"),a(m,"Snazzy Soft","000000ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0686868ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0eff0eb282a36"),a(m,"Soft Server","000000a2686a9aa56aa3906a6b8fa36a71a36ba58f99a3a2666c6cdd5c60bfdf55deb36062b1df606edf64e39cd2e0de99a3a2242626"),a(m,"Solarized Darcula","25292af24840629655b688002075c7797fd415968dd2d8d965696af24840629655b688002075c7797fd415968dd2d8d9d2d8d93d3f41"),a(m,"Solarized Dark Higher Contrast","002831d11c246cbe6ca577062176c7c61c6f259286eae3cb006488f5163b51ef84b27e28178ec8e24d8e00b39efcf4dc9cc2c3001e27"),a(m,"Solarized Dark Patched","002831d11c24738a05a577062176c7c61c6f259286eae3cb475b62bd3613475b625368707082845956ba819090fcf4dc708284001e27"),a(m,"Solarized Osaka Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"Sonokai","181819fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e37f8490fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e3e2e2e32c2e34"),a(m,"Spacedust","6e5346e35b005cab96e3cd7b0f548be35b0006afc7f0f1ce684c31ff8a3aaecab8ffc87867a0ceff8a3a83a7b4fefff1ecf0c10a1e24"),a(m,"Spacegray","000000b04b5787b379e5c1797d8fa4a4799685a7a5b3b8c34c4c4cb04b5787b379e5c1797d8fa4a4799685a7a5ffffffb3b8c320242d"),a(m,"Spacegray Bright","080808bc5553a0b56cf6c9877baec1b98aae85c9b8d8d8d8626262bc5553a0b56cf6c9877baec1b98aae85c9b8f7f7f7f3f3f32a2e3a"),a(m,"Spacegray Eighties","15171cec5f6781a764fec2545486c0bf83c157c2c1efece7555555ff697393d493ffd2564d84d1ff55ff83e9e4ffffffbdbaae222222"),a(m,"Spacegray Eighties Dull","15171cb24a5692b477c6735a7c8fa5a5789e80cdcbb3b8c3555555ec5f6789e986fec2545486c0bf83c158c2c1ffffffc9c6bc222222"),a(m,"Spiderman","1b1d1ee60813e22928e247562c3fff2435db3256fffffef6505354ff0325ff3338fe3a351d50ff747cff6184fffffff9e3e3e31b1d1e"),a(m,"Spring","000000ff4d831f8c3b1fc95b1dd3ee8959a83e999fbfbfbf000000ff00211fc231d5b80715a9fd8959a83e999fffffff4d4d4cffffff"),a(m,"Square","050505e9897cb6377decebbea9cdeb75507bc9caecf2f2f2474747f99286c3f786fcfbccb6defbad7fa8d7d9fce2e2e2acacab1a1a1a"),a(m,"Squirrelsong Dark","372920ba4138468336d4b1394395c6855fb82f9794d3b9a2704f39df4d43659a4ce8c23f4ca4db9d70da60aca9f2d4bbb19b89372920"),a(m,"Srcery","1c1b19ef2f27519f50fbb8292c78bfe02c6d0aaeb3baa67f918175f7534198bc37fed06e68a8e4ff5c8f2be4d0fce8c3fce8c31c1b19"),a(m,"Starlight","242424f62b5a47b413e3c40124acd4f2affd13c299e6e6e6616161ff4d5135d450e9e8365dc5f8feabf224dfc4ffffffffffff242424"),a(m,"Sublette","253045ee557755ee77ffdd885588ffff77cc44eeeef5f5da405570ee665599ee77ffff7777bbffaa88ff55ffbbffffeeccced0202535"),a(m,"Subliminal","7f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d47f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d4d4d4d4282c35"),a(m,"Sugarplum","1111475ca8dc53b397249a84db7dddd0beeef9f3f9a175d444447a5cb5dc52deb501f5c7fa5dfdc6a5fdffffffb577fddb7ddd111147"),a(m,"Sundried","302b2aa7463d5877449d602a485b988646519c814fc9c9c94d4e48aa000c128c21fc6a217999f7fd8aa1fad484ffffffc9c9c91a1818"),a(m,"Sunset Drive","0a0a13ff006300f992ffe90000a4ffff57fd00ffedededff3e3e4bff948b00fcb9ffff683ea0ffff93ff38fffff8f8ffededfe0f0f1a"),a(m,"Symfonic","000000dc322f56db3aff84000084d4b729d9ccccffffffff414347dc322f56db3aff84000084d4b729d9ccccffffffffffffff000000"),a(m,"Synthwave","000000f6188f1ebb2bfdf8342186ecf85a2112c3e2ffffff7f7094f841a025c141fdf4542f9dedf9713719cde6ffffffdad9c7000000"),a(m,"Synthwave Alpha","241b30e60a7000986cadad3e6e29adb300ad00b0b1b9b1bc7f7094e60a700ae4a4f9f972aa54f9ff00f600fbfdf2f2e3f2f2e3241b30"),a(m,"Synthwave Everything","fefefef97e7272f1b8fede5d6d77b3c792eaf772e0fefefefefefef8841472f1b8fff95136f9f6e1acfff92aadfefefef0eff12a2139"),a(m,"Tango Adapted","000000ff000059d600e3be0000a2ffc17ecc00d0d6c0c5bb8f928bff00136dd900ccbe0088c9ffe9a7e100d8d9f6f6f4000000ffffff"),a(m,"Tango Half Adapted","000000ff00004cc300e2c000008ef6a96cb300bdc3babfb5797d76ff001370dc00d9c60076bfffd898d100d0d4f4f4f2000000ffffff"),a(m,"Tearout","685742cc967b97976d6c9861b5955ec9a554d7c483b5955e75644fcc967b97976d6c9861b5955ec9a554d7c483b5955ef4d2ae34392d"),a(m,"Teerb","1c1c1cd68686aed686d7af8786aed6d6aed68adbb4d0d0d04f4f4fd68686aed686e4c9af86aed6d6aed6b1e7ddefefefd0d0d0262626"),a(m,"Terafox","2f3239e85c517aa4a1fda47f5a93aaad5c7ca1cdd8ebebeb4e5157eb746b8eb2affdb29273a3b7b97490afd4deeeeeeee6eaea152528"),a(m,"Terminal Basic","00000099000000a6009999000000b2b200b200a6b2bfbfbf666666e5000000d900bfbf000000ffe500e500d8d8e5e5e5000000ffffff"),a(m,"Terminal Basic Dark","000000c653396ac44bb8b74a6444edd357db69c1cfd1d1d1909090eb5a3a77ea51efef53d09af9eb5af778f1f2edededffffff1d1e1d"),a(m,"Thayer Bright","1b1d1ef926724df840f4fd222757d68c54fe38c8b5ccccc6505354ff5995b6e354feed6c3f78ff9e6ffe23cfd5f8f8f2f8f8f81b1d1e"),a(m,"The Hulk","1b1d1e269d1b13ce3063e4572525f5712c81378ca9d9d8d15053548dff2a48ff773afe16506b9572589d4085a6e5e6e1b5b5b51b1d1e"),a(m,"Tinacious Design Dark","1d1d26ff339900d364ffcc6600cbffcc66ff00cecacbcbf0636667ff2f9200d364ffd47900cbffd783ff00d5d4d5d6f3cbcbf01d1d26"),a(m,"Tinacious Design Light","1d1d26ff339900d364e5b24d00cbffcc66ff00cecab1b1d6636667ff2f9200d364d9ae5300cbffd783ff00c8c7d5d6f31d1d26f8f8ff"),a(m,"TokyoNight","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"TokyoNight Day","e9e9edf52a655875398c6c3e2e7de99854f10071976172b0a1a6c5f52a655875398c6c3e2e7de99854f10071973760bf3760bfe1e2e7"),a(m,"TokyoNight Moon","1b1d2bff757fc3e88dffc77782aaffc099ff86e1fc828bb8444a73ff757fc3e88dffc77782aaffc099ff86e1fcc8d3f5c8d3f5222436"),a(m,"TokyoNight Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"TokyoNight Storm","1d202ff7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d64e5575f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf524283b"),a(m,"Tomorrow","000000c82829718c00eab7004271ae8959a83e999fbfbfbf000000c82829718c00eab7004271ae8959a83e999fffffff4d4d4cffffff"),a(m,"Tomorrow Night","000000cc6666b5bd68f0c67481a2beb294bb8abeb7ffffff4c4c4ccc6666b5bd68f0c67481a2beb294bb8abeb7ffffffc5c8c61d1f21"),a(m,"Tomorrow Night Blue","000000ff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffff4c4c4cff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffffffffff002451"),a(m,"Tomorrow Night Bright","000000d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffff404040d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffffeaeaea000000"),a(m,"Tomorrow Night Burns","252525832e31a63c40d3494efc595fdf9395ba8586f5f5f55d6f71832e31a63c40d2494efc595fdf9395ba8586f5f5f5a1b0b8151515"),a(m,"Tomorrow Night Eighties","000000f2777a99cc99ffcc666699cccc99cc66ccccffffff595959f2777a99cc99ffcc666699cccc99cc66ccccffffffcccccc2d2d2d"),a(m,"Toy Chest","2c3f58be2d261a9172db8e27325d968a5edc35a08f23d183336889dd594431d07be7d84b34a6daae6bdc42c3aed5d5d531d07b24364b"),a(m,"Treehouse","321300b2270e44a900aa820c58859a97363db25a1e786b53504333ed5d2055f238f2b73285cfede14c5af07d14ffc800786b53191919"),a(m,"Twilight","141414c06d44afb97ac2a86c44474ab4be7c778385ffffd4404040de7c4cccd88ce2c47e5a5e62d0dc8e8a989bffffd4ffffd4141414"),a(m,"Ubuntu","2e3436cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeeceeeeec300a24"),a(m,"Ultra Dark","000000f07178c3e88dffcb6b82aaffc792ea89ddffcccccc404040f6a9aedbf1baffdfa6b4ccffddbdf2b8eaffffffffffffff000000"),a(m,"Ultra Violent","242728ff0090b6ff00fff72747e0fbd731ff0effbbe1e1e1636667fb58b4deff8cebe0877fecffe681ff69fcd3f9f9f5c1c1c1242728"),a(m,"Under The Sea","022026b2302d00a94159819c459a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6ffffff011116"),a(m,"Unikitty","0c0c0ca80f20c7ff98fff964145fcdffe9ff9effeffcf1fb434343d91329d3ffafffef500075eaffefff93ffeffff3fe0b0b0bff8cd9"),a(m,"Urple","000000b0425b37a415ad5c42564d9b6c3ca180808087799c6a3f32ff638829e620f08161867aeda05eeeeaeaeabfa3ff877a9b1b1b23"),a(m,"Vague","252530d8647e7fa563f3be7c6e94b2bb9dbdaeaed1cdcdcd606079e0839899b782f5cb968ba9c1c9b1cabebedad7d7d7cdcdcd141415"),a(m,"Vaughn","25234f70505060b48adfaf8f5555fff08cc38cd0d3709080709080dca3a360b48af0dfaf5555ffec93d393e0e3ffffffdcdccc25234f"),a(m,"Vercel","000000fc003629a948ffae00006afff3288200ac96feffffa8a8a8ff80804be15dffae0049aefff97ea800e4c4fefefefafafa101010"),a(m,"Vesper","101010f5a19190b99fe6b99daca1cfe29ecaea83a5a0a0a07e7e7eff808099ffe4ffc799b9aedaecaad6f591b2ffffffffffff101010"),a(m,"Vibrant Ink","878787ff6600ccff04ffcc0044b4cc9933cc44b4ccf5f5f5555555ff000000ff00ffff000000ffff00ff00ffffe5e5e5ffffff000000"),a(m,"Vimbones","f0f0caa8334c4f6c3194492728648688507d3b8992353535acac8994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535f0f0ca"),a(m,"Violet Dark","56595cc94c2285981cb4881d2e8bced13a8232a198c9c6bd45484bbd3613738a04a577052176c7c61c6f259286c9c6bd7082841c1d1f"),a(m,"Violet Light","56595cc94c2285981cb4881d2e8bced13a8232a198b9b6af45484bbd3613738a04a577052176c7c61c6f259286c9c6bd536870fcf4dc"),a(m,"Violite","241c36ec797979ecb3ece279a979ecec79ec79ececeef4f656447aef8f8f9fefbfefe78fb78fefef8fcf9fefeff8fafceef4f6241c36"),a(m,"Warm Neon","000000e2434639b13adae1454261c5f920fb2abbd4d0b8a3fefcfce970719cc090ddda7a7b91d6f674ba5ed1e5d8c8bbafdab6404040"),a(m,"Wez","000000cc555555cc55cdcd555555cccc55cc7acacacccccc555555ff555555ff55ffff555555ffff55ff55ffffffffffb3b3b3000000"),a(m,"Whimsy","535178ef64875eca89fdd87765aef7aa7ff043c1beffffff535178ef64875eca89fdd87765aef7aa7ff043c1beffffffb3b0d629283b"),a(m,"Wild Cherry","000507d940852ab250ffd16f883cdcecececc1b8b7fff8de009cc9da6bacf4dca5eac066308cbaae636bff919de4838ddafaff1f1726"),a(m,"Wilmersdorf","34373ee063837ebebdcccccca6c1e0e1c1ee5b94abababab50545dfa71938fd7d6d1dfffb2cff0efccfd69abc5d3d3d3c6c6c6282b33"),a(m,"Wombat","000000ff615ab1e969ebd99c5da9f6e86aff82fff7dedacf4a4a4af58c80ddf88feee5b2a5c7ffddaaffb7fff9ffffffdedacf171717"),a(m,"Wryan","3333338c46652873737c7c993955735e468c31658c899ca13d3d3dbf4d8053a6a69e9ecb477ab37e62b36096bfc0c0c0999993101010"),a(m,"Xcode Dark","414453ff817078c2b3d9c97c4eb0ccff7ab2b281ebdfdfe07f8c98ff8170acf2e4ffa14f6bdfffff7ab2dabaffdfdfe0dfdfe0292a30"),a(m,"Xcode Dark hc","43454bff8a7a83c9bcd9c6684ec4e6ff85b8cda1ffffffff838991ff8a7ab1faebffa14f6bdfffff85b8e5cfffffffffffffff1f1f24"),a(m,"Xcode Light","b4d8fdd12f1b3e808778492a0f68a0ad3da4804fb82626268a99a6d12f1b23575c78492a0b4f79ad3da44b21b0262626262626ffffff"),a(m,"Xcode Light hc","b4d8fdad1805355d6178492a0058a19c2191703daa0000008a99a6ad180517414578492a003f739c2191441ea1000000000000ffffff"),a(m,"Xcode WWDC","494d5cbb383a94c66ed28e5d8884c5b7399900aba4e7e8eb7f869ebb383a94c66ed28e5d8884c5b7399900aba4e7e8ebe7e8eb292c36"),a(m,"Zenbones","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(m,"Zenbones Dark","1c1917de6e7c819b69b77e646099c0b279a766a5adb4bdc34d4540e8838f8bae68d68c6761abdacf86c165b8c1888f94b4bdc31c1917"),a(m,"Zenbones Light","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(m,"Zenburn","4d4d4d7d5d5d60b48af0dfaf5d6d7ddc8cc38cd0d3dcdccc709080dca3a3c3bf9fe0cf9f94bff3ec93d393e0e3ffffffdcdccc3f3f3f"),a(m,"Zenburned","404040e3716e819b69b77e646099c0b279a766a5adf0e4cf6f6768ec86858bae68d68c6761abdacf86c165b8c1c0ab86f0e4cf404040"),a(m,"Zenwritten Dark","191919de6e7c819b69b77e646099c0b279a766a5adbbbbbb4a4546e8838f8bae68d68c6761abdacf86c165b8c18e8e8ebbbbbb191919"),a(m,"Zenwritten Light","eeeeeea8334c4f6c3194492728648688507d3b8992353535aca9a994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535eeeeee"),a(m,"branch","35241cc2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9564a45c2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9cfc1a932221a"),a(m,"iTerm2 Dark Background","000000c91b0000c200c7c4000225c7ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffc7c7c7000000"),a(m,"iTerm2 Default","000000c91b0000c200c7c4002225c4ca30c700c5c7ffffff686868ff6e675ffa68fffc676871ffff77ff60fdffffffffffffff000000"),a(m,"iTerm2 Light Background","000000c91b0000c200c7c4000225c7ca30c700c5c7bababa686868ff6e6739d442ccc9346871ffff77ff3ad7d9ffffff000000ffffff"),a(m,"iTerm2 Pastel Dark Background","626262ff8373b4fb73fffdc3a5d5feff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5c2e3ffffb2fee6e6feffffffc7c7c7000000"),a(m,"iTerm2 Smoooooth","14191eb43c2a00c200c7c4002744c7c040be00c5c7c7c7c7686868dd797558e790ece100a7abf2e17ee160fdffffffffdcdcdc15191f"),a(m,"iTerm2 Solarized Dark","073642dc322f859900b58900268bd2d336822aa198eee8d5335e69cb4b16586e75657b838394966c71c493a1a1fdf6e3839496002b36"),a(m,"iTerm2 Solarized Light","073642dc322f859900b58900268bd2d336822aa198bbb5a2002b36cb4b16586e75657b838394966c71c493a1a1fdf6e3657b83fdf6e3"),a(m,"iTerm2 Tango Dark","000000d81e005ea702cfae00427ab389658e00a7aadbded8686a66f5423599e343fdeb6184b0d8bc94b737e6e8f1f1f0ffffff000000"),a(m,"iTerm2 Tango Light","000000d81e005ea702cfae00427ab389658e00a7aac1c4be686a66f542358cd636d7c53b84b0d8bc94b71ecccef1f1f0000000ffffff"),a(m,"novmbr","282a2e9f64349dac5fcca75f2f7d7cb5896e52877fc7b8ac5d4e479f64349dac5fcca75f2f7d7cb5896e52877fc7b8acc7b8ac241d1a"),a(m,"owl","302c2c5a5a5a989898cacaca656565b1b1b17f7f7fdedede5d595bda5b2c989898cacaca656565b1b1b17f7f7fffffffdedede2f2b2c"),a(m,"traffic","282d31934e46637268c79e84515e67715f5e5c6f7dcfb9a84e575e934e46637270c79e84515e67715f5e5c6f7dddcec2cfb9a8272c30"),a(m,"urban","33303b87404f74934eae835a615772854b64625464c0a79a5c586587404f74934eae835a615772854b64625464c0a79ac0a79a312e39"),mg,pg,a(m,"Logoyo Dark","1c1466ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f2f0ff6a63a0ff6b5e6cc04affc83d6ba8f0b57bf058d6c8fffffff2f0ff2a1e80"),a(m,"Logoyo Light","1c1452ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f4f2ff8983b5ff6b5e6cc04affc83d6ba8f0b57bf058d6c8ffffff29216bc5c1fc"),hg,kg,Pg,gg,Sg]),En={$:-2},He=En,SU=1,Fe=Le(function(e,r,n,t,o){return{$:-1,a:e,b:r,c:n,d:t,e:o}}),kU=0,oc=Le(function(e,r,n,t,o){if(o.$===-1&&!o.a){var c=o.a,i=o.b,f=o.c,$=o.d,s=o.e;if(t.$===-1&&!t.a){var d=t.a,b=t.b,g=t.c,p=t.d,y=t.e;return V(Fe,0,r,n,V(Fe,1,b,g,p,y),V(Fe,1,i,f,$,s))}else return V(Fe,e,i,f,V(Fe,0,r,n,t,$),s)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){var _=t.a,b=t.b,g=t.c,k=t.d,L=k.a,w=k.b,I=k.c,R=k.d,B=k.e,y=t.e;return V(Fe,0,b,g,V(Fe,1,w,I,R,B),V(Fe,1,r,n,y,o))}else return V(Fe,e,r,n,t,o)}),P0=x(function(e,r,n){if(n.$===-2)return V(Fe,0,e,r,En,En);var t=n.a,o=n.b,c=n.c,i=n.d,f=n.e,$=a(y0,e,o);switch($){case 0:return V(oc,t,o,c,v(P0,e,r,i),f);case 1:return V(Fe,t,o,r,i,f);default:return V(oc,t,o,c,i,v(P0,e,r,f))}}),Sr=x(function(e,r,n){var t=v(P0,e,r,n);if(t.$===-1&&!t.a){var o=t.a,c=t.b,i=t.c,f=t.d,$=t.e;return V(Fe,1,c,i,f,$)}else{var s=t;return s}}),dn=function(e){return v(se,l(function(r,n){var t=r.a,o=r.b;return v(Sr,t,o,n)}),He,e)},ob=J(function(e,r,n,t){if(t.b){var o=t.a,c=t.b;if(c.b){var i=c.a,f=c.b;if(f.b){var $=f.a,s=f.b;if(s.b){var d=s.a,b=s.b,g=n>500?v(se,e,r,Be(b)):C(ob,e,r,n+1,b);return a(e,o,a(e,i,a(e,$,a(e,d,g))))}else return a(e,o,a(e,i,a(e,$,r)))}else return a(e,o,a(e,i,r))}else return a(e,o,r)}else return r}),Ka=x(function(e,r,n){return C(ob,e,r,0,n)}),G=l(function(e,r){return v(Ka,l(function(n,t){return a(A,e(n),t)}),P,r)}),xg=dn(a(G,function(e){return h(e.r8,e)},tb)),wg=function(e){return a(Ke,e,xg)},xU=H6,wU=q6,cb=x(function(e,r,n){return e<=0?n:v(cb,e>>1,Z(r,r),e&1?Z(n,r):n)}),cc=l(function(e,r){return v(cb,e,r,"")}),ib=(function(){var e=tb;if(e.b){var r=e.a,n=e.b;return h(r,n)}else return h(a(m,"Fallback",a(cc,108,"0")),P)})(),te=l(function(e,r){if(r.$)return e;var n=r.a;return n}),S0=function(e){return a(te,ib.a,wg(e))},fb=(function(){var e=5;return{gz:e,cV:a(Pi,e,S0("Argonaut")),c3:a(Pi,e,S0("Erkal Light")),dz:!1}})(),jg={g8:!0,fF:!0,ds:!0,fG:!0,fH:!1,dt:!0,eq:!0,g9:!0,b9:!0,ha:!0,hd:Qd,bE:!1,e:fb},Lg=jg,S=_6,q=d6,Un=y6,Ie=x(function(e,r,n){return r(e(n))}),jU=ne,pu=function(e){return{$:0,a:e}},Tg=x(function(e,r,n){e:for(;;){var t=a(h0,Dr,e),o=t.a,c=t.b;if(oe(Hn(o),Dr)<0)return a(g0,!0,{ap:r,W:n,af:o});var i=c,f=a(A,ac(o),r),$=n+1;e=i,r=f,n=$;continue e}}),ki=function(e){return e.b?v(Tg,e,P,0):p0},zg=l(function(e,r){return{lF:e,c0:P,as:0,j1:ki(r),dN:pu({eT:0,e_:0})}}),Mg={$:0},ub=Mg,Dg=l(function(e,r){return h(a(zg,a(Ie,function(n){return n.dG},function(n){return n.uN}),u([a(Ie,function(n){return n.dG},function(n){return n.s5}),a(Ie,function(n){return n.dG},function(n){return n.q$}),a(Ie,function(n){return n.dG},function(n){return n.pb}),a(Ie,function(n){return n.dG},function(n){return n.rI}),a(Ie,function(n){return n.dG},function(n){return n.pW}),a(Ie,function(n){return n.dG},function(n){return n.pk})])),ub)}),Ag=l(function(e,r){return{a8:r,r8:e}}),Fg=l(function(e,r){return a(Ag,e,r)}),Ig=Fg,Vg={gC:.2,bO:.35,fB:.3,c5:6,jW:6,j8:.1,j9:.5},k0=l(function(e,r){return{$:0,a:e,b:r}}),ic=x(function(e,r,n){var t=r.a,o=r.b;return h(e,a(k0,h(t,o),n))}),x0=l(function(e,r){return{$:2,a:e,b:r}}),Bg=x(function(e,r,n){var t=r.a,o=r.b;return h(e,a(x0,h(t,o),n))}),_a={gC:"arrow kick fraction \u2014 share of max speed when \u2190/\u2192 is pressed",bO:"card spacing \u2014 gap between adjacent card centres on the rail",fB:"fling projection time \u2014 seconds of pointer inertia projected on release",c5:"max coast speed \u2014 hard cap on rail speed (world units per second)",jW:"pointer sample window \u2014 frames of pointer history used to estimate fling speed",j8:"snap stiffness \u2014 per-frame fraction of remaining distance closed while snapping",j9:"snap zone fraction \u2014 within this fraction of card spacing, lerp to the target"},Hg=(function(){var e=Vg;return u([a(Ig,"Carousel physics",u([v(ic,_a.bO,h(.1,1),e.bO),v(ic,_a.gC,h(.05,1),e.gC),v(ic,_a.fB,h(.05,1.5),e.fB),v(Bg,_a.jW,h(2,30),e.jW),v(ic,_a.c5,h(1,20),e.c5),v(ic,_a.j9,h(.1,1),e.j9),v(ic,_a.j8,h(.02,.5),e.j8)]))])})(),xi=v6,ur=p6,Ne=k6,fc=g6,lo=function(e){e:for(;;){var r=e,n=r;e=n;continue e}},Rg=J(function(e,r,n,t){return lo(n)}),Vr=F8,hu=l(function(e,r){return e*Vr(r/e)}),LU=function(e){return-e},Eg=l(function(e,r){var n=r;return F(n,{dN:pu({eT:e.gC*-e.c5,e_:a(hu,e.bO,n.as-e.bO)})})}),Ug=l(function(e,r){var n=r;return F(n,{dN:pu({eT:e.gC*e.c5,e_:a(hu,e.bO,n.as+e.bO)})})}),qg=l(function(e,r){var n=r.mn;return n.eD?Ug(e):n.j2?Eg(e):ne}),gu=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b,o=e(n);if(o.$){var i=e,f=t;e=i,r=f;continue e}else{var c=o.a;return D(c)}}else return z}),Yg=l(function(e,r){return a(gu,function(n){var t=n.a,o=n.b,c=h(ie(t,e),o);if(c.a&&!c.b.$){var i=c.b,f=i.b;return D(f)}else return z},r.a8)}),Ng=l(function(e,r){return a(te,0,a(gu,Yg(e),r))}),Gg=l(function(e,r){return a(Ng,e,r.b2)}),uc=Gg,Og=l(function(e,r){return a(gu,function(n){var t=n.a,o=n.b,c=h(ie(t,e),o);if(c.a&&c.b.$===2){var i=c.b,f=i.b;return D(f)}else return z},r.a8)}),Wg=l(function(e,r){return a(te,0,a(gu,Og(e),r))}),Jg=l(function(e,r){return a(Wg,e,r.b2)}),Zg=Jg,$b=function(e){return{gC:a(uc,_a.gC,e),bO:a(uc,_a.bO,e),fB:a(uc,_a.fB,e),c5:a(uc,_a.c5,e),jW:a(Zg,_a.jW,e),j8:a(uc,_a.j8,e),j9:a(uc,_a.j9,e)}},Xg=function(e){return{qA:e.qA,qI:e.qI,s0:e.s0,ug:e.ug}},Kg=function(e){return{$:0,a:e}},Qg=L8,e_=Kg({eo:2*Qg(.5)}),lb=Xg({qA:{dY:0,e9:-.2,kF:1},qI:{dY:0,e9:0,kF:0},s0:e_,ug:{dY:0,e9:1,kF:0}}),de=l(function(e,r){if(r.$)return z;var n=r.a;return D(e(n))}),r_=l(function(e,r){return F(r,{dY:r.dY+.5*e.ie,e9:-r.e9+.5*e.hb})}),a_=function(e){return a(r_,e.f5,{dY:e.nv.dY,e9:e.nv.e9})},n_=a_,Zr=x(function(e,r,n){return{dY:e,e9:r,kF:n}}),t_={na:H(0,0,1),aY:v(Zr,0,0,0)},xe=function(e){return e<0?-e:e},w0=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return n*c+t*i+o*f}),Ta=l(function(e,r){var n=r.a,t=r.b,o=r.c;return H(e*n,e*t,e*o)}),vo=l(function(e,r){var n=e.a,t=e.b,o=e.c;return{dY:r.dY+n,e9:r.e9+t,kF:r.kF+o}}),vb=l(function(e,r){return H(r.dY-e.dY,r.e9-e.e9,r.kF-e.kF)}),o_=l(function(e,r){var n=a(w0,e.ed,r.na);if(xe(n)<1e-10)return z;var t=a(vb,e.aY,r.aY),o=a(w0,t,r.na)/n;return D(a(vo,a(Ta,o,e.ed),e.aY))}),j0=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return H(t*f-o*i,o*c-n*f,n*i-t*c)}),bn=y8,mn=I8,sb=function(e){var r=e.a,n=e.b,t=e.c;return mn(a(bn,r,2)+a(bn,n,2)+a(bn,t,2))},wi=function(e){var r=sb(e);return a(Ta,1/r,e)},c_=function(e){return H(e.dY,e.e9,e.kF)},i_=function(e){var r=c_(e.ug),n=wi(a(vb,e.qA,e.qI)),t=wi(a(j0,n,r)),o=a(j0,t,n);return{iY:n,jZ:o,j2:t}},ji=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return H(n+c,t+i,o+f)}),f_=a(se,ji,H(0,0,0)),db=w8,u_=l(function(e,r){var n=r.e9,t=r.dY;return h(2*t/e.ie-1,1-2*n/e.hb)}),$_=x(function(e,r,n){var t=r.ie/r.hb,o=i_(e),c=o.iY,i=o.jZ,f=o.j2,$=a(u_,r,n),s=$.a,d=$.b,b=e.s0;if(b.$){var k=b.a.oC,p=k/2,y=p*t,L=a(vo,a(Ta,d*p,i),a(vo,a(Ta,s*y,f),e.qA));return{ed:wi(c),aY:L}}else{var g=b.a.eo,p=db(g/2),y=p*t,_=wi(f_(u([c,a(Ta,s*y,f),a(Ta,d*p,i)])));return{ed:_,aY:e.qA}}}),l_=J(function(e,r,n,t){return a(o_,v($_,r,n,t),e)}),v_=l_(t_),bb=l(function(e,r){return e?r:ne}),s_=x(function(e,r,n){var t=r.nF,o=r.nw,c=n;return F(c,{as:t-(o-e.dI)})}),d_=Le(function(e,r,n,t,o){var c=o;return oe(xe(n-c.as),e.j9*e.bO)<0?F(c,{as:c.as+e.j8*(n-c.as)}):F(c,{as:c.as+r*t})}),L0=B8,b_=function(e){var r=e;return F(r,{c0:P})},m_=function(e){return{$:1,a:e}},p_=l(function(e,r){var n=r;return F(n,{dN:m_({nw:e.dI,nF:n.as})})}),kr=function(e){if(e.b){var r=e.a,n=e.b;return D(r)}else return z},h_=function(e){return v(se,Gd,0,e)},g_=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,o=r.b,c=e-1,i=o,f=a(A,t,n);e=c,r=i,n=f;continue e}else return n}}),__=l(function(e,r){return Be(v(g_,e,r,P))}),mb=x(function(e,r,n){if(r<=0)return P;var t=h(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,w=o.a,c=o.b,i=c.a;return u([w,i]);case 3:if(t.b.b.b.b){var f=t.b,w=f.a,$=f.b,i=$.a,s=$.b,d=s.a;return u([w,i,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var b=t.b,w=b.a,g=b.b,i=g.a,p=g.b,d=p.a,y=p.b,_=y.a,k=y.b;return e>1e3?a(A,w,a(A,i,a(A,d,a(A,_,a(__,r-4,k))))):a(A,w,a(A,i,a(A,d,a(A,_,v(mb,e+1,r-4,k)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var L=t.b,w=L.a;return u([w])}),qn=l(function(e,r){return v(mb,0,e,r)}),y_=l(function(e,r){var n=r,t=h_(a(qn,Pr(n.c0)-1,a(G,function(s){return s.lm},n.c0))),o=h(a(te,0,a(de,function(s){return s.dI},kr(n.c0))),a(te,0,a(de,function(s){return s.dI},kr(Be(n.c0))))),c=o.a,i=o.b,f=c-i,$=t?f/t:0;return F(n,{dN:pu({eT:v(mr,-e.c5,e.c5,$),e_:a(hu,e.bO,n.as+e.fB*$)})})}),C_=x(function(e,r,n){var t=r.dI,o=r.iO,c=n;return F(c,{c0:a(qn,e.jW,a(A,{lm:o,dI:t},c.c0))})}),P_=x(function(e,r,n){var t=n,o=t.dN;if(o.$===1){var c=o.a;return v(bb,!r.jV,y_(e),v(s_,r,c,v(C_,e,r,t)))}else{var i=o.a.eT,f=o.a.e_;return V(d_,e,r.iO,f,i,v(bb,r.jV,p_(r),b_(t)))}}),S_=x(function(e,r,n){var t=a(te,0,a(de,function(o){return o.dY},v(v_,lb,r.f5,n_(r))));return v(P_,e,{iO:r.iO,jV:r.nv.i5,dI:t},n)}),k_=x(function(e,r,n){var t=$b(e);return h(v(S_,t,e,v(qg,t,e,n)),ub)}),so=S6,x_={jI:P,on:P},fa=ad,fe=fa(P),Li=ad,ft=Li(P),Yn=x6,re=$6,T0=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},pn=Ya("div"),pb=d7,X=pb,_u=function(e){return{$:0,a:e}},w_=J(function(e,r,n,t){return{d4:t,er:n,nW:r,tv:e}}),hb=3432918353,gb=461845907,TU=U6,zU=Y6,bo=l(function(e,r){return(r&65535)*e+(((r>>>16)*e&65535)<<16)}),MU=R6,z0=l(function(e,r){return r<<e|r>>>32-e}),DU=E6,j_=function(e){var r=e.er?e.nW^a(bo,gb,a(z0,15,a(bo,hb,e.er))):e.nW,n=r^e.d4,t=a(bo,2246822507,n^n>>>16),o=a(bo,3266489909,t^t>>>13);return(o^o>>>16)>>>0},L_=G8,T_=l(function(e,r){return a(bo,5,a(z0,13,e^a(bo,gb,a(z0,15,a(bo,hb,r)))))+3864292196}),z_=l(function(e,r){var n=r.er|(255&it(e))<<r.tv,t=r.tv;return t===24?{d4:r.d4+1,er:0,nW:a(T_,r.nW,n),tv:0}:{d4:r.d4+1,er:n,nW:r.nW,tv:r.tv+8}}),M_=l(function(e,r){return j_(v(L_,z_,C(w_,0,e,0,0),r))}),D_=15739,A_=c6,Xr=P8,_b=function(e){e:for(;;)switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";case 15:return"f";default:var r=e;e=r;continue e}},yb=l(function(e,r){e:for(;;){if(r<16)return a(A,_b(r),e);var n=a(A,_b(a(Xr,16,r)),e),t=r/16|0;e=n,r=t;continue e}}),F_=function(e){return A_(e<0?a(A,"-",a(yb,P,-e)):a(yb,P,e))},Cb=function(e){return a(mu,"_",F_(a(M_,D_,e)))},Qa=l(function(e,r){var n=e.b,t=e.c;if(n){var o=a(Ke,t,r);return o.$?v(Sr,t,Cb(t),r):r}else return r}),M0=l(function(e,r){return a(vd,g7(e),_7(r))}),Hr=Ul,Rt=l(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(Ke,o,e);if(c.$)return a(M0,"className",Hr("_unstyled"));var i=c.a;return a(M0,"className",Hr(i))}else return n}),hn=l(function(e,r){return a(iu,sd(e),dd(r))}),yu=l(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(Ke,o,e);if(c.$)return a(hn,"class","_unstyled");var i=c.a;return a(hn,"class",i)}else return n}),Cu=function(e){return l7(fu(e))},D0=l(function(e,r){return a($d,e,fu(r))}),mo=function(e){return Ya(fu(e))},A0=l(function(e,r){return a(ud,e,fu(r))}),$c=l(function(e,r){var n=e.a,t=e.b,o=r.a,c=r.b;switch(t.$){case 4:var L=t.a;return h(a(A,h(n,L),o),c);case 0:var d=t.a,b=t.b,g=t.c,p=v(se,Qa,c,b),i=v(se,lc,h(P,p),g),_=i.a,k=i.b,L=v(mo,d,a(G,Rt(k),b),Be(_));return h(a(A,h(n,L),o),k);case 1:var s=t.a,d=t.b,b=t.c,g=t.d,p=v(se,Qa,c,b),f=v(se,lc,h(P,p),g),_=f.a,k=f.b,L=C(A0,s,d,a(G,Rt(k),b),Be(_));return h(a(A,h(n,L),o),k);case 2:var d=t.a,b=t.b,g=t.c,p=v(se,Qa,c,b),$=v(se,$c,h(P,p),g),_=$.a,k=$.b,L=v(Cu,d,a(G,Rt(k),b),Be(_));return h(a(A,h(n,L),o),k);default:var s=t.a,d=t.b,b=t.c,g=t.d,p=v(se,Qa,c,b),y=v(se,$c,h(P,p),g),_=y.a,k=y.b,L=C(D0,s,d,a(G,Rt(k),b),Be(_));return h(a(A,h(n,L),o),k)}}),lc=l(function(e,r){var n=r.a,t=r.b;switch(e.$){case 4:var _=e.a;return h(a(A,_,n),t);case 0:var $=e.a,s=e.b,d=e.c,b=v(se,Qa,t,s),o=v(se,lc,h(P,b),d),p=o.a,y=o.b,_=v(mo,$,a(G,Rt(y),s),Be(p));return h(a(A,_,n),y);case 1:var f=e.a,$=e.b,s=e.c,d=e.d,b=v(se,Qa,t,s),c=v(se,lc,h(P,b),d),p=c.a,y=c.b,_=C(A0,f,$,a(G,yu(y),s),Be(p));return h(a(A,_,n),y);case 2:var $=e.a,s=e.b,d=e.c,b=v(se,Qa,t,s),i=v(se,$c,h(P,b),d),p=i.a,y=i.b,_=v(Cu,$,a(G,Rt(y),s),Be(p));return h(a(A,_,n),y);default:var f=e.a,$=e.b,s=e.c,d=e.d,b=v(se,Qa,t,s),g=v(se,$c,h(P,b),d),p=g.a,y=g.b,_=C(D0,f,$,a(G,yu(y),s),Be(p));return h(a(A,_,n),y)}}),Ti=function(e){return u([e])},Pu=e0,po=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,f=e,$=v(e,t,o,v(po,e,r,c)),s=i;e=f,r=$,n=s;continue e}}),F0="\x07",Pb=x(function(e,r,n){return a(Mr,r,a($n,e,n))}),I_=x(function(e,r,n){return n+(`
`+v(Pb,F0,r,e))}),V_=function(e){return v(po,I_,"",e)},Sb=l(function(e,r){return v(po,x(function(n,t,o){return o+(`
`+v(Pb,"."+F0,"#"+(e+("."+t)),n))}),"",r)}),I0=l(function(e,r){var n=(function(){if(r.$){var o=r.a,c=r.b,i=r.c;return a(Sb,o,c)+(`
`+a(Sb,o+" ",i))}else{var t=r.a;return V_(t)}})();return v(mo,"span",u([a(hn,"style","display: none;"),a(hn,"class","elm-css-style-wrapper")]),u([v(mo,"style",(function(){if(e.$)return P;var t=e.a;return u([a(hn,"nonce",t)])})(),Ti(Pu(n)))]))}),B_=J(function(e,r,n,t){var o=v(se,Qa,He,n),c=v(se,lc,h(P,o),t),i=c.a,f=c.b,$=a(I0,e,_u(f)),s=a(G,Rt(f),n);return v(mo,r,s,a(A,$,Be(i)))}),H_=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b;if(ie(e,t))return!0;var c=e,i=o;e=c,r=i;continue e}else return!1}),R_=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b,c="_"+t;if(a(H_,c,o)){var i=c,f=o;e=i,r=f;continue e}else return c}else return e}),kb=x(function(e,r,n){var t=a(R_,"_",n),o=a(I0,e,r);return h(t,o)}),E_=J(function(e,r,n,t){var o=v(se,Qa,He,n),c=v(se,$c,h(P,o),t),i=c.a,f=c.b,$=v(kb,e,_u(f),i),s=a(G,Rt(f),n);return v(Cu,r,s,a(A,$,Be(i)))}),U_=Le(function(e,r,n,t,o){var c=v(se,Qa,He,t),i=v(se,$c,h(P,c),o),f=i.a,$=i.b,s=v(kb,e,_u($),f),d=a(G,yu($),t);return C(D0,r,n,d,a(A,s,Be(f)))}),q_=Le(function(e,r,n,t,o){var c=v(se,Qa,He,t),i=v(se,lc,h(P,c),o),f=i.a,$=i.b,s=a(I0,e,_u($)),d=a(G,yu($),t);return C(A0,r,n,d,a(A,s,Be(f)))}),Y_=function(e){switch(e.$){case 4:var r=e.a;return r;case 0:var t=e.a,o=e.b,c=e.c;return C(B_,z,t,o,c);case 1:var n=e.a,t=e.b,o=e.c,c=e.d;return V(q_,z,n,t,o,c);case 2:var t=e.a,o=e.b,c=e.c;return C(E_,z,t,o,c);default:var n=e.a,t=e.b,o=e.c,c=e.d;return V(U_,z,n,t,o,c)}},Su=Y_,N_=function(e){return a(pn,u([a(X,"position","fixed"),a(X,"inset","0"),a(X,"overflow","clip"),a(X,"background-color","transparent")]),u([Su(e)]))},Rr=Pu,G_=function(e){var r=e.cI;if(r.b){var n=r.a,t=n.b;return a(pn,u([a(X,"position","fixed"),a(X,"inset","0"),a(X,"background-color","transparent"),a(X,"overflow","clip")]),u([t]))}else return Rr("")},V0=function(e){var r=e.a,n=e.b;return H(r,n,P)},O_=function(e){return{oL:e.oL,a6:{ss:Le(function(r,n,t,o,c){return V0(C(e.ss,r,t,o,c))}),sw:J(function(r,n,t,o){return V0(v(e.sw,r,t,o))}),cf:J(function(r,n,t,o){return v(e.cf,r,t,o)}),aA:J(function(r,n,t,o){return v(e.aA,r,t,o)}),ur:J(function(r,n,t,o){return N_(v(e.ur,r,t,o))})},aC:J(function(r,n,t,o){return v(e.aC,r,t,o)}),rb:e.rb,i2:function(r){return x_},rl:e.rl,ew:function(r){return 0},cI:u([{aC:P,by:"play",rk:x(function(r,n,t){return V0(a(e.rk,r,t))}),rl:e.rl,eS:!1}]),rA:G_,eU:l(function(r,n){return h(0,fe)}),aA:function(r){return ft},h7:z,e7:function(r){return P}}},W_=function(e){return{$:1,a:e}},J_=function(e){return{$:0,a:e}},Z_=ne,AU=0,FU=1,xb=zr(function(e,r,n,t,o,c){return{lN:c,lY:r,np:t,nx:n,nD:e,nE:o}}),wb=e6,ku=n6,ho=function(e){return e===""},zi=l(function(e,r){return e<1?"":v(Za,0,e,r)}),Mi=t6,jb=Le(function(e,r,n,t,o){if(ho(o)||a(wb,"@",o))return z;var c=a(ku,":",o);if(c.b){if(c.b.b)return z;var i=c.a,f=Mi(a(Xa,i+1,o));if(f.$===1)return z;var $=f;return D(Cr(xb,e,a(zi,i,o),$,r,n,t))}else return D(Cr(xb,e,o,z,r,n,t))}),Lb=J(function(e,r,n,t){if(ho(t))return z;var o=a(ku,"/",t);if(o.b){var c=o.a;return V(jb,e,a(Xa,c,t),r,n,a(zi,c,t))}else return V(jb,e,"/",r,n,t)}),Tb=x(function(e,r,n){if(ho(n))return z;var t=a(ku,"?",n);if(t.b){var o=t.a;return C(Lb,e,D(a(Xa,o+1,n)),r,a(zi,o,n))}else return C(Lb,e,z,r,n)}),zb=l(function(e,r){if(ho(r))return z;var n=a(ku,"#",r);if(n.b){var t=n.a;return v(Tb,e,D(a(Xa,t+1,r)),a(zi,t,r))}else return v(Tb,e,z,r)}),Mb=function(e){return a(Rn,"http://",e)?a(zb,0,a(Xa,7,e)):a(Rn,"https://",e)?a(zb,1,a(Xa,8,e)):z},IU=ne,ya=qa,X_=ya(0),ua=Yl,Di=l(function(e,r){return a(ua,function(n){return ya(e(n))},r)}),K_=x(function(e,r,n){return a(ua,function(t){return a(ua,function(o){return ya(a(e,t,o))},n)},r)}),Ai=function(e){return v(Ka,K_(A),ya(P),e)},xu=r7,Q_=l(function(e,r){var n=r;return Gl(a(ua,xu(e),n))}),ey=x(function(e,r,n){return a(Di,function(t){return 0},Ai(a(G,Q_(e),r)))}),ry=x(function(e,r,n){return ya(0)}),ay=l(function(e,r){var n=r;return a(Di,e,n)});Or.Task=Zl(X_,ey,ry,ay);var Db=bi("Task"),Fi=l(function(e,r){return Db(a(Di,e,r))}),ny=R7,wu=function(e){return{$:9,a:e}},Kr=l(function(e,r){if(r.$)return z;var n=r.a;return e(n)}),ty=function(e){return{$:3,a:e}},vc=nd,ju=x(function(e,r,n){return v(se,l(function(t,o){var c=o.a,i=o.b,f=a(e.eU,t,c),$=f.a,s=f.b;return h($,fa(u([i,a(vc,ty,s)])))}),h(n,fe),r)}),oy=function(e){switch(e){case"true":return D(!0);case"false":return D(!1);default:return z}},cy=function(e){return{$:1,a:e}},iy={$:0},fy=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Ab=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,f=o.c,$=o.d,s=o.e,d=e.e,b=d.a,g=d.b,p=d.c,y=d.d,_=y.a,k=y.b,L=y.c,w=y.d,I=y.e,R=d.e;return V(Fe,0,k,L,V(Fe,1,n,t,V(Fe,0,i,f,$,s),w),V(Fe,1,g,p,I,R))}else{var r=e.a,n=e.b,t=e.c,B=e.d,c=B.a,i=B.b,f=B.c,$=B.d,s=B.e,Y=e.e,b=Y.a,g=Y.b,p=Y.c,y=Y.d,R=Y.e;return V(Fe,1,n,t,V(Fe,0,i,f,$,s),V(Fe,0,g,p,y,R))}else return e},Fb=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,f=o.c,$=o.d,s=$.a,d=$.b,b=$.c,g=$.d,p=$.e,y=o.e,_=e.e,k=_.a,L=_.b,w=_.c,I=_.d,R=_.e;return V(Fe,0,i,f,V(Fe,1,d,b,g,p),V(Fe,1,n,t,y,V(Fe,0,L,w,I,R)))}else{var r=e.a,n=e.b,t=e.c,B=e.d,c=B.a,i=B.b,f=B.c,Y=B.d,y=B.e,W=e.e,k=W.a,L=W.b,w=W.c,I=W.d,R=W.e;return V(Fe,1,n,t,V(Fe,0,i,f,Y,y),V(Fe,0,L,w,I,R))}else return e},uy=zt(function(e,r,n,t,o,c,i){if(c.$===-1&&!c.a){var f=c.a,$=c.b,s=c.c,d=c.d,b=c.e;return V(Fe,n,$,s,d,V(Fe,0,t,o,b,i))}else{e:for(;;)if(i.$===-1&&i.a===1)if(i.d.$===-1)if(i.d.a===1){var g=i.a,p=i.d,y=p.a;return Fb(r)}else break e;else{var _=i.a,k=i.d;return Fb(r)}else break e;return r}}),Lu=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.d,f=e.e;if(c===1)if(i.$===-1&&!i.a){var $=i.a;return V(Fe,r,n,t,Lu(o),f)}else{var s=Ab(e);if(s.$===-1){var d=s.a,b=s.b,g=s.c,p=s.d,y=s.e;return V(oc,d,b,g,Lu(p),y)}else return En}else return V(Fe,r,n,t,Lu(o),f)}else return En},Ii=l(function(e,r){if(r.$===-2)return En;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(oe(e,t)<0)if(c.$===-1&&c.a===1){var f=c.a,$=c.d;if($.$===-1&&!$.a){var s=$.a;return V(Fe,n,t,o,a(Ii,e,c),i)}else{var d=Ab(r);if(d.$===-1){var b=d.a,g=d.b,p=d.c,y=d.d,_=d.e;return V(oc,b,g,p,a(Ii,e,y),_)}else return En}}else return V(Fe,n,t,o,a(Ii,e,c),i);else return a($y,e,Nr(uy,e,r,n,t,o,c,i))}),$y=l(function(e,r){if(r.$===-1){var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(ie(e,t)){var f=fy(i);if(f.$===-1){var $=f.b,s=f.c;return V(oc,n,$,s,c,Lu(i))}else return En}else return V(oc,n,t,o,c,a(Ii,e,i))}else return En}),Ib=l(function(e,r){var n=a(Ii,e,r);if(n.$===-1&&!n.a){var t=n.a,o=n.b,c=n.c,i=n.d,f=n.e;return V(Fe,1,o,c,i,f)}else{var $=n;return $}}),Et=x(function(e,r,n){var t=r(a(Ke,e,n));if(t.$)return a(Ib,e,n);var o=t.a;return v(Sr,e,o,n)}),ly=function(e){return a(Et,e,a(Ie,te(0),a(Ie,Gd(1),D)))},vy=l(function(e,r){return v(po,x(function(n,t,o){return a(e,n,t)?v(Sr,n,t,o):o}),He,r)}),sy=function(e){if(e.b){var r=su(a(vy,l(function(n,t){return t>1}),v(se,l(function(n,t){return a(ly,n.by,t)}),He,e)));return r.b?D(cy(r)):z}else return D(iy)},dy=function(e){return e?"true":"false"},B0=l(function(e,r){return r.b?v(Ka,A,r,e):e}),gn=function(e){return v(Ka,B0,P,e)},_n=l(function(e,r){return gn(a(G,e,r))}),go=4294967295>>>32-ln,VU=f8,Vi=W9,by=x(function(e,r,n){e:for(;;){var t=go&r>>>e,o=a(Vi,t,n);if(o.$){var s=o.a;return a(Vi,go&r,s)}else{var c=o.a,i=e-ln,f=r,$=c;e=i,r=f,n=$;continue e}}}),Vb=function(e){return e>>>5<<5},$a=l(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d;return e<0||oe(e,n)>-1?z:oe(e,Vb(n))>-1?D(a(Vi,go&e,c)):D(v(by,t,e,o))}),Bb=function(e){var r=e;return a(te,r.nW,a($a,a(Xr,r.cx,r.dc+r.aQ),r.ep))},_o=function(e){if(e.$){var n=e.a;return a(te,n.nW,a($a,n.aQ,n.ep))}else{var r=e.a;return Bb(r)}},Tu=function(e){var r=e.b;return r},sc=function(e){var r=e.b;return _o(r).b},dc=function(e){return e.m0},yn=function(e){return e.e},my=function(e){return e.S},N=Xs,Hb=function(e){var r=e;return a(G,function(n){var t=n.a,o=n.b;return h(r.re(t)+"Off",N(o.dY)+(","+N(o.e9)))},r.cK)},py=function(e){return Hb(e.f)},hy=function(e){return e?"landscape":"portrait"},gy=function(e){var r=e;return r.cA.r8+("|"+hy(r.dF))},Ut=l(function(e,r){return v(se,V6(e),A6(0),r)}),Rb=function(e){return a(Od,0,a(Ut,function(r){var n=r.a,t=r.b;return a(Ut,Hr,u([n,t]))},e))},zu=function(e){return"play:"+e},Eb=function(e){switch(e){case 0:return"hudConfigurations";case 1:return"hudInputs";case 2:return"hudFpsMeter";case 3:return"hudProfiler";case 4:return"hudTape";case 5:return"hudPalette";case 6:return"hudCommandPalette";default:return"hudDevice"}},H0=function(e){var r=e;return r.aK},BU=0,HU=7,RU=2,EU=1,UU=5,xr=l(function(e,r){return v(Ka,l(function(n,t){return e(n)?a(A,n,t):t}),P,r)}),Mu=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var o=e,c=t;e=o,r=c;continue e}else return!1}),Bi=l(function(e,r){return a(Mu,function(n){return ie(n,e)},r)}),Ub=function(e){return a(xr,function(r){return a(Bi,r,e)},u([0,1,2,5,7]))},_y=function(e){return a(Mr,",",a(G,Eb,Ub(H0(e.f))))},Nn=l(function(e,r){return"play:"+(r+(":"+e))}),yy=function(e){return e.bE},qb=function(e){var r=e;return r.gz},Cy=function(e){var r=e;return r.cV.dG.r8},Du=function(e){var r=e;return r.dz},Py=function(e){var r=e;return r.c3.dG.r8},Yb=function(e){switch(e){case 0:return"Red";case 1:return"Green";case 2:return"Yellow";case 3:return"Blue";case 4:return"Magenta";default:return"Cyan"}},Sy=function(e){return a(Mr,"|",u([Cy(e),Py(e),Du(e)?"1":"0",Yb(qb(e))]))},Nb=function(e){switch(e){case 0:return"User";case 1:return"Author";default:return"Developer"}},Gb=l(function(e,r){var n=sc(r.tY),t=a(_n,function(o){var c=a(Ke,o.by,n.cI);if(c.$)return P;var i=c.a;return Hb(i.hG)},e.cI);return u([h(zu("hud-panel-layout"),Rb(py(r.rb))),h(a(Nn,r.sE,"panel-layout"),Rb(t)),h(zu("mode"),Nb(dc(r.rb))),h(a(Nn,r.sE,"theme"),Sy(yn(r.rb))),h(a(Nn,r.sE,"device"),gy(my(r.rb))),h(a(Nn,r.sE,"hud-open-panels"),_y(r.rb)),h(a(Nn,r.sE,"tape-record-from-start"),dy(yy(r.rb)))])}),qU=ne,YU=1,NU=0,GU=2,R0=u([{aD:0,r8:"iPhone SE",Z:{hb:667,ie:375}},{aD:0,r8:"iPhone 12 Pro",Z:{hb:844,ie:390}},{aD:0,r8:"iPhone 14 Pro Max",Z:{hb:932,ie:430}},{aD:0,r8:"Pixel 7",Z:{hb:915,ie:412}},{aD:0,r8:"Samsung Galaxy S20 Ultra",Z:{hb:915,ie:412}},{aD:0,r8:"Samsung Galaxy S8+",Z:{hb:740,ie:360}},{aD:1,r8:"Galaxy Z Fold 5",Z:{hb:882,ie:344}},{aD:1,r8:"Surface Duo",Z:{hb:720,ie:540}},{aD:2,r8:"iPad Mini",Z:{hb:1024,ie:768}},{aD:2,r8:"iPad Air",Z:{hb:1180,ie:820}},{aD:2,r8:"iPad Pro",Z:{hb:1366,ie:1024}},{aD:2,r8:"Surface Pro 7",Z:{hb:1368,ie:912}}]),ky=function(e){return kr(a(xr,function(r){return ie(r.r8,e)},R0))},OU=ne,WU=ne,Ob=14,xy=8,wy=function(e){return e===" "||e==="	"||e==="/"||e==="."||e===":"||e===";"||e===","||e==="|"||e==="\\"||e==="_"||e==="-"||e==="*"},jy=function(e){var r=it(e);return r>=97&&r<=122},Ly=function(e){var r=it(e);return r>=65&&r<=90},Ty=x(function(e,r,n){e:for(;;)if(r.b){var t=r.a,o=r.b,c=wy(e)?Ob:jy(e)&&Ly(t)?xy:0,i=t,f=o,$=a(A,c,n);e=i,r=f,n=$;continue e}else return Be(n)}),zy=function(e){if(e.b){var r=e.a,n=e.b;return a(A,Ob,v(Ty,r,n,P))}else return P},E0=u6,My=function(e){var r=Si(e),n=a(G,E0,r);return{kZ:zy(r),ji:n}},Au=l(function(e,r){return{aR:r,ev:z,aU:!1,hJ:a(G,function(n){return h(n,My(e(n)))},r),bT:0,hX:"",ax:0}}),U0=x(function(e,r,n){if(r.$===1)return z;var t=r.a;if(n.$===1)return z;var o=n.a;return D(a(e,t,o))}),JU=1,ZU=0,Dy=function(e){switch(e){case"portrait":return D(0);case"landscape":return D(1);default:return z}},Ay=x(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b;if(r(t))return D(e);var c=e+1,i=r,f=o;e=c,r=i,n=f;continue e}else return z}),Fu=Ay(0),Iu=function(e){return Fu(Ga(e))},Hi=l(function(e,r){var n=r;return F(n,{ev:e,ax:a(te,n.ax,a(Kr,function(t){return a(Iu,t,n.aR)},e))})}),Fy=function(e){var r=a($n,"|",e);if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a;return v(U0,l(function(c,i){return{cA:c,dF:i,bg:a(Hi,D(c),a(Au,function(f){return f.r8},R0))}}),ky(n),Dy(o))}else return z},Iy=z6,Ri=l(function(e,r){return h(e,r)}),Se=m6,Wb=function(e){return a(nb,P,a(Iy,ur(v(Yn,Ri,a(Un,0,Se),a(Un,1,Se))),e))},XU=ne,Vu=He,Jb=l(function(e,r){var n=r;return v(Sr,e,0,n)}),Bu=l(function(e,r){var n=a(Ke,e,r);return!n.$}),Zb=l(function(e,r){var n=r;return a(Bu,e,n)}),Vy=function(e){return Be(v(se,l(function(r,n){var t=n.a,o=n.b;return a(Zb,r,t)?h(t,o):h(a(Jb,r,t),a(A,r,o))}),h(Vu,P),e).b)},By=function(e){return{$:0,a:e}},Hy=3600,Ry=By(Hy),KU=1,QU=2,Ey=function(e){switch(e){case"User":return D(0);case"Author":return D(1);case"Developer":return D(2);default:return z}},q0=function(e){return{$:4,a:e}},Xb=function(e){return{$:3,a:e}},Kb=function(e){return{$:5,a:e}},Qb=function(e){return{$:1,a:e}},eq=ne,qt=l(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){var n=r.a,t=r.b,o=e-1,c=t;e=o,r=c;continue e}else return r}}),Hu=function(e){var r=e;return Z(Be(r.n),a(A,r.fn,r.p))},Ru=l(function(e,r){var n=r,t=Hu(n),o=a(Xr,Pr(t),e),c=a(qt,o,t);if(c.b){var i=c.a,f=c.b;return{p:f,n:Be(a(qn,o,t)),fn:i}}else return n}),Yt=o6,Uy=l(function(e,r){var n=l(function(p,y){var _=p.a,k=p.b;return oe(y,_)>-1&&oe(y,k)<1});switch(e.$){case 0:var t=e.a;return a(Kr,function(p){return a(n,t,p)?D(a(k0,t,p)):z},Yt(r));case 2:var t=e.a;return a(Kr,function(p){return a(n,t,p)?D(a(x0,t,p)):z},Mi(r));case 4:switch(r){case"true":return D(q0(!0));case"false":return D(q0(!1));default:return z}case 1:return D(Qb(r));case 3:var o=a(G,Yt,a($n,",",r));if(o.b&&!o.a.$&&o.b.b&&!o.b.a.$&&o.b.b.b&&!o.b.b.a.$&&o.b.b.b.b&&!o.b.b.b.a.$&&!o.b.b.b.b.b){var c=o.a.a,i=o.b,f=i.a.a,$=i.b,s=$.a.a,d=$.b,b=d.a.a;return D(Xb(C(U,c,f,s,b)))}else return z;default:var g=e.a;return a(de,function(p){return Kb(a(Ru,p,g))},a(Fu,Ga(r),Hu(g)))}}),e2=l(function(e,r){var n=dn(e);return a(G,function(t){return F(t,{a8:a(G,function(o){var c=o.a,i=o.b;return h(c,(function(){var f=a(Ke,c,n);if(f.$)return i;var $=f.a;return a(te,i,a(Uy,i,$))})())},t.a8)})},r)}),Nt=l(function(e,r){var n=a(xr,function(c){var i=c.a;return ie(i,e)},r);if(n.b){var t=n.a,o=t.b;return D(o)}else return z}),rq=ne,qy=x(function(e,r,n){var t=e(r);if(t.$)return n;var o=t.a;return a(A,o,n)}),wr=l(function(e,r){return v(Ka,qy(e),P,r)}),r2=l(function(e,r){return e<1?r:v(Za,0,-e,r)}),a2=a6,Yy=l(function(e,r){return a(a2,"Off",r)?e(a(r2,Ja("Off"),r)):z}),Ny=function(e){var r=a($n,",",e);if(r.b&&r.b.b&&!r.b.b.b){var n=r.a,t=r.b,o=t.a;return v(U0,l(function(c,i){return{dY:c,e9:i}}),Yt(n),Yt(o))}else return z},n2=l(function(e,r){var n=r,t=a(wr,function(o){var c=o.a,i=o.b;return a(Kr,function(f){return a(de,Ri(f),Ny(i))},a(Yy,n.rd,c))},e);return F(n,{cK:t})}),Gy=l(function(e,r){return F(r,{f:a(n2,e,r.f)})}),aq=6,nq=3,tq=4,t2=function(e){switch(e){case"hudConfigurations":return D(0);case"hudInputs":return D(1);case"hudFpsMeter":return D(2);case"hudProfiler":return D(3);case"hudTape":return D(4);case"hudPalette":return D(5);case"hudCommandPalette":return D(6);case"hudDevice":return D(7);default:return z}},Oy=function(e){return{$:1,a:e}},Y0=Oy,Gt=l(function(e,r){var n=r;switch(e.$){case 0:var t=e.a;return F(n,{aK:a(Bi,t,n.aK)?a(xr,bu(t),n.aK):a(A,t,n.aK)});case 1:var t=e.a;return F(n,{aK:a(A,t,a(xr,bu(t),n.aK))});case 2:var t=e.a;return F(n,{aK:a(xr,bu(t),n.aK)});default:var t=e.a;return F(n,{cK:a(xr,function(o){var c=o.a;return!ie(c,t)},n.cK)})}}),Wy=l(function(e,r){var n=Ub(a(wr,t2,a($n,",",e)));return F(r,{f:v(se,a(Ie,Y0,Gt),r.f,n)})}),oq=ne,N0={I:He},cq=3,iq=4,fq=2,uq=1,$q=5,lq=0,o2=function(e){switch(e){case"windows":return 0;case"mac":return 1;case"linux":return 2;case"android":return 3;case"ios":return 4;default:return 5}},Jy=l(function(e,r){return{oL:{oV:!1,qH:z},aC:N0,ph:P,gJ:0,b2:e,pX:r.pX,p7:r.p7,iL:r.iL,iO:r.iO,lI:!0,qJ:r.qJ,qK:r.qK,fJ:"play",mn:r.mn,mR:He,m0:Qd,sB:Vu,sC:o2(r.sC),sG:{lf:0,lg:0,eD:0,ia:0,oC:0,oD:0},nv:r.nv,s2:r.s2,f5:r.f5,tj:r.tj,tp:r.tp,t6:r.t6,oE:!0,uv:r.uv,oK:!1}}),c2={aD:0,r8:"iPhone 12 Pro",Z:{hb:844,ie:390}},Zy={cA:c2,dF:0,bg:a(Hi,D(c2),a(Au,function(e){return e.r8},R0))},Xy=function(e){return e.hZ+(": "+e.i9)},vq=ne,sq=ne,Eu={bx:P,bD:P,bj:0,bk:0},Ky=Eu,Qy={jv:0,f3:Ky},i2={$:0},eC=i2,G0=function(e){return{ee:z,rd:e.rd,re:e.re,cK:P,aK:P}},dq=ne,bq=3,mq=1,pq=4,hq=0,gq=2,f2=h(0,u([1,2,3,4,5])),rC=function(e){var r=e.a,n=e.b;return{p:n,n:P,fn:r}},yo=function(e){var r=e;return r.fn},u2=function(e){var r=e,n=r.p;if(n.b){var t=n.a,o=n.b;return{p:o,n:a(A,r.fn,r.n),fn:t}}else return r},$2=function(e){return a(Ru,0,e)},We=function(e){return!e.b},aC=function(e){var r=e;return We(r.p)},l2=l(function(e,r){var n=function(t){e:for(;;){if(ie(yo(t),e))return D(t);if(aC(t))return z;var o=u2(t);t=o;continue e}};return n($2(r))}),nC=function(e){var r=rC(f2);return a(te,r,a(l2,e,r))},O0=ib,Gn=function(e){var r=e;return r.dz?r.c3:r.cV},W0=function(e){var r=Gn(e).dG.r8,n=O0,t=n.a,o=n.b;return kr(a(xr,function(c){return ie(c.r8,r)},a(A,t,o)))},tC=function(e){var r=O0,n=r.a,t=r.b;return{cQ:nC(qb(e)),bg:a(Hi,W0(e),a(Au,function(o){return o.r8},a(A,n,t)))}},Ei={$:0},_q=ne,oC=Ei,cC=function(e){var r=e.oL,n=e.rn,t=e.rm,o=e.hd,c=e.ro,i=e.f6;return{oL:{P:a(Au,Xy,r),qH:z},d6:z,S:t,f:G0({rd:t2,re:Eb}),c$:Qy,m0:o,aL:eC,bE:n,R:tC(c),e:c,cN:oC,oK:!1}},Ui={$:0},za=l(function(e,r){return{$:0,a:e,b:r}}),bc=function(e){return{$:0,a:e}},yq=ne,v2=l(function(e,r){return a(_0,e,function(n){return r})}),s2=l(function(e,r){var n=a(we,1,e);return{cx:n,a9:1,aQ:0,ep:a(v2,n,r),nW:r,dc:0}}),d2=l(function(e,r){return bc(a(s2,e,r))}),qi=function(e){return{$:1,a:e}},b2=function(e){return qi({aQ:0,ep:a(v2,1,e),nW:e})},iC=l(function(e,r){if(e.$)return b2(r);var n=e.a;return a(d2,n,r)}),fC=x(function(e,r,n){return a(za,Ui,a(iC,e,h(r,n)))}),uC=l(function(e,r){return a(za,Ui,a(d2,1,h(e,r)))}),Co=l(function(e,r){return{$:1,a:e,b:r}}),$C=x(function(e,r,n){var t=n.a,o=n.b;return h(e(t),r(o))}),lC=function(e){var r=l(function(n,t){var o=n.a,c=n.b,i=t.a,f=t.b;return h(a(A,o,i),a(A,c,f))});return v(Ka,r,h(P,P),e)},m2=function(e){switch(e.$){case 0:return h(P,fe);case 1:var r=e.a;return v($C,gn,fa,lC(a(G,m2,r)));case 2:var n=e.a;return h(P,n);default:var t=e.a;return h(u([t]),fe)}},vC=l(function(e,r){return F(r,{a8:e(r.a8)})}),Po=l(function(e,r){var n=r.a,t=r.b;return h(n,e(t))}),sC=x(function(e,r,n){return a(te,NaN,Yt(a(e,r,n)))}),dC=l(function(e,r){var n=a(Mu,function(t){return t!=="0"&&t!=="."},Si(r));return Z(e&&n?"-":"",r)}),bC=f6,p2=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ci(n);if(t.$===1)return"01";var o=t.a;return a(mu,"0",p2(o))}else{var c=it(r);return c>=48&&c<57?a(mu,bC(c+1),n):"0"}},mc=M8,h2=V8,Uu=x(function(e,r,n){return Z(n,a(cc,e-Ja(n),tc(r)))}),g2=N8,_2=function(e){var r=a($n,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a;return h(n,o)}else{var n=r.a;return h(n,"0")}else return h("0","0")},So=l(function(e,r){var n=r.a,t=r.b;return h(e(n),t)}),mC=function(e){var r=a($n,"e",N(xe(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a,c=a(te,0,Mi(a(Rn,"+",o)?a(Xa,1,o):o)),i=_2(n),f=i.a,$=i.b,s=Z(f,$),d=c<0?a(te,"0",a(de,function(b){var g=b.a,p=b.b;return g+("."+p)},a(de,So(tc),Ci(Z(a(cc,xe(c),"0"),s))))):v(Uu,c+1,"0",s);return Z(e<0?"-":"",d)}else{var n=r.a;return Z(e<0?"-":"",n)}else return""},pC=x(function(e,r,n){if(mc(n)||h2(n))return N(n);var t=n<0,o=_2(mC(xe(n))),c=o.a,i=o.b,f=Ja(c)+r,$=Z(a(cc,-f+1,"0"),v(Uu,f,"0",Z(c,i))),s=Ja($),d=a(we,1,f),b=a(e,t,v(Za,d,s,$)),g=v(Za,0,d,$),p=b?g2(a(te,"1",a(de,p2,Ci(g2(g))))):g,y=Ja(p),_=p==="0"?p:r<=0?Z(p,a(cc,xe(r),"0")):oe(r,Ja(i))<0?v(Za,0,y-r,p)+("."+v(Za,y-r,y,p)):Z(c+".",v(Uu,r,"0",i));return a(dC,t,_)}),pc=pC(l(function(e,r){var n=Ci(r);if(n.$===1)return!1;if(n.a.a==="5")if(n.a.b===""){var t=n.a;return!e}else{var o=n.a;return!0}else{var c=n.a,i=c.a;return(function(f){return f>53&&e||f>=53&&!e})(it(i))}})),hC=sC(pc),gC=x(function(e,r,n){var t=a(du,10,xe(r-e)),o=t<0?3:t<1?2:t<2?1:0;return a(hC,o,n)}),hc=x(function(e,r,n){return a(G,function(t){return e(t)?r(t):t},n)}),_C=function(e){switch(e.$){case 2:var n=e.a,r=e.b;return a(hc,a(Ie,vn,Ga(n)),Po(function(o){if(o.$===2){var c=o.a,i=c.a,f=c.b;return a(x0,h(i,f),v(mr,i,f,r))}else return o}));case 1:var n=e.a,r=e.b;return a(hc,a(Ie,vn,Ga(n)),Po(function(o){return o.$===1?Qb(r):o}));case 0:var n=e.a,r=e.b;return a(hc,a(Ie,vn,Ga(n)),Po(function(o){if(o.$)return o;var c=o.a,i=c.a,f=c.b;return a(k0,h(i,f),v(gC,i,f,v(mr,i,f,r)))}));case 3:var n=e.a,r=e.b;return a(hc,a(Ie,vn,Ga(n)),Po(function(o){return o.$===3?Xb(r):o}));case 4:var n=e.a,r=e.b;return a(hc,a(Ie,vn,Ga(n)),Po(function(o){return o.$===4?q0(r):o}));default:var n=e.a,t=e.b;return a(hc,a(Ie,vn,Ga(n)),Po(function(o){if(o.$===5){var c=o.a;return Kb(a(te,c,a(de,function(i){return a(Ru,i,c)},a(Fu,Ga(t),Hu(c)))))}else return o}))}},yC=function(e){return vC(_C(e))},y2=l(function(e,r){return a(G,yC(e),r)}),J0=x(function(e,r,n){var t=m2(r),o=t.a,c=t.b,i=function(f){return v(se,y2,f,o)};return{gK:c,cH:e?i(n.cH):n.cH,i3:i(n.i3)}}),Ar=l(function(e,r){var n=r;return a(Bi,e,n.aK)}),CC=function(e){return a(Ar,5,e.f)||a(Ar,6,e.f)||a(Ar,7,e.f)},C2=l(function(e,r){return r.ie>0&&r.hb>0?r:{hb:e.hb,eD:0,sJ:r.sJ,ia:0,ie:e.ie}}),PC={lq:!1,iN:!1,ls:0,lt:0,lv:P,i5:!1,m3:!1,nO:!1,nP:!1,kz:!1,dY:0,e9:0},SC=function(e){var r=e.of;if(r.$===1)return PC;var n=r.a,t=n.ia+.5*n.hb-.5*e.ux.hb,o=.5*e.ux.ie-n.eD-.5*n.ie,c=e.aa.i5?e.cq.cU:e.cq.hc,i=ie(c,D(e.fJ)),f=ie(e.cq.cU,D(e.fJ));return{lq:f&&e.aa.lq,iN:f&&e.aa.iN,ls:i?e.aa.ls:0,lt:i?e.aa.lt:0,lv:f?e.aa.lv:P,i5:f&&e.aa.i5,m3:i&&e.aa.m3,nO:f&&e.aa.nO,nP:f&&e.aa.nP,kz:f&&e.aa.kz,dY:e.aa.dY+o,e9:e.aa.e9+t}},kC={oT:!1,pU:!1,iN:!1,qg:P,eD:!1,rT:!1,s_:P,j2:!1,tv:!1,kz:!1},xC={p3:0,p4:0,qr:P,sP:0,sQ:z},Yi=function(e){var r=kr(a(xr,function($){return ie($.sJ,e.by)},e.rq.sI)),n=ie(e.aH,D(e.by)),t=n?e.rq.mn:kC,o=n?e.rq.uv:xC,c=a(de,C2(e.rq.f5),r),i=(function(){if(c.$)return e.rq.f5;var $=c.a;return{hb:$.hb,ie:$.ie}})(),f=SC({fJ:e.by,cq:e.cq,of:c,aa:e.rq.nv,ux:e.rq.f5});return{oL:(function(){var $=e.rb;if($.$===1)return{oV:!1,qH:z};var s=$.a;return{oV:CC(s),qH:s.oL.qH}})(),aC:e.aM,ph:e.rq.ph,gJ:e.gJ,b2:e.b2,pX:e.rq.pX,p7:e.rq.p7,iL:e.rq.iL,iO:e.rq.iO,lI:n,qJ:e.rq.qJ,qK:e.rq.qK,fJ:e.by,mn:t,mR:e.mR,m0:e.m0,sB:e.sB,sC:o2(e.rq.sC),sG:e.rq.sG,nv:f,s2:e.rq.s2,f5:i,tj:e.rq.tj,tp:e.rq.tp,t6:e.rq.t6,oE:e.oE,uv:o,oK:e.oK}},wC={cU:z,hc:z},jC=l(function(e,r){if(e.$)return G0(r);var n=e.a;return a(n2,n,G0(r))}),LC=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){var d=a(Ke,$,e);if(d.$)return s;var b=d.a,g=a(e2,n,b.rl),p=Yi({gJ:0,b2:g,aH:i,rb:z,by:b.by,rq:t,mR:He,m0:c,sB:Vu,aM:N0,cq:wC,oE:!1,oK:!1}),y=v(b.rk,p,r,o),_=y.a,k=y.b,L=y.c,w=v(J0,ie(f,D(b.by)),k,{cH:s.b8,i3:g}),I={aC:b.aC,fe:!1,gJ:0,b2:w.i3,gT:He,by:b.by,mR:He,bz:_,hG:a(jC,D(Wb(a(te,"",a(Nt,a(Nn,t.sE,"panel-layout"),t.sM)))),{rd:D,re:ne}),eS:b.eS,aM:N0,oE:!1};return F(s,{cz:a(A,a(vc,Co(b.by),w.gK),s.cz),cE:Z(s.cE,L),b8:w.cH,cI:v(Sr,$,I,s.cI)})}}}}}}}}}},TC=l(function(e,r){return a(Bu,e.by,r)?r:v(Sr,e.by,e,r)}),P2=function(e){return F(e,{f:a(Gt,Y0(4),e.f)})},zC=At("registerPanes",Ut(Hr)),S2=function(e){return{$:1,a:e}},k2="play-device-picker",qu={fm:k2,u:S2},Ca={$:11},er=x(function(e,r,n){return e(r(n))}),MC=N6,ut=l(function(e,r){return Db(a(MC,a(er,a(er,ya,e),La),a(ua,a(er,a(er,ya,e),Jr),r)))}),Ot=32,x2=l(function(e,r){return a(we,0,Ot*r-e.eI/2+Ot/2)}),ko=function(e){return e.fm+"-list"},xo=Z7,w2=x(function(e,r,n){var t=n,o=a(Kr,function(f){return a(Iu,f,t.aR)},r);if(o.$)return h(t,fe);var c=o.a,i=a(x2,e,c);return h(F(t,{ev:r,bT:i,ax:c}),a(ut,function(f){return e.u(Ca)},v(xo,ko(e),0,i)))}),DC=function(e){return{$:0,a:e}},gc=function(e){return{fm:e.fm,eI:320,jT:"Search devices\u2026",u:a(er,e.u,DC),ie:{rZ:320,us:26}}},AC=l(function(e,r){var n=r,t=v(w2,gc(e),D(n.cA),n.bg),o=t.a,c=t.b;return h(F(n,{bg:o}),c)}),FC=function(e){return{$:0,a:e}},_c=function(e){var r=e.fm,n=e.u;return{fm:r,eI:320,jT:"Search palettes\u2026",u:a(er,n,FC),ie:{rZ:320,us:26}}},Z0=x(function(e,r,n){var t=n,o=v(w2,_c(e),W0(r),t.bg),c=o.a,i=o.b;return h(F(t,{bg:c}),i)}),j2=function(e){return{$:0,a:e}},L2="play-theme-picker",yc={fm:L2,u:j2},IC=function(e){var r=a(Ar,5,e.f)?v(Z0,yc,e.e,e.R):h(e.R,fe),n=r.a,t=r.b,o=a(Ar,7,e.f)?a(AC,qu,e.S):h(e.S,fe),c=o.a,i=o.b;return h(F(e,{S:c,R:n}),fa(u([t,i])))},X0={$:1},VC=function(e){var r=e;return r.cx},T2=function(e){if(e.$)return b2(_o(e));var r=e.a;return bc(a(s2,VC(r),Bb(r)))},z2=function(e){var r=e.b;return a(za,X0,T2(r))},BC=function(e){switch(e){case"Red":return D(0);case"Green":return D(1);case"Yellow":return D(2);case"Blue":return D(3);case"Magenta":return D(4);case"Cyan":return D(5);default:return z}},M2=function(e){var r=O0,n=r.a,t=r.b;return a(Mu,function(o){return ie(o.r8,e)},a(A,n,t))},HC=function(e){switch(e){case"1":return D(!0);case"0":return D(!1);default:return z}},K0=l(function(e,r){var n=r;return F(n,{gz:e,cV:a(Pi,e,n.cV.dG),c3:a(Pi,e,n.c3.dG)})}),Q0=l(function(e,r){var n=r,t=a(Pi,n.gz,e);return e.ru?F(n,{cV:t,dz:!1}):F(n,{c3:t,dz:!0})}),D2=function(e){return Q0(S0(e))},ev=function(e){var r=e;return F(r,{dz:!r.dz})},RC=l(function(e,r){return ie(Du(r),e)?r:ev(r)}),EC=function(e){var r=a($n,"|",e);if(r.b&&r.b.b&&r.b.b.b&&r.b.b.b.b&&!r.b.b.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,f=c.b,$=f.a;return M2(n)&&M2(o)?v(U0,l(function(s,d){return a(RC,d,a(K0,s,a(D2,o,a(D2,n,fb))))}),BC($),HC(i)):z}else return z},UC=l(function(e,r){var n=a(te,P,r.rq.tp),t=a(te,He,a(de,dn,r.rq.tp)),o=e.ew(t),c=a(G,function(ze){return ze.by},e.cI),i=v(se,TC,He,e.cI),f=Vy(c),$=(function(){if(f.b&&!f.b.b){var ze=f.a;return D(ze)}else return z})(),s=a(te,e.rb.e,a(Kr,EC,a(Nt,a(Nn,r.rq.sE,"theme"),r.rq.sM))),d=a(te,e.rb.bE,a(Kr,oy,a(Nt,a(Nn,r.rq.sE,"tape-record-from-start"),r.rq.sM))),b=a(te,"",a(Nt,a(Nn,r.rq.sE,"hud-open-panels"),r.rq.sM)),g=a(te,e.rb.hd,a(Kr,Ey,a(Nt,zu("mode"),r.rq.sM))),p=a(te,Zy,a(Kr,Fy,a(Nt,a(Nn,r.rq.sE,"device"),r.rq.sM))),y=cC({oL:e.oL,rm:p,hd:g,rn:d,ro:s,f6:e.rb}),_=a(Wy,b,a(Gy,Wb(a(te,"",a(Nt,zu("hud-panel-layout"),r.rq.sM))),y)),k=d&&e.rb.g9?P2(_):_,L=a(e2,n,e.rl),w=v(se,Mt(LC,i,o,n,r.rq,s,g,$,kr(f)),{cz:P,cE:P,b8:L,cI:He},f),I=a(Jy,w.b8,r.rq),R=v(ju,e,w.cE,o),B=R.a,Y=R.b,W={b2:w.b8,rq:r.rq,cI:w.cI,Q:B,nq:P,nr:P},Q=(function(){if(e.rb.g9){var ze=v(fC,Ry,I,W);return d?z2(ze):ze}else return a(uC,I,W)})(),ue=IC(k),ve=ue.a,Pe=ue.b,Me={gP:sy(e.cI),aH:$,rb:ve,aT:f,fL:P,sE:r.rq.sE,tY:Q};return h(F(Me,{fL:a(Gb,e,Me)}),fa(a(A,a(vc,wu,Pe),a(A,zC(f),a(A,Y,w.cz)))))}),A2=function(e){return{$:10,a:e}},rv={$:1},qC=function(e){return{$:0,a:e}},F2={$:11},YC=l(function(e,r){return{$:4,a:e,b:r}}),NC=l(function(e,r){return{$:5,a:e,b:r}}),GC={$:6},Cc=w6,OC=C6,Pc=function(e){return a(Ne,dn,OC(e))},Yu=a(Ie,Na,a(Ie,wr(function(e){var r=e.a,n=e.b,t=Yt(r);if(t.$)return z;var o=t.a;return D(h(o,n))}),dn)),WC=J(function(e,r,n,t){return{q0:t,ut:n,dY:e,e9:r}}),Sc=j6,JC=V(Sc,WC,a(S,"x",q),a(S,"y",q),a(S,"w",q),a(S,"h",q)),ZC=Pc(JC),av=function(e){return{$:1,a:e}},Cq=3,kc={$:2},I2=function(e){switch(e){case 0:return"texture";case 1:return"sound";case 2:return"font";default:return"atlas"}},Wt=l(function(e,r){return I2(e)+(":"+r)}),XC=l(function(e,r){var n=r;return F(n,{I:v(Et,a(Wt,3,e.by),de(function(t){return av({ep:e.ep,aV:e.aV,aq:e.aq,H:kc})}),n.I)})}),nv=b6,KC=function(e){return C(Cc,x(function(r,n,t){return XC({ep:n,by:e,aV:r,aq:t})}),a(Ne,Yu,a(S,"mipImages",Pc(nv))),a(Ne,Yu,a(S,"frames",Pc(ZC))),a(S,"pixelated",ae))},tv=function(e){return so(u([a(Ne,D,e),re(z)]))},ov=a(Ne,te(""),tv(a(S,"error",Se))),Nu=function(e){return{$:3,a:e}},V2=function(e){return{$:3,a:e}},cv=function(e){return{$:2,a:e}},iv=function(e){return{$:0,a:e}},QC=l(function(e,r){switch(r.$){case 0:return iv({d2:0,d3:0,fi:z,aV:He,eL:He,aq:!1,H:Nu(e)});case 1:return av({ep:He,aV:He,aq:!1,H:Nu(e)});case 2:return cv({H:Nu(e)});default:return V2({H:Nu(e)})}}),Pq=2,Sq=1,kq=0,fv=function(e){switch(e){case"texture":return D(0);case"sound":return D(1);case"font":return D(2);case"atlas":return D(3);default:return z}},uv=J(function(e,r,n,t){var o=t,c=fv(e);if(c.$)return o;var i=c.a;return F(o,{I:v(Et,a(Wt,i,r),de(QC(n)),o.I)})}),Gu={$:1},eP=function(e){switch(e){case 0:return iv({d2:0,d3:0,fi:z,aV:He,eL:He,aq:!1,H:Gu});case 3:return av({ep:He,aV:He,aq:!1,H:Gu});case 1:return cv({H:Gu});default:return V2({H:Gu})}},$v=x(function(e,r,n){var t=n,o=fv(e);if(o.$)return t;var c=o.a;return F(t,{I:v(Sr,a(Wt,c,r),eP(c),t.I)})}),rP=l(function(e,r){var n=r;return F(n,{I:v(Et,a(Wt,1,e),de(function(t){return t.$===2?cv({H:kc}):t}),n.I)})}),B2=T6,aP=l(function(e,r){var n=r;return F(n,{I:v(Et,a(Wt,0,e.by),de(function(t){return t.$?t:iv({d2:e.d2,d3:e.d3,fi:e.fi,aV:e.aV,eL:e.eL,aq:e.aq,H:kc})}),n.I)})}),nP=function(e){return Nr(B2,zr(function(r,n,t,o,c,i){return aP({d2:o,d3:t,fi:i,by:e,aV:r,eL:n,aq:c})}),a(Ne,Yu,a(S,"mipImages",Pc(nv))),a(Ne,a(Ie,te(He),Yu),tv(a(S,"mipUrls",Pc(Se)))),a(S,"baseWidth",q),a(S,"baseHeight",q),a(S,"pixelated",ae),tv(a(S,"baseline",q)))},xc=x(function(e,r,n){var t=n,o=fv(e);if(o.$)return t;var c=o.a;return F(t,{I:a(Ib,a(Wt,c,r),t.I)})}),tP=function(e){var r=e.a,n=e.b,t=e.c,o=h(r,n);e:for(;;)switch(o.a){case"texture":switch(o.b){case"loading":return re(a($v,"texture",t));case"loaded":return nP(t);case"failed":return a(Ne,function(c){return v(uv,"texture",t,c)},ov);case"unloaded":return re(a(xc,"texture",t));case"cancelled":return re(a(xc,"texture",t));default:break e}case"atlas":switch(o.b){case"loading":return re(a($v,"atlas",t));case"loaded":return KC(t);case"failed":return a(Ne,function(c){return v(uv,"atlas",t,c)},ov);case"unloaded":return re(a(xc,"atlas",t));case"cancelled":return re(a(xc,"atlas",t));default:break e}case"sound":switch(o.b){case"loading":return re(a($v,"sound",t));case"loaded":return re(rP(t));case"failed":return a(Ne,function(c){return v(uv,"sound",t,c)},ov);case"unloaded":return re(a(xc,"sound",t));case"cancelled":return re(a(xc,"sound",t));default:break e}default:break e}return re(ne)},oP=a(T,tP,C(Cc,x(function(e,r,n){return H(e,r,n)}),a(S,"kind",Se),a(S,"status",Se),a(S,"id",Se))),cP=v(Yn,Ri,a(S,"instanceId",Se),oP),iP=El,fP=function(e){var r=a(iP,cP,e);if(r.$)return GC;var n=r.a,t=n.a,o=n.b;return a(NC,t,o)},On=l6,H2=l(function(e,r){return{$:2,a:e,b:r}}),wo=nd,lv=function(e){return v(se,Jb,Vu,e)},Ou=function(e){return lv(H0(e.hG))},xq=0,R2=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),E2=l(function(e,r){return{ns:r,n9:e}}),uP=ya(a(E2,P,He)),$P=function(e){return e?"w_":"d_"},lP=function(e){var r=e.a,n=e.b;return h(Z($P(r),n),e)},U2=J6,vP=zr(function(e,r,n,t,o,c){var i=x(function(d,b,g){e:for(;;){var p=g.a,y=g.b;if(p.b){var _=p.a,k=_.a,L=_.b,w=p.b;if(oe(k,d)<0){var I=d,R=b,B=h(w,v(e,k,L,y));d=I,b=R,g=B;continue e}else return oe(k,d)>0?h(p,v(n,d,b,y)):h(w,C(r,k,L,b,y))}else return h(p,v(n,d,b,y))}}),f=v(po,i,h(Na(t),c),o),$=f.a,s=f.b;return v(se,l(function(d,b){var g=d.a,p=d.b;return v(e,g,p,b)}),s,$)}),sP=l(function(e,r){return{lA:r,i7:e}}),vv=a7,dP=x(function(e,r,n){var t=n.a,o=n.b,c=(function(){return t?In:fo})();return a(Di,function(i){return h(r,i)},v(Y7,c,o,function(i){return a(vv,e,a(sP,r,i))}))}),bP=l(function(e,r){return v(po,Sr,r,e)}),mP=x(function(e,r,n){var t=x(function(b,g,p){var y=p.a,_=p.b,k=p.c;return H(y,_,a(A,v(dP,e,b,g),k))}),o=x(function(b,g,p){var y=p.a,_=p.b,k=p.c;return H(a(A,g,y),_,k)}),c=J(function(b,g,p,y){var _=y.a,k=y.b,L=y.c;return H(_,v(Sr,b,g,k),L)}),i=a(G,lP,r),f=Cr(vP,o,c,t,n.ns,dn(i),H(P,He,P)),$=f.a,s=f.b,d=f.c;return a(ua,function(b){return ya(a(E2,i,a(bP,s,dn(b))))},a(ua,function(b){return Ai(d)},Ai(a(G,U2,$))))}),pP=x(function(e,r,n){var t=r.lA,o=r.i7,c=function(f){var $=f.a,s=f.b,d=s.a,b=s.b,g=s.c;return ie($,o)?a(N7,g,t):z},i=a(wr,c,n.n9);return a(ua,function(f){return ya(n)},Ai(a(G,xu(e),i)))}),hP=l(function(e,r){var n=r.a,t=r.b,o=r.c;return v(R2,n,t,a(Ne,e,o))});Or["Browser.Events"]=Zl(uP,mP,pP,0,hP);var gP=bi("Browser.Events"),sv=x(function(e,r,n){return gP(v(R2,e,r,n))}),Ni=a(sv,0,"keydown"),dv=function(e){return{$:0,a:e}},Gi=l(function(e,r){return v(Ka,S,r,e)}),q2=X8,_P=function(e){var r=q2(e);return r==="INPUT"||r==="TEXTAREA"||r==="SELECT"},yP=l(function(e,r){if(r.$)return!1;var n=r.a;return ie(rb(e),tc(E0(n)))}),CP=l(function(e,r){return a(de,function(n){return n.by},kr(a(xr,function(n){return a(yP,e,n.n_)},r)))}),PP=function(e){return a(T,function(r){if(_P(r.od))return On("ignored: text input focused");if(r.pU||r.rT){var n=a(CP,r.i7,e);if(n.$)return On("ignored: no matching entry shortcut");var t=n.a;return re(dv(t))}else return On("ignored: no Ctrl/Cmd modifier")},V(Sc,J(function(r,n,t,o){return{pU:n,i7:r,rT:t,od:o}}),a(S,"key",Se),a(S,"ctrlKey",ae),a(S,"metaKey",ae),a(Gi,u(["target","tagName"]),Se)))},Y2=l(function(e,r){return Ni(PP(e))}),wq=ne,SP=function(e){return a(G,function(r){return{by:r.by,n_:a(de,ne,r.n_)}},e)},Wu=function(e){return e.oK},kP=Le(function(e,r,n,t,o){var c=a(Ke,o,n.cI);if(c.$)return z;var i=c.a,f=Yi({gJ:i.gJ,b2:i.b2,aH:r.aH,rb:D(r.rb),by:i.by,rq:n.rq,mR:i.mR,m0:dc(r.rb),sB:Ou(i),aM:i.aM,cq:t,oE:i.oE,oK:Wu(r.rb)}),$=C(e.a6.cf,f,n.Q,yn(r.rb),i.bz),s=a(wo,H2(o),a(Y2,SP($),i.hG)),d=a(wo,Co(o),C(e.a6.aA,f,n.Q,yn(r.rb),i.bz));return D(Li(u([d,s])))}),wc=function(e){var r=e.a;return ie(r,X0)},N2=function(e){return a(Ar,4,e.f)},xP=Kl("assetsResponse",nv),wP=xP(ne),G2="play-absorbs-pointer-",jP=function(e){return a(Rn,G2,e)},LP=l(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(jP(n))return z;if(a(Zb,n,e))return D(n);var o=e,c=t;e=o,r=c;continue e}else return z}),O2=function(e){var r=.5*e.ux.hb-e.aa.e9,n=e.aa.dY+.5*e.ux.ie,t=function(i){var f=a(C2,e.ux,i);return oe(n,f.eD)>-1&&oe(n,f.eD+f.ie)<1&&oe(r,f.ia)>-1&&oe(r,f.ia+f.hb)<1},o=a(de,function(i){return i.sJ},kr(a(xr,t,e.jJ))),c=a(LP,e.j$,e.aa.lv);return{cU:c,hc:o}},bv=function(e){return O2({jJ:e.rq.sI,j$:lv(su(e.cI)),aa:e.rq.nv,ux:e.rq.f5})},W2=function(e){return{$:6,a:e}},J2=function(e){return{$:3,a:e}},Z2=function(e){return{$:2,a:e}},X2={$:13},TP=a(T,function(e){return(e.i7==="p"||e.i7==="P")&&e.tv&&(e.pU||e.rT)?re(X2):On("not Cmd+Shift+P")},V(Sc,J(function(e,r,n,t){return{pU:n,i7:e,rT:t,tv:r}}),a(S,"key",Se),a(S,"shiftKey",ae),a(S,"ctrlKey",ae),a(S,"metaKey",ae))),zP=function(e){var r=e;return We(r.hJ)},Oi=l(function(e,r){return e.g8&&!zP(r)}),MP={$:4},DP=a(T,function(e){return(e.i7==="i"||e.i7==="I")&&(e.pU||e.rT)?re(MP):On("not Ctrl+I")},C(Cc,x(function(e,r,n){return{pU:r,i7:e,rT:n}}),a(S,"key",Se),a(S,"ctrlKey",ae),a(S,"metaKey",ae))),AP={$:12},FP=a(T,function(e){return(e.i7==="m"||e.i7==="M")&&(e.pU||e.rT)?re(AP):On("not Ctrl+M")},C(Cc,x(function(e,r,n){return{pU:r,i7:e,rT:n}}),a(S,"key",Se),a(S,"ctrlKey",ae),a(S,"metaKey",ae))),K2=l(function(e,r){return ft}),IP=l(function(e,r){var n=r;return a(K2,gc(e),n.bg)}),VP=function(e){return{$:7,a:e}},BP={$:8},HP=a(sv,0,"mousemove"),RP=a(sv,0,"mouseup"),EP=function(e){if(e.$===3){var r=e.a,n=r.bi;if(n.a.$===1){var t=n.a;return Li(u([HP(v(Yn,l(function(o,c){return VP({fl:o,pG:c})}),a(S,"clientX",q),a(S,"clientY",q))),RP(re(BP))]))}else return ft}else return ft},UP=l(function(e,r){var n=r;return a(K2,_c(e),n.bg)}),Q2=function(e){return{$:4,a:e}},e3=function(e){return{$:1,a:e}},Ju=x(function(e,r,n){return{jw:n,nL:r,n9:e}}),mv=ya(v(Ju,P,z,0)),qP=O7(0),r3=G7(0),a3=Gl,YP=x(function(e,r,n){var t=n.jw,o=n.nL,c=h(o,r);if(c.a.$===1)if(c.b.b){var f=c.a;return a(ua,function(s){return a(ua,function(d){return ya(v(Ju,r,D(s),d))},qP)},a3(a(ua,vv(e),r3)))}else{var i=c.a;return mv}else{if(c.b.b)return ya(v(Ju,r,o,t));var $=c.a.a;return a(ua,function(s){return mv},U2($))}}),jq=ne,NP=ne,GP=x(function(e,r,n){var t=n.jw,o=n.n9,c=function(i){if(i.$){var f=i.a;return a(xu,e,f(r-t))}else{var f=i.a;return a(xu,e,f(NP(r)))}};return a(ua,function(i){return a(ua,function(f){return ya(v(Ju,o,D(i),r))},Ai(a(G,c,o)))},a3(a(ua,vv(e),r3)))}),OP=function(e){return{$:0,a:e}},WP=l(function(e,r){if(r.$){var n=r.a;return e3(a(er,e,n))}else{var n=r.a;return OP(a(er,e,n))}});Or["Browser.AnimationManager"]=Zl(mv,YP,GP,0,WP);var JP=bi("Browser.AnimationManager"),ZP=function(e){return JP(e3(e))},n3=ZP,XP=function(e){var r=e;if(r.$===1){var n=r.a,t=n.X;switch(t.$){case 0:return n3(Q2);case 2:return n3(Q2);case 1:return ft;default:return ft}}else return ft},KP=l(function(e,r){var n=e.u,t=e.f6,o=a(wo,Z2,XP(r.cN)),c=t.b9?D(a(UP,yc,r.R)):z,i=t.eq?D(a(wo,J2,EP(r.aL))):z,f=a(wo,W2,a(Y2,P,r.f)),$=t.ds?D(a(IP,qu,r.S)):z,s=t.dt?D(Ni(FP)):z,d=t.b9?D(Ni(DP)):z,b=a(Oi,t,r.oL.P)?D(Ni(TP)):z;return a(wo,n,Li(a(wr,ne,u([D(o),d,s,c,$,i,D(f),b]))))}),QP=Kl("tick",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(y){return a(T,function(_){return a(T,function(k){return a(T,function(L){return a(T,function(w){return a(T,function(I){return re({ph:I,pX:w,p7:L,iL:k,iO:_,qJ:y,qK:p,mn:g,sC:b,sE:d,sG:s,sI:$,sM:f,nv:i,s2:c,f5:o,tj:t,tp:n,t6:r,uv:e})},a(S,"boundingClientRects",ur(a(T,function(I){return a(T,function(R){return a(T,function(B){return re({qs:B,qS:R,to:I})},a(S,"elements",ur(a(T,function(B){return a(T,function(Y){return re({pg:Y,by:B})},a(S,"boundingClientRect",a(T,function(Y){return a(T,function(W){return a(T,function(Q){return a(T,function(ue){return re({pf:ue,eD:Q,j2:W,ia:Y})},a(S,"bottom",q))},a(S,"left",q))},a(S,"right",q))},a(S,"top",q))))},a(S,"id",Se)))))},a(S,"frameId",Se))},a(S,"scroll",a(T,function(I){return a(T,function(R){return a(T,function(B){return a(T,function(Y){return a(T,function(W){return a(T,function(Q){return re({lf:Q,lg:W,eD:Y,ia:B,oC:R,oD:I})},a(S,"contentHeight",q))},a(S,"contentWidth",q))},a(S,"left",q))},a(S,"top",q))},a(S,"viewportHeight",q))},a(S,"viewportWidth",q)))))))},a(S,"darkModeIsOn",ae))},a(S,"deviceOrientation",so(u([fc(z),a(Ne,D,a(T,function(L){return a(T,function(w){return a(T,function(I){return re({oS:I,o9:w,qW:L})},a(S,"alpha",q))},a(S,"beta",q))},a(S,"gamma",q)))]))))},a(S,"devicePixelRatio",q))},a(S,"dt",q))},a(S,"focusedElementIsContentEditable",ae))},a(S,"focusedElementIsTextInput",ae))},a(S,"keyboard",a(T,function(g){return a(T,function(p){return a(T,function(y){return a(T,function(_){return a(T,function(k){return a(T,function(L){return a(T,function(w){return a(T,function(I){return a(T,function(R){return a(T,function(B){return re({oT:B,pU:R,iN:I,qg:w,eD:L,rT:k,s_:_,j2:y,tv:p,kz:g})},a(S,"alt",ae))},a(S,"ctrl",ae))},a(S,"down",ae))},a(S,"downs",ur(Se)))},a(S,"left",ae))},a(S,"meta",ae))},a(S,"pressedKeys",ur(Se)))},a(S,"right",ae))},a(S,"shift",ae))},a(S,"up",ae))))},a(S,"operatingSystem",Se))},a(S,"pageId",Se))},a(S,"pageScroll",a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(y){return re({lf:y,lg:p,eD:g,ia:b,oC:d,oD:s})},a(S,"contentHeight",q))},a(S,"contentWidth",q))},a(S,"left",q))},a(S,"top",q))},a(S,"viewportHeight",q))},a(S,"viewportWidth",q))))},a(S,"paneBoundingBoxes",ur(a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return re({hb:g,eD:b,sJ:d,ia:s,ie:$})},a(S,"height",q))},a(S,"left",q))},a(S,"paneId",Se))},a(S,"top",q))},a(S,"width",q)))))},a(S,"persisted",ur(a(T,function(f){return a(T,function($){return re(h(f,$))},a(Un,1,Se))},a(Un,0,Se)))))},a(S,"pointer",a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(y){return a(T,function(_){return a(T,function(k){return a(T,function(L){return re({lq:L,iN:k,ls:_,lt:y,lv:p,i5:g,m3:b,nO:d,nP:s,kz:$,dY:f,e9:i})},a(S,"doubleClick",ae))},a(S,"down",ae))},a(S,"dx",q))},a(S,"dy",q))},a(S,"elementIdsForLastDown",ur(Se)))},a(S,"isDown",ae))},a(S,"move",ae))},a(S,"rightDown",ae))},a(S,"rightUp",ae))},a(S,"up",ae))},a(S,"x",q))},a(S,"y",q))))},a(S,"rawPointer",a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(y){return a(T,function(_){return a(T,function(k){return re({lq:k,iN:_,ls:y,lt:p,lv:g,i5:b,m3:d,nO:s,nP:$,kz:f,dY:i,e9:c})},a(S,"doubleClick",ae))},a(S,"down",ae))},a(S,"dx",q))},a(S,"dy",q))},a(S,"elementIdsForLastDown",ur(Se)))},a(S,"isDown",ae))},a(S,"move",ae))},a(S,"rightDown",ae))},a(S,"rightUp",ae))},a(S,"up",ae))},a(S,"x",q))},a(S,"y",q))))},a(S,"screen",a(T,function(o){return a(T,function(c){return re({hb:c,ie:o})},a(S,"height",q))},a(S,"width",q))))},a(S,"screenOrientationAngle",q))},a(S,"searchParamsFromUrl",so(u([fc(z),a(Ne,D,ur(a(T,function(n){return a(T,function(t){return re(h(n,t))},a(Un,1,Se))},a(Un,0,Se))))]))))},a(S,"touches",ur(a(T,function(r){return a(T,function(n){return a(T,function(t){return re({by:t,dY:n,e9:r})},a(S,"id",xi))},a(S,"x",q))},a(S,"y",q)))))},a(S,"wheel",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return re({p3:o,p4:t,qr:n,sP:r,sQ:e})},a(S,"deltaX",q))},a(S,"deltaY",q))},a(S,"elementIdsForLastWheel",ur(Se)))},a(S,"pinchDeltaForChrome",q))},a(S,"pinchScaleForSafari",so(u([fc(z),a(Ne,D,q)]))))))),eS=Kl("visibilityChanged",a(T,function(e){return a(T,function(r){return re({fJ:r,oE:e})},a(S,"instanceId",Se))},a(S,"visible",ae))),rS=l(function(e,r){var n=a(KP,{f6:e.rb,u:wu},r.rb),t=sc(r.tY),o=bv(t),c=a(wr,C(kP,e,r,t,o),r.aT),i=N2(r.rb)?Ni(a(T,function($){return $==="Escape"?wc(r.tY)?re(A2(rv)):re(F2):On("not Escape")},a(S,"key",Se))):ft,f=e.aA(t.Q);return Li(Z(u([QP(qC),eS(function($){return a(YC,$.fJ,$.oE)}),a(wo,fP,wP),f,n,i]),c))}),jc=J9,t3=J(function(e,r,n,t){var o=go&r>>>e,c=a(Vi,o,t);if(c.$){var $=c.a,s=v(jc,go&r,n,$);return v(jc,o,ac(s),t)}else{var i=c.a,f=C(t3,e-ln,r,n,i);return v(jc,o,nc(f),t)}}),Zu=x(function(e,r,n){var t=n.a,o=n.b,c=n.c,i=n.d;return e<0||oe(e,t)>-1?n:oe(e,Vb(t))>-1?C(Bt,t,o,c,v(jc,go&e,r,i)):C(Bt,t,o,C(t3,o,e,r,c),i)}),aS=l(function(e,r){var n=r;return F(n,{ep:v(Zu,a(Xr,n.cx,n.dc+n.aQ),e,n.ep)})}),o3=l(function(e,r){if(r.$){var t=r.a;return qi(F(t,{ep:v(Zu,t.aQ,e,t.ep)}))}else{var n=r.a;return bc(a(aS,e,n))}}),Jt=l(function(e,r){var n=r.a,t=r.b,o=_o(t),c=o.a,i=o.b,f=e(i),$=f.a,s=f.b;return h(a(za,n,a(o3,h(c,$),t)),s)}),nS=x(function(e,r,n){var t=function(o){var c=v(ju,e,r,o.Q),i=c.a,f=c.b;return h(F(o,{Q:i}),f)};return a(So,function(o){return F(n,{tY:o})},a(Jt,t,n.tY))}),c3=B6,tS=At("clearPlayLocalStorage",function(e){return c3}),oS=At("pushUrlReset",function(e){return c3}),cS=x(function(e,r,n){if(r.$===1)return h(n,fe);if(r.a){var f=r.a;return h(n,tS(0))}else{var t=r.a,o=function($){var s=(function(){var d=n.aT;if(d.b){var b=d.a;return v(Et,b,de(function(g){return F(g,{b2:e.rl})}),$.cI)}else return $.cI})();return h(F($,{b2:e.rl,cI:s}),fe)},c=a(Jt,o,n.tY),i=c.a;return h(F(n,{tY:i}),oS(0))}}),iS=x(function(e,r,n){var t=function(o){var c=a(Ke,e,o.cI);if(c.$)return h(o,fe);var i=c.a,f=a(Gt,r,i.hG),$=v(Sr,e,F(i,{hG:f}),o.cI);return h(F(o,{cI:$}),fe)};return a(So,function(o){return F(n,{tY:o})},a(Jt,t,n.tY))}),fS=function(e){return a(Ar,7,e.f)},uS=l(function(e,r){return e?{hb:r.Z.ie,ie:r.Z.hb}:r.Z}),$S=function(e){var r=e;return a(uS,r.dF,r.cA)},lS=function(e){return $S(e.S)},pv=function(e){return fS(e)?D(lS(e)):z},i3=24,Wi=l(function(e,r){return v(mr,.1,1,a(Ye,(e.ie-i3)/r.ie,(e.hb-i3)/r.hb))}),vS=x(function(e,r,n){var t=a(Wi,e,r),o=function(c){return F(c,{pf:c.pf/t,eD:c.eD/t,j2:c.j2/t,ia:c.ia/t})};return a(G,function(c){return F(c,{qs:a(G,function(i){return F(i,{pg:o(i.pg)})},c.qs)})},n)}),sS=x(function(e,r,n){var t=a(Wi,e,r),o=.5*(e.ie-r.ie*t),c=.5*(e.hb-r.hb*t);return F(n,{hb:n.hb/t,eD:(n.eD-o)/t,ia:(n.ia-c)/t,ie:n.ie/t})}),f3=x(function(e,r,n){var t=.5*e.hb-n.e9,o=n.dY+.5*e.ie,c=a(Wi,e,r),i=.5*(e.ie-r.ie*c),f=.5*(e.hb-r.hb*c);return F(n,{dY:(o-i)/c-.5*r.ie,e9:.5*r.hb-(t-f)/c})}),u3=x(function(e,r,n){var t=v(f3,e,r,n),o=a(Wi,e,r);return F(t,{ls:n.ls/o,lt:n.lt/o})}),hv=l(function(e,r){if(e.$)return r;var n=e.a;return{ph:v(vS,r.f5,n,r.ph),pX:r.pX,p7:r.p7,iL:r.iL,iO:r.iO,qJ:r.qJ,qK:r.qK,mn:r.mn,sC:r.sC,sE:r.sE,sG:r.sG,sI:a(G,a(sS,r.f5,n),r.sI),sM:r.sM,nv:v(u3,r.f5,n,r.nv),s2:v(u3,r.f5,n,r.s2),f5:n,tj:r.tj,tp:r.tp,t6:a(G,a(f3,r.f5,n),r.t6),uv:r.uv}}),dS=J(function(e,r,n,t){var o=function(c){var i=a(Ke,r,c.cI);if(i.$)return h(c,fe);var f=i.a,$=bv(c),s=pv(t.rb),d=Yi({gJ:f.gJ,b2:f.b2,aH:t.aH,rb:D(t.rb),by:f.by,rq:a(hv,s,c.rq),mR:f.mR,m0:dc(t.rb),sB:Ou(f),aM:f.aM,cq:$,oE:f.oE,oK:Wu(t.rb)}),b=V(e.a6.ss,d,c.Q,yn(t.rb),n,f.bz),g=b.a,p=b.b,y=b.c,_=v(J0,ie(kr(t.aT),D(r)),p,{cH:c.b2,i3:f.b2}),k=v(ju,e,y,c.Q),L=k.a,w=k.b,I=v(Sr,r,F(f,{b2:_.i3,bz:g}),c.cI);return h(F(c,{b2:_.cH,cI:I,Q:L}),fa(u([a(vc,Co(r),_.gK),w])))};return a(So,function(c){return F(t,{tY:c})},a(Jt,o,t.tY))}),$3=function(e){return{$:2,a:e}},l3=$3,bS=function(e){return F(e,{f:a(Gt,l3(4),e.f)})},mS=function(e){var r=e.b;return a(za,Ui,T2(r))},pS=x(function(e,r,n){return{$:7,a:e,b:r,c:n}}),Lq=ne,v3=9729,Tq=ne,Xu=10497,hS={g4:!0,lX:Xu,hp:v3,ht:v3,oA:Xu},Ku=33071,gS=(function(){var e=hS;return F(e,{lX:Ku,oA:Ku})})(),s3=function(e){return{$:1,a:e}},_S={$:0},yS=l(function(e,r){return{$:1,a:e,b:r}}),CS=l(function(e,r){var n=e.g4,t=e.oA,o=e.lX,c=e.ht,i=e.hp,f=J(function($,s,d,b){var g=$,p=s,y=d,_=b;return Cr(X7,g,p,y,_,n,r)});return C(f,i,c,o,t)}),PS=l(function(e,r){return a(Di,function(n){return s3({U:n,sD:e,e6:r})},a(CS,e,r))}),d3=9728,SS={g4:!0,lX:Xu,hp:d3,ht:d3,oA:Xu},kS=(function(){var e=SS;return F(e,{lX:Ku,oA:Ku})})(),xS=l(function(e,r){var n=r.I,t=a(Ke,a(Wt,0,e),n);if(!t.$&&!t.a.$){var o=t.a.a.aq,c=t.a.a.H;return ie(c,kc)?D(o):z}else return z}),Qu=function(e){if(e.b){var r=e.a,n=e.b;return D(v(se,we,r,n))}else return z},wS=function(e){if(e.b){var r=e.a,n=e.b;return D(v(se,Ye,r,n))}else return z},jS=l(function(e,r){var n=wS(a(xr,function(o){return oe(o,e)>-1},r));if(n.$)return a(te,1,Qu(r));var t=n.a;return t}),LS=x(function(e,r,n){var t=n.I,o=a(Ke,a(Wt,0,e),t);if(!o.$&&!o.a.$){var c=o.a.a.eL,i=o.a.a.H;if(i.$===2){var f=a(jS,r,su(c));return a(Ke,f,c)}else return z}else return z}),TS=l(function(e,r){return v(LS,e,1,r)}),zS=x(function(e,r,n){return fa(a(wr,function(t){var o=h(a(TS,t,n),a(xS,t,n));if(!o.a.$&&!o.b.$){var c=o.a.a,i=o.b.a,f=i?kS:gS;return D(a(ut,a(pS,e,t),a(PS,f,c)))}else return z},r))}),b3=l(function(e,r){var n=I2(e)+":";return a(Rn,n,r)?a(Xa,Ja(n),r):r}),MS=l(function(e,r){var n=e,t=r;return a(wr,function(o){var c=o.a,i=o.b;if(i.$)return z;var f=i.a.H;if(ie(f,kc)){var $=a(Ke,c,n.I);if(!$.$&&!$.a.$){var s=$.a.a;return ie(s.H,kc)?z:D(a(b3,0,c))}else return D(a(b3,0,c))}else return z},Na(t.I))}),DS=x(function(e,r,n){var t=function(o){var c=a(Ke,e,o.cI);if(c.$)return h(o,fe);var i=c.a,f=r(i.aM),$=a(MS,i.aM,f),s=F(i,{aM:f});return h(F(o,{cI:v(Sr,e,s,o.cI)}),v(zS,e,$,f))};return a(So,function(o){return F(n,{tY:o})},a(Jt,t,n.tY))}),AS=l(function(e,r){var n=h(e,r);if(n.a.$===5&&n.b.$===5){var t=n.a.a,o=n.b.a;return ie(yo(t),yo(o))}else return ie(e,r)}),FS=function(e){switch(e.$){case 0:var r=e.b;return N(r);case 2:var r=e.b;return Xe(r);case 4:var r=e.a;return r?"true":"false";case 1:var r=e.a;return r;case 3:var n=e.a.oS,t=e.a.D,o=e.a.a0,c=e.a.aS;return a(Mr,",",a(G,N,u([c,o,t,n])));default:var i=e.a;return yo(i)}},m3=l(function(e,r){var n=dn(a(_n,function(t){return t.a8},e));return a(wr,function(t){var o=t.a,c=t.b,i=a(Ke,o,n);if(i.$)return z;var f=i.a;return a(AS,f,c)?z:D(h(o,FS(c)))},a(_n,function(t){return t.a8},r))}),IS=x(function(e,r,n){return Z(a(m3,e.rl,r),n)}),VS=At("writeUrlParams",Ut(function(e){var r=e.a,n=e.b;return a(Ut,ne,u([Hr(r),Hr(n)]))})),BS=l(function(e,r){var n=sc(r.tY),t=e.e7(n.Q);return VS(v(IS,e,n.b2,t))}),HS=x(function(e,r,n){var t=function(f){var $=a(y2,r,f.b2),s=(function(){var d=n.aT;if(d.b){var b=d.a;return v(Et,b,de(function(g){return F(g,{b2:$})}),f.cI)}else return f.cI})();return h(F(f,{b2:$,cI:s}),fe)},o=a(Jt,t,n.tY),c=o.a,i=F(n,{tY:c});return h(i,a(BS,e,i))}),e$=l(function(e,r){return r}),RS=x(function(e,r,n){if(r.$){var o=r.a,c=a(e$,"Play.Runtime.MaterialLoaded failed",h(e,o));return n}else{var t=r.a;return F(n,{mR:v(Sr,e,t,n.mR)})}}),ES=J(function(e,r,n,t){var o=function(c){return h(F(c,{cI:v(Et,e,de(a(RS,r,n)),c.cI)}),fe)};return a(So,function(c){return F(t,{tY:c})},a(Jt,o,t.tY))}),US=Ul,r$=function(e){return v(se,l(function(r,n){var t=r.a,o=r.b;return v(I6,t,o,n)}),F6(0),e)},qS=At("assetsLoadRequest",Ut(function(e){return r$(u([h("id",Hr(e.by)),h("instanceId",Hr(e.fJ)),h("kind",Hr(e.bc)),h("mips",Ut(US)(e.dC)),h("url",Hr(e.e6))]))})),gv=function(e){var r=e;return r},YS=l(function(e,r){var n=gv(r);return{by:n.by,fJ:e,bc:n.bc,dC:n.dC,e6:n.e6}}),p3=l(function(e,r){return qS(a(G,YS(e),r))}),h3=Ul,NS=At("setInstanceMuted",function(e){return r$(u([h("instanceId",Hr(e.fJ)),h("muted",h3(e.r7))]))}),GS=x(function(e,r,n){var t=function(o){var c=a(Ke,e,o.cI);if(c.$)return h(o,fe);var i=c.a,f=r&&!i.fe,$=F(i,{fe:i.fe||r,oE:r}),s=i.eS?NS({fJ:e,r7:!r}):fe,d=f?a(p3,e,i.aC):fe;return h(F(o,{cI:v(Sr,e,$,o.cI)}),fa(u([d,s])))};return a(So,function(o){return F(n,{tY:o})},a(Jt,t,n.tY))}),OS=function(e){return e.bj+e.bk},a$=function(e){var r=e;return r},WS=a(er,OS,a$),g3=function(e){var r=e.bD,n=e.bx,t=e.bk,o=e.bj,c=(o+t)/2|0,i=o+t-c,f=4;if(o+t<2)return e;if(oe(o,f*t+1)>0){var $=Z(r,Be(a(qt,c,n))),s=a(qn,c,n);return{bx:s,bD:$,bj:c,bk:i}}else if(oe(t,f*o+1)>0){var $=a(qn,c,r),s=Z(n,Be(a(qt,c,r)));return{bx:s,bD:$,bj:c,bk:i}}else return e},JS=function(e){var r=e.bD,n=e.bx,t=h(n,r);if(t.a.b){var i=t.a,f=i.a,$=i.b;return h(D(f),g3({bx:$,bD:e.bD,bj:e.bj-1,bk:e.bk}))}else if(t.b.b){if(t.b.b.b)return h(z,Eu);var o=t.b,c=o.a;return h(D(c),Eu)}else return h(z,Eu)},_3=a(er,a(er,Po(ne),JS),a$),y3=l(function(e,r){return oe(WS(r),e)>0?a(y3,e,_3(r).b):r}),C3=l(function(e,r){var n=_3(r);if(n.a.$){var c=n.a;return r}else{var t=n.a.a,o=n.b;return oe(t.kt,e)<0?a(C3,e,o):r}}),P3=60,ZS=l(function(e,r){var n=r;return e(n)}),XS=l(function(e,r){var n=r;return a(ZS,g3,{bx:n.bx,bD:a(A,e,n.bD),bj:n.bj,bk:n.bk+1})}),KS=1,QS=l(function(e,r){var n=r,t=n.jv+e,o=t-KS;return{jv:t,f3:a(y3,P3,a(XS,{iO:e,kt:t},a(C3,o,n.f3)))}}),ek=l(function(e,r){return F(r,{c$:a(QS,e.iO,r.c$)})}),S3=function(e){var r=e.b;return _o(r).a},k3=l(function(e,r){var n=S3(e.tY);return F(n,{b2:r.b2,m0:dc(e.rb)})}),n$={$:2},x3=function(e){var r=e.a;return ie(r,n$)},_v=function(e){var r=e.a;return r.$===3},$t=function(e){return x3(e)||_v(e)},w3={$:13},rk=l(function(e,r){return e}),j3="play-scrollport",ak=function(e){var r=x(function(o,c,i){return a(ut,rk(w3),v(xo,o,c,i))}),n=v(r,j3,e.sG.eD,e.sG.ia),t=a(G,function(o){return v(r,"measure-frame--"+o.qS,o.to.eD,o.to.ia)},e.ph);return fa(a(A,n,t))},nk={$:4},yv=l(function(e,r){return{$:1,a:e,b:r}}),zq=0,L3={$:0},t$={$:1},jo=function(e){return{$:3,a:e}},Mq=1,Lc=l(function(e,r){return{$:0,a:e,b:r}}),tk={$:2},ok=l(function(e,r){return{eD:e,j2:r}}),la=function(e){var r=e.a;return r},o$=l(function(e,r){var n=r.aB,t=function(f){return a(te,0,a(de,function($){return $.df},a($a,f,n)))},o=l(function(f,$){e:for(;;){if(oe(f,$)>-1)return f;if(oe(e,t((f+$)/2|0))<1){var s=f,d=(f+$)/2|0;f=s,$=d;continue e}else{var s=((f+$)/2|0)+1,d=$;f=s,$=d;continue e}}}),c=la(n),i=a(o,0,c);return i?ie(i,c)?c-1:oe(e-t(i-1),t(i)-e)<1?i-1:i:0}),Ji=l(function(e,r){var n=e.a,t=e.b,o=r.aB,c=r.f0,i=n?a(te,c,a(de,function($){return $.df},a($a,n-1,o))):c,f=a(te,c,a(de,function($){return $.df},a($a,t,o)));return h(i,f)}),en={mY:100,nR:24,hS:100,h3:400,h4:900,og:4},Qr=l(function(e,r){return r/en.h4*(e.j2-e.eD)}),Zi=x(function(e,r,n){var t=r.a,o=r.b,c=function(R){return a(Qr,e,R.gS-R.jU)},i=a(Ji,h(1,la(n.aB)-2),n),f=i.a,$=i.b,s=a(Ji,h(o.cL+1,o.cD-1),n),d=s.a,b=s.b,g=a(Ji,h(o.cL,o.cD),n),p=g.a,y=g.b;if(t.$)if(t.a){var w=t.a,k=t.b,I=v(mr,d,$,y+c(k));return h(h(p,o.cL),h(I,a(o$,I,n)))}else{var _=t.a,k=t.b,L=v(mr,f,b,p+c(k));return h(h(L,a(o$,L,n)+1),h(y,o.cD))}else return h(h(p,o.cL),h(y,o.cD))}),ck=J(function(e,r,n,t){var o=e.m2,c=e.nU,i=e.nT,f=t.j2-t.eD,$=n-r,s=a(Ye,$,a(we,en.mY,f*a(bn,1.002,c))),d=i*.001*s,b=t.eD+o*f-o*s,g=b+s,p=g+d,y=b+d,_=oe(y,r)<0?h(r,r+s):oe(p,n)>0?h(n-s,n):h(y,p),k=_.a,L=_.b;return{eD:k,j2:L}}),T3=l(function(e,r){var n=h(e,r);e:for(;;)switch(n.a.$){case 2:var t=n.a;return t$;case 3:var o=n.a;return tk;case 4:var c=n.a;return i2;case 0:var i=n.a.a,f=h(0,la(i.aB)-1),$=f.a,s=f.b,d=a(Ji,h($,s),i),b=d.a,g=d.b;return jo({ca:z,dK:i,bi:a(Lc,L3,{cD:s-1,cL:1}),a5:a(ok,b,g)});case 1:if(n.b.$===3){var p=n.a.a,y=n.b.a,_=h(0,la(y.dK.aB)-1),$=_.a,s=_.b,k=a(Ji,h($,s),y.dK),L=k.a,w=k.b,I=C(ck,p,L,w,y.a5);return jo(F(y,{a5:I}))}else break e;case 5:if(n.b.$===3){var R=n.a.a.fl,y=n.b.a,B=y.bi,Y=B.b;return jo(F(y,{bi:a(Lc,a(yv,0,{gS:R,jU:R}),Y)}))}else break e;case 6:if(n.b.$===3){var R=n.a.a.fl,y=n.b.a,W=y.bi,Y=W.b;return jo(F(y,{bi:a(Lc,a(yv,1,{gS:R,jU:R}),Y)}))}else break e;case 7:if(n.b.$===3){var R=n.a.a.fl,y=n.b.a,Q=y.bi;if(Q.a.$===1){var ue=Q.a,ve=ue.a,Pe=ue.b,Y=Q.b;return jo(F(y,{bi:a(Lc,a(yv,ve,F(Pe,{gS:R})),Y)}))}else return r}else break e;case 8:if(n.b.$===3){var Me=n.a,y=n.b.a,ze=y.bi;if(ze.a.$===1){var ar=ze.a,ee=v(Zi,y.a5,y.bi,y.dK),Ee=ee.a,Ze=Ee.b,Oe=ee.b,yr=Oe.b;return jo(F(y,{bi:a(Lc,L3,{cD:yr,cL:Ze})}))}else return r}else break e;default:if(n.b.$===3){var qe=n.a.a,y=n.b.a;return jo(F(y,{ca:qe}))}else break e}return r}),ik=T3(nk),Cv={$:2},fk=function(e){return{$:1,a:e}},c$=function(e){return{$:0,a:e}},z3=function(e){return{$:1,a:e}},Zt=function(e){return{$:0,a:e}},Xi=12,i$=72,Xt=function(e){switch(e){case 0:return{dY:c$(i$),e9:Zt(Xi)};case 1:return{dY:c$(i$+44),e9:Zt(Xi+44)};case 2:return{dY:z3(12),e9:Zt(Xi)};case 3:return{dY:Cv,e9:Zt(100)};case 4:return{dY:Cv,e9:fk(40)};case 5:return{dY:c$(i$),e9:Zt(Xi)};case 6:return{dY:Cv,e9:Zt(80)};default:return{dY:c$(i$),e9:Zt(Xi)}}},Pv=function(e){return e.$===3},uk=l(function(e,r){if(e.$)return r;var n=e.a;return F(r,{aK:a(A,n,a(xr,bu(n),r.aK))})}),M3=function(e){return{dY:e.s2.dY+.5*e.f5.ie,e9:-e.s2.e9+.5*e.f5.hb}},D3=l(function(e,r){var n=M3(e);return{dY:r.gO.dY+(n.dY-r.g6.dY),e9:r.gO.e9+(n.e9-r.g6.e9)}}),A3=l(function(e,r){var n="-titlebar",t="draggable-panel-",o="-no-drag",c=function(i){e:for(;;)if(i.b){var f=i.a,$=i.b;if(a(Rn,t,f)&&a(wb,o,f)){if(e.iv)return z;var s=$;i=s;continue e}else{if(a(Rn,t,f)&&a(a2,n,f))return D(a(r2,Ja(n),a(Xa,Ja(t),f)));var s=$;i=s;continue e}}else return z};return c(r)}),$k=function(e){return a(A3,{iv:!0},e)},lk=function(e){return a(A3,{iv:!1},e)},vk=l(function(e,r){switch(r.$){case 0:var n=r.a;return n;case 1:var n=r.a;return e-n;default:return e/2}}),sk=l(function(e,r){if(r.$){var n=r.a;return e-n}else{var n=r.a;return n}}),f$=12,F3=x(function(e,r,n){var t=f$-r,o=e-f$-r;return oe(o,t)<1?t:v(mr,t,o,n)}),dk=x(function(e,r,n){return{dY:v(F3,e.f5.ie,a(vk,e.f5.ie,r.dY),n.dY),e9:v(F3,e.f5.hb,a(sk,e.f5.hb,r.e9),n.e9)}}),bk=x(function(e,r,n){return a(te,e,a(de,Tu,kr(a(xr,function(t){var o=t.a;return ie(o,r)},n.cK))))}),mk={dY:0,e9:0},I3=J(function(e,r,n,t){return v(dk,e,r,v(bk,mk,n,t))}),pk=x(function(e,r,n){return a(A,h(e,r),a(xr,function(t){var o=t.a;return!ie(o,e)},n))}),V3=x(function(e,r,n){var t=n,o=t.ee;if(o.$===1)if(e.s2.iN){var c=function(p){return a(Kr,function(y){return a(de,Ri(y),r(y))},a(Kr,t.rd,p(e.s2.lv)))},i=a(uk,a(de,vn,c(lk)),t),f=c($k);if(f.$)return i;var $=f.a,s=$.a,d=$.b;return F(i,{ee:D({gO:C(I3,e,d,s,i),g6:M3(e),by:s})})}else return n;else{var b=o.a;if(e.s2.i5)return n;var g=a(D3,e,b);return F(t,{ee:z,cK:v(pk,b.by,g,t.cK)})}}),hk=l(function(e,r){var n=a(Kr,function(c){var i=c.j5-e.iO;return i<=0?z:D(F(c,{j5:i}))},r.d6),t=v(V3,e,a(er,D,Xt),r.f),o=Pv(r.aL)&&!a(Ar,3,t)?ik(r.aL):r.aL;return F(r,{d6:n,f:t,aL:o})}),Ki=12,B3=function(e){return{dY:z3(Ki),e9:Zt(Ki+e*40)}},gk=l(function(e,r){return a(de,B3,a(Fu,function(n){return ie(n.by,r)},e))}),H3=function(e){return ne},u$=l(function(e,r){if(r.$===-2)return En;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;return V(Fe,n,t,a(e,t,o),a(u$,e,c),a(u$,e,i))}),_k=l(function(e,r){var n=dn(a(G,function(i){return h(gv(i).by,i)},r)),t=a(u$,l(function(i,f){return gv(f).bc}),n),o=a(wr,function(i){var f=i.a,$=i.b;return a(Bu,f,e)?z:D($)},Na(n)),c=a(wr,function(i){var f=i.a,$=i.b;return a(Bu,f,n)?z:D({by:f,bc:$})},Na(e));return{rH:t,t3:o,t4:c}}),yk=function(e){return e.eS&&!e.oE},Ck=At("assetsUnload",Ut(function(e){return r$(u([h("id",Hr(e.by)),h("instanceId",Hr(e.fJ)),h("kind",Hr(e.bc))]))})),Pk=l(function(e,r){return{by:r.by,fJ:e,bc:r.bc}}),Sk=l(function(e,r){return Ck(a(G,Pk(e),r))}),kk=Hl(function(e,r,n,t,o,c,i,f,$){var s=a(Ke,f,$.cI);if(s.$)return $;var d=s.a;if(yk(d))return $;var b=d.gJ+r.rq.iO,g=Yi({gJ:b,b2:d.b2,aH:o,rb:D(n),by:d.by,rq:a(hv,c,r.rq),mR:d.mR,m0:dc(n),sB:Ou(d),aM:d.aM,cq:t,oE:d.oE,oK:Wu(n)}),p=v(H3,"play:onTick",v(e.a6.sw,g,r.Q,yn(n)),d.bz),y=p.a,_=p.b,k=p.c,L=v(J0,ie(i,D(f)),_,{cH:$.b8,i3:d.b2}),w=C(e.aC,g,r.Q,yn(n),y),I=a(_k,d.gT,w),R=We(I.t3)?fe:a(p3,f,I.t3),B=We(I.t4)?fe:a(Sk,f,I.t4),Y=C(e.a6.cf,g,r.Q,yn(n),y),W=v(V3,g,gk(Y),d.hG);return F($,{cz:a(A,R,a(A,B,a(A,a(vc,Co(f),L.gK),$.cz))),cE:Z($.cE,k),b8:L.cH,cI:v(Sr,f,F(d,{gJ:b,b2:L.i3,gT:I.rH,bz:y,hG:W}),$.cI)})}),xk=function(e){var r=e.cU;if(r.$){var t=e.iI;if(t.$)return z;var o=t.a;return a(Bi,o,e.aT)?e.iI:z}else{var n=r.a;return D(n)}},R3=function(e){return{$:3,a:e}},E3=function(e){var r=e.b;return _o(r).a.gJ},wk=function(e){var r=e;return F(r,{aQ:a(Ye,r.a9-1,r.aQ+1)})},jk=function(e){if(e.$){var n=e.a;return qi(F(n,{aQ:a(Ye,la(n.ep)-1,n.aQ+1)}))}else{var r=e.a;return bc(wk(r))}},Lk=function(e){var r=e;return r.aQ},U3=function(e){if(e.$){var n=e.a;return n.aQ}else{var r=e.a;return Lk(r)}},Tk=function(e){var r=e;return r.a9},q3=function(e){if(e.$){var n=e.a;return la(n.ep)}else{var r=e.a;return Tk(r)}},zk=function(e){return ie(U3(e),q3(e)-1)},Mk=function(e){var r=e.a,n=e.b;return zk(n)?z:D(a(za,r,jk(n)))},Sv=Z9,Y3=Y9,Qi=J(function(e,r,n,t){var o=go&r>>>e;if(oe(o,Hn(t))>-1){if(e===5)return a(Sv,ac(n),t);var c=nc(C(Qi,e-ln,r,n,uo));return a(Sv,c,t)}else{var i=a(Vi,o,t);if(i.$){var c=nc(C(Qi,e-ln,r,n,Y3(i)));return v(jc,o,c,t)}else{var f=i.a,c=nc(C(Qi,e-ln,r,n,f));return v(jc,o,c,t)}}}),kv=l(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d,i=Hn(c),f=Hn(e),$=n+(f-i);if(ie(f,Dr)){var s=oe($>>>ln,1<<t)>0;if(s){var d=t+ln,b=C(Qi,d,n,e,Y3(nc(o)));return C(Bt,$,d,b,uo)}else return C(Bt,$,t,C(Qi,t,n,e,o),uo)}else return C(Bt,$,t,o,e)}),Dk=l(function(e,r){var n=r.d;return a(kv,a(Sv,e,n),r)}),Ak=l(function(e,r){var n=r;return oe(n.a9,n.cx)<0?F(n,{a9:n.a9+1,aQ:n.a9,ep:v(Zu,a(Xr,n.cx,n.dc+n.a9),e,n.ep)}):F(n,{aQ:n.cx-1,ep:v(Zu,n.dc,e,n.ep),dc:a(Xr,n.cx,n.dc+1)})}),Fk=l(function(e,r){if(r.$){var t=r.a;return qi(F(t,{aQ:la(t.ep),ep:a(Dk,e,t.ep)}))}else{var n=r.a;return bc(a(Ak,e,n))}}),N3=l(function(e,r){return F(r,{ph:e.ph,gJ:r.gJ+e.iO,pX:e.pX,p7:e.p7,iL:e.iL,iO:e.iO,qJ:e.qJ,qK:e.qK,mn:e.mn,sG:e.sG,nv:e.nv,s2:e.s2,f5:e.f5,tj:e.tj,t6:e.t6,uv:e.uv})}),Ik=x(function(e,r,n){var t=n.a,o=n.b;switch(t.$){case 2:return h(n,fe);case 3:var c=t.a.kp;return h((oe(c+r.iO,E3(n))>0?a(Ie,Mk,te(a(za,n$,o))):ne)(a(za,R3({kp:c+r.iO}),o)),fe);case 1:var i=_o(o),s=i.a,d=i.b,b=a(N3,r,s),f=a(e,b,d),p=f.a,y=f.b;return h(a(za,X0,a(Fk,h(b,p),o)),y);default:var $=_o(o),s=$.a,d=$.b,b=a(N3,r,s),g=a(e,b,d),p=g.a,y=g.b;return h(a(za,Ui,a(o3,h(b,p),o)),y)}}),Vk=x(function(e,r,n){var t=O2({jJ:r.sI,j$:lv(n.aT),aa:r.nv,ux:r.f5}),o=xk({cU:t.cU,iI:n.aH,aT:n.aT}),c=a(ek,r,n.rb),i=l(function(p,y){var _=t,k=F(y,{rq:r}),L=pv(c),w=v(se,Nr(kk,e,k,c,_,o,L,kr(n.aT)),{cz:P,cE:P,b8:k.b2,cI:k.cI},n.aT),I=v(ju,e,w.cE,k.Q),R=I.a,B=I.b;return h(F(k,{b2:w.b8,cI:w.cI,Q:R}),fa(a(A,B,w.cz)))}),f=v(Ik,i,r,n.tY),$=f.a,s=f.b,d=a(hk,a(k3,F(n,{tY:$}),sc($)),c),b=(function(){var p=d.oL;return F(d,{oL:F(p,{qH:z})})})(),g=$t($)?ak(S3($)):fe;return h(F(n,{aH:o,rb:b,tY:$}),fa(u([s,g])))}),Dq=1,Aq=0,ef=function(e){var r=e;return F(r,{aU:!1})},Bk=function(e){var r=e;return F(r,{bg:ef(r.bg)})},Hk=function(e){var r=e;return F(r,{bg:ef(r.bg)})},G3=function(e){return{$:14,a:e}},O3="play-command-palette",xv={fm:O3,eI:320,jT:"Type a command\u2026",u:G3,ie:{rZ:400,us:50}},W3=3,Rk=l(function(e,r){return!Pv(e)&&Pv(r)}),Ek=function(e){switch(e){case 0:return 1;case 1:return 2;default:return 0}},Uk=J7("focus"),J3=function(e){return e.fm+"-search"},rf=l(function(e,r){var n=r,t=a(te,0,a(Kr,function(c){return a(Iu,c,n.aR)},n.ev)),o=a(x2,e,t);return h(F(n,{aU:!0,bT:o,ax:t}),fa(u([a(ut,function(c){return e.u(Ca)},Uk(J3(e))),a(ut,function(c){return e.u(Ca)},v(xo,ko(e),0,o))])))}),qk=l(function(e,r){var n=r,t=a(rf,gc(e),a(Hi,D(n.cA),n.bg)),o=t.a,c=t.b;return h(F(n,{bg:o}),c)}),Yk=x(function(e,r,n){var t=n,o=a(rf,_c(e),a(Hi,W0(r),t.bg)),c=o.a,i=o.b;return h(F(t,{bg:c}),i)}),Nk=dv,wv={$:2},Z3=function(e){return{$:1,a:e}},Gk={$:3},jv=function(e){return{$:0,a:e}},Lv=l(function(e,r){return e<0?z:kr(a(qt,e,r))}),Ok=l(function(e,r){e:for(;;){var n=h(e,r);if(n.a.b)if(n.b.b){var t=n.a,o=t.a,c=t.b,i=n.b,f=i.a,$=i.b;if(ie(o,f)){var s=c,d=$;e=s,r=d;continue e}else{var s=e,d=$;e=s,r=d;continue e}}else return!1;else return!0}}),Wk=J(function(e,r,n,t){return{kY:r,lU:e,ny:n,nz:t}}),Jk=2,Zk=s8,Xk=12,Kk=-3,Qk=-1,ex=-1,Tv=16,Lo=-a(bn,2,30),rx=Le(function(e,r,n,t,o){var c=V(Zk,Wk,r,n,t,o),i={fp:P,eC:0,hf:Lo,hg:Lo,hh:Lo,fT:P},f=e.me?ex:Kk,$=l(function(d,b){var g=d.nz,p=d.ny,y=d.kY,_=d.lU,k=ie(_,e.no)?e.md?b.eC*Qk+Tv+y*Jk:b.eC?a(we,b.hh+Tv+y,b.hg+Tv+Xk):Lo:Lo,L=a(we,k,b.hf+f);return{fp:a(A,k,b.fp),eC:b.eC+1,hf:L,hg:p,hh:g,fT:a(A,L,b.fT)}}),s=v(se,$,i,c);return h(Be(s.fp),Be(s.fT))}),ax=function(e){return v(se,l(function(r,n){return r}),Lo,e)},nx=x(function(e,r,n){e:for(;;){if(r<=0)return e;var t=a(A,n,e),o=r-1,c=n;e=t,r=o,n=c;continue e}}),tx=l(function(e,r){return v(nx,P,e,r)}),ox=x(function(e,r,n){var t=Pr(e),o=Pr(r),c=a(tx,o,Lo),i=a(Bn,Ri,e),f=v(se,l(function(s,d){var b=s.a,g=s.b,p=d.a,y=d.b;return V(rx,{md:!b,me:ie(b,t-1),no:g},r,n,p,y)}),h(c,c),i),$=f.b;return ax($)}),cx=l(function(e,r){var n=r;if(ho(e))return D(0);var t=a(G,E0,Si(e));return a(Ok,t,n.ji)?D(v(ox,t,n.ji,n.kZ)):z}),zv=function(e){return{$:8,a:e}},X3=l(function(e,r){var n=Ot*r.ax,t=n-r.bT,o=r.bT+e.eI-(n+Ot);if(t<0)return a(ut,function(i){return e.u(zv(n))},v(xo,ko(e),0,n));if(o<0){var c=r.bT-o;return a(ut,function(i){return e.u(zv(c))},v(xo,ko(e),0,c))}else return fe}),ix=b8,Mv=x(function(e,r,n){var t=n;switch(r.$){case 0:var o=r.a,c=ho(o)?a(G,vn,t.hJ):a(G,Tu,a(ix,l(function(k,L){var w=k.a,I=L.a;return a(y0,I,w)}),a(wr,function(k){var L=k.a,w=k.b;return a(de,function(I){return h(I,L)},a(cx,o,w))},t.hJ)));return H(F(t,{aR:c,bT:0,hX:o,ax:0}),a(ut,function(k){return e.u(Ca)},v(xo,ko(e),0,0)),a(de,jv,kr(c)));case 1:var p=a(we,0,t.ax-1),i=F(t,{ax:p});return H(i,a(X3,e,i),a(de,jv,a(Lv,p,t.aR)));case 2:var p=a(Ye,Pr(t.aR)-1,t.ax+1),i=F(t,{ax:p});return H(i,a(X3,e,i),a(de,jv,a(Lv,p,t.aR)));case 3:var f=a(Lv,t.ax,t.aR);if(f.$===1)return H(F(t,{aU:!1}),fe,D(wv));var $=f.a;return H(F(t,{ev:D($),aU:!1}),fe,D(Z3($)));case 4:return H(F(t,{aU:!1}),fe,D(wv));case 10:var s=a(rf,e,t),d=s.a,b=s.b;return H(d,b,D(Gk));case 5:var g=r.a;return H(F(t,{ev:D(g),aU:!1}),fe,D(Z3(g)));case 6:var g=r.a,p=a(te,t.ax,a(Iu,g,t.aR));return H(F(t,{ax:p}),fe,z);case 7:return H(F(t,{aU:!1}),fe,D(wv));case 8:var y=r.a;return H(F(t,{bT:y}),fe,z);case 9:var _=r.a;return H(t,a(ut,function(k){return e.u(Ca)},v(xo,ko(e),0,t.bT+_)),z);default:return H(t,fe,z)}}),fx=x(function(e,r,n){var t=n;if(r.$===1){var o=r.a;return h(F(t,{dF:o}),fe)}else{var c=r.a,i=v(Mv,gc(e),c,t.bg),f=i.a,$=i.b,s=i.c,d=(function(){e:for(;;){if(s.$)break e;switch(s.a.$){case 1:var b=s.a.a;return b;case 0:var b=s.a.a;return b;default:break e}}return t.cA})();return h(F(t,{cA:d,bg:f}),$)}}),ux=function(e){var r=e;return We(r.p)?$2(e):u2(e)},$x=function(e){var r=e;return 1+Pr(r.n)+Pr(r.p)},lx=function(e){return a(Ru,$x(e)-1,e)},vx=function(e){var r=e,n=r.n;if(n.b){var t=n.a,o=n.b;return{p:a(A,r.fn,r.p),n:o,fn:t}}else return r},sx=function(e){var r=e;return We(r.n)?lx(e):vx(e)},K3=x(function(e,r,n){var t=e(n.cQ);return H(F(n,{cQ:t}),a(K0,yo(t),r),fe)}),dx=J(function(e,r,n,t){var o=t;switch(r.$){case 1:var c=r.a,i=a(te,o.cQ,a(l2,c,o.cQ));return H(F(o,{cQ:i}),a(K0,c,n),fe);case 2:return v(K3,sx,n,o);case 3:return v(K3,ux,n,o);default:var f=r.a,$=v(Mv,_c(e),f,o.bg),s=$.a,d=$.b,b=$.c,g=(function(){if(b.$)return n;switch(b.a.$){case 1:var p=b.a.a;return a(Q0,p,n);case 0:var p=b.a.a;return a(Q0,p,n);case 2:var y=b.a;return n;default:var _=b.a;return n}})();return H(F(o,{bg:s}),g,d)}}),Pa=function(e){return{$:1,a:e}},Dv=function(e){return{$:2,a:e}},af=function(e){return{$:0,a:e}},nf={$:1},Q3={$:3},bx=500,mx=200,px=l(function(e,r){var n=h(r,e);if(n.a.$)switch(n.b.$){case 0:var _=n.a.a,$=n.b,c=$.a,i=$.b,s=(function(){var Y=_.X;switch(Y.$){case 0:return af(0);case 1:return nf;case 2:return nf;default:return Q3}})();return Pa({br:i,ed:c.ed,i9:c.i9,X:s,n_:c.n_});case 1:var _=n.a.a,d=n.b,b=_.X;switch(b.$){case 0:return Ei;case 1:return Pa(F(_,{X:Dv(0)}));case 2:return Pa(F(_,{X:Dv(0)}));default:return Ei}case 2:var _=n.a.a,g=n.b;return Pa(F(_,{X:Q3}));case 3:var _=n.a.a,p=n.b,y=_.X;switch(y.$){case 0:return Pa(F(_,{X:af(0)}));case 1:return Pa(F(_,{X:nf}));case 2:return Pa(F(_,{X:nf}));default:return Pa(F(_,{X:af(0)}))}default:var _=n.a.a,k=n.b.a,L=_.X;switch(L.$){case 0:var w=L.a,I=w+k;return oe(I,bx)>0?Pa(F(_,{X:nf})):Pa(F(_,{X:af(I)}));case 2:var w=L.a,I=w+k;return oe(I,mx)>0?Ei:Pa(F(_,{X:Dv(I)}));case 1:return Pa(_);default:return Pa(_)}}else if(n.b.$){var f=n.a;return Ei}else{var t=n.a,o=n.b,c=o.a,i=o.b;return Pa({br:i,ed:c.ed,i9:c.i9,X:af(0),n_:c.n_})}}),hx=l(function(e,r){var n=r;return a(px,e,n)}),gx=x(function(e,r,n){var t=e.pK,o=e.f6;switch(r.$){case 0:var or=r.a;if(o.b9){var c=C(dx,yc,or,n.e,n.R),i=c.a,_=c.b,f=c.c;return H(F(n,{R:i,e:_}),f,z)}else return H(n,fe,z);case 1:var or=r.a;if(o.ds){var $=v(fx,qu,or,n.S),Ee=$.a,s=$.b;return H(F(n,{S:Ee}),s,z)}else return H(n,fe,z);case 2:var or=r.a;return H(F(n,{cN:a(hx,or,n.cN)}),fe,z);case 3:var or=r.a,d=n.aL,b=a(T3,or,d),g=a(Rk,d,b),p=g?a(Gt,Y0(3),n.f):n.f;return H(F(n,{f:p,aL:b}),fe,z);case 4:if(o.b9){var _=ev(n.e),y=v(Z0,yc,_,n.R),ve=y.a,f=y.b;return H(F(n,{R:ve,e:_}),f,z)}else return H(n,fe,z);case 5:var _=r.a;if(!o.b9||ie(_,n.e))return H(n,fe,z);var k=v(Z0,yc,_,n.R),ve=k.a,f=k.b;return H(F(n,{R:ve,e:_}),f,z);case 6:var or=r.a,L=a(Ar,6,n.f),w=a(Ar,5,n.f),I=a(Gt,or,n.f),R=a(Ar,6,I),B=a(Ar,5,I),Y=a(Ar,7,n.f),W=a(Ar,7,I),Q=n.oL,ue=!w&&B?v(Yk,yc,n.e,n.R):h(w&&!B?Hk(n.R):n.R,fe),ve=ue.a,Pe=ue.b,Me=(function(){if(L&&!R)return h(F(Q,{P:ef(Q.P)}),fe);if(!L&&R){var Mn=a(rf,xv,Q.P),ir=Mn.a,tt=Mn.b;return h(F(Q,{P:ir}),tt)}else return h(Q,fe)})(),ze=Me.a,ar=Me.b,ee=!Y&&W?a(qk,qu,n.S):h(Y&&!W?Bk(n.S):n.S,fe),Ee=ee.a,Ze=ee.b;return H(F(n,{oL:ze,S:Ee,f:I,R:ve}),fa(u([ar,Pe,Ze])),z);case 7:return H(F(n,{oK:!n.oK}),fe,z);case 8:return H(F(n,{bE:!n.bE}),fe,z);case 9:var Oe=r.a;return H(F(n,{d6:D({br:Oe,hw:!t,j5:W3})}),fe,t?D(0):z);case 10:return H(n,fe,D(1));case 11:var yr=r.a;return!o.dt||ie(yr,n.m0)?H(n,fe,z):H(F(n,{m0:yr}),fe,z);case 12:return o.dt?H(F(n,{m0:Ek(n.m0)}),fe,z):H(n,fe,z);case 13:if(a(Oi,o,n.oL.P)){var L=a(Ar,6,n.f),I=a(Gt,Nk(6),n.f),Q=n.oL,qe=L?h(ef(Q.P),fe):a(rf,xv,Q.P),i=qe.a,f=qe.b;return H(F(n,{oL:F(Q,{P:i}),f:I}),f,z)}else return H(n,fe,z);case 14:var or=r.a;if(a(Oi,o,n.oL.P)){var Q=n.oL,Tr=v(Mv,xv,or,n.oL.P),i=Tr.a,f=Tr.b,Ur=Tr.c,ja=(function(){e:for(;;){if(Ur.$)break e;switch(Ur.a.$){case 1:return!0;case 2:var ot=Ur.a;return!0;default:break e}}return!1})(),Ba=ja?a(Gt,l3(6),n.f):n.f,ze=(function(){if(!Ur.$&&Ur.a.$===1){var ot=Ur.a.a;return F(Q,{P:ef(i),qH:D(h(ot.hZ,ot.i9))})}else return F(Q,{P:i})})();return H(F(n,{oL:ze,f:Ba}),f,z)}else return H(n,fe,z);default:return H(n,fe,z)}}),_x=l(function(e,r){var n=r;return F(n,{aQ:v(mr,0,n.a9-1,e)})}),yx=l(function(e,r){if(r.$){var t=r.a;return qi(F(t,{aQ:v(mr,0,la(t.ep)-1,e)}))}else{var n=r.a;return bc(a(_x,e,n))}}),Cx=l(function(e,r){var n=r.b;return a(za,n$,a(yx,e,n))}),Px=function(e){var r=e.b;return a(za,n$,r)},Sx=function(e){var r=e.b;return a(za,R3({kp:E3(e)}),r)},kx=l(function(e,r){switch(e.$){case 1:return Px(r);case 2:return z2(r);case 3:return Sx(r);default:var n=e.a;return a(Cx,n,r)}}),xx=x(function(e,r,n){switch(r.$){case 0:var t=r.a;return v(Vk,e,t,n);case 1:var o=r.a,c=r.b;return C(dS,e,o,c,n);case 2:var d=r.a,i=r.b;return v(iS,d,i,n);case 3:var f=r.a;return v(nS,e,u([f]),n);case 4:var d=r.a,$=r.b;return v(GS,d,$,n);case 5:var d=r.a,s=r.b;return v(DS,d,s,n);case 6:return h(n,fe);case 7:var d=r.a,b=r.b,g=r.c;return C(ES,d,b,g,n);case 8:return h(F(n,{gP:z}),fe);case 9:var p=r.a,y=sc(n.tY).b2,_=!We(a(m3,e.rl,y)),k=v(gx,{pK:_,f6:e.rb},p,n.rb),L=k.a,w=k.b,I=k.c,R=v(cS,e,I,F(n,{rb:L})),B=R.a,Y=R.b;return h(B,fa(u([a(vc,wu,w),Y])));case 10:var W=r.a;return h(F(n,{tY:a(kx,W,n.tY)}),fe);case 11:return N2(n.rb)?h(F(n,{rb:bS(n.rb),tY:mS(n.tY)}),fe):h(F(n,{rb:P2(n.rb)}),fe);case 12:var Q=r.a;return v(HS,e,Q,n);default:return h(n,fe)}}),wx=At("setLocalStorage",function(e){return r$(u([h("key",Hr(e.i7)),h("value",Hr(e.un))]))}),jx=l(function(e,r){var n=r.a,t=r.b,o=a(Gb,e,n),c=a(wr,function(i){var f=i.a,$=i.b;return ie(a(Nt,f,n.fL),D($))?z:D(wx({i7:f,un:$}))},o);return We(c)?h(n,t):h(F(n,{fL:o}),fa(a(A,t,c)))}),Lx=x(function(e,r,n){return a(jx,e,v(xx,e,r,n))}),Tx=function(e){return{$:12,a:e}},zx={$:8},em=hn,Mx=Ya("button"),Tc=Ya("code"),Dx=Ya("li"),$$=Ya("p"),Ax=Ya("ul"),Fx=function(e){if(e.$){var r=e.a;return a(pn,u([a(X,"margin-top","0.4rem")]),u([a($$,u([a(X,"margin","0 0 0.25rem 0")]),u([Rr("Two or more instances share the same id:")])),a(Ax,u([a(X,"margin","0 0 0.5rem 0"),a(X,"padding-left","1.25rem")]),a(G,function(n){return a(Dx,P,u([a(Tc,P,u([Rr(n)]))]))},r)),a($$,u([a(X,"margin","0")]),u([Rr("Each "),a(Tc,P,u([Rr("Play.instance")])),Rr(" needs a unique "),a(Tc,P,u([Rr("id")])),Rr(" \u2014 the runtime keys per-instance state, asset registries, and DOM nodes by it.")]))]))}else return a(pn,u([a(X,"margin-top","0.4rem")]),u([a($$,u([a(X,"margin","0")]),u([a(Tc,P,u([Rr("Play.multipage")])),Rr(" was called with an empty "),a(Tc,P,u([Rr("instances")])),Rr(" list. Add at least one "),a(Tc,P,u([Rr("Play.instance { ... }")])),Rr(" to the list.")]))]))},Ix=Ya("details"),rm=function(e){return{$:0,a:e}},l$=ld,Vx=l(function(e,r){return a(l$,e,rm(r))}),Bx=function(e){return a(Vx,"click",re(e))},Hx=Ya("strong"),Rx=Ya("summary"),Ex=function(e){return a(pn,u([a(X,"position","fixed"),a(X,"top","1rem"),a(X,"left","50%"),a(X,"transform","translateX(-50%)"),a(X,"max-width","min(40rem, calc(100vw - 2rem))"),a(X,"padding","1rem 2.75rem 1rem 1.25rem"),a(X,"background","#fff5f5"),a(X,"color","#742a2a"),a(X,"border","1px solid #fc8181"),a(X,"border-radius","0.5rem"),a(X,"box-shadow","0 4px 24px rgba(0, 0, 0, 0.15)"),a(X,"font-family","system-ui, -apple-system, sans-serif"),a(X,"font-size","0.95rem"),a(X,"line-height","1.5"),a(X,"z-index","2147483647")]),u([a(Hx,u([a(X,"display","block"),a(X,"color","#c53030"),a(X,"margin-bottom","0.35rem")]),u([Rr("This page has a configuration problem.")])),a($$,u([a(X,"margin","0 0 0.5rem 0")]),u([Rr("Please notify the page author so they can fix it.")])),a(Ix,u([a(X,"margin-top","0.5rem"),a(X,"color","#742a2a"),a(X,"font-size","0.88rem")]),u([a(Rx,u([a(X,"cursor","pointer"),a(X,"user-select","none")]),u([Rr("Technical detail (for the developer)")])),Fx(e)])),a(Mx,u([Bx(zx),a(em,"aria-label","Dismiss"),a(X,"position","absolute"),a(X,"top","0.5rem"),a(X,"right","0.5rem"),a(X,"width","1.75rem"),a(X,"height","1.75rem"),a(X,"padding","0"),a(X,"border","none"),a(X,"background","transparent"),a(X,"color","#742a2a"),a(X,"cursor","pointer"),a(X,"font-size","1.4rem"),a(X,"line-height","1"),a(X,"border-radius","0.25rem")]),u([Rr("\xD7")]))]))},Ux=function(e){switch(e){case 0:return 44;case 1:return 40;default:return 24}},qx=function(e){var r=e;return Ux(r.cA.aD)},Yx=function(e){return qx(e.S)},cr=l(function(e,r){return e(Gn(r))}),Av="scrollbar-muted",am=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Nx=am,Cn=Nx,Fv=function(e){return{$:4,a:e}},nm=function(e){return Fv(Pu(e))},ce=nm,ke=function(e){return"hsla("+(N(e.aS*360)+(", "+(N(e.a0*100)+("%, "+(N(e.D*100)+("%, "+(N(e.oS)+")")))))))},tm=l(function(e,r){var n=ke(a(cr,function(c){return c.iy},r)),t=ke(a(cr,function(c){return c.ii},r)),o=ke(a(cr,function(c){return c.bp},r));return v(Cn,"style",P,u([ce(`
/* Firefox + recent standards-compliant browsers */
`+(e+(`* {
  scrollbar-width: thin;
  scrollbar-color: `+(o+(` transparent;
}
`+(e+("."+(Av+(` {
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
`+(e+("."+(Av+(`::-webkit-scrollbar-thumb {
  background-color: `+(n+(`;
}
`+(e+("."+(Av+(`::-webkit-scrollbar-thumb:hover {
  background-color: `+(t+`;
}
`))))))))))))))))))))))))))))))))))))]))}),Gx=function(e){return a(tm,"",e)},Ox=l(function(e,r){return a(vd,e,Hr(r))}),om=Ox("id"),Wx=x(function(e,r,n){return v(Sr,e,{eS:r.eS,oE:r.oE},n)}),cm=s7,im=cm,fm=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Jx=J(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),um=J(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),lt=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zx=y7,v$=l(function(e,r){var n=r.a,t=r.b,o=r.c;return v(lt,a(Zx,e,n),t,o)}),tf=l(function(e,r){switch(r.$){case 0:var t=r.a,o=r.b,c=r.c;return v(am,t,a(G,v$(e),o),a(G,tf(e),c));case 1:var n=r.a,t=r.b,o=r.c,c=r.d;return C(um,n,t,a(G,v$(e),o),a(G,tf(e),c));case 2:var t=r.a,o=r.b,c=r.c;return v(fm,t,a(G,v$(e),o),a(G,function(f){var $=f.a,s=f.b;return h($,a(tf,e,s))},c));case 3:var n=r.a,t=r.b,o=r.c,c=r.d;return C(Jx,n,t,a(G,v$(e),o),a(G,function(f){var $=f.a,s=f.b;return h($,a(tf,e,s))},c));default:var i=r.a;return Fv(a(cm,e,i))}}),of=tf,O=Cn("div"),$m=l(function(e,r){return v(lt,a(M0,e,r),!1,"")}),vt=l(function(e,r){return a($m,e,Hr(r))}),Kt=vt("id"),Xx=function(e){return Z(G2,e)},lm=function(e){return{$:0,a:e}},Fq=ne,M=l(function(e,r){return lm(e+(":"+r))}),be=l(function(e,r){return a(M,e,r.un)}),ea=be("cursor"),Kx=function(e){var r=e;return a(de,function(n){return n.by},r.ee)},Iv=l(function(e,r){return!a(Mu,a(er,L0,e),r)}),Qx=l(function(e,r){var n=r.a,t=r.b;switch(e.$){case 0:var o=e.a,$=o.c;return We($)?h(n,t):h(n,a(A,e,t));case 1:var c=e.b;return a(Iv,function(d){var b=d.c;return We(b)},c)?h(n,t):h(n,a(A,e,t));case 2:var i=e.b;return We(i)?h(n,t):h(n,a(A,e,t));case 3:return h(n,a(A,e,t));case 4:var $=e.a;return We($)?h(n,t):h(n,a(A,e,t));case 5:var $=e.a;return We($)?h(n,t):h(n,a(A,e,t));case 6:var f=e.a;return ho(f.pZ)?h(n,t):h(v(Sr,f.r8,f.pZ,n),t);case 7:var $=e.a;return We($)?h(n,t):h(n,a(A,e,t));case 8:var $=e.a;return We($)?h(n,t):h(n,a(A,e,t));default:var s=e.a;return a(Iv,function(d){var b=d.b;return We(b)},s)?h(n,t):h(n,a(A,e,t))}}),vm=function(e){return{$:6,a:e}},ew=l(function(e,r){return a(B0,a(G,function(n){var t=n.a,o=n.b;return vm({pZ:o,r8:t})},Na(e)),r)}),rw=function(e){var r=v(Ka,Qx,h(He,P),e),n=r.a,t=r.b;return a(ew,n,t)},aw=function(e){var r=e.p_,n=e.m4,t=e.l0,o=e.k8;return{k8:o,p_:rw(r),l0:t,m4:n}},nw=function(e){return a(te,"",a(de,function(r){return'@charset "'+(r+'"')},e))},tw=J(function(e,r,n,t){e:for(;;)if(n.b)if(n.b.b){var o=n.a,c=n.b,i=e,f=r,$=c,s=t+(e(o)+(r+""));e=i,r=f,n=$,t=s;continue e}else{var o=n.a;return t+(e(o)+"")}else return t}),va=x(function(e,r,n){return C(tw,e,r,n,"")}),sm=function(e){return"("+(e.lD+(a(te,"",a(de,rg(": "),e.un))+")"))},ow=function(e){switch(e){case 0:return"print";case 1:return"screen";default:return"speech"}},dm=function(e){var r=x(function(c,i,f){return c+(" "+a(Mr," and ",a(A,ow(i),a(G,sm,f))))});switch(e.$){case 0:var t=e.a;return v(va,sm," and ",t);case 1:var n=e.a,t=e.b;return v(r,"only",n,t);case 2:var n=e.a,t=e.b;return v(r,"not",n,t);default:var o=e.a;return o}},cw=l(function(e,r){return'@import "'+(e+(dm(r)+'"'))}),iw=function(e){var r=e.a,n=e.b;return v(va,cw(r),`
`,n)},fw=function(e){var r=e.a,n=e.b;return"@namespace "+(r+('"'+(n+'"')))},uw=function(e){return v(va,function(r){var n=r;return n+";"},"",e)},$w=q8,lw=function(e){var r=e;return"::"+r},vw=function(e){switch(e){case 0:return"+";case 1:return"~";case 2:return">";default:return""}},Vv=function(e){switch(e.$){case 0:var r=e.a;return"."+r;case 1:var r=e.a;return"#"+r;case 2:var r=e.a;return":"+r;default:var r=e.a;return"["+(r+"]")}},bm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return Z(r,v(va,Vv,"",n));case 1:var n=e.a;return We(n)?"*":v(va,Vv,"",n);default:var r=e.a,n=e.b;return Z(r,v(va,Vv,"",n))}},sw=function(e){var r=e.a,n=e.b;return vw(r)+(" "+bm(n))},dw=function(e){var r=e.a,n=e.b,t=e.c,o=a(A,bm(r),a(G,sw,n)),c=a(te,"",a(de,lw,t));return a($w,a(Mr," ",o),c)},mm=function(e){var r=e.a,n=e.b,t=e.c,o=v(va,dw,",",a(A,r,n));return o+("{"+(uw(t)+"}"))},bw=function(e){switch(e.$){case 0:var r=e.a;return mm(r);case 1:var n=e.a,t=e.b,o=v(va,dm,", ",n),c=v(va,mm,`
`,t);return"@media "+(o+("{"+(c+"}")));case 2:return"TODO";case 3:return"TODO";case 4:return"TODO";case 5:return"TODO";case 6:var i=e.a.pZ,f=e.a.r8;return"@keyframes "+(f+("{"+(i+"}")));case 7:return"TODO";case 8:return"TODO";default:return"TODO"}},mw=function(e){var r=e.p_,n=e.m4,t=e.l0,o=e.k8;return nw(o)+(v(va,iw,`
`,t)+(v(va,fw,`
`,n)+(v(va,bw,`
`,r)+"")))},pm=function(e){return{$:8,a:e}},hm=function(e){return{$:5,a:e}},gm=function(e){return{$:4,a:e}},cf=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Qt=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ff=function(e){return{$:0,a:e}},Bv=l(function(e,r){return{$:2,a:e,b:r}}),_m=function(e){return{$:7,a:e}},To=l(function(e,r){return{$:1,a:e,b:r}}),Hv=l(function(e,r){if(r.b)if(r.b.b){var t=r.a,o=r.b;return a(A,t,a(Hv,e,o))}else{var n=r.a;return u([e(n)])}else return r}),ym=l(function(e,r){var n=r.a,t=r.b,o=r.c;return v(Qt,n,t,Z(o,u([e])))}),Rv=l(function(e,r){if(r.b)if(r.b.b){var i=r.a,f=r.b;return a(A,i,a(Rv,e,f))}else switch(r.a.$){case 0:var n=r.a.a;return u([ff(a(ym,e,n))]);case 1:var t=r.a,o=t.a,c=t.b;return u([a(To,o,a(Hv,ym(e),c))]);default:return r}else return r}),Cm=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c,i=a(G,e,c),f=e(o);return u([v(Qt,o,c,t),v(Qt,f,i,P)])}else{var n=r.a,t=r.c;return u([v(Qt,n,P,t),v(Qt,e(n),P,P)])}}),pw=l(function(e,r){var n=r.a,t=r.b;return v(cf,n,t,D(e))}),hw=l(function(e,r){return a(Cm,pw(e),r)}),Pm=l(function(e,r){return{$:2,a:e,b:r}}),gw=l(function(e,r){return{$:0,a:e,b:r}}),Sm=function(e){return{$:1,a:e}},km=l(function(e,r){switch(r.$){case 0:var n=r.a,o=r.b;return a(gw,n,Z(o,u([e])));case 1:var o=r.a;return Sm(Z(o,u([e])));default:var t=r.a,o=r.b;return a(Pm,t,Z(o,u([e])))}}),xm=l(function(e,r){if(r.b)if(r.b.b){var c=r.a,i=r.b;return a(A,c,a(xm,e,i))}else{var n=r.a,t=n.a,o=n.b;return u([h(t,a(km,e,o))])}else return P}),_w=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c;return v(cf,o,a(xm,e,c),t)}else{var n=r.a,t=r.c;return v(cf,a(km,e,n),P,t)}}),yw=l(function(e,r){return a(Cm,_w(e),r)}),Ev=function(e){e:for(;;)if(e.b)if(e.a.$){var o=e.b,c=o;e=c;continue e}else{var r=e.a.a,n=r.a,t=r.b,o=e.b;return Z(a(A,n,t),Ev(o))}else return P},Uv=Le(function(e,r,n,t,o){return{$:3,a:e,b:r,c:n,d:t,e:o}}),s$=l(function(e,r){e:for(;;)if(r.b){if(r.b.b)break e;switch(r.a.$){case 0:var R=r.a.a;return a(G,ff,e(R));case 1:if(r.a.b.b)if(r.a.b.b.b){var c=r.a,t=c.a,i=c.b,B=i.a,Y=i.b,f=a(s$,e,u([a(To,t,Y)]));if(f.b&&f.a.$===1&&!f.b.b){var $=f.a,s=$.a,d=$.b;return u([a(To,s,a(A,B,d))])}else{var b=f;return b}}else{var n=r.a,t=n.a,o=n.b,R=o.a;return u([a(To,t,e(R))])}else break e;case 2:var g=r.a,p=g.a,y=g.b;return u([a(Bv,p,a(s$,e,y))]);case 3:var _=r.a,k=_.a,L=_.b,w=_.c,I=_.d,R=_.e;return a(G,C(Uv,k,L,w,I),e(R));case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}else return r;var B=r.a,Y=r.b;return a(A,B,a(s$,e,Y))}),Cw=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return D(r)}else return z},wm=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return D(u([r]))}else return z},Pw=function(e){e:for(;;)if(e.b){var r=e.a,n=e.b;if(r.$===1){var t=n;e=t;continue e}else return r}else return z},Sw=function(e){return{$:9,a:e}},jm=function(e){var r=function(t){if(t.b){var o=t.a,c=t.b;return a(A,o,r(c))}else return P},n=r(e);return u([Sw(n)])},kw=l(function(e,r){if(r.$)return r;var n=r.a;return a(To,e,u([n]))}),xw=function(e){if(e.b){var r=e.a,n=e.b;return D(n)}else return z},Lm=Le(function(e,r,n,t,o){if(o.$)return o;var c=o.a;return V(Uv,e,r,n,t,c)}),Tm=l(function(e,r){switch(r.$){case 0:var d=r.a;return a(To,e,u([d]));case 1:var n=r.a,t=r.b;return a(To,Z(e,n),t);case 2:var o=r.a,c=r.b;return a(Bv,o,a(G,Tm(e),c));case 3:var i=r.a,f=r.b,$=r.c,s=r.d,d=r.e;return V(Uv,i,f,$,s,d);case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}),qv=function(e){var r=e;return r},zm=J(function(e,r,n,t){var o=function(s){return a(te,P,xw(s))},c=a(Wn,r,a(te,P,wm(t))),i=(function(){var s=h(kr(c),Cw(t));if(!s.a.$&&!s.b.$){var d=s.a.a,b=s.b.a;return Z(a(qn,Pr(t)-1,t),u([ie(b,d)?b:d]))}else return t})(),f=function(s){return gn(a(Hv,Wn(e),a(G,Ti,a(s$,n,s))))},$=a(te,P,a(de,f,wm(t)));return Z(i,Z(o($),o(c)))}),Wn=l(function(e,r){if(e.b)switch(e.a.$){case 0:var n=e.a.a,B=e.b;return a(Wn,B,a(Rv,n,r));case 1:var t=e.a,o=t.a,w=t.b,B=e.b;return C(zm,w,B,yw(o),r);case 2:var c=e.a,i=c.a,f=c.b,B=e.b,$=l(function(Y,W){var Q=Y.a,ue=Y.b,ve=Y.c,Pe=W.a,Me=W.b,ze=W.c;return v(cf,Q,Z(ue,a(A,h(i,Pe),Me)),Pw(u([ze,ve])))}),s=function(Y){switch(Y.$){case 0:var W=Y.a,Q=W.a,ue=W.b,ve=W.c,Pe=a(_n,function(ja){return a(G,$(ja),a(A,Q,ue))},Ev(r)),Me=(function(){if(Pe.b){var ja=Pe.a,Ba=Pe.b;return u([ff(v(Qt,ja,Ba,P))])}else return P})();return a(Wn,ve,Me);case 1:var ze=Y.a,ar=Y.b;return a(Mm,ze,ar);case 2:var ee=Y.a,Ee=Y.b;return a(Dm,ee,Ee);case 3:var Ze=Y.a,Oe=Y.b,yr=Y.c,qe=Y.d,or=Y.e;return a(G,C(Lm,Ze,Oe,yr,qe),d$(or));case 4:var Tr=Y.a;return u([gm(Tr)]);case 5:var Tr=Y.a;return u([hm(Tr)]);case 6:var Tr=Y.a;return u([_m(Tr)]);case 7:var Tr=Y.a;return u([pm(Tr)]);default:var Ur=Y.a;return jm(Ur)}};return gn(Z(u([a(Wn,B,r)]),a(G,s,a(_n,qv,f))));case 3:var d=e.a,b=d.a,w=d.b,B=e.b;return C(zm,w,B,hw(b),r);case 5:var g=e.a.a,B=e.b,p=Cb(g),y="animation-name:"+p,_=a(Wn,B,a(Rv,y,r));return a(B0,_,u([vm({pZ:g,r8:p})]));case 4:var k=e.a,L=k.a,w=k.b,B=e.b,I=(function(){var Y=Ev(r);if(Y.b){var W=Y.a,Q=Y.b;return a(G,kw(L),a(Wn,w,Ti(ff(v(Qt,W,Q,P)))))}else return P})();return Z(a(Wn,B,r),I);default:var R=e.a.a,B=e.b;return a(Wn,Z(R,B),r)}else return r}),d$=function(e){var r=e.a,n=e.b,t=e.c;return a(Wn,t,u([ff(v(Qt,r,n,P))]))},Yv=function(e){if(e.b){var r=e.a,n=e.b;return Z(ww(r),Yv(n))}else return P},Mm=l(function(e,r){var n=function(t){return a(G,Tm(e),d$(t))};return a(_n,n,r)}),Dm=l(function(e,r){var n=Yv(a(_n,qv,r));return u([a(Bv,e,n)])}),ww=function(e){switch(e.$){case 0:var s=e.a;return d$(s);case 1:var r=e.a,n=e.b;return a(Mm,r,n);case 2:var t=e.a,o=e.b;return a(Dm,t,o);case 3:var c=e.a,i=e.b,f=e.c,$=e.d,s=e.e;return a(G,C(Lm,c,i,f,$),d$(s));case 4:var d=e.a;return u([gm(d)]);case 5:var d=e.a;return u([hm(d)]);case 6:var d=e.a;return u([_m(d)]);case 7:var d=e.a;return u([pm(d)]);default:var b=e.a;return jm(b)}},jw=function(e){var r=e.n2,n=e.m4,t=e.l0,o=e.k8,c=Yv(a(_n,qv,r));return{k8:o,p_:c,l0:t,m4:n}},Am=function(e){return mw(aw(jw(e)))},Fm=function(e){return{k8:z,l0:P,m4:P,n2:e}},Im=Fv,Lw=function(e){return Im(v(mo,"span",u([a(hn,"style","display: none;"),a(hn,"class","elm-css-style-wrapper")]),Ti(v(mo,"style",P,Ti(Pu(Am(Fm(e))))))))},Iq=0,Tw={aQ:0,un:"grabbing"},Vq=ne,zw=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Mw=function(e){return{$:0,a:e}},Vm=l(function(e,r){var n=v(cf,r,P,z);return u([Mw(v(zw,n,P,e))])}),Dw=l(function(e,r){return a(Vm,r,a(Pm,e,P))}),Bm=function(e){var r=Kx(e);return r.$?ce(""):Lw(u([a(Dw,"body *",u([ea(Tw)]))]))},Ma={sY:0,un:"absolute"},zc={iW:0,fA:0,un:"row"},sa=F(zc,{un:"column"}),Aw=function(e){return{$:0,a:e}},Fw=Sm(u([Aw(F0)])),Hm=function(e){if(e.b){var r=e;return Am(Fm(u([a(Vm,e,Fw)])))}else return""},Iw=function(e){var r=Hm(e),n=a(hn,"","");return v(lt,n,!0,r)},E=Iw,_e=a(M,"display","flex"),Fr=be("flex-direction"),Bq=0,me=function(e){return{dq:0,he:0,dx:0,cJ:0,sm:0,hx:0,c7:e,e4:"",gq:0,un:Xe(e)}},st={a6:0,o2:1300,rc:1100,r1:1400,nl:100,om:1500,cN:1200},Qe=be("position"),Hq=0,uf=x(function(e,r,n){return{kG:0,k3:0,ek:0,lK:0,fN:0,eE:0,c2:0,eF:0,eG:0,dw:0,dx:0,cJ:0,eH:0,c7:n,e0:0,e4:r,gq:e,un:Z(N(n),r)}}),j=a(uf,0,"px"),dt=be("right"),Sa=be("top"),Rq=0,Eq=1,Rm=function(e){return e?"true":"false"},Te=function(e){return a(M,"background-color",e.un)},Em=function(e){return{$:6,a:e}},nr=Em,Vw=J(function(e,r,n,t){return a(M,e,r.un+(" "+(n.un+(" "+t.un))))}),eo=Vw("border"),$r=be("border-radius"),Bw=zr(function(e,r,n,t,o,c){return a(M,e,r.un+(" "+(n.un+(" "+(t.un+(" "+(o.un+(" "+c.un))))))))}),$f=Bw("box-shadow"),Uq=0,lr=function(e){return{dx:0,cJ:0,eH:0,sm:0,hx:0,c7:e,e4:"",gq:0,un:N(e)}},rn=be("opacity"),an=be("padding"),Pn={pJ:l(function(e,r){return j(e+r)}),rD:j(12),rO:j(8),sO:j(9999),ty:j(4),uE:j(20)},pr=l(function(e,r){return F(r,{oS:e})}),ro={bs:0,dR:0,un:"solid"},Mc=l(function(e,r){return e+("("+(a(Mr,",",r)+")"))}),ka=S8,Hw=function(e){return e*180/ka},lf=function(e){return e*ka/180},Rw=l(function(e,r){var n=Ht(e);return a(Xr,r,n)+e-n}),Ew=x(function(e,r,n){var t=e/lf(60),o=(1-xe(2*n-1))*r,c=n-o/2,i=o*(1-xe(a(Rw,t,2)-1)),f=t<0?H(0,0,0):t<1?H(o,i,0):t<2?H(i,o,0):t<3?H(0,o,i):t<4?H(0,i,o):t<5?H(i,0,o):t<6?H(o,0,i):H(0,0,0),$=f.a,s=f.b,d=f.c;return H($+c,s+c,d+c)}),Uw=Le(function(e,r,n,t,o){var c=v(Ew,Hw(r),n,t),i=c.a,f=c.b,$=c.c;return{oS:o,pb:Ht($),lc:0,q$:Ht(f),s5:Ht(i),un:e}}),Um=function(e){return N(e*100)+"%"},qw=J(function(e,r,n,t){var o=u([N(e),Um(r),Um(n),N(t)]),c=a(Mc,"hsla",o);return V(Uw,c,e,r,n,t)}),tr=function(e){return C(qw,e.aS*360,e.a0,e.D,e.oS)},Dc={oS:1,aS:0,D:1,a0:0},le={fN:0,eE:0,c2:0,eF:0,eG:0,dw:0,dx:0,sm:0,c7:0,hF:0,e4:"",gq:0,un:"0"},qm=x(function(e,r,n){var t=e.qa,o=e.dF,c=tr(a(pr,.08,Dc)),i=tr(a(pr,.25,$o)),f=tr(a(pr,.18,Dc));return a(O,Z(r,u([E(u([_e,(function(){return Fr(o===1?sa:zc)})(),a(M,"gap","3px"),an(j(3)),$r(a(Pn.pJ,36/2,3)),Te(c),v(eo,j(1),ro,f),a(M,"backdrop-filter","blur(14px) saturate(160%)"),a(M,"-webkit-backdrop-filter","blur(14px) saturate(160%)"),V($f,le,j(6),j(18),j(-6),i),a(M,"pointer-events","auto"),t?rn(lr(.4)):nr(P)]))])),n)}),Yw=l(function(e,r){return{$:1,a:e,b:r}}),Nw=function(e){return{$:2,a:e}},Nv=function(e){return Yw(Nw(e))},vf=Nv("active"),zo=l(function(e,r){return lm(e+(":"+r))}),b$=x(function(e,r,n){e:for(;;)switch(n.$){case 0:var t=n.a,o=a(te,"",kr(a($n,":",t)));return a(zo,r,o);case 1:var c=n.a;return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-selector"));case 2:var i=n.a;return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-combinator"));case 3:var f=n.a;return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-pseudo-element setter"));case 4:return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-media-query"));case 5:return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-keyframes"));default:if(n.a.b)if(n.a.b.b){var p=n.a,y=p.a,_=p.b,d=e,b=r,g=Em(_);e=d,r=b,n=g;continue e}else{var $=n.a,s=$.a,d=e,b=r,g=s;e=d,r=b,n=g;continue e}else return a(zo,r,"elm-css-error-cannot-apply-"+(e+"-with-empty-Style"))}}),qq=0,m$=v(uf,0,"",0),Ge=function(e){return v(b$,"alignItems","align-items",e(m$))},hr=l(function(e,r){return v(lt,a(hn,e,r),!1,"")}),Ue=hr,Yq=1,Nq=ne,p$=J(function(e,r,n,t){return{gB:e,gV:D(n),cB:r,h9:D(t)}}),Gv=p$(1),Gw=be("border-style"),Gq=25,Ym=p$(25),bt=Cn("button"),je=be("center"),ye=function(e){return a(M,"color",e.un)},Oq=29,Ow=p$(29),h$=be("border-bottom-left-radius"),g$=be("border-bottom-right-radius"),_$=be("border-top-left-radius"),y$=be("border-top-right-radius"),Wq=0,Je=a(uf,0,"%"),Ww=l(function(e,r){var n=j(4),t=j(18);switch(r){case 0:return u([$r(Je(50))]);case 2:return u([$r(n)]);case 1:return u(e===1?[_$(t),y$(t),h$(n),g$(n)]:[_$(t),h$(t),y$(n),g$(n)]);default:return u(e===1?[_$(n),y$(n),h$(t),g$(t)]:[_$(n),h$(n),y$(t),g$(t)])}}),Nm=l(function(e,r){return a($m,e,h3(r))}),sf=Nm("disabled"),Jw={$:3},C$=Jw,K=l(function(e,r){return tr(e(Gn(r)))}),De=be("height"),Jn=Nv("hover"),Ov={bs:0,un:"inset"},Br=function(e){return v(b$,"justifyContent","justify-content",e(m$))},fr={d$:0,kU:0,bs:0,aQ:0,qb:0,ra:0,l4:0,i8:0,eG:0,dw:0,cJ:0,q:0,o:0,ju:0,hF:0,sV:0,cg:0,hP:0,tn:0,e$:0,dS:0,bK:0,ku:0,ui:0,un:"none"},Wv=l(function(e,r){return v(lt,a(l$,e,r),!1,"")}),ra=l(function(e,r){return a(Wv,e,rm(r))}),mt=function(e){return a(ra,"click",re(e))},nn=be("outline"),tn={aQ:0,un:"pointer"},Mo={sY:0,un:"relative"},Jq=89,Gm=p$(89),Zw=function(e){return We(e)?{un:"none"}:{un:v(va,function(r){return r.un}," ",e)}},P$=a(er,be("transform"),Zw),Xw=function(e){switch(e){case 0:return"background";case 1:return"background-color";case 2:return"background-position";case 3:return"background-size";case 4:return"border";case 5:return"border-bottom";case 6:return"border-bottom-color";case 7:return"border-bottom-left-radius";case 8:return"border-bottom-right-radius";case 9:return"border-bottom-width";case 10:return"border-color";case 11:return"border-left";case 12:return"border-left-color";case 13:return"border-left-width";case 14:return"border-radius";case 15:return"border-right";case 16:return"border-right-color";case 17:return"border-right-width";case 18:return"border-top";case 19:return"border-top-color";case 20:return"border-top-left-radius";case 21:return"border-top-right-radius";case 22:return"border-top-width";case 23:return"border-width";case 24:return"bottom";case 25:return"box-shadow";case 26:return"caret-color";case 27:return"clip";case 28:return"clip-path";case 29:return"color";case 30:return"column-count";case 31:return"column-gap";case 32:return"column-rule";case 33:return"column-rule-color";case 34:return"column-rule-width";case 35:return"column-width";case 36:return"columns";case 37:return"filter";case 38:return"flex";case 39:return"flex-basis";case 40:return"flex-grow";case 41:return"flex-shrink";case 42:return"font";case 43:return"font-size";case 44:return"font-size-adjust";case 45:return"font-stretch";case 46:return"font-variation-settings";case 47:return"font-weight";case 48:return"grid-column-gap";case 49:return"grid-gap";case 50:return"grid-row-gap";case 51:return"height";case 52:return"left";case 53:return"letter-spacing";case 54:return"line-height";case 55:return"margin";case 56:return"margin-bottom";case 57:return"margin-left";case 58:return"margin-right";case 59:return"margin-top";case 60:return"mask";case 61:return"mask-position";case 62:return"mask-size";case 63:return"max-height";case 64:return"max-width";case 65:return"min-height";case 66:return"min-width";case 67:return"object-position";case 68:return"offset";case 69:return"offset-anchor";case 70:return"offset-distance";case 71:return"offset-path";case 72:return"offset-rotate";case 73:return"opacity";case 74:return"order";case 75:return"outline";case 76:return"outline-color";case 77:return"outline-offset";case 78:return"outline-width";case 79:return"padding";case 80:return"padding-bottom";case 81:return"padding-left";case 82:return"padding-right";case 83:return"padding-top";case 84:return"right";case 85:return"tab-size";case 86:return"text-indent";case 87:return"text-shadow";case 88:return"top";case 89:return"transform";case 90:return"transform-origin";case 91:return"vertical-align";case 92:return"visibility";case 93:return"width";case 94:return"word-spacing";default:return"z-index"}},Om=function(e){return N(e)+"ms"},Kw=function(e){switch(e.$){case 0:return"ease";case 1:return"linear";case 2:return"ease-in";case 3:return"ease-out";case 4:return"ease-in-out";case 5:return"step-start";case 6:return"step-end";default:var r=e.a,n=e.b,t=e.c,o=e.d;return"cubic-bezier("+(N(r)+(" , "+(N(n)+(" , "+(N(t)+(" , "+(N(o)+")")))))))}},S$=function(e){var r=v(Za,0,-1,v(se,l(function(n,t){var o=n.h9,c=n.gV,i=n.cB,f=n.gB;return t+(Xw(f)+(" "+(Om(i)+(" "+(a(te,"",a(de,Om,c))+(" "+(a(te,"",a(de,Kw,o))+",")))))))}),"",e));return a(M,"transition",r)},Wm=l(function(e,r){return{ku:0,un:a(Mc,"translate",u([e.un,r.un]))}}),Ce=be("width"),Jm=l(function(e,r){var n=Du(e),t=tr(a(pr,n?.18:.64,$o)),o=tr(a(pr,n?.12:.48,$o)),c=tr(n?a(pr,.06,$o):a(pr,.1,Dc)),i=r.iq,f=i.a,$=i.b;return a(bt,Z(u([mt(r.fX),sf(r.qa),a(Ue,"role",r.ip),a(Ue,f,$),a(Ue,"aria-label",r.i9),E(Z(u([Qe(Mo),Ce(j(36)),De(j(36)),Gw(fr),an(le),r.qa?a(M,"cursor","default"):ea(tn),a(M,"background","transparent"),nn(fr),ye(r.mh?a(K,r.jx,e):a(K,function(s){return s.t_},e)),S$(u([v(Ym,70,0,C$),v(Gv,70,0,C$),v(Ow,70,0,C$)])),r.mh?nr(u([V($f,Ov,le,j(4),le,o),Te(o)])):r.qa?nr(P):nr(u([Jn(u([Te(c),V($f,Ov,le,j(1),le,c)]))])),r.qa?nr(P):vf(u([V($f,Ov,le,j(6),le,t),Te(t)]))]),a(Ww,r.dF,r.sY)))]),r.dg),u([a(O,u([E(u([Ce(Je(100)),De(Je(100)),_e,Ge(je),Br(je),r.mh?P$(u([a(Wm,le,j(1))])):nr(P),r.qa?nr(P):vf(u([P$(u([a(Wm,le,j(1.5))]))])),S$(u([v(Gm,70,0,C$)]))]))]),u([a(O,u([E(u([Ce(j(24)),De(j(24))]))]),u([r.lZ]))]))]))}),k$=l(function(e,r){return v(qm,{qa:r.qa,dF:1},P,u([a(Jm,e,{ip:"button",iq:h("aria-pressed",Rm(r.i6)),qa:r.qa,lZ:r.lZ,mh:r.i6,i9:r.i9,fX:r.fX,jx:r.ij,dF:1,sY:0,dg:r.dg})]))}),Ac=l(function(e,r){return a(k$,e,{ij:r.oi,qa:r.qa,lZ:r.lZ,i6:a(Ar,r.by,r.bz),i9:r.i9,fX:r.u(dv(r.by)),dg:r.dg})}),Qw=J(function(e,r,n,t){return a(Ac,e,{qa:!1,lZ:t.lZ,by:t.by,i9:t.ok,bz:r,oi:t.oi,u:n,dg:P})}),Zn=be("z-index"),ej=l(function(e,r){return a(O,u([E(u([Qe(Ma),Sa(j(Ki)),dt(j(Ki)),_e,Fr(sa),a(M,"gap","6px"),a(M,"pointer-events",r.i1?"none":"auto"),Zn(me(st.rc)),a(M,"transform",r.i1?"translateX(calc(100% + "+(N(Ki)+"px))"):"translateX(0)"),a(M,"transition","transform 280ms cubic-bezier(0.2, 0.9, 0.25, 1)")]))]),a(G,v(Qw,e,r.hG,r.u),r.cf))}),Xn=be("bottom"),da=be("left"),rj=function(e){return u([(function(){var r=e.dY;switch(r.$){case 0:var n=r.a;return da(j(n));case 1:var n=r.a;return dt(j(n));default:return da(Je(50))}})(),(function(){var r=e.e9;if(r.$){var n=r.a;return Xn(j(n))}else{var n=r.a;return Sa(j(n))}})()])},df={oP:0,aQ:0,ek:0,he:0,rz:0,eE:0,c2:0,cJ:0,eR:0,cg:0,h5:0,e1:0,bK:0,un:"auto"},pt={fg:0,sY:0,h5:0,un:"fixed"},aj=function(e){var r="blur("+(N(e)+"px) saturate(180%)");return nr(u([a(M,"backdrop-filter",r),a(M,"-webkit-backdrop-filter",r)]))},nj={aQ:0,un:"grab"},bf={bs:0,eR:0,un:"hidden",gs:0},Zm=l(function(e,r){return"draggable-panel-"+(e(r)+"-no-drag")}),Fc=be("overflow"),tj=l(function(e,r){var n=(function(){var t=e.dY;return t.$===2?"calc(-50% + "+(N(r.dY)+"px)"):N(r.dY)+"px"})();return"translate("+(n+(", "+(N(r.e9)+"px)")))}),ht=be("pointer-events"),oj=x(function(e,r,n){var t=n,o=C(I3,e,r.br,r.by,t),c=t.ee;if(c.$)return o;var i=c.a;return ie(i.by,r.by)?a(D3,e,i):o}),Xm=be("box-shadow"),Km=Le(function(e,r,n,t,o){return a(M,e,r.un+(" "+(n.un+(" "+(t.un+(" "+o.un))))))}),cj=Km("box-shadow"),Jv=J(function(e,r,n,t){return{oS:t,pb:n,lc:0,q$:r,s5:e,un:a(Mc,"rgba",Z(a(G,Xe,u([e,r,n])),u([N(t)])))}}),Zv={qj:Xm(fr),qk:C(cj,le,j(1),j(2),C(Jv,0,0,0,.3)),ql:a(M,"box-shadow","0 2px 4px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2)"),qm:a(M,"box-shadow","0 12px 24px -8px rgba(0, 0, 0, 0.55), 0 4px 8px -2px rgba(0, 0, 0, 0.4)"),qn:a(M,"box-shadow","0 28px 60px -20px rgba(0, 0, 0, 0.85), 0 8px 24px -8px rgba(0, 0, 0, 0.55)")},ij=l(function(e,r){return v(lt,a(pb,e,r),!1,"")}),Qm=ij,e5=48,fj={aQ:0,un:"default"},Ic=be("flex"),uj=be("overflow-x"),r5=be("overflow-y"),$j=x(function(e,r,n){return a(M,e,r.un+(" "+n.un))}),jr=$j("padding"),lj=l(function(e,r){return a(O,u([E(u([Ic(me(1)),r5(df),uj(df),a(jr,j(16),j(16))]))]),u([a(O,u([Kt(e),E(u([ea(fj)]))]),u([r]))]))}),vj=function(e){return{$:3,a:e}},sj={oe:0,un:"ellipsis"},Xv=x(function(e,r,n){return oe(xe(n.D-r.D),e)>-1?n:r.D>.5?F(n,{D:v(mr,0,1,r.D-e)}):F(n,{D:v(mr,0,1,r.D+e)})}),vr=be("flex-shrink"),Do=be("letter-spacing"),a5={fA:0,g3:0,un:"nowrap",dX:0},Kv=be("padding-left"),dj=be("padding-right"),bj=be("text-overflow"),Qv=be("text-transform"),Zq=0,Vc=a(uf,0,"em"),sr=be("font-size"),xa=function(e){var r=e.un;return a(M,"font-weight",r)},Sn=be("line-height"),gt={kV:u([sr(j(15)),xa(me(400)),Sn(lr(1.55))]),pu:u([sr(j(13)),xa(me(500)),Sn(lr(1.3)),Do(Vc(.04))]),qb:u([sr(j(46)),xa(me(300)),Sn(lr(1.05)),Do(Vc(-.02))]),q4:u([sr(j(16)),xa(me(650)),Sn(lr(1.3))]),q5:u([sr(j(30)),xa(me(550)),Sn(lr(1.15)),Do(Vc(-.01))]),i9:u([sr(j(14)),xa(me(550)),Sn(lr(1.35))]),ok:u([sr(j(20)),xa(me(650)),Sn(lr(1.25)),Do(Vc(-.005))])},e1={dS:0,un:"uppercase"},mf=be("border"),n5={lc:0,un:"currentColor"},Bc=hr("clip-rule"),pe=hr("d"),mj=function(e){var r=Hm(e),n=a(hn,"","");return v(lt,n,!0,r)},Kn=mj,_t=hr("fill"),pj=um,ao=pj("http://www.w3.org/2000/svg"),r1=ao("svg"),a1=hr("viewBox"),hj=x(function(e,r,n){return v(b7,e,sd(r),dd(n))}),gj=x(function(e,r,n){return v(lt,v(hj,e,r,n),!1,"")}),_j=a(gj,"http://www.w3.org/XML/1998/namespace","xml:space"),he=r1(u([a1("0 0 24 24"),_t("currentColor"),Kn(u([Ce(Je(100)),De(Je(100))])),_j("http://www.w3.org/2000/svg")])),Hc=hr("fill-rule"),ge=ao("path"),dr={oM:he(u([a(ge,u([pe("M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z")]),P)])),pc:he(u([a(ge,u([pe("M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z")]),P)])),pB:he(u([a(ge,u([Hc("evenodd"),Bc("evenodd"),pe("M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z")]),P)])),pC:he(u([a(ge,u([Hc("evenodd"),Bc("evenodd"),pe("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),P)])),pD:he(u([a(ge,u([Hc("evenodd"),Bc("evenodd"),pe("M5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071Z")]),P)])),pH:he(u([a(ge,u([pe("M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z")]),P)])),pI:he(u([a(ge,u([pe("M4.00005 16H20V5H4.00005V16ZM13.0001 18V20H17.0001V22H7.00005V20H11.0001V18H2.99205C2.86065 17.9992 2.7307 17.9725 2.60965 17.9214C2.48861 17.8702 2.37885 17.7957 2.28668 17.702C2.19452 17.6084 2.12175 17.4975 2.07256 17.3756C2.02337 17.2538 1.99873 17.1234 2.00005 16.992V4.008C2.00005 3.451 2.45505 3 2.99205 3H21.008C21.556 3 22 3.449 22 4.007V16.992C22 17.549 21.545 18 21.008 18H13.0001Z")]),P)])),pT:he(u([a(ge,u([pe("M11.7143 9.78571L17.5 4L19.4286 5.92857L13.6429 11.7143L19.4286 17.5L17.5 19.4286L11.7143 13.6429L5.92857 19.4286L4 17.5L9.78571 11.7143L4 5.92857L5.92857 4L11.7143 9.78571Z")]),P)])),p6:he(u([a(ge,u([pe("M4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6Z")]),P)])),p8:he(u([a(ge,u([pe("M9 2H15A2 2 0 0 1 17 4V20A2 2 0 0 1 15 22H9A2 2 0 0 1 7 20V4A2 2 0 0 1 9 2Z")]),P)])),qe:he(u([a(ge,u([pe("M11 3h2v7h3l-4 4-4-4h3z M4 17h16v3H4z")]),P)])),qf:he(u([a(ge,u([pe("M11 2h2v7h3l-4 4-4-4h3z M4 16h16v2H4z M7 19h10v2H7z")]),P)])),qi:he(u([a(ge,u([pe("M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z")]),P)])),qv:he(u([a(ge,u([pe("M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z")]),P)])),qw:he(u([a(ge,u([pe("M8.58564 8.85449L3.63589 13.8042L8.83021 18.9985L9.99985 18.9978V18.9966H11.1714L14.9496 15.2184L8.58564 8.85449ZM9.99985 7.44027L16.3638 13.8042L19.1922 10.9758L12.8283 4.61185L9.99985 7.44027ZM13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966Z")]),P)])),qL:he(u([a(ge,u([pe("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z")]),P)])),qU:he(u([a(ge,u([pe("M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z")]),P)])),qY:he(u([a(ge,u([pe("M20.0601 11.6104C20.0639 11.7454 20.0639 11.8804 20.0601 12.0154L21.4588 13.7629C21.5322 13.8547 21.583 13.9624 21.6071 14.0773C21.6312 14.1923 21.6279 14.3113 21.5976 14.4248C21.3679 15.2866 21.0249 16.1141 20.5776 16.8857C20.519 16.9867 20.4376 17.0726 20.34 17.1365C20.2423 17.2005 20.1311 17.2408 20.0151 17.2542L17.7914 17.5017C17.6989 17.5992 17.6051 17.6929 17.5101 17.7829L17.2476 20.0123C17.2341 20.1283 17.1937 20.2396 17.1295 20.3373C17.0654 20.435 16.9794 20.5163 16.8782 20.5748C16.1067 21.0217 15.2791 21.3641 14.4173 21.5929C14.3038 21.6232 14.1848 21.6265 14.0698 21.6024C13.9549 21.5783 13.8472 21.5275 13.7554 21.4542L12.0126 20.0629H11.6076L9.8601 21.4589C9.76835 21.5322 9.66065 21.583 9.54569 21.6071C9.43073 21.6312 9.31171 21.6279 9.19823 21.5976C8.33643 21.3679 7.5089 21.0249 6.73729 20.5776C6.63634 20.519 6.55046 20.4376 6.4865 20.34C6.42254 20.2423 6.38225 20.1311 6.36885 20.0151L6.12135 17.7876C6.02385 17.6945 5.9301 17.6007 5.8401 17.5064L3.61073 17.2504C3.49468 17.2369 3.38338 17.1965 3.28572 17.1324C3.18806 17.0682 3.10674 16.9822 3.04823 16.881C2.60136 16.1093 2.2587 15.2818 2.02916 14.4201C1.99897 14.3065 1.99589 14.1875 2.02015 14.0725C2.04441 13.9576 2.09535 13.8499 2.16885 13.7582L3.5601 12.0154V11.6104L2.16416 9.86292C2.09082 9.77116 2.04006 9.66347 2.01596 9.5485C1.99186 9.43354 1.9951 9.31452 2.02541 9.20104C2.25513 8.33924 2.59812 7.51172 3.04541 6.7401C3.10403 6.63915 3.18541 6.55328 3.28306 6.48931C3.38071 6.42535 3.49195 6.38507 3.60791 6.37167L5.83166 6.12417C5.92479 6.02667 6.01854 5.93292 6.11291 5.84292L6.3726 3.61354C6.3861 3.49749 6.42653 3.3862 6.49066 3.28854C6.55479 3.19088 6.64085 3.10955 6.74198 3.05104C7.51369 2.60418 8.3412 2.26151 9.20291 2.03198C9.31647 2.00179 9.43553 1.9987 9.55049 2.02296C9.66546 2.04723 9.77312 2.09816 9.86479 2.17167L11.6076 3.56292C11.7426 3.55917 11.8776 3.55917 12.0126 3.56292L13.7601 2.16417C13.8519 2.09082 13.9595 2.04006 14.0745 2.01596C14.1895 1.99186 14.3085 1.9951 14.422 2.02542C15.2839 2.25472 16.1115 2.59773 16.8829 3.04542C16.9839 3.10403 17.0697 3.18541 17.1337 3.28306C17.1977 3.38072 17.2379 3.49195 17.2513 3.60792L17.4988 5.83167C17.5963 5.92417 17.6901 6.01792 17.7801 6.11292L20.0095 6.37542C20.1255 6.38892 20.2368 6.42934 20.3345 6.49347C20.4321 6.5576 20.5135 6.64366 20.572 6.74479C21.0188 7.51651 21.3615 8.34402 21.591 9.20573C21.6212 9.31928 21.6243 9.43834 21.6001 9.55331C21.5758 9.66828 21.5249 9.77593 21.4513 9.8676L20.0601 11.6104ZM11.8101 8.06292C11.0684 8.06292 10.3434 8.28285 9.72671 8.6949C9.11003 9.10696 8.62938 9.69263 8.34555 10.3779C8.06172 11.0631 7.98746 11.8171 8.13216 12.5445C8.27685 13.2719 8.634 13.9401 9.15845 14.4646C9.6829 14.989 10.3511 15.3462 11.0785 15.4909C11.8059 15.6356 12.5599 15.5613 13.2452 15.2775C13.9304 14.9936 14.5161 14.513 14.9281 13.8963C15.3402 13.2796 15.5601 12.5546 15.5601 11.8129C15.5601 10.8184 15.165 9.86453 14.4618 9.16127C13.7585 8.458 12.8047 8.06292 11.8101 8.06292Z")]),P)])),qZ:he(u([a(ge,u([pe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),q6:he(u([a(ge,u([pe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),q7:he(u([a(ge,u([pe("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z")]),P)])),q9:he(u([a(ge,u([pe("M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z")]),P)])),rA:he(u([a(ge,u([pe("M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10H18C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7957 12 18 12H16C15.2043 12 14.4413 11.6839 13.8787 11.1213C13.3161 10.5587 13 9.79565 13 9V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H16ZM13.8787 14.8787C14.4413 14.3161 15.2043 14 16 14H18C18.7957 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2043 21 17V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V17C13 16.2043 13.3161 15.4413 13.8787 14.8787Z")]),P)])),rE:he(u([a(ge,u([pe("M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z")]),P)])),rP:he(u([a(ge,u([pe("M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z")]),P)])),r4:he(u([a(ge,u([pe("M12 22C17.523 22 22 17.523 22 12C22 11.537 21.306 11.46 21.067 11.857C20.5572 12.7013 19.862 13.4186 19.034 13.9545C18.206 14.4903 17.2669 14.8307 16.2878 14.9499C15.3088 15.0691 14.3154 14.9639 13.383 14.6423C12.4507 14.3207 11.6037 13.7911 10.9063 13.0937C10.2089 12.3963 9.67932 11.5493 9.35772 10.617C9.03613 9.68457 8.93093 8.69123 9.0501 7.71217C9.16926 6.73311 9.50967 5.794 10.0455 4.96599C10.5814 4.13797 11.2987 3.44275 12.143 2.933C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z")]),P)])),dG:he(u([a(ge,u([pe("M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z")]),P)])),sK:he(u([a(ge,u([pe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),sL:he(u([a(ge,u([pe("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),P)])),sT:he(u([a(ge,u([pe("M7 5V19L18 12L7 5Z")]),P)])),sU:he(u([a(ge,u([pe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),nv:he(u([a(ge,u([pe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),s4:he(u([a(ge,u([pe("M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z")]),P)])),s6:he(u([a(ge,u([pe("M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34001 8 3.76001 10.42 2.06001 13.93C1.74001 14.6 2.10001 15.4 2.81001 15.64C3.40001 15.84 4.04001 15.56 4.31001 15C5.61001 12.34 8.34001 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z")]),P)])),tb:he(u([a(ge,u([pe("M7.20679 2.29279C7.39426 2.48031 7.49957 2.73462 7.49957 2.99979C7.49957 3.26495 7.39426 3.51926 7.20679 3.70679L5.41379 5.49979H13.2498C14.832 5.49979 16.3788 5.96898 17.6943 6.84803C19.0099 7.72708 20.0353 8.97651 20.6408 10.4383C21.2463 11.9001 21.4048 13.5087 21.0961 15.0605C20.7874 16.6124 20.0255 18.0378 18.9066 19.1566C17.7878 20.2755 16.3624 21.0374 14.8105 21.3461C13.2587 21.6548 11.6501 21.4963 10.1883 20.8908C8.72651 20.2853 7.47708 19.2599 6.59803 17.9443C5.71898 16.6288 5.24979 15.082 5.24979 13.4998C5.24979 13.2346 5.35514 12.9802 5.54268 12.7927C5.73022 12.6051 5.98457 12.4998 6.24979 12.4998C6.515 12.4998 6.76936 12.6051 6.95689 12.7927C7.14443 12.9802 7.24979 13.2346 7.24979 13.4998C7.24979 14.6865 7.60168 15.8465 8.26097 16.8332C8.92026 17.8199 9.85733 18.5889 10.9537 19.0431C12.05 19.4972 13.2564 19.616 14.4203 19.3845C15.5842 19.153 16.6533 18.5815 17.4924 17.7424C18.3315 16.9033 18.903 15.8342 19.1345 14.6703C19.366 13.5064 19.2472 12.3 18.7931 11.2037C18.3389 10.1073 17.5699 9.17026 16.5832 8.51097C15.5965 7.85168 14.4365 7.49979 13.2498 7.49979H5.41379L7.20679 9.29279C7.38894 9.48139 7.48974 9.73399 7.48746 9.99619C7.48518 10.2584 7.38001 10.5092 7.1946 10.6946C7.0092 10.88 6.75838 10.9852 6.49619 10.9875C6.23399 10.9897 5.98139 10.8889 5.79279 10.7068L2.29279 7.20679C2.10532 7.01926 2 6.76495 2 6.49979C2 6.23462 2.10532 5.98031 2.29279 5.79279L5.79279 2.29279C5.98031 2.10532 6.23462 2 6.49979 2C6.76495 2 7.01926 2.10532 7.20679 2.29279Z")]),P)])),ti:he(u([a(ge,u([pe("M21 7V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H17L21 7ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z")]),P)])),tu:he(u([a(ge,u([pe("M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z")]),P)])),tz:he(u([a(ge,u([pe("M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z")]),P)])),tC:he(u([a(ge,u([pe("M8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z")]),P)])),tI:he(u([a(ge,u([Hc("evenodd"),Bc("evenodd"),pe("M8 3H16A5 5 0 0 1 21 8V16A5 5 0 0 1 16 21H8A5 5 0 0 1 3 16V8A5 5 0 0 1 8 3ZM9 6H15A3 3 0 0 1 18 9V15A3 3 0 0 1 15 18H9A3 3 0 0 1 6 15V9A3 3 0 0 1 9 6ZM9.5 12A2.5 2.5 0 1 0 14.5 12A2.5 2.5 0 1 0 9.5 12Z")]),P)])),tL:he(u([a(ge,u([pe("M6 6H18V18H6Z")]),P)])),tQ:he(u([a(ge,u([pe("M11.9989 19C12.2641 19 12.5185 19.1054 12.706 19.2929C12.8935 19.4804 12.9989 19.7348 12.9989 20V21C12.9989 21.2652 12.8935 21.5196 12.706 21.7071C12.5185 21.8946 12.2641 22 11.9989 22C11.7337 22 11.4793 21.8946 11.2918 21.7071C11.1042 21.5196 10.9989 21.2652 10.9989 21V20C10.9989 19.7348 11.1042 19.4804 11.2918 19.2929C11.4793 19.1054 11.7337 19 11.9989 19ZM18.3629 16.95L19.0699 17.657C19.252 17.8456 19.3528 18.0982 19.3506 18.3604C19.3483 18.6226 19.2431 18.8734 19.0577 19.0588C18.8723 19.2442 18.6215 19.3494 18.3593 19.3517C18.0971 19.354 17.8445 19.2532 17.6559 19.071L16.9489 18.364C16.7667 18.1754 16.6659 17.9228 16.6682 17.6606C16.6705 17.3984 16.7757 17.1476 16.9611 16.9622C17.1465 16.7768 17.3973 16.6716 17.6595 16.6693C17.9217 16.667 18.1743 16.7678 18.3629 16.95ZM5.63489 16.95C5.81485 16.7707 6.05633 16.6665 6.31028 16.6588C6.56423 16.651 6.81161 16.7402 7.00217 16.9082C7.19274 17.0763 7.3122 17.3106 7.33629 17.5635C7.36038 17.8164 7.2873 18.069 7.13189 18.27L7.04889 18.364L6.34189 19.071C6.16193 19.2503 5.92046 19.3545 5.66651 19.3622C5.41256 19.37 5.16518 19.2808 4.97461 19.1128C4.78405 18.9447 4.66459 18.7104 4.64049 18.4575C4.6164 18.2046 4.68948 17.952 4.84489 17.751L4.92789 17.657L5.63489 16.95ZM11.9989 6C13.5902 6 15.1163 6.63214 16.2415 7.75736C17.3668 8.88258 17.9989 10.4087 17.9989 12C17.9989 13.5913 17.3668 15.1174 16.2415 16.2426C15.1163 17.3679 13.5902 18 11.9989 18C10.4076 18 8.88147 17.3679 7.75625 16.2426C6.63103 15.1174 5.99889 13.5913 5.99889 12C5.99889 10.4087 6.63103 8.88258 7.75625 7.75736C8.88147 6.63214 10.4076 6 11.9989 6ZM3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889ZM20.9989 11C21.2641 11 21.5185 11.1054 21.706 11.2929C21.8935 11.4804 21.9989 11.7348 21.9989 12C21.9989 12.2652 21.8935 12.5196 21.706 12.7071C21.5185 12.8946 21.2641 13 20.9989 13H19.9989C19.7337 13 19.4793 12.8946 19.2918 12.7071C19.1042 12.5196 18.9989 12.2652 18.9989 12C18.9989 11.7348 19.1042 11.4804 19.2918 11.2929C19.4793 11.1054 19.7337 11 19.9989 11H20.9989ZM4.92789 4.929C5.10008 4.75682 5.32918 4.65339 5.57221 4.63811C5.81524 4.62283 6.05549 4.69675 6.24789 4.846L6.34189 4.929L7.04889 5.636C7.22824 5.81596 7.33237 6.05743 7.34012 6.31138C7.34787 6.56533 7.25868 6.81271 7.09064 7.00328C6.92261 7.19384 6.68834 7.31331 6.43542 7.3374C6.18249 7.36149 5.92988 7.28841 5.72889 7.133L5.63489 7.05L4.92789 6.343C4.74042 6.15547 4.63511 5.90116 4.63511 5.636C4.63511 5.37084 4.74042 5.11653 4.92789 4.929ZM19.0699 4.929C19.2574 5.11653 19.3627 5.37084 19.3627 5.636C19.3627 5.90116 19.2574 6.15547 19.0699 6.343L18.3629 7.05C18.2706 7.14551 18.1603 7.22169 18.0383 7.2741C17.9163 7.32651 17.7851 7.3541 17.6523 7.35525C17.5195 7.3564 17.3878 7.3311 17.2649 7.28082C17.142 7.23054 17.0304 7.15629 16.9365 7.0624C16.8426 6.9685 16.7684 6.85685 16.7181 6.73395C16.6678 6.61106 16.6425 6.47938 16.6436 6.3466C16.6448 6.21382 16.6724 6.0826 16.7248 5.9606C16.7772 5.83859 16.8534 5.72825 16.9489 5.636L17.6559 4.929C17.8434 4.74153 18.0977 4.63621 18.3629 4.63621C18.6281 4.63621 18.8824 4.74153 19.0699 4.929ZM11.9989 2C12.2641 2 12.5185 2.10536 12.706 2.29289C12.8935 2.48043 12.9989 2.73478 12.9989 3V4C12.9989 4.26522 12.8935 4.51957 12.706 4.70711C12.5185 4.89464 12.2641 5 11.9989 5C11.7337 5 11.4793 4.89464 11.2918 4.70711C11.1042 4.51957 10.9989 4.26522 10.9989 4V3C10.9989 2.73478 11.1042 2.48043 11.2918 2.29289C11.4793 2.10536 11.7337 2 11.9989 2Z")]),P)])),tY:he(u([a(ge,u([Hc("evenodd"),Bc("evenodd"),pe("M10.8293 13C10.9398 12.6872 11 12.3506 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15H16C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 12.3506 13.0602 12.6872 13.1707 13H10.8293ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z")]),P)])),t8:he(u([a(ge,u([Hc("evenodd"),Bc("evenodd"),pe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),t9:he(u([a(ge,u([pe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),uc:he(u([a(ge,u([pe("M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z")]),P)])),uj:he(u([a(ge,u([pe("M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z")]),P)])),uu:he(u([a(ge,u([pe("M4.47 21H19.53C21.07 21 22.03 19.33 21.26 18L13.73 4.98999C12.96 3.65999 11.04 3.65999 10.27 4.98999L2.74 18C1.97 19.33 2.93 21 4.47 21ZM12 14C11.45 14 11 13.55 11 13V11C11 10.45 11.45 9.99999 12 9.99999C12.55 9.99999 13 10.45 13 11V13C13 13.55 12.55 14 12 14ZM13 18H11V16H13V18Z")]),P)])),uO:he(u([a(ge,u([pe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)])),uS:he(u([a(ge,u([pe("M9.31445 17.5469L8.43555 18.4355L12 22L15.5645 18.4355L14.6855 17.5469L12 20.2324L9.31445 17.5469ZM14.6855 6.45312L15.5645 5.56445L12 2L8.43555 5.56445L9.31445 6.45312L12 3.76758L14.6855 6.45312ZM6.45312 14.6855L3.76758 12L6.45312 9.31445L5.56445 8.43555L2 12L5.56445 15.5645L6.45312 14.6855ZM22 12L18.4355 8.43555L17.5469 9.31445L20.2324 12L17.5469 14.6855L18.4355 15.5645L22 12ZM8.25 15.75H15.75V8.25H8.25V15.75ZM9.5 9.5H14.5V14.5H9.5V9.5Z")]),P)]))},pf={lc:0,un:"transparent"},yj=l(function(e,r){return a(bt,u([Kt(r),mt(e.u($3(e.by))),a(Ue,"aria-label","Close"),E(u([Ce(j(32)),De(j(32)),an(j(5)),$r(Je(50)),mf(le),Te(pf),ye(n5),ea(tn),_e,Ge(je),Br(je),nn(fr),rn(lr(.9)),a(M,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([rn(lr(1)),Te(C(Jv,255,255,255,.18))]))]))]),u([dr.pT]))}),Cj=ao("circle"),Pj=hr("cx"),Sj=hr("cy"),kj=hr("r"),xj=a(r1,u([a1("0 0 24 24"),_t("currentColor"),Kn(u([Ce(j(18)),De(j(18))]))]),a(G,function(e){var r=e.a,n=e.b;return a(Cj,u([Pj(Xe(r)),Sj(Xe(n)),kj("2")]),P)},u([h(9,5),h(15,5),h(9,12),h(15,12),h(9,19),h(15,19)]))),n1=be("white-space"),wj=x(function(e,r,n){var t=a(K,function(o){return v(Xv,.45,o.tU,r.oi(o))},e);return a(O,u([E(u([_e,Ge(je),vr(me(0)),De(j(e5)),Kv(j(16)),dj(j(8)),a(M,"gap","12px"),ye(t)])),a(ra,"dblclick",re(r.u(vj(r.by))))]),u([xj,a(O,u([E(u([Ic(me(1)),n1(a5),Fc(bf),bj(sj),ye(t),nr(gt.q4),Do(j(.6)),Qv(e1)]))]),u([ce(r.ok)])),a(yj,r,n)]))}),no=x(function(e,r,n){if(a(Ar,n.by,n.bz)){var t=a(K,a(Ie,n.oi,pr(.18)),e),o=a(K,a(Ie,n.oi,pr(.35)),e),c=v(oj,r,n,n.bz),i=(function(){var p=(function(){var y=n.br.e9;if(y.$){var _=y.a;return _}else{var _=y.a;return _}})();return"calc(100vh - "+(N(p+f$)+"px)")})(),f=n.bz,$=f,s=a(Zm,$.re,n.by)+"-body",d=a(Zm,$.re,n.by),b=$.re(n.by),g="draggable-panel-"+(b+"-titlebar");return a(O,u([E(u([Te(t),aj(16),$r(a(Pn.pJ,e5/2,1)),v(eo,j(1),ro,o),Zv.qm,Qe(pt),nr(rj(n.br)),a(M,"width","-webkit-fit-content"),a(M,"width","fit-content"),a(M,"max-width","calc(100vw - "+(N(2*f$)+"px)")),a(M,"max-height",i),_e,Fr(sa),Fc(bf),Zn(me(st.nl+a(Ye,999,n.a3-1-n.dL))),ht(df),a(M,"will-change","transform"),a(M,"user-select","none"),a(M,"-webkit-user-select","none"),ea(nj)])),Kt(g),a(Qm,"transform",a(tj,n.br,c))]),u([v(wj,e,n,d),a(lj,s,n.kV)]))}else return ce("")}),jj=Le(function(e,r,n,t,o){return n.i1?ce(""):v(no,e,r,{br:B3(t.k4),kV:o.kV,by:o.by,bz:n.hG,a3:t.a3,dL:t.dL,oi:o.oi,ok:o.ok,u:n.u})}),Lj=x(function(e,r,n){if(We(n.cf))return ce("");var t=H0(n.hG),o=Pr(t),c=dn(a(Bn,l(function(f,$){return h($.by,f)}),n.cf)),i=dn(a(G,function(f){return h(f.by,f)},n.cf));return a(O,u([Kt(Xx(n.fJ))]),u([a(ej,e,n),a(O,P,a(Bn,l(function(f,$){var s=a(Ke,$,i);if(s.$)return ce("");var d=s.a;return V(jj,e,r,n,{k4:a(te,0,a(Ke,$,c)),a3:o,dL:f},d)}),t)),Bm(n.hG)]))}),Tj=zr(function(e,r,n,t,o,c){var i=a(Ke,c,n.cI);if(i.$)return z;var f=i.a,$=yn(r.rb),s=Yi({gJ:f.gJ,b2:f.b2,aH:r.aH,rb:D(r.rb),by:f.by,rq:a(hv,o,n.rq),mR:f.mR,m0:dc(r.rb),sB:Ou(f),aM:f.aM,cq:t,oE:f.oE,oK:Wu(r.rb)}),d=v(H3,"play:view",v(e.a6.ur,s,n.Q,$),f.bz),b=C(e.a6.cf,s,n.Q,$,f.bz),g=a(G,function(L){return{kV:a(of,Co(c),L.kV),lZ:a(of,Co(c),L.lZ),by:L.by,n_:L.n_,oi:L.oi,ok:L.ok}},b),p=Su(v(Lj,$,s,{i1:s.oK,fJ:c,hG:f.hG,cf:g,u:H2(c)})),y=ie(r.aH,D(c)),_=a(cr,function(L){return L.bp},yn(r.rb)),k=y?"4px solid "+ke(_):"none";return D(h(c,a(pn,u([om(c),a(em,"data-play-pane",c),a(X,"outline",k),a(X,"border-radius","inherit")]),u([a(im,Co(c),d),p]))))}),t5=function(e){return{$:1,a:e}},zj=l(function(e,r){return a(l$,e,t5(r))}),Ao=vt("className"),x$=nr(u([rn(lr(.4)),a(M,"pointer-events","none")])),Da=function(e){switch(e){case 0:return a(Ie,function(r){return r.dG},function(r){return r.pb});case 1:return a(Ie,function(r){return r.dG},function(r){return r.rI});case 2:return a(Ie,function(r){return r.dG},function(r){return r.q$});case 3:return a(Ie,function(r){return r.dG},function(r){return r.uN});case 4:return a(Ie,function(r){return r.dG},function(r){return r.s5});case 5:return function(r){return r.bp};case 6:return function(r){return r.bp};default:return a(Ie,function(r){return r.dG},function(r){return r.pW})}},Mj=be("padding-bottom"),o5=320,on={r3:'ui-monospace, "SF Mono", Menlo, Monaco, "Cascadia Mono", "Roboto Mono", Consolas, monospace',sn:'"Nunito", system-ui, sans-serif',ub:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},w$=be("flex-grow"),c5=function(e){return a(O,u([E(u([De(j(1)),w$(me(1)),a(M,"background-color",ke(a(cr,function(r){return r.ix},e)))]))]),P)},t1=be("margin-bottom"),i5=l(function(e,r){return a(O,u([E(u([_e,Ge(je),a(M,"gap","14px"),t1(j(18))]))]),u([c5(e),a(O,u([E(u([a(M,"font-family",on.ub),nr(gt.q4),Do(Vc(.18)),Qv(e1),ye(a(K,function(n){return n.t_},e)),vr(me(0)),a(M,"white-space","nowrap")]))]),u([ce(r)])),c5(e)]))}),Dj=l(function(e,r){return{$:4,a:e,b:r}}),Aj=l(function(e,r){return{$:3,a:e,b:r}}),Fj=l(function(e,r){return{$:0,a:e,b:r}}),Ij=l(function(e,r){return{$:2,a:e,b:r}}),Vj=l(function(e,r){return{$:5,a:e,b:r}}),Bj=l(function(e,r){return{$:1,a:e,b:r}}),Rc=Cn("input"),o1=vt("max"),c1=vt("min"),Hj=function(e){return h(e,!0)},hf=l(function(e,r){return a(Wv,e,t5(r))}),i1=a(Gi,u(["target","value"]),Se),gf=function(e){return a(hf,"input",a(Ne,Hj,a(Ne,e,i1)))},f1=function(e){return a(vt,"step",e)},Fo=vt("type"),Ec=vt("value"),f5=function(e){return a(Rc,u([Fo("range"),c1(e.jo),o1(e.jm),f1(e.ke),Ec(e.kA),sf(e.qa),gf(e.jG),Ao("ui-slider"),E(u([Ce(Je(100)),De(j(32)),a(M,"-webkit-appearance","none"),a(M,"appearance","none"),Te(pf),a(M,"cursor","grab"),nn(fr),a(M,"touch-action","none"),a(M,"--slider-fill",N(e.iU)+"%"),e.qa?x$:nr(P)]))]),P)},Rj=function(e){var r=oe(e.mS,e.mX)>0?100*(e.un-e.mX)/(e.mS-e.mX):0;return f5({qa:e.qa,iU:r,jm:N(e.mS),jo:N(e.mX),jG:function(n){return e.hz(a(te,e.un,Yt(n)))},ke:N(e.tJ),kA:N(e.un)})},u1=be("space-between"),gr=Cn("span"),u5=l(function(e,r){return a(O,u([E(u([_e,Ge(je),Br(u1),a(M,"gap","12px"),a(jr,j(10),le)]))]),u([a(gr,u([E(u([ye(a(K,function(n){return n.ks},e)),nr(gt.i9),a(M,"font-family",on.ub)]))]),u([ce(r.i9)])),r.ec]))}),Ej=function(e){var r=e.mS-e.mX,n=r>0?100*(e.un-e.mX)/r:0;return f5({qa:e.qa,iU:n,jm:Xe(e.mS),jo:Xe(e.mX),jG:function(t){return e.hz(a(te,e.un,Mi(t)))},ke:"1",kA:Xe(e.un)})},j$=function(e){return a(M,"border-color",e.un)},Uj=(function(){var e="#6D6553",r="#A39980";return"linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 0 0 / 8px 8px,"+(" linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 4px 4px / 8px 8px,"+(" "+r))))))))))})(),$5=be("display"),_f=Nv("focus"),$1=function(e){return nr(u([a(M,"outline","3px solid "+ke(a(pr,.25,e))),a(M,"outline-offset","0")]))},qj={qb:0,un:"inline-block"},l1="ui-color-swatch-popover",yf={is:0,gF:0,un:"border-box"},Cf=be("box-sizing"),Yj=290,Nj=function(e){var r=Yt(e);if(r.$)return 0;var n=r.a;return v(mr,0,1,n)},v1=l(function(e,r){var n=(function(){var c=r.ib;if(c.$)return P;var i=c.a;return u([a(gr,u([E(u([a(M,"font-family",on.r3),sr(j(13)),xa(me(600)),Ce(j(40)),vr(me(0)),a(M,"text-align","right"),ye(a(K,function(f){return f.ks},e))]))]),u([ce(i)]))])})(),t=a(Rc,u([Fo("range"),c1("0"),o1("1"),f1("0.01"),Ec(N(r.un)),gf(function(c){return r.hz(Nj(c))}),Ao(r.hM),a(Ue,"aria-label",r.i9),E(u([Ic(me(1)),De(j(26)),a(M,"-webkit-appearance","none"),a(M,"appearance","none"),a(M,"--track",r.g7),a(M,"background-color","transparent"),nn(fr),a(M,"cursor","grab"),a(M,"touch-action","none"),an(le)]))]),P),o=a(gr,u([E(u([a(M,"font-family",on.r3),sr(j(14)),xa(me(700)),Ce(j(18)),vr(me(0)),ye(a(K,function(c){return c.ks},e))]))]),u([ce(r.i9)]));return a(O,u([E(u([_e,Ge(je),a(M,"gap","10px")]))]),Z(u([o,t]),n))}),l5="linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 0 0 / 14px 14px, linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 7px 7px / 14px 14px, #a39980",Gj=l(function(e,r){var n=r.un,t="linear-gradient(to right, transparent, "+(ke(a(pr,1,n))+("), "+l5));return a(v1,e,{g7:t,i9:"\u03B1",hz:function(o){return r.hz(F(n,{oS:o}))},hM:"ui-hsla-alpha",ib:D(Xe(Vr(n.oS*100))+"%"),un:n.oS})}),Oj=l(function(e,r){var n=xe(e-r);return a(Ye,n,1-n)}),Ir=x(function(e,r,n){return{oS:1,aS:e,D:n,a0:r}}),v5=u([v(Ir,6/360,.9,.62),v(Ir,33/360,1,.55),v(Ir,46/360,1,.55),v(Ir,80/360,.7,.52),v(Ir,150/360,.65,.46),v(Ir,172/360,.75,.45),v(Ir,185/360,1,.46),v(Ir,217/360,.88,.58),v(Ir,239/360,.84,.67),v(Ir,270/360,.8,.65),v(Ir,330/360,1,.69),v(Ir,350/360,.9,.63)]),Pf=d8,Wj=function(e){return a(te,0,a(de,vn,kr(a(Pf,Tu,a(Bn,l(function(r,n){return h(r,a(Oj,n.aS,e.aS))}),v5)))))},Jj=function(e){return e?"0 0 0 3px rgba(0, 0, 0, 0.55), 0 0 0 6px #fff, 0 4px 10px -3px rgba(0, 0, 0, 0.5)":"inset 0 0 0 1px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.5)"},s5=32,Zj=x(function(e,r,n){return a(bt,u([mt(e.hz(a(pr,e.un.oS,n))),a(Ue,"aria-label","preset colour"),E(u([Ce(j(s5)),De(j(s5)),vr(me(0)),$r(Je(50)),mf(le),an(le),ea(tn),Te(tr(n)),a(M,"box-shadow",Jj(r))]))]),P)}),Xj=function(e){var r=e.un.a0<.08?-1:Wj(e.un);return a(O,u([E(u([a(M,"display","grid"),a(M,"grid-template-columns","repeat(6, 1fr)"),a(M,"gap","10px"),a(M,"justify-items","center")]))]),a(Bn,l(function(n,t){return v(Zj,e,ie(n,r),t)}),v5))},Kj=l(function(e,r){return a(T,function(n){var t=ab(n);if(t.$)return On("invalid hex");var o=t.a;return re(r(a(pr,e.oS,o)))},i1)}),Qj=fm,d5=Qj,s1=x(function(e,r,n){var t=n<0?n+1:n>1?n-1:n;return oe(t,1/6)<0?e+(r-e)*6*t:oe(t,1/2)<0?r:oe(t,2/3)<0?e+(r-e)*(2/3-t)*6:e}),eL=x(function(e,r,n){if(r<1e-10)return{ir:n,i$:n,jY:n};var t=n<.5?n*(1+r):n+r-n*r,o=2*n-t;return{ir:v(s1,o,t,e-1/3),i$:v(s1,o,t,e),jY:v(s1,o,t,e+1/3)}}),b5=function(e){switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";default:return"f"}},d1=function(e){var r=v(mr,0,255,e),n=r/16|0,t=a(Xr,16,r);return Z(tc(b5(n)),tc(b5(t)))},rL=function(e){var r=v(eL,e.aS,e.a0,e.D);return"#"+(d1(Vr(r.jY*255))+(d1(Vr(r.i$*255))+d1(Vr(r.ir*255))))},aL=l(function(e,r){var n=q2(rL(r.un));return v(d5,"div",u([E(u([_e,Ge(je),a(M,"gap","12px")]))]),u([h(n,a(Rc,u([Fo("text"),a(Ue,"value",n),a(Ue,"pattern","#?[0-9A-Fa-f]{6}"),a(Ue,"spellcheck","false"),a(Ue,"aria-label","Hex colour"),Ao("ui-hex-input"),a(ra,"change",a(Kj,r.un,r.hz)),E(u([Ce(Je(50)),vr(me(0)),Cf(yf),a(M,"font-family",on.r3),sr(j(15)),xa(me(600)),Do(Vc(.06)),Qv(e1),ye(a(K,function(t){return t.t_},e)),Te(a(K,function(t){return t.tU},e)),v(eo,j(1),ro,a(K,function(t){return t.ix},e)),$r(Pn.rO),a(jr,j(9),j(12)),nn(fr)]))]),P)),h("warn",a(O,u([Ao("ui-hex-warn")]),u([ce("invalid hex")])))]))}),b1=x(function(e,r,n){return"hsl("+(N(e*360)+(", "+(N(r*100)+("%, "+(N(n*100)+"%)")))))}),nL=l(function(e,r){var n=r.un,t="linear-gradient(to right, #000, "+(v(b1,n.aS,n.a0,.5)+", #fff)");return a(v1,e,{g7:t,i9:"L",hz:function(o){return r.hz(F(n,{D:o}))},hM:"ui-hsla-rail",ib:z,un:n.D})}),m5=120,tL=function(e){return a(O,u([E(u([_e,Br(je)]))]),u([a(O,u([E(u([Qe(Mo),Ce(j(m5)),De(j(m5)),$r(Je(50)),Fc(bf),a(M,"background",l5),a(M,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 12px 26px -10px rgba(0, 0, 0, 0.6)")]))]),u([a(O,u([E(u([Qe(Ma),Sa(le),da(le),dt(le),Xn(le),a(M,"background",ke(e))]))]),P)]))]))},oL=l(function(e,r){var n=r.un,t="linear-gradient(to right, "+(v(b1,n.aS,0,n.D)+(", "+(v(b1,n.aS,1,n.D)+")")));return a(v1,e,{g7:t,i9:"S",hz:function(o){return r.hz(F(n,{a0:o}))},hM:"ui-hsla-rail",ib:z,un:n.a0})}),cL=l(function(e,r){return a(O,u([E(u([_e,Fr(sa),a(M,"gap","18px"),Ce(j(Yj)),Cf(yf),an(j(18)),Te(a(K,function(n){return n.kh},e)),v(eo,j(1),ro,a(K,function(n){return n.ix},e)),$r(Pn.uE),ye(a(K,function(n){return n.t_},e)),a(M,"font-family",on.ub)]))]),u([tL(r.un),a(aL,e,r),Xj(r),a(oL,e,r),a(nL,e,r),a(Gj,e,r)]))}),iL=function(e){return F(e,{oS:1})},fL=l(function(e,r){var n=ke(r.un),t=ke(iL(r.un));return a(O,u([E(u([$5(qj)]))]),u([a(bt,u([a(Ue,"popovertarget",r.by),a(Ue,"aria-label","Pick colour"),a(Ue,"aria-haspopup","dialog"),a(Qm,"background","linear-gradient(135deg, transparent 50%, "+(t+(" 50%), "+("linear-gradient(135deg, "+(n+(", "+(n+("), "+Uj)))))))),E(u([Ce(j(32)),De(j(32)),an(le),v(eo,j(1),ro,a(K,function(o){return o.ix},e)),$r(Pn.rO),ea(tn),Fc(bf),a(M,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.4)"),a(M,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([j$(a(K,function(o){return o.bp},e))])),_f(u([$1(a(cr,function(o){return o.bp},e))]))]))]),P),a(O,u([Kt(r.by),a(Ue,"popover","auto"),a(Ue,"data-popover",""),Ao(l1)]),u([a(cL,e,{hz:r.hz,un:r.un})]))]))}),p5=be("baseline"),L$=l(function(e,r){return a(O,u([E(u([a(jr,j(10),le)]))]),u([a(O,u([E(u([_e,Ge(p5),Br(u1),a(M,"gap","12px"),t1(j(8))]))]),u([a(gr,u([E(u([ye(a(K,function(n){return n.ks},e)),nr(gt.i9),a(M,"font-family",on.ub)]))]),u([ce(r.i9)])),(function(){var n=r.un;if(n.$)return ce("");var t=n.a;return a(gr,u([E(u([ye(a(K,function(o){return o.bp},e)),nr(gt.i9),xa(me(600)),a(M,"font-family",on.r3),a(M,"font-feature-settings",'"tnum"')]))]),u([ce(t)]))})()])),r.ec]))}),h5=vt("placeholder"),Xq=ne,uL=l(function(e,r){return{$:3,a:e,b:r}}),m1=function(e){return uL(e)},Uc={rD:j(16),rO:j(12),ty:j(8),uE:j(24),uF:j(4),uG:j(32),uH:j(2),uI:j(48)},$L=l(function(e,r){return a(Rc,u([Fo("text"),Ec(r.un),h5(r.jT),gf(r.hz),E(u([Ce(Je(100)),a(jr,j(10),Uc.rO),Te(a(K,function(n){return n.kh},e)),ye(a(K,function(n){return n.t_},e)),v(eo,j(1),ro,a(K,function(n){return n.ix},e)),$r(Pn.rO),a(M,"font-family",on.r3),nr(gt.kV),nn(fr),a(M,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),_f(u([j$(a(K,function(n){return n.bp},e)),$1(a(cr,function(n){return n.bp},e))])),a(m1,"placeholder",u([ye(a(K,function(n){return n.kq},e))]))]))]),P)}),T$=Km("padding"),lL=Cn("option"),vL=Nm("selected"),sL=l(function(e,r){return a(lL,u([Ec(r),vL(ie(r,e))]),u([ce(r)]))}),dL=Cn("select"),bL=l(function(e,r){return a(dL,u([a(ra,"change",a(Ne,r.sv,i1)),E(u([Ce(Je(100)),a(M,"appearance","none"),a(M,"-webkit-appearance","none"),Te(a(K,function(n){return n.kh},e)),ye(a(K,function(n){return n.t_},e)),v(eo,j(1),ro,a(K,function(n){return n.ix},e)),$r(Pn.rO),C(T$,j(10),j(34),j(10),Uc.rO),a(M,"font-family",on.ub),nr(gt.kV),xa(me(500)),ea(tn),a(M,"background-image",`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D4A244' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M3 5l3 3 3-3'/></svg>")`),a(M,"background-repeat","no-repeat"),a(M,"background-position","right 12px center"),nn(fr),a(M,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), background-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([j$(a(K,function(n){return n.ih},e)),Te(a(K,function(n){return n.ki},e))])),_f(u([j$(a(K,function(n){return n.bp},e)),a(M,"box-shadow","0 0 0 3px "+ke(a(pr,.25,a(cr,function(n){return n.bp},e))))]))]))]),a(G,sL(r.tq),r.sD))}),mL=m1("after"),pL=J(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),Sf=J(function(e,r,n,t){return C(pL,e,r,n,t)}),z$={cB:{o6:200,qF:120,tx:320},gZ:{qo:C(Sf,.33,1,.68,1),i0:C(Sf,.45,.05,.25,1),rh:C(Sf,.65,0,.35,1),tB:C(Sf,.2,.9,.25,1),tD:C(Sf,.34,1.56,.64,1)}},M$=function(e){return P$(u([e]))},p1=function(e){var r=e.un;return{ku:0,un:a(Mc,"translateX",u([r]))}},g5=l(function(e,r){var n=r.mh?a(K,function(i){return i.bp},e):a(K,function(i){return i.ix},e),t=r.mh?20:0,o=r.mh?a(M,"box-shadow","0 0 14px "+ke(a(pr,.4,a(cr,function(i){return i.bp},e)))):Xm(fr),c=r.mh?a(K,function(i){return i.t_},e):a(K,function(i){return i.kq},e);return a(bt,u([E(u([Qe(Mo),Ce(j(46)),De(j(26)),Te(n),$r(Pn.sO),mf(le),ea(tn),nn(fr),S$(u([v(Gv,220,0,z$.gZ.i0)])),vr(me(0)),mL(u([a(M,"content",'""'),Qe(Ma),Sa(j(2)),da(j(2)),Ce(j(22)),De(j(22)),Te(c),$r(Je(50)),M$(p1(j(t))),o,S$(u([v(Gm,220,0,z$.gZ.tD),v(Gv,220,0,z$.gZ.i0),v(Ym,220,0,z$.gZ.i0)]))])),r.qa?x$:nr(P)])),mt(r.ng),sf(r.qa),a(Ue,"aria-pressed",r.mh?"true":"false"),a(Ue,"aria-label",r.i9)]),P)}),hL=l(function(e,r){var n=r.a,t=r.b;switch(t.$){case 0:var o=t.a,i=o.a,f=o.b,$=t.b;return a(L$,e,{ec:Rj({qa:!1,mS:f,mX:i,hz:Fj(n),tJ:.01*(f-i),un:$}),i9:n,un:D(a(pc,2,$))});case 2:var c=t.a,i=c.a,f=c.b,$=t.b;return a(L$,e,{ec:Ej({qa:!1,mS:f,mX:i,hz:Ij(n),un:$}),i9:n,un:D(Xe($))});case 4:var $=t.a;return a(u5,e,{ec:a(g5,e,{qa:!1,mh:$,i9:n,ng:a(Dj,n,!$)}),i9:n});case 1:var $=t.a;return a(L$,e,{ec:a($L,e,{hz:Bj(n),jT:"",un:$}),i9:n,un:z});case 3:var $=t.a;return a(u5,e,{ec:a(fL,e,{by:"play-config-color-"+n,hz:Aj(n),un:$}),i9:n});default:var s=t.a;return a(L$,e,{ec:a(bL,e,{sv:Vj(n),sD:Hu(s),tq:yo(s)}),i9:n,un:z})}}),gL=l(function(e,r){return a(O,u([E(u([a(jr,le,j(20))]))]),u([a(i5,e,r.r8),a(O,P,a(G,hL(e),r.a8))]))}),Kq=1,Qq=1,_L=J(function(e,r,n,t){return{pf:r,eD:n,j2:t,ia:e}}),yL=V(Sc,_L,a(S,"top",q),a(S,"bottom",q),a(S,"left",q),a(S,"right",q)),_5=a(Gi,u(["currentTarget","boundingClientRect"]),yL),CL=function(e){return a(ra,"click",a(Ne,e,_5))},PL=l(function(e,r){var n=(function(){return r?h(40,Uc.rD):h(32,Uc.rO)})(),t=n.a,o=n.b;return u([De(j(t)),a(jr,le,o),$r(Pn.sO),mf(le),ea(tn),nn(fr),a(M,"font-family",on.ub),nr(gt.i9),_e,Ge(je),Br(je),a(M,"gap","6px"),a(M,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),_f(u([$1(a(cr,function(c){return c.bp},e))]))])}),y5=function(e){return a(Mr,"",e)},h1=function(e){return a(M,"box-shadow",y5(u(["inset ",N(e*1.5),"px ",N(e*1.5),"px ",N(e*3),"px ",ke(a(pr,.6,$o)),", inset 0 0 0 1px ",ke(a(pr,.35,$o))])))},C5=l(function(e,r){return V($f,le,le,le,j(e),tr(r))}),SL=x(function(e,r,n){var t=l(function(i,f){return n?Z(i,f):i});switch(r){case 0:var o=u([Te(a(K,function(i){return i.bp},e)),ye(a(K,function(i){return v(Xv,.6,i.bp,i.t_)},e)),a(C5,1,a(cr,function(i){return i.ih},e))]),c=u([Te(a(K,function(i){return i.ih},e)),h1(1.5)]);return Z(a(t,o,c),u([Jn(u([Te(a(K,function(i){return i.ii},e))])),vf(c)]));case 1:var o=u([Te(a(K,function(i){return i.kh},e)),ye(a(K,function(i){return i.t_},e)),a(C5,1,a(cr,function(i){return i.ix},e))]),c=u([Te(a(K,function(i){return i.kk},e)),h1(1.5)]);return Z(a(t,o,c),u([Jn(u([Te(a(K,function(i){return i.ki},e))])),vf(c)]));default:var o=u([Te(pf),ye(a(K,function(i){return i.ks},e))]),c=u([Te(a(K,function(i){return i.kk},e)),ye(a(K,function(i){return i.t_},e)),h1(1.5)]);return Z(a(t,o,c),u([Jn(u([Te(a(K,function(i){return i.kh},e)),ye(a(K,function(i){return i.t_},e))])),vf(c)]))}}),P5=x(function(e,r,n){var t=(function(){var o=r.Z;return o?18:16})();return a(bt,a(A,E(Z(a(PL,e,r.Z),Z(v(SL,e,r.uo,r.rt),r.qa?u([x$]):P))),a(A,sf(r.qa),n)),(function(){var o=r.lZ;if(o.$)return u([ce(r.i9)]);var c=o.a;return u([a(gr,u([E(u([_e,Ge(je),Br(je),Ce(j(t)),De(j(t)),vr(me(0))]))]),u([c])),ce(r.i9)])})())}),kL=l(function(e,r){return v(P5,e,{qa:!1,lZ:z,rt:!1,i9:r.i9,Z:1,uo:1},u([CL(r.fX)]))}),xL=function(e){return a(O,u([E(u([C(T$,j(8),j(20),j(36),j(20)),_e,Br(je)]))]),u([a(kL,e.e,{i9:"Reset Page's Configurations",fX:e.gQ.ne})]))},S5=l(function(e,r){return v(P5,e,{qa:r.qa,lZ:r.lZ,rt:r.rt,i9:r.i9,Z:r.Z,uo:r.uo},u([mt(r.fX)]))}),wL=l(function(e,r){return a(S5,e,{qa:!1,lZ:z,rt:!1,i9:r.i9,fX:r.fX,Z:1,uo:1})}),k5={dq:0,un:"bold"},jL=be("margin"),LL=be("margin-top"),x5=be("max-width"),w5=function(e){return v(b$,"textAlign","text-align",e(m$))},TL=(function(){var e=v(Ir,.11,.55,.2),r=v(Ir,.13,.8,.62),n=v(Ir,.13,.9,.9),t="play-reset-interface-help",o=function($){return a(O,u([E(u([a(jr,j(2),le)]))]),u([ce("\u2022 "+$)]))},c=v(Ir,.13,1,.58),i=v(Ir,.13,.95,.52),f=v(Ir,.12,.85,.16);return a(gr,u([E(u([_e,Ge(je)]))]),u([a(bt,u([Fo("button"),a(Ue,"popovertarget",t),a(Ue,"aria-label","What does resetting Play's interface clear?"),E(u([Ce(j(20)),De(j(20)),an(le),a(M,"border","none"),$r(Je(50)),ea(tn),xa(k5),sr(j(13)),Sn(j(20)),w5(je),a(M,"background-color",ke(i)),a(M,"color",ke(f)),a(M,"transition","background-color 160ms"),Jn(u([a(M,"background-color",ke(c))])),_f(u([a(M,"outline","2px solid "+ke(c)),a(M,"outline-offset","2px")]))]))]),u([ce("?")])),a(O,u([Kt(t),a(Ue,"popover","auto"),a(Ue,"data-popover",""),E(u([Qe(pt),jL(le),a(M,"pointer-events","auto"),x5(j(250)),a(jr,j(12),j(14)),$r(j(10)),sr(j(12.5)),Sn(lr(1.5)),a(M,"background-color",ke(n)),a(M,"color",ke(e)),a(M,"border","1px solid "+ke(r)),a(M,"box-shadow","0 6px 20px rgba(0, 0, 0, 0.28)")]))]),u([a(O,u([E(u([xa(k5),t1(j(8))]))]),u([ce("Resetting Play's interface clears, for this browser:")])),o("Panel positions & sizes"),o("Light / dark theme"),o("Play / author mode"),o("Device-preview frame"),o("Tape \u201Crecord from start\u201D preference"),a(O,u([E(u([LL(j(8)),rn(lr(.85))]))]),u([ce("Your configuration values (in the page URL) and any saved content aren\u2019t affected.")]))]))]))})(),zL=function(e){return a(O,u([E(u([C(T$,j(16),j(20),j(4),j(20)),_e,Ge(je),Br(je),a(M,"gap","8px")]))]),u([a(wL,e.e,{i9:"Reset Play's Interface",fX:e.jD}),TL]))},ML=function(e){var r=We(e.pI.b2)?ce(""):xL(e);return a(O,u([E(u([Ce(j(o5))]))]),u([zL(e),r,a(of,e.fY,a(O,u([E(u([_e,Fr(sa),a(M,"gap","18px"),Mj(j(16))]))]),a(G,gL(e.e),e.pI.b2)))]))},DL=function(e){if(!e.b0.fF||e.oK)return ce("");var r=v(no,e.e,e.pI,{br:Xt(0),kV:ML(e),by:0,bz:e.f,a3:e.az.a3,dL:e.az.dM(0),oi:Da(0),ok:"Configurations",u:e.aX});return $t(e.tY)?a(O,u([E(u([x$]))]),u([r])):r},g1=function(e){return{$:1,a:e}},eY=0,rY=0,AL=function(e){return e?dr.p6:dr.p8},FL=function(e){return e?"Landscape":"Portrait"},aY=1,nY=3,tY=2,IL={$:2},VL=l(function(e,r){return{$:0,a:e,b:r}}),BL={$:1},HL={$:3},RL=function(e){return a(ra,"mousedown",re(e))},EL=function(e){return a(ra,"mouseleave",re(e))},yt=l(function(e,r){return u([a(ra,"mouseenter",a(Ne,function(n){return e(a(VL,r,n))},_5)),EL(e(BL)),RL(e(IL)),a(ra,"mousemove",re(e(HL)))])}),D$=l(function(e,r){var n=Pr(r.ry),t=function(c){return n<=1?0:c?ie(c,n-1)?3:2:1},o=l(function(c,i){var f=r.rw(i);return a(Jm,e,{ip:"radio",iq:h("aria-checked",Rm(f)),qa:r.qa,lZ:r.lZ(i),mh:f,i9:r.rx(i),fX:r.sv(i),jx:r.tr(i),dF:r.dF,sY:t(c),dg:a(yt,r.sx,{ed:r.t5,i9:r.rx(i),n_:r.n_(i)})})});return v(qm,{qa:r.qa,dF:r.dF},u([a(Ue,"role","radiogroup"),a(Ue,"aria-label",r.i9)]),a(Bn,o,r.ry))}),UL=J(function(e,r,n,t){return a(O,u([E(u([_e,Br(je),a(jr,j(6),j(0))]))]),u([a(D$,e,{qa:!1,lZ:AL,rw:Ga(t),rx:FL,ry:u([0,1]),i9:"Orientation",sv:a(er,r.u,g1),sx:n,dF:0,tr:function(o){return function(c){return c.bp}},n_:function(o){return z},t5:0})]))}),kf=function(e){return{iy:a(K,function(r){return r.iy},e),j7:Zv.qm,tU:a(K,function(r){return r.tU},e),kl:a(K,function(r){return r.kk},e),kq:a(K,function(r){return r.kq},e),t_:a(K,function(r){return r.t_},e),ks:a(K,function(r){return r.ks},e),gu:st.nl}},qL=function(e){return{$:0,a:e}},j5=function(e){return{$:3,a:e}},qc=l(function(e,r){return a(Wv,e,j5(r))}),YL={$:2},NL={$:1},GL={$:3},OL={$:4},_1=L6,WL=Cr(_1,Le(function(e,r,n,t,o){return{oT:t,pU:r,i7:e,rT:o,tv:n}}),a(S,"key",Se),a(S,"ctrlKey",ae),a(S,"shiftKey",ae),a(S,"altKey",ae),a(S,"metaKey",ae)),JL=l(function(e,r){return a(Ne,function(n){var t=n.rT,o=n.oT,c=n.tv,i=n.pU,f=n.i7,$=i||o||t;if($)return{V:e.u(Ca),Y:!1,_:!1};if(f==="Tab")return{V:e.u(Ca),Y:!0,_:!0};if(f==="ArrowUp")return{V:e.u(NL),Y:!0,_:!0};if(f==="ArrowDown")return{V:e.u(YL),Y:!0,_:!0};if(f==="Enter")return{V:e.u(GL),Y:!0,_:!0};if(f==="Escape")return{V:e.u(OL),Y:!0,_:!0};if(f==="ArrowLeft"||f==="ArrowRight"){if(r.$)return{V:e.u(Ca),Y:!1,_:!1};var s=r.a;return{V:f==="ArrowLeft"?s.sr:s.su,Y:!0,_:!0}}else return{V:e.u(Ca),Y:!1,_:!1}},WL)}),L5=5,ZL=function(e){return v(lt,e,!1,"")},T5=ZL,XL={Y:!0,_:!1},KL=l(function(e,r){return a(l$,e,j5(r))}),QL=Le(function(e,r,n,t,o){return{pN:o,rv:t,nv:r,sW:n,sX:e}}),eT=Le(function(e,r,n,t,o){return{hb:r,s$:n,t0:t,t1:o,ie:e}}),rT=Cr(_1,eT,a(S,"width",q),a(S,"height",q),a(S,"pressure",q),a(S,"tiltX",q),a(S,"tiltY",q)),aT=zr(function(e,r,n,t,o,c){return{pr:r,pF:n,bb:e,sp:t,sF:o,tk:c}}),oY=4,cY=0,iY=5,fY=1,uY=2,$Y=3,nT=function(e){switch(e){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;default:return 0}},tT=a(Ne,nT,a(S,"button",xi)),oT=v(Yn,l(function(e,r){return h(e,r)}),a(S,"clientX",q),a(S,"clientY",q)),cT=J(function(e,r,n,t){return{oT:e,pU:r,rT:n,tv:t}}),iT=V(Sc,cT,a(S,"altKey",ae),a(S,"ctrlKey",ae),a(S,"metaKey",ae),a(S,"shiftKey",ae)),fT=v(Yn,l(function(e,r){return h(e,r)}),a(S,"offsetX",q),a(S,"offsetY",q)),uT=v(Yn,l(function(e,r){return h(e,r)}),a(S,"pageX",q),a(S,"pageY",q)),$T=v(Yn,l(function(e,r){return h(e,r)}),a(S,"screenX",q),a(S,"screenY",q)),lT=Nr(B2,aT,iT,tT,oT,fT,uT,$T),lY=0,vY=2,sY=1,vT=function(e){switch(e){case"pen":return 2;case"touch":return 1;default:return 0}},sT=a(Ne,vT,Se),dT=Cr(_1,QL,a(S,"pointerType",sT),lT,a(S,"pointerId",xi),a(S,"isPrimary",ae),rT),bT=x(function(e,r,n){return a(KL,e,a(Ne,function(t){return{V:n(t),Y:r.Y,_:r._}},dT))}),z5=a(bT,"pointerdown",XL),mT=function(e){return{$:5,a:e}},pT=function(e){return{$:6,a:e}},hT=J(function(e,r,n,t){return a(O,u([T5(z5(function(o){return e.u(pT(t))})),mt(e.u(mT(t)))]),u([a(r,n,t)]))}),gT=J(function(e,r,n,t){return We(t.aR)?a(O,u([E(u([De(j(e.eI)),_e,Ge(je),Br(je),ye(r.kq),vr(me(0))]))]),u([ce("No matching items")])):v(d5,"div",u([Kt(ko(e)),E(u([De(j(e.eI)),C(T$,j(0),j(4),j(0),j(4)),Fc(df),a(M,"overscroll-behavior","contain"),vr(me(0)),_e,Fr(sa)])),T5(z5(function(o){return e.u(Ca)})),a(ra,"scroll",a(Ne,a(Ie,zv,e.u),a(Gi,u(["currentTarget","scrollTop"]),q))),a(qc,"wheel",re({V:e.u(Ca),Y:!1,_:!0}))]),(function(){var o=Pr(t.aR),c=a(Ye,o-1,m0((t.bT+e.eI)/Ot)+L5),i=a(we,0,Ht(t.bT/Ot)-L5),f=i*Ot,$=a(Bn,l(function(d,b){var g=i+d;return h(Xe(g),C(hT,e,n,ie(g,t.ax),b))}),a(qn,c-i+1,a(qt,i,t.aR))),s=a(we,0,o-1-c)*Ot;return a(A,h("top-spacer",a(O,u([E(u([De(j(f)),vr(me(0))]))]),P)),Z($,u([h("bottom-spacer",a(O,u([E(u([De(j(s)),vr(me(0))]))]),P))])))})())}),_T=function(e){return{$:9,a:e}},yT=function(e){return a(Ne,function(r){return{V:e.u(_T(r)),Y:!0,_:!0}},a(S,"deltaY",q))},A$=zt(function(e,r,n,t,o,c,i){var f=i;return a(O,u([E(u([ye(r.ks),_e,Fr(sa),a(M,"gap","8px"),Ce(Je(100))])),a(qc,"keydown",a(JL,e,t)),a(qc,"mousedown",re({V:e.u(Ca),Y:!1,_:!0})),a(qc,"pointerdown",re({V:e.u(Ca),Y:!1,_:!0})),a(qc,"pointerup",re({V:e.u(Ca),Y:!1,_:!0})),a(qc,"wheel",yT(e))]),Z(n,Z(u([a(Rc,u([Fo("text"),Kt(J3(e)),a(Ue,"data-select-all-on-focus","true"),h5(e.jT),E(u([Ce(Je(100)),vr(me(0)),a(jr,j(8),j(8)),$r(j(4)),nn(fr),Te(r.kl),ye(r.t_),a(m1,"placeholder",u([ye(r.kq)]))])),gf(a(Ie,qL,e.u)),Ec(f.hX)]),P),C(gT,e,r,o,f)]),c)))}),xf=function(e){return e.D>.55?{oS:1,aS:0,D:.1,a0:0}:{oS:1,aS:0,D:.98,a0:0}},CT=function(e){return N(e.Z.ie)+(" \xD7 "+N(e.Z.hb))},M5=x(function(e,r,n){var t=r?nr(u([Te(a(K,function(c){return c.bp},e)),ye(a(K,a(Ie,function(c){return c.bp},xf),e))])):ye(a(K,function(c){return c.t_},e)),o=r?a(K,a(Ie,function(c){return c.bp},xf),e):a(K,function(c){return c.ks},e);return a(O,u([E(u([a(jr,j(0),j(12)),De(j(32)),_e,Ge(je),Cf(yf),a(M,"gap","10px"),t]))]),u([a(gr,u([E(u([w$(me(1)),sr(j(13))]))]),u([ce(n.r8)])),a(gr,u([E(u([sr(j(12)),ye(o)]))]),u([ce(CT(n))]))]))}),PT=J(function(e,r,n,t){var o=t;return Nr(A$,gc(r),kf(e),u([C(UL,e,r,n,o.dF)]),D({sr:r.u(g1(0)),su:r.u(g1(1))}),M5(e),P,o.bg)}),y1=J(function(e,r,n,t){return a(O,u([E(u([Qe(pt),Sa(le),da(le),rn(lr(.001)),ht(fr)])),a(Ue,"inert","")]),u([Nr(A$,F(e,{fm:e.fm+"-warmup"}),r,P,z,n,P,t)]))}),ST=x(function(e,r,n){var t=n;return C(y1,gc(r),kf(e),M5(e),t.bg)}),kT=function(e){if(!e.b0.ds||e.oK)return ce("");var r={fm:k2,u:e.jA};return a(O,P,u([v(no,e.e,e.pI,{br:Xt(7),kV:C(PT,e.e,r,e.sx,e.S),by:7,bz:e.f,a3:e.az.a3,dL:e.az.dM(7),oi:Da(7),ok:"Device",u:e.aX}),v(ST,e.e,r,e.S)]))},xT=x(function(e,r,n){return(function(t){return v(Ka,e,t,n.bD)})(v(se,e,r,n.bx))}),wT=l(function(e,r){return a(er,a(xT,e,r),a$)}),jT=function(e){var r=e,n=v(wT,l(function(c,i){var f=i.a,$=i.b;return h(f+1,$+c.iO)}),h(0,0),r.f3),t=n.a,o=n.b;return t>1&&o>0?D(t/o):z},LT=be("flex-end"),D5=function(e){return e*1e3},TT=function(e){var r=e.un;return{ku:0,un:a(Mc,"translateY",u([r]))}},zT=function(e){return a(O,u([E(u([Qe(Ma),Ce(Je(100)),De(j(1)),P$(u([TT(Je(-50))])),Te(tr(e.dG.q$)),Xn(j(D5(1/60)))]))]),P)},MT=function(e){return Z(e.bx,Be(e.bD))},DT=a(er,MT,a$),AT=l(function(e,r){var n=r*1e3;return n<=18?e.dG.q$:n<=33?e.dG.uN:e.dG.s5}),FT=l(function(e,r){return a(O,u([E(u([Ic(fr),Ce(j(4)),De(j(D5(r))),Xn(le),Te(tr(a(AT,e,r)))]))]),P)}),IT=l(function(e,r){return a(O,u([E(u([Qe(Mo),De(j(50)),Ce(j(P3*4)),Fc(bf),Te(tr(e.km))]))]),u([zT(e),a(O,u([E(u([Qe(Ma),dt(le),Xn(le),De(Je(100)),_e,Fr(zc),Ge(LT)]))]),a(G,a(Ie,function(n){return n.iO},FT(e)),DT(r)))]))}),A5=l(function(e,r){if(e<0)return r;var n=a(bn,10,e),t=ug(n),o=function(c){return c/n};return o(Vr(t(r)))}),VT=l(function(e,r){return e<0?r:a(A5,e,r)}),BT=function(e){return e>=0?"":"-"},wf=l(function(e,r){var n=function(t){var o=a($n,".",t);e:for(;;)if(o.b)if(o.b.b){if(o.b.b.b)break e;var c=o.a,i=o.b,f=i.a;return c+("."+v(Uu,e,"0",f))}else{var c=o.a;return c+("."+a(cc,e,"0"))}else break e;return t};return h2(r)?"NaN":mc(r)?BT(r)+"Infinity":e<=0?N(a(VT,e,r)):n(N(a(A5,e,r)))}),HT=l(function(e,r){return a(O,u([E(u([ye(tr(e.dG.q$))]))]),u([ce("Frame Rate: "),ce(a(te,"-",a(de,wf(0),r)))]))}),RT=l(function(e,r){var n=r;return a(O,u([E(u([_e,Fr(sa),a(M,"gap","8px")]))]),u([a(IT,e,n.f3),a(HT,e,jT(r))]))}),F5=function(e){return a(be,"animation-duration",e)},ET=function(e){return{$:5,a:e}},I5=function(e){return e.un==="none"||e.un==="inherit"||e.un==="unset"||e.un==="initial"?a(be,"animation-name",e):ET(e.un)},dY=ne,Io=l(function(e,r){return e+(":"+r)}),UT=function(e){return ie(e,t$)},qT=function(e){var r=e.a,n=e.b,t=v(va,function(c){var i=c;return i+";"},"",n),o=Xe(r)+"%";return o+("{"+(t+"}"))},YT=function(e){return v(va,qT,"",e)},V5=function(e){return We(e)?{i8:0,ju:0,un:"none"}:{i8:0,ju:0,un:YT(e)}},B5=function(e){return{cB:0,un:N(e)+"s"}},NT={$:2},GT={$:3},OT=function(e){return ie(e,t$)?GT:NT},WT=function(e){return{$:3,a:e}},JT=l(function(e,r){return{$:4,a:e,b:r}}),ZT=function(e){return JT(a(G,WT,e))},XT=x(function(e,r,n){var t=UT(n),o=t?"Stop profiling":"Start profiling",c=t?a(O,u([E(u([Ce(Je(100)),De(Je(100)),_e,Ge(je),Br(je),ye(a(K,a(Ie,function(i){return i.dG},function(i){return i.s5}),e)),I5(V5(u([h(0,u([a(Io,"opacity","1")])),h(50,u([a(Io,"opacity","0.35")])),h(100,u([a(Io,"opacity","1")]))]))),F5(B5(1.2)),a(M,"animation-iteration-count","infinite"),a(M,"animation-timing-function","ease-in-out"),a(ZT,u(["(prefers-reduced-motion: reduce)"]),u([a(M,"animation","none")]))]))]),u([dr.s4])):dr.s4;return a(O,u([E(u([_e,Br(je),Ce(Je(100))]))]),u([a(O,u([E(u([Ce(j(160))]))]),u([a(S5,e,{qa:!1,lZ:D(c),rt:t,i9:o,fX:r(OT(n)),Z:1,uo:1})]))]))}),KT=function(e){var r=e.b0.eq?u([v(XT,e.e,e.fZ,e.aL)]):P;return a(O,u([E(u([_e,Fr(sa),a(M,"gap","8px")]))]),a(A,a(RT,Gn(e.e),e.c$),r))},QT=function(e){return!e.b0.fG||e.oK||$t(e.tY)?ce(""):v(no,e.e,e.pI,{br:Xt(2),kV:KT(e),by:2,bz:e.f,a3:e.az.a3,dL:e.az.dM(2),oi:Da(2),ok:"Performance",u:e.aX})},jf=function(e){return e?"true":"false"},F$=function(e){var r=e.b;return U3(r)},Aa=x(function(e,r,n){return a(O,u([E(u([_e,a(M,"gap","16px"),a(jr,j(3),le),Ge(p5),a(M,"font-family",on.r3),sr(j(12)),a(M,"font-feature-settings",'"tnum"')]))]),u([a(O,u([E(u([ye(a(K,function(t){return t.kq},e)),Ce(j(120)),vr(me(0))]))]),u([ce(r)])),a(O,u([E(u([ye(a(K,function(t){return t.t_},e))]))]),u([ce(n)]))]))}),I$=x(function(e,r,n){return a(O,u([E(u([a(jr,le,j(20))]))]),a(A,a(i5,e,r),n))}),ez=function(e){var r=e.e,n=e.pI;return a(O,u([E(u([_e,Fr(sa),a(M,"gap","18px"),a(jr,j(14),le),Ce(j(o5))]))]),u([v(I$,r,"Tape",u([v(Aa,r,"frame",Xe(F$(e.tY))),v(Aa,r,"dt",a(pc,4,n.iO)),v(Aa,r,"clock",a(pc,4,n.gJ))])),v(I$,r,"Pointer",u([v(Aa,r,"x",a(pc,2,n.nv.dY)),v(Aa,r,"y",a(pc,2,n.nv.e9)),v(Aa,r,"isDown",jf(n.nv.i5))])),v(I$,r,"Keyboard",u([v(Aa,r,"pressed",a(Mr," ",n.mn.s_)),v(Aa,r,"shift",jf(n.mn.tv)),v(Aa,r,"ctrl",jf(n.mn.pU)),v(Aa,r,"meta",jf(n.mn.rT)),v(Aa,r,"alt",jf(n.mn.oT))])),v(I$,r,"Wheel",u([v(Aa,r,"deltaX",N(n.uv.p3)),v(Aa,r,"deltaY",N(n.uv.p4))]))]))},rz=function(e){return!e.b0.fH||e.oK?ce(""):v(no,e.e,e.pI,{br:Xt(1),kV:ez(e),by:1,bz:e.f,a3:e.az.a3,dL:e.az.dM(1),oi:Da(1),ok:"Inputs",u:e.aX})},bY=1,H5=function(e){return{oT:!1,pH:e,pU:!1,rT:!1,tv:!1}},az=function(e){return F(e,{rT:!0})},C1=function(e){return az(H5(e))},nz=function(e){return F(e,{pU:!0})},P1=function(e){return nz(H5(e))},tz=function(e){return e===1?"\u2325":"Alt"},oz=function(e){return e===1?"\u2303":"Ctrl"},cz=l(function(e,r){if(a(Rn,"Key",r))return a(Xa,3,r);if(a(Rn,"Digit",r))return a(Xa,5,r);switch(r){case"BracketLeft":return"[";case"BracketRight":return"]";case"Slash":return"/";case"Backslash":return"\\";case"Period":return".";case"Comma":return",";case"Semicolon":return";";case"Quote":return"'";case"Backquote":return"`";case"Minus":return"-";case"Equal":return"=";case"Space":return"Space";case"ArrowLeft":return"\u2190";case"ArrowRight":return"\u2192";case"ArrowUp":return"\u2191";case"ArrowDown":return"\u2193";case"Enter":return e===1?"\u21A9":"Enter";case"Escape":return e===1?"\u238B":"Esc";case"Tab":return e===1?"\u21E5":"Tab";case"Backspace":return e===1?"\u232B":"Backspace";case"Delete":return e===1?"\u2326":"Del";default:return r}}),iz=function(e){return e===1?"\u2318":"Win"},fz=function(e){return e===1?"\u21E7":"Shift"},V$=l(function(e,r){var n=e===1?"":"+",t=a(wr,ne,u([r.pU?D(oz(e)):z,r.oT?D(tz(e)):z,r.tv?D(fz(e)):z,r.rT?D(iz(e)):z,D(a(cz,e,r.pH))]));return a(Mr,n,t)}),uz=function(e){var r=(function(){var t=e.pI.sC===1?C1("KeyI"):P1("KeyI");return a(V$,e.pI.sC,t)})(),n=Du(e.e);return a(D$,e.e,{qa:!1,lZ:function(t){return t?dr.tQ:dr.r4},rw:Ga(n),rx:function(t){return t?"Lights on":"Lights off"},ry:u([!1,!0]),i9:"Lights",sv:function(t){return ie(t,n)?e.eO:e.jB(ev(e.e))},sx:e.sx,dF:0,tr:function(t){return function(o){return Dc}},n_:function(t){return D(r)},t5:1})},$z={$:2},lz={$:3},vz=(function(){var e=f2,r=e.a,n=e.b;return a(A,r,n)})(),sz=function(e){return{$:1,a:e}},dz=vt("title"),bz=J(function(e,r,n,t){var o=Gn(e).dG,c=ie(t,n),i=a(eb,t,o),f=a(cr,function(s){return s.iy},e),$=c?u([a(M,"outline","3px solid "+ke(f)),a(M,"outline-offset","2px")]):P;return a(bt,u([a(Ue,"aria-pressed",c?"true":"false"),a(Ue,"type","button"),dz(Yb(t)),mt(r(sz(t))),E(Z(u([Ce(j(28)),De(j(28)),$r(Je(50)),Te(tr(i)),v(eo,j(1),ro,tr(f)),ea(tn),an(j(0))]),$))]),P)}),mz=x(function(e,r,n){var t=yo(n);return a(O,u([a(Ue,"role","group"),a(Ue,"aria-label","Accent colour"),E(u([_e,Ge(je),a(M,"gap","12px"),vr(me(0))]))]),a(G,v(bz,e,r,t),vz))}),pz=J(function(e,r,n,t){return a(O,u([E(u([_e,Ge(je),Br(je),a(M,"gap","14px"),a(jr,j(6),j(0)),vr(me(0))]))]),Z(n,u([v(mz,e,r,t)])))}),hz=function(e){return a(O,u([E(u([Ce(j(12)),De(j(12)),$r(j(2)),Te(tr(e))]))]),P)},gz=function(e){return a(O,u([E(u([_e,a(M,"gap","3px"),vr(me(0))]))]),a(G,hz,u([e.o3,e.qN,e.pb,e.q$,e.s5,e.uN])))},R5=x(function(e,r,n){var t=r?nr(u([Te(a(K,function(o){return o.bp},e)),ye(a(K,a(Ie,function(o){return o.bp},xf),e))])):ye(a(K,function(o){return o.t_},e));return a(O,u([E(u([a(jr,j(0),j(12)),De(j(32)),_e,Ge(je),Cf(yf),a(M,"gap","10px"),t]))]),u([gz(n),a(gr,u([E(u([w$(me(1)),sr(j(13))]))]),u([ce(n.r8)]))]))}),_z=J(function(e,r,n,t){var o=t;return Nr(A$,_c(r),kf(e),u([C(pz,e,r.u,n,o.cQ)]),D({sr:r.u($z),su:r.u(lz)}),R5(e),P,o.bg)}),yz=x(function(e,r,n){var t=n;return C(y1,_c(r),kf(e),R5(e),t.bg)}),Cz=function(e){if(!e.b0.b9||e.oK)return ce("");var r={fm:L2,u:e.jH};return a(O,P,u([v(no,e.e,e.pI,{br:Xt(5),kV:C(_z,e.e,r,u([uz(e)]),e.R),by:5,bz:e.f,a3:e.az.a3,dL:e.az.dM(5),oi:Da(5),ok:"Theme",u:e.aX}),v(yz,e.e,r,e.R)]))},Pz=function(e){return v(Cn,"style",P,u([ce(`
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
`,xz=function(e){var r=ke(a(pr,.25,a(cr,function(t){return t.bp},e))),n=ke(a(cr,function(t){return t.bp},e));return v(Cn,"style",P,u([ce(Z(kz,a(Sz,n,r)))]))},wz=function(e){var r=ke(Dc),n=ke(a(pr,.25,a(cr,function(i){return i.bp},e))),t=ke(a(cr,function(i){return i.ix},e)),o=ke(a(cr,function(i){return i.ii},e)),c=ke(a(cr,function(i){return i.bp},e));return v(Cn,"style",P,u([ce(`
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
`))))))))))))))))))))))))))))]))},jz=l(function(e,r){return a(tm,e+" ",r)}),Lz=function(e){return{o3:a(K,function(r){return r.bp},e),qN:tr(xf(a(cr,function(r){return r.bp},e))),gu:st.cN}},Tz=function(e){return Lz(e)},zz=function(e){return{$:5,a:e}},Mz=function(e){return{$:11,a:e}},Dz={$:15},Az=function(e){return{$:9,a:e}},Fz={$:10},Iz={$:7},Vz={$:8},Bz=function(e){var r=e,n=a(Bn,l(function(t,o){return h(o,t)}),r.aK);return{a3:Pr(r.aK),dM:function(t){return a(te,0,a(de,Tu,kr(a(xr,function(o){var c=o.a;return ie(c,t)},n))))}}},Hz=l(function(e,r){return{P:r.oL.P,pI:e.pI,gQ:{ne:a(er,e.u,Az),om:a(de,function(n){return{br:n.br,hw:n.hw}},r.d6)},S:r.S,f:r.f,fw:e.fw,c$:r.c$,m0:r.m0,eO:e.u(Dz),jy:a(er,e.u,G3),jz:e.u(X2),fY:e.fY,jA:a(er,e.u,S2),aX:a(er,e.u,W2),jB:function(n){return e.u(zz(n))},jC:a(er,e.u,Mz),jD:e.u(Fz),jE:e.u(Iz),fZ:a(er,e.u,J2),jF:e.u(Vz),dE:e.dE,jH:a(er,e.u,j2),eP:e.eP,sx:a(er,e.u,Z2),aL:r.aL,bE:r.bE,az:Bz(r.f),tY:e.tY,R:r.R,e:r.e,cN:r.cN,b0:e.f6,oK:r.oK}}),Rz=l(function(e,r){switch(e){case 3:return{dY:r.j2,e9:.5*(r.ia+r.pf)};case 2:return{dY:r.eD,e9:.5*(r.ia+r.pf)};case 0:return{dY:.5*(r.eD+r.j2),e9:r.ia};default:return{dY:.5*(r.eD+r.j2),e9:r.pf}}}),mY=1,Ez={lE:0,fC:0,dq:0,eH:0,nj:0,un:"normal",dX:0},B$=x(function(e,r,n){switch(e){case 0:return r;case 1:return .5*(r+n);default:return n}}),Uz=J(function(e,r,n,t){switch(r){case 0:return h(v(B$,n,e.eD,e.j2),e.ia-t);case 1:return h(v(B$,n,e.eD,e.j2),e.pf+t);case 2:return h(e.eD-t,v(B$,n,e.ia,e.pf));default:return h(e.j2+t,v(B$,n,e.ia,e.pf))}}),H$=function(e){switch(e){case 0:return"0";case 1:return"-50%";default:return"-100%"}},E5=function(e){var r=e.qX,n=e.oQ,t=e.ed,o=e.br,c=(function(){switch(t){case 0:return"-100%";case 1:return"0";case 2:return H$(n);default:return H$(n)}})(),i=(function(){switch(t){case 0:return H$(n);case 1:return H$(n);case 2:return"-100%";default:return"0"}})(),f="translate("+(i+(", "+(c+")"))),$=C(Uz,o,t,n,r),s=$.a,d=$.b;return u([Qe(pt),da(j(s)),Sa(j(d)),a(M,"transform",f)])},qz=l(function(e,r){return a(O,u([E(Z(E5({oQ:1,br:r.br,ed:r.ed,qX:6}),u([a(jr,j(7),j(14)),Te(e.o3),ye(e.qN),$r(Pn.rO),Zn(me(e.gu)),_e,Fr(zc),a(M,"gap","12px"),a(M,"width","max-content"),n1(Ez),x5(j(360)),Sn(lr(1.45))])))]),u([a(gr,P,u([ce(r.i9)])),(function(){var n=r.n_;if(n.$===1)return ce("");var t=n.a;return a(gr,u([E(u([ye(e.qN)]))]),u([ce(t)]))})()]))}),Yz=l(function(e,r){return{gA:0,cw:0,un:Z(N(r),e)}}),Nz=Yz("deg"),Gz=function(e){var r=e.un;return{ku:0,un:a(Mc,"rotate",u([r]))}},Oz=x(function(e,r,n){return a(O,u([E(u([Qe(pt),da(j(n.dY)),Sa(j(n.e9)),Te(e.o3),Ce(j(10)),De(j(10)),Zn(me(e.gu)),a(M,"transform-origin","top left"),M$(Gz(Nz((function(){switch(r){case 3:return-45;case 2:return 135;case 1:return 45;default:return-135}})())))]))]),P)}),U5=l(function(e,r){return a(O,P,u([v(Oz,e,r.ed,a(Rz,r.ed,r.br)),a(qz,e,r)]))}),Wz=l(function(e,r){var n=r;if(n.$){var t=n.a,o=t.X;switch(o.$){case 1:return a(U5,e,t);case 2:return a(U5,e,t);case 0:return ce("");default:return ce("")}}else return ce("")}),Jz=480,Zz=l(function(e,r){return e.gU}),Xz=be("min-width"),Kz=J(function(e,r,n,t){var o=n?nr(u([Te(a(K,function(c){return c.bp},e)),ye(a(K,a(Ie,function(c){return c.bp},xf),e))])):ye(a(K,function(c){return c.t_},e));return a(O,u([E(u([_e,Br(u1),Ge(je),a(jr,j(0),j(12)),De(j(32)),Cf(yf),o]))]),u([a(gr,u([E(u([sr(j(13)),w$(me(1))]))]),u([ce(t.hZ+(": "+t.i9))])),a(gr,u([E(u([sr(j(13)),Xz(j(70)),vr(me(0)),w5(dt)]))]),u([ce(a(te,"",a(de,V$(r.sC),a(Zz,t,r))))]))]))}),Qz=function(e){return{fm:O3,eI:320,jT:"Type a command\u2026",u:e,ie:{rZ:400,us:50}}},eM=function(e){if(a(Oi,e.b0,e.P)){var r=a(Kz,e.e,e.pI),n=kf(e.e),t=Qz(e.jy);return a(O,P,u([v(no,e.e,e.pI,{br:Xt(6),kV:a(O,u([E(u([Ce(j(Jz))]))]),u([Nr(A$,t,n,P,z,r,P,e.P)])),by:6,bz:e.f,a3:e.az.a3,dL:e.az.dM(6),oi:Da(6),ok:"Command palette",u:e.aX}),C(y1,t,n,r,e.P)]))}else return ce("")},rM=l(function(e,r){return a(O,u([a(Ue,"role","status"),E(Z(E5({oQ:r.oQ,br:r.br,ed:r.ed,qX:6}),u([a(jr,Uc.ty,Uc.rD),$r(Pn.rO),Te(a(K,function(n){return n.bp},e)),ye(a(K,function(n){return v(Xv,.6,n.bp,n.t_)},e)),nr(gt.ok),n1(a5),Zv.qm,Zn(me(st.om)),a(M,"pointer-events","none"),I5(V5(u([h(0,u([a(Io,"opacity","0")])),h(8,u([a(Io,"opacity","1")])),h(92,u([a(Io,"opacity","1")])),h(100,u([a(Io,"opacity","0")]))]))),F5(B5(W3)),a(M,"animation-fill-mode","forwards")])))]),u([ce(r.V)]))}),aM=function(e){var r=e.gQ.om;if(r.$===1)return ce("");var n=r.a.hw,t=r.a.br;return a(rM,e.e,{oQ:1,br:t,ed:1,V:n?"Nothing to Reset":"Use the browser's Back button to undo"})},nM=function(e){var r=l(function(n,t){return"inset 0 0 "+(N(n)+("px 0 "+ke(a(pr,t,e))))});return a(Mr,", ",u([a(r,90,.22),a(r,30,.4),a(r,8,.65)]))},q5=function(e){switch(e){case 0:return z;case 1:return D(v(Ir,1/6,1,.5));default:return D(v(Ir,1/3,1,.5))}},tM=function(e){var r=q5(e.m0);if(r.$===1)return ce("");var n=r.a;return a(O,u([E(u([Qe(pt),Sa(le),da(le),dt(le),Xn(le),a(M,"pointer-events","none"),a(M,"box-shadow",nM(n))]))]),P)},pY=0,S1=a(uf,0,"rem"),oM=function(e){if(!$t(e.tY)||e.oK)return ce("");var r=e.pI.f5,n=e.pI.nv,t=ke(n.i5?a(cr,function(c){return c.t_},e.e):a(cr,function(c){return c.bp},e.e)),o=a(Mr," ",u(["drop-shadow(1px 0 "+(t+")"),"drop-shadow(-1px 0 "+(t+")"),"drop-shadow(0 1px "+(t+")"),"drop-shadow(0 -1px "+(t+")")]));return a(O,u([E(u([Qe(Ma),Sa(le),da(le),Ce(S1(2)),De(S1(2)),a(M,"pointer-events","none"),a(M,"transform","translate("+(N(n.dY+.5*r.ie)+("px, "+(N(-n.e9+.5*r.hb)+"px)")))),ye(n.i5?a(K,function(c){return c.bp},e.e):a(K,function(c){return c.t_},e.e)),a(M,"filter",o),Zn(me(st.a6+1))]))]),u([dr.nv]))},cM=function(e){return{$:0,a:e}},iM=h6,hY=ne,fM=function(e){return a(T,e,re(0))};function k1(){return Pc(x1())}function x1(){return C(Cc,x(function(e,r,n){return{gG:r,dn:n,cB:e}}),a(S,"duration",q),a(S,"callCount",xi),a(S,"children",fM(function(e){return k1()})))}var Y5=k1();k1=function(){return Y5};var uM=x1();x1=function(){return uM};var $M=function(e){return a(Ne,e,a(Gi,u(["detail"]),v(Yn,l(function(r,n){return{f0:r,aB:n}}),a(S,"recordingStartTime",q),a(S,"tickSnapshots",iM(v(Yn,l(function(r,n){return{iV:n,df:r}}),a(S,"timestamp",q),a(S,"flameGraph",Y5)))))))},lM=function(e){var r=e.st,n=e.tg;return v(Cn,"profiler-element",Z(u([a(ra,"result",$M(r))]),n?u([a(Ue,"running","")]):P),P)},vM=function(e){return lM({st:cM,tg:ie(e,t$)})},sM=function(e){return We(e)?{un:"none"}:{un:a(Mr,", ",e)}},dM=a(er,be("font-family"),sM),w1=l(function(e,r){return a(u$,l(function(n,t){var o=t,c=a(Ke,n,e);if(c.$===1)return o;var i=c.a;return{gG:o.gG-i.gG,dn:a(w1,i.dn,o.dn),cB:o.cB-i.cB}}),r)}),N5=l(function(e,r){var n=e.cD,t=e.cL,o=r.aB,c=t?a(te,He,a(de,function(f){return f.iV},a($a,t-1,o))):He,i=a(te,He,a(de,function(f){return f.iV},a($a,n,o)));return a(w1,c,i)}),bM=be("max-height"),G5=function(e){return v(vu,x(function(r,n,t){return a(A,n,t)}),P,e)},Yc=function(e){return{$:9,a:e}},O5=function(e){var r=(function(n){return 1-n.id/n.hr})(v(se,l(function(n,t){var o=a(Xr,t.fU,it(n));return{hr:t.hr+t.gt,fU:t.fU+1,id:t.id+o/(t.fU-1)*t.gt,gt:t.gt*.7}}),{hr:0,fU:10,id:0,gt:1},a(qn,8,Si(e))));return{oS:1,aS:r,D:.35,a0:.45}},mM=function(e){return a(ra,"mouseout",re(e))},pM=function(e){return a(ra,"mouseover",re(e))},hM=zr(function(e,r,n,t,o,c){var i=n>0?c/n*100:0,f=ie(t,D(o)),$=tr(f?e.t_:O5(o)),s=!ie(t,z),d=lr(s&&!f?.3:1);return a(O,u([E(u([Qe(Mo),Kv(j(r*16)),De(j(24)),Sn(j(24)),ea(tn),rn(d),Jn(u([Te(tr(e.kk)),ye(tr(e.t_))]))])),pM(Yc(D(o))),mM(Yc(z))]),u([a(O,u([E(u([Qe(Ma),Sa(le),da(j(r*16)),Ce(Je(i)),De(Je(100)),Te($)]))]),P),a(gr,u([E(u([Qe(Mo),Kv(j(6)),Zn(me(1))]))]),u([ce(o)]))]))}),gM=Le(function(e,r,n,t,o){var c=o.a,i=o.b.dn,f=o.b.cB;return a(A,Cr(hM,e,r,n,t,c,f),V(W5,e,r+1,n,t,i))}),W5=Le(function(e,r,n,t,o){return a(_n,C(gM,e,r,n,t),a(Pf,vn,Na(o)))}),_M=Le(function(e,r,n,t,o){var c=v(Zi,r,n,t),i=c.a,f=i.b,$=c.b,s=$.b,d=a(N5,{cD:s,cL:f},t),b=a(te,0,Qu(a(G,function(g){var p=g.cB;return p},G5(d))));return a(O,u([E(u([an(j(8)),r5(df),bM(j(300)),Te(tr(e.km)),ye(tr(e.ks))]))]),V(W5,e,0,b,o,d))}),J5=function(e){return v(b$,"alignSelf","align-self",e(m$))},yM={qb:0,un:"block"},CM=be("flex-start"),Vo=hr("height"),Z5=ra,Bo=ao("g"),R$=ao("line"),X5=l(function(e,r){var n=r.aB,t=function(o){return o<0?He:a(te,He,a(de,function(c){return c.iV},a($a,o,n)))};return a(w1,t(e-1),t(e))}),K5=function(e){return e.$===-2},Q5=function(e){return K5(e)?0:a(te,0,Qu(a(G,function(r){var n=r.dn;return 1+Q5(n)},G5(e))))},PM=function(e){var r=la(e.aB);return a(te,0,Qu(a(G,function(n){return Q5(a(X5,n,e))},a(Vn,1,r-1))))},SM=function(e){return a(Pf,ne,e)},E$=l(function(e,r){var n=r.f0,t=r.aB;return e?a(te,n,a(de,function(o){return o.df},a($a,e-1,t))):n}),e4=l(function(e,r){var n=a(te,r.f0,a(de,function(t){return t.df},a($a,e,r.aB)));return n-a(E$,e,r)}),kM=function(e){var r=la(e.aB),n=SM(a(G,function(o){return a(e4,o,e)},a(Vn,1,r-1))),t=a(we,0,Ht(Pr(n)*.95)-1);return a(te,16.7,kr(a(qt,t,n)))},Nc=ao("rect"),Lf=hr("stroke"),Tf=hr("stroke-width"),xM=function(e){return{$:5,a:e}},wM=function(e){return{$:6,a:e}},jM={aQ:0,un:"ew-resize"},U$=hr("x1"),q$=hr("x2"),Y$=hr("y1"),N$=hr("y2"),LM=J(function(e,r,n,t){var o=n.a,c=n.b,i=a(Qr,r,en.h3),f=a(Qr,r,en.hS),$=function(R){return a(Ne,function(B){return R({fl:B})},a(S,"clientX",q))},s=l(function(R,B){return a(Bo,P,u([a(R$,u([U$(N(R)),Y$("0"),q$(N(R)),N$(N(i)),Lf("transparent"),Tf(N(a(Qr,r,10))),Kn(u([ea(jM)])),a(Z5,"pointerdown",$(B))]),P),a(R$,u([U$(N(R)),Y$("0"),q$(N(R)),N$(N(i)),Lf(ke(e.dG.s5)),Tf(N(a(Qr,r,1))),Kn(u([ht(fr)]))]),P)]))}),d=v(Zi,r,a(Lc,o,c),t),b=d.a,g=b.a,p=b.b,y=d.b,_=y.a,k=y.b,L=g,w=_,I=(function(){if(o.$){var R=o.a,B=(function(){return R?a(te,t.f0,a(de,function(Y){return Y.df},a($a,k,t.aB))):a(E$,p,t)})();return a(R$,u([U$(N(B)),Y$("0"),q$(N(B)),N$(N(f)),Lf(ke(e.dG.s5)),Tf(N(a(Qr,r,2))),Kn(u([ht(fr)]))]),P)}else return a(Bo,P,P)})();return a(Bo,P,u([a(s,L,xM),a(s,w,wM),I]))}),r4=x(function(e,r,n){return ie(r,D(n))?ke(e.t_):ke(O5(n))}),a4=l(function(e,r){if(e.$)return 1;var n=e.a;return ie(n,r)?1:.3}),n4=function(e){return a(ra,"mouseout",re(e))},t4=function(e){return a(ra,"mouseover",re(e))},j1=hr("opacity"),L1=nm,o4=ao("title"),Ho=hr("width"),Ro=hr("x"),Eo=hr("y"),TM=l(function(e,r){var n=r.mc,t=r.lr,o=r.i9,c=r.hb,i=r.ie,f=r.e9,$=r.dY,s=o+(" ("+(a(wf,2,t)+"ms)")),d=a(a4,e.ca,o),b=v(r4,e.de,e.ca,o),g=a(Nc,u([Ro(N($)),Eo(N(f)),Ho(N(i)),Vo(N(c)),_t(b),j1(N(d)),t4(Yc(D(o))),n4(Yc(z))]),u([a(o4,P,u([L1(s)]))])),p=n?u([a(Nc,u([Ro(N($)),Eo(N(f)),Ho(N(i)),Vo(N(a(Qr,e.a5,2))),_t(ke(e.de.dG.s5)),Kn(u([ht(fr)]))]),P)]):P;return a(A,g,p)}),c4=J(function(e,r,n,t){return v(se,l(function(o,c){var i=o.a,f=o.b,$=c.a,s=c.b,d=f.cB/e.eM,b=oe(d,e.cs)>0,g=C(c4,e,r+1,$,f.dn),p=a(Ye,e.cs,d),y=a(TM,e,{lr:f.cB,hb:p,mc:b,i9:i,ie:e.h2,dY:e.dp+r*e.h2,e9:e.cs-$-p});return h($+p,Z(y,Z(g,s)))}),h(n,P),a(Pf,vn,Na(t))).b}),zM=l(function(e,r){var n=e.oG/e.eM,t=a(Ye,e.cs,n),o=oe(n,e.cs)>0,c=a(Qr,e.a5,1),i=a(we,0,e.oh-c),f=a(Ye,i,a(Qr,e.a5,en.og)),$=a(Nc,u([Ro(N(e.dp)),Eo(N(e.cs-t)),Ho(N(f)),Vo(N(t)),_t(ke(e.de.kq)),Kn(u([ht(fr)]))]),P),s=a(Qr,e.a5,2),d=o?u([a(Nc,u([Ro(N(e.dp)),Eo("0"),Ho(N(f)),Vo(N(s)),_t(ke(e.de.dG.s5)),Kn(u([ht(fr)]))]),P)]):P,b=a(we,0,i-f),g=e.dp+f,p=(function(){if(b<=0||e.jl<=0||K5(r))return P;var y=b/e.jl;return C(c4,{dp:g,ca:e.ca,eM:e.eM,cs:e.cs,h2:y,de:e.de,a5:e.a5},0,0,r)})();return a(A,$,Z(d,p))}),MM=l(function(e,r){var n=function(i){return a(te,0,a(de,function(f){return f.df},a($a,i,r.aB)))},t=a(we,1,a(o$,e.eD,r)-1),o=la(r.aB),c=a(Ye,o-1,a(o$,e.j2,r)+1);return a(xr,function(i){var f=a(E$,i,r),$=n(i);return oe($,e.eD)>-1&&oe(f,e.j2)<1},a(Vn,t,c))}),DM=Le(function(e,r,n,t,o){var c=a(MM,r,t),i=a(Qr,r,en.hS),f=PM(t),$=a(we,33.3,kM(t)),s=$>0?$/i:1,d=a(_n,function(y){var _=a(e4,y,t);return a(zM,{dp:a(E$,y,t),ca:o,jl:f,eM:s,cs:i,de:e,oh:_,oG:_,a5:r},a(X5,y,t))},c),b=16.7/s,g=a(R$,u([U$(N(r.eD)),q$(N(r.j2)),Y$(N(i-b)),N$(N(i-b)),Lf(ke(e.dG.uN)),Tf(N(a(Qr,r,1))),Kn(u([ht(fr)]))]),P),p=a(Nc,u([Ro(N(r.eD)),Eo("0"),Ho(N(r.j2-r.eD)),Vo(N(i)),_t(ke(e.km))]),P);return a(Bo,P,u([p,a(Bo,P,d),g,C(LM,e,r,n,t)]))}),AM=hr("transform"),FM=hr("font-size"),IM=ao("text"),VM=l(function(e,r){var n=e.kQ,t=e.nk,o=e.lK,c=.6*o,i=Ht((n-t)/c);return oe(Ja(r),i)<1?r:i<=1?"":a(zi,i-1,r)+"\u2026"}),BM=zr(function(e,r,n,t,o,c){var i=c.gG,f=c.cB,$=a(Qr,r,en.nR),s=.3*$,d=n.fu*$,b=a(a4,t,o),g=.6*$,p=v(r4,e,t,o),y=a(Mr," > ",Be(a(A,o,n.fk))),_=y+(" ("+(Xe(i)+("x, "+(a(wf,2,f)+"ms)"))));return a(Bo,u([t4(Yc(D(o))),n4(Yc(z))]),u([a(o4,P,u([L1(_)])),a(Nc,u([Ro(N(n.dZ)),Eo(N(d)),Ho(N(f)),Vo(N($)),_t(p),Lf(ke(e.kj)),Tf(N(a(Qr,r,1))),j1(N(b))]),P),a(IM,u([Ro(N(n.dZ+s)),Eo(N(d+.7*$)),_t(ke(e.t_)),FM(N(g)),j1(N(b))]),u([L1(a(VM,{kQ:f,lK:g,nk:s},_))]))]))}),i4=Le(function(e,r,n,t,o){return v(se,l(function(c,i){var f=c.a,$=c.b,s=i.a,d=i.b,b=V(i4,e,r,{fk:a(A,f,n.fk),fu:n.fu+1,dZ:s},t,$.dn),g=Cr(BM,e,r,F(n,{dZ:s}),t,f,$);return h(s+$.cB,a(A,g,Z(b,d)))}),h(n.dZ,P),a(Pf,function(c){var i=c.a;return i},Na(o))).b}),HM=Le(function(e,r,n,t,o){var c=a(Qr,r,en.hS),i=v(Zi,r,n,t),f=i.a,$=f.a,s=f.b,d=i.b,b=d.b;return a(Bo,u([AM("translate("+(N($)+(", "+(N(c)+")"))))]),V(i4,e,r,{fk:P,fu:0,dZ:0},o,a(N5,{cD:b,cL:s},t)))}),RM=function(e){return{$:1,a:e}},EM=C(Cc,x(function(e,r,n){return RM({m2:n/en.h4,nT:e,nU:r})}),a(S,"deltaX",q),a(S,"deltaY",q),a(S,"offsetX",q)),UM=function(e){var r=e.j2-e.eD;return a(Mr," ",a(G,N,u([e.eD,0,r,a(Qr,e,en.h3)])))},qM=Le(function(e,r,n,t,o){var c=r.j2-r.eD,i=a(r1,u([Ho(N(en.h4)),Vo(N(en.h3)),a1(UM(r)),a(Z5,"wheel",EM),Kn(u([Te(tr(e.tU)),$5(yM)]))]),u([V(DM,e,r,n,t,o),V(HM,e,r,n,t,o)])),f=function(y){return a(O,u([E(Z(u([Qe(Ma),Sa(le),Xn(le),ht(fr),a(M,"backdrop-filter","blur(3px)"),a(M,"-webkit-backdrop-filter","blur(3px)")]),y))]),P)},$=function(y){return c?v(mr,0,1,(y-r.eD)/c):0},s=v(Zi,r,n,t),d=s.a,b=d.a,g=s.b,p=g.a;return a(O,u([E(u([Qe(Mo),J5(CM)]))]),u([i,f(u([da(le),Ce(Je($(b)*100))])),f(u([dt(le),Ce(Je((1-$(p))*100))]))]))}),YM=l(function(e,r){var n=la(r.aB),t=Gn(e),o=(function(){var f=a($a,n-1,r.aB);if(f.$)return 0;var $=f.a;return $.df-r.f0})(),c=o>=1e3?a(wf,2,o/1e3)+" s":a(wf,0,o)+" ms",i=Xe(n)+(" ticks \xB7 "+c);return a(O,u([E(u([_e,Ge(je),De(j(24)),a(jr,j(4),j(8))]))]),u([a(gr,u([E(u([ye(tr(t.t_))]))]),u([ce(i)]))]))}),NM=l(function(e,r){var n=Gn(e);return a(O,u([E(u([_e,Fr(sa),ye(tr(n.ks)),dM(u(["monospace"])),sr(j(12)),a(M,"user-select","none")]))]),u([a(YM,e,r.dK),V(qM,n,r.a5,r.bi,r.dK,r.ca),V(_M,n,r.a5,r.bi,r.dK,r.ca)]))}),GM=l(function(e,r){if(r.$===3){var n=r.a;return D(a(NM,e,n))}else return z}),OM=function(e){if(e.b0.eq){var r=(function(){var t=a(GM,e.e,e.aL);if(t.$)return ce("");var o=t.a;return v(no,e.e,e.pI,{br:Xt(3),kV:a(of,e.fZ,o),by:3,bz:e.f,a3:e.az.a3,dL:e.az.dM(3),oi:Da(3),ok:"Profile",u:e.aX})})(),n=a(of,e.fZ,vM(e.aL));return a(O,P,u([n,r]))}else return ce("")},WM=cr(a(Ie,function(e){return e.dG},function(e){return e.s5})),T1=l(function(e,r){return ke(a(pr,r,WM(e.e)))}),JM=x(function(e,r,n){var t=u([a(M,"background-color",a(T1,e,.28)),a(M,"-webkit-backdrop-filter","blur(18px)"),a(M,"backdrop-filter","blur(18px)")]),o="radial-gradient(circle 16px at 100% 0%, transparent 15px, #000 16px)",c=function(i){return a(O,u([E(Z(u([Qe(Ma),Ce(j(16)),De(j(16)),a(M,"pointer-events","none"),a(M,"-webkit-mask",o),a(M,"mask",o)]),Z(t,i)))]),P)};return a(O,u([E(Z(u([Qe(pt),Xn(j(r)),da(j(r)),Zn(me(st.nl)),a(M,"pointer-events","auto"),_e,Ge(je),a(M,"gap","12px"),a(M,"padding","8px 14px"),a(M,"border-radius","0 21px 0 0")]),t)),a(hf,"click",re(h(e.eO,!0)))]),Z(n,u([c(u([a(M,"top","-16px"),a(M,"left","0")])),c(u([a(M,"bottom","0"),a(M,"right","-16px")]))])))}),f4={$:3},ZM={$:2},gY=2,_Y=1,yY=0,z1=function(e){var r=e.b;return q3(r)},u4=function(e){var r=e.a;return ie(r,Ui)},XM=be("min-height"),KM=be("stretch"),QM=function(e){return{$:0,a:e}},eD=function(e){var r=z1(e.tY)-1,n=wc(e.tY),t=n||r<=0;return a(Rc,u([Fo("range"),c1("0"),o1(Xe(r)),f1("1"),Ec(Xe(F$(e.tY))),sf(t),gf(function(o){return e.dE(QM(a(te,0,Mi(o))))}),Ao("ui-slider"),E(u([Ce(j(200)),vr(me(0)),De(j(24)),a(M,"-webkit-appearance","none"),a(M,"appearance","none"),Te(pf),ea(tn),nn(fr),rn(lr(t?.4:1)),a(M,"--slider-fill",N(r>0?100*F$(e.tY)/r:0)+"%")]))]),P)},rD=function(e){var r=e.e,n=(function(){var $=function(p){return p===1||p===2},s=function(p){switch(p){case 0:return ZM;case 1:return f4;default:return rv}},d=function(p){switch(p){case 0:return"Record";case 1:return"Play";default:return"Pause"}},b=function(p){switch(p){case 0:return wc(e.tY);case 1:return _v(e.tY);default:return x3(e.tY)}},g=function(p){switch(p){case 0:return dr.s4;case 1:return dr.sT;default:return dr.sK}};return a(D$,r,{qa:!1,lZ:g,rw:b,rx:d,ry:u([0,1,2]),i9:"Tape transport",sv:function(p){return b(p)||$(p)&&u4(e.tY)?e.eO:e.dE(s(p))},sx:e.sx,dF:0,tr:function(p){return function(y){return Dc}},n_:function(p){return z},t5:0})})(),t=a(O,u([E(u([_e,Fr(sa),a(M,"gap","3px")]))]),u([a(O,u([E(u([_e,Fr(zc),Ge(je),a(M,"gap","8px")]))]),u([a(gr,u([E(u([sr(j(12)),ye(a(K,function($){return $.ks},r)),a(M,"white-space","nowrap")]))]),u([ce("Record from start")])),a(g5,r,{qa:!1,mh:e.bE,i9:"Record from the first frame (applies on reload)",ng:e.jF})])),a(gr,u([E(u([sr(j(10)),ye(a(K,function($){return $.kq},r)),a(M,"white-space","nowrap")]))]),u([ce("applies on reload")]))])),o=wc(e.tY)?a(O,u([E(u([Ce(j(200)),vr(me(0)),_e,Ge(je),Br(je),a(M,"gap","8px"),sr(j(13)),ye(a(K,function($){return $.t_},r)),a(M,"white-space","nowrap")]))]),u([a(gr,u([E(u([Ce(j(8)),De(j(8)),a(M,"border-radius","50%"),a(M,"background-color",a(T1,e,1))]))]),P),ce("Recording\u2026")])):$t(e.tY)?eD(e):a(O,u([E(u([Ce(j(200)),vr(me(0))]))]),P),c=a(O,u([E(u([J5(KM),Ce(j(1)),XM(j(28)),a(M,"background-color",ke(a(pr,.18,a(cr,function($){return $.t_},r))))]))]),P),i=(function(){var $=u([Ce(j(100)),vr(me(0)),_e,Ge(je),sr(j(12)),ye(a(K,function(s){return s.ks},r)),a(M,"font-variant-numeric","tabular-nums")]);return u4(e.tY)?a(O,u([E(Z($,u([Br(je)])))]),u([ce("\u2014 / \u2014")])):wc(e.tY)?a(O,u([E(Z($,u([Br(je)])))]),u([ce(Xe(z1(e.tY)))])):a(O,u([E($)]),u([a(gr,u([E(u([Ic(me(1)),a(M,"text-align","right")]))]),u([ce(Xe(F$(e.tY)+1))])),a(gr,u([E(u([a(M,"padding","0 4px")]))]),u([ce("/")])),a(gr,u([E(u([Ic(me(1)),a(M,"text-align","left")]))]),u([ce(Xe(z1(e.tY)))]))]))})(),f=a(bt,u([mt(e.eP),a(Ue,"aria-label","Close tape"),E(u([Ce(j(32)),De(j(32)),an(j(5)),vr(me(0)),$r(Je(50)),mf(le),Te(pf),ye(n5),ea(tn),_e,Ge(je),Br(je),nn(fr),rn(lr(.9)),a(M,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Jn(u([rn(lr(1)),Te(C(Jv,255,255,255,.18))]))]))]),u([dr.pT]));return a(O,u([E(u([_e,Fr(zc),Ge(je),a(M,"gap","12px")]))]),u([n,o,i,c,t,f]))},aD=function(e){return v(JM,e,6,u([rD(e)]))},nD=function(e){return a(Ar,4,e.f)&&!e.oK?aD(e):ce("")},CY=3,$4=function(e){return F(e,{tv:!0})},tD=function(e){var r=(function(){var n=e.pI.sC===1?$4(C1("KeyP")):$4(P1("KeyP"));return a(V$,e.pI.sC,n)})();return a(k$,e.e,{ij:function(n){return n.bp},qa:!1,lZ:dr.rP,i6:a(Ar,6,e.f),i9:"Command palette",fX:e.jz,dg:a(yt,e.sx,{ed:3,i9:"Command palette",n_:D(r)})})},oD=function(e){return a(Ac,e.e,{qa:!1,lZ:dr.tz,by:7,i9:"Device preview",bz:e.f,oi:Da(7),u:e.aX,dg:a(yt,e.sx,{ed:3,i9:"Device preview",n_:z})})},cD=u([0,1,2]),iD=function(e){switch(e){case 0:return dr.uj;case 1:return dr.sL;default:return dr.pH}},fD=function(e){var r=(function(){var n=e.pI.sC===1?C1("KeyM"):P1("KeyM");return a(V$,e.pI.sC,n)})();return a(D$,e.e,{qa:$t(e.tY),lZ:iD,rw:Ga(e.m0),rx:Nb,ry:cD,i9:"Mode",sv:e.jC,sx:e.sx,dF:1,tr:l(function(n,t){return a(te,t.bp,q5(n))}),n_:function(n){return D(r)},t5:3})},uD=function(e){return u([a(hf,"pointerdown",re(h(e,!0))),a(hf,"wheel",re(h(e,!0))),a(hf,"keydown",a(T,function(r){return r.pU||r.rT||r.oT?On("let modifier-bearing combos reach global decoders"):a(Bi,r.i7,u(["Meta","Control","Shift","Alt"," ","Escape"]))?On("bare modifiers, Space, and Escape (global stop) \u2014 let bubble"):re(h(e,!0))},V(Sc,J(function(r,n,t,o){return{oT:o,pU:n,i7:r,rT:t}}),a(S,"key",Se),a(S,"ctrlKey",ae),a(S,"metaKey",ae),a(S,"altKey",ae))))])},$D=function(e){return a(k$,e.e,{ij:function(r){return r.bp},qa:!1,lZ:dr.uO,i6:e.oK,i9:"Zen mode",fX:e.jE,dg:a(yt,e.sx,{ed:3,i9:"Zen mode",n_:z})})},lD=function(e){var r=e.b0,n=r.ha?u([$D(e)]):P,t=e.e,o=r.b9?u([a(Ac,t,{qa:!1,lZ:dr.dG,by:5,i9:"Theme",bz:e.f,oi:Da(5),u:e.aX,dg:a(yt,e.sx,{ed:3,i9:"Theme",n_:z})})]):P,c=r.dt?u([fD(e)]):P,i=a(wr,ne,u([r.fG?D(a(Ac,t,{qa:$t(e.tY),lZ:dr.oM,by:2,i9:"FPS meter",bz:e.f,oi:Da(2),u:e.aX,dg:a(yt,e.sx,{ed:3,i9:"FPS meter",n_:z})})):z,r.fH?D(a(Ac,t,{qa:!1,lZ:dr.pI,by:1,i9:"Inputs",bz:e.f,oi:Da(1),u:e.aX,dg:a(yt,e.sx,{ed:3,i9:"Inputs",n_:z})})):z,(function(){if(r.g9){var _=a(Ar,4,e.f);return D(a(k$,t,{ij:Da(4),qa:!1,lZ:dr.tY,i6:_,i9:_?"Close tape":"Tape",fX:e.eP,dg:a(yt,e.sx,{ed:3,i9:"Tape",n_:z})}))}else return z})()])),f=u([_e,Fr(sa),Ge(je),a(M,"gap","6px")]),$=function(_){return a(O,u([E(f)]),_)},s=r.ds?u([oD(e)]):P,d=r.fF?u([a(Ac,t,{qa:!1,lZ:dr.qv,by:0,i9:"Configurations",bz:e.f,oi:Da(0),u:e.aX,dg:a(yt,e.sx,{ed:3,i9:"Configurations",n_:z})})]):P,b=a(Oi,r,e.P)?u([tD(e)]):P,g=a(xr,a(er,L0,We),u([d,c,s,o,b,i])),p=a(O,u([E(u([_e,Fr(sa),Ge(je),a(M,"gap","24px"),e.oK?nr(u([M$(p1(j(-72))),rn(lr(0)),a(M,"pointer-events","none")])):nr(u([M$(p1(le)),rn(lr(1)),a(M,"pointer-events","auto")])),a(M,"transition","transform 240ms cubic-bezier(0.33, 1, 0.68, 1), opacity 240ms cubic-bezier(0.33, 1, 0.68, 1)")])),a(Ue,"aria-hidden",e.oK?"true":"false")]),a(G,$,g)),y=a(wr,ne,u([We(n)?z:D(a(O,u([E(Z(f,u([a(M,"pointer-events","auto")])))]),n)),We(g)?z:D(p)]));return We(y)?ce(""):a(O,Z(u([E(u([Qe(Ma),Sa(j(12)),da(j(12)),Ce(j(48)),_e,Fr(sa),Ge(je),a(M,"gap","24px"),a(M,"pointer-events","none"),Zn(me(st.rc))]))]),uD(e.eO)),y)},vD=function(e){if(!wc(e.tY)&&!$t(e.tY)||e.oK)return ce("");var r=6,n=100,t=N(-n)+"px",o="linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",c=21,i=n+r,f=i+c;return a(O,u([E(u([Qe(pt),Sa(le),da(le),dt(le),Xn(le),a(M,"overflow","hidden"),a(M,"pointer-events",$t(e.tY)?"auto":"none"),Zn(me(st.nl-1))])),mt(e.dE(_v(e.tY)?rv:f4))]),u([a(O,u([E(u([Qe(Ma),a(M,"top",t),a(M,"left",t),a(M,"right",t),a(M,"bottom",t),a(M,"pointer-events","none"),a(M,"border",N(i)+"px solid transparent"),a(M,"border-radius",N(f)+"px"),a(M,"background-color",a(T1,e,.28)),a(M,"-webkit-backdrop-filter","blur(18px)"),a(M,"backdrop-filter","blur(18px)"),a(M,"-webkit-mask",o),a(M,"-webkit-mask-composite","xor"),a(M,"mask",o),a(M,"mask-composite","exclude")]))]),P)]))},sD=l(function(e,r){var n=a(Hz,e,r);return a(O,u([Ao("play-hud"),E(u([Qe(pt),Sa(le),da(le),dt(le),Xn(le),a(M,"pointer-events","none")]))]),Z(u([wz(n.e),a(jz,".play-hud",n.e),xz(n.e),Pz(n.e),tM(n),DL(n),rz(n),QT(n),vD(n),lD(n),oM(n),nD(n),a(Wz,Tz(n.e),n.cN),OM(n),Cz(n),kT(n),eM(n),aM(n),Bm(n.f)]),n.fw.jI))}),dD=l(function(e,r){if(e.$===1)return a(pn,u([a(X,"display","contents")]),u([a(pn,u([a(X,"display","contents")]),u([r]))]));var n=e.a,t=function(c){return N(c)+"px"},o=a(Wi,n.ux,n.iM);return a(pn,u([a(X,"position","fixed"),a(X,"inset","0"),a(X,"display","flex"),a(X,"align-items","center"),a(X,"justify-content","center"),a(X,"background-color",n.o2)]),u([a(pn,u([a(X,"position","relative"),a(X,"width",t(n.iM.ie)),a(X,"height",t(n.iM.hb)),a(X,"border-radius",t(n.pQ)),a(X,"overflow-x","hidden"),a(X,"overflow-y","auto"),a(X,"box-shadow","0 24px 64px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16)"),a(X,"transform","scale("+(N(o)+")")),a(X,"transform-origin","center")]),u([r]))]))}),bD=l(function(e,r){var n=sc(r.tY),t=v(po,Wx,He,n.cI),o=bv(n),c=(function(){var k=e.h7;if(k.$)return yn(r.rb);var L=k.a;return a(te,yn(r.rb),a(de,function(w){return L(w.bz)},a(Kr,function(w){return a(Ke,w,n.cI)},kr(r.aT))))})(),i=pv(r.rb),f=a(wr,V(Tj,e,r,n,o,i),r.aT),$={lJ:r.aH,cI:f,Q:n.Q,nm:t,f6:e.rb,e:c},s=e.i2($),d=Su(a(sD,{pI:a(k3,r,n),fw:s,fY:Tx,dE:A2,eP:F2,f6:e.rb,tY:r.tY,u:wu},r.rb)),b=ke(Gn($.e).tU),g=ke(Gn($.e).t_),p=Su(Gx($.e)),y=a(dD,a(de,function(k){return{o2:ke(a(cr,function(L){return L.kj},c)),pQ:Yx(r.rb),iM:k,ux:n.rq.f5}},i),e.rA($)),_=(function(){var k=r.gP;if(k.$)return u([p,y,d]);var L=k.a;return u([p,y,d,Ex(L)])})();return a(pn,u([om(j3),a(X,"position","fixed"),a(X,"inset","0"),a(X,"overflow-y","auto"),a(X,"overscroll-behavior","none"),a(X,"background-color",b),a(X,"color",g),a(zj,"playflush",re(h(w3,!0)))]),_)}),mD=function(e){return ny({rk:UC(e),aA:rS(e),uh:Lx(e),ur:bD(e)})},pD=function(e){return mD(O_(e))},hD=function(e){return{oL:e.oL,aC:x(function(r,n,t){return P}),rb:e.rb,rk:e.rk,rl:e.rl,ss:e.ss,sw:e.sw,cf:x(function(r,n,t){return P}),aA:x(function(r,n,t){return ft}),ur:e.ur}},gD=function(e){return pD(hD(e))},_D=function(e){return{$:14,a:e}},yD=l(function(e,r){return _D({p9:r,tU:e})}),CD=function(e){return{$:1,a:e}},PD=function(e){return{lc:e,bC:1,bU:CD({hs:0,hR:1}),bV:z}},SD=function(e){return a(yD,PD(e),H(.2,.3,.3))},l4=function(e){var r=e;return la(r.j1)+1},v4=x(function(e,r,n){var t=n,o=a(Xr,l4(t),r);return{pv:a(te,t.lF,a($a,o-1,t.j1)),rj:o,sk:t.as-a(hu,e.bO,t.as)}}),kD=l(function(e,r){var n=r;return a(Xr,l4(n),Vr(-n.as/e.bO))}),xD=l(function(e,r){var n=r;return v(v4,e,a(kD,e,n),n)}),s4=function(e){return{$:0,a:e}},G$=function(e){return{$:0,a:e}},O$=function(e){return{$:0,a:e}},d4={f2:G$(0),f4:O$(1),gm:v(Zr,0,0,0)},b4=function(e){return s4({dn:e,ku:d4})},m4=l(function(e,r){return s4({dn:u([r]),ku:e})}),p4=function(e){var r=e.a,n=e.b,t=e.c;return m4({f2:G$(0),f4:O$(1),gm:v(Zr,r,n,t)})},wD=function(e){return p4(H(e,0,0))},jD=function(e){return p4(H(0,e,0))},LD=function(e){return m4({f2:G$(0),f4:O$(e),gm:v(Zr,0,0,0)})},TD=x(function(e,r,n){var t=Gn(r),o=a(xD,e,n),c=o.sk,i=o.rj,f=function(s){return c+(s-i)*e.bO},$=function(s){return a(wD,f(s),a(jD,-(.1*xe(f(s))),a(LD,1-.7*xe(f(s)),SD(v(v4,e,s,n).pv(t)))))};return b4(a(G,$,a(Vn,i-3,i+3)))}),zD=Im,MD=function(e){return{$:13,a:e}},DD=function(e){return{$:2,a:e}},AD=function(e){return{$:6,a:e}},FD=function(e){return{$:16,a:e}},ID=function(e){return{$:15,a:e}},VD=function(e){return{$:10,a:e}},BD=function(e){return{$:12,a:e}},HD=function(e){return{$:9,a:e}},RD=function(e){return{$:19,a:e}},ED=function(e){return{$:1,a:e}},UD=function(e){return{$:5,a:e}},qD=function(e){return{$:17,a:e}},YD=function(e){return{$:18,a:e}},ND=function(e){return{$:4,a:e}},GD=function(e){return{$:20,a:e}},OD=function(e){return{$:3,a:e}},WD=function(e){return{$:0,a:e}},JD=function(e){return{$:21,a:e}},ZD=function(e){return{$:11,a:e}},XD=function(e){return{$:8,a:e}},KD=function(e){return{$:7,a:e}},QD=function(e){return{$:14,a:e}},M1=function(e){var r=e.a,n=e.b,t=e.c;return v(Zr,r,n,t)},W$=l(function(e,r){var n=r.a,t=r.b,o=r.c;return a(ji,a(Ta,n,e.dY),a(ji,a(Ta,t,e.e9),a(Ta,o,e.kF)))}),eA=l(function(e,r){return M1(a(W$,e,H(r.dY,r.e9,r.kF)))}),kn=k8,xn=x8,h4=x(function(e,r,n){var t=H(-e.aY.dY,-e.aY.e9,-e.aY.kF),o=H(e.aY.dY,e.aY.e9,e.aY.kF),c=xn(r),i=a(vo,t,n),f=H(i.dY,i.e9,i.kF),$=kn(r),s=wi(e.ed),d=a(w0,s,f),b=a(ji,a(Ta,$,f),a(ji,a(Ta,c,a(j0,s,f)),a(Ta,1-$,a(Ta,d,s))));return a(vo,o,M1(b))}),g4=h4({ed:H(0,0,1),aY:v(Zr,0,0,0)}),_4=l(function(e,r){if(e.$){var t=e.a;return a(eA,t,r)}else{var n=e.a;return a(g4,n,r)}}),y4=l(function(e,r){if(e.$){var t=e.a;return v(Zr,r.dY*t.dY,r.e9*t.e9,r.kF*t.kF)}else{var n=e.a;return v(Zr,r.dY*n,r.e9*n,r.kF*n)}}),C4=l(function(e,r){return v(Zr,r.dY+e.dY,r.e9+e.e9,r.kF+e.kF)}),rA=function(e){return{$:1,a:e}},aA=l(function(e,r){return{dY:a(W$,e,r.dY),e9:a(W$,e,r.e9),kF:a(W$,e,r.kF)}}),nA=l(function(e,r){var n=function(t){var o=v(h4,{ed:e,aY:v(Zr,0,0,0)},r,M1(t));return H(o.dY,o.e9,o.kF)};return{dY:n(H(1,0,0)),e9:n(H(0,1,0)),kF:n(H(0,0,1))}}),tA=function(e){return a(nA,H(0,0,1),e)},P4=function(e){if(e.$){var n=e.a;return n}else{var r=e.a;return tA(r)}},oA=l(function(e,r){var n=h(e,r);if(!n.a.$&&!n.b.$){var t=n.a.a,o=n.b.a;return G$(t+o)}else return rA(a(aA,P4(e),P4(r)))}),D1=function(e){return{$:1,a:e}},cA=l(function(e,r){var n=h(e,r);if(n.a.$)if(n.b.$){var c=n.a.a,i=n.b.a;return D1(v(Zr,c.dY*i.dY,c.e9*i.e9,c.kF*i.kF))}else{var c=n.a.a,t=n.b.a;return D1(v(Zr,c.dY*t,c.e9*t,c.kF*t))}else if(n.b.$){var t=n.a.a,c=n.b.a;return D1(v(Zr,t*c.dY,t*c.e9,t*c.kF))}else{var t=n.a.a,o=n.b.a;return O$(t*o)}}),iA=l(function(e,r){return{f2:a(oA,e.f2,r.f2),f4:a(cA,e.f4,r.f4),gm:a(C4,e.gm,a(_4,e.f2,a(y4,e.f4,r.gm)))}}),A1=x(function(e,r,n){switch(r.$){case 0:var t=r.a.dn,o=r.a.ku,c=a(iA,e,o);return v(se,A1(c),n,t);case 1:var i=r.a.k9,f=r.a.gI;return Z(a(G,function(b){var g=b.a,p=b.b;return h(g,AD({gI:f,rp:p}))},v(A1,e,i,P)),n);case 2:var s=r.a;return a(A,h(e,WD(s)),n);case 3:var s=r.a;return a(A,h(e,ED(s)),n);case 4:var s=r.a;return a(A,h(e,DD(s)),n);case 5:var s=r.a;return a(A,h(e,OD(s)),n);case 6:var s=r.a;return a(A,h(e,ND(s)),n);case 7:var s=r.a;return a(A,h(e,UD(s)),n);case 8:var s=r.a;return a(A,h(e,KD(s)),n);case 9:var s=r.a;return a(A,h(e,XD(s)),n);case 10:var $=r.a;return a(A,h(e,HD($)),n);case 11:var s=r.a;return a(A,h(e,VD(s)),n);case 12:var s=r.a;return a(A,h(e,ZD(s)),n);case 13:var s=r.a;return a(A,h(e,BD(s)),n);case 14:var s=r.a;return a(A,h(e,MD(s)),n);case 15:var s=r.a;return a(A,h(e,QD(s)),n);case 16:var s=r.a;return a(A,h(e,ID(s)),n);case 17:var s=r.a;return a(A,h(e,FD(s)),n);case 18:var s=r.a;return a(A,h(e,qD(s)),n);case 19:var s=r.a;return a(A,h(e,YD(s)),n);case 20:var d=r.a;return a(A,h(e,RD(d)),n);case 21:var d=r.a;return a(A,h(e,GD(d)),n);default:var d=r.a;return a(A,h(e,JD(d)),n)}}),S4=function(e){return Be(v(A1,d4,e,P))},PY=ne,wn={dY:0,e9:0,kF:0},F1=function(e){var r=e;return r.dY},I1=function(e){var r=e;return r.e9},V1=function(e){var r=e;return r.kF},fA=function(e){var r=e,n=V1(r.uR),t=I1(r.uR),o=F1(r.uR),c=V1(r.uL),i=I1(r.uL),f=F1(r.uL),$=V1(r.uC),s=I1(r.uC),d=F1(r.uC);return d*i*n+s*c*o+$*f*t-$*i*o-s*f*n-d*c*t>0},J$=function(e){var r=e;return r.aY},Fa=function(e){var r=e;return r},Uo=function(e){var r=e;return r},Z$=function(e){var r=e;return r.uC},X$=function(e){var r=e;return r.uL},zf=function(e){var r=e;return r.uR},uA=function(e){var r=Uo(J$(e)),n=Fa(zf(e)),t=Fa(X$(e)),o=Fa(Z$(e));return{mi:fA(e),ag:o.dY,ah:o.e9,ai:o.kF,aj:t.dY,ak:t.e9,al:t.kF,am:n.dY,an:n.e9,ao:n.kF,aZ:r.dY,a_:r.e9,a$:r.kF,f4:1}},SY=ne,qo=l(function(e,r){return{$:6,a:e,b:r}}),k4=l(function(e,r){return{mi:ie(e.mi,r.mi),ag:e.ag*r.ag+e.ah*r.aj+e.ai*r.am,ah:e.ag*r.ah+e.ah*r.ak+e.ai*r.an,ai:e.ag*r.ai+e.ah*r.al+e.ai*r.ao,aj:e.aj*r.ag+e.ak*r.aj+e.al*r.am,ak:e.aj*r.ah+e.ak*r.ak+e.al*r.an,al:e.aj*r.ai+e.ak*r.al+e.al*r.ao,am:e.am*r.ag+e.an*r.aj+e.ao*r.am,an:e.am*r.ah+e.an*r.ak+e.ao*r.an,ao:e.am*r.ai+e.an*r.al+e.ao*r.ao,aZ:r.aZ+(e.aZ*r.ag+e.a_*r.aj+e.a$*r.am)*r.f4,a_:r.a_+(e.aZ*r.ah+e.a_*r.ak+e.a$*r.an)*r.f4,a$:r.a$+(e.aZ*r.ai+e.a_*r.al+e.a$*r.ao)*r.f4,f4:e.f4*r.f4}}),B1={$:0},$e=B1,K$=l(function(e,r){var n=r;switch(n.$){case 0:return $e;case 6:var t=n.a,o=n.b,c=a(k4,t,e);return a(qo,c,o);case 1:return a(qo,e,n);case 2:return a(qo,e,n);case 4:return a(qo,e,n);case 3:return a(qo,e,n);default:return a(qo,e,n)}}),Q$=l(function(e,r){return a(K$,uA(e),r)}),$A=l(function(e,r){return a(Q$,e,r)}),kY=ne,Gc=function(e){return e},x4=function(e){var r=e;return r.ed},w4=function(e){var r=e;return r.aY},lA=l(function(e,r){var n=r,t=Uo(w4(e)),o=.5*n,c=kn(o),i=xn(o),f=Fa(x4(e)),$=f.dY*i,s=c*$,d=$*$,b=f.e9*i,g=c*b,p=$*b,y=b*b,_=1-2*(d+y),k=f.kF*i,L=c*k,w=2*(p-L),I=2*(p+L),R=$*k,B=2*(R+g),Y=2*(R-g),W=b*k,Q=2*(W-s),ue=2*(W+s),ve=k*k,Pe=1-2*(y+ve),Me=1-2*(d+ve);return{mi:!0,ag:Pe,ah:I,ai:Y,aj:w,ak:Me,al:ue,am:B,an:Q,ao:_,aZ:t.dY-Pe*t.dY-w*t.e9-B*t.kF,a_:t.e9-I*t.dY-Me*t.e9-Q*t.kF,a$:t.kF-Y*t.dY-ue*t.e9-_*t.kF,f4:1}}),vA=x(function(e,r,n){return a(K$,a(lA,e,r),n)}),H1=x(function(e,r,n){return v(vA,e,r,n)}),xY=ne,Qn=function(e){return e},wY=ne,el=function(e){return e},jY=ne,rl=l(function(e,r){return{ed:r,aY:e}}),R1=Qn({dY:0,e9:0,kF:1}),al=R1,j4=a(rl,wn,al),sA=l(function(e,r){if(e.$){var t=e.a,o=function(c){var i=c.a,f=c.b,$=c.c;return Qn({dY:i,e9:f,kF:$})};return a($A,el({aY:wn,uC:o(t.dY),uL:o(t.e9),uR:o(t.kF)}),r)}else{var n=e.a;return v(H1,j4,Gc(n),r)}}),dA=l(function(e,r){var n=Uo(e),t=1-r;return{mi:r>=0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aZ:t*n.dY,a_:t*n.e9,a$:t*n.kF,f4:r}}),bA=x(function(e,r,n){return a(K$,a(dA,e,r),n)}),mA=x(function(e,r,n){return v(bA,e,r,n)}),pA=l(function(e,r){if(e.$)return r;var n=e.a;return v(mA,wn,n,r)}),LY=ne,L4=x(function(e,r,n){return{dY:e,e9:r,kF:n}}),T4=function(e){var r=e;return r},hA=function(e){var r=T4(e);return{mi:!0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aZ:r.dY,a_:r.e9,a$:r.kF,f4:1}},z4=l(function(e,r){return a(K$,hA(e),r)}),M4=l(function(e,r){return a(z4,e,r)}),gA=l(function(e,r){var n=e.kF,t=e.e9,o=e.dY;return a(M4,v(L4,o,t,n),r)}),E1=l(function(e,r){var n=e.f4,t=e.f2,o=e.gm;return a(gA,o,a(sA,t,a(pA,n,r)))}),D4=function(e){var r=e;return r},_A=function(e){var r=e;return D4(r.o0)},TY=1,A4=J(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),yA=J(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),F4=J(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),CA=J(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),I4=J(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),PA=J(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),SA=J(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),nl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return C(SA,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return C(A4,n,r,o,1);case 3:var n=e.a,t=e.b,o=e.c;return C(yA,n,t,o,1);case 4:var n=e.a,t=e.b,o=e.c;return C(F4,n,t,o,1);case 5:var n=e.a,t=e.b,o=e.c;return C(PA,n,t,o,1);case 6:var n=e.a,t=e.b,o=e.c;return C(CA,n,t,o,1);case 7:var n=e.a,t=e.b,o=e.c;return C(I4,n,t,o,1);case 8:return e;case 9:return e;default:return e}},U1={$:0},zY=0,MY=ne,kA=Ae(function(e,r,n,t,o,c,i,f){e:for(;;)if(f.b){var $=f.a,s=f.b,d=i($),b=d,g=a(Ye,b.mZ,e),p=a(we,b.mV,r),y=a(Ye,b.r_,n),_=a(we,b.rM,t),k=a(Ye,b.r$,o),L=a(we,b.rN,c),w=i,I=s;e=g,r=p,n=y,t=_,o=k,c=L,i=w,f=I;continue e}else return{mV:r,rM:t,rN:c,mZ:e,r_:n,r$:o}}),xA=x(function(e,r,n){var t=e(r),o=t;return Mt(kA,o.mZ,o.mV,o.r_,o.rM,o.r$,o.rN,e,n)}),V4=function(e){var r=e.rN,n=r,t=e.r$,o=t,c=e.rM,i=c,f=e.r_,$=f,s=e.mV,d=s,b=e.mZ,g=b;return{mV:a(we,g,d),rM:a(we,$,i),rN:a(we,o,n),mZ:a(Ye,g,d),r_:a(Ye,$,i),r$:a(Ye,o,n)}},Yo=l(function(e,r){var n=e,t=r;return a(we,n,t)}),Oc=l(function(e,r){var n=e,t=r;return a(Ye,n,t)}),Mf=function(e){var r=e;return r},Df=function(e){var r=e;return r.dY},Af=function(e){var r=e;return r.e9},Ff=function(e){var r=e;return r.kF},B4=function(e){var r=Mf(e),n=r.a,t=r.b,o=r.c,c=Df(n),i=Af(n),f=Ff(n),$=Df(t),s=Af(t),d=Ff(t),b=Df(o),g=Af(o),p=Ff(o);return V4({mV:a(Yo,c,a(Yo,$,b)),rM:a(Yo,i,a(Yo,s,g)),rN:a(Yo,f,a(Yo,d,p)),mZ:a(Oc,c,a(Oc,$,b)),r_:a(Oc,i,a(Oc,s,g)),r$:a(Oc,f,a(Oc,d,p))})},H4=nh,et=function(e){return H4(Uo(e))},tl=function(e){return H4(T4(e))},q1=l(function(e,r){var n=e,t=r;return{dY:t.e9*n.kF-t.kF*n.e9,e9:t.kF*n.dY-t.dY*n.kF,kF:t.dY*n.e9-t.e9*n.dY}}),ol=l(function(e,r){var n=e,t=r;return{dY:t.dY-n.dY,e9:t.e9-n.e9,kF:t.kF-n.kF}}),Y1=function(e){return e},N1={dY:0,e9:0,kF:0},wA=l(function(e,r){var n=e,t=r,o=a(we,xe(t.dY),a(we,xe(t.e9),xe(t.kF)));if(o){var c=t.kF/o,i=t.e9/o,f=t.dY/o,$=mn(f*f+i*i+c*c);return{dY:n*f/$,e9:n*i/$,kF:n*c/$}}else return N1}),jA=wA(Y1(1)),R4=x(function(e,r,n){var t=a(ol,r,n),o=a(ol,e,r);return jA(a(q1,t,o))}),LA=function(e){var r=Mf(e),n=r.a,t=r.b,o=r.c,c=tl(v(R4,n,t,o));return H({ad:c,sY:et(n)},{ad:c,sY:et(t)},{ad:c,sY:et(o)})},TA=l(function(e,r){return{$:2,a:e,b:r}}),E4=TA({lu:3,l1:0,m0:4}),U4=function(e){if(e.b){var r=e.a,n=e.b,t=E4(a(G,LA,e)),o=v(xA,B4,r,n);return C(A4,o,e,t,0)}else return U1},DY=ne,Ia=x(function(e,r,n){return H(e,r,n)}),Va=function(e){return e},Ct=l(function(e,r){var n=r;return e*n}),Pt=x(function(e,r,n){var t=e,o=r,c=n;return{dY:t,e9:o,kF:c}}),q4=(function(){var e=Va(1),r=Va(1),n=Va(1),t=a(Ct,-.5,e),o=a(Ct,-.5,r),c=a(Ct,-.5,n),i=v(Pt,c,o,t),f=a(Ct,.5,e),$=v(Pt,c,o,f),s=a(Ct,.5,r),d=v(Pt,c,s,t),b=v(Pt,c,s,f),g=a(Ct,.5,n),p=v(Pt,g,o,t),y=v(Pt,g,s,t),_=v(Pt,g,o,f),k=v(Pt,g,s,f);return nl(U4(u([v(Ia,i,y,p),v(Ia,i,d,y),v(Ia,$,_,k),v(Ia,$,k,b),v(Ia,p,y,k),v(Ia,p,k,_),v(Ia,i,b,d),v(Ia,i,$,b),v(Ia,i,p,_),v(Ia,i,_,$),v(Ia,d,k,y),v(Ia,d,b,k)])))})(),cl={$:0},zA=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),MA=x(function(e,r,n){var t=r.a,o=r.b,c=r.c,i=e(c),f=e(o),$=e(t),s=tl(v(R4,$,f,i)),d={ad:s,sY:et($)},b={ad:s,sY:et(f)},g={ad:s,sY:et(i)};return a(A,d,a(A,b,a(A,g,n)))}),If=function(e){var r=e;return r.aF},DA=J(function(e,r,n,t){if(r.$===1)return z;var o=r.a;if(n.$===1)return z;var c=n.a;if(t.$===1)return z;var i=t.a;return D(v(e,o,c,i))}),Vf=function(e){var r=e;return r.kB},G1=l(function(e,r){return a($a,e,Vf(r))}),Y4=function(e){var r=function(n){var t=n.a,o=n.b,c=n.c;return C(DA,x(function(i,f,$){return H(i,f,$)}),a(G1,t,e),a(G1,o,e),a(G1,c,e))};return a(wr,r,If(e))},AY=ne,AA=l(function(e,r){var n=la(e),t=function(o){var c=o.a,i=o.b,f=o.c;return c>=0&&oe(c,n)<0&&i>=0&&oe(i,n)<0&&f>=0&&oe(f,n)<0};return a(Iv,t,r)?{aF:r,kB:e}:{aF:a(xr,t,r),kB:e}}),FA=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Wc=FA({lu:1,l1:3,m0:4}),rt=function(e){var r=e;return r},il=l(function(e,r){var n=rt(r),t=rt(e);return h(H(t.dY,t.e9,t.kF),H(n.dY,n.e9,n.kF))}),Bf=Q7,N4=v(Bf,0,0,0),O1=zr(function(e,r,n,t,o,c){var i=c.a,f=c.b,$=c.c,s=a(Ke,a(il,e,r),o);if(s.$){var b={ad:N4,sY:et(r)},g={ad:N4,sY:et(e)},p=$+1,y=$;return H(a(A,H(n,y,p),a(A,H(n,p,t),i)),a(A,b,a(A,g,f)),$+2)}else{var d=s.a;return H(a(A,H(n,d,t),i),f,$)}}),IA=Le(function(e,r,n,t,o){e:for(;;)if(n.b){var c=n.a,i=c.a,f=c.b,$=c.c,s=n.b,d=e($),b=e(f),g=e(i),p=t+2,y=t+1,_=t,k=e,L=r,w=s,I=t+3,R=Cr(O1,d,g,p,_,r,Cr(O1,b,d,y,p,r,Cr(O1,g,b,_,y,r,o)));e=k,r=L,n=w,t=I,o=R;continue e}else{var B=o,Y=B.a,W=B.b;return h(Y,Be(W))}}),VA=Le(function(e,r,n,t,o){e:for(;;)if(r.b){var c=r.a,i=c.a,f=c.b,$=c.c,s=r.b,d=e($),b=e(f),g=e(i),p=n+2,y=n+1,_=n,k=v(Sr,a(il,g,d),p,v(Sr,a(il,d,b),y,v(Sr,a(il,b,g),_,o))),L=a(A,H(_,y,p),t),w=e,I=s,R=n+3,B=L,Y=k;e=w,r=I,n=R,t=B,o=Y;continue e}else return H(t,o,n)}),No=x(function(e,r,n){var t=Y4(n),o=v(Ka,MA(r),P,t),c=V(VA,r,t,0,P,He),i=c.a,f=c.b,$=c.c,s=V(IA,r,f,t,0,H(i,P,$)),d=s.a,b=s.b,g=We(b)?o:Z(o,b);return v(zA,e,a(AA,ki(g),d),a(Wc,g,d))}),G4=function(e){return{aF:a(G,function(r){return H(3*r,3*r+1,3*r+2)},a(Vn,0,Pr(e)-1)),kB:ki(gn(a(G,function(r){var n=r.a,t=r.b,o=r.c;return u([n,t,o])},e)))}},fl=function(e){switch(e.$){case 0:return cl;case 1:var t=e.a,r=e.b,n=a(G,Mf,r);return v(No,t,ne,G4(n));case 2:var t=e.a,r=e.b,n=a(G,Mf,r);return v(No,t,ne,G4(n));case 3:var t=e.a,o=e.b;return v(No,t,ne,o);case 4:var t=e.a,o=e.b;return v(No,t,function(c){return c.sY},o);case 5:var t=e.a,o=e.b;return v(No,t,function(c){return c.sY},o);case 6:var t=e.a,o=e.b;return v(No,t,function(c){return c.sY},o);case 7:var t=e.a,o=e.b;return v(No,t,function(c){return c.sY},o);case 8:return cl;case 9:return cl;default:return cl}},O4=fl(q4),BA=function(e){var r=e;return r.p9},W4=function(e){return{$:5,a:e}},HA=l(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,o=t,c=a(A,n,r);e=o,r=c;continue e}else return r}),to=function(e){return W4(a(HA,e,P))},ba=l(function(e,r){return{$:1,a:e,b:r}}),ul={src:`
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
    `,attributes:{normal:"ad",position:"sY",tangent:"gf",uv:"gr"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},RA=l(function(e,r){switch(r.$){case 0:return a(Uh,e,r);case 1:return a(qh,e,r);case 2:return a(Yh,e,r);case 3:return a(Nh,e,r);case 4:return a(Gh,e,r);default:return a(Oh,e,r)}}),EA=l(function(e,r){switch(r.$){case 0:return a(hh,e,r);case 1:return a(gh,e,r);case 2:return a(_h,e,r);case 3:return a(yh,e,r);case 4:return a(Ch,e,r);case 5:return a(Ph,e,r);case 6:return a(Sh,e,r);case 7:return a(kh,e,r);default:return xh(e)}}),Re=ph,Jc={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bq",constantAmbientOcclusion:"bt",constantMaterialColor:"d9",enabledLights:"ac",lights12:"fO",lights34:"hk",lights56:"hl",lights78:"hm",materialColorTexture:"eJ",normalMapTexture:"bA",normalMapType:"bB",sceneProperties:"l",viewMatrix:"m"}},J4=l(function(e,r){return{$:2,a:e,b:r}}),UA=l(function(e,r){return B1}),Z4=fh,ma=function(e){var r=Z4(e);return r===1?ba:r?J4:UA},FY=ne,qA=1029,YA=function(e){return{$:5,a:e}},X4=function(e){var r=e;return YA(r)},Go=X4(qA),NA=1028,Oo=X4(NA),rr=x(function(e,r,n){return r===1?e?a(A,Go,n):a(A,Oo,n):n}),K4=uh,St=th,aa=function(e){var r=K4(e),n=r.ut,t=r.kF,o=r.e9,c=r.dY;return C(St,c*n,o*n,t*n,n)},Zc=C(St,0,0,0,0),GA=Ae(function(e,r,n,t,o,c,i,f){if(e.$){var s=e.a,d=e.b;return v(ma,s,c,Ae(function(b,g,p,y,_,k,L,w){var I=L.a,R=L.b;return V(Re,v(rr,y,f,w),ul,Jc,i,{bq:r,bt:n,d9:aa(s),ac:R,fO:I.fO,hk:I.hk,hl:I.hl,hm:I.hm,eJ:d,i:p,j:g,bA:t,bB:o,k,l:b,m:_})}))}else{var $=e.a;return a(ba,c,Ae(function(b,g,p,y,_,k,L,w){var I=L.a,R=L.b;return V(Re,v(rr,y,f,w),ul,Jc,i,{bq:r,bt:n,d9:Zc,ac:R,fO:I.fO,hk:I.hk,hl:I.hl,hm:I.hm,eJ:$,i:p,j:g,bA:t,bB:o,k,l:b,m:_})}))}}),Xc={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bq",baseColorTexture:"d1",constantAmbientOcclusion:"bt",constantBaseColor:"d7",constantMetallic:"ea",constantRoughness:"eb",enabledLights:"ac",lights12:"fO",lights34:"hk",lights56:"hl",lights78:"hm",metallicTexture:"eK",normalMapTexture:"bA",normalMapType:"bB",roughnessTexture:"eV",sceneProperties:"l",viewMatrix:"m"}},OA=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return function(d){return function(b){if(e.$){var p=e.a,y=e.b;return v(ma,p,s,Ae(function(_,k,L,w,I,R,B,Y){var W=B.a,Q=B.b;return V(Re,v(rr,w,b,Y),ul,Xc,d,{bq:c,d1:y,bt:i,d7:aa(p),ea:o,eb:n,ac:Q,fO:W.fO,hk:W.hk,hl:W.hl,hm:W.hm,eK:t,i:L,j:k,bA:f,bB:$,k:R,eV:r,l:_,m:I})}))}else{var g=e.a;return a(ba,s,Ae(function(_,k,L,w,I,R,B,Y){var W=B.a,Q=B.b;return V(Re,v(rr,w,b,Y),ul,Xc,d,{bq:c,d1:g,bt:i,d7:Zc,ea:o,eb:n,ac:Q,fO:W.fO,hk:W.hk,hl:W.hl,hm:W.hm,eK:t,i:L,j:k,bA:f,bB:$,k:R,eV:r,l:_,m:I})}))}}}}}}}}}}}}},Q4={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"gM"}},ep={src:`
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
    `,attributes:{position:"sY",uv:"gr"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},W1=J(function(e,r,n,t){return a(ba,r,Ae(function(o,c,i,f,$,s,d,b){return V(Re,v(rr,f,t,b),ep,Q4,n,{gM:e,i,j:c,k:s,l:o,m:$})}))}),J1={src:`
        precision lowp float;
        
        uniform lowp vec4 constantColor;
        
        void main () {
            gl_FragColor = constantColor;
        }
    `,attributes:{},uniforms:{constantColor:"d8"}},rp={src:`
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
    `,attributes:{position:"sY"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},kt=J(function(e,r,n,t){return v(ma,e,r,Ae(function(o,c,i,f,$,s,d,b){return V(Re,v(rr,f,t,b),rp,J1,n,{d8:aa(e),i,j:c,k:s,l:o,m:$})}))}),ap=l(function(e,r){return{$:4,a:e,b:r}}),WA={src:`
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
    `,attributes:{},uniforms:{constantColor:"d8",pointRadius:"hI",sceneProperties:"l"}},np={src:`
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
    `,attributes:{position:"sY"},uniforms:{modelMatrix:"i",modelScale:"j",pointRadius:"hI",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},JA=J(function(e,r,n,t){return a(ap,n,Ae(function(o,c,i,f,$,s,d,b){return V(Re,b,np,WA,t,{d8:aa(e),i,j:c,hI:r,k:s,l:o,m:$})}))}),Z1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eg",sceneProperties:"l"}},Kc=function(e){var r=e;return r},$l=lh,xt=Le(function(e,r,n,t,o){return a(ba,n,Ae(function(c,i,f,$,s,d,b,g){return V(Re,v(rr,$,o,g),rp,Z1,t,{eg:a($l,Kc(r),e),i:f,j:i,k:d,l:c,m:s})}))}),ZA={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eg",pointRadius:"hI",sceneProperties:"l"}},XA=Le(function(e,r,n,t,o){return a(ap,t,Ae(function(c,i,f,$,s,d,b,g){return V(Re,g,np,ZA,o,{eg:a($l,Kc(r),e),i:f,j:i,hI:n,k:d,l:c,m:s})}))}),X1={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"d_",enabledLights:"ac",lights12:"fO",lights34:"hk",lights56:"hl",lights78:"hm",materialColor:"jk",sceneProperties:"l",viewMatrix:"m"}},tp={src:`
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
    `,attributes:{normal:"ad",position:"sY"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},ll=Le(function(e,r,n,t,o){return v(ma,e,n,Ae(function(c,i,f,$,s,d,b,g){var p=b.a,y=b.b;return V(Re,v(rr,$,o,g),tp,X1,t,{d_:r,ac:y,fO:p.fO,hk:p.hk,hl:p.hl,hm:p.hm,jk:aa(e),i:f,j:i,k:d,l:c,m:s})}))}),K1={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"d_",baseColor:"o7",enabledLights:"ac",lights12:"fO",lights34:"hk",lights56:"hl",lights78:"hm",metallic:"hs",roughness:"hR",sceneProperties:"l",viewMatrix:"m"}},vl=zt(function(e,r,n,t,o,c,i){return v(ma,e,o,Ae(function(f,$,s,d,b,g,p,y){var _=p.a,k=p.b;return V(Re,v(rr,d,i,y),tp,K1,c,{d_:t,o7:aa(e),ac:k,fO:_.fO,hk:_.hk,hl:_.hl,hm:_.hm,hs:n,i:s,j:$,k:g,hR:r,l:f,m:b})}))}),KA=l(function(e,r){return{$:0,a:e,b:r}}),Q1=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Qc=l(function(e,r){return{$:1,a:e,b:r}}),op=function(e){return{$:0,a:e}},Lr=K7,es=function(e){return a(Lr,e,1)},sl=a(Lr,0,0),pa=l(function(e,r){if(r.$){var t=r.a.U;return h(t,sl)}else{var n=r.a;return h(e,es(n))}}),Wo=l(function(e,r){if(r.$){var n=r.a.qO,t=r.a.U;return h(t,(function(){return n?-1:1})())}else return h(e,0)}),rs=x(function(e,r,n){var t=H(e,r,n);if(t.a.$===1){var o=t.a.a.U;return v(Q1,op(o),a(pa,o,r),a(Wo,o,n))}else if(t.b.$){var c=t.a.a,o=t.b.a.U;return v(Q1,a(Qc,c,o),a(pa,o,r),a(Wo,o,n))}else if(t.c.$){var c=t.a.a,o=t.c.a.U;return v(Q1,a(Qc,c,o),a(pa,o,r),a(Wo,o,n))}else{var c=t.a.a,i=t.b.a,f=t.c;return a(KA,c,i)}}),QA=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Hf=Le(function(e,r,n,t,o){return{$:1,a:e,b:r,c:n,d:t,e:o}}),eF=Le(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),as=Le(function(e,r,n,t,o){var c=V(eF,e,r,n,t,o);if(c.a.$===1){var i=c.a.a.U;return V(Hf,op(i),a(pa,i,r),a(pa,i,n),a(pa,i,t),a(Wo,i,o))}else if(c.b.$){var f=c.a.a,i=c.b.a.U;return V(Hf,a(Qc,f,i),h(i,sl),a(pa,i,n),a(pa,i,t),a(Wo,i,o))}else if(c.c.$){var f=c.a.a,i=c.c.a.U;return V(Hf,a(Qc,f,i),a(pa,i,r),h(i,sl),a(pa,i,t),a(Wo,i,o))}else if(c.d.$){var f=c.a.a,i=c.d.a.U;return V(Hf,a(Qc,f,i),a(pa,i,r),a(pa,i,n),h(i,sl),a(Wo,i,o))}else if(c.e.$){var f=c.a.a,i=c.e.a.U;return V(Hf,a(Qc,f,i),a(pa,i,r),a(pa,i,n),a(pa,i,t),h(i,1))}else{var f=c.a.a,$=c.b.a,s=c.c.a,d=c.d.a,b=c.e;return C(QA,f,$,s,d)}}),cp={src:`
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
    `,attributes:{},uniforms:{backlight:"it",colorTexture:"gM",sceneProperties:"l"}},ns=Le(function(e,r,n,t,o){return a(ba,n,Ae(function(c,i,f,$,s,d,b,g){return V(Re,v(rr,$,o,g),ep,cp,t,{it:Kc(r),gM:e,i:f,j:i,k:d,l:c,m:s})}))}),dl={src:`
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
    `,attributes:{normal:"ad",position:"sY",uv:"gr"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",viewMatrix:"m"}},rF=zr(function(e,r,n,t,o,c){if(e.$){var f=e.a,$=e.b;return v(ma,f,t,Ae(function(s,d,b,g,p,y,_,k){var L=_.a,w=_.b;return V(Re,v(rr,g,c,k),dl,Jc,o,{bq:r,bt:n,d9:aa(f),ac:w,fO:L.fO,hk:L.hk,hl:L.hl,hm:L.hm,eJ:$,i:b,j:d,bA:$,bB:0,k:y,l:s,m:p})}))}else{var i=e.a;return a(ba,t,Ae(function(s,d,b,g,p,y,_,k){var L=_.a,w=_.b;return V(Re,v(rr,g,c,k),dl,Jc,o,{bq:r,bt:n,d9:Zc,ac:w,fO:L.fO,hk:L.hk,hl:L.hl,hm:L.hm,eJ:i,i:b,j:d,bA:i,bB:0,k:y,l:s,m:p})}))}}),aF=Ae(function(e,r,n,t,o,c,i,f){if(e.$){var s=e.a,d=e.b;return v(ma,s,c,Ae(function(b,g,p,y,_,k,L,w){var I=L.a,R=L.b;return V(Re,v(rr,y,f,w),dl,Xc,i,{bq:d,d1:d,bt:es(1),d7:aa(s),ea:o,eb:n,ac:R,fO:I.fO,hk:I.hk,hl:I.hl,hm:I.hm,eK:t,i:p,j:g,bA:d,bB:0,k,eV:r,l:b,m:_})}))}else{var $=e.a;return a(ba,c,Ae(function(b,g,p,y,_,k,L,w){var I=L.a,R=L.b;return V(Re,v(rr,y,f,w),dl,Xc,i,{bq:$,d1:$,bt:es(1),d7:Zc,ea:o,eb:n,ac:R,fO:I.fO,hk:I.hk,hl:I.hl,hm:I.hm,eK:t,i:p,j:g,bA:$,bB:0,k,eV:r,l:b,m:_})}))}}),nF=function(e){var r=e,n=r,t=n.mZ,o=n.mV,c=n.r_,i=n.rM,f=n.r$,$=n.rN;return{dY:t+.5*(o-t),e9:c+.5*(i-c),kF:f+.5*($-f)}},tF=function(e){var r=e;return r.mV},oF=function(e){var r=e;return r.rM},ip=function(e){var r=e;return r.rN},cF=function(e){var r=e;return r.mZ},iF=function(e){var r=e;return r.r_},fp=function(e){var r=e;return r.r$},ei=l(function(e,r){var n=e,t=r;return t-n}),up=function(e){return H(a(ei,cF(e),tF(e)),a(ei,iF(e),oF(e)),a(ei,fp(e),ip(e)))},Ve=function(e){var r=up(e),n=r.a,t=r.b,o=r.c;return{py:Uo(nF(e)),q1:n/2,q2:t/2,q3:o/2}},Rf=l(function(e,r){switch(e.$){case 0:if(e.b.$){var f=e.a,$=e.b.a.U;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:var o=r.a,i=r.c,t=r.d;return C(W1,$,Ve(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return C(W1,$,Ve(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return C(W1,$,Ve(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}else{var n=e.b.a;switch(r.$){case 0:return $e;case 1:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ve(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ve(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ve(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ve(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ve(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ve(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return C(kt,n,Ve(o),i,t);case 8:var o=r.a,i=r.c;return C(kt,n,Ve(o),i,0);case 9:var o=r.a,i=r.c;return C(kt,n,Ve(o),i,0);default:var o=r.a,c=r.b,i=r.d;return C(JA,n,c,Ve(o),i)}}case 1:if(e.b.$){var b=e.a,$=e.b.a.U,d=e.c;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:var o=r.a,i=r.c,t=r.d;return V(ns,$,d,Ve(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return V(ns,$,d,Ve(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return V(ns,$,d,Ve(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}else{var s=e.b.a,d=e.c;switch(r.$){case 0:return $e;case 1:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Ve(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Ve(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Ve(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Ve(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Ve(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Ve(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return V(xt,s,d,Ve(o),i,t);case 8:var o=r.a,i=r.c;return V(xt,s,d,Ve(o),i,0);case 9:var o=r.a,i=r.c;return V(xt,s,d,Ve(o),i,0);default:var o=r.a,c=r.b,i=r.d;return V(XA,s,d,c,Ve(o),i)}}case 2:var g=e.a,p=e.b,ze=e.c,ar=e.d,y=v(rs,p,ze,ar);if(y.$){var w=y.a,I=y.b,R=I.a,B=I.b,Y=y.c,W=Y.a,Q=Y.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:return $e;case 6:var o=r.a,i=r.c,L=r.d;return Cr(rF,w,R,B,Ve(o),i,L);case 7:var o=r.a,i=r.c,L=r.d;return Mt(GA,w,R,B,W,Q,Ve(o),i,L);case 8:return $e;case 9:return $e;default:return $e}}else{var _=y.a,k=y.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:var o=r.a,i=r.c,L=r.d;return V(ll,_,k,Ve(o),i,L);case 3:return $e;case 4:var o=r.a,i=r.c,L=r.d;return V(ll,_,k,Ve(o),i,L);case 5:return $e;case 6:var o=r.a,i=r.c,L=r.d;return V(ll,_,k,Ve(o),i,L);case 7:var o=r.a,i=r.c,L=r.d;return V(ll,_,k,Ve(o),i,L);case 8:return $e;case 9:return $e;default:return $e}}default:var ue=e.a,ve=e.b,Pe=e.c,Me=e.d,ze=e.e,ar=e.f,ee=V(as,ve,Pe,Me,ze,ar);if(ee.$){var yr=ee.a,qe=ee.b,or=qe.a,Tr=qe.b,Ur=ee.c,ja=Ur.a,Ba=Ur.b,Mn=ee.d,R=Mn.a,B=Mn.b,ir=ee.e,W=ir.a,Q=ir.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:return $e;case 6:var o=r.a,i=r.c,t=r.d;return Mt(aF,yr,or,Tr,ja,Ba,Ve(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return OA(yr)(or)(Tr)(ja)(Ba)(R)(B)(W)(Q)(Ve(o))(i)(t);case 8:return $e;case 9:return $e;default:return $e}}else{var Ee=ee.a,Ze=ee.b,Oe=ee.c,k=ee.d;switch(r.$){case 0:return $e;case 1:return $e;case 2:var o=r.a,i=r.c,t=r.d;return Nr(vl,Ee,Ze,Oe,k,Ve(o),i,t);case 3:return $e;case 4:var o=r.a,i=r.c,t=r.d;return Nr(vl,Ee,Ze,Oe,k,Ve(o),i,t);case 5:return $e;case 6:var o=r.a,i=r.c,t=r.d;return Nr(vl,Ee,Ze,Oe,k,Ve(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return Nr(vl,Ee,Ze,Oe,k,Ve(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}}}),Ef=function(e){return{$:3,a:e}},$p=l(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.py;return{py:{dY:n*c.dY,e9:t*c.e9,kF:o*c.kF},q1:n*r.q1,q2:t*r.q2,q3:o*r.q3}}),lp=$h,ts=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){var d=e.a,b=e.b,g=e.c,p=K4(t),y=p.ut,_=p.kF,k=p.e9,L=p.dY,w=lp({ut:y,dY:L*d,e9:k*b,kF:_*g});return Mt(r,n,w,o,c,i,f,$,s)}}}}}}}}}},os=l(function(e,r){switch(r.$){case 0:return B1;case 6:var n=r.a,t=r.b;return a(qo,n,a(os,e,t));case 1:var o=r.a,c=r.b;return a(ba,a($p,e,o),a(ts,e,c));case 2:var o=r.a,c=r.b;return a(J4,a($p,e,o),a(ts,e,c));case 4:return r;case 3:var c=r.a;return Ef(a(ts,e,c));default:var i=r.a;return W4(a(G,os(e),i))}}),bl=l(function(e,r){var n=r;return a(os,e,n)}),ml={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},IY=ne,ri=519,VY=ne,vp=7683,sp=7682,ha=7680,fF=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return function(d){return{$:2,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:f,i:$,j:s,k:d}}}}}}}}}}}},cs=x(function(e,r,n){var t=e.kE,o=e.jj,c=e.hN,i=l(function(s,d){var b=s;return d(b)}),f=l(function(s,d){var b=s;return d(b)}),$=function(s){return a(Ie,i(s.gg),a(Ie,f(s.fy),a(Ie,f(s.gv),f(s.gw))))};return a($,n,a($,r,v(fF,c,o,t)))}),uF=v(cs,{jj:0,hN:0,kE:15},{fy:ha,gg:ri,gv:ha,gw:vp},{fy:ha,gg:ri,gv:ha,gw:sp}),$F=v(cs,{jj:0,hN:0,kE:15},{fy:ha,gg:ri,gv:ha,gw:sp},{fy:ha,gg:ri,gv:ha,gw:vp}),pl=l(function(e,r){return e?a(A,$F,r):a(A,uF,r)}),lF={src:`
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
    `,attributes:{normal:"ad",position:"sY"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",shadowLight:"h_",viewMatrix:"m"}},vF=function(e){if(e.$){var r=e.c;return D(Ae(function(n,t,o,c,i,f,$,s){return V(Re,a(pl,c,s),lF,ml,r,{i:o,j:t,k:f,l:n,h_:$,m:i})}))}else return z},Jo=function(e){var r=vF(e);if(r.$)return $e;var n=r.a;return Ef(n)},sF=J(function(e,r,n,t){var o=a(Rf,n,q4),c=(function(){var d=h(e,r);return d.a?d.b?to(u([o,Jo(O4)])):o:d.b?Jo(O4):$e})(),i=BA(t),f=i.a,$=i.b,s=i.c;return a(Q$,_A(t),a(bl,H(f,$,s),c))}),dF=l(function(e,r){return C(sF,!0,!0,e,r)}),BY=ne,wa=function(e){var r=e;return xe(r)},is=l(function(e,r){var n=e,t=r;return oe(t,n)>-1}),fs=l(function(e,r){var n=e,t=r;return n+.5*(t-n)}),bF=Qn({dY:-1,e9:0,kF:0}),mF=Qn({dY:0,e9:-1,kF:0}),dp=Qn({dY:0,e9:0,kF:-1}),bp=Qn({dY:1,e9:0,kF:0}),Uf=Qn({dY:0,e9:1,kF:0}),pF=zr(function(e,r,n,t,o,c){var i=a(is,n,c)?R1:dp,f=a(is,r,o)?Uf:mF,$=a(is,e,t)?bp:bF,s=H(wa(a(ei,e,t)),wa(a(ei,r,o)),wa(a(ei,n,c))),d=v(Pt,a(fs,e,t),a(fs,r,o),a(fs,n,c)),b=el({aY:d,uC:$,uL:f,uR:i});return{o0:b,p9:s}}),hF=l(function(e,r){return Cr(pF,Df(e),Af(e),Ff(e),Df(r),Af(r),Ff(r))}),br=x(function(e,r,n){return{dY:e,e9:r,kF:n}}),mp=l(function(e,r){var n=r.a,t=r.b,o=r.c,c=H(n/2,t/2,o/2),i=c.a,f=c.b,$=c.c;return a(dF,e,a(hF,v(br,-i,-f,-$),v(br,i,f,$)))}),HY=ne,gF=x(function(e,r,n){return{O:a(rl,e,r),fN:wa(n.fN),s1:wa(n.s1)}}),_F=function(e){var r=e;return r.O},pp=e8,hp=Q9,gp=l(function(e,r){var n=Hn(e),t=Dr-Hn(r.af)-n,o=v(pp,Dr,r.af,e);return t<0?{ap:a(A,ac(o),r.ap),W:r.W+1,af:v(hp,t,n,e)}:t?{ap:r.ap,W:r.W,af:o}:{ap:a(A,ac(o),r.ap),W:r.W+1,af:uo}}),_p=l(function(e,r){var n=r.a,t=r.c,o=r.d,c=Hn(e),i=Dr-Hn(o)-c,f=v(pp,Dr,o,e),$=a(kv,f,r);if(i<0){var s=v(hp,i,c,e);return a(kv,s,$)}else return $}),ai=X9,yF=function(e){var r=e.a,n=e.c,t=e.d,o=l(function(c,i){if(c.$)return a(A,c,i);var f=c.a;return v(ai,o,i,f)});return{ap:v(ai,o,P,n),W:r/Dr|0,af:t}},CF=l(function(e,r){var n=e.d,t=r.a,o=r.c,c=r.d;if(oe(t,Dr*4)<1){var i=l(function(f,$){if(f.$){var d=f.a;return a(_p,d,$)}else{var s=f.a;return v(ai,i,$,s)}});return a(_p,c,v(ai,i,e,o))}else{var i=l(function($,s){if($.$){var b=$.a;return a(gp,b,s)}else{var d=$.a;return v(ai,i,s,d)}});return a(g0,!0,a(gp,c,v(ai,i,yF(e),o)))}}),PF=l(function(e,r){var n=Vf(e),t=If(e),o=Vf(r),c=la(o),i=l(function(s,d){var b=s.a,g=s.b,p=s.c;return a(A,H(b+c,g+c,p+c),d)}),f=If(r),$=v(se,i,f,t);return{aF:$,kB:a(CF,o,n)}}),hl={aF:P,kB:p0},yp=function(e){var r=e;return{aF:Be(r.aF),kB:r.kB}},us=function(e){if(e.b){var r=e.a,n=e.b;return yp(v(se,PF,yp(r),n))}else return hl},SF=l(function(e,r){var n=e.ad,t=e.sY;return a(A,{ad:tl(n),sY:et(t)},r)}),Cp=eh,Pp=rh,Sp=ah,kF=zt(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var f=i.a,$=i.b,s=Sp(f.sY),d=Pp(f.sY),b=Cp(f.sY),g=a(Ye,e,b),p=a(we,r,b),y=a(Ye,n,d),_=a(we,t,d),k=a(Ye,o,s),L=a(we,c,s),w=$;e=g,r=p,n=y,t=_,o=k,c=L,i=w;continue e}else return V4({mV:r,rM:t,rN:c,mZ:e,r_:n,r$:o})}),kp=l(function(e,r){var n=Sp(e.sY),t=Pp(e.sY),o=Cp(e.sY);return Nr(kF,o,o,t,t,n,n,r)}),xp=function(e){var r=v(d0,SF,P,Vf(e));if(r.b){var n=r.a,t=r.b,o=a(Wc,r,If(e)),c=a(kp,n,t);return C(F4,c,e,o,0)}else return U1},xF=Le(function(e,r,n,t,o){e:for(;;){var c=t(r/n),i=a(A,c,o);if(ie(r,e))return i;var f=e,$=r-1,s=n,d=t,b=i;e=f,r=$,n=s,t=d,o=b;continue e}}),gl=l(function(e,r){return e<1?P:V(xF,0,e-1,e,r,P)}),_l=l(function(e,r){var n=Pr(r);return n>=2?{aF:a(G,function(t){return ie(t,n-1)?H(0,n,1):H(0,1+t,2+t)},a(Vn,0,n-1)),kB:ki(a(A,e,r))}:hl}),wF=zr(function(e,r,n,t,o,c){e:for(;;){var i=a(Xr,r,t+1),f=r*a(Xr,n,o+1),$=r*o,s=f+i,d=$+i,b=f+t,g=$+t,p=H(g,d,s),y=H(g,s,b),_=a(A,p,a(A,y,c));if(t>0){var k=e,L=r,w=n,I=t-1,R=o,B=_;e=k,r=L,n=w,t=I,o=R,c=B;continue e}else if(o>0){var k=e,L=r,w=n,I=e-1,R=o-1,B=_;e=k,r=L,n=w,t=I,o=R,c=B;continue e}else return _}}),wp=Le(function(e,r,n,t,o){return n<=1||t<=1?hl:{aF:Cr(wF,e,n,t,e-1,r-1,P),kB:a(_0,n*t,function(c){return a(o,a(Xr,n,c),c/n|0)})}}),jF=x(function(e,r,n){return V(wp,e,r,e+1,r,n)}),jp=Le(function(e,r,n,t,o){return a(n,t/e,o/r)}),LF=x(function(e,r,n){return v(jF,e,r,v(jp,e,r,n))}),at=function(e){return e},Zo=function(e){return e},Lp=(function(){var e=v(LF,1,72,l(function(f,$){var s=2*ka*$,d=xn(s),b=kn(s);return{ad:Zo({dY:b,e9:-d,kF:0}),sY:at({dY:b,e9:-d,kF:f-.5})}})),r=Zo({dY:0,e9:0,kF:1}),n={ad:r,sY:at({dY:0,e9:0,kF:.5})},t=a(_l,n,a(gl,72,function(f){var $=2*ka*f;return{ad:r,sY:at({dY:kn($),e9:xn($),kF:.5})}})),o=Zo({dY:0,e9:0,kF:-1}),c={ad:o,sY:at({dY:0,e9:0,kF:-.5})},i=a(_l,c,a(gl,72,function(f){var $=2*ka*f;return{ad:o,sY:at({dY:kn($),e9:-xn($),kF:-.5})}}));return nl(xp(us(u([t,i,e]))))})(),Tp=fl(Lp),TF=function(e){var r=e,n=xe(r.kF),t=xe(r.e9),o=xe(r.dY);if(oe(o,t)<1)if(oe(o,n)<1){var c=mn(r.kF*r.kF+r.e9*r.e9);return{dY:0,e9:-r.kF/c,kF:r.e9/c}}else{var c=mn(r.e9*r.e9+r.dY*r.dY);return{dY:-r.e9/c,e9:r.dY/c,kF:0}}else if(oe(t,n)<1){var c=mn(r.kF*r.kF+r.dY*r.dY);return{dY:r.kF/c,e9:0,kF:-r.dY/c}}else{var c=mn(r.dY*r.dY+r.e9*r.e9);return{dY:-r.e9/c,e9:r.dY/c,kF:0}}},$s=function(e){var r=TF(e),n=r,t=n,o=e,c=o,i={dY:c.e9*t.kF-c.kF*t.e9,e9:c.kF*t.dY-c.dY*t.kF,kF:c.dY*t.e9-c.e9*t.dY};return h(r,i)},zp=function(e){var r=x4(e),n=$s(r),t=n.a,o=n.b;return el({aY:w4(e),uC:t,uL:o,uR:r})},zF=function(e){var r=e;return r.fN},MF=function(e){var r=e;return r.s1},DF=J(function(e,r,n,t){var o=zp(_F(t)),c=a(Rf,n,Lp),i=(function(){var b=h(e,r);return b.a?b.b?to(u([c,Jo(Tp)])):c:b.b?Jo(Tp):$e})(),f=MF(t),$=f,s=zF(t),d=s;return a(Q$,o,a(bl,H($,$,d),i))}),AF=l(function(e,r){return C(DF,!0,!0,e,r)}),ls=x(function(e,r,n){return a(AF,e,v(gF,wn,Uf,{fN:Va(n),s1:Va(r)}))}),vs=function(e){return to(e)},ni=vs,ss=function(e){var r=e.a,n=e.b,t=e.c;return M4(v(L4,r,n,t))},ds=function(e){return ss(H(0,e,0))},FF=function(e){var r=e;return r.py},IF=function(e){var r=e;return r.s1},VF=function(e){var r=e;return r},BF=l(function(e,r){var n=e.tX,t=e.gf,o=e.gr,c=e.ad,i=e.sY,f=VF(t),$=n?-1:1,s=o,d=s.a,b=s.b,g={ad:tl(c),sY:et(i),gf:lp({ut:$,dY:f.dY,e9:f.e9,kF:f.kF}),gr:a(Lr,d,b)};return a(A,g,r)}),HF=function(e){var r=v(d0,BF,P,Vf(e));if(r.b){var n=r.a,t=r.b,o=a(Wc,r,If(e)),c=a(kp,n,t);return C(I4,c,e,o,0)}else return U1},RF=x(function(e,r,n){return V(wp,e,r,e+1,r+1,n)}),EF=x(function(e,r,n){return v(RF,e,r,v(jp,e,r,n))}),UF=nl(HF(v(EF,72,72,l(function(e,r){var n=2*ka*e,t=xn(n),o=-ka/2+ka*r,c=xn(o),i=kn(n),f=kn(o),$={dY:f*i,e9:f*t,kF:c};return{ad:Zo($),sY:at($),gf:Zo({dY:-t,e9:i,kF:0}),tX:!0,gr:h(e,r)}})))),yl=72,Cl=2*yl,qF=l(function(e,r){e:for(;;){var n=Cl+1,t=a(Xr,Cl,2*e+3),o=a(Xr,Cl,2*e+2),c=2*e+1,i=2*e,f=Cl,$=a(A,H(f,i,o),a(A,H(i,t,o),a(A,H(i,c,t),a(A,H(c,n,t),r))));if(e){var s=e-1,d=$;e=s,r=d;continue e}else return $}}),YF=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),NF=l(function(e,r){e:for(;;){var n=v(YF,0,2*ka,e/yl),t={gA:n,hy:0,hL:1},o={gA:n,hy:1,hL:1},c=a(A,t,a(A,o,r));if(e){var i=e-1,f=c;e=i,r=f;continue e}else return c}}),GF=(function(){var e=a(NF,yl-1,u([{gA:0,hy:0,hL:0},{gA:0,hy:1,hL:0}])),r=a(qF,yl-1,P);return a(Wc,e,r)})(),OF={src:`
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
    `,attributes:{angle:"gA",offsetScale:"hy",radiusScale:"hL"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",shadowLight:"h_",viewMatrix:"m"}},Mp=function(e){return Ef(Ae(function(r,n,t,o,c,i,f,$){return V(Re,a(pl,!0,$),OF,ml,GF,{i:t,j:n,k:i,l:r,h_:f,m:c})}))},WF=J(function(e,r,n,t){var o=a(Rf,n,UF),c=(function(){var $=h(e,r);return $.a?$.b?to(u([o,Mp(t)])):o:$.b?Mp(t):$e})(),i=IF(t),f=i;return a(z4,a(ol,wn,FF(t)),a(bl,H(f,f,f),c))}),JF=l(function(e,r){return C(WF,!0,!0,e,r)}),bs=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Dp=J(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),ms=zr(function(e,r,n,t,o,c){return{$:3,a:e,b:r,c:n,d:t,e:o,f:c}}),ps=l(function(e,r){return{$:0,a:e,b:r}}),ZF=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(ps,n,t);case 1:var n=e.a,t=e.b,r=e.c;return v(bs,n,t,r);case 2:var n=e.a,t=e.b,i=e.c,f=e.d;return C(Dp,n,t,i,f);default:var n=e.a,t=e.b,o=e.c,c=e.d,i=e.e,f=e.f;return Cr(ms,n,t,o,c,i,f)}},XF=ZF,KF=l(function(e,r){return a(JF,XF(e),r)}),RY=ne,QF=l(function(e,r){return{py:r,s1:wa(e)}}),hs=l(function(e,r){return a(KF,e,a(QF,Va(r),wn))}),EY=ne,qf=function(e){return e},UY=ne,gs=function(e){return v(mr,0,1,e<=.04045?e/12.92:a(bn,(e+.055)/1.055,2.4))},Ap=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return{oS:o,pb:t,q$:n,s5:r}},Yf=function(e){var r=Ap(e),n=r.oS,t=r.pb,o=r.q$,c=r.s5;return C(St,gs(c),gs(o),gs(t),n)},Fp=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Nf=oh,Gf=ch,Of=ih,eI=function(e){var r=e,n=Nf(r),t=Gf(r),o=Of(r);return C(Fp,.4124*n+.3576*t+.1805*o,.2126*n+.7152*t+.0722*o,.0193*n+.1192*t+.9505*o,Z4(r))},rI=function(e){return eI(Yf(e))},Ip=function(e){var r=rI(e),n=r.a,t=r.b,o=r.c,c=n+t+o;return qf({dY:n/c,e9:t/c})},wt=function(e){return{$:0,a:e}},qY=0,aI=l(function(e,r){var n=e,t=r.e9,o=r.dY;return C(Fp,n*o/t,n,n*(1-o-t)/t,1)}),nI=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return C(St,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t,o)},Wf=l(function(e,r){return nI(a(aI,e,r))}),tI=l(function(e,r){var n=a(Wf,Y1(1),e);return v(bs,0,wt(n),r)}),Pl=function(e){return e},oI=J(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),_s=J(function(e,r,n,t){var o=H(e,r,n),c=o.a,i=o.b,f=o.c,$=f<=.5?f*(i+1):f+i-f*i,s=f*2-$,d=function(y){var _=y<0?y+1:y>1?y-1:y;return _*6<1?s+($-s)*_*6:_*2<1?$:_*3<2?s+($-s)*(2/3-_)*6:s},b=d(c-1/3),g=d(c),p=d(c+1/3);return C(oI,p,g,b,t)}),ti=function(e){return C(_s,e.aS,e.a0,e.D,e.oS)},cI=l(function(e,r){return a(tI,Ip(ti(r)),Pl(e))}),ys={$:0},iI=function(e){var r=e.hs,n=e.hR,t=e.o7;return Cr(ms,0,wt(Yf(t)),wt(v(mr,0,1,n)),wt(v(mr,0,1,r)),wt(1),ys)},fI=l(function(e,r){var n=e.hs,t=e.hR;return iI({o7:ti(r),hs:n,hR:t})}),Vp=function(e){var r=Ap(e),n=r.oS,t=r.pb,o=r.q$,c=r.s5;return C(St,c,o,t,n)},uI=function(e){return a(ps,0,wt(Vp(e)))},$I=function(e){return uI(ti(e))},jn=function(e){var r=e.bU;switch(r.$){case 0:return $I(e.lc);case 1:var n=r.a.hs,t=r.a.hR;return a(fI,{hs:n,hR:t},e.lc);default:var o=r.a.jq;return a(cI,o,e.lc)}},Xo=function(e){return wt(e)},Jf=l(function(e,r){if(r.$){var t=r.a;return s3(t)}else{var n=r.a;return wt(e(n))}}),Bp=function(e){return a(ps,0,a(Jf,Vp,e))},lI=l(function(e,r){return v(bs,0,a(Jf,Yf,e),r)}),vI=function(e){var r=e.hs,n=e.hR,t=e.o7;return Cr(ms,0,a(Jf,Yf,t),a(Jf,a(mr,0,1),n),a(Jf,a(mr,0,1),r),Xo(1),ys)},Cs=function(e){return C(_s,e.aS,e.a0,e.D,e.oS)},oi=l(function(e,r){var n=(function(){var f=r.bV;if(f.$)return Xo(Cs(r.lc));if(f.a.$)return a(e$,"[textured-surface] FromAtlas textures in 3D Surface are deferred. Rendering as fallback colour.",Xo(Cs(r.lc)));var $=f.a.a.by;return a(te,Xo(Cs(r.lc)),a(Ke,$,e.mR))})(),t=r.bU;switch(t.$){case 0:return Bp(n);case 1:var o=t.a.hs,c=t.a.hR;return vI({o7:n,hs:Xo(o),hR:Xo(c)});default:var i=t.a.jq;return a(lI,n,Pl(i))}}),sI=x(function(e,r,n){var t=F(e,{bV:z}),o=a(oi,{mR:He},t),c=jn(t),i=a(we,0,n-2*r),f=i/2;return ni(u([v(ls,c,r,i),a(ds,f,a(hs,o,r)),a(ds,-f,a(hs,o,r))]))}),dI=function(e){var r=e;return r.O},Hp=(function(){var e={ad:N1,sY:at({dY:0,e9:0,kF:1})},r=Zo({dY:0,e9:0,kF:-1}),n=.5*mn(2),t=a(_l,e,a(gl,72,function(i){var f=2*ka*i,$=xn(f),s=kn(f);return{ad:Zo({dY:s*n,e9:$*n,kF:n}),sY:at({dY:s,e9:$,kF:0})}})),o={ad:r,sY:wn},c=a(_l,o,a(gl,72,function(i){var f=2*ka*i,$=xn(f),s=kn(f);return{ad:r,sY:at({dY:s,e9:-$,kF:0})}}));return nl(xp(us(u([c,t]))))})(),Rp=fl(Hp),bI=function(e){var r=e;return r.fN},mI=function(e){var r=e;return r.s1},pI=J(function(e,r,n,t){var o=zp(dI(t)),c=a(Rf,n,Hp),i=(function(){var b=h(e,r);return b.a?b.b?to(u([c,Jo(Rp)])):c:b.b?Jo(Rp):$e})(),f=mI(t),$=f,s=bI(t),d=s;return a(Q$,o,a(bl,H($,$,d),i))}),hI=l(function(e,r){return C(pI,!0,!0,e,r)}),YY=ne,gI=x(function(e,r,n){return{O:a(rl,e,r),fN:wa(n.fN),s1:wa(n.s1)}}),_I=x(function(e,r,n){var t=n/2;return a(hI,e,v(gI,v(br,0,-t,0),Uf,{fN:Va(n),s1:Va(r)}))}),Ps=x(function(e,r,n){return vs(u([a(Rf,e,r),Jo(n)]))}),yI=function(e){return e},CI=function(e){return U4(a(G,yI,Y4(e)))},PI=l(function(e,r){if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a,c=t.b;return{aF:a(G,function(i){return H(0,1+i,2+i)},a(Vn,0,Pr(c))),kB:ki(a(A,e,r))}}else return hl}),SI=function(e){return v(br,e.dY,e.e9,e.kF)},kI=function(e){var r=a(G,SI,e);if(r.b&&r.b.b&&r.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,f=c.b;return D(a(PI,n,a(A,o,a(A,i,f))))}else return z},xI=function(e){var r=a(wr,kI,e);if(r.b){var n=r,t=CI(us(n));return D({rQ:t,j7:fl(t)})}else return z},Zf=l(function(e,r){var n=xI(u([r]));if(n.$===1)return ni(P);var t=n.a.j7,o=n.a.rQ;return v(Ps,e,o,t)}),wI=l(function(e,r){return a(mp,e,H(r,r,r))}),jI=x(function(e,r,n){var t=2*ka/e,o=a(G,function(c){return a(g4,t*c,v(Zr,0,n,0))},a(Vn,0,e-1));return a(Zf,r,o)}),LI=zt(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var f=i.a,$=i.b,s=f,d=s.kF,b=s.e9,g=s.dY,p=a(Ye,g,e),y=a(we,g,r),_=a(Ye,b,n),k=a(we,b,t),L=a(Ye,d,o),w=a(we,d,c),I=$;e=p,r=y,n=_,t=k,o=L,c=w,i=I;continue e}else return{mV:r,rM:t,rN:c,mZ:e,r_:n,r$:o}}),TI=l(function(e,r){var n=e,t=n.kF,o=n.e9,c=n.dY;return Nr(LI,c,c,o,o,t,t,r)}),Ep={src:`
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
    `,attributes:{quadVertex:"hK"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},Ln=dh,Tn=J(function(e,r,n,t){var o=rt(t),c=rt(n),i=rt(r),f=rt(e);return Ln({mA:f.dY,mB:i.dY,mC:c.dY,mD:o.dY,mE:f.e9,mF:i.e9,mG:c.e9,mH:o.e9,mI:f.kF,mJ:i.kF,mK:c.kF,mL:o.kF,mM:0,mN:0,mO:0,mP:0})}),Up=l(function(e,r){return{$:0,a:e,b:r}}),zI=Up({lu:1,l1:0,m0:6}),nt=zI(u([{hK:v(Bf,0,0,0)},{hK:v(Bf,1,0,1)},{hK:v(Bf,1,1,2)},{hK:v(Bf,0,1,3)}])),qp={src:`
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
    `,attributes:{quadVertex:"hK"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},Sl={src:`
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
    `,attributes:{quadVertex:"hK"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},Yp={src:`
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
    `,attributes:{quadVertex:"hK"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",viewMatrix:"m"}},MI=Le(function(e,r,n,t,o){var c=a(TI,r,u([n,t,o])),i=Ve(c);switch(e.$){case 0:if(e.b.$){var $=e.a,s=e.b.a.U;return a(ba,i,Ae(function(jt,Dn,Ha,Ra,qr,Yr,ta,Er){return V(Re,v(rr,Ra,0,Er),Yp,Q4,nt,{gM:s,i:Ha,j:Dn,k:Yr,bR:C(Tn,r,n,t,o),l:jt,m:qr})}))}else{var f=e.b.a;return v(ma,f,i,Ae(function(jt,Dn,Ha,Ra,qr,Yr,ta,Er){return V(Re,v(rr,Ra,0,Er),Ep,J1,nt,{d8:aa(f),i:Ha,j:Dn,k:Yr,bR:C(Tn,r,n,t,o),l:jt,m:qr})}))}case 1:if(e.b.$){var g=e.a,s=e.b.a.U,b=e.c;return a(ba,i,Ae(function(Ha,Ra,qr,Yr,ta,Er,oa,ca){return V(Re,v(rr,Yr,0,ca),Yp,cp,nt,{it:Kc(b),gM:s,i:qr,j:Ra,k:Er,bR:C(Tn,r,n,t,o),l:Ha,m:ta})}))}else{var d=e.b.a,b=e.c;return a(ba,i,Ae(function(jt,Dn,Ha,Ra,qr,Yr,ta,Er){return V(Re,v(rr,Ra,0,Er),Ep,Z1,nt,{it:b,eg:a($l,Kc(b),d),i:Ha,j:Dn,k:Yr,bR:C(Tn,r,n,t,o),l:jt,m:qr})}))}case 2:var p=e.a,y=e.b,Oe=e.c,yr=e.d,_=v(rs,y,Oe,yr);if(_.$)if(_.a.$){var ue=_.a,ve=ue.a,Pe=ue.b,Me=_.b,R=Me.a,B=Me.b,ze=_.c,W=ze.a,Q=ze.b;return v(ma,ve,i,Ae(function(qr,Yr,ta,Er,oa,ca,Lt,Qf){var An=Lt.a,eu=Lt.b;return V(Re,v(rr,Er,0,Qf),Sl,Jc,nt,{bq:R,bt:B,d9:aa(ve),ac:eu,fO:An.fO,hk:An.hk,hl:An.hl,hm:An.hm,eJ:Pe,i:ta,j:Yr,bA:W,bB:Q,k:ca,bR:C(Tn,r,n,t,o),l:qr,m:oa})}))}else{var w=_.a.a,I=_.b,R=I.a,B=I.b,Y=_.c,W=Y.a,Q=Y.b;return a(ba,i,Ae(function(jt,Dn,Ha,Ra,qr,Yr,ta,Er){var oa=ta.a,ca=ta.b;return V(Re,v(rr,Ra,0,Er),Sl,Jc,nt,{bq:R,bt:B,d9:Zc,ac:ca,fO:oa.fO,hk:oa.hk,hl:oa.hl,hm:oa.hm,eJ:w,i:Ha,j:Dn,bA:W,bB:Q,k:Yr,bR:C(Tn,r,n,t,o),l:jt,m:qr})}))}else{var k=_.a,L=_.b;return v(ma,k,i,Ae(function(jt,Dn,Ha,Ra,qr,Yr,ta,Er){var oa=ta.a,ca=ta.b;return V(Re,v(rr,Ra,0,Er),qp,X1,nt,{d_:L,ac:ca,fO:oa.fO,hk:oa.hk,hl:oa.hl,hm:oa.hm,jk:aa(k),i:Ha,j:Dn,k:Yr,bR:C(Tn,r,n,t,o),l:jt,m:qr})}))}default:var ar=e.a,ee=e.b,Ee=e.c,Ze=e.d,Oe=e.e,yr=e.f,qe=V(as,ee,Ee,Ze,Oe,yr);if(qe.$)if(qe.a.$){var vi=qe.a,V9=vi.a,Pe=vi.b,B9=qe.b,Mn=B9.a,ir=B9.b,H9=qe.c,Qo=H9.a,ot=H9.b,R9=qe.d,R=R9.a,B=R9.b,E9=qe.e,W=E9.a,Q=E9.b;return v(ma,V9,i,Ae(function(ca,Lt,Qf,An,eu,zH,U9,MH){var Bl=U9.a,DH=U9.b;return V(Re,v(rr,An,0,MH),Sl,Xc,nt,{bq:R,d1:Pe,bt:B,d7:aa(V9),ea:ot,eb:ir,ac:DH,fO:Bl.fO,hk:Bl.hk,hl:Bl.hl,hm:Bl.hm,eK:Qo,i:Qf,j:Lt,bA:W,bB:Q,k:zH,bR:C(Tn,r,n,t,o),eV:Mn,l:ca,m:eu})}))}else{var ja=qe.a.a,Ba=qe.b,Mn=Ba.a,ir=Ba.b,tt=qe.c,Qo=tt.a,ot=tt.b,li=qe.d,R=li.a,B=li.b,Vl=qe.e,W=Vl.a,Q=Vl.b;return a(ba,i,Ae(function(qr,Yr,ta,Er,oa,ca,Lt,Qf){var An=Lt.a,eu=Lt.b;return V(Re,v(rr,Er,0,Qf),Sl,Xc,nt,{bq:R,d1:ja,bt:B,d7:Zc,ea:ot,eb:ir,ac:eu,fO:An.fO,hk:An.hk,hl:An.hl,hm:An.hm,eK:Qo,i:ta,j:Yr,bA:W,bB:Q,k:ca,bR:C(Tn,r,n,t,o),eV:Mn,l:qr,m:oa})}))}else{var or=qe.a,Tr=qe.b,Ur=qe.c,L=qe.d;return v(ma,or,i,Ae(function(Dn,Ha,Ra,qr,Yr,ta,Er,oa){var ca=Er.a,Lt=Er.b;return V(Re,v(rr,qr,0,oa),qp,K1,nt,{d_:L,o7:aa(or),ac:Lt,fO:ca.fO,hk:ca.hk,hl:ca.hl,hm:ca.hm,hs:Ur,i:Ra,j:Ha,k:ta,bR:C(Tn,r,n,t,o),hR:Tr,l:Dn,m:Yr})}))}}}),DI=(function(){var e=u([{da:a(Lr,0,1)},{da:a(Lr,1,1)},{da:a(Lr,2,1)},{da:a(Lr,3,1)},{da:a(Lr,0,-1)},{da:a(Lr,1,-1)},{da:a(Lr,2,-1)},{da:a(Lr,3,-1)}]),r=u([H(0,1,2),H(0,2,3),H(4,6,5),H(4,7,6),H(4,5,1),H(1,0,4),H(5,6,2),H(2,1,5),H(6,7,3),H(3,2,6),H(7,4,0),H(0,3,7)]);return a(Wc,e,r)})(),AI={src:`
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
    `,attributes:{quadShadowVertex:"da"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",quadVertexPositions:"bR",sceneProperties:"l",shadowLight:"h_",viewMatrix:"m"}},Np=J(function(e,r,n,t){return Ef(Ae(function(o,c,i,f,$,s,d,b){return V(Re,a(pl,f,b),AI,ml,DI,{i,j:c,k:s,bR:C(Tn,e,r,n,t),l:o,h_:d,m:$})}))}),FI=zt(function(e,r,n,t,o,c,i){var f=V(MI,n,t,o,c,i),$=h(e,r);return $.a?$.b?to(u([f,C(Np,t,o,c,i)])):f:$.b?C(Np,t,o,c,i):$e}),kl=Le(function(e,r,n,t,o){return Nr(FI,!0,!1,e,r,n,t,o)}),II=x(function(e,r,n){var t=r/2,o=n/2,c=l(function(i,f){return v(br,i,f,0)});return V(kl,Bp(e),a(c,-t,-o),a(c,t,-o),a(c,t,o),a(c,-t,o))}),Ss=function(e){return{$:1,a:e}},VI=function(e){return C(Dp,0,wt(Yf(e)),Xo(1),ys)},BI=function(e){return VI(ti(e))},Gp=function(e){return ss(H(e,0,0))},HI=function(e){return ss(H(0,0,e))},Op=Uf,RI=a(rl,wn,Op),EI=l(function(e,r){return v(H1,RI,Gc(e),r)}),Wp=l(function(e,r){return v(H1,j4,Gc(e),r)}),UI=j8,Jp=T8,qI=function(e){var r=e.a,n=e.b,t=e.c,o=sb(H(r,n,t));return{o1:a(Jp,n,r),ri:UI(t/o),s1:o}},Zp=x(function(e,r,n){var t=n.a,o=n.b,c=H(o.dY-t.dY,o.e9-t.e9,o.kF-t.kF),i=c.a,f=c.b,$=c.c,s=qI(H(i,f,$)),d=s.ri,b=s.o1,g=s.s1;return a(HI,t.kF,a(ds,t.e9,a(Gp,t.dY,a(Wp,b,a(EI,d-lf(90),a(Gp,g/2,a(Wp,lf(90),v(ls,e,r/2,g))))))))}),YI=x(function(e,r,n){var t=l(function(o,c){e:for(;;)switch(o.$){case 0:var i=o.a;return F(c,{fn:D(i)});case 1:var i=o.a,f=c.fn;if(f.$===1)return F(c,{fn:D(i)});var $=f.a;return{gy:a(A,v(Zp,BI(e),r,h($,i)),c.gy),fn:D(i)};case 2:var s=o.a.t7,b=Ss(s),g=c;o=b,c=g;continue e;case 3:var d=o.a.qu,b=Ss(d),g=c;o=b,c=g;continue e;default:var d=o.a.qu,b=Ss(d),g=c;o=b,c=g;continue e}});return Be(v(se,t,{gy:P,fn:z},n).gy)}),NI=x(function(e,r,n){if(r.b){var t=r.a,o=r.b;return ni(v(Jd,l(function(c,i){return a(Zf,e,u([c,i,a(vo,H(0,0,-n),i),a(vo,H(0,0,-n),c)]))}),r,Z(o,u([t]))))}else return ni(P)}),GI=x(function(e,r,n){var t=r/2,o=n/2;return V(kl,e,v(br,-t,-o,0),v(br,t,-o,0),v(br,t,o,0),v(br,-t,o,0))}),OI=function(e){var r=e;return!r.$&&r.a.$===1},WI=l(function(e,r){var n=r;if(n.$)return vs(P);if(n.a.$){var t=n.a.a.j7,o=n.a.a.rQ;return v(Ps,e.t$,o,t)}else{var t=n.a.a.j7,o=n.a.a.rQ;return v(Ps,e.ud,o,t)}}),Xp={src:`
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
    `,attributes:{triangleVertex:"kv"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",triangleVertexPositions:"gn",viewMatrix:"m"}},Kp={src:`
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
    `,attributes:{triangleVertex:"kv"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",triangleVertexPositions:"gn",viewMatrix:"m"}},Xf=function(e){var r=Mf(e),n=r.a,t=r.b,o=r.c,c=rt(n),i=rt(t),f=rt(o);return Ln({mA:c.dY,mB:i.dY,mC:f.dY,mD:0,mE:c.e9,mF:i.e9,mG:f.e9,mH:0,mI:c.kF,mJ:i.kF,mK:f.kF,mL:0,mM:0,mN:0,mO:0,mP:0})},xl=E4(u([H({kv:0},{kv:1},{kv:2})])),JI=l(function(e,r){var n=B4(r),t=Ve(n);switch(e.$){case 0:if(e.b.$){var c=e.a,i=e.b.a.U;return $e}else{var o=e.b.a;return v(ma,o,t,Ae(function(ue,ve,Pe,Me,ze,ar,ee,Ee){return V(Re,v(rr,Me,0,Ee),Xp,J1,xl,{d8:aa(o),i:Pe,j:ve,k:ar,l:ue,gn:Xf(r),m:ze})}))}case 1:if(e.b.$){var s=e.a;return $e}else{var f=e.b.a,$=e.c;return a(ba,t,Ae(function(ue,ve,Pe,Me,ze,ar,ee,Ee){return V(Re,v(rr,Me,0,Ee),Xp,Z1,xl,{eg:a($l,Kc($),f),i:Pe,j:ve,k:ar,l:ue,gn:Xf(r),m:ze})}))}case 2:var d=e.a,b=e.b,I=e.c,R=e.d,g=v(rs,b,I,R);if(g.$)return $e;var p=g.a,y=g.b;return v(ma,p,t,Ae(function(ue,ve,Pe,Me,ze,ar,ee,Ee){var Ze=ee.a,Oe=ee.b;return V(Re,v(rr,Me,0,Ee),Kp,X1,xl,{d_:y,ac:Oe,fO:Ze.fO,hk:Ze.hk,hl:Ze.hl,hm:Ze.hm,jk:aa(p),i:Pe,j:ve,k:ar,l:ue,gn:Xf(r),m:ze})}));default:var _=e.a,k=e.b,L=e.c,w=e.d,I=e.e,R=e.f,B=V(as,k,L,w,I,R);if(B.$)return $e;var Y=B.a,W=B.b,Q=B.c,y=B.d;return v(ma,Y,t,Ae(function(ve,Pe,Me,ze,ar,ee,Ee,Ze){var Oe=Ee.a,yr=Ee.b;return V(Re,v(rr,ze,0,Ze),Kp,K1,xl,{d_:y,o7:aa(Y),ac:yr,fO:Oe.fO,hk:Oe.hk,hl:Oe.hl,hm:Oe.hm,hs:Q,i:Me,j:Pe,k:ee,hR:W,l:ve,gn:Xf(r),m:ar})}))}}),ZI=(function(){var e=u([{e3:a(Lr,0,1)},{e3:a(Lr,1,1)},{e3:a(Lr,2,1)},{e3:a(Lr,0,-1)},{e3:a(Lr,1,-1)},{e3:a(Lr,2,-1)}]),r=u([H(0,1,2),H(3,5,4),H(3,4,1),H(3,1,0),H(4,5,2),H(4,2,1),H(5,3,0),H(5,0,2)]);return a(Wc,e,r)})(),XI={src:`
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
    `,attributes:{triangleShadowVertex:"e3"},uniforms:{modelMatrix:"i",modelScale:"j",projectionMatrix:"k",sceneProperties:"l",shadowLight:"h_",triangleVertexPositions:"gn",viewMatrix:"m"}},Qp=function(e){return Ef(Ae(function(r,n,t,o,c,i,f,$){return V(Re,a(pl,o,$),XI,ml,ZI,{i:t,j:n,k:i,l:r,h_:f,gn:Xf(e),m:c})}))},KI=J(function(e,r,n,t){var o=a(JI,n,t),c=h(e,r);return c.a?c.b?to(u([o,Qp(t)])):o:c.b?Qp(t):$e}),QI=l(function(e,r){return C(KI,!0,!0,e,r)}),eV=l(function(e,r){var n=r.a,t=r.b,o=r.c;return a(QI,e,v(Ia,v(br,n.dY,n.e9,n.kF),v(br,t.dY,t.e9,t.kF),v(br,o.dY,o.e9,o.kF)))}),zn=x(function(e,r,n){var t=r.bV;return t.$?n:a(e$,"[textured-surface] Textured Surface on "+(e+" is deferred. Rendering as fallback colour."),n)}),rV=l(function(e,r){e:for(;;){var n=r.a,t=r.b,o=function(ir){return D(a(E1,n,ir))};switch(t.$){case 0:var y=t.a.hb,Pe=t.a.ie,ee=t.a.tU;return o(v(GI,a(oi,e,ee),Pe,y));case 1:var ve=t.a.s1,ee=t.a.tU;return o(v(zn,"Disc",ee,v(jI,48,jn(ee),ve)));case 2:var ue=t.a.fN,ve=t.a.s1,ee=t.a.tU;return o(v(zn,"Capsule",ee,v(sI,ee,ve,ue)));case 3:var _=t.a.kB,ee=t.a.tU;if(_.b&&_.b.b&&_.b.b.b&&_.b.b.b.b&&!_.b.b.b.b.b){var c=_.a,i=_.b,f=i.a,$=i.b,s=$.a,d=$.b,b=d.a;return o(V(kl,a(oi,e,ee),v(br,c.dY,c.e9,c.kF),v(br,f.dY,f.e9,f.kF),v(br,s.dY,s.e9,s.kF),v(br,b.dY,b.e9,b.kF)))}else return o(v(zn,"polygon ("+(Xe(Pr(_))+"-vertex)"),ee,a(Zf,jn(ee),_)));case 10:var g=t.a.Z,ee=t.a.tU;return o(v(zn,"Cube",ee,a(wI,jn(ee),g)));case 11:var ve=t.a.s1,ee=t.a.tU;return o(a(hs,a(oi,e,ee),ve));case 12:var ue=t.a.fN,ve=t.a.s1,ee=t.a.tU;return o(v(zn,"Cylinder",ee,v(ls,jn(ee),ve,ue)));case 13:var p=t.a.p9,ee=t.a.tU;return o(v(zn,"Block",ee,a(mp,jn(ee),p)));case 14:var _=t.a.kB,ee=t.a.tU;return o(v(zn,"Triangle",ee,a(eV,jn(ee),_)));case 15:var y=t.a.hb,_=t.a.kB,ee=t.a.tU,k=a(oi,e,ee),L=F(ee,{bV:z}),w=y/2,I=a(G,function(ir){return F(ir,{kF:ir.kF+w})},_),R=jn(L),B=(function(){if(_.b&&_.b.b&&_.b.b.b&&_.b.b.b.b&&!_.b.b.b.b.b){var ir=_.a,tt=_.b,Qo=tt.a,ot=tt.b,li=ot.a,Vl=ot.b,vi=Vl.a;return V(kl,k,v(br,ir.dY,ir.e9,ir.kF+w),v(br,Qo.dY,Qo.e9,Qo.kF+w),v(br,li.dY,li.e9,li.kF+w),v(br,vi.dY,vi.e9,vi.kF+w))}else return v(zn,"polygon-with-walls top ("+(Xe(Pr(_))+"-vertex)"),ee,a(Zf,R,I))})(),Y=v(NI,R,I,y),W=a(G,function(ir){return F(ir,{kF:ir.kF-w})},_),Q=a(Zf,R,Be(W));return o(ni(u([B,Q,Y])));case 16:var ue=t.a.fN,ve=t.a.s1,ee=t.a.tU;return o(v(zn,"Cone",ee,v(_I,jn(ee),ve,ue)));case 17:var Pe=t.a.ie,Me=t.a.qu,ze=t.a.dc,ee=t.a.tU;return o(v(zn,"Line",ee,v(Zp,jn(ee),Pe,h(ze,Me))));case 18:var ar=t.a.rR,ee=t.a.tU;return a(de,function(ir){var tt=a(WI,{t$:a(oi,e,ee),ud:jn(ee)},ir);return a(E1,n,OI(ir)?tt:v(zn,"welded mesh",ee,tt))},a(Ke,ar,e.rS));case 4:var Ee=t.a.nX,Ze=t.a.hn,Oe=t.a.g2,yr=t.a.h1;if(yr.$)return a(e$,"[LeafPath] fill-only LeafPath in 3D is deferred; no stroke colour set",z);var qe=yr.a;return o(ni(v(YI,qe,Ze,Ee)));case 5:var or=t.a,Tr=or.hN;if(Tr.$)return z;var Ur=Tr.a.by;return a(de,function(ir){return a(E1,n,v(II,ir,or.ie,or.hb))},a(Ke,Ur,e.mR));case 6:var ja=t.a.rp,Ba=e,Mn=h(n,ja);e=Ba,r=Mn;continue e;case 7:return z;case 8:return z;case 9:return z;case 19:return z;case 20:return z;default:return z}}}),aV=l(function(e,r){return a(wr,rV(e),S4(r))}),ks=function(e){return{$:6,a:e}},nV=function(e){return{$:0,a:e}},tV=function(e){return{$:1,a:e}},oV=function(e){return{$:2,a:e}},xs=l(function(e,r){return a(C4,e.gm,a(_4,e.f2,a(y4,e.f4,r)))}),cV=function(e){return e},ci=function(e){return e},wl=function(e){return C(_s,e.aS,e.a0,e.D,e.oS)},e9=l(function(e,r){var n=e,t=r,o=t.kF-n.kF,c=t.e9-n.e9,i=t.dY-n.dY,f=a(we,xe(i),a(we,xe(c),xe(o)));if(f){var $=o/f,s=c/f,d=i/f,b=mn(d*d+s*s+$*$);return D({dY:d/b,e9:s/b,kF:$/b})}else return z}),iV=l(function(e,r){var n=a(xs,e,r),t=a(xs,e,v(Zr,0,0,0)),o=v(Zr,n.dY-t.dY,n.e9-t.e9,n.kF-t.kF);return a(te,dp,a(e9,wn,v(br,o.dY,o.e9,o.kF)))}),fV=function(e){var r=e.a,n=e.b;switch(n.$){case 19:var o=n.a;return D(nV({t:!0,a:ks(wl(o.lc)),ed:a(iV,r,o.ed),i4:ci(o.i4)}));case 20:var o=n.a,t=a(xs,r,o.sY);return D(tV({t:!0,a:ks(wl(o.lc)),i4:cV(o.i4),sY:v(br,t.dY,t.e9,t.kF)}));case 21:var o=n.a;return D(oV({a:ks(wl(o.uf)),l7:ci(o.i4),l8:ci(o.i4),ug:R1}));default:return z}},uV=function(e){return a(wr,fV,S4(e))},NY=ne,jl=function(e){return e},$V=function(e){return{$:0,a:e}},lV=$V,vV={$:3},sV=vV,dV=J(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),bV=dV,mV=function(e){return{$:1,a:e}},pV=mV,hV=function(e){return a(iu,"height",Xe(e))},gV=Cu,_V=function(e){return{$:2,a:e}},yV=_V,CV=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,c=function(f){return Vr(f*1e3)/1e3},i=function(f){return Vr(f*1e4)/100};return y5(u(["rgba(",N(i(r)),"%,",N(i(n)),"%,",N(i(t)),"%,",N(c(o)),")"]))},PV=x(function(e,r,n){return v(Eh,e,r,n)}),r9=function(e){var r=e;return r},ga=C(St,1,1,1,1),_r=x(function(e,r,n){return a(G,function(t){return a(t,r,n)},e)}),SV=function(e){return Ln({mA:e.ag,mB:e.aj,mC:e.am,mD:e.aZ,mE:e.ah,mF:e.ak,mG:e.an,mH:e.a_,mI:e.ai,mJ:e.al,mK:e.ao,mL:e.a$,mM:0,mN:0,mO:0,mP:1})},Ll=Le(function(e,r,n,t,o){var c=t.mi?1:-1,i=C(St,t.f4,t.f4,t.f4,c);return Cr(o,e,i,SV(t),t.mi,r,n)}),a9=zr(function(e,r,n,t,o,c){e:for(;;)switch(o.$){case 0:return c;case 6:var i=o.a,f=o.b,$=e,s=r,d=n,b=a(k4,i,t),g=f,p=c;e=$,r=s,n=d,t=b,o=g,c=p;continue e;case 1:var y=o.b,_=a(A,V(Ll,e,r,n,t,y),c.aJ);return{aJ:_,bh:c.bh,tt:c.tt,N:c.N};case 2:var y=o.b,_=a(A,V(Ll,e,r,n,t,y),c.N);return{aJ:c.aJ,bh:c.bh,tt:c.tt,N:_};case 4:var k=o.b,L=a(A,V(Ll,e,r,n,t,k),c.bh);return{aJ:c.aJ,bh:L,tt:c.tt,N:c.N};case 3:var w=o.a,I=a(A,V(Ll,e,r,n,t,w),c.tt);return{aJ:c.aJ,bh:c.bh,tt:I,N:c.N};default:var R=o.a;return v(se,C(a9,e,r,n,t),c,R)}}),n9=function(e){var r=e;return-r},kV=l(function(e,r){var n=e,t=r;return t+n}),Ko=0,xV=function(e){var r=e,n=a(we,xe(r.dY),a(we,xe(r.e9),xe(r.kF)));if(n){var t=r.kF/n,o=r.e9/n,c=r.dY/n,i=mn(c*c+o*o+t*t);return i*n}else return Ko},wV=x(function(e,r,n){var t=e,o=r,c=n;return{dY:t,e9:o,kF:c}}),t9=function(e){var r=up(e),n=r.a,t=r.b,o=r.c;return xV(v(wV,n,t,o))},jV=l(function(e,r){var n=a(Ct,.99,a(Yo,wa(e),n9(ip(r)))),t=a(Ct,1.01,a(kV,t9(r),n9(fp(r))));return h(n,t)}),LV=J(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),ws=LV,Tl=J(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),TV=function(e){var r=e.b7,n=e.cb,t=e.cu;return C(Tl,518,t,n,r)},zV=l(function(e,r){return{$:6,a:e,b:r}}),MV=zV,o9=u([TV({b7:1,cb:0,cu:!1}),C(ws,!1,!1,!1,!1),a(MV,0,1)]),js=8,c9=15,ii=7681,DV={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},AV=Up({lu:1,l1:0,m0:5}),FV=AV(u([{sY:a(Lr,-1,-1)},{sY:a(Lr,1,-1)},{sY:a(Lr,-1,1)},{sY:a(Lr,1,1)}])),IV={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"sY"},uniforms:{}},Ls=function(e){return v(cs,{jj:e.jj,hN:e.hN,kE:e.kE},{fy:e.fy,gg:e.gg,gv:e.gv,gw:e.gw},{fy:e.fy,gg:e.gg,gv:e.gv,gw:e.gw})},Ts=function(e){return V(Re,u([Ls(e),C(ws,!1,!1,!1,!1)]),IV,DV,FV,{})},VV=Ts({fy:ii,jj:0,hN:js,gg:ri,kE:c9,gv:ii,gw:ii}),BV=516,i9=5386,HV=function(e){return a(bn,2,e+4)},f9=function(e){return Ts({fy:ha,jj:c9,hN:js,gg:BV,kE:HV(e),gv:i9,gw:i9})},RV=x(function(e,r,n){return gn(u([v(_r,e,n,o9),u([f9(r),VV])]))}),EV=l(function(e,r){return gn(a(Bn,RV(e),r))}),UV=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function($){return function(s){return{$:0,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:f,i:$,j:s}}}}}}}}}}},qV=function(e){var r=e.oS,n=e.lc,t=e.gx,o=e.ir,c=e.i$,i=e.jY,f=l(function($,s){var d=$.a,b=$.b,g=$.c,p=s.a,y=s.b,_=s.c;return UV(d)(b)(g)(p)(y)(_)(i)(c)(o)(t)});return a(f,n,r)},YV=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),u9=l(function(e,r){var n=e,t=r;return v(YV,32774,n,t)}),NV=l(function(e,r){return qV({gx:0,oS:a(u9,e,r),ir:0,lc:a(u9,e,r),i$:0,jY:0})}),GY=ne,GV=1,OV=771,WV={$:8},JV=WV,zl=u([a(NV,GV,OV),JV]),ZV=function(e){var r=e.b7,n=e.cb,t=e.cu;return C(Tl,513,t,n,r)},$9=ZV({b7:1,cb:0,cu:!0}),fi=a(A,$9,zl),l9=514,v9=function(e){var r=e.b7,n=e.cb,t=e.cu;return C(Tl,515,t,n,r)},s9=240,XV=a(A,v9({b7:1,cb:0,cu:!0}),a(A,Ls({fy:ha,jj:s9,hN:0,gg:l9,kE:0,gv:ha,gw:ha}),zl)),KV=function(e){var r=e.b7,n=e.cb,t=e.cu;return C(Tl,514,t,n,r)},ui=a(A,KV({b7:1,cb:0,cu:!0}),zl),zs=function(e){var r=e;return D4(r.cH)},QV=function(e){return J$(zs(e))},eB=function(e){return el({aY:at({dY:e.aZ,e9:e.a_,kF:e.a$}),uC:Qn({dY:e.ag,e9:e.ah,kF:e.ai}),uL:Qn({dY:e.aj,e9:e.ak,kF:e.al}),uR:Qn({dY:e.am,e9:e.an,kF:e.ao})})},Ms=l(function(e,r){var n=e,t=r,o=n.uR,c=o,i=n.uL,f=i,$=n.uC,s=$;return{dY:t.dY*s.dY+t.e9*s.e9+t.kF*s.kF,e9:t.dY*f.dY+t.e9*f.e9+t.kF*f.kF,kF:t.dY*c.dY+t.e9*c.e9+t.kF*c.kF}}),d9=l(function(e,r){var n=e,t=r,o=n.aY,c=o,i=t.dY-c.dY,f=t.e9-c.e9,$=t.kF-c.kF,s=n.uR,d=s,b=n.uL,g=b,p=n.uC,y=p;return{dY:i*y.dY+f*y.e9+$*y.kF,e9:i*g.dY+f*g.e9+$*g.kF,kF:i*d.dY+f*d.e9+$*d.kF}}),b9=l(function(e,r){return{aY:a(d9,e,J$(r)),uC:a(Ms,e,Z$(r)),uL:a(Ms,e,X$(r)),uR:a(Ms,e,zf(r))}}),rB=l(function(e,r){var n=r,t=n,o=e,c=o;return{mV:a(we,c.mV,t.mV),rM:a(we,c.rM,t.rM),rN:a(we,c.rN,t.rN),mZ:a(Ye,c.mZ,t.mZ),r_:a(Ye,c.r_,t.r_),r$:a(Ye,c.r$,t.r$)}}),aB=l(function(e,r){var n=r,t=n.kF,o=n.e9,c=n.dY,i=e,f=i.a,$=i.b,s=i.c,d=xe(f)/2,b=xe($)/2,g=xe(s)/2;return{mV:c+d,rM:o+b,rN:t+g,mZ:c-d,r_:o-b,r$:t-g}}),Ds=J(function(e,r,n,t){var o=n.py,c=2*n.q3*r,i=2*n.q2*r,f=2*n.q1*r,$=o.kF*r,s=o.e9*r,d=o.dY*r,b=Fa(zf(e)),g=xe(f*b.dY)+xe(i*b.e9)+xe(c*b.kF),p=Fa(X$(e)),y=xe(f*p.dY)+xe(i*p.e9)+xe(c*p.kF),_=Fa(Z$(e)),k=xe(f*_.dY)+xe(i*_.e9)+xe(c*_.kF),L=a(aB,H(k,y,g),a(d9,e,v(br,d,s,$)));if(t.$)return D(L);var w=t.a;return D(a(rB,w,L))}),As=J(function(e,r,n,t){e:for(;;)if(t.b){var o=t.a,c=t.b;switch(o.$){case 0:var p=e,y=r,_=n,k=c;e=p,r=y,n=_,t=k;continue e;case 1:var i=o.a,f=C(Ds,e,r,i,n),p=e,y=r,_=f,k=c;e=p,r=y,n=_,t=k;continue e;case 2:var i=o.a,f=C(Ds,e,r,i,n),p=e,y=r,_=f,k=c;e=p,r=y,n=_,t=k;continue e;case 3:var p=e,y=r,_=n,k=c;e=p,r=y,n=_,t=k;continue e;case 4:var i=o.a,f=C(Ds,e,r,i,n),p=e,y=r,_=f,k=c;e=p,r=y,n=_,t=k;continue e;case 5:var $=o.a,p=e,y=r,_=C(As,e,r,n,$),k=c;e=p,r=y,n=_,t=k;continue e;default:var s=o.a,d=o.b,b=a(b9,eB(s),e),g=r*s.f4,p=e,y=r,_=C(As,b,g,n,u([d])),k=c;e=p,r=y,n=_,t=k;continue e}}else return n}),nB={mi:!0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aZ:0,a_:0,a$:0,f4:1},tB=function(e){var r=e;return r},m9=Ts({fy:ii,jj:0,hN:js,gg:ri,kE:255,gv:ii,gw:ii}),OY=ne,na={ir:0,t:!1,i$:0,jS:0,jY:0,ua:0,dY:0,e9:0,kF:0},cn=l(function(e,r){var n=e,t=r;return Ln({mA:n.dY,mB:n.jY,mC:t.dY,mD:t.jY,mE:n.e9,mF:n.i$,mG:t.e9,mH:t.i$,mI:n.kF,mJ:n.ir,mK:t.kF,mL:t.ir,mM:n.ua,mN:n.jS,mO:t.ua,mP:t.jS})}),Kf=h({fO:a(cn,na,na),hk:a(cn,na,na),hl:a(cn,na,na),hm:a(cn,na,na)},C(St,0,0,0,0)),oB=function(e){var r=e;return r.el},cB=function(e){var r=e;return r.lM},p9=function(e){var r=e;return .5*r},iB=function(e){var r=e;return db(r)},h9=function(e){return iB(p9(cB(e)))},g9=function(e){var r=e;return 2*r},fB=function(e){return g9(a(Ct,h9(e),oB(e)))},uB=function(e){var r=e;return r.s0},$B=l(function(e,r){var n=r.oZ,t=r.qE,o=r.sb,c=h9(e),i=wa(o),f=i,$=wa(t),s=$,d=uB(e);if(d){var b=fB(e),g=b;return mc(s)?Ln({mA:2/(n*g),mB:0,mC:0,mD:0,mE:0,mF:2/g,mG:0,mH:0,mI:0,mJ:0,mK:0,mL:-1,mM:0,mN:0,mO:0,mP:1}):Ln({mA:2/(n*g),mB:0,mC:0,mD:0,mE:0,mF:2/g,mG:0,mH:0,mI:0,mJ:0,mK:-2/(s-f),mL:-(s+f)/(s-f),mM:0,mN:0,mO:0,mP:1})}else return mc(s)?Ln({mA:1/(n*c),mB:0,mC:0,mD:0,mE:0,mF:1/c,mG:0,mH:0,mI:0,mJ:0,mK:-1,mL:-2*f,mM:0,mN:0,mO:-1,mP:0}):Ln({mA:1/(n*c),mB:0,mC:0,mD:0,mE:0,mF:1/c,mG:0,mH:0,mI:0,mJ:0,mK:-(s+f)/(s-f),mL:-2*s*f/(s-f),mM:0,mN:0,mO:-1,mP:0})}),lB=function(e){return a(A,v9({b7:1,cb:0,cu:!0}),a(A,Ls({fy:ha,jj:s9,hN:e,gg:l9,kE:0,gv:ha,gw:ha}),zl))},Ml=l(function(e,r){return(1&e>>r)===1?0:1}),vB=x(function(e,r,n){return gn(a(G,function(t){var o=t<<4,c=C(St,a(Ml,t,0),a(Ml,t,1),a(Ml,t,2),a(Ml,t,3));return v(_r,e,h(r,c),lB(o))},a(Vn,1,a(bn,2,n)-1)))}),sB=bh,dB=bp,bB={aY:wn,uC:dB,uL:Op,uR:al},mB=function(e){var r=Uo(J$(e)),n=Fa(zf(e)),t=Fa(X$(e)),o=Fa(Z$(e));return Ln({mA:o.dY,mB:t.dY,mC:n.dY,mD:r.dY,mE:o.e9,mF:t.e9,mG:n.e9,mH:r.e9,mI:o.kF,mJ:t.kF,mK:n.kF,mL:r.kF,mM:0,mN:0,mO:0,mP:1})},pB=l(function(e,r){return mB(a(b9,zs(r),e))}),hB=function(e){return a(pB,bB,e)},$i=u([$9,C(ws,!1,!1,!1,!1)]),gB=function(e){var r=zs(e.pt),n=to(e.g_),t=n,o=C(As,r,1,z,u([t]));if(o.$===1)return P;var c=o.a,i=hB(e.pt),f=(function(){var ve=e.F;switch(ve.$){case 0:return h(0,0);case 1:return h(1,0);case 2:return h(2,0);case 3:var Pe=ve.a;return h(3,Pe);case 4:var Pe=ve.a;return h(4,Pe);default:return h(5,0)}})(),$=f.a,s=f.b,d=a(jV,e.cy,c),b=d.a,g=d.b,p=a($B,e.pt,{oZ:e.oZ,qE:g,sb:b}),y=sB(p).mP,_=y?Fa(zf(r)):rt(QV(e.pt)),k=e.B,L=k,w=a(Wf,L,e.G),I=w,R=Ln({mA:0,mB:_.dY,mC:Nf(I),mD:e.oa,mE:0,mF:_.e9,mG:Gf(I),mH:tB(t9(c)),mI:0,mJ:_.kF,mK:Of(I),mL:$,mM:0,mN:y,mO:0,mP:s}),B=Cr(a9,R,i,p,nB,t,{aJ:P,bh:P,tt:P,N:P}),Y=e.E;switch(Y.$){case 0:var W=Y.a;return gn(u([v(_r,B.aJ,h(W,ga),fi),v(_r,B.N,h(W,ga),a(A,Oo,$i)),v(_r,B.N,h(W,ga),a(A,Oo,ui)),v(_r,B.N,h(W,ga),a(A,Go,$i)),v(_r,B.N,h(W,ga),a(A,Go,ui)),v(_r,B.bh,Kf,fi)]));case 1:var W=Y.a;return gn(u([v(_r,B.aJ,Kf,fi),u([m9]),v(_r,B.tt,W.fO,o9),u([f9(0)]),v(_r,B.aJ,h(W,ga),XV),v(_r,B.N,h(W,ga),a(A,Oo,$i)),v(_r,B.N,h(W,ga),a(A,Oo,ui)),v(_r,B.N,h(W,ga),a(A,Go,$i)),v(_r,B.N,h(W,ga),a(A,Go,ui)),v(_r,B.bh,Kf,fi)]));default:var Q=Y.a,ue=Y.b;return gn(u([v(_r,B.aJ,h(ue,ga),fi),u([m9]),a(EV,B.tt,Q),v(vB,B.aJ,ue,Pr(Q)),v(_r,B.N,h(ue,ga),a(A,Oo,$i)),v(_r,B.N,h(ue,ga),a(A,Oo,ui)),v(_r,B.N,h(ue,ga),a(A,Go,$i)),v(_r,B.N,h(ue,ga),a(A,Go,ui)),v(_r,B.bh,Kf,fi)]))}},_B=function(e){return a(iu,"width",Xe(e))},_9=l(function(e,r){var n=u([pV(1),yV(0),lV(!0),C(bV,0,0,0,0)]),t=(function(){var I=e.ik;switch(I.$){case 0:return H(n,"0",1);case 1:return H(a(A,sV,n),"1",1);default:var R=I.a;return H(n,"0",R)}})(),o=t.a,c=t.b,i=t.c,f=e.p9,$=f.a,s=f.b,d=r9(s),b=a(X,"height",Xe(d)+"px"),g=r9($),p=g/d,y=a(_n,function(I){return gB({oZ:p,pt:e.pt,cy:e.cy,g_:I.g_,B:I.B,E:I.E,oa:i,F:I.F,G:I.G})},r),_=a(X,"width",Xe(g)+"px"),k=e.o3,L=k,w=CV(L);return v(gV,"div",u([a(X,"padding","0px"),_,b]),u([h(c,v(PV,o,u([_B(Vr(g*i)),hV(Vr(d*i)),_,b,a(X,"display","block"),a(X,"background-color",w)]),y))]))}),yB=function(e){return{$:2,a:e}},Fs=function(e){return yB(e)},y9=function(e){return a(_9,{ik:Fs(e.iL),o3:e.o3,pt:e.pt,cy:e.cy,p9:e.p9},u([{g_:e.g_,B:e.B,E:e.E,F:e.F,G:e.G}]))},WY=1,JY=0,CB=function(e){return{$:0,a:e}},PB=function(e){return CB(e)},Is=function(e){return e},SB=function(e){return{$:1,a:e}},kB=function(e){return SB(e)},Dl=function(e){var r=e,n=a(we,xe(r.dY),a(we,xe(r.e9),xe(r.kF)));if(n){var t=r.kF/n,o=r.e9/n,c=r.dY/n,i=mn(c*c+o*o+t*t);return D({dY:c/i,e9:o/i,kF:t/i})}else return z},xB=l(function(e,r){var n=e,t=r,o=t.kF-n.kF,c=t.e9-n.e9,i=t.dY-n.dY,f=a(we,xe(i),a(we,xe(c),xe(o)));if(f){var $=o/f,s=c/f,d=i/f,b=mn(d*d+s*s+$*$);return b*f}else return Ko}),wB=l(function(e,r){var n=e,t=r;return t.dY*n.dY+t.e9*n.e9+t.kF*n.kF}),C9=l(function(e,r){var n=e,t=r;return oe(t,n)>0}),jB=l(function(e,r){var n=e,t=r;return oe(t,n)<0}),LB=l(function(e,r){var n=e,t=r;return{dY:t.dY-n.dY,e9:t.e9-n.e9,kF:t.kF-n.kF}}),TB=l(function(e,r){var n=e,t=r,o=t.dY*n.dY+t.e9*n.e9+t.kF*n.kF;return{dY:n.dY*o,e9:n.e9*o,kF:n.kF*o}}),zB=function(e){var r=e;return{dY:-r.dY,e9:-r.e9,kF:-r.kF}},MB=x(function(e,r,n){return a(Kr,function(t){var o=a(LB,a(TB,t,r),r);return a(Kr,function(c){var i=a(q1,r,e),f=a(wB,n,i),$=a(C9,Ko,f)?i:a(jB,Ko,f)?zB(i):N1;return a(de,function(s){return H(t,c,s)},Dl($))},Dl(o))},Dl(e))}),DB=function(e){var r=e;return r},ZY=ne,Vs=ne,XY=ne,AB=l(function(e,r){var n=e,t=r;return a(Jp,n,t)}),FB=l(function(e,r){var n=e,t=r;return{dY:n.e9*t.kF-n.kF*t.e9,e9:n.kF*t.dY-n.dY*t.kF,kF:n.dY*t.e9-n.e9*t.dY}}),P9=function(e){var r=e;return r.uC},S9=function(e){var r=e;return r.uL},IB=function(e){return a(FB,P9(e),S9(e))},VB=function(e){var r=e;return r.aY},BB=function(e){return{aY:VB(e),uC:P9(e),uL:S9(e),uR:IB(e)}},HB=function(e){return{el:e.el,lM:(function(){var r=e.qQ;if(r.$){var t=r.a;return g9(a(AB,p9(t),e.el))}else{var n=r.a;return n}})(),cH:BB(e.kC),s0:e.s0}},RB=l(function(e,r){var n=$s(r),t=n.a,o=n.b;return Vs({aY:e,uC:t,uL:o})}),EB=l(function(e,r){return a(RB,r,e)}),UB=function(e){var r=a(ol,e.qI,e.qA),n=DB(e.ug),t=a(q1,r,n),o=(function(){var c=v(MB,r,n,t);if(c.$){var d=Dl(r);if(d.$){var g=$s(e.ug),p=g.a,y=g.b;return Vs({aY:e.qA,uC:y,uL:e.ug})}else{var b=d.a;return a(EB,b,e.qA)}}else{var i=c.a,f=i.a,$=i.b,s=i.c;return Vs({aY:e.qA,uC:s,uL:$})}})();return HB({el:a(xB,e.qA,e.qI),qQ:e.qQ,s0:e.s0,kC:o})},Al=function(e){return UB({qA:Is(e.qA),qI:Is(e.qI),qQ:(function(){var r=e.s0;if(r.$){var t=r.a.oC;return kB(Va(t))}else{var n=r.a.eo;return PB(Gc(n))}})(),s0:(function(){var r=e.s0;return r.$?1:0})(),ug:a(te,Uf,a(e9,wn,Is(e.ug)))})},oo=function(e){return e},qB=function(e){var r=e;return r},Bs=function(e){var r=v(mr,1667,25e3,qB(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return qf({dY:n,e9:t})},Fl=qf({dY:.31271,e9:.32902}),YB=qf({dY:.37208,e9:.37529}),NB=qf({dY:.44757,e9:.40745}),KY=ne,k9=function(e){return e},x9=Bs(k9(12e3)),w9=Bs(k9(5600)),co=function(e){switch(e.$){case 0:return Fl;case 1:return w9;case 2:return x9;case 3:return NB;case 4:return YB;case 5:var r=e.a;return Bs(r);default:var n=e.a;return Ip(n)}},QY=ne,Hs=function(e){return Pl(1.2*a(bn,2,e))},j9=function(e){return wa(e)},GB=function(e){var r=e;return r},OB=function(e){var r=e.mj,n=e.n0,t=e.lC,o=GB(n);return Hs(a(du,2,100*a(bn,t,2)/(o*r)))},WB=function(e){switch(e.$){case 0:var r=e.a;return Hs(r);case 1:var n=e.a;return j9(n);default:var t=e.a;return OB({lC:t.lC,mj:t.mj,n0:t.n0})}},JB=l(function(e,r){return{$:2,a:e,b:r}}),L9=function(e){return{$:0,a:e}},Il=function(e){var r=e;return r},ZB=function(e){var r=e;return r.t},Rs=L9(Kf.a),XB=l(function(e,r){var n=l(function(t,o){var c=o.a,i=o.b;return e(t)?h(a(A,t,c),i):h(c,a(A,t,i))});return v(Ka,n,h(P,P),r)}),KB=function(e){var r=e;return Ln({mA:r.dY,mB:r.jY,mC:0,mD:0,mE:r.e9,mF:r.i$,mG:0,mH:0,mI:r.kF,mJ:r.ir,mK:0,mL:0,mM:r.ua,mN:r.jS,mO:0,mP:0})},T9=Ae(function(e,r,n,t,o,c,i,f){var $=a(XB,ZB,u([Il(e),Il(r),Il(n),Il(t)])),s=$.a,d=$.b;if(s.b){var b=Z(s,d);if(b.b&&b.b.b&&b.b.b.b&&b.b.b.b.b&&!b.b.b.b.b.b){var g=b.a,p=b.b,y=p.a,_=p.b,k=_.a,L=_.b,w=L.a;return a(JB,a(G,KB,s),{fO:a(cn,g,y),hk:a(cn,k,w),hl:a(cn,o,c),hm:a(cn,i,f)})}else return Rs}else return L9({fO:a(cn,e,r),hk:a(cn,n,t),hl:a(cn,o,c),hm:a(cn,i,f)})}),eN=ne,Es=function(e){return e},Us=l(function(e,r){var n=e,t=Fa(r.ed),o=t.kF,c=t.e9,i=t.dY,f=a(Wf,r.i4,r.a),$=f;return{ir:Of($),t:n,i$:Gf($),jS:0,jY:Nf($),ua:1,dY:-i,e9:-c,kF:-o}}),z9=l(function(e,r){var n=e,t=Uo(r.sY),o=t.kF,c=t.e9,i=t.dY,f=a(Wf,r.i4,r.a),$=f;return{ir:Of($),t:n,i$:Gf($),jS:0,jY:Nf($),ua:2,dY:i,e9:c,kF:o}}),QB=function(e){switch(e.$){case 0:var r=e.a;return a(Us,Es(r.t),{a:co(r.a),ed:r.ed,i4:r.i4});case 1:var r=e.a;return a(z9,Es(r.t),{a:co(r.a),i4:r.i4,sY:r.sY});default:return na}},M9=function(e){var r=e;return r},D9=function(e){var r=e;return{dY:-r.dY,e9:-r.e9,kF:-r.kF}},qs=function(e){e:for(;;){if(ie(e.l7,Ko)&&ie(e.l8,Ko))return na;if(a(C9,wa(e.l7),wa(e.l8))){var r={a:e.a,l7:e.l8,l8:e.l7,ug:D9(e.ug)};e=r;continue e}else{var n=xe(M9(e.l8)/ka),t=xe(M9(e.l7)/ka),o=Fa(e.ug),c=o.kF,i=o.e9,f=o.dY,$=a(Wf,Y1(1),e.a),s=$;return{ir:t*Of(s),t:!1,i$:t*Gf(s),jS:n/t,jY:t*Nf(s),ua:3,dY:f,e9:i,kF:c}}}},eH=function(e){return qs({a:e.a,l7:e.i4,l8:e.i4,ug:al})},A9=!1,Ys=function(e){return qs({a:e.a,l7:e.i4,l8:Ko,ug:e.ug})},rH=function(e){switch(e.$){case 0:var r=e.a;return a(Us,A9,{a:co(r.a),ed:r.ed,i4:r.i4});case 1:var r=e.a;return a(z9,A9,{a:co(r.a),i4:r.i4,sY:r.sY});case 2:var r=e.a;return qs({a:co(r.a),l7:r.l7,l8:r.l8,ug:r.ug});case 3:var r=e.a;return Ys({a:co(r.a),i4:r.i4,ug:r.ug});default:var r=e.a;return eH({a:co(r.a),i4:r.i4})}},aH=function(e){var r=na,n=function(f){switch(f.$){case 0:return!0;case 1:return!0;default:return!1}},t=a(G,rH,a(qn,4,a(xr,a(er,L0,n),e))),o=function(f){return a(te,r,kr(a(qt,f,t)))},c=a(G,QB,a(qn,4,a(xr,n,e))),i=function(f){return a(te,r,kr(a(qt,f,c)))};return We(c)&&We(t)?Rs:Mt(T9,i(0),i(1),i(2),i(3),o(0),o(1),o(2),o(3))},nH={$:5},tH=nH,oH={$:0},Ns=oH,cH=function(e){return{$:4,a:e}},iH={$:2},fH=function(e){return mc(e)?iH:cH(e)},uH=function(e){return{$:3,a:e}},$H={$:1},lH=function(e){return mc(e)?$H:uH(e)},vH=function(e){switch(e.$){case 0:return Ns;case 1:var r=e.a;return lH(r);case 2:var r=e.a;return fH(r);default:return tH}},F9=l(function(e,r){return y9({o3:jl(e.A),pt:Al(e.pt),cy:Va(e.cy),iL:e.iL,p9:h(oo(Vr(e.f5.ie)),oo(Vr(e.f5.hb))),g_:r,B:WB(e.B),E:aH(e.E),F:vH(e.F),G:co(e.G)})}),sH=l(function(e,r){return y9({o3:jl(e.fh.A),pt:Al(e.pt),cy:Va(e.cy),iL:e.iL,p9:h(oo(Vr(e.f5.ie)),oo(Vr(e.f5.hb))),g_:r,B:e.fh.B,E:e.fh.E,F:e.fh.F,G:e.fh.G})}),dH=.005,bH=l(function(e,r){return a(F9,{A:e.f$.A,pt:e.pt,cy:e.cy,iL:e.iL,B:e.f$.B,E:e.f$.E,f5:e.f5,F:e.f$.F,G:e.f$.G},r)}),mH=function(e){return Va(.01*e)},I9=function(e){return a(_9,{ik:e.ik,o3:e.o3,pt:e.pt,cy:e.cy,p9:e.p9},u([{g_:e.g_,B:e.B,E:e.E,F:e.F,G:e.G}]))},pH=x(function(e,r,n){return Mt(T9,e,r,n,na,na,na,na,na)}),hH=function(e){var r=a(Us,Es(e.tt),{a:w9,ed:e.tS,i4:ci(8e4)}),n=Ys({a:x9,i4:ci(2e4),ug:e.ug}),t=Ys({a:Fl,i4:ci(15e3),ug:D9(e.ug)}),o=v(pH,r,n,t);return I9({ik:Fs(e.iL),o3:e.o3,pt:e.pt,cy:e.cy,p9:e.p9,g_:e.g_,B:Hs(15),E:o,F:Ns,G:Fl})},gH=l(function(e,r){var n=e,t=r,o=kn(t);return{dY:o*kn(n),e9:o*xn(n),kF:xn(t)}}),_H=l(function(e,r){return hH({o3:jl(ti(e.A)),pt:Al(e.pt),cy:mH(.5),iL:e.iL,p9:h(oo(Vr(e.f5.ie)),oo(Vr(e.f5.hb))),g_:r,tt:!0,tS:a(gH,Gc(e.tR),Gc(e.tT)),ug:al})}),yH=function(e){return I9({ik:Fs(e.iL),o3:e.o3,pt:e.pt,cy:e.cy,p9:e.p9,g_:e.g_,B:j9(Pl(80)),E:Rs,F:Ns,G:Fl})},CH=l(function(e,r){return yH({o3:jl(ti(e.o3)),pt:Al(e.pt),cy:Va(e.cy),iL:e.iL,p9:h(oo(Vr(e.f5.ie)),oo(Vr(e.f5.hb))),g_:r})}),PH=l(function(e,r){switch(r.$){case 0:var t=r.a;return a(_H,{A:t.o3,pt:e.pt,iL:e.f5.iL,f5:e.f5,tR:t.tR,tT:t.tT},e.g_);case 1:var t=r.a;return a(CH,{o3:t.o3,pt:e.pt,cy:dH,iL:e.f5.iL,f5:e.f5},e.g_);case 2:var t=r.a;return a(F9,{A:wl(t.o3),pt:e.pt,cy:t.cy,iL:e.f5.iL,B:t.B,E:Z(t.E,e.ov),f5:e.f5,F:t.F,G:t.G},e.g_);case 3:var t=r.a,n=t.f$;return a(bH,{pt:e.pt,cy:t.cy,iL:e.f5.iL,f$:F(n,{E:Z(n.E,e.ov)}),f5:e.f5},e.g_);default:var t=r.a;return a(sH,{fh:t.fh,pt:e.pt,cy:t.cy,iL:e.f5.iL,f5:e.f5},e.g_)}}),SH=l(function(e,r){var n=uV(r),t=a(aV,{mR:e.mR,rS:e.rS},r);return a(im,lo,a(PH,{pt:e.pt,g_:t,f5:e.f5,ov:n},e.rF))}),kH=function(e){return{$:0,a:e}},xH=function(e){return kH(e)},wH=function(e){return{iL:e.iL,hb:e.f5.hb,ie:e.f5.ie}},jH=J(function(e,r,n,t){return zD(a(SH,{pt:lb,rF:xH({o3:a(cr,function(o){return o.tU},n),tR:-lf(15),tT:-lf(45)}),mR:r.mR,rS:He,f5:wH(r)},b4(u([v(TD,e,n,t)]))))}),LH=x(function(e,r,n){var t=$b(e);return a(O,u([E(u([Qe(Ma),a(M,"touch-action","none")]))]),u([a(O,u([E(u([Qe(Ma),an(S1(1)),ye(a(K,function(o){return o.t_},r)),a(M,"display","grid"),a(M,"place-items","center"),Ce(Je(100))]))]),u([a(O,P,u([ce("Swipe or press left/right arrow keys")]))])),C(jH,t,e,r,n)]))}),TH=gD({oL:P,rb:Lg,rk:Dg,rl:Hg,ss:Rg,sw:k_,ur:LH});$7({Carousel:{Main:{init:TH(a(T,function(e){return re({rq:e})},a(S,"inputs",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(y){return a(T,function(_){return a(T,function(k){return a(T,function(L){return a(T,function(w){return a(T,function(I){return re({ph:I,pX:w,p7:L,iL:k,iO:_,qJ:y,qK:p,mn:g,sC:b,sE:d,sG:s,sI:$,sM:f,nv:i,s2:c,f5:o,tj:t,tp:n,t6:r,uv:e})},a(S,"boundingClientRects",ur(a(T,function(I){return a(T,function(R){return a(T,function(B){return re({qs:B,qS:R,to:I})},a(S,"elements",ur(a(T,function(B){return a(T,function(Y){return re({pg:Y,by:B})},a(S,"boundingClientRect",a(T,function(Y){return a(T,function(W){return a(T,function(Q){return a(T,function(ue){return re({pf:ue,eD:Q,j2:W,ia:Y})},a(S,"bottom",q))},a(S,"left",q))},a(S,"right",q))},a(S,"top",q))))},a(S,"id",Se)))))},a(S,"frameId",Se))},a(S,"scroll",a(T,function(I){return a(T,function(R){return a(T,function(B){return a(T,function(Y){return a(T,function(W){return a(T,function(Q){return re({lf:Q,lg:W,eD:Y,ia:B,oC:R,oD:I})},a(S,"contentHeight",q))},a(S,"contentWidth",q))},a(S,"left",q))},a(S,"top",q))},a(S,"viewportHeight",q))},a(S,"viewportWidth",q)))))))},a(S,"darkModeIsOn",ae))},a(S,"deviceOrientation",so(u([fc(z),a(Ne,D,a(T,function(L){return a(T,function(w){return a(T,function(I){return re({oS:I,o9:w,qW:L})},a(S,"alpha",q))},a(S,"beta",q))},a(S,"gamma",q)))]))))},a(S,"devicePixelRatio",q))},a(S,"dt",q))},a(S,"focusedElementIsContentEditable",ae))},a(S,"focusedElementIsTextInput",ae))},a(S,"keyboard",a(T,function(g){return a(T,function(p){return a(T,function(y){return a(T,function(_){return a(T,function(k){return a(T,function(L){return a(T,function(w){return a(T,function(I){return a(T,function(R){return a(T,function(B){return re({oT:B,pU:R,iN:I,qg:w,eD:L,rT:k,s_:_,j2:y,tv:p,kz:g})},a(S,"alt",ae))},a(S,"ctrl",ae))},a(S,"down",ae))},a(S,"downs",ur(Se)))},a(S,"left",ae))},a(S,"meta",ae))},a(S,"pressedKeys",ur(Se)))},a(S,"right",ae))},a(S,"shift",ae))},a(S,"up",ae))))},a(S,"operatingSystem",Se))},a(S,"pageId",Se))},a(S,"pageScroll",a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(y){return re({lf:y,lg:p,eD:g,ia:b,oC:d,oD:s})},a(S,"contentHeight",q))},a(S,"contentWidth",q))},a(S,"left",q))},a(S,"top",q))},a(S,"viewportHeight",q))},a(S,"viewportWidth",q))))},a(S,"paneBoundingBoxes",ur(a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return re({hb:g,eD:b,sJ:d,ia:s,ie:$})},a(S,"height",q))},a(S,"left",q))},a(S,"paneId",Se))},a(S,"top",q))},a(S,"width",q)))))},a(S,"persisted",ur(a(T,function(f){return a(T,function($){return re(h(f,$))},a(Un,1,Se))},a(Un,0,Se)))))},a(S,"pointer",a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(y){return a(T,function(_){return a(T,function(k){return a(T,function(L){return re({lq:L,iN:k,ls:_,lt:y,lv:p,i5:g,m3:b,nO:d,nP:s,kz:$,dY:f,e9:i})},a(S,"doubleClick",ae))},a(S,"down",ae))},a(S,"dx",q))},a(S,"dy",q))},a(S,"elementIdsForLastDown",ur(Se)))},a(S,"isDown",ae))},a(S,"move",ae))},a(S,"rightDown",ae))},a(S,"rightUp",ae))},a(S,"up",ae))},a(S,"x",q))},a(S,"y",q))))},a(S,"rawPointer",a(T,function(c){return a(T,function(i){return a(T,function(f){return a(T,function($){return a(T,function(s){return a(T,function(d){return a(T,function(b){return a(T,function(g){return a(T,function(p){return a(T,function(y){return a(T,function(_){return a(T,function(k){return re({lq:k,iN:_,ls:y,lt:p,lv:g,i5:b,m3:d,nO:s,nP:$,kz:f,dY:i,e9:c})},a(S,"doubleClick",ae))},a(S,"down",ae))},a(S,"dx",q))},a(S,"dy",q))},a(S,"elementIdsForLastDown",ur(Se)))},a(S,"isDown",ae))},a(S,"move",ae))},a(S,"rightDown",ae))},a(S,"rightUp",ae))},a(S,"up",ae))},a(S,"x",q))},a(S,"y",q))))},a(S,"screen",a(T,function(o){return a(T,function(c){return re({hb:c,ie:o})},a(S,"height",q))},a(S,"width",q))))},a(S,"screenOrientationAngle",q))},a(S,"searchParamsFromUrl",so(u([fc(z),a(Ne,D,ur(a(T,function(n){return a(T,function(t){return re(h(n,t))},a(Un,1,Se))},a(Un,0,Se))))]))))},a(S,"touches",ur(a(T,function(r){return a(T,function(n){return a(T,function(t){return re({by:t,dY:n,e9:r})},a(S,"id",xi))},a(S,"x",q))},a(S,"y",q)))))},a(S,"wheel",a(T,function(e){return a(T,function(r){return a(T,function(n){return a(T,function(t){return a(T,function(o){return re({p3:o,p4:t,qr:n,sP:r,sQ:e})},a(S,"deltaX",q))},a(S,"deltaY",q))},a(S,"elementIdsForLastWheel",ur(Se)))},a(S,"pinchDeltaForChrome",q))},a(S,"pinchScaleForSafari",so(u([fc(z),a(Ne,D,q)])))))))))(0)}}})})(this);
