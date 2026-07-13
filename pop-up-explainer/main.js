(function(hc){"use strict";function qt(e,r,n){return n.a=e,n.f=r,n}function s(e){return qt(2,e,function(r){return function(n){return e(r,n)}})}function D(e){return qt(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function K(e){return qt(4,e,function(r){return function(n){return function(t){return function(o){return e(r,n,t,o)}}}})}function Le(e){return qt(5,e,function(r){return function(n){return function(t){return function(o){return function(c){return e(r,n,t,o,c)}}}}})}function Fr(e){return qt(6,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return e(r,n,t,o,c,i)}}}}}})}function Ot(e){return qt(7,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return e(r,n,t,o,c,i,u)}}}}}}})}function Ae(e){return qt(8,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return e(r,n,t,o,c,i,u,$)}}}}}}}})}function c0(e){return qt(9,e,function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){return e(r,n,t,o,c,i,u,$,l)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function v(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function x(e,r,n,t,o){return e.a===4?e.f(r,n,t,o):e(r)(n)(t)(o)}function R(e,r,n,t,o,c){return e.a===5?e.f(r,n,t,o,c):e(r)(n)(t)(o)(c)}function wr(e,r,n,t,o,c,i){return e.a===6?e.f(r,n,t,o,c,i):e(r)(n)(t)(o)(c)(i)}function ra(e,r,n,t,o,c,i,u){return e.a===7?e.f(r,n,t,o,c,i,u):e(r)(n)(t)(o)(c)(i)(u)}function _o(e,r,n,t,o,c,i,u,$){return e.a===8?e.f(r,n,t,o,c,i,u,$):e(r)(n)(t)(o)(c)(i)(u)($)}function DR(e,r,n,t,o,c,i,u,$,l){return e.a===9?e.f(r,n,t,o,c,i,u,$,l):e(r)(n)(t)(o)(c)(i)(u)($)(l)}var U8=[];function R8(e){return[e]}function I8(e){return e.length}var q8=D(function(e,r,n){for(var t=new Array(e),o=0;o<e;o++)t[o]=n(r+o);return t}),O8=s(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,y(n,r)}),G8=s(function(e,r){return r[e]}),W8=D(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=n[c];return o[e]=r,o}),N8=s(function(e,r){for(var n=r.length,t=new Array(n+1),o=0;o<n;o++)t[o]=r[o];return t[n]=e,t}),J8=D(function(e,r,n){for(var t=n.length,o=0;o<t;o++)r=a(e,n[o],r);return r}),Z8=D(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r}),TR=s(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=e(r[o]);return t}),MR=D(function(e,r,n){for(var t=n.length,o=new Array(t),c=0;c<t;c++)o[c]=a(e,r+c,n[c]);return o}),X8=D(function(e,r,n){return n.slice(e,r)}),K8=D(function(e,r,n){var t=r.length,o=e-t;o>n.length&&(o=n.length);for(var c=t+o,i=new Array(c),u=0;u<t;u++)i[u]=r[u];for(var u=0;u<o;u++)i[u+t]=n[u];return i}),zR=s(function(e,r){return r}),AR=s(function(e,r){return console.log(e+": "+yd(r)),r});function FR(e,r){return function(n){mn(8,e,r,n)}}function ER(e,r,n){return function(t){mn(9,e,r,n,t)}}function yd(e){return"<internals>"}function HR(e){return vt(!1,e)}function vt(e,r){if(typeof r=="function")return mf(e,"<function>");if(typeof r=="boolean")return Ti(e,r?"True":"False");if(typeof r=="number")return Y8(e,r+"");if(r instanceof String)return Q8(e,"'"+Pd(r,!0)+"'");if(typeof r=="string")return Sd(e,'"'+Pd(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return mf(e,"<internals>");if(n[0]==="#"){var o=[];for(var t in r)t!=="$"&&o.push(vt(e,r[t]));return"("+o.join(",")+")"}if(n==="Set_elm_builtin")return Ti(e,"Set")+pf(e,".fromList")+" "+vt(e,eC(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return Ti(e,"Dict")+pf(e,".fromList")+" "+vt(e,Qa(r));if(n==="Array_elm_builtin")return Ti(e,"Array")+pf(e,".fromList")+" "+vt(e,Qg(r));if(n==="::"||n==="[]"){var o="[";for(r.b&&(o+=vt(e,r.a),r=r.b);r.b;r=r.b)o+=","+vt(e,r.a);return o+"]"}var o="";for(var c in r)if(c!=="$"){var i=vt(e,r[c]),u=i[0],$=u==="{"||u==="("||u==="["||u==="<"||u==='"'||i.indexOf(" ")<0;o+=" "+($?i:"("+i+")")}return Ti(e,n)+o}if(typeof DataView=="function"&&r instanceof DataView)return Sd(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return mf(e,"<"+r.name+">");if(typeof r=="object"){var o=[];for(var l in r){var d=l[0]==="_"?l.slice(1):l;o.push(pf(e,d)+" = "+vt(e,r[l]))}return o.length===0?"{}":"{ "+o.join(", ")+" }"}return mf(e,"<internals>")}function Pd(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function Ti(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function Y8(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Sd(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function Q8(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function pf(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function mf(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function VR(e){return String.fromCharCode(e<10?48+e:55+e)}function mn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function BR(e,r,n,t,o){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var c=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+c);case 3:var i=r;throw new Error("There can only be one port named `"+i+"`, but your program has multiple.");case 4:var i=r,u=n;throw new Error("Trying to send an unexpected type of value through port `"+i+"`:\n"+u);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var $=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+$+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var $=r,l=n,b=t;throw new Error("TODO in module `"+$+"` "+xd(l)+`

`+b);case 9:var $=r,l=n,d=t,b=o;throw new Error("TODO in module `"+$+"` from the `case` expression "+xd(l)+`

It received the following value:

    `+yd(d).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+b.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function xd(e){return e.dq.gs===e.rm.gs?"on line "+e.dq.gs:"on lines "+e.dq.gs+" through "+e.rm.gs}function oe(e,r){for(var n,t=[],o=i0(e,r,0,t);o&&(n=t.pop());o=i0(n.a,n.b,0,t));return o}function i0(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&mn(5),!1;if(n>100)return t.push(y(e,r)),!0;e.$<0&&(e=Qa(e),r=Qa(r));for(var o in e)if(!i0(e[o],r[o],n+1,t))return!1;return!0}var e9=s(oe),r9=s(function(e,r){return!oe(e,r)});function ce(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=ce(e.a,r.a))||(n=ce(e.b,r.b))?n:ce(e.c,r.c);for(;e.b&&r.b&&!(n=ce(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}var a9=s(function(e,r){return ce(e,r)<0}),n9=s(function(e,r){return ce(e,r)<1}),t9=s(function(e,r){return ce(e,r)>0}),o9=s(function(e,r){return ce(e,r)>=0}),c9=s(function(e,r){var n=ce(e,r);return n<0?Cb:n?rC:gb}),yo=0,UR={$:"#0"};function y(e,r){return{a:e,b:r}}function RR(e,r){return{$:"#2",a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function IR(e,r,n){return{$:"#3",a:e,b:r,c:n}}function qR(e){return e}function OR(e){return new String(e)}function H(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}var i9=s(Y);function Y(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=qn(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=qn(e.a,r);return n}var S={$:0},GR={$:"[]"};function qn(e,r){return{$:1,a:e,b:r}}function WR(e,r){return{$:"::",a:e,b:r}}var u9=s(qn);function f(e){for(var r=S,n=e.length;n--;)r=qn(e[n],r);return r}function hf(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var f9=D(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return f(t)}),NR=K(function(e,r,n,t){for(var o=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)o.push(v(e,r.a,n.a,t.a));return f(o)}),$9=Le(function(e,r,n,t,o){for(var c=[];r.b&&n.b&&t.b&&o.b;r=r.b,n=n.b,t=t.b,o=o.b)c.push(x(e,r.a,n.a,t.a,o.a));return f(c)}),JR=Fr(function(e,r,n,t,o,c){for(var i=[];r.b&&n.b&&t.b&&o.b&&c.b;r=r.b,n=n.b,t=t.b,o=o.b,c=c.b)i.push(R(e,r.a,n.a,t.a,o.a,c.a));return f(i)}),l9=s(function(e,r){return f(hf(r).sort(function(n,t){return ce(e(n),e(t))}))}),v9=s(function(e,r){return f(hf(r).sort(function(n,t){var o=a(e,n,t);return o===gb?0:o===Cb?-1:1}))}),s9=s(function(e,r){return e+r}),d9=s(function(e,r){return e-r}),b9=s(function(e,r){return e*r}),p9=s(function(e,r){return e/r}),m9=s(function(e,r){return e/r|0}),h9=s(Math.pow),g9=s(function(e,r){return r%e}),C9=s(function(e,r){var n=r%e;return e===0?mn(11):n>0&&e<0||n<0&&e>0?n+e:n}),_9=Math.PI,ZR=Math.E,y9=Math.cos,P9=Math.sin,S9=Math.tan,x9=Math.acos,XR=Math.asin,j9=Math.atan,k9=s(Math.atan2);function w9(e){return e}function KR(e){return e|0}function L9(e){return e===1/0||e===-1/0}var D9=Math.ceil,T9=Math.floor,M9=Math.round,z9=Math.sqrt,jd=Math.log,A9=isNaN;function F9(e){return!e}var E9=s(function(e,r){return e&&r}),H9=s(function(e,r){return e||r}),YR=s(function(e,r){return e!==r}),V9=s(function(e,r){return e+r});function B9(e){var r=e.charCodeAt(0);return isNaN(r)?z:E(55296<=r&&r<=56319?y(e[0]+e[1],e.slice(2)):y(e[0],e.slice(1)))}var U9=s(function(e,r){return e+r});function R9(e){return e.length}var QR=s(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;){var c=r.charCodeAt(o);if(55296<=c&&c<=56319){t[o]=e(r[o]+r[o+1]),o+=2;continue}t[o]=e(r[o]),o++}return t.join("")}),eI=s(function(e,r){for(var n=[],t=r.length,o=0;o<t;){var c=r[o],i=r.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=r[o],o++),e(c)&&n.push(c)}return n.join("")});function I9(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}var q9=D(function(e,r,n){for(var t=n.length,o=0;o<t;){var c=n[o],i=n.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=n[o],o++),r=a(e,c,r)}return r}),O9=D(function(e,r,n){for(var t=n.length;t--;){var o=n[t],c=n.charCodeAt(t);56320<=c&&c<=57343&&(t--,o=n[t]+o),r=a(e,o,r)}return r}),G9=s(function(e,r){return r.split(e)}),W9=s(function(e,r){return r.join(e)}),N9=D(function(e,r,n){return n.slice(e,r)});function J9(e){return e.trim()}function rI(e){return e.replace(/^\s+/,"")}function aI(e){return e.replace(/\s+$/,"")}function nI(e){return f(e.trim().split(/\s+/g))}function tI(e){return f(e.split(/\r\n|\r|\n/g))}function Z9(e){return e.toUpperCase()}function X9(e){return e.toLowerCase()}var oI=s(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1}),K9=s(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Y9=s(function(e,r){return r.indexOf(e)>-1}),Q9=s(function(e,r){return r.indexOf(e)===0}),eh=s(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length}),rh=s(function(e,r){var n=e.length;if(n<1)return S;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+n;return f(o)});function kd(e){return e+""}function ah(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,o=t;o<e.length;++o){var c=e.charCodeAt(o);if(c<48||57<c)return z;r=10*r+c-48}return o==t?z:E(n==45?-r:r)}function nh(e){if(e.length===0||/[\sxbo]/.test(e))return z;var r=+e;return r===r?E(r):z}function th(e){return hf(e).join("")}function oh(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function ch(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function cI(e){return e.toUpperCase()}function ih(e){return e.toLowerCase()}function iI(e){return e.toLocaleUpperCase()}function uI(e){return e.toLocaleLowerCase()}function uh(e){return{$:0,a:e}}function fh(e){return{$:1,a:e}}function Mi(e){return{$:2,b:e}}var $h=Mi(function(e){return typeof e!="number"?Ka("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?ta(e):Ka("an INT",e)}),lh=Mi(function(e){return typeof e=="boolean"?ta(e):Ka("a BOOL",e)}),vh=Mi(function(e){return typeof e=="number"?ta(e):Ka("a FLOAT",e)}),sh=Mi(function(e){return ta(e)}),dh=Mi(function(e){return typeof e=="string"?ta(e):e instanceof String?ta(e+""):Ka("a STRING",e)});function bh(e){return{$:3,b:e}}function ph(e){return{$:4,b:e}}function mh(e){return{$:5,c:e}}var hh=s(function(e,r){return{$:6,d:e,b:r}}),gh=s(function(e,r){return{$:7,e,b:r}});function Ch(e){return{$:8,b:e}}function Gt(e,r){return{$:9,f:e,g:r}}var _h=s(function(e,r){return{$:10,b:r,h:e}});function yh(e){return{$:11,g:e}}var Ph=s(function(e,r){return Gt(e,[r])}),Sh=D(function(e,r,n){return Gt(e,[r,n])}),xh=K(function(e,r,n,t){return Gt(e,[r,n,t])}),jh=Le(function(e,r,n,t,o){return Gt(e,[r,n,t,o])}),kh=Fr(function(e,r,n,t,o,c){return Gt(e,[r,n,t,o,c])}),wh=Ot(function(e,r,n,t,o,c,i){return Gt(e,[r,n,t,o,c,i])}),fI=Ae(function(e,r,n,t,o,c,i,u){return Gt(e,[r,n,t,o,c,i,u])}),$I=c0(function(e,r,n,t,o,c,i,u,$){return Gt(e,[r,n,t,o,c,i,u,$])}),Lh=s(function(e,r){try{var n=JSON.parse(r);return Xa(e,n)}catch(t){return Va(a(B0,"This is not valid JSON! "+t.message,r))}}),u0=s(function(e,r){return Xa(e,r)});function Xa(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ta(e.c):Ka("null",r);case 3:return gf(r)?wd(e.b,r,f):Ka("a LIST",r);case 4:return gf(r)?wd(e.b,r,Dh):Ka("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ka("an OBJECT with a field named `"+n+"`",r);var l=Xa(e.b,r[n]);return Sn(l)?l:Va(a(_b,n,l.a));case 7:var t=e.e;if(!gf(r))return Ka("an ARRAY",r);if(t>=r.length)return Ka("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var l=Xa(e.b,r[t]);return Sn(l)?l:Va(a(yb,t,l.a));case 8:if(typeof r!="object"||r===null||gf(r))return Ka("an OBJECT",r);var o=S;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var l=Xa(e.b,r[c]);if(!Sn(l))return Va(a(_b,c,l.a));o=qn(y(c,l.a),o)}return ta(De(o));case 9:for(var i=e.f,u=e.g,$=0;$<u.length;$++){var l=Xa(u[$],r);if(!Sn(l))return l;i=i(l.a)}return ta(i);case 10:var l=Xa(e.b,r);return Sn(l)?Xa(e.h(l.a),r):l;case 11:for(var d=S,b=e.g;b.b;b=b.b){var l=Xa(b.a,r);if(Sn(l))return l;d=qn(l.a,d)}return Va(aC(De(d)));case 1:return Va(a(B0,e.a,r));case 0:return ta(e.a)}}function wd(e,r,n){for(var t=r.length,o=new Array(t),c=0;c<t;c++){var i=Xa(e,r[c]);if(!Sn(i))return Va(a(yb,c,i.a));o[c]=i.a}return ta(n(o))}function gf(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Dh(e){return a(G0,e.length,function(r){return e[r]})}function Ka(e,r){return Va(a(B0,"Expecting "+e,r))}function gc(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return gc(e.b,r.b);case 6:return e.d===r.d&&gc(e.b,r.b);case 7:return e.e===r.e&&gc(e.b,r.b);case 9:return e.f===r.f&&Ld(e.g,r.g);case 10:return e.h===r.h&&gc(e.b,r.b);case 11:return Ld(e.g,r.g)}}function Ld(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!gc(e[t],r[t]))return!1;return!0}var Th=s(function(e,r){return JSON.stringify(r,null,e)+""});function lI(e){return{$:0,a:e}}function vI(e){return e.a}function f0(e){return e}function sI(e){return e}function Mh(){return[]}function zh(){return{}}var Ah=D(function(e,r,n){var t=r;return e==="toJSON"&&typeof t=="function"||(n[e]=t),n});function Fh(e){return s(function(r,n){return n.push(e(r)),n})}var Eh=null,Hh=s(function(e,r){return e&r}),Vh=s(function(e,r){return e|r}),Bh=s(function(e,r){return e^r});function dI(e){return~e}var Uh=s(function(e,r){return r<<e}),Rh=s(function(e,r){return r>>e}),Ih=s(function(e,r){return r>>>e});function Ya(e){return{$:0,a:e}}function $0(e){return{$:1,a:e}}function aa(e){return{$:2,b:e,c:null}}var l0=s(function(e,r){return{$:3,b:e,d:r}}),qh=s(function(e,r){return{$:4,b:e,d:r}});function Oh(e){return{$:5,b:e}}var Gh=0;function v0(e){var r={$:0,e:Gh++,f:e,g:null,h:[]};return b0(r),r}function s0(e){return aa(function(r){r(Ya(v0(e)))})}function Dd(e,r){e.h.push(r),b0(e)}var Wh=s(function(e,r){return aa(function(n){Dd(e,r),n(Ya(yo))})});function Nh(e){return aa(function(r){var n=e.f;n.$===2&&n.c&&n.c(),e.f=null,r(Ya(yo))})}var d0=!1,Td=[];function b0(e){if(Td.push(e),!d0){for(d0=!0;e=Td.shift();)Jh(e);d0=!1}}function Jh(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,b0(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}function Zh(e){return aa(function(r){var n=setTimeout(function(){r(Ya(yo))},e);return function(){clearTimeout(n)}})}var bI=K(function(e,r,n,t){return p0(r,t,e.b_,e.uY,e.ay,function(){return function(){}})});function p0(e,r,n,t,o,c){var i=a(u0,e,r?r.flags:void 0);Sn(i)||mn(2);var u={},$=n(i.a),l=$.a,d=c(g,l),b=Kh(u,g);function g(C,p){var m=a(t,C,l);d(l=m.a,p),Fd(u,m.b,o(l))}return Fd(u,$.b,o(l)),b?{ports:b}:{}}var Xh;function pI(e){Xh.add(e)}var na={};function Kh(e,r){var n;for(var t in na){var o=na[t];o.a&&(n=n||{},n[t]=o.a(t,r)),e[t]=Yh(o,r)}return n}function m0(e,r,n,t,o){return{b:e,c:r,d:n,e:t,f:o}}function Yh(e,r){var n={g:r,h:void 0},t=e.c,o=e.d,c=e.e,i=e.f;function u($){return a(l0,u,Oh(function(l){var d=l.a;return l.$===0?v(o,n,d,$):c&&i?x(t,n,d.i,d.j,$):v(t,n,c?d.i:d.j,$)}))}return n.h=v0(a(l0,u,e.b))}var Qh=s(function(e,r){return aa(function(n){e.g(r),n(Ya(yo))})}),e7=s(function(e,r){return a(Wh,e.h,{$:0,a:r})});function zi(e){return function(r){return{$:1,k:e,l:r}}}function Md(e){return{$:2,m:e}}var zd=s(function(e,r){return{$:3,n:e,o:r}}),Ad=[],h0=!1;function Fd(e,r,n){if(Ad.push({p:e,q:r,r:n}),!h0){h0=!0;for(var t;t=Ad.shift();)r7(t.p,t.q,t.r);h0=!1}}function r7(e,r,n){var t={};Cf(!0,r,t,null),Cf(!1,n,t,null);for(var o in e)Dd(e[o],{$:"fx",a:t[o]||{i:S,j:S}})}function Cf(e,r,n,t){switch(r.$){case 1:var o=r.k,c=a7(e,o,t,r.l);n[o]=n7(e,c,n[o]);return;case 2:for(var i=r.m;i.b;i=i.b)Cf(e,i.a,n,t);return;case 3:Cf(e,r.o,n,{s:r.n,t});return}}function a7(e,r,n,t){function o(i){for(var u=n;u;u=u.t)i=u.s(i);return i}var c=e?na[r].e:na[r].f;return a(c,o,t)}function n7(e,r,n){return n=n||{i:S,j:S},e?n.i=qn(r,n.i):n.j=qn(r,n.j),n}function Ed(e){na[e]&&mn(3,e)}function Wt(e,r){return Ed(e),na[e]={e:t7,u:r,a:o7},zi(e)}var t7=s(function(e,r){return r});function o7(e){var r=[],n=na[e].u,t=Zh(0);na[e].b=t,na[e].c=D(function(i,u,$){for(;u.b;u=u.b)for(var l=r,d=n(u.a),b=0;b<l.length;b++)l[b](d);return t});function o(i){r.push(i)}function c(i){r=r.slice();var u=r.indexOf(i);u>=0&&r.splice(u,1)}return{subscribe:o,unsubscribe:c}}function g0(e,r){return Ed(e),na[e]={f:c7,u:r,a:i7},zi(e)}var c7=s(function(e,r){return function(n){return e(r(n))}});function i7(e,r){var n=S,t=na[e].u,o=Ya(null);na[e].b=o,na[e].c=D(function(i,u,$){return n=u,o});function c(i){var u=a(u0,t,i);Sn(u)||mn(4,e,u.a);for(var $=u.a,l=n;l.b;l=l.b)r(l.a($))}return{send:c}}function u7(e){hc.Elm?Hd(hc.Elm,e):hc.Elm=e}function Hd(e,r){for(var n in r)n in e?n=="init"?mn(6):Hd(e[n],r[n]):e[n]=r[n]}function mI(e){hc.Elm?Vd("Elm",hc.Elm,e):hc.Elm=e}function Vd(e,r,n){for(var t in n)t in r?t=="init"?mn(6,e):Vd(e+"."+t,r[t],n[t]):r[t]=n[t]}var _f,Zr=typeof document<"u"?document:{};function C0(e,r){e.appendChild(r)}var hI=K(function(e,r,n,t){var o=t.node;return o.parentNode.replaceChild(Jt(e,function(){}),o),{}});function _0(e){return{$:0,a:e}}var Bd=s(function(e,r){return s(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b||0,o.push(i)}return c+=o.length,{$:1,c:r,d:S0(n),e:o,f:e,b:c}})}),xa=Bd(void 0),Ud=s(function(e,r){return s(function(n,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b.b||0,o.push(i)}return c+=o.length,{$:2,c:r,d:S0(n),e:o,f:e,b:c}})}),f7=Ud(void 0);function Rd(e,r,n,t){return{$:3,d:S0(e),g:r,h:n,i:t}}var $7=s(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Nt(e,r){return{$:5,l:e,m:r,k:void 0}}var gI=s(function(e,r){return Nt([e,r],function(){return e(r)})}),CI=D(function(e,r,n){return Nt([e,r,n],function(){return a(e,r,n)})}),l7=K(function(e,r,n,t){return Nt([e,r,n,t],function(){return v(e,r,n,t)})}),_I=Le(function(e,r,n,t,o){return Nt([e,r,n,t,o],function(){return x(e,r,n,t,o)})}),yI=Fr(function(e,r,n,t,o,c){return Nt([e,r,n,t,o,c],function(){return R(e,r,n,t,o,c)})}),PI=Ot(function(e,r,n,t,o,c,i){return Nt([e,r,n,t,o,c,i],function(){return wr(e,r,n,t,o,c,i)})}),SI=Ae(function(e,r,n,t,o,c,i,u){return Nt([e,r,n,t,o,c,i,u],function(){return ra(e,r,n,t,o,c,i,u)})}),xI=c0(function(e,r,n,t,o,c,i,u,$){return Nt([e,r,n,t,o,c,i,u,$],function(){return _o(e,r,n,t,o,c,i,u,$)})}),Id=s(function(e,r){return{$:"a0",n:e,o:r}}),v7=s(function(e,r){return{$:"a1",n:e,o:r}}),y0=s(function(e,r){return{$:"a2",n:e,o:r}}),yf=s(function(e,r){return{$:"a3",n:e,o:r}}),s7=D(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}}),d7=/^script$/i,b7=/^(on|formAction$)/i,p7=/^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i,P0=/^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;function Pf(e){return d7.test(e)?"p":e}function qd(e){return b7.test(e)?"data-"+e:e}function m7(e){return e=="innerHTML"||e=="outerHTML"||e=="formAction"?"data-"+e:e}function jI(e){return p7.test(e)?"":e}function Od(e){return P0.test(e)?"":e}function h7(e){return typeof e=="string"&&P0.test(e)||Array.isArray(e)&&P0.test(String(e))?"":e}var g7=s(function(e,r){return r.$==="a0"?a(Id,r.n,C7(e,r.o)):r});function C7(e,r){var n=Q0(r);return{$:r.$,a:n?v(Xn,n<3?_7:y7,ae(e),r.a):a(Je,e,r.a)}}var _7=s(function(e,r){return y(e(r.a),r.b)}),y7=s(function(e,r){return{T:e(r.T),Z:r.Z,W:r.W}});function S0(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,o=n.n,c=n.o;if(t==="a2"){o==="className"?Gd(r,o,c):r[o]=c;continue}var i=r[t]||(r[t]={});t==="a3"&&o==="class"?Gd(i,o,c):i[o]=c}return r}function Gd(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Jt(e,r){var n=e.$;if(n===5)return Jt(e.k||(e.k=e.m()),r);if(n===0)return Zr.createTextNode(e.a);if(n===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var c={j:o,p:r},i=Jt(t,c);return i.elm_event_node_ref=c,i}if(n===3){var i=e.h(e.g);return x0(i,r,e.d),i}var i=e.f?Zr.createElementNS(e.f,e.c):Zr.createElement(e.c);_f&&e.c=="a"&&i.addEventListener("click",_f(i)),x0(i,r,e.d);for(var u=e.e,$=0;$<u.length;$++)C0(i,Jt(n===1?u[$]:u[$].b,r));return i}function x0(e,r,n){for(var t in n){var o=n[t];t==="a1"?P7(e,o):t==="a0"?j7(e,r,o):t==="a3"?S7(e,o):t==="a4"?x7(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function P7(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function S7(e,r){for(var n in r){var t=r[n];typeof t<"u"?e.setAttribute(n,t):e.removeAttribute(n)}}function x7(e,r){for(var n in r){var t=r[n],o=t.f,c=t.o;typeof c<"u"?e.setAttributeNS(o,n,c):e.removeAttributeNS(o,n)}}function j7(e,r,n){var t=e.elmFs||(e.elmFs={});for(var o in n){var c=n[o],i=t[o];if(!c){e.removeEventListener(o,i),t[o]=void 0;continue}if(i){var u=i.q;if(u.$===c.$){i.q=c;continue}e.removeEventListener(o,i)}i=k7(r,c),e.addEventListener(o,i,j0&&{passive:Q0(c)<2}),t[o]=i}}var j0;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){j0=!0}}))}catch{}function k7(e,r){function n(t){var o=n.q,c=Xa(o.a,t);if(Sn(c)){for(var i=Q0(o),u=c.a,$=i?i<3?u.a:u.T:u,l=i==1?u.b:i==3&&u.Z,d=(l&&t.stopPropagation(),(i==2?u.b:i==3&&u.W)&&t.preventDefault(),e),b,g;b=d.j;){if(typeof b=="function")$=b($);else for(var g=b.length;g--;)$=b[g]($);d=d.p}d($,l)}}return n.q=r,n}function w7(e,r){return e.$==r.$&&gc(e.a,r.a)}function Wd(e,r){var n=[];return hn(e,r,n,0),n}function da(e,r,n,t){var o={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(o),o}function hn(e,r,n,t){if(e!==r){var o=e.$,c=r.$;if(o!==c)if(o===1&&c===2)r=E7(r),c=1;else{da(n,0,t,r);return}switch(c){case 5:for(var i=e.l,u=r.l,$=i.length,l=$===u.length;l&&$--;)l=i[$]===u[$];if(l){r.k=e.k;return}r.k=r.m();var d=[];hn(e.k,r.k,d,0),d.length>0&&da(n,1,t,d);return;case 4:for(var b=e.j,g=r.j,C=!1,p=e.k;p.$===4;)C=!0,typeof b!="object"?b=[b,p.j]:b.push(p.j),p=p.k;for(var m=r.k;m.$===4;)C=!0,typeof g!="object"?g=[g,m.j]:g.push(m.j),m=m.k;if(C&&b.length!==g.length){da(n,0,t,r);return}(C?!L7(b,g):b!==g)&&da(n,2,t,g),hn(p,m,n,t+1);return;case 0:e.a!==r.a&&da(n,3,t,r.a);return;case 1:Nd(e,r,n,t,D7);return;case 2:Nd(e,r,n,t,T7);return;case 3:if(e.h!==r.h){da(n,0,t,r);return}var P=k0(e.d,r.d);P&&da(n,4,t,P);var _=r.i(e.g,r.g);_&&da(n,5,t,_);return}}}function L7(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Nd(e,r,n,t,o){if(e.c!==r.c||e.f!==r.f){da(n,0,t,r);return}var c=k0(e.d,r.d);c&&da(n,4,t,c),o(e,r,n,t)}function k0(e,r,n){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var c=k0(e[o],r[o]||{},o);c&&(t=t||{},t[o]=c);continue}if(!(o in r)){t=t||{},t[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var i=e[o],u=r[o];i===u&&o!=="value"&&o!=="checked"||n==="a0"&&w7(i,u)||(t=t||{},t[o]=u)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function D7(e,r,n,t){var o=e.e,c=r.e,i=o.length,u=c.length;i>u?da(n,6,t,{v:u,i:i-u}):i<u&&da(n,7,t,{v:i,e:c});for(var $=i<u?i:u,l=0;l<$;l++){var d=o[l];hn(d,c[l],n,++t),t+=d.b||0}}function T7(e,r,n,t){for(var o=[],c={},i=[],u=e.e,$=r.e,l=u.length,d=$.length,b=0,g=0,C=t;b<l&&g<d;){var p=u[b],m=$[g],P=p.a,_=m.a,j=p.b,L=m.b,T=void 0,U=void 0;if(P===_){C++,hn(j,L,o,C),C+=j.b||0,b++,g++;continue}var I=u[b+1],q=$[g+1];if(I){var Q=I.a,Z=I.b;U=_===Q}if(q){var ue=q.a,ye=q.b;T=P===ue}if(T&&U){C++,hn(j,ye,o,C),Ai(c,o,P,L,g,i),C+=j.b||0,C++,Fi(c,o,P,Z,C),C+=Z.b||0,b+=2,g+=2;continue}if(T){C++,Ai(c,o,_,L,g,i),hn(j,ye,o,C),C+=j.b||0,b+=1,g+=2;continue}if(U){C++,Fi(c,o,P,j,C),C+=j.b||0,C++,hn(Z,L,o,C),C+=Z.b||0,b+=2,g+=1;continue}if(I&&Q===ue){C++,Fi(c,o,P,j,C),Ai(c,o,_,L,g,i),C+=j.b||0,C++,hn(Z,ye,o,C),C+=Z.b||0,b+=2,g+=2;continue}break}for(;b<l;){C++;var p=u[b],j=p.b;Fi(c,o,p.a,j,C),C+=j.b||0,b++}for(;g<d;){var Me=Me||[],m=$[g];Ai(c,o,m.a,m.b,void 0,Me),g++}(o.length>0||i.length>0||Me)&&da(n,8,t,{w:o,x:i,y:Me})}var Jd="_elmW6BL";function Ai(e,r,n,t,o,c){var i=e[n];if(!i){i={c:0,z:t,r:o,s:void 0},c.push({r:o,A:i}),e[n]=i;return}if(i.c===1){c.push({r:o,A:i}),i.c=2;var u=[];hn(i.z,t,u,i.r),i.r=o,i.s.s={w:u,A:i};return}Ai(e,r,n+Jd,t,o,c)}function Fi(e,r,n,t,o){var c=e[n];if(!c){var i=da(r,9,o,void 0);e[n]={c:1,z:t,r:o,s:i};return}if(c.c===0){c.c=2;var u=[];hn(t,c.z,u,o),da(r,9,o,{w:u,A:c});return}Fi(e,r,n+Jd,t,o)}function Zd(e,r,n,t){Ei(e,r,n,0,0,r.b,t)}function Ei(e,r,n,t,o,c,i){for(var u=n[t],$=u.r;$===o;){var l=u.$;if(l===1)Zd(e,r.k,u.s,i);else if(l===8){u.t=e,u.u=i;var d=u.s.w;d.length>0&&Ei(e,r,d,0,o,c,i)}else if(l===9){u.t=e,u.u=i;var b=u.s;if(b){b.A.s=e;var d=b.w;d.length>0&&Ei(e,r,d,0,o,c,i)}}else u.t=e,u.u=i;if(t++,!(u=n[t])||($=u.r)>c)return t}var g=r.$;if(g===4){for(var C=r.k;C.$===4;)C=C.k;return Ei(e,C,n,t,o+1,c,e.elm_event_node_ref)}for(var p=r.e,m=e.childNodes,P=0;P<p.length;P++){o++;var _=g===1?p[P]:p[P].b,j=o+(_.b||0);if(o<=$&&$<=j&&(t=Ei(m[P],_,n,t,o,j,i),!(u=n[t])||($=u.r)>c))return t;o=j}return t}function Xd(e,r,n,t){return n.length===0?e:(Zd(e,r,n,t),Sf(e,n))}function Sf(e,r){for(var n=0;n<r.length;n++){var t=r[n],o=t.t,c=M7(o,t);o===e&&(e=c)}return e}function M7(e,r){switch(r.$){case 0:return z7(e,r.s,r.u);case 4:return x0(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Sf(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var c=r.s,t=0;t<c.i;t++)e.removeChild(e.childNodes[c.v]);return e;case 7:for(var c=r.s,n=c.e,t=c.v,o=e.childNodes[t];t<n.length;t++)e.insertBefore(Jt(n[t],r.u),o);return e;case 9:var c=r.s;if(!c)return e.parentNode.removeChild(e),e;var i=c.A;return typeof i.r<"u"&&e.parentNode.removeChild(e),i.s=Sf(e,c.w),e;case 8:return A7(e,r);case 5:return r.s(e);default:mn(10)}}function z7(e,r,n){var t=e.parentNode,o=Jt(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function A7(e,r){var n=r.s,t=F7(n.y,r);e=Sf(e,n.w);for(var o=n.x,c=0;c<o.length;c++){var i=o[c],u=i.A,$=u.c===2?u.s:Jt(u.z,r.u);e.insertBefore($,e.childNodes[i.r])}return t&&C0(e,t),e}function F7(e,r){if(e){for(var n=Zr.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],c=o.A;C0(n,c.c===2?c.s:Jt(c.z,r.u))}return n}}function w0(e){if(e.nodeType===3)return _0(e.textContent);if(e.nodeType!==1)return _0("");for(var r=S,n=e.attributes,t=n.length;t--;){var o=n[t],c=o.name,i=o.value;r=qn(a(yf,c,i),r)}for(var u=e.tagName.toLowerCase(),$=S,l=e.childNodes,t=l.length;t--;)$=qn(w0(l[t]),$);return v(xa,u,r,$)}function E7(e){for(var r=e.e,n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var H7,V7=H7||K(function(e,r,n,t){return p0(r,t,e.b_,e.uY,e.ay,function(o,c){var i=e.bp,u=t.node,$=w0(u);return Kd(c,function(l){var d=i(l),b=Wd($,d);u=Xd(u,$,b,o),$=d})})}),B7,U7=B7||K(function(e,r,n,t){return p0(r,t,e.b_,e.uY,e.ay,function(o,c){var i=e.kW&&e.kW(o),u=e.bp,$=Zr.title,l=Zr.body,d=w0(l);return Kd(c,function(b){_f=i;var g=u(b),C=xa("body")(S)(g.lP),p=Wd(d,C);l=Xd(l,d,p,o),d=C,_f=0,$!==g.pb&&(Zr.title=$=g.pb)})})}),R7=typeof cancelAnimationFrame<"u"?cancelAnimationFrame:function(e){clearTimeout(e)},Hi=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Kd(e,r){r(e);var n=0;function t(){n=n===1?0:(Hi(t),r(e),1)}return function(o,c){e=o,c?(r(e),n===2&&(n=1)):(n===0&&Hi(t),n=2)}}function kI(e){var r=e.th,n=e.ti,t=function(){t.a(r(L0()))};return U7({kW:function(o){return t.a=o,On.addEventListener("popstate",t),On.navigator.userAgent.indexOf("Trident")<0||On.addEventListener("hashchange",t),s(function(c,i){if(!i.ctrlKey&&!i.metaKey&&!i.shiftKey&&i.button<1&&!c.target&&!c.hasAttribute("download")){i.preventDefault();var u=c.href,$=L0(),l=f2(u).a;o(n(l&&$.ot===l.ot&&$.mN===l.mN&&$.om.a===l.om.a?v_(l):l_(u)))}})},b_:function(o){return v(e.b_,o,L0(),t)},bp:e.bp,uY:e.uY,ay:e.ay})}function L0(){return f2(Zr.location.href).a||mn(1)}var wI=s(function(e,r){return a(Xi,Lc,aa(function(){r&&history.go(r),e()}))}),LI=s(function(e,r){return a(Xi,Lc,aa(function(){history.pushState({},"",r),e()}))}),DI=s(function(e,r){return a(Xi,Lc,aa(function(){history.replaceState({},"",r),e()}))}),Yd={addEventListener:function(){},removeEventListener:function(){}},Po=typeof document<"u"?document:Yd,On=typeof window<"u"?window:Yd,I7=D(function(e,r,n){return s0(aa(function(t){function o(c){v0(n(c))}return e.addEventListener(r,o,j0&&{passive:!0}),function(){e.removeEventListener(r,o)}}))}),q7=s(function(e,r){var n=Xa(e,r);return Sn(n)?E(n.a):z});function TI(){return typeof Zr.hidden<"u"?{jP:"hidden",qp:"visibilitychange"}:typeof Zr.mozHidden<"u"?{jP:"mozHidden",qp:"mozvisibilitychange"}:typeof Zr.msHidden<"u"?{jP:"msHidden",qp:"msvisibilitychange"}:typeof Zr.webkitHidden<"u"?{jP:"webkitHidden",qp:"webkitvisibilitychange"}:{jP:"hidden",qp:"visibilitychange"}}function O7(){return aa(function(e){var r=Hi(function(){e(Ya(Date.now()))});return function(){R7(r)}})}function G7(){return aa(function(e){e(Ya(Date.now()))})}function xf(e,r){return aa(function(n){Hi(function(){var t=document.getElementById(e);n(t?Ya(r(t)):$0(s_(e)))})})}function W7(e){return aa(function(r){Hi(function(){r(Ya(e()))})})}var N7=s(function(e,r){return xf(r,function(n){return n[e](),yo})});function MI(){return{d1:Qd(),pt:{pC:On.pageXOffset,pD:On.pageYOffset,lt:Po.documentElement.clientWidth,jO:Po.documentElement.clientHeight}}}function Qd(){var e=Po.body,r=Po.documentElement;return{lt:Math.max(e.scrollWidth,e.offsetWidth,r.scrollWidth,r.offsetWidth,r.clientWidth),jO:Math.max(e.scrollHeight,e.offsetHeight,r.scrollHeight,r.offsetHeight,r.clientHeight)}}var zI=s(function(e,r){return W7(function(){return On.scroll(e,r),yo})});function AI(e){return xf(e,function(r){return{d1:{lt:r.scrollWidth,jO:r.scrollHeight},pt:{pC:r.scrollLeft,pD:r.scrollTop,lt:r.clientWidth,jO:r.clientHeight}}})}var J7=D(function(e,r,n){return xf(e,function(t){return t.scrollLeft=r,t.scrollTop=n,yo})});function FI(e){return xf(e,function(r){var n=r.getBoundingClientRect(),t=On.pageXOffset,o=On.pageYOffset;return{d1:Qd(),pt:{pC:t,pD:o,lt:Po.documentElement.clientWidth,jO:Po.documentElement.clientHeight},ri:{pC:t+n.left,pD:o+n.top,lt:n.width,jO:n.height}}})}function EI(e){return a(Xi,Lc,aa(function(r){Zr.location.reload(e)}))}function HI(e){return a(Xi,Lc,aa(function(r){try{On.location=e}catch{Zr.location.reload(!1)}}))}var Z7=Fr(function(e,r,n,t,o,c){var i=r!==9728&&r!==9729;return aa(function(u){var $=new Image;function l(d){var b=d.createTexture();return d.bindTexture(d.TEXTURE_2D,b),d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,$),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,e),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,r),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,n),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,t),i&&d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null),b}$.onload=function(){var d=$.width,b=$.height,g=(d&d-1)===0,C=(b&b-1)===0,p=g&&C||!i&&n===33071&&t===33071;u(p?Ya({$:0,qM:l,a:d,b}):$0(a(RS,d,b)))},$.onerror=function(){u($0(US))},c.slice(0,5)!=="data:"&&($.crossOrigin="Anonymous"),$.src=c})}),VI=function(e){return y(e.a,e.b)},X7=D(function(e,r,n){return Rd(r,{a:e,b:n},K7,Y7)});function K7(e){return a(eb,e,Zr.createElement("div"))}function Y7(e,r){return e.b===r.b&&e.a===r.a?!1:eb(r)}var eb=s(function(e,r){return r.innerHTML=Q7(e.b,eg(e.a)),r}),Q7=(function(){var e={},r=e.exports={};return(function(){var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:b,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:b,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:b,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};n.bullet=/(?:[*+-]|\d+\.)/,n.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,n.item=d(n.item,"gm")(/bull/g,n.bullet)(),n.list=d(n.list)(/bull/g,n.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+n.def.source+")")(),n.blockquote=d(n.blockquote)("def",n.def)(),n._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",n.html=d(n.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,n._tag)(),n.paragraph=d(n.paragraph)("hr",n.hr)("heading",n.heading)("lheading",n.lheading)("blockquote",n.blockquote)("tag","<"+n._tag)("def",n.def)(),n.normal=g({},n),n.gfm=g({},n.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=d(n.paragraph)("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|")(),n.tables=g({},n.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function t(p){this.tokens=[],this.tokens.links={},this.options=p||C.defaults,this.rules=n.normal,this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}t.rules=n,t.lex=function(p,m){var P=new t(m);return P.lex(p)},t.prototype.lex=function(p){return p=p.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,`
`),this.token(p,!0)},t.prototype.token=function(_,m,P){for(var _=_.replace(/^ +$/gm,""),j,L,T,U,I,q,Q,Z,ue;_;){if((T=this.rules.newline.exec(_))&&(_=_.substring(T[0].length),T[0].length>1&&this.tokens.push({type:"space"})),T=this.rules.code.exec(_)){_=_.substring(T[0].length),T=T[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?T:T.replace(/\n+$/,"")});continue}if(T=this.rules.fences.exec(_)){_=_.substring(T[0].length),this.tokens.push({type:"code",lang:T[2],text:T[3]||""});continue}if(T=this.rules.heading.exec(_)){_=_.substring(T[0].length),this.tokens.push({type:"heading",depth:T[1].length,text:T[2]});continue}if(m&&(T=this.rules.nptable.exec(_))){for(_=_.substring(T[0].length),q={type:"table",header:T[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:T[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:T[3].replace(/\n$/,"").split(`
`)},Z=0;Z<q.align.length;Z++)/^ *-+: *$/.test(q.align[Z])?q.align[Z]="right":/^ *:-+: *$/.test(q.align[Z])?q.align[Z]="center":/^ *:-+ *$/.test(q.align[Z])?q.align[Z]="left":q.align[Z]=null;for(Z=0;Z<q.cells.length;Z++)q.cells[Z]=q.cells[Z].split(/ *\| */);this.tokens.push(q);continue}if(T=this.rules.lheading.exec(_)){_=_.substring(T[0].length),this.tokens.push({type:"heading",depth:T[2]==="="?1:2,text:T[1]});continue}if(T=this.rules.hr.exec(_)){_=_.substring(T[0].length),this.tokens.push({type:"hr"});continue}if(T=this.rules.blockquote.exec(_)){_=_.substring(T[0].length),this.tokens.push({type:"blockquote_start"}),T=T[0].replace(/^ *> ?/gm,""),this.token(T,m,!0),this.tokens.push({type:"blockquote_end"});continue}if(T=this.rules.list.exec(_)){for(_=_.substring(T[0].length),U=T[2],this.tokens.push({type:"list_start",ordered:U.length>1}),T=T[0].match(this.rules.item),j=!1,ue=T.length,Z=0;Z<ue;Z++)q=T[Z],Q=q.length,q=q.replace(/^ *([*+-]|\d+\.) +/,""),~q.indexOf(`
 `)&&(Q-=q.length,q=this.options.pedantic?q.replace(/^ {1,4}/gm,""):q.replace(new RegExp("^ {1,"+Q+"}","gm"),"")),this.options.smartLists&&Z!==ue-1&&(I=n.bullet.exec(T[Z+1])[0],U!==I&&!(U.length>1&&I.length>1)&&(_=T.slice(Z+1).join(`
`)+_,Z=ue-1)),L=j||/\n\n(?!\s*$)/.test(q),Z!==ue-1&&(j=q.charAt(q.length-1)===`
`,L||(L=j)),this.tokens.push({type:L?"loose_item_start":"list_item_start"}),this.token(q,!1,P),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"});continue}if(T=this.rules.html.exec(_)){_=_.substring(T[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(T[1]==="pre"||T[1]==="script"||T[1]==="style"),text:T[0]});continue}if(!P&&m&&(T=this.rules.def.exec(_))){_=_.substring(T[0].length),this.tokens.links[T[1].toLowerCase()]={href:T[2],title:T[3]};continue}if(m&&(T=this.rules.table.exec(_))){for(_=_.substring(T[0].length),q={type:"table",header:T[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:T[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:T[3].replace(/(?: *\| *)?\n$/,"").split(`
`)},Z=0;Z<q.align.length;Z++)/^ *-+: *$/.test(q.align[Z])?q.align[Z]="right":/^ *:-+: *$/.test(q.align[Z])?q.align[Z]="center":/^ *:-+ *$/.test(q.align[Z])?q.align[Z]="left":q.align[Z]=null;for(Z=0;Z<q.cells.length;Z++)q.cells[Z]=q.cells[Z].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(q);continue}if(m&&(T=this.rules.paragraph.exec(_))){_=_.substring(T[0].length),this.tokens.push({type:"paragraph",text:T[1].charAt(T[1].length-1)===`
`?T[1].slice(0,-1):T[1]});continue}if(T=this.rules.text.exec(_)){_=_.substring(T[0].length),this.tokens.push({type:"text",text:T[0]});continue}if(_)throw new Error("Infinite loop on byte: "+_.charCodeAt(0))}return this.tokens};var o={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:b,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^_\_([\s\S]+?)_\_(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|_\_)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:b,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};o._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,o._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,o.link=d(o.link)("inside",o._inside)("href",o._href)(),o.reflink=d(o.reflink)("inside",o._inside)(),o.normal=g({},o),o.pedantic=g({},o.normal,{strong:/^_\_(?=\S)([\s\S]*?\S)_\_(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),o.gfm=g({},o.normal,{escape:d(o.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:d(o.text)("]|","~]|")("|","|https?://|")()}),o.breaks=g({},o.gfm,{br:d(o.br)("{2,}","*")(),text:d(o.gfm.text)("{2,}","*")()});function c(p,m){if(this.options=m||C.defaults,this.links=p,this.rules=o.normal,this.renderer=this.options.renderer||new i,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=o.breaks:this.rules=o.gfm:this.options.pedantic&&(this.rules=o.pedantic)}c.rules=o,c.output=function(p,m,P){var _=new c(m,P);return _.output(p)},c.prototype.output=function(p){for(var m="",P,_,j,L;p;){if(L=this.rules.escape.exec(p)){p=p.substring(L[0].length),m+=L[1];continue}if(L=this.rules.autolink.exec(p)){p=p.substring(L[0].length),L[2]==="@"?(_=L[1].charAt(6)===":"?this.mangle(L[1].substring(7)):this.mangle(L[1]),j=this.mangle("mailto:")+_):(_=$(L[1]),j=_),m+=this.renderer.link(j,null,_);continue}if(!this.inLink&&(L=this.rules.url.exec(p))){p=p.substring(L[0].length),_=$(L[1]),j=_,m+=this.renderer.link(j,null,_);continue}if(L=this.rules.tag.exec(p)){!this.inLink&&/^<a /i.test(L[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(L[0])&&(this.inLink=!1),p=p.substring(L[0].length),m+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(L[0]):$(L[0]):L[0];continue}if(L=this.rules.link.exec(p)){p=p.substring(L[0].length),this.inLink=!0,m+=this.outputLink(L,{href:L[2],title:L[3]}),this.inLink=!1;continue}if((L=this.rules.reflink.exec(p))||(L=this.rules.nolink.exec(p))){if(p=p.substring(L[0].length),P=(L[2]||L[1]).replace(/\s+/g," "),P=this.links[P.toLowerCase()],!P||!P.href){m+=L[0].charAt(0),p=L[0].substring(1)+p;continue}this.inLink=!0,m+=this.outputLink(L,P),this.inLink=!1;continue}if(L=this.rules.strong.exec(p)){p=p.substring(L[0].length),m+=this.renderer.strong(this.output(L[2]||L[1]));continue}if(L=this.rules.em.exec(p)){p=p.substring(L[0].length),m+=this.renderer.em(this.output(L[2]||L[1]));continue}if(L=this.rules.code.exec(p)){p=p.substring(L[0].length),m+=this.renderer.codespan($(L[2],!0));continue}if(L=this.rules.br.exec(p)){p=p.substring(L[0].length),m+=this.renderer.br();continue}if(L=this.rules.del.exec(p)){p=p.substring(L[0].length),m+=this.renderer.del(this.output(L[1]));continue}if(L=this.rules.text.exec(p)){p=p.substring(L[0].length),m+=this.renderer.text($(this.smartypants(L[0])));continue}if(p)throw new Error("Infinite loop on byte: "+p.charCodeAt(0))}return m},c.prototype.outputLink=function(p,m){var P=$(m.href),_=m.title?$(m.title):null;return p[0].charAt(0)!=="!"?this.renderer.link(P,_,this.output(p[1])):this.renderer.image(P,_,$(p[1]))},c.prototype.smartypants=function(p){return this.options.smartypants?p.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026"):p},c.prototype.mangle=function(p){if(!this.options.mangle)return p;for(var m="",P=p.length,_=0,j;_<P;_++)j=p.charCodeAt(_),Math.random()>.5&&(j="x"+j.toString(16)),m+="&#"+j+";";return m};function i(p){this.options=p||{}}i.prototype.code=function(p,m,P){if(this.options.highlight){var _=this.options.highlight(p,m);_!=null&&_!==p&&(P=!0,p=_)}return m?'<pre><code class="'+this.options.langPrefix+$(m,!0)+'">'+(P?p:$(p,!0))+`
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
`},i.prototype.tablecell=function(p,m){var P=m.header?"th":"td",_=m.align?"<"+P+' style="text-align:'+m.align+'">':"<"+P+">";return _+p+"</"+P+`>
`},i.prototype.strong=function(p){return"<strong>"+p+"</strong>"},i.prototype.em=function(p){return"<em>"+p+"</em>"},i.prototype.codespan=function(p){return"<code>"+p+"</code>"},i.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},i.prototype.del=function(p){return"<del>"+p+"</del>"},i.prototype.link=function(p,m,P){if(this.options.sanitize){try{var _=decodeURIComponent(l(p)).replace(/[^\w:]/g,"").toLowerCase()}catch{return""}if(_.indexOf("javascript:")===0||_.indexOf("vbscript:")===0||_.indexOf("data:")===0)return""}var j='<a href="'+p+'"';return m&&(j+=' title="'+m+'"'),j+=">"+P+"</a>",j},i.prototype.image=function(p,m,P){var _='<img src="'+p+'" alt="'+P+'"';return m&&(_+=' title="'+m+'"'),_+=this.options.xhtml?"/>":">",_},i.prototype.text=function(p){return p};function u(p){this.tokens=[],this.token=null,this.options=p||C.defaults,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options}u.parse=function(p,m,P){var _=new u(m,P);return _.parse(p)},u.prototype.parse=function(p){this.inline=new c(p.links,this.options,this.renderer),this.tokens=p.reverse();for(var m="";this.next();)m+=this.tok();return m},u.prototype.next=function(){return this.token=this.tokens.pop()},u.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},u.prototype.parseText=function(){for(var p=this.token.text;this.peek().type==="text";)p+=`
`+this.next().text;return this.inline.output(p)},u.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{var p="",m="",P,_,j,L,T;for(j="",P=0;P<this.token.header.length;P++)L={header:!0,align:this.token.align[P]},j+=this.renderer.tablecell(this.inline.output(this.token.header[P]),{header:!0,align:this.token.align[P]});for(p+=this.renderer.tablerow(j),P=0;P<this.token.cells.length;P++){for(_=this.token.cells[P],j="",T=0;T<_.length;T++)j+=this.renderer.tablecell(this.inline.output(_[T]),{header:!1,align:this.token.align[T]});m+=this.renderer.tablerow(j)}return this.renderer.table(p,m)}case"blockquote_start":{for(var m="";this.next().type!=="blockquote_end";)m+=this.tok();return this.renderer.blockquote(m)}case"list_start":{for(var m="",U=this.token.ordered;this.next().type!=="list_end";)m+=this.tok();return this.renderer.list(m,U)}case"list_item_start":{for(var m="";this.next().type!=="list_item_end";)m+=this.token.type==="text"?this.parseText():this.tok();return this.renderer.listitem(m)}case"loose_item_start":{for(var m="";this.next().type!=="list_item_end";)m+=this.tok();return this.renderer.listitem(m)}case"html":{var I=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(I)}case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};function $(p,m){return p.replace(m?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(p){return p.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(m,P){return P=P.toLowerCase(),P==="colon"?":":P.charAt(0)==="#"?P.charAt(1)==="x"?String.fromCharCode(parseInt(P.substring(2),16)):String.fromCharCode(+P.substring(1)):""})}function d(p,m){return p=p.source,m=m||"",function P(_,j){return _?(j=j.source||j,j=j.replace(/(^|[^\[])\^/g,"$1"),p=p.replace(_,j),P):new RegExp(p,m)}}function b(){}b.exec=b;function g(p){for(var m=1,P,_;m<arguments.length;m++){P=arguments[m];for(_ in P)Object.prototype.hasOwnProperty.call(P,_)&&(p[_]=P[_])}return p}function C(p,m,P){if(P||typeof m=="function"){P||(P=m,m=null),m=g({},C.defaults,m||{});var _=m.highlight,j,L,T=0;try{j=t.lex(p,m)}catch(I){return P(I)}L=j.length;var U=function(I){if(I)return m.highlight=_,P(I);var q;try{q=u.parse(j,m)}catch(Q){I=Q}return m.highlight=_,I?P(I):P(null,q)};if(!_||_.length<3||(delete m.highlight,!L))return U();for(;T<j.length;T++)(function(I){return I.type!=="code"?--L||U():_(I.text,I.lang,function(q,Q){if(q)return U(q);if(Q==null||Q===I.text)return--L||U();I.text=Q,I.escaped=!0,--L||U()})})(j[T]);return}try{return m&&(m=g({},C.defaults,m)),u.parse(t.lex(p,m),m)}catch(I){if(I.message+=`
Please report this to https://github.com/chjj/marked.`,(m||C.defaults).silent)return"<p>An error occured:</p><pre>"+$(I.message+"",!0)+"</pre>";throw I}}C.options=C.setOptions=function(p){return g(C.defaults,p),C},C.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new i,xhtml:!1},C.Parser=u,C.parser=u.parse,C.Renderer=i,C.Lexer=t,C.lexer=t.lex,C.InlineLexer=c,C.inlineLexer=c.output,C.parse=C,typeof e<"u"&&typeof r=="object"?e.exports=C:typeof define=="function"&&define.amd?define(function(){return C}):this.marked=C}).call((function(){return this||(typeof window<"u"?window:global)})()),e.exports})();function eg(e){function r(t,o){return!o&&Xz(e.qW)&&(o=e.qW.a),typeof hljs<"u"&&o&&hljs.listLanguages().indexOf(o)>=0?hljs.highlight(o,t,!0).value:t}var n=e.rR.a;return{highlight:r,gfm:n,tables:n&&n.uC,breaks:n&&n.p9,sanitize:e.t1,smartypants:e.ui}}var rb=0;function Vi(e,r){for(;r.b;r=r.b)e(r.a)}function D0(e){for(var r=0;e.b;e=e.b)r++;return r}var rg=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ag=Le(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),ng=s(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),tg=s(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),og=s(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),cg=s(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ig=s(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ug=s(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),fg=s(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),$g=s(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),lg=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},vg=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},sg=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},dg=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},ab=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},nb=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},bg=function(e){e.gl.disable(e.gl.CULL_FACE)},pg=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},mg=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},hg=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},tb=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],gg=[vg,sg,dg,ab,nb,bg,pg,mg,hg];function ob(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Cg(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function cb(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function _g(e,r,n,t){for(var o=n.a.ml,c=[],i=0;i<o;i++)c.push(String.fromCharCode(97+i));function u(C,p,m,P,_){var j;if(o===1)for(j=0;j<p;j++)C[m++]=p===1?P[_]:P[_][j];else c.forEach(function(L){for(j=0;j<p;j++)C[m++]=p===1?P[L][_]:P[L][_][j]})}var $=cb(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var l=0,d=$.size*$.arraySize*o,b=new $.type(D0(n.b)*d);Vi(function(C){u(b,$.size*$.arraySize,l,C,t[r.name]||r.name),l+=d},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,b,e.STATIC_DRAW),g}function yg(e,r){if(r.a.mS>0){var n=e.createBuffer(),t=Pg(r.c,r.a.mS);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.ml*D0(r.b),indexBuffer:null,buffers:{}}}function Pg(e,r){var n=new Uint32Array(D0(e)*r),t=0,o;return Vi(function(c){if(r===1)n[t++]=c;else for(o=0;o<r;o++)n[t++]=c[String.fromCharCode(97+o)]},e),n}function ib(e,r){return e+"#"+r}var ub=s(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),ab(n),nb(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(c){if(c.d.b.b){var i,u,$;if(c.b.id&&c.c.id&&(i=ib(c.b.id,c.c.id),u=n.programs[i]),!u){var l;c.b.id?l=n.shaders[c.b.id]:c.b.id=rb++,l||(l=ob(t,c.b.src,t.VERTEX_SHADER),n.shaders[c.b.id]=l);var d;c.c.id?d=n.shaders[c.c.id]:c.c.id=rb++,d||(d=ob(t,c.c.src,t.FRAGMENT_SHADER),n.shaders[c.c.id]=d);var b=Cg(t,l,d);u={glProgram:b,attributes:Object.assign({},c.b.attributes,c.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},u.uniformSetters=Sg(t,e,u,Object.assign({},c.b.uniforms,c.c.uniforms));var g=t.getProgramParameter(b,t.ACTIVE_ATTRIBUTES);for($=0;$<g;$++){var C=t.getActiveAttrib(b,$),p=t.getAttribLocation(b,C.name);u.activeAttributes.push(C),u.activeAttributeLocations.push(p)}i=ib(c.b.id,c.c.id),n.programs[i]=u}n.lastProgId!==i&&(t.useProgram(u.glProgram),n.lastProgId=i),xg(u.uniformSetters,c.e);var m=n.buffers.get(c.d);for(m||(m=yg(t,c.d),n.buffers.set(c.d,m)),$=0;$<u.activeAttributes.length;$++){C=u.activeAttributes[$],p=u.activeAttributeLocations[$],m.buffers[C.name]===void 0&&(m.buffers[C.name]=_g(t,C,c.d,u.attributes)),t.bindBuffer(t.ARRAY_BUFFER,m.buffers[C.name]);var P=cb(t,C.type);if(P.arraySize===1)t.enableVertexAttribArray(p),t.vertexAttribPointer(p,P.size,P.baseType,!1,0,0);else for(var _=P.size*4,j=_*P.arraySize,L=0;L<P.arraySize;L++)t.enableVertexAttribArray(p+L),t.vertexAttribPointer(p+L,P.size,P.baseType,!1,j,_*L)}for(n.toggle=!n.toggle,Vi(oF(n),c.a),$=0;$<tb.length;$++){var T=n[tb[$]];T.toggle!==n.toggle&&T.enabled&&(gg[$](n),T.enabled=!1,T.toggle=n.toggle)}m.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,m.indexBuffer),t.drawElements(c.d.a.nR,m.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(c.d.a.nR,0,m.numIndices)}}return Vi(o,e.g),r});function Sg(e,r,n,t){var o=n.glProgram,c=n.currentUniforms,i=0,u=r.f;function $(C,p){var m=p.name,P=e.getUniformLocation(C,m);switch(p.type){case e.INT:return function(j){c[m]!==j&&(e.uniform1i(P,j),c[m]=j)};case e.FLOAT:return function(j){c[m]!==j&&(e.uniform1f(P,j),c[m]=j)};case e.FLOAT_VEC2:return function(j){c[m]!==j&&(e.uniform2f(P,j[0],j[1]),c[m]=j)};case e.FLOAT_VEC3:return function(j){c[m]!==j&&(e.uniform3f(P,j[0],j[1],j[2]),c[m]=j)};case e.FLOAT_VEC4:return function(j){c[m]!==j&&(e.uniform4f(P,j[0],j[1],j[2],j[3]),c[m]=j)};case e.FLOAT_MAT4:return function(j){c[m]!==j&&(e.uniformMatrix4fv(P,!1,new Float32Array(j)),c[m]=j)};case e.SAMPLER_2D:var _=i++;return function(j){e.activeTexture(e.TEXTURE0+_);var L=u.textures.get(j);L||(L=j.qM(e),u.textures.set(j,L)),e.bindTexture(e.TEXTURE_2D,L),c[m]!==j&&(e.uniform1i(P,_),c[m]=j)};case e.BOOL:return function(j){c[m]!==j&&(e.uniform1i(P,j),c[m]=j)};default:return function(){}}}for(var l={},d=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),b=0;b<d;b++){var g=e.getActiveUniform(o,b);l[t[g.name]||g.name]=$(o,g)}return l}function xg(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var jg=D(function(e,r,n){return Rd(r,{g:n,f:{},h:e},zg,Ag)}),kg=s(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),wg=s(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Lg=s(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Dg=s(function(e,r){e.contextAttributes.antialias=!0}),Tg=s(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Mg=s(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function zg(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Vi(function(o){return a(tF,r,o)},e.h);var n=Zr.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),rg(function(){return a(ub,e,n)})):(n=Zr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ag(e,r){return r.f=e.f,ub(r)}var Fg=s(function(e,r){return new Float64Array([e,r])}),BI=function(e){return e[0]},UI=function(e){return e[1]},RI=s(function(e,r){return new Float64Array([e,r[1]])}),II=s(function(e,r){return new Float64Array([r[0],e])}),qI=function(e){return{pC:e[0],pD:e[1]}},OI=function(e){return new Float64Array([e.pC,e.pD])},GI=s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n}),WI=s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n}),NI=function(e){var r=new Float64Array(2);return r[0]=-e[0],r[1]=-e[1],r},JI=s(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/T0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function T0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}var ZI=T0,XI=function(e){return e[0]*e[0]+e[1]*e[1]},KI=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)}),YI=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t}),QI=function(e){var r=new Float64Array(2),n=1/T0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r},eq=s(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n}),rq=s(function(e,r){return e[0]*r[0]+e[1]*r[1]}),M0=new Float64Array(3),fb=new Float64Array(3),$b=new Float64Array(3),Eg=D(function(e,r,n){return new Float64Array([e,r,n])}),Hg=function(e){return e[0]},Vg=function(e){return e[1]},Bg=function(e){return e[2]},aq=s(function(e,r){return new Float64Array([e,r[1],r[2]])}),nq=s(function(e,r){return new Float64Array([r[0],e,r[2]])}),tq=s(function(e,r){return new Float64Array([r[0],r[1],e])}),oq=function(e){return{pC:e[0],pD:e[1],L:e[2]}},Ug=function(e){return new Float64Array([e.pC,e.pD,e.L])},cq=s(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function lb(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}var iq=s(lb),uq=function(e){var r=new Float64Array(3);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r};function vb(e,r,n){return n===void 0&&(n=new Float64Array(3)),Bi(lb(e,r,n),n)}var fq=s(vb);function z0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}var $q=z0,lq=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},vq=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+t*t+o*o)}),sq=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return n*n+t*t+o*o});function Bi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/z0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var dq=Bi,bq=s(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Zt=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]},pq=s(Zt);function A0(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}var mq=s(A0),hq=s(function(e,r){var n,t=M0,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Zt(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(Zt(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(Zt(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(Zt(r,t)+e[14])/n,o}),Rg=K(function(e,r,n,t){return new Float64Array([e,r,n,t])}),Ig=function(e){return e[0]},qg=function(e){return e[1]},Og=function(e){return e[2]},Gg=function(e){return e[3]},gq=s(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])}),Cq=s(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])}),_q=s(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])}),yq=s(function(e,r){return new Float64Array([r[0],r[1],r[2],e])}),Wg=function(e){return{pC:e[0],pD:e[1],L:e[2],u7:e[3]}},Ng=function(e){return new Float64Array([e.pC,e.pD,e.L,e.u7])},Pq=s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n}),Sq=s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n}),xq=function(e){var r=new Float64Array(4);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r},jq=s(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/F0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function F0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}var kq=F0,wq=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]},Lq=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return Math.sqrt(n*n+t*t+o*o+c*c)}),Dq=s(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return n*n+t*t+o*o+c*c}),Tq=function(e){var r=new Float64Array(4),n=1/F0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r},Jg=s(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n}),Mq=s(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}),Zg=new Float64Array(16),Xg=new Float64Array(16),zq=new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Kg=function(e){var r=new Float64Array(16);return r[0]=e.np,r[1]=e.nt,r[2]=e.nx,r[3]=e.nB,r[4]=e.nq,r[5]=e.nu,r[6]=e.ny,r[7]=e.nC,r[8]=e.nr,r[9]=e.nv,r[10]=e.nz,r[11]=e.nD,r[12]=e.ns,r[13]=e.nw,r[14]=e.nA,r[15]=e.nE,r},Yg=function(e){return{np:e[0],nt:e[1],nx:e[2],nB:e[3],nq:e[4],nu:e[5],ny:e[6],nC:e[7],nr:e[8],nv:e[9],nz:e[10],nD:e[11],ns:e[12],nw:e[13],nA:e[14],nE:e[15]}},Aq=function(e){var r=new Float64Array(16);r[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],r[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],r[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],r[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],r[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],r[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],r[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],r[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],r[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],r[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],r[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],r[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5];var n=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12];if(n===0)return z;n=1/n;for(var t=0;t<16;t=t+1)r[t]=r[t]*n;return E(r)},Fq=function(e){var r=hb(e),n=[e[12],e[13],e[14]];return r[3]=r[7]=r[11]=0,r[12]=-Zt([r[0],r[4],r[8]],n),r[13]=-Zt([r[1],r[5],r[9]],n),r[14]=-Zt([r[2],r[6],r[10]],n),r};function sb(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2*o/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/(t-n),i[6]=0,i[7]=0,i[8]=(r+e)/(r-e),i[9]=(t+n)/(t-n),i[10]=-(c+o)/(c-o),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*c*o/(c-o),i[15]=0,i}var Eq=Fr(sb),Hq=K(function(e,r,n,t){var o=n*Math.tan(e*Math.PI/360),c=-o,i=c*r,u=o*r;return sb(i,u,c,o,n,t)});function db(e,r,n,t,o,c){var i=new Float64Array(16);return i[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-n),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2/(c-o),i[11]=0,i[12]=-(r+e)/(r-e),i[13]=-(t+n)/(t-n),i[14]=-(c+o)/(c-o),i[15]=1,i}var Vq=Fr(db),Bq=K(function(e,r,n,t){return db(e,r,n,t,-1,1)});function bb(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[3],u=e[4],$=e[5],l=e[6],d=e[7],b=e[8],g=e[9],C=e[10],p=e[11],m=e[12],P=e[13],_=e[14],j=e[15],L=r[0],T=r[1],U=r[2],I=r[3],q=r[4],Q=r[5],Z=r[6],ue=r[7],ye=r[8],Me=r[9],Ve=r[10],Xe=r[11],ee=r[12],Re=r[13],Ke=r[14],Ne=r[15];return n[0]=t*L+u*T+b*U+m*I,n[1]=o*L+$*T+g*U+P*I,n[2]=c*L+l*T+C*U+_*I,n[3]=i*L+d*T+p*U+j*I,n[4]=t*q+u*Q+b*Z+m*ue,n[5]=o*q+$*Q+g*Z+P*ue,n[6]=c*q+l*Q+C*Z+_*ue,n[7]=i*q+d*Q+p*Z+j*ue,n[8]=t*ye+u*Me+b*Ve+m*Xe,n[9]=o*ye+$*Me+g*Ve+P*Xe,n[10]=c*ye+l*Me+C*Ve+_*Xe,n[11]=i*ye+d*Me+p*Ve+j*Xe,n[12]=t*ee+u*Re+b*Ke+m*Ne,n[13]=o*ee+$*Re+g*Ke+P*Ne,n[14]=c*ee+l*Re+C*Ke+_*Ne,n[15]=i*ee+d*Re+p*Ke+j*Ne,n}var Uq=s(bb),Rq=s(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[4],u=e[5],$=e[6],l=e[8],d=e[9],b=e[10],g=e[12],C=e[13],p=e[14],m=r[0],P=r[1],_=r[2],j=r[4],L=r[5],T=r[6],U=r[8],I=r[9],q=r[10],Q=r[12],Z=r[13],ue=r[14];return n[0]=t*m+i*P+l*_,n[1]=o*m+u*P+d*_,n[2]=c*m+$*P+b*_,n[3]=0,n[4]=t*j+i*L+l*T,n[5]=o*j+u*L+d*T,n[6]=c*j+$*L+b*T,n[7]=0,n[8]=t*U+i*I+l*q,n[9]=o*U+u*I+d*q,n[10]=c*U+$*I+b*q,n[11]=0,n[12]=t*Q+i*Z+l*ue+g,n[13]=o*Q+u*Z+d*ue+C,n[14]=c*Q+$*Z+b*ue+p,n[15]=1,n}),Iq=s(function(e,r){var n=new Float64Array(16);r=Bi(r,M0);var t=r[0],o=r[1],c=r[2],i=Math.cos(e),u=1-i,$=Math.sin(e);return n[0]=t*t*u+i,n[1]=o*t*u+c*$,n[2]=c*t*u-o*$,n[3]=0,n[4]=t*o*u-c*$,n[5]=o*o*u+i,n[6]=o*c*u+t*$,n[7]=0,n[8]=t*c*u+o*$,n[9]=o*c*u-t*$,n[10]=c*c*u+i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}),qq=D(function(e,r,n){var t=new Float64Array(16),o=1/z0(r),c=r[0]*o,i=r[1]*o,u=r[2]*o,$=Math.cos(e),l=1-$,d=Math.sin(e),b=c*d,g=i*d,C=u*d,p=c*i*l,m=c*u*l,P=i*u*l,_=c*c*l+$,j=p+C,L=m-g,T=p-C,U=i*i*l+$,I=P+b,q=m+g,Q=P-b,Z=u*u*l+$,ue=n[0],ye=n[1],Me=n[2],Ve=n[3],Xe=n[4],ee=n[5],Re=n[6],Ke=n[7],Ne=n[8],yr=n[9],qe=n[10],cr=n[11],pr=n[12],Nr=n[13],Ha=n[14],Na=n[15];return t[0]=ue*_+Xe*j+Ne*L,t[1]=ye*_+ee*j+yr*L,t[2]=Me*_+Re*j+qe*L,t[3]=Ve*_+Ke*j+cr*L,t[4]=ue*T+Xe*U+Ne*I,t[5]=ye*T+ee*U+yr*I,t[6]=Me*T+Re*U+qe*I,t[7]=Ve*T+Ke*U+cr*I,t[8]=ue*q+Xe*Q+Ne*Z,t[9]=ye*q+ee*Q+yr*Z,t[10]=Me*q+Re*Q+qe*Z,t[11]=Ve*q+Ke*Q+cr*Z,t[12]=pr,t[13]=Nr,t[14]=Ha,t[15]=Na,t});function pb(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}var Oq=D(pb),Gq=function(e){return pb(e[0],e[1],e[2])},Wq=K(function(e,r,n,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*n,o[9]=t[9]*n,o[10]=t[10]*n,o[11]=t[11]*n,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o}),Nq=s(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=r[11]*c,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function mb(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}var Jq=D(mb),Zq=function(e){return mb(e[0],e[1],e[2])},Xq=K(function(e,r,n,t){var o=new Float64Array(16),c=t[0],i=t[1],u=t[2],$=t[3],l=t[4],d=t[5],b=t[6],g=t[7],C=t[8],p=t[9],m=t[10],P=t[11];return o[0]=c,o[1]=i,o[2]=u,o[3]=$,o[4]=l,o[5]=d,o[6]=b,o[7]=g,o[8]=C,o[9]=p,o[10]=m,o[11]=P,o[12]=c*e+l*r+C*n+t[12],o[13]=i*e+d*r+p*n+t[13],o[14]=u*e+b*r+m*n+t[14],o[15]=$*e+g*r+P*n+t[15],o}),Kq=s(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=r[0],u=r[1],$=r[2],l=r[3],d=r[4],b=r[5],g=r[6],C=r[7],p=r[8],m=r[9],P=r[10],_=r[11];return n[0]=i,n[1]=u,n[2]=$,n[3]=l,n[4]=d,n[5]=b,n[6]=g,n[7]=C,n[8]=p,n[9]=m,n[10]=P,n[11]=_,n[12]=i*t+d*o+p*c+r[12],n[13]=u*t+b*o+m*c+r[13],n[14]=$*t+g*o+P*c+r[14],n[15]=l*t+C*o+_*c+r[15],n}),Yq=D(function(e,r,n){var t=vb(e,r,M0),o=Bi(A0(n,t,fb),fb),c=Bi(A0(t,o,$b),$b),i=Zg,u=Xg;return i[0]=o[0],i[1]=c[0],i[2]=t[0],i[3]=0,i[4]=o[1],i[5]=c[1],i[6]=t[1],i[7]=0,i[8]=o[2],i[9]=c[2],i[10]=t[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=-e[0],u[13]=-e[1],u[14]=-e[2],u[15]=1,bb(i,u)});function hb(e){var r=new Float64Array(16);return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],r}var Qq=hb,eO=D(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}),M=u9,jf=Z8,E0=D(function(e,r,n){var t=n.c,o=n.d,c=s(function(i,u){if(i.$){var l=i.a;return v(jf,e,u,l)}else{var $=i.a;return v(jf,c,u,$)}});return v(jf,c,v(jf,e,r,o),t)}),Qg=function(e){return v(E0,M,S,e)},kf=D(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,u=e,$=v(e,t,o,v(kf,e,r,i)),l=c;e=u,r=$,n=l;continue e}}),Qa=function(e){return v(kf,D(function(r,n,t){return a(M,y(r,n),t)}),S,e)},wf=function(e){return v(kf,D(function(r,n,t){return a(M,r,t)}),S,e)},eC=function(e){var r=e;return wf(r)},gb=1,rC=2,Cb=0,H0=function(e){return{$:0,a:e}},E=function(e){return{$:0,a:e}},z={$:1},V0=function(e){return{$:1,a:e}},rO=0,Va=function(e){return{$:1,a:e}},B0=s(function(e,r){return{$:3,a:e,b:r}}),_b=s(function(e,r){return{$:0,a:e,b:r}}),yb=s(function(e,r){return{$:1,a:e,b:r}}),ta=function(e){return{$:0,a:e}},aC=function(e){return{$:2,a:e}},aO=1,Pb=s9,nC=K9,nO=E9,tC=i9,Sb=Th,rr=kd,Lr=s(function(e,r){return a(W9,e,hf(r))}),gn=s(function(e,r){return f(a(G9,e,r))}),xb=function(e){return a(Lr,`
    `,a(gn,`
`,e))},me=D(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b,c=e,i=a(e,t,r),u=o;e=c,r=i,n=u;continue e}else return r}),Dr=function(e){return v(me,s(function(r,n){return n+1}),0,e)},U0=f9,tO=n9,oO=d9,oC=D(function(e,r,n){e:for(;;)if(ce(e,r)<1){var t=e,o=r-1,c=a(M,r,n);e=t,r=o,n=c;continue e}else return n}),Cn=s(function(e,r){return v(oC,e,r,S)}),_n=s(function(e,r){return v(U0,e,a(Cn,0,Dr(r)-1),r)}),st=oh,jb=function(e){var r=st(e);return 97<=r&&r<=122},kb=function(e){var r=st(e);return r<=90&&65<=r},cO=H9,cC=function(e){return jb(e)||kb(e)},iC=function(e){var r=st(e);return r<=57&&48<=r},uC=function(e){return jb(e)||kb(e)||iC(e)},De=function(e){return v(me,M,S,e)},Ui=B9,fC=s(function(e,r){return`

(`+(rr(e+1)+(") "+xb($C(r))))}),$C=function(e){return a(lC,e,S)},lC=s(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,i=e.b,t=(function(){var m=Ui(n);if(m.$===1)return!1;var P=m.a,_=P.a,j=P.b;return cC(_)&&a(nC,uC,j)})(),o=t?"."+n:"['"+(n+"']"),$=i,l=a(M,o,r);e=$,r=l;continue e;case 1:var c=e.a,i=e.b,u="["+(rr(c)+"]"),$=i,l=a(M,u,r);e=$,r=l;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var b=(function(){return r.b?"The Json.Decode.oneOf at json"+a(Lr,"",De(r)):"Json.Decode.oneOf"})(),p=b+(" failed in the following "+(rr(Dr(d))+" ways:"));return a(Lr,`

`,a(M,p,a(_n,fC,d)))}else{var i=d.a,$=i,l=r;e=$,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+(function(){return r.b?" at json"+a(Lr,"",De(r)):"!"})();default:var g=e.a,C=e.b,p=(function(){return r.b?"Problem with the value at json"+(a(Lr,"",De(r))+`:

    `):`Problem with the given value:

`})();return p+(xb(a(Sb,4,C))+(`

`+g))}}),Er=32,Xt=K(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),So=U8,R0=D9,iO=p9,Lf=s(function(e,r){return jd(r)/jd(e)}),uO=w9,yn=R0(a(Lf,2,Er)),I0=x(Xt,0,yn,So,So),wb=q8,Cc=function(e){return{$:1,a:e}},fO=s(function(e,r){return e(r)}),$O=s(function(e,r){return r(e)}),en=e9,Kt=T9,Gn=I8,lO=t9,Pe=s(function(e,r){return ce(e,r)>0?e:r}),vC=b9,_c=function(e){return{$:0,a:e}},q0=O8,sC=s(function(e,r){e:for(;;){var n=a(q0,Er,e),t=n.a,o=n.b,c=a(M,_c(t),r);if(o.b){var i=o,u=c;e=i,r=u;continue e}else return De(c)}}),Pn=function(e){var r=e.a;return r},dC=s(function(e,r){e:for(;;){var n=R0(r/Er);if(n===1)return a(q0,Er,e).a;var t=a(sC,e,S),o=n;e=t,r=o;continue e}}),O0=s(function(e,r){if(r.U){var n=r.U*Er,t=Kt(a(Lf,Er,n-1)),o=e?De(r.ao):r.ao,c=a(dC,o,r.U);return x(Xt,Gn(r.ae)+n,a(Pe,5,t*yn),c,r.ae)}else return x(Xt,Gn(r.ae),yn,So,r.ae)}),vO=m9,sO=a9,bC=Le(function(e,r,n,t,o){e:for(;;){if(r<0)return a(O0,!1,{ao:t,U:n/Er|0,ae:o});var c=Cc(v(wb,Er,r,e)),i=e,u=r-Er,$=n,l=a(M,c,t),d=o;e=i,r=u,n=$,t=l,o=d;continue e}}),dO=g9,G0=s(function(e,r){if(e<=0)return I0;var n=e%Er,t=v(wb,n,e-n,r),o=e-n-Er;return R(bC,r,o,e,S,t)}),Sn=function(e){return!e.$},A=_h,ne=lh,k=hh,N=vh,bO=0,W0=0,pO=5,te=function(e){return e},mO=te,dr=D(function(e,r,n){return ce(n,e)<0?e:ce(n,r)>0?r:n}),rn=s(function(e,r){return H(r,{C:v(dr,0,1,r.C-e)})}),an=s(function(e,r){return H(r,{C:v(dr,0,1,r.C+e)})}),pC=s(function(e,r){return{bt:r.bt,i0:a(an,.14,r.bt),i1:a(an,.07,r.bt),jh:a(an,.13,r.D),ji:a(an,.23,r.D),kx:e,D:r.D,k6:a(an,.03,r.D),k7:a(an,.06,r.D),k8:a(an,.09,r.D),k9:a(rn,.03,r.D),la:a(rn,.06,r.D),lb:a(rn,.09,r.D),lc:{aQ:.6,aT:r.D.aT,C:.92,a1:.08},lf:a(rn,.5,r.d6),lh:r.d6,li:a(rn,.15,r.d6)}}),mC=s(function(e,r){var n=r.d6,t=n.C<.12?H(n,{C:.12}):n;return{bt:r.bt,i0:a(rn,.14,r.bt),i1:a(rn,.07,r.bt),jh:a(rn,.13,r.D),ji:a(rn,.23,r.D),kx:e,D:r.D,k6:a(rn,.03,r.D),k7:a(rn,.06,r.D),k8:a(rn,.09,r.D),k9:a(an,.03,r.D),la:a(an,.06,r.D),lb:a(an,.09,r.D),lc:{aQ:.88,aT:r.D.aT,C:.18,a1:.1},lf:a(an,.5,t),lh:t,li:a(an,.15,t)}}),hC=s(function(e,r){return r.si?a(pC,r,{bt:e,D:r.pZ,d6:r.rD}):a(mC,r,{bt:e,D:r.pZ,d6:r.rD})}),Lb=s(function(e,r){switch(e){case 0:return r.tN;case 1:return r.rS;case 2:return r.vr;case 3:return r.p5;case 4:return r.sx;default:return r.qP}}),Ri=s(function(e,r){return a(hC,a(Lb,e,r),r)}),N0=c9,ar=s(function(e,r){e:for(;;){if(r.$===-2)return z;var n=r.b,t=r.c,o=r.d,c=r.e,i=a(N0,e,n);switch(i){case 0:var u=e,$=o;e=u,r=$;continue e;case 1:return E(t);default:var u=e,$=c;e=u,r=$;continue e}}}),G=K(function(e,r,n,t){return{aQ:t,aT:e,C:n,a1:r}}),gC={pZ:x(G,.5833,.0952,.21,1),p4:x(G,.5833,.0952,.21,1),p5:x(G,.5718,.9231,.39,1),qa:x(G,.5667,.0505,.495,1),qb:x(G,.5673,.6341,.59,1),qc:x(G,.4869,.6,.575,1),qd:x(G,.4722,.6,.5,1),qe:x(G,.963,.5294,.575,1),qf:x(G,.0224,1,.665,1),qg:x(G,0,0,1,1),qh:x(G,.1373,1,.575,1),qP:x(G,.4891,.7176,.425,1),rD:x(G,0,0,.96,1),rS:x(G,.4697,1,.33,1),si:!0,sx:x(G,.7361,.6,.5,1),sX:"Erkal Dark",tN:x(G,.95,1,.5,1),u9:x(G,0,0,.82,1),vr:x(G,.1315,1,.45,1)},CC={pZ:x(G,0,0,.96,1),p4:x(G,.5833,.0952,.21,1),p5:x(G,.5673,.8966,.29,1),qa:x(G,.5833,.0476,.42,1),qb:x(G,.5718,.9231,.39,1),qc:x(G,.4891,.7176,.425,1),qd:x(G,.4697,1,.33,1),qe:x(G,.963,.6,.375,1),qf:x(G,.0288,.5909,.44,1),qg:x(G,0,0,.82,1),qh:x(G,.1315,1,.45,1),qP:x(G,.4845,.6825,.315,1),rD:x(G,.5833,.0952,.21,1),rS:x(G,.4551,1,.26,1),si:!1,sx:x(G,.7167,.7143,.35,1),sX:"Erkal Light",tN:x(G,.95,1,.4,1),u9:x(G,0,0,.96,1),vr:x(G,.131,1,.35,1)},_C={pZ:x(G,.6784,.5072,.1195,1),p4:x(G,.6784,.5072,.1195,1),p5:x(G,.6963,.7334,.3908,1),qa:x(G,.6596,.1664,.2542,1),qb:x(G,.6963,.8378,.5419,1),qc:x(G,.4985,.746,.7698,1),qd:x(G,.2473,.9215,.6656,1),qe:x(G,.8231,.9879,.5331,1),qf:x(G,.9805,.9839,.5313,1),qg:x(G,.1717,.0624,.8829,1),qh:x(G,.1378,.9702,.5499,1),qP:x(G,.4985,.432,.6569,1),rD:x(G,.1708,.1275,.8046,1),rS:x(G,.2473,.6142,.5669,1),si:!0,sx:x(G,.8231,.8982,.4245,1),sX:"Inferno",tN:x(G,.9804,.8923,.417,1),u9:x(G,.1712,.0491,.7129,1),vr:x(G,.1378,.8074,.4652,1)},yC={pZ:x(G,.6758,.4926,.1233,1),p4:x(G,.6758,.4926,.1233,1),p5:x(G,.6963,.7334,.3908,1),qa:x(G,.6576,.1668,.257,1),qb:x(G,.6963,.8378,.5419,1),qc:x(G,.4985,.746,.7698,1),qd:x(G,.2989,.7749,.7169,1),qe:x(G,.8231,.9879,.5331,1),qf:x(G,.9805,.9839,.5313,1),qg:x(G,.1241,.0824,.8856,1),qh:x(G,.1226,.912,.646,1),qP:x(G,.4985,.432,.6569,1),rD:x(G,.1238,.1697,.8105,1),rS:x(G,.2989,.48,.6076,1),si:!0,sx:x(G,.8231,.8982,.4245,1),sX:"Magma",tN:x(G,.9804,.8923,.417,1),u9:x(G,.1239,.0643,.7167,1),vr:x(G,.1227,.6106,.5447,1)},xo={aQ:1,aT:0,C:0,a1:0},nn=R9,tn=N9,on=s(function(e,r){return e<1?r:v(tn,e,nn(r),r)}),Df=r9,Tf=V9,dt=function(e){return a(Tf,e,"")},PC=function(e){switch(e){case"0":return E(0);case"1":return E(1);case"2":return E(2);case"3":return E(3);case"4":return E(4);case"5":return E(5);case"6":return E(6);case"7":return E(7);case"8":return E(8);case"9":return E(9);case"a":return E(10);case"b":return E(11);case"c":return E(12);case"d":return E(13);case"e":return E(14);case"f":return E(15);default:return z}},SC=O9,yc=function(e){return v(SC,M,S,e)},Db=X9,J0=function(e){return v(me,s(function(r,n){if(n.$===1){var t=n.a;return Va(t)}else{var o=n.a,c=PC(r);if(c.$)return Va("Invalid hex digit: "+dt(r));var i=c.a;return ta(o*16+i)}}),ta(0),yc(Db(e)))},Oe=s(function(e,r){return ce(e,r)<0?e:r}),xC=D(function(e,r,n){var t=a(Oe,e,a(Oe,r,n)),o=a(Pe,e,a(Pe,r,n)),c=(o+t)/2,i=o-t;if(i<1e-10)return{aQ:1,aT:0,C:c,a1:0};var u=c>.5?i/(2-o-t):i/(o+t),$=(function(){if(o-e<1e-10){var d=ce(r,n)<0?6:0;return(r-n)/i+d}else return o-r<1e-10?(n-e)/i+2:(e-r)/i+4})(),l=$/6;return{aQ:1,aT:l,C:c,a1:u}}),Wn=Q9,Tb=function(e){var r=a(Wn,"#",e)?a(on,1,e):e;if(nn(r)!==6)return Va("Expected 6-character hex string, got: "+e);var n=v(tn,0,2,r),t=v(tn,2,4,r),o=v(tn,4,6,r),c=V(J0(n),J0(t),J0(o));if(!c.a.$&&!c.b.$&&!c.c.$){var i=c.a.a,u=c.b.a,$=c.c.a;return ta(v(xC,i/255,u/255,$/255))}else return Va("Invalid hex color: "+e)},Mb=s(function(e,r){if(r.$)return e;var n=r.a;return n}),h=s(function(e,r){var n=function(o){return a(Mb,xo,Tb(v(tn,o*6,(o+1)*6,r)))},t=n(17);return{pZ:t,p4:n(0),p5:n(4),qa:n(8),qb:n(12),qc:n(14),qd:n(10),qe:n(13),qf:n(9),qg:n(15),qh:n(11),qP:n(6),rD:n(16),rS:n(2),si:t.C<.5,sx:n(5),sX:e,tN:n(1),u9:n(7),vr:n(3)}}),jC={pZ:x(G,.6338,.2131,.4193,1),p4:x(G,.6338,.2131,.4193,1),p5:x(G,.6711,.9819,.3556,1),qa:x(G,.6313,.1141,.4988,1),qb:x(G,.6733,.9724,.4995,1),qc:x(G,.5206,.9279,.6164,1),qd:x(G,.408,.9525,.6016,1),qe:x(G,.8129,.6577,.6082,1),qf:x(G,.0348,.7434,.583,1),qg:x(G,.1588,.059,.8705,1),qh:x(G,.1378,.9702,.5499,1),qP:x(G,.5206,.6303,.518,1),rD:x(G,.1581,.1657,.844,1),rS:x(G,.408,.663,.5087,1),si:!0,sx:x(G,.8129,.4325,.4851,1),sX:"Parula",tN:x(G,.0348,.5435,.4645,1),u9:x(G,.1584,.0494,.7011,1),vr:x(G,.1378,.8074,.4652,1)},kC={pZ:x(G,.6497,.2697,.2788,1),p4:x(G,.6497,.2697,.2788,1),p5:x(G,.6963,.7334,.3908,1),qa:x(G,.6441,.1308,.3827,1),qb:x(G,.6963,.8378,.5419,1),qc:x(G,.4985,.746,.7698,1),qd:x(G,.2594,.8806,.6797,1),qe:x(G,.8231,.9879,.5331,1),qf:x(G,.9805,.9839,.5313,1),qg:x(G,.1553,.0578,.8652,1),qh:x(G,.1378,.9702,.5499,1),qP:x(G,.4985,.432,.6569,1),rD:x(G,.1544,.1443,.7845,1),rS:x(G,.2594,.5758,.578,1),si:!0,sx:x(G,.8231,.8982,.4245,1),sX:"Plasma",tN:x(G,.9804,.8923,.417,1),u9:x(G,.1549,.0495,.696,1),vr:x(G,.1378,.8074,.4652,1)},wC={pZ:x(G,.7616,.2492,.257,1),p4:x(G,.7616,.2492,.257,1),p5:x(G,.6711,.9819,.3556,1),qa:x(G,.7582,.1116,.3649,1),qb:x(G,.6733,.9724,.4995,1),qc:x(G,.5003,1,.4968,1),qd:x(G,.367,.9956,.5641,1),qe:x(G,.7883,.876,.5781,1),qf:x(G,.0151,.5947,.5814,1),qg:x(G,.1828,.0453,.8406,1),qh:x(G,.1749,.9924,.6211,1),qP:x(G,.5003,1,.4251,1),rD:x(G,.1818,.1003,.7645,1),rS:x(G,.3705,.8413,.4617,1),si:!0,sx:x(G,.7886,.6673,.4517,1),sX:"Viridis",tN:x(G,.015,.4413,.4578,1),u9:x(G,.1823,.0425,.6725,1),vr:x(G,.1749,.7036,.5343,1)},zb=f([a(h,"Argonaut","232323ff000f8ce10bffb900008df86d43a600d8ebffffff444444ff2740abe15bffd2420092ff9a5feb67fff0fffffffffaf40e1019"),a(h,"0x96f","262427ff666db3e03affc73900cde8a392e89deaf6fcfcfa545452ff7e83bee55effd05e1bd5ebb0a3ebacedf8fcfcfafcfcfa262427"),a(h,"12-bit Rainbow","000000a0305040d080e090403060b06030900090c0dbded8685656c0606090d050e0d00000b0c080107020b0c0fffffffeffff040404"),a(h,"3024 Day","090300db2d2001a252caba0001a0e4a16a948fbecea5a2a25c5855dbaec33a34324a4543807d7cbcbbbacdab53f7f7f74a4543f7f7f7"),a(h,"3024 Night","090300db2d2001a252fded0201a0e4a16a94b5e4f4a5a2a25c5855e8bbd047413f4a4543807d7cd6d5d4cdab53f7f7f7a5a2a2090300"),a(h,"Aardvark Blue","191919aa342e4b8c0fdbba001370d3c43ac3008eb0bebebe525252f05b5095dc55ffe76360a4ece26be260b6cbf7f7f7dddddd102040"),a(h,"Abernathy","000000cd000000cd00cdcd001093f5cd00cd00cdcdfaebd7404040ff000000ff00ffff0011b5f6ff00ff00ffffffffffeeeeec111416"),a(h,"Adventure","040404d84a335da602eebb6e417ab3e5c499bdcfe5dbded8685656d76b4299b52cffb67097d7efaa7900bdcfe5e4d5c7feffff040404"),a(h,"Adventure Time","050404bd00134ab118e7741e0f4ac666599370a598f8dcc04e7cbffc5f5a9eff6eefc11a1997c69b5953c8faf4f6f5fbf8dcc01f1d45"),a(h,"Adwaita","241f31c01c282ec27ee8b5041e78e49841bb0ab9dcc0bfbc5e5c64ed333b4ad67cd2be3651a1ffc061cb4fd2fdf6f5f4000000ffffff"),a(h,"Adwaita Dark","241f31c01c282ec27ef5c2111e78e49841bb0ab9dcc0bfbc5e5c64ed333b57e389f8e45c51a1ffc061cb4fd2fdf6f5f4ffffff1d1d20"),a(h,"Afterglow","151515ac41427e8e50e5b5676c99bb9f4e857dd6cfd0d0d0505050ac41427e8e50e5b5676c99bb9f4e857dd6cff5f5f5d0d0d0212121"),a(h,"Aizen Dark","1a1a1af08898a4e09cf5dea484b4f8c8a2f490dcd0d0d6f0444444f08898a4e09cf5dea484b4f8c8a2f490dcd0ffffffd0d6f01a1a1a"),a(h,"Aizen Light","f0f2f6d00c363e9e28dd8c1a1c64f28636ec1590964a4d66adb2bcd00c363e9e28dd8c1a1c64f28636ec1590964a4d664a4d66f0f2f6"),a(h,"Alabaster","000000aa3731448c27cb9000325cc07a3e9d0083b2b7b7b7777777f0505060cb00f2af50007acce64ce600aacbf7f7f7000000f7f7f7"),a(h,"Alien Blood","1126167f2b272f7e25717f242f6a7f47587f327f77647d753c4812e0800918e000bde00000aae00058e000e0c473fa91637d750f1610"),a(h,"Andromeda","000000cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5666666cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5e5e5e5262a33"),a(h,"Apple Classic","000000c91b0000c200c7c4001c3fe1ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffd5a2002c2b2b"),a(h,"Apple System Colors","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74bffd60a0a84ffbf5af276d6ffffffffffffff1e1e1e"),a(h,"Apple System Colors Light","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74be5bc000a84ffbf5af269c9f2ffffff000000feffff"),a(h,"Arcoiris","333333da270012c258ffc656518bfce37bd963fad5bab2b2777777ffb9b9e3f6aaffddaab3e8f3cbbaf9bcffc7efefefeee4d9201f1e"),a(h,"Ardoise","2c2c2cd3322d588b35fca93a2465c27332b464e1b8f7f7f7535353fa58528dc252ffea516ab5f8be68ca89ffdbfefefeeaeaea1e1e1e"),a(h,"Arthur","3d352acd5c5c86af80e8ae5b6495eddeb887b0c4debbaa99554444cc553388aa22ffa75d87ceeb996600b0c4deddccbbddeedd1c1c1c"),a(h,"Atelier Sulphurpool","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b294f587c5e6687898ea4dfe2f19c637af5f7ff979db4202746"),a(h,"Atom","000000fd5ff187c38affd7b185befdb9b6fc85befde0e0e04c4c4cfd5ff194fa36f5ffa896cbfeb9b6fc85befde0e0e0c5c8c6161719"),a(h,"Atom One Dark","21252be06c7598c379e5c07b61afefc678dd56b6c2abb2bf767676e06c7598c379e5c07b61afefc678dd56b6c2abb2bfabb2bf21252b"),a(h,"Atom One Light","000000de3e353f953ad2b67c2f5af39500953f953abbbbbb000000de3e353f953ad2b67c2f5af3a000953f953affffff2a2c33f9f9f9"),a(h,"Aura","110f18ff676761ffcaffca85a277ffa277ff61ffcaedecee4d4d4dffca85a277ffffca85a277ffa277ff61ffcaedeceeedecee15141b"),a(h,"Aurora","23262ef0266f8fd46dffe66d102ee4ee5d4303d6b8c74ded4f545ef926728fd46dffe66d03d6b8ee5d4303d6b8c74dedffca2823262e"),a(h,"Ayu","11151cea6c737fd962f9af4f53bdfacda1fa90e1c6c7c7c7686868f07178aad94cffb45459c2ffd2a6ff95e6cbffffffbfbdb60b0e14"),a(h,"Ayu Light","000000ea6c6d6cbf43eca9443199e19e75c746ba94bababa686868f0717186b300f2ae49399ee6a37acc4cbf99d1d1d15c6166f8f9fa"),a(h,"Ayu Mirage","171b24ed827487d96cfacc6e6dcbfadabafa90e1c6c7c7c7686868f28779d5ff80ffd17373d0ffdfbfff95e6cbffffffcccac21f2430"),a(h,"Banana Blueberry","17141fff6b7f00bd9ce6c62f22e8dfdc396a56b6c2f1f1f1495162fe9ea198c379f9e46b91fff4da70d6bcf3ffffffffcccccc191323"),a(h,"Batman","1b1d1ee6dc44c8be46f4fd2273717474727162605fc6c5bf505354fff78efff27dfeed6c9194959a9a9da3a3a6dadbd66f6f6f1b1d1e"),a(h,"Belafonte Day","20111bbe100e858162d08b30426a7997522c989a9c968c835e5252be100e858162d08b30426a7997522c989a9cd5ccba45373cd5ccba"),a(h,"Belafonte Night","20111bbe100e858162eaa549426a7997522c989a9c968c835e5252be100e858162eaa549426a7997522c989a9cd5ccba968c8320111b"),a(h,"Birds Of Paradise","573d26be2d266ba18ae99d2a5a86adac80a674a6ade0dbb79b6c4ae8462795d8bad0d150b8d3edd19ecb93cfd7fff9d5e0dbb72a1f1d"),a(h,"Black Metal","000000486e6fdd9999a06666888888999999aaaaaac1c1c1404040486e6fdd9999a06666888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Bathory)","0000005f8787fbcb97e78a53888888999999aaaaaac1c1c14040405f8787fbcb97e78a53888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Burzum)","0000005f8787ddeecc99bbaa888888999999aaaaaac1c1c14040405f8787ddeecc99bbaa888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Dark Funeral)","0000005f8787d0dfee5f81a5888888999999aaaaaac1c1c14040405f8787d0dfee5f81a5888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Gorgoroth)","0000005f87879b8d7f8c7f70888888999999aaaaaac1c1c14040405f87879b8d7f8c7f70888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Immortal)","0000005f87877799bb556677888888999999aaaaaac1c1c14040405f87877799bb556677888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Khold)","0000005f8787eceee3974b46888888999999aaaaaac1c1c14040405f8787eceee3974b46888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Marduk)","0000005f8787a5aaa7626b67888888999999aaaaaac1c1c14040405f8787a5aaa7626b67888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Mayhem)","0000005f8787f3ecd4eecc6c888888999999aaaaaac1c1c14040405f8787f3ecd4eecc6c888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Nile)","0000005f8787aa9988777755888888999999aaaaaac1c1c14040405f8787aa9988777755888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Black Metal (Venom)","0000005f8787f8f7f279241f888888999999aaaaaac1c1c14040405f8787f8f7f279241f888888999999aaaaaac1c1c1c1c1c1000000"),a(h,"Blazer","000000b87a7a7ab87ab8b87a7a7ab8b87ab87ab8b8d9d9d94c4c4cdbbdbdbddbbddbdbbdbdbddbdbbddbbddbdbffffffd9e6f20d1926"),a(h,"Blue Berry Pie","0a4c6299246e5cb1b3eab9a890a5bd9d54a77e83ccf0e8d6463c5dc872720a6c7e7a31885f3d63bc94b75e60710a6c7ebabab91c0c28"),a(h,"Blue Dolphin","292d3eff8288b4e88df4d69f82aaffe9c1ff89ebffd0d0d09094a4ff8b92ddffa7ffe5859cc4ffddb0f6a3f7ffffffffc5f2ff006984"),a(h,"Blue Matrix","101116ff568000ff9cfffc5800b0ffd57bff76c1ffc7c7c7686868ff6e675ffa68fffc676871ffd682ec60fdffffffff00a2ff101116"),a(h,"Bluloco Dark","41444dfc2f5225a45cff936a3476ff7a82da4483aacdd4e08f9aaeff64803fc56bf9c85910b1feff78f85fb9bcffffffb9c0cb282c34"),a(h,"Bluloco Light","373a41d5275323974adf631c275fe4823ff127618dbabbc2676a77ff64803cbc66c5a3320099e1ce33c06d93bbd3d3d3373a41f9f9f9"),a(h,"Borland","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffffff4e0000a4"),a(h,"Box","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffff9fef00141d2b"),a(h,"Breadog","362c24b10b000072328b4c00005cb49b0097006a78baa99d514337de1100008f40ae60000074e1c300bd008697eae1da362c24f1ebe6"),a(h,"Breeze","31363bed151511d116f674001d99f39b59b61abc9ceff0f17f8c8dc0392b1cdc9afdbc4b3daee98e44ad16a085fcfcfceff0f131363b"),a(h,"Bright Lights","191919ff355bb7e876ffc25176d4ffba76e76cbfb5c2c8d74c4c4cff355bb7e876ffc25176d5ffba76e76cbfb5c2c8d7b3c9d7191919"),a(h,"Broadcast","000000da4939519f50ffd24a6d9cbed0d0ff6e9cbeffffff585858ff7b6b83d182ffff7c9fcef0ffffffa0cef0ffffffe6e1dc2b2b2b"),a(h,"Brogrammer","1f1f1ff811182dc55eecba0f2a84d24e5ab71081d6d6dbe5d6dbe5de352e1dd361f3bd091081d65350b90f7ddbffffffd6dbe5131313"),a(h,"Builtin Dark","000000bb000000bb00bbbb000d0dc8bb00bb00bbbbbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(h,"Builtin Light","000000bb000000bb00bbbb000000bbbb00bb00bbbbbbbbbb555555ff55552fd92fbfbf155555ffff55ff22ccccffffff000000ffffff"),a(h,"Builtin Pastel Dark","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffbbbbbb000000"),a(h,"Builtin Tango Dark","000000cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeecffffff000000"),a(h,"Builtin Tango Light","000000cc00004e9a06c4a0003465a475507b06989ab9bdb5555753ef29297dd527d6c329729fcfad7fa827d5d5eeeeec000000ffffff"),a(h,"C64","090300a2524c55a049bfce726657b3984ca367b6bdffffff000000a2524c55a049bfce726657b3984ca367b6bdf7f7f77869c440318d"),a(h,"CGA","000000aa000000aa00aa55000d0db7aa00aa00aaaaaaaaaa555555ff555555ff55ffff555555ffff55ff55ffffffffffaaaaaa000000"),a(h,"CLRS","000000f8282a328a5dfa701d135cd09f00bd33c3c1b3b3b3555753fb04162cc631e3bd0e1670ffe900b03ad5ceeeeeec262626ffffff"),a(h,"Calamity","2f2833fc644da5f69ce9d7a53b79c7f9267274d3ded5ced97e6c88fc644da5f69ce9d7a53b79c7f9267274d3deffffffd5ced92f2833"),a(h,"Carbonfox","282828ee539625be6a08bdba78a9ffbe95ff33b1ffdfdfe0484848f16da646c8802dc7c48cb6ffc8a5ff52bdffe4e4e5f2f4f8161616"),a(h,"Catppuccin Frappe","51576de78284a6d189e5c8908caaeef4b8e481c8bea5adce626880e671728ec772d9ba737b9ef0f2a4db5abfb5b5bfe2c6d0f5303446"),a(h,"Catppuccin Latte","5c5f77d20f3940a02bdf8e1d1e66f5ea76cb179299acb0be6c6f85de293e49af3deea02d456efffe85d82d9fa8bcc0cc4c4f69eff1f5"),a(h,"Catppuccin Macchiato","494d64ed8796a6da95eed49f8aadf4f5bde68bd5caa5adcb5b6078ec74868ccf7fe1c68278a1f6f2a9dd63cbc0b8c0e0cad3f524273a"),a(h,"Catppuccin Mocha","45475af38ba8a6e3a1f9e2af89b4faf5c2e794e2d5a6adc8585b70f3779989d88bebd39174a8fcf2aede6bd7cabac2decdd6f41e1e2e"),a(h,"Chalk","7d8b8fb23a52789b6ab9ac4a2a7facbd4f5a44a799d2d8d9888888f2484080c470ffeb624196fffc527553cdbdd2d8d9d2d8d92b2d2e"),a(h,"Chalkboard","000000c3737272c373c2c3727372c3c372c272c2c3d9d9d9585858dbaaaaaadbaadadbaaaaaadbdbaadaaadadbffffffd9e6f229262f"),a(h,"Challenger Deep","141228ff545862d196ffb37865b2ff906cff63f2f1a6b3cc565575ff808095ffa4ffe9aa91ddffc991e1aaffe4cbe3e7cbe1e71e1c31"),a(h,"Chester","080200fa5e5b16c98dffc83f288ad6d3459028dddee7e7e76f6b68fa5e5b16c98dfeef6d278ad6d3459027dedeffffffffffff2c3643"),a(h,"Ciapre","1818188e0d1648513bcc8b3f576d8c724d7c5c4f4baea47f555555ac3835a6a75ddcdf7c3097c6d33061f3dbb2f4f4f4aea47a191c27"),a(h,"Citruszest","404040ff545400cc7affd40000bfffff90fe48d1ccbfbfbf808080ff1a751affa3ffff0033cfffffb2fe00fff2f9f9f9bfbfbf121212"),a(h,"Cobalt Neon","142631ff23203ba5ffe9e75c8ff586781aa08ff586ba46b2fff688d4312e8ff586e9f06d3c7dd28230a76cbc678ff5868ff586142838"),a(h,"Cobalt Next","000000ff527b8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea162c35"),a(h,"Cobalt Next Dark","262f37f949678cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(h,"Cobalt Next Minimal","323d47ff657a8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),a(h,"Cobalt2","000000ff000038de21ffe50a1460d2ff005d00bbbbbbbbbb555555f40e173bd01dedc8095555ffff55ff6ae3faffffffffffff132738"),a(h,"Coffee Theme","000000c91b0000c200adaa000225c7ca30c700b8baa1a1a1686868ff6e671fba28b2af1b6871fff26af220bdbfffffff000000f5deb3"),a(h,"Crayon Pony Fish","2b1b1d91002b579524ab311b8c87b0692f50e8a86668525a4a383bc5255d8dff57c8381dcfc9fffc6cbaffceafb0949d68525a150707"),a(h,"Cursor Dark","2a2a2abf616aa3be8cebcb8b81a1c1b48ead88c0d0d8dee9505050bf616aa3be8cebcb8b81a1c1b48ead88c0d0ffffffffffff141414"),a(h,"Cutie Pro","000000f56e7fbec975f5866942d9c5d286b737cb8ad5c3c388847fe5a1a3e8d6a7f1bb7980c5deb294bb9dccbbffffffd5d0c9181818"),a(h,"Cyberdyne","080808ff837300c172d2a7000071cfff90fe6bffddf1f1f1484848ffc4bed6fcbafffed5c2e3ffffb2fee6e7feffffff00ff92151144"),a(h,"Cyberpunk","000000ff709200fbacfffa6a00bfffdf95ff86cbfeffffff595959ff8aa421f6bcfff7871bccfde6aefe99d6fcffffffe5e5e5332a57"),a(h,"Cyberpunk Scarlet Protocol","101116ff005101dc84faf9450271b6c930c700c5c7c7c7c7686868ff6e6760fa68fffc676871ffbd35ec60fdffffffffe41951101116"),a(h,"Dark Modern","272727f749492ea0439e6a030078d4d012731db4d6cccccc5d5d5ddc545223d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1f1f1f"),a(h,"Dark Pastel","000000ff555555ff55ffff555555ffff55ff55ffffbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffffffff000000"),a(h,"Dark+","000000cd31310dbc79e5e5102472c8bc3fbc11a8cde5e5e5666666f14c4c23d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1e1e1e"),a(h,"Darkermatrix","0910131a48316fa64c59590000cb6b4e375a1254591a48334040400d452a90d762e2e50000ff874e375a176c7300381e35451a070c0e"),a(h,"Darkmatrix","0910130065366fa64c7e80002c9a84523a60114d5300653640404000733d90d762e2e50046d8b8573d6612545a0065363e5715070c0e"),a(h,"Darkside","000000e8341c68c256f2d42c1c98e88e69c91c98e8bababa4c4c4ce05a4f77b869efd64b387cd3957bbe3d97e2babababababa222324"),a(h,"Dawnfox","575279b4637a618774ea9d34286983907aa956949fb2b6bd5f5695c26d85629f81eea8462d81a39a80b95ca7b4e6ebf3575279faf4ed"),a(h,"Dayfox","352c24a5222f396847ac54022848a96e33ce287980bfb6ae534c45b3434e577f63b86e284863b68452d5488d93f4ece63d2b5af6f2ee"),a(h,"Deep","000000d700051cd915d9bd265665ffb052da50d2dae0e0e0535353fb000722ff18fedc2b9fa9ffe09aff8df9ffffffffcdcdcd090909"),a(h,"Desert","4d4d4dff2b2b98fb98f0e68ccd853fffdeadffa0a0f5deb3626262ff555555ff55ffff5587ceffff55ffffd700ffffffffffff333333"),a(h,"Detuned","171717fe4386a6e32de6da730094d99b37ff50b7d9c7c7c7686868fa80acbde371fff27f00beffbe9eff5ed7ffffffffc7c7c7000000"),a(h,"Dimidium","000000cf494c60b442db9c110575d8af5ed21db6bbbab7b6817e7eff643b37e57bfccd1a688dfded6fe932e0fbdee3e4bab7b6141414"),a(h,"Dimmed Monokai","3a3d43be3f48879a3bc5a6354f76a1855c8d578fa4b9bcba888987fb001f0f722fc47033186de3fb00672e706dfdffb9b9bcba1f1f1f"),a(h,"Django","000000fd620941a83effe862315d3ff8f8f89df39fffffff585858ff943b73da70ffff94568264ffffffcfffd1fffffff8f8f80b2f20"),a(h,"Django Reborn Again","000000fd620941a83effe862245032f8f8f89df39fffffff4c4c4cff943b73da70ffff94568264ffffffcfffd1ffffffdadedc051f14"),a(h,"Django Smooth","000000fd620941a83effe862989898f8f8f89df39fe8e8e7727272ff943b73da70ffff94cacacaffffffcfffd1fffffff8f8f8245032"),a(h,"Doom One","000000ff6c6b98be65ecbe7ba9a1e1c678dd51afefbbc2cf595959ff665599bb66ecbe7ba9a1e1c678dd51afefbfbfbfbbc2cf282c34"),a(h,"Doom Peacock","1c1f24cb4b1626a6a6bcd42a2a6cc6a9a1e15699afede0ce51504dff5d3898be65e6f97251afefc678dd46d9ffdfdfdfede0ce2b2a27"),a(h,"Dot Gov","191919bf091d3d9751f6bb3417b2e07830b08bd2edffffff595959bf091d3d9751f6bb3417b2e07830b08bd2edffffffebebeb262c35"),a(h,"Dracula","21222cff555550fa7bf1fa8cbd93f9ff79c68be9fdf8f8f26272a4ff6e6e69ff94ffffa5d6acffff92dfa4fffffffffff8f8f2282a36"),a(h,"Dracula+","21222cff555550fa7bffcb6b82aaffc792ea8be9fdf8f8f2545454ff6e6e69ff94ffcb6bd6acffff92dfa4fffff8f8f2f8f8f2212121"),a(h,"Duckbones","0e101ae036005dcd97e3950000a3cb795ccc00a3cbebefc0444860ff482158db9ef6a10000b4e0b3a1e600b4e0b3b692ebefc00e101a"),a(h,"Duotone Dark","1f1d27d9393e2dcd73d9b76effc284de8d402488ffb7a1ff4e4a60d9393e2dcd73d9b76effc284de8d402488ffeae5ffb7a1ff1f1d27"),a(h,"Duskfox","393552eb6f92a3be8cf6c177569fbac4a7e79ccfd8e0def4544d8af083a2b1d196f9cb8c65b1cdccb1eda6dae3e2e0f7e0def4232136"),a(h,"ENCOM","0000009f0000008b00ffd0000081ffbc00ca008b8bbbbbbb555555ff000000ee00ffff000000ffff00ff00cdcdffffff00a595000000"),a(h,"Earthsong","121418c9423485c54cf5ae2e1398b9d0633d509552e5c6aa675f54ff645a98e036e0d5615fdaffff926984f088f6f7ece5c7a9292520"),a(h,"Electron Highlighter","15161fff6c8d00ffc3ffd7a977abffdaa4f400fdff778faf4a6789ff6c8d00ffc3ffd7a977abffdaa4f400fdffc3cee2a5b6d423283d"),a(h,"Elegant","0a1222ff025785cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ff005785cc95ffcb8b8dabe1c792eb3facefffffffced2d6292b31"),a(h,"Elemental","3c3c3098290f479a437f7111497f7d7f4e2f387f58807974555445e0502a61e070d6992779d9d9cd7c5459d599fff1e9807a7422211d"),a(h,"Elementary","242424d71c155aa513fdb40c134899e400382595e1efefef4b4b4bfc1c186bc219fec80e0955fffb00503ea8fc8c00ecefefef181818"),a(h,"Embark","1e1c31f0719ba1efd3ffe9aa57c7ffc792ea87dfebf8f8f2585273f02e6e2ce592ffb3781da0e2a742ea63f2f1a6b3cceeffff1e1c31"),a(h,"Embers Dark","16130f826d5757826d6d82576d578282576d576d82a39a905a504782825746403950483f8a8075beb6ae825757dbd6d1a39a9016130f"),a(h,"Espresso","353535d25252a5c261ffc66d6c99bbd197d9bed6ffeeeeec606060f00c0cc2e075e1e48b8ab7d9efb5f7dcf4ffffffffffffff323232"),a(h,"Espresso Libre","000000cc00001a921cf0e53a0066ffc5656b06989ad3d7cf555753ef29299aff87fffb5c43a8edff818a34e2e2eeeeecb8a8982a211c"),a(h,"Everblush","232a2de574748ccf7ee5c76b67b0e8c47fd56cbfbfb3b9b8464e50ef7e7e96d988f4d67a71baf2ce89df67cbe7bdc3c2dadada141b1e"),a(h,"Everforest Dark Hard","7a8478e67e80a7c080dbbc7f7fbbb3d699b683c092f2efdfa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbefd3c6aa1e2326"),a(h,"Everforest Light Med","7a8478e67e809ab373c1a2667fbbb3d699b683c092b2af9fa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbef5c6a72efebd4"),a(h,"Fahrenheit","1d1d1dcda0749e744dfecf757f0e0f734c4d979797ffffce404040fecea0cc734dfd9f4dcb4a054e739ffed04dffffffffffce000000"),a(h,"Fairyfloss","040303f92672c2ffdfe6c000c2ffdfffb8d1c5a3fff8f8f06090cbff857fc2ffdfffea00c2ffdfffb8d1c5a3fff8f8f0f8f8f25a5475"),a(h,"Farmhouse Dark","1d2027ba0004549d00c873000049e69f1b611fb65ce8e4e1464d54eb00097ac100ea9a00006efebf3b7f19e062f4eef0e8e4e11d2027"),a(h,"Farmhouse Light","1d20278d00033a7d00a95600092ccd820046229256a8a4a1394047eb00097ac100ea9a00006efebf3b7f00c649f4eef01d2027e8e4e1"),a(h,"Fideloper","292f33cb1e2dedb8acb7ab9b2e78c2c0236f309186eae3ce496068d4605ad4605aa866717c85c45c5db2819090fcf4dfdbdae0292f33"),a(h,"Firefly Traditional","000000c2372033bc26afad245a63ffd53ad233bbc7cccccc828282ff3b1e2ee720ecec16838dffff5cfe29f0f0ebebebf5f5f5000000"),a(h,"Firefox Dev","002831e638535eb83ca57706359ddfd75cff4b73a2dcdcdc26444de1003f1d9000cd9409006fc0a200da005794e2e2e27c8fa40e1011"),a(h,"Firewatch","585f6dd953605ab977dfb5634d89c4d5511944a8b6e6e5ff585f6dd953605ab977dfb5634c89c5d5511944a8b6e6e5ff9ba2b21e2027"),a(h,"Fish Tank","03073cc6004aacf157fecd5e525fb8986f82968763ecf0fc6c5b30da4b8adbffa9fee6a9b2befafda5cda5bd86f6ffececf0fe232537"),a(h,"Flat","222d3fa8232032a548e58d113167ac781aa02c9370b0b6ba475262d4312e2d9440e5be0c3c7dd28230a735b387e7eced2cc55d002240"),a(h,"Flatland","1d1d19f183399fd364f4ef6d5096be695abcd63865ffffff50504cd22a24a7d42cff894961b9d0695abcd63865ffffffb8dbef1d1f21"),a(h,"Flexoki Dark","100f0fd14d41879a39d0a2154385bece5d973aa99f878580575653af302966800bad8301205ea6a02f6f24837bcecdc3cecdc3100f0f"),a(h,"Flexoki Light","100f0faf302966800bad8301205ea6a02f6f24837b6f6e69b7b5acd14d41879a39d0a2154385bece5d973aa99fcecdc3100f0ffffcf0"),a(h,"Floraverse","08002e7e1a465d731acd751c1d6da1b7077e42a38cf3e0b84c3866d02063b4ce59fac35740a4cff12aae62caa8fff5dbdbd1b90e0d15"),a(h,"Forest Blue","333333f8818e92d3a21a8e638ed0ce5e468c31658ce2d8cd4a4a4afb3d666bb48d30c85a39a7a27e62b36096bfe2d8cde2d8cd051519"),a(h,"Framer","141414ff555598ec65ffcc3300aaffaa88ff88ddffcccccc414141ff8888b6f292ffd96633bbffcebbffbbecffffffff777777111111"),a(h,"Front End Delight","242526f8511b565747fa771d2c70b7f02e4f3ca1a6adadad5fac6df7431974ec4cfdc3253393cae75e4f4fbce68c735badadad1b1c1d"),a(h,"Fun Forrest","000000d6262b919c00be8a134699a38d4331da8213ddc2657f6a55e55a1cbfc65affcb1b7cc9cfd26349e6a96bffeaa3dec165251200"),a(h,"Galaxy","000000f9555f21b089fef02a589df6944d951f9ee7bbbbbb555555fa8c8f35bb9affff55589df6e756993979bcffffffffffff1d2837"),a(h,"Galizur","223344aa112233aa11ccaa222255cc7755aa22bbdd8899aa556677ff113333ff11ffdd333377ffaa77ff33ddffbbccddddeeff071317"),a(h,"Ghostty Default Style Dark","1d1f21cc6566b6bd68f0c67482a2beb294bb8abeb7c4c8c6666666d54e53b9ca4be7c5477aa6dac397d870c0b1eaeaeaffffff282c34"),a(h,"GitHub","3e3e3e970b1607962ac5bb94003e8ae946917cc4dfb2b2b2666666de00007ac895d7b6002e6cbaf2959200c7cbffffff3e3e3ef4f4f4"),a(h,"GitHub Dark","000000f7816656d364e3b3416ca4f8db61a22b7489ffffff4d4d4df7816656d364e3b3416ca4f8db61a22b7489ffffff8b949e101216"),a(h,"GitHub Dark Colorblind","484f58ec8e2c58a6ffd2992258a6ffbc8cff39c5cfb1bac46e7681fdac5479c0ffe3b34179c0ffd2a8ff56d4ddffffffc9d1d90d1117"),a(h,"GitHub Dark Default","484f58ff7b723fb950d2992258a6ffbc8cff39c5cfb1bac46e7681ffa19856d364e3b34179c0ffd2a8ff56d4ddffffffe6edf30d1117"),a(h,"GitHub Dark Dimmed","545d68f4706757ab5ac69026539bf5b083f039c5cf909dab636e7bff938a6bc46ddaaa3f6cb6ffdcbdfb56d4ddcdd9e5adbac722272e"),a(h,"GitHub Dark High Contrast","7a828eff949226cd4df0b72f71b7ffcb9eff39c5cfd9dee39ea7b3ffb1af4ae168f7c84391cbffdbb7ff56d4ddfffffff0f3f60a0c10"),a(h,"GitHub Light Colorblind","24292fb359000550ae4d2d000969da8250df1b7c836e778157606a8a46000969da633c01218bffa475f93192aa8c959f24292fffffff"),a(h,"GitHub Light Default","24292fcf222e1163294d2d000969da8250df1b7c836e778157606aa40e261a7f37633c01218bffa475f93192aa8c959f1f2328ffffff"),a(h,"GitHub Light High Contrast","0e1116a0111f024c1a3f22000349b4622cbc1b7c8366707b4b535d86061d055d204e2c001168e3844ae73192aa88929d0e1116ffffff"),a(h,"GitLab Dark","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff28262b"),a(h,"GitLab Dark Grey","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff222222"),a(h,"GitLab Light","303030a317000a7f3daf551d006cd8583cac00798a303030303030a317000a7f3daf551d006cd8583cac00798a303030303030fafaff"),a(h,"Glacier","2e343cbd0f2f35a770fb94351f5872bd2523778397ffffff404a55bd0f2f49e998fddf6e2a8bc1ea4727a0b6d3ffffffffffff0c1115"),a(h,"Grape","2d283fed22611fa91b8ddc20487df48d35c93bdeed9e9ea059516af0729a53aa5eb2dc87a9bcecad81c29de3eba288f79f9fa1171423"),a(h,"Grass","000000ff595900bb00e7b0000000a3ee59bb00bbbbbbbbbb959595ff595900bb00e7b0000000bbff55ff55fffffffffffff0a513773d"),a(h,"Grey Green","000000fe141474ff00f1ff0100deffff00f000ffbcffffff666666ff393900ff44ffd10000afffff008a00ffd3f5ececffffff002a1a"),a(h,"Gruber Darker","181818ff0a3642dc00ffdb0092a7cba095cb90aa9ee4e4e454494eff385142dc00ffdb0092a7cbafafda90aa9ef5f5f5e4e4e4181818"),a(h,"Gruvbox Dark","282828cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb2282828"),a(h,"Gruvbox Dark Hard","1d2021cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb21d2021"),a(h,"Gruvbox Light","fbf1c7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836fbf1c7"),a(h,"Gruvbox Light Hard","f9f5d7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836f9f5d7"),a(h,"Gruvbox Material","141617ea6926c1d041eecf756da3ecfd9bc1fe9d6effffff4c4c4cd3573bc1d041eecf752c86fffd9bc192a5dfffffffd4be981d2021"),a(h,"Gruvbox Material Dark","282828ea6962a9b665d8a6577daea3d3869b89b482d4be987c6f64ea6962a9b665d8a6577daea3d3869b89b482ddc7a1d4be98282828"),a(h,"Gruvbox Material Light","fbf1c7c14a4a6c782eb4710945707a945e804c7a5d654735a89984c14a4a6c782eb4710945707a945e804c7a5d4f3829654735fbf1c7"),a(h,"Guezwhoz","333333e851817ad694b7d0745aa0d69a90e058d6ced9d9d9808080e85181afd7afd1ed8564b2eda398ed61ede4edededd9d9d91d1d1d"),a(h,"HaX0R Blue","01092110b6ff10b6ff10b6ff10b6ff10b6ff10b6fffafafa48415700b3f700b3f700b3f700b3f700b3f700b3f7fefefe11b7ff010515"),a(h,"HaX0R Gr33N","001f0b15d00d15d00d15d00d15d00d15d00d15d00dfafafa33484319e20e19e20e19e20e19e20e19e20e19e20efefefe16b10e020f01"),a(h,"HaX0R R3D","1f0000b00d0db00d0db00d0db00d0db00d0db00d0dfafafa554040ff1111ff1010ff1010ff1010ff1010ff1010fefefeb10e0e200101"),a(h,"Hacktober","191918b34538587744d08949206ec5864651ac9166f1eee7464444b3332342824ac75a225389c5e795a5ebc587ffffffc9c9c9141414"),a(h,"Hardcore","1b1d1ef92672a6e22efd971f66d9ef9e6ffe5e7175ccccc6505354ff669dbeed5fe6db7466d9ef9e6ffea3babff8f8f2a0a0a0121212"),a(h,"Harper","010101f8b63f7fb5e1d6da25489e48b296c6f5bfd7a8a49d726e6af8b63f7fb5e1d6da25489e48b296c6f5bfd7fefbeaa8a49d010101"),a(h,"Havn Daggry","1f2842985248577159be6b003a577d7c5c97925780b0b5c51f2842cc4a35719679f1a5276089c07d7396aa869dd6dbeb3b4a7af8f9fb"),a(h,"Havn Skumring","252c47ea563e6ead7bf8b330596cf77c719ed588c1dce0ee38425cd172648c9e8feac58c5186cb9b7ceed17ab6fff6e1d6dbeb111522"),a(h,"Heeler","000000e44c2ebdd100f4ce655ba5f2ff95c2ff9763ffffff4c4c4ce44c2ebdd100f4ce650088ffff95c28da6e4fffffffdfdfd211f46"),a(h,"Highway","000000d00e18138034ffcb3e006bb3783482455271ededed5d504af07e18b1d130fff1204fc2fdde00715d504affffffededed222225"),a(h,"Hipster Green","000000b6214a00a600bfbf00246eb2b200b200a6b2bfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e584c138100b05"),a(h,"Hivacruz","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b2973ad435e6687898ea4dfe2f19c637af5f7ffede4e4132638"),a(h,"Homebrew","00000099000000a6009999000d0dbfb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e500ff00000000"),a(h,"Hopscotch","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379fd8b195c545c5c545b989498d5d3d5b33508ffffffb9b5b8322931"),a(h,"Hopscotch.256","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379dd464c8fc13efdcc591290bfc85e7c149b93ffffffb9b5b8322931"),a(h,"Horizon","000000e9567829d398fab79526bbd9ee64ac59e1e3e5e5e5666666ec6a883fdaa4fbc3a73fc4def075b56be4e6e5e5e5d5d8da1c1e26"),a(h,"Horizon Bright","16161dfc477700ca86f2a68200beddff58b100cdcbbfafac1a1c24fe5f8700d193e5a68800c9e2ff6cba00c3c2fff2ef16161dfdf0ed"),a(h,"Hot Dog Stand","000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6ffffffea3323"),a(h,"Hot Dog Stand (Mustard)","000000ea3323ea3323ea3323000000ea3323000000b9b9b9000000ea3323ea3323ea3323000000ea3323000000c6c6c6000000ffff54"),a(h,"Hurtado","575757ff1b00a5e055fbe74a496487fd5ff186e9fecbcccb404040d51d00a5df55fbe84a89beffc001c186eafedbdbdbdbdbdb000000"),a(h,"Hybrid","2a2e33b84d51b3bf5ae4b55e6e90b0a17eac7fbfb4b5b9b64345488d2e32798431e58a504b6b886e50794d7b745a626ab7bcba161719"),a(h,"IBM 5153 CGA","141414d033331bd01bd08c1b1b1bd0d01bd01bd0d0cecece4e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffcecece141414"),a(h,"IBM 5153 CGA (Black)","000000c4000000c400c47e000000c4c400c400c4c4c4c4c44e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffc4c4c4000000"),a(h,"IC Green PPL","014401ff273641a63876a8312ec3b950a0963ca078e6fef2106910b4fa5caefb86dafa872efaeb50fafa3cfac8e0f1dce0f1dc2c2c2c"),a(h,"IC Orange PPL","000000c13900a4a900caaf00bd6d00fc5e00f79500ffc88a6a4f2aff8c68f6ff40ffe36effbe55fc874fc69752fafaffffcb83262626"),a(h,"IR Black","4f4f4ffa6c60a8ff60fffeb796cafefa73fdc6c5feefedef7b7b7bfcb6b0cfffabffffccb5dcfffb9cfee0e0fefffffff1f1f1000000"),a(h,"IRIX Console","1a1919d4242637a327c29d280739e2911f9c4497dfcccccc767676f34f5945c731f9f2a74079ffc31ba26ed7d7f2f2f2f2f2f20c0c0c"),a(h,"IRIX Terminal","1a1919ff2b1e57ff3dffff440004ffff2cff56ffffffffffffff44ffff44ffff44fffc72ffff44ffff44ffff44ffff44f2f2f2000043"),a(h,"Iceberg Dark","1e2132e27878b4be82e2a47884a0c6a093c789b8c2c6c8d16b7089e98989c0ca8ee9b18991acd1ada0d395c4ced2d4dec6c8d1161821"),a(h,"Iceberg Light","dcdfe7cc517a668e3dc573392d539e7759b43f83a633374c8389a3cc3768598030b6662d22478e6845ad327698262a3f33374ce8e9ec"),a(h,"Idea","adadadfc525698b61cccb444437ee79d74b02488874b4b4bfffffffc707298b61cffff0b6c9cedfc7eff248887181818adadad202020"),a(h,"Idle Toes","323232d252527fe173ffc66d4099fff680ffbed6ffeeeeec606060f070709dff91ffe48b5eb7f7ff9dffdcf4ffffffffffffff323232"),a(h,"Jackie Brown","2c1d16ef57342baf2bbebf00246eb2d05ec100aceebfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e5ffcc2f2c1d16"),a(h,"Japanesque","343935cf3f617bb75be9b32a4c9ad4a57fc4389aadfafaf6595b59d18fa6767f2c78592f13597960429176bbcab2b5aef7f6ec1e1e1e"),a(h,"Jellybeans","929292e2737394b979ffba7b97bedce1c0fa00988edededebdbdbdffa1a1bddeabffdca0b1d8f6fbdaff1ab2a8ffffffdedede121212"),a(h,"JetBrains Darcula","000000fa5355126e00c2c3004581ebfa54ff33c2c1adadad555555fb717267ff4fffff006d9df1fb82ff60d3d1eeeeeeadadad202020"),a(h,"Jubi","3b3750cf7b9890a94b6ebfc0576ea6bc4f6875a7d2c3d3dea874cede90abbcdd6187e9ea8c9fcde16c87b7c9efd5e5f1c3d3de262b33"),a(h,"Kanagawa Dragon","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a6a69ce4687687a987e6c3847fb4ca938aa97aa89fc5c9c5c5c9c5181616"),a(h,"Kanagawa Lotus","1f1f28c840536f894e77713f4d699bb35b79597b755454648a8980d7474b6e915f836f4a6693bf624c835e857a43436c545464f2ecbc"),a(h,"Kanagawa Wave","090618c3404376946ac0a36e7e9cd8957fb86a9589c8c093727169e8242498bb6ce6c3847fb4ca938aa97aa89fdcd7badcd7ba1f1f28"),a(h,"Kanagawabones","1f1f28e46a7898bc6de5c2837eb3c9957fb87eb3c9ddd8bb49495eec818c9ec967f1c9827bc2dfa98fd27bc2dfa8a48dddd8bb1f1f28"),a(h,"Kanso Ink","14171dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c714171d"),a(h,"Kanso Mist","22262dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2a4a7a45c6066e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c722262d"),a(h,"Kanso Pearl","22262dc840536f894e77713f4d699bb35b79597b755454646d6f6ed7474b6e915f836f4a6693bf624c835e857a43436c22262df2f1ef"),a(h,"Kanso Zen","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c7090e13"),a(h,"Kibble","4d4d4dc7003129cf13d8e30e3449d18400ff0798abe2d1e35a5a5af015786ce05cf3f79e97a4f7c495f068f2e0fffffff7f7f70e100a"),a(h,"Kitty Default","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffdddddd000000"),a(h,"Kitty Low Contrast","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffffffff333333"),a(h,"Kolorit","1d1a1eff5b8247d7a1e8e5625db4eeda6cda57e9ebededed504d51ff5b8247d7a1e8e5625db4eeda6cda57e9ebedededefecec1d1a1e"),a(h,"Konsolas","000000aa171718b218ebae1f2323a5ad1edc42b0c8c8c1c17b716eff41415fff5fffff554b4bffff54ff69ffffffffffc8c1c1060606"),a(h,"Kurokula","333333c35a5278b3a9e1b9175c91dd8b79a6867268e0cfc2515151ffc34cafffa5fff70090dbffad93ffffcdb6ffffffe0cfc2141515"),a(h,"Lab Fox","2e2e2efc6d263eb383fca121db3b216b40a86e49cbffffff535353ff651753eaa8fca013db501f6a36b67d53e7ffffffffffff2e2e2e"),a(h,"Laser","626262ff8373b4fb7309b4bdfed300ff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5f92883ffb2fee6e7fefffffff106e3030d18"),a(h,"Later This Evening","2b2b2bd45a60afba67e5d289a0bad6c092d691bfb7494a4a525454d3232faabb39e5be396699d6ab53d65fc0aec1c2c2959595222222"),a(h,"Lavandula","2300467d1625337e6f7f6f494f4a7f5a3f7f58777f736e7d443a53e0516752e0c4e0c3868e87e0a776e09ad4e08c91fa736e7d050014"),a(h,"Light Owl","403f53de3d3b08916ae0af02288ed7d6438a2aa298bdbdbd989fb1de3d3b08916adaaa01288ed7d6438a2aa298f0f0f0403f53fbfbfb"),a(h,"Liquid Carbon","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc595959ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2303030"),a(h,"Liquid Carbon Transparent","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc404040ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2000000"),a(h,"Lovelace","282a36f37f975adecdf2a2728897f4c574dd79e6f3fdfdfd4e5165ff497118e3c8ff8037556fffb043d13fdceebebec1fdfdfd1d1f28"),a(h,"Man Page","000000cc000000a6009999000000b2b200b200a6b2b2b2b2666666e5000000cc00bfbf000000ffe500e500cbcbe5e5e5000000fef49c"),a(h,"Mariana","000000ec5f6699c794f9ae586699ccc695c65fb4b4f7f7f7666666f97b58acd1a8fac76185add6d8b6d882c4c4ffffffd8dee9343d46"),a(h,"Material","212121b7141f457b24f6981e134eb25600880e717cafafaf424242e83b3f7aba3abfaa0054a4f3aa4dbc26bbd1d9d9d9232322eaeaea"),a(h,"Material Dark","212121b7141f457b24f6981e134eb2701aa20e717cefefef4f4f4fe83b3f7aba3affea2e54a4f3aa4dbc26bbd1d9d9d9e5e5e5232322"),a(h,"Material Darker","000000ff5370c3e88dffcb6b82aaffc792ea89ddffffffff545454ff5370c3e88dffcb6b82aaffc792ea89ddffffffffeeffff212121"),a(h,"Material Design Colors","435b67fc38415cf19efed03237b6fffc226e59ffd1ffffffa1b0b8fc746dadf7befee16c70cffffc669b9affe6ffffffe7ebed1d262a"),a(h,"Material Ocean","546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff8f93a20f111a"),a(h,"Mathias","000000e52222a6e32dfc951ec48dfffa257367d9f0f2f2f2555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(h,"Matrix","0f191c23755a82d967ffd7003f524240993150b45a5073506880602fc07990d762faff004f7e7e11ff25c1ff8a678c614266440f191c"),a(h,"Matte Black","333333d35f5fffc107b91c1ce68e0dd35f5fbebebebebebe8a8a8d891c1cffc107b90a0af59e0bb91c1ceaeaeaffffffbebebe121212"),a(h,"Medallion","000000b64c007c8b16d3bd26616bb08c5a90916c25cac29a5e5219ff9149b2ca3bffe54aacb8ffffa0ffffbc51fed698cac2961d1908"),a(h,"Melange Dark","34302cbd818378997ae49b5d7f91b2b380b07b9695c1a78e867462d4776685b695ebc06da3a9cecf9bc289b3b6ece1d7ece1d7292522"),a(h,"Melange Light","e9e1dbc77b8b6e9b72bc5c007892bdbe79bb7397977d6658a98a78bf00213a684aa06d00465aa49041803d656854433a54433af1f1f1"),a(h,"Mellifluous","1a1a1ad29393b3b393cbaa89a8a1beb39fb0c0af8cdadada5b5b5bc95954828040a6794c5a65999c699574a39effffffdadada1a1a1a"),a(h,"Mellow","27272af5a19190b99fe6b99daca1cfe29ecaea83a5c1c0d4424246ffae9f9dc6acf0c5a9b9aedaecaad6f591b2cac9ddc9c7cd161617"),a(h,"Miasma","0000006857425f875fb36d4378824bbb7744c9a554d7c4836666666857425f875fb36d4378824bbb7744c9a554d7c483c2c2b0222222"),a(h,"Midnight In Mojave","1e1e1eff453a32d74bffd60a0a84ffbf5af25ac8faffffff515151ff453a32d74bffd60a0a84ffbf5af25ac8faffffffffffff1e1e1e"),a(h,"Mirage","011627ff999985cc95ffd7007fb5ffddb3ff21c7a8ffffff575656ff999985cc95ffd7007fb5ffddb3ff85cc95ffffffa6b2c01b2738"),a(h,"Misterioso","000000ff424274af68ffad29338f869414e623d7d7e1e1e0626262ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e02d3743"),a(h,"Molokai","121212fa257398e123dfd4601080d08700ff43a8d0bbbbbb555555f6669db1e05ffff26d00afffaf87ff51ceffffffffbbbbbb121212"),a(h,"Mona Lisa","351b0e9b291c636232c36e28515c5d9b1d29588056f7d75c874228ff4331b4b264ff95669eb2b4ff5b6a8acd8fffe598f7d66a120b0d"),a(h,"Monokai Classic","272822f92672a6e22ee6db74fd971fae81ff66d9effdfff16e7066f92672a6e22ee6db74fd971fae81ff66d9effdfff1fdfff1272822"),a(h,"Monokai Pro","2d2a2eff6188a9dc76ffd866fc9867ab9df278dce8fcfcfa727072ff6188a9dc76ffd866fc9867ab9df278dce8fcfcfafcfcfa2d2a2e"),a(h,"Monokai Pro Light","faf4f2e14775269d69cc7a0ae160327058be1c8ca829242aa59fa0e14775269d69cc7a0ae160327058be1c8ca829242a29242afaf4f2"),a(h,"Monokai Pro Light Sun","f8efe7ce4770218871b16803d4572b6851a22473b62c232ea59c9cce4770218871b16803d4572b6851a22473b62c232e2c232ef8efe7"),a(h,"Monokai Pro Machine","273136ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffc6b7678ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffcf2fffc273136"),a(h,"Monokai Pro Octagon","282a3aff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1696d77ff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1eaf2f1282a3a"),a(h,"Monokai Pro Ristretto","2c2525fd6883adda78f9cc6cf38d70a8a9eb85daccfff1f372696afd6883adda78f9cc6cf38d70a8a9eb85daccfff1f3fff1f32c2525"),a(h,"Monokai Pro Spectrum","222222fc618d7bd88ffce566fd9353948ae35ad4e6f7f1ff69676cfc618d7bd88ffce566fd9353948ae35ad4e6f7f1fff7f1ff222222"),a(h,"Monokai Remastered","1a1a1af4005f98e024fd971f9d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efd9d9d90c0c0c"),a(h,"Monokai Soda","1a1a1af4005f98e024fa84199d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efc4c5b51a1a1a"),a(h,"Monokai Vivid","121212fa293498e123fff30a0443fff800f801b6edffffff838383f6669db1e05ffff26d0443fff200f651cefffffffff9f9f9121212"),a(h,"Moonfly","323437ff54548cc85fe3c78a80a0ffcf87e879dac8c6c6c6949494ff518936c692c6c68474b2ffae81ff85dc85e4e4e4bdbdbd080808"),a(h,"N0Tch2K","383838a95551666666a98051657d3e767676c9c9c9d0b8a3545454a977758c8c8ca9917598bd5ea3a3a3dcdcdcd8c8bba0a0a0222222"),a(h,"Neobones Dark","0f191fde6e7c90ff6bb77e648190d4b279a766a5adc6d5cf334652e8838fa0ff85d68c6792a0e2cf86c165b8c198a39ec6d5cf0f191f"),a(h,"Neobones Light","e5ede6a8334c567a3094492728648688507d3b8992202e1899ac9c94253e3f5a22803d1c1d55737b3b702b747c415934202e18e5ede6"),a(h,"Neon","000000ff30455ffa74fffc7e0f15d8f924e700fffcc7c7c7686868ff5a5a75ff88fffd963c40cbf15be588fffeffffff00fffc14161a"),a(h,"Neopolitan","0000009a1a1a61ce3cfbde2d324883ff00808da6cef8f8f84c4c4c9a1a1a61ce3cfbde2d324883ff00808da6cef8f8f8ffffff271f19"),a(h,"Neutron","23252bb540365ab977deb5666a7c93a4799d3f94a8e6e8ef494b51b540365ab977deb5666a7c93a4799d3f94a8ebedf2e6e8ef1c1e22"),a(h,"Night Lion V1","4c4c4cbb00005fde8ff3f167276bd8bb00bb00dadfbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),a(h,"Night Lion V2","4c4c4cbb000004f623f3f16764d0f0ce6fdb00dadfbbbbbb555555ff55557df71dffff5562cbe8ff9bf500ccd8ffffffbbbbbb171717"),a(h,"Night Owl","011627ef535022da6eaddb6782aaffc792ea21c7a8ffffff575656ef535022da6effeb9582aaffc792ea7fdbcaffffffd6deeb011627"),a(h,"Night Owlish Light","011627d3423e2aa298daaa014876d6403f5308916a7a81817a8181f76e6e49d0c5dac26b5ca7e469709800c990989fb1403f53ffffff"),a(h,"Nightfox","393b44c94f6d81b29adbc074719cd69d79d663cdcfdfdfe0575860d169838ebaa4e0c98986abdcbaa1e27ad5d6e4e4e5cdcecf192330"),a(h,"Niji","333333d23e0854ca74fff7002ab9ffff50da1ef9f5ddd0c4515151ffb7b7c1ffaefcffb88efff3ffa2edbcffc7ffffffffffff141515"),a(h,"No Clown Fiesta","151515b4695890a959f4bf75bad7ffaa759f88afa2e1e1e17272727e97ab90a959f4bf75bad7ffaa759f88afa2afafafe0e1e4101010"),a(h,"No Clown Fiesta Light","d6d6d6874e42677940b890588ba1bfaa759f3e5f661515152b2b2b637786677940b8905893a2abaa759f99ab93373737151515e1e1e1"),a(h,"Nocturnal Winter","4d4d4df12d5209cd7ef5f17a3182e0ff2b6d09c87afcfcfc808080f16d860ae78dfffc676096ffff78a20ae78dffffffe6e5e50d0d17"),a(h,"Nord","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f0596377bf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee92e3440"),a(h,"Nord Light","3b4252bf616a96b17fc5a56581a1c1b48ead7bb3c3a5abb64c566abf616a96b17fc5a56581a1c1b48ead82afaeeceff4414858e5e9f0"),a(h,"Nord Wave","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f04c566abf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee9212121"),a(h,"Nordfox","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f053648dd06f79b1d196f0d3998cafd2c895bf93ccdce7ecf4cdcecf2e3440"),a(h,"Novel","000000cc0000009600d06b000000cccc00cc0087cca6a6a6808080cc0000009600d06b000000cccc00cc0087ccffffff3b2322dfdbc3"),a(h,"Nvim Dark","07080dffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f84f5258ffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f8e0e2ea14161b"),a(h,"Nvim Light","07080d5900080055236b5300004c73470045007373a1a4ab4f52585900080055236b5300004c73470045007373eef1f814161be0e2ea"),a(h,"Obsidian","000000b30d0e00bb00fecd223a9bdbbb00bb00bbbbbbbbbb555555ff000393c863fef874a1d7ffff55ff55ffffffffffcdcdcd283033"),a(h,"Ocean","000000e64c4c00a6009999000000b2d826d800a6b2bfbfbf808080ff1a1a00d900e5e5007373ffe500e500e5e5e5e5e5ffffff224fbc"),a(h,"Oceanic Material","000000ee2b2a40a33fffea2e1e80f08800a016afcaa4a4a4777777dc5c6070be71fff16354a4f3aa4dbc42c7daffffffc2c8d71c262b"),a(h,"Oceanic Next","162c35ec5f6799c794fac8636699ccc594c55fb3b3ffffff65737eec5f6799c794fac8636699ccc594c55fb3b3ffffffc0c5ce162c35"),a(h,"Ollie","000000ac2e3131ac61ac43002d57acb085281fa6ac8a8eac684432ff3d483bff99ff5e1e4488ffffc21d1ffaff5b6ea78a8dae222125"),a(h,"One Dark Two","1d1f23e2788198c379eac78671b9f4c88bda62bac6c9ccd34a505ae68991a8cc8eedcf978dc7f6d3a2e278c4cee6e6e6e6e6e621252b"),a(h,"One Double Dark","3d4452f163728cc570ecbe703fb1f5d373e317b9c4dbdfe5525d6fff777b82d882f5c0656dcaffff7bf400e5fbf7f9fcdbdfe5282c34"),a(h,"One Double Light","454b58f7484025a343cc81000087c1b50da9009ab7c5b2b30e131fff371100b90eec99001065dee500d800b4ddffffff383a43fafafa"),a(h,"One Half Dark","282c34e06c7598c379e5c07b61afefc678dd56b6c2dcdfe45d677ae06c7598c379e5c07b61afefc678dd56b6c2dcdfe4dcdfe4282c34"),a(h,"One Half Light","383a42e4564950a14fc184010184bca626a40997b3bababa4f525ee06c7598c379d8b36e61afefc678dd56b6c2ffffff383a42fafafa"),a(h,"Onenord","3b4252e06c759ec183ebcb8b81a1c1b988b088c0d0e5e9f0596377e06c759ec183ebcb8b81a1c1b988b08fbcbbeceff4e5e9f02e3440"),a(h,"Onenord Light","2e3440cb4f5348a53dee5e253879c59f4aca3ea1adb2b6bd646a76d163665f9e9dba793e1b40a69665af8fbcbbeceff42e3440f7f8fa"),a(h,"Operator Mono Dark","5a5a5aca372d4d7b3ad4d6974387cfb86cb472d5c6ced4cd9a9b99c37d6283d0a2fdfdc589d3f6ff2c7a82eadafdfdf6c3cac2191919"),a(h,"Overnight Slumber","0a1222ffa7c485cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ffa7c485cc95ffcb8b8dabe1c792ebffa7c4ffffffced2d60e1729"),a(h,"Oxocarbon","16161600dfdb00b4ffff429700c15ac693ffff74b8f2f4f858585800dfdb00b4ffff429700c15ac693ffff74b8f2f4f8f2f4f8161616"),a(h,"Pale Night Hc","000000f07178c3e88dffcb6b82aaffc792ea89ddffffffff737373f6a9aedbf1baffdfa6b4ccffddbdf2b8eaff999999cccccc3e4251"),a(h,"Pandora","000000ff424274af68ffad29338f869414e623d7d7e2e2e23f5648ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e1141e43"),a(h,"Paraiso Dark","2f1e2eef615548b685fec41806b6ef815ba45bc4bfa39e9b776e71ef615548b685fec41806b6ef815ba45bc4bfe7e9dba39e9b2f1e2e"),a(h,"Paul Millr","2a2a2aff000079ff0fe7bf00396bd7b449be66ccffbbbbbb666666ff008066ff66f3d64e709aeddb67e67adff2fffffff2f2f2000000"),a(h,"Pencil Dark","212121c3077110a778a89c14008ec45f498620a5bad9d9d94f4f4ffb007a5fd7aff3e43020bbfc6855de4fb8ccf1f1f1f1f1f1212121"),a(h,"Pencil Light","212121c3077110a778a89c14008ec4523c7920a5bab3b3b3424242fb007a52caa2c0b10020bbfc6855de4fb8ccf1f1f1424242f1f1f1"),a(h,"Peppermint","353535e7466989d287dab853449fd0da62dc65aaafb4b4b4535353e4859ba3cca2e1e4876fbce2e586e796dcdbdfdfdfc8c8c8000000"),a(h,"Phala Green Dark","000000ab150000b100a9a7000223c0c22ec000b4c0cbcbcb797979ed220000db00eae7000433ffed3aea00e8eaeaeaeac1fc03000000"),a(h,"Piatto Light","414141b2377166781ecd6f343c5ea8a454b266781ebfbfbf3f3f3fdb3365829429cd6f343c5ea8a454b2829429f2f2f2414141ffffff"),a(h,"Pnevma","2f2e2da3666690a57dd7af877fa5bdc79ec48adbb4d0d0d04a4845d78787afbea2e4c9afa1bdced7bedab1e7ddefefefd0d0d01c1c1c"),a(h,"Poimandres","1a1e28d0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd1a1e28"),a(h,"Poimandres Darker","16161ed0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd16161e"),a(h,"Poimandres Storm","252b37d0679d5de4c7fffac289ddfff087bd89ddffffffffa6accdd0679d5de4c7fffac2add7fff087bdadd7ffffffffa6accd252b37"),a(h,"Poimandres White","fefeffff209001dab2e5ba4e8abacdeb83948abacd000000969cbdff209001dab2e5ba4e0ebfffeb83940ebfff000000969cbdfefeff"),a(h,"Popping And Locking","1d2021cc241d98971ad79921458588b16286689d6aa89984928374f42c3eb8bb26fabd2f99c6cad3869b7ec16eebdbb2ebdbb2181921"),a(h,"Powershell","000000981a22098003c4a0004140c3d336820e807f7f7c7f808080ef29291cfe3cfefe45268ad2fe13fa29fffec2c1c3f6f6f7052454"),a(h,"Primary","000000db44370f9d58f4b4004285f4db44374285f4bfbfbf000000db44370f9d58f4b4004285f44285f40f9d58ffffff000000ffffff"),a(h,"Pro","00000099000000a6009999002009dbb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e5f2f2f2000000"),a(h,"Pro Light","000000e5492b50d148c6c4403b75ffed66e84ed2dec2c2c29f9f9fff664048d53ebfbe230082ffff7eff3bd1d2f2f2f2191919ffffff"),a(h,"Purple Rain","000000ff260e9be205ffc40000a2fa815bb500deefffffff565656ff4250b8e36effd85200a6ffac7bf074fdf3fffffffffbf621084a"),a(h,"Purplepeter","0a0520ff796d99b481efdfac66d9efe78fcdba8cffffba81504b63f99f92b4be8ff2e9bf79daedba91d4a0a0d6b9aed3ece7fa2a1a4a"),a(h,"Rapture","000000fc644d7afde1fff09b6c9bf5ff4fa164e0ffc0c9e5304b66fc644d7afde1fff09b6c9bf5ff4fa164e0ffffffffc0c9e5111e2a"),a(h,"Raycast Dark","000000ff536059d499ffc53156c2ffcf2f9852eee5ffffff4c4c4cff636359d499ffc53156c2ffcf2f9852eee5ffffffffffff1a1a1a"),a(h,"Raycast Light","000000b12424006b4ff8a300138af29a1b6e3eb8bfbfbfbf000000b12424006b4ff8a300138af29a1b6e3eb8bfffffff000000ffffff"),a(h,"Rebecca","12131edd775504dbb5f2e7b77aa5ffbf9cf956d3c2e4e3e9666699ff92cd01eac0fffca869c0fac17ff88bfde1f4f2f9e8e6ed292a44"),a(h,"Red Alert","000000d62e4e71be6bbeb86b489beee979d76bbeb8d6d6d6666666e02553aff08cdfddb765aaf1ddb7dfb7dfddffffffffffff762423"),a(h,"Red Planet","2020208c3432728271e8bf6a69819e8964925b8390b9aa99676767b55242869985ebeb9160827ede497438add8d6bfb8c2b790222222"),a(h,"Red Sands","000000ff3f0000bb00e7b0000072ffbb00bb00bbbbbbbbbb6e6e6ed41a1a00bb00e7b0000072aeff55ff55ffffffffffd7c9a77a251e"),a(h,"Relaxed","151515bc5653909d63ebc17a6a8799b06698c9dfffd9d9d9636363bc5653a0ac77ebc17a7eaac7b06698acbbd0f7f7f7d9d9d9353a44"),a(h,"Retro","13a10e13a10e13a10e13a10e13a10e13a10e13a10e13a10e16ba1016ba1016ba1016ba1016ba1016ba1016ba1016ba1013a10e000000"),a(h,"Retro Legends","262626de545445eb45f7bf2b4066f2bf4cf240d9e6bfe6bf4c594cff666659ff59ffd9334c80ffe666ff59e6fff2fff245eb450d0d0d"),a(h,"Rippedcasts","000000cdaf95a8ff60bfbb1f75a5b0ff73fd5a647ebfbfbf666666eecbadbcee68e5e50086bdc9e500e58c9bc4e5e5e5ffffff2b2b2b"),a(h,"Rose Pine","26233aeb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def46e6a86eb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def4e0def4191724"),a(h,"Rose Pine Dawn","f2e9e1b4637a286983ea9d3456949f907aa9d7827e5752799893a5b4637a286983ea9d3456949f907aa9d7827e575279575279faf4ed"),a(h,"Rose Pine Moon","393552eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def46e6a86eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def4e0def4232136"),a(h,"Rouge 2","5d5d6bc6797e969e92dbcdab6e94b94c4e788ab6c1e8e8ea616274c6797ee6dcc4e6dcc498b3cd8283a1abcbd3e8e8eaa2a3aa17182b"),a(h,"Royal","241f2b91284c23801cb49d276580b0674d968aaabe5249663e3a4ad5356c2cd946fde83b90baf9a479e3acd4eb9e8cbd514968100815"),a(h,"Ryuuko","2c3941865f5b66907db1a9906a8e95b18a7388b2acececec5d7079865f5b66907db1a9906a8e95b18a7388b2acecececececec2c3941"),a(h,"Sakura","000000d5237041af1abc70536964abc71fbf939393998eac786d69f41d9922e529f595749892f1e90cddeeeeeecbb6ffdd7bdc18131e"),a(h,"Scarlet Protocol","101116ff005100dc84faf9450271b6ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffbd35ec60fdffffffffe419511c153d"),a(h,"Sea Shells","17384cd15123027c9bfca02f1e495068d4f150a3b5deb88d434b53d48678628d98fdd39f1bbcddbbe3ee87acb4fee4cedeb88d09141b"),a(h,"Seafoam Pastel","757575825d4d728c62ada16d4d7b828a7267729494e0e0e08a8a8acf937a98d9aafae79d7ac3cfd6b2a1ade0e0e0e0e0d4e7d4243435"),a(h,"Selenized Black","252525ed4a4670b433dbb32d368aebeb6eb73fc5b7b9b9b9777777ff5e5683c746efc5414f9cfeff81ca56d8c9dededeb9b9b9181818"),a(h,"Selenized Dark","184956fa575075b938dbb32d4695f7f275be41c7b9adbcbc72898fff665c84c747ebc13d58a3ffff84cd53d6c7cad8d9adbcbc103c48"),a(h,"Selenized Light","ece3ccd2212d489100ad89000072d4ca4898009c8f53676d909995cc1729428b00a78300006dcec4439200978a3a4d5353676dfbf3db"),a(h,"Seoulbones Dark","4b4b4be388a398bd99ffdf9b97bddea5a6c56fbdbedddddd797172eb99b18fcd92ffe5b3a2c8e9b2b3da6bcacba8a8a8dddddd4b4b4b"),a(h,"Seoulbones Light","e2e2e2dc5284628562c485620084a3896788008586555555a5a0a1be3c6d487249a76b48006f897f4c7e006f70777777555555e2e2e2"),a(h,"Seti","323232c228328ec43de0c64f43a5d58b57b58ec43deeeeee3f3f3fc228328ec43de0c64f43a5d58b57b58ec43dffffffcacecd111213"),a(h,"Shades Of Purple","000000d904293ad900ffe7006943ffff2c7000c5c7c7c7c7686868f92a1c43d426f1d0006871ffff77ff79e8fbffffffffffff1e1d40"),a(h,"Shaman","012026b2302d00a9415e8baa449a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6405555001015"),a(h,"Slate","222222e2a8bf81d778c4c9c0335856a481d315ab9c02c5e0ffffffffcdd9beffa8d0ccca7ab0d2c5a7d98cdfe0e0e0e035b1d2222222"),a(h,"Sleepy Hollow","572100ba393491773fb556005f63b4a17c7b8faea9af9a914e4b61d9443fd6b04ef668138086efe2c2bba4dce7d2c7a9af9a91121214"),a(h,"Smyck","000000b841317da900c4a50062a3c4ba8acc207383a1a1a17a7a7ad6837cc4f137fee14d8dcff0f79aff6ad9cff7f7f7f7f7f71b1b1b"),a(h,"Snazzy","000000fc434650fb7cf0fb8c49bafffc4cb48be9feededec555555fc434650fb7cf0fb8c49bafffc4cb48be9feededecebece61e1f29"),a(h,"Snazzy Soft","000000ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0686868ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0eff0eb282a36"),a(h,"Soft Server","000000a2686a9aa56aa3906a6b8fa36a71a36ba58f99a3a2666c6cdd5c60bfdf55deb36062b1df606edf64e39cd2e0de99a3a2242626"),a(h,"Solarized Darcula","25292af24840629655b688002075c7797fd415968dd2d8d965696af24840629655b688002075c7797fd415968dd2d8d9d2d8d93d3f41"),a(h,"Solarized Dark Higher Contrast","002831d11c246cbe6ca577062176c7c61c6f259286eae3cb006488f5163b51ef84b27e28178ec8e24d8e00b39efcf4dc9cc2c3001e27"),a(h,"Solarized Dark Patched","002831d11c24738a05a577062176c7c61c6f259286eae3cb475b62bd3613475b625368707082845956ba819090fcf4dc708284001e27"),a(h,"Solarized Osaka Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(h,"Sonokai","181819fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e37f8490fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e3e2e2e32c2e34"),a(h,"Spacedust","6e5346e35b005cab96e3cd7b0f548be35b0006afc7f0f1ce684c31ff8a3aaecab8ffc87867a0ceff8a3a83a7b4fefff1ecf0c10a1e24"),a(h,"Spacegray","000000b04b5787b379e5c1797d8fa4a4799685a7a5b3b8c34c4c4cb04b5787b379e5c1797d8fa4a4799685a7a5ffffffb3b8c320242d"),a(h,"Spacegray Bright","080808bc5553a0b56cf6c9877baec1b98aae85c9b8d8d8d8626262bc5553a0b56cf6c9877baec1b98aae85c9b8f7f7f7f3f3f32a2e3a"),a(h,"Spacegray Eighties","15171cec5f6781a764fec2545486c0bf83c157c2c1efece7555555ff697393d493ffd2564d84d1ff55ff83e9e4ffffffbdbaae222222"),a(h,"Spacegray Eighties Dull","15171cb24a5692b477c6735a7c8fa5a5789e80cdcbb3b8c3555555ec5f6789e986fec2545486c0bf83c158c2c1ffffffc9c6bc222222"),a(h,"Spiderman","1b1d1ee60813e22928e247562c3fff2435db3256fffffef6505354ff0325ff3338fe3a351d50ff747cff6184fffffff9e3e3e31b1d1e"),a(h,"Spring","000000ff4d831f8c3b1fc95b1dd3ee8959a83e999fbfbfbf000000ff00211fc231d5b80715a9fd8959a83e999fffffff4d4d4cffffff"),a(h,"Square","050505e9897cb6377decebbea9cdeb75507bc9caecf2f2f2474747f99286c3f786fcfbccb6defbad7fa8d7d9fce2e2e2acacab1a1a1a"),a(h,"Squirrelsong Dark","372920ba4138468336d4b1394395c6855fb82f9794d3b9a2704f39df4d43659a4ce8c23f4ca4db9d70da60aca9f2d4bbb19b89372920"),a(h,"Srcery","1c1b19ef2f27519f50fbb8292c78bfe02c6d0aaeb3baa67f918175f7534198bc37fed06e68a8e4ff5c8f2be4d0fce8c3fce8c31c1b19"),a(h,"Starlight","242424f62b5a47b413e3c40124acd4f2affd13c299e6e6e6616161ff4d5135d450e9e8365dc5f8feabf224dfc4ffffffffffff242424"),a(h,"Sublette","253045ee557755ee77ffdd885588ffff77cc44eeeef5f5da405570ee665599ee77ffff7777bbffaa88ff55ffbbffffeeccced0202535"),a(h,"Subliminal","7f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d47f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d4d4d4d4282c35"),a(h,"Sugarplum","1111475ca8dc53b397249a84db7dddd0beeef9f3f9a175d444447a5cb5dc52deb501f5c7fa5dfdc6a5fdffffffb577fddb7ddd111147"),a(h,"Sundried","302b2aa7463d5877449d602a485b988646519c814fc9c9c94d4e48aa000c128c21fc6a217999f7fd8aa1fad484ffffffc9c9c91a1818"),a(h,"Sunset Drive","0a0a13ff006300f992ffe90000a4ffff57fd00ffedededff3e3e4bff948b00fcb9ffff683ea0ffff93ff38fffff8f8ffededfe0f0f1a"),a(h,"Symfonic","000000dc322f56db3aff84000084d4b729d9ccccffffffff414347dc322f56db3aff84000084d4b729d9ccccffffffffffffff000000"),a(h,"Synthwave","000000f6188f1ebb2bfdf8342186ecf85a2112c3e2ffffff7f7094f841a025c141fdf4542f9dedf9713719cde6ffffffdad9c7000000"),a(h,"Synthwave Alpha","241b30e60a7000986cadad3e6e29adb300ad00b0b1b9b1bc7f7094e60a700ae4a4f9f972aa54f9ff00f600fbfdf2f2e3f2f2e3241b30"),a(h,"Synthwave Everything","fefefef97e7272f1b8fede5d6d77b3c792eaf772e0fefefefefefef8841472f1b8fff95136f9f6e1acfff92aadfefefef0eff12a2139"),a(h,"Tango Adapted","000000ff000059d600e3be0000a2ffc17ecc00d0d6c0c5bb8f928bff00136dd900ccbe0088c9ffe9a7e100d8d9f6f6f4000000ffffff"),a(h,"Tango Half Adapted","000000ff00004cc300e2c000008ef6a96cb300bdc3babfb5797d76ff001370dc00d9c60076bfffd898d100d0d4f4f4f2000000ffffff"),a(h,"Tearout","685742cc967b97976d6c9861b5955ec9a554d7c483b5955e75644fcc967b97976d6c9861b5955ec9a554d7c483b5955ef4d2ae34392d"),a(h,"Teerb","1c1c1cd68686aed686d7af8786aed6d6aed68adbb4d0d0d04f4f4fd68686aed686e4c9af86aed6d6aed6b1e7ddefefefd0d0d0262626"),a(h,"Terafox","2f3239e85c517aa4a1fda47f5a93aaad5c7ca1cdd8ebebeb4e5157eb746b8eb2affdb29273a3b7b97490afd4deeeeeeee6eaea152528"),a(h,"Terminal Basic","00000099000000a6009999000000b2b200b200a6b2bfbfbf666666e5000000d900bfbf000000ffe500e500d8d8e5e5e5000000ffffff"),a(h,"Terminal Basic Dark","000000c653396ac44bb8b74a6444edd357db69c1cfd1d1d1909090eb5a3a77ea51efef53d09af9eb5af778f1f2edededffffff1d1e1d"),a(h,"Thayer Bright","1b1d1ef926724df840f4fd222757d68c54fe38c8b5ccccc6505354ff5995b6e354feed6c3f78ff9e6ffe23cfd5f8f8f2f8f8f81b1d1e"),a(h,"The Hulk","1b1d1e269d1b13ce3063e4572525f5712c81378ca9d9d8d15053548dff2a48ff773afe16506b9572589d4085a6e5e6e1b5b5b51b1d1e"),a(h,"Tinacious Design Dark","1d1d26ff339900d364ffcc6600cbffcc66ff00cecacbcbf0636667ff2f9200d364ffd47900cbffd783ff00d5d4d5d6f3cbcbf01d1d26"),a(h,"Tinacious Design Light","1d1d26ff339900d364e5b24d00cbffcc66ff00cecab1b1d6636667ff2f9200d364d9ae5300cbffd783ff00c8c7d5d6f31d1d26f8f8ff"),a(h,"TokyoNight","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(h,"TokyoNight Day","e9e9edf52a655875398c6c3e2e7de99854f10071976172b0a1a6c5f52a655875398c6c3e2e7de99854f10071973760bf3760bfe1e2e7"),a(h,"TokyoNight Moon","1b1d2bff757fc3e88dffc77782aaffc099ff86e1fc828bb8444a73ff757fc3e88dffc77782aaffc099ff86e1fcc8d3f5c8d3f5222436"),a(h,"TokyoNight Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),a(h,"TokyoNight Storm","1d202ff7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d64e5575f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf524283b"),a(h,"Tomorrow","000000c82829718c00eab7004271ae8959a83e999fbfbfbf000000c82829718c00eab7004271ae8959a83e999fffffff4d4d4cffffff"),a(h,"Tomorrow Night","000000cc6666b5bd68f0c67481a2beb294bb8abeb7ffffff4c4c4ccc6666b5bd68f0c67481a2beb294bb8abeb7ffffffc5c8c61d1f21"),a(h,"Tomorrow Night Blue","000000ff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffff4c4c4cff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffffffffff002451"),a(h,"Tomorrow Night Bright","000000d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffff404040d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffffeaeaea000000"),a(h,"Tomorrow Night Burns","252525832e31a63c40d3494efc595fdf9395ba8586f5f5f55d6f71832e31a63c40d2494efc595fdf9395ba8586f5f5f5a1b0b8151515"),a(h,"Tomorrow Night Eighties","000000f2777a99cc99ffcc666699cccc99cc66ccccffffff595959f2777a99cc99ffcc666699cccc99cc66ccccffffffcccccc2d2d2d"),a(h,"Toy Chest","2c3f58be2d261a9172db8e27325d968a5edc35a08f23d183336889dd594431d07be7d84b34a6daae6bdc42c3aed5d5d531d07b24364b"),a(h,"Treehouse","321300b2270e44a900aa820c58859a97363db25a1e786b53504333ed5d2055f238f2b73285cfede14c5af07d14ffc800786b53191919"),a(h,"Twilight","141414c06d44afb97ac2a86c44474ab4be7c778385ffffd4404040de7c4cccd88ce2c47e5a5e62d0dc8e8a989bffffd4ffffd4141414"),a(h,"Ubuntu","2e3436cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeeceeeeec300a24"),a(h,"Ultra Dark","000000f07178c3e88dffcb6b82aaffc792ea89ddffcccccc404040f6a9aedbf1baffdfa6b4ccffddbdf2b8eaffffffffffffff000000"),a(h,"Ultra Violent","242728ff0090b6ff00fff72747e0fbd731ff0effbbe1e1e1636667fb58b4deff8cebe0877fecffe681ff69fcd3f9f9f5c1c1c1242728"),a(h,"Under The Sea","022026b2302d00a94159819c459a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6ffffff011116"),a(h,"Unikitty","0c0c0ca80f20c7ff98fff964145fcdffe9ff9effeffcf1fb434343d91329d3ffafffef500075eaffefff93ffeffff3fe0b0b0bff8cd9"),a(h,"Urple","000000b0425b37a415ad5c42564d9b6c3ca180808087799c6a3f32ff638829e620f08161867aeda05eeeeaeaeabfa3ff877a9b1b1b23"),a(h,"Vague","252530d8647e7fa563f3be7c6e94b2bb9dbdaeaed1cdcdcd606079e0839899b782f5cb968ba9c1c9b1cabebedad7d7d7cdcdcd141415"),a(h,"Vaughn","25234f70505060b48adfaf8f5555fff08cc38cd0d3709080709080dca3a360b48af0dfaf5555ffec93d393e0e3ffffffdcdccc25234f"),a(h,"Vercel","000000fc003629a948ffae00006afff3288200ac96feffffa8a8a8ff80804be15dffae0049aefff97ea800e4c4fefefefafafa101010"),a(h,"Vesper","101010f5a19190b99fe6b99daca1cfe29ecaea83a5a0a0a07e7e7eff808099ffe4ffc799b9aedaecaad6f591b2ffffffffffff101010"),a(h,"Vibrant Ink","878787ff6600ccff04ffcc0044b4cc9933cc44b4ccf5f5f5555555ff000000ff00ffff000000ffff00ff00ffffe5e5e5ffffff000000"),a(h,"Vimbones","f0f0caa8334c4f6c3194492728648688507d3b8992353535acac8994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535f0f0ca"),a(h,"Violet Dark","56595cc94c2285981cb4881d2e8bced13a8232a198c9c6bd45484bbd3613738a04a577052176c7c61c6f259286c9c6bd7082841c1d1f"),a(h,"Violet Light","56595cc94c2285981cb4881d2e8bced13a8232a198b9b6af45484bbd3613738a04a577052176c7c61c6f259286c9c6bd536870fcf4dc"),a(h,"Violite","241c36ec797979ecb3ece279a979ecec79ec79ececeef4f656447aef8f8f9fefbfefe78fb78fefef8fcf9fefeff8fafceef4f6241c36"),a(h,"Warm Neon","000000e2434639b13adae1454261c5f920fb2abbd4d0b8a3fefcfce970719cc090ddda7a7b91d6f674ba5ed1e5d8c8bbafdab6404040"),a(h,"Wez","000000cc555555cc55cdcd555555cccc55cc7acacacccccc555555ff555555ff55ffff555555ffff55ff55ffffffffffb3b3b3000000"),a(h,"Whimsy","535178ef64875eca89fdd87765aef7aa7ff043c1beffffff535178ef64875eca89fdd87765aef7aa7ff043c1beffffffb3b0d629283b"),a(h,"Wild Cherry","000507d940852ab250ffd16f883cdcecececc1b8b7fff8de009cc9da6bacf4dca5eac066308cbaae636bff919de4838ddafaff1f1726"),a(h,"Wilmersdorf","34373ee063837ebebdcccccca6c1e0e1c1ee5b94abababab50545dfa71938fd7d6d1dfffb2cff0efccfd69abc5d3d3d3c6c6c6282b33"),a(h,"Wombat","000000ff615ab1e969ebd99c5da9f6e86aff82fff7dedacf4a4a4af58c80ddf88feee5b2a5c7ffddaaffb7fff9ffffffdedacf171717"),a(h,"Wryan","3333338c46652873737c7c993955735e468c31658c899ca13d3d3dbf4d8053a6a69e9ecb477ab37e62b36096bfc0c0c0999993101010"),a(h,"Xcode Dark","414453ff817078c2b3d9c97c4eb0ccff7ab2b281ebdfdfe07f8c98ff8170acf2e4ffa14f6bdfffff7ab2dabaffdfdfe0dfdfe0292a30"),a(h,"Xcode Dark hc","43454bff8a7a83c9bcd9c6684ec4e6ff85b8cda1ffffffff838991ff8a7ab1faebffa14f6bdfffff85b8e5cfffffffffffffff1f1f24"),a(h,"Xcode Light","b4d8fdd12f1b3e808778492a0f68a0ad3da4804fb82626268a99a6d12f1b23575c78492a0b4f79ad3da44b21b0262626262626ffffff"),a(h,"Xcode Light hc","b4d8fdad1805355d6178492a0058a19c2191703daa0000008a99a6ad180517414578492a003f739c2191441ea1000000000000ffffff"),a(h,"Xcode WWDC","494d5cbb383a94c66ed28e5d8884c5b7399900aba4e7e8eb7f869ebb383a94c66ed28e5d8884c5b7399900aba4e7e8ebe7e8eb292c36"),a(h,"Zenbones","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(h,"Zenbones Dark","1c1917de6e7c819b69b77e646099c0b279a766a5adb4bdc34d4540e8838f8bae68d68c6761abdacf86c165b8c1888f94b4bdc31c1917"),a(h,"Zenbones Light","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),a(h,"Zenburn","4d4d4d7d5d5d60b48af0dfaf5d6d7ddc8cc38cd0d3dcdccc709080dca3a3c3bf9fe0cf9f94bff3ec93d393e0e3ffffffdcdccc3f3f3f"),a(h,"Zenburned","404040e3716e819b69b77e646099c0b279a766a5adf0e4cf6f6768ec86858bae68d68c6761abdacf86c165b8c1c0ab86f0e4cf404040"),a(h,"Zenwritten Dark","191919de6e7c819b69b77e646099c0b279a766a5adbbbbbb4a4546e8838f8bae68d68c6761abdacf86c165b8c18e8e8ebbbbbb191919"),a(h,"Zenwritten Light","eeeeeea8334c4f6c3194492728648688507d3b8992353535aca9a994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535eeeeee"),a(h,"branch","35241cc2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9564a45c2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9cfc1a932221a"),a(h,"iTerm2 Dark Background","000000c91b0000c200c7c4000225c7ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffc7c7c7000000"),a(h,"iTerm2 Default","000000c91b0000c200c7c4002225c4ca30c700c5c7ffffff686868ff6e675ffa68fffc676871ffff77ff60fdffffffffffffff000000"),a(h,"iTerm2 Light Background","000000c91b0000c200c7c4000225c7ca30c700c5c7bababa686868ff6e6739d442ccc9346871ffff77ff3ad7d9ffffff000000ffffff"),a(h,"iTerm2 Pastel Dark Background","626262ff8373b4fb73fffdc3a5d5feff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5c2e3ffffb2fee6e6feffffffc7c7c7000000"),a(h,"iTerm2 Smoooooth","14191eb43c2a00c200c7c4002744c7c040be00c5c7c7c7c7686868dd797558e790ece100a7abf2e17ee160fdffffffffdcdcdc15191f"),a(h,"iTerm2 Solarized Dark","073642dc322f859900b58900268bd2d336822aa198eee8d5335e69cb4b16586e75657b838394966c71c493a1a1fdf6e3839496002b36"),a(h,"iTerm2 Solarized Light","073642dc322f859900b58900268bd2d336822aa198bbb5a2002b36cb4b16586e75657b838394966c71c493a1a1fdf6e3657b83fdf6e3"),a(h,"iTerm2 Tango Dark","000000d81e005ea702cfae00427ab389658e00a7aadbded8686a66f5423599e343fdeb6184b0d8bc94b737e6e8f1f1f0ffffff000000"),a(h,"iTerm2 Tango Light","000000d81e005ea702cfae00427ab389658e00a7aac1c4be686a66f542358cd636d7c53b84b0d8bc94b71ecccef1f1f0000000ffffff"),a(h,"novmbr","282a2e9f64349dac5fcca75f2f7d7cb5896e52877fc7b8ac5d4e479f64349dac5fcca75f2f7d7cb5896e52877fc7b8acc7b8ac241d1a"),a(h,"owl","302c2c5a5a5a989898cacaca656565b1b1b17f7f7fdedede5d595bda5b2c989898cacaca656565b1b1b17f7f7fffffffdedede2f2b2c"),a(h,"traffic","282d31934e46637268c79e84515e67715f5e5c6f7dcfb9a84e575e934e46637270c79e84515e67715f5e5c6f7dddcec2cfb9a8272c30"),a(h,"urban","33303b87404f74934eae835a615772854b64625464c0a79a5c586587404f74934eae835a615772854b64625464c0a79ac0a79a312e39"),gC,CC,a(h,"Logoyo Dark","1c1466ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f2f0ff6a63a0ff6b5e6cc04affc83d6ba8f0b57bf058d6c8fffffff2f0ff2a1e80"),a(h,"Logoyo Light","1c1452ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f4f2ff8983b5ff6b5e6cc04affc83d6ba8f0b57bf058d6c8ffffff29216bc5c1fc"),_C,wC,jC,yC,kC]),Nn={$:-2},Be=Nn,hO=1,Fe=Le(function(e,r,n,t,o){return{$:-1,a:e,b:r,c:n,d:t,e:o}}),gO=0,Pc=Le(function(e,r,n,t,o){if(o.$===-1&&!o.a){var c=o.a,i=o.b,u=o.c,$=o.d,l=o.e;if(t.$===-1&&!t.a){var d=t.a,b=t.b,g=t.c,C=t.d,p=t.e;return R(Fe,0,r,n,R(Fe,1,b,g,C,p),R(Fe,1,i,u,$,l))}else return R(Fe,e,i,u,R(Fe,0,r,n,t,$),l)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){var m=t.a,b=t.b,g=t.c,P=t.d,_=P.a,j=P.b,L=P.c,T=P.d,U=P.e,p=t.e;return R(Fe,0,b,g,R(Fe,1,j,L,T,U),R(Fe,1,r,n,p,o))}else return R(Fe,e,r,n,t,o)}),Z0=D(function(e,r,n){if(n.$===-2)return R(Fe,0,e,r,Nn,Nn);var t=n.a,o=n.b,c=n.c,i=n.d,u=n.e,$=a(N0,e,o);switch($){case 0:return R(Pc,t,o,c,v(Z0,e,r,i),u);case 1:return R(Fe,t,o,r,i,u);default:return R(Pc,t,o,c,i,v(Z0,e,r,u))}}),Tr=D(function(e,r,n){var t=v(Z0,e,r,n);if(t.$===-1&&!t.a){var o=t.a,c=t.b,i=t.c,u=t.d,$=t.e;return R(Fe,1,c,i,u,$)}else{var l=t;return l}}),xn=function(e){return v(me,s(function(r,n){var t=r.a,o=r.b;return v(Tr,t,o,n)}),Be,e)},Ab=K(function(e,r,n,t){if(t.b){var o=t.a,c=t.b;if(c.b){var i=c.a,u=c.b;if(u.b){var $=u.a,l=u.b;if(l.b){var d=l.a,b=l.b,g=n>500?v(me,e,r,De(b)):x(Ab,e,r,n+1,b);return a(e,o,a(e,i,a(e,$,a(e,d,g))))}else return a(e,o,a(e,i,a(e,$,r)))}else return a(e,o,a(e,i,r))}else return a(e,o,r)}else return r}),cn=D(function(e,r,n){return x(Ab,e,r,0,n)}),W=s(function(e,r){return v(cn,s(function(n,t){return a(M,e(n),t)}),S,r)}),LC=xn(a(W,function(e){return y(e.sX,e)},zb)),DC=function(e){return a(ar,e,LC)},CO=Hh,_O=Rh,Fb=D(function(e,r,n){return e<=0?n:v(Fb,e>>1,Y(r,r),e&1?Y(n,r):n)}),Sc=s(function(e,r){return v(Fb,e,r,"")}),Eb=(function(){var e=zb;if(e.b){var r=e.a,n=e.b;return y(r,n)}else return y(a(h,"Fallback",a(Sc,108,"0")),S)})(),fe=s(function(e,r){if(r.$)return e;var n=r.a;return n}),X0=function(e){return a(fe,Eb.a,DC(e))},K0=(function(){var e=5;return{hc:e,c7:a(Ri,e,X0("Argonaut")),dh:a(Ri,e,X0("Erkal Light")),dR:!1}})(),TC={hU:!0,gj:!0,dJ:!0,gk:!0,gl:!1,dK:!0,eV:!0,hV:!0,cj:!0,hW:!0,hY:W0,bL:!1,e:K0},MC=TC,zC=MC,Jn=gh,Hr=_9,Ii=function(e){return e*Hr/180},Y0={$:0},Hb={ex:!1,js:!1,eD:!1,eZ:!1,fm:!1,fp:!1,fq:!1,fF:!1},Vb=function(e){return{fZ:e.fZ,ez:Hb,c9:Y0,co:{pX:0,hD:2,eH:.5,hQ:{pC:0,pD:.4,L:0}}}},AC={$:0},Zn=AC,FC=s(function(e,r){return V({d1:Vb({fZ:!0}),oU:Ii(150)/Hr},Zn,S)}),EC=s(function(e,r){return V({d1:Vb({fZ:!0}),oU:.5},Zn,S)}),Bb=function(e){return{aA:e.aA,bE:e.bE,b_:e.b_,aH:e.aH,fr:e.fr}},qi=$h,Je=Ph,Xn=Sh,ae=uh,Q0=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},br=xa("div"),bt=function(e){var r=e;return r.dR?r.dh:r.c7},Ee=s(function(e,r){return e(bt(r))}),Ub=D(function(e,r,n){return{$:0,a:e,b:r,c:n}}),HC=Ub,jn=HC,mr=s(function(e,r){return H(r,{aQ:e})}),Mf=function(e){return{$:4,a:e}},zf=_0,Rb=function(e){return Mf(zf(e))},$e=Rb,J=kd,pe=function(e){return"hsla("+(J(e.aT*360)+(", "+(J(e.a1*100)+("%, "+(J(e.C*100)+("%, "+(J(e.aQ)+")")))))))},jo={aQ:1,aT:0,C:1,a1:0},Ib=function(e){var r=pe(jo),n=pe(a(mr,.25,a(Ee,function(i){return i.bt},e))),t=pe(a(Ee,function(i){return i.jh},e)),o=pe(a(Ee,function(i){return i.i1},e)),c=pe(a(Ee,function(i){return i.bt},e));return v(jn,"style",S,f([$e(`
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
`))))))))))))))))))))))))))))]))},qb=v7,B=qb,Af=function(e){return{$:0,a:e}},VC=K(function(e,r,n,t){return{eo:t,eW:n,oI:r,kY:e}}),Ob=3432918353,Gb=461845907,yO=Uh,PO=Ih,ko=s(function(e,r){return(r&65535)*e+(((r>>>16)*e&65535)<<16)}),SO=Vh,ev=s(function(e,r){return r<<e|r>>>32-e}),xO=Bh,BC=function(e){var r=e.eW?e.oI^a(ko,Gb,a(ev,15,a(ko,Ob,e.eW))):e.oI,n=r^e.eo,t=a(ko,2246822507,n^n>>>16),o=a(ko,3266489909,t^t>>>13);return(o^o>>>16)>>>0},UC=q9,RC=s(function(e,r){return a(ko,5,a(ev,13,e^a(ko,Gb,a(ev,15,a(ko,Ob,r)))))+3864292196}),IC=s(function(e,r){var n=r.eW|(255&st(e))<<r.kY,t=r.kY;return t===24?{eo:r.eo+1,eW:0,oI:a(RC,r.oI,n),kY:0}:{eo:r.eo+1,eW:n,oI:r.oI,kY:r.kY+8}}),qC=s(function(e,r){return BC(v(UC,IC,x(VC,0,e,0,0),r))}),OC=15739,Oi=th,jO=function(e){return-e},ja=C9,Wb=function(e){e:for(;;)switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";case 15:return"f";default:var r=e;e=r;continue e}},Nb=s(function(e,r){e:for(;;){if(r<16)return a(M,Wb(r),e);var n=a(M,Wb(a(ja,16,r)),e),t=r/16|0;e=n,r=t;continue e}}),GC=function(e){return Oi(e<0?a(M,"-",a(Nb,S,-e)):a(Nb,S,e))},Jb=function(e){return a(Tf,"_",GC(a(qC,OC,e)))},un=s(function(e,r){var n=e.b,t=e.c;if(n){var o=a(ar,t,r);return o.$?v(Tr,t,Jb(t),r):r}else return r}),rv=s(function(e,r){return a(y0,m7(e),h7(r))}),Gr=f0,Yt=s(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(ar,o,e);if(c.$)return a(rv,"className",Gr("_unstyled"));var i=c.a;return a(rv,"className",Gr(i))}else return n}),kn=s(function(e,r){return a(yf,qd(e),Od(r))}),Ff=s(function(e,r){var n=r.a,t=r.b,o=r.c;if(t){var c=a(ar,o,e);if(c.$)return a(kn,"class","_unstyled");var i=c.a;return a(kn,"class",i)}else return n}),Ef=function(e){return f7(Pf(e))},av=s(function(e,r){return a(Ud,e,Pf(r))}),wo=function(e){return xa(Pf(e))},nv=s(function(e,r){return a(Bd,e,Pf(r))}),xc=s(function(e,r){var n=e.a,t=e.b,o=r.a,c=r.b;switch(t.$){case 4:var _=t.a;return y(a(M,y(n,_),o),c);case 0:var d=t.a,b=t.b,g=t.c,C=v(me,un,c,b),i=v(me,jc,y(S,C),g),m=i.a,P=i.b,_=v(wo,d,a(W,Yt(P),b),De(m));return y(a(M,y(n,_),o),P);case 1:var l=t.a,d=t.b,b=t.c,g=t.d,C=v(me,un,c,b),u=v(me,jc,y(S,C),g),m=u.a,P=u.b,_=x(nv,l,d,a(W,Yt(P),b),De(m));return y(a(M,y(n,_),o),P);case 2:var d=t.a,b=t.b,g=t.c,C=v(me,un,c,b),$=v(me,xc,y(S,C),g),m=$.a,P=$.b,_=v(Ef,d,a(W,Yt(P),b),De(m));return y(a(M,y(n,_),o),P);default:var l=t.a,d=t.b,b=t.c,g=t.d,C=v(me,un,c,b),p=v(me,xc,y(S,C),g),m=p.a,P=p.b,_=x(av,l,d,a(W,Yt(P),b),De(m));return y(a(M,y(n,_),o),P)}}),jc=s(function(e,r){var n=r.a,t=r.b;switch(e.$){case 4:var m=e.a;return y(a(M,m,n),t);case 0:var $=e.a,l=e.b,d=e.c,b=v(me,un,t,l),o=v(me,jc,y(S,b),d),C=o.a,p=o.b,m=v(wo,$,a(W,Yt(p),l),De(C));return y(a(M,m,n),p);case 1:var u=e.a,$=e.b,l=e.c,d=e.d,b=v(me,un,t,l),c=v(me,jc,y(S,b),d),C=c.a,p=c.b,m=x(nv,u,$,a(W,Ff(p),l),De(C));return y(a(M,m,n),p);case 2:var $=e.a,l=e.b,d=e.c,b=v(me,un,t,l),i=v(me,xc,y(S,b),d),C=i.a,p=i.b,m=v(Ef,$,a(W,Yt(p),l),De(C));return y(a(M,m,n),p);default:var u=e.a,$=e.b,l=e.c,d=e.d,b=v(me,un,t,l),g=v(me,xc,y(S,b),d),C=g.a,p=g.b,m=x(av,u,$,a(W,Ff(p),l),De(C));return y(a(M,m,n),p)}}),Gi=function(e){return f([e])},Lo=D(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,c=n.d,i=n.e,u=e,$=v(e,t,o,v(Lo,e,r,c)),l=i;e=u,r=$,n=l;continue e}}),tv="\x07",kc=D(function(e,r,n){return a(Lr,r,a(gn,e,n))}),WC=D(function(e,r,n){return n+(`
`+v(kc,tv,r,e))}),NC=function(e){return v(Lo,WC,"",e)},Zb=s(function(e,r){return v(Lo,D(function(n,t,o){return o+(`
`+v(kc,"."+tv,"#"+(e+("."+t)),n))}),"",r)}),ov=s(function(e,r){var n=(function(){if(r.$){var o=r.a,c=r.b,i=r.c;return a(Zb,o,c)+(`
`+a(Zb,o+" ",i))}else{var t=r.a;return NC(t)}})();return v(wo,"span",f([a(kn,"style","display: none;"),a(kn,"class","elm-css-style-wrapper")]),f([v(wo,"style",(function(){if(e.$)return S;var t=e.a;return f([a(kn,"nonce",t)])})(),Gi(zf(n)))]))}),JC=K(function(e,r,n,t){var o=v(me,un,Be,n),c=v(me,jc,y(S,o),t),i=c.a,u=c.b,$=a(ov,e,Af(u)),l=a(W,Yt(u),n);return v(wo,r,l,a(M,$,De(i)))}),ZC=s(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b;if(oe(e,t))return!0;var c=e,i=o;e=c,r=i;continue e}else return!1}),XC=s(function(e,r){e:for(;;)if(r.b){var n=r.a,t=n.a,o=r.b,c="_"+t;if(a(ZC,c,o)){var i=c,u=o;e=i,r=u;continue e}else return c}else return e}),Xb=D(function(e,r,n){var t=a(XC,"_",n),o=a(ov,e,r);return y(t,o)}),KC=K(function(e,r,n,t){var o=v(me,un,Be,n),c=v(me,xc,y(S,o),t),i=c.a,u=c.b,$=v(Xb,e,Af(u),i),l=a(W,Yt(u),n);return v(Ef,r,l,a(M,$,De(i)))}),YC=Le(function(e,r,n,t,o){var c=v(me,un,Be,t),i=v(me,xc,y(S,c),o),u=i.a,$=i.b,l=v(Xb,e,Af($),u),d=a(W,Ff($),t);return x(av,r,n,d,a(M,l,De(u)))}),QC=Le(function(e,r,n,t,o){var c=v(me,un,Be,t),i=v(me,jc,y(S,c),o),u=i.a,$=i.b,l=a(ov,e,Af($)),d=a(W,Ff($),t);return x(nv,r,n,d,a(M,l,De(u)))}),Kb=function(e){switch(e.$){case 4:var r=e.a;return r;case 0:var t=e.a,o=e.b,c=e.c;return x(JC,z,t,o,c);case 1:var n=e.a,t=e.b,o=e.c,c=e.d;return R(QC,z,n,t,o,c);case 2:var t=e.a,o=e.b,c=e.c;return x(KC,z,t,o,c);default:var n=e.a,t=e.b,o=e.c,c=e.d;return R(YC,z,n,t,o,c)}},Kn=Kb,e_=function(e){return a(br,f([a(B,"min-height","100dvh"),a(B,"background",pe(a(Ee,function(r){return r.D},e.e))),a(B,"color",pe(a(Ee,function(r){return r.lh},e.e))),a(B,"font-family","system-ui, sans-serif")]),a(M,Kn(Ib(e.e)),a(W,function(r){var n=r.b;return n},e.cT)))},hr=bh,wc=mh,Yb=function(e){return{$:1,a:e}},r_=function(e){return{$:2,a:e}},Qb=r_,Qt=zd,a_={$:1},ba=Md,ie=ba(S),e2=s(function(e,r){if(e.$){var n=e.a;return y(H(r,{ez:n(r.ez)}),ie)}else return r.fZ?y(H(r,{c9:a_}),ie):y(r,ie)}),n_=K(function(e,r,n,t){if(n.$){var c=n.a,i=a(e2,c,t.d1),u=i.a,$=i.b;return V(H(t,{d1:u}),Qb(a(Qt,Yb,$)),S)}else{var o=n.a;return V(H(t,{oU:v(dr,0,1,o)}),Zn,S)}}),r2=function(e){return{$:1,a:e}},t_=K(function(e,r,n,t){if(n.$){var c=n.a,i=a(e2,c,t.d1),u=i.a,$=i.b;return V(H(t,{d1:u}),Qb(a(Qt,r2,$)),S)}else{var o=n.a;return V(H(t,{oU:v(dr,0,1,o)}),Zn,S)}}),o_=K(function(e,r,n,t){var o=y(n,t);e:for(;;)if(o.a.$)if(o.b.$===1){var l=o.a.a,d=o.b.a,b=x(t_,e,r,l,d),g=b.a;return V0(g)}else break e;else{if(o.b.$)break e;var c=o.a.a,i=o.b.a,u=x(n_,e,r,c,i),$=u.a;return H0($)}return t}),c_=function(e){return{$:2,a:e}},a2=s(function(e,r){var n=r.c9;switch(n.$){case 0:return r;case 1:return e.lp?H(r,{c9:Y0}):H(r,{c9:c_({oV:r.co.pX,oW:r.co.eH,oY:e.pC,oZ:e.pD})});default:var t=n.a;if(e.lp)return H(r,{c9:Y0});var o=.005,c=r.co,i=.05,u=Ii(80),$=e.pD-t.oZ,l=e.pC-t.oY;return H(r,{co:H(c,{pX:t.oV-l*o,eH:v(dr,i,u,t.oW-$*o)})})}}),i_=D(function(e,r,n){return V(H(n,{d1:a(a2,{lp:e.tA.lp,pC:e.tA.pC,pD:e.tA.pD},n.d1)}),Zn,S)}),u_=D(function(e,r,n){return V(H(n,{d1:a(a2,{lp:e.tA.lp,pC:e.tA.pC,pD:e.tA.pD},n.d1)}),Zn,S)}),f_=D(function(e,r,n){if(n.$){var i=n.a,u=v(u_,e,r,i),$=u.a;return V0($)}else{var t=n.a,o=v(i_,e,r,t),c=o.a;return H0(c)}}),Do=yh,$_={kw:S,pf:S},l_=function(e){return{$:1,a:e}},v_=function(e){return{$:0,a:e}},s_=te,kO=0,wO=1,n2=Fr(function(e,r,n,t,o,c){return{mC:c,mN:r,kJ:t,om:n,ot:e,ou:o}}),t2=Y9,Hf=rh,To=function(e){return e===""},Wi=s(function(e,r){return e<1?"":v(tn,0,e,r)}),Ni=ah,o2=Le(function(e,r,n,t,o){if(To(o)||a(t2,"@",o))return z;var c=a(Hf,":",o);if(c.b){if(c.b.b)return z;var i=c.a,u=Ni(a(on,i+1,o));if(u.$===1)return z;var $=u;return E(wr(n2,e,a(Wi,i,o),$,r,n,t))}else return E(wr(n2,e,o,z,r,n,t))}),c2=K(function(e,r,n,t){if(To(t))return z;var o=a(Hf,"/",t);if(o.b){var c=o.a;return R(o2,e,a(on,c,t),r,n,a(Wi,c,t))}else return R(o2,e,"/",r,n,t)}),i2=D(function(e,r,n){if(To(n))return z;var t=a(Hf,"?",n);if(t.b){var o=t.a;return x(c2,e,E(a(on,o+1,n)),r,a(Wi,o,n))}else return x(c2,e,z,r,n)}),u2=s(function(e,r){if(To(r))return z;var n=a(Hf,"#",r);if(n.b){var t=n.a;return v(i2,e,E(a(on,t+1,r)),a(Wi,t,r))}else return v(i2,e,z,r)}),f2=function(e){return a(Wn,"http://",e)?a(u2,0,a(on,7,e)):a(Wn,"https://",e)?a(u2,1,a(on,8,e)):z},Lc=function(e){e:for(;;){var r=e,n=r;e=n;continue e}},LO=te,ka=Ya,d_=ka(0),pa=l0,Ji=s(function(e,r){return a(pa,function(n){return ka(e(n))},r)}),b_=D(function(e,r,n){return a(pa,function(t){return a(pa,function(o){return ka(a(e,t,o))},n)},r)}),Zi=function(e){return v(cn,b_(M),ka(S),e)},Vf=Qh,p_=s(function(e,r){var n=r;return s0(a(pa,Vf(e),n))}),m_=D(function(e,r,n){return a(Ji,function(t){return 0},Zi(a(W,p_(e),r)))}),h_=D(function(e,r,n){return ka(0)}),g_=s(function(e,r){var n=r;return a(Ji,e,n)});na.Task=m0(d_,m_,h_,g_);var $2=zi("Task"),Xi=s(function(e,r){return $2(a(Ji,e,r))}),C_=V7,Bf=function(e){return{$:9,a:e}},oa=s(function(e,r){if(r.$)return z;var n=r.a;return e(n)}),__=function(e){return{$:3,a:e}},Uf=D(function(e,r,n){return v(me,s(function(t,o){var c=o.a,i=o.b,u=a(e.ft,t,c),$=u.a,l=u.b;return y($,ba(f([i,a(Qt,__,l)])))}),y(n,ie),r)}),y_={hU:!1,gj:!1,dJ:!1,gk:!1,gl:!1,dK:!1,eV:!1,hV:!1,cj:!1,hW:!1,hY:W0,bL:!1,e:K0},P_=function(e){switch(e){case"true":return E(!0);case"false":return E(!1);default:return z}},S_=function(e){return{$:1,a:e}},x_={$:0},Ge=D(function(e,r,n){return r(e(n))}),j_=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},l2=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,u=o.c,$=o.d,l=o.e,d=e.e,b=d.a,g=d.b,C=d.c,p=d.d,m=p.a,P=p.b,_=p.c,j=p.d,L=p.e,T=d.e;return R(Fe,0,P,_,R(Fe,1,n,t,R(Fe,0,i,u,$,l),j),R(Fe,1,g,C,L,T))}else{var r=e.a,n=e.b,t=e.c,U=e.d,c=U.a,i=U.b,u=U.c,$=U.d,l=U.e,I=e.e,b=I.a,g=I.b,C=I.c,p=I.d,T=I.e;return R(Fe,1,n,t,R(Fe,0,i,u,$,l),R(Fe,0,g,C,p,T))}else return e},v2=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.b,u=o.c,$=o.d,l=$.a,d=$.b,b=$.c,g=$.d,C=$.e,p=o.e,m=e.e,P=m.a,_=m.b,j=m.c,L=m.d,T=m.e;return R(Fe,0,i,u,R(Fe,1,d,b,g,C),R(Fe,1,n,t,p,R(Fe,0,_,j,L,T)))}else{var r=e.a,n=e.b,t=e.c,U=e.d,c=U.a,i=U.b,u=U.c,I=U.d,p=U.e,q=e.e,P=q.a,_=q.b,j=q.c,L=q.d,T=q.e;return R(Fe,1,n,t,R(Fe,0,i,u,I,p),R(Fe,0,_,j,L,T))}else return e},k_=Ot(function(e,r,n,t,o,c,i){if(c.$===-1&&!c.a){var u=c.a,$=c.b,l=c.c,d=c.d,b=c.e;return R(Fe,n,$,l,d,R(Fe,0,t,o,b,i))}else{e:for(;;)if(i.$===-1&&i.a===1)if(i.d.$===-1)if(i.d.a===1){var g=i.a,C=i.d,p=C.a;return v2(r)}else break e;else{var m=i.a,P=i.d;return v2(r)}else break e;return r}}),Rf=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,o=e.d,c=o.a,i=o.d,u=e.e;if(c===1)if(i.$===-1&&!i.a){var $=i.a;return R(Fe,r,n,t,Rf(o),u)}else{var l=l2(e);if(l.$===-1){var d=l.a,b=l.b,g=l.c,C=l.d,p=l.e;return R(Pc,d,b,g,Rf(C),p)}else return Nn}else return R(Fe,r,n,t,Rf(o),u)}else return Nn},Ki=s(function(e,r){if(r.$===-2)return Nn;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(ce(e,t)<0)if(c.$===-1&&c.a===1){var u=c.a,$=c.d;if($.$===-1&&!$.a){var l=$.a;return R(Fe,n,t,o,a(Ki,e,c),i)}else{var d=l2(r);if(d.$===-1){var b=d.a,g=d.b,C=d.c,p=d.d,m=d.e;return R(Pc,b,g,C,a(Ki,e,p),m)}else return Nn}}else return R(Fe,n,t,o,a(Ki,e,c),i);else return a(w_,e,ra(k_,e,r,n,t,o,c,i))}),w_=s(function(e,r){if(r.$===-1){var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(oe(e,t)){var u=j_(i);if(u.$===-1){var $=u.b,l=u.c;return R(Pc,n,$,l,c,Rf(i))}else return Nn}else return R(Pc,n,t,o,c,a(Ki,e,i))}else return Nn}),s2=s(function(e,r){var n=a(Ki,e,r);if(n.$===-1&&!n.a){var t=n.a,o=n.b,c=n.c,i=n.d,u=n.e;return R(Fe,1,o,c,i,u)}else{var $=n;return $}}),eo=D(function(e,r,n){var t=r(a(ar,e,n));if(t.$)return a(s2,e,n);var o=t.a;return v(Tr,e,o,n)}),L_=function(e){return a(eo,e,a(Ge,fe(0),a(Ge,Pb(1),E)))},D_=s(function(e,r){return v(Lo,D(function(n,t,o){return a(e,n,t)?v(Tr,n,t,o):o}),Be,r)}),T_=function(e){if(e.b){var r=wf(a(D_,s(function(n,t){return t>1}),v(me,s(function(n,t){return a(L_,n.bE,t)}),Be,e)));return r.b?E(S_(r)):z}else return E(x_)},M_=function(e){return e?"true":"false"},cv=s(function(e,r){return r.b?v(cn,M,r,e):e}),wn=function(e){return v(cn,cv,S,e)},fn=s(function(e,r){return wn(a(W,e,r))}),Mo=4294967295>>>32-yn,DO=o9,Yi=G8,z_=D(function(e,r,n){e:for(;;){var t=Mo&r>>>e,o=a(Yi,t,n);if(o.$){var l=o.a;return a(Yi,Mo&r,l)}else{var c=o.a,i=e-yn,u=r,$=c;e=i,r=u,n=$;continue e}}}),d2=function(e){return e>>>5<<5},wa=s(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d;return e<0||ce(e,n)>-1?z:ce(e,d2(n))>-1?E(a(Yi,Mo&e,c)):E(v(z_,t,e,o))}),b2=function(e){var r=e;return a(fe,r.oI,a(wa,a(ja,r.cJ,r.dq+r.aR),r.eU))},zo=function(e){if(e.$){var n=e.a;return a(fe,n.oI,a(wa,n.aR,n.eU))}else{var r=e.a;return b2(r)}},If=function(e){var r=e.b;return r},Dc=function(e){var r=e.b;return zo(r).b},Tc=function(e){return e.nR},Ln=function(e){return e.e},A_=function(e){return e.Q},p2=function(e){var r=e;return a(W,function(n){var t=n.a,o=n.b;return y(r.r5(t)+"Off",J(o.pC)+(","+J(o.pD)))},r.cV)},F_=function(e){return p2(e.f)},E_=function(e){return e?"landscape":"portrait"},H_=function(e){var r=e;return r.cL.sX+("|"+E_(r.dY))},ro=s(function(e,r){return v(me,Fh(e),Mh(0),r)}),m2=function(e){return a(Sb,0,a(ro,function(r){var n=r.a,t=r.b;return a(ro,Gr,f([n,t]))},e))},qf=function(e){return"play:"+e},h2=function(e){switch(e){case 0:return"hudConfigurations";case 1:return"hudInputs";case 2:return"hudFpsMeter";case 3:return"hudProfiler";case 4:return"hudTape";case 5:return"hudPalette";case 6:return"hudCommandPalette";default:return"hudDevice"}},iv=function(e){var r=e;return r.aK},TO=0,MO=7,zO=2,AO=1,FO=5,gr=s(function(e,r){return v(cn,s(function(n,t){return e(n)?a(M,n,t):t}),S,r)}),Of=s(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var o=e,c=t;e=o,r=c;continue e}else return!1}),Qi=s(function(e,r){return a(Of,function(n){return oe(n,e)},r)}),g2=function(e){return a(gr,function(r){return a(Qi,r,e)},f([0,1,2,5,7]))},V_=function(e){return a(Lr,",",a(W,h2,g2(iv(e.f))))},Yn=s(function(e,r){return"play:"+(r+(":"+e))}),B_=function(e){return e.bL},C2=function(e){var r=e;return r.hc},U_=function(e){var r=e;return r.c7.kx.sX},Gf=function(e){var r=e;return r.dR},R_=function(e){var r=e;return r.dh.kx.sX},_2=function(e){switch(e){case 0:return"Red";case 1:return"Green";case 2:return"Yellow";case 3:return"Blue";case 4:return"Magenta";default:return"Cyan"}},I_=function(e){return a(Lr,"|",f([U_(e),R_(e),Gf(e)?"1":"0",_2(C2(e))]))},y2=function(e){switch(e){case 0:return"User";case 1:return"Author";default:return"Developer"}},P2=s(function(e,r){var n=Dc(r.uF),t=a(fn,function(o){var c=a(ar,o.bE,n.cT);if(c.$)return S;var i=c.a;return p2(i.ir)},e.cT);return f([y(qf("hud-panel-layout"),m2(F_(r.bD))),y(a(Yn,r.tm,"panel-layout"),m2(t)),y(qf("mode"),y2(Tc(r.bD))),y(a(Yn,r.tm,"theme"),I_(Ln(r.bD))),y(a(Yn,r.tm,"device"),H_(A_(r.bD))),y(a(Yn,r.tm,"hud-open-panels"),V_(r.bD)),y(a(Yn,r.tm,"tape-record-from-start"),M_(B_(r.bD)))])}),EO=te,HO=1,VO=0,BO=2,uv=f([{aC:0,sX:"iPhone SE",X:{jO:667,lt:375}},{aC:0,sX:"iPhone 12 Pro",X:{jO:844,lt:390}},{aC:0,sX:"iPhone 14 Pro Max",X:{jO:932,lt:430}},{aC:0,sX:"Pixel 7",X:{jO:915,lt:412}},{aC:0,sX:"Samsung Galaxy S20 Ultra",X:{jO:915,lt:412}},{aC:0,sX:"Samsung Galaxy S8+",X:{jO:740,lt:360}},{aC:1,sX:"Galaxy Z Fold 5",X:{jO:882,lt:344}},{aC:1,sX:"Surface Duo",X:{jO:720,lt:540}},{aC:2,sX:"iPad Mini",X:{jO:1024,lt:768}},{aC:2,sX:"iPad Air",X:{jO:1180,lt:820}},{aC:2,sX:"iPad Pro",X:{jO:1366,lt:1024}},{aC:2,sX:"Surface Pro 7",X:{jO:1368,lt:912}}]),Mr=function(e){if(e.b){var r=e.a,n=e.b;return E(r)}else return z},q_=function(e){return Mr(a(gr,function(r){return oe(r.sX,e)},uv))},UO=te,RO=te,S2=14,O_=8,G_=function(e){return e===" "||e==="	"||e==="/"||e==="."||e===":"||e===";"||e===","||e==="|"||e==="\\"||e==="_"||e==="-"||e==="*"},W_=function(e){var r=st(e);return r>=97&&r<=122},N_=function(e){var r=st(e);return r>=65&&r<=90},J_=D(function(e,r,n){e:for(;;)if(r.b){var t=r.a,o=r.b,c=G_(e)?S2:W_(e)&&N_(t)?O_:0,i=t,u=o,$=a(M,c,n);e=i,r=u,n=$;continue e}else return De(n)}),Z_=function(e){if(e.b){var r=e.a,n=e.b;return a(M,S2,v(J_,r,n,S))}else return S},fv=ih,X_=function(e){var r=yc(e),n=a(W,fv,r);return{lT:Z_(r),j4:n}},Wf=s(function(e,r){return{aS:r,e$:z,aV:!1,iv:a(W,function(n){return y(n,X_(e(n)))},r),b1:0,iI:"",av:0}}),$v=D(function(e,r,n){if(r.$===1)return z;var t=r.a;if(n.$===1)return z;var o=n.a;return E(a(e,t,o))}),IO=1,qO=0,K_=function(e){switch(e){case"portrait":return E(0);case"landscape":return E(1);default:return z}},Y_=D(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b;if(r(t))return E(e);var c=e+1,i=r,u=o;e=c,r=i,n=u;continue e}else return z}),Nf=Y_(0),Jf=function(e){return Nf(en(e))},eu=s(function(e,r){var n=r;return H(n,{e$:e,av:a(fe,n.av,a(oa,function(t){return a(Jf,t,n.aS)},e))})}),Q_=function(e){var r=a(gn,"|",e);if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a;return v($v,s(function(c,i){return{cL:c,dY:i,bj:a(eu,E(c),a(Wf,function(u){return u.sX},uv))}}),q_(n),K_(o))}else return z},ey=Lh,Ao=s(function(e,r){return y(e,r)}),ke=dh,x2=function(e){return a(Mb,S,a(ey,hr(v(Xn,Ao,a(Jn,0,ke),a(Jn,1,ke))),e))},OO=te,Zf=Be,j2=s(function(e,r){var n=r;return v(Tr,e,0,n)}),ru=s(function(e,r){var n=a(ar,e,r);return!n.$}),k2=s(function(e,r){var n=r;return a(ru,e,n)}),ry=function(e){return De(v(me,s(function(r,n){var t=n.a,o=n.b;return a(k2,r,t)?y(t,o):y(a(j2,r,t),a(M,r,o))}),y(Zf,S),e).b)},ay=function(e){return{$:0,a:e}},ny=3600,ty=ay(ny),GO=1,WO=2,oy=function(e){switch(e){case"User":return E(0);case"Author":return E(1);case"Developer":return E(2);default:return z}},lv=function(e){return{$:4,a:e}},w2=function(e){return{$:3,a:e}},L2=s(function(e,r){return{$:0,a:e,b:r}}),D2=s(function(e,r){return{$:2,a:e,b:r}}),T2=function(e){return{$:5,a:e}},M2=function(e){return{$:1,a:e}},NO=te,pt=s(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){var n=r.a,t=r.b,o=e-1,c=t;e=o,r=c;continue e}else return r}}),cy=D(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,o=r.b,c=e-1,i=o,u=a(M,t,n);e=c,r=i,n=u;continue e}else return n}}),iy=s(function(e,r){return De(v(cy,e,r,S))}),z2=D(function(e,r,n){if(r<=0)return S;var t=y(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,j=o.a,c=o.b,i=c.a;return f([j,i]);case 3:if(t.b.b.b.b){var u=t.b,j=u.a,$=u.b,i=$.a,l=$.b,d=l.a;return f([j,i,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var b=t.b,j=b.a,g=b.b,i=g.a,C=g.b,d=C.a,p=C.b,m=p.a,P=p.b;return e>1e3?a(M,j,a(M,i,a(M,d,a(M,m,a(iy,r-4,P))))):a(M,j,a(M,i,a(M,d,a(M,m,v(z2,e+1,r-4,P)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var _=t.b,j=_.a;return f([j])}),ao=s(function(e,r){return v(z2,0,e,r)}),Xf=function(e){var r=e;return Y(De(r.o),a(M,r.f1,r.q))},Kf=s(function(e,r){var n=r,t=Xf(n),o=a(ja,Dr(t),e),c=a(pt,o,t);if(c.b){var i=c.a,u=c.b;return{q:u,o:De(a(ao,o,t)),f1:i}}else return n}),he=s(function(e,r){if(r.$)return z;var n=r.a;return E(e(n))}),no=nh,uy=s(function(e,r){var n=s(function(C,p){var m=C.a,P=C.b;return ce(p,m)>-1&&ce(p,P)<1});switch(e.$){case 0:var t=e.a;return a(oa,function(C){return a(n,t,C)?E(a(L2,t,C)):z},no(r));case 2:var t=e.a;return a(oa,function(C){return a(n,t,C)?E(a(D2,t,C)):z},Ni(r));case 4:switch(r){case"true":return E(lv(!0));case"false":return E(lv(!1));default:return z}case 1:return E(M2(r));case 3:var o=a(W,no,a(gn,",",r));if(o.b&&!o.a.$&&o.b.b&&!o.b.a.$&&o.b.b.b&&!o.b.b.a.$&&o.b.b.b.b&&!o.b.b.b.a.$&&!o.b.b.b.b.b){var c=o.a.a,i=o.b,u=i.a.a,$=i.b,l=$.a.a,d=$.b,b=d.a.a;return E(w2(x(G,c,u,l,b)))}else return z;default:var g=e.a;return a(he,function(C){return T2(a(Kf,C,g))},a(Nf,en(r),Xf(g)))}}),A2=s(function(e,r){var n=xn(e);return a(W,function(t){return H(t,{a9:a(W,function(o){var c=o.a,i=o.b;return y(c,(function(){var u=a(ar,c,n);if(u.$)return i;var $=u.a;return a(fe,i,a(uy,i,$))})())},t.a9)})},r)}),to=s(function(e,r){var n=a(gr,function(c){var i=c.a;return oe(i,e)},r);if(n.b){var t=n.a,o=t.b;return E(o)}else return z}),JO=te,fy=D(function(e,r,n){var t=e(r);if(t.$)return n;var o=t.a;return a(M,o,n)}),Vr=s(function(e,r){return v(cn,fy(e),S,r)}),F2=s(function(e,r){return e<1?r:v(tn,0,-e,r)}),vv=eh,$y=s(function(e,r){return a(vv,"Off",r)?e(a(F2,nn("Off"),r)):z}),ly=function(e){var r=a(gn,",",e);if(r.b&&r.b.b&&!r.b.b.b){var n=r.a,t=r.b,o=t.a;return v($v,s(function(c,i){return{pC:c,pD:i}}),no(n),no(o))}else return z},E2=s(function(e,r){var n=r,t=a(Vr,function(o){var c=o.a,i=o.b;return a(oa,function(u){return a(he,Ao(u),ly(i))},a($y,n.r4,c))},e);return H(n,{cV:t})}),vy=s(function(e,r){return H(r,{f:a(E2,e,r.f)})}),ZO=6,XO=3,KO=4,H2=function(e){switch(e){case"hudConfigurations":return E(0);case"hudInputs":return E(1);case"hudFpsMeter":return E(2);case"hudProfiler":return E(3);case"hudTape":return E(4);case"hudPalette":return E(5);case"hudCommandPalette":return E(6);case"hudDevice":return E(7);default:return z}},sy=function(e){return{$:1,a:e}},sv=sy,oo=s(function(e,r){var n=r;switch(e.$){case 0:var t=e.a;return H(n,{aK:a(Qi,t,n.aK)?a(gr,Df(t),n.aK):a(M,t,n.aK)});case 1:var t=e.a;return H(n,{aK:a(M,t,a(gr,Df(t),n.aK))});case 2:var t=e.a;return H(n,{aK:a(gr,Df(t),n.aK)});default:var t=e.a;return H(n,{cV:a(gr,function(o){var c=o.a;return!oe(c,t)},n.cV)})}}),dy=s(function(e,r){var n=g2(a(Vr,H2,a(gn,",",e)));return H(r,{f:v(me,a(Ge,sv,oo),r.f,n)})}),YO=te,dv={F:Be},QO=3,eG=4,rG=2,aG=1,nG=5,tG=0,V2=function(e){switch(e){case"windows":return 0;case"mac":return 1;case"linux":return 2;case"android":return 3;case"ios":return 4;default:return 5}},by=s(function(e,r){return{c2:{pN:!1,rz:z},aA:dv,dC:S,hp:0,cc:e,ey:r.ey,eA:r.eA,eB:r.eB,hF:r.hF,my:!0,eQ:r.eQ,rA:r.rA,gn:"play",h_:r.h_,nG:Be,nR:W0,tk:Zf,kv:V2(r.kv),gD:{l9:0,ma:0,bF:0,bS:0,pu:0,pv:0},tA:r.tA,fs:r.fs,$7:r.$7,fv:r.fv,iJ:r.iJ,eb:r.eb,pw:!0,fN:r.fN,pF:!1}}),B2={aC:0,sX:"iPhone 12 Pro",X:{jO:844,lt:390}},py={cL:B2,dY:0,bj:a(eu,E(B2),a(Wf,function(e){return e.sX},uv))},my=function(e){return e.iL+(": "+e.jX)},oG=te,cG=te,Yf={bC:S,bK:S,bm:0,bn:0},hy=Yf,gy={ki:0,gK:hy},U2={$:0},Cy=U2,bv=function(e){return{eF:z,r4:e.r4,r5:e.r5,cV:S,aK:S}},iG=te,uG=3,fG=1,$G=4,lG=0,vG=2,R2=y(0,f([1,2,3,4,5])),_y=function(e){var r=e.a,n=e.b;return{q:n,o:S,f1:r}},Fo=function(e){var r=e;return r.f1},I2=function(e){var r=e,n=r.q;if(n.b){var t=n.a,o=n.b;return{q:o,o:a(M,r.f1,r.o),f1:t}}else return r},q2=function(e){return a(Kf,0,e)},Ye=function(e){return!e.b},yy=function(e){var r=e;return Ye(r.q)},O2=s(function(e,r){var n=function(t){e:for(;;){if(oe(Fo(t),e))return E(t);if(yy(t))return z;var o=I2(t);t=o;continue e}};return n(q2(r))}),Py=function(e){var r=_y(R2);return a(fe,r,a(O2,e,r))},pv=Eb,mv=function(e){var r=bt(e).kx.sX,n=pv,t=n.a,o=n.b;return Mr(a(gr,function(c){return oe(c.sX,r)},a(M,t,o)))},Sy=function(e){var r=pv,n=r.a,t=r.b;return{c1:Py(C2(e)),bj:a(eu,mv(e),a(Wf,function(o){return o.sX},a(M,n,t)))}},au={$:0},sG=te,xy=au,jy=function(e){var r=e.c2,n=e.sc,t=e.sb,o=e.hY,c=e.sd,i=e.gM;return{c2:{N:a(Wf,my,r),rz:z},eq:z,Q:t,f:bv({r4:H2,r5:h2}),de:gy,nR:o,aL:Cy,bL:n,P:Sy(c),e:c,c_:xy,pF:!1}},nu={$:0},Ba=s(function(e,r){return{$:0,a:e,b:r}}),Mc=function(e){return{$:0,a:e}},dG=te,G2=s(function(e,r){return a(G0,e,function(n){return r})}),W2=s(function(e,r){var n=a(Pe,1,e);return{cJ:n,ba:1,aR:0,eU:a(G2,n,r),oI:r,dq:0}}),N2=s(function(e,r){return Mc(a(W2,e,r))}),tu=function(e){return{$:1,a:e}},J2=function(e){return tu({aR:0,eU:a(G2,1,e),oI:e})},ky=s(function(e,r){if(e.$)return J2(r);var n=e.a;return a(N2,n,r)}),wy=D(function(e,r,n){return a(Ba,nu,a(ky,e,y(r,n)))}),Ly=s(function(e,r){return a(Ba,nu,a(N2,1,y(e,r)))}),Eo=s(function(e,r){return{$:1,a:e,b:r}}),Dy=D(function(e,r,n){var t=n.a,o=n.b;return y(e(t),r(o))}),Ty=function(e){var r=s(function(n,t){var o=n.a,c=n.b,i=t.a,u=t.b;return y(a(M,o,i),a(M,c,u))});return v(cn,r,y(S,S),e)},Z2=function(e){switch(e.$){case 0:return y(S,ie);case 1:var r=e.a;return v(Dy,wn,ba,Ty(a(W,Z2,r)));case 2:var n=e.a;return y(S,n);default:var t=e.a;return y(f([t]),ie)}},My=s(function(e,r){return H(r,{a9:e(r.a9)})}),Ho=s(function(e,r){var n=r.a,t=r.b;return y(n,e(t))}),Te=function(e){return e<0?-e:e},zy=D(function(e,r,n){return a(fe,NaN,no(a(e,r,n)))}),hv=F9,Ay=s(function(e,r){var n=a(Of,function(t){return t!=="0"&&t!=="."},yc(r));return Y(e&&n?"-":"",r)}),Fy=ch,X2=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ui(n);if(t.$===1)return"01";var o=t.a;return a(Tf,"0",X2(o))}else{var c=st(r);return c>=48&&c<57?a(Tf,Fy(c+1),n):"0"}},zc=L9,gv=A9,Qf=D(function(e,r,n){return Y(n,a(Sc,e-nn(n),dt(r)))}),K2=I9,Y2=function(e){var r=a(gn,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a;return y(n,o)}else{var n=r.a;return y(n,"0")}else return y("0","0")},Vo=s(function(e,r){var n=r.a,t=r.b;return y(e(n),t)}),Ey=function(e){var r=a(gn,"e",J(Te(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a,c=a(fe,0,Ni(a(Wn,"+",o)?a(on,1,o):o)),i=Y2(n),u=i.a,$=i.b,l=Y(u,$),d=c<0?a(fe,"0",a(he,function(b){var g=b.a,C=b.b;return g+("."+C)},a(he,Vo(dt),Ui(Y(a(Sc,Te(c),"0"),l))))):v(Qf,c+1,"0",l);return Y(e<0?"-":"",d)}else{var n=r.a;return Y(e<0?"-":"",n)}else return""},Hy=D(function(e,r,n){if(zc(n)||gv(n))return J(n);var t=n<0,o=Y2(Ey(Te(n))),c=o.a,i=o.b,u=nn(c)+r,$=Y(a(Sc,-u+1,"0"),v(Qf,u,"0",Y(c,i))),l=nn($),d=a(Pe,1,u),b=a(e,t,v(tn,d,l,$)),g=v(tn,0,d,$),C=b?K2(a(fe,"1",a(he,X2,Ui(K2(g))))):g,p=nn(C),m=C==="0"?C:r<=0?Y(C,a(Sc,Te(r),"0")):ce(r,nn(i))<0?v(tn,0,p-r,C)+("."+v(tn,p-r,p,C)):Y(c+".",v(Qf,r,"0",i));return a(Ay,t,m)}),Ac=Hy(s(function(e,r){var n=Ui(r);if(n.$===1)return!1;if(n.a.a==="5")if(n.a.b===""){var t=n.a;return!e}else{var o=n.a;return!0}else{var c=n.a,i=c.a;return(function(u){return u>53&&e||u>=53&&!e})(st(i))}})),Vy=zy(Ac),By=D(function(e,r,n){var t=a(Lf,10,Te(r-e)),o=t<0?3:t<1?2:t<2?1:0;return a(Vy,o,n)}),Fc=D(function(e,r,n){return a(W,function(t){return e(t)?r(t):t},n)}),Uy=function(e){switch(e.$){case 2:var n=e.a,r=e.b;return a(Fc,a(Ge,Pn,en(n)),Ho(function(o){if(o.$===2){var c=o.a,i=c.a,u=c.b;return a(D2,y(i,u),v(dr,i,u,r))}else return o}));case 1:var n=e.a,r=e.b;return a(Fc,a(Ge,Pn,en(n)),Ho(function(o){return o.$===1?M2(r):o}));case 0:var n=e.a,r=e.b;return a(Fc,a(Ge,Pn,en(n)),Ho(function(o){if(o.$)return o;var c=o.a,i=c.a,u=c.b;return a(L2,y(i,u),v(By,i,u,v(dr,i,u,r)))}));case 3:var n=e.a,r=e.b;return a(Fc,a(Ge,Pn,en(n)),Ho(function(o){return o.$===3?w2(r):o}));case 4:var n=e.a,r=e.b;return a(Fc,a(Ge,Pn,en(n)),Ho(function(o){return o.$===4?lv(r):o}));default:var n=e.a,t=e.b;return a(Fc,a(Ge,Pn,en(n)),Ho(function(o){if(o.$===5){var c=o.a;return T2(a(fe,c,a(he,function(i){return a(Kf,i,c)},a(Nf,en(t),Xf(c)))))}else return o}))}},Ry=function(e){return My(Uy(e))},Q2=s(function(e,r){return a(W,Ry(e),r)}),Cv=D(function(e,r,n){var t=Z2(r),o=t.a,c=t.b,i=function(u){return v(me,Q2,u,o)};return{hq:c,cS:e?i(n.cS):n.cS,jS:i(n.jS)}}),Br=s(function(e,r){var n=r;return a(Qi,e,n.aK)}),Iy=function(e){return a(Br,5,e.f)||a(Br,6,e.f)||a(Br,7,e.f)},ep=s(function(e,r){return r.lt>0&&r.jO>0?r:{jO:e.jO,bF:0,tq:r.tq,bS:0,lt:e.lt}}),qy={q4:!1,jA:!1,hG:0,hH:0,rj:S,sj:!1,sU:!1,tZ:!1,t$:!1,lp:!1,pC:0,pD:0},Oy=function(e){var r=e.o6;if(r.$===1)return qy;var n=r.a,t=n.bS+.5*n.jO-.5*e.va.jO,o=.5*e.va.lt-n.bF-.5*n.lt,c=e._.sj?e.cB.c6:e.cB.hX,i=oe(c,E(e.gn)),u=oe(e.cB.c6,E(e.gn));return{q4:u&&e._.q4,jA:u&&e._.jA,hG:i?e._.hG:0,hH:i?e._.hH:0,rj:u?e._.rj:S,sj:u&&e._.sj,sU:i&&e._.sU,tZ:u&&e._.tZ,t$:u&&e._.t$,lp:u&&e._.lp,pC:e._.pC+o,pD:e._.pD+t}},Gy={i3:!1,jt:!1,jA:!1,q8:S,bF:!1,j9:!1,tH:S,bM:!1,kY:!1,lp:!1},Wy={mg:0,mh:0,mm:S,oi:0,oj:z},ou=function(e){var r=Mr(a(gr,function($){return oe($.tq,e.bE)},e.g.tp)),n=oe(e.aG,E(e.bE)),t=n?e.g.h_:Gy,o=n?e.g.fN:Wy,c=a(he,ep(e.g.$7),r),i=(function(){if(c.$)return e.g.$7;var $=c.a;return{jO:$.jO,lt:$.lt}})(),u=Oy({gn:e.bE,cB:e.cB,o6:c,_:e.g.tA,va:e.g.$7});return{c2:(function(){var $=e.bD;if($.$===1)return{pN:!1,rz:z};var l=$.a;return{pN:Iy(l),rz:l.c2.rz}})(),aA:e.aM,dC:e.g.dC,hp:e.hp,cc:e.cc,ey:e.g.ey,eA:e.g.eA,eB:e.g.eB,hF:e.g.hF,my:n,eQ:e.g.eQ,rA:e.g.rA,gn:e.bE,h_:t,nG:e.nG,nR:e.nR,tk:e.tk,kv:V2(e.g.kv),gD:e.g.gD,tA:u,fs:e.g.fs,$7:i,fv:e.g.fv,iJ:e.g.iJ,eb:e.g.eb,pw:e.pw,fN:o,pF:e.pF}},Ny={c6:z,hX:z},Jy=s(function(e,r){if(e.$)return bv(r);var n=e.a;return a(E2,n,bv(r))}),Zy=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){var d=a(ar,$,e);if(d.$)return l;var b=d.a,g=a(A2,n,b.aH),C=ou({hp:0,cc:g,aG:i,bD:z,bE:b.bE,g:t,nG:Be,nR:c,tk:Zf,aM:dv,cB:Ny,pw:!1,pF:!1}),p=v(b.b_,C,r,o),m=p.a,P=p.b,_=p.c,j=v(Cv,oe(u,E(b.bE)),P,{cS:l.ci,jS:g}),L={aA:b.aA,fS:!1,hp:0,cc:j.jS,hz:Be,bE:b.bE,nG:Be,bG:m,ir:a(Jy,E(x2(a(fe,"",a(to,a(Yn,t.tm,"panel-layout"),t.tt)))),{r4:E,r5:te}),fr:b.fr,aM:dv,pw:!1};return H(l,{cK:a(M,a(Qt,Eo(b.bE),j.hq),l.cK),cP:Y(l.cP,_),ci:j.cS,cT:v(Tr,$,L,l.cT)})}}}}}}}}}},Xy=s(function(e,r){return a(ru,e.bE,r)?r:v(Tr,e.bE,e,r)}),rp=function(e){return H(e,{f:a(oo,sv(4),e.f)})},Ky=Wt("registerPanes",ro(Gr)),ap=function(e){return{$:1,a:e}},np="play-device-picker",e$={f0:np,v:ap},La={$:11},nr=D(function(e,r,n){return e(r(n))}),Yy=qh,mt=s(function(e,r){return $2(a(Yy,a(nr,a(nr,ka,e),Va),a(pa,a(nr,a(nr,ka,e),ta),r)))}),co=32,tp=s(function(e,r){return a(Pe,0,co*r-e.fd/2+co/2)}),Bo=function(e){return e.f0+"-list"},Uo=J7,op=D(function(e,r,n){var t=n,o=a(oa,function(u){return a(Jf,u,t.aS)},r);if(o.$)return y(t,ie);var c=o.a,i=a(tp,e,c);return y(H(t,{e$:r,b1:i,av:c}),a(mt,function(u){return e.v(La)},v(Uo,Bo(e),0,i)))}),Qy=function(e){return{$:0,a:e}},Ec=function(e){return{f0:e.f0,fd:320,kK:"Search devices\u2026",v:a(nr,e.v,Qy),lt:{sL:320,u6:26}}},eP=s(function(e,r){var n=r,t=v(op,Ec(e),E(n.cL),n.bj),o=t.a,c=t.b;return y(H(n,{bj:o}),c)}),rP=function(e){return{$:0,a:e}},Hc=function(e){var r=e.f0,n=e.v;return{f0:r,fd:320,kK:"Search palettes\u2026",v:a(nr,n,rP),lt:{sL:320,u6:26}}},_v=D(function(e,r,n){var t=n,o=v(op,Hc(e),mv(r),t.bj),c=o.a,i=o.b;return y(H(t,{bj:c}),i)}),cp=function(e){return{$:0,a:e}},ip="play-theme-picker",Vc={f0:ip,v:cp},aP=function(e){var r=a(Br,5,e.f)?v(_v,Vc,e.e,e.P):y(e.P,ie),n=r.a,t=r.b,o=a(Br,7,e.f)?a(eP,e$,e.Q):y(e.Q,ie),c=o.a,i=o.b;return y(H(e,{Q:c,P:n}),ba(f([t,i])))},yv={$:1},nP=function(e){var r=e;return r.cJ},up=function(e){if(e.$)return J2(zo(e));var r=e.a;return Mc(a(W2,nP(r),b2(r)))},fp=function(e){var r=e.b;return a(Ba,yv,up(r))},tP=function(e){switch(e){case"Red":return E(0);case"Green":return E(1);case"Yellow":return E(2);case"Blue":return E(3);case"Magenta":return E(4);case"Cyan":return E(5);default:return z}},$p=function(e){var r=pv,n=r.a,t=r.b;return a(Of,function(o){return oe(o.sX,e)},a(M,n,t))},oP=function(e){switch(e){case"1":return E(!0);case"0":return E(!1);default:return z}},Pv=s(function(e,r){var n=r;return H(n,{hc:e,c7:a(Ri,e,n.c7.kx),dh:a(Ri,e,n.dh.kx)})}),Sv=s(function(e,r){var n=r,t=a(Ri,n.hc,e);return e.si?H(n,{c7:t,dR:!1}):H(n,{dh:t,dR:!0})}),lp=function(e){return Sv(X0(e))},xv=function(e){var r=e;return H(r,{dR:!r.dR})},cP=s(function(e,r){return oe(Gf(r),e)?r:xv(r)}),iP=function(e){var r=a(gn,"|",e);if(r.b&&r.b.b&&r.b.b.b&&r.b.b.b.b&&!r.b.b.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,u=c.b,$=u.a;return $p(n)&&$p(o)?v($v,s(function(l,d){return a(cP,d,a(Pv,l,a(lp,o,a(lp,n,K0))))}),tP($),oP(i)):z}else return z},uP=s(function(e,r){var n=a(fe,S,r.g.iJ),t=a(fe,Be,a(he,xn,r.g.iJ)),o=e.e0(t),c=a(W,function(ee){return ee.bE},e.cT),i=v(me,Xy,Be,e.cT),u=a(ru,"embed",t),$=ry(c),l=(function(){if($.b&&!$.b.b){var ee=$.a;return E(ee)}else return z})(),d=a(fe,"",a(to,a(Yn,r.g.tm,"hud-open-panels"),r.g.tt)),b=(function(){if(u){var ee=y_;return H(ee,{e:e.bD.e})}else return e.bD})(),g=a(fe,b.hY,a(oa,oy,a(to,qf("mode"),r.g.tt))),C=a(fe,b.bL,a(oa,P_,a(to,a(Yn,r.g.tm,"tape-record-from-start"),r.g.tt))),p=a(fe,b.e,a(oa,iP,a(to,a(Yn,r.g.tm,"theme"),r.g.tt))),m=a(fe,py,a(oa,Q_,a(to,a(Yn,r.g.tm,"device"),r.g.tt))),P=jy({c2:e.c2,sb:m,hY:g,sc:C,sd:p,gM:b}),_=a(dy,d,a(vy,x2(a(fe,"",a(to,qf("hud-panel-layout"),r.g.tt))),P)),j=C&&b.hV?rp(_):_,L=a(A2,n,e.aH),T=v(me,_o(Zy,i,o,n,r.g,p,g,l,Mr($)),{cK:S,cP:S,ci:L,cT:Be},$),U=a(by,T.ci,r.g),I=v(Uf,e,T.cP,o),q=I.a,Q=I.b,Z={cc:T.ci,g:r.g,cT:T.cT,O:q,of:S,og:S},ue=(function(){if(b.hV){var ee=v(wy,ty,U,Z);return C?fp(ee):ee}else return a(Ly,U,Z)})(),ye=aP(j),Me=ye.a,Ve=ye.b,Xe={hv:T_(e.cT),eG:b,aG:l,bD:Me,aU:$,gp:S,tm:r.g.tm,uF:ue};return y(H(Xe,{gp:a(P2,e,Xe)}),ba(a(M,a(Qt,Bf,Ve),a(M,Ky($),a(M,Q,T.cK)))))}),vp=function(e){return{$:10,a:e}},jv={$:1},fP=function(e){return{$:0,a:e}},sp={$:11},$P=s(function(e,r){return{$:4,a:e,b:r}}),cu=Md,lP=s(function(e,r){return{$:5,a:e,b:r}}),vP={$:6},Bc=xh,sP=Ch,Uc=function(e){return a(Je,xn,sP(e))},r$=a(Ge,Qa,a(Ge,Vr(function(e){var r=e.a,n=e.b,t=no(r);if(t.$)return z;var o=t.a;return E(y(o,n))}),xn)),dP=K(function(e,r,n,t){return{rT:t,u7:n,pC:e,pD:r}}),Rc=jh,bP=R(Rc,dP,a(k,"x",N),a(k,"y",N),a(k,"w",N),a(k,"h",N)),pP=Uc(bP),kv=function(e){return{$:1,a:e}},bG=3,Ic={$:2},dp=function(e){switch(e){case 0:return"texture";case 1:return"sound";case 2:return"font";default:return"atlas"}},ht=s(function(e,r){return dp(e)+(":"+r)}),mP=s(function(e,r){var n=r;return H(n,{F:v(eo,a(ht,3,e.bE),he(function(t){return kv({eU:e.eU,aW:e.aW,ap:e.ap,E:Ic})}),n.F)})}),wv=sh,hP=function(e){return x(Bc,D(function(r,n,t){return mP({eU:n,bE:e,aW:r,ap:t})}),a(Je,r$,a(k,"mipImages",Uc(wv))),a(Je,r$,a(k,"frames",Uc(pP))),a(k,"pixelated",ne))},Lv=function(e){return Do(f([a(Je,E,e),ae(z)]))},Dv=a(Je,fe(""),Lv(a(k,"error",ke))),a$=function(e){return{$:3,a:e}},bp=function(e){return{$:3,a:e}},Tv=function(e){return{$:2,a:e}},Mv=function(e){return{$:0,a:e}},gP=s(function(e,r){switch(r.$){case 0:return Mv({em:0,en:0,fW:z,aW:Be,fh:Be,ap:!1,E:a$(e)});case 1:return kv({eU:Be,aW:Be,ap:!1,E:a$(e)});case 2:return Tv({E:a$(e)});default:return bp({E:a$(e)})}}),pG=2,mG=1,hG=0,zv=function(e){switch(e){case"texture":return E(0);case"sound":return E(1);case"font":return E(2);case"atlas":return E(3);default:return z}},Av=K(function(e,r,n,t){var o=t,c=zv(e);if(c.$)return o;var i=c.a;return H(o,{F:v(eo,a(ht,i,r),he(gP(n)),o.F)})}),n$={$:1},CP=function(e){switch(e){case 0:return Mv({em:0,en:0,fW:z,aW:Be,fh:Be,ap:!1,E:n$});case 3:return kv({eU:Be,aW:Be,ap:!1,E:n$});case 1:return Tv({E:n$});default:return bp({E:n$})}},Fv=D(function(e,r,n){var t=n,o=zv(e);if(o.$)return t;var c=o.a;return H(t,{F:v(Tr,a(ht,c,r),CP(c),t.F)})}),_P=s(function(e,r){var n=r;return H(n,{F:v(eo,a(ht,1,e),he(function(t){return t.$===2?Tv({E:Ic}):t}),n.F)})}),pp=wh,yP=s(function(e,r){var n=r;return H(n,{F:v(eo,a(ht,0,e.bE),he(function(t){return t.$?t:Mv({em:e.em,en:e.en,fW:e.fW,aW:e.aW,fh:e.fh,ap:e.ap,E:Ic})}),n.F)})}),PP=function(e){return ra(pp,Fr(function(r,n,t,o,c,i){return yP({em:o,en:t,fW:i,bE:e,aW:r,fh:n,ap:c})}),a(Je,r$,a(k,"mipImages",Uc(wv))),a(Je,a(Ge,fe(Be),r$),Lv(a(k,"mipUrls",Uc(ke)))),a(k,"baseWidth",N),a(k,"baseHeight",N),a(k,"pixelated",ne),Lv(a(k,"baseline",N)))},qc=D(function(e,r,n){var t=n,o=zv(e);if(o.$)return t;var c=o.a;return H(t,{F:a(s2,a(ht,c,r),t.F)})}),SP=function(e){var r=e.a,n=e.b,t=e.c,o=y(r,n);e:for(;;)switch(o.a){case"texture":switch(o.b){case"loading":return ae(a(Fv,"texture",t));case"loaded":return PP(t);case"failed":return a(Je,function(c){return v(Av,"texture",t,c)},Dv);case"unloaded":return ae(a(qc,"texture",t));case"cancelled":return ae(a(qc,"texture",t));default:break e}case"atlas":switch(o.b){case"loading":return ae(a(Fv,"atlas",t));case"loaded":return hP(t);case"failed":return a(Je,function(c){return v(Av,"atlas",t,c)},Dv);case"unloaded":return ae(a(qc,"atlas",t));case"cancelled":return ae(a(qc,"atlas",t));default:break e}case"sound":switch(o.b){case"loading":return ae(a(Fv,"sound",t));case"loaded":return ae(_P(t));case"failed":return a(Je,function(c){return v(Av,"sound",t,c)},Dv);case"unloaded":return ae(a(qc,"sound",t));case"cancelled":return ae(a(qc,"sound",t));default:break e}default:break e}return ae(te)},xP=a(A,SP,x(Bc,D(function(e,r,n){return V(e,r,n)}),a(k,"kind",ke),a(k,"status",ke),a(k,"id",ke))),jP=v(Xn,Ao,a(k,"instanceId",ke),xP),kP=u0,wP=function(e){var r=a(kP,jP,e);if(r.$)return vP;var n=r.a,t=n.a,o=n.b;return a(lP,t,o)},Qn=fh,mp=s(function(e,r){return{$:2,a:e,b:r}}),Ro=zd,Ev=function(e){return v(me,j2,Zf,e)},t$=function(e){return Ev(iv(e.ir))},gG=0,hp=D(function(e,r,n){return{$:0,a:e,b:r,c:n}}),gp=s(function(e,r){return{oh:r,o0:e}}),LP=ka(a(gp,S,Be)),DP=function(e){return e?"w_":"d_"},TP=function(e){var r=e.a,n=e.b;return y(Y(DP(r),n),e)},Cp=Nh,MP=Fr(function(e,r,n,t,o,c){var i=D(function(d,b,g){e:for(;;){var C=g.a,p=g.b;if(C.b){var m=C.a,P=m.a,_=m.b,j=C.b;if(ce(P,d)<0){var L=d,T=b,U=y(j,v(e,P,_,p));d=L,b=T,g=U;continue e}else return ce(P,d)>0?y(C,v(n,d,b,p)):y(j,x(r,P,_,b,p))}else return y(C,v(n,d,b,p))}}),u=v(Lo,i,y(Qa(t),c),o),$=u.a,l=u.b;return v(me,s(function(d,b){var g=d.a,C=d.b;return v(e,g,C,b)}),l,$)}),zP=s(function(e,r){return{mq:r,jV:e}}),Hv=e7,AP=D(function(e,r,n){var t=n.a,o=n.b,c=(function(){return t?On:Po})();return a(Ji,function(i){return y(r,i)},v(I7,c,o,function(i){return a(Hv,e,a(zP,r,i))}))}),FP=s(function(e,r){return v(Lo,Tr,r,e)}),EP=D(function(e,r,n){var t=D(function(b,g,C){var p=C.a,m=C.b,P=C.c;return V(p,m,a(M,v(AP,e,b,g),P))}),o=D(function(b,g,C){var p=C.a,m=C.b,P=C.c;return V(a(M,g,p),m,P)}),c=K(function(b,g,C,p){var m=p.a,P=p.b,_=p.c;return V(m,v(Tr,b,g,P),_)}),i=a(W,TP,r),u=wr(MP,o,c,t,n.oh,xn(i),V(S,Be,S)),$=u.a,l=u.b,d=u.c;return a(pa,function(b){return ka(a(gp,i,a(FP,l,xn(b))))},a(pa,function(b){return Zi(d)},Zi(a(W,Cp,$))))}),HP=D(function(e,r,n){var t=r.mq,o=r.jV,c=function(u){var $=u.a,l=u.b,d=l.a,b=l.b,g=l.c;return oe($,o)?a(q7,g,t):z},i=a(Vr,c,n.o0);return a(pa,function(u){return ka(n)},Zi(a(W,Vf(e),i)))}),VP=s(function(e,r){var n=r.a,t=r.b,o=r.c;return v(hp,n,t,a(Je,e,o))});na["Browser.Events"]=m0(LP,EP,HP,0,VP);var BP=zi("Browser.Events"),Vv=D(function(e,r,n){return BP(v(hp,e,r,n))}),iu=a(Vv,0,"keydown"),Bv=function(e){return{$:0,a:e}},Oc=s(function(e,r){return v(cn,k,r,e)}),_p=Z9,UP=function(e){var r=_p(e);return r==="INPUT"||r==="TEXTAREA"||r==="SELECT"},RP=s(function(e,r){if(r.$)return!1;var n=r.a;return oe(Db(e),dt(fv(n)))}),IP=s(function(e,r){return a(he,function(n){return n.bE},Mr(a(gr,function(n){return a(RP,e,n.oL)},r)))}),qP=function(e){return a(A,function(r){if(UP(r.o4))return Qn("ignored: text input focused");if(r.jt||r.j9){var n=a(IP,r.jV,e);if(n.$)return Qn("ignored: no matching entry shortcut");var t=n.a;return ae(Bv(t))}else return Qn("ignored: no Ctrl/Cmd modifier")},R(Rc,K(function(r,n,t,o){return{jt:n,jV:r,j9:t,o4:o}}),a(k,"key",ke),a(k,"ctrlKey",ne),a(k,"metaKey",ne),a(Oc,f(["target","tagName"]),ke)))},yp=s(function(e,r){return iu(qP(e))}),CG=te,OP=function(e){return a(W,function(r){return{bE:r.bE,oL:a(he,te,r.oL)}},e)},o$=function(e){return e.pF},GP=Le(function(e,r,n,t,o){var c=a(ar,o,n.cT);if(c.$)return z;var i=c.a,u=ou({hp:i.hp,cc:i.cc,aG:r.aG,bD:E(r.bD),bE:i.bE,g:n.g,nG:i.nG,nR:Tc(r.bD),tk:t$(i),aM:i.aM,cB:t,pw:i.pw,pF:o$(r.bD)}),$=x(e.a7.cq,u,n.O,Ln(r.bD),i.bG),l=a(Ro,mp(o),a(yp,OP($),i.ir)),d=a(Ro,Eo(o),x(e.a7.ay,u,n.O,Ln(r.bD),i.bG));return E(cu(f([d,l])))}),Gc=function(e){var r=e.a;return oe(r,yv)},Pp=function(e){return a(Br,4,e.f)},gt=cu(S),WP=g0("assetsResponse",wv),NP=WP(te),Sp="play-absorbs-pointer-",JP=function(e){return a(Wn,Sp,e)},ZP=s(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(JP(n))return z;if(a(k2,n,e))return E(n);var o=e,c=t;e=o,r=c;continue e}else return z}),xp=function(e){var r=.5*e.va.jO-e._.pD,n=e._.pC+.5*e.va.lt,t=function(i){var u=a(ep,e.va,i);return ce(n,u.bF)>-1&&ce(n,u.bF+u.lt)<1&&ce(r,u.bS)>-1&&ce(r,u.bS+u.jO)<1},o=a(he,function(i){return i.tq},Mr(a(gr,t,e.ky))),c=a(ZP,e.kQ,e._.rj);return{c6:c,hX:o}},Uv=function(e){return xp({ky:e.g.tp,kQ:Ev(wf(e.cT)),_:e.g.tA,va:e.g.$7})},jp=function(e){return{$:6,a:e}},kp=function(e){return{$:3,a:e}},wp=function(e){return{$:2,a:e}},Lp={$:13},XP=a(A,function(e){return(e.jV==="p"||e.jV==="P")&&e.kY&&(e.jt||e.j9)?ae(Lp):Qn("not Cmd+Shift+P")},R(Rc,K(function(e,r,n,t){return{jt:n,jV:e,j9:t,kY:r}}),a(k,"key",ke),a(k,"shiftKey",ne),a(k,"ctrlKey",ne),a(k,"metaKey",ne))),KP=function(e){var r=e;return Ye(r.iv)},uu=s(function(e,r){return e.hU&&!KP(r)}),YP={$:4},QP=a(A,function(e){return(e.jV==="i"||e.jV==="I")&&(e.jt||e.j9)?ae(YP):Qn("not Ctrl+I")},x(Bc,D(function(e,r,n){return{jt:r,jV:e,j9:n}}),a(k,"key",ke),a(k,"ctrlKey",ne),a(k,"metaKey",ne))),eS={$:12},rS=a(A,function(e){return(e.jV==="m"||e.jV==="M")&&(e.jt||e.j9)?ae(eS):Qn("not Ctrl+M")},x(Bc,D(function(e,r,n){return{jt:r,jV:e,j9:n}}),a(k,"key",ke),a(k,"ctrlKey",ne),a(k,"metaKey",ne))),Dp=s(function(e,r){return gt}),aS=s(function(e,r){var n=r;return a(Dp,Ec(e),n.bj)}),nS=function(e){return{$:7,a:e}},tS={$:8},oS=a(Vv,0,"mousemove"),cS=a(Vv,0,"mouseup"),iS=function(e){if(e.$===3){var r=e.a,n=r.bl;if(n.a.$===1){var t=n.a;return cu(f([oS(v(Xn,s(function(o,c){return nS({f_:o,qy:c})}),a(k,"clientX",N),a(k,"clientY",N))),cS(ae(tS))]))}else return gt}else return gt},uS=s(function(e,r){var n=r;return a(Dp,Hc(e),n.bj)}),Tp=function(e){return{$:4,a:e}},Mp=function(e){return{$:1,a:e}},c$=D(function(e,r,n){return{kj:n,oA:r,o0:e}}),Rv=ka(v(c$,S,z,0)),fS=G7(0),zp=O7(0),Ap=s0,$S=D(function(e,r,n){var t=n.kj,o=n.oA,c=y(o,r);if(c.a.$===1)if(c.b.b){var u=c.a;return a(pa,function(l){return a(pa,function(d){return ka(v(c$,r,E(l),d))},fS)},Ap(a(pa,Hv(e),zp)))}else{var i=c.a;return Rv}else{if(c.b.b)return ka(v(c$,r,o,t));var $=c.a.a;return a(pa,function(l){return Rv},Cp($))}}),_G=te,lS=te,vS=D(function(e,r,n){var t=n.kj,o=n.o0,c=function(i){if(i.$){var u=i.a;return a(Vf,e,u(r-t))}else{var u=i.a;return a(Vf,e,u(lS(r)))}};return a(pa,function(i){return a(pa,function(u){return ka(v(c$,o,E(i),r))},Zi(a(W,c,o)))},Ap(a(pa,Hv(e),zp)))}),sS=function(e){return{$:0,a:e}},dS=s(function(e,r){if(r.$){var n=r.a;return Mp(a(nr,e,n))}else{var n=r.a;return sS(a(nr,e,n))}});na["Browser.AnimationManager"]=m0(Rv,$S,vS,0,dS);var bS=zi("Browser.AnimationManager"),pS=function(e){return bS(Mp(e))},Fp=pS,mS=function(e){var r=e;if(r.$===1){var n=r.a,t=n.V;switch(t.$){case 0:return Fp(Tp);case 2:return Fp(Tp);case 1:return gt;default:return gt}}else return gt},hS=s(function(e,r){var n=e.v,t=e.gM,o=a(Ro,wp,mS(r.c_)),c=t.cj?E(a(uS,Vc,r.P)):z,i=t.eV?E(a(Ro,kp,iS(r.aL))):z,u=a(Ro,jp,a(yp,S,r.f)),$=t.dJ?E(a(aS,e$,r.Q)):z,l=t.dK?E(iu(rS)):z,d=t.cj?E(iu(QP)):z,b=a(uu,t,r.c2.N)?E(iu(XP)):z;return a(Ro,n,cu(a(Vr,te,f([E(o),d,l,c,$,i,E(u),b]))))}),gS=g0("tick",a(A,function(e){return a(A,function(r){return a(A,function(n){return a(A,function(t){return a(A,function(o){return a(A,function(c){return a(A,function(i){return a(A,function(u){return a(A,function($){return a(A,function(l){return a(A,function(d){return a(A,function(b){return a(A,function(g){return a(A,function(C){return a(A,function(p){return a(A,function(m){return a(A,function(P){return a(A,function(_){return a(A,function(j){return a(A,function(L){return ae({dC:L,ey:j,eA:_,eB:P,hF:m,eQ:p,rA:C,h_:g,kv:b,tm:d,gD:l,tp:$,tt:u,tA:i,fs:c,$7:o,fv:t,iJ:n,eb:r,fN:e})},a(k,"boundingClientRects",hr(a(A,function(L){return a(A,function(T){return a(A,function(U){return ae({rk:U,rI:T,t7:L})},a(k,"elements",hr(a(A,function(U){return a(A,function(I){return ae({lX:I,bE:U})},a(k,"boundingClientRect",a(A,function(I){return a(A,function(q){return a(A,function(Q){return a(A,function(Z){return ae({bx:Z,bF:Q,bM:q,bS:I})},a(k,"bottom",N))},a(k,"left",N))},a(k,"right",N))},a(k,"top",N))))},a(k,"id",ke)))))},a(k,"frameId",ke))},a(k,"scroll",a(A,function(L){return a(A,function(T){return a(A,function(U){return a(A,function(I){return a(A,function(q){return a(A,function(Q){return ae({l9:Q,ma:q,bF:I,bS:U,pu:T,pv:L})},a(k,"contentHeight",N))},a(k,"contentWidth",N))},a(k,"left",N))},a(k,"top",N))},a(k,"viewportHeight",N))},a(k,"viewportWidth",N)))))))},a(k,"darkModeIsOn",ne))},a(k,"deviceOrientation",Do(f([wc(z),a(Je,E,a(A,function(_){return a(A,function(j){return a(A,function(L){return ae({aQ:L,p3:j,rN:_})},a(k,"alpha",N))},a(k,"beta",N))},a(k,"gamma",N)))]))))},a(k,"devicePixelRatio",N))},a(k,"dt",N))},a(k,"focusedElementIsContentEditable",ne))},a(k,"focusedElementIsTextInput",ne))},a(k,"keyboard",a(A,function(g){return a(A,function(C){return a(A,function(p){return a(A,function(m){return a(A,function(P){return a(A,function(_){return a(A,function(j){return a(A,function(L){return a(A,function(T){return a(A,function(U){return ae({i3:U,jt:T,jA:L,q8:j,bF:_,j9:P,tH:m,bM:p,kY:C,lp:g})},a(k,"alt",ne))},a(k,"ctrl",ne))},a(k,"down",ne))},a(k,"downs",hr(ke)))},a(k,"left",ne))},a(k,"meta",ne))},a(k,"pressedKeys",hr(ke)))},a(k,"right",ne))},a(k,"shift",ne))},a(k,"up",ne))))},a(k,"operatingSystem",ke))},a(k,"pageId",ke))},a(k,"pageScroll",a(A,function(l){return a(A,function(d){return a(A,function(b){return a(A,function(g){return a(A,function(C){return a(A,function(p){return ae({l9:p,ma:C,bF:g,bS:b,pu:d,pv:l})},a(k,"contentHeight",N))},a(k,"contentWidth",N))},a(k,"left",N))},a(k,"top",N))},a(k,"viewportHeight",N))},a(k,"viewportWidth",N))))},a(k,"paneBoundingBoxes",hr(a(A,function($){return a(A,function(l){return a(A,function(d){return a(A,function(b){return a(A,function(g){return ae({jO:g,bF:b,tq:d,bS:l,lt:$})},a(k,"height",N))},a(k,"left",N))},a(k,"paneId",ke))},a(k,"top",N))},a(k,"width",N)))))},a(k,"persisted",hr(a(A,function(u){return a(A,function($){return ae(y(u,$))},a(Jn,1,ke))},a(Jn,0,ke)))))},a(k,"pointer",a(A,function(i){return a(A,function(u){return a(A,function($){return a(A,function(l){return a(A,function(d){return a(A,function(b){return a(A,function(g){return a(A,function(C){return a(A,function(p){return a(A,function(m){return a(A,function(P){return a(A,function(_){return ae({q4:_,jA:P,hG:m,hH:p,rj:C,sj:g,sU:b,tZ:d,t$:l,lp:$,pC:u,pD:i})},a(k,"doubleClick",ne))},a(k,"down",ne))},a(k,"dx",N))},a(k,"dy",N))},a(k,"elementIdsForLastDown",hr(ke)))},a(k,"isDown",ne))},a(k,"move",ne))},a(k,"rightDown",ne))},a(k,"rightUp",ne))},a(k,"up",ne))},a(k,"x",N))},a(k,"y",N))))},a(k,"rawPointer",a(A,function(c){return a(A,function(i){return a(A,function(u){return a(A,function($){return a(A,function(l){return a(A,function(d){return a(A,function(b){return a(A,function(g){return a(A,function(C){return a(A,function(p){return a(A,function(m){return a(A,function(P){return ae({q4:P,jA:m,hG:p,hH:C,rj:g,sj:b,sU:d,tZ:l,t$:$,lp:u,pC:i,pD:c})},a(k,"doubleClick",ne))},a(k,"down",ne))},a(k,"dx",N))},a(k,"dy",N))},a(k,"elementIdsForLastDown",hr(ke)))},a(k,"isDown",ne))},a(k,"move",ne))},a(k,"rightDown",ne))},a(k,"rightUp",ne))},a(k,"up",ne))},a(k,"x",N))},a(k,"y",N))))},a(k,"screen",a(A,function(o){return a(A,function(c){return ae({jO:c,lt:o})},a(k,"height",N))},a(k,"width",N))))},a(k,"screenOrientationAngle",N))},a(k,"searchParamsFromUrl",Do(f([wc(z),a(Je,E,hr(a(A,function(n){return a(A,function(t){return ae(y(n,t))},a(Jn,1,ke))},a(Jn,0,ke))))]))))},a(k,"touches",hr(a(A,function(r){return a(A,function(n){return a(A,function(t){return ae({bE:t,pC:n,pD:r})},a(k,"id",qi))},a(k,"x",N))},a(k,"y",N)))))},a(k,"wheel",a(A,function(e){return a(A,function(r){return a(A,function(n){return a(A,function(t){return a(A,function(o){return ae({mg:o,mh:t,mm:n,oi:r,oj:e})},a(k,"deltaX",N))},a(k,"deltaY",N))},a(k,"elementIdsForLastWheel",hr(ke)))},a(k,"pinchDeltaForChrome",N))},a(k,"pinchScaleForSafari",Do(f([wc(z),a(Je,E,N)]))))))),CS=g0("visibilityChanged",a(A,function(e){return a(A,function(r){return ae({gn:r,pw:e})},a(k,"instanceId",ke))},a(k,"visible",ne))),_S=s(function(e,r){var n=a(hS,{gM:r.eG,v:Bf},r.bD),t=Dc(r.uF),o=Uv(t),c=a(Vr,x(GP,e,r,t,o),r.aU),i=Pp(r.bD)?iu(a(A,function($){return $==="Escape"?Gc(r.uF)?ae(vp(jv)):ae(sp):Qn("not Escape")},a(k,"key",ke))):gt,u=e.ay(t.O);return cu(Y(f([gS(fP),CS(function($){return a($P,$.gn,$.pw)}),a(Ro,wP,NP),u,n,i]),c))}),Wc=W8,Ep=K(function(e,r,n,t){var o=Mo&r>>>e,c=a(Yi,o,t);if(c.$){var $=c.a,l=v(Wc,Mo&r,n,$);return v(Wc,o,Cc(l),t)}else{var i=c.a,u=x(Ep,e-yn,r,n,i);return v(Wc,o,_c(u),t)}}),i$=D(function(e,r,n){var t=n.a,o=n.b,c=n.c,i=n.d;return e<0||ce(e,t)>-1?n:ce(e,d2(t))>-1?x(Xt,t,o,c,v(Wc,Mo&e,r,i)):x(Xt,t,o,x(Ep,o,e,r,c),i)}),yS=s(function(e,r){var n=r;return H(n,{eU:v(i$,a(ja,n.cJ,n.dq+n.aR),e,n.eU)})}),Hp=s(function(e,r){if(r.$){var t=r.a;return tu(H(t,{eU:v(i$,t.aR,e,t.eU)}))}else{var n=r.a;return Mc(a(yS,e,n))}}),io=s(function(e,r){var n=r.a,t=r.b,o=zo(t),c=o.a,i=o.b,u=e(i),$=u.a,l=u.b;return y(a(Ba,n,a(Hp,y(c,$),t)),l)}),PS=D(function(e,r,n){var t=function(o){var c=v(Uf,e,r,o.O),i=c.a,u=c.b;return y(H(o,{O:i}),u)};return a(Vo,function(o){return H(n,{uF:o})},a(io,t,n.uF))}),Vp=Eh,SS=Wt("clearPlayLocalStorage",function(e){return Vp}),xS=Wt("pushUrlReset",function(e){return Vp}),jS=D(function(e,r,n){if(r.$===1)return y(n,ie);if(r.a){var u=r.a;return y(n,SS(0))}else{var t=r.a,o=function($){var l=(function(){var d=n.aU;if(d.b){var b=d.a;return v(eo,b,he(function(g){return H(g,{cc:e.aH})}),$.cT)}else return $.cT})();return y(H($,{cc:e.aH,cT:l}),ie)},c=a(io,o,n.uF),i=c.a;return y(H(n,{uF:i}),xS(0))}}),kS=D(function(e,r,n){var t=function(o){var c=a(ar,e,o.cT);if(c.$)return y(o,ie);var i=c.a,u=a(oo,r,i.ir),$=v(Tr,e,H(i,{ir:u}),o.cT);return y(H(o,{cT:$}),ie)};return a(Vo,function(o){return H(n,{uF:o})},a(io,t,n.uF))}),wS=function(e){return a(Br,7,e.f)},LS=s(function(e,r){return e?{jO:r.X.lt,lt:r.X.jO}:r.X}),DS=function(e){var r=e;return a(LS,r.dY,r.cL)},TS=function(e){return DS(e.Q)},Iv=function(e){return wS(e)?E(TS(e)):z},Bp=24,fu=s(function(e,r){return v(dr,.1,1,a(Oe,(e.lt-Bp)/r.lt,(e.jO-Bp)/r.jO))}),MS=D(function(e,r,n){var t=a(fu,e,r),o=function(c){return H(c,{bx:c.bx/t,bF:c.bF/t,bM:c.bM/t,bS:c.bS/t})};return a(W,function(c){return H(c,{rk:a(W,function(i){return H(i,{lX:o(i.lX)})},c.rk)})},n)}),zS=D(function(e,r,n){var t=a(fu,e,r),o=.5*(e.lt-r.lt*t),c=.5*(e.jO-r.jO*t);return H(n,{jO:n.jO/t,bF:(n.bF-o)/t,bS:(n.bS-c)/t,lt:n.lt/t})}),Up=D(function(e,r,n){var t=.5*e.jO-n.pD,o=n.pC+.5*e.lt,c=a(fu,e,r),i=.5*(e.lt-r.lt*c),u=.5*(e.jO-r.jO*c);return H(n,{pC:(o-i)/c-.5*r.lt,pD:.5*r.jO-(t-u)/c})}),Rp=D(function(e,r,n){var t=v(Up,e,r,n),o=a(fu,e,r);return H(t,{hG:n.hG/o,hH:n.hH/o})}),qv=s(function(e,r){if(e.$)return r;var n=e.a;return{dC:v(MS,r.$7,n,r.dC),ey:r.ey,eA:r.eA,eB:r.eB,hF:r.hF,eQ:r.eQ,rA:r.rA,h_:r.h_,kv:r.kv,tm:r.tm,gD:r.gD,tp:a(W,a(zS,r.$7,n),r.tp),tt:r.tt,tA:v(Rp,r.$7,n,r.tA),fs:v(Rp,r.$7,n,r.fs),$7:n,fv:r.fv,iJ:r.iJ,eb:a(W,a(Up,r.$7,n),r.eb),fN:r.fN}}),AS=K(function(e,r,n,t){var o=function(c){var i=a(ar,r,c.cT);if(i.$)return y(c,ie);var u=i.a,$=Uv(c),l=Iv(t.bD),d=ou({hp:u.hp,cc:u.cc,aG:t.aG,bD:E(t.bD),bE:u.bE,g:a(qv,l,c.g),nG:u.nG,nR:Tc(t.bD),tk:t$(u),aM:u.aM,cB:$,pw:u.pw,pF:o$(t.bD)}),b=R(e.a7.bh,d,c.O,Ln(t.bD),n,u.bG),g=b.a,C=b.b,p=b.c,m=v(Cv,oe(Mr(t.aU),E(r)),C,{cS:c.cc,jS:u.cc}),P=v(Uf,e,p,c.O),_=P.a,j=P.b,L=v(Tr,r,H(u,{cc:m.jS,bG:g}),c.cT);return y(H(c,{cc:m.cS,cT:L,O:_}),ba(f([a(Qt,Eo(r),m.hq),j])))};return a(Vo,function(c){return H(t,{uF:c})},a(io,o,t.uF))}),Ip=function(e){return{$:2,a:e}},qp=Ip,FS=function(e){return H(e,{f:a(oo,qp(4),e.f)})},ES=function(e){var r=e.b;return a(Ba,nu,up(r))},HS=D(function(e,r,n){return{$:7,a:e,b:r,c:n}}),yG=te,Op=9729,PG=te,u$=10497,VS={hP:!0,mM:u$,ia:Op,ie:Op,ps:u$},f$=33071,BS=(function(){var e=VS;return H(e,{mM:f$,ps:f$})})(),Gp=function(e){return{$:1,a:e}},US={$:0},RS=s(function(e,r){return{$:1,a:e,b:r}}),IS=s(function(e,r){var n=e.hP,t=e.ps,o=e.mM,c=e.ie,i=e.ia,u=K(function($,l,d,b){var g=$,C=l,p=d,m=b;return wr(Z7,g,C,p,m,n,r)});return x(u,i,c,o,t)}),qS=s(function(e,r){return a(Ji,function(n){return Gp({S:n,tl:e,fK:r})},a(IS,e,r))}),Wp=9728,OS={hP:!0,mM:u$,ia:Wp,ie:Wp,ps:u$},GS=(function(){var e=OS;return H(e,{mM:f$,ps:f$})})(),WS=s(function(e,r){var n=r.F,t=a(ar,a(ht,0,e),n);if(!t.$&&!t.a.$){var o=t.a.a.ap,c=t.a.a.E;return oe(c,Ic)?E(o):z}else return z}),$$=function(e){if(e.b){var r=e.a,n=e.b;return E(v(me,Pe,r,n))}else return z},NS=function(e){if(e.b){var r=e.a,n=e.b;return E(v(me,Oe,r,n))}else return z},JS=s(function(e,r){var n=NS(a(gr,function(o){return ce(o,e)>-1},r));if(n.$)return a(fe,1,$$(r));var t=n.a;return t}),ZS=D(function(e,r,n){var t=n.F,o=a(ar,a(ht,0,e),t);if(!o.$&&!o.a.$){var c=o.a.a.fh,i=o.a.a.E;if(i.$===2){var u=a(JS,r,wf(c));return a(ar,u,c)}else return z}else return z}),XS=s(function(e,r){return v(ZS,e,1,r)}),KS=D(function(e,r,n){return ba(a(Vr,function(t){var o=y(a(XS,t,n),a(WS,t,n));if(!o.a.$&&!o.b.$){var c=o.a.a,i=o.b.a,u=i?GS:BS;return E(a(mt,a(HS,e,t),a(qS,u,c)))}else return z},r))}),Np=s(function(e,r){var n=dp(e)+":";return a(Wn,n,r)?a(on,nn(n),r):r}),YS=s(function(e,r){var n=e,t=r;return a(Vr,function(o){var c=o.a,i=o.b;if(i.$)return z;var u=i.a.E;if(oe(u,Ic)){var $=a(ar,c,n.F);if(!$.$&&!$.a.$){var l=$.a.a;return oe(l.E,Ic)?z:E(a(Np,0,c))}else return E(a(Np,0,c))}else return z},Qa(t.F))}),QS=D(function(e,r,n){var t=function(o){var c=a(ar,e,o.cT);if(c.$)return y(o,ie);var i=c.a,u=r(i.aM),$=a(YS,i.aM,u),l=H(i,{aM:u});return y(H(o,{cT:v(Tr,e,l,o.cT)}),v(KS,e,$,u))};return a(Vo,function(o){return H(n,{uF:o})},a(io,t,n.uF))}),ex=s(function(e,r){var n=y(e,r);if(n.a.$===5&&n.b.$===5){var t=n.a.a,o=n.b.a;return oe(Fo(t),Fo(o))}else return oe(e,r)}),rx=function(e){switch(e.$){case 0:var r=e.b;return J(r);case 2:var r=e.b;return rr(r);case 4:var r=e.a;return r?"true":"false";case 1:var r=e.a;return r;case 3:var n=e.a.aQ,t=e.a.C,o=e.a.a1,c=e.a.aT;return a(Lr,",",a(W,J,f([c,o,t,n])));default:var i=e.a;return Fo(i)}},Jp=s(function(e,r){var n=xn(a(fn,function(t){return t.a9},e));return a(Vr,function(t){var o=t.a,c=t.b,i=a(ar,o,n);if(i.$)return z;var u=i.a;return a(ex,u,c)?z:E(y(o,rx(c)))},a(fn,function(t){return t.a9},r))}),ax=D(function(e,r,n){return Y(a(Jp,e.aH,r),n)}),nx=Wt("writeUrlParams",ro(function(e){var r=e.a,n=e.b;return a(ro,te,f([Gr(r),Gr(n)]))})),tx=s(function(e,r){var n=Dc(r.uF),t=e.fL(n.O);return nx(v(ax,e,n.cc,t))}),ox=D(function(e,r,n){var t=function(u){var $=a(Q2,r,u.cc),l=(function(){var d=n.aU;if(d.b){var b=d.a;return v(eo,b,he(function(g){return H(g,{cc:$})}),u.cT)}else return u.cT})();return y(H(u,{cc:$,cT:l}),ie)},o=a(io,t,n.uF),c=o.a,i=H(n,{uF:c});return y(i,a(tx,e,i))}),l$=s(function(e,r){return r}),cx=D(function(e,r,n){if(r.$){var o=r.a,c=a(l$,"Play.Runtime.MaterialLoaded failed",y(e,o));return n}else{var t=r.a;return H(n,{nG:v(Tr,e,t,n.nG)})}}),ix=K(function(e,r,n,t){var o=function(c){return y(H(c,{cT:v(eo,e,he(a(cx,r,n)),c.cT)}),ie)};return a(Vo,function(c){return H(t,{uF:c})},a(io,o,t.uF))}),ux=f0,v$=function(e){return v(me,s(function(r,n){var t=r.a,o=r.b;return v(Ah,t,o,n)}),zh(0),e)},fx=Wt("assetsLoadRequest",ro(function(e){return v$(f([y("id",Gr(e.bE)),y("instanceId",Gr(e.gn)),y("kind",Gr(e.bd)),y("mips",ro(ux)(e.dV)),y("url",Gr(e.fK))]))})),Ov=function(e){var r=e;return r},$x=s(function(e,r){var n=Ov(r);return{bE:n.bE,gn:e,bd:n.bd,dV:n.dV,fK:n.fK}}),Zp=s(function(e,r){return fx(a(W,$x(e),r))}),Gv=f0,lx=Wt("setInstanceMuted",function(e){return v$(f([y("instanceId",Gr(e.gn)),y("muted",Gv(e.sW))]))}),vx=D(function(e,r,n){var t=function(o){var c=a(ar,e,o.cT);if(c.$)return y(o,ie);var i=c.a,u=r&&!i.fS,$=H(i,{fS:i.fS||r,pw:r}),l=i.fr?lx({gn:e,sW:!r}):ie,d=u?a(Zp,e,i.aA):ie;return y(H(o,{cT:v(Tr,e,$,o.cT)}),ba(f([d,l])))};return a(Vo,function(o){return H(n,{uF:o})},a(io,t,n.uF))}),sx=function(e){return e.bm+e.bn},s$=function(e){var r=e;return r},dx=a(nr,sx,s$),Xp=function(e){var r=e.bK,n=e.bC,t=e.bn,o=e.bm,c=(o+t)/2|0,i=o+t-c,u=4;if(o+t<2)return e;if(ce(o,u*t+1)>0){var $=Y(r,De(a(pt,c,n))),l=a(ao,c,n);return{bC:l,bK:$,bm:c,bn:i}}else if(ce(t,u*o+1)>0){var $=a(ao,c,r),l=Y(n,De(a(pt,c,r)));return{bC:l,bK:$,bm:c,bn:i}}else return e},bx=function(e){var r=e.bK,n=e.bC,t=y(n,r);if(t.a.b){var i=t.a,u=i.a,$=i.b;return y(E(u),Xp({bC:$,bK:e.bK,bm:e.bm-1,bn:e.bn}))}else if(t.b.b){if(t.b.b.b)return y(z,Yf);var o=t.b,c=o.a;return y(E(c),Yf)}else return y(z,Yf)},Kp=a(nr,a(nr,Ho(te),bx),s$),Yp=s(function(e,r){return ce(dx(r),e)>0?a(Yp,e,Kp(r).b):r}),Qp=s(function(e,r){var n=Kp(r);if(n.a.$){var c=n.a;return r}else{var t=n.a.a,o=n.b;return ce(t.lj,e)<0?a(Qp,e,o):r}}),e3=60,px=s(function(e,r){var n=r;return e(n)}),mx=s(function(e,r){var n=r;return a(px,Xp,{bC:n.bC,bK:a(M,e,n.bK),bm:n.bm,bn:n.bn+1})}),hx=1,gx=s(function(e,r){var n=r,t=n.ki+e,o=t-hx;return{ki:t,gK:a(Yp,e3,a(mx,{hF:e,lj:t},a(Qp,o,n.gK)))}}),Cx=s(function(e,r){return H(r,{de:a(gx,e.hF,r.de)})}),r3=function(e){var r=e.b;return zo(r).a},a3=s(function(e,r){var n=r3(e.uF);return H(n,{cc:r.cc,nR:Tc(e.bD)})}),d$={$:2},n3=function(e){var r=e.a;return oe(r,d$)},Wv=function(e){var r=e.a;return r.$===3},Ct=function(e){return n3(e)||Wv(e)},t3={$:13},_x=s(function(e,r){return e}),o3="play-scrollport",yx=function(e){var r=D(function(o,c,i){return a(mt,_x(t3),v(Uo,o,c,i))}),n=v(r,o3,e.gD.bF,e.gD.bS),t=a(W,function(o){return v(r,"measure-frame--"+o.rI,o.t7.bF,o.t7.bS)},e.dC);return ba(a(M,n,t))},Px={$:4},Nv=s(function(e,r){return{$:1,a:e,b:r}}),SG=0,c3={$:0},b$={$:1},Io=function(e){return{$:3,a:e}},xG=1,Nc=s(function(e,r){return{$:0,a:e,b:r}}),Sx={$:2},xx=s(function(e,r){return{bF:e,bM:r}}),Da=function(e){var r=e.a;return r},p$=s(function(e,r){var n=r.az,t=function(u){return a(fe,0,a(he,function($){return $.dt},a(wa,u,n)))},o=s(function(u,$){e:for(;;){if(ce(u,$)>-1)return u;if(ce(e,t((u+$)/2|0))<1){var l=u,d=(u+$)/2|0;u=l,$=d;continue e}else{var l=((u+$)/2|0)+1,d=$;u=l,$=d;continue e}}}),c=Da(n),i=a(o,0,c);return i?oe(i,c)?c-1:ce(e-t(i-1),t(i)-e)<1?i-1:i:0}),$u=s(function(e,r){var n=e.a,t=e.b,o=r.az,c=r.gH,i=n?a(fe,c,a(he,function($){return $.dt},a(wa,n-1,o))):c,u=a(fe,c,a(he,function($){return $.dt},a(wa,t,o)));return y(i,u)}),$n={nN:100,oE:24,iD:100,iQ:400,iR:900,o7:4},ca=s(function(e,r){return r/$n.iR*(e.bM-e.bF)}),lu=D(function(e,r,n){var t=r.a,o=r.b,c=function(T){return a(ca,e,T.hy-T.kL)},i=a($u,y(1,Da(n.az)-2),n),u=i.a,$=i.b,l=a($u,y(o.cW+1,o.cO-1),n),d=l.a,b=l.b,g=a($u,y(o.cW,o.cO),n),C=g.a,p=g.b;if(t.$)if(t.a){var j=t.a,P=t.b,L=v(dr,d,$,p+c(P));return y(y(C,o.cW),y(L,a(p$,L,n)))}else{var m=t.a,P=t.b,_=v(dr,u,b,C+c(P));return y(y(_,a(p$,_,n)+1),y(p,o.cO))}else return y(y(C,o.cW),y(p,o.cO))}),Dn=h9,jx=K(function(e,r,n,t){var o=e.nT,c=e.oG,i=e.oF,u=t.bM-t.bF,$=n-r,l=a(Oe,$,a(Pe,$n.nN,u*a(Dn,1.002,c))),d=i*.001*l,b=t.bF+o*u-o*l,g=b+l,C=g+d,p=b+d,m=ce(p,r)<0?y(r,r+l):ce(C,n)>0?y(n-l,n):y(p,C),P=m.a,_=m.b;return{bF:P,bM:_}}),i3=s(function(e,r){var n=y(e,r);e:for(;;)switch(n.a.$){case 2:var t=n.a;return b$;case 3:var o=n.a;return Sx;case 4:var c=n.a;return U2;case 0:var i=n.a.a,u=y(0,Da(i.az)-1),$=u.a,l=u.b,d=a($u,y($,l),i),b=d.a,g=d.b;return Io({ck:z,d0:i,bl:a(Nc,c3,{cO:l-1,cW:1}),a6:a(xx,b,g)});case 1:if(n.b.$===3){var C=n.a.a,p=n.b.a,m=y(0,Da(p.d0.az)-1),$=m.a,l=m.b,P=a($u,y($,l),p.d0),_=P.a,j=P.b,L=x(jx,C,_,j,p.a6);return Io(H(p,{a6:L}))}else break e;case 5:if(n.b.$===3){var T=n.a.a.f_,p=n.b.a,U=p.bl,I=U.b;return Io(H(p,{bl:a(Nc,a(Nv,0,{hy:T,kL:T}),I)}))}else break e;case 6:if(n.b.$===3){var T=n.a.a.f_,p=n.b.a,q=p.bl,I=q.b;return Io(H(p,{bl:a(Nc,a(Nv,1,{hy:T,kL:T}),I)}))}else break e;case 7:if(n.b.$===3){var T=n.a.a.f_,p=n.b.a,Q=p.bl;if(Q.a.$===1){var Z=Q.a,ue=Z.a,ye=Z.b,I=Q.b;return Io(H(p,{bl:a(Nc,a(Nv,ue,H(ye,{hy:T})),I)}))}else return r}else break e;case 8:if(n.b.$===3){var Me=n.a,p=n.b.a,Ve=p.bl;if(Ve.a.$===1){var Xe=Ve.a,ee=v(lu,p.a6,p.bl,p.d0),Re=ee.a,Ke=Re.b,Ne=ee.b,yr=Ne.b;return Io(H(p,{bl:a(Nc,c3,{cO:yr,cW:Ke})}))}else return r}else break e;default:if(n.b.$===3){var qe=n.a.a,p=n.b.a;return Io(H(p,{ck:qe}))}else break e}return r}),kx=i3(Px),Jv={$:2},wx=function(e){return{$:1,a:e}},m$=function(e){return{$:0,a:e}},u3=function(e){return{$:1,a:e}},uo=function(e){return{$:0,a:e}},vu=12,h$=72,fo=function(e){switch(e){case 0:return{pC:m$(h$),pD:uo(vu)};case 1:return{pC:m$(h$+44),pD:uo(vu+44)};case 2:return{pC:u3(12),pD:uo(vu)};case 3:return{pC:Jv,pD:uo(100)};case 4:return{pC:Jv,pD:wx(40)};case 5:return{pC:m$(h$),pD:uo(vu)};case 6:return{pC:Jv,pD:uo(80)};default:return{pC:m$(h$),pD:uo(vu)}}},Zv=function(e){return e.$===3},Lx=s(function(e,r){if(e.$)return r;var n=e.a;return H(r,{aK:a(M,n,a(gr,Df(n),r.aK))})}),f3=function(e){return{pC:e.fs.pC+.5*e.$7.lt,pD:-e.fs.pD+.5*e.$7.jO}},$3=s(function(e,r){var n=f3(e);return{pC:r.hu.pC+(n.pC-r.hS.pC),pD:r.hu.pD+(n.pD-r.hS.pD)}}),l3=s(function(e,r){var n="-titlebar",t="draggable-panel-",o="-no-drag",c=function(i){e:for(;;)if(i.b){var u=i.a,$=i.b;if(a(Wn,t,u)&&a(t2,o,u)){if(e.jf)return z;var l=$;i=l;continue e}else{if(a(Wn,t,u)&&a(vv,n,u))return E(a(F2,nn(n),a(on,nn(t),u)));var l=$;i=l;continue e}}else return z};return c(r)}),Dx=function(e){return a(l3,{jf:!0},e)},Tx=function(e){return a(l3,{jf:!1},e)},Mx=s(function(e,r){switch(r.$){case 0:var n=r.a;return n;case 1:var n=r.a;return e-n;default:return e/2}}),zx=s(function(e,r){if(r.$){var n=r.a;return e-n}else{var n=r.a;return n}}),g$=12,v3=D(function(e,r,n){var t=g$-r,o=e-g$-r;return ce(o,t)<1?t:v(dr,t,o,n)}),Ax=D(function(e,r,n){return{pC:v(v3,e.$7.lt,a(Mx,e.$7.lt,r.pC),n.pC),pD:v(v3,e.$7.jO,a(zx,e.$7.jO,r.pD),n.pD)}}),Fx=D(function(e,r,n){return a(fe,e,a(he,If,Mr(a(gr,function(t){var o=t.a;return oe(o,r)},n.cV))))}),Ex={pC:0,pD:0},s3=K(function(e,r,n,t){return v(Ax,e,r,v(Fx,Ex,n,t))}),Hx=D(function(e,r,n){return a(M,y(e,r),a(gr,function(t){var o=t.a;return!oe(o,e)},n))}),d3=D(function(e,r,n){var t=n,o=t.eF;if(o.$===1)if(e.fs.jA){var c=function(C){return a(oa,function(p){return a(he,Ao(p),r(p))},a(oa,t.r4,C(e.fs.rj)))},i=a(Lx,a(he,Pn,c(Tx)),t),u=c(Dx);if(u.$)return i;var $=u.a,l=$.a,d=$.b;return H(i,{eF:E({hu:x(s3,e,d,l,i),hS:f3(e),bE:l})})}else return n;else{var b=o.a;if(e.fs.sj)return n;var g=a($3,e,b);return H(t,{eF:z,cV:v(Hx,b.bE,g,t.cV)})}}),Vx=s(function(e,r){var n=a(oa,function(c){var i=c.kU-e.hF;return i<=0?z:E(H(c,{kU:i}))},r.eq),t=v(d3,e,a(nr,E,fo),r.f),o=Zv(r.aL)&&!a(Br,3,t)?kx(r.aL):r.aL;return H(r,{eq:n,f:t,aL:o})}),su=12,b3=function(e){return{pC:u3(su),pD:uo(su+e*40)}},Bx=s(function(e,r){return a(he,b3,a(Nf,function(n){return oe(n.bE,r)},e))}),p3=function(e){return te},C$=s(function(e,r){if(r.$===-2)return Nn;var n=r.a,t=r.b,o=r.c,c=r.d,i=r.e;return R(Fe,n,t,a(e,t,o),a(C$,e,c),a(C$,e,i))}),Ux=s(function(e,r){var n=xn(a(W,function(i){return y(Ov(i).bE,i)},r)),t=a(C$,s(function(i,u){return Ov(u).bd}),n),o=a(Vr,function(i){var u=i.a,$=i.b;return a(ru,u,e)?z:E($)},Qa(n)),c=a(Vr,function(i){var u=i.a,$=i.b;return a(ru,u,n)?z:E({bE:u,bd:$})},Qa(e));return{sw:t,uM:o,uN:c}}),Rx=function(e){return e.fr&&!e.pw},Ix=Wt("assetsUnload",ro(function(e){return v$(f([y("id",Gr(e.bE)),y("instanceId",Gr(e.gn)),y("kind",Gr(e.bd))]))})),qx=s(function(e,r){return{bE:r.bE,gn:e,bd:r.bd}}),Ox=s(function(e,r){return Ix(a(W,qx(e),r))}),Gx=c0(function(e,r,n,t,o,c,i,u,$){var l=a(ar,u,$.cT);if(l.$)return $;var d=l.a;if(Rx(d))return $;var b=d.hp+r.g.hF,g=ou({hp:b,cc:d.cc,aG:o,bD:E(n),bE:d.bE,g:a(qv,c,r.g),nG:d.nG,nR:Tc(n),tk:t$(d),aM:d.aM,cB:t,pw:d.pw,pF:o$(n)}),C=v(p3,"play:onTick",v(e.a7.bi,g,r.O,Ln(n)),d.bG),p=C.a,m=C.b,P=C.c,_=v(Cv,oe(i,E(u)),m,{cS:$.ci,jS:d.cc}),j=x(e.aA,g,r.O,Ln(n),p),L=a(Ux,d.hz,j),T=Ye(L.uM)?ie:a(Zp,u,L.uM),U=Ye(L.uN)?ie:a(Ox,u,L.uN),I=x(e.a7.cq,g,r.O,Ln(n),p),q=v(d3,g,Bx(I),d.ir);return H($,{cK:a(M,T,a(M,U,a(M,a(Qt,Eo(u),_.hq),$.cK))),cP:Y($.cP,P),ci:_.cS,cT:v(Tr,u,H(d,{hp:b,cc:_.jS,hz:L.sw,bG:p,ir:q}),$.cT)})}),Wx=function(e){var r=e.c6;if(r.$){var t=e.jv;if(t.$)return z;var o=t.a;return a(Qi,o,e.aU)?e.jv:z}else{var n=r.a;return E(n)}},m3=function(e){return{$:3,a:e}},h3=function(e){var r=e.b;return zo(r).a.hp},Nx=function(e){var r=e;return H(r,{aR:a(Oe,r.ba-1,r.aR+1)})},Jx=function(e){if(e.$){var n=e.a;return tu(H(n,{aR:a(Oe,Da(n.eU)-1,n.aR+1)}))}else{var r=e.a;return Mc(Nx(r))}},Zx=function(e){var r=e;return r.aR},g3=function(e){if(e.$){var n=e.a;return n.aR}else{var r=e.a;return Zx(r)}},Xx=function(e){var r=e;return r.ba},C3=function(e){if(e.$){var n=e.a;return Da(n.eU)}else{var r=e.a;return Xx(r)}},Kx=function(e){return oe(g3(e),C3(e)-1)},Yx=function(e){var r=e.a,n=e.b;return Kx(n)?z:E(a(Ba,r,Jx(n)))},Xv=N8,_3=R8,du=K(function(e,r,n,t){var o=Mo&r>>>e;if(ce(o,Gn(t))>-1){if(e===5)return a(Xv,Cc(n),t);var c=_c(x(du,e-yn,r,n,So));return a(Xv,c,t)}else{var i=a(Yi,o,t);if(i.$){var c=_c(x(du,e-yn,r,n,_3(i)));return v(Wc,o,c,t)}else{var u=i.a,c=_c(x(du,e-yn,r,n,u));return v(Wc,o,c,t)}}}),Kv=s(function(e,r){var n=r.a,t=r.b,o=r.c,c=r.d,i=Gn(c),u=Gn(e),$=n+(u-i);if(oe(u,Er)){var l=ce($>>>yn,1<<t)>0;if(l){var d=t+yn,b=x(du,d,n,e,_3(_c(o)));return x(Xt,$,d,b,So)}else return x(Xt,$,t,x(du,t,n,e,o),So)}else return x(Xt,$,t,o,e)}),Qx=s(function(e,r){var n=r.d;return a(Kv,a(Xv,e,n),r)}),ej=s(function(e,r){var n=r;return ce(n.ba,n.cJ)<0?H(n,{ba:n.ba+1,aR:n.ba,eU:v(i$,a(ja,n.cJ,n.dq+n.ba),e,n.eU)}):H(n,{aR:n.cJ-1,eU:v(i$,n.dq,e,n.eU),dq:a(ja,n.cJ,n.dq+1)})}),rj=s(function(e,r){if(r.$){var t=r.a;return tu(H(t,{aR:Da(t.eU),eU:a(Qx,e,t.eU)}))}else{var n=r.a;return Mc(a(ej,e,n))}}),y3=s(function(e,r){return H(r,{dC:e.dC,hp:r.hp+e.hF,ey:e.ey,eA:e.eA,eB:e.eB,hF:e.hF,eQ:e.eQ,rA:e.rA,h_:e.h_,gD:e.gD,tA:e.tA,fs:e.fs,$7:e.$7,fv:e.fv,eb:e.eb,fN:e.fN})}),aj=D(function(e,r,n){var t=n.a,o=n.b;switch(t.$){case 2:return y(n,ie);case 3:var c=t.a.le;return y((ce(c+r.hF,h3(n))>0?a(Ge,Yx,fe(a(Ba,d$,o))):te)(a(Ba,m3({le:c+r.hF}),o)),ie);case 1:var i=zo(o),l=i.a,d=i.b,b=a(y3,r,l),u=a(e,b,d),C=u.a,p=u.b;return y(a(Ba,yv,a(rj,y(b,C),o)),p);default:var $=zo(o),l=$.a,d=$.b,b=a(y3,r,l),g=a(e,b,d),C=g.a,p=g.b;return y(a(Ba,nu,a(Hp,y(b,C),o)),p)}}),nj=D(function(e,r,n){var t=xp({ky:r.tp,kQ:Ev(n.aU),_:r.tA,va:r.$7}),o=Wx({c6:t.c6,jv:n.aG,aU:n.aU}),c=a(Cx,r,n.bD),i=s(function(C,p){var m=t,P=H(p,{g:r}),_=Iv(c),j=v(me,ra(Gx,e,P,c,m,o,_,Mr(n.aU)),{cK:S,cP:S,ci:P.cc,cT:P.cT},n.aU),L=v(Uf,e,j.cP,P.O),T=L.a,U=L.b;return y(H(P,{cc:j.ci,cT:j.cT,O:T}),ba(a(M,U,j.cK)))}),u=v(aj,i,r,n.uF),$=u.a,l=u.b,d=a(Vx,a(a3,H(n,{uF:$}),Dc($)),c),b=(function(){var C=d.c2;return H(d,{c2:H(C,{rz:z})})})(),g=Ct($)?yx(r3($)):ie;return y(H(n,{aG:o,bD:b,uF:$}),ba(f([l,g])))}),jG=1,kG=0,bu=function(e){var r=e;return H(r,{aV:!1})},tj=function(e){var r=e;return H(r,{bj:bu(r.bj)})},oj=function(e){var r=e;return H(r,{bj:bu(r.bj)})},P3=function(e){return{$:14,a:e}},S3="play-command-palette",Yv={f0:S3,fd:320,kK:"Type a command\u2026",v:P3,lt:{sL:400,u6:50}},x3=3,cj=s(function(e,r){return!Zv(e)&&Zv(r)}),ij=function(e){switch(e){case 0:return 1;case 1:return 2;default:return 0}},uj=N7("focus"),j3=function(e){return e.f0+"-search"},pu=s(function(e,r){var n=r,t=a(fe,0,a(oa,function(c){return a(Jf,c,n.aS)},n.e$)),o=a(tp,e,t);return y(H(n,{aV:!0,b1:o,av:t}),ba(f([a(mt,function(c){return e.v(La)},uj(j3(e))),a(mt,function(c){return e.v(La)},v(Uo,Bo(e),0,o))])))}),fj=s(function(e,r){var n=r,t=a(pu,Ec(e),a(eu,E(n.cL),n.bj)),o=t.a,c=t.b;return y(H(n,{bj:o}),c)}),$j=D(function(e,r,n){var t=n,o=a(pu,Hc(e),a(eu,mv(r),t.bj)),c=o.a,i=o.b;return y(H(t,{bj:c}),i)}),lj=Bv,Qv={$:2},k3=function(e){return{$:1,a:e}},vj={$:3},es=function(e){return{$:0,a:e}},rs=s(function(e,r){return e<0?z:Mr(a(pt,e,r))}),sj=s(function(e,r){e:for(;;){var n=y(e,r);if(n.a.b)if(n.b.b){var t=n.a,o=t.a,c=t.b,i=n.b,u=i.a,$=i.b;if(oe(o,u)){var l=c,d=$;e=l,r=d;continue e}else{var l=e,d=$;e=l,r=d;continue e}}else return!1;else return!0}}),dj=K(function(e,r,n,t){return{lS:r,mJ:e,oo:n,op:t}}),bj=2,pj=$9,mj=12,hj=-3,gj=-1,Cj=-1,as=16,qo=-a(Dn,2,30),_j=Le(function(e,r,n,t,o){var c=R(pj,dj,r,n,t,o),i={f3:S,e6:0,h$:qo,h0:qo,h1:qo,gw:S},u=e.m3?Cj:hj,$=s(function(d,b){var g=d.op,C=d.oo,p=d.lS,m=d.mJ,P=oe(m,e.oe)?e.m2?b.e6*gj+as+p*bj:b.e6?a(Pe,b.h1+as+p,b.h0+as+mj):qo:qo,_=a(Pe,P,b.h$+u);return{f3:a(M,P,b.f3),e6:b.e6+1,h$:_,h0:C,h1:g,gw:a(M,_,b.gw)}}),l=v(me,$,i,c);return y(De(l.f3),De(l.gw))}),yj=function(e){return v(me,s(function(r,n){return r}),qo,e)},Pj=D(function(e,r,n){e:for(;;){if(r<=0)return e;var t=a(M,n,e),o=r-1,c=n;e=t,r=o,n=c;continue e}}),Sj=s(function(e,r){return v(Pj,S,e,r)}),xj=D(function(e,r,n){var t=Dr(e),o=Dr(r),c=a(Sj,o,qo),i=a(_n,Ao,e),u=v(me,s(function(l,d){var b=l.a,g=l.b,C=d.a,p=d.b;return R(_j,{m2:!b,m3:oe(b,t-1),oe:g},r,n,C,p)}),y(c,c),i),$=u.b;return yj($)}),jj=s(function(e,r){var n=r;if(To(e))return E(0);var t=a(W,fv,yc(e));return a(sj,t,n.j4)?E(v(xj,t,n.j4,n.lT)):z}),ns=function(e){return{$:8,a:e}},w3=s(function(e,r){var n=co*r.av,t=n-r.b1,o=r.b1+e.fd-(n+co);if(t<0)return a(mt,function(i){return e.v(ns(n))},v(Uo,Bo(e),0,n));if(o<0){var c=r.b1-o;return a(mt,function(i){return e.v(ns(c))},v(Uo,Bo(e),0,c))}else return ie}),kj=v9,ts=D(function(e,r,n){var t=n;switch(r.$){case 0:var o=r.a,c=To(o)?a(W,Pn,t.iv):a(W,If,a(kj,s(function(P,_){var j=P.a,L=_.a;return a(N0,L,j)}),a(Vr,function(P){var _=P.a,j=P.b;return a(he,function(L){return y(L,_)},a(jj,o,j))},t.iv)));return V(H(t,{aS:c,b1:0,iI:o,av:0}),a(mt,function(P){return e.v(La)},v(Uo,Bo(e),0,0)),a(he,es,Mr(c)));case 1:var C=a(Pe,0,t.av-1),i=H(t,{av:C});return V(i,a(w3,e,i),a(he,es,a(rs,C,t.aS)));case 2:var C=a(Oe,Dr(t.aS)-1,t.av+1),i=H(t,{av:C});return V(i,a(w3,e,i),a(he,es,a(rs,C,t.aS)));case 3:var u=a(rs,t.av,t.aS);if(u.$===1)return V(H(t,{aV:!1}),ie,E(Qv));var $=u.a;return V(H(t,{e$:E($),aV:!1}),ie,E(k3($)));case 4:return V(H(t,{aV:!1}),ie,E(Qv));case 10:var l=a(pu,e,t),d=l.a,b=l.b;return V(d,b,E(vj));case 5:var g=r.a;return V(H(t,{e$:E(g),aV:!1}),ie,E(k3(g)));case 6:var g=r.a,C=a(fe,t.av,a(Jf,g,t.aS));return V(H(t,{av:C}),ie,z);case 7:return V(H(t,{aV:!1}),ie,E(Qv));case 8:var p=r.a;return V(H(t,{b1:p}),ie,z);case 9:var m=r.a;return V(t,a(mt,function(P){return e.v(La)},v(Uo,Bo(e),0,t.b1+m)),z);default:return V(t,ie,z)}}),wj=D(function(e,r,n){var t=n;if(r.$===1){var o=r.a;return y(H(t,{dY:o}),ie)}else{var c=r.a,i=v(ts,Ec(e),c,t.bj),u=i.a,$=i.b,l=i.c,d=(function(){e:for(;;){if(l.$)break e;switch(l.a.$){case 1:var b=l.a.a;return b;case 0:var b=l.a.a;return b;default:break e}}return t.cL})();return y(H(t,{cL:d,bj:u}),$)}}),Lj=function(e){var r=e;return Ye(r.q)?q2(e):I2(e)},Dj=function(e){var r=e;return 1+Dr(r.o)+Dr(r.q)},Tj=function(e){return a(Kf,Dj(e)-1,e)},Mj=function(e){var r=e,n=r.o;if(n.b){var t=n.a,o=n.b;return{q:a(M,r.f1,r.q),o,f1:t}}else return r},zj=function(e){var r=e;return Ye(r.o)?Tj(e):Mj(e)},L3=D(function(e,r,n){var t=e(n.c1);return V(H(n,{c1:t}),a(Pv,Fo(t),r),ie)}),Aj=K(function(e,r,n,t){var o=t;switch(r.$){case 1:var c=r.a,i=a(fe,o.c1,a(O2,c,o.c1));return V(H(o,{c1:i}),a(Pv,c,n),ie);case 2:return v(L3,zj,n,o);case 3:return v(L3,Lj,n,o);default:var u=r.a,$=v(ts,Hc(e),u,o.bj),l=$.a,d=$.b,b=$.c,g=(function(){if(b.$)return n;switch(b.a.$){case 1:var C=b.a.a;return a(Sv,C,n);case 0:var C=b.a.a;return a(Sv,C,n);case 2:var p=b.a;return n;default:var m=b.a;return n}})();return V(H(o,{bj:l}),g,d)}}),Ta=function(e){return{$:1,a:e}},os=function(e){return{$:2,a:e}},mu=function(e){return{$:0,a:e}},hu={$:1},D3={$:3},Fj=500,Ej=200,Hj=s(function(e,r){var n=y(r,e);if(n.a.$)switch(n.b.$){case 0:var m=n.a.a,$=n.b,c=$.a,i=$.b,l=(function(){var I=m.V;switch(I.$){case 0:return mu(0);case 1:return hu;case 2:return hu;default:return D3}})();return Ta({bv:i,eE:c.eE,jX:c.jX,V:l,oL:c.oL});case 1:var m=n.a.a,d=n.b,b=m.V;switch(b.$){case 0:return au;case 1:return Ta(H(m,{V:os(0)}));case 2:return Ta(H(m,{V:os(0)}));default:return au}case 2:var m=n.a.a,g=n.b;return Ta(H(m,{V:D3}));case 3:var m=n.a.a,C=n.b,p=m.V;switch(p.$){case 0:return Ta(H(m,{V:mu(0)}));case 1:return Ta(H(m,{V:hu}));case 2:return Ta(H(m,{V:hu}));default:return Ta(H(m,{V:mu(0)}))}default:var m=n.a.a,P=n.b.a,_=m.V;switch(_.$){case 0:var j=_.a,L=j+P;return ce(L,Fj)>0?Ta(H(m,{V:hu})):Ta(H(m,{V:mu(L)}));case 2:var j=_.a,L=j+P;return ce(L,Ej)>0?au:Ta(H(m,{V:os(L)}));case 1:return Ta(m);default:return Ta(m)}}else if(n.b.$){var u=n.a;return au}else{var t=n.a,o=n.b,c=o.a,i=o.b;return Ta({bv:i,eE:c.eE,jX:c.jX,V:mu(0),oL:c.oL})}}),Vj=s(function(e,r){var n=r;return a(Hj,e,n)}),Bj=D(function(e,r,n){var t=e.qD,o=e.gM;switch(r.$){case 0:var cr=r.a;if(o.cj){var c=x(Aj,Vc,cr,n.e,n.P),i=c.a,m=c.b,u=c.c;return V(H(n,{P:i,e:m}),u,z)}else return V(n,ie,z);case 1:var cr=r.a;if(o.dJ){var $=v(wj,e$,cr,n.Q),Re=$.a,l=$.b;return V(H(n,{Q:Re}),l,z)}else return V(n,ie,z);case 2:var cr=r.a;return V(H(n,{c_:a(Vj,cr,n.c_)}),ie,z);case 3:var cr=r.a,d=n.aL,b=a(i3,cr,d),g=a(cj,d,b),C=g?a(oo,sv(3),n.f):n.f;return V(H(n,{f:C,aL:b}),ie,z);case 4:if(o.cj){var m=xv(n.e),p=v(_v,Vc,m,n.P),ue=p.a,u=p.b;return V(H(n,{P:ue,e:m}),u,z)}else return V(n,ie,z);case 5:var m=r.a;if(!o.cj||oe(m,n.e))return V(n,ie,z);var P=v(_v,Vc,m,n.P),ue=P.a,u=P.b;return V(H(n,{P:ue,e:m}),u,z);case 6:var cr=r.a,_=a(Br,6,n.f),j=a(Br,5,n.f),L=a(oo,cr,n.f),T=a(Br,6,L),U=a(Br,5,L),I=a(Br,7,n.f),q=a(Br,7,L),Q=n.c2,Z=!j&&U?v($j,Vc,n.e,n.P):y(j&&!U?oj(n.P):n.P,ie),ue=Z.a,ye=Z.b,Me=(function(){if(_&&!T)return y(H(Q,{N:bu(Q.N)}),ie);if(!_&&T){var Un=a(pu,Yv,Q.N),sr=Un.a,$t=Un.b;return y(H(Q,{N:sr}),$t)}else return y(Q,ie)})(),Ve=Me.a,Xe=Me.b,ee=!I&&q?a(fj,e$,n.Q):y(I&&!q?tj(n.Q):n.Q,ie),Re=ee.a,Ke=ee.b;return V(H(n,{c2:Ve,Q:Re,f:L,P:ue}),ba(f([Xe,ye,Ke])),z);case 7:return V(H(n,{pF:!n.pF}),ie,z);case 8:return V(H(n,{bL:!n.bL}),ie,z);case 9:var Ne=r.a;return V(H(n,{eq:E({bv:Ne,ih:!t,kU:x3})}),ie,t?E(0):z);case 10:return V(n,ie,E(1));case 11:var yr=r.a;return!o.dK||oe(yr,n.nR)?V(n,ie,z):V(H(n,{nR:yr}),ie,z);case 12:return o.dK?V(H(n,{nR:ij(n.nR)}),ie,z):V(n,ie,z);case 13:if(a(uu,o,n.c2.N)){var _=a(Br,6,n.f),L=a(oo,lj(6),n.f),Q=n.c2,qe=_?y(bu(Q.N),ie):a(pu,Yv,Q.N),i=qe.a,u=qe.b;return V(H(n,{c2:H(Q,{N:i}),f:L}),u,z)}else return V(n,ie,z);case 14:var cr=r.a;if(a(uu,o,n.c2.N)){var Q=n.c2,pr=v(ts,Yv,cr,n.c2.N),i=pr.a,u=pr.b,Nr=pr.c,Ha=(function(){e:for(;;){if(Nr.$)break e;switch(Nr.a.$){case 1:return!0;case 2:var lt=Nr.a;return!0;default:break e}}return!1})(),Na=Ha?a(oo,qp(6),n.f):n.f,Ve=(function(){if(!Nr.$&&Nr.a.$===1){var lt=Nr.a.a;return H(Q,{N:bu(i),rz:E(y(lt.iL,lt.jX))})}else return H(Q,{N:i})})();return V(H(n,{c2:Ve,f:Na}),u,z)}else return V(n,ie,z);default:return V(n,ie,z)}}),Uj=s(function(e,r){var n=r;return H(n,{aR:v(dr,0,n.ba-1,e)})}),Rj=s(function(e,r){if(r.$){var t=r.a;return tu(H(t,{aR:v(dr,0,Da(t.eU)-1,e)}))}else{var n=r.a;return Mc(a(Uj,e,n))}}),Ij=s(function(e,r){var n=r.b;return a(Ba,d$,a(Rj,e,n))}),qj=function(e){var r=e.b;return a(Ba,d$,r)},Oj=function(e){var r=e.b;return a(Ba,m3({le:h3(e)}),r)},Gj=s(function(e,r){switch(e.$){case 1:return qj(r);case 2:return fp(r);case 3:return Oj(r);default:var n=e.a;return a(Ij,n,r)}}),Wj=D(function(e,r,n){switch(r.$){case 0:var t=r.a;return v(nj,e,t,n);case 1:var o=r.a,c=r.b;return x(AS,e,o,c,n);case 2:var d=r.a,i=r.b;return v(kS,d,i,n);case 3:var u=r.a;return v(PS,e,f([u]),n);case 4:var d=r.a,$=r.b;return v(vx,d,$,n);case 5:var d=r.a,l=r.b;return v(QS,d,l,n);case 6:return y(n,ie);case 7:var d=r.a,b=r.b,g=r.c;return x(ix,d,b,g,n);case 8:return y(H(n,{hv:z}),ie);case 9:var C=r.a,p=Dc(n.uF).cc,m=!Ye(a(Jp,e.aH,p)),P=v(Bj,{qD:m,gM:n.eG},C,n.bD),_=P.a,j=P.b,L=P.c,T=v(jS,e,L,H(n,{bD:_})),U=T.a,I=T.b;return y(U,ba(f([a(Qt,Bf,j),I])));case 10:var q=r.a;return y(H(n,{uF:a(Gj,q,n.uF)}),ie);case 11:return Pp(n.bD)?y(H(n,{bD:FS(n.bD),uF:ES(n.uF)}),ie):y(H(n,{bD:rp(n.bD)}),ie);case 12:var Q=r.a;return v(ox,e,Q,n);default:return y(n,ie)}}),Nj=Wt("setLocalStorage",function(e){return v$(f([y("key",Gr(e.jV)),y("value",Gr(e.u2))]))}),Jj=s(function(e,r){var n=r.a,t=r.b,o=a(P2,e,n),c=a(Vr,function(i){var u=i.a,$=i.b;return oe(a(to,u,n.gp),E($))?z:E(Nj({jV:u,u2:$}))},o);return Ye(c)?y(n,t):y(H(n,{gp:o}),ba(a(M,t,c)))}),Zj=D(function(e,r,n){return a(Jj,e,v(Wj,e,r,n))}),Xj=function(e){return{$:12,a:e}},Kj={$:8},T3=kn,M3=xa("button"),Jc=xa("code"),Yj=xa("li"),_$=xa("p"),fr=zf,Qj=xa("ul"),ek=function(e){if(e.$){var r=e.a;return a(br,f([a(B,"margin-top","0.4rem")]),f([a(_$,f([a(B,"margin","0 0 0.25rem 0")]),f([fr("Two or more instances share the same id:")])),a(Qj,f([a(B,"margin","0 0 0.5rem 0"),a(B,"padding-left","1.25rem")]),a(W,function(n){return a(Yj,S,f([a(Jc,S,f([fr(n)]))]))},r)),a(_$,f([a(B,"margin","0")]),f([fr("Each "),a(Jc,S,f([fr("Play.instance")])),fr(" needs a unique "),a(Jc,S,f([fr("id")])),fr(" \u2014 the runtime keys per-instance state, asset registries, and DOM nodes by it.")]))]))}else return a(br,f([a(B,"margin-top","0.4rem")]),f([a(_$,f([a(B,"margin","0")]),f([a(Jc,S,f([fr("Play.multipage")])),fr(" was called with an empty "),a(Jc,S,f([fr("instances")])),fr(" list. Add at least one "),a(Jc,S,f([fr("Play.instance { ... }")])),fr(" to the list.")]))]))},rk=xa("details"),z3=function(e){return{$:0,a:e}},y$=Id,cs=s(function(e,r){return a(y$,e,z3(r))}),A3=function(e){return a(cs,"click",ae(e))},ak=xa("strong"),nk=xa("summary"),tk=function(e){return a(br,f([a(B,"position","fixed"),a(B,"top","1rem"),a(B,"left","50%"),a(B,"transform","translateX(-50%)"),a(B,"max-width","min(40rem, calc(100vw - 2rem))"),a(B,"padding","1rem 2.75rem 1rem 1.25rem"),a(B,"background","#fff5f5"),a(B,"color","#742a2a"),a(B,"border","1px solid #fc8181"),a(B,"border-radius","0.5rem"),a(B,"box-shadow","0 4px 24px rgba(0, 0, 0, 0.15)"),a(B,"font-family","system-ui, -apple-system, sans-serif"),a(B,"font-size","0.95rem"),a(B,"line-height","1.5"),a(B,"z-index","2147483647")]),f([a(ak,f([a(B,"display","block"),a(B,"color","#c53030"),a(B,"margin-bottom","0.35rem")]),f([fr("This page has a configuration problem.")])),a(_$,f([a(B,"margin","0 0 0.5rem 0")]),f([fr("Please notify the page author so they can fix it.")])),a(rk,f([a(B,"margin-top","0.5rem"),a(B,"color","#742a2a"),a(B,"font-size","0.88rem")]),f([a(nk,f([a(B,"cursor","pointer"),a(B,"user-select","none")]),f([fr("Technical detail (for the developer)")])),ek(e)])),a(M3,f([A3(Kj),a(T3,"aria-label","Dismiss"),a(B,"position","absolute"),a(B,"top","0.5rem"),a(B,"right","0.5rem"),a(B,"width","1.75rem"),a(B,"height","1.75rem"),a(B,"padding","0"),a(B,"border","none"),a(B,"background","transparent"),a(B,"color","#742a2a"),a(B,"cursor","pointer"),a(B,"font-size","1.4rem"),a(B,"line-height","1"),a(B,"border-radius","0.25rem")]),f([fr("\xD7")]))]))},ok=function(e){switch(e){case 0:return 44;case 1:return 40;default:return 24}},ck=function(e){var r=e;return ok(r.cL.aC)},ik=function(e){return ck(e.Q)},is="scrollbar-muted",F3=s(function(e,r){var n=pe(a(Ee,function(c){return c.ji},r)),t=pe(a(Ee,function(c){return c.i1},r)),o=pe(a(Ee,function(c){return c.bt},r));return v(jn,"style",S,f([$e(`
/* Firefox + recent standards-compliant browsers */
`+(e+(`* {
  scrollbar-width: thin;
  scrollbar-color: `+(o+(` transparent;
}
`+(e+("."+(is+(` {
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
`+(e+("."+(is+(`::-webkit-scrollbar-thumb {
  background-color: `+(n+(`;
}
`+(e+("."+(is+(`::-webkit-scrollbar-thumb:hover {
  background-color: `+(t+`;
}
`))))))))))))))))))))))))))))))))))))]))}),uk=function(e){return a(F3,"",e)},E3=s(function(e,r){return a(y0,e,Gr(r))}),H3=E3("id"),fk=D(function(e,r,n){return v(Tr,e,{fr:r.fr,pw:r.pw},n)}),V3=$7,gu=V3,B3=D(function(e,r,n){return{$:2,a:e,b:r,c:n}}),$k=K(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),U3=K(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),_t=D(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lk=g7,P$=s(function(e,r){var n=r.a,t=r.b,o=r.c;return v(_t,a(lk,e,n),t,o)}),Cu=s(function(e,r){switch(r.$){case 0:var t=r.a,o=r.b,c=r.c;return v(Ub,t,a(W,P$(e),o),a(W,Cu(e),c));case 1:var n=r.a,t=r.b,o=r.c,c=r.d;return x(U3,n,t,a(W,P$(e),o),a(W,Cu(e),c));case 2:var t=r.a,o=r.b,c=r.c;return v(B3,t,a(W,P$(e),o),a(W,function(u){var $=u.a,l=u.b;return y($,a(Cu,e,l))},c));case 3:var n=r.a,t=r.b,o=r.c,c=r.d;return x($k,n,t,a(W,P$(e),o),a(W,function(u){var $=u.a,l=u.b;return y($,a(Cu,e,l))},c));default:var i=r.a;return Mf(a(V3,e,i))}}),_u=Cu,X=jn("div"),R3=s(function(e,r){return v(_t,a(rv,e,r),!1,"")}),yt=s(function(e,r){return a(R3,e,Gr(r))}),$o=yt("id"),vk=function(e){return Y(Sp,e)},I3=function(e){return{$:0,a:e}},wG=te,F=s(function(e,r){return I3(e+(":"+r))}),be=s(function(e,r){return a(F,e,r.u2)}),ia=be("cursor"),sk=function(e){var r=e;return a(he,function(n){return n.bE},r.eF)},us=s(function(e,r){return!a(Of,a(nr,hv,e),r)}),dk=s(function(e,r){var n=r.a,t=r.b;switch(e.$){case 0:var o=e.a,$=o.c;return Ye($)?y(n,t):y(n,a(M,e,t));case 1:var c=e.b;return a(us,function(d){var b=d.c;return Ye(b)},c)?y(n,t):y(n,a(M,e,t));case 2:var i=e.b;return Ye(i)?y(n,t):y(n,a(M,e,t));case 3:return y(n,a(M,e,t));case 4:var $=e.a;return Ye($)?y(n,t):y(n,a(M,e,t));case 5:var $=e.a;return Ye($)?y(n,t):y(n,a(M,e,t));case 6:var u=e.a;return To(u.qR)?y(n,t):y(v(Tr,u.sX,u.qR,n),t);case 7:var $=e.a;return Ye($)?y(n,t):y(n,a(M,e,t));case 8:var $=e.a;return Ye($)?y(n,t):y(n,a(M,e,t));default:var l=e.a;return a(us,function(d){var b=d.b;return Ye(b)},l)?y(n,t):y(n,a(M,e,t))}}),q3=function(e){return{$:6,a:e}},bk=s(function(e,r){return a(cv,a(W,function(n){var t=n.a,o=n.b;return q3({qR:o,sX:t})},Qa(e)),r)}),pk=function(e){var r=v(cn,dk,y(Be,S),e),n=r.a,t=r.b;return a(bk,n,t)},mk=function(e){var r=e.qS,n=e.nU,t=e.mR,o=e.l3;return{l3:o,qS:pk(r),mR:t,nU:n}},hk=function(e){return a(fe,"",a(he,function(r){return'@charset "'+(r+'"')},e))},gk=K(function(e,r,n,t){e:for(;;)if(n.b)if(n.b.b){var o=n.a,c=n.b,i=e,u=r,$=c,l=t+(e(o)+(r+""));e=i,r=u,n=$,t=l;continue e}else{var o=n.a;return t+(e(o)+"")}else return t}),ma=D(function(e,r,n){return x(gk,e,r,n,"")}),O3=function(e){return"("+(e.mu+(a(fe,"",a(he,tC(": "),e.u2))+")"))},Ck=function(e){switch(e){case 0:return"print";case 1:return"screen";default:return"speech"}},G3=function(e){var r=D(function(c,i,u){return c+(" "+a(Lr," and ",a(M,Ck(i),a(W,O3,u))))});switch(e.$){case 0:var t=e.a;return v(ma,O3," and ",t);case 1:var n=e.a,t=e.b;return v(r,"only",n,t);case 2:var n=e.a,t=e.b;return v(r,"not",n,t);default:var o=e.a;return o}},_k=s(function(e,r){return'@import "'+(e+(G3(r)+'"'))}),yk=function(e){var r=e.a,n=e.b;return v(ma,_k(r),`
`,n)},Pk=function(e){var r=e.a,n=e.b;return"@namespace "+(r+('"'+(n+'"')))},Sk=function(e){return v(ma,function(r){var n=r;return n+";"},"",e)},xk=U9,jk=function(e){var r=e;return"::"+r},kk=function(e){switch(e){case 0:return"+";case 1:return"~";case 2:return">";default:return""}},fs=function(e){switch(e.$){case 0:var r=e.a;return"."+r;case 1:var r=e.a;return"#"+r;case 2:var r=e.a;return":"+r;default:var r=e.a;return"["+(r+"]")}},W3=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return Y(r,v(ma,fs,"",n));case 1:var n=e.a;return Ye(n)?"*":v(ma,fs,"",n);default:var r=e.a,n=e.b;return Y(r,v(ma,fs,"",n))}},wk=function(e){var r=e.a,n=e.b;return kk(r)+(" "+W3(n))},Lk=function(e){var r=e.a,n=e.b,t=e.c,o=a(M,W3(r),a(W,wk,n)),c=a(fe,"",a(he,jk,t));return a(xk,a(Lr," ",o),c)},N3=function(e){var r=e.a,n=e.b,t=e.c,o=v(ma,Lk,",",a(M,r,n));return o+("{"+(Sk(t)+"}"))},Dk=function(e){switch(e.$){case 0:var r=e.a;return N3(r);case 1:var n=e.a,t=e.b,o=v(ma,G3,", ",n),c=v(ma,N3,`
`,t);return"@media "+(o+("{"+(c+"}")));case 2:return"TODO";case 3:return"TODO";case 4:return"TODO";case 5:return"TODO";case 6:var i=e.a.qR,u=e.a.sX;return"@keyframes "+(u+("{"+(i+"}")));case 7:return"TODO";case 8:return"TODO";default:return"TODO"}},Tk=function(e){var r=e.qS,n=e.nU,t=e.mR,o=e.l3;return hk(o)+(v(ma,yk,`
`,t)+(v(ma,Pk,`
`,n)+(v(ma,Dk,`
`,r)+"")))},J3=function(e){return{$:8,a:e}},Z3=function(e){return{$:5,a:e}},X3=function(e){return{$:4,a:e}},Zc=D(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lo=D(function(e,r,n){return{$:0,a:e,b:r,c:n}}),yu=function(e){return{$:0,a:e}},$s=s(function(e,r){return{$:2,a:e,b:r}}),K3=function(e){return{$:7,a:e}},Oo=s(function(e,r){return{$:1,a:e,b:r}}),ls=s(function(e,r){if(r.b)if(r.b.b){var t=r.a,o=r.b;return a(M,t,a(ls,e,o))}else{var n=r.a;return f([e(n)])}else return r}),Y3=s(function(e,r){var n=r.a,t=r.b,o=r.c;return v(lo,n,t,Y(o,f([e])))}),vs=s(function(e,r){if(r.b)if(r.b.b){var i=r.a,u=r.b;return a(M,i,a(vs,e,u))}else switch(r.a.$){case 0:var n=r.a.a;return f([yu(a(Y3,e,n))]);case 1:var t=r.a,o=t.a,c=t.b;return f([a(Oo,o,a(ls,Y3(e),c))]);default:return r}else return r}),Q3=s(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c,i=a(W,e,c),u=e(o);return f([v(lo,o,c,t),v(lo,u,i,S)])}else{var n=r.a,t=r.c;return f([v(lo,n,S,t),v(lo,e(n),S,S)])}}),Mk=s(function(e,r){var n=r.a,t=r.b;return v(Zc,n,t,E(e))}),zk=s(function(e,r){return a(Q3,Mk(e),r)}),em=s(function(e,r){return{$:2,a:e,b:r}}),rm=s(function(e,r){return{$:0,a:e,b:r}}),am=function(e){return{$:1,a:e}},nm=s(function(e,r){switch(r.$){case 0:var n=r.a,o=r.b;return a(rm,n,Y(o,f([e])));case 1:var o=r.a;return am(Y(o,f([e])));default:var t=r.a,o=r.b;return a(em,t,Y(o,f([e])))}}),tm=s(function(e,r){if(r.b)if(r.b.b){var c=r.a,i=r.b;return a(M,c,a(tm,e,i))}else{var n=r.a,t=n.a,o=n.b;return f([y(t,a(nm,e,o))])}else return S}),Ak=s(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c;return v(Zc,o,a(tm,e,c),t)}else{var n=r.a,t=r.c;return v(Zc,a(nm,e,n),S,t)}}),Fk=s(function(e,r){return a(Q3,Ak(e),r)}),ss=function(e){e:for(;;)if(e.b)if(e.a.$){var o=e.b,c=o;e=c;continue e}else{var r=e.a.a,n=r.a,t=r.b,o=e.b;return Y(a(M,n,t),ss(o))}else return S},ds=Le(function(e,r,n,t,o){return{$:3,a:e,b:r,c:n,d:t,e:o}}),S$=s(function(e,r){e:for(;;)if(r.b){if(r.b.b)break e;switch(r.a.$){case 0:var T=r.a.a;return a(W,yu,e(T));case 1:if(r.a.b.b)if(r.a.b.b.b){var c=r.a,t=c.a,i=c.b,U=i.a,I=i.b,u=a(S$,e,f([a(Oo,t,I)]));if(u.b&&u.a.$===1&&!u.b.b){var $=u.a,l=$.a,d=$.b;return f([a(Oo,l,a(M,U,d))])}else{var b=u;return b}}else{var n=r.a,t=n.a,o=n.b,T=o.a;return f([a(Oo,t,e(T))])}else break e;case 2:var g=r.a,C=g.a,p=g.b;return f([a($s,C,a(S$,e,p))]);case 3:var m=r.a,P=m.a,_=m.b,j=m.c,L=m.d,T=m.e;return a(W,x(ds,P,_,j,L),e(T));case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}else return r;var U=r.a,I=r.b;return a(M,U,a(S$,e,I))}),Ek=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return E(r)}else return z},om=function(e){e:for(;;)if(e.b)if(e.b.b){var n=e.b,t=n;e=t;continue e}else{var r=e.a;return E(f([r]))}else return z},Hk=function(e){e:for(;;)if(e.b){var r=e.a,n=e.b;if(r.$===1){var t=n;e=t;continue e}else return r}else return z},Vk=function(e){return{$:9,a:e}},cm=function(e){var r=function(t){if(t.b){var o=t.a,c=t.b;return a(M,o,r(c))}else return S},n=r(e);return f([Vk(n)])},Bk=s(function(e,r){if(r.$)return r;var n=r.a;return a(Oo,e,f([n]))}),Uk=function(e){if(e.b){var r=e.a,n=e.b;return E(n)}else return z},im=Le(function(e,r,n,t,o){if(o.$)return o;var c=o.a;return R(ds,e,r,n,t,c)}),um=s(function(e,r){switch(r.$){case 0:var d=r.a;return a(Oo,e,f([d]));case 1:var n=r.a,t=r.b;return a(Oo,Y(e,n),t);case 2:var o=r.a,c=r.b;return a($s,o,a(W,um(e),c));case 3:var i=r.a,u=r.b,$=r.c,l=r.d,d=r.e;return R(ds,i,u,$,l,d);case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}),bs=function(e){var r=e;return r},fm=K(function(e,r,n,t){var o=function(l){return a(fe,S,Uk(l))},c=a(et,r,a(fe,S,om(t))),i=(function(){var l=y(Mr(c),Ek(t));if(!l.a.$&&!l.b.$){var d=l.a.a,b=l.b.a;return Y(a(ao,Dr(t)-1,t),f([oe(b,d)?b:d]))}else return t})(),u=function(l){return wn(a(ls,et(e),a(W,Gi,a(S$,n,l))))},$=a(fe,S,a(he,u,om(t)));return Y(i,Y(o($),o(c)))}),et=s(function(e,r){if(e.b)switch(e.a.$){case 0:var n=e.a.a,U=e.b;return a(et,U,a(vs,n,r));case 1:var t=e.a,o=t.a,j=t.b,U=e.b;return x(fm,j,U,Fk(o),r);case 2:var c=e.a,i=c.a,u=c.b,U=e.b,$=s(function(I,q){var Q=I.a,Z=I.b,ue=I.c,ye=q.a,Me=q.b,Ve=q.c;return v(Zc,Q,Y(Z,a(M,y(i,ye),Me)),Hk(f([Ve,ue])))}),l=function(I){switch(I.$){case 0:var q=I.a,Q=q.a,Z=q.b,ue=q.c,ye=a(fn,function(Ha){return a(W,$(Ha),a(M,Q,Z))},ss(r)),Me=(function(){if(ye.b){var Ha=ye.a,Na=ye.b;return f([yu(v(lo,Ha,Na,S))])}else return S})();return a(et,ue,Me);case 1:var Ve=I.a,Xe=I.b;return a($m,Ve,Xe);case 2:var ee=I.a,Re=I.b;return a(lm,ee,Re);case 3:var Ke=I.a,Ne=I.b,yr=I.c,qe=I.d,cr=I.e;return a(W,x(im,Ke,Ne,yr,qe),x$(cr));case 4:var pr=I.a;return f([X3(pr)]);case 5:var pr=I.a;return f([Z3(pr)]);case 6:var pr=I.a;return f([K3(pr)]);case 7:var pr=I.a;return f([J3(pr)]);default:var Nr=I.a;return cm(Nr)}};return wn(Y(f([a(et,U,r)]),a(W,l,a(fn,bs,u))));case 3:var d=e.a,b=d.a,j=d.b,U=e.b;return x(fm,j,U,zk(b),r);case 5:var g=e.a.a,U=e.b,C=Jb(g),p="animation-name:"+C,m=a(et,U,a(vs,p,r));return a(cv,m,f([q3({qR:g,sX:C})]));case 4:var P=e.a,_=P.a,j=P.b,U=e.b,L=(function(){var I=ss(r);if(I.b){var q=I.a,Q=I.b;return a(W,Bk(_),a(et,j,Gi(yu(v(lo,q,Q,S)))))}else return S})();return Y(a(et,U,r),L);default:var T=e.a.a,U=e.b;return a(et,Y(T,U),r)}else return r}),x$=function(e){var r=e.a,n=e.b,t=e.c;return a(et,t,f([yu(v(lo,r,n,S))]))},ps=function(e){if(e.b){var r=e.a,n=e.b;return Y(Rk(r),ps(n))}else return S},$m=s(function(e,r){var n=function(t){return a(W,um(e),x$(t))};return a(fn,n,r)}),lm=s(function(e,r){var n=ps(a(fn,bs,r));return f([a($s,e,n)])}),Rk=function(e){switch(e.$){case 0:var l=e.a;return x$(l);case 1:var r=e.a,n=e.b;return a($m,r,n);case 2:var t=e.a,o=e.b;return a(lm,t,o);case 3:var c=e.a,i=e.b,u=e.c,$=e.d,l=e.e;return a(W,x(im,c,i,u,$),x$(l));case 4:var d=e.a;return f([X3(d)]);case 5:var d=e.a;return f([Z3(d)]);case 6:var d=e.a;return f([K3(d)]);case 7:var d=e.a;return f([J3(d)]);default:var b=e.a;return cm(b)}},Ik=function(e){var r=e.oQ,n=e.nU,t=e.mR,o=e.l3,c=ps(a(fn,bs,r));return{l3:o,qS:c,mR:t,nU:n}},vm=function(e){return Tk(mk(Ik(e)))},sm=function(e){return{l3:z,mR:S,nU:S,oQ:e}},dm=Mf,qk=function(e){return dm(v(wo,"span",f([a(kn,"style","display: none;"),a(kn,"class","elm-css-style-wrapper")]),Gi(v(wo,"style",S,Gi(zf(vm(sm(e))))))))},LG=0,Ok={aR:0,u2:"grabbing"},DG=te,bm=D(function(e,r,n){return{$:0,a:e,b:r,c:n}}),pm=function(e){return{$:0,a:e}},mm=s(function(e,r){var n=v(Zc,r,S,z);return f([pm(v(bm,n,S,e))])}),j$=s(function(e,r){return a(mm,r,a(em,e,S))}),hm=function(e){var r=sk(e);return r.$?$e(""):qk(f([a(j$,"body *",f([ia(Ok)]))]))},Tn={tF:0,u2:"absolute"},Xc={jH:0,ge:0,u2:"row"},ha=H(Xc,{u2:"column"}),Gk=function(e){return{$:0,a:e}},Wk=am(f([Gk(tv)])),gm=function(e){if(e.b){var r=e;return vm(sm(f([a(mm,e,Wk)])))}else return""},Nk=function(e){var r=gm(e),n=a(kn,"","");return v(_t,n,!0,r)},O=Nk,Se=a(F,"display","flex"),Ur=be("flex-direction"),TG=0,se=function(e){return{dH:0,hZ:0,dP:0,cU:0,s8:0,ii:0,dk:e,fH:"",g3:0,u2:rr(e)}},Pt={a7:0,pY:1300,r3:1100,sP:1400,ob:100,pd:1500,c_:1200},ir=be("position"),MG=0,Pu=D(function(e,r,n){return{lw:0,l_:0,eO:0,gf:0,e7:0,e8:0,dg:0,e9:0,fa:0,dO:0,dP:0,cU:0,fb:0,dk:n,fC:0,fH:r,g3:e,u2:Y(J(n),r)}}),w=a(Pu,0,"px"),St=be("right"),Ma=be("top"),zG=0,AG=1,Cm=function(e){return e?"true":"false"},je=function(e){return a(F,"background-color",e.u2)},_m=function(e){return{$:6,a:e}},Ie=_m,k$=K(function(e,r,n,t){return a(F,e,r.u2+(" "+(n.u2+(" "+t.u2))))}),xt=k$("border"),tr=be("border-radius"),Jk=Fr(function(e,r,n,t,o,c){return a(F,e,r.u2+(" "+(n.u2+(" "+(t.u2+(" "+(o.u2+(" "+c.u2))))))))}),Su=Jk("box-shadow"),FG=0,Ze=function(e){return{dP:0,cU:0,fb:0,s8:0,ii:0,dk:e,fH:"",g3:0,u2:J(e)}},Ua=be("opacity"),ln=be("padding"),ga={qC:s(function(e,r){return w(e+r)}),st:w(12),sD:w(8),tv:w(9999),oP:w(4),vi:w(20)},za={bw:0,d7:0,u2:"solid"},Kc=s(function(e,r){return e+("("+(a(Lr,",",r)+")"))}),Zk=function(e){return e*180/Hr},Xk=s(function(e,r){var n=Kt(e);return a(ja,r,n)+e-n}),Kk=D(function(e,r,n){var t=e/Ii(60),o=(1-Te(2*n-1))*r,c=n-o/2,i=o*(1-Te(a(Xk,t,2)-1)),u=t<0?V(0,0,0):t<1?V(o,i,0):t<2?V(i,o,0):t<3?V(0,o,i):t<4?V(0,i,o):t<5?V(i,0,o):t<6?V(o,0,i):V(0,0,0),$=u.a,l=u.b,d=u.c;return V($+c,l+c,d+c)}),Yk=Le(function(e,r,n,t,o){var c=v(Kk,Zk(r),n,t),i=c.a,u=c.b,$=c.c;return{aQ:o,p5:Kt($),f$:0,rS:Kt(u),tN:Kt(i),u2:e}}),ym=function(e){return J(e*100)+"%"},Qk=K(function(e,r,n,t){var o=f([J(e),ym(r),ym(n),J(t)]),c=a(Kc,"hsla",o);return R(Yk,c,e,r,n,t)}),ur=function(e){return x(Qk,e.aT*360,e.a1,e.C,e.aQ)},le={e7:0,e8:0,dg:0,e9:0,fa:0,dO:0,dP:0,s8:0,dk:0,iq:0,fH:"",g3:0,u2:"0"},Pm=D(function(e,r,n){var t=e.q1,o=e.dY,c=ur(a(mr,.08,jo)),i=ur(a(mr,.25,xo)),u=ur(a(mr,.18,jo));return a(X,Y(r,f([O(f([Se,(function(){return Ur(o===1?ha:Xc)})(),a(F,"gap","3px"),ln(w(3)),tr(a(ga.qC,36/2,3)),je(c),v(xt,w(1),za,u),a(F,"backdrop-filter","blur(14px) saturate(160%)"),a(F,"-webkit-backdrop-filter","blur(14px) saturate(160%)"),R(Su,le,w(6),w(18),w(-6),i),a(F,"pointer-events","auto"),t?Ua(Ze(.4)):Ie(S)]))])),n)}),ew=s(function(e,r){return{$:1,a:e,b:r}}),rw=function(e){return{$:2,a:e}},w$=function(e){return ew(rw(e))},xu=w$("active"),Go=s(function(e,r){return I3(e+(":"+r))}),L$=D(function(e,r,n){e:for(;;)switch(n.$){case 0:var t=n.a,o=a(fe,"",Mr(a(gn,":",t)));return a(Go,r,o);case 1:var c=n.a;return a(Go,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-selector"));case 2:var i=n.a;return a(Go,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-combinator"));case 3:var u=n.a;return a(Go,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-pseudo-element setter"));case 4:return a(Go,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-media-query"));case 5:return a(Go,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-keyframes"));default:if(n.a.b)if(n.a.b.b){var C=n.a,p=C.a,m=C.b,d=e,b=r,g=_m(m);e=d,r=b,n=g;continue e}else{var $=n.a,l=$.a,d=e,b=r,g=l;e=d,r=b,n=g;continue e}else return a(Go,r,"elm-css-error-cannot-apply-"+(e+"-with-empty-Style"))}}),EG=0,D$=v(Pu,0,"",0),Qe=function(e){return v(L$,"alignItems","align-items",e(D$))},Pr=s(function(e,r){return v(_t,a(kn,e,r),!1,"")}),We=Pr,HG=1,VG=te,T$=K(function(e,r,n,t){return{he:e,hB:E(n),cM:r,iW:E(t)}}),ms=T$(1),aw=be("border-style"),BG=25,Sm=T$(25),jt=jn("button"),we=be("center"),ve=function(e){return a(F,"color",e.u2)},UG=29,nw=T$(29),M$=be("border-bottom-left-radius"),z$=be("border-bottom-right-radius"),A$=be("border-top-left-radius"),F$=be("border-top-right-radius"),RG=0,er=a(Pu,0,"%"),tw=s(function(e,r){var n=w(4),t=w(18);switch(r){case 0:return f([tr(er(50))]);case 2:return f([tr(n)]);case 1:return f(e===1?[A$(t),F$(t),M$(n),z$(n)]:[A$(t),M$(t),F$(n),z$(n)]);default:return f(e===1?[A$(n),F$(n),M$(t),z$(t)]:[A$(n),M$(n),F$(t),z$(t)])}}),xm=s(function(e,r){return a(R3,e,Gv(r))}),ju=xm("disabled"),ow={$:3},E$=ow,re=s(function(e,r){return ur(e(bt(r)))}),ze=be("height"),Mn=w$("hover"),hs={bw:0,u2:"inset"},qr=function(e){return v(L$,"justifyContent","justify-content",e(D$))},lr={ej:0,lO:0,bw:0,aR:0,q2:0,r1:0,mV:0,jW:0,fa:0,dO:0,cU:0,r:0,p:0,kh:0,iq:0,tB:0,cr:0,iA:0,t6:0,fB:0,d8:0,bT:0,lk:0,uZ:0,u2:"none"},gs=s(function(e,r){return v(_t,a(y$,e,r),!1,"")}),ua=s(function(e,r){return a(gs,e,z3(r))}),kt=function(e){return a(ua,"click",ae(e))},vn=be("outline"),sn={aR:0,u2:"pointer"},Wo={tF:0,u2:"relative"},IG=89,jm=T$(89),cw=function(e){return Ye(e)?{u2:"none"}:{u2:v(ma,function(r){return r.u2}," ",e)}},H$=a(nr,be("transform"),cw),iw=function(e){switch(e){case 0:return"background";case 1:return"background-color";case 2:return"background-position";case 3:return"background-size";case 4:return"border";case 5:return"border-bottom";case 6:return"border-bottom-color";case 7:return"border-bottom-left-radius";case 8:return"border-bottom-right-radius";case 9:return"border-bottom-width";case 10:return"border-color";case 11:return"border-left";case 12:return"border-left-color";case 13:return"border-left-width";case 14:return"border-radius";case 15:return"border-right";case 16:return"border-right-color";case 17:return"border-right-width";case 18:return"border-top";case 19:return"border-top-color";case 20:return"border-top-left-radius";case 21:return"border-top-right-radius";case 22:return"border-top-width";case 23:return"border-width";case 24:return"bottom";case 25:return"box-shadow";case 26:return"caret-color";case 27:return"clip";case 28:return"clip-path";case 29:return"color";case 30:return"column-count";case 31:return"column-gap";case 32:return"column-rule";case 33:return"column-rule-color";case 34:return"column-rule-width";case 35:return"column-width";case 36:return"columns";case 37:return"filter";case 38:return"flex";case 39:return"flex-basis";case 40:return"flex-grow";case 41:return"flex-shrink";case 42:return"font";case 43:return"font-size";case 44:return"font-size-adjust";case 45:return"font-stretch";case 46:return"font-variation-settings";case 47:return"font-weight";case 48:return"grid-column-gap";case 49:return"grid-gap";case 50:return"grid-row-gap";case 51:return"height";case 52:return"left";case 53:return"letter-spacing";case 54:return"line-height";case 55:return"margin";case 56:return"margin-bottom";case 57:return"margin-left";case 58:return"margin-right";case 59:return"margin-top";case 60:return"mask";case 61:return"mask-position";case 62:return"mask-size";case 63:return"max-height";case 64:return"max-width";case 65:return"min-height";case 66:return"min-width";case 67:return"object-position";case 68:return"offset";case 69:return"offset-anchor";case 70:return"offset-distance";case 71:return"offset-path";case 72:return"offset-rotate";case 73:return"opacity";case 74:return"order";case 75:return"outline";case 76:return"outline-color";case 77:return"outline-offset";case 78:return"outline-width";case 79:return"padding";case 80:return"padding-bottom";case 81:return"padding-left";case 82:return"padding-right";case 83:return"padding-top";case 84:return"right";case 85:return"tab-size";case 86:return"text-indent";case 87:return"text-shadow";case 88:return"top";case 89:return"transform";case 90:return"transform-origin";case 91:return"vertical-align";case 92:return"visibility";case 93:return"width";case 94:return"word-spacing";default:return"z-index"}},km=function(e){return J(e)+"ms"},uw=function(e){switch(e.$){case 0:return"ease";case 1:return"linear";case 2:return"ease-in";case 3:return"ease-out";case 4:return"ease-in-out";case 5:return"step-start";case 6:return"step-end";default:var r=e.a,n=e.b,t=e.c,o=e.d;return"cubic-bezier("+(J(r)+(" , "+(J(n)+(" , "+(J(t)+(" , "+(J(o)+")")))))))}},V$=function(e){var r=v(tn,0,-1,v(me,s(function(n,t){var o=n.iW,c=n.hB,i=n.cM,u=n.he;return t+(iw(u)+(" "+(km(i)+(" "+(a(fe,"",a(he,km,c))+(" "+(a(fe,"",a(he,uw,o))+",")))))))}),"",e));return a(F,"transition",r)},wm=s(function(e,r){return{lk:0,u2:a(Kc,"translate",f([e.u2,r.u2]))}}),xe=be("width"),Lm=s(function(e,r){var n=Gf(e),t=ur(a(mr,n?.18:.64,xo)),o=ur(a(mr,n?.12:.48,xo)),c=ur(n?a(mr,.06,xo):a(mr,.1,jo)),i=r.ja,u=i.a,$=i.b;return a(jt,Y(f([kt(r.gA),ju(r.q1),a(We,"role",r.i9),a(We,u,$),a(We,"aria-label",r.jX),O(Y(f([ir(Wo),xe(w(36)),ze(w(36)),aw(lr),ln(le),r.q1?a(F,"cursor","default"):ia(sn),a(F,"background","transparent"),vn(lr),ve(r.m6?a(re,r.kk,e):a(re,function(l){return l.lh},e)),V$(f([v(Sm,70,0,E$),v(ms,70,0,E$),v(nw,70,0,E$)])),r.m6?Ie(f([R(Su,hs,le,w(4),le,o),je(o)])):r.q1?Ie(S):Ie(f([Mn(f([je(c),R(Su,hs,le,w(1),le,c)]))])),r.q1?Ie(S):xu(f([R(Su,hs,le,w(6),le,t),je(t)]))]),a(tw,r.dY,r.tF)))]),r.du),f([a(X,f([O(f([xe(er(100)),ze(er(100)),Se,Qe(we),qr(we),r.m6?H$(f([a(wm,le,w(1))])):Ie(S),r.q1?Ie(S):xu(f([H$(f([a(wm,le,w(1.5))]))])),V$(f([v(jm,70,0,E$)]))]))]),f([a(X,f([O(f([xe(w(24)),ze(w(24))]))]),f([r.mO]))]))]))}),B$=s(function(e,r){return v(Pm,{q1:r.q1,dY:1},S,f([a(Lm,e,{i9:"button",ja:y("aria-pressed",Cm(r.jU)),q1:r.q1,mO:r.mO,m6:r.jU,jX:r.jX,gA:r.gA,kk:r.i2,dY:1,tF:0,du:r.du})]))}),Yc=s(function(e,r){return a(B$,e,{i2:r.o9,q1:r.q1,mO:r.mO,jU:a(Br,r.bE,r.bG),jX:r.jX,gA:r.v(Bv(r.bE)),du:r.du})}),fw=K(function(e,r,n,t){return a(Yc,e,{q1:!1,mO:t.mO,bE:t.bE,jX:t.pb,bG:r,o9:t.o9,v:n,du:S})}),rt=be("z-index"),$w=s(function(e,r){return a(X,f([O(f([ir(Tn),Ma(w(su)),St(w(su)),Se,Ur(ha),a(F,"gap","6px"),a(F,"pointer-events",r.jP?"none":"auto"),rt(se(Pt.r3)),a(F,"transform",r.jP?"translateX(calc(100% + "+(J(su)+"px))"):"translateX(0)"),a(F,"transition","transform 280ms cubic-bezier(0.2, 0.9, 0.25, 1)")]))]),a(W,v(fw,e,r.ir,r.v),r.cq))}),at=be("bottom"),Xr=be("left"),lw=function(e){return f([(function(){var r=e.pC;switch(r.$){case 0:var n=r.a;return Xr(w(n));case 1:var n=r.a;return St(w(n));default:return Xr(er(50))}})(),(function(){var r=e.pD;if(r.$){var n=r.a;return at(w(n))}else{var n=r.a;return Ma(w(n))}})()])},No={pJ:0,aR:0,eO:0,hZ:0,so:0,e8:0,dg:0,cU:0,fo:0,cr:0,iS:0,fD:0,bT:0,u2:"auto"},wt={fU:0,tF:0,iS:0,u2:"fixed"},vw=function(e){var r="blur("+(J(e)+"px) saturate(180%)");return Ie(f([a(F,"backdrop-filter",r),a(F,"-webkit-backdrop-filter",r)]))},sw={aR:0,u2:"grab"},ku={bw:0,fo:0,u2:"hidden",g5:0},Dm=s(function(e,r){return"draggable-panel-"+(e(r)+"-no-drag")}),Jo=be("overflow"),dw=s(function(e,r){var n=(function(){var t=e.pC;return t.$===2?"calc(-50% + "+(J(r.pC)+"px)"):J(r.pC)+"px"})();return"translate("+(n+(", "+(J(r.pD)+"px)")))}),Lt=be("pointer-events"),bw=D(function(e,r,n){var t=n,o=x(s3,e,r.bv,r.bE,t),c=t.eF;if(c.$)return o;var i=c.a;return oe(i.bE,r.bE)?a($3,e,i):o}),Tm=be("box-shadow"),Mm=Le(function(e,r,n,t,o){return a(F,e,r.u2+(" "+(n.u2+(" "+(t.u2+(" "+o.u2))))))}),pw=Mm("box-shadow"),Cs=K(function(e,r,n,t){return{aQ:t,p5:n,f$:0,rS:r,tN:e,u2:a(Kc,"rgba",Y(a(W,rr,f([e,r,n])),f([J(t)])))}}),_s={rb:Tm(lr),rc:x(pw,le,w(1),w(2),x(Cs,0,0,0,.3)),rd:a(F,"box-shadow","0 2px 4px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2)"),re:a(F,"box-shadow","0 12px 24px -8px rgba(0, 0, 0, 0.55), 0 4px 8px -2px rgba(0, 0, 0, 0.4)"),rf:a(F,"box-shadow","0 28px 60px -20px rgba(0, 0, 0, 0.85), 0 8px 24px -8px rgba(0, 0, 0, 0.55)")},mw=s(function(e,r){return v(_t,a(qb,e,r),!1,"")}),zm=mw,Am=48,hw={aR:0,u2:"default"},Qc=be("flex"),gw=be("overflow-x"),Fm=be("overflow-y"),Cw=D(function(e,r,n){return a(F,e,r.u2+(" "+n.u2))}),$r=Cw("padding"),_w=s(function(e,r){return a(X,f([O(f([Qc(se(1)),Fm(No),gw(No),a($r,w(16),w(16))]))]),f([a(X,f([$o(e),O(f([ia(hw)]))]),f([r]))]))}),yw=function(e){return{$:3,a:e}},Pw={o5:0,u2:"ellipsis"},ys=D(function(e,r,n){return ce(Te(n.C-r.C),e)>-1?n:r.C>.5?H(n,{C:v(dr,0,1,r.C-e)}):H(n,{C:v(dr,0,1,r.C+e)})}),Cr=be("flex-shrink"),vo=be("letter-spacing"),Em={ge:0,hO:0,u2:"nowrap",ee:0},Zo=be("padding-left"),Sw=be("padding-right"),xw=be("text-overflow"),U$=be("text-transform"),qG=0,Dt=a(Pu,0,"em"),vr=be("font-size"),Sr=function(e){var r=e.u2;return a(F,"font-weight",r)},Or=be("line-height"),fa={lP:f([vr(w(15)),Sr(se(400)),Or(Ze(1.55))]),ql:f([vr(w(13)),Sr(se(500)),Or(Ze(1.3)),vo(Dt(.04))]),q2:f([vr(w(46)),Sr(se(300)),Or(Ze(1.05)),vo(Dt(-.02))]),rX:f([vr(w(16)),Sr(se(650)),Or(Ze(1.3))]),rY:f([vr(w(30)),Sr(se(550)),Or(Ze(1.15)),vo(Dt(-.01))]),jX:f([vr(w(14)),Sr(se(550)),Or(Ze(1.35))]),pb:f([vr(w(20)),Sr(se(650)),Or(Ze(1.25)),vo(Dt(-.005))])},R$={d8:0,u2:"uppercase"},ei=be("border"),Hm={f$:0,u2:"currentColor"},so=Pr("clip-rule"),ge=Pr("d"),jw=function(e){var r=gm(e),n=a(kn,"","");return v(_t,n,!0,r)},nt=jw,Tt=Pr("fill"),kw=U3,bo=kw("http://www.w3.org/2000/svg"),Ps=bo("svg"),Ss=Pr("viewBox"),ww=D(function(e,r,n){return v(s7,e,qd(r),Od(n))}),Lw=D(function(e,r,n){return v(_t,v(ww,e,r,n),!1,"")}),Dw=a(Lw,"http://www.w3.org/XML/1998/namespace","xml:space"),Ce=Ps(f([Ss("0 0 24 24"),Tt("currentColor"),nt(f([xe(er(100)),ze(er(100))])),Dw("http://www.w3.org/2000/svg")])),po=Pr("fill-rule"),_e=bo("path"),Vm=Pr("transform"),_r={pG:Ce(f([a(_e,f([ge("M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z")]),S)])),p6:Ce(f([a(_e,f([ge("M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z")]),S)])),qr:Ce(f([a(_e,f([po("evenodd"),so("evenodd"),ge("M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z")]),S)])),qs:Ce(f([a(_e,f([po("evenodd"),so("evenodd"),ge("M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z")]),S)])),qt:Ce(f([a(_e,f([Vm("translate(24, 0) scale(-1, 1)"),po("evenodd"),so("evenodd"),ge("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),S)])),qu:Ce(f([a(_e,f([po("evenodd"),so("evenodd"),ge("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),S)])),qv:Ce(f([a(_e,f([po("evenodd"),so("evenodd"),ge("M5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071Z")]),S)])),qA:Ce(f([a(_e,f([ge("M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z")]),S)])),qB:Ce(f([a(_e,f([ge("M4.00005 16H20V5H4.00005V16ZM13.0001 18V20H17.0001V22H7.00005V20H11.0001V18H2.99205C2.86065 17.9992 2.7307 17.9725 2.60965 17.9214C2.48861 17.8702 2.37885 17.7957 2.28668 17.702C2.19452 17.6084 2.12175 17.4975 2.07256 17.3756C2.02337 17.2538 1.99873 17.1234 2.00005 16.992V4.008C2.00005 3.451 2.45505 3 2.99205 3H21.008C21.556 3 22 3.449 22 4.007V16.992C22 17.549 21.545 18 21.008 18H13.0001Z")]),S)])),qN:Ce(f([a(_e,f([ge("M11.7143 9.78571L17.5 4L19.4286 5.92857L13.6429 11.7143L19.4286 17.5L17.5 19.4286L11.7143 13.6429L5.92857 19.4286L4 17.5L9.78571 11.7143L4 5.92857L5.92857 4L11.7143 9.78571Z")]),S)])),q_:Ce(f([a(_e,f([ge("M4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6Z")]),S)])),q$:Ce(f([a(_e,f([ge("M9 2H15A2 2 0 0 1 17 4V20A2 2 0 0 1 15 22H9A2 2 0 0 1 7 20V4A2 2 0 0 1 9 2Z")]),S)])),q6:Ce(f([a(_e,f([ge("M11 3h2v7h3l-4 4-4-4h3z M4 17h16v3H4z")]),S)])),q7:Ce(f([a(_e,f([ge("M11 2h2v7h3l-4 4-4-4h3z M4 16h16v2H4z M7 19h10v2H7z")]),S)])),ra:Ce(f([a(_e,f([ge("M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z")]),S)])),rn:Ce(f([a(_e,f([ge("M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z")]),S)])),ro:Ce(f([a(_e,f([ge("M8.58564 8.85449L3.63589 13.8042L8.83021 18.9985L9.99985 18.9978V18.9966H11.1714L14.9496 15.2184L8.58564 8.85449ZM9.99985 7.44027L16.3638 13.8042L19.1922 10.9758L12.8283 4.61185L9.99985 7.44027ZM13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966Z")]),S)])),rB:Ce(f([a(_e,f([ge("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z")]),S)])),rL:Ce(f([a(_e,f([ge("M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z")]),S)])),rP:Ce(f([a(_e,f([ge("M20.0601 11.6104C20.0639 11.7454 20.0639 11.8804 20.0601 12.0154L21.4588 13.7629C21.5322 13.8547 21.583 13.9624 21.6071 14.0773C21.6312 14.1923 21.6279 14.3113 21.5976 14.4248C21.3679 15.2866 21.0249 16.1141 20.5776 16.8857C20.519 16.9867 20.4376 17.0726 20.34 17.1365C20.2423 17.2005 20.1311 17.2408 20.0151 17.2542L17.7914 17.5017C17.6989 17.5992 17.6051 17.6929 17.5101 17.7829L17.2476 20.0123C17.2341 20.1283 17.1937 20.2396 17.1295 20.3373C17.0654 20.435 16.9794 20.5163 16.8782 20.5748C16.1067 21.0217 15.2791 21.3641 14.4173 21.5929C14.3038 21.6232 14.1848 21.6265 14.0698 21.6024C13.9549 21.5783 13.8472 21.5275 13.7554 21.4542L12.0126 20.0629H11.6076L9.8601 21.4589C9.76835 21.5322 9.66065 21.583 9.54569 21.6071C9.43073 21.6312 9.31171 21.6279 9.19823 21.5976C8.33643 21.3679 7.5089 21.0249 6.73729 20.5776C6.63634 20.519 6.55046 20.4376 6.4865 20.34C6.42254 20.2423 6.38225 20.1311 6.36885 20.0151L6.12135 17.7876C6.02385 17.6945 5.9301 17.6007 5.8401 17.5064L3.61073 17.2504C3.49468 17.2369 3.38338 17.1965 3.28572 17.1324C3.18806 17.0682 3.10674 16.9822 3.04823 16.881C2.60136 16.1093 2.2587 15.2818 2.02916 14.4201C1.99897 14.3065 1.99589 14.1875 2.02015 14.0725C2.04441 13.9576 2.09535 13.8499 2.16885 13.7582L3.5601 12.0154V11.6104L2.16416 9.86292C2.09082 9.77116 2.04006 9.66347 2.01596 9.5485C1.99186 9.43354 1.9951 9.31452 2.02541 9.20104C2.25513 8.33924 2.59812 7.51172 3.04541 6.7401C3.10403 6.63915 3.18541 6.55328 3.28306 6.48931C3.38071 6.42535 3.49195 6.38507 3.60791 6.37167L5.83166 6.12417C5.92479 6.02667 6.01854 5.93292 6.11291 5.84292L6.3726 3.61354C6.3861 3.49749 6.42653 3.3862 6.49066 3.28854C6.55479 3.19088 6.64085 3.10955 6.74198 3.05104C7.51369 2.60418 8.3412 2.26151 9.20291 2.03198C9.31647 2.00179 9.43553 1.9987 9.55049 2.02296C9.66546 2.04723 9.77312 2.09816 9.86479 2.17167L11.6076 3.56292C11.7426 3.55917 11.8776 3.55917 12.0126 3.56292L13.7601 2.16417C13.8519 2.09082 13.9595 2.04006 14.0745 2.01596C14.1895 1.99186 14.3085 1.9951 14.422 2.02542C15.2839 2.25472 16.1115 2.59773 16.8829 3.04542C16.9839 3.10403 17.0697 3.18541 17.1337 3.28306C17.1977 3.38072 17.2379 3.49195 17.2513 3.60792L17.4988 5.83167C17.5963 5.92417 17.6901 6.01792 17.7801 6.11292L20.0095 6.37542C20.1255 6.38892 20.2368 6.42934 20.3345 6.49347C20.4321 6.5576 20.5135 6.64366 20.572 6.74479C21.0188 7.51651 21.3615 8.34402 21.591 9.20573C21.6212 9.31928 21.6243 9.43834 21.6001 9.55331C21.5758 9.66828 21.5249 9.77593 21.4513 9.8676L20.0601 11.6104ZM11.8101 8.06292C11.0684 8.06292 10.3434 8.28285 9.72671 8.6949C9.11003 9.10696 8.62938 9.69263 8.34555 10.3779C8.06172 11.0631 7.98746 11.8171 8.13216 12.5445C8.27685 13.2719 8.634 13.9401 9.15845 14.4646C9.6829 14.989 10.3511 15.3462 11.0785 15.4909C11.8059 15.6356 12.5599 15.5613 13.2452 15.2775C13.9304 14.9936 14.5161 14.513 14.9281 13.8963C15.3402 13.2796 15.5601 12.5546 15.5601 11.8129C15.5601 10.8184 15.165 9.86453 14.4618 9.16127C13.7585 8.458 12.8047 8.06292 11.8101 8.06292Z")]),S)])),rQ:Ce(f([a(_e,f([ge("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),S)])),rZ:Ce(f([a(_e,f([ge("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),S)])),r_:Ce(f([a(_e,f([ge("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z")]),S)])),r0:Ce(f([a(_e,f([ge("M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z")]),S)])),sq:Ce(f([a(_e,f([ge("M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10H18C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7957 12 18 12H16C15.2043 12 14.4413 11.6839 13.8787 11.1213C13.3161 10.5587 13 9.79565 13 9V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H16ZM13.8787 14.8787C14.4413 14.3161 15.2043 14 16 14H18C18.7957 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2043 21 17V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V17C13 16.2043 13.3161 15.4413 13.8787 14.8787Z")]),S)])),su:Ce(f([a(_e,f([ge("M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z")]),S)])),sE:Ce(f([a(_e,f([ge("M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z")]),S)])),sS:Ce(f([a(_e,f([ge("M12 22C17.523 22 22 17.523 22 12C22 11.537 21.306 11.46 21.067 11.857C20.5572 12.7013 19.862 13.4186 19.034 13.9545C18.206 14.4903 17.2669 14.8307 16.2878 14.9499C15.3088 15.0691 14.3154 14.9639 13.383 14.6423C12.4507 14.3207 11.6037 13.7911 10.9063 13.0937C10.2089 12.3963 9.67932 11.5493 9.35772 10.617C9.03613 9.68457 8.93093 8.69123 9.0501 7.71217C9.16926 6.73311 9.50967 5.794 10.0455 4.96599C10.5814 4.13797 11.2987 3.44275 12.143 2.933C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z")]),S)])),kx:Ce(f([a(_e,f([ge("M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z")]),S)])),tr:Ce(f([a(_e,f([ge("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),S)])),ts:Ce(f([a(_e,f([ge("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),S)])),ty:Ce(f([a(_e,f([ge("M7 5V19L18 12L7 5Z")]),S)])),tz:Ce(f([a(_e,f([ge("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),S)])),tA:Ce(f([a(_e,f([ge("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),S)])),tM:Ce(f([a(_e,f([ge("M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z")]),S)])),tO:Ce(f([a(_e,f([ge("M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34001 8 3.76001 10.42 2.06001 13.93C1.74001 14.6 2.10001 15.4 2.81001 15.64C3.40001 15.84 4.04001 15.56 4.31001 15C5.61001 12.34 8.34001 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z")]),S)])),tU:Ce(f([a(_e,f([ge("M7.20679 2.29279C7.39426 2.48031 7.49957 2.73462 7.49957 2.99979C7.49957 3.26495 7.39426 3.51926 7.20679 3.70679L5.41379 5.49979H13.2498C14.832 5.49979 16.3788 5.96898 17.6943 6.84803C19.0099 7.72708 20.0353 8.97651 20.6408 10.4383C21.2463 11.9001 21.4048 13.5087 21.0961 15.0605C20.7874 16.6124 20.0255 18.0378 18.9066 19.1566C17.7878 20.2755 16.3624 21.0374 14.8105 21.3461C13.2587 21.6548 11.6501 21.4963 10.1883 20.8908C8.72651 20.2853 7.47708 19.2599 6.59803 17.9443C5.71898 16.6288 5.24979 15.082 5.24979 13.4998C5.24979 13.2346 5.35514 12.9802 5.54268 12.7927C5.73022 12.6051 5.98457 12.4998 6.24979 12.4998C6.515 12.4998 6.76936 12.6051 6.95689 12.7927C7.14443 12.9802 7.24979 13.2346 7.24979 13.4998C7.24979 14.6865 7.60168 15.8465 8.26097 16.8332C8.92026 17.8199 9.85733 18.5889 10.9537 19.0431C12.05 19.4972 13.2564 19.616 14.4203 19.3845C15.5842 19.153 16.6533 18.5815 17.4924 17.7424C18.3315 16.9033 18.903 15.8342 19.1345 14.6703C19.366 13.5064 19.2472 12.3 18.7931 11.2037C18.3389 10.1073 17.5699 9.17026 16.5832 8.51097C15.5965 7.85168 14.4365 7.49979 13.2498 7.49979H5.41379L7.20679 9.29279C7.38894 9.48139 7.48974 9.73399 7.48746 9.99619C7.48518 10.2584 7.38001 10.5092 7.1946 10.6946C7.0092 10.88 6.75838 10.9852 6.49619 10.9875C6.23399 10.9897 5.98139 10.8889 5.79279 10.7068L2.29279 7.20679C2.10532 7.01926 2 6.76495 2 6.49979C2 6.23462 2.10532 5.98031 2.29279 5.79279L5.79279 2.29279C5.98031 2.10532 6.23462 2 6.49979 2C6.76495 2 7.01926 2.10532 7.20679 2.29279Z")]),S)])),tX:Ce(f([a(_e,f([ge("M11.308 2.057C11.867 1.5079 12.7733 1.5079 13.3323 2.057L22.441 11.0058C23 11.5549 23 12.4451 22.441 12.9942L13.3323 21.943C12.7733 22.4921 11.867 22.4921 11.308 21.943C10.7491 21.3938 10.7491 20.5035 11.308 19.9543L17.9734 13.4061H2.4313C1.6408 13.4061 1 12.7766 1 12C1 11.2234 1.6408 10.5938 2.4313 10.5938H17.9734L11.308 4.0456C10.7491 3.4965 10.7491 2.6061 11.308 2.057Z")]),S)])),t2:Ce(f([a(_e,f([ge("M21 7V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H17L21 7ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z")]),S)])),ud:Ce(f([a(_e,f([ge("M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z")]),S)])),uh:Ce(f([a(_e,f([ge("M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z")]),S)])),uk:Ce(f([a(_e,f([ge("M8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z")]),S)])),uq:Ce(f([a(_e,f([po("evenodd"),so("evenodd"),ge("M8 3H16A5 5 0 0 1 21 8V16A5 5 0 0 1 16 21H8A5 5 0 0 1 3 16V8A5 5 0 0 1 8 3ZM9 6H15A3 3 0 0 1 18 9V15A3 3 0 0 1 15 18H9A3 3 0 0 1 6 15V9A3 3 0 0 1 9 6ZM9.5 12A2.5 2.5 0 1 0 14.5 12A2.5 2.5 0 1 0 9.5 12Z")]),S)])),ut:Ce(f([a(_e,f([ge("M6 6H18V18H6Z")]),S)])),uy:Ce(f([a(_e,f([ge("M11.9989 19C12.2641 19 12.5185 19.1054 12.706 19.2929C12.8935 19.4804 12.9989 19.7348 12.9989 20V21C12.9989 21.2652 12.8935 21.5196 12.706 21.7071C12.5185 21.8946 12.2641 22 11.9989 22C11.7337 22 11.4793 21.8946 11.2918 21.7071C11.1042 21.5196 10.9989 21.2652 10.9989 21V20C10.9989 19.7348 11.1042 19.4804 11.2918 19.2929C11.4793 19.1054 11.7337 19 11.9989 19ZM18.3629 16.95L19.0699 17.657C19.252 17.8456 19.3528 18.0982 19.3506 18.3604C19.3483 18.6226 19.2431 18.8734 19.0577 19.0588C18.8723 19.2442 18.6215 19.3494 18.3593 19.3517C18.0971 19.354 17.8445 19.2532 17.6559 19.071L16.9489 18.364C16.7667 18.1754 16.6659 17.9228 16.6682 17.6606C16.6705 17.3984 16.7757 17.1476 16.9611 16.9622C17.1465 16.7768 17.3973 16.6716 17.6595 16.6693C17.9217 16.667 18.1743 16.7678 18.3629 16.95ZM5.63489 16.95C5.81485 16.7707 6.05633 16.6665 6.31028 16.6588C6.56423 16.651 6.81161 16.7402 7.00217 16.9082C7.19274 17.0763 7.3122 17.3106 7.33629 17.5635C7.36038 17.8164 7.2873 18.069 7.13189 18.27L7.04889 18.364L6.34189 19.071C6.16193 19.2503 5.92046 19.3545 5.66651 19.3622C5.41256 19.37 5.16518 19.2808 4.97461 19.1128C4.78405 18.9447 4.66459 18.7104 4.64049 18.4575C4.6164 18.2046 4.68948 17.952 4.84489 17.751L4.92789 17.657L5.63489 16.95ZM11.9989 6C13.5902 6 15.1163 6.63214 16.2415 7.75736C17.3668 8.88258 17.9989 10.4087 17.9989 12C17.9989 13.5913 17.3668 15.1174 16.2415 16.2426C15.1163 17.3679 13.5902 18 11.9989 18C10.4076 18 8.88147 17.3679 7.75625 16.2426C6.63103 15.1174 5.99889 13.5913 5.99889 12C5.99889 10.4087 6.63103 8.88258 7.75625 7.75736C8.88147 6.63214 10.4076 6 11.9989 6ZM3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889ZM20.9989 11C21.2641 11 21.5185 11.1054 21.706 11.2929C21.8935 11.4804 21.9989 11.7348 21.9989 12C21.9989 12.2652 21.8935 12.5196 21.706 12.7071C21.5185 12.8946 21.2641 13 20.9989 13H19.9989C19.7337 13 19.4793 12.8946 19.2918 12.7071C19.1042 12.5196 18.9989 12.2652 18.9989 12C18.9989 11.7348 19.1042 11.4804 19.2918 11.2929C19.4793 11.1054 19.7337 11 19.9989 11H20.9989ZM4.92789 4.929C5.10008 4.75682 5.32918 4.65339 5.57221 4.63811C5.81524 4.62283 6.05549 4.69675 6.24789 4.846L6.34189 4.929L7.04889 5.636C7.22824 5.81596 7.33237 6.05743 7.34012 6.31138C7.34787 6.56533 7.25868 6.81271 7.09064 7.00328C6.92261 7.19384 6.68834 7.31331 6.43542 7.3374C6.18249 7.36149 5.92988 7.28841 5.72889 7.133L5.63489 7.05L4.92789 6.343C4.74042 6.15547 4.63511 5.90116 4.63511 5.636C4.63511 5.37084 4.74042 5.11653 4.92789 4.929ZM19.0699 4.929C19.2574 5.11653 19.3627 5.37084 19.3627 5.636C19.3627 5.90116 19.2574 6.15547 19.0699 6.343L18.3629 7.05C18.2706 7.14551 18.1603 7.22169 18.0383 7.2741C17.9163 7.32651 17.7851 7.3541 17.6523 7.35525C17.5195 7.3564 17.3878 7.3311 17.2649 7.28082C17.142 7.23054 17.0304 7.15629 16.9365 7.0624C16.8426 6.9685 16.7684 6.85685 16.7181 6.73395C16.6678 6.61106 16.6425 6.47938 16.6436 6.3466C16.6448 6.21382 16.6724 6.0826 16.7248 5.9606C16.7772 5.83859 16.8534 5.72825 16.9489 5.636L17.6559 4.929C17.8434 4.74153 18.0977 4.63621 18.3629 4.63621C18.6281 4.63621 18.8824 4.74153 19.0699 4.929ZM11.9989 2C12.2641 2 12.5185 2.10536 12.706 2.29289C12.8935 2.48043 12.9989 2.73478 12.9989 3V4C12.9989 4.26522 12.8935 4.51957 12.706 4.70711C12.5185 4.89464 12.2641 5 11.9989 5C11.7337 5 11.4793 4.89464 11.2918 4.70711C11.1042 4.51957 10.9989 4.26522 10.9989 4V3C10.9989 2.73478 11.1042 2.48043 11.2918 2.29289C11.4793 2.10536 11.7337 2 11.9989 2Z")]),S)])),uF:Ce(f([a(_e,f([po("evenodd"),so("evenodd"),ge("M10.8293 13C10.9398 12.6872 11 12.3506 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15H16C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 12.3506 13.0602 12.6872 13.1707 13H10.8293ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z")]),S)])),uQ:Ce(f([a(_e,f([po("evenodd"),so("evenodd"),ge("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),S)])),uR:Ce(f([a(_e,f([ge("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),S)])),uU:Ce(f([a(_e,f([ge("M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z")]),S)])),u_:Ce(f([a(_e,f([ge("M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z")]),S)])),u8:Ce(f([a(_e,f([ge("M4.47 21H19.53C21.07 21 22.03 19.33 21.26 18L13.73 4.98999C12.96 3.65999 11.04 3.65999 10.27 4.98999L2.74 18C1.97 19.33 2.93 21 4.47 21ZM12 14C11.45 14 11 13.55 11 13V11C11 10.45 11.45 9.99999 12 9.99999C12.55 9.99999 13 10.45 13 11V13C13 13.55 12.55 14 12 14ZM13 18H11V16H13V18Z")]),S)])),vs:Ce(f([a(_e,f([ge("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),S)])),vw:Ce(f([a(_e,f([ge("M9.31445 17.5469L8.43555 18.4355L12 22L15.5645 18.4355L14.6855 17.5469L12 20.2324L9.31445 17.5469ZM14.6855 6.45312L15.5645 5.56445L12 2L8.43555 5.56445L9.31445 6.45312L12 3.76758L14.6855 6.45312ZM6.45312 14.6855L3.76758 12L6.45312 9.31445L5.56445 8.43555L2 12L5.56445 15.5645L6.45312 14.6855ZM22 12L18.4355 8.43555L17.5469 9.31445L20.2324 12L17.5469 14.6855L18.4355 15.5645L22 12ZM8.25 15.75H15.75V8.25H8.25V15.75ZM9.5 9.5H14.5V14.5H9.5V9.5Z")]),S)]))},ri={f$:0,u2:"transparent"},Tw=s(function(e,r){return a(jt,f([$o(r),kt(e.v(Ip(e.bE))),a(We,"aria-label","Close"),O(f([xe(w(32)),ze(w(32)),ln(w(5)),tr(er(50)),ei(le),je(ri),ve(Hm),ia(sn),Se,Qe(we),qr(we),vn(lr),Ua(Ze(.9)),a(F,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Mn(f([Ua(Ze(1)),je(x(Cs,255,255,255,.18))]))]))]),f([_r.qN]))}),Mw=bo("circle"),zw=Pr("cx"),Aw=Pr("cy"),Fw=Pr("r"),Ew=a(Ps,f([Ss("0 0 24 24"),Tt("currentColor"),nt(f([xe(w(18)),ze(w(18))]))]),a(W,function(e){var r=e.a,n=e.b;return a(Mw,f([zw(rr(r)),Aw(rr(n)),Fw("2")]),S)},f([y(9,5),y(15,5),y(9,12),y(15,12),y(9,19),y(15,19)]))),xs=be("white-space"),Hw=D(function(e,r,n){var t=a(re,function(o){return v(ys,.45,o.D,r.o9(o))},e);return a(X,f([O(f([Se,Qe(we),Cr(se(0)),ze(w(Am)),Zo(w(16)),Sw(w(8)),a(F,"gap","12px"),ve(t)])),a(ua,"dblclick",ae(r.v(yw(r.bE))))]),f([Ew,a(X,f([O(f([Qc(se(1)),xs(Em),Jo(ku),xw(Pw),ve(t),Ie(fa.rX),vo(w(.6)),U$(R$)]))]),f([$e(r.pb)])),a(Tw,r,n)]))}),mo=D(function(e,r,n){if(a(Br,n.bE,n.bG)){var t=a(re,a(Ge,n.o9,mr(.18)),e),o=a(re,a(Ge,n.o9,mr(.35)),e),c=v(bw,r,n,n.bG),i=(function(){var C=(function(){var p=n.bv.pD;if(p.$){var m=p.a;return m}else{var m=p.a;return m}})();return"calc(100vh - "+(J(C+g$)+"px)")})(),u=n.bG,$=u,l=a(Dm,$.r5,n.bE)+"-body",d=a(Dm,$.r5,n.bE),b=$.r5(n.bE),g="draggable-panel-"+(b+"-titlebar");return a(X,f([O(f([je(t),vw(16),tr(a(ga.qC,Am/2,1)),v(xt,w(1),za,o),_s.re,ir(wt),Ie(lw(n.bv)),a(F,"width","-webkit-fit-content"),a(F,"width","fit-content"),a(F,"max-width","calc(100vw - "+(J(2*g$)+"px)")),a(F,"max-height",i),Se,Ur(ha),Jo(ku),rt(se(Pt.ob+a(Oe,999,n.a4-1-n.d2))),Lt(No),a(F,"will-change","transform"),a(F,"user-select","none"),a(F,"-webkit-user-select","none"),ia(sw)])),$o(g),a(zm,"transform",a(dw,n.bv,c))]),f([v(Hw,e,n,d),a(_w,l,n.lP)]))}else return $e("")}),Vw=Le(function(e,r,n,t,o){return n.jP?$e(""):v(mo,e,r,{bv:b3(t.l$),lP:o.lP,bE:o.bE,bG:n.ir,a4:t.a4,d2:t.d2,o9:o.o9,pb:o.pb,v:n.v})}),Bw=D(function(e,r,n){if(Ye(n.cq))return $e("");var t=iv(n.ir),o=Dr(t),c=xn(a(_n,s(function(u,$){return y($.bE,u)}),n.cq)),i=xn(a(W,function(u){return y(u.bE,u)},n.cq));return a(X,f([$o(vk(n.gn))]),f([a($w,e,n),a(X,S,a(_n,s(function(u,$){var l=a(ar,$,i);if(l.$)return $e("");var d=l.a;return R(Vw,e,r,n,{l$:a(fe,0,a(ar,$,c)),a4:o,d2:u},d)}),t)),hm(n.ir)]))}),Uw=Fr(function(e,r,n,t,o,c){var i=a(ar,c,n.cT);if(i.$)return z;var u=i.a,$=Ln(r.bD),l=ou({hp:u.hp,cc:u.cc,aG:r.aG,bD:E(r.bD),bE:u.bE,g:a(qv,o,n.g),nG:u.nG,nR:Tc(r.bD),tk:t$(u),aM:u.aM,cB:t,pw:u.pw,pF:o$(r.bD)}),d=v(p3,"play:view",v(e.a7.bp,l,n.O,$),u.bG),b=x(e.a7.cq,l,n.O,$,u.bG),g=a(W,function(_){return{lP:a(_u,Eo(c),_.lP),mO:a(_u,Eo(c),_.mO),bE:_.bE,oL:_.oL,o9:_.o9,pb:_.pb}},b),C=Kn(v(Bw,$,l,{jP:l.pF,gn:c,ir:u.ir,cq:g,v:mp(c)})),p=oe(r.aG,E(c)),m=a(Ee,function(_){return _.bt},Ln(r.bD)),P=p?"4px solid "+pe(m):"none";return E(y(c,a(br,f([H3(c),a(T3,"data-play-pane",c),a(B,"outline",P),a(B,"border-radius","inherit")]),f([a(gu,Eo(c),d),C]))))}),Bm=function(e){return{$:1,a:e}},Rw=s(function(e,r){return a(y$,e,Bm(r))}),Xo=yt("className"),I$=Ie(f([Ua(Ze(.4)),a(F,"pointer-events","none")])),Ra=function(e){switch(e){case 0:return a(Ge,function(r){return r.kx},function(r){return r.p5});case 1:return a(Ge,function(r){return r.kx},function(r){return r.sx});case 2:return a(Ge,function(r){return r.kx},function(r){return r.rS});case 3:return a(Ge,function(r){return r.kx},function(r){return r.vr});case 4:return a(Ge,function(r){return r.kx},function(r){return r.tN});case 5:return function(r){return r.bt};case 6:return function(r){return r.bt};default:return a(Ge,function(r){return r.kx},function(r){return r.qP})}},js=be("padding-bottom"),Um=320,Rr={sR:'ui-monospace, "SF Mono", Menlo, Monaco, "Cascadia Mono", "Roboto Mono", Consolas, monospace',s9:'"Nunito", system-ui, sans-serif',uT:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},q$=be("flex-grow"),Rm=function(e){return a(X,f([O(f([ze(w(1)),q$(se(1)),a(F,"background-color",pe(a(Ee,function(r){return r.jh},e)))]))]),S)},Wr=be("margin-bottom"),Im=s(function(e,r){return a(X,f([O(f([Se,Qe(we),a(F,"gap","14px"),Wr(w(18))]))]),f([Rm(e),a(X,f([O(f([a(F,"font-family",Rr.uT),Ie(fa.rX),vo(Dt(.18)),U$(R$),ve(a(re,function(n){return n.lh},e)),Cr(se(0)),a(F,"white-space","nowrap")]))]),f([$e(r)])),Rm(e)]))}),Iw=s(function(e,r){return{$:4,a:e,b:r}}),qw=s(function(e,r){return{$:3,a:e,b:r}}),Ow=s(function(e,r){return{$:0,a:e,b:r}}),Gw=s(function(e,r){return{$:2,a:e,b:r}}),Ww=s(function(e,r){return{$:5,a:e,b:r}}),Nw=s(function(e,r){return{$:1,a:e,b:r}}),ai=jn("input"),ks=yt("max"),ws=yt("min"),Jw=function(e){return y(e,!0)},wu=s(function(e,r){return a(gs,e,Bm(r))}),Ls=a(Oc,f(["target","value"]),ke),Lu=function(e){return a(wu,"input",a(Je,Jw,a(Je,e,Ls)))},Ds=function(e){return a(yt,"step",e)},Ko=yt("type"),ni=yt("value"),qm=function(e){return a(ai,f([Ko("range"),ws(e.kb),ks(e.j8),Ds(e.k3),ni(e.lq),ju(e.q1),Lu(e.kt),Xo("ui-slider"),O(f([xe(er(100)),ze(w(32)),a(F,"-webkit-appearance","none"),a(F,"appearance","none"),je(ri),a(F,"cursor","grab"),vn(lr),a(F,"touch-action","none"),a(F,"--slider-fill",J(e.jF)+"%"),e.q1?I$:Ie(S)]))]),S)},Om=function(e){var r=ce(e.nH,e.nM)>0?100*(e.u2-e.nM)/(e.nH-e.nM):0;return qm({q1:e.q1,jF:r,j8:J(e.nH),kb:J(e.nM),kt:function(n){return e.ik(a(fe,e.u2,no(n)))},k3:J(e.ur),lq:J(e.u2)})},Ts=be("space-between"),xr=jn("span"),Gm=s(function(e,r){return a(X,f([O(f([Se,Qe(we),qr(Ts),a(F,"gap","12px"),a($r,w(10),le)]))]),f([a(xr,f([O(f([ve(a(re,function(n){return n.li},e)),Ie(fa.jX),a(F,"font-family",Rr.uT)]))]),f([$e(r.jX)])),r.ew]))}),Zw=function(e){var r=e.nH-e.nM,n=r>0?100*(e.u2-e.nM)/r:0;return qm({q1:e.q1,jF:n,j8:rr(e.nH),kb:rr(e.nM),kt:function(t){return e.ik(a(fe,e.u2,Ni(t)))},k3:"1",lq:rr(e.u2)})},O$=function(e){return a(F,"border-color",e.u2)},Xw=(function(){var e="#6D6553",r="#A39980";return"linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 0 0 / 8px 8px,"+(" linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 4px 4px / 8px 8px,"+(" "+r))))))))))})(),Wm=be("display"),Du=w$("focus"),Ms=function(e){return Ie(f([a(F,"outline","3px solid "+pe(a(mr,.25,e))),a(F,"outline-offset","0")]))},Kw={q2:0,u2:"inline-block"},zs="ui-color-swatch-popover",Tu={jc:0,hj:0,u2:"border-box"},Mu=be("box-sizing"),Yw=290,Qw=function(e){var r=no(e);if(r.$)return 0;var n=r.a;return v(dr,0,1,n)},As=s(function(e,r){var n=(function(){var c=r.iX;if(c.$)return S;var i=c.a;return f([a(xr,f([O(f([a(F,"font-family",Rr.sR),vr(w(13)),Sr(se(600)),xe(w(40)),Cr(se(0)),a(F,"text-align","right"),ve(a(re,function(u){return u.li},e))]))]),f([$e(i)]))])})(),t=a(ai,f([Ko("range"),ws("0"),ks("1"),Ds("0.01"),ni(J(r.u2)),Lu(function(c){return r.ik(Qw(c))}),Xo(r.iy),a(We,"aria-label",r.jX),O(f([Qc(se(1)),ze(w(26)),a(F,"-webkit-appearance","none"),a(F,"appearance","none"),a(F,"--track",r.hT),a(F,"background-color","transparent"),vn(lr),a(F,"cursor","grab"),a(F,"touch-action","none"),ln(le)]))]),S),o=a(xr,f([O(f([a(F,"font-family",Rr.sR),vr(w(14)),Sr(se(700)),xe(w(18)),Cr(se(0)),ve(a(re,function(c){return c.li},e))]))]),f([$e(r.jX)]));return a(X,f([O(f([Se,Qe(we),a(F,"gap","10px")]))]),Y(f([o,t]),n))}),Ia=M9,Nm="linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 0 0 / 14px 14px, linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 7px 7px / 14px 14px, #a39980",eL=s(function(e,r){var n=r.u2,t="linear-gradient(to right, transparent, "+(pe(a(mr,1,n))+("), "+Nm));return a(As,e,{hT:t,jX:"\u03B1",ik:function(o){return r.ik(H(n,{aQ:o}))},iy:"ui-hsla-alpha",iX:E(rr(Ia(n.aQ*100))+"%"),u2:n.aQ})}),rL=s(function(e,r){var n=Te(e-r);return a(Oe,n,1-n)}),Ir=D(function(e,r,n){return{aQ:1,aT:e,C:n,a1:r}}),Jm=f([v(Ir,6/360,.9,.62),v(Ir,33/360,1,.55),v(Ir,46/360,1,.55),v(Ir,80/360,.7,.52),v(Ir,150/360,.65,.46),v(Ir,172/360,.75,.45),v(Ir,185/360,1,.46),v(Ir,217/360,.88,.58),v(Ir,239/360,.84,.67),v(Ir,270/360,.8,.65),v(Ir,330/360,1,.69),v(Ir,350/360,.9,.63)]),zu=l9,aL=function(e){return a(fe,0,a(he,Pn,Mr(a(zu,If,a(_n,s(function(r,n){return y(r,a(rL,n.aT,e.aT))}),Jm)))))},nL=function(e){return e?"0 0 0 3px rgba(0, 0, 0, 0.55), 0 0 0 6px #fff, 0 4px 10px -3px rgba(0, 0, 0, 0.5)":"inset 0 0 0 1px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.5)"},Zm=32,tL=D(function(e,r,n){return a(jt,f([kt(e.ik(a(mr,e.u2.aQ,n))),a(We,"aria-label","preset colour"),O(f([xe(w(Zm)),ze(w(Zm)),Cr(se(0)),tr(er(50)),ei(le),ln(le),ia(sn),je(ur(n)),a(F,"box-shadow",nL(r))]))]),S)}),oL=function(e){var r=e.u2.a1<.08?-1:aL(e.u2);return a(X,f([O(f([a(F,"display","grid"),a(F,"grid-template-columns","repeat(6, 1fr)"),a(F,"gap","10px"),a(F,"justify-items","center")]))]),a(_n,s(function(n,t){return v(tL,e,oe(n,r),t)}),Jm))},cL=s(function(e,r){return a(A,function(n){var t=Tb(n);if(t.$)return Qn("invalid hex");var o=t.a;return ae(r(a(mr,e.aQ,o)))},Ls)}),iL=B3,Xm=iL,Fs=D(function(e,r,n){var t=n<0?n+1:n>1?n-1:n;return ce(t,1/6)<0?e+(r-e)*6*t:ce(t,1/2)<0?r:ce(t,2/3)<0?e+(r-e)*(2/3-t)*6:e}),uL=D(function(e,r,n){if(r<1e-10)return{jb:n,jM:n,kN:n};var t=n<.5?n*(1+r):n+r-n*r,o=2*n-t;return{jb:v(Fs,o,t,e-1/3),jM:v(Fs,o,t,e),kN:v(Fs,o,t,e+1/3)}}),Km=function(e){switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";default:return"f"}},Es=function(e){var r=v(dr,0,255,e),n=r/16|0,t=a(ja,16,r);return Y(dt(Km(n)),dt(Km(t)))},fL=function(e){var r=v(uL,e.aT,e.a1,e.C);return"#"+(Es(Ia(r.kN*255))+(Es(Ia(r.jM*255))+Es(Ia(r.jb*255))))},$L=s(function(e,r){var n=_p(fL(r.u2));return v(Xm,"div",f([O(f([Se,Qe(we),a(F,"gap","12px")]))]),f([y(n,a(ai,f([Ko("text"),a(We,"value",n),a(We,"pattern","#?[0-9A-Fa-f]{6}"),a(We,"spellcheck","false"),a(We,"aria-label","Hex colour"),Xo("ui-hex-input"),a(ua,"change",a(cL,r.u2,r.ik)),O(f([xe(er(50)),Cr(se(0)),Mu(Tu),a(F,"font-family",Rr.sR),vr(w(15)),Sr(se(600)),vo(Dt(.06)),U$(R$),ve(a(re,function(t){return t.lh},e)),je(a(re,function(t){return t.D},e)),v(xt,w(1),za,a(re,function(t){return t.jh},e)),tr(ga.sD),a($r,w(9),w(12)),vn(lr)]))]),S)),y("warn",a(X,f([Xo("ui-hex-warn")]),f([$e("invalid hex")])))]))}),Hs=D(function(e,r,n){return"hsl("+(J(e*360)+(", "+(J(r*100)+("%, "+(J(n*100)+"%)")))))}),lL=s(function(e,r){var n=r.u2,t="linear-gradient(to right, #000, "+(v(Hs,n.aT,n.a1,.5)+", #fff)");return a(As,e,{hT:t,jX:"L",ik:function(o){return r.ik(H(n,{C:o}))},iy:"ui-hsla-rail",iX:z,u2:n.C})}),Ym=120,vL=function(e){return a(X,f([O(f([Se,qr(we)]))]),f([a(X,f([O(f([ir(Wo),xe(w(Ym)),ze(w(Ym)),tr(er(50)),Jo(ku),a(F,"background",Nm),a(F,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 12px 26px -10px rgba(0, 0, 0, 0.6)")]))]),f([a(X,f([O(f([ir(Tn),Ma(le),Xr(le),St(le),at(le),a(F,"background",pe(e))]))]),S)]))]))},sL=s(function(e,r){var n=r.u2,t="linear-gradient(to right, "+(v(Hs,n.aT,0,n.C)+(", "+(v(Hs,n.aT,1,n.C)+")")));return a(As,e,{hT:t,jX:"S",ik:function(o){return r.ik(H(n,{a1:o}))},iy:"ui-hsla-rail",iX:z,u2:n.a1})}),dL=s(function(e,r){return a(X,f([O(f([Se,Ur(ha),a(F,"gap","18px"),xe(w(Yw)),Mu(Tu),ln(w(18)),je(a(re,function(n){return n.k6},e)),v(xt,w(1),za,a(re,function(n){return n.jh},e)),tr(ga.vi),ve(a(re,function(n){return n.lh},e)),a(F,"font-family",Rr.uT)]))]),f([vL(r.u2),a($L,e,r),oL(r),a(sL,e,r),a(lL,e,r),a(eL,e,r)]))}),bL=function(e){return H(e,{aQ:1})},pL=s(function(e,r){var n=pe(r.u2),t=pe(bL(r.u2));return a(X,f([O(f([Wm(Kw)]))]),f([a(jt,f([a(We,"popovertarget",r.bE),a(We,"aria-label","Pick colour"),a(We,"aria-haspopup","dialog"),a(zm,"background","linear-gradient(135deg, transparent 50%, "+(t+(" 50%), "+("linear-gradient(135deg, "+(n+(", "+(n+("), "+Xw)))))))),O(f([xe(w(32)),ze(w(32)),ln(le),v(xt,w(1),za,a(re,function(o){return o.jh},e)),tr(ga.sD),ia(sn),Jo(ku),a(F,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.4)"),a(F,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Mn(f([O$(a(re,function(o){return o.bt},e))])),Du(f([Ms(a(Ee,function(o){return o.bt},e))]))]))]),S),a(X,f([$o(r.bE),a(We,"popover","auto"),a(We,"data-popover",""),Xo(zs)]),f([a(dL,e,{ik:r.ik,u2:r.u2})]))]))}),Qm=be("baseline"),G$=s(function(e,r){return a(X,f([O(f([a($r,w(10),le)]))]),f([a(X,f([O(f([Se,Qe(Qm),qr(Ts),a(F,"gap","12px"),Wr(w(8))]))]),f([a(xr,f([O(f([ve(a(re,function(n){return n.li},e)),Ie(fa.jX),a(F,"font-family",Rr.uT)]))]),f([$e(r.jX)])),(function(){var n=r.u2;if(n.$)return $e("");var t=n.a;return a(xr,f([O(f([ve(a(re,function(o){return o.bt},e)),Ie(fa.jX),Sr(se(600)),a(F,"font-family",Rr.sR),a(F,"font-feature-settings",'"tnum"')]))]),f([$e(t)]))})()])),r.ew]))}),e5=yt("placeholder"),OG=te,mL=s(function(e,r){return{$:3,a:e,b:r}}),W$=function(e){return mL(e)},ti={st:w(16),sD:w(12),oP:w(8),vi:w(24),vj:w(4),vk:w(32),vl:w(2),vm:w(48)},hL=s(function(e,r){return a(ai,f([Ko("text"),ni(r.u2),e5(r.kK),Lu(r.ik),O(f([xe(er(100)),a($r,w(10),ti.sD),je(a(re,function(n){return n.k6},e)),ve(a(re,function(n){return n.lh},e)),v(xt,w(1),za,a(re,function(n){return n.jh},e)),tr(ga.sD),a(F,"font-family",Rr.sR),Ie(fa.lP),vn(lr),a(F,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Du(f([O$(a(re,function(n){return n.bt},e)),Ms(a(Ee,function(n){return n.bt},e))])),a(W$,"placeholder",f([ve(a(re,function(n){return n.lf},e))]))]))]),S)}),N$=Mm("padding"),gL=jn("option"),CL=xm("selected"),_L=s(function(e,r){return a(gL,f([ni(r),CL(oe(r,e))]),f([$e(r)]))}),yL=jn("select"),PL=s(function(e,r){return a(yL,f([a(ua,"change",a(Je,r.tf,Ls)),O(f([xe(er(100)),a(F,"appearance","none"),a(F,"-webkit-appearance","none"),je(a(re,function(n){return n.k6},e)),ve(a(re,function(n){return n.lh},e)),v(xt,w(1),za,a(re,function(n){return n.jh},e)),tr(ga.sD),x(N$,w(10),w(34),w(10),ti.sD),a(F,"font-family",Rr.uT),Ie(fa.lP),Sr(se(500)),ia(sn),a(F,"background-image",`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D4A244' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M3 5l3 3 3-3'/></svg>")`),a(F,"background-repeat","no-repeat"),a(F,"background-position","right 12px center"),vn(lr),a(F,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), background-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Mn(f([O$(a(re,function(n){return n.i0},e)),je(a(re,function(n){return n.k7},e))])),Du(f([O$(a(re,function(n){return n.bt},e)),a(F,"box-shadow","0 0 0 3px "+pe(a(mr,.25,a(Ee,function(n){return n.bt},e))))]))]))]),a(W,_L(r.t8),r.tl))}),SL=W$("after"),xL=K(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),Au=K(function(e,r,n,t){return x(xL,e,r,n,t)}),J$={cM:{p0:200,rx:120,ug:320},hJ:{rg:x(Au,.33,1,.68,1),jN:x(Au,.45,.05,.25,1),r8:x(Au,.65,0,.35,1),uj:x(Au,.2,.9,.25,1),ul:x(Au,.34,1.56,.64,1)}},Z$=function(e){return H$(f([e]))},Vs=function(e){var r=e.u2;return{lk:0,u2:a(Kc,"translateX",f([r]))}},r5=s(function(e,r){var n=r.m6?a(re,function(i){return i.bt},e):a(re,function(i){return i.jh},e),t=r.m6?20:0,o=r.m6?a(F,"box-shadow","0 0 14px "+pe(a(mr,.4,a(Ee,function(i){return i.bt},e)))):Tm(lr),c=r.m6?a(re,function(i){return i.lh},e):a(re,function(i){return i.lf},e);return a(jt,f([O(f([ir(Wo),xe(w(46)),ze(w(26)),je(n),tr(ga.tv),ei(le),ia(sn),vn(lr),V$(f([v(ms,220,0,J$.hJ.jN)])),Cr(se(0)),SL(f([a(F,"content",'""'),ir(Tn),Ma(w(2)),Xr(w(2)),xe(w(22)),ze(w(22)),je(c),tr(er(50)),Z$(Vs(w(t))),o,V$(f([v(jm,220,0,J$.hJ.ul),v(ms,220,0,J$.hJ.jN),v(Sm,220,0,J$.hJ.jN)]))])),r.q1?I$:Ie(S)])),kt(r.n6),ju(r.q1),a(We,"aria-pressed",r.m6?"true":"false"),a(We,"aria-label",r.jX)]),S)}),jL=s(function(e,r){var n=r.a,t=r.b;switch(t.$){case 0:var o=t.a,i=o.a,u=o.b,$=t.b;return a(G$,e,{ew:Om({q1:!1,nH:u,nM:i,ik:Ow(n),ur:.01*(u-i),u2:$}),jX:n,u2:E(a(Ac,2,$))});case 2:var c=t.a,i=c.a,u=c.b,$=t.b;return a(G$,e,{ew:Zw({q1:!1,nH:u,nM:i,ik:Gw(n),u2:$}),jX:n,u2:E(rr($))});case 4:var $=t.a;return a(Gm,e,{ew:a(r5,e,{q1:!1,m6:$,jX:n,n6:a(Iw,n,!$)}),jX:n});case 1:var $=t.a;return a(G$,e,{ew:a(hL,e,{ik:Nw(n),kK:"",u2:$}),jX:n,u2:z});case 3:var $=t.a;return a(Gm,e,{ew:a(pL,e,{bE:"play-config-color-"+n,ik:qw(n),u2:$}),jX:n});default:var l=t.a;return a(G$,e,{ew:a(PL,e,{tf:Ww(n),tl:Xf(l),t8:Fo(l)}),jX:n,u2:z})}}),kL=s(function(e,r){return a(X,f([O(f([a($r,le,w(20))]))]),f([a(Im,e,r.sX),a(X,S,a(W,jL(e),r.a9))]))}),GG=1,WG=1,wL=K(function(e,r,n,t){return{bx:r,bF:n,bM:t,bS:e}}),LL=R(Rc,wL,a(k,"top",N),a(k,"bottom",N),a(k,"left",N),a(k,"right",N)),a5=a(Oc,f(["currentTarget","boundingClientRect"]),LL),DL=function(e){return a(ua,"click",a(Je,e,a5))},TL=s(function(e,r){var n=(function(){return r?y(40,ti.st):y(32,ti.sD)})(),t=n.a,o=n.b;return f([ze(w(t)),a($r,le,o),tr(ga.tv),ei(le),ia(sn),vn(lr),a(F,"font-family",Rr.uT),Ie(fa.jX),Se,Qe(we),qr(we),a(F,"gap","6px"),a(F,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Du(f([Ms(a(Ee,function(c){return c.bt},e))]))])}),Bs=function(e){return a(Lr,"",e)},Us=function(e){return a(F,"box-shadow",Bs(f(["inset ",J(e*1.5),"px ",J(e*1.5),"px ",J(e*3),"px ",pe(a(mr,.6,xo)),", inset 0 0 0 1px ",pe(a(mr,.35,xo))])))},n5=s(function(e,r){return R(Su,le,le,le,w(e),ur(r))}),ML=D(function(e,r,n){var t=s(function(i,u){return n?Y(i,u):i});switch(r){case 0:var o=f([je(a(re,function(i){return i.bt},e)),ve(a(re,function(i){return v(ys,.6,i.bt,i.lh)},e)),a(n5,1,a(Ee,function(i){return i.i0},e))]),c=f([je(a(re,function(i){return i.i0},e)),Us(1.5)]);return Y(a(t,o,c),f([Mn(f([je(a(re,function(i){return i.i1},e))])),xu(c)]));case 1:var o=f([je(a(re,function(i){return i.k6},e)),ve(a(re,function(i){return i.lh},e)),a(n5,1,a(Ee,function(i){return i.jh},e))]),c=f([je(a(re,function(i){return i.k9},e)),Us(1.5)]);return Y(a(t,o,c),f([Mn(f([je(a(re,function(i){return i.k7},e))])),xu(c)]));default:var o=f([je(ri),ve(a(re,function(i){return i.li},e))]),c=f([je(a(re,function(i){return i.k9},e)),ve(a(re,function(i){return i.lh},e)),Us(1.5)]);return Y(a(t,o,c),f([Mn(f([je(a(re,function(i){return i.k6},e)),ve(a(re,function(i){return i.lh},e))])),xu(c)]))}}),t5=D(function(e,r,n){var t=(function(){var o=r.X;return o?18:16})();return a(jt,a(M,O(Y(a(TL,e,r.X),Y(v(ML,e,r.u3,r.sh),r.q1?f([I$]):S))),a(M,ju(r.q1),n)),(function(){var o=r.mO;if(o.$)return f([$e(r.jX)]);var c=o.a;return f([a(xr,f([O(f([Se,Qe(we),qr(we),xe(w(t)),ze(w(t)),Cr(se(0))]))]),f([c])),$e(r.jX)])})())}),zL=s(function(e,r){return v(t5,e,{q1:!1,mO:z,sh:!1,jX:r.jX,X:1,u3:1},f([DL(r.gA)]))}),AL=function(e){return a(X,f([O(f([x(N$,w(8),w(20),w(36),w(20)),Se,qr(we)]))]),f([a(zL,e.e,{jX:"Reset Page's Configurations",gA:e.hw.n3})]))},o5=s(function(e,r){return v(t5,e,{q1:r.q1,mO:r.mO,sh:r.sh,jX:r.jX,X:r.X,u3:r.u3},f([kt(r.gA)]))}),FL=s(function(e,r){return a(o5,e,{q1:!1,mO:z,sh:!1,jX:r.jX,gA:r.gA,X:1,u3:1})}),c5={dH:0,u2:"bold"},EL=be("margin"),Aa=be("margin-top"),Rs=be("max-width"),X$=function(e){return v(L$,"textAlign","text-align",e(D$))},HL=(function(){var e=v(Ir,.11,.55,.2),r=v(Ir,.13,.8,.62),n=v(Ir,.13,.9,.9),t="play-reset-interface-help",o=function($){return a(X,f([O(f([a($r,w(2),le)]))]),f([$e("\u2022 "+$)]))},c=v(Ir,.13,1,.58),i=v(Ir,.13,.95,.52),u=v(Ir,.12,.85,.16);return a(xr,f([O(f([Se,Qe(we)]))]),f([a(jt,f([Ko("button"),a(We,"popovertarget",t),a(We,"aria-label","What does resetting Play's interface clear?"),O(f([xe(w(20)),ze(w(20)),ln(le),a(F,"border","none"),tr(er(50)),ia(sn),Sr(c5),vr(w(13)),Or(w(20)),X$(we),a(F,"background-color",pe(i)),a(F,"color",pe(u)),a(F,"transition","background-color 160ms"),Mn(f([a(F,"background-color",pe(c))])),Du(f([a(F,"outline","2px solid "+pe(c)),a(F,"outline-offset","2px")]))]))]),f([$e("?")])),a(X,f([$o(t),a(We,"popover","auto"),a(We,"data-popover",""),O(f([ir(wt),EL(le),a(F,"pointer-events","auto"),Rs(w(250)),a($r,w(12),w(14)),tr(w(10)),vr(w(12.5)),Or(Ze(1.5)),a(F,"background-color",pe(n)),a(F,"color",pe(e)),a(F,"border","1px solid "+pe(r)),a(F,"box-shadow","0 6px 20px rgba(0, 0, 0, 0.28)")]))]),f([a(X,f([O(f([Sr(c5),Wr(w(8))]))]),f([$e("Resetting Play's interface clears, for this browser:")])),o("Panel positions & sizes"),o("Light / dark theme"),o("Play / author mode"),o("Device-preview frame"),o("Tape \u201Crecord from start\u201D preference"),a(X,f([O(f([Aa(w(8)),Ua(Ze(.85))]))]),f([$e("Your configuration values (in the page URL) and any saved content aren\u2019t affected.")]))]))]))})(),VL=function(e){return a(X,f([O(f([x(N$,w(16),w(20),w(4),w(20)),Se,Qe(we),qr(we),a(F,"gap","8px")]))]),f([a(FL,e.e,{jX:"Reset Play's Interface",gA:e.kq}),HL]))},BL=function(e){var r=Ye(e.qB.cc)?$e(""):AL(e);return a(X,f([O(f([xe(w(Um))]))]),f([VL(e),r,a(_u,e.gB,a(X,f([O(f([Se,Ur(ha),a(F,"gap","18px"),js(w(16))]))]),a(W,kL(e.e),e.qB.cc)))]))},UL=function(e){if(!e.ca.gj||e.pF)return $e("");var r=v(mo,e.e,e.qB,{bv:fo(0),lP:BL(e),bE:0,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(0),o9:Ra(0),pb:"Configurations",v:e.aY});return Ct(e.uF)?a(X,f([O(f([I$]))]),f([r])):r},Is=function(e){return{$:1,a:e}},NG=0,JG=0,RL=function(e){return e?_r.q_:_r.q$},IL=function(e){return e?"Landscape":"Portrait"},ZG=1,XG=3,KG=2,qL={$:2},OL=s(function(e,r){return{$:0,a:e,b:r}}),GL={$:1},WL={$:3},NL=function(e){return a(ua,"mousedown",ae(e))},JL=function(e){return a(ua,"mouseleave",ae(e))},Mt=s(function(e,r){return f([a(ua,"mouseenter",a(Je,function(n){return e(a(OL,r,n))},a5)),JL(e(GL)),NL(e(qL)),a(ua,"mousemove",ae(e(WL)))])}),K$=s(function(e,r){var n=Dr(r.sn),t=function(c){return n<=1?0:c?oe(c,n-1)?3:2:1},o=s(function(c,i){var u=r.sl(i);return a(Lm,e,{i9:"radio",ja:y("aria-checked",Cm(u)),q1:r.q1,mO:r.mO(i),m6:u,jX:r.sm(i),gA:r.tf(i),kk:r.t9(i),dY:r.dY,tF:t(c),du:a(Mt,r.tg,{eE:r.uO,jX:r.sm(i),oL:r.oL(i)})})});return v(Pm,{q1:r.q1,dY:r.dY},f([a(We,"role","radiogroup"),a(We,"aria-label",r.jX)]),a(_n,o,r.sn))}),ZL=K(function(e,r,n,t){return a(X,f([O(f([Se,qr(we),a($r,w(6),w(0))]))]),f([a(K$,e,{q1:!1,mO:RL,sl:en(t),sm:IL,sn:f([0,1]),jX:"Orientation",tf:a(nr,r.v,Is),tg:n,dY:0,t9:function(o){return function(c){return c.bt}},oL:function(o){return z},uO:0})]))}),Fu=function(e){return{ji:a(re,function(r){return r.ji},e),kX:_s.re,D:a(re,function(r){return r.D},e),la:a(re,function(r){return r.k9},e),lf:a(re,function(r){return r.lf},e),lh:a(re,function(r){return r.lh},e),li:a(re,function(r){return r.li},e),g7:Pt.ob}},XL=function(e){return{$:0,a:e}},i5=function(e){return{$:3,a:e}},oi=s(function(e,r){return a(gs,e,i5(r))}),KL={$:2},YL={$:1},QL={$:3},eD={$:4},qs=kh,rD=wr(qs,Le(function(e,r,n,t,o){return{i3:t,jt:r,jV:e,j9:o,kY:n}}),a(k,"key",ke),a(k,"ctrlKey",ne),a(k,"shiftKey",ne),a(k,"altKey",ne),a(k,"metaKey",ne)),aD=s(function(e,r){return a(Je,function(n){var t=n.j9,o=n.i3,c=n.kY,i=n.jt,u=n.jV,$=i||o||t;if($)return{T:e.v(La),W:!1,Z:!1};if(u==="Tab")return{T:e.v(La),W:!0,Z:!0};if(u==="ArrowUp")return{T:e.v(YL),W:!0,Z:!0};if(u==="ArrowDown")return{T:e.v(KL),W:!0,Z:!0};if(u==="Enter")return{T:e.v(QL),W:!0,Z:!0};if(u==="Escape")return{T:e.v(eD),W:!0,Z:!0};if(u==="ArrowLeft"||u==="ArrowRight"){if(r.$)return{T:e.v(La),W:!1,Z:!1};var l=r.a;return{T:u==="ArrowLeft"?l.tc:l.te,W:!0,Z:!0}}else return{T:e.v(La),W:!1,Z:!1}},rD)}),u5=5,nD=function(e){return v(_t,e,!1,"")},f5=nD,tD={W:!0,Z:!1},oD=s(function(e,r){return a(y$,e,i5(r))}),cD=Le(function(e,r,n,t,o){return{qG:o,sk:t,tA:r,tC:n,tD:e}}),iD=Le(function(e,r,n,t,o){return{jO:r,tI:n,uI:t,uJ:o,lt:e}}),uD=wr(qs,iD,a(k,"width",N),a(k,"height",N),a(k,"pressure",N),a(k,"tiltX",N),a(k,"tiltY",N)),fD=Fr(function(e,r,n,t,o,c){return{qi:r,qx:n,bc:e,ta:t,tn:o,t3:c}}),YG=4,QG=0,eW=5,rW=1,aW=2,nW=3,$D=function(e){switch(e){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;default:return 0}},lD=a(Je,$D,a(k,"button",qi)),vD=v(Xn,s(function(e,r){return y(e,r)}),a(k,"clientX",N),a(k,"clientY",N)),sD=K(function(e,r,n,t){return{i3:e,jt:r,j9:n,kY:t}}),dD=R(Rc,sD,a(k,"altKey",ne),a(k,"ctrlKey",ne),a(k,"metaKey",ne),a(k,"shiftKey",ne)),bD=v(Xn,s(function(e,r){return y(e,r)}),a(k,"offsetX",N),a(k,"offsetY",N)),pD=v(Xn,s(function(e,r){return y(e,r)}),a(k,"pageX",N),a(k,"pageY",N)),mD=v(Xn,s(function(e,r){return y(e,r)}),a(k,"screenX",N),a(k,"screenY",N)),hD=ra(pp,fD,dD,lD,vD,bD,pD,mD),tW=0,oW=2,cW=1,gD=function(e){switch(e){case"pen":return 2;case"touch":return 1;default:return 0}},CD=a(Je,gD,ke),_D=wr(qs,cD,a(k,"pointerType",CD),hD,a(k,"pointerId",qi),a(k,"isPrimary",ne),uD),yD=D(function(e,r,n){return a(oD,e,a(Je,function(t){return{T:n(t),W:r.W,Z:r.Z}},_D))}),$5=a(yD,"pointerdown",tD),PD=function(e){return{$:5,a:e}},SD=function(e){return{$:6,a:e}},xD=K(function(e,r,n,t){return a(X,f([f5($5(function(o){return e.v(SD(t))})),kt(e.v(PD(t)))]),f([a(r,n,t)]))}),jD=K(function(e,r,n,t){return Ye(t.aS)?a(X,f([O(f([ze(w(e.fd)),Se,Qe(we),qr(we),ve(r.lf),Cr(se(0))]))]),f([$e("No matching items")])):v(Xm,"div",f([$o(Bo(e)),O(f([ze(w(e.fd)),x(N$,w(0),w(4),w(0),w(4)),Jo(No),a(F,"overscroll-behavior","contain"),Cr(se(0)),Se,Ur(ha)])),f5($5(function(o){return e.v(La)})),a(ua,"scroll",a(Je,a(Ge,ns,e.v),a(Oc,f(["currentTarget","scrollTop"]),N))),a(oi,"wheel",ae({T:e.v(La),W:!1,Z:!0}))]),(function(){var o=Dr(t.aS),c=a(Oe,o-1,R0((t.b1+e.fd)/co)+u5),i=a(Pe,0,Kt(t.b1/co)-u5),u=i*co,$=a(_n,s(function(d,b){var g=i+d;return y(rr(g),x(xD,e,n,oe(g,t.av),b))}),a(ao,c-i+1,a(pt,i,t.aS))),l=a(Pe,0,o-1-c)*co;return a(M,y("top-spacer",a(X,f([O(f([ze(w(u)),Cr(se(0))]))]),S)),Y($,f([y("bottom-spacer",a(X,f([O(f([ze(w(l)),Cr(se(0))]))]),S))])))})())}),kD=function(e){return{$:9,a:e}},wD=function(e){return a(Je,function(r){return{T:e.v(kD(r)),W:!0,Z:!0}},a(k,"deltaY",N))},Y$=Ot(function(e,r,n,t,o,c,i){var u=i;return a(X,f([O(f([ve(r.li),Se,Ur(ha),a(F,"gap","8px"),xe(er(100))])),a(oi,"keydown",a(aD,e,t)),a(oi,"mousedown",ae({T:e.v(La),W:!1,Z:!0})),a(oi,"pointerdown",ae({T:e.v(La),W:!1,Z:!0})),a(oi,"pointerup",ae({T:e.v(La),W:!1,Z:!0})),a(oi,"wheel",wD(e))]),Y(n,Y(f([a(ai,f([Ko("text"),$o(j3(e)),a(We,"data-select-all-on-focus","true"),e5(e.kK),O(f([xe(er(100)),Cr(se(0)),a($r,w(8),w(8)),tr(w(4)),vn(lr),je(r.la),ve(r.lh),a(W$,"placeholder",f([ve(r.lf)]))])),Lu(a(Ge,XL,e.v)),ni(u.iI)]),S),x(jD,e,r,o,u)]),c)))}),Eu=function(e){return e.C>.55?{aQ:1,aT:0,C:.1,a1:0}:{aQ:1,aT:0,C:.98,a1:0}},LD=function(e){return J(e.X.lt)+(" \xD7 "+J(e.X.jO))},l5=D(function(e,r,n){var t=r?Ie(f([je(a(re,function(c){return c.bt},e)),ve(a(re,a(Ge,function(c){return c.bt},Eu),e))])):ve(a(re,function(c){return c.lh},e)),o=r?a(re,a(Ge,function(c){return c.bt},Eu),e):a(re,function(c){return c.li},e);return a(X,f([O(f([a($r,w(0),w(12)),ze(w(32)),Se,Qe(we),Mu(Tu),a(F,"gap","10px"),t]))]),f([a(xr,f([O(f([q$(se(1)),vr(w(13))]))]),f([$e(n.sX)])),a(xr,f([O(f([vr(w(12)),ve(o)]))]),f([$e(LD(n))]))]))}),DD=K(function(e,r,n,t){var o=t;return ra(Y$,Ec(r),Fu(e),f([x(ZL,e,r,n,o.dY)]),E({tc:r.v(Is(0)),te:r.v(Is(1))}),l5(e),S,o.bj)}),Os=K(function(e,r,n,t){return a(X,f([O(f([ir(wt),Ma(le),Xr(le),Ua(Ze(.001)),Lt(lr)])),a(We,"inert","")]),f([ra(Y$,H(e,{f0:e.f0+"-warmup"}),r,S,z,n,S,t)]))}),TD=D(function(e,r,n){var t=n;return x(Os,Ec(r),Fu(e),l5(e),t.bj)}),MD=function(e){if(!e.ca.dJ||e.pF)return $e("");var r={f0:np,v:e.kn};return a(X,S,f([v(mo,e.e,e.qB,{bv:fo(7),lP:x(DD,e.e,r,e.tg,e.Q),bE:7,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(7),o9:Ra(7),pb:"Device",v:e.aY}),v(TD,e.e,r,e.Q)]))},zD=D(function(e,r,n){return(function(t){return v(cn,e,t,n.bK)})(v(me,e,r,n.bC))}),AD=s(function(e,r){return a(nr,a(zD,e,r),s$)}),FD=function(e){var r=e,n=v(AD,s(function(c,i){var u=i.a,$=i.b;return y(u+1,$+c.hF)}),y(0,0),r.gK),t=n.a,o=n.b;return t>1&&o>0?E(t/o):z},ED=be("flex-end"),v5=function(e){return e*1e3},HD=function(e){var r=e.u2;return{lk:0,u2:a(Kc,"translateY",f([r]))}},VD=function(e){return a(X,f([O(f([ir(Tn),xe(er(100)),ze(w(1)),H$(f([HD(er(-50))])),je(ur(e.kx.rS)),at(w(v5(1/60)))]))]),S)},BD=function(e){return Y(e.bC,De(e.bK))},UD=a(nr,BD,s$),RD=s(function(e,r){var n=r*1e3;return n<=18?e.kx.rS:n<=33?e.kx.vr:e.kx.tN}),ID=s(function(e,r){return a(X,f([O(f([Qc(lr),xe(w(4)),ze(w(v5(r))),at(le),je(ur(a(RD,e,r)))]))]),S)}),qD=s(function(e,r){return a(X,f([O(f([ir(Wo),ze(w(50)),xe(w(e3*4)),Jo(ku),je(ur(e.lb))]))]),f([VD(e),a(X,f([O(f([ir(Tn),St(le),at(le),ze(er(100)),Se,Ur(Xc),Qe(ED)]))]),a(W,a(Ge,function(n){return n.hF},ID(e)),UD(r)))]))}),s5=s(function(e,r){if(e<0)return r;var n=a(Dn,10,e),t=vC(n),o=function(c){return c/n};return o(Ia(t(r)))}),OD=s(function(e,r){return e<0?r:a(s5,e,r)}),GD=function(e){return e>=0?"":"-"},Hu=s(function(e,r){var n=function(t){var o=a(gn,".",t);e:for(;;)if(o.b)if(o.b.b){if(o.b.b.b)break e;var c=o.a,i=o.b,u=i.a;return c+("."+v(Qf,e,"0",u))}else{var c=o.a;return c+("."+a(Sc,e,"0"))}else break e;return t};return gv(r)?"NaN":zc(r)?GD(r)+"Infinity":e<=0?J(a(OD,e,r)):n(J(a(s5,e,r)))}),WD=s(function(e,r){return a(X,f([O(f([ve(ur(e.kx.rS))]))]),f([$e("Frame Rate: "),$e(a(fe,"-",a(he,Hu(0),r)))]))}),ND=s(function(e,r){var n=r;return a(X,f([O(f([Se,Ur(ha),a(F,"gap","8px")]))]),f([a(qD,e,n.gK),a(WD,e,FD(r))]))}),d5=function(e){return a(be,"animation-duration",e)},JD=function(e){return{$:5,a:e}},b5=function(e){return e.u2==="none"||e.u2==="inherit"||e.u2==="unset"||e.u2==="initial"?a(be,"animation-name",e):JD(e.u2)},iW=te,Yo=s(function(e,r){return e+(":"+r)}),ZD=function(e){return oe(e,b$)},XD=function(e){var r=e.a,n=e.b,t=v(ma,function(c){var i=c;return i+";"},"",n),o=rr(r)+"%";return o+("{"+(t+"}"))},KD=function(e){return v(ma,XD,"",e)},p5=function(e){return Ye(e)?{jW:0,kh:0,u2:"none"}:{jW:0,kh:0,u2:KD(e)}},m5=function(e){return{cM:0,u2:J(e)+"s"}},YD={$:2},QD={$:3},eT=function(e){return oe(e,b$)?QD:YD},rT=function(e){return{$:3,a:e}},aT=s(function(e,r){return{$:4,a:e,b:r}}),nT=function(e){return aT(a(W,rT,e))},tT=D(function(e,r,n){var t=ZD(n),o=t?"Stop profiling":"Start profiling",c=t?a(X,f([O(f([xe(er(100)),ze(er(100)),Se,Qe(we),qr(we),ve(a(re,a(Ge,function(i){return i.kx},function(i){return i.tN}),e)),b5(p5(f([y(0,f([a(Yo,"opacity","1")])),y(50,f([a(Yo,"opacity","0.35")])),y(100,f([a(Yo,"opacity","1")]))]))),d5(m5(1.2)),a(F,"animation-iteration-count","infinite"),a(F,"animation-timing-function","ease-in-out"),a(nT,f(["(prefers-reduced-motion: reduce)"]),f([a(F,"animation","none")]))]))]),f([_r.tM])):_r.tM;return a(X,f([O(f([Se,qr(we),xe(er(100))]))]),f([a(X,f([O(f([xe(w(160))]))]),f([a(o5,e,{q1:!1,mO:E(c),sh:t,jX:o,gA:r(eT(n)),X:1,u3:1})]))]))}),oT=function(e){var r=e.ca.eV?f([v(tT,e.e,e.gC,e.aL)]):S;return a(X,f([O(f([Se,Ur(ha),a(F,"gap","8px")]))]),a(M,a(ND,bt(e.e),e.de),r))},cT=function(e){return!e.ca.gk||e.pF||Ct(e.uF)?$e(""):v(mo,e.e,e.qB,{bv:fo(2),lP:oT(e),bE:2,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(2),o9:Ra(2),pb:"Performance",v:e.aY})},Vu=function(e){return e?"true":"false"},Q$=function(e){var r=e.b;return g3(r)},qa=D(function(e,r,n){return a(X,f([O(f([Se,a(F,"gap","16px"),a($r,w(3),le),Qe(Qm),a(F,"font-family",Rr.sR),vr(w(12)),a(F,"font-feature-settings",'"tnum"')]))]),f([a(X,f([O(f([ve(a(re,function(t){return t.lf},e)),xe(w(120)),Cr(se(0))]))]),f([$e(r)])),a(X,f([O(f([ve(a(re,function(t){return t.lh},e))]))]),f([$e(n)]))]))}),el=D(function(e,r,n){return a(X,f([O(f([a($r,le,w(20))]))]),a(M,a(Im,e,r),n))}),iT=function(e){var r=e.e,n=e.qB;return a(X,f([O(f([Se,Ur(ha),a(F,"gap","18px"),a($r,w(14),le),xe(w(Um))]))]),f([v(el,r,"Tape",f([v(qa,r,"frame",rr(Q$(e.uF))),v(qa,r,"dt",a(Ac,4,n.hF)),v(qa,r,"clock",a(Ac,4,n.hp))])),v(el,r,"Pointer",f([v(qa,r,"x",a(Ac,2,n.tA.pC)),v(qa,r,"y",a(Ac,2,n.tA.pD)),v(qa,r,"isDown",Vu(n.tA.sj))])),v(el,r,"Keyboard",f([v(qa,r,"pressed",a(Lr," ",n.h_.tH)),v(qa,r,"shift",Vu(n.h_.kY)),v(qa,r,"ctrl",Vu(n.h_.jt)),v(qa,r,"meta",Vu(n.h_.j9)),v(qa,r,"alt",Vu(n.h_.i3))])),v(el,r,"Wheel",f([v(qa,r,"deltaX",J(n.fN.mg)),v(qa,r,"deltaY",J(n.fN.mh))]))]))},uT=function(e){return!e.ca.gl||e.pF?$e(""):v(mo,e.e,e.qB,{bv:fo(1),lP:iT(e),bE:1,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(1),o9:Ra(1),pb:"Inputs",v:e.aY})},uW=1,h5=function(e){return{i3:!1,qA:e,jt:!1,j9:!1,kY:!1}},fT=function(e){return H(e,{j9:!0})},Gs=function(e){return fT(h5(e))},$T=function(e){return H(e,{jt:!0})},Ws=function(e){return $T(h5(e))},lT=function(e){return e===1?"\u2325":"Alt"},vT=function(e){return e===1?"\u2303":"Ctrl"},sT=s(function(e,r){if(a(Wn,"Key",r))return a(on,3,r);if(a(Wn,"Digit",r))return a(on,5,r);switch(r){case"BracketLeft":return"[";case"BracketRight":return"]";case"Slash":return"/";case"Backslash":return"\\";case"Period":return".";case"Comma":return",";case"Semicolon":return";";case"Quote":return"'";case"Backquote":return"`";case"Minus":return"-";case"Equal":return"=";case"Space":return"Space";case"ArrowLeft":return"\u2190";case"ArrowRight":return"\u2192";case"ArrowUp":return"\u2191";case"ArrowDown":return"\u2193";case"Enter":return e===1?"\u21A9":"Enter";case"Escape":return e===1?"\u238B":"Esc";case"Tab":return e===1?"\u21E5":"Tab";case"Backspace":return e===1?"\u232B":"Backspace";case"Delete":return e===1?"\u2326":"Del";default:return r}}),dT=function(e){return e===1?"\u2318":"Win"},bT=function(e){return e===1?"\u21E7":"Shift"},rl=s(function(e,r){var n=e===1?"":"+",t=a(Vr,te,f([r.jt?E(vT(e)):z,r.i3?E(lT(e)):z,r.kY?E(bT(e)):z,r.j9?E(dT(e)):z,E(a(sT,e,r.qA))]));return a(Lr,n,t)}),pT=function(e){var r=(function(){var t=e.qB.kv===1?Gs("KeyI"):Ws("KeyI");return a(rl,e.qB.kv,t)})(),n=Gf(e.e);return a(K$,e.e,{q1:!1,mO:function(t){return t?_r.uy:_r.sS},sl:en(n),sm:function(t){return t?"Lights on":"Lights off"},sn:f([!1,!0]),jX:"Lights",tf:function(t){return oe(t,n)?e.fk:e.ko(xv(e.e))},tg:e.tg,dY:0,t9:function(t){return function(o){return jo}},oL:function(t){return E(r)},uO:1})},mT={$:2},hT={$:3},gT=(function(){var e=R2,r=e.a,n=e.b;return a(M,r,n)})(),CT=function(e){return{$:1,a:e}},_T=yt("title"),yT=K(function(e,r,n,t){var o=bt(e).kx,c=oe(t,n),i=a(Lb,t,o),u=a(Ee,function(l){return l.ji},e),$=c?f([a(F,"outline","3px solid "+pe(u)),a(F,"outline-offset","2px")]):S;return a(jt,f([a(We,"aria-pressed",c?"true":"false"),a(We,"type","button"),_T(_2(t)),kt(r(CT(t))),O(Y(f([xe(w(28)),ze(w(28)),tr(er(50)),je(ur(i)),v(xt,w(1),za,ur(u)),ia(sn),ln(w(0))]),$))]),S)}),PT=D(function(e,r,n){var t=Fo(n);return a(X,f([a(We,"role","group"),a(We,"aria-label","Accent colour"),O(f([Se,Qe(we),a(F,"gap","12px"),Cr(se(0))]))]),a(W,v(yT,e,r,t),gT))}),ST=K(function(e,r,n,t){return a(X,f([O(f([Se,Qe(we),qr(we),a(F,"gap","14px"),a($r,w(6),w(0)),Cr(se(0))]))]),Y(n,f([v(PT,e,r,t)])))}),xT=function(e){return a(X,f([O(f([xe(w(12)),ze(w(12)),tr(w(2)),je(ur(e))]))]),S)},jT=function(e){return a(X,f([O(f([Se,a(F,"gap","3px"),Cr(se(0))]))]),a(W,xT,f([e.pZ,e.rD,e.p5,e.rS,e.tN,e.vr])))},g5=D(function(e,r,n){var t=r?Ie(f([je(a(re,function(o){return o.bt},e)),ve(a(re,a(Ge,function(o){return o.bt},Eu),e))])):ve(a(re,function(o){return o.lh},e));return a(X,f([O(f([a($r,w(0),w(12)),ze(w(32)),Se,Qe(we),Mu(Tu),a(F,"gap","10px"),t]))]),f([jT(n),a(xr,f([O(f([q$(se(1)),vr(w(13))]))]),f([$e(n.sX)]))]))}),kT=K(function(e,r,n,t){var o=t;return ra(Y$,Hc(r),Fu(e),f([x(ST,e,r.v,n,o.c1)]),E({tc:r.v(mT),te:r.v(hT)}),g5(e),S,o.bj)}),wT=D(function(e,r,n){var t=n;return x(Os,Hc(r),Fu(e),g5(e),t.bj)}),LT=function(e){if(!e.ca.cj||e.pF)return $e("");var r={f0:ip,v:e.ku};return a(X,S,f([v(mo,e.e,e.qB,{bv:fo(5),lP:x(kT,e.e,r,f([pT(e)]),e.P),bE:5,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(5),o9:Ra(5),pb:"Theme",v:e.aY}),v(wT,e.e,r,e.P)]))},DT=function(e){return v(jn,"style",S,f([$e(`
.`+(zs+(` {
  position: fixed;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
}
.`+(zs+`::backdrop {
  background: transparent;
}
`))))]))},TT=s(function(e,r){return`
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
`)))))}),MT=`
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
`,zT=function(e){var r=pe(a(mr,.25,a(Ee,function(t){return t.bt},e))),n=pe(a(Ee,function(t){return t.bt},e));return v(jn,"style",S,f([$e(Y(MT,a(TT,n,r)))]))},AT=s(function(e,r){return a(F3,e+" ",r)}),FT=function(e){return{pZ:a(re,function(r){return r.bt},e),rD:ur(Eu(a(Ee,function(r){return r.bt},e))),g7:Pt.c_}},ET=function(e){return FT(e)},HT=function(e){return{$:5,a:e}},VT=function(e){return{$:11,a:e}},BT={$:15},UT=function(e){return{$:9,a:e}},RT={$:10},IT={$:7},qT={$:8},OT=function(e){var r=e,n=a(_n,s(function(t,o){return y(o,t)}),r.aK);return{a4:Dr(r.aK),d3:function(t){return a(fe,0,a(he,If,Mr(a(gr,function(o){var c=o.a;return oe(c,t)},n))))}}},GT=s(function(e,r){return{N:r.c2.N,qB:e.qB,hw:{n3:a(nr,e.v,UT),pd:a(he,function(n){return{bv:n.bv,ih:n.ih}},r.eq)},Q:r.Q,f:r.f,ga:e.ga,de:r.de,nR:r.nR,fk:e.v(BT),kl:a(nr,e.v,P3),km:e.v(Lp),gB:e.gB,kn:a(nr,e.v,ap),aY:a(nr,e.v,jp),ko:function(n){return e.v(HT(n))},kp:a(nr,e.v,VT),kq:e.v(RT),kr:e.v(IT),gC:a(nr,e.v,kp),ks:e.v(qT),dX:e.dX,ku:a(nr,e.v,cp),fl:e.fl,tg:a(nr,e.v,wp),aL:r.aL,bL:r.bL,ax:OT(r.f),uF:e.uF,P:r.P,e:r.e,c_:r.c_,ca:e.gM,pF:r.pF}}),WT=s(function(e,r){switch(e){case 3:return{pC:r.bM,pD:.5*(r.bS+r.bx)};case 2:return{pC:r.bF,pD:.5*(r.bS+r.bx)};case 0:return{pC:.5*(r.bF+r.bM),pD:r.bS};default:return{pC:.5*(r.bF+r.bM),pD:r.bx}}}),fW=1,NT={mv:0,gg:0,dH:0,fb:0,n9:0,u2:"normal",ee:0},al=D(function(e,r,n){switch(e){case 0:return r;case 1:return .5*(r+n);default:return n}}),JT=K(function(e,r,n,t){switch(r){case 0:return y(v(al,n,e.bF,e.bM),e.bS-t);case 1:return y(v(al,n,e.bF,e.bM),e.bx+t);case 2:return y(e.bF-t,v(al,n,e.bS,e.bx));default:return y(e.bM+t,v(al,n,e.bS,e.bx))}}),nl=function(e){switch(e){case 0:return"0";case 1:return"-50%";default:return"-100%"}},C5=function(e){var r=e.rO,n=e.pK,t=e.eE,o=e.bv,c=(function(){switch(t){case 0:return"-100%";case 1:return"0";case 2:return nl(n);default:return nl(n)}})(),i=(function(){switch(t){case 0:return nl(n);case 1:return nl(n);case 2:return"-100%";default:return"0"}})(),u="translate("+(i+(", "+(c+")"))),$=x(JT,o,t,n,r),l=$.a,d=$.b;return f([ir(wt),Xr(w(l)),Ma(w(d)),a(F,"transform",u)])},ZT=s(function(e,r){return a(X,f([O(Y(C5({pK:1,bv:r.bv,eE:r.eE,rO:6}),f([a($r,w(7),w(14)),je(e.pZ),ve(e.rD),tr(ga.sD),rt(se(e.g7)),Se,Ur(Xc),a(F,"gap","12px"),a(F,"width","max-content"),xs(NT),Rs(w(360)),Or(Ze(1.45))])))]),f([a(xr,S,f([$e(r.jX)])),(function(){var n=r.oL;if(n.$===1)return $e("");var t=n.a;return a(xr,f([O(f([ve(e.rD)]))]),f([$e(t)]))})()]))}),XT=s(function(e,r){return{hd:0,cH:0,u2:Y(J(r),e)}}),KT=XT("deg"),YT=function(e){var r=e.u2;return{lk:0,u2:a(Kc,"rotate",f([r]))}},QT=D(function(e,r,n){return a(X,f([O(f([ir(wt),Xr(w(n.pC)),Ma(w(n.pD)),je(e.pZ),xe(w(10)),ze(w(10)),rt(se(e.g7)),a(F,"transform-origin","top left"),Z$(YT(KT((function(){switch(r){case 3:return-45;case 2:return 135;case 1:return 45;default:return-135}})())))]))]),S)}),_5=s(function(e,r){return a(X,S,f([v(QT,e,r.eE,a(WT,r.eE,r.bv)),a(ZT,e,r)]))}),eM=s(function(e,r){var n=r;if(n.$){var t=n.a,o=t.V;switch(o.$){case 1:return a(_5,e,t);case 2:return a(_5,e,t);case 0:return $e("");default:return $e("")}}else return $e("")}),rM=480,aM=s(function(e,r){return e.hA}),nM=be("min-width"),tM=K(function(e,r,n,t){var o=n?Ie(f([je(a(re,function(c){return c.bt},e)),ve(a(re,a(Ge,function(c){return c.bt},Eu),e))])):ve(a(re,function(c){return c.lh},e));return a(X,f([O(f([Se,qr(Ts),Qe(we),a($r,w(0),w(12)),ze(w(32)),Mu(Tu),o]))]),f([a(xr,f([O(f([vr(w(13)),q$(se(1))]))]),f([$e(t.iL+(": "+t.jX))])),a(xr,f([O(f([vr(w(13)),nM(w(70)),Cr(se(0)),X$(St)]))]),f([$e(a(fe,"",a(he,rl(r.kv),a(aM,t,r))))]))]))}),oM=function(e){return{f0:S3,fd:320,kK:"Type a command\u2026",v:e,lt:{sL:400,u6:50}}},cM=function(e){if(a(uu,e.ca,e.N)){var r=a(tM,e.e,e.qB),n=Fu(e.e),t=oM(e.kl);return a(X,S,f([v(mo,e.e,e.qB,{bv:fo(6),lP:a(X,f([O(f([xe(w(rM))]))]),f([ra(Y$,t,n,S,z,r,S,e.N)])),bE:6,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(6),o9:Ra(6),pb:"Command palette",v:e.aY}),x(Os,t,n,r,e.N)]))}else return $e("")},iM=s(function(e,r){return a(X,f([a(We,"role","status"),O(Y(C5({pK:r.pK,bv:r.bv,eE:r.eE,rO:6}),f([a($r,ti.oP,ti.st),tr(ga.sD),je(a(re,function(n){return n.bt},e)),ve(a(re,function(n){return v(ys,.6,n.bt,n.lh)},e)),Ie(fa.pb),xs(Em),_s.re,rt(se(Pt.pd)),a(F,"pointer-events","none"),b5(p5(f([y(0,f([a(Yo,"opacity","0")])),y(8,f([a(Yo,"opacity","1")])),y(92,f([a(Yo,"opacity","1")])),y(100,f([a(Yo,"opacity","0")]))]))),d5(m5(x3)),a(F,"animation-fill-mode","forwards")])))]),f([$e(r.T)]))}),uM=function(e){var r=e.hw.pd;if(r.$===1)return $e("");var n=r.a.ih,t=r.a.bv;return a(iM,e.e,{pK:1,bv:t,eE:1,T:n?"Nothing to Reset":"Use the browser's Back button to undo"})},fM=function(e){var r=s(function(n,t){return"inset 0 0 "+(J(n)+("px 0 "+pe(a(mr,t,e))))});return a(Lr,", ",f([a(r,90,.22),a(r,30,.4),a(r,8,.65)]))},y5=function(e){switch(e){case 0:return z;case 1:return E(v(Ir,1/6,1,.5));default:return E(v(Ir,1/3,1,.5))}},$M=function(e){var r=y5(e.nR);if(r.$===1)return $e("");var n=r.a;return a(X,f([O(f([ir(wt),Ma(le),Xr(le),St(le),at(le),a(F,"pointer-events","none"),a(F,"box-shadow",fM(n))]))]),S)},$W=0,P5=a(Pu,0,"rem"),lM=function(e){if(!Ct(e.uF)||e.pF)return $e("");var r=e.qB.$7,n=e.qB.tA,t=pe(n.sj?a(Ee,function(c){return c.lh},e.e):a(Ee,function(c){return c.bt},e.e)),o=a(Lr," ",f(["drop-shadow(1px 0 "+(t+")"),"drop-shadow(-1px 0 "+(t+")"),"drop-shadow(0 1px "+(t+")"),"drop-shadow(0 -1px "+(t+")")]));return a(X,f([O(f([ir(Tn),Ma(le),Xr(le),xe(P5(2)),ze(P5(2)),a(F,"pointer-events","none"),a(F,"transform","translate("+(J(n.pC+.5*r.lt)+("px, "+(J(-n.pD+.5*r.jO)+"px)")))),ve(n.sj?a(re,function(c){return c.bt},e.e):a(re,function(c){return c.lh},e.e)),a(F,"filter",o),rt(se(Pt.a7+1))]))]),f([_r.tA]))},vM=function(e){return{$:0,a:e}},sM=ph,lW=te,dM=function(e){return a(A,e,ae(0))};function Ns(){return Uc(Js())}function Js(){return x(Bc,D(function(e,r,n){return{hl:r,dD:n,cM:e}}),a(k,"duration",N),a(k,"callCount",qi),a(k,"children",dM(function(e){return Ns()})))}var S5=Ns();Ns=function(){return S5};var bM=Js();Js=function(){return bM};var pM=function(e){return a(Je,e,a(Oc,f(["detail"]),v(Xn,s(function(r,n){return{gH:r,az:n}}),a(k,"recordingStartTime",N),a(k,"tickSnapshots",sM(v(Xn,s(function(r,n){return{jG:n,dt:r}}),a(k,"timestamp",N),a(k,"flameGraph",S5)))))))},mM=function(e){var r=e.td,n=e.t0;return v(jn,"profiler-element",Y(f([a(ua,"result",pM(r))]),n?f([a(We,"running","")]):S),S)},hM=function(e){return mM({td:vM,t0:oe(e,b$)})},gM=function(e){return Ye(e)?{u2:"none"}:{u2:a(Lr,", ",e)}},CM=a(nr,be("font-family"),gM),Zs=s(function(e,r){return a(C$,s(function(n,t){var o=t,c=a(ar,n,e);if(c.$===1)return o;var i=c.a;return{hl:o.hl-i.hl,dD:a(Zs,i.dD,o.dD),cM:o.cM-i.cM}}),r)}),x5=s(function(e,r){var n=e.cO,t=e.cW,o=r.az,c=t?a(fe,Be,a(he,function(u){return u.jG},a(wa,t-1,o))):Be,i=a(fe,Be,a(he,function(u){return u.jG},a(wa,n,o)));return a(Zs,c,i)}),_M=be("max-height"),j5=function(e){return v(kf,D(function(r,n,t){return a(M,n,t)}),S,e)},ci=function(e){return{$:9,a:e}},k5=function(e){var r=(function(n){return 1-n.iZ/n.ic})(v(me,s(function(n,t){var o=a(ja,t.gx,st(n));return{ic:t.ic+t.g6,gx:t.gx+1,iZ:t.iZ+o/(t.gx-1)*t.g6,g6:t.g6*.7}}),{ic:0,gx:10,iZ:0,g6:1},a(ao,8,yc(e))));return{aQ:1,aT:r,C:.35,a1:.45}},yM=function(e){return a(ua,"mouseout",ae(e))},PM=function(e){return a(ua,"mouseover",ae(e))},SM=Fr(function(e,r,n,t,o,c){var i=n>0?c/n*100:0,u=oe(t,E(o)),$=ur(u?e.lh:k5(o)),l=!oe(t,z),d=Ze(l&&!u?.3:1);return a(X,f([O(f([ir(Wo),Zo(w(r*16)),ze(w(24)),Or(w(24)),ia(sn),Ua(d),Mn(f([je(ur(e.k9)),ve(ur(e.lh))]))])),PM(ci(E(o))),yM(ci(z))]),f([a(X,f([O(f([ir(Tn),Ma(le),Xr(w(r*16)),xe(er(i)),ze(er(100)),je($)]))]),S),a(xr,f([O(f([ir(Wo),Zo(w(6)),rt(se(1))]))]),f([$e(o)]))]))}),xM=Le(function(e,r,n,t,o){var c=o.a,i=o.b.dD,u=o.b.cM;return a(M,wr(SM,e,r,n,t,c,u),R(w5,e,r+1,n,t,i))}),w5=Le(function(e,r,n,t,o){return a(fn,x(xM,e,r,n,t),a(zu,Pn,Qa(o)))}),jM=Le(function(e,r,n,t,o){var c=v(lu,r,n,t),i=c.a,u=i.b,$=c.b,l=$.b,d=a(x5,{cO:l,cW:u},t),b=a(fe,0,$$(a(W,function(g){var C=g.cM;return C},j5(d))));return a(X,f([O(f([ln(w(8)),Fm(No),_M(w(300)),je(ur(e.lb)),ve(ur(e.li))]))]),R(w5,e,0,b,o,d))}),L5=function(e){return v(L$,"alignSelf","align-self",e(D$))},kM={q2:0,u2:"block"},wM=be("flex-start"),Qo=Pr("height"),D5=ua,ec=bo("g"),tl=bo("line"),T5=s(function(e,r){var n=r.az,t=function(o){return o<0?Be:a(fe,Be,a(he,function(c){return c.jG},a(wa,o,n)))};return a(Zs,t(e-1),t(e))}),M5=function(e){return e.$===-2},z5=function(e){return M5(e)?0:a(fe,0,$$(a(W,function(r){var n=r.dD;return 1+z5(n)},j5(e))))},LM=function(e){var r=Da(e.az);return a(fe,0,$$(a(W,function(n){return z5(a(T5,n,e))},a(Cn,1,r-1))))},DM=function(e){return a(zu,te,e)},ol=s(function(e,r){var n=r.gH,t=r.az;return e?a(fe,n,a(he,function(o){return o.dt},a(wa,e-1,t))):n}),A5=s(function(e,r){var n=a(fe,r.gH,a(he,function(t){return t.dt},a(wa,e,r.az)));return n-a(ol,e,r)}),TM=function(e){var r=Da(e.az),n=DM(a(W,function(o){return a(A5,o,e)},a(Cn,1,r-1))),t=a(Pe,0,Kt(Dr(n)*.95)-1);return a(fe,16.7,Mr(a(pt,t,n)))},ii=bo("rect"),Bu=Pr("stroke"),Uu=Pr("stroke-width"),MM=function(e){return{$:5,a:e}},zM=function(e){return{$:6,a:e}},AM={aR:0,u2:"ew-resize"},cl=Pr("x1"),il=Pr("x2"),ul=Pr("y1"),fl=Pr("y2"),FM=K(function(e,r,n,t){var o=n.a,c=n.b,i=a(ca,r,$n.iQ),u=a(ca,r,$n.iD),$=function(T){return a(Je,function(U){return T({f_:U})},a(k,"clientX",N))},l=s(function(T,U){return a(ec,S,f([a(tl,f([cl(J(T)),ul("0"),il(J(T)),fl(J(i)),Bu("transparent"),Uu(J(a(ca,r,10))),nt(f([ia(AM)])),a(D5,"pointerdown",$(U))]),S),a(tl,f([cl(J(T)),ul("0"),il(J(T)),fl(J(i)),Bu(pe(e.kx.tN)),Uu(J(a(ca,r,1))),nt(f([Lt(lr)]))]),S)]))}),d=v(lu,r,a(Nc,o,c),t),b=d.a,g=b.a,C=b.b,p=d.b,m=p.a,P=p.b,_=g,j=m,L=(function(){if(o.$){var T=o.a,U=(function(){return T?a(fe,t.gH,a(he,function(I){return I.dt},a(wa,P,t.az))):a(ol,C,t)})();return a(tl,f([cl(J(U)),ul("0"),il(J(U)),fl(J(u)),Bu(pe(e.kx.tN)),Uu(J(a(ca,r,2))),nt(f([Lt(lr)]))]),S)}else return a(ec,S,S)})();return a(ec,S,f([a(l,_,MM),a(l,j,zM),L]))}),F5=D(function(e,r,n){return oe(r,E(n))?pe(e.lh):pe(k5(n))}),E5=s(function(e,r){if(e.$)return 1;var n=e.a;return oe(n,r)?1:.3}),H5=function(e){return a(ua,"mouseout",ae(e))},V5=function(e){return a(ua,"mouseover",ae(e))},Xs=Pr("opacity"),Ks=Rb,B5=bo("title"),rc=Pr("width"),ac=Pr("x"),nc=Pr("y"),EM=s(function(e,r){var n=r.m1,t=r.mk,o=r.jX,c=r.jO,i=r.lt,u=r.pD,$=r.pC,l=o+(" ("+(a(Hu,2,t)+"ms)")),d=a(E5,e.ck,o),b=v(F5,e.ds,e.ck,o),g=a(ii,f([ac(J($)),nc(J(u)),rc(J(i)),Qo(J(c)),Tt(b),Xs(J(d)),V5(ci(E(o))),H5(ci(z))]),f([a(B5,S,f([Ks(l)]))])),C=n?f([a(ii,f([ac(J($)),nc(J(u)),rc(J(i)),Qo(J(a(ca,e.a6,2))),Tt(pe(e.ds.kx.tN)),nt(f([Lt(lr)]))]),S)]):S;return a(M,g,C)}),U5=K(function(e,r,n,t){return v(me,s(function(o,c){var i=o.a,u=o.b,$=c.a,l=c.b,d=u.cM/e.fi,b=ce(d,e.cD)>0,g=x(U5,e,r+1,$,u.dD),C=a(Oe,e.cD,d),p=a(EM,e,{mk:u.cM,jO:C,m1:b,jX:i,lt:e.iP,pC:e.dF+r*e.iP,pD:e.cD-$-C});return y($+C,Y(p,Y(g,l)))}),y(n,S),a(zu,Pn,Qa(t))).b}),HM=s(function(e,r){var n=e.py/e.fi,t=a(Oe,e.cD,n),o=ce(n,e.cD)>0,c=a(ca,e.a6,1),i=a(Pe,0,e.o8-c),u=a(Oe,i,a(ca,e.a6,$n.o7)),$=a(ii,f([ac(J(e.dF)),nc(J(e.cD-t)),rc(J(u)),Qo(J(t)),Tt(pe(e.ds.lf)),nt(f([Lt(lr)]))]),S),l=a(ca,e.a6,2),d=o?f([a(ii,f([ac(J(e.dF)),nc("0"),rc(J(u)),Qo(J(l)),Tt(pe(e.ds.kx.tN)),nt(f([Lt(lr)]))]),S)]):S,b=a(Pe,0,i-u),g=e.dF+u,C=(function(){if(b<=0||e.j7<=0||M5(r))return S;var p=b/e.j7;return x(U5,{dF:g,ck:e.ck,fi:e.fi,cD:e.cD,iP:p,ds:e.ds,a6:e.a6},0,0,r)})();return a(M,$,Y(d,C))}),VM=s(function(e,r){var n=function(i){return a(fe,0,a(he,function(u){return u.dt},a(wa,i,r.az)))},t=a(Pe,1,a(p$,e.bF,r)-1),o=Da(r.az),c=a(Oe,o-1,a(p$,e.bM,r)+1);return a(gr,function(i){var u=a(ol,i,r),$=n(i);return ce($,e.bF)>-1&&ce(u,e.bM)<1},a(Cn,t,c))}),BM=Le(function(e,r,n,t,o){var c=a(VM,r,t),i=a(ca,r,$n.iD),u=LM(t),$=a(Pe,33.3,TM(t)),l=$>0?$/i:1,d=a(fn,function(p){var m=a(A5,p,t);return a(HM,{dF:a(ol,p,t),ck:o,j7:u,fi:l,cD:i,ds:e,o8:m,py:m,a6:r},a(T5,p,t))},c),b=16.7/l,g=a(tl,f([cl(J(r.bF)),il(J(r.bM)),ul(J(i-b)),fl(J(i-b)),Bu(pe(e.kx.vr)),Uu(J(a(ca,r,1))),nt(f([Lt(lr)]))]),S),C=a(ii,f([ac(J(r.bF)),nc("0"),rc(J(r.bM-r.bF)),Qo(J(i)),Tt(pe(e.lb))]),S);return a(ec,S,f([C,a(ec,S,d),g,x(FM,e,r,n,t)]))}),UM=Pr("font-size"),RM=bo("text"),IM=s(function(e,r){var n=e.lH,t=e.oa,o=e.gf,c=.6*o,i=Kt((n-t)/c);return ce(nn(r),i)<1?r:i<=1?"":a(Wi,i-1,r)+"\u2026"}),qM=Fr(function(e,r,n,t,o,c){var i=c.hl,u=c.cM,$=a(ca,r,$n.oE),l=.3*$,d=n.f8*$,b=a(E5,t,o),g=.6*$,C=v(F5,e,t,o),p=a(Lr," > ",De(a(M,o,n.fY))),m=p+(" ("+(rr(i)+("x, "+(a(Hu,2,u)+"ms)"))));return a(ec,f([V5(ci(E(o))),H5(ci(z))]),f([a(B5,S,f([Ks(m)])),a(ii,f([ac(J(n.ef)),nc(J(d)),rc(J(u)),Qo(J($)),Tt(C),Bu(pe(e.k8)),Uu(J(a(ca,r,1))),Xs(J(b))]),S),a(RM,f([ac(J(n.ef+l)),nc(J(d+.7*$)),Tt(pe(e.lh)),UM(J(g)),Xs(J(b))]),f([Ks(a(IM,{lH:u,gf:g,oa:l},m))]))]))}),R5=Le(function(e,r,n,t,o){return v(me,s(function(c,i){var u=c.a,$=c.b,l=i.a,d=i.b,b=R(R5,e,r,{fY:a(M,u,n.fY),f8:n.f8+1,ef:l},t,$.dD),g=wr(qM,e,r,H(n,{ef:l}),t,u,$);return y(l+$.cM,a(M,g,Y(b,d)))}),y(n.ef,S),a(zu,function(c){var i=c.a;return i},Qa(o))).b}),OM=Le(function(e,r,n,t,o){var c=a(ca,r,$n.iD),i=v(lu,r,n,t),u=i.a,$=u.a,l=u.b,d=i.b,b=d.b;return a(ec,f([Vm("translate("+(J($)+(", "+(J(c)+")"))))]),R(R5,e,r,{fY:S,f8:0,ef:0},o,a(x5,{cO:b,cW:l},t)))}),GM=function(e){return{$:1,a:e}},WM=x(Bc,D(function(e,r,n){return GM({nT:n/$n.iR,oF:e,oG:r})}),a(k,"deltaX",N),a(k,"deltaY",N),a(k,"offsetX",N)),NM=function(e){var r=e.bM-e.bF;return a(Lr," ",a(W,J,f([e.bF,0,r,a(ca,e,$n.iQ)])))},JM=Le(function(e,r,n,t,o){var c=r.bM-r.bF,i=a(Ps,f([rc(J($n.iR)),Qo(J($n.iQ)),Ss(NM(r)),a(D5,"wheel",WM),nt(f([je(ur(e.D)),Wm(kM)]))]),f([R(BM,e,r,n,t,o),R(OM,e,r,n,t,o)])),u=function(p){return a(X,f([O(Y(f([ir(Tn),Ma(le),at(le),Lt(lr),a(F,"backdrop-filter","blur(3px)"),a(F,"-webkit-backdrop-filter","blur(3px)")]),p))]),S)},$=function(p){return c?v(dr,0,1,(p-r.bF)/c):0},l=v(lu,r,n,t),d=l.a,b=d.a,g=l.b,C=g.a;return a(X,f([O(f([ir(Wo),L5(wM)]))]),f([i,u(f([Xr(le),xe(er($(b)*100))])),u(f([St(le),xe(er((1-$(C))*100))]))]))}),ZM=s(function(e,r){var n=Da(r.az),t=bt(e),o=(function(){var u=a(wa,n-1,r.az);if(u.$)return 0;var $=u.a;return $.dt-r.gH})(),c=o>=1e3?a(Hu,2,o/1e3)+" s":a(Hu,0,o)+" ms",i=rr(n)+(" ticks \xB7 "+c);return a(X,f([O(f([Se,Qe(we),ze(w(24)),a($r,w(4),w(8))]))]),f([a(xr,f([O(f([ve(ur(t.lh))]))]),f([$e(i)]))]))}),XM=s(function(e,r){var n=bt(e);return a(X,f([O(f([Se,Ur(ha),ve(ur(n.li)),CM(f(["monospace"])),vr(w(12)),a(F,"user-select","none")]))]),f([a(ZM,e,r.d0),R(JM,n,r.a6,r.bl,r.d0,r.ck),R(jM,n,r.a6,r.bl,r.d0,r.ck)]))}),KM=s(function(e,r){if(r.$===3){var n=r.a;return E(a(XM,e,n))}else return z}),YM=function(e){if(e.ca.eV){var r=(function(){var t=a(KM,e.e,e.aL);if(t.$)return $e("");var o=t.a;return v(mo,e.e,e.qB,{bv:fo(3),lP:a(_u,e.gC,o),bE:3,bG:e.f,a4:e.ax.a4,d2:e.ax.d3(3),o9:Ra(3),pb:"Profile",v:e.aY})})(),n=a(_u,e.gC,hM(e.aL));return a(X,S,f([n,r]))}else return $e("")},QM=Ee(a(Ge,function(e){return e.kx},function(e){return e.tN})),Ys=s(function(e,r){return pe(a(mr,r,QM(e.e)))}),ez=D(function(e,r,n){var t=f([a(F,"background-color",a(Ys,e,.28)),a(F,"-webkit-backdrop-filter","blur(18px)"),a(F,"backdrop-filter","blur(18px)")]),o="radial-gradient(circle 16px at 100% 0%, transparent 15px, #000 16px)",c=function(i){return a(X,f([O(Y(f([ir(Tn),xe(w(16)),ze(w(16)),a(F,"pointer-events","none"),a(F,"-webkit-mask",o),a(F,"mask",o)]),Y(t,i)))]),S)};return a(X,f([O(Y(f([ir(wt),at(w(r)),Xr(w(r)),rt(se(Pt.ob)),a(F,"pointer-events","auto"),Se,Qe(we),a(F,"gap","12px"),a(F,"padding","8px 14px"),a(F,"border-radius","0 21px 0 0")]),t)),a(wu,"click",ae(y(e.fk,!0)))]),Y(n,f([c(f([a(F,"top","-16px"),a(F,"left","0")])),c(f([a(F,"bottom","0"),a(F,"right","-16px")]))])))}),I5={$:3},rz={$:2},vW=2,sW=1,dW=0,Qs=function(e){var r=e.b;return C3(r)},q5=function(e){var r=e.a;return oe(r,nu)},az=be("min-height"),nz=be("stretch"),tz=function(e){return{$:0,a:e}},oz=function(e){var r=Qs(e.uF)-1,n=Gc(e.uF),t=n||r<=0;return a(ai,f([Ko("range"),ws("0"),ks(rr(r)),Ds("1"),ni(rr(Q$(e.uF))),ju(t),Lu(function(o){return e.dX(tz(a(fe,0,Ni(o))))}),Xo("ui-slider"),O(f([xe(w(200)),Cr(se(0)),ze(w(24)),a(F,"-webkit-appearance","none"),a(F,"appearance","none"),je(ri),ia(sn),vn(lr),Ua(Ze(t?.4:1)),a(F,"--slider-fill",J(r>0?100*Q$(e.uF)/r:0)+"%")]))]),S)},cz=function(e){var r=e.e,n=(function(){var $=function(C){return C===1||C===2},l=function(C){switch(C){case 0:return rz;case 1:return I5;default:return jv}},d=function(C){switch(C){case 0:return"Record";case 1:return"Play";default:return"Pause"}},b=function(C){switch(C){case 0:return Gc(e.uF);case 1:return Wv(e.uF);default:return n3(e.uF)}},g=function(C){switch(C){case 0:return _r.tM;case 1:return _r.ty;default:return _r.tr}};return a(K$,r,{q1:!1,mO:g,sl:b,sm:d,sn:f([0,1,2]),jX:"Tape transport",tf:function(C){return b(C)||$(C)&&q5(e.uF)?e.fk:e.dX(l(C))},tg:e.tg,dY:0,t9:function(C){return function(p){return jo}},oL:function(C){return z},uO:0})})(),t=a(X,f([O(f([Se,Ur(ha),a(F,"gap","3px")]))]),f([a(X,f([O(f([Se,Ur(Xc),Qe(we),a(F,"gap","8px")]))]),f([a(xr,f([O(f([vr(w(12)),ve(a(re,function($){return $.li},r)),a(F,"white-space","nowrap")]))]),f([$e("Record from start")])),a(r5,r,{q1:!1,m6:e.bL,jX:"Record from the first frame (applies on reload)",n6:e.ks})])),a(xr,f([O(f([vr(w(10)),ve(a(re,function($){return $.lf},r)),a(F,"white-space","nowrap")]))]),f([$e("applies on reload")]))])),o=Gc(e.uF)?a(X,f([O(f([xe(w(200)),Cr(se(0)),Se,Qe(we),qr(we),a(F,"gap","8px"),vr(w(13)),ve(a(re,function($){return $.lh},r)),a(F,"white-space","nowrap")]))]),f([a(xr,f([O(f([xe(w(8)),ze(w(8)),a(F,"border-radius","50%"),a(F,"background-color",a(Ys,e,1))]))]),S),$e("Recording\u2026")])):Ct(e.uF)?oz(e):a(X,f([O(f([xe(w(200)),Cr(se(0))]))]),S),c=a(X,f([O(f([L5(nz),xe(w(1)),az(w(28)),a(F,"background-color",pe(a(mr,.18,a(Ee,function($){return $.lh},r))))]))]),S),i=(function(){var $=f([xe(w(100)),Cr(se(0)),Se,Qe(we),vr(w(12)),ve(a(re,function(l){return l.li},r)),a(F,"font-variant-numeric","tabular-nums")]);return q5(e.uF)?a(X,f([O(Y($,f([qr(we)])))]),f([$e("\u2014 / \u2014")])):Gc(e.uF)?a(X,f([O(Y($,f([qr(we)])))]),f([$e(rr(Qs(e.uF)))])):a(X,f([O($)]),f([a(xr,f([O(f([Qc(se(1)),a(F,"text-align","right")]))]),f([$e(rr(Q$(e.uF)+1))])),a(xr,f([O(f([a(F,"padding","0 4px")]))]),f([$e("/")])),a(xr,f([O(f([Qc(se(1)),a(F,"text-align","left")]))]),f([$e(rr(Qs(e.uF)))]))]))})(),u=a(jt,f([kt(e.fl),a(We,"aria-label","Close tape"),O(f([xe(w(32)),ze(w(32)),ln(w(5)),Cr(se(0)),tr(er(50)),ei(le),je(ri),ve(Hm),ia(sn),Se,Qe(we),qr(we),vn(lr),Ua(Ze(.9)),a(F,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),Mn(f([Ua(Ze(1)),je(x(Cs,255,255,255,.18))]))]))]),f([_r.qN]));return a(X,f([O(f([Se,Ur(Xc),Qe(we),a(F,"gap","12px")]))]),f([n,o,i,c,t,u]))},iz=function(e){return v(ez,e,6,f([cz(e)]))},uz=function(e){return a(Br,4,e.f)&&!e.pF?iz(e):$e("")},bW=3,O5=function(e){return H(e,{kY:!0})},fz=function(e){var r=(function(){var n=e.qB.kv===1?O5(Gs("KeyP")):O5(Ws("KeyP"));return a(rl,e.qB.kv,n)})();return a(B$,e.e,{i2:function(n){return n.bt},q1:!1,mO:_r.sE,jU:a(Br,6,e.f),jX:"Command palette",gA:e.km,du:a(Mt,e.tg,{eE:3,jX:"Command palette",oL:E(r)})})},$z=function(e){return a(Yc,e.e,{q1:!1,mO:_r.uh,bE:7,jX:"Device preview",bG:e.f,o9:Ra(7),v:e.aY,du:a(Mt,e.tg,{eE:3,jX:"Device preview",oL:z})})},lz=f([0,1,2]),vz=function(e){switch(e){case 0:return _r.u_;case 1:return _r.ts;default:return _r.qA}},sz=function(e){var r=(function(){var n=e.qB.kv===1?Gs("KeyM"):Ws("KeyM");return a(rl,e.qB.kv,n)})();return a(K$,e.e,{q1:Ct(e.uF),mO:vz,sl:en(e.nR),sm:y2,sn:lz,jX:"Mode",tf:e.kp,tg:e.tg,dY:1,t9:s(function(n,t){return a(fe,t.bt,y5(n))}),oL:function(n){return E(r)},uO:3})},dz=function(e){return f([a(wu,"pointerdown",ae(y(e,!0))),a(wu,"wheel",ae(y(e,!0))),a(wu,"keydown",a(A,function(r){return r.jt||r.j9||r.i3?Qn("let modifier-bearing combos reach global decoders"):a(Qi,r.jV,f(["Meta","Control","Shift","Alt"," ","Escape"]))?Qn("bare modifiers, Space, and Escape (global stop) \u2014 let bubble"):ae(y(e,!0))},R(Rc,K(function(r,n,t,o){return{i3:o,jt:n,jV:r,j9:t}}),a(k,"key",ke),a(k,"ctrlKey",ne),a(k,"metaKey",ne),a(k,"altKey",ne))))])},bz=function(e){return a(B$,e.e,{i2:function(r){return r.bt},q1:!1,mO:_r.vs,jU:e.pF,jX:"Zen mode",gA:e.kr,du:a(Mt,e.tg,{eE:3,jX:"Zen mode",oL:z})})},pz=function(e){var r=e.ca,n=r.hW?f([bz(e)]):S,t=e.e,o=r.cj?f([a(Yc,t,{q1:!1,mO:_r.kx,bE:5,jX:"Theme",bG:e.f,o9:Ra(5),v:e.aY,du:a(Mt,e.tg,{eE:3,jX:"Theme",oL:z})})]):S,c=r.dK?f([sz(e)]):S,i=a(Vr,te,f([r.gk?E(a(Yc,t,{q1:Ct(e.uF),mO:_r.pG,bE:2,jX:"FPS meter",bG:e.f,o9:Ra(2),v:e.aY,du:a(Mt,e.tg,{eE:3,jX:"FPS meter",oL:z})})):z,r.gl?E(a(Yc,t,{q1:!1,mO:_r.qB,bE:1,jX:"Inputs",bG:e.f,o9:Ra(1),v:e.aY,du:a(Mt,e.tg,{eE:3,jX:"Inputs",oL:z})})):z,(function(){if(r.hV){var m=a(Br,4,e.f);return E(a(B$,t,{i2:Ra(4),q1:!1,mO:_r.uF,jU:m,jX:m?"Close tape":"Tape",gA:e.fl,du:a(Mt,e.tg,{eE:3,jX:"Tape",oL:z})}))}else return z})()])),u=f([Se,Ur(ha),Qe(we),a(F,"gap","6px")]),$=function(m){return a(X,f([O(u)]),m)},l=r.dJ?f([$z(e)]):S,d=r.gj?f([a(Yc,t,{q1:!1,mO:_r.rn,bE:0,jX:"Configurations",bG:e.f,o9:Ra(0),v:e.aY,du:a(Mt,e.tg,{eE:3,jX:"Configurations",oL:z})})]):S,b=a(uu,r,e.N)?f([fz(e)]):S,g=a(gr,a(nr,hv,Ye),f([d,c,l,o,b,i])),C=a(X,f([O(f([Se,Ur(ha),Qe(we),a(F,"gap","24px"),e.pF?Ie(f([Z$(Vs(w(-72))),Ua(Ze(0)),a(F,"pointer-events","none")])):Ie(f([Z$(Vs(le)),Ua(Ze(1)),a(F,"pointer-events","auto")])),a(F,"transition","transform 240ms cubic-bezier(0.33, 1, 0.68, 1), opacity 240ms cubic-bezier(0.33, 1, 0.68, 1)")])),a(We,"aria-hidden",e.pF?"true":"false")]),a(W,$,g)),p=a(Vr,te,f([Ye(n)?z:E(a(X,f([O(Y(u,f([a(F,"pointer-events","auto")])))]),n)),Ye(g)?z:E(C)]));return Ye(p)?$e(""):a(X,Y(f([O(f([ir(Tn),Ma(w(12)),Xr(w(12)),xe(w(48)),Se,Ur(ha),Qe(we),a(F,"gap","24px"),a(F,"pointer-events","none"),rt(se(Pt.r3))]))]),dz(e.fk)),p)},mz=function(e){if(!Gc(e.uF)&&!Ct(e.uF)||e.pF)return $e("");var r=6,n=100,t=J(-n)+"px",o="linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",c=21,i=n+r,u=i+c;return a(X,f([O(f([ir(wt),Ma(le),Xr(le),St(le),at(le),a(F,"overflow","hidden"),a(F,"pointer-events",Ct(e.uF)?"auto":"none"),rt(se(Pt.ob-1))])),kt(e.dX(Wv(e.uF)?jv:I5))]),f([a(X,f([O(f([ir(Tn),a(F,"top",t),a(F,"left",t),a(F,"right",t),a(F,"bottom",t),a(F,"pointer-events","none"),a(F,"border",J(i)+"px solid transparent"),a(F,"border-radius",J(u)+"px"),a(F,"background-color",a(Ys,e,.28)),a(F,"-webkit-backdrop-filter","blur(18px)"),a(F,"backdrop-filter","blur(18px)"),a(F,"-webkit-mask",o),a(F,"-webkit-mask-composite","xor"),a(F,"mask",o),a(F,"mask-composite","exclude")]))]),S)]))},hz=s(function(e,r){var n=a(GT,e,r);return a(X,f([Xo("play-hud"),O(f([ir(wt),Ma(le),Xr(le),St(le),at(le),a(F,"pointer-events","none")]))]),Y(f([Ib(n.e),a(AT,".play-hud",n.e),zT(n.e),DT(n.e),$M(n),UL(n),uT(n),cT(n),mz(n),pz(n),lM(n),uz(n),a(eM,ET(n.e),n.c_),YM(n),LT(n),MD(n),cM(n),uM(n),hm(n.f)]),n.ga.kw))}),gz=s(function(e,r){if(e.$===1)return a(br,f([a(B,"display","contents")]),f([a(br,f([a(B,"display","contents")]),f([r]))]));var n=e.a,t=function(c){return J(c)+"px"},o=a(fu,n.va,n.jz);return a(br,f([a(B,"position","fixed"),a(B,"inset","0"),a(B,"display","flex"),a(B,"align-items","center"),a(B,"justify-content","center"),a(B,"background-color",n.pY)]),f([a(br,f([a(B,"position","relative"),a(B,"width",t(n.jz.lt)),a(B,"height",t(n.jz.jO)),a(B,"border-radius",t(n.qK)),a(B,"overflow-x","hidden"),a(B,"overflow-y","auto"),a(B,"box-shadow","0 24px 64px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16)"),a(B,"transform","scale("+(J(o)+")")),a(B,"transform-origin","center")]),f([r]))]))}),Cz=s(function(e,r){var n=Dc(r.uF),t=v(Lo,fk,Be,n.cT),o=Uv(n),c=(function(){var P=e.iU;if(P.$)return Ln(r.bD);var _=P.a;return a(fe,Ln(r.bD),a(he,function(j){return _(j.bG)},a(oa,function(j){return a(ar,j,n.cT)},Mr(r.aU))))})(),i=Iv(r.bD),u=a(Vr,R(Uw,e,r,n,o,i),r.aU),$={mz:r.aG,cT:u,O:n.O,oc:t,gM:r.eG,e:c},l=e.jR($),d=Kn(a(hz,{qB:a(a3,r,n),ga:l,gB:Xj,dX:vp,fl:sp,gM:r.eG,uF:r.uF,v:Bf},r.bD)),b=pe(bt($.e).D),g=pe(bt($.e).lh),C=Kn(uk($.e)),p=a(gz,a(he,function(P){return{pY:pe(a(Ee,function(_){return _.k8},c)),qK:ik(r.bD),jz:P,va:n.g.$7}},i),e.sq($)),m=(function(){var P=r.hv;if(P.$)return f([C,p,d]);var _=P.a;return f([C,p,d,tk(_)])})();return a(br,f([H3(o3),a(B,"position","fixed"),a(B,"inset","0"),a(B,"overflow-y","auto"),a(B,"overscroll-behavior","none"),a(B,"background-color",b),a(B,"color",g),a(Rw,"playflush",ae(y(t3,!0)))]),m)}),_z=function(e){return C_({b_:uP(e),ay:_S(e),uY:Zj(e),bp:Cz(e)})},yz=function(e){return _z({c2:S,a7:e.a7,aA:K(function(r,n,t,o){return S}),bD:e.bD,jR:function(r){return $_},aH:S,e0:e.e0,cT:e.cT,sq:e.sq,ft:e.ft,ay:e.ay,iU:z,fL:e.fL})},Pz=function(e){return yz({a7:{bh:Le(function(r,n,t,o,c){return V(x(e.bh,r,t,o,c),Zn,S)}),bi:K(function(r,n,t,o){return V(v(e.bi,r,t,o),Zn,S)}),cq:K(function(r,n,t,o){return S}),ay:K(function(r,n,t,o){return gt}),bp:K(function(r,n,t,o){return Kn(v(e.bp,r,t,o))})},bD:e.bD,e0:function(r){return 0},cT:e.cT,sq:e.sq,ft:s(function(r,n){return y(n,ie)}),ay:function(r){return gt},fL:function(r){return S}})},pW=te,Sz=s(function(e,r){return{bE:e,bd:"texture",dV:S,fK:r}}),xz=function(e){return{$:0,a:e}},jz=function(e){return{$:1,a:e}},G5=dm,kz=function(e){return{$:0,a:e}},wz="card-art",W5=Ee(function(e){return e.D}),Lz=`
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
`,Dz=l7,Tz=D(function(e,r,n){return Kb(a(e,r,n))}),Mz=D(function(e,r,n){return Mf(x(Dz,Tz,e,r,n))}),zz=Mz,e1=k$("border-bottom"),Az=be("border-collapse"),Fz=k$("border-left"),Ez=k$("border-top"),Hz={r:0,p:0,u2:"circle"},Vz={lV:0,u2:"collapse",g5:0},Bz={r:0,p:0,u2:"decimal"},mW=3,Uz=s(function(e,r){return{$:2,a:e,b:r}}),Rz=Uz(3),Iz={r:0,p:0,u2:"disc"},N5=be("font-style"),qz={lz:0,au:0,fU:0,lK:0,ej:0,lM:0,ek:0,c5:0,bw:0,hj:0,f$:0,aR:0,q2:0,eO:0,jH:0,ge:0,hO:0,rC:0,gf:0,gg:0,G:0,dH:0,hZ:0,nb:0,jW:0,e7:0,e8:0,dg:0,e9:0,fa:0,dO:0,dP:0,cU:0,fb:0,h9:0,r:0,p:0,kh:0,s8:0,dk:0,iq:0,fo:0,cr:0,iS:0,fB:0,d7:0,fC:0,fD:0,d8:0,bT:0,fH:"",g3:0,u2:"initial",g5:0,ee:0},Oz=H(qz,{u2:"inherit"}),J5={gg:0,u2:"italic"},$l=be("list-style-type"),ui={$:0},Z5=function(e){return{$:3,a:e}},X5={$:1},K5=function(e){return{$:4,a:e}},Y5={$:2},Gz=function(e){return v(kc,">","&gt;",v(kc,"<","&lt;",v(kc,'"',"&quot;",v(kc,"&","&amp;",e))))},Wz=J9,Q5=s(function(e,r){var n=e?" display-mode":"";return'<katex-element tex="'+(Gz(Wz(r))+('"'+(n+"></katex-element>")))}),Nz=D(function(e,r,n){e:for(;;){var t=y(e,r);if(t.a.b)switch(t.b.$){case 1:if(t.a.a==="`"&&t.a.b.b&&t.a.b.a==="`"&&t.a.b.b.b&&t.a.b.b.a==="`"){var c=t.a,i=c.b,u=i.b,$=u.b,l=t.b,d=$,b=ui,g=a(M,"```",n);e=d,r=b,n=g;continue e}else{var C=t.a,p=C.a,$=C.b,m=t.b,d=$,b=X5,g=a(M,dt(p),n);e=d,r=b,n=g;continue e}case 2:if(t.a.a==="`"){var P=t.a,$=P.b,_=t.b,d=$,b=ui,g=a(M,"`",n);e=d,r=b,n=g;continue e}else{var j=t.a,p=j.a,$=j.b,L=t.b,d=$,b=Y5,g=a(M,dt(p),n);e=d,r=b,n=g;continue e}case 3:if(t.a.a==="$"&&t.a.b.b&&t.a.b.a==="$"){var T=t.a,U=T.b,$=U.b,o=t.b.a,d=$,b=ui,g=a(M,a(Q5,!0,Oi(De(o))),n);e=d,r=b,n=g;continue e}else{var I=t.a,p=I.a,$=I.b,o=t.b.a,d=$,b=Z5(a(M,p,o)),g=n;e=d,r=b,n=g;continue e}case 4:if(t.a.a==="$"){var q=t.a,$=q.b,o=t.b.a,Q=a(Q5,!1,Oi(De(o))),Z=(function(){if(n.b){var Ut=n.a;return a(vv,`
`,Ut)?" "+Q:Q}else return Q})(),d=$,b=ui,g=a(M,Z,n);e=d,r=b,n=g;continue e}else{var ue=t.a,p=ue.a,$=ue.b,o=t.b.a,d=$,b=K5(a(M,p,o)),g=n;e=d,r=b,n=g;continue e}default:switch(t.a.a){case"`":if(t.a.b.b&&t.a.b.a==="`"&&t.a.b.b.b&&t.a.b.b.a==="`"){var ye=t.a,Me=ye.b,Ve=Me.b,$=Ve.b,Xe=t.b,d=$,b=X5,g=a(M,"```",n);e=d,r=b,n=g;continue e}else{var ee=t.a,$=ee.b,Re=t.b,d=$,b=Y5,g=a(M,"`",n);e=d,r=b,n=g;continue e}case"$":if(t.a.b.b&&t.a.b.a==="$"){var Ke=t.a,Ne=Ke.b,$=Ne.b,yr=t.b,d=$,b=Z5(S),g=n;e=d,r=b,n=g;continue e}else{var qe=t.a,$=qe.b,cr=t.b,d=$,b=K5(S),g=n;e=d,r=b,n=g;continue e}default:var pr=t.a,p=pr.a,$=pr.b,Nr=t.b,d=$,b=ui,g=a(M,dt(p),n);e=d,r=b,n=g;continue e}}else switch(t.b.$){case 3:var o=t.b.a;return a(M,Oi(De(o)),a(M,"$$",n));case 4:var o=t.b.a;return a(M,Oi(De(o)),a(M,"$",n));default:return n}}}),Jz=function(e){return Bs(De(v(Nz,yc(e),ui,S)))},Zz={r:0,p:0,u2:"square"},e4=be("text-decoration"),Xz=function(e){return!e.$},Kz=X7,hW=te,jr=s(function(e,r){var n=a(rm,e,S),t=v(Zc,n,S,z);return f([pm(v(bm,t,S,r))])}),Yz={fB:0,u2:"underline"},Qz=w$("visited"),eA=s(function(e,r){var n=a(re,function(b){return b.lf},e),t=a(re,function(b){return b.lh},e),o=a(re,function(b){return b.lb},e),c=a(re,function(b){return b.kx.qc},e),i=a(re,function(b){return b.kx.qP},e),u=a(re,function(b){return b.jh},e),$=a(re,function(b){return b.ji},e),l=a(re,function(b){return b.i1},e),d=a(re,function(b){return b.bt},e);return a(X,f([O(f([ve(t),a(F,"font-family",Rr.uT),Ie(fa.lP),Or(Ze(1.6)),Rz(f([a(jr,"h1",f([a(F,"font-family",Rr.uT),Ie(fa.rY),Sr(se(700)),Or(Ze(1.2)),Aa(w(40)),Wr(w(20)),js(w(8)),ve(d)])),a(jr,"h2",f([a(F,"font-family",Rr.uT),Ie(fa.pb),Sr(se(600)),Or(Ze(1.3)),Aa(w(32)),Wr(w(16)),js(w(4)),ve(d)])),a(jr,"h3",f([a(F,"font-family",Rr.uT),Ie(fa.rX),Sr(se(600)),Or(Ze(1.4)),Aa(w(28)),Wr(w(12)),ve(d)])),a(jr,"h4",f([a(F,"font-family",Rr.uT),Ie(fa.jX),Sr(se(600)),Or(Ze(1.5)),Aa(w(24)),Wr(w(12)),ve(d)])),a(jr,"h5",f([a(F,"font-family",Rr.uT),Ie(fa.jX),Sr(se(600)),Aa(w(20)),Wr(w(8)),ve(d)])),a(jr,"h6",f([a(F,"font-family",Rr.uT),Ie(fa.ql),Sr(se(600)),Aa(w(16)),Wr(w(8)),ve(d),U$(R$),vo(Dt(.04))])),a(jr,"p",f([Wr(w(18)),Or(Ze(1.7))])),a(jr,"ul",f([$l(Iz),Zo(w(28)),Aa(w(14)),Wr(w(14))])),a(jr,"ol",f([$l(Bz),Zo(w(28)),Aa(w(14)),Wr(w(14))])),a(jr,"li",f([Wr(w(6)),Or(Ze(1.7)),Zo(w(6)),a(W$,"marker",f([ve(d)]))])),a(j$,"ul ul",f([$l(Hz)])),a(j$,"ul ul ul",f([$l(Zz)])),a(jr,"code",f([a(F,"font-family",Rr.sR),vr(Dt(.9)),je(o),a($r,w(2),w(5)),tr(ga.oP),ve(d)])),a(jr,"pre",f([je(o),a($r,w(14),w(18)),tr(ga.sD),Jo(No),Aa(w(16)),Wr(w(20)),Or(Ze(1.5)),v(xt,w(1),za,u)])),a(j$,"pre code",f([ve(t),je(Oz),ln(le),vr(Dt(1)),tr(le)])),a(jr,"a",f([ve(i),e4(lr),v(e1,w(1),za,ri),a(F,"transition","border-color 200ms, color 200ms"),Mn(f([e4(Yz),ve(c)])),Qz(f([Ua(Ze(.6))]))])),a(jr,"blockquote",f([v(Fz,w(3),za,d),Zo(w(18)),N5(J5),ve(n),Aa(w(16)),Wr(w(20))])),a(jr,"table",f([xe(er(100)),Az(Vz),Aa(w(16)),Wr(w(20))])),a(jr,"th",f([X$(Xr),a($r,w(8),w(10)),v(e1,w(2),za,$),Sr(se(600)),ve(t)])),a(jr,"td",f([X$(Xr),a($r,w(8),w(10)),v(e1,w(1),za,u)])),a(jr,"strong",f([ve(t),Sr(se(600))])),a(jr,"em",f([N5(J5)])),a(jr,"mark",f([je(a(re,function(b){return a(mr,.3,b.bt)},e)),ve(t),a($r,w(1),w(4)),tr(ga.oP)])),a(jr,"img",f([Rs(er(100)),ze(No),tr(ga.sD),Aa(w(16)),Wr(w(16))])),a(jr,"hr",f([ei(le),v(Ez,w(1),za,u),Aa(w(28)),Wr(w(28))]))]))]))]),f([G5(v(Kz,{qW:z,rR:E({p9:!0,uC:!0}),t1:!1,ui:!0},S,Jz(r)))]))}),ll=zz(eA),rA=function(e){return Kn(a(ll,e,Lz))},aA=`
A hinge \u2014 one fold line, one degree of freedom \u2014 is the only joint
primitive a pop-up book needs. Every other mechanism is just two or
more hinges arranged in a tree, with their dihedral angles driven
by the same spread. The next unit puts a second hinge **on the
page itself**: a flap that rises perpendicular to the page as the
book opens.
`,nA=function(e){return Kn(a(ll,e,aA))},r4=function(e){return{$:1,a:e}},Fa=function(e){return{f$:e,bJ:1,b2:r4({id:0,iC:1}),b3:z}},tA=function(e){return{f$:e.rv,bJ:1,b2:r4({id:0,iC:1}),b3:E(e.tP)}},r1=Ee(function(e){return e.lh}),oA=function(e){return{$:0,a:e}},a4=function(e){return oA({bE:e,nQ:1})},n4=function(e){return{$:6,a:e}},a1=function(e){return{$:5,a:e}},cA={$:0},n1=function(e){return{$:0,a:e}},iA=function(e){return{$:0,a:e}},uA={$:3},t4=function(e){return{$:3,a:e}},gW=te,Ru=function(e){return e},CW=te,zn=function(e){return e},tc=zn({pC:0,pD:1,L:0}),Oa=z9,t1=D(function(e,r,n){var t=Oa(e*e+r*r+n*n);return t<1e-6?tc:zn({pC:-e/t,pD:-r/t,L:-n/t})}),_W=te,Iu=function(e){return e},o4=zn({pC:0,pD:-1,L:0}),c4=K(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),o1=D(function(e,r,n){return x(c4,e,r,n,1)}),i4={lL:v(o1,.06,.06,.07),ms:iA(10),nh:f([n1({u:!0,a:a1(Ru(3200)),eE:v(t1,-.7,.8,.5),jT:Iu(9e3)}),n1({u:!1,a:a1(Ru(6500)),eE:v(t1,.6,.5,.6),jT:Iu(2500)}),n1({u:!0,a:a1(Ru(5e3)),eE:v(t1,0,.4,-1),jT:Iu(5500)}),t4({a:n4(v(o1,.2,.2,.22)),jT:Iu(120),fJ:tc}),t4({a:n4(v(o1,.15,.13,.12)),jT:Iu(60),fJ:o4})]),sX:"Studio (3-point)",pe:uA,pz:cA},oc=s(function(e,r){return{$:0,a:e,b:r}}),fA={tE:f([{pC:0,pD:0},{pC:1,pD:0},{pC:1,pD:1},{pC:0,pD:1}])},yW=te,u4=D(function(e,r,n){return{eh:r,ei:e,js:S,eC:function(t){return t.oU*n}}}),$A={tE:f([{pC:0,pD:-.5},{pC:1,pD:-.5},{pC:1,pD:.5},{pC:0,pD:.5}])},lA=a(oc,$A,f([y(v(u4,{pC:0,pD:.5},{pC:0,pD:-.5},Hr),a(oc,fA,S))])),vA={$:0},sA=s(function(e,r){return r.fZ?f([a(cs,"pointerdown",ae(e(vA)))]):S}),qu=function(e){return{pC:e.pC,pD:e.pD,L:0}},f4=function(e){return{$:0,a:e}},Kr=D(function(e,r,n){return{pC:e,pD:r,L:n}}),c1=function(e){return{$:0,a:e}},Ou=function(e){return{$:0,a:e}},$4={gJ:c1(0),gL:Ou(1),g$:v(Kr,0,0,0)},Yr=function(e){return f4({dD:e,lk:$4})},vl=s(function(e,r){return Mr(a(gr,function(n){return oe(n.kJ,e)},r.dM))}),i1=function(e){var r=e;return{eh:r.eh,ei:r.ei}},dA=function(e){var r=i1(e);return oe(r.ei,r.eh)},bA=function(e){return{$:18,a:e}},fi=K(function(e,r,n,t){return bA({rm:n,dq:r,D:e,lt:t})}),u1=s(function(e,r){return f4({dD:f([r]),lk:e})}),$i=function(e){var r=e.a,n=e.b,t=e.c;return u1({gJ:c1(0),gL:Ou(1),g$:v(Kr,r,n,t)})},ho=s(function(e,r){var n=e.a,t=e.b,o=e.c,c=r,i=c.bW,u=i.a,$=i.b,l=i.c,d=c.bV,b=d.a,g=d.b,C=d.c,p=c.bU,m=p.a,P=p.b,_=p.c;return V(n*m+t*b+o*u,n*P+t*g+o*$,n*_+t*C+o*l)}),li=s(function(e,r){var n=r,t=n.bW,o=t.a,c=t.b,i=t.c,u=n.bV,$=u.a,l=u.b,d=u.c,b=n.bU,g=b.a,C=b.b,p=b.c;return{pC:n.aZ.pC+e.pC*g+e.pD*$+e.L*o,pD:n.aZ.pD+e.pC*C+e.pD*l+e.L*c,L:n.aZ.L+e.pC*p+e.pD*d+e.L*i}}),An=s(function(e,r){var n=r.a,t=r.b,o=r.c;return V(e*n,e*t,e*o)}),pA=function(e){return{$:12,a:e}},sl=s(function(e,r){return pA({tK:r,D:e})}),cc=s(function(e,r){var n=e.a,t=e.b,o=e.c;return{pC:r.pC+n,pD:r.pD+t,L:r.L+o}}),mA=D(function(e,r,n){var t=a(vl,e,r);if(t.$===1)return Yr(S);var o=t.a;if(dA(o.jQ)){var c=a(ho,V(0,0,1),o.it),i=n.e7*.05,u=i1(o.jQ),$=qu(u.ei),l=a(li,$,o.it),d=a(cc,a(An,n.e7,c),l),b=a($i,V(d.pC,d.pD,d.L),a(sl,Fa(n.f$),i*2.5)),g=x(fi,Fa(n.f$),l,d,i);return Yr(f([g,b]))}else return Yr(S)}),hA=function(e){var r=e;return r.js},Gu=s(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return V(t*u-o*i,o*c-n*u,n*i-t*c)}),l4=function(e){var r=e.a,n=e.b,t=e.c;return Oa(a(Dn,r,2)+a(Dn,n,2)+a(Dn,t,2))},zt=function(e){var r=l4(e);return a(An,1/r,e)},vi=s(function(e,r){return V(r.pC-e.pC,r.pD-e.pD,r.L-e.L)}),f1=s(function(e,r){var n=i1(e),t=qu(n.ei),o=a(li,t,r),c=qu(n.eh),i=a(li,c,r),u={pC:(o.pC+i.pC)/2,pD:(o.pD+i.pD)/2,L:(o.L+i.L)/2},$=zt(a(vi,t,c)),l=zt(a(Gu,V(0,0,1),$));return{pW:a(ho,$,r),cI:i,lI:o,gi:a(ho,l,r),fg:u}}),gA=function(e){return V(e.pC,e.pD,e.L)},CA=function(e){var r=gA(e.fJ),n=zt(a(vi,e.I,e.hQ)),t=zt(a(Gu,n,r)),o=a(Gu,t,n);return{jJ:n,kO:o,bM:t}},dl=s(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return n*c+t*i+o*u}),v4=S9,_A=D(function(e,r,n){var t=a(vi,e.I,n),o=CA(e),c=a(dl,t,o.bM),i=a(dl,t,o.kO),u=a(dl,t,o.jJ);if(u<.001)return z;var $=r.lt/r.jO,l=(function(){var m=e.tJ;if(m.$){var j=m.a.pu;return y(j/2,r.jO/j)}else{var P=m.a.eT,_=u*v4(P/2);return y(_,r.jO/(2*_))}})(),d=l.a,b=l.b,g=d*$,C=c/g,p=i/d;return E({f8:u,tw:b,t4:(C+1)*r.lt/2,t5:(1-p)*r.jO/2})}),s4=D(function(e,r,n){var t=v(_A,e.qk,e.$7,e.pS);if(t.$===1)return fr("");var o=t.a,c=function(i){return J(i)+"px"};return a(br,a(M,a(B,"position","absolute"),a(M,a(B,"left",c(o.t4+e.n0.pC)),a(M,a(B,"top",c(o.t5+e.n0.pD)),a(M,a(B,"pointer-events","none"),a(M,a(B,"user-select","none"),r))))),n)}),$1=s(function(e,r){return{pC:r.pC,pD:r.L+e/2,L:-r.pD}}),yA=D(function(e,r,n){var t=a(vl,e,r);if(t.$===1)return fr("");var o=t.a,c=hA(o.jQ);if(Ye(c))return fr("");var i=a(ho,V(0,0,1),o.it),u=a(f1,o.jQ,o.it),$=f([a(B,"color",pe(n.f$)),a(B,"font-family","system-ui, sans-serif"),a(B,"font-size","12px"),a(B,"white-space","nowrap"),a(B,"transform","translate(-50%, -100%)")]),l=a(cc,a(An,n.h5,i),u.fg),d=a($1,n.dZ,l);return v(s4,{pS:d,qk:n.qk,n0:{pC:0,pD:0},$7:n.$7},$,a(W,function(b){return a(br,S,f([fr(b)]))},c))}),PA=(function(){var e=.3,r=e*.04,n={aQ:1,aT:0,C:.55,a1:.8},t={aQ:1,aT:.33,C:.45,a1:.8},o={aQ:1,aT:.6,C:.55,a1:.8},c=s(function(i,u){var $=x(fi,Fa(i),{pC:0,pD:0,L:0},u,r),l=a($i,V(u.pC,u.pD,u.L),a(sl,Fa(i),r*2.5));return Yr(f([$,l]))});return Yr(f([a(c,n,{pC:e,pD:0,L:0}),a(c,t,{pC:0,pD:e,L:0}),a(c,o,{pC:0,pD:0,L:e})]))})(),l1=function(e){return{$:1,a:e}},v1=function(e){return u1({gJ:l1(e.p2),gL:Ou(1),g$:e.aZ})},s1=function(e){var r=e;return{p2:{pC:r.bU,pD:r.bV,L:r.bW},aZ:r.aZ}},SA=K(function(e,r,n,t){var o=.005,c=r/2+.001,i=a(W,function(l){return{pC:l.pC,pD:l.pD,L:c}},n.tE),u=(function(){if(i.b){var l=i.a,d=Y(a(pt,1,i),f([l]));return v(U0,Ao,i,d)}else return S})(),$=a(W,function(l){var d=l.a,b=l.b;return x(fi,Fa(e),d,b,o)},u);return a(v1,s1(t),Yr($))}),d4=function(e){return v(me,Pb,0,e)},b4=function(e){if(e.b){var r=Dr(e);return{pC:d4(a(W,function(n){return n.pC},e))/r,pD:d4(a(W,function(n){return n.pD},e))/r}}else return{pC:0,pD:0}},xA=s(function(e,r){var n=r.a,t=r.b,o=r.c,c="["+(a(Lr,",",a(W,rr,n))+"]"),i=f([a(B,"color",pe(e.f$)),a(B,"font-family","monospace"),a(B,"font-size","11px"),a(B,"white-space","nowrap"),a(B,"transform","translate(-50%, -50%)"),a(B,"background","rgba(0,0,0,0.4)"),a(B,"padding","1px 4px"),a(B,"border-radius","3px")]),u=b4(t.tE),$=a(li,{pC:u.pC,pD:u.pD,L:0},o),l=a($1,e.dZ,$);return v(s4,{pS:l,qk:e.qk,n0:{pC:0,pD:0},$7:e.$7},i,f([fr(c)]))}),bl=s(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return V(n+c,t+i,o+u)}),dn=y9,d1=function(e){var r=e.a,n=e.b,t=e.c;return v(Kr,r,n,t)},bn=P9,pl=D(function(e,r,n){var t=V(-e.aZ.pC,-e.aZ.pD,-e.aZ.L),o=V(e.aZ.pC,e.aZ.pD,e.aZ.L),c=bn(r),i=a(cc,t,n),u=V(i.pC,i.pD,i.L),$=dn(r),l=zt(e.eE),d=a(dl,l,u),b=a(bl,a(An,$,u),a(bl,a(An,c,a(Gu,l,u)),a(An,1-$,a(An,d,l))));return a(cc,o,d1(b))}),jA=D(function(e,r,n){var t=n.a,o=n.b,c=n.c,i=v(pl,{eE:e,aZ:{pC:0,pD:0,L:0}},r,{pC:t,pD:o,L:c});return V(i.pC,i.pD,i.L)}),p4=function(e){var r=v(jA,e.hf,e.hd,e.bY),n=a(An,e.tK,r);return a(cc,n,e.hg)},kA=function(e){var r=.005,n=a(Pe,4,Ia(16*Te(e.cY))),t=zt(a(vi,e.aB.rK,e.aB.uL)),o=function(i){return p4({hd:i*e.cY,hf:t,hg:e.aB.rK,bY:e.bY,tK:e.tK})},c=a(W,function(i){var u=(i+1)/n,$=i/n;return x(fi,Fa(e.f$),o($),o(u),r)},a(Cn,0,n-1));return Yr(c)},wA=function(e){return{$:15,a:e}},m4=s(function(e,r){return wA({D:e,lr:r})}),LA=function(e){var r=a(Pe,4,Ia(16*Te(e.cY))),n=Fa(e.f$),t=zt(a(vi,e.aB.rK,e.aB.uL)),o=function(i){return p4({hd:i*e.cY,hf:t,hg:e.aB.rK,bY:e.bY,tK:e.tK})},c=a(fn,function(i){var u=(i+1)/r,$=i/r;return f([a(m4,n,V(e.aB.rK,o($),o(u))),a(m4,n,V(e.aB.rK,o(u),o($)))])},a(Cn,0,r-1));return Yr(c)},DA=D(function(e,r,n){var t=a(vl,e,r);if(t.$===1)return Yr(S);var o=t.a,c=a(f1,o.jQ,o.it),i=LA({aB:{rK:c.fg,uL:c.cI},f$:n.f$,bY:c.gi,tK:n.tK,cY:o.eC}),u=kA({aB:{rK:c.fg,uL:c.cI},f$:n.f$,bY:c.gi,tK:n.tK,cY:o.eC});return Yr(f([i,u]))}),TA=D(function(e,r,n){var t=a(vl,e,r);if(t.$===1)return Yr(S);var o=t.a,c=a(f1,o.jQ,o.it),i=a($i,V(c.cI.pC,c.cI.pD,c.cI.L),a(sl,Fa(n.f$),n.cZ*2.5)),u=x(fi,Fa(n.f$),c.lI,c.cI,n.cZ);return Yr(f([u,i]))}),MA=s(function(e,r){return a(he,function(n){var t=n.b,o=n.c;return y(t,o)},Mr(a(gr,function(n){var t=n.a;return oe(t,e)},r.cq)))}),zA=D(function(e,r,n){var t=a(MA,e,r);if(t.$===1)return Yr(S);var o=t.a,c=o.a,i=o.b,u=n.e7*.05,$=b4(c.tE),l={pC:$.pC,pD:$.pD,L:0},d={pC:$.pC,pD:$.pD,L:n.e7},b=a($i,V(d.pC,d.pD,d.L),a(sl,Fa(n.f$),u*2.5)),g=x(fi,Fa(n.f$),l,d,u);return a(v1,s1(i),Yr(f([g,b])))}),AA=s(function(e,r){var n=r.ez,t=e.dx.cq,o=a(Ee,function(_){return _.ji},e.e),c=a(Ee,function(_){return _.li},e.e),i=n.fF?a(W,xA({qk:e.qk,f$:c,dZ:e.dZ,$7:e.$7}),t):S,u=a(W,function(_){return _.kJ},e.dx.dM),$=n.js?a(W,function(_){return v(yA,_,e.dx,{qk:e.qk,f$:c,h5:.08,dZ:e.dZ,$7:e.$7})},u):S,l=s(function(_,j){return _?j:S}),d=a(l,n.eZ,a(W,function(_){return v(TA,_,e.dx,{f$:c,cZ:.004})},u)),b=a(l,n.fq,a(W,function(_){var j=_.a;return v(zA,j,e.dx,{f$:c,e7:.12})},t)),g=a(l,n.fp,a(W,function(_){var j=_.b,L=_.c;return x(SA,o,e.dZ,j,L)},t)),C=a(l,n.fm,f([PA])),p=a(Ee,function(_){return _.bt},e.e),m=a(l,n.ex,a(W,function(_){return v(mA,_,e.dx,{f$:p,e7:.18})},u)),P=a(l,n.eD,a(W,function(_){return v(DA,_,e.dx,{f$:p,tK:.18})},u));return{r2:Y(i,$),uc:Y(d,Y(P,Y(b,Y(m,Y(C,g)))))}}),ml=k9,FA={$:0},EA=function(e){return{f$:e,bJ:1,b2:FA,b3:z}},HA=function(e){return{$:7,a:e}},VA=K(function(e,r,n,t){return HA({hh:0,jO:n,tP:t,D:e,lt:r})}),BA=s(function(e,r){var n=r.F,t=a(ar,a(ht,0,e),n);if(!t.$&&!t.a.$){var o=t.a.a.em,c=t.a.a.en,i=t.a.a.E;return i.$===2?E({jO:o,lt:c}):z}else return z}),UA=s(function(e,r){var n=a(BA,r.bE,e.aA);if(n.$)return z;var t=n.a;return r.jO>0&&t.jO>0?E(x(VA,EA(jo),r.jO*(t.lt/t.jO),r.jO,a4(r.bE))):z}),hl=s(function(e,r){var n=r.a,t=r.b,o=r.c;return a(bl,a(An,n,e.pC),a(bl,a(An,t,e.pD),a(An,o,e.L)))}),h4=s(function(e,r){return d1(a(hl,e,V(r.pC,r.pD,r.L)))}),g4=s(function(e,r){var n=function(t){var o=v(pl,{eE:e,aZ:v(Kr,0,0,0)},r,d1(t));return V(o.pC,o.pD,o.L)};return{pC:n(V(1,0,0)),pD:n(V(0,1,0)),L:n(V(0,0,1))}}),C4=s(function(e,r){var n=e.aZ,t=a(g4,e.eE,r),o=a(h4,t,n);return u1({gJ:l1(t),gL:Ou(1),g$:v(Kr,n.pC-o.pC,n.pD-o.pD,n.L-o.L)})}),b1=function(e){return a(C4,{eE:V(1,0,0),aZ:v(Kr,0,0,0)},e)},RA=function(e){return a(C4,{eE:V(0,1,0),aZ:v(Kr,0,0,0)},e)},IA=D(function(e,r,n){return a(he,function(t){var o=r.I.L-r.hQ.L,c=r.I.pD-r.hQ.pD,i=r.I.pC-r.hQ.pC,u=a(ml,c,Oa(i*i+o*o)),$=a(ml,i,o);return a($i,V(n.pS.pC,n.pS.pD,n.pS.L),a(RA,$,a(b1,-u,t)))},a(UA,e,{jO:n.jO,bE:n.bE}))}),qA=D(function(e,r,n){return a(fe,Yr(S),v(IA,e,r,n))}),PW=te,OA=function(e){return e},GA=function(e){return{$:0,a:e}},WA=GA,NA={$:3},JA=NA,ZA=K(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),XA=ZA,KA=function(e){return{$:1,a:e}},YA=KA,QA=function(e){return a(yf,"height",rr(e))},eF=Ef,rF=function(e){return{$:2,a:e}},aF=rF,nF=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,c=function(u){return Ia(u*1e3)/1e3},i=function(u){return Ia(u*1e4)/100};return Bs(f(["rgba(",J(i(r)),"%,",J(i(n)),"%,",J(i(t)),"%,",J(c(o)),")"]))},tF=s(function(e,r){switch(r.$){case 0:return a(kg,e,r);case 1:return a(wg,e,r);case 2:return a(Lg,e,r);case 3:return a(Dg,e,r);case 4:return a(Tg,e,r);default:return a(Mg,e,r)}}),oF=s(function(e,r){switch(r.$){case 0:return a(ng,e,r);case 1:return a(tg,e,r);case 2:return a(og,e,r);case 3:return a(cg,e,r);case 4:return a(ig,e,r);case 5:return a(ug,e,r);case 6:return a(fg,e,r);case 7:return a($g,e,r);default:return lg(e)}}),cF=D(function(e,r,n){return v(jg,e,r,n)}),_4=function(e){var r=e;return r},At=Rg,Ca=x(At,1,1,1,1),kr=D(function(e,r,n){return a(W,function(t){return a(t,r,n)},e)}),y4=K(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),iF=s(function(e,r){var n=e,t=r.pD,o=r.pC;return x(y4,n*o/t,n,n*(1-o-t)/t,1)}),SW=te,uF=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return x(At,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t,o)},Wu=s(function(e,r){return uF(a(iF,e,r))}),P4=s(function(e,r){return{m7:oe(e.m7,r.m7),af:e.af*r.af+e.ag*r.ai+e.ah*r.al,ag:e.af*r.ag+e.ag*r.aj+e.ah*r.am,ah:e.af*r.ah+e.ag*r.ak+e.ah*r.an,ai:e.ai*r.af+e.aj*r.ai+e.ak*r.al,aj:e.ai*r.ag+e.aj*r.aj+e.ak*r.am,ak:e.ai*r.ah+e.aj*r.ak+e.ak*r.an,al:e.al*r.af+e.am*r.ai+e.an*r.al,am:e.al*r.ag+e.am*r.aj+e.an*r.am,an:e.al*r.ah+e.am*r.ak+e.an*r.an,a_:r.a_+(e.a_*r.af+e.a$*r.ai+e.a0*r.al)*r.gL,a$:r.a$+(e.a_*r.ag+e.a$*r.aj+e.a0*r.am)*r.gL,a0:r.a0+(e.a_*r.ah+e.a$*r.ak+e.a0*r.an)*r.gL,gL:e.gL*r.gL}}),Fn=Kg,fF=function(e){return Fn({np:e.af,nq:e.ai,nr:e.al,ns:e.a_,nt:e.ag,nu:e.aj,nv:e.am,nw:e.a$,nx:e.ah,ny:e.ak,nz:e.an,nA:e.a0,nB:0,nC:0,nD:0,nE:1})},gl=Le(function(e,r,n,t,o){var c=t.m7?1:-1,i=x(At,t.gL,t.gL,t.gL,c);return wr(o,e,i,fF(t),t.m7,r,n)}),S4=Fr(function(e,r,n,t,o,c){e:for(;;)switch(o.$){case 0:return c;case 6:var i=o.a,u=o.b,$=e,l=r,d=n,b=a(P4,i,t),g=u,C=c;e=$,r=l,n=d,t=b,o=g,c=C;continue e;case 1:var p=o.b,m=a(M,R(gl,e,r,n,t,p),c.aJ);return{aJ:m,bk:c.bk,ub:c.ub,M:c.M};case 2:var p=o.b,m=a(M,R(gl,e,r,n,t,p),c.M);return{aJ:c.aJ,bk:c.bk,ub:c.ub,M:m};case 4:var P=o.b,_=a(M,R(gl,e,r,n,t,P),c.bk);return{aJ:c.aJ,bk:_,ub:c.ub,M:c.M};case 3:var j=o.a,L=a(M,R(gl,e,r,n,t,j),c.ub);return{aJ:c.aJ,bk:c.bk,ub:L,M:c.M};default:var T=o.a;return v(me,x(S4,e,r,n,t),c,T)}}),Ea=function(e){var r=e;return Te(r)},ic=s(function(e,r){var n=e,t=r;return a(Pe,n,t)}),x4=function(e){var r=e;return r.sC},j4=function(e){var r=e;return r.sN},Ft=s(function(e,r){var n=r;return e*n}),k4=function(e){var r=e;return-r},$F=s(function(e,r){var n=e,t=r;return t+n}),lF=function(e){var r=e;return r.nK},vF=function(e){var r=e;return r.sB},sF=function(e){var r=e;return r.nO},dF=function(e){var r=e;return r.sM},si=s(function(e,r){var n=e,t=r;return t-n}),w4=function(e){return V(a(si,sF(e),lF(e)),a(si,dF(e),vF(e)),a(si,j4(e),x4(e)))},uc=0,bF=function(e){var r=e,n=a(Pe,Te(r.pC),a(Pe,Te(r.pD),Te(r.L)));if(n){var t=r.L/n,o=r.pD/n,c=r.pC/n,i=Oa(c*c+o*o+t*t);return i*n}else return uc},xW=te,pF=D(function(e,r,n){var t=e,o=r,c=n;return{pC:t,pD:o,L:c}}),L4=function(e){var r=w4(e),n=r.a,t=r.b,o=r.c;return bF(v(pF,n,t,o))},mF=s(function(e,r){var n=a(Ft,.99,a(ic,Ea(e),k4(x4(r)))),t=a(Ft,1.01,a($F,L4(r),k4(j4(r))));return y(n,t)}),hF=K(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),p1=hF,Cl=K(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),gF=function(e){var r=e.ch,n=e.cl,t=e.cF;return x(Cl,518,t,n,r)},CF=s(function(e,r){return{$:6,a:e,b:r}}),_F=CF,D4=f([gF({ch:1,cl:0,cF:!1}),x(p1,!1,!1,!1,!1),a(_F,0,1)]),jW=te,di=519,m1=8,T4=15,kW=te,bi=7681,yF={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ue=ag,M4=s(function(e,r){return{$:0,a:e,b:r}}),PF=M4({ml:1,mS:0,nR:5}),zr=Fg,SF=PF(f([{tF:a(zr,-1,-1)},{tF:a(zr,1,-1)},{tF:a(zr,-1,1)},{tF:a(zr,1,1)}])),xF={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"tF"},uniforms:{}},jF=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){return function(d){return{$:2,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:u,i:$,j:l,k:d}}}}}}}}}}}},h1=D(function(e,r,n){var t=e.lv,o=e.j5,c=e.tP,i=s(function(l,d){var b=l;return d(b)}),u=s(function(l,d){var b=l;return d(b)}),$=function(l){return a(Ge,i(l.gW),a(Ge,u(l.gc),a(Ge,u(l.g8),u(l.g9))))};return a($,n,a($,r,v(jF,c,o,t)))}),g1=function(e){return v(h1,{j5:e.j5,tP:e.tP,lv:e.lv},{gc:e.gc,gW:e.gW,g8:e.g8,g9:e.g9},{gc:e.gc,gW:e.gW,g8:e.g8,g9:e.g9})},C1=function(e){return R(Ue,f([g1(e),x(p1,!1,!1,!1,!1)]),xF,yF,SF,{})},kF=C1({gc:bi,j5:0,tP:m1,gW:di,lv:T4,g8:bi,g9:bi}),wF=516,z4=5386,_a=7680,LF=function(e){return a(Dn,2,e+4)},A4=function(e){return C1({gc:_a,j5:T4,tP:m1,gW:wF,lv:LF(e),g8:z4,g9:z4})},DF=D(function(e,r,n){return wn(f([v(kr,e,n,D4),f([A4(r),kF])]))}),TF=s(function(e,r){return wn(a(_n,DF(e),r))}),wW=te,MF=1029,zF=function(e){return{$:5,a:e}},F4=function(e){var r=e;return zF(r)},fc=F4(MF),AF=1028,$c=F4(AF),FF=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){return{$:0,a:e,b:r,c:n,d:t,e:o,f:c,g:i,h:u,i:$,j:l}}}}}}}}}}},EF=function(e){var r=e.aQ,n=e.f$,t=e.ha,o=e.jb,c=e.jM,i=e.kN,u=s(function($,l){var d=$.a,b=$.b,g=$.c,C=l.a,p=l.b,m=l.c;return FF(d)(b)(g)(C)(p)(m)(i)(c)(o)(t)});return a(u,n,r)},HF=D(function(e,r,n){return{$:0,a:e,b:r,c:n}}),E4=s(function(e,r){var n=e,t=r;return v(HF,32774,n,t)}),VF=s(function(e,r){return EF({ha:0,aQ:a(E4,e,r),jb:0,f$:a(E4,e,r),jM:0,kN:0})}),LW=te,BF=1,UF=771,RF={$:8},IF=RF,_l=f([a(VF,BF,UF),IF]),qF=function(e){var r=e.ch,n=e.cl,t=e.cF;return x(Cl,513,t,n,r)},H4=qF({ch:1,cl:0,cF:!0}),pi=a(M,H4,_l),V4=514,B4=function(e){var r=e.ch,n=e.cl,t=e.cF;return x(Cl,515,t,n,r)},U4=240,OF=a(M,B4({ch:1,cl:0,cF:!0}),a(M,g1({gc:_a,j5:U4,tP:0,gW:V4,lv:0,g8:_a,g9:_a}),_l)),GF=function(e){var r=e.ch,n=e.cl,t=e.cF;return x(Cl,514,t,n,r)},mi=a(M,GF({ch:1,cl:0,cF:!0}),_l),DW=te,R4=function(e){var r=e;return r},_1=function(e){var r=e;return R4(r.cS)},yl=function(e){var r=e;return r.aZ},WF=function(e){return yl(_1(e))},Pl=function(e){return e},TW=te,tt=function(e){return e},NF=function(e){return Pl({aZ:tt({pC:e.a_,pD:e.a$,L:e.a0}),vg:zn({pC:e.af,pD:e.ag,L:e.ah}),vp:zn({pC:e.ai,pD:e.aj,L:e.ak}),vv:zn({pC:e.al,pD:e.am,L:e.an})})},y1=s(function(e,r){var n=e,t=r,o=n.vv,c=o,i=n.vp,u=i,$=n.vg,l=$;return{pC:t.pC*l.pC+t.pD*l.pD+t.L*l.L,pD:t.pC*u.pC+t.pD*u.pD+t.L*u.L,L:t.pC*c.pC+t.pD*c.pD+t.L*c.L}}),I4=s(function(e,r){var n=e,t=r,o=n.aZ,c=o,i=t.pC-c.pC,u=t.pD-c.pD,$=t.L-c.L,l=n.vv,d=l,b=n.vp,g=b,C=n.vg,p=C;return{pC:i*p.pC+u*p.pD+$*p.L,pD:i*g.pC+u*g.pD+$*g.L,L:i*d.pC+u*d.pD+$*d.L}}),Sl=function(e){var r=e;return r.vg},xl=function(e){var r=e;return r.vp},Nu=function(e){var r=e;return r.vv},q4=s(function(e,r){return{aZ:a(I4,e,yl(r)),vg:a(y1,e,Sl(r)),vp:a(y1,e,xl(r)),vv:a(y1,e,Nu(r))}}),Ar=D(function(e,r,n){return{pC:e,pD:r,L:n}}),MW=te,JF=s(function(e,r){var n=r,t=n,o=e,c=o;return{nK:a(Pe,c.nK,t.nK),sB:a(Pe,c.sB,t.sB),sC:a(Pe,c.sC,t.sC),nO:a(Oe,c.nO,t.nO),sM:a(Oe,c.sM,t.sM),sN:a(Oe,c.sN,t.sN)}}),Ga=function(e){var r=e;return r},ZF=s(function(e,r){var n=r,t=n.L,o=n.pD,c=n.pC,i=e,u=i.a,$=i.b,l=i.c,d=Te(u)/2,b=Te($)/2,g=Te(l)/2;return{nK:c+d,sB:o+b,sC:t+g,nO:c-d,sM:o-b,sN:t-g}}),P1=K(function(e,r,n,t){var o=n.qo,c=2*n.rW*r,i=2*n.rV*r,u=2*n.rU*r,$=o.L*r,l=o.pD*r,d=o.pC*r,b=Ga(Nu(e)),g=Te(u*b.pC)+Te(i*b.pD)+Te(c*b.L),C=Ga(xl(e)),p=Te(u*C.pC)+Te(i*C.pD)+Te(c*C.L),m=Ga(Sl(e)),P=Te(u*m.pC)+Te(i*m.pD)+Te(c*m.L),_=a(ZF,V(P,p,g),a(I4,e,v(Ar,d,l,$)));if(t.$)return E(_);var j=t.a;return E(a(JF,j,_))}),S1=K(function(e,r,n,t){e:for(;;)if(t.b){var o=t.a,c=t.b;switch(o.$){case 0:var C=e,p=r,m=n,P=c;e=C,r=p,n=m,t=P;continue e;case 1:var i=o.a,u=x(P1,e,r,i,n),C=e,p=r,m=u,P=c;e=C,r=p,n=m,t=P;continue e;case 2:var i=o.a,u=x(P1,e,r,i,n),C=e,p=r,m=u,P=c;e=C,r=p,n=m,t=P;continue e;case 3:var C=e,p=r,m=n,P=c;e=C,r=p,n=m,t=P;continue e;case 4:var i=o.a,u=x(P1,e,r,i,n),C=e,p=r,m=u,P=c;e=C,r=p,n=m,t=P;continue e;case 5:var $=o.a,C=e,p=r,m=x(S1,e,r,n,$),P=c;e=C,r=p,n=m,t=P;continue e;default:var l=o.a,d=o.b,b=a(q4,NF(l),e),g=r*l.gL,C=e,p=r,m=x(S1,b,g,n,f([d])),P=c;e=C,r=p,n=m,t=P;continue e}}else return n}),Ju=Ig,Zu=qg,Xu=Og,zW=te,O4=function(e){return{$:5,a:e}},XF=s(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,o=t,c=a(M,n,r);e=o,r=c;continue e}else return r}),go=function(e){return O4(a(XF,e,S))},KF={m7:!0,af:1,ag:0,ah:0,ai:0,aj:1,ak:0,al:0,am:0,an:1,a_:0,a$:0,a0:0,gL:1},YF=function(e){var r=e;return r},G4=C1({gc:bi,j5:0,tP:m1,gW:di,lv:255,g8:bi,g9:bi}),AW=te,En={jb:0,u:!1,jM:0,kI:0,kN:0,uS:0,pC:0,pD:0,L:0},pn=s(function(e,r){var n=e,t=r;return Fn({np:n.pC,nq:n.kN,nr:t.pC,ns:t.kN,nt:n.pD,nu:n.jM,nv:t.pD,nw:t.jM,nx:n.L,ny:n.jb,nz:t.L,nA:t.jb,nB:n.uS,nC:n.kI,nD:t.uS,nE:t.kI})}),Ku=y({gr:a(pn,En,En),h6:a(pn,En,En),h7:a(pn,En,En),h8:a(pn,En,En)},x(At,0,0,0,0)),QF=function(e){var r=e;return r.eP},eE=function(e){var r=e;return r.mB},W4=function(e){var r=e;return .5*r},rE=function(e){var r=e;return v4(r)},N4=function(e){return rE(W4(eE(e)))},J4=function(e){var r=e;return 2*r},aE=function(e){return J4(a(Ft,N4(e),QF(e)))},nE=function(e){var r=e;return r.tJ},tE=s(function(e,r){var n=r.pR,t=r.rw,o=r.s_,c=N4(e),i=Ea(o),u=i,$=Ea(t),l=$,d=nE(e);if(d){var b=aE(e),g=b;return zc(l)?Fn({np:2/(n*g),nq:0,nr:0,ns:0,nt:0,nu:2/g,nv:0,nw:0,nx:0,ny:0,nz:0,nA:-1,nB:0,nC:0,nD:0,nE:1}):Fn({np:2/(n*g),nq:0,nr:0,ns:0,nt:0,nu:2/g,nv:0,nw:0,nx:0,ny:0,nz:-2/(l-u),nA:-(l+u)/(l-u),nB:0,nC:0,nD:0,nE:1})}else return zc(l)?Fn({np:1/(n*c),nq:0,nr:0,ns:0,nt:0,nu:1/c,nv:0,nw:0,nx:0,ny:0,nz:-1,nA:-2*u,nB:0,nC:0,nD:-1,nE:0}):Fn({np:1/(n*c),nq:0,nr:0,ns:0,nt:0,nu:1/c,nv:0,nw:0,nx:0,ny:0,nz:-(l+u)/(l-u),nA:-2*l*u/(l-u),nB:0,nC:0,nD:-1,nE:0})}),oE=function(e){return a(M,B4({ch:1,cl:0,cF:!0}),a(M,g1({gc:_a,j5:U4,tP:e,gW:V4,lv:0,g8:_a,g9:_a}),_l))},jl=s(function(e,r){return(1&e>>r)===1?0:1}),cE=D(function(e,r,n){return wn(a(W,function(t){var o=t<<4,c=x(At,a(jl,t,0),a(jl,t,1),a(jl,t,2),a(jl,t,3));return v(kr,e,y(r,c),oE(o))},a(Cn,1,a(Dn,2,n)-1)))}),ot=function(e){var r=e;return r},iE=Yg,ct={pC:0,pD:0,L:0},Z4=zn({pC:1,pD:0,L:0}),uE=Z4,X4=tc,K4=zn({pC:0,pD:0,L:1}),x1=K4,fE={aZ:ct,vg:uE,vp:X4,vv:x1},lc=function(e){var r=e;return r},$E=function(e){var r=lc(yl(e)),n=Ga(Nu(e)),t=Ga(xl(e)),o=Ga(Sl(e));return Fn({np:o.pC,nq:t.pC,nr:n.pC,ns:r.pC,nt:o.pD,nu:t.pD,nv:n.pD,nw:r.pD,nx:o.L,ny:t.L,nz:n.L,nA:r.L,nB:0,nC:0,nD:0,nE:1})},lE=s(function(e,r){return $E(a(q4,_1(r),e))}),vE=function(e){return a(lE,fE,e)},hi=f([H4,x(p1,!1,!1,!1,!1)]),sE=function(e){var r=_1(e.qk),n=go(e.hK),t=n,o=x(S1,r,1,z,f([t]));if(o.$===1)return S;var c=o.a,i=vE(e.qk),u=(function(){var ue=e.pe;switch(ue.$){case 0:return y(0,0);case 1:return y(1,0);case 2:return y(2,0);case 3:var ye=ue.a;return y(3,ye);case 4:var ye=ue.a;return y(4,ye);default:return y(5,0)}})(),$=u.a,l=u.b,d=a(mF,e.qz,c),b=d.a,g=d.b,C=a(tE,e.qk,{pR:e.pR,rw:g,s_:b}),p=iE(C).nE,m=p?Ga(Nu(r)):ot(WF(e.qk)),P=e.ms,_=P,j=a(Wu,_,e.pz),L=j,T=Fn({np:0,nq:m.pC,nr:Ju(L),ns:e.o1,nt:0,nu:m.pD,nv:Zu(L),nw:YF(L4(c)),nx:0,ny:m.L,nz:Xu(L),nA:$,nB:0,nC:p,nD:0,nE:l}),U=wr(S4,T,i,C,KF,t,{aJ:S,bk:S,ub:S,M:S}),I=e.nh;switch(I.$){case 0:var q=I.a;return wn(f([v(kr,U.aJ,y(q,Ca),pi),v(kr,U.M,y(q,Ca),a(M,$c,hi)),v(kr,U.M,y(q,Ca),a(M,$c,mi)),v(kr,U.M,y(q,Ca),a(M,fc,hi)),v(kr,U.M,y(q,Ca),a(M,fc,mi)),v(kr,U.bk,Ku,pi)]));case 1:var q=I.a;return wn(f([v(kr,U.aJ,Ku,pi),f([G4]),v(kr,U.ub,q.gr,D4),f([A4(0)]),v(kr,U.aJ,y(q,Ca),OF),v(kr,U.M,y(q,Ca),a(M,$c,hi)),v(kr,U.M,y(q,Ca),a(M,$c,mi)),v(kr,U.M,y(q,Ca),a(M,fc,hi)),v(kr,U.M,y(q,Ca),a(M,fc,mi)),v(kr,U.bk,Ku,pi)]));default:var Q=I.a,Z=I.b;return wn(f([v(kr,U.aJ,y(Z,Ca),pi),f([G4]),a(TF,U.ub,Q),v(cE,U.aJ,Z,Dr(Q)),v(kr,U.M,y(Z,Ca),a(M,$c,hi)),v(kr,U.M,y(Z,Ca),a(M,$c,mi)),v(kr,U.M,y(Z,Ca),a(M,fc,hi)),v(kr,U.M,y(Z,Ca),a(M,fc,mi)),v(kr,U.bk,Ku,pi)]))}},dE=function(e){return a(yf,"width",rr(e))},bE=s(function(e,r){var n=f([YA(1),aF(0),WA(!0),x(XA,0,0,0,0)]),t=(function(){var L=e.i4;switch(L.$){case 0:return V(n,"0",1);case 1:return V(a(M,JA,n),"1",1);default:var T=L.a;return V(n,"0",T)}})(),o=t.a,c=t.b,i=t.c,u=e.q0,$=u.a,l=u.b,d=_4(l),b=a(B,"height",rr(d)+"px"),g=_4($),C=g/d,p=a(fn,function(L){return sE({pR:C,qk:e.qk,qz:e.qz,hK:L.hK,ms:L.ms,nh:L.nh,o1:i,pe:L.pe,pz:L.pz})},r),m=a(B,"width",rr(g)+"px"),P=e.pZ,_=P,j=nF(_);return v(eF,"div",f([a(B,"padding","0px"),m,b]),f([y(c,v(cF,o,f([dE(Ia(g*i)),QA(Ia(d*i)),m,b,a(B,"display","block"),a(B,"background-color",j)]),p))]))}),pE=function(e){return{$:2,a:e}},mE=function(e){return pE(e)},hE=function(e){return a(bE,{i4:mE(e.eB),pZ:e.pZ,qk:e.qk,qz:e.qz,q0:e.q0},f([{hK:e.hK,ms:e.ms,nh:e.nh,pe:e.pe,pz:e.pz}]))},FW=1,EW=0,gE=function(e){return{$:0,a:e}},CE=function(e){return gE(e)},_E=s(function(e,r){var n=e,t=r,o=t.L-n.L,c=t.pD-n.pD,i=t.pC-n.pC,u=a(Pe,Te(i),a(Pe,Te(c),Te(o)));if(u){var $=o/u,l=c/u,d=i/u,b=Oa(d*d+l*l+$*$);return E({pC:d/b,pD:l/b,L:$/b})}else return z}),j1=function(e){return e},yE=function(e){return{$:1,a:e}},PE=function(e){return yE(e)},k1=s(function(e,r){var n=e,t=r;return{pC:t.pD*n.L-t.L*n.pD,pD:t.L*n.pC-t.pC*n.L,L:t.pC*n.pD-t.pD*n.pC}}),kl=function(e){var r=e,n=a(Pe,Te(r.pC),a(Pe,Te(r.pD),Te(r.L)));if(n){var t=r.L/n,o=r.pD/n,c=r.pC/n,i=Oa(c*c+o*o+t*t);return E({pC:c/i,pD:o/i,L:t/i})}else return z},SE=s(function(e,r){var n=e,t=r,o=t.L-n.L,c=t.pD-n.pD,i=t.pC-n.pC,u=a(Pe,Te(i),a(Pe,Te(c),Te(o)));if(u){var $=o/u,l=c/u,d=i/u,b=Oa(d*d+l*l+$*$);return b*u}else return uc}),wl=s(function(e,r){var n=e,t=r;return{pC:t.pC-n.pC,pD:t.pD-n.pD,L:t.L-n.L}}),xE=s(function(e,r){var n=e,t=r;return t.pC*n.pC+t.pD*n.pD+t.L*n.L}),Y4=s(function(e,r){var n=e,t=r;return ce(t,n)>0}),jE=s(function(e,r){var n=e,t=r;return ce(t,n)<0}),kE=s(function(e,r){var n=e,t=r;return{pC:t.pC-n.pC,pD:t.pD-n.pD,L:t.L-n.L}}),wE=s(function(e,r){var n=e,t=r,o=t.pC*n.pC+t.pD*n.pD+t.L*n.L;return{pC:n.pC*o,pD:n.pD*o,L:n.L*o}}),LE=function(e){var r=e;return{pC:-r.pC,pD:-r.pD,L:-r.L}},w1={pC:0,pD:0,L:0},DE=D(function(e,r,n){return a(oa,function(t){var o=a(kE,a(wE,t,r),r);return a(oa,function(c){var i=a(k1,r,e),u=a(xE,n,i),$=a(Y4,uc,u)?i:a(jE,uc,u)?LE(i):w1;return a(he,function(l){return V(t,c,l)},kl($))},kl(o))},kl(e))}),TE=function(e){var r=e,n=Te(r.L),t=Te(r.pD),o=Te(r.pC);if(ce(o,t)<1)if(ce(o,n)<1){var c=Oa(r.L*r.L+r.pD*r.pD);return{pC:0,pD:-r.L/c,L:r.pD/c}}else{var c=Oa(r.pD*r.pD+r.pC*r.pC);return{pC:-r.pD/c,pD:r.pC/c,L:0}}else if(ce(t,n)<1){var c=Oa(r.L*r.L+r.pC*r.pC);return{pC:r.L/c,pD:0,L:-r.pC/c}}else{var c=Oa(r.pC*r.pC+r.pD*r.pD);return{pC:-r.pD/c,pD:r.pC/c,L:0}}},L1=function(e){var r=TE(e),n=r,t=n,o=e,c=o,i={pC:c.pD*t.L-c.L*t.pD,pD:c.L*t.pC-c.pC*t.L,L:c.pC*t.pD-c.pD*t.pC};return y(r,i)},ME=function(e){var r=e;return r},HW=te,D1=te,VW=te,zE=s(function(e,r){var n=e,t=r;return a(ml,n,t)}),AE=s(function(e,r){var n=e,t=r;return{pC:n.pD*t.L-n.L*t.pD,pD:n.L*t.pC-n.pC*t.L,L:n.pC*t.pD-n.pD*t.pC}}),Q4=function(e){var r=e;return r.vg},e6=function(e){var r=e;return r.vp},FE=function(e){return a(AE,Q4(e),e6(e))},EE=function(e){var r=e;return r.aZ},HE=function(e){return{aZ:EE(e),vg:Q4(e),vp:e6(e),vv:FE(e)}},VE=function(e){return{eP:e.eP,mB:(function(){var r=e.rG;if(r.$){var t=r.a;return J4(a(zE,W4(t),e.eP))}else{var n=r.a;return n}})(),cS:HE(e.ls),tJ:e.tJ}},BE=s(function(e,r){var n=L1(r),t=n.a,o=n.b;return D1({aZ:e,vg:t,vp:o})}),UE=s(function(e,r){return a(BE,r,e)}),RE=function(e){var r=a(wl,e.hQ,e.I),n=ME(e.fJ),t=a(k1,r,n),o=(function(){var c=v(DE,r,n,t);if(c.$){var d=kl(r);if(d.$){var g=L1(e.fJ),C=g.a,p=g.b;return D1({aZ:e.I,vg:p,vp:e.fJ})}else{var b=d.a;return a(UE,b,e.I)}}else{var i=c.a,u=i.a,$=i.b,l=i.c;return D1({aZ:e.I,vg:l,vp:$})}})();return VE({eP:a(SE,e.I,e.hQ),rG:e.rG,tJ:e.tJ,ls:o})},it=function(e){return e},Ll=function(e){return e},IE=function(e){return RE({I:j1(e.I),hQ:j1(e.hQ),rG:(function(){var r=e.tJ;if(r.$){var t=r.a.pu;return PE(it(t))}else{var n=r.a.eT;return CE(Ll(n))}})(),tJ:(function(){var r=e.tJ;return r.$?1:0})(),fJ:a(fe,tc,a(_E,ct,j1(e.fJ)))})},r6=function(e){return e},BW=te,Yu=function(e){return e},T1=function(e){return v(dr,0,1,e<=.04045?e/12.92:a(Dn,(e+.055)/1.055,2.4))},a6=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return{aQ:o,p5:t,rS:n,tN:r}},Qu=function(e){var r=a6(e),n=r.aQ,t=r.p5,o=r.rS,c=r.tN;return x(At,T1(c),T1(o),T1(t),n)},n6=Gg,qE=function(e){var r=e,n=Ju(r),t=Zu(r),o=Xu(r);return x(y4,.4124*n+.3576*t+.1805*o,.2126*n+.7152*t+.0722*o,.0193*n+.1192*t+.9505*o,n6(r))},OE=function(e){return qE(Qu(e))},t6=function(e){var r=OE(e),n=r.a,t=r.b,o=r.c,c=n+t+o;return Yu({pC:n/c,pD:t/c})},GE=function(e){var r=e;return r},M1=function(e){var r=v(dr,1667,25e3,GE(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Yu({pC:n,pD:t})},WE=Yu({pC:.31271,pD:.32902}),NE=Yu({pC:.37208,pD:.37529}),JE=Yu({pC:.44757,pD:.40745}),ZE=M1(Ru(12e3)),XE=M1(Ru(5600)),Co=function(e){switch(e.$){case 0:return WE;case 1:return XE;case 2:return ZE;case 3:return JE;case 4:return NE;case 5:var r=e.a;return M1(r);default:var n=e.a;return t6(n)}},UW=te,z1=function(e){return e},o6=function(e){return z1(1.2*a(Dn,2,e))},KE=function(e){return Ea(e)},YE=function(e){var r=e;return r},QE=function(e){var r=e.m8,n=e.oN,t=e.mt,o=YE(n);return o6(a(Lf,2,100*a(Dn,t,2)/(o*r)))},eH=function(e){switch(e.$){case 0:var r=e.a;return o6(r);case 1:var n=e.a;return KE(n);default:var t=e.a;return QE({mt:t.mt,m8:t.m8,oN:t.oN})}},rH=s(function(e,r){return{$:2,a:e,b:r}}),c6=function(e){return{$:0,a:e}},Dl=function(e){var r=e;return r},aH=function(e){var r=e;return r.u},i6=c6(Ku.a),nH=s(function(e,r){var n=s(function(t,o){var c=o.a,i=o.b;return e(t)?y(a(M,t,c),i):y(c,a(M,t,i))});return v(cn,n,y(S,S),r)}),tH=function(e){var r=e;return Fn({np:r.pC,nq:r.kN,nr:0,ns:0,nt:r.pD,nu:r.jM,nv:0,nw:0,nx:r.L,ny:r.jb,nz:0,nA:0,nB:r.uS,nC:r.kI,nD:0,nE:0})},oH=Ae(function(e,r,n,t,o,c,i,u){var $=a(nH,aH,f([Dl(e),Dl(r),Dl(n),Dl(t)])),l=$.a,d=$.b;if(l.b){var b=Y(l,d);if(b.b&&b.b.b&&b.b.b.b&&b.b.b.b.b&&!b.b.b.b.b.b){var g=b.a,C=b.b,p=C.a,m=C.b,P=m.a,_=m.b,j=_.a;return a(rH,a(W,tH,l),{gr:a(pn,g,p),h6:a(pn,P,j),h7:a(pn,o,c),h8:a(pn,i,u)})}else return i6}else return c6({gr:a(pn,e,r),h6:a(pn,n,t),h7:a(pn,o,c),h8:a(pn,i,u)})}),RW=te,u6=function(e){return e},f6=s(function(e,r){var n=e,t=Ga(r.eE),o=t.L,c=t.pD,i=t.pC,u=a(Wu,r.jT,r.a),$=u;return{jb:Xu($),u:n,jM:Zu($),kI:0,kN:Ju($),uS:1,pC:-i,pD:-c,L:-o}}),$6=s(function(e,r){var n=e,t=lc(r.tF),o=t.L,c=t.pD,i=t.pC,u=a(Wu,r.jT,r.a),$=u;return{jb:Xu($),u:n,jM:Zu($),kI:0,kN:Ju($),uS:2,pC:i,pD:c,L:o}}),cH=function(e){switch(e.$){case 0:var r=e.a;return a(f6,u6(r.u),{a:Co(r.a),eE:r.eE,jT:r.jT});case 1:var r=e.a;return a($6,u6(r.u),{a:Co(r.a),jT:r.jT,tF:r.tF});default:return En}},A1=function(e){return e},l6=function(e){var r=e;return r},iH=function(e){var r=e;return{pC:-r.pC,pD:-r.pD,L:-r.L}},F1=function(e){e:for(;;){if(oe(e.mY,uc)&&oe(e.mZ,uc))return En;if(a(Y4,Ea(e.mY),Ea(e.mZ))){var r={a:e.a,mY:e.mZ,mZ:e.mY,fJ:iH(e.fJ)};e=r;continue e}else{var n=Te(l6(e.mZ)/Hr),t=Te(l6(e.mY)/Hr),o=Ga(e.fJ),c=o.L,i=o.pD,u=o.pC,$=a(Wu,A1(1),e.a),l=$;return{jb:t*Xu(l),u:!1,jM:t*Zu(l),kI:n/t,kN:t*Ju(l),uS:3,pC:u,pD:i,L:c}}}},uH=function(e){return F1({a:e.a,mY:e.jT,mZ:e.jT,fJ:x1})},v6=!1,fH=function(e){return F1({a:e.a,mY:e.jT,mZ:uc,fJ:e.fJ})},$H=function(e){switch(e.$){case 0:var r=e.a;return a(f6,v6,{a:Co(r.a),eE:r.eE,jT:r.jT});case 1:var r=e.a;return a($6,v6,{a:Co(r.a),jT:r.jT,tF:r.tF});case 2:var r=e.a;return F1({a:Co(r.a),mY:r.mY,mZ:r.mZ,fJ:r.fJ});case 3:var r=e.a;return fH({a:Co(r.a),jT:r.jT,fJ:r.fJ});default:var r=e.a;return uH({a:Co(r.a),jT:r.jT})}},lH=function(e){var r=En,n=function(u){switch(u.$){case 0:return!0;case 1:return!0;default:return!1}},t=a(W,$H,a(ao,4,a(gr,a(nr,hv,n),e))),o=function(u){return a(fe,r,Mr(a(pt,u,t)))},c=a(W,cH,a(ao,4,a(gr,n,e))),i=function(u){return a(fe,r,Mr(a(pt,u,c)))};return Ye(c)&&Ye(t)?i6:_o(oH,i(0),i(1),i(2),i(3),o(0),o(1),o(2),o(3))},vH={$:5},sH=vH,dH={$:0},bH=dH,pH=function(e){return{$:4,a:e}},mH={$:2},hH=function(e){return zc(e)?mH:pH(e)},gH=function(e){return{$:3,a:e}},CH={$:1},_H=function(e){return zc(e)?CH:gH(e)},yH=function(e){switch(e.$){case 0:return bH;case 1:var r=e.a;return _H(r);case 2:var r=e.a;return hH(r);default:return sH}},PH=s(function(e,r){return hE({pZ:OA(e.lL),qk:IE(e.qk),qz:it(e.qz),eB:e.eB,q0:y(r6(Ia(e.$7.lt)),r6(Ia(e.$7.jO))),hK:r,ms:eH(e.ms),nh:lH(e.nh),pe:yH(e.pe),pz:Co(e.pz)})}),SH=function(e){return{$:13,a:e}},xH=function(e){return{$:2,a:e}},jH=function(e){return{$:6,a:e}},kH=function(e){return{$:16,a:e}},wH=function(e){return{$:15,a:e}},LH=function(e){return{$:10,a:e}},DH=function(e){return{$:12,a:e}},TH=function(e){return{$:9,a:e}},MH=function(e){return{$:19,a:e}},zH=function(e){return{$:1,a:e}},AH=function(e){return{$:5,a:e}},FH=function(e){return{$:17,a:e}},EH=function(e){return{$:18,a:e}},HH=function(e){return{$:4,a:e}},VH=function(e){return{$:20,a:e}},BH=function(e){return{$:3,a:e}},UH=function(e){return{$:0,a:e}},RH=function(e){return{$:21,a:e}},IH=function(e){return{$:11,a:e}},qH=function(e){return{$:8,a:e}},OH=function(e){return{$:7,a:e}},GH=function(e){return{$:14,a:e}},s6=pl({eE:V(0,0,1),aZ:v(Kr,0,0,0)}),WH=s(function(e,r){if(e.$){var t=e.a;return a(h4,t,r)}else{var n=e.a;return a(s6,n,r)}}),NH=s(function(e,r){if(e.$){var t=e.a;return v(Kr,r.pC*t.pC,r.pD*t.pD,r.L*t.L)}else{var n=e.a;return v(Kr,r.pC*n,r.pD*n,r.L*n)}}),JH=s(function(e,r){return v(Kr,r.pC+e.pC,r.pD+e.pD,r.L+e.L)}),ZH=s(function(e,r){return{pC:a(hl,e,r.pC),pD:a(hl,e,r.pD),L:a(hl,e,r.L)}}),XH=function(e){return a(g4,V(0,0,1),e)},d6=function(e){if(e.$){var n=e.a;return n}else{var r=e.a;return XH(r)}},KH=s(function(e,r){var n=y(e,r);if(!n.a.$&&!n.b.$){var t=n.a.a,o=n.b.a;return c1(t+o)}else return l1(a(ZH,d6(e),d6(r)))}),E1=function(e){return{$:1,a:e}},YH=s(function(e,r){var n=y(e,r);if(n.a.$)if(n.b.$){var c=n.a.a,i=n.b.a;return E1(v(Kr,c.pC*i.pC,c.pD*i.pD,c.L*i.L))}else{var c=n.a.a,t=n.b.a;return E1(v(Kr,c.pC*t,c.pD*t,c.L*t))}else if(n.b.$){var t=n.a.a,c=n.b.a;return E1(v(Kr,t*c.pC,t*c.pD,t*c.L))}else{var t=n.a.a,o=n.b.a;return Ou(t*o)}}),QH=s(function(e,r){return{gJ:a(KH,e.gJ,r.gJ),gL:a(YH,e.gL,r.gL),g$:a(JH,e.g$,a(WH,e.gJ,a(NH,e.gL,r.g$)))}}),H1=D(function(e,r,n){switch(r.$){case 0:var t=r.a.dD,o=r.a.lk,c=a(QH,e,o);return v(me,H1(c),n,t);case 1:var i=r.a.l4,u=r.a.ho;return Y(a(W,function(b){var g=b.a,C=b.b;return y(g,jH({ho:u,se:C}))},v(H1,e,i,S)),n);case 2:var l=r.a;return a(M,y(e,UH(l)),n);case 3:var l=r.a;return a(M,y(e,zH(l)),n);case 4:var l=r.a;return a(M,y(e,xH(l)),n);case 5:var l=r.a;return a(M,y(e,BH(l)),n);case 6:var l=r.a;return a(M,y(e,HH(l)),n);case 7:var l=r.a;return a(M,y(e,AH(l)),n);case 8:var l=r.a;return a(M,y(e,OH(l)),n);case 9:var l=r.a;return a(M,y(e,qH(l)),n);case 10:var $=r.a;return a(M,y(e,TH($)),n);case 11:var l=r.a;return a(M,y(e,LH(l)),n);case 12:var l=r.a;return a(M,y(e,IH(l)),n);case 13:var l=r.a;return a(M,y(e,DH(l)),n);case 14:var l=r.a;return a(M,y(e,SH(l)),n);case 15:var l=r.a;return a(M,y(e,GH(l)),n);case 16:var l=r.a;return a(M,y(e,wH(l)),n);case 17:var l=r.a;return a(M,y(e,kH(l)),n);case 18:var l=r.a;return a(M,y(e,FH(l)),n);case 19:var l=r.a;return a(M,y(e,EH(l)),n);case 20:var d=r.a;return a(M,y(e,MH(d)),n);case 21:var d=r.a;return a(M,y(e,VH(d)),n);default:var d=r.a;return a(M,y(e,RH(d)),n)}}),eV=function(e){return De(v(H1,$4,e,S))},V1=function(e){var r=e;return r.pC},B1=function(e){var r=e;return r.pD},U1=function(e){var r=e;return r.L},rV=function(e){var r=e,n=U1(r.vv),t=B1(r.vv),o=V1(r.vv),c=U1(r.vp),i=B1(r.vp),u=V1(r.vp),$=U1(r.vg),l=B1(r.vg),d=V1(r.vg);return d*i*n+l*c*o+$*u*t-$*i*o-l*u*n-d*c*t>0},aV=function(e){var r=lc(yl(e)),n=Ga(Nu(e)),t=Ga(xl(e)),o=Ga(Sl(e));return{m7:rV(e),af:o.pC,ag:o.pD,ah:o.L,ai:t.pC,aj:t.pD,ak:t.L,al:n.pC,am:n.pD,an:n.L,a_:r.pC,a$:r.pD,a0:r.L,gL:1}},vc=s(function(e,r){return{$:6,a:e,b:r}}),R1={$:0},de=R1,Tl=s(function(e,r){var n=r;switch(n.$){case 0:return de;case 6:var t=n.a,o=n.b,c=a(P4,t,e);return a(vc,c,o);case 1:return a(vc,e,n);case 2:return a(vc,e,n);case 4:return a(vc,e,n);case 3:return a(vc,e,n);default:return a(vc,e,n)}}),Ml=s(function(e,r){return a(Tl,aV(e),r)}),nV=s(function(e,r){return a(Ml,e,r)}),b6=function(e){var r=e;return r.eE},p6=function(e){var r=e;return r.aZ},tV=s(function(e,r){var n=r,t=lc(p6(e)),o=.5*n,c=dn(o),i=bn(o),u=Ga(b6(e)),$=u.pC*i,l=c*$,d=$*$,b=u.pD*i,g=c*b,C=$*b,p=b*b,m=1-2*(d+p),P=u.L*i,_=c*P,j=2*(C-_),L=2*(C+_),T=$*P,U=2*(T+g),I=2*(T-g),q=b*P,Q=2*(q-l),Z=2*(q+l),ue=P*P,ye=1-2*(p+ue),Me=1-2*(d+ue);return{m7:!0,af:ye,ag:L,ah:I,ai:j,aj:Me,ak:Z,al:U,am:Q,an:m,a_:t.pC-ye*t.pC-j*t.pD-U*t.L,a$:t.pD-L*t.pC-Me*t.pD-Q*t.L,a0:t.L-I*t.pC-Z*t.pD-m*t.L,gL:1}}),oV=D(function(e,r,n){return a(Tl,a(tV,e,r),n)}),I1=D(function(e,r,n){return v(oV,e,r,n)}),IW=te,zl=s(function(e,r){return{eE:r,aZ:e}}),m6=a(zl,ct,x1),cV=s(function(e,r){if(e.$){var t=e.a,o=function(c){var i=c.a,u=c.b,$=c.c;return zn({pC:i,pD:u,L:$})};return a(nV,Pl({aZ:ct,vg:o(t.pC),vp:o(t.pD),vv:o(t.L)}),r)}else{var n=e.a;return v(I1,m6,Ll(n),r)}}),iV=s(function(e,r){var n=lc(e),t=1-r;return{m7:r>=0,af:1,ag:0,ah:0,ai:0,aj:1,ak:0,al:0,am:0,an:1,a_:t*n.pC,a$:t*n.pD,a0:t*n.L,gL:r}}),uV=D(function(e,r,n){return a(Tl,a(iV,e,r),n)}),fV=D(function(e,r,n){return v(uV,e,r,n)}),$V=s(function(e,r){if(e.$)return r;var n=e.a;return v(fV,ct,n,r)}),h6=D(function(e,r,n){return{pC:e,pD:r,L:n}}),g6=function(e){var r=e;return r},lV=function(e){var r=g6(e);return{m7:!0,af:1,ag:0,ah:0,ai:0,aj:1,ak:0,al:0,am:0,an:1,a_:r.pC,a$:r.pD,a0:r.L,gL:1}},C6=s(function(e,r){return a(Tl,lV(e),r)}),_6=s(function(e,r){return a(C6,e,r)}),vV=s(function(e,r){var n=e.L,t=e.pD,o=e.pC;return a(_6,v(h6,o,t,n),r)}),q1=s(function(e,r){var n=e.gL,t=e.gJ,o=e.g$;return a(vV,o,a(cV,t,a($V,n,r)))}),sV=function(e){var r=e;return R4(r.pV)},qW=1,y6=K(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),dV=K(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),P6=K(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),bV=K(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),S6=K(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),pV=K(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),mV=K(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Al=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return x(mV,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return x(y6,n,r,o,1);case 3:var n=e.a,t=e.b,o=e.c;return x(dV,n,t,o,1);case 4:var n=e.a,t=e.b,o=e.c;return x(P6,n,t,o,1);case 5:var n=e.a,t=e.b,o=e.c;return x(pV,n,t,o,1);case 6:var n=e.a,t=e.b,o=e.c;return x(bV,n,t,o,1);case 7:var n=e.a,t=e.b,o=e.c;return x(S6,n,t,o,1);case 8:return e;case 9:return e;default:return e}},O1={$:0},OW=0,hV=Ae(function(e,r,n,t,o,c,i,u){e:for(;;)if(u.b){var $=u.a,l=u.b,d=i($),b=d,g=a(Oe,b.nO,e),C=a(Pe,b.nK,r),p=a(Oe,b.sM,n),m=a(Pe,b.sB,t),P=a(Oe,b.sN,o),_=a(Pe,b.sC,c),j=i,L=l;e=g,r=C,n=p,t=m,o=P,c=_,i=j,u=L;continue e}else return{nK:r,sB:t,sC:c,nO:e,sM:n,sN:o}}),gV=D(function(e,r,n){var t=e(r),o=t;return _o(hV,o.nO,o.nK,o.sM,o.sB,o.sN,o.sC,e,n)}),x6=function(e){var r=e.sC,n=r,t=e.sN,o=t,c=e.sB,i=c,u=e.sM,$=u,l=e.nK,d=l,b=e.nO,g=b;return{nK:a(Pe,g,d),sB:a(Pe,$,i),sC:a(Pe,o,n),nO:a(Oe,g,d),sM:a(Oe,$,i),sN:a(Oe,o,n)}},gi=s(function(e,r){var n=e,t=r;return a(Oe,n,t)}),ef=function(e){var r=e;return r},rf=function(e){var r=e;return r.pC},af=function(e){var r=e;return r.pD},nf=function(e){var r=e;return r.L},j6=function(e){var r=ef(e),n=r.a,t=r.b,o=r.c,c=rf(n),i=af(n),u=nf(n),$=rf(t),l=af(t),d=nf(t),b=rf(o),g=af(o),C=nf(o);return x6({nK:a(ic,c,a(ic,$,b)),sB:a(ic,i,a(ic,l,g)),sC:a(ic,u,a(ic,d,C)),nO:a(gi,c,a(gi,$,b)),sM:a(gi,i,a(gi,l,g)),sN:a(gi,u,a(gi,d,C))})},k6=Ug,ut=function(e){return k6(lc(e))},Fl=function(e){return k6(g6(e))},CV=s(function(e,r){var n=e,t=r,o=a(Pe,Te(t.pC),a(Pe,Te(t.pD),Te(t.L)));if(o){var c=t.L/o,i=t.pD/o,u=t.pC/o,$=Oa(u*u+i*i+c*c);return{pC:n*u/$,pD:n*i/$,L:n*c/$}}else return w1}),_V=CV(A1(1)),w6=D(function(e,r,n){var t=a(wl,r,n),o=a(wl,e,r);return _V(a(k1,t,o))}),yV=function(e){var r=ef(e),n=r.a,t=r.b,o=r.c,c=Fl(v(w6,n,t,o));return V({ac:c,tF:ut(n)},{ac:c,tF:ut(t)},{ac:c,tF:ut(o)})},PV=s(function(e,r){return{$:2,a:e,b:r}}),L6=PV({ml:3,mS:0,nR:4}),D6=function(e){if(e.b){var r=e.a,n=e.b,t=L6(a(W,yV,e)),o=v(gV,j6,r,n);return x(y6,o,e,t,0)}else return O1},GW=te,Wa=D(function(e,r,n){return V(e,r,n)}),Et=D(function(e,r,n){var t=e,o=r,c=n;return{pC:t,pD:o,L:c}}),T6=(function(){var e=it(1),r=it(1),n=it(1),t=a(Ft,-.5,e),o=a(Ft,-.5,r),c=a(Ft,-.5,n),i=v(Et,c,o,t),u=a(Ft,.5,e),$=v(Et,c,o,u),l=a(Ft,.5,r),d=v(Et,c,l,t),b=v(Et,c,l,u),g=a(Ft,.5,n),C=v(Et,g,o,t),p=v(Et,g,l,t),m=v(Et,g,o,u),P=v(Et,g,l,u);return Al(D6(f([v(Wa,i,p,C),v(Wa,i,d,p),v(Wa,$,m,P),v(Wa,$,P,b),v(Wa,C,p,P),v(Wa,C,P,m),v(Wa,i,b,d),v(Wa,i,$,b),v(Wa,i,C,m),v(Wa,i,m,$),v(Wa,d,P,p),v(Wa,d,b,P)])))})(),El={$:0},SV=D(function(e,r,n){return{$:1,a:e,b:r,c:n}}),xV=D(function(e,r,n){var t=r.a,o=r.b,c=r.c,i=e(c),u=e(o),$=e(t),l=Fl(v(w6,$,u,i)),d={ac:l,tF:ut($)},b={ac:l,tF:ut(u)},g={ac:l,tF:ut(i)};return a(M,d,a(M,b,a(M,g,n)))}),tf=function(e){var r=e;return r.aE},jV=K(function(e,r,n,t){if(r.$===1)return z;var o=r.a;if(n.$===1)return z;var c=n.a;if(t.$===1)return z;var i=t.a;return E(v(e,o,c,i))}),of=function(e){var r=e;return r.lr},G1=s(function(e,r){return a(wa,e,of(r))}),M6=function(e){var r=function(n){var t=n.a,o=n.b,c=n.c;return x(jV,D(function(i,u,$){return V(i,u,$)}),a(G1,t,e),a(G1,o,e),a(G1,c,e))};return a(Vr,r,tf(e))},kV=D(function(e,r,n){e:for(;;){var t=a(q0,Er,e),o=t.a,c=t.b;if(ce(Gn(o),Er)<0)return a(O0,!0,{ao:r,U:n,ae:o});var i=c,u=a(M,Cc(o),r),$=n+1;e=i,r=u,n=$;continue e}}),Hl=function(e){return e.b?v(kV,e,S,0):I0},WW=te,wV=s(function(e,r){var n=Da(e),t=function(o){var c=o.a,i=o.b,u=o.c;return c>=0&&ce(c,n)<0&&i>=0&&ce(i,n)<0&&u>=0&&ce(u,n)<0};return a(us,t,r)?{aE:r,lr:e}:{aE:a(gr,t,r),lr:e}}),LV=D(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ci=LV({ml:1,mS:3,nR:4}),Vl=s(function(e,r){var n=ot(r),t=ot(e);return y(V(t.pC,t.pD,t.L),V(n.pC,n.pD,n.L))}),cf=Eg,z6=v(cf,0,0,0),W1=Fr(function(e,r,n,t,o,c){var i=c.a,u=c.b,$=c.c,l=a(ar,a(Vl,e,r),o);if(l.$){var b={ac:z6,tF:ut(r)},g={ac:z6,tF:ut(e)},C=$+1,p=$;return V(a(M,V(n,p,C),a(M,V(n,C,t),i)),a(M,b,a(M,g,u)),$+2)}else{var d=l.a;return V(a(M,V(n,d,t),i),u,$)}}),DV=Le(function(e,r,n,t,o){e:for(;;)if(n.b){var c=n.a,i=c.a,u=c.b,$=c.c,l=n.b,d=e($),b=e(u),g=e(i),C=t+2,p=t+1,m=t,P=e,_=r,j=l,L=t+3,T=wr(W1,d,g,C,m,r,wr(W1,b,d,p,C,r,wr(W1,g,b,m,p,r,o)));e=P,r=_,n=j,t=L,o=T;continue e}else{var U=o,I=U.a,q=U.b;return y(I,De(q))}}),TV=Le(function(e,r,n,t,o){e:for(;;)if(r.b){var c=r.a,i=c.a,u=c.b,$=c.c,l=r.b,d=e($),b=e(u),g=e(i),C=n+2,p=n+1,m=n,P=v(Tr,a(Vl,g,d),C,v(Tr,a(Vl,d,b),p,v(Tr,a(Vl,b,g),m,o))),_=a(M,V(m,p,C),t),j=e,L=l,T=n+3,U=_,I=P;e=j,r=L,n=T,t=U,o=I;continue e}else return V(t,o,n)}),sc=D(function(e,r,n){var t=M6(n),o=v(cn,xV(r),S,t),c=R(TV,r,t,0,S,Be),i=c.a,u=c.b,$=c.c,l=R(DV,r,u,t,0,V(i,S,$)),d=l.a,b=l.b,g=Ye(b)?o:Y(o,b);return v(SV,e,a(wV,Hl(g),d),a(Ci,g,d))}),A6=function(e){return{aE:a(W,function(r){return V(3*r,3*r+1,3*r+2)},a(Cn,0,Dr(e)-1)),lr:Hl(wn(a(W,function(r){var n=r.a,t=r.b,o=r.c;return f([n,t,o])},e)))}},Bl=function(e){switch(e.$){case 0:return El;case 1:var t=e.a,r=e.b,n=a(W,ef,r);return v(sc,t,te,A6(n));case 2:var t=e.a,r=e.b,n=a(W,ef,r);return v(sc,t,te,A6(n));case 3:var t=e.a,o=e.b;return v(sc,t,te,o);case 4:var t=e.a,o=e.b;return v(sc,t,function(c){return c.tF},o);case 5:var t=e.a,o=e.b;return v(sc,t,function(c){return c.tF},o);case 6:var t=e.a,o=e.b;return v(sc,t,function(c){return c.tF},o);case 7:var t=e.a,o=e.b;return v(sc,t,function(c){return c.tF},o);case 8:return El;case 9:return El;default:return El}},F6=Bl(T6),MV=function(e){var r=e;return r.q0},ya=s(function(e,r){return{$:1,a:e,b:r}}),Ul={src:`
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
    `,attributes:{normal:"ac",position:"tF",tangent:"gV",uv:"g4"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},_i={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bu",constantAmbientOcclusion:"by",constantMaterialColor:"et",enabledLights:"ab",lights12:"gr",lights34:"h6",lights56:"h7",lights78:"h8",materialColorTexture:"fe",normalMapTexture:"bH",normalMapType:"bI",sceneProperties:"m",viewMatrix:"n"}},E6=s(function(e,r){return{$:2,a:e,b:r}}),zV=s(function(e,r){return R1}),Pa=function(e){var r=n6(e);return r===1?ya:r?E6:zV},or=D(function(e,r,n){return r===1?e?a(M,fc,n):a(M,$c,n):n}),H6=Wg,$a=function(e){var r=H6(e),n=r.u7,t=r.L,o=r.pD,c=r.pC;return x(At,c*n,o*n,t*n,n)},yi=x(At,0,0,0,0),AV=Ae(function(e,r,n,t,o,c,i,u){if(e.$){var l=e.a,d=e.b;return v(Pa,l,c,Ae(function(b,g,C,p,m,P,_,j){var L=_.a,T=_.b;return R(Ue,v(or,p,u,j),Ul,_i,i,{bu:r,by:n,et:$a(l),ab:T,gr:L.gr,h6:L.h6,h7:L.h7,h8:L.h8,fe:d,j:C,k:g,bH:t,bI:o,l:P,m:b,n:m})}))}else{var $=e.a;return a(ya,c,Ae(function(b,g,C,p,m,P,_,j){var L=_.a,T=_.b;return R(Ue,v(or,p,u,j),Ul,_i,i,{bu:r,by:n,et:yi,ab:T,gr:L.gr,h6:L.h6,h7:L.h7,h8:L.h8,fe:$,j:C,k:g,bH:t,bI:o,l:P,m:b,n:m})}))}}),Pi={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"bu",baseColorTexture:"el",constantAmbientOcclusion:"by",constantBaseColor:"er",constantMetallic:"eu",constantRoughness:"ev",enabledLights:"ab",lights12:"gr",lights34:"h6",lights56:"h7",lights78:"h8",metallicTexture:"ff",normalMapTexture:"bH",normalMapType:"bI",roughnessTexture:"fu",sceneProperties:"m",viewMatrix:"n"}},FV=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){return function(d){return function(b){if(e.$){var C=e.a,p=e.b;return v(Pa,C,l,Ae(function(m,P,_,j,L,T,U,I){var q=U.a,Q=U.b;return R(Ue,v(or,j,b,I),Ul,Pi,d,{bu:c,el:p,by:i,er:$a(C),eu:o,ev:n,ab:Q,gr:q.gr,h6:q.h6,h7:q.h7,h8:q.h8,ff:t,j:_,k:P,bH:u,bI:$,l:T,fu:r,m,n:L})}))}else{var g=e.a;return a(ya,l,Ae(function(m,P,_,j,L,T,U,I){var q=U.a,Q=U.b;return R(Ue,v(or,j,b,I),Ul,Pi,d,{bu:c,el:g,by:i,er:yi,eu:o,ev:n,ab:Q,gr:q.gr,h6:q.h6,h7:q.h7,h8:q.h8,ff:t,j:_,k:P,bH:u,bI:$,l:T,fu:r,m,n:L})}))}}}}}}}}}}}}},V6={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"hs"}},B6={src:`
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
    `,attributes:{position:"tF",uv:"g4"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},N1=K(function(e,r,n,t){return a(ya,r,Ae(function(o,c,i,u,$,l,d,b){return R(Ue,v(or,u,t,b),B6,V6,n,{hs:e,j:i,k:c,l,m:o,n:$})}))}),J1={src:`
        precision lowp float;
        
        uniform lowp vec4 constantColor;
        
        void main () {
            gl_FragColor = constantColor;
        }
    `,attributes:{},uniforms:{constantColor:"es"}},U6={src:`
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
    `,attributes:{position:"tF"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},Ht=K(function(e,r,n,t){return v(Pa,e,r,Ae(function(o,c,i,u,$,l,d,b){return R(Ue,v(or,u,t,b),U6,J1,n,{es:$a(e),j:i,k:c,l,m:o,n:$})}))}),R6=s(function(e,r){return{$:4,a:e,b:r}}),EV={src:`
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
    `,attributes:{},uniforms:{constantColor:"es",pointRadius:"iu",sceneProperties:"m"}},I6={src:`
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
    `,attributes:{position:"tF"},uniforms:{modelMatrix:"j",modelScale:"k",pointRadius:"iu",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},HV=K(function(e,r,n,t){return a(R6,n,Ae(function(o,c,i,u,$,l,d,b){return R(Ue,b,I6,EV,t,{es:$a(e),j:i,k:c,iu:r,l,m:o,n:$})}))}),Z1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eJ",sceneProperties:"m"}},Si=function(e){var r=e;return r},Rl=Jg,Vt=Le(function(e,r,n,t,o){return a(ya,n,Ae(function(c,i,u,$,l,d,b,g){return R(Ue,v(or,$,o,g),U6,Z1,t,{eJ:a(Rl,Si(r),e),j:u,k:i,l:d,m:c,n:l})}))}),VV={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eJ",pointRadius:"iu",sceneProperties:"m"}},BV=Le(function(e,r,n,t,o){return a(R6,t,Ae(function(c,i,u,$,l,d,b,g){return R(Ue,g,I6,VV,o,{eJ:a(Rl,Si(r),e),j:u,k:i,iu:n,l:d,m:c,n:l})}))}),X1={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"eg",enabledLights:"ab",lights12:"gr",lights34:"h6",lights56:"h7",lights78:"h8",materialColor:"j6",sceneProperties:"m",viewMatrix:"n"}},q6={src:`
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
    `,attributes:{normal:"ac",position:"tF"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},Il=Le(function(e,r,n,t,o){return v(Pa,e,n,Ae(function(c,i,u,$,l,d,b,g){var C=b.a,p=b.b;return R(Ue,v(or,$,o,g),q6,X1,t,{eg:r,ab:p,gr:C.gr,h6:C.h6,h7:C.h7,h8:C.h8,j6:$a(e),j:u,k:i,l:d,m:c,n:l})}))}),K1={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"eg",baseColor:"p1",enabledLights:"ab",lights12:"gr",lights34:"h6",lights56:"h7",lights78:"h8",metallic:"id",roughness:"iC",sceneProperties:"m",viewMatrix:"n"}},ql=Ot(function(e,r,n,t,o,c,i){return v(Pa,e,o,Ae(function(u,$,l,d,b,g,C,p){var m=C.a,P=C.b;return R(Ue,v(or,d,i,p),q6,K1,c,{eg:t,p1:$a(e),ab:P,gr:m.gr,h6:m.h6,h7:m.h7,h8:m.h8,id:n,j:l,k:$,l:g,iC:r,m:u,n:b})}))}),UV=s(function(e,r){return{$:0,a:e,b:r}}),Y1=D(function(e,r,n){return{$:1,a:e,b:r,c:n}}),xi=s(function(e,r){return{$:1,a:e,b:r}}),O6=function(e){return{$:0,a:e}},Q1=function(e){return a(zr,e,1)},Ol=a(zr,0,0),Sa=s(function(e,r){if(r.$){var t=r.a.S;return y(t,Ol)}else{var n=r.a;return y(e,Q1(n))}}),dc=s(function(e,r){if(r.$){var n=r.a.rE,t=r.a.S;return y(t,(function(){return n?-1:1})())}else return y(e,0)}),ed=D(function(e,r,n){var t=V(e,r,n);if(t.a.$===1){var o=t.a.a.S;return v(Y1,O6(o),a(Sa,o,r),a(dc,o,n))}else if(t.b.$){var c=t.a.a,o=t.b.a.S;return v(Y1,a(xi,c,o),a(Sa,o,r),a(dc,o,n))}else if(t.c.$){var c=t.a.a,o=t.c.a.S;return v(Y1,a(xi,c,o),a(Sa,o,r),a(dc,o,n))}else{var c=t.a.a,i=t.b.a,u=t.c;return a(UV,c,i)}}),RV=K(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),uf=Le(function(e,r,n,t,o){return{$:1,a:e,b:r,c:n,d:t,e:o}}),IV=Le(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),rd=Le(function(e,r,n,t,o){var c=R(IV,e,r,n,t,o);if(c.a.$===1){var i=c.a.a.S;return R(uf,O6(i),a(Sa,i,r),a(Sa,i,n),a(Sa,i,t),a(dc,i,o))}else if(c.b.$){var u=c.a.a,i=c.b.a.S;return R(uf,a(xi,u,i),y(i,Ol),a(Sa,i,n),a(Sa,i,t),a(dc,i,o))}else if(c.c.$){var u=c.a.a,i=c.c.a.S;return R(uf,a(xi,u,i),a(Sa,i,r),y(i,Ol),a(Sa,i,t),a(dc,i,o))}else if(c.d.$){var u=c.a.a,i=c.d.a.S;return R(uf,a(xi,u,i),a(Sa,i,r),a(Sa,i,n),y(i,Ol),a(dc,i,o))}else if(c.e.$){var u=c.a.a,i=c.e.a.S;return R(uf,a(xi,u,i),a(Sa,i,r),a(Sa,i,n),a(Sa,i,t),y(i,1))}else{var u=c.a.a,$=c.b.a,l=c.c.a,d=c.d.a,b=c.e;return x(RV,u,$,l,d)}}),G6={src:`
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
    `,attributes:{},uniforms:{backlight:"jd",colorTexture:"hs",sceneProperties:"m"}},ad=Le(function(e,r,n,t,o){return a(ya,n,Ae(function(c,i,u,$,l,d,b,g){return R(Ue,v(or,$,o,g),B6,G6,t,{jd:Si(r),hs:e,j:u,k:i,l:d,m:c,n:l})}))}),Gl={src:`
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
    `,attributes:{normal:"ac",position:"tF",uv:"g4"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},qV=Fr(function(e,r,n,t,o,c){if(e.$){var u=e.a,$=e.b;return v(Pa,u,t,Ae(function(l,d,b,g,C,p,m,P){var _=m.a,j=m.b;return R(Ue,v(or,g,c,P),Gl,_i,o,{bu:r,by:n,et:$a(u),ab:j,gr:_.gr,h6:_.h6,h7:_.h7,h8:_.h8,fe:$,j:b,k:d,bH:$,bI:0,l:p,m:l,n:C})}))}else{var i=e.a;return a(ya,t,Ae(function(l,d,b,g,C,p,m,P){var _=m.a,j=m.b;return R(Ue,v(or,g,c,P),Gl,_i,o,{bu:r,by:n,et:yi,ab:j,gr:_.gr,h6:_.h6,h7:_.h7,h8:_.h8,fe:i,j:b,k:d,bH:i,bI:0,l:p,m:l,n:C})}))}}),OV=Ae(function(e,r,n,t,o,c,i,u){if(e.$){var l=e.a,d=e.b;return v(Pa,l,c,Ae(function(b,g,C,p,m,P,_,j){var L=_.a,T=_.b;return R(Ue,v(or,p,u,j),Gl,Pi,i,{bu:d,el:d,by:Q1(1),er:$a(l),eu:o,ev:n,ab:T,gr:L.gr,h6:L.h6,h7:L.h7,h8:L.h8,ff:t,j:C,k:g,bH:d,bI:0,l:P,fu:r,m:b,n:m})}))}else{var $=e.a;return a(ya,c,Ae(function(b,g,C,p,m,P,_,j){var L=_.a,T=_.b;return R(Ue,v(or,p,u,j),Gl,Pi,i,{bu:$,el:$,by:Q1(1),er:yi,eu:o,ev:n,ab:T,gr:L.gr,h6:L.h6,h7:L.h7,h8:L.h8,ff:t,j:C,k:g,bH:$,bI:0,l:P,fu:r,m:b,n:m})}))}}),GV=function(e){var r=e,n=r,t=n.nO,o=n.nK,c=n.sM,i=n.sB,u=n.sN,$=n.sC;return{pC:t+.5*(o-t),pD:c+.5*(i-c),L:u+.5*($-u)}},He=function(e){var r=w4(e),n=r.a,t=r.b,o=r.c;return{qo:lc(GV(e)),rU:n/2,rV:t/2,rW:o/2}},ff=s(function(e,r){switch(e.$){case 0:if(e.b.$){var u=e.a,$=e.b.a.S;switch(r.$){case 0:return de;case 1:return de;case 2:return de;case 3:return de;case 4:return de;case 5:var o=r.a,i=r.c,t=r.d;return x(N1,$,He(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return x(N1,$,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return x(N1,$,He(o),i,t);case 8:return de;case 9:return de;default:return de}}else{var n=e.b.a;switch(r.$){case 0:return de;case 1:var o=r.a,i=r.c,t=r.d;return x(Ht,n,He(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return x(Ht,n,He(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return x(Ht,n,He(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return x(Ht,n,He(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return x(Ht,n,He(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return x(Ht,n,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return x(Ht,n,He(o),i,t);case 8:var o=r.a,i=r.c;return x(Ht,n,He(o),i,0);case 9:var o=r.a,i=r.c;return x(Ht,n,He(o),i,0);default:var o=r.a,c=r.b,i=r.d;return x(HV,n,c,He(o),i)}}case 1:if(e.b.$){var b=e.a,$=e.b.a.S,d=e.c;switch(r.$){case 0:return de;case 1:return de;case 2:return de;case 3:return de;case 4:return de;case 5:var o=r.a,i=r.c,t=r.d;return R(ad,$,d,He(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return R(ad,$,d,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return R(ad,$,d,He(o),i,t);case 8:return de;case 9:return de;default:return de}}else{var l=e.b.a,d=e.c;switch(r.$){case 0:return de;case 1:var o=r.a,i=r.c,t=r.d;return R(Vt,l,d,He(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return R(Vt,l,d,He(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return R(Vt,l,d,He(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return R(Vt,l,d,He(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return R(Vt,l,d,He(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return R(Vt,l,d,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return R(Vt,l,d,He(o),i,t);case 8:var o=r.a,i=r.c;return R(Vt,l,d,He(o),i,0);case 9:var o=r.a,i=r.c;return R(Vt,l,d,He(o),i,0);default:var o=r.a,c=r.b,i=r.d;return R(BV,l,d,c,He(o),i)}}case 2:var g=e.a,C=e.b,Ve=e.c,Xe=e.d,p=v(ed,C,Ve,Xe);if(p.$){var j=p.a,L=p.b,T=L.a,U=L.b,I=p.c,q=I.a,Q=I.b;switch(r.$){case 0:return de;case 1:return de;case 2:return de;case 3:return de;case 4:return de;case 5:return de;case 6:var o=r.a,i=r.c,_=r.d;return wr(qV,j,T,U,He(o),i,_);case 7:var o=r.a,i=r.c,_=r.d;return _o(AV,j,T,U,q,Q,He(o),i,_);case 8:return de;case 9:return de;default:return de}}else{var m=p.a,P=p.b;switch(r.$){case 0:return de;case 1:return de;case 2:var o=r.a,i=r.c,_=r.d;return R(Il,m,P,He(o),i,_);case 3:return de;case 4:var o=r.a,i=r.c,_=r.d;return R(Il,m,P,He(o),i,_);case 5:return de;case 6:var o=r.a,i=r.c,_=r.d;return R(Il,m,P,He(o),i,_);case 7:var o=r.a,i=r.c,_=r.d;return R(Il,m,P,He(o),i,_);case 8:return de;case 9:return de;default:return de}}default:var Z=e.a,ue=e.b,ye=e.c,Me=e.d,Ve=e.e,Xe=e.f,ee=R(rd,ue,ye,Me,Ve,Xe);if(ee.$){var yr=ee.a,qe=ee.b,cr=qe.a,pr=qe.b,Nr=ee.c,Ha=Nr.a,Na=Nr.b,Un=ee.d,T=Un.a,U=Un.b,sr=ee.e,q=sr.a,Q=sr.b;switch(r.$){case 0:return de;case 1:return de;case 2:return de;case 3:return de;case 4:return de;case 5:return de;case 6:var o=r.a,i=r.c,t=r.d;return _o(OV,yr,cr,pr,Ha,Na,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return FV(yr)(cr)(pr)(Ha)(Na)(T)(U)(q)(Q)(He(o))(i)(t);case 8:return de;case 9:return de;default:return de}}else{var Re=ee.a,Ke=ee.b,Ne=ee.c,P=ee.d;switch(r.$){case 0:return de;case 1:return de;case 2:var o=r.a,i=r.c,t=r.d;return ra(ql,Re,Ke,Ne,P,He(o),i,t);case 3:return de;case 4:var o=r.a,i=r.c,t=r.d;return ra(ql,Re,Ke,Ne,P,He(o),i,t);case 5:return de;case 6:var o=r.a,i=r.c,t=r.d;return ra(ql,Re,Ke,Ne,P,He(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return ra(ql,Re,Ke,Ne,P,He(o),i,t);case 8:return de;case 9:return de;default:return de}}}}),$f=function(e){return{$:3,a:e}},W6=s(function(e,r){var n=e.a,t=e.b,o=e.c,c=r.qo;return{qo:{pC:n*c.pC,pD:t*c.pD,L:o*c.L},rU:n*r.rU,rV:t*r.rV,rW:o*r.rW}}),N6=Ng,nd=function(e){return function(r){return function(n){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(l){var d=e.a,b=e.b,g=e.c,C=H6(t),p=C.u7,m=C.L,P=C.pD,_=C.pC,j=N6({u7:p,pC:_*d,pD:P*b,L:m*g});return _o(r,n,j,o,c,i,u,$,l)}}}}}}}}}},td=s(function(e,r){switch(r.$){case 0:return R1;case 6:var n=r.a,t=r.b;return a(vc,n,a(td,e,t));case 1:var o=r.a,c=r.b;return a(ya,a(W6,e,o),a(nd,e,c));case 2:var o=r.a,c=r.b;return a(E6,a(W6,e,o),a(nd,e,c));case 4:return r;case 3:var c=r.a;return $f(a(nd,e,c));default:var i=r.a;return O4(a(W,td(e),i))}}),Wl=s(function(e,r){var n=r;return a(td,e,n)}),Nl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},J6=7683,Z6=7682,WV=v(h1,{j5:0,tP:0,lv:15},{gc:_a,gW:di,g8:_a,g9:J6},{gc:_a,gW:di,g8:_a,g9:Z6}),NV=v(h1,{j5:0,tP:0,lv:15},{gc:_a,gW:di,g8:_a,g9:Z6},{gc:_a,gW:di,g8:_a,g9:J6}),Jl=s(function(e,r){return e?a(M,NV,r):a(M,WV,r)}),JV={src:`
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
    `,attributes:{normal:"ac",position:"tF"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iM",viewMatrix:"n"}},ZV=function(e){if(e.$){var r=e.c;return E(Ae(function(n,t,o,c,i,u,$,l){return R(Ue,a(Jl,c,l),JV,Nl,r,{j:o,k:t,l:u,m:n,iM:$,n:i})}))}else return z},bc=function(e){var r=ZV(e);if(r.$)return de;var n=r.a;return $f(n)},XV=K(function(e,r,n,t){var o=a(ff,n,T6),c=(function(){var d=y(e,r);return d.a?d.b?go(f([o,bc(F6)])):o:d.b?bc(F6):de})(),i=MV(t),u=i.a,$=i.b,l=i.c;return a(Ml,sV(t),a(Wl,V(u,$,l),c))}),KV=s(function(e,r){return x(XV,!0,!0,e,r)}),NW=te,od=s(function(e,r){var n=e,t=r;return ce(t,n)>-1}),cd=s(function(e,r){var n=e,t=r;return n+.5*(t-n)}),YV=zn({pC:-1,pD:0,L:0}),QV=zn({pC:0,pD:0,L:-1}),eB=Fr(function(e,r,n,t,o,c){var i=a(od,n,c)?K4:QV,u=a(od,r,o)?tc:o4,$=a(od,e,t)?Z4:YV,l=V(Ea(a(si,e,t)),Ea(a(si,r,o)),Ea(a(si,n,c))),d=v(Et,a(cd,e,t),a(cd,r,o),a(cd,n,c)),b=Pl({aZ:d,vg:$,vp:u,vv:i});return{pV:b,q0:l}}),rB=s(function(e,r){return wr(eB,rf(e),af(e),nf(e),rf(r),af(r),nf(r))}),X6=s(function(e,r){var n=r.a,t=r.b,o=r.c,c=V(n/2,t/2,o/2),i=c.a,u=c.b,$=c.c;return a(KV,e,a(rB,v(Ar,-i,-u,-$),v(Ar,i,u,$)))}),JW=te,aB=D(function(e,r,n){return{aB:a(zl,e,r),e7:Ea(n.e7),tK:Ea(n.tK)}}),nB=function(e){var r=e;return r.aB},K6=K8,Y6=X8,Q6=s(function(e,r){var n=Gn(e),t=Er-Gn(r.ae)-n,o=v(K6,Er,r.ae,e);return t<0?{ao:a(M,Cc(o),r.ao),U:r.U+1,ae:v(Y6,t,n,e)}:t?{ao:r.ao,U:r.U,ae:o}:{ao:a(M,Cc(o),r.ao),U:r.U+1,ae:So}}),e8=s(function(e,r){var n=r.a,t=r.c,o=r.d,c=Gn(e),i=Er-Gn(o)-c,u=v(K6,Er,o,e),$=a(Kv,u,r);if(i<0){var l=v(Y6,i,c,e);return a(Kv,l,$)}else return $}),ji=J8,tB=function(e){var r=e.a,n=e.c,t=e.d,o=s(function(c,i){if(c.$)return a(M,c,i);var u=c.a;return v(ji,o,i,u)});return{ao:v(ji,o,S,n),U:r/Er|0,ae:t}},oB=s(function(e,r){var n=e.d,t=r.a,o=r.c,c=r.d;if(ce(t,Er*4)<1){var i=s(function(u,$){if(u.$){var d=u.a;return a(e8,d,$)}else{var l=u.a;return v(ji,i,$,l)}});return a(e8,c,v(ji,i,e,o))}else{var i=s(function($,l){if($.$){var b=$.a;return a(Q6,b,l)}else{var d=$.a;return v(ji,i,l,d)}});return a(O0,!0,a(Q6,c,v(ji,i,tB(e),o)))}}),cB=s(function(e,r){var n=of(e),t=tf(e),o=of(r),c=Da(o),i=s(function(l,d){var b=l.a,g=l.b,C=l.c;return a(M,V(b+c,g+c,C+c),d)}),u=tf(r),$=v(me,i,u,t);return{aE:$,lr:a(oB,o,n)}}),Zl={aE:S,lr:I0},r8=function(e){var r=e;return{aE:De(r.aE),lr:r.lr}},id=function(e){if(e.b){var r=e.a,n=e.b;return r8(v(me,cB,r8(r),n))}else return Zl},iB=s(function(e,r){var n=e.ac,t=e.tF;return a(M,{ac:Fl(n),tF:ut(t)},r)}),a8=Hg,n8=Vg,t8=Bg,uB=Ot(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var u=i.a,$=i.b,l=t8(u.tF),d=n8(u.tF),b=a8(u.tF),g=a(Oe,e,b),C=a(Pe,r,b),p=a(Oe,n,d),m=a(Pe,t,d),P=a(Oe,o,l),_=a(Pe,c,l),j=$;e=g,r=C,n=p,t=m,o=P,c=_,i=j;continue e}else return x6({nK:r,sB:t,sC:c,nO:e,sM:n,sN:o})}),o8=s(function(e,r){var n=t8(e.tF),t=n8(e.tF),o=a8(e.tF);return ra(uB,o,o,t,t,n,n,r)}),c8=function(e){var r=v(E0,iB,S,of(e));if(r.b){var n=r.a,t=r.b,o=a(Ci,r,tf(e)),c=a(o8,n,t);return x(P6,c,e,o,0)}else return O1},fB=Le(function(e,r,n,t,o){e:for(;;){var c=t(r/n),i=a(M,c,o);if(oe(r,e))return i;var u=e,$=r-1,l=n,d=t,b=i;e=u,r=$,n=l,t=d,o=b;continue e}}),Xl=s(function(e,r){return e<1?S:R(fB,0,e-1,e,r,S)}),Kl=s(function(e,r){var n=Dr(r);return n>=2?{aE:a(W,function(t){return oe(t,n-1)?V(0,n,1):V(0,1+t,2+t)},a(Cn,0,n-1)),lr:Hl(a(M,e,r))}:Zl}),$B=Fr(function(e,r,n,t,o,c){e:for(;;){var i=a(ja,r,t+1),u=r*a(ja,n,o+1),$=r*o,l=u+i,d=$+i,b=u+t,g=$+t,C=V(g,d,l),p=V(g,l,b),m=a(M,C,a(M,p,c));if(t>0){var P=e,_=r,j=n,L=t-1,T=o,U=m;e=P,r=_,n=j,t=L,o=T,c=U;continue e}else if(o>0){var P=e,_=r,j=n,L=e-1,T=o-1,U=m;e=P,r=_,n=j,t=L,o=T,c=U;continue e}else return m}}),i8=Le(function(e,r,n,t,o){return n<=1||t<=1?Zl:{aE:wr($B,e,n,t,e-1,r-1,S),lr:a(G0,n*t,function(c){return a(o,a(ja,n,c),c/n|0)})}}),lB=D(function(e,r,n){return R(i8,e,r,e+1,r,n)}),u8=Le(function(e,r,n,t,o){return a(n,t/e,o/r)}),vB=D(function(e,r,n){return v(lB,e,r,v(u8,e,r,n))}),pc=function(e){return e},f8=(function(){var e=v(vB,1,72,s(function(u,$){var l=2*Hr*$,d=bn(l),b=dn(l);return{ac:pc({pC:b,pD:-d,L:0}),tF:tt({pC:b,pD:-d,L:u-.5})}})),r=pc({pC:0,pD:0,L:1}),n={ac:r,tF:tt({pC:0,pD:0,L:.5})},t=a(Kl,n,a(Xl,72,function(u){var $=2*Hr*u;return{ac:r,tF:tt({pC:dn($),pD:bn($),L:.5})}})),o=pc({pC:0,pD:0,L:-1}),c={ac:o,tF:tt({pC:0,pD:0,L:-.5})},i=a(Kl,c,a(Xl,72,function(u){var $=2*Hr*u;return{ac:o,tF:tt({pC:dn($),pD:-bn($),L:-.5})}}));return Al(c8(id(f([t,i,e]))))})(),$8=Bl(f8),l8=function(e){var r=b6(e),n=L1(r),t=n.a,o=n.b;return Pl({aZ:p6(e),vg:t,vp:o,vv:r})},sB=function(e){var r=e;return r.e7},dB=function(e){var r=e;return r.tK},bB=K(function(e,r,n,t){var o=l8(nB(t)),c=a(ff,n,f8),i=(function(){var b=y(e,r);return b.a?b.b?go(f([c,bc($8)])):c:b.b?bc($8):de})(),u=dB(t),$=u,l=sB(t),d=l;return a(Ml,o,a(Wl,V($,$,d),i))}),pB=s(function(e,r){return x(bB,!0,!0,e,r)}),ud=D(function(e,r,n){return a(pB,e,v(aB,ct,tc,{e7:it(n),tK:it(r)}))}),fd=function(e){return go(e)},ki=fd,$d=function(e){var r=e.a,n=e.b,t=e.c;return _6(v(h6,r,n,t))},ld=function(e){return $d(V(0,e,0))},mB=function(e){var r=e;return r.qo},hB=function(e){var r=e;return r.tK},gB=function(e){var r=e;return r},CB=s(function(e,r){var n=e.uE,t=e.gV,o=e.g4,c=e.ac,i=e.tF,u=gB(t),$=n?-1:1,l=o,d=l.a,b=l.b,g={ac:Fl(c),tF:ut(i),gV:N6({u7:$,pC:u.pC,pD:u.pD,L:u.L}),g4:a(zr,d,b)};return a(M,g,r)}),_B=function(e){var r=v(E0,CB,S,of(e));if(r.b){var n=r.a,t=r.b,o=a(Ci,r,tf(e)),c=a(o8,n,t);return x(S6,c,e,o,0)}else return O1},yB=D(function(e,r,n){return R(i8,e,r,e+1,r+1,n)}),PB=D(function(e,r,n){return v(yB,e,r,v(u8,e,r,n))}),SB=Al(_B(v(PB,72,72,s(function(e,r){var n=2*Hr*e,t=bn(n),o=-Hr/2+Hr*r,c=bn(o),i=dn(n),u=dn(o),$={pC:u*i,pD:u*t,L:c};return{ac:pc($),tF:tt($),gV:pc({pC:-t,pD:i,L:0}),uE:!0,g4:y(e,r)}})))),Yl=72,Ql=2*Yl,xB=s(function(e,r){e:for(;;){var n=Ql+1,t=a(ja,Ql,2*e+3),o=a(ja,Ql,2*e+2),c=2*e+1,i=2*e,u=Ql,$=a(M,V(u,i,o),a(M,V(i,t,o),a(M,V(i,c,t),a(M,V(c,n,t),r))));if(e){var l=e-1,d=$;e=l,r=d;continue e}else return $}}),jB=D(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),kB=s(function(e,r){e:for(;;){var n=v(jB,0,2*Hr,e/Yl),t={hd:n,ij:0,ix:1},o={hd:n,ij:1,ix:1},c=a(M,t,a(M,o,r));if(e){var i=e-1,u=c;e=i,r=u;continue e}else return c}}),wB=(function(){var e=a(kB,Yl-1,f([{hd:0,ij:0,ix:0},{hd:0,ij:1,ix:0}])),r=a(xB,Yl-1,S);return a(Ci,e,r)})(),LB={src:`
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
    `,attributes:{angle:"hd",offsetScale:"ij",radiusScale:"ix"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iM",viewMatrix:"n"}},v8=function(e){return $f(Ae(function(r,n,t,o,c,i,u,$){return R(Ue,a(Jl,!0,$),LB,Nl,wB,{j:t,k:n,l:i,m:r,iM:u,n:c})}))},DB=K(function(e,r,n,t){var o=a(ff,n,SB),c=(function(){var $=y(e,r);return $.a?$.b?go(f([o,v8(t)])):o:$.b?v8(t):de})(),i=hB(t),u=i;return a(C6,a(wl,ct,mB(t)),a(Wl,V(u,u,u),c))}),TB=s(function(e,r){return x(DB,!0,!0,e,r)}),vd=D(function(e,r,n){return{$:1,a:e,b:r,c:n}}),s8=K(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),sd=Fr(function(e,r,n,t,o,c){return{$:3,a:e,b:r,c:n,d:t,e:o,f:c}}),dd=s(function(e,r){return{$:0,a:e,b:r}}),MB=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(dd,n,t);case 1:var n=e.a,t=e.b,r=e.c;return v(vd,n,t,r);case 2:var n=e.a,t=e.b,i=e.c,u=e.d;return x(s8,n,t,i,u);default:var n=e.a,t=e.b,o=e.c,c=e.d,i=e.e,u=e.f;return wr(sd,n,t,o,c,i,u)}},zB=MB,AB=s(function(e,r){return a(TB,zB(e),r)}),ZW=te,FB=s(function(e,r){return{qo:r,tK:Ea(e)}}),bd=s(function(e,r){return a(AB,e,a(FB,it(r),ct))}),Bt=function(e){return{$:0,a:e}},XW=0,EB=s(function(e,r){var n=a(Wu,A1(1),e);return v(vd,0,Bt(n),r)}),pd=K(function(e,r,n,t){var o=V(e,r,n),c=o.a,i=o.b,u=o.c,$=u<=.5?u*(i+1):u+i-u*i,l=u*2-$,d=function(p){var m=p<0?p+1:p>1?p-1:p;return m*6<1?l+($-l)*m*6:m*2<1?$:m*3<2?l+($-l)*(2/3-m)*6:l},b=d(c-1/3),g=d(c),C=d(c+1/3);return x(c4,C,g,b,t)}),e0=function(e){return x(pd,e.aT,e.a1,e.C,e.aQ)},HB=s(function(e,r){return a(EB,t6(e0(r)),z1(e))}),md={$:0},VB=function(e){var r=e.id,n=e.iC,t=e.p1;return wr(sd,0,Bt(Qu(t)),Bt(v(dr,0,1,n)),Bt(v(dr,0,1,r)),Bt(1),md)},BB=s(function(e,r){var n=e.id,t=e.iC;return VB({p1:e0(r),id:n,iC:t})}),d8=function(e){var r=a6(e),n=r.aQ,t=r.p5,o=r.rS,c=r.tN;return x(At,c,o,t,n)},UB=function(e){return a(dd,0,Bt(d8(e)))},RB=function(e){return UB(e0(e))},Hn=function(e){var r=e.b2;switch(r.$){case 0:return RB(e.f$);case 1:var n=r.a.id,t=r.a.iC;return a(BB,{id:n,iC:t},e.f$);default:var o=r.a.kd;return a(HB,o,e.f$)}},mc=function(e){return Bt(e)},lf=s(function(e,r){if(r.$){var t=r.a;return Gp(t)}else{var n=r.a;return Bt(e(n))}}),b8=function(e){return a(dd,0,a(lf,d8,e))},IB=s(function(e,r){return v(vd,0,a(lf,Qu,e),r)}),qB=function(e){var r=e.id,n=e.iC,t=e.p1;return wr(sd,0,a(lf,Qu,t),a(lf,a(dr,0,1),n),a(lf,a(dr,0,1),r),mc(1),md)},hd=function(e){return x(pd,e.aT,e.a1,e.C,e.aQ)},wi=s(function(e,r){var n=(function(){var u=r.b3;if(u.$)return mc(hd(r.f$));if(u.a.$)return a(l$,"[textured-surface] FromAtlas textures in 3D Surface are deferred. Rendering as fallback colour.",mc(hd(r.f$)));var $=u.a.a.bE;return a(fe,mc(hd(r.f$)),a(ar,$,e.nG))})(),t=r.b2;switch(t.$){case 0:return b8(n);case 1:var o=t.a.id,c=t.a.iC;return qB({p1:n,id:mc(o),iC:mc(c)});default:var i=t.a.kd;return a(IB,n,z1(i))}}),OB=D(function(e,r,n){var t=H(e,{b3:z}),o=a(wi,{nG:Be},t),c=Hn(t),i=a(Pe,0,n-2*r),u=i/2;return ki(f([v(ud,c,r,i),a(ld,u,a(bd,o,r)),a(ld,-u,a(bd,o,r))]))}),GB=function(e){var r=e;return r.aB},p8=(function(){var e={ac:w1,tF:tt({pC:0,pD:0,L:1})},r=pc({pC:0,pD:0,L:-1}),n=.5*Oa(2),t=a(Kl,e,a(Xl,72,function(i){var u=2*Hr*i,$=bn(u),l=dn(u);return{ac:pc({pC:l*n,pD:$*n,L:n}),tF:tt({pC:l,pD:$,L:0})}})),o={ac:r,tF:ct},c=a(Kl,o,a(Xl,72,function(i){var u=2*Hr*i,$=bn(u),l=dn(u);return{ac:r,tF:tt({pC:l,pD:-$,L:0})}}));return Al(c8(id(f([c,t]))))})(),m8=Bl(p8),WB=function(e){var r=e;return r.e7},NB=function(e){var r=e;return r.tK},JB=K(function(e,r,n,t){var o=l8(GB(t)),c=a(ff,n,p8),i=(function(){var b=y(e,r);return b.a?b.b?go(f([c,bc(m8)])):c:b.b?bc(m8):de})(),u=NB(t),$=u,l=WB(t),d=l;return a(Ml,o,a(Wl,V($,$,d),i))}),ZB=s(function(e,r){return x(JB,!0,!0,e,r)}),KW=te,XB=D(function(e,r,n){return{aB:a(zl,e,r),e7:Ea(n.e7),tK:Ea(n.tK)}}),KB=D(function(e,r,n){var t=n/2;return a(ZB,e,v(XB,v(Ar,0,-t,0),tc,{e7:it(n),tK:it(r)}))}),gd=D(function(e,r,n){return fd(f([a(ff,e,r),bc(n)]))}),YB=function(e){return e},QB=function(e){return D6(a(W,YB,M6(e)))},eU=s(function(e,r){if(r.b&&r.b.b){var n=r.a,t=r.b,o=t.a,c=t.b;return{aE:a(W,function(i){return V(0,1+i,2+i)},a(Cn,0,Dr(c))),lr:Hl(a(M,e,r))}}else return Zl}),rU=function(e){return v(Ar,e.pC,e.pD,e.L)},aU=function(e){var r=a(W,rU,e);if(r.b&&r.b.b&&r.b.b.b){var n=r.a,t=r.b,o=t.a,c=t.b,i=c.a,u=c.b;return E(a(eU,n,a(M,o,a(M,i,u))))}else return z},nU=function(e){var r=a(Vr,aU,e);if(r.b){var n=r,t=QB(id(n));return E({sF:t,kX:Bl(t)})}else return z},vf=s(function(e,r){var n=nU(f([r]));if(n.$===1)return ki(S);var t=n.a.kX,o=n.a.sF;return v(gd,e,o,t)}),tU=s(function(e,r){return a(X6,e,V(r,r,r))}),oU=D(function(e,r,n){var t=2*Hr/e,o=a(W,function(c){return a(s6,t*c,v(Kr,0,n,0))},a(Cn,0,e-1));return a(vf,r,o)}),cU=Ot(function(e,r,n,t,o,c,i){e:for(;;)if(i.b){var u=i.a,$=i.b,l=u,d=l.L,b=l.pD,g=l.pC,C=a(Oe,g,e),p=a(Pe,g,r),m=a(Oe,b,n),P=a(Pe,b,t),_=a(Oe,d,o),j=a(Pe,d,c),L=$;e=C,r=p,n=m,t=P,o=_,c=j,i=L;continue e}else return{nK:r,sB:t,sC:c,nO:e,sM:n,sN:o}}),iU=s(function(e,r){var n=e,t=n.L,o=n.pD,c=n.pC;return ra(cU,c,c,o,o,t,t,r)}),h8={src:`
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
    `,attributes:{quadVertex:"iw"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b$",sceneProperties:"m",viewMatrix:"n"}},Vn=K(function(e,r,n,t){var o=ot(t),c=ot(n),i=ot(r),u=ot(e);return Fn({np:u.pC,nq:i.pC,nr:c.pC,ns:o.pC,nt:u.pD,nu:i.pD,nv:c.pD,nw:o.pD,nx:u.L,ny:i.L,nz:c.L,nA:o.L,nB:0,nC:0,nD:0,nE:0})}),uU=M4({ml:1,mS:0,nR:6}),ft=uU(f([{iw:v(cf,0,0,0)},{iw:v(cf,1,0,1)},{iw:v(cf,1,1,2)},{iw:v(cf,0,1,3)}])),g8={src:`
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
    `,attributes:{quadVertex:"iw"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b$",sceneProperties:"m",viewMatrix:"n"}},r0={src:`
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
    `,attributes:{quadVertex:"iw"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b$",sceneProperties:"m",viewMatrix:"n"}},C8={src:`
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
    `,attributes:{quadVertex:"iw"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b$",sceneProperties:"m",viewMatrix:"n"}},fU=Le(function(e,r,n,t,o){var c=a(iU,r,f([n,t,o])),i=He(c);switch(e.$){case 0:if(e.b.$){var $=e.a,l=e.b.a.S;return a(ya,i,Ae(function(Rt,Rn,Ja,Za,Qr,ea,la,Jr){return R(Ue,v(or,Za,0,Jr),C8,V6,ft,{hs:l,j:Ja,k:Rn,l:ea,b$:x(Vn,r,n,t,o),m:Rt,n:Qr})}))}else{var u=e.b.a;return v(Pa,u,i,Ae(function(Rt,Rn,Ja,Za,Qr,ea,la,Jr){return R(Ue,v(or,Za,0,Jr),h8,J1,ft,{es:$a(u),j:Ja,k:Rn,l:ea,b$:x(Vn,r,n,t,o),m:Rt,n:Qr})}))}case 1:if(e.b.$){var g=e.a,l=e.b.a.S,b=e.c;return a(ya,i,Ae(function(Ja,Za,Qr,ea,la,Jr,va,sa){return R(Ue,v(or,ea,0,sa),C8,G6,ft,{jd:Si(b),hs:l,j:Qr,k:Za,l:Jr,b$:x(Vn,r,n,t,o),m:Ja,n:la})}))}else{var d=e.b.a,b=e.c;return a(ya,i,Ae(function(Rt,Rn,Ja,Za,Qr,ea,la,Jr){return R(Ue,v(or,Za,0,Jr),h8,Z1,ft,{jd:b,eJ:a(Rl,Si(b),d),j:Ja,k:Rn,l:ea,b$:x(Vn,r,n,t,o),m:Rt,n:Qr})}))}case 2:var C=e.a,p=e.b,Ne=e.c,yr=e.d,m=v(ed,p,Ne,yr);if(m.$)if(m.a.$){var Z=m.a,ue=Z.a,ye=Z.b,Me=m.b,T=Me.a,U=Me.b,Ve=m.c,q=Ve.a,Q=Ve.b;return v(Pa,ue,i,Ae(function(Qr,ea,la,Jr,va,sa,It,df){var In=It.a,bf=It.b;return R(Ue,v(or,Jr,0,df),r0,_i,ft,{bu:T,by:U,et:$a(ue),ab:bf,gr:In.gr,h6:In.h6,h7:In.h7,h8:In.h8,fe:ye,j:la,k:ea,bH:q,bI:Q,l:sa,b$:x(Vn,r,n,t,o),m:Qr,n:va})}))}else{var j=m.a.a,L=m.b,T=L.a,U=L.b,I=m.c,q=I.a,Q=I.b;return a(ya,i,Ae(function(Rt,Rn,Ja,Za,Qr,ea,la,Jr){var va=la.a,sa=la.b;return R(Ue,v(or,Za,0,Jr),r0,_i,ft,{bu:T,by:U,et:yi,ab:sa,gr:va.gr,h6:va.h6,h7:va.h7,h8:va.h8,fe:j,j:Ja,k:Rn,bH:q,bI:Q,l:ea,b$:x(Vn,r,n,t,o),m:Rt,n:Qr})}))}else{var P=m.a,_=m.b;return v(Pa,P,i,Ae(function(Rt,Rn,Ja,Za,Qr,ea,la,Jr){var va=la.a,sa=la.b;return R(Ue,v(or,Za,0,Jr),g8,X1,ft,{eg:_,ab:sa,gr:va.gr,h6:va.h6,h7:va.h7,h8:va.h8,j6:$a(P),j:Ja,k:Rn,l:ea,b$:x(Vn,r,n,t,o),m:Rt,n:Qr})}))}default:var Xe=e.a,ee=e.b,Re=e.c,Ke=e.d,Ne=e.e,yr=e.f,qe=R(rd,ee,Re,Ke,Ne,yr);if(qe.$)if(qe.a.$){var Di=qe.a,A8=Di.a,ye=Di.b,F8=qe.b,Un=F8.a,sr=F8.b,E8=qe.c,Ut=E8.a,lt=E8.b,H8=qe.d,T=H8.a,U=H8.b,V8=qe.e,q=V8.a,Q=V8.b;return v(Pa,A8,i,Ae(function(sa,It,df,In,bf,kR,B8,wR){var o0=B8.a,LR=B8.b;return R(Ue,v(or,In,0,wR),r0,Pi,ft,{bu:T,el:ye,by:U,er:$a(A8),eu:lt,ev:sr,ab:LR,gr:o0.gr,h6:o0.h6,h7:o0.h7,h8:o0.h8,ff:Ut,j:df,k:It,bH:q,bI:Q,l:kR,b$:x(Vn,r,n,t,o),fu:Un,m:sa,n:bf})}))}else{var Ha=qe.a.a,Na=qe.b,Un=Na.a,sr=Na.b,$t=qe.c,Ut=$t.a,lt=$t.b,Li=qe.d,T=Li.a,U=Li.b,t0=qe.e,q=t0.a,Q=t0.b;return a(ya,i,Ae(function(Qr,ea,la,Jr,va,sa,It,df){var In=It.a,bf=It.b;return R(Ue,v(or,Jr,0,df),r0,Pi,ft,{bu:T,el:Ha,by:U,er:yi,eu:lt,ev:sr,ab:bf,gr:In.gr,h6:In.h6,h7:In.h7,h8:In.h8,ff:Ut,j:la,k:ea,bH:q,bI:Q,l:sa,b$:x(Vn,r,n,t,o),fu:Un,m:Qr,n:va})}))}else{var cr=qe.a,pr=qe.b,Nr=qe.c,_=qe.d;return v(Pa,cr,i,Ae(function(Rn,Ja,Za,Qr,ea,la,Jr,va){var sa=Jr.a,It=Jr.b;return R(Ue,v(or,Qr,0,va),g8,K1,ft,{eg:_,p1:$a(cr),ab:It,gr:sa.gr,h6:sa.h6,h7:sa.h7,h8:sa.h8,id:Nr,j:Za,k:Ja,l:la,b$:x(Vn,r,n,t,o),iC:pr,m:Rn,n:ea})}))}}}),$U=(function(){var e=f([{dn:a(zr,0,1)},{dn:a(zr,1,1)},{dn:a(zr,2,1)},{dn:a(zr,3,1)},{dn:a(zr,0,-1)},{dn:a(zr,1,-1)},{dn:a(zr,2,-1)},{dn:a(zr,3,-1)}]),r=f([V(0,1,2),V(0,2,3),V(4,6,5),V(4,7,6),V(4,5,1),V(1,0,4),V(5,6,2),V(2,1,5),V(6,7,3),V(3,2,6),V(7,4,0),V(0,3,7)]);return a(Ci,e,r)})(),lU={src:`
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
    `,attributes:{quadShadowVertex:"dn"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b$",sceneProperties:"m",shadowLight:"iM",viewMatrix:"n"}},_8=K(function(e,r,n,t){return $f(Ae(function(o,c,i,u,$,l,d,b){return R(Ue,a(Jl,u,b),lU,Nl,$U,{j:i,k:c,l,b$:x(Vn,e,r,n,t),m:o,iM:d,n:$})}))}),vU=Ot(function(e,r,n,t,o,c,i){var u=R(fU,n,t,o,c,i),$=y(e,r);return $.a?$.b?go(f([u,x(_8,t,o,c,i)])):u:$.b?x(_8,t,o,c,i):de}),a0=Le(function(e,r,n,t,o){return ra(vU,!0,!1,e,r,n,t,o)}),sU=D(function(e,r,n){var t=r/2,o=n/2,c=s(function(i,u){return v(Ar,i,u,0)});return R(a0,b8(e),a(c,-t,-o),a(c,t,-o),a(c,t,o),a(c,-t,o))}),Cd=function(e){return{$:1,a:e}},dU=function(e){return x(s8,0,Bt(Qu(e)),mc(1),md)},bU=function(e){return dU(e0(e))},y8=function(e){return $d(V(e,0,0))},pU=function(e){return $d(V(0,0,e))},mU=a(zl,ct,X4),hU=s(function(e,r){return v(I1,mU,Ll(e),r)}),P8=s(function(e,r){return v(I1,m6,Ll(e),r)}),gU=x9,CU=function(e){var r=e.a,n=e.b,t=e.c,o=l4(V(r,n,t));return{pX:a(ml,n,r),r9:gU(t/o),tK:o}},S8=D(function(e,r,n){var t=n.a,o=n.b,c=V(o.pC-t.pC,o.pD-t.pD,o.L-t.L),i=c.a,u=c.b,$=c.c,l=CU(V(i,u,$)),d=l.r9,b=l.pX,g=l.tK;return a(pU,t.L,a(ld,t.pD,a(y8,t.pC,a(P8,b,a(hU,d-Ii(90),a(y8,g/2,a(P8,Ii(90),v(ud,e,r/2,g))))))))}),_U=D(function(e,r,n){var t=s(function(o,c){e:for(;;)switch(o.$){case 0:var i=o.a;return H(c,{f1:E(i)});case 1:var i=o.a,u=c.f1;if(u.$===1)return H(c,{f1:E(i)});var $=u.a;return{hb:a(M,v(S8,bU(e),r,y($,i)),c.hb),f1:E(i)};case 2:var l=o.a.uP,b=Cd(l),g=c;o=b,c=g;continue e;case 3:var d=o.a.rm,b=Cd(d),g=c;o=b,c=g;continue e;default:var d=o.a.rm,b=Cd(d),g=c;o=b,c=g;continue e}});return De(v(me,t,{hb:S,f1:z},n).hb)}),yU=D(function(e,r,n){if(r.b){var t=r.a,o=r.b;return ki(v(U0,s(function(c,i){return a(vf,e,f([c,i,a(cc,V(0,0,-n),i),a(cc,V(0,0,-n),c)]))}),r,Y(o,f([t]))))}else return ki(S)}),PU=D(function(e,r,n){var t=r/2,o=n/2;return R(a0,e,v(Ar,-t,-o,0),v(Ar,t,-o,0),v(Ar,t,o,0),v(Ar,-t,o,0))}),SU=function(e){var r=e;return!r.$&&r.a.$===1},xU=s(function(e,r){var n=r;if(n.$)return fd(S);if(n.a.$){var t=n.a.a.kX,o=n.a.a.sF;return v(gd,e.uH,o,t)}else{var t=n.a.a.kX,o=n.a.a.sF;return v(gd,e.uV,o,t)}}),x8={src:`
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
    `,attributes:{triangleVertex:"ll"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",triangleVertexPositions:"g0",viewMatrix:"n"}},j8={src:`
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
    `,attributes:{triangleVertex:"ll"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",triangleVertexPositions:"g0",viewMatrix:"n"}},sf=function(e){var r=ef(e),n=r.a,t=r.b,o=r.c,c=ot(n),i=ot(t),u=ot(o);return Fn({np:c.pC,nq:i.pC,nr:u.pC,ns:0,nt:c.pD,nu:i.pD,nv:u.pD,nw:0,nx:c.L,ny:i.L,nz:u.L,nA:0,nB:0,nC:0,nD:0,nE:0})},n0=L6(f([V({ll:0},{ll:1},{ll:2})])),jU=s(function(e,r){var n=j6(r),t=He(n);switch(e.$){case 0:if(e.b.$){var c=e.a,i=e.b.a.S;return de}else{var o=e.b.a;return v(Pa,o,t,Ae(function(Z,ue,ye,Me,Ve,Xe,ee,Re){return R(Ue,v(or,Me,0,Re),x8,J1,n0,{es:$a(o),j:ye,k:ue,l:Xe,m:Z,g0:sf(r),n:Ve})}))}case 1:if(e.b.$){var l=e.a;return de}else{var u=e.b.a,$=e.c;return a(ya,t,Ae(function(Z,ue,ye,Me,Ve,Xe,ee,Re){return R(Ue,v(or,Me,0,Re),x8,Z1,n0,{eJ:a(Rl,Si($),u),j:ye,k:ue,l:Xe,m:Z,g0:sf(r),n:Ve})}))}case 2:var d=e.a,b=e.b,L=e.c,T=e.d,g=v(ed,b,L,T);if(g.$)return de;var C=g.a,p=g.b;return v(Pa,C,t,Ae(function(Z,ue,ye,Me,Ve,Xe,ee,Re){var Ke=ee.a,Ne=ee.b;return R(Ue,v(or,Me,0,Re),j8,X1,n0,{eg:p,ab:Ne,gr:Ke.gr,h6:Ke.h6,h7:Ke.h7,h8:Ke.h8,j6:$a(C),j:ye,k:ue,l:Xe,m:Z,g0:sf(r),n:Ve})}));default:var m=e.a,P=e.b,_=e.c,j=e.d,L=e.e,T=e.f,U=R(rd,P,_,j,L,T);if(U.$)return de;var I=U.a,q=U.b,Q=U.c,p=U.d;return v(Pa,I,t,Ae(function(ue,ye,Me,Ve,Xe,ee,Re,Ke){var Ne=Re.a,yr=Re.b;return R(Ue,v(or,Ve,0,Ke),j8,K1,n0,{eg:p,p1:$a(I),ab:yr,gr:Ne.gr,h6:Ne.h6,h7:Ne.h7,h8:Ne.h8,id:Q,j:Me,k:ye,l:ee,iC:q,m:ue,g0:sf(r),n:Xe})}))}}),kU=(function(){var e=f([{fG:a(zr,0,1)},{fG:a(zr,1,1)},{fG:a(zr,2,1)},{fG:a(zr,0,-1)},{fG:a(zr,1,-1)},{fG:a(zr,2,-1)}]),r=f([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return a(Ci,e,r)})(),wU={src:`
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
    `,attributes:{triangleShadowVertex:"fG"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iM",triangleVertexPositions:"g0",viewMatrix:"n"}},k8=function(e){return $f(Ae(function(r,n,t,o,c,i,u,$){return R(Ue,a(Jl,o,$),wU,Nl,kU,{j:t,k:n,l:i,m:r,iM:u,g0:sf(e),n:c})}))},LU=K(function(e,r,n,t){var o=a(jU,n,t),c=y(e,r);return c.a?c.b?go(f([o,k8(t)])):o:c.b?k8(t):de}),DU=s(function(e,r){return x(LU,!0,!0,e,r)}),TU=s(function(e,r){var n=r.a,t=r.b,o=r.c;return a(DU,e,v(Wa,v(Ar,n.pC,n.pD,n.L),v(Ar,t.pC,t.pD,t.L),v(Ar,o.pC,o.pD,o.L)))}),Bn=D(function(e,r,n){var t=r.b3;return t.$?n:a(l$,"[textured-surface] Textured Surface on "+(e+" is deferred. Rendering as fallback colour."),n)}),MU=s(function(e,r){e:for(;;){var n=r.a,t=r.b,o=function(sr){return E(a(q1,n,sr))};switch(t.$){case 0:var p=t.a.jO,ye=t.a.lt,ee=t.a.D;return o(v(PU,a(wi,e,ee),ye,p));case 1:var ue=t.a.tK,ee=t.a.D;return o(v(Bn,"Disc",ee,v(oU,48,Hn(ee),ue)));case 2:var Z=t.a.e7,ue=t.a.tK,ee=t.a.D;return o(v(Bn,"Capsule",ee,v(OB,ee,ue,Z)));case 3:var m=t.a.lr,ee=t.a.D;if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var c=m.a,i=m.b,u=i.a,$=i.b,l=$.a,d=$.b,b=d.a;return o(R(a0,a(wi,e,ee),v(Ar,c.pC,c.pD,c.L),v(Ar,u.pC,u.pD,u.L),v(Ar,l.pC,l.pD,l.L),v(Ar,b.pC,b.pD,b.L)))}else return o(v(Bn,"polygon ("+(rr(Dr(m))+"-vertex)"),ee,a(vf,Hn(ee),m)));case 10:var g=t.a.X,ee=t.a.D;return o(v(Bn,"Cube",ee,a(tU,Hn(ee),g)));case 11:var ue=t.a.tK,ee=t.a.D;return o(a(bd,a(wi,e,ee),ue));case 12:var Z=t.a.e7,ue=t.a.tK,ee=t.a.D;return o(v(Bn,"Cylinder",ee,v(ud,Hn(ee),ue,Z)));case 13:var C=t.a.q0,ee=t.a.D;return o(v(Bn,"Block",ee,a(X6,Hn(ee),C)));case 14:var m=t.a.lr,ee=t.a.D;return o(v(Bn,"Triangle",ee,a(TU,Hn(ee),m)));case 15:var p=t.a.jO,m=t.a.lr,ee=t.a.D,P=a(wi,e,ee),_=H(ee,{b3:z}),j=p/2,L=a(W,function(sr){return H(sr,{L:sr.L+j})},m),T=Hn(_),U=(function(){if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var sr=m.a,$t=m.b,Ut=$t.a,lt=$t.b,Li=lt.a,t0=lt.b,Di=t0.a;return R(a0,P,v(Ar,sr.pC,sr.pD,sr.L+j),v(Ar,Ut.pC,Ut.pD,Ut.L+j),v(Ar,Li.pC,Li.pD,Li.L+j),v(Ar,Di.pC,Di.pD,Di.L+j))}else return v(Bn,"polygon-with-walls top ("+(rr(Dr(m))+"-vertex)"),ee,a(vf,T,L))})(),I=v(yU,T,L,p),q=a(W,function(sr){return H(sr,{L:sr.L-j})},m),Q=a(vf,T,De(q));return o(ki(f([U,Q,I])));case 16:var Z=t.a.e7,ue=t.a.tK,ee=t.a.D;return o(v(Bn,"Cone",ee,v(KB,Hn(ee),ue,Z)));case 17:var ye=t.a.lt,Me=t.a.rm,Ve=t.a.dq,ee=t.a.D;return o(v(Bn,"Line",ee,v(S8,Hn(ee),ye,y(Ve,Me))));case 18:var Xe=t.a.sG,ee=t.a.D;return a(he,function(sr){var $t=a(xU,{uH:a(wi,e,ee),uV:Hn(ee)},sr);return a(q1,n,SU(sr)?$t:v(Bn,"welded mesh",ee,$t))},a(ar,Xe,e.dU));case 4:var Re=t.a.kV,Ke=t.a.fc,Ne=t.a.eM,yr=t.a.fz;if(yr.$)return a(l$,"[LeafPath] fill-only LeafPath in 3D is deferred; no stroke colour set",z);var qe=yr.a;return o(ki(v(_U,qe,Ke,Re)));case 5:var cr=t.a,pr=cr.tP;if(pr.$)return z;var Nr=pr.a.bE;return a(he,function(sr){return a(q1,n,v(sU,sr,cr.lt,cr.jO))},a(ar,Nr,e.nG));case 6:var Ha=t.a.se,Na=e,Un=y(n,Ha);e=Na,r=Un;continue e;case 7:return z;case 8:return z;case 9:return z;case 19:return z;case 20:return z;default:return z}}}),zU=s(function(e,r){return a(Vr,MU(e),eV(r))}),AU=function(e){return x(pd,e.aT,e.a1,e.C,e.aQ)},FU=s(function(e,r){return a(PH,{lL:AU(e.lL),qk:e.qk,qz:e.qz,eB:e.$7.eB,ms:e.ms,nh:e.nh,$7:e.$7,pe:e.pe,pz:e.pz},a(zU,{nG:e.nG,dU:Be},r))}),w8=function(e){return $i(V(0,e,0))},EU=function(e){return{$:2,a:e}},HU=D(function(e,r,n){return EU({jO:n,D:e,lt:r})}),VU=s(function(e,r){return v(HU,e,r,r)}),BU=function(e){return a(w8,-.001,a(b1,-Hr/2,a(VU,Fa(e),20)))},UU=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,c=a(Oe,r,a(Oe,n,t)),i=a(Pe,r,a(Pe,n,t)),u=(c+i)/2,$=oe(c,i)?0:u<.5?(i-c)/(i+c):(i-c)/(2-i-c),l=oe(i,r)?(n-t)/(i-c):oe(i,n)?2+(t-r)/(i-c):4+(r-n)/(i-c),d=l*(1/6),b=gv(d)?0:d<0?d+1:d;return{aQ:o,aT:b,C:u,a1:$}},RU=function(e){return UU(e)},IU=function(e){return{$:16,a:e}},qU=D(function(e,r,n){return IU({jO:n,D:e,lr:r})}),OU=function(e){return{$:5,a:e}},GU=s(function(e,r){return OU({D:e,lr:r})}),WU=K(function(e,r,n,t){var o=a(W,function($){return{pC:$.pC,pD:$.pD,L:0}},n.tE),c=v(qU,r.D,o,r.cZ),i=(function(){var $=r.lJ;if($.$===1)return S;var l=$.a,d=1e-4,b=a(W,function(g){return{pC:g.pC,pD:g.pD,L:-r.cZ/2-d}},De(n.tE));return f([a(GU,l,b)])})(),u=a(M,c,i);return a(v1,s1(t),Yr(u))}),NU=D(function(e,r,n){return a(W,function(t){var o=t.b,c=t.c;return x(WU,e,r,o,c)},n.cq)}),JU=s(function(e,r){return a(w8,e/2,a(b1,-Hr/2,r))}),ZU=function(e){var r=e.hD*bn(e.eH),n=e.hD*dn(e.eH),t=n*bn(e.pX),o=n*dn(e.pX);return{I:v(Kr,e.hQ.pC+t,e.hQ.pD+r,e.hQ.L+o),hQ:e.hQ,tJ:e.tJ,fJ:v(Kr,0,1,0)}},XU=function(e){return{$:0,a:e}},KU=j9,YU=XU({eT:2*KU(.5)}),L8=function(e){return ZU({pX:e.co.pX,hD:e.co.hD,eH:e.co.eH,hQ:e.co.hQ,tJ:YU})},QU=s(function(e,r){var n=L8(r),t=a(W,function(c){return v(qA,e.jj,n,{pS:a($1,e.kz.cZ,c.pS),jO:c.jO,bE:c.bE})},e.sp),o=Yr(a(M,BU(e.qZ),Y(a(W,JU(e.kz.cZ),Y(v(NU,e.jj,e.kz,e.dx),e.kw)),Y(t,e.vc))));return a(gu,Lc,a(FU,{lL:RU(e.gF.lL),qk:n,qz:.1,ms:e.gF.ms,nh:e.gF.nh,nG:e.jj.nG,$7:{eB:e.eB,jO:e.$7.jO,lt:e.$7.lt},pe:e.gF.pe,pz:e.gF.pz},o))}),_d=function(e){return{$:1,a:e}},eR=s(function(e,r){return a(y0,e,Gv(r))}),rR=eR("checked"),aR=xa("input"),nR=xa("label"),tR=a(Oc,f(["target","checked"]),ne),oR=function(e){return a(cs,"change",a(Je,e,tR))},cR=E3("type"),iR=s(function(e,r){var n=r.ez,t=pe(a(Ee,function(d){return d.lh},e)),o=f([a(B,"display","flex"),a(B,"align-items","center"),a(B,"gap","8px"),a(B,"padding","4px 8px"),a(B,"font-size","12px"),a(B,"cursor","pointer"),a(B,"color",t)]),c=D(function(d,b,g){return a(nR,o,f([a(aR,f([cR("checkbox"),rR(b),oR(function(C){return _d(function(p){return a(g,p,C)})})]),S),fr(d)]))}),i=pe(a(Ee,function(d){return d.jh},e)),u=s(function(d,b){return a(M3,f([a(B,"flex","1"),a(B,"padding","4px 8px"),a(B,"font-size","11px"),a(B,"cursor","pointer"),a(B,"background","transparent"),a(B,"color",t),a(B,"border","1px solid "+i),a(B,"border-radius","3px"),A3(b)]),f([fr(d)]))}),$=pe(a(Ee,function(d){return d.D},e)),l={ex:!0,js:!0,eD:!0,eZ:!0,fm:!0,fp:!0,fq:!0,fF:!0};return a(br,f([a(B,"display","flex"),a(B,"flex-direction","column"),a(B,"background",$),a(B,"border","1px solid "+i),a(B,"border-radius","6px"),a(B,"padding","6px"),a(B,"min-width","180px"),a(B,"user-select","none")]),f([a(br,f([a(B,"padding","2px 8px 6px 8px"),a(B,"font-size","11px"),a(B,"color",pe(a(Ee,function(d){return d.li},e))),a(B,"text-transform","uppercase"),a(B,"letter-spacing","0.05em")]),f([fr("Dev overlay")])),v(c,"Hinge axes",n.eZ,s(function(d,b){return H(d,{eZ:b})})),v(c,"Dihedral angles",n.eD,s(function(d,b){return H(d,{eD:b})})),v(c,"Paper normals",n.fq,s(function(d,b){return H(d,{fq:b})})),v(c,"Panel paths",n.fF,s(function(d,b){return H(d,{fF:b})})),v(c,"Control axes",n.ex,s(function(d,b){return H(d,{ex:b})})),v(c,"Control names",n.js,s(function(d,b){return H(d,{js:b})})),v(c,"Origin triad",n.fm,s(function(d,b){return H(d,{fm:b})})),v(c,"Panel outlines",n.fp,s(function(d,b){return H(d,{fp:b})})),a(br,f([a(B,"display","flex"),a(B,"gap","4px"),a(B,"margin-top","6px"),a(B,"padding-top","6px"),a(B,"border-top","1px solid "+i)]),f([a(u,"All",_d(function(d){return l})),a(u,"None",_d(function(d){return Hb}))]))]))}),D8=s(function(e,r){var n=(function(){var u=e.uf;if(u.$)return fr("");var $=u.a;return a(br,f([a(B,"position","absolute"),a(B,"bottom","12px"),a(B,"left","50%"),a(B,"transform","translateX(-50%)"),a(B,"width","240px")]),f([Kn(Om({q1:!1,nH:1,nM:0,ik:$.ik,ur:.001,u2:$.u2}))]))})(),t=e.nR===2,o=t?a(AA,{qk:L8(r),dZ:e.kz.cZ,$7:e.hm,e:e.e,dx:e.dx},r):{r2:S,uc:S},c=a(QU,{jj:e.jj,qZ:e.qZ,eB:e.eB,sp:e.sp,kw:Y(e.kw,o.uc),kz:e.kz,gF:e.gF,$7:e.hm,dx:e.dx,vc:e.vc},r),i=t?f([a(br,f([a(B,"position","absolute"),a(B,"inset","0"),a(B,"pointer-events","none")]),o.r2),a(br,f([a(B,"position","absolute"),a(B,"top","12px"),a(B,"left","12px")]),f([a(gu,e.n4,a(iR,e.e,r))]))]):S;return a(br,f([a(B,"position","relative"),a(B,"width",J(e.hm.lt)+"px"),a(B,"height",J(e.hm.jO)+"px")]),Y(f([a(br,Y(a(sA,e.n4,r),f([a(B,"width","100%"),a(B,"height","100%"),a(B,"user-select","none")])),f([c]))]),Y(i,f([n]))))}),YW=te,uR={aZ:{pC:0,pD:0,L:0},bU:V(1,0,0),bV:V(0,1,0),bW:V(0,0,1)},fR=function(e){return e},$R=s(function(e,r){var n=r;return{aZ:a(li,n.aZ,e),bU:a(ho,n.bU,e),bV:a(ho,n.bV,e),bW:a(ho,n.bW,e)}}),lR=D(function(e,r,n){var t=n,o=function(c){var i=bn(r),u=dn(r),$=c,l=$.a,d=$.b,b=$.c,g=zt(e.eE),C=g.a,p=g.b,m=g.c,P=C*l+p*d+m*b,_=V(p*b-m*d,m*l-C*b,C*d-p*l),j=_.a,L=_.b,T=_.c;return V(l*u+j*i+C*P*(1-u),d*u+L*i+p*P*(1-u),b*u+T*i+m*P*(1-u))};return{aZ:v(pl,e,r,t.aZ),bU:o(t.bU),bV:o(t.bV),bW:o(t.bW)}}),vR=D(function(e,r,n){var t=r,o=qu(t.ei),c=qu(t.eh),i=zt(a(vi,o,c)),u=fR({aZ:o,bU:i,bV:a(Gu,V(0,0,1),i),bW:V(0,0,1)}),$=a($R,e,u),l={eE:a(ho,i,e),aZ:a(li,o,e)},d=t.eC(n);return v(lR,l,d,$)}),T8=Le(function(e,r,n,t,o){var c=n.a,i=n.b,u=D(function(l,d,b){var g=d.a,C=d.b,p=(function(){var j=g;return j.eC(t)})(),m=Y(r,f([l])),P=v(vR,e,g,t),_=H(b,{dM:a(M,{eC:p,jQ:g,it:e,kJ:m},b.dM)});return R(T8,P,m,C,t,_)}),$=H(o,{cq:a(M,V(r,c,e),o.cq)});return v(me,s(function(l,d){var b=l.a,g=l.b;return v(u,b,g,d)}),$,a(_n,Ao,i))}),M8=s(function(e,r){var n={dM:S,cq:S},t=R(T8,uR,S,e,r,n);return{dM:De(t.dM),cq:De(t.cq)}}),sR=D(function(e,r,n){var t={qJ:Be,oU:n.oU},o=a(M8,lA,t),c={lJ:E(tA({rv:r1(r),tP:a4(wz)})),D:Fa(r1(r)),cZ:.01};return a(br,f([a(B,"max-width","720px"),a(B,"margin","0 auto"),a(B,"padding","32px"),a(B,"display","flex"),a(B,"flex-direction","column"),a(B,"gap","16px"),a(B,"color",pe(a(Ee,function(i){return i.lh},r)))]),f([rA(r),a(br,f([a(B,"border","1px solid "+pe(a(Ee,function(i){return i.jh},r))),a(B,"border-radius","8px"),a(B,"overflow","hidden"),a(B,"align-self","center")]),f([a(D8,{jj:e,hm:{jO:420,lt:600},qZ:W5(r),eB:e.eB,sp:S,nR:e.nR,n4:Yb,kw:S,kz:c,gF:i4,uf:E({ik:kz,u2:n.oU}),e:r,dx:o,vc:S},n.d1)])),nA(r)]))}),dR=function(e){return{$:0,a:e}},bR=`
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
`,pR=function(e){return Kn(a(ll,e,bR))},mR=`
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
`,hR=function(e){return Kn(a(ll,e,mR))},gR={tE:f([{pC:0,pD:-.5},{pC:1,pD:-.5},{pC:1,pD:.5},{pC:0,pD:.5}])},CR={tE:f([{pC:0,pD:0},{pC:1,pD:0},{pC:1,pD:1},{pC:0,pD:1}])},_R={dG:.35,k1:-.25,k2:.25},z8=D(function(e,r,n){return{eh:r,ei:e,js:S,eC:n}}),yR=function(e){var r=e.k2-e.k1,n={tE:f([{pC:0,pD:0},{pC:r,pD:0},{pC:r,pD:e.dG},{pC:0,pD:e.dG}])},t=function(i){return Hr*i.oU},o=v(z8,{pC:e.dG,pD:e.k2},{pC:e.dG,pD:e.k1},t),c=v(z8,{pC:r,pD:e.dG},{pC:0,pD:e.dG},t);return{bF:y(o,a(oc,n,f([y(c,a(oc,n,S))]))),bM:a(oc,n,S)}},PR=(function(){var e=yR(_R),r=e.bF,n=r.a,t=r.b;return a(oc,gR,f([y(v(u4,{pC:0,pD:.5},{pC:0,pD:-.5},Hr),a(oc,CR,S)),y(n,t)]))})(),SR=D(function(e,r,n){var t={qJ:Be,oU:n.oU},o=a(M8,PR,t),c={lJ:z,D:Fa(r1(r)),cZ:.01};return a(br,f([a(B,"max-width","720px"),a(B,"margin","0 auto"),a(B,"padding","32px"),a(B,"display","flex"),a(B,"flex-direction","column"),a(B,"gap","16px"),a(B,"color",pe(a(Ee,function(i){return i.lh},r)))]),f([pR(r),a(br,f([a(B,"border","1px solid "+pe(a(Ee,function(i){return i.jh},r))),a(B,"border-radius","8px"),a(B,"overflow","hidden"),a(B,"align-self","center")]),f([a(D8,{jj:e,hm:{jO:420,lt:600},qZ:W5(r),eB:e.eB,sp:S,nR:e.nR,n4:r2,kw:S,kz:c,gF:i4,uf:E({ik:dR,u2:n.oU}),e:r,dx:o,vc:S},n.d1)])),hR(r)]))}),xR=D(function(e,r,n){return G5((function(){if(n.$){var o=n.a;return a(gu,jz,v(SR,e,r,o))}else{var t=n.a;return a(gu,xz,v(sR,e,r,t))}})())}),jR=Pz({bD:zC,cT:f([Bb({aA:f([a(Sz,"card-art","assets/card-art.jpg")]),bE:"hinge",b_:D(function(e,r,n){var t=a(FC,e,n),o=t.a;return V(H0(o),Zn,S)}),aH:S,fr:!0}),Bb({aA:S,bE:"slit",b_:D(function(e,r,n){var t=a(EC,e,n),o=t.a;return V(V0(o),Zn,S)}),aH:S,fr:!0})]),sq:e_,bh:o_,bi:f_,bp:xR});u7({PopUpExplainer:{Main:{init:jR(a(A,function(e){return ae({g:e})},a(k,"inputs",a(A,function(e){return a(A,function(r){return a(A,function(n){return a(A,function(t){return a(A,function(o){return a(A,function(c){return a(A,function(i){return a(A,function(u){return a(A,function($){return a(A,function(l){return a(A,function(d){return a(A,function(b){return a(A,function(g){return a(A,function(C){return a(A,function(p){return a(A,function(m){return a(A,function(P){return a(A,function(_){return a(A,function(j){return a(A,function(L){return ae({dC:L,ey:j,eA:_,eB:P,hF:m,eQ:p,rA:C,h_:g,kv:b,tm:d,gD:l,tp:$,tt:u,tA:i,fs:c,$7:o,fv:t,iJ:n,eb:r,fN:e})},a(k,"boundingClientRects",hr(a(A,function(L){return a(A,function(T){return a(A,function(U){return ae({rk:U,rI:T,t7:L})},a(k,"elements",hr(a(A,function(U){return a(A,function(I){return ae({lX:I,bE:U})},a(k,"boundingClientRect",a(A,function(I){return a(A,function(q){return a(A,function(Q){return a(A,function(Z){return ae({bx:Z,bF:Q,bM:q,bS:I})},a(k,"bottom",N))},a(k,"left",N))},a(k,"right",N))},a(k,"top",N))))},a(k,"id",ke)))))},a(k,"frameId",ke))},a(k,"scroll",a(A,function(L){return a(A,function(T){return a(A,function(U){return a(A,function(I){return a(A,function(q){return a(A,function(Q){return ae({l9:Q,ma:q,bF:I,bS:U,pu:T,pv:L})},a(k,"contentHeight",N))},a(k,"contentWidth",N))},a(k,"left",N))},a(k,"top",N))},a(k,"viewportHeight",N))},a(k,"viewportWidth",N)))))))},a(k,"darkModeIsOn",ne))},a(k,"deviceOrientation",Do(f([wc(z),a(Je,E,a(A,function(_){return a(A,function(j){return a(A,function(L){return ae({aQ:L,p3:j,rN:_})},a(k,"alpha",N))},a(k,"beta",N))},a(k,"gamma",N)))]))))},a(k,"devicePixelRatio",N))},a(k,"dt",N))},a(k,"focusedElementIsContentEditable",ne))},a(k,"focusedElementIsTextInput",ne))},a(k,"keyboard",a(A,function(g){return a(A,function(C){return a(A,function(p){return a(A,function(m){return a(A,function(P){return a(A,function(_){return a(A,function(j){return a(A,function(L){return a(A,function(T){return a(A,function(U){return ae({i3:U,jt:T,jA:L,q8:j,bF:_,j9:P,tH:m,bM:p,kY:C,lp:g})},a(k,"alt",ne))},a(k,"ctrl",ne))},a(k,"down",ne))},a(k,"downs",hr(ke)))},a(k,"left",ne))},a(k,"meta",ne))},a(k,"pressedKeys",hr(ke)))},a(k,"right",ne))},a(k,"shift",ne))},a(k,"up",ne))))},a(k,"operatingSystem",ke))},a(k,"pageId",ke))},a(k,"pageScroll",a(A,function(l){return a(A,function(d){return a(A,function(b){return a(A,function(g){return a(A,function(C){return a(A,function(p){return ae({l9:p,ma:C,bF:g,bS:b,pu:d,pv:l})},a(k,"contentHeight",N))},a(k,"contentWidth",N))},a(k,"left",N))},a(k,"top",N))},a(k,"viewportHeight",N))},a(k,"viewportWidth",N))))},a(k,"paneBoundingBoxes",hr(a(A,function($){return a(A,function(l){return a(A,function(d){return a(A,function(b){return a(A,function(g){return ae({jO:g,bF:b,tq:d,bS:l,lt:$})},a(k,"height",N))},a(k,"left",N))},a(k,"paneId",ke))},a(k,"top",N))},a(k,"width",N)))))},a(k,"persisted",hr(a(A,function(u){return a(A,function($){return ae(y(u,$))},a(Jn,1,ke))},a(Jn,0,ke)))))},a(k,"pointer",a(A,function(i){return a(A,function(u){return a(A,function($){return a(A,function(l){return a(A,function(d){return a(A,function(b){return a(A,function(g){return a(A,function(C){return a(A,function(p){return a(A,function(m){return a(A,function(P){return a(A,function(_){return ae({q4:_,jA:P,hG:m,hH:p,rj:C,sj:g,sU:b,tZ:d,t$:l,lp:$,pC:u,pD:i})},a(k,"doubleClick",ne))},a(k,"down",ne))},a(k,"dx",N))},a(k,"dy",N))},a(k,"elementIdsForLastDown",hr(ke)))},a(k,"isDown",ne))},a(k,"move",ne))},a(k,"rightDown",ne))},a(k,"rightUp",ne))},a(k,"up",ne))},a(k,"x",N))},a(k,"y",N))))},a(k,"rawPointer",a(A,function(c){return a(A,function(i){return a(A,function(u){return a(A,function($){return a(A,function(l){return a(A,function(d){return a(A,function(b){return a(A,function(g){return a(A,function(C){return a(A,function(p){return a(A,function(m){return a(A,function(P){return ae({q4:P,jA:m,hG:p,hH:C,rj:g,sj:b,sU:d,tZ:l,t$:$,lp:u,pC:i,pD:c})},a(k,"doubleClick",ne))},a(k,"down",ne))},a(k,"dx",N))},a(k,"dy",N))},a(k,"elementIdsForLastDown",hr(ke)))},a(k,"isDown",ne))},a(k,"move",ne))},a(k,"rightDown",ne))},a(k,"rightUp",ne))},a(k,"up",ne))},a(k,"x",N))},a(k,"y",N))))},a(k,"screen",a(A,function(o){return a(A,function(c){return ae({jO:c,lt:o})},a(k,"height",N))},a(k,"width",N))))},a(k,"screenOrientationAngle",N))},a(k,"searchParamsFromUrl",Do(f([wc(z),a(Je,E,hr(a(A,function(n){return a(A,function(t){return ae(y(n,t))},a(Jn,1,ke))},a(Jn,0,ke))))]))))},a(k,"touches",hr(a(A,function(r){return a(A,function(n){return a(A,function(t){return ae({bE:t,pC:n,pD:r})},a(k,"id",qi))},a(k,"x",N))},a(k,"y",N)))))},a(k,"wheel",a(A,function(e){return a(A,function(r){return a(A,function(n){return a(A,function(t){return a(A,function(o){return ae({mg:o,mh:t,mm:n,oi:r,oj:e})},a(k,"deltaX",N))},a(k,"deltaY",N))},a(k,"elementIdsForLastWheel",hr(ke)))},a(k,"pinchDeltaForChrome",N))},a(k,"pinchScaleForSafari",Do(f([wc(z),a(Je,E,N)])))))))))(0)}}})})(this);
