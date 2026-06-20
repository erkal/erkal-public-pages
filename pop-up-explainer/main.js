(function(uc){"use strict";function qt(e,r,n){return n.a=e,n.f=r,n}function v(e){return qt(2,e,function(r){return function(n){return e(r,n)}})}function k(e){return qt(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function Z(e){return qt(4,e,function(r){return function(n){return function(t){return function(o){return e(r,n,t,o)}}}})}function ke(e){return qt(5,e,function(r){return function(n){return function(t){return function(o){return function(c){return e(r,n,t,o,c)}}}}})}function Tr(e){return qt(6,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return e(r,n,t,o,c,i)}}}}}})}function At(e){return qt(7,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return e(r,n,t,o,c,i,f)}}}}}}})}function Me(e){return qt(8,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function(u){return e(r,n,t,o,c,i,f,u)}}}}}}}})}function Ol(e){return qt(9,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function(u){return function(s){return e(r,n,t,o,c,i,f,u,s)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function l(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function x(e,r,n,t,o){return e.a===4?e.f(r,n,t,o):e(r)(n)(t)(o)}function F(e,r,n,t,o,c){return e.a===5?e.f(r,n,t,o,c):e(r)(n)(t)(o)(c)}function jr(e,r,n,t,o,c,i){return e.a===6?e.f(r,n,t,o,c,i):e(r)(n)(t)(o)(c)(i)}function Xr(e,r,n,t,o,c,i,f){return e.a===7?e.f(r,n,t,o,c,i,f):e(r)(n)(t)(o)(c)(i)(f)}function $o(e,r,n,t,o,c,i,f,u){return e.a===8?e.f(r,n,t,o,c,i,f,u):e(r)(n)(t)(o)(c)(i)(f)(u)}function oU(e,r,n,t,o,c,i,f,u,s){return e.a===9?e.f(r,n,t,o,c,i,f,u,s):e(r)(n)(t)(o)(c)(i)(f)(u)(s)}var d6=[];function p6(e){return[e]}function b6(e){return e.length}var m6=k(function(e,r,n){for(var t=new Array(e),o=0;o<e;o++)t[o]=n(r+o);return t}),h6=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,P(n,r)}),g6=v(function(e,r){return r[e]}),_6=k(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=n[c];return o[e]=r,o}),y6=v(function(e,r){for(var n=r.length,t=new Array(n+1),o=0;o<n;o++)t[o]=r[o];return t[n]=e,t}),C6=k(function(e,r,n){for(var t=n.length,o=0;o<t;o++)r=a(e,n[o],r);return r}),P6=k(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r}),cU=v(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=e(r[o]);return t}),iU=k(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=a(e,r+c,n[c]);return o}),S6=k(function(e,r,n){return n.slice(e,r)}),x6=k(function(e,r,n){var t=r.length,o=e-t;o>n.length&&(o=n.length);for(var c=t+o,i=new Array(c),f=0;f<t;f++)i[f]=r[f];for(var f=0;f<o;f++)i[f+t]=n[f];return i}),fU=v(function(e,r){return r}),uU=v(function(e,r){return console.log(e+": "+ud(r)),r}),$U=k(function(e,r,n){return r(n)}),lU=k(function(e,r,n){performance.mark("s:"+e);var t=r(n);return performance.mark("e:"+e),t});function vU(e,r){return function(n){bn(8,e,r,n)}}function sU(e,r,n){return function(t){bn(9,e,r,n,t)}}function ud(e){return"<internals>"}function dU(e){return ut(!1,e)}function ut(e,r){if(typeof r=="function")return uu(e,"<function>");if(typeof r=="boolean")return ji(e,r?"True":"False");if(typeof r=="number")return j6(e,r+"");if(r instanceof String)return w6(e,"'"+$d(r,!0)+"'");if(typeof r=="string")return ld(e,'"'+$d(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return uu(e,"<internals>");if(n[0]==="#"){var o=[];for(var t in r)t!=="$"&&o.push(ut(e,r[t]));return"("+o.join(",")+")"}if(n==="Set_elm_builtin")return ji(e,"Set")+fu(e,".fromList")+" "+ut(e,kg(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return ji(e,"Dict")+fu(e,".fromList")+" "+ut(e,Ya(r));if(n==="Array_elm_builtin")return ji(e,"Array")+fu(e,".fromList")+" "+ut(e,wg(r));if(n==="::"||n==="[]"){var o="[";for(r.b&&(o+=ut(e,r.a),r=r.b);r.b;r=r.b)o+=","+ut(e,r.a);return o+"]"}var o="";for(var c in r)if(c!=="$"){var i=ut(e,r[c]),f=i[0],u=f==="{"||f==="("||f==="["||f==="<"||f==='"'||i.indexOf(" ")<0;o+=" "+(u?i:"("+i+")")}return ji(e,n)+o}if(typeof DataView=="function"&&r instanceof DataView)return ld(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return uu(e,"<"+r.name+">");if(typeof r=="object"){var o=[];for(var s in r){var d=s[0]==="_"?s.slice(1):s;o.push(fu(e,d)+" = "+ut(e,r[s]))}return o.length===0?"{}":"{ "+o.join(", ")+" }"}return uu(e,"<internals>")}function $d(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function ji(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function j6(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function ld(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function w6(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function fu(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function uu(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function pU(e){return String.fromCharCode(e<10?48+e:55+e)}function bn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function bU(e,r,n,t,o){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var c=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+c);case 3:var i=r;throw new Error("There can only be one port named `"+i+"`, but your program has multiple.");case 4:var i=r,f=n;throw new Error("Trying to send an unexpected type of value through port `"+i+"`:\n"+f);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,s=n,p=t;throw new Error("TODO in module `"+u+"` "+vd(s)+`

`+p);case 9:var u=r,s=n,d=t,p=o;throw new Error("TODO in module `"+u+"` from the `case` expression "+vd(s)+`

It received the following value:

    `+ud(d).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+p.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function vd(e){return e.dt.gi===e.q8.gi?"on line "+e.dt.gi:"on lines "+e.dt.gi+" through "+e.q8.gi}function oe(e,r){for(var n,t=[],o=Jl(e,r,0,t);o&&(n=t.pop());o=Jl(n.a,n.b,0,t));return o}function Jl(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&bn(5),!1;if(n>100)return t.push(P(e,r)),!0;e.$<0&&(e=Ya(e),r=Ya(r));for(var o in e)if(!Jl(e[o],r[o],n+1,t))return!1;return!0}var k6=v(oe),L6=v(function(e,r){return!oe(e,r)});function ae(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=ae(e.a,r.a))||(n=ae(e.b,r.b))?n:ae(e.c,r.c);for(;e.b&&r.b&&!(n=ae(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}var T6=v(function(e,r){return ae(e,r)<0}),M6=v(function(e,r){return ae(e,r)<1}),z6=v(function(e,r){return ae(e,r)>0}),D6=v(function(e,r){return ae(e,r)>=0}),q6=v(function(e,r){var n=ae(e,r);return n<0?ip:n?Lg:cp}),lo=0,mU={$:"#0"};function P(e,r){return{a:e,b:r}}function hU(e,r){return{$:"#2",a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function gU(e,r,n){return{$:"#3",a:e,b:r,c:n}}function _U(e){return e}function yU(e){return new String(e)}function B(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}var A6=v(X);function X(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Wn(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Wn(e.a,r);return n}var S={$:0},CU={$:"[]"};function Wn(e,r){return{$:1,a:e,b:r}}function PU(e,r){return{$:"::",a:e,b:r}}var B6=v(Wn);function $(e){for(var r=S,n=e.length;n--;)r=Wn(e[n],r);return r}function $u(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var V6=k(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)}),SU=Z(function(e,r,n,t){for(var o=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)o.push(l(e,r.a,n.a,t.a));return $(o)}),H6=ke(function(e,r,n,t,o){for(var c=[];r.b&&n.b&&t.b&&o.b;r=r.b,n=n.b,t=t.b,o=o.b)c.push(x(e,r.a,n.a,t.a,o.a));return $(c)}),xU=Tr(function(e,r,n,t,o,c){for(var i=[];r.b&&n.b&&t.b&&o.b&&c.b;r=r.b,n=n.b,t=t.b,o=o.b,c=c.b)i.push(F(e,r.a,n.a,t.a,o.a,c.a));return $(i)}),I6=v(function(e,r){return $($u(r).sort(function(n,t){return ae(e(n),e(t))}))}),F6=v(function(e,r){return $($u(r).sort(function(n,t){var o=a(e,n,t);return o===cp?0:o===ip?-1:1}))}),U6=v(function(e,r){return e+r}),E6=v(function(e,r){return e-r}),R6=v(function(e,r){return e*r}),G6=v(function(e,r){return e/r}),W6=v(function(e,r){return e/r|0}),N6=v(Math.pow),O6=v(function(e,r){return r%e}),J6=v(function(e,r){var n=r%e;return e===0?bn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Q6=Math.PI,jU=Math.E,Z6=Math.cos,X6=Math.sin,Y6=Math.tan,K6=Math.acos,wU=Math.asin,e8=Math.atan,r8=v(Math.atan2);function a8(e){return e}function kU(e){return e|0}function n8(e){return e===1/0||e===-1/0}var t8=Math.ceil,o8=Math.floor,c8=Math.round,i8=Math.sqrt,sd=Math.log,f8=isNaN;function u8(e){return!e}var $8=v(function(e,r){return e&&r}),l8=v(function(e,r){return e||r}),LU=v(function(e,r){return e!==r}),v8=v(function(e,r){return e+r});function s8(e){var r=e.charCodeAt(0);return isNaN(r)?D:A(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}var d8=v(function(e,r){return e+r});function p8(e){return e.length}var TU=v(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;){var c=r.charCodeAt(o);if(55296<=c&&c<=56319){t[o]=e(r[o]+r[o+1]),o+=2;continue}t[o]=e(r[o]),o++}return t.join("")}),MU=v(function(e,r){for(var n=[],t=r.length,o=0;o<t;){var c=r[o],i=r.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=r[o],o++),e(c)&&n.push(c)}return n.join("")});function b8(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}var m8=k(function(e,r,n){for(var t=n.length,o=0;o<t;){var c=n[o],i=n.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=n[o],o++),r=a(e,c,r)}return r}),h8=k(function(e,r,n){for(var t=n.length;t--;){var o=n[t],c=n.charCodeAt(t);56320<=c&&c<=57343&&(t--,o=n[t]+o),r=a(e,o,r)}return r}),g8=v(function(e,r){return r.split(e)}),_8=v(function(e,r){return r.join(e)}),y8=k(function(e,r,n){return n.slice(e,r)});function C8(e){return e.trim()}function zU(e){return e.replace(/^\s+/,"")}function DU(e){return e.replace(/\s+$/,"")}function qU(e){return $(e.trim().split(/\s+/g))}function AU(e){return $(e.split(/\r\n|\r|\n/g))}function P8(e){return e.toUpperCase()}function S8(e){return e.toLowerCase()}var BU=v(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1}),x8=v(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),j8=v(function(e,r){return r.indexOf(e)>-1}),w8=v(function(e,r){return r.indexOf(e)===0}),k8=v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length}),L8=v(function(e,r){var n=e.length;if(n<1)return S;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+n;return $(o)});function dd(e){return e+""}function T8(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,o=t;o<e.length;++o){var c=e.charCodeAt(o);if(c<48||57<c)return D;r=10*r+c-48}return o==t?D:A(n==45?-r:r)}function M8(e){if(e.length===0||/[\sxbo]/.test(e))return D;var r=+e;return r===r?A(r):D}function z8(e){return $u(e).join("")}function D8(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function q8(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function VU(e){return e.toUpperCase()}function A8(e){return e.toLowerCase()}function HU(e){return e.toLocaleUpperCase()}function IU(e){return e.toLocaleLowerCase()}function B8(e){return{$:0,a:e}}function V8(e){return{$:1,a:e}}function wi(e){return{$:2,b:e}}var H8=wi(function(e){return typeof e!="number"?Za("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?ea(e):Za("an INT",e)}),I8=wi(function(e){return typeof e=="boolean"?ea(e):Za("a BOOL",e)}),F8=wi(function(e){return typeof e=="number"?ea(e):Za("a FLOAT",e)}),U8=wi(function(e){return ea(e)}),E8=wi(function(e){return typeof e=="string"?ea(e):e instanceof String?ea(e+""):Za("a STRING",e)});function R8(e){return{$:3,b:e}}function G8(e){return{$:4,b:e}}function W8(e){return{$:5,c:e}}var N8=v(function(e,r){return{$:6,d:e,b:r}}),O8=v(function(e,r){return{$:7,e,b:r}});function J8(e){return{$:8,b:e}}function Bt(e,r){return{$:9,f:e,g:r}}var Q8=v(function(e,r){return{$:10,b:r,h:e}});function Z8(e){return{$:11,g:e}}var X8=v(function(e,r){return Bt(e,[r])}),Y8=k(function(e,r,n){return Bt(e,[r,n])}),K8=Z(function(e,r,n,t){return Bt(e,[r,n,t])}),e9=ke(function(e,r,n,t,o){return Bt(e,[r,n,t,o])}),r9=Tr(function(e,r,n,t,o,c){return Bt(e,[r,n,t,o,c])}),a9=At(function(e,r,n,t,o,c,i){return Bt(e,[r,n,t,o,c,i])}),FU=Me(function(e,r,n,t,o,c,i,f){return Bt(e,[r,n,t,o,c,i,f])}),UU=Ol(function(e,r,n,t,o,c,i,f,u){return Bt(e,[r,n,t,o,c,i,f,u])}),n9=v(function(e,r){try{var n=JSON.parse(r);return Qa(e,n)}catch(t){return Ia(a(j0,"This is not valid JSON! "+t.message,r))}}),Ql=v(function(e,r){return Qa(e,r)});function Qa(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ea(e.c):Za("null",r);case 3:return lu(r)?pd(e.b,r,$):Za("a LIST",r);case 4:return lu(r)?pd(e.b,r,t9):Za("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Za("an OBJECT with a field named `"+n+"`",r);var s=Qa(e.b,r[n]);return Cn(s)?s:Ia(a(fp,n,s.a));case 7:var t=e.e;if(!lu(r))return Za("an ARRAY",r);if(t>=r.length)return Za("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var s=Qa(e.b,r[t]);return Cn(s)?s:Ia(a(up,t,s.a));case 8:if(typeof r!="object"||r===null||lu(r))return Za("an OBJECT",r);var o=S;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var s=Qa(e.b,r[c]);if(!Cn(s))return Ia(a(fp,c,s.a));o=Wn(P(c,s.a),o)}return ea(je(o));case 9:for(var i=e.f,f=e.g,u=0;u<f.length;u++){var s=Qa(f[u],r);if(!Cn(s))return s;i=i(s.a)}return ea(i);case 10:var s=Qa(e.b,r);return Cn(s)?Qa(e.h(s.a),r):s;case 11:for(var d=S,p=e.g;p.b;p=p.b){var s=Qa(p.a,r);if(Cn(s))return s;d=Wn(s.a,d)}return Ia(Tg(je(d)));case 1:return Ia(a(j0,e.a,r));case 0:return ea(e.a)}}function pd(e,r,n){for(var t=r.length,o=new Array(t),c=0;c<t;c++){var i=Qa(e,r[c]);if(!Cn(i))return Ia(a(up,c,i.a));o[c]=i.a}return ea(n(o))}function lu(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function t9(e){return a(T0,e.length,function(r){return e[r]})}function Za(e,r){return Ia(a(j0,"Expecting "+e,r))}function $c(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return $c(e.b,r.b);case 6:return e.d===r.d&&$c(e.b,r.b);case 7:return e.e===r.e&&$c(e.b,r.b);case 9:return e.f===r.f&&bd(e.g,r.g);case 10:return e.h===r.h&&$c(e.b,r.b);case 11:return bd(e.g,r.g)}}function bd(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!$c(e[t],r[t]))return!1;return!0}var o9=v(function(e,r){return JSON.stringify(r,null,e)+""});function EU(e){return{$:0,a:e}}function RU(e){return e.a}function Zl(e){return e}function GU(e){return e}function c9(){return[]}function i9(){return{}}var f9=k(function(e,r,n){var t=r;return e==="toJSON"&&typeof t=="function"||(n[e]=t),n});function u9(e){return v(function(r,n){return n.push(e(r)),n})}var $9=null,l9=v(function(e,r){return e&r}),v9=v(function(e,r){return e|r}),s9=v(function(e,r){return e^r});function WU(e){return~e}var d9=v(function(e,r){return r<<e}),p9=v(function(e,r){return r>>e}),b9=v(function(e,r){return r>>>e});function Xa(e){return{$:0,a:e}}function Xl(e){return{$:1,a:e}}function Yr(e){return{$:2,b:e,c:null}}var Yl=v(function(e,r){return{$:3,b:e,d:r}}),m9=v(function(e,r){return{$:4,b:e,d:r}});function h9(e){return{$:5,b:e}}var g9=0;function Kl(e){var r={$:0,e:g9++,f:e,g:null,h:[]};return a0(r),r}function e0(e){return Yr(function(r){r(Xa(Kl(e)))})}function md(e,r){e.h.push(r),a0(e)}var _9=v(function(e,r){return Yr(function(n){md(e,r),n(Xa(lo))})});function y9(e){return Yr(function(r){var n=e.f;n.$===2&&n.c&&n.c(),e.f=null,r(Xa(lo))})}var r0=!1,hd=[];function a0(e){if(hd.push(e),!r0){for(r0=!0;e=hd.shift();)C9(e);r0=!1}}function C9(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,a0(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}function P9(e){return Yr(function(r){var n=setTimeout(function(){r(Xa(lo))},e);return function(){clearTimeout(n)}})}var NU=Z(function(e,r,n,t){return n0(r,t,e.cM,e.uK,e.cR,function(){return function(){}})});function n0(e,r,n,t,o,c){var i=a(Ql,e,r?r.flags:void 0);Cn(i)||bn(2);var f={},u=n(i.a),s=u.a,d=c(g,s),p=x9(f,g);function g(_,b){var h=a(t,_,s);d(s=h.a,b),Cd(f,h.b,o(s))}return Cd(f,u.b,o(s)),p?{ports:p}:{}}var S9;function OU(e){S9.add(e)}var Kr={};function x9(e,r){var n;for(var t in Kr){var o=Kr[t];o.a&&(n=n||{},n[t]=o.a(t,r)),e[t]=j9(o,r)}return n}function t0(e,r,n,t,o){return{b:e,c:r,d:n,e:t,f:o}}function j9(e,r){var n={g:r,h:void 0},t=e.c,o=e.d,c=e.e,i=e.f;function f(u){return a(Yl,f,h9(function(s){var d=s.a;return s.$===0?l(o,n,d,u):c&&i?x(t,n,d.i,d.j,u):l(t,n,c?d.i:d.j,u)}))}return n.h=Kl(a(Yl,f,e.b))}var w9=v(function(e,r){return Yr(function(n){e.g(r),n(Xa(lo))})}),k9=v(function(e,r){return a(_9,e.h,{$:0,a:r})});function ki(e){return function(r){return{$:1,k:e,l:r}}}function gd(e){return{$:2,m:e}}var _d=v(function(e,r){return{$:3,n:e,o:r}}),yd=[],o0=!1;function Cd(e,r,n){if(yd.push({p:e,q:r,r:n}),!o0){o0=!0;for(var t;t=yd.shift();)L9(t.p,t.q,t.r);o0=!1}}function L9(e,r,n){var t={};vu(!0,r,t,null),vu(!1,n,t,null);for(var o in e)md(e[o],{$:"fx",a:t[o]||{i:S,j:S}})}function vu(e,r,n,t){switch(r.$){case 1:var o=r.k,c=T9(e,o,t,r.l);n[o]=M9(e,c,n[o]);return;case 2:for(var i=r.m;i.b;i=i.b)vu(e,i.a,n,t);return;case 3:vu(e,r.o,n,{s:r.n,t});return}}function T9(e,r,n,t){function o(i){for(var f=n;f;f=f.t)i=f.s(i);return i}var c=e?Kr[r].e:Kr[r].f;return a(c,o,t)}function M9(e,r,n){return n=n||{i:S,j:S},e?n.i=Wn(r,n.i):n.j=Wn(r,n.j),n}function Pd(e){Kr[e]&&bn(3,e)}function vo(e,r){return Pd(e),Kr[e]={e:z9,u:r,a:D9},ki(e)}var z9=v(function(e,r){return r});function D9(e){var r=[],n=Kr[e].u,t=P9(0);Kr[e].b=t,Kr[e].c=k(function(i,f,u){for(;f.b;f=f.b)for(var s=r,d=n(f.a),p=0;p<s.length;p++)s[p](d);return t});function o(i){r.push(i)}function c(i){r=r.slice();var f=r.indexOf(i);f>=0&&r.splice(f,1)}return{subscribe:o,unsubscribe:c}}function c0(e,r){return Pd(e),Kr[e]={f:q9,u:r,a:A9},ki(e)}var q9=v(function(e,r){return function(n){return e(r(n))}});function A9(e,r){var n=S,t=Kr[e].u,o=Xa(null);Kr[e].b=o,Kr[e].c=k(function(i,f,u){return n=f,o});function c(i){var f=a(Ql,t,i);Cn(f)||bn(4,e,f.a);for(var u=f.a,s=n;s.b;s=s.b)r(s.a(u))}return{send:c}}function B9(e){uc.Elm?Sd(uc.Elm,e):uc.Elm=e}function Sd(e,r){for(var n in r)n in e?n=="init"?bn(6):Sd(e[n],r[n]):e[n]=r[n]}function JU(e){uc.Elm?xd("Elm",uc.Elm,e):uc.Elm=e}function xd(e,r,n){for(var t in n)t in r?t=="init"?bn(6,e):xd(e+"."+t,r[t],n[t]):r[t]=n[t]}var su,Rr=typeof document<"u"?document:{};function i0(e,r){e.appendChild(r)}var QU=Z(function(e,r,n,t){var o=t.node;return o.parentNode.replaceChild(Ht(e,function(){}),o),{}});function f0(e){return{$:0,a:e}}var jd=v(function(e,r){return v(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b||0,o.push(i)}return c+=o.length,{$:1,c:r,d:l0(n),e:o,f:e,b:c}})}),Ca=jd(void 0),wd=v(function(e,r){return v(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b.b||0,o.push(i)}return c+=o.length,{$:2,c:r,d:l0(n),e:o,f:e,b:c}})}),V9=wd(void 0);function kd(e,r,n,t){return{$:3,d:l0(e),g:r,h:n,i:t}}var H9=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Vt(e,r){return{$:5,l:e,m:r,k:void 0}}var ZU=v(function(e,r){return Vt([e,r],function(){return e(r)})}),XU=k(function(e,r,n){return Vt([e,r,n],function(){return a(e,r,n)})}),I9=Z(function(e,r,n,t){return Vt([e,r,n,t],function(){return l(e,r,n,t)})}),YU=ke(function(e,r,n,t,o){return Vt([e,r,n,t,o],function(){return x(e,r,n,t,o)})}),KU=Tr(function(e,r,n,t,o,c){return Vt([e,r,n,t,o,c],function(){return F(e,r,n,t,o,c)})}),eE=At(function(e,r,n,t,o,c,i){return Vt([e,r,n,t,o,c,i],function(){return jr(e,r,n,t,o,c,i)})}),rE=Me(function(e,r,n,t,o,c,i,f){return Vt([e,r,n,t,o,c,i,f],function(){return Xr(e,r,n,t,o,c,i,f)})}),aE=Ol(function(e,r,n,t,o,c,i,f,u){return Vt([e,r,n,t,o,c,i,f,u],function(){return $o(e,r,n,t,o,c,i,f,u)})}),Ld=v(function(e,r){return{$:"a0",n:e,o:r}}),F9=v(function(e,r){return{$:"a1",n:e,o:r}}),u0=v(function(e,r){return{$:"a2",n:e,o:r}}),du=v(function(e,r){return{$:"a3",n:e,o:r}}),U9=k(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}}),E9=/^script$/i,R9=/^(on|formAction$)/i,G9=/^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i,$0=/^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;function pu(e){return E9.test(e)?"p":e}function Td(e){return R9.test(e)?"data-"+e:e}function W9(e){return e=="innerHTML"||e=="outerHTML"||e=="formAction"?"data-"+e:e}function nE(e){return G9.test(e)?"":e}function Md(e){return $0.test(e)?"":e}function N9(e){return typeof e=="string"&&$0.test(e)||Array.isArray(e)&&$0.test(String(e))?"":e}var O9=v(function(e,r){return r.$==="a0"?a(Ld,r.n,J9(e,r.o)):r});function J9(e,r){var n=B0(r);return{$:r.$,a:n?l(Xn,n<3?Q9:Z9,te(e),r.a):a(Ze,e,r.a)}}var Q9=v(function(e,r){return P(e(r.a),r.b)}),Z9=v(function(e,r){return{Q:e(r.Q),W:r.W,T:r.T}});function l0(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,o=n.n,c=n.o;if(t==="a2"){o==="className"?zd(r,o,c):r[o]=c;continue}var i=r[t]||(r[t]={});t==="a3"&&o==="class"?zd(i,o,c):i[o]=c}return r}function zd(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Ht(e,r){var n=e.$;if(n===5)return Ht(e.k||(e.k=e.m()),r);if(n===0)return Rr.createTextNode(e.a);if(n===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var c={j:o,p:r},i=Ht(t,c);return i.elm_event_node_ref=c,i}if(n===3){var i=e.h(e.g);return v0(i,r,e.d),i}var i=e.f?Rr.createElementNS(e.f,e.c):Rr.createElement(e.c);su&&e.c=="a"&&i.addEventListener("click",su(i)),v0(i,r,e.d);for(var f=e.e,u=0;u<f.length;u++)i0(i,Ht(n===1?f[u]:f[u].b,r));return i}function v0(e,r,n){for(var t in n){var o=n[t];t==="a1"?X9(e,o):t==="a0"?e7(e,r,o):t==="a3"?Y9(e,o):t==="a4"?K9(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function X9(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Y9(e,r){for(var n in r){var t=r[n];typeof t<"u"?e.setAttribute(n,t):e.removeAttribute(n)}}function K9(e,r){for(var n in r){var t=r[n],o=t.f,c=t.o;typeof c<"u"?e.setAttributeNS(o,n,c):e.removeAttributeNS(o,n)}}function e7(e,r,n){var t=e.elmFs||(e.elmFs={});for(var o in n){var c=n[o],i=t[o];if(!c){e.removeEventListener(o,i),t[o]=void 0;continue}if(i){var f=i.q;if(f.$===c.$){i.q=c;continue}e.removeEventListener(o,i)}i=r7(r,c),e.addEventListener(o,i,s0&&{passive:B0(c)<2}),t[o]=i}}var s0;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){s0=!0}}))}catch{}function r7(e,r){function n(t){var o=n.q,c=Qa(o.a,t);if(Cn(c)){for(var i=B0(o),f=c.a,u=i?i<3?f.a:f.Q:f,s=i==1?f.b:i==3&&f.W,d=(s&&t.stopPropagation(),(i==2?f.b:i==3&&f.T)&&t.preventDefault(),e),p,g;p=d.j;){if(typeof p=="function")u=p(u);else for(var g=p.length;g--;)u=p[g](u);d=d.p}d(u,s)}}return n.q=r,n}function a7(e,r){return e.$==r.$&&$c(e.a,r.a)}function Dd(e,r){var n=[];return mn(e,r,n,0),n}function ua(e,r,n,t){var o={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(o),o}function mn(e,r,n,t){if(e!==r){var o=e.$,c=r.$;if(o!==c)if(o===1&&c===2)r=$7(r),c=1;else{ua(n,0,t,r);return}switch(c){case 5:for(var i=e.l,f=r.l,u=i.length,s=u===f.length;s&&u--;)s=i[u]===f[u];if(s){r.k=e.k;return}r.k=r.m();var d=[];mn(e.k,r.k,d,0),d.length>0&&ua(n,1,t,d);return;case 4:for(var p=e.j,g=r.j,_=!1,b=e.k;b.$===4;)_=!0,typeof p!="object"?p=[p,b.j]:p.push(b.j),b=b.k;for(var h=r.k;h.$===4;)_=!0,typeof g!="object"?g=[g,h.j]:g.push(h.j),h=h.k;if(_&&p.length!==g.length){ua(n,0,t,r);return}(_?!n7(p,g):p!==g)&&ua(n,2,t,g),mn(b,h,n,t+1);return;case 0:e.a!==r.a&&ua(n,3,t,r.a);return;case 1:qd(e,r,n,t,t7);return;case 2:qd(e,r,n,t,o7);return;case 3:if(e.h!==r.h){ua(n,0,t,r);return}var y=d0(e.d,r.d);y&&ua(n,4,t,y);var C=r.i(e.g,r.g);C&&ua(n,5,t,C);return}}}function n7(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function qd(e,r,n,t,o){if(e.c!==r.c||e.f!==r.f){ua(n,0,t,r);return}var c=d0(e.d,r.d);c&&ua(n,4,t,c),o(e,r,n,t)}function d0(e,r,n){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var c=d0(e[o],r[o]||{},o);c&&(t=t||{},t[o]=c);continue}if(!(o in r)){t=t||{},t[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var i=e[o],f=r[o];i===f&&o!=="value"&&o!=="checked"||n==="a0"&&a7(i,f)||(t=t||{},t[o]=f)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function t7(e,r,n,t){var o=e.e,c=r.e,i=o.length,f=c.length;i>f?ua(n,6,t,{v:f,i:i-f}):i<f&&ua(n,7,t,{v:i,e:c});for(var u=i<f?i:f,s=0;s<u;s++){var d=o[s];mn(d,c[s],n,++t),t+=d.b||0}}function o7(e,r,n,t){for(var o=[],c={},i=[],f=e.e,u=r.e,s=f.length,d=u.length,p=0,g=0,_=t;p<s&&g<d;){var b=f[p],h=u[g],y=b.a,C=h.a,j=b.b,L=h.b,M=void 0,I=void 0;if(y===C){_++,mn(j,L,o,_),_+=j.b||0,p++,g++;continue}var R=f[p+1],E=u[g+1];if(R){var K=R.a,J=R.b;I=C===K}if(E){var le=E.a,Se=E.b;M=y===le}if(M&&I){_++,mn(j,Se,o,_),Li(c,o,y,L,g,i),_+=j.b||0,_++,Ti(c,o,y,J,_),_+=J.b||0,p+=2,g+=2;continue}if(M){_++,Li(c,o,C,L,g,i),mn(j,Se,o,_),_+=j.b||0,p+=1,g+=2;continue}if(I){_++,Ti(c,o,y,j,_),_+=j.b||0,_++,mn(J,L,o,_),_+=J.b||0,p+=2,g+=1;continue}if(R&&K===le){_++,Ti(c,o,y,j,_),Li(c,o,C,L,g,i),_+=j.b||0,_++,mn(J,Se,o,_),_+=J.b||0,p+=2,g+=2;continue}break}for(;p<s;){_++;var b=f[p],j=b.b;Ti(c,o,b.a,j,_),_+=j.b||0,p++}for(;g<d;){var Te=Te||[],h=u[g];Li(c,o,h.a,h.b,void 0,Te),g++}(o.length>0||i.length>0||Te)&&ua(n,8,t,{w:o,x:i,y:Te})}var Ad="_elmW6BL";function Li(e,r,n,t,o,c){var i=e[n];if(!i){i={c:0,z:t,r:o,s:void 0},c.push({r:o,A:i}),e[n]=i;return}if(i.c===1){c.push({r:o,A:i}),i.c=2;var f=[];mn(i.z,t,f,i.r),i.r=o,i.s.s={w:f,A:i};return}Li(e,r,n+Ad,t,o,c)}function Ti(e,r,n,t,o){var c=e[n];if(!c){var i=ua(r,9,o,void 0);e[n]={c:1,z:t,r:o,s:i};return}if(c.c===0){c.c=2;var f=[];mn(t,c.z,f,o),ua(r,9,o,{w:f,A:c});return}Ti(e,r,n+Ad,t,o)}function Bd(e,r,n,t){Mi(e,r,n,0,0,r.b,t)}function Mi(e,r,n,t,o,c,i){for(var f=n[t],u=f.r;u===o;){var s=f.$;if(s===1)Bd(e,r.k,f.s,i);else if(s===8){f.t=e,f.u=i;var d=f.s.w;d.length>0&&Mi(e,r,d,0,o,c,i)}else if(s===9){f.t=e,f.u=i;var p=f.s;if(p){p.A.s=e;var d=p.w;d.length>0&&Mi(e,r,d,0,o,c,i)}}else f.t=e,f.u=i;if(t++,!(f=n[t])||(u=f.r)>c)return t}var g=r.$;if(g===4){for(var _=r.k;_.$===4;)_=_.k;return Mi(e,_,n,t,o+1,c,e.elm_event_node_ref)}for(var b=r.e,h=e.childNodes,y=0;y<b.length;y++){o++;var C=g===1?b[y]:b[y].b,j=o+(C.b||0);if(o<=u&&u<=j&&(t=Mi(h[y],C,n,t,o,j,i),!(f=n[t])||(u=f.r)>c))return t;o=j}return t}function Vd(e,r,n,t){return n.length===0?e:(Bd(e,r,n,t),bu(e,n))}function bu(e,r){for(var n=0;n<r.length;n++){var t=r[n],o=t.t,c=c7(o,t);o===e&&(e=c)}return e}function c7(e,r){switch(r.$){case 0:return i7(e,r.s,r.u);case 4:return v0(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return bu(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var c=r.s,t=0;t<c.i;t++)e.removeChild(e.childNodes[c.v]);return e;case 7:for(var c=r.s,n=c.e,t=c.v,o=e.childNodes[t];t<n.length;t++)e.insertBefore(Ht(n[t],r.u),o);return e;case 9:var c=r.s;if(!c)return e.parentNode.removeChild(e),e;var i=c.A;return typeof i.r<"u"&&e.parentNode.removeChild(e),i.s=bu(e,c.w),e;case 8:return f7(e,r);case 5:return r.s(e);default:bn(10)}}function i7(e,r,n){var t=e.parentNode,o=Ht(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function f7(e,r){var n=r.s,t=u7(n.y,r);e=bu(e,n.w);for(var o=n.x,c=0;c<o.length;c++){var i=o[c],f=i.A,u=f.c===2?f.s:Ht(f.z,r.u);e.insertBefore(u,e.childNodes[i.r])}return t&&i0(e,t),e}function u7(e,r){if(e){for(var n=Rr.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],c=o.A;i0(n,c.c===2?c.s:Ht(c.z,r.u))}return n}}function p0(e){if(e.nodeType===3)return f0(e.textContent);if(e.nodeType!==1)return f0("");for(var r=S,n=e.attributes,t=n.length;t--;){var o=n[t],c=o.name,i=o.value;r=Wn(a(du,c,i),r)}for(var f=e.tagName.toLowerCase(),u=S,s=e.childNodes,t=s.length;t--;)u=Wn(p0(s[t]),u);return l(Ca,f,r,u)}function $7(e){for(var r=e.e,n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var l7=k(function(e,r,n){return kd(r,{a:e,b:n},v7,s7)});function v7(e){return a(Hd,e,Rr.createElement("div"))}function s7(e,r){return e.b===r.b&&e.a===r.a?!1:Hd(r)}var Hd=v(function(e,r){return r.innerHTML=d7(e.b,p7(e.a)),r}),d7=(function(){var e={},r=e.exports={};return(function(){var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:p,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:p,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:p,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};n.bullet=/(?:[*+-]|\d+\.)/,n.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,n.item=d(n.item,"gm")(/bull/g,n.bullet)(),n.list=d(n.list)(/bull/g,n.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+n.def.source+")")(),n.blockquote=d(n.blockquote)("def",n.def)(),n._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",n.html=d(n.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,n._tag)(),n.paragraph=d(n.paragraph)("hr",n.hr)("heading",n.heading)("lheading",n.lheading)("blockquote",n.blockquote)("tag","<"+n._tag)("def",n.def)(),n.normal=g({},n),n.gfm=g({},n.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=d(n.paragraph)("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|")(),n.tables=g({},n.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function t(b){this.tokens=[],this.tokens.links={},this.options=b||_.defaults,this.rules=n.normal,this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}t.rules=n,t.lex=function(b,h){var y=new t(h);return y.lex(b)},t.prototype.lex=function(b){return b=b.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,`
`),this.token(b,!0)},t.prototype.token=function(C,h,y){for(var C=C.replace(/^ +$/gm,""),j,L,M,I,R,E,K,J,le;C;){if((M=this.rules.newline.exec(C))&&(C=C.substring(M[0].length),M[0].length>1&&this.tokens.push({type:"space"})),M=this.rules.code.exec(C)){C=C.substring(M[0].length),M=M[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?M:M.replace(/\n+$/,"")});continue}if(M=this.rules.fences.exec(C)){C=C.substring(M[0].length),this.tokens.push({type:"code",lang:M[2],text:M[3]||""});continue}if(M=this.rules.heading.exec(C)){C=C.substring(M[0].length),this.tokens.push({type:"heading",depth:M[1].length,text:M[2]});continue}if(h&&(M=this.rules.nptable.exec(C))){for(C=C.substring(M[0].length),E={type:"table",header:M[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:M[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:M[3].replace(/\n$/,"").split(`
`)},J=0;J<E.align.length;J++)/^ *-+: *$/.test(E.align[J])?E.align[J]="right":/^ *:-+: *$/.test(E.align[J])?E.align[J]="center":/^ *:-+ *$/.test(E.align[J])?E.align[J]="left":E.align[J]=null;for(J=0;J<E.cells.length;J++)E.cells[J]=E.cells[J].split(/ *\| */);this.tokens.push(E);continue}if(M=this.rules.lheading.exec(C)){C=C.substring(M[0].length),this.tokens.push({type:"heading",depth:M[2]==="="?1:2,text:M[1]});continue}if(M=this.rules.hr.exec(C)){C=C.substring(M[0].length),this.tokens.push({type:"hr"});continue}if(M=this.rules.blockquote.exec(C)){C=C.substring(M[0].length),this.tokens.push({type:"blockquote_start"}),M=M[0].replace(/^ *> ?/gm,""),this.token(M,h,!0),this.tokens.push({type:"blockquote_end"});continue}if(M=this.rules.list.exec(C)){for(C=C.substring(M[0].length),I=M[2],this.tokens.push({type:"list_start",ordered:I.length>1}),M=M[0].match(this.rules.item),j=!1,le=M.length,J=0;J<le;J++)E=M[J],K=E.length,E=E.replace(/^ *([*+-]|\d+\.) +/,""),~E.indexOf(`
 `)&&(K-=E.length,E=this.options.pedantic?E.replace(/^ {1,4}/gm,""):E.replace(new RegExp("^ {1,"+K+"}","gm"),"")),this.options.smartLists&&J!==le-1&&(R=n.bullet.exec(M[J+1])[0],I!==R&&!(I.length>1&&R.length>1)&&(C=M.slice(J+1).join(`
`)+C,J=le-1)),L=j||/\n\n(?!\s*$)/.test(E),J!==le-1&&(j=E.charAt(E.length-1)===`
`,L||(L=j)),this.tokens.push({type:L?"loose_item_start":"list_item_start"}),this.token(E,!1,y),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"});continue}if(M=this.rules.html.exec(C)){C=C.substring(M[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(M[1]==="pre"||M[1]==="script"||M[1]==="style"),text:M[0]});continue}if(!y&&h&&(M=this.rules.def.exec(C))){C=C.substring(M[0].length),this.tokens.links[M[1].toLowerCase()]={href:M[2],title:M[3]};continue}if(h&&(M=this.rules.table.exec(C))){for(C=C.substring(M[0].length),E={type:"table",header:M[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:M[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:M[3].replace(/(?: *\| *)?\n$/,"").split(`
`)},J=0;J<E.align.length;J++)/^ *-+: *$/.test(E.align[J])?E.align[J]="right":/^ *:-+: *$/.test(E.align[J])?E.align[J]="center":/^ *:-+ *$/.test(E.align[J])?E.align[J]="left":E.align[J]=null;for(J=0;J<E.cells.length;J++)E.cells[J]=E.cells[J].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(E);continue}if(h&&(M=this.rules.paragraph.exec(C))){C=C.substring(M[0].length),this.tokens.push({type:"paragraph",text:M[1].charAt(M[1].length-1)===`
`?M[1].slice(0,-1):M[1]});continue}if(M=this.rules.text.exec(C)){C=C.substring(M[0].length),this.tokens.push({type:"text",text:M[0]});continue}if(C)throw new Error("Infinite loop on byte: "+C.charCodeAt(0))}return this.tokens};var o={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:p,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^_\_([\s\S]+?)_\_(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|_\_)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:p,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};o._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,o._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,o.link=d(o.link)("inside",o._inside)("href",o._href)(),o.reflink=d(o.reflink)("inside",o._inside)(),o.normal=g({},o),o.pedantic=g({},o.normal,{strong:/^_\_(?=\S)([\s\S]*?\S)_\_(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),o.gfm=g({},o.normal,{escape:d(o.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:d(o.text)("]|","~]|")("|","|https?://|")()}),o.breaks=g({},o.gfm,{br:d(o.br)("{2,}","*")(),text:d(o.gfm.text)("{2,}","*")()});function c(b,h){if(this.options=h||_.defaults,this.links=b,this.rules=o.normal,this.renderer=this.options.renderer||new i,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=o.breaks:this.rules=o.gfm:this.options.pedantic&&(this.rules=o.pedantic)}c.rules=o,c.output=function(b,h,y){var C=new c(h,y);return C.output(b)},c.prototype.output=function(b){for(var h="",y,C,j,L;b;){if(L=this.rules.escape.exec(b)){b=b.substring(L[0].length),h+=L[1];continue}if(L=this.rules.autolink.exec(b)){b=b.substring(L[0].length),L[2]==="@"?(C=L[1].charAt(6)===":"?this.mangle(L[1].substring(7)):this.mangle(L[1]),j=this.mangle("mailto:")+C):(C=u(L[1]),j=C),h+=this.renderer.link(j,null,C);continue}if(!this.inLink&&(L=this.rules.url.exec(b))){b=b.substring(L[0].length),C=u(L[1]),j=C,h+=this.renderer.link(j,null,C);continue}if(L=this.rules.tag.exec(b)){!this.inLink&&/^<a /i.test(L[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(L[0])&&(this.inLink=!1),b=b.substring(L[0].length),h+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(L[0]):u(L[0]):L[0];continue}if(L=this.rules.link.exec(b)){b=b.substring(L[0].length),this.inLink=!0,h+=this.outputLink(L,{href:L[2],title:L[3]}),this.inLink=!1;continue}if((L=this.rules.reflink.exec(b))||(L=this.rules.nolink.exec(b))){if(b=b.substring(L[0].length),y=(L[2]||L[1]).replace(/\s+/g," "),y=this.links[y.toLowerCase()],!y||!y.href){h+=L[0].charAt(0),b=L[0].substring(1)+b;continue}this.inLink=!0,h+=this.outputLink(L,y),this.inLink=!1;continue}if(L=this.rules.strong.exec(b)){b=b.substring(L[0].length),h+=this.renderer.strong(this.output(L[2]||L[1]));continue}if(L=this.rules.em.exec(b)){b=b.substring(L[0].length),h+=this.renderer.em(this.output(L[2]||L[1]));continue}if(L=this.rules.code.exec(b)){b=b.substring(L[0].length),h+=this.renderer.codespan(u(L[2],!0));continue}if(L=this.rules.br.exec(b)){b=b.substring(L[0].length),h+=this.renderer.br();continue}if(L=this.rules.del.exec(b)){b=b.substring(L[0].length),h+=this.renderer.del(this.output(L[1]));continue}if(L=this.rules.text.exec(b)){b=b.substring(L[0].length),h+=this.renderer.text(u(this.smartypants(L[0])));continue}if(b)throw new Error("Infinite loop on byte: "+b.charCodeAt(0))}return h},c.prototype.outputLink=function(b,h){var y=u(h.href),C=h.title?u(h.title):null;return b[0].charAt(0)!=="!"?this.renderer.link(y,C,this.output(b[1])):this.renderer.image(y,C,u(b[1]))},c.prototype.smartypants=function(b){return this.options.smartypants?b.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026"):b},c.prototype.mangle=function(b){if(!this.options.mangle)return b;for(var h="",y=b.length,C=0,j;C<y;C++)j=b.charCodeAt(C),Math.random()>.5&&(j="x"+j.toString(16)),h+="&#"+j+";";return h};function i(b){this.options=b||{}}i.prototype.code=function(b,h,y){if(this.options.highlight){var C=this.options.highlight(b,h);C!=null&&C!==b&&(y=!0,b=C)}return h?'<pre><code class="'+this.options.langPrefix+u(h,!0)+'">'+(y?b:u(b,!0))+`
</code></pre>
`:"<pre><code>"+(y?b:u(b,!0))+`
</code></pre>`},i.prototype.blockquote=function(b){return`<blockquote>
`+b+`</blockquote>
`},i.prototype.html=function(b){return b},i.prototype.heading=function(b,h,y){return"<h"+h+' id="'+this.options.headerPrefix+y.toLowerCase().replace(/[^\w]+/g,"-")+'">'+b+"</h"+h+`>
`},i.prototype.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},i.prototype.list=function(b,h){var y=h?"ol":"ul";return"<"+y+`>
`+b+"</"+y+`>
`},i.prototype.listitem=function(b){return"<li>"+b+`</li>
`},i.prototype.paragraph=function(b){return"<p>"+b+`</p>
`},i.prototype.table=function(b,h){return`<table>
<thead>
`+b+`</thead>
<tbody>
`+h+`</tbody>
</table>
`},i.prototype.tablerow=function(b){return`<tr>
`+b+`</tr>
`},i.prototype.tablecell=function(b,h){var y=h.header?"th":"td",C=h.align?"<"+y+' style="text-align:'+h.align+'">':"<"+y+">";return C+b+"</"+y+`>
`},i.prototype.strong=function(b){return"<strong>"+b+"</strong>"},i.prototype.em=function(b){return"<em>"+b+"</em>"},i.prototype.codespan=function(b){return"<code>"+b+"</code>"},i.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},i.prototype.del=function(b){return"<del>"+b+"</del>"},i.prototype.link=function(b,h,y){if(this.options.sanitize){try{var C=decodeURIComponent(s(b)).replace(/[^\w:]/g,"").toLowerCase()}catch{return""}if(C.indexOf("javascript:")===0||C.indexOf("vbscript:")===0||C.indexOf("data:")===0)return""}var j='<a href="'+b+'"';return h&&(j+=' title="'+h+'"'),j+=">"+y+"</a>",j},i.prototype.image=function(b,h,y){var C='<img src="'+b+'" alt="'+y+'"';return h&&(C+=' title="'+h+'"'),C+=this.options.xhtml?"/>":">",C},i.prototype.text=function(b){return b};function f(b){this.tokens=[],this.token=null,this.options=b||_.defaults,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options}f.parse=function(b,h,y){var C=new f(h,y);return C.parse(b)},f.prototype.parse=function(b){this.inline=new c(b.links,this.options,this.renderer),this.tokens=b.reverse();for(var h="";this.next();)h+=this.tok();return h},f.prototype.next=function(){return this.token=this.tokens.pop()},f.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},f.prototype.parseText=function(){for(var b=this.token.text;this.peek().type==="text";)b+=`
`+this.next().text;return this.inline.output(b)},f.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{var b="",h="",y,C,j,L,M;for(j="",y=0;y<this.token.header.length;y++)L={header:!0,align:this.token.align[y]},j+=this.renderer.tablecell(this.inline.output(this.token.header[y]),{header:!0,align:this.token.align[y]});for(b+=this.renderer.tablerow(j),y=0;y<this.token.cells.length;y++){for(C=this.token.cells[y],j="",M=0;M<C.length;M++)j+=this.renderer.tablecell(this.inline.output(C[M]),{header:!1,align:this.token.align[M]});h+=this.renderer.tablerow(j)}return this.renderer.table(b,h)}case"blockquote_start":{for(var h="";this.next().type!=="blockquote_end";)h+=this.tok();return this.renderer.blockquote(h)}case"list_start":{for(var h="",I=this.token.ordered;this.next().type!=="list_end";)h+=this.tok();return this.renderer.list(h,I)}case"list_item_start":{for(var h="";this.next().type!=="list_item_end";)h+=this.token.type==="text"?this.parseText():this.tok();return this.renderer.listitem(h)}case"loose_item_start":{for(var h="";this.next().type!=="list_item_end";)h+=this.tok();return this.renderer.listitem(h)}case"html":{var R=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(R)}case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};function u(b,h){return b.replace(h?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function s(b){return b.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(h,y){return y=y.toLowerCase(),y==="colon"?":":y.charAt(0)==="#"?y.charAt(1)==="x"?String.fromCharCode(parseInt(y.substring(2),16)):String.fromCharCode(+y.substring(1)):""})}function d(b,h){return b=b.source,h=h||"",function y(C,j){return C?(j=j.source||j,j=j.replace(/(^|[^\[])\^/g,"$1"),b=b.replace(C,j),y):new RegExp(b,h)}}function p(){}p.exec=p;function g(b){for(var h=1,y,C;h<arguments.length;h++){y=arguments[h];for(C in y)Object.prototype.hasOwnProperty.call(y,C)&&(b[C]=y[C])}return b}function _(b,h,y){if(y||typeof h=="function"){y||(y=h,h=null),h=g({},_.defaults,h||{});var C=h.highlight,j,L,M=0;try{j=t.lex(b,h)}catch(R){return y(R)}L=j.length;var I=function(R){if(R)return h.highlight=C,y(R);var E;try{E=f.parse(j,h)}catch(K){R=K}return h.highlight=C,R?y(R):y(null,E)};if(!C||C.length<3||(delete h.highlight,!L))return I();for(;M<j.length;M++)(function(R){return R.type!=="code"?--L||I():C(R.text,R.lang,function(E,K){if(E)return I(E);if(K==null||K===R.text)return--L||I();R.text=K,R.escaped=!0,--L||I()})})(j[M]);return}try{return h&&(h=g({},_.defaults,h)),f.parse(t.lex(b,h),h)}catch(R){if(R.message+=`
Please report this to https://github.com/chjj/marked.`,(h||_.defaults).silent)return"<p>An error occured:</p><pre>"+u(R.message+"",!0)+"</pre>";throw R}}_.options=_.setOptions=function(b){return g(_.defaults,b),_},_.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new i,xhtml:!1},_.Parser=f,_.parser=f.parse,_.Renderer=i,_.Lexer=t,_.lexer=t.lex,_.InlineLexer=c,_.inlineLexer=c.output,_.parse=_,typeof e<"u"&&typeof r=="object"?e.exports=_:typeof define=="function"&&define.amd?define(function(){return _}):this.marked=_}).call((function(){return this||(typeof window<"u"?window:global)})()),e.exports})();function p7(e){function r(t,o){return!o&&Ny(e.qJ)&&(o=e.qJ.a),typeof hljs<"u"&&o&&hljs.listLanguages().indexOf(o)>=0?hljs.highlight(o,t,!0).value:t}var n=e.rD.a;return{highlight:r,gfm:n,tables:n&&n.up,breaks:n&&n.pY,sanitize:e.tQ,smartypants:e.t7}}var Id=0;function zi(e,r){for(;r.b;r=r.b)e(r.a)}function b0(e){for(var r=0;e.b;e=e.b)r++;return r}var b7=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},m7=ke(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),h7=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),g7=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),_7=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),y7=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),C7=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),P7=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),S7=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),x7=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),j7=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},w7=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},k7=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},L7=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Fd=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Ud=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},T7=function(e){e.gl.disable(e.gl.CULL_FACE)},M7=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},z7=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},D7=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Ed=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],q7=[w7,k7,L7,Fd,Ud,T7,M7,z7,D7];function Rd(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function A7(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Gd(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function B7(e,r,n,t){for(var o=n.a.l8,c=[],i=0;i<o;i++)c.push(String.fromCharCode(97+i));function f(_,b,h,y,C){var j;if(o===1)for(j=0;j<b;j++)_[h++]=b===1?y[C]:y[C][j];else c.forEach(function(L){for(j=0;j<b;j++)_[h++]=b===1?y[L][C]:y[L][C][j]})}var u=Gd(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var s=0,d=u.size*u.arraySize*o,p=new u.type(b0(n.b)*d);zi(function(_){f(p,u.size*u.arraySize,s,_,t[r.name]||r.name),s+=d},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),g}function V7(e,r){if(r.a.mG>0){var n=e.createBuffer(),t=H7(r.c,r.a.mG);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.l8*b0(r.b),indexBuffer:null,buffers:{}}}function H7(e,r){var n=new Uint32Array(b0(e)*r),t=0,o;return zi(function(c){if(r===1)n[t++]=c;else for(o=0;o<r;o++)n[t++]=c[String.fromCharCode(97+o)]},e),n}function Wd(e,r){return e+"#"+r}var Nd=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Fd(n),Ud(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(c){if(c.d.b.b){var i,f,u;if(c.b.id&&c.c.id&&(i=Wd(c.b.id,c.c.id),f=n.programs[i]),!f){var s;c.b.id?s=n.shaders[c.b.id]:c.b.id=Id++,s||(s=Rd(t,c.b.src,t.VERTEX_SHADER),n.shaders[c.b.id]=s);var d;c.c.id?d=n.shaders[c.c.id]:c.c.id=Id++,d||(d=Rd(t,c.c.src,t.FRAGMENT_SHADER),n.shaders[c.c.id]=d);var p=A7(t,s,d);f={glProgram:p,attributes:Object.assign({},c.b.attributes,c.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},f.uniformSetters=I7(t,e,f,Object.assign({},c.b.uniforms,c.c.uniforms));var g=t.getProgramParameter(p,t.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var _=t.getActiveAttrib(p,u),b=t.getAttribLocation(p,_.name);f.activeAttributes.push(_),f.activeAttributeLocations.push(b)}i=Wd(c.b.id,c.c.id),n.programs[i]=f}n.lastProgId!==i&&(t.useProgram(f.glProgram),n.lastProgId=i),F7(f.uniformSetters,c.e);var h=n.buffers.get(c.d);for(h||(h=V7(t,c.d),n.buffers.set(c.d,h)),u=0;u<f.activeAttributes.length;u++){_=f.activeAttributes[u],b=f.activeAttributeLocations[u],h.buffers[_.name]===void 0&&(h.buffers[_.name]=B7(t,_,c.d,f.attributes)),t.bindBuffer(t.ARRAY_BUFFER,h.buffers[_.name]);var y=Gd(t,_.type);if(y.arraySize===1)t.enableVertexAttribArray(b),t.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var C=y.size*4,j=C*y.arraySize,L=0;L<y.arraySize;L++)t.enableVertexAttribArray(b+L),t.vertexAttribPointer(b+L,y.size,y.baseType,!1,j,C*L)}for(n.toggle=!n.toggle,zi(aP(n),c.a),u=0;u<Ed.length;u++){var M=n[Ed[u]];M.toggle!==n.toggle&&M.enabled&&(q7[u](n),M.enabled=!1,M.toggle=n.toggle)}h.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,h.indexBuffer),t.drawElements(c.d.a.nG,h.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(c.d.a.nG,0,h.numIndices)}}return zi(o,e.g),r});function I7(e,r,n,t){var o=n.glProgram,c=n.currentUniforms,i=0,f=r.f;function u(_,b){var h=b.name,y=e.getUniformLocation(_,h);switch(b.type){case e.INT:return function(j){c[h]!==j&&(e.uniform1i(y,j),c[h]=j)};case e.FLOAT:return function(j){c[h]!==j&&(e.uniform1f(y,j),c[h]=j)};case e.FLOAT_VEC2:return function(j){c[h]!==j&&(e.uniform2f(y,j[0],j[1]),c[h]=j)};case e.FLOAT_VEC3:return function(j){c[h]!==j&&(e.uniform3f(y,j[0],j[1],j[2]),c[h]=j)};case e.FLOAT_VEC4:return function(j){c[h]!==j&&(e.uniform4f(y,j[0],j[1],j[2],j[3]),c[h]=j)};case e.FLOAT_MAT4:return function(j){c[h]!==j&&(e.uniformMatrix4fv(y,!1,new Float32Array(j)),c[h]=j)};case e.SAMPLER_2D:var C=i++;return function(j){e.activeTexture(e.TEXTURE0+C);var L=f.textures.get(j);L||(L=j.qz(e),f.textures.set(j,L)),e.bindTexture(e.TEXTURE_2D,L),c[h]!==j&&(e.uniform1i(y,C),c[h]=j)};case e.BOOL:return function(j){c[h]!==j&&(e.uniform1i(y,j),c[h]=j)};default:return function(){}}}for(var s={},d=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),p=0;p<d;p++){var g=e.getActiveUniform(o,p);s[t[g.name]||g.name]=u(o,g)}return s}function F7(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var U7=k(function(e,r,n){return kd(r,{g:n,f:{},h:e},J7,Q7)}),E7=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),R7=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),G7=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),W7=v(function(e,r){e.contextAttributes.antialias=!0}),N7=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),O7=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function J7(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};zi(function(o){return a(rP,r,o)},e.h);var n=Rr.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),b7(function(){return a(Nd,e,n)})):(n=Rr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Q7(e,r){return r.f=e.f,Nd(r)}var Z7=v(function(e,r){return new Float64Array([e,r])}),tE=function(e){return e[0]},oE=function(e){return e[1]},cE=v(function(e,r){return new Float64Array([e,r[1]])}),iE=v(function(e,r){return new Float64Array([r[0],e])}),fE=function(e){return{pp:e[0],pq:e[1]}},uE=function(e){return new Float64Array([e.pp,e.pq])},$E=v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n}),lE=v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n}),vE=function(e){var r=new Float64Array(2);return r[0]=-e[0],r[1]=-e[1],r},sE=v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/m0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function m0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}var dE=m0,pE=function(e){return e[0]*e[0]+e[1]*e[1]},bE=v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)}),mE=v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t}),hE=function(e){var r=new Float64Array(2),n=1/m0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r},gE=v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n}),_E=v(function(e,r){return e[0]*r[0]+e[1]*r[1]}),h0=new Float64Array(3),Od=new Float64Array(3),Jd=new Float64Array(3),X7=k(function(e,r,n){return new Float64Array([e,r,n])}),Y7=function(e){return e[0]},K7=function(e){return e[1]},eg=function(e){return e[2]},yE=v(function(e,r){return new Float64Array([e,r[1],r[2]])}),CE=v(function(e,r){return new Float64Array([r[0],e,r[2]])}),PE=v(function(e,r){return new Float64Array([r[0],r[1],e])}),SE=function(e){return{pp:e[0],pq:e[1],L:e[2]}},rg=function(e){return new Float64Array([e.pp,e.pq,e.L])},xE=v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Qd(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}var jE=v(Qd),wE=function(e){var r=new Float64Array(3);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r};function Zd(e,r,n){return n===void 0&&(n=new Float64Array(3)),Di(Qd(e,r,n),n)}var kE=v(Zd);function g0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}var LE=g0,TE=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},ME=v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+t*t+o*o)}),zE=v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return n*n+t*t+o*o});function Di(e,r){r===void 0&&(r=new Float64Array(3));var n=1/g0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var DE=Di,qE=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),It=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]},AE=v(It);function _0(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}var BE=v(_0),VE=v(function(e,r){var n,t=h0,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=It(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(It(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(It(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(It(r,t)+e[14])/n,o}),ag=Z(function(e,r,n,t){return new Float64Array([e,r,n,t])}),ng=function(e){return e[0]},tg=function(e){return e[1]},og=function(e){return e[2]},cg=function(e){return e[3]},HE=v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])}),IE=v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])}),FE=v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])}),UE=v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])}),ig=function(e){return{pp:e[0],pq:e[1],L:e[2],uV:e[3]}},fg=function(e){return new Float64Array([e.pp,e.pq,e.L,e.uV])},EE=v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n}),RE=v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n}),GE=function(e){var r=new Float64Array(4);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r},WE=v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/y0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function y0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}var NE=y0,OE=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]},JE=v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return Math.sqrt(n*n+t*t+o*o+c*c)}),QE=v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return n*n+t*t+o*o+c*c}),ZE=function(e){var r=new Float64Array(4),n=1/y0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r},ug=v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n}),XE=v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}),$g=new Float64Array(16),lg=new Float64Array(16),YE=new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),vg=function(e){var r=new Float64Array(16);return r[0]=e.ne,r[1]=e.ni,r[2]=e.nm,r[3]=e.nq,r[4]=e.nf,r[5]=e.nj,r[6]=e.nn,r[7]=e.nr,r[8]=e.ng,r[9]=e.nk,r[10]=e.no,r[11]=e.ns,r[12]=e.nh,r[13]=e.nl,r[14]=e.np,r[15]=e.nt,r},sg=function(e){return{ne:e[0],ni:e[1],nm:e[2],nq:e[3],nf:e[4],nj:e[5],nn:e[6],nr:e[7],ng:e[8],nk:e[9],no:e[10],ns:e[11],nh:e[12],nl:e[13],np:e[14],nt:e[15]}},KE=function(e){var r=new Float64Array(16);r[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],r[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],r[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],r[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],r[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],r[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],r[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],r[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],r[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],r[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],r[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],r[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5];var n=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12];if(n===0)return D;n=1/n;for(var t=0;t<16;t=t+1)r[t]=r[t]*n;return A(r)},eR=function(e){var r=ap(e),n=[e[12],e[13],e[14]];return r[3]=r[7]=r[11]=0,r[12]=-It([r[0],r[4],r[8]],n),r[13]=-It([r[1],r[5],r[9]],n),r[14]=-It([r[2],r[6],r[10]],n),r};function Xd(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2*o/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/(t-n),i[6]=0,i[7]=0,i[8]=(r+e)/(r-e),i[9]=(t+n)/(t-n),i[10]=-(c+o)/(c-o),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*c*o/(c-o),i[15]=0,i}var rR=Tr(Xd),aR=Z(function(e,r,n,t){var o=n*Math.tan(e*Math.PI/360),c=-o,i=c*r,f=o*r;return Xd(i,f,c,o,n,t)});function Yd(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-n),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2/(c-o),i[11]=0,i[12]=-(r+e)/(r-e),i[13]=-(t+n)/(t-n),i[14]=-(c+o)/(c-o),i[15]=1,i}var nR=Tr(Yd),tR=Z(function(e,r,n,t){return Yd(e,r,n,t,-1,1)});function Kd(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[3],f=e[4],u=e[5],s=e[6],d=e[7],p=e[8],g=e[9],_=e[10],b=e[11],h=e[12],y=e[13],C=e[14],j=e[15],L=r[0],M=r[1],I=r[2],R=r[3],E=r[4],K=r[5],J=r[6],le=r[7],Se=r[8],Te=r[9],qe=r[10],ce=r[11],Ae=r[12],Fe=r[13],Je=r[14],Re=r[15];return n[0]=t*L+f*M+p*I+h*R,n[1]=o*L+u*M+g*I+y*R,n[2]=c*L+s*M+_*I+C*R,n[3]=i*L+d*M+b*I+j*R,n[4]=t*E+f*K+p*J+h*le,n[5]=o*E+u*K+g*J+y*le,n[6]=c*E+s*K+_*J+C*le,n[7]=i*E+d*K+b*J+j*le,n[8]=t*Se+f*Te+p*qe+h*ce,n[9]=o*Se+u*Te+g*qe+y*ce,n[10]=c*Se+s*Te+_*qe+C*ce,n[11]=i*Se+d*Te+b*qe+j*ce,n[12]=t*Ae+f*Fe+p*Je+h*Re,n[13]=o*Ae+u*Fe+g*Je+y*Re,n[14]=c*Ae+s*Fe+_*Je+C*Re,n[15]=i*Ae+d*Fe+b*Je+j*Re,n}var oR=v(Kd),cR=v(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[4],f=e[5],u=e[6],s=e[8],d=e[9],p=e[10],g=e[12],_=e[13],b=e[14],h=r[0],y=r[1],C=r[2],j=r[4],L=r[5],M=r[6],I=r[8],R=r[9],E=r[10],K=r[12],J=r[13],le=r[14];return n[0]=t*h+i*y+s*C,n[1]=o*h+f*y+d*C,n[2]=c*h+u*y+p*C,n[3]=0,n[4]=t*j+i*L+s*M,n[5]=o*j+f*L+d*M,n[6]=c*j+u*L+p*M,n[7]=0,n[8]=t*I+i*R+s*E,n[9]=o*I+f*R+d*E,n[10]=c*I+u*R+p*E,n[11]=0,n[12]=t*K+i*J+s*le+g,n[13]=o*K+f*J+d*le+_,n[14]=c*K+u*J+p*le+b,n[15]=1,n}),iR=v(function(e,r){var n=new Float64Array(16);r=Di(r,h0);var t=r[0],o=r[1],c=r[2],i=Math.cos(e),f=1-i,u=Math.sin(e);return n[0]=t*t*f+i,n[1]=o*t*f+c*u,n[2]=c*t*f-o*u,n[3]=0,n[4]=t*o*f-c*u,n[5]=o*o*f+i,n[6]=o*c*f+t*u,n[7]=0,n[8]=t*c*f+o*u,n[9]=o*c*f-t*u,n[10]=c*c*f+i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}),fR=k(function(e,r,n){var t=new Float64Array(16),o=1/g0(r),c=r[0]*o,i=r[1]*o,f=r[2]*o,u=Math.cos(e),s=1-u,d=Math.sin(e),p=c*d,g=i*d,_=f*d,b=c*i*s,h=c*f*s,y=i*f*s,C=c*c*s+u,j=b+_,L=h-g,M=b-_,I=i*i*s+u,R=y+p,E=h+g,K=y-p,J=f*f*s+u,le=n[0],Se=n[1],Te=n[2],qe=n[3],ce=n[4],Ae=n[5],Fe=n[6],Je=n[7],Re=n[8],xr=n[9],Ge=n[10],rr=n[11],sr=n[12],Ur=n[13],Xe=n[14],Jr=n[15];return t[0]=le*C+ce*j+Re*L,t[1]=Se*C+Ae*j+xr*L,t[2]=Te*C+Fe*j+Ge*L,t[3]=qe*C+Je*j+rr*L,t[4]=le*M+ce*I+Re*R,t[5]=Se*M+Ae*I+xr*R,t[6]=Te*M+Fe*I+Ge*R,t[7]=qe*M+Je*I+rr*R,t[8]=le*E+ce*K+Re*J,t[9]=Se*E+Ae*K+xr*J,t[10]=Te*E+Fe*K+Ge*J,t[11]=qe*E+Je*K+rr*J,t[12]=sr,t[13]=Ur,t[14]=Xe,t[15]=Jr,t});function ep(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}var uR=k(ep),$R=function(e){return ep(e[0],e[1],e[2])},lR=Z(function(e,r,n,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*n,o[9]=t[9]*n,o[10]=t[10]*n,o[11]=t[11]*n,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o}),vR=v(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=r[11]*c,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function rp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}var sR=k(rp),dR=function(e){return rp(e[0],e[1],e[2])},pR=Z(function(e,r,n,t){var o=new Float64Array(16),c=t[0],i=t[1],f=t[2],u=t[3],s=t[4],d=t[5],p=t[6],g=t[7],_=t[8],b=t[9],h=t[10],y=t[11];return o[0]=c,o[1]=i,o[2]=f,o[3]=u,o[4]=s,o[5]=d,o[6]=p,o[7]=g,o[8]=_,o[9]=b,o[10]=h,o[11]=y,o[12]=c*e+s*r+_*n+t[12],o[13]=i*e+d*r+b*n+t[13],o[14]=f*e+p*r+h*n+t[14],o[15]=u*e+g*r+y*n+t[15],o}),bR=v(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=r[0],f=r[1],u=r[2],s=r[3],d=r[4],p=r[5],g=r[6],_=r[7],b=r[8],h=r[9],y=r[10],C=r[11];return n[0]=i,n[1]=f,n[2]=u,n[3]=s,n[4]=d,n[5]=p,n[6]=g,n[7]=_,n[8]=b,n[9]=h,n[10]=y,n[11]=C,n[12]=i*t+d*o+b*c+r[12],n[13]=f*t+p*o+h*c+r[13],n[14]=u*t+g*o+y*c+r[14],n[15]=s*t+_*o+C*c+r[15],n}),mR=k(function(e,r,n){var t=Zd(e,r,h0),o=Di(_0(n,t,Od),Od),c=Di(_0(t,o,Jd),Jd),i=$g,f=lg;return i[0]=o[0],i[1]=c[0],i[2]=t[0],i[3]=0,i[4]=o[1],i[5]=c[1],i[6]=t[1],i[7]=0,i[8]=o[2],i[9]=c[2],i[10]=t[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=-e[0],f[13]=-e[1],f[14]=-e[2],f[15]=1,Kd(i,f)});function ap(e){var r=new Float64Array(16);return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],r}var hR=ap,gR=k(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}),dg,pg=dg||Z(function(e,r,n,t){return n0(r,t,e.cM,e.uK,e.cR,function(o,c){var i=e.dA,f=t.node,u=p0(f);return np(c,function(s){var d=i(s),p=Dd(u,d);f=Vd(f,u,p,o),u=d})})}),bg,mg=bg||Z(function(e,r,n,t){return n0(r,t,e.cM,e.uK,e.cR,function(o,c){var i=e.kJ&&e.kJ(o),f=e.dA,u=Rr.title,s=Rr.body,d=p0(s);return np(c,function(p){su=i;var g=f(p),_=Ca("body")(S)(g.c$),b=Dd(d,_);s=Vd(s,d,b,o),d=_,su=0,u!==g.dx&&(Rr.title=u=g.dx)})})}),hg=typeof cancelAnimationFrame<"u"?cancelAnimationFrame:function(e){clearTimeout(e)},qi=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function np(e,r){r(e);var n=0;function t(){n=n===1?0:(qi(t),r(e),1)}return function(o,c){e=o,c?(r(e),n===2&&(n=1)):(n===0&&qi(t),n=2)}}function _R(e){var r=e.s5,n=e.s6,t=function(){t.a(r(C0()))};return mg({kJ:function(o){return t.a=o,Nn.addEventListener("popstate",t),Nn.navigator.userAgent.indexOf("Trident")<0||Nn.addEventListener("hashchange",t),v(function(c,i){if(!i.ctrlKey&&!i.metaKey&&!i.shiftKey&&i.button<1&&!c.target&&!c.hasAttribute("download")){i.preventDefault();var f=c.href,u=C0(),s=Dm(f).a;o(n(s&&u.oh===s.oh&&u.mB===s.mB&&u.oa.a===s.oa.a?LL(s):kL(f)))}})},cM:function(o){return l(e.cM,o,C0(),t)},dA:e.dA,uK:e.uK,cR:e.cR})}function C0(){return Dm(Rr.location.href).a||bn(1)}var yR=v(function(e,r){return a(wf,Kc,Yr(function(){r&&history.go(r),e()}))}),CR=v(function(e,r){return a(wf,Kc,Yr(function(){history.pushState({},"",r),e()}))}),PR=v(function(e,r){return a(wf,Kc,Yr(function(){history.replaceState({},"",r),e()}))}),tp={addEventListener:function(){},removeEventListener:function(){}},so=typeof document<"u"?document:tp,Nn=typeof window<"u"?window:tp,gg=k(function(e,r,n){return e0(Yr(function(t){function o(c){Kl(n(c))}return e.addEventListener(r,o,s0&&{passive:!0}),function(){e.removeEventListener(r,o)}}))}),_g=v(function(e,r){var n=Qa(e,r);return Cn(n)?A(n.a):D});function SR(){return typeof Rr.hidden<"u"?{jG:"hidden",qc:"visibilitychange"}:typeof Rr.mozHidden<"u"?{jG:"mozHidden",qc:"mozvisibilitychange"}:typeof Rr.msHidden<"u"?{jG:"msHidden",qc:"msvisibilitychange"}:typeof Rr.webkitHidden<"u"?{jG:"webkitHidden",qc:"webkitvisibilitychange"}:{jG:"hidden",qc:"visibilitychange"}}function yg(){return Yr(function(e){var r=qi(function(){e(Xa(Date.now()))});return function(){hg(r)}})}function Cg(){return Yr(function(e){e(Xa(Date.now()))})}function mu(e,r){return Yr(function(n){qi(function(){var t=document.getElementById(e);n(t?Xa(r(t)):Xl(TL(e)))})})}function Pg(e){return Yr(function(r){qi(function(){r(Xa(e()))})})}var Sg=v(function(e,r){return mu(r,function(n){return n[e](),lo})});function xR(){return{d6:op(),pg:{pp:Nn.pageXOffset,pq:Nn.pageYOffset,lh:so.documentElement.clientWidth,jF:so.documentElement.clientHeight}}}function op(){var e=so.body,r=so.documentElement;return{lh:Math.max(e.scrollWidth,e.offsetWidth,r.scrollWidth,r.offsetWidth,r.clientWidth),jF:Math.max(e.scrollHeight,e.offsetHeight,r.scrollHeight,r.offsetHeight,r.clientHeight)}}var jR=v(function(e,r){return Pg(function(){return Nn.scroll(e,r),lo})});function wR(e){return mu(e,function(r){return{d6:{lh:r.scrollWidth,jF:r.scrollHeight},pg:{pp:r.scrollLeft,pq:r.scrollTop,lh:r.clientWidth,jF:r.clientHeight}}})}var xg=k(function(e,r,n){return mu(e,function(t){return t.scrollLeft=r,t.scrollTop=n,lo})});function kR(e){return mu(e,function(r){var n=r.getBoundingClientRect(),t=Nn.pageXOffset,o=Nn.pageYOffset;return{d6:op(),pg:{pp:t,pq:o,lh:so.documentElement.clientWidth,jF:so.documentElement.clientHeight},q4:{pp:t+n.left,pq:o+n.top,lh:n.width,jF:n.height}}})}function LR(e){return a(wf,Kc,Yr(function(r){Rr.location.reload(e)}))}function TR(e){return a(wf,Kc,Yr(function(r){try{Nn.location=e}catch{Rr.location.reload(!1)}}))}var jg=Tr(function(e,r,n,t,o,c){var i=r!==9728&&r!==9729;return Yr(function(f){var u=new Image;function s(d){var p=d.createTexture();return d.bindTexture(d.TEXTURE_2D,p),d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,u),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,e),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,r),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,n),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,t),i&&d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null),p}u.onload=function(){var d=u.width,p=u.height,g=(d&d-1)===0,_=(p&p-1)===0,b=g&&_||!i&&n===33071&&t===33071;f(b?Xa({$:0,qz:s,a:d,b:p}):Xl(a(Oz,d,p)))},u.onerror=function(){f(Xl(Nz))},c.slice(0,5)!=="data:"&&(u.crossOrigin="Anonymous"),u.src=c})}),MR=function(e){return P(e.a,e.b)},z=B6,lc=P6,P0=k(function(e,r,n){var t=n.c,o=n.d,c=v(function(i,f){if(i.$){var s=i.a;return l(lc,e,f,s)}else{var u=i.a;return l(lc,c,f,u)}});return l(lc,c,l(lc,e,r,o),t)}),wg=function(e){return l(P0,z,S,e)},hu=k(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,f=e,u=l(e,t,o,l(hu,e,r,i)),s=c;e=f,r=u,n=s;continue e}}),Ya=function(e){return l(hu,k(function(r,n,t){return a(z,P(r,n),t)}),S,e)},gu=function(e){return l(hu,k(function(r,n,t){return a(z,r,t)}),S,e)},kg=function(e){var r=e;return gu(r)},cp=1,Lg=2,ip=0,S0=function(e){return{$:0,a:e}},A=function(e){return{$:0,a:e}},D={$:1},x0=function(e){return{$:1,a:e}},zR=0,Ia=function(e){return{$:1,a:e}},j0=v(function(e,r){return{$:3,a:e,b:r}}),fp=v(function(e,r){return{$:0,a:e,b:r}}),up=v(function(e,r){return{$:1,a:e,b:r}}),ea=function(e){return{$:0,a:e}},Tg=function(e){return{$:2,a:e}},DR=1,$p=U6,Mg=x8,qR=$8,zg=A6,lp=o9,ar=dd,Ar=v(function(e,r){return a(_8,e,$u(r))}),hn=v(function(e,r){return $(a(g8,e,r))}),vp=function(e){return a(Ar,`
    `,a(hn,`
`,e))},ve=k(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b,c=e,i=a(e,t,r),f=o;e=c,r=i,n=f;continue e}else return r}),$r=function(e){return l(ve,v(function(r,n){return n+1}),0,e)},w0=V6,AR=M6,BR=E6,Dg=k(function(e,r,n){e:for(;;)if(ae(e,r)<1){var t=e,o=r-1,c=a(z,r,n);e=t,r=o,n=c;continue e}else return n}),gn=v(function(e,r){return l(Dg,e,r,S)}),_n=v(function(e,r){return l(w0,e,a(gn,0,$r(r)-1),r)}),$t=D8,sp=function(e){var r=$t(e);return 97<=r&&r<=122},dp=function(e){var r=$t(e);return r<=90&&65<=r},VR=l8,qg=function(e){return sp(e)||dp(e)},Ag=function(e){var r=$t(e);return r<=57&&48<=r},Bg=function(e){return sp(e)||dp(e)||Ag(e)},je=function(e){return l(ve,z,S,e)},Ai=s8,Vg=v(function(e,r){return`

(`+(ar(e+1)+(") "+vp(Hg(r))))}),Hg=function(e){return a(Ig,e,S)},Ig=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,i=e.b,t=(function(){var h=Ai(n);if(h.$===1)return!1;var y=h.a,C=y.a,j=y.b;return qg(C)&&a(Mg,Bg,j)})(),o=t?"."+n:"['"+(n+"']"),u=i,s=a(z,o,r);e=u,r=s;continue e;case 1:var c=e.a,i=e.b,f="["+(ar(c)+"]"),u=i,s=a(z,f,r);e=u,r=s;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var p=(function(){return r.b?"The Json.Decode.oneOf at json"+a(Ar,"",je(r)):"Json.Decode.oneOf"})(),b=p+(" failed in the following "+(ar($r(d))+" ways:"));return a(Ar,`

`,a(z,b,a(_n,Vg,d)))}else{var i=d.a,u=i,s=r;e=u,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+(function(){return r.b?" at json"+a(Ar,"",je(r)):"!"})();default:var g=e.a,_=e.b,b=(function(){return r.b?"Problem with the value at json"+(a(Ar,"",je(r))+`:

    `):`Problem with the given value:

`})();return b+(vp(a(lp,4,_))+(`

`+g))}}),dr=32,yn=Z(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ft=d6,k0=t8,HR=G6,Bi=v(function(e,r){return sd(r)/sd(e)}),IR=a8,ra=k0(a(Bi,2,dr)),Vi=x(yn,0,ra,Ft,Ft),pp=m6,vc=function(e){return{$:1,a:e}},FR=v(function(e,r){return e(r)}),UR=v(function(e,r){return r(e)}),Ka=k6,lt=o8,Pa=b6,ER=z6,me=v(function(e,r){return ae(e,r)>0?e:r}),Fg=R6,po=function(e){return{$:0,a:e}},L0=h6,Ug=v(function(e,r){e:for(;;){var n=a(L0,dr,e),t=n.a,o=n.b,c=a(z,po(t),r);if(o.b){var i=o,f=c;e=i,r=f;continue e}else return je(c)}}),On=function(e){var r=e.a;return r},Eg=v(function(e,r){e:for(;;){var n=k0(r/dr);if(n===1)return a(L0,dr,e).a;var t=a(Ug,e,S),o=n;e=t,r=o;continue e}}),_u=v(function(e,r){if(r.R){var n=r.R*dr,t=lt(a(Bi,dr,n-1)),o=e?je(r.ap):r.ap,c=a(Eg,o,r.R);return x(yn,Pa(r.ac)+n,a(me,5,t*ra),c,r.ac)}else return x(yn,Pa(r.ac),ra,Ft,r.ac)}),RR=W6,GR=T6,Rg=ke(function(e,r,n,t,o){e:for(;;){if(r<0)return a(_u,!1,{ap:t,R:n/dr|0,ac:o});var c=vc(l(pp,dr,r,e)),i=e,f=r-dr,u=n,s=a(z,c,t),d=o;e=i,r=f,n=u,t=s,o=d;continue e}}),WR=O6,T0=v(function(e,r){if(e<=0)return Vi;var n=e%dr,t=l(pp,n,e-n,r),o=e-n-dr;return F(Rg,r,o,e,S,t)}),Cn=function(e){return!e.$},q=Q8,ne=I8,w=N8,N=F8,NR=0,bp=0,OR=5,re=function(e){return e},JR=re,pr=k(function(e,r,n){return ae(n,e)<0?e:ae(n,r)>0?r:n}),en=v(function(e,r){return B(r,{C:l(pr,0,1,r.C-e)})}),rn=v(function(e,r){return B(r,{C:l(pr,0,1,r.C+e)})}),Gg=v(function(e,r){return{bn:r.bn,iU:a(rn,.14,r.bn),iV:a(rn,.07,r.bn),i9:a(rn,.13,r.D),ja:a(rn,.23,r.D),kl:e,D:r.D,kV:a(rn,.03,r.D),kW:a(rn,.06,r.D),kX:a(rn,.09,r.D),kY:a(en,.03,r.D),kZ:a(en,.06,r.D),k_:a(en,.09,r.D),k$:{aO:.6,aQ:r.D.aQ,C:.92,aZ:.08},k2:a(en,.5,r.d9),k4:r.d9,k5:a(en,.15,r.d9)}}),Wg=v(function(e,r){var n=r.d9,t=n.C<.12?B(n,{C:.12}):n;return{bn:r.bn,iU:a(en,.14,r.bn),iV:a(en,.07,r.bn),i9:a(en,.13,r.D),ja:a(en,.23,r.D),kl:e,D:r.D,kV:a(en,.03,r.D),kW:a(en,.06,r.D),kX:a(en,.09,r.D),kY:a(rn,.03,r.D),kZ:a(rn,.06,r.D),k_:a(rn,.09,r.D),k$:{aO:.88,aQ:r.D.aQ,C:.18,aZ:.1},k2:a(rn,.5,t),k4:t,k5:a(rn,.15,t)}}),Ng=v(function(e,r){return r.r6?a(Gg,r,{bn:e,D:r.pM,d9:r.rq}):a(Wg,r,{bn:e,D:r.pM,d9:r.rq})}),mp=v(function(e,r){switch(e){case 0:return r.tB;case 1:return r.rE;case 2:return r.vd;case 3:return r.pT;case 4:return r.sm;default:return r.qC}}),Hi=v(function(e,r){return a(Ng,a(mp,e,r),r)}),M0=q6,Qe=v(function(e,r){e:for(;;){if(r.$===-2)return D;var n=r.b,t=r.c,o=r.d,c=r.e,i=a(M0,e,n);switch(i){case 0:var f=e,u=o;e=f,r=u;continue e;case 1:return A(t);default:var f=e,u=c;e=f,r=u;continue e}}}),G=Z(function(e,r,n,t){return{aO:t,aQ:e,C:n,aZ:r}}),Og={pM:x(G,.5833,.0952,.21,1),pS:x(G,.5833,.0952,.21,1),pT:x(G,.5718,.9231,.39,1),pZ:x(G,.5667,.0505,.495,1),p_:x(G,.5673,.6341,.59,1),p$:x(G,.4869,.6,.575,1),p0:x(G,.4722,.6,.5,1),p1:x(G,.963,.5294,.575,1),p2:x(G,.0224,1,.665,1),p3:x(G,0,0,1,1),p4:x(G,.1373,1,.575,1),qC:x(G,.4891,.7176,.425,1),rq:x(G,0,0,.96,1),rE:x(G,.4697,1,.33,1),r6:!0,sm:x(G,.7361,.6,.5,1),sM:"Erkal Dark",tB:x(G,.95,1,.5,1),uX:x(G,0,0,.82,1),vd:x(G,.1315,1,.45,1)},Jg={pM:x(G,0,0,.96,1),pS:x(G,.5833,.0952,.21,1),pT:x(G,.5673,.8966,.29,1),pZ:x(G,.5833,.0476,.42,1),p_:x(G,.5718,.9231,.39,1),p$:x(G,.4891,.7176,.425,1),p0:x(G,.4697,1,.33,1),p1:x(G,.963,.6,.375,1),p2:x(G,.0288,.5909,.44,1),p3:x(G,0,0,.82,1),p4:x(G,.1315,1,.45,1),qC:x(G,.4845,.6825,.315,1),rq:x(G,.5833,.0952,.21,1),rE:x(G,.4551,1,.26,1),r6:!1,sm:x(G,.7167,.7143,.35,1),sM:"Erkal Light",tB:x(G,.95,1,.4,1),uX:x(G,0,0,.96,1),vd:x(G,.131,1,.35,1)},Qg={pM:x(G,.6784,.5072,.1195,1),pS:x(G,.6784,.5072,.1195,1),pT:x(G,.6963,.7334,.3908,1),pZ:x(G,.6596,.1664,.2542,1),p_:x(G,.6963,.8378,.5419,1),p$:x(G,.4985,.746,.7698,1),p0:x(G,.2473,.9215,.6656,1),p1:x(G,.8231,.9879,.5331,1),p2:x(G,.9805,.9839,.5313,1),p3:x(G,.1717,.0624,.8829,1),p4:x(G,.1378,.9702,.5499,1),qC:x(G,.4985,.432,.6569,1),rq:x(G,.1708,.1275,.8046,1),rE:x(G,.2473,.6142,.5669,1),r6:!0,sm:x(G,.8231,.8982,.4245,1),sM:"Inferno",tB:x(G,.9804,.8923,.417,1),uX:x(G,.1712,.0491,.7129,1),vd:x(G,.1378,.8074,.4652,1)},Zg={pM:x(G,.6758,.4926,.1233,1),pS:x(G,.6758,.4926,.1233,1),pT:x(G,.6963,.7334,.3908,1),pZ:x(G,.6576,.1668,.257,1),p_:x(G,.6963,.8378,.5419,1),p$:x(G,.4985,.746,.7698,1),p0:x(G,.2989,.7749,.7169,1),p1:x(G,.8231,.9879,.5331,1),p2:x(G,.9805,.9839,.5313,1),p3:x(G,.1241,.0824,.8856,1),p4:x(G,.1226,.912,.646,1),qC:x(G,.4985,.432,.6569,1),rq:x(G,.1238,.1697,.8105,1),rE:x(G,.2989,.48,.6076,1),r6:!0,sm:x(G,.8231,.8982,.4245,1),sM:"Magma",tB:x(G,.9804,.8923,.417,1),uX:x(G,.1239,.0643,.7167,1),vd:x(G,.1227,.6106,.5447,1)},bo={aO:1,aQ:0,C:0,aZ:0},an=p8,nn=y8,tn=v(function(e,r){return e<1?r:l(nn,e,an(r),r)}),yu=L6,Cu=v8,vt=function(e){return a(Cu,e,"")},Xg=function(e){switch(e){case"0":return A(0);case"1":return A(1);case"2":return A(2);case"3":return A(3);case"4":return A(4);case"5":return A(5);case"6":return A(6);case"7":return A(7);case"8":return A(8);case"9":return A(9);case"a":return A(10);case"b":return A(11);case"c":return A(12);case"d":return A(13);case"e":return A(14);case"f":return A(15);default:return D}},Yg=h8,sc=function(e){return l(Yg,z,S,e)},hp=S8,z0=function(e){return l(ve,v(function(r,n){if(n.$===1){var t=n.a;return Ia(t)}else{var o=n.a,c=Xg(r);if(c.$)return Ia("Invalid hex digit: "+vt(r));var i=c.a;return ea(o*16+i)}}),ea(0),sc(hp(e)))},We=v(function(e,r){return ae(e,r)<0?e:r}),Kg=k(function(e,r,n){var t=a(We,e,a(We,r,n)),o=a(me,e,a(me,r,n)),c=(o+t)/2,i=o-t;if(i<1e-10)return{aO:1,aQ:0,C:c,aZ:0};var f=c>.5?i/(2-o-t):i/(o+t),u=(function(){if(o-e<1e-10){var d=ae(r,n)<0?6:0;return(r-n)/i+d}else return o-r<1e-10?(n-e)/i+2:(e-r)/i+4})(),s=u/6;return{aO:1,aQ:s,C:c,aZ:f}}),st=w8,gp=function(e){var r=a(st,"#",e)?a(tn,1,e):e;if(an(r)!==6)return Ia("Expected 6-character hex string, got: "+e);var n=l(nn,0,2,r),t=l(nn,2,4,r),o=l(nn,4,6,r),c=V(z0(n),z0(t),z0(o));if(!c.a.$&&!c.b.$&&!c.c.$){var i=c.a.a,f=c.b.a,u=c.c.a;return ea(l(Kg,i/255,f/255,u/255))}else return Ia("Invalid hex color: "+e)},_p=v(function(e,r){if(r.$)return e;var n=r.a;return n}),m=v(function(e,r){var n=function(o){return a(_p,bo,gp(l(nn,o*6,(o+1)*6,r)))},t=n(17);return{pM:t,pS:n(0),pT:n(4),pZ:n(8),p_:n(12),p$:n(14),p0:n(10),p1:n(13),p2:n(9),p3:n(15),p4:n(11),qC:n(6),rq:n(16),rE:n(2),r6:t.C<.5,sm:n(5),sM:e,tB:n(1),uX:n(7),vd:n(3)}}),e_={pM:x(G,.6338,.2131,.4193,1),pS:x(G,.6338,.2131,.4193,1),pT:x(G,.6711,.9819,.3556,1),pZ:x(G,.6313,.1141,.4988,1),p_:x(G,.6733,.9724,.4995,1),p$:x(G,.5206,.9279,.6164,1),p0:x(G,.408,.9525,.6016,1),p1:x(G,.8129,.6577,.6082,1),p2:x(G,.0348,.7434,.583,1),p3:x(G,.1588,.059,.8705,1),p4:x(G,.1378,.9702,.5499,1),qC:x(G,.5206,.6303,.518,1),rq:x(G,.1581,.1657,.844,1),rE:x(G,.408,.663,.5087,1),r6:!0,sm:x(G,.8129,.4325,.4851,1),sM:"Parula",tB:x(G,.0348,.5435,.4645,1),uX:x(G,.1584,.0494,.7011,1),vd:x(G,.1378,.8074,.4652,1)},r_={pM:x(G,.6497,.2697,.2788,1),pS:x(G,.6497,.2697,.2788,1),pT:x(G,.6963,.7334,.3908,1),pZ:x(G,.6441,.1308,.3827,1),p_:x(G,.6963,.8378,.5419,1),p$:x(G,.4985,.746,.7698,1),p0:x(G,.2594,.8806,.6797,1),p1:x(G,.8231,.9879,.5331,1),p2:x(G,.9805,.9839,.5313,1),p3:x(G,.1553,.0578,.8652,1),p4:x(G,.1378,.9702,.5499,1),qC:x(G,.4985,.432,.6569,1),rq:x(G,.1544,.1443,.7845,1),rE:x(G,.2594,.5758,.578,1),r6:!0,sm:x(G,.8231,.8982,.4245,1),sM:"Plasma",tB:x(G,.9804,.8923,.417,1),uX:x(G,.1549,.0495,.696,1),vd:x(G,.1378,.8074,.4652,1)},a_={pM:x(G,.7616,.2492,.257,1),pS:x(G,.7616,.2492,.257,1),pT:x(G,.6711,.9819,.3556,1),pZ:x(G,.7582,.1116,.3649,1),p_:x(G,.6733,.9724,.4995,1),p$:x(G,.5003,1,.4968,1),p0:x(G,.367,.9956,.5641,1),p1:x(G,.7883,.876,.5781,1),p2:x(G,.0151,.5947,.5814,1),p3:x(G,.1828,.0453,.8406,1),p4:x(G,.1749,.9924,.6211,1),qC:x(G,.5003,1,.4251,1),rq:x(G,.1818,.1003,.7645,1),rE:x(G,.3705,.8413,.4617,1),r6:!0,sm:x(G,.7886,.6673,.4517,1),sM:"Viridis",tB:x(G,.015,.4413,.4578,1),uX:x(G,.1823,.0425,.6725,1),vd:x(G,.1749,.7036,.5343,1)},yp=$([a(m,"Argonaut","232323ff000f8ce10bffb900008df86d43a600d8ebffffff444444ff2740abe15bffd2420092ff9a5feb67fff0fffffffffaf40e1019"),a(m,"0x96f","262427ff666db3e03affc73900cde8a392e89deaf6fcfcfa545452ff7e83bee55effd05e1bd5ebb0a3ebacedf8fcfcfafcfcfa262427"),a(m,"12-bit Rainbow","000000a0305040d080e090403060b06030900090c0dbded8685656c0606090d050e0d00000b0c080107020b0c0fffffffeffff040404"),a(m,"3024 Day","090300db2d2001a252caba0001a0e4a16a948fbecea5a2a25c5855dbaec33a34324a4543807d7cbcbbbacdab53f7f7f74a4543f7f7f7"),a(m,"3024 Night","090300db2d2001a252fded0201a0e4a16a94b5e4f4a5a2a25c5855e8bbd047413f4a4543807d7cd6d5d4cdab53f7f7f7a5a2a2090300"),a(m,"Aardvark Blue","191919aa342e4b8c0fdbba001370d3c43ac3008eb0bebebe525252f05b5095dc55ffe76360a4ece26be260b6cbf7f7f7dddddd102040"),a(m,"Abernathy","000000cd000000cd00cdcd001093f5cd00cd00cdcdfaebd7404040ff000000ff00ffff0011b5f6ff00ff00ffffffffffeeeeec111416"),a(m,"Adventure","040404d84a335da602eebb6e417ab3e5c499bdcfe5dbded8685656d76b4299b52cffb67097d7efaa7900bdcfe5e4d5c7feffff040404"),a(m,"Adventure Time","050404bd00134ab118e7741e0f4ac666599370a598f8dcc04e7cbffc5f5a9eff6eefc11a1997c69b5953c8faf4f6f5fbf8dcc01f1d45"),a(m,"Adwaita","241f31c01c282ec27ee8b5041e78e49841bb0ab9dcc0bfbc5e5c64ed333b4ad67cd2be3651a1ffc061cb4fd2fdf6f5f4000000ffffff"),a(m,"Adwaita Dark","241f31c01c282ec27ef5c2111e78e49841bb0ab9dcc0bfbc5e5c64ed333b57e389f8e45c51a1ffc061cb4fd2fdf6f5f4ffffff1d1d20"),a(m,"Afterglow","151515ac41427e8e50e5b5676c99bb9f4e857dd6cfd0d0d0505050ac41427e8e50e5b5676c99bb9f4e857dd6cff5f5f5d0d0d0212121"),a(m,"Aizen Dark","1a1a1af08898a4e09cf5dea484b4f8c8a2f490dcd0d0d6f0444444f08898a4e09cf5dea484b4f8c8a2f490dcd0ffffffd0d6f01a1a1a"),a(m,"Aizen Light","f0f2f6d00c363e9e28dd8c1a1c64f28636ec1590964a4d66adb2bcd00c363e9e28dd8c1a1c64f28636ec1590964a4d664a4d66f0f2f6"),a(m,"Alabaster","000000aa3731448c27cb9000325cc07a3e9d0083b2b7b7b7777777f0505060cb00f2af50007acce64ce600aacbf7f7f7000000f7f7f7"),a(m,"Alien Blood","1126167f2b272f7e25717f242f6a7f47587f327f77647d753c4812e0800918e000bde00000aae00058e000e0c473fa91637d750f1610"),a(m,"Andromeda","000000cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5666666cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5e5e5e5262a33"),a(m,"Apple Classic","000000c91b0000c200c7c4001c3fe1ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffd5a2002c2b2b"),a(m,"Apple System Colors","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74bffd60a0a84ffbf5af276d6ffffffffffffff1e1e1e"),a(m,"Apple System Colors Light","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74be5bc000a84ffbf5af269c9f2ffffff000000feffff"),a(m,"Arcoiris","333333da270012c258ffc656518bfce37bd963fad5bab2b2777777ffb9b9e3f6aaffddaab3e8f3cbbaf9bcffc7efefefeee4d9201f1e"),a(m,"Ardoise","2c2c2cd3322d588b35fca93a2465c27332b464e1b8f7f7f7535353fa58528dc252ffea516ab5f8be68ca89ffdbfefefeeaeaea1e1e1e"),a(m,"Arthur","3d352acd5c5c86af80e8ae5b6495eddeb887b0c4debbaa99554444cc553388aa22ffa75d87ceeb996600b0c4deddccbbddeedd1c1c1c"),a(m,"Atelier Sulphurpool","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b294f587c5e6687898ea4dfe2f19c637af5f7ff979db4202746"),a(m,"Atom","000000fd5ff187c38affd7b185befdb9b6fc85befde0e0e04c4c4cfd5ff194fa36f5ffa896cbfeb9b6fc85befde0e0e0c5c8c6161719"),a(m,"Atom One Dark","21252be06c7598c379e5c07b61afefc678dd56b6c2abb2bf767676e06c7598c379e5c07b61afefc678dd56b6c2abb2bfabb2bf21252b"),a(m,"Atom One Light","000000de3e353f953ad2b67c2f5af39500953f953abbbbbb000000de3e353f953ad2b67c2f5af3a000953f953affffff2a2c33f9f9f9"),a(m,"Aura","110f18ff676761ffcaffca85a277ffa277ff61ffcaedecee4d4d4dffca85a277ffffca85a277ffa277ff61ffcaedeceeedecee15141b"),a(m,"Aurora","23262ef0266f8fd46dffe66d102ee4ee5d4303d6b8c74ded4f545ef926728fd46dffe66d03d6b8ee5d4303d6b8c74dedffca2823262e"),a(m,"Ayu","11151cea6c737fd962f9af4f53bdfacda1fa90e1c6c7c7c7686868f07178aad94cffb45459c2ffd2a6ff95e6cbffffffbfbdb60b0e14"),a(m,"Ayu Light","000000ea6c6d6cbf43eca9443199e19e75c746ba94bababa686868f0717186b300f2ae49399ee6a37acc4cbf99d1d1d15c6166f8f9fa"),a(m,"Ayu Mirage","171b24ed827487d96cfacc6e6dcbfadabafa90e1c6c7c7c7686868f28779d5ff80ffd17373d0ffdfbfff95e6cbffffffcccac21f2430"),a(m,"Banana Blueberry","17141fff6b7f00bd9ce6c62f22e8dfdc396a56b6c2f1f1f1495162fe9ea198c379f9e46b91fff4da70d6bcf3ffffffffcccccc191323"),a(m,"Batman","1b1d1ee6dc44c8be46f4fd2273717474727162605fc6c5bf505354fff78efff27dfeed6c9194959a9a9da3a3a6dadbd66f6f6f1b1d1e"),a(m,"Belafonte Day","20111bbe100e858162d08b30426a7997522c989a9c968c835e5252be100e858162d08b30426a7997522c989a9cd5ccba45373cd5ccba"),a(m,"Belafonte Night","20111bbe100e858162eaa549426a7997522c989a9c968c835e5252be100e858162eaa549426a7997522c989a9cd5ccba968c8320111b"),a(m,"Birds Of Paradise","573d26be2d266ba18ae99d2a5a86adac80a674a6ade0dbb79b6c4ae8462795d8bad0d150b8d3edd19ecb93cfd7fff9d5e0dbb72a1f1d"),a(m,"Black Metal","000000486e6fdd9999a06666888888999999aaaaaac1c1c1404040486e6fdd9999a06666888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Bathory)","0000005f8787fbcb97e78a53888888999999aaaaaac1c1c14040405f8787fbcb97e78a53888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Burzum)","0000005f8787ddeecc99bbaa888888999999aaaaaac1c1c14040405f8787ddeecc99bbaa888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Dark Funeral)","0000005f8787d0dfee5f81a5888888999999aaaaaac1c1c14040405f8787d0dfee5f81a5888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Gorgoroth)","0000005f87879b8d7f8c7f70888888999999aaaaaac1c1c14040405f87879b8d7f8c7f70888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Immortal)","0000005f87877799bb556677888888999999aaaaaac1c1c14040405f87877799bb556677888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Khold)","0000005f8787eceee3974b46888888999999aaaaaac1c1c14040405f8787eceee3974b46888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Marduk)","0000005f8787a5aaa7626b67888888999999aaaaaac1c1c14040405f8787a5aaa7626b67888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Mayhem)","0000005f8787f3ecd4eecc6c888888999999aaaaaac1c1c14040405f8787f3ecd4eecc6c888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Nile)","0000005f8787aa9988777755888888999999aaaaaac1c1c14040405f8787aa9988777755888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Black Metal (Venom)","0000005f8787f8f7f279241f888888999999aaaaaac1c1c14040405f8787f8f7f279241f888888999999aaaaaac1c1c1c1c1c1000000"),a(m,"Blazer","000000b87a7a7ab87ab8b87a7a7ab8b87ab87ab8b8d9d9d94c4c4cdbbdbdbddbbddbdbbdbdbddbdbbddbbddbdbffffffd9e6f20d1926"),a(m,"Blue Berry Pie","0a4c6299246e5cb1b3eab9a890a5bd9d54a77e83ccf0e8d6463c5dc872720a6c7e7a31885f3d63bc94b75e60710a6c7ebabab91c0c28"),a(m,"Blue Dolphin","292d3eff8288b4e88df4d69f82aaffe9c1ff89ebffd0d0d09094a4ff8b92ddffa7ffe5859cc4ffddb0f6a3f7ffffffffc5f2ff006984"),a(m,"Blue Matrix","101116ff568000ff9cfffc5800b0ffd57bff76c1ffc7c7c7686868ff6e675ffa68fffc676871ffd682ec60fdffffffff00a2ff101116"),a(m,"Bluloco Dark","41444dfc2f5225a45cff936a3476ff7a82da4483aacdd4e08f9aaeff64803fc56bf9c85910b1feff78f85fb9bcffffffb9c0cb282c34"),a(m,"Bluloco Light","373a41d5275323974adf631c275fe4823ff127618dbabbc2676a77ff64803cbc66c5a3320099e1ce33c06d93bbd3d3d3373a41f9f9f9"),a(m,"Borland","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffffff4e0000a4"),a(m,"Box","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffff9fef00141d2b"),a(m,"Breadog","362c24b10b000072328b4c00005cb49b0097006a78baa99d514337de1100008f40ae60000074e1c300bd008697eae1da362c24f1ebe6"),a(m,"Breeze","31363bed151511d116f674001d99f39b59b61abc9ceff0f17f8c8dc0392b1cdc9afdbc4b3daee98e44ad16a085fcfcfceff0f131363b"),a(m,"Bright Lights","191919ff355bb7e876ffc25176d4ffba76e76cbfb5c2c8d74c4c4cff355bb7e876ffc25176d5ffba76e76cbfb5c2c8d7b3c9d7191919"),a(m,"Broadcast","000000da4939519f50ffd24a6d9cbed0d0ff6e9cbeffffff585858ff7b6b83d182ffff7c9fcef0ffffffa0cef0ffffffe6e1dc2b2b2b"),a(m,"Brogrammer","1f1f1ff811182dc55eecba0f2a84d24e5ab71081d6d6dbe5d6dbe5de352e1dd361f3bd091081d65350b90f7ddbffffffd6dbe5131313"),a(m,"Builtin Dark","000000bb000000bb00bbbb000d0dc8bb00bb00bbbbbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Builtin Light","000000bb000000bb00bbbb000000bbbb00bb00bbbbbbbbbb555555ff55552fd92fbfbf155555ffff55ff22ccccffffff000000ffffff"),a(m,"Builtin Pastel Dark","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffbbbbbb000000"),a(m,"Builtin Tango Dark","000000cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeecffffff000000"),a(m,"Builtin Tango Light","000000cc00004e9a06c4a0003465a475507b06989ab9bdb5555753ef29297dd527d6c329729fcfad7fa827d5d5eeeeec000000ffffff"),a(m,"C64","090300a2524c55a049bfce726657b3984ca367b6bdffffff000000a2524c55a049bfce726657b3984ca367b6bdf7f7f77869c440318d"),a(m,"CGA","000000aa000000aa00aa55000d0db7aa00aa00aaaaaaaaaa555555ff555555ff55ffff555555ffff55ff55ffffffffffaaaaaa000000"),a(m,"CLRS","000000f8282a328a5dfa701d135cd09f00bd33c3c1b3b3b3555753fb04162cc631e3bd0e1670ffe900b03ad5ceeeeeec262626ffffff"),a(m,"Calamity","2f2833fc644da5f69ce9d7a53b79c7f9267274d3ded5ced97e6c88fc644da5f69ce9d7a53b79c7f9267274d3deffffffd5ced92f2833"),a(m,"Carbonfox","282828ee539625be6a08bdba78a9ffbe95ff33b1ffdfdfe0484848f16da646c8802dc7c48cb6ffc8a5ff52bdffe4e4e5f2f4f8161616"),a(m,"Catppuccin Frappe","51576de78284a6d189e5c8908caaeef4b8e481c8bea5adce626880e671728ec772d9ba737b9ef0f2a4db5abfb5b5bfe2c6d0f5303446"),a(m,"Catppuccin Latte","5c5f77d20f3940a02bdf8e1d1e66f5ea76cb179299acb0be6c6f85de293e49af3deea02d456efffe85d82d9fa8bcc0cc4c4f69eff1f5"),a(m,"Catppuccin Macchiato","494d64ed8796a6da95eed49f8aadf4f5bde68bd5caa5adcb5b6078ec74868ccf7fe1c68278a1f6f2a9dd63cbc0b8c0e0cad3f524273a"),a(m,"Catppuccin Mocha","45475af38ba8a6e3a1f9e2af89b4faf5c2e794e2d5a6adc8585b70f3779989d88bebd39174a8fcf2aede6bd7cabac2decdd6f41e1e2e"),a(m,"Chalk","7d8b8fb23a52789b6ab9ac4a2a7facbd4f5a44a799d2d8d9888888f2484080c470ffeb624196fffc527553cdbdd2d8d9d2d8d92b2d2e"),a(m,"Chalkboard","000000c3737272c373c2c3727372c3c372c272c2c3d9d9d9585858dbaaaaaadbaadadbaaaaaadbdbaadaaadadbffffffd9e6f229262f"),a(m,"Challenger Deep","141228ff545862d196ffb37865b2ff906cff63f2f1a6b3cc565575ff808095ffa4ffe9aa91ddffc991e1aaffe4cbe3e7cbe1e71e1c31"),a(m,"Chester","080200fa5e5b16c98dffc83f288ad6d3459028dddee7e7e76f6b68fa5e5b16c98dfeef6d278ad6d3459027dedeffffffffffff2c3643"),a(m,"Ciapre","1818188e0d1648513bcc8b3f576d8c724d7c5c4f4baea47f555555ac3835a6a75ddcdf7c3097c6d33061f3dbb2f4f4f4aea47a191c27"),a(m,"Citruszest","404040ff545400cc7affd40000bfffff90fe48d1ccbfbfbf808080ff1a751affa3ffff0033cfffffb2fe00fff2f9f9f9bfbfbf121212"),a(m,"Cobalt Neon","142631ff23203ba5ffe9e75c8ff586781aa08ff586ba46b2fff688d4312e8ff586e9f06d3c7dd28230a76cbc678ff5868ff586142838"),a(m,"Cobalt Next","000000ff527b8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea162c35"),a(m,"Cobalt Next Dark","262f37f949678cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(m,"Cobalt Next Minimal","323d47ff657a8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(m,"Cobalt2","000000ff000038de21ffe50a1460d2ff005d00bbbbbbbbbb555555f40e173bd01dedc8095555ffff55ff6ae3faffffffffffff132738"),a(m,"Coffee Theme","000000c91b0000c200adaa000225c7ca30c700b8baa1a1a1686868ff6e671fba28b2af1b6871fff26af220bdbfffffff000000f5deb3"),a(m,"Crayon Pony Fish","2b1b1d91002b579524ab311b8c87b0692f50e8a86668525a4a383bc5255d8dff57c8381dcfc9fffc6cbaffceafb0949d68525a150707"),a(m,"Cursor Dark","2a2a2abf616aa3be8cebcb8b81a1c1b48ead88c0d0d8dee9505050bf616aa3be8cebcb8b81a1c1b48ead88c0d0ffffffffffff141414"),a(m,"Cutie Pro","000000f56e7fbec975f5866942d9c5d286b737cb8ad5c3c388847fe5a1a3e8d6a7f1bb7980c5deb294bb9dccbbffffffd5d0c9181818"),a(m,"Cyberdyne","080808ff837300c172d2a7000071cfff90fe6bffddf1f1f1484848ffc4bed6fcbafffed5c2e3ffffb2fee6e7feffffff00ff92151144"),a(m,"Cyberpunk","000000ff709200fbacfffa6a00bfffdf95ff86cbfeffffff595959ff8aa421f6bcfff7871bccfde6aefe99d6fcffffffe5e5e5332a57"),a(m,"Cyberpunk Scarlet Protocol","101116ff005101dc84faf9450271b6c930c700c5c7c7c7c7686868ff6e6760fa68fffc676871ffbd35ec60fdffffffffe41951101116"),a(m,"Dark Modern","272727f749492ea0439e6a030078d4d012731db4d6cccccc5d5d5ddc545223d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1f1f1f"),a(m,"Dark Pastel","000000ff555555ff55ffff555555ffff55ff55ffffbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffffffff000000"),a(m,"Dark+","000000cd31310dbc79e5e5102472c8bc3fbc11a8cde5e5e5666666f14c4c23d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1e1e1e"),a(m,"Darkermatrix","0910131a48316fa64c59590000cb6b4e375a1254591a48334040400d452a90d762e2e50000ff874e375a176c7300381e35451a070c0e"),a(m,"Darkmatrix","0910130065366fa64c7e80002c9a84523a60114d5300653640404000733d90d762e2e50046d8b8573d6612545a0065363e5715070c0e"),a(m,"Darkside","000000e8341c68c256f2d42c1c98e88e69c91c98e8bababa4c4c4ce05a4f77b869efd64b387cd3957bbe3d97e2babababababa222324"),a(m,"Dawnfox","575279b4637a618774ea9d34286983907aa956949fb2b6bd5f5695c26d85629f81eea8462d81a39a80b95ca7b4e6ebf3575279faf4ed"),a(m,"Dayfox","352c24a5222f396847ac54022848a96e33ce287980bfb6ae534c45b3434e577f63b86e284863b68452d5488d93f4ece63d2b5af6f2ee"),a(m,"Deep","000000d700051cd915d9bd265665ffb052da50d2dae0e0e0535353fb000722ff18fedc2b9fa9ffe09aff8df9ffffffffcdcdcd090909"),a(m,"Desert","4d4d4dff2b2b98fb98f0e68ccd853fffdeadffa0a0f5deb3626262ff555555ff55ffff5587ceffff55ffffd700ffffffffffff333333"),a(m,"Detuned","171717fe4386a6e32de6da730094d99b37ff50b7d9c7c7c7686868fa80acbde371fff27f00beffbe9eff5ed7ffffffffc7c7c7000000"),a(m,"Dimidium","000000cf494c60b442db9c110575d8af5ed21db6bbbab7b6817e7eff643b37e57bfccd1a688dfded6fe932e0fbdee3e4bab7b6141414"),a(m,"Dimmed Monokai","3a3d43be3f48879a3bc5a6354f76a1855c8d578fa4b9bcba888987fb001f0f722fc47033186de3fb00672e706dfdffb9b9bcba1f1f1f"),a(m,"Django","000000fd620941a83effe862315d3ff8f8f89df39fffffff585858ff943b73da70ffff94568264ffffffcfffd1fffffff8f8f80b2f20"),a(m,"Django Reborn Again","000000fd620941a83effe862245032f8f8f89df39fffffff4c4c4cff943b73da70ffff94568264ffffffcfffd1ffffffdadedc051f14"),a(m,"Django Smooth","000000fd620941a83effe862989898f8f8f89df39fe8e8e7727272ff943b73da70ffff94cacacaffffffcfffd1fffffff8f8f8245032"),a(m,"Doom One","000000ff6c6b98be65ecbe7ba9a1e1c678dd51afefbbc2cf595959ff665599bb66ecbe7ba9a1e1c678dd51afefbfbfbfbbc2cf282c34"),a(m,"Doom Peacock","1c1f24cb4b1626a6a6bcd42a2a6cc6a9a1e15699afede0ce51504dff5d3898be65e6f97251afefc678dd46d9ffdfdfdfede0ce2b2a27"),a(m,"Dot Gov","191919bf091d3d9751f6bb3417b2e07830b08bd2edffffff595959bf091d3d9751f6bb3417b2e07830b08bd2edffffffebebeb262c35"),a(m,"Dracula","21222cff555550fa7bf1fa8cbd93f9ff79c68be9fdf8f8f26272a4ff6e6e69ff94ffffa5d6acffff92dfa4fffffffffff8f8f2282a36"),a(m,"Dracula+","21222cff555550fa7bffcb6b82aaffc792ea8be9fdf8f8f2545454ff6e6e69ff94ffcb6bd6acffff92dfa4fffff8f8f2f8f8f2212121"),a(m,"Duckbones","0e101ae036005dcd97e3950000a3cb795ccc00a3cbebefc0444860ff482158db9ef6a10000b4e0b3a1e600b4e0b3b692ebefc00e101a"),a(m,"Duotone Dark","1f1d27d9393e2dcd73d9b76effc284de8d402488ffb7a1ff4e4a60d9393e2dcd73d9b76effc284de8d402488ffeae5ffb7a1ff1f1d27"),a(m,"Duskfox","393552eb6f92a3be8cf6c177569fbac4a7e79ccfd8e0def4544d8af083a2b1d196f9cb8c65b1cdccb1eda6dae3e2e0f7e0def4232136"),a(m,"ENCOM","0000009f0000008b00ffd0000081ffbc00ca008b8bbbbbbb555555ff000000ee00ffff000000ffff00ff00cdcdffffff00a595000000"),a(m,"Earthsong","121418c9423485c54cf5ae2e1398b9d0633d509552e5c6aa675f54ff645a98e036e0d5615fdaffff926984f088f6f7ece5c7a9292520"),a(m,"Electron Highlighter","15161fff6c8d00ffc3ffd7a977abffdaa4f400fdff778faf4a6789ff6c8d00ffc3ffd7a977abffdaa4f400fdffc3cee2a5b6d423283d"),a(m,"Elegant","0a1222ff025785cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ff005785cc95ffcb8b8dabe1c792eb3facefffffffced2d6292b31"),a(m,"Elemental","3c3c3098290f479a437f7111497f7d7f4e2f387f58807974555445e0502a61e070d6992779d9d9cd7c5459d599fff1e9807a7422211d"),a(m,"Elementary","242424d71c155aa513fdb40c134899e400382595e1efefef4b4b4bfc1c186bc219fec80e0955fffb00503ea8fc8c00ecefefef181818"),a(m,"Embark","1e1c31f0719ba1efd3ffe9aa57c7ffc792ea87dfebf8f8f2585273f02e6e2ce592ffb3781da0e2a742ea63f2f1a6b3cceeffff1e1c31"),a(m,"Embers Dark","16130f826d5757826d6d82576d578282576d576d82a39a905a504782825746403950483f8a8075beb6ae825757dbd6d1a39a9016130f"),a(m,"Espresso","353535d25252a5c261ffc66d6c99bbd197d9bed6ffeeeeec606060f00c0cc2e075e1e48b8ab7d9efb5f7dcf4ffffffffffffff323232"),a(m,"Espresso Libre","000000cc00001a921cf0e53a0066ffc5656b06989ad3d7cf555753ef29299aff87fffb5c43a8edff818a34e2e2eeeeecb8a8982a211c"),a(m,"Everblush","232a2de574748ccf7ee5c76b67b0e8c47fd56cbfbfb3b9b8464e50ef7e7e96d988f4d67a71baf2ce89df67cbe7bdc3c2dadada141b1e"),a(m,"Everforest Dark Hard","7a8478e67e80a7c080dbbc7f7fbbb3d699b683c092f2efdfa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbefd3c6aa1e2326"),a(m,"Everforest Light Med","7a8478e67e809ab373c1a2667fbbb3d699b683c092b2af9fa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbef5c6a72efebd4"),a(m,"Fahrenheit","1d1d1dcda0749e744dfecf757f0e0f734c4d979797ffffce404040fecea0cc734dfd9f4dcb4a054e739ffed04dffffffffffce000000"),a(m,"Fairyfloss","040303f92672c2ffdfe6c000c2ffdfffb8d1c5a3fff8f8f06090cbff857fc2ffdfffea00c2ffdfffb8d1c5a3fff8f8f0f8f8f25a5475"),a(m,"Farmhouse Dark","1d2027ba0004549d00c873000049e69f1b611fb65ce8e4e1464d54eb00097ac100ea9a00006efebf3b7f19e062f4eef0e8e4e11d2027"),a(m,"Farmhouse Light","1d20278d00033a7d00a95600092ccd820046229256a8a4a1394047eb00097ac100ea9a00006efebf3b7f00c649f4eef01d2027e8e4e1"),a(m,"Fideloper","292f33cb1e2dedb8acb7ab9b2e78c2c0236f309186eae3ce496068d4605ad4605aa866717c85c45c5db2819090fcf4dfdbdae0292f33"),a(m,"Firefly Traditional","000000c2372033bc26afad245a63ffd53ad233bbc7cccccc828282ff3b1e2ee720ecec16838dffff5cfe29f0f0ebebebf5f5f5000000"),a(m,"Firefox Dev","002831e638535eb83ca57706359ddfd75cff4b73a2dcdcdc26444de1003f1d9000cd9409006fc0a200da005794e2e2e27c8fa40e1011"),a(m,"Firewatch","585f6dd953605ab977dfb5634d89c4d5511944a8b6e6e5ff585f6dd953605ab977dfb5634c89c5d5511944a8b6e6e5ff9ba2b21e2027"),a(m,"Fish Tank","03073cc6004aacf157fecd5e525fb8986f82968763ecf0fc6c5b30da4b8adbffa9fee6a9b2befafda5cda5bd86f6ffececf0fe232537"),a(m,"Flat","222d3fa8232032a548e58d113167ac781aa02c9370b0b6ba475262d4312e2d9440e5be0c3c7dd28230a735b387e7eced2cc55d002240"),a(m,"Flatland","1d1d19f183399fd364f4ef6d5096be695abcd63865ffffff50504cd22a24a7d42cff894961b9d0695abcd63865ffffffb8dbef1d1f21"),a(m,"Flexoki Dark","100f0fd14d41879a39d0a2154385bece5d973aa99f878580575653af302966800bad8301205ea6a02f6f24837bcecdc3cecdc3100f0f"),a(m,"Flexoki Light","100f0faf302966800bad8301205ea6a02f6f24837b6f6e69b7b5acd14d41879a39d0a2154385bece5d973aa99fcecdc3100f0ffffcf0"),a(m,"Floraverse","08002e7e1a465d731acd751c1d6da1b7077e42a38cf3e0b84c3866d02063b4ce59fac35740a4cff12aae62caa8fff5dbdbd1b90e0d15"),a(m,"Forest Blue","333333f8818e92d3a21a8e638ed0ce5e468c31658ce2d8cd4a4a4afb3d666bb48d30c85a39a7a27e62b36096bfe2d8cde2d8cd051519"),a(m,"Framer","141414ff555598ec65ffcc3300aaffaa88ff88ddffcccccc414141ff8888b6f292ffd96633bbffcebbffbbecffffffff777777111111"),a(m,"Front End Delight","242526f8511b565747fa771d2c70b7f02e4f3ca1a6adadad5fac6df7431974ec4cfdc3253393cae75e4f4fbce68c735badadad1b1c1d"),a(m,"Fun Forrest","000000d6262b919c00be8a134699a38d4331da8213ddc2657f6a55e55a1cbfc65affcb1b7cc9cfd26349e6a96bffeaa3dec165251200"),a(m,"Galaxy","000000f9555f21b089fef02a589df6944d951f9ee7bbbbbb555555fa8c8f35bb9affff55589df6e756993979bcffffffffffff1d2837"),a(m,"Galizur","223344aa112233aa11ccaa222255cc7755aa22bbdd8899aa556677ff113333ff11ffdd333377ffaa77ff33ddffbbccddddeeff071317"),a(m,"Ghostty Default Style Dark","1d1f21cc6566b6bd68f0c67482a2beb294bb8abeb7c4c8c6666666d54e53b9ca4be7c5477aa6dac397d870c0b1eaeaeaffffff282c34"),a(m,"GitHub","3e3e3e970b1607962ac5bb94003e8ae946917cc4dfb2b2b2666666de00007ac895d7b6002e6cbaf2959200c7cbffffff3e3e3ef4f4f4"),a(m,"GitHub Dark","000000f7816656d364e3b3416ca4f8db61a22b7489ffffff4d4d4df7816656d364e3b3416ca4f8db61a22b7489ffffff8b949e101216"),a(m,"GitHub Dark Colorblind","484f58ec8e2c58a6ffd2992258a6ffbc8cff39c5cfb1bac46e7681fdac5479c0ffe3b34179c0ffd2a8ff56d4ddffffffc9d1d90d1117"),a(m,"GitHub Dark Default","484f58ff7b723fb950d2992258a6ffbc8cff39c5cfb1bac46e7681ffa19856d364e3b34179c0ffd2a8ff56d4ddffffffe6edf30d1117"),a(m,"GitHub Dark Dimmed","545d68f4706757ab5ac69026539bf5b083f039c5cf909dab636e7bff938a6bc46ddaaa3f6cb6ffdcbdfb56d4ddcdd9e5adbac722272e"),a(m,"GitHub Dark High Contrast","7a828eff949226cd4df0b72f71b7ffcb9eff39c5cfd9dee39ea7b3ffb1af4ae168f7c84391cbffdbb7ff56d4ddfffffff0f3f60a0c10"),a(m,"GitHub Light Colorblind","24292fb359000550ae4d2d000969da8250df1b7c836e778157606a8a46000969da633c01218bffa475f93192aa8c959f24292fffffff"),a(m,"GitHub Light Default","24292fcf222e1163294d2d000969da8250df1b7c836e778157606aa40e261a7f37633c01218bffa475f93192aa8c959f1f2328ffffff"),a(m,"GitHub Light High Contrast","0e1116a0111f024c1a3f22000349b4622cbc1b7c8366707b4b535d86061d055d204e2c001168e3844ae73192aa88929d0e1116ffffff"),a(m,"GitLab Dark","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff28262b"),a(m,"GitLab Dark Grey","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff222222"),a(m,"GitLab Light","303030a317000a7f3daf551d006cd8583cac00798a303030303030a317000a7f3daf551d006cd8583cac00798a303030303030fafaff"),a(m,"Glacier","2e343cbd0f2f35a770fb94351f5872bd2523778397ffffff404a55bd0f2f49e998fddf6e2a8bc1ea4727a0b6d3ffffffffffff0c1115"),a(m,"Grape","2d283fed22611fa91b8ddc20487df48d35c93bdeed9e9ea059516af0729a53aa5eb2dc87a9bcecad81c29de3eba288f79f9fa1171423"),a(m,"Grass","000000ff595900bb00e7b0000000a3ee59bb00bbbbbbbbbb959595ff595900bb00e7b0000000bbff55ff55fffffffffffff0a513773d"),a(m,"Grey Green","000000fe141474ff00f1ff0100deffff00f000ffbcffffff666666ff393900ff44ffd10000afffff008a00ffd3f5ececffffff002a1a"),a(m,"Gruber Darker","181818ff0a3642dc00ffdb0092a7cba095cb90aa9ee4e4e454494eff385142dc00ffdb0092a7cbafafda90aa9ef5f5f5e4e4e4181818"),a(m,"Gruvbox Dark","282828cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb2282828"),a(m,"Gruvbox Dark Hard","1d2021cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb21d2021"),a(m,"Gruvbox Light","fbf1c7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836fbf1c7"),a(m,"Gruvbox Light Hard","f9f5d7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836f9f5d7"),a(m,"Gruvbox Material","141617ea6926c1d041eecf756da3ecfd9bc1fe9d6effffff4c4c4cd3573bc1d041eecf752c86fffd9bc192a5dfffffffd4be981d2021"),a(m,"Gruvbox Material Dark","282828ea6962a9b665d8a6577daea3d3869b89b482d4be987c6f64ea6962a9b665d8a6577daea3d3869b89b482ddc7a1d4be98282828"),a(m,"Gruvbox Material Light","fbf1c7c14a4a6c782eb4710945707a945e804c7a5d654735a89984c14a4a6c782eb4710945707a945e804c7a5d4f3829654735fbf1c7"),a(m,"Guezwhoz","333333e851817ad694b7d0745aa0d69a90e058d6ced9d9d9808080e85181afd7afd1ed8564b2eda398ed61ede4edededd9d9d91d1d1d"),a(m,"HaX0R Blue","01092110b6ff10b6ff10b6ff10b6ff10b6ff10b6fffafafa48415700b3f700b3f700b3f700b3f700b3f700b3f7fefefe11b7ff010515"),a(m,"HaX0R Gr33N","001f0b15d00d15d00d15d00d15d00d15d00d15d00dfafafa33484319e20e19e20e19e20e19e20e19e20e19e20efefefe16b10e020f01"),a(m,"HaX0R R3D","1f0000b00d0db00d0db00d0db00d0db00d0db00d0dfafafa554040ff1111ff1010ff1010ff1010ff1010ff1010fefefeb10e0e200101"),a(m,"Hacktober","191918b34538587744d08949206ec5864651ac9166f1eee7464444b3332342824ac75a225389c5e795a5ebc587ffffffc9c9c9141414"),a(m,"Hardcore","1b1d1ef92672a6e22efd971f66d9ef9e6ffe5e7175ccccc6505354ff669dbeed5fe6db7466d9ef9e6ffea3babff8f8f2a0a0a0121212"),a(m,"Harper","010101f8b63f7fb5e1d6da25489e48b296c6f5bfd7a8a49d726e6af8b63f7fb5e1d6da25489e48b296c6f5bfd7fefbeaa8a49d010101"),a(m,"Havn Daggry","1f2842985248577159be6b003a577d7c5c97925780b0b5c51f2842cc4a35719679f1a5276089c07d7396aa869dd6dbeb3b4a7af8f9fb"),a(m,"Havn Skumring","252c47ea563e6ead7bf8b330596cf77c719ed588c1dce0ee38425cd172648c9e8feac58c5186cb9b7ceed17ab6fff6e1d6dbeb111522"),a(m,"Heeler","000000e44c2ebdd100f4ce655ba5f2ff95c2ff9763ffffff4c4c4ce44c2ebdd100f4ce650088ffff95c28da6e4fffffffdfdfd211f46"),a(m,"Highway","000000d00e18138034ffcb3e006bb3783482455271ededed5d504af07e18b1d130fff1204fc2fdde00715d504affffffededed222225"),a(m,"Hipster Green","000000b6214a00a600bfbf00246eb2b200b200a6b2bfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e584c138100b05"),a(m,"Hivacruz","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b2973ad435e6687898ea4dfe2f19c637af5f7ffede4e4132638"),a(m,"Homebrew","00000099000000a6009999000d0dbfb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e500ff00000000"),a(m,"Hopscotch","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379fd8b195c545c5c545b989498d5d3d5b33508ffffffb9b5b8322931"),a(m,"Hopscotch.256","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379dd464c8fc13efdcc591290bfc85e7c149b93ffffffb9b5b8322931"),a(m,"Horizon","000000e9567829d398fab79526bbd9ee64ac59e1e3e5e5e5666666ec6a883fdaa4fbc3a73fc4def075b56be4e6e5e5e5d5d8da1c1e26"),a(m,"Horizon Bright","16161dfc477700ca86f2a68200beddff58b100cdcbbfafac1a1c24fe5f8700d193e5a68800c9e2ff6cba00c3c2fff2ef16161dfdf0ed"),a(m,"Hot Dog Stand","000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6ffffffea3323"),a(m,"Hot Dog Stand (Mustard)","000000ea3323ea3323ea3323000000ea3323000000b9b9b9000000ea3323ea3323ea3323000000ea3323000000c6c6c6000000ffff54"),a(m,"Hurtado","575757ff1b00a5e055fbe74a496487fd5ff186e9fecbcccb404040d51d00a5df55fbe84a89beffc001c186eafedbdbdbdbdbdb000000"),a(m,"Hybrid","2a2e33b84d51b3bf5ae4b55e6e90b0a17eac7fbfb4b5b9b64345488d2e32798431e58a504b6b886e50794d7b745a626ab7bcba161719"),a(m,"IBM 5153 CGA","141414d033331bd01bd08c1b1b1bd0d01bd01bd0d0cecece4e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffcecece141414"),a(m,"IBM 5153 CGA (Black)","000000c4000000c400c47e000000c4c400c400c4c4c4c4c44e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffc4c4c4000000"),a(m,"IC Green PPL","014401ff273641a63876a8312ec3b950a0963ca078e6fef2106910b4fa5caefb86dafa872efaeb50fafa3cfac8e0f1dce0f1dc2c2c2c"),a(m,"IC Orange PPL","000000c13900a4a900caaf00bd6d00fc5e00f79500ffc88a6a4f2aff8c68f6ff40ffe36effbe55fc874fc69752fafaffffcb83262626"),a(m,"IR Black","4f4f4ffa6c60a8ff60fffeb796cafefa73fdc6c5feefedef7b7b7bfcb6b0cfffabffffccb5dcfffb9cfee0e0fefffffff1f1f1000000"),a(m,"IRIX Console","1a1919d4242637a327c29d280739e2911f9c4497dfcccccc767676f34f5945c731f9f2a74079ffc31ba26ed7d7f2f2f2f2f2f20c0c0c"),a(m,"IRIX Terminal","1a1919ff2b1e57ff3dffff440004ffff2cff56ffffffffffffff44ffff44ffff44fffc72ffff44ffff44ffff44ffff44f2f2f2000043"),a(m,"Iceberg Dark","1e2132e27878b4be82e2a47884a0c6a093c789b8c2c6c8d16b7089e98989c0ca8ee9b18991acd1ada0d395c4ced2d4dec6c8d1161821"),a(m,"Iceberg Light","dcdfe7cc517a668e3dc573392d539e7759b43f83a633374c8389a3cc3768598030b6662d22478e6845ad327698262a3f33374ce8e9ec"),a(m,"Idea","adadadfc525698b61cccb444437ee79d74b02488874b4b4bfffffffc707298b61cffff0b6c9cedfc7eff248887181818adadad202020"),a(m,"Idle Toes","323232d252527fe173ffc66d4099fff680ffbed6ffeeeeec606060f070709dff91ffe48b5eb7f7ff9dffdcf4ffffffffffffff323232"),a(m,"Jackie Brown","2c1d16ef57342baf2bbebf00246eb2d05ec100aceebfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e5ffcc2f2c1d16"),a(m,"Japanesque","343935cf3f617bb75be9b32a4c9ad4a57fc4389aadfafaf6595b59d18fa6767f2c78592f13597960429176bbcab2b5aef7f6ec1e1e1e"),a(m,"Jellybeans","929292e2737394b979ffba7b97bedce1c0fa00988edededebdbdbdffa1a1bddeabffdca0b1d8f6fbdaff1ab2a8ffffffdedede121212"),a(m,"JetBrains Darcula","000000fa5355126e00c2c3004581ebfa54ff33c2c1adadad555555fb717267ff4fffff006d9df1fb82ff60d3d1eeeeeeadadad202020"),a(m,"Jubi","3b3750cf7b9890a94b6ebfc0576ea6bc4f6875a7d2c3d3dea874cede90abbcdd6187e9ea8c9fcde16c87b7c9efd5e5f1c3d3de262b33"),a(m,"Kanagawa Dragon","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a6a69ce4687687a987e6c3847fb4ca938aa97aa89fc5c9c5c5c9c5181616"),a(m,"Kanagawa Lotus","1f1f28c840536f894e77713f4d699bb35b79597b755454648a8980d7474b6e915f836f4a6693bf624c835e857a43436c545464f2ecbc"),a(m,"Kanagawa Wave","090618c3404376946ac0a36e7e9cd8957fb86a9589c8c093727169e8242498bb6ce6c3847fb4ca938aa97aa89fdcd7badcd7ba1f1f28"),a(m,"Kanagawabones","1f1f28e46a7898bc6de5c2837eb3c9957fb87eb3c9ddd8bb49495eec818c9ec967f1c9827bc2dfa98fd27bc2dfa8a48dddd8bb1f1f28"),a(m,"Kanso Ink","14171dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c714171d"),a(m,"Kanso Mist","22262dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2a4a7a45c6066e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c722262d"),a(m,"Kanso Pearl","22262dc840536f894e77713f4d699bb35b79597b755454646d6f6ed7474b6e915f836f4a6693bf624c835e857a43436c22262df2f1ef"),a(m,"Kanso Zen","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c7090e13"),a(m,"Kibble","4d4d4dc7003129cf13d8e30e3449d18400ff0798abe2d1e35a5a5af015786ce05cf3f79e97a4f7c495f068f2e0fffffff7f7f70e100a"),a(m,"Kitty Default","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffdddddd000000"),a(m,"Kitty Low Contrast","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffffffff333333"),a(m,"Kolorit","1d1a1eff5b8247d7a1e8e5625db4eeda6cda57e9ebededed504d51ff5b8247d7a1e8e5625db4eeda6cda57e9ebedededefecec1d1a1e"),a(m,"Konsolas","000000aa171718b218ebae1f2323a5ad1edc42b0c8c8c1c17b716eff41415fff5fffff554b4bffff54ff69ffffffffffc8c1c1060606"),a(m,"Kurokula","333333c35a5278b3a9e1b9175c91dd8b79a6867268e0cfc2515151ffc34cafffa5fff70090dbffad93ffffcdb6ffffffe0cfc2141515"),a(m,"Lab Fox","2e2e2efc6d263eb383fca121db3b216b40a86e49cbffffff535353ff651753eaa8fca013db501f6a36b67d53e7ffffffffffff2e2e2e"),a(m,"Laser","626262ff8373b4fb7309b4bdfed300ff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5f92883ffb2fee6e7fefffffff106e3030d18"),a(m,"Later This Evening","2b2b2bd45a60afba67e5d289a0bad6c092d691bfb7494a4a525454d3232faabb39e5be396699d6ab53d65fc0aec1c2c2959595222222"),a(m,"Lavandula","2300467d1625337e6f7f6f494f4a7f5a3f7f58777f736e7d443a53e0516752e0c4e0c3868e87e0a776e09ad4e08c91fa736e7d050014"),a(m,"Light Owl","403f53de3d3b08916ae0af02288ed7d6438a2aa298bdbdbd989fb1de3d3b08916adaaa01288ed7d6438a2aa298f0f0f0403f53fbfbfb"),a(m,"Liquid Carbon","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc595959ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2303030"),a(m,"Liquid Carbon Transparent","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc404040ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2000000"),a(m,"Lovelace","282a36f37f975adecdf2a2728897f4c574dd79e6f3fdfdfd4e5165ff497118e3c8ff8037556fffb043d13fdceebebec1fdfdfd1d1f28"),a(m,"Man Page","000000cc000000a6009999000000b2b200b200a6b2b2b2b2666666e5000000cc00bfbf000000ffe500e500cbcbe5e5e5000000fef49c"),a(m,"Mariana","000000ec5f6699c794f9ae586699ccc695c65fb4b4f7f7f7666666f97b58acd1a8fac76185add6d8b6d882c4c4ffffffd8dee9343d46"),a(m,"Material","212121b7141f457b24f6981e134eb25600880e717cafafaf424242e83b3f7aba3abfaa0054a4f3aa4dbc26bbd1d9d9d9232322eaeaea"),a(m,"Material Dark","212121b7141f457b24f6981e134eb2701aa20e717cefefef4f4f4fe83b3f7aba3affea2e54a4f3aa4dbc26bbd1d9d9d9e5e5e5232322"),a(m,"Material Darker","000000ff5370c3e88dffcb6b82aaffc792ea89ddffffffff545454ff5370c3e88dffcb6b82aaffc792ea89ddffffffffeeffff212121"),a(m,"Material Design Colors","435b67fc38415cf19efed03237b6fffc226e59ffd1ffffffa1b0b8fc746dadf7befee16c70cffffc669b9affe6ffffffe7ebed1d262a"),a(m,"Material Ocean","546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff8f93a20f111a"),a(m,"Mathias","000000e52222a6e32dfc951ec48dfffa257367d9f0f2f2f2555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Matrix","0f191c23755a82d967ffd7003f524240993150b45a5073506880602fc07990d762faff004f7e7e11ff25c1ff8a678c614266440f191c"),a(m,"Matte Black","333333d35f5fffc107b91c1ce68e0dd35f5fbebebebebebe8a8a8d891c1cffc107b90a0af59e0bb91c1ceaeaeaffffffbebebe121212"),a(m,"Medallion","000000b64c007c8b16d3bd26616bb08c5a90916c25cac29a5e5219ff9149b2ca3bffe54aacb8ffffa0ffffbc51fed698cac2961d1908"),a(m,"Melange Dark","34302cbd818378997ae49b5d7f91b2b380b07b9695c1a78e867462d4776685b695ebc06da3a9cecf9bc289b3b6ece1d7ece1d7292522"),a(m,"Melange Light","e9e1dbc77b8b6e9b72bc5c007892bdbe79bb7397977d6658a98a78bf00213a684aa06d00465aa49041803d656854433a54433af1f1f1"),a(m,"Mellifluous","1a1a1ad29393b3b393cbaa89a8a1beb39fb0c0af8cdadada5b5b5bc95954828040a6794c5a65999c699574a39effffffdadada1a1a1a"),a(m,"Mellow","27272af5a19190b99fe6b99daca1cfe29ecaea83a5c1c0d4424246ffae9f9dc6acf0c5a9b9aedaecaad6f591b2cac9ddc9c7cd161617"),a(m,"Miasma","0000006857425f875fb36d4378824bbb7744c9a554d7c4836666666857425f875fb36d4378824bbb7744c9a554d7c483c2c2b0222222"),a(m,"Midnight In Mojave","1e1e1eff453a32d74bffd60a0a84ffbf5af25ac8faffffff515151ff453a32d74bffd60a0a84ffbf5af25ac8faffffffffffff1e1e1e"),a(m,"Mirage","011627ff999985cc95ffd7007fb5ffddb3ff21c7a8ffffff575656ff999985cc95ffd7007fb5ffddb3ff85cc95ffffffa6b2c01b2738"),a(m,"Misterioso","000000ff424274af68ffad29338f869414e623d7d7e1e1e0626262ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e02d3743"),a(m,"Molokai","121212fa257398e123dfd4601080d08700ff43a8d0bbbbbb555555f6669db1e05ffff26d00afffaf87ff51ceffffffffbbbbbb121212"),a(m,"Mona Lisa","351b0e9b291c636232c36e28515c5d9b1d29588056f7d75c874228ff4331b4b264ff95669eb2b4ff5b6a8acd8fffe598f7d66a120b0d"),a(m,"Monokai Classic","272822f92672a6e22ee6db74fd971fae81ff66d9effdfff16e7066f92672a6e22ee6db74fd971fae81ff66d9effdfff1fdfff1272822"),a(m,"Monokai Pro","2d2a2eff6188a9dc76ffd866fc9867ab9df278dce8fcfcfa727072ff6188a9dc76ffd866fc9867ab9df278dce8fcfcfafcfcfa2d2a2e"),a(m,"Monokai Pro Light","faf4f2e14775269d69cc7a0ae160327058be1c8ca829242aa59fa0e14775269d69cc7a0ae160327058be1c8ca829242a29242afaf4f2"),a(m,"Monokai Pro Light Sun","f8efe7ce4770218871b16803d4572b6851a22473b62c232ea59c9cce4770218871b16803d4572b6851a22473b62c232e2c232ef8efe7"),a(m,"Monokai Pro Machine","273136ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffc6b7678ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffcf2fffc273136"),a(m,"Monokai Pro Octagon","282a3aff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1696d77ff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1eaf2f1282a3a"),a(m,"Monokai Pro Ristretto","2c2525fd6883adda78f9cc6cf38d70a8a9eb85daccfff1f372696afd6883adda78f9cc6cf38d70a8a9eb85daccfff1f3fff1f32c2525"),a(m,"Monokai Pro Spectrum","222222fc618d7bd88ffce566fd9353948ae35ad4e6f7f1ff69676cfc618d7bd88ffce566fd9353948ae35ad4e6f7f1fff7f1ff222222"),a(m,"Monokai Remastered","1a1a1af4005f98e024fd971f9d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efd9d9d90c0c0c"),a(m,"Monokai Soda","1a1a1af4005f98e024fa84199d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efc4c5b51a1a1a"),a(m,"Monokai Vivid","121212fa293498e123fff30a0443fff800f801b6edffffff838383f6669db1e05ffff26d0443fff200f651cefffffffff9f9f9121212"),a(m,"Moonfly","323437ff54548cc85fe3c78a80a0ffcf87e879dac8c6c6c6949494ff518936c692c6c68474b2ffae81ff85dc85e4e4e4bdbdbd080808"),a(m,"N0Tch2K","383838a95551666666a98051657d3e767676c9c9c9d0b8a3545454a977758c8c8ca9917598bd5ea3a3a3dcdcdcd8c8bba0a0a0222222"),a(m,"Neobones Dark","0f191fde6e7c90ff6bb77e648190d4b279a766a5adc6d5cf334652e8838fa0ff85d68c6792a0e2cf86c165b8c198a39ec6d5cf0f191f"),a(m,"Neobones Light","e5ede6a8334c567a3094492728648688507d3b8992202e1899ac9c94253e3f5a22803d1c1d55737b3b702b747c415934202e18e5ede6"),a(m,"Neon","000000ff30455ffa74fffc7e0f15d8f924e700fffcc7c7c7686868ff5a5a75ff88fffd963c40cbf15be588fffeffffff00fffc14161a"),a(m,"Neopolitan","0000009a1a1a61ce3cfbde2d324883ff00808da6cef8f8f84c4c4c9a1a1a61ce3cfbde2d324883ff00808da6cef8f8f8ffffff271f19"),a(m,"Neutron","23252bb540365ab977deb5666a7c93a4799d3f94a8e6e8ef494b51b540365ab977deb5666a7c93a4799d3f94a8ebedf2e6e8ef1c1e22"),a(m,"Night Lion V1","4c4c4cbb00005fde8ff3f167276bd8bb00bb00dadfbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(m,"Night Lion V2","4c4c4cbb000004f623f3f16764d0f0ce6fdb00dadfbbbbbb555555ff55557df71dffff5562cbe8ff9bf500ccd8ffffffbbbbbb171717"),a(m,"Night Owl","011627ef535022da6eaddb6782aaffc792ea21c7a8ffffff575656ef535022da6effeb9582aaffc792ea7fdbcaffffffd6deeb011627"),a(m,"Night Owlish Light","011627d3423e2aa298daaa014876d6403f5308916a7a81817a8181f76e6e49d0c5dac26b5ca7e469709800c990989fb1403f53ffffff"),a(m,"Nightfox","393b44c94f6d81b29adbc074719cd69d79d663cdcfdfdfe0575860d169838ebaa4e0c98986abdcbaa1e27ad5d6e4e4e5cdcecf192330"),a(m,"Niji","333333d23e0854ca74fff7002ab9ffff50da1ef9f5ddd0c4515151ffb7b7c1ffaefcffb88efff3ffa2edbcffc7ffffffffffff141515"),a(m,"No Clown Fiesta","151515b4695890a959f4bf75bad7ffaa759f88afa2e1e1e17272727e97ab90a959f4bf75bad7ffaa759f88afa2afafafe0e1e4101010"),a(m,"No Clown Fiesta Light","d6d6d6874e42677940b890588ba1bfaa759f3e5f661515152b2b2b637786677940b8905893a2abaa759f99ab93373737151515e1e1e1"),a(m,"Nocturnal Winter","4d4d4df12d5209cd7ef5f17a3182e0ff2b6d09c87afcfcfc808080f16d860ae78dfffc676096ffff78a20ae78dffffffe6e5e50d0d17"),a(m,"Nord","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f0596377bf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee92e3440"),a(m,"Nord Light","3b4252bf616a96b17fc5a56581a1c1b48ead7bb3c3a5abb64c566abf616a96b17fc5a56581a1c1b48ead82afaeeceff4414858e5e9f0"),a(m,"Nord Wave","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f04c566abf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee9212121"),a(m,"Nordfox","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f053648dd06f79b1d196f0d3998cafd2c895bf93ccdce7ecf4cdcecf2e3440"),a(m,"Novel","000000cc0000009600d06b000000cccc00cc0087cca6a6a6808080cc0000009600d06b000000cccc00cc0087ccffffff3b2322dfdbc3"),a(m,"Nvim Dark","07080dffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f84f5258ffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f8e0e2ea14161b"),a(m,"Nvim Light","07080d5900080055236b5300004c73470045007373a1a4ab4f52585900080055236b5300004c73470045007373eef1f814161be0e2ea"),a(m,"Obsidian","000000b30d0e00bb00fecd223a9bdbbb00bb00bbbbbbbbbb555555ff000393c863fef874a1d7ffff55ff55ffffffffffcdcdcd283033"),a(m,"Ocean","000000e64c4c00a6009999000000b2d826d800a6b2bfbfbf808080ff1a1a00d900e5e5007373ffe500e500e5e5e5e5e5ffffff224fbc"),a(m,"Oceanic Material","000000ee2b2a40a33fffea2e1e80f08800a016afcaa4a4a4777777dc5c6070be71fff16354a4f3aa4dbc42c7daffffffc2c8d71c262b"),a(m,"Oceanic Next","162c35ec5f6799c794fac8636699ccc594c55fb3b3ffffff65737eec5f6799c794fac8636699ccc594c55fb3b3ffffffc0c5ce162c35"),a(m,"Ollie","000000ac2e3131ac61ac43002d57acb085281fa6ac8a8eac684432ff3d483bff99ff5e1e4488ffffc21d1ffaff5b6ea78a8dae222125"),a(m,"One Dark Two","1d1f23e2788198c379eac78671b9f4c88bda62bac6c9ccd34a505ae68991a8cc8eedcf978dc7f6d3a2e278c4cee6e6e6e6e6e621252b"),a(m,"One Double Dark","3d4452f163728cc570ecbe703fb1f5d373e317b9c4dbdfe5525d6fff777b82d882f5c0656dcaffff7bf400e5fbf7f9fcdbdfe5282c34"),a(m,"One Double Light","454b58f7484025a343cc81000087c1b50da9009ab7c5b2b30e131fff371100b90eec99001065dee500d800b4ddffffff383a43fafafa"),a(m,"One Half Dark","282c34e06c7598c379e5c07b61afefc678dd56b6c2dcdfe45d677ae06c7598c379e5c07b61afefc678dd56b6c2dcdfe4dcdfe4282c34"),a(m,"One Half Light","383a42e4564950a14fc184010184bca626a40997b3bababa4f525ee06c7598c379d8b36e61afefc678dd56b6c2ffffff383a42fafafa"),a(m,"Onenord","3b4252e06c759ec183ebcb8b81a1c1b988b088c0d0e5e9f0596377e06c759ec183ebcb8b81a1c1b988b08fbcbbeceff4e5e9f02e3440"),a(m,"Onenord Light","2e3440cb4f5348a53dee5e253879c59f4aca3ea1adb2b6bd646a76d163665f9e9dba793e1b40a69665af8fbcbbeceff42e3440f7f8fa"),a(m,"Operator Mono Dark","5a5a5aca372d4d7b3ad4d6974387cfb86cb472d5c6ced4cd9a9b99c37d6283d0a2fdfdc589d3f6ff2c7a82eadafdfdf6c3cac2191919"),a(m,"Overnight Slumber","0a1222ffa7c485cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ffa7c485cc95ffcb8b8dabe1c792ebffa7c4ffffffced2d60e1729"),a(m,"Oxocarbon","16161600dfdb00b4ffff429700c15ac693ffff74b8f2f4f858585800dfdb00b4ffff429700c15ac693ffff74b8f2f4f8f2f4f8161616"),a(m,"Pale Night Hc","000000f07178c3e88dffcb6b82aaffc792ea89ddffffffff737373f6a9aedbf1baffdfa6b4ccffddbdf2b8eaff999999cccccc3e4251"),a(m,"Pandora","000000ff424274af68ffad29338f869414e623d7d7e2e2e23f5648ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e1141e43"),a(m,"Paraiso Dark","2f1e2eef615548b685fec41806b6ef815ba45bc4bfa39e9b776e71ef615548b685fec41806b6ef815ba45bc4bfe7e9dba39e9b2f1e2e"),a(m,"Paul Millr","2a2a2aff000079ff0fe7bf00396bd7b449be66ccffbbbbbb666666ff008066ff66f3d64e709aeddb67e67adff2fffffff2f2f2000000"),a(m,"Pencil Dark","212121c3077110a778a89c14008ec45f498620a5bad9d9d94f4f4ffb007a5fd7aff3e43020bbfc6855de4fb8ccf1f1f1f1f1f1212121"),a(m,"Pencil Light","212121c3077110a778a89c14008ec4523c7920a5bab3b3b3424242fb007a52caa2c0b10020bbfc6855de4fb8ccf1f1f1424242f1f1f1"),a(m,"Peppermint","353535e7466989d287dab853449fd0da62dc65aaafb4b4b4535353e4859ba3cca2e1e4876fbce2e586e796dcdbdfdfdfc8c8c8000000"),a(m,"Phala Green Dark","000000ab150000b100a9a7000223c0c22ec000b4c0cbcbcb797979ed220000db00eae7000433ffed3aea00e8eaeaeaeac1fc03000000"),a(m,"Piatto Light","414141b2377166781ecd6f343c5ea8a454b266781ebfbfbf3f3f3fdb3365829429cd6f343c5ea8a454b2829429f2f2f2414141ffffff"),a(m,"Pnevma","2f2e2da3666690a57dd7af877fa5bdc79ec48adbb4d0d0d04a4845d78787afbea2e4c9afa1bdced7bedab1e7ddefefefd0d0d01c1c1c"),a(m,"Poimandres","1a1e28d0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd1a1e28"),a(m,"Poimandres Darker","16161ed0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd16161e"),a(m,"Poimandres Storm","252b37d0679d5de4c7fffac289ddfff087bd89ddffffffffa6accdd0679d5de4c7fffac2add7fff087bdadd7ffffffffa6accd252b37"),a(m,"Poimandres White","fefeffff209001dab2e5ba4e8abacdeb83948abacd000000969cbdff209001dab2e5ba4e0ebfffeb83940ebfff000000969cbdfefeff"),a(m,"Popping And Locking","1d2021cc241d98971ad79921458588b16286689d6aa89984928374f42c3eb8bb26fabd2f99c6cad3869b7ec16eebdbb2ebdbb2181921"),a(m,"Powershell","000000981a22098003c4a0004140c3d336820e807f7f7c7f808080ef29291cfe3cfefe45268ad2fe13fa29fffec2c1c3f6f6f7052454"),a(m,"Primary","000000db44370f9d58f4b4004285f4db44374285f4bfbfbf000000db44370f9d58f4b4004285f44285f40f9d58ffffff000000ffffff"),a(m,"Pro","00000099000000a6009999002009dbb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e5f2f2f2000000"),a(m,"Pro Light","000000e5492b50d148c6c4403b75ffed66e84ed2dec2c2c29f9f9fff664048d53ebfbe230082ffff7eff3bd1d2f2f2f2191919ffffff"),a(m,"Purple Rain","000000ff260e9be205ffc40000a2fa815bb500deefffffff565656ff4250b8e36effd85200a6ffac7bf074fdf3fffffffffbf621084a"),a(m,"Purplepeter","0a0520ff796d99b481efdfac66d9efe78fcdba8cffffba81504b63f99f92b4be8ff2e9bf79daedba91d4a0a0d6b9aed3ece7fa2a1a4a"),a(m,"Rapture","000000fc644d7afde1fff09b6c9bf5ff4fa164e0ffc0c9e5304b66fc644d7afde1fff09b6c9bf5ff4fa164e0ffffffffc0c9e5111e2a"),a(m,"Raycast Dark","000000ff536059d499ffc53156c2ffcf2f9852eee5ffffff4c4c4cff636359d499ffc53156c2ffcf2f9852eee5ffffffffffff1a1a1a"),a(m,"Raycast Light","000000b12424006b4ff8a300138af29a1b6e3eb8bfbfbfbf000000b12424006b4ff8a300138af29a1b6e3eb8bfffffff000000ffffff"),a(m,"Rebecca","12131edd775504dbb5f2e7b77aa5ffbf9cf956d3c2e4e3e9666699ff92cd01eac0fffca869c0fac17ff88bfde1f4f2f9e8e6ed292a44"),a(m,"Red Alert","000000d62e4e71be6bbeb86b489beee979d76bbeb8d6d6d6666666e02553aff08cdfddb765aaf1ddb7dfb7dfddffffffffffff762423"),a(m,"Red Planet","2020208c3432728271e8bf6a69819e8964925b8390b9aa99676767b55242869985ebeb9160827ede497438add8d6bfb8c2b790222222"),a(m,"Red Sands","000000ff3f0000bb00e7b0000072ffbb00bb00bbbbbbbbbb6e6e6ed41a1a00bb00e7b0000072aeff55ff55ffffffffffd7c9a77a251e"),a(m,"Relaxed","151515bc5653909d63ebc17a6a8799b06698c9dfffd9d9d9636363bc5653a0ac77ebc17a7eaac7b06698acbbd0f7f7f7d9d9d9353a44"),a(m,"Retro","13a10e13a10e13a10e13a10e13a10e13a10e13a10e13a10e16ba1016ba1016ba1016ba1016ba1016ba1016ba1016ba1013a10e000000"),a(m,"Retro Legends","262626de545445eb45f7bf2b4066f2bf4cf240d9e6bfe6bf4c594cff666659ff59ffd9334c80ffe666ff59e6fff2fff245eb450d0d0d"),a(m,"Rippedcasts","000000cdaf95a8ff60bfbb1f75a5b0ff73fd5a647ebfbfbf666666eecbadbcee68e5e50086bdc9e500e58c9bc4e5e5e5ffffff2b2b2b"),a(m,"Rose Pine","26233aeb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def46e6a86eb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def4e0def4191724"),a(m,"Rose Pine Dawn","f2e9e1b4637a286983ea9d3456949f907aa9d7827e5752799893a5b4637a286983ea9d3456949f907aa9d7827e575279575279faf4ed"),a(m,"Rose Pine Moon","393552eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def46e6a86eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def4e0def4232136"),a(m,"Rouge 2","5d5d6bc6797e969e92dbcdab6e94b94c4e788ab6c1e8e8ea616274c6797ee6dcc4e6dcc498b3cd8283a1abcbd3e8e8eaa2a3aa17182b"),a(m,"Royal","241f2b91284c23801cb49d276580b0674d968aaabe5249663e3a4ad5356c2cd946fde83b90baf9a479e3acd4eb9e8cbd514968100815"),a(m,"Ryuuko","2c3941865f5b66907db1a9906a8e95b18a7388b2acececec5d7079865f5b66907db1a9906a8e95b18a7388b2acecececececec2c3941"),a(m,"Sakura","000000d5237041af1abc70536964abc71fbf939393998eac786d69f41d9922e529f595749892f1e90cddeeeeeecbb6ffdd7bdc18131e"),a(m,"Scarlet Protocol","101116ff005100dc84faf9450271b6ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffbd35ec60fdffffffffe419511c153d"),a(m,"Sea Shells","17384cd15123027c9bfca02f1e495068d4f150a3b5deb88d434b53d48678628d98fdd39f1bbcddbbe3ee87acb4fee4cedeb88d09141b"),a(m,"Seafoam Pastel","757575825d4d728c62ada16d4d7b828a7267729494e0e0e08a8a8acf937a98d9aafae79d7ac3cfd6b2a1ade0e0e0e0e0d4e7d4243435"),a(m,"Selenized Black","252525ed4a4670b433dbb32d368aebeb6eb73fc5b7b9b9b9777777ff5e5683c746efc5414f9cfeff81ca56d8c9dededeb9b9b9181818"),a(m,"Selenized Dark","184956fa575075b938dbb32d4695f7f275be41c7b9adbcbc72898fff665c84c747ebc13d58a3ffff84cd53d6c7cad8d9adbcbc103c48"),a(m,"Selenized Light","ece3ccd2212d489100ad89000072d4ca4898009c8f53676d909995cc1729428b00a78300006dcec4439200978a3a4d5353676dfbf3db"),a(m,"Seoulbones Dark","4b4b4be388a398bd99ffdf9b97bddea5a6c56fbdbedddddd797172eb99b18fcd92ffe5b3a2c8e9b2b3da6bcacba8a8a8dddddd4b4b4b"),a(m,"Seoulbones Light","e2e2e2dc5284628562c485620084a3896788008586555555a5a0a1be3c6d487249a76b48006f897f4c7e006f70777777555555e2e2e2"),a(m,"Seti","323232c228328ec43de0c64f43a5d58b57b58ec43deeeeee3f3f3fc228328ec43de0c64f43a5d58b57b58ec43dffffffcacecd111213"),a(m,"Shades Of Purple","000000d904293ad900ffe7006943ffff2c7000c5c7c7c7c7686868f92a1c43d426f1d0006871ffff77ff79e8fbffffffffffff1e1d40"),a(m,"Shaman","012026b2302d00a9415e8baa449a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6405555001015"),a(m,"Slate","222222e2a8bf81d778c4c9c0335856a481d315ab9c02c5e0ffffffffcdd9beffa8d0ccca7ab0d2c5a7d98cdfe0e0e0e035b1d2222222"),a(m,"Sleepy Hollow","572100ba393491773fb556005f63b4a17c7b8faea9af9a914e4b61d9443fd6b04ef668138086efe2c2bba4dce7d2c7a9af9a91121214"),a(m,"Smyck","000000b841317da900c4a50062a3c4ba8acc207383a1a1a17a7a7ad6837cc4f137fee14d8dcff0f79aff6ad9cff7f7f7f7f7f71b1b1b"),a(m,"Snazzy","000000fc434650fb7cf0fb8c49bafffc4cb48be9feededec555555fc434650fb7cf0fb8c49bafffc4cb48be9feededecebece61e1f29"),a(m,"Snazzy Soft","000000ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0686868ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0eff0eb282a36"),a(m,"Soft Server","000000a2686a9aa56aa3906a6b8fa36a71a36ba58f99a3a2666c6cdd5c60bfdf55deb36062b1df606edf64e39cd2e0de99a3a2242626"),a(m,"Solarized Darcula","25292af24840629655b688002075c7797fd415968dd2d8d965696af24840629655b688002075c7797fd415968dd2d8d9d2d8d93d3f41"),a(m,"Solarized Dark Higher Contrast","002831d11c246cbe6ca577062176c7c61c6f259286eae3cb006488f5163b51ef84b27e28178ec8e24d8e00b39efcf4dc9cc2c3001e27"),a(m,"Solarized Dark Patched","002831d11c24738a05a577062176c7c61c6f259286eae3cb475b62bd3613475b625368707082845956ba819090fcf4dc708284001e27"),a(m,"Solarized Osaka Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"Sonokai","181819fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e37f8490fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e3e2e2e32c2e34"),a(m,"Spacedust","6e5346e35b005cab96e3cd7b0f548be35b0006afc7f0f1ce684c31ff8a3aaecab8ffc87867a0ceff8a3a83a7b4fefff1ecf0c10a1e24"),a(m,"Spacegray","000000b04b5787b379e5c1797d8fa4a4799685a7a5b3b8c34c4c4cb04b5787b379e5c1797d8fa4a4799685a7a5ffffffb3b8c320242d"),a(m,"Spacegray Bright","080808bc5553a0b56cf6c9877baec1b98aae85c9b8d8d8d8626262bc5553a0b56cf6c9877baec1b98aae85c9b8f7f7f7f3f3f32a2e3a"),a(m,"Spacegray Eighties","15171cec5f6781a764fec2545486c0bf83c157c2c1efece7555555ff697393d493ffd2564d84d1ff55ff83e9e4ffffffbdbaae222222"),a(m,"Spacegray Eighties Dull","15171cb24a5692b477c6735a7c8fa5a5789e80cdcbb3b8c3555555ec5f6789e986fec2545486c0bf83c158c2c1ffffffc9c6bc222222"),a(m,"Spiderman","1b1d1ee60813e22928e247562c3fff2435db3256fffffef6505354ff0325ff3338fe3a351d50ff747cff6184fffffff9e3e3e31b1d1e"),a(m,"Spring","000000ff4d831f8c3b1fc95b1dd3ee8959a83e999fbfbfbf000000ff00211fc231d5b80715a9fd8959a83e999fffffff4d4d4cffffff"),a(m,"Square","050505e9897cb6377decebbea9cdeb75507bc9caecf2f2f2474747f99286c3f786fcfbccb6defbad7fa8d7d9fce2e2e2acacab1a1a1a"),a(m,"Squirrelsong Dark","372920ba4138468336d4b1394395c6855fb82f9794d3b9a2704f39df4d43659a4ce8c23f4ca4db9d70da60aca9f2d4bbb19b89372920"),a(m,"Srcery","1c1b19ef2f27519f50fbb8292c78bfe02c6d0aaeb3baa67f918175f7534198bc37fed06e68a8e4ff5c8f2be4d0fce8c3fce8c31c1b19"),a(m,"Starlight","242424f62b5a47b413e3c40124acd4f2affd13c299e6e6e6616161ff4d5135d450e9e8365dc5f8feabf224dfc4ffffffffffff242424"),a(m,"Sublette","253045ee557755ee77ffdd885588ffff77cc44eeeef5f5da405570ee665599ee77ffff7777bbffaa88ff55ffbbffffeeccced0202535"),a(m,"Subliminal","7f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d47f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d4d4d4d4282c35"),a(m,"Sugarplum","1111475ca8dc53b397249a84db7dddd0beeef9f3f9a175d444447a5cb5dc52deb501f5c7fa5dfdc6a5fdffffffb577fddb7ddd111147"),a(m,"Sundried","302b2aa7463d5877449d602a485b988646519c814fc9c9c94d4e48aa000c128c21fc6a217999f7fd8aa1fad484ffffffc9c9c91a1818"),a(m,"Sunset Drive","0a0a13ff006300f992ffe90000a4ffff57fd00ffedededff3e3e4bff948b00fcb9ffff683ea0ffff93ff38fffff8f8ffededfe0f0f1a"),a(m,"Symfonic","000000dc322f56db3aff84000084d4b729d9ccccffffffff414347dc322f56db3aff84000084d4b729d9ccccffffffffffffff000000"),a(m,"Synthwave","000000f6188f1ebb2bfdf8342186ecf85a2112c3e2ffffff7f7094f841a025c141fdf4542f9dedf9713719cde6ffffffdad9c7000000"),a(m,"Synthwave Alpha","241b30e60a7000986cadad3e6e29adb300ad00b0b1b9b1bc7f7094e60a700ae4a4f9f972aa54f9ff00f600fbfdf2f2e3f2f2e3241b30"),a(m,"Synthwave Everything","fefefef97e7272f1b8fede5d6d77b3c792eaf772e0fefefefefefef8841472f1b8fff95136f9f6e1acfff92aadfefefef0eff12a2139"),a(m,"Tango Adapted","000000ff000059d600e3be0000a2ffc17ecc00d0d6c0c5bb8f928bff00136dd900ccbe0088c9ffe9a7e100d8d9f6f6f4000000ffffff"),a(m,"Tango Half Adapted","000000ff00004cc300e2c000008ef6a96cb300bdc3babfb5797d76ff001370dc00d9c60076bfffd898d100d0d4f4f4f2000000ffffff"),a(m,"Tearout","685742cc967b97976d6c9861b5955ec9a554d7c483b5955e75644fcc967b97976d6c9861b5955ec9a554d7c483b5955ef4d2ae34392d"),a(m,"Teerb","1c1c1cd68686aed686d7af8786aed6d6aed68adbb4d0d0d04f4f4fd68686aed686e4c9af86aed6d6aed6b1e7ddefefefd0d0d0262626"),a(m,"Terafox","2f3239e85c517aa4a1fda47f5a93aaad5c7ca1cdd8ebebeb4e5157eb746b8eb2affdb29273a3b7b97490afd4deeeeeeee6eaea152528"),a(m,"Terminal Basic","00000099000000a6009999000000b2b200b200a6b2bfbfbf666666e5000000d900bfbf000000ffe500e500d8d8e5e5e5000000ffffff"),a(m,"Terminal Basic Dark","000000c653396ac44bb8b74a6444edd357db69c1cfd1d1d1909090eb5a3a77ea51efef53d09af9eb5af778f1f2edededffffff1d1e1d"),a(m,"Thayer Bright","1b1d1ef926724df840f4fd222757d68c54fe38c8b5ccccc6505354ff5995b6e354feed6c3f78ff9e6ffe23cfd5f8f8f2f8f8f81b1d1e"),a(m,"The Hulk","1b1d1e269d1b13ce3063e4572525f5712c81378ca9d9d8d15053548dff2a48ff773afe16506b9572589d4085a6e5e6e1b5b5b51b1d1e"),a(m,"Tinacious Design Dark","1d1d26ff339900d364ffcc6600cbffcc66ff00cecacbcbf0636667ff2f9200d364ffd47900cbffd783ff00d5d4d5d6f3cbcbf01d1d26"),a(m,"Tinacious Design Light","1d1d26ff339900d364e5b24d00cbffcc66ff00cecab1b1d6636667ff2f9200d364d9ae5300cbffd783ff00c8c7d5d6f31d1d26f8f8ff"),a(m,"TokyoNight","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"TokyoNight Day","e9e9edf52a655875398c6c3e2e7de99854f10071976172b0a1a6c5f52a655875398c6c3e2e7de99854f10071973760bf3760bfe1e2e7"),a(m,"TokyoNight Moon","1b1d2bff757fc3e88dffc77782aaffc099ff86e1fc828bb8444a73ff757fc3e88dffc77782aaffc099ff86e1fcc8d3f5c8d3f5222436"),a(m,"TokyoNight Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(m,"TokyoNight Storm","1d202ff7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d64e5575f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf524283b"),a(m,"Tomorrow","000000c82829718c00eab7004271ae8959a83e999fbfbfbf000000c82829718c00eab7004271ae8959a83e999fffffff4d4d4cffffff"),a(m,"Tomorrow Night","000000cc6666b5bd68f0c67481a2beb294bb8abeb7ffffff4c4c4ccc6666b5bd68f0c67481a2beb294bb8abeb7ffffffc5c8c61d1f21"),a(m,"Tomorrow Night Blue","000000ff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffff4c4c4cff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffffffffff002451"),a(m,"Tomorrow Night Bright","000000d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffff404040d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffffeaeaea000000"),a(m,"Tomorrow Night Burns","252525832e31a63c40d3494efc595fdf9395ba8586f5f5f55d6f71832e31a63c40d2494efc595fdf9395ba8586f5f5f5a1b0b8151515"),a(m,"Tomorrow Night Eighties","000000f2777a99cc99ffcc666699cccc99cc66ccccffffff595959f2777a99cc99ffcc666699cccc99cc66ccccffffffcccccc2d2d2d"),a(m,"Toy Chest","2c3f58be2d261a9172db8e27325d968a5edc35a08f23d183336889dd594431d07be7d84b34a6daae6bdc42c3aed5d5d531d07b24364b"),a(m,"Treehouse","321300b2270e44a900aa820c58859a97363db25a1e786b53504333ed5d2055f238f2b73285cfede14c5af07d14ffc800786b53191919"),a(m,"Twilight","141414c06d44afb97ac2a86c44474ab4be7c778385ffffd4404040de7c4cccd88ce2c47e5a5e62d0dc8e8a989bffffd4ffffd4141414"),a(m,"Ubuntu","2e3436cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeeceeeeec300a24"),a(m,"Ultra Dark","000000f07178c3e88dffcb6b82aaffc792ea89ddffcccccc404040f6a9aedbf1baffdfa6b4ccffddbdf2b8eaffffffffffffff000000"),a(m,"Ultra Violent","242728ff0090b6ff00fff72747e0fbd731ff0effbbe1e1e1636667fb58b4deff8cebe0877fecffe681ff69fcd3f9f9f5c1c1c1242728"),a(m,"Under The Sea","022026b2302d00a94159819c459a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6ffffff011116"),a(m,"Unikitty","0c0c0ca80f20c7ff98fff964145fcdffe9ff9effeffcf1fb434343d91329d3ffafffef500075eaffefff93ffeffff3fe0b0b0bff8cd9"),a(m,"Urple","000000b0425b37a415ad5c42564d9b6c3ca180808087799c6a3f32ff638829e620f08161867aeda05eeeeaeaeabfa3ff877a9b1b1b23"),a(m,"Vague","252530d8647e7fa563f3be7c6e94b2bb9dbdaeaed1cdcdcd606079e0839899b782f5cb968ba9c1c9b1cabebedad7d7d7cdcdcd141415"),a(m,"Vaughn","25234f70505060b48adfaf8f5555fff08cc38cd0d3709080709080dca3a360b48af0dfaf5555ffec93d393e0e3ffffffdcdccc25234f"),a(m,"Vercel","000000fc003629a948ffae00006afff3288200ac96feffffa8a8a8ff80804be15dffae0049aefff97ea800e4c4fefefefafafa101010"),a(m,"Vesper","101010f5a19190b99fe6b99daca1cfe29ecaea83a5a0a0a07e7e7eff808099ffe4ffc799b9aedaecaad6f591b2ffffffffffff101010"),a(m,"Vibrant Ink","878787ff6600ccff04ffcc0044b4cc9933cc44b4ccf5f5f5555555ff000000ff00ffff000000ffff00ff00ffffe5e5e5ffffff000000"),a(m,"Vimbones","f0f0caa8334c4f6c3194492728648688507d3b8992353535acac8994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535f0f0ca"),a(m,"Violet Dark","56595cc94c2285981cb4881d2e8bced13a8232a198c9c6bd45484bbd3613738a04a577052176c7c61c6f259286c9c6bd7082841c1d1f"),a(m,"Violet Light","56595cc94c2285981cb4881d2e8bced13a8232a198b9b6af45484bbd3613738a04a577052176c7c61c6f259286c9c6bd536870fcf4dc"),a(m,"Violite","241c36ec797979ecb3ece279a979ecec79ec79ececeef4f656447aef8f8f9fefbfefe78fb78fefef8fcf9fefeff8fafceef4f6241c36"),a(m,"Warm Neon","000000e2434639b13adae1454261c5f920fb2abbd4d0b8a3fefcfce970719cc090ddda7a7b91d6f674ba5ed1e5d8c8bbafdab6404040"),a(m,"Wez","000000cc555555cc55cdcd555555cccc55cc7acacacccccc555555ff555555ff55ffff555555ffff55ff55ffffffffffb3b3b3000000"),a(m,"Whimsy","535178ef64875eca89fdd87765aef7aa7ff043c1beffffff535178ef64875eca89fdd87765aef7aa7ff043c1beffffffb3b0d629283b"),a(m,"Wild Cherry","000507d940852ab250ffd16f883cdcecececc1b8b7fff8de009cc9da6bacf4dca5eac066308cbaae636bff919de4838ddafaff1f1726"),a(m,"Wilmersdorf","34373ee063837ebebdcccccca6c1e0e1c1ee5b94abababab50545dfa71938fd7d6d1dfffb2cff0efccfd69abc5d3d3d3c6c6c6282b33"),a(m,"Wombat","000000ff615ab1e969ebd99c5da9f6e86aff82fff7dedacf4a4a4af58c80ddf88feee5b2a5c7ffddaaffb7fff9ffffffdedacf171717"),a(m,"Wryan","3333338c46652873737c7c993955735e468c31658c899ca13d3d3dbf4d8053a6a69e9ecb477ab37e62b36096bfc0c0c0999993101010"),a(m,"Xcode Dark","414453ff817078c2b3d9c97c4eb0ccff7ab2b281ebdfdfe07f8c98ff8170acf2e4ffa14f6bdfffff7ab2dabaffdfdfe0dfdfe0292a30"),a(m,"Xcode Dark hc","43454bff8a7a83c9bcd9c6684ec4e6ff85b8cda1ffffffff838991ff8a7ab1faebffa14f6bdfffff85b8e5cfffffffffffffff1f1f24"),a(m,"Xcode Light","b4d8fdd12f1b3e808778492a0f68a0ad3da4804fb82626268a99a6d12f1b23575c78492a0b4f79ad3da44b21b0262626262626ffffff"),a(m,"Xcode Light hc","b4d8fdad1805355d6178492a0058a19c2191703daa0000008a99a6ad180517414578492a003f739c2191441ea1000000000000ffffff"),a(m,"Xcode WWDC","494d5cbb383a94c66ed28e5d8884c5b7399900aba4e7e8eb7f869ebb383a94c66ed28e5d8884c5b7399900aba4e7e8ebe7e8eb292c36"),a(m,"Zenbones","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(m,"Zenbones Dark","1c1917de6e7c819b69b77e646099c0b279a766a5adb4bdc34d4540e8838f8bae68d68c6761abdacf86c165b8c1888f94b4bdc31c1917"),a(m,"Zenbones Light","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(m,"Zenburn","4d4d4d7d5d5d60b48af0dfaf5d6d7ddc8cc38cd0d3dcdccc709080dca3a3c3bf9fe0cf9f94bff3ec93d393e0e3ffffffdcdccc3f3f3f"),a(m,"Zenburned","404040e3716e819b69b77e646099c0b279a766a5adf0e4cf6f6768ec86858bae68d68c6761abdacf86c165b8c1c0ab86f0e4cf404040"),a(m,"Zenwritten Dark","191919de6e7c819b69b77e646099c0b279a766a5adbbbbbb4a4546e8838f8bae68d68c6761abdacf86c165b8c18e8e8ebbbbbb191919"),a(m,"Zenwritten Light","eeeeeea8334c4f6c3194492728648688507d3b8992353535aca9a994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535eeeeee"),a(m,"branch","35241cc2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9564a45c2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9cfc1a932221a"),a(m,"iTerm2 Dark Background","000000c91b0000c200c7c4000225c7ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffc7c7c7000000"),a(m,"iTerm2 Default","000000c91b0000c200c7c4002225c4ca30c700c5c7ffffff686868ff6e675ffa68fffc676871ffff77ff60fdffffffffffffff000000"),a(m,"iTerm2 Light Background","000000c91b0000c200c7c4000225c7ca30c700c5c7bababa686868ff6e6739d442ccc9346871ffff77ff3ad7d9ffffff000000ffffff"),a(m,"iTerm2 Pastel Dark Background","626262ff8373b4fb73fffdc3a5d5feff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5c2e3ffffb2fee6e6feffffffc7c7c7000000"),a(m,"iTerm2 Smoooooth","14191eb43c2a00c200c7c4002744c7c040be00c5c7c7c7c7686868dd797558e790ece100a7abf2e17ee160fdffffffffdcdcdc15191f"),a(m,"iTerm2 Solarized Dark","073642dc322f859900b58900268bd2d336822aa198eee8d5335e69cb4b16586e75657b838394966c71c493a1a1fdf6e3839496002b36"),a(m,"iTerm2 Solarized Light","073642dc322f859900b58900268bd2d336822aa198bbb5a2002b36cb4b16586e75657b838394966c71c493a1a1fdf6e3657b83fdf6e3"),a(m,"iTerm2 Tango Dark","000000d81e005ea702cfae00427ab389658e00a7aadbded8686a66f5423599e343fdeb6184b0d8bc94b737e6e8f1f1f0ffffff000000"),a(m,"iTerm2 Tango Light","000000d81e005ea702cfae00427ab389658e00a7aac1c4be686a66f542358cd636d7c53b84b0d8bc94b71ecccef1f1f0000000ffffff"),a(m,"novmbr","282a2e9f64349dac5fcca75f2f7d7cb5896e52877fc7b8ac5d4e479f64349dac5fcca75f2f7d7cb5896e52877fc7b8acc7b8ac241d1a"),a(m,"owl","302c2c5a5a5a989898cacaca656565b1b1b17f7f7fdedede5d595bda5b2c989898cacaca656565b1b1b17f7f7fffffffdedede2f2b2c"),a(m,"traffic","282d31934e46637268c79e84515e67715f5e5c6f7dcfb9a84e575e934e46637270c79e84515e67715f5e5c6f7dddcec2cfb9a8272c30"),a(m,"urban","33303b87404f74934eae835a615772854b64625464c0a79a5c586587404f74934eae835a615772854b64625464c0a79ac0a79a312e39"),Og,Jg,Qg,a_,e_,Zg,r_]),Jn={$:-2},Be=Jn,QR=1,ze=ke(function(e,r,n,t,o){return{$:-1,a:e,b:r,c:n,d:t,e:o}}),ZR=0,dc=ke(function(e,r,n,t,o){if(o.$===-1&&!o.a){var c=o.a,i=o.b,f=o.c,u=o.d,s=o.e;if(t.$===-1&&!t.a){var d=t.a,p=t.b,g=t.c,_=t.d,b=t.e;return F(ze,0,r,n,F(ze,1,p,g,_,b),F(ze,1,i,f,u,s))}else return F(ze,e,i,f,F(ze,0,r,n,t,u),s)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){var h=t.a,p=t.b,g=t.c,y=t.d,C=y.a,j=y.b,L=y.c,M=y.d,I=y.e,b=t.e;return F(ze,0,p,g,F(ze,1,j,L,M,I),F(ze,1,r,n,b,o))}else return F(ze,e,r,n,t,o)}),D0=k(function(e,r,n){if(n.$===-2)return F(ze,0,e,r,Jn,Jn);var t=n.a,o=n.b,c=n.c,i=n.d,f=n.e,u=a(M0,e,o);switch(u){case 0:return F(dc,t,o,c,l(D0,e,r,i),f);case 1:return F(ze,t,o,r,i,f);default:return F(dc,t,o,c,i,l(D0,e,r,f))}}),wr=k(function(e,r,n){var t=l(D0,e,r,n);if(t.$===-1&&!t.a){var o=t.a,c=t.b,i=t.c,f=t.d,u=t.e;return F(ze,1,c,i,f,u)}else{var s=t;return s}}),Pn=function(e){return l(ve,v(function(r,n){var t=r.a,o=r.b;return l(wr,t,o,n)}),Be,e)},Cp=Z(function(e,r,n,t){if(t.b){var o=t.a,c=t.b;if(c.b){var i=c.a,f=c.b;if(f.b){var u=f.a,s=f.b;if(s.b){var d=s.a,p=s.b,g=n>500?l(ve,e,r,je(p)):x(Cp,e,r,n+1,p);return a(e,o,a(e,i,a(e,u,a(e,d,g))))}else return a(e,o,a(e,i,a(e,u,r)))}else return a(e,o,a(e,i,r))}else return a(e,o,r)}else return r}),on=k(function(e,r,n){return x(Cp,e,r,0,n)}),W=v(function(e,r){return l(on,v(function(n,t){return a(z,e(n),t)}),S,r)}),n_=Pn(a(W,function(e){return P(e.sM,e)},yp)),t_=function(e){return a(Qe,e,n_)},XR=l9,YR=p9,Pp=k(function(e,r,n){return e<=0?n:l(Pp,e>>1,X(r,r),e&1?X(n,r):n)}),pc=v(function(e,r){return l(Pp,e,r,"")}),Sp=(function(){var e=yp;if(e.b){var r=e.a,n=e.b;return P(r,n)}else return P(a(m,"Fallback",a(pc,108,"0")),S)})(),ie=v(function(e,r){if(r.$)return e;var n=r.a;return n}),q0=function(e){return a(ie,Sp.a,t_(e))},xp=(function(){var e=5;return{g3:e,c1:a(Hi,e,q0("Argonaut")),dg:a(Hi,e,q0("Erkal Light")),dW:!1}})(),o_={hJ:!0,f8:!0,dO:!0,f9:!0,ga:!1,dP:!0,eU:!0,gb:!0,cb:!0,hK:!0,hM:bp,e:xp},c_=o_,i_=c_,Qn=O8,Mr=Q6,Ii=function(e){return e*Mr/180},A0={$:0},jp={eA:!1,jk:!1,eF:!1,eY:!1,fh:!1,fk:!1,fl:!1,fw:!1},wp=function(e){return{fO:e.fO,eC:jp,c4:A0,ch:{pK:0,hs:2,eI:.5,hF:{pp:0,pq:.4,L:0}}}},f_={$:0},Zn=f_,u_=v(function(e,r){return V({d6:wp({fO:!0}),oH:Ii(150)/Mr},Zn,S)}),$_=v(function(e,r){return V({d6:wp({fO:!0}),oH:.5},Zn,S)}),kp=function(e){return{cB:e.cB,bw:e.bw,cM:e.cM,bx:e.bx,il:e.il}},Fi=H8,Ze=X8,Xn=Y8,te=B8,B0=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},hr=Ca("div"),dt=function(e){var r=e;return r.dW?r.dg:r.c1},Ie=v(function(e,r){return e(dt(r))}),Lp=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),l_=Lp,Sn=l_,gr=v(function(e,r){return B(r,{aO:e})}),Pu=function(e){return{$:4,a:e}},Su=f0,Tp=function(e){return Pu(Su(e))},de=Tp,O=dd,ge=function(e){return"hsla("+(O(e.aQ*360)+(", "+(O(e.aZ*100)+("%, "+(O(e.C*100)+("%, "+(O(e.aO)+")")))))))},bc={aO:1,aQ:0,C:1,aZ:0},Mp=function(e){var r=ge(bc),n=ge(a(gr,.25,a(Ie,function(i){return i.bn},e))),t=ge(a(Ie,function(i){return i.i9},e)),o=ge(a(Ie,function(i){return i.iV},e)),c=ge(a(Ie,function(i){return i.bn},e));return l(Sn,"style",S,$([de(`
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
    0 0 0 4px `+(n+`;
}
`))))))))))))))))))))))))))))]))},zp=F9,H=zp,xu=function(e){return{$:0,a:e}},v_=Z(function(e,r,n,t){return{er:t,eV:n,ow:r,kL:e}}),Dp=3432918353,qp=461845907,KR=d9,eG=b9,mo=v(function(e,r){return(r&65535)*e+(((r>>>16)*e&65535)<<16)}),rG=v9,V0=v(function(e,r){return r<<e|r>>>32-e}),aG=s9,s_=function(e){var r=e.eV?e.ow^a(mo,qp,a(V0,15,a(mo,Dp,e.eV))):e.ow,n=r^e.er,t=a(mo,2246822507,n^n>>>16),o=a(mo,3266489909,t^t>>>13);return(o^o>>>16)>>>0},d_=m8,p_=v(function(e,r){return a(mo,5,a(V0,13,e^a(mo,qp,a(V0,15,a(mo,Dp,r)))))+3864292196}),b_=v(function(e,r){var n=r.eV|(255&$t(e))<<r.kL,t=r.kL;return t===24?{er:r.er+1,eV:0,ow:a(p_,r.ow,n),kL:0}:{er:r.er+1,eV:n,ow:r.ow,kL:r.kL+8}}),m_=v(function(e,r){return s_(l(d_,b_,x(v_,0,e,0,0),r))}),h_=15739,Ui=z8,nG=function(e){return-e},Sa=J6,Ap=function(e){e:for(;;)switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";case 15:return"f";default:var r=e;e=r;continue e}},Bp=v(function(e,r){e:for(;;){if(r<16)return a(z,Ap(r),e);var n=a(z,Ap(a(Sa,16,r)),e),t=r/16|0;e=n,r=t;continue e}}),g_=function(e){return Ui(e<0?a(z,"-",a(Bp,S,-e)):a(Bp,S,e))},Vp=function(e){return a(Cu,"_",g_(a(m_,h_,e)))},cn=v(function(e,r){var n=e.b,t=e.c;if(n){var o=a(Qe,t,r);return o.$?l(wr,t,Vp(t),r):r}else return r}),H0=v(function(e,r){return a(u0,W9(e),N9(r))}),Hr=Zl,Ut=v(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(Qe,o,e);if(c.$)return a(H0,"className",Hr("_unstyled"));var i=c.a;return a(H0,"className",Hr(i))}else return n}),xn=v(function(e,r){return a(du,Td(e),Md(r))}),ju=v(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(Qe,o,e);if(c.$)return a(xn,"class","_unstyled");var i=c.a;return a(xn,"class",i)}else return n}),wu=function(e){return V9(pu(e))},I0=v(function(e,r){return a(wd,e,pu(r))}),ho=function(e){return Ca(pu(e))},F0=v(function(e,r){return a(jd,e,pu(r))}),mc=v(function(e,r){var n=e.a,t=e.b,o=r.a,c=r.b;switch(t.$){case 4:var C=t.a;return P(a(z,P(n,C),o),c);case 0:var d=t.a,p=t.b,g=t.c,_=l(ve,cn,c,p),i=l(ve,hc,P(S,_),g),h=i.a,y=i.b,C=l(ho,d,a(W,Ut(y),p),je(h));return P(a(z,P(n,C),o),y);case 1:var s=t.a,d=t.b,p=t.c,g=t.d,_=l(ve,cn,c,p),f=l(ve,hc,P(S,_),g),h=f.a,y=f.b,C=x(F0,s,d,a(W,Ut(y),p),je(h));return P(a(z,P(n,C),o),y);case 2:var d=t.a,p=t.b,g=t.c,_=l(ve,cn,c,p),u=l(ve,mc,P(S,_),g),h=u.a,y=u.b,C=l(wu,d,a(W,Ut(y),p),je(h));return P(a(z,P(n,C),o),y);default:var s=t.a,d=t.b,p=t.c,g=t.d,_=l(ve,cn,c,p),b=l(ve,mc,P(S,_),g),h=b.a,y=b.b,C=x(I0,s,d,a(W,Ut(y),p),je(h));return P(a(z,P(n,C),o),y)}}),hc=v(function(e,r){var n=r.a,t=r.b;switch(e.$){case 4:var h=e.a;return P(a(z,h,n),t);case 0:var u=e.a,s=e.b,d=e.c,p=l(ve,cn,t,s),o=l(ve,hc,P(S,p),d),_=o.a,b=o.b,h=l(ho,u,a(W,Ut(b),s),je(_));return P(a(z,h,n),b);case 1:var f=e.a,u=e.b,s=e.c,d=e.d,p=l(ve,cn,t,s),c=l(ve,hc,P(S,p),d),_=c.a,b=c.b,h=x(F0,f,u,a(W,ju(b),s),je(_));return P(a(z,h,n),b);case 2:var u=e.a,s=e.b,d=e.c,p=l(ve,cn,t,s),i=l(ve,mc,P(S,p),d),_=i.a,b=i.b,h=l(wu,u,a(W,Ut(b),s),je(_));return P(a(z,h,n),b);default:var f=e.a,u=e.b,s=e.c,d=e.d,p=l(ve,cn,t,s),g=l(ve,mc,P(S,p),d),_=g.a,b=g.b,h=x(I0,f,u,a(W,ju(b),s),je(_));return P(a(z,h,n),b)}}),Ei=function(e){return $([e])},go=k(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,f=e,u=l(e,t,o,l(go,e,r,c)),s=i;e=f,r=u,n=s;continue e}}),U0="\x07",gc=k(function(e,r,n){return a(Ar,r,a(hn,e,n))}),__=k(function(e,r,n){return n+(`
`+l(gc,U0,r,e))}),y_=function(e){return l(go,__,"",e)},Hp=v(function(e,r){return l(go,k(function(n,t,o){return o+(`
`+l(gc,"."+U0,"#"+(e+("."+t)),n))}),"",r)}),E0=v(function(e,r){var n=(function(){if(r.$){var o=r.a,c=r.b,i=r.c;return a(Hp,o,c)+(`
`+a(Hp,o+" ",i))}else{var t=r.a;return y_(t)}})();return l(ho,"span",$([a(xn,"style","display: none;"),a(xn,"class","elm-css-style-wrapper")]),$([l(ho,"style",(function(){if(e.$)return S;var t=e.a;return $([a(xn,"nonce",t)])})(),Ei(Su(n)))]))}),C_=Z(function(e,r,n,t){var o=l(ve,cn,Be,n),c=l(ve,hc,P(S,o),t),i=c.a,f=c.b,u=a(E0,e,xu(f)),s=a(W,Ut(f),n);return l(ho,r,s,a(z,u,je(i)))}),P_=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b;if(oe(e,t))return!0;var c=e,i=o;e=c,r=i;continue e}else return!1}),S_=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b,c="_"+t;if(a(P_,c,o)){var i=c,f=o;e=i,r=f;continue e}else return c}else return e}),Ip=k(function(e,r,n){var t=a(S_,"_",n),o=a(E0,e,r);return P(t,o)}),x_=Z(function(e,r,n,t){var o=l(ve,cn,Be,n),c=l(ve,mc,P(S,o),t),i=c.a,f=c.b,u=l(Ip,e,xu(f),i),s=a(W,Ut(f),n);return l(wu,r,s,a(z,u,je(i)))}),j_=ke(function(e,r,n,t,o){var c=l(ve,cn,Be,t),i=l(ve,mc,P(S,c),o),f=i.a,u=i.b,s=l(Ip,e,xu(u),f),d=a(W,ju(u),t);return x(I0,r,n,d,a(z,s,je(f)))}),w_=ke(function(e,r,n,t,o){var c=l(ve,cn,Be,t),i=l(ve,hc,P(S,c),o),f=i.a,u=i.b,s=a(E0,e,xu(u)),d=a(W,ju(u),t);return x(F0,r,n,d,a(z,s,je(f)))}),Fp=function(e){switch(e.$){case 4:var r=e.a;return r;case 0:var t=e.a,o=e.b,c=e.c;return x(C_,D,t,o,c);case 1:var n=e.a,t=e.b,o=e.c,c=e.d;return F(w_,D,n,t,o,c);case 2:var t=e.a,o=e.b,c=e.c;return x(x_,D,t,o,c);default:var n=e.a,t=e.b,o=e.c,c=e.d;return F(j_,D,n,t,o,c)}},Yn=Fp,k_=function(e){return a(hr,$([a(H,"min-height","100dvh"),a(H,"background",ge(a(Ie,function(r){return r.D},e.e))),a(H,"color",ge(a(Ie,function(r){return r.k4},e.e))),a(H,"font-family","system-ui, sans-serif")]),a(z,Yn(Mp(e.e)),a(W,function(r){var n=r.b;return n},e.dd)))},br=R8,ku=W8,Ri=gd,Kn=Ri(S),Up=function(e){return{$:1,a:e}},L_=function(e){return{$:2,a:e}},Ep=L_,_o=_d,T_={$:1},xa=gd,ue=xa(S),Rp=v(function(e,r){if(e.$){var n=e.a;return P(B(r,{eC:n(r.eC)}),ue)}else return r.fO?P(B(r,{c4:T_}),ue):P(r,ue)}),M_=Z(function(e,r,n,t){if(n.$){var c=n.a,i=a(Rp,c,t.d6),f=i.a,u=i.b;return V(B(t,{d6:f}),Ep(a(_o,Up,u)),S)}else{var o=n.a;return V(B(t,{oH:l(pr,0,1,o)}),Zn,S)}}),z_=function(e){return{$:2,a:e}},Gp=v(function(e,r){var n=r.c4;switch(n.$){case 0:return r;case 1:return e.ld?B(r,{c4:A0}):B(r,{c4:z_({oI:r.ch.pK,oJ:r.ch.eI,oL:e.pp,oM:e.pq})});default:var t=n.a;if(e.ld)return B(r,{c4:A0});var o=.005,c=r.ch,i=.05,f=Ii(80),u=e.pq-t.oM,s=e.pp-t.oL;return B(r,{ch:B(c,{pK:t.oI-s*o,eI:l(pr,i,f,t.oJ-u*o)})})}}),D_=k(function(e,r,n){return V(B(n,{d6:a(Gp,{ld:e.to.ld,pp:e.to.pp,pq:e.to.pq},n.d6)}),Zn,S)}),q_=function(e){return{$:0,a:e}},A_="card-art",Wp=Ie(function(e){return e.D}),B_=`
# Unit 1 \u2014 the hinge

Two paper panels, joined along one edge. One panel is fixed to the desk;
the other pivots around the shared edge. Pull the slider to open the
book; drag the canvas to orbit the camera.

The slider is labelled $\\psi$ \u2014 the **spread** \u2014 and runs from $0$
(book closed) to $1$ (book flat on the desk). The angle between the
two panels \u2014 the *dihedral* \u2014 is $\\theta$, and the hinge maps the
spread linearly into it:

$$\\theta = \\pi \\cdot \\psi$$

So at $\\psi = 0$ the panels are pressed face-to-face, at
$\\psi = \\tfrac{1}{2}$ the moving panel stands straight up off the
desk, and at $\\psi = 1$ both panels lie flat in the same plane on
opposite sides of the fold.

You'll meet $\\psi$ in every unit of the explainer \u2014 each mechanism
turns the same spread into its own dihedral function. The hinge is the
simplest possible one: identity, scaled by $\\pi$.
`,V_=I9,H_=k(function(e,r,n){return Fp(a(e,r,n))}),I_=k(function(e,r,n){return Pu(x(V_,H_,e,r,n))}),F_=I_,tG=0,yo={pw:0,aP:0,eO:0,hO:0,sd:0,e6:0,df:0,cN:0,fj:0,cj:0,iL:0,fu:0,bK:0,uQ:"auto"},Np=function(e){return{$:0,a:e}},oG=re,U=v(function(e,r){return Np(e+(":"+r))}),_e=function(e){return a(U,"background-color",e.uQ)},Op=function(e){return{$:6,a:e}},nr=Op,se=v(function(e,r){return a(U,e,r.uQ)}),_c=se("border"),Lu=Z(function(e,r,n,t){return a(U,e,r.uQ+(" "+(n.uQ+(" "+t.uQ))))}),pt=Lu("border"),R0=Lu("border-bottom"),U_=se("border-collapse"),E_=Lu("border-left"),cr=se("border-radius"),R_=Lu("border-top"),G_={r:0,p:0,uQ:"circle"},W_={lJ:0,uQ:"collapse",gY:0},fe=function(e){return a(U,"color",e.uQ)},bt=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Gi=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var o=e,c=t;e=o,r=c;continue e}else return!1}),tr=k(function(e,r,n){return e(r(n))}),G0=u8,W0=v(function(e,r){return!a(Gi,a(tr,G0,e),r)}),Oe=function(e){return!e.b},Co=function(e){return e===""},N_=v(function(e,r){var n=r.a,t=r.b;switch(e.$){case 0:var o=e.a,u=o.c;return Oe(u)?P(n,t):P(n,a(z,e,t));case 1:var c=e.b;return a(W0,function(d){var p=d.c;return Oe(p)},c)?P(n,t):P(n,a(z,e,t));case 2:var i=e.b;return Oe(i)?P(n,t):P(n,a(z,e,t));case 3:return P(n,a(z,e,t));case 4:var u=e.a;return Oe(u)?P(n,t):P(n,a(z,e,t));case 5:var u=e.a;return Oe(u)?P(n,t):P(n,a(z,e,t));case 6:var f=e.a;return Co(f.qE)?P(n,t):P(l(wr,f.sM,f.qE,n),t);case 7:var u=e.a;return Oe(u)?P(n,t):P(n,a(z,e,t));case 8:var u=e.a;return Oe(u)?P(n,t):P(n,a(z,e,t));default:var s=e.a;return a(W0,function(d){var p=d.b;return Oe(p)},s)?P(n,t):P(n,a(z,e,t))}}),Jp=function(e){return{$:6,a:e}},N0=v(function(e,r){return r.b?l(on,z,r,e):e}),O_=v(function(e,r){return a(N0,a(W,function(n){var t=n.a,o=n.b;return Jp({qE:o,sM:t})},Ya(e)),r)}),J_=function(e){var r=l(on,N_,P(Be,S),e),n=r.a,t=r.b;return a(O_,n,t)},Q_=function(e){var r=e.qF,n=e.nJ,t=e.mF,o=e.lS;return{lS:o,qF:J_(r),mF:t,nJ:n}},he=v(function(e,r){if(r.$)return D;var n=r.a;return A(e(n))}),Z_=function(e){return a(ie,"",a(he,function(r){return'@charset "'+(r+'"')},e))},X_=Z(function(e,r,n,t){e:for(;;)if(n.b)if(n.b.b){var o=n.a,c=n.b,i=e,f=r,u=c,s=t+(e(o)+(r+""));e=i,r=f,n=u,t=s;continue e}else{var o=n.a;return t+(e(o)+"")}else return t}),$a=k(function(e,r,n){return x(X_,e,r,n,"")}),Qp=function(e){return"("+(e.mh+(a(ie,"",a(he,zg(": "),e.uQ))+")"))},Y_=function(e){switch(e){case 0:return"print";case 1:return"screen";default:return"speech"}},Zp=function(e){var r=k(function(c,i,f){return c+(" "+a(Ar," and ",a(z,Y_(i),a(W,Qp,f))))});switch(e.$){case 0:var t=e.a;return l($a,Qp," and ",t);case 1:var n=e.a,t=e.b;return l(r,"only",n,t);case 2:var n=e.a,t=e.b;return l(r,"not",n,t);default:var o=e.a;return o}},K_=v(function(e,r){return'@import "'+(e+(Zp(r)+'"'))}),ey=function(e){var r=e.a,n=e.b;return l($a,K_(r),`
`,n)},ry=function(e){var r=e.a,n=e.b;return"@namespace "+(r+('"'+(n+'"')))},ay=function(e){return l($a,function(r){var n=r;return n+";"},"",e)},ny=d8,ty=function(e){var r=e;return"::"+r},oy=function(e){switch(e){case 0:return"+";case 1:return"~";case 2:return">";default:return""}},O0=function(e){switch(e.$){case 0:var r=e.a;return"."+r;case 1:var r=e.a;return"#"+r;case 2:var r=e.a;return":"+r;default:var r=e.a;return"["+(r+"]")}},Xp=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return X(r,l($a,O0,"",n));case 1:var n=e.a;return Oe(n)?"*":l($a,O0,"",n);default:var r=e.a,n=e.b;return X(r,l($a,O0,"",n))}},cy=function(e){var r=e.a,n=e.b;return oy(r)+(" "+Xp(n))},iy=function(e){var r=e.a,n=e.b,t=e.c,o=a(z,Xp(r),a(W,cy,n)),c=a(ie,"",a(he,ty,t));return a(ny,a(Ar," ",o),c)},Yp=function(e){var r=e.a,n=e.b,t=e.c,o=l($a,iy,",",a(z,r,n));return o+("{"+(ay(t)+"}"))},fy=function(e){switch(e.$){case 0:var r=e.a;return Yp(r);case 1:var n=e.a,t=e.b,o=l($a,Zp,", ",n),c=l($a,Yp,`
`,t);return"@media "+(o+("{"+(c+"}")));case 2:return"TODO";case 3:return"TODO";case 4:return"TODO";case 5:return"TODO";case 6:var i=e.a.qE,f=e.a.sM;return"@keyframes "+(f+("{"+(i+"}")));case 7:return"TODO";case 8:return"TODO";default:return"TODO"}},uy=function(e){var r=e.qF,n=e.nJ,t=e.mF,o=e.lS;return Z_(o)+(l($a,ey,`
`,t)+(l($a,ry,`
`,n)+(l($a,fy,`
`,r)+"")))},jn=function(e){return l(on,N0,S,e)},fn=v(function(e,r){return jn(a(W,e,r))}),Kp=function(e){return{$:8,a:e}},eb=function(e){return{$:5,a:e}},rb=function(e){return{$:4,a:e}},yc=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Et=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Wi=function(e){return{$:0,a:e}},J0=v(function(e,r){return{$:2,a:e,b:r}}),ab=function(e){return{$:7,a:e}},Po=v(function(e,r){return{$:1,a:e,b:r}}),Q0=v(function(e,r){if(r.b)if(r.b.b){var t=r.a,o=r.b;return a(z,t,a(Q0,e,o))}else{var n=r.a;return $([e(n)])}else return r}),nb=v(function(e,r){var n=r.a,t=r.b,o=r.c;return l(Et,n,t,X(o,$([e])))}),Z0=v(function(e,r){if(r.b)if(r.b.b){var i=r.a,f=r.b;return a(z,i,a(Z0,e,f))}else switch(r.a.$){case 0:var n=r.a.a;return $([Wi(a(nb,e,n))]);case 1:var t=r.a,o=t.a,c=t.b;return $([a(Po,o,a(Q0,nb(e),c))]);default:return r}else return r}),tb=v(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c,i=a(W,e,c),f=e(o);return $([l(Et,o,c,t),l(Et,f,i,S)])}else{var n=r.a,t=r.c;return $([l(Et,n,S,t),l(Et,e(n),S,S)])}}),$y=v(function(e,r){var n=r.a,t=r.b;return l(yc,n,t,A(e))}),ly=v(function(e,r){return a(tb,$y(e),r)}),ob=v(function(e,r){return{$:2,a:e,b:r}}),cb=v(function(e,r){return{$:0,a:e,b:r}}),ib=function(e){return{$:1,a:e}},fb=v(function(e,r){switch(r.$){case 0:var n=r.a,o=r.b;return a(cb,n,X(o,$([e])));case 1:var o=r.a;return ib(X(o,$([e])));default:var t=r.a,o=r.b;return a(ob,t,X(o,$([e])))}}),ub=v(function(e,r){if(r.b)if(r.b.b){var c=r.a,i=r.b;return a(z,c,a(ub,e,i))}else{var n=r.a,t=n.a,o=n.b;return $([P(t,a(fb,e,o))])}else return S}),vy=v(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c;return l(yc,o,a(ub,e,c),t)}else{var n=r.a,t=r.c;return l(yc,a(fb,e,n),S,t)}}),sy=v(function(e,r){return a(tb,vy(e),r)}),X0=function(e){e:for(;;)if(e.b)if(e.a.$){var o=e.b,c=o;e=c;continue e}else{var r=e.a.a,n=r.a,t=r.b,o=e.b;return X(a(z,n,t),X0(o))}else return S},Y0=ke(function(e,r,n,t,o){return{$:3,a:e,b:r,c:n,d:t,e:o}}),Tu=v(function(e,r){e:for(;;)if(r.b){if(r.b.b)break e;switch(r.a.$){case 0:var M=r.a.a;return a(W,Wi,e(M));case 1:if(r.a.b.b)if(r.a.b.b.b){var c=r.a,t=c.a,i=c.b,I=i.a,R=i.b,f=a(Tu,e,$([a(Po,t,R)]));if(f.b&&f.a.$===1&&!f.b.b){var u=f.a,s=u.a,d=u.b;return $([a(Po,s,a(z,I,d))])}else{var p=f;return p}}else{var n=r.a,t=n.a,o=n.b,M=o.a;return $([a(Po,t,e(M))])}else break e;case 2:var g=r.a,_=g.a,b=g.b;return $([a(J0,_,a(Tu,e,b))]);case 3:var h=r.a,y=h.a,C=h.b,j=h.c,L=h.d,M=h.e;return a(W,x(Y0,y,C,j,L),e(M));case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}else return r;var I=r.a,R=r.b;return a(z,I,a(Tu,e,R))}),_r=function(e){if(e.b){var r=e.a,n=e.b;return A(r)}else return D},dy=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return A(r)}else return D},$b=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return A($([r]))}else return D},py=function(e){e:for(;;)if(e.b){var r=e.a,n=e.b;if(r.$===1){var t=n;e=t;continue e}else return r}else return D},by=function(e){return{$:9,a:e}},lb=function(e){var r=function(t){if(t.b){var o=t.a,c=t.b;return a(z,o,r(c))}else return S},n=r(e);return $([by(n)])},my=v(function(e,r){if(r.$)return r;var n=r.a;return a(Po,e,$([n]))}),hy=function(e){if(e.b){var r=e.a,n=e.b;return A(n)}else return D},gy=k(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,o=r.b,c=e-1,i=o,f=a(z,t,n);e=c,r=i,n=f;continue e}else return n}}),_y=v(function(e,r){return je(l(gy,e,r,S))}),vb=k(function(e,r,n){if(r<=0)return S;var t=P(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,j=o.a,c=o.b,i=c.a;return $([j,i]);case 3:if(t.b.b.b.b){var f=t.b,j=f.a,u=f.b,i=u.a,s=u.b,d=s.a;return $([j,i,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var p=t.b,j=p.a,g=p.b,i=g.a,_=g.b,d=_.a,b=_.b,h=b.a,y=b.b;return e>1e3?a(z,j,a(z,i,a(z,d,a(z,h,a(_y,r-4,y))))):a(z,j,a(z,i,a(z,d,a(z,h,l(vb,e+1,r-4,y)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,j=C.a;return $([j])}),Rt=v(function(e,r){return l(vb,0,e,r)}),sb=ke(function(e,r,n,t,o){if(o.$)return o;var c=o.a;return F(Y0,e,r,n,t,c)}),db=v(function(e,r){switch(r.$){case 0:var d=r.a;return a(Po,e,$([d]));case 1:var n=r.a,t=r.b;return a(Po,X(e,n),t);case 2:var o=r.a,c=r.b;return a(J0,o,a(W,db(e),c));case 3:var i=r.a,f=r.b,u=r.c,s=r.d,d=r.e;return F(Y0,i,f,u,s,d);case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}),K0=function(e){var r=e;return r},pb=Z(function(e,r,n,t){var o=function(s){return a(ie,S,hy(s))},c=a(et,r,a(ie,S,$b(t))),i=(function(){var s=P(_r(c),dy(t));if(!s.a.$&&!s.b.$){var d=s.a.a,p=s.b.a;return X(a(Rt,$r(t)-1,t),$([oe(p,d)?p:d]))}else return t})(),f=function(s){return jn(a(Q0,et(e),a(W,Ei,a(Tu,n,s))))},u=a(ie,S,a(he,f,$b(t)));return X(i,X(o(u),o(c)))}),et=v(function(e,r){if(e.b)switch(e.a.$){case 0:var n=e.a.a,I=e.b;return a(et,I,a(Z0,n,r));case 1:var t=e.a,o=t.a,j=t.b,I=e.b;return x(pb,j,I,sy(o),r);case 2:var c=e.a,i=c.a,f=c.b,I=e.b,u=v(function(R,E){var K=R.a,J=R.b,le=R.c,Se=E.a,Te=E.b,qe=E.c;return l(yc,K,X(J,a(z,P(i,Se),Te)),py($([qe,le])))}),s=function(R){switch(R.$){case 0:var E=R.a,K=E.a,J=E.b,le=E.c,Se=a(fn,function(Xe){return a(W,u(Xe),a(z,K,J))},X0(r)),Te=(function(){if(Se.b){var Xe=Se.a,Jr=Se.b;return $([Wi(l(Et,Xe,Jr,S))])}else return S})();return a(et,le,Te);case 1:var qe=R.a,ce=R.b;return a(bb,qe,ce);case 2:var Ae=R.a,Fe=R.b;return a(mb,Ae,Fe);case 3:var Je=R.a,Re=R.b,xr=R.c,Ge=R.d,rr=R.e;return a(W,x(sb,Je,Re,xr,Ge),Mu(rr));case 4:var sr=R.a;return $([rb(sr)]);case 5:var sr=R.a;return $([eb(sr)]);case 6:var sr=R.a;return $([ab(sr)]);case 7:var sr=R.a;return $([Kp(sr)]);default:var Ur=R.a;return lb(Ur)}};return jn(X($([a(et,I,r)]),a(W,s,a(fn,K0,f))));case 3:var d=e.a,p=d.a,j=d.b,I=e.b;return x(pb,j,I,ly(p),r);case 5:var g=e.a.a,I=e.b,_=Vp(g),b="animation-name:"+_,h=a(et,I,a(Z0,b,r));return a(N0,h,$([Jp({qE:g,sM:_})]));case 4:var y=e.a,C=y.a,j=y.b,I=e.b,L=(function(){var R=X0(r);if(R.b){var E=R.a,K=R.b;return a(W,my(C),a(et,j,Ei(Wi(l(Et,E,K,S)))))}else return S})();return X(a(et,I,r),L);default:var M=e.a.a,I=e.b;return a(et,X(M,I),r)}else return r}),Mu=function(e){var r=e.a,n=e.b,t=e.c;return a(et,t,$([Wi(l(Et,r,n,S))]))},ev=function(e){if(e.b){var r=e.a,n=e.b;return X(yy(r),ev(n))}else return S},bb=v(function(e,r){var n=function(t){return a(W,db(e),Mu(t))};return a(fn,n,r)}),mb=v(function(e,r){var n=ev(a(fn,K0,r));return $([a(J0,e,n)])}),yy=function(e){switch(e.$){case 0:var s=e.a;return Mu(s);case 1:var r=e.a,n=e.b;return a(bb,r,n);case 2:var t=e.a,o=e.b;return a(mb,t,o);case 3:var c=e.a,i=e.b,f=e.c,u=e.d,s=e.e;return a(W,x(sb,c,i,f,u),Mu(s));case 4:var d=e.a;return $([rb(d)]);case 5:var d=e.a;return $([eb(d)]);case 6:var d=e.a;return $([ab(d)]);case 7:var d=e.a;return $([Kp(d)]);default:var p=e.a;return lb(p)}},Cy=function(e){var r=e.oD,n=e.nJ,t=e.mF,o=e.lS,c=ev(a(fn,K0,r));return{lS:o,qF:c,mF:t,nJ:n}},hb=function(e){return uy(Q_(Cy(e)))},cG=re,gb=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),_b=function(e){return{$:0,a:e}},yb=v(function(e,r){var n=l(yc,r,S,D);return $([_b(l(gb,n,S,e))])}),Cb=function(e){return{lS:D,mF:S,nJ:S,oD:e}},Py=function(e){return{$:0,a:e}},Sy=ib($([Py(U0)])),Pb=function(e){if(e.b){var r=e;return hb(Cb($([a(yb,e,Sy)])))}else return""},xy=function(e){var r=Pb(e),n=a(xn,"","");return l(bt,n,!0,r)},Q=xy,jy={r:0,p:0,uQ:"decimal"},iG=3,wy=v(function(e,r){return{$:2,a:e,b:r}}),ky=wy(3),Ly={r:0,p:0,uQ:"disc"},ee=Sn("div"),fG=0,Cc=k(function(e,r,n){return{lk:0,lN:0,eO:0,f4:0,e5:0,e6:0,df:0,e7:0,e8:0,dT:0,dU:0,cN:0,e9:0,dj:n,ft:0,fy:r,gW:e,uQ:X(O(n),r)}}),mt=a(Cc,0,"em"),zr={sG:'ui-monospace, "SF Mono", Menlo, Monaco, "Cascadia Mono", "Roboto Mono", Consolas, monospace',uG:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},Br=se("font-size"),Sb=se("font-style"),Dr=function(e){var r=e.uQ;return a(U,"font-weight",r)},xb=Pu,jb=xb,Pc=v(function(e,r){return e+("("+(a(Ar,",",r)+")"))}),Ty=function(e){return e*180/Mr},we=function(e){return e<0?-e:e},My=v(function(e,r){var n=lt(e);return a(Sa,r,n)+e-n}),zy=k(function(e,r,n){var t=e/Ii(60),o=(1-we(2*n-1))*r,c=n-o/2,i=o*(1-we(a(My,t,2)-1)),f=t<0?V(0,0,0):t<1?V(o,i,0):t<2?V(i,o,0):t<3?V(0,o,i):t<4?V(0,i,o):t<5?V(i,0,o):t<6?V(o,0,i):V(0,0,0),u=f.a,s=f.b,d=f.c;return V(u+c,s+c,d+c)}),Dy=ke(function(e,r,n,t,o){var c=l(zy,Ty(r),n,t),i=c.a,f=c.b,u=c.c;return{aO:o,pT:lt(u),fQ:0,rE:lt(f),tB:lt(i),uQ:e}}),wb=function(e){return O(e*100)+"%"},qy=Z(function(e,r,n,t){var o=$([O(e),wb(r),wb(n),O(t)]),c=a(Pc,"hsla",o);return F(Dy,c,e,r,n,t)}),or=function(e){return x(qy,e.aQ*360,e.aZ,e.C,e.aO)},Y=v(function(e,r){return or(e(dt(r)))}),Ve=se("height"),Ay=v(function(e,r){return{$:1,a:e,b:r}}),By=function(e){return{$:2,a:e}},zu=function(e){return Ay(By(e))},wn=zu("hover"),uG=0,Vy={ln:0,av:0,fJ:0,ly:0,em:0,lA:0,en:0,c_:0,bp:0,ha:0,fQ:0,aP:0,qQ:0,eO:0,jy:0,f3:0,hD:0,rp:0,f4:0,f5:0,G:0,dM:0,hO:0,m$:0,jL:0,e5:0,e6:0,df:0,e7:0,e8:0,dT:0,dU:0,cN:0,e9:0,h$:0,r:0,p:0,j7:0,sZ:0,dj:0,ih:0,fj:0,cj:0,iL:0,fs:0,ea:0,ft:0,fu:0,eb:0,bK:0,fy:"",gW:0,uQ:"initial",gY:0,eh:0},Hy=B(Vy,{uQ:"inherit"}),$G=0,pe=function(e){return{dM:0,hO:0,dU:0,cN:0,sZ:0,h9:0,dj:e,fy:"",gW:0,uQ:ar(e)}},kb={f5:0,uQ:"italic"},ja=se("left"),Gt=se("letter-spacing"),Gr=se("line-height"),Du=se("list-style-type"),Wr=se("margin-bottom"),Fa=se("margin-top"),Lb=se("max-width"),lr={em:0,lC:0,bp:0,aP:0,qQ:0,rP:0,mJ:0,jL:0,e8:0,dT:0,cN:0,r:0,p:0,j7:0,ih:0,tp:0,cj:0,it:0,tV:0,fs:0,eb:0,bK:0,k8:0,uL:0,uQ:"none"},lG=0,ir=function(e){return{dU:0,cN:0,e9:0,sZ:0,h9:0,dj:e,fy:"",gW:0,uQ:O(e)}},Wt=se("opacity"),So=se("overflow"),kn=se("padding"),Iy=k(function(e,r,n){return a(U,e,r.uQ+(" "+n.uQ))}),vr=Iy("padding"),rv=se("padding-bottom"),xo=se("padding-left"),vG=0,Ye=a(Cc,0,"%"),Sc={$:0},av=function(e){return a(Ar,"",e)},Tb=function(e){return{$:3,a:e}},Mb={$:1},zb=function(e){return{$:4,a:e}},Db={$:2},nv=k8,Fy=function(e){return l(gc,">","&gt;",l(gc,"<","&lt;",l(gc,'"',"&quot;",l(gc,"&","&amp;",e))))},Uy=C8,qb=v(function(e,r){var n=e?" display-mode":"";return'<katex-element tex="'+(Fy(Uy(r))+('"'+(n+"></katex-element>")))}),Ey=k(function(e,r,n){e:for(;;){var t=P(e,r);if(t.a.b)switch(t.b.$){case 1:if(t.a.a==="`"&&t.a.b.b&&t.a.b.a==="`"&&t.a.b.b.b&&t.a.b.b.a==="`"){var c=t.a,i=c.b,f=i.b,u=f.b,s=t.b,d=u,p=Sc,g=a(z,"```",n);e=d,r=p,n=g;continue e}else{var _=t.a,b=_.a,u=_.b,h=t.b,d=u,p=Mb,g=a(z,vt(b),n);e=d,r=p,n=g;continue e}case 2:if(t.a.a==="`"){var y=t.a,u=y.b,C=t.b,d=u,p=Sc,g=a(z,"`",n);e=d,r=p,n=g;continue e}else{var j=t.a,b=j.a,u=j.b,L=t.b,d=u,p=Db,g=a(z,vt(b),n);e=d,r=p,n=g;continue e}case 3:if(t.a.a==="$"&&t.a.b.b&&t.a.b.a==="$"){var M=t.a,I=M.b,u=I.b,o=t.b.a,d=u,p=Sc,g=a(z,a(qb,!0,Ui(je(o))),n);e=d,r=p,n=g;continue e}else{var R=t.a,b=R.a,u=R.b,o=t.b.a,d=u,p=Tb(a(z,b,o)),g=n;e=d,r=p,n=g;continue e}case 4:if(t.a.a==="$"){var E=t.a,u=E.b,o=t.b.a,K=a(qb,!1,Ui(je(o))),J=(function(){if(n.b){var fc=n.a;return a(nv,`
`,fc)?" "+K:K}else return K})(),d=u,p=Sc,g=a(z,J,n);e=d,r=p,n=g;continue e}else{var le=t.a,b=le.a,u=le.b,o=t.b.a,d=u,p=zb(a(z,b,o)),g=n;e=d,r=p,n=g;continue e}default:switch(t.a.a){case"`":if(t.a.b.b&&t.a.b.a==="`"&&t.a.b.b.b&&t.a.b.b.a==="`"){var Se=t.a,Te=Se.b,qe=Te.b,u=qe.b,ce=t.b,d=u,p=Mb,g=a(z,"```",n);e=d,r=p,n=g;continue e}else{var Ae=t.a,u=Ae.b,Fe=t.b,d=u,p=Db,g=a(z,"`",n);e=d,r=p,n=g;continue e}case"$":if(t.a.b.b&&t.a.b.a==="$"){var Je=t.a,Re=Je.b,u=Re.b,xr=t.b,d=u,p=Tb(S),g=n;e=d,r=p,n=g;continue e}else{var Ge=t.a,u=Ge.b,rr=t.b,d=u,p=zb(S),g=n;e=d,r=p,n=g;continue e}default:var sr=t.a,b=sr.a,u=sr.b,Ur=t.b,d=u,p=Sc,g=a(z,vt(b),n);e=d,r=p,n=g;continue e}}else switch(t.b.$){case 3:var o=t.b.a;return a(z,Ui(je(o)),a(z,"$$",n));case 4:var o=t.b.a;return a(z,Ui(je(o)),a(z,"$",n));default:return n}}}),Ry=function(e){return av(je(l(Ey,sc(e),Sc,S)))},sG=re,Gy=v(function(e,r){return{$:3,a:e,b:r}}),qu=function(e){return Gy(e)},dG=0,T=a(Cc,0,"px"),la={qp:v(function(e,r){return T(e+r)}),si:T(12),ss:T(8),tj:T(9999),oC:T(4),u4:T(20)},Au=v(function(e,r){return a(yb,r,a(ob,e,S))}),wa={bp:0,ea:0,uQ:"solid"},Wy={r:0,p:0,uQ:"square"},jo=v(function(e,r){return Np(e+(":"+r))}),tv=k(function(e,r,n){e:for(;;)switch(n.$){case 0:var t=n.a,o=a(ie,"",_r(a(hn,":",t)));return a(jo,r,o);case 1:var c=n.a;return a(jo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-selector"));case 2:var i=n.a;return a(jo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-combinator"));case 3:var f=n.a;return a(jo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-pseudo-element setter"));case 4:return a(jo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-media-query"));case 5:return a(jo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-keyframes"));default:if(n.a.b)if(n.a.b.b){var _=n.a,b=_.a,h=_.b,d=e,p=r,g=Op(h);e=d,r=p,n=g;continue e}else{var u=n.a,s=u.a,d=e,p=r,g=s;e=d,r=p,n=g;continue e}else return a(jo,r,"elm-css-error-cannot-apply-"+(e+"-with-empty-Style"))}}),ov=l(Cc,0,"",0),cv=function(e){return l(tv,"textAlign","text-align",e(ov))},Ab=se("text-decoration"),Bu=se("text-transform"),Ny=function(e){return!e.$},Oy=l7,xc={fQ:0,uQ:"transparent"},pG=re,yr=v(function(e,r){var n=a(cb,e,S),t=l(yc,n,S,D);return $([_b(l(gb,t,S,r))])}),aa={c$:$([Br(T(15)),Dr(pe(400)),Gr(ir(1.55))]),p8:$([Br(T(13)),Dr(pe(500)),Gr(ir(1.3)),Gt(mt(.04))]),qQ:$([Br(T(46)),Dr(pe(300)),Gr(ir(1.05)),Gt(mt(-.02))]),rJ:$([Br(T(16)),Dr(pe(650)),Gr(ir(1.3))]),rK:$([Br(T(30)),Dr(pe(550)),Gr(ir(1.15)),Gt(mt(-.01))]),jM:$([Br(T(14)),Dr(pe(550)),Gr(ir(1.35))]),dx:$([Br(T(20)),Dr(pe(650)),Gr(ir(1.25)),Gt(mt(-.005))])},Jy={fs:0,uQ:"underline"},Vu={eb:0,uQ:"uppercase"},Qy=zu("visited"),He=se("width"),be={e5:0,e6:0,df:0,e7:0,e8:0,dT:0,dU:0,sZ:0,dj:0,ih:0,fy:"",gW:0,uQ:"0"},Zy=v(function(e,r){var n=a(Y,function(p){return p.k2},e),t=a(Y,function(p){return p.k4},e),o=a(Y,function(p){return p.k_},e),c=a(Y,function(p){return p.kl.p$},e),i=a(Y,function(p){return p.kl.qC},e),f=a(Y,function(p){return p.i9},e),u=a(Y,function(p){return p.ja},e),s=a(Y,function(p){return p.iV},e),d=a(Y,function(p){return p.bn},e);return a(ee,$([Q($([fe(t),a(U,"font-family",zr.uG),nr(aa.c$),Gr(ir(1.6)),ky($([a(yr,"h1",$([a(U,"font-family",zr.uG),nr(aa.rK),Dr(pe(700)),Gr(ir(1.2)),Fa(T(40)),Wr(T(20)),rv(T(8)),fe(d)])),a(yr,"h2",$([a(U,"font-family",zr.uG),nr(aa.dx),Dr(pe(600)),Gr(ir(1.3)),Fa(T(32)),Wr(T(16)),rv(T(4)),fe(d)])),a(yr,"h3",$([a(U,"font-family",zr.uG),nr(aa.rJ),Dr(pe(600)),Gr(ir(1.4)),Fa(T(28)),Wr(T(12)),fe(d)])),a(yr,"h4",$([a(U,"font-family",zr.uG),nr(aa.jM),Dr(pe(600)),Gr(ir(1.5)),Fa(T(24)),Wr(T(12)),fe(d)])),a(yr,"h5",$([a(U,"font-family",zr.uG),nr(aa.jM),Dr(pe(600)),Fa(T(20)),Wr(T(8)),fe(d)])),a(yr,"h6",$([a(U,"font-family",zr.uG),nr(aa.p8),Dr(pe(600)),Fa(T(16)),Wr(T(8)),fe(d),Bu(Vu),Gt(mt(.04))])),a(yr,"p",$([Wr(T(18)),Gr(ir(1.7))])),a(yr,"ul",$([Du(Ly),xo(T(28)),Fa(T(14)),Wr(T(14))])),a(yr,"ol",$([Du(jy),xo(T(28)),Fa(T(14)),Wr(T(14))])),a(yr,"li",$([Wr(T(6)),Gr(ir(1.7)),xo(T(6)),a(qu,"marker",$([fe(d)]))])),a(Au,"ul ul",$([Du(G_)])),a(Au,"ul ul ul",$([Du(Wy)])),a(yr,"code",$([a(U,"font-family",zr.sG),Br(mt(.9)),_e(o),a(vr,T(2),T(5)),cr(la.oC),fe(d)])),a(yr,"pre",$([_e(o),a(vr,T(14),T(18)),cr(la.ss),So(yo),Fa(T(16)),Wr(T(20)),Gr(ir(1.5)),l(pt,T(1),wa,f)])),a(Au,"pre code",$([fe(t),_e(Hy),kn(be),Br(mt(1)),cr(be)])),a(yr,"a",$([fe(i),Ab(lr),l(R0,T(1),wa,xc),a(U,"transition","border-color 200ms, color 200ms"),wn($([Ab(Jy),fe(c)])),Qy($([Wt(ir(.6))]))])),a(yr,"blockquote",$([l(E_,T(3),wa,d),xo(T(18)),Sb(kb),fe(n),Fa(T(16)),Wr(T(20))])),a(yr,"table",$([He(Ye(100)),U_(W_),Fa(T(16)),Wr(T(20))])),a(yr,"th",$([cv(ja),a(vr,T(8),T(10)),l(R0,T(2),wa,u),Dr(pe(600)),fe(t)])),a(yr,"td",$([cv(ja),a(vr,T(8),T(10)),l(R0,T(1),wa,f)])),a(yr,"strong",$([fe(t),Dr(pe(600))])),a(yr,"em",$([Sb(kb)])),a(yr,"mark",$([_e(a(Y,function(p){return a(gr,.3,p.bn)},e)),fe(t),a(vr,T(1),T(4)),cr(la.oC)])),a(yr,"img",$([Lb(Ye(100)),Ve(yo),cr(la.ss),Fa(T(16)),Wr(T(16))])),a(yr,"hr",$([_c(be),l(R_,T(1),wa,f),Fa(T(28)),Wr(T(28))]))]))]))]),$([jb(l(Oy,{qJ:D,rD:A({pY:!0,up:!0}),tQ:!1,t7:!0},S,Ry(r)))]))}),Hu=F_(Zy),Xy=function(e){return Yn(a(Hu,e,B_))},Yy=`
A hinge \u2014 one fold line, one degree of freedom \u2014 is the only joint
primitive a pop-up book needs. Every other mechanism is just two or
more hinges arranged in a tree, with their dihedral angles driven
by the same spread. The next unit puts a second hinge **on the
page itself**: a flap that rises perpendicular to the page as the
book opens.
`,Ky=function(e){return Yn(a(Hu,e,Yy))},Bb=function(e){return{$:1,a:e}},ka=function(e){return{fQ:e,bB:1,bW:Bb({h3:0,iv:1}),bX:D}},eC=function(e){return{fQ:e.rh,bB:1,bW:Bb({h3:0,iv:1}),bX:A(e.tD)}},iv=Ie(function(e){return e.k4}),rC=function(e){return{$:0,a:e}},Vb=function(e){return rC({bw:e,nF:1})},Hb=function(e){return{$:6,a:e}},fv=function(e){return{$:5,a:e}},aC={$:0},uv=function(e){return{$:0,a:e}},nC=function(e){return{$:0,a:e}},tC={$:3},Ib=function(e){return{$:3,a:e}},bG=re,Ni=function(e){return e},mG=re,Ln=function(e){return e},wo=Ln({pp:0,pq:1,L:0}),Ua=i8,$v=k(function(e,r,n){var t=Ua(e*e+r*r+n*n);return t<1e-6?wo:Ln({pp:-e/t,pq:-r/t,L:-n/t})}),hG=re,Oi=function(e){return e},Fb=Ln({pp:0,pq:-1,L:0}),Ub=Z(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),lv=k(function(e,r,n){return x(Ub,e,r,n,1)}),Eb={lz:l(lv,.06,.06,.07),mf:nC(10),m5:$([uv({u:!0,a:fv(Ni(3200)),eG:l($v,-.7,.8,.5),jI:Oi(9e3)}),uv({u:!1,a:fv(Ni(6500)),eG:l($v,.6,.5,.6),jI:Oi(2500)}),uv({u:!0,a:fv(Ni(5e3)),eG:l($v,0,.4,-1),jI:Oi(5500)}),Ib({a:Hb(l(lv,.2,.2,.22)),jI:Oi(120),fz:wo}),Ib({a:Hb(l(lv,.15,.13,.12)),jI:Oi(60),fz:Fb})]),sM:"Studio (3-point)",o1:tC,pm:aC},ko=v(function(e,r){return{$:0,a:e,b:r}}),oC={ts:$([{pp:0,pq:0},{pp:1,pq:0},{pp:1,pq:1},{pp:0,pq:1}])},gG=re,Rb=k(function(e,r,n){return{ek:r,el:e,jk:S,eE:function(t){return t.oH*n}}}),cC={ts:$([{pp:0,pq:-.5},{pp:1,pq:-.5},{pp:1,pq:.5},{pp:0,pq:.5}])},iC=a(ko,cC,$([P(l(Rb,{pp:0,pq:.5},{pp:0,pq:-.5},Mr),a(ko,oC,S))])),_G=2,fC={$:0},Gb=function(e){return{$:0,a:e}},Iu=Ld,vv=v(function(e,r){return a(Iu,e,Gb(r))}),uC=v(function(e,r){return r.fO?$([a(vv,"pointerdown",te(e(fC)))]):S}),Ji=function(e){return{pp:e.pp,pq:e.pq,L:0}},Wb=function(e){return{$:0,a:e}},Nr=k(function(e,r,n){return{pp:e,pq:r,L:n}}),sv=function(e){return{$:0,a:e}},Qi=function(e){return{$:0,a:e}},Nb={gA:sv(0),gC:Qi(1),gS:l(Nr,0,0,0)},Or=function(e){return Wb({dI:e,k8:Nb})},mr=v(function(e,r){return l(on,v(function(n,t){return e(n)?a(z,n,t):t}),S,r)}),Fu=v(function(e,r){return _r(a(mr,function(n){return oe(n.kx,e)},r.dR))}),dv=function(e){var r=e;return{ek:r.ek,el:r.el}},$C=function(e){var r=dv(e);return oe(r.el,r.ek)},lC=function(e){return{$:17,a:e}},jc=Z(function(e,r,n,t){return lC({q8:n,dt:r,D:e,lh:t})}),pv=v(function(e,r){return Wb({dI:$([r]),k8:e})}),wc=function(e){var r=e.a,n=e.b,t=e.c;return pv({gA:sv(0),gC:Qi(1),gS:l(Nr,r,n,t)})},Nt=v(function(e,r){var n=e.a,t=e.b,o=e.c,c=r,i=c.bO,f=i.a,u=i.b,s=i.c,d=c.bN,p=d.a,g=d.b,_=d.c,b=c.bM,h=b.a,y=b.b,C=b.c;return V(n*h+t*p+o*f,n*y+t*g+o*u,n*C+t*_+o*s)}),kc=v(function(e,r){var n=r,t=n.bO,o=t.a,c=t.b,i=t.c,f=n.bN,u=f.a,s=f.b,d=f.c,p=n.bM,g=p.a,_=p.b,b=p.c;return{pp:n.aV.pp+e.pp*g+e.pq*u+e.L*o,pq:n.aV.pq+e.pp*_+e.pq*s+e.L*c,L:n.aV.L+e.pp*b+e.pq*d+e.L*i}}),Tn=v(function(e,r){var n=r.a,t=r.b,o=r.c;return V(e*n,e*t,e*o)}),vC=function(e){return{$:11,a:e}},Uu=v(function(e,r){return vC({ty:r,D:e})}),Lo=v(function(e,r){var n=e.a,t=e.b,o=e.c;return{pp:r.pp+n,pq:r.pq+t,L:r.L+o}}),sC=k(function(e,r,n){var t=a(Fu,e,r);if(t.$===1)return Or(S);var o=t.a;if($C(o.jH)){var c=a(Nt,V(0,0,1),o.ik),i=n.e5*.05,f=dv(o.jH),u=Ji(f.el),s=a(kc,u,o.ik),d=a(Lo,a(Tn,n.e5,c),s),p=a(wc,V(d.pp,d.pq,d.L),a(Uu,ka(n.fQ),i*2.5)),g=x(jc,ka(n.fQ),s,d,i);return Or($([g,p]))}else return Or(S)}),dC=function(e){var r=e;return r.jk},Zi=v(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return V(t*f-o*i,o*c-n*f,n*i-t*c)}),Mn=N6,Ob=function(e){var r=e.a,n=e.b,t=e.c;return Ua(a(Mn,r,2)+a(Mn,n,2)+a(Mn,t,2))},ht=function(e){var r=Ob(e);return a(Tn,1/r,e)},Lc=v(function(e,r){return V(r.pp-e.pp,r.pq-e.pq,r.L-e.L)}),bv=v(function(e,r){var n=dv(e),t=Ji(n.el),o=a(kc,t,r),c=Ji(n.ek),i=a(kc,c,r),f={pp:(o.pp+i.pp)/2,pq:(o.pq+i.pq)/2,L:(o.L+i.L)/2},u=ht(a(Lc,t,c)),s=ht(a(Zi,V(0,0,1),u));return{pJ:a(Nt,u,r),cC:i,lw:o,f7:a(Nt,s,r),fd:f}}),fr=Su,pC=function(e){return V(e.pp,e.pq,e.L)},bC=function(e){var r=pC(e.fz),n=ht(a(Lc,e.I,e.hF)),t=ht(a(Zi,n,r)),o=a(Zi,t,n);return{jA:n,kC:o,bD:t}},Eu=v(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return n*c+t*i+o*f}),Jb=Y6,mC=k(function(e,r,n){var t=a(Lc,e.I,n),o=bC(e),c=a(Eu,t,o.bD),i=a(Eu,t,o.kC),f=a(Eu,t,o.jA);if(f<.001)return D;var u=r.lh/r.jF,s=(function(){var h=e.tx;if(h.$){var j=h.a.ph;return P(j/2,r.jF/j)}else{var y=h.a.eS,C=f*Jb(y/2);return P(C,r.jF/(2*C))}})(),d=s.a,p=s.b,g=d*u,_=c/g,b=i/d;return A({fZ:f,tk:p,tT:(_+1)*r.lh/2,tU:(1-b)*r.jF/2})}),Qb=k(function(e,r,n){var t=l(mC,e.p7,e.dp,e.pF);if(t.$===1)return fr("");var o=t.a,c=function(i){return O(i)+"px"};return a(hr,a(z,a(H,"position","absolute"),a(z,a(H,"left",c(o.tT+e.nR.pp)),a(z,a(H,"top",c(o.tU+e.nR.pq)),a(z,a(H,"pointer-events","none"),a(z,a(H,"user-select","none"),r))))),n)}),mv=v(function(e,r){return{pp:r.pp,pq:r.L+e/2,L:-r.pq}}),hC=k(function(e,r,n){var t=a(Fu,e,r);if(t.$===1)return fr("");var o=t.a,c=dC(o.jH);if(Oe(c))return fr("");var i=a(Nt,V(0,0,1),o.ik),f=a(bv,o.jH,o.ik),u=$([a(H,"color",ge(n.fQ)),a(H,"font-family","system-ui, sans-serif"),a(H,"font-size","12px"),a(H,"white-space","nowrap"),a(H,"transform","translate(-50%, -100%)")]),s=a(Lo,a(Tn,n.hX,i),f.fd),d=a(mv,n.d2,s);return l(Qb,{pF:d,p7:n.p7,nR:{pp:0,pq:0},dp:n.dp},u,a(W,function(p){return a(hr,S,$([fr(p)]))},c))}),gC=(function(){var e=.3,r=e*.04,n={aO:1,aQ:0,C:.55,aZ:.8},t={aO:1,aQ:.33,C:.45,aZ:.8},o={aO:1,aQ:.6,C:.55,aZ:.8},c=v(function(i,f){var u=x(jc,ka(i),{pp:0,pq:0,L:0},f,r),s=a(wc,V(f.pp,f.pq,f.L),a(Uu,ka(i),r*2.5));return Or($([u,s]))});return Or($([a(c,n,{pp:e,pq:0,L:0}),a(c,t,{pp:0,pq:e,L:0}),a(c,o,{pp:0,pq:0,L:e})]))})(),rt=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){var n=r.a,t=r.b,o=e-1,c=t;e=o,r=c;continue e}else return r}}),Tc=v(function(e,r){return P(e,r)}),hv=function(e){return{$:1,a:e}},gv=function(e){return pv({gA:hv(e.pR),gC:Qi(1),gS:e.aV})},_v=function(e){var r=e;return{pR:{pp:r.bM,pq:r.bN,L:r.bO},aV:r.aV}},_C=Z(function(e,r,n,t){var o=.005,c=r/2+.001,i=a(W,function(s){return{pp:s.pp,pq:s.pq,L:c}},n.ts),f=(function(){if(i.b){var s=i.a,d=X(a(rt,1,i),$([s]));return l(w0,Tc,i,d)}else return S})(),u=a(W,function(s){var d=s.a,p=s.b;return x(jc,ka(e),d,p,o)},f);return a(gv,_v(t),Or(u))}),Zb=function(e){return l(ve,$p,0,e)},Xb=function(e){if(e.b){var r=$r(e);return{pp:Zb(a(W,function(n){return n.pp},e))/r,pq:Zb(a(W,function(n){return n.pq},e))/r}}else return{pp:0,pq:0}},yC=v(function(e,r){var n=r.a,t=r.b,o=r.c,c="["+(a(Ar,",",a(W,ar,n))+"]"),i=$([a(H,"color",ge(e.fQ)),a(H,"font-family","monospace"),a(H,"font-size","11px"),a(H,"white-space","nowrap"),a(H,"transform","translate(-50%, -50%)"),a(H,"background","rgba(0,0,0,0.4)"),a(H,"padding","1px 4px"),a(H,"border-radius","3px")]),f=Xb(t.ts),u=a(kc,{pp:f.pp,pq:f.pq,L:0},o),s=a(mv,e.d2,u);return l(Qb,{pF:s,p7:e.p7,nR:{pp:0,pq:0},dp:e.dp},i,$([fr(c)]))}),Ru=v(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,f=r.c;return V(n+c,t+i,o+f)}),un=Z6,yv=function(e){var r=e.a,n=e.b,t=e.c;return l(Nr,r,n,t)},$n=X6,Gu=k(function(e,r,n){var t=V(-e.aV.pp,-e.aV.pq,-e.aV.L),o=V(e.aV.pp,e.aV.pq,e.aV.L),c=$n(r),i=a(Lo,t,n),f=V(i.pp,i.pq,i.L),u=un(r),s=ht(e.eG),d=a(Eu,s,f),p=a(Ru,a(Tn,u,f),a(Ru,a(Tn,c,a(Zi,s,f)),a(Tn,1-u,a(Tn,d,s))));return a(Lo,o,yv(p))}),CC=k(function(e,r,n){var t=n.a,o=n.b,c=n.c,i=l(Gu,{eG:e,aV:{pp:0,pq:0,L:0}},r,{pp:t,pq:o,L:c});return V(i.pp,i.pq,i.L)}),Yb=function(e){var r=l(CC,e.g7,e.g4,e.bQ),n=a(Tn,e.ty,r);return a(Lo,n,e.g8)},Ea=c8,PC=function(e){var r=.005,n=a(me,4,Ea(16*we(e.cS))),t=ht(a(Lc,e.aA.rx,e.aA.uy)),o=function(i){return Yb({g4:i*e.cS,g7:t,g8:e.aA.rx,bQ:e.bQ,ty:e.ty})},c=a(W,function(i){var f=(i+1)/n,u=i/n;return x(jc,ka(e.fQ),o(u),o(f),r)},a(gn,0,n-1));return Or(c)},SC=function(e){return{$:14,a:e}},Kb=v(function(e,r){return SC({D:e,lf:r})}),xC=function(e){var r=a(me,4,Ea(16*we(e.cS))),n=ka(e.fQ),t=ht(a(Lc,e.aA.rx,e.aA.uy)),o=function(i){return Yb({g4:i*e.cS,g7:t,g8:e.aA.rx,bQ:e.bQ,ty:e.ty})},c=a(fn,function(i){var f=(i+1)/r,u=i/r;return $([a(Kb,n,V(e.aA.rx,o(u),o(f))),a(Kb,n,V(e.aA.rx,o(f),o(u)))])},a(gn,0,r-1));return Or(c)},jC=k(function(e,r,n){var t=a(Fu,e,r);if(t.$===1)return Or(S);var o=t.a,c=a(bv,o.jH,o.ik),i=xC({aA:{rx:c.fd,uy:c.cC},fQ:n.fQ,bQ:c.f7,ty:n.ty,cS:o.eE}),f=PC({aA:{rx:c.fd,uy:c.cC},fQ:n.fQ,bQ:c.f7,ty:n.ty,cS:o.eE});return Or($([i,f]))}),wC=k(function(e,r,n){var t=a(Fu,e,r);if(t.$===1)return Or(S);var o=t.a,c=a(bv,o.jH,o.ik),i=a(wc,V(c.cC.pp,c.cC.pq,c.cC.L),a(Uu,ka(n.fQ),n.cT*2.5)),f=x(jc,ka(n.fQ),c.lw,c.cC,n.cT);return Or($([f,i]))}),kC=v(function(e,r){return a(he,function(n){var t=n.b,o=n.c;return P(t,o)},_r(a(mr,function(n){var t=n.a;return oe(t,e)},r.gu)))}),LC=k(function(e,r,n){var t=a(kC,e,r);if(t.$===1)return Or(S);var o=t.a,c=o.a,i=o.b,f=n.e5*.05,u=Xb(c.ts),s={pp:u.pp,pq:u.pq,L:0},d={pp:u.pp,pq:u.pq,L:n.e5},p=a(wc,V(d.pp,d.pq,d.L),a(Uu,ka(n.fQ),f*2.5)),g=x(jc,ka(n.fQ),s,d,f);return a(gv,_v(i),Or($([g,p])))}),TC=v(function(e,r){var n=r.eC,t=e.dB.gu,o=a(Ie,function(C){return C.ja},e.e),c=a(Ie,function(C){return C.k5},e.e),i=n.fw?a(W,yC({p7:e.p7,fQ:c,d2:e.d2,dp:e.dp}),t):S,f=a(W,function(C){return C.kx},e.dB.dR),u=n.jk?a(W,function(C){return l(hC,C,e.dB,{p7:e.p7,fQ:c,hX:.08,d2:e.d2,dp:e.dp})},f):S,s=v(function(C,j){return C?j:S}),d=a(s,n.eY,a(W,function(C){return l(wC,C,e.dB,{fQ:c,cT:.004})},f)),p=a(s,n.fl,a(W,function(C){var j=C.a;return l(LC,j,e.dB,{fQ:c,e5:.12})},t)),g=a(s,n.fk,a(W,function(C){var j=C.b,L=C.c;return x(_C,o,e.d2,j,L)},t)),_=a(s,n.fh,$([gC])),b=a(Ie,function(C){return C.bn},e.e),h=a(s,n.eA,a(W,function(C){return l(sC,C,e.dB,{fQ:b,e5:.18})},f)),y=a(s,n.eF,a(W,function(C){return l(jC,C,e.dB,{fQ:b,ty:.18})},f));return{rS:X(i,u),t0:X(d,X(y,X(p,X(h,X(_,g)))))}}),e2=v(function(e,r){return l(bt,a(H0,e,r),!1,"")}),gt=v(function(e,r){return a(e2,e,Hr(r))}),To=gt("className"),Mc=Sn("input"),Cv=gt("max"),Pv=gt("min"),MC=function(e){return P(e,!0)},r2=function(e){return{$:1,a:e}},Sv=v(function(e,r){return l(bt,a(Iu,e,r),!1,"")}),Wu=v(function(e,r){return a(Sv,e,r2(r))}),zc=v(function(e,r){return l(on,w,r,e)}),xe=E8,xv=a(zc,$(["target","value"]),xe),Xi=function(e){return a(Wu,"input",a(Ze,MC,a(Ze,e,xv)))},ln=se("outline"),jv=function(e){return a(gt,"step",e)},Dc=gt("type"),qc=gt("value"),a2=function(e){return a(Mc,$([Dc("range"),Pv(e.j1),Cv(e.jZ),jv(e.kS),qc(e.le),Xi(e.kh),To("ui-slider"),Q($([He(Ye(100)),Ve(T(32)),a(U,"-webkit-appearance","none"),a(U,"appearance","none"),_e(xc),a(U,"cursor","grab"),ln(lr),a(U,"touch-action","none"),a(U,"--slider-fill",O(e.jw)+"%")]))]),S)},Ot=M8,n2=function(e){var r=ae(e.nw,e.nB)>0?100*(e.uQ-e.nB)/(e.nw-e.nB):0;return a2({jw:r,jZ:O(e.nw),j1:O(e.nB),kh:function(n){return e.ib(a(ie,e.uQ,Ot(n)))},kS:O(e.uf),le:O(e.uQ)})},t2=H9,Yi=t2,Nu=r8,zC={$:0},DC=function(e){return{fQ:e,bB:1,bW:zC,bX:D}},qC=function(e){return{$:6,a:e}},AC=Z(function(e,r,n,t){return qC({jF:n,tD:t,D:e,lh:r})}),yG=0,o2=function(e){switch(e){case 0:return"texture";case 1:return"sound";case 2:return"font";default:return"atlas"}},_t=v(function(e,r){return o2(e)+(":"+r)}),BC=v(function(e,r){var n=r.F,t=a(Qe,a(_t,0,e),n);if(!t.$&&!t.a.$){var o=t.a.a.E,c=t.a.a.eq,i=t.a.a.ep;return o.$===2?A({jF:i,lh:c}):D}else return D}),VC=v(function(e,r){var n=a(BC,r.bw,e.cB);if(n.$)return D;var t=n.a;return r.jF>0&&t.jF>0?A(x(AC,DC(bc),r.jF*(t.lh/t.jF),r.jF,Vb(r.bw))):D}),Ou=v(function(e,r){var n=r.a,t=r.b,o=r.c;return a(Ru,a(Tn,n,e.pp),a(Ru,a(Tn,t,e.pq),a(Tn,o,e.L)))}),c2=v(function(e,r){return yv(a(Ou,e,V(r.pp,r.pq,r.L)))}),i2=v(function(e,r){var n=function(t){var o=l(Gu,{eG:e,aV:l(Nr,0,0,0)},r,yv(t));return V(o.pp,o.pq,o.L)};return{pp:n(V(1,0,0)),pq:n(V(0,1,0)),L:n(V(0,0,1))}}),f2=v(function(e,r){var n=e.aV,t=a(i2,e.eG,r),o=a(c2,t,n);return pv({gA:hv(t),gC:Qi(1),gS:l(Nr,n.pp-o.pp,n.pq-o.pq,n.L-o.L)})}),wv=function(e){return a(f2,{eG:V(1,0,0),aV:l(Nr,0,0,0)},e)},HC=function(e){return a(f2,{eG:V(0,1,0),aV:l(Nr,0,0,0)},e)},IC=k(function(e,r,n){return a(he,function(t){var o=r.I.L-r.hF.L,c=r.I.pq-r.hF.pq,i=r.I.pp-r.hF.pp,f=a(Nu,c,Ua(i*i+o*o)),u=a(Nu,i,o);return a(wc,V(n.pF.pp,n.pF.pq,n.pF.L),a(HC,u,a(wv,-f,t)))},a(VC,e,{jF:n.jF,bw:n.bw}))}),FC=k(function(e,r,n){return a(ie,Or(S),l(IC,e,r,n))}),CG=re,UC=function(e){return e},EC=function(e){return{$:0,a:e}},RC=EC,GC={$:3},WC=GC,NC=Z(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),OC=NC,JC=function(e){return{$:1,a:e}},QC=JC,ZC=function(e){return a(du,"height",ar(e))},XC=wu,YC=function(e){return{$:2,a:e}},KC=YC,eP=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,c=function(f){return Ea(f*1e3)/1e3},i=function(f){return Ea(f*1e4)/100};return av($(["rgba(",O(i(r)),"%,",O(i(n)),"%,",O(i(t)),"%,",O(c(o)),")"]))},rP=v(function(e,r){switch(r.$){case 0:return a(E7,e,r);case 1:return a(R7,e,r);case 2:return a(G7,e,r);case 3:return a(W7,e,r);case 4:return a(N7,e,r);default:return a(O7,e,r)}}),aP=v(function(e,r){switch(r.$){case 0:return a(h7,e,r);case 1:return a(g7,e,r);case 2:return a(_7,e,r);case 3:return a(y7,e,r);case 4:return a(C7,e,r);case 5:return a(P7,e,r);case 6:return a(S7,e,r);case 7:return a(x7,e,r);default:return j7(e)}}),nP=k(function(e,r,n){return l(U7,e,r,n)}),u2=function(e){var r=e;return r},yt=ag,va=x(yt,1,1,1,1),Cr=k(function(e,r,n){return a(W,function(t){return a(t,r,n)},e)}),$2=Z(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),tP=v(function(e,r){var n=e,t=r.pp,o=r.pq;return x($2,n*t/o,n,n*(1-t-o)/o,1)}),PG=re,oP=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return x(yt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t,o)},Ki=v(function(e,r){return oP(a(tP,e,r))}),l2=v(function(e,r){return{mX:oe(e.mX,r.mX),ag:e.ag*r.ag+e.ah*r.aj+e.ai*r.am,ah:e.ag*r.ah+e.ah*r.ak+e.ai*r.an,ai:e.ag*r.ai+e.ah*r.al+e.ai*r.ao,aj:e.aj*r.ag+e.ak*r.aj+e.al*r.am,ak:e.aj*r.ah+e.ak*r.ak+e.al*r.an,al:e.aj*r.ai+e.ak*r.al+e.al*r.ao,am:e.am*r.ag+e.an*r.aj+e.ao*r.am,an:e.am*r.ah+e.an*r.ak+e.ao*r.an,ao:e.am*r.ai+e.an*r.al+e.ao*r.ao,aW:r.aW+(e.aW*r.ag+e.aX*r.aj+e.aY*r.am)*r.gC,aX:r.aX+(e.aW*r.ah+e.aX*r.ak+e.aY*r.an)*r.gC,aY:r.aY+(e.aW*r.ai+e.aX*r.al+e.aY*r.ao)*r.gC,gC:e.gC*r.gC}}),zn=vg,cP=function(e){return zn({ne:e.ag,nf:e.aj,ng:e.am,nh:e.aW,ni:e.ah,nj:e.ak,nk:e.an,nl:e.aX,nm:e.ai,nn:e.al,no:e.ao,np:e.aY,nq:0,nr:0,ns:0,nt:1})},Ju=ke(function(e,r,n,t,o){var c=t.mX?1:-1,i=x(yt,t.gC,t.gC,t.gC,c);return jr(o,e,i,cP(t),t.mX,r,n)}),v2=Tr(function(e,r,n,t,o,c){e:for(;;)switch(o.$){case 0:return c;case 6:var i=o.a,f=o.b,u=e,s=r,d=n,p=a(l2,i,t),g=f,_=c;e=u,r=s,n=d,t=p,o=g,c=_;continue e;case 1:var b=o.b,h=a(z,F(Ju,e,r,n,t,b),c.aH);return{aH:h,bf:c.bf,t$:c.t$,M:c.M};case 2:var b=o.b,h=a(z,F(Ju,e,r,n,t,b),c.M);return{aH:c.aH,bf:c.bf,t$:c.t$,M:h};case 4:var y=o.b,C=a(z,F(Ju,e,r,n,t,y),c.bf);return{aH:c.aH,bf:C,t$:c.t$,M:c.M};case 3:var j=o.a,L=a(z,F(Ju,e,r,n,t,j),c.t$);return{aH:c.aH,bf:c.bf,t$:L,M:c.M};default:var M=o.a;return l(ve,x(v2,e,r,n,t),c,M)}}),La=function(e){var r=e;return we(r)},Mo=v(function(e,r){var n=e,t=r;return a(me,n,t)}),s2=function(e){var r=e;return r.sr},d2=function(e){var r=e;return r.sC},Ct=v(function(e,r){var n=r;return e*n}),p2=function(e){var r=e;return-r},iP=v(function(e,r){var n=e,t=r;return t+n}),fP=function(e){var r=e;return r.nz},uP=function(e){var r=e;return r.sq},$P=function(e){var r=e;return r.nD},lP=function(e){var r=e;return r.sB},Ac=v(function(e,r){var n=e,t=r;return t-n}),b2=function(e){return V(a(Ac,$P(e),fP(e)),a(Ac,lP(e),uP(e)),a(Ac,d2(e),s2(e)))},zo=0,vP=function(e){var r=e,n=a(me,we(r.pp),a(me,we(r.pq),we(r.L)));if(n){var t=r.L/n,o=r.pq/n,c=r.pp/n,i=Ua(c*c+o*o+t*t);return i*n}else return zo},SG=re,sP=k(function(e,r,n){var t=e,o=r,c=n;return{pp:t,pq:o,L:c}}),m2=function(e){var r=b2(e),n=r.a,t=r.b,o=r.c;return vP(l(sP,n,t,o))},dP=v(function(e,r){var n=a(Ct,.99,a(Mo,La(e),p2(s2(r)))),t=a(Ct,1.01,a(iP,m2(r),p2(d2(r))));return P(n,t)}),pP=Z(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),kv=pP,Qu=Z(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),bP=function(e){var r=e.cy,n=e.ce,t=e.b9;return x(Qu,518,r,n,t)},mP=v(function(e,r){return{$:6,a:e,b:r}}),hP=mP,h2=$([bP({b9:1,ce:0,cy:!1}),x(kv,!1,!1,!1,!1),a(hP,0,1)]),xG=re,Bc=519,Lv=8,g2=15,jG=re,Vc=7681,gP={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ue=m7,_2=v(function(e,r){return{$:0,a:e,b:r}}),_P=_2({l8:1,mG:0,nG:5}),kr=Z7,yP=_P($([{tt:a(kr,-1,-1)},{tt:a(kr,1,-1)},{tt:a(kr,-1,1)},{tt:a(kr,1,1)}])),CP={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"tt"},uniforms:{}},PP=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function(u){return function(s){return function(d){return{$:2,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:f,i:u,j:s,k:d}}}}}}}}}}}},Ne=k(function(e,r,n){return r(e(n))}),Tv=k(function(e,r,n){var t=e.tD,o=e.jW,c=e.lj,i=v(function(s,d){var p=s;return d(p)}),f=v(function(s,d){var p=s;return d(p)}),u=function(s){return a(Ne,i(s.gN),a(Ne,f(s.f1),a(Ne,f(s.g$),f(s.g0))))};return a(u,n,a(u,r,l(PP,t,o,c)))}),Mv=function(e){return l(Tv,{jW:e.jW,tD:e.tD,lj:e.lj},{f1:e.f1,gN:e.gN,g$:e.g$,g0:e.g0},{f1:e.f1,gN:e.gN,g$:e.g$,g0:e.g0})},zv=function(e){return F(Ue,$([Mv(e),x(kv,!1,!1,!1,!1)]),CP,gP,yP,{})},SP=zv({f1:Vc,jW:0,tD:Lv,gN:Bc,lj:g2,g$:Vc,g0:Vc}),xP=516,y2=5386,sa=7680,jP=function(e){return a(Mn,2,e+4)},C2=function(e){return zv({f1:sa,jW:g2,tD:Lv,gN:xP,lj:jP(e),g$:y2,g0:y2})},wP=k(function(e,r,n){return jn($([l(Cr,e,n,h2),$([C2(r),SP])]))}),kP=v(function(e,r){return jn(a(_n,wP(e),r))}),wG=re,LP=1029,TP=function(e){return{$:5,a:e}},P2=function(e){var r=e;return TP(r)},Do=P2(LP),MP=1028,qo=P2(MP),zP=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function(u){return function(s){return{$:0,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:f,i:u,j:s}}}}}}}}}}},DP=function(e){var r=e.kB,n=e.jD,t=e.i3,o=e.g1,c=e.fQ,i=e.aO,f=v(function(u,s){var d=u.a,p=u.b,g=u.c,_=s.a,b=s.b,h=s.c;return zP(d)(p)(g)(_)(b)(h)(r)(n)(t)(o)});return a(f,c,i)},qP=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),S2=v(function(e,r){var n=e,t=r;return l(qP,32774,n,t)}),AP=v(function(e,r){return DP({g1:0,aO:a(S2,e,r),i3:0,fQ:a(S2,e,r),jD:0,kB:0})}),kG=re,BP=1,VP=771,HP={$:8},IP=HP,Zu=$([a(AP,BP,VP),IP]),FP=function(e){var r=e.cy,n=e.ce,t=e.b9;return x(Qu,513,r,n,t)},x2=FP({b9:1,ce:0,cy:!0}),Hc=a(z,x2,Zu),j2=514,w2=function(e){var r=e.cy,n=e.ce,t=e.b9;return x(Qu,515,r,n,t)},k2=240,UP=a(z,w2({b9:1,ce:0,cy:!0}),a(z,Mv({f1:sa,jW:k2,tD:0,gN:j2,lj:0,g$:sa,g0:sa}),Zu)),EP=function(e){var r=e.cy,n=e.ce,t=e.b9;return x(Qu,514,r,n,t)},Ic=a(z,EP({b9:1,ce:0,cy:!0}),Zu),LG=re,L2=function(e){var r=e;return r},Dv=function(e){var r=e;return L2(r.cL)},Xu=function(e){var r=e;return r.aV},RP=function(e){return Xu(Dv(e))},Yu=function(e){return e},TG=re,at=function(e){return e},GP=function(e){return Yu({aV:at({pp:e.aW,pq:e.aX,L:e.aY}),u2:Ln({pp:e.ag,pq:e.ah,L:e.ai}),vb:Ln({pp:e.aj,pq:e.ak,L:e.al}),vh:Ln({pp:e.am,pq:e.an,L:e.ao})})},qv=v(function(e,r){var n=e,t=r,o=n.vh,c=o,i=n.vb,f=i,u=n.u2,s=u;return{pp:t.pp*s.pp+t.pq*s.pq+t.L*s.L,pq:t.pp*f.pp+t.pq*f.pq+t.L*f.L,L:t.pp*c.pp+t.pq*c.pq+t.L*c.L}}),T2=v(function(e,r){var n=e,t=r,o=n.aV,c=o,i=t.pp-c.pp,f=t.pq-c.pq,u=t.L-c.L,s=n.vh,d=s,p=n.vb,g=p,_=n.u2,b=_;return{pp:i*b.pp+f*b.pq+u*b.L,pq:i*g.pp+f*g.pq+u*g.L,L:i*d.pp+f*d.pq+u*d.L}}),Ku=function(e){var r=e;return r.u2},e$=function(e){var r=e;return r.vb},ef=function(e){var r=e;return r.vh},M2=v(function(e,r){return{aV:a(T2,e,Xu(r)),u2:a(qv,e,Ku(r)),vb:a(qv,e,e$(r)),vh:a(qv,e,ef(r))}}),Lr=k(function(e,r,n){return{pp:e,pq:r,L:n}}),MG=re,WP=v(function(e,r){var n=r,t=n,o=e,c=o;return{nz:a(me,c.nz,t.nz),sq:a(me,c.sq,t.sq),sr:a(me,c.sr,t.sr),nD:a(We,c.nD,t.nD),sB:a(We,c.sB,t.sB),sC:a(We,c.sC,t.sC)}}),Ra=function(e){var r=e;return r},NP=v(function(e,r){var n=r,t=n.pp,o=n.pq,c=n.L,i=e,f=i.a,u=i.b,s=i.c,d=we(f)/2,p=we(u)/2,g=we(s)/2;return{nz:t+d,sq:o+p,sr:c+g,nD:t-d,sB:o-p,sC:c-g}}),Av=Z(function(e,r,n,t){var o=n.qb,c=2*n.rI*r,i=2*n.rH*r,f=2*n.rG*r,u=o.L*r,s=o.pq*r,d=o.pp*r,p=Ra(ef(e)),g=we(f*p.pp)+we(i*p.pq)+we(c*p.L),_=Ra(e$(e)),b=we(f*_.pp)+we(i*_.pq)+we(c*_.L),h=Ra(Ku(e)),y=we(f*h.pp)+we(i*h.pq)+we(c*h.L),C=a(NP,V(y,b,g),a(T2,e,l(Lr,d,s,u)));if(t.$)return A(C);var j=t.a;return A(a(WP,j,C))}),Bv=Z(function(e,r,n,t){e:for(;;)if(t.b){var o=t.a,c=t.b;switch(o.$){case 0:var _=e,b=r,h=n,y=c;e=_,r=b,n=h,t=y;continue e;case 1:var i=o.a,f=x(Av,e,r,i,n),_=e,b=r,h=f,y=c;e=_,r=b,n=h,t=y;continue e;case 2:var i=o.a,f=x(Av,e,r,i,n),_=e,b=r,h=f,y=c;e=_,r=b,n=h,t=y;continue e;case 3:var _=e,b=r,h=n,y=c;e=_,r=b,n=h,t=y;continue e;case 4:var i=o.a,f=x(Av,e,r,i,n),_=e,b=r,h=f,y=c;e=_,r=b,n=h,t=y;continue e;case 5:var u=o.a,_=e,b=r,h=x(Bv,e,r,n,u),y=c;e=_,r=b,n=h,t=y;continue e;default:var s=o.a,d=o.b,p=a(M2,GP(s),e),g=r*s.gC,_=e,b=r,h=x(Bv,p,g,n,$([d])),y=c;e=_,r=b,n=h,t=y;continue e}}else return n}),rf=ng,af=tg,nf=og,zG=re,z2=function(e){return{$:5,a:e}},OP=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,o=t,c=a(z,n,r);e=o,r=c;continue e}else return r}),Jt=function(e){return z2(a(OP,e,S))},JP={mX:!0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aW:0,aX:0,aY:0,gC:1},QP=function(e){var r=e;return r},D2=zv({f1:Vc,jW:0,tD:Lv,gN:Bc,lj:255,g$:Vc,g0:Vc}),DG=re,Dn={i3:0,u:!1,jD:0,kw:0,kB:0,uF:0,pp:0,pq:0,L:0},vn=v(function(e,r){var n=e,t=r;return zn({ne:n.pp,nf:n.kB,ng:t.pp,nh:t.kB,ni:n.pq,nj:n.jD,nk:t.pq,nl:t.jD,nm:n.L,nn:n.i3,no:t.L,np:t.i3,nq:n.uF,nr:n.kw,ns:t.uF,nt:t.kw})}),tf=P({gh:a(vn,Dn,Dn),hY:a(vn,Dn,Dn),hZ:a(vn,Dn,Dn),h_:a(vn,Dn,Dn)},x(yt,0,0,0,0)),ZP=function(e){var r=e;return r.eP},XP=function(e){var r=e;return r.mp},q2=function(e){var r=e;return .5*r},YP=function(e){var r=e;return Jb(r)},A2=function(e){return YP(q2(XP(e)))},B2=function(e){var r=e;return 2*r},KP=function(e){return B2(a(Ct,A2(e),ZP(e)))},Fc=n8,eS=function(e){var r=e;return r.tx},rS=v(function(e,r){var n=r.sP,t=r.rj,o=r.pE,c=A2(e),i=La(n),f=i,u=La(t),s=u,d=eS(e);if(d){var p=KP(e),g=p;return Fc(s)?zn({ne:2/(o*g),nf:0,ng:0,nh:0,ni:0,nj:2/g,nk:0,nl:0,nm:0,nn:0,no:0,np:-1,nq:0,nr:0,ns:0,nt:1}):zn({ne:2/(o*g),nf:0,ng:0,nh:0,ni:0,nj:2/g,nk:0,nl:0,nm:0,nn:0,no:-2/(s-f),np:-(s+f)/(s-f),nq:0,nr:0,ns:0,nt:1})}else return Fc(s)?zn({ne:1/(o*c),nf:0,ng:0,nh:0,ni:0,nj:1/c,nk:0,nl:0,nm:0,nn:0,no:-1,np:-2*f,nq:0,nr:0,ns:-1,nt:0}):zn({ne:1/(o*c),nf:0,ng:0,nh:0,ni:0,nj:1/c,nk:0,nl:0,nm:0,nn:0,no:-(s+f)/(s-f),np:-2*s*f/(s-f),nq:0,nr:0,ns:-1,nt:0})}),aS=function(e){return a(z,w2({b9:1,ce:0,cy:!0}),a(z,Mv({f1:sa,jW:k2,tD:e,gN:j2,lj:0,g$:sa,g0:sa}),Zu))},r$=v(function(e,r){return(1&e>>r)===1?0:1}),nS=k(function(e,r,n){return jn(a(W,function(t){var o=t<<4,c=x(yt,a(r$,t,0),a(r$,t,1),a(r$,t,2),a(r$,t,3));return l(Cr,e,P(r,c),aS(o))},a(gn,1,a(Mn,2,n)-1)))}),nt=function(e){var r=e;return r},tS=sg,tt={pp:0,pq:0,L:0},V2=Ln({pp:1,pq:0,L:0}),oS=V2,H2=wo,I2=Ln({pp:0,pq:0,L:1}),Vv=I2,cS={aV:tt,u2:oS,vb:H2,vh:Vv},Ao=function(e){var r=e;return r},iS=function(e){var r=Ao(Xu(e)),n=Ra(ef(e)),t=Ra(e$(e)),o=Ra(Ku(e));return zn({ne:o.pp,nf:t.pp,ng:n.pp,nh:r.pp,ni:o.pq,nj:t.pq,nk:n.pq,nl:r.pq,nm:o.L,nn:t.L,no:n.L,np:r.L,nq:0,nr:0,ns:0,nt:1})},fS=v(function(e,r){return iS(a(M2,Dv(r),e))}),uS=function(e){return a(fS,cS,e)},Uc=$([x2,x(kv,!1,!1,!1,!1)]),$S=function(e){var r=Dv(e.p7),n=Jt(e.hz),t=n,o=x(Bv,r,1,D,$([t]));if(o.$===1)return S;var c=o.a,i=uS(e.p7),f=(function(){var le=e.o1;switch(le.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var Se=le.a;return P(3,Se);case 4:var Se=le.a;return P(4,Se);default:return P(5,0)}})(),u=f.a,s=f.b,d=a(dP,e.ql,c),p=d.a,g=d.b,_=a(rS,e.p7,{pE:e.pE,rj:g,sP:p}),b=tS(_).nt,h=b?Ra(ef(r)):nt(RP(e.p7)),y=e.mf,C=y,j=a(Ki,C,e.pm),L=j,M=zn({ne:0,nf:h.pp,ng:rf(L),nh:e.oR,ni:0,nj:h.pq,nk:af(L),nl:QP(m2(c)),nm:0,nn:h.L,no:nf(L),np:u,nq:0,nr:b,ns:0,nt:s}),I=jr(v2,M,i,_,JP,t,{aH:S,bf:S,t$:S,M:S}),R=e.m5;switch(R.$){case 0:var E=R.a;return jn($([l(Cr,I.aH,P(E,va),Hc),l(Cr,I.M,P(E,va),a(z,qo,Uc)),l(Cr,I.M,P(E,va),a(z,qo,Ic)),l(Cr,I.M,P(E,va),a(z,Do,Uc)),l(Cr,I.M,P(E,va),a(z,Do,Ic)),l(Cr,I.bf,tf,Hc)]));case 1:var E=R.a;return jn($([l(Cr,I.aH,tf,Hc),$([D2]),l(Cr,I.t$,E.gh,h2),$([C2(0)]),l(Cr,I.aH,P(E,va),UP),l(Cr,I.M,P(E,va),a(z,qo,Uc)),l(Cr,I.M,P(E,va),a(z,qo,Ic)),l(Cr,I.M,P(E,va),a(z,Do,Uc)),l(Cr,I.M,P(E,va),a(z,Do,Ic)),l(Cr,I.bf,tf,Hc)]));default:var K=R.a,J=R.b;return jn($([l(Cr,I.aH,P(J,va),Hc),$([D2]),a(kP,I.t$,K),l(nS,I.aH,J,$r(K)),l(Cr,I.M,P(J,va),a(z,qo,Uc)),l(Cr,I.M,P(J,va),a(z,qo,Ic)),l(Cr,I.M,P(J,va),a(z,Do,Uc)),l(Cr,I.M,P(J,va),a(z,Do,Ic)),l(Cr,I.bf,tf,Hc)]))}},lS=function(e){return a(du,"width",ar(e))},vS=v(function(e,r){var n=$([QC(1),KC(0),RC(!0),x(OC,0,0,0,0)]),t=(function(){var L=e.iY;switch(L.$){case 0:return V(n,"0",1);case 1:return V(a(z,WC,n),"1",1);default:var M=L.a;return V(n,"0",M)}})(),o=t.a,c=t.b,i=t.c,f=e.qP,u=f.a,s=f.b,d=u2(s),p=a(H,"height",ar(d)+"px"),g=u2(u),_=g/d,b=a(fn,function(L){return $S({pE:_,p7:e.p7,ql:e.ql,hz:L.hz,mf:L.mf,m5:L.m5,oR:i,o1:L.o1,pm:L.pm})},r),h=a(H,"width",ar(g)+"px"),y=e.pM,C=y,j=eP(C);return l(XC,"div",$([a(H,"padding","0px"),h,p]),$([P(c,l(nP,o,$([lS(Ea(g*i)),ZC(Ea(d*i)),h,p,a(H,"display","block"),a(H,"background-color",j)]),b))]))}),sS=function(e){return{$:2,a:e}},dS=function(e){return sS(e)},pS=function(e){return a(vS,{iY:dS(e.eD),pM:e.pM,p7:e.p7,ql:e.ql,qP:e.qP},$([{hz:e.hz,mf:e.mf,m5:e.m5,o1:e.o1,pm:e.pm}]))},qG=1,AG=0,bS=function(e){return{$:0,a:e}},mS=function(e){return bS(e)},hS=v(function(e,r){var n=e,t=r,o=t.L-n.L,c=t.pq-n.pq,i=t.pp-n.pp,f=a(me,we(i),a(me,we(c),we(o)));if(f){var u=o/f,s=c/f,d=i/f,p=Ua(d*d+s*s+u*u);return A({pp:d/p,pq:s/p,L:u/p})}else return D}),Hv=function(e){return e},gS=function(e){return{$:1,a:e}},_S=function(e){return gS(e)},Iv=v(function(e,r){var n=e,t=r;return{pp:t.pq*n.L-t.L*n.pq,pq:t.L*n.pp-t.pp*n.L,L:t.pp*n.pq-t.pq*n.pp}}),a$=function(e){var r=e,n=a(me,we(r.pp),a(me,we(r.pq),we(r.L)));if(n){var t=r.L/n,o=r.pq/n,c=r.pp/n,i=Ua(c*c+o*o+t*t);return A({pp:c/i,pq:o/i,L:t/i})}else return D},yS=v(function(e,r){var n=e,t=r,o=t.L-n.L,c=t.pq-n.pq,i=t.pp-n.pp,f=a(me,we(i),a(me,we(c),we(o)));if(f){var u=o/f,s=c/f,d=i/f,p=Ua(d*d+s*s+u*u);return p*f}else return zo}),n$=v(function(e,r){var n=e,t=r;return{pp:t.pp-n.pp,pq:t.pq-n.pq,L:t.L-n.L}}),Ta=v(function(e,r){if(r.$)return D;var n=r.a;return e(n)}),CS=v(function(e,r){var n=e,t=r;return t.pp*n.pp+t.pq*n.pq+t.L*n.L}),F2=v(function(e,r){var n=e,t=r;return ae(t,n)>0}),PS=v(function(e,r){var n=e,t=r;return ae(t,n)<0}),SS=v(function(e,r){var n=e,t=r;return{pp:t.pp-n.pp,pq:t.pq-n.pq,L:t.L-n.L}}),xS=v(function(e,r){var n=e,t=r,o=t.pp*n.pp+t.pq*n.pq+t.L*n.L;return{pp:n.pp*o,pq:n.pq*o,L:n.L*o}}),jS=function(e){var r=e;return{pp:-r.pp,pq:-r.pq,L:-r.L}},Fv={pp:0,pq:0,L:0},wS=k(function(e,r,n){return a(Ta,function(t){var o=a(SS,a(xS,t,r),r);return a(Ta,function(c){var i=a(Iv,r,e),f=a(CS,n,i),u=a(F2,zo,f)?i:a(PS,zo,f)?jS(i):Fv;return a(he,function(s){return V(t,c,s)},a$(u))},a$(o))},a$(e))}),kS=function(e){var r=e,n=we(r.L),t=we(r.pq),o=we(r.pp);if(ae(o,t)<1)if(ae(o,n)<1){var c=Ua(r.L*r.L+r.pq*r.pq);return{pp:0,pq:-r.L/c,L:r.pq/c}}else{var c=Ua(r.pq*r.pq+r.pp*r.pp);return{pp:-r.pq/c,pq:r.pp/c,L:0}}else if(ae(t,n)<1){var c=Ua(r.L*r.L+r.pp*r.pp);return{pp:r.L/c,pq:0,L:-r.pp/c}}else{var c=Ua(r.pp*r.pp+r.pq*r.pq);return{pp:-r.pq/c,pq:r.pp/c,L:0}}},Uv=function(e){var r=kS(e),n=r,t=n,o=e,c=o,i={pp:c.pq*t.L-c.L*t.pq,pq:c.L*t.pp-c.pp*t.L,L:c.pp*t.pq-c.pq*t.pp};return P(r,i)},LS=function(e){var r=e;return r},BG=re,Ev=re,VG=re,TS=v(function(e,r){var n=e,t=r;return a(Nu,n,t)}),MS=v(function(e,r){var n=e,t=r;return{pp:n.pq*t.L-n.L*t.pq,pq:n.L*t.pp-n.pp*t.L,L:n.pp*t.pq-n.pq*t.pp}}),U2=function(e){var r=e;return r.u2},E2=function(e){var r=e;return r.vb},zS=function(e){return a(MS,U2(e),E2(e))},DS=function(e){var r=e;return r.aV},qS=function(e){return{aV:DS(e),u2:U2(e),vb:E2(e),vh:zS(e)}},AS=function(e){return{eP:e.eP,mp:(function(){var r=e.rt;if(r.$){var t=r.a;return B2(a(TS,q2(t),e.eP))}else{var n=r.a;return n}})(),cL:qS(e.lg),tx:e.tx}},BS=v(function(e,r){var n=Uv(r),t=n.a,o=n.b;return Ev({aV:e,u2:t,vb:o})}),VS=v(function(e,r){return a(BS,r,e)}),HS=function(e){var r=a(n$,e.hF,e.I),n=LS(e.fz),t=a(Iv,r,n),o=(function(){var c=l(wS,r,n,t);if(c.$){var d=a$(r);if(d.$){var g=Uv(e.fz),_=g.a,b=g.b;return Ev({aV:e.I,u2:b,vb:e.fz})}else{var p=d.a;return a(VS,p,e.I)}}else{var i=c.a,f=i.a,u=i.b,s=i.c;return Ev({aV:e.I,u2:s,vb:u})}})();return AS({eP:a(yS,e.I,e.hF),rt:e.rt,tx:e.tx,lg:o})},ot=function(e){return e},t$=function(e){return e},IS=function(e){return HS({I:Hv(e.I),hF:Hv(e.hF),rt:(function(){var r=e.tx;if(r.$){var t=r.a.ph;return _S(ot(t))}else{var n=r.a.eS;return mS(t$(n))}})(),tx:(function(){var r=e.tx;return r.$?1:0})(),fz:a(ie,wo,a(hS,tt,Hv(e.fz)))})},R2=function(e){return e},HG=re,of=function(e){return e},Rv=function(e){return l(pr,0,1,e<=.04045?e/12.92:a(Mn,(e+.055)/1.055,2.4))},G2=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return{aO:o,pT:t,rE:n,tB:r}},cf=function(e){var r=G2(e),n=r.tB,t=r.rE,o=r.pT,c=r.aO;return x(yt,Rv(n),Rv(t),Rv(o),c)},W2=cg,FS=function(e){var r=e,n=rf(r),t=af(r),o=nf(r);return x($2,.4124*n+.3576*t+.1805*o,.2126*n+.7152*t+.0722*o,.0193*n+.1192*t+.9505*o,W2(r))},US=function(e){return FS(cf(e))},N2=function(e){var r=US(e),n=r.a,t=r.b,o=r.c,c=n+t+o;return of({pp:n/c,pq:t/c})},ES=function(e){var r=e;return r},Gv=function(e){var r=l(pr,1667,25e3,ES(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return of({pp:n,pq:t})},RS=of({pp:.31271,pq:.32902}),GS=of({pp:.37208,pq:.37529}),WS=of({pp:.44757,pq:.40745}),NS=Gv(Ni(12e3)),OS=Gv(Ni(5600)),Qt=function(e){switch(e.$){case 0:return RS;case 1:return OS;case 2:return NS;case 3:return WS;case 4:return GS;case 5:var r=e.a;return Gv(r);default:var n=e.a;return N2(n)}},IG=re,Wv=function(e){return e},O2=function(e){return Wv(1.2*a(Mn,2,e))},JS=function(e){return La(e)},QS=function(e){var r=e;return r},ZS=function(e){var r=e.mg,n=e.oA,t=e.mY,o=QS(n);return O2(a(Bi,2,100*a(Mn,r,2)/(o*t)))},XS=function(e){switch(e.$){case 0:var r=e.a;return O2(r);case 1:var n=e.a;return JS(n);default:var t=e.a;return ZS({mg:t.mg,mY:t.mY,oA:t.oA})}},YS=v(function(e,r){return{$:2,a:e,b:r}}),J2=function(e){return{$:0,a:e}},o$=function(e){var r=e;return r},KS=function(e){var r=e;return r.u},Q2=J2(tf.a),ex=v(function(e,r){var n=v(function(t,o){var c=o.a,i=o.b;return e(t)?P(a(z,t,c),i):P(c,a(z,t,i))});return l(on,n,P(S,S),r)}),rx=function(e){var r=e;return zn({ne:r.pp,nf:r.kB,ng:0,nh:0,ni:r.pq,nj:r.jD,nk:0,nl:0,nm:r.L,nn:r.i3,no:0,np:0,nq:r.uF,nr:r.kw,ns:0,nt:0})},ax=Me(function(e,r,n,t,o,c,i,f){var u=a(ex,KS,$([o$(e),o$(r),o$(n),o$(t)])),s=u.a,d=u.b;if(s.b){var p=X(s,d);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var g=p.a,_=p.b,b=_.a,h=_.b,y=h.a,C=h.b,j=C.a;return a(YS,a(W,rx,s),{gh:a(vn,g,b),hY:a(vn,y,j),hZ:a(vn,o,c),h_:a(vn,i,f)})}else return Q2}else return J2({gh:a(vn,e,r),hY:a(vn,n,t),hZ:a(vn,o,c),h_:a(vn,i,f)})}),FG=re,Z2=function(e){return e},X2=v(function(e,r){var n=e,t=Ra(r.eG),o=t.pp,c=t.pq,i=t.L,f=a(Ki,r.jI,r.a),u=f;return{i3:nf(u),u:n,jD:af(u),kw:0,kB:rf(u),uF:1,pp:-o,pq:-c,L:-i}}),Y2=v(function(e,r){var n=e,t=Ao(r.tt),o=t.pp,c=t.pq,i=t.L,f=a(Ki,r.jI,r.a),u=f;return{i3:nf(u),u:n,jD:af(u),kw:0,kB:rf(u),uF:2,pp:o,pq:c,L:i}}),nx=function(e){switch(e.$){case 0:var r=e.a;return a(X2,Z2(r.u),{a:Qt(r.a),eG:r.eG,jI:r.jI});case 1:var r=e.a;return a(Y2,Z2(r.u),{a:Qt(r.a),jI:r.jI,tt:r.tt});default:return Dn}},Nv=function(e){return e},K2=function(e){var r=e;return r},tx=function(e){var r=e;return{pp:-r.pp,pq:-r.pq,L:-r.L}},Ov=function(e){e:for(;;){if(oe(e.mN,zo)&&oe(e.mO,zo))return Dn;if(a(F2,La(e.mN),La(e.mO))){var r={a:e.a,mN:e.mO,mO:e.mN,fz:tx(e.fz)};e=r;continue e}else{var n=we(K2(e.mO)/Mr),t=we(K2(e.mN)/Mr),o=Ra(e.fz),c=o.pp,i=o.pq,f=o.L,u=a(Ki,Nv(1),e.a),s=u;return{i3:t*nf(s),u:!1,jD:t*af(s),kw:n/t,kB:t*rf(s),uF:3,pp:c,pq:i,L:f}}}},ox=function(e){return Ov({a:e.a,mN:e.jI,mO:e.jI,fz:Vv})},e3=!1,cx=function(e){return Ov({a:e.a,mN:e.jI,mO:zo,fz:e.fz})},ix=function(e){switch(e.$){case 0:var r=e.a;return a(X2,e3,{a:Qt(r.a),eG:r.eG,jI:r.jI});case 1:var r=e.a;return a(Y2,e3,{a:Qt(r.a),jI:r.jI,tt:r.tt});case 2:var r=e.a;return Ov({a:Qt(r.a),mN:r.mN,mO:r.mO,fz:r.fz});case 3:var r=e.a;return cx({a:Qt(r.a),jI:r.jI,fz:r.fz});default:var r=e.a;return ox({a:Qt(r.a),jI:r.jI})}},fx=function(e){var r=Dn,n=function(f){switch(f.$){case 0:return!0;case 1:return!0;default:return!1}},t=a(W,ix,a(Rt,4,a(mr,a(tr,G0,n),e))),o=function(f){return a(ie,r,_r(a(rt,f,t)))},c=a(W,nx,a(Rt,4,a(mr,n,e))),i=function(f){return a(ie,r,_r(a(rt,f,c)))};return Oe(c)&&Oe(t)?Q2:$o(ax,i(0),i(1),i(2),i(3),o(0),o(1),o(2),o(3))},ux={$:5},$x=ux,lx={$:0},vx=lx,sx=function(e){return{$:4,a:e}},dx={$:2},px=function(e){return Fc(e)?dx:sx(e)},bx=function(e){return{$:3,a:e}},mx={$:1},hx=function(e){return Fc(e)?mx:bx(e)},gx=function(e){switch(e.$){case 0:return vx;case 1:var r=e.a;return hx(r);case 2:var r=e.a;return px(r);default:return $x}},_x=v(function(e,r){return pS({pM:UC(e.lz),p7:IS(e.p7),ql:ot(e.ql),eD:e.eD,qP:P(R2(Ea(e.dp.lh)),R2(Ea(e.dp.jF))),hz:r,mf:XS(e.mf),m5:fx(e.m5),o1:gx(e.o1),pm:Qt(e.pm)})}),yx=k(function(e,r,n){var t=e(r);if(t.$)return n;var o=t.a;return a(z,o,n)}),Vr=v(function(e,r){return l(on,yx(e),S,r)}),Cx=function(e){return{$:12,a:e}},Px=function(e){return{$:2,a:e}},Sx=function(e){return{$:15,a:e}},xx=function(e){return{$:14,a:e}},jx=function(e){return{$:9,a:e}},wx=function(e){return{$:11,a:e}},kx=function(e){return{$:8,a:e}},Lx=function(e){return{$:18,a:e}},Tx=function(e){return{$:1,a:e}},Mx=function(e){return{$:5,a:e}},zx=function(e){return{$:16,a:e}},Dx=function(e){return{$:17,a:e}},qx=function(e){return{$:4,a:e}},Ax=function(e){return{$:19,a:e}},Bx=function(e){return{$:3,a:e}},Vx=function(e){return{$:0,a:e}},Hx=function(e){return{$:20,a:e}},Ix=function(e){return{$:10,a:e}},Fx=function(e){return{$:7,a:e}},Ux=function(e){return{$:6,a:e}},Ex=function(e){return{$:13,a:e}},r3=Gu({eG:V(0,0,1),aV:l(Nr,0,0,0)}),Rx=v(function(e,r){if(e.$){var t=e.a;return a(c2,t,r)}else{var n=e.a;return a(r3,n,r)}}),Gx=v(function(e,r){if(e.$){var t=e.a;return l(Nr,r.pp*t.pp,r.pq*t.pq,r.L*t.L)}else{var n=e.a;return l(Nr,r.pp*n,r.pq*n,r.L*n)}}),Wx=v(function(e,r){return l(Nr,r.pp+e.pp,r.pq+e.pq,r.L+e.L)}),Nx=v(function(e,r){return{pp:a(Ou,e,r.pp),pq:a(Ou,e,r.pq),L:a(Ou,e,r.L)}}),Ox=function(e){return a(i2,V(0,0,1),e)},a3=function(e){if(e.$){var n=e.a;return n}else{var r=e.a;return Ox(r)}},Jx=v(function(e,r){var n=P(e,r);if(!n.a.$&&!n.b.$){var t=n.a.a,o=n.b.a;return sv(t+o)}else return hv(a(Nx,a3(e),a3(r)))}),Jv=function(e){return{$:1,a:e}},Qx=v(function(e,r){var n=P(e,r);if(n.a.$)if(n.b.$){var c=n.a.a,i=n.b.a;return Jv(l(Nr,c.pp*i.pp,c.pq*i.pq,c.L*i.L))}else{var c=n.a.a,t=n.b.a;return Jv(l(Nr,c.pp*t,c.pq*t,c.L*t))}else if(n.b.$){var t=n.a.a,c=n.b.a;return Jv(l(Nr,t*c.pp,t*c.pq,t*c.L))}else{var t=n.a.a,o=n.b.a;return Qi(t*o)}}),Zx=v(function(e,r){return{gA:a(Jx,e.gA,r.gA),gC:a(Qx,e.gC,r.gC),gS:a(Wx,e.gS,a(Rx,e.gA,a(Gx,e.gC,r.gS)))}}),n3=k(function(e,r,n){switch(r.$){case 0:var t=r.a.k8,o=r.a.dI,c=a(Zx,e,t);return l(ve,n3(c),n,o);case 1:var f=r.a;return a(z,P(e,Vx(f)),n);case 2:var f=r.a;return a(z,P(e,Tx(f)),n);case 3:var f=r.a;return a(z,P(e,Px(f)),n);case 4:var f=r.a;return a(z,P(e,Bx(f)),n);case 5:var f=r.a;return a(z,P(e,qx(f)),n);case 6:var f=r.a;return a(z,P(e,Mx(f)),n);case 7:var f=r.a;return a(z,P(e,Ux(f)),n);case 8:var f=r.a;return a(z,P(e,Fx(f)),n);case 9:var i=r.a;return a(z,P(e,kx(i)),n);case 10:var f=r.a;return a(z,P(e,jx(f)),n);case 11:var f=r.a;return a(z,P(e,Ix(f)),n);case 12:var f=r.a;return a(z,P(e,wx(f)),n);case 13:var f=r.a;return a(z,P(e,Cx(f)),n);case 14:var f=r.a;return a(z,P(e,Ex(f)),n);case 15:var f=r.a;return a(z,P(e,xx(f)),n);case 16:var f=r.a;return a(z,P(e,Sx(f)),n);case 17:var f=r.a;return a(z,P(e,zx(f)),n);case 18:var f=r.a;return a(z,P(e,Dx(f)),n);case 19:var u=r.a;return a(z,P(e,Lx(u)),n);case 20:var u=r.a;return a(z,P(e,Ax(u)),n);default:var u=r.a;return a(z,P(e,Hx(u)),n)}}),Xx=function(e){return je(l(n3,Nb,e,S))},Qv=function(e){var r=e;return r.pp},Zv=function(e){var r=e;return r.pq},Xv=function(e){var r=e;return r.L},Yx=function(e){var r=e,n=Xv(r.vh),t=Zv(r.vh),o=Qv(r.vh),c=Xv(r.vb),i=Zv(r.vb),f=Qv(r.vb),u=Xv(r.u2),s=Zv(r.u2),d=Qv(r.u2);return d*i*n+s*c*o+u*f*t-u*i*o-s*f*n-d*c*t>0},Kx=function(e){var r=Ao(Xu(e)),n=Ra(ef(e)),t=Ra(e$(e)),o=Ra(Ku(e));return{mX:Yx(e),ag:o.pp,ah:o.pq,ai:o.L,aj:t.pp,ak:t.pq,al:t.L,am:n.pp,an:n.pq,ao:n.L,aW:r.pp,aX:r.pq,aY:r.L,gC:1}},Bo=v(function(e,r){return{$:6,a:e,b:r}}),Yv={$:0},$e=Yv,c$=v(function(e,r){var n=r;switch(n.$){case 0:return $e;case 6:var t=n.a,o=n.b,c=a(l2,t,e);return a(Bo,c,o);case 1:return a(Bo,e,n);case 2:return a(Bo,e,n);case 4:return a(Bo,e,n);case 3:return a(Bo,e,n);default:return a(Bo,e,n)}}),i$=v(function(e,r){return a(c$,Kx(e),r)}),ej=v(function(e,r){return a(i$,e,r)}),t3=function(e){var r=e;return r.eG},o3=function(e){var r=e;return r.aV},rj=v(function(e,r){var n=r,t=Ao(o3(e)),o=.5*n,c=un(o),i=$n(o),f=Ra(t3(e)),u=f.pp*i,s=c*u,d=u*u,p=f.pq*i,g=c*p,_=u*p,b=p*p,h=1-2*(d+b),y=f.L*i,C=c*y,j=2*(_-C),L=2*(_+C),M=u*y,I=2*(M+g),R=2*(M-g),E=p*y,K=2*(E-s),J=2*(E+s),le=y*y,Se=1-2*(b+le),Te=1-2*(d+le);return{mX:!0,ag:Se,ah:L,ai:R,aj:j,ak:Te,al:J,am:I,an:K,ao:h,aW:t.pp-Se*t.pp-j*t.pq-I*t.L,aX:t.pq-L*t.pp-Te*t.pq-K*t.L,aY:t.L-R*t.pp-J*t.pq-h*t.L,gC:1}}),aj=k(function(e,r,n){return a(c$,a(rj,e,r),n)}),Kv=k(function(e,r,n){return l(aj,e,r,n)}),UG=re,f$=v(function(e,r){return{eG:r,aV:e}}),c3=a(f$,tt,Vv),nj=v(function(e,r){if(e.$){var t=e.a,o=function(c){var i=c.a,f=c.b,u=c.c;return Ln({pp:i,pq:f,L:u})};return a(ej,Yu({aV:tt,u2:o(t.pp),vb:o(t.pq),vh:o(t.L)}),r)}else{var n=e.a;return l(Kv,c3,t$(n),r)}}),EG=D6,tj=v(function(e,r){var n=Ao(e),t=1-r;return{mX:r>=0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aW:t*n.pp,aX:t*n.pq,aY:t*n.L,gC:r}}),oj=k(function(e,r,n){return a(c$,a(tj,e,r),n)}),cj=k(function(e,r,n){return l(oj,e,r,n)}),ij=v(function(e,r){if(e.$)return r;var n=e.a;return l(cj,tt,n,r)}),i3=k(function(e,r,n){return{pp:e,pq:r,L:n}}),f3=function(e){var r=e;return r},fj=function(e){var r=f3(e);return{mX:!0,ag:1,ah:0,ai:0,aj:0,ak:1,al:0,am:0,an:0,ao:1,aW:r.pp,aX:r.pq,aY:r.L,gC:1}},u3=v(function(e,r){return a(c$,fj(e),r)}),$3=v(function(e,r){return a(u3,e,r)}),uj=v(function(e,r){var n=e.pp,t=e.pq,o=e.L;return a($3,l(i3,n,t,o),r)}),es=v(function(e,r){var n=e.gS,t=e.gA,o=e.gC;return a(uj,n,a(nj,t,a(ij,o,r)))}),$j=function(e){var r=e;return L2(r.pI)},RG=1,l3=Z(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),lj=Z(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),v3=Z(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),vj=Z(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),s3=Z(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),sj=Z(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),dj=Z(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),u$=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return x(dj,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return x(l3,n,r,o,1);case 3:var n=e.a,t=e.b,o=e.c;return x(lj,n,t,o,1);case 4:var n=e.a,t=e.b,o=e.c;return x(v3,n,t,o,1);case 5:var n=e.a,t=e.b,o=e.c;return x(sj,n,t,o,1);case 6:var n=e.a,t=e.b,o=e.c;return x(vj,n,t,o,1);case 7:var n=e.a,t=e.b,o=e.c;return x(s3,n,t,o,1);case 8:return e;case 9:return e;default:return e}},rs={$:0},GG=0,pj=Me(function(e,r,n,t,o,c,i,f){e:for(;;)if(f.b){var u=f.a,s=f.b,d=i(u),p=d,g=a(We,p.nD,e),_=a(me,p.nz,r),b=a(We,p.sB,n),h=a(me,p.sq,t),y=a(We,p.sC,o),C=a(me,p.sr,c),j=i,L=s;e=g,r=_,n=b,t=h,o=y,c=C,i=j,f=L;continue e}else return{nz:r,sq:t,sr:c,nD:e,sB:n,sC:o}}),bj=k(function(e,r,n){var t=e(r),o=t;return $o(pj,o.nD,o.nz,o.sB,o.sq,o.sC,o.sr,e,n)}),d3=function(e){var r=e.sr,n=r,t=e.sC,o=t,c=e.sq,i=c,f=e.sB,u=f,s=e.nz,d=s,p=e.nD,g=p;return{nz:a(me,g,d),sq:a(me,u,i),sr:a(me,o,n),nD:a(We,g,d),sB:a(We,u,i),sC:a(We,o,n)}},Ec=v(function(e,r){var n=e,t=r;return a(We,n,t)}),ff=function(e){var r=e;return r},uf=function(e){var r=e;return r.pp},$f=function(e){var r=e;return r.pq},lf=function(e){var r=e;return r.L},p3=function(e){var r=ff(e),n=r.a,t=r.b,o=r.c,c=uf(n),i=$f(n),f=lf(n),u=uf(t),s=$f(t),d=lf(t),p=uf(o),g=$f(o),_=lf(o);return d3({nz:a(Mo,c,a(Mo,u,p)),sq:a(Mo,i,a(Mo,s,g)),sr:a(Mo,f,a(Mo,d,_)),nD:a(Ec,c,a(Ec,u,p)),sB:a(Ec,i,a(Ec,s,g)),sC:a(Ec,f,a(Ec,d,_))})},b3=rg,ct=function(e){return b3(Ao(e))},$$=function(e){return b3(f3(e))},mj=v(function(e,r){var n=e,t=r,o=a(me,we(t.pp),a(me,we(t.pq),we(t.L)));if(o){var c=t.L/o,i=t.pq/o,f=t.pp/o,u=Ua(f*f+i*i+c*c);return{pp:n*f/u,pq:n*i/u,L:n*c/u}}else return Fv}),hj=mj(Nv(1)),m3=k(function(e,r,n){var t=a(n$,r,n),o=a(n$,e,r);return hj(a(Iv,t,o))}),gj=function(e){var r=ff(e),n=r.a,t=r.b,o=r.c,c=$$(l(m3,n,t,o));return V({_:c,tt:ct(n)},{_:c,tt:ct(t)},{_:c,tt:ct(o)})},_j=v(function(e,r){return{$:2,a:e,b:r}}),h3=_j({l8:3,mG:0,nG:4}),g3=function(e){if(e.b){var r=e.a,n=e.b,t=h3(a(W,gj,e)),o=l(bj,p3,r,n);return x(l3,o,e,t,0)}else return rs},WG=re,Ga=k(function(e,r,n){return V(e,r,n)}),Pt=k(function(e,r,n){var t=e,o=r,c=n;return{pp:t,pq:o,L:c}}),_3=(function(){var e=ot(1),r=ot(1),n=ot(1),t=a(Ct,-.5,e),o=a(Ct,-.5,r),c=a(Ct,-.5,n),i=l(Pt,c,o,t),f=a(Ct,.5,e),u=l(Pt,c,o,f),s=a(Ct,.5,r),d=l(Pt,c,s,t),p=l(Pt,c,s,f),g=a(Ct,.5,n),_=l(Pt,g,o,t),b=l(Pt,g,s,t),h=l(Pt,g,o,f),y=l(Pt,g,s,f);return u$(g3($([l(Ga,i,b,_),l(Ga,i,d,b),l(Ga,u,h,y),l(Ga,u,y,p),l(Ga,_,b,y),l(Ga,_,y,h),l(Ga,i,p,d),l(Ga,i,u,p),l(Ga,i,_,h),l(Ga,i,h,u),l(Ga,d,y,b),l(Ga,d,p,y)])))})(),l$={$:0},yj=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Cj=k(function(e,r,n){var t=r.a,o=r.b,c=r.c,i=e(c),f=e(o),u=e(t),s=$$(l(m3,u,f,i)),d={_:s,tt:ct(u)},p={_:s,tt:ct(f)},g={_:s,tt:ct(i)};return a(z,d,a(z,p,a(z,g,n)))}),vf=function(e){var r=e;return r.aD},Pj=Z(function(e,r,n,t){if(r.$===1)return D;var o=r.a;if(n.$===1)return D;var c=n.a;if(t.$===1)return D;var i=t.a;return A(l(e,o,c,i))}),qn=4294967295>>>32-ra,Zt=g6,Sj=k(function(e,r,n){e:for(;;){var t=qn&r>>>e,o=a(Zt,t,n);if(o.$){var s=o.a;return a(Zt,qn&r,s)}else{var c=o.a,i=e-ra,f=r,u=c;e=i,r=f,n=u;continue e}}}),Rc=function(e){return e>>>5<<5},Ma=v(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d;return e<0||ae(e,n)>-1?D:ae(e,Rc(n))>-1?A(a(Zt,qn&e,c)):A(l(Sj,t,e,o))}),sf=function(e){var r=e;return r.lf},as=v(function(e,r){return a(Ma,e,sf(r))}),y3=function(e){var r=function(n){var t=n.a,o=n.b,c=n.c;return x(Pj,k(function(i,f,u){return V(i,f,u)}),a(as,t,e),a(as,o,e),a(as,c,e))};return a(Vr,r,vf(e))},xj=k(function(e,r,n){e:for(;;){var t=a(L0,dr,e),o=t.a,c=t.b;if(ae(Pa(o),dr)<0)return a(_u,!0,{ap:r,R:n,ac:o});var i=c,f=a(z,vc(o),r),u=n+1;e=i,r=f,n=u;continue e}}),v$=function(e){return e.b?l(xj,e,S,0):Vi},NG=re,za=function(e){var r=e.a;return r},jj=v(function(e,r){var n=za(e),t=function(o){var c=o.a,i=o.b,f=o.c;return c>=0&&ae(c,n)<0&&i>=0&&ae(i,n)<0&&f>=0&&ae(f,n)<0};return a(W0,t,r)?{aD:r,lf:e}:{aD:a(mr,t,r),lf:e}}),wj=k(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Gc=wj({l8:1,mG:3,nG:4}),s$=v(function(e,r){var n=nt(r),t=nt(e);return P(V(t.pp,t.pq,t.L),V(n.pp,n.pq,n.L))}),df=X7,C3=l(df,0,0,0),ns=Tr(function(e,r,n,t,o,c){var i=c.a,f=c.b,u=c.c,s=a(Qe,a(s$,e,r),o);if(s.$){var p={_:C3,tt:ct(r)},g={_:C3,tt:ct(e)},_=u+1,b=u;return V(a(z,V(n,b,_),a(z,V(n,_,t),i)),a(z,p,a(z,g,f)),u+2)}else{var d=s.a;return V(a(z,V(n,d,t),i),f,u)}}),kj=ke(function(e,r,n,t,o){e:for(;;)if(n.b){var c=n.a,i=c.a,f=c.b,u=c.c,s=n.b,d=e(u),p=e(f),g=e(i),_=t+2,b=t+1,h=t,y=e,C=r,j=s,L=t+3,M=jr(ns,d,g,_,h,r,jr(ns,p,d,b,_,r,jr(ns,g,p,h,b,r,o)));e=y,r=C,n=j,t=L,o=M;continue e}else{var I=o,R=I.a,E=I.b;return P(R,je(E))}}),Lj=ke(function(e,r,n,t,o){e:for(;;)if(r.b){var c=r.a,i=c.a,f=c.b,u=c.c,s=r.b,d=e(u),p=e(f),g=e(i),_=n+2,b=n+1,h=n,y=l(wr,a(s$,g,d),_,l(wr,a(s$,d,p),b,l(wr,a(s$,p,g),h,o))),C=a(z,V(h,b,_),t),j=e,L=s,M=n+3,I=C,R=y;e=j,r=L,n=M,t=I,o=R;continue e}else return V(t,o,n)}),Vo=k(function(e,r,n){var t=y3(n),o=l(on,Cj(r),S,t),c=F(Lj,r,t,0,S,Be),i=c.a,f=c.b,u=c.c,s=F(kj,r,f,t,0,V(i,S,u)),d=s.a,p=s.b,g=Oe(p)?o:X(o,p);return l(yj,e,a(jj,v$(g),d),a(Gc,g,d))}),P3=function(e){return{aD:a(W,function(r){return V(3*r,3*r+1,3*r+2)},a(gn,0,$r(e)-1)),lf:v$(jn(a(W,function(r){var n=r.a,t=r.b,o=r.c;return $([n,t,o])},e)))}},d$=function(e){switch(e.$){case 0:return l$;case 1:var t=e.a,r=e.b,n=a(W,ff,r);return l(Vo,t,re,P3(n));case 2:var t=e.a,r=e.b,n=a(W,ff,r);return l(Vo,t,re,P3(n));case 3:var t=e.a,o=e.b;return l(Vo,t,re,o);case 4:var t=e.a,o=e.b;return l(Vo,t,function(c){return c.tt},o);case 5:var t=e.a,o=e.b;return l(Vo,t,function(c){return c.tt},o);case 6:var t=e.a,o=e.b;return l(Vo,t,function(c){return c.tt},o);case 7:var t=e.a,o=e.b;return l(Vo,t,function(c){return c.tt},o);case 8:return l$;case 9:return l$;default:return l$}},S3=d$(_3),Tj=function(e){var r=e;return r.qP},da=v(function(e,r){return{$:1,a:e,b:r}}),p$={src:`
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
    `,attributes:{normal:"_",position:"tt",tangent:"gM",uv:"gX"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},Wc={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bo",constantAmbientOcclusion:"br",constantMaterialColor:"ew",enabledLights:"Z",lights12:"gh",lights34:"hY",lights56:"hZ",lights78:"h_",materialColorTexture:"fb",normalMapTexture:"bz",normalMapType:"bA",sceneProperties:"m",viewMatrix:"n"}},x3=v(function(e,r){return{$:2,a:e,b:r}}),Mj=v(function(e,r){return Yv}),pa=function(e){var r=W2(e);return r===1?da:r?x3:Mj},Ke=k(function(e,r,n){return r===1?e?a(z,Do,n):a(z,qo,n):n}),j3=ig,na=function(e){var r=j3(e),n=r.pp,t=r.pq,o=r.L,c=r.uV;return x(yt,n*c,t*c,o*c,c)},Nc=x(yt,0,0,0,0),zj=Me(function(e,r,n,t,o,c,i,f){if(e.$){var s=e.a,d=e.b;return l(pa,s,c,Me(function(p,g,_,b,h,y,C,j){var L=C.a,M=C.b;return F(Ue,l(Ke,b,f,j),p$,Wc,i,{bo:r,br:n,ew:na(s),Z:M,gh:L.gh,hY:L.hY,hZ:L.hZ,h_:L.h_,fb:d,j:_,k:g,bz:t,bA:o,l:y,m:p,n:h})}))}else{var u=e.a;return a(da,c,Me(function(p,g,_,b,h,y,C,j){var L=C.a,M=C.b;return F(Ue,l(Ke,b,f,j),p$,Wc,i,{bo:r,br:n,ew:Nc,Z:M,gh:L.gh,hY:L.hY,hZ:L.hZ,h_:L.h_,fb:u,j:_,k:g,bz:t,bA:o,l:y,m:p,n:h})}))}}),Oc={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bo",baseColorTexture:"eo",constantAmbientOcclusion:"br",constantBaseColor:"eu",constantMetallic:"ex",constantRoughness:"ey",enabledLights:"Z",lights12:"gh",lights34:"hY",lights56:"hZ",lights78:"h_",metallicTexture:"fc",normalMapTexture:"bz",normalMapType:"bA",roughnessTexture:"fn",sceneProperties:"m",viewMatrix:"n"}},Dj=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function(u){return function(s){return function(d){return function(p){if(e.$){var _=e.a,b=e.b;return l(pa,_,s,Me(function(h,y,C,j,L,M,I,R){var E=I.a,K=I.b;return F(Ue,l(Ke,j,p,R),p$,Oc,d,{bo:c,eo:b,br:i,eu:na(_),ex:o,ey:n,Z:K,gh:E.gh,hY:E.hY,hZ:E.hZ,h_:E.h_,fc:t,j:C,k:y,bz:f,bA:u,l:M,fn:r,m:h,n:L})}))}else{var g=e.a;return a(da,s,Me(function(h,y,C,j,L,M,I,R){var E=I.a,K=I.b;return F(Ue,l(Ke,j,p,R),p$,Oc,d,{bo:c,eo:g,br:i,eu:Nc,ex:o,ey:n,Z:K,gh:E.gh,hY:E.hY,hZ:E.hZ,h_:E.h_,fc:t,j:C,k:y,bz:f,bA:u,l:M,fn:r,m:h,n:L})}))}}}}}}}}}}}}},w3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"hi"}},k3={src:`
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
    `,attributes:{position:"tt",uv:"gX"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},ts=Z(function(e,r,n,t){return a(da,r,Me(function(o,c,i,f,u,s,d,p){return F(Ue,l(Ke,f,t,p),k3,w3,n,{hi:e,j:i,k:c,l:s,m:o,n:u})}))}),os={src:`
        precision lowp float;
        
        uniform lowp vec4 constantColor;
        
        void main () {
            gl_FragColor = constantColor;
        }
    `,attributes:{},uniforms:{constantColor:"ev"}},L3={src:`
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
    `,attributes:{position:"tt"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},St=Z(function(e,r,n,t){return l(pa,e,r,Me(function(o,c,i,f,u,s,d,p){return F(Ue,l(Ke,f,t,p),L3,os,n,{ev:na(e),j:i,k:c,l:s,m:o,n:u})}))}),T3=v(function(e,r){return{$:4,a:e,b:r}}),qj={src:`
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
    `,attributes:{},uniforms:{constantColor:"ev",pointRadius:"im",sceneProperties:"m"}},M3={src:`
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
    `,attributes:{position:"tt"},uniforms:{modelMatrix:"j",modelScale:"k",pointRadius:"im",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},Aj=Z(function(e,r,n,t){return a(T3,n,Me(function(o,c,i,f,u,s,d,p){return F(Ue,p,M3,qj,t,{ev:na(e),j:i,k:c,im:r,l:s,m:o,n:u})}))}),cs={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eK",sceneProperties:"m"}},Jc=function(e){var r=e;return r},b$=ug,xt=ke(function(e,r,n,t,o){return a(da,n,Me(function(c,i,f,u,s,d,p,g){return F(Ue,l(Ke,u,o,g),L3,cs,t,{eK:a(b$,Jc(r),e),j:f,k:i,l:d,m:c,n:s})}))}),Bj={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eK",pointRadius:"im",sceneProperties:"m"}},Vj=ke(function(e,r,n,t,o){return a(T3,t,Me(function(c,i,f,u,s,d,p,g){return F(Ue,g,M3,Bj,o,{eK:a(b$,Jc(r),e),j:f,k:i,im:n,l:d,m:c,n:s})}))}),is={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"ej",enabledLights:"Z",lights12:"gh",lights34:"hY",lights56:"hZ",lights78:"h_",materialColor:"jX",sceneProperties:"m",viewMatrix:"n"}},z3={src:`
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
    `,attributes:{normal:"_",position:"tt"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},m$=ke(function(e,r,n,t,o){return l(pa,e,n,Me(function(c,i,f,u,s,d,p,g){var _=p.a,b=p.b;return F(Ue,l(Ke,u,o,g),z3,is,t,{ej:r,Z:b,gh:_.gh,hY:_.hY,hZ:_.hZ,h_:_.h_,jX:na(e),j:f,k:i,l:d,m:c,n:s})}))}),fs={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"ej",baseColor:"pQ",enabledLights:"Z",lights12:"gh",lights34:"hY",lights56:"hZ",lights78:"h_",metallic:"h3",roughness:"iv",sceneProperties:"m",viewMatrix:"n"}},h$=At(function(e,r,n,t,o,c,i){return l(pa,e,o,Me(function(f,u,s,d,p,g,_,b){var h=_.a,y=_.b;return F(Ue,l(Ke,d,i,b),z3,fs,c,{ej:t,pQ:na(e),Z:y,gh:h.gh,hY:h.hY,hZ:h.hZ,h_:h.h_,h3:n,j:s,k:u,l:g,iv:r,m:f,n:p})}))}),Hj=v(function(e,r){return{$:0,a:e,b:r}}),us=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Qc=v(function(e,r){return{$:1,a:e,b:r}}),D3=function(e){return{$:0,a:e}},$s=function(e){return a(kr,e,1)},g$=a(kr,0,0),ba=v(function(e,r){if(r.$){var t=r.a.P;return P(t,g$)}else{var n=r.a;return P(e,$s(n))}}),Ho=v(function(e,r){if(r.$){var n=r.a.P,t=r.a.rr;return P(n,(function(){return t?-1:1})())}else return P(e,0)}),ls=k(function(e,r,n){var t=V(e,r,n);if(t.a.$===1){var o=t.a.a.P;return l(us,D3(o),a(ba,o,r),a(Ho,o,n))}else if(t.b.$){var c=t.a.a,o=t.b.a.P;return l(us,a(Qc,c,o),a(ba,o,r),a(Ho,o,n))}else if(t.c.$){var c=t.a.a,o=t.c.a.P;return l(us,a(Qc,c,o),a(ba,o,r),a(Ho,o,n))}else{var c=t.a.a,i=t.b.a,f=t.c;return a(Hj,c,i)}}),Ij=Z(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),pf=ke(function(e,r,n,t,o){return{$:1,a:e,b:r,c:n,d:t,e:o}}),Fj=ke(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),vs=ke(function(e,r,n,t,o){var c=F(Fj,e,r,n,t,o);if(c.a.$===1){var i=c.a.a.P;return F(pf,D3(i),a(ba,i,r),a(ba,i,n),a(ba,i,t),a(Ho,i,o))}else if(c.b.$){var f=c.a.a,i=c.b.a.P;return F(pf,a(Qc,f,i),P(i,g$),a(ba,i,n),a(ba,i,t),a(Ho,i,o))}else if(c.c.$){var f=c.a.a,i=c.c.a.P;return F(pf,a(Qc,f,i),a(ba,i,r),P(i,g$),a(ba,i,t),a(Ho,i,o))}else if(c.d.$){var f=c.a.a,i=c.d.a.P;return F(pf,a(Qc,f,i),a(ba,i,r),a(ba,i,n),P(i,g$),a(Ho,i,o))}else if(c.e.$){var f=c.a.a,i=c.e.a.P;return F(pf,a(Qc,f,i),a(ba,i,r),a(ba,i,n),a(ba,i,t),P(i,1))}else{var f=c.a.a,u=c.b.a,s=c.c.a,d=c.d.a,p=c.e;return x(Ij,f,u,s,d)}}),q3={src:`
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
    `,attributes:{},uniforms:{backlight:"i5",colorTexture:"hi",sceneProperties:"m"}},ss=ke(function(e,r,n,t,o){return a(da,n,Me(function(c,i,f,u,s,d,p,g){return F(Ue,l(Ke,u,o,g),k3,q3,t,{i5:Jc(r),hi:e,j:f,k:i,l:d,m:c,n:s})}))}),_$={src:`
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
    `,attributes:{normal:"_",position:"tt",uv:"gX"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},Uj=Tr(function(e,r,n,t,o,c){if(e.$){var f=e.a,u=e.b;return l(pa,f,t,Me(function(s,d,p,g,_,b,h,y){var C=h.a,j=h.b;return F(Ue,l(Ke,g,c,y),_$,Wc,o,{bo:r,br:n,ew:na(f),Z:j,gh:C.gh,hY:C.hY,hZ:C.hZ,h_:C.h_,fb:u,j:p,k:d,bz:u,bA:0,l:b,m:s,n:_})}))}else{var i=e.a;return a(da,t,Me(function(s,d,p,g,_,b,h,y){var C=h.a,j=h.b;return F(Ue,l(Ke,g,c,y),_$,Wc,o,{bo:r,br:n,ew:Nc,Z:j,gh:C.gh,hY:C.hY,hZ:C.hZ,h_:C.h_,fb:i,j:p,k:d,bz:i,bA:0,l:b,m:s,n:_})}))}}),Ej=Me(function(e,r,n,t,o,c,i,f){if(e.$){var s=e.a,d=e.b;return l(pa,s,c,Me(function(p,g,_,b,h,y,C,j){var L=C.a,M=C.b;return F(Ue,l(Ke,b,f,j),_$,Oc,i,{bo:d,eo:d,br:$s(1),eu:na(s),ex:o,ey:n,Z:M,gh:L.gh,hY:L.hY,hZ:L.hZ,h_:L.h_,fc:t,j:_,k:g,bz:d,bA:0,l:y,fn:r,m:p,n:h})}))}else{var u=e.a;return a(da,c,Me(function(p,g,_,b,h,y,C,j){var L=C.a,M=C.b;return F(Ue,l(Ke,b,f,j),_$,Oc,i,{bo:u,eo:u,br:$s(1),eu:Nc,ex:o,ey:n,Z:M,gh:L.gh,hY:L.hY,hZ:L.hZ,h_:L.h_,fc:t,j:_,k:g,bz:u,bA:0,l:y,fn:r,m:p,n:h})}))}}),Rj=function(e){var r=e,n=r,t=n.nD,o=n.nz,c=n.sB,i=n.sq,f=n.sC,u=n.sr;return{pp:t+.5*(o-t),pq:c+.5*(i-c),L:f+.5*(u-f)}},De=function(e){var r=b2(e),n=r.a,t=r.b,o=r.c;return{qb:Ao(Rj(e)),rG:n/2,rH:t/2,rI:o/2}},bf=v(function(e,r){switch(e.$){case 0:if(e.b.$){var f=e.a,u=e.b.a.P;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:var o=r.a,i=r.c,t=r.d;return x(ts,u,De(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return x(ts,u,De(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return x(ts,u,De(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}else{var n=e.b.a;switch(r.$){case 0:return $e;case 1:var o=r.a,i=r.c,t=r.d;return x(St,n,De(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return x(St,n,De(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return x(St,n,De(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return x(St,n,De(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return x(St,n,De(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return x(St,n,De(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return x(St,n,De(o),i,t);case 8:var o=r.a,i=r.c;return x(St,n,De(o),i,0);case 9:var o=r.a,i=r.c;return x(St,n,De(o),i,0);default:var o=r.a,c=r.b,i=r.d;return x(Aj,n,c,De(o),i)}}case 1:if(e.b.$){var p=e.a,u=e.b.a.P,d=e.c;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:var o=r.a,i=r.c,t=r.d;return F(ss,u,d,De(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return F(ss,u,d,De(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return F(ss,u,d,De(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}else{var s=e.b.a,d=e.c;switch(r.$){case 0:return $e;case 1:var o=r.a,i=r.c,t=r.d;return F(xt,s,d,De(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return F(xt,s,d,De(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return F(xt,s,d,De(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return F(xt,s,d,De(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return F(xt,s,d,De(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return F(xt,s,d,De(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return F(xt,s,d,De(o),i,t);case 8:var o=r.a,i=r.c;return F(xt,s,d,De(o),i,0);case 9:var o=r.a,i=r.c;return F(xt,s,d,De(o),i,0);default:var o=r.a,c=r.b,i=r.d;return F(Vj,s,d,c,De(o),i)}}case 2:var g=e.a,_=e.b,qe=e.c,ce=e.d,b=l(ls,_,qe,ce);if(b.$){var j=b.a,L=b.b,M=L.a,I=L.b,R=b.c,E=R.a,K=R.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:return $e;case 6:var o=r.a,i=r.c,C=r.d;return jr(Uj,j,M,I,De(o),i,C);case 7:var o=r.a,i=r.c,C=r.d;return $o(zj,j,M,I,E,K,De(o),i,C);case 8:return $e;case 9:return $e;default:return $e}}else{var h=b.a,y=b.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:var o=r.a,i=r.c,C=r.d;return F(m$,h,y,De(o),i,C);case 3:return $e;case 4:var o=r.a,i=r.c,C=r.d;return F(m$,h,y,De(o),i,C);case 5:return $e;case 6:var o=r.a,i=r.c,C=r.d;return F(m$,h,y,De(o),i,C);case 7:var o=r.a,i=r.c,C=r.d;return F(m$,h,y,De(o),i,C);case 8:return $e;case 9:return $e;default:return $e}}default:var J=e.a,le=e.b,Se=e.c,Te=e.d,qe=e.e,ce=e.f,Ae=F(vs,le,Se,Te,qe,ce);if(Ae.$){var xr=Ae.a,Ge=Ae.b,rr=Ge.a,sr=Ge.b,Ur=Ae.c,Xe=Ur.a,Jr=Ur.b,Na=Ae.d,M=Na.a,I=Na.b,Un=Ae.e,E=Un.a,K=Un.b;switch(r.$){case 0:return $e;case 1:return $e;case 2:return $e;case 3:return $e;case 4:return $e;case 5:return $e;case 6:var o=r.a,i=r.c,t=r.d;return $o(Ej,xr,rr,sr,Xe,Jr,De(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return Dj(xr)(rr)(sr)(Xe)(Jr)(M)(I)(E)(K)(De(o))(i)(t);case 8:return $e;case 9:return $e;default:return $e}}else{var Fe=Ae.a,Je=Ae.b,Re=Ae.c,y=Ae.d;switch(r.$){case 0:return $e;case 1:return $e;case 2:var o=r.a,i=r.c,t=r.d;return Xr(h$,Fe,Je,Re,y,De(o),i,t);case 3:return $e;case 4:var o=r.a,i=r.c,t=r.d;return Xr(h$,Fe,Je,Re,y,De(o),i,t);case 5:return $e;case 6:var o=r.a,i=r.c,t=r.d;return Xr(h$,Fe,Je,Re,y,De(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return Xr(h$,Fe,Je,Re,y,De(o),i,t);case 8:return $e;case 9:return $e;default:return $e}}}}),mf=function(e){return{$:3,a:e}},A3=v(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.qb;return{qb:{pp:n*c.pp,pq:t*c.pq,L:o*c.L},rG:n*r.rG,rH:t*r.rH,rI:o*r.rI}}),B3=fg,ds=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function(u){return function(s){var d=e.a,p=e.b,g=e.c,_=j3(t),b=_.pp,h=_.pq,y=_.L,C=_.uV,j=B3({uV:C,pp:b*d,pq:h*p,L:y*g});return $o(r,n,j,o,c,i,f,u,s)}}}}}}}}}},ps=v(function(e,r){switch(r.$){case 0:return Yv;case 6:var n=r.a,t=r.b;return a(Bo,n,a(ps,e,t));case 1:var o=r.a,c=r.b;return a(da,a(A3,e,o),a(ds,e,c));case 2:var o=r.a,c=r.b;return a(x3,a(A3,e,o),a(ds,e,c));case 4:return r;case 3:var c=r.a;return mf(a(ds,e,c));default:var i=r.a;return z2(a(W,ps(e),i))}}),y$=v(function(e,r){var n=r;return a(ps,e,n)}),C$={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},V3=7683,H3=7682,Gj=l(Tv,{jW:0,tD:0,lj:15},{f1:sa,gN:Bc,g$:sa,g0:V3},{f1:sa,gN:Bc,g$:sa,g0:H3}),Wj=l(Tv,{jW:0,tD:0,lj:15},{f1:sa,gN:Bc,g$:sa,g0:H3},{f1:sa,gN:Bc,g$:sa,g0:V3}),P$=v(function(e,r){return e?a(z,Wj,r):a(z,Gj,r)}),Nj={src:`
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
    `,attributes:{normal:"_",position:"tt"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iF",viewMatrix:"n"}},Oj=function(e){if(e.$){var r=e.c;return A(Me(function(n,t,o,c,i,f,u,s){return F(Ue,a(P$,c,s),Nj,C$,r,{j:o,k:t,l:f,m:n,iF:u,n:i})}))}else return D},Io=function(e){var r=Oj(e);if(r.$)return $e;var n=r.a;return mf(n)},Jj=Z(function(e,r,n,t){var o=a(bf,n,_3),c=(function(){var d=P(e,r);return d.a?d.b?Jt($([o,Io(S3)])):o:d.b?Io(S3):$e})(),i=Tj(t),f=i.a,u=i.b,s=i.c;return a(i$,$j(t),a(y$,V(f,u,s),c))}),Qj=v(function(e,r){return x(Jj,!0,!0,e,r)}),OG=re,bs=v(function(e,r){var n=e,t=r;return ae(t,n)>-1}),ms=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),Zj=Ln({pp:-1,pq:0,L:0}),Xj=Ln({pp:0,pq:0,L:-1}),Yj=Tr(function(e,r,n,t,o,c){var i=a(bs,n,c)?I2:Xj,f=a(bs,r,o)?wo:Fb,u=a(bs,e,t)?V2:Zj,s=V(La(a(Ac,e,t)),La(a(Ac,r,o)),La(a(Ac,n,c))),d=l(Pt,a(ms,e,t),a(ms,r,o),a(ms,n,c)),p=Yu({aV:d,u2:u,vb:f,vh:i});return{pI:p,qP:s}}),Kj=v(function(e,r){return jr(Yj,uf(e),$f(e),lf(e),uf(r),$f(r),lf(r))}),I3=v(function(e,r){var n=r.a,t=r.b,o=r.c,c=V(n/2,t/2,o/2),i=c.a,f=c.b,u=c.c;return a(Qj,e,a(Kj,l(Lr,-i,-f,-u),l(Lr,i,f,u)))}),JG=re,ew=k(function(e,r,n){return{aA:a(f$,e,r),e5:La(n.e5),ty:La(n.ty)}}),rw=function(e){var r=e;return r.aA},F3=x6,jt=S6,hs=v(function(e,r){var n=Pa(e),t=dr-Pa(r.ac)-n,o=l(F3,dr,r.ac,e);return t<0?{ap:a(z,vc(o),r.ap),R:r.R+1,ac:l(jt,t,n,e)}:t?{ap:r.ap,R:r.R,ac:o}:{ap:a(z,vc(o),r.ap),R:r.R+1,ac:Ft}}),gs=y6,U3=p6,Fo=_6,hf=Z(function(e,r,n,t){var o=qn&r>>>e;if(ae(o,Pa(t))>-1){if(e===5)return a(gs,vc(n),t);var c=po(x(hf,e-ra,r,n,Ft));return a(gs,c,t)}else{var i=a(Zt,o,t);if(i.$){var c=po(x(hf,e-ra,r,n,U3(i)));return l(Fo,o,c,t)}else{var f=i.a,c=po(x(hf,e-ra,r,n,f));return l(Fo,o,c,t)}}}),_s=v(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d,i=Pa(c),f=Pa(e),u=n+(f-i);if(oe(f,dr)){var s=ae(u>>>ra,1<<t)>0;if(s){var d=t+ra,p=x(hf,d,n,e,U3(po(o)));return x(yn,u,d,p,Ft)}else return x(yn,u,t,x(hf,t,n,e,o),Ft)}else return x(yn,u,t,o,e)}),E3=v(function(e,r){var n=r.a,t=r.c,o=r.d,c=Pa(e),i=dr-Pa(o)-c,f=l(F3,dr,o,e),u=a(_s,f,r);if(i<0){var s=l(jt,i,c,e);return a(_s,s,u)}else return u}),Zc=C6,aw=function(e){var r=e.a,n=e.c,t=e.d,o=v(function(c,i){if(c.$)return a(z,c,i);var f=c.a;return l(Zc,o,i,f)});return{ap:l(Zc,o,S,n),R:r/dr|0,ac:t}},nw=v(function(e,r){var n=e.d,t=r.a,o=r.c,c=r.d;if(ae(t,dr*4)<1){var i=v(function(f,u){if(f.$){var d=f.a;return a(E3,d,u)}else{var s=f.a;return l(Zc,i,u,s)}});return a(E3,c,l(Zc,i,e,o))}else{var i=v(function(u,s){if(u.$){var p=u.a;return a(hs,p,s)}else{var d=u.a;return l(Zc,i,s,d)}});return a(_u,!0,a(hs,c,l(Zc,i,aw(e),o)))}}),tw=v(function(e,r){var n=sf(e),t=vf(e),o=sf(r),c=za(o),i=v(function(s,d){var p=s.a,g=s.b,_=s.c;return a(z,V(p+c,g+c,_+c),d)}),f=vf(r),u=l(ve,i,f,t);return{aD:u,lf:a(nw,o,n)}}),S$={aD:S,lf:Vi},R3=function(e){var r=e;return{aD:je(r.aD),lf:r.lf}},ys=function(e){if(e.b){var r=e.a,n=e.b;return R3(l(ve,tw,R3(r),n))}else return S$},ow=v(function(e,r){var n=e.tt,t=e._;return a(z,{_:$$(t),tt:ct(n)},r)}),G3=Y7,W3=K7,N3=eg,cw=At(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var f=i.a,u=i.b,s=N3(f.tt),d=W3(f.tt),p=G3(f.tt),g=a(We,e,p),_=a(me,r,p),b=a(We,n,d),h=a(me,t,d),y=a(We,o,s),C=a(me,c,s),j=u;e=g,r=_,n=b,t=h,o=y,c=C,i=j;continue e}else return d3({nz:r,sq:t,sr:c,nD:e,sB:n,sC:o})}),O3=v(function(e,r){var n=N3(e.tt),t=W3(e.tt),o=G3(e.tt);return Xr(cw,o,o,t,t,n,n,r)}),J3=function(e){var r=l(P0,ow,S,sf(e));if(r.b){var n=r.a,t=r.b,o=a(Gc,r,vf(e)),c=a(O3,n,t);return x(v3,c,e,o,0)}else return rs},iw=ke(function(e,r,n,t,o){e:for(;;){var c=t(r/n),i=a(z,c,o);if(oe(r,e))return i;var f=e,u=r-1,s=n,d=t,p=i;e=f,r=u,n=s,t=d,o=p;continue e}}),x$=v(function(e,r){return e<1?S:F(iw,0,e-1,e,r,S)}),j$=v(function(e,r){var n=$r(r);return n>=2?{aD:a(W,function(t){return oe(t,n-1)?V(0,n,1):V(0,1+t,2+t)},a(gn,0,n-1)),lf:v$(a(z,e,r))}:S$}),fw=Tr(function(e,r,n,t,o,c){e:for(;;){var i=a(Sa,r,t+1),f=r*a(Sa,n,o+1),u=r*o,s=f+i,d=u+i,p=f+t,g=u+t,_=V(g,d,s),b=V(g,s,p),h=a(z,_,a(z,b,c));if(t>0){var y=e,C=r,j=n,L=t-1,M=o,I=h;e=y,r=C,n=j,t=L,o=M,c=I;continue e}else if(o>0){var y=e,C=r,j=n,L=e-1,M=o-1,I=h;e=y,r=C,n=j,t=L,o=M,c=I;continue e}else return h}}),Q3=ke(function(e,r,n,t,o){return n<=1||t<=1?S$:{aD:jr(fw,e,n,t,e-1,r-1,S),lf:a(T0,n*t,function(c){return a(o,a(Sa,n,c),c/n|0)})}}),uw=k(function(e,r,n){return F(Q3,e,r,e+1,r,n)}),Z3=ke(function(e,r,n,t,o){return a(n,t/e,o/r)}),$w=k(function(e,r,n){return l(uw,e,r,l(Z3,e,r,n))}),Uo=function(e){return e},X3=(function(){var e=l($w,1,72,v(function(f,u){var s=2*Mr*u,d=$n(s),p=un(s);return{_:Uo({pp:p,pq:-d,L:0}),tt:at({pp:p,pq:-d,L:f-.5})}})),r=Uo({pp:0,pq:0,L:1}),n={_:r,tt:at({pp:0,pq:0,L:.5})},t=a(j$,n,a(x$,72,function(f){var u=2*Mr*f;return{_:r,tt:at({pp:un(u),pq:$n(u),L:.5})}})),o=Uo({pp:0,pq:0,L:-1}),c={_:o,tt:at({pp:0,pq:0,L:-.5})},i=a(j$,c,a(x$,72,function(f){var u=2*Mr*f;return{_:o,tt:at({pp:un(u),pq:-$n(u),L:-.5})}}));return u$(J3(ys($([t,i,e]))))})(),Y3=d$(X3),K3=function(e){var r=t3(e),n=Uv(r),t=n.a,o=n.b;return Yu({aV:o3(e),u2:t,vb:o,vh:r})},lw=function(e){var r=e;return r.e5},vw=function(e){var r=e;return r.ty},sw=Z(function(e,r,n,t){var o=K3(rw(t)),c=a(bf,n,X3),i=(function(){var p=P(e,r);return p.a?p.b?Jt($([c,Io(Y3)])):c:p.b?Io(Y3):$e})(),f=vw(t),u=f,s=lw(t),d=s;return a(i$,o,a(y$,V(u,u,d),i))}),dw=v(function(e,r){return x(sw,!0,!0,e,r)}),Cs=k(function(e,r,n){return a(dw,e,l(ew,tt,wo,{e5:ot(n),ty:ot(r)}))}),Ps=function(e){return Jt(e)},Xc=Ps,Ss=function(e){var r=e.a,n=e.b,t=e.c;return $3(l(i3,r,n,t))},xs=function(e){return Ss(V(0,e,0))},pw=function(e){var r=e;return r.qb},bw=function(e){var r=e;return r.ty},mw=function(e){var r=e;return r},hw=v(function(e,r){var n=e.tt,t=e._,o=e.gX,c=e.gM,i=e.ur,f=mw(c),u=i?-1:1,s=o,d=s.a,p=s.b,g={_:$$(t),tt:ct(n),gM:B3({uV:u,pp:f.pp,pq:f.pq,L:f.L}),gX:a(kr,d,p)};return a(z,g,r)}),gw=function(e){var r=l(P0,hw,S,sf(e));if(r.b){var n=r.a,t=r.b,o=a(Gc,r,vf(e)),c=a(O3,n,t);return x(s3,c,e,o,0)}else return rs},_w=k(function(e,r,n){return F(Q3,e,r,e+1,r+1,n)}),yw=k(function(e,r,n){return l(_w,e,r,l(Z3,e,r,n))}),Cw=u$(gw(l(yw,72,72,v(function(e,r){var n=2*Mr*e,t=$n(n),o=-Mr/2+Mr*r,c=$n(o),i=un(n),f=un(o),u={pp:f*i,pq:f*t,L:c};return{_:Uo(u),tt:at(u),gM:Uo({pp:-t,pq:i,L:0}),ur:!0,gX:P(e,r)}})))),w$=72,k$=2*w$,Pw=v(function(e,r){e:for(;;){var n=k$+1,t=a(Sa,k$,2*e+3),o=a(Sa,k$,2*e+2),c=2*e+1,i=2*e,f=k$,u=a(z,V(f,i,o),a(z,V(i,t,o),a(z,V(i,c,t),a(z,V(c,n,t),r))));if(e){var s=e-1,d=u;e=s,r=d;continue e}else return u}}),Sw=k(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),xw=v(function(e,r){e:for(;;){var n=l(Sw,0,2*Mr,e/w$),t={g4:n,ia:0,ip:1},o={g4:n,ia:1,ip:1},c=a(z,t,a(z,o,r));if(e){var i=e-1,f=c;e=i,r=f;continue e}else return c}}),jw=(function(){var e=a(xw,w$-1,$([{g4:0,ia:0,ip:0},{g4:0,ia:1,ip:0}])),r=a(Pw,w$-1,S);return a(Gc,e,r)})(),ww={src:`
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
    `,attributes:{angle:"g4",offsetScale:"ia",radiusScale:"ip"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iF",viewMatrix:"n"}},em=function(e){return mf(Me(function(r,n,t,o,c,i,f,u){return F(Ue,a(P$,!0,u),ww,C$,jw,{j:t,k:n,l:i,m:r,iF:f,n:c})}))},kw=Z(function(e,r,n,t){var o=a(bf,n,Cw),c=(function(){var u=P(e,r);return u.a?u.b?Jt($([o,em(t)])):o:u.b?em(t):$e})(),i=bw(t),f=i;return a(u3,a(n$,tt,pw(t)),a(y$,V(f,f,f),c))}),Lw=v(function(e,r){return x(kw,!0,!0,e,r)}),js=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),rm=Z(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),ws=Tr(function(e,r,n,t,o,c){return{$:3,a:e,b:r,c:n,d:t,e:o,f:c}}),ks=v(function(e,r){return{$:0,a:e,b:r}}),Tw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(ks,n,t);case 1:var n=e.a,t=e.b,r=e.c;return l(js,n,t,r);case 2:var n=e.a,t=e.b,i=e.c,f=e.d;return x(rm,n,t,i,f);default:var n=e.a,t=e.b,o=e.c,c=e.d,i=e.e,f=e.f;return jr(ws,n,t,o,c,i,f)}},Mw=Tw,zw=v(function(e,r){return a(Lw,Mw(e),r)}),QG=re,Dw=v(function(e,r){return{qb:r,ty:La(e)}}),Ls=v(function(e,r){return a(zw,e,a(Dw,ot(r),tt))}),wt=function(e){return{$:0,a:e}},ZG=0,qw=v(function(e,r){var n=a(Ki,Nv(1),e);return l(js,0,wt(n),r)}),Ts=Z(function(e,r,n,t){var o=V(e,r,n),c=o.a,i=o.b,f=o.c,u=f<=.5?f*(i+1):f+i-f*i,s=f*2-u,d=function(b){var h=b<0?b+1:b>1?b-1:b;return h*6<1?s+(u-s)*h*6:h*2<1?u:h*3<2?s+(u-s)*(2/3-h)*6:s},p=d(c-1/3),g=d(c),_=d(c+1/3);return x(Ub,_,g,p,t)}),L$=function(e){return x(Ts,e.aQ,e.aZ,e.C,e.aO)},Aw=v(function(e,r){return a(qw,N2(L$(r)),Wv(e))}),Ms={$:0},Bw=function(e){var r=e.pQ,n=e.iv,t=e.h3;return jr(ws,0,wt(cf(r)),wt(l(pr,0,1,n)),wt(l(pr,0,1,t)),wt(1),Ms)},Vw=v(function(e,r){var n=e.iv,t=e.h3;return Bw({pQ:L$(r),h3:t,iv:n})}),am=function(e){var r=G2(e),n=r.tB,t=r.rE,o=r.pT,c=r.aO;return x(yt,n,t,o,c)},Hw=function(e){return a(ks,0,wt(am(e)))},Iw=function(e){return Hw(L$(e))},An=function(e){var r=e.bW;switch(r.$){case 0:return Iw(e.fQ);case 1:var n=r.a.iv,t=r.a.h3;return a(Vw,{h3:t,iv:n},e.fQ);default:var o=r.a.j3;return a(Aw,o,e.fQ)}},Eo=function(e){return wt(e)},T$=v(function(e,r){return r}),nm=function(e){return{$:1,a:e}},gf=v(function(e,r){if(r.$){var t=r.a;return nm(t)}else{var n=r.a;return wt(e(n))}}),tm=function(e){return a(ks,0,a(gf,am,e))},Fw=v(function(e,r){return l(js,0,a(gf,cf,e),r)}),Uw=function(e){var r=e.pQ,n=e.iv,t=e.h3;return jr(ws,0,a(gf,cf,r),a(gf,a(pr,0,1),n),a(gf,a(pr,0,1),t),Eo(1),Ms)},zs=function(e){return x(Ts,e.aQ,e.aZ,e.C,e.aO)},Yc=v(function(e,r){var n=(function(){var f=r.bX;if(f.$)return Eo(zs(r.fQ));if(f.a.$)return a(T$,"[textured-surface] FromAtlas textures in 3D Surface are deferred. Rendering as fallback colour.",Eo(zs(r.fQ)));var u=f.a.a.bw;return a(ie,Eo(zs(r.fQ)),a(Qe,u,e.nv))})(),t=r.bW;switch(t.$){case 0:return tm(n);case 1:var o=t.a.iv,c=t.a.h3;return Uw({pQ:n,h3:Eo(c),iv:Eo(o)});default:var i=t.a.j3;return a(Fw,n,Wv(i))}}),Ew=k(function(e,r,n){var t=B(e,{bX:D}),o=a(Yc,{nv:Be},t),c=An(t),i=a(me,0,n-2*r),f=i/2;return Xc($([l(Cs,c,r,i),a(xs,f,a(Ls,o,r)),a(xs,-f,a(Ls,o,r))]))}),Rw=function(e){var r=e;return r.aA},om=(function(){var e={_:Fv,tt:at({pp:0,pq:0,L:1})},r=Uo({pp:0,pq:0,L:-1}),n=.5*Ua(2),t=a(j$,e,a(x$,72,function(i){var f=2*Mr*i,u=$n(f),s=un(f);return{_:Uo({pp:s*n,pq:u*n,L:n}),tt:at({pp:s,pq:u,L:0})}})),o={_:r,tt},c=a(j$,o,a(x$,72,function(i){var f=2*Mr*i,u=$n(f),s=un(f);return{_:r,tt:at({pp:s,pq:-u,L:0})}}));return u$(J3(ys($([c,t]))))})(),cm=d$(om),Gw=function(e){var r=e;return r.e5},Ww=function(e){var r=e;return r.ty},Nw=Z(function(e,r,n,t){var o=K3(Rw(t)),c=a(bf,n,om),i=(function(){var p=P(e,r);return p.a?p.b?Jt($([c,Io(cm)])):c:p.b?Io(cm):$e})(),f=Ww(t),u=f,s=Gw(t),d=s;return a(i$,o,a(y$,V(u,u,d),i))}),Ow=v(function(e,r){return x(Nw,!0,!0,e,r)}),XG=re,Jw=k(function(e,r,n){return{aA:a(f$,e,r),e5:La(n.e5),ty:La(n.ty)}}),Qw=k(function(e,r,n){var t=n/2;return a(Ow,e,l(Jw,l(Lr,0,-t,0),wo,{e5:ot(n),ty:ot(r)}))}),Ds=k(function(e,r,n){return Ps($([a(bf,e,r),Io(n)]))}),Zw=function(e){return e},Xw=function(e){return g3(a(W,Zw,y3(e)))},Yw=v(function(e,r){if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a,c=t.b;return{aD:a(W,function(i){return V(0,1+i,2+i)},a(gn,0,$r(c))),lf:v$(a(z,e,r))}}else return S$}),Kw=function(e){return l(Lr,e.pp,e.pq,e.L)},ek=function(e){var r=a(W,Kw,e);if(r.b&&r.b.b&&r.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,f=c.b;return A(a(Yw,n,a(z,o,a(z,i,f))))}else return D},rk=function(e){var r=a(Vr,ek,e);if(r.b){var n=r,t=Xw(ys(n));return A({su:t,kK:d$(t)})}else return D},_f=v(function(e,r){var n=rk($([r]));if(n.$===1)return Xc(S);var t=n.a.su,o=n.a.kK;return l(Ds,e,t,o)}),ak=v(function(e,r){return a(I3,e,V(r,r,r))}),nk=k(function(e,r,n){var t=2*Mr/e,o=a(W,function(c){return a(r3,t*c,l(Nr,0,n,0))},a(gn,0,e-1));return a(_f,r,o)}),tk=At(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var f=i.a,u=i.b,s=f,d=s.pp,p=s.pq,g=s.L,_=a(We,d,e),b=a(me,d,r),h=a(We,p,n),y=a(me,p,t),C=a(We,g,o),j=a(me,g,c),L=u;e=_,r=b,n=h,t=y,o=C,c=j,i=L;continue e}else return{nz:r,sq:t,sr:c,nD:e,sB:n,sC:o}}),ok=v(function(e,r){var n=e,t=n.pp,o=n.pq,c=n.L;return Xr(tk,t,t,o,o,c,c,r)}),im={src:`
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
    `,attributes:{quadVertex:"io"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"bT",sceneProperties:"m",viewMatrix:"n"}},Bn=Z(function(e,r,n,t){var o=nt(t),c=nt(n),i=nt(r),f=nt(e);return zn({ne:f.pp,nf:i.pp,ng:c.pp,nh:o.pp,ni:f.pq,nj:i.pq,nk:c.pq,nl:o.pq,nm:f.L,nn:i.L,no:c.L,np:o.L,nq:0,nr:0,ns:0,nt:0})}),ck=_2({l8:1,mG:0,nG:6}),it=ck($([{io:l(df,0,0,0)},{io:l(df,1,0,1)},{io:l(df,1,1,2)},{io:l(df,0,1,3)}])),fm={src:`
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
    `,attributes:{quadVertex:"io"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"bT",sceneProperties:"m",viewMatrix:"n"}},M$={src:`
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
    `,attributes:{quadVertex:"io"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"bT",sceneProperties:"m",viewMatrix:"n"}},um={src:`
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
    `,attributes:{quadVertex:"io"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"bT",sceneProperties:"m",viewMatrix:"n"}},ik=ke(function(e,r,n,t,o){var c=a(ok,r,$([n,t,o])),i=De(c);switch(e.$){case 0:if(e.b.$){var u=e.a,s=e.b.a.P;return a(da,i,Me(function(zt,Rn,Oa,Ja,Qr,Zr,ca,Er){return F(Ue,l(Ke,Ja,0,Er),um,w3,it,{hi:s,j:Oa,k:Rn,l:Zr,bT:x(Bn,r,n,t,o),m:zt,n:Qr})}))}else{var f=e.b.a;return l(pa,f,i,Me(function(zt,Rn,Oa,Ja,Qr,Zr,ca,Er){return F(Ue,l(Ke,Ja,0,Er),im,os,it,{ev:na(f),j:Oa,k:Rn,l:Zr,bT:x(Bn,r,n,t,o),m:zt,n:Qr})}))}case 1:if(e.b.$){var g=e.a,s=e.b.a.P,p=e.c;return a(da,i,Me(function(Oa,Ja,Qr,Zr,ca,Er,ia,fa){return F(Ue,l(Ke,Zr,0,fa),um,q3,it,{i5:Jc(p),hi:s,j:Qr,k:Ja,l:Er,bT:x(Bn,r,n,t,o),m:Oa,n:ca})}))}else{var d=e.b.a,p=e.c;return a(da,i,Me(function(zt,Rn,Oa,Ja,Qr,Zr,ca,Er){return F(Ue,l(Ke,Ja,0,Er),im,cs,it,{i5:p,eK:a(b$,Jc(p),d),j:Oa,k:Rn,l:Zr,bT:x(Bn,r,n,t,o),m:zt,n:Qr})}))}case 2:var _=e.a,b=e.b,Re=e.c,xr=e.d,h=l(ls,b,Re,xr);if(h.$)if(h.a.$){var J=h.a,le=J.a,Se=J.b,Te=h.b,M=Te.a,I=Te.b,qe=h.c,E=qe.a,K=qe.b;return l(pa,le,i,Me(function(Qr,Zr,ca,Er,ia,fa,Dt,cu){var Gn=Dt.a,iu=Dt.b;return F(Ue,l(Ke,Er,0,cu),M$,Wc,it,{bo:M,br:I,ew:na(le),Z:iu,gh:Gn.gh,hY:Gn.hY,hZ:Gn.hZ,h_:Gn.h_,fb:Se,j:ca,k:Zr,bz:E,bA:K,l:fa,bT:x(Bn,r,n,t,o),m:Qr,n:ia})}))}else{var j=h.a.a,L=h.b,M=L.a,I=L.b,R=h.c,E=R.a,K=R.b;return a(da,i,Me(function(zt,Rn,Oa,Ja,Qr,Zr,ca,Er){var ia=ca.a,fa=ca.b;return F(Ue,l(Ke,Ja,0,Er),M$,Wc,it,{bo:M,br:I,ew:Nc,Z:fa,gh:ia.gh,hY:ia.hY,hZ:ia.hZ,h_:ia.h_,fb:j,j:Oa,k:Rn,bz:E,bA:K,l:Zr,bT:x(Bn,r,n,t,o),m:zt,n:Qr})}))}else{var y=h.a,C=h.b;return l(pa,y,i,Me(function(zt,Rn,Oa,Ja,Qr,Zr,ca,Er){var ia=ca.a,fa=ca.b;return F(Ue,l(Ke,Ja,0,Er),fm,is,it,{ej:C,Z:fa,gh:ia.gh,hY:ia.hY,hZ:ia.hZ,h_:ia.h_,jX:na(y),j:Oa,k:Rn,l:Zr,bT:x(Bn,r,n,t,o),m:zt,n:Qr})}))}default:var ce=e.a,Ae=e.b,Fe=e.c,Je=e.d,Re=e.e,xr=e.f,Ge=F(vs,Ae,Fe,Je,Re,xr);if(Ge.$)if(Ge.a.$){var i6=Ge.a,f6=i6.a,Se=i6.b,u6=Ge.b,Na=u6.a,Un=u6.b,$6=Ge.c,fc=$6.a,En=$6.b,l6=Ge.d,M=l6.a,I=l6.b,v6=Ge.e,E=v6.a,K=v6.b;return l(pa,f6,i,Me(function(fa,Dt,cu,Gn,iu,aU,s6,nU){var Nl=s6.a,tU=s6.b;return F(Ue,l(Ke,Gn,0,nU),M$,Oc,it,{bo:M,eo:Se,br:I,eu:na(f6),ex:En,ey:Un,Z:tU,gh:Nl.gh,hY:Nl.hY,hZ:Nl.hZ,h_:Nl.h_,fc,j:cu,k:Dt,bz:E,bA:K,l:aU,bT:x(Bn,r,n,t,o),fn:Na,m:fa,n:iu})}))}else{var Xe=Ge.a.a,Jr=Ge.b,Na=Jr.a,Un=Jr.b,uo=Ge.c,fc=uo.a,En=uo.b,o6=Ge.d,M=o6.a,I=o6.b,c6=Ge.e,E=c6.a,K=c6.b;return a(da,i,Me(function(Qr,Zr,ca,Er,ia,fa,Dt,cu){var Gn=Dt.a,iu=Dt.b;return F(Ue,l(Ke,Er,0,cu),M$,Oc,it,{bo:M,eo:Xe,br:I,eu:Nc,ex:En,ey:Un,Z:iu,gh:Gn.gh,hY:Gn.hY,hZ:Gn.hZ,h_:Gn.h_,fc,j:ca,k:Zr,bz:E,bA:K,l:fa,bT:x(Bn,r,n,t,o),fn:Na,m:Qr,n:ia})}))}else{var rr=Ge.a,sr=Ge.b,Ur=Ge.c,C=Ge.d;return l(pa,rr,i,Me(function(Rn,Oa,Ja,Qr,Zr,ca,Er,ia){var fa=Er.a,Dt=Er.b;return F(Ue,l(Ke,Qr,0,ia),fm,fs,it,{ej:C,pQ:na(rr),Z:Dt,gh:fa.gh,hY:fa.hY,hZ:fa.hZ,h_:fa.h_,h3:Ur,j:Ja,k:Oa,l:ca,bT:x(Bn,r,n,t,o),iv:sr,m:Rn,n:Zr})}))}}}),fk=(function(){var e=$([{$7:a(kr,0,1)},{$7:a(kr,1,1)},{$7:a(kr,2,1)},{$7:a(kr,3,1)},{$7:a(kr,0,-1)},{$7:a(kr,1,-1)},{$7:a(kr,2,-1)},{$7:a(kr,3,-1)}]),r=$([V(0,1,2),V(0,2,3),V(4,6,5),V(4,7,6),V(4,5,1),V(1,0,4),V(5,6,2),V(2,1,5),V(6,7,3),V(3,2,6),V(7,4,0),V(0,3,7)]);return a(Gc,e,r)})(),uk={src:`
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
    `,attributes:{quadShadowVertex:"$7"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"bT",sceneProperties:"m",shadowLight:"iF",viewMatrix:"n"}},$m=Z(function(e,r,n,t){return mf(Me(function(o,c,i,f,u,s,d,p){return F(Ue,a(P$,f,p),uk,C$,fk,{j:i,k:c,l:s,bT:x(Bn,e,r,n,t),m:o,iF:d,n:u})}))}),$k=At(function(e,r,n,t,o,c,i){var f=F(ik,n,t,o,c,i),u=P(e,r);return u.a?u.b?Jt($([f,x($m,t,o,c,i)])):f:u.b?x($m,t,o,c,i):$e}),z$=ke(function(e,r,n,t,o){return Xr($k,!0,!1,e,r,n,t,o)}),lk=k(function(e,r,n){var t=r/2,o=n/2,c=v(function(i,f){return l(Lr,i,f,0)});return F(z$,tm(e),a(c,-t,-o),a(c,t,-o),a(c,t,o),a(c,-t,o))}),qs=function(e){return{$:1,a:e}},vk=function(e){return x(rm,0,wt(cf(e)),Eo(1),Ms)},sk=function(e){return vk(L$(e))},lm=function(e){return Ss(V(e,0,0))},dk=function(e){return Ss(V(0,0,e))},pk=a(f$,tt,H2),bk=v(function(e,r){return l(Kv,pk,t$(e),r)}),vm=v(function(e,r){return l(Kv,c3,t$(e),r)}),mk=K6,hk=function(e){var r=e.a,n=e.b,t=e.c,o=Ob(V(r,n,t));return{pK:a(Nu,n,r),r_:mk(t/o),ty:o}},sm=k(function(e,r,n){var t=n.a,o=n.b,c=V(o.pp-t.pp,o.pq-t.pq,o.L-t.L),i=c.a,f=c.b,u=c.c,s=hk(V(i,f,u)),d=s.ty,p=s.pK,g=s.r_;return a(dk,t.L,a(xs,t.pq,a(lm,t.pp,a(vm,p,a(bk,g-Ii(90),a(lm,d/2,a(vm,Ii(90),l(Cs,e,r/2,d))))))))}),gk=k(function(e,r,n){var t=v(function(o,c){e:for(;;)switch(o.$){case 0:var i=o.a;return B(c,{fS:A(i)});case 1:var i=o.a,f=c.fS;if(f.$===1)return B(c,{fS:A(i)});var u=f.a;return{g2:a(z,l(sm,sk(e),r,P(u,i)),c.g2),fS:A(i)};case 2:var s=o.a.uC,p=qs(s),g=c;o=p,c=g;continue e;case 3:var d=o.a.q8,p=qs(d),g=c;o=p,c=g;continue e;default:var d=o.a.q8,p=qs(d),g=c;o=p,c=g;continue e}});return je(l(ve,t,{g2:S,fS:D},n).g2)}),_k=k(function(e,r,n){if(r.b){var t=r.a,o=r.b;return Xc(l(w0,v(function(c,i){return a(_f,e,$([c,i,a(Lo,V(0,0,-n),i),a(Lo,V(0,0,-n),c)]))}),r,X(o,$([t]))))}else return Xc(S)}),yk=k(function(e,r,n){var t=r/2,o=n/2;return F(z$,e,l(Lr,-t,-o,0),l(Lr,t,-o,0),l(Lr,t,o,0),l(Lr,-t,o,0))}),Ck=function(e){var r=e;return!r.$&&r.a.$===1},Pk=v(function(e,r){var n=r;if(n.$)return Ps(S);if(n.a.$){var t=n.a.a.su,o=n.a.a.kK;return l(Ds,e.uu,t,o)}else{var t=n.a.a.su,o=n.a.a.kK;return l(Ds,e.uI,t,o)}}),dm={src:`
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
    `,attributes:{triangleVertex:"k9"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",triangleVertexPositions:"gT",viewMatrix:"n"}},pm={src:`
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
    `,attributes:{triangleVertex:"k9"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",triangleVertexPositions:"gT",viewMatrix:"n"}},yf=function(e){var r=ff(e),n=r.a,t=r.b,o=r.c,c=nt(n),i=nt(t),f=nt(o);return zn({ne:c.pp,nf:i.pp,ng:f.pp,nh:0,ni:c.pq,nj:i.pq,nk:f.pq,nl:0,nm:c.L,nn:i.L,no:f.L,np:0,nq:0,nr:0,ns:0,nt:0})},D$=h3($([V({k9:0},{k9:1},{k9:2})])),Sk=v(function(e,r){var n=p3(r),t=De(n);switch(e.$){case 0:if(e.b.$){var c=e.a,i=e.b.a.P;return $e}else{var o=e.b.a;return l(pa,o,t,Me(function(J,le,Se,Te,qe,ce,Ae,Fe){return F(Ue,l(Ke,Te,0,Fe),dm,os,D$,{ev:na(o),j:Se,k:le,l:ce,m:J,gT:yf(r),n:qe})}))}case 1:if(e.b.$){var s=e.a;return $e}else{var f=e.b.a,u=e.c;return a(da,t,Me(function(J,le,Se,Te,qe,ce,Ae,Fe){return F(Ue,l(Ke,Te,0,Fe),dm,cs,D$,{eK:a(b$,Jc(u),f),j:Se,k:le,l:ce,m:J,gT:yf(r),n:qe})}))}case 2:var d=e.a,p=e.b,L=e.c,M=e.d,g=l(ls,p,L,M);if(g.$)return $e;var _=g.a,b=g.b;return l(pa,_,t,Me(function(J,le,Se,Te,qe,ce,Ae,Fe){var Je=Ae.a,Re=Ae.b;return F(Ue,l(Ke,Te,0,Fe),pm,is,D$,{ej:b,Z:Re,gh:Je.gh,hY:Je.hY,hZ:Je.hZ,h_:Je.h_,jX:na(_),j:Se,k:le,l:ce,m:J,gT:yf(r),n:qe})}));default:var h=e.a,y=e.b,C=e.c,j=e.d,L=e.e,M=e.f,I=F(vs,y,C,j,L,M);if(I.$)return $e;var R=I.a,E=I.b,K=I.c,b=I.d;return l(pa,R,t,Me(function(le,Se,Te,qe,ce,Ae,Fe,Je){var Re=Fe.a,xr=Fe.b;return F(Ue,l(Ke,qe,0,Je),pm,fs,D$,{ej:b,pQ:na(R),Z:xr,gh:Re.gh,hY:Re.hY,hZ:Re.hZ,h_:Re.h_,h3:K,j:Te,k:Se,l:Ae,iv:E,m:le,gT:yf(r),n:ce})}))}}),xk=(function(){var e=$([{fx:a(kr,0,1)},{fx:a(kr,1,1)},{fx:a(kr,2,1)},{fx:a(kr,0,-1)},{fx:a(kr,1,-1)},{fx:a(kr,2,-1)}]),r=$([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return a(Gc,e,r)})(),jk={src:`
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
    `,attributes:{triangleShadowVertex:"fx"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iF",triangleVertexPositions:"gT",viewMatrix:"n"}},bm=function(e){return mf(Me(function(r,n,t,o,c,i,f,u){return F(Ue,a(P$,o,u),jk,C$,xk,{j:t,k:n,l:i,m:r,iF:f,gT:yf(e),n:c})}))},wk=Z(function(e,r,n,t){var o=a(Sk,n,t),c=P(e,r);return c.a?c.b?Jt($([o,bm(t)])):o:c.b?bm(t):$e}),kk=v(function(e,r){return x(wk,!0,!0,e,r)}),Lk=v(function(e,r){var n=r.a,t=r.b,o=r.c;return a(kk,e,l(Ga,l(Lr,n.pp,n.pq,n.L),l(Lr,t.pp,t.pq,t.L),l(Lr,o.pp,o.pq,o.L)))}),Vn=k(function(e,r,n){var t=r.bX;return t.$?n:a(T$,"[textured-surface] Textured Surface on "+(e+" is deferred. Rendering as fallback colour."),n)}),Tk=v(function(e,r){var n=r.a,t=r.b,o=function(Xe){return A(a(es,n,Xe))};switch(t.$){case 0:var ce=t.a.D,qe=t.a.lh,h=t.a.jF;return o(l(yk,a(Yc,e,ce),qe,h));case 1:var ce=t.a.D,J=t.a.ty;return o(l(Vn,"Disc",ce,l(nk,48,An(ce),J)));case 2:var ce=t.a.D,J=t.a.ty,le=t.a.e5;return o(l(Vn,"Capsule",ce,l(Ew,ce,J,le)));case 3:var ce=t.a.D,b=t.a.lf;if(b.b&&b.b.b&&b.b.b.b&&b.b.b.b.b&&!b.b.b.b.b.b){var c=b.a,i=b.b,f=i.a,u=i.b,s=u.a,d=u.b,p=d.a;return o(F(z$,a(Yc,e,ce),l(Lr,c.pp,c.pq,c.L),l(Lr,f.pp,f.pq,f.L),l(Lr,s.pp,s.pq,s.L),l(Lr,p.pp,p.pq,p.L)))}else return o(l(Vn,"polygon ("+(ar($r(b))+"-vertex)"),ce,a(_f,An(ce),b)));case 9:var ce=t.a.D,g=t.a.U;return o(l(Vn,"Cube",ce,a(ak,An(ce),g)));case 10:var ce=t.a.D,J=t.a.ty;return o(a(Ls,a(Yc,e,ce),J));case 11:var ce=t.a.D,J=t.a.ty,le=t.a.e5;return o(l(Vn,"Cylinder",ce,l(Cs,An(ce),J,le)));case 12:var ce=t.a.D,_=t.a.qP;return o(l(Vn,"Block",ce,a(I3,An(ce),_)));case 13:var ce=t.a.D,b=t.a.lf;return o(l(Vn,"Triangle",ce,a(Lk,An(ce),b)));case 14:var ce=t.a.D,b=t.a.lf,h=t.a.jF,y=a(Yc,e,ce),C=B(ce,{bX:D}),j=h/2,L=a(W,function(Xe){return B(Xe,{L:Xe.L+j})},b),M=An(C),I=(function(){if(b.b&&b.b.b&&b.b.b.b&&b.b.b.b.b&&!b.b.b.b.b.b){var Xe=b.a,Jr=b.b,Na=Jr.a,Un=Jr.b,uo=Un.a,fc=Un.b,En=fc.a;return F(z$,y,l(Lr,Xe.pp,Xe.pq,Xe.L+j),l(Lr,Na.pp,Na.pq,Na.L+j),l(Lr,uo.pp,uo.pq,uo.L+j),l(Lr,En.pp,En.pq,En.L+j))}else return l(Vn,"polygon-with-walls top ("+(ar($r(b))+"-vertex)"),ce,a(_f,M,L))})(),R=l(_k,M,L,h),E=a(W,function(Xe){return B(Xe,{L:Xe.L-j})},b),K=a(_f,M,je(E));return o(Xc($([I,K,R])));case 15:var ce=t.a.D,J=t.a.ty,le=t.a.e5;return o(l(Vn,"Cone",ce,l(Qw,An(ce),J,le)));case 16:var ce=t.a.D,Se=t.a.dt,Te=t.a.q8,qe=t.a.lh;return o(l(Vn,"Line",ce,l(sm,An(ce),qe,P(Se,Te))));case 17:var ce=t.a.D,Ae=t.a.sv;return a(he,function(Xe){var Jr=a(Pk,{uu:a(Yc,e,ce),uI:An(ce)},Xe);return a(es,n,Ck(Xe)?Jr:l(Vn,"welded mesh",ce,Jr))},a(Qe,Ae,e.dZ));case 4:var Fe=t.a.oO,Je=t.a.mj,Re=t.a.m9,xr=t.a.tX;if(Fe.$)return a(T$,"[LeafPath] fill-only LeafPath in 3D is deferred; no stroke colour set",D);var Ge=Fe.a;return o(Xc(l(gk,Ge,Re,xr)));case 5:var rr=t.a,sr=rr.tD;if(sr.$)return D;var Ur=sr.a.bw;return a(he,function(Xe){return a(es,n,l(lk,Xe,rr.lh,rr.jF))},a(Qe,Ur,e.nv));case 6:return D;case 7:return D;case 8:return D;case 18:return D;case 19:return D;default:return D}}),Mk=v(function(e,r){return a(Vr,Tk(e),Xx(r))}),zk=function(e){return x(Ts,e.aQ,e.aZ,e.C,e.aO)},Dk=v(function(e,r){return a(_x,{lz:zk(e.lz),p7:e.p7,ql:e.ql,eD:e.dp.eD,mf:e.mf,m5:e.m5,dp:e.dp,o1:e.o1,pm:e.pm},a(Mk,{nv:e.nv,dZ:Be},r))}),mm=function(e){return wc(V(0,e,0))},qk=function(e){return{$:1,a:e}},Ak=k(function(e,r,n){return qk({jF:n,D:e,lh:r})}),Bk=v(function(e,r){return l(Ak,e,r,r)}),Vk=function(e){return a(mm,-.001,a(wv,-Mr/2,a(Bk,ka(e),20)))},As=f8,Hk=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,c=a(We,r,a(We,n,t)),i=a(me,r,a(me,n,t)),f=(c+i)/2,u=oe(c,i)?0:f<.5?(i-c)/(i+c):(i-c)/(2-i-c),s=oe(i,r)?(n-t)/(i-c):oe(i,n)?2+(t-r)/(i-c):4+(r-n)/(i-c),d=s*(1/6),p=As(d)?0:d<0?d+1:d;return{aO:o,aQ:p,C:f,aZ:u}},Ik=function(e){return Hk(e)},Kc=function(e){e:for(;;){var r=e,n=r;e=n;continue e}},Fk=function(e){return{$:15,a:e}},Uk=k(function(e,r,n){return Fk({jF:n,D:e,lf:r})}),Ek=function(e){return{$:4,a:e}},Rk=v(function(e,r){return Ek({D:e,lf:r})}),Gk=Z(function(e,r,n,t){var o=a(W,function(u){return{pp:u.pp,pq:u.pq,L:0}},n.ts),c=l(Uk,r.D,o,r.cT),i=(function(){var u=r.lx;if(u.$===1)return S;var s=u.a,d=1e-4,p=a(W,function(g){return{pp:g.pp,pq:g.pq,L:-r.cT/2-d}},je(n.ts));return $([a(Rk,s,p)])})(),f=a(z,c,i);return a(gv,_v(t),Or(f))}),Wk=k(function(e,r,n){return a(W,function(t){var o=t.b,c=t.c;return x(Gk,e,r,o,c)},n.gu)}),Nk=v(function(e,r){return a(mm,e/2,a(wv,-Mr/2,r))}),Ok=function(e){var r=e.hs*$n(e.eI),n=e.hs*un(e.eI),t=n*$n(e.pK),o=n*un(e.pK);return{I:l(Nr,e.hF.pp+t,e.hF.pq+r,e.hF.L+o),hF:e.hF,tx:e.tx,fz:l(Nr,0,1,0)}},Jk=function(e){return{$:0,a:e}},Qk=e8,Zk=Jk({eS:2*Qk(.5)}),hm=function(e){return Ok({pK:e.ch.pK,hs:e.ch.hs,eI:e.ch.eI,hF:e.ch.hF,tx:Zk})},Xk=v(function(e,r){var n=hm(r),t=a(W,function(c){return l(FC,e.jb,n,{pF:a(mv,e.kn.cT,c.pF),jF:c.jF,bw:c.bw})},e.se),o=Or(a(z,Vk(e.qM),X(a(W,Nk(e.kn.cT),X(l(Wk,e.jb,e.kn,e.dB),e.kk)),X(t,e.u_))));return a(Yi,Kc,a(Dk,{lz:Ik(e.gw.lz),p7:n,ql:.1,mf:e.gw.mf,m5:e.gw.m5,nv:e.jb.nv,dp:{eD:e.eD,jF:e.dp.jF,lh:e.dp.lh},o1:e.gw.o1,pm:e.gw.pm},o))}),Bs=function(e){return{$:1,a:e}},gm=Ca("button"),Vs=Zl,Yk=v(function(e,r){return a(u0,e,Vs(r))}),Kk=Yk("checked"),eL=Ca("input"),rL=Ca("label"),aL=a(zc,$(["target","checked"]),ne),nL=function(e){return a(vv,"change",a(Ze,e,aL))},_m=function(e){return a(vv,"click",te(e))},ym=v(function(e,r){return a(u0,e,Hr(r))}),tL=ym("type"),oL=v(function(e,r){var n=r.eC,t=ge(a(Ie,function(d){return d.k4},e)),o=$([a(H,"display","flex"),a(H,"align-items","center"),a(H,"gap","8px"),a(H,"padding","4px 8px"),a(H,"font-size","12px"),a(H,"cursor","pointer"),a(H,"color",t)]),c=k(function(d,p,g){return a(rL,o,$([a(eL,$([tL("checkbox"),Kk(p),nL(function(_){return Bs(function(b){return a(g,b,_)})})]),S),fr(d)]))}),i=ge(a(Ie,function(d){return d.i9},e)),f=v(function(d,p){return a(gm,$([a(H,"flex","1"),a(H,"padding","4px 8px"),a(H,"font-size","11px"),a(H,"cursor","pointer"),a(H,"background","transparent"),a(H,"color",t),a(H,"border","1px solid "+i),a(H,"border-radius","3px"),_m(p)]),$([fr(d)]))}),u=ge(a(Ie,function(d){return d.D},e)),s={eA:!0,jk:!0,eF:!0,eY:!0,fh:!0,fk:!0,fl:!0,fw:!0};return a(hr,$([a(H,"display","flex"),a(H,"flex-direction","column"),a(H,"background",u),a(H,"border","1px solid "+i),a(H,"border-radius","6px"),a(H,"padding","6px"),a(H,"min-width","180px"),a(H,"user-select","none")]),$([a(hr,$([a(H,"padding","2px 8px 6px 8px"),a(H,"font-size","11px"),a(H,"color",ge(a(Ie,function(d){return d.k5},e))),a(H,"text-transform","uppercase"),a(H,"letter-spacing","0.05em")]),$([fr("Dev overlay")])),l(c,"Hinge axes",n.eY,v(function(d,p){return B(d,{eY:p})})),l(c,"Dihedral angles",n.eF,v(function(d,p){return B(d,{eF:p})})),l(c,"Paper normals",n.fl,v(function(d,p){return B(d,{fl:p})})),l(c,"Panel paths",n.fw,v(function(d,p){return B(d,{fw:p})})),l(c,"Control axes",n.eA,v(function(d,p){return B(d,{eA:p})})),l(c,"Control names",n.jk,v(function(d,p){return B(d,{jk:p})})),l(c,"Origin triad",n.fh,v(function(d,p){return B(d,{fh:p})})),l(c,"Panel outlines",n.fk,v(function(d,p){return B(d,{fk:p})})),a(hr,$([a(H,"display","flex"),a(H,"gap","4px"),a(H,"margin-top","6px"),a(H,"padding-top","6px"),a(H,"border-top","1px solid "+i)]),$([a(f,"All",Bs(function(d){return s})),a(f,"None",Bs(function(d){return jp}))]))]))}),Cm=v(function(e,r){var n=(function(){var f=e.t4;if(f.$)return fr("");var u=f.a;return a(hr,$([a(H,"position","absolute"),a(H,"bottom","12px"),a(H,"left","50%"),a(H,"transform","translateX(-50%)"),a(H,"width","240px")]),$([Yn(n2({nw:1,nB:0,ib:u.ib,uf:.001,uQ:u.uQ}))]))})(),t=e.nG===2,o=t?a(TC,{p7:hm(r),d2:e.kn.cT,dp:e.hd,e:e.e,dB:e.dB},r):{rS:S,t0:S},c=a(Xk,{jb:e.jb,qM:e.qM,eD:e.eD,se:e.se,kk:X(e.kk,o.t0),kn:e.kn,gw:e.gw,dp:e.hd,dB:e.dB,u_:e.u_},r),i=t?$([a(hr,$([a(H,"position","absolute"),a(H,"inset","0"),a(H,"pointer-events","none")]),o.rS),a(hr,$([a(H,"position","absolute"),a(H,"top","12px"),a(H,"left","12px")]),$([a(Yi,e.nV,a(oL,e.e,r))]))]):S;return a(hr,$([a(H,"position","relative"),a(H,"width",O(e.hd.lh)+"px"),a(H,"height",O(e.hd.jF)+"px")]),X($([a(hr,X(a(uC,e.nV,r),$([a(H,"width","100%"),a(H,"height","100%"),a(H,"user-select","none")])),$([c]))]),X(i,$([n]))))}),YG=re,cL={aV:{pp:0,pq:0,L:0},bM:V(1,0,0),bN:V(0,1,0),bO:V(0,0,1)},iL=function(e){return e},fL=v(function(e,r){var n=r;return{aV:a(kc,n.aV,e),bM:a(Nt,n.bM,e),bN:a(Nt,n.bN,e),bO:a(Nt,n.bO,e)}}),uL=k(function(e,r,n){var t=n,o=function(c){var i=$n(r),f=un(r),u=c,s=u.a,d=u.b,p=u.c,g=ht(e.eG),_=g.a,b=g.b,h=g.c,y=_*s+b*d+h*p,C=V(b*p-h*d,h*s-_*p,_*d-b*s),j=C.a,L=C.b,M=C.c;return V(s*f+j*i+_*y*(1-f),d*f+L*i+b*y*(1-f),p*f+M*i+h*y*(1-f))};return{aV:l(Gu,e,r,t.aV),bM:o(t.bM),bN:o(t.bN),bO:o(t.bO)}}),$L=k(function(e,r,n){var t=r,o=Ji(t.el),c=Ji(t.ek),i=ht(a(Lc,o,c)),f=iL({aV:o,bM:i,bN:a(Zi,V(0,0,1),i),bO:V(0,0,1)}),u=a(fL,e,f),s={eG:a(Nt,i,e),aV:a(kc,o,e)},d=t.eE(n);return l(uL,s,d,u)}),Pm=ke(function(e,r,n,t,o){var c=n.a,i=n.b,f=k(function(s,d,p){var g=d.a,_=d.b,b=(function(){var j=g;return j.eE(t)})(),h=X(r,$([s])),y=l($L,e,g,t),C=B(p,{dR:a(z,{eE:b,jH:g,ik:e,kx:h},p.dR)});return F(Pm,y,h,_,t,C)}),u=B(o,{gu:a(z,V(r,c,e),o.gu)});return l(ve,v(function(s,d){var p=s.a,g=s.b;return l(f,p,g,d)}),u,a(_n,Tc,i))}),Sm=v(function(e,r){var n={dR:S,gu:S},t=F(Pm,cL,S,e,r,n);return{dR:je(t.dR),gu:je(t.gu)}}),lL=k(function(e,r,n){var t={qw:Be,oH:n.oH},o=a(Sm,iC,t),c={lx:A(eC({rh:iv(r),tD:Vb(A_)})),D:ka(iv(r)),cT:.01};return a(hr,$([a(H,"max-width","720px"),a(H,"margin","0 auto"),a(H,"padding","32px"),a(H,"display","flex"),a(H,"flex-direction","column"),a(H,"gap","16px"),a(H,"color",ge(a(Ie,function(i){return i.k4},r)))]),$([Xy(r),a(hr,$([a(H,"border","1px solid "+ge(a(Ie,function(i){return i.i9},r))),a(H,"border-radius","8px"),a(H,"overflow","hidden"),a(H,"align-self","center")]),$([a(Cm,{jb:e,hd:{jF:420,lh:600},qM:Wp(r),eD:e.eD,se:S,nG:e.nG,nV:Up,kk:S,kn:c,gw:Eb,t4:A({ib:q_,uQ:n.oH}),e:r,dB:o,u_:S},n.d6)])),Ky(r)]))}),Hs={dk:M_,dl:D_,gu:k(function(e,r,n){return S}),cR:k(function(e,r,n){return Kn}),dA:lL},xm=function(e){return{$:1,a:e}},vL=Z(function(e,r,n,t){if(n.$){var c=n.a,i=a(Rp,c,t.d6),f=i.a,u=i.b;return V(B(t,{d6:f}),Ep(a(_o,xm,u)),S)}else{var o=n.a;return V(B(t,{oH:l(pr,0,1,o)}),Zn,S)}}),sL=k(function(e,r,n){return V(B(n,{d6:a(Gp,{ld:e.to.ld,pp:e.to.pp,pq:e.to.pq},n.d6)}),Zn,S)}),dL=function(e){return{$:0,a:e}},pL=`
# Unit 2 \u2014 the slit pop

Cut two parallel slits from the spine into a folded card. Reverse-fold
the strip between them so its central crease becomes a *mountain*. Open
the card: a wedge **rises** out of the spine. This is the first real
popup \u2014 the strip is rigid, the hinges are mechanically coupled.

Drag $\\psi$ to scrub the book. Four hinges move in lockstep: the spine
($\\theta_{\\text{spine}}$), the strip's two side-attachments
($\\theta_L$ and a symmetric $\\theta_R$), and the strip's central
mountain ($\\theta_M$). All four equal $\\pi \\psi$:

$$\\theta_{\\text{spine}} = \\theta_L = \\theta_M = \\theta_R = \\pi \\psi$$

The popup is flat at *both* $\\psi=0$ (the closed book) and $\\psi=1$
(fully flat-open) \u2014 it's a 180\xB0-flat-opener. The wedge appears
*between* those poses, peaking near $\\psi \\approx 0.5$.
`,bL=function(e){return Yn(a(Hu,e,pL))},mL=`
Unit 1's hinge had one fold and one angle. Unit 2 has *four* hinges but
only **one** independent input. The three non-spine angles aren't free
\u2014 they're determined by the spine angle through a *closure equation*:
the strip is a rigid panel, so the geometric distance from its
side-attachments to its central mountain fold is constant. That
constraint, plus left-right symmetry, forces every hinge to track in
lockstep.

The popup is a graph with a *cycle*: L \u2192 spine \u2192 R \u2192 R-att \u2192 strip-R \u2192
mountain \u2192 strip-L \u2192 L-att \u2192 L. The engine models trees, not graphs, so
the cycle is broken at one edge \u2014 here, R-att. Strip-R as positioned by
the mountain-fold path from L coincides with where R-att would place
it on R; the closure formulas make the missing edge close automatically
at every $\\psi$.

The L-att and mountain hinges are built with \`PopUp.derived\`, not
\`PopUp.fold\` \u2014 \`derived\` is the engine's constructor for *closure-
determined* hinges, whose dihedral is a closed-form function of the
spread instead of a free linear ramp. The slit pop's symmetry collapses
those formulas to $\\pi \\psi$; richer mechanisms (the V-fold, the box)
will produce non-trivial closed forms in later units.
`,hL=function(e){return Yn(a(Hu,e,mL))},gL={ts:$([{pp:0,pq:-.5},{pp:1,pq:-.5},{pp:1,pq:.5},{pp:0,pq:.5}])},_L={ts:$([{pp:0,pq:0},{pp:1,pq:0},{pp:1,pq:1},{pp:0,pq:1}])},yL={dL:.35,kQ:-.25,kR:.25},jm=k(function(e,r,n){return{ek:r,el:e,jk:S,eE:n}}),CL=function(e){var r=e.kR-e.kQ,n={ts:$([{pp:0,pq:0},{pp:r,pq:0},{pp:r,pq:e.dL},{pp:0,pq:e.dL}])},t=function(i){return Mr*i.oH},o=l(jm,{pp:e.dL,pq:e.kR},{pp:e.dL,pq:e.kQ},t),c=l(jm,{pp:r,pq:e.dL},{pp:0,pq:e.dL},t);return{by:P(o,a(ko,n,$([P(c,a(ko,n,S))]))),bD:a(ko,n,S)}},PL=(function(){var e=CL(yL),r=e.by,n=r.a,t=r.b;return a(ko,gL,$([P(l(Rb,{pp:0,pq:.5},{pp:0,pq:-.5},Mr),a(ko,_L,S)),P(n,t)]))})(),SL=k(function(e,r,n){var t={qw:Be,oH:n.oH},o=a(Sm,PL,t),c={lx:D,D:ka(iv(r)),cT:.01};return a(hr,$([a(H,"max-width","720px"),a(H,"margin","0 auto"),a(H,"padding","32px"),a(H,"display","flex"),a(H,"flex-direction","column"),a(H,"gap","16px"),a(H,"color",ge(a(Ie,function(i){return i.k4},r)))]),$([bL(r),a(hr,$([a(H,"border","1px solid "+ge(a(Ie,function(i){return i.i9},r))),a(H,"border-radius","8px"),a(H,"overflow","hidden"),a(H,"align-self","center")]),$([a(Cm,{jb:e,hd:{jF:420,lh:600},qM:Wp(r),eD:e.eD,se:S,nG:e.nG,nV:xm,kk:S,kn:c,gw:Eb,t4:A({ib:dL,uQ:n.oH}),e:r,dB:o,u_:S},n.d6)])),hL(r)]))}),Is={dk:vL,dl:sL,gu:k(function(e,r,n){return S}),cR:k(function(e,r,n){return Kn}),dA:SL},xL=Z(function(e,r,n,t){var o=P(n,t);e:for(;;)if(o.a.$)if(o.b.$===1){var s=o.a.a,d=o.b.a,p=x(Is.dk,e,r,s,d),g=p.a;return x0(g)}else break e;else{if(o.b.$)break e;var c=o.a.a,i=o.b.a,f=x(Hs.dk,e,r,c,i),u=f.a;return S0(u)}return t}),jL=k(function(e,r,n){if(n.$){var i=n.a,f=l(Is.dl,e,r,i),u=f.a;return x0(u)}else{var t=n.a,o=l(Hs.dl,e,r,t),c=o.a;return S0(c)}}),Cf=Z8,wL={kk:S,o2:S},kL=function(e){return{$:1,a:e}},LL=function(e){return{$:0,a:e}},TL=re,KG=0,eW=1,wm=Tr(function(e,r,n,t,o,c){return{mq:c,mB:r,kx:t,oa:n,oh:e,oi:o}}),km=j8,q$=L8,Pf=v(function(e,r){return e<1?"":l(nn,0,e,r)}),Sf=T8,Lm=ke(function(e,r,n,t,o){if(Co(o)||a(km,"@",o))return D;var c=a(q$,":",o);if(c.b){if(c.b.b)return D;var i=c.a,f=Sf(a(tn,i+1,o));if(f.$===1)return D;var u=f;return A(jr(wm,e,a(Pf,i,o),u,r,n,t))}else return A(jr(wm,e,o,D,r,n,t))}),Tm=Z(function(e,r,n,t){if(Co(t))return D;var o=a(q$,"/",t);if(o.b){var c=o.a;return F(Lm,e,a(tn,c,t),r,n,a(Pf,c,t))}else return F(Lm,e,"/",r,n,t)}),Mm=k(function(e,r,n){if(Co(n))return D;var t=a(q$,"?",n);if(t.b){var o=t.a;return x(Tm,e,A(a(tn,o+1,n)),r,a(Pf,o,n))}else return x(Tm,e,D,r,n)}),zm=v(function(e,r){if(Co(r))return D;var n=a(q$,"#",r);if(n.b){var t=n.a;return l(Mm,e,A(a(tn,t+1,r)),a(Pf,t,r))}else return l(Mm,e,D,r)}),Dm=function(e){return a(st,"http://",e)?a(zm,0,a(tn,7,e)):a(st,"https://",e)?a(zm,1,a(tn,8,e)):D},rW=re,Da=Xa,ML=Da(0),ma=Yl,xf=v(function(e,r){return a(ma,function(n){return Da(e(n))},r)}),zL=k(function(e,r,n){return a(ma,function(t){return a(ma,function(o){return Da(a(e,t,o))},n)},r)}),jf=function(e){return l(on,zL(z),Da(S),e)},A$=w9,DL=v(function(e,r){var n=r;return e0(a(ma,A$(e),n))}),qL=k(function(e,r,n){return a(xf,function(t){return 0},jf(a(W,DL(e),r)))}),AL=k(function(e,r,n){return Da(0)}),BL=v(function(e,r){var n=r;return a(xf,e,n)});Kr.Task=t0(ML,qL,AL,BL);var qm=ki("Task"),wf=v(function(e,r){return qm(a(xf,e,r))}),VL=pg,HL=function(e){return{$:3,a:e}},B$=k(function(e,r,n){return l(ve,v(function(t,o){var c=o.a,i=o.b,f=a(e.ir,t,c),u=f.a,s=f.b;return P(u,xa($([i,a(_o,HL,s)])))}),P(n,ue),r)}),IL=function(e){return{$:1,a:e}},FL={$:0},UL=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Am=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,f=o.c,u=o.d,s=o.e,d=e.e,p=d.a,g=d.b,_=d.c,b=d.d,h=b.a,y=b.b,C=b.c,j=b.d,L=b.e,M=d.e;return F(ze,0,y,C,F(ze,1,n,t,F(ze,0,i,f,u,s),j),F(ze,1,g,_,L,M))}else{var r=e.a,n=e.b,t=e.c,I=e.d,c=I.a,i=I.b,f=I.c,u=I.d,s=I.e,R=e.e,p=R.a,g=R.b,_=R.c,b=R.d,M=R.e;return F(ze,1,n,t,F(ze,0,i,f,u,s),F(ze,0,g,_,b,M))}else return e},Bm=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,f=o.c,u=o.d,s=u.a,d=u.b,p=u.c,g=u.d,_=u.e,b=o.e,h=e.e,y=h.a,C=h.b,j=h.c,L=h.d,M=h.e;return F(ze,0,i,f,F(ze,1,d,p,g,_),F(ze,1,n,t,b,F(ze,0,C,j,L,M)))}else{var r=e.a,n=e.b,t=e.c,I=e.d,c=I.a,i=I.b,f=I.c,R=I.d,b=I.e,E=e.e,y=E.a,C=E.b,j=E.c,L=E.d,M=E.e;return F(ze,1,n,t,F(ze,0,i,f,R,b),F(ze,0,C,j,L,M))}else return e},EL=At(function(e,r,n,t,o,c,i){if(c.$===-1&&!c.a){var f=c.a,u=c.b,s=c.c,d=c.d,p=c.e;return F(ze,n,u,s,d,F(ze,0,t,o,p,i))}else{e:for(;;)if(i.$===-1&&i.a===1)if(i.d.$===-1)if(i.d.a===1){var g=i.a,_=i.d,b=_.a;return Bm(r)}else break e;else{var h=i.a,y=i.d;return Bm(r)}else break e;return r}}),V$=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.d,f=e.e;if(c===1)if(i.$===-1&&!i.a){var u=i.a;return F(ze,r,n,t,V$(o),f)}else{var s=Am(e);if(s.$===-1){var d=s.a,p=s.b,g=s.c,_=s.d,b=s.e;return F(dc,d,p,g,V$(_),b)}else return Jn}else return F(ze,r,n,t,V$(o),f)}else return Jn},kf=v(function(e,r){if(r.$===-2)return Jn;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(ae(e,t)<0)if(c.$===-1&&c.a===1){var f=c.a,u=c.d;if(u.$===-1&&!u.a){var s=u.a;return F(ze,n,t,o,a(kf,e,c),i)}else{var d=Am(r);if(d.$===-1){var p=d.a,g=d.b,_=d.c,b=d.d,h=d.e;return F(dc,p,g,_,a(kf,e,b),h)}else return Jn}}else return F(ze,n,t,o,a(kf,e,c),i);else return a(RL,e,Xr(EL,e,r,n,t,o,c,i))}),RL=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(oe(e,t)){var f=UL(i);if(f.$===-1){var u=f.b,s=f.c;return F(dc,n,u,s,c,V$(i))}else return Jn}else return F(dc,n,t,o,c,a(kf,e,i))}else return Jn}),Vm=v(function(e,r){var n=a(kf,e,r);if(n.$===-1&&!n.a){var t=n.a,o=n.b,c=n.c,i=n.d,f=n.e;return F(ze,1,o,c,i,f)}else{var u=n;return u}}),Xt=k(function(e,r,n){var t=r(a(Qe,e,n));if(t.$)return a(Vm,e,n);var o=t.a;return l(wr,e,o,n)}),GL=function(e){return a(Xt,e,a(Ne,ie(0),a(Ne,$p(1),A)))},WL=v(function(e,r){return l(go,k(function(n,t,o){return a(e,n,t)?l(wr,n,t,o):o}),Be,r)}),NL=function(e){if(e.b){var r=gu(a(WL,v(function(n,t){return t>1}),l(ve,v(function(n,t){return a(GL,n.bw,t)}),Be,e)));return r.b?A(IL(r)):D}else return A(FL)},OL=function(e){var r=e;return a(ie,r.ow,a(Ma,a(Sa,r.cD,r.dt+r.aP),r.eT))},ei=function(e){if(e.$){var n=e.a;return a(ie,n.ow,a(Ma,n.aP,n.eT))}else{var r=e.a;return OL(r)}},H$=function(e){var r=e.b;return r},ri=function(e){var r=e.b;return ei(r).b},ai=function(e){return e.nG},Hn=function(e){return e.e},aW=7,I$=v(function(e,r){return a(Gi,function(n){return oe(n,e)},r)}),ha=v(function(e,r){var n=r;return a(I$,e,n.aI)}),Hm=function(e){return a(ha,7,e.h)},JL=function(e){return e.ae},Im=function(e){var r=e;return a(W,function(n){var t=n.a,o=n.b;return P(r.rW(t)+"Off",O(o.pp)+(","+O(o.pq)))},r.cO)},QL=function(e){return Im(e.h)},Yt=v(function(e,r){return l(ve,u9(e),c9(0),r)}),Fm=function(e){return a(lp,0,a(Yt,function(r){var n=r.a,t=r.b;return a(Yt,Hr,$([n,t]))},e))},ZL=function(e){return e?"landscape":"portrait"},XL=function(e){var r=e;return r.c2.sM+("|"+ZL(r.d1))},YL=v(function(e,r){return XL(r)+("|"+(e?"open":"closed"))}),F$=function(e){return"play:"+e},ni=v(function(e,r){return"play:"+(r+(":"+e))}),Um=function(e){var r=e;return r.g3},KL=function(e){var r=e;return r.c1.kl.sM},U$=function(e){var r=e;return r.dW},eT=function(e){var r=e;return r.dg.kl.sM},Em=function(e){switch(e){case 0:return"Red";case 1:return"Green";case 2:return"Yellow";case 3:return"Blue";case 4:return"Magenta";default:return"Cyan"}},rT=function(e){return a(Ar,"|",$([KL(e),eT(e),U$(e)?"1":"0",Em(Um(e))]))},Rm=function(e){switch(e){case 0:return"User";case 1:return"Author";default:return"Developer"}},Gm=v(function(e,r){var n=ri(r.us),t=a(fn,function(o){var c=a(Qe,o.bw,n.dd);if(c.$)return S;var i=c.a;return Im(i.ii)},e.dd);return $([P(F$("hud-panel-layout"),Fm(QL(r.cd))),P(a(ni,r.ta,"panel-layout"),Fm(t)),P(F$("mode"),Rm(ai(r.cd))),P(a(ni,r.ta,"theme"),rT(Hn(r.cd))),P(a(ni,r.ta,"device"),a(YL,Hm(r.cd),JL(r.cd)))])}),aT=n9,Wm=function(e){return a(_p,S,a(aT,br(l(Xn,Tc,a(Qn,0,xe),a(Qn,1,xe))),e))},nW=re,tW=1,oW=0,cW=2,Fs=$([{aB:0,sM:"iPhone SE",U:{jF:667,lh:375}},{aB:0,sM:"iPhone 12 Pro",U:{jF:844,lh:390}},{aB:0,sM:"iPhone 14 Pro Max",U:{jF:932,lh:430}},{aB:0,sM:"Pixel 7",U:{jF:915,lh:412}},{aB:0,sM:"Samsung Galaxy S20 Ultra",U:{jF:915,lh:412}},{aB:0,sM:"Samsung Galaxy S8+",U:{jF:740,lh:360}},{aB:1,sM:"Galaxy Z Fold 5",U:{jF:882,lh:344}},{aB:1,sM:"Surface Duo",U:{jF:720,lh:540}},{aB:2,sM:"iPad Mini",U:{jF:1024,lh:768}},{aB:2,sM:"iPad Air",U:{jF:1180,lh:820}},{aB:2,sM:"iPad Pro",U:{jF:1366,lh:1024}},{aB:2,sM:"Surface Pro 7",U:{jF:1368,lh:912}}]),nT=function(e){return _r(a(mr,function(r){return oe(r.sM,e)},Fs))},iW=re,fW=re,Nm=14,tT=8,oT=function(e){return e===" "||e==="	"||e==="/"||e==="."||e===":"||e===";"||e===","||e==="|"||e==="\\"||e==="_"||e==="-"||e==="*"},cT=function(e){var r=$t(e);return r>=97&&r<=122},iT=function(e){var r=$t(e);return r>=65&&r<=90},fT=k(function(e,r,n){e:for(;;)if(r.b){var t=r.a,o=r.b,c=oT(e)?Nm:cT(e)&&iT(t)?tT:0,i=t,f=o,u=a(z,c,n);e=i,r=f,n=u;continue e}else return je(n)}),uT=function(e){if(e.b){var r=e.a,n=e.b;return a(z,Nm,l(fT,r,n,S))}else return S},Us=A8,$T=function(e){var r=sc(e),n=a(W,Us,r);return{lH:uT(r),jV:n}},E$=v(function(e,r){return{a9:r,e_:D,aR:!1,$9:a(W,function(n){return P(n,$T(e(n)))},r),bV:0,iB:"",a$:0}}),Es=k(function(e,r,n){if(r.$===1)return D;var t=r.a;if(n.$===1)return D;var o=n.a;return A(a(e,t,o))}),uW=1,$W=0,lT=function(e){switch(e){case"portrait":return A(0);case"landscape":return A(1);default:return D}},Lf=v(function(e,r){var n=r;return B(n,{e_:e})}),vT=function(e){var r=a(hn,"|",e);if(r.b&&r.b.b&&!r.b.b.b){var n=r.a,t=r.b,o=t.a;return l(Es,v(function(c,i){return{c2:c,d1:i,bS:a(Lf,A(c),a(E$,function(f){return f.sM},Fs))}}),nT(n),lT(o))}else return D},sT=function(e){var r=a(hn,"|",e);if(r.b&&r.b.b&&r.b.b.b&&!r.b.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a;return a(he,function(f){return P(f,i==="open")},vT(n+("|"+o)))}else return D},lW=re,R$=Be,Om=v(function(e,r){var n=r;return l(wr,e,0,n)}),G$=v(function(e,r){var n=a(Qe,e,r);return!n.$}),Jm=v(function(e,r){var n=r;return a(G$,e,n)}),dT=function(e){return je(l(ve,v(function(r,n){var t=n.a,o=n.b;return a(Jm,r,t)?P(t,o):P(a(Om,r,t),a(z,r,o))}),P(R$,S),e).b)},pT=function(e){return{$:0,a:e}},bT=3600,mT=pT(bT),vW=1,hT=function(e){switch(e){case"User":return A(0);case"Author":return A(1);case"Developer":return A(2);default:return D}},Rs=function(e){return{$:4,a:e}},Qm=function(e){return{$:3,a:e}},Zm=v(function(e,r){return{$:0,a:e,b:r}}),Xm=v(function(e,r){return{$:2,a:e,b:r}}),Ym=function(e){return{$:5,a:e}},Km=function(e){return{$:1,a:e}},gT=k(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b;if(r(t))return A(e);var c=e+1,i=r,f=o;e=c,r=i,n=f;continue e}else return D}),Gs=gT(0),sW=re,W$=function(e){var r=e;return X(je(r.o),a(z,r.fS,r.q))},N$=v(function(e,r){var n=r,t=W$(n),o=a(Sa,$r(t),e),c=a(rt,o,t);if(c.b){var i=c.a,f=c.b;return{q:f,o:je(a(Rt,o,t)),fS:i}}else return n}),_T=v(function(e,r){var n=v(function(_,b){var h=_.a,y=_.b;return ae(b,h)>-1&&ae(b,y)<1});switch(e.$){case 0:var t=e.a;return a(Ta,function(_){return a(n,t,_)?A(a(Zm,t,_)):D},Ot(r));case 2:var t=e.a;return a(Ta,function(_){return a(n,t,_)?A(a(Xm,t,_)):D},Sf(r));case 4:switch(r){case"true":return A(Rs(!0));case"false":return A(Rs(!1));default:return D}case 1:return A(Km(r));case 3:var o=a(W,Ot,a(hn,",",r));if(o.b&&!o.a.$&&o.b.b&&!o.b.a.$&&o.b.b.b&&!o.b.b.a.$&&o.b.b.b.b&&!o.b.b.b.a.$&&!o.b.b.b.b.b){var c=o.a.a,i=o.b,f=i.a.a,u=i.b,s=u.a.a,d=u.b,p=d.a.a;return A(Qm(x(G,c,f,s,p)))}else return D;default:var g=e.a;return a(he,function(_){return Ym(a(N$,_,g))},a(Gs,Ka(r),W$(g)))}}),e5=v(function(e,r){var n=Pn(e);return a(W,function(t){return B(t,{a6:a(W,function(o){var c=o.a,i=o.b;return P(c,(function(){var f=a(Qe,c,n);if(f.$)return i;var u=f.a;return a(ie,i,a(_T,i,u))})())},t.a6)})},r)}),ti=v(function(e,r){var n=a(mr,function(c){var i=c.a;return oe(i,e)},r);if(n.b){var t=n.a,o=t.b;return A(o)}else return D}),dW=re,r5=v(function(e,r){return e<1?r:l(nn,0,-e,r)}),yT=v(function(e,r){return a(nv,"Off",r)?e(a(r5,an("Off"),r)):D}),CT=function(e){var r=a(hn,",",e);if(r.b&&r.b.b&&!r.b.b.b){var n=r.a,t=r.b,o=t.a;return l(Es,v(function(c,i){return{pp:c,pq:i}}),Ot(n),Ot(o))}else return D},a5=v(function(e,r){var n=r,t=a(Vr,function(o){var c=o.a,i=o.b;return a(Ta,function(f){return a(he,Tc(f),CT(i))},a(yT,n.rV,c))},e);return B(n,{cO:t})}),PT=v(function(e,r){return B(r,{h:a(a5,e,r.h)})}),pW=re,Ws={F:Be},bW=3,mW=4,hW=2,gW=1,_W=5,yW=0,n5=function(e){switch(e){case"windows":return 0;case"mac":return 1;case"linux":return 2;case"android":return 3;case"ios":return 4;default:return 5}},ST=v(function(e,r){return{dD:{pA:!1,rm:D},cB:Ws,dH:S,hf:0,b4:e,eB:r.eB,eD:r.eD,hu:r.hu,mm:!0,rn:r.rn,gd:"play",hQ:r.hQ,nv:Be,nG:bp,s8:R$,kj:n5(r.kj),n$:0,gt:{lX:0,lY:0,by:0,bJ:0,ph:0,pi:0},to:r.to,fm:r.fm,dp:r.dp,iC:r.iC,ee:r.ee,pj:!0,fC:r.fC,ps:!1}}),t5={aB:0,sM:"iPhone 12 Pro",U:{jF:844,lh:390}},xT={c2:t5,d1:0,bS:a(Lf,A(t5),a(E$,function(e){return e.sM},Fs))},jT=function(e){return e.iE+(": "+e.jM)},CW=re,PW=re,O$={bv:S,bC:S,bh:0,bi:0},wT=O$,kT={j8:0,gB:wT},o5={$:0},LT=o5,SW=re,xW=3,jW=1,wW=4,kW=0,LW=2,c5=P(0,$([1,2,3,4,5])),TT=function(e){var r=e.a,n=e.b;return{q:n,o:S,fS:r}},Ro=function(e){var r=e;return r.fS},i5=function(e){var r=e,n=r.q;if(n.b){var t=n.a,o=n.b;return{q:o,o:a(z,r.fS,r.o),fS:t}}else return r},f5=function(e){return a(N$,0,e)},MT=function(e){var r=e;return Oe(r.q)},u5=v(function(e,r){var n=function(t){e:for(;;){if(oe(Ro(t),e))return A(t);if(MT(t))return D;var o=i5(t);t=o;continue e}};return n(f5(r))}),zT=function(e){var r=TT(c5);return a(ie,r,a(u5,e,r))},Ns=Sp,Os=function(e){var r=dt(e).kl.sM,n=Ns,t=n.a,o=n.b;return _r(a(mr,function(c){return oe(c.sM,r)},a(z,t,o)))},DT=function(e){var r=Ns,n=r.a,t=r.b;return{cX:zT(Um(e)),bS:a(Lf,Os(e),a(E$,function(o){return o.sM},a(z,n,t)))}},Tf={$:0},TW=re,qT=Tf,MW=6,zW=0,DW=2,qW=1,AW=5,BW=3,VW=4,AT=function(e){switch(e){case"hudConfigurations":return A(0);case"hudInputs":return A(1);case"hudFpsMeter":return A(2);case"hudProfiler":return A(3);case"hudTape":return A(4);case"hudPalette":return A(5);case"hudCommandPalette":return A(6);case"hudDevice":return A(7);default:return D}},BT=function(e){switch(e){case 0:return"hudConfigurations";case 1:return"hudInputs";case 2:return"hudFpsMeter";case 3:return"hudProfiler";case 4:return"hudTape";case 5:return"hudPalette";case 6:return"hudCommandPalette";default:return"hudDevice"}},Js=function(e){return{eH:D,rV:e.rV,rW:e.rW,cO:S,aI:S}},VT=function(e){return{$:1,a:e}},$5=VT,oi=v(function(e,r){var n=r;switch(e.$){case 0:var t=e.a;return B(n,{aI:a(I$,t,n.aI)?a(mr,yu(t),n.aI):a(z,t,n.aI)});case 1:var t=e.a;return B(n,{aI:a(z,t,a(mr,yu(t),n.aI))});case 2:var t=e.a;return B(n,{aI:a(mr,yu(t),n.aI)});default:var t=e.a;return B(n,{cO:a(mr,function(o){var c=o.a;return!oe(c,t)},n.cO)})}}),HT=function(e){return(e?oi($5(7)):re)(Js({rV:AT,rW:BT}))},IT=function(e){var r=e.gD,n=e.r2,t=e.hM,o=e.r1,c=e.r0,i=e.dD;return{dD:{N:a(E$,jT,i),rm:D},et:D,ae:o,h:HT(c),db:kT,nG:t,aJ:LT,ad:DT(n),e:n,cU:qT,ps:!1}},J$={$:1},sn=v(function(e,r){return{$:0,a:e,b:r}}),ci=function(e){return{$:0,a:e}},HW=re,l5=v(function(e,r){return a(T0,e,function(n){return r})}),FT=v(function(e,r){var n=a(me,1,e);return{cD:n,a7:1,aP:0,eT:a(l5,n,r),ow:r,dt:0}}),v5=v(function(e,r){return ci(a(FT,e,r))}),ii=function(e){return{$:1,a:e}},UT=function(e){return ii({aP:0,eT:a(l5,1,e),ow:e})},ET=v(function(e,r){if(e.$)return UT(r);var n=e.a;return a(v5,n,r)}),RT=k(function(e,r,n){return a(sn,J$,a(ET,e,P(r,n)))}),Qs={$:0},GT=v(function(e,r){return a(sn,Qs,a(v5,1,P(e,r)))}),Go=v(function(e,r){return{$:1,a:e,b:r}}),WT=k(function(e,r,n){var t=n.a,o=n.b;return P(e(t),r(o))}),NT=function(e){var r=v(function(n,t){var o=n.a,c=n.b,i=t.a,f=t.b;return P(a(z,o,i),a(z,c,f))});return l(on,r,P(S,S),e)},s5=function(e){switch(e.$){case 0:return P(S,ue);case 1:var r=e.a;return l(WT,jn,xa,NT(a(W,s5,r)));case 2:var n=e.a;return P(S,n);default:var t=e.a;return P($([t]),ue)}},OT=v(function(e,r){return B(r,{a6:e(r.a6)})}),Wo=v(function(e,r){var n=r.a,t=r.b;return P(n,e(t))}),JT=k(function(e,r,n){return a(ie,NaN,Ot(a(e,r,n)))}),QT=v(function(e,r){var n=a(Gi,function(t){return t!=="0"&&t!=="."},sc(r));return X(e&&n?"-":"",r)}),ZT=q8,d5=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ai(n);if(t.$===1)return"01";var o=t.a;return a(Cu,"0",d5(o))}else{var c=$t(r);return c>=48&&c<57?a(Cu,ZT(c+1),n):"0"}},Q$=k(function(e,r,n){return X(n,a(pc,e-an(n),vt(r)))}),p5=b8,b5=function(e){var r=a(hn,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a;return P(n,o)}else{var n=r.a;return P(n,"0")}else return P("0","0")},No=v(function(e,r){var n=r.a,t=r.b;return P(e(n),t)}),XT=function(e){var r=a(hn,"e",O(we(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a,c=a(ie,0,Sf(a(st,"+",o)?a(tn,1,o):o)),i=b5(n),f=i.a,u=i.b,s=X(f,u),d=c<0?a(ie,"0",a(he,function(p){var g=p.a,_=p.b;return g+("."+_)},a(he,No(vt),Ai(X(a(pc,we(c),"0"),s))))):l(Q$,c+1,"0",s);return X(e<0?"-":"",d)}else{var n=r.a;return X(e<0?"-":"",n)}else return""},YT=k(function(e,r,n){if(Fc(n)||As(n))return O(n);var t=n<0,o=b5(XT(we(n))),c=o.a,i=o.b,f=an(c)+r,u=X(a(pc,-f+1,"0"),l(Q$,f,"0",X(c,i))),s=an(u),d=a(me,1,f),p=a(e,t,l(nn,d,s,u)),g=l(nn,0,d,u),_=p?p5(a(ie,"1",a(he,d5,Ai(p5(g))))):g,b=an(_),h=_==="0"?_:r<=0?X(_,a(pc,we(r),"0")):ae(r,an(i))<0?l(nn,0,b-r,_)+("."+l(nn,b-r,b,_)):X(c+".",l(Q$,r,"0",i));return a(QT,t,h)}),fi=YT(v(function(e,r){var n=Ai(r);if(n.$===1)return!1;if(n.a.a==="5")if(n.a.b===""){var t=n.a;return!e}else{var o=n.a;return!0}else{var c=n.a,i=c.a;return(function(f){return f>53&&e||f>=53&&!e})($t(i))}})),KT=JT(fi),eM=k(function(e,r,n){var t=a(Bi,10,we(r-e)),o=t<0?3:t<1?2:t<2?1:0;return a(KT,o,n)}),ui=k(function(e,r,n){return a(W,function(t){return e(t)?r(t):t},n)}),rM=function(e){switch(e.$){case 2:var n=e.a,r=e.b;return a(ui,a(Ne,On,Ka(n)),Wo(function(o){if(o.$===2){var c=o.a,i=c.a,f=c.b;return a(Xm,P(i,f),l(pr,i,f,r))}else return o}));case 1:var n=e.a,r=e.b;return a(ui,a(Ne,On,Ka(n)),Wo(function(o){return o.$===1?Km(r):o}));case 0:var n=e.a,r=e.b;return a(ui,a(Ne,On,Ka(n)),Wo(function(o){if(o.$)return o;var c=o.a,i=c.a,f=c.b;return a(Zm,P(i,f),l(eM,i,f,l(pr,i,f,r)))}));case 3:var n=e.a,r=e.b;return a(ui,a(Ne,On,Ka(n)),Wo(function(o){return o.$===3?Qm(r):o}));case 4:var n=e.a,r=e.b;return a(ui,a(Ne,On,Ka(n)),Wo(function(o){return o.$===4?Rs(r):o}));default:var n=e.a,t=e.b;return a(ui,a(Ne,On,Ka(n)),Wo(function(o){if(o.$===5){var c=o.a;return Ym(a(ie,c,a(he,function(i){return a(N$,i,c)},a(Gs,Ka(t),W$(c)))))}else return o}))}},aM=function(e){return OT(rM(e))},m5=v(function(e,r){return a(W,aM(e),r)}),Zs=k(function(e,r,n){var t=s5(r),o=t.a,c=t.b,i=function(f){return l(ve,m5,f,o)};return{hg:c,cL:e?i(n.cL):n.cL,dc:i(n.dc)}}),nM=function(e){return a(ha,5,e.h)||a(ha,6,e.h)||a(ha,7,e.h)},h5=v(function(e,r){return r.lh>0&&r.jF>0?r:{jF:e.jF,by:0,td:r.td,bJ:0,lh:e.lh}}),tM={qS:!1,jr:!1,hv:0,hw:0,q5:S,r7:!1,sJ:!1,tM:!1,tO:!1,ld:!1,pp:0,pq:0},oM=function(e){var r=e.oX;if(r.$===1)return tM;var n=r.a,t=n.bJ+.5*n.jF-.5*e.uY.jF,o=.5*e.uY.lh-n.by-.5*n.lh,c=e.X.r7?e.ct.c0:e.ct.hL,i=oe(c,A(e.gd)),f=oe(e.ct.c0,A(e.gd));return{qS:f&&e.X.qS,jr:f&&e.X.jr,hv:i?e.X.hv:0,hw:i?e.X.hw:0,q5:f?e.X.q5:S,r7:f&&e.X.r7,sJ:i&&e.X.sJ,tM:f&&e.X.tM,tO:f&&e.X.tO,ld:f&&e.X.ld,pp:e.X.pp+o,pq:e.X.pq+t}},cM={iX:!1,jl:!1,jr:!1,qW:S,by:!1,j$:!1,tv:S,bD:!1,kL:!1,ld:!1},iM={l3:0,l4:0,l9:S,n6:0,n7:D},Mf=function(e){var r=_r(a(mr,function(u){return oe(u.td,e.bw)},e.g.tc)),n=oe(e.aF,A(e.bw)),t=n?e.g.hQ:cM,o=n?e.g.fC:iM,c=a(he,h5(e.g.dp),r),i=(function(){if(c.$)return e.g.dp;var u=c.a;return{jF:u.jF,lh:u.lh}})(),f=oM({gd:e.bw,ct:e.ct,oX:c,X:e.g.to,uY:e.g.dp});return{dD:(function(){var u=e.cd;if(u.$===1)return{pA:!1,rm:D};var s=u.a;return{pA:nM(s),rm:s.dD.rm}})(),cB:e.aK,dH:e.g.dH,hf:e.hf,b4:e.b4,eB:e.g.eB,eD:e.g.eD,hu:e.g.hu,mm:n,rn:e.g.rn,gd:e.bw,hQ:t,nv:e.nv,nG:e.nG,s8:e.s8,kj:n5(e.g.kj),n$:e.n$,gt:e.g.gt,to:f,fm:e.g.fm,dp:i,iC:e.g.iC,ee:e.g.ee,pj:e.pj,fC:o,ps:e.ps}},fM={c0:D,hL:D},uM=v(function(e,r){if(e.$)return Js(r);var n=e.a;return a(a5,n,Js(r))}),$M=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(f){return function(u){return function(s){var d=a(Qe,u,e);if(d.$)return s;var p=d.a,g=a(e5,n,p.bx),_=Mf({hf:0,b4:g,aF:i,cd:D,bw:p.bw,g:t,nv:Be,nG:c,s8:R$,n$:r,aK:Ws,ct:fM,pj:!1,ps:!1}),b=a(p.cM,_,o),h=b.a,y=b.b,C=b.c,j=l(Zs,oe(f,A(p.bw)),y,{cL:s.ca,dc:g}),L={cB:p.cB,fH:!1,hf:0,b4:j.dc,hp:Be,bw:p.bw,nv:Be,aT:h,ii:a(uM,A(Wm(a(ie,"",a(ti,a(ni,t.ta,"panel-layout"),t.th)))),{rV:A,rW:re}),il:p.il,aK:Ws,pj:!1};return B(s,{cE:a(z,a(_o,Go(p.bw),j.hg),s.cE),cI:X(s.cI,C),ca:j.cL,dd:l(wr,u,L,s.dd)})}}}}}}}}}},lM=v(function(e,r){return a(G$,e.bw,r)?r:l(wr,e.bw,e,r)}),vM=vo("registerPanes",Yt(Hr)),sM=function(e){switch(e){case"Red":return A(0);case"Green":return A(1);case"Yellow":return A(2);case"Blue":return A(3);case"Magenta":return A(4);case"Cyan":return A(5);default:return D}},g5=function(e){var r=Ns,n=r.a,t=r.b;return a(Gi,function(o){return oe(o.sM,e)},a(z,n,t))},dM=function(e){switch(e){case"1":return A(!0);case"0":return A(!1);default:return D}},Xs=v(function(e,r){var n=r;return B(n,{g3:e,c1:a(Hi,e,n.c1.kl),dg:a(Hi,e,n.dg.kl)})}),Ys=v(function(e,r){var n=r,t=a(Hi,n.g3,e);return e.r6?B(n,{c1:t,dW:!1}):B(n,{dg:t,dW:!0})}),_5=function(e){return Ys(q0(e))},Ks=function(e){var r=e;return B(r,{dW:!r.dW})},pM=v(function(e,r){return oe(U$(r),e)?r:Ks(r)}),bM=function(e){var r=a(hn,"|",e);if(r.b&&r.b.b&&r.b.b.b&&r.b.b.b.b&&!r.b.b.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,f=c.b,u=f.a;return g5(n)&&g5(o)?l(Es,v(function(s,d){return a(pM,d,a(Xs,s,a(_5,o,a(_5,n,xp))))}),sM(u),dM(i)):D}else return D},mM=v(function(e,r){var n=a(ie,S,r.g.iC),t=a(ie,Be,a(he,Pn,r.g.iC)),o=e.hN(t),c=a(W,function(J){return J.bw},e.dd),i=l(ve,lM,Be,e.dd),f=dT(c),u=(function(){if(f.b&&!f.b.b){var J=f.a;return A(J)}else return D})(),s=a(ie,e.cd.e,a(Ta,bM,a(ti,a(ni,r.g.ta,"theme"),r.g.th))),d=a(ie,e.cd.hM,a(Ta,hT,a(ti,F$("mode"),r.g.th))),p=a(e5,n,e.bx),g=l(ve,$o($M,i,o,n,r.g,s,d,u,_r(f)),{cE:S,cI:S,ca:p,dd:Be},f),_=a(ST,g.ca,r.g),b=l(B$,e,g.cI,o),h=b.a,y=b.b,C={b4:g.ca,g:r.g,dd:g.dd,n$:h,n3:S,n4:S},j=e.cd.gb?l(RT,mT,_,C):a(GT,_,C),L=a(ie,P(xT,!1),a(Ta,sT,a(ti,a(ni,r.g.ta,"device"),r.g.th))),M=L.a,I=L.b,R=IT({dD:e.dD,r0:I,r1:M,hM:d,r2:s,gD:e.cd}),E=a(PT,Wm(a(ie,"",a(ti,F$("hud-panel-layout"),r.g.th))),R),K={hl:NL(e.dd),aF:u,cd:E,af:f,gf:S,ta:r.g.ta,us:j};return P(B(K,{gf:a(Gm,e,K)}),xa(a(z,vM(f),a(z,y,g.cE))))}),e1=function(e){return{$:9,a:e}},hM=function(e){return{$:0,a:e}},gM=v(function(e,r){return{$:4,a:e,b:r}}),_M=v(function(e,r){return{$:5,a:e,b:r}}),yM={$:6},$i=K8,CM=J8,li=function(e){return a(Ze,Pn,CM(e))},Z$=a(Ne,Ya,a(Ne,Vr(function(e){var r=e.a,n=e.b,t=Ot(r);if(t.$)return D;var o=t.a;return A(P(o,n))}),Pn)),PM=Z(function(e,r,n,t){return{rF:t,uV:n,pp:e,pq:r}}),vi=e9,SM=F(vi,PM,a(w,"x",N),a(w,"y",N),a(w,"w",N),a(w,"h",N)),xM=li(SM),r1=function(e){return{$:1,a:e}},IW=3,si={$:2},jM=v(function(e,r){var n=r;return B(n,{F:l(Xt,a(_t,3,e.bw),he(function(t){return r1({eT:e.eT,aS:e.aS,aq:e.aq,E:si})}),n.F)})}),a1=U8,wM=function(e){return x($i,k(function(r,n,t){return jM({eT:n,bw:e,aS:r,aq:t})}),a(Ze,Z$,a(w,"mipImages",li(a1))),a(Ze,Z$,a(w,"frames",li(xM))),a(w,"pixelated",ne))},n1=function(e){return Cf($([a(Ze,A,e),te(D)]))},t1=a(Ze,ie(""),n1(a(w,"error",xe))),X$=function(e){return{$:3,a:e}},y5=function(e){return{$:3,a:e}},o1=function(e){return{$:2,a:e}},c1=function(e){return{$:0,a:e}},kM=v(function(e,r){switch(r.$){case 0:return c1({ep:0,eq:0,fL:D,aS:Be,fe:Be,aq:!1,E:X$(e)});case 1:return r1({eT:Be,aS:Be,aq:!1,E:X$(e)});case 2:return o1({E:X$(e)});default:return y5({E:X$(e)})}}),FW=2,UW=1,i1=function(e){switch(e){case"texture":return A(0);case"sound":return A(1);case"font":return A(2);case"atlas":return A(3);default:return D}},f1=Z(function(e,r,n,t){var o=t,c=i1(e);if(c.$)return o;var i=c.a;return B(o,{F:l(Xt,a(_t,i,r),he(kM(n)),o.F)})}),Y$={$:1},LM=function(e){switch(e){case 0:return c1({ep:0,eq:0,fL:D,aS:Be,fe:Be,aq:!1,E:Y$});case 3:return r1({eT:Be,aS:Be,aq:!1,E:Y$});case 1:return o1({E:Y$});default:return y5({E:Y$})}},u1=k(function(e,r,n){var t=n,o=i1(e);if(o.$)return t;var c=o.a;return B(t,{F:l(wr,a(_t,c,r),LM(c),t.F)})}),TM=v(function(e,r){var n=r;return B(n,{F:l(Xt,a(_t,1,e),he(function(t){return t.$===2?o1({E:si}):t}),n.F)})}),C5=a9,MM=v(function(e,r){var n=r;return B(n,{F:l(Xt,a(_t,0,e.bw),he(function(t){return t.$?t:c1({ep:e.ep,eq:e.eq,fL:e.fL,aS:e.aS,fe:e.fe,aq:e.aq,E:si})}),n.F)})}),zM=function(e){return Xr(C5,Tr(function(r,n,t,o,c,i){return MM({ep:o,eq:t,fL:i,bw:e,aS:r,fe:n,aq:c})}),a(Ze,Z$,a(w,"mipImages",li(a1))),a(Ze,a(Ne,ie(Be),Z$),n1(a(w,"mipUrls",li(xe)))),a(w,"baseWidth",N),a(w,"baseHeight",N),a(w,"pixelated",ne),n1(a(w,"baseline",N)))},di=k(function(e,r,n){var t=n,o=i1(e);if(o.$)return t;var c=o.a;return B(t,{F:a(Vm,a(_t,c,r),t.F)})}),DM=function(e){var r=e.a,n=e.b,t=e.c,o=P(r,n);e:for(;;)switch(o.a){case"texture":switch(o.b){case"loading":return te(a(u1,"texture",t));case"loaded":return zM(t);case"failed":return a(Ze,function(c){return l(f1,"texture",t,c)},t1);case"unloaded":return te(a(di,"texture",t));case"cancelled":return te(a(di,"texture",t));default:break e}case"atlas":switch(o.b){case"loading":return te(a(u1,"atlas",t));case"loaded":return wM(t);case"failed":return a(Ze,function(c){return l(f1,"atlas",t,c)},t1);case"unloaded":return te(a(di,"atlas",t));case"cancelled":return te(a(di,"atlas",t));default:break e}case"sound":switch(o.b){case"loading":return te(a(u1,"sound",t));case"loaded":return te(TM(t));case"failed":return a(Ze,function(c){return l(f1,"sound",t,c)},t1);case"unloaded":return te(a(di,"sound",t));case"cancelled":return te(a(di,"sound",t));default:break e}default:break e}return te(re)},qM=a(q,DM,x($i,k(function(e,r,n){return V(e,r,n)}),a(w,"kind",xe),a(w,"status",xe),a(w,"id",xe))),AM=l(Xn,Tc,a(w,"instanceId",xe),qM),BM=Ql,VM=function(e){var r=a(BM,AM,e);if(r.$)return yM;var n=r.a,t=n.a,o=n.b;return a(_M,t,o)},P5=v(function(e,r){return{$:2,a:e,b:r}}),Oo=_d,$1=function(e){return l(ve,Om,R$,e)},S5=function(e){var r=e;return r.aI},K$=function(e){return $1(S5(e.ii))},EW=0,x5=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),j5=v(function(e,r){return{n5:r,oQ:e}}),HM=Da(a(j5,S,Be)),IM=function(e){return e?"w_":"d_"},FM=function(e){var r=e.a,n=e.b;return P(X(IM(r),n),e)},w5=y9,UM=Tr(function(e,r,n,t,o,c){var i=k(function(d,p,g){e:for(;;){var _=g.a,b=g.b;if(_.b){var h=_.a,y=h.a,C=h.b,j=_.b;if(ae(y,d)<0){var L=d,M=p,I=P(j,l(e,y,C,b));d=L,p=M,g=I;continue e}else return ae(y,d)>0?P(_,l(n,d,p,b)):P(j,x(r,y,C,p,b))}else return P(_,l(n,d,p,b))}}),f=l(go,i,P(Ya(t),c),o),u=f.a,s=f.b;return l(ve,v(function(d,p){var g=d.a,_=d.b;return l(e,g,_,p)}),s,u)}),EM=v(function(e,r){return{md:r,jK:e}}),l1=k9,RM=k(function(e,r,n){var t=n.a,o=n.b,c=(function(){return t?Nn:so})();return a(xf,function(i){return P(r,i)},l(gg,c,o,function(i){return a(l1,e,a(EM,r,i))}))}),GM=v(function(e,r){return l(go,wr,r,e)}),WM=k(function(e,r,n){var t=k(function(p,g,_){var b=_.a,h=_.b,y=_.c;return V(b,h,a(z,l(RM,e,p,g),y))}),o=k(function(p,g,_){var b=_.a,h=_.b,y=_.c;return V(a(z,g,b),h,y)}),c=Z(function(p,g,_,b){var h=b.a,y=b.b,C=b.c;return V(h,l(wr,p,g,y),C)}),i=a(W,FM,r),f=jr(UM,o,c,t,n.n5,Pn(i),V(S,Be,S)),u=f.a,s=f.b,d=f.c;return a(ma,function(p){return Da(a(j5,i,a(GM,s,Pn(p))))},a(ma,function(p){return jf(d)},jf(a(W,w5,u))))}),NM=k(function(e,r,n){var t=r.jK,o=r.md,c=function(f){var u=f.a,s=f.b,d=s.a,p=s.b,g=s.c;return oe(u,t)?a(_g,g,o):D},i=a(Vr,c,n.oQ);return a(ma,function(f){return Da(n)},jf(a(W,A$(e),i)))}),OM=v(function(e,r){var n=r.a,t=r.b,o=r.c;return l(x5,n,t,a(Ze,e,o))});Kr["Browser.Events"]=t0(HM,WM,NM,0,OM);var JM=ki("Browser.Events"),v1=k(function(e,r,n){return JM(l(x5,e,r,n))}),el=a(v1,0,"keydown"),s1=function(e){return{$:0,a:e}},kt=V8,k5=P8,QM=function(e){var r=k5(e);return r==="INPUT"||r==="TEXTAREA"||r==="SELECT"},ZM=v(function(e,r){if(r.$)return!1;var n=r.a;return oe(hp(e),vt(Us(n)))}),XM=v(function(e,r){return a(he,function(n){return n.bw},_r(a(mr,function(n){return a(ZM,e,n.t2)},r)))}),YM=function(e){return a(q,function(r){if(QM(r.oU))return kt("ignored: text input focused");if(r.jl||r.j$){var n=a(XM,r.jK,e);if(n.$)return kt("ignored: no matching entry shortcut");var t=n.a;return te(s1(t))}else return kt("ignored: no Ctrl/Cmd modifier")},F(vi,Z(function(r,n,t,o){return{jl:n,jK:r,j$:t,oU:o}}),a(w,"key",xe),a(w,"ctrlKey",ne),a(w,"metaKey",ne),a(zc,$(["target","tagName"]),xe)))},L5=v(function(e,r){return el(YM(e))}),RW=re,KM=function(e){return a(W,function(r){return{bw:r.bw,t2:a(he,re,r.t2)}},e)},rl=function(e){return e.ps},ez=ke(function(e,r,n,t,o){var c=a(Qe,o,n.dd);if(c.$)return D;var i=c.a,f=Mf({hf:i.hf,b4:i.b4,aF:r.aF,cd:A(r.cd),bw:i.bw,g:n.g,nv:i.nv,nG:ai(r.cd),s8:K$(i),n$:n.n$,aK:i.aK,ct:t,pj:i.pj,ps:rl(r.cd)}),u=l(e.g6.gu,f,Hn(r.cd),i.aT),s=a(Oo,P5(o),a(L5,KM(u),i.ii)),d=a(Oo,Go(o),l(e.g6.cR,f,Hn(r.cd),i.aT));return A(Ri($([d,s])))}),rz=c0("assetsResponse",a1),az=rz(re),T5=function(e){var r=.5*e.uY.jF-e.X.pq,n=e.X.pp+.5*e.uY.lh,t=function(i){var f=a(h5,e.uY,i);return ae(n,f.by)>-1&&ae(n,f.by+f.lh)<1&&ae(r,f.bJ)>-1&&ae(r,f.bJ+f.jF)<1},o=a(he,function(i){return i.td},_r(a(mr,t,e.km))),c=_r(a(mr,function(i){return a(Jm,i,e.kE)},e.X.q5));return{c0:c,hL:o}},d1=function(e){return T5({km:e.g.tc,kE:$1(gu(e.dd)),X:e.g.to,uY:e.g.dp})},M5=function(e){return{$:6,a:e}},z5=function(e){return{$:3,a:e}},D5=function(e){return{$:2,a:e}},q5={$:11},nz=a(q,function(e){return(e.jK==="p"||e.jK==="P")&&e.kL&&(e.jl||e.j$)?te(q5):kt("not Cmd+Shift+P")},F(vi,Z(function(e,r,n,t){return{jl:n,jK:e,j$:t,kL:r}}),a(w,"key",xe),a(w,"shiftKey",ne),a(w,"ctrlKey",ne),a(w,"metaKey",ne))),tz=function(e){var r=e;return Oe(r.$9)},zf=v(function(e,r){return e.hJ&&!tz(r)}),oz={$:4},cz=a(q,function(e){return(e.jK==="i"||e.jK==="I")&&(e.jl||e.j$)?te(oz):kt("not Ctrl+I")},x($i,k(function(e,r,n){return{jl:r,jK:e,j$:n}}),a(w,"key",xe),a(w,"ctrlKey",ne),a(w,"metaKey",ne))),iz={$:10},fz=a(q,function(e){return(e.jK==="m"||e.jK==="M")&&(e.jl||e.j$)?te(iz):kt("not Ctrl+M")},x($i,k(function(e,r,n){return{jl:r,jK:e,j$:n}}),a(w,"key",xe),a(w,"ctrlKey",ne),a(w,"metaKey",ne))),A5=function(e){return{$:1,a:e}},B5="play-device-picker",p1={fR:B5,v:A5},uz=function(e){return{$:0,a:e}},Df=function(e){return{fR:e.fR,fa:320,ky:"Search devices\u2026",v:a(tr,e.v,uz),lh:{sA:320,uU:26}}},V5=v(function(e,r){return Kn}),$z=v(function(e,r){var n=r;return a(V5,Df(e),n.bS)}),lz=function(e){return{$:7,a:e}},vz={$:8},sz=a(v1,0,"mousemove"),dz=a(v1,0,"mouseup"),pz=function(e){if(e.$===3){var r=e.a,n=r.bg;if(n.a.$===1){var t=n.a;return Ri($([sz(l(Xn,v(function(o,c){return lz({fP:o,qk:c})}),a(w,"clientX",N),a(w,"clientY",N))),dz(te(vz))]))}else return Kn}else return Kn},bz=function(e){return{$:0,a:e}},pi=function(e){var r=e.v,n=e.fR;return{fR:n,fa:320,ky:"Search palettes\u2026",v:a(tr,r,bz),lh:{sA:320,uU:26}}},mz=v(function(e,r){var n=r;return a(V5,pi(e),n.bS)}),H5=function(e){return{$:4,a:e}},I5=function(e){return{$:1,a:e}},al=k(function(e,r,n){return{j9:n,oo:r,oQ:e}}),b1=Da(l(al,S,D,0)),hz=Cg(0),F5=yg(0),U5=e0,gz=k(function(e,r,n){var t=n.oo,o=n.j9,c=P(t,r);if(c.a.$===1)if(c.b.b){var f=c.a;return a(ma,function(s){return a(ma,function(d){return Da(l(al,r,A(s),d))},hz)},U5(a(ma,l1(e),F5)))}else{var i=c.a;return b1}else{if(c.b.b)return Da(l(al,r,t,o));var u=c.a.a;return a(ma,function(s){return b1},w5(u))}}),GW=re,_z=re,yz=k(function(e,r,n){var t=n.oQ,o=n.j9,c=function(i){if(i.$){var f=i.a;return a(A$,e,f(r-o))}else{var f=i.a;return a(A$,e,f(_z(r)))}};return a(ma,function(i){return a(ma,function(f){return Da(l(al,t,A(i),r))},jf(a(W,c,t)))},U5(a(ma,l1(e),F5)))}),Cz=function(e){return{$:0,a:e}},Pz=v(function(e,r){if(r.$){var n=r.a;return I5(a(tr,e,n))}else{var n=r.a;return Cz(a(tr,e,n))}});Kr["Browser.AnimationManager"]=t0(b1,gz,yz,0,Pz);var Sz=ki("Browser.AnimationManager"),xz=function(e){return Sz(I5(e))},E5=xz,jz=function(e){var r=e;if(r.$===1){var n=r.a,t=n.S;switch(t.$){case 0:return E5(H5);case 2:return E5(H5);case 1:return Kn;default:return Kn}}else return Kn},R5=function(e){return{$:0,a:e}},G5="play-theme-picker",qf={fR:G5,v:R5},wz=v(function(e,r){var n=e.gD,t=e.v,o=a(Oo,D5,jz(r.cU)),c=n.cb?A(a(mz,qf,r.ad)):D,i=n.eU?A(a(Oo,z5,pz(r.aJ))):D,f=a(Oo,M5,a(L5,S,r.h)),u=n.dO?A(a($z,p1,r.ae)):D,s=n.dP?A(el(fz)):D,d=n.cb?A(el(cz)):D,p=a(zf,n,r.dD.N)?A(el(nz)):D;return a(Oo,t,Ri(a(Vr,re,$([A(o),d,s,c,u,i,A(f),p]))))}),kz=c0("tick",a(q,function(e){return a(q,function(r){return a(q,function(n){return a(q,function(t){return a(q,function(o){return a(q,function(c){return a(q,function(i){return a(q,function(f){return a(q,function(u){return a(q,function(s){return a(q,function(d){return a(q,function(p){return a(q,function(g){return a(q,function(_){return a(q,function(b){return a(q,function(h){return a(q,function(y){return te({dH:y,eB:h,eD:b,hu:_,rn:g,hQ:p,kj:d,ta:s,gt:u,tc:f,th:i,to:c,fm:o,dp:t,iC:n,ee:r,fC:e})},a(w,"boundingClientRects",br(a(q,function(y){return a(q,function(C){return a(q,function(j){return te({q6:j,rv:C,tW:y})},a(w,"elements",br(a(q,function(j){return a(q,function(L){return te({pX:L,bw:j})},a(w,"boundingClientRect",a(q,function(L){return a(q,function(M){return a(q,function(I){return a(q,function(R){return te({bq:R,by:I,bD:M,bJ:L})},a(w,"bottom",N))},a(w,"left",N))},a(w,"right",N))},a(w,"top",N))))},a(w,"id",xe)))))},a(w,"frameId",xe))},a(w,"scroll",a(q,function(y){return a(q,function(C){return a(q,function(j){return a(q,function(L){return a(q,function(M){return a(q,function(I){return te({lX:I,lY:M,by:L,bJ:j,ph:C,pi:y})},a(w,"contentHeight",N))},a(w,"contentWidth",N))},a(w,"left",N))},a(w,"top",N))},a(w,"viewportHeight",N))},a(w,"viewportWidth",N)))))))},a(w,"darkModeIsOn",ne))},a(w,"devicePixelRatio",N))},a(w,"dt",N))},a(w,"focusedElementIsTextInput",ne))},a(w,"keyboard",a(q,function(p){return a(q,function(g){return a(q,function(_){return a(q,function(b){return a(q,function(h){return a(q,function(y){return a(q,function(C){return a(q,function(j){return a(q,function(L){return a(q,function(M){return te({iX:M,jl:L,jr:j,qW:C,by:y,j$:h,tv:b,bD:_,kL:g,ld:p})},a(w,"alt",ne))},a(w,"ctrl",ne))},a(w,"down",ne))},a(w,"downs",br(xe)))},a(w,"left",ne))},a(w,"meta",ne))},a(w,"pressedKeys",br(xe)))},a(w,"right",ne))},a(w,"shift",ne))},a(w,"up",ne))))},a(w,"operatingSystem",xe))},a(w,"pageId",xe))},a(w,"pageScroll",a(q,function(u){return a(q,function(s){return a(q,function(d){return a(q,function(p){return a(q,function(g){return a(q,function(_){return te({lX:_,lY:g,by:p,bJ:d,ph:s,pi:u})},a(w,"contentHeight",N))},a(w,"contentWidth",N))},a(w,"left",N))},a(w,"top",N))},a(w,"viewportHeight",N))},a(w,"viewportWidth",N))))},a(w,"paneBoundingBoxes",br(a(q,function(f){return a(q,function(u){return a(q,function(s){return a(q,function(d){return a(q,function(p){return te({jF:p,by:d,td:s,bJ:u,lh:f})},a(w,"height",N))},a(w,"left",N))},a(w,"paneId",xe))},a(w,"top",N))},a(w,"width",N)))))},a(w,"persisted",br(a(q,function(i){return a(q,function(f){return te(P(i,f))},a(Qn,1,xe))},a(Qn,0,xe)))))},a(w,"pointer",a(q,function(c){return a(q,function(i){return a(q,function(f){return a(q,function(u){return a(q,function(s){return a(q,function(d){return a(q,function(p){return a(q,function(g){return a(q,function(_){return a(q,function(b){return a(q,function(h){return a(q,function(y){return te({qS:y,jr:h,hv:b,hw:_,q5:g,r7:p,sJ:d,tM:s,tO:u,ld:f,pp:i,pq:c})},a(w,"doubleClick",ne))},a(w,"down",ne))},a(w,"dx",N))},a(w,"dy",N))},a(w,"elementIdsForLastDown",br(xe)))},a(w,"isDown",ne))},a(w,"move",ne))},a(w,"rightDown",ne))},a(w,"rightUp",ne))},a(w,"up",ne))},a(w,"x",N))},a(w,"y",N))))},a(w,"rawPointer",a(q,function(o){return a(q,function(c){return a(q,function(i){return a(q,function(f){return a(q,function(u){return a(q,function(s){return a(q,function(d){return a(q,function(p){return a(q,function(g){return a(q,function(_){return a(q,function(b){return a(q,function(h){return te({qS:h,jr:b,hv:_,hw:g,q5:p,r7:d,sJ:s,tM:u,tO:f,ld:i,pp:c,pq:o})},a(w,"doubleClick",ne))},a(w,"down",ne))},a(w,"dx",N))},a(w,"dy",N))},a(w,"elementIdsForLastDown",br(xe)))},a(w,"isDown",ne))},a(w,"move",ne))},a(w,"rightDown",ne))},a(w,"rightUp",ne))},a(w,"up",ne))},a(w,"x",N))},a(w,"y",N))))},a(w,"screen",a(q,function(t){return a(q,function(o){return te({jF:o,lh:t})},a(w,"height",N))},a(w,"width",N))))},a(w,"searchParamsFromUrl",Cf($([ku(D),a(Ze,A,br(a(q,function(n){return a(q,function(t){return te(P(n,t))},a(Qn,1,xe))},a(Qn,0,xe))))]))))},a(w,"touches",br(a(q,function(r){return a(q,function(n){return a(q,function(t){return te({bw:t,pp:n,pq:r})},a(w,"id",Fi))},a(w,"x",N))},a(w,"y",N)))))},a(w,"wheel",a(q,function(e){return a(q,function(r){return a(q,function(n){return a(q,function(t){return a(q,function(o){return te({l3:o,l4:t,l9:n,n6:r,n7:e})},a(w,"deltaX",N))},a(w,"deltaY",N))},a(w,"elementIdsForLastWheel",br(xe)))},a(w,"pinchDeltaForChrome",N))},a(w,"pinchScaleForSafari",Cf($([ku(D),a(Ze,A,N)]))))))),Lz=c0("visibilityChanged",a(q,function(e){return a(q,function(r){return te({gd:r,pj:e})},a(w,"instanceId",xe))},a(w,"visible",ne))),Tz=v(function(e,r){var n=a(wz,{gD:e.cd,v:e1},r.cd),t=ri(r.us),o=d1(t),c=a(Vr,x(ez,e,r,t,o),r.af),i=e.cR(t.n$);return Ri(X($([kz(hM),Lz(function(f){return a(gM,f.gd,f.pj)}),a(Oo,VM,az),i,n]),c))}),W5=Z(function(e,r,n,t){var o=qn&r>>>e,c=a(Zt,o,t);if(c.$){var u=c.a,s=l(Fo,qn&r,n,u);return l(Fo,o,vc(s),t)}else{var i=c.a,f=x(W5,e-ra,r,n,i);return l(Fo,o,po(f),t)}}),nl=k(function(e,r,n){var t=n.a,o=n.b,c=n.c,i=n.d;return e<0||ae(e,t)>-1?n:ae(e,Rc(t))>-1?x(yn,t,o,c,l(Fo,qn&e,r,i)):x(yn,t,o,x(W5,o,e,r,c),i)}),Mz=v(function(e,r){var n=r;return B(n,{eT:l(nl,a(Sa,n.cD,n.dt+n.aP),e,n.eT)})}),N5=v(function(e,r){if(r.$){var t=r.a;return ii(B(t,{eT:l(nl,t.aP,e,t.eT)}))}else{var n=r.a;return ci(a(Mz,e,n))}}),Kt=v(function(e,r){var n=r.a,t=r.b,o=ei(t),c=o.a,i=o.b,f=e(i),u=f.a,s=f.b;return P(a(sn,n,a(N5,P(c,u),t)),s)}),zz=k(function(e,r,n){var t=function(o){var c=l(B$,e,r,o.n$),i=c.a,f=c.b;return P(B(o,{n$:i}),f)};return a(No,function(o){return B(n,{us:o})},a(Kt,t,n.us))}),Dz=$9,qz=vo("pushUrlReset",function(e){return Dz}),Az=k(function(e,r,n){if(r.$===1)return P(n,ue);var t=r.a,o=function(f){var u=(function(){var s=n.af;if(s.b){var d=s.a;return l(Xt,d,he(function(p){return B(p,{b4:e.bx})}),f.dd)}else return f.dd})();return P(B(f,{b4:e.bx,dd:u}),ue)},c=a(Kt,o,n.us),i=c.a;return P(B(n,{us:i}),qz(0))}),Bz=k(function(e,r,n){var t=function(o){var c=a(Qe,e,o.dd);if(c.$)return P(o,ue);var i=c.a,f=a(oi,r,i.ii),u=l(wr,e,B(i,{ii:f}),o.dd);return P(B(o,{dd:u}),ue)};return a(No,function(o){return B(n,{us:o})},a(Kt,t,n.us))}),Vz=v(function(e,r){return e?{jF:r.U.lh,lh:r.U.jF}:r.U}),Hz=function(e){var r=e;return a(Vz,r.d1,r.c2)},Iz=function(e){return Hz(e.ae)},m1=v(function(e,r){return Hm(e)&&r===1?A(Iz(e)):D}),O5=24,h1=v(function(e,r){return l(pr,.1,1,a(We,(e.lh-O5)/r.lh,(e.jF-O5)/r.jF))}),J5=k(function(e,r,n){var t=.5*e.jF-n.pq,o=n.pp+.5*e.lh,c=a(h1,e,r),i=.5*(e.lh-r.lh*c),f=.5*(e.jF-r.jF*c);return B(n,{pp:(o-i)/c-.5*r.lh,pq:.5*r.jF-(t-f)/c})}),Fz=k(function(e,r,n){var t=l(J5,e,r,n),o=a(h1,e,r);return B(t,{hv:n.hv/o,hw:n.hw/o})}),tl=v(function(e,r){if(e.$)return r;var n=e.a;return B(r,{to:l(Fz,r.dp,n,r.to),dp:n,ee:a(W,a(J5,r.dp,n),r.ee)})}),Uz=Z(function(e,r,n,t){var o=function(c){var i=a(Qe,r,c.dd);if(i.$)return P(c,ue);var f=i.a,u=d1(c),s=a(m1,t.cd,$r(t.af)),d=Mf({hf:f.hf,b4:f.b4,aF:t.aF,cd:A(t.cd),bw:f.bw,g:c.g,nv:f.nv,nG:ai(t.cd),s8:K$(f),n$:c.n$,aK:f.aK,ct:u,pj:f.pj,ps:rl(t.cd)}),p=x(e.g6.dk,a(tl,s,d),Hn(t.cd),n,f.aT),g=p.a,_=p.b,b=p.c,h=l(Zs,oe(_r(t.af),A(r)),_,{cL:c.b4,dc:f.b4}),y=l(B$,e,b,c.n$),C=y.a,j=y.b,L=l(wr,r,B(f,{b4:h.dc,aT:g}),c.dd);return P(B(c,{b4:h.cL,dd:L,n$:C}),xa($([a(_o,Go(r),h.hg),j])))};return a(No,function(c){return B(t,{us:c})},a(Kt,o,t.us))}),Ez=k(function(e,r,n){return{$:7,a:e,b:r,c:n}}),Rz=m9,Lt=v(function(e,r){return qm(a(Rz,a(tr,a(tr,Da,e),Ia),a(ma,a(tr,a(tr,Da,e),ea),r)))}),WW=re,Q5=9729,NW=re,ol=10497,Gz={hE:!0,mA:ol,h0:Q5,h4:Q5,pf:ol},cl=33071,Wz=(function(){var e=Gz;return B(e,{mA:cl,pf:cl})})(),Nz={$:0},Oz=v(function(e,r){return{$:1,a:e,b:r}}),Jz=v(function(e,r){var n=e.h0,t=e.h4,o=e.mA,c=e.pf,i=e.hE,f=Z(function(u,s,d,p){var g=u,_=s,b=d,h=p;return jr(jg,g,_,b,h,i,r)});return x(f,n,t,o,c)}),Qz=v(function(e,r){return a(xf,function(n){return nm({P:n,s9:e,fA:r})},a(Jz,e,r))}),Z5=9728,Zz={hE:!0,mA:ol,h0:Z5,h4:Z5,pf:ol},Xz=(function(){var e=Zz;return B(e,{mA:cl,pf:cl})})(),Yz=v(function(e,r){var n=r.F,t=a(Qe,a(_t,0,e),n);if(!t.$&&!t.a.$){var o=t.a.a.E,c=t.a.a.aq;return oe(o,si)?A(c):D}else return D}),il=function(e){if(e.b){var r=e.a,n=e.b;return A(l(ve,me,r,n))}else return D},Kz=function(e){if(e.b){var r=e.a,n=e.b;return A(l(ve,We,r,n))}else return D},eD=v(function(e,r){var n=Kz(a(mr,function(o){return ae(o,e)>-1},r));if(n.$)return a(ie,1,il(r));var t=n.a;return t}),rD=k(function(e,r,n){var t=n.F,o=a(Qe,a(_t,0,e),t);if(!o.$&&!o.a.$){var c=o.a.a.E,i=o.a.a.fe;if(c.$===2){var f=a(eD,r,gu(i));return a(Qe,f,i)}else return D}else return D}),aD=v(function(e,r){return l(rD,e,1,r)}),nD=k(function(e,r,n){return xa(a(Vr,function(t){var o=P(a(aD,t,n),a(Yz,t,n));if(!o.a.$&&!o.b.$){var c=o.a.a,i=o.b.a,f=i?Xz:Wz;return A(a(Lt,a(Ez,e,t),a(Qz,f,c)))}else return D},r))}),X5=v(function(e,r){var n=o2(e)+":";return a(st,n,r)?a(tn,an(n),r):r}),tD=v(function(e,r){var n=e,t=r;return a(Vr,function(o){var c=o.a,i=o.b;if(i.$)return D;var f=i.a.E;if(oe(f,si)){var u=a(Qe,c,n.F);if(!u.$&&!u.a.$){var s=u.a.a;return oe(s.E,si)?D:A(a(X5,0,c))}else return A(a(X5,0,c))}else return D},Ya(t.F))}),oD=k(function(e,r,n){var t=function(o){var c=a(Qe,e,o.dd);if(c.$)return P(o,ue);var i=c.a,f=r(i.aK),u=a(tD,i.aK,f),s=B(i,{aK:f});return P(B(o,{dd:l(wr,e,s,o.dd)}),l(nD,e,u,f))};return a(No,function(o){return B(n,{us:o})},a(Kt,t,n.us))}),cD=v(function(e,r){var n=P(e,r);if(n.a.$===5&&n.b.$===5){var t=n.a.a,o=n.b.a;return oe(Ro(t),Ro(o))}else return oe(e,r)}),iD=function(e){switch(e.$){case 0:var r=e.b;return O(r);case 2:var r=e.b;return ar(r);case 4:var r=e.a;return r?"true":"false";case 1:var r=e.a;return r;case 3:var n=e.a.aQ,t=e.a.aZ,o=e.a.C,c=e.a.aO;return a(Ar,",",a(W,O,$([n,t,o,c])));default:var i=e.a;return Ro(i)}},Y5=v(function(e,r){var n=Pn(a(fn,function(t){return t.a6},e));return a(Vr,function(t){var o=t.a,c=t.b,i=a(Qe,o,n);if(i.$)return D;var f=i.a;return a(cD,f,c)?D:A(P(o,iD(c)))},a(fn,function(t){return t.a6},r))}),fD=k(function(e,r,n){return X(a(Y5,e.bx,r),n)}),uD=vo("writeUrlParams",Yt(function(e){var r=e.a,n=e.b;return a(Yt,re,$([Hr(r),Hr(n)]))})),$D=v(function(e,r){var n=ri(r.us),t=e.iR(n.n$);return uD(l(fD,e,n.b4,t))}),lD=k(function(e,r,n){var t=function(f){var u=a(m5,r,f.b4),s=(function(){var d=n.af;if(d.b){var p=d.a;return l(Xt,p,he(function(g){return B(g,{b4:u})}),f.dd)}else return f.dd})();return P(B(f,{b4:u,dd:s}),ue)},o=a(Kt,t,n.us),c=o.a,i=B(n,{us:c});return P(i,a($D,e,i))}),vD=k(function(e,r,n){if(r.$){var o=r.a,c=a(T$,"Play.Runtime.MaterialLoaded failed",P(e,o));return n}else{var t=r.a;return B(n,{nv:l(wr,e,t,n.nv)})}}),sD=Z(function(e,r,n,t){var o=function(c){return P(B(c,{dd:l(Xt,e,he(a(vD,r,n)),c.dd)}),ue)};return a(No,function(c){return B(t,{us:c})},a(Kt,o,t.us))}),dD=Zl,fl=function(e){return l(ve,v(function(r,n){var t=r.a,o=r.b;return l(f9,t,o,n)}),i9(0),e)},pD=vo("assetsLoadRequest",Yt(function(e){return fl($([P("id",Hr(e.bw)),P("instanceId",Hr(e.gd)),P("kind",Hr(e.bb)),P("mips",Yt(dD)(e.d_)),P("url",Hr(e.fA))]))})),g1=function(e){var r=e;return r},bD=v(function(e,r){var n=g1(r);return{bw:n.bw,gd:e,bb:n.bb,d_:n.d_,fA:n.fA}}),K5=v(function(e,r){return pD(a(W,bD(e),r))}),mD=vo("setInstanceMuted",function(e){return fl($([P("instanceId",Hr(e.gd)),P("muted",Vs(e.sL))]))}),hD=k(function(e,r,n){var t=function(o){var c=a(Qe,e,o.dd);if(c.$)return P(o,ue);var i=c.a,f=r&&!i.fH,u=B(i,{fH:i.fH||r,pj:r}),s=i.il?mD({gd:e,sL:!r}):ue,d=f?a(K5,e,i.cB):ue;return P(B(o,{dd:l(wr,e,u,o.dd)}),xa($([d,s])))};return a(No,function(o){return B(n,{us:o})},a(Kt,t,n.us))}),gD=function(e){return e.bh+e.bi},ul=function(e){var r=e;return r},_D=a(tr,gD,ul),e4=function(e){var r=e.bh,n=e.bi,t=e.bv,o=e.bC,c=(r+n)/2|0,i=r+n-c,f=4;if(r+n<2)return e;if(ae(r,f*n+1)>0){var u=X(o,je(a(rt,c,t))),s=a(Rt,c,t);return{bv:s,bC:u,bh:c,bi:i}}else if(ae(n,f*r+1)>0){var u=a(Rt,c,o),s=X(t,je(a(rt,c,o)));return{bv:s,bC:u,bh:c,bi:i}}else return e},yD=function(e){var r=e.bv,n=e.bC,t=P(r,n);if(t.a.b){var i=t.a,f=i.a,u=i.b;return P(A(f),e4({bv:u,bC:e.bC,bh:e.bh-1,bi:e.bi}))}else if(t.b.b){if(t.b.b.b)return P(D,O$);var o=t.b,c=o.a;return P(A(c),O$)}else return P(D,O$)},r4=a(tr,a(tr,Wo(re),yD),ul),a4=v(function(e,r){return ae(_D(r),e)>0?a(a4,e,r4(r).b):r}),n4=v(function(e,r){var n=r4(r);if(n.a.$){var c=n.a;return r}else{var t=n.a.a,o=n.b;return ae(t.k7,e)<0?a(n4,e,o):r}}),t4=60,CD=v(function(e,r){var n=r;return e(n)}),PD=v(function(e,r){var n=r;return a(CD,e4,{bv:n.bv,bC:a(z,e,n.bC),bh:n.bh,bi:n.bi+1})}),SD=1,xD=v(function(e,r){var n=r,t=n.j8+e,o=t-SD;return{j8:t,gB:a(a4,t4,a(PD,{hu:e,k7:t},a(n4,o,n.gB)))}}),jD=v(function(e,r){return B(r,{db:a(xD,e.hu,r.db)})}),o4=function(e){var r=e.b;return ei(r).a},c4=v(function(e,r){var n=o4(e.us);return B(n,{b4:r.b4,nG:ai(e.cd)})}),$l={$:2},wD=function(e){var r=e.a;return oe(r,$l)},i4=function(e){var r=e.a;return r.$===3},kD=function(e){return wD(e)||i4(e)},f4={$:12},LD=v(function(e,r){return e}),u4="play-scrollport",Jo=xg,TD=function(e){var r=k(function(o,c,i){return a(Lt,LD(f4),l(Jo,o,c,i))}),n=l(r,u4,e.gt.by,e.gt.bJ),t=a(W,function(o){return l(r,"measure-frame--"+o.rv,o.tW.by,o.tW.bJ)},e.dH);return xa(a(z,n,t))},MD={$:4},_1=v(function(e,r){return{$:1,a:e,b:r}}),OW=0,$4={$:0},ll={$:1},Qo=function(e){return{$:3,a:e}},JW=1,bi=v(function(e,r){return{$:0,a:e,b:r}}),zD={$:2},DD=v(function(e,r){return{by:e,bD:r}}),vl=v(function(e,r){var n=r.az,t=function(f){return a(ie,0,a(he,function(u){return u.dw},a(Ma,f,n)))},o=v(function(f,u){e:for(;;){if(ae(f,u)>-1)return f;if(ae(e,t((f+u)/2|0))<1){var s=f,d=(f+u)/2|0;f=s,u=d;continue e}else{var s=((f+u)/2|0)+1,d=u;f=s,u=d;continue e}}}),c=za(n),i=a(o,0,c);return i?oe(i,c)?c-1:ae(e-t(i-1),t(i)-e)<1?i-1:i:0}),Af=v(function(e,r){var n=e.a,t=e.b,o=r.gy,c=r.az,i=n?a(ie,o,a(he,function(u){return u.dw},a(Ma,n-1,c))):o,f=a(ie,o,a(he,function(u){return u.dw},a(Ma,t,c)));return P(i,f)}),dn={nC:100,os:24,iw:100,iJ:400,iK:900,oY:4},ta=v(function(e,r){return r/dn.iK*(e.bD-e.by)}),sl=k(function(e,r,n){var t=r.a,o=r.b,c=function(M){return a(ta,e,M.ho-M.kz)},i=a(Af,P(1,za(n.az)-2),n),f=i.a,u=i.b,s=a(Af,P(o.cP+1,o.cH-1),n),d=s.a,p=s.b,g=a(Af,P(o.cP,o.cH),n),_=g.a,b=g.b;if(t.$)if(t.a){var j=t.a,y=t.b,L=l(pr,d,u,b+c(y));return P(P(_,o.cP),P(L,a(vl,L,n)))}else{var h=t.a,y=t.b,C=l(pr,f,p,_+c(y));return P(P(C,a(vl,C,n)+1),P(b,o.cH))}else return P(P(_,o.cP),P(b,o.cH))}),qD=Z(function(e,r,n,t){var o=e.ot,c=e.ou,i=e.nI,f=t.bD-t.by,u=n-r,s=a(We,u,a(me,dn.nC,f*a(Mn,1.002,c))),d=o*.001*s,p=t.by+i*f-i*s,g=p+s,_=g+d,b=p+d,h=ae(b,r)<0?P(r,r+s):ae(_,n)>0?P(n-s,n):P(b,_),y=h.a,C=h.b;return{by:y,bD:C}}),l4=v(function(e,r){var n=P(e,r);e:for(;;)switch(n.a.$){case 2:var t=n.a;return ll;case 3:var o=n.a;return zD;case 4:var c=n.a;return o5;case 0:var i=n.a.a,f=P(0,za(i.az)-1),u=f.a,s=f.b,d=a(Af,P(u,s),i),p=d.a,g=d.b;return Qo({cc:D,d5:i,bg:a(bi,$4,{cH:s-1,cP:1}),a3:a(DD,p,g)});case 1:if(n.b.$===3){var _=n.a.a,b=n.b.a,h=P(0,za(b.d5.az)-1),u=h.a,s=h.b,y=a(Af,P(u,s),b.d5),C=y.a,j=y.b,L=x(qD,_,C,j,b.a3);return Qo(B(b,{a3:L}))}else break e;case 5:if(n.b.$===3){var M=n.a.a.fP,b=n.b.a,I=b.bg,R=I.b;return Qo(B(b,{bg:a(bi,a(_1,0,{ho:M,kz:M}),R)}))}else break e;case 6:if(n.b.$===3){var M=n.a.a.fP,b=n.b.a,E=b.bg,R=E.b;return Qo(B(b,{bg:a(bi,a(_1,1,{ho:M,kz:M}),R)}))}else break e;case 7:if(n.b.$===3){var M=n.a.a.fP,b=n.b.a,K=b.bg;if(K.a.$===1){var J=K.a,le=J.a,Se=J.b,R=K.b;return Qo(B(b,{bg:a(bi,a(_1,le,B(Se,{ho:M})),R)}))}else return r}else break e;case 8:if(n.b.$===3){var Te=n.a,b=n.b.a,qe=b.bg;if(qe.a.$===1){var ce=qe.a,Ae=l(sl,b.a3,b.bg,b.d5),Fe=Ae.a,Je=Fe.b,Re=Ae.b,xr=Re.b;return Qo(B(b,{bg:a(bi,$4,{cH:xr,cP:Je})}))}else return r}else break e;default:if(n.b.$===3){var Ge=n.a.a,b=n.b.a;return Qo(B(b,{cc:Ge}))}else break e}return r}),AD=l4(MD),y1=function(e){return e.$===3},BD=v(function(e,r){if(e.$)return r;var n=e.a;return B(r,{aI:a(z,n,a(mr,yu(n),r.aI))})}),v4=k(function(e,r,n){return a(ie,e,a(he,H$,_r(a(mr,function(t){var o=t.a;return oe(o,r)},n.cO))))}),s4=function(e){return{pp:e.fm.pp+.5*e.dp.lh,pq:-e.fm.pq+.5*e.dp.jF}},d4=v(function(e,r){var n=s4(e);return{pp:r.hk.pp+(n.pp-r.hH.pp),pq:r.hk.pq+(n.pq-r.hH.pq)}}),p4=v(function(e,r){var n="-titlebar",t="draggable-panel-",o="-no-drag",c=function(i){e:for(;;)if(i.b){var f=i.a,u=i.b;if(a(st,t,f)&&a(km,o,f)){if(e.i7)return D;var s=u;i=s;continue e}else{if(a(st,t,f)&&a(nv,n,f))return A(a(r5,an(n),a(tn,an(t),f)));var s=u;i=s;continue e}}else return D};return c(r)}),VD=function(e){return a(p4,{i7:!0},e)},HD=function(e){return a(p4,{i7:!1},e)},ID=k(function(e,r,n){return a(z,P(e,r),a(mr,function(t){var o=t.a;return!oe(o,e)},n))}),b4={pp:0,pq:0},m4=k(function(e,r,n){var t=n,o=t.eH;if(o.$===1)if(e.fm.jr){var c=function(p){return a(Ta,function(g){return r(g)?A(g):D},a(Ta,t.rV,p(e.fm.q5)))},i=a(BD,c(HD),t),f=c(VD);if(f.$)return i;var u=f.a;return B(i,{eH:A({hk:l(v4,b4,u,i),hH:s4(e),bw:u})})}else return n;else{var s=o.a;if(e.fm.r7)return n;var d=a(d4,e,s);return B(t,{eH:D,cO:l(ID,s.bw,d,t.cO)})}}),FD=v(function(e,r){var n=a(Ta,function(c){var i=c.kI-e.hu;return i<=0?D:A(B(c,{kI:i}))},r.et),t=l(m4,e,function(c){return!0},r.h),o=y1(r.aJ)&&!a(ha,3,t)?AD(r.aJ):r.aJ;return B(r,{et:n,h:t,aJ:o})}),UD=v(function(e,r){return a(Gi,function(n){return oe(n.bw,r)},e)}),h4=function(e){return re},dl=v(function(e,r){if(r.$===-2)return Jn;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;return F(ze,n,t,a(e,t,o),a(dl,e,c),a(dl,e,i))}),ED=v(function(e,r){var n=Pn(a(W,function(i){return P(g1(i).bw,i)},r)),t=a(dl,v(function(i,f){return g1(f).bb}),n),o=a(Vr,function(i){var f=i.a,u=i.b;return a(G$,f,e)?D:A(u)},Ya(n)),c=a(Vr,function(i){var f=i.a,u=i.b;return a(G$,f,n)?D:A({bw:f,bb:u})},Ya(e));return{sl:t,uz:o,uA:c}}),RD=function(e){return e.il&&!e.pj},GD=vo("assetsUnload",Yt(function(e){return fl($([P("id",Hr(e.bw)),P("instanceId",Hr(e.gd)),P("kind",Hr(e.bb))]))})),WD=v(function(e,r){return{bw:r.bw,gd:e,bb:r.bb}}),ND=v(function(e,r){return GD(a(W,WD(e),r))}),OD=Ol(function(e,r,n,t,o,c,i,f,u){var s=a(Qe,f,u.dd);if(s.$)return u;var d=s.a;if(RD(d))return u;var p=d.hf+r.g.hu,g=Mf({hf:p,b4:d.b4,aF:o,cd:A(n),bw:d.bw,g:r.g,nv:d.nv,nG:ai(n),s8:K$(d),n$:r.n$,aK:d.aK,ct:t,pj:d.pj,ps:rl(n)}),_=l(h4,"play:onTick",a(e.g6.dl,a(tl,c,g),Hn(n)),d.aT),b=_.a,h=_.b,y=_.c,C=l(Zs,oe(i,A(f)),h,{cL:u.ca,dc:d.b4}),j=l(e.cB,a(tl,c,g),Hn(n),b),L=a(ED,d.hp,j),M=Oe(L.uz)?ue:a(K5,f,L.uz),I=Oe(L.uA)?ue:a(ND,f,L.uA),R=l(e.g6.gu,g,Hn(n),b),E=l(m4,g,UD(R),d.ii);return B(u,{cE:a(z,M,a(z,I,a(z,a(_o,Go(f),C.hg),u.cE))),cI:X(u.cI,y),ca:C.cL,dd:l(wr,f,B(d,{hf:p,b4:C.dc,hp:L.sl,aT:b,ii:E}),u.dd)})}),JD=function(e){var r=e.c0;if(r.$){var t=e.jn;if(t.$)return D;var o=t.a;return a(I$,o,e.af)?e.jn:D}else{var n=r.a;return A(n)}},g4=function(e){return{$:3,a:e}},_4=function(e){var r=e.b;return ei(r).a.hf},QD=function(e){var r=e;return B(r,{aP:a(We,r.a7-1,r.aP+1)})},ZD=function(e){if(e.$){var n=e.a;return ii(B(n,{aP:a(We,za(n.eT)-1,n.aP+1)}))}else{var r=e.a;return ci(QD(r))}},XD=function(e){var r=e;return r.aP},y4=function(e){if(e.$){var n=e.a;return n.aP}else{var r=e.a;return XD(r)}},YD=function(e){var r=e;return r.a7},C4=function(e){if(e.$){var n=e.a;return za(n.eT)}else{var r=e.a;return YD(r)}},KD=function(e){return oe(y4(e),C4(e)-1)},eq=function(e){var r=e.a,n=e.b;return KD(n)?D:A(a(sn,r,ZD(n)))},rq=v(function(e,r){var n=r.d;return a(_s,a(gs,e,n),r)}),aq=v(function(e,r){var n=r;return ae(n.a7,n.cD)<0?B(n,{a7:n.a7+1,aP:n.a7,eT:l(nl,a(Sa,n.cD,n.dt+n.a7),e,n.eT)}):B(n,{aP:n.cD-1,eT:l(nl,n.dt,e,n.eT),dt:a(Sa,n.cD,n.dt+1)})}),nq=v(function(e,r){if(r.$){var t=r.a;return ii(B(t,{aP:za(t.eT),eT:a(rq,e,t.eT)}))}else{var n=r.a;return ci(a(aq,e,n))}}),P4=v(function(e,r){return B(r,{dH:e.dH,hf:r.hf+e.hu,eB:e.eB,eD:e.eD,hu:e.hu,rn:e.rn,hQ:e.hQ,gt:e.gt,to:e.to,fm:e.fm,dp:e.dp,ee:e.ee,fC:e.fC})}),tq=v(function(e,r){var n=r.a,t=r.c,o=r.d;if(e){if(ae(e,Rc(n))>-1)return x(yn,n-e,ra,Ft,l(jt,e-Rc(n),Pa(o),o));var c=e/dr|0,i=v(function(_,b){if(_.$){var y=_.a;return a(z,y,b)}else{var h=_.a;return l(lc,i,b,h)}}),f=l(lc,i,$([o]),t),u=a(rt,c,f);if(u.b){var s=u.a,d=u.b,p=e-c*dr,g={ap:S,R:0,ac:l(jt,p,Pa(s),s)};return a(_u,!0,l(ve,hs,g,d))}else return Vi}else return r}),oq=Z(function(e,r,n,t){e:for(;;){var o=qn&n>>>e,c=a(Zt,o,t);if(c.$){var p=c.a;return l(jt,0,qn&r,p)}else{var i=c.a,f=e-ra,u=r,s=n,d=i;e=f,r=u,n=s,t=d;continue e}}}),cq=k(function(e,r,n){e:for(;;){if(ae(e,r)<1||!Pa(n))return n;var t=a(Zt,0,n);if(t.$)return n;var o=t.a,c=e-ra,i=r,f=o;e=c,r=i,n=f;continue e}}),S4=k(function(e,r,n){var t=qn&r>>>e,o=a(Zt,t,n);if(o.$)return l(jt,0,t,n);var c=o.a,i=l(S4,e-ra,r,c);return Pa(i)?l(Fo,t,po(i),l(jt,0,t+1,n)):l(jt,0,t,n)}),iq=v(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d;if(oe(e,n))return r;if(ae(e,Rc(n))>-1)return x(yn,e,t,o,l(jt,0,qn&e,c));var i=Rc(e),f=lt(a(Bi,dr,a(me,1,i-1))),u=a(me,5,f*ra);return x(yn,e,u,l(cq,t,u,l(S4,t,i,o)),x(oq,t,e,i,o))}),x4=v(function(e,r){var n=r.a,t=e<0?n+e:e;return t<0?0:ae(t,n)>0?n:t}),fq=k(function(e,r,n){var t=a(x4,r,n),o=a(x4,e,n);return ae(o,t)>0?Vi:a(tq,o,a(iq,t,n))}),uq=function(e){var r=e;return B(r,{a7:r.aP+1})},$q=function(e){if(e.$){var n=e.a;return ii(B(n,{eT:l(fq,0,n.aP+1,n.eT)}))}else{var r=e.a;return ci(uq(r))}},lq=k(function(e,r,n){var t=n.a,o=n.b;switch(t.$){case 2:return P(n,ue);case 3:var c=t.a.k1;return P((ae(c+r.hu,_4(n))>0?a(Ne,eq,ie(a(sn,$l,o))):re)(a(sn,g4({k1:c+r.hu}),o)),ue);case 1:var i=ei(o),s=i.a,d=i.b,p=a(P4,r,s),f=a(e,p,d),_=f.a,b=f.b;return P(a(sn,J$,a(nq,P(p,_),$q(o))),b);default:var u=ei(o),s=u.a,d=u.b,p=a(P4,r,s),g=a(e,p,d),_=g.a,b=g.b;return P(a(sn,Qs,a(N5,P(p,_),o)),b)}}),vq=k(function(e,r,n){var t=T5({km:r.tc,kE:$1(n.af),X:r.to,uY:r.dp}),o=JD({c0:t.c0,jn:n.aF,af:n.af}),c=a(jD,r,n.cd),i=v(function(_,b){var h=t,y=B(b,{g:r}),C=a(m1,c,$r(n.af)),j=l(ve,Xr(OD,e,y,c,h,o,C,_r(n.af)),{cE:S,cI:S,ca:y.b4,dd:y.dd},n.af),L=l(B$,e,j.cI,y.n$),M=L.a,I=L.b;return P(B(y,{b4:j.ca,dd:j.dd,n$:M}),xa(a(z,I,j.cE)))}),f=l(lq,i,r,n.us),u=f.a,s=f.b,d=a(FD,a(c4,B(n,{us:u}),ri(u)),c),p=(function(){var _=d.dD;return B(d,{dD:B(_,{rm:D})})})(),g=kD(u)?TD(o4(u)):ue;return P(B(n,{aF:o,cd:p,us:u}),xa($([s,g])))}),QW=0,Bf=function(e){var r=e;return B(r,{aR:!1})},sq=function(e){var r=e;return B(r,{bS:Bf(r.bS)})},dq=function(e){var r=e;return B(r,{bS:Bf(r.bS)})},j4=function(e){return{$:2,a:e}},pq=j4,w4=function(e){return{$:12,a:e}},k4="play-command-palette",C1={fR:k4,fa:320,ky:"Type a command\u2026",v:w4,lh:{sA:400,uU:50}},L4=3,bq=v(function(e,r){return!y1(e)&&y1(r)}),mq=function(e){switch(e){case 0:return 1;case 1:return 2;default:return 0}},qa={$:11},eo=32,T4=v(function(e,r){return a(me,0,eo*r-e.fa/2+eo/2)}),P1=function(e){return Gs(Ka(e))},hq=Sg("focus"),Zo=function(e){return e.fR+"-list"},M4=function(e){return e.fR+"-search"},Vf=v(function(e,r){var n=r,t=a(ie,0,a(Ta,function(c){return a(P1,c,n.a9)},n.e_)),o=a(T4,e,t);return P(B(n,{aR:!0,bV:o,a$:t}),xa($([a(Lt,function(c){return e.v(qa)},hq(M4(e))),a(Lt,function(c){return e.v(qa)},l(Jo,Zo(e),0,o))])))}),gq=v(function(e,r){var n=r,t=a(Vf,Df(e),a(Lf,A(n.c2),n.bS)),o=t.a,c=t.b;return P(B(n,{bS:o}),c)}),_q=k(function(e,r,n){var t=n,o=a(Vf,pi(e),a(Lf,Os(r),t.bS)),c=o.a,i=o.b;return P(B(t,{bS:c}),i)}),yq=k(function(e,r,n){var t=n,o=a(Ta,function(f){return a(P1,f,t.a9)},r);if(o.$)return P(t,ue);var c=o.a,i=a(T4,e,c);return P(B(t,{e_:r,bV:i,a$:c}),a(Lt,function(f){return e.v(qa)},l(Jo,Zo(e),0,i)))}),z4=k(function(e,r,n){var t=n,o=l(yq,pi(e),Os(r),t.bS),c=o.a,i=o.b;return P(B(t,{bS:c}),i)}),Cq=s1,S1={$:2},D4=function(e){return{$:1,a:e}},Pq={$:3},x1=function(e){return{$:0,a:e}},j1=v(function(e,r){return e<0?D:_r(a(rt,e,r))}),Sq=v(function(e,r){e:for(;;){var n=P(e,r);if(n.a.b)if(n.b.b){var t=n.a,o=t.a,c=t.b,i=n.b,f=i.a,u=i.b;if(oe(o,f)){var s=c,d=u;e=s,r=d;continue e}else{var s=e,d=u;e=s,r=d;continue e}}else return!1;else return!0}}),xq=Z(function(e,r,n,t){return{lG:r,mx:e,oc:n,od:t}}),jq=2,wq=H6,kq=12,Lq=-3,Tq=-1,Mq=-1,w1=16,Xo=-a(Mn,2,30),zq=ke(function(e,r,n,t,o){var c=F(wq,xq,r,n,t,o),i={fU:S,e4:0,hR:Xo,hS:Xo,hT:Xo,gm:S},f=e.mU?Mq:Lq,u=v(function(d,p){var g=d.mx,_=d.lG,b=d.oc,h=d.od,y=oe(g,e.n2)?e.mT?p.e4*Tq+w1+_*jq:p.e4?a(me,p.hT+w1+_,p.hS+w1+kq):Xo:Xo,C=a(me,y,p.hR+f);return{fU:a(z,y,p.fU),e4:p.e4+1,hR:C,hS:b,hT:h,gm:a(z,C,p.gm)}}),s=l(ve,u,i,c);return P(je(s.fU),je(s.gm))}),Dq=function(e){return l(ve,v(function(r,n){return r}),Xo,e)},qq=k(function(e,r,n){e:for(;;){if(r<=0)return e;var t=a(z,n,e),o=r-1,c=n;e=t,r=o,n=c;continue e}}),Aq=v(function(e,r){return l(qq,S,e,r)}),Bq=k(function(e,r,n){var t=$r(e),o=$r(r),c=a(Aq,o,Xo),i=a(_n,Tc,e),f=l(ve,v(function(s,d){var p=s.a,g=s.b,_=d.a,b=d.b;return F(zq,{mT:!p,mU:oe(p,t-1),n2:g},r,n,_,b)}),P(c,c),i),u=f.b;return Dq(u)}),Vq=v(function(e,r){var n=r;if(Co(e))return A(0);var t=a(W,Us,sc(e));return a(Sq,t,n.jV)?A(l(Bq,t,n.jV,n.lH)):D}),k1=function(e){return{$:8,a:e}},q4=v(function(e,r){var n=eo*r.a$,t=n-r.bV,o=r.bV+e.fa-(n+eo);if(t<0)return a(Lt,function(i){return e.v(k1(n))},l(Jo,Zo(e),0,n));if(o<0){var c=r.bV-o;return a(Lt,function(i){return e.v(k1(c))},l(Jo,Zo(e),0,c))}else return ue}),Hq=F6,L1=k(function(e,r,n){var t=n;switch(r.$){case 0:var o=r.a,c=Co(o)?a(W,On,t.$9):a(W,H$,a(Hq,v(function(y,C){var j=y.a,L=C.a;return a(M0,L,j)}),a(Vr,function(y){var C=y.a,j=y.b;return a(he,function(L){return P(L,C)},a(Vq,o,j))},t.$9)));return V(B(t,{a9:c,bV:0,iB:o,a$:0}),a(Lt,function(y){return e.v(qa)},l(Jo,Zo(e),0,0)),a(he,x1,_r(c)));case 1:var _=a(me,0,t.a$-1),i=B(t,{a$:_});return V(i,a(q4,e,i),a(he,x1,a(j1,_,t.a9)));case 2:var _=a(We,$r(t.a9)-1,t.a$+1),i=B(t,{a$:_});return V(i,a(q4,e,i),a(he,x1,a(j1,_,t.a9)));case 3:var f=a(j1,t.a$,t.a9);if(f.$===1)return V(B(t,{aR:!1}),ue,A(S1));var u=f.a;return V(B(t,{e_:A(u),aR:!1}),ue,A(D4(u)));case 4:return V(B(t,{aR:!1}),ue,A(S1));case 10:var s=a(Vf,e,t),d=s.a,p=s.b;return V(d,p,A(Pq));case 5:var g=r.a;return V(B(t,{e_:A(g),aR:!1}),ue,A(D4(g)));case 6:var g=r.a,_=a(ie,t.a$,a(P1,g,t.a9));return V(B(t,{a$:_}),ue,D);case 7:return V(B(t,{aR:!1}),ue,A(S1));case 8:var b=r.a;return V(B(t,{bV:b}),ue,D);case 9:var h=r.a;return V(t,a(Lt,function(y){return e.v(qa)},l(Jo,Zo(e),0,t.bV+h)),D);default:return V(t,ue,D)}}),Iq=k(function(e,r,n){var t=n;if(r.$===1){var o=r.a;return P(B(t,{d1:o}),ue)}else{var c=r.a,i=l(L1,Df(e),c,t.bS),f=i.a,u=i.b,s=i.c,d=(function(){e:for(;;){if(s.$)break e;switch(s.a.$){case 1:var p=s.a.a;return p;case 0:var p=s.a.a;return p;default:break e}}return t.c2})();return P(B(t,{c2:d,bS:f}),u)}}),Fq=function(e){var r=e;return Oe(r.q)?f5(e):i5(e)},Uq=function(e){var r=e;return 1+$r(r.o)+$r(r.q)},Eq=function(e){return a(N$,Uq(e)-1,e)},Rq=function(e){var r=e,n=r.o;if(n.b){var t=n.a,o=n.b;return{q:a(z,r.fS,r.q),o,fS:t}}else return r},Gq=function(e){var r=e;return Oe(r.o)?Eq(e):Rq(e)},A4=k(function(e,r,n){var t=e(n.cX);return V(B(n,{cX:t}),a(Xs,Ro(t),r),ue)}),Wq=Z(function(e,r,n,t){var o=t;switch(r.$){case 1:var c=r.a,i=a(ie,o.cX,a(u5,c,o.cX));return V(B(o,{cX:i}),a(Xs,c,n),ue);case 2:return l(A4,Gq,n,o);case 3:return l(A4,Fq,n,o);default:var f=r.a,u=l(L1,pi(e),f,o.bS),s=u.a,d=u.b,p=u.c,g=(function(){if(p.$)return n;switch(p.a.$){case 1:var _=p.a.a;return a(Ys,_,n);case 0:var _=p.a.a;return a(Ys,_,n);case 2:var b=p.a;return n;default:var h=p.a;return n}})();return V(B(o,{bS:s}),g,d)}}),Aa=function(e){return{$:1,a:e}},T1=function(e){return{$:2,a:e}},Hf=function(e){return{$:0,a:e}},If={$:1},B4={$:3},Nq=500,Oq=200,Jq=v(function(e,r){var n=P(r,e);if(n.a.$)switch(n.b.$){case 0:var h=n.a.a,u=n.b,c=u.a,i=u.b,s=(function(){var R=h.S;switch(R.$){case 0:return Hf(0);case 1:return If;case 2:return If;default:return B4}})();return Aa({a4:i,eG:c.eG,jM:c.jM,S:s,t2:c.t2});case 1:var h=n.a.a,d=n.b,p=h.S;switch(p.$){case 0:return Tf;case 1:return Aa(B(h,{S:T1(0)}));case 2:return Aa(B(h,{S:T1(0)}));default:return Tf}case 2:var h=n.a.a,g=n.b;return Aa(B(h,{S:B4}));case 3:var h=n.a.a,_=n.b,b=h.S;switch(b.$){case 0:return Aa(B(h,{S:Hf(0)}));case 1:return Aa(B(h,{S:If}));case 2:return Aa(B(h,{S:If}));default:return Aa(B(h,{S:Hf(0)}))}default:var h=n.a.a,y=n.b.a,C=h.S;switch(C.$){case 0:var j=C.a,L=j+y;return ae(L,Nq)>0?Aa(B(h,{S:If})):Aa(B(h,{S:Hf(L)}));case 2:var j=C.a,L=j+y;return ae(L,Oq)>0?Tf:Aa(B(h,{S:T1(L)}));case 1:return Aa(h);default:return Aa(h)}}else if(n.b.$){var f=n.a;return Tf}else{var t=n.a,o=n.b,c=o.a,i=o.b;return Aa({a4:i,eG:c.eG,jM:c.jM,S:Hf(0),t2:c.t2})}}),Qq=v(function(e,r){var n=r;return a(Jq,e,n)}),Zq=k(function(e,r,n){var t=e.gD,o=e.qq;switch(r.$){case 0:var rr=r.a;if(t.cb){var c=x(Wq,qf,rr,n.e,n.ad),i=c.a,h=c.b,f=c.c;return V(B(n,{ad:i,e:h}),f,D)}else return V(n,ue,D);case 1:var rr=r.a;if(t.dO){var u=l(Iq,p1,rr,n.ae),Fe=u.a,s=u.b;return V(B(n,{ae:Fe}),s,D)}else return V(n,ue,D);case 2:var rr=r.a;return V(B(n,{cU:a(Qq,rr,n.cU)}),ue,D);case 3:var rr=r.a,d=n.aJ,p=a(l4,rr,d),g=a(bq,d,p),_=g?a(oi,$5(3),n.h):n.h;return V(B(n,{h:_,aJ:p}),ue,D);case 4:if(t.cb){var h=Ks(n.e),b=l(z4,qf,h,n.ad),le=b.a,f=b.b;return V(B(n,{ad:le,e:h}),f,D)}else return V(n,ue,D);case 5:var h=r.a;if(!t.cb||oe(h,n.e))return V(n,ue,D);var y=l(z4,qf,h,n.ad),le=y.a,f=y.b;return V(B(n,{ad:le,e:h}),f,D);case 6:var rr=r.a,C=a(ha,6,n.h),j=a(ha,5,n.h),L=a(oi,rr,n.h),M=a(ha,6,L),I=a(ha,5,L),R=a(ha,7,n.h),E=a(ha,7,L),K=n.dD,J=!j&&I?l(_q,qf,n.e,n.ad):P(j&&!I?dq(n.ad):n.ad,ue),le=J.a,Se=J.b,Te=(function(){if(C&&!M)return P(B(K,{N:Bf(K.N)}),ue);if(!C&&M){var Na=a(Vf,C1,K.N),Un=Na.a,uo=Na.b;return P(B(K,{N:Un}),uo)}else return P(K,ue)})(),qe=Te.a,ce=Te.b,Ae=!R&&E?a(gq,p1,n.ae):P(R&&!E?sq(n.ae):n.ae,ue),Fe=Ae.a,Je=Ae.b;return V(B(n,{dD:qe,ae:Fe,h:L,ad:le}),xa($([ce,Se,Je])),D);case 7:return V(B(n,{ps:!n.ps}),ue,D);case 8:var Re=r.a;return V(B(n,{et:A({a4:Re,h8:!o,kI:L4})}),ue,o?A(0):D);case 9:var xr=r.a;return!t.dP||oe(xr,n.nG)?V(n,ue,D):V(B(n,{nG:xr}),ue,D);case 10:return t.dP?V(B(n,{nG:mq(n.nG)}),ue,D):V(n,ue,D);case 11:if(a(zf,t,n.dD.N)){var C=a(ha,6,n.h),L=a(oi,Cq(6),n.h),K=n.dD,Ge=C?P(Bf(K.N),ue):a(Vf,C1,K.N),i=Ge.a,f=Ge.b;return V(B(n,{dD:B(K,{N:i}),h:L}),f,D)}else return V(n,ue,D);case 12:var rr=r.a;if(a(zf,t,n.dD.N)){var K=n.dD,sr=l(L1,C1,rr,n.dD.N),i=sr.a,f=sr.b,Ur=sr.c,Xe=(function(){e:for(;;){if(Ur.$)break e;switch(Ur.a.$){case 1:return!0;case 2:var En=Ur.a;return!0;default:break e}}return!1})(),Jr=Xe?a(oi,pq(6),n.h):n.h,qe=(function(){if(!Ur.$&&Ur.a.$===1){var En=Ur.a.a;return B(K,{N:Bf(i),rm:A(P(En.iE,En.jM))})}else return B(K,{N:i})})();return V(B(n,{dD:qe,h:Jr}),f,D)}else return V(n,ue,D);default:return V(n,ue,D)}}),Xq=v(function(e,r){var n=r;return B(n,{aP:l(pr,0,n.a7-1,e)})}),Yq=v(function(e,r){if(r.$){var t=r.a;return ii(B(t,{aP:l(pr,0,za(t.eT)-1,e)}))}else{var n=r.a;return ci(a(Xq,e,n))}}),Kq=v(function(e,r){var n=r.b;return a(sn,$l,a(Yq,e,n))}),eA=function(e){var r=e.b;return a(sn,$l,r)},rA=function(e){var r=e.b;return a(sn,g4({k1:_4(e)}),r)},aA=function(e){var r=e.b;return a(sn,J$,r)},nA=v(function(e,r){switch(e.$){case 1:return eA(r);case 2:return aA(r);case 3:return rA(r);default:var n=e.a;return a(Kq,n,r)}}),tA=k(function(e,r,n){switch(r.$){case 0:var t=r.a;return l(vq,e,t,n);case 1:var o=r.a,c=r.b;return x(Uz,e,o,c,n);case 2:var d=r.a,i=r.b;return l(Bz,d,i,n);case 3:var f=r.a;return l(zz,e,$([f]),n);case 4:var d=r.a,u=r.b;return l(hD,d,u,n);case 5:var d=r.a,s=r.b;return l(oD,d,s,n);case 6:return P(n,ue);case 7:var d=r.a,p=r.b,g=r.c;return x(sD,d,p,g,n);case 8:return P(B(n,{hl:D}),ue);case 9:var _=r.a,b=ri(n.us).b4,h=!Oe(a(Y5,e.bx,b)),y=l(Zq,{qq:h,gD:e.cd},_,n.cd),C=y.a,j=y.b,L=y.c,M=l(Az,e,L,B(n,{cd:C})),I=M.a,R=M.b;return P(I,xa($([a(_o,e1,j),R])));case 10:var E=r.a;return P(B(n,{us:a(nA,E,n.us)}),ue);case 11:var K=r.a;return l(lD,e,K,n);default:return P(n,ue)}}),oA=vo("setLocalStorage",function(e){return fl($([P("key",Hr(e.jK)),P("value",Hr(e.uQ))]))}),cA=v(function(e,r){var n=r.a,t=r.b,o=a(Gm,e,n),c=a(Vr,function(i){var f=i.a,u=i.b;return oe(a(ti,f,n.gf),A(u))?D:A(oA({jK:f,uQ:u}))},o);return Oe(c)?P(n,t):P(B(n,{gf:o}),xa(a(z,t,c)))}),iA=k(function(e,r,n){return a(cA,e,l(tA,e,r,n))}),fA=function(e){return{$:11,a:e}},uA=function(e){return{$:10,a:e}},$A={$:8},lA=xn,mi=Ca("code"),vA=Ca("li"),pl=Ca("p"),sA=Ca("ul"),dA=function(e){if(e.$){var r=e.a;return a(hr,$([a(H,"margin-top","0.4rem")]),$([a(pl,$([a(H,"margin","0 0 0.25rem 0")]),$([fr("Two or more instances share the same id:")])),a(sA,$([a(H,"margin","0 0 0.5rem 0"),a(H,"padding-left","1.25rem")]),a(W,function(n){return a(vA,S,$([a(mi,S,$([fr(n)]))]))},r)),a(pl,$([a(H,"margin","0")]),$([fr("Each "),a(mi,S,$([fr("Play.instance")])),fr(" needs a unique "),a(mi,S,$([fr("id")])),fr(" \u2014 the runtime keys per-instance state, asset registries, and DOM nodes by it.")]))]))}else return a(hr,$([a(H,"margin-top","0.4rem")]),$([a(pl,$([a(H,"margin","0")]),$([a(mi,S,$([fr("Play.multipage")])),fr(" was called with an empty "),a(mi,S,$([fr("instances")])),fr(" list. Add at least one "),a(mi,S,$([fr("Play.instance { ... }")])),fr(" to the list.")]))]))},pA=Ca("details"),bA=Ca("strong"),mA=Ca("summary"),hA=function(e){return a(hr,$([a(H,"position","fixed"),a(H,"top","1rem"),a(H,"left","50%"),a(H,"transform","translateX(-50%)"),a(H,"max-width","min(40rem, calc(100vw - 2rem))"),a(H,"padding","1rem 2.75rem 1rem 1.25rem"),a(H,"background","#fff5f5"),a(H,"color","#742a2a"),a(H,"border","1px solid #fc8181"),a(H,"border-radius","0.5rem"),a(H,"box-shadow","0 4px 24px rgba(0, 0, 0, 0.15)"),a(H,"font-family","system-ui, -apple-system, sans-serif"),a(H,"font-size","0.95rem"),a(H,"line-height","1.5"),a(H,"z-index","2147483647")]),$([a(bA,$([a(H,"display","block"),a(H,"color","#c53030"),a(H,"margin-bottom","0.35rem")]),$([fr("This page has a configuration problem.")])),a(pl,$([a(H,"margin","0 0 0.5rem 0")]),$([fr("Please notify the page author so they can fix it.")])),a(pA,$([a(H,"margin-top","0.5rem"),a(H,"color","#742a2a"),a(H,"font-size","0.88rem")]),$([a(mA,$([a(H,"cursor","pointer"),a(H,"user-select","none")]),$([fr("Technical detail (for the developer)")])),dA(e)])),a(gm,$([_m($A),a(lA,"aria-label","Dismiss"),a(H,"position","absolute"),a(H,"top","0.5rem"),a(H,"right","0.5rem"),a(H,"width","1.75rem"),a(H,"height","1.75rem"),a(H,"padding","0"),a(H,"border","none"),a(H,"background","transparent"),a(H,"color","#742a2a"),a(H,"cursor","pointer"),a(H,"font-size","1.4rem"),a(H,"line-height","1"),a(H,"border-radius","0.25rem")]),$([fr("\xD7")]))]))},M1="scrollbar-muted",V4=v(function(e,r){var n=ge(a(Ie,function(c){return c.ja},r)),t=ge(a(Ie,function(c){return c.iV},r)),o=ge(a(Ie,function(c){return c.bn},r));return l(Sn,"style",S,$([de(`
/* Firefox + recent standards-compliant browsers */
`+(e+(`* {
  scrollbar-width: thin;
  scrollbar-color: `+(o+(` transparent;
}
`+(e+("."+(M1+(` {
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
`+(e+("."+(M1+(`::-webkit-scrollbar-thumb {
  background-color: `+(n+(`;
}
`+(e+("."+(M1+(`::-webkit-scrollbar-thumb:hover {
  background-color: `+(t+`;
}
`))))))))))))))))))))))))))))))))))))]))}),gA=function(e){return a(V4,"",e)},H4=ym("id"),_A=k(function(e,r,n){return l(wr,e,{il:r.il,pj:r.pj},n)}),yA=function(e){switch(e){case 0:return 44;case 1:return 40;default:return 24}},CA=function(e){var r=e;return yA(r.c2.aB)},PA=function(e){return CA(e.ae)},I4=k(function(e,r,n){return{$:2,a:e,b:r,c:n}}),SA=Z(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),F4=Z(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),xA=O9,bl=v(function(e,r){var n=r.a,t=r.b,o=r.c;return l(bt,a(xA,e,n),t,o)}),Ff=v(function(e,r){switch(r.$){case 0:var t=r.a,o=r.b,c=r.c;return l(Lp,t,a(W,bl(e),o),a(W,Ff(e),c));case 1:var n=r.a,t=r.b,o=r.c,c=r.d;return x(F4,n,t,a(W,bl(e),o),a(W,Ff(e),c));case 2:var t=r.a,o=r.b,c=r.c;return l(I4,t,a(W,bl(e),o),a(W,function(f){var u=f.a,s=f.b;return P(u,a(Ff,e,s))},c));case 3:var n=r.a,t=r.b,o=r.c,c=r.d;return x(SA,n,t,a(W,bl(e),o),a(W,function(f){var u=f.a,s=f.b;return P(u,a(Ff,e,s))},c));default:var i=r.a;return Pu(a(t2,e,i))}}),Uf=Ff,ga=se("cursor"),jA=function(e){var r=e;return a(he,function(n){return n.bw},r.eH)},wA=function(e){return xb(l(ho,"span",$([a(xn,"style","display: none;"),a(xn,"class","elm-css-style-wrapper")]),Ei(l(ho,"style",S,Ei(Su(hb(Cb(e))))))))},kA={aP:0,uQ:"grabbing"},U4=function(e){var r=jA(e);return r.$?de(""):wA($([a(Au,"body *",$([ga(kA)]))]))},ro={tt:0,uQ:"absolute"},Ef={jy:0,f3:0,uQ:"row"},Ba=B(Ef,{uQ:"column"}),Le=a(U,"display","flex"),Rf=12,Ir=se("flex-direction"),Yo={g6:0,pL:1300,rT:1100,sE:1400,te:100,o0:1500,cU:1200},qr=se("position"),Ko=se("right"),pn=se("top"),ZW=0,XW=1,E4=function(e){return e?"true":"false"},LA=Tr(function(e,r,n,t,o,c){return a(U,e,r.uQ+(" "+(n.uQ+(" "+(t.uQ+(" "+(o.uQ+(" "+c.uQ))))))))}),Gf=LA("box-shadow"),R4=k(function(e,r,n){var t=or(a(gr,.08,bc)),o=or(a(gr,.25,bo)),c=or(a(gr,.18,bc));return a(ee,X(r,$([Q($([Le,(function(){return Ir(e===1?Ba:Ef)})(),a(U,"gap","3px"),kn(T(3)),cr(a(la.qp,36/2,3)),_e(t),l(pt,T(1),wa,c),a(U,"backdrop-filter","blur(14px) saturate(160%)"),a(U,"-webkit-backdrop-filter","blur(14px) saturate(160%)"),F(Gf,be,T(6),T(18),T(-6),o),a(U,"pointer-events","auto")]))])),n)}),hi=zu("active"),ur=function(e){return l(tv,"alignItems","align-items",e(ov))},Pr=v(function(e,r){return l(bt,a(xn,e,r),!1,"")}),er=Pr,YW=1,KW=re,ml=Z(function(e,r,n,t){return{g5:e,hq:A(n),cF:r,iO:A(t)}}),z1=ml(1),TA=se("border-style"),eN=25,G4=ml(25),ao=Sn("button"),Ee=se("center"),rN=29,MA=ml(29),hl=se("border-bottom-left-radius"),gl=se("border-bottom-right-radius"),_l=se("border-top-left-radius"),yl=se("border-top-right-radius"),zA=v(function(e,r){var n=T(4),t=T(18);switch(r){case 0:return $([cr(Ye(50))]);case 2:return $([cr(n)]);case 1:return $(e===1?[_l(t),yl(t),hl(n),gl(n)]:[_l(t),hl(t),yl(n),gl(n)]);default:return $(e===1?[_l(n),yl(n),hl(t),gl(t)]:[_l(n),hl(n),yl(t),gl(t)])}}),DA={$:3},Cl=DA,D1={bp:0,uQ:"inset"},_a=function(e){return l(tv,"justifyContent","justify-content",e(ov))},oa=v(function(e,r){return a(Sv,e,Gb(r))}),no=function(e){return a(oa,"click",te(e))},In={aP:0,uQ:"pointer"},gi={tt:0,uQ:"relative"},aN=89,W4=ml(89),qA=function(e){return Oe(e)?{uQ:"none"}:{uQ:l($a,function(r){return r.uQ}," ",e)}},Pl=a(tr,se("transform"),qA),AA=function(e){switch(e){case 0:return"background";case 1:return"background-color";case 2:return"background-position";case 3:return"background-size";case 4:return"border";case 5:return"border-bottom";case 6:return"border-bottom-color";case 7:return"border-bottom-left-radius";case 8:return"border-bottom-right-radius";case 9:return"border-bottom-width";case 10:return"border-color";case 11:return"border-left";case 12:return"border-left-color";case 13:return"border-left-width";case 14:return"border-radius";case 15:return"border-right";case 16:return"border-right-color";case 17:return"border-right-width";case 18:return"border-top";case 19:return"border-top-color";case 20:return"border-top-left-radius";case 21:return"border-top-right-radius";case 22:return"border-top-width";case 23:return"border-width";case 24:return"bottom";case 25:return"box-shadow";case 26:return"caret-color";case 27:return"clip";case 28:return"clip-path";case 29:return"color";case 30:return"column-count";case 31:return"column-gap";case 32:return"column-rule";case 33:return"column-rule-color";case 34:return"column-rule-width";case 35:return"column-width";case 36:return"columns";case 37:return"filter";case 38:return"flex";case 39:return"flex-basis";case 40:return"flex-grow";case 41:return"flex-shrink";case 42:return"font";case 43:return"font-size";case 44:return"font-size-adjust";case 45:return"font-stretch";case 46:return"font-variation-settings";case 47:return"font-weight";case 48:return"grid-column-gap";case 49:return"grid-gap";case 50:return"grid-row-gap";case 51:return"height";case 52:return"left";case 53:return"letter-spacing";case 54:return"line-height";case 55:return"margin";case 56:return"margin-bottom";case 57:return"margin-left";case 58:return"margin-right";case 59:return"margin-top";case 60:return"mask";case 61:return"mask-position";case 62:return"mask-size";case 63:return"max-height";case 64:return"max-width";case 65:return"min-height";case 66:return"min-width";case 67:return"object-position";case 68:return"offset";case 69:return"offset-anchor";case 70:return"offset-distance";case 71:return"offset-path";case 72:return"offset-rotate";case 73:return"opacity";case 74:return"order";case 75:return"outline";case 76:return"outline-color";case 77:return"outline-offset";case 78:return"outline-width";case 79:return"padding";case 80:return"padding-bottom";case 81:return"padding-left";case 82:return"padding-right";case 83:return"padding-top";case 84:return"right";case 85:return"tab-size";case 86:return"text-indent";case 87:return"text-shadow";case 88:return"top";case 89:return"transform";case 90:return"transform-origin";case 91:return"vertical-align";case 92:return"visibility";case 93:return"width";case 94:return"word-spacing";default:return"z-index"}},N4=function(e){return O(e)+"ms"},BA=function(e){switch(e.$){case 0:return"ease";case 1:return"linear";case 2:return"ease-in";case 3:return"ease-out";case 4:return"ease-in-out";case 5:return"step-start";case 6:return"step-end";default:var r=e.a,n=e.b,t=e.c,o=e.d;return"cubic-bezier("+(O(r)+(" , "+(O(n)+(" , "+(O(t)+(" , "+(O(o)+")")))))))}},Sl=function(e){var r=l(nn,0,-1,l(ve,v(function(n,t){var o=n.iO,c=n.hq,i=n.cF,f=n.g5;return t+(AA(f)+(" "+(N4(i)+(" "+(a(ie,"",a(he,N4,c))+(" "+(a(ie,"",a(he,BA,o))+",")))))))}),"",e));return a(U,"transition",r)},O4=v(function(e,r){return{k8:0,uQ:a(Pc,"translate",$([e.uQ,r.uQ]))}}),J4=v(function(e,r){var n=U$(e),t=or(a(gr,n?.18:.64,bo)),o=or(a(gr,n?.12:.48,bo)),c=or(n?a(gr,.06,bo):a(gr,.1,bc)),i=r.i2,f=i.a,u=i.b;return a(ao,X($([no(r.gq),a(er,"role",r.i1),a(er,f,u),a(er,"aria-label",r.jM),Q(X($([qr(gi),He(T(36)),Ve(T(36)),TA(lr),kn(be),ga(In),a(U,"background","transparent"),ln(lr),fe(r.r8?a(Y,r.ka,e):a(Y,function(s){return s.k4},e)),Sl($([l(G4,70,0,Cl),l(z1,70,0,Cl),l(MA,70,0,Cl)])),r.r8?nr($([F(Gf,D1,be,T(4),be,o),_e(o)])):nr($([wn($([_e(c),F(Gf,D1,be,T(1),be,c)]))])),hi($([F(Gf,D1,be,T(6),be,t),_e(t)]))]),a(zA,r.d1,r.tt)))]),r.cw),$([a(ee,$([Q($([He(Ye(100)),Ve(Ye(100)),Le,ur(Ee),_a(Ee),r.r8?Pl($([a(O4,be,T(1))])):nr(S),hi($([Pl($([a(O4,be,T(1.5))]))])),Sl($([l(W4,70,0,Cl)]))]))]),$([a(ee,$([Q($([He(T(24)),Ve(T(24))]))]),$([r.rU]))]))]))}),xl=v(function(e,r){return l(R4,1,S,$([a(J4,e,{i1:"button",i2:P("aria-pressed",E4(r.jJ)),rU:r.rU,r8:r.jJ,jM:r.jM,gq:r.gq,ka:r.iW,d1:1,tt:0,cw:r.cw})]))}),ec=v(function(e,r){return a(xl,e,{iW:r.a1,rU:r.rU,jJ:a(ha,r.bw,r.aT),jM:r.jM,gq:r.v(s1(r.bw)),cw:r.cw})}),VA=Z(function(e,r,n,t){return a(ec,e,{rU:t.rU,bw:t.bw,jM:t.dx,aT:r,a1:t.a1,v:n,cw:S})}),to=se("z-index"),HA=v(function(e,r){return a(ee,$([Q($([qr(ro),pn(T(Rf)),Ko(T(Rf)),Le,Ir(Ba),a(U,"gap","6px"),a(U,"pointer-events",r.jG?"none":"auto"),to(pe(Yo.rT)),a(U,"transform",r.jG?"translateX(calc(100% + "+(O(Rf)+"px))"):"translateX(0)"),a(U,"transition","transform 280ms cubic-bezier(0.2, 0.9, 0.25, 1)")]))]),a(W,l(VA,e,r.ii,r.v),r.gu))}),Q4=function(e){return{$:1,a:e}},oo=function(e){return{$:0,a:e}},IA=function(e){return{pp:Q4(Rf),pq:oo(Rf+e*40)}},rc=se("bottom"),FA=function(e){return $([(function(){var r=e.pp;switch(r.$){case 0:var n=r.a;return ja(T(n));case 1:var n=r.a;return Ko(T(n));default:return ja(Ye(50))}})(),(function(){var r=e.pq;if(r.$){var n=r.a;return rc(T(n))}else{var n=r.a;return pn(T(n))}})()])},q1=12,_i={fJ:0,tt:0,iL:0,uQ:"fixed"},Z4=function(e){var r="blur("+(O(e)+"px) saturate(180%)");return nr($([a(U,"backdrop-filter",r),a(U,"-webkit-backdrop-filter",r)]))},UA={aP:0,uQ:"grab"},Wf={bp:0,fj:0,uQ:"hidden",gY:0},yi=gt("id"),X4=se("max-height"),Y4=v(function(e,r){return"draggable-panel-"+(e(r)+"-no-drag")}),EA=v(function(e,r){var n=(function(){var t=e.pp;return t.$===2?"calc(-50% + "+(O(r.pp)+"px)"):O(r.pp)+"px"})();return"translate("+(n+(", "+(O(r.pq)+"px)")))}),co=se("pointer-events"),RA=v(function(e,r){switch(r.$){case 0:var n=r.a;return n;case 1:var n=r.a;return e-n;default:return e/2}}),GA=v(function(e,r){if(r.$){var n=r.a;return e-n}else{var n=r.a;return n}}),K4=k(function(e,r,n){var t=q1-r,o=e-q1-r;return ae(o,t)<1?t:l(pr,t,o,n)}),WA=k(function(e,r,n){return{pp:l(K4,e.dp.lh,a(RA,e.dp.lh,r.pp),n.pp),pq:l(K4,e.dp.jF,a(GA,e.dp.jF,r.pq),n.pq)}}),NA=k(function(e,r,n){var t=n,o=l(WA,e,r.a4,l(v4,b4,r.bw,t)),c=t.eH;if(c.$)return o;var i=c.a;return oe(i.bw,r.bw)?a(d4,e,i):o}),eh=se("box-shadow"),rh=ke(function(e,r,n,t,o){return a(U,e,r.uQ+(" "+(n.uQ+(" "+(t.uQ+(" "+o.uQ))))))}),OA=rh("box-shadow"),ah=Z(function(e,r,n,t){return{aO:t,pT:n,fQ:0,rE:r,tB:e,uQ:a(Pc,"rgba",X(a(W,ar,$([e,r,n])),$([O(t)])))}}),A1={qZ:eh(lr),q_:x(OA,be,T(1),T(2),x(ah,0,0,0,.3)),q$:a(U,"box-shadow","0 2px 4px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2)"),q0:a(U,"box-shadow","0 12px 24px -8px rgba(0, 0, 0, 0.55), 0 4px 8px -2px rgba(0, 0, 0, 0.4)"),q1:a(U,"box-shadow","0 28px 60px -20px rgba(0, 0, 0, 0.85), 0 8px 24px -8px rgba(0, 0, 0, 0.55)")},JA=v(function(e,r){return l(bt,a(zp,e,r),!1,"")}),nh=JA,th=48,nN=0,QA=a(Cc,0,"vh"),ZA={aP:0,uQ:"default"},Nf=se("flex"),XA=se("overflow-x"),oh=se("overflow-y"),YA=v(function(e,r){return a(ee,$([Q($([Nf(pe(1)),oh(yo),XA(yo),a(vr,T(16),T(16))]))]),$([a(ee,$([yi(e),Q($([ga(ZA)]))]),$([r]))]))}),KA=function(e){return{$:3,a:e}},eB={oV:0,uQ:"ellipsis"},B1=k(function(e,r,n){return ae(we(n.C-r.C),e)>-1?n:r.C>.5?B(n,{C:l(pr,0,1,r.C-e)}):B(n,{C:l(pr,0,1,r.C+e)})}),Fr=se("flex-shrink"),ch={f3:0,hD:0,uQ:"nowrap",eh:0},rB=se("padding-right"),aB=se("text-overflow"),nB={fQ:0,uQ:"currentColor"},Of=Pr("clip-rule"),ye=Pr("d"),tB=function(e){var r=Pb(e),n=a(xn,"","");return l(bt,n,!0,r)},ft=tB,Tt=Pr("fill"),oB=F4,io=oB("http://www.w3.org/2000/svg"),V1=io("svg"),H1=Pr("viewBox"),cB=k(function(e,r,n){return l(U9,e,Td(r),Md(n))}),iB=k(function(e,r,n){return l(bt,l(cB,e,r,n),!1,"")}),fB=a(iB,"http://www.w3.org/XML/1998/namespace","xml:space"),Ce=V1($([H1("0 0 24 24"),Tt("currentColor"),ft($([He(Ye(100)),Ve(Ye(100))])),fB("http://www.w3.org/2000/svg")])),Jf=Pr("fill-rule"),Pe=io("path"),Sr={pt:Ce($([a(Pe,$([ye("M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z")]),S)])),pU:Ce($([a(Pe,$([ye("M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z")]),S)])),qe:Ce($([a(Pe,$([Jf("evenodd"),Of("evenodd"),ye("M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z")]),S)])),qf:Ce($([a(Pe,$([Jf("evenodd"),Of("evenodd"),ye("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),S)])),qg:Ce($([a(Pe,$([Jf("evenodd"),Of("evenodd"),ye("M5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071Z")]),S)])),qn:Ce($([a(Pe,$([ye("M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z")]),S)])),qo:Ce($([a(Pe,$([ye("M4.00005 16H20V5H4.00005V16ZM13.0001 18V20H17.0001V22H7.00005V20H11.0001V18H2.99205C2.86065 17.9992 2.7307 17.9725 2.60965 17.9214C2.48861 17.8702 2.37885 17.7957 2.28668 17.702C2.19452 17.6084 2.12175 17.4975 2.07256 17.3756C2.02337 17.2538 1.99873 17.1234 2.00005 16.992V4.008C2.00005 3.451 2.45505 3 2.99205 3H21.008C21.556 3 22 3.449 22 4.007V16.992C22 17.549 21.545 18 21.008 18H13.0001Z")]),S)])),qA:Ce($([a(Pe,$([ye("M11.7143 9.78571L17.5 4L19.4286 5.92857L13.6429 11.7143L19.4286 17.5L17.5 19.4286L11.7143 13.6429L5.92857 19.4286L4 17.5L9.78571 11.7143L4 5.92857L5.92857 4L11.7143 9.78571Z")]),S)])),qN:Ce($([a(Pe,$([ye("M4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6Z")]),S)])),qO:Ce($([a(Pe,$([ye("M9 2H15A2 2 0 0 1 17 4V20A2 2 0 0 1 15 22H9A2 2 0 0 1 7 20V4A2 2 0 0 1 9 2Z")]),S)])),qU:Ce($([a(Pe,$([ye("M11 3h2v7h3l-4 4-4-4h3z M4 17h16v3H4z")]),S)])),qV:Ce($([a(Pe,$([ye("M11 2h2v7h3l-4 4-4-4h3z M4 16h16v2H4z M7 19h10v2H7z")]),S)])),qY:Ce($([a(Pe,$([ye("M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z")]),S)])),ra:Ce($([a(Pe,$([ye("M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z")]),S)])),ro:Ce($([a(Pe,$([ye("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z")]),S)])),ry:Ce($([a(Pe,$([ye("M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z")]),S)])),rB:Ce($([a(Pe,$([ye("M20.0601 11.6104C20.0639 11.7454 20.0639 11.8804 20.0601 12.0154L21.4588 13.7629C21.5322 13.8547 21.583 13.9624 21.6071 14.0773C21.6312 14.1923 21.6279 14.3113 21.5976 14.4248C21.3679 15.2866 21.0249 16.1141 20.5776 16.8857C20.519 16.9867 20.4376 17.0726 20.34 17.1365C20.2423 17.2005 20.1311 17.2408 20.0151 17.2542L17.7914 17.5017C17.6989 17.5992 17.6051 17.6929 17.5101 17.7829L17.2476 20.0123C17.2341 20.1283 17.1937 20.2396 17.1295 20.3373C17.0654 20.435 16.9794 20.5163 16.8782 20.5748C16.1067 21.0217 15.2791 21.3641 14.4173 21.5929C14.3038 21.6232 14.1848 21.6265 14.0698 21.6024C13.9549 21.5783 13.8472 21.5275 13.7554 21.4542L12.0126 20.0629H11.6076L9.8601 21.4589C9.76835 21.5322 9.66065 21.583 9.54569 21.6071C9.43073 21.6312 9.31171 21.6279 9.19823 21.5976C8.33643 21.3679 7.5089 21.0249 6.73729 20.5776C6.63634 20.519 6.55046 20.4376 6.4865 20.34C6.42254 20.2423 6.38225 20.1311 6.36885 20.0151L6.12135 17.7876C6.02385 17.6945 5.9301 17.6007 5.8401 17.5064L3.61073 17.2504C3.49468 17.2369 3.38338 17.1965 3.28572 17.1324C3.18806 17.0682 3.10674 16.9822 3.04823 16.881C2.60136 16.1093 2.2587 15.2818 2.02916 14.4201C1.99897 14.3065 1.99589 14.1875 2.02015 14.0725C2.04441 13.9576 2.09535 13.8499 2.16885 13.7582L3.5601 12.0154V11.6104L2.16416 9.86292C2.09082 9.77116 2.04006 9.66347 2.01596 9.5485C1.99186 9.43354 1.9951 9.31452 2.02541 9.20104C2.25513 8.33924 2.59812 7.51172 3.04541 6.7401C3.10403 6.63915 3.18541 6.55328 3.28306 6.48931C3.38071 6.42535 3.49195 6.38507 3.60791 6.37167L5.83166 6.12417C5.92479 6.02667 6.01854 5.93292 6.11291 5.84292L6.3726 3.61354C6.3861 3.49749 6.42653 3.3862 6.49066 3.28854C6.55479 3.19088 6.64085 3.10955 6.74198 3.05104C7.51369 2.60418 8.3412 2.26151 9.20291 2.03198C9.31647 2.00179 9.43553 1.9987 9.55049 2.02296C9.66546 2.04723 9.77312 2.09816 9.86479 2.17167L11.6076 3.56292C11.7426 3.55917 11.8776 3.55917 12.0126 3.56292L13.7601 2.16417C13.8519 2.09082 13.9595 2.04006 14.0745 2.01596C14.1895 1.99186 14.3085 1.9951 14.422 2.02542C15.2839 2.25472 16.1115 2.59773 16.8829 3.04542C16.9839 3.10403 17.0697 3.18541 17.1337 3.28306C17.1977 3.38072 17.2379 3.49195 17.2513 3.60792L17.4988 5.83167C17.5963 5.92417 17.6901 6.01792 17.7801 6.11292L20.0095 6.37542C20.1255 6.38892 20.2368 6.42934 20.3345 6.49347C20.4321 6.5576 20.5135 6.64366 20.572 6.74479C21.0188 7.51651 21.3615 8.34402 21.591 9.20573C21.6212 9.31928 21.6243 9.43834 21.6001 9.55331C21.5758 9.66828 21.5249 9.77593 21.4513 9.8676L20.0601 11.6104ZM11.8101 8.06292C11.0684 8.06292 10.3434 8.28285 9.72671 8.6949C9.11003 9.10696 8.62938 9.69263 8.34555 10.3779C8.06172 11.0631 7.98746 11.8171 8.13216 12.5445C8.27685 13.2719 8.634 13.9401 9.15845 14.4646C9.6829 14.989 10.3511 15.3462 11.0785 15.4909C11.8059 15.6356 12.5599 15.5613 13.2452 15.2775C13.9304 14.9936 14.5161 14.513 14.9281 13.8963C15.3402 13.2796 15.5601 12.5546 15.5601 11.8129C15.5601 10.8184 15.165 9.86453 14.4618 9.16127C13.7585 8.458 12.8047 8.06292 11.8101 8.06292Z")]),S)])),rC:Ce($([a(Pe,$([ye("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),S)])),rL:Ce($([a(Pe,$([ye("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),S)])),rM:Ce($([a(Pe,$([ye("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z")]),S)])),rO:Ce($([a(Pe,$([ye("M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z")]),S)])),sf:Ce($([a(Pe,$([ye("M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10H18C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7957 12 18 12H16C15.2043 12 14.4413 11.6839 13.8787 11.1213C13.3161 10.5587 13 9.79565 13 9V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H16ZM13.8787 14.8787C14.4413 14.3161 15.2043 14 16 14H18C18.7957 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2043 21 17V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V17C13 16.2043 13.3161 15.4413 13.8787 14.8787Z")]),S)])),sj:Ce($([a(Pe,$([ye("M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z")]),S)])),st:Ce($([a(Pe,$([ye("M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z")]),S)])),sH:Ce($([a(Pe,$([ye("M12 22C17.523 22 22 17.523 22 12C22 11.537 21.306 11.46 21.067 11.857C20.5572 12.7013 19.862 13.4186 19.034 13.9545C18.206 14.4903 17.2669 14.8307 16.2878 14.9499C15.3088 15.0691 14.3154 14.9639 13.383 14.6423C12.4507 14.3207 11.6037 13.7911 10.9063 13.0937C10.2089 12.3963 9.67932 11.5493 9.35772 10.617C9.03613 9.68457 8.93093 8.69123 9.0501 7.71217C9.16926 6.73311 9.50967 5.794 10.0455 4.96599C10.5814 4.13797 11.2987 3.44275 12.143 2.933C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z")]),S)])),kl:Ce($([a(Pe,$([ye("M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z")]),S)])),tf:Ce($([a(Pe,$([ye("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),S)])),tg:Ce($([a(Pe,$([ye("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),S)])),tm:Ce($([a(Pe,$([ye("M7 5V19L18 12L7 5Z")]),S)])),tn:Ce($([a(Pe,$([ye("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),S)])),to:Ce($([a(Pe,$([ye("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),S)])),tA:Ce($([a(Pe,$([ye("M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z")]),S)])),tC:Ce($([a(Pe,$([ye("M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34001 8 3.76001 10.42 2.06001 13.93C1.74001 14.6 2.10001 15.4 2.81001 15.64C3.40001 15.84 4.04001 15.56 4.31001 15C5.61001 12.34 8.34001 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z")]),S)])),tI:Ce($([a(Pe,$([ye("M7.20679 2.29279C7.39426 2.48031 7.49957 2.73462 7.49957 2.99979C7.49957 3.26495 7.39426 3.51926 7.20679 3.70679L5.41379 5.49979H13.2498C14.832 5.49979 16.3788 5.96898 17.6943 6.84803C19.0099 7.72708 20.0353 8.97651 20.6408 10.4383C21.2463 11.9001 21.4048 13.5087 21.0961 15.0605C20.7874 16.6124 20.0255 18.0378 18.9066 19.1566C17.7878 20.2755 16.3624 21.0374 14.8105 21.3461C13.2587 21.6548 11.6501 21.4963 10.1883 20.8908C8.72651 20.2853 7.47708 19.2599 6.59803 17.9443C5.71898 16.6288 5.24979 15.082 5.24979 13.4998C5.24979 13.2346 5.35514 12.9802 5.54268 12.7927C5.73022 12.6051 5.98457 12.4998 6.24979 12.4998C6.515 12.4998 6.76936 12.6051 6.95689 12.7927C7.14443 12.9802 7.24979 13.2346 7.24979 13.4998C7.24979 14.6865 7.60168 15.8465 8.26097 16.8332C8.92026 17.8199 9.85733 18.5889 10.9537 19.0431C12.05 19.4972 13.2564 19.616 14.4203 19.3845C15.5842 19.153 16.6533 18.5815 17.4924 17.7424C18.3315 16.9033 18.903 15.8342 19.1345 14.6703C19.366 13.5064 19.2472 12.3 18.7931 11.2037C18.3389 10.1073 17.5699 9.17026 16.5832 8.51097C15.5965 7.85168 14.4365 7.49979 13.2498 7.49979H5.41379L7.20679 9.29279C7.38894 9.48139 7.48974 9.73399 7.48746 9.99619C7.48518 10.2584 7.38001 10.5092 7.1946 10.6946C7.0092 10.88 6.75838 10.9852 6.49619 10.9875C6.23399 10.9897 5.98139 10.8889 5.79279 10.7068L2.29279 7.20679C2.10532 7.01926 2 6.76495 2 6.49979C2 6.23462 2.10532 5.98031 2.29279 5.79279L5.79279 2.29279C5.98031 2.10532 6.23462 2 6.49979 2C6.76495 2 7.01926 2.10532 7.20679 2.29279Z")]),S)])),tR:Ce($([a(Pe,$([ye("M21 7V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H17L21 7ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z")]),S)])),t1:Ce($([a(Pe,$([ye("M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z")]),S)])),t6:Ce($([a(Pe,$([ye("M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z")]),S)])),t9:Ce($([a(Pe,$([ye("M8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z")]),S)])),ul:Ce($([a(Pe,$([ye("M11.9989 19C12.2641 19 12.5185 19.1054 12.706 19.2929C12.8935 19.4804 12.9989 19.7348 12.9989 20V21C12.9989 21.2652 12.8935 21.5196 12.706 21.7071C12.5185 21.8946 12.2641 22 11.9989 22C11.7337 22 11.4793 21.8946 11.2918 21.7071C11.1042 21.5196 10.9989 21.2652 10.9989 21V20C10.9989 19.7348 11.1042 19.4804 11.2918 19.2929C11.4793 19.1054 11.7337 19 11.9989 19ZM18.3629 16.95L19.0699 17.657C19.252 17.8456 19.3528 18.0982 19.3506 18.3604C19.3483 18.6226 19.2431 18.8734 19.0577 19.0588C18.8723 19.2442 18.6215 19.3494 18.3593 19.3517C18.0971 19.354 17.8445 19.2532 17.6559 19.071L16.9489 18.364C16.7667 18.1754 16.6659 17.9228 16.6682 17.6606C16.6705 17.3984 16.7757 17.1476 16.9611 16.9622C17.1465 16.7768 17.3973 16.6716 17.6595 16.6693C17.9217 16.667 18.1743 16.7678 18.3629 16.95ZM5.63489 16.95C5.81485 16.7707 6.05633 16.6665 6.31028 16.6588C6.56423 16.651 6.81161 16.7402 7.00217 16.9082C7.19274 17.0763 7.3122 17.3106 7.33629 17.5635C7.36038 17.8164 7.2873 18.069 7.13189 18.27L7.04889 18.364L6.34189 19.071C6.16193 19.2503 5.92046 19.3545 5.66651 19.3622C5.41256 19.37 5.16518 19.2808 4.97461 19.1128C4.78405 18.9447 4.66459 18.7104 4.64049 18.4575C4.6164 18.2046 4.68948 17.952 4.84489 17.751L4.92789 17.657L5.63489 16.95ZM11.9989 6C13.5902 6 15.1163 6.63214 16.2415 7.75736C17.3668 8.88258 17.9989 10.4087 17.9989 12C17.9989 13.5913 17.3668 15.1174 16.2415 16.2426C15.1163 17.3679 13.5902 18 11.9989 18C10.4076 18 8.88147 17.3679 7.75625 16.2426C6.63103 15.1174 5.99889 13.5913 5.99889 12C5.99889 10.4087 6.63103 8.88258 7.75625 7.75736C8.88147 6.63214 10.4076 6 11.9989 6ZM3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889ZM20.9989 11C21.2641 11 21.5185 11.1054 21.706 11.2929C21.8935 11.4804 21.9989 11.7348 21.9989 12C21.9989 12.2652 21.8935 12.5196 21.706 12.7071C21.5185 12.8946 21.2641 13 20.9989 13H19.9989C19.7337 13 19.4793 12.8946 19.2918 12.7071C19.1042 12.5196 18.9989 12.2652 18.9989 12C18.9989 11.7348 19.1042 11.4804 19.2918 11.2929C19.4793 11.1054 19.7337 11 19.9989 11H20.9989ZM4.92789 4.929C5.10008 4.75682 5.32918 4.65339 5.57221 4.63811C5.81524 4.62283 6.05549 4.69675 6.24789 4.846L6.34189 4.929L7.04889 5.636C7.22824 5.81596 7.33237 6.05743 7.34012 6.31138C7.34787 6.56533 7.25868 6.81271 7.09064 7.00328C6.92261 7.19384 6.68834 7.31331 6.43542 7.3374C6.18249 7.36149 5.92988 7.28841 5.72889 7.133L5.63489 7.05L4.92789 6.343C4.74042 6.15547 4.63511 5.90116 4.63511 5.636C4.63511 5.37084 4.74042 5.11653 4.92789 4.929ZM19.0699 4.929C19.2574 5.11653 19.3627 5.37084 19.3627 5.636C19.3627 5.90116 19.2574 6.15547 19.0699 6.343L18.3629 7.05C18.2706 7.14551 18.1603 7.22169 18.0383 7.2741C17.9163 7.32651 17.7851 7.3541 17.6523 7.35525C17.5195 7.3564 17.3878 7.3311 17.2649 7.28082C17.142 7.23054 17.0304 7.15629 16.9365 7.0624C16.8426 6.9685 16.7684 6.85685 16.7181 6.73395C16.6678 6.61106 16.6425 6.47938 16.6436 6.3466C16.6448 6.21382 16.6724 6.0826 16.7248 5.9606C16.7772 5.83859 16.8534 5.72825 16.9489 5.636L17.6559 4.929C17.8434 4.74153 18.0977 4.63621 18.3629 4.63621C18.6281 4.63621 18.8824 4.74153 19.0699 4.929ZM11.9989 2C12.2641 2 12.5185 2.10536 12.706 2.29289C12.8935 2.48043 12.9989 2.73478 12.9989 3V4C12.9989 4.26522 12.8935 4.51957 12.706 4.70711C12.5185 4.89464 12.2641 5 11.9989 5C11.7337 5 11.4793 4.89464 11.2918 4.70711C11.1042 4.51957 10.9989 4.26522 10.9989 4V3C10.9989 2.73478 11.1042 2.48043 11.2918 2.29289C11.4793 2.10536 11.7337 2 11.9989 2Z")]),S)])),us:Ce($([a(Pe,$([Jf("evenodd"),Of("evenodd"),ye("M10.8293 13C10.9398 12.6872 11 12.3506 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15H16C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 12.3506 13.0602 12.6872 13.1707 13H10.8293ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z")]),S)])),uD:Ce($([a(Pe,$([Jf("evenodd"),Of("evenodd"),ye("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),S)])),uE:Ce($([a(Pe,$([ye("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),S)])),uH:Ce($([a(Pe,$([ye("M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z")]),S)])),uM:Ce($([a(Pe,$([ye("M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z")]),S)])),uW:Ce($([a(Pe,$([ye("M4.47 21H19.53C21.07 21 22.03 19.33 21.26 18L13.73 4.98999C12.96 3.65999 11.04 3.65999 10.27 4.98999L2.74 18C1.97 19.33 2.93 21 4.47 21ZM12 14C11.45 14 11 13.55 11 13V11C11 10.45 11.45 9.99999 12 9.99999C12.55 9.99999 13 10.45 13 11V13C13 13.55 12.55 14 12 14ZM13 18H11V16H13V18Z")]),S)])),ve:Ce($([a(Pe,$([ye("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),S)])),vi:Ce($([a(Pe,$([ye("M9.31445 17.5469L8.43555 18.4355L12 22L15.5645 18.4355L14.6855 17.5469L12 20.2324L9.31445 17.5469ZM14.6855 6.45312L15.5645 5.56445L12 2L8.43555 5.56445L9.31445 6.45312L12 3.76758L14.6855 6.45312ZM6.45312 14.6855L3.76758 12L6.45312 9.31445L5.56445 8.43555L2 12L5.56445 15.5645L6.45312 14.6855ZM22 12L18.4355 8.43555L17.5469 9.31445L20.2324 12L17.5469 14.6855L18.4355 15.5645L22 12ZM8.25 15.75H15.75V8.25H8.25V15.75ZM9.5 9.5H14.5V14.5H9.5V9.5Z")]),S)]))},uB=v(function(e,r){return a(ao,$([yi(r),no(e.v(j4(e.bw))),a(er,"aria-label","Close"),Q($([He(T(32)),Ve(T(32)),kn(T(5)),cr(Ye(50)),_c(be),_e(xc),fe(nB),ga(In),Le,ur(Ee),_a(Ee),ln(lr),Wt(ir(.9)),a(U,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),wn($([Wt(ir(1)),_e(x(ah,255,255,255,.18))]))]))]),$([Sr.qA]))}),$B=io("circle"),lB=Pr("cx"),vB=Pr("cy"),sB=Pr("r"),dB=a(V1,$([H1("0 0 24 24"),Tt("currentColor"),ft($([He(T(18)),Ve(T(18))]))]),a(W,function(e){var r=e.a,n=e.b;return a($B,$([lB(ar(r)),vB(ar(n)),sB("2")]),S)},$([P(9,5),P(15,5),P(9,12),P(15,12),P(9,19),P(15,19)]))),I1=se("white-space"),pB=k(function(e,r,n){var t=a(Y,function(o){return l(B1,.45,o.D,r.a1(o))},e);return a(ee,$([Q($([Le,ur(Ee),Fr(pe(0)),Ve(T(th)),xo(T(16)),rB(T(8)),a(U,"gap","12px"),fe(t)])),a(oa,"dblclick",te(r.v(KA(r.bw))))]),$([dB,a(ee,$([Q($([Nf(pe(1)),I1(ch),So(Wf),aB(eB),fe(t),nr(aa.rJ),Gt(T(.6)),Bu(Vu)]))]),$([de(r.dx)])),a(uB,r,n)]))}),Mt=k(function(e,r,n){if(a(ha,n.bw,n.aT)){var t=a(Y,a(Ne,n.a1,gr(.18)),e),o=a(Y,a(Ne,n.a1,gr(.35)),e),c=l(NA,r,n,n.aT),i=n.aT,f=i,u=a(Y4,f.rW,n.bw)+"-body",s=a(Y4,f.rW,n.bw),d=f.rW(n.bw),p="draggable-panel-"+(d+"-titlebar");return a(ee,$([Q($([_e(t),Z4(16),cr(a(la.qp,th/2,1)),l(pt,T(1),wa,o),A1.q0,qr(_i),nr(FA(n.a4)),a(U,"width","-webkit-fit-content"),a(U,"width","fit-content"),a(U,"max-width","calc(100vw - "+(O(2*q1)+"px)")),X4(QA(80)),Le,Ir(Ba),So(Wf),to(pe(Yo.te+a(We,999,n.ay-1-n.dr))),co(yo),a(U,"will-change","transform"),a(U,"user-select","none"),a(U,"-webkit-user-select","none"),ga(UA)])),yi(p),a(nh,"transform",a(EA,n.a4,c))]),$([l(pB,e,n,s),a(YA,u,n.c$)]))}else return de("")}),bB=ke(function(e,r,n,t,o){return n.jG?de(""):l(Mt,e,r,{a4:IA(t.lO),c$:o.c$,bw:o.bw,aT:n.ii,ay:t.ay,dr:t.dr,a1:o.a1,dx:o.dx,v:n.v})}),mB=k(function(e,r,n){if(Oe(n.gu))return de("");var t=S5(n.ii),o=$r(t),c=Pn(a(_n,v(function(f,u){return P(u.bw,f)}),n.gu)),i=Pn(a(W,function(f){return P(f.bw,f)},n.gu));return a(ee,S,$([a(HA,e,n),a(ee,S,a(_n,v(function(f,u){var s=a(Qe,u,i);if(s.$)return de("");var d=s.a;return F(bB,e,r,n,{lO:a(ie,0,a(Qe,u,c)),ay:o,dr:f},d)}),t)),U4(n.ii)]))}),hB=v(function(e,r){var n=function(o){return O(o)+"px"},t=a(h1,e.uY,e.jq);return a(hr,$([a(H,"position","fixed"),a(H,"inset","0"),a(H,"display","flex"),a(H,"align-items","center"),a(H,"justify-content","center"),a(H,"background-color",e.pL)]),$([a(hr,$([a(H,"position","relative"),a(H,"width",n(e.jq.lh)),a(H,"height",n(e.jq.jF)),a(H,"border-radius",n(e.qx)),a(H,"overflow","hidden"),a(H,"box-shadow","0 24px 64px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16)"),a(H,"transform","scale("+(O(t)+")")),a(H,"transform-origin","center")]),$([r]))]))}),gB=Tr(function(e,r,n,t,o,c){var i=a(Qe,c,n.dd);if(i.$)return D;var f=i.a,u=Hn(r.cd),s=Mf({hf:f.hf,b4:f.b4,aF:r.aF,cd:A(r.cd),bw:f.bw,g:n.g,nv:f.nv,nG:ai(r.cd),s8:K$(f),n$:n.n$,aK:f.aK,ct:t,pj:f.pj,ps:rl(r.cd)}),d=l(h4,"play:view",a(e.g6.dA,a(tl,o,s),u),f.aT),p=l(e.g6.gu,s,u,f.aT),g=a(W,function(C){return{c$:a(Uf,Go(c),C.c$),rU:a(Uf,Go(c),C.rU),bw:C.bw,t2:C.t2,a1:C.a1,dx:C.dx}},p),_=Yn(l(mB,u,s,{jG:s.ps,ii:f.ii,gu:g,v:P5(c)})),b=oe(r.aF,A(c)),h=a(Ie,function(C){return C.bn},Hn(r.cd)),y=b?"4px solid "+ge(h):"none";return A(P(c,a(hr,$([H4(c),a(H,"outline",y),a(H,"border-radius","inherit")]),$([(function(){if(o.$)return re;var C=o.a;return hB({pL:ge(a(Ie,function(j){return j.kX},u)),qx:PA(r.cd),jq:C,uY:n.g.dp})})()(a(Yi,Go(c),d)),_]))))}),_B=v(function(e,r){return a(Iu,e,r2(r))}),F1={$:2},yB=function(e){return{$:1,a:e}},jl=function(e){return{$:0,a:e}},Qf=12,wl=72,fo=function(e){switch(e){case 0:return{pp:jl(wl),pq:oo(Qf)};case 1:return{pp:jl(wl+44),pq:oo(Qf+44)};case 2:return{pp:Q4(12),pq:oo(Qf)};case 3:return{pp:F1,pq:oo(100)};case 4:return{pp:F1,pq:yB(40)};case 5:return{pp:jl(wl),pq:oo(Qf)};case 6:return{pp:F1,pq:oo(80)};default:return{pp:jl(wl),pq:oo(Qf)}}},Va=function(e){switch(e){case 0:return a(Ne,function(r){return r.kl},function(r){return r.pT});case 1:return a(Ne,function(r){return r.kl},function(r){return r.sm});case 2:return a(Ne,function(r){return r.kl},function(r){return r.rE});case 3:return a(Ne,function(r){return r.kl},function(r){return r.vd});case 4:return a(Ne,function(r){return r.kl},function(r){return r.tB});case 5:return function(r){return r.bn};case 6:return function(r){return r.bn};default:return a(Ne,function(r){return r.kl},function(r){return r.qC})}},ih=320,kl=se("flex-grow"),fh=function(e){return a(ee,$([Q($([Ve(T(1)),kl(pe(1)),a(U,"background-color",ge(a(Ie,function(r){return r.i9},e)))]))]),S)},uh=v(function(e,r){return a(ee,$([Q($([Le,ur(Ee),a(U,"gap","14px"),Wr(T(18))]))]),$([fh(e),a(ee,$([Q($([a(U,"font-family",zr.uG),nr(aa.rJ),Gt(mt(.18)),Bu(Vu),fe(a(Y,function(n){return n.k4},e)),Fr(pe(0)),a(U,"white-space","nowrap")]))]),$([de(r)])),fh(e)]))}),CB=v(function(e,r){return{$:4,a:e,b:r}}),PB=v(function(e,r){return{$:3,a:e,b:r}}),SB=v(function(e,r){return{$:0,a:e,b:r}}),xB=v(function(e,r){return{$:2,a:e,b:r}}),jB=v(function(e,r){return{$:5,a:e,b:r}}),wB=v(function(e,r){return{$:1,a:e,b:r}}),U1=se("space-between"),ya=Sn("span"),$h=v(function(e,r){return a(ee,$([Q($([Le,ur(Ee),_a(U1),a(U,"gap","12px"),a(vr,T(10),be)]))]),$([a(ya,$([Q($([fe(a(Y,function(n){return n.k5},e)),nr(aa.jM),a(U,"font-family",zr.uG)]))]),$([de(r.jM)])),r.ez]))}),kB=function(e){var r=e.nw-e.nB,n=r>0?100*(e.uQ-e.nB)/r:0;return a2({jw:n,jZ:ar(e.nw),j1:ar(e.nB),kh:function(t){return e.ib(a(ie,e.uQ,Sf(t)))},kS:"1",le:ar(e.uQ)})},Ll=function(e){return a(U,"border-color",e.uQ)},LB=(function(){var e="#6D6553",r="#A39980";return"linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 0 0 / 8px 8px,"+(" linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 4px 4px / 8px 8px,"+(" "+r))))))))))})(),TB=se("display"),Tl=zu("focus"),E1=function(e){return nr($([a(U,"outline","3px solid "+ge(a(gr,.25,e))),a(U,"outline-offset","0")]))},MB={qQ:0,uQ:"inline-block"},R1="ui-color-swatch-popover",Zf={i4:0,ha:0,uQ:"border-box"},Xf=se("box-sizing"),zB=290,DB=function(e){var r=Ot(e);if(r.$)return 0;var n=r.a;return l(pr,0,1,n)},G1=v(function(e,r){var n=(function(){var c=r.iP;if(c.$)return S;var i=c.a;return $([a(ya,$([Q($([a(U,"font-family",zr.sG),Br(T(13)),Dr(pe(600)),He(T(40)),Fr(pe(0)),a(U,"text-align","right"),fe(a(Y,function(f){return f.k5},e))]))]),$([de(i)]))])})(),t=a(Mc,$([Dc("range"),Pv("0"),Cv("1"),jv("0.01"),qc(O(r.uQ)),Xi(function(c){return r.ib(DB(c))}),To(r.iq),a(er,"aria-label",r.jM),Q($([Nf(pe(1)),Ve(T(26)),a(U,"-webkit-appearance","none"),a(U,"appearance","none"),a(U,"--track",r.hI),a(U,"background-color","transparent"),ln(lr),a(U,"cursor","grab"),a(U,"touch-action","none"),kn(be)]))]),S),o=a(ya,$([Q($([a(U,"font-family",zr.sG),Br(T(14)),Dr(pe(700)),He(T(18)),Fr(pe(0)),fe(a(Y,function(c){return c.k5},e))]))]),$([de(r.jM)]));return a(ee,$([Q($([Le,ur(Ee),a(U,"gap","10px")]))]),X($([o,t]),n))}),lh="linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 0 0 / 14px 14px, linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 7px 7px / 14px 14px, #a39980",qB=v(function(e,r){var n=r.uQ,t="linear-gradient(to right, transparent, "+(ge(a(gr,1,n))+("), "+lh));return a(G1,e,{hI:t,jM:"\u03B1",ib:function(o){return r.ib(B(n,{aO:o}))},iq:"ui-hsla-alpha",iP:A(ar(Ea(n.aO*100))+"%"),uQ:n.aO})}),AB=v(function(e,r){var n=we(e-r);return a(We,n,1-n)}),Ha=k(function(e,r,n){return{aO:1,aQ:e,C:n,aZ:r}}),vh=$([l(Ha,6/360,.9,.62),l(Ha,33/360,1,.55),l(Ha,46/360,1,.55),l(Ha,80/360,.7,.52),l(Ha,150/360,.65,.46),l(Ha,172/360,.75,.45),l(Ha,185/360,1,.46),l(Ha,217/360,.88,.58),l(Ha,239/360,.84,.67),l(Ha,270/360,.8,.65),l(Ha,330/360,1,.69),l(Ha,350/360,.9,.63)]),Yf=I6,BB=function(e){return a(ie,0,a(he,On,_r(a(Yf,H$,a(_n,v(function(r,n){return P(r,a(AB,n.aQ,e.aQ))}),vh)))))},VB=function(e){return e?"0 0 0 3px rgba(0, 0, 0, 0.55), 0 0 0 6px #fff, 0 4px 10px -3px rgba(0, 0, 0, 0.5)":"inset 0 0 0 1px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.5)"},sh=32,HB=k(function(e,r,n){return a(ao,$([no(e.ib(a(gr,e.uQ.aO,n))),a(er,"aria-label","preset colour"),Q($([He(T(sh)),Ve(T(sh)),Fr(pe(0)),cr(Ye(50)),_c(be),kn(be),ga(In),_e(or(n)),a(U,"box-shadow",VB(r))]))]),S)}),IB=function(e){var r=e.uQ.aZ<.08?-1:BB(e.uQ);return a(ee,$([Q($([a(U,"display","grid"),a(U,"grid-template-columns","repeat(6, 1fr)"),a(U,"gap","10px"),a(U,"justify-items","center")]))]),a(_n,v(function(n,t){return l(HB,e,oe(n,r),t)}),vh))},FB=v(function(e,r){return a(q,function(n){var t=gp(n);if(t.$)return kt("invalid hex");var o=t.a;return te(r(a(gr,e.aO,o)))},xv)}),UB=I4,dh=UB,W1=k(function(e,r,n){var t=n<0?n+1:n>1?n-1:n;return ae(t,1/6)<0?e+(r-e)*6*t:ae(t,1/2)<0?r:ae(t,2/3)<0?e+(r-e)*(2/3-t)*6:e}),EB=k(function(e,r,n){if(r<1e-10)return{i3:n,jD:n,kB:n};var t=n<.5?n*(1+r):n+r-n*r,o=2*n-t;return{i3:l(W1,o,t,e-1/3),jD:l(W1,o,t,e),kB:l(W1,o,t,e+1/3)}}),ph=function(e){switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";default:return"f"}},N1=function(e){var r=l(pr,0,255,e),n=r/16|0,t=a(Sa,16,r);return X(vt(ph(n)),vt(ph(t)))},RB=function(e){var r=l(EB,e.aQ,e.aZ,e.C);return"#"+(N1(Ea(r.kB*255))+(N1(Ea(r.jD*255))+N1(Ea(r.i3*255))))},GB=v(function(e,r){var n=k5(RB(r.uQ));return l(dh,"div",$([Q($([Le,ur(Ee),a(U,"gap","12px")]))]),$([P(n,a(Mc,$([Dc("text"),a(er,"value",n),a(er,"pattern","#?[0-9A-Fa-f]{6}"),a(er,"spellcheck","false"),a(er,"aria-label","Hex colour"),To("ui-hex-input"),a(oa,"change",a(FB,r.uQ,r.ib)),Q($([He(Ye(50)),Fr(pe(0)),Xf(Zf),a(U,"font-family",zr.sG),Br(T(15)),Dr(pe(600)),Gt(mt(.06)),Bu(Vu),fe(a(Y,function(t){return t.k4},e)),_e(a(Y,function(t){return t.D},e)),l(pt,T(1),wa,a(Y,function(t){return t.i9},e)),cr(la.ss),a(vr,T(9),T(12)),ln(lr)]))]),S)),P("warn",a(ee,$([To("ui-hex-warn")]),$([de("invalid hex")])))]))}),O1=k(function(e,r,n){return"hsl("+(O(e*360)+(", "+(O(r*100)+("%, "+(O(n*100)+"%)")))))}),WB=v(function(e,r){var n=r.uQ,t="linear-gradient(to right, #000, "+(l(O1,n.aQ,n.aZ,.5)+", #fff)");return a(G1,e,{hI:t,jM:"L",ib:function(o){return r.ib(B(n,{C:o}))},iq:"ui-hsla-rail",iP:D,uQ:n.C})}),bh=120,NB=function(e){return a(ee,$([Q($([Le,_a(Ee)]))]),$([a(ee,$([Q($([qr(gi),He(T(bh)),Ve(T(bh)),cr(Ye(50)),So(Wf),a(U,"background",lh),a(U,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 12px 26px -10px rgba(0, 0, 0, 0.6)")]))]),$([a(ee,$([Q($([qr(ro),pn(be),ja(be),Ko(be),rc(be),a(U,"background",ge(e))]))]),S)]))]))},OB=v(function(e,r){var n=r.uQ,t="linear-gradient(to right, "+(l(O1,n.aQ,0,n.C)+(", "+(l(O1,n.aQ,1,n.C)+")")));return a(G1,e,{hI:t,jM:"S",ib:function(o){return r.ib(B(n,{aZ:o}))},iq:"ui-hsla-rail",iP:D,uQ:n.aZ})}),JB=v(function(e,r){return a(ee,$([Q($([Le,Ir(Ba),a(U,"gap","18px"),He(T(zB)),Xf(Zf),kn(T(18)),_e(a(Y,function(n){return n.kV},e)),l(pt,T(1),wa,a(Y,function(n){return n.i9},e)),cr(la.u4),fe(a(Y,function(n){return n.k4},e)),a(U,"font-family",zr.uG)]))]),$([NB(r.uQ),a(GB,e,r),IB(r),a(OB,e,r),a(WB,e,r),a(qB,e,r)]))}),QB=function(e){return B(e,{aO:1})},ZB=v(function(e,r){var n=ge(r.uQ),t=ge(QB(r.uQ));return a(ee,$([Q($([TB(MB)]))]),$([a(ao,$([a(er,"popovertarget",r.bw),a(er,"aria-label","Pick colour"),a(er,"aria-haspopup","dialog"),a(nh,"background","linear-gradient(135deg, transparent 50%, "+(t+(" 50%), "+("linear-gradient(135deg, "+(n+(", "+(n+("), "+LB)))))))),Q($([He(T(32)),Ve(T(32)),kn(be),l(pt,T(1),wa,a(Y,function(o){return o.i9},e)),cr(la.ss),ga(In),So(Wf),a(U,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.4)"),a(U,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),wn($([Ll(a(Y,function(o){return o.bn},e))])),Tl($([E1(a(Ie,function(o){return o.bn},e))]))]))]),S),a(ee,$([yi(r.bw),a(er,"popover","auto"),a(er,"data-popover",""),To(R1)]),$([a(JB,e,{ib:r.ib,uQ:r.uQ})]))]))}),mh=se("baseline"),Ml=v(function(e,r){return a(ee,$([Q($([a(vr,T(10),be)]))]),$([a(ee,$([Q($([Le,ur(mh),_a(U1),a(U,"gap","12px"),Wr(T(8))]))]),$([a(ya,$([Q($([fe(a(Y,function(n){return n.k5},e)),nr(aa.jM),a(U,"font-family",zr.uG)]))]),$([de(r.jM)])),(function(){var n=r.uQ;if(n.$)return de("");var t=n.a;return a(ya,$([Q($([fe(a(Y,function(o){return o.bn},e)),nr(aa.jM),Dr(pe(600)),a(U,"font-family",zr.sG),a(U,"font-feature-settings",'"tnum"')]))]),$([de(t)]))})()])),r.ez]))}),hh=gt("placeholder"),Ci={si:T(16),ss:T(12),oC:T(8),u4:T(24),u5:T(4),u6:T(32),u7:T(2),u8:T(48)},XB=v(function(e,r){return a(Mc,$([Dc("text"),qc(r.uQ),hh(r.ky),Xi(r.ib),Q($([He(Ye(100)),a(vr,T(10),Ci.ss),_e(a(Y,function(n){return n.kV},e)),fe(a(Y,function(n){return n.k4},e)),l(pt,T(1),wa,a(Y,function(n){return n.i9},e)),cr(la.ss),a(U,"font-family",zr.sG),nr(aa.c$),ln(lr),a(U,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Tl($([Ll(a(Y,function(n){return n.bn},e)),E1(a(Ie,function(n){return n.bn},e))])),a(qu,"placeholder",$([fe(a(Y,function(n){return n.k2},e))]))]))]),S)}),J1=rh("padding"),YB=Sn("option"),gh=v(function(e,r){return a(e2,e,Vs(r))}),KB=gh("selected"),eV=v(function(e,r){return a(YB,$([qc(r),KB(oe(r,e))]),$([de(r)]))}),rV=Sn("select"),aV=v(function(e,r){return a(rV,$([a(oa,"change",a(Ze,r.s2,xv)),Q($([He(Ye(100)),a(U,"appearance","none"),a(U,"-webkit-appearance","none"),_e(a(Y,function(n){return n.kV},e)),fe(a(Y,function(n){return n.k4},e)),l(pt,T(1),wa,a(Y,function(n){return n.i9},e)),cr(la.ss),x(J1,T(10),T(34),T(10),Ci.ss),a(U,"font-family",zr.uG),nr(aa.c$),Dr(pe(500)),ga(In),a(U,"background-image",`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D4A244' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M3 5l3 3 3-3'/></svg>")`),a(U,"background-repeat","no-repeat"),a(U,"background-position","right 12px center"),ln(lr),a(U,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), background-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),wn($([Ll(a(Y,function(n){return n.iU},e)),_e(a(Y,function(n){return n.kW},e))])),Tl($([Ll(a(Y,function(n){return n.bn},e)),a(U,"box-shadow","0 0 0 3px "+ge(a(gr,.25,a(Ie,function(n){return n.bn},e))))]))]))]),a(W,eV(r.tY),r.s9))}),nV=qu("after"),tV=Z(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),Kf=Z(function(e,r,n,t){return x(tV,e,r,n,t)}),zl={cF:{pP:200,rk:120,t5:320},hy:{q2:x(Kf,.33,1,.68,1),jE:x(Kf,.45,.05,.25,1),rZ:x(Kf,.65,0,.35,1),t8:x(Kf,.2,.9,.25,1),ua:x(Kf,.34,1.56,.64,1)}},Dl=function(e){return Pl($([e]))},Q1=function(e){var r=e.uQ;return{k8:0,uQ:a(Pc,"translateX",$([r]))}},oV=v(function(e,r){var n=r.r8?a(Y,function(i){return i.bn},e):a(Y,function(i){return i.i9},e),t=r.r8?20:0,o=r.r8?a(U,"box-shadow","0 0 14px "+ge(a(gr,.4,a(Ie,function(i){return i.bn},e)))):eh(lr),c=r.r8?a(Y,function(i){return i.k4},e):a(Y,function(i){return i.k2},e);return a(ao,$([Q($([qr(gi),He(T(46)),Ve(T(26)),_e(n),cr(la.tj),_c(be),ga(In),ln(lr),Sl($([l(z1,220,0,zl.hy.jE)])),Fr(pe(0)),nV($([a(U,"content",'""'),qr(ro),pn(T(2)),ja(T(2)),He(T(22)),Ve(T(22)),_e(c),cr(Ye(50)),Dl(Q1(T(t))),o,Sl($([l(W4,220,0,zl.hy.ua),l(z1,220,0,zl.hy.jE),l(G4,220,0,zl.hy.jE)]))]))])),no(r.s3),a(er,"aria-pressed",r.r8?"true":"false"),a(er,"aria-label",r.jM)]),S)}),cV=v(function(e,r){var n=r.a,t=r.b;switch(t.$){case 0:var o=t.a,i=o.a,f=o.b,u=t.b;return a(Ml,e,{ez:n2({nw:f,nB:i,ib:SB(n),uf:.01*(f-i),uQ:u}),jM:n,uQ:A(a(fi,2,u))});case 2:var c=t.a,i=c.a,f=c.b,u=t.b;return a(Ml,e,{ez:kB({nw:f,nB:i,ib:xB(n),uQ:u}),jM:n,uQ:A(ar(u))});case 4:var u=t.a;return a($h,e,{ez:a(oV,e,{r8:u,jM:n,s3:a(CB,n,!u)}),jM:n});case 1:var u=t.a;return a(Ml,e,{ez:a(XB,e,{ib:wB(n),ky:"",uQ:u}),jM:n,uQ:D});case 3:var u=t.a;return a($h,e,{ez:a(ZB,e,{bw:"play-config-color-"+n,ib:PB(n),uQ:u}),jM:n});default:var s=t.a;return a(Ml,e,{ez:a(aV,e,{s2:jB(n),s9:W$(s),tY:Ro(s)}),jM:n,uQ:D})}}),iV=v(function(e,r){return a(ee,$([Q($([a(vr,be,T(20))]))]),$([a(uh,e,r.sM),a(ee,S,a(W,cV(e),r.a6))]))}),tN=1,oN=1,fV=Z(function(e,r,n,t){return{bq:r,by:n,bD:t,bJ:e}}),uV=F(vi,fV,a(w,"top",N),a(w,"bottom",N),a(w,"left",N),a(w,"right",N)),_h=a(zc,$(["currentTarget","boundingClientRect"]),uV),$V=function(e){return a(oa,"click",a(Ze,e,_h))},lV=v(function(e,r){var n=(function(){return r?P(40,Ci.si):P(32,Ci.ss)})(),t=n.a,o=n.b;return $([Ve(T(t)),a(vr,be,o),cr(la.tj),_c(be),ga(In),ln(lr),a(U,"font-family",zr.uG),nr(aa.jM),Le,ur(Ee),_a(Ee),a(U,"gap","6px"),a(U,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Tl($([E1(a(Ie,function(c){return c.bn},e))]))])}),ql=function(e){return a(U,"box-shadow",av($(["inset ",O(e*1.5),"px ",O(e*1.5),"px ",O(e*3),"px ",ge(a(gr,.6,bo)),", inset 0 0 0 1px ",ge(a(gr,.35,bo))])))},Z1=v(function(e,r){return F(Gf,be,be,be,T(e),or(r))}),vV=k(function(e,r,n){var t=v(function(i,f){return n?X(i,f):i});switch(r){case 0:var o=$([_e(a(Y,function(i){return i.bn},e)),fe(a(Y,function(i){return l(B1,.6,i.bn,i.k4)},e)),a(Z1,1,a(Ie,function(i){return i.iU},e))]),c=$([_e(a(Y,function(i){return i.iU},e)),ql(1.5)]);return X(a(t,o,c),$([wn($([_e(a(Y,function(i){return i.iV},e))])),hi(c)]));case 1:var o=$([_e(a(Y,function(i){return i.kV},e)),fe(a(Y,function(i){return i.k4},e)),a(Z1,1,a(Ie,function(i){return i.i9},e))]),c=$([_e(a(Y,function(i){return i.kY},e)),ql(1.5)]);return X(a(t,o,c),$([wn($([_e(a(Y,function(i){return i.kW},e))])),hi(c)]));default:var o=$([_e(xc),fe(a(Y,function(i){return i.k5},e))]),c=$([_e(a(Y,function(i){return i.kY},e)),fe(a(Y,function(i){return i.k4},e)),ql(1.5)]);return X(a(t,o,c),$([wn($([_e(a(Y,function(i){return i.kV},e)),fe(a(Y,function(i){return i.k4},e))])),hi(c)]))}}),yh=k(function(e,r,n){var t=(function(){var o=r.U;return o?18:16})();return a(ao,a(z,Q(X(a(lV,e,r.U),l(vV,e,r.uR,r.r5))),n),(function(){var o=r.rU;if(o.$)return $([de(r.jM)]);var c=o.a;return $([a(ya,$([Q($([Le,ur(Ee),_a(Ee),He(T(t)),Ve(T(t)),Fr(pe(0))]))]),$([c])),de(r.jM)])})())}),sV=v(function(e,r){return l(yh,e,{rU:D,r5:!1,jM:r.jM,U:1,uR:1},$([$V(r.gq)]))}),dV=function(e){return a(ee,$([Q($([x(J1,T(8),T(20),T(36),T(20)),Le,_a(Ee)]))]),$([a(sV,e.e,{jM:"Reset Configurations",gq:e.hm.nU})]))},pV=function(e){var r=Oe(e.qo.b4)?de(""):dV(e);return a(ee,$([Q($([He(T(ih))]))]),$([r,a(Uf,e.gr,a(ee,$([Q($([Le,Ir(Ba),a(U,"gap","18px"),rv(T(16))]))]),a(W,iV(e.e),e.qo.b4)))]))},bV=function(e){return!e.bL.f8||e.ps?de(""):l(Mt,e.e,e.qo,{a4:fo(0),c$:pV(e),bw:0,aT:e.h,ay:e.ab.ay,dr:e.ab.ds(0),a1:Va(0),dx:"Configurations",v:e.aw})},X1=function(e){return{$:1,a:e}},cN=0,iN=0,mV=function(e){return e?Sr.qN:Sr.qO},hV=function(e){return e?"Landscape":"Portrait"},fN=1,uN=3,$N=2,gV={$:2},_V=v(function(e,r){return{$:0,a:e,b:r}}),yV={$:1},CV={$:3},PV=function(e){return a(oa,"mousedown",te(e))},SV=function(e){return a(oa,"mouseleave",te(e))},Fn=v(function(e,r){return $([a(oa,"mouseenter",a(Ze,function(n){return e(a(_V,r,n))},_h)),SV(e(yV)),PV(e(gV)),a(oa,"mousemove",te(e(CV)))])}),Y1=v(function(e,r){var n=$r(r.sc),t=function(c){return n<=1?0:c?oe(c,n-1)?3:2:1},o=v(function(c,i){var f=r.sa(i);return a(J4,e,{i1:"radio",i2:P("aria-checked",E4(f)),rU:r.rU(i),r8:f,jM:r.sb(i),gq:r.s2(i),ka:r.tZ(i),d1:r.d1,tt:t(c),cw:a(Fn,r.s4,{eG:r.uB,jM:r.sb(i),t2:r.t2(i)})})});return l(R4,r.d1,$([a(er,"role","radiogroup"),a(er,"aria-label",r.jM)]),a(_n,o,r.sc))}),xV=Z(function(e,r,n,t){return a(ee,$([Q($([Le,_a(Ee),a(vr,T(6),T(0))]))]),$([a(Y1,e,{rU:mV,sa:Ka(t),sb:hV,sc:$([0,1]),jM:"Orientation",s2:a(tr,r.v,X1),s4:n,d1:0,tZ:function(o){return function(c){return c.bn}},t2:function(o){return D},uB:0})]))}),eu=function(e){return{ja:a(Y,function(r){return r.ja},e),kK:A1.q0,D:a(Y,function(r){return r.D},e),kZ:a(Y,function(r){return r.kY},e),k2:a(Y,function(r){return r.k2},e),k4:a(Y,function(r){return r.k4},e),k5:a(Y,function(r){return r.k5},e),g_:Yo.te}},jV=function(e){return{$:0,a:e}},Ch=function(e){return{$:3,a:e}},Pi=v(function(e,r){return a(Sv,e,Ch(r))}),wV={$:2},kV={$:1},LV={$:3},TV={$:4},K1=r9,MV=jr(K1,ke(function(e,r,n,t,o){return{iX:t,jl:r,jK:e,j$:o,kL:n}}),a(w,"key",xe),a(w,"ctrlKey",ne),a(w,"shiftKey",ne),a(w,"altKey",ne),a(w,"metaKey",ne)),zV=v(function(e,r){return a(Ze,function(n){var t=n.jK,o=n.jl,c=n.kL,i=n.iX,f=n.j$,u=o||i||f;if(u)return{Q:e.v(qa),T:!1,W:!1};if(t==="Tab")return{Q:e.v(qa),T:!0,W:!0};if(t==="ArrowUp")return{Q:e.v(kV),T:!0,W:!0};if(t==="ArrowDown")return{Q:e.v(wV),T:!0,W:!0};if(t==="Enter")return{Q:e.v(LV),T:!0,W:!0};if(t==="Escape")return{Q:e.v(TV),T:!0,W:!0};if(t==="ArrowLeft"||t==="ArrowRight"){if(r.$)return{Q:e.v(qa),T:!1,W:!1};var s=r.a;return{Q:t==="ArrowLeft"?s.s$:s.s1,T:!0,W:!0}}else return{Q:e.v(qa),T:!1,W:!1}},MV)}),Ph=5,DV=function(e){return l(bt,e,!1,"")},Sh=DV,qV={T:!0,W:!1},AV=v(function(e,r){return a(Iu,e,Ch(r))}),BV=ke(function(e,r,n,t,o){return{qt:o,r9:t,to:r,tq:n,tr:e}}),VV=ke(function(e,r,n,t,o){return{jF:r,tw:n,uv:t,uw:o,lh:e}}),HV=jr(K1,VV,a(w,"width",N),a(w,"height",N),a(w,"pressure",N),a(w,"tiltX",N),a(w,"tiltY",N)),IV=Tr(function(e,r,n,t,o,c){return{p5:r,qj:n,ba:e,s_:t,tb:o,tS:c}}),lN=4,vN=0,sN=5,dN=1,pN=2,bN=3,FV=function(e){switch(e){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;default:return 0}},UV=a(Ze,FV,a(w,"button",Fi)),EV=l(Xn,v(function(e,r){return P(e,r)}),a(w,"clientX",N),a(w,"clientY",N)),RV=Z(function(e,r,n,t){return{iX:e,jl:r,j$:n,kL:t}}),GV=F(vi,RV,a(w,"altKey",ne),a(w,"ctrlKey",ne),a(w,"metaKey",ne),a(w,"shiftKey",ne)),WV=l(Xn,v(function(e,r){return P(e,r)}),a(w,"offsetX",N),a(w,"offsetY",N)),NV=l(Xn,v(function(e,r){return P(e,r)}),a(w,"pageX",N),a(w,"pageY",N)),OV=l(Xn,v(function(e,r){return P(e,r)}),a(w,"screenX",N),a(w,"screenY",N)),JV=Xr(C5,IV,GV,UV,EV,WV,NV,OV),mN=0,hN=2,gN=1,QV=function(e){switch(e){case"pen":return 2;case"touch":return 1;default:return 0}},ZV=a(Ze,QV,xe),XV=jr(K1,BV,a(w,"pointerType",ZV),JV,a(w,"pointerId",Fi),a(w,"isPrimary",ne),HV),YV=k(function(e,r,n){return a(AV,e,a(Ze,function(t){return{Q:n(t),T:r.T,W:r.W}},XV))}),xh=a(YV,"pointerdown",qV),KV=function(e){return{$:5,a:e}},eH=function(e){return{$:6,a:e}},rH=Z(function(e,r,n,t){return a(ee,$([Sh(xh(function(o){return e.v(eH(t))})),no(e.v(KV(t)))]),$([a(r,n,t)]))}),aH=Z(function(e,r,n,t){return Oe(t.a9)?a(ee,$([Q($([Ve(T(e.fa)),Le,ur(Ee),_a(Ee),fe(r.k2),Fr(pe(0))]))]),$([de("No matching items")])):l(dh,"div",$([yi(Zo(e)),Q($([Ve(T(e.fa)),x(J1,T(0),T(4),T(0),T(4)),So(yo),a(U,"overscroll-behavior","contain"),Fr(pe(0)),Le,Ir(Ba)])),Sh(xh(function(o){return e.v(qa)})),a(oa,"scroll",a(Ze,a(Ne,k1,e.v),a(zc,$(["currentTarget","scrollTop"]),N))),a(Pi,"wheel",te({Q:e.v(qa),T:!1,W:!0}))]),(function(){var o=$r(t.a9),c=a(We,o-1,k0((t.bV+e.fa)/eo)+Ph),i=a(me,0,lt(t.bV/eo)-Ph),f=i*eo,u=a(_n,v(function(d,p){var g=i+d;return P(ar(g),x(rH,e,n,oe(g,t.a$),p))}),a(Rt,c-i+1,a(rt,i,t.a9))),s=a(me,0,o-1-c)*eo;return a(z,P("top-spacer",a(ee,$([Q($([Ve(T(f)),Fr(pe(0))]))]),S)),X(u,$([P("bottom-spacer",a(ee,$([Q($([Ve(T(s)),Fr(pe(0))]))]),S))])))})())}),nH=function(e){return{$:9,a:e}},tH=function(e){return a(Ze,function(r){return{Q:e.v(nH(r)),T:!0,W:!0}},a(w,"deltaY",N))},Al=At(function(e,r,n,t,o,c,i){var f=i;return a(ee,$([Q($([fe(r.k5),Le,Ir(Ba),a(U,"gap","8px"),He(Ye(100))])),a(Pi,"keydown",a(zV,e,t)),a(Pi,"mousedown",te({Q:e.v(qa),T:!1,W:!0})),a(Pi,"pointerdown",te({Q:e.v(qa),T:!1,W:!0})),a(Pi,"pointerup",te({Q:e.v(qa),T:!1,W:!0})),a(Pi,"wheel",tH(e))]),X(n,X($([a(Mc,$([Dc("text"),yi(M4(e)),hh(e.ky),Q($([He(Ye(100)),Fr(pe(0)),a(vr,T(8),T(8)),cr(T(4)),ln(lr),_e(r.kZ),fe(r.k4),a(qu,"placeholder",$([fe(r.k2)]))])),Xi(a(Ne,jV,e.v)),qc(f.iB)]),S),x(aH,e,r,o,f)]),c)))}),ru=function(e){return e.C>.55?{aO:1,aQ:0,C:.1,aZ:0}:{aO:1,aQ:0,C:.98,aZ:0}},oH=function(e){return O(e.U.lh)+(" \xD7 "+O(e.U.jF))},jh=k(function(e,r,n){var t=r?nr($([_e(a(Y,function(c){return c.bn},e)),fe(a(Y,a(Ne,function(c){return c.bn},ru),e))])):fe(a(Y,function(c){return c.k4},e)),o=r?a(Y,a(Ne,function(c){return c.bn},ru),e):a(Y,function(c){return c.k5},e);return a(ee,$([Q($([a(vr,T(0),T(12)),Ve(T(32)),Le,ur(Ee),Xf(Zf),a(U,"gap","10px"),t]))]),$([a(ya,$([Q($([kl(pe(1)),Br(T(13))]))]),$([de(n.sM)])),a(ya,$([Q($([Br(T(12)),fe(o)]))]),$([de(oH(n))]))]))}),cH=Z(function(e,r,n,t){var o=t;return Xr(Al,Df(r),eu(e),$([x(xV,e,r,n,o.d1)]),A({s$:r.v(X1(0)),s1:r.v(X1(1))}),jh(e),S,o.bS)}),ed=Z(function(e,r,n,t){return a(ee,$([Q($([qr(_i),pn(be),ja(be),Wt(ir(.001)),co(lr)])),a(er,"inert","")]),$([Xr(Al,B(e,{fR:e.fR+"-warmup"}),r,S,D,n,S,t)]))}),iH=k(function(e,r,n){var t=n;return x(ed,Df(r),eu(e),jh(e),t.bS)}),fH=function(e){if(!e.bL.dO||e.ps)return de("");var r={fR:B5,v:e.kd};return a(ee,S,$([l(Mt,e.e,e.qo,{a4:fo(7),c$:x(cH,e.e,r,e.s4,e.ae),bw:7,aT:e.h,ay:e.ab.ay,dr:e.ab.ds(7),a1:Va(7),dx:"Device",v:e.aw}),l(iH,e.e,r,e.ae)]))},uH=k(function(e,r,n){return(function(t){return l(on,e,t,n.bC)})(l(ve,e,r,n.bv))}),$H=v(function(e,r){return a(tr,a(uH,e,r),ul)}),lH=function(e){var r=e,n=l($H,v(function(c,i){var f=i.a,u=i.b;return P(f+1,u+c.hu)}),P(0,0),r.gB),t=n.a,o=n.b;return t>1&&o>0?A(t/o):D},vH=se("flex-end"),wh=function(e){return e*1e3},sH=function(e){var r=e.uQ;return{k8:0,uQ:a(Pc,"translateY",$([r]))}},dH=function(e){return a(ee,$([Q($([qr(ro),He(Ye(100)),Ve(T(1)),Pl($([sH(Ye(-50))])),_e(or(e.kl.rE)),rc(T(wh(1/60)))]))]),S)},pH=function(e){return X(e.bv,je(e.bC))},bH=a(tr,pH,ul),mH=v(function(e,r){var n=r*1e3;return n<=18?e.kl.rE:n<=33?e.kl.vd:e.kl.tB}),hH=v(function(e,r){return a(ee,$([Q($([Nf(lr),He(T(4)),Ve(T(wh(r))),rc(be),_e(or(a(mH,e,r)))]))]),S)}),gH=v(function(e,r){return a(ee,$([Q($([qr(gi),Ve(T(50)),He(T(t4*4)),So(Wf),_e(or(e.k_))]))]),$([dH(e),a(ee,$([Q($([qr(ro),Ko(be),rc(be),Ve(Ye(100)),Le,Ir(Ef),ur(vH)]))]),a(W,a(Ne,function(n){return n.hu},hH(e)),bH(r)))]))}),kh=v(function(e,r){if(e<0)return r;var n=a(Mn,10,e),t=Fg(n),o=function(c){return c/n};return o(Ea(t(r)))}),_H=v(function(e,r){return e<0?r:a(kh,e,r)}),yH=function(e){return e>=0?"":"-"},au=v(function(e,r){var n=function(t){var o=a(hn,".",t);e:for(;;)if(o.b)if(o.b.b){if(o.b.b.b)break e;var c=o.a,i=o.b,f=i.a;return c+("."+l(Q$,e,"0",f))}else{var c=o.a;return c+("."+a(pc,e,"0"))}else break e;return t};return As(r)?"NaN":Fc(r)?yH(r)+"Infinity":e<=0?O(a(_H,e,r)):n(O(a(kh,e,r)))}),CH=v(function(e,r){return a(ee,$([Q($([fe(or(e.kl.rE))]))]),$([de("Frame Rate: "),de(a(ie,"-",a(he,au(0),r)))]))}),PH=v(function(e,r){var n=r;return a(ee,$([Q($([Le,Ir(Ba),a(U,"gap","8px")]))]),$([a(gH,e,n.gB),a(CH,e,lH(r))]))}),Lh=function(e){return a(se,"animation-duration",e)},SH=function(e){return{$:5,a:e}},Th=function(e){return e.uQ==="none"||e.uQ==="inherit"||e.uQ==="unset"||e.uQ==="initial"?a(se,"animation-name",e):SH(e.uQ)},_N=re,ac=v(function(e,r){return e+(":"+r)}),xH=v(function(e,r){return l(yh,e,{rU:r.rU,r5:r.r5,jM:r.jM,U:r.U,uR:r.uR},$([no(r.gq)]))}),jH=function(e){return oe(e,ll)},wH=function(e){var r=e.a,n=e.b,t=l($a,function(c){var i=c;return i+";"},"",n),o=ar(r)+"%";return o+("{"+(t+"}"))},kH=function(e){return l($a,wH,"",e)},Mh=function(e){return Oe(e)?{jL:0,j7:0,uQ:"none"}:{jL:0,j7:0,uQ:kH(e)}},zh=function(e){return{cF:0,uQ:O(e)+"s"}},LH={$:2},TH={$:3},MH=function(e){return oe(e,ll)?TH:LH},zH=function(e){return{$:3,a:e}},DH=v(function(e,r){return{$:4,a:e,b:r}}),qH=function(e){return DH(a(W,zH,e))},AH=k(function(e,r,n){var t=jH(n),o=t?"Stop profiling":"Start profiling",c=t?a(ee,$([Q($([He(Ye(100)),Ve(Ye(100)),Le,ur(Ee),_a(Ee),fe(a(Y,a(Ne,function(i){return i.kl},function(i){return i.tB}),e)),Th(Mh($([P(0,$([a(ac,"opacity","1")])),P(50,$([a(ac,"opacity","0.35")])),P(100,$([a(ac,"opacity","1")]))]))),Lh(zh(1.2)),a(U,"animation-iteration-count","infinite"),a(U,"animation-timing-function","ease-in-out"),a(qH,$(["(prefers-reduced-motion: reduce)"]),$([a(U,"animation","none")]))]))]),$([Sr.tA])):Sr.tA;return a(ee,$([Q($([Le,_a(Ee),He(Ye(100))]))]),$([a(ee,$([Q($([He(T(160))]))]),$([a(xH,e,{rU:A(c),r5:t,jM:o,gq:r(MH(n)),U:1,uR:1})]))]))}),BH=function(e){var r=e.bL.eU?$([l(AH,e.e,e.gs,e.aJ)]):S;return a(ee,$([Q($([Le,Ir(Ba),a(U,"gap","8px")]))]),a(z,a(PH,dt(e.e),e.db),r))},VH=function(e){return!e.bL.f9||e.ps?de(""):l(Mt,e.e,e.qo,{a4:fo(2),c$:BH(e),bw:2,aT:e.h,ay:e.ab.ay,dr:e.ab.ds(2),a1:Va(2),dx:"Performance",v:e.aw})},nu=function(e){return e?"true":"false"},rd=function(e){var r=e.b;return y4(r)},Wa=k(function(e,r,n){return a(ee,$([Q($([Le,a(U,"gap","16px"),a(vr,T(3),be),ur(mh),a(U,"font-family",zr.sG),Br(T(12)),a(U,"font-feature-settings",'"tnum"')]))]),$([a(ee,$([Q($([fe(a(Y,function(t){return t.k2},e)),He(T(120)),Fr(pe(0))]))]),$([de(r)])),a(ee,$([Q($([fe(a(Y,function(t){return t.k4},e))]))]),$([de(n)]))]))}),Bl=k(function(e,r,n){return a(ee,$([Q($([a(vr,be,T(20))]))]),a(z,a(uh,e,r),n))}),HH=function(e){var r=e.e,n=e.qo;return a(ee,$([Q($([Le,Ir(Ba),a(U,"gap","18px"),a(vr,T(14),be),He(T(ih))]))]),$([l(Bl,r,"Tape",$([l(Wa,r,"frame",ar(rd(e.us))),l(Wa,r,"dt",a(fi,4,n.hu)),l(Wa,r,"clock",a(fi,4,n.hf))])),l(Bl,r,"Pointer",$([l(Wa,r,"x",a(fi,2,n.to.pp)),l(Wa,r,"y",a(fi,2,n.to.pq)),l(Wa,r,"isDown",nu(n.to.r7))])),l(Bl,r,"Keyboard",$([l(Wa,r,"pressed",a(Ar," ",n.hQ.tv)),l(Wa,r,"shift",nu(n.hQ.kL)),l(Wa,r,"ctrl",nu(n.hQ.jl)),l(Wa,r,"meta",nu(n.hQ.j$)),l(Wa,r,"alt",nu(n.hQ.iX))])),l(Bl,r,"Wheel",$([l(Wa,r,"deltaX",O(n.fC.l3)),l(Wa,r,"deltaY",O(n.fC.l4))]))]))},IH=function(e){return!e.bL.ga||e.ps?de(""):l(Mt,e.e,e.qo,{a4:fo(1),c$:HH(e),bw:1,aT:e.h,ay:e.ab.ay,dr:e.ab.ds(1),a1:Va(1),dx:"Inputs",v:e.aw})},yN=1,CN=1,PN=1,Dh={$:1},FH={$:3},UH={$:2},EH=function(e){return{$:0,a:e}},RH=v(function(e,r){return $([_e(xc),fe(a(Y,function(n){return n.k5},e)),a(U,"transition","background-color 120ms cubic-bezier(0.33, 1, 0.68, 1), color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),wn($([_e(a(Y,r,e)),fe(a(Y,a(Ne,function(n){return n.kl},function(n){return n.p3}),e))]))])}),GH=v(function(e,r){var n=function(t){return a(U,"background-color",ge(a(gr,.7,a(Ie,t,e))))};return $([n(function(t){return t.kV}),Z4(16),fe(a(Y,function(t){return t.k5},e)),a(Z1,1,a(Ie,function(t){return t.i9},e)),a(U,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),wn($([n(function(t){return t.kW}),fe(a(Y,r,e))])),hi($([n(function(t){return t.kY}),ql(1.5)]))])}),WH=Z(function(e,r,n,t){var o=(function(){return r?P(36,6):P(24,4)})(),c=o.a,i=o.b,f=$([He(T(c)),Ve(T(c)),kn(T(i)),cr(Ye(50)),ga(In),Le,ur(Ee),_a(Ee),ln(lr)]);return X(f,(function(){return a(n?GH:RH,e,t)})())}),NH=v(function(e,r){return a(ao,X($([Q(X(x(WH,e,r.U,r.qh,r.rQ),$([_c(be)]))),no(r.gq),a(er,"aria-label",r.jM)]),r.cw),$([r.rU]))}),OH=gh("disabled"),JH=function(e){var r=e.b;return C4(r)},qh=function(e){var r=e.a;return oe(r,J$)},QH=function(e){var r=JH(e.us)-1,n=e.e,t=i4(e.us),o=t?"Pause playback":"Play recording",c=!qh(e.us),i=c?"Resume recording":"Pause recording";return a(ee,$([Q($([Le,Ir(Ef),ur(Ee),a(U,"gap","12px")]))]),$([a(xl,n,{iW:function(f){return f.bn},rU:Sr.tA,jJ:!c,jM:i,gq:e.d0(c?UH:Dh),cw:a(Fn,e.s4,{eG:1,jM:i,t2:D})}),c?a(NH,n,{qh:1,rQ:function(f){return f.k4},rU:t?Sr.tf:Sr.tm,jM:o,gq:e.d0(t?Dh:FH),U:1,cw:a(Fn,e.s4,{eG:1,jM:o,t2:D})}):de(""),a(Mc,$([Dc("range"),Pv("0"),Cv(ar(r)),jv("1"),qc(ar(rd(e.us))),OH(!c),Xi(function(f){return e.d0(EH(a(ie,0,Sf(f))))}),To("ui-slider"),Q($([Nf(pe(1)),Ve(T(24)),a(U,"-webkit-appearance","none"),a(U,"appearance","none"),_e(xc),ga(In),ln(lr),Wt(ir(c?1:.4)),a(U,"--slider-fill",O(r>0?100*rd(e.us)/r:0)+"%")]))]),S)]))},ZH=function(e){return!e.bL.gb||e.ps?de(""):l(Mt,e.e,e.qo,{a4:fo(4),c$:QH(e),bw:4,aT:e.h,ay:e.ab.ay,dr:e.ab.ds(4),a1:Va(4),dx:"Tape",v:e.aw})},Ah=function(e){return{iX:!1,qn:e,jl:!1,j$:!1,kL:!1}},XH=function(e){return B(e,{j$:!0})},ad=function(e){return XH(Ah(e))},YH=function(e){return B(e,{jl:!0})},nd=function(e){return YH(Ah(e))},KH=function(e){return e===1?"\u2325":"Alt"},eI=function(e){return e===1?"\u2303":"Ctrl"},rI=v(function(e,r){if(a(st,"Key",r))return a(tn,3,r);if(a(st,"Digit",r))return a(tn,5,r);switch(r){case"BracketLeft":return"[";case"BracketRight":return"]";case"Slash":return"/";case"Backslash":return"\\";case"Period":return".";case"Comma":return",";case"Semicolon":return";";case"Quote":return"'";case"Backquote":return"`";case"Minus":return"-";case"Equal":return"=";case"Space":return"Space";case"ArrowLeft":return"\u2190";case"ArrowRight":return"\u2192";case"ArrowUp":return"\u2191";case"ArrowDown":return"\u2193";case"Enter":return e===1?"\u21A9":"Enter";case"Escape":return e===1?"\u238B":"Esc";case"Tab":return e===1?"\u21E5":"Tab";case"Backspace":return e===1?"\u232B":"Backspace";case"Delete":return e===1?"\u2326":"Del";default:return r}}),aI=function(e){return e===1?"\u2318":"Win"},nI=function(e){return e===1?"\u21E7":"Shift"},Vl=v(function(e,r){var n=e===1?"":"+",t=a(Vr,re,$([r.jl?A(eI(e)):D,r.iX?A(KH(e)):D,r.kL?A(nI(e)):D,r.j$?A(aI(e)):D,A(a(rI,e,r.qn))]));return a(Ar,n,t)}),tI=function(e){var r=(function(){var t=e.qo.kj===1?ad("KeyI"):nd("KeyI");return a(Vl,e.qo.kj,t)})(),n=U$(e.e);return a(Y1,e.e,{rU:function(t){return t?Sr.ul:Sr.sH},sa:Ka(n),sb:function(t){return t?"Lights on":"Lights off"},sc:$([!1,!0]),jM:"Lights",s2:function(t){return oe(t,n)?e.h7:e.ke(Ks(e.e))},s4:e.s4,d1:0,tZ:function(t){return function(o){return bc}},t2:function(t){return A(r)},uB:1})},oI={$:2},cI={$:3},iI=(function(){var e=c5,r=e.a,n=e.b;return a(z,r,n)})(),fI=function(e){return{$:1,a:e}},uI=gt("title"),$I=Z(function(e,r,n,t){var o=dt(e).kl,c=oe(t,n),i=a(mp,t,o),f=a(Ie,function(s){return s.ja},e),u=c?$([a(U,"outline","3px solid "+ge(f)),a(U,"outline-offset","2px")]):S;return a(ao,$([a(er,"aria-pressed",c?"true":"false"),a(er,"type","button"),uI(Em(t)),no(r(fI(t))),Q(X($([He(T(28)),Ve(T(28)),cr(Ye(50)),_e(or(i)),l(pt,T(1),wa,or(f)),ga(In),kn(T(0))]),u))]),S)}),lI=k(function(e,r,n){var t=Ro(n);return a(ee,$([a(er,"role","group"),a(er,"aria-label","Accent colour"),Q($([Le,ur(Ee),a(U,"gap","12px"),Fr(pe(0))]))]),a(W,l($I,e,r,t),iI))}),vI=Z(function(e,r,n,t){return a(ee,$([Q($([Le,ur(Ee),_a(Ee),a(U,"gap","14px"),a(vr,T(6),T(0)),Fr(pe(0))]))]),X(n,$([l(lI,e,r,t)])))}),sI=function(e){return a(ee,$([Q($([He(T(12)),Ve(T(12)),cr(T(2)),_e(or(e))]))]),S)},dI=function(e){return a(ee,$([Q($([Le,a(U,"gap","3px"),Fr(pe(0))]))]),a(W,sI,$([e.pM,e.rq,e.pT,e.rE,e.tB,e.vd])))},Bh=k(function(e,r,n){var t=r?nr($([_e(a(Y,function(o){return o.bn},e)),fe(a(Y,a(Ne,function(o){return o.bn},ru),e))])):fe(a(Y,function(o){return o.k4},e));return a(ee,$([Q($([a(vr,T(0),T(12)),Ve(T(32)),Le,ur(Ee),Xf(Zf),a(U,"gap","10px"),t]))]),$([dI(n),a(ya,$([Q($([kl(pe(1)),Br(T(13))]))]),$([de(n.sM)]))]))}),pI=Z(function(e,r,n,t){var o=t;return Xr(Al,pi(r),eu(e),$([x(vI,e,r.v,n,o.cX)]),A({s$:r.v(oI),s1:r.v(cI)}),Bh(e),S,o.bS)}),bI=k(function(e,r,n){var t=n;return x(ed,pi(r),eu(e),Bh(e),t.bS)}),mI=function(e){if(!e.bL.cb||e.ps)return de("");var r={fR:G5,v:e.ki};return a(ee,S,$([l(Mt,e.e,e.qo,{a4:fo(5),c$:x(pI,e.e,r,$([tI(e)]),e.ad),bw:5,aT:e.h,ay:e.ab.ay,dr:e.ab.ds(5),a1:Va(5),dx:"Theme",v:e.aw}),l(bI,e.e,r,e.ad)]))},hI=function(e){return l(Sn,"style",S,$([de(`
.`+(R1+(` {
  position: fixed;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
}
.`+(R1+`::backdrop {
  background: transparent;
}
`))))]))},gI=v(function(e,r){return`
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
`)))))}),_I=`
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
`,yI=function(e){var r=ge(a(gr,.25,a(Ie,function(t){return t.bn},e))),n=ge(a(Ie,function(t){return t.bn},e));return l(Sn,"style",S,$([de(X(_I,a(gI,n,r)))]))},CI=v(function(e,r){return a(V4,e+" ",r)}),PI=function(e){return{pM:a(Y,function(r){return r.bn},e),rq:or(ru(a(Ie,function(r){return r.bn},e))),g_:Yo.cU}},SI=function(e){return PI(e)},xI=function(e){return{$:5,a:e}},jI=function(e){return{$:9,a:e}},wI={$:13},kI=function(e){return{$:8,a:e}},LI={$:7},TI=function(e){var r=e,n=a(_n,v(function(t,o){return P(o,t)}),r.aI);return{ay:$r(r.aI),ds:function(t){return a(ie,0,a(he,H$,_r(a(mr,function(o){var c=o.a;return oe(c,t)},n))))}}},MI=v(function(e,r){return{N:r.dD.N,qo:e.qo,hm:{nU:a(tr,e.v,kI),o0:a(he,function(n){return{a4:n.a4,h8:n.h8}},r.et)},ae:r.ae,h:r.h,f$:e.f$,db:r.db,nG:r.nG,h7:e.v(wI),kb:a(tr,e.v,w4),kc:e.v(q5),gr:e.gr,kd:a(tr,e.v,A5),aw:a(tr,e.v,M5),ke:function(n){return e.v(xI(n))},kf:a(tr,e.v,jI),kg:e.v(LI),gs:a(tr,e.v,z5),d0:e.d0,ki:a(tr,e.v,R5),s4:a(tr,e.v,D5),aJ:r.aJ,ab:TI(r.h),us:e.us,ad:r.ad,e:r.e,cU:r.cU,bL:e.gD,ps:r.ps}}),zI=v(function(e,r){switch(e){case 3:return{pp:r.bD,pq:.5*(r.bJ+r.bq)};case 2:return{pp:r.by,pq:.5*(r.bJ+r.bq)};case 0:return{pp:.5*(r.by+r.bD),pq:r.bJ};default:return{pp:.5*(r.by+r.bD),pq:r.bq}}}),SN=1,DI={mi:0,f5:0,dM:0,e9:0,nZ:0,uQ:"normal",eh:0},Hl=k(function(e,r,n){switch(e){case 0:return r;case 1:return .5*(r+n);default:return n}}),qI=Z(function(e,r,n,t){switch(r){case 0:return P(l(Hl,n,e.by,e.bD),e.bJ-t);case 1:return P(l(Hl,n,e.by,e.bD),e.bq+t);case 2:return P(e.by-t,l(Hl,n,e.bJ,e.bq));default:return P(e.bD+t,l(Hl,n,e.bJ,e.bq))}}),Il=function(e){switch(e){case 0:return"0";case 1:return"-50%";default:return"-100%"}},Vh=function(e){var r=e.a4,n=e.eG,t=e.px,o=e.rA,c=(function(){switch(n){case 0:return"-100%";case 1:return"0";case 2:return Il(t);default:return Il(t)}})(),i=(function(){switch(n){case 0:return Il(t);case 1:return Il(t);case 2:return"-100%";default:return"0"}})(),f="translate("+(i+(", "+(c+")"))),u=x(qI,r,n,t,o),s=u.a,d=u.b;return $([qr(_i),ja(T(s)),pn(T(d)),a(U,"transform",f)])},AI=v(function(e,r){return a(ee,$([Q(X(Vh({px:1,a4:r.a4,eG:r.eG,rA:6}),$([a(vr,T(7),T(14)),_e(e.pM),fe(e.rq),cr(la.ss),to(pe(e.g_)),Le,Ir(Ef),a(U,"gap","12px"),a(U,"width","max-content"),I1(DI),Lb(T(360)),Gr(ir(1.45))])))]),$([a(ya,S,$([de(r.jM)])),(function(){var n=r.t2;if(n.$===1)return de("");var t=n.a;return a(ya,$([Q($([fe(e.rq)]))]),$([de(t)]))})()]))}),BI=v(function(e,r){return{g4:0,cA:0,uQ:X(O(r),e)}}),VI=BI("deg"),HI=function(e){var r=e.uQ;return{k8:0,uQ:a(Pc,"rotate",$([r]))}},II=k(function(e,r,n){return a(ee,$([Q($([qr(_i),ja(T(n.pp)),pn(T(n.pq)),_e(e.pM),He(T(10)),Ve(T(10)),to(pe(e.g_)),a(U,"transform-origin","top left"),Dl(HI(VI((function(){switch(r){case 3:return-45;case 2:return 135;case 1:return 45;default:return-135}})())))]))]),S)}),Hh=v(function(e,r){return a(ee,S,$([l(II,e,r.eG,a(zI,r.eG,r.a4)),a(AI,e,r)]))}),FI=v(function(e,r){var n=r;if(n.$){var t=n.a,o=t.S;switch(o.$){case 1:return a(Hh,e,t);case 2:return a(Hh,e,t);case 0:return de("");default:return de("")}}else return de("")}),UI=480,EI=v(function(e,r){return e.l0}),RI=se("min-width"),GI=Z(function(e,r,n,t){var o=n?nr($([_e(a(Y,function(c){return c.bn},e)),fe(a(Y,a(Ne,function(c){return c.bn},ru),e))])):fe(a(Y,function(c){return c.k4},e));return a(ee,$([Q($([Le,_a(U1),ur(Ee),a(vr,T(0),T(12)),Ve(T(32)),Xf(Zf),o]))]),$([a(ya,$([Q($([Br(T(13)),kl(pe(1))]))]),$([de(t.iE+(": "+t.jM))])),a(ya,$([Q($([Br(T(13)),RI(T(70)),Fr(pe(0)),cv(Ko)]))]),$([de(a(Vl,r.kj,a(EI,t,r)))]))]))}),WI=function(e){return{fR:k4,fa:320,ky:"Type a command\u2026",v:e,lh:{sA:400,uU:50}}},NI=function(e){if(a(zf,e.bL,e.N)){var r=a(GI,e.e,e.qo),n=eu(e.e),t=WI(e.kb);return a(ee,S,$([l(Mt,e.e,e.qo,{a4:fo(6),c$:a(ee,$([Q($([He(T(UI))]))]),$([Xr(Al,t,n,S,D,r,S,e.N)])),bw:6,aT:e.h,ay:e.ab.ay,dr:e.ab.ds(6),a1:Va(6),dx:"Command palette",v:e.aw}),x(ed,t,n,r,e.N)]))}else return de("")},OI=v(function(e,r){return a(ee,$([a(er,"role","status"),Q(X(Vh({px:r.px,a4:r.a4,eG:r.eG,rA:6}),$([a(vr,Ci.oC,Ci.si),cr(la.ss),_e(a(Y,function(n){return n.bn},e)),fe(a(Y,function(n){return l(B1,.6,n.bn,n.k4)},e)),nr(aa.dx),I1(ch),A1.q0,to(pe(Yo.o0)),a(U,"pointer-events","none"),Th(Mh($([P(0,$([a(ac,"opacity","0")])),P(8,$([a(ac,"opacity","1")])),P(92,$([a(ac,"opacity","1")])),P(100,$([a(ac,"opacity","0")]))]))),Lh(zh(L4)),a(U,"animation-fill-mode","forwards")])))]),$([de(r.Q)]))}),JI=function(e){var r=e.hm.o0;if(r.$===1)return de("");var n=r.a.a4,t=r.a.h8;return a(OI,e.e,{px:1,a4:n,eG:1,Q:t?"Nothing to Reset":"Use the browser's Back button to undo"})},QI=function(e){var r=v(function(n,t){return"inset 0 0 "+(O(n)+("px 0 "+ge(a(gr,t,e))))});return a(Ar,", ",$([a(r,90,.22),a(r,30,.4),a(r,8,.65)]))},Ih=function(e){switch(e){case 0:return D;case 1:return A(l(Ha,1/6,1,.5));default:return A(l(Ha,1/3,1,.5))}},ZI=function(e){var r=Ih(e.nG);if(r.$===1)return de("");var n=r.a;return a(ee,$([Q($([qr(_i),pn(be),ja(be),Ko(be),rc(be),a(U,"pointer-events","none"),a(U,"box-shadow",QI(n))]))]),S)},XI=function(e){var r=e.a;return oe(r,Qs)},xN=0,Fh=a(Cc,0,"rem"),YI=function(e){if(qh(e.us)||XI(e.us)||e.ps)return de("");var r=e.qo.dp,n=e.qo.to;return a(ee,$([Q($([qr(ro),pn(be),ja(be),He(Fh(2)),Ve(Fh(2)),a(U,"pointer-events","none"),a(U,"transform","translate("+(O(n.pp+.5*r.lh)+("px, "+(O(-n.pq+.5*r.jF)+"px)")))),fe(n.r7?a(Y,function(t){return t.bn},e.e):a(Y,function(t){return t.k4},e.e)),to(pe(Yo.g6+1))]))]),$([Sr.to]))},KI=function(e){return{$:0,a:e}},eF=G8,jN=re,rF=function(e){return a(q,e,te(0))};function td(){return li(od())}function od(){return x($i,k(function(e,r,n){return{hc:r,dI:n,cF:e}}),a(w,"duration",N),a(w,"callCount",Fi),a(w,"children",rF(function(e){return td()})))}var Uh=td();td=function(){return Uh};var aF=od();od=function(){return aF};var nF=function(e){return a(Ze,e,a(zc,$(["detail"]),l(Xn,v(function(r,n){return{gy:r,az:n}}),a(w,"recordingStartTime",N),a(w,"tickSnapshots",eF(l(Xn,v(function(r,n){return{jx:n,dw:r}}),a(w,"timestamp",N),a(w,"flameGraph",Uh)))))))},tF=function(e){var r=e.tP,n=e.s0;return l(Sn,"profiler-element",X($([a(oa,"result",nF(n))]),r?$([a(er,"running","")]):S),S)},oF=function(e){return tF({s0:KI,tP:oe(e,ll)})},cF=function(e){return Oe(e)?{uQ:"none"}:{uQ:a(Ar,", ",e)}},iF=a(tr,se("font-family"),cF),cd=v(function(e,r){return a(dl,v(function(n,t){var o=t,c=a(Qe,n,e);if(c.$===1)return o;var i=c.a;return{hc:o.hc-i.hc,dI:a(cd,i.dI,o.dI),cF:o.cF-i.cF}}),r)}),Eh=v(function(e,r){var n=e.cP,t=e.cH,o=r.az,c=n?a(ie,Be,a(he,function(f){return f.jx},a(Ma,n-1,o))):Be,i=a(ie,Be,a(he,function(f){return f.jx},a(Ma,t,o)));return a(cd,c,i)}),Rh=function(e){return l(hu,k(function(r,n,t){return a(z,n,t)}),S,e)},Si=function(e){return{$:9,a:e}},Gh=function(e){var r=(function(n){return 1-n.iS/n.h2})(l(ve,v(function(n,t){var o=a(Sa,t.gn,$t(n));return{h2:t.h2+t.gZ,gn:t.gn+1,iS:t.iS+o/(t.gn-1)*t.gZ,gZ:t.gZ*.7}}),{h2:0,gn:10,iS:0,gZ:1},a(Rt,8,sc(e))));return{aO:1,aQ:r,C:.35,aZ:.45}},fF=function(e){return a(oa,"mouseout",te(e))},uF=function(e){return a(oa,"mouseover",te(e))},$F=Tr(function(e,r,n,t,o,c){var i=n>0?c/n*100:0,f=oe(t,A(o)),u=or(f?e.k4:Gh(o)),s=!oe(t,D),d=ir(s&&!f?.3:1);return a(ee,$([Q($([qr(gi),xo(T(r*16)),Ve(T(24)),Gr(T(24)),ga(In),Wt(d),wn($([_e(or(e.kY)),fe(or(e.k4))]))])),uF(Si(A(o))),fF(Si(D))]),$([a(ee,$([Q($([qr(ro),pn(be),ja(T(r*16)),He(Ye(i)),Ve(Ye(100)),_e(u)]))]),S),a(ya,$([Q($([qr(gi),xo(T(6)),to(pe(1))]))]),$([de(o)]))]))}),lF=ke(function(e,r,n,t,o){var c=o.a,i=o.b.cF,f=o.b.dI;return a(z,jr($F,e,r,n,t,c,i),F(Wh,e,r+1,n,t,f))}),Wh=ke(function(e,r,n,t,o){return a(fn,x(lF,e,r,n,t),a(Yf,On,Ya(o)))}),vF=ke(function(e,r,n,t,o){var c=l(sl,r,n,t),i=c.a,f=i.b,u=c.b,s=u.b,d=a(Eh,{cH:s,cP:f},t),p=a(ie,0,il(a(W,function(g){var _=g.cF;return _},Rh(d))));return a(ee,$([Q($([kn(T(8)),oh(yo),X4(T(300)),_e(or(e.k_)),fe(or(e.k5))]))]),F(Wh,e,0,p,o,d))}),nc=Pr("height"),Nh=oa,tc=io("g"),Fl=io("line"),Oh=v(function(e,r){var n=r.az,t=function(o){return o<0?Be:a(ie,Be,a(he,function(c){return c.jx},a(Ma,o,n)))};return a(cd,t(e-1),t(e))}),Jh=function(e){return e.$===-2},Qh=function(e){return Jh(e)?0:a(ie,0,il(a(W,function(r){var n=r.dI;return 1+Qh(n)},Rh(e))))},sF=function(e){var r=za(e.az);return a(ie,0,il(a(W,function(n){return Qh(a(Oh,n,e))},a(gn,1,r-1))))},dF=function(e){return a(Yf,re,e)},Ul=v(function(e,r){var n=r.az,t=r.gy;return e?a(ie,t,a(he,function(o){return o.dw},a(Ma,e-1,n))):t}),Zh=v(function(e,r){var n=a(ie,r.gy,a(he,function(t){return t.dw},a(Ma,e,r.az)));return n-a(Ul,e,r)}),pF=function(e){var r=za(e.az),n=dF(a(W,function(o){return a(Zh,o,e)},a(gn,1,r-1))),t=a(me,0,lt($r(n)*.95)-1);return a(ie,16.7,_r(a(rt,t,n)))},xi=io("rect"),tu=Pr("stroke"),ou=Pr("stroke-width"),bF=function(e){return{$:5,a:e}},mF=function(e){return{$:6,a:e}},hF={aP:0,uQ:"ew-resize"},El=Pr("x1"),Rl=Pr("x2"),Gl=Pr("y1"),Wl=Pr("y2"),gF=Z(function(e,r,n,t){var o=n.a,c=n.b,i=a(ta,r,dn.iJ),f=a(ta,r,dn.iw),u=function(M){return a(Ze,function(I){return M({fP:I})},a(w,"clientX",N))},s=v(function(M,I){return a(tc,S,$([a(Fl,$([El(O(M)),Gl("0"),Rl(O(M)),Wl(O(i)),tu("transparent"),ou(O(a(ta,r,10))),ft($([ga(hF)])),a(Nh,"pointerdown",u(I))]),S),a(Fl,$([El(O(M)),Gl("0"),Rl(O(M)),Wl(O(i)),tu(ge(e.kl.tB)),ou(O(a(ta,r,1))),ft($([co(lr)]))]),S)]))}),d=l(sl,r,a(bi,o,c),t),p=d.a,g=p.a,_=p.b,b=d.b,h=b.a,y=b.b,C=g,j=h,L=(function(){if(o.$){var M=o.a,I=(function(){return M?a(ie,t.gy,a(he,function(R){return R.dw},a(Ma,y,t.az))):a(Ul,_,t)})();return a(Fl,$([El(O(I)),Gl("0"),Rl(O(I)),Wl(O(f)),tu(ge(e.kl.tB)),ou(O(a(ta,r,2))),ft($([co(lr)]))]),S)}else return a(tc,S,S)})();return a(tc,S,$([a(s,C,bF),a(s,j,mF),L]))}),Xh=k(function(e,r,n){return oe(r,A(n))?ge(e.k4):ge(Gh(n))}),Yh=v(function(e,r){if(e.$)return 1;var n=e.a;return oe(n,r)?1:.3}),Kh=function(e){return a(oa,"mouseout",te(e))},e6=function(e){return a(oa,"mouseover",te(e))},id=Pr("opacity"),fd=Tp,r6=io("title"),oc=Pr("width"),cc=Pr("x"),ic=Pr("y"),_F=v(function(e,r){var n=r.pp,t=r.pq,o=r.lh,c=r.jF,i=r.jM,f=r.l7,u=r.mS,s=i+(" ("+(a(au,2,f)+"ms)")),d=a(Yh,e.cc,i),p=l(Xh,e.dv,e.cc,i),g=a(xi,$([cc(O(n)),ic(O(t)),oc(O(o)),nc(O(c)),Tt(p),id(O(d)),e6(Si(A(i))),Kh(Si(D))]),$([a(r6,S,$([fd(s)]))])),_=u?$([a(xi,$([cc(O(n)),ic(O(t)),oc(O(o)),nc(O(a(ta,e.a3,2))),Tt(ge(e.dv.kl.tB)),ft($([co(lr)]))]),S)]):S;return a(z,g,_)}),a6=Z(function(e,r,n,t){return l(ve,v(function(o,c){var i=o.a,f=o.b,u=c.a,s=c.b,d=f.cF/e.ff,p=ae(d,e.cv)>0,g=x(a6,e,r+1,u,f.dI),_=a(We,e.cv,d),b=a(_F,e,{l7:f.cF,jF:_,mS:p,jM:i,lh:e.iI,pp:e.dK+r*e.iI,pq:e.cv-u-_});return P(u+_,X(b,X(g,s)))}),P(n,S),a(Yf,On,Ya(t))).b}),yF=v(function(e,r){var n=e.pl/e.ff,t=a(We,e.cv,n),o=ae(n,e.cv)>0,c=a(ta,e.a3,1),i=a(me,0,e.oZ-c),f=a(We,i,a(ta,e.a3,dn.oY)),u=a(xi,$([cc(O(e.dK)),ic(O(e.cv-t)),oc(O(f)),nc(O(t)),Tt(ge(e.dv.k2)),ft($([co(lr)]))]),S),s=a(ta,e.a3,2),d=o?$([a(xi,$([cc(O(e.dK)),ic("0"),oc(O(f)),nc(O(s)),Tt(ge(e.dv.kl.tB)),ft($([co(lr)]))]),S)]):S,p=a(me,0,i-f),g=e.dK+f,_=(function(){if(p<=0||e.jY<=0||Jh(r))return S;var b=p/e.jY;return x(a6,{dK:g,cc:e.cc,ff:e.ff,cv:e.cv,iI:b,dv:e.dv,a3:e.a3},0,0,r)})();return a(z,u,X(d,_))}),CF=v(function(e,r){var n=function(i){return a(ie,0,a(he,function(f){return f.dw},a(Ma,i,r.az)))},t=a(me,1,a(vl,e.by,r)-1),o=za(r.az),c=a(We,o-1,a(vl,e.bD,r)+1);return a(mr,function(i){var f=a(Ul,i,r),u=n(i);return ae(u,e.by)>-1&&ae(f,e.bD)<1},a(gn,t,c))}),PF=ke(function(e,r,n,t,o){var c=a(CF,r,t),i=a(ta,r,dn.iw),f=sF(t),u=a(me,33.3,pF(t)),s=u>0?u/i:1,d=a(fn,function(b){var h=a(Zh,b,t);return a(yF,{dK:a(Ul,b,t),cc:o,jY:f,ff:s,cv:i,dv:e,oZ:h,pl:h,a3:r},a(Oh,b,t))},c),p=16.7/s,g=a(Fl,$([El(O(r.by)),Rl(O(r.bD)),Gl(O(i-p)),Wl(O(i-p)),tu(ge(e.kl.vd)),ou(O(a(ta,r,1))),ft($([co(lr)]))]),S),_=a(xi,$([cc(O(r.by)),ic("0"),oc(O(r.bD-r.by)),nc(O(i)),Tt(ge(e.k_))]),S);return a(tc,S,$([_,a(tc,S,d),g,x(gF,e,r,n,t)]))}),SF=Pr("transform"),xF=Pr("font-size"),jF=io("text"),wF=v(function(e,r){var n=e.f4,t=e.n_,o=e.lv,c=.6*n,i=lt((o-t)/c);return ae(an(r),i)<1?r:i<=1?"":a(Pf,i-1,r)+"\u2026"}),kF=Tr(function(e,r,n,t,o,c){var i=c.cF,f=c.hc,u=a(ta,r,dn.os),s=.3*u,d=n.fZ*u,p=a(Yh,t,o),g=.6*u,_=l(Xh,e,t,o),b=a(Ar," > ",je(a(z,o,n.fN))),h=b+(" ("+(ar(f)+("x, "+(a(au,2,i)+"ms)"))));return a(tc,$([e6(Si(A(o))),Kh(Si(D))]),$([a(r6,S,$([fd(h)])),a(xi,$([cc(O(n.ei)),ic(O(d)),oc(O(i)),nc(O(u)),Tt(_),tu(ge(e.kX)),ou(O(a(ta,r,1))),id(O(p))]),S),a(jF,$([cc(O(n.ei+s)),ic(O(d+.7*u)),Tt(ge(e.k4)),xF(O(g)),id(O(p))]),$([fd(a(wF,{lv:i,f4:g,n_:s},h))]))]))}),n6=ke(function(e,r,n,t,o){return l(ve,v(function(c,i){var f=c.a,u=c.b,s=i.a,d=i.b,p=F(n6,e,r,{fN:a(z,f,n.fN),fZ:n.fZ+1,ei:s},t,u.dI),g=jr(kF,e,r,B(n,{ei:s}),t,f,u);return P(s+u.cF,a(z,g,X(p,d)))}),P(n.ei,S),a(Yf,function(c){var i=c.a;return i},Ya(o))).b}),LF=ke(function(e,r,n,t,o){var c=a(ta,r,dn.iw),i=l(sl,r,n,t),f=i.a,u=f.a,s=f.b,d=i.b,p=d.b;return a(tc,$([SF("translate("+(O(u)+(", "+(O(c)+")"))))]),F(n6,e,r,{fN:S,fZ:0,ei:0},o,a(Eh,{cH:p,cP:s},t)))}),TF=function(e){return{$:1,a:e}},MF=x($i,k(function(e,r,n){return TF({nI:n/dn.iK,ot:e,ou:r})}),a(w,"deltaX",N),a(w,"deltaY",N),a(w,"offsetX",N)),zF=function(e){var r=e.bD-e.by;return a(Ar," ",a(W,O,$([e.by,0,r,a(ta,e,dn.iJ)])))},DF=ke(function(e,r,n,t,o){return a(V1,$([oc(O(dn.iK)),nc(O(dn.iJ)),H1(zF(r)),a(Nh,"wheel",MF),ft($([_e(or(e.D))]))]),$([F(PF,e,r,n,t,o),F(LF,e,r,n,t,o)]))}),qF=v(function(e,r){var n=za(r.az),t=dt(e),o=(function(){var f=a(Ma,n-1,r.az);if(f.$)return 0;var u=f.a;return u.dw-r.gy})(),c=o>=1e3?a(au,2,o/1e3)+" s":a(au,0,o)+" ms",i=ar(n)+(" ticks \xB7 "+c);return a(ee,$([Q($([Le,ur(Ee),Ve(T(24)),a(vr,T(4),T(8))]))]),$([a(ya,$([Q($([fe(or(t.k4))]))]),$([de(i)]))]))}),AF=v(function(e,r){var n=dt(e);return a(ee,$([Q($([Le,Ir(Ba),fe(or(n.k5)),iF($(["monospace"])),Br(T(12)),a(U,"user-select","none")]))]),$([a(qF,e,r.d5),F(DF,n,r.a3,r.bg,r.d5,r.cc),F(vF,n,r.a3,r.bg,r.d5,r.cc)]))}),BF=v(function(e,r){if(r.$===3){var n=r.a;return A(a(AF,e,n))}else return D}),VF=function(e){if(e.bL.eU){var r=(function(){var t=a(BF,e.e,e.aJ);if(t.$)return de("");var o=t.a;return l(Mt,e.e,e.qo,{a4:fo(3),c$:a(Uf,e.gs,o),bw:3,aT:e.h,ay:e.ab.ay,dr:e.ab.ds(3),a1:Va(3),dx:"Profile",v:e.aw})})(),n=a(Uf,e.gs,oF(e.aJ));return a(ee,S,$([n,r]))}else return de("")},wN=3,t6=function(e){return B(e,{kL:!0})},HF=function(e){var r=(function(){var n=e.qo.kj===1?t6(ad("KeyP")):t6(nd("KeyP"));return a(Vl,e.qo.kj,n)})();return a(xl,e.e,{iW:function(n){return n.bn},rU:Sr.st,jJ:a(ha,6,e.h),jM:"Command palette",gq:e.kc,cw:a(Fn,e.s4,{eG:3,jM:"Command palette",t2:A(r)})})},IF=function(e){return a(ec,e.e,{rU:Sr.t6,bw:7,jM:"Device preview",aT:e.h,a1:Va(7),v:e.aw,cw:a(Fn,e.s4,{eG:3,jM:"Device preview",t2:D})})},FF=$([0,1,2]),UF=function(e){switch(e){case 0:return Sr.uM;case 1:return Sr.tg;default:return Sr.qn}},EF=function(e){var r=(function(){var n=e.qo.kj===1?ad("KeyM"):nd("KeyM");return a(Vl,e.qo.kj,n)})();return a(Y1,e.e,{rU:UF,sa:Ka(e.nG),sb:Rm,sc:FF,jM:"Mode",s2:e.kf,s4:e.s4,d1:1,tZ:v(function(n,t){return a(ie,t.bn,Ih(n))}),t2:function(n){return A(r)},uB:3})},RF=function(e){return $([a(Wu,"pointerdown",te(P(e,!0))),a(Wu,"wheel",te(P(e,!0))),a(Wu,"keydown",a(q,function(r){return r.jl||r.j$||r.iX?kt("let modifier-bearing combos reach global decoders"):a(I$,r.jK,$(["Meta","Control","Shift","Alt"," "]))?kt("bare modifier keys and Space \u2014 harmless, allow"):te(P(e,!0))},F(vi,Z(function(r,n,t,o){return{iX:o,jl:n,jK:r,j$:t}}),a(w,"key",xe),a(w,"ctrlKey",ne),a(w,"metaKey",ne),a(w,"altKey",ne))))])},GF=function(e){return a(xl,e.e,{iW:function(r){return r.bn},rU:Sr.ve,jJ:e.ps,jM:"Zen mode",gq:e.kg,cw:a(Fn,e.s4,{eG:3,jM:"Zen mode",t2:D})})},WF=function(e){var r=e.bL,n=r.hK?$([GF(e)]):S,t=e.e,o=r.cb?$([a(ec,t,{rU:Sr.kl,bw:5,jM:"Theme",aT:e.h,a1:Va(5),v:e.aw,cw:a(Fn,e.s4,{eG:3,jM:"Theme",t2:D})})]):S,c=r.dP?$([EF(e)]):S,i=a(Vr,re,$([r.f9?A(a(ec,t,{rU:Sr.pt,bw:2,jM:"FPS meter",aT:e.h,a1:Va(2),v:e.aw,cw:a(Fn,e.s4,{eG:3,jM:"FPS meter",t2:D})})):D,r.ga?A(a(ec,t,{rU:Sr.qo,bw:1,jM:"Inputs",aT:e.h,a1:Va(1),v:e.aw,cw:a(Fn,e.s4,{eG:3,jM:"Inputs",t2:D})})):D,r.gb?A(a(ec,t,{rU:Sr.us,bw:4,jM:"Tape",aT:e.h,a1:Va(4),v:e.aw,cw:a(Fn,e.s4,{eG:3,jM:"Tape",t2:D})})):D])),f=$([Le,Ir(Ba),ur(Ee),a(U,"gap","6px")]),u=function(h){return a(ee,$([Q(f)]),h)},s=r.dO?$([IF(e)]):S,d=r.f8?$([a(ec,t,{rU:Sr.ra,bw:0,jM:"Configurations",aT:e.h,a1:Va(0),v:e.aw,cw:a(Fn,e.s4,{eG:3,jM:"Configurations",t2:D})})]):S,p=a(zf,r,e.N)?$([HF(e)]):S,g=a(mr,a(tr,G0,Oe),$([d,c,s,o,p,i])),_=a(ee,$([Q($([Le,Ir(Ba),ur(Ee),a(U,"gap","24px"),e.ps?nr($([Dl(Q1(T(-72))),Wt(ir(0)),a(U,"pointer-events","none")])):nr($([Dl(Q1(be)),Wt(ir(1))])),a(U,"transition","transform 240ms cubic-bezier(0.33, 1, 0.68, 1), opacity 240ms cubic-bezier(0.33, 1, 0.68, 1)")])),a(er,"aria-hidden",e.ps?"true":"false")]),a(W,u,g)),b=a(Vr,re,$([Oe(n)?D:A(u(n)),Oe(g)?D:A(_)]));return Oe(b)?de(""):a(ee,X($([Q($([qr(ro),pn(T(12)),ja(T(12)),He(T(48)),Le,Ir(Ba),ur(Ee),a(U,"gap","24px"),a(U,"pointer-events","auto"),to(pe(Yo.rT))]))]),RF(e.h7)),b)},NF=v(function(e,r){var n=a(MI,e,r);return a(ee,$([To("play-hud"),Q($([qr(_i),pn(be),ja(be),Ko(be),rc(be),a(U,"pointer-events","none")]))]),X($([Mp(n.e),a(CI,".play-hud",n.e),yI(n.e),hI(n.e),ZI(n),bV(n),IH(n),VH(n),ZH(n),WF(n),YI(n),a(FI,SI(n.e),n.cU),VF(n),mI(n),fH(n),NI(n),JI(n),U4(n.h)]),n.f$.kk))}),OF=v(function(e,r){var n=ri(r.us),t=l(go,_A,Be,n.dd),o=d1(n),c=(function(){var y=e.k6;if(y.$)return Hn(r.cd);var C=y.a;return a(ie,Hn(r.cd),a(he,function(j){return C(j.aT)},a(Ta,function(j){return a(Qe,j,n.dd)},_r(r.af))))})(),i=a(m1,r.cd,$r(r.af)),f=a(Vr,F(gB,e,r,n,o,i),r.af),u={mn:r.aF,dd:f,n$:n.n$,n0:t,gD:e.cd,e:c},s=e.mC(u),d=Yn(a(NF,{qo:a(c4,r,n),f$:s,gr:fA,d0:uA,gD:e.cd,us:r.us,v:e1},r.cd)),p=e.sf(u),g=ge(dt(u.e).D),_=ge(dt(u.e).k4),b=Yn(gA(u.e)),h=(function(){var y=r.hl;if(y.$)return $([b,p,d]);var C=y.a;return $([b,p,d,hA(C)])})();return a(hr,$([H4(u4),a(H,"position","fixed"),a(H,"inset","0"),a(H,"overflow-y","auto"),a(H,"overscroll-behavior","none"),a(H,"background-color",g),a(H,"color",_),a(_B,"playflush",te(P(f4,!0)))]),h)}),JF=function(e){return VL({cM:mM(e),cR:Tz(e),uK:iA(e),dA:OF(e)})},QF=function(e){return JF({dD:S,g6:e.g6,cB:k(function(r,n,t){return S}),cd:e.cd,mC:function(r){return wL},bx:S,hN:e.hN,dd:e.dd,sf:e.sf,ir:e.ir,cR:e.cR,k6:D,iR:e.iR})},ZF=function(e){return QF({g6:{dk:Z(function(r,n,t,o){return V(x(e.dk,r,n,t,o),Zn,S)}),dl:k(function(r,n,t){return V(l(e.dl,r,n,t),Zn,S)}),gu:k(function(r,n,t){return S}),cR:k(function(r,n,t){return Kn}),dA:k(function(r,n,t){return Yn(l(e.dA,r,n,t))})},cd:e.cd,hN:function(r){return 0},dd:e.dd,sf:e.sf,ir:v(function(r,n){return P(n,ue)}),cR:function(r){return Kn},iR:function(r){return S}})},kN=re,XF=v(function(e,r){return{bw:e,bb:"texture",d_:S,fA:r}}),YF=function(e){return{$:0,a:e}},KF=function(e){return{$:1,a:e}},eU=k(function(e,r,n){return jb((function(){if(n.$){var o=n.a;return a(Yi,KF,l(Is.dA,e,r,o))}else{var t=n.a;return a(Yi,YF,l(Hs.dA,e,r,t))}})())}),rU=ZF({cd:i_,dd:$([kp({cB:$([a(XF,"card-art","assets/card-art.jpg")]),bw:"hinge",cM:v(function(e,r){var n=a(u_,e,r),t=n.a;return V(S0(t),Zn,S)}),bx:S,il:!0}),kp({cB:S,bw:"slit",cM:v(function(e,r){var n=a($_,e,r),t=n.a;return V(x0(t),Zn,S)}),bx:S,il:!0})]),sf:k_,dk:xL,dl:jL,dA:eU});B9({PopUpExplainer:{Main:{init:rU(a(q,function(e){return te({g:e})},a(w,"inputs",a(q,function(e){return a(q,function(r){return a(q,function(n){return a(q,function(t){return a(q,function(o){return a(q,function(c){return a(q,function(i){return a(q,function(f){return a(q,function(u){return a(q,function(s){return a(q,function(d){return a(q,function(p){return a(q,function(g){return a(q,function(_){return a(q,function(b){return a(q,function(h){return a(q,function(y){return te({dH:y,eB:h,eD:b,hu:_,rn:g,hQ:p,kj:d,ta:s,gt:u,tc:f,th:i,to:c,fm:o,dp:t,iC:n,ee:r,fC:e})},a(w,"boundingClientRects",br(a(q,function(y){return a(q,function(C){return a(q,function(j){return te({q6:j,rv:C,tW:y})},a(w,"elements",br(a(q,function(j){return a(q,function(L){return te({pX:L,bw:j})},a(w,"boundingClientRect",a(q,function(L){return a(q,function(M){return a(q,function(I){return a(q,function(R){return te({bq:R,by:I,bD:M,bJ:L})},a(w,"bottom",N))},a(w,"left",N))},a(w,"right",N))},a(w,"top",N))))},a(w,"id",xe)))))},a(w,"frameId",xe))},a(w,"scroll",a(q,function(y){return a(q,function(C){return a(q,function(j){return a(q,function(L){return a(q,function(M){return a(q,function(I){return te({lX:I,lY:M,by:L,bJ:j,ph:C,pi:y})},a(w,"contentHeight",N))},a(w,"contentWidth",N))},a(w,"left",N))},a(w,"top",N))},a(w,"viewportHeight",N))},a(w,"viewportWidth",N)))))))},a(w,"darkModeIsOn",ne))},a(w,"devicePixelRatio",N))},a(w,"dt",N))},a(w,"focusedElementIsTextInput",ne))},a(w,"keyboard",a(q,function(p){return a(q,function(g){return a(q,function(_){return a(q,function(b){return a(q,function(h){return a(q,function(y){return a(q,function(C){return a(q,function(j){return a(q,function(L){return a(q,function(M){return te({iX:M,jl:L,jr:j,qW:C,by:y,j$:h,tv:b,bD:_,kL:g,ld:p})},a(w,"alt",ne))},a(w,"ctrl",ne))},a(w,"down",ne))},a(w,"downs",br(xe)))},a(w,"left",ne))},a(w,"meta",ne))},a(w,"pressedKeys",br(xe)))},a(w,"right",ne))},a(w,"shift",ne))},a(w,"up",ne))))},a(w,"operatingSystem",xe))},a(w,"pageId",xe))},a(w,"pageScroll",a(q,function(u){return a(q,function(s){return a(q,function(d){return a(q,function(p){return a(q,function(g){return a(q,function(_){return te({lX:_,lY:g,by:p,bJ:d,ph:s,pi:u})},a(w,"contentHeight",N))},a(w,"contentWidth",N))},a(w,"left",N))},a(w,"top",N))},a(w,"viewportHeight",N))},a(w,"viewportWidth",N))))},a(w,"paneBoundingBoxes",br(a(q,function(f){return a(q,function(u){return a(q,function(s){return a(q,function(d){return a(q,function(p){return te({jF:p,by:d,td:s,bJ:u,lh:f})},a(w,"height",N))},a(w,"left",N))},a(w,"paneId",xe))},a(w,"top",N))},a(w,"width",N)))))},a(w,"persisted",br(a(q,function(i){return a(q,function(f){return te(P(i,f))},a(Qn,1,xe))},a(Qn,0,xe)))))},a(w,"pointer",a(q,function(c){return a(q,function(i){return a(q,function(f){return a(q,function(u){return a(q,function(s){return a(q,function(d){return a(q,function(p){return a(q,function(g){return a(q,function(_){return a(q,function(b){return a(q,function(h){return a(q,function(y){return te({qS:y,jr:h,hv:b,hw:_,q5:g,r7:p,sJ:d,tM:s,tO:u,ld:f,pp:i,pq:c})},a(w,"doubleClick",ne))},a(w,"down",ne))},a(w,"dx",N))},a(w,"dy",N))},a(w,"elementIdsForLastDown",br(xe)))},a(w,"isDown",ne))},a(w,"move",ne))},a(w,"rightDown",ne))},a(w,"rightUp",ne))},a(w,"up",ne))},a(w,"x",N))},a(w,"y",N))))},a(w,"rawPointer",a(q,function(o){return a(q,function(c){return a(q,function(i){return a(q,function(f){return a(q,function(u){return a(q,function(s){return a(q,function(d){return a(q,function(p){return a(q,function(g){return a(q,function(_){return a(q,function(b){return a(q,function(h){return te({qS:h,jr:b,hv:_,hw:g,q5:p,r7:d,sJ:s,tM:u,tO:f,ld:i,pp:c,pq:o})},a(w,"doubleClick",ne))},a(w,"down",ne))},a(w,"dx",N))},a(w,"dy",N))},a(w,"elementIdsForLastDown",br(xe)))},a(w,"isDown",ne))},a(w,"move",ne))},a(w,"rightDown",ne))},a(w,"rightUp",ne))},a(w,"up",ne))},a(w,"x",N))},a(w,"y",N))))},a(w,"screen",a(q,function(t){return a(q,function(o){return te({jF:o,lh:t})},a(w,"height",N))},a(w,"width",N))))},a(w,"searchParamsFromUrl",Cf($([ku(D),a(Ze,A,br(a(q,function(n){return a(q,function(t){return te(P(n,t))},a(Qn,1,xe))},a(Qn,0,xe))))]))))},a(w,"touches",br(a(q,function(r){return a(q,function(n){return a(q,function(t){return te({bw:t,pp:n,pq:r})},a(w,"id",Fi))},a(w,"x",N))},a(w,"y",N)))))},a(w,"wheel",a(q,function(e){return a(q,function(r){return a(q,function(n){return a(q,function(t){return a(q,function(o){return te({l3:o,l4:t,l9:n,n6:r,n7:e})},a(w,"deltaX",N))},a(w,"deltaY",N))},a(w,"elementIdsForLastWheel",br(xe)))},a(w,"pinchDeltaForChrome",N))},a(w,"pinchScaleForSafari",Cf($([ku(D),a(Ze,A,N)])))))))))(0)}}})})(this);
