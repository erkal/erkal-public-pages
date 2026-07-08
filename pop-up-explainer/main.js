(function(pc){"use strict";function qt(e,r,n){return n.a=e,n.f=r,n}function s(e){return qt(2,e,function(r){return function(n){return e(r,n)}})}function A(e){return qt(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function Y(e){return qt(4,e,function(r){return function(n){return function(t){return function(o){return e(r,n,t,o)}}}})}function Ae(e){return qt(5,e,function(r){return function(n){return function(t){return function(o){return function(c){return e(r,n,t,o,c)}}}}})}function Br(e){return qt(6,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return e(r,n,t,o,c,i)}}}}}})}function Gt(e){return qt(7,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return e(r,n,t,o,c,i,u)}}}}}}})}function Be(e){return qt(8,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return e(r,n,t,o,c,i,u,$)}}}}}}}})}function c0(e){return qt(9,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){return e(r,n,t,o,c,i,u,$,l)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function v(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function x(e,r,n,t,o){return e.a===4?e.f(r,n,t,o):e(r)(n)(t)(o)}function U(e,r,n,t,o,c){return e.a===5?e.f(r,n,t,o,c):e(r)(n)(t)(o)(c)}function wr(e,r,n,t,o,c,i){return e.a===6?e.f(r,n,t,o,c,i):e(r)(n)(t)(o)(c)(i)}function ra(e,r,n,t,o,c,i,u){return e.a===7?e.f(r,n,t,o,c,i,u):e(r)(n)(t)(o)(c)(i)(u)}function go(e,r,n,t,o,c,i,u,$){return e.a===8?e.f(r,n,t,o,c,i,u,$):e(r)(n)(t)(o)(c)(i)(u)($)}function LU(e,r,n,t,o,c,i,u,$,l){return e.a===9?e.f(r,n,t,o,c,i,u,$,l):e(r)(n)(t)(o)(c)(i)(u)($)(l)}var I8=[];function F8(e){return[e]}function U8(e){return e.length}var R8=A(function(e,r,n){for(var t=new Array(e),o=0;o<e;o++)t[o]=n(r+o);return t}),q8=s(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,y(n,r)}),G8=s(function(e,r){return r[e]}),W8=A(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=n[c];return o[e]=r,o}),O8=s(function(e,r){for(var n=r.length,t=new Array(n+1),o=0;o<n;o++)t[o]=r[o];return t[n]=e,t}),N8=A(function(e,r,n){for(var t=n.length,o=0;o<t;o++)r=a(e,n[o],r);return r}),Z8=A(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r}),AU=s(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=e(r[o]);return t}),TU=A(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=a(e,r+c,n[c]);return o}),J8=A(function(e,r,n){return n.slice(e,r)}),X8=A(function(e,r,n){var t=r.length,o=e-t;o>n.length&&(o=n.length);for(var c=t+o,i=new Array(c),u=0;u<t;u++)i[u]=r[u];for(var u=0;u<o;u++)i[u+t]=n[u];return i}),MU=s(function(e,r){return r}),DU=s(function(e,r){return console.log(e+": "+_d(r)),r});function zU(e,r){return function(n){mn(8,e,r,n)}}function BU(e,r,n){return function(t){mn(9,e,r,n,t)}}function _d(e){return"<internals>"}function VU(e){return vt(!1,e)}function vt(e,r){if(typeof r=="function")return pf(e,"<function>");if(typeof r=="boolean")return Ti(e,r?"True":"False");if(typeof r=="number")return Y8(e,r+"");if(r instanceof String)return Q8(e,"'"+yd(r,!0)+"'");if(typeof r=="string")return Cd(e,'"'+yd(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return pf(e,"<internals>");if(n[0]==="#"){var o=[];for(var t in r)t!=="$"&&o.push(vt(e,r[t]));return"("+o.join(",")+")"}if(n==="Set_elm_builtin")return Ti(e,"Set")+bf(e,".fromList")+" "+vt(e,Kg(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return Ti(e,"Dict")+bf(e,".fromList")+" "+vt(e,Ka(r));if(n==="Array_elm_builtin")return Ti(e,"Array")+bf(e,".fromList")+" "+vt(e,Qg(r));if(n==="::"||n==="[]"){var o="[";for(r.b&&(o+=vt(e,r.a),r=r.b);r.b;r=r.b)o+=","+vt(e,r.a);return o+"]"}var o="";for(var c in r)if(c!=="$"){var i=vt(e,r[c]),u=i[0],$=u==="{"||u==="("||u==="["||u==="<"||u==='"'||i.indexOf(" ")<0;o+=" "+($?i:"("+i+")")}return Ti(e,n)+o}if(typeof DataView=="function"&&r instanceof DataView)return Cd(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return pf(e,"<"+r.name+">");if(typeof r=="object"){var o=[];for(var l in r){var d=l[0]==="_"?l.slice(1):l;o.push(bf(e,d)+" = "+vt(e,r[l]))}return o.length===0?"{}":"{ "+o.join(", ")+" }"}return pf(e,"<internals>")}function yd(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function Ti(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function Y8(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Cd(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function Q8(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function bf(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function pf(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function EU(e){return String.fromCharCode(e<10?48+e:55+e)}function mn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function HU(e,r,n,t,o){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var c=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+c);case 3:var i=r;throw new Error("There can only be one port named `"+i+"`, but your program has multiple.");case 4:var i=r,u=n;throw new Error("Trying to send an unexpected type of value through port `"+i+"`:\n"+u);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var $=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+$+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var $=r,l=n,b=t;throw new Error("TODO in module `"+$+"` "+Pd(l)+`

`+b);case 9:var $=r,l=n,d=t,b=o;throw new Error("TODO in module `"+$+"` from the `case` expression "+Pd(l)+`

It received the following value:

    `+_d(d).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+b.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Pd(e){return e.dq.go===e.ri.go?"on line "+e.dq.go:"on lines "+e.dq.go+" through "+e.ri.go}function oe(e,r){for(var n,t=[],o=i0(e,r,0,t);o&&(n=t.pop());o=i0(n.a,n.b,0,t));return o}function i0(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&mn(5),!1;if(n>100)return t.push(y(e,r)),!0;e.$<0&&(e=Ka(e),r=Ka(r));for(var o in e)if(!i0(e[o],r[o],n+1,t))return!1;return!0}var K8=s(oe),e9=s(function(e,r){return!oe(e,r)});function ce(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=ce(e.a,r.a))||(n=ce(e.b,r.b))?n:ce(e.c,r.c);for(;e.b&&r.b&&!(n=ce(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}var r9=s(function(e,r){return ce(e,r)<0}),a9=s(function(e,r){return ce(e,r)<1}),n9=s(function(e,r){return ce(e,r)>0}),t9=s(function(e,r){return ce(e,r)>=0}),o9=s(function(e,r){var n=ce(e,r);return n<0?hb:n?e_:mb}),_o=0,IU={$:"#0"};function y(e,r){return{a:e,b:r}}function FU(e,r){return{$:"#2",a:e,b:r}}function H(e,r,n){return{a:e,b:r,c:n}}function UU(e,r,n){return{$:"#3",a:e,b:r,c:n}}function RU(e){return e}function qU(e){return new String(e)}function E(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}var c9=s(Q);function Q(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=qn(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=qn(e.a,r);return n}var S={$:0},GU={$:"[]"};function qn(e,r){return{$:1,a:e,b:r}}function WU(e,r){return{$:"::",a:e,b:r}}var i9=s(qn);function f(e){for(var r=S,n=e.length;n--;)r=qn(e[n],r);return r}function mf(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var u9=A(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return f(t)}),OU=Y(function(e,r,n,t){for(var o=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)o.push(v(e,r.a,n.a,t.a));return f(o)}),f9=Ae(function(e,r,n,t,o){for(var c=[];r.b&&n.b&&t.b&&o.b;r=r.b,n=n.b,t=t.b,o=o.b)c.push(x(e,r.a,n.a,t.a,o.a));return f(c)}),NU=Br(function(e,r,n,t,o,c){for(var i=[];r.b&&n.b&&t.b&&o.b&&c.b;r=r.b,n=n.b,t=t.b,o=o.b,c=c.b)i.push(U(e,r.a,n.a,t.a,o.a,c.a));return f(i)}),$9=s(function(e,r){return f(mf(r).sort(function(n,t){return ce(e(n),e(t))}))}),l9=s(function(e,r){return f(mf(r).sort(function(n,t){var o=a(e,n,t);return o===mb?0:o===hb?-1:1}))}),v9=s(function(e,r){return e+r}),s9=s(function(e,r){return e-r}),d9=s(function(e,r){return e*r}),b9=s(function(e,r){return e/r}),p9=s(function(e,r){return e/r|0}),m9=s(Math.pow),h9=s(function(e,r){return r%e}),g9=s(function(e,r){var n=r%e;return e===0?mn(11):n>0&&e<0||n<0&&e>0?n+e:n}),_9=Math.PI,ZU=Math.E,y9=Math.cos,C9=Math.sin,P9=Math.tan,S9=Math.acos,JU=Math.asin,x9=Math.atan,j9=s(Math.atan2);function k9(e){return e}function XU(e){return e|0}function w9(e){return e===1/0||e===-1/0}var L9=Math.ceil,A9=Math.floor,T9=Math.round,M9=Math.sqrt,Sd=Math.log,D9=isNaN;function z9(e){return!e}var B9=s(function(e,r){return e&&r}),V9=s(function(e,r){return e||r}),YU=s(function(e,r){return e!==r}),E9=s(function(e,r){return e+r});function H9(e){var r=e.charCodeAt(0);return isNaN(r)?D:V(55296<=r&&r<=56319?y(e[0]+e[1],e.slice(2)):y(e[0],e.slice(1)))}var I9=s(function(e,r){return e+r});function F9(e){return e.length}var QU=s(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;){var c=r.charCodeAt(o);if(55296<=c&&c<=56319){t[o]=e(r[o]+r[o+1]),o+=2;continue}t[o]=e(r[o]),o++}return t.join("")}),KU=s(function(e,r){for(var n=[],t=r.length,o=0;o<t;){var c=r[o],i=r.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=r[o],o++),e(c)&&n.push(c)}return n.join("")});function U9(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}var R9=A(function(e,r,n){for(var t=n.length,o=0;o<t;){var c=n[o],i=n.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=n[o],o++),r=a(e,c,r)}return r}),q9=A(function(e,r,n){for(var t=n.length;t--;){var o=n[t],c=n.charCodeAt(t);56320<=c&&c<=57343&&(t--,o=n[t]+o),r=a(e,o,r)}return r}),G9=s(function(e,r){return r.split(e)}),W9=s(function(e,r){return r.join(e)}),O9=A(function(e,r,n){return n.slice(e,r)});function N9(e){return e.trim()}function eR(e){return e.replace(/^\s+/,"")}function rR(e){return e.replace(/\s+$/,"")}function aR(e){return f(e.trim().split(/\s+/g))}function nR(e){return f(e.split(/\r\n|\r|\n/g))}function Z9(e){return e.toUpperCase()}function J9(e){return e.toLowerCase()}var tR=s(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1}),X9=s(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Y9=s(function(e,r){return r.indexOf(e)>-1}),Q9=s(function(e,r){return r.indexOf(e)===0}),K9=s(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length}),eh=s(function(e,r){var n=e.length;if(n<1)return S;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+n;return f(o)});function xd(e){return e+""}function rh(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,o=t;o<e.length;++o){var c=e.charCodeAt(o);if(c<48||57<c)return D;r=10*r+c-48}return o==t?D:V(n==45?-r:r)}function ah(e){if(e.length===0||/[\sxbo]/.test(e))return D;var r=+e;return r===r?V(r):D}function nh(e){return mf(e).join("")}function th(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function oh(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function oR(e){return e.toUpperCase()}function ch(e){return e.toLowerCase()}function cR(e){return e.toLocaleUpperCase()}function iR(e){return e.toLocaleLowerCase()}function ih(e){return{$:0,a:e}}function uh(e){return{$:1,a:e}}function Mi(e){return{$:2,b:e}}var fh=Mi(function(e){return typeof e!="number"?Ya("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?ta(e):Ya("an INT",e)}),$h=Mi(function(e){return typeof e=="boolean"?ta(e):Ya("a BOOL",e)}),lh=Mi(function(e){return typeof e=="number"?ta(e):Ya("a FLOAT",e)}),vh=Mi(function(e){return ta(e)}),sh=Mi(function(e){return typeof e=="string"?ta(e):e instanceof String?ta(e+""):Ya("a STRING",e)});function dh(e){return{$:3,b:e}}function bh(e){return{$:4,b:e}}function ph(e){return{$:5,c:e}}var mh=s(function(e,r){return{$:6,d:e,b:r}}),hh=s(function(e,r){return{$:7,e,b:r}});function gh(e){return{$:8,b:e}}function Wt(e,r){return{$:9,f:e,g:r}}var _h=s(function(e,r){return{$:10,b:r,h:e}});function yh(e){return{$:11,g:e}}var Ch=s(function(e,r){return Wt(e,[r])}),Ph=A(function(e,r,n){return Wt(e,[r,n])}),Sh=Y(function(e,r,n,t){return Wt(e,[r,n,t])}),xh=Ae(function(e,r,n,t,o){return Wt(e,[r,n,t,o])}),jh=Br(function(e,r,n,t,o,c){return Wt(e,[r,n,t,o,c])}),kh=Gt(function(e,r,n,t,o,c,i){return Wt(e,[r,n,t,o,c,i])}),uR=Be(function(e,r,n,t,o,c,i,u){return Wt(e,[r,n,t,o,c,i,u])}),fR=c0(function(e,r,n,t,o,c,i,u,$){return Wt(e,[r,n,t,o,c,i,u,$])}),wh=s(function(e,r){try{var n=JSON.parse(r);return Xa(e,n)}catch(t){return Ha(a(I0,"This is not valid JSON! "+t.message,r))}}),u0=s(function(e,r){return Xa(e,r)});function Xa(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ta(e.c):Ya("null",r);case 3:return hf(r)?jd(e.b,r,f):Ya("a LIST",r);case 4:return hf(r)?jd(e.b,r,Lh):Ya("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ya("an OBJECT with a field named `"+n+"`",r);var l=Xa(e.b,r[n]);return Sn(l)?l:Ha(a(gb,n,l.a));case 7:var t=e.e;if(!hf(r))return Ya("an ARRAY",r);if(t>=r.length)return Ya("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var l=Xa(e.b,r[t]);return Sn(l)?l:Ha(a(_b,t,l.a));case 8:if(typeof r!="object"||r===null||hf(r))return Ya("an OBJECT",r);var o=S;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var l=Xa(e.b,r[c]);if(!Sn(l))return Ha(a(gb,c,l.a));o=qn(y(c,l.a),o)}return ta(Te(o));case 9:for(var i=e.f,u=e.g,$=0;$<u.length;$++){var l=Xa(u[$],r);if(!Sn(l))return l;i=i(l.a)}return ta(i);case 10:var l=Xa(e.b,r);return Sn(l)?Xa(e.h(l.a),r):l;case 11:for(var d=S,b=e.g;b.b;b=b.b){var l=Xa(b.a,r);if(Sn(l))return l;d=qn(l.a,d)}return Ha(r_(Te(d)));case 1:return Ha(a(I0,e.a,r));case 0:return ta(e.a)}}function jd(e,r,n){for(var t=r.length,o=new Array(t),c=0;c<t;c++){var i=Xa(e,r[c]);if(!Sn(i))return Ha(a(_b,c,i.a));o[c]=i.a}return ta(n(o))}function hf(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Lh(e){return a(W0,e.length,function(r){return e[r]})}function Ya(e,r){return Ha(a(I0,"Expecting "+e,r))}function mc(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return mc(e.b,r.b);case 6:return e.d===r.d&&mc(e.b,r.b);case 7:return e.e===r.e&&mc(e.b,r.b);case 9:return e.f===r.f&&kd(e.g,r.g);case 10:return e.h===r.h&&mc(e.b,r.b);case 11:return kd(e.g,r.g)}}function kd(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!mc(e[t],r[t]))return!1;return!0}var Ah=s(function(e,r){return JSON.stringify(r,null,e)+""});function $R(e){return{$:0,a:e}}function lR(e){return e.a}function f0(e){return e}function vR(e){return e}function Th(){return[]}function Mh(){return{}}var Dh=A(function(e,r,n){var t=r;return e==="toJSON"&&typeof t=="function"||(n[e]=t),n});function zh(e){return s(function(r,n){return n.push(e(r)),n})}var Bh=null,Vh=s(function(e,r){return e&r}),Eh=s(function(e,r){return e|r}),Hh=s(function(e,r){return e^r});function sR(e){return~e}var Ih=s(function(e,r){return r<<e}),Fh=s(function(e,r){return r>>e}),Uh=s(function(e,r){return r>>>e});function Qa(e){return{$:0,a:e}}function $0(e){return{$:1,a:e}}function aa(e){return{$:2,b:e,c:null}}var l0=s(function(e,r){return{$:3,b:e,d:r}}),Rh=s(function(e,r){return{$:4,b:e,d:r}});function qh(e){return{$:5,b:e}}var Gh=0;function v0(e){var r={$:0,e:Gh++,f:e,g:null,h:[]};return b0(r),r}function s0(e){return aa(function(r){r(Qa(v0(e)))})}function wd(e,r){e.h.push(r),b0(e)}var Wh=s(function(e,r){return aa(function(n){wd(e,r),n(Qa(_o))})});function Oh(e){return aa(function(r){var n=e.f;n.$===2&&n.c&&n.c(),e.f=null,r(Qa(_o))})}var d0=!1,Ld=[];function b0(e){if(Ld.push(e),!d0){for(d0=!0;e=Ld.shift();)Nh(e);d0=!1}}function Nh(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,b0(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}function Zh(e){return aa(function(r){var n=setTimeout(function(){r(Qa(_o))},e);return function(){clearTimeout(n)}})}var dR=Y(function(e,r,n,t){return p0(r,t,e.b_,e.uT,e.ay,function(){return function(){}})});function p0(e,r,n,t,o,c){var i=a(u0,e,r?r.flags:void 0);Sn(i)||mn(2);var u={},$=n(i.a),l=$.a,d=c(g,l),b=Xh(u,g);function g(_,p){var m=a(t,_,l);d(l=m.a,p),Dd(u,m.b,o(l))}return Dd(u,$.b,o(l)),b?{ports:b}:{}}var Jh;function bR(e){Jh.add(e)}var na={};function Xh(e,r){var n;for(var t in na){var o=na[t];o.a&&(n=n||{},n[t]=o.a(t,r)),e[t]=Yh(o,r)}return n}function m0(e,r,n,t,o){return{b:e,c:r,d:n,e:t,f:o}}function Yh(e,r){var n={g:r,h:void 0},t=e.c,o=e.d,c=e.e,i=e.f;function u($){return a(l0,u,qh(function(l){var d=l.a;return l.$===0?v(o,n,d,$):c&&i?x(t,n,d.i,d.j,$):v(t,n,c?d.i:d.j,$)}))}return n.h=v0(a(l0,u,e.b))}var Qh=s(function(e,r){return aa(function(n){e.g(r),n(Qa(_o))})}),Kh=s(function(e,r){return a(Wh,e.h,{$:0,a:r})});function Di(e){return function(r){return{$:1,k:e,l:r}}}function Ad(e){return{$:2,m:e}}var Td=s(function(e,r){return{$:3,n:e,o:r}}),Md=[],h0=!1;function Dd(e,r,n){if(Md.push({p:e,q:r,r:n}),!h0){h0=!0;for(var t;t=Md.shift();)e7(t.p,t.q,t.r);h0=!1}}function e7(e,r,n){var t={};gf(!0,r,t,null),gf(!1,n,t,null);for(var o in e)wd(e[o],{$:"fx",a:t[o]||{i:S,j:S}})}function gf(e,r,n,t){switch(r.$){case 1:var o=r.k,c=r7(e,o,t,r.l);n[o]=a7(e,c,n[o]);return;case 2:for(var i=r.m;i.b;i=i.b)gf(e,i.a,n,t);return;case 3:gf(e,r.o,n,{s:r.n,t});return}}function r7(e,r,n,t){function o(i){for(var u=n;u;u=u.t)i=u.s(i);return i}var c=e?na[r].e:na[r].f;return a(c,o,t)}function a7(e,r,n){return n=n||{i:S,j:S},e?n.i=qn(r,n.i):n.j=qn(r,n.j),n}function zd(e){na[e]&&mn(3,e)}function Ot(e,r){return zd(e),na[e]={e:n7,u:r,a:t7},Di(e)}var n7=s(function(e,r){return r});function t7(e){var r=[],n=na[e].u,t=Zh(0);na[e].b=t,na[e].c=A(function(i,u,$){for(;u.b;u=u.b)for(var l=r,d=n(u.a),b=0;b<l.length;b++)l[b](d);return t});function o(i){r.push(i)}function c(i){r=r.slice();var u=r.indexOf(i);u>=0&&r.splice(u,1)}return{subscribe:o,unsubscribe:c}}function g0(e,r){return zd(e),na[e]={f:o7,u:r,a:c7},Di(e)}var o7=s(function(e,r){return function(n){return e(r(n))}});function c7(e,r){var n=S,t=na[e].u,o=Qa(null);na[e].b=o,na[e].c=A(function(i,u,$){return n=u,o});function c(i){var u=a(u0,t,i);Sn(u)||mn(4,e,u.a);for(var $=u.a,l=n;l.b;l=l.b)r(l.a($))}return{send:c}}function i7(e){pc.Elm?Bd(pc.Elm,e):pc.Elm=e}function Bd(e,r){for(var n in r)n in e?n=="init"?mn(6):Bd(e[n],r[n]):e[n]=r[n]}function pR(e){pc.Elm?Vd("Elm",pc.Elm,e):pc.Elm=e}function Vd(e,r,n){for(var t in n)t in r?t=="init"?mn(6,e):Vd(e+"."+t,r[t],n[t]):r[t]=n[t]}var _f,Jr=typeof document<"u"?document:{};function _0(e,r){e.appendChild(r)}var mR=Y(function(e,r,n,t){var o=t.node;return o.parentNode.replaceChild(Zt(e,function(){}),o),{}});function y0(e){return{$:0,a:e}}var Ed=s(function(e,r){return s(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b||0,o.push(i)}return c+=o.length,{$:1,c:r,d:S0(n),e:o,f:e,b:c}})}),xa=Ed(void 0),Hd=s(function(e,r){return s(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b.b||0,o.push(i)}return c+=o.length,{$:2,c:r,d:S0(n),e:o,f:e,b:c}})}),u7=Hd(void 0);function Id(e,r,n,t){return{$:3,d:S0(e),g:r,h:n,i:t}}var f7=s(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Nt(e,r){return{$:5,l:e,m:r,k:void 0}}var hR=s(function(e,r){return Nt([e,r],function(){return e(r)})}),gR=A(function(e,r,n){return Nt([e,r,n],function(){return a(e,r,n)})}),$7=Y(function(e,r,n,t){return Nt([e,r,n,t],function(){return v(e,r,n,t)})}),_R=Ae(function(e,r,n,t,o){return Nt([e,r,n,t,o],function(){return x(e,r,n,t,o)})}),yR=Br(function(e,r,n,t,o,c){return Nt([e,r,n,t,o,c],function(){return U(e,r,n,t,o,c)})}),CR=Gt(function(e,r,n,t,o,c,i){return Nt([e,r,n,t,o,c,i],function(){return wr(e,r,n,t,o,c,i)})}),PR=Be(function(e,r,n,t,o,c,i,u){return Nt([e,r,n,t,o,c,i,u],function(){return ra(e,r,n,t,o,c,i,u)})}),SR=c0(function(e,r,n,t,o,c,i,u,$){return Nt([e,r,n,t,o,c,i,u,$],function(){return go(e,r,n,t,o,c,i,u,$)})}),Fd=s(function(e,r){return{$:"a0",n:e,o:r}}),l7=s(function(e,r){return{$:"a1",n:e,o:r}}),C0=s(function(e,r){return{$:"a2",n:e,o:r}}),yf=s(function(e,r){return{$:"a3",n:e,o:r}}),v7=A(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}}),s7=/^script$/i,d7=/^(on|formAction$)/i,b7=/^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i,P0=/^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;function Cf(e){return s7.test(e)?"p":e}function Ud(e){return d7.test(e)?"data-"+e:e}function p7(e){return e=="innerHTML"||e=="outerHTML"||e=="formAction"?"data-"+e:e}function xR(e){return b7.test(e)?"":e}function Rd(e){return P0.test(e)?"":e}function m7(e){return typeof e=="string"&&P0.test(e)||Array.isArray(e)&&P0.test(String(e))?"":e}var h7=s(function(e,r){return r.$==="a0"?a(Fd,r.n,g7(e,r.o)):r});function g7(e,r){var n=Y0(r);return{$:r.$,a:n?v(Xn,n<3?_7:y7,ae(e),r.a):a(Ze,e,r.a)}}var _7=s(function(e,r){return y(e(r.a),r.b)}),y7=s(function(e,r){return{T:e(r.T),Z:r.Z,W:r.W}});function S0(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,o=n.n,c=n.o;if(t==="a2"){o==="className"?qd(r,o,c):r[o]=c;continue}var i=r[t]||(r[t]={});t==="a3"&&o==="class"?qd(i,o,c):i[o]=c}return r}function qd(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Zt(e,r){var n=e.$;if(n===5)return Zt(e.k||(e.k=e.m()),r);if(n===0)return Jr.createTextNode(e.a);if(n===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var c={j:o,p:r},i=Zt(t,c);return i.elm_event_node_ref=c,i}if(n===3){var i=e.h(e.g);return x0(i,r,e.d),i}var i=e.f?Jr.createElementNS(e.f,e.c):Jr.createElement(e.c);_f&&e.c=="a"&&i.addEventListener("click",_f(i)),x0(i,r,e.d);for(var u=e.e,$=0;$<u.length;$++)_0(i,Zt(n===1?u[$]:u[$].b,r));return i}function x0(e,r,n){for(var t in n){var o=n[t];t==="a1"?C7(e,o):t==="a0"?x7(e,r,o):t==="a3"?P7(e,o):t==="a4"?S7(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function C7(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function P7(e,r){for(var n in r){var t=r[n];typeof t<"u"?e.setAttribute(n,t):e.removeAttribute(n)}}function S7(e,r){for(var n in r){var t=r[n],o=t.f,c=t.o;typeof c<"u"?e.setAttributeNS(o,n,c):e.removeAttributeNS(o,n)}}function x7(e,r,n){var t=e.elmFs||(e.elmFs={});for(var o in n){var c=n[o],i=t[o];if(!c){e.removeEventListener(o,i),t[o]=void 0;continue}if(i){var u=i.q;if(u.$===c.$){i.q=c;continue}e.removeEventListener(o,i)}i=j7(r,c),e.addEventListener(o,i,j0&&{passive:Y0(c)<2}),t[o]=i}}var j0;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){j0=!0}}))}catch{}function j7(e,r){function n(t){var o=n.q,c=Xa(o.a,t);if(Sn(c)){for(var i=Y0(o),u=c.a,$=i?i<3?u.a:u.T:u,l=i==1?u.b:i==3&&u.Z,d=(l&&t.stopPropagation(),(i==2?u.b:i==3&&u.W)&&t.preventDefault(),e),b,g;b=d.j;){if(typeof b=="function")$=b($);else for(var g=b.length;g--;)$=b[g]($);d=d.p}d($,l)}}return n.q=r,n}function k7(e,r){return e.$==r.$&&mc(e.a,r.a)}function Gd(e,r){var n=[];return hn(e,r,n,0),n}function da(e,r,n,t){var o={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(o),o}function hn(e,r,n,t){if(e!==r){var o=e.$,c=r.$;if(o!==c)if(o===1&&c===2)r=B7(r),c=1;else{da(n,0,t,r);return}switch(c){case 5:for(var i=e.l,u=r.l,$=i.length,l=$===u.length;l&&$--;)l=i[$]===u[$];if(l){r.k=e.k;return}r.k=r.m();var d=[];hn(e.k,r.k,d,0),d.length>0&&da(n,1,t,d);return;case 4:for(var b=e.j,g=r.j,_=!1,p=e.k;p.$===4;)_=!0,typeof b!="object"?b=[b,p.j]:b.push(p.j),p=p.k;for(var m=r.k;m.$===4;)_=!0,typeof g!="object"?g=[g,m.j]:g.push(m.j),m=m.k;if(_&&b.length!==g.length){da(n,0,t,r);return}(_?!w7(b,g):b!==g)&&da(n,2,t,g),hn(p,m,n,t+1);return;case 0:e.a!==r.a&&da(n,3,t,r.a);return;case 1:Wd(e,r,n,t,L7);return;case 2:Wd(e,r,n,t,A7);return;case 3:if(e.h!==r.h){da(n,0,t,r);return}var P=k0(e.d,r.d);P&&da(n,4,t,P);var C=r.i(e.g,r.g);C&&da(n,5,t,C);return}}}function w7(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Wd(e,r,n,t,o){if(e.c!==r.c||e.f!==r.f){da(n,0,t,r);return}var c=k0(e.d,r.d);c&&da(n,4,t,c),o(e,r,n,t)}function k0(e,r,n){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var c=k0(e[o],r[o]||{},o);c&&(t=t||{},t[o]=c);continue}if(!(o in r)){t=t||{},t[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var i=e[o],u=r[o];i===u&&o!=="value"&&o!=="checked"||n==="a0"&&k7(i,u)||(t=t||{},t[o]=u)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function L7(e,r,n,t){var o=e.e,c=r.e,i=o.length,u=c.length;i>u?da(n,6,t,{v:u,i:i-u}):i<u&&da(n,7,t,{v:i,e:c});for(var $=i<u?i:u,l=0;l<$;l++){var d=o[l];hn(d,c[l],n,++t),t+=d.b||0}}function A7(e,r,n,t){for(var o=[],c={},i=[],u=e.e,$=r.e,l=u.length,d=$.length,b=0,g=0,_=t;b<l&&g<d;){var p=u[b],m=$[g],P=p.a,C=m.a,j=p.b,L=m.b,T=void 0,F=void 0;if(P===C){_++,hn(j,L,o,_),_+=j.b||0,b++,g++;continue}var q=u[b+1],R=$[g+1];if(q){var K=q.a,J=q.b;F=C===K}if(R){var ue=R.a,ge=R.b;T=P===ue}if(T&&F){_++,hn(j,ge,o,_),zi(c,o,P,L,g,i),_+=j.b||0,_++,Bi(c,o,P,J,_),_+=J.b||0,b+=2,g+=2;continue}if(T){_++,zi(c,o,C,L,g,i),hn(j,ge,o,_),_+=j.b||0,b+=1,g+=2;continue}if(F){_++,Bi(c,o,P,j,_),_+=j.b||0,_++,hn(J,L,o,_),_+=J.b||0,b+=2,g+=1;continue}if(q&&K===ue){_++,Bi(c,o,P,j,_),zi(c,o,C,L,g,i),_+=j.b||0,_++,hn(J,ge,o,_),_+=J.b||0,b+=2,g+=2;continue}break}for(;b<l;){_++;var p=u[b],j=p.b;Bi(c,o,p.a,j,_),_+=j.b||0,b++}for(;g<d;){var De=De||[],m=$[g];zi(c,o,m.a,m.b,void 0,De),g++}(o.length>0||i.length>0||De)&&da(n,8,t,{w:o,x:i,y:De})}var Od="_elmW6BL";function zi(e,r,n,t,o,c){var i=e[n];if(!i){i={c:0,z:t,r:o,s:void 0},c.push({r:o,A:i}),e[n]=i;return}if(i.c===1){c.push({r:o,A:i}),i.c=2;var u=[];hn(i.z,t,u,i.r),i.r=o,i.s.s={w:u,A:i};return}zi(e,r,n+Od,t,o,c)}function Bi(e,r,n,t,o){var c=e[n];if(!c){var i=da(r,9,o,void 0);e[n]={c:1,z:t,r:o,s:i};return}if(c.c===0){c.c=2;var u=[];hn(t,c.z,u,o),da(r,9,o,{w:u,A:c});return}Bi(e,r,n+Od,t,o)}function Nd(e,r,n,t){Vi(e,r,n,0,0,r.b,t)}function Vi(e,r,n,t,o,c,i){for(var u=n[t],$=u.r;$===o;){var l=u.$;if(l===1)Nd(e,r.k,u.s,i);else if(l===8){u.t=e,u.u=i;var d=u.s.w;d.length>0&&Vi(e,r,d,0,o,c,i)}else if(l===9){u.t=e,u.u=i;var b=u.s;if(b){b.A.s=e;var d=b.w;d.length>0&&Vi(e,r,d,0,o,c,i)}}else u.t=e,u.u=i;if(t++,!(u=n[t])||($=u.r)>c)return t}var g=r.$;if(g===4){for(var _=r.k;_.$===4;)_=_.k;return Vi(e,_,n,t,o+1,c,e.elm_event_node_ref)}for(var p=r.e,m=e.childNodes,P=0;P<p.length;P++){o++;var C=g===1?p[P]:p[P].b,j=o+(C.b||0);if(o<=$&&$<=j&&(t=Vi(m[P],C,n,t,o,j,i),!(u=n[t])||($=u.r)>c))return t;o=j}return t}function Zd(e,r,n,t){return n.length===0?e:(Nd(e,r,n,t),Pf(e,n))}function Pf(e,r){for(var n=0;n<r.length;n++){var t=r[n],o=t.t,c=T7(o,t);o===e&&(e=c)}return e}function T7(e,r){switch(r.$){case 0:return M7(e,r.s,r.u);case 4:return x0(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Pf(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var c=r.s,t=0;t<c.i;t++)e.removeChild(e.childNodes[c.v]);return e;case 7:for(var c=r.s,n=c.e,t=c.v,o=e.childNodes[t];t<n.length;t++)e.insertBefore(Zt(n[t],r.u),o);return e;case 9:var c=r.s;if(!c)return e.parentNode.removeChild(e),e;var i=c.A;return typeof i.r<"u"&&e.parentNode.removeChild(e),i.s=Pf(e,c.w),e;case 8:return D7(e,r);case 5:return r.s(e);default:mn(10)}}function M7(e,r,n){var t=e.parentNode,o=Zt(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function D7(e,r){var n=r.s,t=z7(n.y,r);e=Pf(e,n.w);for(var o=n.x,c=0;c<o.length;c++){var i=o[c],u=i.A,$=u.c===2?u.s:Zt(u.z,r.u);e.insertBefore($,e.childNodes[i.r])}return t&&_0(e,t),e}function z7(e,r){if(e){for(var n=Jr.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],c=o.A;_0(n,c.c===2?c.s:Zt(c.z,r.u))}return n}}function w0(e){if(e.nodeType===3)return y0(e.textContent);if(e.nodeType!==1)return y0("");for(var r=S,n=e.attributes,t=n.length;t--;){var o=n[t],c=o.name,i=o.value;r=qn(a(yf,c,i),r)}for(var u=e.tagName.toLowerCase(),$=S,l=e.childNodes,t=l.length;t--;)$=qn(w0(l[t]),$);return v(xa,u,r,$)}function B7(e){for(var r=e.e,n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var V7,E7=V7||Y(function(e,r,n,t){return p0(r,t,e.b_,e.uT,e.ay,function(o,c){var i=e.bp,u=t.node,$=w0(u);return Jd(c,function(l){var d=i(l),b=Gd($,d);u=Zd(u,$,b,o),$=d})})}),H7,I7=H7||Y(function(e,r,n,t){return p0(r,t,e.b_,e.uT,e.ay,function(o,c){var i=e.kT&&e.kT(o),u=e.bp,$=Jr.title,l=Jr.body,d=w0(l);return Jd(c,function(b){_f=i;var g=u(b),_=xa("body")(S)(g.lM),p=Gd(d,_);l=Zd(l,d,p,o),d=_,_f=0,$!==g.o9&&(Jr.title=$=g.o9)})})}),F7=typeof cancelAnimationFrame<"u"?cancelAnimationFrame:function(e){clearTimeout(e)},Ei=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Jd(e,r){r(e);var n=0;function t(){n=n===1?0:(Ei(t),r(e),1)}return function(o,c){e=o,c?(r(e),n===2&&(n=1)):(n===0&&Ei(t),n=2)}}function jR(e){var r=e.td,n=e.te,t=function(){t.a(r(L0()))};return I7({kT:function(o){return t.a=o,Gn.addEventListener("popstate",t),Gn.navigator.userAgent.indexOf("Trident")<0||Gn.addEventListener("hashchange",t),s(function(c,i){if(!i.ctrlKey&&!i.metaKey&&!i.shiftKey&&i.button<1&&!c.target&&!c.hasAttribute("download")){i.preventDefault();var u=c.href,$=L0(),l=fp(u).a;o(n(l&&$.oq===l.oq&&$.mK===l.mK&&$.oj.a===l.oj.a?ly(l):$y(u)))}})},b_:function(o){return v(e.b_,o,L0(),t)},bp:e.bp,uT:e.uT,ay:e.ay})}function L0(){return fp(Jr.location.href).a||mn(1)}var kR=s(function(e,r){return a(Xi,kc,aa(function(){r&&history.go(r),e()}))}),wR=s(function(e,r){return a(Xi,kc,aa(function(){history.pushState({},"",r),e()}))}),LR=s(function(e,r){return a(Xi,kc,aa(function(){history.replaceState({},"",r),e()}))}),Xd={addEventListener:function(){},removeEventListener:function(){}},yo=typeof document<"u"?document:Xd,Gn=typeof window<"u"?window:Xd,U7=A(function(e,r,n){return s0(aa(function(t){function o(c){v0(n(c))}return e.addEventListener(r,o,j0&&{passive:!0}),function(){e.removeEventListener(r,o)}}))}),R7=s(function(e,r){var n=Xa(e,r);return Sn(n)?V(n.a):D});function AR(){return typeof Jr.hidden<"u"?{jN:"hidden",qn:"visibilitychange"}:typeof Jr.mozHidden<"u"?{jN:"mozHidden",qn:"mozvisibilitychange"}:typeof Jr.msHidden<"u"?{jN:"msHidden",qn:"msvisibilitychange"}:typeof Jr.webkitHidden<"u"?{jN:"webkitHidden",qn:"webkitvisibilitychange"}:{jN:"hidden",qn:"visibilitychange"}}function q7(){return aa(function(e){var r=Ei(function(){e(Qa(Date.now()))});return function(){F7(r)}})}function G7(){return aa(function(e){e(Qa(Date.now()))})}function Sf(e,r){return aa(function(n){Ei(function(){var t=document.getElementById(e);n(t?Qa(r(t)):$0(vy(e)))})})}function W7(e){return aa(function(r){Ei(function(){r(Qa(e()))})})}var O7=s(function(e,r){return Sf(r,function(n){return n[e](),_o})});function TR(){return{d1:Yd(),pr:{pA:Gn.pageXOffset,pB:Gn.pageYOffset,lq:yo.documentElement.clientWidth,jM:yo.documentElement.clientHeight}}}function Yd(){var e=yo.body,r=yo.documentElement;return{lq:Math.max(e.scrollWidth,e.offsetWidth,r.scrollWidth,r.offsetWidth,r.clientWidth),jM:Math.max(e.scrollHeight,e.offsetHeight,r.scrollHeight,r.offsetHeight,r.clientHeight)}}var MR=s(function(e,r){return W7(function(){return Gn.scroll(e,r),_o})});function DR(e){return Sf(e,function(r){return{d1:{lq:r.scrollWidth,jM:r.scrollHeight},pr:{pA:r.scrollLeft,pB:r.scrollTop,lq:r.clientWidth,jM:r.clientHeight}}})}var N7=A(function(e,r,n){return Sf(e,function(t){return t.scrollLeft=r,t.scrollTop=n,_o})});function zR(e){return Sf(e,function(r){var n=r.getBoundingClientRect(),t=Gn.pageXOffset,o=Gn.pageYOffset;return{d1:Yd(),pr:{pA:t,pB:o,lq:yo.documentElement.clientWidth,jM:yo.documentElement.clientHeight},re:{pA:t+n.left,pB:o+n.top,lq:n.width,jM:n.height}}})}function BR(e){return a(Xi,kc,aa(function(r){Jr.location.reload(e)}))}function VR(e){return a(Xi,kc,aa(function(r){try{Gn.location=e}catch{Jr.location.reload(!1)}}))}var Z7=Br(function(e,r,n,t,o,c){var i=r!==9728&&r!==9729;return aa(function(u){var $=new Image;function l(d){var b=d.createTexture();return d.bindTexture(d.TEXTURE_2D,b),d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,$),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,e),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,r),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,n),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,t),i&&d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null),b}$.onload=function(){var d=$.width,b=$.height,g=(d&d-1)===0,_=(b&b-1)===0,p=g&&_||!i&&n===33071&&t===33071;u(p?Qa({$:0,qI:l,a:d,b}):$0(a(IS,d,b)))},$.onerror=function(){u($0(HS))},c.slice(0,5)!=="data:"&&($.crossOrigin="Anonymous"),$.src=c})}),ER=function(e){return y(e.a,e.b)},J7=A(function(e,r,n){return Id(r,{a:e,b:n},X7,Y7)});function X7(e){return a(Qd,e,Jr.createElement("div"))}function Y7(e,r){return e.b===r.b&&e.a===r.a?!1:Qd(r)}var Qd=s(function(e,r){return r.innerHTML=Q7(e.b,K7(e.a)),r}),Q7=(function(){var e={},r=e.exports={};return(function(){var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:b,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:b,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:b,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};n.bullet=/(?:[*+-]|\d+\.)/,n.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,n.item=d(n.item,"gm")(/bull/g,n.bullet)(),n.list=d(n.list)(/bull/g,n.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+n.def.source+")")(),n.blockquote=d(n.blockquote)("def",n.def)(),n._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",n.html=d(n.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,n._tag)(),n.paragraph=d(n.paragraph)("hr",n.hr)("heading",n.heading)("lheading",n.lheading)("blockquote",n.blockquote)("tag","<"+n._tag)("def",n.def)(),n.normal=g({},n),n.gfm=g({},n.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=d(n.paragraph)("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|")(),n.tables=g({},n.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function t(p){this.tokens=[],this.tokens.links={},this.options=p||_.defaults,this.rules=n.normal,this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}t.rules=n,t.lex=function(p,m){var P=new t(m);return P.lex(p)},t.prototype.lex=function(p){return p=p.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,`
`),this.token(p,!0)},t.prototype.token=function(C,m,P){for(var C=C.replace(/^ +$/gm,""),j,L,T,F,q,R,K,J,ue;C;){if((T=this.rules.newline.exec(C))&&(C=C.substring(T[0].length),T[0].length>1&&this.tokens.push({type:"space"})),T=this.rules.code.exec(C)){C=C.substring(T[0].length),T=T[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?T:T.replace(/\n+$/,"")});continue}if(T=this.rules.fences.exec(C)){C=C.substring(T[0].length),this.tokens.push({type:"code",lang:T[2],text:T[3]||""});continue}if(T=this.rules.heading.exec(C)){C=C.substring(T[0].length),this.tokens.push({type:"heading",depth:T[1].length,text:T[2]});continue}if(m&&(T=this.rules.nptable.exec(C))){for(C=C.substring(T[0].length),R={type:"table",header:T[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:T[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:T[3].replace(/\n$/,"").split(`
`)},J=0;J<R.align.length;J++)/^ *-+: *$/.test(R.align[J])?R.align[J]="right":/^ *:-+: *$/.test(R.align[J])?R.align[J]="center":/^ *:-+ *$/.test(R.align[J])?R.align[J]="left":R.align[J]=null;for(J=0;J<R.cells.length;J++)R.cells[J]=R.cells[J].split(/ *\| */);this.tokens.push(R);continue}if(T=this.rules.lheading.exec(C)){C=C.substring(T[0].length),this.tokens.push({type:"heading",depth:T[2]==="="?1:2,text:T[1]});continue}if(T=this.rules.hr.exec(C)){C=C.substring(T[0].length),this.tokens.push({type:"hr"});continue}if(T=this.rules.blockquote.exec(C)){C=C.substring(T[0].length),this.tokens.push({type:"blockquote_start"}),T=T[0].replace(/^ *> ?/gm,""),this.token(T,m,!0),this.tokens.push({type:"blockquote_end"});continue}if(T=this.rules.list.exec(C)){for(C=C.substring(T[0].length),F=T[2],this.tokens.push({type:"list_start",ordered:F.length>1}),T=T[0].match(this.rules.item),j=!1,ue=T.length,J=0;J<ue;J++)R=T[J],K=R.length,R=R.replace(/^ *([*+-]|\d+\.) +/,""),~R.indexOf(`
 `)&&(K-=R.length,R=this.options.pedantic?R.replace(/^ {1,4}/gm,""):R.replace(new RegExp("^ {1,"+K+"}","gm"),"")),this.options.smartLists&&J!==ue-1&&(q=n.bullet.exec(T[J+1])[0],F!==q&&!(F.length>1&&q.length>1)&&(C=T.slice(J+1).join(`
`)+C,J=ue-1)),L=j||/\n\n(?!\s*$)/.test(R),J!==ue-1&&(j=R.charAt(R.length-1)===`
`,L||(L=j)),this.tokens.push({type:L?"loose_item_start":"list_item_start"}),this.token(R,!1,P),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"});continue}if(T=this.rules.html.exec(C)){C=C.substring(T[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(T[1]==="pre"||T[1]==="script"||T[1]==="style"),text:T[0]});continue}if(!P&&m&&(T=this.rules.def.exec(C))){C=C.substring(T[0].length),this.tokens.links[T[1].toLowerCase()]={href:T[2],title:T[3]};continue}if(m&&(T=this.rules.table.exec(C))){for(C=C.substring(T[0].length),R={type:"table",header:T[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:T[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:T[3].replace(/(?: *\| *)?\n$/,"").split(`
`)},J=0;J<R.align.length;J++)/^ *-+: *$/.test(R.align[J])?R.align[J]="right":/^ *:-+: *$/.test(R.align[J])?R.align[J]="center":/^ *:-+ *$/.test(R.align[J])?R.align[J]="left":R.align[J]=null;for(J=0;J<R.cells.length;J++)R.cells[J]=R.cells[J].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(R);continue}if(m&&(T=this.rules.paragraph.exec(C))){C=C.substring(T[0].length),this.tokens.push({type:"paragraph",text:T[1].charAt(T[1].length-1)===`
`?T[1].slice(0,-1):T[1]});continue}if(T=this.rules.text.exec(C)){C=C.substring(T[0].length),this.tokens.push({type:"text",text:T[0]});continue}if(C)throw new Error("Infinite loop on byte: "+C.charCodeAt(0))}return this.tokens};var o={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:b,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^_\_([\s\S]+?)_\_(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|_\_)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:b,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};o._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,o._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,o.link=d(o.link)("inside",o._inside)("href",o._href)(),o.reflink=d(o.reflink)("inside",o._inside)(),o.normal=g({},o),o.pedantic=g({},o.normal,{strong:/^_\_(?=\S)([\s\S]*?\S)_\_(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),o.gfm=g({},o.normal,{escape:d(o.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:d(o.text)("]|","~]|")("|","|https?://|")()}),o.breaks=g({},o.gfm,{br:d(o.br)("{2,}","*")(),text:d(o.gfm.text)("{2,}","*")()});function c(p,m){if(this.options=m||_.defaults,this.links=p,this.rules=o.normal,this.renderer=this.options.renderer||new i,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=o.breaks:this.rules=o.gfm:this.options.pedantic&&(this.rules=o.pedantic)}c.rules=o,c.output=function(p,m,P){var C=new c(m,P);return C.output(p)},c.prototype.output=function(p){for(var m="",P,C,j,L;p;){if(L=this.rules.escape.exec(p)){p=p.substring(L[0].length),m+=L[1];continue}if(L=this.rules.autolink.exec(p)){p=p.substring(L[0].length),L[2]==="@"?(C=L[1].charAt(6)===":"?this.mangle(L[1].substring(7)):this.mangle(L[1]),j=this.mangle("mailto:")+C):(C=$(L[1]),j=C),m+=this.renderer.link(j,null,C);continue}if(!this.inLink&&(L=this.rules.url.exec(p))){p=p.substring(L[0].length),C=$(L[1]),j=C,m+=this.renderer.link(j,null,C);continue}if(L=this.rules.tag.exec(p)){!this.inLink&&/^<a /i.test(L[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(L[0])&&(this.inLink=!1),p=p.substring(L[0].length),m+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(L[0]):$(L[0]):L[0];continue}if(L=this.rules.link.exec(p)){p=p.substring(L[0].length),this.inLink=!0,m+=this.outputLink(L,{href:L[2],title:L[3]}),this.inLink=!1;continue}if((L=this.rules.reflink.exec(p))||(L=this.rules.nolink.exec(p))){if(p=p.substring(L[0].length),P=(L[2]||L[1]).replace(/\s+/g," "),P=this.links[P.toLowerCase()],!P||!P.href){m+=L[0].charAt(0),p=L[0].substring(1)+p;continue}this.inLink=!0,m+=this.outputLink(L,P),this.inLink=!1;continue}if(L=this.rules.strong.exec(p)){p=p.substring(L[0].length),m+=this.renderer.strong(this.output(L[2]||L[1]));continue}if(L=this.rules.em.exec(p)){p=p.substring(L[0].length),m+=this.renderer.em(this.output(L[2]||L[1]));continue}if(L=this.rules.code.exec(p)){p=p.substring(L[0].length),m+=this.renderer.codespan($(L[2],!0));continue}if(L=this.rules.br.exec(p)){p=p.substring(L[0].length),m+=this.renderer.br();continue}if(L=this.rules.del.exec(p)){p=p.substring(L[0].length),m+=this.renderer.del(this.output(L[1]));continue}if(L=this.rules.text.exec(p)){p=p.substring(L[0].length),m+=this.renderer.text($(this.smartypants(L[0])));continue}if(p)throw new Error("Infinite loop on byte: "+p.charCodeAt(0))}return m},c.prototype.outputLink=function(p,m){var P=$(m.href),C=m.title?$(m.title):null;return p[0].charAt(0)!=="!"?this.renderer.link(P,C,this.output(p[1])):this.renderer.image(P,C,$(p[1]))},c.prototype.smartypants=function(p){return this.options.smartypants?p.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026"):p},c.prototype.mangle=function(p){if(!this.options.mangle)return p;for(var m="",P=p.length,C=0,j;C<P;C++)j=p.charCodeAt(C),Math.random()>.5&&(j="x"+j.toString(16)),m+="&#"+j+";";return m};function i(p){this.options=p||{}}i.prototype.code=function(p,m,P){if(this.options.highlight){var C=this.options.highlight(p,m);C!=null&&C!==p&&(P=!0,p=C)}return m?'<pre><code class="'+this.options.langPrefix+$(m,!0)+'">'+(P?p:$(p,!0))+`
</code></pre>
`:"<pre><code>"+(P?p:$(p,!0))+`
</code></pre>`},i.prototype.blockquote=function(p){return`<blockquote>
`+p+`</blockquote>
`},i.prototype.html=function(p){return p},i.prototype.heading=function(p,m,P){return"<h"+m+' id="'+this.options.headerPrefix+P.toLowerCase().replace(/[^\w]+/g,"-")+'">'+p+"</h"+m+`>
`},i.prototype.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},i.prototype.list=function(p,m){var P=m?"ol":"ul";return"<"+P+`>
`+p+"</"+P+`>
`},i.prototype.listitem=function(p){return"<li>"+p+`</li>
`},i.prototype.paragraph=function(p){return"<p>"+p+`</p>
`},i.prototype.table=function(p,m){return`<table>
<thead>
`+p+`</thead>
<tbody>
`+m+`</tbody>
</table>
`},i.prototype.tablerow=function(p){return`<tr>
`+p+`</tr>
`},i.prototype.tablecell=function(p,m){var P=m.header?"th":"td",C=m.align?"<"+P+' style="text-align:'+m.align+'">':"<"+P+">";return C+p+"</"+P+`>
`},i.prototype.strong=function(p){return"<strong>"+p+"</strong>"},i.prototype.em=function(p){return"<em>"+p+"</em>"},i.prototype.codespan=function(p){return"<code>"+p+"</code>"},i.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},i.prototype.del=function(p){return"<del>"+p+"</del>"},i.prototype.link=function(p,m,P){if(this.options.sanitize){try{var C=decodeURIComponent(l(p)).replace(/[^\w:]/g,"").toLowerCase()}catch{return""}if(C.indexOf("javascript:")===0||C.indexOf("vbscript:")===0||C.indexOf("data:")===0)return""}var j='<a href="'+p+'"';return m&&(j+=' title="'+m+'"'),j+=">"+P+"</a>",j},i.prototype.image=function(p,m,P){var C='<img src="'+p+'" alt="'+P+'"';return m&&(C+=' title="'+m+'"'),C+=this.options.xhtml?"/>":">",C},i.prototype.text=function(p){return p};function u(p){this.tokens=[],this.token=null,this.options=p||_.defaults,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options}u.parse=function(p,m,P){var C=new u(m,P);return C.parse(p)},u.prototype.parse=function(p){this.inline=new c(p.links,this.options,this.renderer),this.tokens=p.reverse();for(var m="";this.next();)m+=this.tok();return m},u.prototype.next=function(){return this.token=this.tokens.pop()},u.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},u.prototype.parseText=function(){for(var p=this.token.text;this.peek().type==="text";)p+=`
`+this.next().text;return this.inline.output(p)},u.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{var p="",m="",P,C,j,L,T;for(j="",P=0;P<this.token.header.length;P++)L={header:!0,align:this.token.align[P]},j+=this.renderer.tablecell(this.inline.output(this.token.header[P]),{header:!0,align:this.token.align[P]});for(p+=this.renderer.tablerow(j),P=0;P<this.token.cells.length;P++){for(C=this.token.cells[P],j="",T=0;T<C.length;T++)j+=this.renderer.tablecell(this.inline.output(C[T]),{header:!1,align:this.token.align[T]});m+=this.renderer.tablerow(j)}return this.renderer.table(p,m)}case"blockquote_start":{for(var m="";this.next().type!=="blockquote_end";)m+=this.tok();return this.renderer.blockquote(m)}case"list_start":{for(var m="",F=this.token.ordered;this.next().type!=="list_end";)m+=this.tok();return this.renderer.list(m,F)}case"list_item_start":{for(var m="";this.next().type!=="list_item_end";)m+=this.token.type==="text"?this.parseText():this.tok();return this.renderer.listitem(m)}case"loose_item_start":{for(var m="";this.next().type!=="list_item_end";)m+=this.tok();return this.renderer.listitem(m)}case"html":{var q=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(q)}case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};function $(p,m){return p.replace(m?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(p){return p.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(m,P){return P=P.toLowerCase(),P==="colon"?":":P.charAt(0)==="#"?P.charAt(1)==="x"?String.fromCharCode(parseInt(P.substring(2),16)):String.fromCharCode(+P.substring(1)):""})}function d(p,m){return p=p.source,m=m||"",function P(C,j){return C?(j=j.source||j,j=j.replace(/(^|[^\[])\^/g,"$1"),p=p.replace(C,j),P):new RegExp(p,m)}}function b(){}b.exec=b;function g(p){for(var m=1,P,C;m<arguments.length;m++){P=arguments[m];for(C in P)Object.prototype.hasOwnProperty.call(P,C)&&(p[C]=P[C])}return p}function _(p,m,P){if(P||typeof m=="function"){P||(P=m,m=null),m=g({},_.defaults,m||{});var C=m.highlight,j,L,T=0;try{j=t.lex(p,m)}catch(q){return P(q)}L=j.length;var F=function(q){if(q)return m.highlight=C,P(q);var R;try{R=u.parse(j,m)}catch(K){q=K}return m.highlight=C,q?P(q):P(null,R)};if(!C||C.length<3||(delete m.highlight,!L))return F();for(;T<j.length;T++)(function(q){return q.type!=="code"?--L||F():C(q.text,q.lang,function(R,K){if(R)return F(R);if(K==null||K===q.text)return--L||F();q.text=K,q.escaped=!0,--L||F()})})(j[T]);return}try{return m&&(m=g({},_.defaults,m)),u.parse(t.lex(p,m),m)}catch(q){if(q.message+=`
Please report this to https://github.com/chjj/marked.`,(m||_.defaults).silent)return"<p>An error occured:</p><pre>"+$(q.message+"",!0)+"</pre>";throw q}}_.options=_.setOptions=function(p){return g(_.defaults,p),_},_.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new i,xhtml:!1},_.Parser=u,_.parser=u.parse,_.Renderer=i,_.Lexer=t,_.lexer=t.lex,_.InlineLexer=c,_.inlineLexer=c.output,_.parse=_,typeof e<"u"&&typeof r=="object"?e.exports=_:typeof define=="function"&&define.amd?define(function(){return _}):this.marked=_}).call((function(){return this||(typeof window<"u"?window:global)})()),e.exports})();function K7(e){function r(t,o){return!o&&JD(e.qS)&&(o=e.qS.a),typeof hljs<"u"&&o&&hljs.listLanguages().indexOf(o)>=0?hljs.highlight(o,t,!0).value:t}var n=e.rN.a;return{highlight:r,gfm:n,tables:n&&n.ux,breaks:n&&n.p7,sanitize:e.tY,smartypants:e.ud}}var Kd=0;function Hi(e,r){for(;r.b;r=r.b)e(r.a)}function A0(e){for(var r=0;e.b;e=e.b)r++;return r}var eg=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},rg=Ae(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),ag=s(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),ng=s(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),tg=s(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),og=s(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),cg=s(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ig=s(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),ug=s(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),fg=s(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),$g=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},lg=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},vg=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},sg=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},eb=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},rb=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},dg=function(e){e.gl.disable(e.gl.CULL_FACE)},bg=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},pg=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},mg=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ab=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],hg=[lg,vg,sg,eb,rb,dg,bg,pg,mg];function nb(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function gg(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function tb(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function _g(e,r,n,t){for(var o=n.a.mi,c=[],i=0;i<o;i++)c.push(String.fromCharCode(97+i));function u(_,p,m,P,C){var j;if(o===1)for(j=0;j<p;j++)_[m++]=p===1?P[C]:P[C][j];else c.forEach(function(L){for(j=0;j<p;j++)_[m++]=p===1?P[L][C]:P[L][C][j]})}var $=tb(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var l=0,d=$.size*$.arraySize*o,b=new $.type(A0(n.b)*d);Hi(function(_){u(b,$.size*$.arraySize,l,_,t[r.name]||r.name),l+=d},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,b,e.STATIC_DRAW),g}function yg(e,r){if(r.a.mP>0){var n=e.createBuffer(),t=Cg(r.c,r.a.mP);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.mi*A0(r.b),indexBuffer:null,buffers:{}}}function Cg(e,r){var n=new Uint32Array(A0(e)*r),t=0,o;return Hi(function(c){if(r===1)n[t++]=c;else for(o=0;o<r;o++)n[t++]=c[String.fromCharCode(97+o)]},e),n}function ob(e,r){return e+"#"+r}var cb=s(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),eb(n),rb(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(c){if(c.d.b.b){var i,u,$;if(c.b.id&&c.c.id&&(i=ob(c.b.id,c.c.id),u=n.programs[i]),!u){var l;c.b.id?l=n.shaders[c.b.id]:c.b.id=Kd++,l||(l=nb(t,c.b.src,t.VERTEX_SHADER),n.shaders[c.b.id]=l);var d;c.c.id?d=n.shaders[c.c.id]:c.c.id=Kd++,d||(d=nb(t,c.c.src,t.FRAGMENT_SHADER),n.shaders[c.c.id]=d);var b=gg(t,l,d);u={glProgram:b,attributes:Object.assign({},c.b.attributes,c.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},u.uniformSetters=Pg(t,e,u,Object.assign({},c.b.uniforms,c.c.uniforms));var g=t.getProgramParameter(b,t.ACTIVE_ATTRIBUTES);for($=0;$<g;$++){var _=t.getActiveAttrib(b,$),p=t.getAttribLocation(b,_.name);u.activeAttributes.push(_),u.activeAttributeLocations.push(p)}i=ob(c.b.id,c.c.id),n.programs[i]=u}n.lastProgId!==i&&(t.useProgram(u.glProgram),n.lastProgId=i),Sg(u.uniformSetters,c.e);var m=n.buffers.get(c.d);for(m||(m=yg(t,c.d),n.buffers.set(c.d,m)),$=0;$<u.activeAttributes.length;$++){_=u.activeAttributes[$],p=u.activeAttributeLocations[$],m.buffers[_.name]===void 0&&(m.buffers[_.name]=_g(t,_,c.d,u.attributes)),t.bindBuffer(t.ARRAY_BUFFER,m.buffers[_.name]);var P=tb(t,_.type);if(P.arraySize===1)t.enableVertexAttribArray(p),t.vertexAttribPointer(p,P.size,P.baseType,!1,0,0);else for(var C=P.size*4,j=C*P.arraySize,L=0;L<P.arraySize;L++)t.enableVertexAttribArray(p+L),t.vertexAttribPointer(p+L,P.size,P.baseType,!1,j,C*L)}for(n.toggle=!n.toggle,Hi(tB(n),c.a),$=0;$<ab.length;$++){var T=n[ab[$]];T.toggle!==n.toggle&&T.enabled&&(hg[$](n),T.enabled=!1,T.toggle=n.toggle)}m.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,m.indexBuffer),t.drawElements(c.d.a.nO,m.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(c.d.a.nO,0,m.numIndices)}}return Hi(o,e.g),r});function Pg(e,r,n,t){var o=n.glProgram,c=n.currentUniforms,i=0,u=r.f;function $(_,p){var m=p.name,P=e.getUniformLocation(_,m);switch(p.type){case e.INT:return function(j){c[m]!==j&&(e.uniform1i(P,j),c[m]=j)};case e.FLOAT:return function(j){c[m]!==j&&(e.uniform1f(P,j),c[m]=j)};case e.FLOAT_VEC2:return function(j){c[m]!==j&&(e.uniform2f(P,j[0],j[1]),c[m]=j)};case e.FLOAT_VEC3:return function(j){c[m]!==j&&(e.uniform3f(P,j[0],j[1],j[2]),c[m]=j)};case e.FLOAT_VEC4:return function(j){c[m]!==j&&(e.uniform4f(P,j[0],j[1],j[2],j[3]),c[m]=j)};case e.FLOAT_MAT4:return function(j){c[m]!==j&&(e.uniformMatrix4fv(P,!1,new Float32Array(j)),c[m]=j)};case e.SAMPLER_2D:var C=i++;return function(j){e.activeTexture(e.TEXTURE0+C);var L=u.textures.get(j);L||(L=j.qI(e),u.textures.set(j,L)),e.bindTexture(e.TEXTURE_2D,L),c[m]!==j&&(e.uniform1i(P,C),c[m]=j)};case e.BOOL:return function(j){c[m]!==j&&(e.uniform1i(P,j),c[m]=j)};default:return function(){}}}for(var l={},d=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),b=0;b<d;b++){var g=e.getActiveUniform(o,b);l[t[g.name]||g.name]=$(o,g)}return l}function Sg(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var xg=A(function(e,r,n){return Id(r,{g:n,f:{},h:e},Mg,Dg)}),jg=s(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),kg=s(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),wg=s(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Lg=s(function(e,r){e.contextAttributes.antialias=!0}),Ag=s(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Tg=s(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Mg(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Hi(function(o){return a(nB,r,o)},e.h);var n=Jr.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),eg(function(){return a(cb,e,n)})):(n=Jr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Dg(e,r){return r.f=e.f,cb(r)}var zg=s(function(e,r){return new Float64Array([e,r])}),HR=function(e){return e[0]},IR=function(e){return e[1]},FR=s(function(e,r){return new Float64Array([e,r[1]])}),UR=s(function(e,r){return new Float64Array([r[0],e])}),RR=function(e){return{pA:e[0],pB:e[1]}},qR=function(e){return new Float64Array([e.pA,e.pB])},GR=s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n}),WR=s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n}),OR=function(e){var r=new Float64Array(2);return r[0]=-e[0],r[1]=-e[1],r},NR=s(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/T0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function T0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}var ZR=T0,JR=function(e){return e[0]*e[0]+e[1]*e[1]},XR=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)}),YR=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t}),QR=function(e){var r=new Float64Array(2),n=1/T0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r},KR=s(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n}),eq=s(function(e,r){return e[0]*r[0]+e[1]*r[1]}),M0=new Float64Array(3),ib=new Float64Array(3),ub=new Float64Array(3),Bg=A(function(e,r,n){return new Float64Array([e,r,n])}),Vg=function(e){return e[0]},Eg=function(e){return e[1]},Hg=function(e){return e[2]},rq=s(function(e,r){return new Float64Array([e,r[1],r[2]])}),aq=s(function(e,r){return new Float64Array([r[0],e,r[2]])}),nq=s(function(e,r){return new Float64Array([r[0],r[1],e])}),tq=function(e){return{pA:e[0],pB:e[1],L:e[2]}},Ig=function(e){return new Float64Array([e.pA,e.pB,e.L])},oq=s(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function fb(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}var cq=s(fb),iq=function(e){var r=new Float64Array(3);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r};function $b(e,r,n){return n===void 0&&(n=new Float64Array(3)),Ii(fb(e,r,n),n)}var uq=s($b);function D0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}var fq=D0,$q=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},lq=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+t*t+o*o)}),vq=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return n*n+t*t+o*o});function Ii(e,r){r===void 0&&(r=new Float64Array(3));var n=1/D0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var sq=Ii,dq=s(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Jt=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]},bq=s(Jt);function z0(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}var pq=s(z0),mq=s(function(e,r){var n,t=M0,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Jt(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(Jt(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(Jt(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(Jt(r,t)+e[14])/n,o}),Fg=Y(function(e,r,n,t){return new Float64Array([e,r,n,t])}),Ug=function(e){return e[0]},Rg=function(e){return e[1]},qg=function(e){return e[2]},Gg=function(e){return e[3]},hq=s(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])}),gq=s(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])}),_q=s(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])}),yq=s(function(e,r){return new Float64Array([r[0],r[1],r[2],e])}),Wg=function(e){return{pA:e[0],pB:e[1],L:e[2],u2:e[3]}},Og=function(e){return new Float64Array([e.pA,e.pB,e.L,e.u2])},Cq=s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n}),Pq=s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n}),Sq=function(e){var r=new Float64Array(4);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r},xq=s(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/B0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function B0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}var jq=B0,kq=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]},wq=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return Math.sqrt(n*n+t*t+o*o+c*c)}),Lq=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return n*n+t*t+o*o+c*c}),Aq=function(e){var r=new Float64Array(4),n=1/B0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r},Ng=s(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n}),Tq=s(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}),Zg=new Float64Array(16),Jg=new Float64Array(16),Mq=new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Xg=function(e){var r=new Float64Array(16);return r[0]=e.nm,r[1]=e.nq,r[2]=e.nu,r[3]=e.ny,r[4]=e.nn,r[5]=e.nr,r[6]=e.nv,r[7]=e.nz,r[8]=e.no,r[9]=e.ns,r[10]=e.nw,r[11]=e.nA,r[12]=e.np,r[13]=e.nt,r[14]=e.nx,r[15]=e.nB,r},Yg=function(e){return{nm:e[0],nq:e[1],nu:e[2],ny:e[3],nn:e[4],nr:e[5],nv:e[6],nz:e[7],no:e[8],ns:e[9],nw:e[10],nA:e[11],np:e[12],nt:e[13],nx:e[14],nB:e[15]}},Dq=function(e){var r=new Float64Array(16);r[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],r[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],r[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],r[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],r[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],r[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],r[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],r[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],r[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],r[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],r[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],r[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5];var n=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12];if(n===0)return D;n=1/n;for(var t=0;t<16;t=t+1)r[t]=r[t]*n;return V(r)},zq=function(e){var r=pb(e),n=[e[12],e[13],e[14]];return r[3]=r[7]=r[11]=0,r[12]=-Jt([r[0],r[4],r[8]],n),r[13]=-Jt([r[1],r[5],r[9]],n),r[14]=-Jt([r[2],r[6],r[10]],n),r};function lb(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2*o/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/(t-n),i[6]=0,i[7]=0,i[8]=(r+e)/(r-e),i[9]=(t+n)/(t-n),i[10]=-(c+o)/(c-o),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*c*o/(c-o),i[15]=0,i}var Bq=Br(lb),Vq=Y(function(e,r,n,t){var o=n*Math.tan(e*Math.PI/360),c=-o,i=c*r,u=o*r;return lb(i,u,c,o,n,t)});function vb(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-n),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2/(c-o),i[11]=0,i[12]=-(r+e)/(r-e),i[13]=-(t+n)/(t-n),i[14]=-(c+o)/(c-o),i[15]=1,i}var Eq=Br(vb),Hq=Y(function(e,r,n,t){return vb(e,r,n,t,-1,1)});function sb(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[3],u=e[4],$=e[5],l=e[6],d=e[7],b=e[8],g=e[9],_=e[10],p=e[11],m=e[12],P=e[13],C=e[14],j=e[15],L=r[0],T=r[1],F=r[2],q=r[3],R=r[4],K=r[5],J=r[6],ue=r[7],ge=r[8],De=r[9],Le=r[10],ar=r[11],re=r[12],Ue=r[13],Xe=r[14],Ne=r[15];return n[0]=t*L+u*T+b*F+m*q,n[1]=o*L+$*T+g*F+P*q,n[2]=c*L+l*T+_*F+C*q,n[3]=i*L+d*T+p*F+j*q,n[4]=t*R+u*K+b*J+m*ue,n[5]=o*R+$*K+g*J+P*ue,n[6]=c*R+l*K+_*J+C*ue,n[7]=i*R+d*K+p*J+j*ue,n[8]=t*ge+u*De+b*Le+m*ar,n[9]=o*ge+$*De+g*Le+P*ar,n[10]=c*ge+l*De+_*Le+C*ar,n[11]=i*ge+d*De+p*Le+j*ar,n[12]=t*re+u*Ue+b*Xe+m*Ne,n[13]=o*re+$*Ue+g*Xe+P*Ne,n[14]=c*re+l*Ue+_*Xe+C*Ne,n[15]=i*re+d*Ue+p*Xe+j*Ne,n}var Iq=s(sb),Fq=s(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[4],u=e[5],$=e[6],l=e[8],d=e[9],b=e[10],g=e[12],_=e[13],p=e[14],m=r[0],P=r[1],C=r[2],j=r[4],L=r[5],T=r[6],F=r[8],q=r[9],R=r[10],K=r[12],J=r[13],ue=r[14];return n[0]=t*m+i*P+l*C,n[1]=o*m+u*P+d*C,n[2]=c*m+$*P+b*C,n[3]=0,n[4]=t*j+i*L+l*T,n[5]=o*j+u*L+d*T,n[6]=c*j+$*L+b*T,n[7]=0,n[8]=t*F+i*q+l*R,n[9]=o*F+u*q+d*R,n[10]=c*F+$*q+b*R,n[11]=0,n[12]=t*K+i*J+l*ue+g,n[13]=o*K+u*J+d*ue+_,n[14]=c*K+$*J+b*ue+p,n[15]=1,n}),Uq=s(function(e,r){var n=new Float64Array(16);r=Ii(r,M0);var t=r[0],o=r[1],c=r[2],i=Math.cos(e),u=1-i,$=Math.sin(e);return n[0]=t*t*u+i,n[1]=o*t*u+c*$,n[2]=c*t*u-o*$,n[3]=0,n[4]=t*o*u-c*$,n[5]=o*o*u+i,n[6]=o*c*u+t*$,n[7]=0,n[8]=t*c*u+o*$,n[9]=o*c*u-t*$,n[10]=c*c*u+i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}),Rq=A(function(e,r,n){var t=new Float64Array(16),o=1/D0(r),c=r[0]*o,i=r[1]*o,u=r[2]*o,$=Math.cos(e),l=1-$,d=Math.sin(e),b=c*d,g=i*d,_=u*d,p=c*i*l,m=c*u*l,P=i*u*l,C=c*c*l+$,j=p+_,L=m-g,T=p-_,F=i*i*l+$,q=P+b,R=m+g,K=P-b,J=u*u*l+$,ue=n[0],ge=n[1],De=n[2],Le=n[3],ar=n[4],re=n[5],Ue=n[6],Xe=n[7],Ne=n[8],Cr=n[9],qe=n[10],cr=n[11],pr=n[12],Nr=n[13],Ea=n[14],Na=n[15];return t[0]=ue*C+ar*j+Ne*L,t[1]=ge*C+re*j+Cr*L,t[2]=De*C+Ue*j+qe*L,t[3]=Le*C+Xe*j+cr*L,t[4]=ue*T+ar*F+Ne*q,t[5]=ge*T+re*F+Cr*q,t[6]=De*T+Ue*F+qe*q,t[7]=Le*T+Xe*F+cr*q,t[8]=ue*R+ar*K+Ne*J,t[9]=ge*R+re*K+Cr*J,t[10]=De*R+Ue*K+qe*J,t[11]=Le*R+Xe*K+cr*J,t[12]=pr,t[13]=Nr,t[14]=Ea,t[15]=Na,t});function db(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}var qq=A(db),Gq=function(e){return db(e[0],e[1],e[2])},Wq=Y(function(e,r,n,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*n,o[9]=t[9]*n,o[10]=t[10]*n,o[11]=t[11]*n,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o}),Oq=s(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=r[11]*c,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function bb(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}var Nq=A(bb),Zq=function(e){return bb(e[0],e[1],e[2])},Jq=Y(function(e,r,n,t){var o=new Float64Array(16),c=t[0],i=t[1],u=t[2],$=t[3],l=t[4],d=t[5],b=t[6],g=t[7],_=t[8],p=t[9],m=t[10],P=t[11];return o[0]=c,o[1]=i,o[2]=u,o[3]=$,o[4]=l,o[5]=d,o[6]=b,o[7]=g,o[8]=_,o[9]=p,o[10]=m,o[11]=P,o[12]=c*e+l*r+_*n+t[12],o[13]=i*e+d*r+p*n+t[13],o[14]=u*e+b*r+m*n+t[14],o[15]=$*e+g*r+P*n+t[15],o}),Xq=s(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=r[0],u=r[1],$=r[2],l=r[3],d=r[4],b=r[5],g=r[6],_=r[7],p=r[8],m=r[9],P=r[10],C=r[11];return n[0]=i,n[1]=u,n[2]=$,n[3]=l,n[4]=d,n[5]=b,n[6]=g,n[7]=_,n[8]=p,n[9]=m,n[10]=P,n[11]=C,n[12]=i*t+d*o+p*c+r[12],n[13]=u*t+b*o+m*c+r[13],n[14]=$*t+g*o+P*c+r[14],n[15]=l*t+_*o+C*c+r[15],n}),Yq=A(function(e,r,n){var t=$b(e,r,M0),o=Ii(z0(n,t,ib),ib),c=Ii(z0(t,o,ub),ub),i=Zg,u=Jg;return i[0]=o[0],i[1]=c[0],i[2]=t[0],i[3]=0,i[4]=o[1],i[5]=c[1],i[6]=t[1],i[7]=0,i[8]=o[2],i[9]=c[2],i[10]=t[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=-e[0],u[13]=-e[1],u[14]=-e[2],u[15]=1,sb(i,u)});function pb(e){var r=new Float64Array(16);return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],r}var Qq=pb,Kq=A(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}),M=i9,xf=Z8,V0=A(function(e,r,n){var t=n.c,o=n.d,c=s(function(i,u){if(i.$){var l=i.a;return v(xf,e,u,l)}else{var $=i.a;return v(xf,c,u,$)}});return v(xf,c,v(xf,e,r,o),t)}),Qg=function(e){return v(V0,M,S,e)},jf=A(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,u=e,$=v(e,t,o,v(jf,e,r,i)),l=c;e=u,r=$,n=l;continue e}}),Ka=function(e){return v(jf,A(function(r,n,t){return a(M,y(r,n),t)}),S,e)},kf=function(e){return v(jf,A(function(r,n,t){return a(M,r,t)}),S,e)},Kg=function(e){var r=e;return kf(r)},mb=1,e_=2,hb=0,E0=function(e){return{$:0,a:e}},V=function(e){return{$:0,a:e}},D={$:1},H0=function(e){return{$:1,a:e}},eG=0,Ha=function(e){return{$:1,a:e}},I0=s(function(e,r){return{$:3,a:e,b:r}}),gb=s(function(e,r){return{$:0,a:e,b:r}}),_b=s(function(e,r){return{$:1,a:e,b:r}}),ta=function(e){return{$:0,a:e}},r_=function(e){return{$:2,a:e}},rG=1,yb=v9,a_=X9,aG=B9,n_=c9,Cb=Ah,er=xd,Lr=s(function(e,r){return a(W9,e,mf(r))}),gn=s(function(e,r){return f(a(G9,e,r))}),Pb=function(e){return a(Lr,`
    `,a(gn,`
`,e))},me=A(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b,c=e,i=a(e,t,r),u=o;e=c,r=i,n=u;continue e}else return r}),Ar=function(e){return v(me,s(function(r,n){return n+1}),0,e)},F0=u9,nG=a9,tG=s9,t_=A(function(e,r,n){e:for(;;)if(ce(e,r)<1){var t=e,o=r-1,c=a(M,r,n);e=t,r=o,n=c;continue e}else return n}),_n=s(function(e,r){return v(t_,e,r,S)}),yn=s(function(e,r){return v(F0,e,a(_n,0,Ar(r)-1),r)}),st=th,Sb=function(e){var r=st(e);return 97<=r&&r<=122},xb=function(e){var r=st(e);return r<=90&&65<=r},oG=V9,o_=function(e){return Sb(e)||xb(e)},c_=function(e){var r=st(e);return r<=57&&48<=r},i_=function(e){return Sb(e)||xb(e)||c_(e)},Te=function(e){return v(me,M,S,e)},Fi=H9,u_=s(function(e,r){return`

(`+(er(e+1)+(") "+Pb(f_(r))))}),f_=function(e){return a($_,e,S)},$_=s(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,i=e.b,t=(function(){var m=Fi(n);if(m.$===1)return!1;var P=m.a,C=P.a,j=P.b;return o_(C)&&a(a_,i_,j)})(),o=t?"."+n:"['"+(n+"']"),$=i,l=a(M,o,r);e=$,r=l;continue e;case 1:var c=e.a,i=e.b,u="["+(er(c)+"]"),$=i,l=a(M,u,r);e=$,r=l;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var b=(function(){return r.b?"The Json.Decode.oneOf at json"+a(Lr,"",Te(r)):"Json.Decode.oneOf"})(),p=b+(" failed in the following "+(er(Ar(d))+" ways:"));return a(Lr,`

`,a(M,p,a(yn,u_,d)))}else{var i=d.a,$=i,l=r;e=$,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+(function(){return r.b?" at json"+a(Lr,"",Te(r)):"!"})();default:var g=e.a,_=e.b,p=(function(){return r.b?"Problem with the value at json"+(a(Lr,"",Te(r))+`:

    `):`Problem with the given value:

`})();return p+(Pb(a(Cb,4,_))+(`

`+g))}}),Vr=32,Xt=Y(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Co=I8,U0=L9,cG=b9,wf=s(function(e,r){return Sd(r)/Sd(e)}),iG=k9,Cn=U0(a(wf,2,Vr)),R0=x(Xt,0,Cn,Co,Co),jb=R8,hc=function(e){return{$:1,a:e}},uG=s(function(e,r){return e(r)}),fG=s(function(e,r){return r(e)}),en=K8,Yt=A9,Wn=U8,$G=n9,Pe=s(function(e,r){return ce(e,r)>0?e:r}),l_=d9,gc=function(e){return{$:0,a:e}},q0=q8,v_=s(function(e,r){e:for(;;){var n=a(q0,Vr,e),t=n.a,o=n.b,c=a(M,gc(t),r);if(o.b){var i=o,u=c;e=i,r=u;continue e}else return Te(c)}}),Pn=function(e){var r=e.a;return r},s_=s(function(e,r){e:for(;;){var n=U0(r/Vr);if(n===1)return a(q0,Vr,e).a;var t=a(v_,e,S),o=n;e=t,r=o;continue e}}),G0=s(function(e,r){if(r.U){var n=r.U*Vr,t=Yt(a(wf,Vr,n-1)),o=e?Te(r.ao):r.ao,c=a(s_,o,r.U);return x(Xt,Wn(r.ae)+n,a(Pe,5,t*Cn),c,r.ae)}else return x(Xt,Wn(r.ae),Cn,Co,r.ae)}),lG=p9,vG=r9,d_=Ae(function(e,r,n,t,o){e:for(;;){if(r<0)return a(G0,!1,{ao:t,U:n/Vr|0,ae:o});var c=hc(v(jb,Vr,r,e)),i=e,u=r-Vr,$=n,l=a(M,c,t),d=o;e=i,r=u,n=$,t=l,o=d;continue e}}),sG=h9,W0=s(function(e,r){if(e<=0)return R0;var n=e%Vr,t=v(jb,n,e-n,r),o=e-n-Vr;return U(d_,r,o,e,S,t)}),Sn=function(e){return!e.$},z=_h,ne=$h,k=mh,N=lh,dG=0,kb=0,bG=5,te=function(e){return e},pG=te,dr=A(function(e,r,n){return ce(n,e)<0?e:ce(n,r)>0?r:n}),rn=s(function(e,r){return E(r,{C:v(dr,0,1,r.C-e)})}),an=s(function(e,r){return E(r,{C:v(dr,0,1,r.C+e)})}),b_=s(function(e,r){return{bt:r.bt,i$:a(an,.14,r.bt),i0:a(an,.07,r.bt),jg:a(an,.13,r.D),jh:a(an,.23,r.D),kv:e,D:r.D,k3:a(an,.03,r.D),k4:a(an,.06,r.D),k5:a(an,.09,r.D),k6:a(rn,.03,r.D),k7:a(rn,.06,r.D),k8:a(rn,.09,r.D),k9:{aQ:.6,aT:r.D.aT,C:.92,a1:.08},lc:a(rn,.5,r.d6),le:r.d6,lf:a(rn,.15,r.d6)}}),p_=s(function(e,r){var n=r.d6,t=n.C<.12?E(n,{C:.12}):n;return{bt:r.bt,i$:a(rn,.14,r.bt),i0:a(rn,.07,r.bt),jg:a(rn,.13,r.D),jh:a(rn,.23,r.D),kv:e,D:r.D,k3:a(rn,.03,r.D),k4:a(rn,.06,r.D),k5:a(rn,.09,r.D),k6:a(an,.03,r.D),k7:a(an,.06,r.D),k8:a(an,.09,r.D),k9:{aQ:.88,aT:r.D.aT,C:.18,a1:.1},lc:a(an,.5,t),le:t,lf:a(an,.15,t)}}),m_=s(function(e,r){return r.se?a(b_,r,{bt:e,D:r.pX,d6:r.rz}):a(p_,r,{bt:e,D:r.pX,d6:r.rz})}),wb=s(function(e,r){switch(e){case 0:return r.tJ;case 1:return r.rO;case 2:return r.vm;case 3:return r.p3;case 4:return r.st;default:return r.qL}}),Ui=s(function(e,r){return a(m_,a(wb,e,r),r)}),O0=o9,rr=s(function(e,r){e:for(;;){if(r.$===-2)return D;var n=r.b,t=r.c,o=r.d,c=r.e,i=a(O0,e,n);switch(i){case 0:var u=e,$=o;e=u,r=$;continue e;case 1:return V(t);default:var u=e,$=c;e=u,r=$;continue e}}}),W=Y(function(e,r,n,t){return{aQ:t,aT:e,C:n,a1:r}}),h_={pX:x(W,.5833,.0952,.21,1),p2:x(W,.5833,.0952,.21,1),p3:x(W,.5718,.9231,.39,1),p8:x(W,.5667,.0505,.495,1),p9:x(W,.5673,.6341,.59,1),qa:x(W,.4869,.6,.575,1),qb:x(W,.4722,.6,.5,1),qc:x(W,.963,.5294,.575,1),qd:x(W,.0224,1,.665,1),qe:x(W,0,0,1,1),qf:x(W,.1373,1,.575,1),qL:x(W,.4891,.7176,.425,1),rz:x(W,0,0,.96,1),rO:x(W,.4697,1,.33,1),se:!0,st:x(W,.7361,.6,.5,1),sT:"Erkal Dark",tJ:x(W,.95,1,.5,1),u4:x(W,0,0,.82,1),vm:x(W,.1315,1,.45,1)},g_={pX:x(W,0,0,.96,1),p2:x(W,.5833,.0952,.21,1),p3:x(W,.5673,.8966,.29,1),p8:x(W,.5833,.0476,.42,1),p9:x(W,.5718,.9231,.39,1),qa:x(W,.4891,.7176,.425,1),qb:x(W,.4697,1,.33,1),qc:x(W,.963,.6,.375,1),qd:x(W,.0288,.5909,.44,1),qe:x(W,0,0,.82,1),qf:x(W,.1315,1,.45,1),qL:x(W,.4845,.6825,.315,1),rz:x(W,.5833,.0952,.21,1),rO:x(W,.4551,1,.26,1),se:!1,st:x(W,.7167,.7143,.35,1),sT:"Erkal Light",tJ:x(W,.95,1,.4,1),u4:x(W,0,0,.96,1),vm:x(W,.131,1,.35,1)},__={pX:x(W,.6784,.5072,.1195,1),p2:x(W,.6784,.5072,.1195,1),p3:x(W,.6963,.7334,.3908,1),p8:x(W,.6596,.1664,.2542,1),p9:x(W,.6963,.8378,.5419,1),qa:x(W,.4985,.746,.7698,1),qb:x(W,.2473,.9215,.6656,1),qc:x(W,.8231,.9879,.5331,1),qd:x(W,.9805,.9839,.5313,1),qe:x(W,.1717,.0624,.8829,1),qf:x(W,.1378,.9702,.5499,1),qL:x(W,.4985,.432,.6569,1),rz:x(W,.1708,.1275,.8046,1),rO:x(W,.2473,.6142,.5669,1),se:!0,st:x(W,.8231,.8982,.4245,1),sT:"Inferno",tJ:x(W,.9804,.8923,.417,1),u4:x(W,.1712,.0491,.7129,1),vm:x(W,.1378,.8074,.4652,1)},y_={pX:x(W,.6758,.4926,.1233,1),p2:x(W,.6758,.4926,.1233,1),p3:x(W,.6963,.7334,.3908,1),p8:x(W,.6576,.1668,.257,1),p9:x(W,.6963,.8378,.5419,1),qa:x(W,.4985,.746,.7698,1),qb:x(W,.2989,.7749,.7169,1),qc:x(W,.8231,.9879,.5331,1),qd:x(W,.9805,.9839,.5313,1),qe:x(W,.1241,.0824,.8856,1),qf:x(W,.1226,.912,.646,1),qL:x(W,.4985,.432,.6569,1),rz:x(W,.1238,.1697,.8105,1),rO:x(W,.2989,.48,.6076,1),se:!0,st:x(W,.8231,.8982,.4245,1),sT:"Magma",tJ:x(W,.9804,.8923,.417,1),u4:x(W,.1239,.0643,.7167,1),vm:x(W,.1227,.6106,.5447,1)},Po={aQ:1,aT:0,C:0,a1:0},nn=F9,tn=O9,on=s(function(e,r){return e<1?r:v(tn,e,nn(r),r)}),Lf=e9,Af=E9,dt=function(e){return a(Af,e,"")},C_=function(e){switch(e){case"0":return V(0);case"1":return V(1);case"2":return V(2);case"3":return V(3);case"4":return V(4);case"5":return V(5);case"6":return V(6);case"7":return V(7);case"8":return V(8);case"9":return V(9);case"a":return V(10);case"b":return V(11);case"c":return V(12);case"d":return V(13);case"e":return V(14);case"f":return V(15);default:return D}},P_=q9,_c=function(e){return v(P_,M,S,e)},Lb=J9,N0=function(e){return v(me,s(function(r,n){if(n.$===1){var t=n.a;return Ha(t)}else{var o=n.a,c=C_(r);if(c.$)return Ha("Invalid hex digit: "+dt(r));var i=c.a;return ta(o*16+i)}}),ta(0),_c(Lb(e)))},Ge=s(function(e,r){return ce(e,r)<0?e:r}),S_=A(function(e,r,n){var t=a(Ge,e,a(Ge,r,n)),o=a(Pe,e,a(Pe,r,n)),c=(o+t)/2,i=o-t;if(i<1e-10)return{aQ:1,aT:0,C:c,a1:0};var u=c>.5?i/(2-o-t):i/(o+t),$=(function(){if(o-e<1e-10){var d=ce(r,n)<0?6:0;return(r-n)/i+d}else return o-r<1e-10?(n-e)/i+2:(e-r)/i+4})(),l=$/6;return{aQ:1,aT:l,C:c,a1:u}}),On=Q9,Ab=function(e){var r=a(On,"#",e)?a(on,1,e):e;if(nn(r)!==6)return Ha("Expected 6-character hex string, got: "+e);var n=v(tn,0,2,r),t=v(tn,2,4,r),o=v(tn,4,6,r),c=H(N0(n),N0(t),N0(o));if(!c.a.$&&!c.b.$&&!c.c.$){var i=c.a.a,u=c.b.a,$=c.c.a;return ta(v(S_,i/255,u/255,$/255))}else return Ha("Invalid hex color: "+e)},Tb=s(function(e,r){if(r.$)return e;var n=r.a;return n}),h=s(function(e,r){var n=function(o){return a(Tb,Po,Ab(v(tn,o*6,(o+1)*6,r)))},t=n(17);return{pX:t,p2:n(0),p3:n(4),p8:n(8),p9:n(12),qa:n(14),qb:n(10),qc:n(13),qd:n(9),qe:n(15),qf:n(11),qL:n(6),rz:n(16),rO:n(2),se:t.C<.5,st:n(5),sT:e,tJ:n(1),u4:n(7),vm:n(3)}}),x_={pX:x(W,.6338,.2131,.4193,1),p2:x(W,.6338,.2131,.4193,1),p3:x(W,.6711,.9819,.3556,1),p8:x(W,.6313,.1141,.4988,1),p9:x(W,.6733,.9724,.4995,1),qa:x(W,.5206,.9279,.6164,1),qb:x(W,.408,.9525,.6016,1),qc:x(W,.8129,.6577,.6082,1),qd:x(W,.0348,.7434,.583,1),qe:x(W,.1588,.059,.8705,1),qf:x(W,.1378,.9702,.5499,1),qL:x(W,.5206,.6303,.518,1),rz:x(W,.1581,.1657,.844,1),rO:x(W,.408,.663,.5087,1),se:!0,st:x(W,.8129,.4325,.4851,1),sT:"Parula",tJ:x(W,.0348,.5435,.4645,1),u4:x(W,.1584,.0494,.7011,1),vm:x(W,.1378,.8074,.4652,1)},j_={pX:x(W,.6497,.2697,.2788,1),p2:x(W,.6497,.2697,.2788,1),p3:x(W,.6963,.7334,.3908,1),p8:x(W,.6441,.1308,.3827,1),p9:x(W,.6963,.8378,.5419,1),qa:x(W,.4985,.746,.7698,1),qb:x(W,.2594,.8806,.6797,1),qc:x(W,.8231,.9879,.5331,1),qd:x(W,.9805,.9839,.5313,1),qe:x(W,.1553,.0578,.8652,1),qf:x(W,.1378,.9702,.5499,1),qL:x(W,.4985,.432,.6569,1),rz:x(W,.1544,.1443,.7845,1),rO:x(W,.2594,.5758,.578,1),se:!0,st:x(W,.8231,.8982,.4245,1),sT:"Plasma",tJ:x(W,.9804,.8923,.417,1),u4:x(W,.1549,.0495,.696,1),vm:x(W,.1378,.8074,.4652,1)},k_={pX:x(W,.7616,.2492,.257,1),p2:x(W,.7616,.2492,.257,1),p3:x(W,.6711,.9819,.3556,1),p8:x(W,.7582,.1116,.3649,1),p9:x(W,.6733,.9724,.4995,1),qa:x(W,.5003,1,.4968,1),qb:x(W,.367,.9956,.5641,1),qc:x(W,.7883,.876,.5781,1),qd:x(W,.0151,.5947,.5814,1),qe:x(W,.1828,.0453,.8406,1),qf:x(W,.1749,.9924,.6211,1),qL:x(W,.5003,1,.4251,1),rz:x(W,.1818,.1003,.7645,1),rO:x(W,.3705,.8413,.4617,1),se:!0,st:x(W,.7886,.6673,.4517,1),sT:"Viridis",tJ:x(W,.015,.4413,.4578,1),u4:x(W,.1823,.0425,.6725,1),vm:x(W,.1749,.7036,.5343,1)},Mb=f([a(h,"Argonaut","232323ff000f8ce10bffb900008df86d43a600d8ebffffff444444ff2740abe15bffd2420092ff9a5feb67fff0fffffffffaf40e1019"),a(h,"0x96f","262427ff666db3e03affc73900cde8a392e89deaf6fcfcfa545452ff7e83bee55effd05e1bd5ebb0a3ebacedf8fcfcfafcfcfa262427"),a(h,"12-bit Rainbow","000000a0305040d080e090403060b06030900090c0dbded8685656c0606090d050e0d00000b0c080107020b0c0fffffffeffff040404"),a(h,"3024 Day","090300db2d2001a252caba0001a0e4a16a948fbecea5a2a25c5855dbaec33a34324a4543807d7cbcbbbacdab53f7f7f74a4543f7f7f7"),a(h,"3024 Night","090300db2d2001a252fded0201a0e4a16a94b5e4f4a5a2a25c5855e8bbd047413f4a4543807d7cd6d5d4cdab53f7f7f7a5a2a2090300"),a(h,"Aardvark Blue","191919aa342e4b8c0fdbba001370d3c43ac3008eb0bebebe525252f05b5095dc55ffe76360a4ece26be260b6cbf7f7f7dddddd102040"),a(h,"Abernathy","000000cd000000cd00cdcd001093f5cd00cd00cdcdfaebd7404040ff000000ff00ffff0011b5f6ff00ff00ffffffffffeeeeec111416"),a(h,"Adventure","040404d84a335da602eebb6e417ab3e5c499bdcfe5dbded8685656d76b4299b52cffb67097d7efaa7900bdcfe5e4d5c7feffff040404"),a(h,"Adventure Time","050404bd00134ab118e7741e0f4ac666599370a598f8dcc04e7cbffc5f5a9eff6eefc11a1997c69b5953c8faf4f6f5fbf8dcc01f1d45"),a(h,"Adwaita","241f31c01c282ec27ee8b5041e78e49841bb0ab9dcc0bfbc5e5c64ed333b4ad67cd2be3651a1ffc061cb4fd2fdf6f5f4000000ffffff"),a(h,"Adwaita Dark","241f31c01c282ec27ef5c2111e78e49841bb0ab9dcc0bfbc5e5c64ed333b57e389f8e45c51a1ffc061cb4fd2fdf6f5f4ffffff1d1d20"),a(h,"Afterglow","151515ac41427e8e50e5b5676c99bb9f4e857dd6cfd0d0d0505050ac41427e8e50e5b5676c99bb9f4e857dd6cff5f5f5d0d0d0212121"),a(h,"Aizen Dark","1a1a1af08898a4e09cf5dea484b4f8c8a2f490dcd0d0d6f0444444f08898a4e09cf5dea484b4f8c8a2f490dcd0ffffffd0d6f01a1a1a"),a(h,"Aizen Light","f0f2f6d00c363e9e28dd8c1a1c64f28636ec1590964a4d66adb2bcd00c363e9e28dd8c1a1c64f28636ec1590964a4d664a4d66f0f2f6"),a(h,"Alabaster","000000aa3731448c27cb9000325cc07a3e9d0083b2b7b7b7777777f0505060cb00f2af50007acce64ce600aacbf7f7f7000000f7f7f7"),a(h,"Alien Blood","1126167f2b272f7e25717f242f6a7f47587f327f77647d753c4812e0800918e000bde00000aae00058e000e0c473fa91637d750f1610"),a(h,"Andromeda","000000cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5666666cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5e5e5e5262a33"),a(h,"Apple Classic","000000c91b0000c200c7c4001c3fe1ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffd5a2002c2b2b"),a(h,"Apple System Colors","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74bffd60a0a84ffbf5af276d6ffffffffffffff1e1e1e"),a(h,"Apple System Colors Light","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74be5bc000a84ffbf5af269c9f2ffffff000000feffff"),a(h,"Arcoiris","333333da270012c258ffc656518bfce37bd963fad5bab2b2777777ffb9b9e3f6aaffddaab3e8f3cbbaf9bcffc7efefefeee4d9201f1e"),a(h,"Ardoise","2c2c2cd3322d588b35fca93a2465c27332b464e1b8f7f7f7535353fa58528dc252ffea516ab5f8be68ca89ffdbfefefeeaeaea1e1e1e"),a(h,"Arthur","3d352acd5c5c86af80e8ae5b6495eddeb887b0c4debbaa99554444cc553388aa22ffa75d87ceeb996600b0c4deddccbbddeedd1c1c1c"),a(h,"Atelier Sulphurpool","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b294f587c5e6687898ea4dfe2f19c637af5f7ff979db4202746"),a(h,"Atom","000000fd5ff187c38affd7b185befdb9b6fc85befde0e0e04c4c4cfd5ff194fa36f5ffa896cbfeb9b6fc85befde0e0e0c5c8c6161719"),a(h,"Atom One Dark","21252be06c7598c379e5c07b61afefc678dd56b6c2abb2bf767676e06c7598c379e5c07b61afefc678dd56b6c2abb2bfabb2bf21252b"),a(h,"Atom One Light","000000de3e353f953ad2b67c2f5af39500953f953abbbbbb000000de3e353f953ad2b67c2f5af3a000953f953affffff2a2c33f9f9f9"),a(h,"Aura","110f18ff676761ffcaffca85a277ffa277ff61ffcaedecee4d4d4dffca85a277ffffca85a277ffa277ff61ffcaedeceeedecee15141b"),a(h,"Aurora","23262ef0266f8fd46dffe66d102ee4ee5d4303d6b8c74ded4f545ef926728fd46dffe66d03d6b8ee5d4303d6b8c74dedffca2823262e"),a(h,"Ayu","11151cea6c737fd962f9af4f53bdfacda1fa90e1c6c7c7c7686868f07178aad94cffb45459c2ffd2a6ff95e6cbffffffbfbdb60b0e14"),a(h,"Ayu Light","000000ea6c6d6cbf43eca9443199e19e75c746ba94bababa686868f0717186b300f2ae49399ee6a37acc4cbf99d1d1d15c6166f8f9fa"),a(h,"Ayu Mirage","171b24ed827487d96cfacc6e6dcbfadabafa90e1c6c7c7c7686868f28779d5ff80ffd17373d0ffdfbfff95e6cbffffffcccac21f2430"),a(h,"Banana Blueberry","17141fff6b7f00bd9ce6c62f22e8dfdc396a56b6c2f1f1f1495162fe9ea198c379f9e46b91fff4da70d6bcf3ffffffffcccccc191323"),a(h,"Batman","1b1d1ee6dc44c8be46f4fd2273717474727162605fc6c5bf505354fff78efff27dfeed6c9194959a9a9da3a3a6dadbd66f6f6f1b1d1e"),a(h,"Belafonte Day","20111bbe100e858162d08b30426a7997522c989a9c968c835e5252be100e858162d08b30426a7997522c989a9cd5ccba45373cd5ccba"),a(h,"Belafonte Night","20111bbe100e858162eaa549426a7997522c989a9c968c835e5252be100e858162eaa549426a7997522c989a9cd5ccba968c8320111b"),a(h,"Birds Of Paradise","573d26be2d266ba18ae99d2a5a86adac80a674a6ade0dbb79b6c4ae8462795d8bad0d150b8d3edd19ecb93cfd7fff9d5e0dbb72a1f1d"),a(h,"Black Metal","000000486e6fdd9999a06666888888999999aaaaaac1c1c1404040486e6fdd9999a06666888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Bathory)","0000005f8787fbcb97e78a53888888999999aaaaaac1c1c14040405f8787fbcb97e78a53888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Burzum)","0000005f8787ddeecc99bbaa888888999999aaaaaac1c1c14040405f8787ddeecc99bbaa888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Dark Funeral)","0000005f8787d0dfee5f81a5888888999999aaaaaac1c1c14040405f8787d0dfee5f81a5888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Gorgoroth)","0000005f87879b8d7f8c7f70888888999999aaaaaac1c1c14040405f87879b8d7f8c7f70888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Immortal)","0000005f87877799bb556677888888999999aaaaaac1c1c14040405f87877799bb556677888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Khold)","0000005f8787eceee3974b46888888999999aaaaaac1c1c14040405f8787eceee3974b46888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Marduk)","0000005f8787a5aaa7626b67888888999999aaaaaac1c1c14040405f8787a5aaa7626b67888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Mayhem)","0000005f8787f3ecd4eecc6c888888999999aaaaaac1c1c14040405f8787f3ecd4eecc6c888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Nile)","0000005f8787aa9988777755888888999999aaaaaac1c1c14040405f8787aa9988777755888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Venom)","0000005f8787f8f7f279241f888888999999aaaaaac1c1c14040405f8787f8f7f279241f888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Blazer","000000b87a7a7ab87ab8b87a7a7ab8b87ab87ab8b8d9d9d94c4c4cdbbdbdbddbbddbdbbdbdbddbdbbddbbddbdbffffffd9e6f20d1926"),a(h,"Blue Berry Pie","0a4c6299246e5cb1b3eab9a890a5bd9d54a77e83ccf0e8d6463c5dc872720a6c7e7a31885f3d63bc94b75e60710a6c7ebabab91c0c28"),a(h,"Blue Dolphin","292d3eff8288b4e88df4d69f82aaffe9c1ff89ebffd0d0d09094a4ff8b92ddffa7ffe5859cc4ffddb0f6a3f7ffffffffc5f2ff006984"),a(h,"Blue Matrix","101116ff568000ff9cfffc5800b0ffd57bff76c1ffc7c7c7686868ff6e675ffa68fffc676871ffd682ec60fdffffffff00a2ff101116"),a(h,"Bluloco Dark","41444dfc2f5225a45cff936a3476ff7a82da4483aacdd4e08f9aaeff64803fc56bf9c85910b1feff78f85fb9bcffffffb9c0cb282c34"),a(h,"Bluloco Light","373a41d5275323974adf631c275fe4823ff127618dbabbc2676a77ff64803cbc66c5a3320099e1ce33c06d93bbd3d3d3373a41f9f9f9"),a(h,"Borland","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffffff4e0000a4"),a(h,"Box","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffff9fef00141d2b"),a(h,"Breadog","362c24b10b000072328b4c00005cb49b0097006a78baa99d514337de1100008f40ae60000074e1c300bd008697eae1da362c24f1ebe6"),a(h,"Breeze","31363bed151511d116f674001d99f39b59b61abc9ceff0f17f8c8dc0392b1cdc9afdbc4b3daee98e44ad16a085fcfcfceff0f131363b"),a(h,"Bright Lights","191919ff355bb7e876ffc25176d4ffba76e76cbfb5c2c8d74c4c4cff355bb7e876ffc25176d5ffba76e76cbfb5c2c8d7b3c9d7191919"),a(h,"Broadcast","000000da4939519f50ffd24a6d9cbed0d0ff6e9cbeffffff585858ff7b6b83d182ffff7c9fcef0ffffffa0cef0ffffffe6e1dc2b2b2b"),a(h,"Brogrammer","1f1f1ff811182dc55eecba0f2a84d24e5ab71081d6d6dbe5d6dbe5de352e1dd361f3bd091081d65350b90f7ddbffffffd6dbe5131313"),a(h,"Builtin Dark","000000bb000000bb00bbbb000d0dc8bb00bb00bbbbbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(h,"Builtin Light","000000bb000000bb00bbbb000000bbbb00bb00bbbbbbbbbb555555ff55552fd92fbfbf155555ffff55ff22ccccffffff000000ffffff"),a(h,"Builtin Pastel Dark","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffbbbbbb000000"),a(h,"Builtin Tango Dark","000000cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeecffffff000000"),a(h,"Builtin Tango Light","000000cc00004e9a06c4a0003465a475507b06989ab9bdb5555753ef29297dd527d6c329729fcfad7fa827d5d5eeeeec000000ffffff"),a(h,"C64","090300a2524c55a049bfce726657b3984ca367b6bdffffff000000a2524c55a049bfce726657b3984ca367b6bdf7f7f77869c440318d"),a(h,"CGA","000000aa000000aa00aa55000d0db7aa00aa00aaaaaaaaaa555555ff555555ff55ffff555555ffff55ff55ffffffffffaaaaaa000000"),a(h,"CLRS","000000f8282a328a5dfa701d135cd09f00bd33c3c1b3b3b3555753fb04162cc631e3bd0e1670ffe900b03ad5ceeeeeec262626ffffff"),a(h,"Calamity","2f2833fc644da5f69ce9d7a53b79c7f9267274d3ded5ced97e6c88fc644da5f69ce9d7a53b79c7f9267274d3deffffffd5ced92f2833"),a(h,"Carbonfox","282828ee539625be6a08bdba78a9ffbe95ff33b1ffdfdfe0484848f16da646c8802dc7c48cb6ffc8a5ff52bdffe4e4e5f2f4f8161616"),a(h,"Catppuccin Frappe","51576de78284a6d189e5c8908caaeef4b8e481c8bea5adce626880e671728ec772d9ba737b9ef0f2a4db5abfb5b5bfe2c6d0f5303446"),a(h,"Catppuccin Latte","5c5f77d20f3940a02bdf8e1d1e66f5ea76cb179299acb0be6c6f85de293e49af3deea02d456efffe85d82d9fa8bcc0cc4c4f69eff1f5"),a(h,"Catppuccin Macchiato","494d64ed8796a6da95eed49f8aadf4f5bde68bd5caa5adcb5b6078ec74868ccf7fe1c68278a1f6f2a9dd63cbc0b8c0e0cad3f524273a"),a(h,"Catppuccin Mocha","45475af38ba8a6e3a1f9e2af89b4faf5c2e794e2d5a6adc8585b70f3779989d88bebd39174a8fcf2aede6bd7cabac2decdd6f41e1e2e"),a(h,"Chalk","7d8b8fb23a52789b6ab9ac4a2a7facbd4f5a44a799d2d8d9888888f2484080c470ffeb624196fffc527553cdbdd2d8d9d2d8d92b2d2e"),a(h,"Chalkboard","000000c3737272c373c2c3727372c3c372c272c2c3d9d9d9585858dbaaaaaadbaadadbaaaaaadbdbaadaaadadbffffffd9e6f229262f"),a(h,"Challenger Deep","141228ff545862d196ffb37865b2ff906cff63f2f1a6b3cc565575ff808095ffa4ffe9aa91ddffc991e1aaffe4cbe3e7cbe1e71e1c31"),a(h,"Chester","080200fa5e5b16c98dffc83f288ad6d3459028dddee7e7e76f6b68fa5e5b16c98dfeef6d278ad6d3459027dedeffffffffffff2c3643"),a(h,"Ciapre","1818188e0d1648513bcc8b3f576d8c724d7c5c4f4baea47f555555ac3835a6a75ddcdf7c3097c6d33061f3dbb2f4f4f4aea47a191c27"),a(h,"Citruszest","404040ff545400cc7affd40000bfffff90fe48d1ccbfbfbf808080ff1a751affa3ffff0033cfffffb2fe00fff2f9f9f9bfbfbf121212"),a(h,"Cobalt Neon","142631ff23203ba5ffe9e75c8ff586781aa08ff586ba46b2fff688d4312e8ff586e9f06d3c7dd28230a76cbc678ff5868ff586142838"),a(h,"Cobalt Next","000000ff527b8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea162c35"),a(h,"Cobalt Next Dark","262f37f949678cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(h,"Cobalt Next Minimal","323d47ff657a8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(h,"Cobalt2","000000ff000038de21ffe50a1460d2ff005d00bbbbbbbbbb555555f40e173bd01dedc8095555ffff55ff6ae3faffffffffffff132738"),a(h,"Coffee Theme","000000c91b0000c200adaa000225c7ca30c700b8baa1a1a1686868ff6e671fba28b2af1b6871fff26af220bdbfffffff000000f5deb3"),a(h,"Crayon Pony Fish","2b1b1d91002b579524ab311b8c87b0692f50e8a86668525a4a383bc5255d8dff57c8381dcfc9fffc6cbaffceafb0949d68525a150707"),a(h,"Cursor Dark","2a2a2abf616aa3be8cebcb8b81a1c1b48ead88c0d0d8dee9505050bf616aa3be8cebcb8b81a1c1b48ead88c0d0ffffffffffff141414"),a(h,"Cutie Pro","000000f56e7fbec975f5866942d9c5d286b737cb8ad5c3c388847fe5a1a3e8d6a7f1bb7980c5deb294bb9dccbbffffffd5d0c9181818"),a(h,"Cyberdyne","080808ff837300c172d2a7000071cfff90fe6bffddf1f1f1484848ffc4bed6fcbafffed5c2e3ffffb2fee6e7feffffff00ff92151144"),a(h,"Cyberpunk","000000ff709200fbacfffa6a00bfffdf95ff86cbfeffffff595959ff8aa421f6bcfff7871bccfde6aefe99d6fcffffffe5e5e5332a57"),a(h,"Cyberpunk Scarlet Protocol","101116ff005101dc84faf9450271b6c930c700c5c7c7c7c7686868ff6e6760fa68fffc676871ffbd35ec60fdffffffffe41951101116"),a(h,"Dark Modern","272727f749492ea0439e6a030078d4d012731db4d6cccccc5d5d5ddc545223d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1f1f1f"),a(h,"Dark Pastel","000000ff555555ff55ffff555555ffff55ff55ffffbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffffffff000000"),a(h,"Dark+","000000cd31310dbc79e5e5102472c8bc3fbc11a8cde5e5e5666666f14c4c23d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1e1e1e"),a(h,"Darkermatrix","0910131a48316fa64c59590000cb6b4e375a1254591a48334040400d452a90d762e2e50000ff874e375a176c7300381e35451a070c0e"),a(h,"Darkmatrix","0910130065366fa64c7e80002c9a84523a60114d5300653640404000733d90d762e2e50046d8b8573d6612545a0065363e5715070c0e"),a(h,"Darkside","000000e8341c68c256f2d42c1c98e88e69c91c98e8bababa4c4c4ce05a4f77b869efd64b387cd3957bbe3d97e2babababababa222324"),a(h,"Dawnfox","575279b4637a618774ea9d34286983907aa956949fb2b6bd5f5695c26d85629f81eea8462d81a39a80b95ca7b4e6ebf3575279faf4ed"),a(h,"Dayfox","352c24a5222f396847ac54022848a96e33ce287980bfb6ae534c45b3434e577f63b86e284863b68452d5488d93f4ece63d2b5af6f2ee"),a(h,"Deep","000000d700051cd915d9bd265665ffb052da50d2dae0e0e0535353fb000722ff18fedc2b9fa9ffe09aff8df9ffffffffcdcdcd090909"),a(h,"Desert","4d4d4dff2b2b98fb98f0e68ccd853fffdeadffa0a0f5deb3626262ff555555ff55ffff5587ceffff55ffffd700ffffffffffff333333"),a(h,"Detuned","171717fe4386a6e32de6da730094d99b37ff50b7d9c7c7c7686868fa80acbde371fff27f00beffbe9eff5ed7ffffffffc7c7c7000000"),a(h,"Dimidium","000000cf494c60b442db9c110575d8af5ed21db6bbbab7b6817e7eff643b37e57bfccd1a688dfded6fe932e0fbdee3e4bab7b6141414"),a(h,"Dimmed Monokai","3a3d43be3f48879a3bc5a6354f76a1855c8d578fa4b9bcba888987fb001f0f722fc47033186de3fb00672e706dfdffb9b9bcba1f1f1f"),a(h,"Django","000000fd620941a83effe862315d3ff8f8f89df39fffffff585858ff943b73da70ffff94568264ffffffcfffd1fffffff8f8f80b2f20"),a(h,"Django Reborn Again","000000fd620941a83effe862245032f8f8f89df39fffffff4c4c4cff943b73da70ffff94568264ffffffcfffd1ffffffdadedc051f14"),a(h,"Django Smooth","000000fd620941a83effe862989898f8f8f89df39fe8e8e7727272ff943b73da70ffff94cacacaffffffcfffd1fffffff8f8f8245032"),a(h,"Doom One","000000ff6c6b98be65ecbe7ba9a1e1c678dd51afefbbc2cf595959ff665599bb66ecbe7ba9a1e1c678dd51afefbfbfbfbbc2cf282c34"),a(h,"Doom Peacock","1c1f24cb4b1626a6a6bcd42a2a6cc6a9a1e15699afede0ce51504dff5d3898be65e6f97251afefc678dd46d9ffdfdfdfede0ce2b2a27"),a(h,"Dot Gov","191919bf091d3d9751f6bb3417b2e07830b08bd2edffffff595959bf091d3d9751f6bb3417b2e07830b08bd2edffffffebebeb262c35"),a(h,"Dracula","21222cff555550fa7bf1fa8cbd93f9ff79c68be9fdf8f8f26272a4ff6e6e69ff94ffffa5d6acffff92dfa4fffffffffff8f8f2282a36"),a(h,"Dracula+","21222cff555550fa7bffcb6b82aaffc792ea8be9fdf8f8f2545454ff6e6e69ff94ffcb6bd6acffff92dfa4fffff8f8f2f8f8f2212121"),a(h,"Duckbones","0e101ae036005dcd97e3950000a3cb795ccc00a3cbebefc0444860ff482158db9ef6a10000b4e0b3a1e600b4e0b3b692ebefc00e101a"),a(h,"Duotone Dark","1f1d27d9393e2dcd73d9b76effc284de8d402488ffb7a1ff4e4a60d9393e2dcd73d9b76effc284de8d402488ffeae5ffb7a1ff1f1d27"),a(h,"Duskfox","393552eb6f92a3be8cf6c177569fbac4a7e79ccfd8e0def4544d8af083a2b1d196f9cb8c65b1cdccb1eda6dae3e2e0f7e0def4232136"),a(h,"ENCOM","0000009f0000008b00ffd0000081ffbc00ca008b8bbbbbbb555555ff000000ee00ffff000000ffff00ff00cdcdffffff00a595000000"),a(h,"Earthsong","121418c9423485c54cf5ae2e1398b9d0633d509552e5c6aa675f54ff645a98e036e0d5615fdaffff926984f088f6f7ece5c7a9292520"),a(h,"Electron Highlighter","15161fff6c8d00ffc3ffd7a977abffdaa4f400fdff778faf4a6789ff6c8d00ffc3ffd7a977abffdaa4f400fdffc3cee2a5b6d423283d"),a(h,"Elegant","0a1222ff025785cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ff005785cc95ffcb8b8dabe1c792eb3facefffffffced2d6292b31"),a(h,"Elemental","3c3c3098290f479a437f7111497f7d7f4e2f387f58807974555445e0502a61e070d6992779d9d9cd7c5459d599fff1e9807a7422211d"),a(h,"Elementary","242424d71c155aa513fdb40c134899e400382595e1efefef4b4b4bfc1c186bc219fec80e0955fffb00503ea8fc8c00ecefefef181818"),a(h,"Embark","1e1c31f0719ba1efd3ffe9aa57c7ffc792ea87dfebf8f8f2585273f02e6e2ce592ffb3781da0e2a742ea63f2f1a6b3cceeffff1e1c31"),a(h,"Embers Dark","16130f826d5757826d6d82576d578282576d576d82a39a905a504782825746403950483f8a8075beb6ae825757dbd6d1a39a9016130f"),a(h,"Espresso","353535d25252a5c261ffc66d6c99bbd197d9bed6ffeeeeec606060f00c0cc2e075e1e48b8ab7d9efb5f7dcf4ffffffffffffff323232"),a(h,"Espresso Libre","000000cc00001a921cf0e53a0066ffc5656b06989ad3d7cf555753ef29299aff87fffb5c43a8edff818a34e2e2eeeeecb8a8982a211c"),a(h,"Everblush","232a2de574748ccf7ee5c76b67b0e8c47fd56cbfbfb3b9b8464e50ef7e7e96d988f4d67a71baf2ce89df67cbe7bdc3c2dadada141b1e"),a(h,"Everforest Dark Hard","7a8478e67e80a7c080dbbc7f7fbbb3d699b683c092f2efdfa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbefd3c6aa1e2326"),a(h,"Everforest Light Med","7a8478e67e809ab373c1a2667fbbb3d699b683c092b2af9fa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbef5c6a72efebd4"),a(h,"Fahrenheit","1d1d1dcda0749e744dfecf757f0e0f734c4d979797ffffce404040fecea0cc734dfd9f4dcb4a054e739ffed04dffffffffffce000000"),a(h,"Fairyfloss","040303f92672c2ffdfe6c000c2ffdfffb8d1c5a3fff8f8f06090cbff857fc2ffdfffea00c2ffdfffb8d1c5a3fff8f8f0f8f8f25a5475"),a(h,"Farmhouse Dark","1d2027ba0004549d00c873000049e69f1b611fb65ce8e4e1464d54eb00097ac100ea9a00006efebf3b7f19e062f4eef0e8e4e11d2027"),a(h,"Farmhouse Light","1d20278d00033a7d00a95600092ccd820046229256a8a4a1394047eb00097ac100ea9a00006efebf3b7f00c649f4eef01d2027e8e4e1"),a(h,"Fideloper","292f33cb1e2dedb8acb7ab9b2e78c2c0236f309186eae3ce496068d4605ad4605aa866717c85c45c5db2819090fcf4dfdbdae0292f33"),a(h,"Firefly Traditional","000000c2372033bc26afad245a63ffd53ad233bbc7cccccc828282ff3b1e2ee720ecec16838dffff5cfe29f0f0ebebebf5f5f5000000"),a(h,"Firefox Dev","002831e638535eb83ca57706359ddfd75cff4b73a2dcdcdc26444de1003f1d9000cd9409006fc0a200da005794e2e2e27c8fa40e1011"),a(h,"Firewatch","585f6dd953605ab977dfb5634d89c4d5511944a8b6e6e5ff585f6dd953605ab977dfb5634c89c5d5511944a8b6e6e5ff9ba2b21e2027"),a(h,"Fish Tank","03073cc6004aacf157fecd5e525fb8986f82968763ecf0fc6c5b30da4b8adbffa9fee6a9b2befafda5cda5bd86f6ffececf0fe232537"),a(h,"Flat","222d3fa8232032a548e58d113167ac781aa02c9370b0b6ba475262d4312e2d9440e5be0c3c7dd28230a735b387e7eced2cc55d002240"),a(h,"Flatland","1d1d19f183399fd364f4ef6d5096be695abcd63865ffffff50504cd22a24a7d42cff894961b9d0695abcd63865ffffffb8dbef1d1f21"),a(h,"Flexoki Dark","100f0fd14d41879a39d0a2154385bece5d973aa99f878580575653af302966800bad8301205ea6a02f6f24837bcecdc3cecdc3100f0f"),a(h,"Flexoki Light","100f0faf302966800bad8301205ea6a02f6f24837b6f6e69b7b5acd14d41879a39d0a2154385bece5d973aa99fcecdc3100f0ffffcf0"),a(h,"Floraverse","08002e7e1a465d731acd751c1d6da1b7077e42a38cf3e0b84c3866d02063b4ce59fac35740a4cff12aae62caa8fff5dbdbd1b90e0d15"),a(h,"Forest Blue","333333f8818e92d3a21a8e638ed0ce5e468c31658ce2d8cd4a4a4afb3d666bb48d30c85a39a7a27e62b36096bfe2d8cde2d8cd051519"),a(h,"Framer","141414ff555598ec65ffcc3300aaffaa88ff88ddffcccccc414141ff8888b6f292ffd96633bbffcebbffbbecffffffff777777111111"),a(h,"Front End Delight","242526f8511b565747fa771d2c70b7f02e4f3ca1a6adadad5fac6df7431974ec4cfdc3253393cae75e4f4fbce68c735badadad1b1c1d"),a(h,"Fun Forrest","000000d6262b919c00be8a134699a38d4331da8213ddc2657f6a55e55a1cbfc65affcb1b7cc9cfd26349e6a96bffeaa3dec165251200"),a(h,"Galaxy","000000f9555f21b089fef02a589df6944d951f9ee7bbbbbb555555fa8c8f35bb9affff55589df6e756993979bcffffffffffff1d2837"),a(h,"Galizur","223344aa112233aa11ccaa222255cc7755aa22bbdd8899aa556677ff113333ff11ffdd333377ffaa77ff33ddffbbccddddeeff071317"),a(h,"Ghostty Default Style Dark","1d1f21cc6566b6bd68f0c67482a2beb294bb8abeb7c4c8c6666666d54e53b9ca4be7c5477aa6dac397d870c0b1eaeaeaffffff282c34"),a(h,"GitHub","3e3e3e970b1607962ac5bb94003e8ae946917cc4dfb2b2b2666666de00007ac895d7b6002e6cbaf2959200c7cbffffff3e3e3ef4f4f4"),a(h,"GitHub Dark","000000f7816656d364e3b3416ca4f8db61a22b7489ffffff4d4d4df7816656d364e3b3416ca4f8db61a22b7489ffffff8b949e101216"),a(h,"GitHub Dark Colorblind","484f58ec8e2c58a6ffd2992258a6ffbc8cff39c5cfb1bac46e7681fdac5479c0ffe3b34179c0ffd2a8ff56d4ddffffffc9d1d90d1117"),a(h,"GitHub Dark Default","484f58ff7b723fb950d2992258a6ffbc8cff39c5cfb1bac46e7681ffa19856d364e3b34179c0ffd2a8ff56d4ddffffffe6edf30d1117"),a(h,"GitHub Dark Dimmed","545d68f4706757ab5ac69026539bf5b083f039c5cf909dab636e7bff938a6bc46ddaaa3f6cb6ffdcbdfb56d4ddcdd9e5adbac722272e"),a(h,"GitHub Dark High Contrast","7a828eff949226cd4df0b72f71b7ffcb9eff39c5cfd9dee39ea7b3ffb1af4ae168f7c84391cbffdbb7ff56d4ddfffffff0f3f60a0c10"),a(h,"GitHub Light Colorblind","24292fb359000550ae4d2d000969da8250df1b7c836e778157606a8a46000969da633c01218bffa475f93192aa8c959f24292fffffff"),a(h,"GitHub Light Default","24292fcf222e1163294d2d000969da8250df1b7c836e778157606aa40e261a7f37633c01218bffa475f93192aa8c959f1f2328ffffff"),a(h,"GitHub Light High Contrast","0e1116a0111f024c1a3f22000349b4622cbc1b7c8366707b4b535d86061d055d204e2c001168e3844ae73192aa88929d0e1116ffffff"),a(h,"GitLab Dark","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff28262b"),a(h,"GitLab Dark Grey","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff222222"),a(h,"GitLab Light","303030a317000a7f3daf551d006cd8583cac00798a303030303030a317000a7f3daf551d006cd8583cac00798a303030303030fafaff"),a(h,"Glacier","2e343cbd0f2f35a770fb94351f5872bd2523778397ffffff404a55bd0f2f49e998fddf6e2a8bc1ea4727a0b6d3ffffffffffff0c1115"),a(h,"Grape","2d283fed22611fa91b8ddc20487df48d35c93bdeed9e9ea059516af0729a53aa5eb2dc87a9bcecad81c29de3eba288f79f9fa1171423"),a(h,"Grass","000000ff595900bb00e7b0000000a3ee59bb00bbbbbbbbbb959595ff595900bb00e7b0000000bbff55ff55fffffffffffff0a513773d"),a(h,"Grey Green","000000fe141474ff00f1ff0100deffff00f000ffbcffffff666666ff393900ff44ffd10000afffff008a00ffd3f5ececffffff002a1a"),a(h,"Gruber Darker","181818ff0a3642dc00ffdb0092a7cba095cb90aa9ee4e4e454494eff385142dc00ffdb0092a7cbafafda90aa9ef5f5f5e4e4e4181818"),a(h,"Gruvbox Dark","282828cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb2282828"),a(h,"Gruvbox Dark Hard","1d2021cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb21d2021"),a(h,"Gruvbox Light","fbf1c7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836fbf1c7"),a(h,"Gruvbox Light Hard","f9f5d7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836f9f5d7"),a(h,"Gruvbox Material","141617ea6926c1d041eecf756da3ecfd9bc1fe9d6effffff4c4c4cd3573bc1d041eecf752c86fffd9bc192a5dfffffffd4be981d2021"),a(h,"Gruvbox Material Dark","282828ea6962a9b665d8a6577daea3d3869b89b482d4be987c6f64ea6962a9b665d8a6577daea3d3869b89b482ddc7a1d4be98282828"),a(h,"Gruvbox Material Light","fbf1c7c14a4a6c782eb4710945707a945e804c7a5d654735a89984c14a4a6c782eb4710945707a945e804c7a5d4f3829654735fbf1c7"),a(h,"Guezwhoz","333333e851817ad694b7d0745aa0d69a90e058d6ced9d9d9808080e85181afd7afd1ed8564b2eda398ed61ede4edededd9d9d91d1d1d"),a(h,"HaX0R Blue","01092110b6ff10b6ff10b6ff10b6ff10b6ff10b6fffafafa48415700b3f700b3f700b3f700b3f700b3f700b3f7fefefe11b7ff010515"),a(h,"HaX0R Gr33N","001f0b15d00d15d00d15d00d15d00d15d00d15d00dfafafa33484319e20e19e20e19e20e19e20e19e20e19e20efefefe16b10e020f01"),a(h,"HaX0R R3D","1f0000b00d0db00d0db00d0db00d0db00d0db00d0dfafafa554040ff1111ff1010ff1010ff1010ff1010ff1010fefefeb10e0e200101"),a(h,"Hacktober","191918b34538587744d08949206ec5864651ac9166f1eee7464444b3332342824ac75a225389c5e795a5ebc587ffffffc9c9c9141414"),a(h,"Hardcore","1b1d1ef92672a6e22efd971f66d9ef9e6ffe5e7175ccccc6505354ff669dbeed5fe6db7466d9ef9e6ffea3babff8f8f2a0a0a0121212"),a(h,"Harper","010101f8b63f7fb5e1d6da25489e48b296c6f5bfd7a8a49d726e6af8b63f7fb5e1d6da25489e48b296c6f5bfd7fefbeaa8a49d010101"),a(h,"Havn Daggry","1f2842985248577159be6b003a577d7c5c97925780b0b5c51f2842cc4a35719679f1a5276089c07d7396aa869dd6dbeb3b4a7af8f9fb"),a(h,"Havn Skumring","252c47ea563e6ead7bf8b330596cf77c719ed588c1dce0ee38425cd172648c9e8feac58c5186cb9b7ceed17ab6fff6e1d6dbeb111522"),a(h,"Heeler","000000e44c2ebdd100f4ce655ba5f2ff95c2ff9763ffffff4c4c4ce44c2ebdd100f4ce650088ffff95c28da6e4fffffffdfdfd211f46"),a(h,"Highway","000000d00e18138034ffcb3e006bb3783482455271ededed5d504af07e18b1d130fff1204fc2fdde00715d504affffffededed222225"),a(h,"Hipster Green","000000b6214a00a600bfbf00246eb2b200b200a6b2bfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e584c138100b05"),a(h,"Hivacruz","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b2973ad435e6687898ea4dfe2f19c637af5f7ffede4e4132638"),a(h,"Homebrew","00000099000000a6009999000d0dbfb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e500ff00000000"),a(h,"Hopscotch","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379fd8b195c545c5c545b989498d5d3d5b33508ffffffb9b5b8322931"),a(h,"Hopscotch.256","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379dd464c8fc13efdcc591290bfc85e7c149b93ffffffb9b5b8322931"),a(h,"Horizon","000000e9567829d398fab79526bbd9ee64ac59e1e3e5e5e5666666ec6a883fdaa4fbc3a73fc4def075b56be4e6e5e5e5d5d8da1c1e26"),a(h,"Horizon Bright","16161dfc477700ca86f2a68200beddff58b100cdcbbfafac1a1c24fe5f8700d193e5a68800c9e2ff6cba00c3c2fff2ef16161dfdf0ed"),a(h,"Hot Dog Stand","000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6ffffffea3323"),a(h,"Hot Dog Stand (Mustard)","000000ea3323ea3323ea3323000000ea3323000000b9b9b9000000ea3323ea3323ea3323000000ea3323000000c6c6c6000000ffff54"),a(h,"Hurtado","575757ff1b00a5e055fbe74a496487fd5ff186e9fecbcccb404040d51d00a5df55fbe84a89beffc001c186eafedbdbdbdbdbdb000000"),a(h,"Hybrid","2a2e33b84d51b3bf5ae4b55e6e90b0a17eac7fbfb4b5b9b64345488d2e32798431e58a504b6b886e50794d7b745a626ab7bcba161719"),a(h,"IBM 5153 CGA","141414d033331bd01bd08c1b1b1bd0d01bd01bd0d0cecece4e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffcecece141414"),a(h,"IBM 5153 CGA (Black)","000000c4000000c400c47e000000c4c400c400c4c4c4c4c44e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffc4c4c4000000"),a(h,"IC Green PPL","014401ff273641a63876a8312ec3b950a0963ca078e6fef2106910b4fa5caefb86dafa872efaeb50fafa3cfac8e0f1dce0f1dc2c2c2c"),a(h,"IC Orange PPL","000000c13900a4a900caaf00bd6d00fc5e00f79500ffc88a6a4f2aff8c68f6ff40ffe36effbe55fc874fc69752fafaffffcb83262626"),a(h,"IR Black","4f4f4ffa6c60a8ff60fffeb796cafefa73fdc6c5feefedef7b7b7bfcb6b0cfffabffffccb5dcfffb9cfee0e0fefffffff1f1f1000000"),a(h,"IRIX Console","1a1919d4242637a327c29d280739e2911f9c4497dfcccccc767676f34f5945c731f9f2a74079ffc31ba26ed7d7f2f2f2f2f2f20c0c0c"),a(h,"IRIX Terminal","1a1919ff2b1e57ff3dffff440004ffff2cff56ffffffffffffff44ffff44ffff44fffc72ffff44ffff44ffff44ffff44f2f2f2000043"),a(h,"Iceberg Dark","1e2132e27878b4be82e2a47884a0c6a093c789b8c2c6c8d16b7089e98989c0ca8ee9b18991acd1ada0d395c4ced2d4dec6c8d1161821"),a(h,"Iceberg Light","dcdfe7cc517a668e3dc573392d539e7759b43f83a633374c8389a3cc3768598030b6662d22478e6845ad327698262a3f33374ce8e9ec"),a(h,"Idea","adadadfc525698b61cccb444437ee79d74b02488874b4b4bfffffffc707298b61cffff0b6c9cedfc7eff248887181818adadad202020"),a(h,"Idle Toes","323232d252527fe173ffc66d4099fff680ffbed6ffeeeeec606060f070709dff91ffe48b5eb7f7ff9dffdcf4ffffffffffffff323232"),a(h,"Jackie Brown","2c1d16ef57342baf2bbebf00246eb2d05ec100aceebfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e5ffcc2f2c1d16"),a(h,"Japanesque","343935cf3f617bb75be9b32a4c9ad4a57fc4389aadfafaf6595b59d18fa6767f2c78592f13597960429176bbcab2b5aef7f6ec1e1e1e"),a(h,"Jellybeans","929292e2737394b979ffba7b97bedce1c0fa00988edededebdbdbdffa1a1bddeabffdca0b1d8f6fbdaff1ab2a8ffffffdedede121212"),a(h,"JetBrains Darcula","000000fa5355126e00c2c3004581ebfa54ff33c2c1adadad555555fb717267ff4fffff006d9df1fb82ff60d3d1eeeeeeadadad202020"),a(h,"Jubi","3b3750cf7b9890a94b6ebfc0576ea6bc4f6875a7d2c3d3dea874cede90abbcdd6187e9ea8c9fcde16c87b7c9efd5e5f1c3d3de262b33"),a(h,"Kanagawa Dragon","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a6a69ce4687687a987e6c3847fb4ca938aa97aa89fc5c9c5c5c9c5181616"),a(h,"Kanagawa Lotus","1f1f28c840536f894e77713f4d699bb35b79597b755454648a8980d7474b6e915f836f4a6693bf624c835e857a43436c545464f2ecbc"),a(h,"Kanagawa Wave","090618c3404376946ac0a36e7e9cd8957fb86a9589c8c093727169e8242498bb6ce6c3847fb4ca938aa97aa89fdcd7badcd7ba1f1f28"),a(h,"Kanagawabones","1f1f28e46a7898bc6de5c2837eb3c9957fb87eb3c9ddd8bb49495eec818c9ec967f1c9827bc2dfa98fd27bc2dfa8a48dddd8bb1f1f28"),a(h,"Kanso Ink","14171dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c714171d"),a(h,"Kanso Mist","22262dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2a4a7a45c6066e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c722262d"),a(h,"Kanso Pearl","22262dc840536f894e77713f4d699bb35b79597b755454646d6f6ed7474b6e915f836f4a6693bf624c835e857a43436c22262df2f1ef"),a(h,"Kanso Zen","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c7090e13"),a(h,"Kibble","4d4d4dc7003129cf13d8e30e3449d18400ff0798abe2d1e35a5a5af015786ce05cf3f79e97a4f7c495f068f2e0fffffff7f7f70e100a"),a(h,"Kitty Default","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffdddddd000000"),a(h,"Kitty Low Contrast","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffffffff333333"),a(h,"Kolorit","1d1a1eff5b8247d7a1e8e5625db4eeda6cda57e9ebededed504d51ff5b8247d7a1e8e5625db4eeda6cda57e9ebedededefecec1d1a1e"),a(h,"Konsolas","000000aa171718b218ebae1f2323a5ad1edc42b0c8c8c1c17b716eff41415fff5fffff554b4bffff54ff69ffffffffffc8c1c1060606"),a(h,"Kurokula","333333c35a5278b3a9e1b9175c91dd8b79a6867268e0cfc2515151ffc34cafffa5fff70090dbffad93ffffcdb6ffffffe0cfc2141515"),a(h,"Lab Fox","2e2e2efc6d263eb383fca121db3b216b40a86e49cbffffff535353ff651753eaa8fca013db501f6a36b67d53e7ffffffffffff2e2e2e"),a(h,"Laser","626262ff8373b4fb7309b4bdfed300ff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5f92883ffb2fee6e7fefffffff106e3030d18"),a(h,"Later This Evening","2b2b2bd45a60afba67e5d289a0bad6c092d691bfb7494a4a525454d3232faabb39e5be396699d6ab53d65fc0aec1c2c2959595222222"),a(h,"Lavandula","2300467d1625337e6f7f6f494f4a7f5a3f7f58777f736e7d443a53e0516752e0c4e0c3868e87e0a776e09ad4e08c91fa736e7d050014"),a(h,"Light Owl","403f53de3d3b08916ae0af02288ed7d6438a2aa298bdbdbd989fb1de3d3b08916adaaa01288ed7d6438a2aa298f0f0f0403f53fbfbfb"),a(h,"Liquid Carbon","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc595959ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2303030"),a(h,"Liquid Carbon Transparent","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc404040ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2000000"),a(h,"Lovelace","282a36f37f975adecdf2a2728897f4c574dd79e6f3fdfdfd4e5165ff497118e3c8ff8037556fffb043d13fdceebebec1fdfdfd1d1f28"),a(h,"Man Page","000000cc000000a6009999000000b2b200b200a6b2b2b2b2666666e5000000cc00bfbf000000ffe500e500cbcbe5e5e5000000fef49c"),a(h,"Mariana","000000ec5f6699c794f9ae586699ccc695c65fb4b4f7f7f7666666f97b58acd1a8fac76185add6d8b6d882c4c4ffffffd8dee9343d46"),a(h,"Material","212121b7141f457b24f6981e134eb25600880e717cafafaf424242e83b3f7aba3abfaa0054a4f3aa4dbc26bbd1d9d9d9232322eaeaea"),a(h,"Material Dark","212121b7141f457b24f6981e134eb2701aa20e717cefefef4f4f4fe83b3f7aba3affea2e54a4f3aa4dbc26bbd1d9d9d9e5e5e5232322"),a(h,"Material Darker","000000ff5370c3e88dffcb6b82aaffc792ea89ddffffffff545454ff5370c3e88dffcb6b82aaffc792ea89ddffffffffeeffff212121"),a(h,"Material Design Colors","435b67fc38415cf19efed03237b6fffc226e59ffd1ffffffa1b0b8fc746dadf7befee16c70cffffc669b9affe6ffffffe7ebed1d262a"),a(h,"Material Ocean","546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff8f93a20f111a"),a(h,"Mathias","000000e52222a6e32dfc951ec48dfffa257367d9f0f2f2f2555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(h,"Matrix","0f191c23755a82d967ffd7003f524240993150b45a5073506880602fc07990d762faff004f7e7e11ff25c1ff8a678c614266440f191c"),a(h,"Matte Black","333333d35f5fffc107b91c1ce68e0dd35f5fbebebebebebe8a8a8d891c1cffc107b90a0af59e0bb91c1ceaeaeaffffffbebebe121212"),a(h,"Medallion","000000b64c007c8b16d3bd26616bb08c5a90916c25cac29a5e5219ff9149b2ca3bffe54aacb8ffffa0ffffbc51fed698cac2961d1908"),a(h,"Melange Dark","34302cbd818378997ae49b5d7f91b2b380b07b9695c1a78e867462d4776685b695ebc06da3a9cecf9bc289b3b6ece1d7ece1d7292522"),a(h,"Melange Light","e9e1dbc77b8b6e9b72bc5c007892bdbe79bb7397977d6658a98a78bf00213a684aa06d00465aa49041803d656854433a54433af1f1f1"),a(h,"Mellifluous","1a1a1ad29393b3b393cbaa89a8a1beb39fb0c0af8cdadada5b5b5bc95954828040a6794c5a65999c699574a39effffffdadada1a1a1a"),a(h,"Mellow","27272af5a19190b99fe6b99daca1cfe29ecaea83a5c1c0d4424246ffae9f9dc6acf0c5a9b9aedaecaad6f591b2cac9ddc9c7cd161617"),a(h,"Miasma","0000006857425f875fb36d4378824bbb7744c9a554d7c4836666666857425f875fb36d4378824bbb7744c9a554d7c483c2c2b0222222"),a(h,"Midnight In Mojave","1e1e1eff453a32d74bffd60a0a84ffbf5af25ac8faffffff515151ff453a32d74bffd60a0a84ffbf5af25ac8faffffffffffff1e1e1e"),a(h,"Mirage","011627ff999985cc95ffd7007fb5ffddb3ff21c7a8ffffff575656ff999985cc95ffd7007fb5ffddb3ff85cc95ffffffa6b2c01b2738"),a(h,"Misterioso","000000ff424274af68ffad29338f869414e623d7d7e1e1e0626262ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e02d3743"),a(h,"Molokai","121212fa257398e123dfd4601080d08700ff43a8d0bbbbbb555555f6669db1e05ffff26d00afffaf87ff51ceffffffffbbbbbb121212"),a(h,"Mona Lisa","351b0e9b291c636232c36e28515c5d9b1d29588056f7d75c874228ff4331b4b264ff95669eb2b4ff5b6a8acd8fffe598f7d66a120b0d"),a(h,"Monokai Classic","272822f92672a6e22ee6db74fd971fae81ff66d9effdfff16e7066f92672a6e22ee6db74fd971fae81ff66d9effdfff1fdfff1272822"),a(h,"Monokai Pro","2d2a2eff6188a9dc76ffd866fc9867ab9df278dce8fcfcfa727072ff6188a9dc76ffd866fc9867ab9df278dce8fcfcfafcfcfa2d2a2e"),a(h,"Monokai Pro Light","faf4f2e14775269d69cc7a0ae160327058be1c8ca829242aa59fa0e14775269d69cc7a0ae160327058be1c8ca829242a29242afaf4f2"),a(h,"Monokai Pro Light Sun","f8efe7ce4770218871b16803d4572b6851a22473b62c232ea59c9cce4770218871b16803d4572b6851a22473b62c232e2c232ef8efe7"),a(h,"Monokai Pro Machine","273136ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffc6b7678ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffcf2fffc273136"),a(h,"Monokai Pro Octagon","282a3aff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1696d77ff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1eaf2f1282a3a"),a(h,"Monokai Pro Ristretto","2c2525fd6883adda78f9cc6cf38d70a8a9eb85daccfff1f372696afd6883adda78f9cc6cf38d70a8a9eb85daccfff1f3fff1f32c2525"),a(h,"Monokai Pro Spectrum","222222fc618d7bd88ffce566fd9353948ae35ad4e6f7f1ff69676cfc618d7bd88ffce566fd9353948ae35ad4e6f7f1fff7f1ff222222"),a(h,"Monokai Remastered","1a1a1af4005f98e024fd971f9d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efd9d9d90c0c0c"),a(h,"Monokai Soda","1a1a1af4005f98e024fa84199d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efc4c5b51a1a1a"),a(h,"Monokai Vivid","121212fa293498e123fff30a0443fff800f801b6edffffff838383f6669db1e05ffff26d0443fff200f651cefffffffff9f9f9121212"),a(h,"Moonfly","323437ff54548cc85fe3c78a80a0ffcf87e879dac8c6c6c6949494ff518936c692c6c68474b2ffae81ff85dc85e4e4e4bdbdbd080808"),a(h,"N0Tch2K","383838a95551666666a98051657d3e767676c9c9c9d0b8a3545454a977758c8c8ca9917598bd5ea3a3a3dcdcdcd8c8bba0a0a0222222"),a(h,"Neobones Dark","0f191fde6e7c90ff6bb77e648190d4b279a766a5adc6d5cf334652e8838fa0ff85d68c6792a0e2cf86c165b8c198a39ec6d5cf0f191f"),a(h,"Neobones Light","e5ede6a8334c567a3094492728648688507d3b8992202e1899ac9c94253e3f5a22803d1c1d55737b3b702b747c415934202e18e5ede6"),a(h,"Neon","000000ff30455ffa74fffc7e0f15d8f924e700fffcc7c7c7686868ff5a5a75ff88fffd963c40cbf15be588fffeffffff00fffc14161a"),a(h,"Neopolitan","0000009a1a1a61ce3cfbde2d324883ff00808da6cef8f8f84c4c4c9a1a1a61ce3cfbde2d324883ff00808da6cef8f8f8ffffff271f19"),a(h,"Neutron","23252bb540365ab977deb5666a7c93a4799d3f94a8e6e8ef494b51b540365ab977deb5666a7c93a4799d3f94a8ebedf2e6e8ef1c1e22"),a(h,"Night Lion V1","4c4c4cbb00005fde8ff3f167276bd8bb00bb00dadfbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(h,"Night Lion V2","4c4c4cbb000004f623f3f16764d0f0ce6fdb00dadfbbbbbb555555ff55557df71dffff5562cbe8ff9bf500ccd8ffffffbbbbbb171717"),a(h,"Night Owl","011627ef535022da6eaddb6782aaffc792ea21c7a8ffffff575656ef535022da6effeb9582aaffc792ea7fdbcaffffffd6deeb011627"),a(h,"Night Owlish Light","011627d3423e2aa298daaa014876d6403f5308916a7a81817a8181f76e6e49d0c5dac26b5ca7e469709800c990989fb1403f53ffffff"),a(h,"Nightfox","393b44c94f6d81b29adbc074719cd69d79d663cdcfdfdfe0575860d169838ebaa4e0c98986abdcbaa1e27ad5d6e4e4e5cdcecf192330"),a(h,"Niji","333333d23e0854ca74fff7002ab9ffff50da1ef9f5ddd0c4515151ffb7b7c1ffaefcffb88efff3ffa2edbcffc7ffffffffffff141515"),a(h,"No Clown Fiesta","151515b4695890a959f4bf75bad7ffaa759f88afa2e1e1e17272727e97ab90a959f4bf75bad7ffaa759f88afa2afafafe0e1e4101010"),a(h,"No Clown Fiesta Light","d6d6d6874e42677940b890588ba1bfaa759f3e5f661515152b2b2b637786677940b8905893a2abaa759f99ab93373737151515e1e1e1"),a(h,"Nocturnal Winter","4d4d4df12d5209cd7ef5f17a3182e0ff2b6d09c87afcfcfc808080f16d860ae78dfffc676096ffff78a20ae78dffffffe6e5e50d0d17"),a(h,"Nord","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f0596377bf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee92e3440"),a(h,"Nord Light","3b4252bf616a96b17fc5a56581a1c1b48ead7bb3c3a5abb64c566abf616a96b17fc5a56581a1c1b48ead82afaeeceff4414858e5e9f0"),a(h,"Nord Wave","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f04c566abf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee9212121"),a(h,"Nordfox","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f053648dd06f79b1d196f0d3998cafd2c895bf93ccdce7ecf4cdcecf2e3440"),a(h,"Novel","000000cc0000009600d06b000000cccc00cc0087cca6a6a6808080cc0000009600d06b000000cccc00cc0087ccffffff3b2322dfdbc3"),a(h,"Nvim Dark","07080dffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f84f5258ffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f8e0e2ea14161b"),a(h,"Nvim Light","07080d5900080055236b5300004c73470045007373a1a4ab4f52585900080055236b5300004c73470045007373eef1f814161be0e2ea"),a(h,"Obsidian","000000b30d0e00bb00fecd223a9bdbbb00bb00bbbbbbbbbb555555ff000393c863fef874a1d7ffff55ff55ffffffffffcdcdcd283033"),a(h,"Ocean","000000e64c4c00a6009999000000b2d826d800a6b2bfbfbf808080ff1a1a00d900e5e5007373ffe500e500e5e5e5e5e5ffffff224fbc"),a(h,"Oceanic Material","000000ee2b2a40a33fffea2e1e80f08800a016afcaa4a4a4777777dc5c6070be71fff16354a4f3aa4dbc42c7daffffffc2c8d71c262b"),a(h,"Oceanic Next","162c35ec5f6799c794fac8636699ccc594c55fb3b3ffffff65737eec5f6799c794fac8636699ccc594c55fb3b3ffffffc0c5ce162c35"),a(h,"Ollie","000000ac2e3131ac61ac43002d57acb085281fa6ac8a8eac684432ff3d483bff99ff5e1e4488ffffc21d1ffaff5b6ea78a8dae222125"),a(h,"One Dark Two","1d1f23e2788198c379eac78671b9f4c88bda62bac6c9ccd34a505ae68991a8cc8eedcf978dc7f6d3a2e278c4cee6e6e6e6e6e621252b"),a(h,"One Double Dark","3d4452f163728cc570ecbe703fb1f5d373e317b9c4dbdfe5525d6fff777b82d882f5c0656dcaffff7bf400e5fbf7f9fcdbdfe5282c34"),a(h,"One Double Light","454b58f7484025a343cc81000087c1b50da9009ab7c5b2b30e131fff371100b90eec99001065dee500d800b4ddffffff383a43fafafa"),a(h,"One Half Dark","282c34e06c7598c379e5c07b61afefc678dd56b6c2dcdfe45d677ae06c7598c379e5c07b61afefc678dd56b6c2dcdfe4dcdfe4282c34"),a(h,"One Half Light","383a42e4564950a14fc184010184bca626a40997b3bababa4f525ee06c7598c379d8b36e61afefc678dd56b6c2ffffff383a42fafafa"),a(h,"Onenord","3b4252e06c759ec183ebcb8b81a1c1b988b088c0d0e5e9f0596377e06c759ec183ebcb8b81a1c1b988b08fbcbbeceff4e5e9f02e3440"),a(h,"Onenord Light","2e3440cb4f5348a53dee5e253879c59f4aca3ea1adb2b6bd646a76d163665f9e9dba793e1b40a69665af8fbcbbeceff42e3440f7f8fa"),a(h,"Operator Mono Dark","5a5a5aca372d4d7b3ad4d6974387cfb86cb472d5c6ced4cd9a9b99c37d6283d0a2fdfdc589d3f6ff2c7a82eadafdfdf6c3cac2191919"),a(h,"Overnight Slumber","0a1222ffa7c485cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ffa7c485cc95ffcb8b8dabe1c792ebffa7c4ffffffced2d60e1729"),a(h,"Oxocarbon","16161600dfdb00b4ffff429700c15ac693ffff74b8f2f4f858585800dfdb00b4ffff429700c15ac693ffff74b8f2f4f8f2f4f8161616"),a(h,"Pale Night Hc","000000f07178c3e88dffcb6b82aaffc792ea89ddffffffff737373f6a9aedbf1baffdfa6b4ccffddbdf2b8eaff999999cccccc3e4251"),a(h,"Pandora","000000ff424274af68ffad29338f869414e623d7d7e2e2e23f5648ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e1141e43"),a(h,"Paraiso Dark","2f1e2eef615548b685fec41806b6ef815ba45bc4bfa39e9b776e71ef615548b685fec41806b6ef815ba45bc4bfe7e9dba39e9b2f1e2e"),a(h,"Paul Millr","2a2a2aff000079ff0fe7bf00396bd7b449be66ccffbbbbbb666666ff008066ff66f3d64e709aeddb67e67adff2fffffff2f2f2000000"),a(h,"Pencil Dark","212121c3077110a778a89c14008ec45f498620a5bad9d9d94f4f4ffb007a5fd7aff3e43020bbfc6855de4fb8ccf1f1f1f1f1f1212121"),a(h,"Pencil Light","212121c3077110a778a89c14008ec4523c7920a5bab3b3b3424242fb007a52caa2c0b10020bbfc6855de4fb8ccf1f1f1424242f1f1f1"),a(h,"Peppermint","353535e7466989d287dab853449fd0da62dc65aaafb4b4b4535353e4859ba3cca2e1e4876fbce2e586e796dcdbdfdfdfc8c8c8000000"),a(h,"Phala Green Dark","000000ab150000b100a9a7000223c0c22ec000b4c0cbcbcb797979ed220000db00eae7000433ffed3aea00e8eaeaeaeac1fc03000000"),a(h,"Piatto Light","414141b2377166781ecd6f343c5ea8a454b266781ebfbfbf3f3f3fdb3365829429cd6f343c5ea8a454b2829429f2f2f2414141ffffff"),a(h,"Pnevma","2f2e2da3666690a57dd7af877fa5bdc79ec48adbb4d0d0d04a4845d78787afbea2e4c9afa1bdced7bedab1e7ddefefefd0d0d01c1c1c"),a(h,"Poimandres","1a1e28d0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd1a1e28"),a(h,"Poimandres Darker","16161ed0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd16161e"),a(h,"Poimandres Storm","252b37d0679d5de4c7fffac289ddfff087bd89ddffffffffa6accdd0679d5de4c7fffac2add7fff087bdadd7ffffffffa6accd252b37"),a(h,"Poimandres White","fefeffff209001dab2e5ba4e8abacdeb83948abacd000000969cbdff209001dab2e5ba4e0ebfffeb83940ebfff000000969cbdfefeff"),a(h,"Popping And Locking","1d2021cc241d98971ad79921458588b16286689d6aa89984928374f42c3eb8bb26fabd2f99c6cad3869b7ec16eebdbb2ebdbb2181921"),a(h,"Powershell","000000981a22098003c4a0004140c3d336820e807f7f7c7f808080ef29291cfe3cfefe45268ad2fe13fa29fffec2c1c3f6f6f7052454"),a(h,"Primary","000000db44370f9d58f4b4004285f4db44374285f4bfbfbf000000db44370f9d58f4b4004285f44285f40f9d58ffffff000000ffffff"),a(h,"Pro","00000099000000a6009999002009dbb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e5f2f2f2000000"),a(h,"Pro Light","000000e5492b50d148c6c4403b75ffed66e84ed2dec2c2c29f9f9fff664048d53ebfbe230082ffff7eff3bd1d2f2f2f2191919ffffff"),a(h,"Purple Rain","000000ff260e9be205ffc40000a2fa815bb500deefffffff565656ff4250b8e36effd85200a6ffac7bf074fdf3fffffffffbf621084a"),a(h,"Purplepeter","0a0520ff796d99b481efdfac66d9efe78fcdba8cffffba81504b63f99f92b4be8ff2e9bf79daedba91d4a0a0d6b9aed3ece7fa2a1a4a"),a(h,"Rapture","000000fc644d7afde1fff09b6c9bf5ff4fa164e0ffc0c9e5304b66fc644d7afde1fff09b6c9bf5ff4fa164e0ffffffffc0c9e5111e2a"),a(h,"Raycast Dark","000000ff536059d499ffc53156c2ffcf2f9852eee5ffffff4c4c4cff636359d499ffc53156c2ffcf2f9852eee5ffffffffffff1a1a1a"),a(h,"Raycast Light","000000b12424006b4ff8a300138af29a1b6e3eb8bfbfbfbf000000b12424006b4ff8a300138af29a1b6e3eb8bfffffff000000ffffff"),a(h,"Rebecca","12131edd775504dbb5f2e7b77aa5ffbf9cf956d3c2e4e3e9666699ff92cd01eac0fffca869c0fac17ff88bfde1f4f2f9e8e6ed292a44"),a(h,"Red Alert","000000d62e4e71be6bbeb86b489beee979d76bbeb8d6d6d6666666e02553aff08cdfddb765aaf1ddb7dfb7dfddffffffffffff762423"),a(h,"Red Planet","2020208c3432728271e8bf6a69819e8964925b8390b9aa99676767b55242869985ebeb9160827ede497438add8d6bfb8c2b790222222"),a(h,"Red Sands","000000ff3f0000bb00e7b0000072ffbb00bb00bbbbbbbbbb6e6e6ed41a1a00bb00e7b0000072aeff55ff55ffffffffffd7c9a77a251e"),a(h,"Relaxed","151515bc5653909d63ebc17a6a8799b06698c9dfffd9d9d9636363bc5653a0ac77ebc17a7eaac7b06698acbbd0f7f7f7d9d9d9353a44"),a(h,"Retro","13a10e13a10e13a10e13a10e13a10e13a10e13a10e13a10e16ba1016ba1016ba1016ba1016ba1016ba1016ba1016ba1013a10e000000"),a(h,"Retro Legends","262626de545445eb45f7bf2b4066f2bf4cf240d9e6bfe6bf4c594cff666659ff59ffd9334c80ffe666ff59e6fff2fff245eb450d0d0d"),a(h,"Rippedcasts","000000cdaf95a8ff60bfbb1f75a5b0ff73fd5a647ebfbfbf666666eecbadbcee68e5e50086bdc9e500e58c9bc4e5e5e5ffffff2b2b2b"),a(h,"Rose Pine","26233aeb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def46e6a86eb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def4e0def4191724"),a(h,"Rose Pine Dawn","f2e9e1b4637a286983ea9d3456949f907aa9d7827e5752799893a5b4637a286983ea9d3456949f907aa9d7827e575279575279faf4ed"),a(h,"Rose Pine Moon","393552eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def46e6a86eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def4e0def4232136"),a(h,"Rouge 2","5d5d6bc6797e969e92dbcdab6e94b94c4e788ab6c1e8e8ea616274c6797ee6dcc4e6dcc498b3cd8283a1abcbd3e8e8eaa2a3aa17182b"),a(h,"Royal","241f2b91284c23801cb49d276580b0674d968aaabe5249663e3a4ad5356c2cd946fde83b90baf9a479e3acd4eb9e8cbd514968100815"),a(h,"Ryuuko","2c3941865f5b66907db1a9906a8e95b18a7388b2acececec5d7079865f5b66907db1a9906a8e95b18a7388b2acecececececec2c3941"),a(h,"Sakura","000000d5237041af1abc70536964abc71fbf939393998eac786d69f41d9922e529f595749892f1e90cddeeeeeecbb6ffdd7bdc18131e"),a(h,"Scarlet Protocol","101116ff005100dc84faf9450271b6ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffbd35ec60fdffffffffe419511c153d"),a(h,"Sea Shells","17384cd15123027c9bfca02f1e495068d4f150a3b5deb88d434b53d48678628d98fdd39f1bbcddbbe3ee87acb4fee4cedeb88d09141b"),a(h,"Seafoam Pastel","757575825d4d728c62ada16d4d7b828a7267729494e0e0e08a8a8acf937a98d9aafae79d7ac3cfd6b2a1ade0e0e0e0e0d4e7d4243435"),a(h,"Selenized Black","252525ed4a4670b433dbb32d368aebeb6eb73fc5b7b9b9b9777777ff5e5683c746efc5414f9cfeff81ca56d8c9dededeb9b9b9181818"),a(h,"Selenized Dark","184956fa575075b938dbb32d4695f7f275be41c7b9adbcbc72898fff665c84c747ebc13d58a3ffff84cd53d6c7cad8d9adbcbc103c48"),a(h,"Selenized Light","ece3ccd2212d489100ad89000072d4ca4898009c8f53676d909995cc1729428b00a78300006dcec4439200978a3a4d5353676dfbf3db"),a(h,"Seoulbones Dark","4b4b4be388a398bd99ffdf9b97bddea5a6c56fbdbedddddd797172eb99b18fcd92ffe5b3a2c8e9b2b3da6bcacba8a8a8dddddd4b4b4b"),a(h,"Seoulbones Light","e2e2e2dc5284628562c485620084a3896788008586555555a5a0a1be3c6d487249a76b48006f897f4c7e006f70777777555555e2e2e2"),a(h,"Seti","323232c228328ec43de0c64f43a5d58b57b58ec43deeeeee3f3f3fc228328ec43de0c64f43a5d58b57b58ec43dffffffcacecd111213"),a(h,"Shades Of Purple","000000d904293ad900ffe7006943ffff2c7000c5c7c7c7c7686868f92a1c43d426f1d0006871ffff77ff79e8fbffffffffffff1e1d40"),a(h,"Shaman","012026b2302d00a9415e8baa449a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6405555001015"),a(h,"Slate","222222e2a8bf81d778c4c9c0335856a481d315ab9c02c5e0ffffffffcdd9beffa8d0ccca7ab0d2c5a7d98cdfe0e0e0e035b1d2222222"),a(h,"Sleepy Hollow","572100ba393491773fb556005f63b4a17c7b8faea9af9a914e4b61d9443fd6b04ef668138086efe2c2bba4dce7d2c7a9af9a91121214"),a(h,"Smyck","000000b841317da900c4a50062a3c4ba8acc207383a1a1a17a7a7ad6837cc4f137fee14d8dcff0f79aff6ad9cff7f7f7f7f7f71b1b1b"),a(h,"Snazzy","000000fc434650fb7cf0fb8c49bafffc4cb48be9feededec555555fc434650fb7cf0fb8c49bafffc4cb48be9feededecebece61e1f29"),a(h,"Snazzy Soft","000000ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0686868ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0eff0eb282a36"),a(h,"Soft Server","000000a2686a9aa56aa3906a6b8fa36a71a36ba58f99a3a2666c6cdd5c60bfdf55deb36062b1df606edf64e39cd2e0de99a3a2242626"),a(h,"Solarized Darcula","25292af24840629655b688002075c7797fd415968dd2d8d965696af24840629655b688002075c7797fd415968dd2d8d9d2d8d93d3f41"),a(h,"Solarized Dark Higher Contrast","002831d11c246cbe6ca577062176c7c61c6f259286eae3cb006488f5163b51ef84b27e28178ec8e24d8e00b39efcf4dc9cc2c3001e27"),a(h,"Solarized Dark Patched","002831d11c24738a05a577062176c7c61c6f259286eae3cb475b62bd3613475b625368707082845956ba819090fcf4dc708284001e27"),a(h,"Solarized Osaka Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(h,"Sonokai","181819fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e37f8490fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e3e2e2e32c2e34"),a(h,"Spacedust","6e5346e35b005cab96e3cd7b0f548be35b0006afc7f0f1ce684c31ff8a3aaecab8ffc87867a0ceff8a3a83a7b4fefff1ecf0c10a1e24"),a(h,"Spacegray","000000b04b5787b379e5c1797d8fa4a4799685a7a5b3b8c34c4c4cb04b5787b379e5c1797d8fa4a4799685a7a5ffffffb3b8c320242d"),a(h,"Spacegray Bright","080808bc5553a0b56cf6c9877baec1b98aae85c9b8d8d8d8626262bc5553a0b56cf6c9877baec1b98aae85c9b8f7f7f7f3f3f32a2e3a"),a(h,"Spacegray Eighties","15171cec5f6781a764fec2545486c0bf83c157c2c1efece7555555ff697393d493ffd2564d84d1ff55ff83e9e4ffffffbdbaae222222"),a(h,"Spacegray Eighties Dull","15171cb24a5692b477c6735a7c8fa5a5789e80cdcbb3b8c3555555ec5f6789e986fec2545486c0bf83c158c2c1ffffffc9c6bc222222"),a(h,"Spiderman","1b1d1ee60813e22928e247562c3fff2435db3256fffffef6505354ff0325ff3338fe3a351d50ff747cff6184fffffff9e3e3e31b1d1e"),a(h,"Spring","000000ff4d831f8c3b1fc95b1dd3ee8959a83e999fbfbfbf000000ff00211fc231d5b80715a9fd8959a83e999fffffff4d4d4cffffff"),a(h,"Square","050505e9897cb6377decebbea9cdeb75507bc9caecf2f2f2474747f99286c3f786fcfbccb6defbad7fa8d7d9fce2e2e2acacab1a1a1a"),a(h,"Squirrelsong Dark","372920ba4138468336d4b1394395c6855fb82f9794d3b9a2704f39df4d43659a4ce8c23f4ca4db9d70da60aca9f2d4bbb19b89372920"),a(h,"Srcery","1c1b19ef2f27519f50fbb8292c78bfe02c6d0aaeb3baa67f918175f7534198bc37fed06e68a8e4ff5c8f2be4d0fce8c3fce8c31c1b19"),a(h,"Starlight","242424f62b5a47b413e3c40124acd4f2affd13c299e6e6e6616161ff4d5135d450e9e8365dc5f8feabf224dfc4ffffffffffff242424"),a(h,"Sublette","253045ee557755ee77ffdd885588ffff77cc44eeeef5f5da405570ee665599ee77ffff7777bbffaa88ff55ffbbffffeeccced0202535"),a(h,"Subliminal","7f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d47f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d4d4d4d4282c35"),a(h,"Sugarplum","1111475ca8dc53b397249a84db7dddd0beeef9f3f9a175d444447a5cb5dc52deb501f5c7fa5dfdc6a5fdffffffb577fddb7ddd111147"),a(h,"Sundried","302b2aa7463d5877449d602a485b988646519c814fc9c9c94d4e48aa000c128c21fc6a217999f7fd8aa1fad484ffffffc9c9c91a1818"),a(h,"Sunset Drive","0a0a13ff006300f992ffe90000a4ffff57fd00ffedededff3e3e4bff948b00fcb9ffff683ea0ffff93ff38fffff8f8ffededfe0f0f1a"),a(h,"Symfonic","000000dc322f56db3aff84000084d4b729d9ccccffffffff414347dc322f56db3aff84000084d4b729d9ccccffffffffffffff000000"),a(h,"Synthwave","000000f6188f1ebb2bfdf8342186ecf85a2112c3e2ffffff7f7094f841a025c141fdf4542f9dedf9713719cde6ffffffdad9c7000000"),a(h,"Synthwave Alpha","241b30e60a7000986cadad3e6e29adb300ad00b0b1b9b1bc7f7094e60a700ae4a4f9f972aa54f9ff00f600fbfdf2f2e3f2f2e3241b30"),a(h,"Synthwave Everything","fefefef97e7272f1b8fede5d6d77b3c792eaf772e0fefefefefefef8841472f1b8fff95136f9f6e1acfff92aadfefefef0eff12a2139"),a(h,"Tango Adapted","000000ff000059d600e3be0000a2ffc17ecc00d0d6c0c5bb8f928bff00136dd900ccbe0088c9ffe9a7e100d8d9f6f6f4000000ffffff"),a(h,"Tango Half Adapted","000000ff00004cc300e2c000008ef6a96cb300bdc3babfb5797d76ff001370dc00d9c60076bfffd898d100d0d4f4f4f2000000ffffff"),a(h,"Tearout","685742cc967b97976d6c9861b5955ec9a554d7c483b5955e75644fcc967b97976d6c9861b5955ec9a554d7c483b5955ef4d2ae34392d"),a(h,"Teerb","1c1c1cd68686aed686d7af8786aed6d6aed68adbb4d0d0d04f4f4fd68686aed686e4c9af86aed6d6aed6b1e7ddefefefd0d0d0262626"),a(h,"Terafox","2f3239e85c517aa4a1fda47f5a93aaad5c7ca1cdd8ebebeb4e5157eb746b8eb2affdb29273a3b7b97490afd4deeeeeeee6eaea152528"),a(h,"Terminal Basic","00000099000000a6009999000000b2b200b200a6b2bfbfbf666666e5000000d900bfbf000000ffe500e500d8d8e5e5e5000000ffffff"),a(h,"Terminal Basic Dark","000000c653396ac44bb8b74a6444edd357db69c1cfd1d1d1909090eb5a3a77ea51efef53d09af9eb5af778f1f2edededffffff1d1e1d"),a(h,"Thayer Bright","1b1d1ef926724df840f4fd222757d68c54fe38c8b5ccccc6505354ff5995b6e354feed6c3f78ff9e6ffe23cfd5f8f8f2f8f8f81b1d1e"),a(h,"The Hulk","1b1d1e269d1b13ce3063e4572525f5712c81378ca9d9d8d15053548dff2a48ff773afe16506b9572589d4085a6e5e6e1b5b5b51b1d1e"),a(h,"Tinacious Design Dark","1d1d26ff339900d364ffcc6600cbffcc66ff00cecacbcbf0636667ff2f9200d364ffd47900cbffd783ff00d5d4d5d6f3cbcbf01d1d26"),a(h,"Tinacious Design Light","1d1d26ff339900d364e5b24d00cbffcc66ff00cecab1b1d6636667ff2f9200d364d9ae5300cbffd783ff00c8c7d5d6f31d1d26f8f8ff"),a(h,"TokyoNight","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(h,"TokyoNight Day","e9e9edf52a655875398c6c3e2e7de99854f10071976172b0a1a6c5f52a655875398c6c3e2e7de99854f10071973760bf3760bfe1e2e7"),a(h,"TokyoNight Moon","1b1d2bff757fc3e88dffc77782aaffc099ff86e1fc828bb8444a73ff757fc3e88dffc77782aaffc099ff86e1fcc8d3f5c8d3f5222436"),a(h,"TokyoNight Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(h,"TokyoNight Storm","1d202ff7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d64e5575f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf524283b"),a(h,"Tomorrow","000000c82829718c00eab7004271ae8959a83e999fbfbfbf000000c82829718c00eab7004271ae8959a83e999fffffff4d4d4cffffff"),a(h,"Tomorrow Night","000000cc6666b5bd68f0c67481a2beb294bb8abeb7ffffff4c4c4ccc6666b5bd68f0c67481a2beb294bb8abeb7ffffffc5c8c61d1f21"),a(h,"Tomorrow Night Blue","000000ff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffff4c4c4cff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffffffffff002451"),a(h,"Tomorrow Night Bright","000000d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffff404040d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffffeaeaea000000"),a(h,"Tomorrow Night Burns","252525832e31a63c40d3494efc595fdf9395ba8586f5f5f55d6f71832e31a63c40d2494efc595fdf9395ba8586f5f5f5a1b0b8151515"),a(h,"Tomorrow Night Eighties","000000f2777a99cc99ffcc666699cccc99cc66ccccffffff595959f2777a99cc99ffcc666699cccc99cc66ccccffffffcccccc2d2d2d"),a(h,"Toy Chest","2c3f58be2d261a9172db8e27325d968a5edc35a08f23d183336889dd594431d07be7d84b34a6daae6bdc42c3aed5d5d531d07b24364b"),a(h,"Treehouse","321300b2270e44a900aa820c58859a97363db25a1e786b53504333ed5d2055f238f2b73285cfede14c5af07d14ffc800786b53191919"),a(h,"Twilight","141414c06d44afb97ac2a86c44474ab4be7c778385ffffd4404040de7c4cccd88ce2c47e5a5e62d0dc8e8a989bffffd4ffffd4141414"),a(h,"Ubuntu","2e3436cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeeceeeeec300a24"),a(h,"Ultra Dark","000000f07178c3e88dffcb6b82aaffc792ea89ddffcccccc404040f6a9aedbf1baffdfa6b4ccffddbdf2b8eaffffffffffffff000000"),a(h,"Ultra Violent","242728ff0090b6ff00fff72747e0fbd731ff0effbbe1e1e1636667fb58b4deff8cebe0877fecffe681ff69fcd3f9f9f5c1c1c1242728"),a(h,"Under The Sea","022026b2302d00a94159819c459a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6ffffff011116"),a(h,"Unikitty","0c0c0ca80f20c7ff98fff964145fcdffe9ff9effeffcf1fb434343d91329d3ffafffef500075eaffefff93ffeffff3fe0b0b0bff8cd9"),a(h,"Urple","000000b0425b37a415ad5c42564d9b6c3ca180808087799c6a3f32ff638829e620f08161867aeda05eeeeaeaeabfa3ff877a9b1b1b23"),a(h,"Vague","252530d8647e7fa563f3be7c6e94b2bb9dbdaeaed1cdcdcd606079e0839899b782f5cb968ba9c1c9b1cabebedad7d7d7cdcdcd141415"),a(h,"Vaughn","25234f70505060b48adfaf8f5555fff08cc38cd0d3709080709080dca3a360b48af0dfaf5555ffec93d393e0e3ffffffdcdccc25234f"),a(h,"Vercel","000000fc003629a948ffae00006afff3288200ac96feffffa8a8a8ff80804be15dffae0049aefff97ea800e4c4fefefefafafa101010"),a(h,"Vesper","101010f5a19190b99fe6b99daca1cfe29ecaea83a5a0a0a07e7e7eff808099ffe4ffc799b9aedaecaad6f591b2ffffffffffff101010"),a(h,"Vibrant Ink","878787ff6600ccff04ffcc0044b4cc9933cc44b4ccf5f5f5555555ff000000ff00ffff000000ffff00ff00ffffe5e5e5ffffff000000"),a(h,"Vimbones","f0f0caa8334c4f6c3194492728648688507d3b8992353535acac8994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535f0f0ca"),a(h,"Violet Dark","56595cc94c2285981cb4881d2e8bced13a8232a198c9c6bd45484bbd3613738a04a577052176c7c61c6f259286c9c6bd7082841c1d1f"),a(h,"Violet Light","56595cc94c2285981cb4881d2e8bced13a8232a198b9b6af45484bbd3613738a04a577052176c7c61c6f259286c9c6bd536870fcf4dc"),a(h,"Violite","241c36ec797979ecb3ece279a979ecec79ec79ececeef4f656447aef8f8f9fefbfefe78fb78fefef8fcf9fefeff8fafceef4f6241c36"),a(h,"Warm Neon","000000e2434639b13adae1454261c5f920fb2abbd4d0b8a3fefcfce970719cc090ddda7a7b91d6f674ba5ed1e5d8c8bbafdab6404040"),a(h,"Wez","000000cc555555cc55cdcd555555cccc55cc7acacacccccc555555ff555555ff55ffff555555ffff55ff55ffffffffffb3b3b3000000"),a(h,"Whimsy","535178ef64875eca89fdd87765aef7aa7ff043c1beffffff535178ef64875eca89fdd87765aef7aa7ff043c1beffffffb3b0d629283b"),a(h,"Wild Cherry","000507d940852ab250ffd16f883cdcecececc1b8b7fff8de009cc9da6bacf4dca5eac066308cbaae636bff919de4838ddafaff1f1726"),a(h,"Wilmersdorf","34373ee063837ebebdcccccca6c1e0e1c1ee5b94abababab50545dfa71938fd7d6d1dfffb2cff0efccfd69abc5d3d3d3c6c6c6282b33"),a(h,"Wombat","000000ff615ab1e969ebd99c5da9f6e86aff82fff7dedacf4a4a4af58c80ddf88feee5b2a5c7ffddaaffb7fff9ffffffdedacf171717"),a(h,"Wryan","3333338c46652873737c7c993955735e468c31658c899ca13d3d3dbf4d8053a6a69e9ecb477ab37e62b36096bfc0c0c0999993101010"),a(h,"Xcode Dark","414453ff817078c2b3d9c97c4eb0ccff7ab2b281ebdfdfe07f8c98ff8170acf2e4ffa14f6bdfffff7ab2dabaffdfdfe0dfdfe0292a30"),a(h,"Xcode Dark hc","43454bff8a7a83c9bcd9c6684ec4e6ff85b8cda1ffffffff838991ff8a7ab1faebffa14f6bdfffff85b8e5cfffffffffffffff1f1f24"),a(h,"Xcode Light","b4d8fdd12f1b3e808778492a0f68a0ad3da4804fb82626268a99a6d12f1b23575c78492a0b4f79ad3da44b21b0262626262626ffffff"),a(h,"Xcode Light hc","b4d8fdad1805355d6178492a0058a19c2191703daa0000008a99a6ad180517414578492a003f739c2191441ea1000000000000ffffff"),a(h,"Xcode WWDC","494d5cbb383a94c66ed28e5d8884c5b7399900aba4e7e8eb7f869ebb383a94c66ed28e5d8884c5b7399900aba4e7e8ebe7e8eb292c36"),a(h,"Zenbones","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(h,"Zenbones Dark","1c1917de6e7c819b69b77e646099c0b279a766a5adb4bdc34d4540e8838f8bae68d68c6761abdacf86c165b8c1888f94b4bdc31c1917"),a(h,"Zenbones Light","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(h,"Zenburn","4d4d4d7d5d5d60b48af0dfaf5d6d7ddc8cc38cd0d3dcdccc709080dca3a3c3bf9fe0cf9f94bff3ec93d393e0e3ffffffdcdccc3f3f3f"),a(h,"Zenburned","404040e3716e819b69b77e646099c0b279a766a5adf0e4cf6f6768ec86858bae68d68c6761abdacf86c165b8c1c0ab86f0e4cf404040"),a(h,"Zenwritten Dark","191919de6e7c819b69b77e646099c0b279a766a5adbbbbbb4a4546e8838f8bae68d68c6761abdacf86c165b8c18e8e8ebbbbbb191919"),a(h,"Zenwritten Light","eeeeeea8334c4f6c3194492728648688507d3b8992353535aca9a994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535eeeeee"),a(h,"branch","35241cc2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9564a45c2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9cfc1a932221a"),a(h,"iTerm2 Dark Background","000000c91b0000c200c7c4000225c7ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffc7c7c7000000"),a(h,"iTerm2 Default","000000c91b0000c200c7c4002225c4ca30c700c5c7ffffff686868ff6e675ffa68fffc676871ffff77ff60fdffffffffffffff000000"),a(h,"iTerm2 Light Background","000000c91b0000c200c7c4000225c7ca30c700c5c7bababa686868ff6e6739d442ccc9346871ffff77ff3ad7d9ffffff000000ffffff"),a(h,"iTerm2 Pastel Dark Background","626262ff8373b4fb73fffdc3a5d5feff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5c2e3ffffb2fee6e6feffffffc7c7c7000000"),a(h,"iTerm2 Smoooooth","14191eb43c2a00c200c7c4002744c7c040be00c5c7c7c7c7686868dd797558e790ece100a7abf2e17ee160fdffffffffdcdcdc15191f"),a(h,"iTerm2 Solarized Dark","073642dc322f859900b58900268bd2d336822aa198eee8d5335e69cb4b16586e75657b838394966c71c493a1a1fdf6e3839496002b36"),a(h,"iTerm2 Solarized Light","073642dc322f859900b58900268bd2d336822aa198bbb5a2002b36cb4b16586e75657b838394966c71c493a1a1fdf6e3657b83fdf6e3"),a(h,"iTerm2 Tango Dark","000000d81e005ea702cfae00427ab389658e00a7aadbded8686a66f5423599e343fdeb6184b0d8bc94b737e6e8f1f1f0ffffff000000"),a(h,"iTerm2 Tango Light","000000d81e005ea702cfae00427ab389658e00a7aac1c4be686a66f542358cd636d7c53b84b0d8bc94b71ecccef1f1f0000000ffffff"),a(h,"novmbr","282a2e9f64349dac5fcca75f2f7d7cb5896e52877fc7b8ac5d4e479f64349dac5fcca75f2f7d7cb5896e52877fc7b8acc7b8ac241d1a"),a(h,"owl","302c2c5a5a5a989898cacaca656565b1b1b17f7f7fdedede5d595bda5b2c989898cacaca656565b1b1b17f7f7fffffffdedede2f2b2c"),a(h,"traffic","282d31934e46637268c79e84515e67715f5e5c6f7dcfb9a84e575e934e46637270c79e84515e67715f5e5c6f7dddcec2cfb9a8272c30"),a(h,"urban","33303b87404f74934eae835a615772854b64625464c0a79a5c586587404f74934eae835a615772854b64625464c0a79ac0a79a312e39"),h_,g_,a(h,"Logoyo Dark","1c1466ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f2f0ff6a63a0ff6b5e6cc04affc83d6ba8f0b57bf058d6c8fffffff2f0ff2a1e80"),a(h,"Logoyo Light","1c1452ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f4f2ff8983b5ff6b5e6cc04affc83d6ba8f0b57bf058d6c8ffffff29216bc5c1fc"),__,k_,x_,y_,j_]),Nn={$:-2},Ie=Nn,mG=1,Ve=Ae(function(e,r,n,t,o){return{$:-1,a:e,b:r,c:n,d:t,e:o}}),hG=0,yc=Ae(function(e,r,n,t,o){if(o.$===-1&&!o.a){var c=o.a,i=o.b,u=o.c,$=o.d,l=o.e;if(t.$===-1&&!t.a){var d=t.a,b=t.b,g=t.c,_=t.d,p=t.e;return U(Ve,0,r,n,U(Ve,1,b,g,_,p),U(Ve,1,i,u,$,l))}else return U(Ve,e,i,u,U(Ve,0,r,n,t,$),l)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){var m=t.a,b=t.b,g=t.c,P=t.d,C=P.a,j=P.b,L=P.c,T=P.d,F=P.e,p=t.e;return U(Ve,0,b,g,U(Ve,1,j,L,T,F),U(Ve,1,r,n,p,o))}else return U(Ve,e,r,n,t,o)}),Z0=A(function(e,r,n){if(n.$===-2)return U(Ve,0,e,r,Nn,Nn);var t=n.a,o=n.b,c=n.c,i=n.d,u=n.e,$=a(O0,e,o);switch($){case 0:return U(yc,t,o,c,v(Z0,e,r,i),u);case 1:return U(Ve,t,o,r,i,u);default:return U(yc,t,o,c,i,v(Z0,e,r,u))}}),Tr=A(function(e,r,n){var t=v(Z0,e,r,n);if(t.$===-1&&!t.a){var o=t.a,c=t.b,i=t.c,u=t.d,$=t.e;return U(Ve,1,c,i,u,$)}else{var l=t;return l}}),xn=function(e){return v(me,s(function(r,n){var t=r.a,o=r.b;return v(Tr,t,o,n)}),Ie,e)},Db=Y(function(e,r,n,t){if(t.b){var o=t.a,c=t.b;if(c.b){var i=c.a,u=c.b;if(u.b){var $=u.a,l=u.b;if(l.b){var d=l.a,b=l.b,g=n>500?v(me,e,r,Te(b)):x(Db,e,r,n+1,b);return a(e,o,a(e,i,a(e,$,a(e,d,g))))}else return a(e,o,a(e,i,a(e,$,r)))}else return a(e,o,a(e,i,r))}else return a(e,o,r)}else return r}),cn=A(function(e,r,n){return x(Db,e,r,0,n)}),O=s(function(e,r){return v(cn,s(function(n,t){return a(M,e(n),t)}),S,r)}),w_=xn(a(O,function(e){return y(e.sT,e)},Mb)),L_=function(e){return a(rr,e,w_)},gG=Vh,_G=Fh,zb=A(function(e,r,n){return e<=0?n:v(zb,e>>1,Q(r,r),e&1?Q(n,r):n)}),Cc=s(function(e,r){return v(zb,e,r,"")}),Bb=(function(){var e=Mb;if(e.b){var r=e.a,n=e.b;return y(r,n)}else return y(a(h,"Fallback",a(Cc,108,"0")),S)})(),fe=s(function(e,r){if(r.$)return e;var n=r.a;return n}),J0=function(e){return a(fe,Bb.a,L_(e))},Vb=(function(){var e=5;return{g8:e,c7:a(Ui,e,J0("Argonaut")),dh:a(Ui,e,J0("Erkal Light")),dR:!1}})(),A_={hR:!0,gf:!0,dJ:!0,gg:!0,gh:!1,dK:!0,eT:!0,hS:!0,cj:!0,hT:!0,hV:kb,bL:!1,e:Vb},T_=A_,M_=T_,Zn=hh,Er=_9,Ri=function(e){return e*Er/180},X0={$:0},Eb={ex:!1,jr:!1,eD:!1,eX:!1,fj:!1,fm:!1,fn:!1,fB:!1},Hb=function(e){return{fV:e.fV,ez:Eb,c9:X0,co:{pV:0,hz:2,eG:.5,hN:{pA:0,pB:.4,L:0}}}},D_={$:0},Jn=D_,z_=s(function(e,r){return H({d1:Hb({fV:!0}),oS:Ri(150)/Er},Jn,S)}),B_=s(function(e,r){return H({d1:Hb({fV:!0}),oS:.5},Jn,S)}),Ib=function(e){return{aA:e.aA,bE:e.bE,b_:e.b_,aH:e.aH,fo:e.fo}},qi=fh,Ze=Ch,Xn=Ph,ae=ih,Y0=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},br=xa("div"),bt=function(e){var r=e;return r.dR?r.dh:r.c7},Ee=s(function(e,r){return e(bt(r))}),Fb=A(function(e,r,n){return{$:0,a:e,b:r,c:n}}),V_=Fb,jn=V_,mr=s(function(e,r){return E(r,{aQ:e})}),Tf=function(e){return{$:4,a:e}},Mf=y0,Ub=function(e){return Tf(Mf(e))},$e=Ub,Z=xd,pe=function(e){return"hsla("+(Z(e.aT*360)+(", "+(Z(e.a1*100)+("%, "+(Z(e.C*100)+("%, "+(Z(e.aQ)+")")))))))},So={aQ:1,aT:0,C:1,a1:0},Rb=function(e){var r=pe(So),n=pe(a(mr,.25,a(Ee,function(i){return i.bt},e))),t=pe(a(Ee,function(i){return i.jg},e)),o=pe(a(Ee,function(i){return i.i0},e)),c=pe(a(Ee,function(i){return i.bt},e));return v(jn,"style",S,f([$e(`
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
`))))))))))))))))))))))))))))]))},qb=l7,I=qb,Df=function(e){return{$:0,a:e}},E_=Y(function(e,r,n,t){return{eo:t,eU:n,oF:r,kV:e}}),Gb=3432918353,Wb=461845907,yG=Ih,CG=Uh,xo=s(function(e,r){return(r&65535)*e+(((r>>>16)*e&65535)<<16)}),PG=Eh,Q0=s(function(e,r){return r<<e|r>>>32-e}),SG=Hh,H_=function(e){var r=e.eU?e.oF^a(xo,Wb,a(Q0,15,a(xo,Gb,e.eU))):e.oF,n=r^e.eo,t=a(xo,2246822507,n^n>>>16),o=a(xo,3266489909,t^t>>>13);return(o^o>>>16)>>>0},I_=R9,F_=s(function(e,r){return a(xo,5,a(Q0,13,e^a(xo,Wb,a(Q0,15,a(xo,Gb,r)))))+3864292196}),U_=s(function(e,r){var n=r.eU|(255&st(e))<<r.kV,t=r.kV;return t===24?{eo:r.eo+1,eU:0,oF:a(F_,r.oF,n),kV:0}:{eo:r.eo+1,eU:n,oF:r.oF,kV:r.kV+8}}),R_=s(function(e,r){return H_(v(I_,U_,x(E_,0,e,0,0),r))}),q_=15739,Gi=nh,xG=function(e){return-e},ja=g9,Ob=function(e){e:for(;;)switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";case 15:return"f";default:var r=e;e=r;continue e}},Nb=s(function(e,r){e:for(;;){if(r<16)return a(M,Ob(r),e);var n=a(M,Ob(a(ja,16,r)),e),t=r/16|0;e=n,r=t;continue e}}),G_=function(e){return Gi(e<0?a(M,"-",a(Nb,S,-e)):a(Nb,S,e))},Zb=function(e){return a(Af,"_",G_(a(R_,q_,e)))},un=s(function(e,r){var n=e.b,t=e.c;if(n){var o=a(rr,t,r);return o.$?v(Tr,t,Zb(t),r):r}else return r}),K0=s(function(e,r){return a(C0,p7(e),m7(r))}),Wr=f0,Qt=s(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(rr,o,e);if(c.$)return a(K0,"className",Wr("_unstyled"));var i=c.a;return a(K0,"className",Wr(i))}else return n}),kn=s(function(e,r){return a(yf,Ud(e),Rd(r))}),zf=s(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(rr,o,e);if(c.$)return a(kn,"class","_unstyled");var i=c.a;return a(kn,"class",i)}else return n}),Bf=function(e){return u7(Cf(e))},ev=s(function(e,r){return a(Hd,e,Cf(r))}),jo=function(e){return xa(Cf(e))},rv=s(function(e,r){return a(Ed,e,Cf(r))}),Pc=s(function(e,r){var n=e.a,t=e.b,o=r.a,c=r.b;switch(t.$){case 4:var C=t.a;return y(a(M,y(n,C),o),c);case 0:var d=t.a,b=t.b,g=t.c,_=v(me,un,c,b),i=v(me,Sc,y(S,_),g),m=i.a,P=i.b,C=v(jo,d,a(O,Qt(P),b),Te(m));return y(a(M,y(n,C),o),P);case 1:var l=t.a,d=t.b,b=t.c,g=t.d,_=v(me,un,c,b),u=v(me,Sc,y(S,_),g),m=u.a,P=u.b,C=x(rv,l,d,a(O,Qt(P),b),Te(m));return y(a(M,y(n,C),o),P);case 2:var d=t.a,b=t.b,g=t.c,_=v(me,un,c,b),$=v(me,Pc,y(S,_),g),m=$.a,P=$.b,C=v(Bf,d,a(O,Qt(P),b),Te(m));return y(a(M,y(n,C),o),P);default:var l=t.a,d=t.b,b=t.c,g=t.d,_=v(me,un,c,b),p=v(me,Pc,y(S,_),g),m=p.a,P=p.b,C=x(ev,l,d,a(O,Qt(P),b),Te(m));return y(a(M,y(n,C),o),P)}}),Sc=s(function(e,r){var n=r.a,t=r.b;switch(e.$){case 4:var m=e.a;return y(a(M,m,n),t);case 0:var $=e.a,l=e.b,d=e.c,b=v(me,un,t,l),o=v(me,Sc,y(S,b),d),_=o.a,p=o.b,m=v(jo,$,a(O,Qt(p),l),Te(_));return y(a(M,m,n),p);case 1:var u=e.a,$=e.b,l=e.c,d=e.d,b=v(me,un,t,l),c=v(me,Sc,y(S,b),d),_=c.a,p=c.b,m=x(rv,u,$,a(O,zf(p),l),Te(_));return y(a(M,m,n),p);case 2:var $=e.a,l=e.b,d=e.c,b=v(me,un,t,l),i=v(me,Pc,y(S,b),d),_=i.a,p=i.b,m=v(Bf,$,a(O,Qt(p),l),Te(_));return y(a(M,m,n),p);default:var u=e.a,$=e.b,l=e.c,d=e.d,b=v(me,un,t,l),g=v(me,Pc,y(S,b),d),_=g.a,p=g.b,m=x(ev,u,$,a(O,zf(p),l),Te(_));return y(a(M,m,n),p)}}),Wi=function(e){return f([e])},ko=A(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,u=e,$=v(e,t,o,v(ko,e,r,c)),l=i;e=u,r=$,n=l;continue e}}),av="\x07",xc=A(function(e,r,n){return a(Lr,r,a(gn,e,n))}),W_=A(function(e,r,n){return n+(`
`+v(xc,av,r,e))}),O_=function(e){return v(ko,W_,"",e)},Jb=s(function(e,r){return v(ko,A(function(n,t,o){return o+(`
`+v(xc,"."+av,"#"+(e+("."+t)),n))}),"",r)}),nv=s(function(e,r){var n=(function(){if(r.$){var o=r.a,c=r.b,i=r.c;return a(Jb,o,c)+(`
`+a(Jb,o+" ",i))}else{var t=r.a;return O_(t)}})();return v(jo,"span",f([a(kn,"style","display: none;"),a(kn,"class","elm-css-style-wrapper")]),f([v(jo,"style",(function(){if(e.$)return S;var t=e.a;return f([a(kn,"nonce",t)])})(),Wi(Mf(n)))]))}),N_=Y(function(e,r,n,t){var o=v(me,un,Ie,n),c=v(me,Sc,y(S,o),t),i=c.a,u=c.b,$=a(nv,e,Df(u)),l=a(O,Qt(u),n);return v(jo,r,l,a(M,$,Te(i)))}),Z_=s(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b;if(oe(e,t))return!0;var c=e,i=o;e=c,r=i;continue e}else return!1}),J_=s(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b,c="_"+t;if(a(Z_,c,o)){var i=c,u=o;e=i,r=u;continue e}else return c}else return e}),Xb=A(function(e,r,n){var t=a(J_,"_",n),o=a(nv,e,r);return y(t,o)}),X_=Y(function(e,r,n,t){var o=v(me,un,Ie,n),c=v(me,Pc,y(S,o),t),i=c.a,u=c.b,$=v(Xb,e,Df(u),i),l=a(O,Qt(u),n);return v(Bf,r,l,a(M,$,Te(i)))}),Y_=Ae(function(e,r,n,t,o){var c=v(me,un,Ie,t),i=v(me,Pc,y(S,c),o),u=i.a,$=i.b,l=v(Xb,e,Df($),u),d=a(O,zf($),t);return x(ev,r,n,d,a(M,l,Te(u)))}),Q_=Ae(function(e,r,n,t,o){var c=v(me,un,Ie,t),i=v(me,Sc,y(S,c),o),u=i.a,$=i.b,l=a(nv,e,Df($)),d=a(O,zf($),t);return x(rv,r,n,d,a(M,l,Te(u)))}),Yb=function(e){switch(e.$){case 4:var r=e.a;return r;case 0:var t=e.a,o=e.b,c=e.c;return x(N_,D,t,o,c);case 1:var n=e.a,t=e.b,o=e.c,c=e.d;return U(Q_,D,n,t,o,c);case 2:var t=e.a,o=e.b,c=e.c;return x(X_,D,t,o,c);default:var n=e.a,t=e.b,o=e.c,c=e.d;return U(Y_,D,n,t,o,c)}},Yn=Yb,K_=function(e){return a(br,f([a(I,"min-height","100dvh"),a(I,"background",pe(a(Ee,function(r){return r.D},e.e))),a(I,"color",pe(a(Ee,function(r){return r.le},e.e))),a(I,"font-family","system-ui, sans-serif")]),a(M,Yn(Rb(e.e)),a(O,function(r){var n=r.b;return n},e.cT)))},hr=dh,jc=ph,Qb=function(e){return{$:1,a:e}},ey=function(e){return{$:2,a:e}},Kb=ey,Kt=Td,ry={$:1},ba=Ad,ie=ba(S),ep=s(function(e,r){if(e.$){var n=e.a;return y(E(r,{ez:n(r.ez)}),ie)}else return r.fV?y(E(r,{c9:ry}),ie):y(r,ie)}),ay=Y(function(e,r,n,t){if(n.$){var c=n.a,i=a(ep,c,t.d1),u=i.a,$=i.b;return H(E(t,{d1:u}),Kb(a(Kt,Qb,$)),S)}else{var o=n.a;return H(E(t,{oS:v(dr,0,1,o)}),Jn,S)}}),rp=function(e){return{$:1,a:e}},ny=Y(function(e,r,n,t){if(n.$){var c=n.a,i=a(ep,c,t.d1),u=i.a,$=i.b;return H(E(t,{d1:u}),Kb(a(Kt,rp,$)),S)}else{var o=n.a;return H(E(t,{oS:v(dr,0,1,o)}),Jn,S)}}),ty=Y(function(e,r,n,t){var o=y(n,t);e:for(;;)if(o.a.$)if(o.b.$===1){var l=o.a.a,d=o.b.a,b=x(ny,e,r,l,d),g=b.a;return H0(g)}else break e;else{if(o.b.$)break e;var c=o.a.a,i=o.b.a,u=x(ay,e,r,c,i),$=u.a;return E0($)}return t}),oy=function(e){return{$:2,a:e}},ap=s(function(e,r){var n=r.c9;switch(n.$){case 0:return r;case 1:return e.lm?E(r,{c9:X0}):E(r,{c9:oy({oT:r.co.pV,oU:r.co.eG,oW:e.pA,oX:e.pB})});default:var t=n.a;if(e.lm)return E(r,{c9:X0});var o=.005,c=r.co,i=.05,u=Ri(80),$=e.pB-t.oX,l=e.pA-t.oW;return E(r,{co:E(c,{pV:t.oT-l*o,eG:v(dr,i,u,t.oU-$*o)})})}}),cy=A(function(e,r,n){return H(E(n,{d1:a(ap,{lm:e.tw.lm,pA:e.tw.pA,pB:e.tw.pB},n.d1)}),Jn,S)}),iy=A(function(e,r,n){return H(E(n,{d1:a(ap,{lm:e.tw.lm,pA:e.tw.pA,pB:e.tw.pB},n.d1)}),Jn,S)}),uy=A(function(e,r,n){if(n.$){var i=n.a,u=v(iy,e,r,i),$=u.a;return H0($)}else{var t=n.a,o=v(cy,e,r,t),c=o.a;return E0(c)}}),wo=yh,fy={ku:S,pd:S},$y=function(e){return{$:1,a:e}},ly=function(e){return{$:0,a:e}},vy=te,jG=0,kG=1,np=Br(function(e,r,n,t,o,c){return{mz:c,mK:r,kH:t,oj:n,oq:e,or:o}}),tp=Y9,Vf=eh,Lo=function(e){return e===""},Oi=s(function(e,r){return e<1?"":v(tn,0,e,r)}),Ni=rh,op=Ae(function(e,r,n,t,o){if(Lo(o)||a(tp,"@",o))return D;var c=a(Vf,":",o);if(c.b){if(c.b.b)return D;var i=c.a,u=Ni(a(on,i+1,o));if(u.$===1)return D;var $=u;return V(wr(np,e,a(Oi,i,o),$,r,n,t))}else return V(wr(np,e,o,D,r,n,t))}),cp=Y(function(e,r,n,t){if(Lo(t))return D;var o=a(Vf,"/",t);if(o.b){var c=o.a;return U(op,e,a(on,c,t),r,n,a(Oi,c,t))}else return U(op,e,"/",r,n,t)}),ip=A(function(e,r,n){if(Lo(n))return D;var t=a(Vf,"?",n);if(t.b){var o=t.a;return x(cp,e,V(a(on,o+1,n)),r,a(Oi,o,n))}else return x(cp,e,D,r,n)}),up=s(function(e,r){if(Lo(r))return D;var n=a(Vf,"#",r);if(n.b){var t=n.a;return v(ip,e,V(a(on,t+1,r)),a(Oi,t,r))}else return v(ip,e,D,r)}),fp=function(e){return a(On,"http://",e)?a(up,0,a(on,7,e)):a(On,"https://",e)?a(up,1,a(on,8,e)):D},kc=function(e){e:for(;;){var r=e,n=r;e=n;continue e}},wG=te,ka=Qa,sy=ka(0),pa=l0,Zi=s(function(e,r){return a(pa,function(n){return ka(e(n))},r)}),dy=A(function(e,r,n){return a(pa,function(t){return a(pa,function(o){return ka(a(e,t,o))},n)},r)}),Ji=function(e){return v(cn,dy(M),ka(S),e)},Ef=Qh,by=s(function(e,r){var n=r;return s0(a(pa,Ef(e),n))}),py=A(function(e,r,n){return a(Zi,function(t){return 0},Ji(a(O,by(e),r)))}),my=A(function(e,r,n){return ka(0)}),hy=s(function(e,r){var n=r;return a(Zi,e,n)});na.Task=m0(sy,py,my,hy);var $p=Di("Task"),Xi=s(function(e,r){return $p(a(Zi,e,r))}),gy=E7,Hf=function(e){return{$:9,a:e}},oa=s(function(e,r){if(r.$)return D;var n=r.a;return e(n)}),_y=function(e){return{$:3,a:e}},If=A(function(e,r,n){return v(me,s(function(t,o){var c=o.a,i=o.b,u=a(e.fq,t,c),$=u.a,l=u.b;return y($,ba(f([i,a(Kt,_y,l)])))}),y(n,ie),r)}),yy=function(e){switch(e){case"true":return V(!0);case"false":return V(!1);default:return D}},Cy=function(e){return{$:1,a:e}},Py={$:0},We=A(function(e,r,n){return r(e(n))}),Sy=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},lp=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,u=o.c,$=o.d,l=o.e,d=e.e,b=d.a,g=d.b,_=d.c,p=d.d,m=p.a,P=p.b,C=p.c,j=p.d,L=p.e,T=d.e;return U(Ve,0,P,C,U(Ve,1,n,t,U(Ve,0,i,u,$,l),j),U(Ve,1,g,_,L,T))}else{var r=e.a,n=e.b,t=e.c,F=e.d,c=F.a,i=F.b,u=F.c,$=F.d,l=F.e,q=e.e,b=q.a,g=q.b,_=q.c,p=q.d,T=q.e;return U(Ve,1,n,t,U(Ve,0,i,u,$,l),U(Ve,0,g,_,p,T))}else return e},vp=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,u=o.c,$=o.d,l=$.a,d=$.b,b=$.c,g=$.d,_=$.e,p=o.e,m=e.e,P=m.a,C=m.b,j=m.c,L=m.d,T=m.e;return U(Ve,0,i,u,U(Ve,1,d,b,g,_),U(Ve,1,n,t,p,U(Ve,0,C,j,L,T)))}else{var r=e.a,n=e.b,t=e.c,F=e.d,c=F.a,i=F.b,u=F.c,q=F.d,p=F.e,R=e.e,P=R.a,C=R.b,j=R.c,L=R.d,T=R.e;return U(Ve,1,n,t,U(Ve,0,i,u,q,p),U(Ve,0,C,j,L,T))}else return e},xy=Gt(function(e,r,n,t,o,c,i){if(c.$===-1&&!c.a){var u=c.a,$=c.b,l=c.c,d=c.d,b=c.e;return U(Ve,n,$,l,d,U(Ve,0,t,o,b,i))}else{e:for(;;)if(i.$===-1&&i.a===1)if(i.d.$===-1)if(i.d.a===1){var g=i.a,_=i.d,p=_.a;return vp(r)}else break e;else{var m=i.a,P=i.d;return vp(r)}else break e;return r}}),Ff=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.d,u=e.e;if(c===1)if(i.$===-1&&!i.a){var $=i.a;return U(Ve,r,n,t,Ff(o),u)}else{var l=lp(e);if(l.$===-1){var d=l.a,b=l.b,g=l.c,_=l.d,p=l.e;return U(yc,d,b,g,Ff(_),p)}else return Nn}else return U(Ve,r,n,t,Ff(o),u)}else return Nn},Yi=s(function(e,r){if(r.$===-2)return Nn;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(ce(e,t)<0)if(c.$===-1&&c.a===1){var u=c.a,$=c.d;if($.$===-1&&!$.a){var l=$.a;return U(Ve,n,t,o,a(Yi,e,c),i)}else{var d=lp(r);if(d.$===-1){var b=d.a,g=d.b,_=d.c,p=d.d,m=d.e;return U(yc,b,g,_,a(Yi,e,p),m)}else return Nn}}else return U(Ve,n,t,o,a(Yi,e,c),i);else return a(jy,e,ra(xy,e,r,n,t,o,c,i))}),jy=s(function(e,r){if(r.$===-1){var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(oe(e,t)){var u=Sy(i);if(u.$===-1){var $=u.b,l=u.c;return U(yc,n,$,l,c,Ff(i))}else return Nn}else return U(yc,n,t,o,c,a(Yi,e,i))}else return Nn}),sp=s(function(e,r){var n=a(Yi,e,r);if(n.$===-1&&!n.a){var t=n.a,o=n.b,c=n.c,i=n.d,u=n.e;return U(Ve,1,o,c,i,u)}else{var $=n;return $}}),eo=A(function(e,r,n){var t=r(a(rr,e,n));if(t.$)return a(sp,e,n);var o=t.a;return v(Tr,e,o,n)}),ky=function(e){return a(eo,e,a(We,fe(0),a(We,yb(1),V)))},wy=s(function(e,r){return v(ko,A(function(n,t,o){return a(e,n,t)?v(Tr,n,t,o):o}),Ie,r)}),Ly=function(e){if(e.b){var r=kf(a(wy,s(function(n,t){return t>1}),v(me,s(function(n,t){return a(ky,n.bE,t)}),Ie,e)));return r.b?V(Cy(r)):D}else return V(Py)},Ay=function(e){return e?"true":"false"},tv=s(function(e,r){return r.b?v(cn,M,r,e):e}),wn=function(e){return v(cn,tv,S,e)},fn=s(function(e,r){return wn(a(O,e,r))}),Ao=4294967295>>>32-Cn,LG=t9,Qi=G8,Ty=A(function(e,r,n){e:for(;;){var t=Ao&r>>>e,o=a(Qi,t,n);if(o.$){var l=o.a;return a(Qi,Ao&r,l)}else{var c=o.a,i=e-Cn,u=r,$=c;e=i,r=u,n=$;continue e}}}),dp=function(e){return e>>>5<<5},wa=s(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d;return e<0||ce(e,n)>-1?D:ce(e,dp(n))>-1?V(a(Qi,Ao&e,c)):V(v(Ty,t,e,o))}),bp=function(e){var r=e;return a(fe,r.oF,a(wa,a(ja,r.cJ,r.dq+r.aR),r.eS))},To=function(e){if(e.$){var n=e.a;return a(fe,n.oF,a(wa,n.aR,n.eS))}else{var r=e.a;return bp(r)}},Uf=function(e){var r=e.b;return r},wc=function(e){var r=e.b;return To(r).b},Lc=function(e){return e.nO},Ln=function(e){return e.e},My=function(e){return e.Q},pp=function(e){var r=e;return a(O,function(n){var t=n.a,o=n.b;return y(r.r1(t)+"Off",Z(o.pA)+(","+Z(o.pB)))},r.cV)},Dy=function(e){return pp(e.f)},zy=function(e){return e?"landscape":"portrait"},By=function(e){var r=e;return r.cL.sT+("|"+zy(r.dY))},ro=s(function(e,r){return v(me,zh(e),Th(0),r)}),mp=function(e){return a(Cb,0,a(ro,function(r){var n=r.a,t=r.b;return a(ro,Wr,f([n,t]))},e))},Rf=function(e){return"play:"+e},hp=function(e){switch(e){case 0:return"hudConfigurations";case 1:return"hudInputs";case 2:return"hudFpsMeter";case 3:return"hudProfiler";case 4:return"hudTape";case 5:return"hudPalette";case 6:return"hudCommandPalette";default:return"hudDevice"}},ov=function(e){var r=e;return r.aK},AG=0,TG=7,MG=2,DG=1,zG=5,gr=s(function(e,r){return v(cn,s(function(n,t){return e(n)?a(M,n,t):t}),S,r)}),qf=s(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var o=e,c=t;e=o,r=c;continue e}else return!1}),Ki=s(function(e,r){return a(qf,function(n){return oe(n,e)},r)}),gp=function(e){return a(gr,function(r){return a(Ki,r,e)},f([0,1,2,5,7]))},Vy=function(e){return a(Lr,",",a(O,hp,gp(ov(e.f))))},Qn=s(function(e,r){return"play:"+(r+(":"+e))}),Ey=function(e){return e.bL},_p=function(e){var r=e;return r.g8},Hy=function(e){var r=e;return r.c7.kv.sT},Gf=function(e){var r=e;return r.dR},Iy=function(e){var r=e;return r.dh.kv.sT},yp=function(e){switch(e){case 0:return"Red";case 1:return"Green";case 2:return"Yellow";case 3:return"Blue";case 4:return"Magenta";default:return"Cyan"}},Fy=function(e){return a(Lr,"|",f([Hy(e),Iy(e),Gf(e)?"1":"0",yp(_p(e))]))},Cp=function(e){switch(e){case 0:return"User";case 1:return"Author";default:return"Developer"}},Pp=s(function(e,r){var n=wc(r.uA),t=a(fn,function(o){var c=a(rr,o.bE,n.cT);if(c.$)return S;var i=c.a;return pp(i.ip)},e.cT);return f([y(Rf("hud-panel-layout"),mp(Dy(r.bD))),y(a(Qn,r.ti,"panel-layout"),mp(t)),y(Rf("mode"),Cp(Lc(r.bD))),y(a(Qn,r.ti,"theme"),Fy(Ln(r.bD))),y(a(Qn,r.ti,"device"),By(My(r.bD))),y(a(Qn,r.ti,"hud-open-panels"),Vy(r.bD)),y(a(Qn,r.ti,"tape-record-from-start"),Ay(Ey(r.bD)))])}),BG=te,VG=1,EG=0,HG=2,cv=f([{aC:0,sT:"iPhone SE",X:{jM:667,lq:375}},{aC:0,sT:"iPhone 12 Pro",X:{jM:844,lq:390}},{aC:0,sT:"iPhone 14 Pro Max",X:{jM:932,lq:430}},{aC:0,sT:"Pixel 7",X:{jM:915,lq:412}},{aC:0,sT:"Samsung Galaxy S20 Ultra",X:{jM:915,lq:412}},{aC:0,sT:"Samsung Galaxy S8+",X:{jM:740,lq:360}},{aC:1,sT:"Galaxy Z Fold 5",X:{jM:882,lq:344}},{aC:1,sT:"Surface Duo",X:{jM:720,lq:540}},{aC:2,sT:"iPad Mini",X:{jM:1024,lq:768}},{aC:2,sT:"iPad Air",X:{jM:1180,lq:820}},{aC:2,sT:"iPad Pro",X:{jM:1366,lq:1024}},{aC:2,sT:"Surface Pro 7",X:{jM:1368,lq:912}}]),Mr=function(e){if(e.b){var r=e.a,n=e.b;return V(r)}else return D},Uy=function(e){return Mr(a(gr,function(r){return oe(r.sT,e)},cv))},IG=te,FG=te,Sp=14,Ry=8,qy=function(e){return e===" "||e==="	"||e==="/"||e==="."||e===":"||e===";"||e===","||e==="|"||e==="\\"||e==="_"||e==="-"||e==="*"},Gy=function(e){var r=st(e);return r>=97&&r<=122},Wy=function(e){var r=st(e);return r>=65&&r<=90},Oy=A(function(e,r,n){e:for(;;)if(r.b){var t=r.a,o=r.b,c=qy(e)?Sp:Gy(e)&&Wy(t)?Ry:0,i=t,u=o,$=a(M,c,n);e=i,r=u,n=$;continue e}else return Te(n)}),Ny=function(e){if(e.b){var r=e.a,n=e.b;return a(M,Sp,v(Oy,r,n,S))}else return S},iv=ch,Zy=function(e){var r=_c(e),n=a(O,iv,r);return{lQ:Ny(r),j2:n}},Wf=s(function(e,r){return{aS:r,eZ:D,aV:!1,it:a(O,function(n){return y(n,Zy(e(n)))},r),b1:0,iG:"",av:0}}),uv=A(function(e,r,n){if(r.$===1)return D;var t=r.a;if(n.$===1)return D;var o=n.a;return V(a(e,t,o))}),UG=1,RG=0,Jy=function(e){switch(e){case"portrait":return V(0);case"landscape":return V(1);default:return D}},Xy=A(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b;if(r(t))return V(e);var c=e+1,i=r,u=o;e=c,r=i,n=u;continue e}else return D}),Of=Xy(0),Nf=function(e){return Of(en(e))},eu=s(function(e,r){var n=r;return E(n,{eZ:e,av:a(fe,n.av,a(oa,function(t){return a(Nf,t,n.aS)},e))})}),Yy=function(e){var r=a(gn,"|",e);if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a;return v(uv,s(function(c,i){return{cL:c,dY:i,bj:a(eu,V(c),a(Wf,function(u){return u.sT},cv))}}),Uy(n),Jy(o))}else return D},Qy=wh,Mo=s(function(e,r){return y(e,r)}),ke=sh,xp=function(e){return a(Tb,S,a(Qy,hr(v(Xn,Mo,a(Zn,0,ke),a(Zn,1,ke))),e))},qG=te,Zf=Ie,jp=s(function(e,r){var n=r;return v(Tr,e,0,n)}),Jf=s(function(e,r){var n=a(rr,e,r);return!n.$}),kp=s(function(e,r){var n=r;return a(Jf,e,n)}),Ky=function(e){return Te(v(me,s(function(r,n){var t=n.a,o=n.b;return a(kp,r,t)?y(t,o):y(a(jp,r,t),a(M,r,o))}),y(Zf,S),e).b)},eC=function(e){return{$:0,a:e}},rC=3600,aC=eC(rC),GG=1,WG=2,nC=function(e){switch(e){case"User":return V(0);case"Author":return V(1);case"Developer":return V(2);default:return D}},fv=function(e){return{$:4,a:e}},wp=function(e){return{$:3,a:e}},Lp=s(function(e,r){return{$:0,a:e,b:r}}),Ap=s(function(e,r){return{$:2,a:e,b:r}}),Tp=function(e){return{$:5,a:e}},Mp=function(e){return{$:1,a:e}},OG=te,pt=s(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){var n=r.a,t=r.b,o=e-1,c=t;e=o,r=c;continue e}else return r}}),tC=A(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,o=r.b,c=e-1,i=o,u=a(M,t,n);e=c,r=i,n=u;continue e}else return n}}),oC=s(function(e,r){return Te(v(tC,e,r,S))}),Dp=A(function(e,r,n){if(r<=0)return S;var t=y(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,j=o.a,c=o.b,i=c.a;return f([j,i]);case 3:if(t.b.b.b.b){var u=t.b,j=u.a,$=u.b,i=$.a,l=$.b,d=l.a;return f([j,i,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var b=t.b,j=b.a,g=b.b,i=g.a,_=g.b,d=_.a,p=_.b,m=p.a,P=p.b;return e>1e3?a(M,j,a(M,i,a(M,d,a(M,m,a(oC,r-4,P))))):a(M,j,a(M,i,a(M,d,a(M,m,v(Dp,e+1,r-4,P)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,j=C.a;return f([j])}),ao=s(function(e,r){return v(Dp,0,e,r)}),Xf=function(e){var r=e;return Q(Te(r.o),a(M,r.fZ,r.q))},Yf=s(function(e,r){var n=r,t=Xf(n),o=a(ja,Ar(t),e),c=a(pt,o,t);if(c.b){var i=c.a,u=c.b;return{q:u,o:Te(a(ao,o,t)),fZ:i}}else return n}),he=s(function(e,r){if(r.$)return D;var n=r.a;return V(e(n))}),no=ah,cC=s(function(e,r){var n=s(function(_,p){var m=_.a,P=_.b;return ce(p,m)>-1&&ce(p,P)<1});switch(e.$){case 0:var t=e.a;return a(oa,function(_){return a(n,t,_)?V(a(Lp,t,_)):D},no(r));case 2:var t=e.a;return a(oa,function(_){return a(n,t,_)?V(a(Ap,t,_)):D},Ni(r));case 4:switch(r){case"true":return V(fv(!0));case"false":return V(fv(!1));default:return D}case 1:return V(Mp(r));case 3:var o=a(O,no,a(gn,",",r));if(o.b&&!o.a.$&&o.b.b&&!o.b.a.$&&o.b.b.b&&!o.b.b.a.$&&o.b.b.b.b&&!o.b.b.b.a.$&&!o.b.b.b.b.b){var c=o.a.a,i=o.b,u=i.a.a,$=i.b,l=$.a.a,d=$.b,b=d.a.a;return V(wp(x(W,c,u,l,b)))}else return D;default:var g=e.a;return a(he,function(_){return Tp(a(Yf,_,g))},a(Of,en(r),Xf(g)))}}),zp=s(function(e,r){var n=xn(e);return a(O,function(t){return E(t,{a9:a(O,function(o){var c=o.a,i=o.b;return y(c,(function(){var u=a(rr,c,n);if(u.$)return i;var $=u.a;return a(fe,i,a(cC,i,$))})())},t.a9)})},r)}),to=s(function(e,r){var n=a(gr,function(c){var i=c.a;return oe(i,e)},r);if(n.b){var t=n.a,o=t.b;return V(o)}else return D}),NG=te,iC=A(function(e,r,n){var t=e(r);if(t.$)return n;var o=t.a;return a(M,o,n)}),Hr=s(function(e,r){return v(cn,iC(e),S,r)}),Bp=s(function(e,r){return e<1?r:v(tn,0,-e,r)}),$v=K9,uC=s(function(e,r){return a($v,"Off",r)?e(a(Bp,nn("Off"),r)):D}),fC=function(e){var r=a(gn,",",e);if(r.b&&r.b.b&&!r.b.b.b){var n=r.a,t=r.b,o=t.a;return v(uv,s(function(c,i){return{pA:c,pB:i}}),no(n),no(o))}else return D},Vp=s(function(e,r){var n=r,t=a(Hr,function(o){var c=o.a,i=o.b;return a(oa,function(u){return a(he,Mo(u),fC(i))},a(uC,n.r0,c))},e);return E(n,{cV:t})}),$C=s(function(e,r){return E(r,{f:a(Vp,e,r.f)})}),ZG=6,JG=3,XG=4,Ep=function(e){switch(e){case"hudConfigurations":return V(0);case"hudInputs":return V(1);case"hudFpsMeter":return V(2);case"hudProfiler":return V(3);case"hudTape":return V(4);case"hudPalette":return V(5);case"hudCommandPalette":return V(6);case"hudDevice":return V(7);default:return D}},lC=function(e){return{$:1,a:e}},lv=lC,oo=s(function(e,r){var n=r;switch(e.$){case 0:var t=e.a;return E(n,{aK:a(Ki,t,n.aK)?a(gr,Lf(t),n.aK):a(M,t,n.aK)});case 1:var t=e.a;return E(n,{aK:a(M,t,a(gr,Lf(t),n.aK))});case 2:var t=e.a;return E(n,{aK:a(gr,Lf(t),n.aK)});default:var t=e.a;return E(n,{cV:a(gr,function(o){var c=o.a;return!oe(c,t)},n.cV)})}}),vC=s(function(e,r){var n=gp(a(Hr,Ep,a(gn,",",e)));return E(r,{f:v(me,a(We,lv,oo),r.f,n)})}),YG=te,vv={F:Ie},QG=3,KG=4,eW=2,rW=1,aW=5,nW=0,Hp=function(e){switch(e){case"windows":return 0;case"mac":return 1;case"linux":return 2;case"android":return 3;case"ios":return 4;default:return 5}},sC=s(function(e,r){return{c2:{pL:!1,rv:D},aA:vv,dC:S,hl:0,cc:e,ey:r.ey,eA:r.eA,eB:r.eB,hB:r.hB,mv:!0,eO:r.eO,rw:r.rw,gj:"play",hX:r.hX,nD:Ie,nO:kb,tg:Zf,kt:Hp(r.kt),gz:{l6:0,l7:0,bF:0,bS:0,ps:0,pt:0},tw:r.tw,fp:r.fp,$7:r.$7,fs:r.fs,iH:r.iH,eb:r.eb,pu:!0,fJ:r.fJ,pD:!1}}),Ip={aC:0,sT:"iPhone 12 Pro",X:{jM:844,lq:390}},dC={cL:Ip,dY:0,bj:a(eu,V(Ip),a(Wf,function(e){return e.sT},cv))},bC=function(e){return e.iJ+(": "+e.jV)},tW=te,oW=te,Qf={bC:S,bK:S,bm:0,bn:0},pC=Qf,mC={kg:0,gG:pC},Fp={$:0},hC=Fp,sv=function(e){return{eF:D,r0:e.r0,r1:e.r1,cV:S,aK:S}},cW=te,iW=3,uW=1,fW=4,$W=0,lW=2,Up=y(0,f([1,2,3,4,5])),gC=function(e){var r=e.a,n=e.b;return{q:n,o:S,fZ:r}},Do=function(e){var r=e;return r.fZ},Rp=function(e){var r=e,n=r.q;if(n.b){var t=n.a,o=n.b;return{q:o,o:a(M,r.fZ,r.o),fZ:t}}else return r},qp=function(e){return a(Yf,0,e)},Ye=function(e){return!e.b},_C=function(e){var r=e;return Ye(r.q)},Gp=s(function(e,r){var n=function(t){e:for(;;){if(oe(Do(t),e))return V(t);if(_C(t))return D;var o=Rp(t);t=o;continue e}};return n(qp(r))}),yC=function(e){var r=gC(Up);return a(fe,r,a(Gp,e,r))},dv=Bb,bv=function(e){var r=bt(e).kv.sT,n=dv,t=n.a,o=n.b;return Mr(a(gr,function(c){return oe(c.sT,r)},a(M,t,o)))},CC=function(e){var r=dv,n=r.a,t=r.b;return{c1:yC(_p(e)),bj:a(eu,bv(e),a(Wf,function(o){return o.sT},a(M,n,t)))}},ru={$:0},vW=te,PC=ru,SC=function(e){var r=e.c2,n=e.r8,t=e.r7,o=e.hV,c=e.r9,i=e.gI;return{c2:{N:a(Wf,bC,r),rv:D},eq:D,Q:t,f:sv({r0:Ep,r1:hp}),de:mC,nO:o,aL:hC,bL:n,P:CC(c),e:c,c_:PC,pD:!1}},au={$:0},Ia=s(function(e,r){return{$:0,a:e,b:r}}),Ac=function(e){return{$:0,a:e}},sW=te,Wp=s(function(e,r){return a(W0,e,function(n){return r})}),Op=s(function(e,r){var n=a(Pe,1,e);return{cJ:n,ba:1,aR:0,eS:a(Wp,n,r),oF:r,dq:0}}),Np=s(function(e,r){return Ac(a(Op,e,r))}),nu=function(e){return{$:1,a:e}},Zp=function(e){return nu({aR:0,eS:a(Wp,1,e),oF:e})},xC=s(function(e,r){if(e.$)return Zp(r);var n=e.a;return a(Np,n,r)}),jC=A(function(e,r,n){return a(Ia,au,a(xC,e,y(r,n)))}),kC=s(function(e,r){return a(Ia,au,a(Np,1,y(e,r)))}),zo=s(function(e,r){return{$:1,a:e,b:r}}),wC=A(function(e,r,n){var t=n.a,o=n.b;return y(e(t),r(o))}),LC=function(e){var r=s(function(n,t){var o=n.a,c=n.b,i=t.a,u=t.b;return y(a(M,o,i),a(M,c,u))});return v(cn,r,y(S,S),e)},Jp=function(e){switch(e.$){case 0:return y(S,ie);case 1:var r=e.a;return v(wC,wn,ba,LC(a(O,Jp,r)));case 2:var n=e.a;return y(S,n);default:var t=e.a;return y(f([t]),ie)}},AC=s(function(e,r){return E(r,{a9:e(r.a9)})}),Bo=s(function(e,r){var n=r.a,t=r.b;return y(n,e(t))}),Me=function(e){return e<0?-e:e},TC=A(function(e,r,n){return a(fe,NaN,no(a(e,r,n)))}),pv=z9,MC=s(function(e,r){var n=a(qf,function(t){return t!=="0"&&t!=="."},_c(r));return Q(e&&n?"-":"",r)}),DC=oh,Xp=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Fi(n);if(t.$===1)return"01";var o=t.a;return a(Af,"0",Xp(o))}else{var c=st(r);return c>=48&&c<57?a(Af,DC(c+1),n):"0"}},Tc=w9,mv=D9,Kf=A(function(e,r,n){return Q(n,a(Cc,e-nn(n),dt(r)))}),Yp=U9,Qp=function(e){var r=a(gn,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a;return y(n,o)}else{var n=r.a;return y(n,"0")}else return y("0","0")},Vo=s(function(e,r){var n=r.a,t=r.b;return y(e(n),t)}),zC=function(e){var r=a(gn,"e",Z(Me(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a,c=a(fe,0,Ni(a(On,"+",o)?a(on,1,o):o)),i=Qp(n),u=i.a,$=i.b,l=Q(u,$),d=c<0?a(fe,"0",a(he,function(b){var g=b.a,_=b.b;return g+("."+_)},a(he,Vo(dt),Fi(Q(a(Cc,Me(c),"0"),l))))):v(Kf,c+1,"0",l);return Q(e<0?"-":"",d)}else{var n=r.a;return Q(e<0?"-":"",n)}else return""},BC=A(function(e,r,n){if(Tc(n)||mv(n))return Z(n);var t=n<0,o=Qp(zC(Me(n))),c=o.a,i=o.b,u=nn(c)+r,$=Q(a(Cc,-u+1,"0"),v(Kf,u,"0",Q(c,i))),l=nn($),d=a(Pe,1,u),b=a(e,t,v(tn,d,l,$)),g=v(tn,0,d,$),_=b?Yp(a(fe,"1",a(he,Xp,Fi(Yp(g))))):g,p=nn(_),m=_==="0"?_:r<=0?Q(_,a(Cc,Me(r),"0")):ce(r,nn(i))<0?v(tn,0,p-r,_)+("."+v(tn,p-r,p,_)):Q(c+".",v(Kf,r,"0",i));return a(MC,t,m)}),Mc=BC(s(function(e,r){var n=Fi(r);if(n.$===1)return!1;if(n.a.a==="5")if(n.a.b===""){var t=n.a;return!e}else{var o=n.a;return!0}else{var c=n.a,i=c.a;return(function(u){return u>53&&e||u>=53&&!e})(st(i))}})),VC=TC(Mc),EC=A(function(e,r,n){var t=a(wf,10,Me(r-e)),o=t<0?3:t<1?2:t<2?1:0;return a(VC,o,n)}),Dc=A(function(e,r,n){return a(O,function(t){return e(t)?r(t):t},n)}),HC=function(e){switch(e.$){case 2:var n=e.a,r=e.b;return a(Dc,a(We,Pn,en(n)),Bo(function(o){if(o.$===2){var c=o.a,i=c.a,u=c.b;return a(Ap,y(i,u),v(dr,i,u,r))}else return o}));case 1:var n=e.a,r=e.b;return a(Dc,a(We,Pn,en(n)),Bo(function(o){return o.$===1?Mp(r):o}));case 0:var n=e.a,r=e.b;return a(Dc,a(We,Pn,en(n)),Bo(function(o){if(o.$)return o;var c=o.a,i=c.a,u=c.b;return a(Lp,y(i,u),v(EC,i,u,v(dr,i,u,r)))}));case 3:var n=e.a,r=e.b;return a(Dc,a(We,Pn,en(n)),Bo(function(o){return o.$===3?wp(r):o}));case 4:var n=e.a,r=e.b;return a(Dc,a(We,Pn,en(n)),Bo(function(o){return o.$===4?fv(r):o}));default:var n=e.a,t=e.b;return a(Dc,a(We,Pn,en(n)),Bo(function(o){if(o.$===5){var c=o.a;return Tp(a(fe,c,a(he,function(i){return a(Yf,i,c)},a(Of,en(t),Xf(c)))))}else return o}))}},IC=function(e){return AC(HC(e))},Kp=s(function(e,r){return a(O,IC(e),r)}),hv=A(function(e,r,n){var t=Jp(r),o=t.a,c=t.b,i=function(u){return v(me,Kp,u,o)};return{hm:c,cS:e?i(n.cS):n.cS,jQ:i(n.jQ)}}),Ir=s(function(e,r){var n=r;return a(Ki,e,n.aK)}),FC=function(e){return a(Ir,5,e.f)||a(Ir,6,e.f)||a(Ir,7,e.f)},e2=s(function(e,r){return r.lq>0&&r.jM>0?r:{jM:e.jM,bF:0,tm:r.tm,bS:0,lq:e.lq}}),UC={q0:!1,jy:!1,hC:0,hD:0,rf:S,sf:!1,sQ:!1,tU:!1,tW:!1,lm:!1,pA:0,pB:0},RC=function(e){var r=e.o4;if(r.$===1)return UC;var n=r.a,t=n.bS+.5*n.jM-.5*e.u5.jM,o=.5*e.u5.lq-n.bF-.5*n.lq,c=e._.sf?e.cB.c6:e.cB.hU,i=oe(c,V(e.gj)),u=oe(e.cB.c6,V(e.gj));return{q0:u&&e._.q0,jy:u&&e._.jy,hC:i?e._.hC:0,hD:i?e._.hD:0,rf:u?e._.rf:S,sf:u&&e._.sf,sQ:i&&e._.sQ,tU:u&&e._.tU,tW:u&&e._.tW,lm:u&&e._.lm,pA:e._.pA+o,pB:e._.pB+t}},qC={i2:!1,js:!1,jy:!1,q4:S,bF:!1,j7:!1,tD:S,bM:!1,kV:!1,lm:!1},GC={md:0,me:0,mj:S,of:0,og:D},tu=function(e){var r=Mr(a(gr,function($){return oe($.tm,e.bE)},e.g.tl)),n=oe(e.aG,V(e.bE)),t=n?e.g.hX:qC,o=n?e.g.fJ:GC,c=a(he,e2(e.g.$7),r),i=(function(){if(c.$)return e.g.$7;var $=c.a;return{jM:$.jM,lq:$.lq}})(),u=RC({gj:e.bE,cB:e.cB,o4:c,_:e.g.tw,u5:e.g.$7});return{c2:(function(){var $=e.bD;if($.$===1)return{pL:!1,rv:D};var l=$.a;return{pL:FC(l),rv:l.c2.rv}})(),aA:e.aM,dC:e.g.dC,hl:e.hl,cc:e.cc,ey:e.g.ey,eA:e.g.eA,eB:e.g.eB,hB:e.g.hB,mv:n,eO:e.g.eO,rw:e.g.rw,gj:e.bE,hX:t,nD:e.nD,nO:e.nO,tg:e.tg,kt:Hp(e.g.kt),gz:e.g.gz,tw:u,fp:e.g.fp,$7:i,fs:e.g.fs,iH:e.g.iH,eb:e.g.eb,pu:e.pu,fJ:o,pD:e.pD}},WC={c6:D,hU:D},OC=s(function(e,r){if(e.$)return sv(r);var n=e.a;return a(Vp,n,sv(r))}),NC=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){var d=a(rr,$,e);if(d.$)return l;var b=d.a,g=a(zp,n,b.aH),_=tu({hl:0,cc:g,aG:i,bD:D,bE:b.bE,g:t,nD:Ie,nO:c,tg:Zf,aM:vv,cB:WC,pu:!1,pD:!1}),p=v(b.b_,_,r,o),m=p.a,P=p.b,C=p.c,j=v(hv,oe(u,V(b.bE)),P,{cS:l.ci,jQ:g}),L={aA:b.aA,fO:!1,hl:0,cc:j.jQ,hv:Ie,bE:b.bE,nD:Ie,bG:m,ip:a(OC,V(xp(a(fe,"",a(to,a(Qn,t.ti,"panel-layout"),t.tp)))),{r0:V,r1:te}),fo:b.fo,aM:vv,pu:!1};return E(l,{cK:a(M,a(Kt,zo(b.bE),j.hm),l.cK),cP:Q(l.cP,C),ci:j.cS,cT:v(Tr,$,L,l.cT)})}}}}}}}}}},ZC=s(function(e,r){return a(Jf,e.bE,r)?r:v(Tr,e.bE,e,r)}),r2=function(e){return E(e,{f:a(oo,lv(4),e.f)})},JC=Ot("registerPanes",ro(Wr)),a2=function(e){return{$:1,a:e}},n2="play-device-picker",e$={fY:n2,v:a2},La={$:11},nr=A(function(e,r,n){return e(r(n))}),XC=Rh,mt=s(function(e,r){return $p(a(XC,a(nr,a(nr,ka,e),Ha),a(pa,a(nr,a(nr,ka,e),ta),r)))}),co=32,t2=s(function(e,r){return a(Pe,0,co*r-e.fa/2+co/2)}),Eo=function(e){return e.fY+"-list"},Ho=N7,o2=A(function(e,r,n){var t=n,o=a(oa,function(u){return a(Nf,u,t.aS)},r);if(o.$)return y(t,ie);var c=o.a,i=a(t2,e,c);return y(E(t,{eZ:r,b1:i,av:c}),a(mt,function(u){return e.v(La)},v(Ho,Eo(e),0,i)))}),YC=function(e){return{$:0,a:e}},zc=function(e){return{fY:e.fY,fa:320,kI:"Search devices\u2026",v:a(nr,e.v,YC),lq:{sH:320,u1:26}}},QC=s(function(e,r){var n=r,t=v(o2,zc(e),V(n.cL),n.bj),o=t.a,c=t.b;return y(E(n,{bj:o}),c)}),KC=function(e){return{$:0,a:e}},Bc=function(e){var r=e.fY,n=e.v;return{fY:r,fa:320,kI:"Search palettes\u2026",v:a(nr,n,KC),lq:{sH:320,u1:26}}},gv=A(function(e,r,n){var t=n,o=v(o2,Bc(e),bv(r),t.bj),c=o.a,i=o.b;return y(E(t,{bj:c}),i)}),c2=function(e){return{$:0,a:e}},i2="play-theme-picker",Vc={fY:i2,v:c2},eP=function(e){var r=a(Ir,5,e.f)?v(gv,Vc,e.e,e.P):y(e.P,ie),n=r.a,t=r.b,o=a(Ir,7,e.f)?a(QC,e$,e.Q):y(e.Q,ie),c=o.a,i=o.b;return y(E(e,{Q:c,P:n}),ba(f([t,i])))},_v={$:1},rP=function(e){var r=e;return r.cJ},u2=function(e){if(e.$)return Zp(To(e));var r=e.a;return Ac(a(Op,rP(r),bp(r)))},f2=function(e){var r=e.b;return a(Ia,_v,u2(r))},aP=function(e){switch(e){case"Red":return V(0);case"Green":return V(1);case"Yellow":return V(2);case"Blue":return V(3);case"Magenta":return V(4);case"Cyan":return V(5);default:return D}},$2=function(e){var r=dv,n=r.a,t=r.b;return a(qf,function(o){return oe(o.sT,e)},a(M,n,t))},nP=function(e){switch(e){case"1":return V(!0);case"0":return V(!1);default:return D}},yv=s(function(e,r){var n=r;return E(n,{g8:e,c7:a(Ui,e,n.c7.kv),dh:a(Ui,e,n.dh.kv)})}),Cv=s(function(e,r){var n=r,t=a(Ui,n.g8,e);return e.se?E(n,{c7:t,dR:!1}):E(n,{dh:t,dR:!0})}),l2=function(e){return Cv(J0(e))},Pv=function(e){var r=e;return E(r,{dR:!r.dR})},tP=s(function(e,r){return oe(Gf(r),e)?r:Pv(r)}),oP=function(e){var r=a(gn,"|",e);if(r.b&&r.b.b&&r.b.b.b&&r.b.b.b.b&&!r.b.b.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,u=c.b,$=u.a;return $2(n)&&$2(o)?v(uv,s(function(l,d){return a(tP,d,a(yv,l,a(l2,o,a(l2,n,Vb))))}),aP($),nP(i)):D}else return D},cP=s(function(e,r){var n=a(fe,S,r.g.iH),t=a(fe,Ie,a(he,xn,r.g.iH)),o=e.e_(t),c=a(O,function(Le){return Le.bE},e.cT),i=v(me,ZC,Ie,e.cT),u=Ky(c),$=(function(){if(u.b&&!u.b.b){var Le=u.a;return V(Le)}else return D})(),l=a(fe,e.bD.e,a(oa,oP,a(to,a(Qn,r.g.ti,"theme"),r.g.tp))),d=a(fe,e.bD.bL,a(oa,yy,a(to,a(Qn,r.g.ti,"tape-record-from-start"),r.g.tp))),b=a(fe,"",a(to,a(Qn,r.g.ti,"hud-open-panels"),r.g.tp)),g=a(fe,e.bD.hV,a(oa,nC,a(to,Rf("mode"),r.g.tp))),_=a(fe,dC,a(oa,Yy,a(to,a(Qn,r.g.ti,"device"),r.g.tp))),p=SC({c2:e.c2,r7:_,hV:g,r8:d,r9:l,gI:e.bD}),m=a(vC,b,a($C,xp(a(fe,"",a(to,Rf("hud-panel-layout"),r.g.tp))),p)),P=d&&e.bD.hS?r2(m):m,C=a(zp,n,e.aH),j=v(me,go(NC,i,o,n,r.g,l,g,$,Mr(u)),{cK:S,cP:S,ci:C,cT:Ie},u),L=a(sC,j.ci,r.g),T=v(If,e,j.cP,o),F=T.a,q=T.b,R={cc:j.ci,g:r.g,cT:j.cT,O:F,oc:S,od:S},K=(function(){if(e.bD.hS){var Le=v(jC,aC,L,R);return d?f2(Le):Le}else return a(kC,L,R)})(),J=eP(P),ue=J.a,ge=J.b,De={hr:Ly(e.cT),aG:$,bD:ue,aU:u,gl:S,ti:r.g.ti,uA:K};return y(E(De,{gl:a(Pp,e,De)}),ba(a(M,a(Kt,Hf,ge),a(M,JC(u),a(M,q,j.cK)))))}),v2=function(e){return{$:10,a:e}},Sv={$:1},iP=function(e){return{$:0,a:e}},s2={$:11},uP=s(function(e,r){return{$:4,a:e,b:r}}),ou=Ad,fP=s(function(e,r){return{$:5,a:e,b:r}}),$P={$:6},Ec=Sh,lP=gh,Hc=function(e){return a(Ze,xn,lP(e))},r$=a(We,Ka,a(We,Hr(function(e){var r=e.a,n=e.b,t=no(r);if(t.$)return D;var o=t.a;return V(y(o,n))}),xn)),vP=Y(function(e,r,n,t){return{rP:t,u2:n,pA:e,pB:r}}),Ic=xh,sP=U(Ic,vP,a(k,"x",N),a(k,"y",N),a(k,"w",N),a(k,"h",N)),dP=Hc(sP),xv=function(e){return{$:1,a:e}},dW=3,Fc={$:2},d2=function(e){switch(e){case 0:return"texture";case 1:return"sound";case 2:return"font";default:return"atlas"}},ht=s(function(e,r){return d2(e)+(":"+r)}),bP=s(function(e,r){var n=r;return E(n,{F:v(eo,a(ht,3,e.bE),he(function(t){return xv({eS:e.eS,aW:e.aW,ap:e.ap,E:Fc})}),n.F)})}),jv=vh,pP=function(e){return x(Ec,A(function(r,n,t){return bP({eS:n,bE:e,aW:r,ap:t})}),a(Ze,r$,a(k,"mipImages",Hc(jv))),a(Ze,r$,a(k,"frames",Hc(dP))),a(k,"pixelated",ne))},kv=function(e){return wo(f([a(Ze,V,e),ae(D)]))},wv=a(Ze,fe(""),kv(a(k,"error",ke))),a$=function(e){return{$:3,a:e}},b2=function(e){return{$:3,a:e}},Lv=function(e){return{$:2,a:e}},Av=function(e){return{$:0,a:e}},mP=s(function(e,r){switch(r.$){case 0:return Av({em:0,en:0,fS:D,aW:Ie,fe:Ie,ap:!1,E:a$(e)});case 1:return xv({eS:Ie,aW:Ie,ap:!1,E:a$(e)});case 2:return Lv({E:a$(e)});default:return b2({E:a$(e)})}}),bW=2,pW=1,mW=0,Tv=function(e){switch(e){case"texture":return V(0);case"sound":return V(1);case"font":return V(2);case"atlas":return V(3);default:return D}},Mv=Y(function(e,r,n,t){var o=t,c=Tv(e);if(c.$)return o;var i=c.a;return E(o,{F:v(eo,a(ht,i,r),he(mP(n)),o.F)})}),n$={$:1},hP=function(e){switch(e){case 0:return Av({em:0,en:0,fS:D,aW:Ie,fe:Ie,ap:!1,E:n$});case 3:return xv({eS:Ie,aW:Ie,ap:!1,E:n$});case 1:return Lv({E:n$});default:return b2({E:n$})}},Dv=A(function(e,r,n){var t=n,o=Tv(e);if(o.$)return t;var c=o.a;return E(t,{F:v(Tr,a(ht,c,r),hP(c),t.F)})}),gP=s(function(e,r){var n=r;return E(n,{F:v(eo,a(ht,1,e),he(function(t){return t.$===2?Lv({E:Fc}):t}),n.F)})}),p2=kh,_P=s(function(e,r){var n=r;return E(n,{F:v(eo,a(ht,0,e.bE),he(function(t){return t.$?t:Av({em:e.em,en:e.en,fS:e.fS,aW:e.aW,fe:e.fe,ap:e.ap,E:Fc})}),n.F)})}),yP=function(e){return ra(p2,Br(function(r,n,t,o,c,i){return _P({em:o,en:t,fS:i,bE:e,aW:r,fe:n,ap:c})}),a(Ze,r$,a(k,"mipImages",Hc(jv))),a(Ze,a(We,fe(Ie),r$),kv(a(k,"mipUrls",Hc(ke)))),a(k,"baseWidth",N),a(k,"baseHeight",N),a(k,"pixelated",ne),kv(a(k,"baseline",N)))},Uc=A(function(e,r,n){var t=n,o=Tv(e);if(o.$)return t;var c=o.a;return E(t,{F:a(sp,a(ht,c,r),t.F)})}),CP=function(e){var r=e.a,n=e.b,t=e.c,o=y(r,n);e:for(;;)switch(o.a){case"texture":switch(o.b){case"loading":return ae(a(Dv,"texture",t));case"loaded":return yP(t);case"failed":return a(Ze,function(c){return v(Mv,"texture",t,c)},wv);case"unloaded":return ae(a(Uc,"texture",t));case"cancelled":return ae(a(Uc,"texture",t));default:break e}case"atlas":switch(o.b){case"loading":return ae(a(Dv,"atlas",t));case"loaded":return pP(t);case"failed":return a(Ze,function(c){return v(Mv,"atlas",t,c)},wv);case"unloaded":return ae(a(Uc,"atlas",t));case"cancelled":return ae(a(Uc,"atlas",t));default:break e}case"sound":switch(o.b){case"loading":return ae(a(Dv,"sound",t));case"loaded":return ae(gP(t));case"failed":return a(Ze,function(c){return v(Mv,"sound",t,c)},wv);case"unloaded":return ae(a(Uc,"sound",t));case"cancelled":return ae(a(Uc,"sound",t));default:break e}default:break e}return ae(te)},PP=a(z,CP,x(Ec,A(function(e,r,n){return H(e,r,n)}),a(k,"kind",ke),a(k,"status",ke),a(k,"id",ke))),SP=v(Xn,Mo,a(k,"instanceId",ke),PP),xP=u0,jP=function(e){var r=a(xP,SP,e);if(r.$)return $P;var n=r.a,t=n.a,o=n.b;return a(fP,t,o)},Kn=uh,m2=s(function(e,r){return{$:2,a:e,b:r}}),Io=Td,zv=function(e){return v(me,jp,Zf,e)},t$=function(e){return zv(ov(e.ip))},hW=0,h2=A(function(e,r,n){return{$:0,a:e,b:r,c:n}}),g2=s(function(e,r){return{oe:r,o_:e}}),kP=ka(a(g2,S,Ie)),wP=function(e){return e?"w_":"d_"},LP=function(e){var r=e.a,n=e.b;return y(Q(wP(r),n),e)},_2=Oh,AP=Br(function(e,r,n,t,o,c){var i=A(function(d,b,g){e:for(;;){var _=g.a,p=g.b;if(_.b){var m=_.a,P=m.a,C=m.b,j=_.b;if(ce(P,d)<0){var L=d,T=b,F=y(j,v(e,P,C,p));d=L,b=T,g=F;continue e}else return ce(P,d)>0?y(_,v(n,d,b,p)):y(j,x(r,P,C,b,p))}else return y(_,v(n,d,b,p))}}),u=v(ko,i,y(Ka(t),c),o),$=u.a,l=u.b;return v(me,s(function(d,b){var g=d.a,_=d.b;return v(e,g,_,b)}),l,$)}),TP=s(function(e,r){return{mn:r,jT:e}}),Bv=Kh,MP=A(function(e,r,n){var t=n.a,o=n.b,c=(function(){return t?Gn:yo})();return a(Zi,function(i){return y(r,i)},v(U7,c,o,function(i){return a(Bv,e,a(TP,r,i))}))}),DP=s(function(e,r){return v(ko,Tr,r,e)}),zP=A(function(e,r,n){var t=A(function(b,g,_){var p=_.a,m=_.b,P=_.c;return H(p,m,a(M,v(MP,e,b,g),P))}),o=A(function(b,g,_){var p=_.a,m=_.b,P=_.c;return H(a(M,g,p),m,P)}),c=Y(function(b,g,_,p){var m=p.a,P=p.b,C=p.c;return H(m,v(Tr,b,g,P),C)}),i=a(O,LP,r),u=wr(AP,o,c,t,n.oe,xn(i),H(S,Ie,S)),$=u.a,l=u.b,d=u.c;return a(pa,function(b){return ka(a(g2,i,a(DP,l,xn(b))))},a(pa,function(b){return Ji(d)},Ji(a(O,_2,$))))}),BP=A(function(e,r,n){var t=r.mn,o=r.jT,c=function(u){var $=u.a,l=u.b,d=l.a,b=l.b,g=l.c;return oe($,o)?a(R7,g,t):D},i=a(Hr,c,n.o_);return a(pa,function(u){return ka(n)},Ji(a(O,Ef(e),i)))}),VP=s(function(e,r){var n=r.a,t=r.b,o=r.c;return v(h2,n,t,a(Ze,e,o))});na["Browser.Events"]=m0(kP,zP,BP,0,VP);var EP=Di("Browser.Events"),Vv=A(function(e,r,n){return EP(v(h2,e,r,n))}),cu=a(Vv,0,"keydown"),Ev=function(e){return{$:0,a:e}},Rc=s(function(e,r){return v(cn,k,r,e)}),y2=Z9,HP=function(e){var r=y2(e);return r==="INPUT"||r==="TEXTAREA"||r==="SELECT"},IP=s(function(e,r){if(r.$)return!1;var n=r.a;return oe(Lb(e),dt(iv(n)))}),FP=s(function(e,r){return a(he,function(n){return n.bE},Mr(a(gr,function(n){return a(IP,e,n.oJ)},r)))}),UP=function(e){return a(z,function(r){if(HP(r.o2))return Kn("ignored: text input focused");if(r.js||r.j7){var n=a(FP,r.jT,e);if(n.$)return Kn("ignored: no matching entry shortcut");var t=n.a;return ae(Ev(t))}else return Kn("ignored: no Ctrl/Cmd modifier")},U(Ic,Y(function(r,n,t,o){return{js:n,jT:r,j7:t,o2:o}}),a(k,"key",ke),a(k,"ctrlKey",ne),a(k,"metaKey",ne),a(Rc,f(["target","tagName"]),ke)))},C2=s(function(e,r){return cu(UP(e))}),gW=te,RP=function(e){return a(O,function(r){return{bE:r.bE,oJ:a(he,te,r.oJ)}},e)},o$=function(e){return e.pD},qP=Ae(function(e,r,n,t,o){var c=a(rr,o,n.cT);if(c.$)return D;var i=c.a,u=tu({hl:i.hl,cc:i.cc,aG:r.aG,bD:V(r.bD),bE:i.bE,g:n.g,nD:i.nD,nO:Lc(r.bD),tg:t$(i),aM:i.aM,cB:t,pu:i.pu,pD:o$(r.bD)}),$=x(e.a7.cq,u,n.O,Ln(r.bD),i.bG),l=a(Io,m2(o),a(C2,RP($),i.ip)),d=a(Io,zo(o),x(e.a7.ay,u,n.O,Ln(r.bD),i.bG));return V(ou(f([d,l])))}),qc=function(e){var r=e.a;return oe(r,_v)},P2=function(e){return a(Ir,4,e.f)},gt=ou(S),GP=g0("assetsResponse",jv),WP=GP(te),S2="play-absorbs-pointer-",OP=function(e){return a(On,S2,e)},NP=s(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(OP(n))return D;if(a(kp,n,e))return V(n);var o=e,c=t;e=o,r=c;continue e}else return D}),x2=function(e){var r=.5*e.u5.jM-e._.pB,n=e._.pA+.5*e.u5.lq,t=function(i){var u=a(e2,e.u5,i);return ce(n,u.bF)>-1&&ce(n,u.bF+u.lq)<1&&ce(r,u.bS)>-1&&ce(r,u.bS+u.jM)<1},o=a(he,function(i){return i.tm},Mr(a(gr,t,e.kw))),c=a(NP,e.kO,e._.rf);return{c6:c,hU:o}},Hv=function(e){return x2({kw:e.g.tl,kO:zv(kf(e.cT)),_:e.g.tw,u5:e.g.$7})},j2=function(e){return{$:6,a:e}},k2=function(e){return{$:3,a:e}},w2=function(e){return{$:2,a:e}},L2={$:13},ZP=a(z,function(e){return(e.jT==="p"||e.jT==="P")&&e.kV&&(e.js||e.j7)?ae(L2):Kn("not Cmd+Shift+P")},U(Ic,Y(function(e,r,n,t){return{js:n,jT:e,j7:t,kV:r}}),a(k,"key",ke),a(k,"shiftKey",ne),a(k,"ctrlKey",ne),a(k,"metaKey",ne))),JP=function(e){var r=e;return Ye(r.it)},iu=s(function(e,r){return e.hR&&!JP(r)}),XP={$:4},YP=a(z,function(e){return(e.jT==="i"||e.jT==="I")&&(e.js||e.j7)?ae(XP):Kn("not Ctrl+I")},x(Ec,A(function(e,r,n){return{js:r,jT:e,j7:n}}),a(k,"key",ke),a(k,"ctrlKey",ne),a(k,"metaKey",ne))),QP={$:12},KP=a(z,function(e){return(e.jT==="m"||e.jT==="M")&&(e.js||e.j7)?ae(QP):Kn("not Ctrl+M")},x(Ec,A(function(e,r,n){return{js:r,jT:e,j7:n}}),a(k,"key",ke),a(k,"ctrlKey",ne),a(k,"metaKey",ne))),A2=s(function(e,r){return gt}),eS=s(function(e,r){var n=r;return a(A2,zc(e),n.bj)}),rS=function(e){return{$:7,a:e}},aS={$:8},nS=a(Vv,0,"mousemove"),tS=a(Vv,0,"mouseup"),oS=function(e){if(e.$===3){var r=e.a,n=r.bl;if(n.a.$===1){var t=n.a;return ou(f([nS(v(Xn,s(function(o,c){return rS({fW:o,qu:c})}),a(k,"clientX",N),a(k,"clientY",N))),tS(ae(aS))]))}else return gt}else return gt},cS=s(function(e,r){var n=r;return a(A2,Bc(e),n.bj)}),T2=function(e){return{$:4,a:e}},M2=function(e){return{$:1,a:e}},c$=A(function(e,r,n){return{kh:n,ox:r,o_:e}}),Iv=ka(v(c$,S,D,0)),iS=G7(0),D2=q7(0),z2=s0,uS=A(function(e,r,n){var t=n.kh,o=n.ox,c=y(o,r);if(c.a.$===1)if(c.b.b){var u=c.a;return a(pa,function(l){return a(pa,function(d){return ka(v(c$,r,V(l),d))},iS)},z2(a(pa,Bv(e),D2)))}else{var i=c.a;return Iv}else{if(c.b.b)return ka(v(c$,r,o,t));var $=c.a.a;return a(pa,function(l){return Iv},_2($))}}),_W=te,fS=te,$S=A(function(e,r,n){var t=n.kh,o=n.o_,c=function(i){if(i.$){var u=i.a;return a(Ef,e,u(r-t))}else{var u=i.a;return a(Ef,e,u(fS(r)))}};return a(pa,function(i){return a(pa,function(u){return ka(v(c$,o,V(i),r))},Ji(a(O,c,o)))},z2(a(pa,Bv(e),D2)))}),lS=function(e){return{$:0,a:e}},vS=s(function(e,r){if(r.$){var n=r.a;return M2(a(nr,e,n))}else{var n=r.a;return lS(a(nr,e,n))}});na["Browser.AnimationManager"]=m0(Iv,uS,$S,0,vS);var sS=Di("Browser.AnimationManager"),dS=function(e){return sS(M2(e))},B2=dS,bS=function(e){var r=e;if(r.$===1){var n=r.a,t=n.V;switch(t.$){case 0:return B2(T2);case 2:return B2(T2);case 1:return gt;default:return gt}}else return gt},pS=s(function(e,r){var n=e.v,t=e.gI,o=a(Io,w2,bS(r.c_)),c=t.cj?V(a(cS,Vc,r.P)):D,i=t.eT?V(a(Io,k2,oS(r.aL))):D,u=a(Io,j2,a(C2,S,r.f)),$=t.dJ?V(a(eS,e$,r.Q)):D,l=t.dK?V(cu(KP)):D,d=t.cj?V(cu(YP)):D,b=a(iu,t,r.c2.N)?V(cu(ZP)):D;return a(Io,n,ou(a(Hr,te,f([V(o),d,l,c,$,i,V(u),b]))))}),mS=g0("tick",a(z,function(e){return a(z,function(r){return a(z,function(n){return a(z,function(t){return a(z,function(o){return a(z,function(c){return a(z,function(i){return a(z,function(u){return a(z,function($){return a(z,function(l){return a(z,function(d){return a(z,function(b){return a(z,function(g){return a(z,function(_){return a(z,function(p){return a(z,function(m){return a(z,function(P){return a(z,function(C){return a(z,function(j){return a(z,function(L){return ae({dC:L,ey:j,eA:C,eB:P,hB:m,eO:p,rw:_,hX:g,kt:b,ti:d,gz:l,tl:$,tp:u,tw:i,fp:c,$7:o,fs:t,iH:n,eb:r,fJ:e})},a(k,"boundingClientRects",hr(a(z,function(L){return a(z,function(T){return a(z,function(F){return ae({rg:F,rE:T,t2:L})},a(k,"elements",hr(a(z,function(F){return a(z,function(q){return ae({lU:q,bE:F})},a(k,"boundingClientRect",a(z,function(q){return a(z,function(R){return a(z,function(K){return a(z,function(J){return ae({bx:J,bF:K,bM:R,bS:q})},a(k,"bottom",N))},a(k,"left",N))},a(k,"right",N))},a(k,"top",N))))},a(k,"id",ke)))))},a(k,"frameId",ke))},a(k,"scroll",a(z,function(L){return a(z,function(T){return a(z,function(F){return a(z,function(q){return a(z,function(R){return a(z,function(K){return ae({l6:K,l7:R,bF:q,bS:F,ps:T,pt:L})},a(k,"contentHeight",N))},a(k,"contentWidth",N))},a(k,"left",N))},a(k,"top",N))},a(k,"viewportHeight",N))},a(k,"viewportWidth",N)))))))},a(k,"darkModeIsOn",ne))},a(k,"deviceOrientation",wo(f([jc(D),a(Ze,V,a(z,function(C){return a(z,function(j){return a(z,function(L){return ae({aQ:L,p1:j,rJ:C})},a(k,"alpha",N))},a(k,"beta",N))},a(k,"gamma",N)))]))))},a(k,"devicePixelRatio",N))},a(k,"dt",N))},a(k,"focusedElementIsContentEditable",ne))},a(k,"focusedElementIsTextInput",ne))},a(k,"keyboard",a(z,function(g){return a(z,function(_){return a(z,function(p){return a(z,function(m){return a(z,function(P){return a(z,function(C){return a(z,function(j){return a(z,function(L){return a(z,function(T){return a(z,function(F){return ae({i2:F,js:T,jy:L,q4:j,bF:C,j7:P,tD:m,bM:p,kV:_,lm:g})},a(k,"alt",ne))},a(k,"ctrl",ne))},a(k,"down",ne))},a(k,"downs",hr(ke)))},a(k,"left",ne))},a(k,"meta",ne))},a(k,"pressedKeys",hr(ke)))},a(k,"right",ne))},a(k,"shift",ne))},a(k,"up",ne))))},a(k,"operatingSystem",ke))},a(k,"pageId",ke))},a(k,"pageScroll",a(z,function(l){return a(z,function(d){return a(z,function(b){return a(z,function(g){return a(z,function(_){return a(z,function(p){return ae({l6:p,l7:_,bF:g,bS:b,ps:d,pt:l})},a(k,"contentHeight",N))},a(k,"contentWidth",N))},a(k,"left",N))},a(k,"top",N))},a(k,"viewportHeight",N))},a(k,"viewportWidth",N))))},a(k,"paneBoundingBoxes",hr(a(z,function($){return a(z,function(l){return a(z,function(d){return a(z,function(b){return a(z,function(g){return ae({jM:g,bF:b,tm:d,bS:l,lq:$})},a(k,"height",N))},a(k,"left",N))},a(k,"paneId",ke))},a(k,"top",N))},a(k,"width",N)))))},a(k,"persisted",hr(a(z,function(u){return a(z,function($){return ae(y(u,$))},a(Zn,1,ke))},a(Zn,0,ke)))))},a(k,"pointer",a(z,function(i){return a(z,function(u){return a(z,function($){return a(z,function(l){return a(z,function(d){return a(z,function(b){return a(z,function(g){return a(z,function(_){return a(z,function(p){return a(z,function(m){return a(z,function(P){return a(z,function(C){return ae({q0:C,jy:P,hC:m,hD:p,rf:_,sf:g,sQ:b,tU:d,tW:l,lm:$,pA:u,pB:i})},a(k,"doubleClick",ne))},a(k,"down",ne))},a(k,"dx",N))},a(k,"dy",N))},a(k,"elementIdsForLastDown",hr(ke)))},a(k,"isDown",ne))},a(k,"move",ne))},a(k,"rightDown",ne))},a(k,"rightUp",ne))},a(k,"up",ne))},a(k,"x",N))},a(k,"y",N))))},a(k,"rawPointer",a(z,function(c){return a(z,function(i){return a(z,function(u){return a(z,function($){return a(z,function(l){return a(z,function(d){return a(z,function(b){return a(z,function(g){return a(z,function(_){return a(z,function(p){return a(z,function(m){return a(z,function(P){return ae({q0:P,jy:m,hC:p,hD:_,rf:g,sf:b,sQ:d,tU:l,tW:$,lm:u,pA:i,pB:c})},a(k,"doubleClick",ne))},a(k,"down",ne))},a(k,"dx",N))},a(k,"dy",N))},a(k,"elementIdsForLastDown",hr(ke)))},a(k,"isDown",ne))},a(k,"move",ne))},a(k,"rightDown",ne))},a(k,"rightUp",ne))},a(k,"up",ne))},a(k,"x",N))},a(k,"y",N))))},a(k,"screen",a(z,function(o){return a(z,function(c){return ae({jM:c,lq:o})},a(k,"height",N))},a(k,"width",N))))},a(k,"screenOrientationAngle",N))},a(k,"searchParamsFromUrl",wo(f([jc(D),a(Ze,V,hr(a(z,function(n){return a(z,function(t){return ae(y(n,t))},a(Zn,1,ke))},a(Zn,0,ke))))]))))},a(k,"touches",hr(a(z,function(r){return a(z,function(n){return a(z,function(t){return ae({bE:t,pA:n,pB:r})},a(k,"id",qi))},a(k,"x",N))},a(k,"y",N)))))},a(k,"wheel",a(z,function(e){return a(z,function(r){return a(z,function(n){return a(z,function(t){return a(z,function(o){return ae({md:o,me:t,mj:n,of:r,og:e})},a(k,"deltaX",N))},a(k,"deltaY",N))},a(k,"elementIdsForLastWheel",hr(ke)))},a(k,"pinchDeltaForChrome",N))},a(k,"pinchScaleForSafari",wo(f([jc(D),a(Ze,V,N)]))))))),hS=g0("visibilityChanged",a(z,function(e){return a(z,function(r){return ae({gj:r,pu:e})},a(k,"instanceId",ke))},a(k,"visible",ne))),gS=s(function(e,r){var n=a(pS,{gI:e.bD,v:Hf},r.bD),t=wc(r.uA),o=Hv(t),c=a(Hr,x(qP,e,r,t,o),r.aU),i=P2(r.bD)?cu(a(z,function($){return $==="Escape"?qc(r.uA)?ae(v2(Sv)):ae(s2):Kn("not Escape")},a(k,"key",ke))):gt,u=e.ay(t.O);return ou(Q(f([mS(iP),hS(function($){return a(uP,$.gj,$.pu)}),a(Io,jP,WP),u,n,i]),c))}),Gc=W8,V2=Y(function(e,r,n,t){var o=Ao&r>>>e,c=a(Qi,o,t);if(c.$){var $=c.a,l=v(Gc,Ao&r,n,$);return v(Gc,o,hc(l),t)}else{var i=c.a,u=x(V2,e-Cn,r,n,i);return v(Gc,o,gc(u),t)}}),i$=A(function(e,r,n){var t=n.a,o=n.b,c=n.c,i=n.d;return e<0||ce(e,t)>-1?n:ce(e,dp(t))>-1?x(Xt,t,o,c,v(Gc,Ao&e,r,i)):x(Xt,t,o,x(V2,o,e,r,c),i)}),_S=s(function(e,r){var n=r;return E(n,{eS:v(i$,a(ja,n.cJ,n.dq+n.aR),e,n.eS)})}),E2=s(function(e,r){if(r.$){var t=r.a;return nu(E(t,{eS:v(i$,t.aR,e,t.eS)}))}else{var n=r.a;return Ac(a(_S,e,n))}}),io=s(function(e,r){var n=r.a,t=r.b,o=To(t),c=o.a,i=o.b,u=e(i),$=u.a,l=u.b;return y(a(Ia,n,a(E2,y(c,$),t)),l)}),yS=A(function(e,r,n){var t=function(o){var c=v(If,e,r,o.O),i=c.a,u=c.b;return y(E(o,{O:i}),u)};return a(Vo,function(o){return E(n,{uA:o})},a(io,t,n.uA))}),H2=Bh,CS=Ot("clearPlayLocalStorage",function(e){return H2}),PS=Ot("pushUrlReset",function(e){return H2}),SS=A(function(e,r,n){if(r.$===1)return y(n,ie);if(r.a){var u=r.a;return y(n,CS(0))}else{var t=r.a,o=function($){var l=(function(){var d=n.aU;if(d.b){var b=d.a;return v(eo,b,he(function(g){return E(g,{cc:e.aH})}),$.cT)}else return $.cT})();return y(E($,{cc:e.aH,cT:l}),ie)},c=a(io,o,n.uA),i=c.a;return y(E(n,{uA:i}),PS(0))}}),xS=A(function(e,r,n){var t=function(o){var c=a(rr,e,o.cT);if(c.$)return y(o,ie);var i=c.a,u=a(oo,r,i.ip),$=v(Tr,e,E(i,{ip:u}),o.cT);return y(E(o,{cT:$}),ie)};return a(Vo,function(o){return E(n,{uA:o})},a(io,t,n.uA))}),jS=function(e){return a(Ir,7,e.f)},kS=s(function(e,r){return e?{jM:r.X.lq,lq:r.X.jM}:r.X}),wS=function(e){var r=e;return a(kS,r.dY,r.cL)},LS=function(e){return wS(e.Q)},Fv=function(e){return jS(e)?V(LS(e)):D},I2=24,uu=s(function(e,r){return v(dr,.1,1,a(Ge,(e.lq-I2)/r.lq,(e.jM-I2)/r.jM))}),AS=A(function(e,r,n){var t=a(uu,e,r),o=function(c){return E(c,{bx:c.bx/t,bF:c.bF/t,bM:c.bM/t,bS:c.bS/t})};return a(O,function(c){return E(c,{rg:a(O,function(i){return E(i,{lU:o(i.lU)})},c.rg)})},n)}),TS=A(function(e,r,n){var t=a(uu,e,r),o=.5*(e.lq-r.lq*t),c=.5*(e.jM-r.jM*t);return E(n,{jM:n.jM/t,bF:(n.bF-o)/t,bS:(n.bS-c)/t,lq:n.lq/t})}),F2=A(function(e,r,n){var t=.5*e.jM-n.pB,o=n.pA+.5*e.lq,c=a(uu,e,r),i=.5*(e.lq-r.lq*c),u=.5*(e.jM-r.jM*c);return E(n,{pA:(o-i)/c-.5*r.lq,pB:.5*r.jM-(t-u)/c})}),U2=A(function(e,r,n){var t=v(F2,e,r,n),o=a(uu,e,r);return E(t,{hC:n.hC/o,hD:n.hD/o})}),Uv=s(function(e,r){if(e.$)return r;var n=e.a;return{dC:v(AS,r.$7,n,r.dC),ey:r.ey,eA:r.eA,eB:r.eB,hB:r.hB,eO:r.eO,rw:r.rw,hX:r.hX,kt:r.kt,ti:r.ti,gz:r.gz,tl:a(O,a(TS,r.$7,n),r.tl),tp:r.tp,tw:v(U2,r.$7,n,r.tw),fp:v(U2,r.$7,n,r.fp),$7:n,fs:r.fs,iH:r.iH,eb:a(O,a(F2,r.$7,n),r.eb),fJ:r.fJ}}),MS=Y(function(e,r,n,t){var o=function(c){var i=a(rr,r,c.cT);if(i.$)return y(c,ie);var u=i.a,$=Hv(c),l=Fv(t.bD),d=tu({hl:u.hl,cc:u.cc,aG:t.aG,bD:V(t.bD),bE:u.bE,g:a(Uv,l,c.g),nD:u.nD,nO:Lc(t.bD),tg:t$(u),aM:u.aM,cB:$,pu:u.pu,pD:o$(t.bD)}),b=U(e.a7.bh,d,c.O,Ln(t.bD),n,u.bG),g=b.a,_=b.b,p=b.c,m=v(hv,oe(Mr(t.aU),V(r)),_,{cS:c.cc,jQ:u.cc}),P=v(If,e,p,c.O),C=P.a,j=P.b,L=v(Tr,r,E(u,{cc:m.jQ,bG:g}),c.cT);return y(E(c,{cc:m.cS,cT:L,O:C}),ba(f([a(Kt,zo(r),m.hm),j])))};return a(Vo,function(c){return E(t,{uA:c})},a(io,o,t.uA))}),R2=function(e){return{$:2,a:e}},q2=R2,DS=function(e){return E(e,{f:a(oo,q2(4),e.f)})},zS=function(e){var r=e.b;return a(Ia,au,u2(r))},BS=A(function(e,r,n){return{$:7,a:e,b:r,c:n}}),yW=te,G2=9729,CW=te,u$=10497,VS={hM:!0,mJ:u$,h8:G2,ic:G2,pq:u$},f$=33071,ES=(function(){var e=VS;return E(e,{mJ:f$,pq:f$})})(),W2=function(e){return{$:1,a:e}},HS={$:0},IS=s(function(e,r){return{$:1,a:e,b:r}}),FS=s(function(e,r){var n=e.hM,t=e.pq,o=e.mJ,c=e.ic,i=e.h8,u=Y(function($,l,d,b){var g=$,_=l,p=d,m=b;return wr(Z7,g,_,p,m,n,r)});return x(u,i,c,o,t)}),US=s(function(e,r){return a(Zi,function(n){return W2({S:n,th:e,fG:r})},a(FS,e,r))}),O2=9728,RS={hM:!0,mJ:u$,h8:O2,ic:O2,pq:u$},qS=(function(){var e=RS;return E(e,{mJ:f$,pq:f$})})(),GS=s(function(e,r){var n=r.F,t=a(rr,a(ht,0,e),n);if(!t.$&&!t.a.$){var o=t.a.a.ap,c=t.a.a.E;return oe(c,Fc)?V(o):D}else return D}),$$=function(e){if(e.b){var r=e.a,n=e.b;return V(v(me,Pe,r,n))}else return D},WS=function(e){if(e.b){var r=e.a,n=e.b;return V(v(me,Ge,r,n))}else return D},OS=s(function(e,r){var n=WS(a(gr,function(o){return ce(o,e)>-1},r));if(n.$)return a(fe,1,$$(r));var t=n.a;return t}),NS=A(function(e,r,n){var t=n.F,o=a(rr,a(ht,0,e),t);if(!o.$&&!o.a.$){var c=o.a.a.fe,i=o.a.a.E;if(i.$===2){var u=a(OS,r,kf(c));return a(rr,u,c)}else return D}else return D}),ZS=s(function(e,r){return v(NS,e,1,r)}),JS=A(function(e,r,n){return ba(a(Hr,function(t){var o=y(a(ZS,t,n),a(GS,t,n));if(!o.a.$&&!o.b.$){var c=o.a.a,i=o.b.a,u=i?qS:ES;return V(a(mt,a(BS,e,t),a(US,u,c)))}else return D},r))}),N2=s(function(e,r){var n=d2(e)+":";return a(On,n,r)?a(on,nn(n),r):r}),XS=s(function(e,r){var n=e,t=r;return a(Hr,function(o){var c=o.a,i=o.b;if(i.$)return D;var u=i.a.E;if(oe(u,Fc)){var $=a(rr,c,n.F);if(!$.$&&!$.a.$){var l=$.a.a;return oe(l.E,Fc)?D:V(a(N2,0,c))}else return V(a(N2,0,c))}else return D},Ka(t.F))}),YS=A(function(e,r,n){var t=function(o){var c=a(rr,e,o.cT);if(c.$)return y(o,ie);var i=c.a,u=r(i.aM),$=a(XS,i.aM,u),l=E(i,{aM:u});return y(E(o,{cT:v(Tr,e,l,o.cT)}),v(JS,e,$,u))};return a(Vo,function(o){return E(n,{uA:o})},a(io,t,n.uA))}),QS=s(function(e,r){var n=y(e,r);if(n.a.$===5&&n.b.$===5){var t=n.a.a,o=n.b.a;return oe(Do(t),Do(o))}else return oe(e,r)}),KS=function(e){switch(e.$){case 0:var r=e.b;return Z(r);case 2:var r=e.b;return er(r);case 4:var r=e.a;return r?"true":"false";case 1:var r=e.a;return r;case 3:var n=e.a.aQ,t=e.a.C,o=e.a.a1,c=e.a.aT;return a(Lr,",",a(O,Z,f([c,o,t,n])));default:var i=e.a;return Do(i)}},Z2=s(function(e,r){var n=xn(a(fn,function(t){return t.a9},e));return a(Hr,function(t){var o=t.a,c=t.b,i=a(rr,o,n);if(i.$)return D;var u=i.a;return a(QS,u,c)?D:V(y(o,KS(c)))},a(fn,function(t){return t.a9},r))}),ex=A(function(e,r,n){return Q(a(Z2,e.aH,r),n)}),rx=Ot("writeUrlParams",ro(function(e){var r=e.a,n=e.b;return a(ro,te,f([Wr(r),Wr(n)]))})),ax=s(function(e,r){var n=wc(r.uA),t=e.fH(n.O);return rx(v(ex,e,n.cc,t))}),nx=A(function(e,r,n){var t=function(u){var $=a(Kp,r,u.cc),l=(function(){var d=n.aU;if(d.b){var b=d.a;return v(eo,b,he(function(g){return E(g,{cc:$})}),u.cT)}else return u.cT})();return y(E(u,{cc:$,cT:l}),ie)},o=a(io,t,n.uA),c=o.a,i=E(n,{uA:c});return y(i,a(ax,e,i))}),l$=s(function(e,r){return r}),tx=A(function(e,r,n){if(r.$){var o=r.a,c=a(l$,"Play.Runtime.MaterialLoaded failed",y(e,o));return n}else{var t=r.a;return E(n,{nD:v(Tr,e,t,n.nD)})}}),ox=Y(function(e,r,n,t){var o=function(c){return y(E(c,{cT:v(eo,e,he(a(tx,r,n)),c.cT)}),ie)};return a(Vo,function(c){return E(t,{uA:c})},a(io,o,t.uA))}),cx=f0,v$=function(e){return v(me,s(function(r,n){var t=r.a,o=r.b;return v(Dh,t,o,n)}),Mh(0),e)},ix=Ot("assetsLoadRequest",ro(function(e){return v$(f([y("id",Wr(e.bE)),y("instanceId",Wr(e.gj)),y("kind",Wr(e.bd)),y("mips",ro(cx)(e.dV)),y("url",Wr(e.fG))]))})),Rv=function(e){var r=e;return r},ux=s(function(e,r){var n=Rv(r);return{bE:n.bE,gj:e,bd:n.bd,dV:n.dV,fG:n.fG}}),J2=s(function(e,r){return ix(a(O,ux(e),r))}),qv=f0,fx=Ot("setInstanceMuted",function(e){return v$(f([y("instanceId",Wr(e.gj)),y("muted",qv(e.sS))]))}),$x=A(function(e,r,n){var t=function(o){var c=a(rr,e,o.cT);if(c.$)return y(o,ie);var i=c.a,u=r&&!i.fO,$=E(i,{fO:i.fO||r,pu:r}),l=i.fo?fx({gj:e,sS:!r}):ie,d=u?a(J2,e,i.aA):ie;return y(E(o,{cT:v(Tr,e,$,o.cT)}),ba(f([d,l])))};return a(Vo,function(o){return E(n,{uA:o})},a(io,t,n.uA))}),lx=function(e){return e.bm+e.bn},s$=function(e){var r=e;return r},vx=a(nr,lx,s$),X2=function(e){var r=e.bK,n=e.bC,t=e.bn,o=e.bm,c=(o+t)/2|0,i=o+t-c,u=4;if(o+t<2)return e;if(ce(o,u*t+1)>0){var $=Q(r,Te(a(pt,c,n))),l=a(ao,c,n);return{bC:l,bK:$,bm:c,bn:i}}else if(ce(t,u*o+1)>0){var $=a(ao,c,r),l=Q(n,Te(a(pt,c,r)));return{bC:l,bK:$,bm:c,bn:i}}else return e},sx=function(e){var r=e.bK,n=e.bC,t=y(n,r);if(t.a.b){var i=t.a,u=i.a,$=i.b;return y(V(u),X2({bC:$,bK:e.bK,bm:e.bm-1,bn:e.bn}))}else if(t.b.b){if(t.b.b.b)return y(D,Qf);var o=t.b,c=o.a;return y(V(c),Qf)}else return y(D,Qf)},Y2=a(nr,a(nr,Bo(te),sx),s$),Q2=s(function(e,r){return ce(vx(r),e)>0?a(Q2,e,Y2(r).b):r}),K2=s(function(e,r){var n=Y2(r);if(n.a.$){var c=n.a;return r}else{var t=n.a.a,o=n.b;return ce(t.lg,e)<0?a(K2,e,o):r}}),e3=60,dx=s(function(e,r){var n=r;return e(n)}),bx=s(function(e,r){var n=r;return a(dx,X2,{bC:n.bC,bK:a(M,e,n.bK),bm:n.bm,bn:n.bn+1})}),px=1,mx=s(function(e,r){var n=r,t=n.kg+e,o=t-px;return{kg:t,gG:a(Q2,e3,a(bx,{hB:e,lg:t},a(K2,o,n.gG)))}}),hx=s(function(e,r){return E(r,{de:a(mx,e.hB,r.de)})}),r3=function(e){var r=e.b;return To(r).a},a3=s(function(e,r){var n=r3(e.uA);return E(n,{cc:r.cc,nO:Lc(e.bD)})}),d$={$:2},n3=function(e){var r=e.a;return oe(r,d$)},Gv=function(e){var r=e.a;return r.$===3},_t=function(e){return n3(e)||Gv(e)},t3={$:13},gx=s(function(e,r){return e}),o3="play-scrollport",_x=function(e){var r=A(function(o,c,i){return a(mt,gx(t3),v(Ho,o,c,i))}),n=v(r,o3,e.gz.bF,e.gz.bS),t=a(O,function(o){return v(r,"measure-frame--"+o.rE,o.t2.bF,o.t2.bS)},e.dC);return ba(a(M,n,t))},yx={$:4},Wv=s(function(e,r){return{$:1,a:e,b:r}}),PW=0,c3={$:0},b$={$:1},Fo=function(e){return{$:3,a:e}},SW=1,Wc=s(function(e,r){return{$:0,a:e,b:r}}),Cx={$:2},Px=s(function(e,r){return{bF:e,bM:r}}),Aa=function(e){var r=e.a;return r},p$=s(function(e,r){var n=r.az,t=function(u){return a(fe,0,a(he,function($){return $.dt},a(wa,u,n)))},o=s(function(u,$){e:for(;;){if(ce(u,$)>-1)return u;if(ce(e,t((u+$)/2|0))<1){var l=u,d=(u+$)/2|0;u=l,$=d;continue e}else{var l=((u+$)/2|0)+1,d=$;u=l,$=d;continue e}}}),c=Aa(n),i=a(o,0,c);return i?oe(i,c)?c-1:ce(e-t(i-1),t(i)-e)<1?i-1:i:0}),fu=s(function(e,r){var n=e.a,t=e.b,o=r.az,c=r.gD,i=n?a(fe,c,a(he,function($){return $.dt},a(wa,n-1,o))):c,u=a(fe,c,a(he,function($){return $.dt},a(wa,t,o)));return y(i,u)}),$n={nK:100,oB:24,iB:100,iP:400,iQ:900,o5:4},ca=s(function(e,r){return r/$n.iQ*(e.bM-e.bF)}),$u=A(function(e,r,n){var t=r.a,o=r.b,c=function(T){return a(ca,e,T.hu-T.kJ)},i=a(fu,y(1,Aa(n.az)-2),n),u=i.a,$=i.b,l=a(fu,y(o.cW+1,o.cO-1),n),d=l.a,b=l.b,g=a(fu,y(o.cW,o.cO),n),_=g.a,p=g.b;if(t.$)if(t.a){var j=t.a,P=t.b,L=v(dr,d,$,p+c(P));return y(y(_,o.cW),y(L,a(p$,L,n)))}else{var m=t.a,P=t.b,C=v(dr,u,b,_+c(P));return y(y(C,a(p$,C,n)+1),y(p,o.cO))}else return y(y(_,o.cW),y(p,o.cO))}),An=m9,Sx=Y(function(e,r,n,t){var o=e.nQ,c=e.oD,i=e.oC,u=t.bM-t.bF,$=n-r,l=a(Ge,$,a(Pe,$n.nK,u*a(An,1.002,c))),d=i*.001*l,b=t.bF+o*u-o*l,g=b+l,_=g+d,p=b+d,m=ce(p,r)<0?y(r,r+l):ce(_,n)>0?y(n-l,n):y(p,_),P=m.a,C=m.b;return{bF:P,bM:C}}),i3=s(function(e,r){var n=y(e,r);e:for(;;)switch(n.a.$){case 2:var t=n.a;return b$;case 3:var o=n.a;return Cx;case 4:var c=n.a;return Fp;case 0:var i=n.a.a,u=y(0,Aa(i.az)-1),$=u.a,l=u.b,d=a(fu,y($,l),i),b=d.a,g=d.b;return Fo({ck:D,d0:i,bl:a(Wc,c3,{cO:l-1,cW:1}),a6:a(Px,b,g)});case 1:if(n.b.$===3){var _=n.a.a,p=n.b.a,m=y(0,Aa(p.d0.az)-1),$=m.a,l=m.b,P=a(fu,y($,l),p.d0),C=P.a,j=P.b,L=x(Sx,_,C,j,p.a6);return Fo(E(p,{a6:L}))}else break e;case 5:if(n.b.$===3){var T=n.a.a.fW,p=n.b.a,F=p.bl,q=F.b;return Fo(E(p,{bl:a(Wc,a(Wv,0,{hu:T,kJ:T}),q)}))}else break e;case 6:if(n.b.$===3){var T=n.a.a.fW,p=n.b.a,R=p.bl,q=R.b;return Fo(E(p,{bl:a(Wc,a(Wv,1,{hu:T,kJ:T}),q)}))}else break e;case 7:if(n.b.$===3){var T=n.a.a.fW,p=n.b.a,K=p.bl;if(K.a.$===1){var J=K.a,ue=J.a,ge=J.b,q=K.b;return Fo(E(p,{bl:a(Wc,a(Wv,ue,E(ge,{hu:T})),q)}))}else return r}else break e;case 8:if(n.b.$===3){var De=n.a,p=n.b.a,Le=p.bl;if(Le.a.$===1){var ar=Le.a,re=v($u,p.a6,p.bl,p.d0),Ue=re.a,Xe=Ue.b,Ne=re.b,Cr=Ne.b;return Fo(E(p,{bl:a(Wc,c3,{cO:Cr,cW:Xe})}))}else return r}else break e;default:if(n.b.$===3){var qe=n.a.a,p=n.b.a;return Fo(E(p,{ck:qe}))}else break e}return r}),xx=i3(yx),Ov={$:2},jx=function(e){return{$:1,a:e}},m$=function(e){return{$:0,a:e}},u3=function(e){return{$:1,a:e}},uo=function(e){return{$:0,a:e}},lu=12,h$=72,fo=function(e){switch(e){case 0:return{pA:m$(h$),pB:uo(lu)};case 1:return{pA:m$(h$+44),pB:uo(lu+44)};case 2:return{pA:u3(12),pB:uo(lu)};case 3:return{pA:Ov,pB:uo(100)};case 4:return{pA:Ov,pB:jx(40)};case 5:return{pA:m$(h$),pB:uo(lu)};case 6:return{pA:Ov,pB:uo(80)};default:return{pA:m$(h$),pB:uo(lu)}}},Nv=function(e){return e.$===3},kx=s(function(e,r){if(e.$)return r;var n=e.a;return E(r,{aK:a(M,n,a(gr,Lf(n),r.aK))})}),f3=function(e){return{pA:e.fp.pA+.5*e.$7.lq,pB:-e.fp.pB+.5*e.$7.jM}},$3=s(function(e,r){var n=f3(e);return{pA:r.hq.pA+(n.pA-r.hP.pA),pB:r.hq.pB+(n.pB-r.hP.pB)}}),l3=s(function(e,r){var n="-titlebar",t="draggable-panel-",o="-no-drag",c=function(i){e:for(;;)if(i.b){var u=i.a,$=i.b;if(a(On,t,u)&&a(tp,o,u)){if(e.je)return D;var l=$;i=l;continue e}else{if(a(On,t,u)&&a($v,n,u))return V(a(Bp,nn(n),a(on,nn(t),u)));var l=$;i=l;continue e}}else return D};return c(r)}),wx=function(e){return a(l3,{je:!0},e)},Lx=function(e){return a(l3,{je:!1},e)},Ax=s(function(e,r){switch(r.$){case 0:var n=r.a;return n;case 1:var n=r.a;return e-n;default:return e/2}}),Tx=s(function(e,r){if(r.$){var n=r.a;return e-n}else{var n=r.a;return n}}),g$=12,v3=A(function(e,r,n){var t=g$-r,o=e-g$-r;return ce(o,t)<1?t:v(dr,t,o,n)}),Mx=A(function(e,r,n){return{pA:v(v3,e.$7.lq,a(Ax,e.$7.lq,r.pA),n.pA),pB:v(v3,e.$7.jM,a(Tx,e.$7.jM,r.pB),n.pB)}}),Dx=A(function(e,r,n){return a(fe,e,a(he,Uf,Mr(a(gr,function(t){var o=t.a;return oe(o,r)},n.cV))))}),zx={pA:0,pB:0},s3=Y(function(e,r,n,t){return v(Mx,e,r,v(Dx,zx,n,t))}),Bx=A(function(e,r,n){return a(M,y(e,r),a(gr,function(t){var o=t.a;return!oe(o,e)},n))}),d3=A(function(e,r,n){var t=n,o=t.eF;if(o.$===1)if(e.fp.jy){var c=function(_){return a(oa,function(p){return a(he,Mo(p),r(p))},a(oa,t.r0,_(e.fp.rf)))},i=a(kx,a(he,Pn,c(Lx)),t),u=c(wx);if(u.$)return i;var $=u.a,l=$.a,d=$.b;return E(i,{eF:V({hq:x(s3,e,d,l,i),hP:f3(e),bE:l})})}else return n;else{var b=o.a;if(e.fp.sf)return n;var g=a($3,e,b);return E(t,{eF:D,cV:v(Bx,b.bE,g,t.cV)})}}),Vx=s(function(e,r){var n=a(oa,function(c){var i=c.kS-e.hB;return i<=0?D:V(E(c,{kS:i}))},r.eq),t=v(d3,e,a(nr,V,fo),r.f),o=Nv(r.aL)&&!a(Ir,3,t)?xx(r.aL):r.aL;return E(r,{eq:n,f:t,aL:o})}),vu=12,b3=function(e){return{pA:u3(vu),pB:uo(vu+e*40)}},Ex=s(function(e,r){return a(he,b3,a(Of,function(n){return oe(n.bE,r)},e))}),p3=function(e){return te},_$=s(function(e,r){if(r.$===-2)return Nn;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;return U(Ve,n,t,a(e,t,o),a(_$,e,c),a(_$,e,i))}),Hx=s(function(e,r){var n=xn(a(O,function(i){return y(Rv(i).bE,i)},r)),t=a(_$,s(function(i,u){return Rv(u).bd}),n),o=a(Hr,function(i){var u=i.a,$=i.b;return a(Jf,u,e)?D:V($)},Ka(n)),c=a(Hr,function(i){var u=i.a,$=i.b;return a(Jf,u,n)?D:V({bE:u,bd:$})},Ka(e));return{ss:t,uH:o,uI:c}}),Ix=function(e){return e.fo&&!e.pu},Fx=Ot("assetsUnload",ro(function(e){return v$(f([y("id",Wr(e.bE)),y("instanceId",Wr(e.gj)),y("kind",Wr(e.bd))]))})),Ux=s(function(e,r){return{bE:r.bE,gj:e,bd:r.bd}}),Rx=s(function(e,r){return Fx(a(O,Ux(e),r))}),qx=c0(function(e,r,n,t,o,c,i,u,$){var l=a(rr,u,$.cT);if(l.$)return $;var d=l.a;if(Ix(d))return $;var b=d.hl+r.g.hB,g=tu({hl:b,cc:d.cc,aG:o,bD:V(n),bE:d.bE,g:a(Uv,c,r.g),nD:d.nD,nO:Lc(n),tg:t$(d),aM:d.aM,cB:t,pu:d.pu,pD:o$(n)}),_=v(p3,"play:onTick",v(e.a7.bi,g,r.O,Ln(n)),d.bG),p=_.a,m=_.b,P=_.c,C=v(hv,oe(i,V(u)),m,{cS:$.ci,jQ:d.cc}),j=x(e.aA,g,r.O,Ln(n),p),L=a(Hx,d.hv,j),T=Ye(L.uH)?ie:a(J2,u,L.uH),F=Ye(L.uI)?ie:a(Rx,u,L.uI),q=x(e.a7.cq,g,r.O,Ln(n),p),R=v(d3,g,Ex(q),d.ip);return E($,{cK:a(M,T,a(M,F,a(M,a(Kt,zo(u),C.hm),$.cK))),cP:Q($.cP,P),ci:C.cS,cT:v(Tr,u,E(d,{hl:b,cc:C.jQ,hv:L.ss,bG:p,ip:R}),$.cT)})}),Gx=function(e){var r=e.c6;if(r.$){var t=e.ju;if(t.$)return D;var o=t.a;return a(Ki,o,e.aU)?e.ju:D}else{var n=r.a;return V(n)}},m3=function(e){return{$:3,a:e}},h3=function(e){var r=e.b;return To(r).a.hl},Wx=function(e){var r=e;return E(r,{aR:a(Ge,r.ba-1,r.aR+1)})},Ox=function(e){if(e.$){var n=e.a;return nu(E(n,{aR:a(Ge,Aa(n.eS)-1,n.aR+1)}))}else{var r=e.a;return Ac(Wx(r))}},Nx=function(e){var r=e;return r.aR},g3=function(e){if(e.$){var n=e.a;return n.aR}else{var r=e.a;return Nx(r)}},Zx=function(e){var r=e;return r.ba},_3=function(e){if(e.$){var n=e.a;return Aa(n.eS)}else{var r=e.a;return Zx(r)}},Jx=function(e){return oe(g3(e),_3(e)-1)},Xx=function(e){var r=e.a,n=e.b;return Jx(n)?D:V(a(Ia,r,Ox(n)))},Zv=O8,y3=F8,su=Y(function(e,r,n,t){var o=Ao&r>>>e;if(ce(o,Wn(t))>-1){if(e===5)return a(Zv,hc(n),t);var c=gc(x(su,e-Cn,r,n,Co));return a(Zv,c,t)}else{var i=a(Qi,o,t);if(i.$){var c=gc(x(su,e-Cn,r,n,y3(i)));return v(Gc,o,c,t)}else{var u=i.a,c=gc(x(su,e-Cn,r,n,u));return v(Gc,o,c,t)}}}),Jv=s(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d,i=Wn(c),u=Wn(e),$=n+(u-i);if(oe(u,Vr)){var l=ce($>>>Cn,1<<t)>0;if(l){var d=t+Cn,b=x(su,d,n,e,y3(gc(o)));return x(Xt,$,d,b,Co)}else return x(Xt,$,t,x(su,t,n,e,o),Co)}else return x(Xt,$,t,o,e)}),Yx=s(function(e,r){var n=r.d;return a(Jv,a(Zv,e,n),r)}),Qx=s(function(e,r){var n=r;return ce(n.ba,n.cJ)<0?E(n,{ba:n.ba+1,aR:n.ba,eS:v(i$,a(ja,n.cJ,n.dq+n.ba),e,n.eS)}):E(n,{aR:n.cJ-1,eS:v(i$,n.dq,e,n.eS),dq:a(ja,n.cJ,n.dq+1)})}),Kx=s(function(e,r){if(r.$){var t=r.a;return nu(E(t,{aR:Aa(t.eS),eS:a(Yx,e,t.eS)}))}else{var n=r.a;return Ac(a(Qx,e,n))}}),C3=s(function(e,r){return E(r,{dC:e.dC,hl:r.hl+e.hB,ey:e.ey,eA:e.eA,eB:e.eB,hB:e.hB,eO:e.eO,rw:e.rw,hX:e.hX,gz:e.gz,tw:e.tw,fp:e.fp,$7:e.$7,fs:e.fs,eb:e.eb,fJ:e.fJ})}),ej=A(function(e,r,n){var t=n.a,o=n.b;switch(t.$){case 2:return y(n,ie);case 3:var c=t.a.lb;return y((ce(c+r.hB,h3(n))>0?a(We,Xx,fe(a(Ia,d$,o))):te)(a(Ia,m3({lb:c+r.hB}),o)),ie);case 1:var i=To(o),l=i.a,d=i.b,b=a(C3,r,l),u=a(e,b,d),_=u.a,p=u.b;return y(a(Ia,_v,a(Kx,y(b,_),o)),p);default:var $=To(o),l=$.a,d=$.b,b=a(C3,r,l),g=a(e,b,d),_=g.a,p=g.b;return y(a(Ia,au,a(E2,y(b,_),o)),p)}}),rj=A(function(e,r,n){var t=x2({kw:r.tl,kO:zv(n.aU),_:r.tw,u5:r.$7}),o=Gx({c6:t.c6,ju:n.aG,aU:n.aU}),c=a(hx,r,n.bD),i=s(function(_,p){var m=t,P=E(p,{g:r}),C=Fv(c),j=v(me,ra(qx,e,P,c,m,o,C,Mr(n.aU)),{cK:S,cP:S,ci:P.cc,cT:P.cT},n.aU),L=v(If,e,j.cP,P.O),T=L.a,F=L.b;return y(E(P,{cc:j.ci,cT:j.cT,O:T}),ba(a(M,F,j.cK)))}),u=v(ej,i,r,n.uA),$=u.a,l=u.b,d=a(Vx,a(a3,E(n,{uA:$}),wc($)),c),b=(function(){var _=d.c2;return E(d,{c2:E(_,{rv:D})})})(),g=_t($)?_x(r3($)):ie;return y(E(n,{aG:o,bD:b,uA:$}),ba(f([l,g])))}),xW=1,jW=0,du=function(e){var r=e;return E(r,{aV:!1})},aj=function(e){var r=e;return E(r,{bj:du(r.bj)})},nj=function(e){var r=e;return E(r,{bj:du(r.bj)})},P3=function(e){return{$:14,a:e}},S3="play-command-palette",Xv={fY:S3,fa:320,kI:"Type a command\u2026",v:P3,lq:{sH:400,u1:50}},x3=3,tj=s(function(e,r){return!Nv(e)&&Nv(r)}),oj=function(e){switch(e){case 0:return 1;case 1:return 2;default:return 0}},cj=O7("focus"),j3=function(e){return e.fY+"-search"},bu=s(function(e,r){var n=r,t=a(fe,0,a(oa,function(c){return a(Nf,c,n.aS)},n.eZ)),o=a(t2,e,t);return y(E(n,{aV:!0,b1:o,av:t}),ba(f([a(mt,function(c){return e.v(La)},cj(j3(e))),a(mt,function(c){return e.v(La)},v(Ho,Eo(e),0,o))])))}),ij=s(function(e,r){var n=r,t=a(bu,zc(e),a(eu,V(n.cL),n.bj)),o=t.a,c=t.b;return y(E(n,{bj:o}),c)}),uj=A(function(e,r,n){var t=n,o=a(bu,Bc(e),a(eu,bv(r),t.bj)),c=o.a,i=o.b;return y(E(t,{bj:c}),i)}),fj=Ev,Yv={$:2},k3=function(e){return{$:1,a:e}},$j={$:3},Qv=function(e){return{$:0,a:e}},Kv=s(function(e,r){return e<0?D:Mr(a(pt,e,r))}),lj=s(function(e,r){e:for(;;){var n=y(e,r);if(n.a.b)if(n.b.b){var t=n.a,o=t.a,c=t.b,i=n.b,u=i.a,$=i.b;if(oe(o,u)){var l=c,d=$;e=l,r=d;continue e}else{var l=e,d=$;e=l,r=d;continue e}}else return!1;else return!0}}),vj=Y(function(e,r,n,t){return{lP:r,mG:e,ol:n,om:t}}),sj=2,dj=f9,bj=12,pj=-3,mj=-1,hj=-1,es=16,Uo=-a(An,2,30),gj=Ae(function(e,r,n,t,o){var c=U(dj,vj,r,n,t,o),i={f$:S,e4:0,hY:Uo,hZ:Uo,h_:Uo,gs:S},u=e.m0?hj:pj,$=s(function(d,b){var g=d.om,_=d.ol,p=d.lP,m=d.mG,P=oe(m,e.ob)?e.m$?b.e4*mj+es+p*sj:b.e4?a(Pe,b.h_+es+p,b.hZ+es+bj):Uo:Uo,C=a(Pe,P,b.hY+u);return{f$:a(M,P,b.f$),e4:b.e4+1,hY:C,hZ:_,h_:g,gs:a(M,C,b.gs)}}),l=v(me,$,i,c);return y(Te(l.f$),Te(l.gs))}),_j=function(e){return v(me,s(function(r,n){return r}),Uo,e)},yj=A(function(e,r,n){e:for(;;){if(r<=0)return e;var t=a(M,n,e),o=r-1,c=n;e=t,r=o,n=c;continue e}}),Cj=s(function(e,r){return v(yj,S,e,r)}),Pj=A(function(e,r,n){var t=Ar(e),o=Ar(r),c=a(Cj,o,Uo),i=a(yn,Mo,e),u=v(me,s(function(l,d){var b=l.a,g=l.b,_=d.a,p=d.b;return U(gj,{m$:!b,m0:oe(b,t-1),ob:g},r,n,_,p)}),y(c,c),i),$=u.b;return _j($)}),Sj=s(function(e,r){var n=r;if(Lo(e))return V(0);var t=a(O,iv,_c(e));return a(lj,t,n.j2)?V(v(Pj,t,n.j2,n.lQ)):D}),rs=function(e){return{$:8,a:e}},w3=s(function(e,r){var n=co*r.av,t=n-r.b1,o=r.b1+e.fa-(n+co);if(t<0)return a(mt,function(i){return e.v(rs(n))},v(Ho,Eo(e),0,n));if(o<0){var c=r.b1-o;return a(mt,function(i){return e.v(rs(c))},v(Ho,Eo(e),0,c))}else return ie}),xj=l9,as=A(function(e,r,n){var t=n;switch(r.$){case 0:var o=r.a,c=Lo(o)?a(O,Pn,t.it):a(O,Uf,a(xj,s(function(P,C){var j=P.a,L=C.a;return a(O0,L,j)}),a(Hr,function(P){var C=P.a,j=P.b;return a(he,function(L){return y(L,C)},a(Sj,o,j))},t.it)));return H(E(t,{aS:c,b1:0,iG:o,av:0}),a(mt,function(P){return e.v(La)},v(Ho,Eo(e),0,0)),a(he,Qv,Mr(c)));case 1:var _=a(Pe,0,t.av-1),i=E(t,{av:_});return H(i,a(w3,e,i),a(he,Qv,a(Kv,_,t.aS)));case 2:var _=a(Ge,Ar(t.aS)-1,t.av+1),i=E(t,{av:_});return H(i,a(w3,e,i),a(he,Qv,a(Kv,_,t.aS)));case 3:var u=a(Kv,t.av,t.aS);if(u.$===1)return H(E(t,{aV:!1}),ie,V(Yv));var $=u.a;return H(E(t,{eZ:V($),aV:!1}),ie,V(k3($)));case 4:return H(E(t,{aV:!1}),ie,V(Yv));case 10:var l=a(bu,e,t),d=l.a,b=l.b;return H(d,b,V($j));case 5:var g=r.a;return H(E(t,{eZ:V(g),aV:!1}),ie,V(k3(g)));case 6:var g=r.a,_=a(fe,t.av,a(Nf,g,t.aS));return H(E(t,{av:_}),ie,D);case 7:return H(E(t,{aV:!1}),ie,V(Yv));case 8:var p=r.a;return H(E(t,{b1:p}),ie,D);case 9:var m=r.a;return H(t,a(mt,function(P){return e.v(La)},v(Ho,Eo(e),0,t.b1+m)),D);default:return H(t,ie,D)}}),jj=A(function(e,r,n){var t=n;if(r.$===1){var o=r.a;return y(E(t,{dY:o}),ie)}else{var c=r.a,i=v(as,zc(e),c,t.bj),u=i.a,$=i.b,l=i.c,d=(function(){e:for(;;){if(l.$)break e;switch(l.a.$){case 1:var b=l.a.a;return b;case 0:var b=l.a.a;return b;default:break e}}return t.cL})();return y(E(t,{cL:d,bj:u}),$)}}),kj=function(e){var r=e;return Ye(r.q)?qp(e):Rp(e)},wj=function(e){var r=e;return 1+Ar(r.o)+Ar(r.q)},Lj=function(e){return a(Yf,wj(e)-1,e)},Aj=function(e){var r=e,n=r.o;if(n.b){var t=n.a,o=n.b;return{q:a(M,r.fZ,r.q),o,fZ:t}}else return r},Tj=function(e){var r=e;return Ye(r.o)?Lj(e):Aj(e)},L3=A(function(e,r,n){var t=e(n.c1);return H(E(n,{c1:t}),a(yv,Do(t),r),ie)}),Mj=Y(function(e,r,n,t){var o=t;switch(r.$){case 1:var c=r.a,i=a(fe,o.c1,a(Gp,c,o.c1));return H(E(o,{c1:i}),a(yv,c,n),ie);case 2:return v(L3,Tj,n,o);case 3:return v(L3,kj,n,o);default:var u=r.a,$=v(as,Bc(e),u,o.bj),l=$.a,d=$.b,b=$.c,g=(function(){if(b.$)return n;switch(b.a.$){case 1:var _=b.a.a;return a(Cv,_,n);case 0:var _=b.a.a;return a(Cv,_,n);case 2:var p=b.a;return n;default:var m=b.a;return n}})();return H(E(o,{bj:l}),g,d)}}),Ta=function(e){return{$:1,a:e}},ns=function(e){return{$:2,a:e}},pu=function(e){return{$:0,a:e}},mu={$:1},A3={$:3},Dj=500,zj=200,Bj=s(function(e,r){var n=y(r,e);if(n.a.$)switch(n.b.$){case 0:var m=n.a.a,$=n.b,c=$.a,i=$.b,l=(function(){var q=m.V;switch(q.$){case 0:return pu(0);case 1:return mu;case 2:return mu;default:return A3}})();return Ta({bv:i,eE:c.eE,jV:c.jV,V:l,oJ:c.oJ});case 1:var m=n.a.a,d=n.b,b=m.V;switch(b.$){case 0:return ru;case 1:return Ta(E(m,{V:ns(0)}));case 2:return Ta(E(m,{V:ns(0)}));default:return ru}case 2:var m=n.a.a,g=n.b;return Ta(E(m,{V:A3}));case 3:var m=n.a.a,_=n.b,p=m.V;switch(p.$){case 0:return Ta(E(m,{V:pu(0)}));case 1:return Ta(E(m,{V:mu}));case 2:return Ta(E(m,{V:mu}));default:return Ta(E(m,{V:pu(0)}))}default:var m=n.a.a,P=n.b.a,C=m.V;switch(C.$){case 0:var j=C.a,L=j+P;return ce(L,Dj)>0?Ta(E(m,{V:mu})):Ta(E(m,{V:pu(L)}));case 2:var j=C.a,L=j+P;return ce(L,zj)>0?ru:Ta(E(m,{V:ns(L)}));case 1:return Ta(m);default:return Ta(m)}}else if(n.b.$){var u=n.a;return ru}else{var t=n.a,o=n.b,c=o.a,i=o.b;return Ta({bv:i,eE:c.eE,jV:c.jV,V:pu(0),oJ:c.oJ})}}),Vj=s(function(e,r){var n=r;return a(Bj,e,n)}),Ej=A(function(e,r,n){var t=e.qz,o=e.gI;switch(r.$){case 0:var cr=r.a;if(o.cj){var c=x(Mj,Vc,cr,n.e,n.P),i=c.a,m=c.b,u=c.c;return H(E(n,{P:i,e:m}),u,D)}else return H(n,ie,D);case 1:var cr=r.a;if(o.dJ){var $=v(jj,e$,cr,n.Q),Ue=$.a,l=$.b;return H(E(n,{Q:Ue}),l,D)}else return H(n,ie,D);case 2:var cr=r.a;return H(E(n,{c_:a(Vj,cr,n.c_)}),ie,D);case 3:var cr=r.a,d=n.aL,b=a(i3,cr,d),g=a(tj,d,b),_=g?a(oo,lv(3),n.f):n.f;return H(E(n,{f:_,aL:b}),ie,D);case 4:if(o.cj){var m=Pv(n.e),p=v(gv,Vc,m,n.P),ue=p.a,u=p.b;return H(E(n,{P:ue,e:m}),u,D)}else return H(n,ie,D);case 5:var m=r.a;if(!o.cj||oe(m,n.e))return H(n,ie,D);var P=v(gv,Vc,m,n.P),ue=P.a,u=P.b;return H(E(n,{P:ue,e:m}),u,D);case 6:var cr=r.a,C=a(Ir,6,n.f),j=a(Ir,5,n.f),L=a(oo,cr,n.f),T=a(Ir,6,L),F=a(Ir,5,L),q=a(Ir,7,n.f),R=a(Ir,7,L),K=n.c2,J=!j&&F?v(uj,Vc,n.e,n.P):y(j&&!F?nj(n.P):n.P,ie),ue=J.a,ge=J.b,De=(function(){if(C&&!T)return y(E(K,{N:du(K.N)}),ie);if(!C&&T){var Fn=a(bu,Xv,K.N),sr=Fn.a,$t=Fn.b;return y(E(K,{N:sr}),$t)}else return y(K,ie)})(),Le=De.a,ar=De.b,re=!q&&R?a(ij,e$,n.Q):y(q&&!R?aj(n.Q):n.Q,ie),Ue=re.a,Xe=re.b;return H(E(n,{c2:Le,Q:Ue,f:L,P:ue}),ba(f([ar,ge,Xe])),D);case 7:return H(E(n,{pD:!n.pD}),ie,D);case 8:return H(E(n,{bL:!n.bL}),ie,D);case 9:var Ne=r.a;return H(E(n,{eq:V({bv:Ne,$8:!t,kS:x3})}),ie,t?V(0):D);case 10:return H(n,ie,V(1));case 11:var Cr=r.a;return!o.dK||oe(Cr,n.nO)?H(n,ie,D):H(E(n,{nO:Cr}),ie,D);case 12:return o.dK?H(E(n,{nO:oj(n.nO)}),ie,D):H(n,ie,D);case 13:if(a(iu,o,n.c2.N)){var C=a(Ir,6,n.f),L=a(oo,fj(6),n.f),K=n.c2,qe=C?y(du(K.N),ie):a(bu,Xv,K.N),i=qe.a,u=qe.b;return H(E(n,{c2:E(K,{N:i}),f:L}),u,D)}else return H(n,ie,D);case 14:var cr=r.a;if(a(iu,o,n.c2.N)){var K=n.c2,pr=v(as,Xv,cr,n.c2.N),i=pr.a,u=pr.b,Nr=pr.c,Ea=(function(){e:for(;;){if(Nr.$)break e;switch(Nr.a.$){case 1:return!0;case 2:var lt=Nr.a;return!0;default:break e}}return!1})(),Na=Ea?a(oo,q2(6),n.f):n.f,Le=(function(){if(!Nr.$&&Nr.a.$===1){var lt=Nr.a.a;return E(K,{N:du(i),rv:V(y(lt.iJ,lt.jV))})}else return E(K,{N:i})})();return H(E(n,{c2:Le,f:Na}),u,D)}else return H(n,ie,D);default:return H(n,ie,D)}}),Hj=s(function(e,r){var n=r;return E(n,{aR:v(dr,0,n.ba-1,e)})}),Ij=s(function(e,r){if(r.$){var t=r.a;return nu(E(t,{aR:v(dr,0,Aa(t.eS)-1,e)}))}else{var n=r.a;return Ac(a(Hj,e,n))}}),Fj=s(function(e,r){var n=r.b;return a(Ia,d$,a(Ij,e,n))}),Uj=function(e){var r=e.b;return a(Ia,d$,r)},Rj=function(e){var r=e.b;return a(Ia,m3({lb:h3(e)}),r)},qj=s(function(e,r){switch(e.$){case 1:return Uj(r);case 2:return f2(r);case 3:return Rj(r);default:var n=e.a;return a(Fj,n,r)}}),Gj=A(function(e,r,n){switch(r.$){case 0:var t=r.a;return v(rj,e,t,n);case 1:var o=r.a,c=r.b;return x(MS,e,o,c,n);case 2:var d=r.a,i=r.b;return v(xS,d,i,n);case 3:var u=r.a;return v(yS,e,f([u]),n);case 4:var d=r.a,$=r.b;return v($x,d,$,n);case 5:var d=r.a,l=r.b;return v(YS,d,l,n);case 6:return y(n,ie);case 7:var d=r.a,b=r.b,g=r.c;return x(ox,d,b,g,n);case 8:return y(E(n,{hr:D}),ie);case 9:var _=r.a,p=wc(n.uA).cc,m=!Ye(a(Z2,e.aH,p)),P=v(Ej,{qz:m,gI:e.bD},_,n.bD),C=P.a,j=P.b,L=P.c,T=v(SS,e,L,E(n,{bD:C})),F=T.a,q=T.b;return y(F,ba(f([a(Kt,Hf,j),q])));case 10:var R=r.a;return y(E(n,{uA:a(qj,R,n.uA)}),ie);case 11:return P2(n.bD)?y(E(n,{bD:DS(n.bD),uA:zS(n.uA)}),ie):y(E(n,{bD:r2(n.bD)}),ie);case 12:var K=r.a;return v(nx,e,K,n);default:return y(n,ie)}}),Wj=Ot("setLocalStorage",function(e){return v$(f([y("key",Wr(e.jT)),y("value",Wr(e.uZ))]))}),Oj=s(function(e,r){var n=r.a,t=r.b,o=a(Pp,e,n),c=a(Hr,function(i){var u=i.a,$=i.b;return oe(a(to,u,n.gl),V($))?D:V(Wj({jT:u,uZ:$}))},o);return Ye(c)?y(n,t):y(E(n,{gl:o}),ba(a(M,t,c)))}),Nj=A(function(e,r,n){return a(Oj,e,v(Gj,e,r,n))}),Zj=function(e){return{$:12,a:e}},Jj={$:8},T3=kn,M3=xa("button"),Oc=xa("code"),Xj=xa("li"),y$=xa("p"),fr=Mf,Yj=xa("ul"),Qj=function(e){if(e.$){var r=e.a;return a(br,f([a(I,"margin-top","0.4rem")]),f([a(y$,f([a(I,"margin","0 0 0.25rem 0")]),f([fr("Two or more instances share the same id:")])),a(Yj,f([a(I,"margin","0 0 0.5rem 0"),a(I,"padding-left","1.25rem")]),a(O,function(n){return a(Xj,S,f([a(Oc,S,f([fr(n)]))]))},r)),a(y$,f([a(I,"margin","0")]),f([fr("Each "),a(Oc,S,f([fr("Play.instance")])),fr(" needs a unique "),a(Oc,S,f([fr("id")])),fr(" \u2014 the runtime keys per-instance state, asset registries, and DOM nodes by it.")]))]))}else return a(br,f([a(I,"margin-top","0.4rem")]),f([a(y$,f([a(I,"margin","0")]),f([a(Oc,S,f([fr("Play.multipage")])),fr(" was called with an empty "),a(Oc,S,f([fr("instances")])),fr(" list. Add at least one "),a(Oc,S,f([fr("Play.instance { ... }")])),fr(" to the list.")]))]))},Kj=xa("details"),D3=function(e){return{$:0,a:e}},C$=Fd,ts=s(function(e,r){return a(C$,e,D3(r))}),z3=function(e){return a(ts,"click",ae(e))},ek=xa("strong"),rk=xa("summary"),ak=function(e){return a(br,f([a(I,"position","fixed"),a(I,"top","1rem"),a(I,"left","50%"),a(I,"transform","translateX(-50%)"),a(I,"max-width","min(40rem, calc(100vw - 2rem))"),a(I,"padding","1rem 2.75rem 1rem 1.25rem"),a(I,"background","#fff5f5"),a(I,"color","#742a2a"),a(I,"border","1px solid #fc8181"),a(I,"border-radius","0.5rem"),a(I,"box-shadow","0 4px 24px rgba(0, 0, 0, 0.15)"),a(I,"font-family","system-ui, -apple-system, sans-serif"),a(I,"font-size","0.95rem"),a(I,"line-height","1.5"),a(I,"z-index","2147483647")]),f([a(ek,f([a(I,"display","block"),a(I,"color","#c53030"),a(I,"margin-bottom","0.35rem")]),f([fr("This page has a configuration problem.")])),a(y$,f([a(I,"margin","0 0 0.5rem 0")]),f([fr("Please notify the page author so they can fix it.")])),a(Kj,f([a(I,"margin-top","0.5rem"),a(I,"color","#742a2a"),a(I,"font-size","0.88rem")]),f([a(rk,f([a(I,"cursor","pointer"),a(I,"user-select","none")]),f([fr("Technical detail (for the developer)")])),Qj(e)])),a(M3,f([z3(Jj),a(T3,"aria-label","Dismiss"),a(I,"position","absolute"),a(I,"top","0.5rem"),a(I,"right","0.5rem"),a(I,"width","1.75rem"),a(I,"height","1.75rem"),a(I,"padding","0"),a(I,"border","none"),a(I,"background","transparent"),a(I,"color","#742a2a"),a(I,"cursor","pointer"),a(I,"font-size","1.4rem"),a(I,"line-height","1"),a(I,"border-radius","0.25rem")]),f([fr("\xD7")]))]))},nk=function(e){switch(e){case 0:return 44;case 1:return 40;default:return 24}},tk=function(e){var r=e;return nk(r.cL.aC)},ok=function(e){return tk(e.Q)},os="scrollbar-muted",B3=s(function(e,r){var n=pe(a(Ee,function(c){return c.jh},r)),t=pe(a(Ee,function(c){return c.i0},r)),o=pe(a(Ee,function(c){return c.bt},r));return v(jn,"style",S,f([$e(`
/* Firefox + recent standards-compliant browsers */
`+(e+(`* {
  scrollbar-width: thin;
  scrollbar-color: `+(o+(` transparent;
}
`+(e+("."+(os+(` {
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
`+(e+("."+(os+(`::-webkit-scrollbar-thumb {
  background-color: `+(n+(`;
}
`+(e+("."+(os+(`::-webkit-scrollbar-thumb:hover {
  background-color: `+(t+`;
}
`))))))))))))))))))))))))))))))))))))]))}),ck=function(e){return a(B3,"",e)},V3=s(function(e,r){return a(C0,e,Wr(r))}),E3=V3("id"),ik=A(function(e,r,n){return v(Tr,e,{fo:r.fo,pu:r.pu},n)}),H3=f7,hu=H3,I3=A(function(e,r,n){return{$:2,a:e,b:r,c:n}}),uk=Y(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),F3=Y(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),yt=A(function(e,r,n){return{$:0,a:e,b:r,c:n}}),fk=h7,P$=s(function(e,r){var n=r.a,t=r.b,o=r.c;return v(yt,a(fk,e,n),t,o)}),gu=s(function(e,r){switch(r.$){case 0:var t=r.a,o=r.b,c=r.c;return v(Fb,t,a(O,P$(e),o),a(O,gu(e),c));case 1:var n=r.a,t=r.b,o=r.c,c=r.d;return x(F3,n,t,a(O,P$(e),o),a(O,gu(e),c));case 2:var t=r.a,o=r.b,c=r.c;return v(I3,t,a(O,P$(e),o),a(O,function(u){var $=u.a,l=u.b;return y($,a(gu,e,l))},c));case 3:var n=r.a,t=r.b,o=r.c,c=r.d;return x(uk,n,t,a(O,P$(e),o),a(O,function(u){var $=u.a,l=u.b;return y($,a(gu,e,l))},c));default:var i=r.a;return Tf(a(H3,e,i))}}),_u=gu,X=jn("div"),U3=s(function(e,r){return v(yt,a(K0,e,r),!1,"")}),Ct=s(function(e,r){return a(U3,e,Wr(r))}),$o=Ct("id"),$k=function(e){return Q(S2,e)},R3=function(e){return{$:0,a:e}},kW=te,B=s(function(e,r){return R3(e+(":"+r))}),be=s(function(e,r){return a(B,e,r.uZ)}),ia=be("cursor"),lk=function(e){var r=e;return a(he,function(n){return n.bE},r.eF)},cs=s(function(e,r){return!a(qf,a(nr,pv,e),r)}),vk=s(function(e,r){var n=r.a,t=r.b;switch(e.$){case 0:var o=e.a,$=o.c;return Ye($)?y(n,t):y(n,a(M,e,t));case 1:var c=e.b;return a(cs,function(d){var b=d.c;return Ye(b)},c)?y(n,t):y(n,a(M,e,t));case 2:var i=e.b;return Ye(i)?y(n,t):y(n,a(M,e,t));case 3:return y(n,a(M,e,t));case 4:var $=e.a;return Ye($)?y(n,t):y(n,a(M,e,t));case 5:var $=e.a;return Ye($)?y(n,t):y(n,a(M,e,t));case 6:var u=e.a;return Lo(u.qN)?y(n,t):y(v(Tr,u.sT,u.qN,n),t);case 7:var $=e.a;return Ye($)?y(n,t):y(n,a(M,e,t));case 8:var $=e.a;return Ye($)?y(n,t):y(n,a(M,e,t));default:var l=e.a;return a(cs,function(d){var b=d.b;return Ye(b)},l)?y(n,t):y(n,a(M,e,t))}}),q3=function(e){return{$:6,a:e}},sk=s(function(e,r){return a(tv,a(O,function(n){var t=n.a,o=n.b;return q3({qN:o,sT:t})},Ka(e)),r)}),dk=function(e){var r=v(cn,vk,y(Ie,S),e),n=r.a,t=r.b;return a(sk,n,t)},bk=function(e){var r=e.qO,n=e.nR,t=e.mO,o=e.l0;return{l0:o,qO:dk(r),mO:t,nR:n}},pk=function(e){return a(fe,"",a(he,function(r){return'@charset "'+(r+'"')},e))},mk=Y(function(e,r,n,t){e:for(;;)if(n.b)if(n.b.b){var o=n.a,c=n.b,i=e,u=r,$=c,l=t+(e(o)+(r+""));e=i,r=u,n=$,t=l;continue e}else{var o=n.a;return t+(e(o)+"")}else return t}),ma=A(function(e,r,n){return x(mk,e,r,n,"")}),G3=function(e){return"("+(e.mr+(a(fe,"",a(he,n_(": "),e.uZ))+")"))},hk=function(e){switch(e){case 0:return"print";case 1:return"screen";default:return"speech"}},W3=function(e){var r=A(function(c,i,u){return c+(" "+a(Lr," and ",a(M,hk(i),a(O,G3,u))))});switch(e.$){case 0:var t=e.a;return v(ma,G3," and ",t);case 1:var n=e.a,t=e.b;return v(r,"only",n,t);case 2:var n=e.a,t=e.b;return v(r,"not",n,t);default:var o=e.a;return o}},gk=s(function(e,r){return'@import "'+(e+(W3(r)+'"'))}),_k=function(e){var r=e.a,n=e.b;return v(ma,gk(r),`
`,n)},yk=function(e){var r=e.a,n=e.b;return"@namespace "+(r+('"'+(n+'"')))},Ck=function(e){return v(ma,function(r){var n=r;return n+";"},"",e)},Pk=I9,Sk=function(e){var r=e;return"::"+r},xk=function(e){switch(e){case 0:return"+";case 1:return"~";case 2:return">";default:return""}},is=function(e){switch(e.$){case 0:var r=e.a;return"."+r;case 1:var r=e.a;return"#"+r;case 2:var r=e.a;return":"+r;default:var r=e.a;return"["+(r+"]")}},O3=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return Q(r,v(ma,is,"",n));case 1:var n=e.a;return Ye(n)?"*":v(ma,is,"",n);default:var r=e.a,n=e.b;return Q(r,v(ma,is,"",n))}},jk=function(e){var r=e.a,n=e.b;return xk(r)+(" "+O3(n))},kk=function(e){var r=e.a,n=e.b,t=e.c,o=a(M,O3(r),a(O,jk,n)),c=a(fe,"",a(he,Sk,t));return a(Pk,a(Lr," ",o),c)},N3=function(e){var r=e.a,n=e.b,t=e.c,o=v(ma,kk,",",a(M,r,n));return o+("{"+(Ck(t)+"}"))},wk=function(e){switch(e.$){case 0:var r=e.a;return N3(r);case 1:var n=e.a,t=e.b,o=v(ma,W3,", ",n),c=v(ma,N3,`
`,t);return"@media "+(o+("{"+(c+"}")));case 2:return"TODO";case 3:return"TODO";case 4:return"TODO";case 5:return"TODO";case 6:var i=e.a.qN,u=e.a.sT;return"@keyframes "+(u+("{"+(i+"}")));case 7:return"TODO";case 8:return"TODO";default:return"TODO"}},Lk=function(e){var r=e.qO,n=e.nR,t=e.mO,o=e.l0;return pk(o)+(v(ma,_k,`
`,t)+(v(ma,yk,`
`,n)+(v(ma,wk,`
`,r)+"")))},Z3=function(e){return{$:8,a:e}},J3=function(e){return{$:5,a:e}},X3=function(e){return{$:4,a:e}},Nc=A(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lo=A(function(e,r,n){return{$:0,a:e,b:r,c:n}}),yu=function(e){return{$:0,a:e}},us=s(function(e,r){return{$:2,a:e,b:r}}),Y3=function(e){return{$:7,a:e}},Ro=s(function(e,r){return{$:1,a:e,b:r}}),fs=s(function(e,r){if(r.b)if(r.b.b){var t=r.a,o=r.b;return a(M,t,a(fs,e,o))}else{var n=r.a;return f([e(n)])}else return r}),Q3=s(function(e,r){var n=r.a,t=r.b,o=r.c;return v(lo,n,t,Q(o,f([e])))}),$s=s(function(e,r){if(r.b)if(r.b.b){var i=r.a,u=r.b;return a(M,i,a($s,e,u))}else switch(r.a.$){case 0:var n=r.a.a;return f([yu(a(Q3,e,n))]);case 1:var t=r.a,o=t.a,c=t.b;return f([a(Ro,o,a(fs,Q3(e),c))]);default:return r}else return r}),K3=s(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c,i=a(O,e,c),u=e(o);return f([v(lo,o,c,t),v(lo,u,i,S)])}else{var n=r.a,t=r.c;return f([v(lo,n,S,t),v(lo,e(n),S,S)])}}),Ak=s(function(e,r){var n=r.a,t=r.b;return v(Nc,n,t,V(e))}),Tk=s(function(e,r){return a(K3,Ak(e),r)}),em=s(function(e,r){return{$:2,a:e,b:r}}),rm=s(function(e,r){return{$:0,a:e,b:r}}),am=function(e){return{$:1,a:e}},nm=s(function(e,r){switch(r.$){case 0:var n=r.a,o=r.b;return a(rm,n,Q(o,f([e])));case 1:var o=r.a;return am(Q(o,f([e])));default:var t=r.a,o=r.b;return a(em,t,Q(o,f([e])))}}),tm=s(function(e,r){if(r.b)if(r.b.b){var c=r.a,i=r.b;return a(M,c,a(tm,e,i))}else{var n=r.a,t=n.a,o=n.b;return f([y(t,a(nm,e,o))])}else return S}),Mk=s(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c;return v(Nc,o,a(tm,e,c),t)}else{var n=r.a,t=r.c;return v(Nc,a(nm,e,n),S,t)}}),Dk=s(function(e,r){return a(K3,Mk(e),r)}),ls=function(e){e:for(;;)if(e.b)if(e.a.$){var o=e.b,c=o;e=c;continue e}else{var r=e.a.a,n=r.a,t=r.b,o=e.b;return Q(a(M,n,t),ls(o))}else return S},vs=Ae(function(e,r,n,t,o){return{$:3,a:e,b:r,c:n,d:t,e:o}}),S$=s(function(e,r){e:for(;;)if(r.b){if(r.b.b)break e;switch(r.a.$){case 0:var T=r.a.a;return a(O,yu,e(T));case 1:if(r.a.b.b)if(r.a.b.b.b){var c=r.a,t=c.a,i=c.b,F=i.a,q=i.b,u=a(S$,e,f([a(Ro,t,q)]));if(u.b&&u.a.$===1&&!u.b.b){var $=u.a,l=$.a,d=$.b;return f([a(Ro,l,a(M,F,d))])}else{var b=u;return b}}else{var n=r.a,t=n.a,o=n.b,T=o.a;return f([a(Ro,t,e(T))])}else break e;case 2:var g=r.a,_=g.a,p=g.b;return f([a(us,_,a(S$,e,p))]);case 3:var m=r.a,P=m.a,C=m.b,j=m.c,L=m.d,T=m.e;return a(O,x(vs,P,C,j,L),e(T));case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}else return r;var F=r.a,q=r.b;return a(M,F,a(S$,e,q))}),zk=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return V(r)}else return D},om=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return V(f([r]))}else return D},Bk=function(e){e:for(;;)if(e.b){var r=e.a,n=e.b;if(r.$===1){var t=n;e=t;continue e}else return r}else return D},Vk=function(e){return{$:9,a:e}},cm=function(e){var r=function(t){if(t.b){var o=t.a,c=t.b;return a(M,o,r(c))}else return S},n=r(e);return f([Vk(n)])},Ek=s(function(e,r){if(r.$)return r;var n=r.a;return a(Ro,e,f([n]))}),Hk=function(e){if(e.b){var r=e.a,n=e.b;return V(n)}else return D},im=Ae(function(e,r,n,t,o){if(o.$)return o;var c=o.a;return U(vs,e,r,n,t,c)}),um=s(function(e,r){switch(r.$){case 0:var d=r.a;return a(Ro,e,f([d]));case 1:var n=r.a,t=r.b;return a(Ro,Q(e,n),t);case 2:var o=r.a,c=r.b;return a(us,o,a(O,um(e),c));case 3:var i=r.a,u=r.b,$=r.c,l=r.d,d=r.e;return U(vs,i,u,$,l,d);case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}),ss=function(e){var r=e;return r},fm=Y(function(e,r,n,t){var o=function(l){return a(fe,S,Hk(l))},c=a(et,r,a(fe,S,om(t))),i=(function(){var l=y(Mr(c),zk(t));if(!l.a.$&&!l.b.$){var d=l.a.a,b=l.b.a;return Q(a(ao,Ar(t)-1,t),f([oe(b,d)?b:d]))}else return t})(),u=function(l){return wn(a(fs,et(e),a(O,Wi,a(S$,n,l))))},$=a(fe,S,a(he,u,om(t)));return Q(i,Q(o($),o(c)))}),et=s(function(e,r){if(e.b)switch(e.a.$){case 0:var n=e.a.a,F=e.b;return a(et,F,a($s,n,r));case 1:var t=e.a,o=t.a,j=t.b,F=e.b;return x(fm,j,F,Dk(o),r);case 2:var c=e.a,i=c.a,u=c.b,F=e.b,$=s(function(q,R){var K=q.a,J=q.b,ue=q.c,ge=R.a,De=R.b,Le=R.c;return v(Nc,K,Q(J,a(M,y(i,ge),De)),Bk(f([Le,ue])))}),l=function(q){switch(q.$){case 0:var R=q.a,K=R.a,J=R.b,ue=R.c,ge=a(fn,function(Ea){return a(O,$(Ea),a(M,K,J))},ls(r)),De=(function(){if(ge.b){var Ea=ge.a,Na=ge.b;return f([yu(v(lo,Ea,Na,S))])}else return S})();return a(et,ue,De);case 1:var Le=q.a,ar=q.b;return a($m,Le,ar);case 2:var re=q.a,Ue=q.b;return a(lm,re,Ue);case 3:var Xe=q.a,Ne=q.b,Cr=q.c,qe=q.d,cr=q.e;return a(O,x(im,Xe,Ne,Cr,qe),x$(cr));case 4:var pr=q.a;return f([X3(pr)]);case 5:var pr=q.a;return f([J3(pr)]);case 6:var pr=q.a;return f([Y3(pr)]);case 7:var pr=q.a;return f([Z3(pr)]);default:var Nr=q.a;return cm(Nr)}};return wn(Q(f([a(et,F,r)]),a(O,l,a(fn,ss,u))));case 3:var d=e.a,b=d.a,j=d.b,F=e.b;return x(fm,j,F,Tk(b),r);case 5:var g=e.a.a,F=e.b,_=Zb(g),p="animation-name:"+_,m=a(et,F,a($s,p,r));return a(tv,m,f([q3({qN:g,sT:_})]));case 4:var P=e.a,C=P.a,j=P.b,F=e.b,L=(function(){var q=ls(r);if(q.b){var R=q.a,K=q.b;return a(O,Ek(C),a(et,j,Wi(yu(v(lo,R,K,S)))))}else return S})();return Q(a(et,F,r),L);default:var T=e.a.a,F=e.b;return a(et,Q(T,F),r)}else return r}),x$=function(e){var r=e.a,n=e.b,t=e.c;return a(et,t,f([yu(v(lo,r,n,S))]))},ds=function(e){if(e.b){var r=e.a,n=e.b;return Q(Ik(r),ds(n))}else return S},$m=s(function(e,r){var n=function(t){return a(O,um(e),x$(t))};return a(fn,n,r)}),lm=s(function(e,r){var n=ds(a(fn,ss,r));return f([a(us,e,n)])}),Ik=function(e){switch(e.$){case 0:var l=e.a;return x$(l);case 1:var r=e.a,n=e.b;return a($m,r,n);case 2:var t=e.a,o=e.b;return a(lm,t,o);case 3:var c=e.a,i=e.b,u=e.c,$=e.d,l=e.e;return a(O,x(im,c,i,u,$),x$(l));case 4:var d=e.a;return f([X3(d)]);case 5:var d=e.a;return f([J3(d)]);case 6:var d=e.a;return f([Y3(d)]);case 7:var d=e.a;return f([Z3(d)]);default:var b=e.a;return cm(b)}},Fk=function(e){var r=e.oO,n=e.nR,t=e.mO,o=e.l0,c=ds(a(fn,ss,r));return{l0:o,qO:c,mO:t,nR:n}},vm=function(e){return Lk(bk(Fk(e)))},sm=function(e){return{l0:D,mO:S,nR:S,oO:e}},dm=Tf,Uk=function(e){return dm(v(jo,"span",f([a(kn,"style","display: none;"),a(kn,"class","elm-css-style-wrapper")]),Wi(v(jo,"style",S,Wi(Mf(vm(sm(e))))))))},wW=0,Rk={aR:0,uZ:"grabbing"},LW=te,bm=A(function(e,r,n){return{$:0,a:e,b:r,c:n}}),pm=function(e){return{$:0,a:e}},mm=s(function(e,r){var n=v(Nc,r,S,D);return f([pm(v(bm,n,S,e))])}),j$=s(function(e,r){return a(mm,r,a(em,e,S))}),hm=function(e){var r=lk(e);return r.$?$e(""):Uk(f([a(j$,"body *",f([ia(Rk)]))]))},Tn={tB:0,uZ:"absolute"},Zc={jF:0,ga:0,uZ:"row"},ha=E(Zc,{uZ:"column"}),qk=function(e){return{$:0,a:e}},Gk=am(f([qk(av)])),gm=function(e){if(e.b){var r=e;return vm(sm(f([a(mm,e,Gk)])))}else return""},Wk=function(e){var r=gm(e),n=a(kn,"","");return v(yt,n,!0,r)},G=Wk,Se=a(B,"display","flex"),Fr=be("flex-direction"),AW=0,se=function(e){return{dH:0,hW:0,dP:0,cU:0,s4:0,ig:0,dk:e,fD:"",g$:0,uZ:er(e)}},Pt={a7:0,pW:1300,r$:1100,sL:1400,n8:100,pb:1500,c_:1200},ir=be("position"),TW=0,Cu=A(function(e,r,n){return{lt:0,lX:0,eM:0,gb:0,e5:0,e6:0,dg:0,e7:0,e8:0,dO:0,dP:0,cU:0,e9:0,dk:n,fy:0,fD:r,g$:e,uZ:Q(Z(n),r)}}),w=a(Cu,0,"px"),St=be("right"),Ma=be("top"),MW=0,DW=1,_m=function(e){return e?"true":"false"},je=function(e){return a(B,"background-color",e.uZ)},ym=function(e){return{$:6,a:e}},Re=ym,k$=Y(function(e,r,n,t){return a(B,e,r.uZ+(" "+(n.uZ+(" "+t.uZ))))}),xt=k$("border"),tr=be("border-radius"),Ok=Br(function(e,r,n,t,o,c){return a(B,e,r.uZ+(" "+(n.uZ+(" "+(t.uZ+(" "+(o.uZ+(" "+c.uZ))))))))}),Pu=Ok("box-shadow"),zW=0,Je=function(e){return{dP:0,cU:0,e9:0,s4:0,ig:0,dk:e,fD:"",g$:0,uZ:Z(e)}},Fa=be("opacity"),ln=be("padding"),ga={qy:s(function(e,r){return w(e+r)}),sp:w(12),sz:w(8),tr:w(9999),oN:w(4),vd:w(20)},Da={bw:0,d7:0,uZ:"solid"},Jc=s(function(e,r){return e+("("+(a(Lr,",",r)+")"))}),Nk=function(e){return e*180/Er},Zk=s(function(e,r){var n=Yt(e);return a(ja,r,n)+e-n}),Jk=A(function(e,r,n){var t=e/Ri(60),o=(1-Me(2*n-1))*r,c=n-o/2,i=o*(1-Me(a(Zk,t,2)-1)),u=t<0?H(0,0,0):t<1?H(o,i,0):t<2?H(i,o,0):t<3?H(0,o,i):t<4?H(0,i,o):t<5?H(i,0,o):t<6?H(o,0,i):H(0,0,0),$=u.a,l=u.b,d=u.c;return H($+c,l+c,d+c)}),Xk=Ae(function(e,r,n,t,o){var c=v(Jk,Nk(r),n,t),i=c.a,u=c.b,$=c.c;return{aQ:o,p3:Yt($),fX:0,rO:Yt(u),tJ:Yt(i),uZ:e}}),Cm=function(e){return Z(e*100)+"%"},Yk=Y(function(e,r,n,t){var o=f([Z(e),Cm(r),Cm(n),Z(t)]),c=a(Jc,"hsla",o);return U(Xk,c,e,r,n,t)}),ur=function(e){return x(Yk,e.aT*360,e.a1,e.C,e.aQ)},le={e5:0,e6:0,dg:0,e7:0,e8:0,dO:0,dP:0,s4:0,dk:0,io:0,fD:"",g$:0,uZ:"0"},Pm=A(function(e,r,n){var t=e.qZ,o=e.dY,c=ur(a(mr,.08,So)),i=ur(a(mr,.25,Po)),u=ur(a(mr,.18,So));return a(X,Q(r,f([G(f([Se,(function(){return Fr(o===1?ha:Zc)})(),a(B,"gap","3px"),ln(w(3)),tr(a(ga.qy,36/2,3)),je(c),v(xt,w(1),Da,u),a(B,"backdrop-filter","blur(14px) saturate(160%)"),a(B,"-webkit-backdrop-filter","blur(14px) saturate(160%)"),U(Pu,le,w(6),w(18),w(-6),i),a(B,"pointer-events","auto"),t?Fa(Je(.4)):Re(S)]))])),n)}),Qk=s(function(e,r){return{$:1,a:e,b:r}}),Kk=function(e){return{$:2,a:e}},w$=function(e){return Qk(Kk(e))},Su=w$("active"),qo=s(function(e,r){return R3(e+(":"+r))}),L$=A(function(e,r,n){e:for(;;)switch(n.$){case 0:var t=n.a,o=a(fe,"",Mr(a(gn,":",t)));return a(qo,r,o);case 1:var c=n.a;return a(qo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-selector"));case 2:var i=n.a;return a(qo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-combinator"));case 3:var u=n.a;return a(qo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-pseudo-element setter"));case 4:return a(qo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-media-query"));case 5:return a(qo,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-keyframes"));default:if(n.a.b)if(n.a.b.b){var _=n.a,p=_.a,m=_.b,d=e,b=r,g=ym(m);e=d,r=b,n=g;continue e}else{var $=n.a,l=$.a,d=e,b=r,g=l;e=d,r=b,n=g;continue e}else return a(qo,r,"elm-css-error-cannot-apply-"+(e+"-with-empty-Style"))}}),BW=0,A$=v(Cu,0,"",0),Qe=function(e){return v(L$,"alignItems","align-items",e(A$))},Pr=s(function(e,r){return v(yt,a(kn,e,r),!1,"")}),Oe=Pr,VW=1,EW=te,T$=Y(function(e,r,n,t){return{ha:e,hx:V(n),cM:r,iV:V(t)}}),bs=T$(1),ew=be("border-style"),HW=25,Sm=T$(25),jt=jn("button"),we=be("center"),ve=function(e){return a(B,"color",e.uZ)},IW=29,rw=T$(29),M$=be("border-bottom-left-radius"),D$=be("border-bottom-right-radius"),z$=be("border-top-left-radius"),B$=be("border-top-right-radius"),FW=0,Ke=a(Cu,0,"%"),aw=s(function(e,r){var n=w(4),t=w(18);switch(r){case 0:return f([tr(Ke(50))]);case 2:return f([tr(n)]);case 1:return f(e===1?[z$(t),B$(t),M$(n),D$(n)]:[z$(t),M$(t),B$(n),D$(n)]);default:return f(e===1?[z$(n),B$(n),M$(t),D$(t)]:[z$(n),M$(n),B$(t),D$(t)])}}),xm=s(function(e,r){return a(U3,e,qv(r))}),xu=xm("disabled"),nw={$:3},V$=nw,ee=s(function(e,r){return ur(e(bt(r)))}),ze=be("height"),Mn=w$("hover"),ps={bw:0,uZ:"inset"},qr=function(e){return v(L$,"justifyContent","justify-content",e(A$))},lr={ej:0,lL:0,bw:0,aR:0,q_:0,rZ:0,mS:0,jU:0,e8:0,dO:0,cU:0,r:0,p:0,kf:0,io:0,tx:0,cr:0,iy:0,t1:0,fx:0,d8:0,bT:0,lh:0,uU:0,uZ:"none"},ms=s(function(e,r){return v(yt,a(C$,e,r),!1,"")}),ua=s(function(e,r){return a(ms,e,D3(r))}),kt=function(e){return a(ua,"click",ae(e))},vn=be("outline"),sn={aR:0,uZ:"pointer"},Go={tB:0,uZ:"relative"},UW=89,jm=T$(89),tw=function(e){return Ye(e)?{uZ:"none"}:{uZ:v(ma,function(r){return r.uZ}," ",e)}},E$=a(nr,be("transform"),tw),ow=function(e){switch(e){case 0:return"background";case 1:return"background-color";case 2:return"background-position";case 3:return"background-size";case 4:return"border";case 5:return"border-bottom";case 6:return"border-bottom-color";case 7:return"border-bottom-left-radius";case 8:return"border-bottom-right-radius";case 9:return"border-bottom-width";case 10:return"border-color";case 11:return"border-left";case 12:return"border-left-color";case 13:return"border-left-width";case 14:return"border-radius";case 15:return"border-right";case 16:return"border-right-color";case 17:return"border-right-width";case 18:return"border-top";case 19:return"border-top-color";case 20:return"border-top-left-radius";case 21:return"border-top-right-radius";case 22:return"border-top-width";case 23:return"border-width";case 24:return"bottom";case 25:return"box-shadow";case 26:return"caret-color";case 27:return"clip";case 28:return"clip-path";case 29:return"color";case 30:return"column-count";case 31:return"column-gap";case 32:return"column-rule";case 33:return"column-rule-color";case 34:return"column-rule-width";case 35:return"column-width";case 36:return"columns";case 37:return"filter";case 38:return"flex";case 39:return"flex-basis";case 40:return"flex-grow";case 41:return"flex-shrink";case 42:return"font";case 43:return"font-size";case 44:return"font-size-adjust";case 45:return"font-stretch";case 46:return"font-variation-settings";case 47:return"font-weight";case 48:return"grid-column-gap";case 49:return"grid-gap";case 50:return"grid-row-gap";case 51:return"height";case 52:return"left";case 53:return"letter-spacing";case 54:return"line-height";case 55:return"margin";case 56:return"margin-bottom";case 57:return"margin-left";case 58:return"margin-right";case 59:return"margin-top";case 60:return"mask";case 61:return"mask-position";case 62:return"mask-size";case 63:return"max-height";case 64:return"max-width";case 65:return"min-height";case 66:return"min-width";case 67:return"object-position";case 68:return"offset";case 69:return"offset-anchor";case 70:return"offset-distance";case 71:return"offset-path";case 72:return"offset-rotate";case 73:return"opacity";case 74:return"order";case 75:return"outline";case 76:return"outline-color";case 77:return"outline-offset";case 78:return"outline-width";case 79:return"padding";case 80:return"padding-bottom";case 81:return"padding-left";case 82:return"padding-right";case 83:return"padding-top";case 84:return"right";case 85:return"tab-size";case 86:return"text-indent";case 87:return"text-shadow";case 88:return"top";case 89:return"transform";case 90:return"transform-origin";case 91:return"vertical-align";case 92:return"visibility";case 93:return"width";case 94:return"word-spacing";default:return"z-index"}},km=function(e){return Z(e)+"ms"},cw=function(e){switch(e.$){case 0:return"ease";case 1:return"linear";case 2:return"ease-in";case 3:return"ease-out";case 4:return"ease-in-out";case 5:return"step-start";case 6:return"step-end";default:var r=e.a,n=e.b,t=e.c,o=e.d;return"cubic-bezier("+(Z(r)+(" , "+(Z(n)+(" , "+(Z(t)+(" , "+(Z(o)+")")))))))}},H$=function(e){var r=v(tn,0,-1,v(me,s(function(n,t){var o=n.iV,c=n.hx,i=n.cM,u=n.ha;return t+(ow(u)+(" "+(km(i)+(" "+(a(fe,"",a(he,km,c))+(" "+(a(fe,"",a(he,cw,o))+",")))))))}),"",e));return a(B,"transition",r)},wm=s(function(e,r){return{lh:0,uZ:a(Jc,"translate",f([e.uZ,r.uZ]))}}),xe=be("width"),Lm=s(function(e,r){var n=Gf(e),t=ur(a(mr,n?.18:.64,Po)),o=ur(a(mr,n?.12:.48,Po)),c=ur(n?a(mr,.06,Po):a(mr,.1,So)),i=r.i9,u=i.a,$=i.b;return a(jt,Q(f([kt(r.gw),xu(r.qZ),a(Oe,"role",r.i8),a(Oe,u,$),a(Oe,"aria-label",r.jV),G(Q(f([ir(Go),xe(w(36)),ze(w(36)),ew(lr),ln(le),r.qZ?a(B,"cursor","default"):ia(sn),a(B,"background","transparent"),vn(lr),ve(r.m3?a(ee,r.ki,e):a(ee,function(l){return l.le},e)),H$(f([v(Sm,70,0,V$),v(bs,70,0,V$),v(rw,70,0,V$)])),r.m3?Re(f([U(Pu,ps,le,w(4),le,o),je(o)])):r.qZ?Re(S):Re(f([Mn(f([je(c),U(Pu,ps,le,w(1),le,c)]))])),r.qZ?Re(S):Su(f([U(Pu,ps,le,w(6),le,t),je(t)]))]),a(aw,r.dY,r.tB)))]),r.du),f([a(X,f([G(f([xe(Ke(100)),ze(Ke(100)),Se,Qe(we),qr(we),r.m3?E$(f([a(wm,le,w(1))])):Re(S),r.qZ?Re(S):Su(f([E$(f([a(wm,le,w(1.5))]))])),H$(f([v(jm,70,0,V$)]))]))]),f([a(X,f([G(f([xe(w(24)),ze(w(24))]))]),f([r.mL]))]))]))}),I$=s(function(e,r){return v(Pm,{qZ:r.qZ,dY:1},S,f([a(Lm,e,{i8:"button",i9:y("aria-pressed",_m(r.jS)),qZ:r.qZ,mL:r.mL,m3:r.jS,jV:r.jV,gw:r.gw,ki:r.i1,dY:1,tB:0,du:r.du})]))}),Xc=s(function(e,r){return a(I$,e,{i1:r.o7,qZ:r.qZ,mL:r.mL,jS:a(Ir,r.bE,r.bG),jV:r.jV,gw:r.v(Ev(r.bE)),du:r.du})}),iw=Y(function(e,r,n,t){return a(Xc,e,{qZ:!1,mL:t.mL,bE:t.bE,jV:t.o9,bG:r,o7:t.o7,v:n,du:S})}),rt=be("z-index"),uw=s(function(e,r){return a(X,f([G(f([ir(Tn),Ma(w(vu)),St(w(vu)),Se,Fr(ha),a(B,"gap","6px"),a(B,"pointer-events",r.jN?"none":"auto"),rt(se(Pt.r$)),a(B,"transform",r.jN?"translateX(calc(100% + "+(Z(vu)+"px))"):"translateX(0)"),a(B,"transition","transform 280ms cubic-bezier(0.2, 0.9, 0.25, 1)")]))]),a(O,v(iw,e,r.ip,r.v),r.cq))}),at=be("bottom"),Xr=be("left"),fw=function(e){return f([(function(){var r=e.pA;switch(r.$){case 0:var n=r.a;return Xr(w(n));case 1:var n=r.a;return St(w(n));default:return Xr(Ke(50))}})(),(function(){var r=e.pB;if(r.$){var n=r.a;return at(w(n))}else{var n=r.a;return Ma(w(n))}})()])},Wo={pH:0,aR:0,eM:0,hW:0,sk:0,e6:0,dg:0,cU:0,fl:0,cr:0,iR:0,fz:0,bT:0,uZ:"auto"},wt={fQ:0,tB:0,iR:0,uZ:"fixed"},$w=function(e){var r="blur("+(Z(e)+"px) saturate(180%)");return Re(f([a(B,"backdrop-filter",r),a(B,"-webkit-backdrop-filter",r)]))},lw={aR:0,uZ:"grab"},ju={bw:0,fl:0,uZ:"hidden",g1:0},Am=s(function(e,r){return"draggable-panel-"+(e(r)+"-no-drag")}),Oo=be("overflow"),vw=s(function(e,r){var n=(function(){var t=e.pA;return t.$===2?"calc(-50% + "+(Z(r.pA)+"px)"):Z(r.pA)+"px"})();return"translate("+(n+(", "+(Z(r.pB)+"px)")))}),Lt=be("pointer-events"),sw=A(function(e,r,n){var t=n,o=x(s3,e,r.bv,r.bE,t),c=t.eF;if(c.$)return o;var i=c.a;return oe(i.bE,r.bE)?a($3,e,i):o}),Tm=be("box-shadow"),Mm=Ae(function(e,r,n,t,o){return a(B,e,r.uZ+(" "+(n.uZ+(" "+(t.uZ+(" "+o.uZ))))))}),dw=Mm("box-shadow"),hs=Y(function(e,r,n,t){return{aQ:t,p3:n,fX:0,rO:r,tJ:e,uZ:a(Jc,"rgba",Q(a(O,er,f([e,r,n])),f([Z(t)])))}}),gs={q7:Tm(lr),q8:x(dw,le,w(1),w(2),x(hs,0,0,0,.3)),q9:a(B,"box-shadow","0 2px 4px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2)"),ra:a(B,"box-shadow","0 12px 24px -8px rgba(0, 0, 0, 0.55), 0 4px 8px -2px rgba(0, 0, 0, 0.4)"),rb:a(B,"box-shadow","0 28px 60px -20px rgba(0, 0, 0, 0.85), 0 8px 24px -8px rgba(0, 0, 0, 0.55)")},bw=s(function(e,r){return v(yt,a(qb,e,r),!1,"")}),Dm=bw,zm=48,pw={aR:0,uZ:"default"},Yc=be("flex"),mw=be("overflow-x"),Bm=be("overflow-y"),hw=A(function(e,r,n){return a(B,e,r.uZ+(" "+n.uZ))}),$r=hw("padding"),gw=s(function(e,r){return a(X,f([G(f([Yc(se(1)),Bm(Wo),mw(Wo),a($r,w(16),w(16))]))]),f([a(X,f([$o(e),G(f([ia(pw)]))]),f([r]))]))}),_w=function(e){return{$:3,a:e}},yw={o3:0,uZ:"ellipsis"},_s=A(function(e,r,n){return ce(Me(n.C-r.C),e)>-1?n:r.C>.5?E(n,{C:v(dr,0,1,r.C-e)}):E(n,{C:v(dr,0,1,r.C+e)})}),_r=be("flex-shrink"),vo=be("letter-spacing"),Vm={ga:0,hL:0,uZ:"nowrap",ee:0},No=be("padding-left"),Cw=be("padding-right"),Pw=be("text-overflow"),F$=be("text-transform"),RW=0,At=a(Cu,0,"em"),vr=be("font-size"),Sr=function(e){var r=e.uZ;return a(B,"font-weight",r)},Gr=be("line-height"),fa={lM:f([vr(w(15)),Sr(se(400)),Gr(Je(1.55))]),qj:f([vr(w(13)),Sr(se(500)),Gr(Je(1.3)),vo(At(.04))]),q_:f([vr(w(46)),Sr(se(300)),Gr(Je(1.05)),vo(At(-.02))]),rT:f([vr(w(16)),Sr(se(650)),Gr(Je(1.3))]),rU:f([vr(w(30)),Sr(se(550)),Gr(Je(1.15)),vo(At(-.01))]),jV:f([vr(w(14)),Sr(se(550)),Gr(Je(1.35))]),o9:f([vr(w(20)),Sr(se(650)),Gr(Je(1.25)),vo(At(-.005))])},U$={d8:0,uZ:"uppercase"},Qc=be("border"),Em={fX:0,uZ:"currentColor"},Kc=Pr("clip-rule"),_e=Pr("d"),Sw=function(e){var r=gm(e),n=a(kn,"","");return v(yt,n,!0,r)},nt=Sw,Tt=Pr("fill"),xw=F3,so=xw("http://www.w3.org/2000/svg"),ys=so("svg"),Cs=Pr("viewBox"),jw=A(function(e,r,n){return v(v7,e,Ud(r),Rd(n))}),kw=A(function(e,r,n){return v(yt,v(jw,e,r,n),!1,"")}),ww=a(kw,"http://www.w3.org/XML/1998/namespace","xml:space"),ye=ys(f([Cs("0 0 24 24"),Tt("currentColor"),nt(f([xe(Ke(100)),ze(Ke(100))])),ww("http://www.w3.org/2000/svg")])),ei=Pr("fill-rule"),Ce=so("path"),yr={pE:ye(f([a(Ce,f([_e("M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z")]),S)])),p4:ye(f([a(Ce,f([_e("M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z")]),S)])),qp:ye(f([a(Ce,f([ei("evenodd"),Kc("evenodd"),_e("M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z")]),S)])),qq:ye(f([a(Ce,f([ei("evenodd"),Kc("evenodd"),_e("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),S)])),qr:ye(f([a(Ce,f([ei("evenodd"),Kc("evenodd"),_e("M5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071Z")]),S)])),qw:ye(f([a(Ce,f([_e("M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z")]),S)])),qx:ye(f([a(Ce,f([_e("M4.00005 16H20V5H4.00005V16ZM13.0001 18V20H17.0001V22H7.00005V20H11.0001V18H2.99205C2.86065 17.9992 2.7307 17.9725 2.60965 17.9214C2.48861 17.8702 2.37885 17.7957 2.28668 17.702C2.19452 17.6084 2.12175 17.4975 2.07256 17.3756C2.02337 17.2538 1.99873 17.1234 2.00005 16.992V4.008C2.00005 3.451 2.45505 3 2.99205 3H21.008C21.556 3 22 3.449 22 4.007V16.992C22 17.549 21.545 18 21.008 18H13.0001Z")]),S)])),qJ:ye(f([a(Ce,f([_e("M11.7143 9.78571L17.5 4L19.4286 5.92857L13.6429 11.7143L19.4286 17.5L17.5 19.4286L11.7143 13.6429L5.92857 19.4286L4 17.5L9.78571 11.7143L4 5.92857L5.92857 4L11.7143 9.78571Z")]),S)])),qW:ye(f([a(Ce,f([_e("M4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6Z")]),S)])),qX:ye(f([a(Ce,f([_e("M9 2H15A2 2 0 0 1 17 4V20A2 2 0 0 1 15 22H9A2 2 0 0 1 7 20V4A2 2 0 0 1 9 2Z")]),S)])),q2:ye(f([a(Ce,f([_e("M11 3h2v7h3l-4 4-4-4h3z M4 17h16v3H4z")]),S)])),q3:ye(f([a(Ce,f([_e("M11 2h2v7h3l-4 4-4-4h3z M4 16h16v2H4z M7 19h10v2H7z")]),S)])),q6:ye(f([a(Ce,f([_e("M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z")]),S)])),rj:ye(f([a(Ce,f([_e("M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z")]),S)])),rk:ye(f([a(Ce,f([_e("M8.58564 8.85449L3.63589 13.8042L8.83021 18.9985L9.99985 18.9978V18.9966H11.1714L14.9496 15.2184L8.58564 8.85449ZM9.99985 7.44027L16.3638 13.8042L19.1922 10.9758L12.8283 4.61185L9.99985 7.44027ZM13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966Z")]),S)])),rx:ye(f([a(Ce,f([_e("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z")]),S)])),rH:ye(f([a(Ce,f([_e("M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z")]),S)])),rL:ye(f([a(Ce,f([_e("M20.0601 11.6104C20.0639 11.7454 20.0639 11.8804 20.0601 12.0154L21.4588 13.7629C21.5322 13.8547 21.583 13.9624 21.6071 14.0773C21.6312 14.1923 21.6279 14.3113 21.5976 14.4248C21.3679 15.2866 21.0249 16.1141 20.5776 16.8857C20.519 16.9867 20.4376 17.0726 20.34 17.1365C20.2423 17.2005 20.1311 17.2408 20.0151 17.2542L17.7914 17.5017C17.6989 17.5992 17.6051 17.6929 17.5101 17.7829L17.2476 20.0123C17.2341 20.1283 17.1937 20.2396 17.1295 20.3373C17.0654 20.435 16.9794 20.5163 16.8782 20.5748C16.1067 21.0217 15.2791 21.3641 14.4173 21.5929C14.3038 21.6232 14.1848 21.6265 14.0698 21.6024C13.9549 21.5783 13.8472 21.5275 13.7554 21.4542L12.0126 20.0629H11.6076L9.8601 21.4589C9.76835 21.5322 9.66065 21.583 9.54569 21.6071C9.43073 21.6312 9.31171 21.6279 9.19823 21.5976C8.33643 21.3679 7.5089 21.0249 6.73729 20.5776C6.63634 20.519 6.55046 20.4376 6.4865 20.34C6.42254 20.2423 6.38225 20.1311 6.36885 20.0151L6.12135 17.7876C6.02385 17.6945 5.9301 17.6007 5.8401 17.5064L3.61073 17.2504C3.49468 17.2369 3.38338 17.1965 3.28572 17.1324C3.18806 17.0682 3.10674 16.9822 3.04823 16.881C2.60136 16.1093 2.2587 15.2818 2.02916 14.4201C1.99897 14.3065 1.99589 14.1875 2.02015 14.0725C2.04441 13.9576 2.09535 13.8499 2.16885 13.7582L3.5601 12.0154V11.6104L2.16416 9.86292C2.09082 9.77116 2.04006 9.66347 2.01596 9.5485C1.99186 9.43354 1.9951 9.31452 2.02541 9.20104C2.25513 8.33924 2.59812 7.51172 3.04541 6.7401C3.10403 6.63915 3.18541 6.55328 3.28306 6.48931C3.38071 6.42535 3.49195 6.38507 3.60791 6.37167L5.83166 6.12417C5.92479 6.02667 6.01854 5.93292 6.11291 5.84292L6.3726 3.61354C6.3861 3.49749 6.42653 3.3862 6.49066 3.28854C6.55479 3.19088 6.64085 3.10955 6.74198 3.05104C7.51369 2.60418 8.3412 2.26151 9.20291 2.03198C9.31647 2.00179 9.43553 1.9987 9.55049 2.02296C9.66546 2.04723 9.77312 2.09816 9.86479 2.17167L11.6076 3.56292C11.7426 3.55917 11.8776 3.55917 12.0126 3.56292L13.7601 2.16417C13.8519 2.09082 13.9595 2.04006 14.0745 2.01596C14.1895 1.99186 14.3085 1.9951 14.422 2.02542C15.2839 2.25472 16.1115 2.59773 16.8829 3.04542C16.9839 3.10403 17.0697 3.18541 17.1337 3.28306C17.1977 3.38072 17.2379 3.49195 17.2513 3.60792L17.4988 5.83167C17.5963 5.92417 17.6901 6.01792 17.7801 6.11292L20.0095 6.37542C20.1255 6.38892 20.2368 6.42934 20.3345 6.49347C20.4321 6.5576 20.5135 6.64366 20.572 6.74479C21.0188 7.51651 21.3615 8.34402 21.591 9.20573C21.6212 9.31928 21.6243 9.43834 21.6001 9.55331C21.5758 9.66828 21.5249 9.77593 21.4513 9.8676L20.0601 11.6104ZM11.8101 8.06292C11.0684 8.06292 10.3434 8.28285 9.72671 8.6949C9.11003 9.10696 8.62938 9.69263 8.34555 10.3779C8.06172 11.0631 7.98746 11.8171 8.13216 12.5445C8.27685 13.2719 8.634 13.9401 9.15845 14.4646C9.6829 14.989 10.3511 15.3462 11.0785 15.4909C11.8059 15.6356 12.5599 15.5613 13.2452 15.2775C13.9304 14.9936 14.5161 14.513 14.9281 13.8963C15.3402 13.2796 15.5601 12.5546 15.5601 11.8129C15.5601 10.8184 15.165 9.86453 14.4618 9.16127C13.7585 8.458 12.8047 8.06292 11.8101 8.06292Z")]),S)])),rM:ye(f([a(Ce,f([_e("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),S)])),rV:ye(f([a(Ce,f([_e("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),S)])),rW:ye(f([a(Ce,f([_e("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z")]),S)])),rY:ye(f([a(Ce,f([_e("M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z")]),S)])),sm:ye(f([a(Ce,f([_e("M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10H18C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7957 12 18 12H16C15.2043 12 14.4413 11.6839 13.8787 11.1213C13.3161 10.5587 13 9.79565 13 9V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H16ZM13.8787 14.8787C14.4413 14.3161 15.2043 14 16 14H18C18.7957 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2043 21 17V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V17C13 16.2043 13.3161 15.4413 13.8787 14.8787Z")]),S)])),sq:ye(f([a(Ce,f([_e("M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z")]),S)])),sA:ye(f([a(Ce,f([_e("M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z")]),S)])),sO:ye(f([a(Ce,f([_e("M12 22C17.523 22 22 17.523 22 12C22 11.537 21.306 11.46 21.067 11.857C20.5572 12.7013 19.862 13.4186 19.034 13.9545C18.206 14.4903 17.2669 14.8307 16.2878 14.9499C15.3088 15.0691 14.3154 14.9639 13.383 14.6423C12.4507 14.3207 11.6037 13.7911 10.9063 13.0937C10.2089 12.3963 9.67932 11.5493 9.35772 10.617C9.03613 9.68457 8.93093 8.69123 9.0501 7.71217C9.16926 6.73311 9.50967 5.794 10.0455 4.96599C10.5814 4.13797 11.2987 3.44275 12.143 2.933C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z")]),S)])),kv:ye(f([a(Ce,f([_e("M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z")]),S)])),tn:ye(f([a(Ce,f([_e("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),S)])),to:ye(f([a(Ce,f([_e("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),S)])),tu:ye(f([a(Ce,f([_e("M7 5V19L18 12L7 5Z")]),S)])),tv:ye(f([a(Ce,f([_e("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),S)])),tw:ye(f([a(Ce,f([_e("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),S)])),tI:ye(f([a(Ce,f([_e("M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z")]),S)])),tK:ye(f([a(Ce,f([_e("M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34001 8 3.76001 10.42 2.06001 13.93C1.74001 14.6 2.10001 15.4 2.81001 15.64C3.40001 15.84 4.04001 15.56 4.31001 15C5.61001 12.34 8.34001 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z")]),S)])),tQ:ye(f([a(Ce,f([_e("M7.20679 2.29279C7.39426 2.48031 7.49957 2.73462 7.49957 2.99979C7.49957 3.26495 7.39426 3.51926 7.20679 3.70679L5.41379 5.49979H13.2498C14.832 5.49979 16.3788 5.96898 17.6943 6.84803C19.0099 7.72708 20.0353 8.97651 20.6408 10.4383C21.2463 11.9001 21.4048 13.5087 21.0961 15.0605C20.7874 16.6124 20.0255 18.0378 18.9066 19.1566C17.7878 20.2755 16.3624 21.0374 14.8105 21.3461C13.2587 21.6548 11.6501 21.4963 10.1883 20.8908C8.72651 20.2853 7.47708 19.2599 6.59803 17.9443C5.71898 16.6288 5.24979 15.082 5.24979 13.4998C5.24979 13.2346 5.35514 12.9802 5.54268 12.7927C5.73022 12.6051 5.98457 12.4998 6.24979 12.4998C6.515 12.4998 6.76936 12.6051 6.95689 12.7927C7.14443 12.9802 7.24979 13.2346 7.24979 13.4998C7.24979 14.6865 7.60168 15.8465 8.26097 16.8332C8.92026 17.8199 9.85733 18.5889 10.9537 19.0431C12.05 19.4972 13.2564 19.616 14.4203 19.3845C15.5842 19.153 16.6533 18.5815 17.4924 17.7424C18.3315 16.9033 18.903 15.8342 19.1345 14.6703C19.366 13.5064 19.2472 12.3 18.7931 11.2037C18.3389 10.1073 17.5699 9.17026 16.5832 8.51097C15.5965 7.85168 14.4365 7.49979 13.2498 7.49979H5.41379L7.20679 9.29279C7.38894 9.48139 7.48974 9.73399 7.48746 9.99619C7.48518 10.2584 7.38001 10.5092 7.1946 10.6946C7.0092 10.88 6.75838 10.9852 6.49619 10.9875C6.23399 10.9897 5.98139 10.8889 5.79279 10.7068L2.29279 7.20679C2.10532 7.01926 2 6.76495 2 6.49979C2 6.23462 2.10532 5.98031 2.29279 5.79279L5.79279 2.29279C5.98031 2.10532 6.23462 2 6.49979 2C6.76495 2 7.01926 2.10532 7.20679 2.29279Z")]),S)])),tZ:ye(f([a(Ce,f([_e("M21 7V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H17L21 7ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z")]),S)])),t8:ye(f([a(Ce,f([_e("M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z")]),S)])),uc:ye(f([a(Ce,f([_e("M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z")]),S)])),uf:ye(f([a(Ce,f([_e("M8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z")]),S)])),ul:ye(f([a(Ce,f([ei("evenodd"),Kc("evenodd"),_e("M8 3H16A5 5 0 0 1 21 8V16A5 5 0 0 1 16 21H8A5 5 0 0 1 3 16V8A5 5 0 0 1 8 3ZM9 6H15A3 3 0 0 1 18 9V15A3 3 0 0 1 15 18H9A3 3 0 0 1 6 15V9A3 3 0 0 1 9 6ZM9.5 12A2.5 2.5 0 1 0 14.5 12A2.5 2.5 0 1 0 9.5 12Z")]),S)])),uo:ye(f([a(Ce,f([_e("M6 6H18V18H6Z")]),S)])),ut:ye(f([a(Ce,f([_e("M11.9989 19C12.2641 19 12.5185 19.1054 12.706 19.2929C12.8935 19.4804 12.9989 19.7348 12.9989 20V21C12.9989 21.2652 12.8935 21.5196 12.706 21.7071C12.5185 21.8946 12.2641 22 11.9989 22C11.7337 22 11.4793 21.8946 11.2918 21.7071C11.1042 21.5196 10.9989 21.2652 10.9989 21V20C10.9989 19.7348 11.1042 19.4804 11.2918 19.2929C11.4793 19.1054 11.7337 19 11.9989 19ZM18.3629 16.95L19.0699 17.657C19.252 17.8456 19.3528 18.0982 19.3506 18.3604C19.3483 18.6226 19.2431 18.8734 19.0577 19.0588C18.8723 19.2442 18.6215 19.3494 18.3593 19.3517C18.0971 19.354 17.8445 19.2532 17.6559 19.071L16.9489 18.364C16.7667 18.1754 16.6659 17.9228 16.6682 17.6606C16.6705 17.3984 16.7757 17.1476 16.9611 16.9622C17.1465 16.7768 17.3973 16.6716 17.6595 16.6693C17.9217 16.667 18.1743 16.7678 18.3629 16.95ZM5.63489 16.95C5.81485 16.7707 6.05633 16.6665 6.31028 16.6588C6.56423 16.651 6.81161 16.7402 7.00217 16.9082C7.19274 17.0763 7.3122 17.3106 7.33629 17.5635C7.36038 17.8164 7.2873 18.069 7.13189 18.27L7.04889 18.364L6.34189 19.071C6.16193 19.2503 5.92046 19.3545 5.66651 19.3622C5.41256 19.37 5.16518 19.2808 4.97461 19.1128C4.78405 18.9447 4.66459 18.7104 4.64049 18.4575C4.6164 18.2046 4.68948 17.952 4.84489 17.751L4.92789 17.657L5.63489 16.95ZM11.9989 6C13.5902 6 15.1163 6.63214 16.2415 7.75736C17.3668 8.88258 17.9989 10.4087 17.9989 12C17.9989 13.5913 17.3668 15.1174 16.2415 16.2426C15.1163 17.3679 13.5902 18 11.9989 18C10.4076 18 8.88147 17.3679 7.75625 16.2426C6.63103 15.1174 5.99889 13.5913 5.99889 12C5.99889 10.4087 6.63103 8.88258 7.75625 7.75736C8.88147 6.63214 10.4076 6 11.9989 6ZM3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889ZM20.9989 11C21.2641 11 21.5185 11.1054 21.706 11.2929C21.8935 11.4804 21.9989 11.7348 21.9989 12C21.9989 12.2652 21.8935 12.5196 21.706 12.7071C21.5185 12.8946 21.2641 13 20.9989 13H19.9989C19.7337 13 19.4793 12.8946 19.2918 12.7071C19.1042 12.5196 18.9989 12.2652 18.9989 12C18.9989 11.7348 19.1042 11.4804 19.2918 11.2929C19.4793 11.1054 19.7337 11 19.9989 11H20.9989ZM4.92789 4.929C5.10008 4.75682 5.32918 4.65339 5.57221 4.63811C5.81524 4.62283 6.05549 4.69675 6.24789 4.846L6.34189 4.929L7.04889 5.636C7.22824 5.81596 7.33237 6.05743 7.34012 6.31138C7.34787 6.56533 7.25868 6.81271 7.09064 7.00328C6.92261 7.19384 6.68834 7.31331 6.43542 7.3374C6.18249 7.36149 5.92988 7.28841 5.72889 7.133L5.63489 7.05L4.92789 6.343C4.74042 6.15547 4.63511 5.90116 4.63511 5.636C4.63511 5.37084 4.74042 5.11653 4.92789 4.929ZM19.0699 4.929C19.2574 5.11653 19.3627 5.37084 19.3627 5.636C19.3627 5.90116 19.2574 6.15547 19.0699 6.343L18.3629 7.05C18.2706 7.14551 18.1603 7.22169 18.0383 7.2741C17.9163 7.32651 17.7851 7.3541 17.6523 7.35525C17.5195 7.3564 17.3878 7.3311 17.2649 7.28082C17.142 7.23054 17.0304 7.15629 16.9365 7.0624C16.8426 6.9685 16.7684 6.85685 16.7181 6.73395C16.6678 6.61106 16.6425 6.47938 16.6436 6.3466C16.6448 6.21382 16.6724 6.0826 16.7248 5.9606C16.7772 5.83859 16.8534 5.72825 16.9489 5.636L17.6559 4.929C17.8434 4.74153 18.0977 4.63621 18.3629 4.63621C18.6281 4.63621 18.8824 4.74153 19.0699 4.929ZM11.9989 2C12.2641 2 12.5185 2.10536 12.706 2.29289C12.8935 2.48043 12.9989 2.73478 12.9989 3V4C12.9989 4.26522 12.8935 4.51957 12.706 4.70711C12.5185 4.89464 12.2641 5 11.9989 5C11.7337 5 11.4793 4.89464 11.2918 4.70711C11.1042 4.51957 10.9989 4.26522 10.9989 4V3C10.9989 2.73478 11.1042 2.48043 11.2918 2.29289C11.4793 2.10536 11.7337 2 11.9989 2Z")]),S)])),uA:ye(f([a(Ce,f([ei("evenodd"),Kc("evenodd"),_e("M10.8293 13C10.9398 12.6872 11 12.3506 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15H16C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 12.3506 13.0602 12.6872 13.1707 13H10.8293ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z")]),S)])),uL:ye(f([a(Ce,f([ei("evenodd"),Kc("evenodd"),_e("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),S)])),uM:ye(f([a(Ce,f([_e("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),S)])),uP:ye(f([a(Ce,f([_e("M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z")]),S)])),uV:ye(f([a(Ce,f([_e("M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z")]),S)])),u3:ye(f([a(Ce,f([_e("M4.47 21H19.53C21.07 21 22.03 19.33 21.26 18L13.73 4.98999C12.96 3.65999 11.04 3.65999 10.27 4.98999L2.74 18C1.97 19.33 2.93 21 4.47 21ZM12 14C11.45 14 11 13.55 11 13V11C11 10.45 11.45 9.99999 12 9.99999C12.55 9.99999 13 10.45 13 11V13C13 13.55 12.55 14 12 14ZM13 18H11V16H13V18Z")]),S)])),vn:ye(f([a(Ce,f([_e("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),S)])),vr:ye(f([a(Ce,f([_e("M9.31445 17.5469L8.43555 18.4355L12 22L15.5645 18.4355L14.6855 17.5469L12 20.2324L9.31445 17.5469ZM14.6855 6.45312L15.5645 5.56445L12 2L8.43555 5.56445L9.31445 6.45312L12 3.76758L14.6855 6.45312ZM6.45312 14.6855L3.76758 12L6.45312 9.31445L5.56445 8.43555L2 12L5.56445 15.5645L6.45312 14.6855ZM22 12L18.4355 8.43555L17.5469 9.31445L20.2324 12L17.5469 14.6855L18.4355 15.5645L22 12ZM8.25 15.75H15.75V8.25H8.25V15.75ZM9.5 9.5H14.5V14.5H9.5V9.5Z")]),S)]))},ri={fX:0,uZ:"transparent"},Lw=s(function(e,r){return a(jt,f([$o(r),kt(e.v(R2(e.bE))),a(Oe,"aria-label","Close"),G(f([xe(w(32)),ze(w(32)),ln(w(5)),tr(Ke(50)),Qc(le),je(ri),ve(Em),ia(sn),Se,Qe(we),qr(we),vn(lr),Fa(Je(.9)),a(B,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Mn(f([Fa(Je(1)),je(x(hs,255,255,255,.18))]))]))]),f([yr.qJ]))}),Aw=so("circle"),Tw=Pr("cx"),Mw=Pr("cy"),Dw=Pr("r"),zw=a(ys,f([Cs("0 0 24 24"),Tt("currentColor"),nt(f([xe(w(18)),ze(w(18))]))]),a(O,function(e){var r=e.a,n=e.b;return a(Aw,f([Tw(er(r)),Mw(er(n)),Dw("2")]),S)},f([y(9,5),y(15,5),y(9,12),y(15,12),y(9,19),y(15,19)]))),Ps=be("white-space"),Bw=A(function(e,r,n){var t=a(ee,function(o){return v(_s,.45,o.D,r.o7(o))},e);return a(X,f([G(f([Se,Qe(we),_r(se(0)),ze(w(zm)),No(w(16)),Cw(w(8)),a(B,"gap","12px"),ve(t)])),a(ua,"dblclick",ae(r.v(_w(r.bE))))]),f([zw,a(X,f([G(f([Yc(se(1)),Ps(Vm),Oo(ju),Pw(yw),ve(t),Re(fa.rT),vo(w(.6)),F$(U$)]))]),f([$e(r.o9)])),a(Lw,r,n)]))}),bo=A(function(e,r,n){if(a(Ir,n.bE,n.bG)){var t=a(ee,a(We,n.o7,mr(.18)),e),o=a(ee,a(We,n.o7,mr(.35)),e),c=v(sw,r,n,n.bG),i=(function(){var _=(function(){var p=n.bv.pB;if(p.$){var m=p.a;return m}else{var m=p.a;return m}})();return"calc(100vh - "+(Z(_+g$)+"px)")})(),u=n.bG,$=u,l=a(Am,$.r1,n.bE)+"-body",d=a(Am,$.r1,n.bE),b=$.r1(n.bE),g="draggable-panel-"+(b+"-titlebar");return a(X,f([G(f([je(t),$w(16),tr(a(ga.qy,zm/2,1)),v(xt,w(1),Da,o),gs.ra,ir(wt),Re(fw(n.bv)),a(B,"width","-webkit-fit-content"),a(B,"width","fit-content"),a(B,"max-width","calc(100vw - "+(Z(2*g$)+"px)")),a(B,"max-height",i),Se,Fr(ha),Oo(ju),rt(se(Pt.n8+a(Ge,999,n.a4-1-n.d2))),Lt(Wo),a(B,"will-change","transform"),a(B,"user-select","none"),a(B,"-webkit-user-select","none"),ia(lw)])),$o(g),a(Dm,"transform",a(vw,n.bv,c))]),f([v(Bw,e,n,d),a(gw,l,n.lM)]))}else return $e("")}),Vw=Ae(function(e,r,n,t,o){return n.jN?$e(""):v(bo,e,r,{bv:b3(t.lY),lM:o.lM,bE:o.bE,bG:n.ip,a4:t.a4,d2:t.d2,o7:o.o7,o9:o.o9,v:n.v})}),Ew=A(function(e,r,n){if(Ye(n.cq))return $e("");var t=ov(n.ip),o=Ar(t),c=xn(a(yn,s(function(u,$){return y($.bE,u)}),n.cq)),i=xn(a(O,function(u){return y(u.bE,u)},n.cq));return a(X,f([$o($k(n.gj))]),f([a(uw,e,n),a(X,S,a(yn,s(function(u,$){var l=a(rr,$,i);if(l.$)return $e("");var d=l.a;return U(Vw,e,r,n,{lY:a(fe,0,a(rr,$,c)),a4:o,d2:u},d)}),t)),hm(n.ip)]))}),Hw=Br(function(e,r,n,t,o,c){var i=a(rr,c,n.cT);if(i.$)return D;var u=i.a,$=Ln(r.bD),l=tu({hl:u.hl,cc:u.cc,aG:r.aG,bD:V(r.bD),bE:u.bE,g:a(Uv,o,n.g),nD:u.nD,nO:Lc(r.bD),tg:t$(u),aM:u.aM,cB:t,pu:u.pu,pD:o$(r.bD)}),d=v(p3,"play:view",v(e.a7.bp,l,n.O,$),u.bG),b=x(e.a7.cq,l,n.O,$,u.bG),g=a(O,function(C){return{lM:a(_u,zo(c),C.lM),mL:a(_u,zo(c),C.mL),bE:C.bE,oJ:C.oJ,o7:C.o7,o9:C.o9}},b),_=Yn(v(Ew,$,l,{jN:l.pD,gj:c,ip:u.ip,cq:g,v:m2(c)})),p=oe(r.aG,V(c)),m=a(Ee,function(C){return C.bt},Ln(r.bD)),P=p?"4px solid "+pe(m):"none";return V(y(c,a(br,f([E3(c),a(T3,"data-play-pane",c),a(I,"outline",P),a(I,"border-radius","inherit")]),f([a(hu,zo(c),d),_]))))}),Hm=function(e){return{$:1,a:e}},Iw=s(function(e,r){return a(C$,e,Hm(r))}),Zo=Ct("className"),R$=Re(f([Fa(Je(.4)),a(B,"pointer-events","none")])),Ua=function(e){switch(e){case 0:return a(We,function(r){return r.kv},function(r){return r.p3});case 1:return a(We,function(r){return r.kv},function(r){return r.st});case 2:return a(We,function(r){return r.kv},function(r){return r.rO});case 3:return a(We,function(r){return r.kv},function(r){return r.vm});case 4:return a(We,function(r){return r.kv},function(r){return r.tJ});case 5:return function(r){return r.bt};case 6:return function(r){return r.bt};default:return a(We,function(r){return r.kv},function(r){return r.qL})}},Ss=be("padding-bottom"),Im=320,Ur={sN:'ui-monospace, "SF Mono", Menlo, Monaco, "Cascadia Mono", "Roboto Mono", Consolas, monospace',s5:'"Nunito", system-ui, sans-serif',uO:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},q$=be("flex-grow"),Fm=function(e){return a(X,f([G(f([ze(w(1)),q$(se(1)),a(B,"background-color",pe(a(Ee,function(r){return r.jg},e)))]))]),S)},Or=be("margin-bottom"),Um=s(function(e,r){return a(X,f([G(f([Se,Qe(we),a(B,"gap","14px"),Or(w(18))]))]),f([Fm(e),a(X,f([G(f([a(B,"font-family",Ur.uO),Re(fa.rT),vo(At(.18)),F$(U$),ve(a(ee,function(n){return n.le},e)),_r(se(0)),a(B,"white-space","nowrap")]))]),f([$e(r)])),Fm(e)]))}),Fw=s(function(e,r){return{$:4,a:e,b:r}}),Uw=s(function(e,r){return{$:3,a:e,b:r}}),Rw=s(function(e,r){return{$:0,a:e,b:r}}),qw=s(function(e,r){return{$:2,a:e,b:r}}),Gw=s(function(e,r){return{$:5,a:e,b:r}}),Ww=s(function(e,r){return{$:1,a:e,b:r}}),ai=jn("input"),xs=Ct("max"),js=Ct("min"),Ow=function(e){return y(e,!0)},ku=s(function(e,r){return a(ms,e,Hm(r))}),ks=a(Rc,f(["target","value"]),ke),wu=function(e){return a(ku,"input",a(Ze,Ow,a(Ze,e,ks)))},ws=function(e){return a(Ct,"step",e)},Jo=Ct("type"),ni=Ct("value"),Rm=function(e){return a(ai,f([Jo("range"),js(e.j9),xs(e.j6),ws(e.k0),ni(e.ln),xu(e.qZ),wu(e.kr),Zo("ui-slider"),G(f([xe(Ke(100)),ze(w(32)),a(B,"-webkit-appearance","none"),a(B,"appearance","none"),je(ri),a(B,"cursor","grab"),vn(lr),a(B,"touch-action","none"),a(B,"--slider-fill",Z(e.jD)+"%"),e.qZ?R$:Re(S)]))]),S)},qm=function(e){var r=ce(e.nE,e.nJ)>0?100*(e.uZ-e.nJ)/(e.nE-e.nJ):0;return Rm({qZ:e.qZ,jD:r,j6:Z(e.nE),j9:Z(e.nJ),kr:function(n){return e.ii(a(fe,e.uZ,no(n)))},k0:Z(e.um),ln:Z(e.uZ)})},Ls=be("space-between"),xr=jn("span"),Gm=s(function(e,r){return a(X,f([G(f([Se,Qe(we),qr(Ls),a(B,"gap","12px"),a($r,w(10),le)]))]),f([a(xr,f([G(f([ve(a(ee,function(n){return n.lf},e)),Re(fa.jV),a(B,"font-family",Ur.uO)]))]),f([$e(r.jV)])),r.ew]))}),Nw=function(e){var r=e.nE-e.nJ,n=r>0?100*(e.uZ-e.nJ)/r:0;return Rm({qZ:e.qZ,jD:n,j6:er(e.nE),j9:er(e.nJ),kr:function(t){return e.ii(a(fe,e.uZ,Ni(t)))},k0:"1",ln:er(e.uZ)})},G$=function(e){return a(B,"border-color",e.uZ)},Zw=(function(){var e="#6D6553",r="#A39980";return"linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 0 0 / 8px 8px,"+(" linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 4px 4px / 8px 8px,"+(" "+r))))))))))})(),Wm=be("display"),Lu=w$("focus"),As=function(e){return Re(f([a(B,"outline","3px solid "+pe(a(mr,.25,e))),a(B,"outline-offset","0")]))},Jw={q_:0,uZ:"inline-block"},Ts="ui-color-swatch-popover",Au={jb:0,hf:0,uZ:"border-box"},Tu=be("box-sizing"),Xw=290,Yw=function(e){var r=no(e);if(r.$)return 0;var n=r.a;return v(dr,0,1,n)},Ms=s(function(e,r){var n=(function(){var c=r.iW;if(c.$)return S;var i=c.a;return f([a(xr,f([G(f([a(B,"font-family",Ur.sN),vr(w(13)),Sr(se(600)),xe(w(40)),_r(se(0)),a(B,"text-align","right"),ve(a(ee,function(u){return u.lf},e))]))]),f([$e(i)]))])})(),t=a(ai,f([Jo("range"),js("0"),xs("1"),ws("0.01"),ni(Z(r.uZ)),wu(function(c){return r.ii(Yw(c))}),Zo(r.iw),a(Oe,"aria-label",r.jV),G(f([Yc(se(1)),ze(w(26)),a(B,"-webkit-appearance","none"),a(B,"appearance","none"),a(B,"--track",r.hQ),a(B,"background-color","transparent"),vn(lr),a(B,"cursor","grab"),a(B,"touch-action","none"),ln(le)]))]),S),o=a(xr,f([G(f([a(B,"font-family",Ur.sN),vr(w(14)),Sr(se(700)),xe(w(18)),_r(se(0)),ve(a(ee,function(c){return c.lf},e))]))]),f([$e(r.jV)]));return a(X,f([G(f([Se,Qe(we),a(B,"gap","10px")]))]),Q(f([o,t]),n))}),Ra=T9,Om="linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 0 0 / 14px 14px, linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 7px 7px / 14px 14px, #a39980",Qw=s(function(e,r){var n=r.uZ,t="linear-gradient(to right, transparent, "+(pe(a(mr,1,n))+("), "+Om));return a(Ms,e,{hQ:t,jV:"\u03B1",ii:function(o){return r.ii(E(n,{aQ:o}))},iw:"ui-hsla-alpha",iW:V(er(Ra(n.aQ*100))+"%"),uZ:n.aQ})}),Kw=s(function(e,r){var n=Me(e-r);return a(Ge,n,1-n)}),Rr=A(function(e,r,n){return{aQ:1,aT:e,C:n,a1:r}}),Nm=f([v(Rr,6/360,.9,.62),v(Rr,33/360,1,.55),v(Rr,46/360,1,.55),v(Rr,80/360,.7,.52),v(Rr,150/360,.65,.46),v(Rr,172/360,.75,.45),v(Rr,185/360,1,.46),v(Rr,217/360,.88,.58),v(Rr,239/360,.84,.67),v(Rr,270/360,.8,.65),v(Rr,330/360,1,.69),v(Rr,350/360,.9,.63)]),Mu=$9,eL=function(e){return a(fe,0,a(he,Pn,Mr(a(Mu,Uf,a(yn,s(function(r,n){return y(r,a(Kw,n.aT,e.aT))}),Nm)))))},rL=function(e){return e?"0 0 0 3px rgba(0, 0, 0, 0.55), 0 0 0 6px #fff, 0 4px 10px -3px rgba(0, 0, 0, 0.5)":"inset 0 0 0 1px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.5)"},Zm=32,aL=A(function(e,r,n){return a(jt,f([kt(e.ii(a(mr,e.uZ.aQ,n))),a(Oe,"aria-label","preset colour"),G(f([xe(w(Zm)),ze(w(Zm)),_r(se(0)),tr(Ke(50)),Qc(le),ln(le),ia(sn),je(ur(n)),a(B,"box-shadow",rL(r))]))]),S)}),nL=function(e){var r=e.uZ.a1<.08?-1:eL(e.uZ);return a(X,f([G(f([a(B,"display","grid"),a(B,"grid-template-columns","repeat(6, 1fr)"),a(B,"gap","10px"),a(B,"justify-items","center")]))]),a(yn,s(function(n,t){return v(aL,e,oe(n,r),t)}),Nm))},tL=s(function(e,r){return a(z,function(n){var t=Ab(n);if(t.$)return Kn("invalid hex");var o=t.a;return ae(r(a(mr,e.aQ,o)))},ks)}),oL=I3,Jm=oL,Ds=A(function(e,r,n){var t=n<0?n+1:n>1?n-1:n;return ce(t,1/6)<0?e+(r-e)*6*t:ce(t,1/2)<0?r:ce(t,2/3)<0?e+(r-e)*(2/3-t)*6:e}),cL=A(function(e,r,n){if(r<1e-10)return{ja:n,jK:n,kL:n};var t=n<.5?n*(1+r):n+r-n*r,o=2*n-t;return{ja:v(Ds,o,t,e-1/3),jK:v(Ds,o,t,e),kL:v(Ds,o,t,e+1/3)}}),Xm=function(e){switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";default:return"f"}},zs=function(e){var r=v(dr,0,255,e),n=r/16|0,t=a(ja,16,r);return Q(dt(Xm(n)),dt(Xm(t)))},iL=function(e){var r=v(cL,e.aT,e.a1,e.C);return"#"+(zs(Ra(r.kL*255))+(zs(Ra(r.jK*255))+zs(Ra(r.ja*255))))},uL=s(function(e,r){var n=y2(iL(r.uZ));return v(Jm,"div",f([G(f([Se,Qe(we),a(B,"gap","12px")]))]),f([y(n,a(ai,f([Jo("text"),a(Oe,"value",n),a(Oe,"pattern","#?[0-9A-Fa-f]{6}"),a(Oe,"spellcheck","false"),a(Oe,"aria-label","Hex colour"),Zo("ui-hex-input"),a(ua,"change",a(tL,r.uZ,r.ii)),G(f([xe(Ke(50)),_r(se(0)),Tu(Au),a(B,"font-family",Ur.sN),vr(w(15)),Sr(se(600)),vo(At(.06)),F$(U$),ve(a(ee,function(t){return t.le},e)),je(a(ee,function(t){return t.D},e)),v(xt,w(1),Da,a(ee,function(t){return t.jg},e)),tr(ga.sz),a($r,w(9),w(12)),vn(lr)]))]),S)),y("warn",a(X,f([Zo("ui-hex-warn")]),f([$e("invalid hex")])))]))}),Bs=A(function(e,r,n){return"hsl("+(Z(e*360)+(", "+(Z(r*100)+("%, "+(Z(n*100)+"%)")))))}),fL=s(function(e,r){var n=r.uZ,t="linear-gradient(to right, #000, "+(v(Bs,n.aT,n.a1,.5)+", #fff)");return a(Ms,e,{hQ:t,jV:"L",ii:function(o){return r.ii(E(n,{C:o}))},iw:"ui-hsla-rail",iW:D,uZ:n.C})}),Ym=120,$L=function(e){return a(X,f([G(f([Se,qr(we)]))]),f([a(X,f([G(f([ir(Go),xe(w(Ym)),ze(w(Ym)),tr(Ke(50)),Oo(ju),a(B,"background",Om),a(B,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 12px 26px -10px rgba(0, 0, 0, 0.6)")]))]),f([a(X,f([G(f([ir(Tn),Ma(le),Xr(le),St(le),at(le),a(B,"background",pe(e))]))]),S)]))]))},lL=s(function(e,r){var n=r.uZ,t="linear-gradient(to right, "+(v(Bs,n.aT,0,n.C)+(", "+(v(Bs,n.aT,1,n.C)+")")));return a(Ms,e,{hQ:t,jV:"S",ii:function(o){return r.ii(E(n,{a1:o}))},iw:"ui-hsla-rail",iW:D,uZ:n.a1})}),vL=s(function(e,r){return a(X,f([G(f([Se,Fr(ha),a(B,"gap","18px"),xe(w(Xw)),Tu(Au),ln(w(18)),je(a(ee,function(n){return n.k3},e)),v(xt,w(1),Da,a(ee,function(n){return n.jg},e)),tr(ga.vd),ve(a(ee,function(n){return n.le},e)),a(B,"font-family",Ur.uO)]))]),f([$L(r.uZ),a(uL,e,r),nL(r),a(lL,e,r),a(fL,e,r),a(Qw,e,r)]))}),sL=function(e){return E(e,{aQ:1})},dL=s(function(e,r){var n=pe(r.uZ),t=pe(sL(r.uZ));return a(X,f([G(f([Wm(Jw)]))]),f([a(jt,f([a(Oe,"popovertarget",r.bE),a(Oe,"aria-label","Pick colour"),a(Oe,"aria-haspopup","dialog"),a(Dm,"background","linear-gradient(135deg, transparent 50%, "+(t+(" 50%), "+("linear-gradient(135deg, "+(n+(", "+(n+("), "+Zw)))))))),G(f([xe(w(32)),ze(w(32)),ln(le),v(xt,w(1),Da,a(ee,function(o){return o.jg},e)),tr(ga.sz),ia(sn),Oo(ju),a(B,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.4)"),a(B,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Mn(f([G$(a(ee,function(o){return o.bt},e))])),Lu(f([As(a(Ee,function(o){return o.bt},e))]))]))]),S),a(X,f([$o(r.bE),a(Oe,"popover","auto"),a(Oe,"data-popover",""),Zo(Ts)]),f([a(vL,e,{ii:r.ii,uZ:r.uZ})]))]))}),Qm=be("baseline"),W$=s(function(e,r){return a(X,f([G(f([a($r,w(10),le)]))]),f([a(X,f([G(f([Se,Qe(Qm),qr(Ls),a(B,"gap","12px"),Or(w(8))]))]),f([a(xr,f([G(f([ve(a(ee,function(n){return n.lf},e)),Re(fa.jV),a(B,"font-family",Ur.uO)]))]),f([$e(r.jV)])),(function(){var n=r.uZ;if(n.$)return $e("");var t=n.a;return a(xr,f([G(f([ve(a(ee,function(o){return o.bt},e)),Re(fa.jV),Sr(se(600)),a(B,"font-family",Ur.sN),a(B,"font-feature-settings",'"tnum"')]))]),f([$e(t)]))})()])),r.ew]))}),Km=Ct("placeholder"),qW=te,bL=s(function(e,r){return{$:3,a:e,b:r}}),O$=function(e){return bL(e)},ti={sp:w(16),sz:w(12),oN:w(8),vd:w(24),ve:w(4),vf:w(32),vg:w(2),vh:w(48)},pL=s(function(e,r){return a(ai,f([Jo("text"),ni(r.uZ),Km(r.kI),wu(r.ii),G(f([xe(Ke(100)),a($r,w(10),ti.sz),je(a(ee,function(n){return n.k3},e)),ve(a(ee,function(n){return n.le},e)),v(xt,w(1),Da,a(ee,function(n){return n.jg},e)),tr(ga.sz),a(B,"font-family",Ur.sN),Re(fa.lM),vn(lr),a(B,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Lu(f([G$(a(ee,function(n){return n.bt},e)),As(a(Ee,function(n){return n.bt},e))])),a(O$,"placeholder",f([ve(a(ee,function(n){return n.lc},e))]))]))]),S)}),N$=Mm("padding"),mL=jn("option"),hL=xm("selected"),gL=s(function(e,r){return a(mL,f([ni(r),hL(oe(r,e))]),f([$e(r)]))}),_L=jn("select"),yL=s(function(e,r){return a(_L,f([a(ua,"change",a(Ze,r.tb,ks)),G(f([xe(Ke(100)),a(B,"appearance","none"),a(B,"-webkit-appearance","none"),je(a(ee,function(n){return n.k3},e)),ve(a(ee,function(n){return n.le},e)),v(xt,w(1),Da,a(ee,function(n){return n.jg},e)),tr(ga.sz),x(N$,w(10),w(34),w(10),ti.sz),a(B,"font-family",Ur.uO),Re(fa.lM),Sr(se(500)),ia(sn),a(B,"background-image",`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D4A244' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M3 5l3 3 3-3'/></svg>")`),a(B,"background-repeat","no-repeat"),a(B,"background-position","right 12px center"),vn(lr),a(B,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), background-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Mn(f([G$(a(ee,function(n){return n.i$},e)),je(a(ee,function(n){return n.k4},e))])),Lu(f([G$(a(ee,function(n){return n.bt},e)),a(B,"box-shadow","0 0 0 3px "+pe(a(mr,.25,a(Ee,function(n){return n.bt},e))))]))]))]),a(O,gL(r.t3),r.th))}),CL=O$("after"),PL=Y(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),Du=Y(function(e,r,n,t){return x(PL,e,r,n,t)}),Z$={cM:{p_:200,rt:120,ub:320},hF:{rc:x(Du,.33,1,.68,1),jL:x(Du,.45,.05,.25,1),r4:x(Du,.65,0,.35,1),ue:x(Du,.2,.9,.25,1),ug:x(Du,.34,1.56,.64,1)}},J$=function(e){return E$(f([e]))},Vs=function(e){var r=e.uZ;return{lh:0,uZ:a(Jc,"translateX",f([r]))}},e5=s(function(e,r){var n=r.m3?a(ee,function(i){return i.bt},e):a(ee,function(i){return i.jg},e),t=r.m3?20:0,o=r.m3?a(B,"box-shadow","0 0 14px "+pe(a(mr,.4,a(Ee,function(i){return i.bt},e)))):Tm(lr),c=r.m3?a(ee,function(i){return i.le},e):a(ee,function(i){return i.lc},e);return a(jt,f([G(f([ir(Go),xe(w(46)),ze(w(26)),je(n),tr(ga.tr),Qc(le),ia(sn),vn(lr),H$(f([v(bs,220,0,Z$.hF.jL)])),_r(se(0)),CL(f([a(B,"content",'""'),ir(Tn),Ma(w(2)),Xr(w(2)),xe(w(22)),ze(w(22)),je(c),tr(Ke(50)),J$(Vs(w(t))),o,H$(f([v(jm,220,0,Z$.hF.ug),v(bs,220,0,Z$.hF.jL),v(Sm,220,0,Z$.hF.jL)]))])),r.qZ?R$:Re(S)])),kt(r.n3),xu(r.qZ),a(Oe,"aria-pressed",r.m3?"true":"false"),a(Oe,"aria-label",r.jV)]),S)}),SL=s(function(e,r){var n=r.a,t=r.b;switch(t.$){case 0:var o=t.a,i=o.a,u=o.b,$=t.b;return a(W$,e,{ew:qm({qZ:!1,nE:u,nJ:i,ii:Rw(n),um:.01*(u-i),uZ:$}),jV:n,uZ:V(a(Mc,2,$))});case 2:var c=t.a,i=c.a,u=c.b,$=t.b;return a(W$,e,{ew:Nw({qZ:!1,nE:u,nJ:i,ii:qw(n),uZ:$}),jV:n,uZ:V(er($))});case 4:var $=t.a;return a(Gm,e,{ew:a(e5,e,{qZ:!1,m3:$,jV:n,n3:a(Fw,n,!$)}),jV:n});case 1:var $=t.a;return a(W$,e,{ew:a(pL,e,{ii:Ww(n),kI:"",uZ:$}),jV:n,uZ:D});case 3:var $=t.a;return a(Gm,e,{ew:a(dL,e,{bE:"play-config-color-"+n,ii:Uw(n),uZ:$}),jV:n});default:var l=t.a;return a(W$,e,{ew:a(yL,e,{tb:Gw(n),th:Xf(l),t3:Do(l)}),jV:n,uZ:D})}}),xL=s(function(e,r){return a(X,f([G(f([a($r,le,w(20))]))]),f([a(Um,e,r.sT),a(X,S,a(O,SL(e),r.a9))]))}),GW=1,WW=1,jL=Y(function(e,r,n,t){return{bx:r,bF:n,bM:t,bS:e}}),kL=U(Ic,jL,a(k,"top",N),a(k,"bottom",N),a(k,"left",N),a(k,"right",N)),r5=a(Rc,f(["currentTarget","boundingClientRect"]),kL),wL=function(e){return a(ua,"click",a(Ze,e,r5))},LL=s(function(e,r){var n=(function(){return r?y(40,ti.sp):y(32,ti.sz)})(),t=n.a,o=n.b;return f([ze(w(t)),a($r,le,o),tr(ga.tr),Qc(le),ia(sn),vn(lr),a(B,"font-family",Ur.uO),Re(fa.jV),Se,Qe(we),qr(we),a(B,"gap","6px"),a(B,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Lu(f([As(a(Ee,function(c){return c.bt},e))]))])}),Es=function(e){return a(Lr,"",e)},Hs=function(e){return a(B,"box-shadow",Es(f(["inset ",Z(e*1.5),"px ",Z(e*1.5),"px ",Z(e*3),"px ",pe(a(mr,.6,Po)),", inset 0 0 0 1px ",pe(a(mr,.35,Po))])))},a5=s(function(e,r){return U(Pu,le,le,le,w(e),ur(r))}),AL=A(function(e,r,n){var t=s(function(i,u){return n?Q(i,u):i});switch(r){case 0:var o=f([je(a(ee,function(i){return i.bt},e)),ve(a(ee,function(i){return v(_s,.6,i.bt,i.le)},e)),a(a5,1,a(Ee,function(i){return i.i$},e))]),c=f([je(a(ee,function(i){return i.i$},e)),Hs(1.5)]);return Q(a(t,o,c),f([Mn(f([je(a(ee,function(i){return i.i0},e))])),Su(c)]));case 1:var o=f([je(a(ee,function(i){return i.k3},e)),ve(a(ee,function(i){return i.le},e)),a(a5,1,a(Ee,function(i){return i.jg},e))]),c=f([je(a(ee,function(i){return i.k6},e)),Hs(1.5)]);return Q(a(t,o,c),f([Mn(f([je(a(ee,function(i){return i.k4},e))])),Su(c)]));default:var o=f([je(ri),ve(a(ee,function(i){return i.lf},e))]),c=f([je(a(ee,function(i){return i.k6},e)),ve(a(ee,function(i){return i.le},e)),Hs(1.5)]);return Q(a(t,o,c),f([Mn(f([je(a(ee,function(i){return i.k3},e)),ve(a(ee,function(i){return i.le},e))])),Su(c)]))}}),n5=A(function(e,r,n){var t=(function(){var o=r.X;return o?18:16})();return a(jt,a(M,G(Q(a(LL,e,r.X),Q(v(AL,e,r.u_,r.sd),r.qZ?f([R$]):S))),a(M,xu(r.qZ),n)),(function(){var o=r.mL;if(o.$)return f([$e(r.jV)]);var c=o.a;return f([a(xr,f([G(f([Se,Qe(we),qr(we),xe(w(t)),ze(w(t)),_r(se(0))]))]),f([c])),$e(r.jV)])})())}),TL=s(function(e,r){return v(n5,e,{qZ:!1,mL:D,sd:!1,jV:r.jV,X:1,u_:1},f([wL(r.gw)]))}),ML=function(e){return a(X,f([G(f([x(N$,w(8),w(20),w(36),w(20)),Se,qr(we)]))]),f([a(TL,e.e,{jV:"Reset Page's Configurations",gw:e.hs.n0})]))},t5=s(function(e,r){return v(n5,e,{qZ:r.qZ,mL:r.mL,sd:r.sd,jV:r.jV,X:r.X,u_:r.u_},f([kt(r.gw)]))}),DL=s(function(e,r){return a(t5,e,{qZ:!1,mL:D,sd:!1,jV:r.jV,gw:r.gw,X:1,u_:1})}),o5={dH:0,uZ:"bold"},zL=be("margin"),za=be("margin-top"),Is=be("max-width"),X$=function(e){return v(L$,"textAlign","text-align",e(A$))},BL=(function(){var e=v(Rr,.11,.55,.2),r=v(Rr,.13,.8,.62),n=v(Rr,.13,.9,.9),t="play-reset-interface-help",o=function($){return a(X,f([G(f([a($r,w(2),le)]))]),f([$e("\u2022 "+$)]))},c=v(Rr,.13,1,.58),i=v(Rr,.13,.95,.52),u=v(Rr,.12,.85,.16);return a(xr,f([G(f([Se,Qe(we)]))]),f([a(jt,f([Jo("button"),a(Oe,"popovertarget",t),a(Oe,"aria-label","What does resetting Play's interface clear?"),G(f([xe(w(20)),ze(w(20)),ln(le),a(B,"border","none"),tr(Ke(50)),ia(sn),Sr(o5),vr(w(13)),Gr(w(20)),X$(we),a(B,"background-color",pe(i)),a(B,"color",pe(u)),a(B,"transition","background-color 160ms"),Mn(f([a(B,"background-color",pe(c))])),Lu(f([a(B,"outline","2px solid "+pe(c)),a(B,"outline-offset","2px")]))]))]),f([$e("?")])),a(X,f([$o(t),a(Oe,"popover","auto"),a(Oe,"data-popover",""),G(f([ir(wt),zL(le),a(B,"pointer-events","auto"),Is(w(250)),a($r,w(12),w(14)),tr(w(10)),vr(w(12.5)),Gr(Je(1.5)),a(B,"background-color",pe(n)),a(B,"color",pe(e)),a(B,"border","1px solid "+pe(r)),a(B,"box-shadow","0 6px 20px rgba(0, 0, 0, 0.28)")]))]),f([a(X,f([G(f([Sr(o5),Or(w(8))]))]),f([$e("Resetting Play's interface clears, for this browser:")])),o("Panel positions & sizes"),o("Light / dark theme"),o("Play / author mode"),o("Device-preview frame"),o("Tape \u201Crecord from start\u201D preference"),a(X,f([G(f([za(w(8)),Fa(Je(.85))]))]),f([$e("Your configuration values (in the page URL) and any saved content aren\u2019t affected.")]))]))]))})(),VL=function(e){return a(X,f([G(f([x(N$,w(16),w(20),w(4),w(20)),Se,Qe(we),qr(we),a(B,"gap","8px")]))]),f([a(DL,e.e,{jV:"Reset Play's Interface",gw:e.ko}),BL]))},EL=function(e){var r=Ye(e.qx.cc)?$e(""):ML(e);return a(X,f([G(f([xe(w(Im))]))]),f([VL(e),r,a(_u,e.gx,a(X,f([G(f([Se,Fr(ha),a(B,"gap","18px"),Ss(w(16))]))]),a(O,xL(e.e),e.qx.cc)))]))},HL=function(e){if(!e.ca.gf||e.pD)return $e("");var r=v(bo,e.e,e.qx,{bv:fo(0),lM:EL(e),bE:0,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(0),o7:Ua(0),o9:"Configurations",v:e.aY});return _t(e.uA)?a(X,f([G(f([R$]))]),f([r])):r},Fs=function(e){return{$:1,a:e}},OW=0,NW=0,IL=function(e){return e?yr.qW:yr.qX},FL=function(e){return e?"Landscape":"Portrait"},ZW=1,JW=3,XW=2,UL={$:2},RL=s(function(e,r){return{$:0,a:e,b:r}}),qL={$:1},GL={$:3},WL=function(e){return a(ua,"mousedown",ae(e))},OL=function(e){return a(ua,"mouseleave",ae(e))},Mt=s(function(e,r){return f([a(ua,"mouseenter",a(Ze,function(n){return e(a(RL,r,n))},r5)),OL(e(qL)),WL(e(UL)),a(ua,"mousemove",ae(e(GL)))])}),Y$=s(function(e,r){var n=Ar(r.sj),t=function(c){return n<=1?0:c?oe(c,n-1)?3:2:1},o=s(function(c,i){var u=r.sh(i);return a(Lm,e,{i8:"radio",i9:y("aria-checked",_m(u)),qZ:r.qZ,mL:r.mL(i),m3:u,jV:r.si(i),gw:r.tb(i),ki:r.t4(i),dY:r.dY,tB:t(c),du:a(Mt,r.tc,{eE:r.uJ,jV:r.si(i),oJ:r.oJ(i)})})});return v(Pm,{qZ:r.qZ,dY:r.dY},f([a(Oe,"role","radiogroup"),a(Oe,"aria-label",r.jV)]),a(yn,o,r.sj))}),NL=Y(function(e,r,n,t){return a(X,f([G(f([Se,qr(we),a($r,w(6),w(0))]))]),f([a(Y$,e,{qZ:!1,mL:IL,sh:en(t),si:FL,sj:f([0,1]),jV:"Orientation",tb:a(nr,r.v,Fs),tc:n,dY:0,t4:function(o){return function(c){return c.bt}},oJ:function(o){return D},uJ:0})]))}),zu=function(e){return{jh:a(ee,function(r){return r.jh},e),kU:gs.ra,D:a(ee,function(r){return r.D},e),k7:a(ee,function(r){return r.k6},e),lc:a(ee,function(r){return r.lc},e),le:a(ee,function(r){return r.le},e),lf:a(ee,function(r){return r.lf},e),g3:Pt.n8}},ZL=function(e){return{$:0,a:e}},c5=function(e){return{$:3,a:e}},oi=s(function(e,r){return a(ms,e,c5(r))}),JL={$:2},XL={$:1},YL={$:3},QL={$:4},Us=jh,KL=wr(Us,Ae(function(e,r,n,t,o){return{i2:t,js:r,jT:e,j7:o,kV:n}}),a(k,"key",ke),a(k,"ctrlKey",ne),a(k,"shiftKey",ne),a(k,"altKey",ne),a(k,"metaKey",ne)),eA=s(function(e,r){return a(Ze,function(n){var t=n.j7,o=n.i2,c=n.kV,i=n.js,u=n.jT,$=i||o||t;if($)return{T:e.v(La),W:!1,Z:!1};if(u==="Tab")return{T:e.v(La),W:!0,Z:!0};if(u==="ArrowUp")return{T:e.v(XL),W:!0,Z:!0};if(u==="ArrowDown")return{T:e.v(JL),W:!0,Z:!0};if(u==="Enter")return{T:e.v(YL),W:!0,Z:!0};if(u==="Escape")return{T:e.v(QL),W:!0,Z:!0};if(u==="ArrowLeft"||u==="ArrowRight"){if(r.$)return{T:e.v(La),W:!1,Z:!1};var l=r.a;return{T:u==="ArrowLeft"?l.s8:l.ta,W:!0,Z:!0}}else return{T:e.v(La),W:!1,Z:!1}},KL)}),i5=5,rA=function(e){return v(yt,e,!1,"")},u5=rA,aA={W:!0,Z:!1},nA=s(function(e,r){return a(C$,e,c5(r))}),tA=Ae(function(e,r,n,t,o){return{qC:o,sg:t,tw:r,ty:n,tz:e}}),oA=Ae(function(e,r,n,t,o){return{jM:r,tE:n,uD:t,uE:o,lq:e}}),cA=wr(Us,oA,a(k,"width",N),a(k,"height",N),a(k,"pressure",N),a(k,"tiltX",N),a(k,"tiltY",N)),iA=Br(function(e,r,n,t,o,c){return{qg:r,qt:n,bc:e,s6:t,tj:o,t_:c}}),YW=4,QW=0,KW=5,eO=1,rO=2,aO=3,uA=function(e){switch(e){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;default:return 0}},fA=a(Ze,uA,a(k,"button",qi)),$A=v(Xn,s(function(e,r){return y(e,r)}),a(k,"clientX",N),a(k,"clientY",N)),lA=Y(function(e,r,n,t){return{i2:e,js:r,j7:n,kV:t}}),vA=U(Ic,lA,a(k,"altKey",ne),a(k,"ctrlKey",ne),a(k,"metaKey",ne),a(k,"shiftKey",ne)),sA=v(Xn,s(function(e,r){return y(e,r)}),a(k,"offsetX",N),a(k,"offsetY",N)),dA=v(Xn,s(function(e,r){return y(e,r)}),a(k,"pageX",N),a(k,"pageY",N)),bA=v(Xn,s(function(e,r){return y(e,r)}),a(k,"screenX",N),a(k,"screenY",N)),pA=ra(p2,iA,vA,fA,$A,sA,dA,bA),nO=0,tO=2,oO=1,mA=function(e){switch(e){case"pen":return 2;case"touch":return 1;default:return 0}},hA=a(Ze,mA,ke),gA=wr(Us,tA,a(k,"pointerType",hA),pA,a(k,"pointerId",qi),a(k,"isPrimary",ne),cA),_A=A(function(e,r,n){return a(nA,e,a(Ze,function(t){return{T:n(t),W:r.W,Z:r.Z}},gA))}),f5=a(_A,"pointerdown",aA),yA=function(e){return{$:5,a:e}},CA=function(e){return{$:6,a:e}},PA=Y(function(e,r,n,t){return a(X,f([u5(f5(function(o){return e.v(CA(t))})),kt(e.v(yA(t)))]),f([a(r,n,t)]))}),SA=Y(function(e,r,n,t){return Ye(t.aS)?a(X,f([G(f([ze(w(e.fa)),Se,Qe(we),qr(we),ve(r.lc),_r(se(0))]))]),f([$e("No matching items")])):v(Jm,"div",f([$o(Eo(e)),G(f([ze(w(e.fa)),x(N$,w(0),w(4),w(0),w(4)),Oo(Wo),a(B,"overscroll-behavior","contain"),_r(se(0)),Se,Fr(ha)])),u5(f5(function(o){return e.v(La)})),a(ua,"scroll",a(Ze,a(We,rs,e.v),a(Rc,f(["currentTarget","scrollTop"]),N))),a(oi,"wheel",ae({T:e.v(La),W:!1,Z:!0}))]),(function(){var o=Ar(t.aS),c=a(Ge,o-1,U0((t.b1+e.fa)/co)+i5),i=a(Pe,0,Yt(t.b1/co)-i5),u=i*co,$=a(yn,s(function(d,b){var g=i+d;return y(er(g),x(PA,e,n,oe(g,t.av),b))}),a(ao,c-i+1,a(pt,i,t.aS))),l=a(Pe,0,o-1-c)*co;return a(M,y("top-spacer",a(X,f([G(f([ze(w(u)),_r(se(0))]))]),S)),Q($,f([y("bottom-spacer",a(X,f([G(f([ze(w(l)),_r(se(0))]))]),S))])))})())}),xA=function(e){return{$:9,a:e}},jA=function(e){return a(Ze,function(r){return{T:e.v(xA(r)),W:!0,Z:!0}},a(k,"deltaY",N))},Q$=Gt(function(e,r,n,t,o,c,i){var u=i;return a(X,f([G(f([ve(r.lf),Se,Fr(ha),a(B,"gap","8px"),xe(Ke(100))])),a(oi,"keydown",a(eA,e,t)),a(oi,"mousedown",ae({T:e.v(La),W:!1,Z:!0})),a(oi,"pointerdown",ae({T:e.v(La),W:!1,Z:!0})),a(oi,"pointerup",ae({T:e.v(La),W:!1,Z:!0})),a(oi,"wheel",jA(e))]),Q(n,Q(f([a(ai,f([Jo("text"),$o(j3(e)),a(Oe,"data-select-all-on-focus","true"),Km(e.kI),G(f([xe(Ke(100)),_r(se(0)),a($r,w(8),w(8)),tr(w(4)),vn(lr),je(r.k7),ve(r.le),a(O$,"placeholder",f([ve(r.lc)]))])),wu(a(We,ZL,e.v)),ni(u.iG)]),S),x(SA,e,r,o,u)]),c)))}),Bu=function(e){return e.C>.55?{aQ:1,aT:0,C:.1,a1:0}:{aQ:1,aT:0,C:.98,a1:0}},kA=function(e){return Z(e.X.lq)+(" \xD7 "+Z(e.X.jM))},$5=A(function(e,r,n){var t=r?Re(f([je(a(ee,function(c){return c.bt},e)),ve(a(ee,a(We,function(c){return c.bt},Bu),e))])):ve(a(ee,function(c){return c.le},e)),o=r?a(ee,a(We,function(c){return c.bt},Bu),e):a(ee,function(c){return c.lf},e);return a(X,f([G(f([a($r,w(0),w(12)),ze(w(32)),Se,Qe(we),Tu(Au),a(B,"gap","10px"),t]))]),f([a(xr,f([G(f([q$(se(1)),vr(w(13))]))]),f([$e(n.sT)])),a(xr,f([G(f([vr(w(12)),ve(o)]))]),f([$e(kA(n))]))]))}),wA=Y(function(e,r,n,t){var o=t;return ra(Q$,zc(r),zu(e),f([x(NL,e,r,n,o.dY)]),V({s8:r.v(Fs(0)),ta:r.v(Fs(1))}),$5(e),S,o.bj)}),Rs=Y(function(e,r,n,t){return a(X,f([G(f([ir(wt),Ma(le),Xr(le),Fa(Je(.001)),Lt(lr)])),a(Oe,"inert","")]),f([ra(Q$,E(e,{fY:e.fY+"-warmup"}),r,S,D,n,S,t)]))}),LA=A(function(e,r,n){var t=n;return x(Rs,zc(r),zu(e),$5(e),t.bj)}),AA=function(e){if(!e.ca.dJ||e.pD)return $e("");var r={fY:n2,v:e.kl};return a(X,S,f([v(bo,e.e,e.qx,{bv:fo(7),lM:x(wA,e.e,r,e.tc,e.Q),bE:7,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(7),o7:Ua(7),o9:"Device",v:e.aY}),v(LA,e.e,r,e.Q)]))},TA=A(function(e,r,n){return(function(t){return v(cn,e,t,n.bK)})(v(me,e,r,n.bC))}),MA=s(function(e,r){return a(nr,a(TA,e,r),s$)}),DA=function(e){var r=e,n=v(MA,s(function(c,i){var u=i.a,$=i.b;return y(u+1,$+c.hB)}),y(0,0),r.gG),t=n.a,o=n.b;return t>1&&o>0?V(t/o):D},zA=be("flex-end"),l5=function(e){return e*1e3},BA=function(e){var r=e.uZ;return{lh:0,uZ:a(Jc,"translateY",f([r]))}},VA=function(e){return a(X,f([G(f([ir(Tn),xe(Ke(100)),ze(w(1)),E$(f([BA(Ke(-50))])),je(ur(e.kv.rO)),at(w(l5(1/60)))]))]),S)},EA=function(e){return Q(e.bC,Te(e.bK))},HA=a(nr,EA,s$),IA=s(function(e,r){var n=r*1e3;return n<=18?e.kv.rO:n<=33?e.kv.vm:e.kv.tJ}),FA=s(function(e,r){return a(X,f([G(f([Yc(lr),xe(w(4)),ze(w(l5(r))),at(le),je(ur(a(IA,e,r)))]))]),S)}),UA=s(function(e,r){return a(X,f([G(f([ir(Go),ze(w(50)),xe(w(e3*4)),Oo(ju),je(ur(e.k8))]))]),f([VA(e),a(X,f([G(f([ir(Tn),St(le),at(le),ze(Ke(100)),Se,Fr(Zc),Qe(zA)]))]),a(O,a(We,function(n){return n.hB},FA(e)),HA(r)))]))}),v5=s(function(e,r){if(e<0)return r;var n=a(An,10,e),t=l_(n),o=function(c){return c/n};return o(Ra(t(r)))}),RA=s(function(e,r){return e<0?r:a(v5,e,r)}),qA=function(e){return e>=0?"":"-"},Vu=s(function(e,r){var n=function(t){var o=a(gn,".",t);e:for(;;)if(o.b)if(o.b.b){if(o.b.b.b)break e;var c=o.a,i=o.b,u=i.a;return c+("."+v(Kf,e,"0",u))}else{var c=o.a;return c+("."+a(Cc,e,"0"))}else break e;return t};return mv(r)?"NaN":Tc(r)?qA(r)+"Infinity":e<=0?Z(a(RA,e,r)):n(Z(a(v5,e,r)))}),GA=s(function(e,r){return a(X,f([G(f([ve(ur(e.kv.rO))]))]),f([$e("Frame Rate: "),$e(a(fe,"-",a(he,Vu(0),r)))]))}),WA=s(function(e,r){var n=r;return a(X,f([G(f([Se,Fr(ha),a(B,"gap","8px")]))]),f([a(UA,e,n.gG),a(GA,e,DA(r))]))}),s5=function(e){return a(be,"animation-duration",e)},OA=function(e){return{$:5,a:e}},d5=function(e){return e.uZ==="none"||e.uZ==="inherit"||e.uZ==="unset"||e.uZ==="initial"?a(be,"animation-name",e):OA(e.uZ)},cO=te,Xo=s(function(e,r){return e+(":"+r)}),NA=function(e){return oe(e,b$)},ZA=function(e){var r=e.a,n=e.b,t=v(ma,function(c){var i=c;return i+";"},"",n),o=er(r)+"%";return o+("{"+(t+"}"))},JA=function(e){return v(ma,ZA,"",e)},b5=function(e){return Ye(e)?{jU:0,kf:0,uZ:"none"}:{jU:0,kf:0,uZ:JA(e)}},p5=function(e){return{cM:0,uZ:Z(e)+"s"}},XA={$:2},YA={$:3},QA=function(e){return oe(e,b$)?YA:XA},KA=function(e){return{$:3,a:e}},eT=s(function(e,r){return{$:4,a:e,b:r}}),rT=function(e){return eT(a(O,KA,e))},aT=A(function(e,r,n){var t=NA(n),o=t?"Stop profiling":"Start profiling",c=t?a(X,f([G(f([xe(Ke(100)),ze(Ke(100)),Se,Qe(we),qr(we),ve(a(ee,a(We,function(i){return i.kv},function(i){return i.tJ}),e)),d5(b5(f([y(0,f([a(Xo,"opacity","1")])),y(50,f([a(Xo,"opacity","0.35")])),y(100,f([a(Xo,"opacity","1")]))]))),s5(p5(1.2)),a(B,"animation-iteration-count","infinite"),a(B,"animation-timing-function","ease-in-out"),a(rT,f(["(prefers-reduced-motion: reduce)"]),f([a(B,"animation","none")]))]))]),f([yr.tI])):yr.tI;return a(X,f([G(f([Se,qr(we),xe(Ke(100))]))]),f([a(X,f([G(f([xe(w(160))]))]),f([a(t5,e,{qZ:!1,mL:V(c),sd:t,jV:o,gw:r(QA(n)),X:1,u_:1})]))]))}),nT=function(e){var r=e.ca.eT?f([v(aT,e.e,e.gy,e.aL)]):S;return a(X,f([G(f([Se,Fr(ha),a(B,"gap","8px")]))]),a(M,a(WA,bt(e.e),e.de),r))},tT=function(e){return!e.ca.gg||e.pD||_t(e.uA)?$e(""):v(bo,e.e,e.qx,{bv:fo(2),lM:nT(e),bE:2,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(2),o7:Ua(2),o9:"Performance",v:e.aY})},Eu=function(e){return e?"true":"false"},K$=function(e){var r=e.b;return g3(r)},qa=A(function(e,r,n){return a(X,f([G(f([Se,a(B,"gap","16px"),a($r,w(3),le),Qe(Qm),a(B,"font-family",Ur.sN),vr(w(12)),a(B,"font-feature-settings",'"tnum"')]))]),f([a(X,f([G(f([ve(a(ee,function(t){return t.lc},e)),xe(w(120)),_r(se(0))]))]),f([$e(r)])),a(X,f([G(f([ve(a(ee,function(t){return t.le},e))]))]),f([$e(n)]))]))}),el=A(function(e,r,n){return a(X,f([G(f([a($r,le,w(20))]))]),a(M,a(Um,e,r),n))}),oT=function(e){var r=e.e,n=e.qx;return a(X,f([G(f([Se,Fr(ha),a(B,"gap","18px"),a($r,w(14),le),xe(w(Im))]))]),f([v(el,r,"Tape",f([v(qa,r,"frame",er(K$(e.uA))),v(qa,r,"dt",a(Mc,4,n.hB)),v(qa,r,"clock",a(Mc,4,n.hl))])),v(el,r,"Pointer",f([v(qa,r,"x",a(Mc,2,n.tw.pA)),v(qa,r,"y",a(Mc,2,n.tw.pB)),v(qa,r,"isDown",Eu(n.tw.sf))])),v(el,r,"Keyboard",f([v(qa,r,"pressed",a(Lr," ",n.hX.tD)),v(qa,r,"shift",Eu(n.hX.kV)),v(qa,r,"ctrl",Eu(n.hX.js)),v(qa,r,"meta",Eu(n.hX.j7)),v(qa,r,"alt",Eu(n.hX.i2))])),v(el,r,"Wheel",f([v(qa,r,"deltaX",Z(n.fJ.md)),v(qa,r,"deltaY",Z(n.fJ.me))]))]))},cT=function(e){return!e.ca.gh||e.pD?$e(""):v(bo,e.e,e.qx,{bv:fo(1),lM:oT(e),bE:1,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(1),o7:Ua(1),o9:"Inputs",v:e.aY})},iO=1,m5=function(e){return{i2:!1,qw:e,js:!1,j7:!1,kV:!1}},iT=function(e){return E(e,{j7:!0})},qs=function(e){return iT(m5(e))},uT=function(e){return E(e,{js:!0})},Gs=function(e){return uT(m5(e))},fT=function(e){return e===1?"\u2325":"Alt"},$T=function(e){return e===1?"\u2303":"Ctrl"},lT=s(function(e,r){if(a(On,"Key",r))return a(on,3,r);if(a(On,"Digit",r))return a(on,5,r);switch(r){case"BracketLeft":return"[";case"BracketRight":return"]";case"Slash":return"/";case"Backslash":return"\\";case"Period":return".";case"Comma":return",";case"Semicolon":return";";case"Quote":return"'";case"Backquote":return"`";case"Minus":return"-";case"Equal":return"=";case"Space":return"Space";case"ArrowLeft":return"\u2190";case"ArrowRight":return"\u2192";case"ArrowUp":return"\u2191";case"ArrowDown":return"\u2193";case"Enter":return e===1?"\u21A9":"Enter";case"Escape":return e===1?"\u238B":"Esc";case"Tab":return e===1?"\u21E5":"Tab";case"Backspace":return e===1?"\u232B":"Backspace";case"Delete":return e===1?"\u2326":"Del";default:return r}}),vT=function(e){return e===1?"\u2318":"Win"},sT=function(e){return e===1?"\u21E7":"Shift"},rl=s(function(e,r){var n=e===1?"":"+",t=a(Hr,te,f([r.js?V($T(e)):D,r.i2?V(fT(e)):D,r.kV?V(sT(e)):D,r.j7?V(vT(e)):D,V(a(lT,e,r.qw))]));return a(Lr,n,t)}),dT=function(e){var r=(function(){var t=e.qx.kt===1?qs("KeyI"):Gs("KeyI");return a(rl,e.qx.kt,t)})(),n=Gf(e.e);return a(Y$,e.e,{qZ:!1,mL:function(t){return t?yr.ut:yr.sO},sh:en(n),si:function(t){return t?"Lights on":"Lights off"},sj:f([!1,!0]),jV:"Lights",tb:function(t){return oe(t,n)?e.fh:e.km(Pv(e.e))},tc:e.tc,dY:0,t4:function(t){return function(o){return So}},oJ:function(t){return V(r)},uJ:1})},bT={$:2},pT={$:3},mT=(function(){var e=Up,r=e.a,n=e.b;return a(M,r,n)})(),hT=function(e){return{$:1,a:e}},gT=Ct("title"),_T=Y(function(e,r,n,t){var o=bt(e).kv,c=oe(t,n),i=a(wb,t,o),u=a(Ee,function(l){return l.jh},e),$=c?f([a(B,"outline","3px solid "+pe(u)),a(B,"outline-offset","2px")]):S;return a(jt,f([a(Oe,"aria-pressed",c?"true":"false"),a(Oe,"type","button"),gT(yp(t)),kt(r(hT(t))),G(Q(f([xe(w(28)),ze(w(28)),tr(Ke(50)),je(ur(i)),v(xt,w(1),Da,ur(u)),ia(sn),ln(w(0))]),$))]),S)}),yT=A(function(e,r,n){var t=Do(n);return a(X,f([a(Oe,"role","group"),a(Oe,"aria-label","Accent colour"),G(f([Se,Qe(we),a(B,"gap","12px"),_r(se(0))]))]),a(O,v(_T,e,r,t),mT))}),CT=Y(function(e,r,n,t){return a(X,f([G(f([Se,Qe(we),qr(we),a(B,"gap","14px"),a($r,w(6),w(0)),_r(se(0))]))]),Q(n,f([v(yT,e,r,t)])))}),PT=function(e){return a(X,f([G(f([xe(w(12)),ze(w(12)),tr(w(2)),je(ur(e))]))]),S)},ST=function(e){return a(X,f([G(f([Se,a(B,"gap","3px"),_r(se(0))]))]),a(O,PT,f([e.pX,e.rz,e.p3,e.rO,e.tJ,e.vm])))},h5=A(function(e,r,n){var t=r?Re(f([je(a(ee,function(o){return o.bt},e)),ve(a(ee,a(We,function(o){return o.bt},Bu),e))])):ve(a(ee,function(o){return o.le},e));return a(X,f([G(f([a($r,w(0),w(12)),ze(w(32)),Se,Qe(we),Tu(Au),a(B,"gap","10px"),t]))]),f([ST(n),a(xr,f([G(f([q$(se(1)),vr(w(13))]))]),f([$e(n.sT)]))]))}),xT=Y(function(e,r,n,t){var o=t;return ra(Q$,Bc(r),zu(e),f([x(CT,e,r.v,n,o.c1)]),V({s8:r.v(bT),ta:r.v(pT)}),h5(e),S,o.bj)}),jT=A(function(e,r,n){var t=n;return x(Rs,Bc(r),zu(e),h5(e),t.bj)}),kT=function(e){if(!e.ca.cj||e.pD)return $e("");var r={fY:i2,v:e.ks};return a(X,S,f([v(bo,e.e,e.qx,{bv:fo(5),lM:x(xT,e.e,r,f([dT(e)]),e.P),bE:5,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(5),o7:Ua(5),o9:"Theme",v:e.aY}),v(jT,e.e,r,e.P)]))},wT=function(e){return v(jn,"style",S,f([$e(`
.`+(Ts+(` {
  position: fixed;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
}
.`+(Ts+`::backdrop {
  background: transparent;
}
`))))]))},LT=s(function(e,r){return`
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
`)))))}),AT=`
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
`,TT=function(e){var r=pe(a(mr,.25,a(Ee,function(t){return t.bt},e))),n=pe(a(Ee,function(t){return t.bt},e));return v(jn,"style",S,f([$e(Q(AT,a(LT,n,r)))]))},MT=s(function(e,r){return a(B3,e+" ",r)}),DT=function(e){return{pX:a(ee,function(r){return r.bt},e),rz:ur(Bu(a(Ee,function(r){return r.bt},e))),g3:Pt.c_}},zT=function(e){return DT(e)},BT=function(e){return{$:5,a:e}},VT=function(e){return{$:11,a:e}},ET={$:15},HT=function(e){return{$:9,a:e}},IT={$:10},FT={$:7},UT={$:8},RT=function(e){var r=e,n=a(yn,s(function(t,o){return y(o,t)}),r.aK);return{a4:Ar(r.aK),d3:function(t){return a(fe,0,a(he,Uf,Mr(a(gr,function(o){var c=o.a;return oe(c,t)},n))))}}},qT=s(function(e,r){return{N:r.c2.N,qx:e.qx,hs:{n0:a(nr,e.v,HT),pb:a(he,function(n){return{bv:n.bv,$8:n.$8}},r.eq)},Q:r.Q,f:r.f,f6:e.f6,de:r.de,nO:r.nO,fh:e.v(ET),kj:a(nr,e.v,P3),kk:e.v(L2),gx:e.gx,kl:a(nr,e.v,a2),aY:a(nr,e.v,j2),km:function(n){return e.v(BT(n))},kn:a(nr,e.v,VT),ko:e.v(IT),kp:e.v(FT),gy:a(nr,e.v,k2),kq:e.v(UT),dX:e.dX,ks:a(nr,e.v,c2),fi:e.fi,tc:a(nr,e.v,w2),aL:r.aL,bL:r.bL,ax:RT(r.f),uA:e.uA,P:r.P,e:r.e,c_:r.c_,ca:e.gI,pD:r.pD}}),GT=s(function(e,r){switch(e){case 3:return{pA:r.bM,pB:.5*(r.bS+r.bx)};case 2:return{pA:r.bF,pB:.5*(r.bS+r.bx)};case 0:return{pA:.5*(r.bF+r.bM),pB:r.bS};default:return{pA:.5*(r.bF+r.bM),pB:r.bx}}}),uO=1,WT={ms:0,gc:0,dH:0,e9:0,n6:0,uZ:"normal",ee:0},al=A(function(e,r,n){switch(e){case 0:return r;case 1:return .5*(r+n);default:return n}}),OT=Y(function(e,r,n,t){switch(r){case 0:return y(v(al,n,e.bF,e.bM),e.bS-t);case 1:return y(v(al,n,e.bF,e.bM),e.bx+t);case 2:return y(e.bF-t,v(al,n,e.bS,e.bx));default:return y(e.bM+t,v(al,n,e.bS,e.bx))}}),nl=function(e){switch(e){case 0:return"0";case 1:return"-50%";default:return"-100%"}},g5=function(e){var r=e.rK,n=e.pI,t=e.eE,o=e.bv,c=(function(){switch(t){case 0:return"-100%";case 1:return"0";case 2:return nl(n);default:return nl(n)}})(),i=(function(){switch(t){case 0:return nl(n);case 1:return nl(n);case 2:return"-100%";default:return"0"}})(),u="translate("+(i+(", "+(c+")"))),$=x(OT,o,t,n,r),l=$.a,d=$.b;return f([ir(wt),Xr(w(l)),Ma(w(d)),a(B,"transform",u)])},NT=s(function(e,r){return a(X,f([G(Q(g5({pI:1,bv:r.bv,eE:r.eE,rK:6}),f([a($r,w(7),w(14)),je(e.pX),ve(e.rz),tr(ga.sz),rt(se(e.g3)),Se,Fr(Zc),a(B,"gap","12px"),a(B,"width","max-content"),Ps(WT),Is(w(360)),Gr(Je(1.45))])))]),f([a(xr,S,f([$e(r.jV)])),(function(){var n=r.oJ;if(n.$===1)return $e("");var t=n.a;return a(xr,f([G(f([ve(e.rz)]))]),f([$e(t)]))})()]))}),ZT=s(function(e,r){return{g9:0,cH:0,uZ:Q(Z(r),e)}}),JT=ZT("deg"),XT=function(e){var r=e.uZ;return{lh:0,uZ:a(Jc,"rotate",f([r]))}},YT=A(function(e,r,n){return a(X,f([G(f([ir(wt),Xr(w(n.pA)),Ma(w(n.pB)),je(e.pX),xe(w(10)),ze(w(10)),rt(se(e.g3)),a(B,"transform-origin","top left"),J$(XT(JT((function(){switch(r){case 3:return-45;case 2:return 135;case 1:return 45;default:return-135}})())))]))]),S)}),_5=s(function(e,r){return a(X,S,f([v(YT,e,r.eE,a(GT,r.eE,r.bv)),a(NT,e,r)]))}),QT=s(function(e,r){var n=r;if(n.$){var t=n.a,o=t.V;switch(o.$){case 1:return a(_5,e,t);case 2:return a(_5,e,t);case 0:return $e("");default:return $e("")}}else return $e("")}),KT=480,eM=s(function(e,r){return e.hw}),rM=be("min-width"),aM=Y(function(e,r,n,t){var o=n?Re(f([je(a(ee,function(c){return c.bt},e)),ve(a(ee,a(We,function(c){return c.bt},Bu),e))])):ve(a(ee,function(c){return c.le},e));return a(X,f([G(f([Se,qr(Ls),Qe(we),a($r,w(0),w(12)),ze(w(32)),Tu(Au),o]))]),f([a(xr,f([G(f([vr(w(13)),q$(se(1))]))]),f([$e(t.iJ+(": "+t.jV))])),a(xr,f([G(f([vr(w(13)),rM(w(70)),_r(se(0)),X$(St)]))]),f([$e(a(fe,"",a(he,rl(r.kt),a(eM,t,r))))]))]))}),nM=function(e){return{fY:S3,fa:320,kI:"Type a command\u2026",v:e,lq:{sH:400,u1:50}}},tM=function(e){if(a(iu,e.ca,e.N)){var r=a(aM,e.e,e.qx),n=zu(e.e),t=nM(e.kj);return a(X,S,f([v(bo,e.e,e.qx,{bv:fo(6),lM:a(X,f([G(f([xe(w(KT))]))]),f([ra(Q$,t,n,S,D,r,S,e.N)])),bE:6,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(6),o7:Ua(6),o9:"Command palette",v:e.aY}),x(Rs,t,n,r,e.N)]))}else return $e("")},oM=s(function(e,r){return a(X,f([a(Oe,"role","status"),G(Q(g5({pI:r.pI,bv:r.bv,eE:r.eE,rK:6}),f([a($r,ti.oN,ti.sp),tr(ga.sz),je(a(ee,function(n){return n.bt},e)),ve(a(ee,function(n){return v(_s,.6,n.bt,n.le)},e)),Re(fa.o9),Ps(Vm),gs.ra,rt(se(Pt.pb)),a(B,"pointer-events","none"),d5(b5(f([y(0,f([a(Xo,"opacity","0")])),y(8,f([a(Xo,"opacity","1")])),y(92,f([a(Xo,"opacity","1")])),y(100,f([a(Xo,"opacity","0")]))]))),s5(p5(x3)),a(B,"animation-fill-mode","forwards")])))]),f([$e(r.T)]))}),cM=function(e){var r=e.hs.pb;if(r.$===1)return $e("");var n=r.a.$8,t=r.a.bv;return a(oM,e.e,{pI:1,bv:t,eE:1,T:n?"Nothing to Reset":"Use the browser's Back button to undo"})},iM=function(e){var r=s(function(n,t){return"inset 0 0 "+(Z(n)+("px 0 "+pe(a(mr,t,e))))});return a(Lr,", ",f([a(r,90,.22),a(r,30,.4),a(r,8,.65)]))},y5=function(e){switch(e){case 0:return D;case 1:return V(v(Rr,1/6,1,.5));default:return V(v(Rr,1/3,1,.5))}},uM=function(e){var r=y5(e.nO);if(r.$===1)return $e("");var n=r.a;return a(X,f([G(f([ir(wt),Ma(le),Xr(le),St(le),at(le),a(B,"pointer-events","none"),a(B,"box-shadow",iM(n))]))]),S)},fO=0,C5=a(Cu,0,"rem"),fM=function(e){if(!_t(e.uA)||e.pD)return $e("");var r=e.qx.$7,n=e.qx.tw,t=pe(n.sf?a(Ee,function(c){return c.le},e.e):a(Ee,function(c){return c.bt},e.e)),o=a(Lr," ",f(["drop-shadow(1px 0 "+(t+")"),"drop-shadow(-1px 0 "+(t+")"),"drop-shadow(0 1px "+(t+")"),"drop-shadow(0 -1px "+(t+")")]));return a(X,f([G(f([ir(Tn),Ma(le),Xr(le),xe(C5(2)),ze(C5(2)),a(B,"pointer-events","none"),a(B,"transform","translate("+(Z(n.pA+.5*r.lq)+("px, "+(Z(-n.pB+.5*r.jM)+"px)")))),ve(n.sf?a(ee,function(c){return c.bt},e.e):a(ee,function(c){return c.le},e.e)),a(B,"filter",o),rt(se(Pt.a7+1))]))]),f([yr.tw]))},$M=function(e){return{$:0,a:e}},lM=bh,$O=te,vM=function(e){return a(z,e,ae(0))};function Ws(){return Hc(Os())}function Os(){return x(Ec,A(function(e,r,n){return{hh:r,dD:n,cM:e}}),a(k,"duration",N),a(k,"callCount",qi),a(k,"children",vM(function(e){return Ws()})))}var P5=Ws();Ws=function(){return P5};var sM=Os();Os=function(){return sM};var dM=function(e){return a(Ze,e,a(Rc,f(["detail"]),v(Xn,s(function(r,n){return{gD:r,az:n}}),a(k,"recordingStartTime",N),a(k,"tickSnapshots",lM(v(Xn,s(function(r,n){return{jE:n,dt:r}}),a(k,"timestamp",N),a(k,"flameGraph",P5)))))))},bM=function(e){var r=e.s9,n=e.tX;return v(jn,"profiler-element",Q(f([a(ua,"result",dM(r))]),n?f([a(Oe,"running","")]):S),S)},pM=function(e){return bM({s9:$M,tX:oe(e,b$)})},mM=function(e){return Ye(e)?{uZ:"none"}:{uZ:a(Lr,", ",e)}},hM=a(nr,be("font-family"),mM),Ns=s(function(e,r){return a(_$,s(function(n,t){var o=t,c=a(rr,n,e);if(c.$===1)return o;var i=c.a;return{hh:o.hh-i.hh,dD:a(Ns,i.dD,o.dD),cM:o.cM-i.cM}}),r)}),S5=s(function(e,r){var n=e.cO,t=e.cW,o=r.az,c=t?a(fe,Ie,a(he,function(u){return u.jE},a(wa,t-1,o))):Ie,i=a(fe,Ie,a(he,function(u){return u.jE},a(wa,n,o)));return a(Ns,c,i)}),gM=be("max-height"),x5=function(e){return v(jf,A(function(r,n,t){return a(M,n,t)}),S,e)},ci=function(e){return{$:9,a:e}},j5=function(e){var r=(function(n){return 1-n.iY/n.ia})(v(me,s(function(n,t){var o=a(ja,t.gt,st(n));return{ia:t.ia+t.g2,gt:t.gt+1,iY:t.iY+o/(t.gt-1)*t.g2,g2:t.g2*.7}}),{ia:0,gt:10,iY:0,g2:1},a(ao,8,_c(e))));return{aQ:1,aT:r,C:.35,a1:.45}},_M=function(e){return a(ua,"mouseout",ae(e))},yM=function(e){return a(ua,"mouseover",ae(e))},CM=Br(function(e,r,n,t,o,c){var i=n>0?c/n*100:0,u=oe(t,V(o)),$=ur(u?e.le:j5(o)),l=!oe(t,D),d=Je(l&&!u?.3:1);return a(X,f([G(f([ir(Go),No(w(r*16)),ze(w(24)),Gr(w(24)),ia(sn),Fa(d),Mn(f([je(ur(e.k6)),ve(ur(e.le))]))])),yM(ci(V(o))),_M(ci(D))]),f([a(X,f([G(f([ir(Tn),Ma(le),Xr(w(r*16)),xe(Ke(i)),ze(Ke(100)),je($)]))]),S),a(xr,f([G(f([ir(Go),No(w(6)),rt(se(1))]))]),f([$e(o)]))]))}),PM=Ae(function(e,r,n,t,o){var c=o.a,i=o.b.dD,u=o.b.cM;return a(M,wr(CM,e,r,n,t,c,u),U(k5,e,r+1,n,t,i))}),k5=Ae(function(e,r,n,t,o){return a(fn,x(PM,e,r,n,t),a(Mu,Pn,Ka(o)))}),SM=Ae(function(e,r,n,t,o){var c=v($u,r,n,t),i=c.a,u=i.b,$=c.b,l=$.b,d=a(S5,{cO:l,cW:u},t),b=a(fe,0,$$(a(O,function(g){var _=g.cM;return _},x5(d))));return a(X,f([G(f([ln(w(8)),Bm(Wo),gM(w(300)),je(ur(e.k8)),ve(ur(e.lf))]))]),U(k5,e,0,b,o,d))}),w5=function(e){return v(L$,"alignSelf","align-self",e(A$))},xM={q_:0,uZ:"block"},jM=be("flex-start"),Yo=Pr("height"),L5=ua,Qo=so("g"),tl=so("line"),A5=s(function(e,r){var n=r.az,t=function(o){return o<0?Ie:a(fe,Ie,a(he,function(c){return c.jE},a(wa,o,n)))};return a(Ns,t(e-1),t(e))}),T5=function(e){return e.$===-2},M5=function(e){return T5(e)?0:a(fe,0,$$(a(O,function(r){var n=r.dD;return 1+M5(n)},x5(e))))},kM=function(e){var r=Aa(e.az);return a(fe,0,$$(a(O,function(n){return M5(a(A5,n,e))},a(_n,1,r-1))))},wM=function(e){return a(Mu,te,e)},ol=s(function(e,r){var n=r.gD,t=r.az;return e?a(fe,n,a(he,function(o){return o.dt},a(wa,e-1,t))):n}),D5=s(function(e,r){var n=a(fe,r.gD,a(he,function(t){return t.dt},a(wa,e,r.az)));return n-a(ol,e,r)}),LM=function(e){var r=Aa(e.az),n=wM(a(O,function(o){return a(D5,o,e)},a(_n,1,r-1))),t=a(Pe,0,Yt(Ar(n)*.95)-1);return a(fe,16.7,Mr(a(pt,t,n)))},ii=so("rect"),Hu=Pr("stroke"),Iu=Pr("stroke-width"),AM=function(e){return{$:5,a:e}},TM=function(e){return{$:6,a:e}},MM={aR:0,uZ:"ew-resize"},cl=Pr("x1"),il=Pr("x2"),ul=Pr("y1"),fl=Pr("y2"),DM=Y(function(e,r,n,t){var o=n.a,c=n.b,i=a(ca,r,$n.iP),u=a(ca,r,$n.iB),$=function(T){return a(Ze,function(F){return T({fW:F})},a(k,"clientX",N))},l=s(function(T,F){return a(Qo,S,f([a(tl,f([cl(Z(T)),ul("0"),il(Z(T)),fl(Z(i)),Hu("transparent"),Iu(Z(a(ca,r,10))),nt(f([ia(MM)])),a(L5,"pointerdown",$(F))]),S),a(tl,f([cl(Z(T)),ul("0"),il(Z(T)),fl(Z(i)),Hu(pe(e.kv.tJ)),Iu(Z(a(ca,r,1))),nt(f([Lt(lr)]))]),S)]))}),d=v($u,r,a(Wc,o,c),t),b=d.a,g=b.a,_=b.b,p=d.b,m=p.a,P=p.b,C=g,j=m,L=(function(){if(o.$){var T=o.a,F=(function(){return T?a(fe,t.gD,a(he,function(q){return q.dt},a(wa,P,t.az))):a(ol,_,t)})();return a(tl,f([cl(Z(F)),ul("0"),il(Z(F)),fl(Z(u)),Hu(pe(e.kv.tJ)),Iu(Z(a(ca,r,2))),nt(f([Lt(lr)]))]),S)}else return a(Qo,S,S)})();return a(Qo,S,f([a(l,C,AM),a(l,j,TM),L]))}),z5=A(function(e,r,n){return oe(r,V(n))?pe(e.le):pe(j5(n))}),B5=s(function(e,r){if(e.$)return 1;var n=e.a;return oe(n,r)?1:.3}),V5=function(e){return a(ua,"mouseout",ae(e))},E5=function(e){return a(ua,"mouseover",ae(e))},Zs=Pr("opacity"),Js=Ub,H5=so("title"),Ko=Pr("width"),ec=Pr("x"),rc=Pr("y"),zM=s(function(e,r){var n=r.m_,t=r.mh,o=r.jV,c=r.jM,i=r.lq,u=r.pB,$=r.pA,l=o+(" ("+(a(Vu,2,t)+"ms)")),d=a(B5,e.ck,o),b=v(z5,e.ds,e.ck,o),g=a(ii,f([ec(Z($)),rc(Z(u)),Ko(Z(i)),Yo(Z(c)),Tt(b),Zs(Z(d)),E5(ci(V(o))),V5(ci(D))]),f([a(H5,S,f([Js(l)]))])),_=n?f([a(ii,f([ec(Z($)),rc(Z(u)),Ko(Z(i)),Yo(Z(a(ca,e.a6,2))),Tt(pe(e.ds.kv.tJ)),nt(f([Lt(lr)]))]),S)]):S;return a(M,g,_)}),I5=Y(function(e,r,n,t){return v(me,s(function(o,c){var i=o.a,u=o.b,$=c.a,l=c.b,d=u.cM/e.ff,b=ce(d,e.cD)>0,g=x(I5,e,r+1,$,u.dD),_=a(Ge,e.cD,d),p=a(zM,e,{mh:u.cM,jM:_,m_:b,jV:i,lq:e.iO,pA:e.dF+r*e.iO,pB:e.cD-$-_});return y($+_,Q(p,Q(g,l)))}),y(n,S),a(Mu,Pn,Ka(t))).b}),BM=s(function(e,r){var n=e.pw/e.ff,t=a(Ge,e.cD,n),o=ce(n,e.cD)>0,c=a(ca,e.a6,1),i=a(Pe,0,e.o6-c),u=a(Ge,i,a(ca,e.a6,$n.o5)),$=a(ii,f([ec(Z(e.dF)),rc(Z(e.cD-t)),Ko(Z(u)),Yo(Z(t)),Tt(pe(e.ds.lc)),nt(f([Lt(lr)]))]),S),l=a(ca,e.a6,2),d=o?f([a(ii,f([ec(Z(e.dF)),rc("0"),Ko(Z(u)),Yo(Z(l)),Tt(pe(e.ds.kv.tJ)),nt(f([Lt(lr)]))]),S)]):S,b=a(Pe,0,i-u),g=e.dF+u,_=(function(){if(b<=0||e.j5<=0||T5(r))return S;var p=b/e.j5;return x(I5,{dF:g,ck:e.ck,ff:e.ff,cD:e.cD,iO:p,ds:e.ds,a6:e.a6},0,0,r)})();return a(M,$,Q(d,_))}),VM=s(function(e,r){var n=function(i){return a(fe,0,a(he,function(u){return u.dt},a(wa,i,r.az)))},t=a(Pe,1,a(p$,e.bF,r)-1),o=Aa(r.az),c=a(Ge,o-1,a(p$,e.bM,r)+1);return a(gr,function(i){var u=a(ol,i,r),$=n(i);return ce($,e.bF)>-1&&ce(u,e.bM)<1},a(_n,t,c))}),EM=Ae(function(e,r,n,t,o){var c=a(VM,r,t),i=a(ca,r,$n.iB),u=kM(t),$=a(Pe,33.3,LM(t)),l=$>0?$/i:1,d=a(fn,function(p){var m=a(D5,p,t);return a(BM,{dF:a(ol,p,t),ck:o,j5:u,ff:l,cD:i,ds:e,o6:m,pw:m,a6:r},a(A5,p,t))},c),b=16.7/l,g=a(tl,f([cl(Z(r.bF)),il(Z(r.bM)),ul(Z(i-b)),fl(Z(i-b)),Hu(pe(e.kv.vm)),Iu(Z(a(ca,r,1))),nt(f([Lt(lr)]))]),S),_=a(ii,f([ec(Z(r.bF)),rc("0"),Ko(Z(r.bM-r.bF)),Yo(Z(i)),Tt(pe(e.k8))]),S);return a(Qo,S,f([_,a(Qo,S,d),g,x(DM,e,r,n,t)]))}),HM=Pr("transform"),IM=Pr("font-size"),FM=so("text"),UM=s(function(e,r){var n=e.lE,t=e.n7,o=e.gb,c=.6*o,i=Yt((n-t)/c);return ce(nn(r),i)<1?r:i<=1?"":a(Oi,i-1,r)+"\u2026"}),RM=Br(function(e,r,n,t,o,c){var i=c.hh,u=c.cM,$=a(ca,r,$n.oB),l=.3*$,d=n.f4*$,b=a(B5,t,o),g=.6*$,_=v(z5,e,t,o),p=a(Lr," > ",Te(a(M,o,n.fU))),m=p+(" ("+(er(i)+("x, "+(a(Vu,2,u)+"ms)"))));return a(Qo,f([E5(ci(V(o))),V5(ci(D))]),f([a(H5,S,f([Js(m)])),a(ii,f([ec(Z(n.ef)),rc(Z(d)),Ko(Z(u)),Yo(Z($)),Tt(_),Hu(pe(e.k5)),Iu(Z(a(ca,r,1))),Zs(Z(b))]),S),a(FM,f([ec(Z(n.ef+l)),rc(Z(d+.7*$)),Tt(pe(e.le)),IM(Z(g)),Zs(Z(b))]),f([Js(a(UM,{lE:u,gb:g,n7:l},m))]))]))}),F5=Ae(function(e,r,n,t,o){return v(me,s(function(c,i){var u=c.a,$=c.b,l=i.a,d=i.b,b=U(F5,e,r,{fU:a(M,u,n.fU),f4:n.f4+1,ef:l},t,$.dD),g=wr(RM,e,r,E(n,{ef:l}),t,u,$);return y(l+$.cM,a(M,g,Q(b,d)))}),y(n.ef,S),a(Mu,function(c){var i=c.a;return i},Ka(o))).b}),qM=Ae(function(e,r,n,t,o){var c=a(ca,r,$n.iB),i=v($u,r,n,t),u=i.a,$=u.a,l=u.b,d=i.b,b=d.b;return a(Qo,f([HM("translate("+(Z($)+(", "+(Z(c)+")"))))]),U(F5,e,r,{fU:S,f4:0,ef:0},o,a(S5,{cO:b,cW:l},t)))}),GM=function(e){return{$:1,a:e}},WM=x(Ec,A(function(e,r,n){return GM({nQ:n/$n.iQ,oC:e,oD:r})}),a(k,"deltaX",N),a(k,"deltaY",N),a(k,"offsetX",N)),OM=function(e){var r=e.bM-e.bF;return a(Lr," ",a(O,Z,f([e.bF,0,r,a(ca,e,$n.iP)])))},NM=Ae(function(e,r,n,t,o){var c=r.bM-r.bF,i=a(ys,f([Ko(Z($n.iQ)),Yo(Z($n.iP)),Cs(OM(r)),a(L5,"wheel",WM),nt(f([je(ur(e.D)),Wm(xM)]))]),f([U(EM,e,r,n,t,o),U(qM,e,r,n,t,o)])),u=function(p){return a(X,f([G(Q(f([ir(Tn),Ma(le),at(le),Lt(lr),a(B,"backdrop-filter","blur(3px)"),a(B,"-webkit-backdrop-filter","blur(3px)")]),p))]),S)},$=function(p){return c?v(dr,0,1,(p-r.bF)/c):0},l=v($u,r,n,t),d=l.a,b=d.a,g=l.b,_=g.a;return a(X,f([G(f([ir(Go),w5(jM)]))]),f([i,u(f([Xr(le),xe(Ke($(b)*100))])),u(f([St(le),xe(Ke((1-$(_))*100))]))]))}),ZM=s(function(e,r){var n=Aa(r.az),t=bt(e),o=(function(){var u=a(wa,n-1,r.az);if(u.$)return 0;var $=u.a;return $.dt-r.gD})(),c=o>=1e3?a(Vu,2,o/1e3)+" s":a(Vu,0,o)+" ms",i=er(n)+(" ticks \xB7 "+c);return a(X,f([G(f([Se,Qe(we),ze(w(24)),a($r,w(4),w(8))]))]),f([a(xr,f([G(f([ve(ur(t.le))]))]),f([$e(i)]))]))}),JM=s(function(e,r){var n=bt(e);return a(X,f([G(f([Se,Fr(ha),ve(ur(n.lf)),hM(f(["monospace"])),vr(w(12)),a(B,"user-select","none")]))]),f([a(ZM,e,r.d0),U(NM,n,r.a6,r.bl,r.d0,r.ck),U(SM,n,r.a6,r.bl,r.d0,r.ck)]))}),XM=s(function(e,r){if(r.$===3){var n=r.a;return V(a(JM,e,n))}else return D}),YM=function(e){if(e.ca.eT){var r=(function(){var t=a(XM,e.e,e.aL);if(t.$)return $e("");var o=t.a;return v(bo,e.e,e.qx,{bv:fo(3),lM:a(_u,e.gy,o),bE:3,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(3),o7:Ua(3),o9:"Profile",v:e.aY})})(),n=a(_u,e.gy,pM(e.aL));return a(X,S,f([n,r]))}else return $e("")},QM=Ee(a(We,function(e){return e.kv},function(e){return e.tJ})),Xs=s(function(e,r){return pe(a(mr,r,QM(e.e)))}),KM=A(function(e,r,n){var t=f([a(B,"background-color",a(Xs,e,.28)),a(B,"-webkit-backdrop-filter","blur(18px)"),a(B,"backdrop-filter","blur(18px)")]),o="radial-gradient(circle 16px at 100% 0%, transparent 15px, #000 16px)",c=function(i){return a(X,f([G(Q(f([ir(Tn),xe(w(16)),ze(w(16)),a(B,"pointer-events","none"),a(B,"-webkit-mask",o),a(B,"mask",o)]),Q(t,i)))]),S)};return a(X,f([G(Q(f([ir(wt),at(w(r)),Xr(w(r)),rt(se(Pt.n8)),a(B,"pointer-events","auto"),Se,Qe(we),a(B,"gap","12px"),a(B,"padding","8px 14px"),a(B,"border-radius","0 21px 0 0")]),t)),a(ku,"click",ae(y(e.fh,!0)))]),Q(n,f([c(f([a(B,"top","-16px"),a(B,"left","0")])),c(f([a(B,"bottom","0"),a(B,"right","-16px")]))])))}),U5={$:3},eD={$:2},lO=2,vO=1,sO=0,Ys=function(e){var r=e.b;return _3(r)},R5=function(e){var r=e.a;return oe(r,au)},rD=be("min-height"),aD=be("stretch"),nD=function(e){return{$:0,a:e}},tD=function(e){var r=Ys(e.uA)-1,n=qc(e.uA),t=n||r<=0;return a(ai,f([Jo("range"),js("0"),xs(er(r)),ws("1"),ni(er(K$(e.uA))),xu(t),wu(function(o){return e.dX(nD(a(fe,0,Ni(o))))}),Zo("ui-slider"),G(f([xe(w(200)),_r(se(0)),ze(w(24)),a(B,"-webkit-appearance","none"),a(B,"appearance","none"),je(ri),ia(sn),vn(lr),Fa(Je(t?.4:1)),a(B,"--slider-fill",Z(r>0?100*K$(e.uA)/r:0)+"%")]))]),S)},oD=function(e){var r=e.e,n=(function(){var $=function(_){return _===1||_===2},l=function(_){switch(_){case 0:return eD;case 1:return U5;default:return Sv}},d=function(_){switch(_){case 0:return"Record";case 1:return"Play";default:return"Pause"}},b=function(_){switch(_){case 0:return qc(e.uA);case 1:return Gv(e.uA);default:return n3(e.uA)}},g=function(_){switch(_){case 0:return yr.tI;case 1:return yr.tu;default:return yr.tn}};return a(Y$,r,{qZ:!1,mL:g,sh:b,si:d,sj:f([0,1,2]),jV:"Tape transport",tb:function(_){return b(_)||$(_)&&R5(e.uA)?e.fh:e.dX(l(_))},tc:e.tc,dY:0,t4:function(_){return function(p){return So}},oJ:function(_){return D},uJ:0})})(),t=a(X,f([G(f([Se,Fr(ha),a(B,"gap","3px")]))]),f([a(X,f([G(f([Se,Fr(Zc),Qe(we),a(B,"gap","8px")]))]),f([a(xr,f([G(f([vr(w(12)),ve(a(ee,function($){return $.lf},r)),a(B,"white-space","nowrap")]))]),f([$e("Record from start")])),a(e5,r,{qZ:!1,m3:e.bL,jV:"Record from the first frame (applies on reload)",n3:e.kq})])),a(xr,f([G(f([vr(w(10)),ve(a(ee,function($){return $.lc},r)),a(B,"white-space","nowrap")]))]),f([$e("applies on reload")]))])),o=qc(e.uA)?a(X,f([G(f([xe(w(200)),_r(se(0)),Se,Qe(we),qr(we),a(B,"gap","8px"),vr(w(13)),ve(a(ee,function($){return $.le},r)),a(B,"white-space","nowrap")]))]),f([a(xr,f([G(f([xe(w(8)),ze(w(8)),a(B,"border-radius","50%"),a(B,"background-color",a(Xs,e,1))]))]),S),$e("Recording\u2026")])):_t(e.uA)?tD(e):a(X,f([G(f([xe(w(200)),_r(se(0))]))]),S),c=a(X,f([G(f([w5(aD),xe(w(1)),rD(w(28)),a(B,"background-color",pe(a(mr,.18,a(Ee,function($){return $.le},r))))]))]),S),i=(function(){var $=f([xe(w(100)),_r(se(0)),Se,Qe(we),vr(w(12)),ve(a(ee,function(l){return l.lf},r)),a(B,"font-variant-numeric","tabular-nums")]);return R5(e.uA)?a(X,f([G(Q($,f([qr(we)])))]),f([$e("\u2014 / \u2014")])):qc(e.uA)?a(X,f([G(Q($,f([qr(we)])))]),f([$e(er(Ys(e.uA)))])):a(X,f([G($)]),f([a(xr,f([G(f([Yc(se(1)),a(B,"text-align","right")]))]),f([$e(er(K$(e.uA)+1))])),a(xr,f([G(f([a(B,"padding","0 4px")]))]),f([$e("/")])),a(xr,f([G(f([Yc(se(1)),a(B,"text-align","left")]))]),f([$e(er(Ys(e.uA)))]))]))})(),u=a(jt,f([kt(e.fi),a(Oe,"aria-label","Close tape"),G(f([xe(w(32)),ze(w(32)),ln(w(5)),_r(se(0)),tr(Ke(50)),Qc(le),je(ri),ve(Em),ia(sn),Se,Qe(we),qr(we),vn(lr),Fa(Je(.9)),a(B,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Mn(f([Fa(Je(1)),je(x(hs,255,255,255,.18))]))]))]),f([yr.qJ]));return a(X,f([G(f([Se,Fr(Zc),Qe(we),a(B,"gap","12px")]))]),f([n,o,i,c,t,u]))},cD=function(e){return v(KM,e,6,f([oD(e)]))},iD=function(e){return a(Ir,4,e.f)&&!e.pD?cD(e):$e("")},dO=3,q5=function(e){return E(e,{kV:!0})},uD=function(e){var r=(function(){var n=e.qx.kt===1?q5(qs("KeyP")):q5(Gs("KeyP"));return a(rl,e.qx.kt,n)})();return a(I$,e.e,{i1:function(n){return n.bt},qZ:!1,mL:yr.sA,jS:a(Ir,6,e.f),jV:"Command palette",gw:e.kk,du:a(Mt,e.tc,{eE:3,jV:"Command palette",oJ:V(r)})})},fD=function(e){return a(Xc,e.e,{qZ:!1,mL:yr.uc,bE:7,jV:"Device preview",bG:e.f,o7:Ua(7),v:e.aY,du:a(Mt,e.tc,{eE:3,jV:"Device preview",oJ:D})})},$D=f([0,1,2]),lD=function(e){switch(e){case 0:return yr.uV;case 1:return yr.to;default:return yr.qw}},vD=function(e){var r=(function(){var n=e.qx.kt===1?qs("KeyM"):Gs("KeyM");return a(rl,e.qx.kt,n)})();return a(Y$,e.e,{qZ:_t(e.uA),mL:lD,sh:en(e.nO),si:Cp,sj:$D,jV:"Mode",tb:e.kn,tc:e.tc,dY:1,t4:s(function(n,t){return a(fe,t.bt,y5(n))}),oJ:function(n){return V(r)},uJ:3})},sD=function(e){return f([a(ku,"pointerdown",ae(y(e,!0))),a(ku,"wheel",ae(y(e,!0))),a(ku,"keydown",a(z,function(r){return r.js||r.j7||r.i2?Kn("let modifier-bearing combos reach global decoders"):a(Ki,r.jT,f(["Meta","Control","Shift","Alt"," ","Escape"]))?Kn("bare modifiers, Space, and Escape (global stop) \u2014 let bubble"):ae(y(e,!0))},U(Ic,Y(function(r,n,t,o){return{i2:o,js:n,jT:r,j7:t}}),a(k,"key",ke),a(k,"ctrlKey",ne),a(k,"metaKey",ne),a(k,"altKey",ne))))])},dD=function(e){return a(I$,e.e,{i1:function(r){return r.bt},qZ:!1,mL:yr.vn,jS:e.pD,jV:"Zen mode",gw:e.kp,du:a(Mt,e.tc,{eE:3,jV:"Zen mode",oJ:D})})},bD=function(e){var r=e.ca,n=r.hT?f([dD(e)]):S,t=e.e,o=r.cj?f([a(Xc,t,{qZ:!1,mL:yr.kv,bE:5,jV:"Theme",bG:e.f,o7:Ua(5),v:e.aY,du:a(Mt,e.tc,{eE:3,jV:"Theme",oJ:D})})]):S,c=r.dK?f([vD(e)]):S,i=a(Hr,te,f([r.gg?V(a(Xc,t,{qZ:_t(e.uA),mL:yr.pE,bE:2,jV:"FPS meter",bG:e.f,o7:Ua(2),v:e.aY,du:a(Mt,e.tc,{eE:3,jV:"FPS meter",oJ:D})})):D,r.gh?V(a(Xc,t,{qZ:!1,mL:yr.qx,bE:1,jV:"Inputs",bG:e.f,o7:Ua(1),v:e.aY,du:a(Mt,e.tc,{eE:3,jV:"Inputs",oJ:D})})):D,(function(){if(r.hS){var m=a(Ir,4,e.f);return V(a(I$,t,{i1:Ua(4),qZ:!1,mL:yr.uA,jS:m,jV:m?"Close tape":"Tape",gw:e.fi,du:a(Mt,e.tc,{eE:3,jV:"Tape",oJ:D})}))}else return D})()])),u=f([Se,Fr(ha),Qe(we),a(B,"gap","6px")]),$=function(m){return a(X,f([G(u)]),m)},l=r.dJ?f([fD(e)]):S,d=r.gf?f([a(Xc,t,{qZ:!1,mL:yr.rj,bE:0,jV:"Configurations",bG:e.f,o7:Ua(0),v:e.aY,du:a(Mt,e.tc,{eE:3,jV:"Configurations",oJ:D})})]):S,b=a(iu,r,e.N)?f([uD(e)]):S,g=a(gr,a(nr,pv,Ye),f([d,c,l,o,b,i])),_=a(X,f([G(f([Se,Fr(ha),Qe(we),a(B,"gap","24px"),e.pD?Re(f([J$(Vs(w(-72))),Fa(Je(0)),a(B,"pointer-events","none")])):Re(f([J$(Vs(le)),Fa(Je(1)),a(B,"pointer-events","auto")])),a(B,"transition","transform 240ms cubic-bezier(0.33, 1, 0.68, 1), opacity 240ms cubic-bezier(0.33, 1, 0.68, 1)")])),a(Oe,"aria-hidden",e.pD?"true":"false")]),a(O,$,g)),p=a(Hr,te,f([Ye(n)?D:V(a(X,f([G(Q(u,f([a(B,"pointer-events","auto")])))]),n)),Ye(g)?D:V(_)]));return Ye(p)?$e(""):a(X,Q(f([G(f([ir(Tn),Ma(w(12)),Xr(w(12)),xe(w(48)),Se,Fr(ha),Qe(we),a(B,"gap","24px"),a(B,"pointer-events","none"),rt(se(Pt.r$))]))]),sD(e.fh)),p)},pD=function(e){if(!qc(e.uA)&&!_t(e.uA)||e.pD)return $e("");var r=6,n=100,t=Z(-n)+"px",o="linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",c=21,i=n+r,u=i+c;return a(X,f([G(f([ir(wt),Ma(le),Xr(le),St(le),at(le),a(B,"overflow","hidden"),a(B,"pointer-events",_t(e.uA)?"auto":"none"),rt(se(Pt.n8-1))])),kt(e.dX(Gv(e.uA)?Sv:U5))]),f([a(X,f([G(f([ir(Tn),a(B,"top",t),a(B,"left",t),a(B,"right",t),a(B,"bottom",t),a(B,"pointer-events","none"),a(B,"border",Z(i)+"px solid transparent"),a(B,"border-radius",Z(u)+"px"),a(B,"background-color",a(Xs,e,.28)),a(B,"-webkit-backdrop-filter","blur(18px)"),a(B,"backdrop-filter","blur(18px)"),a(B,"-webkit-mask",o),a(B,"-webkit-mask-composite","xor"),a(B,"mask",o),a(B,"mask-composite","exclude")]))]),S)]))},mD=s(function(e,r){var n=a(qT,e,r);return a(X,f([Zo("play-hud"),G(f([ir(wt),Ma(le),Xr(le),St(le),at(le),a(B,"pointer-events","none")]))]),Q(f([Rb(n.e),a(MT,".play-hud",n.e),TT(n.e),wT(n.e),uM(n),HL(n),cT(n),tT(n),pD(n),bD(n),fM(n),iD(n),a(QT,zT(n.e),n.c_),YM(n),kT(n),AA(n),tM(n),cM(n),hm(n.f)]),n.f6.ku))}),hD=s(function(e,r){if(e.$===1)return a(br,f([a(I,"display","contents")]),f([a(br,f([a(I,"display","contents")]),f([r]))]));var n=e.a,t=function(c){return Z(c)+"px"},o=a(uu,n.u5,n.jx);return a(br,f([a(I,"position","fixed"),a(I,"inset","0"),a(I,"display","flex"),a(I,"align-items","center"),a(I,"justify-content","center"),a(I,"background-color",n.pW)]),f([a(br,f([a(I,"position","relative"),a(I,"width",t(n.jx.lq)),a(I,"height",t(n.jx.jM)),a(I,"border-radius",t(n.qG)),a(I,"overflow-x","hidden"),a(I,"overflow-y","auto"),a(I,"box-shadow","0 24px 64px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16)"),a(I,"transform","scale("+(Z(o)+")")),a(I,"transform-origin","center")]),f([r]))]))}),gD=s(function(e,r){var n=wc(r.uA),t=v(ko,ik,Ie,n.cT),o=Hv(n),c=(function(){var P=e.iT;if(P.$)return Ln(r.bD);var C=P.a;return a(fe,Ln(r.bD),a(he,function(j){return C(j.bG)},a(oa,function(j){return a(rr,j,n.cT)},Mr(r.aU))))})(),i=Fv(r.bD),u=a(Hr,U(Hw,e,r,n,o,i),r.aU),$={mw:r.aG,cT:u,O:n.O,n9:t,gI:e.bD,e:c},l=e.jP($),d=Yn(a(mD,{qx:a(a3,r,n),f6:l,gx:Zj,dX:v2,fi:s2,gI:e.bD,uA:r.uA,v:Hf},r.bD)),b=pe(bt($.e).D),g=pe(bt($.e).le),_=Yn(ck($.e)),p=a(hD,a(he,function(P){return{pW:pe(a(Ee,function(C){return C.k5},c)),qG:ok(r.bD),jx:P,u5:n.g.$7}},i),e.sm($)),m=(function(){var P=r.hr;if(P.$)return f([_,p,d]);var C=P.a;return f([_,p,d,ak(C)])})();return a(br,f([E3(o3),a(I,"position","fixed"),a(I,"inset","0"),a(I,"overflow-y","auto"),a(I,"overscroll-behavior","none"),a(I,"background-color",b),a(I,"color",g),a(Iw,"playflush",ae(y(t3,!0)))]),m)}),_D=function(e){return gy({b_:cP(e),ay:gS(e),uT:Nj(e),bp:gD(e)})},yD=function(e){return _D({c2:S,a7:e.a7,aA:Y(function(r,n,t,o){return S}),bD:e.bD,jP:function(r){return fy},aH:S,e_:e.e_,cT:e.cT,sm:e.sm,fq:e.fq,ay:e.ay,iT:D,fH:e.fH})},CD=function(e){return yD({a7:{bh:Ae(function(r,n,t,o,c){return H(x(e.bh,r,t,o,c),Jn,S)}),bi:Y(function(r,n,t,o){return H(v(e.bi,r,t,o),Jn,S)}),cq:Y(function(r,n,t,o){return S}),ay:Y(function(r,n,t,o){return gt}),bp:Y(function(r,n,t,o){return Yn(v(e.bp,r,t,o))})},bD:e.bD,e_:function(r){return 0},cT:e.cT,sm:e.sm,fq:s(function(r,n){return y(n,ie)}),ay:function(r){return gt},fH:function(r){return S}})},bO=te,PD=s(function(e,r){return{bE:e,bd:"texture",dV:S,fG:r}}),SD=function(e){return{$:0,a:e}},xD=function(e){return{$:1,a:e}},G5=dm,jD=function(e){return{$:0,a:e}},kD="card-art",W5=Ee(function(e){return e.D}),wD=`
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
`,LD=$7,AD=A(function(e,r,n){return Yb(a(e,r,n))}),TD=A(function(e,r,n){return Tf(x(LD,AD,e,r,n))}),MD=TD,Qs=k$("border-bottom"),DD=be("border-collapse"),zD=k$("border-left"),BD=k$("border-top"),VD={r:0,p:0,uZ:"circle"},ED={lS:0,uZ:"collapse",g1:0},HD={r:0,p:0,uZ:"decimal"},pO=3,ID=s(function(e,r){return{$:2,a:e,b:r}}),FD=ID(3),UD={r:0,p:0,uZ:"disc"},O5=be("font-style"),RD={lw:0,au:0,fQ:0,lH:0,ej:0,lJ:0,ek:0,c5:0,bw:0,hf:0,fX:0,aR:0,q_:0,eM:0,jF:0,ga:0,hL:0,ry:0,gb:0,gc:0,G:0,dH:0,hW:0,m8:0,jU:0,e5:0,e6:0,dg:0,e7:0,e8:0,dO:0,dP:0,cU:0,e9:0,h7:0,r:0,p:0,kf:0,s4:0,dk:0,io:0,fl:0,cr:0,iR:0,fx:0,d7:0,fy:0,fz:0,d8:0,bT:0,fD:"",g$:0,uZ:"initial",g1:0,ee:0},qD=E(RD,{uZ:"inherit"}),N5={gc:0,uZ:"italic"},$l=be("list-style-type"),ui={$:0},Z5=function(e){return{$:3,a:e}},J5={$:1},X5=function(e){return{$:4,a:e}},Y5={$:2},GD=function(e){return v(xc,">","&gt;",v(xc,"<","&lt;",v(xc,'"',"&quot;",v(xc,"&","&amp;",e))))},WD=N9,Q5=s(function(e,r){var n=e?" display-mode":"";return'<katex-element tex="'+(GD(WD(r))+('"'+(n+"></katex-element>")))}),OD=A(function(e,r,n){e:for(;;){var t=y(e,r);if(t.a.b)switch(t.b.$){case 1:if(t.a.a==="`"&&t.a.b.b&&t.a.b.a==="`"&&t.a.b.b.b&&t.a.b.b.a==="`"){var c=t.a,i=c.b,u=i.b,$=u.b,l=t.b,d=$,b=ui,g=a(M,"```",n);e=d,r=b,n=g;continue e}else{var _=t.a,p=_.a,$=_.b,m=t.b,d=$,b=J5,g=a(M,dt(p),n);e=d,r=b,n=g;continue e}case 2:if(t.a.a==="`"){var P=t.a,$=P.b,C=t.b,d=$,b=ui,g=a(M,"`",n);e=d,r=b,n=g;continue e}else{var j=t.a,p=j.a,$=j.b,L=t.b,d=$,b=Y5,g=a(M,dt(p),n);e=d,r=b,n=g;continue e}case 3:if(t.a.a==="$"&&t.a.b.b&&t.a.b.a==="$"){var T=t.a,F=T.b,$=F.b,o=t.b.a,d=$,b=ui,g=a(M,a(Q5,!0,Gi(Te(o))),n);e=d,r=b,n=g;continue e}else{var q=t.a,p=q.a,$=q.b,o=t.b.a,d=$,b=Z5(a(M,p,o)),g=n;e=d,r=b,n=g;continue e}case 4:if(t.a.a==="$"){var R=t.a,$=R.b,o=t.b.a,K=a(Q5,!1,Gi(Te(o))),J=(function(){if(n.b){var Ft=n.a;return a($v,`
`,Ft)?" "+K:K}else return K})(),d=$,b=ui,g=a(M,J,n);e=d,r=b,n=g;continue e}else{var ue=t.a,p=ue.a,$=ue.b,o=t.b.a,d=$,b=X5(a(M,p,o)),g=n;e=d,r=b,n=g;continue e}default:switch(t.a.a){case"`":if(t.a.b.b&&t.a.b.a==="`"&&t.a.b.b.b&&t.a.b.b.a==="`"){var ge=t.a,De=ge.b,Le=De.b,$=Le.b,ar=t.b,d=$,b=J5,g=a(M,"```",n);e=d,r=b,n=g;continue e}else{var re=t.a,$=re.b,Ue=t.b,d=$,b=Y5,g=a(M,"`",n);e=d,r=b,n=g;continue e}case"$":if(t.a.b.b&&t.a.b.a==="$"){var Xe=t.a,Ne=Xe.b,$=Ne.b,Cr=t.b,d=$,b=Z5(S),g=n;e=d,r=b,n=g;continue e}else{var qe=t.a,$=qe.b,cr=t.b,d=$,b=X5(S),g=n;e=d,r=b,n=g;continue e}default:var pr=t.a,p=pr.a,$=pr.b,Nr=t.b,d=$,b=ui,g=a(M,dt(p),n);e=d,r=b,n=g;continue e}}else switch(t.b.$){case 3:var o=t.b.a;return a(M,Gi(Te(o)),a(M,"$$",n));case 4:var o=t.b.a;return a(M,Gi(Te(o)),a(M,"$",n));default:return n}}}),ND=function(e){return Es(Te(v(OD,_c(e),ui,S)))},ZD={r:0,p:0,uZ:"square"},K5=be("text-decoration"),JD=function(e){return!e.$},XD=J7,mO=te,jr=s(function(e,r){var n=a(rm,e,S),t=v(Nc,n,S,D);return f([pm(v(bm,t,S,r))])}),YD={fx:0,uZ:"underline"},QD=w$("visited"),KD=s(function(e,r){var n=a(ee,function(b){return b.lc},e),t=a(ee,function(b){return b.le},e),o=a(ee,function(b){return b.k8},e),c=a(ee,function(b){return b.kv.qa},e),i=a(ee,function(b){return b.kv.qL},e),u=a(ee,function(b){return b.jg},e),$=a(ee,function(b){return b.jh},e),l=a(ee,function(b){return b.i0},e),d=a(ee,function(b){return b.bt},e);return a(X,f([G(f([ve(t),a(B,"font-family",Ur.uO),Re(fa.lM),Gr(Je(1.6)),FD(f([a(jr,"h1",f([a(B,"font-family",Ur.uO),Re(fa.rU),Sr(se(700)),Gr(Je(1.2)),za(w(40)),Or(w(20)),Ss(w(8)),ve(d)])),a(jr,"h2",f([a(B,"font-family",Ur.uO),Re(fa.o9),Sr(se(600)),Gr(Je(1.3)),za(w(32)),Or(w(16)),Ss(w(4)),ve(d)])),a(jr,"h3",f([a(B,"font-family",Ur.uO),Re(fa.rT),Sr(se(600)),Gr(Je(1.4)),za(w(28)),Or(w(12)),ve(d)])),a(jr,"h4",f([a(B,"font-family",Ur.uO),Re(fa.jV),Sr(se(600)),Gr(Je(1.5)),za(w(24)),Or(w(12)),ve(d)])),a(jr,"h5",f([a(B,"font-family",Ur.uO),Re(fa.jV),Sr(se(600)),za(w(20)),Or(w(8)),ve(d)])),a(jr,"h6",f([a(B,"font-family",Ur.uO),Re(fa.qj),Sr(se(600)),za(w(16)),Or(w(8)),ve(d),F$(U$),vo(At(.04))])),a(jr,"p",f([Or(w(18)),Gr(Je(1.7))])),a(jr,"ul",f([$l(UD),No(w(28)),za(w(14)),Or(w(14))])),a(jr,"ol",f([$l(HD),No(w(28)),za(w(14)),Or(w(14))])),a(jr,"li",f([Or(w(6)),Gr(Je(1.7)),No(w(6)),a(O$,"marker",f([ve(d)]))])),a(j$,"ul ul",f([$l(VD)])),a(j$,"ul ul ul",f([$l(ZD)])),a(jr,"code",f([a(B,"font-family",Ur.sN),vr(At(.9)),je(o),a($r,w(2),w(5)),tr(ga.oN),ve(d)])),a(jr,"pre",f([je(o),a($r,w(14),w(18)),tr(ga.sz),Oo(Wo),za(w(16)),Or(w(20)),Gr(Je(1.5)),v(xt,w(1),Da,u)])),a(j$,"pre code",f([ve(t),je(qD),ln(le),vr(At(1)),tr(le)])),a(jr,"a",f([ve(i),K5(lr),v(Qs,w(1),Da,ri),a(B,"transition","border-color 200ms, color 200ms"),Mn(f([K5(YD),ve(c)])),QD(f([Fa(Je(.6))]))])),a(jr,"blockquote",f([v(zD,w(3),Da,d),No(w(18)),O5(N5),ve(n),za(w(16)),Or(w(20))])),a(jr,"table",f([xe(Ke(100)),DD(ED),za(w(16)),Or(w(20))])),a(jr,"th",f([X$(Xr),a($r,w(8),w(10)),v(Qs,w(2),Da,$),Sr(se(600)),ve(t)])),a(jr,"td",f([X$(Xr),a($r,w(8),w(10)),v(Qs,w(1),Da,u)])),a(jr,"strong",f([ve(t),Sr(se(600))])),a(jr,"em",f([O5(N5)])),a(jr,"mark",f([je(a(ee,function(b){return a(mr,.3,b.bt)},e)),ve(t),a($r,w(1),w(4)),tr(ga.oN)])),a(jr,"img",f([Is(Ke(100)),ze(Wo),tr(ga.sz),za(w(16)),Or(w(16))])),a(jr,"hr",f([Qc(le),v(BD,w(1),Da,u),za(w(28)),Or(w(28))]))]))]))]),f([G5(v(XD,{qS:D,rN:V({p7:!0,ux:!0}),tY:!1,ud:!0},S,ND(r)))]))}),ll=MD(KD),ez=function(e){return Yn(a(ll,e,wD))},rz=`
A hinge \u2014 one fold line, one degree of freedom \u2014 is the only joint
primitive a pop-up book needs. Every other mechanism is just two or
more hinges arranged in a tree, with their dihedral angles driven
by the same spread. The next unit puts a second hinge **on the
page itself**: a flap that rises perpendicular to the page as the
book opens.
`,az=function(e){return Yn(a(ll,e,rz))},e4=function(e){return{$:1,a:e}},Ba=function(e){return{fX:e,bJ:1,b2:e4({ib:0,iA:1}),b3:D}},nz=function(e){return{fX:e.rr,bJ:1,b2:e4({ib:0,iA:1}),b3:V(e.tL)}},Ks=Ee(function(e){return e.le}),tz=function(e){return{$:0,a:e}},r4=function(e){return tz({bE:e,nN:1})},a4=function(e){return{$:6,a:e}},e1=function(e){return{$:5,a:e}},oz={$:0},r1=function(e){return{$:0,a:e}},cz=function(e){return{$:0,a:e}},iz={$:3},n4=function(e){return{$:3,a:e}},hO=te,Fu=function(e){return e},gO=te,Dn=function(e){return e},ac=Dn({pA:0,pB:1,L:0}),Ga=M9,a1=A(function(e,r,n){var t=Ga(e*e+r*r+n*n);return t<1e-6?ac:Dn({pA:-e/t,pB:-r/t,L:-n/t})}),_O=te,Uu=function(e){return e},t4=Dn({pA:0,pB:-1,L:0}),o4=Y(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),n1=A(function(e,r,n){return x(o4,e,r,n,1)}),c4={lI:v(n1,.06,.06,.07),mp:cz(10),ne:f([r1({u:!0,a:e1(Fu(3200)),eE:v(a1,-.7,.8,.5),jR:Uu(9e3)}),r1({u:!1,a:e1(Fu(6500)),eE:v(a1,.6,.5,.6),jR:Uu(2500)}),r1({u:!0,a:e1(Fu(5e3)),eE:v(a1,0,.4,-1),jR:Uu(5500)}),n4({a:a4(v(n1,.2,.2,.22)),jR:Uu(120),fF:ac}),n4({a:a4(v(n1,.15,.13,.12)),jR:Uu(60),fF:t4})]),sT:"Studio (3-point)",pc:iz,px:oz},nc=s(function(e,r){return{$:0,a:e,b:r}}),uz={tA:f([{pA:0,pB:0},{pA:1,pB:0},{pA:1,pB:1},{pA:0,pB:1}])},yO=te,i4=A(function(e,r,n){return{eh:r,ei:e,jr:S,eC:function(t){return t.oS*n}}}),fz={tA:f([{pA:0,pB:-.5},{pA:1,pB:-.5},{pA:1,pB:.5},{pA:0,pB:.5}])},$z=a(nc,fz,f([y(v(i4,{pA:0,pB:.5},{pA:0,pB:-.5},Er),a(nc,uz,S))])),lz={$:0},vz=s(function(e,r){return r.fV?f([a(ts,"pointerdown",ae(e(lz)))]):S}),Ru=function(e){return{pA:e.pA,pB:e.pB,L:0}},u4=function(e){return{$:0,a:e}},Yr=A(function(e,r,n){return{pA:e,pB:r,L:n}}),t1=function(e){return{$:0,a:e}},qu=function(e){return{$:0,a:e}},f4={gF:t1(0),gH:qu(1),gX:v(Yr,0,0,0)},Qr=function(e){return u4({dD:e,lh:f4})},vl=s(function(e,r){return Mr(a(gr,function(n){return oe(n.kH,e)},r.dM))}),o1=function(e){var r=e;return{eh:r.eh,ei:r.ei}},sz=function(e){var r=o1(e);return oe(r.ei,r.eh)},dz=function(e){return{$:18,a:e}},fi=Y(function(e,r,n,t){return dz({ri:n,dq:r,D:e,lq:t})}),c1=s(function(e,r){return u4({dD:f([r]),lh:e})}),$i=function(e){var r=e.a,n=e.b,t=e.c;return c1({gF:t1(0),gH:qu(1),gX:v(Yr,r,n,t)})},po=s(function(e,r){var n=e.a,t=e.b,o=e.c,c=r,i=c.bW,u=i.a,$=i.b,l=i.c,d=c.bV,b=d.a,g=d.b,_=d.c,p=c.bU,m=p.a,P=p.b,C=p.c;return H(n*m+t*b+o*u,n*P+t*g+o*$,n*C+t*_+o*l)}),li=s(function(e,r){var n=r,t=n.bW,o=t.a,c=t.b,i=t.c,u=n.bV,$=u.a,l=u.b,d=u.c,b=n.bU,g=b.a,_=b.b,p=b.c;return{pA:n.aZ.pA+e.pA*g+e.pB*$+e.L*o,pB:n.aZ.pB+e.pA*_+e.pB*l+e.L*c,L:n.aZ.L+e.pA*p+e.pB*d+e.L*i}}),zn=s(function(e,r){var n=r.a,t=r.b,o=r.c;return H(e*n,e*t,e*o)}),bz=function(e){return{$:12,a:e}},sl=s(function(e,r){return bz({tG:r,D:e})}),tc=s(function(e,r){var n=e.a,t=e.b,o=e.c;return{pA:r.pA+n,pB:r.pB+t,L:r.L+o}}),pz=A(function(e,r,n){var t=a(vl,e,r);if(t.$===1)return Qr(S);var o=t.a;if(sz(o.jO)){var c=a(po,H(0,0,1),o.ir),i=n.e5*.05,u=o1(o.jO),$=Ru(u.ei),l=a(li,$,o.ir),d=a(tc,a(zn,n.e5,c),l),b=a($i,H(d.pA,d.pB,d.L),a(sl,Ba(n.fX),i*2.5)),g=x(fi,Ba(n.fX),l,d,i);return Qr(f([g,b]))}else return Qr(S)}),mz=function(e){var r=e;return r.jr},Gu=s(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return H(t*u-o*i,o*c-n*u,n*i-t*c)}),$4=function(e){var r=e.a,n=e.b,t=e.c;return Ga(a(An,r,2)+a(An,n,2)+a(An,t,2))},Dt=function(e){var r=$4(e);return a(zn,1/r,e)},vi=s(function(e,r){return H(r.pA-e.pA,r.pB-e.pB,r.L-e.L)}),i1=s(function(e,r){var n=o1(e),t=Ru(n.ei),o=a(li,t,r),c=Ru(n.eh),i=a(li,c,r),u={pA:(o.pA+i.pA)/2,pB:(o.pB+i.pB)/2,L:(o.L+i.L)/2},$=Dt(a(vi,t,c)),l=Dt(a(Gu,H(0,0,1),$));return{pU:a(po,$,r),cI:i,lF:o,ge:a(po,l,r),fd:u}}),hz=function(e){return H(e.pA,e.pB,e.L)},gz=function(e){var r=hz(e.fF),n=Dt(a(vi,e.I,e.hN)),t=Dt(a(Gu,n,r)),o=a(Gu,t,n);return{jH:n,kM:o,bM:t}},dl=s(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return n*c+t*i+o*u}),l4=P9,_z=A(function(e,r,n){var t=a(vi,e.I,n),o=gz(e),c=a(dl,t,o.bM),i=a(dl,t,o.kM),u=a(dl,t,o.jH);if(u<.001)return D;var $=r.lq/r.jM,l=(function(){var m=e.tF;if(m.$){var j=m.a.ps;return y(j/2,r.jM/j)}else{var P=m.a.eR,C=u*l4(P/2);return y(C,r.jM/(2*C))}})(),d=l.a,b=l.b,g=d*$,_=c/g,p=i/d;return V({f4:u,ts:b,t$:(_+1)*r.lq/2,t0:(1-p)*r.jM/2})}),v4=A(function(e,r,n){var t=v(_z,e.qi,e.$7,e.pQ);if(t.$===1)return fr("");var o=t.a,c=function(i){return Z(i)+"px"};return a(br,a(M,a(I,"position","absolute"),a(M,a(I,"left",c(o.t$+e.nZ.pA)),a(M,a(I,"top",c(o.t0+e.nZ.pB)),a(M,a(I,"pointer-events","none"),a(M,a(I,"user-select","none"),r))))),n)}),u1=s(function(e,r){return{pA:r.pA,pB:r.L+e/2,L:-r.pB}}),yz=A(function(e,r,n){var t=a(vl,e,r);if(t.$===1)return fr("");var o=t.a,c=mz(o.jO);if(Ye(c))return fr("");var i=a(po,H(0,0,1),o.ir),u=a(i1,o.jO,o.ir),$=f([a(I,"color",pe(n.fX)),a(I,"font-family","system-ui, sans-serif"),a(I,"font-size","12px"),a(I,"white-space","nowrap"),a(I,"transform","translate(-50%, -100%)")]),l=a(tc,a(zn,n.h2,i),u.fd),d=a(u1,n.dZ,l);return v(v4,{pQ:d,qi:n.qi,nZ:{pA:0,pB:0},$7:n.$7},$,a(O,function(b){return a(br,S,f([fr(b)]))},c))}),Cz=(function(){var e=.3,r=e*.04,n={aQ:1,aT:0,C:.55,a1:.8},t={aQ:1,aT:.33,C:.45,a1:.8},o={aQ:1,aT:.6,C:.55,a1:.8},c=s(function(i,u){var $=x(fi,Ba(i),{pA:0,pB:0,L:0},u,r),l=a($i,H(u.pA,u.pB,u.L),a(sl,Ba(i),r*2.5));return Qr(f([$,l]))});return Qr(f([a(c,n,{pA:e,pB:0,L:0}),a(c,t,{pA:0,pB:e,L:0}),a(c,o,{pA:0,pB:0,L:e})]))})(),f1=function(e){return{$:1,a:e}},$1=function(e){return c1({gF:f1(e.p0),gH:qu(1),gX:e.aZ})},l1=function(e){var r=e;return{p0:{pA:r.bU,pB:r.bV,L:r.bW},aZ:r.aZ}},Pz=Y(function(e,r,n,t){var o=.005,c=r/2+.001,i=a(O,function(l){return{pA:l.pA,pB:l.pB,L:c}},n.tA),u=(function(){if(i.b){var l=i.a,d=Q(a(pt,1,i),f([l]));return v(F0,Mo,i,d)}else return S})(),$=a(O,function(l){var d=l.a,b=l.b;return x(fi,Ba(e),d,b,o)},u);return a($1,l1(t),Qr($))}),s4=function(e){return v(me,yb,0,e)},d4=function(e){if(e.b){var r=Ar(e);return{pA:s4(a(O,function(n){return n.pA},e))/r,pB:s4(a(O,function(n){return n.pB},e))/r}}else return{pA:0,pB:0}},Sz=s(function(e,r){var n=r.a,t=r.b,o=r.c,c="["+(a(Lr,",",a(O,er,n))+"]"),i=f([a(I,"color",pe(e.fX)),a(I,"font-family","monospace"),a(I,"font-size","11px"),a(I,"white-space","nowrap"),a(I,"transform","translate(-50%, -50%)"),a(I,"background","rgba(0,0,0,0.4)"),a(I,"padding","1px 4px"),a(I,"border-radius","3px")]),u=d4(t.tA),$=a(li,{pA:u.pA,pB:u.pB,L:0},o),l=a(u1,e.dZ,$);return v(v4,{pQ:l,qi:e.qi,nZ:{pA:0,pB:0},$7:e.$7},i,f([fr(c)]))}),bl=s(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return H(n+c,t+i,o+u)}),dn=y9,v1=function(e){var r=e.a,n=e.b,t=e.c;return v(Yr,r,n,t)},bn=C9,pl=A(function(e,r,n){var t=H(-e.aZ.pA,-e.aZ.pB,-e.aZ.L),o=H(e.aZ.pA,e.aZ.pB,e.aZ.L),c=bn(r),i=a(tc,t,n),u=H(i.pA,i.pB,i.L),$=dn(r),l=Dt(e.eE),d=a(dl,l,u),b=a(bl,a(zn,$,u),a(bl,a(zn,c,a(Gu,l,u)),a(zn,1-$,a(zn,d,l))));return a(tc,o,v1(b))}),xz=A(function(e,r,n){var t=n.a,o=n.b,c=n.c,i=v(pl,{eE:e,aZ:{pA:0,pB:0,L:0}},r,{pA:t,pB:o,L:c});return H(i.pA,i.pB,i.L)}),b4=function(e){var r=v(xz,e.hb,e.g9,e.bY),n=a(zn,e.tG,r);return a(tc,n,e.hc)},jz=function(e){var r=.005,n=a(Pe,4,Ra(16*Me(e.cY))),t=Dt(a(vi,e.aB.rG,e.aB.uG)),o=function(i){return b4({g9:i*e.cY,hb:t,hc:e.aB.rG,bY:e.bY,tG:e.tG})},c=a(O,function(i){var u=(i+1)/n,$=i/n;return x(fi,Ba(e.fX),o($),o(u),r)},a(_n,0,n-1));return Qr(c)},kz=function(e){return{$:15,a:e}},p4=s(function(e,r){return kz({D:e,lo:r})}),wz=function(e){var r=a(Pe,4,Ra(16*Me(e.cY))),n=Ba(e.fX),t=Dt(a(vi,e.aB.rG,e.aB.uG)),o=function(i){return b4({g9:i*e.cY,hb:t,hc:e.aB.rG,bY:e.bY,tG:e.tG})},c=a(fn,function(i){var u=(i+1)/r,$=i/r;return f([a(p4,n,H(e.aB.rG,o($),o(u))),a(p4,n,H(e.aB.rG,o(u),o($)))])},a(_n,0,r-1));return Qr(c)},Lz=A(function(e,r,n){var t=a(vl,e,r);if(t.$===1)return Qr(S);var o=t.a,c=a(i1,o.jO,o.ir),i=wz({aB:{rG:c.fd,uG:c.cI},fX:n.fX,bY:c.ge,tG:n.tG,cY:o.eC}),u=jz({aB:{rG:c.fd,uG:c.cI},fX:n.fX,bY:c.ge,tG:n.tG,cY:o.eC});return Qr(f([i,u]))}),Az=A(function(e,r,n){var t=a(vl,e,r);if(t.$===1)return Qr(S);var o=t.a,c=a(i1,o.jO,o.ir),i=a($i,H(c.cI.pA,c.cI.pB,c.cI.L),a(sl,Ba(n.fX),n.cZ*2.5)),u=x(fi,Ba(n.fX),c.lF,c.cI,n.cZ);return Qr(f([u,i]))}),Tz=s(function(e,r){return a(he,function(n){var t=n.b,o=n.c;return y(t,o)},Mr(a(gr,function(n){var t=n.a;return oe(t,e)},r.cq)))}),Mz=A(function(e,r,n){var t=a(Tz,e,r);if(t.$===1)return Qr(S);var o=t.a,c=o.a,i=o.b,u=n.e5*.05,$=d4(c.tA),l={pA:$.pA,pB:$.pB,L:0},d={pA:$.pA,pB:$.pB,L:n.e5},b=a($i,H(d.pA,d.pB,d.L),a(sl,Ba(n.fX),u*2.5)),g=x(fi,Ba(n.fX),l,d,u);return a($1,l1(i),Qr(f([g,b])))}),Dz=s(function(e,r){var n=r.ez,t=e.dx.cq,o=a(Ee,function(C){return C.jh},e.e),c=a(Ee,function(C){return C.lf},e.e),i=n.fB?a(O,Sz({qi:e.qi,fX:c,dZ:e.dZ,$7:e.$7}),t):S,u=a(O,function(C){return C.kH},e.dx.dM),$=n.jr?a(O,function(C){return v(yz,C,e.dx,{qi:e.qi,fX:c,h2:.08,dZ:e.dZ,$7:e.$7})},u):S,l=s(function(C,j){return C?j:S}),d=a(l,n.eX,a(O,function(C){return v(Az,C,e.dx,{fX:c,cZ:.004})},u)),b=a(l,n.fn,a(O,function(C){var j=C.a;return v(Mz,j,e.dx,{fX:c,e5:.12})},t)),g=a(l,n.fm,a(O,function(C){var j=C.b,L=C.c;return x(Pz,o,e.dZ,j,L)},t)),_=a(l,n.fj,f([Cz])),p=a(Ee,function(C){return C.bt},e.e),m=a(l,n.ex,a(O,function(C){return v(pz,C,e.dx,{fX:p,e5:.18})},u)),P=a(l,n.eD,a(O,function(C){return v(Lz,C,e.dx,{fX:p,tG:.18})},u));return{r_:Q(i,$),t7:Q(d,Q(P,Q(b,Q(m,Q(_,g)))))}}),ml=j9,zz={$:0},Bz=function(e){return{fX:e,bJ:1,b2:zz,b3:D}},Vz=function(e){return{$:7,a:e}},Ez=Y(function(e,r,n,t){return Vz({hd:0,jM:n,tL:t,D:e,lq:r})}),Hz=s(function(e,r){var n=r.F,t=a(rr,a(ht,0,e),n);if(!t.$&&!t.a.$){var o=t.a.a.em,c=t.a.a.en,i=t.a.a.E;return i.$===2?V({jM:o,lq:c}):D}else return D}),Iz=s(function(e,r){var n=a(Hz,r.bE,e.aA);if(n.$)return D;var t=n.a;return r.jM>0&&t.jM>0?V(x(Ez,Bz(So),r.jM*(t.lq/t.jM),r.jM,r4(r.bE))):D}),hl=s(function(e,r){var n=r.a,t=r.b,o=r.c;return a(bl,a(zn,n,e.pA),a(bl,a(zn,t,e.pB),a(zn,o,e.L)))}),m4=s(function(e,r){return v1(a(hl,e,H(r.pA,r.pB,r.L)))}),h4=s(function(e,r){var n=function(t){var o=v(pl,{eE:e,aZ:v(Yr,0,0,0)},r,v1(t));return H(o.pA,o.pB,o.L)};return{pA:n(H(1,0,0)),pB:n(H(0,1,0)),L:n(H(0,0,1))}}),g4=s(function(e,r){var n=e.aZ,t=a(h4,e.eE,r),o=a(m4,t,n);return c1({gF:f1(t),gH:qu(1),gX:v(Yr,n.pA-o.pA,n.pB-o.pB,n.L-o.L)})}),s1=function(e){return a(g4,{eE:H(1,0,0),aZ:v(Yr,0,0,0)},e)},Fz=function(e){return a(g4,{eE:H(0,1,0),aZ:v(Yr,0,0,0)},e)},Uz=A(function(e,r,n){return a(he,function(t){var o=r.I.L-r.hN.L,c=r.I.pB-r.hN.pB,i=r.I.pA-r.hN.pA,u=a(ml,c,Ga(i*i+o*o)),$=a(ml,i,o);return a($i,H(n.pQ.pA,n.pQ.pB,n.pQ.L),a(Fz,$,a(s1,-u,t)))},a(Iz,e,{jM:n.jM,bE:n.bE}))}),Rz=A(function(e,r,n){return a(fe,Qr(S),v(Uz,e,r,n))}),CO=te,qz=function(e){return e},Gz=function(e){return{$:0,a:e}},Wz=Gz,Oz={$:3},Nz=Oz,Zz=Y(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Jz=Zz,Xz=function(e){return{$:1,a:e}},Yz=Xz,Qz=function(e){return a(yf,"height",er(e))},Kz=Bf,eB=function(e){return{$:2,a:e}},rB=eB,aB=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,c=function(u){return Ra(u*1e3)/1e3},i=function(u){return Ra(u*1e4)/100};return Es(f(["rgba(",Z(i(r)),"%,",Z(i(n)),"%,",Z(i(t)),"%,",Z(c(o)),")"]))},nB=s(function(e,r){switch(r.$){case 0:return a(jg,e,r);case 1:return a(kg,e,r);case 2:return a(wg,e,r);case 3:return a(Lg,e,r);case 4:return a(Ag,e,r);default:return a(Tg,e,r)}}),tB=s(function(e,r){switch(r.$){case 0:return a(ag,e,r);case 1:return a(ng,e,r);case 2:return a(tg,e,r);case 3:return a(og,e,r);case 4:return a(cg,e,r);case 5:return a(ig,e,r);case 6:return a(ug,e,r);case 7:return a(fg,e,r);default:return $g(e)}}),oB=A(function(e,r,n){return v(xg,e,r,n)}),_4=function(e){var r=e;return r},zt=Fg,_a=x(zt,1,1,1,1),kr=A(function(e,r,n){return a(O,function(t){return a(t,r,n)},e)}),y4=Y(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),cB=s(function(e,r){var n=e,t=r.pB,o=r.pA;return x(y4,n*o/t,n,n*(1-o-t)/t,1)}),PO=te,iB=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return x(zt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t,o)},Wu=s(function(e,r){return iB(a(cB,e,r))}),C4=s(function(e,r){return{m4:oe(e.m4,r.m4),af:e.af*r.af+e.ag*r.ai+e.ah*r.al,ag:e.af*r.ag+e.ag*r.aj+e.ah*r.am,ah:e.af*r.ah+e.ag*r.ak+e.ah*r.an,ai:e.ai*r.af+e.aj*r.ai+e.ak*r.al,aj:e.ai*r.ag+e.aj*r.aj+e.ak*r.am,ak:e.ai*r.ah+e.aj*r.ak+e.ak*r.an,al:e.al*r.af+e.am*r.ai+e.an*r.al,am:e.al*r.ag+e.am*r.aj+e.an*r.am,an:e.al*r.ah+e.am*r.ak+e.an*r.an,a_:r.a_+(e.a_*r.af+e.a$*r.ai+e.a0*r.al)*r.gH,a$:r.a$+(e.a_*r.ag+e.a$*r.aj+e.a0*r.am)*r.gH,a0:r.a0+(e.a_*r.ah+e.a$*r.ak+e.a0*r.an)*r.gH,gH:e.gH*r.gH}}),Bn=Xg,uB=function(e){return Bn({nm:e.af,nn:e.ai,no:e.al,np:e.a_,nq:e.ag,nr:e.aj,ns:e.am,nt:e.a$,nu:e.ah,nv:e.ak,nw:e.an,nx:e.a0,ny:0,nz:0,nA:0,nB:1})},gl=Ae(function(e,r,n,t,o){var c=t.m4?1:-1,i=x(zt,t.gH,t.gH,t.gH,c);return wr(o,e,i,uB(t),t.m4,r,n)}),P4=Br(function(e,r,n,t,o,c){e:for(;;)switch(o.$){case 0:return c;case 6:var i=o.a,u=o.b,$=e,l=r,d=n,b=a(C4,i,t),g=u,_=c;e=$,r=l,n=d,t=b,o=g,c=_;continue e;case 1:var p=o.b,m=a(M,U(gl,e,r,n,t,p),c.aJ);return{aJ:m,bk:c.bk,t6:c.t6,M:c.M};case 2:var p=o.b,m=a(M,U(gl,e,r,n,t,p),c.M);return{aJ:c.aJ,bk:c.bk,t6:c.t6,M:m};case 4:var P=o.b,C=a(M,U(gl,e,r,n,t,P),c.bk);return{aJ:c.aJ,bk:C,t6:c.t6,M:c.M};case 3:var j=o.a,L=a(M,U(gl,e,r,n,t,j),c.t6);return{aJ:c.aJ,bk:c.bk,t6:L,M:c.M};default:var T=o.a;return v(me,x(P4,e,r,n,t),c,T)}}),Va=function(e){var r=e;return Me(r)},oc=s(function(e,r){var n=e,t=r;return a(Pe,n,t)}),S4=function(e){var r=e;return r.sy},x4=function(e){var r=e;return r.sJ},Bt=s(function(e,r){var n=r;return e*n}),j4=function(e){var r=e;return-r},fB=s(function(e,r){var n=e,t=r;return t+n}),$B=function(e){var r=e;return r.nH},lB=function(e){var r=e;return r.sx},vB=function(e){var r=e;return r.nL},sB=function(e){var r=e;return r.sI},si=s(function(e,r){var n=e,t=r;return t-n}),k4=function(e){return H(a(si,vB(e),$B(e)),a(si,sB(e),lB(e)),a(si,x4(e),S4(e)))},cc=0,dB=function(e){var r=e,n=a(Pe,Me(r.pA),a(Pe,Me(r.pB),Me(r.L)));if(n){var t=r.L/n,o=r.pB/n,c=r.pA/n,i=Ga(c*c+o*o+t*t);return i*n}else return cc},SO=te,bB=A(function(e,r,n){var t=e,o=r,c=n;return{pA:t,pB:o,L:c}}),w4=function(e){var r=k4(e),n=r.a,t=r.b,o=r.c;return dB(v(bB,n,t,o))},pB=s(function(e,r){var n=a(Bt,.99,a(oc,Va(e),j4(S4(r)))),t=a(Bt,1.01,a(fB,w4(r),j4(x4(r))));return y(n,t)}),mB=Y(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),d1=mB,_l=Y(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),hB=function(e){var r=e.ch,n=e.cl,t=e.cF;return x(_l,518,t,n,r)},gB=s(function(e,r){return{$:6,a:e,b:r}}),_B=gB,L4=f([hB({ch:1,cl:0,cF:!1}),x(d1,!1,!1,!1,!1),a(_B,0,1)]),xO=te,di=519,b1=8,A4=15,jO=te,bi=7681,yB={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Fe=rg,T4=s(function(e,r){return{$:0,a:e,b:r}}),CB=T4({mi:1,mP:0,nO:5}),Dr=zg,PB=CB(f([{tB:a(Dr,-1,-1)},{tB:a(Dr,1,-1)},{tB:a(Dr,-1,1)},{tB:a(Dr,1,1)}])),SB={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"tB"},uniforms:{}},xB=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){return function(d){return{$:2,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:u,i:$,j:l,k:d}}}}}}}}}}}},p1=A(function(e,r,n){var t=e.ls,o=e.j3,c=e.tL,i=s(function(l,d){var b=l;return d(b)}),u=s(function(l,d){var b=l;return d(b)}),$=function(l){return a(We,i(l.gS),a(We,u(l.f8),a(We,u(l.g4),u(l.g5))))};return a($,n,a($,r,v(xB,c,o,t)))}),m1=function(e){return v(p1,{j3:e.j3,tL:e.tL,ls:e.ls},{f8:e.f8,gS:e.gS,g4:e.g4,g5:e.g5},{f8:e.f8,gS:e.gS,g4:e.g4,g5:e.g5})},h1=function(e){return U(Fe,f([m1(e),x(d1,!1,!1,!1,!1)]),SB,yB,PB,{})},jB=h1({f8:bi,j3:0,tL:b1,gS:di,ls:A4,g4:bi,g5:bi}),kB=516,M4=5386,ya=7680,wB=function(e){return a(An,2,e+4)},D4=function(e){return h1({f8:ya,j3:A4,tL:b1,gS:kB,ls:wB(e),g4:M4,g5:M4})},LB=A(function(e,r,n){return wn(f([v(kr,e,n,L4),f([D4(r),jB])]))}),AB=s(function(e,r){return wn(a(yn,LB(e),r))}),kO=te,TB=1029,MB=function(e){return{$:5,a:e}},z4=function(e){var r=e;return MB(r)},ic=z4(TB),DB=1028,uc=z4(DB),zB=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){return{$:0,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:u,i:$,j:l}}}}}}}}}}},BB=function(e){var r=e.aQ,n=e.fX,t=e.g6,o=e.ja,c=e.jK,i=e.kL,u=s(function($,l){var d=$.a,b=$.b,g=$.c,_=l.a,p=l.b,m=l.c;return zB(d)(b)(g)(_)(p)(m)(i)(c)(o)(t)});return a(u,n,r)},VB=A(function(e,r,n){return{$:0,a:e,b:r,c:n}}),B4=s(function(e,r){var n=e,t=r;return v(VB,32774,n,t)}),EB=s(function(e,r){return BB({g6:0,aQ:a(B4,e,r),ja:0,fX:a(B4,e,r),jK:0,kL:0})}),wO=te,HB=1,IB=771,FB={$:8},UB=FB,yl=f([a(EB,HB,IB),UB]),RB=function(e){var r=e.ch,n=e.cl,t=e.cF;return x(_l,513,t,n,r)},V4=RB({ch:1,cl:0,cF:!0}),pi=a(M,V4,yl),E4=514,H4=function(e){var r=e.ch,n=e.cl,t=e.cF;return x(_l,515,t,n,r)},I4=240,qB=a(M,H4({ch:1,cl:0,cF:!0}),a(M,m1({f8:ya,j3:I4,tL:0,gS:E4,ls:0,g4:ya,g5:ya}),yl)),GB=function(e){var r=e.ch,n=e.cl,t=e.cF;return x(_l,514,t,n,r)},mi=a(M,GB({ch:1,cl:0,cF:!0}),yl),LO=te,F4=function(e){var r=e;return r},g1=function(e){var r=e;return F4(r.cS)},Cl=function(e){var r=e;return r.aZ},WB=function(e){return Cl(g1(e))},Pl=function(e){return e},AO=te,tt=function(e){return e},OB=function(e){return Pl({aZ:tt({pA:e.a_,pB:e.a$,L:e.a0}),vb:Dn({pA:e.af,pB:e.ag,L:e.ah}),vk:Dn({pA:e.ai,pB:e.aj,L:e.ak}),vq:Dn({pA:e.al,pB:e.am,L:e.an})})},_1=s(function(e,r){var n=e,t=r,o=n.vq,c=o,i=n.vk,u=i,$=n.vb,l=$;return{pA:t.pA*l.pA+t.pB*l.pB+t.L*l.L,pB:t.pA*u.pA+t.pB*u.pB+t.L*u.L,L:t.pA*c.pA+t.pB*c.pB+t.L*c.L}}),U4=s(function(e,r){var n=e,t=r,o=n.aZ,c=o,i=t.pA-c.pA,u=t.pB-c.pB,$=t.L-c.L,l=n.vq,d=l,b=n.vk,g=b,_=n.vb,p=_;return{pA:i*p.pA+u*p.pB+$*p.L,pB:i*g.pA+u*g.pB+$*g.L,L:i*d.pA+u*d.pB+$*d.L}}),Sl=function(e){var r=e;return r.vb},xl=function(e){var r=e;return r.vk},Ou=function(e){var r=e;return r.vq},R4=s(function(e,r){return{aZ:a(U4,e,Cl(r)),vb:a(_1,e,Sl(r)),vk:a(_1,e,xl(r)),vq:a(_1,e,Ou(r))}}),zr=A(function(e,r,n){return{pA:e,pB:r,L:n}}),TO=te,NB=s(function(e,r){var n=r,t=n,o=e,c=o;return{nH:a(Pe,c.nH,t.nH),sx:a(Pe,c.sx,t.sx),sy:a(Pe,c.sy,t.sy),nL:a(Ge,c.nL,t.nL),sI:a(Ge,c.sI,t.sI),sJ:a(Ge,c.sJ,t.sJ)}}),Wa=function(e){var r=e;return r},ZB=s(function(e,r){var n=r,t=n.L,o=n.pB,c=n.pA,i=e,u=i.a,$=i.b,l=i.c,d=Me(u)/2,b=Me($)/2,g=Me(l)/2;return{nH:c+d,sx:o+b,sy:t+g,nL:c-d,sI:o-b,sJ:t-g}}),y1=Y(function(e,r,n,t){var o=n.qm,c=2*n.rS*r,i=2*n.rR*r,u=2*n.rQ*r,$=o.L*r,l=o.pB*r,d=o.pA*r,b=Wa(Ou(e)),g=Me(u*b.pA)+Me(i*b.pB)+Me(c*b.L),_=Wa(xl(e)),p=Me(u*_.pA)+Me(i*_.pB)+Me(c*_.L),m=Wa(Sl(e)),P=Me(u*m.pA)+Me(i*m.pB)+Me(c*m.L),C=a(ZB,H(P,p,g),a(U4,e,v(zr,d,l,$)));if(t.$)return V(C);var j=t.a;return V(a(NB,j,C))}),C1=Y(function(e,r,n,t){e:for(;;)if(t.b){var o=t.a,c=t.b;switch(o.$){case 0:var _=e,p=r,m=n,P=c;e=_,r=p,n=m,t=P;continue e;case 1:var i=o.a,u=x(y1,e,r,i,n),_=e,p=r,m=u,P=c;e=_,r=p,n=m,t=P;continue e;case 2:var i=o.a,u=x(y1,e,r,i,n),_=e,p=r,m=u,P=c;e=_,r=p,n=m,t=P;continue e;case 3:var _=e,p=r,m=n,P=c;e=_,r=p,n=m,t=P;continue e;case 4:var i=o.a,u=x(y1,e,r,i,n),_=e,p=r,m=u,P=c;e=_,r=p,n=m,t=P;continue e;case 5:var $=o.a,_=e,p=r,m=x(C1,e,r,n,$),P=c;e=_,r=p,n=m,t=P;continue e;default:var l=o.a,d=o.b,b=a(R4,OB(l),e),g=r*l.gH,_=e,p=r,m=x(C1,b,g,n,f([d])),P=c;e=_,r=p,n=m,t=P;continue e}}else return n}),Nu=Ug,Zu=Rg,Ju=qg,MO=te,q4=function(e){return{$:5,a:e}},JB=s(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,o=t,c=a(M,n,r);e=o,r=c;continue e}else return r}),mo=function(e){return q4(a(JB,e,S))},XB={m4:!0,af:1,ag:0,ah:0,ai:0,aj:1,ak:0,al:0,am:0,an:1,a_:0,a$:0,a0:0,gH:1},YB=function(e){var r=e;return r},G4=h1({f8:bi,j3:0,tL:b1,gS:di,ls:255,g4:bi,g5:bi}),DO=te,Vn={ja:0,u:!1,jK:0,kG:0,kL:0,uN:0,pA:0,pB:0,L:0},pn=s(function(e,r){var n=e,t=r;return Bn({nm:n.pA,nn:n.kL,no:t.pA,np:t.kL,nq:n.pB,nr:n.jK,ns:t.pB,nt:t.jK,nu:n.L,nv:n.ja,nw:t.L,nx:t.ja,ny:n.uN,nz:n.kG,nA:t.uN,nB:t.kG})}),Xu=y({gn:a(pn,Vn,Vn),h3:a(pn,Vn,Vn),h4:a(pn,Vn,Vn),h5:a(pn,Vn,Vn)},x(zt,0,0,0,0)),QB=function(e){var r=e;return r.eN},KB=function(e){var r=e;return r.my},W4=function(e){var r=e;return .5*r},eV=function(e){var r=e;return l4(r)},O4=function(e){return eV(W4(KB(e)))},N4=function(e){var r=e;return 2*r},rV=function(e){return N4(a(Bt,O4(e),QB(e)))},aV=function(e){var r=e;return r.tF},nV=s(function(e,r){var n=r.pP,t=r.rs,o=r.sW,c=O4(e),i=Va(o),u=i,$=Va(t),l=$,d=aV(e);if(d){var b=rV(e),g=b;return Tc(l)?Bn({nm:2/(n*g),nn:0,no:0,np:0,nq:0,nr:2/g,ns:0,nt:0,nu:0,nv:0,nw:0,nx:-1,ny:0,nz:0,nA:0,nB:1}):Bn({nm:2/(n*g),nn:0,no:0,np:0,nq:0,nr:2/g,ns:0,nt:0,nu:0,nv:0,nw:-2/(l-u),nx:-(l+u)/(l-u),ny:0,nz:0,nA:0,nB:1})}else return Tc(l)?Bn({nm:1/(n*c),nn:0,no:0,np:0,nq:0,nr:1/c,ns:0,nt:0,nu:0,nv:0,nw:-1,nx:-2*u,ny:0,nz:0,nA:-1,nB:0}):Bn({nm:1/(n*c),nn:0,no:0,np:0,nq:0,nr:1/c,ns:0,nt:0,nu:0,nv:0,nw:-(l+u)/(l-u),nx:-2*l*u/(l-u),ny:0,nz:0,nA:-1,nB:0})}),tV=function(e){return a(M,H4({ch:1,cl:0,cF:!0}),a(M,m1({f8:ya,j3:I4,tL:e,gS:E4,ls:0,g4:ya,g5:ya}),yl))},jl=s(function(e,r){return(1&e>>r)===1?0:1}),oV=A(function(e,r,n){return wn(a(O,function(t){var o=t<<4,c=x(zt,a(jl,t,0),a(jl,t,1),a(jl,t,2),a(jl,t,3));return v(kr,e,y(r,c),tV(o))},a(_n,1,a(An,2,n)-1)))}),ot=function(e){var r=e;return r},cV=Yg,ct={pA:0,pB:0,L:0},Z4=Dn({pA:1,pB:0,L:0}),iV=Z4,J4=ac,X4=Dn({pA:0,pB:0,L:1}),P1=X4,uV={aZ:ct,vb:iV,vk:J4,vq:P1},fc=function(e){var r=e;return r},fV=function(e){var r=fc(Cl(e)),n=Wa(Ou(e)),t=Wa(xl(e)),o=Wa(Sl(e));return Bn({nm:o.pA,nn:t.pA,no:n.pA,np:r.pA,nq:o.pB,nr:t.pB,ns:n.pB,nt:r.pB,nu:o.L,nv:t.L,nw:n.L,nx:r.L,ny:0,nz:0,nA:0,nB:1})},$V=s(function(e,r){return fV(a(R4,g1(r),e))}),lV=function(e){return a($V,uV,e)},hi=f([V4,x(d1,!1,!1,!1,!1)]),vV=function(e){var r=g1(e.qi),n=mo(e.hG),t=n,o=x(C1,r,1,D,f([t]));if(o.$===1)return S;var c=o.a,i=lV(e.qi),u=(function(){var ue=e.pc;switch(ue.$){case 0:return y(0,0);case 1:return y(1,0);case 2:return y(2,0);case 3:var ge=ue.a;return y(3,ge);case 4:var ge=ue.a;return y(4,ge);default:return y(5,0)}})(),$=u.a,l=u.b,d=a(pB,e.qv,c),b=d.a,g=d.b,_=a(nV,e.qi,{pP:e.pP,rs:g,sW:b}),p=cV(_).nB,m=p?Wa(Ou(r)):ot(WB(e.qi)),P=e.mp,C=P,j=a(Wu,C,e.px),L=j,T=Bn({nm:0,nn:m.pA,no:Nu(L),np:e.o$,nq:0,nr:m.pB,ns:Zu(L),nt:YB(w4(c)),nu:0,nv:m.L,nw:Ju(L),nx:$,ny:0,nz:p,nA:0,nB:l}),F=wr(P4,T,i,_,XB,t,{aJ:S,bk:S,t6:S,M:S}),q=e.ne;switch(q.$){case 0:var R=q.a;return wn(f([v(kr,F.aJ,y(R,_a),pi),v(kr,F.M,y(R,_a),a(M,uc,hi)),v(kr,F.M,y(R,_a),a(M,uc,mi)),v(kr,F.M,y(R,_a),a(M,ic,hi)),v(kr,F.M,y(R,_a),a(M,ic,mi)),v(kr,F.bk,Xu,pi)]));case 1:var R=q.a;return wn(f([v(kr,F.aJ,Xu,pi),f([G4]),v(kr,F.t6,R.gn,L4),f([D4(0)]),v(kr,F.aJ,y(R,_a),qB),v(kr,F.M,y(R,_a),a(M,uc,hi)),v(kr,F.M,y(R,_a),a(M,uc,mi)),v(kr,F.M,y(R,_a),a(M,ic,hi)),v(kr,F.M,y(R,_a),a(M,ic,mi)),v(kr,F.bk,Xu,pi)]));default:var K=q.a,J=q.b;return wn(f([v(kr,F.aJ,y(J,_a),pi),f([G4]),a(AB,F.t6,K),v(oV,F.aJ,J,Ar(K)),v(kr,F.M,y(J,_a),a(M,uc,hi)),v(kr,F.M,y(J,_a),a(M,uc,mi)),v(kr,F.M,y(J,_a),a(M,ic,hi)),v(kr,F.M,y(J,_a),a(M,ic,mi)),v(kr,F.bk,Xu,pi)]))}},sV=function(e){return a(yf,"width",er(e))},dV=s(function(e,r){var n=f([Yz(1),rB(0),Wz(!0),x(Jz,0,0,0,0)]),t=(function(){var L=e.i3;switch(L.$){case 0:return H(n,"0",1);case 1:return H(a(M,Nz,n),"1",1);default:var T=L.a;return H(n,"0",T)}})(),o=t.a,c=t.b,i=t.c,u=e.qY,$=u.a,l=u.b,d=_4(l),b=a(I,"height",er(d)+"px"),g=_4($),_=g/d,p=a(fn,function(L){return vV({pP:_,qi:e.qi,qv:e.qv,hG:L.hG,mp:L.mp,ne:L.ne,o$:i,pc:L.pc,px:L.px})},r),m=a(I,"width",er(g)+"px"),P=e.pX,C=P,j=aB(C);return v(Kz,"div",f([a(I,"padding","0px"),m,b]),f([y(c,v(oB,o,f([sV(Ra(g*i)),Qz(Ra(d*i)),m,b,a(I,"display","block"),a(I,"background-color",j)]),p))]))}),bV=function(e){return{$:2,a:e}},pV=function(e){return bV(e)},mV=function(e){return a(dV,{i3:pV(e.eB),pX:e.pX,qi:e.qi,qv:e.qv,qY:e.qY},f([{hG:e.hG,mp:e.mp,ne:e.ne,pc:e.pc,px:e.px}]))},zO=1,BO=0,hV=function(e){return{$:0,a:e}},gV=function(e){return hV(e)},_V=s(function(e,r){var n=e,t=r,o=t.L-n.L,c=t.pB-n.pB,i=t.pA-n.pA,u=a(Pe,Me(i),a(Pe,Me(c),Me(o)));if(u){var $=o/u,l=c/u,d=i/u,b=Ga(d*d+l*l+$*$);return V({pA:d/b,pB:l/b,L:$/b})}else return D}),S1=function(e){return e},yV=function(e){return{$:1,a:e}},CV=function(e){return yV(e)},x1=s(function(e,r){var n=e,t=r;return{pA:t.pB*n.L-t.L*n.pB,pB:t.L*n.pA-t.pA*n.L,L:t.pA*n.pB-t.pB*n.pA}}),kl=function(e){var r=e,n=a(Pe,Me(r.pA),a(Pe,Me(r.pB),Me(r.L)));if(n){var t=r.L/n,o=r.pB/n,c=r.pA/n,i=Ga(c*c+o*o+t*t);return V({pA:c/i,pB:o/i,L:t/i})}else return D},PV=s(function(e,r){var n=e,t=r,o=t.L-n.L,c=t.pB-n.pB,i=t.pA-n.pA,u=a(Pe,Me(i),a(Pe,Me(c),Me(o)));if(u){var $=o/u,l=c/u,d=i/u,b=Ga(d*d+l*l+$*$);return b*u}else return cc}),wl=s(function(e,r){var n=e,t=r;return{pA:t.pA-n.pA,pB:t.pB-n.pB,L:t.L-n.L}}),SV=s(function(e,r){var n=e,t=r;return t.pA*n.pA+t.pB*n.pB+t.L*n.L}),Y4=s(function(e,r){var n=e,t=r;return ce(t,n)>0}),xV=s(function(e,r){var n=e,t=r;return ce(t,n)<0}),jV=s(function(e,r){var n=e,t=r;return{pA:t.pA-n.pA,pB:t.pB-n.pB,L:t.L-n.L}}),kV=s(function(e,r){var n=e,t=r,o=t.pA*n.pA+t.pB*n.pB+t.L*n.L;return{pA:n.pA*o,pB:n.pB*o,L:n.L*o}}),wV=function(e){var r=e;return{pA:-r.pA,pB:-r.pB,L:-r.L}},j1={pA:0,pB:0,L:0},LV=A(function(e,r,n){return a(oa,function(t){var o=a(jV,a(kV,t,r),r);return a(oa,function(c){var i=a(x1,r,e),u=a(SV,n,i),$=a(Y4,cc,u)?i:a(xV,cc,u)?wV(i):j1;return a(he,function(l){return H(t,c,l)},kl($))},kl(o))},kl(e))}),AV=function(e){var r=e,n=Me(r.L),t=Me(r.pB),o=Me(r.pA);if(ce(o,t)<1)if(ce(o,n)<1){var c=Ga(r.L*r.L+r.pB*r.pB);return{pA:0,pB:-r.L/c,L:r.pB/c}}else{var c=Ga(r.pB*r.pB+r.pA*r.pA);return{pA:-r.pB/c,pB:r.pA/c,L:0}}else if(ce(t,n)<1){var c=Ga(r.L*r.L+r.pA*r.pA);return{pA:r.L/c,pB:0,L:-r.pA/c}}else{var c=Ga(r.pA*r.pA+r.pB*r.pB);return{pA:-r.pB/c,pB:r.pA/c,L:0}}},k1=function(e){var r=AV(e),n=r,t=n,o=e,c=o,i={pA:c.pB*t.L-c.L*t.pB,pB:c.L*t.pA-c.pA*t.L,L:c.pA*t.pB-c.pB*t.pA};return y(r,i)},TV=function(e){var r=e;return r},VO=te,w1=te,EO=te,MV=s(function(e,r){var n=e,t=r;return a(ml,n,t)}),DV=s(function(e,r){var n=e,t=r;return{pA:n.pB*t.L-n.L*t.pB,pB:n.L*t.pA-n.pA*t.L,L:n.pA*t.pB-n.pB*t.pA}}),Q4=function(e){var r=e;return r.vb},K4=function(e){var r=e;return r.vk},zV=function(e){return a(DV,Q4(e),K4(e))},BV=function(e){var r=e;return r.aZ},VV=function(e){return{aZ:BV(e),vb:Q4(e),vk:K4(e),vq:zV(e)}},EV=function(e){return{eN:e.eN,my:(function(){var r=e.rC;if(r.$){var t=r.a;return N4(a(MV,W4(t),e.eN))}else{var n=r.a;return n}})(),cS:VV(e.lp),tF:e.tF}},HV=s(function(e,r){var n=k1(r),t=n.a,o=n.b;return w1({aZ:e,vb:t,vk:o})}),IV=s(function(e,r){return a(HV,r,e)}),FV=function(e){var r=a(wl,e.hN,e.I),n=TV(e.fF),t=a(x1,r,n),o=(function(){var c=v(LV,r,n,t);if(c.$){var d=kl(r);if(d.$){var g=k1(e.fF),_=g.a,p=g.b;return w1({aZ:e.I,vb:p,vk:e.fF})}else{var b=d.a;return a(IV,b,e.I)}}else{var i=c.a,u=i.a,$=i.b,l=i.c;return w1({aZ:e.I,vb:l,vk:$})}})();return EV({eN:a(PV,e.I,e.hN),rC:e.rC,tF:e.tF,lp:o})},it=function(e){return e},Ll=function(e){return e},UV=function(e){return FV({I:S1(e.I),hN:S1(e.hN),rC:(function(){var r=e.tF;if(r.$){var t=r.a.ps;return CV(it(t))}else{var n=r.a.eR;return gV(Ll(n))}})(),tF:(function(){var r=e.tF;return r.$?1:0})(),fF:a(fe,ac,a(_V,ct,S1(e.fF)))})},e6=function(e){return e},HO=te,Yu=function(e){return e},L1=function(e){return v(dr,0,1,e<=.04045?e/12.92:a(An,(e+.055)/1.055,2.4))},r6=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return{aQ:o,p3:t,rO:n,tJ:r}},Qu=function(e){var r=r6(e),n=r.aQ,t=r.p3,o=r.rO,c=r.tJ;return x(zt,L1(c),L1(o),L1(t),n)},a6=Gg,RV=function(e){var r=e,n=Nu(r),t=Zu(r),o=Ju(r);return x(y4,.4124*n+.3576*t+.1805*o,.2126*n+.7152*t+.0722*o,.0193*n+.1192*t+.9505*o,a6(r))},qV=function(e){return RV(Qu(e))},n6=function(e){var r=qV(e),n=r.a,t=r.b,o=r.c,c=n+t+o;return Yu({pA:n/c,pB:t/c})},GV=function(e){var r=e;return r},A1=function(e){var r=v(dr,1667,25e3,GV(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Yu({pA:n,pB:t})},WV=Yu({pA:.31271,pB:.32902}),OV=Yu({pA:.37208,pB:.37529}),NV=Yu({pA:.44757,pB:.40745}),ZV=A1(Fu(12e3)),JV=A1(Fu(5600)),ho=function(e){switch(e.$){case 0:return WV;case 1:return JV;case 2:return ZV;case 3:return NV;case 4:return OV;case 5:var r=e.a;return A1(r);default:var n=e.a;return n6(n)}},IO=te,T1=function(e){return e},t6=function(e){return T1(1.2*a(An,2,e))},XV=function(e){return Va(e)},YV=function(e){var r=e;return r},QV=function(e){var r=e.m5,n=e.oL,t=e.mq,o=YV(n);return t6(a(wf,2,100*a(An,t,2)/(o*r)))},KV=function(e){switch(e.$){case 0:var r=e.a;return t6(r);case 1:var n=e.a;return XV(n);default:var t=e.a;return QV({mq:t.mq,m5:t.m5,oL:t.oL})}},eE=s(function(e,r){return{$:2,a:e,b:r}}),o6=function(e){return{$:0,a:e}},Al=function(e){var r=e;return r},rE=function(e){var r=e;return r.u},c6=o6(Xu.a),aE=s(function(e,r){var n=s(function(t,o){var c=o.a,i=o.b;return e(t)?y(a(M,t,c),i):y(c,a(M,t,i))});return v(cn,n,y(S,S),r)}),nE=function(e){var r=e;return Bn({nm:r.pA,nn:r.kL,no:0,np:0,nq:r.pB,nr:r.jK,ns:0,nt:0,nu:r.L,nv:r.ja,nw:0,nx:0,ny:r.uN,nz:r.kG,nA:0,nB:0})},tE=Be(function(e,r,n,t,o,c,i,u){var $=a(aE,rE,f([Al(e),Al(r),Al(n),Al(t)])),l=$.a,d=$.b;if(l.b){var b=Q(l,d);if(b.b&&b.b.b&&b.b.b.b&&b.b.b.b.b&&!b.b.b.b.b.b){var g=b.a,_=b.b,p=_.a,m=_.b,P=m.a,C=m.b,j=C.a;return a(eE,a(O,nE,l),{gn:a(pn,g,p),h3:a(pn,P,j),h4:a(pn,o,c),h5:a(pn,i,u)})}else return c6}else return o6({gn:a(pn,e,r),h3:a(pn,n,t),h4:a(pn,o,c),h5:a(pn,i,u)})}),FO=te,i6=function(e){return e},u6=s(function(e,r){var n=e,t=Wa(r.eE),o=t.L,c=t.pB,i=t.pA,u=a(Wu,r.jR,r.a),$=u;return{ja:Ju($),u:n,jK:Zu($),kG:0,kL:Nu($),uN:1,pA:-i,pB:-c,L:-o}}),f6=s(function(e,r){var n=e,t=fc(r.tB),o=t.L,c=t.pB,i=t.pA,u=a(Wu,r.jR,r.a),$=u;return{ja:Ju($),u:n,jK:Zu($),kG:0,kL:Nu($),uN:2,pA:i,pB:c,L:o}}),oE=function(e){switch(e.$){case 0:var r=e.a;return a(u6,i6(r.u),{a:ho(r.a),eE:r.eE,jR:r.jR});case 1:var r=e.a;return a(f6,i6(r.u),{a:ho(r.a),jR:r.jR,tB:r.tB});default:return Vn}},M1=function(e){return e},$6=function(e){var r=e;return r},cE=function(e){var r=e;return{pA:-r.pA,pB:-r.pB,L:-r.L}},D1=function(e){e:for(;;){if(oe(e.mV,cc)&&oe(e.mW,cc))return Vn;if(a(Y4,Va(e.mV),Va(e.mW))){var r={a:e.a,mV:e.mW,mW:e.mV,fF:cE(e.fF)};e=r;continue e}else{var n=Me($6(e.mW)/Er),t=Me($6(e.mV)/Er),o=Wa(e.fF),c=o.L,i=o.pB,u=o.pA,$=a(Wu,M1(1),e.a),l=$;return{ja:t*Ju(l),u:!1,jK:t*Zu(l),kG:n/t,kL:t*Nu(l),uN:3,pA:u,pB:i,L:c}}}},iE=function(e){return D1({a:e.a,mV:e.jR,mW:e.jR,fF:P1})},l6=!1,uE=function(e){return D1({a:e.a,mV:e.jR,mW:cc,fF:e.fF})},fE=function(e){switch(e.$){case 0:var r=e.a;return a(u6,l6,{a:ho(r.a),eE:r.eE,jR:r.jR});case 1:var r=e.a;return a(f6,l6,{a:ho(r.a),jR:r.jR,tB:r.tB});case 2:var r=e.a;return D1({a:ho(r.a),mV:r.mV,mW:r.mW,fF:r.fF});case 3:var r=e.a;return uE({a:ho(r.a),jR:r.jR,fF:r.fF});default:var r=e.a;return iE({a:ho(r.a),jR:r.jR})}},$E=function(e){var r=Vn,n=function(u){switch(u.$){case 0:return!0;case 1:return!0;default:return!1}},t=a(O,fE,a(ao,4,a(gr,a(nr,pv,n),e))),o=function(u){return a(fe,r,Mr(a(pt,u,t)))},c=a(O,oE,a(ao,4,a(gr,n,e))),i=function(u){return a(fe,r,Mr(a(pt,u,c)))};return Ye(c)&&Ye(t)?c6:go(tE,i(0),i(1),i(2),i(3),o(0),o(1),o(2),o(3))},lE={$:5},vE=lE,sE={$:0},dE=sE,bE=function(e){return{$:4,a:e}},pE={$:2},mE=function(e){return Tc(e)?pE:bE(e)},hE=function(e){return{$:3,a:e}},gE={$:1},_E=function(e){return Tc(e)?gE:hE(e)},yE=function(e){switch(e.$){case 0:return dE;case 1:var r=e.a;return _E(r);case 2:var r=e.a;return mE(r);default:return vE}},CE=s(function(e,r){return mV({pX:qz(e.lI),qi:UV(e.qi),qv:it(e.qv),eB:e.eB,qY:y(e6(Ra(e.$7.lq)),e6(Ra(e.$7.jM))),hG:r,mp:KV(e.mp),ne:$E(e.ne),pc:yE(e.pc),px:ho(e.px)})}),PE=function(e){return{$:13,a:e}},SE=function(e){return{$:2,a:e}},xE=function(e){return{$:6,a:e}},jE=function(e){return{$:16,a:e}},kE=function(e){return{$:15,a:e}},wE=function(e){return{$:10,a:e}},LE=function(e){return{$:12,a:e}},AE=function(e){return{$:9,a:e}},TE=function(e){return{$:19,a:e}},ME=function(e){return{$:1,a:e}},DE=function(e){return{$:5,a:e}},zE=function(e){return{$:17,a:e}},BE=function(e){return{$:18,a:e}},VE=function(e){return{$:4,a:e}},EE=function(e){return{$:20,a:e}},HE=function(e){return{$:3,a:e}},IE=function(e){return{$:0,a:e}},FE=function(e){return{$:21,a:e}},UE=function(e){return{$:11,a:e}},RE=function(e){return{$:8,a:e}},qE=function(e){return{$:7,a:e}},GE=function(e){return{$:14,a:e}},v6=pl({eE:H(0,0,1),aZ:v(Yr,0,0,0)}),WE=s(function(e,r){if(e.$){var t=e.a;return a(m4,t,r)}else{var n=e.a;return a(v6,n,r)}}),OE=s(function(e,r){if(e.$){var t=e.a;return v(Yr,r.pA*t.pA,r.pB*t.pB,r.L*t.L)}else{var n=e.a;return v(Yr,r.pA*n,r.pB*n,r.L*n)}}),NE=s(function(e,r){return v(Yr,r.pA+e.pA,r.pB+e.pB,r.L+e.L)}),ZE=s(function(e,r){return{pA:a(hl,e,r.pA),pB:a(hl,e,r.pB),L:a(hl,e,r.L)}}),JE=function(e){return a(h4,H(0,0,1),e)},s6=function(e){if(e.$){var n=e.a;return n}else{var r=e.a;return JE(r)}},XE=s(function(e,r){var n=y(e,r);if(!n.a.$&&!n.b.$){var t=n.a.a,o=n.b.a;return t1(t+o)}else return f1(a(ZE,s6(e),s6(r)))}),z1=function(e){return{$:1,a:e}},YE=s(function(e,r){var n=y(e,r);if(n.a.$)if(n.b.$){var c=n.a.a,i=n.b.a;return z1(v(Yr,c.pA*i.pA,c.pB*i.pB,c.L*i.L))}else{var c=n.a.a,t=n.b.a;return z1(v(Yr,c.pA*t,c.pB*t,c.L*t))}else if(n.b.$){var t=n.a.a,c=n.b.a;return z1(v(Yr,t*c.pA,t*c.pB,t*c.L))}else{var t=n.a.a,o=n.b.a;return qu(t*o)}}),QE=s(function(e,r){return{gF:a(XE,e.gF,r.gF),gH:a(YE,e.gH,r.gH),gX:a(NE,e.gX,a(WE,e.gF,a(OE,e.gH,r.gX)))}}),B1=A(function(e,r,n){switch(r.$){case 0:var t=r.a.dD,o=r.a.lh,c=a(QE,e,o);return v(me,B1(c),n,t);case 1:var i=r.a.l1,u=r.a.hk;return Q(a(O,function(b){var g=b.a,_=b.b;return y(g,xE({hk:u,sa:_}))},v(B1,e,i,S)),n);case 2:var l=r.a;return a(M,y(e,IE(l)),n);case 3:var l=r.a;return a(M,y(e,ME(l)),n);case 4:var l=r.a;return a(M,y(e,SE(l)),n);case 5:var l=r.a;return a(M,y(e,HE(l)),n);case 6:var l=r.a;return a(M,y(e,VE(l)),n);case 7:var l=r.a;return a(M,y(e,DE(l)),n);case 8:var l=r.a;return a(M,y(e,qE(l)),n);case 9:var l=r.a;return a(M,y(e,RE(l)),n);case 10:var $=r.a;return a(M,y(e,AE($)),n);case 11:var l=r.a;return a(M,y(e,wE(l)),n);case 12:var l=r.a;return a(M,y(e,UE(l)),n);case 13:var l=r.a;return a(M,y(e,LE(l)),n);case 14:var l=r.a;return a(M,y(e,PE(l)),n);case 15:var l=r.a;return a(M,y(e,GE(l)),n);case 16:var l=r.a;return a(M,y(e,kE(l)),n);case 17:var l=r.a;return a(M,y(e,jE(l)),n);case 18:var l=r.a;return a(M,y(e,zE(l)),n);case 19:var l=r.a;return a(M,y(e,BE(l)),n);case 20:var d=r.a;return a(M,y(e,TE(d)),n);case 21:var d=r.a;return a(M,y(e,EE(d)),n);default:var d=r.a;return a(M,y(e,FE(d)),n)}}),KE=function(e){return Te(v(B1,f4,e,S))},V1=function(e){var r=e;return r.pA},E1=function(e){var r=e;return r.pB},H1=function(e){var r=e;return r.L},eH=function(e){var r=e,n=H1(r.vq),t=E1(r.vq),o=V1(r.vq),c=H1(r.vk),i=E1(r.vk),u=V1(r.vk),$=H1(r.vb),l=E1(r.vb),d=V1(r.vb);return d*i*n+l*c*o+$*u*t-$*i*o-l*u*n-d*c*t>0},rH=function(e){var r=fc(Cl(e)),n=Wa(Ou(e)),t=Wa(xl(e)),o=Wa(Sl(e));return{m4:eH(e),af:o.pA,ag:o.pB,ah:o.L,ai:t.pA,aj:t.pB,ak:t.L,al:n.pA,am:n.pB,an:n.L,a_:r.pA,a$:r.pB,a0:r.L,gH:1}},$c=s(function(e,r){return{$:6,a:e,b:r}}),I1={$:0},de=I1,Tl=s(function(e,r){var n=r;switch(n.$){case 0:return de;case 6:var t=n.a,o=n.b,c=a(C4,t,e);return a($c,c,o);case 1:return a($c,e,n);case 2:return a($c,e,n);case 4:return a($c,e,n);case 3:return a($c,e,n);default:return a($c,e,n)}}),Ml=s(function(e,r){return a(Tl,rH(e),r)}),aH=s(function(e,r){return a(Ml,e,r)}),d6=function(e){var r=e;return r.eE},b6=function(e){var r=e;return r.aZ},nH=s(function(e,r){var n=r,t=fc(b6(e)),o=.5*n,c=dn(o),i=bn(o),u=Wa(d6(e)),$=u.pA*i,l=c*$,d=$*$,b=u.pB*i,g=c*b,_=$*b,p=b*b,m=1-2*(d+p),P=u.L*i,C=c*P,j=2*(_-C),L=2*(_+C),T=$*P,F=2*(T+g),q=2*(T-g),R=b*P,K=2*(R-l),J=2*(R+l),ue=P*P,ge=1-2*(p+ue),De=1-2*(d+ue);return{m4:!0,af:ge,ag:L,ah:q,ai:j,aj:De,ak:J,al:F,am:K,an:m,a_:t.pA-ge*t.pA-j*t.pB-F*t.L,a$:t.pB-L*t.pA-De*t.pB-K*t.L,a0:t.L-q*t.pA-J*t.pB-m*t.L,gH:1}}),tH=A(function(e,r,n){return a(Tl,a(nH,e,r),n)}),F1=A(function(e,r,n){return v(tH,e,r,n)}),UO=te,Dl=s(function(e,r){return{eE:r,aZ:e}}),p6=a(Dl,ct,P1),oH=s(function(e,r){if(e.$){var t=e.a,o=function(c){var i=c.a,u=c.b,$=c.c;return Dn({pA:i,pB:u,L:$})};return a(aH,Pl({aZ:ct,vb:o(t.pA),vk:o(t.pB),vq:o(t.L)}),r)}else{var n=e.a;return v(F1,p6,Ll(n),r)}}),cH=s(function(e,r){var n=fc(e),t=1-r;return{m4:r>=0,af:1,ag:0,ah:0,ai:0,aj:1,ak:0,al:0,am:0,an:1,a_:t*n.pA,a$:t*n.pB,a0:t*n.L,gH:r}}),iH=A(function(e,r,n){return a(Tl,a(cH,e,r),n)}),uH=A(function(e,r,n){return v(iH,e,r,n)}),fH=s(function(e,r){if(e.$)return r;var n=e.a;return v(uH,ct,n,r)}),m6=A(function(e,r,n){return{pA:e,pB:r,L:n}}),h6=function(e){var r=e;return r},$H=function(e){var r=h6(e);return{m4:!0,af:1,ag:0,ah:0,ai:0,aj:1,ak:0,al:0,am:0,an:1,a_:r.pA,a$:r.pB,a0:r.L,gH:1}},g6=s(function(e,r){return a(Tl,$H(e),r)}),_6=s(function(e,r){return a(g6,e,r)}),lH=s(function(e,r){var n=e.L,t=e.pB,o=e.pA;return a(_6,v(m6,o,t,n),r)}),U1=s(function(e,r){var n=e.gH,t=e.gF,o=e.gX;return a(lH,o,a(oH,t,a(fH,n,r)))}),vH=function(e){var r=e;return F4(r.pT)},RO=1,y6=Y(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),sH=Y(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),C6=Y(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),dH=Y(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),P6=Y(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),bH=Y(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),pH=Y(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),zl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return x(pH,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return x(y6,n,r,o,1);case 3:var n=e.a,t=e.b,o=e.c;return x(sH,n,t,o,1);case 4:var n=e.a,t=e.b,o=e.c;return x(C6,n,t,o,1);case 5:var n=e.a,t=e.b,o=e.c;return x(bH,n,t,o,1);case 6:var n=e.a,t=e.b,o=e.c;return x(dH,n,t,o,1);case 7:var n=e.a,t=e.b,o=e.c;return x(P6,n,t,o,1);case 8:return e;case 9:return e;default:return e}},R1={$:0},qO=0,mH=Be(function(e,r,n,t,o,c,i,u){e:for(;;)if(u.b){var $=u.a,l=u.b,d=i($),b=d,g=a(Ge,b.nL,e),_=a(Pe,b.nH,r),p=a(Ge,b.sI,n),m=a(Pe,b.sx,t),P=a(Ge,b.sJ,o),C=a(Pe,b.sy,c),j=i,L=l;e=g,r=_,n=p,t=m,o=P,c=C,i=j,u=L;continue e}else return{nH:r,sx:t,sy:c,nL:e,sI:n,sJ:o}}),hH=A(function(e,r,n){var t=e(r),o=t;return go(mH,o.nL,o.nH,o.sI,o.sx,o.sJ,o.sy,e,n)}),S6=function(e){var r=e.sy,n=r,t=e.sJ,o=t,c=e.sx,i=c,u=e.sI,$=u,l=e.nH,d=l,b=e.nL,g=b;return{nH:a(Pe,g,d),sx:a(Pe,$,i),sy:a(Pe,o,n),nL:a(Ge,g,d),sI:a(Ge,$,i),sJ:a(Ge,o,n)}},gi=s(function(e,r){var n=e,t=r;return a(Ge,n,t)}),Ku=function(e){var r=e;return r},ef=function(e){var r=e;return r.pA},rf=function(e){var r=e;return r.pB},af=function(e){var r=e;return r.L},x6=function(e){var r=Ku(e),n=r.a,t=r.b,o=r.c,c=ef(n),i=rf(n),u=af(n),$=ef(t),l=rf(t),d=af(t),b=ef(o),g=rf(o),_=af(o);return S6({nH:a(oc,c,a(oc,$,b)),sx:a(oc,i,a(oc,l,g)),sy:a(oc,u,a(oc,d,_)),nL:a(gi,c,a(gi,$,b)),sI:a(gi,i,a(gi,l,g)),sJ:a(gi,u,a(gi,d,_))})},j6=Ig,ut=function(e){return j6(fc(e))},Bl=function(e){return j6(h6(e))},gH=s(function(e,r){var n=e,t=r,o=a(Pe,Me(t.pA),a(Pe,Me(t.pB),Me(t.L)));if(o){var c=t.L/o,i=t.pB/o,u=t.pA/o,$=Ga(u*u+i*i+c*c);return{pA:n*u/$,pB:n*i/$,L:n*c/$}}else return j1}),_H=gH(M1(1)),k6=A(function(e,r,n){var t=a(wl,r,n),o=a(wl,e,r);return _H(a(x1,t,o))}),yH=function(e){var r=Ku(e),n=r.a,t=r.b,o=r.c,c=Bl(v(k6,n,t,o));return H({ac:c,tB:ut(n)},{ac:c,tB:ut(t)},{ac:c,tB:ut(o)})},CH=s(function(e,r){return{$:2,a:e,b:r}}),w6=CH({mi:3,mP:0,nO:4}),L6=function(e){if(e.b){var r=e.a,n=e.b,t=w6(a(O,yH,e)),o=v(hH,x6,r,n);return x(y6,o,e,t,0)}else return R1},GO=te,Oa=A(function(e,r,n){return H(e,r,n)}),Vt=A(function(e,r,n){var t=e,o=r,c=n;return{pA:t,pB:o,L:c}}),A6=(function(){var e=it(1),r=it(1),n=it(1),t=a(Bt,-.5,e),o=a(Bt,-.5,r),c=a(Bt,-.5,n),i=v(Vt,c,o,t),u=a(Bt,.5,e),$=v(Vt,c,o,u),l=a(Bt,.5,r),d=v(Vt,c,l,t),b=v(Vt,c,l,u),g=a(Bt,.5,n),_=v(Vt,g,o,t),p=v(Vt,g,l,t),m=v(Vt,g,o,u),P=v(Vt,g,l,u);return zl(L6(f([v(Oa,i,p,_),v(Oa,i,d,p),v(Oa,$,m,P),v(Oa,$,P,b),v(Oa,_,p,P),v(Oa,_,P,m),v(Oa,i,b,d),v(Oa,i,$,b),v(Oa,i,_,m),v(Oa,i,m,$),v(Oa,d,P,p),v(Oa,d,b,P)])))})(),Vl={$:0},PH=A(function(e,r,n){return{$:1,a:e,b:r,c:n}}),SH=A(function(e,r,n){var t=r.a,o=r.b,c=r.c,i=e(c),u=e(o),$=e(t),l=Bl(v(k6,$,u,i)),d={ac:l,tB:ut($)},b={ac:l,tB:ut(u)},g={ac:l,tB:ut(i)};return a(M,d,a(M,b,a(M,g,n)))}),nf=function(e){var r=e;return r.aE},xH=Y(function(e,r,n,t){if(r.$===1)return D;var o=r.a;if(n.$===1)return D;var c=n.a;if(t.$===1)return D;var i=t.a;return V(v(e,o,c,i))}),tf=function(e){var r=e;return r.lo},q1=s(function(e,r){return a(wa,e,tf(r))}),T6=function(e){var r=function(n){var t=n.a,o=n.b,c=n.c;return x(xH,A(function(i,u,$){return H(i,u,$)}),a(q1,t,e),a(q1,o,e),a(q1,c,e))};return a(Hr,r,nf(e))},jH=A(function(e,r,n){e:for(;;){var t=a(q0,Vr,e),o=t.a,c=t.b;if(ce(Wn(o),Vr)<0)return a(G0,!0,{ao:r,U:n,ae:o});var i=c,u=a(M,hc(o),r),$=n+1;e=i,r=u,n=$;continue e}}),El=function(e){return e.b?v(jH,e,S,0):R0},WO=te,kH=s(function(e,r){var n=Aa(e),t=function(o){var c=o.a,i=o.b,u=o.c;return c>=0&&ce(c,n)<0&&i>=0&&ce(i,n)<0&&u>=0&&ce(u,n)<0};return a(cs,t,r)?{aE:r,lo:e}:{aE:a(gr,t,r),lo:e}}),wH=A(function(e,r,n){return{$:3,a:e,b:r,c:n}}),_i=wH({mi:1,mP:3,nO:4}),Hl=s(function(e,r){var n=ot(r),t=ot(e);return y(H(t.pA,t.pB,t.L),H(n.pA,n.pB,n.L))}),of=Bg,M6=v(of,0,0,0),G1=Br(function(e,r,n,t,o,c){var i=c.a,u=c.b,$=c.c,l=a(rr,a(Hl,e,r),o);if(l.$){var b={ac:M6,tB:ut(r)},g={ac:M6,tB:ut(e)},_=$+1,p=$;return H(a(M,H(n,p,_),a(M,H(n,_,t),i)),a(M,b,a(M,g,u)),$+2)}else{var d=l.a;return H(a(M,H(n,d,t),i),u,$)}}),LH=Ae(function(e,r,n,t,o){e:for(;;)if(n.b){var c=n.a,i=c.a,u=c.b,$=c.c,l=n.b,d=e($),b=e(u),g=e(i),_=t+2,p=t+1,m=t,P=e,C=r,j=l,L=t+3,T=wr(G1,d,g,_,m,r,wr(G1,b,d,p,_,r,wr(G1,g,b,m,p,r,o)));e=P,r=C,n=j,t=L,o=T;continue e}else{var F=o,q=F.a,R=F.b;return y(q,Te(R))}}),AH=Ae(function(e,r,n,t,o){e:for(;;)if(r.b){var c=r.a,i=c.a,u=c.b,$=c.c,l=r.b,d=e($),b=e(u),g=e(i),_=n+2,p=n+1,m=n,P=v(Tr,a(Hl,g,d),_,v(Tr,a(Hl,d,b),p,v(Tr,a(Hl,b,g),m,o))),C=a(M,H(m,p,_),t),j=e,L=l,T=n+3,F=C,q=P;e=j,r=L,n=T,t=F,o=q;continue e}else return H(t,o,n)}),lc=A(function(e,r,n){var t=T6(n),o=v(cn,SH(r),S,t),c=U(AH,r,t,0,S,Ie),i=c.a,u=c.b,$=c.c,l=U(LH,r,u,t,0,H(i,S,$)),d=l.a,b=l.b,g=Ye(b)?o:Q(o,b);return v(PH,e,a(kH,El(g),d),a(_i,g,d))}),D6=function(e){return{aE:a(O,function(r){return H(3*r,3*r+1,3*r+2)},a(_n,0,Ar(e)-1)),lo:El(wn(a(O,function(r){var n=r.a,t=r.b,o=r.c;return f([n,t,o])},e)))}},Il=function(e){switch(e.$){case 0:return Vl;case 1:var t=e.a,r=e.b,n=a(O,Ku,r);return v(lc,t,te,D6(n));case 2:var t=e.a,r=e.b,n=a(O,Ku,r);return v(lc,t,te,D6(n));case 3:var t=e.a,o=e.b;return v(lc,t,te,o);case 4:var t=e.a,o=e.b;return v(lc,t,function(c){return c.tB},o);case 5:var t=e.a,o=e.b;return v(lc,t,function(c){return c.tB},o);case 6:var t=e.a,o=e.b;return v(lc,t,function(c){return c.tB},o);case 7:var t=e.a,o=e.b;return v(lc,t,function(c){return c.tB},o);case 8:return Vl;case 9:return Vl;default:return Vl}},z6=Il(A6),TH=function(e){var r=e;return r.qY},Ca=s(function(e,r){return{$:1,a:e,b:r}}),Fl={src:`
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
    `,attributes:{normal:"ac",position:"tB",tangent:"gR",uv:"g0"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},yi={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bu",constantAmbientOcclusion:"by",constantMaterialColor:"et",enabledLights:"ab",lights12:"gn",lights34:"h3",lights56:"h4",lights78:"h5",materialColorTexture:"fb",normalMapTexture:"bH",normalMapType:"bI",sceneProperties:"m",viewMatrix:"n"}},B6=s(function(e,r){return{$:2,a:e,b:r}}),MH=s(function(e,r){return I1}),Pa=function(e){var r=a6(e);return r===1?Ca:r?B6:MH},or=A(function(e,r,n){return r===1?e?a(M,ic,n):a(M,uc,n):n}),V6=Wg,$a=function(e){var r=V6(e),n=r.u2,t=r.L,o=r.pB,c=r.pA;return x(zt,c*n,o*n,t*n,n)},Ci=x(zt,0,0,0,0),DH=Be(function(e,r,n,t,o,c,i,u){if(e.$){var l=e.a,d=e.b;return v(Pa,l,c,Be(function(b,g,_,p,m,P,C,j){var L=C.a,T=C.b;return U(Fe,v(or,p,u,j),Fl,yi,i,{bu:r,by:n,et:$a(l),ab:T,gn:L.gn,h3:L.h3,h4:L.h4,h5:L.h5,fb:d,j:_,k:g,bH:t,bI:o,l:P,m:b,n:m})}))}else{var $=e.a;return a(Ca,c,Be(function(b,g,_,p,m,P,C,j){var L=C.a,T=C.b;return U(Fe,v(or,p,u,j),Fl,yi,i,{bu:r,by:n,et:Ci,ab:T,gn:L.gn,h3:L.h3,h4:L.h4,h5:L.h5,fb:$,j:_,k:g,bH:t,bI:o,l:P,m:b,n:m})}))}}),Pi={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bu",baseColorTexture:"el",constantAmbientOcclusion:"by",constantBaseColor:"er",constantMetallic:"eu",constantRoughness:"ev",enabledLights:"ab",lights12:"gn",lights34:"h3",lights56:"h4",lights78:"h5",metallicTexture:"fc",normalMapTexture:"bH",normalMapType:"bI",roughnessTexture:"fr",sceneProperties:"m",viewMatrix:"n"}},zH=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){return function(d){return function(b){if(e.$){var _=e.a,p=e.b;return v(Pa,_,l,Be(function(m,P,C,j,L,T,F,q){var R=F.a,K=F.b;return U(Fe,v(or,j,b,q),Fl,Pi,d,{bu:c,el:p,by:i,er:$a(_),eu:o,ev:n,ab:K,gn:R.gn,h3:R.h3,h4:R.h4,h5:R.h5,fc:t,j:C,k:P,bH:u,bI:$,l:T,fr:r,m,n:L})}))}else{var g=e.a;return a(Ca,l,Be(function(m,P,C,j,L,T,F,q){var R=F.a,K=F.b;return U(Fe,v(or,j,b,q),Fl,Pi,d,{bu:c,el:g,by:i,er:Ci,eu:o,ev:n,ab:K,gn:R.gn,h3:R.h3,h4:R.h4,h5:R.h5,fc:t,j:C,k:P,bH:u,bI:$,l:T,fr:r,m,n:L})}))}}}}}}}}}}}}},E6={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"ho"}},H6={src:`
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
    `,attributes:{position:"tB",uv:"g0"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},W1=Y(function(e,r,n,t){return a(Ca,r,Be(function(o,c,i,u,$,l,d,b){return U(Fe,v(or,u,t,b),H6,E6,n,{ho:e,j:i,k:c,l,m:o,n:$})}))}),O1={src:`
        precision lowp float;
        
        uniform lowp vec4 constantColor;
        
        void main () {
            gl_FragColor = constantColor;
        }
    `,attributes:{},uniforms:{constantColor:"es"}},I6={src:`
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
    `,attributes:{position:"tB"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},Et=Y(function(e,r,n,t){return v(Pa,e,r,Be(function(o,c,i,u,$,l,d,b){return U(Fe,v(or,u,t,b),I6,O1,n,{es:$a(e),j:i,k:c,l,m:o,n:$})}))}),F6=s(function(e,r){return{$:4,a:e,b:r}}),BH={src:`
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
    `,attributes:{},uniforms:{constantColor:"es",pointRadius:"is",sceneProperties:"m"}},U6={src:`
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
    `,attributes:{position:"tB"},uniforms:{modelMatrix:"j",modelScale:"k",pointRadius:"is",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},VH=Y(function(e,r,n,t){return a(F6,n,Be(function(o,c,i,u,$,l,d,b){return U(Fe,b,U6,BH,t,{es:$a(e),j:i,k:c,is:r,l,m:o,n:$})}))}),N1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eI",sceneProperties:"m"}},Si=function(e){var r=e;return r},Ul=Ng,Ht=Ae(function(e,r,n,t,o){return a(Ca,n,Be(function(c,i,u,$,l,d,b,g){return U(Fe,v(or,$,o,g),I6,N1,t,{eI:a(Ul,Si(r),e),j:u,k:i,l:d,m:c,n:l})}))}),EH={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eI",pointRadius:"is",sceneProperties:"m"}},HH=Ae(function(e,r,n,t,o){return a(F6,t,Be(function(c,i,u,$,l,d,b,g){return U(Fe,g,U6,EH,o,{eI:a(Ul,Si(r),e),j:u,k:i,is:n,l:d,m:c,n:l})}))}),Z1={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"eg",enabledLights:"ab",lights12:"gn",lights34:"h3",lights56:"h4",lights78:"h5",materialColor:"j4",sceneProperties:"m",viewMatrix:"n"}},R6={src:`
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
    `,attributes:{normal:"ac",position:"tB"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},Rl=Ae(function(e,r,n,t,o){return v(Pa,e,n,Be(function(c,i,u,$,l,d,b,g){var _=b.a,p=b.b;return U(Fe,v(or,$,o,g),R6,Z1,t,{eg:r,ab:p,gn:_.gn,h3:_.h3,h4:_.h4,h5:_.h5,j4:$a(e),j:u,k:i,l:d,m:c,n:l})}))}),J1={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"eg",baseColor:"p$",enabledLights:"ab",lights12:"gn",lights34:"h3",lights56:"h4",lights78:"h5",metallic:"ib",roughness:"iA",sceneProperties:"m",viewMatrix:"n"}},ql=Gt(function(e,r,n,t,o,c,i){return v(Pa,e,o,Be(function(u,$,l,d,b,g,_,p){var m=_.a,P=_.b;return U(Fe,v(or,d,i,p),R6,J1,c,{eg:t,p$:$a(e),ab:P,gn:m.gn,h3:m.h3,h4:m.h4,h5:m.h5,ib:n,j:l,k:$,l:g,iA:r,m:u,n:b})}))}),IH=s(function(e,r){return{$:0,a:e,b:r}}),X1=A(function(e,r,n){return{$:1,a:e,b:r,c:n}}),xi=s(function(e,r){return{$:1,a:e,b:r}}),q6=function(e){return{$:0,a:e}},Y1=function(e){return a(Dr,e,1)},Gl=a(Dr,0,0),Sa=s(function(e,r){if(r.$){var t=r.a.S;return y(t,Gl)}else{var n=r.a;return y(e,Y1(n))}}),vc=s(function(e,r){if(r.$){var n=r.a.rA,t=r.a.S;return y(t,(function(){return n?-1:1})())}else return y(e,0)}),Q1=A(function(e,r,n){var t=H(e,r,n);if(t.a.$===1){var o=t.a.a.S;return v(X1,q6(o),a(Sa,o,r),a(vc,o,n))}else if(t.b.$){var c=t.a.a,o=t.b.a.S;return v(X1,a(xi,c,o),a(Sa,o,r),a(vc,o,n))}else if(t.c.$){var c=t.a.a,o=t.c.a.S;return v(X1,a(xi,c,o),a(Sa,o,r),a(vc,o,n))}else{var c=t.a.a,i=t.b.a,u=t.c;return a(IH,c,i)}}),FH=Y(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),cf=Ae(function(e,r,n,t,o){return{$:1,a:e,b:r,c:n,d:t,e:o}}),UH=Ae(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),K1=Ae(function(e,r,n,t,o){var c=U(UH,e,r,n,t,o);if(c.a.$===1){var i=c.a.a.S;return U(cf,q6(i),a(Sa,i,r),a(Sa,i,n),a(Sa,i,t),a(vc,i,o))}else if(c.b.$){var u=c.a.a,i=c.b.a.S;return U(cf,a(xi,u,i),y(i,Gl),a(Sa,i,n),a(Sa,i,t),a(vc,i,o))}else if(c.c.$){var u=c.a.a,i=c.c.a.S;return U(cf,a(xi,u,i),a(Sa,i,r),y(i,Gl),a(Sa,i,t),a(vc,i,o))}else if(c.d.$){var u=c.a.a,i=c.d.a.S;return U(cf,a(xi,u,i),a(Sa,i,r),a(Sa,i,n),y(i,Gl),a(vc,i,o))}else if(c.e.$){var u=c.a.a,i=c.e.a.S;return U(cf,a(xi,u,i),a(Sa,i,r),a(Sa,i,n),a(Sa,i,t),y(i,1))}else{var u=c.a.a,$=c.b.a,l=c.c.a,d=c.d.a,b=c.e;return x(FH,u,$,l,d)}}),G6={src:`
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
    `,attributes:{},uniforms:{backlight:"jc",colorTexture:"ho",sceneProperties:"m"}},ed=Ae(function(e,r,n,t,o){return a(Ca,n,Be(function(c,i,u,$,l,d,b,g){return U(Fe,v(or,$,o,g),H6,G6,t,{jc:Si(r),ho:e,j:u,k:i,l:d,m:c,n:l})}))}),Wl={src:`
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
    `,attributes:{normal:"ac",position:"tB",uv:"g0"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},RH=Br(function(e,r,n,t,o,c){if(e.$){var u=e.a,$=e.b;return v(Pa,u,t,Be(function(l,d,b,g,_,p,m,P){var C=m.a,j=m.b;return U(Fe,v(or,g,c,P),Wl,yi,o,{bu:r,by:n,et:$a(u),ab:j,gn:C.gn,h3:C.h3,h4:C.h4,h5:C.h5,fb:$,j:b,k:d,bH:$,bI:0,l:p,m:l,n:_})}))}else{var i=e.a;return a(Ca,t,Be(function(l,d,b,g,_,p,m,P){var C=m.a,j=m.b;return U(Fe,v(or,g,c,P),Wl,yi,o,{bu:r,by:n,et:Ci,ab:j,gn:C.gn,h3:C.h3,h4:C.h4,h5:C.h5,fb:i,j:b,k:d,bH:i,bI:0,l:p,m:l,n:_})}))}}),qH=Be(function(e,r,n,t,o,c,i,u){if(e.$){var l=e.a,d=e.b;return v(Pa,l,c,Be(function(b,g,_,p,m,P,C,j){var L=C.a,T=C.b;return U(Fe,v(or,p,u,j),Wl,Pi,i,{bu:d,el:d,by:Y1(1),er:$a(l),eu:o,ev:n,ab:T,gn:L.gn,h3:L.h3,h4:L.h4,h5:L.h5,fc:t,j:_,k:g,bH:d,bI:0,l:P,fr:r,m:b,n:m})}))}else{var $=e.a;return a(Ca,c,Be(function(b,g,_,p,m,P,C,j){var L=C.a,T=C.b;return U(Fe,v(or,p,u,j),Wl,Pi,i,{bu:$,el:$,by:Y1(1),er:Ci,eu:o,ev:n,ab:T,gn:L.gn,h3:L.h3,h4:L.h4,h5:L.h5,fc:t,j:_,k:g,bH:$,bI:0,l:P,fr:r,m:b,n:m})}))}}),GH=function(e){var r=e,n=r,t=n.nL,o=n.nH,c=n.sI,i=n.sx,u=n.sJ,$=n.sy;return{pA:t+.5*(o-t),pB:c+.5*(i-c),L:u+.5*($-u)}},He=function(e){var r=k4(e),n=r.a,t=r.b,o=r.c;return{qm:fc(GH(e)),rQ:n/2,rR:t/2,rS:o/2}},uf=s(function(e,r){switch(e.$){case 0:if(e.b.$){var u=e.a,$=e.b.a.S;switch(r.$){case 0:return de;case 1:return de;case 2:return de;case 3:return de;case 4:return de;case 5:var o=r.a,i=r.c,t=r.d;return x(W1,$,He(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return x(W1,$,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return x(W1,$,He(o),i,t);case 8:return de;case 9:return de;default:return de}}else{var n=e.b.a;switch(r.$){case 0:return de;case 1:var o=r.a,i=r.c,t=r.d;return x(Et,n,He(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return x(Et,n,He(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return x(Et,n,He(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return x(Et,n,He(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return x(Et,n,He(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return x(Et,n,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return x(Et,n,He(o),i,t);case 8:var o=r.a,i=r.c;return x(Et,n,He(o),i,0);case 9:var o=r.a,i=r.c;return x(Et,n,He(o),i,0);default:var o=r.a,c=r.b,i=r.d;return x(VH,n,c,He(o),i)}}case 1:if(e.b.$){var b=e.a,$=e.b.a.S,d=e.c;switch(r.$){case 0:return de;case 1:return de;case 2:return de;case 3:return de;case 4:return de;case 5:var o=r.a,i=r.c,t=r.d;return U(ed,$,d,He(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return U(ed,$,d,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return U(ed,$,d,He(o),i,t);case 8:return de;case 9:return de;default:return de}}else{var l=e.b.a,d=e.c;switch(r.$){case 0:return de;case 1:var o=r.a,i=r.c,t=r.d;return U(Ht,l,d,He(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return U(Ht,l,d,He(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return U(Ht,l,d,He(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return U(Ht,l,d,He(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return U(Ht,l,d,He(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return U(Ht,l,d,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return U(Ht,l,d,He(o),i,t);case 8:var o=r.a,i=r.c;return U(Ht,l,d,He(o),i,0);case 9:var o=r.a,i=r.c;return U(Ht,l,d,He(o),i,0);default:var o=r.a,c=r.b,i=r.d;return U(HH,l,d,c,He(o),i)}}case 2:var g=e.a,_=e.b,Le=e.c,ar=e.d,p=v(Q1,_,Le,ar);if(p.$){var j=p.a,L=p.b,T=L.a,F=L.b,q=p.c,R=q.a,K=q.b;switch(r.$){case 0:return de;case 1:return de;case 2:return de;case 3:return de;case 4:return de;case 5:return de;case 6:var o=r.a,i=r.c,C=r.d;return wr(RH,j,T,F,He(o),i,C);case 7:var o=r.a,i=r.c,C=r.d;return go(DH,j,T,F,R,K,He(o),i,C);case 8:return de;case 9:return de;default:return de}}else{var m=p.a,P=p.b;switch(r.$){case 0:return de;case 1:return de;case 2:var o=r.a,i=r.c,C=r.d;return U(Rl,m,P,He(o),i,C);case 3:return de;case 4:var o=r.a,i=r.c,C=r.d;return U(Rl,m,P,He(o),i,C);case 5:return de;case 6:var o=r.a,i=r.c,C=r.d;return U(Rl,m,P,He(o),i,C);case 7:var o=r.a,i=r.c,C=r.d;return U(Rl,m,P,He(o),i,C);case 8:return de;case 9:return de;default:return de}}default:var J=e.a,ue=e.b,ge=e.c,De=e.d,Le=e.e,ar=e.f,re=U(K1,ue,ge,De,Le,ar);if(re.$){var Cr=re.a,qe=re.b,cr=qe.a,pr=qe.b,Nr=re.c,Ea=Nr.a,Na=Nr.b,Fn=re.d,T=Fn.a,F=Fn.b,sr=re.e,R=sr.a,K=sr.b;switch(r.$){case 0:return de;case 1:return de;case 2:return de;case 3:return de;case 4:return de;case 5:return de;case 6:var o=r.a,i=r.c,t=r.d;return go(qH,Cr,cr,pr,Ea,Na,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return zH(Cr)(cr)(pr)(Ea)(Na)(T)(F)(R)(K)(He(o))(i)(t);case 8:return de;case 9:return de;default:return de}}else{var Ue=re.a,Xe=re.b,Ne=re.c,P=re.d;switch(r.$){case 0:return de;case 1:return de;case 2:var o=r.a,i=r.c,t=r.d;return ra(ql,Ue,Xe,Ne,P,He(o),i,t);case 3:return de;case 4:var o=r.a,i=r.c,t=r.d;return ra(ql,Ue,Xe,Ne,P,He(o),i,t);case 5:return de;case 6:var o=r.a,i=r.c,t=r.d;return ra(ql,Ue,Xe,Ne,P,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return ra(ql,Ue,Xe,Ne,P,He(o),i,t);case 8:return de;case 9:return de;default:return de}}}}),ff=function(e){return{$:3,a:e}},W6=s(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.qm;return{qm:{pA:n*c.pA,pB:t*c.pB,L:o*c.L},rQ:n*r.rQ,rR:t*r.rR,rS:o*r.rS}}),O6=Og,rd=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){var d=e.a,b=e.b,g=e.c,_=V6(t),p=_.u2,m=_.L,P=_.pB,C=_.pA,j=O6({u2:p,pA:C*d,pB:P*b,L:m*g});return go(r,n,j,o,c,i,u,$,l)}}}}}}}}}},ad=s(function(e,r){switch(r.$){case 0:return I1;case 6:var n=r.a,t=r.b;return a($c,n,a(ad,e,t));case 1:var o=r.a,c=r.b;return a(Ca,a(W6,e,o),a(rd,e,c));case 2:var o=r.a,c=r.b;return a(B6,a(W6,e,o),a(rd,e,c));case 4:return r;case 3:var c=r.a;return ff(a(rd,e,c));default:var i=r.a;return q4(a(O,ad(e),i))}}),Ol=s(function(e,r){var n=r;return a(ad,e,n)}),Nl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},N6=7683,Z6=7682,WH=v(p1,{j3:0,tL:0,ls:15},{f8:ya,gS:di,g4:ya,g5:N6},{f8:ya,gS:di,g4:ya,g5:Z6}),OH=v(p1,{j3:0,tL:0,ls:15},{f8:ya,gS:di,g4:ya,g5:Z6},{f8:ya,gS:di,g4:ya,g5:N6}),Zl=s(function(e,r){return e?a(M,OH,r):a(M,WH,r)}),NH={src:`
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
    `,attributes:{normal:"ac",position:"tB"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iK",viewMatrix:"n"}},ZH=function(e){if(e.$){var r=e.c;return V(Be(function(n,t,o,c,i,u,$,l){return U(Fe,a(Zl,c,l),NH,Nl,r,{j:o,k:t,l:u,m:n,iK:$,n:i})}))}else return D},sc=function(e){var r=ZH(e);if(r.$)return de;var n=r.a;return ff(n)},JH=Y(function(e,r,n,t){var o=a(uf,n,A6),c=(function(){var d=y(e,r);return d.a?d.b?mo(f([o,sc(z6)])):o:d.b?sc(z6):de})(),i=TH(t),u=i.a,$=i.b,l=i.c;return a(Ml,vH(t),a(Ol,H(u,$,l),c))}),XH=s(function(e,r){return x(JH,!0,!0,e,r)}),OO=te,nd=s(function(e,r){var n=e,t=r;return ce(t,n)>-1}),td=s(function(e,r){var n=e,t=r;return n+.5*(t-n)}),YH=Dn({pA:-1,pB:0,L:0}),QH=Dn({pA:0,pB:0,L:-1}),KH=Br(function(e,r,n,t,o,c){var i=a(nd,n,c)?X4:QH,u=a(nd,r,o)?ac:t4,$=a(nd,e,t)?Z4:YH,l=H(Va(a(si,e,t)),Va(a(si,r,o)),Va(a(si,n,c))),d=v(Vt,a(td,e,t),a(td,r,o),a(td,n,c)),b=Pl({aZ:d,vb:$,vk:u,vq:i});return{pT:b,qY:l}}),eI=s(function(e,r){return wr(KH,ef(e),rf(e),af(e),ef(r),rf(r),af(r))}),J6=s(function(e,r){var n=r.a,t=r.b,o=r.c,c=H(n/2,t/2,o/2),i=c.a,u=c.b,$=c.c;return a(XH,e,a(eI,v(zr,-i,-u,-$),v(zr,i,u,$)))}),NO=te,rI=A(function(e,r,n){return{aB:a(Dl,e,r),e5:Va(n.e5),tG:Va(n.tG)}}),aI=function(e){var r=e;return r.aB},X6=X8,Y6=J8,Q6=s(function(e,r){var n=Wn(e),t=Vr-Wn(r.ae)-n,o=v(X6,Vr,r.ae,e);return t<0?{ao:a(M,hc(o),r.ao),U:r.U+1,ae:v(Y6,t,n,e)}:t?{ao:r.ao,U:r.U,ae:o}:{ao:a(M,hc(o),r.ao),U:r.U+1,ae:Co}}),K6=s(function(e,r){var n=r.a,t=r.c,o=r.d,c=Wn(e),i=Vr-Wn(o)-c,u=v(X6,Vr,o,e),$=a(Jv,u,r);if(i<0){var l=v(Y6,i,c,e);return a(Jv,l,$)}else return $}),ji=N8,nI=function(e){var r=e.a,n=e.c,t=e.d,o=s(function(c,i){if(c.$)return a(M,c,i);var u=c.a;return v(ji,o,i,u)});return{ao:v(ji,o,S,n),U:r/Vr|0,ae:t}},tI=s(function(e,r){var n=e.d,t=r.a,o=r.c,c=r.d;if(ce(t,Vr*4)<1){var i=s(function(u,$){if(u.$){var d=u.a;return a(K6,d,$)}else{var l=u.a;return v(ji,i,$,l)}});return a(K6,c,v(ji,i,e,o))}else{var i=s(function($,l){if($.$){var b=$.a;return a(Q6,b,l)}else{var d=$.a;return v(ji,i,l,d)}});return a(G0,!0,a(Q6,c,v(ji,i,nI(e),o)))}}),oI=s(function(e,r){var n=tf(e),t=nf(e),o=tf(r),c=Aa(o),i=s(function(l,d){var b=l.a,g=l.b,_=l.c;return a(M,H(b+c,g+c,_+c),d)}),u=nf(r),$=v(me,i,u,t);return{aE:$,lo:a(tI,o,n)}}),Jl={aE:S,lo:R0},e8=function(e){var r=e;return{aE:Te(r.aE),lo:r.lo}},od=function(e){if(e.b){var r=e.a,n=e.b;return e8(v(me,oI,e8(r),n))}else return Jl},cI=s(function(e,r){var n=e.ac,t=e.tB;return a(M,{ac:Bl(n),tB:ut(t)},r)}),r8=Vg,a8=Eg,n8=Hg,iI=Gt(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var u=i.a,$=i.b,l=n8(u.tB),d=a8(u.tB),b=r8(u.tB),g=a(Ge,e,b),_=a(Pe,r,b),p=a(Ge,n,d),m=a(Pe,t,d),P=a(Ge,o,l),C=a(Pe,c,l),j=$;e=g,r=_,n=p,t=m,o=P,c=C,i=j;continue e}else return S6({nH:r,sx:t,sy:c,nL:e,sI:n,sJ:o})}),t8=s(function(e,r){var n=n8(e.tB),t=a8(e.tB),o=r8(e.tB);return ra(iI,o,o,t,t,n,n,r)}),o8=function(e){var r=v(V0,cI,S,tf(e));if(r.b){var n=r.a,t=r.b,o=a(_i,r,nf(e)),c=a(t8,n,t);return x(C6,c,e,o,0)}else return R1},uI=Ae(function(e,r,n,t,o){e:for(;;){var c=t(r/n),i=a(M,c,o);if(oe(r,e))return i;var u=e,$=r-1,l=n,d=t,b=i;e=u,r=$,n=l,t=d,o=b;continue e}}),Xl=s(function(e,r){return e<1?S:U(uI,0,e-1,e,r,S)}),Yl=s(function(e,r){var n=Ar(r);return n>=2?{aE:a(O,function(t){return oe(t,n-1)?H(0,n,1):H(0,1+t,2+t)},a(_n,0,n-1)),lo:El(a(M,e,r))}:Jl}),fI=Br(function(e,r,n,t,o,c){e:for(;;){var i=a(ja,r,t+1),u=r*a(ja,n,o+1),$=r*o,l=u+i,d=$+i,b=u+t,g=$+t,_=H(g,d,l),p=H(g,l,b),m=a(M,_,a(M,p,c));if(t>0){var P=e,C=r,j=n,L=t-1,T=o,F=m;e=P,r=C,n=j,t=L,o=T,c=F;continue e}else if(o>0){var P=e,C=r,j=n,L=e-1,T=o-1,F=m;e=P,r=C,n=j,t=L,o=T,c=F;continue e}else return m}}),c8=Ae(function(e,r,n,t,o){return n<=1||t<=1?Jl:{aE:wr(fI,e,n,t,e-1,r-1,S),lo:a(W0,n*t,function(c){return a(o,a(ja,n,c),c/n|0)})}}),$I=A(function(e,r,n){return U(c8,e,r,e+1,r,n)}),i8=Ae(function(e,r,n,t,o){return a(n,t/e,o/r)}),lI=A(function(e,r,n){return v($I,e,r,v(i8,e,r,n))}),dc=function(e){return e},u8=(function(){var e=v(lI,1,72,s(function(u,$){var l=2*Er*$,d=bn(l),b=dn(l);return{ac:dc({pA:b,pB:-d,L:0}),tB:tt({pA:b,pB:-d,L:u-.5})}})),r=dc({pA:0,pB:0,L:1}),n={ac:r,tB:tt({pA:0,pB:0,L:.5})},t=a(Yl,n,a(Xl,72,function(u){var $=2*Er*u;return{ac:r,tB:tt({pA:dn($),pB:bn($),L:.5})}})),o=dc({pA:0,pB:0,L:-1}),c={ac:o,tB:tt({pA:0,pB:0,L:-.5})},i=a(Yl,c,a(Xl,72,function(u){var $=2*Er*u;return{ac:o,tB:tt({pA:dn($),pB:-bn($),L:-.5})}}));return zl(o8(od(f([t,i,e]))))})(),f8=Il(u8),$8=function(e){var r=d6(e),n=k1(r),t=n.a,o=n.b;return Pl({aZ:b6(e),vb:t,vk:o,vq:r})},vI=function(e){var r=e;return r.e5},sI=function(e){var r=e;return r.tG},dI=Y(function(e,r,n,t){var o=$8(aI(t)),c=a(uf,n,u8),i=(function(){var b=y(e,r);return b.a?b.b?mo(f([c,sc(f8)])):c:b.b?sc(f8):de})(),u=sI(t),$=u,l=vI(t),d=l;return a(Ml,o,a(Ol,H($,$,d),i))}),bI=s(function(e,r){return x(dI,!0,!0,e,r)}),cd=A(function(e,r,n){return a(bI,e,v(rI,ct,ac,{e5:it(n),tG:it(r)}))}),id=function(e){return mo(e)},ki=id,ud=function(e){var r=e.a,n=e.b,t=e.c;return _6(v(m6,r,n,t))},fd=function(e){return ud(H(0,e,0))},pI=function(e){var r=e;return r.qm},mI=function(e){var r=e;return r.tG},hI=function(e){var r=e;return r},gI=s(function(e,r){var n=e.uz,t=e.gR,o=e.g0,c=e.ac,i=e.tB,u=hI(t),$=n?-1:1,l=o,d=l.a,b=l.b,g={ac:Bl(c),tB:ut(i),gR:O6({u2:$,pA:u.pA,pB:u.pB,L:u.L}),g0:a(Dr,d,b)};return a(M,g,r)}),_I=function(e){var r=v(V0,gI,S,tf(e));if(r.b){var n=r.a,t=r.b,o=a(_i,r,nf(e)),c=a(t8,n,t);return x(P6,c,e,o,0)}else return R1},yI=A(function(e,r,n){return U(c8,e,r,e+1,r+1,n)}),CI=A(function(e,r,n){return v(yI,e,r,v(i8,e,r,n))}),PI=zl(_I(v(CI,72,72,s(function(e,r){var n=2*Er*e,t=bn(n),o=-Er/2+Er*r,c=bn(o),i=dn(n),u=dn(o),$={pA:u*i,pB:u*t,L:c};return{ac:dc($),tB:tt($),gR:dc({pA:-t,pB:i,L:0}),uz:!0,g0:y(e,r)}})))),Ql=72,Kl=2*Ql,SI=s(function(e,r){e:for(;;){var n=Kl+1,t=a(ja,Kl,2*e+3),o=a(ja,Kl,2*e+2),c=2*e+1,i=2*e,u=Kl,$=a(M,H(u,i,o),a(M,H(i,t,o),a(M,H(i,c,t),a(M,H(c,n,t),r))));if(e){var l=e-1,d=$;e=l,r=d;continue e}else return $}}),xI=A(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),jI=s(function(e,r){e:for(;;){var n=v(xI,0,2*Er,e/Ql),t={g9:n,ih:0,iv:1},o={g9:n,ih:1,iv:1},c=a(M,t,a(M,o,r));if(e){var i=e-1,u=c;e=i,r=u;continue e}else return c}}),kI=(function(){var e=a(jI,Ql-1,f([{g9:0,ih:0,iv:0},{g9:0,ih:1,iv:0}])),r=a(SI,Ql-1,S);return a(_i,e,r)})(),wI={src:`
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
    `,attributes:{angle:"g9",offsetScale:"ih",radiusScale:"iv"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iK",viewMatrix:"n"}},l8=function(e){return ff(Be(function(r,n,t,o,c,i,u,$){return U(Fe,a(Zl,!0,$),wI,Nl,kI,{j:t,k:n,l:i,m:r,iK:u,n:c})}))},LI=Y(function(e,r,n,t){var o=a(uf,n,PI),c=(function(){var $=y(e,r);return $.a?$.b?mo(f([o,l8(t)])):o:$.b?l8(t):de})(),i=mI(t),u=i;return a(g6,a(wl,ct,pI(t)),a(Ol,H(u,u,u),c))}),AI=s(function(e,r){return x(LI,!0,!0,e,r)}),$d=A(function(e,r,n){return{$:1,a:e,b:r,c:n}}),v8=Y(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),ld=Br(function(e,r,n,t,o,c){return{$:3,a:e,b:r,c:n,d:t,e:o,f:c}}),vd=s(function(e,r){return{$:0,a:e,b:r}}),TI=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(vd,n,t);case 1:var n=e.a,t=e.b,r=e.c;return v($d,n,t,r);case 2:var n=e.a,t=e.b,i=e.c,u=e.d;return x(v8,n,t,i,u);default:var n=e.a,t=e.b,o=e.c,c=e.d,i=e.e,u=e.f;return wr(ld,n,t,o,c,i,u)}},MI=TI,DI=s(function(e,r){return a(AI,MI(e),r)}),ZO=te,zI=s(function(e,r){return{qm:r,tG:Va(e)}}),sd=s(function(e,r){return a(DI,e,a(zI,it(r),ct))}),It=function(e){return{$:0,a:e}},JO=0,BI=s(function(e,r){var n=a(Wu,M1(1),e);return v($d,0,It(n),r)}),dd=Y(function(e,r,n,t){var o=H(e,r,n),c=o.a,i=o.b,u=o.c,$=u<=.5?u*(i+1):u+i-u*i,l=u*2-$,d=function(p){var m=p<0?p+1:p>1?p-1:p;return m*6<1?l+($-l)*m*6:m*2<1?$:m*3<2?l+($-l)*(2/3-m)*6:l},b=d(c-1/3),g=d(c),_=d(c+1/3);return x(o4,_,g,b,t)}),e0=function(e){return x(dd,e.aT,e.a1,e.C,e.aQ)},VI=s(function(e,r){return a(BI,n6(e0(r)),T1(e))}),bd={$:0},EI=function(e){var r=e.ib,n=e.iA,t=e.p$;return wr(ld,0,It(Qu(t)),It(v(dr,0,1,n)),It(v(dr,0,1,r)),It(1),bd)},HI=s(function(e,r){var n=e.ib,t=e.iA;return EI({p$:e0(r),ib:n,iA:t})}),s8=function(e){var r=r6(e),n=r.aQ,t=r.p3,o=r.rO,c=r.tJ;return x(zt,c,o,t,n)},II=function(e){return a(vd,0,It(s8(e)))},FI=function(e){return II(e0(e))},En=function(e){var r=e.b2;switch(r.$){case 0:return FI(e.fX);case 1:var n=r.a.ib,t=r.a.iA;return a(HI,{ib:n,iA:t},e.fX);default:var o=r.a.kb;return a(VI,o,e.fX)}},bc=function(e){return It(e)},$f=s(function(e,r){if(r.$){var t=r.a;return W2(t)}else{var n=r.a;return It(e(n))}}),d8=function(e){return a(vd,0,a($f,s8,e))},UI=s(function(e,r){return v($d,0,a($f,Qu,e),r)}),RI=function(e){var r=e.ib,n=e.iA,t=e.p$;return wr(ld,0,a($f,Qu,t),a($f,a(dr,0,1),n),a($f,a(dr,0,1),r),bc(1),bd)},pd=function(e){return x(dd,e.aT,e.a1,e.C,e.aQ)},wi=s(function(e,r){var n=(function(){var u=r.b3;if(u.$)return bc(pd(r.fX));if(u.a.$)return a(l$,"[textured-surface] FromAtlas textures in 3D Surface are deferred. Rendering as fallback colour.",bc(pd(r.fX)));var $=u.a.a.bE;return a(fe,bc(pd(r.fX)),a(rr,$,e.nD))})(),t=r.b2;switch(t.$){case 0:return d8(n);case 1:var o=t.a.ib,c=t.a.iA;return RI({p$:n,ib:bc(o),iA:bc(c)});default:var i=t.a.kb;return a(UI,n,T1(i))}}),qI=A(function(e,r,n){var t=E(e,{b3:D}),o=a(wi,{nD:Ie},t),c=En(t),i=a(Pe,0,n-2*r),u=i/2;return ki(f([v(cd,c,r,i),a(fd,u,a(sd,o,r)),a(fd,-u,a(sd,o,r))]))}),GI=function(e){var r=e;return r.aB},b8=(function(){var e={ac:j1,tB:tt({pA:0,pB:0,L:1})},r=dc({pA:0,pB:0,L:-1}),n=.5*Ga(2),t=a(Yl,e,a(Xl,72,function(i){var u=2*Er*i,$=bn(u),l=dn(u);return{ac:dc({pA:l*n,pB:$*n,L:n}),tB:tt({pA:l,pB:$,L:0})}})),o={ac:r,tB:ct},c=a(Yl,o,a(Xl,72,function(i){var u=2*Er*i,$=bn(u),l=dn(u);return{ac:r,tB:tt({pA:l,pB:-$,L:0})}}));return zl(o8(od(f([c,t]))))})(),p8=Il(b8),WI=function(e){var r=e;return r.e5},OI=function(e){var r=e;return r.tG},NI=Y(function(e,r,n,t){var o=$8(GI(t)),c=a(uf,n,b8),i=(function(){var b=y(e,r);return b.a?b.b?mo(f([c,sc(p8)])):c:b.b?sc(p8):de})(),u=OI(t),$=u,l=WI(t),d=l;return a(Ml,o,a(Ol,H($,$,d),i))}),ZI=s(function(e,r){return x(NI,!0,!0,e,r)}),XO=te,JI=A(function(e,r,n){return{aB:a(Dl,e,r),e5:Va(n.e5),tG:Va(n.tG)}}),XI=A(function(e,r,n){var t=n/2;return a(ZI,e,v(JI,v(zr,0,-t,0),ac,{e5:it(n),tG:it(r)}))}),md=A(function(e,r,n){return id(f([a(uf,e,r),sc(n)]))}),YI=function(e){return e},QI=function(e){return L6(a(O,YI,T6(e)))},KI=s(function(e,r){if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a,c=t.b;return{aE:a(O,function(i){return H(0,1+i,2+i)},a(_n,0,Ar(c))),lo:El(a(M,e,r))}}else return Jl}),eF=function(e){return v(zr,e.pA,e.pB,e.L)},rF=function(e){var r=a(O,eF,e);if(r.b&&r.b.b&&r.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,u=c.b;return V(a(KI,n,a(M,o,a(M,i,u))))}else return D},aF=function(e){var r=a(Hr,rF,e);if(r.b){var n=r,t=QI(od(n));return V({sB:t,kU:Il(t)})}else return D},lf=s(function(e,r){var n=aF(f([r]));if(n.$===1)return ki(S);var t=n.a.kU,o=n.a.sB;return v(md,e,o,t)}),nF=s(function(e,r){return a(J6,e,H(r,r,r))}),tF=A(function(e,r,n){var t=2*Er/e,o=a(O,function(c){return a(v6,t*c,v(Yr,0,n,0))},a(_n,0,e-1));return a(lf,r,o)}),oF=Gt(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var u=i.a,$=i.b,l=u,d=l.L,b=l.pB,g=l.pA,_=a(Ge,g,e),p=a(Pe,g,r),m=a(Ge,b,n),P=a(Pe,b,t),C=a(Ge,d,o),j=a(Pe,d,c),L=$;e=_,r=p,n=m,t=P,o=C,c=j,i=L;continue e}else return{nH:r,sx:t,sy:c,nL:e,sI:n,sJ:o}}),cF=s(function(e,r){var n=e,t=n.L,o=n.pB,c=n.pA;return ra(oF,c,c,o,o,t,t,r)}),m8={src:`
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
    `,attributes:{quadVertex:"iu"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b$",sceneProperties:"m",viewMatrix:"n"}},Hn=Y(function(e,r,n,t){var o=ot(t),c=ot(n),i=ot(r),u=ot(e);return Bn({nm:u.pA,nn:i.pA,no:c.pA,np:o.pA,nq:u.pB,nr:i.pB,ns:c.pB,nt:o.pB,nu:u.L,nv:i.L,nw:c.L,nx:o.L,ny:0,nz:0,nA:0,nB:0})}),iF=T4({mi:1,mP:0,nO:6}),ft=iF(f([{iu:v(of,0,0,0)},{iu:v(of,1,0,1)},{iu:v(of,1,1,2)},{iu:v(of,0,1,3)}])),h8={src:`
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
    `,attributes:{quadVertex:"iu"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b$",sceneProperties:"m",viewMatrix:"n"}},r0={src:`
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
    `,attributes:{quadVertex:"iu"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b$",sceneProperties:"m",viewMatrix:"n"}},g8={src:`
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
    `,attributes:{quadVertex:"iu"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b$",sceneProperties:"m",viewMatrix:"n"}},uF=Ae(function(e,r,n,t,o){var c=a(cF,r,f([n,t,o])),i=He(c);switch(e.$){case 0:if(e.b.$){var $=e.a,l=e.b.a.S;return a(Ca,i,Be(function(Ut,Un,Za,Ja,Kr,ea,la,Zr){return U(Fe,v(or,Ja,0,Zr),g8,E6,ft,{ho:l,j:Za,k:Un,l:ea,b$:x(Hn,r,n,t,o),m:Ut,n:Kr})}))}else{var u=e.b.a;return v(Pa,u,i,Be(function(Ut,Un,Za,Ja,Kr,ea,la,Zr){return U(Fe,v(or,Ja,0,Zr),m8,O1,ft,{es:$a(u),j:Za,k:Un,l:ea,b$:x(Hn,r,n,t,o),m:Ut,n:Kr})}))}case 1:if(e.b.$){var g=e.a,l=e.b.a.S,b=e.c;return a(Ca,i,Be(function(Za,Ja,Kr,ea,la,Zr,va,sa){return U(Fe,v(or,ea,0,sa),g8,G6,ft,{jc:Si(b),ho:l,j:Kr,k:Ja,l:Zr,b$:x(Hn,r,n,t,o),m:Za,n:la})}))}else{var d=e.b.a,b=e.c;return a(Ca,i,Be(function(Ut,Un,Za,Ja,Kr,ea,la,Zr){return U(Fe,v(or,Ja,0,Zr),m8,N1,ft,{jc:b,eI:a(Ul,Si(b),d),j:Za,k:Un,l:ea,b$:x(Hn,r,n,t,o),m:Ut,n:Kr})}))}case 2:var _=e.a,p=e.b,Ne=e.c,Cr=e.d,m=v(Q1,p,Ne,Cr);if(m.$)if(m.a.$){var J=m.a,ue=J.a,ge=J.b,De=m.b,T=De.a,F=De.b,Le=m.c,R=Le.a,K=Le.b;return v(Pa,ue,i,Be(function(Kr,ea,la,Zr,va,sa,Rt,sf){var Rn=Rt.a,df=Rt.b;return U(Fe,v(or,Zr,0,sf),r0,yi,ft,{bu:T,by:F,et:$a(ue),ab:df,gn:Rn.gn,h3:Rn.h3,h4:Rn.h4,h5:Rn.h5,fb:ge,j:la,k:ea,bH:R,bI:K,l:sa,b$:x(Hn,r,n,t,o),m:Kr,n:va})}))}else{var j=m.a.a,L=m.b,T=L.a,F=L.b,q=m.c,R=q.a,K=q.b;return a(Ca,i,Be(function(Ut,Un,Za,Ja,Kr,ea,la,Zr){var va=la.a,sa=la.b;return U(Fe,v(or,Ja,0,Zr),r0,yi,ft,{bu:T,by:F,et:Ci,ab:sa,gn:va.gn,h3:va.h3,h4:va.h4,h5:va.h5,fb:j,j:Za,k:Un,bH:R,bI:K,l:ea,b$:x(Hn,r,n,t,o),m:Ut,n:Kr})}))}else{var P=m.a,C=m.b;return v(Pa,P,i,Be(function(Ut,Un,Za,Ja,Kr,ea,la,Zr){var va=la.a,sa=la.b;return U(Fe,v(or,Ja,0,Zr),h8,Z1,ft,{eg:C,ab:sa,gn:va.gn,h3:va.h3,h4:va.h4,h5:va.h5,j4:$a(P),j:Za,k:Un,l:ea,b$:x(Hn,r,n,t,o),m:Ut,n:Kr})}))}default:var ar=e.a,re=e.b,Ue=e.c,Xe=e.d,Ne=e.e,Cr=e.f,qe=U(K1,re,Ue,Xe,Ne,Cr);if(qe.$)if(qe.a.$){var Ai=qe.a,D8=Ai.a,ge=Ai.b,z8=qe.b,Fn=z8.a,sr=z8.b,B8=qe.c,Ft=B8.a,lt=B8.b,V8=qe.d,T=V8.a,F=V8.b,E8=qe.e,R=E8.a,K=E8.b;return v(Pa,D8,i,Be(function(sa,Rt,sf,Rn,df,jU,H8,kU){var o0=H8.a,wU=H8.b;return U(Fe,v(or,Rn,0,kU),r0,Pi,ft,{bu:T,el:ge,by:F,er:$a(D8),eu:lt,ev:sr,ab:wU,gn:o0.gn,h3:o0.h3,h4:o0.h4,h5:o0.h5,fc:Ft,j:sf,k:Rt,bH:R,bI:K,l:jU,b$:x(Hn,r,n,t,o),fr:Fn,m:sa,n:df})}))}else{var Ea=qe.a.a,Na=qe.b,Fn=Na.a,sr=Na.b,$t=qe.c,Ft=$t.a,lt=$t.b,Li=qe.d,T=Li.a,F=Li.b,t0=qe.e,R=t0.a,K=t0.b;return a(Ca,i,Be(function(Kr,ea,la,Zr,va,sa,Rt,sf){var Rn=Rt.a,df=Rt.b;return U(Fe,v(or,Zr,0,sf),r0,Pi,ft,{bu:T,el:Ea,by:F,er:Ci,eu:lt,ev:sr,ab:df,gn:Rn.gn,h3:Rn.h3,h4:Rn.h4,h5:Rn.h5,fc:Ft,j:la,k:ea,bH:R,bI:K,l:sa,b$:x(Hn,r,n,t,o),fr:Fn,m:Kr,n:va})}))}else{var cr=qe.a,pr=qe.b,Nr=qe.c,C=qe.d;return v(Pa,cr,i,Be(function(Un,Za,Ja,Kr,ea,la,Zr,va){var sa=Zr.a,Rt=Zr.b;return U(Fe,v(or,Kr,0,va),h8,J1,ft,{eg:C,p$:$a(cr),ab:Rt,gn:sa.gn,h3:sa.h3,h4:sa.h4,h5:sa.h5,ib:Nr,j:Ja,k:Za,l:la,b$:x(Hn,r,n,t,o),iA:pr,m:Un,n:ea})}))}}}),fF=(function(){var e=f([{dn:a(Dr,0,1)},{dn:a(Dr,1,1)},{dn:a(Dr,2,1)},{dn:a(Dr,3,1)},{dn:a(Dr,0,-1)},{dn:a(Dr,1,-1)},{dn:a(Dr,2,-1)},{dn:a(Dr,3,-1)}]),r=f([H(0,1,2),H(0,2,3),H(4,6,5),H(4,7,6),H(4,5,1),H(1,0,4),H(5,6,2),H(2,1,5),H(6,7,3),H(3,2,6),H(7,4,0),H(0,3,7)]);return a(_i,e,r)})(),$F={src:`
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
    `,attributes:{quadShadowVertex:"dn"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b$",sceneProperties:"m",shadowLight:"iK",viewMatrix:"n"}},_8=Y(function(e,r,n,t){return ff(Be(function(o,c,i,u,$,l,d,b){return U(Fe,a(Zl,u,b),$F,Nl,fF,{j:i,k:c,l,b$:x(Hn,e,r,n,t),m:o,iK:d,n:$})}))}),lF=Gt(function(e,r,n,t,o,c,i){var u=U(uF,n,t,o,c,i),$=y(e,r);return $.a?$.b?mo(f([u,x(_8,t,o,c,i)])):u:$.b?x(_8,t,o,c,i):de}),a0=Ae(function(e,r,n,t,o){return ra(lF,!0,!1,e,r,n,t,o)}),vF=A(function(e,r,n){var t=r/2,o=n/2,c=s(function(i,u){return v(zr,i,u,0)});return U(a0,d8(e),a(c,-t,-o),a(c,t,-o),a(c,t,o),a(c,-t,o))}),hd=function(e){return{$:1,a:e}},sF=function(e){return x(v8,0,It(Qu(e)),bc(1),bd)},dF=function(e){return sF(e0(e))},y8=function(e){return ud(H(e,0,0))},bF=function(e){return ud(H(0,0,e))},pF=a(Dl,ct,J4),mF=s(function(e,r){return v(F1,pF,Ll(e),r)}),C8=s(function(e,r){return v(F1,p6,Ll(e),r)}),hF=S9,gF=function(e){var r=e.a,n=e.b,t=e.c,o=$4(H(r,n,t));return{pV:a(ml,n,r),r5:hF(t/o),tG:o}},P8=A(function(e,r,n){var t=n.a,o=n.b,c=H(o.pA-t.pA,o.pB-t.pB,o.L-t.L),i=c.a,u=c.b,$=c.c,l=gF(H(i,u,$)),d=l.r5,b=l.pV,g=l.tG;return a(bF,t.L,a(fd,t.pB,a(y8,t.pA,a(C8,b,a(mF,d-Ri(90),a(y8,g/2,a(C8,Ri(90),v(cd,e,r/2,g))))))))}),_F=A(function(e,r,n){var t=s(function(o,c){e:for(;;)switch(o.$){case 0:var i=o.a;return E(c,{fZ:V(i)});case 1:var i=o.a,u=c.fZ;if(u.$===1)return E(c,{fZ:V(i)});var $=u.a;return{g7:a(M,v(P8,dF(e),r,y($,i)),c.g7),fZ:V(i)};case 2:var l=o.a.uK,b=hd(l),g=c;o=b,c=g;continue e;case 3:var d=o.a.ri,b=hd(d),g=c;o=b,c=g;continue e;default:var d=o.a.ri,b=hd(d),g=c;o=b,c=g;continue e}});return Te(v(me,t,{g7:S,fZ:D},n).g7)}),yF=A(function(e,r,n){if(r.b){var t=r.a,o=r.b;return ki(v(F0,s(function(c,i){return a(lf,e,f([c,i,a(tc,H(0,0,-n),i),a(tc,H(0,0,-n),c)]))}),r,Q(o,f([t]))))}else return ki(S)}),CF=A(function(e,r,n){var t=r/2,o=n/2;return U(a0,e,v(zr,-t,-o,0),v(zr,t,-o,0),v(zr,t,o,0),v(zr,-t,o,0))}),PF=function(e){var r=e;return!r.$&&r.a.$===1},SF=s(function(e,r){var n=r;if(n.$)return id(S);if(n.a.$){var t=n.a.a.kU,o=n.a.a.sB;return v(md,e.uC,o,t)}else{var t=n.a.a.kU,o=n.a.a.sB;return v(md,e.uQ,o,t)}}),S8={src:`
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
    `,attributes:{triangleVertex:"li"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",triangleVertexPositions:"gY",viewMatrix:"n"}},x8={src:`
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
    `,attributes:{triangleVertex:"li"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",triangleVertexPositions:"gY",viewMatrix:"n"}},vf=function(e){var r=Ku(e),n=r.a,t=r.b,o=r.c,c=ot(n),i=ot(t),u=ot(o);return Bn({nm:c.pA,nn:i.pA,no:u.pA,np:0,nq:c.pB,nr:i.pB,ns:u.pB,nt:0,nu:c.L,nv:i.L,nw:u.L,nx:0,ny:0,nz:0,nA:0,nB:0})},n0=w6(f([H({li:0},{li:1},{li:2})])),xF=s(function(e,r){var n=x6(r),t=He(n);switch(e.$){case 0:if(e.b.$){var c=e.a,i=e.b.a.S;return de}else{var o=e.b.a;return v(Pa,o,t,Be(function(J,ue,ge,De,Le,ar,re,Ue){return U(Fe,v(or,De,0,Ue),S8,O1,n0,{es:$a(o),j:ge,k:ue,l:ar,m:J,gY:vf(r),n:Le})}))}case 1:if(e.b.$){var l=e.a;return de}else{var u=e.b.a,$=e.c;return a(Ca,t,Be(function(J,ue,ge,De,Le,ar,re,Ue){return U(Fe,v(or,De,0,Ue),S8,N1,n0,{eI:a(Ul,Si($),u),j:ge,k:ue,l:ar,m:J,gY:vf(r),n:Le})}))}case 2:var d=e.a,b=e.b,L=e.c,T=e.d,g=v(Q1,b,L,T);if(g.$)return de;var _=g.a,p=g.b;return v(Pa,_,t,Be(function(J,ue,ge,De,Le,ar,re,Ue){var Xe=re.a,Ne=re.b;return U(Fe,v(or,De,0,Ue),x8,Z1,n0,{eg:p,ab:Ne,gn:Xe.gn,h3:Xe.h3,h4:Xe.h4,h5:Xe.h5,j4:$a(_),j:ge,k:ue,l:ar,m:J,gY:vf(r),n:Le})}));default:var m=e.a,P=e.b,C=e.c,j=e.d,L=e.e,T=e.f,F=U(K1,P,C,j,L,T);if(F.$)return de;var q=F.a,R=F.b,K=F.c,p=F.d;return v(Pa,q,t,Be(function(ue,ge,De,Le,ar,re,Ue,Xe){var Ne=Ue.a,Cr=Ue.b;return U(Fe,v(or,Le,0,Xe),x8,J1,n0,{eg:p,p$:$a(q),ab:Cr,gn:Ne.gn,h3:Ne.h3,h4:Ne.h4,h5:Ne.h5,ib:K,j:De,k:ge,l:re,iA:R,m:ue,gY:vf(r),n:ar})}))}}),jF=(function(){var e=f([{fC:a(Dr,0,1)},{fC:a(Dr,1,1)},{fC:a(Dr,2,1)},{fC:a(Dr,0,-1)},{fC:a(Dr,1,-1)},{fC:a(Dr,2,-1)}]),r=f([H(0,1,2),H(3,5,4),H(3,4,1),H(3,1,0),H(4,5,2),H(4,2,1),H(5,3,0),H(5,0,2)]);return a(_i,e,r)})(),kF={src:`
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
    `,attributes:{triangleShadowVertex:"fC"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iK",triangleVertexPositions:"gY",viewMatrix:"n"}},j8=function(e){return ff(Be(function(r,n,t,o,c,i,u,$){return U(Fe,a(Zl,o,$),kF,Nl,jF,{j:t,k:n,l:i,m:r,iK:u,gY:vf(e),n:c})}))},wF=Y(function(e,r,n,t){var o=a(xF,n,t),c=y(e,r);return c.a?c.b?mo(f([o,j8(t)])):o:c.b?j8(t):de}),LF=s(function(e,r){return x(wF,!0,!0,e,r)}),AF=s(function(e,r){var n=r.a,t=r.b,o=r.c;return a(LF,e,v(Oa,v(zr,n.pA,n.pB,n.L),v(zr,t.pA,t.pB,t.L),v(zr,o.pA,o.pB,o.L)))}),In=A(function(e,r,n){var t=r.b3;return t.$?n:a(l$,"[textured-surface] Textured Surface on "+(e+" is deferred. Rendering as fallback colour."),n)}),TF=s(function(e,r){e:for(;;){var n=r.a,t=r.b,o=function(sr){return V(a(U1,n,sr))};switch(t.$){case 0:var p=t.a.jM,ge=t.a.lq,re=t.a.D;return o(v(CF,a(wi,e,re),ge,p));case 1:var ue=t.a.tG,re=t.a.D;return o(v(In,"Disc",re,v(tF,48,En(re),ue)));case 2:var J=t.a.e5,ue=t.a.tG,re=t.a.D;return o(v(In,"Capsule",re,v(qI,re,ue,J)));case 3:var m=t.a.lo,re=t.a.D;if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var c=m.a,i=m.b,u=i.a,$=i.b,l=$.a,d=$.b,b=d.a;return o(U(a0,a(wi,e,re),v(zr,c.pA,c.pB,c.L),v(zr,u.pA,u.pB,u.L),v(zr,l.pA,l.pB,l.L),v(zr,b.pA,b.pB,b.L)))}else return o(v(In,"polygon ("+(er(Ar(m))+"-vertex)"),re,a(lf,En(re),m)));case 10:var g=t.a.X,re=t.a.D;return o(v(In,"Cube",re,a(nF,En(re),g)));case 11:var ue=t.a.tG,re=t.a.D;return o(a(sd,a(wi,e,re),ue));case 12:var J=t.a.e5,ue=t.a.tG,re=t.a.D;return o(v(In,"Cylinder",re,v(cd,En(re),ue,J)));case 13:var _=t.a.qY,re=t.a.D;return o(v(In,"Block",re,a(J6,En(re),_)));case 14:var m=t.a.lo,re=t.a.D;return o(v(In,"Triangle",re,a(AF,En(re),m)));case 15:var p=t.a.jM,m=t.a.lo,re=t.a.D,P=a(wi,e,re),C=E(re,{b3:D}),j=p/2,L=a(O,function(sr){return E(sr,{L:sr.L+j})},m),T=En(C),F=(function(){if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var sr=m.a,$t=m.b,Ft=$t.a,lt=$t.b,Li=lt.a,t0=lt.b,Ai=t0.a;return U(a0,P,v(zr,sr.pA,sr.pB,sr.L+j),v(zr,Ft.pA,Ft.pB,Ft.L+j),v(zr,Li.pA,Li.pB,Li.L+j),v(zr,Ai.pA,Ai.pB,Ai.L+j))}else return v(In,"polygon-with-walls top ("+(er(Ar(m))+"-vertex)"),re,a(lf,T,L))})(),q=v(yF,T,L,p),R=a(O,function(sr){return E(sr,{L:sr.L-j})},m),K=a(lf,T,Te(R));return o(ki(f([F,K,q])));case 16:var J=t.a.e5,ue=t.a.tG,re=t.a.D;return o(v(In,"Cone",re,v(XI,En(re),ue,J)));case 17:var ge=t.a.lq,De=t.a.ri,Le=t.a.dq,re=t.a.D;return o(v(In,"Line",re,v(P8,En(re),ge,y(Le,De))));case 18:var ar=t.a.sC,re=t.a.D;return a(he,function(sr){var $t=a(SF,{uC:a(wi,e,re),uQ:En(re)},sr);return a(U1,n,PF(sr)?$t:v(In,"welded mesh",re,$t))},a(rr,ar,e.dU));case 4:var Ue=t.a.oG,Xe=t.a.h6,Ne=t.a.hK,Cr=t.a.iN;if(Cr.$)return a(l$,"[LeafPath] fill-only LeafPath in 3D is deferred; no stroke colour set",D);var qe=Cr.a;return o(ki(v(_F,qe,Xe,Ue)));case 5:var cr=t.a,pr=cr.tL;if(pr.$)return D;var Nr=pr.a.bE;return a(he,function(sr){return a(U1,n,v(vF,sr,cr.lq,cr.jM))},a(rr,Nr,e.nD));case 6:var Ea=t.a.sa,Na=e,Fn=y(n,Ea);e=Na,r=Fn;continue e;case 7:return D;case 8:return D;case 9:return D;case 19:return D;case 20:return D;default:return D}}}),MF=s(function(e,r){return a(Hr,TF(e),KE(r))}),DF=function(e){return x(dd,e.aT,e.a1,e.C,e.aQ)},zF=s(function(e,r){return a(CE,{lI:DF(e.lI),qi:e.qi,qv:e.qv,eB:e.$7.eB,mp:e.mp,ne:e.ne,$7:e.$7,pc:e.pc,px:e.px},a(MF,{nD:e.nD,dU:Ie},r))}),k8=function(e){return $i(H(0,e,0))},BF=function(e){return{$:2,a:e}},VF=A(function(e,r,n){return BF({jM:n,D:e,lq:r})}),EF=s(function(e,r){return v(VF,e,r,r)}),HF=function(e){return a(k8,-.001,a(s1,-Er/2,a(EF,Ba(e),20)))},IF=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,c=a(Ge,r,a(Ge,n,t)),i=a(Pe,r,a(Pe,n,t)),u=(c+i)/2,$=oe(c,i)?0:u<.5?(i-c)/(i+c):(i-c)/(2-i-c),l=oe(i,r)?(n-t)/(i-c):oe(i,n)?2+(t-r)/(i-c):4+(r-n)/(i-c),d=l*(1/6),b=mv(d)?0:d<0?d+1:d;return{aQ:o,aT:b,C:u,a1:$}},FF=function(e){return IF(e)},UF=function(e){return{$:16,a:e}},RF=A(function(e,r,n){return UF({jM:n,D:e,lo:r})}),qF=function(e){return{$:5,a:e}},GF=s(function(e,r){return qF({D:e,lo:r})}),WF=Y(function(e,r,n,t){var o=a(O,function($){return{pA:$.pA,pB:$.pB,L:0}},n.tA),c=v(RF,r.D,o,r.cZ),i=(function(){var $=r.lG;if($.$===1)return S;var l=$.a,d=1e-4,b=a(O,function(g){return{pA:g.pA,pB:g.pB,L:-r.cZ/2-d}},Te(n.tA));return f([a(GF,l,b)])})(),u=a(M,c,i);return a($1,l1(t),Qr(u))}),OF=A(function(e,r,n){return a(O,function(t){var o=t.b,c=t.c;return x(WF,e,r,o,c)},n.cq)}),NF=s(function(e,r){return a(k8,e/2,a(s1,-Er/2,r))}),ZF=function(e){var r=e.hz*bn(e.eG),n=e.hz*dn(e.eG),t=n*bn(e.pV),o=n*dn(e.pV);return{I:v(Yr,e.hN.pA+t,e.hN.pB+r,e.hN.L+o),hN:e.hN,tF:e.tF,fF:v(Yr,0,1,0)}},JF=function(e){return{$:0,a:e}},XF=x9,YF=JF({eR:2*XF(.5)}),w8=function(e){return ZF({pV:e.co.pV,hz:e.co.hz,eG:e.co.eG,hN:e.co.hN,tF:YF})},QF=s(function(e,r){var n=w8(r),t=a(O,function(c){return v(Rz,e.ji,n,{pQ:a(u1,e.kx.cZ,c.pQ),jM:c.jM,bE:c.bE})},e.sl),o=Qr(a(M,HF(e.qV),Q(a(O,NF(e.kx.cZ),Q(v(OF,e.ji,e.kx,e.dx),e.ku)),Q(t,e.u7))));return a(hu,kc,a(zF,{lI:FF(e.gB.lI),qi:n,qv:.1,mp:e.gB.mp,ne:e.gB.ne,nD:e.ji.nD,$7:{eB:e.eB,jM:e.$7.jM,lq:e.$7.lq},pc:e.gB.pc,px:e.gB.px},o))}),gd=function(e){return{$:1,a:e}},KF=s(function(e,r){return a(C0,e,qv(r))}),eU=KF("checked"),rU=xa("input"),aU=xa("label"),nU=a(Rc,f(["target","checked"]),ne),tU=function(e){return a(ts,"change",a(Ze,e,nU))},oU=V3("type"),cU=s(function(e,r){var n=r.ez,t=pe(a(Ee,function(d){return d.le},e)),o=f([a(I,"display","flex"),a(I,"align-items","center"),a(I,"gap","8px"),a(I,"padding","4px 8px"),a(I,"font-size","12px"),a(I,"cursor","pointer"),a(I,"color",t)]),c=A(function(d,b,g){return a(aU,o,f([a(rU,f([oU("checkbox"),eU(b),tU(function(_){return gd(function(p){return a(g,p,_)})})]),S),fr(d)]))}),i=pe(a(Ee,function(d){return d.jg},e)),u=s(function(d,b){return a(M3,f([a(I,"flex","1"),a(I,"padding","4px 8px"),a(I,"font-size","11px"),a(I,"cursor","pointer"),a(I,"background","transparent"),a(I,"color",t),a(I,"border","1px solid "+i),a(I,"border-radius","3px"),z3(b)]),f([fr(d)]))}),$=pe(a(Ee,function(d){return d.D},e)),l={ex:!0,jr:!0,eD:!0,eX:!0,fj:!0,fm:!0,fn:!0,fB:!0};return a(br,f([a(I,"display","flex"),a(I,"flex-direction","column"),a(I,"background",$),a(I,"border","1px solid "+i),a(I,"border-radius","6px"),a(I,"padding","6px"),a(I,"min-width","180px"),a(I,"user-select","none")]),f([a(br,f([a(I,"padding","2px 8px 6px 8px"),a(I,"font-size","11px"),a(I,"color",pe(a(Ee,function(d){return d.lf},e))),a(I,"text-transform","uppercase"),a(I,"letter-spacing","0.05em")]),f([fr("Dev overlay")])),v(c,"Hinge axes",n.eX,s(function(d,b){return E(d,{eX:b})})),v(c,"Dihedral angles",n.eD,s(function(d,b){return E(d,{eD:b})})),v(c,"Paper normals",n.fn,s(function(d,b){return E(d,{fn:b})})),v(c,"Panel paths",n.fB,s(function(d,b){return E(d,{fB:b})})),v(c,"Control axes",n.ex,s(function(d,b){return E(d,{ex:b})})),v(c,"Control names",n.jr,s(function(d,b){return E(d,{jr:b})})),v(c,"Origin triad",n.fj,s(function(d,b){return E(d,{fj:b})})),v(c,"Panel outlines",n.fm,s(function(d,b){return E(d,{fm:b})})),a(br,f([a(I,"display","flex"),a(I,"gap","4px"),a(I,"margin-top","6px"),a(I,"padding-top","6px"),a(I,"border-top","1px solid "+i)]),f([a(u,"All",gd(function(d){return l})),a(u,"None",gd(function(d){return Eb}))]))]))}),L8=s(function(e,r){var n=(function(){var u=e.ua;if(u.$)return fr("");var $=u.a;return a(br,f([a(I,"position","absolute"),a(I,"bottom","12px"),a(I,"left","50%"),a(I,"transform","translateX(-50%)"),a(I,"width","240px")]),f([Yn(qm({qZ:!1,nE:1,nJ:0,ii:$.ii,um:.001,uZ:$.uZ}))]))})(),t=e.nO===2,o=t?a(Dz,{qi:w8(r),dZ:e.kx.cZ,$7:e.hi,e:e.e,dx:e.dx},r):{r_:S,t7:S},c=a(QF,{ji:e.ji,qV:e.qV,eB:e.eB,sl:e.sl,ku:Q(e.ku,o.t7),kx:e.kx,gB:e.gB,$7:e.hi,dx:e.dx,u7:e.u7},r),i=t?f([a(br,f([a(I,"position","absolute"),a(I,"inset","0"),a(I,"pointer-events","none")]),o.r_),a(br,f([a(I,"position","absolute"),a(I,"top","12px"),a(I,"left","12px")]),f([a(hu,e.n1,a(cU,e.e,r))]))]):S;return a(br,f([a(I,"position","relative"),a(I,"width",Z(e.hi.lq)+"px"),a(I,"height",Z(e.hi.jM)+"px")]),Q(f([a(br,Q(a(vz,e.n1,r),f([a(I,"width","100%"),a(I,"height","100%"),a(I,"user-select","none")])),f([c]))]),Q(i,f([n]))))}),YO=te,iU={aZ:{pA:0,pB:0,L:0},bU:H(1,0,0),bV:H(0,1,0),bW:H(0,0,1)},uU=function(e){return e},fU=s(function(e,r){var n=r;return{aZ:a(li,n.aZ,e),bU:a(po,n.bU,e),bV:a(po,n.bV,e),bW:a(po,n.bW,e)}}),$U=A(function(e,r,n){var t=n,o=function(c){var i=bn(r),u=dn(r),$=c,l=$.a,d=$.b,b=$.c,g=Dt(e.eE),_=g.a,p=g.b,m=g.c,P=_*l+p*d+m*b,C=H(p*b-m*d,m*l-_*b,_*d-p*l),j=C.a,L=C.b,T=C.c;return H(l*u+j*i+_*P*(1-u),d*u+L*i+p*P*(1-u),b*u+T*i+m*P*(1-u))};return{aZ:v(pl,e,r,t.aZ),bU:o(t.bU),bV:o(t.bV),bW:o(t.bW)}}),lU=A(function(e,r,n){var t=r,o=Ru(t.ei),c=Ru(t.eh),i=Dt(a(vi,o,c)),u=uU({aZ:o,bU:i,bV:a(Gu,H(0,0,1),i),bW:H(0,0,1)}),$=a(fU,e,u),l={eE:a(po,i,e),aZ:a(li,o,e)},d=t.eC(n);return v($U,l,d,$)}),A8=Ae(function(e,r,n,t,o){var c=n.a,i=n.b,u=A(function(l,d,b){var g=d.a,_=d.b,p=(function(){var j=g;return j.eC(t)})(),m=Q(r,f([l])),P=v(lU,e,g,t),C=E(b,{dM:a(M,{eC:p,jO:g,ir:e,kH:m},b.dM)});return U(A8,P,m,_,t,C)}),$=E(o,{cq:a(M,H(r,c,e),o.cq)});return v(me,s(function(l,d){var b=l.a,g=l.b;return v(u,b,g,d)}),$,a(yn,Mo,i))}),T8=s(function(e,r){var n={dM:S,cq:S},t=U(A8,iU,S,e,r,n);return{dM:Te(t.dM),cq:Te(t.cq)}}),vU=A(function(e,r,n){var t={qF:Ie,oS:n.oS},o=a(T8,$z,t),c={lG:V(nz({rr:Ks(r),tL:r4(kD)})),D:Ba(Ks(r)),cZ:.01};return a(br,f([a(I,"max-width","720px"),a(I,"margin","0 auto"),a(I,"padding","32px"),a(I,"display","flex"),a(I,"flex-direction","column"),a(I,"gap","16px"),a(I,"color",pe(a(Ee,function(i){return i.le},r)))]),f([ez(r),a(br,f([a(I,"border","1px solid "+pe(a(Ee,function(i){return i.jg},r))),a(I,"border-radius","8px"),a(I,"overflow","hidden"),a(I,"align-self","center")]),f([a(L8,{ji:e,hi:{jM:420,lq:600},qV:W5(r),eB:e.eB,sl:S,nO:e.nO,n1:Qb,ku:S,kx:c,gB:c4,ua:V({ii:jD,uZ:n.oS}),e:r,dx:o,u7:S},n.d1)])),az(r)]))}),sU=function(e){return{$:0,a:e}},dU=`
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
`,bU=function(e){return Yn(a(ll,e,dU))},pU=`
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
`,mU=function(e){return Yn(a(ll,e,pU))},hU={tA:f([{pA:0,pB:-.5},{pA:1,pB:-.5},{pA:1,pB:.5},{pA:0,pB:.5}])},gU={tA:f([{pA:0,pB:0},{pA:1,pB:0},{pA:1,pB:1},{pA:0,pB:1}])},_U={dG:.35,k_:-.25,k$:.25},M8=A(function(e,r,n){return{eh:r,ei:e,jr:S,eC:n}}),yU=function(e){var r=e.k$-e.k_,n={tA:f([{pA:0,pB:0},{pA:r,pB:0},{pA:r,pB:e.dG},{pA:0,pB:e.dG}])},t=function(i){return Er*i.oS},o=v(M8,{pA:e.dG,pB:e.k$},{pA:e.dG,pB:e.k_},t),c=v(M8,{pA:r,pB:e.dG},{pA:0,pB:e.dG},t);return{bF:y(o,a(nc,n,f([y(c,a(nc,n,S))]))),bM:a(nc,n,S)}},CU=(function(){var e=yU(_U),r=e.bF,n=r.a,t=r.b;return a(nc,hU,f([y(v(i4,{pA:0,pB:.5},{pA:0,pB:-.5},Er),a(nc,gU,S)),y(n,t)]))})(),PU=A(function(e,r,n){var t={qF:Ie,oS:n.oS},o=a(T8,CU,t),c={lG:D,D:Ba(Ks(r)),cZ:.01};return a(br,f([a(I,"max-width","720px"),a(I,"margin","0 auto"),a(I,"padding","32px"),a(I,"display","flex"),a(I,"flex-direction","column"),a(I,"gap","16px"),a(I,"color",pe(a(Ee,function(i){return i.le},r)))]),f([bU(r),a(br,f([a(I,"border","1px solid "+pe(a(Ee,function(i){return i.jg},r))),a(I,"border-radius","8px"),a(I,"overflow","hidden"),a(I,"align-self","center")]),f([a(L8,{ji:e,hi:{jM:420,lq:600},qV:W5(r),eB:e.eB,sl:S,nO:e.nO,n1:rp,ku:S,kx:c,gB:c4,ua:V({ii:sU,uZ:n.oS}),e:r,dx:o,u7:S},n.d1)])),mU(r)]))}),SU=A(function(e,r,n){return G5((function(){if(n.$){var o=n.a;return a(hu,xD,v(PU,e,r,o))}else{var t=n.a;return a(hu,SD,v(vU,e,r,t))}})())}),xU=CD({bD:M_,cT:f([Ib({aA:f([a(PD,"card-art","assets/card-art.jpg")]),bE:"hinge",b_:A(function(e,r,n){var t=a(z_,e,n),o=t.a;return H(E0(o),Jn,S)}),aH:S,fo:!0}),Ib({aA:S,bE:"slit",b_:A(function(e,r,n){var t=a(B_,e,n),o=t.a;return H(H0(o),Jn,S)}),aH:S,fo:!0})]),sm:K_,bh:ty,bi:uy,bp:SU});i7({PopUpExplainer:{Main:{init:xU(a(z,function(e){return ae({g:e})},a(k,"inputs",a(z,function(e){return a(z,function(r){return a(z,function(n){return a(z,function(t){return a(z,function(o){return a(z,function(c){return a(z,function(i){return a(z,function(u){return a(z,function($){return a(z,function(l){return a(z,function(d){return a(z,function(b){return a(z,function(g){return a(z,function(_){return a(z,function(p){return a(z,function(m){return a(z,function(P){return a(z,function(C){return a(z,function(j){return a(z,function(L){return ae({dC:L,ey:j,eA:C,eB:P,hB:m,eO:p,rw:_,hX:g,kt:b,ti:d,gz:l,tl:$,tp:u,tw:i,fp:c,$7:o,fs:t,iH:n,eb:r,fJ:e})},a(k,"boundingClientRects",hr(a(z,function(L){return a(z,function(T){return a(z,function(F){return ae({rg:F,rE:T,t2:L})},a(k,"elements",hr(a(z,function(F){return a(z,function(q){return ae({lU:q,bE:F})},a(k,"boundingClientRect",a(z,function(q){return a(z,function(R){return a(z,function(K){return a(z,function(J){return ae({bx:J,bF:K,bM:R,bS:q})},a(k,"bottom",N))},a(k,"left",N))},a(k,"right",N))},a(k,"top",N))))},a(k,"id",ke)))))},a(k,"frameId",ke))},a(k,"scroll",a(z,function(L){return a(z,function(T){return a(z,function(F){return a(z,function(q){return a(z,function(R){return a(z,function(K){return ae({l6:K,l7:R,bF:q,bS:F,ps:T,pt:L})},a(k,"contentHeight",N))},a(k,"contentWidth",N))},a(k,"left",N))},a(k,"top",N))},a(k,"viewportHeight",N))},a(k,"viewportWidth",N)))))))},a(k,"darkModeIsOn",ne))},a(k,"deviceOrientation",wo(f([jc(D),a(Ze,V,a(z,function(C){return a(z,function(j){return a(z,function(L){return ae({aQ:L,p1:j,rJ:C})},a(k,"alpha",N))},a(k,"beta",N))},a(k,"gamma",N)))]))))},a(k,"devicePixelRatio",N))},a(k,"dt",N))},a(k,"focusedElementIsContentEditable",ne))},a(k,"focusedElementIsTextInput",ne))},a(k,"keyboard",a(z,function(g){return a(z,function(_){return a(z,function(p){return a(z,function(m){return a(z,function(P){return a(z,function(C){return a(z,function(j){return a(z,function(L){return a(z,function(T){return a(z,function(F){return ae({i2:F,js:T,jy:L,q4:j,bF:C,j7:P,tD:m,bM:p,kV:_,lm:g})},a(k,"alt",ne))},a(k,"ctrl",ne))},a(k,"down",ne))},a(k,"downs",hr(ke)))},a(k,"left",ne))},a(k,"meta",ne))},a(k,"pressedKeys",hr(ke)))},a(k,"right",ne))},a(k,"shift",ne))},a(k,"up",ne))))},a(k,"operatingSystem",ke))},a(k,"pageId",ke))},a(k,"pageScroll",a(z,function(l){return a(z,function(d){return a(z,function(b){return a(z,function(g){return a(z,function(_){return a(z,function(p){return ae({l6:p,l7:_,bF:g,bS:b,ps:d,pt:l})},a(k,"contentHeight",N))},a(k,"contentWidth",N))},a(k,"left",N))},a(k,"top",N))},a(k,"viewportHeight",N))},a(k,"viewportWidth",N))))},a(k,"paneBoundingBoxes",hr(a(z,function($){return a(z,function(l){return a(z,function(d){return a(z,function(b){return a(z,function(g){return ae({jM:g,bF:b,tm:d,bS:l,lq:$})},a(k,"height",N))},a(k,"left",N))},a(k,"paneId",ke))},a(k,"top",N))},a(k,"width",N)))))},a(k,"persisted",hr(a(z,function(u){return a(z,function($){return ae(y(u,$))},a(Zn,1,ke))},a(Zn,0,ke)))))},a(k,"pointer",a(z,function(i){return a(z,function(u){return a(z,function($){return a(z,function(l){return a(z,function(d){return a(z,function(b){return a(z,function(g){return a(z,function(_){return a(z,function(p){return a(z,function(m){return a(z,function(P){return a(z,function(C){return ae({q0:C,jy:P,hC:m,hD:p,rf:_,sf:g,sQ:b,tU:d,tW:l,lm:$,pA:u,pB:i})},a(k,"doubleClick",ne))},a(k,"down",ne))},a(k,"dx",N))},a(k,"dy",N))},a(k,"elementIdsForLastDown",hr(ke)))},a(k,"isDown",ne))},a(k,"move",ne))},a(k,"rightDown",ne))},a(k,"rightUp",ne))},a(k,"up",ne))},a(k,"x",N))},a(k,"y",N))))},a(k,"rawPointer",a(z,function(c){return a(z,function(i){return a(z,function(u){return a(z,function($){return a(z,function(l){return a(z,function(d){return a(z,function(b){return a(z,function(g){return a(z,function(_){return a(z,function(p){return a(z,function(m){return a(z,function(P){return ae({q0:P,jy:m,hC:p,hD:_,rf:g,sf:b,sQ:d,tU:l,tW:$,lm:u,pA:i,pB:c})},a(k,"doubleClick",ne))},a(k,"down",ne))},a(k,"dx",N))},a(k,"dy",N))},a(k,"elementIdsForLastDown",hr(ke)))},a(k,"isDown",ne))},a(k,"move",ne))},a(k,"rightDown",ne))},a(k,"rightUp",ne))},a(k,"up",ne))},a(k,"x",N))},a(k,"y",N))))},a(k,"screen",a(z,function(o){return a(z,function(c){return ae({jM:c,lq:o})},a(k,"height",N))},a(k,"width",N))))},a(k,"screenOrientationAngle",N))},a(k,"searchParamsFromUrl",wo(f([jc(D),a(Ze,V,hr(a(z,function(n){return a(z,function(t){return ae(y(n,t))},a(Zn,1,ke))},a(Zn,0,ke))))]))))},a(k,"touches",hr(a(z,function(r){return a(z,function(n){return a(z,function(t){return ae({bE:t,pA:n,pB:r})},a(k,"id",qi))},a(k,"x",N))},a(k,"y",N)))))},a(k,"wheel",a(z,function(e){return a(z,function(r){return a(z,function(n){return a(z,function(t){return a(z,function(o){return ae({md:o,me:t,mj:n,of:r,og:e})},a(k,"deltaX",N))},a(k,"deltaY",N))},a(k,"elementIdsForLastWheel",hr(ke)))},a(k,"pinchDeltaForChrome",N))},a(k,"pinchScaleForSafari",wo(f([jc(D),a(Ze,V,N)])))))))))(0)}}})})(this);
