(function(zc){"use strict";function eo(e,r,a){return a.a=e,a.f=r,a}function l(e){return eo(2,e,function(r){return function(a){return e(r,a)}})}function S(e){return eo(3,e,function(r){return function(a){return function(t){return e(r,a,t)}}})}function q(e){return eo(4,e,function(r){return function(a){return function(t){return function(o){return e(r,a,t,o)}}}})}function Te(e){return eo(5,e,function(r){return function(a){return function(t){return function(o){return function(c){return e(r,a,t,o,c)}}}}})}function Vr(e){return eo(6,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return e(r,a,t,o,c,i)}}}}}})}function ro(e){return eo(7,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return e(r,a,t,o,c,i,u)}}}}}}})}function Be(e){return eo(8,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return e(r,a,t,o,c,i,u,$)}}}}}}}})}function I0(e){return eo(9,e,function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){return e(r,a,t,o,c,i,u,$,v)}}}}}}}}})}function n(e,r,a){return e.a===2?e.f(r,a):e(r)(a)}function s(e,r,a,t){return e.a===3?e.f(r,a,t):e(r)(a)(t)}function C(e,r,a,t,o){return e.a===4?e.f(r,a,t,o):e(r)(a)(t)(o)}function I(e,r,a,t,o,c){return e.a===5?e.f(r,a,t,o,c):e(r)(a)(t)(o)(c)}function Sr(e,r,a,t,o,c,i){return e.a===6?e.f(r,a,t,o,c,i):e(r)(a)(t)(o)(c)(i)}function ua(e,r,a,t,o,c,i,u){return e.a===7?e.f(r,a,t,o,c,i,u):e(r)(a)(t)(o)(c)(i)(u)}function ao(e,r,a,t,o,c,i,u,$){return e.a===8?e.f(r,a,t,o,c,i,u,$):e(r)(a)(t)(o)(c)(i)(u)($)}function uG(e,r,a,t,o,c,i,u,$,v){return e.a===9?e.f(r,a,t,o,c,i,u,$,v):e(r)(a)(t)(o)(c)(i)(u)($)(v)}var M7=[];function D7(e){return[e]}function H7(e){return e.length}var F7=S(function(e,r,a){for(var t=new Array(e),o=0;o<e;o++)t[o]=a(r+o);return t}),A7=l(function(e,r){for(var a=new Array(e),t=0;t<e&&r.b;t++)a[t]=r.a,r=r.b;return a.length=t,p(a,r)}),B7=l(function(e,r){return r[e]}),I7=S(function(e,r,a){for(var t=a.length,o=new Array(t),c=0;c<t;c++)o[c]=a[c];return o[e]=r,o}),R7=l(function(e,r){for(var a=r.length,t=new Array(a+1),o=0;o<a;o++)t[o]=r[o];return t[a]=e,t}),E7=S(function(e,r,a){for(var t=a.length,o=0;o<t;o++)r=n(e,a[o],r);return r}),V7=S(function(e,r,a){for(var t=a.length-1;t>=0;t--)r=n(e,a[t],r);return r}),fG=l(function(e,r){for(var a=r.length,t=new Array(a),o=0;o<a;o++)t[o]=e(r[o]);return t}),$G=S(function(e,r,a){for(var t=a.length,o=new Array(t),c=0;c<t;c++)o[c]=n(e,r+c,a[c]);return o}),O7=S(function(e,r,a){return a.slice(e,r)}),U7=S(function(e,r,a){var t=r.length,o=e-t;o>a.length&&(o=a.length);for(var c=t+o,i=new Array(c),u=0;u<t;u++)i[u]=r[u];for(var u=0;u<o;u++)i[u+t]=a[u];return i}),lG=l(function(e,r){return r}),vG=l(function(e,r){return console.log(e+": "+xb(r)),r});function sG(e,r){return function(a){zn(8,e,r,a)}}function dG(e,r,a){return function(t){zn(9,e,r,a,t)}}function xb(e){return"<internals>"}function bG(e){return Ht(!1,e)}function Ht(e,r){if(typeof r=="function")return Af(e,"<function>");if(typeof r=="boolean")return Zi(e,r?"True":"False");if(typeof r=="number")return q7(e,r+"");if(r instanceof String)return W7(e,"'"+jb(r,!0)+"'");if(typeof r=="string")return wb(e,'"'+jb(r,!1)+'"');if(typeof r=="object"&&"$"in r){var a=r.$;if(typeof a=="number")return Af(e,"<internals>");if(a[0]==="#"){var o=[];for(var t in r)t!=="$"&&o.push(Ht(e,r[t]));return"("+o.join(",")+")"}if(a==="Set_elm_builtin")return Zi(e,"Set")+Ff(e,".fromList")+" "+Ht(e,cC(r));if(a==="RBNode_elm_builtin"||a==="RBEmpty_elm_builtin")return Zi(e,"Dict")+Ff(e,".fromList")+" "+Ht(e,ln(r));if(a==="Array_elm_builtin")return Zi(e,"Array")+Ff(e,".fromList")+" "+Ht(e,oC(r));if(a==="::"||a==="[]"){var o="[";for(r.b&&(o+=Ht(e,r.a),r=r.b);r.b;r=r.b)o+=","+Ht(e,r.a);return o+"]"}var o="";for(var c in r)if(c!=="$"){var i=Ht(e,r[c]),u=i[0],$=u==="{"||u==="("||u==="["||u==="<"||u==='"'||i.indexOf(" ")<0;o+=" "+($?i:"("+i+")")}return Zi(e,a)+o}if(typeof DataView=="function"&&r instanceof DataView)return wb(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return Af(e,"<"+r.name+">");if(typeof r=="object"){var o=[];for(var v in r){var d=v[0]==="_"?v.slice(1):v;o.push(Ff(e,d)+" = "+Ht(e,r[v]))}return o.length===0?"{}":"{ "+o.join(", ")+" }"}return Af(e,"<internals>")}function jb(e,r){var a=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?a.replace(/\'/g,"\\'"):a.replace(/\"/g,'\\"')}function Zi(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function q7(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function wb(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function W7(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function Ff(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function Af(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function pG(e){return String.fromCharCode(e<10?48+e:55+e)}function zn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function mG(e,r,a,t,o){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var c=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+c);case 3:var i=r;throw new Error("There can only be one port named `"+i+"`, but your program has multiple.");case 4:var i=r,u=a;throw new Error("Trying to send an unexpected type of value through port `"+i+"`:\n"+u);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var $=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+$+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var $=r,v=a,b=t;throw new Error("TODO in module `"+$+"` "+kb(v)+`

`+b);case 9:var $=r,v=a,d=t,b=o;throw new Error("TODO in module `"+$+"` from the `case` expression "+kb(v)+`

It received the following value:

    `+xb(d).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+b.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function kb(e){return e.ds.gj===e.rf.gj?"on line "+e.ds.gj:"on lines "+e.ds.gj+" through "+e.rf.gj}function ee(e,r){for(var a,t=[],o=R0(e,r,0,t);o&&(a=t.pop());o=R0(a.a,a.b,0,t));return o}function R0(e,r,a,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&zn(5),!1;if(a>100)return t.push(p(e,r)),!0;e.$<0&&(e=ln(e),r=ln(r));for(var o in e)if(!R0(e[o],r[o],a+1,t))return!1;return!0}var G7=l(ee),N7=l(function(e,r){return!ee(e,r)});function X(e,r,a){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(a=X(e.a,r.a))||(a=X(e.b,r.b))?a:X(e.c,r.c);for(;e.b&&r.b&&!(a=X(e.a,r.a));e=e.b,r=r.b);return a||(e.b?1:r.b?-1:0)}var Z7=l(function(e,r){return X(e,r)<0}),J7=l(function(e,r){return X(e,r)<1}),Y7=l(function(e,r){return X(e,r)>0}),K7=l(function(e,r){return X(e,r)>=0}),X7=l(function(e,r){var a=X(e,r);return a<0?P2:a?iC:C2}),Ao=0,hG={$:"#0"};function p(e,r){return{a:e,b:r}}function gG(e,r){return{$:"#2",a:e,b:r}}function R(e,r,a){return{a:e,b:r,c:a}}function _G(e,r,a){return{$:"#3",a:e,b:r,c:a}}function yG(e){return e}function CG(e){return new String(e)}function M(e,r){var a={};for(var t in e)a[t]=e[t];for(var t in r)a[t]=r[t];return a}var Q7=l(K);function K(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var a=tt(e.a,r);e=e.b;for(var t=a;e.b;e=e.b)t=t.b=tt(e.a,r);return a}var P={$:0},PG={$:"[]"};function tt(e,r){return{$:1,a:e,b:r}}function SG(e,r){return{$:"::",a:e,b:r}}var eh=l(tt);function f(e){for(var r=P,a=e.length;a--;)r=tt(e[a],r);return r}function Bf(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var rh=S(function(e,r,a){for(var t=[];r.b&&a.b;r=r.b,a=a.b)t.push(n(e,r.a,a.a));return f(t)}),xG=q(function(e,r,a,t){for(var o=[];r.b&&a.b&&t.b;r=r.b,a=a.b,t=t.b)o.push(s(e,r.a,a.a,t.a));return f(o)}),ah=Te(function(e,r,a,t,o){for(var c=[];r.b&&a.b&&t.b&&o.b;r=r.b,a=a.b,t=t.b,o=o.b)c.push(C(e,r.a,a.a,t.a,o.a));return f(c)}),jG=Vr(function(e,r,a,t,o,c){for(var i=[];r.b&&a.b&&t.b&&o.b&&c.b;r=r.b,a=a.b,t=t.b,o=o.b,c=c.b)i.push(I(e,r.a,a.a,t.a,o.a,c.a));return f(i)}),nh=l(function(e,r){return f(Bf(r).sort(function(a,t){return X(e(a),e(t))}))}),th=l(function(e,r){return f(Bf(r).sort(function(a,t){var o=n(e,a,t);return o===C2?0:o===P2?-1:1}))}),oh=l(function(e,r){return e+r}),ch=l(function(e,r){return e-r}),ih=l(function(e,r){return e*r}),uh=l(function(e,r){return e/r}),fh=l(function(e,r){return e/r|0}),$h=l(Math.pow),lh=l(function(e,r){return r%e}),vh=l(function(e,r){var a=r%e;return e===0?zn(11):a>0&&e<0||a<0&&e>0?a+e:a}),sh=Math.PI,wG=Math.E,dh=Math.cos,bh=Math.sin,ph=Math.tan,mh=Math.acos,kG=Math.asin,hh=Math.atan,gh=l(Math.atan2);function _h(e){return e}function TG(e){return e|0}function yh(e){return e===1/0||e===-1/0}var Ch=Math.ceil,Ph=Math.floor,Sh=Math.round,xh=Math.sqrt,Tb=Math.log,jh=isNaN;function wh(e){return!e}var kh=l(function(e,r){return e&&r}),Th=l(function(e,r){return e||r}),LG=l(function(e,r){return e!==r}),Lh=l(function(e,r){return e+r});function zh(e){var r=e.charCodeAt(0);return isNaN(r)?T:D(55296<=r&&r<=56319?p(e[0]+e[1],e.slice(2)):p(e[0],e.slice(1)))}var Mh=l(function(e,r){return e+r});function Dh(e){return e.length}var zG=l(function(e,r){for(var a=r.length,t=new Array(a),o=0;o<a;){var c=r.charCodeAt(o);if(55296<=c&&c<=56319){t[o]=e(r[o]+r[o+1]),o+=2;continue}t[o]=e(r[o]),o++}return t.join("")}),MG=l(function(e,r){for(var a=[],t=r.length,o=0;o<t;){var c=r[o],i=r.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=r[o],o++),e(c)&&a.push(c)}return a.join("")});function Hh(e){for(var r=e.length,a=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(a[r-t]=e[t+1],t++,a[r-t]=e[t-1],t++):(a[r-t]=e[t],t++)}return a.join("")}var Fh=S(function(e,r,a){for(var t=a.length,o=0;o<t;){var c=a[o],i=a.charCodeAt(o);o++,55296<=i&&i<=56319&&(c+=a[o],o++),r=n(e,c,r)}return r}),Ah=S(function(e,r,a){for(var t=a.length;t--;){var o=a[t],c=a.charCodeAt(t);56320<=c&&c<=57343&&(t--,o=a[t]+o),r=n(e,o,r)}return r}),Bh=l(function(e,r){return r.split(e)}),Ih=l(function(e,r){return r.join(e)}),Rh=S(function(e,r,a){return a.slice(e,r)});function DG(e){return e.trim()}function Eh(e){return e.replace(/^\s+/,"")}function HG(e){return e.replace(/\s+$/,"")}function FG(e){return f(e.trim().split(/\s+/g))}function AG(e){return f(e.split(/\r\n|\r|\n/g))}function Vh(e){return e.toUpperCase()}function Oh(e){return e.toLowerCase()}var BG=l(function(e,r){for(var a=r.length;a--;){var t=r[a],o=r.charCodeAt(a);if(56320<=o&&o<=57343&&(a--,t=r[a]+t),e(t))return!0}return!1}),Uh=l(function(e,r){for(var a=r.length;a--;){var t=r[a],o=r.charCodeAt(a);if(56320<=o&&o<=57343&&(a--,t=r[a]+t),!e(t))return!1}return!0}),qh=l(function(e,r){return r.indexOf(e)>-1}),Wh=l(function(e,r){return r.indexOf(e)===0}),Gh=l(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length}),Nh=l(function(e,r){var a=e.length;if(a<1)return P;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+a;return f(o)});function Lb(e){return e+""}function Zh(e){for(var r=0,a=e.charCodeAt(0),t=a==43||a==45?1:0,o=t;o<e.length;++o){var c=e.charCodeAt(o);if(c<48||57<c)return T;r=10*r+c-48}return o==t?T:D(a==45?-r:r)}function Jh(e){if(e.length===0||/[\sxbo]/.test(e))return T;var r=+e;return r===r?D(r):T}function Yh(e){return Bf(e).join("")}function Kh(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Xh(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function IG(e){return e.toUpperCase()}function Qh(e){return e.toLowerCase()}function RG(e){return e.toLocaleUpperCase()}function EG(e){return e.toLocaleLowerCase()}function eg(e){return{$:0,a:e}}function rg(e){return{$:1,a:e}}function Ji(e){return{$:2,b:e}}var ag=Ji(function(e){return typeof e!="number"?fn("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?We(e):fn("an INT",e)}),ng=Ji(function(e){return typeof e=="boolean"?We(e):fn("a BOOL",e)}),tg=Ji(function(e){return typeof e=="number"?We(e):fn("a FLOAT",e)}),og=Ji(function(e){return We(e)}),cg=Ji(function(e){return typeof e=="string"?We(e):e instanceof String?We(e+""):fn("a STRING",e)});function ig(e){return{$:3,b:e}}function ug(e){return{$:4,b:e}}function fg(e){return{$:5,c:e}}var $g=l(function(e,r){return{$:6,d:e,b:r}}),lg=l(function(e,r){return{$:7,e,b:r}});function vg(e){return{$:8,b:e}}function no(e,r){return{$:9,f:e,g:r}}var sg=l(function(e,r){return{$:10,b:r,h:e}});function dg(e){return{$:11,g:e}}var bg=l(function(e,r){return no(e,[r])}),pg=S(function(e,r,a){return no(e,[r,a])}),mg=q(function(e,r,a,t){return no(e,[r,a,t])}),hg=Te(function(e,r,a,t,o){return no(e,[r,a,t,o])}),gg=Vr(function(e,r,a,t,o,c){return no(e,[r,a,t,o,c])}),_g=ro(function(e,r,a,t,o,c,i){return no(e,[r,a,t,o,c,i])}),VG=Be(function(e,r,a,t,o,c,i,u){return no(e,[r,a,t,o,c,i,u])}),OG=I0(function(e,r,a,t,o,c,i,u,$){return no(e,[r,a,t,o,c,i,u,$])}),yg=l(function(e,r){try{var a=JSON.parse(r);return un(e,a)}catch(t){return qe(n(lv,"This is not valid JSON! "+t.message,r))}}),E0=l(function(e,r){return un(e,r)});function un(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?We(e.c):fn("null",r);case 3:return If(r)?zb(e.b,r,f):fn("a LIST",r);case 4:return If(r)?zb(e.b,r,Cg):fn("an ARRAY",r);case 6:var a=e.d;if(typeof r!="object"||r===null||!(a in r))return fn("an OBJECT with a field named `"+a+"`",r);var v=un(e.b,r[a]);return An(v)?v:qe(n(S2,a,v.a));case 7:var t=e.e;if(!If(r))return fn("an ARRAY",r);if(t>=r.length)return fn("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var v=un(e.b,r[t]);return An(v)?v:qe(n(x2,t,v.a));case 8:if(typeof r!="object"||r===null||If(r))return fn("an OBJECT",r);var o=P;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var v=un(e.b,r[c]);if(!An(v))return qe(n(S2,c,v.a));o=tt(p(c,v.a),o)}return We(Ve(o));case 9:for(var i=e.f,u=e.g,$=0;$<u.length;$++){var v=un(u[$],r);if(!An(v))return v;i=i(v.a)}return We(i);case 10:var v=un(e.b,r);return An(v)?un(e.h(v.a),r):v;case 11:for(var d=P,b=e.g;b.b;b=b.b){var v=un(b.a,r);if(An(v))return v;d=tt(v.a,d)}return qe(uC(Ve(d)));case 1:return qe(n(lv,e.a,r));case 0:return We(e.a)}}function zb(e,r,a){for(var t=r.length,o=new Array(t),c=0;c<t;c++){var i=un(e,r[c]);if(!An(i))return qe(n(x2,c,i.a));o[c]=i.a}return We(a(o))}function If(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Cg(e){return n(Kf,e.length,function(r){return e[r]})}function fn(e,r){return qe(n(lv,"Expecting "+e,r))}function Mc(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Mc(e.b,r.b);case 6:return e.d===r.d&&Mc(e.b,r.b);case 7:return e.e===r.e&&Mc(e.b,r.b);case 9:return e.f===r.f&&Mb(e.g,r.g);case 10:return e.h===r.h&&Mc(e.b,r.b);case 11:return Mb(e.g,r.g)}}function Mb(e,r){var a=e.length;if(a!==r.length)return!1;for(var t=0;t<a;t++)if(!Mc(e[t],r[t]))return!1;return!0}var Pg=l(function(e,r){return JSON.stringify(r,null,e)+""});function UG(e){return{$:0,a:e}}function qG(e){return e.a}function Rf(e){return e}function WG(e){return e}function Sg(){return[]}function xg(){return{}}var jg=S(function(e,r,a){var t=r;return e==="toJSON"&&typeof t=="function"||(a[e]=t),a});function wg(e){return l(function(r,a){return a.push(e(r)),a})}var kg=null;function Ga(e){return{$:0,a:e}}function V0(e){return{$:1,a:e}}function Xr(e){return{$:2,b:e,c:null}}var O0=l(function(e,r){return{$:3,b:e,d:r}}),Tg=l(function(e,r){return{$:4,b:e,d:r}});function Lg(e){return{$:5,b:e}}var zg=0;function U0(e){var r={$:0,e:zg++,f:e,g:null,h:[]};return G0(r),r}function q0(e){return Xr(function(r){r(Ga(U0(e)))})}function Db(e,r){e.h.push(r),G0(e)}var Mg=l(function(e,r){return Xr(function(a){Db(e,r),a(Ga(Ao))})});function Dg(e){return Xr(function(r){var a=e.f;a.$===2&&a.c&&a.c(),e.f=null,r(Ga(Ao))})}var W0=!1,Hb=[];function G0(e){if(Hb.push(e),!W0){for(W0=!0;e=Hb.shift();)Hg(e);W0=!1}}function Hg(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(a){e.f=a,G0(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}function Fg(e){return Xr(function(r){var a=setTimeout(function(){r(Ga(Ao))},e);return function(){clearTimeout(a)}})}var GG=q(function(e,r,a,t){return N0(r,t,e.b1,e.uS,e.aC,function(){return function(){}})});function N0(e,r,a,t,o,c){var i=n(E0,e,r?r.flags:void 0);An(i)||zn(2);var u={},$=a(i.a),v=$.a,d=c(h,v),b=Bg(u,h);function h(g,_){var y=n(t,g,v);d(v=y.a,_),Ib(u,y.b,o(v))}return Ib(u,$.b,o(v)),b?{ports:b}:{}}var Ag;function NG(e){Ag.add(e)}var fa={};function Bg(e,r){var a;for(var t in fa){var o=fa[t];o.a&&(a=a||{},a[t]=o.a(t,r)),e[t]=Ig(o,r)}return a}function Z0(e,r,a,t,o){return{b:e,c:r,d:a,e:t,f:o}}function Ig(e,r){var a={g:r,h:void 0},t=e.c,o=e.d,c=e.e,i=e.f;function u($){return n(O0,u,Lg(function(v){var d=v.a;return v.$===0?s(o,a,d,$):c&&i?C(t,a,d.i,d.j,$):s(t,a,c?d.i:d.j,$)}))}return a.h=U0(n(O0,u,e.b))}var Rg=l(function(e,r){return Xr(function(a){e.g(r),a(Ga(Ao))})}),Eg=l(function(e,r){return n(Mg,e.h,{$:0,a:r})});function Yi(e){return function(r){return{$:1,k:e,l:r}}}function Fb(e){return{$:2,m:e}}var Ab=l(function(e,r){return{$:3,n:e,o:r}}),Bb=[],J0=!1;function Ib(e,r,a){if(Bb.push({p:e,q:r,r:a}),!J0){J0=!0;for(var t;t=Bb.shift();)Vg(t.p,t.q,t.r);J0=!1}}function Vg(e,r,a){var t={};Ef(!0,r,t,null),Ef(!1,a,t,null);for(var o in e)Db(e[o],{$:"fx",a:t[o]||{i:P,j:P}})}function Ef(e,r,a,t){switch(r.$){case 1:var o=r.k,c=Og(e,o,t,r.l);a[o]=Ug(e,c,a[o]);return;case 2:for(var i=r.m;i.b;i=i.b)Ef(e,i.a,a,t);return;case 3:Ef(e,r.o,a,{s:r.n,t});return}}function Og(e,r,a,t){function o(i){for(var u=a;u;u=u.t)i=u.s(i);return i}var c=e?fa[r].e:fa[r].f;return n(c,o,t)}function Ug(e,r,a){return a=a||{i:P,j:P},e?a.i=tt(r,a.i):a.j=tt(r,a.j),a}function Rb(e){fa[e]&&zn(3,e)}function Ft(e,r){return Rb(e),fa[e]={e:qg,u:r,a:Wg},Yi(e)}var qg=l(function(e,r){return r});function Wg(e){var r=[],a=fa[e].u,t=Fg(0);fa[e].b=t,fa[e].c=S(function(i,u,$){for(;u.b;u=u.b)for(var v=r,d=a(u.a),b=0;b<v.length;b++)v[b](d);return t});function o(i){r.push(i)}function c(i){r=r.slice();var u=r.indexOf(i);u>=0&&r.splice(u,1)}return{subscribe:o,unsubscribe:c}}function Vf(e,r){return Rb(e),fa[e]={f:Gg,u:r,a:Ng},Yi(e)}var Gg=l(function(e,r){return function(a){return e(r(a))}});function Ng(e,r){var a=P,t=fa[e].u,o=Ga(null);fa[e].b=o,fa[e].c=S(function(i,u,$){return a=u,o});function c(i){var u=n(E0,t,i);An(u)||zn(4,e,u.a);for(var $=u.a,v=a;v.b;v=v.b)r(v.a($))}return{send:c}}function Zg(e){zc.Elm?Eb(zc.Elm,e):zc.Elm=e}function Eb(e,r){for(var a in r)a in e?a=="init"?zn(6):Eb(e[a],r[a]):e[a]=r[a]}function ZG(e){zc.Elm?Vb("Elm",zc.Elm,e):zc.Elm=e}function Vb(e,r,a){for(var t in a)t in r?t=="init"?zn(6,e):Vb(e+"."+t,r[t],a[t]):r[t]=a[t]}var Of,$a=typeof document<"u"?document:{};function Y0(e,r){e.appendChild(r)}var JG=q(function(e,r,a,t){var o=t.node;return o.parentNode.replaceChild(oo(e,function(){}),o),{}});function K0(e){return{$:0,a:e}}var Ob=l(function(e,r){return l(function(a,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b||0,o.push(i)}return c+=o.length,{$:1,c:r,d:Q0(a),e:o,f:e,b:c}})}),$n=Ob(void 0),Ub=l(function(e,r){return l(function(a,t){for(var o=[],c=0;t.b;t=t.b){var i=t.a;c+=i.b.b||0,o.push(i)}return c+=o.length,{$:2,c:r,d:Q0(a),e:o,f:e,b:c}})}),Jg=Ub(void 0);function Yg(e,r,a,t){return{$:3,d:Q0(e),g:r,h:a,i:t}}var Kg=l(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function to(e,r){return{$:5,l:e,m:r,k:void 0}}var YG=l(function(e,r){return to([e,r],function(){return e(r)})}),KG=S(function(e,r,a){return to([e,r,a],function(){return n(e,r,a)})}),XG=q(function(e,r,a,t){return to([e,r,a,t],function(){return s(e,r,a,t)})}),QG=Te(function(e,r,a,t,o){return to([e,r,a,t,o],function(){return C(e,r,a,t,o)})}),eN=Vr(function(e,r,a,t,o,c){return to([e,r,a,t,o,c],function(){return I(e,r,a,t,o,c)})}),rN=ro(function(e,r,a,t,o,c,i){return to([e,r,a,t,o,c,i],function(){return Sr(e,r,a,t,o,c,i)})}),aN=Be(function(e,r,a,t,o,c,i,u){return to([e,r,a,t,o,c,i,u],function(){return ua(e,r,a,t,o,c,i,u)})}),nN=I0(function(e,r,a,t,o,c,i,u,$){return to([e,r,a,t,o,c,i,u,$],function(){return ao(e,r,a,t,o,c,i,u,$)})}),qb=l(function(e,r){return{$:"a0",n:e,o:r}}),Xg=l(function(e,r){return{$:"a1",n:e,o:r}}),Wb=l(function(e,r){return{$:"a2",n:e,o:r}}),Uf=l(function(e,r){return{$:"a3",n:e,o:r}}),Qg=S(function(e,r,a){return{$:"a4",n:r,o:{f:e,o:a}}}),e_=/^script$/i,r_=/^(on|formAction$)/i,a_=/^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i,X0=/^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;function qf(e){return e_.test(e)?"p":e}function Gb(e){return r_.test(e)?"data-"+e:e}function n_(e){return e=="innerHTML"||e=="outerHTML"||e=="formAction"?"data-"+e:e}function tN(e){return a_.test(e)?"":e}function Nb(e){return X0.test(e)?"":e}function t_(e){return typeof e=="string"&&X0.test(e)||Array.isArray(e)&&X0.test(String(e))?"":e}var o_=l(function(e,r){return r.$==="a0"?n(qb,r.n,c_(e,r.o)):r});function c_(e,r){var a=mv(r);return{$:r.$,a:a?s(Ha,a<3?i_:u_,re(e),r.a):n(Ye,e,r.a)}}var i_=l(function(e,r){return p(e(r.a),r.b)}),u_=l(function(e,r){return{Y:e(r.Y),ac:r.ac,aa:r.aa}});function Q0(e){for(var r={};e.b;e=e.b){var a=e.a,t=a.$,o=a.n,c=a.o;if(t==="a2"){o==="className"?Zb(r,o,c):r[o]=c;continue}var i=r[t]||(r[t]={});t==="a3"&&o==="class"?Zb(i,o,c):i[o]=c}return r}function Zb(e,r,a){var t=e[r];e[r]=t?t+" "+a:a}function oo(e,r){var a=e.$;if(a===5)return oo(e.k||(e.k=e.m()),r);if(a===0)return $a.createTextNode(e.a);if(a===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var c={j:o,p:r},i=oo(t,c);return i.elm_event_node_ref=c,i}if(a===3){var i=e.h(e.g);return ev(i,r,e.d),i}var i=e.f?$a.createElementNS(e.f,e.c):$a.createElement(e.c);Of&&e.c=="a"&&i.addEventListener("click",Of(i)),ev(i,r,e.d);for(var u=e.e,$=0;$<u.length;$++)Y0(i,oo(a===1?u[$]:u[$].b,r));return i}function ev(e,r,a){for(var t in a){var o=a[t];t==="a1"?f_(e,o):t==="a0"?v_(e,r,o):t==="a3"?$_(e,o):t==="a4"?l_(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function f_(e,r){var a=e.style;for(var t in r)a[t]=r[t]}function $_(e,r){for(var a in r){var t=r[a];typeof t<"u"?e.setAttribute(a,t):e.removeAttribute(a)}}function l_(e,r){for(var a in r){var t=r[a],o=t.f,c=t.o;typeof c<"u"?e.setAttributeNS(o,a,c):e.removeAttributeNS(o,a)}}function v_(e,r,a){var t=e.elmFs||(e.elmFs={});for(var o in a){var c=a[o],i=t[o];if(!c){e.removeEventListener(o,i),t[o]=void 0;continue}if(i){var u=i.q;if(u.$===c.$){i.q=c;continue}e.removeEventListener(o,i)}i=s_(r,c),e.addEventListener(o,i,rv&&{passive:mv(c)<2}),t[o]=i}}var rv;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){rv=!0}}))}catch{}function s_(e,r){function a(t){var o=a.q,c=un(o.a,t);if(An(c)){for(var i=mv(o),u=c.a,$=i?i<3?u.a:u.Y:u,v=i==1?u.b:i==3&&u.ac,d=(v&&t.stopPropagation(),(i==2?u.b:i==3&&u.aa)&&t.preventDefault(),e),b,h;b=d.j;){if(typeof b=="function")$=b($);else for(var h=b.length;h--;)$=b[h]($);d=d.p}d($,v)}}return a.q=r,a}function d_(e,r){return e.$==r.$&&Mc(e.a,r.a)}function Jb(e,r){var a=[];return Mn(e,r,a,0),a}function Ca(e,r,a,t){var o={$:r,r:a,s:t,t:void 0,u:void 0};return e.push(o),o}function Mn(e,r,a,t){if(e!==r){var o=e.$,c=r.$;if(o!==c)if(o===1&&c===2)r=C_(r),c=1;else{Ca(a,0,t,r);return}switch(c){case 5:for(var i=e.l,u=r.l,$=i.length,v=$===u.length;v&&$--;)v=i[$]===u[$];if(v){r.k=e.k;return}r.k=r.m();var d=[];Mn(e.k,r.k,d,0),d.length>0&&Ca(a,1,t,d);return;case 4:for(var b=e.j,h=r.j,g=!1,_=e.k;_.$===4;)g=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;for(var y=r.k;y.$===4;)g=!0,typeof h!="object"?h=[h,y.j]:h.push(y.j),y=y.k;if(g&&b.length!==h.length){Ca(a,0,t,r);return}(g?!b_(b,h):b!==h)&&Ca(a,2,t,h),Mn(_,y,a,t+1);return;case 0:e.a!==r.a&&Ca(a,3,t,r.a);return;case 1:Yb(e,r,a,t,p_);return;case 2:Yb(e,r,a,t,m_);return;case 3:if(e.h!==r.h){Ca(a,0,t,r);return}var x=av(e.d,r.d);x&&Ca(a,4,t,x);var L=r.i(e.g,r.g);L&&Ca(a,5,t,L);return}}}function b_(e,r){for(var a=0;a<e.length;a++)if(e[a]!==r[a])return!1;return!0}function Yb(e,r,a,t,o){if(e.c!==r.c||e.f!==r.f){Ca(a,0,t,r);return}var c=av(e.d,r.d);c&&Ca(a,4,t,c),o(e,r,a,t)}function av(e,r,a){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var c=av(e[o],r[o]||{},o);c&&(t=t||{},t[o]=c);continue}if(!(o in r)){t=t||{},t[o]=a?a==="a1"?"":a==="a0"||a==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var i=e[o],u=r[o];i===u&&o!=="value"&&o!=="checked"||a==="a0"&&d_(i,u)||(t=t||{},t[o]=u)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function p_(e,r,a,t){var o=e.e,c=r.e,i=o.length,u=c.length;i>u?Ca(a,6,t,{v:u,i:i-u}):i<u&&Ca(a,7,t,{v:i,e:c});for(var $=i<u?i:u,v=0;v<$;v++){var d=o[v];Mn(d,c[v],a,++t),t+=d.b||0}}function m_(e,r,a,t){for(var o=[],c={},i=[],u=e.e,$=r.e,v=u.length,d=$.length,b=0,h=0,g=t;b<v&&h<d;){var _=u[b],y=$[h],x=_.a,L=y.a,k=_.b,A=y.b,V=void 0,E=void 0;if(x===L){g++,Mn(k,A,o,g),g+=k.b||0,b++,h++;continue}var G=u[b+1],J=$[h+1];if(G){var te=G.a,$e=G.b;E=L===te}if(J){var pe=J.a,ke=J.b;V=x===pe}if(V&&E){g++,Mn(k,ke,o,g),Ki(c,o,x,A,h,i),g+=k.b||0,g++,Xi(c,o,x,$e,g),g+=$e.b||0,b+=2,h+=2;continue}if(V){g++,Ki(c,o,L,A,h,i),Mn(k,ke,o,g),g+=k.b||0,b+=1,h+=2;continue}if(E){g++,Xi(c,o,x,k,g),g+=k.b||0,g++,Mn($e,A,o,g),g+=$e.b||0,b+=2,h+=1;continue}if(G&&te===pe){g++,Xi(c,o,x,k,g),Ki(c,o,L,A,h,i),g+=k.b||0,g++,Mn($e,ke,o,g),g+=$e.b||0,b+=2,h+=2;continue}break}for(;b<v;){g++;var _=u[b],k=_.b;Xi(c,o,_.a,k,g),g+=k.b||0,b++}for(;h<d;){var Fe=Fe||[],y=$[h];Ki(c,o,y.a,y.b,void 0,Fe),h++}(o.length>0||i.length>0||Fe)&&Ca(a,8,t,{w:o,x:i,y:Fe})}var Kb="_elmW6BL";function Ki(e,r,a,t,o,c){var i=e[a];if(!i){i={c:0,z:t,r:o,s:void 0},c.push({r:o,A:i}),e[a]=i;return}if(i.c===1){c.push({r:o,A:i}),i.c=2;var u=[];Mn(i.z,t,u,i.r),i.r=o,i.s.s={w:u,A:i};return}Ki(e,r,a+Kb,t,o,c)}function Xi(e,r,a,t,o){var c=e[a];if(!c){var i=Ca(r,9,o,void 0);e[a]={c:1,z:t,r:o,s:i};return}if(c.c===0){c.c=2;var u=[];Mn(t,c.z,u,o),Ca(r,9,o,{w:u,A:c});return}Xi(e,r,a+Kb,t,o)}function Xb(e,r,a,t){Qi(e,r,a,0,0,r.b,t)}function Qi(e,r,a,t,o,c,i){for(var u=a[t],$=u.r;$===o;){var v=u.$;if(v===1)Xb(e,r.k,u.s,i);else if(v===8){u.t=e,u.u=i;var d=u.s.w;d.length>0&&Qi(e,r,d,0,o,c,i)}else if(v===9){u.t=e,u.u=i;var b=u.s;if(b){b.A.s=e;var d=b.w;d.length>0&&Qi(e,r,d,0,o,c,i)}}else u.t=e,u.u=i;if(t++,!(u=a[t])||($=u.r)>c)return t}var h=r.$;if(h===4){for(var g=r.k;g.$===4;)g=g.k;return Qi(e,g,a,t,o+1,c,e.elm_event_node_ref)}for(var _=r.e,y=e.childNodes,x=0;x<_.length;x++){o++;var L=h===1?_[x]:_[x].b,k=o+(L.b||0);if(o<=$&&$<=k&&(t=Qi(y[x],L,a,t,o,k,i),!(u=a[t])||($=u.r)>c))return t;o=k}return t}function Qb(e,r,a,t){return a.length===0?e:(Xb(e,r,a,t),Wf(e,a))}function Wf(e,r){for(var a=0;a<r.length;a++){var t=r[a],o=t.t,c=h_(o,t);o===e&&(e=c)}return e}function h_(e,r){switch(r.$){case 0:return g_(e,r.s,r.u);case 4:return ev(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Wf(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var c=r.s,t=0;t<c.i;t++)e.removeChild(e.childNodes[c.v]);return e;case 7:for(var c=r.s,a=c.e,t=c.v,o=e.childNodes[t];t<a.length;t++)e.insertBefore(oo(a[t],r.u),o);return e;case 9:var c=r.s;if(!c)return e.parentNode.removeChild(e),e;var i=c.A;return typeof i.r<"u"&&e.parentNode.removeChild(e),i.s=Wf(e,c.w),e;case 8:return __(e,r);case 5:return r.s(e);default:zn(10)}}function g_(e,r,a){var t=e.parentNode,o=oo(r,a);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function __(e,r){var a=r.s,t=y_(a.y,r);e=Wf(e,a.w);for(var o=a.x,c=0;c<o.length;c++){var i=o[c],u=i.A,$=u.c===2?u.s:oo(u.z,r.u);e.insertBefore($,e.childNodes[i.r])}return t&&Y0(e,t),e}function y_(e,r){if(e){for(var a=$a.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],c=o.A;Y0(a,c.c===2?c.s:oo(c.z,r.u))}return a}}function nv(e){if(e.nodeType===3)return K0(e.textContent);if(e.nodeType!==1)return K0("");for(var r=P,a=e.attributes,t=a.length;t--;){var o=a[t],c=o.name,i=o.value;r=tt(n(Uf,c,i),r)}for(var u=e.tagName.toLowerCase(),$=P,v=e.childNodes,t=v.length;t--;)$=tt(nv(v[t]),$);return s($n,u,r,$)}function C_(e){for(var r=e.e,a=r.length,t=new Array(a),o=0;o<a;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var P_=l(function(e,r){return e&r}),S_=l(function(e,r){return e|r}),x_=l(function(e,r){return e^r});function j_(e){return~e}var w_=l(function(e,r){return r<<e}),k_=l(function(e,r){return r>>e}),T_=l(function(e,r){return r>>>e}),L_,z_=L_||q(function(e,r,a,t){return N0(r,t,e.b1,e.uS,e.aC,function(o,c){var i=e.bt,u=t.node,$=nv(u);return e2(c,function(v){var d=i(v),b=Jb($,d);u=Qb(u,$,b,o),$=d})})}),M_,D_=M_||q(function(e,r,a,t){return N0(r,t,e.b1,e.uS,e.aC,function(o,c){var i=e.kS&&e.kS(o),u=e.bt,$=$a.title,v=$a.body,d=nv(v);return e2(c,function(b){Of=i;var h=u(b),g=$n("body")(P)(h.hd),_=Jb(d,g);v=Qb(v,d,_,o),d=g,Of=0,$!==h.iS&&($a.title=$=h.iS)})})}),H_=typeof cancelAnimationFrame<"u"?cancelAnimationFrame:function(e){clearTimeout(e)},eu=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function e2(e,r){r(e);var a=0;function t(){a=a===1?0:(eu(t),r(e),1)}return function(o,c){e=o,c?(r(e),a===2&&(a=1)):(a===0&&eu(t),a=2)}}function oN(e){var r=e.te,a=e.tf,t=function(){t.a(r(tv()))};return D_({kS:function(o){return t.a=o,ot.addEventListener("popstate",t),ot.navigator.userAgent.indexOf("Trident")<0||ot.addEventListener("hashchange",t),l(function(c,i){if(!i.ctrlKey&&!i.metaKey&&!i.shiftKey&&i.button<1&&!c.target&&!c.hasAttribute("download")){i.preventDefault();var u=c.href,$=tv(),v=N2(u).a;o(a(v&&$.oA===v.oA&&$.mU===v.mU&&$.ou.a===v.ou.a?WC(v):qC(u)))}})},b1:function(o){return s(e.b1,o,tv(),t)},bt:e.bt,uS:e.uS,aC:e.aC})}function tv(){return N2($a.location.href).a||zn(1)}var cN=l(function(e,r){return n(fu,Oo,Xr(function(){r&&history.go(r),e()}))}),iN=l(function(e,r){return n(fu,Oo,Xr(function(){history.pushState({},"",r),e()}))}),uN=l(function(e,r){return n(fu,Oo,Xr(function(){history.replaceState({},"",r),e()}))}),r2={addEventListener:function(){},removeEventListener:function(){}},Bo=typeof document<"u"?document:r2,ot=typeof window<"u"?window:r2,F_=S(function(e,r,a){return q0(Xr(function(t){function o(c){U0(a(c))}return e.addEventListener(r,o,rv&&{passive:!0}),function(){e.removeEventListener(r,o)}}))}),A_=l(function(e,r){var a=un(e,r);return An(a)?D(a.a):T});function fN(){return typeof $a.hidden<"u"?{jN:"hidden",qq:"visibilitychange"}:typeof $a.mozHidden<"u"?{jN:"mozHidden",qq:"mozvisibilitychange"}:typeof $a.msHidden<"u"?{jN:"msHidden",qq:"msvisibilitychange"}:typeof $a.webkitHidden<"u"?{jN:"webkitHidden",qq:"webkitvisibilitychange"}:{jN:"hidden",qq:"visibilitychange"}}function B_(){return Xr(function(e){var r=eu(function(){e(Ga(Date.now()))});return function(){H_(r)}})}function I_(){return Xr(function(e){e(Ga(Date.now()))})}function Gf(e,r){return Xr(function(a){eu(function(){var t=document.getElementById(e);a(t?Ga(r(t)):V0(GC(e)))})})}function R_(e){return Xr(function(r){eu(function(){r(Ga(e()))})})}var E_=l(function(e,r){return Gf(r,function(a){return a[e](),Ao})});function $N(){return{oO:a2(),py:{pF:ot.pageXOffset,pH:ot.pageYOffset,u5:Bo.documentElement.clientWidth,rS:Bo.documentElement.clientHeight}}}function a2(){var e=Bo.body,r=Bo.documentElement;return{u5:Math.max(e.scrollWidth,e.offsetWidth,r.scrollWidth,r.offsetWidth,r.clientWidth),rS:Math.max(e.scrollHeight,e.offsetHeight,r.scrollHeight,r.offsetHeight,r.clientHeight)}}var lN=l(function(e,r){return R_(function(){return ot.scroll(e,r),Ao})});function vN(e){return Gf(e,function(r){return{oO:{u5:r.scrollWidth,rS:r.scrollHeight},py:{pF:r.scrollLeft,pH:r.scrollTop,u5:r.clientWidth,rS:r.clientHeight}}})}var V_=S(function(e,r,a){return Gf(e,function(t){return t.scrollLeft=r,t.scrollTop=a,Ao})});function sN(e){return Gf(e,function(r){var a=r.getBoundingClientRect(),t=ot.pageXOffset,o=ot.pageYOffset;return{oO:a2(),py:{pF:t,pH:o,u5:Bo.documentElement.clientWidth,rS:Bo.documentElement.clientHeight},rb:{pF:t+a.left,pH:o+a.top,u5:a.width,rS:a.height}}})}function dN(e){return n(fu,Oo,Xr(function(r){$a.location.reload(e)}))}function bN(e){return n(fu,Oo,Xr(function(r){try{ot.location=e}catch{$a.location.reload(!1)}}))}var O_=Vr(function(e,r,a,t,o,c){var i=r!==9728&&r!==9729;return Xr(function(u){var $=new Image;function v(d){var b=d.createTexture();return d.bindTexture(d.TEXTURE_2D,b),d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,o),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,$),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,e),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,r),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,a),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,t),i&&d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null),b}$.onload=function(){var d=$.width,b=$.height,h=(d&d-1)===0,g=(b&b-1)===0,_=h&&g||!i&&a===33071&&t===33071;u(_?Ga({$:0,qJ:v,a:d,b}):V0(n(zj,d,b)))},$.onerror=function(){u(V0(Lj))},c.slice(0,5)!=="data:"&&($.crossOrigin="Anonymous"),$.src=c})}),pN=function(e){return p(e.a,e.b)};function n2(e){return e.byteLength}var mN=l(function(e,r){return Xr(function(a){a(Ga(new Uint8Array(new Uint32Array([1]))[0]===1?e:r))})});function U_(e){var r=new DataView(new ArrayBuffer(c6(e)));return i6(e)(r)(0),r}var q_=S(function(e,r,a){return e.setInt8(r,a),r+1}),W_=q(function(e,r,a,t){return e.setInt16(r,a,t),r+2}),G_=q(function(e,r,a,t){return e.setInt32(r,a,t),r+4}),N_=S(function(e,r,a){return e.setUint8(r,a),r+1}),Z_=q(function(e,r,a,t){return e.setUint16(r,a,t),r+2}),J_=q(function(e,r,a,t){return e.setUint32(r,a,t),r+4}),Y_=q(function(e,r,a,t){return e.setFloat32(r,a,t),r+4}),K_=q(function(e,r,a,t){return e.setFloat64(r,a,t),r+8}),X_=S(function(e,r,a){for(var t=0,o=a.byteLength,c=o-4;t<=c;t+=4)e.setUint32(r+t,a.getUint32(t));for(;t<o;t++)e.setUint8(r+t,a.getUint8(t));return r+o});function hN(e){for(var r=0,a=0;a<e.length;a++){var t=e.charCodeAt(a);r+=t<128?1:t<2048?2:t<55296||56319<t?3:(a++,4)}return r}var Q_=S(function(e,r,a){for(var t=0;t<a.length;t++){var o=a.charCodeAt(t);r+=o<128?(e.setUint8(r,o),1):o<2048?(e.setUint16(r,49280|(o>>>6&31)<<8|o&63),2):o<55296||56319<o?(e.setUint16(r,57472|(o>>>12&15)<<8|o>>>6&63),e.setUint8(r+2,128|o&63),3):(o=(o-55296)*1024+a.charCodeAt(++t)-56320+65536,e.setUint32(r,4034953344|(o>>>18&7)<<24|(o>>>12&63)<<16|(o>>>6&63)<<8|o&63),4)}return r}),ey=l(function(e,r){try{return D(n(e,r,0).b)}catch{return T}}),gN=l(function(e,r){return p(r+1,e.getInt8(r))}),_N=S(function(e,r,a){return p(a+2,r.getInt16(a,e))}),yN=S(function(e,r,a){return p(a+4,r.getInt32(a,e))}),ry=l(function(e,r){return p(r+1,e.getUint8(r))}),ay=S(function(e,r,a){return p(a+2,r.getUint16(a,e))}),ny=S(function(e,r,a){return p(a+4,r.getUint32(a,e))}),CN=S(function(e,r,a){return p(a+4,r.getFloat32(a,e))}),PN=S(function(e,r,a){return p(a+8,r.getFloat64(a,e))}),ty=S(function(e,r,a){return p(a+e,new DataView(r.buffer,r.byteOffset+a,e))}),oy=S(function(e,r,a){for(var t="",o=a+e;a<o;){var c=r.getUint8(a++);t+=c<128?String.fromCharCode(c):(c&224)===192?String.fromCharCode((c&31)<<6|r.getUint8(a++)&63):(c&240)===224?String.fromCharCode((c&15)<<12|(r.getUint8(a++)&63)<<6|r.getUint8(a++)&63):(c=((c&7)<<18|(r.getUint8(a++)&63)<<12|(r.getUint8(a++)&63)<<6|r.getUint8(a++)&63)-65536,String.fromCharCode(Math.floor(c/1024)+55296,c%1024+56320))}return p(a,t)}),cy=l(function(){throw 0}),iy=l(function(e,r){return new Float64Array([e,r])}),SN=function(e){return e[0]},xN=function(e){return e[1]},jN=l(function(e,r){return new Float64Array([e,r[1]])}),wN=l(function(e,r){return new Float64Array([r[0],e])}),kN=function(e){return{pF:e[0],pH:e[1]}},TN=function(e){return new Float64Array([e.pF,e.pH])},LN=l(function(e,r){var a=new Float64Array(2);return a[0]=e[0]+r[0],a[1]=e[1]+r[1],a}),zN=l(function(e,r){var a=new Float64Array(2);return a[0]=e[0]-r[0],a[1]=e[1]-r[1],a}),MN=function(e){var r=new Float64Array(2);return r[0]=-e[0],r[1]=-e[1],r},DN=l(function(e,r){var a=new Float64Array(2);a[0]=e[0]-r[0],a[1]=e[1]-r[1];var t=1/ov(a);return a[0]=a[0]*t,a[1]=a[1]*t,a});function ov(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}var HN=ov,FN=function(e){return e[0]*e[0]+e[1]*e[1]},AN=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(a*a+t*t)}),BN=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1];return a*a+t*t}),IN=function(e){var r=new Float64Array(2),a=1/ov(e);return r[0]=e[0]*a,r[1]=e[1]*a,r},RN=l(function(e,r){var a=new Float64Array(2);return a[0]=r[0]*e,a[1]=r[1]*e,a}),EN=l(function(e,r){return e[0]*r[0]+e[1]*r[1]}),cv=new Float64Array(3),t2=new Float64Array(3),o2=new Float64Array(3),uy=S(function(e,r,a){return new Float64Array([e,r,a])}),fy=function(e){return e[0]},$y=function(e){return e[1]},ly=function(e){return e[2]},VN=l(function(e,r){return new Float64Array([e,r[1],r[2]])}),ON=l(function(e,r){return new Float64Array([r[0],e,r[2]])}),UN=l(function(e,r){return new Float64Array([r[0],r[1],e])}),qN=function(e){return{pF:e[0],pH:e[1],O:e[2]}},vy=function(e){return new Float64Array([e.pF,e.pH,e.O])},WN=l(function(e,r){var a=new Float64Array(3);return a[0]=e[0]+r[0],a[1]=e[1]+r[1],a[2]=e[2]+r[2],a});function c2(e,r,a){return a===void 0&&(a=new Float64Array(3)),a[0]=e[0]-r[0],a[1]=e[1]-r[1],a[2]=e[2]-r[2],a}var GN=l(c2),NN=function(e){var r=new Float64Array(3);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r};function i2(e,r,a){return a===void 0&&(a=new Float64Array(3)),ru(c2(e,r,a),a)}var ZN=l(i2);function iv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}var JN=iv,YN=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},KN=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(a*a+t*t+o*o)}),XN=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return a*a+t*t+o*o});function ru(e,r){r===void 0&&(r=new Float64Array(3));var a=1/iv(e);return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r}var QN=ru,eZ=l(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),co=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]},rZ=l(co);function uv(e,r,a){return a===void 0&&(a=new Float64Array(3)),a[0]=e[1]*r[2]-e[2]*r[1],a[1]=e[2]*r[0]-e[0]*r[2],a[2]=e[0]*r[1]-e[1]*r[0],a}var aZ=l(uv),nZ=l(function(e,r){var a,t=cv,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],a=co(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(co(r,t)+e[12])/a,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(co(r,t)+e[13])/a,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(co(r,t)+e[14])/a,o}),sy=q(function(e,r,a,t){return new Float64Array([e,r,a,t])}),dy=function(e){return e[0]},by=function(e){return e[1]},py=function(e){return e[2]},my=function(e){return e[3]},tZ=l(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])}),oZ=l(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])}),cZ=l(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])}),iZ=l(function(e,r){return new Float64Array([r[0],r[1],r[2],e])}),hy=function(e){return{pF:e[0],pH:e[1],O:e[2],u2:e[3]}},gy=function(e){return new Float64Array([e.pF,e.pH,e.O,e.u2])},uZ=l(function(e,r){var a=new Float64Array(4);return a[0]=e[0]+r[0],a[1]=e[1]+r[1],a[2]=e[2]+r[2],a[3]=e[3]+r[3],a}),fZ=l(function(e,r){var a=new Float64Array(4);return a[0]=e[0]-r[0],a[1]=e[1]-r[1],a[2]=e[2]-r[2],a[3]=e[3]-r[3],a}),$Z=function(e){var r=new Float64Array(4);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r},lZ=l(function(e,r){var a=new Float64Array(4);a[0]=e[0]-r[0],a[1]=e[1]-r[1],a[2]=e[2]-r[2],a[3]=e[3]-r[3];var t=1/fv(a);return a[0]=a[0]*t,a[1]=a[1]*t,a[2]=a[2]*t,a[3]=a[3]*t,a});function fv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}var vZ=fv,sZ=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]},dZ=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return Math.sqrt(a*a+t*t+o*o+c*c)}),bZ=l(function(e,r){var a=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],c=e[3]-r[3];return a*a+t*t+o*o+c*c}),pZ=function(e){var r=new Float64Array(4),a=1/fv(e);return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r[3]=e[3]*a,r},_y=l(function(e,r){var a=new Float64Array(4);return a[0]=r[0]*e,a[1]=r[1]*e,a[2]=r[2]*e,a[3]=r[3]*e,a}),mZ=l(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}),yy=new Float64Array(16),Cy=new Float64Array(16),hZ=new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Py=function(e){var r=new Float64Array(16);return r[0]=e.nw,r[1]=e.nA,r[2]=e.nE,r[3]=e.nI,r[4]=e.nx,r[5]=e.nB,r[6]=e.nF,r[7]=e.nJ,r[8]=e.ny,r[9]=e.nC,r[10]=e.nG,r[11]=e.nK,r[12]=e.nz,r[13]=e.nD,r[14]=e.nH,r[15]=e.nL,r},Sy=function(e){return{nw:e[0],nA:e[1],nE:e[2],nI:e[3],nx:e[4],nB:e[5],nF:e[6],nJ:e[7],ny:e[8],nC:e[9],nG:e[10],nK:e[11],nz:e[12],nD:e[13],nH:e[14],nL:e[15]}},gZ=function(e){var r=new Float64Array(16);r[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],r[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],r[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],r[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],r[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],r[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],r[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],r[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],r[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],r[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],r[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],r[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5];var a=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12];if(a===0)return T;a=1/a;for(var t=0;t<16;t=t+1)r[t]=r[t]*a;return D(r)},_Z=function(e){var r=s2(e),a=[e[12],e[13],e[14]];return r[3]=r[7]=r[11]=0,r[12]=-co([r[0],r[4],r[8]],a),r[13]=-co([r[1],r[5],r[9]],a),r[14]=-co([r[2],r[6],r[10]],a),r};function u2(e,r,a,t,o,c){var i=new Float64Array(16);return i[0]=2*o/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/(t-a),i[6]=0,i[7]=0,i[8]=(r+e)/(r-e),i[9]=(t+a)/(t-a),i[10]=-(c+o)/(c-o),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*c*o/(c-o),i[15]=0,i}var yZ=Vr(u2),CZ=q(function(e,r,a,t){var o=a*Math.tan(e*Math.PI/360),c=-o,i=c*r,u=o*r;return u2(i,u,c,o,a,t)});function f2(e,r,a,t,o,c){var i=new Float64Array(16);return i[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-a),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2/(c-o),i[11]=0,i[12]=-(r+e)/(r-e),i[13]=-(t+a)/(t-a),i[14]=-(c+o)/(c-o),i[15]=1,i}var PZ=Vr(f2),SZ=q(function(e,r,a,t){return f2(e,r,a,t,-1,1)});function $2(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[3],u=e[4],$=e[5],v=e[6],d=e[7],b=e[8],h=e[9],g=e[10],_=e[11],y=e[12],x=e[13],L=e[14],k=e[15],A=r[0],V=r[1],E=r[2],G=r[3],J=r[4],te=r[5],$e=r[6],pe=r[7],ke=r[8],Fe=r[9],De=r[10],fr=r[11],ce=r[12],Ue=r[13],rr=r[14],ar=r[15];return a[0]=t*A+u*V+b*E+y*G,a[1]=o*A+$*V+h*E+x*G,a[2]=c*A+v*V+g*E+L*G,a[3]=i*A+d*V+_*E+k*G,a[4]=t*J+u*te+b*$e+y*pe,a[5]=o*J+$*te+h*$e+x*pe,a[6]=c*J+v*te+g*$e+L*pe,a[7]=i*J+d*te+_*$e+k*pe,a[8]=t*ke+u*Fe+b*De+y*fr,a[9]=o*ke+$*Fe+h*De+x*fr,a[10]=c*ke+v*Fe+g*De+L*fr,a[11]=i*ke+d*Fe+_*De+k*fr,a[12]=t*ce+u*Ue+b*rr+y*ar,a[13]=o*ce+$*Ue+h*rr+x*ar,a[14]=c*ce+v*Ue+g*rr+L*ar,a[15]=i*ce+d*Ue+_*rr+k*ar,a}var xZ=l($2),jZ=l(function(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=e[4],u=e[5],$=e[6],v=e[8],d=e[9],b=e[10],h=e[12],g=e[13],_=e[14],y=r[0],x=r[1],L=r[2],k=r[4],A=r[5],V=r[6],E=r[8],G=r[9],J=r[10],te=r[12],$e=r[13],pe=r[14];return a[0]=t*y+i*x+v*L,a[1]=o*y+u*x+d*L,a[2]=c*y+$*x+b*L,a[3]=0,a[4]=t*k+i*A+v*V,a[5]=o*k+u*A+d*V,a[6]=c*k+$*A+b*V,a[7]=0,a[8]=t*E+i*G+v*J,a[9]=o*E+u*G+d*J,a[10]=c*E+$*G+b*J,a[11]=0,a[12]=t*te+i*$e+v*pe+h,a[13]=o*te+u*$e+d*pe+g,a[14]=c*te+$*$e+b*pe+_,a[15]=1,a}),wZ=l(function(e,r){var a=new Float64Array(16);r=ru(r,cv);var t=r[0],o=r[1],c=r[2],i=Math.cos(e),u=1-i,$=Math.sin(e);return a[0]=t*t*u+i,a[1]=o*t*u+c*$,a[2]=c*t*u-o*$,a[3]=0,a[4]=t*o*u-c*$,a[5]=o*o*u+i,a[6]=o*c*u+t*$,a[7]=0,a[8]=t*c*u+o*$,a[9]=o*c*u-t*$,a[10]=c*c*u+i,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}),kZ=S(function(e,r,a){var t=new Float64Array(16),o=1/iv(r),c=r[0]*o,i=r[1]*o,u=r[2]*o,$=Math.cos(e),v=1-$,d=Math.sin(e),b=c*d,h=i*d,g=u*d,_=c*i*v,y=c*u*v,x=i*u*v,L=c*c*v+$,k=_+g,A=y-h,V=_-g,E=i*i*v+$,G=x+b,J=y+h,te=x-b,$e=u*u*v+$,pe=a[0],ke=a[1],Fe=a[2],De=a[3],fr=a[4],ce=a[5],Ue=a[6],rr=a[7],ar=a[8],Dr=a[9],Qe=a[10],sr=a[11],Er=a[12],oa=a[13],Wa=a[14],tn=a[15];return t[0]=pe*L+fr*k+ar*A,t[1]=ke*L+ce*k+Dr*A,t[2]=Fe*L+Ue*k+Qe*A,t[3]=De*L+rr*k+sr*A,t[4]=pe*V+fr*E+ar*G,t[5]=ke*V+ce*E+Dr*G,t[6]=Fe*V+Ue*E+Qe*G,t[7]=De*V+rr*E+sr*G,t[8]=pe*J+fr*te+ar*$e,t[9]=ke*J+ce*te+Dr*$e,t[10]=Fe*J+Ue*te+Qe*$e,t[11]=De*J+rr*te+sr*$e,t[12]=Er,t[13]=oa,t[14]=Wa,t[15]=tn,t});function l2(e,r,a){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}var TZ=S(l2),LZ=function(e){return l2(e[0],e[1],e[2])},zZ=q(function(e,r,a,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*a,o[9]=t[9]*a,o[10]=t[10]*a,o[11]=t[11]*a,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o}),MZ=l(function(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2];return a[0]=r[0]*t,a[1]=r[1]*t,a[2]=r[2]*t,a[3]=r[3]*t,a[4]=r[4]*o,a[5]=r[5]*o,a[6]=r[6]*o,a[7]=r[7]*o,a[8]=r[8]*c,a[9]=r[9]*c,a[10]=r[10]*c,a[11]=r[11]*c,a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15],a});function v2(e,r,a){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=a,t[15]=1,t}var DZ=S(v2),HZ=function(e){return v2(e[0],e[1],e[2])},FZ=q(function(e,r,a,t){var o=new Float64Array(16),c=t[0],i=t[1],u=t[2],$=t[3],v=t[4],d=t[5],b=t[6],h=t[7],g=t[8],_=t[9],y=t[10],x=t[11];return o[0]=c,o[1]=i,o[2]=u,o[3]=$,o[4]=v,o[5]=d,o[6]=b,o[7]=h,o[8]=g,o[9]=_,o[10]=y,o[11]=x,o[12]=c*e+v*r+g*a+t[12],o[13]=i*e+d*r+_*a+t[13],o[14]=u*e+b*r+y*a+t[14],o[15]=$*e+h*r+x*a+t[15],o}),AZ=l(function(e,r){var a=new Float64Array(16),t=e[0],o=e[1],c=e[2],i=r[0],u=r[1],$=r[2],v=r[3],d=r[4],b=r[5],h=r[6],g=r[7],_=r[8],y=r[9],x=r[10],L=r[11];return a[0]=i,a[1]=u,a[2]=$,a[3]=v,a[4]=d,a[5]=b,a[6]=h,a[7]=g,a[8]=_,a[9]=y,a[10]=x,a[11]=L,a[12]=i*t+d*o+_*c+r[12],a[13]=u*t+b*o+y*c+r[13],a[14]=$*t+h*o+x*c+r[14],a[15]=v*t+g*o+L*c+r[15],a}),BZ=S(function(e,r,a){var t=i2(e,r,cv),o=ru(uv(a,t,t2),t2),c=ru(uv(t,o,o2),o2),i=yy,u=Cy;return i[0]=o[0],i[1]=c[0],i[2]=t[0],i[3]=0,i[4]=o[1],i[5]=c[1],i[6]=t[1],i[7]=0,i[8]=o[2],i[9]=c[2],i[10]=t[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=-e[0],u[13]=-e[1],u[14]=-e[2],u[15]=1,$2(i,u)});function s2(e){var r=new Float64Array(16);return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],r}var IZ=s2,RZ=S(function(e,r,a){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=a[0],t[9]=a[1],t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}),d2=0;function au(e,r){for(;r.b;r=r.b)e(r.a)}function $v(e){for(var r=0;e.b;e=e.b)r++;return r}var xy=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},jy=Te(function(e,r,a,t,o){return{$:0,a:e,b:r,c:a,d:t,e:o}}),wy=l(function(e,r){var a=e.blend;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.BLEND),a.enabled=!0),(a.a!==r.a||a.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),a.a=r.a,a.d=r.d),(a.b!==r.b||a.c!==r.c||a.e!==r.e||a.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),a.b=r.b,a.c=r.c,a.e=r.e,a.f=r.f),(a.g!==r.g||a.h!==r.h||a.i!==r.i||a.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),a.g=r.g,a.h=r.h,a.i=r.i,a.j=r.j)}),ky=l(function(e,r){var a=e.depthTest;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.DEPTH_TEST),a.enabled=!0),a.a!==r.a&&(e.gl.depthFunc(r.a),a.a=r.a),a.b!==r.b&&(e.gl.depthMask(r.b),a.b=r.b),(a.c!==r.c||a.d!==r.d)&&(e.gl.depthRange(r.c,r.d),a.c=r.c,a.d=r.d)}),Ty=l(function(e,r){var a=e.stencilTest;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.STENCIL_TEST),a.enabled=!0),(a.d!==r.d||a.a!==r.a||a.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),a.d=r.d),(a.e!==r.e||a.f!==r.f||a.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),a.e=r.e,a.f=r.f,a.g=r.g),a.c!==r.c&&(e.gl.stencilMask(r.c),a.c=r.c),(a.h!==r.h||a.a!==r.a||a.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),a.h=r.h,a.a=r.a,a.b=r.b),(a.i!==r.i||a.j!==r.j||a.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),a.i=r.i,a.j=r.j,a.k=r.k)}),Ly=l(function(e,r){var a=e.scissor;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),a.enabled=!0),(a.a!==r.a||a.b!==r.b||a.c!==r.c||a.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),a.a=r.a,a.b=r.b,a.c=r.c,a.d=r.d)}),zy=l(function(e,r){var a=e.colorMask;a.toggle=e.toggle,a.enabled=!0,(a.a!==r.a||a.b!==r.b||a.c!==r.c||a.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),a.a=r.a,a.b=r.b,a.c=r.c,a.d=r.d)}),My=l(function(e,r){var a=e.cullFace;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.CULL_FACE),a.enabled=!0),a.a!==r.a&&(e.gl.cullFace(r.a),a.a=r.a)}),Dy=l(function(e,r){var a=e.polygonOffset;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),a.enabled=!0),(a.a!==r.a||a.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),a.a=r.a,a.b=r.b)}),Hy=l(function(e,r){var a=e.sampleCoverage;a.toggle=e.toggle,a.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),a.enabled=!0),(a.a!==r.a||a.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),a.a=r.a,a.b=r.b)}),Fy=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Ay=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},By=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Iy=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},b2=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},p2=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Ry=function(e){e.gl.disable(e.gl.CULL_FACE)},Ey=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Vy=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Oy=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},m2=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Uy=[Ay,By,Iy,b2,p2,Ry,Ey,Vy,Oy];function h2(e,r,a){var t=e.createShader(a);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function qy(e,r,a){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,a),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(a);return t}function g2(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Wy(e,r,a,t){for(var o=a.a.mo,c=[],i=0;i<o;i++)c.push(String.fromCharCode(97+i));function u(g,_,y,x,L){var k;if(o===1)for(k=0;k<_;k++)g[y++]=_===1?x[L]:x[L][k];else c.forEach(function(A){for(k=0;k<_;k++)g[y++]=_===1?x[A][L]:x[A][L][k]})}var $=g2(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var v=0,d=$.size*$.arraySize*o,b=new $.type($v(a.b)*d);au(function(g){u(b,$.size*$.arraySize,v,g,t[r.name]||r.name),v+=d},a.b);var h=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,b,e.STATIC_DRAW),h}function Gy(e,r){if(r.a.mZ>0){var a=e.createBuffer(),t=Ny(r.c,r.a.mZ);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,a),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:a,buffers:{}}}else return{numIndices:r.a.mo*$v(r.b),indexBuffer:null,buffers:{}}}function Ny(e,r){var a=new Uint32Array($v(e)*r),t=0,o;return au(function(c){if(r===1)a[t++]=c;else for(o=0;o<r;o++)a[t++]=c[String.fromCharCode(97+o)]},e),a}function _2(e,r){return e+"#"+r}var y2=l(function(e,r){var a=e.f,t=a.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),a.depthTest.b||(t.depthMask(!0),a.depthTest.b=!0),a.stencilTest.c!==a.STENCIL_WRITEMASK&&(t.stencilMask(a.STENCIL_WRITEMASK),a.stencilTest.c=a.STENCIL_WRITEMASK),b2(a),p2(a),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(c){if(c.d.b.b){var i,u,$;if(c.b.id&&c.c.id&&(i=_2(c.b.id,c.c.id),u=a.programs[i]),!u){var v;c.b.id?v=a.shaders[c.b.id]:c.b.id=d2++,v||(v=h2(t,c.b.src,t.VERTEX_SHADER),a.shaders[c.b.id]=v);var d;c.c.id?d=a.shaders[c.c.id]:c.c.id=d2++,d||(d=h2(t,c.c.src,t.FRAGMENT_SHADER),a.shaders[c.c.id]=d);var b=qy(t,v,d);u={glProgram:b,attributes:Object.assign({},c.b.attributes,c.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},u.uniformSetters=Zy(t,e,u,Object.assign({},c.b.uniforms,c.c.uniforms));var h=t.getProgramParameter(b,t.ACTIVE_ATTRIBUTES);for($=0;$<h;$++){var g=t.getActiveAttrib(b,$),_=t.getAttribLocation(b,g.name);u.activeAttributes.push(g),u.activeAttributeLocations.push(_)}i=_2(c.b.id,c.c.id),a.programs[i]=u}a.lastProgId!==i&&(t.useProgram(u.glProgram),a.lastProgId=i),Jy(u.uniformSetters,c.e);var y=a.buffers.get(c.d);for(y||(y=Gy(t,c.d),a.buffers.set(c.d,y)),$=0;$<u.activeAttributes.length;$++){g=u.activeAttributes[$],_=u.activeAttributeLocations[$],y.buffers[g.name]===void 0&&(y.buffers[g.name]=Wy(t,g,c.d,u.attributes)),t.bindBuffer(t.ARRAY_BUFFER,y.buffers[g.name]);var x=g2(t,g.type);if(x.arraySize===1)t.enableVertexAttribArray(_),t.vertexAttribPointer(_,x.size,x.baseType,!1,0,0);else for(var L=x.size*4,k=L*x.arraySize,A=0;A<x.arraySize;A++)t.enableVertexAttribArray(_+A),t.vertexAttribPointer(_+A,x.size,x.baseType,!1,k,L*A)}for(a.toggle=!a.toggle,au(gV(a),c.a),$=0;$<m2.length;$++){var V=a[m2[$]];V.toggle!==a.toggle&&V.enabled&&(Uy[$](a),V.enabled=!1,V.toggle=a.toggle)}y.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,y.indexBuffer),t.drawElements(c.d.a.nY,y.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(c.d.a.nY,0,y.numIndices)}}return au(o,e.g),r});function Zy(e,r,a,t){var o=a.glProgram,c=a.currentUniforms,i=0,u=r.f;function $(g,_){var y=_.name,x=e.getUniformLocation(g,y);switch(_.type){case e.INT:return function(k){c[y]!==k&&(e.uniform1i(x,k),c[y]=k)};case e.FLOAT:return function(k){c[y]!==k&&(e.uniform1f(x,k),c[y]=k)};case e.FLOAT_VEC2:return function(k){c[y]!==k&&(e.uniform2f(x,k[0],k[1]),c[y]=k)};case e.FLOAT_VEC3:return function(k){c[y]!==k&&(e.uniform3f(x,k[0],k[1],k[2]),c[y]=k)};case e.FLOAT_VEC4:return function(k){c[y]!==k&&(e.uniform4f(x,k[0],k[1],k[2],k[3]),c[y]=k)};case e.FLOAT_MAT4:return function(k){c[y]!==k&&(e.uniformMatrix4fv(x,!1,new Float32Array(k)),c[y]=k)};case e.SAMPLER_2D:var L=i++;return function(k){e.activeTexture(e.TEXTURE0+L);var A=u.textures.get(k);A||(A=k.qJ(e),u.textures.set(k,A)),e.bindTexture(e.TEXTURE_2D,A),c[y]!==k&&(e.uniform1i(x,L),c[y]=k)};case e.BOOL:return function(k){c[y]!==k&&(e.uniform1i(x,k),c[y]=k)};default:return function(){}}}for(var v={},d=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),b=0;b<d;b++){var h=e.getActiveUniform(o,b);v[t[h.name]||h.name]=$(o,h)}return v}function Jy(e,r){Object.keys(r).forEach(function(a){var t=e[a];t&&t(r[a])})}var Yy=S(function(e,r,a){return Yg(r,{g:a,f:{},h:e},nC,tC)}),Ky=l(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Xy=l(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(a){a.clearDepth(r.a)})}),Qy=l(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(a){a.clearStencil(r.a)})}),eC=l(function(e,r){e.contextAttributes.antialias=!0}),rC=l(function(e,r){e.sceneSettings.push(function(a){a.clearColor(r.a,r.b,r.c,r.d)})}),aC=l(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function nC(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};au(function(o){return n(hV,r,o)},e.h);var a=$a.createElement("canvas"),t=a.getContext&&(a.getContext("webgl",r.contextAttributes)||a.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),xy(function(){return n(y2,e,a)})):(a=$a.createElement("div"),a.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),a}function tC(e,r){return r.f=e.f,y2(r)}var F=eh,Nf=V7,Zf=S(function(e,r,a){var t=a.c,o=a.d,c=l(function(i,u){if(i.$){var v=i.a;return s(Nf,e,u,v)}else{var $=i.a;return s(Nf,c,u,$)}});return s(Nf,c,s(Nf,e,r,o),t)}),oC=function(e){return s(Zf,F,P,e)},nu=S(function(e,r,a){e:for(;;){if(a.$===-2)return r;var t=a.b,o=a.c,c=a.d,i=a.e,u=e,$=s(e,t,o,s(nu,e,r,i)),v=c;e=u,r=$,a=v;continue e}}),ln=function(e){return s(nu,S(function(r,a,t){return n(F,p(r,a),t)}),P,e)},Jf=function(e){return s(nu,S(function(r,a,t){return n(F,r,t)}),P,e)},cC=function(e){var r=e;return Jf(r)},C2=1,iC=2,P2=0,D=function(e){return{$:0,a:e}},T={$:1},qe=function(e){return{$:1,a:e}},lv=l(function(e,r){return{$:3,a:e,b:r}}),S2=l(function(e,r){return{$:0,a:e,b:r}}),x2=l(function(e,r){return{$:1,a:e,b:r}}),We=function(e){return{$:0,a:e}},uC=function(e){return{$:2,a:e}},EZ=1,fC=oh,$C=Uh,VZ=kh,lC=Q7,vv=Pg,Ie=Lb,Or=l(function(e,r){return n(Ih,e,Bf(r))}),Dn=l(function(e,r){return f(n(Bh,e,r))}),j2=function(e){return n(Or,`
    `,n(Dn,`
`,e))},me=S(function(e,r,a){e:for(;;)if(a.b){var t=a.a,o=a.b,c=e,i=n(e,t,r),u=o;e=c,r=i,a=u;continue e}else return r}),xr=function(e){return s(me,l(function(r,a){return a+1}),0,e)},w2=rh,OZ=J7,UZ=ch,vC=S(function(e,r,a){e:for(;;)if(X(e,r)<1){var t=e,o=r-1,c=n(F,r,a);e=t,r=o,a=c;continue e}else return a}),Na=l(function(e,r){return s(vC,e,r,P)}),Za=l(function(e,r){return s(w2,e,n(Na,0,xr(r)-1),r)}),ct=Kh,k2=function(e){var r=ct(e);return 97<=r&&r<=122},T2=function(e){var r=ct(e);return r<=90&&65<=r},qZ=Th,sC=function(e){return k2(e)||T2(e)},dC=function(e){var r=ct(e);return r<=57&&48<=r},L2=function(e){return k2(e)||T2(e)||dC(e)},Ve=function(e){return s(me,F,P,e)},tu=zh,bC=l(function(e,r){return`

(`+(Ie(e+1)+(") "+j2(sv(r))))}),sv=function(e){return n(pC,e,P)},pC=l(function(e,r){e:for(;;)switch(e.$){case 0:var a=e.a,i=e.b,t=(function(){var y=tu(a);if(y.$===1)return!1;var x=y.a,L=x.a,k=x.b;return sC(L)&&n($C,L2,k)})(),o=t?"."+a:"['"+(a+"']"),$=i,v=n(F,o,r);e=$,r=v;continue e;case 1:var c=e.a,i=e.b,u="["+(Ie(c)+"]"),$=i,v=n(F,u,r);e=$,r=v;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var b=(function(){return r.b?"The Json.Decode.oneOf at json"+n(Or,"",Ve(r)):"Json.Decode.oneOf"})(),_=b+(" failed in the following "+(Ie(xr(d))+" ways:"));return n(Or,`

`,n(F,_,n(Za,bC,d)))}else{var i=d.a,$=i,v=r;e=$,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+(function(){return r.b?" at json"+n(Or,"",Ve(r)):"!"})();default:var h=e.a,g=e.b,_=(function(){return r.b?"Problem with the value at json"+(n(Or,"",Ve(r))+`:

    `):`Problem with the given value:

`})();return _+(j2(n(vv,4,g))+(`

`+h))}}),Ur=32,io=q(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),Io=M7,dv=Ch,WZ=uh,Yf=l(function(e,r){return Tb(r)/Tb(e)}),GZ=_h,Hn=dv(n(Yf,2,Ur)),ou=C(io,0,Hn,Io,Io),z2=F7,Dc=function(e){return{$:1,a:e}},mC=l(function(e,r){return e(r)}),NZ=l(function(e,r){return r(e)}),vn=G7,Da=Ph,it=H7,ZZ=Y7,Le=l(function(e,r){return X(e,r)>0?e:r}),hC=ih,Hc=function(e){return{$:0,a:e}},bv=A7,gC=l(function(e,r){e:for(;;){var a=n(bv,Ur,e),t=a.a,o=a.b,c=n(F,Hc(t),r);if(o.b){var i=o,u=c;e=i,r=u;continue e}else return Ve(c)}}),Fn=function(e){var r=e.a;return r},_C=l(function(e,r){e:for(;;){var a=dv(r/Ur);if(a===1)return n(bv,Ur,e).a;var t=n(gC,e,P),o=a;e=t,r=o;continue e}}),pv=l(function(e,r){if(r.Z){var a=r.Z*Ur,t=Da(n(Yf,Ur,a-1)),o=e?Ve(r.as):r.as,c=n(_C,o,r.Z);return C(io,it(r.ai)+a,n(Le,5,t*Hn),c,r.ai)}else return C(io,it(r.ai),Hn,Io,r.ai)}),JZ=fh,YZ=Z7,yC=Te(function(e,r,a,t,o){e:for(;;){if(r<0)return n(pv,!1,{as:t,Z:a/Ur|0,ai:o});var c=Dc(s(z2,Ur,r,e)),i=e,u=r-Ur,$=a,v=n(F,c,t),d=o;e=i,r=u,a=$,t=v,o=d;continue e}}),KZ=lh,Kf=l(function(e,r){if(e<=0)return ou;var a=e%Ur,t=s(z2,a,e-a,r),o=e-a-Ur;return I(yC,r,o,e,P,t)}),XZ=0,An=function(e){return!e.$},H=sg,CC={ku:P,pk:P},Pa=Fb,fe=Pa(P),cu=Fb,uo=cu(P),Ye=bg,Ha=pg,re=eg,mv=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Bn=$n("div"),M2=Xg,Q=M2,Xf=function(e){return{$:0,a:e}},Qf=Lh,PC=q(function(e,r,a,t){return{el:t,eN:a,oS:r,kV:e}}),D2=3432918353,H2=461845907,QZ=P_,eJ=w_,rJ=T_,Ro=l(function(e,r){return(r&65535)*e+(((r>>>16)*e&65535)<<16)}),e$=N7,aJ=S_,hv=l(function(e,r){return r<<e|r>>>32-e}),nJ=x_,SC=function(e){var r=e.eN?e.oS^n(Ro,H2,n(hv,15,n(Ro,D2,e.eN))):e.oS,a=r^e.el,t=n(Ro,2246822507,a^a>>>16),o=n(Ro,3266489909,t^t>>>13);return(o^o>>>16)>>>0},xC=Fh,jC=l(function(e,r){return n(Ro,5,n(hv,13,e^n(Ro,H2,n(hv,15,n(Ro,D2,r)))))+3864292196}),wC=l(function(e,r){var a=r.eN|(255&ct(e))<<r.kV,t=r.kV;return t===24?{el:r.el+1,eN:0,oS:n(jC,r.oS,a),kV:0}:{el:r.el+1,eN:a,oS:r.oS,kV:r.kV+8}}),kC=l(function(e,r){return SC(s(xC,wC,C(PC,0,e,0,0),r))}),TC=15739,LC=Yh,tJ=function(e){return-e},Qr=vh,F2=function(e){e:for(;;)switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";case 15:return"f";default:var r=e;e=r;continue e}},A2=l(function(e,r){e:for(;;){if(r<16)return n(F,F2(r),e);var a=n(F,F2(n(Qr,16,r)),e),t=r/16|0;e=a,r=t;continue e}}),zC=function(e){return LC(e<0?n(F,"-",n(A2,P,-e)):n(A2,P,e))},B2=function(e){return n(Qf,"_",zC(n(kC,TC,e)))},gv=X7,Ke=l(function(e,r){e:for(;;){if(r.$===-2)return T;var a=r.b,t=r.c,o=r.d,c=r.e,i=n(gv,e,a);switch(i){case 0:var u=e,$=o;e=u,r=$;continue e;case 1:return D(t);default:var u=e,$=c;e=u,r=$;continue e}}}),oJ=1,Re=Te(function(e,r,a,t,o){return{$:-1,a:e,b:r,c:a,d:t,e:o}}),ut={$:-2},cJ=0,Fc=Te(function(e,r,a,t,o){if(o.$===-1&&!o.a){var c=o.a,i=o.b,u=o.c,$=o.d,v=o.e;if(t.$===-1&&!t.a){var d=t.a,b=t.b,h=t.c,g=t.d,_=t.e;return I(Re,0,r,a,I(Re,1,b,h,g,_),I(Re,1,i,u,$,v))}else return I(Re,e,i,u,I(Re,0,r,a,t,$),v)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){var y=t.a,b=t.b,h=t.c,x=t.d,L=x.a,k=x.b,A=x.c,V=x.d,E=x.e,_=t.e;return I(Re,0,b,h,I(Re,1,k,A,V,E),I(Re,1,r,a,_,o))}else return I(Re,e,r,a,t,o)}),_v=S(function(e,r,a){if(a.$===-2)return I(Re,0,e,r,ut,ut);var t=a.a,o=a.b,c=a.c,i=a.d,u=a.e,$=n(gv,e,o);switch($){case 0:return I(Fc,t,o,c,s(_v,e,r,i),u);case 1:return I(Re,t,o,r,i,u);default:return I(Fc,t,o,c,i,s(_v,e,r,u))}}),$r=S(function(e,r,a){var t=s(_v,e,r,a);if(t.$===-1&&!t.a){var o=t.a,c=t.b,i=t.c,u=t.d,$=t.e;return I(Re,1,c,i,u,$)}else{var v=t;return v}}),sn=l(function(e,r){var a=e.b,t=e.c;if(a){var o=n(Ke,t,r);return o.$?s($r,t,B2(t),r):r}else return r}),yv=l(function(e,r){return n(Wb,n_(e),t_(r))}),Hr=Rf,fo=l(function(e,r){var a=r.a,t=r.b,o=r.c;if(t){var c=n(Ke,o,e);if(c.$)return n(yv,"className",Hr("_unstyled"));var i=c.a;return n(yv,"className",Hr(i))}else return a}),In=l(function(e,r){return n(Uf,Gb(e),Nb(r))}),r$=l(function(e,r){var a=r.a,t=r.b,o=r.c;if(t){var c=n(Ke,o,e);if(c.$)return n(In,"class","_unstyled");var i=c.a;return n(In,"class",i)}else return a}),a$=function(e){return Jg(qf(e))},Cv=l(function(e,r){return n(Ub,e,qf(r))}),I2=q(function(e,r,a,t){if(t.b){var o=t.a,c=t.b;if(c.b){var i=c.a,u=c.b;if(u.b){var $=u.a,v=u.b;if(v.b){var d=v.a,b=v.b,h=a>500?s(me,e,r,Ve(b)):C(I2,e,r,a+1,b);return n(e,o,n(e,i,n(e,$,n(e,d,h))))}else return n(e,o,n(e,i,n(e,$,r)))}else return n(e,o,n(e,i,r))}else return n(e,o,r)}else return r}),dn=S(function(e,r,a){return C(I2,e,r,0,a)}),N=l(function(e,r){return s(dn,l(function(a,t){return n(F,e(a),t)}),P,r)}),Eo=function(e){return $n(qf(e))},Pv=l(function(e,r){return n(Ob,e,qf(r))}),Ac=l(function(e,r){var a=e.a,t=e.b,o=r.a,c=r.b;switch(t.$){case 4:var L=t.a;return p(n(F,p(a,L),o),c);case 0:var d=t.a,b=t.b,h=t.c,g=s(me,sn,c,b),i=s(me,Bc,p(P,g),h),y=i.a,x=i.b,L=s(Eo,d,n(N,fo(x),b),Ve(y));return p(n(F,p(a,L),o),x);case 1:var v=t.a,d=t.b,b=t.c,h=t.d,g=s(me,sn,c,b),u=s(me,Bc,p(P,g),h),y=u.a,x=u.b,L=C(Pv,v,d,n(N,fo(x),b),Ve(y));return p(n(F,p(a,L),o),x);case 2:var d=t.a,b=t.b,h=t.c,g=s(me,sn,c,b),$=s(me,Ac,p(P,g),h),y=$.a,x=$.b,L=s(a$,d,n(N,fo(x),b),Ve(y));return p(n(F,p(a,L),o),x);default:var v=t.a,d=t.b,b=t.c,h=t.d,g=s(me,sn,c,b),_=s(me,Ac,p(P,g),h),y=_.a,x=_.b,L=C(Cv,v,d,n(N,fo(x),b),Ve(y));return p(n(F,p(a,L),o),x)}}),Bc=l(function(e,r){var a=r.a,t=r.b;switch(e.$){case 4:var y=e.a;return p(n(F,y,a),t);case 0:var $=e.a,v=e.b,d=e.c,b=s(me,sn,t,v),o=s(me,Bc,p(P,b),d),g=o.a,_=o.b,y=s(Eo,$,n(N,fo(_),v),Ve(g));return p(n(F,y,a),_);case 1:var u=e.a,$=e.b,v=e.c,d=e.d,b=s(me,sn,t,v),c=s(me,Bc,p(P,b),d),g=c.a,_=c.b,y=C(Pv,u,$,n(N,r$(_),v),Ve(g));return p(n(F,y,a),_);case 2:var $=e.a,v=e.b,d=e.c,b=s(me,sn,t,v),i=s(me,Ac,p(P,b),d),g=i.a,_=i.b,y=s(a$,$,n(N,fo(_),v),Ve(g));return p(n(F,y,a),_);default:var u=e.a,$=e.b,v=e.c,d=e.d,b=s(me,sn,t,v),h=s(me,Ac,p(P,b),d),g=h.a,_=h.b,y=C(Cv,u,$,n(N,r$(_),v),Ve(g));return p(n(F,y,a),_)}}),Ae=ut,Ic=function(e){return f([e])},n$=K0,ft=S(function(e,r,a){e:for(;;){if(a.$===-2)return r;var t=a.b,o=a.c,c=a.d,i=a.e,u=e,$=s(e,t,o,s(ft,e,r,c)),v=i;e=u,r=$,a=v;continue e}}),Sv="\x07",t$=S(function(e,r,a){return n(Or,r,n(Dn,e,a))}),MC=S(function(e,r,a){return a+(`
`+s(t$,Sv,r,e))}),DC=function(e){return s(ft,MC,"",e)},R2=l(function(e,r){return s(ft,S(function(a,t,o){return o+(`
`+s(t$,"."+Sv,"#"+(e+("."+t)),a))}),"",r)}),xv=l(function(e,r){var a=(function(){if(r.$){var o=r.a,c=r.b,i=r.c;return n(R2,o,c)+(`
`+n(R2,o+" ",i))}else{var t=r.a;return DC(t)}})();return s(Eo,"span",f([n(In,"style","display: none;"),n(In,"class","elm-css-style-wrapper")]),f([s(Eo,"style",(function(){if(e.$)return P;var t=e.a;return f([n(In,"nonce",t)])})(),Ic(n$(a)))]))}),HC=q(function(e,r,a,t){var o=s(me,sn,Ae,a),c=s(me,Bc,p(P,o),t),i=c.a,u=c.b,$=n(xv,e,Xf(u)),v=n(N,fo(u),a);return s(Eo,r,v,n(F,$,Ve(i)))}),FC=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=a.a,o=r.b;if(ee(e,t))return!0;var c=e,i=o;e=c,r=i;continue e}else return!1}),AC=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=a.a,o=r.b,c="_"+t;if(n(FC,c,o)){var i=c,u=o;e=i,r=u;continue e}else return c}else return e}),E2=S(function(e,r,a){var t=n(AC,"_",a),o=n(xv,e,r);return p(t,o)}),BC=q(function(e,r,a,t){var o=s(me,sn,Ae,a),c=s(me,Ac,p(P,o),t),i=c.a,u=c.b,$=s(E2,e,Xf(u),i),v=n(N,fo(u),a);return s(a$,r,v,n(F,$,Ve(i)))}),IC=Te(function(e,r,a,t,o){var c=s(me,sn,Ae,t),i=s(me,Ac,p(P,c),o),u=i.a,$=i.b,v=s(E2,e,Xf($),u),d=n(N,r$($),t);return C(Cv,r,a,d,n(F,v,Ve(u)))}),RC=Te(function(e,r,a,t,o){var c=s(me,sn,Ae,t),i=s(me,Bc,p(P,c),o),u=i.a,$=i.b,v=n(xv,e,Xf($)),d=n(N,r$($),t);return C(Pv,r,a,d,n(F,v,Ve(u)))}),EC=function(e){switch(e.$){case 4:var r=e.a;return r;case 0:var t=e.a,o=e.b,c=e.c;return C(HC,T,t,o,c);case 1:var a=e.a,t=e.b,o=e.c,c=e.d;return I(RC,T,a,t,o,c);case 2:var t=e.a,o=e.b,c=e.c;return C(BC,T,t,o,c);default:var a=e.a,t=e.b,o=e.c,c=e.d;return I(IC,T,a,t,o,c)}},o$=EC,VC=function(e){return n(Bn,f([n(Q,"position","fixed"),n(Q,"inset","0"),n(Q,"overflow","clip"),n(Q,"background-color","transparent")]),f([o$(e)]))},Zr=n$,OC=function(e){var r=e.cY;if(r.b){var a=r.a,t=a.b;return n(Bn,f([n(Q,"position","fixed"),n(Q,"inset","0"),n(Q,"background-color","transparent"),n(Q,"overflow","clip")]),f([t]))}else return Zr("")},jv=function(e){var r=e.a,a=e.b;return R(r,a,P)},UC=function(e){return{lu:e.lu,ba:{bk:Te(function(r,a,t,o,c){return jv(C(e.bk,r,t,o,c))}),bl:q(function(r,a,t,o){return jv(s(e.bl,r,t,o))}),cu:q(function(r,a,t,o){return s(e.cu,r,t,o)}),aC:q(function(r,a,t,o){return s(e.aC,r,t,o)}),bt:q(function(r,a,t,o){return VC(s(e.bt,r,t,o))})},aE:q(function(r,a,t,o){return s(e.aE,r,t,o)}),bH:e.bH,jO:function(r){return CC},aK:e.aK,eS:function(r){return 0},cY:f([{aE:P,bI:"play",b1:S(function(r,a,t){return jv(n(e.b1,r,t))}),aK:e.aK,fd:!1}]),sh:OC,ff:l(function(r,a){return p(0,fe)}),aC:function(r){return uo},iP:T,fv:function(r){return P}}},qC=function(e){return{$:1,a:e}},WC=function(e){return{$:0,a:e}},ae=function(e){return e},GC=ae,iJ=0,uJ=1,V2=Vr(function(e,r,a,t,o,c){return{mI:c,mU:r,ol:t,ou:a,oA:e,oB:o}}),O2=qh,Fa=Dh,bn=Rh,Aa=l(function(e,r){return e<1?r:s(bn,e,Fa(r),r)}),c$=Nh,Vo=function(e){return e===""},Rc=l(function(e,r){return e<1?"":s(bn,0,e,r)}),Ec=Zh,U2=Te(function(e,r,a,t,o){if(Vo(o)||n(O2,"@",o))return T;var c=n(c$,":",o);if(c.b){if(c.b.b)return T;var i=c.a,u=Ec(n(Aa,i+1,o));if(u.$===1)return T;var $=u;return D(Sr(V2,e,n(Rc,i,o),$,r,a,t))}else return D(Sr(V2,e,o,T,r,a,t))}),q2=q(function(e,r,a,t){if(Vo(t))return T;var o=n(c$,"/",t);if(o.b){var c=o.a;return I(U2,e,n(Aa,c,t),r,a,n(Rc,c,t))}else return I(U2,e,"/",r,a,t)}),W2=S(function(e,r,a){if(Vo(a))return T;var t=n(c$,"?",a);if(t.b){var o=t.a;return C(q2,e,D(n(Aa,o+1,a)),r,n(Rc,o,a))}else return C(q2,e,T,r,a)}),G2=l(function(e,r){if(Vo(r))return T;var a=n(c$,"#",r);if(a.b){var t=a.a;return s(W2,e,D(n(Aa,t+1,r)),n(Rc,t,r))}else return s(W2,e,T,r)}),pn=Wh,N2=function(e){return n(pn,"http://",e)?n(G2,0,n(Aa,7,e)):n(pn,"https://",e)?n(G2,1,n(Aa,8,e)):T},Oo=function(e){e:for(;;){var r=e,a=r;e=a;continue e}},fJ=ae,Ba=Ga,NC=Ba(0),Sa=O0,iu=l(function(e,r){return n(Sa,function(a){return Ba(e(a))},r)}),ZC=S(function(e,r,a){return n(Sa,function(t){return n(Sa,function(o){return Ba(n(e,t,o))},a)},r)}),uu=function(e){return s(dn,ZC(F),Ba(P),e)},i$=Rg,JC=l(function(e,r){var a=r;return q0(n(Sa,i$(e),a))}),YC=S(function(e,r,a){return n(iu,function(t){return 0},uu(n(N,JC(e),r)))}),KC=S(function(e,r,a){return Ba(0)}),XC=l(function(e,r){var a=r;return n(iu,e,a)});fa.Task=Z0(NC,YC,KC,XC);var Z2=Yi("Task"),fu=l(function(e,r){return Z2(n(iu,e,r))}),QC=z_,u$=function(e){return{$:9,a:e}},ea=l(function(e,r){if(r.$)return T;var a=r.a;return e(a)}),eP=function(e){return{$:3,a:e}},Vc=Ab,f$=S(function(e,r,a){return s(me,l(function(t,o){var c=o.a,i=o.b,u=n(e.ff,t,c),$=u.a,v=u.b;return p($,Pa(f([i,n(Vc,eP,v)])))}),p(a,fe),r)}),rP=function(e){switch(e){case"true":return D(!0);case"false":return D(!1);default:return T}},aP=function(e){return{$:1,a:e}},nP={$:0},Pe=S(function(e,r,a){return r(e(a))}),tP=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,a=r;e=a;continue e}else return e},J2=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,a=e.b,t=e.c,o=e.d,c=o.a,i=o.b,u=o.c,$=o.d,v=o.e,d=e.e,b=d.a,h=d.b,g=d.c,_=d.d,y=_.a,x=_.b,L=_.c,k=_.d,A=_.e,V=d.e;return I(Re,0,x,L,I(Re,1,a,t,I(Re,0,i,u,$,v),k),I(Re,1,h,g,A,V))}else{var r=e.a,a=e.b,t=e.c,E=e.d,c=E.a,i=E.b,u=E.c,$=E.d,v=E.e,G=e.e,b=G.a,h=G.b,g=G.c,_=G.d,V=G.e;return I(Re,1,a,t,I(Re,0,i,u,$,v),I(Re,0,h,g,_,V))}else return e},Y2=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,a=e.b,t=e.c,o=e.d,c=o.a,i=o.b,u=o.c,$=o.d,v=$.a,d=$.b,b=$.c,h=$.d,g=$.e,_=o.e,y=e.e,x=y.a,L=y.b,k=y.c,A=y.d,V=y.e;return I(Re,0,i,u,I(Re,1,d,b,h,g),I(Re,1,a,t,_,I(Re,0,L,k,A,V)))}else{var r=e.a,a=e.b,t=e.c,E=e.d,c=E.a,i=E.b,u=E.c,G=E.d,_=E.e,J=e.e,x=J.a,L=J.b,k=J.c,A=J.d,V=J.e;return I(Re,1,a,t,I(Re,0,i,u,G,_),I(Re,0,L,k,A,V))}else return e},oP=ro(function(e,r,a,t,o,c,i){if(c.$===-1&&!c.a){var u=c.a,$=c.b,v=c.c,d=c.d,b=c.e;return I(Re,a,$,v,d,I(Re,0,t,o,b,i))}else{e:for(;;)if(i.$===-1&&i.a===1)if(i.d.$===-1)if(i.d.a===1){var h=i.a,g=i.d,_=g.a;return Y2(r)}else break e;else{var y=i.a,x=i.d;return Y2(r)}else break e;return r}}),$$=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,a=e.b,t=e.c,o=e.d,c=o.a,i=o.d,u=e.e;if(c===1)if(i.$===-1&&!i.a){var $=i.a;return I(Re,r,a,t,$$(o),u)}else{var v=J2(e);if(v.$===-1){var d=v.a,b=v.b,h=v.c,g=v.d,_=v.e;return I(Fc,d,b,h,$$(g),_)}else return ut}else return I(Re,r,a,t,$$(o),u)}else return ut},$u=l(function(e,r){if(r.$===-2)return ut;var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(X(e,t)<0)if(c.$===-1&&c.a===1){var u=c.a,$=c.d;if($.$===-1&&!$.a){var v=$.a;return I(Re,a,t,o,n($u,e,c),i)}else{var d=J2(r);if(d.$===-1){var b=d.a,h=d.b,g=d.c,_=d.d,y=d.e;return I(Fc,b,h,g,n($u,e,_),y)}else return ut}}else return I(Re,a,t,o,n($u,e,c),i);else return n(cP,e,ua(oP,e,r,a,t,o,c,i))}),cP=l(function(e,r){if(r.$===-1){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e;if(ee(e,t)){var u=tP(i);if(u.$===-1){var $=u.b,v=u.c;return I(Fc,a,$,v,c,$$(i))}else return ut}else return I(Fc,a,t,o,c,n($u,e,i))}else return ut}),lu=l(function(e,r){var a=n($u,e,r);if(a.$===-1&&!a.a){var t=a.a,o=a.b,c=a.c,i=a.d,u=a.e;return I(Re,1,o,c,i,u)}else{var $=a;return $}}),At=S(function(e,r,a){var t=r(n(Ke,e,a));if(t.$)return n(lu,e,a);var o=t.a;return s($r,e,o,a)}),oe=l(function(e,r){if(r.$)return e;var a=r.a;return a}),iP=function(e){return n(At,e,n(Pe,oe(0),n(Pe,fC(1),D)))},uP=l(function(e,r){return s(ft,S(function(a,t,o){return n(e,a,t)?s($r,a,t,o):o}),Ae,r)}),fP=function(e){if(e.b){var r=Jf(n(uP,l(function(a,t){return t>1}),s(me,l(function(a,t){return n(iP,a.bI,t)}),Ae,e)));return r.b?D(aP(r)):T}else return D(nP)},$P=function(e){return e?"true":"false"},wv=l(function(e,r){return r.b?s(dn,F,r,e):e}),Rn=function(e){return s(dn,wv,P,e)},En=l(function(e,r){return Rn(n(N,e,r))}),Uo=4294967295>>>32-Hn,$J=K7,vu=B7,lP=S(function(e,r,a){e:for(;;){var t=Uo&r>>>e,o=n(vu,t,a);if(o.$){var v=o.a;return n(vu,Uo&r,v)}else{var c=o.a,i=e-Hn,u=r,$=c;e=i,r=u,a=$;continue e}}}),K2=function(e){return e>>>5<<5},qr=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d;return e<0||X(e,a)>-1?T:X(e,K2(a))>-1?D(n(vu,Uo&e,c)):D(s(lP,t,e,o))}),X2=function(e){var r=e;return n(oe,r.oS,n(qr,n(Qr,r.cN,r.ds+r.aU),r.eL))},qo=function(e){if(e.$){var a=e.a;return n(oe,a.oS,n(qr,a.aU,a.eL))}else{var r=e.a;return X2(r)}},l$=function(e){var r=e.b;return r},Oc=function(e){var r=e.b;return qo(r).b},Uc=function(e){return e.nY},Vn=function(e){return e.e},vP=function(e){return e.U},Z=Lb,Q2=function(e){var r=e;return n(N,function(a){var t=a.a,o=a.b;return p(r.r_(t)+"Off",Z(o.pF)+(","+Z(o.pH)))},r.c_)},sP=function(e){return Q2(e.f)},dP=function(e){return e?"landscape":"portrait"},bP=function(e){var r=e;return r.cQ.sR+("|"+dP(r.dX))},mn=l(function(e,r){return s(me,wg(e),Sg(0),r)}),e3=function(e){return n(vv,0,n(mn,function(r){var a=r.a,t=r.b;return n(mn,Hr,f([a,t]))},e))},v$=function(e){return"play:"+e},r3=function(e){switch(e){case 0:return"hudConfigurations";case 1:return"hudInputs";case 2:return"hudFpsMeter";case 3:return"hudProfiler";case 4:return"hudTape";case 5:return"hudPalette";case 6:return"hudCommandPalette";default:return"hudDevice"}},kv=function(e){var r=e;return r.aN},lJ=0,vJ=7,sJ=2,dJ=1,bJ=5,Fr=l(function(e,r){return s(dn,l(function(a,t){return e(a)?n(F,a,t):t}),P,r)}),s$=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b;if(e(a))return!0;var o=e,c=t;e=o,r=c;continue e}else return!1}),Wo=l(function(e,r){return n(s$,function(a){return ee(a,e)},r)}),a3=function(e){return n(Fr,function(r){return n(Wo,r,e)},f([0,1,2,5,7]))},pP=function(e){return n(Or,",",n(N,r3,a3(kv(e.f))))},$t=l(function(e,r){return"play:"+(r+(":"+e))}),mP=function(e){return e.bP},n3=function(e){var r=e;return r.g9},hP=function(e){var r=e;return r.c9.kv.sR},su=function(e){var r=e;return r.dQ},gP=function(e){var r=e;return r.dj.kv.sR},t3=function(e){switch(e){case 0:return"Red";case 1:return"Green";case 2:return"Yellow";case 3:return"Blue";case 4:return"Magenta";default:return"Cyan"}},_P=function(e){return n(Or,"|",f([hP(e),gP(e),su(e)?"1":"0",t3(n3(e))]))},o3=function(e){switch(e){case 0:return"User";case 1:return"Author";default:return"Developer"}},c3=l(function(e,r){var a=Oc(r.uz),t=n(En,function(o){var c=n(Ke,o.bI,a.cY);if(c.$)return P;var i=c.a;return Q2(i.ik)},e.cY);return f([p(v$("hud-panel-layout"),e3(sP(r.bH))),p(n($t,r.tj,"panel-layout"),e3(t)),p(v$("mode"),o3(Uc(r.bH))),p(n($t,r.tj,"theme"),_P(Vn(r.bH))),p(n($t,r.tj,"device"),bP(vP(r.bH))),p(n($t,r.tj,"hud-open-panels"),pP(r.bH)),p(n($t,r.tj,"tape-record-from-start"),$P(mP(r.bH)))])}),pJ=ae,mJ=1,hJ=0,gJ=2,Tv=f([{aF:0,sR:"iPhone SE",gE:{rS:667,u5:375}},{aF:0,sR:"iPhone 12 Pro",gE:{rS:844,u5:390}},{aF:0,sR:"iPhone 14 Pro Max",gE:{rS:932,u5:430}},{aF:0,sR:"Pixel 7",gE:{rS:915,u5:412}},{aF:0,sR:"Samsung Galaxy S20 Ultra",gE:{rS:915,u5:412}},{aF:0,sR:"Samsung Galaxy S8+",gE:{rS:740,u5:360}},{aF:1,sR:"Galaxy Z Fold 5",gE:{rS:882,u5:344}},{aF:1,sR:"Surface Duo",gE:{rS:720,u5:540}},{aF:2,sR:"iPad Mini",gE:{rS:1024,u5:768}},{aF:2,sR:"iPad Air",gE:{rS:1180,u5:820}},{aF:2,sR:"iPad Pro",gE:{rS:1366,u5:1024}},{aF:2,sR:"Surface Pro 7",gE:{rS:1368,u5:912}}]),jr=function(e){if(e.b){var r=e.a,a=e.b;return D(r)}else return T},yP=function(e){return jr(n(Fr,function(r){return ee(r.sR,e)},Tv))},_J=ae,yJ=ae,i3=14,CP=8,PP=function(e){return e===" "||e==="	"||e==="/"||e==="."||e===":"||e===";"||e===","||e==="|"||e==="\\"||e==="_"||e==="-"||e==="*"},SP=function(e){var r=ct(e);return r>=97&&r<=122},xP=function(e){var r=ct(e);return r>=65&&r<=90},jP=S(function(e,r,a){e:for(;;)if(r.b){var t=r.a,o=r.b,c=PP(e)?i3:SP(e)&&xP(t)?CP:0,i=t,u=o,$=n(F,c,a);e=i,r=u,a=$;continue e}else return Ve(a)}),wP=function(e){if(e.b){var r=e.a,a=e.b;return n(F,i3,s(jP,r,a,P))}else return P},kP=Ah,qc=function(e){return s(kP,F,P,e)},Lv=Qh,TP=function(e){var r=qc(e),a=n(N,Lv,r);return{lO:wP(r),j2:a}},d$=l(function(e,r){return{aV:r,eR:T,dM:!1,io:n(N,function(a){return p(a,TP(e(a)))},r),b5:0,iC:"",az:0}}),zv=S(function(e,r,a){if(r.$===1)return T;var t=r.a;if(a.$===1)return T;var o=a.a;return D(n(e,t,o))}),CJ=1,PJ=0,LP=function(e){switch(e){case"portrait":return D(0);case"landscape":return D(1);default:return T}},zP=S(function(e,r,a){e:for(;;)if(a.b){var t=a.a,o=a.b;if(r(t))return D(e);var c=e+1,i=r,u=o;e=c,r=i,a=u;continue e}else return T}),b$=zP(0),p$=function(e){return b$(vn(e))},du=l(function(e,r){var a=r;return M(a,{eR:e,az:n(oe,a.az,n(ea,function(t){return n(p$,t,a.aV)},e))})}),MP=function(e){var r=n(Dn,"|",e);if(r.b&&r.b.b){var a=r.a,t=r.b,o=t.a;return s(zv,l(function(c,i){return{cQ:c,dX:i,bm:n(du,D(c),n(d$,function(u){return u.sR},Tv))}}),yP(a),LP(o))}else return T},Mv=yg,Ar=lg,pr=ig,Bt=l(function(e,r){return p(e,r)}),Se=cg,u3=l(function(e,r){if(r.$)return e;var a=r.a;return a}),f3=function(e){return n(u3,P,n(Mv,pr(s(Ha,Bt,n(Ar,0,Se),n(Ar,1,Se))),e))},SJ=ae,m$=Ae,$3=l(function(e,r){var a=r;return s($r,e,0,a)}),h$=l(function(e,r){var a=n(Ke,e,r);return!a.$}),l3=l(function(e,r){var a=r;return n(h$,e,a)}),DP=function(e){return Ve(s(me,l(function(r,a){var t=a.a,o=a.b;return n(l3,r,t)?p(t,o):p(n($3,r,t),n(F,r,o))}),p(m$,P),e).b)},HP=function(e){return{$:0,a:e}},FP=3600,AP=HP(FP),hn=function(e){return s(me,l(function(r,a){var t=r.a,o=r.b;return s($r,t,o,a)}),Ae,e)},xJ=1,jJ=2,wJ=0,BP=function(e){switch(e){case"User":return D(0);case"Author":return D(1);case"Developer":return D(2);default:return T}},Dv=function(e){return{$:4,a:e}},v3=function(e){return{$:3,a:e}},Hv=l(function(e,r){return{$:0,a:e,b:r}}),s3=l(function(e,r){return{$:2,a:e,b:r}}),d3=function(e){return{$:5,a:e}},b3=function(e){return{$:1,a:e}},kJ=ae,lt=l(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){var a=r.a,t=r.b,o=e-1,c=t;e=o,r=c;continue e}else return r}}),IP=S(function(e,r,a){e:for(;;){if(e<=0)return a;if(r.b){var t=r.a,o=r.b,c=e-1,i=o,u=n(F,t,a);e=c,r=i,a=u;continue e}else return a}}),RP=l(function(e,r){return Ve(s(IP,e,r,P))}),p3=S(function(e,r,a){if(r<=0)return P;var t=p(r,a);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,k=o.a,c=o.b,i=c.a;return f([k,i]);case 3:if(t.b.b.b.b){var u=t.b,k=u.a,$=u.b,i=$.a,v=$.b,d=v.a;return f([k,i,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var b=t.b,k=b.a,h=b.b,i=h.a,g=h.b,d=g.a,_=g.b,y=_.a,x=_.b;return e>1e3?n(F,k,n(F,i,n(F,d,n(F,y,n(RP,r-4,x))))):n(F,k,n(F,i,n(F,d,n(F,y,s(p3,e+1,r-4,x)))))}else break r}else{if(t.a===1)break e;break r}else return a;return a}var L=t.b,k=L.a;return f([k])}),vt=l(function(e,r){return s(p3,0,e,r)}),It=function(e){var r=e;return K(Ve(r.o),n(F,r.fP,r.q))},st=l(function(e,r){var a=r,t=It(a),o=n(Qr,xr(t),e),c=n(lt,o,t);if(c.b){var i=c.a,u=c.b;return{q:u,o:Ve(n(vt,o,t)),fP:i}}else return a}),U=q(function(e,r,a,t){return{aT:t,aX:e,D:a,a4:r}}),se=l(function(e,r){if(r.$)return T;var a=r.a;return D(e(a))}),$o=Jh,EP=l(function(e,r){var a=l(function(g,_){var y=g.a,x=g.b;return X(_,y)>-1&&X(_,x)<1});switch(e.$){case 0:var t=e.a;return n(ea,function(g){return n(a,t,g)?D(n(Hv,t,g)):T},$o(r));case 2:var t=e.a;return n(ea,function(g){return n(a,t,g)?D(n(s3,t,g)):T},Ec(r));case 4:switch(r){case"true":return D(Dv(!0));case"false":return D(Dv(!1));default:return T}case 1:return D(b3(r));case 3:var o=n(N,$o,n(Dn,",",r));if(o.b&&!o.a.$&&o.b.b&&!o.b.a.$&&o.b.b.b&&!o.b.b.a.$&&o.b.b.b.b&&!o.b.b.b.a.$&&!o.b.b.b.b.b){var c=o.a.a,i=o.b,u=i.a.a,$=i.b,v=$.a.a,d=$.b,b=d.a.a;return D(v3(C(U,c,u,v,b)))}else return T;default:var h=e.a;return n(se,function(g){return d3(n(st,g,h))},n(b$,vn(r),It(h)))}}),m3=l(function(e,r){var a=hn(e);return n(N,function(t){return M(t,{bc:n(N,function(o){var c=o.a,i=o.b;return p(c,(function(){var u=n(Ke,c,a);if(u.$)return i;var $=u.a;return n(oe,i,n(EP,i,$))})())},t.bc)})},r)}),lo=l(function(e,r){var a=n(Fr,function(c){var i=c.a;return ee(i,e)},r);if(a.b){var t=a.a,o=t.b;return D(o)}else return T}),TJ=ae,VP=S(function(e,r,a){var t=e(r);if(t.$)return a;var o=t.a;return n(F,o,a)}),wr=l(function(e,r){return s(dn,VP(e),P,r)}),h3=l(function(e,r){return e<1?r:s(bn,0,-e,r)}),g3=Gh,OP=l(function(e,r){return n(g3,"Off",r)?e(n(h3,Fa("Off"),r)):T}),UP=function(e){var r=n(Dn,",",e);if(r.b&&r.b.b&&!r.b.b.b){var a=r.a,t=r.b,o=t.a;return s(zv,l(function(c,i){return{pF:c,pH:i}}),$o(a),$o(o))}else return T},_3=l(function(e,r){var a=r,t=n(wr,function(o){var c=o.a,i=o.b;return n(ea,function(u){return n(se,Bt(u),UP(i))},n(OP,a.rZ,c))},e);return M(a,{c_:t})}),qP=l(function(e,r){return M(r,{f:n(_3,e,r.f)})}),LJ=6,zJ=3,MJ=4,y3=function(e){switch(e){case"hudConfigurations":return D(0);case"hudInputs":return D(1);case"hudFpsMeter":return D(2);case"hudProfiler":return D(3);case"hudTape":return D(4);case"hudPalette":return D(5);case"hudCommandPalette":return D(6);case"hudDevice":return D(7);default:return T}},WP=function(e){return{$:1,a:e}},Fv=WP,vo=l(function(e,r){var a=r;switch(e.$){case 0:var t=e.a;return M(a,{aN:n(Wo,t,a.aN)?n(Fr,e$(t),a.aN):n(F,t,a.aN)});case 1:var t=e.a;return M(a,{aN:n(F,t,n(Fr,e$(t),a.aN))});case 2:var t=e.a;return M(a,{aN:n(Fr,e$(t),a.aN)});default:var t=e.a;return M(a,{c_:n(Fr,function(o){var c=o.a;return!ee(c,t)},a.c_)})}}),GP=l(function(e,r){var a=a3(n(wr,y3,n(Dn,",",e)));return M(r,{f:s(me,n(Pe,Fv,vo),r.f,a)})}),C3=0,DJ=ae,Av={J:Ae},HJ=3,FJ=4,AJ=2,BJ=1,IJ=5,RJ=0,P3=function(e){switch(e){case"windows":return 0;case"mac":return 1;case"linux":return 2;case"android":return 3;case"ios":return 4;default:return 5}},NP=l(function(e,r){return{lu:{pR:!1,rr:T},aE:Av,dC:P,fM:0,ch:e,eu:r.eu,ev:r.ev,ew:r.ew,hx:r.hx,mD:!0,eH:r.eH,rt:r.rt,gb:"play",hT:r.hT,nN:Ae,nY:C3,th:m$,kt:P3(r.kt),gs:{l9:0,ma:0,bJ:0,bW:0,u0:0,pz:0},tx:r.tx,tH:r.tH,bT:r.bT,fh:r.fh,iD:r.iD,ea:r.ea,pA:!0,fx:r.fx,pJ:!1}}),S3={aF:0,sR:"iPhone 12 Pro",gE:{rS:844,u5:390}},ZP={cQ:S3,dX:0,bm:n(du,D(S3),n(d$,function(e){return e.sR},Tv))},JP=function(e){return e.iF+(": "+e.eZ)},EJ=ae,VJ=ae,g$={bG:P,bO:P,bp:0,bq:0},YP=g$,KP={kg:0,gB:YP},x3={$:0},XP=x3,Bv=function(e){return{ey:T,rZ:e.rZ,r_:e.r_,c_:P,aN:P}},OJ=ae,UJ=3,qJ=5,WJ=1,GJ=4,NJ=0,ZJ=2,j3=p(0,f([1,2,3,4,5])),Iv=function(e){var r=e.a,a=e.b;return{q:a,o:P,fP:r}},dt=function(e){var r=e;return r.fP},w3=function(e){var r=e,a=r.q;if(a.b){var t=a.a,o=a.b;return{q:o,o:n(F,r.fP,r.o),fP:t}}else return r},k3=function(e){return n(st,0,e)},nr=function(e){return!e.b},QP=function(e){var r=e;return nr(r.q)},T3=l(function(e,r){var a=function(t){e:for(;;){if(ee(dt(t),e))return D(t);if(QP(t))return T;var o=w3(t);t=o;continue e}};return a(k3(r))}),eS=function(e){var r=Iv(j3);return n(oe,r,n(T3,e,r))},rS={p_:C(U,.5833,.0952,.21,1),p5:C(U,.5833,.0952,.21,1),p6:C(U,.5718,.9231,.39,1),qb:C(U,.5667,.0505,.495,1),qc:C(U,.5673,.6341,.59,1),qd:C(U,.4869,.6,.575,1),qe:C(U,.4722,.6,.5,1),qf:C(U,.963,.5294,.575,1),qg:C(U,.0224,1,.665,1),qh:C(U,0,0,1,1),qi:C(U,.1373,1,.575,1),qM:C(U,.4891,.7176,.425,1),rw:C(U,0,0,.96,1),rK:C(U,.4697,1,.33,1),sb:!0,sr:C(U,.7361,.6,.5,1),sR:"Erkal Dark",tK:C(U,.95,1,.5,1),u4:C(U,0,0,.82,1),vl:C(U,.1315,1,.45,1)},aS={p_:C(U,0,0,.96,1),p5:C(U,.5833,.0952,.21,1),p6:C(U,.5673,.8966,.29,1),qb:C(U,.5833,.0476,.42,1),qc:C(U,.5718,.9231,.39,1),qd:C(U,.4891,.7176,.425,1),qe:C(U,.4697,1,.33,1),qf:C(U,.963,.6,.375,1),qg:C(U,.0288,.5909,.44,1),qh:C(U,0,0,.82,1),qi:C(U,.1315,1,.45,1),qM:C(U,.4845,.6825,.315,1),rw:C(U,.5833,.0952,.21,1),rK:C(U,.4551,1,.26,1),sb:!1,sr:C(U,.7167,.7143,.35,1),sR:"Erkal Light",tK:C(U,.95,1,.4,1),u4:C(U,0,0,.96,1),vl:C(U,.131,1,.35,1)},nS={p_:C(U,.6784,.5072,.1195,1),p5:C(U,.6784,.5072,.1195,1),p6:C(U,.6963,.7334,.3908,1),qb:C(U,.6596,.1664,.2542,1),qc:C(U,.6963,.8378,.5419,1),qd:C(U,.4985,.746,.7698,1),qe:C(U,.2473,.9215,.6656,1),qf:C(U,.8231,.9879,.5331,1),qg:C(U,.9805,.9839,.5313,1),qh:C(U,.1717,.0624,.8829,1),qi:C(U,.1378,.9702,.5499,1),qM:C(U,.4985,.432,.6569,1),rw:C(U,.1708,.1275,.8046,1),rK:C(U,.2473,.6142,.5669,1),sb:!0,sr:C(U,.8231,.8982,.4245,1),sR:"Inferno",tK:C(U,.9804,.8923,.417,1),u4:C(U,.1712,.0491,.7129,1),vl:C(U,.1378,.8074,.4652,1)},tS={p_:C(U,.6758,.4926,.1233,1),p5:C(U,.6758,.4926,.1233,1),p6:C(U,.6963,.7334,.3908,1),qb:C(U,.6576,.1668,.257,1),qc:C(U,.6963,.8378,.5419,1),qd:C(U,.4985,.746,.7698,1),qe:C(U,.2989,.7749,.7169,1),qf:C(U,.8231,.9879,.5331,1),qg:C(U,.9805,.9839,.5313,1),qh:C(U,.1241,.0824,.8856,1),qi:C(U,.1226,.912,.646,1),qM:C(U,.4985,.432,.6569,1),rw:C(U,.1238,.1697,.8105,1),rK:C(U,.2989,.48,.6076,1),sb:!0,sr:C(U,.8231,.8982,.4245,1),sR:"Magma",tK:C(U,.9804,.8923,.417,1),u4:C(U,.1239,.0643,.7167,1),vl:C(U,.1227,.6106,.5447,1)},so={aT:1,aX:0,D:0,a4:0},Wc=function(e){return n(Qf,e,"")},oS=function(e){switch(e){case"0":return D(0);case"1":return D(1);case"2":return D(2);case"3":return D(3);case"4":return D(4);case"5":return D(5);case"6":return D(6);case"7":return D(7);case"8":return D(8);case"9":return D(9);case"a":return D(10);case"b":return D(11);case"c":return D(12);case"d":return D(13);case"e":return D(14);case"f":return D(15);default:return T}},L3=Oh,Rv=function(e){return s(me,l(function(r,a){if(a.$===1){var t=a.a;return qe(t)}else{var o=a.a,c=oS(r);if(c.$)return qe("Invalid hex digit: "+Wc(r));var i=c.a;return We(o*16+i)}}),We(0),qc(L3(e)))},Ge=l(function(e,r){return X(e,r)<0?e:r}),cS=S(function(e,r,a){var t=n(Ge,e,n(Ge,r,a)),o=n(Le,e,n(Le,r,a)),c=(o+t)/2,i=o-t;if(i<1e-10)return{aT:1,aX:0,D:c,a4:0};var u=c>.5?i/(2-o-t):i/(o+t),$=(function(){if(o-e<1e-10){var d=X(r,a)<0?6:0;return(r-a)/i+d}else return o-r<1e-10?(a-e)/i+2:(e-r)/i+4})(),v=$/6;return{aT:1,aX:v,D:c,a4:u}}),z3=function(e){var r=n(pn,"#",e)?n(Aa,1,e):e;if(Fa(r)!==6)return qe("Expected 6-character hex string, got: "+e);var a=s(bn,0,2,r),t=s(bn,2,4,r),o=s(bn,4,6,r),c=R(Rv(a),Rv(t),Rv(o));if(!c.a.$&&!c.b.$&&!c.c.$){var i=c.a.a,u=c.b.a,$=c.c.a;return We(s(cS,i/255,u/255,$/255))}else return qe("Invalid hex color: "+e)},m=l(function(e,r){var a=function(o){return n(u3,so,z3(s(bn,o*6,(o+1)*6,r)))},t=a(17);return{p_:t,p5:a(0),p6:a(4),qb:a(8),qc:a(12),qd:a(14),qe:a(10),qf:a(13),qg:a(9),qh:a(15),qi:a(11),qM:a(6),rw:a(16),rK:a(2),sb:t.D<.5,sr:a(5),sR:e,tK:a(1),u4:a(7),vl:a(3)}}),iS={p_:C(U,.6338,.2131,.4193,1),p5:C(U,.6338,.2131,.4193,1),p6:C(U,.6711,.9819,.3556,1),qb:C(U,.6313,.1141,.4988,1),qc:C(U,.6733,.9724,.4995,1),qd:C(U,.5206,.9279,.6164,1),qe:C(U,.408,.9525,.6016,1),qf:C(U,.8129,.6577,.6082,1),qg:C(U,.0348,.7434,.583,1),qh:C(U,.1588,.059,.8705,1),qi:C(U,.1378,.9702,.5499,1),qM:C(U,.5206,.6303,.518,1),rw:C(U,.1581,.1657,.844,1),rK:C(U,.408,.663,.5087,1),sb:!0,sr:C(U,.8129,.4325,.4851,1),sR:"Parula",tK:C(U,.0348,.5435,.4645,1),u4:C(U,.1584,.0494,.7011,1),vl:C(U,.1378,.8074,.4652,1)},uS={p_:C(U,.6497,.2697,.2788,1),p5:C(U,.6497,.2697,.2788,1),p6:C(U,.6963,.7334,.3908,1),qb:C(U,.6441,.1308,.3827,1),qc:C(U,.6963,.8378,.5419,1),qd:C(U,.4985,.746,.7698,1),qe:C(U,.2594,.8806,.6797,1),qf:C(U,.8231,.9879,.5331,1),qg:C(U,.9805,.9839,.5313,1),qh:C(U,.1553,.0578,.8652,1),qi:C(U,.1378,.9702,.5499,1),qM:C(U,.4985,.432,.6569,1),rw:C(U,.1544,.1443,.7845,1),rK:C(U,.2594,.5758,.578,1),sb:!0,sr:C(U,.8231,.8982,.4245,1),sR:"Plasma",tK:C(U,.9804,.8923,.417,1),u4:C(U,.1549,.0495,.696,1),vl:C(U,.1378,.8074,.4652,1)},fS={p_:C(U,.7616,.2492,.257,1),p5:C(U,.7616,.2492,.257,1),p6:C(U,.6711,.9819,.3556,1),qb:C(U,.7582,.1116,.3649,1),qc:C(U,.6733,.9724,.4995,1),qd:C(U,.5003,1,.4968,1),qe:C(U,.367,.9956,.5641,1),qf:C(U,.7883,.876,.5781,1),qg:C(U,.0151,.5947,.5814,1),qh:C(U,.1828,.0453,.8406,1),qi:C(U,.1749,.9924,.6211,1),qM:C(U,.5003,1,.4251,1),rw:C(U,.1818,.1003,.7645,1),rK:C(U,.3705,.8413,.4617,1),sb:!0,sr:C(U,.7886,.6673,.4517,1),sR:"Viridis",tK:C(U,.015,.4413,.4578,1),u4:C(U,.1823,.0425,.6725,1),vl:C(U,.1749,.7036,.5343,1)},M3=f([n(m,"Argonaut","232323ff000f8ce10bffb900008df86d43a600d8ebffffff444444ff2740abe15bffd2420092ff9a5feb67fff0fffffffffaf40e1019"),n(m,"0x96f","262427ff666db3e03affc73900cde8a392e89deaf6fcfcfa545452ff7e83bee55effd05e1bd5ebb0a3ebacedf8fcfcfafcfcfa262427"),n(m,"12-bit Rainbow","000000a0305040d080e090403060b06030900090c0dbded8685656c0606090d050e0d00000b0c080107020b0c0fffffffeffff040404"),n(m,"3024 Day","090300db2d2001a252caba0001a0e4a16a948fbecea5a2a25c5855dbaec33a34324a4543807d7cbcbbbacdab53f7f7f74a4543f7f7f7"),n(m,"3024 Night","090300db2d2001a252fded0201a0e4a16a94b5e4f4a5a2a25c5855e8bbd047413f4a4543807d7cd6d5d4cdab53f7f7f7a5a2a2090300"),n(m,"Aardvark Blue","191919aa342e4b8c0fdbba001370d3c43ac3008eb0bebebe525252f05b5095dc55ffe76360a4ece26be260b6cbf7f7f7dddddd102040"),n(m,"Abernathy","000000cd000000cd00cdcd001093f5cd00cd00cdcdfaebd7404040ff000000ff00ffff0011b5f6ff00ff00ffffffffffeeeeec111416"),n(m,"Adventure","040404d84a335da602eebb6e417ab3e5c499bdcfe5dbded8685656d76b4299b52cffb67097d7efaa7900bdcfe5e4d5c7feffff040404"),n(m,"Adventure Time","050404bd00134ab118e7741e0f4ac666599370a598f8dcc04e7cbffc5f5a9eff6eefc11a1997c69b5953c8faf4f6f5fbf8dcc01f1d45"),n(m,"Adwaita","241f31c01c282ec27ee8b5041e78e49841bb0ab9dcc0bfbc5e5c64ed333b4ad67cd2be3651a1ffc061cb4fd2fdf6f5f4000000ffffff"),n(m,"Adwaita Dark","241f31c01c282ec27ef5c2111e78e49841bb0ab9dcc0bfbc5e5c64ed333b57e389f8e45c51a1ffc061cb4fd2fdf6f5f4ffffff1d1d20"),n(m,"Afterglow","151515ac41427e8e50e5b5676c99bb9f4e857dd6cfd0d0d0505050ac41427e8e50e5b5676c99bb9f4e857dd6cff5f5f5d0d0d0212121"),n(m,"Aizen Dark","1a1a1af08898a4e09cf5dea484b4f8c8a2f490dcd0d0d6f0444444f08898a4e09cf5dea484b4f8c8a2f490dcd0ffffffd0d6f01a1a1a"),n(m,"Aizen Light","f0f2f6d00c363e9e28dd8c1a1c64f28636ec1590964a4d66adb2bcd00c363e9e28dd8c1a1c64f28636ec1590964a4d664a4d66f0f2f6"),n(m,"Alabaster","000000aa3731448c27cb9000325cc07a3e9d0083b2b7b7b7777777f0505060cb00f2af50007acce64ce600aacbf7f7f7000000f7f7f7"),n(m,"Alien Blood","1126167f2b272f7e25717f242f6a7f47587f327f77647d753c4812e0800918e000bde00000aae00058e000e0c473fa91637d750f1610"),n(m,"Andromeda","000000cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5666666cd313105bc79e5e5122472c8bc3fbc0fa8cde5e5e5e5e5e5262a33"),n(m,"Apple Classic","000000c91b0000c200c7c4001c3fe1ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffd5a2002c2b2b"),n(m,"Apple System Colors","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74bffd60a0a84ffbf5af276d6ffffffffffffff1e1e1e"),n(m,"Apple System Colors Light","1a1a1acc372e26a439cdac080869cb9647bf479ec298989d464646ff453a32d74be5bc000a84ffbf5af269c9f2ffffff000000feffff"),n(m,"Arcoiris","333333da270012c258ffc656518bfce37bd963fad5bab2b2777777ffb9b9e3f6aaffddaab3e8f3cbbaf9bcffc7efefefeee4d9201f1e"),n(m,"Ardoise","2c2c2cd3322d588b35fca93a2465c27332b464e1b8f7f7f7535353fa58528dc252ffea516ab5f8be68ca89ffdbfefefeeaeaea1e1e1e"),n(m,"Arthur","3d352acd5c5c86af80e8ae5b6495eddeb887b0c4debbaa99554444cc553388aa22ffa75d87ceeb996600b0c4deddccbbddeedd1c1c1c"),n(m,"Atelier Sulphurpool","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b294f587c5e6687898ea4dfe2f19c637af5f7ff979db4202746"),n(m,"Atom","000000fd5ff187c38affd7b185befdb9b6fc85befde0e0e04c4c4cfd5ff194fa36f5ffa896cbfeb9b6fc85befde0e0e0c5c8c6161719"),n(m,"Atom One Dark","21252be06c7598c379e5c07b61afefc678dd56b6c2abb2bf767676e06c7598c379e5c07b61afefc678dd56b6c2abb2bfabb2bf21252b"),n(m,"Atom One Light","000000de3e353f953ad2b67c2f5af39500953f953abbbbbb000000de3e353f953ad2b67c2f5af3a000953f953affffff2a2c33f9f9f9"),n(m,"Aura","110f18ff676761ffcaffca85a277ffa277ff61ffcaedecee4d4d4dffca85a277ffffca85a277ffa277ff61ffcaedeceeedecee15141b"),n(m,"Aurora","23262ef0266f8fd46dffe66d102ee4ee5d4303d6b8c74ded4f545ef926728fd46dffe66d03d6b8ee5d4303d6b8c74dedffca2823262e"),n(m,"Ayu","11151cea6c737fd962f9af4f53bdfacda1fa90e1c6c7c7c7686868f07178aad94cffb45459c2ffd2a6ff95e6cbffffffbfbdb60b0e14"),n(m,"Ayu Light","000000ea6c6d6cbf43eca9443199e19e75c746ba94bababa686868f0717186b300f2ae49399ee6a37acc4cbf99d1d1d15c6166f8f9fa"),n(m,"Ayu Mirage","171b24ed827487d96cfacc6e6dcbfadabafa90e1c6c7c7c7686868f28779d5ff80ffd17373d0ffdfbfff95e6cbffffffcccac21f2430"),n(m,"Banana Blueberry","17141fff6b7f00bd9ce6c62f22e8dfdc396a56b6c2f1f1f1495162fe9ea198c379f9e46b91fff4da70d6bcf3ffffffffcccccc191323"),n(m,"Batman","1b1d1ee6dc44c8be46f4fd2273717474727162605fc6c5bf505354fff78efff27dfeed6c9194959a9a9da3a3a6dadbd66f6f6f1b1d1e"),n(m,"Belafonte Day","20111bbe100e858162d08b30426a7997522c989a9c968c835e5252be100e858162d08b30426a7997522c989a9cd5ccba45373cd5ccba"),n(m,"Belafonte Night","20111bbe100e858162eaa549426a7997522c989a9c968c835e5252be100e858162eaa549426a7997522c989a9cd5ccba968c8320111b"),n(m,"Birds Of Paradise","573d26be2d266ba18ae99d2a5a86adac80a674a6ade0dbb79b6c4ae8462795d8bad0d150b8d3edd19ecb93cfd7fff9d5e0dbb72a1f1d"),n(m,"Black Metal","000000486e6fdd9999a06666888888999999aaaaaac1c1c1404040486e6fdd9999a06666888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Bathory)","0000005f8787fbcb97e78a53888888999999aaaaaac1c1c14040405f8787fbcb97e78a53888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Burzum)","0000005f8787ddeecc99bbaa888888999999aaaaaac1c1c14040405f8787ddeecc99bbaa888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Dark Funeral)","0000005f8787d0dfee5f81a5888888999999aaaaaac1c1c14040405f8787d0dfee5f81a5888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Gorgoroth)","0000005f87879b8d7f8c7f70888888999999aaaaaac1c1c14040405f87879b8d7f8c7f70888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Immortal)","0000005f87877799bb556677888888999999aaaaaac1c1c14040405f87877799bb556677888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Khold)","0000005f8787eceee3974b46888888999999aaaaaac1c1c14040405f8787eceee3974b46888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Marduk)","0000005f8787a5aaa7626b67888888999999aaaaaac1c1c14040405f8787a5aaa7626b67888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Mayhem)","0000005f8787f3ecd4eecc6c888888999999aaaaaac1c1c14040405f8787f3ecd4eecc6c888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Nile)","0000005f8787aa9988777755888888999999aaaaaac1c1c14040405f8787aa9988777755888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Black Metal (Venom)","0000005f8787f8f7f279241f888888999999aaaaaac1c1c14040405f8787f8f7f279241f888888999999aaaaaac1c1c1c1c1c1000000"),n(m,"Blazer","000000b87a7a7ab87ab8b87a7a7ab8b87ab87ab8b8d9d9d94c4c4cdbbdbdbddbbddbdbbdbdbddbdbbddbbddbdbffffffd9e6f20d1926"),n(m,"Blue Berry Pie","0a4c6299246e5cb1b3eab9a890a5bd9d54a77e83ccf0e8d6463c5dc872720a6c7e7a31885f3d63bc94b75e60710a6c7ebabab91c0c28"),n(m,"Blue Dolphin","292d3eff8288b4e88df4d69f82aaffe9c1ff89ebffd0d0d09094a4ff8b92ddffa7ffe5859cc4ffddb0f6a3f7ffffffffc5f2ff006984"),n(m,"Blue Matrix","101116ff568000ff9cfffc5800b0ffd57bff76c1ffc7c7c7686868ff6e675ffa68fffc676871ffd682ec60fdffffffff00a2ff101116"),n(m,"Bluloco Dark","41444dfc2f5225a45cff936a3476ff7a82da4483aacdd4e08f9aaeff64803fc56bf9c85910b1feff78f85fb9bcffffffb9c0cb282c34"),n(m,"Bluloco Light","373a41d5275323974adf631c275fe4823ff127618dbabbc2676a77ff64803cbc66c5a3320099e1ce33c06d93bbd3d3d3373a41f9f9f9"),n(m,"Borland","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffffff4e0000a4"),n(m,"Box","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffff9fef00141d2b"),n(m,"Breadog","362c24b10b000072328b4c00005cb49b0097006a78baa99d514337de1100008f40ae60000074e1c300bd008697eae1da362c24f1ebe6"),n(m,"Breeze","31363bed151511d116f674001d99f39b59b61abc9ceff0f17f8c8dc0392b1cdc9afdbc4b3daee98e44ad16a085fcfcfceff0f131363b"),n(m,"Bright Lights","191919ff355bb7e876ffc25176d4ffba76e76cbfb5c2c8d74c4c4cff355bb7e876ffc25176d5ffba76e76cbfb5c2c8d7b3c9d7191919"),n(m,"Broadcast","000000da4939519f50ffd24a6d9cbed0d0ff6e9cbeffffff585858ff7b6b83d182ffff7c9fcef0ffffffa0cef0ffffffe6e1dc2b2b2b"),n(m,"Brogrammer","1f1f1ff811182dc55eecba0f2a84d24e5ab71081d6d6dbe5d6dbe5de352e1dd361f3bd091081d65350b90f7ddbffffffd6dbe5131313"),n(m,"Builtin Dark","000000bb000000bb00bbbb000d0dc8bb00bb00bbbbbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),n(m,"Builtin Light","000000bb000000bb00bbbb000000bbbb00bb00bbbbbbbbbb555555ff55552fd92fbfbf155555ffff55ff22ccccffffff000000ffffff"),n(m,"Builtin Pastel Dark","4f4f4fff6c60a8ff60ffffb696cbfeff73fdc6c5feeeeeee7c7c7cffb6b0ceffacffffccb5dcffff9cfedfdffeffffffbbbbbb000000"),n(m,"Builtin Tango Dark","000000cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeecffffff000000"),n(m,"Builtin Tango Light","000000cc00004e9a06c4a0003465a475507b06989ab9bdb5555753ef29297dd527d6c329729fcfad7fa827d5d5eeeeec000000ffffff"),n(m,"C64","090300a2524c55a049bfce726657b3984ca367b6bdffffff000000a2524c55a049bfce726657b3984ca367b6bdf7f7f77869c440318d"),n(m,"CGA","000000aa000000aa00aa55000d0db7aa00aa00aaaaaaaaaa555555ff555555ff55ffff555555ffff55ff55ffffffffffaaaaaa000000"),n(m,"CLRS","000000f8282a328a5dfa701d135cd09f00bd33c3c1b3b3b3555753fb04162cc631e3bd0e1670ffe900b03ad5ceeeeeec262626ffffff"),n(m,"Calamity","2f2833fc644da5f69ce9d7a53b79c7f9267274d3ded5ced97e6c88fc644da5f69ce9d7a53b79c7f9267274d3deffffffd5ced92f2833"),n(m,"Carbonfox","282828ee539625be6a08bdba78a9ffbe95ff33b1ffdfdfe0484848f16da646c8802dc7c48cb6ffc8a5ff52bdffe4e4e5f2f4f8161616"),n(m,"Catppuccin Frappe","51576de78284a6d189e5c8908caaeef4b8e481c8bea5adce626880e671728ec772d9ba737b9ef0f2a4db5abfb5b5bfe2c6d0f5303446"),n(m,"Catppuccin Latte","5c5f77d20f3940a02bdf8e1d1e66f5ea76cb179299acb0be6c6f85de293e49af3deea02d456efffe85d82d9fa8bcc0cc4c4f69eff1f5"),n(m,"Catppuccin Macchiato","494d64ed8796a6da95eed49f8aadf4f5bde68bd5caa5adcb5b6078ec74868ccf7fe1c68278a1f6f2a9dd63cbc0b8c0e0cad3f524273a"),n(m,"Catppuccin Mocha","45475af38ba8a6e3a1f9e2af89b4faf5c2e794e2d5a6adc8585b70f3779989d88bebd39174a8fcf2aede6bd7cabac2decdd6f41e1e2e"),n(m,"Chalk","7d8b8fb23a52789b6ab9ac4a2a7facbd4f5a44a799d2d8d9888888f2484080c470ffeb624196fffc527553cdbdd2d8d9d2d8d92b2d2e"),n(m,"Chalkboard","000000c3737272c373c2c3727372c3c372c272c2c3d9d9d9585858dbaaaaaadbaadadbaaaaaadbdbaadaaadadbffffffd9e6f229262f"),n(m,"Challenger Deep","141228ff545862d196ffb37865b2ff906cff63f2f1a6b3cc565575ff808095ffa4ffe9aa91ddffc991e1aaffe4cbe3e7cbe1e71e1c31"),n(m,"Chester","080200fa5e5b16c98dffc83f288ad6d3459028dddee7e7e76f6b68fa5e5b16c98dfeef6d278ad6d3459027dedeffffffffffff2c3643"),n(m,"Ciapre","1818188e0d1648513bcc8b3f576d8c724d7c5c4f4baea47f555555ac3835a6a75ddcdf7c3097c6d33061f3dbb2f4f4f4aea47a191c27"),n(m,"Citruszest","404040ff545400cc7affd40000bfffff90fe48d1ccbfbfbf808080ff1a751affa3ffff0033cfffffb2fe00fff2f9f9f9bfbfbf121212"),n(m,"Cobalt Neon","142631ff23203ba5ffe9e75c8ff586781aa08ff586ba46b2fff688d4312e8ff586e9f06d3c7dd28230a76cbc678ff5868ff586142838"),n(m,"Cobalt Next","000000ff527b8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea162c35"),n(m,"Cobalt Next Dark","262f37f949678cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),n(m,"Cobalt Next Minimal","323d47ff657a8cc98fffc64c409dd4cba3c737b5b4d7deea62747fe47e8bbaddbbffdc917ac0ebf3ccef84e4e3ffffffd7deea0b1c24"),n(m,"Cobalt2","000000ff000038de21ffe50a1460d2ff005d00bbbbbbbbbb555555f40e173bd01dedc8095555ffff55ff6ae3faffffffffffff132738"),n(m,"Coffee Theme","000000c91b0000c200adaa000225c7ca30c700b8baa1a1a1686868ff6e671fba28b2af1b6871fff26af220bdbfffffff000000f5deb3"),n(m,"Crayon Pony Fish","2b1b1d91002b579524ab311b8c87b0692f50e8a86668525a4a383bc5255d8dff57c8381dcfc9fffc6cbaffceafb0949d68525a150707"),n(m,"Cursor Dark","2a2a2abf616aa3be8cebcb8b81a1c1b48ead88c0d0d8dee9505050bf616aa3be8cebcb8b81a1c1b48ead88c0d0ffffffffffff141414"),n(m,"Cutie Pro","000000f56e7fbec975f5866942d9c5d286b737cb8ad5c3c388847fe5a1a3e8d6a7f1bb7980c5deb294bb9dccbbffffffd5d0c9181818"),n(m,"Cyberdyne","080808ff837300c172d2a7000071cfff90fe6bffddf1f1f1484848ffc4bed6fcbafffed5c2e3ffffb2fee6e7feffffff00ff92151144"),n(m,"Cyberpunk","000000ff709200fbacfffa6a00bfffdf95ff86cbfeffffff595959ff8aa421f6bcfff7871bccfde6aefe99d6fcffffffe5e5e5332a57"),n(m,"Cyberpunk Scarlet Protocol","101116ff005101dc84faf9450271b6c930c700c5c7c7c7c7686868ff6e6760fa68fffc676871ffbd35ec60fdffffffffe41951101116"),n(m,"Dark Modern","272727f749492ea0439e6a030078d4d012731db4d6cccccc5d5d5ddc545223d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1f1f1f"),n(m,"Dark Pastel","000000ff555555ff55ffff555555ffff55ff55ffffbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffffffff000000"),n(m,"Dark+","000000cd31310dbc79e5e5102472c8bc3fbc11a8cde5e5e5666666f14c4c23d18bf5f5433b8eead670d629b8dbe5e5e5cccccc1e1e1e"),n(m,"Darkermatrix","0910131a48316fa64c59590000cb6b4e375a1254591a48334040400d452a90d762e2e50000ff874e375a176c7300381e35451a070c0e"),n(m,"Darkmatrix","0910130065366fa64c7e80002c9a84523a60114d5300653640404000733d90d762e2e50046d8b8573d6612545a0065363e5715070c0e"),n(m,"Darkside","000000e8341c68c256f2d42c1c98e88e69c91c98e8bababa4c4c4ce05a4f77b869efd64b387cd3957bbe3d97e2babababababa222324"),n(m,"Dawnfox","575279b4637a618774ea9d34286983907aa956949fb2b6bd5f5695c26d85629f81eea8462d81a39a80b95ca7b4e6ebf3575279faf4ed"),n(m,"Dayfox","352c24a5222f396847ac54022848a96e33ce287980bfb6ae534c45b3434e577f63b86e284863b68452d5488d93f4ece63d2b5af6f2ee"),n(m,"Deep","000000d700051cd915d9bd265665ffb052da50d2dae0e0e0535353fb000722ff18fedc2b9fa9ffe09aff8df9ffffffffcdcdcd090909"),n(m,"Desert","4d4d4dff2b2b98fb98f0e68ccd853fffdeadffa0a0f5deb3626262ff555555ff55ffff5587ceffff55ffffd700ffffffffffff333333"),n(m,"Detuned","171717fe4386a6e32de6da730094d99b37ff50b7d9c7c7c7686868fa80acbde371fff27f00beffbe9eff5ed7ffffffffc7c7c7000000"),n(m,"Dimidium","000000cf494c60b442db9c110575d8af5ed21db6bbbab7b6817e7eff643b37e57bfccd1a688dfded6fe932e0fbdee3e4bab7b6141414"),n(m,"Dimmed Monokai","3a3d43be3f48879a3bc5a6354f76a1855c8d578fa4b9bcba888987fb001f0f722fc47033186de3fb00672e706dfdffb9b9bcba1f1f1f"),n(m,"Django","000000fd620941a83effe862315d3ff8f8f89df39fffffff585858ff943b73da70ffff94568264ffffffcfffd1fffffff8f8f80b2f20"),n(m,"Django Reborn Again","000000fd620941a83effe862245032f8f8f89df39fffffff4c4c4cff943b73da70ffff94568264ffffffcfffd1ffffffdadedc051f14"),n(m,"Django Smooth","000000fd620941a83effe862989898f8f8f89df39fe8e8e7727272ff943b73da70ffff94cacacaffffffcfffd1fffffff8f8f8245032"),n(m,"Doom One","000000ff6c6b98be65ecbe7ba9a1e1c678dd51afefbbc2cf595959ff665599bb66ecbe7ba9a1e1c678dd51afefbfbfbfbbc2cf282c34"),n(m,"Doom Peacock","1c1f24cb4b1626a6a6bcd42a2a6cc6a9a1e15699afede0ce51504dff5d3898be65e6f97251afefc678dd46d9ffdfdfdfede0ce2b2a27"),n(m,"Dot Gov","191919bf091d3d9751f6bb3417b2e07830b08bd2edffffff595959bf091d3d9751f6bb3417b2e07830b08bd2edffffffebebeb262c35"),n(m,"Dracula","21222cff555550fa7bf1fa8cbd93f9ff79c68be9fdf8f8f26272a4ff6e6e69ff94ffffa5d6acffff92dfa4fffffffffff8f8f2282a36"),n(m,"Dracula+","21222cff555550fa7bffcb6b82aaffc792ea8be9fdf8f8f2545454ff6e6e69ff94ffcb6bd6acffff92dfa4fffff8f8f2f8f8f2212121"),n(m,"Duckbones","0e101ae036005dcd97e3950000a3cb795ccc00a3cbebefc0444860ff482158db9ef6a10000b4e0b3a1e600b4e0b3b692ebefc00e101a"),n(m,"Duotone Dark","1f1d27d9393e2dcd73d9b76effc284de8d402488ffb7a1ff4e4a60d9393e2dcd73d9b76effc284de8d402488ffeae5ffb7a1ff1f1d27"),n(m,"Duskfox","393552eb6f92a3be8cf6c177569fbac4a7e79ccfd8e0def4544d8af083a2b1d196f9cb8c65b1cdccb1eda6dae3e2e0f7e0def4232136"),n(m,"ENCOM","0000009f0000008b00ffd0000081ffbc00ca008b8bbbbbbb555555ff000000ee00ffff000000ffff00ff00cdcdffffff00a595000000"),n(m,"Earthsong","121418c9423485c54cf5ae2e1398b9d0633d509552e5c6aa675f54ff645a98e036e0d5615fdaffff926984f088f6f7ece5c7a9292520"),n(m,"Electron Highlighter","15161fff6c8d00ffc3ffd7a977abffdaa4f400fdff778faf4a6789ff6c8d00ffc3ffd7a977abffdaa4f400fdffc3cee2a5b6d423283d"),n(m,"Elegant","0a1222ff025785cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ff005785cc95ffcb8b8dabe1c792eb3facefffffffced2d6292b31"),n(m,"Elemental","3c3c3098290f479a437f7111497f7d7f4e2f387f58807974555445e0502a61e070d6992779d9d9cd7c5459d599fff1e9807a7422211d"),n(m,"Elementary","242424d71c155aa513fdb40c134899e400382595e1efefef4b4b4bfc1c186bc219fec80e0955fffb00503ea8fc8c00ecefefef181818"),n(m,"Embark","1e1c31f0719ba1efd3ffe9aa57c7ffc792ea87dfebf8f8f2585273f02e6e2ce592ffb3781da0e2a742ea63f2f1a6b3cceeffff1e1c31"),n(m,"Embers Dark","16130f826d5757826d6d82576d578282576d576d82a39a905a504782825746403950483f8a8075beb6ae825757dbd6d1a39a9016130f"),n(m,"Espresso","353535d25252a5c261ffc66d6c99bbd197d9bed6ffeeeeec606060f00c0cc2e075e1e48b8ab7d9efb5f7dcf4ffffffffffffff323232"),n(m,"Espresso Libre","000000cc00001a921cf0e53a0066ffc5656b06989ad3d7cf555753ef29299aff87fffb5c43a8edff818a34e2e2eeeeecb8a8982a211c"),n(m,"Everblush","232a2de574748ccf7ee5c76b67b0e8c47fd56cbfbfb3b9b8464e50ef7e7e96d988f4d67a71baf2ce89df67cbe7bdc3c2dadada141b1e"),n(m,"Everforest Dark Hard","7a8478e67e80a7c080dbbc7f7fbbb3d699b683c092f2efdfa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbefd3c6aa1e2326"),n(m,"Everforest Light Med","7a8478e67e809ab373c1a2667fbbb3d699b683c092b2af9fa6b0a0f855528da101dfa0003a94c5df69ba35a77cfffbef5c6a72efebd4"),n(m,"Fahrenheit","1d1d1dcda0749e744dfecf757f0e0f734c4d979797ffffce404040fecea0cc734dfd9f4dcb4a054e739ffed04dffffffffffce000000"),n(m,"Fairyfloss","040303f92672c2ffdfe6c000c2ffdfffb8d1c5a3fff8f8f06090cbff857fc2ffdfffea00c2ffdfffb8d1c5a3fff8f8f0f8f8f25a5475"),n(m,"Farmhouse Dark","1d2027ba0004549d00c873000049e69f1b611fb65ce8e4e1464d54eb00097ac100ea9a00006efebf3b7f19e062f4eef0e8e4e11d2027"),n(m,"Farmhouse Light","1d20278d00033a7d00a95600092ccd820046229256a8a4a1394047eb00097ac100ea9a00006efebf3b7f00c649f4eef01d2027e8e4e1"),n(m,"Fideloper","292f33cb1e2dedb8acb7ab9b2e78c2c0236f309186eae3ce496068d4605ad4605aa866717c85c45c5db2819090fcf4dfdbdae0292f33"),n(m,"Firefly Traditional","000000c2372033bc26afad245a63ffd53ad233bbc7cccccc828282ff3b1e2ee720ecec16838dffff5cfe29f0f0ebebebf5f5f5000000"),n(m,"Firefox Dev","002831e638535eb83ca57706359ddfd75cff4b73a2dcdcdc26444de1003f1d9000cd9409006fc0a200da005794e2e2e27c8fa40e1011"),n(m,"Firewatch","585f6dd953605ab977dfb5634d89c4d5511944a8b6e6e5ff585f6dd953605ab977dfb5634c89c5d5511944a8b6e6e5ff9ba2b21e2027"),n(m,"Fish Tank","03073cc6004aacf157fecd5e525fb8986f82968763ecf0fc6c5b30da4b8adbffa9fee6a9b2befafda5cda5bd86f6ffececf0fe232537"),n(m,"Flat","222d3fa8232032a548e58d113167ac781aa02c9370b0b6ba475262d4312e2d9440e5be0c3c7dd28230a735b387e7eced2cc55d002240"),n(m,"Flatland","1d1d19f183399fd364f4ef6d5096be695abcd63865ffffff50504cd22a24a7d42cff894961b9d0695abcd63865ffffffb8dbef1d1f21"),n(m,"Flexoki Dark","100f0fd14d41879a39d0a2154385bece5d973aa99f878580575653af302966800bad8301205ea6a02f6f24837bcecdc3cecdc3100f0f"),n(m,"Flexoki Light","100f0faf302966800bad8301205ea6a02f6f24837b6f6e69b7b5acd14d41879a39d0a2154385bece5d973aa99fcecdc3100f0ffffcf0"),n(m,"Floraverse","08002e7e1a465d731acd751c1d6da1b7077e42a38cf3e0b84c3866d02063b4ce59fac35740a4cff12aae62caa8fff5dbdbd1b90e0d15"),n(m,"Forest Blue","333333f8818e92d3a21a8e638ed0ce5e468c31658ce2d8cd4a4a4afb3d666bb48d30c85a39a7a27e62b36096bfe2d8cde2d8cd051519"),n(m,"Framer","141414ff555598ec65ffcc3300aaffaa88ff88ddffcccccc414141ff8888b6f292ffd96633bbffcebbffbbecffffffff777777111111"),n(m,"Front End Delight","242526f8511b565747fa771d2c70b7f02e4f3ca1a6adadad5fac6df7431974ec4cfdc3253393cae75e4f4fbce68c735badadad1b1c1d"),n(m,"Fun Forrest","000000d6262b919c00be8a134699a38d4331da8213ddc2657f6a55e55a1cbfc65affcb1b7cc9cfd26349e6a96bffeaa3dec165251200"),n(m,"Galaxy","000000f9555f21b089fef02a589df6944d951f9ee7bbbbbb555555fa8c8f35bb9affff55589df6e756993979bcffffffffffff1d2837"),n(m,"Galizur","223344aa112233aa11ccaa222255cc7755aa22bbdd8899aa556677ff113333ff11ffdd333377ffaa77ff33ddffbbccddddeeff071317"),n(m,"Ghostty Default Style Dark","1d1f21cc6566b6bd68f0c67482a2beb294bb8abeb7c4c8c6666666d54e53b9ca4be7c5477aa6dac397d870c0b1eaeaeaffffff282c34"),n(m,"GitHub","3e3e3e970b1607962ac5bb94003e8ae946917cc4dfb2b2b2666666de00007ac895d7b6002e6cbaf2959200c7cbffffff3e3e3ef4f4f4"),n(m,"GitHub Dark","000000f7816656d364e3b3416ca4f8db61a22b7489ffffff4d4d4df7816656d364e3b3416ca4f8db61a22b7489ffffff8b949e101216"),n(m,"GitHub Dark Colorblind","484f58ec8e2c58a6ffd2992258a6ffbc8cff39c5cfb1bac46e7681fdac5479c0ffe3b34179c0ffd2a8ff56d4ddffffffc9d1d90d1117"),n(m,"GitHub Dark Default","484f58ff7b723fb950d2992258a6ffbc8cff39c5cfb1bac46e7681ffa19856d364e3b34179c0ffd2a8ff56d4ddffffffe6edf30d1117"),n(m,"GitHub Dark Dimmed","545d68f4706757ab5ac69026539bf5b083f039c5cf909dab636e7bff938a6bc46ddaaa3f6cb6ffdcbdfb56d4ddcdd9e5adbac722272e"),n(m,"GitHub Dark High Contrast","7a828eff949226cd4df0b72f71b7ffcb9eff39c5cfd9dee39ea7b3ffb1af4ae168f7c84391cbffdbb7ff56d4ddfffffff0f3f60a0c10"),n(m,"GitHub Light Colorblind","24292fb359000550ae4d2d000969da8250df1b7c836e778157606a8a46000969da633c01218bffa475f93192aa8c959f24292fffffff"),n(m,"GitHub Light Default","24292fcf222e1163294d2d000969da8250df1b7c836e778157606aa40e261a7f37633c01218bffa475f93192aa8c959f1f2328ffffff"),n(m,"GitHub Light High Contrast","0e1116a0111f024c1a3f22000349b4622cbc1b7c8366707b4b535d86061d055d204e2c001168e3844ae73192aa88929d0e1116ffffff"),n(m,"GitLab Dark","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff28262b"),n(m,"GitLab Dark Grey","000000f57f6c52b87ad995307fb6edf88aaf32c5d2ffffff666666fcb5aa91d4a8e9be74498dd1fcacc55edee3ffffffffffff222222"),n(m,"GitLab Light","303030a317000a7f3daf551d006cd8583cac00798a303030303030a317000a7f3daf551d006cd8583cac00798a303030303030fafaff"),n(m,"Glacier","2e343cbd0f2f35a770fb94351f5872bd2523778397ffffff404a55bd0f2f49e998fddf6e2a8bc1ea4727a0b6d3ffffffffffff0c1115"),n(m,"Grape","2d283fed22611fa91b8ddc20487df48d35c93bdeed9e9ea059516af0729a53aa5eb2dc87a9bcecad81c29de3eba288f79f9fa1171423"),n(m,"Grass","000000ff595900bb00e7b0000000a3ee59bb00bbbbbbbbbb959595ff595900bb00e7b0000000bbff55ff55fffffffffffff0a513773d"),n(m,"Grey Green","000000fe141474ff00f1ff0100deffff00f000ffbcffffff666666ff393900ff44ffd10000afffff008a00ffd3f5ececffffff002a1a"),n(m,"Gruber Darker","181818ff0a3642dc00ffdb0092a7cba095cb90aa9ee4e4e454494eff385142dc00ffdb0092a7cbafafda90aa9ef5f5f5e4e4e4181818"),n(m,"Gruvbox Dark","282828cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb2282828"),n(m,"Gruvbox Dark Hard","1d2021cc241d98971ad79921458588b16286689d6aa89984928374fb4934b8bb26fabd2f83a598d3869b8ec07cebdbb2ebdbb21d2021"),n(m,"Gruvbox Light","fbf1c7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836fbf1c7"),n(m,"Gruvbox Light Hard","f9f5d7cc241d98971ad79921458588b16286689d6a7c6f649283749d000679740eb576140766788f3f71427b583c38363c3836f9f5d7"),n(m,"Gruvbox Material","141617ea6926c1d041eecf756da3ecfd9bc1fe9d6effffff4c4c4cd3573bc1d041eecf752c86fffd9bc192a5dfffffffd4be981d2021"),n(m,"Gruvbox Material Dark","282828ea6962a9b665d8a6577daea3d3869b89b482d4be987c6f64ea6962a9b665d8a6577daea3d3869b89b482ddc7a1d4be98282828"),n(m,"Gruvbox Material Light","fbf1c7c14a4a6c782eb4710945707a945e804c7a5d654735a89984c14a4a6c782eb4710945707a945e804c7a5d4f3829654735fbf1c7"),n(m,"Guezwhoz","333333e851817ad694b7d0745aa0d69a90e058d6ced9d9d9808080e85181afd7afd1ed8564b2eda398ed61ede4edededd9d9d91d1d1d"),n(m,"HaX0R Blue","01092110b6ff10b6ff10b6ff10b6ff10b6ff10b6fffafafa48415700b3f700b3f700b3f700b3f700b3f700b3f7fefefe11b7ff010515"),n(m,"HaX0R Gr33N","001f0b15d00d15d00d15d00d15d00d15d00d15d00dfafafa33484319e20e19e20e19e20e19e20e19e20e19e20efefefe16b10e020f01"),n(m,"HaX0R R3D","1f0000b00d0db00d0db00d0db00d0db00d0db00d0dfafafa554040ff1111ff1010ff1010ff1010ff1010ff1010fefefeb10e0e200101"),n(m,"Hacktober","191918b34538587744d08949206ec5864651ac9166f1eee7464444b3332342824ac75a225389c5e795a5ebc587ffffffc9c9c9141414"),n(m,"Hardcore","1b1d1ef92672a6e22efd971f66d9ef9e6ffe5e7175ccccc6505354ff669dbeed5fe6db7466d9ef9e6ffea3babff8f8f2a0a0a0121212"),n(m,"Harper","010101f8b63f7fb5e1d6da25489e48b296c6f5bfd7a8a49d726e6af8b63f7fb5e1d6da25489e48b296c6f5bfd7fefbeaa8a49d010101"),n(m,"Havn Daggry","1f2842985248577159be6b003a577d7c5c97925780b0b5c51f2842cc4a35719679f1a5276089c07d7396aa869dd6dbeb3b4a7af8f9fb"),n(m,"Havn Skumring","252c47ea563e6ead7bf8b330596cf77c719ed588c1dce0ee38425cd172648c9e8feac58c5186cb9b7ceed17ab6fff6e1d6dbeb111522"),n(m,"Heeler","000000e44c2ebdd100f4ce655ba5f2ff95c2ff9763ffffff4c4c4ce44c2ebdd100f4ce650088ffff95c28da6e4fffffffdfdfd211f46"),n(m,"Highway","000000d00e18138034ffcb3e006bb3783482455271ededed5d504af07e18b1d130fff1204fc2fdde00715d504affffffededed222225"),n(m,"Hipster Green","000000b6214a00a600bfbf00246eb2b200b200a6b2bfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e584c138100b05"),n(m,"Hivacruz","202746c94922ac9739c08b303d8fd16679cc22a2c9979db46b7394c76b2973ad435e6687898ea4dfe2f19c637af5f7ffede4e4132638"),n(m,"Homebrew","00000099000000a6009999000d0dbfb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e500ff00000000"),n(m,"Hopscotch","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379fd8b195c545c5c545b989498d5d3d5b33508ffffffb9b5b8322931"),n(m,"Hopscotch.256","322931dd464c8fc13efdcc591290bfc85e7c149b93b9b5b8797379dd464c8fc13efdcc591290bfc85e7c149b93ffffffb9b5b8322931"),n(m,"Horizon","000000e9567829d398fab79526bbd9ee64ac59e1e3e5e5e5666666ec6a883fdaa4fbc3a73fc4def075b56be4e6e5e5e5d5d8da1c1e26"),n(m,"Horizon Bright","16161dfc477700ca86f2a68200beddff58b100cdcbbfafac1a1c24fe5f8700d193e5a68800c9e2ff6cba00c3c2fff2ef16161dfdf0ed"),n(m,"Hot Dog Stand","000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6000000ffff54ffff54ffff54000000ffff54ffffffc6c6c6ffffffea3323"),n(m,"Hot Dog Stand (Mustard)","000000ea3323ea3323ea3323000000ea3323000000b9b9b9000000ea3323ea3323ea3323000000ea3323000000c6c6c6000000ffff54"),n(m,"Hurtado","575757ff1b00a5e055fbe74a496487fd5ff186e9fecbcccb404040d51d00a5df55fbe84a89beffc001c186eafedbdbdbdbdbdb000000"),n(m,"Hybrid","2a2e33b84d51b3bf5ae4b55e6e90b0a17eac7fbfb4b5b9b64345488d2e32798431e58a504b6b886e50794d7b745a626ab7bcba161719"),n(m,"IBM 5153 CGA","141414d033331bd01bd08c1b1b1bd0d01bd01bd0d0cecece4e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffcecece141414"),n(m,"IBM 5153 CGA (Black)","000000c4000000c400c47e000000c4c400c400c4c4c4c4c44e4e4edc4e4e4edc4ef3f34e4e4edcf34ef34ef3f3ffffffc4c4c4000000"),n(m,"IC Green PPL","014401ff273641a63876a8312ec3b950a0963ca078e6fef2106910b4fa5caefb86dafa872efaeb50fafa3cfac8e0f1dce0f1dc2c2c2c"),n(m,"IC Orange PPL","000000c13900a4a900caaf00bd6d00fc5e00f79500ffc88a6a4f2aff8c68f6ff40ffe36effbe55fc874fc69752fafaffffcb83262626"),n(m,"IR Black","4f4f4ffa6c60a8ff60fffeb796cafefa73fdc6c5feefedef7b7b7bfcb6b0cfffabffffccb5dcfffb9cfee0e0fefffffff1f1f1000000"),n(m,"IRIX Console","1a1919d4242637a327c29d280739e2911f9c4497dfcccccc767676f34f5945c731f9f2a74079ffc31ba26ed7d7f2f2f2f2f2f20c0c0c"),n(m,"IRIX Terminal","1a1919ff2b1e57ff3dffff440004ffff2cff56ffffffffffffff44ffff44ffff44fffc72ffff44ffff44ffff44ffff44f2f2f2000043"),n(m,"Iceberg Dark","1e2132e27878b4be82e2a47884a0c6a093c789b8c2c6c8d16b7089e98989c0ca8ee9b18991acd1ada0d395c4ced2d4dec6c8d1161821"),n(m,"Iceberg Light","dcdfe7cc517a668e3dc573392d539e7759b43f83a633374c8389a3cc3768598030b6662d22478e6845ad327698262a3f33374ce8e9ec"),n(m,"Idea","adadadfc525698b61cccb444437ee79d74b02488874b4b4bfffffffc707298b61cffff0b6c9cedfc7eff248887181818adadad202020"),n(m,"Idle Toes","323232d252527fe173ffc66d4099fff680ffbed6ffeeeeec606060f070709dff91ffe48b5eb7f7ff9dffdcf4ffffffffffffff323232"),n(m,"Jackie Brown","2c1d16ef57342baf2bbebf00246eb2d05ec100aceebfbfbf666666e5000086a93ee5e5000000ffe500e500e5e5e5e5e5ffcc2f2c1d16"),n(m,"Japanesque","343935cf3f617bb75be9b32a4c9ad4a57fc4389aadfafaf6595b59d18fa6767f2c78592f13597960429176bbcab2b5aef7f6ec1e1e1e"),n(m,"Jellybeans","929292e2737394b979ffba7b97bedce1c0fa00988edededebdbdbdffa1a1bddeabffdca0b1d8f6fbdaff1ab2a8ffffffdedede121212"),n(m,"JetBrains Darcula","000000fa5355126e00c2c3004581ebfa54ff33c2c1adadad555555fb717267ff4fffff006d9df1fb82ff60d3d1eeeeeeadadad202020"),n(m,"Jubi","3b3750cf7b9890a94b6ebfc0576ea6bc4f6875a7d2c3d3dea874cede90abbcdd6187e9ea8c9fcde16c87b7c9efd5e5f1c3d3de262b33"),n(m,"Kanagawa Dragon","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a6a69ce4687687a987e6c3847fb4ca938aa97aa89fc5c9c5c5c9c5181616"),n(m,"Kanagawa Lotus","1f1f28c840536f894e77713f4d699bb35b79597b755454648a8980d7474b6e915f836f4a6693bf624c835e857a43436c545464f2ecbc"),n(m,"Kanagawa Wave","090618c3404376946ac0a36e7e9cd8957fb86a9589c8c093727169e8242498bb6ce6c3847fb4ca938aa97aa89fdcd7badcd7ba1f1f28"),n(m,"Kanagawabones","1f1f28e46a7898bc6de5c2837eb3c9957fb87eb3c9ddd8bb49495eec818c9ec967f1c9827bc2dfa98fd27bc2dfa8a48dddd8bb1f1f28"),n(m,"Kanso Ink","14171dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c714171d"),n(m,"Kanso Mist","22262dc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2a4a7a45c6066e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c722262d"),n(m,"Kanso Pearl","22262dc840536f894e77713f4d699bb35b79597b755454646d6f6ed7474b6e915f836f4a6693bf624c835e857a43436c22262df2f1ef"),n(m,"Kanso Zen","0d0c0cc4746e8a9a7bc4b28a8ba4b0a292a38ea4a2c8c093a4a7a4e4687687a987e6c3847fb4ca938aa97aa89fc5c9c7c5c9c7090e13"),n(m,"Kibble","4d4d4dc7003129cf13d8e30e3449d18400ff0798abe2d1e35a5a5af015786ce05cf3f79e97a4f7c495f068f2e0fffffff7f7f70e100a"),n(m,"Kitty Default","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffdddddd000000"),n(m,"Kitty Low Contrast","000000cc040319cb00cecb000d73cccb1ed10dcdcddddddd767676f2201f23fd00fffd001a8ffffd28ff14ffffffffffffffff333333"),n(m,"Kolorit","1d1a1eff5b8247d7a1e8e5625db4eeda6cda57e9ebededed504d51ff5b8247d7a1e8e5625db4eeda6cda57e9ebedededefecec1d1a1e"),n(m,"Konsolas","000000aa171718b218ebae1f2323a5ad1edc42b0c8c8c1c17b716eff41415fff5fffff554b4bffff54ff69ffffffffffc8c1c1060606"),n(m,"Kurokula","333333c35a5278b3a9e1b9175c91dd8b79a6867268e0cfc2515151ffc34cafffa5fff70090dbffad93ffffcdb6ffffffe0cfc2141515"),n(m,"Lab Fox","2e2e2efc6d263eb383fca121db3b216b40a86e49cbffffff535353ff651753eaa8fca013db501f6a36b67d53e7ffffffffffff2e2e2e"),n(m,"Laser","626262ff8373b4fb7309b4bdfed300ff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5f92883ffb2fee6e7fefffffff106e3030d18"),n(m,"Later This Evening","2b2b2bd45a60afba67e5d289a0bad6c092d691bfb7494a4a525454d3232faabb39e5be396699d6ab53d65fc0aec1c2c2959595222222"),n(m,"Lavandula","2300467d1625337e6f7f6f494f4a7f5a3f7f58777f736e7d443a53e0516752e0c4e0c3868e87e0a776e09ad4e08c91fa736e7d050014"),n(m,"Light Owl","403f53de3d3b08916ae0af02288ed7d6438a2aa298bdbdbd989fb1de3d3b08916adaaa01288ed7d6438a2aa298f0f0f0403f53fbfbfb"),n(m,"Liquid Carbon","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc595959ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2303030"),n(m,"Liquid Carbon Transparent","000000ff3030559a70ccac000099cccc69c87ac4ccbccccc404040ff3030559a70ccac000099cccc69c87ac4ccbcccccafc2c2000000"),n(m,"Lovelace","282a36f37f975adecdf2a2728897f4c574dd79e6f3fdfdfd4e5165ff497118e3c8ff8037556fffb043d13fdceebebec1fdfdfd1d1f28"),n(m,"Man Page","000000cc000000a6009999000000b2b200b200a6b2b2b2b2666666e5000000cc00bfbf000000ffe500e500cbcbe5e5e5000000fef49c"),n(m,"Mariana","000000ec5f6699c794f9ae586699ccc695c65fb4b4f7f7f7666666f97b58acd1a8fac76185add6d8b6d882c4c4ffffffd8dee9343d46"),n(m,"Material","212121b7141f457b24f6981e134eb25600880e717cafafaf424242e83b3f7aba3abfaa0054a4f3aa4dbc26bbd1d9d9d9232322eaeaea"),n(m,"Material Dark","212121b7141f457b24f6981e134eb2701aa20e717cefefef4f4f4fe83b3f7aba3affea2e54a4f3aa4dbc26bbd1d9d9d9e5e5e5232322"),n(m,"Material Darker","000000ff5370c3e88dffcb6b82aaffc792ea89ddffffffff545454ff5370c3e88dffcb6b82aaffc792ea89ddffffffffeeffff212121"),n(m,"Material Design Colors","435b67fc38415cf19efed03237b6fffc226e59ffd1ffffffa1b0b8fc746dadf7befee16c70cffffc669b9affe6ffffffe7ebed1d262a"),n(m,"Material Ocean","546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff546e7aff5370c3e88dffcb6b82aaffc792ea89ddffffffff8f93a20f111a"),n(m,"Mathias","000000e52222a6e32dfc951ec48dfffa257367d9f0f2f2f2555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),n(m,"Matrix","0f191c23755a82d967ffd7003f524240993150b45a5073506880602fc07990d762faff004f7e7e11ff25c1ff8a678c614266440f191c"),n(m,"Matte Black","333333d35f5fffc107b91c1ce68e0dd35f5fbebebebebebe8a8a8d891c1cffc107b90a0af59e0bb91c1ceaeaeaffffffbebebe121212"),n(m,"Medallion","000000b64c007c8b16d3bd26616bb08c5a90916c25cac29a5e5219ff9149b2ca3bffe54aacb8ffffa0ffffbc51fed698cac2961d1908"),n(m,"Melange Dark","34302cbd818378997ae49b5d7f91b2b380b07b9695c1a78e867462d4776685b695ebc06da3a9cecf9bc289b3b6ece1d7ece1d7292522"),n(m,"Melange Light","e9e1dbc77b8b6e9b72bc5c007892bdbe79bb7397977d6658a98a78bf00213a684aa06d00465aa49041803d656854433a54433af1f1f1"),n(m,"Mellifluous","1a1a1ad29393b3b393cbaa89a8a1beb39fb0c0af8cdadada5b5b5bc95954828040a6794c5a65999c699574a39effffffdadada1a1a1a"),n(m,"Mellow","27272af5a19190b99fe6b99daca1cfe29ecaea83a5c1c0d4424246ffae9f9dc6acf0c5a9b9aedaecaad6f591b2cac9ddc9c7cd161617"),n(m,"Miasma","0000006857425f875fb36d4378824bbb7744c9a554d7c4836666666857425f875fb36d4378824bbb7744c9a554d7c483c2c2b0222222"),n(m,"Midnight In Mojave","1e1e1eff453a32d74bffd60a0a84ffbf5af25ac8faffffff515151ff453a32d74bffd60a0a84ffbf5af25ac8faffffffffffff1e1e1e"),n(m,"Mirage","011627ff999985cc95ffd7007fb5ffddb3ff21c7a8ffffff575656ff999985cc95ffd7007fb5ffddb3ff85cc95ffffffa6b2c01b2738"),n(m,"Misterioso","000000ff424274af68ffad29338f869414e623d7d7e1e1e0626262ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e02d3743"),n(m,"Molokai","121212fa257398e123dfd4601080d08700ff43a8d0bbbbbb555555f6669db1e05ffff26d00afffaf87ff51ceffffffffbbbbbb121212"),n(m,"Mona Lisa","351b0e9b291c636232c36e28515c5d9b1d29588056f7d75c874228ff4331b4b264ff95669eb2b4ff5b6a8acd8fffe598f7d66a120b0d"),n(m,"Monokai Classic","272822f92672a6e22ee6db74fd971fae81ff66d9effdfff16e7066f92672a6e22ee6db74fd971fae81ff66d9effdfff1fdfff1272822"),n(m,"Monokai Pro","2d2a2eff6188a9dc76ffd866fc9867ab9df278dce8fcfcfa727072ff6188a9dc76ffd866fc9867ab9df278dce8fcfcfafcfcfa2d2a2e"),n(m,"Monokai Pro Light","faf4f2e14775269d69cc7a0ae160327058be1c8ca829242aa59fa0e14775269d69cc7a0ae160327058be1c8ca829242a29242afaf4f2"),n(m,"Monokai Pro Light Sun","f8efe7ce4770218871b16803d4572b6851a22473b62c232ea59c9cce4770218871b16803d4572b6851a22473b62c232e2c232ef8efe7"),n(m,"Monokai Pro Machine","273136ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffc6b7678ff6d7ea2e57bffed72ffb270baa0f87cd5f1f2fffcf2fffc273136"),n(m,"Monokai Pro Octagon","282a3aff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1696d77ff657abad761ffd76dff9b5ec39ac99cd1bbeaf2f1eaf2f1282a3a"),n(m,"Monokai Pro Ristretto","2c2525fd6883adda78f9cc6cf38d70a8a9eb85daccfff1f372696afd6883adda78f9cc6cf38d70a8a9eb85daccfff1f3fff1f32c2525"),n(m,"Monokai Pro Spectrum","222222fc618d7bd88ffce566fd9353948ae35ad4e6f7f1ff69676cfc618d7bd88ffce566fd9353948ae35ad4e6f7f1fff7f1ff222222"),n(m,"Monokai Remastered","1a1a1af4005f98e024fd971f9d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efd9d9d90c0c0c"),n(m,"Monokai Soda","1a1a1af4005f98e024fa84199d65fff4005f58d1ebc4c5b5625e4cf4005f98e024e0d5619d65fff4005f58d1ebf6f6efc4c5b51a1a1a"),n(m,"Monokai Vivid","121212fa293498e123fff30a0443fff800f801b6edffffff838383f6669db1e05ffff26d0443fff200f651cefffffffff9f9f9121212"),n(m,"Moonfly","323437ff54548cc85fe3c78a80a0ffcf87e879dac8c6c6c6949494ff518936c692c6c68474b2ffae81ff85dc85e4e4e4bdbdbd080808"),n(m,"N0Tch2K","383838a95551666666a98051657d3e767676c9c9c9d0b8a3545454a977758c8c8ca9917598bd5ea3a3a3dcdcdcd8c8bba0a0a0222222"),n(m,"Neobones Dark","0f191fde6e7c90ff6bb77e648190d4b279a766a5adc6d5cf334652e8838fa0ff85d68c6792a0e2cf86c165b8c198a39ec6d5cf0f191f"),n(m,"Neobones Light","e5ede6a8334c567a3094492728648688507d3b8992202e1899ac9c94253e3f5a22803d1c1d55737b3b702b747c415934202e18e5ede6"),n(m,"Neon","000000ff30455ffa74fffc7e0f15d8f924e700fffcc7c7c7686868ff5a5a75ff88fffd963c40cbf15be588fffeffffff00fffc14161a"),n(m,"Neopolitan","0000009a1a1a61ce3cfbde2d324883ff00808da6cef8f8f84c4c4c9a1a1a61ce3cfbde2d324883ff00808da6cef8f8f8ffffff271f19"),n(m,"Neutron","23252bb540365ab977deb5666a7c93a4799d3f94a8e6e8ef494b51b540365ab977deb5666a7c93a4799d3f94a8ebedf2e6e8ef1c1e22"),n(m,"Night Lion V1","4c4c4cbb00005fde8ff3f167276bd8bb00bb00dadfbbbbbb555555ff555555ff55ffff555555ffff55ff55ffffffffffbbbbbb000000"),n(m,"Night Lion V2","4c4c4cbb000004f623f3f16764d0f0ce6fdb00dadfbbbbbb555555ff55557df71dffff5562cbe8ff9bf500ccd8ffffffbbbbbb171717"),n(m,"Night Owl","011627ef535022da6eaddb6782aaffc792ea21c7a8ffffff575656ef535022da6effeb9582aaffc792ea7fdbcaffffffd6deeb011627"),n(m,"Night Owlish Light","011627d3423e2aa298daaa014876d6403f5308916a7a81817a8181f76e6e49d0c5dac26b5ca7e469709800c990989fb1403f53ffffff"),n(m,"Nightfox","393b44c94f6d81b29adbc074719cd69d79d663cdcfdfdfe0575860d169838ebaa4e0c98986abdcbaa1e27ad5d6e4e4e5cdcecf192330"),n(m,"Niji","333333d23e0854ca74fff7002ab9ffff50da1ef9f5ddd0c4515151ffb7b7c1ffaefcffb88efff3ffa2edbcffc7ffffffffffff141515"),n(m,"No Clown Fiesta","151515b4695890a959f4bf75bad7ffaa759f88afa2e1e1e17272727e97ab90a959f4bf75bad7ffaa759f88afa2afafafe0e1e4101010"),n(m,"No Clown Fiesta Light","d6d6d6874e42677940b890588ba1bfaa759f3e5f661515152b2b2b637786677940b8905893a2abaa759f99ab93373737151515e1e1e1"),n(m,"Nocturnal Winter","4d4d4df12d5209cd7ef5f17a3182e0ff2b6d09c87afcfcfc808080f16d860ae78dfffc676096ffff78a20ae78dffffffe6e5e50d0d17"),n(m,"Nord","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f0596377bf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee92e3440"),n(m,"Nord Light","3b4252bf616a96b17fc5a56581a1c1b48ead7bb3c3a5abb64c566abf616a96b17fc5a56581a1c1b48ead82afaeeceff4414858e5e9f0"),n(m,"Nord Wave","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f04c566abf616aa3be8cebcb8b81a1c1b48ead8fbcbbeceff4d8dee9212121"),n(m,"Nordfox","3b4252bf616aa3be8cebcb8b81a1c1b48ead88c0d0e5e9f053648dd06f79b1d196f0d3998cafd2c895bf93ccdce7ecf4cdcecf2e3440"),n(m,"Novel","000000cc0000009600d06b000000cccc00cc0087cca6a6a6808080cc0000009600d06b000000cccc00cc0087ccffffff3b2322dfdbc3"),n(m,"Nvim Dark","07080dffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f84f5258ffc0b9b3f6c0fce094a6dbffffcaff8cf8f7eef1f8e0e2ea14161b"),n(m,"Nvim Light","07080d5900080055236b5300004c73470045007373a1a4ab4f52585900080055236b5300004c73470045007373eef1f814161be0e2ea"),n(m,"Obsidian","000000b30d0e00bb00fecd223a9bdbbb00bb00bbbbbbbbbb555555ff000393c863fef874a1d7ffff55ff55ffffffffffcdcdcd283033"),n(m,"Ocean","000000e64c4c00a6009999000000b2d826d800a6b2bfbfbf808080ff1a1a00d900e5e5007373ffe500e500e5e5e5e5e5ffffff224fbc"),n(m,"Oceanic Material","000000ee2b2a40a33fffea2e1e80f08800a016afcaa4a4a4777777dc5c6070be71fff16354a4f3aa4dbc42c7daffffffc2c8d71c262b"),n(m,"Oceanic Next","162c35ec5f6799c794fac8636699ccc594c55fb3b3ffffff65737eec5f6799c794fac8636699ccc594c55fb3b3ffffffc0c5ce162c35"),n(m,"Ollie","000000ac2e3131ac61ac43002d57acb085281fa6ac8a8eac684432ff3d483bff99ff5e1e4488ffffc21d1ffaff5b6ea78a8dae222125"),n(m,"One Dark Two","1d1f23e2788198c379eac78671b9f4c88bda62bac6c9ccd34a505ae68991a8cc8eedcf978dc7f6d3a2e278c4cee6e6e6e6e6e621252b"),n(m,"One Double Dark","3d4452f163728cc570ecbe703fb1f5d373e317b9c4dbdfe5525d6fff777b82d882f5c0656dcaffff7bf400e5fbf7f9fcdbdfe5282c34"),n(m,"One Double Light","454b58f7484025a343cc81000087c1b50da9009ab7c5b2b30e131fff371100b90eec99001065dee500d800b4ddffffff383a43fafafa"),n(m,"One Half Dark","282c34e06c7598c379e5c07b61afefc678dd56b6c2dcdfe45d677ae06c7598c379e5c07b61afefc678dd56b6c2dcdfe4dcdfe4282c34"),n(m,"One Half Light","383a42e4564950a14fc184010184bca626a40997b3bababa4f525ee06c7598c379d8b36e61afefc678dd56b6c2ffffff383a42fafafa"),n(m,"Onenord","3b4252e06c759ec183ebcb8b81a1c1b988b088c0d0e5e9f0596377e06c759ec183ebcb8b81a1c1b988b08fbcbbeceff4e5e9f02e3440"),n(m,"Onenord Light","2e3440cb4f5348a53dee5e253879c59f4aca3ea1adb2b6bd646a76d163665f9e9dba793e1b40a69665af8fbcbbeceff42e3440f7f8fa"),n(m,"Operator Mono Dark","5a5a5aca372d4d7b3ad4d6974387cfb86cb472d5c6ced4cd9a9b99c37d6283d0a2fdfdc589d3f6ff2c7a82eadafdfdf6c3cac2191919"),n(m,"Overnight Slumber","0a1222ffa7c485cc95ffcb8b8dabe1c792eb78ccf0ffffff575656ffa7c485cc95ffcb8b8dabe1c792ebffa7c4ffffffced2d60e1729"),n(m,"Oxocarbon","16161600dfdb00b4ffff429700c15ac693ffff74b8f2f4f858585800dfdb00b4ffff429700c15ac693ffff74b8f2f4f8f2f4f8161616"),n(m,"Pale Night Hc","000000f07178c3e88dffcb6b82aaffc792ea89ddffffffff737373f6a9aedbf1baffdfa6b4ccffddbdf2b8eaff999999cccccc3e4251"),n(m,"Pandora","000000ff424274af68ffad29338f869414e623d7d7e2e2e23f5648ff324274cd68ffb92923d7d7ff37ff00ede1ffffffe1e1e1141e43"),n(m,"Paraiso Dark","2f1e2eef615548b685fec41806b6ef815ba45bc4bfa39e9b776e71ef615548b685fec41806b6ef815ba45bc4bfe7e9dba39e9b2f1e2e"),n(m,"Paul Millr","2a2a2aff000079ff0fe7bf00396bd7b449be66ccffbbbbbb666666ff008066ff66f3d64e709aeddb67e67adff2fffffff2f2f2000000"),n(m,"Pencil Dark","212121c3077110a778a89c14008ec45f498620a5bad9d9d94f4f4ffb007a5fd7aff3e43020bbfc6855de4fb8ccf1f1f1f1f1f1212121"),n(m,"Pencil Light","212121c3077110a778a89c14008ec4523c7920a5bab3b3b3424242fb007a52caa2c0b10020bbfc6855de4fb8ccf1f1f1424242f1f1f1"),n(m,"Peppermint","353535e7466989d287dab853449fd0da62dc65aaafb4b4b4535353e4859ba3cca2e1e4876fbce2e586e796dcdbdfdfdfc8c8c8000000"),n(m,"Phala Green Dark","000000ab150000b100a9a7000223c0c22ec000b4c0cbcbcb797979ed220000db00eae7000433ffed3aea00e8eaeaeaeac1fc03000000"),n(m,"Piatto Light","414141b2377166781ecd6f343c5ea8a454b266781ebfbfbf3f3f3fdb3365829429cd6f343c5ea8a454b2829429f2f2f2414141ffffff"),n(m,"Pnevma","2f2e2da3666690a57dd7af877fa5bdc79ec48adbb4d0d0d04a4845d78787afbea2e4c9afa1bdced7bedab1e7ddefefefd0d0d01c1c1c"),n(m,"Poimandres","1a1e28d0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd1a1e28"),n(m,"Poimandres Darker","16161ed0679d5de4c7fffac289ddfffcc5e9add7ffffffffa6accdd0679d5de4c7fffac2add7fffae4fc89ddffffffffa6accd16161e"),n(m,"Poimandres Storm","252b37d0679d5de4c7fffac289ddfff087bd89ddffffffffa6accdd0679d5de4c7fffac2add7fff087bdadd7ffffffffa6accd252b37"),n(m,"Poimandres White","fefeffff209001dab2e5ba4e8abacdeb83948abacd000000969cbdff209001dab2e5ba4e0ebfffeb83940ebfff000000969cbdfefeff"),n(m,"Popping And Locking","1d2021cc241d98971ad79921458588b16286689d6aa89984928374f42c3eb8bb26fabd2f99c6cad3869b7ec16eebdbb2ebdbb2181921"),n(m,"Powershell","000000981a22098003c4a0004140c3d336820e807f7f7c7f808080ef29291cfe3cfefe45268ad2fe13fa29fffec2c1c3f6f6f7052454"),n(m,"Primary","000000db44370f9d58f4b4004285f4db44374285f4bfbfbf000000db44370f9d58f4b4004285f44285f40f9d58ffffff000000ffffff"),n(m,"Pro","00000099000000a6009999002009dbb200b200a6b2bfbfbf666666e5000000d900e5e5000000ffe500e500e5e5e5e5e5f2f2f2000000"),n(m,"Pro Light","000000e5492b50d148c6c4403b75ffed66e84ed2dec2c2c29f9f9fff664048d53ebfbe230082ffff7eff3bd1d2f2f2f2191919ffffff"),n(m,"Purple Rain","000000ff260e9be205ffc40000a2fa815bb500deefffffff565656ff4250b8e36effd85200a6ffac7bf074fdf3fffffffffbf621084a"),n(m,"Purplepeter","0a0520ff796d99b481efdfac66d9efe78fcdba8cffffba81504b63f99f92b4be8ff2e9bf79daedba91d4a0a0d6b9aed3ece7fa2a1a4a"),n(m,"Rapture","000000fc644d7afde1fff09b6c9bf5ff4fa164e0ffc0c9e5304b66fc644d7afde1fff09b6c9bf5ff4fa164e0ffffffffc0c9e5111e2a"),n(m,"Raycast Dark","000000ff536059d499ffc53156c2ffcf2f9852eee5ffffff4c4c4cff636359d499ffc53156c2ffcf2f9852eee5ffffffffffff1a1a1a"),n(m,"Raycast Light","000000b12424006b4ff8a300138af29a1b6e3eb8bfbfbfbf000000b12424006b4ff8a300138af29a1b6e3eb8bfffffff000000ffffff"),n(m,"Rebecca","12131edd775504dbb5f2e7b77aa5ffbf9cf956d3c2e4e3e9666699ff92cd01eac0fffca869c0fac17ff88bfde1f4f2f9e8e6ed292a44"),n(m,"Red Alert","000000d62e4e71be6bbeb86b489beee979d76bbeb8d6d6d6666666e02553aff08cdfddb765aaf1ddb7dfb7dfddffffffffffff762423"),n(m,"Red Planet","2020208c3432728271e8bf6a69819e8964925b8390b9aa99676767b55242869985ebeb9160827ede497438add8d6bfb8c2b790222222"),n(m,"Red Sands","000000ff3f0000bb00e7b0000072ffbb00bb00bbbbbbbbbb6e6e6ed41a1a00bb00e7b0000072aeff55ff55ffffffffffd7c9a77a251e"),n(m,"Relaxed","151515bc5653909d63ebc17a6a8799b06698c9dfffd9d9d9636363bc5653a0ac77ebc17a7eaac7b06698acbbd0f7f7f7d9d9d9353a44"),n(m,"Retro","13a10e13a10e13a10e13a10e13a10e13a10e13a10e13a10e16ba1016ba1016ba1016ba1016ba1016ba1016ba1016ba1013a10e000000"),n(m,"Retro Legends","262626de545445eb45f7bf2b4066f2bf4cf240d9e6bfe6bf4c594cff666659ff59ffd9334c80ffe666ff59e6fff2fff245eb450d0d0d"),n(m,"Rippedcasts","000000cdaf95a8ff60bfbb1f75a5b0ff73fd5a647ebfbfbf666666eecbadbcee68e5e50086bdc9e500e58c9bc4e5e5e5ffffff2b2b2b"),n(m,"Rose Pine","26233aeb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def46e6a86eb6f9231748ff6c1779ccfd8c4a7e7ebbcbae0def4e0def4191724"),n(m,"Rose Pine Dawn","f2e9e1b4637a286983ea9d3456949f907aa9d7827e5752799893a5b4637a286983ea9d3456949f907aa9d7827e575279575279faf4ed"),n(m,"Rose Pine Moon","393552eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def46e6a86eb6f923e8fb0f6c1779ccfd8c4a7e7ea9a97e0def4e0def4232136"),n(m,"Rouge 2","5d5d6bc6797e969e92dbcdab6e94b94c4e788ab6c1e8e8ea616274c6797ee6dcc4e6dcc498b3cd8283a1abcbd3e8e8eaa2a3aa17182b"),n(m,"Royal","241f2b91284c23801cb49d276580b0674d968aaabe5249663e3a4ad5356c2cd946fde83b90baf9a479e3acd4eb9e8cbd514968100815"),n(m,"Ryuuko","2c3941865f5b66907db1a9906a8e95b18a7388b2acececec5d7079865f5b66907db1a9906a8e95b18a7388b2acecececececec2c3941"),n(m,"Sakura","000000d5237041af1abc70536964abc71fbf939393998eac786d69f41d9922e529f595749892f1e90cddeeeeeecbb6ffdd7bdc18131e"),n(m,"Scarlet Protocol","101116ff005100dc84faf9450271b6ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffbd35ec60fdffffffffe419511c153d"),n(m,"Sea Shells","17384cd15123027c9bfca02f1e495068d4f150a3b5deb88d434b53d48678628d98fdd39f1bbcddbbe3ee87acb4fee4cedeb88d09141b"),n(m,"Seafoam Pastel","757575825d4d728c62ada16d4d7b828a7267729494e0e0e08a8a8acf937a98d9aafae79d7ac3cfd6b2a1ade0e0e0e0e0d4e7d4243435"),n(m,"Selenized Black","252525ed4a4670b433dbb32d368aebeb6eb73fc5b7b9b9b9777777ff5e5683c746efc5414f9cfeff81ca56d8c9dededeb9b9b9181818"),n(m,"Selenized Dark","184956fa575075b938dbb32d4695f7f275be41c7b9adbcbc72898fff665c84c747ebc13d58a3ffff84cd53d6c7cad8d9adbcbc103c48"),n(m,"Selenized Light","ece3ccd2212d489100ad89000072d4ca4898009c8f53676d909995cc1729428b00a78300006dcec4439200978a3a4d5353676dfbf3db"),n(m,"Seoulbones Dark","4b4b4be388a398bd99ffdf9b97bddea5a6c56fbdbedddddd797172eb99b18fcd92ffe5b3a2c8e9b2b3da6bcacba8a8a8dddddd4b4b4b"),n(m,"Seoulbones Light","e2e2e2dc5284628562c485620084a3896788008586555555a5a0a1be3c6d487249a76b48006f897f4c7e006f70777777555555e2e2e2"),n(m,"Seti","323232c228328ec43de0c64f43a5d58b57b58ec43deeeeee3f3f3fc228328ec43de0c64f43a5d58b57b58ec43dffffffcacecd111213"),n(m,"Shades Of Purple","000000d904293ad900ffe7006943ffff2c7000c5c7c7c7c7686868f92a1c43d426f1d0006871ffff77ff79e8fbffffffffffff1e1d40"),n(m,"Shaman","012026b2302d00a9415e8baa449a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6405555001015"),n(m,"Slate","222222e2a8bf81d778c4c9c0335856a481d315ab9c02c5e0ffffffffcdd9beffa8d0ccca7ab0d2c5a7d98cdfe0e0e0e035b1d2222222"),n(m,"Sleepy Hollow","572100ba393491773fb556005f63b4a17c7b8faea9af9a914e4b61d9443fd6b04ef668138086efe2c2bba4dce7d2c7a9af9a91121214"),n(m,"Smyck","000000b841317da900c4a50062a3c4ba8acc207383a1a1a17a7a7ad6837cc4f137fee14d8dcff0f79aff6ad9cff7f7f7f7f7f71b1b1b"),n(m,"Snazzy","000000fc434650fb7cf0fb8c49bafffc4cb48be9feededec555555fc434650fb7cf0fb8c49bafffc4cb48be9feededecebece61e1f29"),n(m,"Snazzy Soft","000000ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0686868ff5c575af78ef3f99d57c7ffff6ac19aedfef1f1f0eff0eb282a36"),n(m,"Soft Server","000000a2686a9aa56aa3906a6b8fa36a71a36ba58f99a3a2666c6cdd5c60bfdf55deb36062b1df606edf64e39cd2e0de99a3a2242626"),n(m,"Solarized Darcula","25292af24840629655b688002075c7797fd415968dd2d8d965696af24840629655b688002075c7797fd415968dd2d8d9d2d8d93d3f41"),n(m,"Solarized Dark Higher Contrast","002831d11c246cbe6ca577062176c7c61c6f259286eae3cb006488f5163b51ef84b27e28178ec8e24d8e00b39efcf4dc9cc2c3001e27"),n(m,"Solarized Dark Patched","002831d11c24738a05a577062176c7c61c6f259286eae3cb475b62bd3613475b625368707082845956ba819090fcf4dc708284001e27"),n(m,"Solarized Osaka Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),n(m,"Sonokai","181819fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e37f8490fc5d7c9ed072e7c66476cce0b39df3f39660e2e2e3e2e2e32c2e34"),n(m,"Spacedust","6e5346e35b005cab96e3cd7b0f548be35b0006afc7f0f1ce684c31ff8a3aaecab8ffc87867a0ceff8a3a83a7b4fefff1ecf0c10a1e24"),n(m,"Spacegray","000000b04b5787b379e5c1797d8fa4a4799685a7a5b3b8c34c4c4cb04b5787b379e5c1797d8fa4a4799685a7a5ffffffb3b8c320242d"),n(m,"Spacegray Bright","080808bc5553a0b56cf6c9877baec1b98aae85c9b8d8d8d8626262bc5553a0b56cf6c9877baec1b98aae85c9b8f7f7f7f3f3f32a2e3a"),n(m,"Spacegray Eighties","15171cec5f6781a764fec2545486c0bf83c157c2c1efece7555555ff697393d493ffd2564d84d1ff55ff83e9e4ffffffbdbaae222222"),n(m,"Spacegray Eighties Dull","15171cb24a5692b477c6735a7c8fa5a5789e80cdcbb3b8c3555555ec5f6789e986fec2545486c0bf83c158c2c1ffffffc9c6bc222222"),n(m,"Spiderman","1b1d1ee60813e22928e247562c3fff2435db3256fffffef6505354ff0325ff3338fe3a351d50ff747cff6184fffffff9e3e3e31b1d1e"),n(m,"Spring","000000ff4d831f8c3b1fc95b1dd3ee8959a83e999fbfbfbf000000ff00211fc231d5b80715a9fd8959a83e999fffffff4d4d4cffffff"),n(m,"Square","050505e9897cb6377decebbea9cdeb75507bc9caecf2f2f2474747f99286c3f786fcfbccb6defbad7fa8d7d9fce2e2e2acacab1a1a1a"),n(m,"Squirrelsong Dark","372920ba4138468336d4b1394395c6855fb82f9794d3b9a2704f39df4d43659a4ce8c23f4ca4db9d70da60aca9f2d4bbb19b89372920"),n(m,"Srcery","1c1b19ef2f27519f50fbb8292c78bfe02c6d0aaeb3baa67f918175f7534198bc37fed06e68a8e4ff5c8f2be4d0fce8c3fce8c31c1b19"),n(m,"Starlight","242424f62b5a47b413e3c40124acd4f2affd13c299e6e6e6616161ff4d5135d450e9e8365dc5f8feabf224dfc4ffffffffffff242424"),n(m,"Sublette","253045ee557755ee77ffdd885588ffff77cc44eeeef5f5da405570ee665599ee77ffff7777bbffaa88ff55ffbbffffeeccced0202535"),n(m,"Subliminal","7f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d47f7f7fe15a60a9cfa4ffe2a96699ccf1a5ab5fb3b3d4d4d4d4d4d4282c35"),n(m,"Sugarplum","1111475ca8dc53b397249a84db7dddd0beeef9f3f9a175d444447a5cb5dc52deb501f5c7fa5dfdc6a5fdffffffb577fddb7ddd111147"),n(m,"Sundried","302b2aa7463d5877449d602a485b988646519c814fc9c9c94d4e48aa000c128c21fc6a217999f7fd8aa1fad484ffffffc9c9c91a1818"),n(m,"Sunset Drive","0a0a13ff006300f992ffe90000a4ffff57fd00ffedededff3e3e4bff948b00fcb9ffff683ea0ffff93ff38fffff8f8ffededfe0f0f1a"),n(m,"Symfonic","000000dc322f56db3aff84000084d4b729d9ccccffffffff414347dc322f56db3aff84000084d4b729d9ccccffffffffffffff000000"),n(m,"Synthwave","000000f6188f1ebb2bfdf8342186ecf85a2112c3e2ffffff7f7094f841a025c141fdf4542f9dedf9713719cde6ffffffdad9c7000000"),n(m,"Synthwave Alpha","241b30e60a7000986cadad3e6e29adb300ad00b0b1b9b1bc7f7094e60a700ae4a4f9f972aa54f9ff00f600fbfdf2f2e3f2f2e3241b30"),n(m,"Synthwave Everything","fefefef97e7272f1b8fede5d6d77b3c792eaf772e0fefefefefefef8841472f1b8fff95136f9f6e1acfff92aadfefefef0eff12a2139"),n(m,"Tango Adapted","000000ff000059d600e3be0000a2ffc17ecc00d0d6c0c5bb8f928bff00136dd900ccbe0088c9ffe9a7e100d8d9f6f6f4000000ffffff"),n(m,"Tango Half Adapted","000000ff00004cc300e2c000008ef6a96cb300bdc3babfb5797d76ff001370dc00d9c60076bfffd898d100d0d4f4f4f2000000ffffff"),n(m,"Tearout","685742cc967b97976d6c9861b5955ec9a554d7c483b5955e75644fcc967b97976d6c9861b5955ec9a554d7c483b5955ef4d2ae34392d"),n(m,"Teerb","1c1c1cd68686aed686d7af8786aed6d6aed68adbb4d0d0d04f4f4fd68686aed686e4c9af86aed6d6aed6b1e7ddefefefd0d0d0262626"),n(m,"Terafox","2f3239e85c517aa4a1fda47f5a93aaad5c7ca1cdd8ebebeb4e5157eb746b8eb2affdb29273a3b7b97490afd4deeeeeeee6eaea152528"),n(m,"Terminal Basic","00000099000000a6009999000000b2b200b200a6b2bfbfbf666666e5000000d900bfbf000000ffe500e500d8d8e5e5e5000000ffffff"),n(m,"Terminal Basic Dark","000000c653396ac44bb8b74a6444edd357db69c1cfd1d1d1909090eb5a3a77ea51efef53d09af9eb5af778f1f2edededffffff1d1e1d"),n(m,"Thayer Bright","1b1d1ef926724df840f4fd222757d68c54fe38c8b5ccccc6505354ff5995b6e354feed6c3f78ff9e6ffe23cfd5f8f8f2f8f8f81b1d1e"),n(m,"The Hulk","1b1d1e269d1b13ce3063e4572525f5712c81378ca9d9d8d15053548dff2a48ff773afe16506b9572589d4085a6e5e6e1b5b5b51b1d1e"),n(m,"Tinacious Design Dark","1d1d26ff339900d364ffcc6600cbffcc66ff00cecacbcbf0636667ff2f9200d364ffd47900cbffd783ff00d5d4d5d6f3cbcbf01d1d26"),n(m,"Tinacious Design Light","1d1d26ff339900d364e5b24d00cbffcc66ff00cecab1b1d6636667ff2f9200d364d9ae5300cbffd783ff00c8c7d5d6f31d1d26f8f8ff"),n(m,"TokyoNight","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),n(m,"TokyoNight Day","e9e9edf52a655875398c6c3e2e7de99854f10071976172b0a1a6c5f52a655875398c6c3e2e7de99854f10071973760bf3760bfe1e2e7"),n(m,"TokyoNight Moon","1b1d2bff757fc3e88dffc77782aaffc099ff86e1fc828bb8444a73ff757fc3e88dffc77782aaffc099ff86e1fcc8d3f5c8d3f5222436"),n(m,"TokyoNight Night","15161ef7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d6414868f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf51a1b26"),n(m,"TokyoNight Storm","1d202ff7768e9ece6ae0af687aa2f7bb9af77dcfffa9b1d64e5575f7768e9ece6ae0af687aa2f7bb9af77dcfffc0caf5c0caf524283b"),n(m,"Tomorrow","000000c82829718c00eab7004271ae8959a83e999fbfbfbf000000c82829718c00eab7004271ae8959a83e999fffffff4d4d4cffffff"),n(m,"Tomorrow Night","000000cc6666b5bd68f0c67481a2beb294bb8abeb7ffffff4c4c4ccc6666b5bd68f0c67481a2beb294bb8abeb7ffffffc5c8c61d1f21"),n(m,"Tomorrow Night Blue","000000ff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffff4c4c4cff9da4d1f1a9ffeeadbbdaffebbbff99ffffffffffffffff002451"),n(m,"Tomorrow Night Bright","000000d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffff404040d54e53b9ca4ae7c5477aa6dac397d870c0b1ffffffeaeaea000000"),n(m,"Tomorrow Night Burns","252525832e31a63c40d3494efc595fdf9395ba8586f5f5f55d6f71832e31a63c40d2494efc595fdf9395ba8586f5f5f5a1b0b8151515"),n(m,"Tomorrow Night Eighties","000000f2777a99cc99ffcc666699cccc99cc66ccccffffff595959f2777a99cc99ffcc666699cccc99cc66ccccffffffcccccc2d2d2d"),n(m,"Toy Chest","2c3f58be2d261a9172db8e27325d968a5edc35a08f23d183336889dd594431d07be7d84b34a6daae6bdc42c3aed5d5d531d07b24364b"),n(m,"Treehouse","321300b2270e44a900aa820c58859a97363db25a1e786b53504333ed5d2055f238f2b73285cfede14c5af07d14ffc800786b53191919"),n(m,"Twilight","141414c06d44afb97ac2a86c44474ab4be7c778385ffffd4404040de7c4cccd88ce2c47e5a5e62d0dc8e8a989bffffd4ffffd4141414"),n(m,"Ubuntu","2e3436cc00004e9a06c4a0003465a475507b06989ad3d7cf555753ef29298ae234fce94f729fcfad7fa834e2e2eeeeeceeeeec300a24"),n(m,"Ultra Dark","000000f07178c3e88dffcb6b82aaffc792ea89ddffcccccc404040f6a9aedbf1baffdfa6b4ccffddbdf2b8eaffffffffffffff000000"),n(m,"Ultra Violent","242728ff0090b6ff00fff72747e0fbd731ff0effbbe1e1e1636667fb58b4deff8cebe0877fecffe681ff69fcd3f9f9f5c1c1c1242728"),n(m,"Under The Sea","022026b2302d00a94159819c459a8600599d5d7e19405555384451ff42422aea5e8ed4fd61d5ba1298ff98d02858fbd6ffffff011116"),n(m,"Unikitty","0c0c0ca80f20c7ff98fff964145fcdffe9ff9effeffcf1fb434343d91329d3ffafffef500075eaffefff93ffeffff3fe0b0b0bff8cd9"),n(m,"Urple","000000b0425b37a415ad5c42564d9b6c3ca180808087799c6a3f32ff638829e620f08161867aeda05eeeeaeaeabfa3ff877a9b1b1b23"),n(m,"Vague","252530d8647e7fa563f3be7c6e94b2bb9dbdaeaed1cdcdcd606079e0839899b782f5cb968ba9c1c9b1cabebedad7d7d7cdcdcd141415"),n(m,"Vaughn","25234f70505060b48adfaf8f5555fff08cc38cd0d3709080709080dca3a360b48af0dfaf5555ffec93d393e0e3ffffffdcdccc25234f"),n(m,"Vercel","000000fc003629a948ffae00006afff3288200ac96feffffa8a8a8ff80804be15dffae0049aefff97ea800e4c4fefefefafafa101010"),n(m,"Vesper","101010f5a19190b99fe6b99daca1cfe29ecaea83a5a0a0a07e7e7eff808099ffe4ffc799b9aedaecaad6f591b2ffffffffffff101010"),n(m,"Vibrant Ink","878787ff6600ccff04ffcc0044b4cc9933cc44b4ccf5f5f5555555ff000000ff00ffff000000ffff00ff00ffffe5e5e5ffffff000000"),n(m,"Vimbones","f0f0caa8334c4f6c3194492728648688507d3b8992353535acac8994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535f0f0ca"),n(m,"Violet Dark","56595cc94c2285981cb4881d2e8bced13a8232a198c9c6bd45484bbd3613738a04a577052176c7c61c6f259286c9c6bd7082841c1d1f"),n(m,"Violet Light","56595cc94c2285981cb4881d2e8bced13a8232a198b9b6af45484bbd3613738a04a577052176c7c61c6f259286c9c6bd536870fcf4dc"),n(m,"Violite","241c36ec797979ecb3ece279a979ecec79ec79ececeef4f656447aef8f8f9fefbfefe78fb78fefef8fcf9fefeff8fafceef4f6241c36"),n(m,"Warm Neon","000000e2434639b13adae1454261c5f920fb2abbd4d0b8a3fefcfce970719cc090ddda7a7b91d6f674ba5ed1e5d8c8bbafdab6404040"),n(m,"Wez","000000cc555555cc55cdcd555555cccc55cc7acacacccccc555555ff555555ff55ffff555555ffff55ff55ffffffffffb3b3b3000000"),n(m,"Whimsy","535178ef64875eca89fdd87765aef7aa7ff043c1beffffff535178ef64875eca89fdd87765aef7aa7ff043c1beffffffb3b0d629283b"),n(m,"Wild Cherry","000507d940852ab250ffd16f883cdcecececc1b8b7fff8de009cc9da6bacf4dca5eac066308cbaae636bff919de4838ddafaff1f1726"),n(m,"Wilmersdorf","34373ee063837ebebdcccccca6c1e0e1c1ee5b94abababab50545dfa71938fd7d6d1dfffb2cff0efccfd69abc5d3d3d3c6c6c6282b33"),n(m,"Wombat","000000ff615ab1e969ebd99c5da9f6e86aff82fff7dedacf4a4a4af58c80ddf88feee5b2a5c7ffddaaffb7fff9ffffffdedacf171717"),n(m,"Wryan","3333338c46652873737c7c993955735e468c31658c899ca13d3d3dbf4d8053a6a69e9ecb477ab37e62b36096bfc0c0c0999993101010"),n(m,"Xcode Dark","414453ff817078c2b3d9c97c4eb0ccff7ab2b281ebdfdfe07f8c98ff8170acf2e4ffa14f6bdfffff7ab2dabaffdfdfe0dfdfe0292a30"),n(m,"Xcode Dark hc","43454bff8a7a83c9bcd9c6684ec4e6ff85b8cda1ffffffff838991ff8a7ab1faebffa14f6bdfffff85b8e5cfffffffffffffff1f1f24"),n(m,"Xcode Light","b4d8fdd12f1b3e808778492a0f68a0ad3da4804fb82626268a99a6d12f1b23575c78492a0b4f79ad3da44b21b0262626262626ffffff"),n(m,"Xcode Light hc","b4d8fdad1805355d6178492a0058a19c2191703daa0000008a99a6ad180517414578492a003f739c2191441ea1000000000000ffffff"),n(m,"Xcode WWDC","494d5cbb383a94c66ed28e5d8884c5b7399900aba4e7e8eb7f869ebb383a94c66ed28e5d8884c5b7399900aba4e7e8ebe7e8eb292c36"),n(m,"Zenbones","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),n(m,"Zenbones Dark","1c1917de6e7c819b69b77e646099c0b279a766a5adb4bdc34d4540e8838f8bae68d68c6761abdacf86c165b8c1888f94b4bdc31c1917"),n(m,"Zenbones Light","f0edeca8334c4f6c3194492728648688507d3b89922c363cb5a7a094253e3f5a22803d1c1d55737b3b702b747c4f5e682c363cf0edec"),n(m,"Zenburn","4d4d4d7d5d5d60b48af0dfaf5d6d7ddc8cc38cd0d3dcdccc709080dca3a3c3bf9fe0cf9f94bff3ec93d393e0e3ffffffdcdccc3f3f3f"),n(m,"Zenburned","404040e3716e819b69b77e646099c0b279a766a5adf0e4cf6f6768ec86858bae68d68c6761abdacf86c165b8c1c0ab86f0e4cf404040"),n(m,"Zenwritten Dark","191919de6e7c819b69b77e646099c0b279a766a5adbbbbbb4a4546e8838f8bae68d68c6761abdacf86c165b8c18e8e8ebbbbbb191919"),n(m,"Zenwritten Light","eeeeeea8334c4f6c3194492728648688507d3b8992353535aca9a994253e3f5a22803d1c1d55737b3b702b747c5c5c5c353535eeeeee"),n(m,"branch","35241cc2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9564a45c2562d96a65ed29b5a3b8e8cc47e5b639a90cfc1a9cfc1a932221a"),n(m,"iTerm2 Dark Background","000000c91b0000c200c7c4000225c7ca30c700c5c7c7c7c7686868ff6e675ffa68fffc676871ffff77ff60fdffffffffc7c7c7000000"),n(m,"iTerm2 Default","000000c91b0000c200c7c4002225c4ca30c700c5c7ffffff686868ff6e675ffa68fffc676871ffff77ff60fdffffffffffffff000000"),n(m,"iTerm2 Light Background","000000c91b0000c200c7c4000225c7ca30c700c5c7bababa686868ff6e6739d442ccc9346871ffff77ff3ad7d9ffffff000000ffffff"),n(m,"iTerm2 Pastel Dark Background","626262ff8373b4fb73fffdc3a5d5feff90fed1d1fef1f1f18f8f8fffc4bed6fcbafffed5c2e3ffffb2fee6e6feffffffc7c7c7000000"),n(m,"iTerm2 Smoooooth","14191eb43c2a00c200c7c4002744c7c040be00c5c7c7c7c7686868dd797558e790ece100a7abf2e17ee160fdffffffffdcdcdc15191f"),n(m,"iTerm2 Solarized Dark","073642dc322f859900b58900268bd2d336822aa198eee8d5335e69cb4b16586e75657b838394966c71c493a1a1fdf6e3839496002b36"),n(m,"iTerm2 Solarized Light","073642dc322f859900b58900268bd2d336822aa198bbb5a2002b36cb4b16586e75657b838394966c71c493a1a1fdf6e3657b83fdf6e3"),n(m,"iTerm2 Tango Dark","000000d81e005ea702cfae00427ab389658e00a7aadbded8686a66f5423599e343fdeb6184b0d8bc94b737e6e8f1f1f0ffffff000000"),n(m,"iTerm2 Tango Light","000000d81e005ea702cfae00427ab389658e00a7aac1c4be686a66f542358cd636d7c53b84b0d8bc94b71ecccef1f1f0000000ffffff"),n(m,"novmbr","282a2e9f64349dac5fcca75f2f7d7cb5896e52877fc7b8ac5d4e479f64349dac5fcca75f2f7d7cb5896e52877fc7b8acc7b8ac241d1a"),n(m,"owl","302c2c5a5a5a989898cacaca656565b1b1b17f7f7fdedede5d595bda5b2c989898cacaca656565b1b1b17f7f7fffffffdedede2f2b2c"),n(m,"traffic","282d31934e46637268c79e84515e67715f5e5c6f7dcfb9a84e575e934e46637270c79e84515e67715f5e5c6f7dddcec2cfb9a8272c30"),n(m,"urban","33303b87404f74934eae835a615772854b64625464c0a79a5c586587404f74934eae835a615772854b64625464c0a79ac0a79a312e39"),rS,aS,n(m,"Logoyo Dark","1c1466ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f2f0ff6a63a0ff6b5e6cc04affc83d6ba8f0b57bf058d6c8fffffff2f0ff2a1e80"),n(m,"Logoyo Light","1c1452ee3b2c22a84af5a6234f8ad6c44cd92bb6b6f4f2ff8983b5ff6b5e6cc04affc83d6ba8f0b57bf058d6c8ffffff29216bc5c1fc"),nS,fS,iS,tS,uS]),JJ=k_,D3=S(function(e,r,a){return e<=0?a:s(D3,e>>1,K(r,r),e&1?K(a,r):a)}),Go=l(function(e,r){return s(D3,e,r,"")}),H3=(function(){var e=M3;if(e.b){var r=e.a,a=e.b;return p(r,a)}else return p(n(m,"Fallback",n(Go,108,"0")),P)})(),Ev=H3,gn=function(e){var r=e;return r.dQ?r.dj:r.c9},Vv=function(e){var r=gn(e).kv.sR,a=Ev,t=a.a,o=a.b;return jr(n(Fr,function(c){return ee(c.sR,r)},n(F,t,o)))},$S=function(e){var r=Ev,a=r.a,t=r.b;return{c4:eS(n3(e)),bm:n(du,Vv(e),n(d$,function(o){return o.sR},n(F,a,t)))}},bu={$:0},YJ=ae,lS=bu,vS=function(e){var r=e.lu,a=e.r5,t=e.r4,o=e.hR,c=e.r6,i=e.gD;return{lu:{R:n(d$,JP,r),rr:T},en:T,U:t,f:Bv({rZ:y3,r_:r3}),dg:KP,nY:o,aO:XP,bP:a,T:$S(c),e:c,c1:lS,pJ:!1}},pu={$:0},Ja=l(function(e,r){return{$:0,a:e,b:r}}),Gc=function(e){return{$:0,a:e}},KJ=ae,_$=l(function(e,r){return n(Kf,e,function(a){return r})}),F3=l(function(e,r){var a=n(Le,1,e);return{cN:a,mc:1,aU:0,eL:n(_$,a,r),oS:r,ds:0}}),A3=l(function(e,r){return Gc(n(F3,e,r))}),mu=function(e){return{$:1,a:e}},B3=function(e){return mu({aU:0,eL:n(_$,1,e),oS:e})},sS=l(function(e,r){if(e.$)return B3(r);var a=e.a;return n(A3,a,r)}),dS=S(function(e,r,a){return n(Ja,pu,n(sS,e,p(r,a)))}),bS=l(function(e,r){return n(Ja,pu,n(A3,1,p(e,r)))}),No=l(function(e,r){return{$:1,a:e,b:r}}),pS=S(function(e,r,a){var t=a.a,o=a.b;return p(e(t),r(o))}),mS=function(e){var r=l(function(a,t){var o=a.a,c=a.b,i=t.a,u=t.b;return p(n(F,o,i),n(F,c,u))});return s(dn,r,p(P,P),e)},I3=function(e){switch(e.$){case 0:return p(P,fe);case 1:var r=e.a;return s(pS,Rn,Pa,mS(n(N,I3,r)));case 2:var a=e.a;return p(P,a);default:var t=e.a;return p(f([t]),fe)}},hS=l(function(e,r){return M(r,{bc:e(r.bc)})}),er=S(function(e,r,a){return X(a,e)<0?e:X(a,r)>0?r:a}),Zo=l(function(e,r){var a=r.a,t=r.b;return p(a,e(t))}),Me=function(e){return e<0?-e:e},gS=S(function(e,r,a){return n(oe,NaN,$o(n(e,r,a)))}),Ov=wh,_S=l(function(e,r){var a=n(s$,function(t){return t!=="0"&&t!=="."},qc(r));return K(e&&a?"-":"",r)}),yS=Xh,R3=function(e){var r=e.a,a=e.b;if(r==="9"){var t=tu(a);if(t.$===1)return"01";var o=t.a;return n(Qf,"0",R3(o))}else{var c=ct(r);return c>=48&&c<57?n(Qf,yS(c+1),a):"0"}},Nc=yh,Uv=jh,y$=S(function(e,r,a){return K(a,n(Go,e-Fa(a),Wc(r)))}),E3=Hh,V3=function(e){var r=n(Dn,".",e);if(r.b)if(r.b.b){var a=r.a,t=r.b,o=t.a;return p(a,o)}else{var a=r.a;return p(a,"0")}else return p("0","0")},Jo=l(function(e,r){var a=r.a,t=r.b;return p(e(a),t)}),CS=function(e){var r=n(Dn,"e",Z(Me(e)));if(r.b)if(r.b.b){var a=r.a,t=r.b,o=t.a,c=n(oe,0,Ec(n(pn,"+",o)?n(Aa,1,o):o)),i=V3(a),u=i.a,$=i.b,v=K(u,$),d=c<0?n(oe,"0",n(se,function(b){var h=b.a,g=b.b;return h+("."+g)},n(se,Jo(Wc),tu(K(n(Go,Me(c),"0"),v))))):s(y$,c+1,"0",v);return K(e<0?"-":"",d)}else{var a=r.a;return K(e<0?"-":"",a)}else return""},PS=S(function(e,r,a){if(Nc(a)||Uv(a))return Z(a);var t=a<0,o=V3(CS(Me(a))),c=o.a,i=o.b,u=Fa(c)+r,$=K(n(Go,-u+1,"0"),s(y$,u,"0",K(c,i))),v=Fa($),d=n(Le,1,u),b=n(e,t,s(bn,d,v,$)),h=s(bn,0,d,$),g=b?E3(n(oe,"1",n(se,R3,tu(E3(h))))):h,_=Fa(g),y=g==="0"?g:r<=0?K(g,n(Go,Me(r),"0")):X(r,Fa(i))<0?s(bn,0,_-r,g)+("."+s(bn,_-r,_,g)):K(c+".",s(y$,r,"0",i));return n(_S,t,y)}),Zc=PS(l(function(e,r){var a=tu(r);if(a.$===1)return!1;if(a.a.a==="5")if(a.a.b===""){var t=a.a;return!e}else{var o=a.a;return!0}else{var c=a.a,i=c.a;return(function(u){return u>53&&e||u>=53&&!e})(ct(i))}})),SS=gS(Zc),xS=S(function(e,r,a){var t=n(Yf,10,Me(r-e)),o=t<0?3:t<1?2:t<2?1:0;return n(SS,o,a)}),Jc=S(function(e,r,a){return n(N,function(t){return e(t)?r(t):t},a)}),jS=function(e){switch(e.$){case 2:var a=e.a,r=e.b;return n(Jc,n(Pe,Fn,vn(a)),Zo(function(o){if(o.$===2){var c=o.a,i=c.a,u=c.b;return n(s3,p(i,u),s(er,i,u,r))}else return o}));case 1:var a=e.a,r=e.b;return n(Jc,n(Pe,Fn,vn(a)),Zo(function(o){return o.$===1?b3(r):o}));case 0:var a=e.a,r=e.b;return n(Jc,n(Pe,Fn,vn(a)),Zo(function(o){if(o.$)return o;var c=o.a,i=c.a,u=c.b;return n(Hv,p(i,u),s(xS,i,u,s(er,i,u,r)))}));case 3:var a=e.a,r=e.b;return n(Jc,n(Pe,Fn,vn(a)),Zo(function(o){return o.$===3?v3(r):o}));case 4:var a=e.a,r=e.b;return n(Jc,n(Pe,Fn,vn(a)),Zo(function(o){return o.$===4?Dv(r):o}));default:var a=e.a,t=e.b;return n(Jc,n(Pe,Fn,vn(a)),Zo(function(o){if(o.$===5){var c=o.a;return d3(n(oe,c,n(se,function(i){return n(st,i,c)},n(b$,vn(t),It(c)))))}else return o}))}},wS=function(e){return hS(jS(e))},O3=l(function(e,r){return n(N,wS(e),r)}),qv=S(function(e,r,a){var t=I3(r),o=t.a,c=t.b,i=function(u){return s(me,O3,u,o)};return{hj:c,cX:e?i(a.cX):a.cX,jQ:i(a.jQ)}}),Wr=l(function(e,r){var a=r;return n(Wo,e,a.aN)}),kS=function(e){return n(Wr,5,e.f)||n(Wr,6,e.f)||n(Wr,7,e.f)},U3=l(function(e,r){return r.u5>0&&r.rS>0?r:{rS:e.rS,bJ:0,tn:r.tn,bW:0,u5:e.u5}}),TS={q_:!1,jx:!1,hy:0,hz:0,rc:P,sc:!1,sO:!1,tU:!1,tW:!1,lm:!1,pF:0,pH:0},LS=function(e){var r=e.pb;if(r.$===1)return TS;var a=r.a,t=a.bW+.5*a.rS-.5*e.u6.rS,o=.5*e.u6.u5-a.bJ-.5*a.u5,c=e.ad.sc?e.cF.c8:e.cF.hQ,i=ee(c,D(e.gb)),u=ee(e.cF.c8,D(e.gb));return{q_:u&&e.ad.q_,jx:u&&e.ad.jx,hy:i?e.ad.hy:0,hz:i?e.ad.hz:0,rc:u?e.ad.rc:P,sc:u&&e.ad.sc,sO:i&&e.ad.sO,tU:u&&e.ad.tU,tW:u&&e.ad.tW,lm:u&&e.ad.lm,pF:e.ad.pF+o,pH:e.ad.pH+t}},zS={i1:!1,jq:!1,jx:!1,q2:P,bJ:!1,j7:!1,tD:P,bQ:!1,kV:!1,lm:!1},MS={mh:0,mi:0,mp:P,kG:0,im:T},hu=function(e){var r=jr(n(Fr,function($){return ee($.tn,e.bI)},e.g.tm)),a=ee(e.aJ,D(e.bI)),t=a?e.g.hT:zS,o=a?e.g.fx:MS,c=n(se,U3(e.g.bT),r),i=(function(){if(c.$)return e.g.bT;var $=c.a;return{rS:$.rS,u5:$.u5}})(),u=LS({gb:e.bI,cF:e.cF,pb:c,ad:e.g.tx,u6:e.g.bT});return{lu:(function(){var $=e.bH;if($.$===1)return{pR:!1,rr:T};var v=$.a;return{pR:kS(v),rr:v.lu.rr}})(),aE:e.aP,dC:e.g.dC,fM:e.fM,ch:e.ch,eu:e.g.eu,ev:e.g.ev,ew:e.g.ew,hx:e.g.hx,mD:a,eH:e.g.eH,rt:e.g.rt,gb:e.bI,hT:t,nN:e.nN,nY:e.nY,th:e.th,kt:P3(e.g.kt),gs:e.g.gs,tx:u,tH:e.g.tH,bT:i,fh:e.g.fh,iD:e.g.iD,ea:e.g.ea,pA:e.pA,fx:o,pJ:e.pJ}},DS={c8:T,hQ:T},HS=l(function(e,r){if(e.$)return Bv(r);var a=e.a;return n(_3,a,Bv(r))}),FS=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){var d=n(Ke,$,e);if(d.$)return v;var b=d.a,h=n(m3,a,b.aK),g=hu({fM:0,ch:h,aJ:i,bH:T,bI:b.bI,g:t,nN:Ae,nY:c,th:m$,aP:Av,cF:DS,pA:!1,pJ:!1}),_=s(b.b1,g,r,o),y=_.a,x=_.b,L=_.c,k=s(qv,ee(u,D(b.bI)),x,{cX:v.cn,jQ:h}),A={aE:b.aE,fC:!1,fM:0,ch:k.jQ,hs:Ae,bI:b.bI,nN:Ae,bK:y,ik:n(HS,D(f3(n(oe,"",n(lo,n($t,t.tj,"panel-layout"),t.tq)))),{rZ:D,r_:ae}),fd:b.fd,aP:Av,pA:!1};return M(v,{cP:n(F,n(Vc,No(b.bI),k.hj),v.cP),cU:K(v.cU,L),cn:k.cX,cY:s($r,$,A,v.cY)})}}}}}}}}}},AS=l(function(e,r){return n(h$,e.bI,r)?r:s($r,e.bI,e,r)}),q3=function(e){return M(e,{f:n(vo,Fv(4),e.f)})},BS=Ft("registerPanes",mn(Hr)),W3=function(e){return{$:1,a:e}},G3="play-device-picker",C$={fN:G3,d6:W3},Ia={$:11},cr=S(function(e,r,a){return e(r(a))}),IS=Tg,Rt=l(function(e,r){return Z2(n(IS,n(cr,n(cr,Ba,e),qe),n(Sa,n(cr,n(cr,Ba,e),We),r)))}),bo=32,N3=l(function(e,r){return n(Le,0,bo*r-e.e2/2+bo/2)}),Yo=function(e){return e.fN+"-list"},Ko=V_,Z3=S(function(e,r,a){var t=a,o=n(ea,function(u){return n(p$,u,t.aV)},r);if(o.$)return p(t,fe);var c=o.a,i=n(N3,e,c);return p(M(t,{eR:r,b5:i,az:c}),n(Rt,function(u){return e.d6(Ia)},s(Ko,Yo(e),0,i)))}),RS=function(e){return{$:0,a:e}},Yc=function(e){return{fN:e.fN,e2:320,kH:"Search devices\u2026",d6:n(cr,e.d6,RS),u5:{sF:320,u1:26}}},ES=l(function(e,r){var a=r,t=s(Z3,Yc(e),D(a.cQ),a.bm),o=t.a,c=t.b;return p(M(a,{bm:o}),c)}),VS=function(e){return{$:0,a:e}},Kc=function(e){var r=e.fN,a=e.d6;return{fN:r,e2:320,kH:"Search palettes\u2026",d6:n(cr,a,VS),u5:{sF:320,u1:26}}},Wv=S(function(e,r,a){var t=a,o=s(Z3,Kc(e),Vv(r),t.bm),c=o.a,i=o.b;return p(M(t,{bm:c}),i)}),J3=function(e){return{$:0,a:e}},Y3="play-theme-picker",Xc={fN:Y3,d6:J3},OS=function(e){var r=n(Wr,5,e.f)?s(Wv,Xc,e.e,e.T):p(e.T,fe),a=r.a,t=r.b,o=n(Wr,7,e.f)?n(ES,C$,e.U):p(e.U,fe),c=o.a,i=o.b;return p(M(e,{U:c,T:a}),Pa(f([t,i])))},Gv={$:1},US=function(e){var r=e;return r.cN},K3=function(e){if(e.$)return B3(qo(e));var r=e.a;return Gc(n(F3,US(r),X2(r)))},X3=function(e){var r=e.b;return n(Ja,Gv,K3(r))},XJ=ae,_n=l(function(e,r){return M(r,{D:s(er,0,1,r.D-e)})}),yn=l(function(e,r){return M(r,{D:s(er,0,1,r.D+e)})}),qS=l(function(e,r){return{bx:r.bx,i_:n(yn,.14,r.bx),i$:n(yn,.07,r.bx),jf:n(yn,.13,r.F),jg:n(yn,.23,r.F),kv:e,F:r.F,k3:n(yn,.03,r.F),k4:n(yn,.06,r.F),k5:n(yn,.09,r.F),k6:n(_n,.03,r.F),k7:n(_n,.06,r.F),k8:n(_n,.09,r.F),k9:{aT:.6,aX:r.F.aX,D:.92,a4:.08},lc:n(_n,.5,r.d3),le:r.d3,lf:n(_n,.15,r.d3)}}),WS=l(function(e,r){var a=r.d3,t=a.D<.12?M(a,{D:.12}):a;return{bx:r.bx,i_:n(_n,.14,r.bx),i$:n(_n,.07,r.bx),jf:n(_n,.13,r.F),jg:n(_n,.23,r.F),kv:e,F:r.F,k3:n(_n,.03,r.F),k4:n(_n,.06,r.F),k5:n(_n,.09,r.F),k6:n(yn,.03,r.F),k7:n(yn,.06,r.F),k8:n(yn,.09,r.F),k9:{aT:.88,aX:r.F.aX,D:.18,a4:.1},lc:n(yn,.5,t),le:t,lf:n(yn,.15,t)}}),GS=l(function(e,r){return r.sb?n(qS,r,{bx:e,F:r.p_,d3:r.rw}):n(WS,r,{bx:e,F:r.p_,d3:r.rw})}),Q3=l(function(e,r){switch(e){case 0:return r.tK;case 1:return r.rK;case 2:return r.vl;case 3:return r.p6;case 4:return r.sr;default:return r.qM}}),gu=l(function(e,r){return n(GS,n(Q3,e,r),r)}),NS=hn(n(N,function(e){return p(e.sR,e)},M3)),ZS=function(e){return n(Ke,e,NS)},Nv=function(e){return n(oe,H3.a,ZS(e))},ep=(function(){var e=5;return{g9:e,c9:n(gu,e,Nv("Argonaut")),dj:n(gu,e,Nv("Erkal Light")),dQ:!1}})(),JS=function(e){switch(e){case"Red":return D(0);case"Green":return D(1);case"Yellow":return D(2);case"Blue":return D(3);case"Magenta":return D(4);case"Cyan":return D(5);default:return T}},rp=function(e){var r=Ev,a=r.a,t=r.b;return n(s$,function(o){return ee(o.sR,e)},n(F,a,t))},YS=function(e){switch(e){case"1":return D(!0);case"0":return D(!1);default:return T}},Zv=l(function(e,r){var a=r;return M(a,{g9:e,c9:n(gu,e,a.c9.kv),dj:n(gu,e,a.dj.kv)})}),Jv=l(function(e,r){var a=r,t=n(gu,a.g9,e);return e.sb?M(a,{c9:t,dQ:!1}):M(a,{dj:t,dQ:!0})}),ap=function(e){return Jv(Nv(e))},Yv=function(e){var r=e;return M(r,{dQ:!r.dQ})},KS=l(function(e,r){return ee(su(r),e)?r:Yv(r)}),XS=function(e){var r=n(Dn,"|",e);if(r.b&&r.b.b&&r.b.b.b&&r.b.b.b.b&&!r.b.b.b.b.b){var a=r.a,t=r.b,o=t.a,c=t.b,i=c.a,u=c.b,$=u.a;return rp(a)&&rp(o)?s(zv,l(function(v,d){return n(KS,d,n(Zv,v,n(ap,o,n(ap,a,ep))))}),JS($),YS(i)):T}else return T},QS=l(function(e,r){var a=n(oe,P,r.g.iD),t=n(oe,Ae,n(se,hn,r.g.iD)),o=e.eS(t),c=n(N,function(De){return De.bI},e.cY),i=s(me,AS,Ae,e.cY),u=DP(c),$=(function(){if(u.b&&!u.b.b){var De=u.a;return D(De)}else return T})(),v=n(oe,e.bH.e,n(ea,XS,n(lo,n($t,r.g.tj,"theme"),r.g.tq))),d=n(oe,e.bH.bP,n(ea,rP,n(lo,n($t,r.g.tj,"tape-record-from-start"),r.g.tq))),b=n(oe,"",n(lo,n($t,r.g.tj,"hud-open-panels"),r.g.tq)),h=n(oe,e.bH.hR,n(ea,BP,n(lo,v$("mode"),r.g.tq))),g=n(oe,ZP,n(ea,MP,n(lo,n($t,r.g.tj,"device"),r.g.tq))),_=vS({lu:e.lu,r4:g,hR:h,r5:d,r6:v,gD:e.bH}),y=n(GP,b,n(qP,f3(n(oe,"",n(lo,v$("hud-panel-layout"),r.g.tq))),_)),x=d&&e.bH.hO?q3(y):y,L=n(m3,a,e.aK),k=s(me,ao(FS,i,o,a,r.g,v,h,$,jr(u)),{cP:P,cU:P,cn:L,cY:Ae},u),A=n(NP,k.cn,r.g),V=s(f$,e,k.cU,o),E=V.a,G=V.b,J={ch:k.cn,g:r.g,cY:k.cY,S:E,om:P,on:P},te=(function(){if(e.bH.hO){var De=s(dS,AP,A,J);return d?X3(De):De}else return n(bS,A,J)})(),$e=OS(x),pe=$e.a,ke=$e.b,Fe={ho:fP(e.cY),aJ:$,bH:pe,aY:u,gf:P,tj:r.g.tj,uz:te};return p(M(Fe,{gf:n(c3,e,Fe)}),Pa(n(F,n(Vc,u$,ke),n(F,BS(u),n(F,G,k.cP)))))}),np=function(e){return{$:10,a:e}},Kv={$:1},ex=function(e){return{$:0,a:e}},tp={$:11},rx=l(function(e,r){return{$:4,a:e,b:r}}),ax=l(function(e,r){return{$:5,a:e,b:r}}),nx={$:6},j=$g,Qc=mg,ie=ng,tx=vg,ei=function(e){return n(Ye,hn,tx(e))},P$=n(Pe,ln,n(Pe,wr(function(e){var r=e.a,a=e.b,t=$o(r);if(t.$)return T;var o=t.a;return D(p(o,a))}),hn)),ox=q(function(e,r,a,t){return{rL:t,u2:a,pF:e,pH:r}}),W=tg,Xo=hg,cx=I(Xo,ox,n(j,"x",W),n(j,"y",W),n(j,"w",W),n(j,"h",W)),ix=ei(cx),Xv=function(e){return{$:1,a:e}},QJ=3,ri={$:2},op=function(e){switch(e){case 0:return"texture";case 1:return"sound";case 2:return"font";default:return"atlas"}},po=l(function(e,r){return op(e)+(":"+r)}),ux=l(function(e,r){var a=r;return M(a,{J:s(At,n(po,3,e.bI),se(function(t){return Xv({eL:e.eL,aZ:e.aZ,at:e.at,I:ri})}),a.J)})}),S$=og,fx=function(e){return C(Qc,S(function(r,a,t){return ux({eL:a,bI:e,aZ:r,at:t})}),n(Ye,P$,n(j,"mipImages",ei(S$))),n(Ye,P$,n(j,"frames",ei(ix))),n(j,"pixelated",ie))},On=dg,Qv=function(e){return On(f([n(Ye,D,e),re(T)]))},e1=n(Ye,oe(""),Qv(n(j,"error",Se))),x$=function(e){return{$:3,a:e}},cp=function(e){return{$:3,a:e}},r1=function(e){return{$:2,a:e}},a1=function(e){return{$:0,a:e}},$x=l(function(e,r){switch(r.$){case 0:return a1({ej:0,ek:0,fG:T,aZ:Ae,e6:Ae,at:!1,I:x$(e)});case 1:return Xv({eL:Ae,aZ:Ae,at:!1,I:x$(e)});case 2:return r1({I:x$(e)});default:return cp({I:x$(e)})}}),eY=2,rY=1,aY=0,n1=function(e){switch(e){case"texture":return D(0);case"sound":return D(1);case"font":return D(2);case"atlas":return D(3);default:return T}},t1=q(function(e,r,a,t){var o=t,c=n1(e);if(c.$)return o;var i=c.a;return M(o,{J:s(At,n(po,i,r),se($x(a)),o.J)})}),j$={$:1},lx=function(e){switch(e){case 0:return a1({ej:0,ek:0,fG:T,aZ:Ae,e6:Ae,at:!1,I:j$});case 3:return Xv({eL:Ae,aZ:Ae,at:!1,I:j$});case 1:return r1({I:j$});default:return cp({I:j$})}},o1=S(function(e,r,a){var t=a,o=n1(e);if(o.$)return t;var c=o.a;return M(t,{J:s($r,n(po,c,r),lx(c),t.J)})}),vx=l(function(e,r){var a=r;return M(a,{J:s(At,n(po,1,e),se(function(t){return t.$===2?r1({I:ri}):t}),a.J)})}),ip=_g,sx=l(function(e,r){var a=r;return M(a,{J:s(At,n(po,0,e.bI),se(function(t){return t.$?t:a1({ej:e.ej,ek:e.ek,fG:e.fG,aZ:e.aZ,e6:e.e6,at:e.at,I:ri})}),a.J)})}),dx=function(e){return ua(ip,Vr(function(r,a,t,o,c,i){return sx({ej:o,ek:t,fG:i,bI:e,aZ:r,e6:a,at:c})}),n(Ye,P$,n(j,"mipImages",ei(S$))),n(Ye,n(Pe,oe(Ae),P$),Qv(n(j,"mipUrls",ei(Se)))),n(j,"baseWidth",W),n(j,"baseHeight",W),n(j,"pixelated",ie),Qv(n(j,"baseline",W)))},ai=S(function(e,r,a){var t=a,o=n1(e);if(o.$)return t;var c=o.a;return M(t,{J:n(lu,n(po,c,r),t.J)})}),bx=function(e){var r=e.a,a=e.b,t=e.c,o=p(r,a);e:for(;;)switch(o.a){case"texture":switch(o.b){case"loading":return re(n(o1,"texture",t));case"loaded":return dx(t);case"failed":return n(Ye,function(c){return s(t1,"texture",t,c)},e1);case"unloaded":return re(n(ai,"texture",t));case"cancelled":return re(n(ai,"texture",t));default:break e}case"atlas":switch(o.b){case"loading":return re(n(o1,"atlas",t));case"loaded":return fx(t);case"failed":return n(Ye,function(c){return s(t1,"atlas",t,c)},e1);case"unloaded":return re(n(ai,"atlas",t));case"cancelled":return re(n(ai,"atlas",t));default:break e}case"sound":switch(o.b){case"loading":return re(n(o1,"sound",t));case"loaded":return re(vx(t));case"failed":return n(Ye,function(c){return s(t1,"sound",t,c)},e1);case"unloaded":return re(n(ai,"sound",t));case"cancelled":return re(n(ai,"sound",t));default:break e}default:break e}return re(ae)},px=n(H,bx,C(Qc,S(function(e,r,a){return R(e,r,a)}),n(j,"kind",Se),n(j,"status",Se),n(j,"id",Se))),mx=s(Ha,Bt,n(j,"instanceId",Se),px),up=E0,hx=function(e){var r=n(up,mx,e);if(r.$)return nx;var a=r.a,t=a.a,o=a.b;return n(ax,t,o)},Cn=rg,fp=l(function(e,r){return{$:2,a:e,b:r}}),Qo=Ab,c1=function(e){return s(me,$3,m$,e)},w$=function(e){return c1(kv(e.ik))},nY=0,$p=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),lp=l(function(e,r){return{oo:r,o5:e}}),gx=Ba(n(lp,P,Ae)),_x=function(e){return e?"w_":"d_"},yx=function(e){var r=e.a,a=e.b;return p(K(_x(r),a),e)},vp=Dg,Cx=Vr(function(e,r,a,t,o,c){var i=S(function(d,b,h){e:for(;;){var g=h.a,_=h.b;if(g.b){var y=g.a,x=y.a,L=y.b,k=g.b;if(X(x,d)<0){var A=d,V=b,E=p(k,s(e,x,L,_));d=A,b=V,h=E;continue e}else return X(x,d)>0?p(g,s(a,d,b,_)):p(k,C(r,x,L,b,_))}else return p(g,s(a,d,b,_))}}),u=s(ft,i,p(ln(t),c),o),$=u.a,v=u.b;return s(me,l(function(d,b){var h=d.a,g=d.b;return s(e,h,g,b)}),v,$)}),Px=l(function(e,r){return{mv:r,jT:e}}),i1=Eg,Sx=S(function(e,r,a){var t=a.a,o=a.b,c=(function(){return t?ot:Bo})();return n(iu,function(i){return p(r,i)},s(F_,c,o,function(i){return n(i1,e,n(Px,r,i))}))}),xx=l(function(e,r){return s(ft,$r,r,e)}),jx=S(function(e,r,a){var t=S(function(b,h,g){var _=g.a,y=g.b,x=g.c;return R(_,y,n(F,s(Sx,e,b,h),x))}),o=S(function(b,h,g){var _=g.a,y=g.b,x=g.c;return R(n(F,h,_),y,x)}),c=q(function(b,h,g,_){var y=_.a,x=_.b,L=_.c;return R(y,s($r,b,h,x),L)}),i=n(N,yx,r),u=Sr(Cx,o,c,t,a.oo,hn(i),R(P,Ae,P)),$=u.a,v=u.b,d=u.c;return n(Sa,function(b){return Ba(n(lp,i,n(xx,v,hn(b))))},n(Sa,function(b){return uu(d)},uu(n(N,vp,$))))}),wx=S(function(e,r,a){var t=r.mv,o=r.jT,c=function(u){var $=u.a,v=u.b,d=v.a,b=v.b,h=v.c;return ee($,o)?n(A_,h,t):T},i=n(wr,c,a.o5);return n(Sa,function(u){return Ba(a)},uu(n(N,i$(e),i)))}),kx=l(function(e,r){var a=r.a,t=r.b,o=r.c;return s($p,a,t,n(Ye,e,o))});fa["Browser.Events"]=Z0(gx,jx,wx,0,kx);var Tx=Yi("Browser.Events"),u1=S(function(e,r,a){return Tx(s($p,e,r,a))}),_u=n(u1,0,"keydown"),f1=function(e){return{$:0,a:e}},yu=l(function(e,r){return s(dn,j,r,e)}),sp=Vh,Lx=function(e){var r=sp(e);return r==="INPUT"||r==="TEXTAREA"||r==="SELECT"},zx=l(function(e,r){if(r.$)return!1;var a=r.a;return ee(L3(e),Wc(Lv(a)))}),Mx=l(function(e,r){return n(se,function(a){return a.bI},jr(n(Fr,function(a){return n(zx,e,a.t8)},r)))}),Dx=function(e){return n(H,function(r){if(Lx(r.o9))return Cn("ignored: text input focused");if(r.jq||r.j7){var a=n(Mx,r.jT,e);if(a.$)return Cn("ignored: no matching entry shortcut");var t=a.a;return re(f1(t))}else return Cn("ignored: no Ctrl/Cmd modifier")},I(Xo,q(function(r,a,t,o){return{jq:a,jT:r,j7:t,o9:o}}),n(j,"key",Se),n(j,"ctrlKey",ie),n(j,"metaKey",ie),n(yu,f(["target","tagName"]),Se)))},dp=l(function(e,r){return _u(Dx(e))}),tY=ae,Hx=function(e){return n(N,function(r){return{bI:r.bI,t8:n(se,ae,r.t8)}},e)},k$=function(e){return e.pJ},Fx=Te(function(e,r,a,t,o){var c=n(Ke,o,a.cY);if(c.$)return T;var i=c.a,u=hu({fM:i.fM,ch:i.ch,aJ:r.aJ,bH:D(r.bH),bI:i.bI,g:a.g,nN:i.nN,nY:Uc(r.bH),th:w$(i),aP:i.aP,cF:t,pA:i.pA,pJ:k$(r.bH)}),$=C(e.ba.cu,u,a.S,Vn(r.bH),i.bK),v=n(Qo,fp(o),n(dp,Hx($),i.ik)),d=n(Qo,No(o),C(e.ba.aC,u,a.S,Vn(r.bH),i.bK));return D(cu(f([d,v])))}),ni=function(e){var r=e.a;return ee(r,Gv)},bp=function(e){return n(Wr,4,e.f)},Ax=Vf("assetsResponse",S$),Bx=Ax(ae),pp="play-absorbs-pointer-",Ix=function(e){return n(pn,pp,e)},Rx=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b;if(Ix(a))return T;if(n(l3,a,e))return D(a);var o=e,c=t;e=o,r=c;continue e}else return T}),mp=function(e){var r=.5*e.u6.rS-e.ad.pH,a=e.ad.pF+.5*e.u6.u5,t=function(i){var u=n(U3,e.u6,i);return X(a,u.bJ)>-1&&X(a,u.bJ+u.u5)<1&&X(r,u.bW)>-1&&X(r,u.bW+u.rS)<1},o=n(se,function(i){return i.tn},jr(n(Fr,t,e.kw))),c=n(Rx,e.kN,e.ad.rc);return{c8:c,hQ:o}},$1=function(e){return mp({kw:e.g.tm,kN:c1(Jf(e.cY)),ad:e.g.tx,u6:e.g.bT})},hp=function(e){return{$:6,a:e}},gp=function(e){return{$:3,a:e}},_p=function(e){return{$:2,a:e}},yp={$:13},Ex=n(H,function(e){return(e.jT==="p"||e.jT==="P")&&e.kV&&(e.jq||e.j7)?re(yp):Cn("not Cmd+Shift+P")},I(Xo,q(function(e,r,a,t){return{jq:a,jT:e,j7:t,kV:r}}),n(j,"key",Se),n(j,"shiftKey",ie),n(j,"ctrlKey",ie),n(j,"metaKey",ie))),Vx=function(e){var r=e;return nr(r.io)},Cu=l(function(e,r){return e.hN&&!Vx(r)}),Ox={$:4},Ux=n(H,function(e){return(e.jT==="i"||e.jT==="I")&&(e.jq||e.j7)?re(Ox):Cn("not Ctrl+I")},C(Qc,S(function(e,r,a){return{jq:r,jT:e,j7:a}}),n(j,"key",Se),n(j,"ctrlKey",ie),n(j,"metaKey",ie))),qx={$:12},Wx=n(H,function(e){return(e.jT==="m"||e.jT==="M")&&(e.jq||e.j7)?re(qx):Cn("not Ctrl+M")},C(Qc,S(function(e,r,a){return{jq:r,jT:e,j7:a}}),n(j,"key",Se),n(j,"ctrlKey",ie),n(j,"metaKey",ie))),Cp=l(function(e,r){return uo}),Gx=l(function(e,r){var a=r;return n(Cp,Yc(e),a.bm)}),Nx=function(e){return{$:7,a:e}},Zx={$:8},Jx=n(u1,0,"mousemove"),Yx=n(u1,0,"mouseup"),Kx=function(e){if(e.$===3){var r=e.a,a=r.bo;if(a.a.$===1){var t=a.a;return cu(f([Jx(s(Ha,l(function(o,c){return Nx({fL:o,qx:c})}),n(j,"clientX",W),n(j,"clientY",W))),Yx(re(Zx))]))}else return uo}else return uo},Xx=l(function(e,r){var a=r;return n(Cp,Kc(e),a.bm)}),Pp=function(e){return{$:4,a:e}},Sp=function(e){return{$:1,a:e}},T$=S(function(e,r,a){return{kh:a,oH:r,o5:e}}),l1=Ba(s(T$,P,T,0)),Qx=I_(0),xp=B_(0),jp=q0,ej=S(function(e,r,a){var t=a.kh,o=a.oH,c=p(o,r);if(c.a.$===1)if(c.b.b){var u=c.a;return n(Sa,function(v){return n(Sa,function(d){return Ba(s(T$,r,D(v),d))},Qx)},jp(n(Sa,i1(e),xp)))}else{var i=c.a;return l1}else{if(c.b.b)return Ba(s(T$,r,o,t));var $=c.a.a;return n(Sa,function(v){return l1},vp($))}}),oY=ae,rj=ae,aj=S(function(e,r,a){var t=a.kh,o=a.o5,c=function(i){if(i.$){var u=i.a;return n(i$,e,u(r-t))}else{var u=i.a;return n(i$,e,u(rj(r)))}};return n(Sa,function(i){return n(Sa,function(u){return Ba(s(T$,o,D(i),r))},uu(n(N,c,o)))},jp(n(Sa,i1(e),xp)))}),nj=function(e){return{$:0,a:e}},tj=l(function(e,r){if(r.$){var a=r.a;return Sp(n(cr,e,a))}else{var a=r.a;return nj(n(cr,e,a))}});fa["Browser.AnimationManager"]=Z0(l1,ej,aj,0,tj);var oj=Yi("Browser.AnimationManager"),cj=function(e){return oj(Sp(e))},wp=cj,ij=function(e){var r=e;if(r.$===1){var a=r.a,t=a._;switch(t.$){case 0:return wp(Pp);case 2:return wp(Pp);case 1:return uo;default:return uo}}else return uo},uj=l(function(e,r){var a=e.d6,t=e.gD,o=n(Qo,_p,ij(r.c1)),c=t.co?D(n(Xx,Xc,r.T)):T,i=t.eM?D(n(Qo,gp,Kx(r.aO))):T,u=n(Qo,hp,n(dp,P,r.f)),$=t.dI?D(n(Gx,C$,r.U)):T,v=t.dJ?D(_u(Wx)):T,d=t.co?D(_u(Ux)):T,b=n(Cu,t,r.lu.R)?D(_u(Ex)):T;return n(Qo,a,cu(n(wr,ae,f([D(o),d,v,c,$,i,D(u),b]))))}),Nr=ag,ti=fg,fj=Vf("tick",n(H,function(e){return n(H,function(r){return n(H,function(a){return n(H,function(t){return n(H,function(o){return n(H,function(c){return n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(_){return n(H,function(y){return n(H,function(x){return n(H,function(L){return n(H,function(k){return n(H,function(A){return re({dC:A,eu:k,ev:L,ew:x,hx:y,eH:_,rt:g,hT:h,kt:b,tj:d,gs:v,tm:$,tq:u,tx:i,tH:c,bT:o,fh:t,iD:a,ea:r,fx:e})},n(j,"boundingClientRects",pr(n(H,function(A){return n(H,function(V){return n(H,function(E){return re({rd:E,rB:V,t2:A})},n(j,"elements",pr(n(H,function(E){return n(H,function(G){return re({lS:G,bI:E})},n(j,"boundingClientRect",n(H,function(G){return n(H,function(J){return n(H,function(te){return n(H,function($e){return re({bB:$e,bJ:te,bQ:J,bW:G})},n(j,"bottom",W))},n(j,"left",W))},n(j,"right",W))},n(j,"top",W))))},n(j,"id",Se)))))},n(j,"frameId",Se))},n(j,"scroll",n(H,function(A){return n(H,function(V){return n(H,function(E){return n(H,function(G){return n(H,function(J){return n(H,function(te){return re({l9:te,ma:J,bJ:G,bW:E,u0:V,pz:A})},n(j,"contentHeight",W))},n(j,"contentWidth",W))},n(j,"left",W))},n(j,"top",W))},n(j,"viewportHeight",W))},n(j,"viewportWidth",W)))))))},n(j,"darkModeIsOn",ie))},n(j,"deviceOrientation",On(f([ti(T),n(Ye,D,n(H,function(L){return n(H,function(k){return n(H,function(A){return re({aT:A,p4:k,rF:L})},n(j,"alpha",W))},n(j,"beta",W))},n(j,"gamma",W)))]))))},n(j,"devicePixelRatio",W))},n(j,"dt",W))},n(j,"focusedElementIsContentEditable",ie))},n(j,"focusedElementIsTextInput",ie))},n(j,"keyboard",n(H,function(h){return n(H,function(g){return n(H,function(_){return n(H,function(y){return n(H,function(x){return n(H,function(L){return n(H,function(k){return n(H,function(A){return n(H,function(V){return n(H,function(E){return re({i1:E,jq:V,jx:A,q2:k,bJ:L,j7:x,tD:y,bQ:_,kV:g,lm:h})},n(j,"alt",ie))},n(j,"ctrl",ie))},n(j,"down",ie))},n(j,"downs",pr(Se)))},n(j,"left",ie))},n(j,"meta",ie))},n(j,"pressedKeys",pr(Se)))},n(j,"right",ie))},n(j,"shift",ie))},n(j,"up",ie))))},n(j,"operatingSystem",Se))},n(j,"pageId",Se))},n(j,"pageScroll",n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(_){return re({l9:_,ma:g,bJ:h,bW:b,u0:d,pz:v})},n(j,"contentHeight",W))},n(j,"contentWidth",W))},n(j,"left",W))},n(j,"top",W))},n(j,"viewportHeight",W))},n(j,"viewportWidth",W))))},n(j,"paneBoundingBoxes",pr(n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return re({rS:h,bJ:b,tn:d,bW:v,u5:$})},n(j,"height",W))},n(j,"left",W))},n(j,"paneId",Se))},n(j,"top",W))},n(j,"width",W)))))},n(j,"persisted",pr(n(H,function(u){return n(H,function($){return re(p(u,$))},n(Ar,1,Se))},n(Ar,0,Se)))))},n(j,"pointer",n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(_){return n(H,function(y){return n(H,function(x){return n(H,function(L){return re({q_:L,jx:x,hy:y,hz:_,rc:g,sc:h,sO:b,tU:d,tW:v,lm:$,pF:u,pH:i})},n(j,"doubleClick",ie))},n(j,"down",ie))},n(j,"dx",W))},n(j,"dy",W))},n(j,"elementIdsForLastDown",pr(Se)))},n(j,"isDown",ie))},n(j,"move",ie))},n(j,"rightDown",ie))},n(j,"rightUp",ie))},n(j,"up",ie))},n(j,"x",W))},n(j,"y",W))))},n(j,"rawPointer",n(H,function(c){return n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(_){return n(H,function(y){return n(H,function(x){return re({q_:x,jx:y,hy:_,hz:g,rc:h,sc:b,sO:d,tU:v,tW:$,lm:u,pF:i,pH:c})},n(j,"doubleClick",ie))},n(j,"down",ie))},n(j,"dx",W))},n(j,"dy",W))},n(j,"elementIdsForLastDown",pr(Se)))},n(j,"isDown",ie))},n(j,"move",ie))},n(j,"rightDown",ie))},n(j,"rightUp",ie))},n(j,"up",ie))},n(j,"x",W))},n(j,"y",W))))},n(j,"screen",n(H,function(o){return n(H,function(c){return re({rS:c,u5:o})},n(j,"height",W))},n(j,"width",W))))},n(j,"screenOrientationAngle",W))},n(j,"searchParamsFromUrl",On(f([ti(T),n(Ye,D,pr(n(H,function(a){return n(H,function(t){return re(p(a,t))},n(Ar,1,Se))},n(Ar,0,Se))))]))))},n(j,"touches",pr(n(H,function(r){return n(H,function(a){return n(H,function(t){return re({bI:t,pF:a,pH:r})},n(j,"id",Nr))},n(j,"x",W))},n(j,"y",W)))))},n(j,"wheel",n(H,function(e){return n(H,function(r){return n(H,function(a){return n(H,function(t){return n(H,function(o){return re({mh:o,mi:t,mp:a,kG:r,im:e})},n(j,"deltaX",W))},n(j,"deltaY",W))},n(j,"elementIdsForLastWheel",pr(Se)))},n(j,"pinchDeltaForChrome",W))},n(j,"pinchScaleForSafari",On(f([ti(T),n(Ye,D,W)]))))))),$j=Vf("visibilityChanged",n(H,function(e){return n(H,function(r){return re({gb:r,pA:e})},n(j,"instanceId",Se))},n(j,"visible",ie))),lj=l(function(e,r){var a=n(uj,{gD:e.bH,d6:u$},r.bH),t=Oc(r.uz),o=$1(t),c=n(wr,C(Fx,e,r,t,o),r.aY),i=bp(r.bH)?_u(n(H,function($){return $==="Escape"?ni(r.uz)?re(np(Kv)):re(tp):Cn("not Escape")},n(j,"key",Se))):uo,u=e.aC(t.S);return cu(K(f([fj(ex),$j(function($){return n(rx,$.gb,$.pA)}),n(Qo,hx,Bx),u,a,i]),c))}),oi=I7,kp=q(function(e,r,a,t){var o=Uo&r>>>e,c=n(vu,o,t);if(c.$){var $=c.a,v=s(oi,Uo&r,a,$);return s(oi,o,Dc(v),t)}else{var i=c.a,u=C(kp,e-Hn,r,a,i);return s(oi,o,Hc(u),t)}}),ci=S(function(e,r,a){var t=a.a,o=a.b,c=a.c,i=a.d;return e<0||X(e,t)>-1?a:X(e,K2(t))>-1?C(io,t,o,c,s(oi,Uo&e,r,i)):C(io,t,o,C(kp,o,e,r,c),i)}),vj=l(function(e,r){var a=r;return M(a,{eL:s(ci,n(Qr,a.cN,a.ds+a.aU),e,a.eL)})}),Tp=l(function(e,r){if(r.$){var t=r.a;return mu(M(t,{eL:s(ci,t.aU,e,t.eL)}))}else{var a=r.a;return Gc(n(vj,e,a))}}),mo=l(function(e,r){var a=r.a,t=r.b,o=qo(t),c=o.a,i=o.b,u=e(i),$=u.a,v=u.b;return p(n(Ja,a,n(Tp,p(c,$),t)),v)}),sj=S(function(e,r,a){var t=function(o){var c=s(f$,e,r,o.S),i=c.a,u=c.b;return p(M(o,{S:i}),u)};return n(Jo,function(o){return M(a,{uz:o})},n(mo,t,a.uz))}),Lp=kg,dj=Ft("clearPlayLocalStorage",function(e){return Lp}),bj=Ft("pushUrlReset",function(e){return Lp}),pj=S(function(e,r,a){if(r.$===1)return p(a,fe);if(r.a){var u=r.a;return p(a,dj(0))}else{var t=r.a,o=function($){var v=(function(){var d=a.aY;if(d.b){var b=d.a;return s(At,b,se(function(h){return M(h,{ch:e.aK})}),$.cY)}else return $.cY})();return p(M($,{ch:e.aK,cY:v}),fe)},c=n(mo,o,a.uz),i=c.a;return p(M(a,{uz:i}),bj(0))}}),mj=S(function(e,r,a){var t=function(o){var c=n(Ke,e,o.cY);if(c.$)return p(o,fe);var i=c.a,u=n(vo,r,i.ik),$=s($r,e,M(i,{ik:u}),o.cY);return p(M(o,{cY:$}),fe)};return n(Jo,function(o){return M(a,{uz:o})},n(mo,t,a.uz))}),hj=function(e){return n(Wr,7,e.f)},gj=l(function(e,r){return e?{rS:r.gE.u5,u5:r.gE.rS}:r.gE}),_j=function(e){var r=e;return n(gj,r.dX,r.cQ)},yj=function(e){return _j(e.U)},v1=function(e){return hj(e)?D(yj(e)):T},zp=24,Pu=l(function(e,r){return s(er,.1,1,n(Ge,(e.u5-zp)/r.u5,(e.rS-zp)/r.rS))}),Cj=S(function(e,r,a){var t=n(Pu,e,r),o=function(c){return M(c,{bB:c.bB/t,bJ:c.bJ/t,bQ:c.bQ/t,bW:c.bW/t})};return n(N,function(c){return M(c,{rd:n(N,function(i){return M(i,{lS:o(i.lS)})},c.rd)})},a)}),Pj=S(function(e,r,a){var t=n(Pu,e,r),o=.5*(e.u5-r.u5*t),c=.5*(e.rS-r.rS*t);return M(a,{rS:a.rS/t,bJ:(a.bJ-o)/t,bW:(a.bW-c)/t,u5:a.u5/t})}),Mp=S(function(e,r,a){var t=.5*e.rS-a.pH,o=a.pF+.5*e.u5,c=n(Pu,e,r),i=.5*(e.u5-r.u5*c),u=.5*(e.rS-r.rS*c);return M(a,{pF:(o-i)/c-.5*r.u5,pH:.5*r.rS-(t-u)/c})}),Dp=S(function(e,r,a){var t=s(Mp,e,r,a),o=n(Pu,e,r);return M(t,{hy:a.hy/o,hz:a.hz/o})}),s1=l(function(e,r){if(e.$)return r;var a=e.a;return{dC:s(Cj,r.bT,a,r.dC),eu:r.eu,ev:r.ev,ew:r.ew,hx:r.hx,eH:r.eH,rt:r.rt,hT:r.hT,kt:r.kt,tj:r.tj,gs:r.gs,tm:n(N,n(Pj,r.bT,a),r.tm),tq:r.tq,tx:s(Dp,r.bT,a,r.tx),tH:s(Dp,r.bT,a,r.tH),bT:a,fh:r.fh,iD:r.iD,ea:n(N,n(Mp,r.bT,a),r.ea),fx:r.fx}}),Sj=q(function(e,r,a,t){var o=function(c){var i=n(Ke,r,c.cY);if(i.$)return p(c,fe);var u=i.a,$=$1(c),v=v1(t.bH),d=hu({fM:u.fM,ch:u.ch,aJ:t.aJ,bH:D(t.bH),bI:u.bI,g:n(s1,v,c.g),nN:u.nN,nY:Uc(t.bH),th:w$(u),aP:u.aP,cF:$,pA:u.pA,pJ:k$(t.bH)}),b=I(e.ba.bk,d,c.S,Vn(t.bH),a,u.bK),h=b.a,g=b.b,_=b.c,y=s(qv,ee(jr(t.aY),D(r)),g,{cX:c.ch,jQ:u.ch}),x=s(f$,e,_,c.S),L=x.a,k=x.b,A=s($r,r,M(u,{ch:y.jQ,bK:h}),c.cY);return p(M(c,{ch:y.cX,cY:A,S:L}),Pa(f([n(Vc,No(r),y.hj),k])))};return n(Jo,function(c){return M(t,{uz:c})},n(mo,o,t.uz))}),Hp=function(e){return{$:2,a:e}},Fp=Hp,xj=function(e){return M(e,{f:n(vo,Fp(4),e.f)})},jj=function(e){var r=e.b;return n(Ja,pu,K3(r))},wj=S(function(e,r,a){return{$:7,a:e,b:r,c:a}}),cY=ae,Ap=9729,iY=ae,L$=10497,kj={hJ:!0,mT:L$,h2:Ap,h6:Ap,px:L$},z$=33071,Tj=(function(){var e=kj;return M(e,{mT:z$,px:z$})})(),Bp=function(e){return{$:1,a:e}},Lj={$:0},zj=l(function(e,r){return{$:1,a:e,b:r}}),Mj=l(function(e,r){var a=e.hJ,t=e.px,o=e.mT,c=e.h6,i=e.h2,u=q(function($,v,d,b){var h=$,g=v,_=d,y=b;return Sr(O_,h,g,_,y,a,r)});return C(u,i,c,o,t)}),Dj=l(function(e,r){return n(iu,function(a){return Bp({X:a,ti:e,fu:r})},n(Mj,e,r))}),Ip=9728,Hj={hJ:!0,mT:L$,h2:Ip,h6:Ip,px:L$},Fj=(function(){var e=Hj;return M(e,{mT:z$,px:z$})})(),Aj=l(function(e,r){var a=r.J,t=n(Ke,n(po,0,e),a);if(!t.$&&!t.a.$){var o=t.a.a.at,c=t.a.a.I;return ee(c,ri)?D(o):T}else return T}),M$=function(e){if(e.b){var r=e.a,a=e.b;return D(s(me,Le,r,a))}else return T},Bj=function(e){if(e.b){var r=e.a,a=e.b;return D(s(me,Ge,r,a))}else return T},Ij=l(function(e,r){var a=Bj(n(Fr,function(o){return X(o,e)>-1},r));if(a.$)return n(oe,1,M$(r));var t=a.a;return t}),Rj=S(function(e,r,a){var t=a.J,o=n(Ke,n(po,0,e),t);if(!o.$&&!o.a.$){var c=o.a.a.e6,i=o.a.a.I;if(i.$===2){var u=n(Ij,r,Jf(c));return n(Ke,u,c)}else return T}else return T}),Ej=l(function(e,r){return s(Rj,e,1,r)}),Vj=S(function(e,r,a){return Pa(n(wr,function(t){var o=p(n(Ej,t,a),n(Aj,t,a));if(!o.a.$&&!o.b.$){var c=o.a.a,i=o.b.a,u=i?Fj:Tj;return D(n(Rt,n(wj,e,t),n(Dj,u,c)))}else return T},r))}),Rp=l(function(e,r){var a=op(e)+":";return n(pn,a,r)?n(Aa,Fa(a),r):r}),Oj=l(function(e,r){var a=e,t=r;return n(wr,function(o){var c=o.a,i=o.b;if(i.$)return T;var u=i.a.I;if(ee(u,ri)){var $=n(Ke,c,a.J);if(!$.$&&!$.a.$){var v=$.a.a;return ee(v.I,ri)?T:D(n(Rp,0,c))}else return D(n(Rp,0,c))}else return T},ln(t.J))}),Uj=S(function(e,r,a){var t=function(o){var c=n(Ke,e,o.cY);if(c.$)return p(o,fe);var i=c.a,u=r(i.aP),$=n(Oj,i.aP,u),v=M(i,{aP:u});return p(M(o,{cY:s($r,e,v,o.cY)}),s(Vj,e,$,u))};return n(Jo,function(o){return M(a,{uz:o})},n(mo,t,a.uz))}),qj=l(function(e,r){var a=p(e,r);if(a.a.$===5&&a.b.$===5){var t=a.a.a,o=a.b.a;return ee(dt(t),dt(o))}else return ee(e,r)}),Wj=function(e){switch(e.$){case 0:var r=e.b;return Z(r);case 2:var r=e.b;return Ie(r);case 4:var r=e.a;return r?"true":"false";case 1:var r=e.a;return r;case 3:var a=e.a.aT,t=e.a.D,o=e.a.a4,c=e.a.aX;return n(Or,",",n(N,Z,f([c,o,t,a])));default:var i=e.a;return dt(i)}},Ep=l(function(e,r){var a=hn(n(En,function(t){return t.bc},e));return n(wr,function(t){var o=t.a,c=t.b,i=n(Ke,o,a);if(i.$)return T;var u=i.a;return n(qj,u,c)?T:D(p(o,Wj(c)))},n(En,function(t){return t.bc},r))}),Gj=S(function(e,r,a){return K(n(Ep,e.aK,r),a)}),Nj=Ft("writeUrlParams",mn(function(e){var r=e.a,a=e.b;return n(mn,ae,f([Hr(r),Hr(a)]))})),Zj=l(function(e,r){var a=Oc(r.uz),t=e.fv(a.S);return Nj(s(Gj,e,a.ch,t))}),Jj=S(function(e,r,a){var t=function(u){var $=n(O3,r,u.ch),v=(function(){var d=a.aY;if(d.b){var b=d.a;return s(At,b,se(function(h){return M(h,{ch:$})}),u.cY)}else return u.cY})();return p(M(u,{ch:$,cY:v}),fe)},o=n(mo,t,a.uz),c=o.a,i=M(a,{uz:c});return p(i,n(Zj,e,i))}),D$=l(function(e,r){return r}),Yj=S(function(e,r,a){if(r.$){var o=r.a,c=n(D$,"Play.Runtime.MaterialLoaded failed",p(e,o));return a}else{var t=r.a;return M(a,{nN:s($r,e,t,a.nN)})}}),Kj=q(function(e,r,a,t){var o=function(c){return p(M(c,{cY:s(At,e,se(n(Yj,r,a)),c.cY)}),fe)};return n(Jo,function(c){return M(t,{uz:c})},n(mo,o,t.uz))}),Xj=Rf,ho=function(e){return s(me,l(function(r,a){var t=r.a,o=r.b;return s(jg,t,o,a)}),xg(0),e)},Qj=Ft("assetsLoadRequest",mn(function(e){return ho(f([p("id",Hr(e.bI)),p("instanceId",Hr(e.gb)),p("kind",Hr(e.bf)),p("mips",mn(Xj)(e.dU)),p("url",Hr(e.fu))]))})),d1=function(e){var r=e;return r},ew=l(function(e,r){var a=d1(r);return{bI:a.bI,gb:e,bf:a.bf,dU:a.dU,fu:a.fu}}),Vp=l(function(e,r){return Qj(n(N,ew(e),r))}),Op=Rf,rw=Ft("setInstanceMuted",function(e){return ho(f([p("instanceId",Hr(e.gb)),p("muted",Op(e.sQ))]))}),aw=S(function(e,r,a){var t=function(o){var c=n(Ke,e,o.cY);if(c.$)return p(o,fe);var i=c.a,u=r&&!i.fC,$=M(i,{fC:i.fC||r,pA:r}),v=i.fd?rw({gb:e,sQ:!r}):fe,d=u?n(Vp,e,i.aE):fe;return p(M(o,{cY:s($r,e,$,o.cY)}),Pa(f([d,v])))};return n(Jo,function(o){return M(a,{uz:o})},n(mo,t,a.uz))}),nw=function(e){return e.bp+e.bq},H$=function(e){var r=e;return r},tw=n(cr,nw,H$),Up=function(e){var r=e.bO,a=e.bG,t=e.bq,o=e.bp,c=(o+t)/2|0,i=o+t-c,u=4;if(o+t<2)return e;if(X(o,u*t+1)>0){var $=K(r,Ve(n(lt,c,a))),v=n(vt,c,a);return{bG:v,bO:$,bp:c,bq:i}}else if(X(t,u*o+1)>0){var $=n(vt,c,r),v=K(a,Ve(n(lt,c,r)));return{bG:v,bO:$,bp:c,bq:i}}else return e},ow=function(e){var r=e.bO,a=e.bG,t=p(a,r);if(t.a.b){var i=t.a,u=i.a,$=i.b;return p(D(u),Up({bG:$,bO:e.bO,bp:e.bp-1,bq:e.bq}))}else if(t.b.b){if(t.b.b.b)return p(T,g$);var o=t.b,c=o.a;return p(D(c),g$)}else return p(T,g$)},qp=n(cr,n(cr,Zo(ae),ow),H$),Wp=l(function(e,r){return X(tw(r),e)>0?n(Wp,e,qp(r).b):r}),Gp=l(function(e,r){var a=qp(r);if(a.a.$){var c=a.a;return r}else{var t=a.a.a,o=a.b;return X(t.lg,e)<0?n(Gp,e,o):r}}),Np=60,cw=l(function(e,r){var a=r;return e(a)}),iw=l(function(e,r){var a=r;return n(cw,Up,{bG:a.bG,bO:n(F,e,a.bO),bp:a.bp,bq:a.bq+1})}),uw=1,fw=l(function(e,r){var a=r,t=a.kg+e,o=t-uw;return{kg:t,gB:n(Wp,Np,n(iw,{hx:e,lg:t},n(Gp,o,a.gB)))}}),$w=l(function(e,r){return M(r,{dg:n(fw,e.hx,r.dg)})}),Zp=function(e){var r=e.b;return qo(r).a},Jp=l(function(e,r){var a=Zp(e.uz);return M(a,{ch:r.ch,nY:Uc(e.bH)})}),F$={$:2},Yp=function(e){var r=e.a;return ee(r,F$)},b1=function(e){var r=e.a;return r.$===3},Et=function(e){return Yp(e)||b1(e)},Kp={$:13},lw=l(function(e,r){return e}),Xp="play-scrollport",vw=function(e){var r=S(function(o,c,i){return n(Rt,lw(Kp),s(Ko,o,c,i))}),a=s(r,Xp,e.gs.bJ,e.gs.bW),t=n(N,function(o){return s(r,"measure-frame--"+o.rB,o.t2.bJ,o.t2.bW)},e.dC);return Pa(n(F,a,t))},sw={$:4},p1=l(function(e,r){return{$:1,a:e,b:r}}),uY=0,Qp={$:0},A$={$:1},ec=function(e){return{$:3,a:e}},fY=1,ii=l(function(e,r){return{$:0,a:e,b:r}}),dw={$:2},bw=l(function(e,r){return{bJ:e,bQ:r}}),Br=function(e){var r=e.a;return r},B$=l(function(e,r){var a=r.aD,t=function(u){return n(oe,0,n(se,function($){return $.dv},n(qr,u,a)))},o=l(function(u,$){e:for(;;){if(X(u,$)>-1)return u;if(X(e,t((u+$)/2|0))<1){var v=u,d=(u+$)/2|0;u=v,$=d;continue e}else{var v=((u+$)/2|0)+1,d=$;u=v,$=d;continue e}}}),c=Br(a),i=n(o,0,c);return i?ee(i,c)?c-1:X(e-t(i-1),t(i)-e)<1?i-1:i:0}),Su=l(function(e,r){var a=e.a,t=e.b,o=r.aD,c=r.gx,i=a?n(oe,c,n(se,function($){return $.dv},n(qr,a-1,o))):c,u=n(oe,c,n(se,function($){return $.dv},n(qr,t,o)));return p(i,u)}),Pn={nU:100,oM:24,ix:100,iL:400,iM:900,pc:4},la=l(function(e,r){return r/Pn.iM*(e.bQ-e.bJ)}),xu=S(function(e,r,a){var t=r.a,o=r.b,c=function(V){return n(la,e,V.hr-V.kI)},i=n(Su,p(1,Br(a.aD)-2),a),u=i.a,$=i.b,v=n(Su,p(o.c$+1,o.cT-1),a),d=v.a,b=v.b,h=n(Su,p(o.c$,o.cT),a),g=h.a,_=h.b;if(t.$)if(t.a){var k=t.a,x=t.b,A=s(er,d,$,_+c(x));return p(p(g,o.c$),p(A,n(B$,A,a)))}else{var y=t.a,x=t.b,L=s(er,u,b,g+c(x));return p(p(L,n(B$,L,a)+1),p(_,o.cT))}else return p(p(g,o.c$),p(_,o.cT))}),va=$h,pw=q(function(e,r,a,t){var o=e.n_,c=e.oQ,i=e.oP,u=t.bQ-t.bJ,$=a-r,v=n(Ge,$,n(Le,Pn.nU,u*n(va,1.002,c))),d=i*.001*v,b=t.bJ+o*u-o*v,h=b+v,g=h+d,_=b+d,y=X(_,r)<0?p(r,r+v):X(g,a)>0?p(a-v,a):p(_,g),x=y.a,L=y.b;return{bJ:x,bQ:L}}),em=l(function(e,r){var a=p(e,r);e:for(;;)switch(a.a.$){case 2:var t=a.a;return A$;case 3:var o=a.a;return dw;case 4:var c=a.a;return x3;case 0:var i=a.a.a,u=p(0,Br(i.aD)-1),$=u.a,v=u.b,d=n(Su,p($,v),i),b=d.a,h=d.b;return ec({cp:T,d_:i,bo:n(ii,Qp,{cT:v-1,c$:1}),a9:n(bw,b,h)});case 1:if(a.b.$===3){var g=a.a.a,_=a.b.a,y=p(0,Br(_.d_.aD)-1),$=y.a,v=y.b,x=n(Su,p($,v),_.d_),L=x.a,k=x.b,A=C(pw,g,L,k,_.a9);return ec(M(_,{a9:A}))}else break e;case 5:if(a.b.$===3){var V=a.a.a.fL,_=a.b.a,E=_.bo,G=E.b;return ec(M(_,{bo:n(ii,n(p1,0,{hr:V,kI:V}),G)}))}else break e;case 6:if(a.b.$===3){var V=a.a.a.fL,_=a.b.a,J=_.bo,G=J.b;return ec(M(_,{bo:n(ii,n(p1,1,{hr:V,kI:V}),G)}))}else break e;case 7:if(a.b.$===3){var V=a.a.a.fL,_=a.b.a,te=_.bo;if(te.a.$===1){var $e=te.a,pe=$e.a,ke=$e.b,G=te.b;return ec(M(_,{bo:n(ii,n(p1,pe,M(ke,{hr:V})),G)}))}else return r}else break e;case 8:if(a.b.$===3){var Fe=a.a,_=a.b.a,De=_.bo;if(De.a.$===1){var fr=De.a,ce=s(xu,_.a9,_.bo,_.d_),Ue=ce.a,rr=Ue.b,ar=ce.b,Dr=ar.b;return ec(M(_,{bo:n(ii,Qp,{cT:Dr,c$:rr})}))}else return r}else break e;default:if(a.b.$===3){var Qe=a.a.a,_=a.b.a;return ec(M(_,{cp:Qe}))}else break e}return r}),mw=em(sw),m1={$:2},hw=function(e){return{$:1,a:e}},I$=function(e){return{$:0,a:e}},rm=function(e){return{$:1,a:e}},go=function(e){return{$:0,a:e}},ju=12,R$=72,_o=function(e){switch(e){case 0:return{pF:I$(R$),pH:go(ju)};case 1:return{pF:I$(R$+44),pH:go(ju+44)};case 2:return{pF:rm(12),pH:go(ju)};case 3:return{pF:m1,pH:go(100)};case 4:return{pF:m1,pH:hw(40)};case 5:return{pF:I$(R$),pH:go(ju)};case 6:return{pF:m1,pH:go(80)};default:return{pF:I$(R$),pH:go(ju)}}},h1=function(e){return e.$===3},gw=l(function(e,r){if(e.$)return r;var a=e.a;return M(r,{aN:n(F,a,n(Fr,e$(a),r.aN))})}),am=function(e){return{pF:e.tH.pF+.5*e.bT.u5,pH:-e.tH.pH+.5*e.bT.rS}},nm=l(function(e,r){var a=am(e);return{pF:r.hn.pF+(a.pF-r.hL.pF),pH:r.hn.pH+(a.pH-r.hL.pH)}}),tm=l(function(e,r){var a="-titlebar",t="draggable-panel-",o="-no-drag",c=function(i){e:for(;;)if(i.b){var u=i.a,$=i.b;if(n(pn,t,u)&&n(O2,o,u)){if(e.jd)return T;var v=$;i=v;continue e}else{if(n(pn,t,u)&&n(g3,a,u))return D(n(h3,Fa(a),n(Aa,Fa(t),u)));var v=$;i=v;continue e}}else return T};return c(r)}),_w=function(e){return n(tm,{jd:!0},e)},yw=function(e){return n(tm,{jd:!1},e)},Cw=l(function(e,r){switch(r.$){case 0:var a=r.a;return a;case 1:var a=r.a;return e-a;default:return e/2}}),Pw=l(function(e,r){if(r.$){var a=r.a;return e-a}else{var a=r.a;return a}}),E$=12,om=S(function(e,r,a){var t=E$-r,o=e-E$-r;return X(o,t)<1?t:s(er,t,o,a)}),Sw=S(function(e,r,a){return{pF:s(om,e.bT.u5,n(Cw,e.bT.u5,r.pF),a.pF),pH:s(om,e.bT.rS,n(Pw,e.bT.rS,r.pH),a.pH)}}),xw=S(function(e,r,a){return n(oe,e,n(se,l$,jr(n(Fr,function(t){var o=t.a;return ee(o,r)},a.c_))))}),jw={pF:0,pH:0},cm=q(function(e,r,a,t){return s(Sw,e,r,s(xw,jw,a,t))}),ww=S(function(e,r,a){return n(F,p(e,r),n(Fr,function(t){var o=t.a;return!ee(o,e)},a))}),im=S(function(e,r,a){var t=a,o=t.ey;if(o.$===1)if(e.tH.jx){var c=function(g){return n(ea,function(_){return n(se,Bt(_),r(_))},n(ea,t.rZ,g(e.tH.rc)))},i=n(gw,n(se,Fn,c(yw)),t),u=c(_w);if(u.$)return i;var $=u.a,v=$.a,d=$.b;return M(i,{ey:D({hn:C(cm,e,d,v,i),hL:am(e),bI:v})})}else return a;else{var b=o.a;if(e.tH.sc)return a;var h=n(nm,e,b);return M(t,{ey:T,c_:s(ww,b.bI,h,t.c_)})}}),kw=l(function(e,r){var a=n(ea,function(c){var i=c.kR-e.hx;return i<=0?T:D(M(c,{kR:i}))},r.en),t=s(im,e,n(cr,D,_o),r.f),o=h1(r.aO)&&!n(Wr,3,t)?mw(r.aO):r.aO;return M(r,{en:a,f:t,aO:o})}),wu=12,um=function(e){return{pF:rm(wu),pH:go(wu+e*40)}},Tw=l(function(e,r){return n(se,um,n(b$,function(a){return ee(a.bI,r)},e))}),fm=function(e){return ae},V$=l(function(e,r){if(r.$===-2)return ut;var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e;return I(Re,a,t,n(e,t,o),n(V$,e,c),n(V$,e,i))}),Lw=l(function(e,r){var a=hn(n(N,function(i){return p(d1(i).bI,i)},r)),t=n(V$,l(function(i,u){return d1(u).bf}),a),o=n(wr,function(i){var u=i.a,$=i.b;return n(h$,u,e)?T:D($)},ln(a)),c=n(wr,function(i){var u=i.a,$=i.b;return n(h$,u,a)?T:D({bI:u,bf:$})},ln(e));return{sq:t,uF:o,uG:c}}),zw=function(e){return e.fd&&!e.pA},Mw=Ft("assetsUnload",mn(function(e){return ho(f([p("id",Hr(e.bI)),p("instanceId",Hr(e.gb)),p("kind",Hr(e.bf))]))})),Dw=l(function(e,r){return{bI:r.bI,gb:e,bf:r.bf}}),Hw=l(function(e,r){return Mw(n(N,Dw(e),r))}),Fw=I0(function(e,r,a,t,o,c,i,u,$){var v=n(Ke,u,$.cY);if(v.$)return $;var d=v.a;if(zw(d))return $;var b=d.fM+r.g.hx,h=hu({fM:b,ch:d.ch,aJ:o,bH:D(a),bI:d.bI,g:n(s1,c,r.g),nN:d.nN,nY:Uc(a),th:w$(d),aP:d.aP,cF:t,pA:d.pA,pJ:k$(a)}),g=s(fm,"play:onTick",s(e.ba.bl,h,r.S,Vn(a)),d.bK),_=g.a,y=g.b,x=g.c,L=s(qv,ee(i,D(u)),y,{cX:$.cn,jQ:d.ch}),k=C(e.aE,h,r.S,Vn(a),_),A=n(Lw,d.hs,k),V=nr(A.uF)?fe:n(Vp,u,A.uF),E=nr(A.uG)?fe:n(Hw,u,A.uG),G=C(e.ba.cu,h,r.S,Vn(a),_),J=s(im,h,Tw(G),d.ik);return M($,{cP:n(F,V,n(F,E,n(F,n(Vc,No(u),L.hj),$.cP))),cU:K($.cU,x),cn:L.cX,cY:s($r,u,M(d,{fM:b,ch:L.jQ,hs:A.sq,bK:_,ik:J}),$.cY)})}),Aw=function(e){var r=e.c8;if(r.$){var t=e.js;if(t.$)return T;var o=t.a;return n(Wo,o,e.aY)?e.js:T}else{var a=r.a;return D(a)}},$m=function(e){return{$:3,a:e}},lm=function(e){var r=e.b;return qo(r).a.fM},Bw=function(e){var r=e;return M(r,{aU:n(Ge,r.mc-1,r.aU+1)})},Iw=function(e){if(e.$){var a=e.a;return mu(M(a,{aU:n(Ge,Br(a.eL)-1,a.aU+1)}))}else{var r=e.a;return Gc(Bw(r))}},Rw=function(e){var r=e;return r.aU},vm=function(e){if(e.$){var a=e.a;return a.aU}else{var r=e.a;return Rw(r)}},Ew=function(e){var r=e;return r.mc},sm=function(e){if(e.$){var a=e.a;return Br(a.eL)}else{var r=e.a;return Ew(r)}},Vw=function(e){return ee(vm(e),sm(e)-1)},Ow=function(e){var r=e.a,a=e.b;return Vw(a)?T:D(n(Ja,r,Iw(a)))},g1=R7,dm=D7,ku=q(function(e,r,a,t){var o=Uo&r>>>e;if(X(o,it(t))>-1){if(e===5)return n(g1,Dc(a),t);var c=Hc(C(ku,e-Hn,r,a,Io));return n(g1,c,t)}else{var i=n(vu,o,t);if(i.$){var c=Hc(C(ku,e-Hn,r,a,dm(i)));return s(oi,o,c,t)}else{var u=i.a,c=Hc(C(ku,e-Hn,r,a,u));return s(oi,o,c,t)}}}),_1=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=it(c),u=it(e),$=a+(u-i);if(ee(u,Ur)){var v=X($>>>Hn,1<<t)>0;if(v){var d=t+Hn,b=C(ku,d,a,e,dm(Hc(o)));return C(io,$,d,b,Io)}else return C(io,$,t,C(ku,t,a,e,o),Io)}else return C(io,$,t,o,e)}),Tu=l(function(e,r){var a=r.d;return n(_1,n(g1,e,a),r)}),Uw=l(function(e,r){var a=r;return X(a.mc,a.cN)<0?M(a,{mc:a.mc+1,aU:a.mc,eL:s(ci,n(Qr,a.cN,a.ds+a.mc),e,a.eL)}):M(a,{aU:a.cN-1,eL:s(ci,a.ds,e,a.eL),ds:n(Qr,a.cN,a.ds+1)})}),qw=l(function(e,r){if(r.$){var t=r.a;return mu(M(t,{aU:Br(t.eL),eL:n(Tu,e,t.eL)}))}else{var a=r.a;return Gc(n(Uw,e,a))}}),bm=l(function(e,r){return M(r,{dC:e.dC,fM:r.fM+e.hx,eu:e.eu,ev:e.ev,ew:e.ew,hx:e.hx,eH:e.eH,rt:e.rt,hT:e.hT,gs:e.gs,tx:e.tx,tH:e.tH,bT:e.bT,fh:e.fh,ea:e.ea,fx:e.fx})}),Ww=S(function(e,r,a){var t=a.a,o=a.b;switch(t.$){case 2:return p(a,fe);case 3:var c=t.a.lb;return p((X(c+r.hx,lm(a))>0?n(Pe,Ow,oe(n(Ja,F$,o))):ae)(n(Ja,$m({lb:c+r.hx}),o)),fe);case 1:var i=qo(o),v=i.a,d=i.b,b=n(bm,r,v),u=n(e,b,d),g=u.a,_=u.b;return p(n(Ja,Gv,n(qw,p(b,g),o)),_);default:var $=qo(o),v=$.a,d=$.b,b=n(bm,r,v),h=n(e,b,d),g=h.a,_=h.b;return p(n(Ja,pu,n(Tp,p(b,g),o)),_)}}),Gw=S(function(e,r,a){var t=mp({kw:r.tm,kN:c1(a.aY),ad:r.tx,u6:r.bT}),o=Aw({c8:t.c8,js:a.aJ,aY:a.aY}),c=n($w,r,a.bH),i=l(function(g,_){var y=t,x=M(_,{g:r}),L=v1(c),k=s(me,ua(Fw,e,x,c,y,o,L,jr(a.aY)),{cP:P,cU:P,cn:x.ch,cY:x.cY},a.aY),A=s(f$,e,k.cU,x.S),V=A.a,E=A.b;return p(M(x,{ch:k.cn,cY:k.cY,S:V}),Pa(n(F,E,k.cP)))}),u=s(Ww,i,r,a.uz),$=u.a,v=u.b,d=n(kw,n(Jp,M(a,{uz:$}),Oc($)),c),b=(function(){var g=d.lu;return M(d,{lu:M(g,{rr:T})})})(),h=Et($)?vw(Zp($)):fe;return p(M(a,{aJ:o,bH:b,uz:$}),Pa(f([v,h])))}),$Y=1,lY=0,Lu=function(e){var r=e;return M(r,{dM:!1})},Nw=function(e){var r=e;return M(r,{bm:Lu(r.bm)})},Zw=function(e){var r=e;return M(r,{bm:Lu(r.bm)})},pm=function(e){return{$:14,a:e}},mm="play-command-palette",y1={fN:mm,e2:320,kH:"Type a command\u2026",d6:pm,u5:{sF:400,u1:50}},hm=3,Jw=l(function(e,r){return!h1(e)&&h1(r)}),Yw=function(e){switch(e){case 0:return 1;case 1:return 2;default:return 0}},Kw=E_("focus"),gm=function(e){return e.fN+"-search"},zu=l(function(e,r){var a=r,t=n(oe,0,n(ea,function(c){return n(p$,c,a.aV)},a.eR)),o=n(N3,e,t);return p(M(a,{dM:!0,b5:o,az:t}),Pa(f([n(Rt,function(c){return e.d6(Ia)},Kw(gm(e))),n(Rt,function(c){return e.d6(Ia)},s(Ko,Yo(e),0,o))])))}),Xw=l(function(e,r){var a=r,t=n(zu,Yc(e),n(du,D(a.cQ),a.bm)),o=t.a,c=t.b;return p(M(a,{bm:o}),c)}),Qw=S(function(e,r,a){var t=a,o=n(zu,Kc(e),n(du,Vv(r),t.bm)),c=o.a,i=o.b;return p(M(t,{bm:c}),i)}),ek=f1,C1={$:2},_m=function(e){return{$:1,a:e}},rk={$:3},P1=function(e){return{$:0,a:e}},S1=l(function(e,r){return e<0?T:jr(n(lt,e,r))}),ak=l(function(e,r){e:for(;;){var a=p(e,r);if(a.a.b)if(a.b.b){var t=a.a,o=t.a,c=t.b,i=a.b,u=i.a,$=i.b;if(ee(o,u)){var v=c,d=$;e=v,r=d;continue e}else{var v=e,d=$;e=v,r=d;continue e}}else return!1;else return!0}}),nk=q(function(e,r,a,t){return{lN:r,mQ:e,ov:a,ow:t}}),tk=2,ok=ah,ck=12,ik=-3,uk=-1,fk=-1,x1=16,rc=-n(va,2,30),$k=Te(function(e,r,a,t,o){var c=I(ok,nk,r,a,t,o),i={fR:P,eY:0,hU:rc,hV:rc,hW:rc,gk:P},u=e.na?fk:ik,$=l(function(d,b){var h=d.ow,g=d.ov,_=d.lN,y=d.mQ,x=ee(y,e.ok)?e.m9?b.eY*uk+x1+_*tk:b.eY?n(Le,b.hW+x1+_,b.hV+x1+ck):rc:rc,L=n(Le,x,b.hU+u);return{fR:n(F,x,b.fR),eY:b.eY+1,hU:L,hV:g,hW:h,gk:n(F,L,b.gk)}}),v=s(me,$,i,c);return p(Ve(v.fR),Ve(v.gk))}),lk=function(e){return s(me,l(function(r,a){return r}),rc,e)},vk=S(function(e,r,a){e:for(;;){if(r<=0)return e;var t=n(F,a,e),o=r-1,c=a;e=t,r=o,a=c;continue e}}),sk=l(function(e,r){return s(vk,P,e,r)}),dk=S(function(e,r,a){var t=xr(e),o=xr(r),c=n(sk,o,rc),i=n(Za,Bt,e),u=s(me,l(function(v,d){var b=v.a,h=v.b,g=d.a,_=d.b;return I($k,{m9:!b,na:ee(b,t-1),ok:h},r,a,g,_)}),p(c,c),i),$=u.b;return lk($)}),bk=l(function(e,r){var a=r;if(Vo(e))return D(0);var t=n(N,Lv,qc(e));return n(ak,t,a.j2)?D(s(dk,t,a.j2,a.lO)):T}),j1=function(e){return{$:8,a:e}},ym=l(function(e,r){var a=bo*r.az,t=a-r.b5,o=r.b5+e.e2-(a+bo);if(t<0)return n(Rt,function(i){return e.d6(j1(a))},s(Ko,Yo(e),0,a));if(o<0){var c=r.b5-o;return n(Rt,function(i){return e.d6(j1(c))},s(Ko,Yo(e),0,c))}else return fe}),pk=th,w1=S(function(e,r,a){var t=a;switch(r.$){case 0:var o=r.a,c=Vo(o)?n(N,Fn,t.io):n(N,l$,n(pk,l(function(x,L){var k=x.a,A=L.a;return n(gv,A,k)}),n(wr,function(x){var L=x.a,k=x.b;return n(se,function(A){return p(A,L)},n(bk,o,k))},t.io)));return R(M(t,{aV:c,b5:0,iC:o,az:0}),n(Rt,function(x){return e.d6(Ia)},s(Ko,Yo(e),0,0)),n(se,P1,jr(c)));case 1:var g=n(Le,0,t.az-1),i=M(t,{az:g});return R(i,n(ym,e,i),n(se,P1,n(S1,g,t.aV)));case 2:var g=n(Ge,xr(t.aV)-1,t.az+1),i=M(t,{az:g});return R(i,n(ym,e,i),n(se,P1,n(S1,g,t.aV)));case 3:var u=n(S1,t.az,t.aV);if(u.$===1)return R(M(t,{dM:!1}),fe,D(C1));var $=u.a;return R(M(t,{eR:D($),dM:!1}),fe,D(_m($)));case 4:return R(M(t,{dM:!1}),fe,D(C1));case 10:var v=n(zu,e,t),d=v.a,b=v.b;return R(d,b,D(rk));case 5:var h=r.a;return R(M(t,{eR:D(h),dM:!1}),fe,D(_m(h)));case 6:var h=r.a,g=n(oe,t.az,n(p$,h,t.aV));return R(M(t,{az:g}),fe,T);case 7:return R(M(t,{dM:!1}),fe,D(C1));case 8:var _=r.a;return R(M(t,{b5:_}),fe,T);case 9:var y=r.a;return R(t,n(Rt,function(x){return e.d6(Ia)},s(Ko,Yo(e),0,t.b5+y)),T);default:return R(t,fe,T)}}),mk=S(function(e,r,a){var t=a;if(r.$===1){var o=r.a;return p(M(t,{dX:o}),fe)}else{var c=r.a,i=s(w1,Yc(e),c,t.bm),u=i.a,$=i.b,v=i.c,d=(function(){e:for(;;){if(v.$)break e;switch(v.a.$){case 1:var b=v.a.a;return b;case 0:var b=v.a.a;return b;default:break e}}return t.cQ})();return p(M(t,{cQ:d,bm:u}),$)}}),hk=function(e){var r=e;return nr(r.q)?k3(e):w3(e)},Mu=function(e){var r=e;return 1+xr(r.o)+xr(r.q)},gk=function(e){return n(st,Mu(e)-1,e)},_k=function(e){var r=e,a=r.o;if(a.b){var t=a.a,o=a.b;return{q:n(F,r.fP,r.q),o,fP:t}}else return r},yk=function(e){var r=e;return nr(r.o)?gk(e):_k(e)},Cm=S(function(e,r,a){var t=e(a.c4);return R(M(a,{c4:t}),n(Zv,dt(t),r),fe)}),Ck=q(function(e,r,a,t){var o=t;switch(r.$){case 1:var c=r.a,i=n(oe,o.c4,n(T3,c,o.c4));return R(M(o,{c4:i}),n(Zv,c,a),fe);case 2:return s(Cm,yk,a,o);case 3:return s(Cm,hk,a,o);default:var u=r.a,$=s(w1,Kc(e),u,o.bm),v=$.a,d=$.b,b=$.c,h=(function(){if(b.$)return a;switch(b.a.$){case 1:var g=b.a.a;return n(Jv,g,a);case 0:var g=b.a.a;return n(Jv,g,a);case 2:var _=b.a;return a;default:var y=b.a;return a}})();return R(M(o,{bm:v}),h,d)}}),Ra=function(e){return{$:1,a:e}},k1=function(e){return{$:2,a:e}},Du=function(e){return{$:0,a:e}},Hu={$:1},Pm={$:3},Pk=500,Sk=200,xk=l(function(e,r){var a=p(r,e);if(a.a.$)switch(a.b.$){case 0:var y=a.a.a,$=a.b,c=$.a,i=$.b,v=(function(){var G=y._;switch(G.$){case 0:return Du(0);case 1:return Hu;case 2:return Hu;default:return Pm}})();return Ra({bz:i,ex:c.ex,eZ:c.eZ,_:v,t8:c.t8});case 1:var y=a.a.a,d=a.b,b=y._;switch(b.$){case 0:return bu;case 1:return Ra(M(y,{_:k1(0)}));case 2:return Ra(M(y,{_:k1(0)}));default:return bu}case 2:var y=a.a.a,h=a.b;return Ra(M(y,{_:Pm}));case 3:var y=a.a.a,g=a.b,_=y._;switch(_.$){case 0:return Ra(M(y,{_:Du(0)}));case 1:return Ra(M(y,{_:Hu}));case 2:return Ra(M(y,{_:Hu}));default:return Ra(M(y,{_:Du(0)}))}default:var y=a.a.a,x=a.b.a,L=y._;switch(L.$){case 0:var k=L.a,A=k+x;return X(A,Pk)>0?Ra(M(y,{_:Hu})):Ra(M(y,{_:Du(A)}));case 2:var k=L.a,A=k+x;return X(A,Sk)>0?bu:Ra(M(y,{_:k1(A)}));case 1:return Ra(y);default:return Ra(y)}}else if(a.b.$){var u=a.a;return bu}else{var t=a.a,o=a.b,c=o.a,i=o.b;return Ra({bz:i,ex:c.ex,eZ:c.eZ,_:Du(0),t8:c.t8})}}),jk=l(function(e,r){var a=r;return n(xk,e,a)}),wk=S(function(e,r,a){var t=e.qB,o=e.gD;switch(r.$){case 0:var sr=r.a;if(o.co){var c=C(Ck,Xc,sr,a.e,a.T),i=c.a,y=c.b,u=c.c;return R(M(a,{T:i,e:y}),u,T)}else return R(a,fe,T);case 1:var sr=r.a;if(o.dI){var $=s(mk,C$,sr,a.U),Ue=$.a,v=$.b;return R(M(a,{U:Ue}),v,T)}else return R(a,fe,T);case 2:var sr=r.a;return R(M(a,{c1:n(jk,sr,a.c1)}),fe,T);case 3:var sr=r.a,d=a.aO,b=n(em,sr,d),h=n(Jw,d,b),g=h?n(vo,Fv(3),a.f):a.f;return R(M(a,{f:g,aO:b}),fe,T);case 4:if(o.co){var y=Yv(a.e),_=s(Wv,Xc,y,a.T),pe=_.a,u=_.b;return R(M(a,{T:pe,e:y}),u,T)}else return R(a,fe,T);case 5:var y=r.a;if(!o.co||ee(y,a.e))return R(a,fe,T);var x=s(Wv,Xc,y,a.T),pe=x.a,u=x.b;return R(M(a,{T:pe,e:y}),u,T);case 6:var sr=r.a,L=n(Wr,6,a.f),k=n(Wr,5,a.f),A=n(vo,sr,a.f),V=n(Wr,6,A),E=n(Wr,5,A),G=n(Wr,7,a.f),J=n(Wr,7,A),te=a.lu,$e=!k&&E?s(Qw,Xc,a.e,a.T):p(k&&!E?Zw(a.T):a.T,fe),pe=$e.a,ke=$e.b,Fe=(function(){if(L&&!V)return p(M(te,{R:Lu(te.R)}),fe);if(!L&&V){var rt=n(zu,y1,te.R),_r=rt.a,Mt=rt.b;return p(M(te,{R:_r}),Mt)}else return p(te,fe)})(),De=Fe.a,fr=Fe.b,ce=!G&&J?n(Xw,C$,a.U):p(G&&!J?Nw(a.U):a.U,fe),Ue=ce.a,rr=ce.b;return R(M(a,{lu:De,U:Ue,f:A,T:pe}),Pa(f([fr,ke,rr])),T);case 7:return R(M(a,{pJ:!a.pJ}),fe,T);case 8:return R(M(a,{bP:!a.bP}),fe,T);case 9:var ar=r.a;return R(M(a,{en:D({bz:ar,h9:!t,kR:hm})}),fe,t?D(0):T);case 10:return R(a,fe,D(1));case 11:var Dr=r.a;return!o.dJ||ee(Dr,a.nY)?R(a,fe,T):R(M(a,{nY:Dr}),fe,T);case 12:return o.dJ?R(M(a,{nY:Yw(a.nY)}),fe,T):R(a,fe,T);case 13:if(n(Cu,o,a.lu.R)){var L=n(Wr,6,a.f),A=n(vo,ek(6),a.f),te=a.lu,Qe=L?p(Lu(te.R),fe):n(zu,y1,te.R),i=Qe.a,u=Qe.b;return R(M(a,{lu:M(te,{R:i}),f:A}),u,T)}else return R(a,fe,T);case 14:var sr=r.a;if(n(Cu,o,a.lu.R)){var te=a.lu,Er=s(w1,y1,sr,a.lu.R),i=Er.a,u=Er.b,oa=Er.c,Wa=(function(){e:for(;;){if(oa.$)break e;switch(oa.a.$){case 1:return!0;case 2:var Dt=oa.a;return!0;default:break e}}return!1})(),tn=Wa?n(vo,Fp(6),a.f):a.f,De=(function(){if(!oa.$&&oa.a.$===1){var Dt=oa.a.a;return M(te,{R:Lu(i),rr:D(p(Dt.iF,Dt.eZ))})}else return M(te,{R:i})})();return R(M(a,{lu:De,f:tn}),u,T)}else return R(a,fe,T);default:return R(a,fe,T)}}),kk=l(function(e,r){var a=r;return M(a,{aU:s(er,0,a.mc-1,e)})}),Tk=l(function(e,r){if(r.$){var t=r.a;return mu(M(t,{aU:s(er,0,Br(t.eL)-1,e)}))}else{var a=r.a;return Gc(n(kk,e,a))}}),Lk=l(function(e,r){var a=r.b;return n(Ja,F$,n(Tk,e,a))}),zk=function(e){var r=e.b;return n(Ja,F$,r)},Mk=function(e){var r=e.b;return n(Ja,$m({lb:lm(e)}),r)},Dk=l(function(e,r){switch(e.$){case 1:return zk(r);case 2:return X3(r);case 3:return Mk(r);default:var a=e.a;return n(Lk,a,r)}}),Hk=S(function(e,r,a){switch(r.$){case 0:var t=r.a;return s(Gw,e,t,a);case 1:var o=r.a,c=r.b;return C(Sj,e,o,c,a);case 2:var d=r.a,i=r.b;return s(mj,d,i,a);case 3:var u=r.a;return s(sj,e,f([u]),a);case 4:var d=r.a,$=r.b;return s(aw,d,$,a);case 5:var d=r.a,v=r.b;return s(Uj,d,v,a);case 6:return p(a,fe);case 7:var d=r.a,b=r.b,h=r.c;return C(Kj,d,b,h,a);case 8:return p(M(a,{ho:T}),fe);case 9:var g=r.a,_=Oc(a.uz).ch,y=!nr(n(Ep,e.aK,_)),x=s(wk,{qB:y,gD:e.bH},g,a.bH),L=x.a,k=x.b,A=x.c,V=s(pj,e,A,M(a,{bH:L})),E=V.a,G=V.b;return p(E,Pa(f([n(Vc,u$,k),G])));case 10:var J=r.a;return p(M(a,{uz:n(Dk,J,a.uz)}),fe);case 11:return bp(a.bH)?p(M(a,{bH:xj(a.bH),uz:jj(a.uz)}),fe):p(M(a,{bH:q3(a.bH)}),fe);case 12:var te=r.a;return s(Jj,e,te,a);default:return p(a,fe)}}),Fk=Ft("setLocalStorage",function(e){return ho(f([p("key",Hr(e.jT)),p("value",Hr(e.uY))]))}),Ak=l(function(e,r){var a=r.a,t=r.b,o=n(c3,e,a),c=n(wr,function(i){var u=i.a,$=i.b;return ee(n(lo,u,a.gf),D($))?T:D(Fk({jT:u,uY:$}))},o);return nr(c)?p(a,t):p(M(a,{gf:o}),Pa(n(F,t,c)))}),Bk=S(function(e,r,a){return n(Ak,e,s(Hk,e,r,a))}),Ik=function(e){return{$:12,a:e}},Rk={$:8},Sm=In,Ek=$n("button"),ui=$n("code"),Vk=$n("li"),O$=$n("p"),Ok=$n("ul"),Uk=function(e){if(e.$){var r=e.a;return n(Bn,f([n(Q,"margin-top","0.4rem")]),f([n(O$,f([n(Q,"margin","0 0 0.25rem 0")]),f([Zr("Two or more instances share the same id:")])),n(Ok,f([n(Q,"margin","0 0 0.5rem 0"),n(Q,"padding-left","1.25rem")]),n(N,function(a){return n(Vk,P,f([n(ui,P,f([Zr(a)]))]))},r)),n(O$,f([n(Q,"margin","0")]),f([Zr("Each "),n(ui,P,f([Zr("Play.instance")])),Zr(" needs a unique "),n(ui,P,f([Zr("id")])),Zr(" \u2014 the runtime keys per-instance state, asset registries, and DOM nodes by it.")]))]))}else return n(Bn,f([n(Q,"margin-top","0.4rem")]),f([n(O$,f([n(Q,"margin","0")]),f([n(ui,P,f([Zr("Play.multipage")])),Zr(" was called with an empty "),n(ui,P,f([Zr("instances")])),Zr(" list. Add at least one "),n(ui,P,f([Zr("Play.instance { ... }")])),Zr(" to the list.")]))]))},qk=$n("details"),xm=function(e){return{$:0,a:e}},U$=qb,Wk=l(function(e,r){return n(U$,e,xm(r))}),Gk=function(e){return n(Wk,"click",re(e))},Nk=$n("strong"),Zk=$n("summary"),Jk=function(e){return n(Bn,f([n(Q,"position","fixed"),n(Q,"top","1rem"),n(Q,"left","50%"),n(Q,"transform","translateX(-50%)"),n(Q,"max-width","min(40rem, calc(100vw - 2rem))"),n(Q,"padding","1rem 2.75rem 1rem 1.25rem"),n(Q,"background","#fff5f5"),n(Q,"color","#742a2a"),n(Q,"border","1px solid #fc8181"),n(Q,"border-radius","0.5rem"),n(Q,"box-shadow","0 4px 24px rgba(0, 0, 0, 0.15)"),n(Q,"font-family","system-ui, -apple-system, sans-serif"),n(Q,"font-size","0.95rem"),n(Q,"line-height","1.5"),n(Q,"z-index","2147483647")]),f([n(Nk,f([n(Q,"display","block"),n(Q,"color","#c53030"),n(Q,"margin-bottom","0.35rem")]),f([Zr("This page has a configuration problem.")])),n(O$,f([n(Q,"margin","0 0 0.5rem 0")]),f([Zr("Please notify the page author so they can fix it.")])),n(qk,f([n(Q,"margin-top","0.5rem"),n(Q,"color","#742a2a"),n(Q,"font-size","0.88rem")]),f([n(Zk,f([n(Q,"cursor","pointer"),n(Q,"user-select","none")]),f([Zr("Technical detail (for the developer)")])),Uk(e)])),n(Ek,f([Gk(Rk),n(Sm,"aria-label","Dismiss"),n(Q,"position","absolute"),n(Q,"top","0.5rem"),n(Q,"right","0.5rem"),n(Q,"width","1.75rem"),n(Q,"height","1.75rem"),n(Q,"padding","0"),n(Q,"border","none"),n(Q,"background","transparent"),n(Q,"color","#742a2a"),n(Q,"cursor","pointer"),n(Q,"font-size","1.4rem"),n(Q,"line-height","1"),n(Q,"border-radius","0.25rem")]),f([Zr("\xD7")]))]))},Yk=function(e){switch(e){case 0:return 44;case 1:return 40;default:return 24}},Kk=function(e){var r=e;return Yk(r.cQ.aF)},Xk=function(e){return Kk(e.U)},lr=l(function(e,r){return e(gn(r))}),T1="scrollbar-muted",jm=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),Qk=jm,Un=Qk,L1=function(e){return{$:4,a:e}},wm=function(e){return L1(n$(e))},ne=wm,ze=function(e){return"hsla("+(Z(e.aX*360)+(", "+(Z(e.a4*100)+("%, "+(Z(e.D*100)+("%, "+(Z(e.aT)+")")))))))},km=l(function(e,r){var a=ze(n(lr,function(c){return c.jg},r)),t=ze(n(lr,function(c){return c.i$},r)),o=ze(n(lr,function(c){return c.bx},r));return s(Un,"style",P,f([ne(`
/* Firefox + recent standards-compliant browsers */
`+(e+(`* {
  scrollbar-width: thin;
  scrollbar-color: `+(o+(` transparent;
}
`+(e+("."+(T1+(` {
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
`+(e+("."+(T1+(`::-webkit-scrollbar-thumb {
  background-color: `+(a+(`;
}
`+(e+("."+(T1+(`::-webkit-scrollbar-thumb:hover {
  background-color: `+(t+`;
}
`))))))))))))))))))))))))))))))))))))]))}),Tm=function(e){return n(km,"",e)},eT=l(function(e,r){return n(Wb,e,Hr(r))}),Lm=eT("id"),rT=S(function(e,r,a){return s($r,e,{fd:r.fd,pA:r.pA},a)}),zm=Kg,Mm=zm,Dm=S(function(e,r,a){return{$:2,a:e,b:r,c:a}}),aT=q(function(e,r,a,t){return{$:3,a:e,b:r,c:a,d:t}}),Hm=q(function(e,r,a,t){return{$:1,a:e,b:r,c:a,d:t}}),Vt=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),nT=o_,q$=l(function(e,r){var a=r.a,t=r.b,o=r.c;return s(Vt,n(nT,e,a),t,o)}),Fu=l(function(e,r){switch(r.$){case 0:var t=r.a,o=r.b,c=r.c;return s(jm,t,n(N,q$(e),o),n(N,Fu(e),c));case 1:var a=r.a,t=r.b,o=r.c,c=r.d;return C(Hm,a,t,n(N,q$(e),o),n(N,Fu(e),c));case 2:var t=r.a,o=r.b,c=r.c;return s(Dm,t,n(N,q$(e),o),n(N,function(u){var $=u.a,v=u.b;return p($,n(Fu,e,v))},c));case 3:var a=r.a,t=r.b,o=r.c,c=r.d;return C(aT,a,t,n(N,q$(e),o),n(N,function(u){var $=u.a,v=u.b;return p($,n(Fu,e,v))},c));default:var i=r.a;return L1(n(zm,e,i))}}),ac=Fu,O=Un("div"),Fm=l(function(e,r){return s(Vt,n(yv,e,r),!1,"")}),Ot=l(function(e,r){return n(Fm,e,Hr(r))}),bt=Ot("id"),tT=function(e){return K(pp,e)},Am=function(e){return{$:0,a:e}},vY=ae,z=l(function(e,r){return Am(e+(":"+r))}),ge=l(function(e,r){return n(z,e,r.uY)}),kr=ge("cursor"),oT=function(e){var r=e;return n(se,function(a){return a.bI},r.ey)},z1=l(function(e,r){return!n(s$,n(cr,Ov,e),r)}),cT=l(function(e,r){var a=r.a,t=r.b;switch(e.$){case 0:var o=e.a,$=o.c;return nr($)?p(a,t):p(a,n(F,e,t));case 1:var c=e.b;return n(z1,function(d){var b=d.c;return nr(b)},c)?p(a,t):p(a,n(F,e,t));case 2:var i=e.b;return nr(i)?p(a,t):p(a,n(F,e,t));case 3:return p(a,n(F,e,t));case 4:var $=e.a;return nr($)?p(a,t):p(a,n(F,e,t));case 5:var $=e.a;return nr($)?p(a,t):p(a,n(F,e,t));case 6:var u=e.a;return Vo(u.qO)?p(a,t):p(s($r,u.sR,u.qO,a),t);case 7:var $=e.a;return nr($)?p(a,t):p(a,n(F,e,t));case 8:var $=e.a;return nr($)?p(a,t):p(a,n(F,e,t));default:var v=e.a;return n(z1,function(d){var b=d.b;return nr(b)},v)?p(a,t):p(a,n(F,e,t))}}),Bm=function(e){return{$:6,a:e}},iT=l(function(e,r){return n(wv,n(N,function(a){var t=a.a,o=a.b;return Bm({qO:o,sR:t})},ln(e)),r)}),uT=function(e){var r=s(dn,cT,p(Ae,P),e),a=r.a,t=r.b;return n(iT,a,t)},fT=function(e){var r=e.qP,a=e.n$,t=e.mY,o=e.l0;return{l0:o,qP:uT(r),mY:t,n$:a}},$T=function(e){return n(oe,"",n(se,function(r){return'@charset "'+(r+'"')},e))},lT=q(function(e,r,a,t){e:for(;;)if(a.b)if(a.b.b){var o=a.a,c=a.b,i=e,u=r,$=c,v=t+(e(o)+(r+""));e=i,r=u,a=$,t=v;continue e}else{var o=a.a;return t+(e(o)+"")}else return t}),xa=S(function(e,r,a){return C(lT,e,r,a,"")}),Im=function(e){return"("+(e.mz+(n(oe,"",n(se,lC(": "),e.uY))+")"))},vT=function(e){switch(e){case 0:return"print";case 1:return"screen";default:return"speech"}},Rm=function(e){var r=S(function(c,i,u){return c+(" "+n(Or," and ",n(F,vT(i),n(N,Im,u))))});switch(e.$){case 0:var t=e.a;return s(xa,Im," and ",t);case 1:var a=e.a,t=e.b;return s(r,"only",a,t);case 2:var a=e.a,t=e.b;return s(r,"not",a,t);default:var o=e.a;return o}},sT=l(function(e,r){return'@import "'+(e+(Rm(r)+'"'))}),dT=function(e){var r=e.a,a=e.b;return s(xa,sT(r),`
`,a)},bT=function(e){var r=e.a,a=e.b;return"@namespace "+(r+('"'+(a+'"')))},pT=function(e){return s(xa,function(r){var a=r;return a+";"},"",e)},mT=Mh,hT=function(e){var r=e;return"::"+r},gT=function(e){switch(e){case 0:return"+";case 1:return"~";case 2:return">";default:return""}},M1=function(e){switch(e.$){case 0:var r=e.a;return"."+r;case 1:var r=e.a;return"#"+r;case 2:var r=e.a;return":"+r;default:var r=e.a;return"["+(r+"]")}},Em=function(e){switch(e.$){case 0:var r=e.a,a=e.b;return K(r,s(xa,M1,"",a));case 1:var a=e.a;return nr(a)?"*":s(xa,M1,"",a);default:var r=e.a,a=e.b;return K(r,s(xa,M1,"",a))}},_T=function(e){var r=e.a,a=e.b;return gT(r)+(" "+Em(a))},yT=function(e){var r=e.a,a=e.b,t=e.c,o=n(F,Em(r),n(N,_T,a)),c=n(oe,"",n(se,hT,t));return n(mT,n(Or," ",o),c)},Vm=function(e){var r=e.a,a=e.b,t=e.c,o=s(xa,yT,",",n(F,r,a));return o+("{"+(pT(t)+"}"))},CT=function(e){switch(e.$){case 0:var r=e.a;return Vm(r);case 1:var a=e.a,t=e.b,o=s(xa,Rm,", ",a),c=s(xa,Vm,`
`,t);return"@media "+(o+("{"+(c+"}")));case 2:return"TODO";case 3:return"TODO";case 4:return"TODO";case 5:return"TODO";case 6:var i=e.a.qO,u=e.a.sR;return"@keyframes "+(u+("{"+(i+"}")));case 7:return"TODO";case 8:return"TODO";default:return"TODO"}},PT=function(e){var r=e.qP,a=e.n$,t=e.mY,o=e.l0;return $T(o)+(s(xa,dT,`
`,t)+(s(xa,bT,`
`,a)+(s(xa,CT,`
`,r)+"")))},Om=function(e){return{$:8,a:e}},Um=function(e){return{$:5,a:e}},qm=function(e){return{$:4,a:e}},Au=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),yo=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),Bu=function(e){return{$:0,a:e}},D1=l(function(e,r){return{$:2,a:e,b:r}}),Wm=function(e){return{$:7,a:e}},nc=l(function(e,r){return{$:1,a:e,b:r}}),H1=l(function(e,r){if(r.b)if(r.b.b){var t=r.a,o=r.b;return n(F,t,n(H1,e,o))}else{var a=r.a;return f([e(a)])}else return r}),Gm=l(function(e,r){var a=r.a,t=r.b,o=r.c;return s(yo,a,t,K(o,f([e])))}),F1=l(function(e,r){if(r.b)if(r.b.b){var i=r.a,u=r.b;return n(F,i,n(F1,e,u))}else switch(r.a.$){case 0:var a=r.a.a;return f([Bu(n(Gm,e,a))]);case 1:var t=r.a,o=t.a,c=t.b;return f([n(nc,o,n(H1,Gm(e),c))]);default:return r}else return r}),Nm=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c,i=n(N,e,c),u=e(o);return f([s(yo,o,c,t),s(yo,u,i,P)])}else{var a=r.a,t=r.c;return f([s(yo,a,P,t),s(yo,e(a),P,P)])}}),ST=l(function(e,r){var a=r.a,t=r.b;return s(Au,a,t,D(e))}),xT=l(function(e,r){return n(Nm,ST(e),r)}),Zm=l(function(e,r){return{$:2,a:e,b:r}}),jT=l(function(e,r){return{$:0,a:e,b:r}}),Jm=function(e){return{$:1,a:e}},Ym=l(function(e,r){switch(r.$){case 0:var a=r.a,o=r.b;return n(jT,a,K(o,f([e])));case 1:var o=r.a;return Jm(K(o,f([e])));default:var t=r.a,o=r.b;return n(Zm,t,K(o,f([e])))}}),Km=l(function(e,r){if(r.b)if(r.b.b){var c=r.a,i=r.b;return n(F,c,n(Km,e,i))}else{var a=r.a,t=a.a,o=a.b;return f([p(t,n(Ym,e,o))])}else return P}),wT=l(function(e,r){if(r.b.b){var o=r.a,c=r.b,t=r.c;return s(Au,o,n(Km,e,c),t)}else{var a=r.a,t=r.c;return s(Au,n(Ym,e,a),P,t)}}),kT=l(function(e,r){return n(Nm,wT(e),r)}),A1=function(e){e:for(;;)if(e.b)if(e.a.$){var o=e.b,c=o;e=c;continue e}else{var r=e.a.a,a=r.a,t=r.b,o=e.b;return K(n(F,a,t),A1(o))}else return P},B1=Te(function(e,r,a,t,o){return{$:3,a:e,b:r,c:a,d:t,e:o}}),W$=l(function(e,r){e:for(;;)if(r.b){if(r.b.b)break e;switch(r.a.$){case 0:var V=r.a.a;return n(N,Bu,e(V));case 1:if(r.a.b.b)if(r.a.b.b.b){var c=r.a,t=c.a,i=c.b,E=i.a,G=i.b,u=n(W$,e,f([n(nc,t,G)]));if(u.b&&u.a.$===1&&!u.b.b){var $=u.a,v=$.a,d=$.b;return f([n(nc,v,n(F,E,d))])}else{var b=u;return b}}else{var a=r.a,t=a.a,o=a.b,V=o.a;return f([n(nc,t,e(V))])}else break e;case 2:var h=r.a,g=h.a,_=h.b;return f([n(D1,g,n(W$,e,_))]);case 3:var y=r.a,x=y.a,L=y.b,k=y.c,A=y.d,V=y.e;return n(N,C(B1,x,L,k,A),e(V));case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}else return r;var E=r.a,G=r.b;return n(F,E,n(W$,e,G))}),TT=function(e){e:for(;;)if(e.b)if(e.b.b){var a=e.b,t=a;e=t;continue e}else{var r=e.a;return D(r)}else return T},Xm=function(e){e:for(;;)if(e.b)if(e.b.b){var a=e.b,t=a;e=t;continue e}else{var r=e.a;return D(f([r]))}else return T},LT=function(e){e:for(;;)if(e.b){var r=e.a,a=e.b;if(r.$===1){var t=a;e=t;continue e}else return r}else return T},zT=function(e){return{$:9,a:e}},Qm=function(e){var r=function(t){if(t.b){var o=t.a,c=t.b;return n(F,o,r(c))}else return P},a=r(e);return f([zT(a)])},MT=l(function(e,r){if(r.$)return r;var a=r.a;return n(nc,e,f([a]))}),G$=function(e){if(e.b){var r=e.a,a=e.b;return D(a)}else return T},e5=Te(function(e,r,a,t,o){if(o.$)return o;var c=o.a;return I(B1,e,r,a,t,c)}),r5=l(function(e,r){switch(r.$){case 0:var d=r.a;return n(nc,e,f([d]));case 1:var a=r.a,t=r.b;return n(nc,K(e,a),t);case 2:var o=r.a,c=r.b;return n(D1,o,n(N,r5(e),c));case 3:var i=r.a,u=r.b,$=r.c,v=r.d,d=r.e;return I(B1,i,u,$,v,d);case 4:return r;case 5:return r;case 6:return r;case 7:return r;case 8:return r;default:return r}}),I1=function(e){var r=e;return r},a5=q(function(e,r,a,t){var o=function(v){return n(oe,P,G$(v))},c=n(pt,r,n(oe,P,Xm(t))),i=(function(){var v=p(jr(c),TT(t));if(!v.a.$&&!v.b.$){var d=v.a.a,b=v.b.a;return K(n(vt,xr(t)-1,t),f([ee(b,d)?b:d]))}else return t})(),u=function(v){return Rn(n(H1,pt(e),n(N,Ic,n(W$,a,v))))},$=n(oe,P,n(se,u,Xm(t)));return K(i,K(o($),o(c)))}),pt=l(function(e,r){if(e.b)switch(e.a.$){case 0:var a=e.a.a,E=e.b;return n(pt,E,n(F1,a,r));case 1:var t=e.a,o=t.a,k=t.b,E=e.b;return C(a5,k,E,kT(o),r);case 2:var c=e.a,i=c.a,u=c.b,E=e.b,$=l(function(G,J){var te=G.a,$e=G.b,pe=G.c,ke=J.a,Fe=J.b,De=J.c;return s(Au,te,K($e,n(F,p(i,ke),Fe)),LT(f([De,pe])))}),v=function(G){switch(G.$){case 0:var J=G.a,te=J.a,$e=J.b,pe=J.c,ke=n(En,function(Wa){return n(N,$(Wa),n(F,te,$e))},A1(r)),Fe=(function(){if(ke.b){var Wa=ke.a,tn=ke.b;return f([Bu(s(yo,Wa,tn,P))])}else return P})();return n(pt,pe,Fe);case 1:var De=G.a,fr=G.b;return n(n5,De,fr);case 2:var ce=G.a,Ue=G.b;return n(t5,ce,Ue);case 3:var rr=G.a,ar=G.b,Dr=G.c,Qe=G.d,sr=G.e;return n(N,C(e5,rr,ar,Dr,Qe),N$(sr));case 4:var Er=G.a;return f([qm(Er)]);case 5:var Er=G.a;return f([Um(Er)]);case 6:var Er=G.a;return f([Wm(Er)]);case 7:var Er=G.a;return f([Om(Er)]);default:var oa=G.a;return Qm(oa)}};return Rn(K(f([n(pt,E,r)]),n(N,v,n(En,I1,u))));case 3:var d=e.a,b=d.a,k=d.b,E=e.b;return C(a5,k,E,xT(b),r);case 5:var h=e.a.a,E=e.b,g=B2(h),_="animation-name:"+g,y=n(pt,E,n(F1,_,r));return n(wv,y,f([Bm({qO:h,sR:g})]));case 4:var x=e.a,L=x.a,k=x.b,E=e.b,A=(function(){var G=A1(r);if(G.b){var J=G.a,te=G.b;return n(N,MT(L),n(pt,k,Ic(Bu(s(yo,J,te,P)))))}else return P})();return K(n(pt,E,r),A);default:var V=e.a.a,E=e.b;return n(pt,K(V,E),r)}else return r}),N$=function(e){var r=e.a,a=e.b,t=e.c;return n(pt,t,f([Bu(s(yo,r,a,P))]))},R1=function(e){if(e.b){var r=e.a,a=e.b;return K(DT(r),R1(a))}else return P},n5=l(function(e,r){var a=function(t){return n(N,r5(e),N$(t))};return n(En,a,r)}),t5=l(function(e,r){var a=R1(n(En,I1,r));return f([n(D1,e,a)])}),DT=function(e){switch(e.$){case 0:var v=e.a;return N$(v);case 1:var r=e.a,a=e.b;return n(n5,r,a);case 2:var t=e.a,o=e.b;return n(t5,t,o);case 3:var c=e.a,i=e.b,u=e.c,$=e.d,v=e.e;return n(N,C(e5,c,i,u,$),N$(v));case 4:var d=e.a;return f([qm(d)]);case 5:var d=e.a;return f([Um(d)]);case 6:var d=e.a;return f([Wm(d)]);case 7:var d=e.a;return f([Om(d)]);default:var b=e.a;return Qm(b)}},HT=function(e){var r=e.oZ,a=e.n$,t=e.mY,o=e.l0,c=R1(n(En,I1,r));return{l0:o,qP:c,mY:t,n$:a}},o5=function(e){return PT(fT(HT(e)))},c5=function(e){return{l0:T,mY:P,n$:P,oZ:e}},i5=L1,E1=function(e){return i5(s(Eo,"span",f([n(In,"style","display: none;"),n(In,"class","elm-css-style-wrapper")]),Ic(s(Eo,"style",P,Ic(n$(o5(c5(e))))))))},sY=0,u5={aU:0,uY:"grabbing"},dY=ae,FT=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),AT=function(e){return{$:0,a:e}},f5=l(function(e,r){var a=s(Au,r,P,T);return f([AT(s(FT,a,P,e))])}),fi=l(function(e,r){return n(f5,r,n(Zm,e,P))}),$5=function(e){var r=oT(e);return r.$?ne(""):E1(f([n(fi,"body *",f([kr(u5)]))]))},Sn={tB:0,uY:"absolute"},tc={jF:0,f1:0,uY:"row"},ra=M(tc,{uY:"column"}),BT=function(e){return{$:0,a:e}},IT=Jm(f([BT(Sv)])),l5=function(e){if(e.b){var r=e;return o5(c5(f([n(f5,e,IT)])))}else return""},RT=function(e){var r=l5(e),a=n(In,"","");return s(Vt,a,!0,r)},B=RT,le=n(z,"display","flex"),yr=ge("flex-direction"),bY=0,he=function(e){return{dG:0,hS:0,dP:0,cZ:0,s2:0,ia:0,dm:e,fr:"",gY:0,uY:Ie(e)}},Ut={ba:0,pZ:1300,rY:1100,sJ:1400,oh:100,pj:1500,c1:1200},tr=ge("position"),pY=0,Iu=S(function(e,r,a){return{lt:0,lV:0,eF:0,mF:0,gh:0,e_:0,di:0,e$:0,e0:0,dO:0,dP:0,cZ:0,e1:0,dm:a,fn:0,fr:r,gY:e,uY:K(Z(a),r)}}),w=n(Iu,0,"px"),mt=ge("right"),ja=ge("top"),mY=0,hY=1,v5=function(e){return e?"true":"false"},ye=function(e){return n(z,"background-color",e.uY)},s5=function(e){return{$:6,a:e}},Oe=s5,d5=q(function(e,r,a,t){return n(z,e,r.uY+(" "+(a.uY+(" "+t.uY))))}),ht=d5("border"),vr=ge("border-radius"),ET=Vr(function(e,r,a,t,o,c){return n(z,e,r.uY+(" "+(a.uY+(" "+(t.uY+(" "+(o.uY+(" "+c.uY))))))))}),Ru=ET("box-shadow"),gY=0,dr=function(e){return{dP:0,cZ:0,e1:0,s2:0,ia:0,dm:e,fr:"",gY:0,uY:Z(e)}},aa=ge("opacity"),sa=ge("padding"),Ya={qA:l(function(e,r){return w(e+r)}),sk:w(12),e4:w(8),ts:w(9999),kW:w(4),vd:w(20)},mr=l(function(e,r){return M(r,{aT:e})}),xn={bA:0,d4:0,uY:"solid"},$i=l(function(e,r){return e+("("+(n(Or,",",r)+")"))}),na=sh,VT=function(e){return e*180/na},gt=function(e){return e*na/180},OT=l(function(e,r){var a=Da(e);return n(Qr,r,a)+e-a}),UT=S(function(e,r,a){var t=e/gt(60),o=(1-Me(2*a-1))*r,c=a-o/2,i=o*(1-Me(n(OT,t,2)-1)),u=t<0?R(0,0,0):t<1?R(o,i,0):t<2?R(i,o,0):t<3?R(0,o,i):t<4?R(0,i,o):t<5?R(i,0,o):t<6?R(o,0,i):R(0,0,0),$=u.a,v=u.b,d=u.c;return R($+c,v+c,d+c)}),qT=Te(function(e,r,a,t,o){var c=s(UT,VT(r),a,t),i=c.a,u=c.b,$=c.c;return{aT:o,p6:Da($),l4:0,rK:Da(u),tK:Da(i),uY:e}}),b5=function(e){return Z(e*100)+"%"},WT=q(function(e,r,a,t){var o=f([Z(e),b5(r),b5(a),Z(t)]),c=n($i,"hsla",o);return I(qT,c,e,r,a,t)}),or=function(e){return C(WT,e.aX*360,e.a4,e.D,e.aT)},li={aT:1,aX:0,D:1,a4:0},ue={gh:0,e_:0,di:0,e$:0,e0:0,dO:0,dP:0,s2:0,dm:0,ij:0,fr:"",gY:0,uY:"0"},p5=S(function(e,r,a){var t=e.jw,o=e.dX,c=or(n(mr,.08,li)),i=or(n(mr,.25,so)),u=or(n(mr,.18,li));return n(O,K(r,f([B(f([le,(function(){return yr(o===1?ra:tc)})(),n(z,"gap","3px"),sa(w(3)),vr(n(Ya.qA,36/2,3)),ye(c),s(ht,w(1),xn,u),n(z,"backdrop-filter","blur(14px) saturate(160%)"),n(z,"-webkit-backdrop-filter","blur(14px) saturate(160%)"),I(Ru,ue,w(6),w(18),w(-6),i),n(z,"pointer-events","auto"),t?aa(dr(.4)):Oe(P)]))])),a)}),GT=l(function(e,r){return{$:1,a:e,b:r}}),NT=function(e){return{$:2,a:e}},V1=function(e){return GT(NT(e))},vi=V1("active"),oc=l(function(e,r){return Am(e+(":"+r))}),Z$=S(function(e,r,a){e:for(;;)switch(a.$){case 0:var t=a.a,o=n(oe,"",jr(n(Dn,":",t)));return n(oc,r,o);case 1:var c=a.a;return n(oc,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-selector"));case 2:var i=a.a;return n(oc,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-combinator"));case 3:var u=a.a;return n(oc,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-pseudo-element setter"));case 4:return n(oc,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-media-query"));case 5:return n(oc,r,"elm-css-error-cannot-apply-"+(e+"-with-inapplicable-Style-for-keyframes"));default:if(a.a.b)if(a.a.b.b){var g=a.a,_=g.a,y=g.b,d=e,b=r,h=s5(y);e=d,r=b,a=h;continue e}else{var $=a.a,v=$.a,d=e,b=r,h=v;e=d,r=b,a=h;continue e}else return n(oc,r,"elm-css-error-cannot-apply-"+(e+"-with-empty-Style"))}}),_Y=0,J$=s(Iu,0,"",0),He=function(e){return s(Z$,"alignItems","align-items",e(J$))},Tr=l(function(e,r){return s(Vt,n(In,e,r),!1,"")}),Ne=Tr,yY=1,CY=ae,Y$=q(function(e,r,a,t){return{hb:e,hu:D(a),cR:r,iR:D(t)}}),O1=Y$(1),ZT=ge("border-style"),PY=25,m5=Y$(25),qn=Un("button"),de=ge("center"),be=function(e){return n(z,"color",e.uY)},SY=29,JT=Y$(29),K$=ge("border-bottom-left-radius"),X$=ge("border-bottom-right-radius"),Q$=ge("border-top-left-radius"),el=ge("border-top-right-radius"),xY=0,Ze=n(Iu,0,"%"),YT=l(function(e,r){var a=w(4),t=w(18);switch(r){case 0:return f([vr(Ze(50))]);case 2:return f([vr(a)]);case 1:return f(e===1?[Q$(t),el(t),K$(a),X$(a)]:[Q$(t),K$(t),el(a),X$(a)]);default:return f(e===1?[Q$(a),el(a),K$(t),X$(t)]:[Q$(a),K$(a),el(t),X$(t)])}}),U1=l(function(e,r){return n(Fm,e,Op(r))}),si=U1("disabled"),KT={$:3},rl=KT,Y=l(function(e,r){return or(e(gn(r)))}),Ce=ge("height"),wa=V1("hover"),q1={bA:0,uY:"inset"},Lr=function(e){return s(Z$,"justifyContent","justify-content",e(J$))},ir={eg:0,lK:0,bA:0,aU:0,qY:0,rW:0,m0:0,jU:0,e0:0,dO:0,cZ:0,r:0,p:0,kf:0,ij:0,ty:0,cv:0,iu:0,t1:0,fm:0,d5:0,bX:0,lh:0,uT:0,uY:"none"},W1=l(function(e,r){return s(Vt,n(U$,e,r),!1,"")}),Jr=l(function(e,r){return n(W1,e,xm(r))}),jn=function(e){return n(Jr,"click",re(e))},Ea=ge("outline"),da={aU:0,uY:"pointer"},Co={tB:0,uY:"relative"},jY=89,h5=Y$(89),XT=function(e){return nr(e)?{uY:"none"}:{uY:s(xa,function(r){return r.uY}," ",e)}},al=n(cr,ge("transform"),XT),QT=function(e){switch(e){case 0:return"background";case 1:return"background-color";case 2:return"background-position";case 3:return"background-size";case 4:return"border";case 5:return"border-bottom";case 6:return"border-bottom-color";case 7:return"border-bottom-left-radius";case 8:return"border-bottom-right-radius";case 9:return"border-bottom-width";case 10:return"border-color";case 11:return"border-left";case 12:return"border-left-color";case 13:return"border-left-width";case 14:return"border-radius";case 15:return"border-right";case 16:return"border-right-color";case 17:return"border-right-width";case 18:return"border-top";case 19:return"border-top-color";case 20:return"border-top-left-radius";case 21:return"border-top-right-radius";case 22:return"border-top-width";case 23:return"border-width";case 24:return"bottom";case 25:return"box-shadow";case 26:return"caret-color";case 27:return"clip";case 28:return"clip-path";case 29:return"color";case 30:return"column-count";case 31:return"column-gap";case 32:return"column-rule";case 33:return"column-rule-color";case 34:return"column-rule-width";case 35:return"column-width";case 36:return"columns";case 37:return"filter";case 38:return"flex";case 39:return"flex-basis";case 40:return"flex-grow";case 41:return"flex-shrink";case 42:return"font";case 43:return"font-size";case 44:return"font-size-adjust";case 45:return"font-stretch";case 46:return"font-variation-settings";case 47:return"font-weight";case 48:return"grid-column-gap";case 49:return"grid-gap";case 50:return"grid-row-gap";case 51:return"height";case 52:return"left";case 53:return"letter-spacing";case 54:return"line-height";case 55:return"margin";case 56:return"margin-bottom";case 57:return"margin-left";case 58:return"margin-right";case 59:return"margin-top";case 60:return"mask";case 61:return"mask-position";case 62:return"mask-size";case 63:return"max-height";case 64:return"max-width";case 65:return"min-height";case 66:return"min-width";case 67:return"object-position";case 68:return"offset";case 69:return"offset-anchor";case 70:return"offset-distance";case 71:return"offset-path";case 72:return"offset-rotate";case 73:return"opacity";case 74:return"order";case 75:return"outline";case 76:return"outline-color";case 77:return"outline-offset";case 78:return"outline-width";case 79:return"padding";case 80:return"padding-bottom";case 81:return"padding-left";case 82:return"padding-right";case 83:return"padding-top";case 84:return"right";case 85:return"tab-size";case 86:return"text-indent";case 87:return"text-shadow";case 88:return"top";case 89:return"transform";case 90:return"transform-origin";case 91:return"vertical-align";case 92:return"visibility";case 93:return"width";case 94:return"word-spacing";default:return"z-index"}},g5=function(e){return Z(e)+"ms"},eL=function(e){switch(e.$){case 0:return"ease";case 1:return"linear";case 2:return"ease-in";case 3:return"ease-out";case 4:return"ease-in-out";case 5:return"step-start";case 6:return"step-end";default:var r=e.a,a=e.b,t=e.c,o=e.d;return"cubic-bezier("+(Z(r)+(" , "+(Z(a)+(" , "+(Z(t)+(" , "+(Z(o)+")")))))))}},nl=function(e){var r=s(bn,0,-1,s(me,l(function(a,t){var o=a.iR,c=a.hu,i=a.cR,u=a.hb;return t+(QT(u)+(" "+(g5(i)+(" "+(n(oe,"",n(se,g5,c))+(" "+(n(oe,"",n(se,eL,o))+",")))))))}),"",e));return n(z,"transition",r)},_5=l(function(e,r){return{lh:0,uY:n($i,"translate",f([e.uY,r.uY]))}}),_e=ge("width"),y5=l(function(e,r){var a=su(e),t=or(n(mr,a?.18:.64,so)),o=or(n(mr,a?.12:.48,so)),c=or(a?n(mr,.06,so):n(mr,.1,li)),i=r.i8,u=i.a,$=i.b;return n(qn,K(f([jn(r.bj),si(r.jw),n(Ne,"role",r.i7),n(Ne,u,$),n(Ne,"aria-label",r.eZ),B(K(f([tr(Co),_e(w(36)),Ce(w(36)),ZT(ir),sa(ue),r.jw?n(z,"cursor","default"):kr(da),n(z,"background","transparent"),Ea(ir),be(r.nd?n(Y,r.ki,e):n(Y,function(v){return v.le},e)),nl(f([s(m5,70,0,rl),s(O1,70,0,rl),s(JT,70,0,rl)])),r.nd?Oe(f([I(Ru,q1,ue,w(4),ue,o),ye(o)])):r.jw?Oe(P):Oe(f([wa(f([ye(c),I(Ru,q1,ue,w(1),ue,c)]))])),r.jw?Oe(P):vi(f([I(Ru,q1,ue,w(6),ue,t),ye(t)]))]),n(YT,r.dX,r.tB)))]),r.bs),f([n(O,f([B(f([_e(Ze(100)),Ce(Ze(100)),le,He(de),Lr(de),r.nd?al(f([n(_5,ue,w(1))])):Oe(P),r.jw?Oe(P):vi(f([al(f([n(_5,ue,w(1.5))]))])),nl(f([s(h5,70,0,rl)]))]))]),f([n(O,f([B(f([_e(w(24)),Ce(w(24))]))]),f([r.ga]))]))]))}),tl=l(function(e,r){return s(p5,{jw:r.jw,dX:1},P,f([n(y5,e,{i7:"button",i8:p("aria-pressed",v5(r.jS)),jw:r.jw,ga:r.ga,nd:r.jS,eZ:r.eZ,bj:r.bj,ki:r.i0,dX:1,tB:0,bs:r.bs})]))}),di=l(function(e,r){return n(tl,e,{i0:r.pe,jw:r.jw,ga:r.ga,jS:n(Wr,r.bI,r.bK),eZ:r.eZ,bj:r.d6(f1(r.bI)),bs:r.bs})}),rL=q(function(e,r,a,t){return n(di,e,{jw:!1,ga:t.ga,bI:t.bI,eZ:t.iS,bK:r,pe:t.pe,d6:a,bs:P})}),_t=ge("z-index"),aL=l(function(e,r){return n(O,f([B(f([tr(Sn),ja(w(wu)),mt(w(wu)),le,yr(ra),n(z,"gap","6px"),n(z,"pointer-events",r.jN?"none":"auto"),_t(he(Ut.rY)),n(z,"transform",r.jN?"translateX(calc(100% + "+(Z(wu)+"px))"):"translateX(0)"),n(z,"transition","transform 280ms cubic-bezier(0.2, 0.9, 0.25, 1)")]))]),n(N,s(rL,e,r.ik,r.d6),r.cu))}),yt=ge("bottom"),ba=ge("left"),nL=function(e){return f([(function(){var r=e.pF;switch(r.$){case 0:var a=r.a;return ba(w(a));case 1:var a=r.a;return mt(w(a));default:return ba(Ze(50))}})(),(function(){var r=e.pH;if(r.$){var a=r.a;return yt(w(a))}else{var a=r.a;return ja(w(a))}})()])},Eu={pN:0,aU:0,eF:0,hS:0,sg:0,e_:0,di:0,cZ:0,fc:0,cv:0,iN:0,fo:0,bX:0,uY:"auto"},Ct={fE:0,tB:0,iN:0,uY:"fixed"},C5=function(e){var r="blur("+(Z(e)+"px) saturate(180%)");return Oe(f([n(z,"backdrop-filter",r),n(z,"-webkit-backdrop-filter",r)]))},P5={aU:0,uY:"grab"},qt={bA:0,fc:0,uY:"hidden",g_:0},S5=l(function(e,r){return"draggable-panel-"+(e(r)+"-no-drag")}),Wt=ge("overflow"),tL=l(function(e,r){var a=(function(){var t=e.pF;return t.$===2?"calc(-50% + "+(Z(r.pF)+"px)"):Z(r.pF)+"px"})();return"translate("+(a+(", "+(Z(r.pH)+"px)")))}),Wn=ge("pointer-events"),oL=S(function(e,r,a){var t=a,o=C(cm,e,r.bz,r.bI,t),c=t.ey;if(c.$)return o;var i=c.a;return ee(i.bI,r.bI)?n(nm,e,i):o}),x5=ge("box-shadow"),j5=Te(function(e,r,a,t,o){return n(z,e,r.uY+(" "+(a.uY+(" "+(t.uY+(" "+o.uY))))))}),cL=j5("box-shadow"),ol=q(function(e,r,a,t){return{aT:t,p6:a,l4:0,rK:r,tK:e,uY:n($i,"rgba",K(n(N,Ie,f([e,r,a])),f([Z(t)])))}}),cl={q5:x5(ir),q6:C(cL,ue,w(1),w(2),C(ol,0,0,0,.3)),mn:n(z,"box-shadow","0 2px 4px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2)"),q7:n(z,"box-shadow","0 12px 24px -8px rgba(0, 0, 0, 0.55), 0 4px 8px -2px rgba(0, 0, 0, 0.4)"),q8:n(z,"box-shadow","0 28px 60px -20px rgba(0, 0, 0, 0.85), 0 8px 24px -8px rgba(0, 0, 0, 0.55)")},iL=l(function(e,r){return s(Vt,n(M2,e,r),!1,"")}),w5=iL,k5=48,uL={aU:0,uY:"default"},Po=ge("flex"),fL=ge("overflow-x"),T5=ge("overflow-y"),$L=S(function(e,r,a){return n(z,e,r.uY+(" "+a.uY))}),zr=$L("padding"),lL=l(function(e,r){return n(O,f([B(f([Po(he(1)),T5(Eu),fL(Eu),n(zr,w(16),w(16))]))]),f([n(O,f([bt(e),B(f([kr(uL)]))]),f([r]))]))}),vL=function(e){return{$:3,a:e}},sL={pa:0,uY:"ellipsis"},G1=S(function(e,r,a){return X(Me(a.D-r.D),e)>-1?a:r.D>.5?M(a,{D:s(er,0,1,r.D-e)}):M(a,{D:s(er,0,1,r.D+e)})}),hr=ge("flex-shrink"),cc=ge("letter-spacing"),N1={f1:0,hI:0,uY:"nowrap",ed:0},il=ge("padding-left"),Z1=ge("padding-right"),dL=ge("text-overflow"),J1=ge("text-transform"),wY=0,bi=n(Iu,0,"em"),br=ge("font-size"),pa=function(e){var r=e.uY;return n(z,"font-weight",r)},wn=ge("line-height"),kn={hd:f([br(w(15)),pa(he(400)),wn(dr(1.55))]),qm:f([br(w(13)),pa(he(500)),wn(dr(1.3)),cc(bi(.04))]),qY:f([br(w(46)),pa(he(300)),wn(dr(1.05)),cc(bi(-.02))]),rP:f([br(w(16)),pa(he(650)),wn(dr(1.3))]),rQ:f([br(w(30)),pa(he(550)),wn(dr(1.15)),cc(bi(-.01))]),eZ:f([br(w(14)),pa(he(550)),wn(dr(1.35))]),iS:f([br(w(20)),pa(he(650)),wn(dr(1.25)),cc(bi(-.005))])},Y1={d5:0,uY:"uppercase"},ic=ge("border"),L5={l4:0,uY:"currentColor"},pi=Tr("clip-rule"),xe=Tr("d"),bL=function(e){var r=l5(e),a=n(In,"","");return s(Vt,a,!0,r)},Gn=bL,Pt=Tr("fill"),pL=Hm,So=pL("http://www.w3.org/2000/svg"),ul=So("svg"),fl=Tr("viewBox"),mL=S(function(e,r,a){return s(Qg,e,Gb(r),Nb(a))}),hL=S(function(e,r,a){return s(Vt,s(mL,e,r,a),!1,"")}),gL=n(hL,"http://www.w3.org/XML/1998/namespace","xml:space"),je=ul(f([fl("0 0 24 24"),Pt("currentColor"),Gn(f([_e(Ze(100)),Ce(Ze(100))])),gL("http://www.w3.org/2000/svg")])),mi=Tr("fill-rule"),we=So("path"),Xe={pK:je(f([n(we,f([xe("M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z")]),P)])),p7:je(f([n(we,f([xe("M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z")]),P)])),qs:je(f([n(we,f([mi("evenodd"),pi("evenodd"),xe("M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z")]),P)])),qt:je(f([n(we,f([mi("evenodd"),pi("evenodd"),xe("M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z")]),P)])),qu:je(f([n(we,f([mi("evenodd"),pi("evenodd"),xe("M5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071Z")]),P)])),qy:je(f([n(we,f([xe("M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z")]),P)])),qz:je(f([n(we,f([xe("M4.00005 16H20V5H4.00005V16ZM13.0001 18V20H17.0001V22H7.00005V20H11.0001V18H2.99205C2.86065 17.9992 2.7307 17.9725 2.60965 17.9214C2.48861 17.8702 2.37885 17.7957 2.28668 17.702C2.19452 17.6084 2.12175 17.4975 2.07256 17.3756C2.02337 17.2538 1.99873 17.1234 2.00005 16.992V4.008C2.00005 3.451 2.45505 3 2.99205 3H21.008C21.556 3 22 3.449 22 4.007V16.992C22 17.549 21.545 18 21.008 18H13.0001Z")]),P)])),qK:je(f([n(we,f([xe("M11.7143 9.78571L17.5 4L19.4286 5.92857L13.6429 11.7143L19.4286 17.5L17.5 19.4286L11.7143 13.6429L5.92857 19.4286L4 17.5L9.78571 11.7143L4 5.92857L5.92857 4L11.7143 9.78571Z")]),P)])),qV:je(f([n(we,f([xe("M4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6Z")]),P)])),qW:je(f([n(we,f([xe("M9 2H15A2 2 0 0 1 17 4V20A2 2 0 0 1 15 22H9A2 2 0 0 1 7 20V4A2 2 0 0 1 9 2Z")]),P)])),q0:je(f([n(we,f([xe("M11 3h2v7h3l-4 4-4-4h3z M4 17h16v3H4z")]),P)])),q1:je(f([n(we,f([xe("M11 2h2v7h3l-4 4-4-4h3z M4 16h16v2H4z M7 19h10v2H7z")]),P)])),q4:je(f([n(we,f([xe("M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z")]),P)])),rg:je(f([n(we,f([xe("M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z")]),P)])),rh:je(f([n(we,f([xe("M8.58564 8.85449L3.63589 13.8042L8.83021 18.9985L9.99985 18.9978V18.9966H11.1714L14.9496 15.2184L8.58564 8.85449ZM9.99985 7.44027L16.3638 13.8042L19.1922 10.9758L12.8283 4.61185L9.99985 7.44027ZM13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966Z")]),P)])),ru:je(f([n(we,f([xe("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z")]),P)])),rD:je(f([n(we,f([xe("M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z")]),P)])),rH:je(f([n(we,f([xe("M20.0601 11.6104C20.0639 11.7454 20.0639 11.8804 20.0601 12.0154L21.4588 13.7629C21.5322 13.8547 21.583 13.9624 21.6071 14.0773C21.6312 14.1923 21.6279 14.3113 21.5976 14.4248C21.3679 15.2866 21.0249 16.1141 20.5776 16.8857C20.519 16.9867 20.4376 17.0726 20.34 17.1365C20.2423 17.2005 20.1311 17.2408 20.0151 17.2542L17.7914 17.5017C17.6989 17.5992 17.6051 17.6929 17.5101 17.7829L17.2476 20.0123C17.2341 20.1283 17.1937 20.2396 17.1295 20.3373C17.0654 20.435 16.9794 20.5163 16.8782 20.5748C16.1067 21.0217 15.2791 21.3641 14.4173 21.5929C14.3038 21.6232 14.1848 21.6265 14.0698 21.6024C13.9549 21.5783 13.8472 21.5275 13.7554 21.4542L12.0126 20.0629H11.6076L9.8601 21.4589C9.76835 21.5322 9.66065 21.583 9.54569 21.6071C9.43073 21.6312 9.31171 21.6279 9.19823 21.5976C8.33643 21.3679 7.5089 21.0249 6.73729 20.5776C6.63634 20.519 6.55046 20.4376 6.4865 20.34C6.42254 20.2423 6.38225 20.1311 6.36885 20.0151L6.12135 17.7876C6.02385 17.6945 5.9301 17.6007 5.8401 17.5064L3.61073 17.2504C3.49468 17.2369 3.38338 17.1965 3.28572 17.1324C3.18806 17.0682 3.10674 16.9822 3.04823 16.881C2.60136 16.1093 2.2587 15.2818 2.02916 14.4201C1.99897 14.3065 1.99589 14.1875 2.02015 14.0725C2.04441 13.9576 2.09535 13.8499 2.16885 13.7582L3.5601 12.0154V11.6104L2.16416 9.86292C2.09082 9.77116 2.04006 9.66347 2.01596 9.5485C1.99186 9.43354 1.9951 9.31452 2.02541 9.20104C2.25513 8.33924 2.59812 7.51172 3.04541 6.7401C3.10403 6.63915 3.18541 6.55328 3.28306 6.48931C3.38071 6.42535 3.49195 6.38507 3.60791 6.37167L5.83166 6.12417C5.92479 6.02667 6.01854 5.93292 6.11291 5.84292L6.3726 3.61354C6.3861 3.49749 6.42653 3.3862 6.49066 3.28854C6.55479 3.19088 6.64085 3.10955 6.74198 3.05104C7.51369 2.60418 8.3412 2.26151 9.20291 2.03198C9.31647 2.00179 9.43553 1.9987 9.55049 2.02296C9.66546 2.04723 9.77312 2.09816 9.86479 2.17167L11.6076 3.56292C11.7426 3.55917 11.8776 3.55917 12.0126 3.56292L13.7601 2.16417C13.8519 2.09082 13.9595 2.04006 14.0745 2.01596C14.1895 1.99186 14.3085 1.9951 14.422 2.02542C15.2839 2.25472 16.1115 2.59773 16.8829 3.04542C16.9839 3.10403 17.0697 3.18541 17.1337 3.28306C17.1977 3.38072 17.2379 3.49195 17.2513 3.60792L17.4988 5.83167C17.5963 5.92417 17.6901 6.01792 17.7801 6.11292L20.0095 6.37542C20.1255 6.38892 20.2368 6.42934 20.3345 6.49347C20.4321 6.5576 20.5135 6.64366 20.572 6.74479C21.0188 7.51651 21.3615 8.34402 21.591 9.20573C21.6212 9.31928 21.6243 9.43834 21.6001 9.55331C21.5758 9.66828 21.5249 9.77593 21.4513 9.8676L20.0601 11.6104ZM11.8101 8.06292C11.0684 8.06292 10.3434 8.28285 9.72671 8.6949C9.11003 9.10696 8.62938 9.69263 8.34555 10.3779C8.06172 11.0631 7.98746 11.8171 8.13216 12.5445C8.27685 13.2719 8.634 13.9401 9.15845 14.4646C9.6829 14.989 10.3511 15.3462 11.0785 15.4909C11.8059 15.6356 12.5599 15.5613 13.2452 15.2775C13.9304 14.9936 14.5161 14.513 14.9281 13.8963C15.3402 13.2796 15.5601 12.5546 15.5601 11.8129C15.5601 10.8184 15.165 9.86453 14.4618 9.16127C13.7585 8.458 12.8047 8.06292 11.8101 8.06292Z")]),P)])),rI:je(f([n(we,f([xe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),rR:je(f([n(we,f([xe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),rT:je(f([n(we,f([xe("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z")]),P)])),rV:je(f([n(we,f([xe("M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z")]),P)])),sh:je(f([n(we,f([xe("M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10H18C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7957 12 18 12H16C15.2043 12 14.4413 11.6839 13.8787 11.1213C13.3161 10.5587 13 9.79565 13 9V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H16ZM13.8787 14.8787C14.4413 14.3161 15.2043 14 16 14H18C18.7957 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2043 21 17V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V17C13 16.2043 13.3161 15.4413 13.8787 14.8787Z")]),P)])),sl:je(f([n(we,f([xe("M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z")]),P)])),sx:je(f([n(we,f([xe("M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z")]),P)])),sM:je(f([n(we,f([xe("M12 22C17.523 22 22 17.523 22 12C22 11.537 21.306 11.46 21.067 11.857C20.5572 12.7013 19.862 13.4186 19.034 13.9545C18.206 14.4903 17.2669 14.8307 16.2878 14.9499C15.3088 15.0691 14.3154 14.9639 13.383 14.6423C12.4507 14.3207 11.6037 13.7911 10.9063 13.0937C10.2089 12.3963 9.67932 11.5493 9.35772 10.617C9.03613 9.68457 8.93093 8.69123 9.0501 7.71217C9.16926 6.73311 9.50967 5.794 10.0455 4.96599C10.5814 4.13797 11.2987 3.44275 12.143 2.933C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z")]),P)])),kv:je(f([n(we,f([xe("M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z")]),P)])),to:je(f([n(we,f([xe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),tp:je(f([n(we,f([xe("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),P)])),tv:je(f([n(we,f([xe("M7 5V19L18 12L7 5Z")]),P)])),tw:je(f([n(we,f([xe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),tx:je(f([n(we,f([xe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),tJ:je(f([n(we,f([xe("M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z")]),P)])),tL:je(f([n(we,f([xe("M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34001 8 3.76001 10.42 2.06001 13.93C1.74001 14.6 2.10001 15.4 2.81001 15.64C3.40001 15.84 4.04001 15.56 4.31001 15C5.61001 12.34 8.34001 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z")]),P)])),tQ:je(f([n(we,f([xe("M7.20679 2.29279C7.39426 2.48031 7.49957 2.73462 7.49957 2.99979C7.49957 3.26495 7.39426 3.51926 7.20679 3.70679L5.41379 5.49979H13.2498C14.832 5.49979 16.3788 5.96898 17.6943 6.84803C19.0099 7.72708 20.0353 8.97651 20.6408 10.4383C21.2463 11.9001 21.4048 13.5087 21.0961 15.0605C20.7874 16.6124 20.0255 18.0378 18.9066 19.1566C17.7878 20.2755 16.3624 21.0374 14.8105 21.3461C13.2587 21.6548 11.6501 21.4963 10.1883 20.8908C8.72651 20.2853 7.47708 19.2599 6.59803 17.9443C5.71898 16.6288 5.24979 15.082 5.24979 13.4998C5.24979 13.2346 5.35514 12.9802 5.54268 12.7927C5.73022 12.6051 5.98457 12.4998 6.24979 12.4998C6.515 12.4998 6.76936 12.6051 6.95689 12.7927C7.14443 12.9802 7.24979 13.2346 7.24979 13.4998C7.24979 14.6865 7.60168 15.8465 8.26097 16.8332C8.92026 17.8199 9.85733 18.5889 10.9537 19.0431C12.05 19.4972 13.2564 19.616 14.4203 19.3845C15.5842 19.153 16.6533 18.5815 17.4924 17.7424C18.3315 16.9033 18.903 15.8342 19.1345 14.6703C19.366 13.5064 19.2472 12.3 18.7931 11.2037C18.3389 10.1073 17.5699 9.17026 16.5832 8.51097C15.5965 7.85168 14.4365 7.49979 13.2498 7.49979H5.41379L7.20679 9.29279C7.38894 9.48139 7.48974 9.73399 7.48746 9.99619C7.48518 10.2584 7.38001 10.5092 7.1946 10.6946C7.0092 10.88 6.75838 10.9852 6.49619 10.9875C6.23399 10.9897 5.98139 10.8889 5.79279 10.7068L2.29279 7.20679C2.10532 7.01926 2 6.76495 2 6.49979C2 6.23462 2.10532 5.98031 2.29279 5.79279L5.79279 2.29279C5.98031 2.10532 6.23462 2 6.49979 2C6.76495 2 7.01926 2.10532 7.20679 2.29279Z")]),P)])),tZ:je(f([n(we,f([xe("M21 7V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H17L21 7ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z")]),P)])),t7:je(f([n(we,f([xe("M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z")]),P)])),ub:je(f([n(we,f([xe("M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z")]),P)])),ue:je(f([n(we,f([xe("M8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z")]),P)])),uk:je(f([n(we,f([mi("evenodd"),pi("evenodd"),xe("M8 3H16A5 5 0 0 1 21 8V16A5 5 0 0 1 16 21H8A5 5 0 0 1 3 16V8A5 5 0 0 1 8 3ZM9 6H15A3 3 0 0 1 18 9V15A3 3 0 0 1 15 18H9A3 3 0 0 1 6 15V9A3 3 0 0 1 9 6ZM9.5 12A2.5 2.5 0 1 0 14.5 12A2.5 2.5 0 1 0 9.5 12Z")]),P)])),un:je(f([n(we,f([xe("M6 6H18V18H6Z")]),P)])),us:je(f([n(we,f([xe("M11.9989 19C12.2641 19 12.5185 19.1054 12.706 19.2929C12.8935 19.4804 12.9989 19.7348 12.9989 20V21C12.9989 21.2652 12.8935 21.5196 12.706 21.7071C12.5185 21.8946 12.2641 22 11.9989 22C11.7337 22 11.4793 21.8946 11.2918 21.7071C11.1042 21.5196 10.9989 21.2652 10.9989 21V20C10.9989 19.7348 11.1042 19.4804 11.2918 19.2929C11.4793 19.1054 11.7337 19 11.9989 19ZM18.3629 16.95L19.0699 17.657C19.252 17.8456 19.3528 18.0982 19.3506 18.3604C19.3483 18.6226 19.2431 18.8734 19.0577 19.0588C18.8723 19.2442 18.6215 19.3494 18.3593 19.3517C18.0971 19.354 17.8445 19.2532 17.6559 19.071L16.9489 18.364C16.7667 18.1754 16.6659 17.9228 16.6682 17.6606C16.6705 17.3984 16.7757 17.1476 16.9611 16.9622C17.1465 16.7768 17.3973 16.6716 17.6595 16.6693C17.9217 16.667 18.1743 16.7678 18.3629 16.95ZM5.63489 16.95C5.81485 16.7707 6.05633 16.6665 6.31028 16.6588C6.56423 16.651 6.81161 16.7402 7.00217 16.9082C7.19274 17.0763 7.3122 17.3106 7.33629 17.5635C7.36038 17.8164 7.2873 18.069 7.13189 18.27L7.04889 18.364L6.34189 19.071C6.16193 19.2503 5.92046 19.3545 5.66651 19.3622C5.41256 19.37 5.16518 19.2808 4.97461 19.1128C4.78405 18.9447 4.66459 18.7104 4.64049 18.4575C4.6164 18.2046 4.68948 17.952 4.84489 17.751L4.92789 17.657L5.63489 16.95ZM11.9989 6C13.5902 6 15.1163 6.63214 16.2415 7.75736C17.3668 8.88258 17.9989 10.4087 17.9989 12C17.9989 13.5913 17.3668 15.1174 16.2415 16.2426C15.1163 17.3679 13.5902 18 11.9989 18C10.4076 18 8.88147 17.3679 7.75625 16.2426C6.63103 15.1174 5.99889 13.5913 5.99889 12C5.99889 10.4087 6.63103 8.88258 7.75625 7.75736C8.88147 6.63214 10.4076 6 11.9989 6ZM3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889ZM20.9989 11C21.2641 11 21.5185 11.1054 21.706 11.2929C21.8935 11.4804 21.9989 11.7348 21.9989 12C21.9989 12.2652 21.8935 12.5196 21.706 12.7071C21.5185 12.8946 21.2641 13 20.9989 13H19.9989C19.7337 13 19.4793 12.8946 19.2918 12.7071C19.1042 12.5196 18.9989 12.2652 18.9989 12C18.9989 11.7348 19.1042 11.4804 19.2918 11.2929C19.4793 11.1054 19.7337 11 19.9989 11H20.9989ZM4.92789 4.929C5.10008 4.75682 5.32918 4.65339 5.57221 4.63811C5.81524 4.62283 6.05549 4.69675 6.24789 4.846L6.34189 4.929L7.04889 5.636C7.22824 5.81596 7.33237 6.05743 7.34012 6.31138C7.34787 6.56533 7.25868 6.81271 7.09064 7.00328C6.92261 7.19384 6.68834 7.31331 6.43542 7.3374C6.18249 7.36149 5.92988 7.28841 5.72889 7.133L5.63489 7.05L4.92789 6.343C4.74042 6.15547 4.63511 5.90116 4.63511 5.636C4.63511 5.37084 4.74042 5.11653 4.92789 4.929ZM19.0699 4.929C19.2574 5.11653 19.3627 5.37084 19.3627 5.636C19.3627 5.90116 19.2574 6.15547 19.0699 6.343L18.3629 7.05C18.2706 7.14551 18.1603 7.22169 18.0383 7.2741C17.9163 7.32651 17.7851 7.3541 17.6523 7.35525C17.5195 7.3564 17.3878 7.3311 17.2649 7.28082C17.142 7.23054 17.0304 7.15629 16.9365 7.0624C16.8426 6.9685 16.7684 6.85685 16.7181 6.73395C16.6678 6.61106 16.6425 6.47938 16.6436 6.3466C16.6448 6.21382 16.6724 6.0826 16.7248 5.9606C16.7772 5.83859 16.8534 5.72825 16.9489 5.636L17.6559 4.929C17.8434 4.74153 18.0977 4.63621 18.3629 4.63621C18.6281 4.63621 18.8824 4.74153 19.0699 4.929ZM11.9989 2C12.2641 2 12.5185 2.10536 12.706 2.29289C12.8935 2.48043 12.9989 2.73478 12.9989 3V4C12.9989 4.26522 12.8935 4.51957 12.706 4.70711C12.5185 4.89464 12.2641 5 11.9989 5C11.7337 5 11.4793 4.89464 11.2918 4.70711C11.1042 4.51957 10.9989 4.26522 10.9989 4V3C10.9989 2.73478 11.1042 2.48043 11.2918 2.29289C11.4793 2.10536 11.7337 2 11.9989 2Z")]),P)])),uz:je(f([n(we,f([mi("evenodd"),pi("evenodd"),xe("M10.8293 13C10.9398 12.6872 11 12.3506 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15H16C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 12.3506 13.0602 12.6872 13.1707 13H10.8293ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z")]),P)])),uJ:je(f([n(we,f([mi("evenodd"),pi("evenodd"),xe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),uL:je(f([n(we,f([xe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),uO:je(f([n(we,f([xe("M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z")]),P)])),uU:je(f([n(we,f([xe("M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z")]),P)])),u3:je(f([n(we,f([xe("M4.47 21H19.53C21.07 21 22.03 19.33 21.26 18L13.73 4.98999C12.96 3.65999 11.04 3.65999 10.27 4.98999L2.74 18C1.97 19.33 2.93 21 4.47 21ZM12 14C11.45 14 11 13.55 11 13V11C11 10.45 11.45 9.99999 12 9.99999C12.55 9.99999 13 10.45 13 11V13C13 13.55 12.55 14 12 14ZM13 18H11V16H13V18Z")]),P)])),vm:je(f([n(we,f([xe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)])),vs:je(f([n(we,f([xe("M9.31445 17.5469L8.43555 18.4355L12 22L15.5645 18.4355L14.6855 17.5469L12 20.2324L9.31445 17.5469ZM14.6855 6.45312L15.5645 5.56445L12 2L8.43555 5.56445L9.31445 6.45312L12 3.76758L14.6855 6.45312ZM6.45312 14.6855L3.76758 12L6.45312 9.31445L5.56445 8.43555L2 12L5.56445 15.5645L6.45312 14.6855ZM22 12L18.4355 8.43555L17.5469 9.31445L20.2324 12L17.5469 14.6855L18.4355 15.5645L22 12ZM8.25 15.75H15.75V8.25H8.25V15.75ZM9.5 9.5H14.5V14.5H9.5V9.5Z")]),P)]))},xo={l4:0,uY:"transparent"},_L=l(function(e,r){return n(qn,f([bt(r),jn(e.d6(Hp(e.bI))),n(Ne,"aria-label","Close"),B(f([_e(w(32)),Ce(w(32)),sa(w(5)),vr(Ze(50)),ic(ue),ye(xo),be(L5),kr(da),le,He(de),Lr(de),Ea(ir),aa(dr(.9)),n(z,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),wa(f([aa(dr(1)),ye(C(ol,255,255,255,.18))]))]))]),f([Xe.qK]))}),z5=So("circle"),M5=Tr("cx"),D5=Tr("cy"),H5=Tr("r"),yL=n(ul,f([fl("0 0 24 24"),Pt("currentColor"),Gn(f([_e(w(18)),Ce(w(18))]))]),n(N,function(e){var r=e.a,a=e.b;return n(z5,f([M5(Ie(r)),D5(Ie(a)),H5("2")]),P)},f([p(9,5),p(15,5),p(9,12),p(15,12),p(9,19),p(15,19)]))),$l=ge("white-space"),CL=S(function(e,r,a){var t=n(Y,function(o){return s(G1,.45,o.F,r.pe(o))},e);return n(O,f([B(f([le,He(de),hr(he(0)),Ce(w(k5)),il(w(16)),Z1(w(8)),n(z,"gap","12px"),be(t)])),n(Jr,"dblclick",re(r.d6(vL(r.bI))))]),f([yL,n(O,f([B(f([Po(he(1)),$l(N1),Wt(qt),dL(sL),be(t),Oe(kn.rP),cc(w(.6)),J1(Y1)]))]),f([ne(r.iS)])),n(_L,r,a)]))}),jo=S(function(e,r,a){if(n(Wr,a.bI,a.bK)){var t=n(Y,n(Pe,a.pe,mr(.18)),e),o=n(Y,n(Pe,a.pe,mr(.35)),e),c=s(oL,r,a,a.bK),i=(function(){var g=(function(){var _=a.bz.pH;if(_.$){var y=_.a;return y}else{var y=_.a;return y}})();return"calc(100vh - "+(Z(g+E$)+"px)")})(),u=a.bK,$=u,v=n(S5,$.r_,a.bI)+"-body",d=n(S5,$.r_,a.bI),b=$.r_(a.bI),h="draggable-panel-"+(b+"-titlebar");return n(O,f([B(f([ye(t),C5(16),vr(n(Ya.qA,k5/2,1)),s(ht,w(1),xn,o),cl.q7,tr(Ct),Oe(nL(a.bz)),n(z,"width","-webkit-fit-content"),n(z,"width","fit-content"),n(z,"max-width","calc(100vw - "+(Z(2*E$)+"px)")),n(z,"max-height",i),le,yr(ra),Wt(qt),_t(he(Ut.oh+n(Ge,999,a.a7-1-a.d$))),Wn(Eu),n(z,"will-change","transform"),n(z,"user-select","none"),n(z,"-webkit-user-select","none"),kr(P5)])),bt(h),n(w5,"transform",n(tL,a.bz,c))]),f([s(CL,e,a,d),n(lL,v,a.hd)]))}else return ne("")}),PL=Te(function(e,r,a,t,o){return a.jN?ne(""):s(jo,e,r,{bz:um(t.lY),hd:o.hd,bI:o.bI,bK:a.ik,a7:t.a7,d$:t.d$,pe:o.pe,iS:o.iS,d6:a.d6})}),SL=S(function(e,r,a){if(nr(a.cu))return ne("");var t=kv(a.ik),o=xr(t),c=hn(n(Za,l(function(u,$){return p($.bI,u)}),a.cu)),i=hn(n(N,function(u){return p(u.bI,u)},a.cu));return n(O,f([bt(tT(a.gb))]),f([n(aL,e,a),n(O,P,n(Za,l(function(u,$){var v=n(Ke,$,i);if(v.$)return ne("");var d=v.a;return I(PL,e,r,a,{lY:n(oe,0,n(Ke,$,c)),a7:o,d$:u},d)}),t)),$5(a.ik)]))}),xL=Vr(function(e,r,a,t,o,c){var i=n(Ke,c,a.cY);if(i.$)return T;var u=i.a,$=Vn(r.bH),v=hu({fM:u.fM,ch:u.ch,aJ:r.aJ,bH:D(r.bH),bI:u.bI,g:n(s1,o,a.g),nN:u.nN,nY:Uc(r.bH),th:w$(u),aP:u.aP,cF:t,pA:u.pA,pJ:k$(r.bH)}),d=s(fm,"play:view",s(e.ba.bt,v,a.S,$),u.bK),b=C(e.ba.cu,v,a.S,$,u.bK),h=n(N,function(L){return{hd:n(ac,No(c),L.hd),ga:n(ac,No(c),L.ga),bI:L.bI,t8:L.t8,pe:L.pe,iS:L.iS}},b),g=o$(s(SL,$,v,{jN:v.pJ,gb:c,ik:u.ik,cu:h,d6:fp(c)})),_=ee(r.aJ,D(c)),y=n(lr,function(L){return L.bx},Vn(r.bH)),x=_?"4px solid "+ze(y):"none";return D(p(c,n(Bn,f([Lm(c),n(Sm,"data-play-pane",c),n(Q,"outline",x),n(Q,"border-radius","inherit")]),f([n(Mm,No(c),d),g]))))}),F5=function(e){return{$:1,a:e}},jL=l(function(e,r){return n(U$,e,F5(r))}),Nn=Ot("className"),Vu=Oe(f([aa(dr(.4)),n(z,"pointer-events","none")])),Ka=function(e){switch(e){case 0:return n(Pe,function(r){return r.kv},function(r){return r.p6});case 1:return n(Pe,function(r){return r.kv},function(r){return r.sr});case 2:return n(Pe,function(r){return r.kv},function(r){return r.rK});case 3:return n(Pe,function(r){return r.kv},function(r){return r.vl});case 4:return n(Pe,function(r){return r.kv},function(r){return r.tK});case 5:return function(r){return r.bx};case 6:return function(r){return r.bx};default:return n(Pe,function(r){return r.kv},function(r){return r.qM})}},wL=ge("padding-bottom"),A5=320,Xa={sL:'ui-monospace, "SF Mono", Menlo, Monaco, "Cascadia Mono", "Roboto Mono", Consolas, monospace',s3:'"Nunito", system-ui, sans-serif',uN:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},ll=ge("flex-grow"),B5=function(e){return n(O,f([B(f([Ce(w(1)),ll(he(1)),n(z,"background-color",ze(n(lr,function(r){return r.jf},e)))]))]),P)},K1=ge("margin-bottom"),I5=l(function(e,r){return n(O,f([B(f([le,He(de),n(z,"gap","14px"),K1(w(18))]))]),f([B5(e),n(O,f([B(f([n(z,"font-family",Xa.uN),Oe(kn.rP),cc(bi(.18)),J1(Y1),be(n(Y,function(a){return a.le},e)),hr(he(0)),n(z,"white-space","nowrap")]))]),f([ne(r)])),B5(e)]))}),kL=l(function(e,r){return{$:4,a:e,b:r}}),TL=l(function(e,r){return{$:3,a:e,b:r}}),LL=l(function(e,r){return{$:0,a:e,b:r}}),zL=l(function(e,r){return{$:2,a:e,b:r}}),ML=l(function(e,r){return{$:5,a:e,b:r}}),DL=l(function(e,r){return{$:1,a:e,b:r}}),uc=Un("input"),X1=Ot("max"),Q1=Ot("min"),HL=function(e){return p(e,!0)},Ou=l(function(e,r){return n(W1,e,F5(r))}),es=n(yu,f(["target","value"]),Se),hi=function(e){return n(Ou,"input",n(Ye,HL,n(Ye,e,es)))},rs=function(e){return n(Ot,"step",e)},wo=Ot("type"),fc=Ot("value"),R5=function(e){return n(uc,f([wo("range"),Q1(e.j9),X1(e.j6),rs(e.k$),fc(e.lo),si(e.jw),hi(e.kr),Nn("ui-slider"),B(f([_e(Ze(100)),Ce(w(32)),n(z,"-webkit-appearance","none"),n(z,"appearance","none"),ye(xo),n(z,"cursor","grab"),Ea(ir),n(z,"touch-action","none"),n(z,"--slider-fill",Z(e.jD)+"%"),e.jw?Vu:Oe(P)]))]),P)},FL=function(e){var r=X(e.nO,e.nT)>0?100*(e.uY-e.nT)/(e.nO-e.nT):0;return R5({jw:e.jw,jD:r,j6:Z(e.nO),j9:Z(e.nT),kr:function(a){return e.ic(n(oe,e.uY,$o(a)))},k$:Z(e.ul),lo:Z(e.uY)})},as=ge("space-between"),Cr=Un("span"),E5=l(function(e,r){return n(O,f([B(f([le,He(de),Lr(as),n(z,"gap","12px"),n(zr,w(10),ue)]))]),f([n(Cr,f([B(f([be(n(Y,function(a){return a.lf},e)),Oe(kn.eZ),n(z,"font-family",Xa.uN)]))]),f([ne(r.eZ)])),r.et]))}),AL=function(e){var r=e.nO-e.nT,a=r>0?100*(e.uY-e.nT)/r:0;return R5({jw:e.jw,jD:a,j6:Ie(e.nO),j9:Ie(e.nT),kr:function(t){return e.ic(n(oe,e.uY,Ec(t)))},k$:"1",lo:Ie(e.uY)})},vl=function(e){return n(z,"border-color",e.uY)},BL=(function(){var e="#6D6553",r="#A39980";return"linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 0 0 / 8px 8px,"+(" linear-gradient(45deg, "+(e+(" 25%, transparent 25%, transparent 75%, "+(e+(" 75%) 4px 4px / 8px 8px,"+(" "+r))))))))))})(),ns=ge("display"),Uu=V1("focus"),ts=function(e){return Oe(f([n(z,"outline","3px solid "+ze(n(mr,.25,e))),n(z,"outline-offset","0")]))},IL={qY:0,uY:"inline-block"},os="ui-color-swatch-popover",gi={ja:0,hf:0,uY:"border-box"},_i=ge("box-sizing"),RL=290,EL=function(e){var r=$o(e);if(r.$)return 0;var a=r.a;return s(er,0,1,a)},cs=l(function(e,r){var a=(function(){var c=r.iT;if(c.$)return P;var i=c.a;return f([n(Cr,f([B(f([n(z,"font-family",Xa.sL),br(w(13)),pa(he(600)),_e(w(40)),hr(he(0)),n(z,"text-align","right"),be(n(Y,function(u){return u.lf},e))]))]),f([ne(i)]))])})(),t=n(uc,f([wo("range"),Q1("0"),X1("1"),rs("0.01"),fc(Z(r.uY)),hi(function(c){return r.ic(EL(c))}),Nn(r.ir),n(Ne,"aria-label",r.eZ),B(f([Po(he(1)),Ce(w(26)),n(z,"-webkit-appearance","none"),n(z,"appearance","none"),n(z,"--track",r.hM),n(z,"background-color","transparent"),Ea(ir),n(z,"cursor","grab"),n(z,"touch-action","none"),sa(ue)]))]),P),o=n(Cr,f([B(f([n(z,"font-family",Xa.sL),br(w(14)),pa(he(700)),_e(w(18)),hr(he(0)),be(n(Y,function(c){return c.lf},e))]))]),f([ne(r.eZ)]));return n(O,f([B(f([le,He(de),n(z,"gap","10px")]))]),K(f([o,t]),a))}),Yr=Sh,V5="linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 0 0 / 14px 14px, linear-gradient(45deg, #6d6553 25%, transparent 25%, transparent 75%, #6d6553 75%) 7px 7px / 14px 14px, #a39980",VL=l(function(e,r){var a=r.uY,t="linear-gradient(to right, transparent, "+(ze(n(mr,1,a))+("), "+V5));return n(cs,e,{hM:t,eZ:"\u03B1",ic:function(o){return r.ic(M(a,{aT:o}))},ir:"ui-hsla-alpha",iT:D(Ie(Yr(a.aT*100))+"%"),uY:a.aT})}),OL=l(function(e,r){var a=Me(e-r);return n(Ge,a,1-a)}),Gr=S(function(e,r,a){return{aT:1,aX:e,D:a,a4:r}}),O5=f([s(Gr,6/360,.9,.62),s(Gr,33/360,1,.55),s(Gr,46/360,1,.55),s(Gr,80/360,.7,.52),s(Gr,150/360,.65,.46),s(Gr,172/360,.75,.45),s(Gr,185/360,1,.46),s(Gr,217/360,.88,.58),s(Gr,239/360,.84,.67),s(Gr,270/360,.8,.65),s(Gr,330/360,1,.69),s(Gr,350/360,.9,.63)]),yi=nh,UL=function(e){return n(oe,0,n(se,Fn,jr(n(yi,l$,n(Za,l(function(r,a){return p(r,n(OL,a.aX,e.aX))}),O5)))))},qL=function(e){return e?"0 0 0 3px rgba(0, 0, 0, 0.55), 0 0 0 6px #fff, 0 4px 10px -3px rgba(0, 0, 0, 0.5)":"inset 0 0 0 1px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.5)"},U5=32,WL=S(function(e,r,a){return n(qn,f([jn(e.ic(n(mr,e.uY.aT,a))),n(Ne,"aria-label","preset colour"),B(f([_e(w(U5)),Ce(w(U5)),hr(he(0)),vr(Ze(50)),ic(ue),sa(ue),kr(da),ye(or(a)),n(z,"box-shadow",qL(r))]))]),P)}),GL=function(e){var r=e.uY.a4<.08?-1:UL(e.uY);return n(O,f([B(f([n(z,"display","grid"),n(z,"grid-template-columns","repeat(6, 1fr)"),n(z,"gap","10px"),n(z,"justify-items","center")]))]),n(Za,l(function(a,t){return s(WL,e,ee(a,r),t)}),O5))},NL=l(function(e,r){return n(H,function(a){var t=z3(a);if(t.$)return Cn("invalid hex");var o=t.a;return re(r(n(mr,e.aT,o)))},es)}),ZL=Dm,is=ZL,us=S(function(e,r,a){var t=a<0?a+1:a>1?a-1:a;return X(t,1/6)<0?e+(r-e)*6*t:X(t,1/2)<0?r:X(t,2/3)<0?e+(r-e)*(2/3-t)*6:e}),JL=S(function(e,r,a){if(r<1e-10)return{i9:a,jK:a,kK:a};var t=a<.5?a*(1+r):a+r-a*r,o=2*a-t;return{i9:s(us,o,t,e-1/3),jK:s(us,o,t,e),kK:s(us,o,t,e+1/3)}}),q5=function(e){switch(e){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";default:return"f"}},fs=function(e){var r=s(er,0,255,e),a=r/16|0,t=n(Qr,16,r);return K(Wc(q5(a)),Wc(q5(t)))},YL=function(e){var r=s(JL,e.aX,e.a4,e.D);return"#"+(fs(Yr(r.kK*255))+(fs(Yr(r.jK*255))+fs(Yr(r.i9*255))))},KL=l(function(e,r){var a=sp(YL(r.uY));return s(is,"div",f([B(f([le,He(de),n(z,"gap","12px")]))]),f([p(a,n(uc,f([wo("text"),n(Ne,"value",a),n(Ne,"pattern","#?[0-9A-Fa-f]{6}"),n(Ne,"spellcheck","false"),n(Ne,"aria-label","Hex colour"),Nn("ui-hex-input"),n(Jr,"change",n(NL,r.uY,r.ic)),B(f([_e(Ze(50)),hr(he(0)),_i(gi),n(z,"font-family",Xa.sL),br(w(15)),pa(he(600)),cc(bi(.06)),J1(Y1),be(n(Y,function(t){return t.le},e)),ye(n(Y,function(t){return t.F},e)),s(ht,w(1),xn,n(Y,function(t){return t.jf},e)),vr(Ya.e4),n(zr,w(9),w(12)),Ea(ir)]))]),P)),p("warn",n(O,f([Nn("ui-hex-warn")]),f([ne("invalid hex")])))]))}),$s=S(function(e,r,a){return"hsl("+(Z(e*360)+(", "+(Z(r*100)+("%, "+(Z(a*100)+"%)")))))}),XL=l(function(e,r){var a=r.uY,t="linear-gradient(to right, #000, "+(s($s,a.aX,a.a4,.5)+", #fff)");return n(cs,e,{hM:t,eZ:"L",ic:function(o){return r.ic(M(a,{D:o}))},ir:"ui-hsla-rail",iT:T,uY:a.D})}),W5=120,QL=function(e){return n(O,f([B(f([le,Lr(de)]))]),f([n(O,f([B(f([tr(Co),_e(w(W5)),Ce(w(W5)),vr(Ze(50)),Wt(qt),n(z,"background",V5),n(z,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 12px 26px -10px rgba(0, 0, 0, 0.6)")]))]),f([n(O,f([B(f([tr(Sn),ja(ue),ba(ue),mt(ue),yt(ue),n(z,"background",ze(e))]))]),P)]))]))},ez=l(function(e,r){var a=r.uY,t="linear-gradient(to right, "+(s($s,a.aX,0,a.D)+(", "+(s($s,a.aX,1,a.D)+")")));return n(cs,e,{hM:t,eZ:"S",ic:function(o){return r.ic(M(a,{a4:o}))},ir:"ui-hsla-rail",iT:T,uY:a.a4})}),rz=l(function(e,r){return n(O,f([B(f([le,yr(ra),n(z,"gap","18px"),_e(w(RL)),_i(gi),sa(w(18)),ye(n(Y,function(a){return a.k3},e)),s(ht,w(1),xn,n(Y,function(a){return a.jf},e)),vr(Ya.vd),be(n(Y,function(a){return a.le},e)),n(z,"font-family",Xa.uN)]))]),f([QL(r.uY),n(KL,e,r),GL(r),n(ez,e,r),n(XL,e,r),n(VL,e,r)]))}),az=function(e){return M(e,{aT:1})},nz=l(function(e,r){var a=ze(r.uY),t=ze(az(r.uY));return n(O,f([B(f([ns(IL)]))]),f([n(qn,f([n(Ne,"popovertarget",r.bI),n(Ne,"aria-label","Pick colour"),n(Ne,"aria-haspopup","dialog"),n(w5,"background","linear-gradient(135deg, transparent 50%, "+(t+(" 50%), "+("linear-gradient(135deg, "+(a+(", "+(a+("), "+BL)))))))),B(f([_e(w(32)),Ce(w(32)),sa(ue),s(ht,w(1),xn,n(Y,function(o){return o.jf},e)),vr(Ya.e4),kr(da),Wt(qt),n(z,"box-shadow","inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.4)"),n(z,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),wa(f([vl(n(Y,function(o){return o.bx},e))])),Uu(f([ts(n(lr,function(o){return o.bx},e))]))]))]),P),n(O,f([bt(r.bI),n(Ne,"popover","auto"),n(Ne,"data-popover",""),Nn(os)]),f([n(rz,e,{ic:r.ic,uY:r.uY})]))]))}),G5=ge("baseline"),sl=l(function(e,r){return n(O,f([B(f([n(zr,w(10),ue)]))]),f([n(O,f([B(f([le,He(G5),Lr(as),n(z,"gap","12px"),K1(w(8))]))]),f([n(Cr,f([B(f([be(n(Y,function(a){return a.lf},e)),Oe(kn.eZ),n(z,"font-family",Xa.uN)]))]),f([ne(r.eZ)])),(function(){var a=r.uY;if(a.$)return ne("");var t=a.a;return n(Cr,f([B(f([be(n(Y,function(o){return o.bx},e)),Oe(kn.eZ),pa(he(600)),n(z,"font-family",Xa.sL),n(z,"font-feature-settings",'"tnum"')]))]),f([ne(t)]))})()])),r.et]))}),N5=Ot("placeholder"),kY=ae,tz=l(function(e,r){return{$:3,a:e,b:r}}),ls=function(e){return tz(e)},Zn={sk:w(16),e4:w(12),kW:w(8),vd:w(24),ve:w(4),vf:w(32),pG:w(2),vg:w(48)},oz=l(function(e,r){return n(uc,f([wo("text"),fc(r.uY),N5(r.kH),hi(r.ic),B(f([_e(Ze(100)),n(zr,w(10),Zn.e4),ye(n(Y,function(a){return a.k3},e)),be(n(Y,function(a){return a.le},e)),s(ht,w(1),xn,n(Y,function(a){return a.jf},e)),vr(Ya.e4),n(z,"font-family",Xa.sL),Oe(kn.hd),Ea(ir),n(z,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Uu(f([vl(n(Y,function(a){return a.bx},e)),ts(n(lr,function(a){return a.bx},e))])),n(ls,"placeholder",f([be(n(Y,function(a){return a.lc},e))]))]))]),P)}),Ci=j5("padding"),cz=Un("option"),iz=U1("selected"),uz=l(function(e,r){return n(cz,f([fc(r),iz(ee(r,e))]),f([ne(r)]))}),fz=Un("select"),$z=l(function(e,r){return n(fz,f([n(Jr,"change",n(Ye,r.tb,es)),B(f([_e(Ze(100)),n(z,"appearance","none"),n(z,"-webkit-appearance","none"),ye(n(Y,function(a){return a.k3},e)),be(n(Y,function(a){return a.le},e)),s(ht,w(1),xn,n(Y,function(a){return a.jf},e)),vr(Ya.e4),C(Ci,w(10),w(34),w(10),Zn.e4),n(z,"font-family",Xa.uN),Oe(kn.hd),pa(he(500)),kr(da),n(z,"background-image",`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D4A244' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M3 5l3 3 3-3'/></svg>")`),n(z,"background-repeat","no-repeat"),n(z,"background-position","right 12px center"),Ea(ir),n(z,"transition","border-color 160ms cubic-bezier(0.33, 1, 0.68, 1), background-color 160ms cubic-bezier(0.33, 1, 0.68, 1)"),wa(f([vl(n(Y,function(a){return a.i_},e)),ye(n(Y,function(a){return a.k4},e))])),Uu(f([vl(n(Y,function(a){return a.bx},e)),n(z,"box-shadow","0 0 0 3px "+ze(n(mr,.25,n(lr,function(a){return a.bx},e))))]))]))]),n(N,uz(r.t3),r.ti))}),lz=ls("after"),vz=q(function(e,r,a,t){return{$:7,a:e,b:r,c:a,d:t}}),qu=q(function(e,r,a,t){return C(vz,e,r,a,t)}),dl={cR:{p1:200,rp:120,ua:320},hB:{q9:C(qu,.33,1,.68,1),jL:C(qu,.45,.05,.25,1),r1:C(qu,.65,0,.35,1),ud:C(qu,.2,.9,.25,1),uf:C(qu,.34,1.56,.64,1)}},Pi=function(e){return al(f([e]))},vs=function(e){var r=e.uY;return{lh:0,uY:n($i,"translateX",f([r]))}},Z5=l(function(e,r){var a=r.nd?n(Y,function(i){return i.bx},e):n(Y,function(i){return i.jf},e),t=r.nd?20:0,o=r.nd?n(z,"box-shadow","0 0 14px "+ze(n(mr,.4,n(lr,function(i){return i.bx},e)))):x5(ir),c=r.nd?n(Y,function(i){return i.le},e):n(Y,function(i){return i.lc},e);return n(qn,f([B(f([tr(Co),_e(w(46)),Ce(w(26)),ye(a),vr(Ya.ts),ic(ue),kr(da),Ea(ir),nl(f([s(O1,220,0,dl.hB.jL)])),hr(he(0)),lz(f([n(z,"content",'""'),tr(Sn),ja(w(2)),ba(w(2)),_e(w(22)),Ce(w(22)),ye(c),vr(Ze(50)),Pi(vs(w(t))),o,nl(f([s(h5,220,0,dl.hB.uf),s(O1,220,0,dl.hB.jL),s(m5,220,0,dl.hB.jL)]))])),r.jw?Vu:Oe(P)])),jn(r.ob),si(r.jw),n(Ne,"aria-pressed",r.nd?"true":"false"),n(Ne,"aria-label",r.eZ)]),P)}),sz=l(function(e,r){var a=r.a,t=r.b;switch(t.$){case 0:var o=t.a,i=o.a,u=o.b,$=t.b;return n(sl,e,{et:FL({jw:!1,nO:u,nT:i,ic:LL(a),ul:.01*(u-i),uY:$}),eZ:a,uY:D(n(Zc,2,$))});case 2:var c=t.a,i=c.a,u=c.b,$=t.b;return n(sl,e,{et:AL({jw:!1,nO:u,nT:i,ic:zL(a),uY:$}),eZ:a,uY:D(Ie($))});case 4:var $=t.a;return n(E5,e,{et:n(Z5,e,{jw:!1,nd:$,eZ:a,ob:n(kL,a,!$)}),eZ:a});case 1:var $=t.a;return n(sl,e,{et:n(oz,e,{ic:DL(a),kH:"",uY:$}),eZ:a,uY:T});case 3:var $=t.a;return n(E5,e,{et:n(nz,e,{bI:"play-config-color-"+a,ic:TL(a),uY:$}),eZ:a});default:var v=t.a;return n(sl,e,{et:n($z,e,{tb:ML(a),ti:It(v),t3:dt(v)}),eZ:a,uY:T})}}),dz=l(function(e,r){return n(O,f([B(f([n(zr,ue,w(20))]))]),f([n(I5,e,r.sR),n(O,P,n(N,sz(e),r.bc))]))}),TY=1,LY=1,bz=q(function(e,r,a,t){return{bB:r,bJ:a,bQ:t,bW:e}}),pz=I(Xo,bz,n(j,"top",W),n(j,"bottom",W),n(j,"left",W),n(j,"right",W)),J5=n(yu,f(["currentTarget","boundingClientRect"]),pz),Y5=function(e){return n(Jr,"click",n(Ye,e,J5))},mz=l(function(e,r){var a=(function(){return r?p(40,Zn.sk):p(32,Zn.e4)})(),t=a.a,o=a.b;return f([Ce(w(t)),n(zr,ue,o),vr(Ya.ts),ic(ue),kr(da),Ea(ir),n(z,"font-family",Xa.uN),Oe(kn.eZ),le,He(de),Lr(de),n(z,"gap","6px"),n(z,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),Uu(f([ts(n(lr,function(c){return c.bx},e))]))])}),K5=function(e){return n(Or,"",e)},bl=function(e){return n(z,"box-shadow",K5(f(["inset ",Z(e*1.5),"px ",Z(e*1.5),"px ",Z(e*3),"px ",ze(n(mr,.6,so)),", inset 0 0 0 1px ",ze(n(mr,.35,so))])))},ss=l(function(e,r){return I(Ru,ue,ue,ue,w(e),or(r))}),hz=S(function(e,r,a){var t=l(function(i,u){return a?K(i,u):i});switch(r){case 0:var o=f([ye(n(Y,function(i){return i.bx},e)),be(n(Y,function(i){return s(G1,.6,i.bx,i.le)},e)),n(ss,1,n(lr,function(i){return i.i_},e))]),c=f([ye(n(Y,function(i){return i.i_},e)),bl(1.5)]);return K(n(t,o,c),f([wa(f([ye(n(Y,function(i){return i.i$},e))])),vi(c)]));case 1:var o=f([ye(n(Y,function(i){return i.k3},e)),be(n(Y,function(i){return i.le},e)),n(ss,1,n(lr,function(i){return i.jf},e))]),c=f([ye(n(Y,function(i){return i.k6},e)),bl(1.5)]);return K(n(t,o,c),f([wa(f([ye(n(Y,function(i){return i.k4},e))])),vi(c)]));default:var o=f([ye(xo),be(n(Y,function(i){return i.lf},e))]),c=f([ye(n(Y,function(i){return i.k6},e)),be(n(Y,function(i){return i.le},e)),bl(1.5)]);return K(n(t,o,c),f([wa(f([ye(n(Y,function(i){return i.k3},e)),be(n(Y,function(i){return i.le},e))])),vi(c)]))}}),X5=S(function(e,r,a){var t=(function(){var o=r.gE;return o?18:16})();return n(qn,n(F,B(K(n(mz,e,r.gE),K(s(hz,e,r.uZ,r.sa),r.jw?f([Vu]):P))),n(F,si(r.jw),a)),(function(){var o=r.ga;if(o.$)return f([ne(r.eZ)]);var c=o.a;return f([n(Cr,f([B(f([le,He(de),Lr(de),_e(w(t)),Ce(w(t)),hr(he(0))]))]),f([c])),ne(r.eZ)])})())}),gz=l(function(e,r){return s(X5,e,{jw:!1,ga:T,sa:!1,eZ:r.eZ,gE:1,uZ:1},f([Y5(r.bj)]))}),_z=function(e){return n(O,f([B(f([C(Ci,w(8),w(20),w(36),w(20)),le,Lr(de)]))]),f([n(gz,e.e,{eZ:"Reset Page's Configurations",bj:e.hp.n9})]))},Q5=l(function(e,r){return s(X5,e,{jw:r.jw,ga:r.ga,sa:r.sa,eZ:r.eZ,gE:r.gE,uZ:r.uZ},f([jn(r.bj)]))}),e4=l(function(e,r){return n(Q5,e,{jw:!1,ga:T,sa:!1,eZ:r.eZ,bj:r.bj,gE:1,uZ:1})}),r4={dG:0,uY:"bold"},yz=ge("margin"),Cz=ge("margin-top"),a4=ge("max-width"),n4=function(e){return s(Z$,"textAlign","text-align",e(J$))},Pz=(function(){var e=s(Gr,.11,.55,.2),r=s(Gr,.13,.8,.62),a=s(Gr,.13,.9,.9),t="play-reset-interface-help",o=function($){return n(O,f([B(f([n(zr,w(2),ue)]))]),f([ne("\u2022 "+$)]))},c=s(Gr,.13,1,.58),i=s(Gr,.13,.95,.52),u=s(Gr,.12,.85,.16);return n(Cr,f([B(f([le,He(de)]))]),f([n(qn,f([wo("button"),n(Ne,"popovertarget",t),n(Ne,"aria-label","What does resetting Play's interface clear?"),B(f([_e(w(20)),Ce(w(20)),sa(ue),n(z,"border","none"),vr(Ze(50)),kr(da),pa(r4),br(w(13)),wn(w(20)),n4(de),n(z,"background-color",ze(i)),n(z,"color",ze(u)),n(z,"transition","background-color 160ms"),wa(f([n(z,"background-color",ze(c))])),Uu(f([n(z,"outline","2px solid "+ze(c)),n(z,"outline-offset","2px")]))]))]),f([ne("?")])),n(O,f([bt(t),n(Ne,"popover","auto"),n(Ne,"data-popover",""),B(f([tr(Ct),yz(ue),n(z,"pointer-events","auto"),a4(w(250)),n(zr,w(12),w(14)),vr(w(10)),br(w(12.5)),wn(dr(1.5)),n(z,"background-color",ze(a)),n(z,"color",ze(e)),n(z,"border","1px solid "+ze(r)),n(z,"box-shadow","0 6px 20px rgba(0, 0, 0, 0.28)")]))]),f([n(O,f([B(f([pa(r4),K1(w(8))]))]),f([ne("Resetting Play's interface clears, for this browser:")])),o("Panel positions & sizes"),o("Light / dark theme"),o("Play / author mode"),o("Device-preview frame"),o("Tape \u201Crecord from start\u201D preference"),n(O,f([B(f([Cz(w(8)),aa(dr(.85))]))]),f([ne("Your configuration values (in the page URL) and any saved content aren\u2019t affected.")]))]))]))})(),Sz=function(e){return n(O,f([B(f([C(Ci,w(16),w(20),w(4),w(20)),le,He(de),Lr(de),n(z,"gap","8px")]))]),f([n(e4,e.e,{eZ:"Reset Play's Interface",bj:e.ko}),Pz]))},xz=function(e){var r=nr(e.qz.ch)?ne(""):_z(e);return n(O,f([B(f([_e(w(A5))]))]),f([Sz(e),r,n(ac,e.gq,n(O,f([B(f([le,yr(ra),n(z,"gap","18px"),wL(w(16))]))]),n(N,dz(e.e),e.qz.ch)))]))},jz=function(e){if(!e.ce.f5||e.pJ)return ne("");var r=s(jo,e.e,e.qz,{bz:_o(0),hd:xz(e),bI:0,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(0),pe:Ka(0),iS:"Configurations",d6:e.a$});return Et(e.uz)?n(O,f([B(f([Vu]))]),f([r])):r},ds=function(e){return{$:1,a:e}},zY=0,MY=0,wz=function(e){return e?Xe.qV:Xe.qW},kz=function(e){return e?"Landscape":"Portrait"},DY=1,HY=3,FY=2,Tz={$:2},Lz=l(function(e,r){return{$:0,a:e,b:r}}),zz={$:1},Mz={$:3},t4=function(e){return n(Jr,"mousedown",re(e))},Dz=function(e){return n(Jr,"mouseleave",re(e))},St=l(function(e,r){return f([n(Jr,"mouseenter",n(Ye,function(a){return e(n(Lz,r,a))},J5)),Dz(e(zz)),t4(e(Tz)),n(Jr,"mousemove",re(e(Mz)))])}),pl=l(function(e,r){var a=xr(r.sf),t=function(c){return a<=1?0:c?ee(c,a-1)?3:2:1},o=l(function(c,i){var u=r.nf(i);return n(y5,e,{i7:"radio",i8:p("aria-checked",v5(u)),jw:r.jw,ga:r.ga(i),nd:u,eZ:r.se(i),bj:r.tb(i),ki:r.t4(i),dX:r.dX,tB:t(c),bs:n(St,r.td,{ex:r.uH,eZ:r.se(i),t8:r.t8(i)})})});return s(p5,{jw:r.jw,dX:r.dX},f([n(Ne,"role","radiogroup"),n(Ne,"aria-label",r.eZ)]),n(Za,o,r.sf))}),Hz=q(function(e,r,a,t){return n(O,f([B(f([le,Lr(de),n(zr,w(6),w(0))]))]),f([n(pl,e,{jw:!1,ga:wz,nf:vn(t),se:kz,sf:f([0,1]),eZ:"Orientation",tb:n(cr,r.d6,ds),td:a,dX:0,t4:function(o){return function(c){return c.bx}},t8:function(o){return T},uH:0})]))}),Wu=function(e){return{jg:n(Y,function(r){return r.jg},e),kU:cl.q7,F:n(Y,function(r){return r.F},e),k7:n(Y,function(r){return r.k6},e),lc:n(Y,function(r){return r.lc},e),le:n(Y,function(r){return r.le},e),lf:n(Y,function(r){return r.lf},e),g4:Ut.oh}},Fz=function(e){return{$:0,a:e}},o4=function(e){return{$:3,a:e}},Si=l(function(e,r){return n(W1,e,o4(r))}),Az={$:2},Bz={$:1},Iz={$:3},Rz={$:4},ml=gg,Ez=Sr(ml,Te(function(e,r,a,t,o){return{i1:t,jq:r,jT:e,j7:o,kV:a}}),n(j,"key",Se),n(j,"ctrlKey",ie),n(j,"shiftKey",ie),n(j,"altKey",ie),n(j,"metaKey",ie)),Vz=l(function(e,r){return n(Ye,function(a){var t=a.j7,o=a.i1,c=a.kV,i=a.jq,u=a.jT,$=i||o||t;if($)return{Y:e.d6(Ia),aa:!1,ac:!1};if(u==="Tab")return{Y:e.d6(Ia),aa:!0,ac:!0};if(u==="ArrowUp")return{Y:e.d6(Bz),aa:!0,ac:!0};if(u==="ArrowDown")return{Y:e.d6(Az),aa:!0,ac:!0};if(u==="Enter")return{Y:e.d6(Iz),aa:!0,ac:!0};if(u==="Escape")return{Y:e.d6(Rz),aa:!0,ac:!0};if(u==="ArrowLeft"||u==="ArrowRight"){if(r.$)return{Y:e.d6(Ia),aa:!1,ac:!1};var v=r.a;return{Y:u==="ArrowLeft"?v.s8:v.ta,aa:!0,ac:!0}}else return{Y:e.d6(Ia),aa:!1,ac:!1}},Ez)}),c4=5,Oz=function(e){return s(Vt,e,!1,"")},i4=Oz,Uz={aa:!0,ac:!1},qz=l(function(e,r){return n(U$,e,o4(r))}),Wz=Te(function(e,r,a,t,o){return{qE:o,sd:t,tx:r,tz:a,tA:e}}),Gz=Te(function(e,r,a,t,o){return{rS:r,tE:a,uC:t,uD:o,u5:e}}),Nz=Sr(ml,Gz,n(j,"width",W),n(j,"height",W),n(j,"pressure",W),n(j,"tiltX",W),n(j,"tiltY",W)),Zz=Vr(function(e,r,a,t,o,c){return{qj:r,qw:a,be:e,s5:t,tk:o,t_:c}}),AY=4,BY=0,IY=5,RY=1,EY=2,VY=3,Jz=function(e){switch(e){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;default:return 0}},Yz=n(Ye,Jz,n(j,"button",Nr)),Kz=s(Ha,l(function(e,r){return p(e,r)}),n(j,"clientX",W),n(j,"clientY",W)),Xz=q(function(e,r,a,t){return{i1:e,jq:r,j7:a,kV:t}}),Qz=I(Xo,Xz,n(j,"altKey",ie),n(j,"ctrlKey",ie),n(j,"metaKey",ie),n(j,"shiftKey",ie)),eM=s(Ha,l(function(e,r){return p(e,r)}),n(j,"offsetX",W),n(j,"offsetY",W)),rM=s(Ha,l(function(e,r){return p(e,r)}),n(j,"pageX",W),n(j,"pageY",W)),aM=s(Ha,l(function(e,r){return p(e,r)}),n(j,"screenX",W),n(j,"screenY",W)),nM=ua(ip,Zz,Qz,Yz,Kz,eM,rM,aM),OY=0,UY=2,qY=1,tM=function(e){switch(e){case"pen":return 2;case"touch":return 1;default:return 0}},oM=n(Ye,tM,Se),cM=Sr(ml,Wz,n(j,"pointerType",oM),nM,n(j,"pointerId",Nr),n(j,"isPrimary",ie),Nz),iM=S(function(e,r,a){return n(qz,e,n(Ye,function(t){return{Y:a(t),aa:r.aa,ac:r.ac}},cM))}),u4=n(iM,"pointerdown",Uz),uM=function(e){return{$:5,a:e}},fM=function(e){return{$:6,a:e}},$M=q(function(e,r,a,t){return n(O,f([i4(u4(function(o){return e.d6(fM(t))})),jn(e.d6(uM(t)))]),f([n(r,a,t)]))}),lM=q(function(e,r,a,t){return nr(t.aV)?n(O,f([B(f([Ce(w(e.e2)),le,He(de),Lr(de),be(r.lc),hr(he(0))]))]),f([ne("No matching items")])):s(is,"div",f([bt(Yo(e)),B(f([Ce(w(e.e2)),C(Ci,w(0),w(4),w(0),w(4)),Wt(Eu),n(z,"overscroll-behavior","contain"),hr(he(0)),le,yr(ra)])),i4(u4(function(o){return e.d6(Ia)})),n(Jr,"scroll",n(Ye,n(Pe,j1,e.d6),n(yu,f(["currentTarget","scrollTop"]),W))),n(Si,"wheel",re({Y:e.d6(Ia),aa:!1,ac:!0}))]),(function(){var o=xr(t.aV),c=n(Ge,o-1,dv((t.b5+e.e2)/bo)+c4),i=n(Le,0,Da(t.b5/bo)-c4),u=i*bo,$=n(Za,l(function(d,b){var h=i+d;return p(Ie(h),C($M,e,a,ee(h,t.az),b))}),n(vt,c-i+1,n(lt,i,t.aV))),v=n(Le,0,o-1-c)*bo;return n(F,p("top-spacer",n(O,f([B(f([Ce(w(u)),hr(he(0))]))]),P)),K($,f([p("bottom-spacer",n(O,f([B(f([Ce(w(v)),hr(he(0))]))]),P))])))})())}),vM=function(e){return{$:9,a:e}},sM=function(e){return n(Ye,function(r){return{Y:e.d6(vM(r)),aa:!0,ac:!0}},n(j,"deltaY",W))},hl=ro(function(e,r,a,t,o,c,i){var u=i;return n(O,f([B(f([be(r.lf),le,yr(ra),n(z,"gap","8px"),_e(Ze(100))])),n(Si,"keydown",n(Vz,e,t)),n(Si,"mousedown",re({Y:e.d6(Ia),aa:!1,ac:!0})),n(Si,"pointerdown",re({Y:e.d6(Ia),aa:!1,ac:!0})),n(Si,"pointerup",re({Y:e.d6(Ia),aa:!1,ac:!0})),n(Si,"wheel",sM(e))]),K(a,K(f([n(uc,f([wo("text"),bt(gm(e)),n(Ne,"data-select-all-on-focus","true"),N5(e.kH),B(f([_e(Ze(100)),hr(he(0)),n(zr,w(8),w(8)),vr(w(4)),Ea(ir),ye(r.k7),be(r.le),n(ls,"placeholder",f([be(r.lc)]))])),hi(n(Pe,Fz,e.d6)),fc(u.iC)]),P),C(lM,e,r,o,u)]),c)))}),Gu=function(e){return e.D>.55?{aT:1,aX:0,D:.1,a4:0}:{aT:1,aX:0,D:.98,a4:0}},dM=function(e){return Z(e.gE.u5)+(" \xD7 "+Z(e.gE.rS))},f4=S(function(e,r,a){var t=r?Oe(f([ye(n(Y,function(c){return c.bx},e)),be(n(Y,n(Pe,function(c){return c.bx},Gu),e))])):be(n(Y,function(c){return c.le},e)),o=r?n(Y,n(Pe,function(c){return c.bx},Gu),e):n(Y,function(c){return c.lf},e);return n(O,f([B(f([n(zr,w(0),w(12)),Ce(w(32)),le,He(de),_i(gi),n(z,"gap","10px"),t]))]),f([n(Cr,f([B(f([ll(he(1)),br(w(13))]))]),f([ne(a.sR)])),n(Cr,f([B(f([br(w(12)),be(o)]))]),f([ne(dM(a))]))]))}),bM=q(function(e,r,a,t){var o=t;return ua(hl,Yc(r),Wu(e),f([C(Hz,e,r,a,o.dX)]),D({s8:r.d6(ds(0)),ta:r.d6(ds(1))}),f4(e),P,o.bm)}),bs=q(function(e,r,a,t){return n(O,f([B(f([tr(Ct),ja(ue),ba(ue),aa(dr(.001)),Wn(ir)])),n(Ne,"inert","")]),f([ua(hl,M(e,{fN:e.fN+"-warmup"}),r,P,T,a,P,t)]))}),pM=S(function(e,r,a){var t=a;return C(bs,Yc(r),Wu(e),f4(e),t.bm)}),mM=function(e){if(!e.ce.dI||e.pJ)return ne("");var r={fN:G3,d6:e.kl};return n(O,P,f([s(jo,e.e,e.qz,{bz:_o(7),hd:C(bM,e.e,r,e.td,e.U),bI:7,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(7),pe:Ka(7),iS:"Device",d6:e.a$}),s(pM,e.e,r,e.U)]))},hM=S(function(e,r,a){return(function(t){return s(dn,e,t,a.bO)})(s(me,e,r,a.bG))}),gM=l(function(e,r){return n(cr,n(hM,e,r),H$)}),_M=function(e){var r=e,a=s(gM,l(function(c,i){var u=i.a,$=i.b;return p(u+1,$+c.hx)}),p(0,0),r.gB),t=a.a,o=a.b;return t>1&&o>0?D(t/o):T},yM=ge("flex-end"),$4=function(e){return e*1e3},ps=function(e){var r=e.uY;return{lh:0,uY:n($i,"translateY",f([r]))}},CM=function(e){return n(O,f([B(f([tr(Sn),_e(Ze(100)),Ce(w(1)),al(f([ps(Ze(-50))])),ye(or(e.kv.rK)),yt(w($4(1/60)))]))]),P)},PM=function(e){return K(e.bG,Ve(e.bO))},SM=n(cr,PM,H$),xM=l(function(e,r){var a=r*1e3;return a<=18?e.kv.rK:a<=33?e.kv.vl:e.kv.tK}),jM=l(function(e,r){return n(O,f([B(f([Po(ir),_e(w(4)),Ce(w($4(r))),yt(ue),ye(or(n(xM,e,r)))]))]),P)}),wM=l(function(e,r){return n(O,f([B(f([tr(Co),Ce(w(50)),_e(w(Np*4)),Wt(qt),ye(or(e.k8))]))]),f([CM(e),n(O,f([B(f([tr(Sn),mt(ue),yt(ue),Ce(Ze(100)),le,yr(tc),He(yM)]))]),n(N,n(Pe,function(a){return a.hx},jM(e)),SM(r)))]))}),l4=l(function(e,r){if(e<0)return r;var a=n(va,10,e),t=hC(a),o=function(c){return c/a};return o(Yr(t(r)))}),kM=l(function(e,r){return e<0?r:n(l4,e,r)}),TM=function(e){return e>=0?"":"-"},Nu=l(function(e,r){var a=function(t){var o=n(Dn,".",t);e:for(;;)if(o.b)if(o.b.b){if(o.b.b.b)break e;var c=o.a,i=o.b,u=i.a;return c+("."+s(y$,e,"0",u))}else{var c=o.a;return c+("."+n(Go,e,"0"))}else break e;return t};return Uv(r)?"NaN":Nc(r)?TM(r)+"Infinity":e<=0?Z(n(kM,e,r)):a(Z(n(l4,e,r)))}),LM=l(function(e,r){return n(O,f([B(f([be(or(e.kv.rK))]))]),f([ne("Frame Rate: "),ne(n(oe,"-",n(se,Nu(0),r)))]))}),zM=l(function(e,r){var a=r;return n(O,f([B(f([le,yr(ra),n(z,"gap","8px")]))]),f([n(wM,e,a.gB),n(LM,e,_M(r))]))}),v4=function(e){return n(ge,"animation-duration",e)},MM=function(e){return{$:5,a:e}},s4=function(e){return e.uY==="none"||e.uY==="inherit"||e.uY==="unset"||e.uY==="initial"?n(ge,"animation-name",e):MM(e.uY)},WY=ae,$c=l(function(e,r){return e+(":"+r)}),DM=function(e){return ee(e,A$)},HM=function(e){var r=e.a,a=e.b,t=s(xa,function(c){var i=c;return i+";"},"",a),o=Ie(r)+"%";return o+("{"+(t+"}"))},FM=function(e){return s(xa,HM,"",e)},d4=function(e){return nr(e)?{jU:0,kf:0,uY:"none"}:{jU:0,kf:0,uY:FM(e)}},b4=function(e){return{cR:0,uY:Z(e)+"s"}},AM={$:2},BM={$:3},IM=function(e){return ee(e,A$)?BM:AM},RM=function(e){return{$:3,a:e}},EM=l(function(e,r){return{$:4,a:e,b:r}}),VM=function(e){return EM(n(N,RM,e))},OM=S(function(e,r,a){var t=DM(a),o=t?"Stop profiling":"Start profiling",c=t?n(O,f([B(f([_e(Ze(100)),Ce(Ze(100)),le,He(de),Lr(de),be(n(Y,n(Pe,function(i){return i.kv},function(i){return i.tK}),e)),s4(d4(f([p(0,f([n($c,"opacity","1")])),p(50,f([n($c,"opacity","0.35")])),p(100,f([n($c,"opacity","1")]))]))),v4(b4(1.2)),n(z,"animation-iteration-count","infinite"),n(z,"animation-timing-function","ease-in-out"),n(VM,f(["(prefers-reduced-motion: reduce)"]),f([n(z,"animation","none")]))]))]),f([Xe.tJ])):Xe.tJ;return n(O,f([B(f([le,Lr(de),_e(Ze(100))]))]),f([n(O,f([B(f([_e(w(160))]))]),f([n(Q5,e,{jw:!1,ga:D(c),sa:t,eZ:o,bj:r(IM(a)),gE:1,uZ:1})]))]))}),UM=function(e){var r=e.ce.eM?f([s(OM,e.e,e.gr,e.aO)]):P;return n(O,f([B(f([le,yr(ra),n(z,"gap","8px")]))]),n(F,n(zM,gn(e.e),e.dg),r))},qM=function(e){return!e.ce.f6||e.pJ||Et(e.uz)?ne(""):s(jo,e.e,e.qz,{bz:_o(2),hd:UM(e),bI:2,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(2),pe:Ka(2),iS:"Performance",d6:e.a$})},Zu=function(e){return e?"true":"false"},gl=function(e){var r=e.b;return vm(r)},Qa=S(function(e,r,a){return n(O,f([B(f([le,n(z,"gap","16px"),n(zr,w(3),ue),He(G5),n(z,"font-family",Xa.sL),br(w(12)),n(z,"font-feature-settings",'"tnum"')]))]),f([n(O,f([B(f([be(n(Y,function(t){return t.lc},e)),_e(w(120)),hr(he(0))]))]),f([ne(r)])),n(O,f([B(f([be(n(Y,function(t){return t.le},e))]))]),f([ne(a)]))]))}),_l=S(function(e,r,a){return n(O,f([B(f([n(zr,ue,w(20))]))]),n(F,n(I5,e,r),a))}),WM=function(e){var r=e.e,a=e.qz;return n(O,f([B(f([le,yr(ra),n(z,"gap","18px"),n(zr,w(14),ue),_e(w(A5))]))]),f([s(_l,r,"Tape",f([s(Qa,r,"frame",Ie(gl(e.uz))),s(Qa,r,"dt",n(Zc,4,a.hx)),s(Qa,r,"clock",n(Zc,4,a.fM))])),s(_l,r,"Pointer",f([s(Qa,r,"x",n(Zc,2,a.tx.pF)),s(Qa,r,"y",n(Zc,2,a.tx.pH)),s(Qa,r,"isDown",Zu(a.tx.sc))])),s(_l,r,"Keyboard",f([s(Qa,r,"pressed",n(Or," ",a.hT.tD)),s(Qa,r,"shift",Zu(a.hT.kV)),s(Qa,r,"ctrl",Zu(a.hT.jq)),s(Qa,r,"meta",Zu(a.hT.j7)),s(Qa,r,"alt",Zu(a.hT.i1))])),s(_l,r,"Wheel",f([s(Qa,r,"deltaX",Z(a.fx.mh)),s(Qa,r,"deltaY",Z(a.fx.mi))]))]))},GM=function(e){return!e.ce.f7||e.pJ?ne(""):s(jo,e.e,e.qz,{bz:_o(1),hd:WM(e),bI:1,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(1),pe:Ka(1),iS:"Inputs",d6:e.a$})},GY=1,p4=function(e){return{i1:!1,qy:e,jq:!1,j7:!1,kV:!1}},NM=function(e){return M(e,{j7:!0})},ms=function(e){return NM(p4(e))},ZM=function(e){return M(e,{jq:!0})},hs=function(e){return ZM(p4(e))},JM=function(e){return e===1?"\u2325":"Alt"},YM=function(e){return e===1?"\u2303":"Ctrl"},KM=l(function(e,r){if(n(pn,"Key",r))return n(Aa,3,r);if(n(pn,"Digit",r))return n(Aa,5,r);switch(r){case"BracketLeft":return"[";case"BracketRight":return"]";case"Slash":return"/";case"Backslash":return"\\";case"Period":return".";case"Comma":return",";case"Semicolon":return";";case"Quote":return"'";case"Backquote":return"`";case"Minus":return"-";case"Equal":return"=";case"Space":return"Space";case"ArrowLeft":return"\u2190";case"ArrowRight":return"\u2192";case"ArrowUp":return"\u2191";case"ArrowDown":return"\u2193";case"Enter":return e===1?"\u21A9":"Enter";case"Escape":return e===1?"\u238B":"Esc";case"Tab":return e===1?"\u21E5":"Tab";case"Backspace":return e===1?"\u232B":"Backspace";case"Delete":return e===1?"\u2326":"Del";default:return r}}),XM=function(e){return e===1?"\u2318":"Win"},QM=function(e){return e===1?"\u21E7":"Shift"},yl=l(function(e,r){var a=e===1?"":"+",t=n(wr,ae,f([r.jq?D(YM(e)):T,r.i1?D(JM(e)):T,r.kV?D(QM(e)):T,r.j7?D(XM(e)):T,D(n(KM,e,r.qy))]));return n(Or,a,t)}),eD=function(e){var r=(function(){var t=e.qz.kt===1?ms("KeyI"):hs("KeyI");return n(yl,e.qz.kt,t)})(),a=su(e.e);return n(pl,e.e,{jw:!1,ga:function(t){return t?Xe.us:Xe.sM},nf:vn(a),se:function(t){return t?"Lights on":"Lights off"},sf:f([!1,!0]),eZ:"Lights",tb:function(t){return ee(t,a)?e.e9:e.km(Yv(e.e))},td:e.td,dX:0,t4:function(t){return function(o){return li}},t8:function(t){return D(r)},uH:1})},rD={$:2},aD={$:3},nD=(function(){var e=j3,r=e.a,a=e.b;return n(F,r,a)})(),tD=function(e){return{$:1,a:e}},m4=Ot("title"),oD=q(function(e,r,a,t){var o=gn(e).kv,c=ee(t,a),i=n(Q3,t,o),u=n(lr,function(v){return v.jg},e),$=c?f([n(z,"outline","3px solid "+ze(u)),n(z,"outline-offset","2px")]):P;return n(qn,f([n(Ne,"aria-pressed",c?"true":"false"),n(Ne,"type","button"),m4(t3(t)),jn(r(tD(t))),B(K(f([_e(w(28)),Ce(w(28)),vr(Ze(50)),ye(or(i)),s(ht,w(1),xn,or(u)),kr(da),sa(w(0))]),$))]),P)}),cD=S(function(e,r,a){var t=dt(a);return n(O,f([n(Ne,"role","group"),n(Ne,"aria-label","Accent colour"),B(f([le,He(de),n(z,"gap","12px"),hr(he(0))]))]),n(N,s(oD,e,r,t),nD))}),iD=q(function(e,r,a,t){return n(O,f([B(f([le,He(de),Lr(de),n(z,"gap","14px"),n(zr,w(6),w(0)),hr(he(0))]))]),K(a,f([s(cD,e,r,t)])))}),uD=function(e){return n(O,f([B(f([_e(w(12)),Ce(w(12)),vr(w(2)),ye(or(e))]))]),P)},fD=function(e){return n(O,f([B(f([le,n(z,"gap","3px"),hr(he(0))]))]),n(N,uD,f([e.p_,e.rw,e.p6,e.rK,e.tK,e.vl])))},h4=S(function(e,r,a){var t=r?Oe(f([ye(n(Y,function(o){return o.bx},e)),be(n(Y,n(Pe,function(o){return o.bx},Gu),e))])):be(n(Y,function(o){return o.le},e));return n(O,f([B(f([n(zr,w(0),w(12)),Ce(w(32)),le,He(de),_i(gi),n(z,"gap","10px"),t]))]),f([fD(a),n(Cr,f([B(f([ll(he(1)),br(w(13))]))]),f([ne(a.sR)]))]))}),$D=q(function(e,r,a,t){var o=t;return ua(hl,Kc(r),Wu(e),f([C(iD,e,r.d6,a,o.c4)]),D({s8:r.d6(rD),ta:r.d6(aD)}),h4(e),P,o.bm)}),lD=S(function(e,r,a){var t=a;return C(bs,Kc(r),Wu(e),h4(e),t.bm)}),vD=function(e){if(!e.ce.co||e.pJ)return ne("");var r={fN:Y3,d6:e.ks};return n(O,P,f([s(jo,e.e,e.qz,{bz:_o(5),hd:C($D,e.e,r,f([eD(e)]),e.T),bI:5,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(5),pe:Ka(5),iS:"Theme",d6:e.a$}),s(lD,e.e,r,e.T)]))},sD=function(e){return s(Un,"style",P,f([ne(`
.`+(os+(` {
  position: fixed;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
}
.`+(os+`::backdrop {
  background: transparent;
}
`))))]))},dD=l(function(e,r){return`
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
`)))))}),bD=`
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
`,pD=function(e){var r=ze(n(mr,.25,n(lr,function(t){return t.bx},e))),a=ze(n(lr,function(t){return t.bx},e));return s(Un,"style",P,f([ne(K(bD,n(dD,a,r)))]))},mD=function(e){var r=ze(li),a=ze(n(mr,.25,n(lr,function(i){return i.bx},e))),t=ze(n(lr,function(i){return i.jf},e)),o=ze(n(lr,function(i){return i.i$},e)),c=ze(n(lr,function(i){return i.bx},e));return s(Un,"style",P,f([ne(`
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
    0 0 0 4px `+(a+`;
}
`))))))))))))))))))))))))))))]))},hD=l(function(e,r){return n(km,e+" ",r)}),gD=function(e){return{p_:n(Y,function(r){return r.bx},e),rw:or(Gu(n(lr,function(r){return r.bx},e))),g4:Ut.c1}},_D=function(e){return gD(e)},yD=function(e){return{$:5,a:e}},CD=function(e){return{$:11,a:e}},PD={$:15},SD=function(e){return{$:9,a:e}},xD={$:10},jD={$:7},wD={$:8},kD=function(e){var r=e,a=n(Za,l(function(t,o){return p(o,t)}),r.aN);return{a7:xr(r.aN),d0:function(t){return n(oe,0,n(se,l$,jr(n(Fr,function(o){var c=o.a;return ee(c,t)},a))))}}},TD=l(function(e,r){return{R:r.lu.R,qz:e.qz,hp:{n9:n(cr,e.d6,SD),pj:n(se,function(a){return{bz:a.bz,h9:a.h9}},r.en)},U:r.U,f:r.f,fZ:e.fZ,dg:r.dg,nY:r.nY,e9:e.d6(PD),kj:n(cr,e.d6,pm),kk:e.d6(yp),gq:e.gq,kl:n(cr,e.d6,W3),a$:n(cr,e.d6,hp),km:function(a){return e.d6(yD(a))},kn:n(cr,e.d6,CD),ko:e.d6(xD),kp:e.d6(jD),gr:n(cr,e.d6,gp),kq:e.d6(wD),dW:e.dW,ks:n(cr,e.d6,J3),fa:e.fa,td:n(cr,e.d6,_p),aO:r.aO,bP:r.bP,aB:kD(r.f),uz:e.uz,T:r.T,e:r.e,c1:r.c1,ce:e.gD,pJ:r.pJ}}),LD=l(function(e,r){switch(e){case 3:return{pF:r.bQ,pH:.5*(r.bW+r.bB)};case 2:return{pF:r.bJ,pH:.5*(r.bW+r.bB)};case 0:return{pF:.5*(r.bJ+r.bQ),pH:r.bW};default:return{pF:.5*(r.bJ+r.bQ),pH:r.bB}}}),NY=1,zD={mA:0,f2:0,dG:0,e1:0,of:0,uY:"normal",ed:0},Cl=S(function(e,r,a){switch(e){case 0:return r;case 1:return .5*(r+a);default:return a}}),MD=q(function(e,r,a,t){switch(r){case 0:return p(s(Cl,a,e.bJ,e.bQ),e.bW-t);case 1:return p(s(Cl,a,e.bJ,e.bQ),e.bB+t);case 2:return p(e.bJ-t,s(Cl,a,e.bW,e.bB));default:return p(e.bQ+t,s(Cl,a,e.bW,e.bB))}}),Pl=function(e){switch(e){case 0:return"0";case 1:return"-50%";default:return"-100%"}},g4=function(e){var r=e.rG,a=e.pO,t=e.ex,o=e.bz,c=(function(){switch(t){case 0:return"-100%";case 1:return"0";case 2:return Pl(a);default:return Pl(a)}})(),i=(function(){switch(t){case 0:return Pl(a);case 1:return Pl(a);case 2:return"-100%";default:return"0"}})(),u="translate("+(i+(", "+(c+")"))),$=C(MD,o,t,a,r),v=$.a,d=$.b;return f([tr(Ct),ba(w(v)),ja(w(d)),n(z,"transform",u)])},DD=l(function(e,r){return n(O,f([B(K(g4({pO:1,bz:r.bz,ex:r.ex,rG:6}),f([n(zr,w(7),w(14)),ye(e.p_),be(e.rw),vr(Ya.e4),_t(he(e.g4)),le,yr(tc),n(z,"gap","12px"),n(z,"width","max-content"),$l(zD),a4(w(360)),wn(dr(1.45))])))]),f([n(Cr,P,f([ne(r.eZ)])),(function(){var a=r.t8;if(a.$===1)return ne("");var t=a.a;return n(Cr,f([B(f([be(e.rw)]))]),f([ne(t)]))})()]))}),HD=l(function(e,r){return{ha:0,cM:0,uY:K(Z(r),e)}}),FD=HD("deg"),AD=function(e){var r=e.uY;return{lh:0,uY:n($i,"rotate",f([r]))}},BD=S(function(e,r,a){return n(O,f([B(f([tr(Ct),ba(w(a.pF)),ja(w(a.pH)),ye(e.p_),_e(w(10)),Ce(w(10)),_t(he(e.g4)),n(z,"transform-origin","top left"),Pi(AD(FD((function(){switch(r){case 3:return-45;case 2:return 135;case 1:return 45;default:return-135}})())))]))]),P)}),_4=l(function(e,r){return n(O,P,f([s(BD,e,r.ex,n(LD,r.ex,r.bz)),n(DD,e,r)]))}),ID=l(function(e,r){var a=r;if(a.$){var t=a.a,o=t._;switch(o.$){case 1:return n(_4,e,t);case 2:return n(_4,e,t);case 0:return ne("");default:return ne("")}}else return ne("")}),RD=480,ED=l(function(e,r){return e.ht}),y4=ge("min-width"),VD=q(function(e,r,a,t){var o=a?Oe(f([ye(n(Y,function(c){return c.bx},e)),be(n(Y,n(Pe,function(c){return c.bx},Gu),e))])):be(n(Y,function(c){return c.le},e));return n(O,f([B(f([le,Lr(as),He(de),n(zr,w(0),w(12)),Ce(w(32)),_i(gi),o]))]),f([n(Cr,f([B(f([br(w(13)),ll(he(1))]))]),f([ne(t.iF+(": "+t.eZ))])),n(Cr,f([B(f([br(w(13)),y4(w(70)),hr(he(0)),n4(mt)]))]),f([ne(n(oe,"",n(se,yl(r.kt),n(ED,t,r))))]))]))}),OD=function(e){return{fN:mm,e2:320,kH:"Type a command\u2026",d6:e,u5:{sF:400,u1:50}}},UD=function(e){if(n(Cu,e.ce,e.R)){var r=n(VD,e.e,e.qz),a=Wu(e.e),t=OD(e.kj);return n(O,P,f([s(jo,e.e,e.qz,{bz:_o(6),hd:n(O,f([B(f([_e(w(RD))]))]),f([ua(hl,t,a,P,T,r,P,e.R)])),bI:6,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(6),pe:Ka(6),iS:"Command palette",d6:e.a$}),C(bs,t,a,r,e.R)]))}else return ne("")},qD=l(function(e,r){return n(O,f([n(Ne,"role","status"),B(K(g4({pO:r.pO,bz:r.bz,ex:r.ex,rG:6}),f([n(zr,Zn.kW,Zn.sk),vr(Ya.e4),ye(n(Y,function(a){return a.bx},e)),be(n(Y,function(a){return s(G1,.6,a.bx,a.le)},e)),Oe(kn.iS),$l(N1),cl.q7,_t(he(Ut.pj)),n(z,"pointer-events","none"),s4(d4(f([p(0,f([n($c,"opacity","0")])),p(8,f([n($c,"opacity","1")])),p(92,f([n($c,"opacity","1")])),p(100,f([n($c,"opacity","0")]))]))),v4(b4(hm)),n(z,"animation-fill-mode","forwards")])))]),f([ne(r.Y)]))}),WD=function(e){var r=e.hp.pj;if(r.$===1)return ne("");var a=r.a.h9,t=r.a.bz;return n(qD,e.e,{pO:1,bz:t,ex:1,Y:a?"Nothing to Reset":"Use the browser's Back button to undo"})},GD=function(e){var r=l(function(a,t){return"inset 0 0 "+(Z(a)+("px 0 "+ze(n(mr,t,e))))});return n(Or,", ",f([n(r,90,.22),n(r,30,.4),n(r,8,.65)]))},C4=function(e){switch(e){case 0:return T;case 1:return D(s(Gr,1/6,1,.5));default:return D(s(Gr,1/3,1,.5))}},ND=function(e){var r=C4(e.nY);if(r.$===1)return ne("");var a=r.a;return n(O,f([B(f([tr(Ct),ja(ue),ba(ue),mt(ue),yt(ue),n(z,"pointer-events","none"),n(z,"box-shadow",GD(a))]))]),P)},ZY=0,P4=n(Iu,0,"rem"),ZD=function(e){if(!Et(e.uz)||e.pJ)return ne("");var r=e.qz.bT,a=e.qz.tx,t=ze(a.sc?n(lr,function(c){return c.le},e.e):n(lr,function(c){return c.bx},e.e)),o=n(Or," ",f(["drop-shadow(1px 0 "+(t+")"),"drop-shadow(-1px 0 "+(t+")"),"drop-shadow(0 1px "+(t+")"),"drop-shadow(0 -1px "+(t+")")]));return n(O,f([B(f([tr(Sn),ja(ue),ba(ue),_e(P4(2)),Ce(P4(2)),n(z,"pointer-events","none"),n(z,"transform","translate("+(Z(a.pF+.5*r.u5)+("px, "+(Z(-a.pH+.5*r.rS)+"px)")))),be(a.sc?n(Y,function(c){return c.bx},e.e):n(Y,function(c){return c.le},e.e)),n(z,"filter",o),_t(he(Ut.ba+1))]))]),f([Xe.tx]))},JD=function(e){return{$:0,a:e}},YD=ug,JY=ae,KD=function(e){return n(H,e,re(0))};function gs(){return ei(_s())}function _s(){return C(Qc,S(function(e,r,a){return{hg:r,dD:a,cR:e}}),n(j,"duration",W),n(j,"callCount",Nr),n(j,"children",KD(function(e){return gs()})))}var S4=gs();gs=function(){return S4};var XD=_s();_s=function(){return XD};var QD=function(e){return n(Ye,e,n(yu,f(["detail"]),s(Ha,l(function(r,a){return{gx:r,aD:a}}),n(j,"recordingStartTime",W),n(j,"tickSnapshots",YD(s(Ha,l(function(r,a){return{jE:a,dv:r}}),n(j,"timestamp",W),n(j,"flameGraph",S4)))))))},eH=function(e){var r=e.s9,a=e.tX;return s(Un,"profiler-element",K(f([n(Jr,"result",QD(r))]),a?f([n(Ne,"running","")]):P),P)},rH=function(e){return eH({s9:JD,tX:ee(e,A$)})},aH=function(e){return nr(e)?{uY:"none"}:{uY:n(Or,", ",e)}},nH=n(cr,ge("font-family"),aH),ys=l(function(e,r){return n(V$,l(function(a,t){var o=t,c=n(Ke,a,e);if(c.$===1)return o;var i=c.a;return{hg:o.hg-i.hg,dD:n(ys,i.dD,o.dD),cR:o.cR-i.cR}}),r)}),x4=l(function(e,r){var a=e.cT,t=e.c$,o=r.aD,c=t?n(oe,Ae,n(se,function(u){return u.jE},n(qr,t-1,o))):Ae,i=n(oe,Ae,n(se,function(u){return u.jE},n(qr,a,o)));return n(ys,c,i)}),tH=ge("max-height"),Cs=function(e){return s(nu,S(function(r,a,t){return n(F,a,t)}),P,e)},xi=function(e){return{$:9,a:e}},j4=function(e){var r=(function(a){return 1-a.iX/a.h4})(s(me,l(function(a,t){var o=n(Qr,t.gn,ct(a));return{h4:t.h4+t.g$,gn:t.gn+1,iX:t.iX+o/(t.gn-1)*t.g$,g$:t.g$*.7}}),{h4:0,gn:10,iX:0,g$:1},n(vt,8,qc(e))));return{aT:1,aX:r,D:.35,a4:.45}},oH=function(e){return n(Jr,"mouseout",re(e))},cH=function(e){return n(Jr,"mouseover",re(e))},iH=Vr(function(e,r,a,t,o,c){var i=a>0?c/a*100:0,u=ee(t,D(o)),$=or(u?e.le:j4(o)),v=!ee(t,T),d=dr(v&&!u?.3:1);return n(O,f([B(f([tr(Co),il(w(r*16)),Ce(w(24)),wn(w(24)),kr(da),aa(d),wa(f([ye(or(e.k6)),be(or(e.le))]))])),cH(xi(D(o))),oH(xi(T))]),f([n(O,f([B(f([tr(Sn),ja(ue),ba(w(r*16)),_e(Ze(i)),Ce(Ze(100)),ye($)]))]),P),n(Cr,f([B(f([tr(Co),il(w(6)),_t(he(1))]))]),f([ne(o)]))]))}),uH=Te(function(e,r,a,t,o){var c=o.a,i=o.b.dD,u=o.b.cR;return n(F,Sr(iH,e,r,a,t,c,u),I(w4,e,r+1,a,t,i))}),w4=Te(function(e,r,a,t,o){return n(En,C(uH,e,r,a,t),n(yi,Fn,ln(o)))}),fH=Te(function(e,r,a,t,o){var c=s(xu,r,a,t),i=c.a,u=i.b,$=c.b,v=$.b,d=n(x4,{cT:v,c$:u},t),b=n(oe,0,M$(n(N,function(h){var g=h.cR;return g},Cs(d))));return n(O,f([B(f([sa(w(8)),T5(Eu),tH(w(300)),ye(or(e.k8)),be(or(e.lf))]))]),I(w4,e,0,b,o,d))}),Ps=function(e){return s(Z$,"alignSelf","align-self",e(J$))},k4={qY:0,uY:"block"},$H=ge("flex-start"),lc=Tr("height"),T4=Jr,vc=So("g"),Sl=So("line"),L4=l(function(e,r){var a=r.aD,t=function(o){return o<0?Ae:n(oe,Ae,n(se,function(c){return c.jE},n(qr,o,a)))};return n(ys,t(e-1),t(e))}),z4=function(e){return e.$===-2},M4=function(e){return z4(e)?0:n(oe,0,M$(n(N,function(r){var a=r.dD;return 1+M4(a)},Cs(e))))},lH=function(e){var r=Br(e.aD);return n(oe,0,M$(n(N,function(a){return M4(n(L4,a,e))},n(Na,1,r-1))))},vH=function(e){return n(yi,ae,e)},xl=l(function(e,r){var a=r.gx,t=r.aD;return e?n(oe,a,n(se,function(o){return o.dv},n(qr,e-1,t))):a}),D4=l(function(e,r){var a=n(oe,r.gx,n(se,function(t){return t.dv},n(qr,e,r.aD)));return a-n(xl,e,r)}),sH=function(e){var r=Br(e.aD),a=vH(n(N,function(o){return n(D4,o,e)},n(Na,1,r-1))),t=n(Le,0,Da(xr(a)*.95)-1);return n(oe,16.7,jr(n(lt,t,a)))},ji=So("rect"),Ju=Tr("stroke"),Yu=Tr("stroke-width"),dH=function(e){return{$:5,a:e}},bH=function(e){return{$:6,a:e}},pH={aU:0,uY:"ew-resize"},jl=Tr("x1"),wl=Tr("x2"),kl=Tr("y1"),Tl=Tr("y2"),mH=q(function(e,r,a,t){var o=a.a,c=a.b,i=n(la,r,Pn.iL),u=n(la,r,Pn.ix),$=function(V){return n(Ye,function(E){return V({fL:E})},n(j,"clientX",W))},v=l(function(V,E){return n(vc,P,f([n(Sl,f([jl(Z(V)),kl("0"),wl(Z(V)),Tl(Z(i)),Ju("transparent"),Yu(Z(n(la,r,10))),Gn(f([kr(pH)])),n(T4,"pointerdown",$(E))]),P),n(Sl,f([jl(Z(V)),kl("0"),wl(Z(V)),Tl(Z(i)),Ju(ze(e.kv.tK)),Yu(Z(n(la,r,1))),Gn(f([Wn(ir)]))]),P)]))}),d=s(xu,r,n(ii,o,c),t),b=d.a,h=b.a,g=b.b,_=d.b,y=_.a,x=_.b,L=h,k=y,A=(function(){if(o.$){var V=o.a,E=(function(){return V?n(oe,t.gx,n(se,function(G){return G.dv},n(qr,x,t.aD))):n(xl,g,t)})();return n(Sl,f([jl(Z(E)),kl("0"),wl(Z(E)),Tl(Z(u)),Ju(ze(e.kv.tK)),Yu(Z(n(la,r,2))),Gn(f([Wn(ir)]))]),P)}else return n(vc,P,P)})();return n(vc,P,f([n(v,L,dH),n(v,k,bH),A]))}),H4=S(function(e,r,a){return ee(r,D(a))?ze(e.le):ze(j4(a))}),F4=l(function(e,r){if(e.$)return 1;var a=e.a;return ee(a,r)?1:.3}),A4=function(e){return n(Jr,"mouseout",re(e))},B4=function(e){return n(Jr,"mouseover",re(e))},Ss=Tr("opacity"),xs=wm,I4=So("title"),sc=Tr("width"),dc=Tr("x"),bc=Tr("y"),hH=l(function(e,r){var a=r.m8,t=r.mm,o=r.eZ,c=r.rS,i=r.u5,u=r.pH,$=r.pF,v=o+(" ("+(n(Nu,2,t)+"ms)")),d=n(F4,e.cp,o),b=s(H4,e.du,e.cp,o),h=n(ji,f([dc(Z($)),bc(Z(u)),sc(Z(i)),lc(Z(c)),Pt(b),Ss(Z(d)),B4(xi(D(o))),A4(xi(T))]),f([n(I4,P,f([xs(v)]))])),g=a?f([n(ji,f([dc(Z($)),bc(Z(u)),sc(Z(i)),lc(Z(n(la,e.a9,2))),Pt(ze(e.du.kv.tK)),Gn(f([Wn(ir)]))]),P)]):P;return n(F,h,g)}),R4=q(function(e,r,a,t){return s(me,l(function(o,c){var i=o.a,u=o.b,$=c.a,v=c.b,d=u.cR/e.e7,b=X(d,e.cI)>0,h=C(R4,e,r+1,$,u.dD),g=n(Ge,e.cI,d),_=n(hH,e,{mm:u.cR,rS:g,m8:b,eZ:i,u5:e.iK,pF:e.dE+r*e.iK,pH:e.cI-$-g});return p($+g,K(_,K(h,v)))}),p(a,P),n(yi,Fn,ln(t))).b}),gH=l(function(e,r){var a=e.pC/e.e7,t=n(Ge,e.cI,a),o=X(a,e.cI)>0,c=n(la,e.a9,1),i=n(Le,0,e.pd-c),u=n(Ge,i,n(la,e.a9,Pn.pc)),$=n(ji,f([dc(Z(e.dE)),bc(Z(e.cI-t)),sc(Z(u)),lc(Z(t)),Pt(ze(e.du.lc)),Gn(f([Wn(ir)]))]),P),v=n(la,e.a9,2),d=o?f([n(ji,f([dc(Z(e.dE)),bc("0"),sc(Z(u)),lc(Z(v)),Pt(ze(e.du.kv.tK)),Gn(f([Wn(ir)]))]),P)]):P,b=n(Le,0,i-u),h=e.dE+u,g=(function(){if(b<=0||e.j5<=0||z4(r))return P;var _=b/e.j5;return C(R4,{dE:h,cp:e.cp,e7:e.e7,cI:e.cI,iK:_,du:e.du,a9:e.a9},0,0,r)})();return n(F,$,K(d,g))}),_H=l(function(e,r){var a=function(i){return n(oe,0,n(se,function(u){return u.dv},n(qr,i,r.aD)))},t=n(Le,1,n(B$,e.bJ,r)-1),o=Br(r.aD),c=n(Ge,o-1,n(B$,e.bQ,r)+1);return n(Fr,function(i){var u=n(xl,i,r),$=a(i);return X($,e.bJ)>-1&&X(u,e.bQ)<1},n(Na,t,c))}),yH=Te(function(e,r,a,t,o){var c=n(_H,r,t),i=n(la,r,Pn.ix),u=lH(t),$=n(Le,33.3,sH(t)),v=$>0?$/i:1,d=n(En,function(_){var y=n(D4,_,t);return n(gH,{dE:n(xl,_,t),cp:o,j5:u,e7:v,cI:i,du:e,pd:y,pC:y,a9:r},n(L4,_,t))},c),b=16.7/v,h=n(Sl,f([jl(Z(r.bJ)),wl(Z(r.bQ)),kl(Z(i-b)),Tl(Z(i-b)),Ju(ze(e.kv.vl)),Yu(Z(n(la,r,1))),Gn(f([Wn(ir)]))]),P),g=n(ji,f([dc(Z(r.bJ)),bc("0"),sc(Z(r.bQ-r.bJ)),lc(Z(i)),Pt(ze(e.k8))]),P);return n(vc,P,f([g,n(vc,P,d),h,C(mH,e,r,a,t)]))}),CH=Tr("transform"),PH=Tr("font-size"),SH=So("text"),xH=l(function(e,r){var a=e.lG,t=e.og,o=e.mF,c=.6*o,i=Da((a-t)/c);return X(Fa(r),i)<1?r:i<=1?"":n(Rc,i-1,r)+"\u2026"}),jH=Vr(function(e,r,a,t,o,c){var i=c.hg,u=c.cR,$=n(la,r,Pn.oM),v=.3*$,d=a.fW*$,b=n(F4,t,o),h=.6*$,g=s(H4,e,t,o),_=n(Or," > ",Ve(n(F,o,a.fI))),y=_+(" ("+(Ie(i)+("x, "+(n(Nu,2,u)+"ms)"))));return n(vc,f([B4(xi(D(o))),A4(xi(T))]),f([n(I4,P,f([xs(y)])),n(ji,f([dc(Z(a.ee)),bc(Z(d)),sc(Z(u)),lc(Z($)),Pt(g),Ju(ze(e.k5)),Yu(Z(n(la,r,1))),Ss(Z(b))]),P),n(SH,f([dc(Z(a.ee+v)),bc(Z(d+.7*$)),Pt(ze(e.le)),PH(Z(h)),Ss(Z(b))]),f([xs(n(xH,{lG:u,mF:h,og:v},y))]))]))}),E4=Te(function(e,r,a,t,o){return s(me,l(function(c,i){var u=c.a,$=c.b,v=i.a,d=i.b,b=I(E4,e,r,{fI:n(F,u,a.fI),fW:a.fW+1,ee:v},t,$.dD),h=Sr(jH,e,r,M(a,{ee:v}),t,u,$);return p(v+$.cR,n(F,h,K(b,d)))}),p(a.ee,P),n(yi,function(c){var i=c.a;return i},ln(o))).b}),wH=Te(function(e,r,a,t,o){var c=n(la,r,Pn.ix),i=s(xu,r,a,t),u=i.a,$=u.a,v=u.b,d=i.b,b=d.b;return n(vc,f([CH("translate("+(Z($)+(", "+(Z(c)+")"))))]),I(E4,e,r,{fI:P,fW:0,ee:0},o,n(x4,{cT:b,c$:v},t)))}),kH=function(e){return{$:1,a:e}},TH=C(Qc,S(function(e,r,a){return kH({n_:a/Pn.iM,oP:e,oQ:r})}),n(j,"deltaX",W),n(j,"deltaY",W),n(j,"offsetX",W)),LH=function(e){var r=e.bQ-e.bJ;return n(Or," ",n(N,Z,f([e.bJ,0,r,n(la,e,Pn.iL)])))},zH=Te(function(e,r,a,t,o){var c=r.bQ-r.bJ,i=n(ul,f([sc(Z(Pn.iM)),lc(Z(Pn.iL)),fl(LH(r)),n(T4,"wheel",TH),Gn(f([ye(or(e.F)),ns(k4)]))]),f([I(yH,e,r,a,t,o),I(wH,e,r,a,t,o)])),u=function(_){return n(O,f([B(K(f([tr(Sn),ja(ue),yt(ue),Wn(ir),n(z,"backdrop-filter","blur(3px)"),n(z,"-webkit-backdrop-filter","blur(3px)")]),_))]),P)},$=function(_){return c?s(er,0,1,(_-r.bJ)/c):0},v=s(xu,r,a,t),d=v.a,b=d.a,h=v.b,g=h.a;return n(O,f([B(f([tr(Co),Ps($H)]))]),f([i,u(f([ba(ue),_e(Ze($(b)*100))])),u(f([mt(ue),_e(Ze((1-$(g))*100))]))]))}),MH=l(function(e,r){var a=Br(r.aD),t=gn(e),o=(function(){var u=n(qr,a-1,r.aD);if(u.$)return 0;var $=u.a;return $.dv-r.gx})(),c=o>=1e3?n(Nu,2,o/1e3)+" s":n(Nu,0,o)+" ms",i=Ie(a)+(" ticks \xB7 "+c);return n(O,f([B(f([le,He(de),Ce(w(24)),n(zr,w(4),w(8))]))]),f([n(Cr,f([B(f([be(or(t.le))]))]),f([ne(i)]))]))}),DH=l(function(e,r){var a=gn(e);return n(O,f([B(f([le,yr(ra),be(or(a.lf)),nH(f(["monospace"])),br(w(12)),n(z,"user-select","none")]))]),f([n(MH,e,r.d_),I(zH,a,r.a9,r.bo,r.d_,r.cp),I(fH,a,r.a9,r.bo,r.d_,r.cp)]))}),HH=l(function(e,r){if(r.$===3){var a=r.a;return D(n(DH,e,a))}else return T}),FH=function(e){if(e.ce.eM){var r=(function(){var t=n(HH,e.e,e.aO);if(t.$)return ne("");var o=t.a;return s(jo,e.e,e.qz,{bz:_o(3),hd:n(ac,e.gr,o),bI:3,bK:e.f,a7:e.aB.a7,d$:e.aB.d0(3),pe:Ka(3),iS:"Profile",d6:e.a$})})(),a=n(ac,e.gr,rH(e.aO));return n(O,P,f([a,r]))}else return ne("")},AH=lr(n(Pe,function(e){return e.kv},function(e){return e.tK})),js=l(function(e,r){return ze(n(mr,r,AH(e.e)))}),BH=S(function(e,r,a){var t=f([n(z,"background-color",n(js,e,.28)),n(z,"-webkit-backdrop-filter","blur(18px)"),n(z,"backdrop-filter","blur(18px)")]),o="radial-gradient(circle 16px at 100% 0%, transparent 15px, #000 16px)",c=function(i){return n(O,f([B(K(f([tr(Sn),_e(w(16)),Ce(w(16)),n(z,"pointer-events","none"),n(z,"-webkit-mask",o),n(z,"mask",o)]),K(t,i)))]),P)};return n(O,f([B(K(f([tr(Ct),yt(w(r)),ba(w(r)),_t(he(Ut.oh)),n(z,"pointer-events","auto"),le,He(de),n(z,"gap","12px"),n(z,"padding","8px 14px"),n(z,"border-radius","0 21px 0 0")]),t)),n(Ou,"click",re(p(e.e9,!0)))]),K(a,f([c(f([n(z,"top","-16px"),n(z,"left","0")])),c(f([n(z,"bottom","0"),n(z,"right","-16px")]))])))}),V4={$:3},IH={$:2},YY=2,KY=1,XY=0,ws=function(e){var r=e.b;return sm(r)},O4=function(e){var r=e.a;return ee(r,pu)},RH=ge("min-height"),U4=ge("stretch"),EH=function(e){return{$:0,a:e}},VH=function(e){var r=ws(e.uz)-1,a=ni(e.uz),t=a||r<=0;return n(uc,f([wo("range"),Q1("0"),X1(Ie(r)),rs("1"),fc(Ie(gl(e.uz))),si(t),hi(function(o){return e.dW(EH(n(oe,0,Ec(o))))}),Nn("ui-slider"),B(f([_e(w(200)),hr(he(0)),Ce(w(24)),n(z,"-webkit-appearance","none"),n(z,"appearance","none"),ye(xo),kr(da),Ea(ir),aa(dr(t?.4:1)),n(z,"--slider-fill",Z(r>0?100*gl(e.uz)/r:0)+"%")]))]),P)},OH=function(e){var r=e.e,a=(function(){var $=function(g){return g===1||g===2},v=function(g){switch(g){case 0:return IH;case 1:return V4;default:return Kv}},d=function(g){switch(g){case 0:return"Record";case 1:return"Play";default:return"Pause"}},b=function(g){switch(g){case 0:return ni(e.uz);case 1:return b1(e.uz);default:return Yp(e.uz)}},h=function(g){switch(g){case 0:return Xe.tJ;case 1:return Xe.tv;default:return Xe.to}};return n(pl,r,{jw:!1,ga:h,nf:b,se:d,sf:f([0,1,2]),eZ:"Tape transport",tb:function(g){return b(g)||$(g)&&O4(e.uz)?e.e9:e.dW(v(g))},td:e.td,dX:0,t4:function(g){return function(_){return li}},t8:function(g){return T},uH:0})})(),t=n(O,f([B(f([le,yr(ra),n(z,"gap","3px")]))]),f([n(O,f([B(f([le,yr(tc),He(de),n(z,"gap","8px")]))]),f([n(Cr,f([B(f([br(w(12)),be(n(Y,function($){return $.lf},r)),n(z,"white-space","nowrap")]))]),f([ne("Record from start")])),n(Z5,r,{jw:!1,nd:e.bP,eZ:"Record from the first frame (applies on reload)",ob:e.kq})])),n(Cr,f([B(f([br(w(10)),be(n(Y,function($){return $.lc},r)),n(z,"white-space","nowrap")]))]),f([ne("applies on reload")]))])),o=ni(e.uz)?n(O,f([B(f([_e(w(200)),hr(he(0)),le,He(de),Lr(de),n(z,"gap","8px"),br(w(13)),be(n(Y,function($){return $.le},r)),n(z,"white-space","nowrap")]))]),f([n(Cr,f([B(f([_e(w(8)),Ce(w(8)),n(z,"border-radius","50%"),n(z,"background-color",n(js,e,1))]))]),P),ne("Recording\u2026")])):Et(e.uz)?VH(e):n(O,f([B(f([_e(w(200)),hr(he(0))]))]),P),c=n(O,f([B(f([Ps(U4),_e(w(1)),RH(w(28)),n(z,"background-color",ze(n(mr,.18,n(lr,function($){return $.le},r))))]))]),P),i=(function(){var $=f([_e(w(100)),hr(he(0)),le,He(de),br(w(12)),be(n(Y,function(v){return v.lf},r)),n(z,"font-variant-numeric","tabular-nums")]);return O4(e.uz)?n(O,f([B(K($,f([Lr(de)])))]),f([ne("\u2014 / \u2014")])):ni(e.uz)?n(O,f([B(K($,f([Lr(de)])))]),f([ne(Ie(ws(e.uz)))])):n(O,f([B($)]),f([n(Cr,f([B(f([Po(he(1)),n(z,"text-align","right")]))]),f([ne(Ie(gl(e.uz)+1))])),n(Cr,f([B(f([n(z,"padding","0 4px")]))]),f([ne("/")])),n(Cr,f([B(f([Po(he(1)),n(z,"text-align","left")]))]),f([ne(Ie(ws(e.uz)))]))]))})(),u=n(qn,f([jn(e.fa),n(Ne,"aria-label","Close tape"),B(f([_e(w(32)),Ce(w(32)),sa(w(5)),hr(he(0)),vr(Ze(50)),ic(ue),ye(xo),be(L5),kr(da),le,He(de),Lr(de),Ea(ir),aa(dr(.9)),n(z,"transition","opacity 120ms cubic-bezier(0.33, 1, 0.68, 1), background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),wa(f([aa(dr(1)),ye(C(ol,255,255,255,.18))]))]))]),f([Xe.qK]));return n(O,f([B(f([le,yr(tc),He(de),n(z,"gap","12px")]))]),f([a,o,i,c,t,u]))},UH=function(e){return s(BH,e,6,f([OH(e)]))},qH=function(e){return n(Wr,4,e.f)&&!e.pJ?UH(e):ne("")},QY=3,q4=function(e){return M(e,{kV:!0})},WH=function(e){var r=(function(){var a=e.qz.kt===1?q4(ms("KeyP")):q4(hs("KeyP"));return n(yl,e.qz.kt,a)})();return n(tl,e.e,{i0:function(a){return a.bx},jw:!1,ga:Xe.sx,jS:n(Wr,6,e.f),eZ:"Command palette",bj:e.kk,bs:n(St,e.td,{ex:3,eZ:"Command palette",t8:D(r)})})},GH=function(e){return n(di,e.e,{jw:!1,ga:Xe.ub,bI:7,eZ:"Device preview",bK:e.f,pe:Ka(7),d6:e.a$,bs:n(St,e.td,{ex:3,eZ:"Device preview",t8:T})})},NH=f([0,1,2]),ZH=function(e){switch(e){case 0:return Xe.uU;case 1:return Xe.tp;default:return Xe.qy}},JH=function(e){var r=(function(){var a=e.qz.kt===1?ms("KeyM"):hs("KeyM");return n(yl,e.qz.kt,a)})();return n(pl,e.e,{jw:Et(e.uz),ga:ZH,nf:vn(e.nY),se:o3,sf:NH,eZ:"Mode",tb:e.kn,td:e.td,dX:1,t4:l(function(a,t){return n(oe,t.bx,C4(a))}),t8:function(a){return D(r)},uH:3})},YH=function(e){return f([n(Ou,"pointerdown",re(p(e,!0))),n(Ou,"wheel",re(p(e,!0))),n(Ou,"keydown",n(H,function(r){return r.jq||r.j7||r.i1?Cn("let modifier-bearing combos reach global decoders"):n(Wo,r.jT,f(["Meta","Control","Shift","Alt"," ","Escape"]))?Cn("bare modifiers, Space, and Escape (global stop) \u2014 let bubble"):re(p(e,!0))},I(Xo,q(function(r,a,t,o){return{i1:o,jq:a,jT:r,j7:t}}),n(j,"key",Se),n(j,"ctrlKey",ie),n(j,"metaKey",ie),n(j,"altKey",ie))))])},KH=function(e){return n(tl,e.e,{i0:function(r){return r.bx},jw:!1,ga:Xe.vm,jS:e.pJ,eZ:"Zen mode",bj:e.kp,bs:n(St,e.td,{ex:3,eZ:"Zen mode",t8:T})})},XH=function(e){var r=e.ce,a=r.hP?f([KH(e)]):P,t=e.e,o=r.co?f([n(di,t,{jw:!1,ga:Xe.kv,bI:5,eZ:"Theme",bK:e.f,pe:Ka(5),d6:e.a$,bs:n(St,e.td,{ex:3,eZ:"Theme",t8:T})})]):P,c=r.dJ?f([JH(e)]):P,i=n(wr,ae,f([r.f6?D(n(di,t,{jw:Et(e.uz),ga:Xe.pK,bI:2,eZ:"FPS meter",bK:e.f,pe:Ka(2),d6:e.a$,bs:n(St,e.td,{ex:3,eZ:"FPS meter",t8:T})})):T,r.f7?D(n(di,t,{jw:!1,ga:Xe.qz,bI:1,eZ:"Inputs",bK:e.f,pe:Ka(1),d6:e.a$,bs:n(St,e.td,{ex:3,eZ:"Inputs",t8:T})})):T,(function(){if(r.hO){var y=n(Wr,4,e.f);return D(n(tl,t,{i0:Ka(4),jw:!1,ga:Xe.uz,jS:y,eZ:y?"Close tape":"Tape",bj:e.fa,bs:n(St,e.td,{ex:3,eZ:"Tape",t8:T})}))}else return T})()])),u=f([le,yr(ra),He(de),n(z,"gap","6px")]),$=function(y){return n(O,f([B(u)]),y)},v=r.dI?f([GH(e)]):P,d=r.f5?f([n(di,t,{jw:!1,ga:Xe.rg,bI:0,eZ:"Configurations",bK:e.f,pe:Ka(0),d6:e.a$,bs:n(St,e.td,{ex:3,eZ:"Configurations",t8:T})})]):P,b=n(Cu,r,e.R)?f([WH(e)]):P,h=n(Fr,n(cr,Ov,nr),f([d,c,v,o,b,i])),g=n(O,f([B(f([le,yr(ra),He(de),n(z,"gap","24px"),e.pJ?Oe(f([Pi(vs(w(-72))),aa(dr(0)),n(z,"pointer-events","none")])):Oe(f([Pi(vs(ue)),aa(dr(1)),n(z,"pointer-events","auto")])),n(z,"transition","transform 240ms cubic-bezier(0.33, 1, 0.68, 1), opacity 240ms cubic-bezier(0.33, 1, 0.68, 1)")])),n(Ne,"aria-hidden",e.pJ?"true":"false")]),n(N,$,h)),_=n(wr,ae,f([nr(a)?T:D(n(O,f([B(K(u,f([n(z,"pointer-events","auto")])))]),a)),nr(h)?T:D(g)]));return nr(_)?ne(""):n(O,K(f([B(f([tr(Sn),ja(w(12)),ba(w(12)),_e(w(48)),le,yr(ra),He(de),n(z,"gap","24px"),n(z,"pointer-events","none"),_t(he(Ut.rY))]))]),YH(e.e9)),_)},QH=function(e){if(!ni(e.uz)&&!Et(e.uz)||e.pJ)return ne("");var r=6,a=100,t=Z(-a)+"px",o="linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",c=21,i=a+r,u=i+c;return n(O,f([B(f([tr(Ct),ja(ue),ba(ue),mt(ue),yt(ue),n(z,"overflow","hidden"),n(z,"pointer-events",Et(e.uz)?"auto":"none"),_t(he(Ut.oh-1))])),jn(e.dW(b1(e.uz)?Kv:V4))]),f([n(O,f([B(f([tr(Sn),n(z,"top",t),n(z,"left",t),n(z,"right",t),n(z,"bottom",t),n(z,"pointer-events","none"),n(z,"border",Z(i)+"px solid transparent"),n(z,"border-radius",Z(u)+"px"),n(z,"background-color",n(js,e,.28)),n(z,"-webkit-backdrop-filter","blur(18px)"),n(z,"backdrop-filter","blur(18px)"),n(z,"-webkit-mask",o),n(z,"-webkit-mask-composite","xor"),n(z,"mask",o),n(z,"mask-composite","exclude")]))]),P)]))},eF=l(function(e,r){var a=n(TD,e,r);return n(O,f([Nn("play-hud"),B(f([tr(Ct),ja(ue),ba(ue),mt(ue),yt(ue),n(z,"pointer-events","none")]))]),K(f([mD(a.e),n(hD,".play-hud",a.e),pD(a.e),sD(a.e),ND(a),jz(a),GM(a),qM(a),QH(a),XH(a),ZD(a),qH(a),n(ID,_D(a.e),a.c1),FH(a),vD(a),mM(a),UD(a),WD(a),$5(a.f)]),a.fZ.ku))}),rF=l(function(e,r){if(e.$===1)return n(Bn,f([n(Q,"display","contents")]),f([n(Bn,f([n(Q,"display","contents")]),f([r]))]));var a=e.a,t=function(c){return Z(c)+"px"},o=n(Pu,a.u6,a.jv);return n(Bn,f([n(Q,"position","fixed"),n(Q,"inset","0"),n(Q,"display","flex"),n(Q,"align-items","center"),n(Q,"justify-content","center"),n(Q,"background-color",a.pZ)]),f([n(Bn,f([n(Q,"position","relative"),n(Q,"width",t(a.jv.u5)),n(Q,"height",t(a.jv.rS)),n(Q,"border-radius",t(a.qH)),n(Q,"overflow-x","hidden"),n(Q,"overflow-y","auto"),n(Q,"box-shadow","0 24px 64px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16)"),n(Q,"transform","scale("+(Z(o)+")")),n(Q,"transform-origin","center")]),f([r]))]))}),aF=l(function(e,r){var a=Oc(r.uz),t=s(ft,rT,Ae,a.cY),o=$1(a),c=(function(){var x=e.iP;if(x.$)return Vn(r.bH);var L=x.a;return n(oe,Vn(r.bH),n(se,function(k){return L(k.bK)},n(ea,function(k){return n(Ke,k,a.cY)},jr(r.aY))))})(),i=v1(r.bH),u=n(wr,I(xL,e,r,a,o,i),r.aY),$={mE:r.aJ,cY:u,S:a.S,oi:t,gD:e.bH,e:c},v=e.jO($),d=o$(n(eF,{qz:n(Jp,r,a),fZ:v,gq:Ik,dW:np,fa:tp,gD:e.bH,uz:r.uz,d6:u$},r.bH)),b=ze(gn($.e).F),h=ze(gn($.e).le),g=o$(Tm($.e)),_=n(rF,n(se,function(x){return{pZ:ze(n(lr,function(L){return L.k5},c)),qH:Xk(r.bH),jv:x,u6:a.g.bT}},i),e.sh($)),y=(function(){var x=r.ho;if(x.$)return f([g,_,d]);var L=x.a;return f([g,_,d,Jk(L)])})();return n(Bn,f([Lm(Xp),n(Q,"position","fixed"),n(Q,"inset","0"),n(Q,"overflow-y","auto"),n(Q,"overscroll-behavior","none"),n(Q,"background-color",b),n(Q,"color",h),n(jL,"playflush",re(p(Kp,!0)))]),y)}),nF=function(e){return QC({b1:QS(e),aC:lj(e),uS:Bk(e),bt:aF(e)})},tF=function(e){return nF(UC(e))},oF={hN:!0,f5:!0,dI:!0,f6:!0,f7:!1,dJ:!0,eM:!0,hO:!0,co:!0,hP:!0,hR:C3,bP:!1,e:ep},cF=oF,W4=l(function(e,r){return{aX:e,kT:r}}),Ku=16,G4=function(e){return{aX:0,kT:Yr(s(er,0,255,e)/255*(Ku-1))}},iF=On(f([s(Ha,W4,n(Ar,0,Nr),n(Ar,1,Nr)),n(Ye,G4,Nr)])),eK=ae,uF=l(function(e,r){return{i:hn(n(N,function(a){var t=a.a,o=a.b;return p(e(t),p(t,o))},r)),ph:e}}),N4=function(e){var r=e.a,a=e.b,t=e.c;return p(p(a,t),(function(){return r?1:0})())},Ll=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),rK=0,aK=1,Z4=function(e){return e?1:0},fF=On(f([Sr(ml,Te(function(e,r,a,t,o){return p(s(Ll,Z4(e),r,a),n(W4,t,o))}),n(Ar,0,Nr),n(Ar,1,Nr),n(Ar,2,Nr),n(Ar,3,Nr),n(Ar,4,Nr)),I(Xo,q(function(e,r,a,t){return p(s(Ll,Z4(e),r,a),G4(t))}),n(Ar,0,Nr),n(Ar,1,Nr),n(Ar,2,Nr),n(Ar,3,Nr))])),$F=s(Ha,l(function(e,r){return{p_:r,uK:n(uF,N4,e)}}),n(j,"trixels",pr(fF)),n(j,"bg",iF)),lF=function(e){return{i:Ae,ph:e}},vF={p_:{aX:0,kT:2},uK:lF(N4)},zl=Rf,sF=function(e){return n(mn,zl,f([e.aX,e.kT]))},dF=function(e){return e?1:0},bF=function(e){var r=e.a,a=r.a,t=r.b,o=r.c,c=e.b;return n(mn,zl,f([dF(a),t,o,c.aX,c.kT]))},J4=function(e){var r=e.i;return Cs(r)},pF=function(e){return ho(f([p("trixels",n(mn,bF,J4(e.uK))),p("bg",sF(e.p_))]))},nK=ae,mF=l(function(e,r){switch(e){case 1:return p(r.tK,r.qg);case 2:return p(r.vl,r.qi);case 3:return p(r.rK,r.qe);case 4:return p(r.qM,r.qd);case 5:return p(r.p6,r.qc);default:return p(r.sr,r.qf)}}),hF=.45,gF=.6,ks=function(e){return e<=.0404482362771082?e/12.92:n(va,(e+.055)/1.055,2.4)},Ts=function(e){var r=e.a,a=e.b,t=e.c,o=e.d;return{aT:o,p6:t,rK:a,tK:r}},_F=function(e){var r=Ts(e),a=r.aT,t=r.p6,o=r.rK,c=r.tK;return{aT:a,sn:ks(t),so:ks(o),sp:ks(c)}},yF=function(e){var r=e.aT,a=e.sn,t=e.so,o=e.sp,c=.0883024619*o+.2817188376*t+.6299787005*a,i=n(va,c,1/3),u=.2119034982*o+.6806995451*t+.1073969566*a,$=n(va,u,1/3),v=.4122214708*o+.5363325363*t+.0514459929*a,d=n(va,v,1/3);return{g7:1.9779984951*d-2.428592205*$+.4505937099*i,aT:r,i9:.0259040371*d+.7827717662*$-.808675766*i,D:.2104542553*d+.793617785*$-.0040720468*i}},CF=function(e){return yF(_F(e))},Y4=q(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),Ls=q(function(e,r,a,t){var o=R(e,r,a),c=o.a,i=o.b,u=o.c,$=u<=.5?u*(i+1):u+i-u*i,v=u*2-$,d=function(_){var y=_<0?_+1:_>1?_-1:_;return y*6<1?v+($-v)*y*6:y*2<1?$:y*3<2?v+($-v)*(2/3-y)*6:v},b=d(c-1/3),h=d(c),g=d(c+1/3);return C(Y4,g,h,b,t)}),Xu=function(e){return C(Ls,e.aX,e.a4,e.D,e.aT)},Ml=n(Pe,Xu,CF),zs=gh,ta=xh,K4=function(e){var r=e.aT,a=e.i9,t=e.g7,o=e.D,c=n(zs,a,t)/(na*2),i=c<0?1+c:c,u=ta(t*t+a*a);return{aT:r,jh:u,aX:i,D:o}},Va=dh,Oa=bh,Dl=function(e){var r=e.aT,a=e.aX,t=e.jh,o=e.D,c=t*Oa(a*2*na),i=t*Va(a*2*na);return{g7:i,aT:r,i9:c,D:o}},X4=l(function(e,r){var a=K4(r);return Dl(M(a,{D:e}))}),PF=l(function(e,r){if(e){var a=n(mF,e,r),t=a.a,o=a.b,c=Ml(o),i=n(X4,c.D+(1-c.D)*gF,c),u=Ml(t),$=n(X4,u.D*(1-hF),u);return f([$,u,c,i])}else return f([Ml(r.p_),Ml(r.rw)])}),SF=S(function(e,r,a){e:for(;;){var t=n(bv,Ur,e),o=t.a,c=t.b;if(X(it(o),Ur)<0)return n(pv,!0,{as:r,Z:a,ai:o});var i=c,u=n(F,Dc(o),r),$=a+1;e=i,r=u,a=$;continue e}}),ko=function(e){return e.b?s(SF,e,P,0):ou},Q4=1e-4,e6=function(e){var r=e.aT,a=e.i9,t=e.g7,o=e.D,c=o-.0894841775*t-1.291485548*a,i=c*c*c,u=o-.1055613458*t-.0638541728*a,$=u*u*u,v=o+.3963377774*t+.2158037573*a,d=v*v*v;return{aT:r,sn:-.0041960863*d-.7034186147*$+1.707614701*i,so:-1.2684380046*d+2.6097574011*$-.3413193965*i,sp:4.0767416621*d-3.3077115913*$+.2309699292*i}},r6=function(e){var r=e6(e),a=function(t){return X(t,-Q4)>-1&&X(t,1+Q4)<1};return a(r.sp)&&a(r.so)&&a(r.sn)},xF=q(function(e,r,a,t){e:for(;;){if(t<=0)return r;var o=(r+a)/2;if(r6(Dl(M(e,{jh:o})))){var c=e,i=o,u=a,$=t-1;e=c,r=i,a=u,t=$;continue e}else{var c=e,i=r,u=o,$=t-1;e=c,r=i,a=u,t=$;continue e}}}),jF=function(e){return r6(Dl(e))?e:M(e,{jh:C(xF,e,0,e.jh,24)})},wF=function(e){return{aT:1,aX:e.aX,D:s(er,0,1,e.D),a4:s(er,0,1,e.a4)}},kF=function(e){var r=e.a,a=e.b,t=e.c,o=e.d,c=n(Ge,r,n(Ge,a,t)),i=n(Le,r,n(Le,a,t)),u=(c+i)/2,$=ee(c,i)?0:u<.5?(i-c)/(i+c):(i-c)/(2-i-c),v=ee(i,r)?(a-t)/(i-c):ee(i,a)?2+(t-r)/(i-c):4+(r-a)/(i-c),d=v*(1/6),b=Uv(d)?0:d<0?d+1:d;return{aT:o,aX:b,D:u,a4:$}},TF=function(e){return kF(e)},Ms=function(e){return e<=.00313066844250063?e*12.92:1.055*n(va,e,1/2.4)-.055},LF=q(function(e,r,a,t){return C(Y4,e,r,a,t)}),zF=function(e){var r=e.aT,a=e.sn,t=e.so,o=e.sp;return C(LF,Ms(o),Ms(t),Ms(a),r)},MF=function(e){return zF(e6(e))},DF=function(e){return MF(Dl(e))},HF=function(e){return wF(TF(DF(jF(K4(e)))))},FF=function(e){e:for(;;)if(e.b)if(e.b.b){var a=e.b,t=a;e=t;continue e}else{var r=e.a;return D(r)}else return T},AF=S(function(e,r,a){return{g7:r,aT:1,i9:a,D:e}}),BF=S(function(e,r,a){var t=r.D-e.D,o=t<=1e-6?0:(a-e.D)/t;return{g7:e.g7+(r.g7-e.g7)*o,aT:1,i9:e.i9+(r.i9-e.i9)*o,D:a}}),IF=S(function(e,r,a){e:for(;;)if(r.b){var t=r.a,o=r.b;if(X(a,t.D)<1)return s(BF,e,t,a);var c=t,i=o,u=a;e=c,r=i,a=u;continue e}else return M(e,{D:a})}),RF=l(function(e,r){if(e.b){var a=e.a,t=e.b;return s(IF,a,t,r)}else return s(AF,r,0,0)}),EF=function(e){var r=n(yi,function(o){return o.D},e),a=n(oe,0,n(se,function(o){return o.D},jr(r))),t=n(oe,a,n(se,function(o){return o.D},FF(r)));return ko(n(N,function(o){var c=o/(Ku-1);return HF(n(RF,r,a+(t-a)*c))},n(Na,0,Ku-1)))},Ds=7,a6=function(e){return ko(n(N,function(r){return EF(n(PF,r,e))},n(Na,0,Ds-1)))},tK=ae,Hs={$:0},n6=Hs,Fs=l(function(e,r){return{bI:e,b2:r.b2,sR:r.sR}}),VF=l(function(e,r){return Iv(p(n(Fs,0,e),n(Za,l(function(a,t){return n(Fs,a+1,t)}),r)))}),OF=q(function(e,r,a,t){return{ez:T,mr:e,dM:!0,j1:r,gy:n6,V:n(VF,a,t)}}),pc={$:0},UF=pc,qF=function(e){return{rl:e.rl,rs:e.rs,tF:e.tF,ft:e.ft}},As=function(e){return{$:0,a:e}},WF=hh,GF=As({eK:2*WF(.5)}),t6=qF({rl:{pF:0,pH:0,O:10},rs:{pF:0,pH:0,O:0},tF:GF,ft:{pF:0,pH:1,O:0}}),NF={$:0},mc=NF,o6=function(e){return K(gn(e).kv.sR,su(e)?"|light":"|dark")},ZF=l(function(e,r){return p({cg:t6,dF:!1,dd:a6(gn(r).kv),hG:o6(r),tl:C(OF,pF,$F,{b2:vF,sR:"1"},P),gt:UF,fe:{iU:0,iW:0},cG:{aX:1,kT:9}},mc)}),JF=l(function(e,r){return{bc:r,sR:e}}),YF=l(function(e,r){return n(JF,e,r)}),KF=YF,XF=S(function(e,r,a){var t=r.a,o=r.b;return p(e,n(Hv,p(t,o),a))}),QF=f([n(KF,"Parameters",f([s(XF,"trixel scale",p(.5,1),1)]))]),eA={$:0},rA={$:1},aA={$:2},Bs=l(function(e,r){if(r.$){var t=r.a;return qe(t)}else{var a=r.a;return e(a)}}),c6=function(e){switch(e.$){case 0:return 1;case 1:return 2;case 2:return 4;case 3:return 1;case 4:return 2;case 5:return 4;case 6:return 4;case 7:return 8;case 8:var r=e.a;return r;case 9:var r=e.a;return r;default:var a=e.a;return n2(a)}},oK=0,i6=S(function(e,r,a){switch(e.$){case 0:var o=e.a;return s(q_,r,a,o);case 1:var t=e.a,o=e.b;return C(W_,r,a,o,!t);case 2:var t=e.a,o=e.b;return C(G_,r,a,o,!t);case 3:var o=e.a;return s(N_,r,a,o);case 4:var t=e.a,o=e.b;return C(Z_,r,a,o,!t);case 5:var t=e.a,o=e.b;return C(J_,r,a,o,!t);case 6:var t=e.a,o=e.b;return C(Y_,r,a,o,!t);case 7:var t=e.a,o=e.b;return C(K_,r,a,o,!t);case 8:var i=e.b;return s(nA,i,r,a);case 9:var c=e.b;return s(Q_,r,a,c);default:var i=e.a;return s(X_,r,a,i)}}),nA=S(function(e,r,a){e:for(;;)if(e.b){var t=e.a,o=e.b,c=o,i=r,u=s(i6,t,r,a);e=c,r=i,a=u;continue e}else return a}),Hl=l(function(e,r){var a=e;return n(ey,a,r)}),cK=ae,tA=function(e){return oy(e)},wi=n2,oA=function(e){return n(Hl,tA(wi(e)),e)},u6=function(e){return{$:3,a:e}},cA=function(e){return{$:4,a:e}},f6=1,iA=l(function(e,r){if(r.$){var t=r.a;return qe(t)}else{var a=r.a;return We(e(a))}}),uA=l(function(e,r){if(r.$){var t=r.a;return qe(e(t))}else{var a=r.a;return We(a)}}),fA=l(function(e,r){return{b2:r,sR:e}}),$A=function(e){return s(Ha,fA,On(f([n(j,"n",Se),re("Level")])),n(j,"d",e))},lA=function(e){return n(H,function(r){var a=r.a,t=r.b,o=n(Za,Fs,a);if(o.b){var c=o.a,i=o.b;return re(n(st,s(er,0,xr(a)-1,t),Iv(p(c,i))))}else return Cn("Levels: items is empty")},s(Ha,Bt,n(j,"items",pr($A(e))),On(f([n(j,"cur",Nr),re(0)]))))},$6=l(function(e,r){var a=e,t=n(Mv,n(j,"v",Nr),r);if(t.$===1){var o=t.a;return qe(u6(sv(o)))}else{var c=t.a;return ee(c,f6)?n(iA,function(i){return M(a,{V:i})},n(uA,n(Pe,sv,u6),n(Mv,lA(a.j1),r))):qe(cA(c))}}),vA=function(e){var r=s(t$,"_","/",s(t$,"-","+",e)),a=n(Qr,4,4-n(Qr,4,Fa(r)));return K(r,n(Go,a,"="))},Is=l(function(e,r){if(r.$)return qe(e);var a=r.a;return We(a)}),sA=function(e){return{$:10,a:e}},l6=sA,dA=l(function(e,r){var a=r,t={W:0,bb:e,aQ:0,ah:0,la:0},o=a(t);if(o.$){var u=o.a;return qe(u)}else{var c=o.a,i=c.a;return We(i)}}),Fl=U_,bA=l(function(e,r){return{$:8,a:e,b:r}}),pA=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b,o=e+c6(a),c=t;e=o,r=c;continue e}else return e}),Qu=function(e){return n(bA,n(pA,0,e),e)},Ua=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),mA=s(Ua,ou,0,0),iK=ae,hA=S(function(e,r,a){e:for(;;){var t=r(e),o=t,c=o(a);if(c.$===1){var i=c.a;return qe(i)}else if(c.a.a.$){var g=c.a,_=g.a.a,v=g.b;return We(p(_,v))}else{var u=c.a,$=u.a.a,v=u.b,d=$,b=r,h=v;e=d,r=b,a=h;continue e}}}),Al=l(function(e,r){return n(hA,e,r)}),xt=l(function(e,r){var a=r;return function(t){var o=a(t);if(o.$){var $=o.a;return qe($)}else{var c=o.a,i=c.a,u=c.b;return We(p(e(i),u))}}}),uK=1,gA=l(function(e,r){return{$:4,a:e,b:r}}),To=gA,_A=l(function(e,r){return{$:5,a:e,b:r}}),Bl=_A,yA=function(e){return{$:3,a:e}},Lo=yA,CA=function(e){var r=e.a,a=e.b,t=e.c,o=(function(){var i=t>>>(4-a)*8;switch(a){case 4:return f([n(Bl,1,t)]);case 1:return f([Lo(i)]);case 2:return f([n(To,1,i)]);case 3:return f([n(To,1,i>>8),Lo(255&i)]);default:return P}})(),c=l(function(i,u){return n(F,n(Bl,1,i),u)});return Fl(Qu(s(Zf,c,o,r)))},ef=function(e){return{$:1,a:e}},Tn=function(e){return{$:0,a:e}},zo=l(function(e,r){var a=r;return function(t){var o=a(t);if(o.$){var d=o.a;return qe(d)}else{var c=o.a,i=c.a,u=c.b,$=e(i),v=$;return v(u)}}}),v6=l(function(e,r){var a=r;return l(function(t,o){var c=n(a,t,o),i=c.a,u=c.b;return p(i,e(u))})}),Rs=l(function(e,r){var a=r.a,t=r.b,o=r.c;if(t===4)return s(Ua,n(Tu,o,a),1,e<<24);if(t){var c=t,i=Br(a)-1,u=(255&e)<<(3-c)*8|o,$=4278190080>>>c*8;return s(Ua,a,t+1,u)}else return s(Ua,a,1,e<<24)}),s6=S(function(e,r,a){var t=a.a,o=a.b,c=a.c,i=e===4?r:(1<<e*8)-1&r;if(e){if(o===4)return s(Ua,n(Tu,c,t),e,i<<(4-e)*8);if(o){var u=4-o;if(X(e,u)>0){var $=o+e-4,v=i>>>$*8,d=c|v,b=(8-o-e)*8,h=((1<<$*8)-1&i)<<b;return s(Ua,n(Tu,d,t),e-u,h)}else{var b=(4-(o+e))*8,v=i<<b,d=c|v;return s(Ua,t,o+e,d)}}else return s(Ua,t,e,i<<(4-e)*8)}else return a}),d6=function(e){return l(function(r,a){return p(a,e)})},b6=function(e){return ny(!e)},Il=ry,PA=function(e){var r=e.a,a=e.b,t=a.a,o=a.b,c=a.c;return r>=4?n(v6,function(i){return Tn(p(r-4,s(s6,4,i,a)))},b6(1)):r>=1?n(v6,function(i){return Tn(p(r-1,n(Rs,i,a)))},Il):d6(ef(a))},SA=q(function(e,r,a,t){e:for(;;){var o=r(e),c=o,i=n(c,a,t),u=i.a,$=i.b;if($.$){var _=$.a;return p(u,_)}else{var v=$.a,d=v,b=r,h=a,g=u;e=d,r=b,a=h,t=g;continue e}}}),xA=l(function(e,r){return n(SA,e,r)}),jA=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=n(xA,p(wi(e),r),PA),i=n(Hl,c,e);if(i.$)return r;var u=i.a;return u}),Es=S(function(e,r,a){var t=(function(){var $=function(d){if(d.$===1)return D(1);var b=d.a;return D(b+1)},v=S(function(d,b,h){return X(d,r)>-1&&X(d,a+r)<0?s(At,b,$,h):h});return s(ft,v,Ae,e)})(),o=s(ft,S(function($,v,d){var b=d.a,h=d.b;return p(b+v,s($r,$,b,h))}),p(0,Ae),t),c=(function(){var $=q(function(b,h,g,_){e:for(;;)if(X(g,b)>0){var y=b,x=h,L=g-1,k=n(F,0,_);b=y,h=x,g=L,_=k;continue e}else return n(F,h,_)}),v=S(function(b,h,g){var _=g.a,y=g.b;return p(b-1,C($,b,h,_,y))}),d=l(function(b,h){e:for(;;)if(b>=0){var g=b-1,_=n(F,0,h);b=g,h=_;continue e}else return h});return(function(b){var h=b.a,g=b.b;return n(d,h,g)})(s(nu,v,p(15,P),t))})(),i=S(function($,v,d){e:for(;;)if($-a<0){var b=n(Ke,r+$,e);if(b.$===1){var h=$+1,g=v,_=d;$=h,v=g,d=_;continue e}else{var y=b.a;if(y){var x=n(Ke,y,d);if(x.$===1)return v;var L=x.a,h=$+1,g=s(ci,L,$,v),_=s($r,y,L+1,d);$=h,v=g,d=_;continue e}else{var h=$+1,g=v,_=d;$=h,v=g,d=_;continue e}}}else return v}),u=s(i,0,n(_$,a,0),o.b);return{d2:c,gT:u}}),wA=f([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ir=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){return{$:0,a:e,b:r,c:a,d:t,e:o,f:c,g:i,h:u,i:$,j:v}}}}}}}}}}},Vs=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e,u=r.f,$=r.g,v=r.h,d=r.i,b=r.j;if(e>=320)return r;var h=1<<e%32,g=e/32|0;switch(g){case 0:return Ir(h|a)(t)(o)(c)(i)(u)($)(v)(d)(b);case 1:return Ir(a)(h|t)(o)(c)(i)(u)($)(v)(d)(b);case 2:return Ir(a)(t)(h|o)(c)(i)(u)($)(v)(d)(b);case 3:return Ir(a)(t)(o)(h|c)(i)(u)($)(v)(d)(b);case 4:return Ir(a)(t)(o)(c)(h|i)(u)($)(v)(d)(b);case 5:return Ir(a)(t)(o)(c)(i)(h|u)($)(v)(d)(b);case 6:return Ir(a)(t)(o)(c)(i)(u)(h|$)(v)(d)(b);case 7:return Ir(a)(t)(o)(c)(i)(u)($)(h|v)(d)(b);case 8:return Ir(a)(t)(o)(c)(i)(u)($)(v)(h|d)(b);case 9:return Ir(a)(t)(o)(c)(i)(u)($)(v)(d)(h|b);default:return r}}),p6=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e,u=r.f,$=r.g,v=r.h,d=r.i,b=r.j;if(e>=320)return!1;var h=1<<e%32,g=e/32|0;switch(g){case 0:return(h&a)>0;case 1:return(h&t)>0;case 2:return(h&o)>0;case 3:return(h&c)>0;case 4:return(h&i)>0;case 5:return(h&u)>0;case 6:return(h&$)>0;case 7:return(h&v)>0;case 8:return(h&d)>0;case 9:return(h&b)>0;default:return!1}}),fK=j_,kA=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=r.d,i=r.e,u=r.f,$=r.g,v=r.h,d=r.i,b=r.j;if(e>=320)return r;var h=~(1<<e%32),g=e/32|0;switch(g){case 0:return Ir(h&a)(t)(o)(c)(i)(u)($)(v)(d)(b);case 1:return Ir(a)(h&t)(o)(c)(i)(u)($)(v)(d)(b);case 2:return Ir(a)(t)(h&o)(c)(i)(u)($)(v)(d)(b);case 3:return Ir(a)(t)(o)(h&c)(i)(u)($)(v)(d)(b);case 4:return Ir(a)(t)(o)(c)(h&i)(u)($)(v)(d)(b);case 5:return Ir(a)(t)(o)(c)(i)(h&u)($)(v)(d)(b);case 6:return Ir(a)(t)(o)(c)(i)(u)(h&$)(v)(d)(b);case 7:return Ir(a)(t)(o)(c)(i)(u)($)(h&v)(d)(b);case 8:return Ir(a)(t)(o)(c)(i)(u)($)(v)(h&d)(b);case 9:return Ir(a)(t)(o)(c)(i)(u)($)(v)(d)(h&b);default:return r}}),Os=Te(function(e,r,a,t,o){var c=e+o,i=S(function(d,b,h){e:for(;;)if(d-c<0)if(r){var g=d+1,_=n(Vs,d,b),y=s($r,d,r,h);d=g,b=_,h=y;continue e}else if(n(p6,d,b)){var g=d+1,_=n(kA,d,b),y=n(lu,d,h);d=g,b=_,h=y;continue e}else{var g=d+1,_=b,y=h;d=g,b=_,h=y;continue e}else return p(b,h)}),u=s(i,e,a,t),$=u.a,v=u.b;return R(e+o,$,v)}),TA=Te(function(e,r,a,t,o){e:for(;;){var c=a>>>1;if(e.b){var i=e.a,u=e.b,$=(r<<1)+(a&1)-i,v=o+i;if($>=0){var d=u,b=$,h=c,g=t-1,_=v;e=d,r=b,a=h,t=g,o=_;continue e}else return{W:t-1,jr:$,k2:v,la:c}}else return{W:t,jr:r,k2:o,la:a}}}),Rl=l(function(e,r){var a=e===32?r.aQ<<r.W:((1<<e)-1&r.aQ)<<r.W;return{W:r.W+e,bb:r.bb,aQ:r.aQ>>>e,ah:r.ah-e,la:a|r.la}}),Us=function(e){return ty(e)},rf=S(function(e,r,a){var t=r,o=a;return l(function(c,i){var u=n(t,c,i),$=u.a,v=u.b,d=n(o,c,$),b=d.a,h=d.b;return p(b,n(e,v,h))})}),LA=S(function(e,r,a){var t=s(rf,Bt,r,Us(wi(a.bb)-e)),o=n(Hl,t,a.bb);if(o.$)return qe("BitReader.runDecoder: Unexpected end of Bytes");var c=o.a;return We(c)}),af=function(e){return ay(!e)},zA=function(e){return e?s(rf,l(function(r,a){return r<<16|a}),af(e),Il):s(rf,l(function(r,a){return a<<16|r}),af(e),Il)},qs=function(e){e:for(;;){var r=32-e.W;if(X(r,e.ah)<1&&e.ah>0)return We(n(Rl,r,e));if(wi(e.bb)){var a=n(Rl,e.ah,e),t=(function(){var g=wi(e.bb);switch(g){case 0:return R(0,0,d6(0));case 1:return R(1,8,Il);case 2:return R(2,16,af(0));case 3:return R(3,24,zA(0));default:return R(4,32,b6(0))}})(),o=t.a,c=t.b,i=t.c,u=s(LA,o,i,a);if(u.$===1){var $=u.a;return qe($)}else{var v=u.a,d=v.a,b=v.b,h={W:a.W,bb:b,aQ:d,ah:c,la:a.la};e=h;continue e}}else return We(n(Rl,e.ah,e))}},Ws=l(function(e,r){return function(a){var t=a.W<16?qs(a):We(a);if(t.$===1){var o=t.a;return qe(o)}else{var c=t.a,i=I(TA,e,0,c.la,c.W,0),u=i.k2,$=i.W,v=i.la,d=i.jr,b=n(qr,u+d,r.gT);if(b.$===1)return qe("Index into trans tree out of bounds");var h=b.a;return We(p(h,{W:$,bb:c.bb,aQ:c.aQ,ah:c.ah,la:v}))}}}),Jn=l(function(e,r){return function(a){if(e){var t=X(a.W,e)<0?qs(a):We(a);if(t.$===1){var o=t.a;return qe(o)}else{var c=t.a,i=c.la&65535>>>16-e,u=c.la>>>e;return We(p(i+r,{W:c.W-e,bb:c.bb,aQ:c.aQ,ah:c.ah,la:u}))}}else return We(p(r,a))}}),Mo=function(e){return function(r){return We(p(e,r))}},MA=q(function(e,r,a,t){var o=t.a,c=t.b,i=t.c;if(X(o,r+a)<0){var u=n(oe,P,G$(e.d2));return n(zo,function($){switch($){case 16:var v=n(oe,0,n(Ke,o-1,i));return n(xt,n(Pe,C(Os,o,v,c,i),Tn),n(Jn,2,3));case 17:return n(xt,n(Pe,C(Os,o,0,c,i),Tn),n(Jn,3,3));case 18:return n(xt,n(Pe,C(Os,o,0,c,i),Tn),n(Jn,7,11));case 0:return n(p6,o,c)?Mo(Tn(R(o+1,c,n(lu,o,i)))):Mo(Tn(R(o+1,c,i)));default:return Mo(Tn(R(o+1,n(Vs,o,c),s($r,o,$,i))))}},n(Ws,u,e))}else return Mo(ef(i))}),DA=Ir(0)(0)(0)(0)(0)(0)(0)(0)(0)(0),HA=q(function(e,r,a,t){var o=n(vt,a,wA),c=(function(){var $=S(function(v,d,b){e:for(;;)if(v.b){var h=v.a,g=v.b;if(d.b){var _=d.a,y=d.b;if(_){var x=g,L=y,k=s($r,h,_,b);v=x,d=L,b=k;continue e}else{var x=g,L=y,k=b;v=x,d=L,b=k;continue e}}else return b}else return b});return s($,o,t,Ae)})(),i=s(Es,c,0,19),u=s(ft,l(function($,v){return Vs($)}),DA,c);return n(Al,R(0,u,c),s(MA,i,e,r))}),FA=l(function(e,r){var a=function(t){var o=t.a,c=t.b;return o<=0?Mo(ef(Ve(c))):n(xt,function(i){return Tn(p(o-1,n(F,i,c)))},r)};return n(Al,p(e,P),a)}),AA=S(function(e,r,a){var t=function(o){return p(s(Es,o,0,e),s(Es,o,e,r))};return n(xt,t,n(zo,s(HA,e,r,a),n(FA,a,n(Jn,3,0))))}),El=S(function(e,r,a){var t=r,o=a;return function(c){var i=t(c);if(i.$===1){var u=i.a;return qe(u)}else{var $=i.a,v=$.a,d=$.b,b=o(d);if(b.$===1){var u=b.a;return qe(u)}else{var h=b.a,g=h.a,_=h.b;return We(p(n(e,v,g),_))}}}}),Gs=l(function(e,r){return s(El,mC,r,e)}),BA=q(function(e,r,a,t){return n(Gs,t,n(Gs,a,n(Gs,r,Mo(e))))}),IA=n(zo,ae,C(BA,AA,n(Jn,5,257),n(Jn,5,1),n(Jn,4,4))),Ns=function(e){return function(r){return qe(e)}},Zs=n(Jn,1,0),RA=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=e%4;if(X(e,Br(a)*4+t)>-1)return T;if(X(e,Br(a)*4)>-1)return D(255&o>>>8*(3-c));var i=e/4|0,u=n(qr,i,a);if(u.$===1)return T;var $=u.a;return D(255&$>>>8*(3-c))}),EA=Te(function(e,r,a,t,o){e:for(;;){var c=e%4,i=e/4|0;if(r<=0)return s(Ua,a,t,o);if(X(e+4,(Br(a)-1)*4+t)>-1){var u=n(RA,e,s(Ua,a,t,o));if(u.$===1)return s(Ua,a,t,o);var $=u.a,v=n(Rs,$,s(Ua,a,t,o)),d=v.a,b=v.b,h=v.c,g=e+1,_=r-1,y=d,x=b,L=h;e=g,r=_,a=y,t=x,o=L;continue e}else{var k=n(qr,i,a);if(k.$===1)return s(Ua,a,t,o);var $=k.a,A=n(Ge,4-c,r),V=$<<8*c,E=(function(){if(X(4-c,r)>0){var Ue=4-r,rr=3-c+1;return V>>Ue*8}else return V>>c*8})(),G=s(s6,A,E,s(Ua,a,t,o)),J=G.a,te=G.b,$e=G.c,g=e+A,_=r-A,y=J,x=te,L=$e;e=g,r=_,a=y,t=x,o=L;continue e}}}),VA=S(function(e,r,a){var t=a.a,o=a.b,c=a.c;return I(EA,e,r,t,o,c)}),$K=ae,jt=E7,OA=S(function(e,r,a){var t=a.c,o=a.d,c=l(function(i,u){if(i.$){var v=i.a;return s(jt,e,u,v)}else{var $=i.a;return s(jt,c,u,$)}});return s(jt,e,s(jt,c,r,t),o)}),m6=l(function(e,r){var a=function(i){return X(i,e)<0?0:(i-e)/e|0},t=l(function(i,u){var $=u.a,v=u.b;return p($+(1<<i),n(Tu,{p1:$,dz:i},v))}),o=n(Kf,30,a),c=s(OA,t,p(r,ou),o).b;return c}),Js=n(m6,2,1),UA=(function(e){var r=e;return s(ci,28,{p1:258,dz:0},r)})(n(m6,4,3)),h6=l(function(e,r){var a=r;return n(qr,e,a)}),qA=function(e){var r=n(h6,e-257,UA);if(r.$===1)return Ns((function(){var t=Js,o=t;return"index out of bounds in hardcodedLengthTable: requested index "+(Ie(e-257)+("but hardcodedLengthTable has length "+Ie(Br(o))))})());var a=r.a;return n(Jn,a.dz,a.p1)},WA=l(function(e,r){var a=n(oe,P,G$(r.d2));return n(zo,function(t){var o=n(h6,t,Js);if(o.$===1)return Ns((function(){var i=Js,u=i;return"index out of bounds in hardcodedDistanceTable: requested index "+(Ie(t)+("but hardcodedLengthTable has length "+Ie(Br(u))))})());var c=o.a;return n(xt,function(i){return e-i},n(Jn,c.dz,c.p1))},n(Ws,a,r))}),GA=l(function(e,r){var a=r.a,t=r.b,o=n(oe,P,G$(e.dR.d2));return n(zo,function(c){return c===256?Mo(ef(t)):c<256?Mo(Tn(p(a+1,n(Rs,c,t)))):s(El,l(function(i,u){return Tn(p(a+i,s(VA,u,i,t)))}),qA(c),n(WA,a,e.mj))},n(Ws,o,e.dR))}),g6=S(function(e,r,a){return n(Al,p(r,a),GA(e))}),NA=l(function(e,r){var a=r;return l(function(t,o){var c=n(a,t,o),i=c.a,u=c.b,$=e(u),v=$;return n(v,t,i)})}),ZA=cy,JA=function(e){var r=s(rf,Bt,af(0),af(0));return n(NA,function(a){var t=a.a,o=a.b;if(ee(t,~o&65535)){var c=e-4-t;return s(rf,Bt,Us(t),Us(c))}else return ZA},r)},YA=function(e){var r=n(Hl,JA(wi(e.bb)),e.bb);if(r.$===1)return qe("inflateUncompressedBlock: ran out of bounds");var a=r.a,t=a.a,o=a.b;return We(p(t,M(e,{bb:o})))},_6=function(e){var r=e.a,a=e.b,t=e.c,o=Br(r)*4;if(o){var c=o;return c+a}else return a},y6=U7,C6=O7,P6=l(function(e,r){var a=it(e),t=Ur-it(r.ai)-a,o=s(y6,Ur,r.ai,e);return t<0?{as:n(F,Dc(o),r.as),Z:r.Z+1,ai:s(C6,t,a,e)}:t?{as:r.as,Z:r.Z,ai:o}:{as:n(F,Dc(o),r.as),Z:r.Z+1,ai:Io}}),S6=l(function(e,r){var a=r.a,t=r.c,o=r.d,c=it(e),i=Ur-it(o)-c,u=s(y6,Ur,o,e),$=n(_1,u,r);if(i<0){var v=s(C6,i,c,e);return n(_1,v,$)}else return $}),KA=function(e){var r=e.a,a=e.c,t=e.d,o=l(function(c,i){if(c.$)return n(F,c,i);var u=c.a;return s(jt,o,i,u)});return{as:s(jt,o,P,a),Z:r/Ur|0,ai:t}},x6=l(function(e,r){var a=e.d,t=r.a,o=r.c,c=r.d;if(X(t,Ur*4)<1){var i=l(function(u,$){if(u.$){var d=u.a;return n(S6,d,$)}else{var v=u.a;return s(jt,i,$,v)}});return n(S6,c,s(jt,i,e,o))}else{var i=l(function($,v){if($.$){var b=$.a;return n(P6,b,v)}else{var d=$.a;return s(jt,i,v,d)}});return n(pv,!0,n(P6,c,s(jt,i,KA(e),o)))}}),XA={d2:f([0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0]),gT:n(x6,ko(f([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])),n(_$,256,0))},QA=function(e){var r=32-e.W,a=n(Rl,n(Ge,r,e.ah),e),t=a.ah>24?f([n(Bl,0,a.aQ)]):a.ah>16?f([n(To,0,a.aQ),Lo(a.aQ>>16)]):a.ah>8?f([n(To,0,a.aQ)]):a.ah>1?f([Lo(a.aQ)]):P,o=a.W>24?f([n(Bl,0,a.la)]):a.W>16?f([n(To,0,a.la),Lo(a.la>>16)]):a.W>8?f([n(To,0,a.la)]):a.W>1?f([Lo(a.la)]):P;return Fl(Qu(K(o,K(t,f([l6(a.bb)])))))},eB=function(e){return{W:0,bb:QA(e),aQ:0,ah:0,la:0}},rB=function(e){var r=e.W+e.ah,a=n(Qr,8,r),t=n(Jn,a,0),o=t,c=o(e);if(c.$===1){var i=c.a;return qe(i)}else{var u=c.a,$=u.b,v=qs($);if(v.$===1){var i=v.a;return qe(i)}else{var d=v.a;return We(p(0,eB(d)))}}},aB={d2:f([0,0,0,0,0,0,0,24,152,112,0,0,0,0,0,0]),gT:ko(f([256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,280,281,282,283,284,285,286,287,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]))},nB=function(e){var r=function(o){switch(o){case 0:return n(xt,function(c){return n(jA,c,e)},n(zo,function(c){return YA},rB));case 1:return s(g6,{mj:XA,dR:aB},_6(e),e);case 2:return n(zo,function(c){var i=c.a,u=c.b;return s(g6,{mj:u,dR:i},_6(e),e)},IA);default:return Ns("invalid block type: "+(Ie(o)+" (only 0, 1 and 2 are valid block types)"))}},a=s(El,l(function(o,c){return o+2*c}),Zs,Zs),t=l(function(o,c){return o?n(xt,ef,r(c)):n(xt,Tn,r(c))});return n(zo,ae,s(El,t,Zs,a))},tB=n(xt,n(Pe,CA,Ic),n(Al,mA,nB)),oB=function(e){var r=n(dA,e,tB);if(r.$===1){var a=r.a;return qe(a)}else{var t=r.a;return We(Fl(Qu(n(N,l6,t))))}},cB=function(e){var r=oB(e);if(r.$===1)return T;var a=r.a;return D(a)},iB=cB,nf=function(e){if(L2(e))return!0;switch(e){case"+":return!0;case"/":return!0;default:return!1}},tf=function(e){var r=ct(e);if(r>=65&&r<=90)return r-65;if(r>=97&&r<=122)return r-97+26;if(r>=48&&r<=57)return r-48+26+26;switch(e){case"+":return 62;case"/":return 63;default:return-1}},Ys=q(function(e,r,a,t){if(nf(e)&&nf(r)){var o=tf(r),c=tf(e);if(t==="=")if(a==="="){var i=c<<18|o<<12,u=i>>16;return D(Lo(u))}else if(nf(a)){var $=tf(a),i=c<<18|o<<12|$<<6,v=i>>8;return D(n(To,1,v))}else return T;else if(nf(a)&&nf(t)){var d=tf(t),$=tf(a),i=c<<18|o<<12|($<<6|d),v=i>>8,b=i;return D(Qu(f([n(To,1,v),Lo(b)])))}else return T}else return T}),uB=l(function(e,r){e:for(;;){var a=qc(n(Rc,4,e));r:for(;;)if(a.b)if(a.b.b)if(a.b.b.b)if(a.b.b.b.b){if(a.b.b.b.b.b)break r;var t=a.a,o=a.b,c=o.a,i=o.b,u=i.a,$=i.b,v=$.a,d=C(Ys,t,c,u,v);if(d.$)return T;var b=d.a,h=n(Aa,4,e),g=n(F,b,r);e=h,r=g;continue e}else{var t=a.a,_=a.b,c=_.a,y=_.b,u=y.a,x=C(Ys,t,c,u,"=");if(x.$===1)return T;var b=x.a;return D(n(F,b,r))}else{var t=a.a,L=a.b,c=L.a,k=C(Ys,t,c,"=","=");if(k.$===1)return T;var b=k.a;return D(n(F,b,r))}else break r;else return D(r);return T}}),fB=function(e){return n(se,n(Pe,Ve,Qu),n(uB,e,P))},$B=function(e){return n(se,Fl,fB(e))},lB=$B,vB=Eh,j6=l(function(e,r){return n(pn,"{",vB(e))?n($6,r,e):n(Bs,$6(r),n(Bs,n(Pe,oA,Is(aA)),n(Bs,n(Pe,iB,Is(rA)),n(Is,eA,lB(vA(e))))))}),sB=S(function(e,r,a){return n(vv,0,ho(f([p("v",zl(f6)),p("cur",zl(r)),p("items",n(mn,function(t){var o=t.a,c=t.b;return ho(f([p("n",Hr(o)),p("d",e(c))]))},a))])))}),Vl=function(e){var r=e;return xr(r.o)},dB=function(e){var r=e;return n(N,function(a){return p(a.sR,a.b2)},It(r.V))},bB=function(e){var r=e;return s(sB,r.mr,Vl(r.V),dB(r))},pB=Ft("levelsOut",ae),mB=l(function(e,r){return ho(f([p("tag",Hr(e)),p("text",Hr(r))]))}),w6=function(e){return pB(n(mB,"store",bB(e)))},Ks=function(e){if(e.$)return T;var r=e.a;return D(r)},hB=l(function(e,r){var a=e.ln;if(a.$){var o=e.k0;if(o.$)return T;var t=o.a;return n(se,function(i){return p(i,w6(i))},Ks(n(j6,t,r)))}else{var t=a.a;return n(se,function(c){return p(c,fe)},Ks(n(j6,t,r)))}}),gB=function(e){return{$:2,a:e}},k6=gB,_B=l(function(e,r){var a=r;return M(a,{fP:e(a.fP)})}),Xs=l(function(e,r){var a=r;return M(a,{V:e(a.V)})}),yB=function(e){return Xs(_B(function(r){return M(r,{b2:e(r.b2)})}))},Qs=l(function(e,r){return M(r,{tl:n(yB,e,r.tl)})}),ed=function(e){return M(e,{dF:!0})},CB=l(function(e,r){return M(r,{p_:e})}),PB=l(function(e,r){var a=r;return M(a,{o:n(F,a.fP,a.o),fP:e})}),SB=function(e){return 1+s(me,function(r){return Le(r.bI)},-1,It(e))},xB=S(function(e,r,a){var t=a;return M(t,{V:n(PB,{bI:SB(t.V),b2:r,sR:e},t.V)})}),jB=l(function(e,r){var a=r;if(e.$)return a;var t=e.a,o=n(st,t,a.V),c=dt(o);return s(xB,c.sR+" copy",c.b2,M(a,{V:o}))}),wB=function(e){var r=e,a=r.q;if(a.b){var t=a.a,o=a.b;return M(r,{q:o,fP:t})}else{var c=r.o;if(c.b){var t=c.a,o=c.b;return M(r,{o,fP:t})}else return r}},kB=l(function(e,r){if(e.$===1){var a=e.a;return n(Xs,n(Pe,st(a),wB),r)}else return r}),TB=l(function(e,r){if(e.$===6){var a=e.a;return n(Xs,st(a),r)}else return r}),LB=l(function(e,r){var a=r;return e.$===5?M(a,{dM:!a.dM}):a}),zB=l(function(e,r){var a=r;return{q:n(N,e,a.q),o:n(N,e,a.o),fP:e(a.fP)}}),MB=l(function(e,r){var a=r;switch(e.$){case 2:var t=e.a;return M(a,{ez:D(t)});case 3:var o=e.a,c=a.ez;if(c.$)return a;var t=c.a;return M(a,{V:n(zB,function(u){return ee(u.bI,t)?M(u,{sR:o}):u},a.V)});case 4:return M(a,{ez:T});default:return a}}),DB=l(function(e,r){return n(LB,e,n(MB,e,n(TB,e,n(kB,e,n(jB,e,r)))))}),HB=q(function(e,r,a,t){switch(a.$){case 1:var o=a.a;return p(M(t,{cG:o}),mc);case 2:return p(ed(n(Qs,CB(t.cG),t)),mc);case 3:var c=a.a;return p(ed(M(t,{tl:n(DB,c,t.tl)})),mc);case 4:var i=a.a,u=n(hB,i,t.tl);if(u.$)return p(t,mc);var $=u.a,v=$.a,d=$.b;return p(M(t,{tl:v}),k6(d));default:return p(t,mc)}}),T6=function(e){var r=e.iW,a=e.iU,t=function(o){return o-Da(o)};return t(a)+t(r)<1?s(Ll,0,Da(a),Da(r)):s(Ll,1,Da(a),Da(r))},FB=S(function(e,r,a){var t=a;return M(t,{i:s($r,t.ph(e),p(e,r),t.i)})}),AB=S(function(e,r,a){return M(a,{uK:s(FB,e,r,a.uK)})}),BB=function(e){return e.$===2},rd=l(function(e,r){return e.tx.sc&&!BB(r.gt)}),IB=l(function(e,r){return n(rd,e,r)?n(Qs,n(AB,T6(r.fe),r.cG),r):r}),RB=l(function(e,r){return n(rd,e,r)?ed(r):r}),EB=l(function(e,r){var a=o6(e);return ee(a,r.hG)?r:M(r,{dd:a6(gn(e).kv),hG:a})}),VB=l(function(e,r){var a=r;return M(a,{i:n(lu,a.ph(e),a.i)})}),OB=l(function(e,r){return M(r,{uK:n(VB,e,r.uK)})}),UB=l(function(e,r){return e.hT.kV&&n(rd,e,r)?n(Qs,OB(T6(r.fe)),r):r}),qB=l(function(e,r){return r.dF&&!e.tx.sc?p(M(r,{dF:!1}),k6(w6(r.tl))):p(r,mc)}),L6="canvas",WB=l(function(e,r){return M(r,{pF:r.pF+.5*e.u5,pH:-r.pH+.5*e.rS})}),GB=function(e){return n(WB,e.bT,{pF:e.tx.pF,pH:e.tx.pH})},of=GB,NB=l(function(e,r){var a=e.vs,t=e.ql,o=(function(){if(t.$)return!0;var u=t.a;return n(Wo,u,r.fx.mp)})(),c=function(u){return o?u:T},i=function(u){return o?u:0};return{fM:r.fM,fO:r.hT.jq||r.hT.j7,kG:i(r.fx.kG),im:c(r.fx.im),or:r.tx.jx,gv:of(r),ot:r.tx.lm,bT:{ew:r.ew,rS:r.bT.rS,u5:r.bT.u5},o$:n(Wo,"Space",r.hT.tD),g0:i(r.fx.mh),g1:i(r.fx.mi),vs:a}}),ad=function(e){return{$:1,a:e}},z6=l(function(e,r){var a=r.O-e.O,t=r.pH-e.pH,o=r.pF-e.pF;return ta(o*o+t*t+a*a)}),Ol=ph,nd=l(function(e,r){var a=r.tF;if(a.$){var i=a.a.u0;return e.rS/i}else{var t=a.a.eK,o=n(z6,r.rl,r.rs),c=2*o*Ol(t/2);return e.rS/c}}),gr=S(function(e,r,a){return{pF:e,pH:r,O:a}}),M6=S(function(e,r,a){return s(gr,r.pF+(a.pF-r.pF)*e,r.pH+(a.pH-r.pH)*e,r.O+(a.O-r.O)*e)}),ZB=S(function(e,r,a){var t=e.st,o=e.sC,c=n(nd,r,a),i=s(er,o,t,c);if(ee(i,c))return a;var u=c/i,$=a.tF;if($.$){var d=$.a.u0;return M(a,{tF:ad({u0:d*u})})}else{var v=$.a;return M(a,{rl:s(M6,u,a.rs,a.rl),tF:As(v)})}}),D6=function(e){var r=e.gl,a=e.gm;return ZB({st:r,sC:a})},JB=S(function(e,r,a){var t=a.a,o=a.b;return p(t,s(D6,e,r.bT,o))}),td=q(function(e,r,a,t){var o=e.gl,c=e.gm,i=n(nd,r,a);if(i<=0)return t;var u=i*t,$=s(er,c,o,u);return $/i}),YB=function(e){var r=2-e;return r<=0?1/1e-4:1/r},KB={n5:R(0,0,1),a0:s(gr,0,0,0)},od=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return a*c+t*i+o*u}),en=l(function(e,r){var a=r.a,t=r.b,o=r.c;return R(e*a,e*t,e*o)}),hc=l(function(e,r){var a=e.a,t=e.b,o=e.c;return{pF:r.pF+a,pH:r.pH+t,O:r.O+o}}),H6=l(function(e,r){return R(r.pF-e.pF,r.pH-e.pH,r.O-e.O)}),XB=l(function(e,r){var a=n(od,e.ex,r.n5);if(Me(a)<1e-10)return T;var t=n(H6,e.a0,r.a0),o=n(od,t,r.n5)/a;return D(n(hc,n(en,o,e.ex),e.a0))}),cd=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return R(t*u-o*i,o*c-a*u,a*i-t*c)}),F6=function(e){var r=e.a,a=e.b,t=e.c;return ta(n(va,r,2)+n(va,a,2)+n(va,t,2))},cf=function(e){var r=F6(e);return n(en,1/r,e)},QB=function(e){return R(e.pF,e.pH,e.O)},eI=function(e){var r=QB(e.ft),a=cf(n(H6,e.rl,e.rs)),t=cf(n(cd,a,r)),o=n(cd,t,a);return{jH:a,kL:o,bQ:t}},uf=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.a,i=r.b,u=r.c;return R(a+c,t+i,o+u)}),rI=n(me,uf,R(0,0,0)),aI=l(function(e,r){var a=r.pH,t=r.pF;return p(2*t/e.u5-1,1-2*a/e.rS)}),nI=S(function(e,r,a){var t=r.u5/r.rS,o=eI(e),c=o.jH,i=o.kL,u=o.bQ,$=n(aI,r,a),v=$.a,d=$.b,b=e.tF;if(b.$){var x=b.a.u0,g=x/2,_=g*t,L=n(hc,n(en,d*g,i),n(hc,n(en,v*_,u),e.rl));return{ex:cf(c),a0:L}}else{var h=b.a.eK,g=Ol(h/2),_=g*t,y=cf(rI(f([c,n(en,v*_,u),n(en,d*g,i)])));return{ex:y,a0:e.rl}}}),A6=q(function(e,r,a,t){return n(XB,s(nI,r,a,t),e)}),B6=A6(KB),tI=function(e){return A6({n5:R(0,1,0),a0:s(gr,0,e,0)})},Ul=q(function(e,r,a,t){if(e.$){var o=e.a;return C(tI,o,r,a,t)}else return s(B6,r,a,t)}),I6=l(function(e,r){var a=e.my,t=e.lD,o=(function(){var i=r.tF;if(i.$){var $=i.a.u0;return ad({u0:$/a})}else{var u=i.a;return As(u)}})(),c=function(i){return s(gr,t.pF+(i.pF-t.pF)/a,t.pH+(i.pH-t.pH)/a,t.O+(i.O-t.O)/a)};return M(r,{rl:c(r.rl),rs:c(r.rs),tF:o})}),oI=q(function(e,r,a,t){var o=C(Ul,e,a,r.bT,r.gv);if(o.$)return a;var c=o.a;return n(I6,{lD:c,my:t},a)}),cI=S(function(e,r,a){var t=a.a,o=a.b,c=p(r.im,t);if(!c.a.$&&c.b.$===3){var i=c.a.a,u=c.b.a.lW,$=YB(i),v=C(td,e,r.bT,u,$);return p(t,C(oI,e.$7,r,u,v))}else return p(t,o)}),R6=function(e){return{$:1,a:e}},iI=l(function(e,r){var a=r.O-e.O,t=r.pH-e.pH,o=r.pF-e.pF;return ta(o*o+t*t+a*a)}),ql=function(e){var r=e.tF;if(r.$){var a=r.a.u0;return a}else return n(iI,e.rl,e.rs)},uI=S(function(e,r,a){var t=ql(r),o=t+e*a;return o<=0?1/1e-4:t/o}),E6=q(function(e,r,a,t){var o=C(Ul,e,a,r.bT,r.gv);if(o.$)return a;var c=o.a;return n(I6,{lD:c,my:t},a)}),fI=S(function(e,r,a){var t=a.a,o=a.b,c=p(!!r.g0||!!r.g1,t);if(c.a&&c.b.$===1){var i=c.b.a.ge,u=s(uI,e.g3,o,r.g1),$=r.g0&&!r.g1?i:r.fM,v=C(td,e,r.bT,o,u);return p(R6({ge:$}),C(E6,e.$7,r,o,v))}else return p(t,o)}),$I=l(function(e,r){var a=r.a,t=r.b,o=p(e.im,a);if(o.a.$===1&&o.b.$===3){var c=o.a;return p(pc,t)}else return p(a,t)}),V6=q(function(e,r,a,t){return s(gr,t.pF+e,t.pH+r,t.O+a)}),id=q(function(e,r,a,t){return M(t,{rl:C(V6,e,r,a,t.rl),rs:C(V6,e,r,a,t.rs)})}),O6=function(e){return s(id,e,0,0)},U6=function(e){return s(id,0,0,e)},q6=function(e){var r=e.pH,a=e.pF;return s(id,a,r,0)},lI=q(function(e,r,a,t){return e.$?n(U6,r.O-a.O,n(O6,r.pF-a.pF,t)):n(q6,{pF:r.pF-a.pF,pH:r.pH-a.pH},t)}),vI=S(function(e,r,a){var t=a.a,o=a.b;if(t.$===2){var c=t.a.lX,i=t.a.os,u=C(Ul,e.$7,c,r.bT,r.gv),$=C(Ul,e.$7,c,r.bT,i),v=p($,u);if(!v.a.$&&!v.b.$){var d=v.a.a,b=v.b.a;return p(t,C(lI,e.$7,d,b,c))}else return p(t,o)}else return p(t,o)}),sI=Te(function(e,r,a,t,o){var c=ql(o)*r;return e.$?n(U6,t*c,n(O6,a*c,o)):n(q6,{pF:a*c,pH:-t*c},o)}),dI=S(function(e,r,a){var t=a.a,o=a.b,c=p(t,r.fO);if(!c.a.$&&!c.b){var i=c.a;return p(t,I(sI,e.$7,e.g2,r.g0,r.g1,o))}else return p(t,o)}),bI=function(e){return{$:2,a:e}},pI=l(function(e,r){var a=r.a,t=r.b;return e.o$&&e.or?p(bI({lX:t,os:e.gv}),t):p(a,t)}),mI=function(e){return{$:3,a:e}},hI=l(function(e,r){var a=r.a,t=r.b,o=p(e.im,a);if(!o.a.$&&!o.b.$){var c=o.b;return p(mI({lW:t}),t)}else return p(a,t)}),gI=l(function(e,r){var a=p(e.fO,r);if(a.a&&!a.b.$){var t=a.b;return R6({ge:e.fM})}else return r}),_I=l(function(e,r){return e.ot?pc:r}),yI=l(function(e,r){var a=p(!!e.g0,r);if(a.a&&a.b.$===1){var t=a.b.a.ge;return e.fM-t>.06?pc:r}else return r}),CI=l(function(e,r){if(r.$===1){var a=r.a.ge;return!e.fO&&e.fM-a>.08?pc:r}else return r}),Wl=l(function(e,r){var a=r.a,t=r.b;return p(e(a),t)}),PI=l(function(e,r){return{pF:e,pH:r}}),SI=function(e){return n(PI,.5*(e.bJ+e.bQ),.5*(e.bW+e.bB))},xI=function(e){return Me(e.bB-e.bW)},jI=function(e){return e.bQ-e.bJ},wI=S(function(e,r,a){var t=r.u5/r.rS,o=SI(e),c=M(a,{rl:s(gr,o.pF,o.pH,a.rl.O),rs:s(gr,o.pF,o.pH,a.rs.O)}),i=jI(e),u=xI(e),$=X(i/u,t)>0?i/t:u,v=a.tF;if(v.$)return M(c,{tF:ad({u0:$})});var d=v.a.eK,b=$/2/Ol(d/2),h=n(z6,c.rl,c.rs),g=h?s(M6,b/h,c.rs,c.rl):s(gr,c.rs.pF,c.rs.pH,c.rs.O+b);return M(c,{rl:g})}),kI=S(function(e,r,a){var t=a.a,o=a.b,c=r.vs;if(c.$)return p(t,o);var i=c.a;return p(pc,s(D6,e,r.bT,s(wI,i,r.bT,o)))}),TI=S(function(e,r,a){var t=ql(r),o=t+e*a;return o<=0?1/1e-4:t/o}),LI=S(function(e,r,a){var t=a.a,o=a.b,c=R(!!r.kG,r.fO,t);if(c.a&&!c.b&&!c.c.$){var i=c.c,u=s(TI,e.fK,o,r.kG),$=C(td,e,r.bT,o,u);return p(pc,C(E6,e.$7,r,o,$))}else return p(t,o)}),zI=S(function(e,r,a){return s(JB,e,r,n(Wl,_I(r),s(vI,e,r,n(pI,r,s(dI,e,r,n($I,r,s(cI,e,r,n(hI,r,s(LI,e,r,n(Wl,CI(r),n(Wl,yI(r),s(fI,e,r,n(Wl,gI(r),s(kI,e,r,a))))))))))))))}),MI=S(function(e,r,a){return n(zI,e,n(NB,r,a))}),DI={$:0},ud={fK:50,g2:.0015,g3:5},HI=l(function(e,r){var a=ql(r)/e;return{fK:ud.fK*a,g2:ud.g2,g3:ud.g3*a}}),W6=function(e){return{ew:e.ew,rS:e.bT.rS,u5:e.bT.u5}},FI=function(e){var r=e.vq,a=e.vr,t=e.bT,o=e.r3;if(t.u5<=1||t.rS<=1)return{gl:1/0,gm:0};var c=n(nd,t,o);return{gl:c*r,gm:c/a}},AI=l(function(e,r){var a=n(HI,1500,r),t=FI({r3:t6,bT:W6(e),vq:6,vr:3});return{fK:a.fK,gl:t.gl,gm:t.gm,$7:DI,g2:a.g2,g3:a.g3}}),BI=l(function(e,r){var a=C(MI,n(AI,e,r.cg),{ql:D(L6),vs:T},e,p(r.gt,r.cg)),t=a.a,o=a.b;return M(r,{cg:o,gt:t})}),G6="your-levels",ff=36,II={lu:function(e){return P},l8:function(e){return ne("")},mP:Oe(P),bI:G6,oL:ff,oN:function(e){return Oe(P)},ph:function(e){return Ie(e.bI)}},RI=function(e){return{$:1,a:e}},EI=l(function(e,r){var a=e+"-handle-";return jr(n(wr,function(t){return n(pn,a,t)?Ec(n(Aa,Fa(a),t)):T},r))}),VI=q(function(e,r,a,t){return s(er,0,r-1,a+Da(.5+t/e))}),N6=q(function(e,r,a,t){return C(VI,e.oL,Mu(a),t.aW,of(r).pH-t.jM)}),OI=function(e){var r=e,a=r.o;if(a.b){var t=a.a,o=a.b;return M(r,{o,fP:t})}else{var c=r.q;if(c.b){var t=c.a,o=c.b;return M(r,{q:o,fP:t})}else return r}},UI=l(function(e,r){return p(n(vt,e,r),n(lt,e,r))}),Z6=l(function(e,r){var a=n(UI,e,It(OI(r))),t=a.a,o=a.b;return{q:o,o:Ve(t),fP:dt(r)}}),qI=S(function(e,r,a){var t=Vl(a);if(ee(e,r))return a;if(ee(t,e))return n(Z6,r,a);var o=X(e,t)<0&&X(r,t)>-1?t-1:X(e,t)>0&&X(r,t)<1?t+1:t;return n(st,o,n(Z6,r,n(st,e,a)))}),WI=q(function(e,r,a,t){if(t.$){var i=t.a;if(r.tx.sc)return p(t,T);var u=C(N6,e,r,a,i);return p(n6,D(s(qI,i.aW,u,a)))}else if(r.tx.jx){var o=n(EI,e.bI,r.tx.rc);if(o.$)return p(Hs,T);var c=o.a;return p(RI({aW:c,jM:of(r).pH}),T)}else return p(Hs,T)}),J6=function(e){return M(e,{tx:e.tH})},GI=l(function(e,r){var a=r,t=C(WI,II,J6(e),a.V,a.gy),o=t.a,c=t.b;if(c.$)return p(M(a,{gy:o}),!1);var i=c.a;return p(M(a,{gy:o,V:i}),!0)}),NI=l(function(e,r){var a=n(GI,e,r.tl),t=a.a,o=a.b;return M(r,{dF:r.dF||o,tl:t})}),ZI=function(e){var r=e.pH,a=e.pF;return{iU:2/ta(3)*a,iW:-1/ta(3)*a+r}},JI=l(function(e,r){var a=s(B6,r.cg,e.bT,of(e));if(a.$===1)return r;var t=a.a;return M(r,{fe:ZI({pF:t.pF,pH:t.pH})})}),YI=S(function(e,r,a){return n(qB,e,n(NI,e,n(RB,e,n(UB,e,n(IB,e,n(JI,e,n(BI,e,n(EB,r,a))))))))}),KI=function(e){return{$:3,a:e}},XI={$:5},QI=function(e){return{$:1,a:e}},eR=function(e){return{$:0,a:e}},rR=function(e){return{$:2,a:e}},aR=function(e){return Oe(f([be(n(Y,function(r){return r.lf},e)),wa(f([be(n(Y,function(r){return r.bx},e))]))]))},lK=2,nR=l(function(e,r){if(e.$)return P;var a=e.a;return n(St,a,r)}),tR=l(function(e,r){return n(nR,e.td,{ex:2,eZ:r,t8:T})}),Y6=d5("border-left"),oR=l(function(e,r){return r.nf?Oe(f([ye(n(Y,function(a){return n(mr,.22,a.bx)},e)),s(Y6,w(2),xn,n(Y,function(a){return a.bx},e)),n(z,"transition","background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),wa(f([ye(n(Y,function(a){return n(mr,.3,a.bx)},e))]))])):Oe(f([ye(C(ol,0,0,0,0)),s(Y6,w(2),xn,xo),n(z,"transition","background-color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),wa(f([ye(n(Y,function(a){return a.k3},e))]))]))}),vK=0,sK=0,cR=l(function(e,r){return f([ye(xo),be(n(Y,function(a){return a.lf},e)),n(z,"transition","background-color 120ms cubic-bezier(0.33, 1, 0.68, 1), color 120ms cubic-bezier(0.33, 1, 0.68, 1)"),wa(f([ye(n(Y,r,e)),be(n(Y,n(Pe,function(a){return a.kv},function(a){return a.qh}),e))]))])}),iR=l(function(e,r){var a=function(t){return n(z,"background-color",ze(n(mr,.7,n(lr,t,e))))};return f([a(function(t){return t.k3}),C5(16),be(n(Y,function(t){return t.lf},e)),n(ss,1,n(lr,function(t){return t.jf},e)),n(z,"transition","background-color 160ms cubic-bezier(0.33, 1, 0.68, 1), color 160ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow 160ms cubic-bezier(0.33, 1, 0.68, 1)"),wa(f([a(function(t){return t.k4}),be(n(Y,r,e))])),vi(f([a(function(t){return t.k6}),bl(1.5)]))])}),K6=q(function(e,r,a,t){var o=(function(){return r?p(36,6):p(24,4)})(),c=o.a,i=o.b,u=f([_e(w(c)),Ce(w(c)),sa(w(i)),vr(Ze(50)),kr(da),le,He(de),Lr(de),Ea(ir)]);return K(u,(function(){return n(a?iR:cR,e,t)})())}),fd=l(function(e,r){return n(qn,K(f([B(K(C(K6,e,r.gE,r.fJ,r.f9),K(f([ic(ue)]),r.jw?f([Vu]):P))),jn(r.bj),si(r.jw),n(Ne,"aria-label",r.eZ)]),r.bs),f([r.ga]))}),uR=l(function(e,r){return n(fd,e,{fJ:0,jw:!1,f9:n(Pe,function(a){return a.kv},function(a){return a.tK}),ga:Xe.uJ,eZ:"Delete level",bj:r.bj,gE:0,bs:r.bs})}),fR=l(function(e,r){return n(fd,e,{fJ:0,jw:!1,f9:function(a){return a.bx},ga:Xe.q4,eZ:"Duplicate level",bj:r.bj,gE:0,bs:r.bs})}),$R=l(function(e,r){return n(fd,e,{fJ:0,jw:!1,f9:n(Pe,function(a){return a.kv},function(a){return a.vl}),ga:Xe.tp,eZ:"Rename level",bj:r.bj,gE:0,bs:r.bs})}),lR=function(e){return{$:6,a:e}},vR=function(e){return{$:3,a:e}},X6={$:4},sR=U1("autofocus"),dR=function(e){return n(H,function(r){return r==="Enter"?re(e):Cn("not Enter")},n(j,"key",Se))},bR=function(e){return n(Jr,"blur",re(e))},pR=l(function(e,r){return n(O,f([B(f([Ce(Ze(100)),le,He(de),C(Ci,ue,Zn.kW,ue,Zn.pG)]))]),f([n(uc,f([wo("text"),fc(r),sR(!0),hi(vR),bR(X6),n(Jr,"keydown",dR(X6)),B(f([ns(k4),_e(Ze(100)),_i(gi),n(zr,w(3),w(6)),ye(n(Y,function(a){return a.k3},e)),be(n(Y,function(a){return a.le},e)),s(ht,w(1),xn,n(Y,function(a){return a.bx},e)),vr(Ya.e4),n(z,"font-family",Xa.sL),Oe(kn.hd),Ea(ir),n(z,"user-select","text")]))]),P)]))}),mR=S(function(e,r,a){return ee(r,D(a.dN.bI))?n(pR,e,a.dN.sR):n(O,f([B(f([C(Ci,ue,Zn.e4,ue,Zn.pG),Oe(kn.hd),Ce(Ze(100)),wn(w(ff)),$l(N1),Wt(qt),n(z,"text-overflow","ellipsis"),kr(da),be(a.nf?n(Y,function(t){return t.le},e):n(Y,function(t){return t.lf},e))])),t4(lR(a.jP)),m4(a.dN.sR)]),f([ne(a.dN.sR)]))}),hR=l(function(e,r){return n(qn,K(f([B(K(C(K6,e,r.gE,r.fJ,r.f9),f([ic(ue)]))),Y5(r.bj),n(Ne,"aria-label",r.eZ)]),r.bs),f([r.ga]))}),gR=l(function(e,r){return n(hR,e,{fJ:0,f9:function(a){return a.bx},ga:Xe.t7,eZ:"Copy share link to this level",bj:r.bj,gE:0,bs:r.bs})}),_R=S(function(e,r,a){return{lu:function(t){var o=tR(a),c=(function(){var v=a.tc;if(v.$)return P;var d=v.a;return f([n(gR,e,{bj:function(b){return s(d,b,t.dN.sR,t.dN.b2)},bs:o("Copy share link to this level")})])})(),i=n($R,e,{bj:a.d6(rR(t.dN.bI)),bs:o("Rename level")}),u=n(fR,e,{bj:a.d6(eR(t.jP)),bs:o("Duplicate level")}),$=n(uR,e,{bj:a.d6(QI(t.jP)),bs:o("Delete level")});return K(f([i,u]),K(c,f([$])))},l8:function(t){return n(ac,a.d6,s(mR,e,r,t))},mP:aR(e),bI:G6,oL:ff,oN:oR(e),ph:function(t){return Ie(t.bI)}}}),yR=l(function(e,r){var a=e.pg,t=e.aW;return ee(r,t)?a:X(t,a)<0&&X(r,t)>0&&X(r,a)<1?r-1:X(t,a)>0&&X(r,a)>-1&&X(r,t)<0?r+1:r}),CR=l(function(e,r){return E1(f([n(fi,"."+(e+(", ."+(e+" *"))),f([kr(u5)])),n(fi,"."+r,f([Wn(ir)]))]))}),PR=function(e){return E1(f([n(fi,"."+(e+(":hover ."+(e+"-handle"))),f([aa(dr(.4))])),n(fi,"."+(e+(" ."+(e+"-handle:hover"))),f([aa(dr(1))])),n(fi,"."+(e+(":hover ."+(e+"-actions"))),f([aa(dr(1))]))]))},SR=function(e){return!!e.$},Q6=function(e){return n(O,f([B(f([Po(he(1)),y4(ue),Ps(U4)]))]),f([e]))},xR=l(function(e,r){return jr(n(lt,e,It(r)))}),jR=n(ul,f([fl("0 0 24 24"),Pt("currentColor"),Gn(f([_e(w(18)),Ce(w(18))]))]),n(N,function(e){var r=e.a,a=e.b;return n(z5,f([M5(Ie(r)),D5(Ie(a)),H5("2")]),P)},f([p(9,5),p(15,5),p(9,12),p(15,12),p(9,19),p(15,19)]))),e8=S(function(e,r,a){return r<=1?n(O,f([B(f([_e(w(e.oL)),hr(ue)]))]),P):n(O,f([bt(e.bI+("-handle-"+Ie(a))),Nn(e.bI+"-row-handle"),B(f([le,He(de),Lr(de),_e(w(e.oL)),Ce(w(e.oL)),hr(ue),kr(P5),aa(ue),n(z,"transition","opacity 0.1s ease, color 0.1s ease"),e.mP]))]),f([jR]))}),wR=q(function(e,r,a,t){var o=n(xR,t.aW,a);if(o.$===1)return ne("");var c=o.a,i={jP:t.aW,nf:ee(t.aW,Vl(a)),dN:c},u=of(r).pH-t.jM,$=Mu(a),v=s(er,-t.aW*e.oL,($-1-t.aW)*e.oL,u);return n(O,f([B(f([e.oN(i),ye(xo),tr(Sn),ba(ue),mt(ue),ja(w(t.aW*e.oL)),Ce(w(e.oL)),le,He(de),Pi(ps(w(v))),n(z,"box-shadow","0 4px 12px rgba(0, 0, 0, 0.25)"),Wn(ir)]))]),f([s(e8,e,$,t.aW),Q6(e.l8(i))]))}),$d=l(function(e,r){return e?r:Oe(P)}),kR=l(function(e,r){return n(O,f([Nn(e+"-actions"),B(f([le,He(de),n(z,"gap","4px"),Z1(w(6)),aa(ue),n(z,"transition","opacity 0.1s ease")]))]),r)}),TR=ge("visibility"),LR=function(e){var r=e.oK,a=e.lB,t=e.gd,o=e.fX,c=e.mc,i=e.mV,u=e.l6;return n(O,f([Nn(i),B(f([n($d,!t,u.oN(r)),Ce(w(u.oL)),le,He(de),Pi(ps(w((o-r.jP)*u.oL))),n($d,a,n(z,"transition","transform 0.12s ease")),n(z,"user-select","none"),n($d,t,TR(qt))]))]),f([s(e8,u,c,r.jP),Q6(u.l8(r)),n(kR,i,u.lu(r))]))},zR=q(function(e,r,a,t){var o=Vl(a),c=e.bI+"-row",i=SR(t),u=Mu(a),$=l(function(b,h){var g=(function(){if(t.$){var y=t.a;return{fX:n(yR,{aW:y.aW,pg:C(N6,e,r,a,y)},b),gd:ee(b,y.aW)}}else return{fX:b,gd:!1}})(),_={jP:b,nf:ee(b,o),dN:h};return p(e.ph(h),LR({lB:i,l6:e,mc:u,fX:g.fX,mV:c,gd:g.gd,oK:_}))}),v=e.bI+"-list",d=(function(){if(t.$){var b=t.a;return f([p("reorderable-list:dragging",n(CR,v,c)),p("reorderable-list:lifted",C(wR,e,r,a,b))])}else return f([p("reorderable-list:hover-reveal",PR(c))])})();return s(is,"div",f([Nn(v),B(f([tr(Co),le,yr(ra)]))]),K(n(Za,$,It(a)),d))}),MR=function(e){return n(O,f([B(f([_e(w(16)),Ce(w(16)),le,He(de),Lr(de)]))]),f([e?Xe.qs:Xe.qt]))},DR=function(e){return n(O,f([B(f([le,He(de),n(z,"gap","4px")]))]),e.d7)},HR=S(function(e,r,a){return n(O,f([B(f([le,He(de),Ce(w(ff)),il(Zn.kW),Z1(w(6)),ye(n(Y,function(t){return t.k4},e)),n(z,"user-select","none")]))]),f([n(O,f([B(f([le,He(de),Po(he(1)),n(z,"gap","6px"),kr(da),Oe(kn.hd),pa(he(600)),be(n(Y,function(t){return t.lf},e))])),jn(r.ih)]),f([MR(a),ne(r.iS)])),DR(r)]))}),FR=q(function(e,r,a,t){var o=t,c={ih:a.d6(XI),iS:"Levels",d7:a.d7},i=o.dM?Mu(o.V)*ff:0;return n(O,f([B(f([vr(Ya.e4),Wt(qt),ye(n(Y,function(u){return u.k6},e)),cl.mn]))]),f([s(HR,e,c,o.dM),n(O,f([B(f([Ce(w(i)),Wt(qt),n(z,"transition","height 160ms cubic-bezier(0.33, 1, 0.68, 1)")]))]),f([C(zR,s(_R,e,o.ez,a),J6(r),o.V,o.gy)]))]))}),AR=S(function(e,r,a){return n(O,f([B(f([le,yr(ra),n(z,"gap","12px")]))]),f([n(O,f([B(f([br(w(16)),pa(he(500)),be(n(Y,function(t){return t.le},r))]))]),f([ne("Levels")])),C(FR,r,e,{tc:T,td:T,d6:KI,d7:P},a.tl)]))}),BR={$:2},Gl=l(function(e,r){var a=e.kT,t=e.aX,o=r;return n(oe,so,n(ea,qr(s(er,0,Ku-1,a)),n(qr,s(er,0,Ds-1,t),o)))}),IR=function(e){switch(e){case 0:return"neutral";case 1:return"red";case 2:return"yellow";case 3:return"green";case 4:return"cyan";case 5:return"blue";default:return"magenta"}},RR=l(function(e,r){return n(O,f([B(f([le,He(de),n(z,"gap","8px"),sa(w(8))]))]),f([n(O,f([B(f([_e(w(24)),Ce(w(24)),vr(w(4)),ye(or(n(Gl,r.cG,r.dd)))]))]),P),n(Cr,f([B(f([be(n(Y,function(a){return a.lf},e))]))]),f([ne(IR(r.cG.aX)+(" \xB7 shade "+Ie(r.cG.kT)))]))]))}),ER=M(tc,{uY:"column-reverse"}),VR=function(e){return{$:1,a:e}},OR=S(function(e,r,a){var t=ee(a,r.cG);return n(O,f([B(f([_e(w(20)),Ce(w(20)),ye(or(n(Gl,a,r.dd))),s(ht,w(t?3:0),xn,n(Y,function(o){return o.le},e)),kr(da)])),jn(VR(a))]),P)}),UR=S(function(e,r,a){return n(O,f([B(f([le,yr(ER),n(z,"gap","2px")]))]),n(N,function(t){return s(OR,e,r,{aX:a,kT:t})},n(Na,0,Ku-1)))}),qR=l(function(e,r){return n(O,f([B(f([le,n(z,"gap","2px"),sa(w(8))]))]),n(N,n(UR,e,r),n(Na,0,Ds-1)))}),WR=l(function(e,r){return n(O,f([B(f([sa(w(16))]))]),f([n(O,f([B(f([br(w(20))]))]),f([ne("Color Palette")])),n(RR,e,r),n(qR,e,r),n(e4,e,{eZ:"Set selected as background",bj:BR})]))}),GR=function(e){return n(O,f([B(f([sa(w(16))]))]),f([n(O,f([B(f([br(w(20))]))]),f([ne("Instructions")])),n(O,P,f([ne("- Press mouse to add trixel")])),n(O,P,f([ne("- Hold shift and press mouse to remove trixel")])),n(O,P,f([ne("- Panning: SCROLL or SPACE + DRAG")])),n(O,P,f([ne("- Zooming: CTRL + SCROLL")]))]))},NR=S(function(e,r,a){return f([{hd:GR(r),ga:Xe.rT,bI:"instructions",t8:T,pe:n(Pe,function(t){return t.kv},function(t){return t.sr}),iS:"Instructions"},{hd:n(WR,r,a),ga:Xe.kv,bI:"colors",t8:T,pe:n(Pe,function(t){return t.kv},function(t){return t.rK}),iS:"Color palette"},{hd:s(AR,e,r,a),ga:Xe.ru,bI:"levels",t8:T,pe:n(Pe,function(t){return t.kv},function(t){return t.p6}),iS:"Levels"}])}),ZR=function(e){return{$:4,a:e}},JR=function(e){var r=function(a){return Ks(n(up,n(j,a,Se),e))};return{oe:n(oe,"",r("origin")),ol:n(oe,"",r("path")),k0:r("stored"),ln:r("urlBlob")}},YR=Vf("levelsIn",S$),KR=function(e){return YR(n(Pe,JR,e))},XR=S(function(e,r,a){return KR(ZR)}),r8=function(e){var r=e;return dt(r.V).b2},a8=l(function(e,r){e:for(;;)if(r.b){var a=r.a,t=r.b,o=e(a);if(o.$){var i=e,u=t;e=i,r=u;continue e}else{var c=o.a;return D(c)}}else return T}),QR=l(function(e,r){return n(a8,function(a){var t=a.a,o=a.b,c=p(ee(t,e),o);if(c.a&&!c.b.$){var i=c.b,u=i.b;return D(u)}else return T},r.bc)}),eE=l(function(e,r){return n(oe,0,n(a8,QR(e),r))}),rE=l(function(e,r){return n(eE,e,r.ch)}),aE=rE,nE=function(e){return{$:1,a:e}},tE=function(e){return{l4:e,bN:1,b6:nE({h5:0,iw:1}),b7:T}},Nl=function(e){return{$:0,a:e}},$f=function(e){return{$:0,a:e}},n8=function(e){return{$:0,a:e}},ld=l(function(e,r){return n8({dD:f([r]),lh:e})}),t8=function(e){var r=e.a,a=e.b,t=e.c;return ld({gA:Nl(0),gC:$f(1),gU:s(gr,r,a,t)})},o8=function(e){return t8(R(e,0,0))},c8=function(e){return t8(R(0,e,0))},i8=function(e){return{$:1,a:e}},vd=function(e){var r=e.a,a=e.b,t=e.c;return s(gr,r,a,t)},Zl=l(function(e,r){var a=r.a,t=r.b,o=r.c;return n(uf,n(en,a,e.pF),n(uf,n(en,t,e.pH),n(en,o,e.O)))}),u8=l(function(e,r){return vd(n(Zl,e,R(r.pF,r.pH,r.O)))}),f8=S(function(e,r,a){var t=R(-e.a0.pF,-e.a0.pH,-e.a0.O),o=R(e.a0.pF,e.a0.pH,e.a0.O),c=Oa(r),i=n(hc,t,a),u=R(i.pF,i.pH,i.O),$=Va(r),v=cf(e.ex),d=n(od,v,u),b=n(uf,n(en,$,u),n(uf,n(en,c,n(cd,v,u)),n(en,1-$,n(en,d,v))));return n(hc,o,vd(b))}),$8=l(function(e,r){var a=function(t){var o=s(f8,{ex:e,a0:s(gr,0,0,0)},r,vd(t));return R(o.pF,o.pH,o.O)};return{pF:a(R(1,0,0)),pH:a(R(0,1,0)),O:a(R(0,0,1))}}),oE=l(function(e,r){var a=e.a0,t=n($8,e.ex,r),o=n(u8,t,a);return ld({gA:i8(t),gC:$f(1),gU:s(gr,a.pF-o.pF,a.pH-o.pH,a.O-o.O)})}),cE=function(e){return n(oE,{ex:R(0,0,1),a0:s(gr,0,0,0)},e)},iE=l(function(e,r){return ld({gA:Nl(0),gC:$f(r),gU:s(gr,e.pF*(1-r),e.pH*(1-r),e.O*(1-r))})}),l8=function(e){var r=e.iW,a=e.iU;return{pF:ta(3)/2*a,pH:1/2*a+r}},uE=function(e){return{$:15,a:e}},fE=l(function(e,r){return uE({F:e,lp:r})}),$E=S(function(e,r,a){var t=a.a,o=t.a,c=t.b,i=t.c,u=a.b,$=(function(){var _=l8((function(){return o?{iU:.6666666666666666,iW:.6666666666666666}:{iU:.3333333333333333,iW:.3333333333333333}})());return{pF:_.pF,pH:_.pH,O:0}})(),v=n(fE,tE(n(Gl,u,r)),R({pF:0,pH:0,O:0},{pF:Va(gt(30)),pH:Oa(gt(30)),O:0},{pF:0,pH:1,O:0})),d=n(c8,1+Oa(gt(30)),n(o8,Va(gt(30)),n(cE,gt(180),v))),b=l8({iU:c,iW:i}),h=b.pH,g=b.pF;return n(c8,h,n(o8,g,s(iE,$,n(aE,"trixel scale",e),(function(){return o?d:v})())))}),v8={gA:Nl(0),gC:$f(1),gU:s(gr,0,0,0)},s8=function(e){return n8({dD:e,lh:v8})},lE=l(function(e,r){var a=r8(r.tl);return s8(n(N,n($E,e,r.dd),J4(a.uK)))}),vE=i5,sE=function(e){return{$:13,a:e}},dE=function(e){return{$:2,a:e}},bE=function(e){return{$:6,a:e}},pE=function(e){return{$:16,a:e}},mE=function(e){return{$:15,a:e}},hE=function(e){return{$:10,a:e}},gE=function(e){return{$:12,a:e}},_E=function(e){return{$:9,a:e}},yE=function(e){return{$:19,a:e}},CE=function(e){return{$:1,a:e}},PE=function(e){return{$:5,a:e}},SE=function(e){return{$:17,a:e}},xE=function(e){return{$:18,a:e}},jE=function(e){return{$:4,a:e}},wE=function(e){return{$:20,a:e}},kE=function(e){return{$:3,a:e}},TE=function(e){return{$:0,a:e}},LE=function(e){return{$:21,a:e}},zE=function(e){return{$:11,a:e}},ME=function(e){return{$:8,a:e}},DE=function(e){return{$:7,a:e}},HE=function(e){return{$:14,a:e}},d8=f8({ex:R(0,0,1),a0:s(gr,0,0,0)}),b8=l(function(e,r){if(e.$){var t=e.a;return n(u8,t,r)}else{var a=e.a;return n(d8,a,r)}}),p8=l(function(e,r){if(e.$){var t=e.a;return s(gr,r.pF*t.pF,r.pH*t.pH,r.O*t.O)}else{var a=e.a;return s(gr,r.pF*a,r.pH*a,r.O*a)}}),m8=l(function(e,r){return s(gr,r.pF+e.pF,r.pH+e.pH,r.O+e.O)}),FE=l(function(e,r){return{pF:n(Zl,e,r.pF),pH:n(Zl,e,r.pH),O:n(Zl,e,r.O)}}),AE=function(e){return n($8,R(0,0,1),e)},h8=function(e){if(e.$){var a=e.a;return a}else{var r=e.a;return AE(r)}},BE=l(function(e,r){var a=p(e,r);if(!a.a.$&&!a.b.$){var t=a.a.a,o=a.b.a;return Nl(t+o)}else return i8(n(FE,h8(e),h8(r)))}),sd=function(e){return{$:1,a:e}},IE=l(function(e,r){var a=p(e,r);if(a.a.$)if(a.b.$){var c=a.a.a,i=a.b.a;return sd(s(gr,c.pF*i.pF,c.pH*i.pH,c.O*i.O))}else{var c=a.a.a,t=a.b.a;return sd(s(gr,c.pF*t,c.pH*t,c.O*t))}else if(a.b.$){var t=a.a.a,c=a.b.a;return sd(s(gr,t*c.pF,t*c.pH,t*c.O))}else{var t=a.a.a,o=a.b.a;return $f(t*o)}}),RE=l(function(e,r){return{gA:n(BE,e.gA,r.gA),gC:n(IE,e.gC,r.gC),gU:n(m8,e.gU,n(b8,e.gA,n(p8,e.gC,r.gU)))}}),dd=S(function(e,r,a){switch(r.$){case 0:var t=r.a.dD,o=r.a.lh,c=n(RE,e,o);return s(me,dd(c),a,t);case 1:var i=r.a.l1,u=r.a.hi;return K(n(N,function(b){var h=b.a,g=b.b;return p(h,bE({hi:u,r7:g}))},s(dd,e,i,P)),a);case 2:var v=r.a;return n(F,p(e,TE(v)),a);case 3:var v=r.a;return n(F,p(e,CE(v)),a);case 4:var v=r.a;return n(F,p(e,dE(v)),a);case 5:var v=r.a;return n(F,p(e,kE(v)),a);case 6:var v=r.a;return n(F,p(e,jE(v)),a);case 7:var v=r.a;return n(F,p(e,PE(v)),a);case 8:var v=r.a;return n(F,p(e,DE(v)),a);case 9:var v=r.a;return n(F,p(e,ME(v)),a);case 10:var $=r.a;return n(F,p(e,_E($)),a);case 11:var v=r.a;return n(F,p(e,hE(v)),a);case 12:var v=r.a;return n(F,p(e,zE(v)),a);case 13:var v=r.a;return n(F,p(e,gE(v)),a);case 14:var v=r.a;return n(F,p(e,sE(v)),a);case 15:var v=r.a;return n(F,p(e,HE(v)),a);case 16:var v=r.a;return n(F,p(e,mE(v)),a);case 17:var v=r.a;return n(F,p(e,pE(v)),a);case 18:var v=r.a;return n(F,p(e,SE(v)),a);case 19:var v=r.a;return n(F,p(e,xE(v)),a);case 20:var d=r.a;return n(F,p(e,yE(d)),a);case 21:var d=r.a;return n(F,p(e,wE(d)),a);default:var d=r.a;return n(F,p(e,LE(d)),a)}}),g8=function(e){return Ve(s(dd,v8,e,P))},dK=ae,Yn={pF:0,pH:0,O:0},bd=function(e){var r=e;return r.pF},pd=function(e){var r=e;return r.pH},md=function(e){var r=e;return r.O},EE=function(e){var r=e,a=md(r.vp),t=pd(r.vp),o=bd(r.vp),c=md(r.vj),i=pd(r.vj),u=bd(r.vj),$=md(r.vb),v=pd(r.vb),d=bd(r.vb);return d*i*a+v*c*o+$*u*t-$*i*o-v*u*a-d*c*t>0},Jl=function(e){var r=e;return r.a0},rn=function(e){var r=e;return r},gc=function(e){var r=e;return r},Yl=function(e){var r=e;return r.vb},Kl=function(e){var r=e;return r.vj},lf=function(e){var r=e;return r.vp},VE=function(e){var r=gc(Jl(e)),a=rn(lf(e)),t=rn(Kl(e)),o=rn(Yl(e));return{ne:EE(e),aj:o.pF,ak:o.pH,al:o.O,am:t.pF,an:t.pH,ao:t.O,ap:a.pF,aq:a.pH,ar:a.O,a1:r.pF,a2:r.pH,a3:r.O,gC:1}},bK=ae,_c=l(function(e,r){return{$:6,a:e,b:r}}),_8=l(function(e,r){return{ne:ee(e.ne,r.ne),aj:e.aj*r.aj+e.ak*r.am+e.al*r.ap,ak:e.aj*r.ak+e.ak*r.an+e.al*r.aq,al:e.aj*r.al+e.ak*r.ao+e.al*r.ar,am:e.am*r.aj+e.an*r.am+e.ao*r.ap,an:e.am*r.ak+e.an*r.an+e.ao*r.aq,ao:e.am*r.al+e.an*r.ao+e.ao*r.ar,ap:e.ap*r.aj+e.aq*r.am+e.ar*r.ap,aq:e.ap*r.ak+e.aq*r.an+e.ar*r.aq,ar:e.ap*r.al+e.aq*r.ao+e.ar*r.ar,a1:r.a1+(e.a1*r.aj+e.a2*r.am+e.a3*r.ap)*r.gC,a2:r.a2+(e.a1*r.ak+e.a2*r.an+e.a3*r.aq)*r.gC,a3:r.a3+(e.a1*r.al+e.a2*r.ao+e.a3*r.ar)*r.gC,gC:e.gC*r.gC}}),hd={$:0},ve=hd,Xl=l(function(e,r){var a=r;switch(a.$){case 0:return ve;case 6:var t=a.a,o=a.b,c=n(_8,t,e);return n(_c,c,o);case 1:return n(_c,e,a);case 2:return n(_c,e,a);case 4:return n(_c,e,a);case 3:return n(_c,e,a);default:return n(_c,e,a)}}),Ql=l(function(e,r){return n(Xl,VE(e),r)}),OE=l(function(e,r){return n(Ql,e,r)}),pK=ae,ki=function(e){return e},y8=function(e){var r=e;return r.ex},C8=function(e){var r=e;return r.a0},UE=l(function(e,r){var a=r,t=gc(C8(e)),o=.5*a,c=Va(o),i=Oa(o),u=rn(y8(e)),$=u.pF*i,v=c*$,d=$*$,b=u.pH*i,h=c*b,g=$*b,_=b*b,y=1-2*(d+_),x=u.O*i,L=c*x,k=2*(g-L),A=2*(g+L),V=$*x,E=2*(V+h),G=2*(V-h),J=b*x,te=2*(J-v),$e=2*(J+v),pe=x*x,ke=1-2*(_+pe),Fe=1-2*(d+pe);return{ne:!0,aj:ke,ak:A,al:G,am:k,an:Fe,ao:$e,ap:E,aq:te,ar:y,a1:t.pF-ke*t.pF-k*t.pH-E*t.O,a2:t.pH-A*t.pF-Fe*t.pH-te*t.O,a3:t.O-G*t.pF-$e*t.pH-y*t.O,gC:1}}),qE=S(function(e,r,a){return n(Xl,n(UE,e,r),a)}),gd=S(function(e,r,a){return s(qE,e,r,a)}),mK=ae,wt=function(e){return e},hK=ae,e0=function(e){return e},gK=ae,r0=l(function(e,r){return{ex:r,a0:e}}),_d=wt({pF:0,pH:0,O:1}),a0=_d,P8=n(r0,Yn,a0),WE=l(function(e,r){if(e.$){var t=e.a,o=function(c){var i=c.a,u=c.b,$=c.c;return wt({pF:i,pH:u,O:$})};return n(OE,e0({a0:Yn,vb:o(t.pF),vj:o(t.pH),vp:o(t.O)}),r)}else{var a=e.a;return s(gd,P8,ki(a),r)}}),GE=l(function(e,r){var a=gc(e),t=1-r;return{ne:r>=0,aj:1,ak:0,al:0,am:0,an:1,ao:0,ap:0,aq:0,ar:1,a1:t*a.pF,a2:t*a.pH,a3:t*a.O,gC:r}}),NE=S(function(e,r,a){return n(Xl,n(GE,e,r),a)}),ZE=S(function(e,r,a){return s(NE,e,r,a)}),JE=l(function(e,r){if(e.$)return r;var a=e.a;return s(ZE,Yn,a,r)}),_K=ae,S8=S(function(e,r,a){return{pF:e,pH:r,O:a}}),x8=function(e){var r=e;return r},YE=function(e){var r=x8(e);return{ne:!0,aj:1,ak:0,al:0,am:0,an:1,ao:0,ap:0,aq:0,ar:1,a1:r.pF,a2:r.pH,a3:r.O,gC:1}},j8=l(function(e,r){return n(Xl,YE(e),r)}),w8=l(function(e,r){return n(j8,e,r)}),KE=l(function(e,r){var a=e.O,t=e.pH,o=e.pF;return n(w8,s(S8,o,t,a),r)}),yd=l(function(e,r){var a=e.gC,t=e.gA,o=e.gU;return n(KE,o,n(WE,t,n(JE,a,r)))}),k8=function(e){var r=e;return r},XE=function(e){var r=e;return k8(r.pX)},yK=1,T8=q(function(e,r,a,t){return{$:2,a:e,b:r,c:a,d:t}}),QE=q(function(e,r,a,t){return{$:3,a:e,b:r,c:a,d:t}}),L8=q(function(e,r,a,t){return{$:4,a:e,b:r,c:a,d:t}}),eV=q(function(e,r,a,t){return{$:6,a:e,b:r,c:a,d:t}}),z8=q(function(e,r,a,t){return{$:7,a:e,b:r,c:a,d:t}}),rV=q(function(e,r,a,t){return{$:5,a:e,b:r,c:a,d:t}}),aV=q(function(e,r,a,t){return{$:1,a:e,b:r,c:a,d:t}}),n0=function(e){switch(e.$){case 0:return e;case 1:var a=e.a,r=e.b,o=e.c;return C(aV,a,r,o,1);case 2:var a=e.a,r=e.b,o=e.c;return C(T8,a,r,o,1);case 3:var a=e.a,t=e.b,o=e.c;return C(QE,a,t,o,1);case 4:var a=e.a,t=e.b,o=e.c;return C(L8,a,t,o,1);case 5:var a=e.a,t=e.b,o=e.c;return C(rV,a,t,o,1);case 6:var a=e.a,t=e.b,o=e.c;return C(eV,a,t,o,1);case 7:var a=e.a,t=e.b,o=e.c;return C(z8,a,t,o,1);case 8:return e;case 9:return e;default:return e}},Cd={$:0},CK=0,PK=ae,nV=Be(function(e,r,a,t,o,c,i,u){e:for(;;)if(u.b){var $=u.a,v=u.b,d=i($),b=d,h=n(Ge,b.nV,e),g=n(Le,b.nR,r),_=n(Ge,b.sG,a),y=n(Le,b.sv,t),x=n(Ge,b.sH,o),L=n(Le,b.sw,c),k=i,A=v;e=h,r=g,a=_,t=y,o=x,c=L,i=k,u=A;continue e}else return{nR:r,sv:t,sw:c,nV:e,sG:a,sH:o}}),tV=S(function(e,r,a){var t=e(r),o=t;return ao(nV,o.nV,o.nR,o.sG,o.sv,o.sH,o.sw,e,a)}),M8=function(e){var r=e.sw,a=r,t=e.sH,o=t,c=e.sv,i=c,u=e.sG,$=u,v=e.nR,d=v,b=e.nV,h=b;return{nR:n(Le,h,d),sv:n(Le,$,i),sw:n(Le,o,a),nV:n(Ge,h,d),sG:n(Ge,$,i),sH:n(Ge,o,a)}},yc=l(function(e,r){var a=e,t=r;return n(Le,a,t)}),Ti=l(function(e,r){var a=e,t=r;return n(Ge,a,t)}),vf=function(e){var r=e;return r},sf=function(e){var r=e;return r.pF},df=function(e){var r=e;return r.pH},bf=function(e){var r=e;return r.O},D8=function(e){var r=vf(e),a=r.a,t=r.b,o=r.c,c=sf(a),i=df(a),u=bf(a),$=sf(t),v=df(t),d=bf(t),b=sf(o),h=df(o),g=bf(o);return M8({nR:n(yc,c,n(yc,$,b)),sv:n(yc,i,n(yc,v,h)),sw:n(yc,u,n(yc,d,g)),nV:n(Ti,c,n(Ti,$,b)),sG:n(Ti,i,n(Ti,v,h)),sH:n(Ti,u,n(Ti,d,g))})},H8=vy,kt=function(e){return H8(gc(e))},t0=function(e){return H8(x8(e))},Pd=l(function(e,r){var a=e,t=r;return{pF:t.pH*a.O-t.O*a.pH,pH:t.O*a.pF-t.pF*a.O,O:t.pF*a.pH-t.pH*a.pF}}),o0=l(function(e,r){var a=e,t=r;return{pF:t.pF-a.pF,pH:t.pH-a.pH,O:t.O-a.O}}),Sd=function(e){return e},xd={pF:0,pH:0,O:0},oV=l(function(e,r){var a=e,t=r,o=n(Le,Me(t.pF),n(Le,Me(t.pH),Me(t.O)));if(o){var c=t.O/o,i=t.pH/o,u=t.pF/o,$=ta(u*u+i*i+c*c);return{pF:a*u/$,pH:a*i/$,O:a*c/$}}else return xd}),cV=oV(Sd(1)),F8=S(function(e,r,a){var t=n(o0,r,a),o=n(o0,e,r);return cV(n(Pd,t,o))}),iV=function(e){var r=vf(e),a=r.a,t=r.b,o=r.c,c=t0(s(F8,a,t,o));return R({ag:c,tB:kt(a)},{ag:c,tB:kt(t)},{ag:c,tB:kt(o)})},uV=l(function(e,r){return{$:2,a:e,b:r}}),A8=uV({mo:3,mZ:0,nY:4}),B8=function(e){if(e.b){var r=e.a,a=e.b,t=A8(n(N,iV,e)),o=s(tV,D8,r,a);return C(T8,o,e,t,0)}else return Cd},SK=ae,an=S(function(e,r,a){return R(e,r,a)}),nn=function(e){return e},Gt=l(function(e,r){var a=r;return e*a}),Nt=S(function(e,r,a){var t=e,o=r,c=a;return{pF:t,pH:o,O:c}}),I8=(function(){var e=nn(1),r=nn(1),a=nn(1),t=n(Gt,-.5,e),o=n(Gt,-.5,r),c=n(Gt,-.5,a),i=s(Nt,c,o,t),u=n(Gt,.5,e),$=s(Nt,c,o,u),v=n(Gt,.5,r),d=s(Nt,c,v,t),b=s(Nt,c,v,u),h=n(Gt,.5,a),g=s(Nt,h,o,t),_=s(Nt,h,v,t),y=s(Nt,h,o,u),x=s(Nt,h,v,u);return n0(B8(f([s(an,i,_,g),s(an,i,d,_),s(an,$,y,x),s(an,$,x,b),s(an,g,_,x),s(an,g,x,y),s(an,i,b,d),s(an,i,$,b),s(an,i,g,y),s(an,i,y,$),s(an,d,x,_),s(an,d,b,x)])))})(),c0={$:0},fV=S(function(e,r,a){return{$:1,a:e,b:r,c:a}}),$V=S(function(e,r,a){var t=r.a,o=r.b,c=r.c,i=e(c),u=e(o),$=e(t),v=t0(s(F8,$,u,i)),d={ag:v,tB:kt($)},b={ag:v,tB:kt(u)},h={ag:v,tB:kt(i)};return n(F,d,n(F,b,n(F,h,a)))}),pf=function(e){var r=e;return r.aH},lV=q(function(e,r,a,t){if(r.$===1)return T;var o=r.a;if(a.$===1)return T;var c=a.a;if(t.$===1)return T;var i=t.a;return D(s(e,o,c,i))}),mf=function(e){var r=e;return r.lp},jd=l(function(e,r){return n(qr,e,mf(r))}),R8=function(e){var r=function(a){var t=a.a,o=a.b,c=a.c;return C(lV,S(function(i,u,$){return R(i,u,$)}),n(jd,t,e),n(jd,o,e),n(jd,c,e))};return n(wr,r,pf(e))},xK=ae,vV=l(function(e,r){var a=Br(e),t=function(o){var c=o.a,i=o.b,u=o.c;return c>=0&&X(c,a)<0&&i>=0&&X(i,a)<0&&u>=0&&X(u,a)<0};return n(z1,t,r)?{aH:r,lp:e}:{aH:n(Fr,t,r),lp:e}}),sV=S(function(e,r,a){return{$:3,a:e,b:r,c:a}}),Li=sV({mo:1,mZ:3,nY:4}),Tt=function(e){var r=e;return r},i0=l(function(e,r){var a=Tt(r),t=Tt(e);return p(R(t.pF,t.pH,t.O),R(a.pF,a.pH,a.O))}),hf=uy,E8=s(hf,0,0,0),wd=Vr(function(e,r,a,t,o,c){var i=c.a,u=c.b,$=c.c,v=n(Ke,n(i0,e,r),o);if(v.$){var b={ag:E8,tB:kt(r)},h={ag:E8,tB:kt(e)},g=$+1,_=$;return R(n(F,R(a,_,g),n(F,R(a,g,t),i)),n(F,b,n(F,h,u)),$+2)}else{var d=v.a;return R(n(F,R(a,d,t),i),u,$)}}),dV=Te(function(e,r,a,t,o){e:for(;;)if(a.b){var c=a.a,i=c.a,u=c.b,$=c.c,v=a.b,d=e($),b=e(u),h=e(i),g=t+2,_=t+1,y=t,x=e,L=r,k=v,A=t+3,V=Sr(wd,d,h,g,y,r,Sr(wd,b,d,_,g,r,Sr(wd,h,b,y,_,r,o)));e=x,r=L,a=k,t=A,o=V;continue e}else{var E=o,G=E.a,J=E.b;return p(G,Ve(J))}}),bV=Te(function(e,r,a,t,o){e:for(;;)if(r.b){var c=r.a,i=c.a,u=c.b,$=c.c,v=r.b,d=e($),b=e(u),h=e(i),g=a+2,_=a+1,y=a,x=s($r,n(i0,h,d),g,s($r,n(i0,d,b),_,s($r,n(i0,b,h),y,o))),L=n(F,R(y,_,g),t),k=e,A=v,V=a+3,E=L,G=x;e=k,r=A,a=V,t=E,o=G;continue e}else return R(t,o,a)}),Cc=S(function(e,r,a){var t=R8(a),o=s(dn,$V(r),P,t),c=I(bV,r,t,0,P,Ae),i=c.a,u=c.b,$=c.c,v=I(dV,r,u,t,0,R(i,P,$)),d=v.a,b=v.b,h=nr(b)?o:K(o,b);return s(fV,e,n(vV,ko(h),d),n(Li,h,d))}),V8=function(e){return{aH:n(N,function(r){return R(3*r,3*r+1,3*r+2)},n(Na,0,xr(e)-1)),lp:ko(Rn(n(N,function(r){var a=r.a,t=r.b,o=r.c;return f([a,t,o])},e)))}},u0=function(e){switch(e.$){case 0:return c0;case 1:var t=e.a,r=e.b,a=n(N,vf,r);return s(Cc,t,ae,V8(a));case 2:var t=e.a,r=e.b,a=n(N,vf,r);return s(Cc,t,ae,V8(a));case 3:var t=e.a,o=e.b;return s(Cc,t,ae,o);case 4:var t=e.a,o=e.b;return s(Cc,t,function(c){return c.tB},o);case 5:var t=e.a,o=e.b;return s(Cc,t,function(c){return c.tB},o);case 6:var t=e.a,o=e.b;return s(Cc,t,function(c){return c.tB},o);case 7:var t=e.a,o=e.b;return s(Cc,t,function(c){return c.tB},o);case 8:return c0;case 9:return c0;default:return c0}},O8=u0(I8),pV=function(e){var r=e;return r.qX},U8=function(e){return{$:5,a:e}},mV=l(function(e,r){e:for(;;)if(e.b){var a=e.a,t=e.b,o=t,c=n(F,a,r);e=o,r=c;continue e}else return r}),Do=function(e){return U8(n(mV,e,P))},ka=l(function(e,r){return{$:1,a:e,b:r}}),f0={src:`
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
    `,attributes:{normal:"ag",position:"tB",tangent:"gN",uv:"gZ"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},hV=l(function(e,r){switch(r.$){case 0:return n(Ky,e,r);case 1:return n(Xy,e,r);case 2:return n(Qy,e,r);case 3:return n(eC,e,r);case 4:return n(rC,e,r);default:return n(aC,e,r)}}),gV=l(function(e,r){switch(r.$){case 0:return n(wy,e,r);case 1:return n(ky,e,r);case 2:return n(Ty,e,r);case 3:return n(Ly,e,r);case 4:return n(zy,e,r);case 5:return n(My,e,r);case 6:return n(Dy,e,r);case 7:return n(Hy,e,r);default:return Fy(e)}}),Je=jy,zi={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"by",constantAmbientOcclusion:"bC",constantMaterialColor:"eq",enabledLights:"af",lights12:"gi",lights34:"hZ",lights56:"h_",lights78:"h$",materialColorTexture:"e3",normalMapTexture:"bL",normalMapType:"bM",sceneProperties:"m",viewMatrix:"n"}},q8=l(function(e,r){return{$:2,a:e,b:r}}),_V=l(function(e,r){return hd}),W8=my,Ta=function(e){var r=W8(e);return r===1?ka:r?q8:_V},jK=ae,yV=1029,CV=function(e){return{$:5,a:e}},G8=function(e){var r=e;return CV(r)},Pc=G8(yV),PV=1028,Sc=G8(PV),ur=S(function(e,r,a){return r===1?e?n(F,Pc,a):n(F,Sc,a):a}),N8=hy,Zt=sy,ma=function(e){var r=N8(e),a=r.u2,t=r.O,o=r.pH,c=r.pF;return C(Zt,c*a,o*a,t*a,a)},Mi=C(Zt,0,0,0,0),SV=Be(function(e,r,a,t,o,c,i,u){if(e.$){var v=e.a,d=e.b;return s(Ta,v,c,Be(function(b,h,g,_,y,x,L,k){var A=L.a,V=L.b;return I(Je,s(ur,_,u,k),f0,zi,i,{by:r,bC:a,eq:ma(v),af:V,gi:A.gi,hZ:A.hZ,h_:A.h_,h$:A.h$,e3:d,j:g,k:h,bL:t,bM:o,l:x,m:b,n:y})}))}else{var $=e.a;return n(ka,c,Be(function(b,h,g,_,y,x,L,k){var A=L.a,V=L.b;return I(Je,s(ur,_,u,k),f0,zi,i,{by:r,bC:a,eq:Mi,af:V,gi:A.gi,hZ:A.hZ,h_:A.h_,h$:A.h$,e3:$,j:g,k:h,bL:t,bM:o,l:x,m:b,n:y})}))}}),Di={src:`
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
    `,attributes:{},uniforms:{ambientOcclusionTexture:"by",baseColorTexture:"ei",constantAmbientOcclusion:"bC",constantBaseColor:"eo",constantMetallic:"er",constantRoughness:"es",enabledLights:"af",lights12:"gi",lights34:"hZ",lights56:"h_",lights78:"h$",metallicTexture:"e5",normalMapTexture:"bL",normalMapType:"bM",roughnessTexture:"fg",sceneProperties:"m",viewMatrix:"n"}},xV=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){return function(d){return function(b){if(e.$){var g=e.a,_=e.b;return s(Ta,g,v,Be(function(y,x,L,k,A,V,E,G){var J=E.a,te=E.b;return I(Je,s(ur,k,b,G),f0,Di,d,{by:c,ei:_,bC:i,eo:ma(g),er:o,es:a,af:te,gi:J.gi,hZ:J.hZ,h_:J.h_,h$:J.h$,e5:t,j:L,k:x,bL:u,bM:$,l:V,fg:r,m:y,n:A})}))}else{var h=e.a;return n(ka,v,Be(function(y,x,L,k,A,V,E,G){var J=E.a,te=E.b;return I(Je,s(ur,k,b,G),f0,Di,d,{by:c,ei:h,bC:i,eo:Mi,er:o,es:a,af:te,gi:J.gi,hZ:J.hZ,h_:J.h_,h$:J.h$,e5:t,j:L,k:x,bL:u,bM:$,l:V,fg:r,m:y,n:A})}))}}}}}}}}}}}}},Z8={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"hl"}},J8={src:`
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
    `,attributes:{position:"tB",uv:"gZ"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},kd=q(function(e,r,a,t){return n(ka,r,Be(function(o,c,i,u,$,v,d,b){return I(Je,s(ur,u,t,b),J8,Z8,a,{hl:e,j:i,k:c,l:v,m:o,n:$})}))}),Td={src:`
        precision lowp float;
        
        uniform lowp vec4 constantColor;
        
        void main () {
            gl_FragColor = constantColor;
        }
    `,attributes:{},uniforms:{constantColor:"ep"}},Y8={src:`
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
    `,attributes:{position:"tB"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},Jt=q(function(e,r,a,t){return s(Ta,e,r,Be(function(o,c,i,u,$,v,d,b){return I(Je,s(ur,u,t,b),Y8,Td,a,{ep:ma(e),j:i,k:c,l:v,m:o,n:$})}))}),K8=l(function(e,r){return{$:4,a:e,b:r}}),jV={src:`
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
    `,attributes:{},uniforms:{constantColor:"ep",pointRadius:"$9",sceneProperties:"m"}},X8={src:`
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
    `,attributes:{position:"tB"},uniforms:{modelMatrix:"j",modelScale:"k",pointRadius:"$9",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},wV=q(function(e,r,a,t){return n(K8,a,Be(function(o,c,i,u,$,v,d,b){return I(Je,b,X8,jV,t,{ep:ma(e),j:i,k:c,$9:r,l:v,m:o,n:$})}))}),Ld={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eB",sceneProperties:"m"}},Hi=function(e){var r=e;return r},$0=_y,Yt=Te(function(e,r,a,t,o){return n(ka,a,Be(function(c,i,u,$,v,d,b,h){return I(Je,s(ur,$,o,h),Y8,Ld,t,{eB:n($0,Hi(r),e),j:u,k:i,l:d,m:c,n:v})}))}),kV={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"eB",pointRadius:"$9",sceneProperties:"m"}},TV=Te(function(e,r,a,t,o){return n(K8,t,Be(function(c,i,u,$,v,d,b,h){return I(Je,h,X8,kV,o,{eB:n($0,Hi(r),e),j:u,k:i,$9:a,l:d,m:c,n:v})}))}),zd={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"ef",enabledLights:"af",lights12:"gi",lights34:"hZ",lights56:"h_",lights78:"h$",materialColor:"j4",sceneProperties:"m",viewMatrix:"n"}},Q8={src:`
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
    `,attributes:{normal:"ag",position:"tB"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},l0=Te(function(e,r,a,t,o){return s(Ta,e,a,Be(function(c,i,u,$,v,d,b,h){var g=b.a,_=b.b;return I(Je,s(ur,$,o,h),Q8,zd,t,{ef:r,af:_,gi:g.gi,hZ:g.hZ,h_:g.h_,h$:g.h$,j4:ma(e),j:u,k:i,l:d,m:c,n:v})}))}),Md={src:`
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
    `,attributes:{},uniforms:{ambientOcclusion:"ef",baseColor:"p2",enabledLights:"af",lights12:"gi",lights34:"hZ",lights56:"h_",lights78:"h$",metallic:"h5",roughness:"iw",sceneProperties:"m",viewMatrix:"n"}},v0=ro(function(e,r,a,t,o,c,i){return s(Ta,e,o,Be(function(u,$,v,d,b,h,g,_){var y=g.a,x=g.b;return I(Je,s(ur,d,i,_),Q8,Md,c,{ef:t,p2:ma(e),af:x,gi:y.gi,hZ:y.hZ,h_:y.h_,h$:y.h$,h5:a,j:v,k:$,l:h,iw:r,m:u,n:b})}))}),LV=l(function(e,r){return{$:0,a:e,b:r}}),Dd=S(function(e,r,a){return{$:1,a:e,b:r,c:a}}),Fi=l(function(e,r){return{$:1,a:e,b:r}}),e9=function(e){return{$:0,a:e}},Rr=iy,Hd=function(e){return n(Rr,e,1)},s0=n(Rr,0,0),La=l(function(e,r){if(r.$){var t=r.a.X;return p(t,s0)}else{var a=r.a;return p(e,Hd(a))}}),xc=l(function(e,r){if(r.$){var a=r.a.rx,t=r.a.X;return p(t,(function(){return a?-1:1})())}else return p(e,0)}),Fd=S(function(e,r,a){var t=R(e,r,a);if(t.a.$===1){var o=t.a.a.X;return s(Dd,e9(o),n(La,o,r),n(xc,o,a))}else if(t.b.$){var c=t.a.a,o=t.b.a.X;return s(Dd,n(Fi,c,o),n(La,o,r),n(xc,o,a))}else if(t.c.$){var c=t.a.a,o=t.c.a.X;return s(Dd,n(Fi,c,o),n(La,o,r),n(xc,o,a))}else{var c=t.a.a,i=t.b.a,u=t.c;return n(LV,c,i)}}),zV=q(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),gf=Te(function(e,r,a,t,o){return{$:1,a:e,b:r,c:a,d:t,e:o}}),MV=Te(function(e,r,a,t,o){return{$:0,a:e,b:r,c:a,d:t,e:o}}),Ad=Te(function(e,r,a,t,o){var c=I(MV,e,r,a,t,o);if(c.a.$===1){var i=c.a.a.X;return I(gf,e9(i),n(La,i,r),n(La,i,a),n(La,i,t),n(xc,i,o))}else if(c.b.$){var u=c.a.a,i=c.b.a.X;return I(gf,n(Fi,u,i),p(i,s0),n(La,i,a),n(La,i,t),n(xc,i,o))}else if(c.c.$){var u=c.a.a,i=c.c.a.X;return I(gf,n(Fi,u,i),n(La,i,r),p(i,s0),n(La,i,t),n(xc,i,o))}else if(c.d.$){var u=c.a.a,i=c.d.a.X;return I(gf,n(Fi,u,i),n(La,i,r),n(La,i,a),p(i,s0),n(xc,i,o))}else if(c.e.$){var u=c.a.a,i=c.e.a.X;return I(gf,n(Fi,u,i),n(La,i,r),n(La,i,a),n(La,i,t),p(i,1))}else{var u=c.a.a,$=c.b.a,v=c.c.a,d=c.d.a,b=c.e;return C(zV,u,$,v,d)}}),r9={src:`
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
    `,attributes:{},uniforms:{backlight:"jb",colorTexture:"hl",sceneProperties:"m"}},Bd=Te(function(e,r,a,t,o){return n(ka,a,Be(function(c,i,u,$,v,d,b,h){return I(Je,s(ur,$,o,h),J8,r9,t,{jb:Hi(r),hl:e,j:u,k:i,l:d,m:c,n:v})}))}),d0={src:`
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
    `,attributes:{normal:"ag",position:"tB",uv:"gZ"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",viewMatrix:"n"}},DV=Vr(function(e,r,a,t,o,c){if(e.$){var u=e.a,$=e.b;return s(Ta,u,t,Be(function(v,d,b,h,g,_,y,x){var L=y.a,k=y.b;return I(Je,s(ur,h,c,x),d0,zi,o,{by:r,bC:a,eq:ma(u),af:k,gi:L.gi,hZ:L.hZ,h_:L.h_,h$:L.h$,e3:$,j:b,k:d,bL:$,bM:0,l:_,m:v,n:g})}))}else{var i=e.a;return n(ka,t,Be(function(v,d,b,h,g,_,y,x){var L=y.a,k=y.b;return I(Je,s(ur,h,c,x),d0,zi,o,{by:r,bC:a,eq:Mi,af:k,gi:L.gi,hZ:L.hZ,h_:L.h_,h$:L.h$,e3:i,j:b,k:d,bL:i,bM:0,l:_,m:v,n:g})}))}}),HV=Be(function(e,r,a,t,o,c,i,u){if(e.$){var v=e.a,d=e.b;return s(Ta,v,c,Be(function(b,h,g,_,y,x,L,k){var A=L.a,V=L.b;return I(Je,s(ur,_,u,k),d0,Di,i,{by:d,ei:d,bC:Hd(1),eo:ma(v),er:o,es:a,af:V,gi:A.gi,hZ:A.hZ,h_:A.h_,h$:A.h$,e5:t,j:g,k:h,bL:d,bM:0,l:x,fg:r,m:b,n:y})}))}else{var $=e.a;return n(ka,c,Be(function(b,h,g,_,y,x,L,k){var A=L.a,V=L.b;return I(Je,s(ur,_,u,k),d0,Di,i,{by:$,ei:$,bC:Hd(1),eo:Mi,er:o,es:a,af:V,gi:A.gi,hZ:A.hZ,h_:A.h_,h$:A.h$,e5:t,j:g,k:h,bL:$,bM:0,l:x,fg:r,m:b,n:y})}))}}),FV=function(e){var r=e,a=r,t=a.nV,o=a.nR,c=a.sG,i=a.sv,u=a.sH,$=a.sw;return{pF:t+.5*(o-t),pH:c+.5*(i-c),O:u+.5*($-u)}},AV=function(e){var r=e;return r.nR},BV=function(e){var r=e;return r.sv},a9=function(e){var r=e;return r.sw},IV=function(e){var r=e;return r.nV},RV=function(e){var r=e;return r.sG},n9=function(e){var r=e;return r.sH},Ai=l(function(e,r){var a=e,t=r;return t-a}),t9=function(e){return R(n(Ai,IV(e),AV(e)),n(Ai,RV(e),BV(e)),n(Ai,n9(e),a9(e)))},Ee=function(e){var r=t9(e),a=r.a,t=r.b,o=r.c;return{qp:gc(FV(e)),rM:a/2,rN:t/2,rO:o/2}},_f=l(function(e,r){switch(e.$){case 0:if(e.b.$){var u=e.a,$=e.b.a.X;switch(r.$){case 0:return ve;case 1:return ve;case 2:return ve;case 3:return ve;case 4:return ve;case 5:var o=r.a,i=r.c,t=r.d;return C(kd,$,Ee(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return C(kd,$,Ee(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return C(kd,$,Ee(o),i,t);case 8:return ve;case 9:return ve;default:return ve}}else{var a=e.b.a;switch(r.$){case 0:return ve;case 1:var o=r.a,i=r.c,t=r.d;return C(Jt,a,Ee(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return C(Jt,a,Ee(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return C(Jt,a,Ee(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return C(Jt,a,Ee(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return C(Jt,a,Ee(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return C(Jt,a,Ee(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return C(Jt,a,Ee(o),i,t);case 8:var o=r.a,i=r.c;return C(Jt,a,Ee(o),i,0);case 9:var o=r.a,i=r.c;return C(Jt,a,Ee(o),i,0);default:var o=r.a,c=r.b,i=r.d;return C(wV,a,c,Ee(o),i)}}case 1:if(e.b.$){var b=e.a,$=e.b.a.X,d=e.c;switch(r.$){case 0:return ve;case 1:return ve;case 2:return ve;case 3:return ve;case 4:return ve;case 5:var o=r.a,i=r.c,t=r.d;return I(Bd,$,d,Ee(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return I(Bd,$,d,Ee(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return I(Bd,$,d,Ee(o),i,t);case 8:return ve;case 9:return ve;default:return ve}}else{var v=e.b.a,d=e.c;switch(r.$){case 0:return ve;case 1:var o=r.a,i=r.c,t=r.d;return I(Yt,v,d,Ee(o),i,t);case 2:var o=r.a,i=r.c,t=r.d;return I(Yt,v,d,Ee(o),i,t);case 3:var o=r.a,i=r.c,t=r.d;return I(Yt,v,d,Ee(o),i,t);case 4:var o=r.a,i=r.c,t=r.d;return I(Yt,v,d,Ee(o),i,t);case 5:var o=r.a,i=r.c,t=r.d;return I(Yt,v,d,Ee(o),i,t);case 6:var o=r.a,i=r.c,t=r.d;return I(Yt,v,d,Ee(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return I(Yt,v,d,Ee(o),i,t);case 8:var o=r.a,i=r.c;return I(Yt,v,d,Ee(o),i,0);case 9:var o=r.a,i=r.c;return I(Yt,v,d,Ee(o),i,0);default:var o=r.a,c=r.b,i=r.d;return I(TV,v,d,c,Ee(o),i)}}case 2:var h=e.a,g=e.b,De=e.c,fr=e.d,_=s(Fd,g,De,fr);if(_.$){var k=_.a,A=_.b,V=A.a,E=A.b,G=_.c,J=G.a,te=G.b;switch(r.$){case 0:return ve;case 1:return ve;case 2:return ve;case 3:return ve;case 4:return ve;case 5:return ve;case 6:var o=r.a,i=r.c,L=r.d;return Sr(DV,k,V,E,Ee(o),i,L);case 7:var o=r.a,i=r.c,L=r.d;return ao(SV,k,V,E,J,te,Ee(o),i,L);case 8:return ve;case 9:return ve;default:return ve}}else{var y=_.a,x=_.b;switch(r.$){case 0:return ve;case 1:return ve;case 2:var o=r.a,i=r.c,L=r.d;return I(l0,y,x,Ee(o),i,L);case 3:return ve;case 4:var o=r.a,i=r.c,L=r.d;return I(l0,y,x,Ee(o),i,L);case 5:return ve;case 6:var o=r.a,i=r.c,L=r.d;return I(l0,y,x,Ee(o),i,L);case 7:var o=r.a,i=r.c,L=r.d;return I(l0,y,x,Ee(o),i,L);case 8:return ve;case 9:return ve;default:return ve}}default:var $e=e.a,pe=e.b,ke=e.c,Fe=e.d,De=e.e,fr=e.f,ce=I(Ad,pe,ke,Fe,De,fr);if(ce.$){var Dr=ce.a,Qe=ce.b,sr=Qe.a,Er=Qe.b,oa=ce.c,Wa=oa.a,tn=oa.b,rt=ce.d,V=rt.a,E=rt.b,_r=ce.e,J=_r.a,te=_r.b;switch(r.$){case 0:return ve;case 1:return ve;case 2:return ve;case 3:return ve;case 4:return ve;case 5:return ve;case 6:var o=r.a,i=r.c,t=r.d;return ao(HV,Dr,sr,Er,Wa,tn,Ee(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return xV(Dr)(sr)(Er)(Wa)(tn)(V)(E)(J)(te)(Ee(o))(i)(t);case 8:return ve;case 9:return ve;default:return ve}}else{var Ue=ce.a,rr=ce.b,ar=ce.c,x=ce.d;switch(r.$){case 0:return ve;case 1:return ve;case 2:var o=r.a,i=r.c,t=r.d;return ua(v0,Ue,rr,ar,x,Ee(o),i,t);case 3:return ve;case 4:var o=r.a,i=r.c,t=r.d;return ua(v0,Ue,rr,ar,x,Ee(o),i,t);case 5:return ve;case 6:var o=r.a,i=r.c,t=r.d;return ua(v0,Ue,rr,ar,x,Ee(o),i,t);case 7:var o=r.a,i=r.c,t=r.d;return ua(v0,Ue,rr,ar,x,Ee(o),i,t);case 8:return ve;case 9:return ve;default:return ve}}}}),yf=function(e){return{$:3,a:e}},o9=l(function(e,r){var a=e.a,t=e.b,o=e.c,c=r.qp;return{qp:{pF:a*c.pF,pH:t*c.pH,O:o*c.O},rM:a*r.rM,rN:t*r.rN,rO:o*r.rO}}),c9=gy,Id=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){var d=e.a,b=e.b,h=e.c,g=N8(t),_=g.u2,y=g.O,x=g.pH,L=g.pF,k=c9({u2:_,pF:L*d,pH:x*b,O:y*h});return ao(r,a,k,o,c,i,u,$,v)}}}}}}}}}},Rd=l(function(e,r){switch(r.$){case 0:return hd;case 6:var a=r.a,t=r.b;return n(_c,a,n(Rd,e,t));case 1:var o=r.a,c=r.b;return n(ka,n(o9,e,o),n(Id,e,c));case 2:var o=r.a,c=r.b;return n(q8,n(o9,e,o),n(Id,e,c));case 4:return r;case 3:var c=r.a;return yf(n(Id,e,c));default:var i=r.a;return U8(n(N,Rd(e),i))}}),b0=l(function(e,r){var a=r;return n(Rd,e,a)}),p0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},wK=ae,Bi=519,kK=ae,i9=7683,u9=7682,za=7680,EV=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){return function(d){return{$:2,a:e,b:r,c:a,d:t,e:o,f:c,g:i,h:u,i:$,j:v,k:d}}}}}}}}}}}},Ed=S(function(e,r,a){var t=e.ls,o=e.j3,c=e.is,i=l(function(v,d){var b=v;return d(b)}),u=l(function(v,d){var b=v;return d(b)}),$=function(v){return n(Pe,i(v.gO),n(Pe,u(v.f$),n(Pe,u(v.g5),u(v.g6))))};return n($,a,n($,r,s(EV,c,o,t)))}),VV=s(Ed,{j3:0,is:0,ls:15},{f$:za,gO:Bi,g5:za,g6:i9},{f$:za,gO:Bi,g5:za,g6:u9}),OV=s(Ed,{j3:0,is:0,ls:15},{f$:za,gO:Bi,g5:za,g6:u9},{f$:za,gO:Bi,g5:za,g6:i9}),m0=l(function(e,r){return e?n(F,OV,r):n(F,VV,r)}),UV={src:`
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
    `,attributes:{normal:"ag",position:"tB"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iG",viewMatrix:"n"}},qV=function(e){if(e.$){var r=e.c;return D(Be(function(a,t,o,c,i,u,$,v){return I(Je,n(m0,c,v),UV,p0,r,{j:o,k:t,l:u,m:a,iG:$,n:i})}))}else return T},jc=function(e){var r=qV(e);if(r.$)return ve;var a=r.a;return yf(a)},WV=q(function(e,r,a,t){var o=n(_f,a,I8),c=(function(){var d=p(e,r);return d.a?d.b?Do(f([o,jc(O8)])):o:d.b?jc(O8):ve})(),i=pV(t),u=i.a,$=i.b,v=i.c;return n(Ql,XE(t),n(b0,R(u,$,v),c))}),GV=l(function(e,r){return C(WV,!0,!0,e,r)}),TK=ae,qa=function(e){var r=e;return Me(r)},Vd=l(function(e,r){var a=e,t=r;return X(t,a)>-1}),Od=l(function(e,r){var a=e,t=r;return a+.5*(t-a)}),NV=wt({pF:-1,pH:0,O:0}),ZV=wt({pF:0,pH:-1,O:0}),f9=wt({pF:0,pH:0,O:-1}),$9=wt({pF:1,pH:0,O:0}),Cf=wt({pF:0,pH:1,O:0}),JV=Vr(function(e,r,a,t,o,c){var i=n(Vd,a,c)?_d:f9,u=n(Vd,r,o)?Cf:ZV,$=n(Vd,e,t)?$9:NV,v=R(qa(n(Ai,e,t)),qa(n(Ai,r,o)),qa(n(Ai,a,c))),d=s(Nt,n(Od,e,t),n(Od,r,o),n(Od,a,c)),b=e0({a0:d,vb:$,vj:u,vp:i});return{pX:b,qX:v}}),YV=l(function(e,r){return Sr(JV,sf(e),df(e),bf(e),sf(r),df(r),bf(r))}),Pr=S(function(e,r,a){return{pF:e,pH:r,O:a}}),l9=l(function(e,r){var a=r.a,t=r.b,o=r.c,c=R(a/2,t/2,o/2),i=c.a,u=c.b,$=c.c;return n(GV,e,n(YV,s(Pr,-i,-u,-$),s(Pr,i,u,$)))}),LK=ae,KV=S(function(e,r,a){return{Q:n(r0,e,r),gh:qa(a.gh),tG:qa(a.tG)}}),XV=function(e){var r=e;return r.Q},QV=l(function(e,r){var a=mf(e),t=pf(e),o=mf(r),c=Br(o),i=l(function(v,d){var b=v.a,h=v.b,g=v.c;return n(F,R(b+c,h+c,g+c),d)}),u=pf(r),$=s(me,i,u,t);return{aH:$,lp:n(x6,o,a)}}),h0={aH:P,lp:ou},v9=function(e){var r=e;return{aH:Ve(r.aH),lp:r.lp}},Ud=function(e){if(e.b){var r=e.a,a=e.b;return v9(s(me,QV,v9(r),a))}else return h0},eO=l(function(e,r){var a=e.ag,t=e.tB;return n(F,{ag:t0(a),tB:kt(t)},r)}),s9=fy,d9=$y,b9=ly,rO=ro(function(e,r,a,t,o,c,i){e:for(;;)if(i.b){var u=i.a,$=i.b,v=b9(u.tB),d=d9(u.tB),b=s9(u.tB),h=n(Ge,e,b),g=n(Le,r,b),_=n(Ge,a,d),y=n(Le,t,d),x=n(Ge,o,v),L=n(Le,c,v),k=$;e=h,r=g,a=_,t=y,o=x,c=L,i=k;continue e}else return M8({nR:r,sv:t,sw:c,nV:e,sG:a,sH:o})}),p9=l(function(e,r){var a=b9(e.tB),t=d9(e.tB),o=s9(e.tB);return ua(rO,o,o,t,t,a,a,r)}),m9=function(e){var r=s(Zf,eO,P,mf(e));if(r.b){var a=r.a,t=r.b,o=n(Li,r,pf(e)),c=n(p9,a,t);return C(L8,c,e,o,0)}else return Cd},aO=Te(function(e,r,a,t,o){e:for(;;){var c=t(r/a),i=n(F,c,o);if(ee(r,e))return i;var u=e,$=r-1,v=a,d=t,b=i;e=u,r=$,a=v,t=d,o=b;continue e}}),g0=l(function(e,r){return e<1?P:I(aO,0,e-1,e,r,P)}),_0=l(function(e,r){var a=xr(r);return a>=2?{aH:n(N,function(t){return ee(t,a-1)?R(0,a,1):R(0,1+t,2+t)},n(Na,0,a-1)),lp:ko(n(F,e,r))}:h0}),nO=Vr(function(e,r,a,t,o,c){e:for(;;){var i=n(Qr,r,t+1),u=r*n(Qr,a,o+1),$=r*o,v=u+i,d=$+i,b=u+t,h=$+t,g=R(h,d,v),_=R(h,v,b),y=n(F,g,n(F,_,c));if(t>0){var x=e,L=r,k=a,A=t-1,V=o,E=y;e=x,r=L,a=k,t=A,o=V,c=E;continue e}else if(o>0){var x=e,L=r,k=a,A=e-1,V=o-1,E=y;e=x,r=L,a=k,t=A,o=V,c=E;continue e}else return y}}),h9=Te(function(e,r,a,t,o){return a<=1||t<=1?h0:{aH:Sr(nO,e,a,t,e-1,r-1,P),lp:n(Kf,a*t,function(c){return n(o,n(Qr,a,c),c/a|0)})}}),tO=S(function(e,r,a){return I(h9,e,r,e+1,r,a)}),g9=Te(function(e,r,a,t,o){return n(a,t/e,o/r)}),oO=S(function(e,r,a){return s(tO,e,r,s(g9,e,r,a))}),Lt=function(e){return e},wc=function(e){return e},_9=(function(){var e=s(oO,1,72,l(function(u,$){var v=2*na*$,d=Oa(v),b=Va(v);return{ag:wc({pF:b,pH:-d,O:0}),tB:Lt({pF:b,pH:-d,O:u-.5})}})),r=wc({pF:0,pH:0,O:1}),a={ag:r,tB:Lt({pF:0,pH:0,O:.5})},t=n(_0,a,n(g0,72,function(u){var $=2*na*u;return{ag:r,tB:Lt({pF:Va($),pH:Oa($),O:.5})}})),o=wc({pF:0,pH:0,O:-1}),c={ag:o,tB:Lt({pF:0,pH:0,O:-.5})},i=n(_0,c,n(g0,72,function(u){var $=2*na*u;return{ag:o,tB:Lt({pF:Va($),pH:-Oa($),O:-.5})}}));return n0(m9(Ud(f([t,i,e]))))})(),y9=u0(_9),cO=function(e){var r=e,a=Me(r.O),t=Me(r.pH),o=Me(r.pF);if(X(o,t)<1)if(X(o,a)<1){var c=ta(r.O*r.O+r.pH*r.pH);return{pF:0,pH:-r.O/c,O:r.pH/c}}else{var c=ta(r.pH*r.pH+r.pF*r.pF);return{pF:-r.pH/c,pH:r.pF/c,O:0}}else if(X(t,a)<1){var c=ta(r.O*r.O+r.pF*r.pF);return{pF:r.O/c,pH:0,O:-r.pF/c}}else{var c=ta(r.pF*r.pF+r.pH*r.pH);return{pF:-r.pH/c,pH:r.pF/c,O:0}}},qd=function(e){var r=cO(e),a=r,t=a,o=e,c=o,i={pF:c.pH*t.O-c.O*t.pH,pH:c.O*t.pF-c.pF*t.O,O:c.pF*t.pH-c.pH*t.pF};return p(r,i)},C9=function(e){var r=y8(e),a=qd(r),t=a.a,o=a.b;return e0({a0:C8(e),vb:t,vj:o,vp:r})},iO=function(e){var r=e;return r.gh},uO=function(e){var r=e;return r.tG},fO=q(function(e,r,a,t){var o=C9(XV(t)),c=n(_f,a,_9),i=(function(){var b=p(e,r);return b.a?b.b?Do(f([c,jc(y9)])):c:b.b?jc(y9):ve})(),u=uO(t),$=u,v=iO(t),d=v;return n(Ql,o,n(b0,R($,$,d),i))}),$O=l(function(e,r){return C(fO,!0,!0,e,r)}),Wd=S(function(e,r,a){return n($O,e,s(KV,Yn,Cf,{gh:nn(a),tG:nn(r)}))}),Gd=function(e){return Do(e)},Ii=Gd,Nd=function(e){var r=e.a,a=e.b,t=e.c;return w8(s(S8,r,a,t))},Zd=function(e){return Nd(R(0,e,0))},lO=function(e){var r=e;return r.qp},vO=function(e){var r=e;return r.tG},sO=function(e){var r=e;return r},dO=l(function(e,r){var a=e.uy,t=e.gN,o=e.gZ,c=e.ag,i=e.tB,u=sO(t),$=a?-1:1,v=o,d=v.a,b=v.b,h={ag:t0(c),tB:kt(i),gN:c9({u2:$,pF:u.pF,pH:u.pH,O:u.O}),gZ:n(Rr,d,b)};return n(F,h,r)}),bO=function(e){var r=s(Zf,dO,P,mf(e));if(r.b){var a=r.a,t=r.b,o=n(Li,r,pf(e)),c=n(p9,a,t);return C(z8,c,e,o,0)}else return Cd},pO=S(function(e,r,a){return I(h9,e,r,e+1,r+1,a)}),mO=S(function(e,r,a){return s(pO,e,r,s(g9,e,r,a))}),hO=n0(bO(s(mO,72,72,l(function(e,r){var a=2*na*e,t=Oa(a),o=-na/2+na*r,c=Oa(o),i=Va(a),u=Va(o),$={pF:u*i,pH:u*t,O:c};return{ag:wc($),tB:Lt($),gN:wc({pF:-t,pH:i,O:0}),uy:!0,gZ:p(e,r)}})))),y0=72,C0=2*y0,gO=l(function(e,r){e:for(;;){var a=C0+1,t=n(Qr,C0,2*e+3),o=n(Qr,C0,2*e+2),c=2*e+1,i=2*e,u=C0,$=n(F,R(u,i,o),n(F,R(i,t,o),n(F,R(i,c,t),n(F,R(c,a,t),r))));if(e){var v=e-1,d=$;e=v,r=d;continue e}else return $}}),_O=S(function(e,r,a){return a<=.5?e+a*(r-e):r+(1-a)*(e-r)}),yO=l(function(e,r){e:for(;;){var a=s(_O,0,2*na,e/y0),t={ha:a,ib:0,iq:1},o={ha:a,ib:1,iq:1},c=n(F,t,n(F,o,r));if(e){var i=e-1,u=c;e=i,r=u;continue e}else return c}}),CO=(function(){var e=n(yO,y0-1,f([{ha:0,ib:0,iq:0},{ha:0,ib:1,iq:0}])),r=n(gO,y0-1,P);return n(Li,e,r)})(),PO={src:`
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
    `,attributes:{angle:"ha",offsetScale:"ib",radiusScale:"iq"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iG",viewMatrix:"n"}},P9=function(e){return yf(Be(function(r,a,t,o,c,i,u,$){return I(Je,n(m0,!0,$),PO,p0,CO,{j:t,k:a,l:i,m:r,iG:u,n:c})}))},SO=q(function(e,r,a,t){var o=n(_f,a,hO),c=(function(){var $=p(e,r);return $.a?$.b?Do(f([o,P9(t)])):o:$.b?P9(t):ve})(),i=vO(t),u=i;return n(j8,n(o0,Yn,lO(t)),n(b0,R(u,u,u),c))}),xO=l(function(e,r){return C(SO,!0,!0,e,r)}),Jd=S(function(e,r,a){return{$:1,a:e,b:r,c:a}}),S9=q(function(e,r,a,t){return{$:2,a:e,b:r,c:a,d:t}}),Yd=Vr(function(e,r,a,t,o,c){return{$:3,a:e,b:r,c:a,d:t,e:o,f:c}}),Kd=l(function(e,r){return{$:0,a:e,b:r}}),jO=function(e){switch(e.$){case 0:var a=e.a,t=e.b;return n(Kd,a,t);case 1:var a=e.a,t=e.b,r=e.c;return s(Jd,a,t,r);case 2:var a=e.a,t=e.b,i=e.c,u=e.d;return C(S9,a,t,i,u);default:var a=e.a,t=e.b,o=e.c,c=e.d,i=e.e,u=e.f;return Sr(Yd,a,t,o,c,i,u)}},wO=jO,kO=l(function(e,r){return n(xO,wO(e),r)}),zK=ae,TO=l(function(e,r){return{qp:r,tG:qa(e)}}),Xd=l(function(e,r){return n(kO,e,n(TO,nn(r),Yn))}),MK=ae,Pf=function(e){return e},DK=ae,Qd=function(e){return s(er,0,1,e<=.04045?e/12.92:n(va,(e+.055)/1.055,2.4))},Sf=function(e){var r=Ts(e),a=r.aT,t=r.p6,o=r.rK,c=r.tK;return C(Zt,Qd(c),Qd(o),Qd(t),a)},x9=q(function(e,r,a,t){return{$:0,a:e,b:r,c:a,d:t}}),xf=dy,jf=by,wf=py,LO=function(e){var r=e,a=xf(r),t=jf(r),o=wf(r);return C(x9,.4124*a+.3576*t+.1805*o,.2126*a+.7152*t+.0722*o,.0193*a+.1192*t+.9505*o,W8(r))},zO=function(e){return LO(Sf(e))},j9=function(e){var r=zO(e),a=r.a,t=r.b,o=r.c,c=a+t+o;return Pf({pF:a/c,pH:t/c})},Kt=function(e){return{$:0,a:e}},HK=0,MO=l(function(e,r){var a=e,t=r.pH,o=r.pF;return C(x9,a*o/t,a,a*(1-o-t)/t,1)}),DO=function(e){var r=e.a,a=e.b,t=e.c,o=e.d;return C(Zt,3.2406*r-1.5372*a-.4986*t,-.9689*r+1.8758*a+.0415*t,.0557*r-.204*a+1.057*t,o)},kf=l(function(e,r){return DO(n(MO,e,r))}),HO=l(function(e,r){var a=n(kf,Sd(1),e);return s(Jd,0,Kt(a),r)}),P0=function(e){return e},Ri=function(e){return C(Ls,e.aX,e.a4,e.D,e.aT)},FO=l(function(e,r){return n(HO,j9(Ri(r)),P0(e))}),eb={$:0},AO=function(e){var r=e.h5,a=e.iw,t=e.p2;return Sr(Yd,0,Kt(Sf(t)),Kt(s(er,0,1,a)),Kt(s(er,0,1,r)),Kt(1),eb)},BO=l(function(e,r){var a=e.h5,t=e.iw;return AO({p2:Ri(r),h5:a,iw:t})}),w9=function(e){var r=Ts(e),a=r.aT,t=r.p6,o=r.rK,c=r.tK;return C(Zt,c,o,t,a)},IO=function(e){return n(Kd,0,Kt(w9(e)))},RO=function(e){return IO(Ri(e))},Kn=function(e){var r=e.b6;switch(r.$){case 0:return RO(e.l4);case 1:var a=r.a.h5,t=r.a.iw;return n(BO,{h5:a,iw:t},e.l4);default:var o=r.a.kb;return n(FO,o,e.l4)}},kc=function(e){return Kt(e)},Tf=l(function(e,r){if(r.$){var t=r.a;return Bp(t)}else{var a=r.a;return Kt(e(a))}}),k9=function(e){return n(Kd,0,n(Tf,w9,e))},EO=l(function(e,r){return s(Jd,0,n(Tf,Sf,e),r)}),VO=function(e){var r=e.h5,a=e.iw,t=e.p2;return Sr(Yd,0,n(Tf,Sf,t),n(Tf,n(er,0,1),a),n(Tf,n(er,0,1),r),kc(1),eb)},rb=function(e){return C(Ls,e.aX,e.a4,e.D,e.aT)},Ei=l(function(e,r){var a=(function(){var u=r.b7;if(u.$)return kc(rb(r.l4));if(u.a.$)return n(D$,"[textured-surface] FromAtlas textures in 3D Surface are deferred. Rendering as fallback colour.",kc(rb(r.l4)));var $=u.a.a.bI;return n(oe,kc(rb(r.l4)),n(Ke,$,e.nN))})(),t=r.b6;switch(t.$){case 0:return k9(a);case 1:var o=t.a.h5,c=t.a.iw;return VO({p2:a,h5:kc(o),iw:kc(c)});default:var i=t.a.kb;return n(EO,a,P0(i))}}),OO=S(function(e,r,a){var t=M(e,{b7:T}),o=n(Ei,{nN:Ae},t),c=Kn(t),i=n(Le,0,a-2*r),u=i/2;return Ii(f([s(Wd,c,r,i),n(Zd,u,n(Xd,o,r)),n(Zd,-u,n(Xd,o,r))]))}),UO=function(e){var r=e;return r.Q},T9=(function(){var e={ag:xd,tB:Lt({pF:0,pH:0,O:1})},r=wc({pF:0,pH:0,O:-1}),a=.5*ta(2),t=n(_0,e,n(g0,72,function(i){var u=2*na*i,$=Oa(u),v=Va(u);return{ag:wc({pF:v*a,pH:$*a,O:a}),tB:Lt({pF:v,pH:$,O:0})}})),o={ag:r,tB:Yn},c=n(_0,o,n(g0,72,function(i){var u=2*na*i,$=Oa(u),v=Va(u);return{ag:r,tB:Lt({pF:v,pH:-$,O:0})}}));return n0(m9(Ud(f([c,t]))))})(),L9=u0(T9),qO=function(e){var r=e;return r.gh},WO=function(e){var r=e;return r.tG},GO=q(function(e,r,a,t){var o=C9(UO(t)),c=n(_f,a,T9),i=(function(){var b=p(e,r);return b.a?b.b?Do(f([c,jc(L9)])):c:b.b?jc(L9):ve})(),u=WO(t),$=u,v=qO(t),d=v;return n(Ql,o,n(b0,R($,$,d),i))}),NO=l(function(e,r){return C(GO,!0,!0,e,r)}),FK=ae,ZO=S(function(e,r,a){return{Q:n(r0,e,r),gh:qa(a.gh),tG:qa(a.tG)}}),JO=S(function(e,r,a){var t=a/2;return n(NO,e,s(ZO,s(Pr,0,-t,0),Cf,{gh:nn(a),tG:nn(r)}))}),ab=S(function(e,r,a){return Gd(f([n(_f,e,r),jc(a)]))}),YO=function(e){return e},KO=function(e){return B8(n(N,YO,R8(e)))},XO=l(function(e,r){if(r.b&&r.b.b){var a=r.a,t=r.b,o=t.a,c=t.b;return{aH:n(N,function(i){return R(0,1+i,2+i)},n(Na,0,xr(c))),lp:ko(n(F,e,r))}}else return h0}),QO=function(e){return s(Pr,e.pF,e.pH,e.O)},eU=function(e){var r=n(N,QO,e);if(r.b&&r.b.b&&r.b.b.b){var a=r.a,t=r.b,o=t.a,c=t.b,i=c.a,u=c.b;return D(n(XO,a,n(F,o,n(F,i,u))))}else return T},rU=function(e){var r=n(wr,eU,e);if(r.b){var a=r,t=KO(Ud(a));return D({sy:t,kU:u0(t)})}else return T},Lf=l(function(e,r){var a=rU(f([r]));if(a.$===1)return Ii(P);var t=a.a.kU,o=a.a.sy;return s(ab,e,o,t)}),aU=l(function(e,r){return n(l9,e,R(r,r,r))}),nU=S(function(e,r,a){var t=2*na/e,o=n(N,function(c){return n(d8,t*c,s(gr,0,a,0))},n(Na,0,e-1));return n(Lf,r,o)}),tU=ro(function(e,r,a,t,o,c,i){e:for(;;)if(i.b){var u=i.a,$=i.b,v=u,d=v.O,b=v.pH,h=v.pF,g=n(Ge,h,e),_=n(Le,h,r),y=n(Ge,b,a),x=n(Le,b,t),L=n(Ge,d,o),k=n(Le,d,c),A=$;e=g,r=_,a=y,t=x,o=L,c=k,i=A;continue e}else return{nR:r,sv:t,sw:c,nV:e,sG:a,sH:o}}),oU=l(function(e,r){var a=e,t=a.O,o=a.pH,c=a.pF;return ua(tU,c,c,o,o,t,t,r)}),z9={src:`
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
    `,attributes:{quadVertex:"ip"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b3",sceneProperties:"m",viewMatrix:"n"}},Xn=Py,Qn=q(function(e,r,a,t){var o=Tt(t),c=Tt(a),i=Tt(r),u=Tt(e);return Xn({nw:u.pF,nx:i.pF,ny:c.pF,nz:o.pF,nA:u.pH,nB:i.pH,nC:c.pH,nD:o.pH,nE:u.O,nF:i.O,nG:c.O,nH:o.O,nI:0,nJ:0,nK:0,nL:0})}),M9=l(function(e,r){return{$:0,a:e,b:r}}),cU=M9({mo:1,mZ:0,nY:6}),zt=cU(f([{ip:s(hf,0,0,0)},{ip:s(hf,1,0,1)},{ip:s(hf,1,1,2)},{ip:s(hf,0,1,3)}])),D9={src:`
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
    `,attributes:{quadVertex:"ip"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b3",sceneProperties:"m",viewMatrix:"n"}},S0={src:`
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
    `,attributes:{quadVertex:"ip"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b3",sceneProperties:"m",viewMatrix:"n"}},H9={src:`
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
    `,attributes:{quadVertex:"ip"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b3",sceneProperties:"m",viewMatrix:"n"}},iU=Te(function(e,r,a,t,o){var c=n(oU,r,f([a,t,o])),i=Ee(c);switch(e.$){case 0:if(e.b.$){var $=e.a,v=e.b.a.X;return n(ka,i,Be(function(Xt,at,on,cn,ca,ia,ga,Kr){return I(Je,s(ur,cn,0,Kr),H9,Z8,zt,{hl:v,j:on,k:at,l:ia,b3:C(Qn,r,a,t,o),m:Xt,n:ca})}))}else{var u=e.b.a;return s(Ta,u,i,Be(function(Xt,at,on,cn,ca,ia,ga,Kr){return I(Je,s(ur,cn,0,Kr),z9,Td,zt,{ep:ma(u),j:on,k:at,l:ia,b3:C(Qn,r,a,t,o),m:Xt,n:ca})}))}case 1:if(e.b.$){var h=e.a,v=e.b.a.X,b=e.c;return n(ka,i,Be(function(on,cn,ca,ia,ga,Kr,_a,ya){return I(Je,s(ur,ia,0,ya),H9,r9,zt,{jb:Hi(b),hl:v,j:ca,k:cn,l:Kr,b3:C(Qn,r,a,t,o),m:on,n:ga})}))}else{var d=e.b.a,b=e.c;return n(ka,i,Be(function(Xt,at,on,cn,ca,ia,ga,Kr){return I(Je,s(ur,cn,0,Kr),z9,Ld,zt,{jb:b,eB:n($0,Hi(b),d),j:on,k:at,l:ia,b3:C(Qn,r,a,t,o),m:Xt,n:ca})}))}case 2:var g=e.a,_=e.b,ar=e.c,Dr=e.d,y=s(Fd,_,ar,Dr);if(y.$)if(y.a.$){var $e=y.a,pe=$e.a,ke=$e.b,Fe=y.b,V=Fe.a,E=Fe.b,De=y.c,J=De.a,te=De.b;return s(Ta,pe,i,Be(function(ca,ia,ga,Kr,_a,ya,Qt,Df){var nt=Qt.a,Hf=Qt.b;return I(Je,s(ur,Kr,0,Df),S0,zi,zt,{by:V,bC:E,eq:ma(pe),af:Hf,gi:nt.gi,hZ:nt.hZ,h_:nt.h_,h$:nt.h$,e3:ke,j:ga,k:ia,bL:J,bM:te,l:ya,b3:C(Qn,r,a,t,o),m:ca,n:_a})}))}else{var k=y.a.a,A=y.b,V=A.a,E=A.b,G=y.c,J=G.a,te=G.b;return n(ka,i,Be(function(Xt,at,on,cn,ca,ia,ga,Kr){var _a=ga.a,ya=ga.b;return I(Je,s(ur,cn,0,Kr),S0,zi,zt,{by:V,bC:E,eq:Mi,af:ya,gi:_a.gi,hZ:_a.hZ,h_:_a.h_,h$:_a.h$,e3:k,j:on,k:at,bL:J,bM:te,l:ia,b3:C(Qn,r,a,t,o),m:Xt,n:ca})}))}else{var x=y.a,L=y.b;return s(Ta,x,i,Be(function(Xt,at,on,cn,ca,ia,ga,Kr){var _a=ga.a,ya=ga.b;return I(Je,s(ur,cn,0,Kr),D9,zd,zt,{ef:L,af:ya,gi:_a.gi,hZ:_a.hZ,h_:_a.h_,h$:_a.h$,j4:ma(x),j:on,k:at,l:ia,b3:C(Qn,r,a,t,o),m:Xt,n:ca})}))}default:var fr=e.a,ce=e.b,Ue=e.c,rr=e.d,ar=e.e,Dr=e.f,Qe=I(Ad,ce,Ue,rr,ar,Dr);if(Qe.$)if(Qe.a.$){var Ni=Qe.a,j7=Ni.a,ke=Ni.b,w7=Qe.b,rt=w7.a,_r=w7.b,k7=Qe.c,Lc=k7.a,Dt=k7.b,T7=Qe.d,V=T7.a,E=T7.b,L7=Qe.e,J=L7.a,te=L7.b;return s(Ta,j7,i,Be(function(ya,Qt,Df,nt,Hf,oG,z7,cG){var B0=z7.a,iG=z7.b;return I(Je,s(ur,nt,0,cG),S0,Di,zt,{by:V,ei:ke,bC:E,eo:ma(j7),er:Dt,es:_r,af:iG,gi:B0.gi,hZ:B0.hZ,h_:B0.h_,h$:B0.h$,e5:Lc,j:Df,k:Qt,bL:J,bM:te,l:oG,b3:C(Qn,r,a,t,o),fg:rt,m:ya,n:Hf})}))}else{var Wa=Qe.a.a,tn=Qe.b,rt=tn.a,_r=tn.b,Mt=Qe.c,Lc=Mt.a,Dt=Mt.b,Gi=Qe.d,V=Gi.a,E=Gi.b,A0=Qe.e,J=A0.a,te=A0.b;return n(ka,i,Be(function(ca,ia,ga,Kr,_a,ya,Qt,Df){var nt=Qt.a,Hf=Qt.b;return I(Je,s(ur,Kr,0,Df),S0,Di,zt,{by:V,ei:Wa,bC:E,eo:Mi,er:Dt,es:_r,af:Hf,gi:nt.gi,hZ:nt.hZ,h_:nt.h_,h$:nt.h$,e5:Lc,j:ga,k:ia,bL:J,bM:te,l:ya,b3:C(Qn,r,a,t,o),fg:rt,m:ca,n:_a})}))}else{var sr=Qe.a,Er=Qe.b,oa=Qe.c,L=Qe.d;return s(Ta,sr,i,Be(function(at,on,cn,ca,ia,ga,Kr,_a){var ya=Kr.a,Qt=Kr.b;return I(Je,s(ur,ca,0,_a),D9,Md,zt,{ef:L,p2:ma(sr),af:Qt,gi:ya.gi,hZ:ya.hZ,h_:ya.h_,h$:ya.h$,h5:oa,j:cn,k:on,l:ga,b3:C(Qn,r,a,t,o),iw:Er,m:at,n:ia})}))}}}),uU=(function(){var e=f([{dq:n(Rr,0,1)},{dq:n(Rr,1,1)},{dq:n(Rr,2,1)},{dq:n(Rr,3,1)},{dq:n(Rr,0,-1)},{dq:n(Rr,1,-1)},{dq:n(Rr,2,-1)},{dq:n(Rr,3,-1)}]),r=f([R(0,1,2),R(0,2,3),R(4,6,5),R(4,7,6),R(4,5,1),R(1,0,4),R(5,6,2),R(2,1,5),R(6,7,3),R(3,2,6),R(7,4,0),R(0,3,7)]);return n(Li,e,r)})(),fU={src:`
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
    `,attributes:{quadShadowVertex:"dq"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",quadVertexPositions:"b3",sceneProperties:"m",shadowLight:"iG",viewMatrix:"n"}},F9=q(function(e,r,a,t){return yf(Be(function(o,c,i,u,$,v,d,b){return I(Je,n(m0,u,b),fU,p0,uU,{j:i,k:c,l:v,b3:C(Qn,e,r,a,t),m:o,iG:d,n:$})}))}),$U=ro(function(e,r,a,t,o,c,i){var u=I(iU,a,t,o,c,i),$=p(e,r);return $.a?$.b?Do(f([u,C(F9,t,o,c,i)])):u:$.b?C(F9,t,o,c,i):ve}),x0=Te(function(e,r,a,t,o){return ua($U,!0,!1,e,r,a,t,o)}),lU=S(function(e,r,a){var t=r/2,o=a/2,c=l(function(i,u){return s(Pr,i,u,0)});return I(x0,k9(e),n(c,-t,-o),n(c,t,-o),n(c,t,o),n(c,-t,o))}),nb=function(e){return{$:1,a:e}},vU=function(e){return C(S9,0,Kt(Sf(e)),kc(1),eb)},sU=function(e){return vU(Ri(e))},A9=function(e){return Nd(R(e,0,0))},dU=function(e){return Nd(R(0,0,e))},B9=Cf,bU=n(r0,Yn,B9),pU=l(function(e,r){return s(gd,bU,ki(e),r)}),I9=l(function(e,r){return s(gd,P8,ki(e),r)}),mU=mh,hU=function(e){var r=e.a,a=e.b,t=e.c,o=F6(R(r,a,t));return{pY:n(zs,a,r),r2:mU(t/o),tG:o}},R9=S(function(e,r,a){var t=a.a,o=a.b,c=R(o.pF-t.pF,o.pH-t.pH,o.O-t.O),i=c.a,u=c.b,$=c.c,v=hU(R(i,u,$)),d=v.r2,b=v.pY,h=v.tG;return n(dU,t.O,n(Zd,t.pH,n(A9,t.pF,n(I9,b,n(pU,d-gt(90),n(A9,h/2,n(I9,gt(90),s(Wd,e,r/2,h))))))))}),gU=S(function(e,r,a){var t=l(function(o,c){e:for(;;)switch(o.$){case 0:var i=o.a;return M(c,{fP:D(i)});case 1:var i=o.a,u=c.fP;if(u.$===1)return M(c,{fP:D(i)});var $=u.a;return{g8:n(F,s(R9,sU(e),r,p($,i)),c.g8),fP:D(i)};case 2:var v=o.a.uI,b=nb(v),h=c;o=b,c=h;continue e;case 3:var d=o.a.rf,b=nb(d),h=c;o=b,c=h;continue e;default:var d=o.a.rf,b=nb(d),h=c;o=b,c=h;continue e}});return Ve(s(me,t,{g8:P,fP:T},a).g8)}),_U=S(function(e,r,a){if(r.b){var t=r.a,o=r.b;return Ii(s(w2,l(function(c,i){return n(Lf,e,f([c,i,n(hc,R(0,0,-a),i),n(hc,R(0,0,-a),c)]))}),r,K(o,f([t]))))}else return Ii(P)}),yU=S(function(e,r,a){var t=r/2,o=a/2;return I(x0,e,s(Pr,-t,-o,0),s(Pr,t,-o,0),s(Pr,t,o,0),s(Pr,-t,o,0))}),CU=function(e){var r=e;return!r.$&&r.a.$===1},PU=l(function(e,r){var a=r;if(a.$)return Gd(P);if(a.a.$){var t=a.a.a.kU,o=a.a.a.sy;return s(ab,e.uB,o,t)}else{var t=a.a.a.kU,o=a.a.a.sy;return s(ab,e.uP,o,t)}}),E9={src:`
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
    `,attributes:{triangleVertex:"li"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",triangleVertexPositions:"gV",viewMatrix:"n"}},V9={src:`
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
    `,attributes:{triangleVertex:"li"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",triangleVertexPositions:"gV",viewMatrix:"n"}},zf=function(e){var r=vf(e),a=r.a,t=r.b,o=r.c,c=Tt(a),i=Tt(t),u=Tt(o);return Xn({nw:c.pF,nx:i.pF,ny:u.pF,nz:0,nA:c.pH,nB:i.pH,nC:u.pH,nD:0,nE:c.O,nF:i.O,nG:u.O,nH:0,nI:0,nJ:0,nK:0,nL:0})},j0=A8(f([R({li:0},{li:1},{li:2})])),SU=l(function(e,r){var a=D8(r),t=Ee(a);switch(e.$){case 0:if(e.b.$){var c=e.a,i=e.b.a.X;return ve}else{var o=e.b.a;return s(Ta,o,t,Be(function($e,pe,ke,Fe,De,fr,ce,Ue){return I(Je,s(ur,Fe,0,Ue),E9,Td,j0,{ep:ma(o),j:ke,k:pe,l:fr,m:$e,gV:zf(r),n:De})}))}case 1:if(e.b.$){var v=e.a;return ve}else{var u=e.b.a,$=e.c;return n(ka,t,Be(function($e,pe,ke,Fe,De,fr,ce,Ue){return I(Je,s(ur,Fe,0,Ue),E9,Ld,j0,{eB:n($0,Hi($),u),j:ke,k:pe,l:fr,m:$e,gV:zf(r),n:De})}))}case 2:var d=e.a,b=e.b,A=e.c,V=e.d,h=s(Fd,b,A,V);if(h.$)return ve;var g=h.a,_=h.b;return s(Ta,g,t,Be(function($e,pe,ke,Fe,De,fr,ce,Ue){var rr=ce.a,ar=ce.b;return I(Je,s(ur,Fe,0,Ue),V9,zd,j0,{ef:_,af:ar,gi:rr.gi,hZ:rr.hZ,h_:rr.h_,h$:rr.h$,j4:ma(g),j:ke,k:pe,l:fr,m:$e,gV:zf(r),n:De})}));default:var y=e.a,x=e.b,L=e.c,k=e.d,A=e.e,V=e.f,E=I(Ad,x,L,k,A,V);if(E.$)return ve;var G=E.a,J=E.b,te=E.c,_=E.d;return s(Ta,G,t,Be(function(pe,ke,Fe,De,fr,ce,Ue,rr){var ar=Ue.a,Dr=Ue.b;return I(Je,s(ur,De,0,rr),V9,Md,j0,{ef:_,p2:ma(G),af:Dr,gi:ar.gi,hZ:ar.hZ,h_:ar.h_,h$:ar.h$,h5:te,j:Fe,k:ke,l:ce,iw:J,m:pe,gV:zf(r),n:fr})}))}}),xU=(function(){var e=f([{fq:n(Rr,0,1)},{fq:n(Rr,1,1)},{fq:n(Rr,2,1)},{fq:n(Rr,0,-1)},{fq:n(Rr,1,-1)},{fq:n(Rr,2,-1)}]),r=f([R(0,1,2),R(3,5,4),R(3,4,1),R(3,1,0),R(4,5,2),R(4,2,1),R(5,3,0),R(5,0,2)]);return n(Li,e,r)})(),jU={src:`
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
    `,attributes:{triangleShadowVertex:"fq"},uniforms:{modelMatrix:"j",modelScale:"k",projectionMatrix:"l",sceneProperties:"m",shadowLight:"iG",triangleVertexPositions:"gV",viewMatrix:"n"}},O9=function(e){return yf(Be(function(r,a,t,o,c,i,u,$){return I(Je,n(m0,o,$),jU,p0,xU,{j:t,k:a,l:i,m:r,iG:u,gV:zf(e),n:c})}))},wU=q(function(e,r,a,t){var o=n(SU,a,t),c=p(e,r);return c.a?c.b?Do(f([o,O9(t)])):o:c.b?O9(t):ve}),kU=l(function(e,r){return C(wU,!0,!0,e,r)}),TU=l(function(e,r){var a=r.a,t=r.b,o=r.c;return n(kU,e,s(an,s(Pr,a.pF,a.pH,a.O),s(Pr,t.pF,t.pH,t.O),s(Pr,o.pF,o.pH,o.O)))}),et=S(function(e,r,a){var t=r.b7;return t.$?a:n(D$,"[textured-surface] Textured Surface on "+(e+" is deferred. Rendering as fallback colour."),a)}),LU=l(function(e,r){e:for(;;){var a=r.a,t=r.b,o=function(_r){return D(n(yd,a,_r))};switch(t.$){case 0:var _=t.a.rS,ke=t.a.u5,ce=t.a.F;return o(s(yU,n(Ei,e,ce),ke,_));case 1:var pe=t.a.tG,ce=t.a.F;return o(s(et,"Disc",ce,s(nU,48,Kn(ce),pe)));case 2:var $e=t.a.gh,pe=t.a.tG,ce=t.a.F;return o(s(et,"Capsule",ce,s(OO,ce,pe,$e)));case 3:var y=t.a.lp,ce=t.a.F;if(y.b&&y.b.b&&y.b.b.b&&y.b.b.b.b&&!y.b.b.b.b.b){var c=y.a,i=y.b,u=i.a,$=i.b,v=$.a,d=$.b,b=d.a;return o(I(x0,n(Ei,e,ce),s(Pr,c.pF,c.pH,c.O),s(Pr,u.pF,u.pH,u.O),s(Pr,v.pF,v.pH,v.O),s(Pr,b.pF,b.pH,b.O)))}else return o(s(et,"polygon ("+(Ie(xr(y))+"-vertex)"),ce,n(Lf,Kn(ce),y)));case 10:var h=t.a.gE,ce=t.a.F;return o(s(et,"Cube",ce,n(aU,Kn(ce),h)));case 11:var pe=t.a.tG,ce=t.a.F;return o(n(Xd,n(Ei,e,ce),pe));case 12:var $e=t.a.gh,pe=t.a.tG,ce=t.a.F;return o(s(et,"Cylinder",ce,s(Wd,Kn(ce),pe,$e)));case 13:var g=t.a.qX,ce=t.a.F;return o(s(et,"Block",ce,n(l9,Kn(ce),g)));case 14:var y=t.a.lp,ce=t.a.F;return o(s(et,"Triangle",ce,n(TU,Kn(ce),y)));case 15:var _=t.a.rS,y=t.a.lp,ce=t.a.F,x=n(Ei,e,ce),L=M(ce,{b7:T}),k=_/2,A=n(N,function(_r){return M(_r,{O:_r.O+k})},y),V=Kn(L),E=(function(){if(y.b&&y.b.b&&y.b.b.b&&y.b.b.b.b&&!y.b.b.b.b.b){var _r=y.a,Mt=y.b,Lc=Mt.a,Dt=Mt.b,Gi=Dt.a,A0=Dt.b,Ni=A0.a;return I(x0,x,s(Pr,_r.pF,_r.pH,_r.O+k),s(Pr,Lc.pF,Lc.pH,Lc.O+k),s(Pr,Gi.pF,Gi.pH,Gi.O+k),s(Pr,Ni.pF,Ni.pH,Ni.O+k))}else return s(et,"polygon-with-walls top ("+(Ie(xr(y))+"-vertex)"),ce,n(Lf,V,A))})(),G=s(_U,V,A,_),J=n(N,function(_r){return M(_r,{O:_r.O-k})},y),te=n(Lf,V,Ve(J));return o(Ii(f([E,te,G])));case 16:var $e=t.a.gh,pe=t.a.tG,ce=t.a.F;return o(s(et,"Cone",ce,s(JO,Kn(ce),pe,$e)));case 17:var ke=t.a.u5,Fe=t.a.rf,De=t.a.ds,ce=t.a.F;return o(s(et,"Line",ce,s(R9,Kn(ce),ke,p(De,Fe))));case 18:var fr=t.a.sz,ce=t.a.F;return n(se,function(_r){var Mt=n(PU,{uB:n(Ei,e,ce),uP:Kn(ce)},_r);return n(yd,a,CU(_r)?Mt:s(et,"welded mesh",ce,Mt))},n(Ke,fr,e.dT));case 4:var Ue=t.a.oT,rr=t.a.h0,ar=t.a.hH,Dr=t.a.iJ;if(Dr.$)return n(D$,"[LeafPath] fill-only LeafPath in 3D is deferred; no stroke colour set",T);var Qe=Dr.a;return o(Ii(s(gU,Qe,rr,Ue)));case 5:var sr=t.a,Er=sr.is;if(Er.$)return T;var oa=Er.a.bI;return n(se,function(_r){return n(yd,a,s(lU,_r,sr.u5,sr.rS))},n(Ke,oa,e.nN));case 6:var Wa=t.a.r7,tn=e,rt=p(a,Wa);e=tn,r=rt;continue e;case 7:return T;case 8:return T;case 9:return T;case 19:return T;case 20:return T;default:return T}}}),zU=l(function(e,r){return n(wr,LU(e),g8(r))}),tb=function(e){return{$:6,a:e}},MU=function(e){return{$:0,a:e}},DU=function(e){return{$:1,a:e}},HU=function(e){return{$:2,a:e}},ob=l(function(e,r){return n(m8,e.gU,n(b8,e.gA,n(p8,e.gC,r)))}),FU=function(e){return e},Vi=function(e){return e},U9=l(function(e,r){var a=e,t=r,o=t.O-a.O,c=t.pH-a.pH,i=t.pF-a.pF,u=n(Le,Me(i),n(Le,Me(c),Me(o)));if(u){var $=o/u,v=c/u,d=i/u,b=ta(d*d+v*v+$*$);return D({pF:d/b,pH:v/b,O:$/b})}else return T}),AU=l(function(e,r){var a=n(ob,e,r),t=n(ob,e,s(gr,0,0,0)),o=s(gr,a.pF-t.pF,a.pH-t.pH,a.O-t.O);return n(oe,f9,n(U9,Yn,s(Pr,o.pF,o.pH,o.O)))}),BU=function(e){var r=e.a,a=e.b;switch(a.$){case 19:var o=a.a;return D(MU({u:!0,a:tb(Xu(o.l4)),ex:n(AU,r,o.ex),jR:Vi(o.jR)}));case 20:var o=a.a,t=n(ob,r,o.tB);return D(DU({u:!0,a:tb(Xu(o.l4)),jR:FU(o.jR),tB:s(Pr,t.pF,t.pH,t.O)}));case 21:var o=a.a;return D(HU({a:tb(Xu(o.uR)),m3:Vi(o.jR),m4:Vi(o.jR),ft:_d}));default:return T}},IU=function(e){return n(wr,BU,g8(e))},AK=ae,w0=function(e){return e},RU=function(e){return{$:0,a:e}},EU=RU,VU={$:3},OU=VU,UU=q(function(e,r,a,t){return{$:4,a:e,b:r,c:a,d:t}}),qU=UU,WU=function(e){return{$:1,a:e}},GU=WU,NU=function(e){return n(Uf,"height",Ie(e))},ZU=a$,JU=function(e){return{$:2,a:e}},YU=JU,KU=function(e){var r=e.a,a=e.b,t=e.c,o=e.d,c=function(u){return Yr(u*1e3)/1e3},i=function(u){return Yr(u*1e4)/100};return K5(f(["rgba(",Z(i(r)),"%,",Z(i(a)),"%,",Z(i(t)),"%,",Z(c(o)),")"]))},XU=S(function(e,r,a){return s(Yy,e,r,a)}),q9=function(e){var r=e;return r},Ma=C(Zt,1,1,1,1),Mr=S(function(e,r,a){return n(N,function(t){return n(t,r,a)},e)}),QU=function(e){return Xn({nw:e.aj,nx:e.am,ny:e.ap,nz:e.a1,nA:e.ak,nB:e.an,nC:e.aq,nD:e.a2,nE:e.al,nF:e.ao,nG:e.ar,nH:e.a3,nI:0,nJ:0,nK:0,nL:1})},k0=Te(function(e,r,a,t,o){var c=t.ne?1:-1,i=C(Zt,t.gC,t.gC,t.gC,c);return Sr(o,e,i,QU(t),t.ne,r,a)}),W9=Vr(function(e,r,a,t,o,c){e:for(;;)switch(o.$){case 0:return c;case 6:var i=o.a,u=o.b,$=e,v=r,d=a,b=n(_8,i,t),h=u,g=c;e=$,r=v,a=d,t=b,o=h,c=g;continue e;case 1:var _=o.b,y=n(F,I(k0,e,r,a,t,_),c.aM);return{aM:y,bn:c.bn,t6:c.t6,P:c.P};case 2:var _=o.b,y=n(F,I(k0,e,r,a,t,_),c.P);return{aM:c.aM,bn:c.bn,t6:c.t6,P:y};case 4:var x=o.b,L=n(F,I(k0,e,r,a,t,x),c.bn);return{aM:c.aM,bn:L,t6:c.t6,P:c.P};case 3:var k=o.a,A=n(F,I(k0,e,r,a,t,k),c.t6);return{aM:c.aM,bn:c.bn,t6:A,P:c.P};default:var V=o.a;return s(me,C(W9,e,r,a,t),c,V)}}),G9=function(e){var r=e;return-r},eq=l(function(e,r){var a=e,t=r;return t+a}),Tc=0,rq=function(e){var r=e,a=n(Le,Me(r.pF),n(Le,Me(r.pH),Me(r.O)));if(a){var t=r.O/a,o=r.pH/a,c=r.pF/a,i=ta(c*c+o*o+t*t);return i*a}else return Tc},aq=S(function(e,r,a){var t=e,o=r,c=a;return{pF:t,pH:o,O:c}}),N9=function(e){var r=t9(e),a=r.a,t=r.b,o=r.c;return rq(s(aq,a,t,o))},nq=l(function(e,r){var a=n(Gt,.99,n(yc,qa(e),G9(a9(r)))),t=n(Gt,1.01,n(eq,N9(r),G9(n9(r))));return p(a,t)}),tq=q(function(e,r,a,t){return{$:4,a:e,b:r,c:a,d:t}}),cb=tq,T0=q(function(e,r,a,t){return{$:1,a:e,b:r,c:a,d:t}}),oq=function(e){var r=e.cm,a=e.cq,t=e.cK;return C(T0,518,t,a,r)},cq=l(function(e,r){return{$:6,a:e,b:r}}),iq=cq,Z9=f([oq({cm:1,cq:0,cK:!1}),C(cb,!1,!1,!1,!1),n(iq,0,1)]),ib=8,J9=15,Oi=7681,uq={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},fq=M9({mo:1,mZ:0,nY:5}),$q=fq(f([{tB:n(Rr,-1,-1)},{tB:n(Rr,1,-1)},{tB:n(Rr,-1,1)},{tB:n(Rr,1,1)}])),lq={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"tB"},uniforms:{}},ub=function(e){return s(Ed,{j3:e.j3,is:e.is,ls:e.ls},{f$:e.f$,gO:e.gO,g5:e.g5,g6:e.g6},{f$:e.f$,gO:e.gO,g5:e.g5,g6:e.g6})},fb=function(e){return I(Je,f([ub(e),C(cb,!1,!1,!1,!1)]),lq,uq,$q,{})},vq=fb({f$:Oi,j3:0,is:ib,gO:Bi,ls:J9,g5:Oi,g6:Oi}),sq=516,Y9=5386,dq=function(e){return n(va,2,e+4)},K9=function(e){return fb({f$:za,j3:J9,is:ib,gO:sq,ls:dq(e),g5:Y9,g6:Y9})},bq=S(function(e,r,a){return Rn(f([s(Mr,e,a,Z9),f([K9(r),vq])]))}),pq=l(function(e,r){return Rn(n(Za,bq(e),r))}),mq=function(e){return function(r){return function(a){return function(t){return function(o){return function(c){return function(i){return function(u){return function($){return function(v){return{$:0,a:e,b:r,c:a,d:t,e:o,f:c,g:i,h:u,i:$,j:v}}}}}}}}}}},hq=function(e){var r=e.aT,a=e.l4,t=e.g7,o=e.i9,c=e.jK,i=e.kK,u=l(function($,v){var d=$.a,b=$.b,h=$.c,g=v.a,_=v.b,y=v.c;return mq(d)(b)(h)(g)(_)(y)(i)(c)(o)(t)});return n(u,a,r)},gq=S(function(e,r,a){return{$:0,a:e,b:r,c:a}}),X9=l(function(e,r){var a=e,t=r;return s(gq,32774,a,t)}),_q=l(function(e,r){return hq({g7:0,aT:n(X9,e,r),i9:0,l4:n(X9,e,r),jK:0,kK:0})}),BK=ae,yq=1,Cq=771,Pq={$:8},Sq=Pq,L0=f([n(_q,yq,Cq),Sq]),xq=function(e){var r=e.cm,a=e.cq,t=e.cK;return C(T0,513,t,a,r)},Q9=xq({cm:1,cq:0,cK:!0}),Ui=n(F,Q9,L0),e7=514,r7=function(e){var r=e.cm,a=e.cq,t=e.cK;return C(T0,515,t,a,r)},a7=240,jq=n(F,r7({cm:1,cq:0,cK:!0}),n(F,ub({f$:za,j3:a7,is:0,gO:e7,ls:0,g5:za,g6:za}),L0)),wq=function(e){var r=e.cm,a=e.cq,t=e.cK;return C(T0,514,t,a,r)},qi=n(F,wq({cm:1,cq:0,cK:!0}),L0),$b=function(e){var r=e;return k8(r.cX)},kq=function(e){return Jl($b(e))},Tq=function(e){return e0({a0:Lt({pF:e.a1,pH:e.a2,O:e.a3}),vb:wt({pF:e.aj,pH:e.ak,O:e.al}),vj:wt({pF:e.am,pH:e.an,O:e.ao}),vp:wt({pF:e.ap,pH:e.aq,O:e.ar})})},lb=l(function(e,r){var a=e,t=r,o=a.vp,c=o,i=a.vj,u=i,$=a.vb,v=$;return{pF:t.pF*v.pF+t.pH*v.pH+t.O*v.O,pH:t.pF*u.pF+t.pH*u.pH+t.O*u.O,O:t.pF*c.pF+t.pH*c.pH+t.O*c.O}}),n7=l(function(e,r){var a=e,t=r,o=a.a0,c=o,i=t.pF-c.pF,u=t.pH-c.pH,$=t.O-c.O,v=a.vp,d=v,b=a.vj,h=b,g=a.vb,_=g;return{pF:i*_.pF+u*_.pH+$*_.O,pH:i*h.pF+u*h.pH+$*h.O,O:i*d.pF+u*d.pH+$*d.O}}),t7=l(function(e,r){return{a0:n(n7,e,Jl(r)),vb:n(lb,e,Yl(r)),vj:n(lb,e,Kl(r)),vp:n(lb,e,lf(r))}}),Lq=l(function(e,r){var a=r,t=a,o=e,c=o;return{nR:n(Le,c.nR,t.nR),sv:n(Le,c.sv,t.sv),sw:n(Le,c.sw,t.sw),nV:n(Ge,c.nV,t.nV),sG:n(Ge,c.sG,t.sG),sH:n(Ge,c.sH,t.sH)}}),zq=l(function(e,r){var a=r,t=a.O,o=a.pH,c=a.pF,i=e,u=i.a,$=i.b,v=i.c,d=Me(u)/2,b=Me($)/2,h=Me(v)/2;return{nR:c+d,sv:o+b,sw:t+h,nV:c-d,sG:o-b,sH:t-h}}),vb=q(function(e,r,a,t){var o=a.qp,c=2*a.rO*r,i=2*a.rN*r,u=2*a.rM*r,$=o.O*r,v=o.pH*r,d=o.pF*r,b=rn(lf(e)),h=Me(u*b.pF)+Me(i*b.pH)+Me(c*b.O),g=rn(Kl(e)),_=Me(u*g.pF)+Me(i*g.pH)+Me(c*g.O),y=rn(Yl(e)),x=Me(u*y.pF)+Me(i*y.pH)+Me(c*y.O),L=n(zq,R(x,_,h),n(n7,e,s(Pr,d,v,$)));if(t.$)return D(L);var k=t.a;return D(n(Lq,k,L))}),sb=q(function(e,r,a,t){e:for(;;)if(t.b){var o=t.a,c=t.b;switch(o.$){case 0:var g=e,_=r,y=a,x=c;e=g,r=_,a=y,t=x;continue e;case 1:var i=o.a,u=C(vb,e,r,i,a),g=e,_=r,y=u,x=c;e=g,r=_,a=y,t=x;continue e;case 2:var i=o.a,u=C(vb,e,r,i,a),g=e,_=r,y=u,x=c;e=g,r=_,a=y,t=x;continue e;case 3:var g=e,_=r,y=a,x=c;e=g,r=_,a=y,t=x;continue e;case 4:var i=o.a,u=C(vb,e,r,i,a),g=e,_=r,y=u,x=c;e=g,r=_,a=y,t=x;continue e;case 5:var $=o.a,g=e,_=r,y=C(sb,e,r,a,$),x=c;e=g,r=_,a=y,t=x;continue e;default:var v=o.a,d=o.b,b=n(t7,Tq(v),e),h=r*v.gC,g=e,_=r,y=C(sb,b,h,a,f([d])),x=c;e=g,r=_,a=y,t=x;continue e}}else return a}),Mq={ne:!0,aj:1,ak:0,al:0,am:0,an:1,ao:0,ap:0,aq:0,ar:1,a1:0,a2:0,a3:0,gC:1},Dq=function(e){var r=e;return r},o7=fb({f$:Oi,j3:0,is:ib,gO:Bi,ls:255,g5:Oi,g6:Oi}),IK=ae,ha={i9:0,u:!1,jK:0,kF:0,kK:0,uM:0,pF:0,pH:0,O:0},Ln=l(function(e,r){var a=e,t=r;return Xn({nw:a.pF,nx:a.kK,ny:t.pF,nz:t.kK,nA:a.pH,nB:a.jK,nC:t.pH,nD:t.jK,nE:a.O,nF:a.i9,nG:t.O,nH:t.i9,nI:a.uM,nJ:a.kF,nK:t.uM,nL:t.kF})}),Mf=p({gi:n(Ln,ha,ha),hZ:n(Ln,ha,ha),h_:n(Ln,ha,ha),h$:n(Ln,ha,ha)},C(Zt,0,0,0,0)),Hq=function(e){var r=e;return r.eG},Fq=function(e){var r=e;return r.mH},c7=function(e){var r=e;return .5*r},Aq=function(e){var r=e;return Ol(r)},i7=function(e){return Aq(c7(Fq(e)))},u7=function(e){var r=e;return 2*r},Bq=function(e){return u7(n(Gt,i7(e),Hq(e)))},Iq=function(e){var r=e;return r.tF},Rq=l(function(e,r){var a=r.pU,t=r.ro,o=r.sU,c=i7(e),i=qa(o),u=i,$=qa(t),v=$,d=Iq(e);if(d){var b=Bq(e),h=b;return Nc(v)?Xn({nw:2/(a*h),nx:0,ny:0,nz:0,nA:0,nB:2/h,nC:0,nD:0,nE:0,nF:0,nG:0,nH:-1,nI:0,nJ:0,nK:0,nL:1}):Xn({nw:2/(a*h),nx:0,ny:0,nz:0,nA:0,nB:2/h,nC:0,nD:0,nE:0,nF:0,nG:-2/(v-u),nH:-(v+u)/(v-u),nI:0,nJ:0,nK:0,nL:1})}else return Nc(v)?Xn({nw:1/(a*c),nx:0,ny:0,nz:0,nA:0,nB:1/c,nC:0,nD:0,nE:0,nF:0,nG:-1,nH:-2*u,nI:0,nJ:0,nK:-1,nL:0}):Xn({nw:1/(a*c),nx:0,ny:0,nz:0,nA:0,nB:1/c,nC:0,nD:0,nE:0,nF:0,nG:-(v+u)/(v-u),nH:-2*v*u/(v-u),nI:0,nJ:0,nK:-1,nL:0})}),Eq=function(e){return n(F,r7({cm:1,cq:0,cK:!0}),n(F,ub({f$:za,j3:a7,is:e,gO:e7,ls:0,g5:za,g6:za}),L0))},z0=l(function(e,r){return(1&e>>r)===1?0:1}),Vq=S(function(e,r,a){return Rn(n(N,function(t){var o=t<<4,c=C(Zt,n(z0,t,0),n(z0,t,1),n(z0,t,2),n(z0,t,3));return s(Mr,e,p(r,c),Eq(o))},n(Na,1,n(va,2,a)-1)))}),Oq=Sy,Uq=$9,qq={a0:Yn,vb:Uq,vj:B9,vp:a0},Wq=function(e){var r=gc(Jl(e)),a=rn(lf(e)),t=rn(Kl(e)),o=rn(Yl(e));return Xn({nw:o.pF,nx:t.pF,ny:a.pF,nz:r.pF,nA:o.pH,nB:t.pH,nC:a.pH,nD:r.pH,nE:o.O,nF:t.O,nG:a.O,nH:r.O,nI:0,nJ:0,nK:0,nL:1})},Gq=l(function(e,r){return Wq(n(t7,$b(r),e))}),Nq=function(e){return n(Gq,qq,e)},Wi=f([Q9,C(cb,!1,!1,!1,!1)]),Zq=function(e){var r=$b(e.cg),a=Do(e.hC),t=a,o=C(sb,r,1,T,f([t]));if(o.$===1)return P;var c=o.a,i=Nq(e.cg),u=(function(){var pe=e.G;switch(pe.$){case 0:return p(0,0);case 1:return p(1,0);case 2:return p(2,0);case 3:var ke=pe.a;return p(3,ke);case 4:var ke=pe.a;return p(4,ke);default:return p(5,0)}})(),$=u.a,v=u.b,d=n(nq,e.cO,c),b=d.a,h=d.b,g=n(Rq,e.cg,{pU:e.pU,ro:h,sU:b}),_=Oq(g).nL,y=_?rn(lf(r)):Tt(kq(e.cg)),x=e.B,L=x,k=n(kf,L,e.H),A=k,V=Xn({nw:0,nx:y.pF,ny:xf(A),nz:e.o6,nA:0,nB:y.pH,nC:jf(A),nD:Dq(N9(c)),nE:0,nF:y.O,nG:wf(A),nH:$,nI:0,nJ:_,nK:0,nL:v}),E=Sr(W9,V,i,g,Mq,t,{aM:P,bn:P,t6:P,P}),G=e.E;switch(G.$){case 0:var J=G.a;return Rn(f([s(Mr,E.aM,p(J,Ma),Ui),s(Mr,E.P,p(J,Ma),n(F,Sc,Wi)),s(Mr,E.P,p(J,Ma),n(F,Sc,qi)),s(Mr,E.P,p(J,Ma),n(F,Pc,Wi)),s(Mr,E.P,p(J,Ma),n(F,Pc,qi)),s(Mr,E.bn,Mf,Ui)]));case 1:var J=G.a;return Rn(f([s(Mr,E.aM,Mf,Ui),f([o7]),s(Mr,E.t6,J.gi,Z9),f([K9(0)]),s(Mr,E.aM,p(J,Ma),jq),s(Mr,E.P,p(J,Ma),n(F,Sc,Wi)),s(Mr,E.P,p(J,Ma),n(F,Sc,qi)),s(Mr,E.P,p(J,Ma),n(F,Pc,Wi)),s(Mr,E.P,p(J,Ma),n(F,Pc,qi)),s(Mr,E.bn,Mf,Ui)]));default:var te=G.a,$e=G.b;return Rn(f([s(Mr,E.aM,p($e,Ma),Ui),f([o7]),n(pq,E.t6,te),s(Vq,E.aM,$e,xr(te)),s(Mr,E.P,p($e,Ma),n(F,Sc,Wi)),s(Mr,E.P,p($e,Ma),n(F,Sc,qi)),s(Mr,E.P,p($e,Ma),n(F,Pc,Wi)),s(Mr,E.P,p($e,Ma),n(F,Pc,qi)),s(Mr,E.bn,Mf,Ui)]))}},Jq=function(e){return n(Uf,"width",Ie(e))},f7=l(function(e,r){var a=f([GU(1),YU(0),EU(!0),C(qU,0,0,0,0)]),t=(function(){var A=e.i2;switch(A.$){case 0:return R(a,"0",1);case 1:return R(n(F,OU,a),"1",1);default:var V=A.a;return R(a,"0",V)}})(),o=t.a,c=t.b,i=t.c,u=e.qX,$=u.a,v=u.b,d=q9(v),b=n(Q,"height",Ie(d)+"px"),h=q9($),g=h/d,_=n(En,function(A){return Zq({pU:g,cg:e.cg,cO:e.cO,hC:A.hC,B:A.B,E:A.E,o6:i,G:A.G,H:A.H})},r),y=n(Q,"width",Ie(h)+"px"),x=e.p_,L=x,k=KU(L);return s(ZU,"div",f([n(Q,"padding","0px"),y,b]),f([p(c,s(XU,o,f([Jq(Yr(h*i)),NU(Yr(d*i)),y,b,n(Q,"display","block"),n(Q,"background-color",k)]),_))]))}),Yq=function(e){return{$:2,a:e}},db=function(e){return Yq(e)},$7=function(e){return n(f7,{i2:db(e.ew),p_:e.p_,cg:e.cg,cO:e.cO,qX:e.qX},f([{hC:e.hC,B:e.B,E:e.E,G:e.G,H:e.H}]))},RK=1,EK=0,Kq=function(e){return{$:0,a:e}},Xq=function(e){return Kq(e)},bb=function(e){return e},Qq=function(e){return{$:1,a:e}},eW=function(e){return Qq(e)},M0=function(e){var r=e,a=n(Le,Me(r.pF),n(Le,Me(r.pH),Me(r.O)));if(a){var t=r.O/a,o=r.pH/a,c=r.pF/a,i=ta(c*c+o*o+t*t);return D({pF:c/i,pH:o/i,O:t/i})}else return T},rW=l(function(e,r){var a=e,t=r,o=t.O-a.O,c=t.pH-a.pH,i=t.pF-a.pF,u=n(Le,Me(i),n(Le,Me(c),Me(o)));if(u){var $=o/u,v=c/u,d=i/u,b=ta(d*d+v*v+$*$);return b*u}else return Tc}),aW=l(function(e,r){var a=e,t=r;return t.pF*a.pF+t.pH*a.pH+t.O*a.O}),l7=l(function(e,r){var a=e,t=r;return X(t,a)>0}),nW=l(function(e,r){var a=e,t=r;return X(t,a)<0}),tW=l(function(e,r){var a=e,t=r;return{pF:t.pF-a.pF,pH:t.pH-a.pH,O:t.O-a.O}}),oW=l(function(e,r){var a=e,t=r,o=t.pF*a.pF+t.pH*a.pH+t.O*a.O;return{pF:a.pF*o,pH:a.pH*o,O:a.O*o}}),cW=function(e){var r=e;return{pF:-r.pF,pH:-r.pH,O:-r.O}},iW=S(function(e,r,a){return n(ea,function(t){var o=n(tW,n(oW,t,r),r);return n(ea,function(c){var i=n(Pd,r,e),u=n(aW,a,i),$=n(l7,Tc,u)?i:n(nW,Tc,u)?cW(i):xd;return n(se,function(v){return R(t,c,v)},M0($))},M0(o))},M0(e))}),uW=function(e){var r=e;return r},VK=ae,pb=ae,OK=ae,fW=l(function(e,r){var a=e,t=r;return n(zs,a,t)}),$W=l(function(e,r){var a=e,t=r;return{pF:a.pH*t.O-a.O*t.pH,pH:a.O*t.pF-a.pF*t.O,O:a.pF*t.pH-a.pH*t.pF}}),v7=function(e){var r=e;return r.vb},s7=function(e){var r=e;return r.vj},lW=function(e){return n($W,v7(e),s7(e))},vW=function(e){var r=e;return r.a0},sW=function(e){return{a0:vW(e),vb:v7(e),vj:s7(e),vp:lW(e)}},dW=function(e){return{eG:e.eG,mH:(function(){var r=e.rz;if(r.$){var t=r.a;return u7(n(fW,c7(t),e.eG))}else{var a=r.a;return a}})(),cX:sW(e.lq),tF:e.tF}},bW=l(function(e,r){var a=qd(r),t=a.a,o=a.b;return pb({a0:e,vb:t,vj:o})}),pW=l(function(e,r){return n(bW,r,e)}),mW=function(e){var r=n(o0,e.rs,e.rl),a=uW(e.ft),t=n(Pd,r,a),o=(function(){var c=s(iW,r,a,t);if(c.$){var d=M0(r);if(d.$){var h=qd(e.ft),g=h.a,_=h.b;return pb({a0:e.rl,vb:_,vj:e.ft})}else{var b=d.a;return n(pW,b,e.rl)}}else{var i=c.a,u=i.a,$=i.b,v=i.c;return pb({a0:e.rl,vb:v,vj:$})}})();return dW({eG:n(rW,e.rl,e.rs),rz:e.rz,tF:e.tF,lq:o})},D0=function(e){return mW({rl:bb(e.rl),rs:bb(e.rs),rz:(function(){var r=e.tF;if(r.$){var t=r.a.u0;return eW(nn(t))}else{var a=r.a.eK;return Xq(ki(a))}})(),tF:(function(){var r=e.tF;return r.$?1:0})(),ft:n(oe,Cf,n(U9,Yn,bb(e.ft)))})},Ho=function(e){return e},hW=function(e){var r=e;return r},mb=function(e){var r=s(er,1667,25e3,hW(e)),a=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(a*a*a)-1.3481102*(a*a)+2.18555832*a-.20219683:r<=4e3?-.9549476*(a*a*a)-1.37418593*(a*a)+2.09137015*a-.16748867:3.081758*(a*a*a)-5.8733867*(a*a)+3.75112997*a-.37001483;return Pf({pF:a,pH:t})},H0=Pf({pF:.31271,pH:.32902}),gW=Pf({pF:.37208,pH:.37529}),_W=Pf({pF:.44757,pH:.40745}),UK=ae,d7=function(e){return e},b7=mb(d7(12e3)),p7=mb(d7(5600)),Fo=function(e){switch(e.$){case 0:return H0;case 1:return p7;case 2:return b7;case 3:return _W;case 4:return gW;case 5:var r=e.a;return mb(r);default:var a=e.a;return j9(a)}},qK=ae,hb=function(e){return P0(1.2*n(va,2,e))},m7=function(e){return qa(e)},yW=function(e){var r=e;return r},CW=function(e){var r=e.ng,a=e.oX,t=e.mx,o=yW(a);return hb(n(Yf,2,100*n(va,t,2)/(o*r)))},PW=function(e){switch(e.$){case 0:var r=e.a;return hb(r);case 1:var a=e.a;return m7(a);default:var t=e.a;return CW({mx:t.mx,ng:t.ng,oX:t.oX})}},SW=l(function(e,r){return{$:2,a:e,b:r}}),h7=function(e){return{$:0,a:e}},F0=function(e){var r=e;return r},xW=function(e){var r=e;return r.u},gb=h7(Mf.a),jW=l(function(e,r){var a=l(function(t,o){var c=o.a,i=o.b;return e(t)?p(n(F,t,c),i):p(c,n(F,t,i))});return s(dn,a,p(P,P),r)}),wW=function(e){var r=e;return Xn({nw:r.pF,nx:r.kK,ny:0,nz:0,nA:r.pH,nB:r.jK,nC:0,nD:0,nE:r.O,nF:r.i9,nG:0,nH:0,nI:r.uM,nJ:r.kF,nK:0,nL:0})},g7=Be(function(e,r,a,t,o,c,i,u){var $=n(jW,xW,f([F0(e),F0(r),F0(a),F0(t)])),v=$.a,d=$.b;if(v.b){var b=K(v,d);if(b.b&&b.b.b&&b.b.b.b&&b.b.b.b.b&&!b.b.b.b.b.b){var h=b.a,g=b.b,_=g.a,y=g.b,x=y.a,L=y.b,k=L.a;return n(SW,n(N,wW,v),{gi:n(Ln,h,_),hZ:n(Ln,x,k),h_:n(Ln,o,c),h$:n(Ln,i,u)})}else return gb}else return h7({gi:n(Ln,e,r),hZ:n(Ln,a,t),h_:n(Ln,o,c),h$:n(Ln,i,u)})}),WK=ae,_b=function(e){return e},yb=l(function(e,r){var a=e,t=rn(r.ex),o=t.O,c=t.pH,i=t.pF,u=n(kf,r.jR,r.a),$=u;return{i9:wf($),u:a,jK:jf($),kF:0,kK:xf($),uM:1,pF:-i,pH:-c,O:-o}}),_7=l(function(e,r){var a=e,t=gc(r.tB),o=t.O,c=t.pH,i=t.pF,u=n(kf,r.jR,r.a),$=u;return{i9:wf($),u:a,jK:jf($),kF:0,kK:xf($),uM:2,pF:i,pH:c,O:o}}),kW=function(e){switch(e.$){case 0:var r=e.a;return n(yb,_b(r.u),{a:Fo(r.a),ex:r.ex,jR:r.jR});case 1:var r=e.a;return n(_7,_b(r.u),{a:Fo(r.a),jR:r.jR,tB:r.tB});default:return ha}},y7=function(e){var r=e;return r},C7=function(e){var r=e;return{pF:-r.pF,pH:-r.pH,O:-r.O}},Cb=function(e){e:for(;;){if(ee(e.m3,Tc)&&ee(e.m4,Tc))return ha;if(n(l7,qa(e.m3),qa(e.m4))){var r={a:e.a,m3:e.m4,m4:e.m3,ft:C7(e.ft)};e=r;continue e}else{var a=Me(y7(e.m4)/na),t=Me(y7(e.m3)/na),o=rn(e.ft),c=o.O,i=o.pH,u=o.pF,$=n(kf,Sd(1),e.a),v=$;return{i9:t*wf(v),u:!1,jK:t*jf(v),kF:a/t,kK:t*xf(v),uM:3,pF:u,pH:i,O:c}}}},TW=function(e){return Cb({a:e.a,m3:e.jR,m4:e.jR,ft:a0})},P7=!1,Pb=function(e){return Cb({a:e.a,m3:e.jR,m4:Tc,ft:e.ft})},LW=function(e){switch(e.$){case 0:var r=e.a;return n(yb,P7,{a:Fo(r.a),ex:r.ex,jR:r.jR});case 1:var r=e.a;return n(_7,P7,{a:Fo(r.a),jR:r.jR,tB:r.tB});case 2:var r=e.a;return Cb({a:Fo(r.a),m3:r.m3,m4:r.m4,ft:r.ft});case 3:var r=e.a;return Pb({a:Fo(r.a),jR:r.jR,ft:r.ft});default:var r=e.a;return TW({a:Fo(r.a),jR:r.jR})}},zW=function(e){var r=ha,a=function(u){switch(u.$){case 0:return!0;case 1:return!0;default:return!1}},t=n(N,LW,n(vt,4,n(Fr,n(cr,Ov,a),e))),o=function(u){return n(oe,r,jr(n(lt,u,t)))},c=n(N,kW,n(vt,4,n(Fr,a,e))),i=function(u){return n(oe,r,jr(n(lt,u,c)))};return nr(c)&&nr(t)?gb:ao(g7,i(0),i(1),i(2),i(3),o(0),o(1),o(2),o(3))},MW={$:5},DW=MW,HW={$:0},Sb=HW,FW=function(e){return{$:4,a:e}},AW={$:2},BW=function(e){return Nc(e)?AW:FW(e)},IW=function(e){return{$:3,a:e}},RW={$:1},EW=function(e){return Nc(e)?RW:IW(e)},VW=function(e){switch(e.$){case 0:return Sb;case 1:var r=e.a;return EW(r);case 2:var r=e.a;return BW(r);default:return DW}},S7=l(function(e,r){return $7({p_:w0(e.A),cg:D0(e.cg),cO:nn(e.cO),ew:e.ew,qX:p(Ho(Yr(e.bT.u5)),Ho(Yr(e.bT.rS))),hC:r,B:PW(e.B),E:zW(e.E),G:VW(e.G),H:Fo(e.H)})}),OW=l(function(e,r){return $7({p_:w0(e.fF.A),cg:D0(e.cg),cO:nn(e.cO),ew:e.ew,qX:p(Ho(Yr(e.bT.u5)),Ho(Yr(e.bT.rS))),hC:r,B:e.fF.B,E:e.fF.E,G:e.fF.G,H:e.fF.H})}),UW=.005,qW=l(function(e,r){return n(S7,{A:e.gw.A,cg:e.cg,cO:e.cO,ew:e.ew,B:e.gw.B,E:e.gw.E,bT:e.bT,G:e.gw.G,H:e.gw.H},r)}),WW=function(e){return nn(.01*e)},x7=function(e){return n(f7,{i2:e.i2,p_:e.p_,cg:e.cg,cO:e.cO,qX:e.qX},f([{hC:e.hC,B:e.B,E:e.E,G:e.G,H:e.H}]))},GW=S(function(e,r,a){return ao(g7,e,r,a,ha,ha,ha,ha,ha)}),NW=function(e){var r=n(yb,_b(e.t6),{a:p7,ex:e.uu,jR:Vi(8e4)}),a=Pb({a:b7,jR:Vi(2e4),ft:e.ft}),t=Pb({a:H0,jR:Vi(15e3),ft:C7(e.ft)}),o=s(GW,r,a,t);return x7({i2:db(e.ew),p_:e.p_,cg:e.cg,cO:e.cO,qX:e.qX,hC:e.hC,B:hb(15),E:o,G:Sb,H:H0})},ZW=l(function(e,r){var a=e,t=r,o=Va(t);return{pF:o*Va(a),pH:o*Oa(a),O:Oa(t)}}),JW=l(function(e,r){return NW({p_:w0(Ri(e.A)),cg:D0(e.cg),cO:WW(.5),ew:e.ew,qX:p(Ho(Yr(e.bT.u5)),Ho(Yr(e.bT.rS))),hC:r,t6:!0,uu:n(ZW,ki(e.ut),ki(e.uv)),ft:a0})}),YW=function(e){return x7({i2:db(e.ew),p_:e.p_,cg:e.cg,cO:e.cO,qX:e.qX,hC:e.hC,B:m7(P0(80)),E:gb,G:Sb,H:H0})},KW=l(function(e,r){return YW({p_:w0(Ri(e.p_)),cg:D0(e.cg),cO:nn(e.cO),ew:e.ew,qX:p(Ho(Yr(e.bT.u5)),Ho(Yr(e.bT.rS))),hC:r})}),XW=l(function(e,r){switch(r.$){case 0:var t=r.a;return n(JW,{A:t.p_,cg:e.cg,ew:e.bT.ew,bT:e.bT,ut:t.ut,uv:t.uv},e.hC);case 1:var t=r.a;return n(KW,{p_:t.p_,cg:e.cg,cO:UW,ew:e.bT.ew,bT:e.bT},e.hC);case 2:var t=r.a;return n(S7,{A:Xu(t.p_),cg:e.cg,cO:t.cO,ew:e.bT.ew,B:t.B,E:K(t.E,e.ps),bT:e.bT,G:t.G,H:t.H},e.hC);case 3:var t=r.a,a=t.gw;return n(qW,{cg:e.cg,cO:t.cO,ew:e.bT.ew,gw:M(a,{E:K(a.E,e.ps)}),bT:e.bT},e.hC);default:var t=r.a;return n(OW,{fF:t.fF,cg:e.cg,cO:t.cO,ew:e.bT.ew,bT:e.bT},e.hC)}}),QW=l(function(e,r){var a=IU(r),t=n(zU,{nN:e.nN,dT:e.dT},r);return n(Mm,Oo,n(XW,{cg:e.cg,hC:t,bT:e.bT,ps:a},e.no))}),eG=function(e){return{$:0,a:e}},rG=function(e){return eG(e)},aG=l(function(e,r){return vE(n(QW,{cg:r.cg,no:rG({p_:n(Gl,r8(r.tl).p_,r.dd),ut:gt(225),uv:gt(315)}),nN:e.nN,dT:Ae,bT:W6(e)},s8(f([n(lE,e,r)]))))}),nG=S(function(e,r,a){return n(O,P,f([Tm(r),n(O,f([bt(L6),B(f([tr(Ct),_e(Ze(100)),Ce(Ze(100)),n(z,"touch-action","none")]))]),f([n(ac,Oo,n(aG,e,a))]))]))}),tG=tF({lu:P,aE:S(function(e,r,a){return P}),bH:cF,b1:ZF,aK:QF,bk:HB,bl:YI,cu:NR,aC:XR,bt:nG});Zg({TrixelEditor:{Main:{init:tG(n(H,function(e){return re({g:e})},n(j,"inputs",n(H,function(e){return n(H,function(r){return n(H,function(a){return n(H,function(t){return n(H,function(o){return n(H,function(c){return n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(_){return n(H,function(y){return n(H,function(x){return n(H,function(L){return n(H,function(k){return n(H,function(A){return re({dC:A,eu:k,ev:L,ew:x,hx:y,eH:_,rt:g,hT:h,kt:b,tj:d,gs:v,tm:$,tq:u,tx:i,tH:c,bT:o,fh:t,iD:a,ea:r,fx:e})},n(j,"boundingClientRects",pr(n(H,function(A){return n(H,function(V){return n(H,function(E){return re({rd:E,rB:V,t2:A})},n(j,"elements",pr(n(H,function(E){return n(H,function(G){return re({lS:G,bI:E})},n(j,"boundingClientRect",n(H,function(G){return n(H,function(J){return n(H,function(te){return n(H,function($e){return re({bB:$e,bJ:te,bQ:J,bW:G})},n(j,"bottom",W))},n(j,"left",W))},n(j,"right",W))},n(j,"top",W))))},n(j,"id",Se)))))},n(j,"frameId",Se))},n(j,"scroll",n(H,function(A){return n(H,function(V){return n(H,function(E){return n(H,function(G){return n(H,function(J){return n(H,function(te){return re({l9:te,ma:J,bJ:G,bW:E,u0:V,pz:A})},n(j,"contentHeight",W))},n(j,"contentWidth",W))},n(j,"left",W))},n(j,"top",W))},n(j,"viewportHeight",W))},n(j,"viewportWidth",W)))))))},n(j,"darkModeIsOn",ie))},n(j,"deviceOrientation",On(f([ti(T),n(Ye,D,n(H,function(L){return n(H,function(k){return n(H,function(A){return re({aT:A,p4:k,rF:L})},n(j,"alpha",W))},n(j,"beta",W))},n(j,"gamma",W)))]))))},n(j,"devicePixelRatio",W))},n(j,"dt",W))},n(j,"focusedElementIsContentEditable",ie))},n(j,"focusedElementIsTextInput",ie))},n(j,"keyboard",n(H,function(h){return n(H,function(g){return n(H,function(_){return n(H,function(y){return n(H,function(x){return n(H,function(L){return n(H,function(k){return n(H,function(A){return n(H,function(V){return n(H,function(E){return re({i1:E,jq:V,jx:A,q2:k,bJ:L,j7:x,tD:y,bQ:_,kV:g,lm:h})},n(j,"alt",ie))},n(j,"ctrl",ie))},n(j,"down",ie))},n(j,"downs",pr(Se)))},n(j,"left",ie))},n(j,"meta",ie))},n(j,"pressedKeys",pr(Se)))},n(j,"right",ie))},n(j,"shift",ie))},n(j,"up",ie))))},n(j,"operatingSystem",Se))},n(j,"pageId",Se))},n(j,"pageScroll",n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(_){return re({l9:_,ma:g,bJ:h,bW:b,u0:d,pz:v})},n(j,"contentHeight",W))},n(j,"contentWidth",W))},n(j,"left",W))},n(j,"top",W))},n(j,"viewportHeight",W))},n(j,"viewportWidth",W))))},n(j,"paneBoundingBoxes",pr(n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return re({rS:h,bJ:b,tn:d,bW:v,u5:$})},n(j,"height",W))},n(j,"left",W))},n(j,"paneId",Se))},n(j,"top",W))},n(j,"width",W)))))},n(j,"persisted",pr(n(H,function(u){return n(H,function($){return re(p(u,$))},n(Ar,1,Se))},n(Ar,0,Se)))))},n(j,"pointer",n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(_){return n(H,function(y){return n(H,function(x){return n(H,function(L){return re({q_:L,jx:x,hy:y,hz:_,rc:g,sc:h,sO:b,tU:d,tW:v,lm:$,pF:u,pH:i})},n(j,"doubleClick",ie))},n(j,"down",ie))},n(j,"dx",W))},n(j,"dy",W))},n(j,"elementIdsForLastDown",pr(Se)))},n(j,"isDown",ie))},n(j,"move",ie))},n(j,"rightDown",ie))},n(j,"rightUp",ie))},n(j,"up",ie))},n(j,"x",W))},n(j,"y",W))))},n(j,"rawPointer",n(H,function(c){return n(H,function(i){return n(H,function(u){return n(H,function($){return n(H,function(v){return n(H,function(d){return n(H,function(b){return n(H,function(h){return n(H,function(g){return n(H,function(_){return n(H,function(y){return n(H,function(x){return re({q_:x,jx:y,hy:_,hz:g,rc:h,sc:b,sO:d,tU:v,tW:$,lm:u,pF:i,pH:c})},n(j,"doubleClick",ie))},n(j,"down",ie))},n(j,"dx",W))},n(j,"dy",W))},n(j,"elementIdsForLastDown",pr(Se)))},n(j,"isDown",ie))},n(j,"move",ie))},n(j,"rightDown",ie))},n(j,"rightUp",ie))},n(j,"up",ie))},n(j,"x",W))},n(j,"y",W))))},n(j,"screen",n(H,function(o){return n(H,function(c){return re({rS:c,u5:o})},n(j,"height",W))},n(j,"width",W))))},n(j,"screenOrientationAngle",W))},n(j,"searchParamsFromUrl",On(f([ti(T),n(Ye,D,pr(n(H,function(a){return n(H,function(t){return re(p(a,t))},n(Ar,1,Se))},n(Ar,0,Se))))]))))},n(j,"touches",pr(n(H,function(r){return n(H,function(a){return n(H,function(t){return re({bI:t,pF:a,pH:r})},n(j,"id",Nr))},n(j,"x",W))},n(j,"y",W)))))},n(j,"wheel",n(H,function(e){return n(H,function(r){return n(H,function(a){return n(H,function(t){return n(H,function(o){return re({mh:o,mi:t,mp:a,kG:r,im:e})},n(j,"deltaX",W))},n(j,"deltaY",W))},n(j,"elementIdsForLastWheel",pr(Se)))},n(j,"pinchDeltaForChrome",W))},n(j,"pinchScaleForSafari",On(f([ti(T),n(Ye,D,W)])))))))))(0)}}})})(this);
